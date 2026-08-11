/* mist-enter.js · 迷雾入场动画（portal→教材 转场衔接）
 * 从 portal.html 跳转过来时，页面以全屏迷雾覆盖，1.5s 内渐淡露出教材内容
 * 与 portal 的迷雾渐浓退出动画配合，形成"穿越迷雾→拨云见日"的连贯体验
 */
(function(){
  function init(){
  var m = document.createElement('div');
  m.className = 'mist-enter';
  m.id = 'mistEnter';
  /* 注入内联样式（避免额外 HTTP 请求） */
  var s = document.createElement('style');
  s.textContent = [
    '.mist-enter{position:fixed;inset:0;z-index:9999;',
    'background:radial-gradient(ellipse at 50% 45%,#c9d4f0 0%,#7a82a8 35%,#3b3f5c 65%,#16132b 100%);',
    'opacity:.95;transition:opacity 1.5s ease-out;pointer-events:none}',
    '.mist-enter i{position:absolute;border-radius:50%;background:rgba(255,255,255,.3);filter:blur(1.5px);',
    'animation:mistFloat var(--fd,4s) ease-in-out infinite;animation-delay:var(--dl,0s)}',
    '@keyframes mistFloat{0%,100%{transform:translateY(0) scale(1);opacity:.15}',
    '50%{transform:translateY(-24px) scale(1.3);opacity:.45}}'
  ].join('');
  document.head.appendChild(s);
  /* 雾中微光粒子 */
  var h = '';
  for (var i = 0; i < 20; i++) {
    h += '<i style="left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 +
      '%;width:' + (Math.random() * 2 + 1).toFixed(1) + 'px;height:' + (Math.random() * 2 + 1).toFixed(1) +
      'px;--fd:' + (Math.random() * 4 + 3).toFixed(1) + 's;--dl:-' + (Math.random() * 5).toFixed(1) + 's"></i>';
  }
  m.innerHTML = h;
  document.body.insertBefore(m, document.body.firstChild);
  /* 启动渐淡 */
  requestAnimationFrame(function () {
    m.style.opacity = '0';
    setTimeout(function () {
      m.remove();
      s.remove();
    }, 1550);
  });
  }
  if(document.body)init();else document.addEventListener('DOMContentLoaded',init);
})();
