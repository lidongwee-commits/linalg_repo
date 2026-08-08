
/* ---------- KaTeX 本地渲染 ---------- */
function fixVdots(root){
  // \vdots 在 KaTeX 中渲染为 <span class="mord"><span class="mord">⋮</span><span class="mord rule" ...></span></span>
  // .mord.rule 是撑高用的占位条；其外层 .mord 在 vlist 行内定位中偏下，会掉进下一行．
  // 直接给外层 .mord 加 display:inline-block + transform 上移，绕开 :has() 兼容问题，且 transform 不被 vlist 吞掉．
  if(!root || !root.querySelectorAll) return;
  root.querySelectorAll('.katex-html .mord.rule').forEach(function(rule){
    var m=rule.parentElement;
    if(m && m.classList && m.classList.contains('mord')){
      m.style.display='inline-block';
      m.style.transform='translateY(-1.7em)';
      m.style.verticalAlign='middle';
    }
  });
}
window.addEventListener('DOMContentLoaded',function(){
  if(window.renderMathInElement){
    var katexOpts={delimiters:[
      {left:'$$',right:'$$',display:true},
      {left:'\\[',right:'\\]',display:true},
      {left:'\\(',right:'\\)',display:false}
    ],throwOnError:false,macros:{'\\xlongequal':'\\overset{#1}{=\\!=\\!=\\!=}'},ignoredClasses:['katex','katex-lazy']};

    // ===== 折叠块公式懒渲染：预渲染 + 增量展开 =====
    // 把每个未展开的 details 标记为 katex-lazy：渲染器会忽略它，避免首次加载大量 DOM。
    var lazyBlocks=[];
    document.querySelectorAll('details:not([open])').forEach(function(d){
      d.classList.add('katex-lazy');
      // summary 里的公式必须立即渲染，否则标题处公式点开才出现。
      var sm=d.querySelector('summary');
      if(sm){
        d.classList.remove('katex-lazy');
        try{ renderMathInElement(sm,katexOpts); fixVdots(sm); }catch(e){}
        d.classList.add('katex-lazy');
      }
      lazyBlocks.push(d);
    });

    // 先渲染正文区域中不在折叠块内的公式（已经可见）。
    renderMathInElement(document.body,katexOpts);
    fixVdots(document.body);

    // 用 requestAnimationFrame 把 children 分批渲染，避免单一大块阻塞主线程。
    function renderChildrenIncremental(root, done){
      var children=Array.prototype.slice.call(root.children).filter(function(c){ return c.tagName!=='SUMMARY'; });
      var idx=0, BATCH=2; // 每帧最多处理 2 个直接子元素；实测每子元素通常 <25ms
      function next(){
        var start=performance.now();
        while(idx<children.length){
          renderMathInElement(children[idx], katexOpts);
          fixVdots(children[idx]);
          idx++;
          // 如果本帧已用掉 >12ms，则让出主线程。
          if((idx % BATCH)===0 && performance.now()-start>12){
            requestAnimationFrame(next);
            return;
          }
        }
        if(done) done();
      }
      requestAnimationFrame(next);
    }

    lazyBlocks.forEach(function(d){
      var rendered=false;
      function ensureRender(){
        if(rendered) return;
        rendered=true;
        d.classList.remove('katex-lazy');
        renderChildrenIncremental(d);
      }
      // 用户点击展开时，若还没预渲染，则分片渲染。
      d.addEventListener('toggle', function(){
        if(d.open) ensureRender();
      });
      d._ensureRender=ensureRender;
    });

    // 预渲染：页面加载后，当折叠块接近视口 200px 时提前开始渲染，
    // 这样学生正常滚动到该区域再点开时，公式已经准备好了。
    var io=('IntersectionObserver' in window)
      ? new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if(e.isIntersecting && e.target._ensureRender){
              e.target._ensureRender();
              io.unobserve(e.target);
            }
          });
        }, {rootMargin:'200px 0px 200px 0px', threshold:0})
      : null;
    if(io){
      lazyBlocks.forEach(function(d){ io.observe(d); });
    } else {
      // 回退：不支持 IntersectionObserver 的浏览器在页面完全加载后整体预渲染
      if('requestIdleCallback' in window){
        requestIdleCallback(function(){ lazyBlocks.forEach(function(d){ d._ensureRender(); }); }, {timeout:2000});
      }
    }
  }
if(document.getElementById('cv')){ updateDet(); drawProp(); }
});

/* ---------- ① 二阶行列式几何可视化 ---------- */
const cv=document.getElementById('cv'),ctx=cv?cv.getContext('2d'):null;
const gv=id=>{const e=document.getElementById(id); const v=e?parseFloat(e.value):NaN; return isNaN(v)?0:v;};
function drawMatrix(a,b,c,d,t){
  const A=1+(a-1)*t,B=b*t,C=c*t,D=1+(d-1)*t;
  const W=cv.width,H=cv.height,ox=W/2,oy=H/2;
  // 动态缩放：保证平行四边形始终在画布内留出边距
  const maxE=Math.max(1, Math.abs(A), Math.abs(B), Math.abs(A+B), Math.abs(C), Math.abs(D), Math.abs(C+D));
  const s=Math.min(50, 0.4*W/maxE);
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle='#1c2c3a';ctx.lineWidth=1;
  const range=Math.min(20, Math.floor(ox/s));
  for(let i=-range;i<=range;i++){
    ctx.beginPath();ctx.moveTo(ox+i*s,0);ctx.lineTo(ox+i*s,H);ctx.stroke();
    ctx.beginPath();ctx.moveTo(0,oy+i*s);ctx.lineTo(W,oy+i*s);ctx.stroke();
  }
  ctx.strokeStyle='#3a5266';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(W,oy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox,H);ctx.stroke();
  ctx.fillStyle='rgba(120,160,190,.18)';ctx.fillRect(ox,oy-s,s,s);
  ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox+A*s,oy-C*s);
  ctx.lineTo(ox+(A+B)*s,oy-(C+D)*s);ctx.lineTo(ox+B*s,oy-D*s);ctx.closePath();
  ctx.fillStyle='rgba(45,212,191,.28)';ctx.strokeStyle='#5b9bd5';ctx.lineWidth=2;ctx.fill();ctx.stroke();
  arrow(ox,oy,ox+A*s,oy-C*s,'#fbbf24');arrow(ox,oy,ox+B*s,oy-D*s,'#f472b6');
}
function arrow(x1,y1,x2,y2,col){
  ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=2.5;
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  const ang=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath();ctx.moveTo(x2,y2);
  ctx.lineTo(x2-9*Math.cos(ang-0.4),y2-9*Math.sin(ang-0.4));
  ctx.lineTo(x2-9*Math.cos(ang+0.4),y2-9*Math.sin(ang+0.4));ctx.closePath();ctx.fill();
}
function updateDet(){
  const a=gv('a'),b=gv('b'),c=gv('c'),d=gv('d'),det=a*d-b*c;
  document.getElementById('detOut').innerHTML=
    `det = ${a}×${d} − ${b}×${c} = <b>${det}</b>　（面积 = ${Math.abs(det)}）`;
  if(ctx) drawMatrix(a,b,c,d,1);
}
let anim=null;
function playTransform(){
  cancelAnimationFrame(anim);
  const a=gv('a'),b=gv('b'),c=gv('c'),d=gv('d');let t=0;
  (function step(){t+=0.04;if(t>1)t=1;drawMatrix(a,b,c,d,t);if(t<1)anim=requestAnimationFrame(step);})();
}
function resetM(){['a','b','c','d'].forEach(id=>{const e=document.getElementById(id); if(e) e.value=(id==='a'||id==='d')?1:0;});updateDet();}
['a','b','c','d'].forEach(id=>{const e=document.getElementById(id); if(e) e.addEventListener('input',updateDet);});

/* ---------- ② 三阶行列式（按第一行展开） ---------- */
function calcDet3(){
  const m=[...document.querySelectorAll('#m3 input')].map(x=>parseFloat(x.value)||0);
  const[a,b,c,d,e,f,g,h,i]=m;
  const det=a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
  document.getElementById('det3Out').innerHTML=
    `按第一行展开（降阶）：<br>det = ${a}(${e}·${i}−${f}·${h}) − ${b}(${d}·${i}−${f}·${g}) + ${c}(${d}·${h}−${e}·${g}) = <b>${det}</b>`;
}

/* ---------- ④ 性质探索器 ---------- */
let P=[[2,1,0],[1,3,1],[0,2,1]];
function det3(M){
  return M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1])
        -M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0])
        +M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0]);
}
function renderP(){
  const ins=document.querySelectorAll('#mP input');let k=0;
  for(let i=0;i<3;i++)for(let j=0;j<3;j++){ins[k++].value=P[i][j];}
  const el=document.getElementById('detP'); if(el) el.textContent=det3(P);
}
function drawProp(){renderP();}
function swapRows(){const t=P[0];P[0]=P[1];P[1]=t;renderP();
  document.getElementById('propOut').innerHTML='交换第1、2行 → det <b>变号</b>：当前 det = <b>'+det3(P)+'</b>';}
function addRow(){for(let j=0;j<3;j++)P[1][j]+=2*P[0][j];renderP();
  document.getElementById('propOut').innerHTML='第2行 + 2×第1行 → det <b>不变</b>：当前 det = <b>'+det3(P)+'</b>';}
function resetP(){P=[[2,1,0],[1,3,1],[0,2,1]];renderP();
  document.getElementById('propOut').innerHTML='当前 det = <b id="detP">'+det3(P)+'</b>';}

