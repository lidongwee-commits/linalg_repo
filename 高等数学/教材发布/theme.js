/* 高等数学数字教材 · 日间/夜间模式切换
   - 实际类名切换由各页面 <head> 内的防闪烁内联脚本完成（避免首屏白闪）
   - 本文件仅负责：注入侧栏顶栏切换按钮 + 记忆选择 + 状态文案
   - 按钮位置：注入到 .side 内（"高等数学/交互式数字教材"那一行右侧），非 fixed 浮层
   - 记忆键：localStorage['hfut-theme'] = 'day' | 'night'
*/
(function () {
  var KEY = 'hfut-theme';

  function make() {
    if (document.getElementById('themeToggle')) return;
    var b = document.createElement('button');
    b.id = 'themeToggle';
    b.className = 'theme-toggle';
    b.type = 'button';
    b.setAttribute('aria-label', '切换日间/夜间模式');

    function paint() {
      var night = document.documentElement.classList.contains('night');
      b.setAttribute('data-mode', night ? 'night' : 'day');
      b.title = night ? '切换到日间模式' : '切换到夜间模式';
      b.textContent = night ? '☀️' : '🌙';
    }

    b.addEventListener('click', function () {
      var night = document.documentElement.classList.toggle('night');
      try { localStorage.setItem(KEY, night ? 'night' : 'day'); } catch (e) {}
      paint();
    });

    paint();
    /* 注入到侧栏 .sub 后面（"交互式数字教材"右侧） */
    var sub = document.querySelector('.side > .sub');
    if (sub) { sub.appendChild(b); }
    else { (document.body || document.documentElement).appendChild(b); }
  }

  if (document.readyState !== 'loading') make();
  else document.addEventListener('DOMContentLoaded', make);
})();
