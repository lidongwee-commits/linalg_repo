/* ============================================================================
   fluo.js  —  「荧光」知识点 checkpoint：行内能量点
   重要 定理 / 结论 / 例题 旁挂一个发光能量晶体；点击后弹层问"学会了吗？"，
   点「会了」或「口述一下（语音/打字）」即回收，并记录到本地"已掌握".
   每个荧光绑定自己的 kind+title+内容，互不相同 —— 不会都弹同一题目.

   用法（作者侧，写在章节源 html 的正文里）：
     <span class="fluo" data-kind="定理" data-title="反函数存在定理" data-fid="gdsx1-thm-inv">反函数存在定理</span>
     data-kind ∈ {定理, 结论, 例题}；data-title 显示在弹层标题；data-fid 稳定主键（建议必填）.
   单一来源：D:\数字教材\shared\fluo.js（两本书构建共用）
   ========================================================================== */
(function () {
  'use strict';

  var KEY = 'fluo_learned_v1';
  var KIND_ICON = { '定理': '📘', '结论': '💡', '例题': '📝', '进度': '🚩', '定义': '📐', '要点': '🇨🇳', '考研': '🎓' };
  function askText(kind, already) {
    if (already) return '已经掌握啦，可以再确认一次：';
    if (kind === '进度') return '本节内容掌握了吗？';
    return '学会了吗？';
  }

  function bookKey() {
    if (window.TOWER_BOOK) return window.TOWER_BOOK;
    var m = location.pathname.match(/([^\/]+)\/教材发布\/ch\d+\.html/);
    return m ? m[1] : 'book';
  }
  function chNum() {
    var m = location.pathname.match(/ch(\d+)\.html/);
    return m ? m[1] : '0';
  }
  function ns() { return bookKey() + ':' + chNum(); }

  function loadLearned() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveLearned(o) {
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }
  var learned = loadLearned();

  var pop = null, activeEl = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function countHere() {
    var pre = ns() + ':', n = 0;
    for (var k in learned) if (learned.hasOwnProperty(k) && k.indexOf(pre) === 0) n++;
    return n;
  }
  function totalHere() { return document.querySelectorAll('.fluo').length; }

  function updateCounter() {
    var c = document.getElementById('fluo-counter');
    if (!c) return;
    c.querySelector('.fc-num').textContent = countHere();
    c.querySelector('.fc-total').textContent = totalHere();
  }

  /* ---- 把荧光回收进度同步给本章 tower 的迷雾：从左向右扫开 ---- */
  function updateTowerFog() {
    var ch = chNum();
    var floor = document.querySelector('.towerbox .floor[data-ch="' + ch + '"], .floor[data-ch="' + ch + '"]');
    if (!floor) return;
    var total = totalHere();
    var pct = total ? Math.round(countHere() / total * 100) : 0;
    var cur = parseInt(floor.style.getPropertyValue('--clear') || '0', 10) || 0;
    if (pct > cur) {
      try { floor.style.setProperty('--clear', pct); } catch (e) {}
    }
  }

  function ensureCounter() {
    if (document.getElementById('fluo-counter')) return;
    var c = document.createElement('div');
    c.id = 'fluo-counter';
    c.innerHTML = '<span class="fc-dot"></span><span>已回收 <b class="fc-num">0</b>/<b class="fc-total">0</b> 处荧光</span>';
    // 优先放进知识之塔侧栏目录，避免左下角浮动遮挡；否则 fallback 到 body 左下角
    var slot = document.getElementById('tower-slot');
    if (slot) { slot.insertBefore(c, slot.firstChild); }
    else { document.body.appendChild(c); }
  }

  function fidOf(el) {
    return el.getAttribute('data-fid') || el.getAttribute('data-fluo-id') ||
           (el.textContent || '').trim().slice(0, 12);
  }
  function learnedId(el) { return ns() + ':' + fidOf(el); }

  function flyToCounter(el) {
    var c = document.getElementById('fluo-counter');
    if (!c) return;
    var r1 = el.getBoundingClientRect(), r2 = c.getBoundingClientRect();
    var dot = document.createElement('div');
    dot.className = 'fluo-fly';
    dot.style.left = (r1.left + r1.width / 2 - 7) + 'px';
    dot.style.top = (r1.top + r1.height / 2 - 7) + 'px';
    document.body.appendChild(dot);
    dot.getBoundingClientRect();
    var dx = (r2.left + 14) - (r1.left + r1.width / 2);
    var dy = (r2.top + r2.height / 2) - (r1.top + r1.height / 2);
    dot.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.4)';
    dot.style.opacity = '0';
    setTimeout(function () { if (dot.parentNode) dot.parentNode.removeChild(dot); }, 1050);
  }

  function markLearned(el, note) {
    learned[learnedId(el)] = {
      kind: el.getAttribute('data-kind') || '结论',
      title: el.getAttribute('data-title') || '',
      note: note || '',
      ts: Date.now()
    };
    saveLearned(learned);
    el.classList.add('is-learned');
    updateCounter();
    flyToCounter(el);
    updateTowerFog();
  }

  function closePop() {
    if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
    pop = null; activeEl = null;
  }

  function showDone(p, autoclose) {
    p.querySelector('.fp-actions').style.display = 'none';
    p.querySelector('.fp-talk').classList.remove('show');
    p.querySelector('.fp-ask').textContent = '已掌握 ✓';
    p.querySelector('.fp-done').classList.add('show');
    if (autoclose) setTimeout(closePop, 1400);
  }

  function positionPop(p, el) {
    var r = el.getBoundingClientRect();
    var pw = p.offsetWidth, ph = p.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight;
    var left = r.left + r.width / 2 - pw / 2;
    var top = r.bottom + 8;
    if (top + ph > vh - 8) top = r.top - ph - 8;
    if (top < 8) top = 8;
    left = Math.max(8, Math.min(left, vw - pw - 8));
    p.style.left = left + 'px';
    p.style.top = top + 'px';
  }

  function setupMic(p, ta) {
    var mic = p.querySelector('.fp-mic');
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { mic.style.display = 'none'; return; }
    var rec = null;
    mic.addEventListener('click', function () {
      if (rec && mic.classList.contains('rec')) { try { rec.stop(); } catch (e) {} return; }
      try {
        rec = new SR();
        rec.lang = 'zh-CN'; rec.interimResults = true; rec.continuous = false;
        rec.onresult = function (e) {
          var s = ''; for (var i = 0; i < e.results.length; i++) s += e.results[i][0].transcript;
          ta.value = s;
        };
        rec.onend = function () { mic.classList.remove('rec'); mic.textContent = '🎤 语音'; };
        rec.onerror = function () { mic.classList.remove('rec'); mic.textContent = '🎤 语音'; };
        rec.start();
        mic.classList.add('rec'); mic.textContent = '⏹ 停止';
      } catch (e) { mic.classList.remove('rec'); }
    });
  }

  function buildPop(el) {
    closePop();
    var kind = el.getAttribute('data-kind') || '结论';
    var title = el.getAttribute('data-title') || '';
    var text = (el.getAttribute('data-quote') || el.textContent || '').trim();
    if (text.length > 160) text = text.slice(0, 160) + '…';
    var already = !!learned[learnedId(el)];

    var p = document.createElement('div');
    p.className = 'fluo-pop';
    p.setAttribute('data-kind', kind);
    p.setAttribute('role', 'dialog');
    p.innerHTML =
      '<div class="fp-head">' +
        '<span class="fp-badge" data-kind="' + esc(kind) + '">' + (KIND_ICON[kind] || '💡') + ' ' + esc(kind) + '</span>' +
        '<span class="fp-title">' + esc(title) + '</span>' +
      '</div>' +
      (text ? '<div class="fp-quote">' + esc(text) + '</div>' : '') +
      '<div class="fp-ask">' + askText(kind, already) + '</div>' +
      '<div class="fp-actions">' +
        '<button class="fp-btn fp-btn-ok" type="button">✅ 会了</button>' +
        '<button class="fp-btn fp-btn-talk" type="button">🎤 口述一下</button>' +
        '<button class="fp-btn fp-btn-later" type="button">稍后再说</button>' +
      '</div>' +
      '<div class="fp-talk">' +
        '<textarea placeholder="用自己的话复述一遍（可选），点「确认掌握」即回收此荧光…"></textarea>' +
        '<div class="fp-talk-row">' +
          '<button class="fp-mic" type="button">🎤 语音</button>' +
          '<span class="fp-hint">支持浏览器语音识别（Chrome/Edge）；也可直接打字.</span>' +
        '</div>' +
        '<div class="fp-actions" style="margin-top:8px">' +
          '<button class="fp-btn fp-btn-ok fp-confirm" type="button">确认掌握</button>' +
        '</div>' +
      '</div>' +
      '<div class="fp-done">✓ 已回收，记在你的「已掌握」里</div>';

    document.body.appendChild(p);
    positionPop(p, el);

    var ta = p.querySelector('textarea');
    p.querySelector('.fp-btn-ok').addEventListener('click', function () {
      markLearned(el, ''); showDone(p, true);
    });
    p.querySelector('.fp-btn-later').addEventListener('click', function () { closePop(); });
    p.querySelector('.fp-btn-talk').addEventListener('click', function () {
      p.querySelector('.fp-talk').classList.add('show');
    });
    p.querySelector('.fp-confirm').addEventListener('click', function () {
      markLearned(el, ta.value.trim()); showDone(p, true);
    });
    setupMic(p, ta);
    if (already) { /* keep actions; user may re-confirm or view */ }
    return p;
  }

  function hasFluo(el) { return !!(el && el.querySelector && el.querySelector('.fluo')); }
  function cleanTitle(t) { return String(t || '').replace(/\s+/g, ' ').trim().replace(/^[,\s·]+|[,\s·]+$/g, '').slice(0, 42); }

  /* ---- 自动接管：给定理/定义/结论/例题/小节进度打上荧光 ---- */
  function autoMark() {
    var col = document.querySelector('.col');
    if (!col || col.getAttribute('data-fluo-auto') === '1') return;
    col.setAttribute('data-fluo-auto', '1');
    var ch = chNum();

    var plans = [
      { sel: '.thm > .lab', kind: '定理', key: 'thm' },
      { sel: '.def > .lab', kind: '定义', key: 'def' },
      { sel: '.cor > .lab', kind: '结论', key: 'cor' },
      { sel: '.cn-point > .lab', kind: '要点', key: 'key' },
      { sel: '.ex > .lab', kind: '例题', key: 'exa', examKeywords: true }
    ];

    plans.forEach(function (plan) {
      var labs = col.querySelectorAll(plan.sel);
      Array.prototype.forEach.call(labs, function (lab, i) {
        if (hasFluo(lab)) return;
        var kind = plan.kind;
        if (plan.examKeywords) {
          var txt = (lab.textContent || '').toLowerCase();
          if (/考研|经典|必背|精选/.test(txt)) kind = '考研';
        }
        var title = cleanTitle(lab.textContent);
        var pin = document.createElement('span');
        pin.className = 'fluo fluo-pin';
        pin.setAttribute('data-kind', kind);
        pin.setAttribute('data-title', title);
        pin.setAttribute('data-fid', 'ch' + ch + '-' + plan.key + '-' + (i + 1));
        pin.setAttribute('data-quote', title);
        pin.setAttribute('aria-label', kind + '：' + title);
        lab.appendChild(pin);
      });
    });

    /* 大节末尾进度光标：每个 h2（§1.x）末尾只放一个 subtle 小荧光 pin */
    var h2s = col.querySelectorAll('h2');
    Array.prototype.forEach.call(h2s, function (h2, i) {
      var nextH2 = h2s[i + 1] || null;
      var last = h2;
      var el = h2.nextElementSibling;
      while (el && el !== nextH2) {
        if (el.nodeType === 1 && (!el.classList || !el.classList.contains('fluo-pin'))) last = el;
        el = el.nextElementSibling;
      }
      if (last === h2) return;
      var secTitle = cleanTitle(h2.textContent) || ('第' + (i + 1) + '节');
      var h2id = h2.id || ('sec-' + (i + 1));
      var fid = 'ch' + ch + '-sec-' + h2id;
      if (document.querySelector('.fluo-pin[data-fid="' + fid + '"]')) return;
      var pin = document.createElement('span');
      pin.className = 'fluo fluo-pin';
      pin.setAttribute('data-kind', '进度');
      pin.setAttribute('data-title', secTitle);
      pin.setAttribute('data-fid', fid);
      pin.setAttribute('data-quote', '本节重点：' + secTitle + '.确认掌握即可回收进度荧光.');
      pin.setAttribute('aria-label', '进度：' + secTitle);
      if (last.nextElementSibling === nextH2 || !last.nextElementSibling) {
        if (nextH2) last.parentNode.insertBefore(pin, nextH2);
        else last.parentNode.appendChild(pin);
      } else {
        last.parentNode.insertBefore(pin, last.nextElementSibling);
      }
    });
  }

  function assignStates() {
    var list = document.querySelectorAll('.fluo');
    Array.prototype.forEach.call(list, function (el) {
      if (!el.getAttribute('data-fluo-id') && el.getAttribute('data-fid')) {
        el.setAttribute('data-fluo-id', el.getAttribute('data-fid'));
      }
      if (learned[learnedId(el)]) el.classList.add('is-learned');
    });
  }

  function bindElement(el) {
    if (el.getAttribute('data-fluo-bound') === '1') return;
    el.setAttribute('data-fluo-bound', '1');
    el.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (pop && pop._el === el) { closePop(); return; }
      var p = buildPop(el); p._el = el; pop = p; activeEl = el;
    });
  }
  function refresh() {
    autoMark();
    var list = document.querySelectorAll('.fluo');
    if (!list.length) return;
    ensureCounter();
    assignStates();
    Array.prototype.forEach.call(list, bindElement);
    updateCounter();
    updateTowerFog();

    if (!document.body.getAttribute('data-fluo-listeners')) {
      document.body.setAttribute('data-fluo-listeners', '1');
      document.addEventListener('click', function (e) {
        if (!pop) return;
        if (pop.contains(e.target) || (activeEl && activeEl.contains(e.target))) return;
        closePop();
      });
      window.addEventListener('scroll', function () { if (pop) closePop(); }, true);
      window.addEventListener('resize', function () { if (pop) closePop(); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', refresh);
  else refresh();

  window.Fluo = { refresh: refresh, learned: function () { return learned; } };
})();
