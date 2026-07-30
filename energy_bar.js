/* 全局科幻能量柱 · Energy Core
 * 与学习中心(study_app.js)共用同一份 localStorage(study_v1) 进度数据：
 *   - 阅读教材章节 -> awardReading(ch) 累积能量
 *   - 做题/考试判分 -> awardExam(right,total) 累积能量（由 exam_app.js 调用）
 * 数据完全兼容 study_app.js，跨页面一致，零后端。
 */
(function () {
  'use strict';
  var LS_KEY = 'study_v1';
  var ENERGY_MAX = 100;
  var SEED_ENERGY = 8;

  var CHAPTERS = [
    { ch: 1, name: '行列式' }, { ch: 2, name: '矩阵' }, { ch: 3, name: '向量组' },
    { ch: 4, name: '方程组' }, { ch: 5, name: '二次型' }
  ];
  var STAGES = [
    { at: 0,   name: '萌芽', icon: '🌱' }, { at: 20,  name: '生长', icon: '🌿' },
    { at: 40,  name: '抽枝', icon: '🪴' }, { at: 60,  name: '花开', icon: '🌸' },
    { at: 80,  name: '成林', icon: '🌳' }, { at: 100, name: '大成', icon: '🏔' }
  ];

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function defaultState() {
    return { energy: SEED_ENERGY, level: 1, mastery: {}, lastDay: null, streak: 0,
      papers: 0, perfectCount: 0, todayGain: 0, lastGainDay: null, lastRate: null,
      readCh: {}, lastReadDay: null };
  }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(LS_KEY)); if (s) return Object.assign(defaultState(), s); }
    catch (e) {}
    return defaultState();
  }
  function save(s) { try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {} }

  function currentStage(e) { var c = STAGES[0]; for (var i = 0; i < STAGES.length; i++) if (e >= STAGES[i].at) c = STAGES[i]; return c; }
  function nextStage(e) { for (var i = 0; i < STAGES.length; i++) if (e < STAGES[i].at) return STAGES[i]; return null; }

  // 阅读奖励：首次阅读某章给能量；每日首次阅读额外奖励
  function awardReading(ch) {
    var s = load(); var t = todayStr(); var gained = 0;
    if (!s.readCh[ch]) { s.readCh[ch] = true; gained += 4; }
    if (s.lastReadDay !== t) { s.lastReadDay = t; gained += 2; }
    if (gained) {
      s.energy += gained;
      while (s.energy >= ENERGY_MAX) { s.energy -= ENERGY_MAX; s.level++; }
      save(s);
    }
    return gained;
  }

  // 做题/考试奖励（由 exam_app.js 判分后调用）
  function awardExam(right, total) {
    if (!total) return 0;
    var s = load(); var t = todayStr(); var rate = right / total;
    var gain = Math.round(10 * (0.5 + 0.5 * rate)) + right;
    if (s.lastGainDay !== t) { s.todayGain = 0; s.lastGainDay = t; }
    if (s.lastDay !== t) {
      s.streak = (s.lastDay && prevDay(t) === s.lastDay) ? s.streak + 1 : 1;
      s.lastDay = t; gain += 5;
    }
    s.energy += gain; s.todayGain += gain;
    while (s.energy >= ENERGY_MAX) { s.energy -= ENERGY_MAX; s.level++; }
    save(s);
    return gain;
  }
  function prevDay(s) {
    if (!s) return null;
    var d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* ---------------- UI ---------------- */
  function detectChapter() {
    var m = location.pathname.match(/ch(\d)\.html$/);
    if (m) return parseInt(m[1], 10);
    return null;
  }

  var panelOpen = false;
  function buildUI() {
    if (document.getElementById('eb-core')) return;
    var core = document.createElement('div');
    core.className = 'eb-core'; core.id = 'eb-core'; core.title = '成长能量核心 · 点击查看';
    core.innerHTML = '<span class="eb-lvl" id="eb-lvl">1</span>';
    document.body.appendChild(core);

    var panel = document.createElement('div');
    panel.className = 'eb-panel'; panel.id = 'eb-panel'; panel.hidden = true;
    panel.innerHTML =
      '<span class="eb-close" id="eb-close">×</span>' +
      '<h3>⚡ 成长能量核心</h3>' +
      '<div class="eb-sub">每一次阅读与练习，都让光更亮一点</div>' +
      '<div class="eb-row">' +
        '<div class="eb-stem"><div class="eb-fill" id="eb-fill"><span class="eb-pct" id="eb-pct"></span></div></div>' +
        '<div class="eb-info">' +
          '<div class="eb-stage" id="eb-stage"></div>' +
          '<div class="eb-hint" id="eb-hint"></div>' +
          '<div class="eb-stats">' +
            '<div class="eb-stat"><b id="eb-day">1</b><small>连续天数</small></div>' +
            '<div class="eb-stat"><b id="eb-today">0</b><small>今日能量</small></div>' +
            '<div class="eb-stat"><b id="eb-lv">1</b><small>等级</small></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="eb-chs" id="eb-chs"></div>' +
      '<div class="eb-foot">数据保存在本机浏览器 · 纯前端零成本</div>';
    document.body.appendChild(panel);

    core.addEventListener('click', function () {
      panelOpen = !panelOpen;
      panel.hidden = !panelOpen;
      if (panelOpen) render();
    });
    document.getElementById('eb-close').addEventListener('click', function (e) {
      e.stopPropagation(); panelOpen = false; panel.hidden = true;
    });
  }

  function render() {
    var s = load();
    var lvl = document.getElementById('eb-lvl'); if (lvl) lvl.textContent = s.level;
    var fill = document.getElementById('eb-fill'); if (fill) fill.style.height = (s.energy / ENERGY_MAX * 100) + '%';
    var pct = document.getElementById('eb-pct'); if (pct) pct.innerHTML = '<span>' + Math.round(s.energy) + '%</span>';
    var st = currentStage(s.energy);
    var stageEl = document.getElementById('eb-stage'); if (stageEl) stageEl.innerHTML = '<span class="eb-ico">' + st.icon + '</span>' + st.name;
    var ns = nextStage(s.energy);
    var hint = document.getElementById('eb-hint');
    if (hint) {
      if (s.energy >= ENERGY_MAX - 0.001) hint.textContent = '这一成长周期已圆满，新旅程正开始。';
      else if (ns) hint.textContent = '距离「' + ns.name + '」还差 ' + (ns.at - s.energy) + ' 点能量。';
      else hint.textContent = '继续前进，让成长看得见。';
    }
    var day = document.getElementById('eb-day'); if (day) day.textContent = s.streak || 1;
    var today = document.getElementById('eb-today'); if (today) today.textContent = '+' + (s.todayGain || 0);
    var lv = document.getElementById('eb-lv'); if (lv) lv.textContent = s.level;
    var chs = document.getElementById('eb-chs');
    if (chs) {
      chs.innerHTML = '';
      CHAPTERS.forEach(function (c) {
        var m = s.mastery[c.ch];
        var rate = m && m.total ? Math.round(m.right / m.total * 100) : 0;
        var row = document.createElement('div'); row.className = 'eb-ch';
        row.innerHTML = '<span class="eb-nm">' + c.name + '</span>' +
          '<span class="eb-track"><i style="width:' + rate + '%"></i></span>' +
          '<span class="eb-v">' + rate + '%</span>';
        chs.appendChild(row);
      });
    }
  }

  function floatGain(gain) {
    if (!gain) return;
    var f = document.createElement('div'); f.className = 'eb-float'; f.textContent = '+' + gain;
    document.body.appendChild(f);
    var core = document.getElementById('eb-core');
    if (core) { core.classList.add('eb-pulse'); setTimeout(function () { core.classList.remove('eb-pulse'); }, 520); }
    setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 1300);
  }

  function init() {
    buildUI();
    var ch = detectChapter();
    var gained = 0;
    if (ch) gained = awardReading(ch);
    render();
    if (gained) floatGain(gained);
    // 跨标签同步
    window.addEventListener('storage', function (e) { if (e.key === LS_KEY) { if (panelOpen) render(); else render(); } });
  }

  // 暴露给考试系统
  window.EnergyBar = {
    init: init,
    awardReading: awardReading,
    awardExam: awardExam,
    refresh: render
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
