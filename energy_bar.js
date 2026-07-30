/* 全局成长能量条 · Energy Bar（v2：嵌入侧栏/顶栏，不打扰阅读，机制更贴合实际）
 * 数据存本机 localStorage(study_v1)，零后端，跨页面一致。
 *
 * 能量代表“学习投入”，靠真实学习行为累积：
 *   - 认真学完一个小节（滚动到该节并停留数秒）→ 阅读积分（每日封顶，防空刷）
 *   - 做「学完就练」每题 → 努力分；答对再 + 正确分
 *   - 完成一次考试/自测 → 按正确率给分
 *   - 连续每天学习 → 连击奖励
 * 能量满 100 升级，开启新的成长周期。
 */
(function () {
  'use strict';
  var LS_KEY = 'study_v1';
  var ENERGY_MAX = 100;
  var SEED_ENERGY = 8;

  // —— 机制参数（贴合实际、可解释）——
  var READ_POINTS = 3;       // 认真学完 1 个小节
  var READ_DWELL = 4000;     // 停留满 4 秒才算“认真学完”
  var READ_DAILY_CAP = 15;   // 阅读积分每日封顶（约 5 节），防止空刷
  var TRY_POINTS = 1;        // 「学完就练」每做 1 题：努力分
  var RIGHT_POINTS = 1;      // 每答对 1 题：额外正确分
  var STREAK_BONUS = 5;      // 连续学习连击奖励（每天一次）

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
      readDaily: {}, streakBonusDay: null };
  }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(LS_KEY)); if (s) return Object.assign(defaultState(), s); }
    catch (e) {}
    return defaultState();
  }
  function save(s) { try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {} }

  function currentStage(e) { var c = STAGES[0]; for (var i = 0; i < STAGES.length; i++) if (e >= STAGES[i].at) c = STAGES[i]; return c; }
  function nextStage(e) { for (var i = 0; i < STAGES.length; i++) if (e < STAGES[i].at) return STAGES[i]; return null; }
  function prevDay(s) {
    if (!s) return null;
    var d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // 统一加分：累加能量、升级、维护连续天数与今日能量
  function bump(gain) {
    if (!(gain > 0)) return 0;
    var s = load(), t = todayStr(), extra = 0;
    if (s.lastGainDay !== t) { s.todayGain = 0; s.lastGainDay = t; }
    if (s.lastDay !== t) {
      var consec = s.lastDay && prevDay(t) === s.lastDay;
      s.streak = consec ? (s.streak || 1) + 1 : 1;
      s.lastDay = t;
      if (consec && s.streak >= 2 && s.streakBonusDay !== t) { extra = STREAK_BONUS; s.streakBonusDay = t; }
    }
    gain += extra;
    s.todayGain = (s.todayGain || 0) + gain;
    s.energy += gain;
    while (s.energy >= ENERGY_MAX) { s.energy -= ENERGY_MAX; s.level = (s.level || 1) + 1; }
    save(s);
    return gain;
  }

  // 阅读：滚动到小节并停留 → 认真学完（每日封顶）
  function awardSectionStudy(secId) {
    if (!secId) return 0;
    var s = load(), t = todayStr();
    if (!s.readDaily) s.readDaily = {};
    var day = s.readDaily[t];
    if (!day) day = s.readDaily[t] = { secs: [], gain: 0 };
    if (day.secs.indexOf(secId) >= 0) return 0;   // 今日已记
    if (day.gain >= READ_DAILY_CAP) return 0;      // 阅读封顶
    day.secs.push(secId);
    day.gain += READ_POINTS;
    save(s);
    var g = bump(READ_POINTS);
    if (g) { floatGain(g); render(); }
    return g;
  }

  // 学完就练：努力分 + 正确分（仅机器可判对的才计入“答对”）
  function awardPractice(right, total) {
    if (!total) return 0;
    var gain = total * TRY_POINTS + (right || 0) * RIGHT_POINTS;
    var g = bump(gain);
    if (g) { floatGain(g); render(); }
    return g;
  }

  // 考试 / 自测：按正确率给分
  function awardExam(right, total) {
    if (!total) return 0;
    var rate = (right || 0) / total;
    var gain = Math.round(total * (0.25 + 0.75 * rate));
    var g = bump(gain);
    if (g) { floatGain(g); render(); }
    return g;
  }

  /* ---------------- UI ---------------- */
  // 优先放入可见的插槽（桌面→左侧栏；移动→顶栏）；都不可见则退化为右上角小条
  function findSlot() {
    var ids = ['eb-slot', 'eb-slot-m'];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.offsetParent !== null) return el;
    }
    return null;
  }

  var detailOpen = false;
  function buildUI() {
    if (document.getElementById('eb-chip')) return;

    var chip = document.createElement('div');
    chip.className = 'eb-chip'; chip.id = 'eb-chip';
    chip.innerHTML =
      '<div class="eb-head">' +
        '<span class="eb-ico" id="eb-ico">🌱</span>' +
        '<span class="eb-name" id="eb-name">萌芽</span>' +
        '<span class="eb-lv" id="eb-lv">Lv.1</span>' +
      '</div>' +
      '<div class="eb-bar-box">' +
        '<span class="eb-bar-mini"><i id="eb-fill"></i></span>' +
        '<span class="eb-pct" id="eb-pct">0%</span>' +
      '</div>' +
      '<button class="eb-toggle" id="eb-toggle" type="button">成长</button>';

    var slot = findSlot();
    if (slot) slot.appendChild(chip);
    else { document.body.appendChild(chip); chip.classList.add('eb-floating'); }

    var detail = document.createElement('div');
    detail.className = 'eb-detail'; detail.id = 'eb-detail'; detail.hidden = true;
    detail.innerHTML =
      '<div class="eb-dhead"><span>成长详情</span><span class="eb-close" id="eb-close">×</span></div>' +
      '<div class="eb-stats">' +
        '<div class="eb-stat"><b id="eb-day">1</b><small>连续天数</small></div>' +
        '<div class="eb-stat"><b id="eb-today2">0</b><small>今日能量</small></div>' +
        '<div class="eb-stat"><b id="eb-lv2">1</b><small>等级</small></div>' +
      '</div>' +
      '<div class="eb-hint" id="eb-hint"></div>' +
      '<div class="eb-growhelp">' +
        '<b>能量如何增长</b>' +
        '<ul>' +
          '<li>认真学完 1 个小节（滚动到并停留）：+3，每日阅读封顶 +15</li>' +
          '<li>做「学完就练」每题：+1 努力分，答对再 +1</li>' +
          '<li>完成一次考试 / 自测：按正确率给分（满分≈题数）</li>' +
          '<li>连续每天学习：连击奖励 +5</li>' +
          '<li>能量满 100 升级，开启新的成长周期</li>' +
        '</ul>' +
      '</div>' +
      '<div class="eb-chs" id="eb-chs"></div>';
    document.body.appendChild(detail);

    document.getElementById('eb-toggle').addEventListener('click', function (e) {
      e.stopPropagation();
      detailOpen = !detailOpen;
      detail.hidden = !detailOpen;
      if (detailOpen) renderDetail();
    });
    document.getElementById('eb-close').addEventListener('click', function (e) {
      e.stopPropagation(); detailOpen = false; detail.hidden = true;
    });
  }

  function render() {
    var s = load();
    var ico = document.getElementById('eb-ico'); if (ico) ico.textContent = currentStage(s.energy).icon;
    var name = document.getElementById('eb-name'); if (name) name.textContent = currentStage(s.energy).name;
    var lv = document.getElementById('eb-lv'); if (lv) lv.textContent = 'Lv.' + s.level;
    var fill = document.getElementById('eb-fill'); if (fill) fill.style.width = (s.energy / ENERGY_MAX * 100) + '%';
    var pct = document.getElementById('eb-pct'); if (pct) pct.textContent = Math.round(s.energy) + '%';
    if (detailOpen) renderDetail();
  }

  function renderDetail() {
    var s = load();
    var day = document.getElementById('eb-day'); if (day) day.textContent = s.streak || 1;
    var t2 = document.getElementById('eb-today2'); if (t2) t2.textContent = '+' + (s.todayGain || 0);
    var lv2 = document.getElementById('eb-lv2'); if (lv2) lv2.textContent = s.level;
    var ns = nextStage(s.energy);
    var hint = document.getElementById('eb-hint');
    if (hint) {
      if (s.energy >= ENERGY_MAX - 0.001) hint.textContent = '这一成长周期已圆满，新旅程正开始。';
      else if (ns) hint.textContent = '距离「' + ns.name + '」还差 ' + (ns.at - s.energy) + ' 点能量。';
      else hint.textContent = '继续前进，让成长看得见。';
    }
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
    var chip = document.getElementById('eb-chip');
    var f = document.createElement('div'); f.className = 'eb-float'; f.textContent = '+' + gain;
    if (chip) {
      var r = chip.getBoundingClientRect();
      f.style.left = (r.right + 8) + 'px';
      f.style.top = (r.top + r.height / 2 - 10) + 'px';
      f.style.right = 'auto';
    } else {
      f.style.top = '12px'; f.style.right = '16px'; f.style.left = 'auto';
    }
    document.body.appendChild(f);
    if (chip) { chip.classList.add('eb-pulse'); setTimeout(function () { chip.classList.remove('eb-pulse'); }, 520); }
    setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 1300);
  }

  // 阅读观测：小节进入视野并停留满 READ_DWELL 毫秒，记一次“认真学完”
  function setupReadingObserver() {
    var secs = document.querySelectorAll('h2[id^="s"]');
    if (!secs.length || !('IntersectionObserver' in window)) return;
    var timers = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var id = en.target.id;
        if (en.isIntersecting) {
          if (!timers[id]) {
            timers[id] = setTimeout(function () {
              awardSectionStudy(id);
              delete timers[id];
            }, READ_DWELL);
          }
        } else {
          if (timers[id]) { clearTimeout(timers[id]); delete timers[id]; }
        }
      });
    }, { threshold: 0.55 });
    secs.forEach(function (el) { io.observe(el); });
  }

  // 窗口尺寸变化导致原插槽隐藏/新插槽可见时，自动迁移能量条
  function relocateIfNeeded() {
    var chip = document.getElementById('eb-chip');
    if (!chip) return;
    if (chip.parentElement && chip.parentElement.offsetParent !== null) return;
    var slot = findSlot();
    if (slot) slot.appendChild(chip);
  }

  function init() {
    buildUI();
    setupReadingObserver();
    render();
    window.addEventListener('resize', relocateIfNeeded);
    window.addEventListener('storage', function (e) { if (e.key === LS_KEY) render(); });
  }

  window.EnergyBar = {
    init: init,
    awardSectionStudy: awardSectionStudy,
    awardPractice: awardPractice,
    awardExam: awardExam,
    refresh: render
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
