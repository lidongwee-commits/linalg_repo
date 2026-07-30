/* 智能题库 · 文字版 PDF 识别
 * 功能：上传「带题号的文字层 PDF」或粘贴习题文本 → 自动按题号切分 →
 *       依据关键词判定所属章/节 → 生成可点击跳转到对应教材章节的卡片．
 * 零成本层：纯前端，不调用任何付费 API；PDF 解析用 pdf.js（CDN，失败则引导粘贴文本）．
 */
(function () {
  'use strict';

  // ---------- 章信息 ----------
  var CHN = { 1: '行列式', 2: '矩阵', 3: '向量组', 4: '线性方程组', 5: '相似矩阵与二次型' };

  // 章节关键词 -> 权重（用于判定所属章）
  var CH_KW = {
    1: [['行列式', 3], ['余子式', 3], ['代数余子式', 3], ['克拉默', 3], ['克莱姆', 3], ['范德蒙', 3],
        ['对角行列式', 3], ['上三角行列式', 2], ['下三角行列式', 2], ['化三角形', 3], ['逆序数', 3],
        ['对换', 2], ['n阶行列式', 3], ['拉普拉斯', 3], ['按行展开', 3], ['按列展开', 3], ['对角线法则', 2]],
    2: [['矩阵', 2], ['伴随', 3], ['逆矩阵', 3], ['可逆', 3], ['初等变换', 3], ['初等行变换', 3], ['初等列变换', 3], ['初等矩阵', 3],
        ['分块矩阵', 3], ['矩阵的秩', 3], ['转置', 2], ['对角矩阵', 2], ['单位矩阵', 2], ['数量矩阵', 2],
        ['对称矩阵', 2], ['反对称矩阵', 3], ['正交矩阵', 2], ['矩阵乘法', 3], ['矩阵方程', 3], ['幂等', 3], ['幂零', 3]],
    3: [['向量', 2], ['线性组合', 3], ['线性表示', 3], ['线性表出', 3], ['线性相关', 3], ['线性无关', 3],
        ['极大无关组', 3], ['向量空间', 3], ['基', 2], ['维数', 2], ['坐标', 2], ['内积', 2], ['正交', 1],
        ['施密特', 3], ['标准正交基', 3], ['度量矩阵', 3], ['等价向量组', 2], ['向量组的秩', 3]],
    4: [['线性方程组', 3], ['方程组', 2], ['齐次', 3], ['非齐次', 3], ['通解', 3], ['特解', 3], ['基础解系', 3],
        ['解空间', 3], ['相容', 2], ['增广矩阵', 3], ['行最简形', 3], ['高斯消元', 3], ['唯一解', 2], ['无穷多解', 2], ['无解', 2]],
    5: [['特征值', 3], ['特征向量', 3], ['特征多项式', 3], ['相似', 2], ['相似对角化', 3], ['对角化', 3],
        ['二次型', 3], ['正定', 3], ['合同', 3], ['正交变换', 3], ['标准形', 2], ['规范形', 3], ['谱', 2],
        ['主成分', 2], ['迹', 2], ['实对称', 3]]
  };

  // 小节候选（按顺序匹配；空关键词者为兜底）。第1章在教材中仅有 s11/s16 两个真实锚点，
  // 故所有第1章题目的跳转锚点统一为 s11（软件类为 s16）．
  var SEC_KW = {
    1: [
      ['s12', ['余子式', '代数余子式', '按行展开', '按列展开', '展开'], '余子式与展开'],
      ['s13', ['克拉默', '克莱姆'], '克拉默法则'],
      ['s16', ['软件', 'matlab', 'python', 'numpy', '数值'], '软件计算'],
      ['s11', [], '行列式计算与性质']            // 兜底锚点（真实存在）
    ],
    2: [
      ['s23', ['逆矩阵', '可逆', '伴随', '逆'], '逆矩阵'],
      ['s24', ['分块'], '分块矩阵'],
      ['s25', ['初等变换', '初等矩阵', '行变换', '列变换'], '初等变换'],
      ['s26', ['秩'], '矩阵的秩'],
      ['s27', ['软件', 'matlab', 'python', '应用'], '综合应用'],
      ['s22', ['加法', '线性运算', '乘法', '数乘', '转置', '运算'], '矩阵运算'],
      ['s21', [], '矩阵概念与特殊矩阵']
    ],
    3: [
      ['s31', ['线性表示', '线性组合', '表出'], '线性表示'],
      ['s32', ['相关性', '线性相关', '线性无关'], '线性相关性'],
      ['s33', ['秩', '极大无关组', '向量组的秩'], '秩与极大无关组'],
      ['s34', ['向量空间', '基', '维数', '坐标'], '向量空间与基'],
      ['s35', ['软件', 'matlab', 'python', '应用'], '综合应用'],
      ['s31', [], '向量组基础']
    ],
    4: [
      ['s42', ['非齐次', '特解'], '非齐次方程组'],
      ['s41', ['齐次', '基础解系', '解空间'], '齐次方程组'],
      ['s43', ['解的结构', '矩阵方程'], '解的结构与矩阵方程'],
      ['s44', ['软件', 'matlab', 'python', '应用'], '综合应用'],
      ['s41', [], '线性方程组']
    ],
    5: [
      ['s51', ['特征值', '特征向量', '特征多项式'], '特征值与特征向量'],
      ['s52', ['相似', '对角化'], '相似与对角化'],
      ['s53', ['实对称', '正交对角化'], '实对称矩阵对角化'],
      ['s55', ['正定'], '正定二次型'],
      ['s54', ['二次型', '标准形', '规范形', '合同'], '二次型'],
      ['s56', ['软件', 'matlab', 'python', '应用'], '综合应用'],
      ['s51', [], '特征值基础']
    ]
  };

  var allQuestions = [];   // 当前结果
  var docBestCh = 0;       // 全文主导章（兜底用）

  // ---------- 工具 ----------
  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function lower(s) { return (s || '').toLowerCase(); }

  function scoresOf(text) {
    text = lower(text);
    var sc = {};
    for (var ch = 1; ch <= 5; ch++) {
      var s = 0, list = CH_KW[ch];
      for (var i = 0; i < list.length; i++) if (text.indexOf(lower(list[i][0])) >= 0) s += list[i][1];
      sc[ch] = s;
    }
    return sc;
  }

  function bestSection(ch, text) {
    var list = SEC_KW[ch];
    for (var i = 0; i < list.length; i++) {
      var anchor = list[i][0], kws = list[i][1], topic = list[i][2];
      if (kws.length === 0) return { anchor: anchor, topic: topic };
      for (var j = 0; j < kws.length; j++) if (lower(text).indexOf(lower(kws[j])) >= 0) return { anchor: anchor, topic: topic };
    }
    var last = list[list.length - 1];
    return { anchor: last[0], topic: last[2] };
  }

  function classify(text) {
    var sc = scoresOf(text), best = 0, bestScore = -1;
    for (var ch = 1; ch <= 5; ch++) if (sc[ch] > bestScore) { bestScore = sc[ch]; best = ch; }
    if (bestScore <= 0) {
      // 兜底：用全文主导章；若该章也无关键词则判为「未识别」
      if (docBestCh && scoresOf(text)[docBestCh] === 0 && bestScore === 0) {
        // 仍无，尝试全文主导章
        if (docBestCh) return { ch: docBestCh, anchor: bestSection(docBestCh, text).anchor, topic: bestSection(docBestCh, text).topic };
        return null;
      }
      if (docBestCh) return { ch: docBestCh, anchor: bestSection(docBestCh, text).anchor, topic: bestSection(docBestCh, text).topic };
      return null;
    }
    var sec = bestSection(best, text);
    return { ch: best, anchor: sec.anchor, topic: sec.topic };
  }

  // ---------- 题号切分 ----------
  function isStart(line) {
    if (/^\s*\d{1,3}[\.．。、)]\s/.test(line)) return true;        // 1. / 2) / 3、
    if (/^\s*\d{1,3}[\.．。、)]\s*$/.test(line)) return true;       // 1.（独立成行）
    if (/^\s*\d{1,3}\.\d{1,3}[\s．。、)]/.test(line)) return true;  // 1.1
    if (/^\s*[一二三四五六七八九十百]+[、．.]\s/.test(line)) return true; // 一、
    if (/^\s*第\s*\d{1,3}\s*题/.test(line)) return true;           // 第1题
    return false;
  }

  // 章节/习题标题行：作为分隔，不并入题目正文
  function isHeader(line) {
    return /^\s*第\s*[一二三四五六七八九十百\d]+\s*章/.test(line)
        || /^\s*§\s*\d+\.\d+/.test(line)
        || /^\s*[（(]?\s*(习题|练习|作业|测验|试题|自测)/.test(line)
        || /^\s*Chapter\s+\d+/i.test(line);
  }

  function splitQuestions(text) {
    var lines = text.replace(/\r\n/g, '\n').split('\n');
    var qs = [], cur = null, pre = [], header = '';
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].replace(/\s+$/, '');
      if (isHeader(line)) {
        if (cur) qs.push({ text: cur, header: header });
        cur = null;
        header = line.replace(/^\s+/, '');
        continue;
      }
      if (isStart(line)) {
        if (cur) qs.push({ text: cur, header: header });
        cur = line.replace(/^\s+/, '');
      } else if (cur !== null) {
        cur += '\n' + line.replace(/^\s+/, '');
      } else {
        pre.push(line);
      }
    }
    if (cur) qs.push({ text: cur, header: header });
    // 用前言里的最后一个章节标题作为缺省上下文（覆盖首批题目）
    var ph = pre.filter(isHeader);
    if (ph.length) { var h0 = ph[ph.length - 1]; qs.forEach(function (q) { if (!q.header) q.header = h0; }); }
    // 清理：去掉纯题号空题
    qs = qs.map(function (q) {
          return { text: q.text.replace(/\s+$/, '').replace(/^\s+/, ''), header: q.header };
        })
        .filter(function (q) { return q.text && !/^\d{1,3}[\.．。、)]\s*$/.test(q.text); });
    return { qs: qs, pre: pre.join('\n') };
  }

  function extractNo(text) {
    var m = text.match(/^\s*(\d{1,3})(?:\.\d{1,3})?[\.．。、)]/);
    return m ? m[1] : '';
  }

  // ---------- 渲染 ----------
  function render(list) {
    var results = document.getElementById('results');
    results.innerHTML = '';
    if (!list.length) {
      results.innerHTML = '<p class="q-empty">未识别到带编号的题目．请确认 PDF 为「文字层 + 题号（如 1. 2.）」格式；' +
        '或直接把文本粘贴到左侧文本框再点「识别粘贴文本」．</p>';
      return;
    }
    for (var i = 0; i < list.length; i++) {
      var q = list[i];
      var card = el('div', 'q-card');
      var head = el('div', 'q-head');
      var no = el('span', 'q-no'); no.textContent = q.no ? ('题 ' + q.no) : ('# ' + (i + 1));
      head.appendChild(no);
      var badge = el('span', 'q-badge');
      if (q.cls) {
        badge.textContent = '第' + q.cls.ch + '章 · ' + CHN[q.cls.ch] + ' · ' + q.cls.topic;
        badge.classList.add('ch' + q.cls.ch);
      } else {
        badge.textContent = '未识别章节（请人工确认）';
        badge.classList.add('q-unrec');
      }
      head.appendChild(badge);
      if (q.cls) {
        var link = el('a', 'q-link');
        link.textContent = '在教材中查看 →';
        link.href = 'ch' + q.cls.ch + '.html#' + q.cls.anchor;
        link.target = '_blank'; link.rel = 'noopener';
        head.appendChild(link);
      }
      card.appendChild(head);
      var body = el('div', 'q-body');
      body.textContent = q.text;
      card.appendChild(body);
      var foot = el('div', 'q-foot');
      var copy = el('button', 'q-copy'); copy.textContent = '复制题目';
      copy.onclick = (function (txt, btn) {
        return function () {
          if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () {
            btn.textContent = '已复制 ✓'; setTimeout(function () { btn.textContent = '复制题目'; }, 1200);
          });
        };
      })(q.text, copy);
      foot.appendChild(copy);
      card.appendChild(foot);
      results.appendChild(card);
      if (window.renderMathInElement) {
        try {
          renderMathInElement(body, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '\\[', right: '\\]', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false }
            ], throwOnError: false, errorCallback: function () {}
          });
        } catch (e) {}
      }
    }
  }

  function updateStats() {
    var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0 };
    allQuestions.forEach(function (q) { counts[q.cls ? q.cls.ch : 0]++; });
    var parts = [];
    for (var ch = 1; ch <= 5; ch++) parts.push('第' + ch + '章 ' + CHN[ch] + '：' + counts[ch]);
    parts.push('未识别：' + counts[0]);
    document.getElementById('stats').textContent = '共切分 ' + allQuestions.length + ' 题 ｜ ' + parts.join(' ｜ ');
  }

  function applyFilter() {
    var v = document.getElementById('filterCh').value;
    var list = allQuestions.filter(function (q) {
      if (v === 'all') return true;
      if (v === 'unrec') return !q.cls;
      return q.cls && String(q.cls.ch) === v;
    });
    render(list);
  }

  // ---------- 处理流程 ----------
  function process(rawText) {
    var full = (rawText || '').trim();
    if (!full) { setStatus('请输入文本或上传 PDF．', true); return; }
    var sc = scoresOf(full); docBestCh = 1; var bs = -1;
    for (var ch = 1; ch <= 5; ch++) if (sc[ch] > bs) { bs = sc[ch]; docBestCh = ch; }
    var r = splitQuestions(full);
    allQuestions = r.qs.map(function (q) {
      var cls = classify(q.text);
      if (!cls && q.header) cls = classify(q.header + ' ' + q.text); // 借用所在章节标题兜底
      return { text: q.text, no: extractNo(q.text), cls: cls };
    });
    updateStats();
    applyFilter();
    setStatus('识别完成：共 ' + allQuestions.length + ' 题．', false);
  }

  function setStatus(msg, warn) {
    var s = document.getElementById('status');
    s.textContent = msg; s.className = warn ? 'status warn' : 'status';
  }

  // ---------- PDF.js 动态加载（带 CDN 回退） ----------
  function loadPdfJs() {
    return new Promise(function (resolve, reject) {
      if (window.pdfjsLib) return resolve(window.pdfjsLib);
      var urls = [
        'https://fastly.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js',
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js',
        'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js'
      ];
      var i = 0;
      (function tryLoad() {
        if (i >= urls.length) return reject(new Error('pdf.js 加载失败'));
        var sc = document.createElement('script');
        sc.src = urls[i++];
        sc.onload = function () { resolve(window.pdfjsLib); };
        sc.onerror = tryLoad;
        document.head.appendChild(sc);
      })();
    });
  }

  function extractPdfText(file) {
    return loadPdfJs().then(function (lib) {
      lib.GlobalWorkerOptions.workerSrc = 'https://fastly.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
      return file.arrayBuffer();
    }).then(function (buf) {
      return window.pdfjsLib.getDocument({ data: buf }).promise;
    }).then(function (doc) {
      var out = '';
      var chain = Promise.resolve();
      for (var p = 1; p <= doc.numPages; p++) {
        chain = chain.then(function (pageNum) {
          return doc.getPage(pageNum).then(function (page) {
            return page.getTextContent().then(function (tc) {
              var line = '', lastY = null;
              tc.items.forEach(function (it) {
                var y = it.transform[5];
                if (lastY !== null && Math.abs(y - lastY) > 2) { out += line + '\n'; line = ''; }
                if (line && !/ $/.test(line) && it.str && !/^ /.test(it.str)) line += ' ';
                line += it.str; lastY = y;
              });
              if (line) out += line + '\n';
            });
          });
        }.bind(null, p));
      }
      return chain.then(function () { return out; });
    });
  }

  // ---------- 事件绑定 ----------
  document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('pdfFile');
    var pasteArea = document.getElementById('pasteArea');
    var btnPaste = document.getElementById('btnPaste');
    var btnClear = document.getElementById('btnClear');
    var btnExport = document.getElementById('btnExport');
    var filterSel = document.getElementById('filterCh');

    btnPaste.onclick = function () { process(pasteArea.value); };
    btnClear.onclick = function () {
      pasteArea.value = ''; allQuestions = [];
      document.getElementById('results').innerHTML = '';
      document.getElementById('stats').textContent = '';
      setStatus('', false);
    };
    btnExport.onclick = function () {
      if (!allQuestions.length) { setStatus('还没有可导出的结果．', true); return; }
      var data = allQuestions.map(function (q) {
        return { no: q.no || null, chapter: q.cls ? q.cls.ch : null, topic: q.cls ? q.cls.topic : null, anchor: q.cls ? q.cls.anchor : null, text: q.text };
      });
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'smart_bank_export.json';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    };
    filterSel.onchange = applyFilter;

    fileInput.onchange = function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) return;
      setStatus('正在解析 PDF（' + f.name + '）…', false);
      extractPdfText(f).then(function (txt) {
        pasteArea.value = txt;
        process(txt);
      }).catch(function (err) {
        setStatus('PDF 解析失败：' + err.message + '．可改用「直接粘贴文本」．', true);
      });
    };

    // 初始禁用提示（pdf.js 未加载时仍可粘贴）
    setStatus('提示：文字版 PDF 将自动联网加载 pdf.js 解析；若网络受限，可直接把题目文本粘贴到左侧框．', false);
  });
})();
