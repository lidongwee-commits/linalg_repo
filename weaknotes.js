/* 右侧浮动薄弱点标记 / 笔记面板
 * 数据写入 energy_bar 的 study_v1（window.EnergyBar.load/save），
 * 因此导出"能量柱备份码"时会自动带上笔记；无 energy_bar 时回退到本地键。
 */
(function () {
  'use strict';
  var FB_KEY = 'linalg_weaknotes_v1';

  function getState() {
    try {
      if (window.EnergyBar && window.EnergyBar.load) {
        var s = window.EnergyBar.load();
        s.weak = s.weak || { note: '', marks: {} };
        return s;
      }
    } catch (e) {}
    try {
      var raw = localStorage.getItem(FB_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { weak: { note: '', marks: {} } };
  }
  function setState(s) {
    s.weak = s.weak || { note: '', marks: {} };
    try {
      if (window.EnergyBar && window.EnergyBar.save) { window.EnergyBar.save(s); return; }
    } catch (e) {}
    try { localStorage.setItem(FB_KEY, JSON.stringify(s)); } catch (e) {}
  }

  // 稳定 id：有原生 id 用原生；否则用标题哈希，保证换机/重排后仍能对应
  function hash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    return 'wn-' + h.toString(36);
  }
  function clean(t) { return (t || '').replace(/\s+/g, ' ').trim(); }

  function collect() {
    var units = [];
    document.querySelectorAll('h2[id^="s"]').forEach(function (h) {
      units.push({ id: h.id, el: h, title: clean(h.textContent).slice(0, 42), type: 'sec' });
    });
    document.querySelectorAll('.ex, .def, .case').forEach(function (b) {
      var lab = b.querySelector('.lab');
      var t = lab ? clean(lab.textContent) : clean(b.textContent).slice(0, 42);
      units.push({ id: hash(t), el: b, title: t.slice(0, 42), type: 'block' });
    });
    return units;
  }

  var UNITS = [];
  var panel, body, badge, openFlag = false;

  function badgeCount(st) {
    var n = 0, m = st.weak.marks || {};
    for (var k in m) if (m[k] && m[k].weak) n++;
    return n;
  }
  function updateBadge(st) {
    if (badge) badge.textContent = badgeCount(st);
  }
  function applyHighlights(st) {
    var m = st.weak.marks || {};
    UNITS.forEach(function (u) {
      if (m[u.id] && m[u.id].weak) u.el.classList.add('wn-weak-on');
      else u.el.classList.remove('wn-weak-on');
    });
  }

  function renderPanel() {
    var st = getState();
    updateBadge(st);
    applyHighlights(st);
    var m = st.weak.marks || {};
    var html = '';
    html += '<div class="wn-glob"><label>📝 我的总笔记（任意内容，随备份码同步）</label>' +
      '<textarea id="wn-note-glob" rows="3" placeholder="公式总记不住？把你的口诀写这儿…">' +
      escapeHtml(st.weak.note || '') + '</textarea></div>';
    html += '<div class="wn-sub">标记薄弱的小节 / 例题（点击标题跳转）</div>';

    var weakList = UNITS.filter(function (u) { return m[u.id] && m[u.id].weak; });
    var restList = UNITS.filter(function (u) { return !(m[u.id] && m[u.id].weak); });
    // 已标记的排在前面，方便回看
    weakList.concat(restList).forEach(function (u) {
      var isWeak = !!(m[u.id] && m[u.id].weak);
      var note = (m[u.id] && m[u.id].note) || '';
      var tag = u.type === 'sec' ? '§' : '例';
      html += '<div class="wn-sec' + (isWeak ? ' weak' : '') + '" data-id="' + u.id + '">' +
        '<div class="wn-sec-top">' +
        '<span class="t" data-go="' + u.id + '">' + tag + ' ' + escapeHtml(u.title) + '</span>' +
        '<a class="go" data-go="' + u.id + '">跳转</a>' +
        '<label class="wn-toggle"><input type="checkbox" data-weak="' + u.id + '"' + (isWeak ? ' checked' : '') + '>薄弱</label>' +
        '</div>' +
        '<textarea class="wn-note" data-note="' + u.id + '" rows="2" placeholder="这处为什么弱？写一句…">' + escapeHtml(note) + '</textarea>' +
        '</div>';
    });
    if (!UNITS.length) html += '<div class="wn-empty">本页暂无可标记内容</div>';
    html += '<div class="wn-tip">数据存本机，并随"能量柱备份码"同步；换设备时先用能量柱导出备份码再导入即可带走。</div>';
    body.innerHTML = html;

    body.querySelector('#wn-note-glob').addEventListener('input', function (e) {
      var s = getState(); s.weak.note = e.target.value; setState(s);
    });
    body.querySelectorAll('[data-go]').forEach(function (a) {
      a.addEventListener('click', function () {
        var el = document.getElementById(a.getAttribute('data-go'));
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); el.classList.add('wn-flash'); }
      });
    });
    body.querySelectorAll('[data-weak]').forEach(function (c) {
      c.addEventListener('change', function () {
        var id = c.getAttribute('data-weak');
        var s = getState(); s.weak.marks = s.weak.marks || {};
        s.weak.marks[id] = s.weak.marks[id] || { weak: false, note: '' };
        s.weak.marks[id].weak = c.checked;
        if (!c.checked) s.weak.marks[id].note = s.weak.marks[id].note || '';
        setState(s); applyHighlights(s); updateBadge(s);
        // 视觉反馈：折叠/展开该条的笔记框
        var sec = c.closest('.wn-sec'); if (sec) sec.classList.toggle('weak', c.checked);
      });
    });
    body.querySelectorAll('[data-note]').forEach(function (ta) {
      ta.addEventListener('input', function () {
        var id = ta.getAttribute('data-note');
        var s = getState(); s.weak.marks = s.weak.marks || {};
        s.weak.marks[id] = s.weak.marks[id] || { weak: false, note: '' };
        s.weak.marks[id].weak = s.weak.marks[id].weak || true; // 写了笔记即视为标记
        s.weak.marks[id].note = ta.value; setState(s); updateBadge(s);
        var sec = ta.closest('.wn-sec'); if (sec && !sec.classList.contains('weak')) sec.classList.add('weak');
      });
    });
  }

  function escapeHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function exportNotes() {
    var st = getState();
    var lines = ['【线性代数 · 我的薄弱点 & 笔记】', ''];
    lines.push('— 总笔记 —');
    lines.push(st.weak.note || '（空）');
    lines.push('');
    lines.push('— 标记的薄弱小节 / 例题 —');
    UNITS.forEach(function (u) {
      var mk = st.weak.marks && st.weak.marks[u.id];
      if (mk && mk.weak) {
        lines.push('• ' + u.title + (mk.note ? '：' + mk.note : ''));
      }
    });
    var txt = lines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { flashTip('已复制到剪贴板'); }, function () { downloadTxt(txt); });
    } else { downloadTxt(txt); }
  }
  function downloadTxt(txt) {
    var a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
    a.download = '线性代数_我的笔记.txt'; a.click();
  }
  function flashTip(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;left:50%;top:18px;transform:translateX(-50%);background:#0f172a;color:#fff;padding:8px 16px;border-radius:8px;z-index:2000;font-size:13px;';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1600);
  }
  function clearMarks() {
    if (!confirm('确定清空所有"薄弱"标记与笔记？此操作不可撤销。')) return;
    var s = getState(); s.weak = { note: '', marks: {} }; setState(s); renderPanel();
  }

  function togglePanel() {
    openFlag = !openFlag;
    panel.classList.toggle('open', openFlag);
    if (openFlag) renderPanel();
  }

  function init() {
    UNITS = collect();
    var fab = document.createElement('button');
    fab.className = 'wn-fab';
    fab.innerHTML = '📌 薄弱点 <span class="wn-badge" id="wn-badge">0</span>';
    fab.addEventListener('click', togglePanel);
    document.body.appendChild(fab);
    badge = fab.querySelector('#wn-badge');

    panel = document.createElement('div');
    panel.className = 'wn-panel';
    panel.innerHTML =
      '<div class="wn-head"><h3>📌 我的薄弱点 & 笔记</h3><button class="wn-close" id="wn-close">×</button></div>' +
      '<div class="wn-body" id="wn-body"></div>' +
      '<div class="wn-foot">' +
      '<button class="wn-btn exp" id="wn-export">导出笔记</button>' +
      '<button class="wn-btn clr" id="wn-clear">清空标记</button>' +
      '</div>';
    document.body.appendChild(panel);
    body = panel.querySelector('#wn-body');
    panel.querySelector('#wn-close').addEventListener('click', togglePanel);
    panel.querySelector('#wn-export').addEventListener('click', exportNotes);
    panel.querySelector('#wn-clear').addEventListener('click', clearMarks);

    // 初始高亮 + 角标
    var st = getState();
    applyHighlights(st); updateBadge(st);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
