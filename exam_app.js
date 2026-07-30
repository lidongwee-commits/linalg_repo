/* 题库与智能考试系统 —— 纯前端、离线可用、依赖 EXAM_QUESTIONS（exam_data.js）与 KaTeX（auto-render） */
(function () {
  "use strict";
  var BANK = (typeof EXAM_QUESTIONS !== "undefined") ? EXAM_QUESTIONS : [];
  var CH = { 1: "行列式", 2: "矩阵", 3: "向量组", 4: "线性方程组", 5: "相似矩阵与二次型" };
  var TY = { mc: "选择题", fill: "填空题", calc: "计算题", proof: "证明题", app: "应用拓展" };
  var SRC = { hw: "习题", test: "本章测试" };
  var DIFF = { 1: "易", 2: "中", 3: "难" };
  var LS_WRONG = "exam_wrong_v1";
  var LS_SCORE = "exam_scores_v1";
  var LS_SUBMIT = "exam_submissions_v1";   // 学生主观题作答存档（含图片），供教师复核
  var qImages = {};                        // 本次考试各主观题已上传的图片（base64）

  function $(id) { return document.getElementById(id); }
  var CJK_PUNCT = "。、，！？；：「」『』（）〈〉《》【】…—～．〔〕";
  function fixMathDelims(s) {
    // 修复 OCR 题常见的 \( \) 嵌套/不配对，以及「反斜杠+中文标点」残片（即 \) 与中文标点相连被 OCR 吞掉右定界符）
    if (typeof s !== "string") return s;
    var out = [], depth = 0, i = 0, n = s.length;
    while (i < n) {
      if (s.slice(i, i + 2) === "\\(") {
        if (depth > 0) { out.push("\\)"); depth--; }   // 嵌套开新段：先闭合上一层
        out.push("\\("); depth++; i += 2; continue;
      }
      if (s.slice(i, i + 2) === "\\)") {
        if (depth === 0) { i += 2; continue; }           // 多余闭合，丢弃
        out.push("\\)"); depth--; i += 2; continue;
      }
      // OCR 残片：反斜杠 + 中文标点，原本应是 \) 紧接中文标点
      if (s[i] === "\\" && CJK_PUNCT.indexOf(s[i + 1]) >= 0) {
        var p = s[i + 1];
        if (p === "。" || p === "）") {
          if (depth > 0) { out.push("\\)"); depth--; }   // 补回被吞掉的右定界符
        }
        out.push(p); i += 2; continue;
      }
      out.push(s[i]); i++;
    }
    while (depth-- > 0) out.push("\\)");                 // 结尾未闭合则补
    return out.join("");
  }
  function esc(s) {
    return fixMathDelims((s == null ? "" : String(s)).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    }));
  }
  function norm(s) {
    return (s == null ? "" : String(s))
      .replace(/\s+/g, "")
      .replace(/[（）()]/g, "")
      .replace(/[－—–―]/g, "-")
      .replace(/[，,]/g, ",")
      .replace(/[．.]/g, ".")
      .replace(/[ＸXⅩ]/g, "x")
      .toLowerCase();
  }
  /* 去掉题干自身已有的序号，避免与试卷/错题本序号叠加成 "2. 14. ..." */
  function stripStemNo(s) {
    if (typeof s !== "string") return s;
    return s.replace(/^\s*\d+[\.．、\)\]）]\s*/, "");
  }
  function fixVdots(root) {
    // KaTeX 的 \vdots 渲染为外层 <span class="mord"><span class="mord">⋮</span><span class="mord rule"></span></span>;
    // .mord.rule 是撑高占位条，其外层 .mord 在 vlist 行内定位会下坠到下一行，导致省略号与下方元素重叠/贴底。
    // 给该外层 .mord 加 inline-block + 上移，可修复重叠，且不依赖 :has() 兼容性。
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('.katex-html .mord.rule').forEach(function (rule) {
      var m = rule.parentElement;
      if (m && m.classList && m.classList.contains('mord')) {
        m.style.display = 'inline-block';
        m.style.transform = 'translateY(-1.7em)';
        m.style.verticalAlign = 'middle';
      }
    });
  }
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
    fixVdots(elm);
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getWrong() {
    try { return JSON.parse(localStorage.getItem(LS_WRONG) || "[]"); } catch (e) { return []; }
  }
  function setWrong(arr) { localStorage.setItem(LS_WRONG, JSON.stringify(arr)); }
  function getScores() {
    try { return JSON.parse(localStorage.getItem(LS_SCORE) || "[]"); } catch (e) { return []; }
  }
  function setScores(arr) { localStorage.setItem(LS_SCORE, JSON.stringify(arr)); }

  // ---------------- 题库浏览 ----------------
  var bState = { ch: "0", type: "0", src: "0", diff: "0", q: "" };
  function renderBrowse() {
    var pane = $("ex-browse");
    var html = '<div class="ex-filters">';
    html += '<select id="bf-ch"><option value="0">全部章节</option>';
    for (var c = 1; c <= 5; c++) html += '<option value="' + c + '">第' + c + '章 · ' + CH[c] + "</option>";
    html += "</select>";
    html += '<select id="bf-type"><option value="0">全部题型</option>';
    for (var t in TY) html += '<option value="' + t + '">' + TY[t] + "</option>";
    html += "</select>";
    html += '<select id="bf-src"><option value="0">全部来源</option>';
    html += '<option value="hw">习题</option><option value="test">本章测试</option></select>';
    html += '<select id="bf-diff"><option value="0">全部难度</option>';
    html += '<option value="1">易</option><option value="2">中</option><option value="3">难</option></select>';
    html += '<input id="bf-q" class="ex-search" placeholder="搜索题干关键字…">';
    html += '<button class="btn" id="bf-go">筛选</button>';
    html += '<span class="ex-count" id="bf-count"></span></div>';
    html += '<div id="bf-list" class="ex-list"></div>';
    pane.innerHTML = html;
    RT(pane);
    function apply() {
      bState.ch = $("bf-ch").value;
      bState.type = $("bf-type").value;
      bState.src = $("bf-src").value;
      bState.diff = $("bf-diff").value;
      bState.q = $("bf-q").value.trim();
      var list = BANK.filter(function (q) {
        if (bState.ch !== "0" && String(q.ch) !== bState.ch) return false;
        if (bState.type !== "0" && q.type !== bState.type) return false;
        if (bState.src !== "0" && q.src !== bState.src) return false;
        if (bState.diff !== "0" && String(q.diff) !== bState.diff) return false;
        if (bState.q && q.stem.indexOf(bState.q) === -1) return false;
        return true;
      });
      $("bf-count").textContent = "命中 " + list.length + " 题";
      var L = $("bf-list");
      if (!list.length) { L.innerHTML = '<p class="muted">无匹配题目。</p>'; RT(L); return; }
      L.innerHTML = list.map(function (q) {
        return questionCard(q, false);
      }).join("");
      RT(L);
    }
    $("bf-go").onclick = apply;
    $("bf-q").onkeydown = function (e) { if (e.key === "Enter") apply(); };
    apply();
  }

  function questionCard(q, withResult) {
    var badges = '<span class="ex-badge">' + (CH[q.ch] || q.ch) + "</span>"
      + '<span class="ex-badge">' + TY[q.type] + "</span>"
      + '<span class="ex-badge">' + SRC[q.src] + "</span>"
      + '<span class="ex-badge">难度' + (DIFF[q.diff] || q.diff) + "</span>";
    var body = '<div class="ex-qstem">' + esc(stripStemNo(q.stem)) + "</div>";
    if (q.type === "mc" && q.options) {
      body += '<div class="ex-opts">' + q.options.map(function (o) {
        return '<div class="ex-opt"><span class="ex-ol">' + esc(o[0]) + ".</span> <span>" + esc(o[1]) + "</span></div>";
      }).join("") + "</div>";
    }
    var extra = "";
    if (withResult && q.type === "mc") {
      if (q.userAns) extra += '<div class="ex-ua">你的作答：' + esc(q.userAns) + "</div>";
      extra += '<div class="ex-ca">正确答案：' + esc(q.ans) + "</div>";
      if (q.fb) extra += '<div class="ex-fb">' + esc(q.fb) + "</div>";
    } else if (withResult && q.type === "fill") {
      if (q.userAns) extra += '<div class="ex-ua">你的作答：' + esc(q.userAns) + "</div>";
      if (q.ans) extra += '<div class="ex-ca">参考答案：' + esc(q.ans) + "</div>";
      else extra += '<div class="ex-fb">本题需教师核对/评定。</div>';
      if (q.fb) extra += '<div class="ex-fb">' + esc(q.fb) + "</div>";
    } else if (q.type !== "mc" && q.type !== "fill") {
      if (withResult) {
        // 学生自查明解：作答与图片先展示，参考答案由学生点"对照"展开（并记能量，说明做了对照）
        if (q.userAns) extra += '<div class="ex-ua">你的文字作答：' + esc(q.userAns) + "</div>";
        if (q.userImages && q.userImages.length) {
          extra += '<div class="ex-upshow">你上传的解答：' + q.userImages.map(function (src, i) {
            return '<img class="ex-upimg" src="' + src + '" alt="解答图' + (i + 1) + '">';
          }).join("") + "</div>";
        }
        extra += '<div class="ex-selfcheck">✅ 自查三问：思路方向对了吗？关键步骤都写全了吗？最终结论一致吗？如把握不准，可上传解答图片请教师复核。</div>';
        var hasRef = !!(q.ans || q.fb);
        if (hasRef) {
          extra += '<div class="ex-airow">'
            + '<button class="btn ex-cmpbtn" data-cmp="' + q.id + '">📖 对照参考解答（+能量）</button>'
            + '<span class="ex-cmpdone" id="cmpdone_' + q.id + '" style="display:none;color:#16a34a;font-weight:700">已对照 ✦</span>'
            + '</div>';
          extra += '<div class="ex-cmpbox" id="cmpbox_' + q.id + '" style="display:none">';
          if (q.ans) extra += '<div class="ex-ca">参考答案：' + esc(q.ans) + "</div>";
          if (q.fb) extra += '<div class="ex-fb"><b>📖 解题过程：</b><br>' + esc(q.fb) + "</div>";
          extra += '</div>';
        }
      } else {
        extra += '<div class="ex-fb">（计算/证明/应用题 · 交卷后即可对照参考解答自查）</div>';
      }
    }
    return '<div class="ex-card">' + badges + body + extra + "</div>";
  }

  // ---------------- 智能组卷 ----------------
  function renderPaperConfig() {
    var pane = $("ex-paper");
    var types = ["mc", "fill", "calc", "proof", "app"];
    var html = '<p class="muted">按"章 × 题型"设定题量，系统从本题库中抽取对应数量的题目组成试卷。选择题/填空题自动阅卷；计算/证明/应用题交卷后展示参考答案与解题过程，供自查明解（也可上传图片请教师复核）。</p>';
    html += '<table class="ex-grid"><thead><tr><th>章节 \\ 题型</th>';
    types.forEach(function (t) { html += "<th>" + TY[t] + "</th>"; });
    html += "</tr></thead><tbody>";
    for (var c = 1; c <= 5; c++) {
      html += "<tr><td><b>第" + c + "章</b><br><span class='muted'>" + CH[c] + "</span></td>";
      types.forEach(function (t) {
        var cnt = BANK.filter(function (q) { return q.ch === c && q.type === t; }).length;
        html += "<td><input type='number' min='0' max='" + cnt + "' value='0' class='ex-num' data-ch='" + c + "' data-type='" + t + "'><div class='ex-pool'>池" + cnt + "</div></td>";
      });
      html += "</tr>";
    }
    html += "</tbody></table>";
    html += '<div class="ex-row"><label><input type="checkbox" id="pp-rand" checked> 随机抽题（否则按原题序）</label>';
    html += '　每题分值 <input type="number" id="pp-pts" value="4" min="1" style="width:54px">';
    html += '　考试时长 <input type="number" id="pp-time" value="60" min="0" style="width:54px"> 分钟（0=不限时）</label></div>';
    html += '<div class="ex-row"><button class="btn" id="pp-gen">生成试卷</button> <span id="pp-sum" class="ex-count"></span></div>';
    html += '<div id="pp-out"></div>';
    pane.innerHTML = html;
    RT(pane);
    $("pp-gen").onclick = function () {
      var plan = {}, total = 0;
      pane.querySelectorAll(".ex-num").forEach(function (inp) {
        var n = parseInt(inp.value) || 0, ch = +inp.dataset.ch, t = inp.dataset.type;
        var pool = BANK.filter(function (q) { return q.ch === ch && q.type === t; });
        if (n > pool.length) n = pool.length;
        if (n > 0) { plan[ch + "_" + t] = { n: n, items: (($("pp-rand").checked) ? shuffle(pool) : pool).slice(0, n) }; total += n; }
      });
      if (total === 0) { $("pp-out").innerHTML = '<p class="muted">请至少设定一类题目的数量。</p>'; RT($("pp-out")); return; }
      var paper = [];
      for (var k in plan) plan[k].items.forEach(function (q) { paper.push(q); });
      var pts = parseInt($("pp-pts").value) || 4;
      var time = parseInt($("pp-time").value) || 0;
      $("pp-sum").textContent = "共 " + total + " 题，满分约 " + (total * pts) + " 分";
      window.__paper = { items: paper, pts: pts, time: time };
      var out = '<div class="ex-paper-prev"><h3>试卷预览（共 ' + total + ' 题）</h3>';
      out += paper.map(function (q, i) {
        return "<div class='ex-pq'><b>" + (i + 1) + ".</b> [" + CH[q.ch] + "·" + TY[q.type] + "] " + esc(stripStemNo(q.stem));
      }).join("") + "</div>";
      out += "<div class='ex-row'><button class='btn' id='pp-start'>开始考试 ▶</button> <button class='btn' onclick='window.print()'>打印试卷</button></div></div>";
      $("pp-out").innerHTML = out;
      RT($("pp-out"));
      $("pp-start").onclick = function () { startExam(window.__paper); switchTab("exam"); };
    };
  }

  // ---------------- 在线考试 ----------------
  var examTimer = null;
  function startExam(paper) {
    var pane = $("ex-exam");
    var items = paper.items;
    var html = '<div class="ex-exam-bar">';
    html += '<span class="ex-count">本题 ' + items.length + ' 道 · 每题 ' + paper.pts + ' 分</span>';
    if (paper.time > 0) html += '<span class="ex-timer" id="ex-timer">⏱ ' + paper.time + ":00</span>";
    html += '<button class="btn" id="ex-submit">交卷</button>';
    html += '<button class="btn" id="ex-redo" style="background:#64748b">↻ 重新随机抽题</button>';
    html += '</div>';
    html += '<div id="ex-questions" class="ex-list"></div>';
    html += '<div id="ex-result"></div>';
    pane.innerHTML = html;
    RT(pane);
    $("ex-redo").onclick = quickExam;
    var Q = $("ex-questions");
    Q.innerHTML = items.map(function (q, i) {
      var inner = '<div class="ex-qno">' + (i + 1) + ". [" + CH[q.ch] + "·" + TY[q.type] + "]</div>";
      inner += '<div class="ex-qstem">' + esc(stripStemNo(q.stem)) + "</div>";
      if (q.type === "mc") {
        inner += '<div class="ex-opts">';
        q.options.forEach(function (o) {
          inner += '<label class="ex-opt"><input type="radio" name="ex_' + q.id + '" value="' + o[0] + '"><span>' + esc(o[0]) + ". " + esc(o[1]) + "</span></label>";
        });
        inner += "</div>";
      } else if (q.type === "fill") {
        inner += '<div class="ex-fill">答：<input type="text" class="ex-fill-in" id="ex_' + q.id + '" style="min-width:200px"></div>';
      } else {
        inner += '<div class="ex-up"><label class="ex-uplabel">📷 上传解答图片（可多张）：'
          + '<input type="file" accept="image/*" multiple class="ex-upinput" data-qid="' + q.id + '"></label>'
          + '<div class="ex-thumbs" id="thumbs_' + q.id + '"></div></div>';
        inner += '<div class="ex-fill">文字作答：<textarea class="ex-ta" id="ex_' + q.id + '" rows="4" style="width:100%"></textarea></div>';
      }
      return '<div class="ex-card" data-qid="' + q.id + '">' + inner + "</div>";
    }).join("");
    RT(Q);
    qImages = {};
    Q.querySelectorAll(".ex-upinput").forEach(function (inp) {
      inp.addEventListener("change", function () { handleUpload(inp); });
    });
    if (paper.time > 0) {
      var rem = paper.time * 60, tEl = $("ex-timer");
      examTimer = setInterval(function () {
        rem--;
        if (rem <= 0) { clearInterval(examTimer); gradeExam(paper); return; }
        var m = Math.floor(rem / 60), s = rem % 60;
        tEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
      }, 1000);
    }
    $("ex-submit").onclick = function () { if (examTimer) clearInterval(examTimer); gradeExam(paper); };
  }

  function gradeExam(paper) {
    var items = paper.items, pts = paper.pts, auto = 0, manual = 0, correct = 0, wrong = [];
    items.forEach(function (q) {
      if (q.type === "mc") {
        var radio = document.querySelector('input[type="radio"][name="ex_' + q.id + '"]:checked');
        var sel = radio ? radio.value : "";
        q.userAns = sel;
        if (sel && sel === q.ans) { q.ok = true; auto += pts; correct++; }
        else { q.ok = false; if (sel) wrong.push(q); }
      } else {
        var input = $("ex_" + q.id);
        if (q.type === "fill") {
          var v = input ? input.value.trim() : "";
          q.userAns = v;
          if (q.ans && norm(v) === norm(q.ans)) { q.ok = true; auto += pts; correct++; }
          else if (q.ans && v) { q.ok = false; wrong.push(q); }
          else { q.ok = null; manual += pts; } // 无答案密钥 → 待教师核对
        } else {
          q.userAns = input ? input.value : "";
          q.userImages = qImages[q.id] || [];
          q.ok = null; manual += pts;
        }
      }
    });
    var totalPts = items.length * pts;
    var pct = totalPts ? Math.round((auto + manual) / totalPts * 100) : 100;
    // 学生主观题作答存档（含图片），供教师复核 / AI 批改
    try {
      var subs = JSON.parse(localStorage.getItem(LS_SUBMIT) || "[]");
      items.forEach(function (q) {
        if (q.type === "calc" || q.type === "proof" || q.type === "app") {
          subs.unshift({
            id: q.id, ch: q.ch, type: q.type, src: q.src, stem: q.stem,
            ans: q.ans || "", fb: q.fb || "",
            studentText: q.userAns || "", images: q.userImages || [],
            date: new Date().toLocaleString("zh-CN"), score: "", comment: ""
          });
        }
      });
      localStorage.setItem(LS_SUBMIT, JSON.stringify(subs.slice(0, 300)));
    } catch (e) {}
    var R = $("ex-result");
    var res = "<h3>考试成绩</h3>";
    res += "<p>自动阅卷得分：<b>" + auto + "</b> / " + (auto + manual ? auto + "+" + manual + "(待评)" : auto) + " 分　正确 " + correct + " / " + items.length + " 题（选择题/填空题自动判分；计算/证明/应用题请对照下方参考解答<b>自查明解</b>）。</p>";
    res += '<div class="ex-rev">' + items.map(function (q) { return questionCard(q, true); }).join("") + "</div>";
    R.innerHTML = res;
    RT(R);
    R.querySelectorAll(".ex-cmpbtn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qid = btn.getAttribute("data-cmp");
        var box = $("cmpbox_" + qid), done = $("cmpdone_" + qid);
        if (box) box.style.display = "block";
        btn.style.display = "none";
        if (done) done.style.display = "inline";
        // 学生主动对照参考解答 → 奖励少量能量，标记"做了自查"
        try { if (window.EnergyBar && window.EnergyBar.awardPractice) window.EnergyBar.awardPractice(0, 1); } catch (e) {}
      });
    });
    // 错题本
    var w = getWrong();
    wrong.forEach(function (q) {
      if (!w.some(function (x) { return x.id === q.id; })) {
        w.push({ id: q.id, ch: q.ch, type: q.type, src: q.src, stem: q.stem, options: q.options, ans: q.ans, fb: q.fb, userAns: q.userAns });
      }
    });
    setWrong(w);
    // 成绩
    var sc = getScores();
    sc.unshift({ date: new Date().toLocaleString("zh-CN"), score: auto, total: totalPts, n: items.length });
    setScores(sc.slice(0, 10));
    if (R.scrollIntoView) { try { R.scrollIntoView({ behavior: "smooth" }); } catch (e) {} }
    // 能量柱：完成一次考试即累积能量（与学习中心共用 study_v1）
    try { if (window.EnergyBar && window.EnergyBar.awardExam) window.EnergyBar.awardExam(correct, items.length); } catch (e) {}
    // 按章节累积掌握度（只统计机器可判对的选择题/填空题）
    try {
      if (window.EnergyBar && window.EnergyBar.recordMastery) {
        var byCh = {};
        items.forEach(function (q) {
          if (q.type !== "mc" && q.type !== "fill") return;
          if (!byCh[q.ch]) byCh[q.ch] = { right: 0, total: 0 };
          byCh[q.ch].total++;
          if (q.ok === true) byCh[q.ch].right++;
        });
        for (var c in byCh) window.EnergyBar.recordMastery(c, byCh[c].right, byCh[c].total);
      }
    } catch (e) {}
  }

  // ---------------- 图片上传 ----------------
  function handleUpload(inp) {
    var qid = inp.getAttribute("data-qid");
    if (!qImages[qid]) qImages[qid] = [];
    var box = $("thumbs_" + qid);
    Array.prototype.forEach.call(inp.files, function (file) {
      if (!/^image\//.test(file.type)) return;
      var fr = new FileReader();
      fr.onload = function () {
        var data = fr.result;
        qImages[qid].push(data);
        if (box) {
          var im = document.createElement("img");
          im.src = data;
          box.appendChild(im);
        }
      };
      fr.readAsDataURL(file);
    });
    inp.value = "";
  }

  // ---------------- 错题本 ----------------
  function renderWrong() {
    var pane = $("ex-wrong");
    var w = getWrong();
    var html = "<h3>错题本（本地保存）</h3>";
    if (!w.length) html += '<p class="muted">暂无错题。交卷后答错的客观题会自动收录于此。</p>';
    else {
      html += '<div class="ex-row"><button class="btn" id="wz-clear">清空错题本</button> <span class="ex-count">共 ' + w.length + ' 道</span></div>';
      html += '<div class="ex-list">' + w.map(function (q) {
        var card = questionCard({ ch: q.ch, type: q.type, src: q.src, stem: q.stem, options: q.options, ans: q.ans, fb: q.fb, diff: 0, userAns: q.userAns }, true);
        return card;
      }).join("") + "</div>";
    }
    pane.innerHTML = html;
    RT(pane);
    if (w.length) {
      $("wz-clear").onclick = function () { setWrong([]); renderWrong(); };
    }
    renderScores(pane);
  }
  function renderScores(pane) {
    var sc = getScores();
    var html = "<h3>近期成绩</h3>";
    if (!sc.length) html += '<p class="muted">暂无成绩记录。</p>';
    else html += "<ul class='ex-scores'>" + sc.map(function (s) {
      return "<li>" + s.date + "　自动阅卷 <b>" + s.score + "</b> / " + s.total + " 分（" + s.n + " 题）</li>";
    }).join("") + "</ul>";
    var d = document.createElement("div");
    d.innerHTML = html; RT(d);
    pane.appendChild(d);
  }

  // ---------------- tab 切换 ----------------
  function switchTab(tab) {
    ["browse", "paper", "exam", "wrong"].forEach(function (t) {
      var p = $("ex-" + t); if (p) p.hidden = (t !== tab);
    });
    document.querySelectorAll(".ex-tab").forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === tab);
    });
    if (tab === "browse") renderBrowse();
    else if (tab === "paper") renderPaperConfig();
    else if (tab === "wrong") renderWrong();
    else if (tab === "exam" && !$("ex-questions")) {
      // 未组卷时给一个默认快速抽题
      quickExam();
    }
  }
  function quickExam() {
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    var items = shuffle(BANK.filter(function (q) { return q.type === "mc"; })).slice(0, 10);
    startExam({ items: items, pts: 4, time: 0 });
  }

  function init() {
    var totalEl = $("ex-total"); if (totalEl) totalEl.textContent = BANK.length;
    document.querySelectorAll(".ex-tab").forEach(function (b) {
      b.onclick = function () { switchTab(b.dataset.tab); };
    });
    renderBrowse();
    // 深链：exam.html?ch=N -> 打开限定本章的智能组卷并预填题量
    try {
      var _p = new URLSearchParams(location.search);
      var _ch = parseInt(_p.get("ch"), 10);
      if (_ch >= 1 && _ch <= 5) {
        switchTab("paper");
        var _defs = { mc: 5, fill: 3, calc: 2, proof: 1, app: 1 };
        document.querySelectorAll('.ex-num[data-ch="' + _ch + '"]').forEach(function (inp) {
          inp.value = (_defs[inp.dataset.type] != null ? _defs[inp.dataset.type] : 0);
        });
        var _gen = $("pp-gen");
        if (_gen) _gen.click();
        var _out = $("pp-out");
        if (_out && _out.scrollIntoView) _out.scrollIntoView({ behavior: "smooth" });
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