/* ---------- ⑤ 克拉默法则 ---------- */
function parseRow(id){return document.getElementById(id).value.trim().split(/\s+/).map(Number);}
function cramer(){
  const A=[parseRow('c1'),parseRow('c2'),parseRow('c3')],b=parseRow('cb');
  if(A.some(r=>r.length!==3)||b.length!==3){document.getElementById('cramerOut').innerHTML='请每行输入 3 个数．';return;}
  const dA=det3(A);
  if(Math.abs(dA)<1e-9){document.getElementById('cramerOut').innerHTML='D = 0，克拉默法则不适用（方程组无解或有无穷多解）．';return;}
  const Aj=[A.map(r=>r.slice()),A.map(r=>r.slice()),A.map(r=>r.slice())];
  for(let i=0;i<3;i++)Aj[0][i][0]=b[i];
  for(let i=0;i<3;i++)Aj[1][i][1]=b[i];
  for(let i=0;i<3;i++)Aj[2][i][2]=b[i];
  const x=[det3(Aj[0])/dA,det3(Aj[1])/dA,det3(Aj[2])/dA];
  document.getElementById('cramerOut').innerHTML=
    `D = <b>${dA}</b><br>D₁=${det3(Aj[0])}，x₁=${x[0].toFixed(3)}<br>D₂=${det3(Aj[1])}，x₂=${x[1].toFixed(3)}<br>D₃=${det3(Aj[2])}，x₃=${x[2].toFixed(3)}`;
}

/* ---------- 工具：格式化矩阵为等宽文本 ---------- */
function fmtMat(M){
  const rows=M.map(r=>r.map(v=>{
    const x=Math.abs(v)<1e-9?0:v;
    return (Math.round(x*1000)/1000).toString().padStart(8);
  }).join(' '));
  return rows.join('\n');
}

/* ---------- 工具：n 阶行列式（代数余子式递归，适用于 n<=5） ---------- */
function detN(M){
  const n=M.length;
  if(n===1) return M[0][0];
  if(n===2) return M[0][0]*M[1][1]-M[0][1]*M[1][0];
  let d=0;
  for(let j=0;j<n;j++){
    const sub=M.slice(1).map(r=>r.filter((_,k)=>k!==j));
    d+=((j%2===0)?1:-1)*M[0][j]*detN(sub);
  }
  return d;
}

/* ---------- 工具：伴随矩阵（代数余子式转置） ---------- */
function adjN(M){
  const n=M.length, A=[];
  for(let i=0;i<n;i++){
    A.push([]);
    for(let j=0;j<n;j++){
      const sub=M.filter((_,r)=>r!==j).map(r=>r.filter((_,c)=>c!==i));
      const sign=((i+j)%2===0)?1:-1;
      A[i].push(sign*detN(sub));
    }
  }
  return A;
}

/* ============ ① 图像亮度调整 imageBrightness() ============ */
const IMG_DEFAULT=[30,60,90,120, 60,90,120,150, 90,120,150,180, 120,150,180,210];
function initImageGrid(){
  const box=document.getElementById('imgGrid');
  if(!box) return;
  box.innerHTML='';
  for(let k=0;k<16;k++){
    const inp=document.createElement('input');
    inp.type='number'; inp.min='0'; inp.max='255'; inp.step='1';
    inp.id='imgPx'+k;
    inp.value=IMG_DEFAULT[k];
    inp.addEventListener('input',imageBrightness);
    box.appendChild(inp);
  }
  imageBrightness();
}
function drawPixelGrid(container, data){
  if(!container) return;
  container.innerHTML='';
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
      const v=Math.max(0,Math.min(255,Math.round(data[i][j])));
      const cell=document.createElement('div');
      cell.className='px-cell';
      cell.style.background='rgb('+v+','+v+','+v+')';
      cell.style.color=(v<=120)?'#fff':'#111';
      cell.textContent=v;
      container.appendChild(cell);
    }
  }
}
function imageBrightness(){
  const out=document.getElementById('imgOut');
  if(!out) return;
  const b=parseFloat(document.getElementById('imgB').value)||0;
  const k=parseFloat(document.getElementById('imgK').value)||1;
  const bv=document.getElementById('imgBval'), kv=document.getElementById('imgKval');
  if(bv) bv.textContent=b;
  if(kv) kv.textContent=k.toFixed(1);
  const M=[];
  for(let i=0;i<4;i++){
    const row=[];
    for(let j=0;j<4;j++){
      const v=parseFloat(document.getElementById('imgPx'+(i*4+j)).value)||0;
      let nv=Math.round(k*v+b);
      nv=Math.max(0,Math.min(255,nv));   // 截断到 [0,255]
      row.push(nv);
    }
    M.push(row);
  }
  drawPixelGrid(document.getElementById('imgVisAfter'),M);
  let head='亮度偏移 b='+b+'，对比度 k='+k.toFixed(1)+'\n结果矩阵（4x4，越大越亮）：\n';
  out.textContent=head+fmtMat(M);
}

/* ============ ② 矩阵乘法计算器 matrixMultiplyCalc() ============ */
let MM_A=[], MM_B=[], MM_C=[];
function buildMM(){
  const m=Math.max(1,Math.min(4,parseInt(document.getElementById('mm').value)||2));
  const s=Math.max(1,Math.min(4,parseInt(document.getElementById('ms').value)||3));
  const n=Math.max(1,Math.min(4,parseInt(document.getElementById('mn').value)||2));
  const ga=document.getElementById('mmA'), gb=document.getElementById('mmB'), gc=document.getElementById('mmC');
  if(!ga||!gb||!gc) return;
  function grid(container,r,c,prefix){
    container.innerHTML='';
    const d=document.createElement('div');
    d.className='matrix-in '+(c<=3?'m3':'m4');
    d.style.gridTemplateColumns='repeat('+c+',56px)';
    for(let i=0;i<r*c;i++){
      const inp=document.createElement('input');
      inp.type='number'; inp.step='0.1'; inp.value='0';
      inp.id=prefix+i;
      d.appendChild(inp);
    }
    container.appendChild(d);
  }
  grid(ga,m,s,'mA');
  grid(gb,s,n,'mB');
  gc.innerHTML='<span class="muted">点击"计算 AB"生成结果</span>';
}
function readMat(prefix,r,c){
  const M=[];
  for(let i=0;i<r;i++){
    const row=[];
    for(let j=0;j<c;j++) row.push(parseFloat(document.getElementById(prefix+(i*c+j)).value)||0);
    M.push(row);
  }
  return M;
}
function matrixMultiplyCalc(){
  const out=document.getElementById('mmOut');
  const gc=document.getElementById('mmC');
  if(!out||!gc) return;
  const m=Math.max(1,Math.min(4,parseInt(document.getElementById('mm').value)||2));
  const s=Math.max(1,Math.min(4,parseInt(document.getElementById('ms').value)||3));
  const n=Math.max(1,Math.min(4,parseInt(document.getElementById('mn').value)||2));
  const A=readMat('mA',m,s), B=readMat('mB',s,n);
  MM_A=A; MM_B=B;
  const C=[];
  for(let i=0;i<m;i++){
    const row=[];
    for(let j=0;j<n;j++){
      let sum=0;
      for(let k=0;k<s;k++) sum+=A[i][k]*B[k][j];
      row.push(sum);
    }
    C.push(row);
  }
  MM_C=C;
  // 渲染 C 为可点击单元
  gc.innerHTML='';
  const d=document.createElement('div');
  d.className='matrix-in '+(n<=3?'m3':'m4');
  d.style.gridTemplateColumns='repeat('+n+',56px)';
  for(let i=0;i<m;i++) for(let j=0;j<n;j++){
    const b=document.createElement('button');
    b.className='btn'; b.style.margin='0';
    const x=Math.round(C[i][j]*1000)/1000;
    b.textContent=x;
    b.onclick=function(){ showCell(i,j); };
    d.appendChild(b);
  }
  gc.appendChild(d);
  out.textContent='已计算 C=AB（'+m+'x'+n+'）．点击 C 中任一格查看该行·列展开式．';
}
function showCell(i,j){
  const out=document.getElementById('mmOut');
  if(!out) return;
  const A=MM_A, B=MM_B, s=A[0].length;
  let parts=[], terms=[];
  for(let k=0;k<s;k++){
    parts.push('a'+(i+1)+(k+1)+'·b'+(k+1)+(j+1));
    terms.push(A[i][k]+'·'+B[k][j]);
  }
  out.textContent='C_'+(i+1)+(j+1)+' = 行'+(i+1)+' · 列'+(j+1)+'\n'
    +'  = '+parts.join(' + ')+'\n'
    +'  = '+terms.join(' + ')+'\n'
    +'  = '+MM_C[i][j];
}

/* ============ ③ n 阶逆矩阵计算器 calcInvN() ============ */
function buildInv(){
  const n=Math.max(2,Math.min(5,parseInt(document.getElementById('invN').value)||3));
  const box=document.getElementById('invGrid');
  if(!box) return;
  box.innerHTML='';
  const d=document.createElement('div');
  d.className='matrix-in '+(n<=3?'m3':'m4');
  d.style.gridTemplateColumns='repeat('+n+',56px)';
  for(let i=0;i<n*n;i++){
    const inp=document.createElement('input');
    inp.type='number'; inp.step='0.1'; inp.value='0';
    inp.id='inv'+i;
    d.appendChild(inp);
  }
  box.appendChild(d);
}
function calcInvN(){
  const out=document.getElementById('invOut');
  if(!out) return;
  const n=Math.max(2,Math.min(5,parseInt(document.getElementById('invN').value)||3));
  const inp=document.querySelectorAll('#invGrid input');
  if(inp.length!==n*n){ out.textContent='请先点击"生成矩阵"以生成 '+n+'×'+n+' 输入框．'; return; }
  const M=[]; let k=0;
  for(let i=0;i<n;i++){ const row=[]; for(let j=0;j<n;j++) row.push(parseFloat(inp[k++].value)||0); M.push(row); }
  const d=detN(M);
  if(Math.abs(d)<1e-9){ out.textContent='|A| = '+d.toFixed(4)+'，矩阵不可逆（奇异）．'; return; }
  const Ad=adjN(M);
  let html='|A| = '+d.toFixed(4)+'\nA⁻¹ = (1/'+d.toFixed(4)+') · A* =\n';
  const rows=[];
  for(let i=0;i<n;i++){
    const r=[];
    for(let j=0;j<n;j++){ const v=Ad[i][j]/d; r.push((Math.abs(v)<1e-9?0:Math.round(v*10000)/10000).toString().padStart(8)); }
    rows.push(r.join(' '));
  }
  html+=rows.join('\n');
  out.textContent=html;
}

