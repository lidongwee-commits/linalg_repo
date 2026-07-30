/* ===================================================================
 * 本节练习 section_quiz.js（右侧面板版）
 *   - 教材在左、练习在右：点击小节末的「本节小练」卡片，在页面右侧
 *     滑出练习面板，绝不跳转、不离开当前阅读位置。
 *   - 每批 15 题起：本节客观题优先，不足 15 道用同章其他小节补足。
 *   - 选择题点选即判、填空题输入检查，即时反馈 + 解析。
 *   - 全部作答后按正确率累积能量（EnergyBar.awardExam，共用 study_v1）。
 *   - 「换一批」重新随机抽题，可反复练。
 *   - 题库懒加载（exam_data.js 挂 window.EXAM_QUESTIONS）。
 * =================================================================== */
(function () {
  "use strict";
  var BATCH = 15;                       // 每批最少题数
  var CJK_PUNCT = "。，、；：？！）（《》【】";

  /* ---------- 公式定界符修复 / 转义（与 exam_app.js 一致） ---------- */
  function fixMathDelims(s) {
    if (typeof s !== "string") return s;
    var out = [], depth = 0, i = 0, n = s.length;
    while (i < n) {
      if (s.slice(i, i + 2) === "\\(") {
        if (depth > 0) { out.push("\\)"); depth--; }
        out.push("\\("); depth++; i += 2; continue;
      }
      if (s.slice(i, i + 2) === "\\)") {
        if (depth === 0) { i += 2; continue; }
        out.push("\\)"); depth--; i += 2; continue;
      }
      if (s[i] === "\\" && CJK_PUNCT.indexOf(s[i + 1]) >= 0) {
        var p = s[i + 1];
        if (p === "。" || p === "）") { if (depth > 0) { out.push("\\)"); depth--; } }
        out.push(p); i += 2; continue;
      }
      out.push(s[i]); i++;
    }
    while (depth-- > 0) out.push("\\)");
    return out.join("");
  }
  function esc(s) {
    return fixMathDelims((s == null ? "" : String(s)).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    }));
  }
  function norm(s) {
    return (s == null ? "" : String(s))
      .replace(/\s+/g, "").replace(/[（）()]/g, "").replace(/[－—–―]/g, "-")
      .replace(/[，,]/g, ",").replace(/[．.]/g, ".").replace(/[ＸXⅩ]/g, "x").toLowerCase();
  }
  /* 去掉题干自身已有的序号，避免与批内序号 (i+1). 叠加成 "4. 1." */
  function stripStemNo(s) {
    if (typeof s !== "string") return s;
    return s.replace(/^\s*\d+[\.．、\)\]）]\s*/, "");
  }
  function RT(el) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false,
          macros: { "\\xlongequal": "\\overset{#1}{=\\!=\\!=}" },
          ignoredClasses: ["katex"]
        });
        if (window.fixVdots) fixVdots(el);
      } catch (e) {}
    }
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- 懒加载题库（exam_data.js 顶部为 window.EXAM_QUESTIONS =） ---------- */
  var loading = false, loadCbs = [];
  function loadBank(cb) {
    if (window.EXAM_QUESTIONS && window.EXAM_QUESTIONS.length) { cb(); return; }
    loadCbs.push(cb);
    if (loading) return;
    loading = true;
    var sc = document.createElement("script");
    sc.src = "exam_data.js";
    sc.onload = function () {
      var err = (window.EXAM_QUESTIONS && window.EXAM_QUESTIONS.length) ? null : new Error("empty bank");
      loadCbs.forEach(function (f) { try { f(err); } catch (e) {} }); loadCbs = [];
    };
    sc.onerror = function () {
      loading = false;
      loadCbs.forEach(function (f) { try { f(new Error("load fail")); } catch (e) {} }); loadCbs = [];
    };
    document.head.appendChild(sc);
  }

  function isObj(q) { return q.type === "mc" || q.type === "fill"; }
  function secPool(sec) {
    return (window.EXAM_QUESTIONS || []).filter(function (q) { return q.sec === sec && isObj(q); });
  }
  function chPool(ch, excludeSec) {
    return (window.EXAM_QUESTIONS || []).filter(function (q) {
      return String(q.ch) === String(ch) && q.sec !== excludeSec && isObj(q);
    });
  }
  /* 本节优先，不足 BATCH 用同章补足；mc 在前 fill 在后 */
  function pickBatch(sec, ch) {
    var picked = shuffle(secPool(sec)).slice(0, BATCH);
    if (picked.length < BATCH) {
      picked = picked.concat(shuffle(chPool(ch, sec)).slice(0, BATCH - picked.length));
    }
    var mcs = picked.filter(function (q) { return q.type === "mc"; });
    var fills = picked.filter(function (q) { return q.type === "fill"; });
    return mcs.concat(fills);
  }

  /* ---------- 右侧练习面板（单例） ---------- */
  var drawer = null, dTitle = null, dProg = null, dBody = null;
  function ensureDrawer() {
    if (drawer) return;
    drawer = document.createElement("div");
    drawer.className = "sq-drawer";
    drawer.innerHTML =
      '<div class="sq-dhead">' +
        '<div class="sq-dtitles"><b class="sq-dtitle"></b><span class="sq-dprog"></span></div>' +
        '<button class="sq-dclose" title="收起练习面板">✕</button>' +
      '</div>' +
      '<div class="sq-dbody"></div>';
    document.body.appendChild(drawer);
    dTitle = drawer.querySelector(".sq-dtitle");
    dProg = drawer.querySelector(".sq-dprog");
    dBody = drawer.querySelector(".sq-dbody");
    drawer.querySelector(".sq-dclose").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
  }
  function openDrawer() { ensureDrawer(); drawer.classList.add("open"); document.body.classList.add("sq-open"); }
  function closeDrawer() { if (drawer) { drawer.classList.remove("open"); document.body.classList.remove("sq-open"); } }

  /* ---------- 渲染一批题到面板 ---------- */
  function renderBatch(sec, ch, secTitle) {
    var qs = pickBatch(sec, ch);
    var nSec = qs.filter(function (q) { return q.sec === sec; }).length;
    var st = { total: qs.length, done: 0, right: 0, awarded: false };
    dTitle.textContent = "本节小练 · " + (secTitle || sec);
    function prog() {
      dProg.textContent = "已答 " + st.done + " / " + st.total + " · 答对 " + st.right;
    }
    prog();

    var html = "";
    if (nSec < st.total) {
      html += '<p class="sq-mix">本节客观题 ' + nSec + ' 道，已用同章题目补足 ' + st.total + ' 道。</p>';
    }
    html += qs.map(function (q, i) {
      var h = '<div class="sq-q" data-i="' + i + '">';
      h += '<div class="sq-stem"><b>' + (i + 1) + '.</b> ' + esc(stripStemNo(q.stem)) + "</div>";
      if (q.type === "mc") {
        h += '<div class="sq-opts">' + (q.options || []).map(function (o) {
          return '<div class="sq-opt" data-v="' + esc(o[0]) + '"><b>' + esc(o[0]) + '.</b> <span>' + esc(o[1]) + "</span></div>";
        }).join("") + "</div>";
      } else {
        h += '<div>答：<input type="text" class="sq-fillin"> <button class="sq-btn sq-check" style="margin-left:8px;padding:5px 14px">检查</button></div>';
      }
      h += '<div class="sq-fb"></div></div>';
      return h;
    }).join("");
    html += '<div class="sq-actions" style="display:none">' +
      '<span class="sq-result"></span><span class="sq-energy"></span>' +
      '<button class="sq-btn sq-again">🔄 换一批再练</button></div>';
    dBody.innerHTML = html;
    dBody.scrollTop = 0;
    RT(dBody);

      function finishOne(qEl, ok, q, userAns) {
        st.done++; if (ok) st.right++;
        prog();
        var fb = qEl.querySelector(".sq-fb");
        var msg = "";
        if (q.type === "fill") {
          msg = "📖 参考答案：" + esc(q.ans);
          if (q.fb) msg += "<br>" + esc(q.fb);
          msg += "<br><small>你输入了：" + esc(userAns || "") + "；若形式不同但等价，也算对。</small>";
        } else {
          msg = ok ? "✅ 答对了！" : "❌ 再想想～正确答案：" + esc(q.ans);
          if (q.fb) msg += "<br>" + esc(q.fb);
        }
        fb.className = "sq-fb " + (ok ? "ok" : "bad");
        fb.innerHTML = msg;
        RT(fb);
        if (st.done === st.total) {
        var bar = dBody.querySelector(".sq-actions");
        bar.style.display = "flex";
        bar.querySelector(".sq-result").textContent = "本批完成：答对 " + st.right + " / " + st.total;
        if (!st.awarded) {
          st.awarded = true;
          var gain = 0;
          try {
            if (window.EnergyBar && window.EnergyBar.awardExam) {
              gain = window.EnergyBar.awardExam(st.right, st.total);
              if (window.EnergyBar.refresh) window.EnergyBar.refresh();
            }
          } catch (e) {}
          if (gain) bar.querySelector(".sq-energy").textContent = "⚡ 能量 +" + gain;
        }
        bar.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    qs.forEach(function (q, i) {
      var qEl = dBody.querySelector('.sq-q[data-i="' + i + '"]');
      if (q.type === "mc") {
        var opts = qEl.querySelectorAll(".sq-opt");
        var answered = false;
        opts.forEach(function (op) {
          op.addEventListener("click", function () {
            if (answered) return;
            answered = true;
            var v = op.getAttribute("data-v");
            var ok = v === q.ans;
            opts.forEach(function (o2) {
              if (o2.getAttribute("data-v") === q.ans) o2.classList.add("right");
            });
            if (!ok) op.classList.add("wrongpick");
            finishOne(qEl, ok, q);
          });
        });
      } else {
        var btn = qEl.querySelector(".sq-check"), inp = qEl.querySelector(".sq-fillin");
        var done = false;
        function looseFillMatch(v, a) {
          if (!a) return true;                // 无标准答案 -> 不判错
          var nv = norm(v), na = norm(a);
          if (nv === na) return true;
          // 支持常见等价：1/2 == 0.5；x^2 == x^{2}；去掉空格后比对
          var strip = function (s) { return s.replace(/[\\{}\[\]()^]/g, "").replace(/\\\\/g, ""); };
          if (strip(nv) === strip(na)) return true;
          // 数值近似：若两边都能算成数字，误差<1e-6
          try {
            var ev = Function('"use strict"; return (' + nv.replace(/x/g, '1').replace(/n/g, '2') + ')')();
            var ea = Function('"use strict"; return (' + na.replace(/x/g, '1').replace(/n/g, '2') + ')')();
            if (typeof ev === 'number' && typeof ea === 'number' && isFinite(ev) && isFinite(ea) && Math.abs(ev - ea) < 1e-6) return true;
          } catch (e) {}
          return false;
        }
        var check = function () {
          if (done) return;
          var v = inp.value.trim();
          if (!v) { inp.focus(); return; }
          done = true; btn.disabled = true; inp.disabled = true;
          var ok = looseFillMatch(v, q.ans);
          if (ok) st.right++; // 宽松匹配成功即算对
          finishOne(qEl, true, q, v); // 填空题统一不标红，避免机器误判打击积极性
        };
        btn.addEventListener("click", check);
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
      }
    });
    var again = dBody.querySelector(".sq-again");
    if (again) again.addEventListener("click", function () { renderBatch(sec, ch, secTitle); });
  }

  /* ---------- 小节末卡片：只做入口，练习在右侧面板 ---------- */
  function initCard(card) {
    var sec = card.getAttribute("data-sec");
    var ch = card.getAttribute("data-ch") || (sec ? sec[1] : "");
    var nSec = parseInt(card.getAttribute("data-n") || "0", 10);
    // 小节标题（用于面板抬头）
    var secTitle = "";
    var h2 = document.getElementById(sec);
    if (h2) secTitle = (h2.textContent || "").replace(/\s+/g, " ").trim();
    var subtxt = nSec >= BATCH
      ? "本节 " + nSec + " 道客观题 · 每批 " + BATCH + " 道 · 即时判分"
      : "本节 " + nSec + " 道客观题 · 同章补足至 " + BATCH + " 道 · 即时判分";
    card.innerHTML = '<div class="sq-head">' +
      '<span class="sq-title">⚡ 学完就练 · 本节小练</span>' +
      '<span class="sq-sub">' + subtxt + "（练习在右侧展开，不离开教材）</span>" +
      '<button class="sq-btn">开始练习 ▶</button></div>';
    var btn = card.querySelector(".sq-btn");
    btn.addEventListener("click", function () {
      btn.disabled = true;
      var t0 = btn.textContent;
      btn.textContent = "题目加载中…";
      loadBank(function (err) {
        btn.disabled = false;
        btn.textContent = t0;
        if (err) { btn.textContent = "题库加载失败，点击重试"; return; }
        openDrawer();
        renderBatch(sec, ch, secTitle);
      });
    });
  }

  function boot() {
    document.querySelectorAll(".sec-quiz[data-sec]").forEach(initCard);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
