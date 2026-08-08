/* ux-enhancer.js —— 线性代数数字教材「超越层」（暗色 / 进度 / 回顶 /
   滚动揭示 / 首页数学符号雨 / 章节封面动态入场 / 计数器）
   与高等数学共享前端规范，纯前端，无依赖。 */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isChapter = /ch\d+\.html?$/i.test(location.pathname);
  var isHome = /(^|\/)index\.html?$|\/$/i.test(location.pathname);

  /* ========== 1. 暗色模式切换 ========== */
  var THEME_KEY = 'linalg-theme';
  function applyTheme(dark) {
    root.classList.toggle('dark', !!dark);
    if (tog) tog.textContent = dark ? '日间' : '夜间';
  }
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    }
  } catch (e) {}
  var tog = document.createElement('button');
  tog.type = 'button';
  tog.className = 'theme-toggle';
  tog.textContent = root.classList.contains('dark') ? '日间' : '夜间';
  tog.title = '切换日间 / 夜间模式';
  tog.addEventListener('click', function () {
    var d = !root.classList.contains('dark');
    applyTheme(d);
    try { localStorage.setItem(THEME_KEY, d ? 'dark' : 'light'); } catch (e) {}
  });
  document.body.appendChild(tog);

  /* ========== 2. 阅读进度条 ========== */
  var bar = document.createElement('div');
  bar.className = 'read-progress';
  document.body.appendChild(bar);

  /* ========== 3. 回到顶部按钮 ========== */
  var top = document.createElement('button');
  top.type = 'button';
  top.className = 'to-top';
  top.textContent = '↑';
  top.title = '回到顶部';
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(top);

  /* ========== 4. 滚动：进度 + 回顶显隐 ========== */
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max * 100 : 0;
    bar.style.width = p + '%';
    if ((h.scrollTop || document.body.scrollTop) > 420) top.classList.add('show');
    else top.classList.remove('show');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ========== 5. 滚动揭示（卡片 / 模块盒） ========== */
  var revealEls = $$('.card, .ct, .rd, .ky, .ia-wrap');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  /* ========== 6. 数学符号雨（首页 + 章节封面） ========== */
  var SYMBOLS = [
    'det A', 'A⁻¹', 'λ', 'Ax = b', 'dim V', 'rank', 'span', '⊗',
    '→v', '[a b; c d]', 'AᵀA', '|λI−A|', 'P⁻¹AP', 'A+B', 'ℝⁿ',
    'ker', 'im', '||x||', 'eigen', 'A  A⁻¹=I', '→n', 'O', 'Iₙ',
    'Tr', '0 1; 1 0', 'det≠0', '∥A∥', 'n×m', '∑ λᵢ', '〈x,y〉'
  ];
  function rain(target, count, sizeMin, sizeMax, durMin, durMax, opMin, opMax) {
    if (!target || reduce) return;
    var box = document.createElement('div');
    box.className = 'math-rain';
    target.insertBefore(box, target.firstChild);
    for (var i = 0; i < count; i++) {
      var s = document.createElement('span');
      s.textContent = SYMBOLS[(Math.random() * SYMBOLS.length) | 0];
      var size = sizeMin + Math.random() * (sizeMax - sizeMin);
      var dur = durMin + Math.random() * (durMax - durMin);
      var op = opMin + Math.random() * (opMax - opMin);
      var left = Math.random() * 100;
      var delay = -Math.random() * dur;
      s.style.cssText = 'left:' + left + '%;font-size:' + size.toFixed(1) + 'px;' +
        'opacity:' + op.toFixed(2) + ';animation-duration:' + dur.toFixed(1) + 's;' +
        'animation-delay:' + delay.toFixed(1) + 's';
      box.appendChild(s);
    }
  }
  var hero = $('.hero');
  if (hero && isHome) rain(hero, 36, 13, 26, 14, 30, 0.18, 0.34);

  /* ========== 7. 章节封面动态包裹 + 入场 + 符号雨 ========== */
  if (isChapter) {
    var col = $('.page .col') || $('.col');
    if (col) {
      var kids = $$(':scope > *', col).filter(function (e) { return e.nodeType === 1; });
      var hasCover = kids.length >= 3 && /chapter/i.test(kids[0].textContent || '');
      var wrap = $('.ch-cover');
      if (!wrap && hasCover) {
        wrap = document.createElement('div');
        wrap.className = 'ch-cover';
        col.insertBefore(wrap, kids[0]);
        for (var i = 0; i < 3; i++) wrap.appendChild(kids[i]);
      }
      if (wrap) {
        var m = location.pathname.match(/ch(\d+)\.html?$/i);
        var n = m ? +m[1] : 1;
        var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n - 1] || (n + '');
        var zh = ['一', '二', '三', '四', '五', '六', '七'][n - 1] || (n + '');
        wrap.setAttribute('data-num', roman);
        wrap.setAttribute('data-zh', zh);
        rain(wrap, 18, 16, 32, 18, 36, 0.14, 0.26);
        requestAnimationFrame(function () { wrap.classList.add('in'); });
      }
    }
  }

  /* ========== 8. 首页统计计数器（从 0 滚到目标值） ========== */
  if (isHome) {
    $$('.hero-stats b').forEach(function (b) {
      var txt = (b.textContent || '').trim();
      var m = txt.match(/^([0-9]+(?:\.[0-9]+)?)/);
      if (!m) return;
      var target = parseFloat(m[1]);
      var suffix = txt.slice(m[1].length);
      var dur = 1100;
      var start = performance.now();
      function tick(now) {
        var t = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        var v = target * eased;
        b.textContent = (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
})();