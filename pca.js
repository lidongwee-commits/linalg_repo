/* 第五章 应用探微 · PCA：协方差矩阵的特征分解决定“主成分”方向
   2D 散点（预设数据集可切换），实时算均值、协方差、特征值/特征向量，画出主轴与投影。
*/
(function(){
  var box = document.getElementById('pcaDemo'); if(!box) return;
  var cv = document.getElementById('pcaCanvas'); if(!cv) return;
  var ctx = cv.getContext('2d');

  var W = 760, H = 320;
  var dpr = window.devicePixelRatio || 1;
  cv.width = Math.floor(W * dpr);
  cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // 预设数据：[[x,y],...]  在约 [-3,3]^2
  var DATA = {
    corr: [[ -1.5, -1.2],[ -0.8, -0.6],[0.2,0.1],[0.6,0.5],[1.4,1.2],[ -1.0,-0.9],[0.9,0.8],[ -0.3,-0.2],[1.1,1.0],[ -1.8,-1.5]],
    tall: [[0, -1.4],[0.2,-0.6],[ -0.2,0.4],[0.1,1.3],[0,-0.1],[0.3,0.9],[ -0.3,-0.8],[0.1,0.2],[ -0.1,1.8],[0.2,-1.6]],
    circle: [[1,0],[ -1,0],[0,1],[0,-1],[0.7,0.7],[ -0.7,0.7],[0.7,-0.7],[ -0.7,-0.7],[1.2,0],[ -1.2,0]]
  };
  var key='corr';

  function pts(){ return DATA[key]; }

  function mean(a){ var s=[0,0]; a.forEach(function(p){s[0]+=p[0];s[1]+=p[1];}); return [s[0]/a.length,s[1]/a.length]; }
  function cov(a,mu){
    var c=[[0,0],[0,0]]; a.forEach(function(p){
      var dx=p[0]-mu[0], dy=p[1]-mu[1];
      c[0][0]+=dx*dx; c[0][1]+=dx*dy; c[1][0]+=dx*dy; c[1][1]+=dy*dy;
    });
    var n=a.length; return [[c[0][0]/n,c[0][1]/n],[c[1][0]/n,c[1][1]/n]];
  }
  // 2x2 对称阵特征分解
  function eig(C){
    var a=C[0][0], b=C[0][1], d=C[1][1];
    var tr=a+d, det=a*d-b*b;
    var disc=Math.sqrt(Math.max(0,tr*tr/4-det));
    var l1=tr/2+disc, l2=tr/2-disc;
    var v1, v2;
    if(Math.abs(b)>1e-9){ v1=[l1-d,b]; } else { v1 = a>=d?[1,0]:[0,1]; }
    var n1=Math.hypot(v1[0],v1[1])||1; v1=[v1[0]/n1,v1[1]/n1];
    v2=[-v1[1],v1[0]];
    return {l1:l1,l2:l2,v1:v1,v2:v2};
  }

  function dark(){ return document.documentElement.classList.contains('dark'); }

  function toPx(x,y){
    var ox=W/2-30, oy=H/2+10, sc=70;
    return [ox+x*sc, oy-y*sc];
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#0a1118'; ctx.fillRect(0,0,W,H);
    var a=pts(), mu=mean(a), C=cov(a,mu), e=eig(C);
    // 网格轴
    ctx.strokeStyle='#243a4a'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(20,H/2+10); ctx.lineTo(W-10,H/2+10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W/2-30,20); ctx.lineTo(W/2-30,H-10); ctx.stroke();
    // 散点
    a.forEach(function(p){
      var q=toPx(p[0],p[1]);
      ctx.beginPath(); ctx.arc(q[0],q[1],4,0,7);
      ctx.fillStyle='#5eead4'; ctx.fill();
    });
    // 均值点
    var m=toPx(mu[0],mu[1]);
    ctx.fillStyle='#facc15'; ctx.beginPath(); ctx.arc(m[0],m[1],5,0,7); ctx.fill();
    // 主轴：v1 长度 ∝ sqrt(l1)
    function axis(v,lam,col){
      var L=Math.sqrt(Math.max(lam,0))*60;
      var q0=toPx(mu[0]-v[0]*L/70, mu[1]+v[1]*L/70);
      var q1=toPx(mu[0]+v[0]*L/70, mu[1]-v[1]*L/70);
      ctx.strokeStyle=col; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(q0[0],q0[1]); ctx.lineTo(q1[0],q1[1]); ctx.stroke();
    }
    axis(e.v2,e.l2,'#64748b');
    axis(e.v1,e.l1,'#f87171');
    // 标注
    ctx.fillStyle='#e6f0f5'; ctx.font='12px sans-serif';
    ctx.fillText('红：PC1（方差最大方向）', 20, 24);
    ctx.fillText('灰：PC2（正交）　黄点：均值', 20, 40);
  }

  function refresh(){
    var a=pts(), mu=mean(a), C=cov(a,mu), e=eig(C);
    var tot=e.l1+e.l2;
    var out='均值 μ = ['+mu[0].toFixed(2)+', '+mu[1].toFixed(2)+']\n';
    out+='协方差阵 C =\n  ['+C[0][0].toFixed(3)+'  '+C[0][1].toFixed(3)+']\n  ['+C[1][0].toFixed(3)+'  '+C[1][1].toFixed(3)+']\n';
    out+='特征值 λ1='+e.l1.toFixed(3)+'(占'+(e.l1/tot*100).toFixed(1)+'%)  λ2='+e.l2.toFixed(3)+'(占'+(e.l2/tot*100).toFixed(1)+'%)\n';
    out+='PC1 方向 = ['+e.v1[0].toFixed(2)+', '+e.v1[1].toFixed(2)+']\n';
    if(tot>0 && e.l2/tot<0.05) out+='→ λ2≈0，数据几乎落在一条直线上（二维可压成一维）';
    document.getElementById('pcaOut').textContent=out;
    draw();
  }

  function bind(){
    document.getElementById('pcaData').addEventListener('change',function(){ key=this.value; refresh(); });
  }
  bind(); refresh();

  var mo = window.MutationObserver ? new MutationObserver(function(){ draw(); }) : null;
  if(mo && box.parentElement) mo.observe(box.parentElement, {attributes:true, subtree:true});
  window.addEventListener('resize', function(){ draw(); });
})();
