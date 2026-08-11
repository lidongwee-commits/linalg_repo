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
  var _decPath = '';
  try { _decPath = decodeURIComponent(location.pathname || ''); } catch (e) { _decPath = location.pathname || ''; }
  function _bookFromDom() {
    var a = document.querySelector('h1 a');   // 章节页面包屑：<a>高等数学</a> / <a>线性代数</a>
    if (a) {
      var t = (a.textContent || '').trim();
      if (t.indexOf('高等数学') >= 0) return 'gaoshu';
      if (t.indexOf('线性代数') >= 0) return 'linalg';
    }
    return '';
  }
  var isCalculus = _bookFromDom() === 'gaoshu'
    || /高等数学|Calculus|calculus|gaoshux/i.test((document.title || '') + ' ' + _decPath)
    || !!$('.hero .lede'); /* 高数 hero 有 lede 段；优先用面包屑/路径判定，规避部署后路径百分号编码导致误判 */
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
  /* 每章代表公式（封面呼吸徽章用，与章节强相关） */
  var BOOKKEY = isCalculus ? 'gaoshu' : 'linalg';
  var CHAPTER_FORMULAS = {
    gaoshu: {
      1: ['y=f(x)', 'f:\\,A\\to B'],
      2: ['\\lim_{x\\to a}f(x)', '\\forall\\varepsilon\\,\\exists\\delta'],
      3: ["f'(x_0)=\\lim_{h\\to0}\\dfrac{f(x_0+h)-f(x_0)}{h}", '\\dfrac{dy}{dx}'],
      4: ["f'(\\xi)=\\dfrac{f(b)-f(a)}{b-a}", "\\dfrac{d}{dx}\\Big(\\dfrac{u}{v}\\Big)=\\dfrac{u'v-uv'}{v^2}"],
      5: ['\\int_a^b f(x)\\,dx=F(b)-F(a)', '\\int f(x)\\,dx'],
      6: ["V=\\pi\\int_a^b f^2(x)\\,dx", "s=\\int_a^b\\sqrt{1+f'^2}\\,dx"],
      7: ['\\dfrac{dy}{dx}=f(x,y)', "y'+p(x)y=q(x)"],
      8: ['\\vec a\\cdot\\vec b=|a||b|\\cos\\theta', '\\vec a\\times\\vec b'],
      9: ['\\dfrac{\\partial f}{\\partial x}', 'df=\\dfrac{\\partial f}{\\partial x}dx+\\dfrac{\\partial f}{\\partial y}dy'],
      10: ['\\iint_D f(x,y)\\,dA', '\\iint r\\,dr\\,d\\theta'],
      11: ['\\oint_L P\\,dx+Q\\,dy', '\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}'],
      12: ['\\oiint_\\Sigma \\vec F\\cdot d\\vec S', '\\iiint_V \\nabla\\cdot\\vec F\\,dV'],
      13: ['\\sum_{n=0}^{\\infty} a_n x^n', 'S=\\sum_{n=1}^{\\infty} a_n']
    },
    linalg: {
      1: ['\\det A', '|A|=\\sum (-1)^{\\sigma}a_{1j_1}\\cdots a_{nj_n}'],
      2: ['A^{-1}', 'AB=BA=I'],
      3: ['\\mathrm{rank}(A)', '\\mathrm{span}\\{\\vec v_1,\\dots,\\vec v_s\\}'],
      4: ['A\\vec x=\\vec b', 'A\\vec x=\\vec 0'],
      5: ['|\\lambda I-A|=0', 'A\\vec x=\\lambda\\vec x']
    }
  };
  function rain(target, count, sizeMin, sizeMax, durMin, durMax, opMin, opMax) {
    if (!target || reduce) return;
    if (!document.getElementById('rain-styles')) {
      var rst = document.createElement('style'); rst.id = 'rain-styles';
      rst.textContent = '.math-rain{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}' +
        '.math-rain span{position:absolute;top:-12%;will-change:transform;animation-name:rainFall;animation-timing-function:linear;animation-iteration-count:infinite}' +
        '@keyframes rainFall{from{transform:translateY(-12%)}to{transform:translateY(112%)}}';
      document.head.appendChild(rst);
    }
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

  /* ========== 6b. 章节封面「知识塔元素」拼贴（塔元素碎片 + 本章公式 + 呼吸） ========== */
  function injectCoverEmblemStyles() {
    if (document.getElementById('cover-emblem-styles')) return;
    var st = document.createElement('style'); st.id = 'cover-emblem-styles';
    st.textContent =
      '.ch-cover .cover-emblem{float:right;width:198px;max-width:42%;margin:2px 0 12px 22px;' +
        'position:relative;z-index:2;animation:coverBreathe 4.6s ease-in-out infinite;transform-origin:60% 40%}' +
      '.ch-cover .cover-emblem-svg{width:100%;height:auto;display:block;overflow:visible}' +
      '.ch-cover .cover-emblem-label{margin-top:6px;font-size:12px;font-weight:600;text-align:center;' +
        'color:#bdf3ec;letter-spacing:.3px}' +
      '.ch-cover .cover-emblem-label b{color:#7df9ff}' +
      '.ch-cover .cover-emblem-formulas{margin-top:8px;display:flex;flex-direction:column;gap:6px;align-items:center}' +
      '.ch-cover .cover-emblem-formulas .f{font-size:13px;color:#dff7f2;background:rgba(255,255,255,.06);' +
        'border:1px solid rgba(125,249,255,.22);border-radius:9px;padding:4px 9px;max-width:100%;' +
        'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;animation:coverBreathe 4.6s ease-in-out infinite}' +
      '@keyframes coverBreathe{0%,100%{transform:scale(1);filter:drop-shadow(0 0 5px rgba(125,249,255,.22))}' +
        '50%{transform:scale(1.045);filter:drop-shadow(0 0 16px rgba(125,249,255,.5))}}' +
      ':root.dark .ch-cover .cover-emblem-formulas .f{background:rgba(255,255,255,.05)}' +
      '@media (max-width:680px){' +
        '.ch-cover .cover-emblem{float:none;width:198px;max-width:72%;margin:16px auto 6px;animation:none}' +
        '.ch-cover .cover-emblem-formulas .f{animation:none}}';
    document.head.appendChild(st);
  }
  function climberSVG(x, y, shirt) {
    return '<g transform="translate(' + x + ',' + y + ')">' +
      '<ellipse cy="14" rx="7" ry="2.2" fill="rgba(0,0,0,.15)"/>' +
      '<circle r="5.4" fill="#f5d0a8"/>' +
      '<circle cx="-2.1" cy="-0.8" r="1" fill="#3a2a1a"/><circle cx="2.1" cy="-0.8" r="1" fill="#3a2a1a"/>' +
      '<path d="M -1.6 1.6 Q 0 3.2 1.6 1.6" stroke="#3a2a1a" stroke-width="1" fill="none" stroke-linecap="round"/>' +
      '<rect x="-5" y="4.6" width="10" height="6.4" rx="3" fill="' + shirt + '"/>' +
      '<rect x="-8.2" y="5.2" width="3.4" height="4.6" rx="1.7" fill="' + shirt + '"/><rect x="4.8" y="5.2" width="3.4" height="4.6" rx="1.7" fill="' + shirt + '"/>' +
      '<rect x="-4.6" y="10.4" width="3.8" height="5" rx="1.8" fill="#4a4a6a"/><rect x="0.8" y="10.4" width="3.8" height="5" rx="1.8" fill="#4a4a6a"/>' +
      '</g>';
  }
  function renderFormula(el, tex) {
    if (window.katex && window.katex.renderToString) {
      try { el.innerHTML = window.katex.renderToString(tex, { throwOnError: false, displayMode: false }); return; } catch (e) {}
    }
    if (window.renderMathInElement) {
      el.textContent = '\\(' + tex + '\\)';
      try { window.renderMathInElement(el, { delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }], throwOnError: false }); return; } catch (e) {}
    }
    el.textContent = tex;
  }
  function buildCoverEmblem(wrap, ch, palette, formulas) {
    if (!wrap || reduce) return;
    var ground = (palette && palette.ground) || '#bfe3bf';
    var wname = (palette && palette.name) || '知识之塔';
    var shirt = '#5b6cf0';
    var s = '<svg class="cover-emblem-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">';
    s += '<rect x="2" y="2" width="156" height="156" rx="20" fill="rgba(255,255,255,.05)" stroke="' + ground + '" stroke-opacity=".55" stroke-width="1.5"/>';
    /* 领地格子（本章世界色） */
    s += '<rect x="26" y="100" width="48" height="48" rx="10" fill="' + ground + '"/><rect x="31" y="105" width="38" height="6" rx="3" fill="#fff" opacity=".18"/>';
    /* 攀登者（正在登塔的你） */
    s += climberSVG(50, 64, shirt);
    /* 考研盲盒（金宝箱） */
    s += '<g transform="translate(96,104)"><rect x="0" y="8" width="46" height="36" rx="8" fill="#e0a93b"/><rect x="0" y="0" width="46" height="15" rx="7" fill="#f5c35c"/>' +
         '<rect x="19" y="14" width="8" height="11" rx="2" fill="#7a4a2e"/><circle cx="23" cy="19" r="2.4" fill="#ffe08a"/></g>';
    /* 楼梯（登层） */
    s += '<g transform="translate(100,34)"><rect x="0" y="6" width="44" height="28" rx="9" fill="#9b8bff" opacity=".95"/><text x="22" y="26" text-anchor="middle" font-size="17" fill="#fff">⬆</text></g>';
    /* 本章误区怪 */
    s += '<g transform="translate(44,36)"><circle r="13" fill="#e2607a"/><circle cx="-5" cy="-3" r="2.6" fill="#fff"/><circle cx="5" cy="-3" r="2.6" fill="#fff"/>' +
         '<path d="M -7 5 Q 0 10 7 5" stroke="#fff" stroke-width="1.8" fill="none"/></g>';
    s += '</svg>';
    var box = document.createElement('div');
    box.className = 'cover-emblem';
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', '知识之塔元素 · ' + wname);
    box.innerHTML = s;
    var label = document.createElement('div'); label.className = 'cover-emblem-label';
    label.innerHTML = '🏰 知识之塔 · <b>' + wname + '</b>';
    box.appendChild(label);
    if (formulas && formulas.length) {
      var ff = document.createElement('div'); ff.className = 'cover-emblem-formulas';
      formulas.slice(0, 2).forEach(function (fx) {
        var d = document.createElement('div'); d.className = 'f';
        renderFormula(d, fx);
        ff.appendChild(d);
      });
      box.appendChild(ff);
    }
    wrap.appendChild(box);
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
        injectCoverEmblemStyles();
        var _f = (CHAPTER_FORMULAS[BOOKKEY] && CHAPTER_FORMULAS[BOOKKEY][n]) || [];
        function _drawEmblem() {
          if (!window.TowerGame || !window.TowerGame.chapterPalette) return false;
          buildCoverEmblem(wrap, n, window.TowerGame.chapterPalette(n), _f);
          return true;
        }
        if (!_drawEmblem()) { var _cv = setInterval(function () { if (_drawEmblem()) clearInterval(_cv); }, 60); setTimeout(function () { clearInterval(_cv); }, 5000); }
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