/* 教师 / 管理端 · 题库编辑与学生作答复核
 * 纯前端：数据来自 exam_data.js（EXAM_QUESTIONS），编辑在内存 WORK 中进行，
 * 通过「导出 exam_data.js」落地为正式题库文件（单一真相源）.
 * 前端口令仅做可见性隔离，学生端无入口.
 */
(function () {
  "use strict";

  // —— 管理口令（按需修改）——
  var ADMIN_PASS = "teacher2026";
  var LS_CACHE = "admin_bank_cache_v1";     // 本机缓存未导出的修改
  var LS_SUBMIT = "exam_submissions_v1";    // 与 exam_app.js 共用
  var CH = { 1: "行列式", 2: "矩阵", 3: "向量组", 4: "线性方程组", 5: "相似矩阵与二次型" };
  var TY = { mc: "选择题", fill: "填空题", calc: "计算题", proof: "证明题", app: "应用拓展" };
  var SRC = { hw: "习题", test: "本章测试" };
  var DIFF = { 1: "易", 2: "中", 3: "难" };

  function $(id) { return document.getElementById(id); }
  function deepCopy(x) { try { return JSON.parse(JSON.stringify(x)); } catch (e) { return []; } }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function fixMathDelims(s) {
    if (typeof s !== "string") return s;
    var out = [], depth = 0, i = 0, n = s.length, CJK = ".、，！？；：「」『』（）〈〉《》【】…—～.";
    while (i < n) {
      if (s.slice(i, i + 2) === "\\(") { if (depth > 0) { out.push("\\)"); depth--; } out.push("\\("); depth++; i += 2; continue; }
      if (s.slice(i, i + 2) === "\\)") { if (depth === 0) { i += 2; continue; } out.push("\\)"); depth--; i += 2; continue; }
      if (s[i] === "\\" && CJK.indexOf(s[i + 1]) >= 0) { var p = s[i + 1]; if (p === "." || p === "）") { if (depth > 0) { out.push("\\)"); depth--; } } out.push(p); i += 2; continue; }
      out.push(s[i]); i++;
    }
    while (depth-- > 0) out.push("\\)");
    return out.join("");
  }
  function escM(s) { return fixMathDelims(esc(s)); }
  function RT(elm) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(elm, {
          delimiters: [
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          ignoredClasses: ["katex", "katex-lazy"]
        });
      } catch (e) {}
    }
  }

  var WORK = [];
  var editingId = null;   // 正在编辑的题 id；null 表示新增

  /* ---------------- 密码门 ---------------- */
  function unlock() {
    sessionStorage.setItem("admin_unlocked", "1");
    $("gate").hidden = true;
    $("app").hidden = false;
    initApp();
  }
  function locked() {
    var btn = $("gate-btn");
    function tryGo() {
      var v = $("gate-pwd").value;
      if (v === ADMIN_PASS) { unlock(); }
      else { $("gate-err").textContent = "口令错误，请重试."; }
    }
    btn.onclick = tryGo;
    $("gate-pwd").addEventListener("keydown", function (e) { if (e.key === "Enter") tryGo(); });
  }

  /* ---------------- 初始化 ---------------- */
  function initApp() {
    // 载入题库：优先本机缓存（未导出的修改），否则用源文件
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem(LS_CACHE) || "null"); } catch (e) {}
    if (cached && Array.isArray(cached) && cached.length) {
      WORK = cached;
      var b = $("adm-banner");
      b.hidden = false;
      b.innerHTML = "已从本机缓存恢复 <b>" + cached.length + "</b> 题未导出的修改.修改正式生效需点「⬇ 导出 exam_data.js」.　<button class='btn btn-ghost' id='b-clear'>清除缓存</button>";
      $("b-clear").onclick = function () { localStorage.removeItem(LS_CACHE); b.hidden = true; WORK = deepCopy(EXAM_QUESTIONS || []); renderStats(); renderBrowse(); };
    } else {
      WORK = deepCopy(EXAM_QUESTIONS || []);
    }

    // 章节下拉
    var chSel = $("af-ch");
    for (var c = 1; c <= 5; c++) chSel.innerHTML += '<option value="' + c + '">第' + c + '章 · ' + CH[c] + "</option>";
    var tySel = $("af-type");
    for (var t in TY) tySel.innerHTML += '<option value="' + t + '">' + TY[t] + "</option>";
    // 编辑器章节下拉
    var edCh = $("ed-ch");
    for (var c2 = 1; c2 <= 5; c2++) edCh.innerHTML += '<option value="' + c2 + '">第' + c2 + '章 · ' + CH[c2] + "</option>";

    $("af-go").onclick = renderBrowse;
    $("af-q").addEventListener("keydown", function (e) { if (e.key === "Enter") renderBrowse(); });
    $("af-new").onclick = function () { openEditor(null); };
    $("af-export").onclick = exportData;
    $("ed-save").onclick = saveEditor;
    $("ed-del").onclick = deleteEditor;
    $("ed-cancel").onclick = function () { $("sec-editor").hidden = true; editingId = null; };

    // 左侧导航
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.onclick = function (e) {
        e.preventDefault();
        showSection(a.getAttribute("data-nav"));
      };
    });

    renderStats();
    renderBrowse();
    bindEditorLivePreview();
  }

  function showSection(nav) {
    ["browse", "submit", "help"].forEach(function (n) {
      var s = $("sec-" + n);
      if (s) s.hidden = (n !== nav);
    });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.style.background = (a.getAttribute("data-nav") === nav) ? "#1b3547" : "";
      a.style.color = (a.getAttribute("data-nav") === nav) ? "#fff" : "";
    });
    if (nav === "submit") renderSubs();
  }

  /* ---------------- 统计 ---------------- */
  function renderStats() {
    $("adm-total").textContent = WORK.length;
    var byType = {}, byCh = {};
    WORK.forEach(function (q) {
      byType[q.type] = (byType[q.type] || 0) + 1;
      byCh[q.ch] = (byCh[q.ch] || 0) + 1;
    });
    var html = "";
    for (var t in TY) if (byType[t]) html += '<div class="adm-stat"><b>' + byType[t] + "</b>" + TY[t] + "</div>";
    var chHtml = "";
    for (var c = 1; c <= 5; c++) if (byCh[c]) chHtml += '<div class="adm-stat"><b>' + byCh[c] + "</b>第" + c + "章</div>";
    $("adm-stats").innerHTML = html + chHtml;
  }

  /* ---------------- 浏览 / 筛选 ---------------- */
  var bState = { ch: "0", type: "0", src: "0", diff: "0", q: "" };
  function renderBrowse() {
    bState.ch = $("af-ch").value;
    bState.type = $("af-type").value;
    bState.src = $("af-src").value;
    bState.diff = $("af-diff").value;
    bState.q = $("af-q").value.trim();
    var list = WORK.filter(function (q) {
      if (bState.ch !== "0" && String(q.ch) !== bState.ch) return false;
      if (bState.type !== "0" && q.type !== bState.type) return false;
      if (bState.src !== "0" && q.src !== bState.src) return false;
      if (bState.diff !== "0" && String(q.diff) !== bState.diff) return false;
      if (bState.q && (q.stem || "").indexOf(bState.q) === -1) return false;
      return true;
    });
    var L = $("af-list");
    if (!list.length) { L.innerHTML = '<p class="muted">无匹配题目.</p>'; return; }
    L.innerHTML = list.map(function (q) {
      var badges = '<span class="ex-badge">' + (CH[q.ch] || q.ch) + "</span>"
        + '<span class="ex-badge">' + (TY[q.type] || q.type) + "</span>"
        + '<span class="ex-badge">' + (SRC[q.src] || q.src) + "</span>"
        + '<span class="ex-badge">难度' + (DIFF[q.diff] || q.diff) + "</span>";
      var body = '<div class="ex-qstem">' + escM(q.stem || "") + "</div>";
      if (q.type === "mc" && q.options) {
        body += '<div class="ex-opts">' + q.options.map(function (o) {
          return '<div class="ex-opt"><span class="ex-ol">' + esc(o[0]) + ".</span> <span>" + escM(o[1]) + "</span></div>";
        }).join("") + "</div>";
      }
      var ans = (q.type === "mc" || q.type === "fill") && q.ans ? ('<div class="ex-ca">参考答案：' + esc(q.ans) + "</div>") : "";
      var fb = q.fb ? '<div class="ex-fb">' + escM(q.fb) + "</div>" : "";
      return '<div class="ex-card q-edit" data-id="' + esc(q.id) + '">' + badges + body + ans + fb
        + '<div class="ed-hint">点击编辑</div></div>';
    }).join("");
    RT(L);
    L.querySelectorAll(".q-edit").forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute("data-id");
        var q = WORK.filter(function (x) { return x.id === id; })[0];
        openEditor(q || null);
      };
    });
  }

  /* ---------------- 编辑器 ---------------- */
  function openEditor(q) {
    editingId = q ? q.id : null;
    $("ed-title").textContent = q ? "编辑题目" : "新增题目";
    $("ed-ch").value = q ? q.ch : 1;
    $("ed-type").value = q ? q.type : "mc";
    $("ed-src").value = q ? (q.src || "hw") : "hw";
    $("ed-diff").value = q ? (q.diff || 2) : 2;
    $("ed-stem").value = q ? (q.stem || "") : "";
    $("ed-ans").value = q ? (q.ans || "") : "";
    $("ed-fb").value = q ? (q.fb || "") : "";
    if (q && q.type === "mc" && q.options) {
      $("ed-opts").value = q.options.map(function (o) { return o[0] + ". " + o[1]; }).join("\n");
    } else {
      $("ed-opts").value = "";
    }
    $("ed-del").style.display = q ? "" : "none";
    toggleOpts();
    $("sec-editor").hidden = false;
    if ($("sec-editor").scrollIntoView) $("sec-editor").scrollIntoView({ behavior: "smooth" });
    renderEditorPreview();
  }
  function toggleOpts() {
    var isMc = $("ed-type").value === "mc";
    $("ed-opts").parentElement.style.display = isMc ? "" : "none";
  }
  function parseOptions(text) {
    var lines = (text || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
    var opts = [];
    lines.forEach(function (ln) {
      var m = ln.match(/^([A-Za-z])[\.、]\s*(.*)$/);
      if (m) opts.push([m[1], m[2]]);
    });
    return opts;
  }
  function saveEditor() {
    var type = $("ed-type").value;
    var stem = $("ed-stem").value.trim();
    if (!stem) { alert("题干不能为空."); return; }
    var obj = {
      id: editingId || ("admin-" + Date.now()),
      ch: parseInt($("ed-ch").value, 10),
      type: type,
      src: $("ed-src").value,
      diff: parseInt($("ed-diff").value, 10),
      stem: stem,
      ans: $("ed-ans").value.trim(),
      fb: $("ed-fb").value.trim()
    };
    if (type === "mc") {
      var opts = parseOptions($("ed-opts").value);
      if (opts.length < 2) { alert("选择题至少需要 2 个选项（每行：A. 内容）."); return; }
      obj.options = opts;
      var letters = opts.map(function (o) { return o[0]; });
      if (obj.ans && letters.indexOf(obj.ans) === -1) { alert("参考答案必须是选项中的一个字母：" + letters.join(", ")); return; }
    }
    if (editingId) {
      for (var i = 0; i < WORK.length; i++) if (WORK[i].id === editingId) { WORK[i] = obj; break; }
    } else {
      WORK.push(obj);
    }
    cacheWork();
    renderStats();
    renderBrowse();
    $("sec-editor").hidden = true;
    editingId = null;
  }
  function deleteEditor() {
    if (!editingId) return;
    if (!confirm("确定删除该题？")) return;
    WORK = WORK.filter(function (x) { return x.id !== editingId; });
    cacheWork();
    renderStats();
    renderBrowse();
    $("sec-editor").hidden = true;
    editingId = null;
  }
  function cacheWork() {
    try { localStorage.setItem(LS_CACHE, JSON.stringify(WORK)); } catch (e) {}
  }
  function bindEditorLivePreview() {
    ["ed-ch", "ed-type", "ed-stem", "ed-opts", "ed-ans", "ed-fb"].forEach(function (id) {
      $(id).addEventListener("input", function () { if (id === "ed-type") toggleOpts(); renderEditorPreview(); });
      $(id).addEventListener("change", function () { if (id === "ed-type") toggleOpts(); renderEditorPreview(); });
    });
  }
  function renderEditorPreview() {
    var type = $("ed-type").value;
    var stem = $("ed-stem").value.trim();
    var html = stem ? '<div class="ex-qstem">' + escM(stem) + "</div>" : '<span class="muted">（输入题干后预览）</span>';
    if (type === "mc") {
      var opts = parseOptions($("ed-opts").value);
      if (opts.length) html += '<div class="ex-opts">' + opts.map(function (o) {
        return '<div class="ex-opt"><span class="ex-ol">' + esc(o[0]) + ".</span> <span>" + escM(o[1]) + "</span></div>";
      }).join("") + "</div>";
    }
    var ans = (type === "mc" || type === "fill") && $("ed-ans").value.trim() ? '<div class="ex-ca">参考答案：' + esc($("ed-ans").value.trim()) + "</div>" : "";
    var fb = $("ed-fb").value.trim() ? '<div class="ex-fb">' + escM($("ed-fb").value.trim()) + "</div>" : "";
    var box = $("ed-preview");
    box.innerHTML = html + ans + fb;
    RT(box);
  }

  /* ---------------- 导出 ---------------- */
  function exportData() {
    var header = "// 线性代数数字教材 · 题库（由教师管理端导出）\n"
      + "// 导出时间：" + new Date().toLocaleString("zh-CN") + "\n"
      + "// 共 " + WORK.length + " 题.将此文件替换站点根目录的 exam_data.js 后重新部署即可生效.\n";
    var body = "window.EXAM_QUESTIONS = " + JSON.stringify(WORK, null, 0) + ";\n";
    var blob = new Blob([header + body], { type: "text/javascript;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "exam_data.js";
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    // 导出后清空本机缓存（已落地为正式文件）
    localStorage.removeItem(LS_CACHE);
    var b = $("adm-banner"); if (b) { b.hidden = true; }
    alert("已导出 exam_data.js（" + WORK.length + " 题）.\n请将其放回站点根目录并重新部署，学生端即可更新.");
  }

  /* ---------------- 学生提交记录（本机） ---------------- */
  function renderSubs() {
    var subs = [];
    try { subs = JSON.parse(localStorage.getItem(LS_SUBMIT) || "[]"); } catch (e) {}
    var box = $("sub-list");
    if (!subs.length) { box.innerHTML = '<p class="muted">暂无学生提交记录（学生需在本浏览器作答并交卷后才会产生）.</p>'; return; }
    box.innerHTML = subs.map(function (s, idx) {
      var imgs = (s.images && s.images.length)
        ? '<div class="sub-imgs">' + s.images.map(function (src) { return '<img src="' + src + '">'; }).join("") + "</div>"
        : "";
      var text = s.studentText ? '<div class="ex-fb">学生文字作答：' + esc(s.studentText) + "</div>" : '<div class="ex-fb muted">（仅上传了图片，无文字作答）</div>';
      return '<div class="sub-card" data-idx="' + idx + '">'
        + '<div class="sub-meta">[' + (CH[s.ch] || s.ch) + '·' + (TY[s.type] || s.type) + ']　提交时间：' + esc(s.date || "") + '　题号 ' + esc(s.id) + '</div>'
        + '<div class="ex-qstem">' + escM(s.stem || "") + "</div>"
        + imgs + text
        + '<div class="sub-row">'
          + '教师评分 <input type="text" class="sub-score" value="' + esc(s.score || "") + '" placeholder="如 85">'
          + '<textarea placeholder="评语 / 评分要点">' + esc(s.comment || "") + '</textarea>'
          + '<button class="btn sub-save">保存评定</button>'
        + "</div></div>";
    }).join("");
    RT(box);
    box.querySelectorAll(".sub-card").forEach(function (card) {
      var idx = parseInt(card.getAttribute("data-idx"), 10);
      card.querySelector(".sub-save").onclick = function () {
        var score = card.querySelector(".sub-score").value.trim();
        var comment = card.querySelector("textarea").value.trim();
        var all = [];
        try { all = JSON.parse(localStorage.getItem(LS_SUBMIT) || "[]"); } catch (e) {}
        if (all[idx]) { all[idx].score = score; all[idx].comment = comment; }
        localStorage.setItem(LS_SUBMIT, JSON.stringify(all));
        var b = card.querySelector(".sub-save");
        b.textContent = "已保存 ✓";
        setTimeout(function () { b.textContent = "保存评定"; }, 1500);
      };
    });
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    if (sessionStorage.getItem("admin_unlocked") === "1") {
      $("gate").hidden = true; $("app").hidden = false; initApp();
    } else {
      locked();
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
