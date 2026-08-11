/* 第五章 应用探微 · PageRank：网页排名 = 转移矩阵的稳态特征向量
   小网络（A~E）链接可切换，阻尼系数 d 可调，幂迭代求排名，实时柱状排序.
*/
(function(){
  var box = document.getElementById('prDemo'); if(!box) return;
  var cv = document.getElementById('prCanvas'); if(!cv) return;
  var ctx = cv.getContext('2d');

  var W = 760, H = 300;
  var dpr = window.devicePixelRatio || 1;
  cv.width = Math.floor(W * dpr);
  cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  var NAMES=['A','B','C','D','E'];
  // 邻接：links[i] = 出链目标列表
  var links = {
    A:[1,2], B:[0], C:[0,1], D:[2,4], E:[2,3]
  };
  var damp = 0.85;

  function buildP(){
    var n=NAMES.length;
    var outDeg={}; NAMES.forEach(function(_,i){ outDeg[i]=links[NAMES[i]].length; });
    var P=[]; for(var i=0;i<n;i++){ P.push(new Array(n).fill(0)); }
    for(var i=0;i<n;i++){
      var deg=outDeg[i];
      if(deg===0){ for(var j=0;j<n;j++) P[i][j]=1/n; }   // 悬挂节点：均匀跳
      else links[NAMES[i]].forEach(function(t){ P[i][t]+=1/deg; });
    }
    // 加阻尼（随机跳转到任意页）
    for(var i2=0;i2<n;i2++) for(var j2=0;j2<n;j2++) P[i2][j2]=(1-damp)/n + damp*P[i2][j2];
    return P;
  }

  function powerIterate(){
    var n=NAMES.length, P=buildP();
    var v=new Array(n).fill(1/n);
    for(var it=0; it<200; it++){
      var nv=new Array(n).fill(0);
      for(var i=0;i<n;i++) for(var j=0;j<n;j++) nv[i]+=P[j][i]*v[j];
      var s=nv.reduce(function(a,b){return a+b;},0);
      nv=nv.map(function(x){return x/s;});
      var diff=0; for(var k=0;k<n;k++) diff+=Math.abs(nv[k]-v[k]);
      v=nv;
      if(diff<1e-9) break;
    }
    return v;
  }

  function dark(){ return document.documentElement.classList.contains('dark'); }
  function fmt(x){ return (Math.round(x*10000)/10000*100).toFixed(2)+'%'; }

  function draw(v){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#0a1118'; ctx.fillRect(0,0,W,H);
    // 左：节点链接图
    var nodes=[];
    var cx=110, cy=150, R=95;
    for(var i=0;i<5;i++){ var a=-Math.PI/2 + i*2*Math.PI/5; nodes.push([cx+R*Math.cos(a), cy+R*Math.sin(a)]); }
    ctx.strokeStyle='#33485c'; ctx.lineWidth=1.4;
    NAMES.forEach(function(s,i){
      links[s].forEach(function(t){
        ctx.beginPath(); ctx.moveTo(nodes[i][0],nodes[i][1]); ctx.lineTo(nodes[t][0],nodes[t][1]); ctx.stroke();
      });
    });
    for(var i=0;i<5;i++){
      ctx.beginPath(); ctx.arc(nodes[i][0],nodes[i][1],16,0,7);
      ctx.fillStyle='#16323e'; ctx.fill(); ctx.strokeStyle='#5eead4'; ctx.lineWidth=2; ctx.stroke();
      ctx.fillStyle='#e6f0f5'; ctx.font='bold 15px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(NAMES[i], nodes[i][0], nodes[i][1]);
    }
    // 右：排名柱状
    var rx=260, rw=470, top=30, bh=200;
    ctx.fillStyle='#9fb1c0'; ctx.font='13px -apple-system,"Microsoft YaHei",sans-serif'; ctx.textAlign='left';
    ctx.fillText('PageRank 排名（越高越重要）', rx, top-10);
    var order=v.map(function(x,i){return [x,i];}).sort(function(a,b){return b[0]-a[0];});
    var maxV=order[0][0]||1;
    for(var k=0;k<order.length;k++){
      var val=order[k][0], idx=order[k][1];
      var y=top + k*((bh)/5);
      var w=(val/maxV)*(rw-50);
      ctx.fillStyle = k===0 ? '#facc15' : '#5eead4';
      ctx.fillRect(rx, y, w, 26);
      ctx.fillStyle='#e6f0f5'; ctx.textBaseline='middle';
      ctx.fillText(NAMES[idx]+'  '+fmt(val), rx+6, y+13);
    }
  }

  function refresh(){
    var v=powerIterate();
    draw(v);
    var order=v.map(function(x,i){return [x,i];}).sort(function(a,b){return b[0]-a[0];});
    var out='排名（高→低）：';
    order.forEach(function(o,k){ out += NAMES[o[1]]+'('+fmt(o[0])+')'+(k<order.length-1?' > ':'') ; });
    out += '\n第1名 '+NAMES[order[0][1]]+' 是“被重要页面指向更多”的网页.';
    document.getElementById('prOut').textContent=out;
  }

  function bind(){
    document.getElementById('prDamp').addEventListener('input',function(){
      damp=parseFloat(this.value)||0.85;
      document.getElementById('prDampV').textContent=fmt(damp);
      refresh();
    });
    // 链接开关
    var rows=document.querySelectorAll('#prLinks input[type=checkbox]');
    rows.forEach(function(cb){
      cb.addEventListener('change',function(){
        var from=this.getAttribute('data-from'), to=parseInt(this.getAttribute('data-to'));
        if(this.checked){ if(links[from].indexOf(to)<0) links[from].push(to); }
        else { links[from]=links[from].filter(function(t){return t!==to;}); }
        refresh();
      });
    });
  }
  bind(); refresh();

  var mo = window.MutationObserver ? new MutationObserver(function(){ refresh(); }) : null;
  if(mo && box.parentElement) mo.observe(box.parentElement, {attributes:true, subtree:true});
  window.addEventListener('resize', function(){ refresh(); });
})();
