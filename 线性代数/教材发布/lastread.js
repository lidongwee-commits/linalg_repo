/* ============================================================
 * lastread.js · 阅读位置记忆（续读）
 * - 章节页自动记录：当前书 / 章节 / 小节锚点 / 滚动位置
 * - 重新打开同章自动滚回上次位置（两次校正，等 KaTeX 渲染完）
 * - 门户页可读 LastRead 直达上次阅读处
 * 依赖：window.TOWER_BOOK（'gdsx' | 'linalg'，两套教材已注入）
 * ============================================================ */
(function () {
  var KEY = 'hfut_lastread';
  var BOOK = (window.TOWER_BOOK === 'linalg') ? 'linalg' : 'gdsx';
  var file = (location.pathname.split('/').pop() || '');
  var m = file.match(/^ch(\d+)\.html$/);
  var isChapter = !!m;

  var LS = {
    get: function () { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } },
    set: function (v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} },
    remove: function () { try { localStorage.removeItem(KEY); } catch (e) {} }
  };

  /* 当前阅读区所在的小节锚点（视口上部最近的 h2/h3 id） */
  function currentAnchor() {
    if (location.hash) return location.hash.slice(1);
    var heads = document.querySelectorAll('h2[id], h3[id], section[id]');
    if (!heads.length) return '';
    var y = window.scrollY || document.documentElement.scrollTop || 0;
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    var found = '';
    for (var i = 0; i < heads.length; i++) {
      var top = heads[i].getBoundingClientRect().top + y;
      if (top <= y + vh * 0.35) found = heads[i].id;
      else break;
    }
    return found;
  }

  function save() {
    if (!isChapter) return;
    LS.set({
      book: BOOK,
      ch: 'ch' + m[1],
      anchor: currentAnchor(),
      scroll: Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0),
      t: Date.now()
    });
  }

  var timer = null;
  window.addEventListener('scroll', function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(save, 700);
  }, { passive: true });
  window.addEventListener('beforeunload', save);
  document.addEventListener('visibilitychange', function () { if (document.hidden) save(); });

  /* 同章重开：自动滚回上次位置（两段校正，等 KaTeX 视口渲染稳定） */
  function restore() {
    if (!isChapter) return;
    var r = LS.get();
    if (!r || r.book !== BOOK || r.ch !== 'ch' + m[1]) return;
    if (location.hash) return; /* 带锚点进入（门户续读/目录跳转），交给浏览器 */
    var y = r.scroll || 0;
    if (!y) return;
    setTimeout(function () { window.scrollTo(0, y); }, 450);
    setTimeout(function () { window.scrollTo(0, y); }, 1500);
  }
  restore();

  window.LastRead = {
    get: LS.get,
    clear: LS.remove
  };
})();
