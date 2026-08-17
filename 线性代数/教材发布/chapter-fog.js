/* ============================================================
   章节能量宝石 · 共享组件（chapter-fog.js）
   - 在正文每一个小节标题（h3）与每一个折叠组件（details>summary）旁插入小宝石
   - 阅读到宝石位置即可积攒"阅读能量"（不必做题）
   - 点击宝石可抽取本章客观题即时自检，答对点亮"做题能量"
   - 进度 = 内容能量(35%) + 做题能量(65%)
   - 内容能量 = (阅读进度 + 做题自检) / 2 × 35%
   - 零依赖 IIFE，改一次 shared，两本 build 自动同步
   ============================================================ */
(function () {
  'use strict';
  var BOOK = window.TOWER_BOOK || 'gdsx';
  var T = window.TOWER_SECS || null;
  var ch = T && T.ch;
  if (!ch) return;

  /* ---------- 进度模型 ---------- */
  var CONTENT_FULL = 35, QUIZ_FULL = 65;
  var GEM_KEY = 'fog_gems_v1';     // 已做题自检的宝石下标数组
  var READ_KEY = 'fog_read_v1';    // 已阅读到的宝石下标数组
  var CONTENT_KEY = 'fog_content_v1'; // 内容能量占比 0..1（供知识塔读取）
  function lsGet(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch (e) { return {}; }
  }
  function lsSet(key, obj) {
    try { localStorage.setItem(key, JSON.stringify(obj)); }
    catch (e) {}
  }
  function loadArr(key) {
    var o = lsGet(key);
    var v = o[BOOK + ':' + ch];
    return Array.isArray(v) ? v.slice() : [];
  }
  function saveArr(key, arr) {
    var o = lsGet(key); o[BOOK + ':' + ch] = arr; lsSet(key, o);
  }
  var litArr = loadArr(GEM_KEY);
  var readArr = loadArr(READ_KEY);
  function pushUnique(arr, idx) { if (arr.indexOf(idx) < 0) { arr.push(idx); return true; } return false; }
  function quizRate() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1') || '{}');
      var m = s.mastery && s.mastery[ch];
      if (!m || !m.total) return 0;
      return Math.max(0, Math.min(1, m.right / m.total));
    } catch (e) { return 0; }
  }
  // 内容能量占比（阅读 + 做题自检 各占一半，合计 0..1）
  function contentFraction() {
    var N = anchors.length || 1;
    var rf = Math.min(1, readArr.length / N);
    var lf = Math.min(1, litArr.length / N);
    return (rf + lf) / 2;
  }
  function saveContent() {
    var o = lsGet(CONTENT_KEY); o[BOOK + ':' + ch] = contentFraction(); lsSet(CONTENT_KEY, o);
  }
  function progress() { return Math.round(contentFraction() * CONTENT_FULL + quizRate() * QUIZ_FULL); }

  /* ---------- 弹窗 ---------- */
  var mask = document.createElement('div'); mask.className = 'cf-mask';
  mask.innerHTML =
    '<div class="cf-quiz" id="cfQuiz"><div class="tag">自检 · 答对释放能量</div>' +
      '<div class="q" id="cfQText"></div><div id="cfQOpts"></div>' +
      '<div class="foot"><div class="msg" id="cfQMsg"></div><button class="close" id="cfQClose">先回去看一下</button></div></div>';
  document.body.appendChild(mask);
  var quiz = mask.querySelector('#cfQuiz');
  mask.querySelector('#cfQClose').addEventListener('click', function () { mask.classList.remove('show'); });
  function renderMath(el) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }], throwOnError: false, ignoredClasses: ['katex'] });
      } catch (e) {}
    }
  }

  /* ---------- 能量点自检：抽该章客观题 ---------- */
  function pickSelfTest() {
    var all = window.EXAM_QUESTIONS || [];
    var pool = all.filter(function (x) { return String(x.ch) === String(ch) && x.type === 'mc'; });
    if (!pool.length) pool = all.filter(function (x) { return x.type === 'mc'; });
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function openSelfTest(ep) {
    var q = pickSelfTest();
    if (!q) {
      // 无题库时直接按阅读计入
      markLit(+ep.dataset.idx); updateGem(ep);
      return;
    }
    quiz.style.display = 'block';
    mask.querySelector('#cfQText').innerHTML = (q.stem || '请判断：') + '<br><span style="color:#6b7a72;font-size:12.5px">（来自本章题库的自检题）</span>';
    renderMath(mask.querySelector('#cfQText'));
    var box = mask.querySelector('#cfQOpts'); box.innerHTML = '';
    (q.options || []).forEach(function (o, i) {
      var b = document.createElement('button'); b.className = 'cf-opt'; b.textContent = o[0] + '. ' + o[1];
      b.addEventListener('click', function () {
        var isRight = (o[0] && o[0] === q.ans) || (i === (parseInt(q.ans, 10) || 0));
        if (isRight) {
          b.classList.add('right');
          var m = mask.querySelector('#cfQMsg'); m.textContent = '✓ 漂亮，宝石能量已释放！'; m.className = 'msg ok';
          setTimeout(function () { mask.classList.remove('show'); markLit(+ep.dataset.idx); updateGem(ep); }, 520);
        } else {
          b.classList.add('wrong');
          var m = mask.querySelector('#cfQMsg'); m.textContent = '再想想，回看对应定理后再来点亮～'; m.className = 'msg no';
        }
      });
      box.appendChild(b);
    });
    renderMath(box);
    mask.classList.add('show');
  }
  function markLit(idx) {
    if (pushUnique(litArr, idx)) { saveArr(GEM_KEY, litArr); saveContent(); }
  }
  function addEnergy(ep) {
    markLit(+ep.dataset.idx); updateGem(ep);
    shootEnergyToTower(ep, false);
  }
  function updateGem(ep) {
    var idx = +ep.dataset.idx;
    if (readArr.indexOf(idx) >= 0) ep.classList.add('read');
    if (litArr.indexOf(idx) >= 0) ep.classList.add('done');
  }

  /* ---------- 阅读进度：用 IntersectionObserver 记录到达过的宝石 ---------- */
  var observed = [];
  function markRead(idx) {
    if (pushUnique(readArr, idx)) {
      saveArr(READ_KEY, readArr); saveContent();
      var g = gems[idx];
      if (g) { g.classList.add('read'); shootEnergyToTower(g, true); }
    }
  }
  function setupReadObserver() {
    if (!('IntersectionObserver' in window)) {
      window.addEventListener('scroll', throttleScroll, { passive: true });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var idx = +en.target.dataset.idx;
          if (!isNaN(idx)) markRead(idx);
        }
      });
    }, { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 });
    gems.forEach(function (g) { io.observe(g); });
  }
  function throttleScroll() {
    var cy = window.scrollY + window.innerHeight * 0.55;
    gems.forEach(function (g, i) {
      var r = g.getBoundingClientRect();
      if (r.top + window.scrollY < cy) markRead(i);
    });
  }

  /* ---------- 能量点注入：已禁用 ----------
     黄色菱形 cf-gem 已被荧光系统取代：定理/定义/结论/例题/小节进度
     统一用 shared/fluo.js 的 .fluo 标记，点开问"学会了吗？".
     此文件保留为空壳，避免 tower.js 引用 ChapterFog 时报错. */
  var col = document.querySelector('.col');
  if (col) { saveContent(); }
  // 旧的 gems/anchors 注入逻辑已移除

  /* ---------- 能量飞入动画：从宝石飞向知识塔对应楼层 ---------- */
  function shootEnergyToTower(sourceEl, isWeak) {
    if (!sourceEl) return;
    if (isWeak) {
      // 限制并发的阅读微光数量，避免快速滚动时满屏乱飞
      var wc = document.querySelectorAll('.cf-orb.weak').length;
      if (wc >= 3) return;
    }
    var slot = document.getElementById('tower-slot');
    if (!slot) return;
    var floor = slot.querySelector('.floor[data-ch="' + ch + '"]');
    if (!floor) return;
    var r1 = sourceEl.getBoundingClientRect();
    var r2 = floor.getBoundingClientRect();
    var orb = document.createElement('div');
    orb.className = 'cf-orb' + (isWeak ? ' weak' : '');
    orb.style.left = (r1.left + r1.width / 2) + 'px';
    orb.style.top = (r1.top + r1.height / 2) + 'px';
    document.body.appendChild(orb);
    var dx = (r2.left + r2.width / 2) - (r1.left + r1.width / 2);
    var dy = (r2.top + r2.height / 2) - (r1.top + r1.height / 2);
    orb.style.transform = 'translate(0,0) scale(1)';
    orb.style.opacity = '1';
    requestAnimationFrame(function () {
      orb.classList.add('fly');
      orb.style.setProperty('--tx', dx + 'px');
      orb.style.setProperty('--ty', dy + 'px');
    });
    setTimeout(function () {
      if (orb.parentNode) orb.parentNode.removeChild(orb);
      if (window.TowerGame && window.TowerGame.pulseChapter) window.TowerGame.pulseChapter(ch, isWeak);
    }, 720);
  }

  /* ---------- 做题后刷新（同页不触发 storage 事件，低频轮询 mastery） ---------- */
  var lastQuizKey = '';
  function pollQuiz() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1') || '{}');
      var m = s.mastery && s.mastery[ch];
      var key = m ? (m.right + '/' + m.total) : '0/0';
      lastQuizKey = key;
    } catch (e) {}
    setTimeout(pollQuiz, 1500);
  }
  pollQuiz();

  window.ChapterFog = { refresh: function () {}, progress: progress };
})();