/* ============ ④ 初等行变换演示 elementaryStep() ============ */
/* 从 textarea 解析矩阵：每行一行，元素用空格/逗号分隔；行长不一致或含非数则返回 null */
function parseMatText(id){
  const el=document.getElementById(id);
  if(!el) return null;
  const rows=el.value.trim().split(/\n+/).map(function(r){return r.trim();}).filter(function(r){return r.length;});
  if(!rows.length) return null;
  const M=rows.map(function(r){return r.split(/[\s,，;；]+/).filter(function(s){return s.length;}).map(Number);});
  const n=M[0].length;
  if(!n || M.some(function(r){return r.length!==n;})) return null;
  return M;
}
function elementaryStep(){
  const out=document.getElementById('esOut');
  if(!out) return;
  let M=parseMatText('esMat');
  if(!M || !M.length || M.some(r=>r.some(x=>isNaN(x)))){ out.textContent='输入格式有误，请每行用空格或逗号分隔数字．'; return; }
  const op=document.getElementById('esOp').value;
  const i=parseInt(document.getElementById('esI').value)||1;
  const j=parseInt(document.getElementById('esJ').value)||1;
  const k=parseFloat(document.getElementById('esK').value)||0;
  const m=M.length, n=M[0].length;
  if(i<1||i>m||j<1||j>m){ out.textContent='行号 i,j 应在 1~'+m+' 之间．'; return; }
  const desc={swap:'交换 r'+i+' ↔ r'+j, scale:'r'+i+' × '+k, add:'r'+i+' + '+k+'·r'+j}[op];
  if(op==='swap'){
    if(i===j){ out.textContent='交换同一行无效．'; return; }
    const t=M[i-1]; M[i-1]=M[j-1]; M[j-1]=t;
  } else if(op==='scale'){
    if(k===0){ out.textContent='乘 0 会使整行清零，通常无意义，已照执行．'; }
    M[i-1]=M[i-1].map(v=>v*k);
  } else if(op==='add'){
    M[i-1]=M[i-1].map((v,idx)=>v+k*M[j-1][idx]);
  }
  out.textContent='操作：'+desc+'\n变换后矩阵：\n'+fmtMat(M);
}

/* ============ ⑤ §2.7 图像处理演示 + 低秩近似压缩演示 ============ */
/* 内置测试图：s×s 灰度矩阵（对角渐变 + 亮圆 + 暗方块） */
function ipTestImage(s){
  const A=[];
  for(let i=0;i<s;i++){ const row=[];
    for(let j=0;j<s;j++){
      let v=60+140*(i+j)/(2*s-2);
      const dx=i-s*0.38, dy=j-s*0.62;
      if(dx*dx+dy*dy < (s*0.22)*(s*0.22)) v=230;
      if(i>s*0.62&&i<s*0.88&&j>s*0.10&&j<s*0.36) v=25;
      row.push(v);
    } A.push(row);} return A;
}
function ipClamp(v){return Math.max(0,Math.min(255,v));}
function ipConv3(A,K,absv){
  const m=A.length,n=A[0].length,B=[];
  for(let i=0;i<m;i++){const row=[];
    for(let j=0;j<n;j++){let s=0;
      for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){
        const ii=Math.max(0,Math.min(m-1,i+a)), jj=Math.max(0,Math.min(n-1,j+b));
        s+=K[a+1][b+1]*A[ii][jj];
      }
      row.push(absv?Math.abs(s):s);
    } B.push(row);} return B;
}
function ipDrawCanvas(id,A){
  const cv=document.getElementById(id); if(!cv)return;
  const ctx=cv.getContext('2d'), m=A.length,n=A[0].length;
  const t=document.createElement('canvas'); t.width=n; t.height=m;
  const tc=t.getContext('2d'), img=tc.createImageData(n,m);
  for(let i=0;i<m;i++)for(let j=0;j<n;j++){
    const v=ipClamp(Math.round(A[i][j])), p=(i*n+j)*4;
    img.data[p]=v; img.data[p+1]=v; img.data[p+2]=v; img.data[p+3]=255;
  }
  tc.putImageData(img,0,0);
  ctx.imageSmoothingEnabled=(m>32);
  ctx.clearRect(0,0,cv.width,cv.height);
  ctx.drawImage(t,0,0,cv.width,cv.height);
}
/* --- 8×8 矩阵 ↔ 像素图 对照 --- */
const IP8=[[ 20, 20, 20, 20,200,200,200,200],
           [ 20, 40, 40, 40,200,220,220,200],
           [ 20, 40, 90, 90,230,230,220,200],
           [ 20, 40, 90,140,140,230,220,200],
           [ 60, 60, 90,140,140,150,150,150],
           [ 60, 80, 80,100,120,150,180,180],
           [ 60, 80,110,110,120,150,180,210],
           [ 60, 80,110,130,130,160,180,210]];
function ip8html(A){
  const m=A.length;
  let h='<div style="display:flex;gap:10px;align-items:flex-start">';
  h+='<table style="border-collapse:collapse;font:10.5px/1 ui-monospace,Menlo,monospace">';
  for(let i=0;i<m;i++){ h+='<tr>';
    for(let j=0;j<m;j++) h+='<td style="border:1px solid #e5eaf0;padding:2px 4px;text-align:right;min-width:22px">'+Math.round(A[i][j])+'</td>';
    h+='</tr>'; }
  h+='</table><div style="display:grid;grid-template-columns:repeat('+m+',17px);gap:1px">';
  for(let i=0;i<m;i++)for(let j=0;j<m;j++){
    const v=ipClamp(Math.round(A[i][j]));
    h+='<div style="width:17px;height:17px;background:rgb('+v+','+v+','+v+')"></div>';
  }
  h+='</div></div>';
  return h;
}
function ip8run(){
  const be=document.getElementById('ip8before'), af=document.getElementById('ip8after');
  if(!be||!af) return;
  const op=(document.getElementById('ip8op')||{}).value||'blur';
  be.innerHTML=ip8html(IP8);
  let B;
  if(op==='none') B=IP8.map(r=>r.slice());
  else if(op==='blur') B=ipConv3(IP8,[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]],false);
  else if(op==='edge') B=ipConv3(IP8,[[-1,0,1],[-2,0,2],[-1,0,1]],true);
  else if(op==='bright') B=IP8.map(r=>r.map(v=>ipClamp(v+60)));
  else B=IP8.map(r=>r.map(v=>ipClamp(v*1.6)));
  af.innerHTML=ip8html(B);
}
/* --- 上传图片 → 灰度矩阵 --- */
function ipFileToMat(inp,size,cb){
  const f=inp.files&&inp.files[0]; if(!f) return;
  const url=URL.createObjectURL(f), im=new Image();
  im.onload=function(){
    const c=document.createElement('canvas'); c.width=size; c.height=size;
    const cx=c.getContext('2d'); cx.drawImage(im,0,0,size,size);
    const d=cx.getImageData(0,0,size,size).data, A=[];
    for(let i=0;i<size;i++){const row=[];
      for(let j=0;j<size;j++){const p=(i*size+j)*4;
        row.push(0.299*d[p]+0.587*d[p+1]+0.114*d[p+2]);
      } A.push(row);}
    URL.revokeObjectURL(url); cb(A);
  };
  im.src=url;
}
let ipImgMat=null;
function ipApplyAll(){
  const A=ipImgMat||(ipImgMat=ipTestImage(96));
  ipDrawCanvas('ipcOrig',A);
  ipDrawCanvas('ipcBlur',ipConv3(A,[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]],false));
  const gx=ipConv3(A,[[-1,0,1],[-2,0,2],[-1,0,1]],true);
  const gy=ipConv3(A,[[-1,-2,-1],[0,0,0],[1,2,1]],true);
  ipDrawCanvas('ipcEdge',gx.map((r,i)=>r.map((v,j)=>v+gy[i][j])));
  ipDrawCanvas('ipcBright',A.map(r=>r.map(v=>ipClamp(v+60))));
}
function ipUpload(inp){ ipFileToMat(inp,96,function(A){ ipImgMat=A; ipApplyAll(); }); }
/* --- 低秩近似（截断 SVD，幂迭代 + 降阶） --- */
function lrNorm(v){let s=0;for(let i=0;i<v.length;i++)s+=v[i]*v[i];return Math.sqrt(s);}
function lrTopSVD(A,k){
  const m=A.length,n=A[0].length;
  const R=A.map(r=>r.slice()), comps=[];
  for(let c=0;c<k;c++){
    let v=new Array(n).fill(0).map(()=>Math.random()-0.5), u=new Array(m).fill(0), s=0;
    for(let it=0;it<60;it++){
      for(let i=0;i<m;i++){let t=0;for(let j=0;j<n;j++)t+=R[i][j]*v[j];u[i]=t;}
      const nu=lrNorm(u); if(nu<1e-10)break;
      for(let i=0;i<m;i++)u[i]/=nu;
      for(let j=0;j<n;j++)v[j]=0;
      for(let i=0;i<m;i++)for(let j=0;j<n;j++)v[j]+=R[i][j]*u[i];
      s=lrNorm(v); if(s<1e-10)break;
      for(let j=0;j<n;j++)v[j]/=s;
    }
    comps.push({s:s,u:u.slice(),v:v.slice()});
    for(let i=0;i<m;i++)for(let j=0;j<n;j++)R[i][j]-=s*u[i]*v[j];
  }
  return comps;
}
let lrMat=null, lrSVDc=null;
function lrSetImage(A){
  lrMat=A;
  const kmax=Math.min(20,A.length);
  lrSVDc=lrTopSVD(A,kmax);
  const sl=document.getElementById('lrK'); if(sl){ sl.max=kmax; if(+sl.value>kmax) sl.value=kmax; }
  lrUpdate();
}
function lrUpdate(){
  if(!lrMat||!lrSVDc) return;
  const k=parseInt((document.getElementById('lrK')||{}).value)||3;
  const kv=document.getElementById('lrKv'); if(kv) kv.textContent=k;
  const m=lrMat.length, n=lrMat[0].length;
  const Ak=[]; for(let i=0;i<m;i++) Ak.push(new Array(n).fill(0));
  for(let c=0;c<Math.min(k,lrSVDc.length);c++){
    const cm=lrSVDc[c];
    for(let i=0;i<m;i++){const su=cm.s*cm.u[i];
      for(let j=0;j<n;j++) Ak[i][j]+=su*cm.v[j];}
  }
  let e2=0,a2=0;
  const Err=[];
  for(let i=0;i<m;i++){const row=[];
    for(let j=0;j<n;j++){const d=lrMat[i][j]-Ak[i][j];
      e2+=d*d; a2+=lrMat[i][j]*lrMat[i][j]; row.push(Math.abs(d)*4);}
    Err.push(row);}
  ipDrawCanvas('lrOrig',lrMat);
  ipDrawCanvas('lrComp',Ak);
  ipDrawCanvas('lrErr',Err);
  const full=m*n, low=k*(m+n+1);
  const out=document.getElementById('lrOut');
  if(out) out.textContent=
    '一般矩阵（满秩存储）：'+m+'×'+n+' = '+full+' 个数\n'
    +'秩 '+k+' 近似存储：'+k+'×('+m+'+'+n+'+1) = '+low+' 个数（压缩为 '+(100*low/full).toFixed(1)+'%）\n'
    +'相对误差 ‖A−Ak‖F/‖A‖F = '+(100*Math.sqrt(e2/a2)).toFixed(2)+'%';
}
function lrUpload(inp){ ipFileToMat(inp,64,function(A){ lrSetImage(A); }); }

