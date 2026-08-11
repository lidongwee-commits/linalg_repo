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

  /* ========== 6b. 章节封面「世界氛围场景」（按本章世界主题沉浸化：
   *   花/草/雪/泡/星 等粒子 + 呼吸流动的数学符号，而非贴一整块元件） ========== */
  function injectCoverSceneStyles() {
    if (document.getElementById('cover-scene-styles')) return;
    var st = document.createElement('style'); st.id = 'cover-scene-styles';
    st.textContent =
      '.ch-cover{position:relative;overflow:hidden}' +
      '.ch-cover .cover-scene{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;display:block}' +
      '.ch-cover .cover-glyph{position:absolute;z-index:2;pointer-events:none;opacity:.4;' +
        'filter:drop-shadow(0 1px 7px rgba(0,0,0,.14));will-change:transform,opacity;' +
        'animation:coverGlyphFloat var(--gd,15s) ease-in-out infinite, coverGlyphBreathe var(--gb,5.5s) ease-in-out infinite}' +
      '.ch-cover .cover-glyph .katex{font-size:1.18em}' +
      '.ch-cover .cover-tag{position:absolute;left:14px;bottom:10px;z-index:2;pointer-events:none;' +
        'font-size:12px;font-weight:600;color:rgba(255,255,255,.94);letter-spacing:.4px;' +
        'text-shadow:0 1px 5px rgba(0,0,0,.4);opacity:0;animation:coverTagIn 1s ease .5s forwards}' +
      /* 让封面正文始终浮在场景之上 */
      '.ch-cover > *:not(.cover-scene):not(.cover-glyph):not(.cover-tag){position:relative;z-index:1}' +
      '@keyframes coverGlyphFloat{0%,100%{transform:translate(0,0) rotate(-1.5deg)}' +
        '50%{transform:translate(11px,-15px) rotate(2deg)}}' +
      '@keyframes coverGlyphBreathe{0%,100%{opacity:.24;transform:scale(1)}' +
        '50%{opacity:.62;transform:scale(1.07)}}' +
      '@keyframes coverTagIn{to{opacity:.94}}' +
      '@media (max-width:680px){' +
        '.ch-cover .cover-glyph{display:none}.ch-cover .cover-tag{font-size:11px}}';
    document.head.appendChild(st);
  }
  /* 确定性随机（同章同景，避免每次刷新抖动） */
  function sceneRng(seed) {
    var a = (seed >>> 0) || 1;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hexA(hex, a) {
    if (!hex || hex[0] !== '#') return 'rgba(255,255,255,' + a + ')';
    var h = hex.slice(1);
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  /* 对 hex 色做明暗偏移（amt: -1~+1），输出 #rrggbb */
  function shadeHex(hex, amt) {
    if (!hex || hex[0] !== '#') return '#111111';
    var h = hex.slice(1);
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    var r = Math.max(0, Math.min(255, Math.round(parseInt(h.slice(0,2),16) + amt*255)));
    var g = Math.max(0, Math.min(255, Math.round(parseInt(h.slice(2,4),16) + amt*255)));
    var b = Math.max(0, Math.min(255, Math.round(parseInt(h.slice(4,6),16) + amt*255)));
    return '#' + [r,g,b].map(function(c){var s=c.toString(16);return s.length<2?'0'+s:s}).join('');
  }
  /* HSL 暗化：保留色相/饱和度，仅把明度降到目标 L，得到“有色但很暗”的主题背景（线性减法会把中等亮度色直接钳成纯黑） */
  function hexToHsl(hex) {
    if (!hex || hex[0] !== '#') return [0, 0, 0];
    var h = hex.slice(1); if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    var r = parseInt(h.slice(0,2),16)/255, g = parseInt(h.slice(2,4),16)/255, b = parseInt(h.slice(4,6),16)/255;
    var max = Math.max(r,g,b), min = Math.min(r,g,b), d = max-min, hue = 0, s = 0, l = (max+min)/2;
    if (d !== 0) { s = l > 0.5 ? d/(2-max-min) : d/(max+min); if (max === r) hue = (g-b)/d; else if (max === g) hue = (b-r)/d+2; else hue = (r-g)/d+4; hue *= 60; if (hue < 0) hue += 360; }
    return [hue, s, l];
  }
  function hslToHex(h, s, l) {
    h = ((h % 360) + 360) % 360; s = Math.max(0, Math.min(1, s)); l = Math.max(0, Math.min(1, l));
    var c = (1 - Math.abs(2*l - 1)) * s, x = c * (1 - Math.abs((h/60) % 2 - 1)), m = l - c/2, r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; } else if (h < 120) { r = x; g = c; } else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; } else if (h < 300) { r = x; b = c; } else { r = c; b = x; }
    var C = function (v) { var s2 = Math.max(0, Math.min(255, Math.round(v*255))).toString(16); return s2.length < 2 ? '0'+s2 : s2; };
    return '#' + C(r+m) + C(g+m) + C(b+m);
  }
  function darkTint(hex, L) {
    if (!hex || hex[0] !== '#') return '#0e1216';
    var hsl = hexToHsl(hex);
    return hslToHex(hsl[0], hsl[1], Math.max(0.02, Math.min(0.5, L)));
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
  /* 各「世界基调」→ 场景粒子配置（ambient 取自 tower.js 的 world.ambient） */
  var SCENE = {
    forest: { count: 24, ambient: 'leaf',    palette: ['#ff9ec4', '#ffc2d6', '#fff0f5', '#bfe3bf', '#a8d8a0', '#ffffff'] },
    peak:   { count: 30, ambient: 'snow',    palette: ['#ffffff', '#eaf6ff', '#dff0ff'] },
    canyon: { count: 26, ambient: 'sand',    palette: ['#f3d9a8', '#e8c483', '#fff0d0', '#ffd9a0'] },
    sea:    { count: 20, ambient: 'ripple',  palette: ['#bfe9ff', '#9fd0ff', '#ffffff', '#d6f5e8'] },
    star:   { count: 34, ambient: 'twinkle', palette: ['#ffffff', '#ffe9b0', '#cdbfff', '#bfe0ff'] }
  };
  function buildCoverScene(wrap, ch, world, formulas) {
    if (!wrap) return;
    var base = (world && world.base) || 'forest';
    var def = SCENE[base] || SCENE.forest;
    /* 封面粒子配色与知识塔世界地图同源：优先用本章 world.particle（由地图 ground/sky 派生），保证主色一致 */
    var palette = (world && world.particle && world.particle.length) ? world.particle : (def.palette || SCENE.forest.palette);
    var grassCol = (world && world.ground) ? world.ground : '#78b46e';
    var weedCol = (world && world.water && world.water !== 'transparent') ? world.water : '#5aaa8c';
    /* 封面容器背景：取本章世界 ground 色做 HSL 暗化（保留色相，仅降明度），整张封面有主题色调而非纯黑 */
    var isDark = document.documentElement.classList.contains('dark');
    var ground = (world && world.ground) ? world.ground : '#3a7d5a';
    var coverBg1 = isDark ? darkTint(ground, 0.30) : '#eef3f0';
    var coverBg2 = isDark ? darkTint(ground, 0.20) : '#f7faf8';
    wrap.style.background = 'linear-gradient(160deg,' + coverBg1 + ',' + coverBg2 + ')';
    var DPR = Math.min(2, window.devicePixelRatio || 1);
    var cv = document.createElement('canvas'); cv.className = 'cover-scene';
    wrap.insertBefore(cv, wrap.firstChild);
    var ctx = cv.getContext('2d');
    var W = 0, H = 0;
    function size() {
      var r = wrap.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    size();
    var tint = (world && world.sky && world.sky[0]) ? world.sky[0] : '#ffffff';
    var rng = sceneRng((ch || 1) * 1009 + 7);
    var P = [];
    for (var i = 0; i < def.count; i++) {
      P.push({
        x: rng() * W, y: rng() * H,
        s: 4 + rng() * 10,
        vx: (rng() - 0.5) * 0.5,
        vy: 0.25 + rng() * 0.7,
        rot: rng() * 6.283, vr: (rng() - 0.5) * 0.04,
        ph: rng() * 6.283,
        col: palette[(rng() * palette.length) | 0],
        a: 0.5 + rng() * 0.4,
        tw: 0.4 + rng() * 0.6, sp: 0.6 + rng() * 1.6
      });
    }
    var shoot = null, shootT = 0;
    function drawPetal(p, t) {
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = p.a * (0.8 + 0.2 * Math.sin(t * 1.5 + p.ph));
      ctx.fillStyle = p.col;
      ctx.beginPath();
      ctx.moveTo(0, -p.s * 0.5);
      ctx.bezierCurveTo(p.s * 0.5, -p.s * 0.5, p.s * 0.5, p.s * 0.5, 0, p.s * 0.5);
      ctx.bezierCurveTo(-p.s * 0.5, p.s * 0.5, -p.s * 0.5, -p.s * 0.5, 0, -p.s * 0.5);
      ctx.fill();
      ctx.restore();
    }
    function drawDot(p, t, glow) {
      ctx.save();
      ctx.globalAlpha = glow ? p.a * (0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * p.sp + p.ph))) : p.a;
      ctx.fillStyle = p.col;
      if (glow) { ctx.shadowColor = p.col; ctx.shadowBlur = 8; }
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(1, p.s * 0.4), 0, 6.2832); ctx.fill();
      ctx.restore();
    }
    function drawBubble(p) {
      ctx.save();
      ctx.globalAlpha = p.a * 0.75;
      ctx.strokeStyle = p.col; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s * 0.5, 0, 6.2832); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.16)'; ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.6)';
      ctx.beginPath(); ctx.arc(p.x - p.s * 0.18, p.y - p.s * 0.18, p.s * 0.12, 0, 6.2832); ctx.fill();
      ctx.restore();
    }
    function drawGrass(t) {
      ctx.save();
      var blades = Math.max(6, Math.round(W / 26));
      for (var i = 0; i <= blades; i++) {
        var x = (i / blades) * W;
        var hgt = 16 + (i % 3) * 10 + Math.sin(i) * 4;
        var sway = Math.sin(t * 1.2 + i) * 6;
        ctx.strokeStyle = hexA(grassCol, 0.5); ctx.lineWidth = 2.4; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(x, H);
        ctx.quadraticCurveTo(x + sway * 0.5, H - hgt * 0.6, x + sway, H - hgt);
        ctx.stroke();
      }
      ctx.restore();
    }
    function drawSeaweed(t) {
      ctx.save();
      var strands = Math.max(4, Math.round(W / 60));
      for (var i = 0; i < strands; i++) {
        var x = (i + 0.5) / strands * W;
        ctx.strokeStyle = hexA(weedCol, 0.5); ctx.lineWidth = 3; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(x, H);
        for (var s = 1; s <= 4; s++) {
          var yy = H - s * (H * 0.12);
          var xx = x + Math.sin(t * 1.4 + i + s * 0.6) * 8;
          ctx.lineTo(xx, yy);
        }
        ctx.stroke();
      }
      ctx.restore();
    }
    function step(p, t) {
      if (def.ambient === 'leaf' || def.ambient === 'snow') {
        p.y += p.vy; p.x += Math.sin(t * 0.8 + p.ph) * 0.4 + p.vx * 0.3; p.rot += p.vr;
        if (p.y > H + 12) { p.y = -12; p.x = rng() * W; }
      } else if (def.ambient === 'ripple') {
        p.y -= p.vy; p.x += Math.sin(t * 1.0 + p.ph) * 0.4;
        if (p.y < -12) { p.y = H + 12; p.x = rng() * W; }
      } else if (def.ambient === 'sand') {
        p.x += p.vx; p.y += Math.sin(t * 0.6 + p.ph) * 0.2;
        if (p.x > W + 12) p.x = -12; else if (p.x < -12) p.x = W + 12;
      }
      /* twinkle：星固定，仅闪烁 */
    }
    function drawScene(t) {
      ctx.clearRect(0, 0, W, H);
      var g = ctx.createRadialGradient(W * 0.5, H * 0.42, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.72);
      /* 背景光晕用本章 sky 色，加大可见度让主题色更明显 */
      var glowAlpha = def.ambient === 'twinkle' ? 0.22 : 0.14;
      g.addColorStop(0, hexA(tint, glowAlpha));
      g.addColorStop(1, hexA(tint, 0.04));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        if (def.ambient === 'leaf') drawPetal(p, t);
        else if (def.ambient === 'snow') drawDot(p, t, false);
        else if (def.ambient === 'ripple') drawBubble(p);
        else if (def.ambient === 'sand') drawDot(p, t, false);
        else if (def.ambient === 'twinkle') drawDot(p, t, true);
        step(p, t);
      }
      if (def.ambient === 'leaf') drawGrass(t);
      else if (def.ambient === 'ripple') drawSeaweed(t);
      else       if (def.ambient === 'twinkle') {
        shootT -= 1;
        if (!shoot && shootT <= 0 && rng() < 0.004) { shoot = { x: rng() * W, y: rng() * H * 0.5, len: 60 + rng() * 60 }; shootT = 220; }
        if (shoot) {
          ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x + shoot.len, shoot.y + shoot.len * 0.5); ctx.stroke();
          ctx.restore();
          shoot.x += 4; shoot.y += 2; if (shoot.x > W) shoot = null;
        }
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    var raf = 0;
    function frame(ms) { drawScene(ms / 1000); }
    if (reduce) { drawScene(0); } else { raf = requestAnimationFrame(frame); }
    window.addEventListener('resize', size);
    requestAnimationFrame(size); if (reduce) setTimeout(size, 0);
    /* 漂浮的本章数学符号（呼吸流动） */
    if (!reduce) {
      (formulas || []).slice(0, 2).forEach(function (tex, idx) {
        var el = document.createElement('div'); el.className = 'cover-glyph';
        renderFormula(el, tex);
        el.style.left = (12 + rng() * 56) + '%';
        el.style.top = (30 + rng() * 46) + '%';
        el.style.setProperty('--gd', (13 + idx * 4 + rng() * 4).toFixed(1) + 's');
        el.style.setProperty('--gb', (4.5 + rng() * 2.5).toFixed(1) + 's');
        wrap.appendChild(el);
      });
    }
    /* 世界名小标（轻盈，非整块） */
    var tag = document.createElement('div'); tag.className = 'cover-tag';
    tag.textContent = '🏰 ' + ((world && world.name) || '知识之塔');
    wrap.appendChild(tag);
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
        rain(wrap, 12, 13, 24, 22, 42, 0.08, 0.16);
        injectCoverSceneStyles();
        var _f = (CHAPTER_FORMULAS[BOOKKEY] && CHAPTER_FORMULAS[BOOKKEY][n]) || [];
        /* 整页主题背景：用本章世界 ground/sky 做 HSL 暗化渐变，dark 模式上深色主题底，亮色模式上浅色主题底 */
        function themeChapterPage(w) {
          var page = $('.page'); if (!page) return;
          var dk = document.documentElement.classList.contains('dark');
          var ground = (w && w.ground) ? w.ground : '#3a7d5a';
          var sky = (w && w.sky && w.sky[0]) ? w.sky[0] : '#9fc6ff';
          if (dk) {
            var p1 = darkTint(ground, 0.32), p2 = darkTint(ground, 0.20);
            page.style.background = 'radial-gradient(130% 80% at 50% -10%,' + hexA(sky, 0.30) + ',transparent 60%),linear-gradient(180deg,' + p1 + ',' + p2 + ')';
          } else {
            page.style.background = 'linear-gradient(180deg,' + hexA(ground, 0.16) + ',' + hexA(ground, 0.06) + ')';
          }
        }
        function _drawScene() {
          if (!window.TowerGame || !window.TowerGame.chapterWorld) return false;
          var w = window.TowerGame.chapterWorld(n);
          /* 整页背景独立设置：即便封面动画抛错也不影响主题底色（解耦，防整页变黑） */
          try { themeChapterPage(w); } catch (e) {}
          try { buildCoverScene(wrap, n, w, _f); } catch (e) {}
          return true;
        }
        if (!_drawScene()) { var _cv = setInterval(function () { if (_drawScene()) clearInterval(_cv); }, 60); setTimeout(function () { clearInterval(_cv); }, 5000); }
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