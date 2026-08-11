(function(){
    var box=document.getElementById('svDemo'); if(!box) return;
    var cv=document.getElementById('svCanvas'); if(!cv) return;
    var ctx=cv.getContext('2d');
    var W=cv.width, H=cv.height, m=28;
    var scenes={
      L:[[0,0],[40,0],[40,20],[20,20],[20,40],[0,40]],
      part:[[8,10],[46,7],[60,24],[44,42],[20,44],[4,28]]
    };
    var base={}; for(var k in scenes) base[k]=scenes[k].map(function(p){return p.slice();});
    var scene='L';
    var verts=base.L.map(function(p){return p.slice();});
    var worldW=64, worldH=52;
    var scale=Math.min((W-2*m)/worldW,(H-2*m)/worldH);
    function toPx(p){return [m+p[0]*scale, H-m-p[1]*scale];}
    function fromPx(px,py){return [(px-m)/scale,(H-py-m)/scale];}
    function clamp(v,lo,hi){return v<lo?lo:(v>hi?hi:v);}
    var drag=-1, playing=false, step=-1, sum=0, rafTimer=null;
    var termEl=document.getElementById('svTerm');
    var sumEl=document.getElementById('svSum');
    var areaEl=document.getElementById('svArea');
    function shoelace(v){var s=0;for(var i=0;i<v.length;i++){var a=v[i],b=v[(i+1)%v.length];s+=a[0]*b[1]-b[0]*a[1];}return s;}
    function fmt(n){return (Math.round(n*100)/100).toString();}
    function draw(){
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle='#0a121b'; ctx.fillRect(0,0,W,H);
      ctx.strokeStyle='rgba(120,160,200,0.10)'; ctx.lineWidth=1;
      for(var gx=0; gx<=worldW; gx+=8){var X=m+gx*scale; ctx.beginPath();ctx.moveTo(X,m);ctx.lineTo(X,H-m);ctx.stroke();}
      for(var gy=0; gy<=worldH; gy+=8){var Y=H-m-gy*scale; ctx.beginPath();ctx.moveTo(m,Y);ctx.lineTo(W-m,Y);ctx.stroke();}
      ctx.strokeStyle='rgba(150,180,210,0.35)'; ctx.lineWidth=1.4;
      var o=toPx([0,0]); ctx.beginPath();ctx.moveTo(m,o[1]);ctx.lineTo(W-m,o[1]);ctx.stroke();
      ctx.beginPath();ctx.moveTo(o[0],m);ctx.lineTo(o[0],H-m);ctx.stroke();
      if(playing||step>=0){
        for(var i=0;i<=step && i<verts.length;i++){
          var a=verts[i], b=verts[(i+1)%verts.length];
          var t=a[0]*b[1]-b[0]*a[1];
          var pa=toPx(a), pb=toPx(b);
          ctx.beginPath(); ctx.moveTo(o[0],o[1]); ctx.lineTo(pa[0],pa[1]); ctx.lineTo(pb[0],pb[1]); ctx.closePath();
          ctx.fillStyle = t>=0 ? 'rgba(34,197,94,0.30)' : 'rgba(239,68,68,0.30)';
          ctx.fill();
        }
      }
      ctx.beginPath();
      for(var i=0;i<verts.length;i++){var p=toPx(verts[i]); if(i===0)ctx.moveTo(p[0],p[1]); else ctx.lineTo(p[0],p[1]);}
      ctx.closePath();
      ctx.fillStyle='rgba(91,155,213,0.18)'; ctx.fill();
      ctx.strokeStyle='#5b9bd5'; ctx.lineWidth=2.2; ctx.stroke();
      if(step>=0 && step<verts.length){
        var a=verts[step], b=verts[(step+1)%verts.length];
        var pa=toPx(a), pb=toPx(b);
        ctx.strokeStyle='#fbbf24'; ctx.lineWidth=3; ctx.beginPath();ctx.moveTo(pa[0],pa[1]);ctx.lineTo(pb[0],pb[1]);ctx.stroke();
      }
      for(var i=0;i<verts.length;i++){
        var p=toPx(verts[i]);
        ctx.beginPath(); ctx.arc(p[0],p[1], i===drag?7:5, 0, Math.PI*2);
        ctx.fillStyle = i===drag? '#fbbf24':'#e8f0fb'; ctx.fill();
        ctx.lineWidth=1.5; ctx.strokeStyle='#1e5aa8'; ctx.stroke();
        ctx.beginPath();ctx.moveTo(p[0]-9,p[1]);ctx.lineTo(p[0]+9,p[1]);ctx.moveTo(p[0],p[1]-9);ctx.lineTo(p[0],p[1]+9);ctx.strokeStyle='rgba(232,240,251,0.5)';ctx.lineWidth=1;ctx.stroke();
      }
      ctx.fillStyle='rgba(200,220,240,0.7)'; ctx.font='12px Consolas,monospace';
      ctx.fillText('高精地图坐标系 (米)', m+4, m+14);
    }
    function updateReadout(){
      var s=shoelace(verts);
      sumEl.textContent=fmt(s);
      areaEl.textContent=fmt(Math.abs(s)/2);
      if(step<0){ termEl.innerHTML='—'; }
    }
    function play(){
      if(playing) return;
      playing=true; step=-1; sum=0;
      termEl.innerHTML='—'; sumEl.textContent='0';
      rafTimer=setInterval(function(){
        step++;
        if(step>=verts.length){
          clearInterval(rafTimer); playing=false; step=-1; updateReadout();
          termEl.innerHTML='Σ 完成 → S = ½|Σ|';
          draw(); return;
        }
        var a=verts[step], b=verts[(step+1)%verts.length];
        var t=a[0]*b[1]-b[0]*a[1];
        sum+=t;
        termEl.innerHTML='第 '+ (step+1) +' 项 = '+ fmt(a[0])+'×'+fmt(b[1])+' − '+fmt(b[0])+'×'+fmt(a[1])+' = <span class="'+(t>=0?'sv-term-pos':'sv-term-neg')+'">'+fmt(t)+'</span>';
        sumEl.textContent=fmt(sum);
        draw();
      }, 650);
    }
    function reset(){
      verts=base[scene].map(function(p){return p.slice();});
      step=-1; playing=false; if(rafTimer)clearInterval(rafTimer);
      updateReadout(); draw();
    }
    function pos(e){var r=cv.getBoundingClientRect();var cx=(e.touches?e.touches[0].clientX:e.clientX)-r.left;var cy=(e.touches?e.touches[0].clientY:e.clientY)-r.top;return [cx*(W/r.width), cy*(H/r.height)];}
    function down(e){var p=pos(e);for(var i=0;i<verts.length;i++){var pp=toPx(verts[i]);if(Math.hypot(pp[0]-p[0],pp[1]-p[1])<11){drag=i;playing=false;step=-1;if(rafTimer)clearInterval(rafTimer);break;}} e.preventDefault();}
    function move(e){if(drag<0)return;var p=pos(e);var wp=fromPx(p[0],p[1]);verts[drag]=[clamp(wp[0],0,worldW),clamp(wp[1],0,worldH)];termEl.innerHTML='拖动中…';updateReadout();draw();e.preventDefault();}
    function up(){drag=-1;}
    cv.addEventListener('mousedown',down); cv.addEventListener('mousemove',move); window.addEventListener('mouseup',up);
    cv.addEventListener('touchstart',down,{passive:false}); cv.addEventListener('touchmove',move,{passive:false}); window.addEventListener('touchend',up);
    document.getElementById('svPlay').addEventListener('click',play);
    document.getElementById('svReset').addEventListener('click',reset);
    document.getElementById('svScene').addEventListener('change',function(e){scene=e.target.value;reset();});
    updateReadout(); draw();
  })();