/* ---------- 初始化：在 DOM 就绪后构建默认控件 ---------- */
window.addEventListener('DOMContentLoaded',function(){
  if(document.getElementById('imgGrid')) initImageGrid();
  if(document.getElementById('mmA'))     buildMM();
  if(document.getElementById('invGrid')) buildInv();
  if(document.getElementById('e5svg') && typeof e5draw==='function') e5draw();
if(document.getElementById('evsvg') && typeof evDraw==='function') evDraw();
  if(document.getElementById('ip8before')) ip8run();
  if(document.getElementById('ipcOrig'))   ipApplyAll();
  if(document.getElementById('lrOrig'))    lrSetImage(ipTestImage(40));
});

/* ========== 第三章 交互 ========== */
// ============================================================
//  第三章 向量组 · 交互控件
//  所有函数与 id 均以 c3 / v3 前缀，避免与主文件（calcInvN、
//  buildInv、matrixMultiplyCalc、gradeQuiz …）冲突．
// ============================================================

// ---------- 小工具 ----------
function c3round(x) {
  if (Math.abs(x) < 1e-9) return 0;
  return Math.round(x * 1e6) / 1e6;
}

// 高斯消元（化为行最简形 RREF），返回 {R, pivots}
function c3rref(mat) {
  const M = mat.map(function (r) { return r.slice(); });
  const n = M.length, m = M[0].length;
  let r = 0;
  const pivots = [];
  for (let c = 0; c < m && r < n; c++) {
    let p = -1;
    for (let i = r; i < n; i++) {
      if (Math.abs(M[i][c]) > 1e-9) { p = i; break; }
    }
    if (p === -1) continue;
    const tmp = M[r]; M[r] = M[p]; M[p] = tmp;
    const pv = M[r][c];
    for (let j = 0; j < m; j++) M[r][j] /= pv;
    for (let i = 0; i < n; i++) {
      if (i !== r) {
        const f = M[i][c];
        if (Math.abs(f) > 1e-9) {
          for (let j = 0; j < m; j++) M[i][j] -= f * M[r][j];
        }
      }
    }
    pivots.push(c);
    r++;
  }
  return { R: M, pivots: pivots };
}

// 3 阶行列式
function c3det3(A) {
  return A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1])
       - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0])
       + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
}

function c3fmtVec(v) {
  return "(" + v.map(function (x) { return c3round(x); }).join(", ") + ")^T";
}
function c3fmtMat(M) {
  return M.map(function (row) {
    return "  [" + row.map(function (x) { return c3round(x); }).join(", ") + "]";
  }).join("\n");
}


// ---------- 实验一：线性相关性判定器（自定义 n、m） ----------
function c3buildDepGrid() {
  const n = Math.max(1, Math.min(6, parseInt(document.getElementById("c3nDim").value) || 3));
  const m = Math.max(1, Math.min(8, parseInt(document.getElementById("c3mCnt").value) || 3));
  document.getElementById("c3nDim").value = n;
  document.getElementById("c3mCnt").value = m;
  let html = "";
  for (let r = 0; r < n; r++) {
    html += "<div class='row' style='margin:2px 0'>";
    for (let c = 0; c < m; c++) {
      html += "<input class='matrix-in' id='c3d_" + r + "_" + c +
              "' type='number' step='any' value='0' style='width:46px;margin:0 2px;text-align:center'>";
    }
    html += "</div>";
  }
  document.getElementById("c3depGrid").innerHTML = html;
}

function c3depCheck() {
  const out = document.getElementById("c3depOut");
  if (!out) return;
  const n = parseInt(document.getElementById("c3nDim").value) || 3;
  const m = parseInt(document.getElementById("c3mCnt").value) || 3;
  const vecs = [];
  for (let c = 0; c < m; c++) {
    const col = [];
    for (let r = 0; r < n; r++) {
      const el = document.getElementById("c3d_" + r + "_" + c);
      const v = parseFloat(el && el.value !== "" ? el.value : "0");
      col.push(isNaN(v) ? 0 : v);
    }
    vecs.push(col);
  }
  const A = [];
  for (let r = 0; r < n; r++) {
    const row = [];
    for (let c = 0; c < m; c++) row.push(vecs[c][r]);
    A.push(row);
  }
  const names = [];
  for (let c = 0; c < m; c++) names.push("α" + (c + 1));
  let s = "输入的 " + m + " 个 " + n + " 维列向量：\n";
  for (let c = 0; c < m; c++) s += names[c] + " = " + c3fmtVec(vecs[c]) + "\n";
  s += "\n以这些向量为列构成矩阵 A (" + n + "×" + m + ")：\n";
  s += c3fmtMat(A) + "\n\n";
  const res = c3rref(A);
  const rank = res.pivots.length;
  if (n === m) {
    const det = c3detN(A);
    s += "行列式 |A| = " + c3round(det) + "\n";
  }
  s += "秩 R(A) = " + rank + "，向量个数 m = " + m + "\n";
  if (rank < m) {
    s += "结论：R(A) < m，故 α₁,…,α" + m + " 线性相关．\n\n";
    const piv = res.pivots, free = [];
    for (let c = 0; c < m; c++) if (piv.indexOf(c) === -1) free.push(c);
    if (rank === 0) {
      s += "（所有向量均为零向量，R(A)=0，显然线性相关；每个向量都可由其余向量以系数 0 表示．）";
    } else if (free.length >= 1) {
      const fc = free[0];
      const parts = [];
      for (let k = 0; k < piv.length; k++) {
        const pc = piv[k];
        const coef = c3round(res.R[pc][fc]);
        parts.push((coef >= 0 ? "" : "-") + Math.abs(coef) + names[pc]);
      }
      s += "由行最简形，其中一个线性关系为：\n  " + names[fc] + " = " +
           parts.join(" + ").replace(/\+ -/g, "- ") + "\n";
      s += "（即第 " + (fc + 1) + " 个向量可由其余向量线性表示．）";
    } else {
      s += "（矩阵秩更小，所有向量共线于低维子空间．）";
    }
  } else {
    s += "结论：R(A) = m，故 α₁,…,α" + m + " 线性无关．";
    if (n === m) s += "\n（此时 |A| ≠ 0，它们构成 R^" + n + " 的一组基．）";
  }
  out.textContent = s;
}

// 通用 n 阶行列式（按第一行展开，递归）
function c3detN(M) {
  const n = M.length;
  if (n === 1) return M[0][0];
  if (n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  let d = 0;
  for (let j = 0; j < n; j++) {
    const sub = [];
    for (let r = 1; r < n; r++) {
      const row = [];
      for (let c = 0; c < n; c++) if (c !== j) row.push(M[r][c]);
      sub.push(row);
    }
    d += (j % 2 === 0 ? 1 : -1) * M[0][j] * c3detN(sub);
  }
  return d;
}

// 解析"每行一个向量"文本（空格/逗号分隔，# 注释）
function v3parseMat(text) {
  const lines = text.split(/\r?\n/);
  const rows = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line === "" || line[0] === "#") continue;
    const parts = line.split(/[\s,]+/).filter(function (x) { return x.length > 0; });
    const row = parts.map(function (x) { return parseFloat(x); });
    if (row.some(function (x) { return isNaN(x); })) continue;
    rows.push(row);
  }
  return rows;
}

// ---------- 实验二：向量组秩计算器（自定义 n、m + 极大无关组） ----------
function v3fillTemplate() {
  const n = Math.max(1, Math.min(8, parseInt(document.getElementById("v3nDim").value) || 4));
  const m = Math.max(1, Math.min(12, parseInt(document.getElementById("v3mCnt").value) || 5));
  document.getElementById("v3nDim").value = n;
  document.getElementById("v3mCnt").value = m;
  const rows = [];
  for (let i = 0; i < m; i++) rows.push(new Array(n).fill(0).join(" "));
  document.getElementById("v3matIn").value = rows.join("\n");
}

