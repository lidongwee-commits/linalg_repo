/* mobile_nav.js — 移动端抽屉导航 + 滚动高亮(scroll-spy)
 * 纯前端，无后端依赖.桌面端抽屉藏在屏幕外，无副作用.
 * 与 sidebar / drawer-nav 共用同一套链接，二者同步高亮.
 */
(function () {
  'use strict';

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = $('.nav-toggle');
    var drawer = $('#navDrawer');
    var mask = $('#navMask');
    var closeBtn = $('#navClose');
    if (!drawer) return; // 桌面端无抽屉，直接退出

    var body = document.body;
    var lastFocus = null;

    function openDrawer() {
      drawer.classList.add('open');
      if (mask) mask.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden'; // 锁定背景滚动
      lastFocus = document.activeElement;
      var first = drawer.querySelector('a');
      if (first) try { first.focus(); } catch (e) {}
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      if (mask) mask.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
      if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
    }
    function toggleDrawer() {
      if (drawer.classList.contains('open')) closeDrawer(); else openDrawer();
    }

    if (toggle) toggle.addEventListener('click', function (e) { e.stopPropagation(); toggleDrawer(); });
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (mask) mask.addEventListener('click', closeDrawer);
    // 点抽屉内任意链接后自动收起（跳转在默认行为中发生）
    $all('a', drawer).forEach(function (a) {
      a.addEventListener('click', function () {
        // 同一页内锚点跳转需等滚动完成，短延迟收起即可
        setTimeout(closeDrawer, 80);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
    // 视口放大到桌面尺寸时确保抽屉关闭，避免状态残留
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && drawer.classList.contains('open')) closeDrawer();
    });

    /* ---- scroll-spy：高亮当前阅读章节（侧栏 + 抽屉同步）---- */
    var spyTargets = {}; // id -> [linkEl, ...]
    $all('.side a, .drawer-nav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var m = href.match(/#([\w\u4e00-\u9fa5-]+)$/);
      if (m) {
        var id = m[1];
        (spyTargets[id] = spyTargets[id] || []).push(a);
      }
    });
    var ids = Object.keys(spyTargets);
    if (ids.length && 'IntersectionObserver' in window) {
      var current = null;
      var io = new IntersectionObserver(function (entries) {
        // 取当前最靠上且可见的章节
        var visible = entries.filter(function (en) { return en.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
        if (!visible.length) return;
        var id = visible[0].target.id;
        if (id === current) return;
        current = id;
        $all('.side a.active, .drawer-nav a.active').forEach(function (x) { x.classList.remove('active'); });
        (spyTargets[id] || []).forEach(function (l) { l.classList.add('active'); });
      }, { rootMargin: '-12% 0px -78% 0px', threshold: 0 });
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }
  });
})();
