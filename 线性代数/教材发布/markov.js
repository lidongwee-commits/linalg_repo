/* 第三章 应用探微 · 马尔可夫链：状态如何收敛到稳态（幂迭代的直观原型）
   两状态天气模型：晴 / 雨.拖动“晴→雨”“雨→晴”概率，观察分布 v_{n+1}=v_n P 如何收敛到平稳分布 π（πP=π）.
*/
(function(){
  var box = document.getElementById('mkDemo'); if(!box) return;
  var cv = document.getElementById('mkCanvas'); if(!cv) return;
  var ctx = cv.getContext('2d');

  var W = 760, H = 300;
  var dpr = window.devicePixelRatio || 1;
  cv.width = Math.floor(W * dpr);
  cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  var state = { p:0.3, q:0.4, v:[0.5,0.5], n:0, hist:[[0.5,0.5]], playing:false, timer:null };

  function Pmat(){ return [[1-state.p, state.p],[state.q, 1-state.q]]; }
  function step(){
    var P = Pmat();
    var s = state.v[0]*(1-state.p) + state.v[1]*state.q;
    var r = state.v[0]*state.p + state.v[1]*(1-state.q);
    state.v = [s, r];
    state.n++;
    state.hist.push([s,r]);
    if(state.hist.length>60) state.hist.shift();
  }
  function stationary(){
    var p=state.p, q=state.q;
    if(p+q < 1e-9) return [0.5,0.5];
    return [q/(p+q), p/(p+q)];
  }

  function dark(){ return document.documentElement.classList.contains('dark'); }
  function fmt(x){ return (Math.round(x*10000)/10000).toFixed(4); }

  function draw(){
    ctx.clearRect(0,0,W,H);
    var bg = dark() ? '#0a1118' : '#0a1118';
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

    // 左侧：当前分布柱状图
    var padL=24, top=30, barW=70, gap=70, baseY=210;
    ctx.fillStyle = dark() ? '#9fb1c0' : '#9fb1c0';
    ctx.font = '13px -apple-system,"Microsoft YaHei",sans-serif';
    ctx.textAlign='center';
    ctx.fillText('当前分布 v'+(state.n>0?'_'+state.n:''), padL+barW+gap/2, top-10);
    var labels=['晴','雨'], cols=['#5eead4','#fb923c'];
    for(var i=0;i<2;i++){
      var x = padL + i*(barW+gap);
      var h = state.v[i]*150;
      // 轴
      ctx.strokeStyle = '#274055'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(x-6,baseY); ctx.lineTo(x+barW+6,baseY); ctx.stroke();
      // 柱
      ctx.fillStyle = cols[i];
      ctx.fillRect(x, baseY-h, barW, h);
      ctx.fillStyle = '#e6f0f5';
      ctx.fillText(labels[i]+' '+fmt(state.v[i]*100)+'%', x+barW/2, baseY-h-8);
    }

    // 右侧：历史曲线（晴占比随步数）
    var rx=300, rw=420, ry=30, rh=240;
    ctx.strokeStyle='#274055'; ctx.lineWidth=1;
    ctx.strokeRect(rx,ry,rw,rh);
    ctx.fillStyle='#8aa0b2'; ctx.textAlign='left';
    ctx.fillText('晴占比随迭代步数收敛到 π晴', rx, ry-8);
    // π 参考线
    var pi=stationary();
    var py = ry+rh - pi[0]*rh;
    ctx.setLineDash([5,4]); ctx.strokeStyle='#facc15';
    ctx.beginPath(); ctx.moveTo(rx,py); ctx.lineTo(rx+rw,py); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='#facc15'; ctx.fillText('π晴='+fmt(pi[0]*100)+'%', rx+rw-110, py-6);
    // 曲线
    var h=state.hist;
    if(h.length>1){
      ctx.strokeStyle='#5eead4'; ctx.lineWidth=2; ctx.beginPath();
      for(var k=0;k<h.length;k++){
        var xx = rx + (h.length<=1?0:(k/(h.length-1))*rw);
        var yy = ry+rh - h[k][0]*rh;
        if(k===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
      }
      ctx.stroke();
    }
    // 末点
    if(h.length){
      var lx = rx + rw, ly = ry+rh - h[h.length-1][0]*rh;
      ctx.fillStyle='#5eead4'; ctx.beginPath(); ctx.arc(lx,ly,3.5,0,7); ctx.fill();
    }
  }

  function refresh(){
    var P=Pmat();
    var pi=stationary();
    var err = Math.abs(state.v[0]-pi[0]);
    var out = '';
    out += '转移矩阵 P =\n';
    out += '  ['+fmt(1-state.p)+'  '+fmt(state.p)+']\n';
    out += '  ['+fmt(state.q)+'  '+fmt(1-state.q)+']\n';
    out += '当前 v'+state.n+' = ['+fmt(state.v[0])+', '+fmt(state.v[1])+']\n';
    out += '平稳分布 π = ['+fmt(pi[0])+', '+fmt(pi[1])+']\n';
    out += '与 π 的距离 = '+fmt(err)+ (err<1e-3?'  ★ 已收敛':'');
    document.getElementById('mkOut').textContent = out;
    draw();
  }

  function bind(){
    var pEl=document.getElementById('mkP'), qEl=document.getElementById('mkQ');
    pEl.value=state.p; qEl.value=state.q;
    pEl.addEventListener('input',function(){ state.p=parseFloat(this.value)||0; reset(); });
    qEl.addEventListener('input',function(){ state.q=parseFloat(this.value)||0; reset(); });
    document.getElementById('mkStep').addEventListener('click',function(){ step(); refresh(); });
    document.getElementById('mkReset').addEventListener('click',function(){
      state.v=[0.5,0.5]; state.n=0; state.hist=[[0.5,0.5]]; stop(); refresh();
    });
    document.getElementById('mkAuto').addEventListener('click',function(){
      if(state.playing){ stop(); } else { start(); }
    });
  }
  function start(){
    state.playing=true;
    document.getElementById('mkAuto').textContent='暂停';
    state.timer=setInterval(function(){ step(); refresh();
      if(Math.abs(state.v[0]-stationary()[0])<1e-4 && state.n>4){ stop(); }
    }, 380);
  }
  function stop(){
    state.playing=false;
    if(state.timer){ clearInterval(state.timer); state.timer=null; }
    var b=document.getElementById('mkAuto'); if(b) b.textContent='自动播放';
  }
  function reset(){ stop(); state.v=[0.5,0.5]; state.n=0; state.hist=[[0.5,0.5]]; refresh(); }

  bind(); refresh();

  var mo = window.MutationObserver ? new MutationObserver(function(){ if(!state.playing) draw(); }) : null;
  if(mo && box.parentElement) mo.observe(box.parentElement, {attributes:true, subtree:true});
  window.addEventListener('resize', function(){ draw(); });
})();