function v3rankCalc() {
  const out = document.getElementById("v3rankOut");
  if (!out) return;
  const rows = v3parseMat(document.getElementById("v3matIn").value);
  if (rows.length === 0) { out.textContent = "请输入至少一个向量（每行一个向量）．"; return; }
  const d = rows[0].length;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].length !== d) {
      out.textContent = "错误：第 " + (i + 1) + " 行有 " + rows[i].length +
        " 个分量，与第 1 行的 " + d + " 个分量不一致．";
      return;
    }
  }
  const m = rows.length;
  const A = [];
  for (let c = 0; c < d; c++) {
    const col = [];
    for (let r = 0; r < m; r++) col.push(rows[r][c]);
    A.push(col);
  }
  const res = c3rref(A);
  const rank = res.pivots.length;
  const names = [];
  for (let c = 0; c < d; c++) names.push("α" + (c + 1));
  let s = "输入 " + m + " 个 " + d + " 维向量（每行一个）．\n";
  s += "转置为 " + d + "×" + m + " 矩阵后作初等行变换，行最简形 RREF 为：\n\n";
  s += c3fmtMat(res.R) + "\n\n";
  s += "秩 R = " + rank + "\n";
  if (rank === 0) {
    s += "极大线性无关组 = ∅（所有向量均为零向量）\n";
  } else {
    const indep = res.pivots.map(function (p) { return p + 1; });
    s += "极大线性无关组 = 输入的第 " + indep.join(", ") + " 个向量（主元列）\n";
  }
  const free = [];
  for (let c = 0; c < d; c++) if (res.pivots.indexOf(c) === -1) free.push(c);
  if (free.length > 0) {
    s += "\n其余向量用极大无关组表示：\n";
    for (let k = 0; k < free.length; k++) {
      const fc = free[k];
      const parts = [];
      for (let p = 0; p < res.pivots.length; p++) {
        const pc = res.pivots[p];
        const coef = c3round(res.R[pc][fc]);
        parts.push((coef >= 0 ? "" : "-") + Math.abs(coef) + names[pc]);
      }
      s += "  " + names[fc] + " = " + parts.join(" + ").replace(/\+ -/g, "- ") + "\n";
    }
  }
  s += "\nMATLAB 等价：\n  r = rank(A);\n  [R, jb] = rref(A);   % jb 即主元列（极大无关组）";
  out.textContent = s;
}

// ---------- 初始化 ----------
window.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("c3depGrid")) c3buildDepGrid();
});

/* ========== 第四章 交互 ========== */
/* =========================================================================
   JS functions for Chapter 4 (线性方程组) interactive widgets.
   依赖：_ch4_new.html 中对应的控件 id（ls4Mat / ls4Out）．
   注意：所有函数名与控件 id 均以 c4/ls4 前缀，避免与主文件其它控件冲突；
   主文件已占用：calcInvN,buildInv,buildMM,matrixMultiplyCalc,imageBrightness,
   initImageGrid,elementaryStep,parseMatText,fmtMat,detN,adjN,readMat,showCell,
   solveLinSys,calcEig,gradeQuiz,drawMatrix,grid．
   本文件所有输出均为纯文本（out.textContent）．
   ========================================================================= */

/* ---------- 工具：解析文本框中的增广矩阵（每行空格/逗号分隔） ---------- */
function c4ParseMat(id){
  const el=document.getElementById(id);
  if(!el) return null;
  const t=el.value.trim();
  const rows=t.split(/\n+/).filter(r=>r.trim()!=='')
    .map(r=>r.trim().split(/[\s,]+/).map(Number));
  if(rows.length===0) return null;
  const n=rows[0].length;
  if(n<2) return null;                       // 至少需要 x ... b 两列
  for(const r of rows){
    if(r.length!==n || r.some(x=>isNaN(x))) return null;
  }
  return rows;
}

/* ---------- 工具：高斯—约当消元化为行最简形（带主元选取） ---------- */
function c4RREF(M){
  const eps=1e-9;
  const m=M.length, n=M[0].length;
  const pivots=[];                           // 各主元所在列号
  let lead=0;
  for(let r=0;r<m;r++){
    while(lead<n){
      let sel=-1;
      for(let k=r;k<m;k++){ if(Math.abs(M[k][lead])>eps){ sel=k; break; } }
      if(sel===-1){ lead++; continue; }       // 本列全零，跳到下一列
      const tmp=M[sel]; M[sel]=M[r]; M[r]=tmp;
      const piv=M[r][lead];
      for(let c=0;c<n;c++) M[r][c]/=piv;
      for(let k=0;k<m;k++){
        if(k!==r){ const f=M[k][lead];
          if(Math.abs(f)>eps){ for(let c=0;c<n;c++) M[k][c]-=f*M[r][c]; } }
      }
      pivots.push(lead);
      lead++;
      break;
    }
  }
  return pivots;
}

/* ---------- 工具：数字格式化（避免 -0 与过长小数） ---------- */
function c4Num(v){
  const x=Math.abs(v)<1e-9?0:v;
  const r=Math.round(x*1e4)/1e4;
  return (r===0?0:r).toString();
}

/* ---------- 工具：向量格式化 ---------- */
function c4Vec(v){
  return '('+v.map(c4Num).join(', ')+')';
}

/* ============ 主函数：线性方程组通解求解器 c4Solve() ============ */
function c4Solve(){
  const out=document.getElementById('ls4Out');
  if(!out) return;
  const M0=c4ParseMat('ls4Mat');
  if(!M0){
    out.textContent='输入格式有误：请每行用空格或逗号分隔数字，最后一列为常数项 b，且至少要有两列（未知数与 b）．';
    return;
  }
  const m=M0.length, ncol=M0[0].length;
  const n=ncol-1;                            // 未知数个数
  // 深拷贝，做 RREF
  const M=M0.map(r=>r.slice());
  const pivots=c4RREF(M);

  let lines=[];
  lines.push('增广矩阵的行最简形 RREF 为：');
  for(const row of M){
    lines.push('  ['+row.map(c4Num).join('  ')+' ]');
  }
  lines.push('');

  const rankA=pivots.filter(p=>p<n).length;  // 系数部分的主元列数
  const rankAug=pivots.length;               // 非零行数 = 增广阵秩
  lines.push('系数阵秩 R(A)   = '+rankA);
  lines.push('增广阵秩 R(A|b) = '+rankAug);
  lines.push('');

  // 不一致判定：存在主元落在最后一列（b 列）
  const inconsistent=pivots.some(p=>p===n);
  if(inconsistent){
    lines.push('判别：存在形如 "0 = 1" 的行，故 R(A) ≠ R(A|b)，方程组【无解】．');
    out.textContent=lines.join('\n');
    return;
  }

  if(rankA===n){
    // 唯一解：每个变量都是主元
    const x=new Array(n).fill(0);
    for(let r=0;r<pivots.length;r++){
      const p=pivots[r];
      if(p<n) x[p]=M[r][n];
    }
    lines.push('判别：R(A)=R(A|b)='+n+'，方程组有【唯一解】．');
    lines.push('唯一解 x = '+c4Vec(x));
    out.textContent=lines.join('\n');
    return;
  }

  // 无穷多解：构造特解 + 基础解系
  lines.push('判别：R(A)=R(A|b)='+rankA+' < '+n+'，方程组有【无穷多解】．');
  lines.push('解空间维数 = n - R(A) = '+(n-rankA));
  lines.push('');

  const freeCols=[];
  for(let c=0;c<n;c++) if(!pivots.includes(c)) freeCols.push(c);

  // 特解 η*：自由未知量全取 0
  const eta=new Array(n).fill(0);
  for(let r=0;r<pivots.length;r++){
    const p=pivots[r];
    if(p<n) eta[p]=M[r][n];
  }
  lines.push('一个特解 η* = '+c4Vec(eta));

  // 基础解系：每个自由未知量依次取 1、其余取 0
  const basis=[];
  for(const f of freeCols){
    const v=new Array(n).fill(0);
    v[f]=1;
    for(let r=0;r<pivots.length;r++){
      const p=pivots[r];
      if(p<n) v[p]=-M[r][f];              // x_p = -Σ M[r][f]*x_f
    }
    basis.push(v);
  }
  if(basis.length>0){
    lines.push('基础解系（对应齐次 Ax=0）：');
    basis.forEach((v,idx)=> lines.push('  ξ'+(idx+1)+' = '+c4Vec(v)));
  }

  let expr='x = η*';
  if(basis.length>0){
    expr+=' + '+basis.map((_,idx)=>'c'+(idx+1)+'·ξ'+(idx+1)).join(' + ');
  }
  lines.push('');
  lines.push('通解：'+expr+'　（c1, c2, … 为任意常数）');

  out.textContent=lines.join('\n');
}

/* ============ 辅助按钮 ============ */
function c4GenGrid(){
  const rm=document.getElementById('ls4Rows'), cm=document.getElementById('ls4Cols');
  let m=parseInt(rm&&rm.value,10)||3, n=parseInt(cm&&cm.value,10)||5;
  m=Math.max(1,Math.min(12,m)); n=Math.max(2,Math.min(12,n));   // 限制在 1~12 行、2~12 列
  let s='';
  for(let i=0;i<m;i++){ if(i) s+='\n'; s+=new Array(n).fill('0').join(' '); }
  const ta=document.getElementById('ls4Mat');
  if(ta) ta.value=s;
  c4Solve();
}
function c4Sample(){
  const ta=document.getElementById('ls4Mat');
  const rm=document.getElementById('ls4Rows'), cm=document.getElementById('ls4Cols');
  if(rm) rm.value=3; if(cm) cm.value=5;
  if(ta) ta.value=
'1 -1 -1 1 0\n'+
'1 -1 1 -3 1\n'+
'1 -1 -2 3 -0.5';
  c4Solve();
}
function c4Clear(){
  const ta=document.getElementById('ls4Mat');
  const out=document.getElementById('ls4Out');
  if(ta) ta.value='';
  if(out) out.textContent='已清空，请输入增广矩阵后点击“求解”．';
}

/* ---------- 初始化：DOM 就绪后绑定 ---------- */
window.addEventListener('DOMContentLoaded',function(){
  if(document.getElementById('ls4Mat')){
    // 若文本框为空则载入默认示例，便于直接体验
    const ta=document.getElementById('ls4Mat');
    if(ta && ta.value.trim()==='') c4Sample();
  }
});

/* ========== 第五章 交互 ========== */
/* =========================================================================
   Chapter 5 interactive widgets  (相似矩阵与二次型)
   函数名统一加 c5 / eig5 前缀，避免与主文件已有函数冲突．
   所有输出均为纯文本（out.textContent）．
   ========================================================================= */

