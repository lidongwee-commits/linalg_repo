/* ============================================================
 * interact.js —— 高等数学数字教材 · 通用交互实验引擎
 * ------------------------------------------------------------
 * 声明式用法（正文里只写一个 div，引擎自动生成画布+滑杆+读数）：
 *
 *   <div class="ia" data-mode="curve" data-title="正弦波的频率"
 *        data-fn="sin(a*x)" data-params="a:0.5:5:1:0.1"
 *        data-xr="-6.5,6.5" data-yr="-1.4,1.4"
 *        data-tip="拖动 a 观察周期 T=2π/a 如何变化."></div>
 *
 * 表达式语法：直接写 sin/cos/exp/log/sqrt/PI/abs/pow（已 with(Math)），
 * 自变量为 x（或 n、t、y，视模式而定），参数名取自 data-params.
 *
 * data-params 格式： "名:最小:最大:默认:步长" 多个用 ; 分隔
 * ============================================================ */
(function () {
  "use strict";

  /* ---------------- 表达式编译 ---------------- */
  function compile(expr, args) {
    if (!expr) return function () { return NaN; };
    try {
      /* eslint-disable no-new-func */
      var f = new Function(args.join(","),
        "with(Math){try{return (" + expr + ")}catch(e){return NaN}}");
      return f;
    } catch (e) {
      return function () { return NaN; };
    }
  }

  function num(v, d) { var x = parseFloat(v); return isFinite(x) ? x : d; }

  function parseRange(s, d0, d1) {
    if (!s) return [d0, d1];
    var p = String(s).split(",");
    return [num(p[0], d0), num(p[1], d1)];
  }

  function parseParams(s) {
    if (!s) return [];
    return String(s).split(";").map(function (t) {
      var p = t.split(":");
      if (p.length < 2) return null;
      var mn = num(p[1], 0), mx = num(p[2], 1);
      var dv = p.length > 3 ? num(p[3], (mn + mx) / 2) : (mn + mx) / 2;
      var st = p.length > 4 ? num(p[4], (mx - mn) / 100) : (mx - mn) / 100;
      return { name: p[0].trim(), min: mn, max: mx, val: dv, step: st };
    }).filter(Boolean);
  }

  function fmt(v, d) {
    if (!isFinite(v)) return "—";
    d = (d == null) ? 4 : d;
    var s = v.toFixed(d);
    if (Math.abs(v) >= 1e5 || (Math.abs(v) < 1e-4 && v !== 0)) s = v.toExponential(3);
    return s.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  }

  /* ---------------- 绘图核心 ---------------- */
  var C = {
    axis: "#94a3b8", grid: "#eef2f5", grid2: "#e2e8f0",
    curve: "#0e7c7c", curve2: "#c2410c", curve3: "#6d28d9",
    fill: "rgba(14,124,124,.14)", fill2: "rgba(194,65,12,.14)",
    pt: "#b91c1c", ink: "#334155", soft: "#64748b", ok: "#15803d",
    band: "rgba(109,40,217,.12)", band2: "rgba(21,128,61,.13)"
  };

  function Plot(cv, xr, yr) {
    var dpr = window.devicePixelRatio || 1;
    var W = cv.clientWidth || 560, H = cv.clientHeight || 300;
    cv.width = W * dpr; cv.height = H * dpr;
    var g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    var pad = { l: 40, r: 14, t: 12, b: 26 };
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    var P = {
      g: g, W: W, H: H, pad: pad, xr: xr, yr: yr,
      X: function (x) { return pad.l + (x - xr[0]) / (xr[1] - xr[0]) * iw; },
      Y: function (y) { return pad.t + (yr[1] - y) / (yr[1] - yr[0]) * ih; },
      invX: function (px) { return xr[0] + (px - pad.l) / iw * (xr[1] - xr[0]); },
      invY: function (py) { return yr[1] - (py - pad.t) / ih * (yr[1] - yr[0]); }
    };

    P.grid = function (stepx, stepy) {
      var sx = stepx || nice((xr[1] - xr[0]) / 8), sy = stepy || nice((yr[1] - yr[0]) / 6);
      g.lineWidth = 1;
      g.strokeStyle = C.grid;
      var i, x, y;
      for (i = Math.ceil(xr[0] / sx) * sx; i <= xr[1] + 1e-9; i += sx) {
        x = P.X(i); g.beginPath(); g.moveTo(x, pad.t); g.lineTo(x, pad.t + ih); g.stroke();
      }
      for (i = Math.ceil(yr[0] / sy) * sy; i <= yr[1] + 1e-9; i += sy) {
        y = P.Y(i); g.beginPath(); g.moveTo(pad.l, y); g.lineTo(pad.l + iw, y); g.stroke();
      }
      /* 坐标轴 */
      g.strokeStyle = C.axis; g.lineWidth = 1.3;
      var y0 = P.Y(Math.min(Math.max(0, yr[0]), yr[1]));
      var x0 = P.X(Math.min(Math.max(0, xr[0]), xr[1]));
      g.beginPath(); g.moveTo(pad.l, y0); g.lineTo(pad.l + iw, y0); g.stroke();
      g.beginPath(); g.moveTo(x0, pad.t); g.lineTo(x0, pad.t + ih); g.stroke();
      /* 刻度 */
      g.fillStyle = C.soft; g.font = "11px -apple-system,Segoe UI,sans-serif";
      g.textAlign = "center"; g.textBaseline = "top";
      for (i = Math.ceil(xr[0] / sx) * sx; i <= xr[1] + 1e-9; i += sx) {
        if (Math.abs(i) < 1e-9) continue;
        g.fillText(fmt(i, 2), P.X(i), Math.min(y0 + 4, pad.t + ih + 4));
      }
      g.textAlign = "right"; g.textBaseline = "middle";
      for (i = Math.ceil(yr[0] / sy) * sy; i <= yr[1] + 1e-9; i += sy) {
        if (Math.abs(i) < 1e-9) continue;
        g.fillText(fmt(i, 2), pad.l - 5, P.Y(i));
      }
      return P;
    };

    P.curve = function (f, color, width, dash) {
      g.save(); g.beginPath();
      g.strokeStyle = color || C.curve; g.lineWidth = width || 2;
      if (dash) g.setLineDash(dash);
      var N = 640, started = false, prevY = null;
      for (var i = 0; i <= N; i++) {
        var x = xr[0] + (xr[1] - xr[0]) * i / N, y = f(x);
        if (!isFinite(y)) { started = false; prevY = null; continue; }
        /* 跳跃/渐近线断点处理 */
        if (prevY !== null && Math.abs(y - prevY) > (yr[1] - yr[0]) * 1.2) started = false;
        var py = P.Y(Math.max(Math.min(y, yr[1] + 99), yr[0] - 99));
        if (!started) { g.moveTo(P.X(x), py); started = true; }
        else g.lineTo(P.X(x), py);
        prevY = y;
      }
      g.stroke(); g.restore(); return P;
    };

    P.seg = function (x1, y1, x2, y2, color, width, dash) {
      g.save(); g.beginPath();
      g.strokeStyle = color || C.ink; g.lineWidth = width || 1.4;
      if (dash) g.setLineDash(dash);
      g.moveTo(P.X(x1), P.Y(y1)); g.lineTo(P.X(x2), P.Y(y2)); g.stroke(); g.restore(); return P;
    };

    P.dot = function (x, y, color, r) {
      g.beginPath(); g.fillStyle = color || C.pt;
      g.arc(P.X(x), P.Y(y), r || 4, 0, 6.2832); g.fill();
      g.strokeStyle = "#fff"; g.lineWidth = 1.2; g.stroke(); return P;
    };

    P.rect = function (x1, y1, x2, y2, fill, stroke) {
      var a = P.X(x1), b = P.Y(y1), c = P.X(x2), d = P.Y(y2);
      g.fillStyle = fill || C.fill; g.fillRect(a, Math.min(b, d), c - a, Math.abs(d - b));
      if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1; g.strokeRect(a, Math.min(b, d), c - a, Math.abs(d - b)); }
      return P;
    };

    P.band = function (y1, y2, color) {
      var a = P.Y(y1), b = P.Y(y2);
      g.fillStyle = color || C.band;
      g.fillRect(pad.l, Math.min(a, b), iw, Math.abs(b - a)); return P;
    };
    P.vband = function (x1, x2, color) {
      var a = P.X(x1), b = P.X(x2);
      g.fillStyle = color || C.band2;
      g.fillRect(Math.min(a, b), pad.t, Math.abs(b - a), ih); return P;
    };

    P.area = function (f, a, b, color) {
      g.save(); g.beginPath(); g.fillStyle = color || C.fill;
      var N = 300, i, x;
      g.moveTo(P.X(a), P.Y(0));
      for (i = 0; i <= N; i++) { x = a + (b - a) * i / N; var y = f(x); if (!isFinite(y)) y = 0; g.lineTo(P.X(x), P.Y(y)); }
      g.lineTo(P.X(b), P.Y(0)); g.closePath(); g.fill(); g.restore(); return P;
    };

    P.arrow = function (x1, y1, x2, y2, color, w) {
      var a = P.X(x1), b = P.Y(y1), c = P.X(x2), d = P.Y(y2);
      var ang = Math.atan2(d - b, c - a), L = 7;
      g.save(); g.strokeStyle = color || C.curve2; g.fillStyle = color || C.curve2; g.lineWidth = w || 1.5;
      g.beginPath(); g.moveTo(a, b); g.lineTo(c, d); g.stroke();
      g.beginPath(); g.moveTo(c, d);
      g.lineTo(c - L * Math.cos(ang - 0.4), d - L * Math.sin(ang - 0.4));
      g.lineTo(c - L * Math.cos(ang + 0.4), d - L * Math.sin(ang + 0.4));
      g.closePath(); g.fill(); g.restore(); return P;
    };

    P.label = function (x, y, txt, color, align) {
      g.fillStyle = color || C.ink; g.font = "12px -apple-system,Segoe UI,sans-serif";
      g.textAlign = align || "left"; g.textBaseline = "bottom";
      g.fillText(txt, P.X(x), P.Y(y)); return P;
    };
    P.labelPx = function (px, py, txt, color, align) {
      g.fillStyle = color || C.ink; g.font = "12px -apple-system,Segoe UI,sans-serif";
      g.textAlign = align || "left"; g.textBaseline = "top";
      g.fillText(txt, px, py); return P;
    };
    return P;
  }

  function nice(v) {
    if (!(v > 0)) return 1;
    var e = Math.pow(10, Math.floor(Math.log(v) / Math.LN10)), f = v / e;
    return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * e;
  }

  /* ---------------- 数值工具 ---------------- */
  function simpson(f, a, b, n) {
    n = n || 400; if (n % 2) n++;
    var h = (b - a) / n, s = f(a) + f(b), i, x;
    for (i = 1; i < n; i++) { x = a + i * h; var y = f(x); if (!isFinite(y)) y = 0; s += (i % 2 ? 4 : 2) * y; }
    return s * h / 3;
  }
  function deriv(f, x, h) { h = h || 1e-5; return (f(x + h) - f(x - h)) / (2 * h); }

  var FACT = [1]; for (var _i = 1; _i < 25; _i++) FACT[_i] = FACT[_i - 1] * _i;

  /* 内置泰勒级数（返回 n 阶部分和） */
  var SERIES = {
    sin: function (x, n) { var s = 0; for (var k = 0; 2 * k + 1 <= n; k++) s += Math.pow(-1, k) * Math.pow(x, 2 * k + 1) / FACT[2 * k + 1]; return s; },
    cos: function (x, n) { var s = 0; for (var k = 0; 2 * k <= n; k++) s += Math.pow(-1, k) * Math.pow(x, 2 * k) / FACT[2 * k]; return s; },
    exp: function (x, n) { var s = 0; for (var k = 0; k <= n; k++) s += Math.pow(x, k) / FACT[k]; return s; },
    ln1p: function (x, n) { var s = 0; for (var k = 1; k <= n; k++) s += Math.pow(-1, k - 1) * Math.pow(x, k) / k; return s; },
    geo: function (x, n) { var s = 0; for (var k = 0; k <= n; k++) s += Math.pow(x, k); return s; },
    atan: function (x, n) { var s = 0; for (var k = 0; 2 * k + 1 <= n; k++) s += Math.pow(-1, k) * Math.pow(x, 2 * k + 1) / (2 * k + 1); return s; },
    sqrt1p: function (x, n) { var s = 1, c = 1; for (var k = 1; k <= n; k++) { c *= (0.5 - (k - 1)) / k; s += c * Math.pow(x, k); } return s; }
  };

  /* ---------------- 各模式渲染器 ---------------- */
  var MODES = {};

  /* 1. 函数曲线（可多条 + 参数） */
  MODES.curve = function (P, D, pv, out) {
    P.grid();
    var args = ["x"].concat(D.pnames);
    var vs = D.pnames.map(function (n) { return pv[n]; });
    var f1 = compile(D.fn, args);
    P.curve(function (x) { return f1.apply(null, [x].concat(vs)); }, C.curve, 2.2);
    if (D.fn2) {
      var f2 = compile(D.fn2, args);
      P.curve(function (x) { return f2.apply(null, [x].concat(vs)); }, C.curve2, 1.8, [6, 4]);
    }
    if (D.fn3) {
      var f3 = compile(D.fn3, args);
      P.curve(function (x) { return f3.apply(null, [x].concat(vs)); }, C.curve3, 1.6, [3, 3]);
    }
    if (D.x0 != null) {
      var y0 = f1.apply(null, [D.x0].concat(vs));
      P.dot(D.x0, y0);
      out.push(["f(" + fmt(D.x0, 2) + ")", fmt(y0)]);
    }
    D.pnames.forEach(function (n) { out.push([n, fmt(pv[n], 3)]); });
  };

  /* 2. 数列极限 ε-N */
  MODES.seq = function (P, D, pv, out) {
    var N = Math.round(pv.N != null ? pv.N : 20), eps = pv.eps != null ? pv.eps : 0.2;
    var L = num(D.limit, 0);
    var an = compile(D.term || "1/n", ["n"].concat(D.pnames));
    var vs = D.pnames.map(function (n) { return pv[n]; });
    var f = function (n) { return an.apply(null, [n].concat(vs)); };
    P.xr[1] = Math.max(12, num(D.nmax, 40));
    P.band(L - eps, L + eps, C.band);
    P.grid();
    P.seg(P.xr[0], L, P.xr[1], L, C.curve3, 1.6, [5, 4]);
    var firstOk = null, k;
    for (k = 1; k <= P.xr[1]; k++) {
      var y = f(k);
      if (!isFinite(y)) continue;
      var inside = Math.abs(y - L) < eps;
      if (inside && firstOk === null) {
        var allIn = true;
        for (var j = k; j <= Math.min(k + 60, P.xr[1] + 60); j++) { if (Math.abs(f(j) - L) >= eps) { allIn = false; break; } }
        if (allIn) firstOk = k;
      }
      P.dot(k, y, inside ? C.ok : C.pt, 3.2);
    }
    P.label(P.xr[1] * 0.62, L + eps, "L+ε", C.curve3);
    out.push(["ε", fmt(eps, 3)]);
    out.push(["满足条件的最小 N", firstOk === null ? "＞" + P.xr[1] : String(firstOk - 1)]);
    out.push(["a_" + N, fmt(f(N))]);
    out.push(["|a_N − L|", fmt(Math.abs(f(N) - L))]);
  };

  /* 3. 函数极限 ε-δ */
  MODES.epsdelta = function (P, D, pv, out) {
    var eps = pv.eps != null ? pv.eps : 0.4, dlt = pv.delta != null ? pv.delta : 0.5;
    var x0 = num(D.x0, 0), L = num(D.limit, 0);
    var f = compile(D.fn, ["x"].concat(D.pnames));
    var vs = D.pnames.map(function (n) { return pv[n]; });
    var F = function (x) { return f.apply(null, [x].concat(vs)); };
    P.band(L - eps, L + eps, C.band);
    P.vband(x0 - dlt, x0 + dlt, C.band2);
    P.grid();
    P.curve(F, C.curve, 2.2);
    P.seg(x0, P.yr[0], x0, P.yr[1], C.soft, 1, [4, 4]);
    P.dot(x0, L, C.curve3, 4.5);
    /* 检验 δ 是否足够小 */
    var ok = true, i, x, y;
    for (i = 1; i <= 200; i++) {
      x = x0 - dlt + 2 * dlt * i / 201;
      if (Math.abs(x - x0) < 1e-9) continue;
      y = F(x);
      if (isFinite(y) && Math.abs(y - L) >= eps) { ok = false; break; }
    }
    out.push(["ε", fmt(eps, 3)]);
    out.push(["δ", fmt(dlt, 3)]);
    out.push(["检验", ok ? "✔ 该 δ 有效" : "✘ δ 偏大，请调小"]);
  };

  /* 4. 割线 → 切线（导数定义） */
  MODES.secant = function (P, D, pv, out) {
    var h = pv.h != null ? pv.h : 1;
    var x0 = num(D.x0, 1);
    var f = compile(D.fn, ["x"].concat(D.pnames));
    var vs = D.pnames.map(function (n) { return pv[n]; });
    var F = function (x) { return f.apply(null, [x].concat(vs)); };
    P.grid(); P.curve(F, C.curve, 2.2);
    var y0 = F(x0), y1 = F(x0 + h);
    var k = (y1 - y0) / h, kt = deriv(F, x0);
    /* 切线 */
    P.seg(P.xr[0], y0 + kt * (P.xr[0] - x0), P.xr[1], y0 + kt * (P.xr[1] - x0), C.curve3, 1.6, [5, 4]);
    /* 割线 */
    P.seg(P.xr[0], y0 + k * (P.xr[0] - x0), P.xr[1], y0 + k * (P.xr[1] - x0), C.curve2, 2);
    /* Δx, Δy 直角三角形 */
    P.seg(x0, y0, x0 + h, y0, C.soft, 1.2, [3, 3]);
    P.seg(x0 + h, y0, x0 + h, y1, C.soft, 1.2, [3, 3]);
    P.dot(x0, y0); P.dot(x0 + h, y1, C.curve2);
    out.push(["h = Δx", fmt(h, 4)]);
    out.push(["Δy", fmt(y1 - y0)]);
    out.push(["割线斜率 Δy/Δx", fmt(k)]);
    out.push(["切线斜率 f′(x₀)", fmt(kt)]);
    out.push(["误差", fmt(Math.abs(k - kt))]);
  };

  /* 5. 黎曼和 */
  MODES.riemann = function (P, D, pv, out) {
    var n = Math.max(1, Math.round(pv.n != null ? pv.n : 8));
    var a = num(D.a, 0), b = num(D.b, 1), type = D.rtype || "mid";
    var f = compile(D.fn, ["x"].concat(D.pnames));
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var F = function (x) { return f.apply(null, [x].concat(vs)); };
    P.grid();
    var dx = (b - a) / n, S = 0, i, xl, xr2, xi, yi;
    for (i = 0; i < n; i++) {
      xl = a + i * dx; xr2 = xl + dx;
      if (type === "trap") {
        var yl = F(xl), yr3 = F(xr2);
        S += (yl + yr3) / 2 * dx;
        P.g.beginPath();
        P.g.fillStyle = C.fill;
        P.g.moveTo(P.X(xl), P.Y(0)); P.g.lineTo(P.X(xl), P.Y(yl));
        P.g.lineTo(P.X(xr2), P.Y(yr3)); P.g.lineTo(P.X(xr2), P.Y(0));
        P.g.closePath(); P.g.fill();
        P.g.strokeStyle = "#7bb8b1"; P.g.lineWidth = 1; P.g.stroke();
      } else {
        xi = type === "left" ? xl : type === "right" ? xr2 : (xl + xr2) / 2;
        yi = F(xi); if (!isFinite(yi)) yi = 0;
        S += yi * dx;
        P.rect(xl, 0, xr2, yi, C.fill, "#7bb8b1");
      }
    }
    P.curve(F, C.curve, 2.2);
    var I = simpson(F, a, b, 800);
    out.push(["分割数 n", String(n)]);
    out.push(["Δx", fmt(dx, 5)]);
    out.push(["黎曼和 Sₙ", fmt(S, 6)]);
    out.push(["定积分精确值", fmt(I, 6)]);
    out.push(["误差", fmt(Math.abs(S - I), 6)]);
  };

  /* 6. 泰勒逼近 */
  MODES.taylor = function (P, D, pv, out) {
    var n = Math.round(pv.n != null ? pv.n : 3);
    var f = compile(D.fn, ["x"]);
    var key = D.series || "sin";
    var T = SERIES[key] || SERIES.sin;
    P.grid();
    P.curve(f, C.curve, 2.4);
    P.curve(function (x) { return T(x, n); }, C.curve2, 2, [6, 4]);
    var xt = num(D.x0, 1);
    var e = Math.abs(f(xt) - T(xt, n));
    P.dot(xt, f(xt)); P.dot(xt, T(xt, n), C.curve2);
    out.push(["阶数 n", String(n)]);
    out.push(["f(" + fmt(xt, 2) + ")", fmt(f(xt), 6)]);
    out.push(["Tₙ(" + fmt(xt, 2) + ")", fmt(T(xt, n), 6)]);
    out.push(["余项 |Rₙ|", fmt(e, 6)]);
  };

  /* 7. 级数部分和 */
  MODES.series = function (P, D, pv, out) {
    var N = Math.round(pv.N != null ? pv.N : 20);
    var an = compile(D.term || "1/(n*n)", ["n"].concat(D.pnames));
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var f = function (k) { return an.apply(null, [k].concat(vs)); };
    var S = 0, pts = [], k, mx = -1e9, mn = 1e9;
    for (k = 1; k <= N; k++) { var v = f(k); if (isFinite(v)) S += v; pts.push(S); mx = Math.max(mx, S); mn = Math.min(mn, S); }
    var pad2 = (mx - mn) * 0.25 + 0.2;
    P.xr[0] = 0; P.xr[1] = N + 1;
    if (D.yr == null) { P.yr[0] = mn - pad2; P.yr[1] = mx + pad2; }
    P.grid();
    if (D.limit != null && D.limit !== "") {
      var L = num(D.limit, 0);
      P.seg(0, L, N + 1, L, C.curve3, 1.6, [5, 4]);
      P.label(N * 0.55, L, "S = " + D.limit, C.curve3);
    }
    for (k = 1; k <= N; k++) {
      P.seg(k, k === 1 ? 0 : pts[k - 2], k, pts[k - 1], "#cbd5e1", 1);
      P.dot(k, pts[k - 1], C.curve, 3);
    }
    out.push(["项数 N", String(N)]);
    out.push(["通项 a_N", fmt(f(N), 6)]);
    out.push(["部分和 S_N", fmt(pts[N - 1], 6)]);
    if (D.limit != null && D.limit !== "") out.push(["与极限之差", fmt(Math.abs(pts[N - 1] - num(D.limit, 0)), 6)]);
  };

  /* 8. 参数方程 / 极坐标 */
  MODES.param = function (P, D, pv, out) {
    var t = pv.t != null ? pv.t : 1;
    var tr = parseRange(D.tr, 0, 6.2832);
    var polar = (D.polar === "1" || D.mode === "polar");
    var args = ["t"].concat(D.pnames);
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var fx, fy;
    if (polar) {
      var fr = compile(D.r || "1", args);
      fx = function (u) { return fr.apply(null, [u].concat(vs)) * Math.cos(u); };
      fy = function (u) { return fr.apply(null, [u].concat(vs)) * Math.sin(u); };
    } else {
      var cx = compile(D.fx || "cos(t)", args), cy = compile(D.fy || "sin(t)", args);
      fx = function (u) { return cx.apply(null, [u].concat(vs)); };
      fy = function (u) { return cy.apply(null, [u].concat(vs)); };
    }
    P.grid();
    P.g.save(); P.g.beginPath(); P.g.strokeStyle = C.curve; P.g.lineWidth = 2.2;
    var N = 900, i, u, first = true;
    for (i = 0; i <= N; i++) {
      u = tr[0] + (tr[1] - tr[0]) * i / N;
      var X = fx(u), Y = fy(u);
      if (!isFinite(X) || !isFinite(Y)) { first = true; continue; }
      if (first) { P.g.moveTo(P.X(X), P.Y(Y)); first = false; } else P.g.lineTo(P.X(X), P.Y(Y));
    }
    P.g.stroke(); P.g.restore();
    /* 动点 + 速度向量 */
    var px = fx(t), py = fy(t);
    var h = 1e-4, vx = (fx(t + h) - fx(t - h)) / (2 * h), vy = (fy(t + h) - fy(t - h)) / (2 * h);
    var sc = 0.28 * (P.xr[1] - P.xr[0]) / Math.max(1e-6, Math.hypot(vx, vy));
    P.arrow(px, py, px + vx * sc, py + vy * sc, C.curve2, 1.8);
    P.dot(px, py);
    out.push(["参数 t", fmt(t, 3)]);
    out.push(["点 (x, y)", "(" + fmt(px, 3) + ", " + fmt(py, 3) + ")"]);
    out.push(["切向量 (x′, y′)", "(" + fmt(vx, 3) + ", " + fmt(vy, 3) + ")"]);
    out.push(["速率 |v|", fmt(Math.hypot(vx, vy), 4)]);
  };
  MODES.polar = MODES.param;

  /* 9. 等高线 + 梯度 */
  MODES.contour = function (P, D, pv, out) {
    var f = compile(D.fn || "x*x+y*y", ["x", "y"].concat(D.pnames));
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var F = function (x, y) { return f.apply(null, [x, y].concat(vs)); };
    P.grid();
    /* 用像素扫描画等高线（marching-squares 简化：着色带） */
    var g = P.g, W = P.W, H = P.H, pad = P.pad;
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    var step = 3, vals = [], mn = 1e18, mx = -1e18, px, py;
    for (py = pad.t; py < pad.t + ih; py += step) {
      var row = [];
      for (px = pad.l; px < pad.l + iw; px += step) {
        var v = F(P.invX(px), P.invY(py));
        if (isFinite(v)) { mn = Math.min(mn, v); mx = Math.max(mx, v); }
        row.push(v);
      }
      vals.push(row);
    }
    var K = 11;
    for (var r = 0; r < vals.length; r++) {
      for (var c = 0; c < vals[r].length; c++) {
        var vv = vals[r][c]; if (!isFinite(vv)) continue;
        var tt = (vv - mn) / Math.max(1e-9, mx - mn);
        var band = Math.floor(tt * K) / K;
        g.fillStyle = "hsl(" + (200 - band * 175) + ",62%," + (94 - band * 40) + "%)";
        g.fillRect(pad.l + c * step, pad.t + r * step, step, step);
      }
    }
    /* 梯度箭头场 */
    var gx0 = num(D.px, (P.xr[0] + P.xr[1]) / 2), gy0 = num(D.py, (P.yr[0] + P.yr[1]) / 2);
    if (pv.px != null) gx0 = pv.px;
    if (pv.py != null) gy0 = pv.py;
    var hh = 1e-4;
    var gx = (F(gx0 + hh, gy0) - F(gx0 - hh, gy0)) / (2 * hh);
    var gy = (F(gx0, gy0 + hh) - F(gx0, gy0 - hh)) / (2 * hh);
    var L = Math.hypot(gx, gy);
    var scale = 0.22 * (P.xr[1] - P.xr[0]) / Math.max(1e-6, L);
    P.arrow(gx0, gy0, gx0 + gx * scale, gy0 + gy * scale, "#b91c1c", 2.2);
    P.dot(gx0, gy0, "#111827", 4);
    out.push(["点 P", "(" + fmt(gx0, 2) + ", " + fmt(gy0, 2) + ")"]);
    out.push(["f(P)", fmt(F(gx0, gy0), 4)]);
    out.push(["∂f/∂x", fmt(gx, 4)]);
    out.push(["∂f/∂y", fmt(gy, 4)]);
    out.push(["|∇f| (最大方向导数)", fmt(L, 4)]);
  };

  /* 10. 向量场 */
  MODES.vecfield = function (P, D, pv, out) {
    var fp = compile(D.fp || "-y", ["x", "y"].concat(D.pnames));
    var fq = compile(D.fq || "x", ["x", "y"].concat(D.pnames));
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var Pf = function (x, y) { return fp.apply(null, [x, y].concat(vs)); };
    var Qf = function (x, y) { return fq.apply(null, [x, y].concat(vs)); };
    P.grid();
    var nx = 15, ny = 11, i, j;
    var dx = (P.xr[1] - P.xr[0]) / nx, dy = (P.yr[1] - P.yr[0]) / ny;
    var maxL = 1e-9;
    for (i = 0; i <= nx; i++) for (j = 0; j <= ny; j++) {
      var x = P.xr[0] + i * dx, y = P.yr[0] + j * dy;
      maxL = Math.max(maxL, Math.hypot(Pf(x, y), Qf(x, y)) || 0);
    }
    for (i = 0; i <= nx; i++) for (j = 0; j <= ny; j++) {
      var X = P.xr[0] + i * dx, Y = P.yr[0] + j * dy;
      var u = Pf(X, Y), v = Qf(X, Y);
      if (!isFinite(u) || !isFinite(v)) continue;
      var L = Math.hypot(u, v), s = (L / maxL) * dx * 0.95 / Math.max(1e-9, L);
      var hue = 200 - 170 * (L / maxL);
      P.arrow(X, Y, X + u * s, Y + v * s, "hsl(" + hue + ",65%,45%)", 1.2);
    }
    /* 流线 */
    if (D.flow !== "0") {
      var sx = num(D.sx, (P.xr[0] + P.xr[1]) / 2 + 0.7), sy = num(D.sy, (P.yr[0] + P.yr[1]) / 2 + 0.7);
      if (pv.sx != null) sx = pv.sx; if (pv.sy != null) sy = pv.sy;
      P.g.save(); P.g.beginPath(); P.g.strokeStyle = "#b91c1c"; P.g.lineWidth = 2;
      var cx = sx, cy = sy, dt = 0.012;
      P.g.moveTo(P.X(cx), P.Y(cy));
      for (var k = 0; k < 900; k++) {
        var uu = Pf(cx, cy), vv = Qf(cx, cy);
        if (!isFinite(uu) || !isFinite(vv)) break;
        var nl = Math.hypot(uu, vv); if (nl < 1e-9) break;
        cx += uu / nl * dt * (P.xr[1] - P.xr[0]); cy += vv / nl * dt * (P.xr[1] - P.xr[0]);
        if (cx < P.xr[0] || cx > P.xr[1] || cy < P.yr[0] || cy > P.yr[1]) break;
        P.g.lineTo(P.X(cx), P.Y(cy));
      }
      P.g.stroke(); P.g.restore();
      P.dot(sx, sy, "#111827", 4);
      out.push(["起点", "(" + fmt(sx, 2) + ", " + fmt(sy, 2) + ")"]);
      out.push(["该点 (P, Q)", "(" + fmt(Pf(sx, sy), 3) + ", " + fmt(Qf(sx, sy), 3) + ")"]);
    }
    out.push(["场", "P = " + (D.fp || "-y") + " ,  Q = " + (D.fq || "x")]);
  };

  /* 11. 旋转体（截面圆盘） */
  MODES.revolve = function (P, D, pv, out) {
    var xc = pv.x != null ? pv.x : 1;
    var a = num(D.a, 0), b = num(D.b, 2);
    var f = compile(D.fn || "sqrt(x)", ["x"]);
    P.grid();
    P.area(f, a, b, C.fill);
    P.area(function (x) { return -f(x); }, a, b, "rgba(14,124,124,.07)");
    P.curve(f, C.curve, 2.2);
    P.curve(function (x) { return -f(x); }, C.curve, 1.2, [4, 3]);
    /* 截面 */
    var R = f(xc);
    P.seg(xc, -R, xc, R, C.curve2, 2.4);
    P.g.save(); P.g.strokeStyle = "rgba(194,65,12,.75)"; P.g.lineWidth = 1.6;
    P.g.beginPath();
    P.g.ellipse(P.X(xc), P.Y(0), Math.abs(P.X(xc + (b - a) * 0.035) - P.X(xc)), Math.abs(P.Y(R) - P.Y(0)), 0, 0, 6.2832);
    P.g.stroke(); P.g.restore();
    var V = Math.PI * simpson(function (x) { var y = f(x); return y * y; }, a, b, 600);
    out.push(["截面位置 x", fmt(xc, 3)]);
    out.push(["半径 R = f(x)", fmt(R, 4)]);
    out.push(["截面积 πR²", fmt(Math.PI * R * R, 4)]);
    out.push(["旋转体体积 V", fmt(V, 5)]);
  };

  /* 12. 方向场 + 欧拉解 */
  MODES.dirfield = function (P, D, pv, out) {
    var f = compile(D.fn || "x-y", ["x", "y"].concat(D.pnames));
    var vs = D.pnames.map(function (nm) { return pv[nm]; });
    var F = function (x, y) { return f.apply(null, [x, y].concat(vs)); };
    P.grid();
    var nx = 17, ny = 12, i, j;
    var dx = (P.xr[1] - P.xr[0]) / nx, dy = (P.yr[1] - P.yr[0]) / ny;
    var seg = dx * 0.42;
    for (i = 0; i <= nx; i++) for (j = 0; j <= ny; j++) {
      var x = P.xr[0] + i * dx, y = P.yr[0] + j * dy, k = F(x, y);
      if (!isFinite(k)) continue;
      var ang = Math.atan(k), c = Math.cos(ang), s = Math.sin(ang);
      P.seg(x - seg * c, y - seg * s * (P.yr[1] - P.yr[0]) / (P.xr[1] - P.xr[0]) * ((P.xr[1] - P.xr[0]) / (P.yr[1] - P.yr[0])),
        x + seg * c, y + seg * s, "#9ab", 1.1);
    }
    var y0 = pv.y0 != null ? pv.y0 : num(D.y0, 0);
    var x0 = num(D.x0, P.xr[0]);
    /* RK4 前向 + 后向 */
    function integrate(dir) {
      var h = 0.008 * (P.xr[1] - P.xr[0]) * dir, cx = x0, cy = y0;
      P.g.beginPath(); P.g.moveTo(P.X(cx), P.Y(cy));
      for (var k2 = 0; k2 < 1400; k2++) {
        var k1 = F(cx, cy), k22 = F(cx + h / 2, cy + h / 2 * k1),
          k3 = F(cx + h / 2, cy + h / 2 * k22), k4 = F(cx + h, cy + h * k3);
        if (![k1, k22, k3, k4].every(isFinite)) break;
        cy += h / 6 * (k1 + 2 * k22 + 2 * k3 + k4); cx += h;
        if (cx < P.xr[0] || cx > P.xr[1] || cy < P.yr[0] - 5 || cy > P.yr[1] + 5) break;
        P.g.lineTo(P.X(cx), P.Y(cy));
      }
      P.g.stroke();
    }
    P.g.save(); P.g.strokeStyle = "#b91c1c"; P.g.lineWidth = 2.2;
    integrate(1); integrate(-1);
    P.g.restore();
    P.dot(x0, y0, "#111827", 4.5);
    out.push(["初值 y(" + fmt(x0, 2) + ")", fmt(y0, 3)]);
    out.push(["该点斜率 y′", fmt(F(x0, y0), 4)]);
    out.push(["方程", "y′ = " + (D.fn || "x-y")]);
  };

  /* 13. 迭代法（牛顿 / 二分 / 不动点） */
  MODES.iterate = function (P, D, pv, out) {
    var n = Math.round(pv.n != null ? pv.n : 3);
    var kind = D.kind || "newton";
    var f = compile(D.fn || "x*x-2", ["x"]);
    P.grid(); P.curve(f, C.curve, 2.2);
    var x = num(D.x0, 2), a = num(D.a, 0), b = num(D.b, 2), i, rows = [];
    if (kind === "newton") {
      for (i = 0; i < n; i++) {
        var fx = f(x), d = deriv(f, x);
        if (!isFinite(fx) || Math.abs(d) < 1e-12) break;
        var xn = x - fx / d;
        P.seg(x, 0, x, fx, C.soft, 1, [3, 3]);
        P.seg(x, fx, xn, 0, C.curve2, 1.7);
        P.dot(x, fx, C.curve2, 3.2);
        rows.push([i, x, fx]);
        x = xn;
      }
      P.dot(x, 0, C.pt, 4.5);
      out.push(["迭代次数 n", String(n)]);
      out.push(["xₙ", fmt(x, 8)]);
      out.push(["f(xₙ)", fmt(f(x), 8)]);
    } else if (kind === "bisect") {
      var lo = a, hi = b;
      for (i = 0; i < n; i++) {
        var mid = (lo + hi) / 2;
        P.vband(lo, hi, "rgba(21,128,61," + (0.05 + 0.02 * i) + ")");
        if (f(lo) * f(mid) <= 0) hi = mid; else lo = mid;
      }
      var m2 = (lo + hi) / 2;
      P.seg(lo, P.yr[0], lo, P.yr[1], C.ok, 1.3, [4, 3]);
      P.seg(hi, P.yr[0], hi, P.yr[1], C.ok, 1.3, [4, 3]);
      P.dot(m2, f(m2), C.pt, 4.5);
      out.push(["二分次数", String(n)]);
      out.push(["区间", "[" + fmt(lo, 6) + ", " + fmt(hi, 6) + "]"]);
      out.push(["区间长度", fmt(hi - lo, 8)]);
      out.push(["近似根", fmt(m2, 8)]);
    } else { /* fixed point：蛛网图 */
      P.curve(function (u) { return u; }, C.soft, 1.2, [5, 4]);
      var cx = x;
      for (i = 0; i < n; i++) {
        var y = f(cx);
        if (!isFinite(y)) break;
        P.seg(cx, cx, cx, y, C.curve2, 1.6);
        P.seg(cx, y, y, y, C.curve2, 1.6);
        P.dot(cx, y, C.curve2, 3);
        cx = y;
      }
      P.dot(cx, cx, C.pt, 4.5);
      out.push(["迭代次数", String(n)]);
      out.push(["xₙ", fmt(cx, 8)]);
      out.push(["|xₙ − φ(xₙ)|", fmt(Math.abs(cx - f(cx)), 8)]);
    }
  };

  /* 14. 梯度下降（一维/二维等高线） */
  MODES.gd = function (P, D, pv, out) {
    var lr = pv.lr != null ? pv.lr : 0.1, steps = Math.round(pv.steps != null ? pv.steps : 10);
    var f = compile(D.fn || "x*x+2*y*y", ["x", "y"]);
    var F = function (x, y) { return f(x, y); };
    /* 复用等高线底图 */
    MODES.contour(P, { fn: D.fn || "x*x+2*y*y", pnames: [], px: 1e9, py: 1e9 }, {}, []);
    var x = num(D.x0, 1.6), y = num(D.y0, 1.2), h = 1e-4, i;
    P.g.save(); P.g.strokeStyle = "#111827"; P.g.lineWidth = 2; P.g.beginPath();
    P.g.moveTo(P.X(x), P.Y(y));
    var path = [[x, y]];
    for (i = 0; i < steps; i++) {
      var gx = (F(x + h, y) - F(x - h, y)) / (2 * h);
      var gy = (F(x, y + h) - F(x, y - h)) / (2 * h);
      if (!isFinite(gx) || !isFinite(gy)) break;
      x -= lr * gx; y -= lr * gy;
      if (!isFinite(x) || !isFinite(y) || Math.abs(x) > 1e6) break;
      path.push([x, y]);
      P.g.lineTo(P.X(x), P.Y(y));
    }
    P.g.stroke(); P.g.restore();
    path.forEach(function (p, k) { P.dot(p[0], p[1], k === 0 ? "#111827" : (k === path.length - 1 ? "#b91c1c" : "#fff"), k === 0 || k === path.length - 1 ? 4.5 : 2.6); });
    out.push(["学习率 η", fmt(lr, 4)]);
    out.push(["迭代步数", String(steps)]);
    out.push(["当前点", "(" + fmt(x, 4) + ", " + fmt(y, 4) + ")"]);
    out.push(["函数值 f", fmt(F(x, y), 6)]);
  };

  /* 15. 二重积分区域网格分割 */
  MODES.region = function (P, D, pv, out) {
    var n = Math.max(1, Math.round(pv.n != null ? pv.n : 8));
    var a = num(D.a, 0), b = num(D.b, 1);
    var low = compile(D.low || "0", ["x"]), up = compile(D.up || "x", ["x"]);
    var fz = compile(D.fn || "1", ["x", "y"]);
    P.grid();
    var dx = (b - a) / n, S = 0, i, j;
    for (i = 0; i < n; i++) {
      var xl = a + i * dx, xm = xl + dx / 2;
      var y1 = low(xm), y2 = up(xm);
      if (!isFinite(y1) || !isFinite(y2)) continue;
      var dy = (y2 - y1) / n;
      for (j = 0; j < n; j++) {
        var ym = y1 + (j + 0.5) * dy;
        var v = fz(xm, ym); if (!isFinite(v)) v = 0;
        S += v * dx * dy;
        var t = Math.min(1, Math.abs(v) / 3);
        P.rect(xl, y1 + j * dy, xl + dx, y1 + (j + 1) * dy,
          "hsla(" + (192 - 140 * t) + ",65%,60%,.30)", "rgba(255,255,255,.85)");
      }
    }
    P.curve(function (x) { return up(x); }, C.curve, 2);
    P.curve(function (x) { return low(x); }, C.curve2, 2);
    var exact = simpson(function (x) {
      return simpson(function (y) { return fz(x, y); }, low(x), up(x), 120);
    }, a, b, 120);
    out.push(["每向分割数 n", String(n) + " × " + String(n)]);
    out.push(["小块总数", String(n * n)]);
    out.push(["黎曼和", fmt(S, 6)]);
    out.push(["二重积分精确值", fmt(exact, 6)]);
    out.push(["误差", fmt(Math.abs(S - exact), 6)]);
  };

  /* 16. 弧长折线逼近 */
  MODES.arc = function (P, D, pv, out) {
    var n = Math.max(1, Math.round(pv.n != null ? pv.n : 4));
    var a = num(D.a, 0), b = num(D.b, 2);
    var f = compile(D.fn || "x*x/2", ["x"]);
    P.grid(); P.curve(f, C.curve, 2.2);
    var L = 0, i, dx = (b - a) / n;
    for (i = 0; i < n; i++) {
      var x1 = a + i * dx, x2 = x1 + dx, y1 = f(x1), y2 = f(x2);
      L += Math.hypot(x2 - x1, y2 - y1);
      P.seg(x1, y1, x2, y2, C.curve2, 1.9);
      P.dot(x1, y1, C.curve2, 3);
    }
    P.dot(b, f(b), C.curve2, 3);
    var exact = simpson(function (x) { var d = deriv(f, x); return Math.sqrt(1 + d * d); }, a, b, 800);
    out.push(["折线段数 n", String(n)]);
    out.push(["折线总长", fmt(L, 6)]);
    out.push(["弧长精确值", fmt(exact, 6)]);
    out.push(["误差", fmt(Math.abs(L - exact), 6)]);
  };

  /* 17. 中值定理（罗尔/拉格朗日/柯西） */
  MODES.mvt = function (P, D, pv, out) {
    var a = pv.a != null ? pv.a : num(D.a, 0), b = pv.b != null ? pv.b : num(D.b, 3);
    var f = compile(D.fn || "x*x*x/3-x", ["x"]);
    P.grid(); P.curve(f, C.curve, 2.2);
    var fa = f(a), fb = f(b), k = (fb - fa) / (b - a);
    P.seg(a, fa, b, fb, C.curve2, 2);
    P.dot(a, fa, C.curve2); P.dot(b, fb, C.curve2);
    /* 找所有 ξ */
    var xis = [], i, N = 2000, prev = deriv(f, a) - k;
    for (i = 1; i <= N; i++) {
      var x = a + (b - a) * i / N, cur = deriv(f, x) - k;
      if (isFinite(prev) && isFinite(cur) && prev * cur <= 0) {
        var lo = a + (b - a) * (i - 1) / N, hi = x, m;
        for (var j = 0; j < 60; j++) {
          m = (lo + hi) / 2;
          if ((deriv(f, lo) - k) * (deriv(f, m) - k) <= 0) hi = m; else lo = m;
        }
        xis.push((lo + hi) / 2);
      }
      prev = cur;
    }
    xis.slice(0, 4).forEach(function (xi) {
      var yi = f(xi);
      P.seg(P.xr[0], yi + k * (P.xr[0] - xi), P.xr[1], yi + k * (P.xr[1] - xi), C.curve3, 1.5, [6, 4]);
      P.dot(xi, yi, C.pt, 4.5);
      P.label(xi, yi + (P.yr[1] - P.yr[0]) * 0.04, "ξ=" + fmt(xi, 3), C.pt, "center");
    });
    out.push(["区间", "[" + fmt(a, 3) + ", " + fmt(b, 3) + "]"]);
    out.push(["割线斜率 (f(b)−f(a))/(b−a)", fmt(k, 5)]);
    out.push(["中值点 ξ", xis.length ? xis.map(function (v) { return fmt(v, 4); }).join(",  ") : "无"]);
  };

  /* 18. 空间向量 / 平面（二维投影示意） */
  MODES.vec2 = function (P, D, pv, out) {
    var th = pv.theta != null ? pv.theta : 0.6;
    var ax = num(D.ax, 3), ay = num(D.ay, 1);
    var bl = num(D.bl, 2.6);
    P.grid();
    var bx = bl * Math.cos(th), by = bl * Math.sin(th);
    P.arrow(0, 0, ax, ay, C.curve, 2.4);
    P.arrow(0, 0, bx, by, C.curve2, 2.4);
    var dot = ax * bx + ay * by, la = Math.hypot(ax, ay), lb = Math.hypot(bx, by);
    var cs = dot / (la * lb);
    /* 投影 */
    var pl = dot / (la * la);
    P.seg(0, 0, ax * pl, ay * pl, C.curve3, 3.2);
    P.seg(bx, by, ax * pl, ay * pl, C.soft, 1.2, [4, 3]);
    P.label(ax, ay, " a", C.curve);
    P.label(bx, by, " b", C.curve2);
    out.push(["a", "(" + fmt(ax, 2) + ", " + fmt(ay, 2) + ")"]);
    out.push(["b", "(" + fmt(bx, 3) + ", " + fmt(by, 3) + ")"]);
    out.push(["a · b", fmt(dot, 4)]);
    out.push(["夹角 θ", fmt(Math.acos(Math.max(-1, Math.min(1, cs))) * 180 / Math.PI, 2) + "°"]);
    out.push(["叉积模 |a×b|", fmt(Math.abs(ax * by - ay * bx), 4)]);
    out.push(["b 在 a 上投影长", fmt(dot / la, 4)]);
  };

  /* 19. 微分 vs 增量（线性近似误差） */
  MODES.diff = function (P, D, pv, out) {
    var dx = pv.dx != null ? pv.dx : 0.8;
    var x0 = num(D.x0, 1);
    var f = compile(D.fn || "sqrt(x)", ["x"]);
    P.grid(); P.curve(f, C.curve, 2.2);
    var y0 = f(x0), k = deriv(f, x0), y1 = f(x0 + dx);
    P.seg(P.xr[0], y0 + k * (P.xr[0] - x0), P.xr[1], y0 + k * (P.xr[1] - x0), C.curve3, 1.8, [6, 4]);
    P.seg(x0, y0, x0 + dx, y0, C.soft, 1.2, [3, 3]);
    P.seg(x0 + dx, y0, x0 + dx, y0 + k * dx, C.ok, 2.6);      /* dy */
    P.seg(x0 + dx, y0 + k * dx, x0 + dx, y1, C.pt, 2.6);       /* o(dx) */
    P.dot(x0, y0); P.dot(x0 + dx, y1, C.curve2);
    out.push(["Δx = dx", fmt(dx, 4)]);
    out.push(["增量 Δy", fmt(y1 - y0, 6)]);
    out.push(["微分 dy = f′(x₀)dx", fmt(k * dx, 6)]);
    out.push(["误差 Δy − dy", fmt(y1 - y0 - k * dx, 6)]);
    out.push(["相对误差", fmt(Math.abs((y1 - y0 - k * dx) / Math.max(1e-12, Math.abs(y1 - y0))) * 100, 3) + " %"]);
  };

  /* 20. 傅里叶部分和 */
  MODES.fourier = function (P, D, pv, out) {
    var N = Math.round(pv.N != null ? pv.N : 5);
    var kind = D.wave || "square";
    P.grid();
    function target(x) {
      if (kind === "square") return x - 2 * Math.PI * Math.floor((x + Math.PI) / (2 * Math.PI)) >= 0 ? 1 : -1;
      if (kind === "saw") { var u = x - 2 * Math.PI * Math.floor((x + Math.PI) / (2 * Math.PI)); return u / Math.PI; }
      var u2 = x - 2 * Math.PI * Math.floor((x + Math.PI) / (2 * Math.PI));
      return 1 - 2 * Math.abs(u2) / Math.PI;
    }
    function partial(x) {
      var s = 0, k;
      if (kind === "square") { for (k = 1; k <= N; k += 2) s += 4 / (Math.PI * k) * Math.sin(k * x); }
      else if (kind === "saw") { for (k = 1; k <= N; k++) s += 2 / (Math.PI * k) * Math.pow(-1, k + 1) * Math.sin(k * x); }
      else { for (k = 1; k <= N; k += 2) s += 8 / (Math.PI * Math.PI * k * k) * Math.cos(k * x); }
      return s;
    }
    P.curve(target, "#9aa8b4", 1.6, [5, 4]);
    P.curve(partial, C.curve, 2.3);
    var err = 0, i;
    for (i = 0; i <= 400; i++) { var x = -Math.PI + 2 * Math.PI * i / 400; err = Math.max(err, Math.abs(partial(x) - target(x))); }
    out.push(["谐波项数 N", String(N)]);
    out.push(["最大偏差", fmt(err, 4)]);
    out.push(["说明", "跳跃点附近的过冲即吉布斯现象（约 9%）"]);
  };

  /* ---------------- 装配 ---------------- */
  function build(el) {
    if (el.getAttribute("data-ia-built")) return;
    el.setAttribute("data-ia-built", "1");
    var D = {};
    Array.prototype.forEach.call(el.attributes, function (a) {
      if (a.name.indexOf("data-") === 0) D[a.name.slice(5)] = a.value;
    });
    var mode = D.mode || "curve";
    var ps = parseParams(D.params);
    D.pnames = ps.map(function (p) { return p.name; })
      .filter(function (n) { return ["n", "N", "eps", "delta", "h", "t", "x", "lr", "steps", "y0", "px", "py", "sx", "sy", "a", "b", "theta", "dx"].indexOf(n) < 0; });

    var title = D.title || "交互实验";
    var wrap = document.createElement("div");
    wrap.className = "ia-wrap";
    wrap.innerHTML =
      '<div class="ia-hd"><span class="ia-ic">🎛</span><b>交互实验</b> · ' + title + '</div>' +
      '<div class="ia-main">' +
      '<div class="ia-cvbox"><canvas class="ia-cv"></canvas></div>' +
      '<div class="ia-side"><div class="ia-ctl"></div><div class="ia-out"></div></div>' +
      '</div>' +
      (D.tip ? '<div class="ia-tip">💡 ' + D.tip + '</div>' : '');
    el.appendChild(wrap);

    var cv = wrap.querySelector(".ia-cv");
    var ctl = wrap.querySelector(".ia-ctl");
    var outb = wrap.querySelector(".ia-out");
    var pv = {};
    ps.forEach(function (p) { pv[p.name] = p.val; });

    ps.forEach(function (p) {
      var row = document.createElement("div");
      row.className = "ia-row";
      row.innerHTML = '<label>' + p.name + ' <span class="ia-v">' + fmt(p.val, 3) + '</span></label>';
      var inp = document.createElement("input");
      inp.type = "range"; inp.min = p.min; inp.max = p.max; inp.step = p.step; inp.value = p.val;
      inp.addEventListener("input", function () {
        pv[p.name] = parseFloat(inp.value);
        row.querySelector(".ia-v").textContent = fmt(pv[p.name], 3);
        draw();
      });
      row.appendChild(inp);
      ctl.appendChild(row);
    });

    /* 播放按钮：让第一个参数自动扫描 */
    if (ps.length && D.play !== "0") {
      var btn = document.createElement("button");
      btn.className = "ia-play"; btn.type = "button"; btn.textContent = "▶ 自动演示";
      var timer = null;
      btn.addEventListener("click", function () {
        if (timer) { clearInterval(timer); timer = null; btn.textContent = "▶ 自动演示"; return; }
        btn.textContent = "⏸ 暂停";
        var p0 = ps[0], inp0 = ctl.querySelector("input");
        var dir = 1;
        timer = setInterval(function () {
          var v = pv[p0.name] + dir * p0.step * 2;
          if (v > p0.max) { v = p0.max; dir = -1; }
          if (v < p0.min) { v = p0.min; dir = 1; }
          pv[p0.name] = v; inp0.value = v;
          ctl.querySelector(".ia-v").textContent = fmt(v, 3);
          draw();
        }, 70);
      });
      ctl.appendChild(btn);
    }

    function draw() {
      var xr = parseRange(D.xr, -5, 5), yr = parseRange(D.yr, -3, 3);
      var P;
      try { P = Plot(cv, xr.slice(), yr.slice()); } catch (e) { return; }
      var out = [];
      var fn = MODES[mode] || MODES.curve;
      try { fn(P, D, pv, out); }
      catch (e) { P.labelPx(50, 40, "绘制出错：" + e.message, "#b91c1c"); }
      outb.innerHTML = out.map(function (r) {
        return '<div class="ia-o"><span>' + r[0] + '</span><b>' + r[1] + '</b></div>';
      }).join("");
    }

    /* 画布点击可拖动关键点（contour / vecfield / dirfield / gd） */
    if (["contour", "vecfield", "dirfield", "gd"].indexOf(mode) >= 0) {
      var dragging = false;
      function pick(e) {
        var r = cv.getBoundingClientRect();
        var cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        var cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
        var xr = parseRange(D.xr, -5, 5), yr = parseRange(D.yr, -3, 3);
        var P0 = { pad: { l: 40, r: 14, t: 12, b: 26 } };
        var iw = cv.clientWidth - 54, ih = cv.clientHeight - 38;
        var X = xr[0] + (cx - 40) / iw * (xr[1] - xr[0]);
        var Y = yr[1] - (cy - 12) / ih * (yr[1] - yr[0]);
        if (mode === "contour" || mode === "gd") { pv.px = X; pv.py = Y; D.px = X; D.py = Y; D.x0 = X; D.y0 = Y; }
        else if (mode === "vecfield") { pv.sx = X; pv.sy = Y; }
        else if (mode === "dirfield") { D.x0 = X; pv.y0 = Y; }
        draw();
      }
      cv.style.cursor = "crosshair";
      cv.addEventListener("mousedown", function (e) { dragging = true; pick(e); });
      cv.addEventListener("mousemove", function (e) { if (dragging) pick(e); });
      window.addEventListener("mouseup", function () { dragging = false; });
      cv.addEventListener("touchstart", function (e) { pick(e); e.preventDefault(); }, { passive: false });
      cv.addEventListener("touchmove", function (e) { pick(e); e.preventDefault(); }, { passive: false });
      var hint = document.createElement("div");
      hint.className = "ia-hint"; hint.textContent = "（可在图上点击 / 拖动改变红点位置）";
      wrap.querySelector(".ia-cvbox").appendChild(hint);
    }

    draw();
    var ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(function () { draw(); });
      ro.observe(cv);
    } else {
      window.addEventListener("resize", draw);
    }
  }

  function scan(root) {
    var list = (root || document).querySelectorAll(".ia[data-mode]");
    Array.prototype.forEach.call(list, function (el) {
      /* 折叠内的等展开再建，避免宽度为 0 */
      var det = el.closest ? el.closest("details") : null;
      if (det && !det.open) {
        det.addEventListener("toggle", function once() {
          if (det.open) { build(el); det.removeEventListener("toggle", once); }
        });
        return;
      }
      build(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { scan(); });
  } else scan();

  window.IA = { scan: scan, build: build, MODES: MODES };
})();
