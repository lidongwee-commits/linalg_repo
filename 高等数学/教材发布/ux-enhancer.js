/* ux-enhancer.js —— 线性代数数字教材「超越层」（暗色 / 进度 / 回顶 /
   滚动揭示 / 首页数学符号雨 / 章节封面动态入场 / 计数器）
   与高等数学共享前端规范，纯前端，无依赖. */
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

  /* ========== 3. 回到顶部按钮（FAB Dock 第二层：中间） ========== */
  (function injectFabDockCSS() {
    if (document.getElementById('fab-dock-css')) return;
    var css = document.createElement('style');
    css.id = 'fab-dock-css';
    css.textContent = [
      '.to-top{position:fixed;right:20px;bottom:76px;z-index:9980;width:48px;height:48px;border-radius:50%;',
      'border:none;background:#fff;color:#4f46e5;font-size:18px;cursor:pointer;',
      'box-shadow:0 6px 20px rgba(15,40,80,.16);',
      'opacity:0;visibility:hidden;transform:translateY(8px) scale(.92);',
      'transition:opacity .22s ease,visibility .22s ease,transform .22s ease,box-shadow .2s ease;',
      'display:flex;align-items:center;justify-content:center;font-family:-apple-system,"Microsoft YaHei",sans-serif}',
      '.to-top.show{opacity:1;visibility:visible;transform:none}',
      '.to-top:hover{box-shadow:0 10px 28px rgba(79,70,229,.30);transform:translateY(-2px) scale(1.05);background:#f8f7ff}',
      ':root.dark .to-top{background:#1e1b4b;color:#a5b4fc;box-shadow:0 6px 20px rgba(0,0,0,.40)}',
      ':root.dark .to-top:hover{background:#2e2a5e}'
    ].join('\n');
    document.head.appendChild(css);
  })();
  var top = document.createElement('button');
  top.type = 'button';
  top.className = 'to-top';
  top.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
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

  /* ========== 6. 数学符号雨（首页 hero 装饰） ==========
   * 根据书籍类型自动选择符号集：
   *   高等数学 → 微积分经典公式（牛顿-莱布尼茨、泰勒、欧拉、格林等）
   *   线性代数 → 矩阵与线性空间符号
   */
  var isCalculus = /高等数学|Calculus|calculus|gaoshux/i.test(
    (document.title || '') + ' ' + location.pathname
  ) || !!$('.hero .lede'); /* 高数 hero 有 lede 段；章节页靠 pathname 兜底 */
  var CALC_SYMBOLS = [
    /* 微积分核心 */
    '∫f(x)dx', 'd/dx', '∂f/∂x', 'lim_{x→0}', 'Σ_{n=1}^∞',
    '∇·F', '∮_C F·dr', '∬_D dA', '∭_V dV',
    /* 经典公式 */
    "e^{iπ}+1=0", "∫_a^b f(x)dx=F(b)-F(a)", "f'(x₀)=lim_{Δx→0}",
    "∑_{k=0}^n f^{(k)}(a)/k! (x-a)^k", "∮ (∂Q/∂x-∂P/∂y)dA",
    /* 常见运算 */
    'dy/dx', "f''(x)", 'Δx → 0', '∀ε>0 ∃δ', '∫_0^∞',
    '∇²φ', 'div F', 'curl F', 'grad φ', 'dS', 'dV',
    /* 希腊字母与极限 */
    'α→0', 'β', 'γ(t)', 'δ', 'ω', 'θ', 'π', 'e',
    '收敛', '发散', '连续', '可微'
  ];
  var LINALG_SYMBOLS = [
    'det A', 'A⁻¹', 'λ', 'Ax = b', 'dim V', 'rank', 'span', '⊗',
    '→v', '[a b; c d]', 'AᵀA', '|λI−A|', 'P⁻¹AP', 'A+B', 'ℝⁿ',
    'ker', 'im', '||x||', 'eigen', 'A·A⁻¹=I', '→n', 'O', 'Iₙ',
    'Tr', '0 1; 1 0', 'det≠0', '∥A∥', 'n×m', '∑ λᵢ', '〈x,y〉'
  ];
  var SYMBOLS = isCalculus ? CALC_SYMBOLS : LINALG_SYMBOLS;
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
  /* 首页符号雨：仅线代首页启用（高数首页有 SVG 插画，不需要文字符号雨） */
  if (hero && isHome && !isCalculus) rain(hero, 28, 13, 24, 14, 28, 0.16, 0.30);

  /* ========== 6b. 浮动数学家头像（仅高数章节封面，首页有 SVG 插画不需要） ========== */
  if (hero && isChapter && isCalculus && !reduce) {
    var mathAvatars = [
      { name: 'Newton',  initial: 'N',  color: '#f59e0b', quote: '微积分' },
      { name: 'Leibniz', initial: 'L',  color: '#3b82f6', quote: '∫ dx' },
      { name: 'Euler',   initial: 'E',  color: '#10b981', quote: 'e^{iπ}' },
      { name: 'Gauss',   initial: 'G',  color: '#8b5cf6', quote: '∇·F' },
      { name: 'Riemann', initial: 'R',  color: '#ef4444', quote: '∑ 1/nˢ' },
    ];
    var avatarBox = document.createElement('div');
    avatarBox.className = 'math-avatars';
    avatarBox.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden';
    mathAvatars.forEach(function (info, idx) {
      var el = document.createElement('div');
      el.className = 'math-avatar';
      el.title = info.name + ' — ' + info.quote;
      el.setAttribute('aria-label', info.name);
      var positions = [
        'top:8%;right:5%', 'top:35%;right:12%', 'top:60%;right:6%',
        'top:15%;left:3%', 'top:50%;left:2%'
      ];
      el.style.cssText = 'position:absolute;' + positions[idx] +
        ';width:48px;height:48px;border-radius:50%;background:' + info.color +
        ';color:#fff;font-size:20px;font-weight:700;display:flex;align-items:center;' +
        'justify-content:center;box-shadow:0 4px 16px ' + info.color + '40,' +
        '0 0 0 0 ' + info.color + '15;opacity:.55;animation:avatarPulse ' +
        (3 + idx * 0.7) + 's ease-in-out infinite;animation-delay:' + (-idx * 1.2) + 's;' +
        'cursor:default;transition:transform .25s ease,opacity .25s ease;font-family:Georgia,serif';
      el.textContent = info.initial;
      el.addEventListener('mouseenter', function () {
        el.style.transform = 'scale(1.2)';
        el.style.opacity = '1';
        el.style.boxShadow = '0 6px 24px ' + info.color + '50,0 0 0 6px ' + info.color + '20';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
        el.style.opacity = '';
        el.style.boxShadow = '';
      });
      avatarBox.appendChild(el);
    });
    hero.insertBefore(avatarBox, hero.firstChild);

    /* 注入头像动画 keyframes（仅一次） */
    if (!document.getElementById('avatar-styles')) {
      var ast = document.createElement('style');
      ast.id = 'avatar-styles';
      ast.textContent =
        '@keyframes avatarPulse{' +
          '0%,100%{transform:translateY(0) scale(1);box-shadow:0 4px 16px rgba(0,0,0,.15),0 0 0 0 currentColor}' +
          '50%{transform:translateY(-7px) scale(1.06);box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 8px currentColor}}';
      document.head.appendChild(ast);
    }
  }

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
        var roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII'][n - 1] || (n + '');
        var zh = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三'][n - 1] || (n + '');
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