/* ---------- 椭圆主轴交互（§5.4 引例 4） ---------- */
/* ============ §5.1 交互：转动 x 看 Ax，寻找特征向量 ============ */
function evMat(){
  return [parseFloat(document.getElementById('eva11').value)||0,
          parseFloat(document.getElementById('eva12').value)||0,
          parseFloat(document.getElementById('eva21').value)||0,
          parseFloat(document.getElementById('eva22').value)||0];
}
function evEig(a,b,c,d){
  var tr=a+d, det=a*d-b*c, disc=tr*tr/4-det;
  if(disc<-1e-12) return {real:false};
  var s=Math.sqrt(Math.max(disc,0));
  var l1=tr/2+s, l2=tr/2-s;
  function dir(l){
    if(Math.abs(b)>1e-9) return [b, l-a];
    if(Math.abs(c)>1e-9) return [l-d, c];
    return Math.abs(l-a)<1e-9 ? [1,0] : [0,1];
  }
  return {real:true, l1:l1, l2:l2, v1:dir(l1), v2:dir(l2)};
}
function evPreset(k){
  var m={sym:[2,1,1,2], ex51:[1,6,5,2], shear:[1,1,0,1], rot:[0.71,-0.71,0.71,0.71], proj:[1,0,0,0]}[k];
  if(!m) return;
  ['eva11','eva12','eva21','eva22'].forEach(function(id,i){ document.getElementById(id).value=m[i]; });
  evDraw();
}
function evSnap(which){
  var M=evMat(), e=evEig(M[0],M[1],M[2],M[3]);
  var out=document.getElementById('evout');
  if(!e.real){ if(out) out.textContent='该矩阵没有实特征值（如旋转矩阵），\n没有可对准的实特征方向．'; return; }
  var v=which? e.v2 : e.v1;
  var deg=Math.atan2(v[1],v[0])*180/Math.PI; if(deg<0) deg+=360;
  document.getElementById('evth').value=Math.round(deg);
  evDraw();
}
function evDraw(){
  var svg=document.getElementById('evsvg'); if(!svg) return;
  var M=evMat(), a=M[0],b=M[1],c=M[2],d=M[3];
  var th=parseFloat(document.getElementById('evth').value)*Math.PI/180;
  document.getElementById('evthv').textContent=Math.round(th*180/Math.PI)+'°';
  var x1=Math.cos(th), x2=Math.sin(th);
  var y1=a*x1+b*x2, y2=c*x1+d*x2;
  // 自适应缩放：采样单位圆的像，保证画得下
  var maxr=1;
  for(var t=0;t<Math.PI*2;t+=Math.PI/36){
    var u=Math.cos(t), v=Math.sin(t);
    var r=Math.hypot(a*u+b*v, c*u+d*v);
    if(r>maxr) maxr=r;
  }
  var S=Math.min(55, 118/maxr);
  function px(x){return (S*x).toFixed(1);} function py(y){return (-S*y).toFixed(1);}
  var g='';
  g+='<line x1="-150" y1="0" x2="150" y2="0" stroke="#cbd5e1" stroke-width="1"/>';
  g+='<line x1="0" y1="-150" x2="0" y2="150" stroke="#cbd5e1" stroke-width="1"/>';
  // 单位圆（虚线）
  g+='<circle cx="0" cy="0" r="'+(S).toFixed(1)+'" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>';
  // 单位圆的像（灰色实线闭曲线）
  var pts=[];
  for(var t2=0;t2<=Math.PI*2+0.05;t2+=0.06){
    var u2=Math.cos(t2), v2=Math.sin(t2);
    pts.push(px(a*u2+b*v2)+','+py(c*u2+d*v2));
  }
  g+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="#b6c2cf" stroke-width="1.6"/>';
  // 实特征方向（红/绿虚线）
  var e=evEig(a,b,c,d);
  if(e.real){
    [[e.v1,'#e2554e'],[e.v2,'#2e9e5b']].forEach(function(pair){
      var w=pair[0], n=Math.hypot(w[0],w[1]); if(n<1e-9) return;
      var ux=w[0]/n, uy=w[1]/n, L=145;
      g+='<line x1="'+(-L*ux).toFixed(1)+'" y1="'+(L*uy).toFixed(1)+'" x2="'+(L*ux).toFixed(1)+'" y2="'+(-L*uy).toFixed(1)+'" stroke="'+pair[1]+'" stroke-width="1.4" stroke-dasharray="6 5" opacity="0.75"/>';
    });
  }
  // 共线判据
  var cross=x1*y2-x2*y1, nAx=Math.hypot(y1,y2);
  var aligned=Math.abs(cross)<=0.035*Math.max(nAx,0.25);
  if(aligned){
    g+='<circle cx="0" cy="0" r="146" fill="none" stroke="#f2b84b" stroke-width="4" opacity="0.85"/>';
  }
  function arrow(vx,vy,color,wid,dash){
    var X=S*vx, Y=-S*vy, n=Math.hypot(X,Y); if(n<1e-6) return '<circle cx="0" cy="0" r="3" fill="'+color+'"/>';
    var ux=X/n, uy=Y/n, hl=8, hw=4;
    var bx=X-hl*ux, by=Y-hl*uy;
    var s='<line x1="0" y1="0" x2="'+bx.toFixed(1)+'" y2="'+by.toFixed(1)+'" stroke="'+color+'" stroke-width="'+wid+'"'+(dash?' stroke-dasharray="5 4"':'')+'/>';
    s+='<polygon points="'+X.toFixed(1)+','+Y.toFixed(1)+' '+(bx-hw*uy).toFixed(1)+','+(by+hw*ux).toFixed(1)+' '+(bx+hw*uy).toFixed(1)+','+(by-hw*ux).toFixed(1)+'" fill="'+color+'"/>';
    return s;
  }
  g+=arrow(x1,x2,'#2f6fd0',2,true);      // x（蓝虚线）
  g+=arrow(y1,y2,'#e07b39',2.6,false);   // Ax（橙实线）
  svg.innerHTML=g;
  // 文字输出
  var out=document.getElementById('evout'); if(!out) return;
  var txt='x  = ('+x1.toFixed(3)+', '+x2.toFixed(3)+')\nAx = ('+y1.toFixed(3)+', '+y2.toFixed(3)+')\n';
  if(aligned){
    var lam = Math.abs(x1)>Math.abs(x2) ? y1/x1 : y2/x2;
    if(nAx<1e-6) lam=0;
    txt+='★ Ax 与 x 共线：x 是特征向量！  λ ≈ '+lam.toFixed(3)+'\n';
  } else {
    txt+='Ax 与 x 不共线（x 不是特征向量）\n';
  }
  if(e.real){
    var d1=Math.atan2(e.v1[1],e.v1[0])*180/Math.PI, d2=Math.atan2(e.v2[1],e.v2[0])*180/Math.PI;
    if(d1<0)d1+=360; if(d2<0)d2+=360;
    txt+='λ1 = '+e.l1.toFixed(3)+'（方向角 '+d1.toFixed(1)+'°）\nλ2 = '+e.l2.toFixed(3)+'（方向角 '+d2.toFixed(1)+'°）';
  } else {
    txt+='特征值为共轭复数（无实特征方向）';
  }
  out.textContent=txt;
}

function e5draw(){
  var svg=document.getElementById('e5svg'); if(!svg) return;
  var a=parseFloat(document.getElementById('e5a').value);
  var b=parseFloat(document.getElementById('e5b').value);
  var c=parseFloat(document.getElementById('e5c').value);
  document.getElementById('e5av').textContent=a.toFixed(2);
  document.getElementById('e5bv').textContent=b.toFixed(2);
  document.getElementById('e5cv').textContent=c.toFixed(2);
  var tr=(a+c)/2, dd=Math.sqrt((a-c)*(a-c)/4+b*b);
  var l1=tr+dd, l2=tr-dd;                       // 特征值 λ1≥λ2
  var th=0.5*Math.atan2(2*b,a-c);               // λ1 特征向量方向角
  var S=58;                                     // 每单位像素
  var g='';
  // 坐标轴
  g+='<line x1="-150" y1="0" x2="150" y2="0" stroke="#cbd5e1" stroke-width="1"/>';
  g+='<line x1="0" y1="-150" x2="0" y2="150" stroke="#cbd5e1" stroke-width="1"/>';
  function P(x,y){ return (S*x).toFixed(1)+','+(-S*y).toFixed(1); }
  if(l2>1e-9){
    // 椭圆：x = Q (cos t/√λ1, sin t/√λ2)
    var pts=[];
    for(var t=0;t<=Math.PI*2+0.05;t+=0.05){
      var u=Math.cos(t)/Math.sqrt(l1), v=Math.sin(t)/Math.sqrt(l2);
      var x=u*Math.cos(th)-v*Math.sin(th), y=u*Math.sin(th)+v*Math.cos(th);
      pts.push(P(x,y));
    }
    g+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="#2f6fd0" stroke-width="2"/>';
    // 两条主轴（虚线），半长 1/√λ
    var h1=1/Math.sqrt(l1), h2=1/Math.sqrt(l2);
    g+='<line x1="'+(-S*h1*Math.cos(th)).toFixed(1)+'" y1="'+(S*h1*Math.sin(th)).toFixed(1)+'" x2="'+(S*h1*Math.cos(th)).toFixed(1)+'" y2="'+(-S*h1*Math.sin(th)).toFixed(1)+'" stroke="#e2554e" stroke-width="1.6" stroke-dasharray="5 4"/>';
    g+='<line x1="'+(S*h2*Math.sin(th)).toFixed(1)+'" y1="'+(S*h2*Math.cos(th)).toFixed(1)+'" x2="'+(-S*h2*Math.sin(th)).toFixed(1)+'" y2="'+(-S*h2*Math.cos(th)).toFixed(1)+'" stroke="#2e9e5b" stroke-width="1.6" stroke-dasharray="5 4"/>';
  } else if(l2<-1e-9 && l1>1e-9){
    // 双曲线：λ1 X² + λ2 Y² = 1（X 沿 θ 方向）
    var br=[[],[]];
    for(var s=-1.6;s<=1.6;s+=0.05){
      var X=Math.cosh(s)/Math.sqrt(l1), Y=Math.sinh(s)/Math.sqrt(-l2);
      for(var k2=0;k2<2;k2++){
        var Xs=(k2? -X:X);
        var x2=Xs*Math.cos(th)-Y*Math.sin(th), y2=Xs*Math.sin(th)+Y*Math.cos(th);
        br[k2].push(P(x2,y2));
      }
    }
    g+='<polyline points="'+br[0].join(' ')+'" fill="none" stroke="#b07a2a" stroke-width="2"/>';
    g+='<polyline points="'+br[1].join(' ')+'" fill="none" stroke="#b07a2a" stroke-width="2"/>';
  }
  svg.innerHTML=g;
  var deg=(th*180/Math.PI).toFixed(1);
  var kind = l2>1e-9 ? '椭圆' : (Math.abs(l2)<=1e-9 ? '退化（平行直线）' : '双曲线');
  document.getElementById('e5out').textContent=
    'λ1 = '+l1.toFixed(3)+'   λ2 = '+l2.toFixed(3)+'\n'
    +'主轴旋转角 θ = '+deg+'°\n'
    +'标准形：'+l1.toFixed(2)+'·X² + '+l2.toFixed(2)+'·Y² = 1\n'
    +'曲线类型：'+kind;
}

