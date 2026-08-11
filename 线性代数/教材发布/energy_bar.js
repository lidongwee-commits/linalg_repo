/* 全局成长能量条 · Energy Bar（v2：嵌入侧栏/顶栏，不打扰阅读，机制更贴合实际）
 * 数据存本机 localStorage(study_v1)，并匿名自动云端备份到 Cloudflare
 * （同一浏览器 / 同一「同步码」跨设备自动同步，学生无需手动导数据）.
 *
 * 能量代表“学习投入”，靠真实学习行为累积：
 *   - 认真学完一个小节（滚动到该节并停留数秒）→ 阅读积分（每日封顶，防空刷）
 *   - 做「学完就练」每题 → 努力分；答对再 + 正确分
 *   - 完成一次考试/自测 → 按正确率给分
 *   - 连续每天学习 → 连击奖励
 * 能量满 100 升级，开启新的成长周期.
 */
(function () {
  'use strict';
  var LS_KEY = 'study_v1';
  var LS_UID = 'eb_uid';
  var CLOUD_ENERGY_URL = 'https://old-tree-dc24.ldwmath.workers.dev/energy';
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
    { ch: 1,  name: '函数与极限' },
    { ch: 2,  name: '极限与连续' },
    { ch: 3,  name: '微分中值定理与导数应用' },
    { ch: 4,  name: '不定积分' },
    { ch: 5,  name: '定积分' },
    { ch: 6,  name: '定积分的应用' },
    { ch: 7,  name: '微分方程' },
    { ch: 8,  name: '向量代数与空间解析几何' },
    { ch: 9,  name: '多元函数微分法及其应用' },
    { ch: 10, name: '重积分' },
    { ch: 11, name: '曲线积分与曲面积分' },
    { ch: 12, name: '无穷级数' },
    { ch: 13, name: '傅里叶级数' }
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
  function save(s) { try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {} schedulePush(); }

  // 持久「同步码」：随机生成一次，存本机；它即是云端备份的 key
  function getUid() {
    var u = '';
    try { u = localStorage.getItem(LS_UID) || ''; } catch (e) {}
    if (!u) {
      u = 'gdsx-' + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem(LS_UID, u); } catch (e) {}
    }
    return u;
  }
  var _pushTimer = null;
  function schedulePush() {           // 防抖：频繁加分时合并上传
    if (_pushTimer) clearTimeout(_pushTimer);
    _pushTimer = setTimeout(cloudPush, 1500);
  }
  function cloudPush() {              // 把完整 study 状态写回 Cloudflare
    _pushTimer = null;
    try {
      var s = load();
      fetch(CLOUD_ENERGY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: getUid(), data: JSON.stringify(s) })
      }).catch(function () {});
    } catch (e) {}
  }
  function cloudPull() {              // 从 Cloudflare 拉取并合并（取各自更优进度）
    try {
      fetch(CLOUD_ENERGY_URL + '?uid=' + encodeURIComponent(getUid()))
        .then(function (r) { return r && r.ok ? r.json() : null; })
        .then(function (j) {
          if (j && j.data) { try { mergeStudy(JSON.parse(j.data)); } catch (e) {} }
        }).catch(function () {});
    } catch (e) {}
  }

  // 跨来源合并：取能量/等级/连击/掌握度各自更优值（本地与云端会收敛）
  function mergeStudy(d) {
    if (!d) return;
    var cur = load();
    if (d.energy !== undefined) cur.energy = Math.max(cur.energy || 0, d.energy || 0);
    if (d.level !== undefined) cur.level = Math.max(cur.level || 1, d.level || 1);
    if (d.streak !== undefined) cur.streak = Math.max(cur.streak || 0, d.streak || 0);
    if (d.mastery) {
      if (!cur.mastery) cur.mastery = {};
      Object.keys(d.mastery).forEach(function (ch) {
        var a = cur.mastery[ch], b = d.mastery[ch];
        if (!a || (b.total || 0) > (a.total || 0)) cur.mastery[ch] = b;
      });
    }
    ['lastDay', 'streakBonusDay', 'lastGainDay', 'todayGain'].forEach(function (k) {
      if (d[k] !== undefined && (!cur[k] || d[k] > cur[k])) cur[k] = d[k];
    });
    // 知识之塔数据（手迹/盲盒/对话/称号）：取并集合并（跨设备同步）
    if (d.tower && typeof d.tower === 'object') {
      if (!cur.tower) cur.tower = {};
      ['relics', 'blind', 'dialog', 'titles'].forEach(function (k) {
        if (d.tower[k] && typeof d.tower[k] === 'object') {
          if (!cur.tower[k]) cur.tower[k] = {};
          Object.keys(d.tower[k]).forEach(function (ch) {
            if (cur.tower[k][ch] === undefined) cur.tower[k][ch] = d.tower[k][ch];
          });
        }
      });
    }
    // 笔记数据：按书分桶（gdsx/linalg），按 ts 去重并集合并（跨设备同步）
    if (d.notes && typeof d.notes === 'object') {
      if (!cur.notes) cur.notes = {};
      Object.keys(d.notes).forEach(function (bk) {
        var arr = d.notes[bk];
        if (!arr || !arr.length) return;
        if (!cur.notes[bk]) cur.notes[bk] = [];
        var seen = {};
        cur.notes[bk].forEach(function (n) { seen[n.ts] = 1; });
        arr.forEach(function (n) { if (!seen[n.ts]) { cur.notes[bk].push(n); seen[n.ts] = 1; } });
      });
    }
    save(cur);
    render();
    // 通知塔 / 笔记：云端已合并，请回填并重渲染（修掉旧版同步的异步竞态）
    try { window.dispatchEvent(new CustomEvent('study:cloud-synced')); }
    catch (e) { try { var ev = document.createEvent('Event'); ev.initEvent('study:cloud-synced', true, true); window.dispatchEvent(ev); } catch (e2) {} }
  }

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

  // 累积章节掌握度（练习 + 考试）：正确数 / 总作答数，百分比用于详情面板的五章柱状条
  function recordMastery(ch, right, total) {
    if (!ch || !total) return;
    var s = load();
    if (!s.mastery) s.mastery = {};
    if (!s.mastery[ch]) s.mastery[ch] = { right: 0, total: 0 };
    s.mastery[ch].right += (right || 0);
    s.mastery[ch].total += total;
    save(s);
    if (detailOpen) renderDetail();
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
    // 最小模式：数据引擎照跑（计分/掌握度/云同步），不渲染独立 UI
    // （能量展示已由「知识之塔」面板接管：能量=勇士等级，与塔同一套叙事）
    if (window.EB_MINIMAL === true) return;
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
        '<div class="eb-gh-title">能量来源</div>' +
        '<div class="eb-gh-grid">' +
          '<div class="eb-gh-card"><span class="eb-gh-ico">📖</span><span class="eb-gh-lbl">学完<br>小节</span><span class="eb-gh-pts">+3</span></div>' +
          '<div class="eb-gh-card"><span class="eb-gh-ico">✍️</span><span class="eb-gh-lbl">学完<br>就练</span><span class="eb-gh-pts">+1~2</span></div>' +
          '<div class="eb-gh-card"><span class="eb-gh-ico">📝</span><span class="eb-gh-lbl">考试<br>自查</span><span class="eb-gh-pts">按正<br>确率</span></div>' +
          '<div class="eb-gh-card"><span class="eb-gh-ico">🔥</span><span class="eb-gh-lbl">连击<br>学习</span><span class="eb-gh-pts">+5</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="eb-chs" id="eb-chs"></div>' +
      '<div class="eb-sync">' +
        '<div class="eb-gh-title">数据同步</div>' +
        '<p class="eb-sync-tip">进度已自动云端同步.换设备 / 换浏览器时，用「同步码」一键带走能量、掌握度、知识之塔与笔记（同一同步码覆盖三套个人数据）.</p>' +
        '<div class="eb-sync-row">' +
          '<button class="eb-btn" id="eb-sync-gen" type="button">我的同步码</button>' +
          '<button class="eb-btn" id="eb-sync-copy" type="button" hidden>复制</button>' +
        '</div>' +
        '<textarea id="eb-sync-out" readonly hidden></textarea>' +
        '<textarea id="eb-sync-in" placeholder="粘贴另一台设备的同步码"></textarea>' +
        '<button class="eb-btn" id="eb-sync-imp" type="button">导入同步码</button>' +
        '<div class="eb-sync-msg" id="eb-sync-msg"></div>' +
      '</div>';
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

    // 能量数据同步：平时自动云端同步；跨设备用「同步码」一键拉取
    (function () {
      var genBtn = document.getElementById('eb-sync-gen');
      var copyBtn = document.getElementById('eb-sync-copy');
      var outTa = document.getElementById('eb-sync-out');
      var inTa = document.getElementById('eb-sync-in');
      var impBtn = document.getElementById('eb-sync-imp');
      var msg = document.getElementById('eb-sync-msg');
      if (genBtn) {
        genBtn.addEventListener('click', function () {
          outTa.value = getUid(); outTa.hidden = false; copyBtn.hidden = false;
          if (msg) msg.textContent = '这是你的「同步码」.在另一台设备粘贴此码即可自动同步能量与掌握度（无需手动导数据）.';
        });
      }
      if (copyBtn) {
        copyBtn.addEventListener('click', function () {
          outTa.select();
          try { document.execCommand('copy'); if (msg) msg.textContent = '已复制到剪贴板'; }
          catch (e) { if (msg) msg.textContent = '复制失败，请手动复制上方文本框'; }
        });
      }
      if (impBtn) {
        impBtn.addEventListener('click', function () {
          var code = (inTa.value || '').trim();
          if (!code) { if (msg) msg.textContent = '请先粘贴另一台设备的同步码'; return; }
          try { localStorage.setItem(LS_UID, code); } catch (e) {}
          cloudPull();
          if (msg) msg.textContent = '同步码已生效，正在从云端拉取进度…';
        });
      }
    })();
  }

  function render() {
    if (window.EB_MINIMAL === true) return; // 塔面板已接管渲染
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
      if (s.energy >= ENERGY_MAX - 0.001) hint.textContent = '这一成长周期已圆满，新旅程正开始.';
      else if (ns) hint.textContent = '距离「' + ns.name + '」还差 ' + (ns.at - s.energy) + ' 点能量.';
      else hint.textContent = '继续前进，让成长看得见.';
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
    if (window.EB_MINIMAL === true) return; // 最小模式无飘字（塔面板会显示）
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
    if (window.EB_MINIMAL === true) return; // 最小模式无 UI 可迁移
    var chip = document.getElementById('eb-chip');
    if (!chip) return;
    if (chip.parentElement && chip.parentElement.offsetParent !== null) return;
    var slot = findSlot();
    if (slot) slot.appendChild(chip);
  }

  function init() {
    buildUI();
    setupReadingObserver();
    cloudPull();          // 进入页面即从云端拉回该浏览器/同步码的进度
    render();
    window.addEventListener('resize', relocateIfNeeded);
    window.addEventListener('storage', function (e) { if (e.key === LS_KEY) render(); });
  }

  window.EnergyBar = {
    init: init,
    awardSectionStudy: awardSectionStudy,
    awardPractice: awardPractice,
    awardExam: awardExam,
    recordMastery: recordMastery,
    refresh: render,
    mergeFromCloud: mergeStudy,   // 供外部/知识之塔触发云端合并（换设备拉取后）
    flush: function () { schedulePush(); }, // 供塔/笔记改动后立即触发云端上传（防抖）
    getState: load                 // 供外部读取当前学习状态
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
