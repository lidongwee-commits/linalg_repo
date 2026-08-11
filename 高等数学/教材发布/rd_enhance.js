/* 拓展阅读增强：分幕编号化 + 动态 SVG 配图（纯前端，CSS 动画驱动）
 * 作用：把"第一幕/第二幕…"这类段落重构成带圆形编号徽标的层次小标题，
 *       并在卡片顶部注入一张内联 SVG（动态演进曲线），统一轻量、不增加外部资源.
 */
(function () {
  'use strict';

  // 顶部配图：动态演进曲线 —— 流动粒子 + 呼吸光晕 + 平滑 S 曲线
  function svgHero() {
    return '<div style="position:relative;overflow:hidden;border-radius:6px;background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)">' +
      '<svg viewBox="0 0 800 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数学演进" style="display:block;width:100%;height:auto"' +
      ' class="rd-hero-svg">' +
      '<defs>' +
      /* 主曲线渐变 */
      '<linearGradient id="hg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#c47a20"/><stop offset="50%" stop-color="#0a8a6e"/><stop offset="100%" stop-color="#3b5998"/></linearGradient>' +
      /* 背景辐射渐变 */
      '<radialGradient id="rglow" cx="30%" cy="40%" r="60%"><stop offset="0%" stop-color="#c47a2015"/><stop offset="100%" stop-color="#00000000"/></radialGradient>' +
      '<radialGradient id="rglow2" cx="70%" cy="50%" r="50%"><stop offset="0%" stop-color="#3b599812"/><stop offset="100%" stop-color="#00000000"/></radialGradient>' +
      /* 粒子发光 */
      '<filter id="pglow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '</defs>' +

      /* 背景 */
      '<rect width="800" height="120" fill="#fafbfc" rx="6"/>' +
      '<rect width="800" height="120" fill="url(#rglow)" rx="6"/>' +
      '<rect width="800" height="120" fill="url(#rglow2)" rx="6"/>' +

      /* 水平参考线（极淡） */
      '<line x1="0" y1="60" x2="800" y2="60" stroke="#94a3b815" stroke-width="1"/>' +

      /* 主曲线：平滑 S 型 + 动画描边 */
      '<path class="hero-curve" d="M20 95 Q 150 85, 280 55 T 520 42 T 780 58"' +
      ' fill="none" stroke="url(#hg)" stroke-width="2.8" stroke-linecap="round"/>' +

      /* 光晕层（更粗，低透明度，呼吸效果） */
      '<path class="hero-glow" d="M20 95 Q 150 85, 280 55 T 520 42 T 780 58"' +
      ' fill="none" stroke="url(#hg)" stroke-width="8" stroke-linecap="round" opacity="0.12"/>' +

      /* 流动粒子 */
      '<g class="hero-particles" filter="url(#pglow)">' +
      '<circle class="p1" cx="20" cy="95" r="3.5" fill="#c47a20"/>' +
      '<circle class="p2" cx="150" cy="78" r="3" fill="#c47a20"/>' +
      '<circle class="p3" cx="280" cy="55" r="4" fill="#0a8a6e"/>' +
      '<circle class="p4" cx="400" cy="46" r="3" fill="#0a8a6e"/>' +
      '<circle class="p5" cx="520" cy="42" r="4" fill="#2d6a9e"/>' +
      '<circle class="p6" cx="650" cy="48" r="3" fill="#3b5998"/>' +
      '<circle class="p7" cx="780" cy="58" r="3.5" fill="#3b5998"/>' +
      '</g>' +

      '</svg>' +

      /* CSS 动画注入（只注入一次） */
      '<style>' +
      '.rd-hero-svg .hero-curve{stroke-dasharray:900;stroke-dashoffset:900;animation:heroDraw 3s ease-out forwards;-webkit-animation:heroDraw 3s ease-out forwards;}' +
      '.rd-hero-svg .hero-glow{animation:heroBreathe 4s ease-in-out infinite alternate;}' +
      '.rd-hero-svg .p1{animation:pFloat 3s ease-in-out infinite}.rd-hero-svg .p2{animation:pFloat 3s ease-in-out 0.4s infinite}' +
      '.rd-hero-svg .p3{animation:pFloat 3.5s ease-in-out 0.8s infinite}.rd-hero-svg .p4{animation:pFloat 3s ease-in-out 1.2s infinite}' +
      '.rd-hero-svg .p5{animation:pFloat 3.5s ease-in-out 1.6s infinite}.rd-hero-svg .p6{animation:pFloat 3s ease-in-out 2s infinite}' +
      '.rd-hero-svg .p7{animation:pFloat 3.2s ease-in-out 2.4s infinite}' +
      '@keyframes heroDraw{to{stroke-dashoffset:0;}}' +
      '@keyframes heroBreathe{from{opacity:0.06;}to{opacity:0.20;}}' +
      '@keyframes pFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-3px);}}' +
      '</style>' +
      '</div>';
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var _styled = false;
  function ensureStyle() {
    if (_styled) return;
    _styled = true;
    var s = document.createElement('style');
    s.textContent = '.rd-hero{margin-bottom:10px;line-height:0}';
    (document.head || document.documentElement).appendChild(s);
  }

  function enhanceDetails(details) {
    // 顶部动态配图
    if (!details.querySelector(':scope > .rd-hero')) {
      ensureStyle();
      var hero = document.createElement('div');
      hero.className = 'rd-hero';
      hero.innerHTML = svgHero();
      var sum = details.querySelector(':scope > summary');
      if (sum) sum.insertAdjacentElement('afterend', hero);
    }

    // 分幕编号化
    var ps = details.querySelectorAll(':scope > p');
    var n = 0;
    ps.forEach(function (p) {
      if (p.classList.contains('rd-src')) return;
      var b = p.querySelector(':scope > b, :scope > strong');
      if (!b) return;
      var txt = (b.textContent || '').trim();
      var m = txt.match(/^第.幕[：:]/);
      if (!m) return;
      n++;
      var title = txt.slice(m[0].length).replace(/[..]$/, '');
      var parts = [];
      var node = b.nextSibling;
      while (node) {
        parts.push(node.nodeType === 3 ? node.nodeValue : node.outerHTML);
        node = node.nextSibling;
      }
      var body = parts.join('');
      var act = document.createElement('div');
      act.className = 'rd-act';
      act.innerHTML =
        '<span class="rd-act-n">' + n + '</span>' +
        '<div class="rd-act-bd">' +
        '<div class="rd-act-h">' + escapeHtml(title) + '</div>' +
        '<div class="rd-act-t">' + body + '</div>' +
        '</div>';
      p.parentNode.replaceChild(act, p);
    });
  }

  function init() {
    var list = document.querySelectorAll('.rd-details');
    for (var i = 0; i < list.length; i++) enhanceDetails(list[i]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