/* ---------- 工具：构造输入矩阵网格 ---------- */
function c5BuildGrid(containerId, n, prefix){
  const box = document.getElementById(containerId);
  if(!box) return;
  box.innerHTML = '';
  const d = document.createElement('div');
  d.className = 'matrix-in ' + (n <= 3 ? 'm3' : 'm4');
  d.style.gridTemplateColumns = 'repeat(' + n + ',56px)';
  for(let i = 0; i < n * n; i++){
    const inp = document.createElement('input');
    inp.type = 'number'; inp.step = '0.1'; inp.value = '0';
    inp.id = prefix + i;
    d.appendChild(inp);
  }
  box.appendChild(d);
}

/* ---------- 工具：读取矩阵 ---------- */
function c5ReadMat(prefix, n){
  const M = [];
  for(let i = 0; i < n; i++){
    const row = [];
    for(let j = 0; j < n; j++){
      const el = document.getElementById(prefix + (i * n + j));
      row.push(parseFloat(el && el.value !== '' ? el.value : '0') || 0);
    }
    M.push(row);
  }
  return M;
}

/* ---------- 工具：2x2 / 3x3 行列式 ---------- */
function c53det(M){
  const n = M.length;
  if(n === 1) return M[0][0];
  if(n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1])
       - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0])
       + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
}

