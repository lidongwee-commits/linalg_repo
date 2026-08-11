/**
 * 留言板 v5 · 基于 Cloudflare Workers + D1（永久免费 · 匿名 · 全平台同步）
 * - 右下角悬浮按钮，点击从右侧滑入面板（默认折叠，阅读时随时可开，不必翻到页尾）
 * - 按当前章节（页面文件名 chN.html → chN）分章独立留言
 * - 仅自己可见的删除：点面板头部 🔧 输入管理口令（= Worker 的 ADMIN_KEY）后显示 🗑 删除
 *
 * 后端：comments-worker.js（部署到 Cloudflare Workers，绑定 D1 binding 名 DB，并设置变量 ADMIN_KEY）
 * 前端：本文件，调用 COMMENTS_API_URL 提供的 GET/POST 接口
 */
(function () {
  'use strict';

  // ===== 在此填入你的 Cloudflare Worker 地址 =====
  var COMMENTS_API_URL = 'https://old-tree-dc24.ldwmath.workers.dev';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pageId() {
    var f = location.pathname.split('/').pop().replace(/\.html?$/, '');
    return f || 'home';
  }
  function nowStr() { return new Date().toLocaleString('zh-CN'); }
  function avatarColor(name) {
    var h = 0; for (var i = 0; i < (name || '').length; i++) h += name.charCodeAt(i);
    var hues = ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#06b6d4', '#6366f1'];
    return hues[h % hues.length];
  }

  var ADMIN_KEY_LS = 'mb_admin_key';   // 本地记住管理口令，避免每次输入

  // 注入样式（自包含，不依赖外部 CSS）
  function injectStyle() {
    if (document.getElementById('mb-style')) return;
    var css = [
      '/* ===== 统一 FAB Dock：留言按钮（底部锚点） ===== */',
      '.mb-fab{position:fixed;right:20px;bottom:20px;z-index:99990;width:48px;height:48px;border-radius:50%;',
      'border:none;cursor:pointer;color:#fff;font-size:20px;display:flex;align-items:center;justify-content:center;',
      'background:linear-gradient(135deg,#6366f1,#8b5cf6);box-shadow:0 6px 20px rgba(99,102,241,.40);',
      'transition:transform .2s ease,box-shadow .2s ease}',
      '.mb-fab:hover{transform:translateY(-2px) scale(1.06);box-shadow:0 10px 28px rgba(99,102,241,.50)}',
      '.mb-fab .mb-fab-dot{display:none}', /* 圆形模式下隐藏小圆点 */
      '/* ===== 遮罩 ===== */',
      '.mb-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.28);z-index:99991;opacity:0;visibility:hidden;transition:opacity .25s}',
      '.mb-backdrop.show{opacity:1;visibility:visible}',
      '.mb-panel{position:fixed;top:0;right:0;height:100%;width:390px;max-width:92vw;z-index:99992;',
      'background:#fff;box-shadow:-12px 0 40px rgba(15,23,42,.18);display:flex;flex-direction:column;',
      'transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);font-family:inherit}',
      '.mb-panel.open{transform:translateX(0)}',
      '.mb-phead{display:flex;align-items:center;gap:8px;padding:16px 18px;color:#fff;',
      'background:linear-gradient(135deg,#6366f1,#8b5cf6)}',
      '.mb-phead .mb-ptitle{font-size:16px;font-weight:700;flex:1}',
      '.mb-phead .mb-gear,.mb-phead .mb-close{border:none;background:rgba(255,255,255,.18);color:#fff;',
      'width:30px;height:30px;border-radius:8px;cursor:pointer;font-size:15px;line-height:1;transition:background .2s}',
      '.mb-phead .mb-gear:hover,.mb-phead .mb-close:hover{background:rgba(255,255,255,.34)}',
      '.mb-tip{padding:12px 18px;margin:0;font-size:12.5px;line-height:1.7;color:#64748b;background:#f8fafc;border-bottom:1px solid #eef2f7}',
      '.mb-form{padding:14px 18px;display:flex;flex-direction:column;gap:9px;border-bottom:1px solid #eef2f7;background:#fff}',
      '.mb-form .mb-input,.mb-form .mb-ta{border:1px solid #e2e8f0;border-radius:10px;padding:10px 12px;font-size:14px;',
      'font-family:inherit;outline:none;transition:border-color .2s,box-shadow .2s;resize:vertical}',
      '.mb-form .mb-input:focus,.mb-form .mb-ta:focus{border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.15)}',
      '.mb-form .mb-send{align-self:flex-end;border:none;border-radius:10px;padding:9px 18px;color:#fff;font-size:14px;',
      'font-weight:600;cursor:pointer;background:linear-gradient(135deg,#6366f1,#8b5cf6);transition:opacity .2s}',
      '.mb-form .mb-send:disabled{opacity:.6;cursor:default}',
      '.mb-list{flex:1;overflow-y:auto;padding:14px 18px;display:flex;flex-direction:column;gap:12px;background:#fbfcfe}',
      '.mb-empty{color:#94a3b8;font-size:13px;text-align:center;padding:24px 0}',
      '.mb-msg{display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #eef2f7;border-radius:12px;padding:11px 12px;position:relative}',
      '.mb-avatar{flex:none;width:36px;height:36px;border-radius:50%;color:#fff;font-weight:700;font-size:15px;',
      'display:flex;align-items:center;justify-content:center}',
      '.mb-body{flex:1;min-width:0}',
      '.mb-meta{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}',
      '.mb-name{font-weight:600;font-size:14px;color:#1e293b}',
      '.mb-time{font-size:11px;color:#94a3b8}',
      '.mb-text{font-size:14px;line-height:1.7;color:#334155;margin-top:3px;word-break:break-word;white-space:pre-wrap}',
      '.mb-del{position:absolute;top:8px;right:8px;border:none;background:#fef2f2;color:#ef4444;width:24px;height:24px;',
      'border-radius:7px;cursor:pointer;font-size:13px;line-height:1;display:none;transition:background .2s}',
      '.mb-del:hover{background:#fee2e2}',
      '.mb-panel.admin .mb-del{display:block}',
      '@media (max-width:520px){.mb-fab{bottom:16px;right:16px;width:44px;height:44px;font-size:18px}}'
    ].join('');
    var st = document.createElement('style');
    st.id = 'mb-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  window.initMsgBoard = function () {
    if (!COMMENTS_API_URL || COMMENTS_API_URL === 'YOUR_WORKER_URL_HERE') {
      var warn = document.createElement('div');
      warn.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:99990;max-width:280px;padding:14px 16px;border-radius:12px;background:#fffbeb;color:#b45309;font-size:13px;box-shadow:0 8px 24px rgba(0,0,0,.15)';
      warn.textContent = '⚠️ 留言板未配置：请在 msgboard.js 顶部填入 Cloudflare Worker 地址.';
      document.body.appendChild(warn);
      return;
    }

    injectStyle();
    var pid = pageId();

    // 悬浮按钮
    var fab = document.createElement('button');
    fab.className = 'mb-fab'; fab.type = 'button';
    fab.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    document.body.appendChild(fab);

    // 遮罩（移动端点击关闭）
    var backdrop = document.createElement('div');
    backdrop.className = 'mb-backdrop';
    document.body.appendChild(backdrop);

    // 面板
    var panel = document.createElement('div');
    panel.className = 'mb-panel';
    panel.innerHTML =
      '<div class="mb-phead">' +
        '<span class="mb-ptitle">💬 学习交流</span>' +
        '<button class="mb-gear" type="button" title="管理（删除留言）">🔧</button>' +
        '<button class="mb-close" type="button" title="收起">×</button>' +
      '</div>' +
      '<p class="mb-tip">提问、分享心得、与同学讨论.所有留言对本页所有人可见，填昵称即可，无需登录.</p>' +
      '<div class="mb-form">' +
        '<input type="text" class="mb-input mb-name-input" placeholder="你的昵称（可选，默认匿名）" maxlength="20">' +
        '<textarea class="mb-ta" placeholder="写下你想说的…" rows="3" maxlength="500"></textarea>' +
        '<button class="mb-send" type="button">📤 发送留言</button>' +
      '</div>' +
      '<div class="mb-list"><div class="mb-empty">加载中…</div></div>';
    document.body.appendChild(panel);

    var listEl = panel.querySelector('.mb-list');
    var nameInput = panel.querySelector('.mb-name-input');
    var textInput = panel.querySelector('.mb-ta');
    var sendBtn = panel.querySelector('.mb-send');
    var isAdmin = !!localStorage.getItem(ADMIN_KEY_LS);
    if (isAdmin) panel.classList.add('admin');

    function openPanel() { panel.classList.add('open'); backdrop.classList.add('show'); fab.style.display = 'none'; }
    function closePanel() { panel.classList.remove('open'); backdrop.classList.remove('show'); fab.style.display = 'flex'; }
    fab.addEventListener('click', openPanel);
    panel.querySelector('.mb-close').addEventListener('click', closePanel);
    backdrop.addEventListener('click', closePanel);

    // 管理：输入口令后显示删除按钮
    panel.querySelector('.mb-gear').addEventListener('click', function () {
      if (panel.classList.contains('admin')) {
        panel.classList.remove('admin');
        localStorage.removeItem(ADMIN_KEY_LS);
        return;
      }
      var key = prompt('请输入管理口令（与 Worker 的 ADMIN_KEY 一致）：');
      if (!key) return;
      sendBtn.disabled = true;
      fetch(COMMENTS_API_URL + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id: -1, key: key })
      }).then(function (r) {
        if (r.status === 403) { alert('口令错误，或无删除权限.'); return; }
        // 403 表示未授权；其他（400/ok）表示口令通过（id=-1 不会真删）
        localStorage.setItem(ADMIN_KEY_LS, key);
        panel.classList.add('admin');
        alert('已进入管理模式，鼠标悬停留言可见 🗑 删除按钮.');
      }).catch(function () { alert('验证失败，请检查网络.'); })
        .finally(function () { sendBtn.disabled = false; });
    });

    function renderMsg(m) {
      var name = m.name || '匿名';
      var avatar = name.charAt(0).toUpperCase();
      var delBtn = (m.id != null) ? '<button class="mb-del" data-id="' + m.id + '" title="删除">🗑</button>' : '';
      return '<div class="mb-msg">' +
        delBtn +
        '<div class="mb-avatar" style="background:' + avatarColor(name) + '">' + esc(avatar) + '</div>' +
        '<div class="mb-body">' +
          '<div class="mb-meta"><span class="mb-name">' + esc(name) + '</span>' +
          '<span class="mb-time">' + esc(m.created_at || '') + '</span></div>' +
          '<div class="mb-text">' + esc(m.text) + '</div>' +
        '</div></div>';
    }

    listEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.mb-del');
      if (!btn) return;
      if (!confirm('确定删除这条留言？')) return;
      var id = btn.getAttribute('data-id');
      var key = localStorage.getItem(ADMIN_KEY_LS) || '';
      btn.textContent = '…'; btn.disabled = true;
      fetch(COMMENTS_API_URL + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id: Number(id), key: key })
      }).then(function (r) {
        if (!r.ok) throw new Error('bad');
        var msg = btn.closest('.mb-msg');
        if (msg) msg.remove();
      }).catch(function () { alert('删除失败，请重试.'); btn.textContent = '🗑'; btn.disabled = false; });
    });

    function loadComments() {
      fetch(COMMENTS_API_URL + '/?page=' + encodeURIComponent(pid))
        .then(function (r) { return r.json(); })
        .then(function (list) {
          listEl.innerHTML = '';
          if (!list || !list.length) {
            listEl.innerHTML = '<div class="mb-empty">📭 还没有留言，来说点什么吧！</div>';
            return;
          }
          list.forEach(function (m) {
            var div = document.createElement('div');
            div.innerHTML = renderMsg(m);
            listEl.appendChild(div.firstElementChild);
          });
        })
        .catch(function () {
          listEl.innerHTML = '<div class="mb-empty">😢 留言加载失败，请检查网络或 Worker 地址.</div>';
        });
    }

    function send() {
      var text = textInput.value.trim();
      if (!text) { textInput.focus(); return; }
      var name = nameInput.value.trim() || '匿名';
      sendBtn.disabled = true;
      sendBtn.textContent = '发送中…';
      fetch(COMMENTS_API_URL + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, text: text, page: pid })
      })
        .then(function (r) {
          if (!r.ok) throw new Error('bad');
          textInput.value = '';
          var empty = listEl.querySelector('.mb-empty');
          if (empty) empty.remove();
          var div = document.createElement('div');
          div.innerHTML = renderMsg({ name: name, text: text, created_at: nowStr() });
          listEl.insertBefore(div.firstElementChild, listEl.firstChild);
          sendBtn.textContent = '✅ 已发送';
          setTimeout(function () { sendBtn.textContent = '📤 发送留言'; }, 1200);
        })
        .catch(function () {
          sendBtn.textContent = '❌ 发送失败，重试';
          setTimeout(function () { sendBtn.textContent = '📤 发送留言'; }, 1500);
        })
        .finally(function () { sendBtn.disabled = false; });
    }

    sendBtn.addEventListener('click', send);
    textInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });

    loadComments();
  };
})();
