/* CT 断层扫描重建 · 互动演示（第四章 应用探微）
   4x4 断面，16 个未知数；可勾选扫描方向，实时高斯消元求秩，
   自由度>0 时用滑块沿基础解系移动，展示"不同图像、相同读数"。
   2026-08-07：增加 devicePixelRatio 高清渲染、整数坐标网格、放大字号。 */
(function(){
  var box = document.getElementById('ctdDemo'); if(!box) return;
  var cv  = document.getElementById('ctdCanvas'); if(!cv) return;
  var ctx = cv.getContext('2d');

  /* -------------- 画布尺寸（CSS 像素） -------------- */
  var W = 760, H = 270;          // 与 HTML width/height 一致
  var dpr = window.devicePixelRatio || 1;
  cv.width  = Math.floor(W * dpr);
  cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  var N = 4, NN = N*N;
  var CELL = 48;                 // 每个小格 CSS 像素
  var PADX = 30;                 // 左右留白
  var GX = [PADX, PADX + N*CELL + 64, PADX + 2*(N*CELL) + 128];
  var GY = 54;                   // 网格顶部 y

  /* ---------- 真实断面（金标准）：0=空气 1=软组织 6=骨 9=致密结节 ---------- */
  var xTrue = [
    0,6,6,0,
    6,1,1,6,
    6,1,9,6,
    0,6,6,0
  ];
  var VMAX = 9;

  /* ---------- 扫描方向 ---------- */
  var DIRS = {
    H : {dr:0, dc:1,  name:'水平 0°',    color:'#38bdf8'},
    V : {dr:1, dc:0,  name:'竖直 90°',   color:'#a78bfa'},
    D1: {dr:1, dc:1,  name:'主对角 45°', color:'#34d399'},
    D2: {dr:1, dc:-1, name:'副对角 135°',color:'#fbbf24'},
    K : {dr:1, dc:2,  name:'斜向 ≈26.6°',color:'#fb7185'}
  };
  var ORDER = ['H','V','D1','D2','K'];

  function raysOf(key){
    var d = DIRS[key], groups = {}, ks = [];
    for(var r=0;r<N;r++) for(var c=0;c<N;c++){
      var k = d.dc*r - d.dr*c;
      if(!groups[k]){ groups[k]=[]; ks.push(k); }
      groups[k].push(r*N+c);
    }
    ks.sort(function(a,b){return a-b;});
    return ks.map(function(k){return groups[k];});
  }

  function buildA(active){
    var A = [];
    active.forEach(function(key){
      raysOf(key).forEach(function(cells){
        var row = new Array(NN).fill(0);
        cells.forEach(function(j){ row[j]=1; });
        A.push(row);
      });
    });
    return A;
  }

  /* ---------- 行最简形 / 秩 / 基础解系 ---------- */
  function rref(A){
    var M = A.map(function(r){return r.slice();});
    var rows = M.length, cols = NN, r = 0, piv = [], tol = 1e-9;
    for(var c=0;c<cols && r<rows;c++){
      var p=-1, best=tol;
      for(var i=r;i<rows;i++){ if(Math.abs(M[i][c])>best){ best=Math.abs(M[i][c]); p=i; } }
      if(p<0) continue;
      var tmp=M[r]; M[r]=M[p]; M[p]=tmp;
      var pv=M[r][c];
      for(var j=0;j<cols;j++) M[r][j]/=pv;
      for(var i2=0;i2<rows;i2++){
        if(i2!==r && Math.abs(M[i2][c])>tol){
          var f=M[i2][c];
          for(var j2=0;j2<cols;j2++) M[i2][j2]-=f*M[r][j2];
        }
      }
      piv.push(c); r++;
    }
    return {M:M, piv:piv, rank:r};
  }

  function nullBasis(A){
    if(!A.length){
      var all=[]; for(var i=0;i<NN;i++){ var v=new Array(NN).fill(0); v[i]=1; all.push(v); }
      return {basis:all, rank:0};
    }
    var R = rref(A), free = [];
    for(var c=0;c<NN;c++) if(R.piv.indexOf(c)<0) free.push(c);
    var basis = free.map(function(fc){
      var v = new Array(NN).fill(0); v[fc]=1;
      R.piv.forEach(function(pc,i){ v[pc] = -R.M[i][fc]; });
      var mx=0; v.forEach(function(x){ mx=Math.max(mx,Math.abs(x)); });
      if(mx>1e-9) v = v.map(function(x){ return x/mx; });
      return v;
    });
    return {basis:basis, rank:R.rank};
  }

  /* ---------- 状态 ---------- */
  var state = { active:['H','V'], t:0, ghost:0, A:[], b:[], basis:[], rank:0 };

  function recompute(){
    state.A = buildA(state.active);
    state.b = state.A.map(function(row){
      var s=0; for(var j=0;j<NN;j++) s+=row[j]*xTrue[j]; return s;
    });
    var nb = nullBasis(state.A);
    state.basis = nb.basis; state.rank = nb.rank;
    if(state.ghost >= state.basis.length) state.ghost = 0;
  }

  function currentX(){
    if(!state.basis.length) return xTrue.slice();
    var g = state.basis[state.ghost], t = state.t;
    return xTrue.map(function(v,i){ return v + t*g[i]; });
  }

  function residual(x){
    var mx=0;
    for(var i=0;i<state.A.length;i++){
      var s=0, row=state.A[i];
      for(var j=0;j<NN;j++) s+=row[j]*x[j];
      mx=Math.max(mx, Math.abs(s-state.b[i]));
    }
    return mx;
  }
  function resTxt(x){
    var v = residual(x);
    return v < 1e-9 ? '0（分毫不差）' : v.toFixed(4);
  }

  /* ---------- 绘图 ---------- */
  function dark(){ return document.documentElement.classList.contains('dark'); }

  function gray(v){
    var u = Math.max(0, Math.min(1, v/VMAX));
    // 避免纯白，保留一点质感
    var g = Math.round(22 + u*208);
    return 'rgb('+g+','+g+','+g+')';
  }
  /* ---------- 真实像素颜色（灰度）差值 ----------
     0 为纯白（无差异），|v| 越大越接近黑色，直接呈现像素图像 */
  function diffGray(v){
    var u = Math.max(0, Math.min(1, Math.abs(v)/3));
    var g = Math.round(255 - u*210);
    return 'rgb('+g+','+g+','+g+')';
  }

  function drawGrid(x0, vals, mode){
    for(var r=0;r<N;r++) for(var c=0;c<N;c++){
      var v = vals[r*N+c];
      var px = Math.round(x0 + c*CELL);
      var py = Math.round(GY + r*CELL);

      ctx.fillStyle = (mode==='diff') ? diffGray(v) : gray(v);
      ctx.fillRect(px, py, CELL, CELL);

      // 1 物理像素网格线
      ctx.strokeStyle = dark() ? 'rgba(71,85,105,.55)' : 'rgba(148,163,184,.45)';
      ctx.lineWidth = 1 / dpr;
      ctx.strokeRect(px + 0.5/dpr, py + 0.5/dpr, CELL-1, CELL-1);

      var txt = (mode==='diff')
        ? (Math.abs(v)<0.05 ? '' : (v>0?'+':'') + v.toFixed(1))
        : (Math.abs(v-Math.round(v))<0.05 ? String(Math.round(v)) : v.toFixed(1));
      if(txt){
        ctx.save();
        ctx.font = '700 15px "SF Mono",Consolas,"Microsoft YaHei",monospace';
        ctx.textAlign='center'; ctx.textBaseline='middle';
        var onDark;
      if(mode==='diff'){
          // 差值大时格子发黑，用白字；差值小时用深字
          onDark = (Math.abs(v) > 0.85) ? '#f8fafc' : (dark() ? '#e2e8f0' : '#1f2937');
        } else {
          onDark = (v/VMAX > 0.52) ? '#0f172a' : '#f1f5f9';
        }
        ctx.fillStyle = onDark;
        // 给数字加轻微描边/阴影，增强跨背景可读性
        ctx.shadowColor = (mode==='diff') ? 'rgba(255,255,255,.55)' : 'rgba(0,0,0,.35)';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0.5;
        ctx.fillText(txt, px + CELL/2, py + CELL/2 + 0.5);
        ctx.restore();
      }
    }
    // 外框
    var L = N*CELL;
    ctx.strokeStyle = dark() ? '#5b8dc7' : '#1e5aa8';
    ctx.lineWidth = 1.6 / dpr;
    var rx = Math.round(x0), ry = Math.round(GY);
    ctx.strokeRect(rx + 0.5/dpr, ry + 0.5/dpr, L-1, L-1);
  }

  function drawRays(x0){
    var L = N*CELL;
    ctx.save();
    ctx.beginPath();
    var rx = Math.round(x0)-8, ry = Math.round(GY)-8;
    ctx.rect(rx, ry, L+16, L+16);
    ctx.clip();
    state.active.forEach(function(key){
      var d = DIRS[key];
      ctx.strokeStyle = d.color;
      ctx.globalAlpha = .45;
      ctx.lineWidth = 1.6 / dpr;
      raysOf(key).forEach(function(cells){
        if(cells.length < 2) return;
        var f = cells[0], l = cells[cells.length-1];
        var fr = Math.floor(f/N), fc = f%N, lr = Math.floor(l/N), lc = l%N;
        var ax = x0 + fc*CELL + CELL/2, ay = GY + fr*CELL + CELL/2;
        var bx = x0 + lc*CELL + CELL/2, by = GY + lr*CELL + CELL/2;
        var dx = bx-ax, dy = by-ay, len = Math.hypot(dx,dy) || 1;
        var ex = dx/len*30, ey = dy/len*30;
        ctx.beginPath();
        ctx.moveTo(ax-ex, ay-ey);
        ctx.lineTo(bx+ex, by+ey);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    });
    ctx.restore();
  }

  function label(x0, text, sub){
    var L = N*CELL;
    ctx.save();
    ctx.textAlign='center'; ctx.textBaseline='alphabetic';
    ctx.font = '700 14px system-ui,-apple-system,"Microsoft YaHei",sans-serif';
    ctx.fillStyle = dark() ? '#cbd5e1' : '#334155';
    ctx.fillText(text, x0 + L/2, GY - 18);
    if(sub){
      ctx.font = '12px system-ui,-apple-system,"Microsoft YaHei",sans-serif';
      ctx.fillStyle = dark() ? '#94a3b8' : '#64748b';
      ctx.fillText(sub, x0 + L/2, GY + L + 22);
    }
    ctx.restore();
  }

  function arrow(xa, xb, text){
    var y = GY + N*CELL/2;
    ctx.save();
    ctx.strokeStyle = dark() ? '#475569' : '#cbd5e1';
    ctx.lineWidth = 1.8 / dpr;
    ctx.beginPath(); ctx.moveTo(xa, y); ctx.lineTo(xb-8, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(xb, y); ctx.lineTo(xb-9, y-5); ctx.lineTo(xb-9, y+5); ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle; ctx.fill();
    ctx.font = '12px system-ui,-apple-system,"Microsoft YaHei",sans-serif';
    ctx.fillStyle = dark() ? '#94a3b8' : '#64748b';
    ctx.textAlign='center'; ctx.fillText(text, (xa+xb)/2, y-12);
    ctx.restore();
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = dark() ? '#0c1420' : '#f8fafc';
    ctx.fillRect(0,0,W,H);

    var x = currentX();
    var diff = x.map(function(v,i){ return v - xTrue[i]; });

    drawGrid(GX[0], xTrue, 'gray');  drawRays(GX[0]);
    drawGrid(GX[1], x,     'gray');
    drawGrid(GX[2], diff,  'diff');
    // 默认 t=0 时差值全 0，给一句提示避免空图
    if(state.basis.length && Math.abs(state.t)<1e-9){
      ctx.save();
      ctx.font = '700 13px system-ui,-apple-system,"Microsoft YaHei",sans-serif';
      ctx.fillStyle = dark() ? '#64748b' : '#94a3b8';
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('当前 t=0，差值全为 0', GX[2] + N*CELL/2, GY + N*CELL/2);
      ctx.restore();
    }

    label(GX[0], '真实断面（金标准）', '射线覆盖示意');
    label(GX[1], '机器重建的一个解',   state.basis.length ? '拖滑块 t 可任意改变' : '与真实断面完全一致');
    label(GX[2], '两者之差 = 幽灵结构', state.basis.length ? '它对读数毫无影响' : '恒为 0');

    arrow(GX[0]+N*CELL+10, GX[1]-10, '扫描');
    arrow(GX[1]+N*CELL+10, GX[2]-10, '相减');
  }

  /* ---------- 面板 ---------- */
  function setTxt(id, v){ var e=document.getElementById(id); if(e) e.textContent = v; }

  function refresh(){
    recompute();
    var nullity = state.basis.length;
    var x = currentX();
    setTxt('ctdM', String(state.A.length));
    setTxt('ctdN', String(NN));
    setTxt('ctdR', String(state.rank));
    setTxt('ctdF', String(nullity));
    setTxt('ctdRes', resTxt(x));

    var vd = document.getElementById('ctdVerdict');
    if(vd){
      if(nullity === 0){
        vd.textContent = '唯一解 · 重建 = 真相';
        vd.className = 'ctd-ok';
      }else{
        vd.textContent = '无穷多解 · ' + nullity + ' 个自由度';
        vd.className = 'ctd-bad';
      }
    }
    var wrap = document.getElementById('ctdSliderWrap');
    if(wrap) wrap.style.display = nullity ? '' : 'none';
    var gbtn = document.getElementById('ctdGhost');
    if(gbtn) gbtn.style.display = nullity > 1 ? '' : 'none';
    var gnum = document.getElementById('ctdGhostNum');
    if(gnum) gnum.textContent = nullity ? (state.ghost+1) + '/' + nullity : '—';
    draw();
  }

  ORDER.forEach(function(key){
    var el = document.getElementById('ctd'+key);
    if(!el) return;
    el.addEventListener('change', function(){
      state.active = ORDER.filter(function(k){
        var e = document.getElementById('ctd'+k); return e && e.checked;
      });
      state.t = 0; state.ghost = 0;
      var sl = document.getElementById('ctdT'); if(sl) sl.value = 0;
      setTxt('ctdTVal','0.0');
      refresh();
    });
  });

  var slider = document.getElementById('ctdT');
  if(slider) slider.addEventListener('input', function(){
    state.t = parseFloat(slider.value)/10;
    setTxt('ctdTVal', state.t.toFixed(1));
    setTxt('ctdRes', resTxt(currentX()));
    draw();
  });

  var gbtn = document.getElementById('ctdGhost');
  if(gbtn) gbtn.addEventListener('click', function(){
    if(state.basis.length > 1){
      state.ghost = (state.ghost+1) % state.basis.length;
      var gnum = document.getElementById('ctdGhostNum');
      if(gnum) gnum.textContent = (state.ghost+1) + '/' + state.basis.length;
      draw();
    }
  });

  var rbtn = document.getElementById('ctdReset');
  if(rbtn) rbtn.addEventListener('click', function(){
    ORDER.forEach(function(k){
      var e = document.getElementById('ctd'+k);
      if(e) e.checked = (k==='H' || k==='V');
    });
    state.active = ['H','V']; state.t = 0; state.ghost = 0;
    if(slider) slider.value = 0;
    setTxt('ctdTVal','0.0');
    refresh();
  });

  // 折叠块展开 / 主题切换后重绘
  var det = box.closest && box.closest('details');
  if(det) det.addEventListener('toggle', function(){ if(det.open) setTimeout(draw, 30); });
  if(window.MutationObserver){
    new MutationObserver(function(){ draw(); })
      .observe(document.documentElement, {attributes:true, attributeFilter:['class']});
  }

  refresh();
})();
