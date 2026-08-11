/* 仿射变换 · 互动演示（第二章 §2.2 应用探微）
   旋转 / 缩放 / 错切 / 平移 滑条 → 实时显示 3×3 齐次变换矩阵，
   并直观展示"矩阵的列 = 基向量 e1,e2 与原点被送到哪里".
*/
(function () {
  'use strict';
  var box = document.getElementById('affDemo');
  if (!box) return;
  var cv = document.getElementById('affCanvas');
  if (!cv) return;
  var ctx = cv.getContext('2d');

  var W = 760, H = 340;
  var dpr = window.devicePixelRatio || 1;
  cv.width = Math.floor(W * dpr);
  cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // 世界坐标范围（左右两栏共用）
  var xmin = -5, xmax = 5, ymin = -3, ymax = 7;
  // 左栏（原图）视口、右栏（变换后）视口
  var L = { x0: 42, y0: 42, w: 300, h: 240 };
  var R = { x0: 420, y0: 42, w: 300, h: 240 };

  function toPx(vp, x, y) {
    var u = (x - xmin) / (xmax - xmin);
    var v = (y - ymin) / (ymax - ymin);
    return [vp.x0 + u * vp.w, H - vp.y0 - v * vp.h];
  }

  // 原始形状：一个明显不对称的"箭头"，便于看出旋转/错切
  var arrow = [
    [-1.6, 0], [-0.2, 0], [-0.2, 0.85], [1.0, 0], [-0.2, -0.85], [-0.2, 0]
  ];

  // ---- 3×3 齐次矩阵 ----
  function rotM(t) {
    var c = Math.cos(t * Math.PI / 180), s = Math.sin(t * Math.PI / 180);
    return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
  }
  function scaleM(sx, sy) { return [[sx, 0, 0], [0, sy, 0], [0, 0, 1]]; }
  function shearM(shx, shy) { return [[1, shx, 0], [shy, 1, 0], [0, 0, 1]]; }
  function transM(tx, ty) { return [[1, 0, tx], [0, 1, ty], [0, 0, 1]]; }
  function mul(A, B) {
    var C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) {
      var s = 0; for (var k = 0; k < 3; k++) s += A[i][k] * B[k][j];
      C[i][j] = s;
    }
    return C;
  }
  // 复合顺序：先旋转 → 再缩放 → 再错切 → 再平移
  function currentM(s) {
    return mul(mul(mul(transM(s.tx, s.ty), shearM(s.shx, s.shy)), scaleM(s.sx, s.sy)), rotM(s.rot));
  }
  function applyM(M, x, y) {
    return [M[0][0] * x + M[0][1] * y + M[0][2], M[1][0] * x + M[1][1] * y + M[1][2]];
  }

  function dark() { return document.documentElement.classList.contains('dark'); }

  function fmt(n) {
    var v = Math.round(n * 100) / 100;
    var s = (v >= 0 ? '+' : '') + v.toFixed(2);
    return s;
  }

  // ---- 绘制网格（左栏静态 / 右栏随变换扭曲）----
  function drawGrid(vp, M, warp) {
    var gx = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    var gy = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
    ctx.lineWidth = 1 / dpr;
    ctx.strokeStyle = dark() ? 'rgba(148,163,184,0.20)' : 'rgba(148,163,184,0.40)';
    gx.forEach(function (x) {
      ctx.beginPath();
      for (var i = 0; i <= 24; i++) {
        var y = ymin + (ymax - ymin) * i / 24;
        var p = warp ? applyM(M, x, y) : [x, y];
        var px = toPx(vp, p[0], p[1]);
        if (i === 0) ctx.moveTo(px[0], px[1]); else ctx.lineTo(px[0], px[1]);
      }
      ctx.stroke();
    });
    gy.forEach(function (y) {
      ctx.beginPath();
      for (var i = 0; i <= 24; i++) {
        var x = xmin + (xmax - xmin) * i / 24;
        var p = warp ? applyM(M, x, y) : [x, y];
        var px = toPx(vp, p[0], p[1]);
        if (i === 0) ctx.moveTo(px[0], px[1]); else ctx.lineTo(px[0], px[1]);
      }
      ctx.stroke();
    });
  }

  function arrowPath(vp, pts, M, fill) {
    ctx.beginPath();
    for (var i = 0; i < pts.length; i++) {
      var p = M ? applyM(M, pts[i][0], pts[i][1]) : pts[i];
      var px = toPx(vp, p[0], p[1]);
      if (i === 0) ctx.moveTo(px[0], px[1]); else ctx.lineTo(px[0], px[1]);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function drawBasis(vp, M, label) {
    // 坐标轴
    ctx.lineWidth = 1.4 / dpr;
    var o = M ? applyM(M, 0, 0) : [0, 0];
    var e1 = M ? applyM(M, 1, 0) : [1, 0];
    var e2 = M ? applyM(M, 0, 1) : [0, 1];
    function seg(a, b, col) {
      var pa = toPx(vp, a[0], a[1]), pb = toPx(vp, b[0], b[1]);
      ctx.strokeStyle = col; ctx.beginPath();
      ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
    }
    seg(o, e1, '#ef4444'); // e1 红
    seg(o, e2, '#3b82f6'); // e2 蓝
    // 箭头小标记
    ctx.fillStyle = '#ef4444';
    var p = toPx(vp, e1[0], e1[1]);
    ctx.beginPath(); ctx.arc(p[0], p[1], 3.2, 0, 7); ctx.fill();
    ctx.fillStyle = '#3b82f6';
    p = toPx(vp, e2[0], e2[1]);
    ctx.beginPath(); ctx.arc(p[0], p[1], 3.2, 0, 7); ctx.fill();
    if (label) {
      ctx.font = '12px -apple-system,"Microsoft YaHei",sans-serif';
      ctx.fillStyle = '#ef4444';
      var pe = toPx(vp, e1[0], e1[1]); ctx.fillText('e₁', pe[0] + 4, pe[1] - 4);
      ctx.fillStyle = '#3b82f6';
      var pf = toPx(vp, e2[0], e2[1]); ctx.fillText('e₂', pf[0] + 4, pf[1] - 4);
    }
  }

  function panelLabel(vp, txt) {
    ctx.font = '13px -apple-system,"Microsoft YaHei",sans-serif';
    ctx.fillStyle = dark() ? '#9fb1c0' : '#5b6b7c';
    ctx.textAlign = 'center';
    var cx = vp.x0 + vp.w / 2;
    ctx.fillText(txt, cx, H - 12);
    ctx.textAlign = 'left';
  }

  function render() {
    var s = {
      rot: +document.getElementById('affRot').value,
      sx: +document.getElementById('affSx').value,
      sy: +document.getElementById('affSy').value,
      shx: +document.getElementById('affShx').value,
      shy: +document.getElementById('affShy').value,
      tx: +document.getElementById('affTx').value,
      ty: +document.getElementById('affTy').value
    };
    // 同步数值显示
    document.getElementById('affRotV').textContent = s.rot + '°';
    document.getElementById('affSxV').textContent = (+s.sx).toFixed(2);
    document.getElementById('affSyV').textContent = (+s.sy).toFixed(2);
    document.getElementById('affShxV').textContent = (+s.shx).toFixed(2);
    document.getElementById('affShyV').textContent = (+s.shy).toFixed(2);
    document.getElementById('affTxV').textContent = (+s.tx).toFixed(2);
    document.getElementById('affTyV').textContent = (+s.ty).toFixed(2);

    var M = currentM(s);
    ctx.clearRect(0, 0, W, H);

    var showGrid = document.getElementById('affShowGrid').checked;
    var showBasis = document.getElementById('affShowBasis').checked;
    var showShape = document.getElementById('affShowShape').checked;

    // 中缝箭头
    ctx.fillStyle = dark() ? '#7e8a95' : '#94a3b8';
    ctx.font = '22px -apple-system,sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('→', (L.x0 + L.w + R.x0) / 2, H / 2);
    ctx.textAlign = 'left';

    // ---- 左栏：原图 ----
    if (showGrid) drawGrid(L, null, false);
    if (showShape) arrowPath(L, arrow, null, dark() ? '#5b9bd5' : '#2563eb');
    if (showBasis) drawBasis(L, null, true);
    panelLabel(L, '原图（单位网格）');

    // ---- 右栏：变换后 ----
    if (showGrid) drawGrid(R, M, true);
    if (showShape) arrowPath(R, arrow, M, dark() ? '#5b9bd5' : '#2563eb');
    if (showBasis) drawBasis(R, M, true);
    panelLabel(R, '变换后（同一矩阵作用）');

    // ---- 矩阵与基向量落点 ----
    var mt = document.getElementById('affMatrix');
    function row(r) {
      return '<span class="am-r">' + [0, 1, 2].map(function (c) {
        return '<span class="am-c">' + fmt(M[r][c]) + '</span>';
      }).join('') + '</span>';
    }
    mt.innerHTML = '<span class="am-b">⎡</span>' + row(0) + '<span class="am-b">⎤</span><br>' +
      '<span class="am-b">⎢</span>' + row(1) + '<span class="am-b">⎥</span><br>' +
      '<span class="am-b">⎣</span>' + row(2) + '<span class="am-b">⎦</span>';
    var e1 = [M[0][0], M[1][0]], e2 = [M[0][1], M[1][1]], o = [M[0][2], M[1][2]];
    document.getElementById('affBasis').innerHTML =
      'T(e₁) = (' + fmt(e1[0]) + ', ' + fmt(e1[1]) + ')　' +
      'T(e₂) = (' + fmt(e2[0]) + ', ' + fmt(e2[1]) + ')　' +
      'T(原点) = (' + fmt(o[0]) + ', ' + fmt(o[1]) + ')';
  }

  function bind() {
    ['affRot', 'affSx', 'affSy', 'affShx', 'affShy', 'affTx', 'affTy',
      'affShowGrid', 'affShowBasis', 'affShowShape'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('input', render);
      });
    var rst = document.getElementById('affReset');
    if (rst) rst.addEventListener('click', function () {
      document.getElementById('affRot').value = 0;
      document.getElementById('affSx').value = 1;
      document.getElementById('affSy').value = 1;
      document.getElementById('affShx').value = 0;
      document.getElementById('affShy').value = 0;
      document.getElementById('affTx').value = 0;
      document.getElementById('affTy').value = 0;
      render();
    });
    var rnd = document.getElementById('affRand');
    if (rnd) rnd.addEventListener('click', function () {
      document.getElementById('affRot').value = Math.round((Math.random() * 2 - 1) * 90);
      document.getElementById('affSx').value = (0.6 + Math.random() * 1.2).toFixed(2);
      document.getElementById('affSy').value = (0.6 + Math.random() * 1.2).toFixed(2);
      document.getElementById('affShx').value = (Math.random() * 1.2 - 0.6).toFixed(2);
      document.getElementById('affShy').value = (Math.random() * 1.2 - 0.6).toFixed(2);
      document.getElementById('affTx').value = (Math.random() * 4 - 2).toFixed(2);
      document.getElementById('affTy').value = (Math.random() * 4 - 2).toFixed(2);
      render();
    });
  }

  bind();
  render();
  // 暗色切换后重绘
  var mo = window.MutationObserver && new MutationObserver(function () { render(); });
  if (mo) mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('resize', render);
})();
