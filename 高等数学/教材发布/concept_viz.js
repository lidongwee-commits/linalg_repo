/*
 * concept_viz.js — 高数数字教材「关键概念随文可视化」引擎 v2
 *
 * 设计原则：
 *   - 每个可视化必须回答一个具体的教学问题，不是面子工程
 *   - 离散参数（轮数、阶数）→ 按钮组/输入框；连续参数 → 滑块
 *   - 说明文字口语化，直接告诉学生该看什么、拖什么
 *   - 浅色清爽主题，与教材统一（主色 #0F6E56）
 *   - 零依赖、devicePixelRatio 高清、响应式 resize
 *
 * 用法：<div class="cviz" data-viz="类型"></div>
 * 支持：limit-sequence / limit-eps-delta / derivative-tangent /
 *       taylor-approx / integral-riemann / newton
 */
(function () {
  'use strict';

  /* ================================================================
     调色板 & 工具
     ================================================================ */
  var C = {
    bg:      '#fafbfc',
    canvas:  '#ffffff',
    grid:    '#eef2f1',
    axis:    '#c8d4cc',
    axisTxt: '#8aa39a',
    main:    '#0F6E56',       /* 教材青绿 —— 曲线/主元素 */
    mainFill:'rgba(15,110,86,0.08)',
    alt:     '#D97706',       /* 橙 —— 切线/割线/辅助 */
    altFill: 'rgba(217,119,6,0.10)',
    acc:     '#2563EB',       /* 蓝 —— 第二辅助 */
    accFill: 'rgba(37,99,235,0.08)',
    ok:      '#16A34A',       /* 绿 —— 正确/落入带内 */
    bad:     '#94a3b8',       /* 灰 —— 未落入 */
    text:    '#33473f',
    muted:   '#6b8179',
    highlight:'#fef3c7'       /* 浅黄 —— 读出区背景 */
  };

  var _redrawers = [];

  function DPR() { return window.devicePixelRatio || 1; }

  /** 设置 canvas 尺寸并返回 {ctx, W, H}（逻辑像素） */
  function fit(canvas) {
    var r = canvas.getBoundingClientRect();
    var W = Math.max(200, r.width), H = Math.max(180, r.height || 280);
    var d = DPR();
    canvas.width  = Math.round(W * d);
    canvas.height = Math.round(H * d);
    var ctx = canvas.getContext('2d');
    ctx.setTransform(d, 0, 0, d, 0, 0);
    return { ctx: ctx, W: W, H: H };
  }

  /** 坐标映射器 */
  function map2d(dom, W, H) {
    return {
      x: function (v) { return (v - dom.xmin) / (dom.xmax - dom.xmin) * W; },
      y: function (v) { return H - (v - dom.ymin) / (dom.ymax - dom.ymin) * H; }
    };
  }

  /** 画网格 + 坐标轴 */
  function drawGrid(ctx, W, H, dom, m, opt) {
    opt = opt || {};
    ctx.fillStyle = C.canvas;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = C.grid;
    ctx.lineWidth = 1;
    var i, v, p;
    for (i = 0; i <= 10; i++) {
      v = dom.xmin + (dom.xmax - dom.xmin) * i / 10;
      p = m.x(v); ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, H); ctx.stroke();
    }
    for (i = 0; i <= 6; i++) {
      v = dom.ymin + (dom.ymax - dom.ymin) * i / 6;
      p = m.y(v); ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(W, p); ctx.stroke();
    }
    if (opt.axes !== false) {
      var ox = (opt.ox != null) ? opt.ox : 0;
      var oy = (opt.oy != null) ? opt.oy : 0;
      ctx.strokeStyle = C.axis; ctx.lineWidth = 1.2;
      if (ox >= dom.xmin && ox <= dom.xmax) {
        var ax = m.x(ox); ctx.beginPath(); ctx.moveTo(ax, 0); ctx.lineTo(ax, H); ctx.stroke();
      }
      if (oy >= dom.ymin && oy <= dom.ymax) {
        var ay = m.y(oy);
        ctx.beginPath(); ctx.moveTo(0, ay); ctx.lineTo(W, ay); ctx.stroke();
        ctx.fillStyle = C.axisTxt;
        ctx.font = '11px -apple-system,Segoe UI,Roboto,sans-serif';
        ctx.fillText('O', Math.min(W - 14, Math.max(2, m.x(ox) + 4)), Math.max(14, ay - 5));
      }
    }
  }

  function txt(ctx, s, x, y, color) {
    ctx.fillStyle = color || C.muted;
    ctx.font = '12px -apple-system,Segoe UI,Roboto,sans-serif';
    ctx.fillText(s, x, y);
  }

  function watch(fn) { _redrawers.push(fn); }

  /* ================================================================
   公共 UI 构建器
   ================================================================ */

  /**
   * 创建按钮组 <div class="cviz-btns"> 返回容器
   * items: [{label, value, selected?}, ...]
   * onSelect(value)
   */
  function btnGroup(items, onSelect) {
    var wrap = document.createElement('div');
    wrap.className = 'cviz-btns';
    items.forEach(function (it) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = it.selected ? 'on' : '';
      b.textContent = it.label;
      b.setAttribute('data-val', it.value);
      b.addEventListener('click', function () {
        wrap.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        onSelect(it.value, b);
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  /**
   * 创建带标签的数字输入行
   * 返回 {row, input, valSpan}
   */
  function numInput(label, initVal, min, max, step) {
    var row = document.createElement('div');
    row.className = 'cviz-num-row';
    row.innerHTML = '<label>' + label + '</label>' +
      '<input type="number" min="' + min + '" max="' + max + '" step="' + step + '" value="' + initValue(initVal) + '">' +
      '<span class="cviz-val">' + initValue(initVal) + '</span>';
    var inp = row.querySelector('input');
    var sp  = row.querySelector('.cviz-val');
    inp.addEventListener('input', function () { sp.textContent = inp.value; });
    inp.addEventListener('change', function () { /* 触发外部 redraw */ });
    return { row: row, input: inp, valSpan: sp };
  }
  function initValue(v) { return typeof v === 'number' ? v : parseFloat(v); }

  /**
   * 创建滑块行
   * 返回 {row, slider, valSpan}
   */
   function sliderRow(label, initVal, min, max, step) {
    var row = document.createElement('div');
    row.className = 'cviz-slider-row';
    row.innerHTML = '<label>' + label + ' <span class="cviz-val">' + initValue(initVal) + '</span></label>' +
      '<input type="range" min="' + min + '" max="' + max + '" step="' + step + '" value="' + initValue(initVal) + '">';
    var sl = row.querySelector('input');
    var sp = row.querySelector('.cviz-val');
    sl.addEventListener('input', function () { sp.textContent = sl.value; });
    return { row: row, slider: sl, valSpan: sp };
  }


  /* ================================================================
   ① 数列极限 ε–N 定义
   --------------------------------------------------------------
   教学目标：让学生「看见」∀ε>0 ∃N 的含义
   例子：aₙ = 1/n → 0（当 n→∞）
   交互：选 ε → 自动算 N → 标出哪些项落入带内
   ================================================================ */
  function vizLimitSequence(root) {
    root.innerHTML =
      '<div class="cviz-cap">数列 a<sub>n</sub> = 1/n 如何趋近于 0？拖动 ε，观察需要从第几项开始，所有后续项全部掉进以 0 为中心的 ε 宽带内.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="cs-ctrl"></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl  = root.querySelector('#cs-ctrl');
    var canvas = root.querySelector('canvas');
    var readout= root.querySelector('.cviz-readout');

    // --- 控件：ε 预设按钮 + 微调滑块 ---
    var epsPresets = btnGroup([
      { label: 'ε = 0.50', value: '0.5',  selected: true },
      { label: 'ε = 0.10', value: '0.1' },
      { label: 'ε = 0.05', value: '0.05' },
      { label: 'ε = 0.01', value: '0.01' }
    ], function (v) { eps = parseFloat(v); redraw(); });

    var eps = 0.5;
    var sr = sliderRow('微调 ε', eps, 0.02, 0.6, 0.01);
    sr.slider.addEventListener('input', function () {
      eps = parseFloat(sr.slider.value);
      redraw();
    });

    ctrl.appendChild(epsPresets);
    ctrl.appendChild(sr.row);

    // --- 绘制 ---
    function redraw() {
      var f  = fit(canvas), ctx = f.ctx, W = f.W, H = f.H;

      // ---- 计算N：找最小的 n 使 1/n ≤ eps => n ≥ 1/eps ----
      var N = Math.ceil(1 / eps);

      // 动态 x 轴范围：确保能看到 N 之后至少几项落入带内
      var maxN = Math.max(N + 4, 20);   // 至少显示到 N+4，最少显示20项
      if (maxN > 200) maxN = 200;       // 上限防止太稀疏
      var dom = { xmin: 0.3, xmax: maxN + 1, ymin: -0.08, ymax: 0.70 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { axes: false });  // 不画常规轴，自己画

      // ---- 目标极限线 L = 0 ----
      ctx.strokeStyle = C.main; ctx.lineWidth = 1.2; ctx.setLineDash([4, 3]);
      ctx.beginPath(); ctx.moveTo(m.x(0.3), m.y(0)); ctx.lineTo(m.x(dom.xmax), m.y(0)); ctx.stroke();
      ctx.setLineDash([]);
      txt(ctx, '极限 L = 0', 8, m.y(0) - 6, C.main);

      // ---- ε 带（浅青填充 + 边界虚线）----
      ctx.fillStyle = C.mainFill;
      ctx.fillRect(0, m.y(eps), W, m.y(-eps) - m.y(eps));
      ctx.strokeStyle = C.main; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(0, m.y(eps));  ctx.lineTo(W, m.y(eps));  ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, m.y(-eps)); ctx.lineTo(W, m.y(-eps)); ctx.stroke();
      ctx.setLineDash([]);
      txt(ctx, 'ε 上界 (+ε)', 6, m.y(eps) + 12, C.main);
      txt(ctx, 'ε 下界 (−ε)', 6, m.y(-eps) - 4, C.main);

      // ---- N 分界竖线 ----
      if (N <= maxN - 2) {
        ctx.strokeStyle = C.alt; ctx.lineWidth = 1.4; ctx.setLineDash([5, 3]);
        ctx.beginPath(); ctx.moveTo(m.x(N), m.y(dom.ymin)); ctx.lineTo(m.x(N), m.y(dom.ymax)); ctx.stroke();
        ctx.setLineDash([]);
        txt(ctx, 'N = ' + N, m.x(N) + 5, 14, C.alt);
      }

      // ---- 画离散点 a_n = 1/n（动态项数）----
      var displayMax = Math.min(maxN, 120);  // 最多画120个点
      var n;
      for (n = 1; n <= displayMax; n++) {
        var an = 1 / n;
        var px = m.x(n), py = m.y(an);
        var inBand = (an <= eps && an >= -eps);

        // 点的大小：带内更大更醒目，带外适中
        var r = inBand ? 6 : 4;

        ctx.beginPath();
        ctx.arc(px, py, r, 0, 6.2832);
        ctx.fillStyle = inBand ? C.ok : C.bad;
        ctx.fill();

        // 只标注前3项和 N 附近的项（避免文字堆叠）
        if (n <= 3 || (n >= Math.max(1, N - 1) && n <= N + 2)) {
          ctx.fillStyle = C.text;
          ctx.font = '11px -apple-system,Segoe UI,Roboto,sans-serif';
          ctx.fillText('a' + sub(n), px + 7, py - 5);
        }
      }

      // ---- 读出区 ----
      var inside = 0;
      for (n = 1; n <= displayMax; n++) { if (Math.abs(1/n) <= eps) inside++; }
      var totalInfinite = Infinity;  // 理论上无穷多项落入
      readout.innerHTML =
        '当前 ε = <b>' + eps.toFixed(3) + '</b> → 取 <b>N = ' + N + '</b>（因为 1/' + N + ' = ' + (1/N).toFixed(4) + ' ≤ ε）.' +
        '从第 <b>' + (N + 1) + '</b> 项起所有点（绿色）都在 ε 带内，当前视窗中已显示 ' + inside + '/' + displayMax + ' 项落入.' +
        '<br><span style="color:#6b8179;font-size:12px">ε 越小，N 越大——这就是 "任意近" 的含义：无论 ε 多小，总能找到这样的 N.</span>';
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }

  function sub(n) {
    var subs = ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'];
    var s = String(n), r = '';
    for (var i = 0; i < s.length; i++) { var c = s.charAt(i); r += subs[c] || c; }
    return r;
  }


  /* ================================================================
   ② 函数极限 ε–δ 定义
   --------------------------------------------------------------
   教学目标：理解 δ 由 ε 决定——缩小误差容忍度，自变量邻域也要缩
   函数：f(x) = x²，x → 1，极限 L = 1
   ================================================================ */
  function vizEpsDelta(root) {
    root.innerHTML =
      '<div class="cviz-cap">函数 f(x) = x² 在 x → 1 时极限为 1.拖动 ε（目标精度），观察 δ 邻域如何随之缩小——只要 x 落在 (1−δ, 1+δ) 内，函数值就一定落在 (1−ε, 1+ε) 内.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="ed-ctrl"></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl   = root.querySelector('#ed-ctrl');
    var canvas = root.querySelector('canvas');
    var readout= root.querySelector('.cviz-readout');

    var eps = 0.3;
    var sr = sliderRow('ε（目标精度）', eps, 0.05, 0.8, 0.01);
    sr.slider.addEventListener('input', function () {
      eps = parseFloat(sr.slider.value);
      redraw();
    });
    ctrl.appendChild(sr.row);

    function redraw() {
      var f  = fit(canvas), ctx = f.ctx, W = f.W, H = f.H;
      var x0 = 1, L = 1;

      // δ 的选取：对于 f(x)=x² 在 x0=1 附近，
      // |x²-1| = |x-1||x+1| ≈ 2|x-1| 当 x≈1
      // 所以取 δ = ε/2.5 能保证 |x²-1| < ε
      var delta = eps / 2.5;

      var dom = { xmin: -0.3, xmax: 2.3, ymin: -0.3, ymax: 2.3 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { ox: 0, oy: 0 });

      // ---- ε 水平带（围绕 L=1）----
      ctx.fillStyle = C.mainFill;
      ctx.fillRect(0, m.y(L + eps), W, m.y(L - eps) - m.y(L + eps));
      ctx.strokeStyle = C.main; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(0, m.y(L+eps)); ctx.lineTo(W, m.y(L+eps)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, m.y(L-eps)); ctx.lineTo(W, m.y(L-eps)); ctx.stroke();
      ctx.setLineDash([]);

      // ---- δ 竖直带（围绕 x0=1）----
      ctx.fillStyle = C.accFill;
      ctx.fillRect(m.x(x0 - delta), 0, m.x(x0 + delta) - m.x(x0 - delta), H);
      ctx.strokeStyle = C.acc; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(m.x(x0-delta), 0); ctx.lineTo(m.x(x0-delta), H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(m.x(x0+delta), 0); ctx.lineTo(m.x(x0+delta), H); ctx.stroke();
      ctx.setLineDash([]);

      // ---- 曲线 y = x² ----
      ctx.strokeStyle = C.main; ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (var i = 0; i <= 220; i++) {
        var x = dom.xmin + (dom.xmax - dom.xmin) * i / 220;
        var y = x * x;
        if (i === 0) ctx.moveTo(m.x(x), m.y(y)); else ctx.lineTo(m.x(x), m.y(y));
      }
      ctx.stroke();

      // ---- δ 邻域内的曲线段高亮（加粗绿色）----
      ctx.strokeStyle = C.ok; ctx.lineWidth = 4;
      ctx.beginPath();
      for (var j = 0; j <= 80; j++) {
        var xx = (x0 - delta) + (2 * delta) * j / 80;
        var yy = xx * xx;
        if (j === 0) ctx.moveTo(m.x(xx), m.y(yy)); else ctx.lineTo(m.x(xx), m.y(yy));
      }
      ctx.stroke();

      // ---- 参考点 (x0, L) ----
      ctx.fillStyle = C.main;
      ctx.beginPath(); ctx.arc(m.x(x0), m.y(L), 4.5, 0, 6.2832); ctx.fill();

      // ---- 标注 ----
      txt(ctx, 'x₀ = 1', m.x(x0) + 6, 14, C.main);
      txt(ctx, 'L = 1', W - 42, m.y(L) - 7, C.main);
      txt(ctx, 'ε 带（函数值容差）', 6, m.y(L + eps) + 13, C.main);
      txt(ctx, 'δ 带（自变量邻域）', m.x(x0 - delta) + 4, H - 6, C.acc);

      // ---- 读出 ----
      readout.innerHTML =
        'ε = <b>' + eps.toFixed(2) + '</b> → 取 δ = ε/2.5 ≈ <b>' + delta.toFixed(3) + '</b>.' +
        '当 0 &lt; |x − 1| &lt; δ 时（即 x 在紫色竖带内），|f(x) − 1| &lt; ε（函数值在青色横带内）✓.' +
        '<br><span style="color:#6b8179;font-size:12px">关键直觉：你要的结果越精确（ε 小），允许的自变量范围就越窄（δ 也小）.</span>';
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }


  /* ================================================================
   ③ 导数 = 切线斜率（割线 → 切线）
   --------------------------------------------------------------
   教学目标：导数的几何意义——割线差商在 Δx→0 时趋近切线斜率
   函数：f(x) = x²
   ================================================================ */
  function vizDerivative(root) {
    root.innerHTML =
      '<div class="cviz-cap">导数是切线的斜率.拖动 x₀ 移动切点 P；拖动 Δx 让 Q 点靠近 P——观察割线 PQ（橙色虚线）如何逐渐变成切线（绿色），以及差商如何趋近导数值.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="dt-ctrl"></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl   = root.querySelector('#dt-ctrl');
    var canvas = root.querySelector('canvas');
    var readout= root.querySelector('.cviz-readout');

    var sx = sliderRow('x₀（切点）', 1, -1.8, 1.8, 0.05);
    var sd = sliderRow('Δx（Q 点偏移）', 1, 0.02, 2, 0.02);

    sx.slider.addEventListener('input', redraw);
    sd.slider.addEventListener('input', redraw);
    ctrl.appendChild(sx.row);
    ctrl.appendChild(sd.row);

    // 「Δx → 0」动画按钮
    var animBtn = document.createElement('button');
    animBtn.type = 'button'; animBtn.className = 'cviz-anim-btn';
    animBtn.textContent = '▶ 播放 Δx → 0';
    animBtn.addEventListener('click', function () {
      if (animBtn._running) return;
      animBtn._running = true;
      animBtn.textContent = '⏸ 播放中...';
      animBtn.classList.add('running');
      var start = parseFloat(sd.slider.value);
      var t0 = performance.now();
      function tick(now) {
        var elapsed = (now - t0) / 1200; // 1.2 秒
        if (elapsed >= 1) { elapsed = 1; animBtn._running = false; animBtn.textContent = '▶ 播放 Δx → 0'; animBtn.classList.remove('running'); }
        var val = start * (1 - elapsed) + 0.02 * elapsed;
        sd.slider.value = val; sd.valSpan.textContent = val.toFixed(2);
        redraw();
        if (elapsed < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
    ctrl.appendChild(animBtn);

    function f(x) { return x * x; }

    function redraw() {
      var ff = fit(canvas), ctx = ff.ctx, W = ff.W, H = ff.H;
      var x0 = parseFloat(sx.slider.value);
      var dx = parseFloat(sd.slider.value);
      var dom = { xmin: -2.3, xmax: 2.3, ymin: -0.6, ymax: 5.2 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { ox: 0, oy: 0 });

      // 曲线
      ctx.strokeStyle = C.main; ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (var i = 0; i <= 220; i++) {
        var x = dom.xmin + (dom.xmax - dom.xmin) * i / 220;
        var y = f(x);
        if (i === 0) ctx.moveTo(m.x(x), m.y(y)); else ctx.lineTo(m.x(x), m.y(y));
      }
      ctx.stroke();

      var y0  = f(x0);
      var slope = 2 * x0;           // f'(x0) = 2x0
      var xq  = x0 + dx, yq = f(xq);
      var secSlope = dx > 1e-6 ? (yq - y0) / dx : slope;

      // 切线（绿实线）
      ctx.strokeStyle = C.ok; ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(m.x(x0 - 1.6), m.y(y0 + slope * (-1.6)));
      ctx.lineTo(m.x(x0 + 1.6), m.y(y0 + slope * (1.6)));
      ctx.stroke();

      // 割线 PQ（橙虚线）
      if (dx > 0.03) {
        ctx.strokeStyle = C.alt; ctx.setLineDash([6, 4]); ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x(x0 - 1.4), m.y(y0 + secSlope * (-1.4)));
        ctx.lineTo(m.x(xq + 1.0), m.y(yq + secSlope * 1.0));
        ctx.stroke(); ctx.setLineDash([]);
      }

      // 点 P（切点）、Q
      ctx.fillStyle = C.ok; ctx.beginPath(); ctx.arc(m.x(x0), m.y(y0), 5, 0, 6.2832); ctx.fill();
      if (dx > 0.05) {
        ctx.fillStyle = C.alt; ctx.beginPath(); ctx.arc(m.x(xq), m.y(yq), 5, 0, 6.2832); ctx.fill();
        txt(ctx, 'Q(' + xq.toFixed(2) + ', ' + yq.toFixed(2) + ')', m.x(xq) + 7, m.y(yq) - 6, C.alt);
      }
      txt(ctx, 'P(' + x0.toFixed(2) + ', ' + y0.toFixed(2) + ')', m.x(x0) + 7, m.y(y0) - 6, C.ok);

      // 读出
      var diff = Math.abs(secSlope - slope);
      readout.innerHTML =
        'f(x) = x²，f′(x) = 2x.<br>' +
        '切点 P = (' + x0.toFixed(2) + ', ' + y0.toFixed(2) + ')，切线斜率 f′(' + x0.toFixed(2) + ') = <b>' + slope.toFixed(3) + '</b>；' +
        '割线差商 [f(' + x0.toFixed(2) + '+Δx)−f(' + x0.toFixed(2) + ')]/Δx = <b>' + secSlope.toFixed(3) + '</b>' +
        (dx > 0.05 ? '，差距 = ' + diff.toFixed(4) : '') +
        '<br><span style="color:#6b8179;font-size:12px">▶ 点击「播放」看 Δx→0 时割线如何变成切线.</span>';
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }


  /* ================================================================
   ④ 泰勒多项式逼近 sin x
   --------------------------------------------------------------
   教学目标：增加多项式阶数 → 逼近范围扩大、误差减小
   ================================================================ */
  function vizTaylor(root) {
    root.innerHTML =
      '<div class="cviz-cap">sin x 在 x = 0 处的泰勒展开.增加阶数 n，观察多项式（橙色）如何在更大的范围内贴合 sin x（青色）.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="tl-ctrl"></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl   = root.querySelector('#tl-ctrl');
    var canvas = root.querySelector('canvas');
    var readout= root.querySelector('.cviz-readout');

    var order = 3;
    var bg = btnGroup([
      { label: 'n = 1', value: '1' },
      { label: 'n = 3', value: '3', selected: true },
      { label: 'n = 5', value: '5' },
      { label: 'n = 7', value: '7' },
      { label: 'n = 9', value: '9' }
    ], function (v) { order = parseInt(v, 10); redraw(); });
    ctrl.appendChild(bg);

    function fact(k) { var r = 1; for (var i = 2; i <= k; i++) r *= i; return r; }

    function taylor(x, ord) {
      var s = 0;
      for (var k = 1; k <= ord; k++) {
        var pw = 2 * k - 1;
        s += (k % 2 === 1 ? 1 : -1) * Math.pow(x, pw) / fact(pw);
      }
      return s;
    }

    function polyStr(ord) {
      var terms = [];
      for (var k = 1; k <= ord; k++) {
        var pw = 2 * k - 1;
        var sign = (k % 2 === 1) ? '' : '−';
        var coeff = '1/' + fact(pw) + '·';
        if (pw === 1) terms.push(sign + 'x');
        else terms.push(sign + coeff + 'x<sup>' + pw + '</sup>');
      }
      return terms.join(' ');
    }

    function redraw() {
      var ff = fit(canvas), ctx = ff.ctx, W = ff.W, H = ff.H;
      var dom = { xmin: -3.8, xmax: 3.8, ymin: -1.6, ymax: 1.6 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { ox: 0, oy: 0 });

      // sin x（青色实线）
      ctx.strokeStyle = C.main; ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (var i = 0; i <= 260; i++) {
        var x = dom.xmin + (dom.xmax - dom.xmin) * i / 260;
        var y = Math.sin(x);
        if (i === 0) ctx.moveTo(m.x(x), m.y(y)); else ctx.lineTo(m.x(x), m.y(y));
      }
      ctx.stroke();
      txt(ctx, 'sin x（原函数）', 6, m.y(1.35), C.main);

      // 泰勒多项式（橙色虚线）
      ctx.strokeStyle = C.alt; ctx.lineWidth = 2.2; ctx.setLineDash([6, 3]);
      ctx.beginPath();
      for (var j = 0; j <= 260; j++) {
        var xx = dom.xmin + (dom.xmax - dom.xmin) * j / 260;
        var yy = taylor(xx, order);
        if (j === 0) ctx.moveTo(m.x(xx), m.y(yy)); else ctx.lineTo(m.x(xx), m.y(yy));
      }
      ctx.stroke(); ctx.setLineDash([]);
      txt(ctx, 'P' + order + '(x)', W - 60, m.y(1.35), C.alt);

      // 采样计算最大误差
      var maxErr = 0, errX = 0;
      for (var s = 0; s <= 400; s++) {
        var xs = dom.xmin + (dom.xmax - dom.xmin) * s / 400;
        var e  = Math.abs(Math.sin(xs) - taylor(xs, order));
        if (e > maxErr) { maxErr = e; errX = xs; }
      }

      readout.innerHTML =
        'P<sub>' + order + '</sub>(x) = ' + polyStr(order) + '<br>' +
        '区间 [−π, π] 内最大误差 ≈ <b>' + maxErr.toFixed(5) + '</b>（发生在 x ≈ ' + errX.toFixed(2) + ' 附近）.' +
        '阶数越高，有效逼近范围越大.<br>' +
        '<span style="color:#6b8179;font-size:12px">提示：n=1 只有 x 一项（线性近似），n≥3 才开始出现曲率.</span>';
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }


  /* ================================================================
   ⑤ 定积分黎曼和
   --------------------------------------------------------------
   教学目标：分割越细（n 越大），矩形面积和 → 定积分真值
   函数：f(x) = 12 + x² 在 [0, 4]，真值 = 69⅓
   ================================================================ */
  function vizIntegral(root) {
    root.innerHTML =
      '<div class="cviz-cap">定积分 ∫₀⁴ (12+x²)dx 是曲边梯形的面积.把区间分成 n 等份，用矩形面积之和来近似——n 越大，近似越准.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="ig-ctrl"></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl   = root.querySelector('#ig-ctrl');
    var canvas = root.querySelector('canvas');
    var readout= root.querySelector('.cviz-readout');

    var n = 8, mode = 'left';

    // n 预设按钮
    var nBtns = btnGroup([
      { label: 'n = 4',  value: '4' },
      { label: 'n = 8',  value: '8', selected: true },
      { label: 'n = 20', value: '20' },
      { label: 'n = 40', value: '40' }
    ], function (v) { n = parseInt(v, 10); redraw(); });
    ctrl.appendChild(nBtns);

    // 端点模式按钮
    var modeBtns = btnGroup([
      { label: '左端点', value: 'left', selected: true },
      { label: '中点',   value: 'mid' },
      { label: '右端点', value: 'right' }
    ], function (v) { mode = v; redraw(); });
    ctrl.appendChild(modeBtns);

    // 「自动加倍」按钮
    var dblBtn = document.createElement('button');
    dblBtn.type = 'button'; dblBtn.className = 'cviz-anim-btn';
    dblBtn.textContent = '×2 加倍分割';
    dblBtn.addEventListener('click', function () {
      if (n >= 80) return;
      n = n * 2;
      // 更新按钮状态
      var found = false;
      nBtns.querySelectorAll('button').forEach(function (b) {
        if (parseInt(b.getAttribute('data-val'), 10) === n && !found) {
          b.click(); found = true;
        }
      });
      if (!found) redraw(); // 自定义值
    });
    ctrl.appendChild(dblBtn);

    function f(x) { return 12 + x * x; }
    var TRUTH = 69 + 1/3;

    function redraw() {
      var ff = fit(canvas), ctx = ff.ctx, W = ff.W, H = ff.H;
      var a = 0, b = 4;
      var dom = { xmin: -0.3, xmax: 4.4, ymin: -2, ymax: 32 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { ox: 0, oy: 0 });

      // 曲边梯形填充（浅青）
      ctx.fillStyle = C.mainFill;
      ctx.beginPath();
      ctx.moveTo(m.x(a), m.y(0));
      for (var i = 0; i <= 200; i++) {
        var x = a + (b - a) * i / 200;
        ctx.lineTo(m.x(x), m.y(f(x)));
      }
      ctx.lineTo(m.x(b), m.y(0)); ctx.closePath(); ctx.fill();

      // 曲线
      ctx.strokeStyle = C.main; ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (var j = 0; j <= 200; j++) {
        var xc = a + (b - a) * j / 200;
        if (j === 0) ctx.moveTo(m.x(xc), m.y(f(xc))); else ctx.lineTo(m.x(xc), m.y(f(xc)));
      }
      ctx.stroke();

      // 矩形
      var h = (b - a) / n, sum = 0;
      ctx.fillStyle = C.altFill;
      ctx.strokeStyle = C.alt; ctx.lineWidth = 1;
      for (var k = 0; k < n; k++) {
        var xL = a + k * h, xR = a + (k + 1) * h;
        var xs;
        if (mode === 'left') xs = xL;
        else if (mode === 'right') xs = xR;
        else xs = (xL + xR) / 2;
        var yt = f(xs);
        sum += yt * h;

        var rx = m.x(xL), rw = m.x(xR) - m.x(xL);
        var ry = m.y(yt), rh = m.y(0) - m.y(yt);
        ctx.fillRect(rx, ry, rw, rh);
        ctx.strokeRect(rx, ry, rw, rh);
      }

      var err = sum - TRUTH;
      readout.innerHTML =
        'n = <b>' + n + '</b>（' + ({ left: '左端点', mid: '中点', right: '右端点' })[mode] + '）：' +
        '黎曼和 S<sub>' + n + '</sub> = <b>' + sum.toFixed(3) + '</b>，' +
        '定积分真值 = 69.333，误差 = <b>' + (err >= 0 ? '+' : '') + err.toFixed(3) + '</b><br>' +
        '<span style="color:#6b8179;font-size:12px">点击「×2 加倍分割」观察 n 增大时误差如何缩小.</span>';
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }


  /* ================================================================
   ⑥ 牛顿迭代法（切线法求根）—— 完全重做
   --------------------------------------------------------------
   教学目标：理解为什么"切线与 x 轴交点"是更好的近似根
   例：求 √2（即解 x² − 2 = 0），初值 x₀ = 2
   交互：「下一步」「自动播放」「重置」按钮 + 迭代表格
   ================================================================ */
  function vizNewton(root) {
    root.innerHTML =
      '<div class="cviz-cap">牛顿迭代法求 √2：从初始值 x₀=2 出发，每次在当前点作<strong>切线（橙色实线）</strong>，切线与 x 轴的交点就是下一个更好的近似值（绿点）.点击「下一步」逐轮观察——旧步骤自动淡化，只高亮最新一步.</div>' +
      '<div class="cviz-stage"><canvas></canvas></div>' +
      '<div class="cviz-controls" id="nw-ctrl"></div>' +
      '<div class="cviz-table-wrap"><table class="cviz-table"><thead><tr><th>k</th><th>x<sub>k</sub></th><th>f(x<sub>k</sub>)</th><th>|x<sub>k</sub>−√2|</th></tr></thead><tbody id="nw-tbody"></tbody></table></div>' +
      '<div class="cviz-readout"></div>';

    var ctrl   = root.querySelector('#nw-ctrl');
    var canvas = root.querySelector('canvas');
    var tbody  = root.querySelector('#nw-tbody');
    var readout= root.querySelector('.cviz-readout');

    function f(x)  { return x * x - 2; }
    function fp(x) { return 2 * x; }

    var MAX_STEP = 6;
    var xs = [2]; // x0 = 2
    for (var t = 1; t <= MAX_STEP; t++) {
      xs.push((xs[t-1] + 2 / xs[t-1]) / 2);
    }
    var curStep = 0; // 显示到第几步（0 = 只画曲线和初始点）

    // ---- 控件按钮 ----
    var btnNext = document.createElement('button');
    btnNext.type = 'button'; btnNext.className = 'cviz-act-btn primary';
    btnNext.textContent = '下一步 ⟶';

    var btnAuto = document.createElement('button');
    btnAuto.type = 'button'; btnAuto.className = 'cviz-act-btn';
    btnAuto.textContent = '▶ 自动播放';

    var btnReset = document.createElement('button');
    btnReset.type = 'button'; btnReset.className = 'cviz-act-btn';
    btnReset.textContent = '↺ 重置';

    ctrl.appendChild(btnNext);
    ctrl.appendChild(btnAuto);
    ctrl.appendChild(btnReset);

    btnNext.addEventListener('click', function () {
      if (curStep < MAX_STEP) { curStep++; redraw(); }
    });
    btnReset.addEventListener('click', function () { curStep = 0; redraw(); });
    btnAuto.addEventListener('click', function () {
      if (btnAuto._running) return;
      btnAuto._running = true;
      btnAuto.textContent = '⏸ 播放中...';
      function tick() {
        if (curStep < MAX_STEP) {
          curStep++; redraw();
          setTimeout(tick, 900);
        } else {
          btnAuto._running = false;
          btnAuto.textContent = '▶ 自动播放';
        }
      }
      tick();
    });

    function redraw() {
      var ff = fit(canvas), ctx = ff.ctx, W = ff.W, H = ff.H;
      var dom = { xmin: 0.6, xmax: 2.6, ymin: -2.2, ymax: 4.8 };
      var m  = map2d(dom, W, H);

      drawGrid(ctx, W, H, dom, m, { ox: 0, oy: 0 });

      // ---- 曲线 y = x² − 2 ----
      ctx.strokeStyle = C.main; ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (var i = 0; i <= 220; i++) {
        var x = dom.xmin + (dom.xmax - dom.xmin) * i / 220;
        var y = f(x);
        if (i === 0) ctx.moveTo(m.x(x), m.y(y)); else ctx.lineTo(m.x(x), m.y(y));
      }
      ctx.stroke();

      // ---- √2 处的竖虚线（目标根）----
      var sqrt2 = Math.SQRT2;
      ctx.strokeStyle = C.ok; ctx.lineWidth = 1.2; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(m.x(sqrt2), m.y(dom.ymin)); ctx.lineTo(m.x(sqrt2), m.y(dom.ymax)); ctx.stroke();
      ctx.setLineDash([]);
      txt(ctx, '√2 ≈ ' + sqrt2.toFixed(4), m.x(sqrt2) + 4, 14, C.ok);

      // ---- 绘制每一步的几何构造 ----
      // 设计原则：只高亮最新一步的完整构造，旧步骤淡化避免视觉混乱
      for (var s = 0; s < curStep; s++) {
        var xk  = xs[s];
        var xk1 = xs[s + 1];
        var yk  = f(xk);
        var slope = fp(xk);
        var isLast = (s === curStep - 1);  // 是否是最新一步

        // 当前点 (xk, f(xk)) 在曲线上
        ctx.globalAlpha = isLast ? 1.0 : 0.25;
        ctx.fillStyle = C.main;
        ctx.beginPath(); ctx.arc(m.x(xk), m.y(yk), isLast ? 5.5 : 3.5, 0, 6.2832);
        ctx.fill();

        // 切线（橙色**实线**——切线就是实打实的线，不用虚线）
        ctx.strokeStyle = C.alt;
        ctx.lineWidth = isLast ? 2.2 : 1.2;
        ctx.setLineDash([]);   // 实线！不是虚线
        // 切线方程: Y - yk = slope*(X - xk)，求 Y=0 时 X = xk - yk/slope = xk1
        var tx0 = Math.max(dom.xmin, xk - 1.0);
        var ty0 = yk + slope * (tx0 - xk);
        var tx1 = Math.min(dom.xmax, xk + 0.6);
        var ty1 = yk + slope * (tx1 - xk);
        ctx.beginPath(); ctx.moveTo(m.x(tx0), m.y(ty0)); ctx.lineTo(m.x(tx1), m.y(ty1));
        ctx.stroke();

        // 切线与 x 轴交点 = x_{k+1}（绿色实心圆）
        ctx.fillStyle = C.ok;
        ctx.beginPath(); ctx.arc(m.x(xk1), m.y(0), isLast ? 5.5 : 3.5, 0, 6.2832);
        ctx.fill();

        // 标注（只在最新一步显示清晰文字）
        if (isLast) {
          ctx.globalAlpha = 1.0;
          txt(ctx, 'x' + sub(s), m.x(xk) - 6, m.y(yk) - 10, C.main);
          txt(ctx, 'x' + sub(s+1), m.x(xk1) + 7, m.y(0) + 14, C.ok);
          // 标注"切线"
          ctx.fillStyle = C.alt;
          ctx.font = '11px -apple-system,Segoe UI,Roboto,sans-serif';
          ctx.fillText('切线', m.x(tx1) + 5, m.y(ty1) - 4);
        }

        ctx.globalAlpha = 1.0;
      }

      // 如果 curStep > 0，也标出当前最新点（蓝色高亮）
      if (curStep > 0) {
        var lastX = xs[curStep];
        var lastY = f(lastX);
        ctx.fillStyle = '#2563EB'; ctx.beginPath(); ctx.arc(m.x(lastX), m.y(lastY), 6, 0, 6.2832); ctx.fill();
        txt(ctx, '当前 x' + sub(curStep), m.x(lastX) + 7, m.y(lastY) - 8, '#2563EB');
      } else {
        // 只显示初始点 x0
        ctx.fillStyle = C.main; ctx.beginPath(); ctx.arc(m.x(xs[0]), m.y(f(xs[0])), 5.5, 0, 6.2832); ctx.fill();
        txt(ctx, 'x₀ = 2（初值）', m.x(xs[0]) + 7, m.y(f(xs[0])) - 8, C.main);
      }

      // ---- 更新表格 ----
      var html = '';
      for (var row = 0; row <= curStep; row++) {
        var xv = xs[row], fv = f(xv), ev = Math.abs(xv - sqrt2);
        var cls = (row === curStep) ? ' class="cur"' : '';
        html += '<tr' + cls + '><td>' + row + '</td><td>' + xv.toFixed(10) + '</td><td>' + fv.toExponential(4) + '</td><td>' + ev.toExponential(4) + '</td></tr>';
      }
      tbody.innerHTML = html;

      // ---- 读出区 ----
      if (curStep === 0) {
        readout.innerHTML = '当前只显示了曲线 y = x² − 2 和初始值 x₀ = 2.点击「下一步」开始第一次迭代：在 (x₀, f(x₀)) 处作切线，切线与 x 轴交于 x₁.';
        renderMath(readout);
      } else {
        var curX = xs[curStep], curErr = Math.abs(curX - sqrt2);
        readout.innerHTML =
          '第 <b>' + curStep + '</b> 轮完成：x<sub>' + curStep + '</sub> = <b>' + curX.toFixed(10) + '</b>，' +
          '|x<sub>' + curStep + '</sub> − √2| = <b>' + curErr.toExponential(4) + '</b>.' +
          (curStep < MAX_STEP ? '还可以继续点击「下一步」或「自动播放」.' : '已达到最大轮次，误差已经极小.') +
          '<br><span style="color:#6b8179;font-size:12px">牛顿法精髓：每一步利用切线（即导数信息）来跳到更接近根的位置，二次收敛——正确位数大约每步翻倍.</span>';
      }
      renderMath(readout);
    }

    watch(redraw);
    redraw();
  }


  /* ================================================================
     KaTeX 公式渲染（cviz 内公式需要手动触发）
     ================================================================ */
  function renderMath(el) {
    if (el && typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
          ],
          throwOnError: false
        });
      } catch (_) { /* kaTeX not loaded — graceful degradation */ }
    }
  }

  /* ================================================================
     注册 & 初始化
     ================================================================ */
  var RENDERERS = {
    'limit-sequence':   vizLimitSequence,
    'limit-eps-delta':  vizEpsDelta,
    'derivative-tangent': vizDerivative,
    'taylor-approx':    vizTaylor,
    'integral-riemann': vizIntegral,
    'newton':           vizNewton
  };

  function init() {
    var jobs = [];
    Array.prototype.forEach.call(document.querySelectorAll('.cviz[data-viz]'), function (n) {
      jobs.push({ el: n, kind: 'cviz' });
    });
    Array.prototype.forEach.call(document.querySelectorAll('.labx'), function (n) {
      jobs.push({ el: n, kind: 'labx' });
    });

    function renderOne(job) {
      var el = job.el;
      if (el.getAttribute('data-viz-done')) return;
      el.setAttribute('data-viz-done', '1');
      if (job.kind === 'cviz') {
        var t = el.getAttribute('data-viz');
        var fn = RENDERERS[t];
        if (fn) {
          try { fn(el); renderMath(el); }
          catch (e) {
            el.innerHTML = '<div class="cviz-err">可视化加载失败：' + (e && e.message ? e.message : e) + '</div>';
          }
        } else {
          el.innerHTML = '<div class="cviz-err">未知可视化类型：' + t + '</div>';
        }
      } else {
        try { renderMath(el); } catch (_) {}
      }
    }

    // 【对齐线性代数：简单可靠的事件驱动】
    // 不使用 IntersectionObserver / rAF 队列 / IO 懒加载等复杂机制（这些是卡顿根源）.
    // 改用 requestIdleCallback 在浏览器空闲时逐个渲染可视化：
    //   - 页面加载后不阻塞主线程（用户可立即滚动/交互）
    //   - 空闲时段逐个初始化 viz（每个 viz 在单独的 idle 回调中执行）
    //   - 折叠内的 viz 也能正常渲染（idle 回调执行时若折叠已打开则正常绘制）
    //   - 比 IO 方案更简单、更可靠、不会遗漏
    var idle = window.requestIdleCallback
      ? function (cb) { return requestIdleCallback(cb, { timeout: 300 }); }
      : function (cb) { return setTimeout(cb, 50); };

    var vizIdx = 0;
    function initNextViz() {
      if (vizIdx >= jobs.length) return;  // 全部完成
      var job = jobs[vizIdx++];
      idle(function () {
        try { renderOne(job); } catch (e) {}
        initNextViz();  // 下一个
      });
    }

    // 启动空闲渲染队列
    initNextViz();

    // 折叠展开补渲：如果展开时内部 viz 尚未渲染（队列还没转到它），立即渲染
    Array.prototype.forEach.call(document.querySelectorAll('details'), function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) return;
        Array.prototype.forEach.call(d.querySelectorAll('.cviz[data-viz]'), function (el) {
          if (!el.getAttribute('data-viz-done')) {
            var job = jobs.find(function (j) { return j.el === el; });
            if (job) { try { renderOne(job); } catch (e) {} }
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  var _rt;
  window.addEventListener('resize', function () {
    clearTimeout(_rt);
    _rt = setTimeout(function () {
      _redrawers.forEach(function (fn) { try { fn(); } catch (e) {} });
    }, 150);
  });

})();