/* ---------- 工具：通用 n 阶行列式（按首行展开，递归） ---------- */
function c5Det(M){
  const n = M.length;
  if(n === 1) return M[0][0];
  if(n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  let det = 0;
  for(let j = 0; j < n; j++){
    const sub = [];
    for(let i = 1; i < n; i++){
      const row = [];
      for(let k = 0; k < n; k++) if(k !== j) row.push(M[i][k]);
      sub.push(row);
    }
    det += (j % 2 === 0 ? 1 : -1) * M[0][j] * c5Det(sub);
  }
  return det;
}

/* ---------- 工具：矩阵运算（供 Faddeev–LeVerrier 用） ---------- */
function c5Trace(M){ let s = 0; for(let i = 0; i < M.length; i++) s += M[i][i]; return s; }
function c5MatMul(A, B){
  const n = A.length, m = B[0].length, p = B.length;
  const C = [];
  for(let i = 0; i < n; i++) C.push(new Array(m).fill(0));
  for(let i = 0; i < n; i++) for(let k = 0; k < p; k++){
    const a = A[i][k]; if(a === 0) continue;
    for(let j = 0; j < m; j++) C[i][j] += a * B[k][j];
  }
  return C;
}
function c5MatAdd(A, B){ return A.map((r, i) => r.map((v, j) => v + B[i][j])); }
function c5ScalarMul(A, s){ return A.map(r => r.map(v => v * s)); }
function c5Eye(n){ const I = []; for(let i = 0; i < n; i++){ I.push(new Array(n).fill(0)); I[i][i] = 1; } return I; }

/* ---------- 工具：任意阶特征多项式系数（Faddeev–LeVerrier） ---------- */
/* 返回 c[1..n]，使 p(t)=t^n + c[1] t^{n-1} + ... + c[n] = det(tI - A) */
function c5CharPoly(A){
  const n = A.length;
  let prev = A.map(r => r.slice());
  const c = [];
  c[1] = -c5Trace(prev);
  for(let k = 2; k <= n; k++){
    const Bk = c5MatMul(A, c5MatAdd(prev, c5ScalarMul(c5Eye(n), c[k - 1])));
    c[k] = -c5Trace(Bk) / k;
    prev = Bk;
  }
  return c;
}

/* ---------- 工具：复数运算 + Durand–Kerner 求全部根 ---------- */
function c5Cpx(re, im){ return { re: re, im: im }; }
function c5CpxAdd(a, b){ return { re: a.re + b.re, im: a.im + b.im }; }
function c5CpxSub(a, b){ return { re: a.re - b.re, im: a.im - b.im }; }
function c5CpxMul(a, b){ return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
function c5CpxDiv(a, b){ const d = b.re * b.re + b.im * b.im; return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d }; }
function c5PolyVal(c, n, z){
  let val = c5Cpx(c[n], 0);
  for(let k = n - 1; k >= 1; k--) val = c5CpxAdd(c5CpxMul(z, val), c5Cpx(c[k], 0));
  val = c5CpxAdd(c5CpxMul(z, val), c5Cpx(1, 0));
  return val;
}
function c5PolyRoots(c, n){
  let maxC = 0;
  for(let k = 1; k <= n; k++) maxC = Math.max(maxC, Math.abs(c[k]));
  const R = 1 + maxC;
  const r = [];
  for(let i = 0; i < n; i++){ const a = 2 * Math.PI * i / n; r.push(c5Cpx(R * Math.cos(a), R * Math.sin(a))); }
  for(let it = 0; it < 400; it++){
    let maxd = 0;
    const nx = [];
    for(let i = 0; i < n; i++){
      const num = c5PolyVal(c, n, r[i]);
      let den = c5Cpx(1, 0);
      for(let j = 0; j < n; j++) if(j !== i) den = c5CpxMul(den, c5CpxSub(r[i], r[j]));
      const dd = c5CpxDiv(num, den);
      const ni = c5CpxSub(r[i], dd);
      maxd = Math.max(maxd, Math.abs(ni.re - r[i].re), Math.abs(ni.im - r[i].im));
      nx.push(ni);
    }
    for(let i = 0; i < n; i++) r[i] = nx[i];
    if(maxd < 1e-13) break;
  }
  return r;
}
function c5PolyStr(c, n){
  const parts = [];
  for(let k = 1; k <= n; k++){
    const coeff = c[k];
    if(Math.abs(coeff) < 1e-12) continue;
    const deg = n - k;
    const term = deg === 0 ? '' : (deg === 1 ? 'λ' : 'λ^{' + deg + '}');
    const val = Math.round(Math.abs(coeff) * 1000) / 1000;
    parts.push((coeff >= 0 ? '+ ' : '- ') + val + term);
  }
  return parts.join(' ');
}

/* ---------- 工具：实对称阵特征多项式系数 (monic: λ^n + B λ^{n-1}+...) ---------- */
function c5CharCoeffs(M){
  const n = M.length;
  const tr = M.reduce((s, r, i) => s + r[i], 0);
  if(n === 2){
    // |M-λE| = λ^2 - tr λ + |M|  => monic λ^2 + B λ + C, B=-tr, C=|M|
    return { B: -tr, C: c53det(M) };
  }
  // 3x3: |M-λE| = -λ^3 + tr λ^2 - S λ + |M|, monic λ^3 + Bλ^2 + Cλ + D
  const m11 = M[1][1] * M[2][2] - M[1][2] * M[2][1];
  const m22 = M[0][0] * M[2][2] - M[0][2] * M[2][0];
  const m33 = M[0][0] * M[1][1] - M[0][1] * M[1][0];
  const S = m11 + m22 + m33;
  const det = c53det(M);
  return { B: -tr, C: S, D: -det };
}

/* ---------- 工具：一元三次方程实根（Cardano） ---------- */
function c5CubicRealRoots(B, C, D){
  // 解 λ^3 + B λ^2 + C λ + D = 0
  const b = B, c = C, d = D;
  const p = c - b * b / 3;
  const q = 2 * b * b * b / 27 - b * c / 3 + d;
  const shift = -b / 3;
  const disc = q * q / 4 + p * p * p / 27;
  const roots = [];
  if(disc > 1e-12){
    const sq = Math.sqrt(disc);
    const u = Math.cbrt(-q / 2 + sq);
    const v = Math.cbrt(-q / 2 - sq);
    roots.push(u + v + shift);
  } else if(Math.abs(disc) <= 1e-12){
    // 重根情形
    const r1 = 3 * q / p; // 实为 -2 * cbrt(q/2)? 用公式 t = 3q/(2p) 的修正
    const t = (Math.abs(p) < 1e-12) ? 0 : 3 * q / (2 * p) * -1; // 安全回退
    const u = Math.cbrt(-q / 2);
    const rootA = 2 * u + shift;
    const rootB = -u + shift;
    roots.push(rootA, rootB);
  } else {
    // 三个不同实根，三角形式
    const r = Math.sqrt(-p / 3);
    const phi = Math.acos(Math.max(-1, Math.min(1, 3 * q / (2 * p) * Math.sqrt(-3 / p))));
    for(let k = 0; k < 3; k++){
      const t = 2 * r * Math.cos((phi - 2 * Math.PI * k) / 3);
      roots.push(t + shift);
    }
  }
  // 去重（容差）
  const uniq = [];
  for(const x of roots){
    if(!uniq.some(y => Math.abs(y - x) < 1e-7)) uniq.push(x);
  }
  return uniq;
}

/* ---------- 工具：数值求 (A-λI) 的零空间基向量 ---------- */
function c5NullVector(M, lam){
  const n = M.length;
  // 构造 B = A - λI
  const B = M.map((row, i) => row.map((v, j) => v - (i === j ? lam : 0)));
  const tol = 1e-8;
  // 高斯消元到行阶梯形（部分主元）
  const A = B.map(r => r.slice());
  const pivotCol = [];
  let row = 0;
  for(let col = 0; col < n && row < n; col++){
    // 选主元
    let piv = row;
    for(let i = row + 1; i < n; i++) if(Math.abs(A[i][col]) > Math.abs(A[piv][col])) piv = i;
    if(Math.abs(A[piv][col]) < tol) continue;
    [A[row], A[piv]] = [A[piv], A[row]];
    const d = A[row][col];
    for(let j = col; j < n; j++) A[row][j] /= d;
    for(let i = 0; i < n; i++){
      if(i !== row){
        const f = A[i][col];
        if(f !== 0) for(let j = col; j < n; j++) A[i][j] -= f * A[row][j];
      }
    }
    pivotCol.push(col);
    row++;
  }
  // 自由列
  const free = [];
  for(let c = 0; c < n; c++) if(!pivotCol.includes(c)) free.push(c);
  if(free.length === 0) return null; // 满秩，无非零解（理论上不会发生）
  // 取一个自由变量 = 1，其余自由变量 = 0
  const x = new Array(n).fill(0);
  x[free[0]] = 1;
  for(let r = 0; r < pivotCol.length; r++){
    const c = pivotCol[r];
    let s = 0;
    for(const fc of free) if(fc !== c) s += A[r][fc] * x[fc];
    x[c] = -(A[r][n - 1] !== undefined ? 0 : 0) - s; // A 已约化，非主元列系数在 A[r][c']，主元行 A[r][c]=1
    // 重新计算：x[c] = -Σ_{free≠c} A[r][free]*x[free]
    let sum = 0;
    for(const fc of free) if(fc !== c) sum += A[r][fc] * x[fc];
    x[c] = -sum;
  }
  // 归一化便于阅读（保持整数感）
  const scale = Math.max(...x.map(Math.abs)) || 1;
  return x.map(v => Math.round(v / scale * 1000) / 1000);
}

/* ---------- 工具：格式化向量 ---------- */
function c5FmtVec(v){
  return '(' + v.map(x => (Math.round(x * 1000) / 1000)).join(', ') + ')';
}

/* ============ 交互 1：特征值与特征向量计算器 ============ */
function eig5Build(){
  const n = parseInt(document.getElementById('eig5N').value) || 3;
  c5BuildGrid('eig5Grid', n, 'eig5c');
  const out = document.getElementById('eig5Out');
  if(out) out.textContent = '已生成 ' + n + ' 阶输入框，请输入矩阵元素后点"计算"．';
}
function eig5Calc(){
  const out = document.getElementById('eig5Out');
  if(!out) return;
  const n = parseInt(document.getElementById('eig5N').value) || 3;
  const M = c5ReadMat('eig5c', n);
  let txt = '输入矩阵 A =\n';
  txt += M.map(r => r.map(v => (Math.round(v * 1000) / 1000).toString().padStart(8)).join(' ')).join('\n') + '\n\n';
  let reals = [];
  if(n === 2){
    const { B, C } = c5CharCoeffs(M);
    txt += '特征多项式 |A-λE| = λ^2 ' + (B >= 0 ? '+ ' : '- ') + Math.abs(B) + 'λ ' + (C >= 0 ? '+ ' : '- ') + Math.abs(C) + '\n';
    const disc = B * B - 4 * C;
    if(disc < 0){ txt += '判别式 < 0，无实数特征值（有一对共轭复根）．\n'; out.textContent = txt; return; }
    const r1 = (-B + Math.sqrt(disc)) / 2, r2 = (-B - Math.sqrt(disc)) / 2;
    reals = [r1, r2];
    txt += '特征值（实数）：λ1 = ' + r1 + ', λ2 = ' + r2 + '\n\n';
  } else if(n === 3){
    const { B, C, D } = c5CharCoeffs(M);
    txt += '特征多项式 |A-λE| = λ^3 ' + (B >= 0 ? '+ ' : '- ') + Math.abs(B) + 'λ^2 ' + (C >= 0 ? '+ ' : '- ') + Math.abs(C) + 'λ ' + (D >= 0 ? '+ ' : '- ') + Math.abs(D) + '\n';
    reals = c5CubicRealRoots(B, C, D).filter(r => Number.isFinite(r));
    if(reals.length === 0){ txt += '未找到实数特征值．\n'; out.textContent = txt; return; }
    txt += '实数特征值：' + reals.map(r => r.toFixed(4)).join(', ') + '\n\n';
  } else {
    const c = c5CharPoly(M);
    txt += '特征多项式 p(λ) = λ^' + n + ' ' + c5PolyStr(c, n) + '\n';
    const all = c5PolyRoots(c, n);
    reals = all.filter(z => Math.abs(z.im) < 1e-6).map(z => z.re);
    if(reals.length === 0){ txt += '未找到实数特征值（特征值为复数）．\n'; out.textContent = txt; return; }
    txt += '实数特征值（约）：' + reals.map(r => r.toFixed(4)).join(', ');
    if(all.some(z => Math.abs(z.im) >= 1e-6)) txt += '（其余为共轭复根，未列出）';
    txt += '\n\n';
  }
  reals.forEach(lam => {
    const v = c5NullVector(M, lam);
    txt += 'λ ≈ ' + lam.toFixed(4) + ' 的特征向量 ≈ ' + c5FmtVec(v) + '\n';
  });
  out.textContent = txt;
}

/* ============ 交互 2：二次型正定判别器 ============ */
function c5DefBuild(){
  const n = parseInt(document.getElementById('c5DefN').value) || 3;
  c5BuildGrid('c5DefGrid', n, 'c5defc');
  const out = document.getElementById('c5DefOut');
  if(out) out.textContent = '已生成 ' + n + ' 阶对称矩阵输入框（按上三角+对角线输入，下三角自动对称）．';
}
function c5DefCalc(){
  const out = document.getElementById('c5DefOut');
  if(!out) return;
  const n = parseInt(document.getElementById('c5DefN').value) || 3;
  const T = c5ReadMat('c5defc', n);
  // 构造对称阵 A（下三角按对称补全）
  const A = T.map((r, i) => r.map((v, j) => j >= i ? v : T[j][i]));
  let txt = '输入（对称化后）矩阵 A =\n';
  txt += A.map(r => r.map(v => (Math.round(v * 1000) / 1000).toString().padStart(8)).join(' ')).join('\n') + '\n\n';
  // 顺序主子式
  const d = [];
  for(let k = 1; k <= n; k++){
    const sub = A.slice(0, k).map(r => r.slice(0, k));
    d.push(c5Det(sub));
  }
  d.forEach((v, i) => { txt += 'Δ' + (i + 1) + ' = ' + (Math.round(v * 1e8) / 1e8) + '\n'; });
  txt += '\n判定：';
  const allPos = d.every(v => v > 1e-9);
  const allNeg = d.every(v => v < -1e-9);
  const altNegPos = d.every((v, i) => (i % 2 === 0) ? v < -1e-9 : v > 1e-9);
  if(allPos){
    txt += '各阶顺序主子式全 > 0 → A 正定（positive definite）．';
  } else if(altNegPos){
    txt += '奇数阶 < 0、偶数阶 > 0 → A 负定（negative definite）．';
  } else if(d.some(v => Math.abs(v) < 1e-9)){
    txt += '出现零主子式，无法用霍尔维茨定理直接判定（可能半正定/半负定/不定），需进一步分析．';
  } else {
    txt += '顺序主子式符号既非全正也非交错 → A 不定（indefinite）．';
  }
  out.textContent = txt;
}

/* ---------- 初始化 ---------- */
window.addEventListener('DOMContentLoaded', function(){
  if(document.getElementById('eig5Grid')) eig5Build();
  if(document.getElementById('c5DefGrid')) c5DefBuild();
});

function gradeQuiz(quizId){
  const box=document.getElementById(quizId);
  if(!box) return;
  let score=0,total=0;
  box.querySelectorAll('.q').forEach(q=>{
    const ans=q.dataset.ans,pts=parseInt(q.dataset.pts||'6',10),sel=q.querySelector('input:checked');
    total+=pts;
    q.classList.remove('correct','wrong');
    if(sel){if(sel.value===ans){q.classList.add('correct');score+=pts;}else q.classList.add('wrong');}
    else q.classList.add('wrong');
  });
  const pct=Math.round(score/total*100);
  document.getElementById(quizId+'Score').textContent=`得分：${score} / ${total}（${pct} 分）`+(score===total?'　🎉 全部正确！':'');
}

/* ========== 习题选择题（qopts 格式）点击选中 ========== */
function bindQopts(){
  document.querySelectorAll('.qopts').forEach(function(q){
    q.addEventListener('click', function(e){
      var sp = e.target.closest ? e.target.closest('.qopts > span') : null;
      if(!sp) return;                       // 点到 KaTeX 内部 span 时忽略
      Array.prototype.forEach.call(q.children, function(s){
        if(s.tagName === 'SPAN') s.classList.remove('sel');
      });
      sp.classList.add('sel');
    });
  });
}

/* ========== 第三章 引例 1 · RGB 调色交互 ========== */
function rgbMix(){
  var r=document.getElementById('rgbR'), g=document.getElementById('rgbG'), b=document.getElementById('rgbB');
  if(!r||!g||!b) return;
  var rv=+r.value, gv=+g.value, bv=+b.value;
  document.getElementById('rgbSwatch').style.background='rgb('+rv+','+gv+','+bv+')';
  document.getElementById('rgbRv').textContent=rv;
  document.getElementById('rgbGv').textContent=gv;
  document.getElementById('rgbBv').textContent=bv;
  var rf=parseFloat((rv/255).toFixed(2)), gf=parseFloat((gv/255).toFixed(2)), bf=parseFloat((bv/255).toFixed(2));
  document.getElementById('rgbExpr').textContent='组合式： '+rf+'·α₁ + '+gf+'·α₂ + '+bf+'·α₃   （即 rgb('+rv+', '+gv+', '+bv+')）';
}
function rgbPreset(r,g,b){
  document.getElementById('rgbR').value=r;
  document.getElementById('rgbG').value=g;
  document.getElementById('rgbB').value=b;
  rgbMix();
}

window.addEventListener('DOMContentLoaded', function(){
  bindQopts();
  rgbMix();
});
