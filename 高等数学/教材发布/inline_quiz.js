/**
 * 内联题目渲染：本章测试（v3 · 出卷模式 + 自确认）
 * 从 exam_data.js 的 EXAM_QUESTIONS 按章节筛选，学生在面板里设定
 * 选择题 / 填空题 / 计算题 / 证明题 的数量，点击「出卷」生成试卷.
 * 选择题自动判分；填空/计算/证明题采用「对照答案 + 自确认」模式，
 * 学生查看参考答案后自行判断是否掌握，培养自主学习能力.
 * 作为独立 <script> 加载，不注入 app.js.
 */
(function(){
  'use strict';

  var TYPES = [
    { k:'mc',    label:'选择题' },
    { k:'fill',  label:'填空题' },
    { k:'calc',  label:'计算题' },
    { k:'proof', label:'证明题' }
  ];

  function waitForExamData(callback){
    if(window.EXAM_QUESTIONS){ callback(); return; }
    var waited = 0, interval = 80;
    function check(){
      if(window.EXAM_QUESTIONS){ callback(); return; }
      waited += interval;
      if(waited >= 8000) return;
      setTimeout(check, interval);
    }
    setTimeout(check, 0);
  }

  /* ---- 获取全局 katex 配置（兼容 app.js 定义的 katexOpts） ---- */
  function getKatexOpts(){
    if(window.katexOpts) return window.katexOpts;
    return {
      delimiters: [
        {left:'$$',right:'$$',display:true},
        {left:'\\[',right:'\\]',display:true},
        {left:'\\(',right:'\\)',display:false},
        {left:'$',right:'$',display:false}
      ],
      throwOnError: false,
      ignoredClasses:['katex','katex-lazy']
    };
  }

  /* ---- 安全地渲染容器内公式（带重试） ---- */
  function renderMath(container){
    if(!window.renderMathInElement || !container) return;
    try{
      renderMathInElement(container, getKatexOpts());
    }catch(e){
      setTimeout(function(){ try{renderMathInElement(container, getKatexOpts());}catch(e2){} }, 200);
    }
  }

  /* ---- 转义HTML特殊字符 ---- */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function typeLabel(t){
    for(var i=0;i<TYPES.length;i++) if(TYPES[i].k===t) return TYPES[i].label;
    return t;
  }

  /* ---- 洗牌（Fisher–Yates） ---- */
  function shuffle(arr){
    var a = arr.slice();
    for(var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var t=a[i]; a[i]=a[j]; a[j]=t;
    }
    return a;
  }

  /* ---- 解析章节号：优先 data-ch，否则回退到 id="cqN" ---- */
  function getCh(el){
    if(!el) return 1;
    var d = parseInt(el.getAttribute('data-ch'), 10);
    if(d>=1 && d<=13) return d;
    var m = (el.id||'').match(/cq(\d+)/);
    if(m) return parseInt(m[1], 10);
    return 1;
  }

  /* ---- 渲染单道题目 ---- */
  function renderItem(q, idx, chNum){
    var h = '<div class="cq-item" data-ans="'+esc(q.ans)+'" data-type="'+esc(q.type)+'" data-id="'+esc(q.id)+'">';
    h += '<div class="cq-qnum">第 '+(idx+1)+' 题 <span class="cq-tag">'+typeLabel(q.type)+'</span></div>';
    h += '<div class="cq-stem">'+q.stem+'</div>';

    if(q.type==='mc' && q.options){
      /* 选择题：保持自动判分 */
      h += '<div class="cq-opts">';
      for(var oi=0;oi<q.options.length;oi++){
        h += '<label class="cq-opt"><input type="radio" name="cq_'+chNum+'_'+idx+'_'+esc(q.id)+'" value="'+esc(q.options[oi][0])+'"><span>'+esc(q.options[oi][0])+'. '+esc(q.options[oi][1])+'</span></label>';
      }
      h += '</div>';
      h += '<button class="cq-check" onclick="window.cqCheck(this)">提交答案</button>';
    } else if(q.type==='fill'){
      /* 填空题：作答 → 对照答案 → 自确认 */
      h += '<input type="text" class="cq-fill" placeholder="填写你的答案">';
      h += '<button class="cq-check" onclick="window.cqFillReveal(this)">对照参考答案</button>';
    } else if(q.type==='calc' || q.type==='proof'){
      /* 计算/证明题：作答 → 查看答案 → 自确认掌握 */
      h += '<textarea class="cq-ta" rows="3" placeholder="在此作答（文字或思路要点）"></textarea>';
      h += '<label class="cq-uplabel">📷 上传解答图片（可多张）：<input type="file" accept="image/*" multiple class="cq-up" data-qid="'+esc(q.id)+'"></label>';
      h += '<div class="cq-thumbs" id="thumbs_'+esc(q.id)+'"></div>';
      h += '<button class="cq-check" onclick="window.cqReveal(this)">查看参考答案</button>';
    }
    h += '<div class="cq-fb"></div>';
    h += '</div>';
    return h;
  }

  /* ---- 本章测试主函数：配置面板 + 出卷 ---- */
  window.renderChapterQuiz = function(container, chNum){
    if(!container) return;
    container.innerHTML = '<p style="color:#94a3b8;padding:20px;text-align:center">⭐ 正在加载题库……</p>';

    waitForExamData(function(){
      var counts = {};
      TYPES.forEach(function(t){
        counts[t.k] = EXAM_QUESTIONS.filter(function(q){ return q.ch===chNum && q.type===t.k; }).length;
      });
      var total = EXAM_QUESTIONS.filter(function(q){ return q.ch===chNum; }).length;

      if(!total){
        container.innerHTML = '<p style="color:#94a3b8;padding:20px;text-align:center">本章暂无题库</p>';
        return;
      }

      var cfg = '<div class="cq-cfg">';
      cfg += '<div class="cq-cfg-title">📝 第 '+chNum+' 章 · 本章测试</div>';
      cfg += '<p class="cq-cfg-tip">设定各题型数量，点击「出卷」生成试卷.选择题自动判分；填空/计算/证明题采用「对照答案 + 自确认」模式——查看参考答案后，由你自行判断是否已掌握.</p>';
      cfg += '<div class="cq-cfg-grid">';
      TYPES.forEach(function(t){
        cfg += '<div class="cq-cfg-cell">';
        cfg += '<span class="cq-cfg-label">'+t.label+'</span>';
        cfg += '<input type="number" class="cq-num" data-type="'+t.k+'" min="0" max="'+counts[t.k]+'" value="0">';
        cfg += '<span class="cq-cfg-pool">题库 '+counts[t.k]+'</span>';
        cfg += '</div>';
      });
      cfg += '</div>';
      cfg += '<div class="cq-cfg-actions">';
      cfg += '<button class="cq-check cq-gen" id="cq-gen-'+chNum+'">📄 出卷</button>';
      cfg += '<span class="cq-cfg-sum" id="cq-sum-'+chNum+'"></span>';
      cfg += '</div></div>';
      cfg += '<div class="cq-paper" id="cq-paper-'+chNum+'"></div>';

      container.innerHTML = cfg;
      renderMath(container);

      var paperEl = document.getElementById('cq-paper-'+chNum);
      var sumEl = document.getElementById('cq-sum-'+chNum);

      document.getElementById('cq-gen-'+chNum).addEventListener('click', function(){
        var selected = [];
        var totalN = 0;
        TYPES.forEach(function(t){
          var inp = container.querySelector('.cq-num[data-type="'+t.k+'"]');
          var n = parseInt(inp.value, 10) || 0;
          if(n > counts[t.k]) n = counts[t.k];
          if(n > 0){
            var pool = EXAM_QUESTIONS.filter(function(q){ return q.ch===chNum && q.type===t.k; });
            shuffle(pool).slice(0, n).forEach(function(q){ selected.push(q); });
            totalN += n;
          }
        });
        if(totalN === 0){
          paperEl.innerHTML = '<p style="color:#94a3b8;padding:14px">请至少选择一类题目的数量（大于 0）.</p>';
          sumEl.textContent = '';
          return;
        }
        var html = '<div class="cq-paper-head">第 '+chNum+' 章测试卷（共 '+totalN+' 题）</div><div class="cq-list">';
        var idx = 0;
        selected.forEach(function(q){ html += renderItem(q, idx++, chNum); });
        html += '</div>';
        paperEl.innerHTML = html;
        renderMath(paperEl);
        paperEl.querySelectorAll('.cq-up').forEach(function(inp){
          inp.addEventListener('change', function(){ handleUpload(inp); });
        });
        sumEl.textContent = '已出卷 '+totalN+' 题';
      });
    });
  };

  /* ===== 填空题：对照参考答案 ===== */
  window.cqFillReveal = function(btn){
    var item = btn.closest('.cq-item'); if(!item) return;
    var ans = item.getAttribute('data-ans');
    var fill = item.querySelector('.cq-fill');
    var fb = item.querySelector('.cq-fb');
    var qid = item.getAttribute('data-id');
    var qdata = null;
    if(window.EXAM_QUESTIONS){
      for(var i=0;i<EXAM_QUESTIONS.length;i++){ if(EXAM_QUESTIONS[i].id===qid){ qdata=EXAM_QUESTIONS[i]; break; } }
    }

    var userAns = fill ? fill.value.trim() : '';
    var match = (userAns.toUpperCase() === String(ans).toUpperCase());

    var html = '<div style="margin-bottom:10px">';
    html += '<b style="font-size:14px">📋 参考答案：</b><span class="cq-exp" style="font-size:15px;font-weight:700;color:#0e7c7c">'+esc(ans)+'</span>';
    if(userAns){
      html += '<br><span style="font-size:13px;color:#64748b;margin-top:4px:inline-block">你的答案：'+esc(userAns)+(match ? ' ✅' : ' （与参考答案不同，请核对）')+'</span>';
    }
    html += '</div>';
    if(qdata && qdata.fb) html += '<div class="cq-exp" style="margin-top:8px">'+esc(qdata.fb)+'</div>';
    html += '<div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">';
    html += '<button class="cq-check cq-confirm-btn" onclick="window.cqSelfConfirm(this, true)">✅ 我做对了，已掌握</button>';
    html += '<button class="cq-check cq-retry-btn" onclick="window.cqSelfConfirm(this, false)">🔄 再看一遍，还没懂</button>';
    html += '</div>';

    fb.className = 'cq-fb cq-ok';
    fb.innerHTML = html;
    renderMath(fb);
    btn.textContent = '已对照 ✓';
    btn.disabled = true;
    if(fill) fill.disabled = true;
  };

  /* ===== 计算/证明题：查看参考答案 ===== */
  window.cqReveal = function(btn){
    var item = btn.closest('.cq-item'); if(!item) return;
    var qid = item.getAttribute('data-id');
    var qdata = null;
    if(window.EXAM_QUESTIONS){
      for(var i=0;i<EXAM_QUESTIONS.length;i++){ if(EXAM_QUESTIONS[i].id===qid){ qdata=EXAM_QUESTIONS[i]; break; } }
    }
    var fb = item.querySelector('.cq-fb');
    var html = '<b style="color:#15803d;font-size:14px">📖 参考答案与解析</b>';
    if(qdata && qdata.ans) html += '<br><span class="cq-exp">'+esc(qdata.ans)+'</span>';
    if(qdata && qdata.fb)  html += '<br><span class="cq-exp">'+esc(qdata.fb)+'</span>';
    if(!qdata || (!qdata.ans && !qdata.fb)) html += '<br><span class="cq-exp">暂无参考答案</span>';
    /* 自确认按钮 */
    html += '<div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">';
    html += '<button class="cq-check cq-confirm-btn" onclick="window.cqSelfConfirm(this, true)">✅ 我已理解，掌握了</button>';
    html += '<button class="cq-check cq-retry-btn" onclick="window.cqSelfConfirm(this, false)">🔄 还需再练</button>';
    html += '</div>';

    fb.className = 'cq-fb cq-ok';
    fb.innerHTML = html;
    renderMath(fb);
    btn.textContent = '已查看 ✓';
    btn.disabled = true;
  };

  /* ===== 自确认：学生自己判断是否掌握 ===== */
  window.cqSelfConfirm = function(btn, mastered){
    var item = btn.closest('.cq-item'); if(!item) return;
    var fb = item.querySelector('.cq-fb');
    var btns = fb.querySelectorAll('.cq-confirm-btn, .cq-retry-btn');
    /* 禁用所有确认按钮，防止重复点击 */
    for(var i=0;i<btns.length;i++) btns[i].disabled = true;

    if(mastered){
      btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
      btn.textContent = '✔ 已记录掌握';
      /* 追加鼓励语 */
      var msg = document.createElement('div');
      msg.style.cssText = 'margin-top:8px;padding:8px 12px;background:#eef9f2;border-radius:6px;font-size:13px;color:#166534';
      msg.textContent = '🎉 很好！自主学习的核心就是诚实评估自己的掌握程度.继续下一题吧！';
      btn.parentNode.appendChild(msg);
    } else {
      btn.style.background = 'linear-gradient(135deg,#f59e0b,#d97706)';
      btn.textContent = '💪 已记录，下次再来';
      var msg = document.createElement('div');
      msg.style.cssText = 'margin-top:8px;padding:8px 12px;background:#fffbeb;border-radius:6px;font-size:13px;color:#92400e';
      msg.textContent = '💡 没关系！看看参考答案的思路，理解后再标记掌握也可以.学习是一个过程.';
      btn.parentNode.appendChild(msg);
    }

    /* 记录到能量柱 */
    if(window.EnergyBar){
      var _c = item.closest('.cq-container');
      EnergyBar.recordMastery(getCh(_c), mastered?1:0, 1);
    }
  };

  /* ---- 提交答案（仅选择题自动判分） ---- */
  window.cqCheck = function(btn){
    var item = btn.closest('.cq-item'); if(!item) return;
    var ans = item.getAttribute('data-ans');
    var fb = item.querySelector('.cq-fb');
    var sel = item.querySelector('input:checked');
    var userAns = sel ? sel.value : '';
    var correct = (userAns.toUpperCase() === String(ans).toUpperCase());

    fb.className = 'cq-fb ' + (correct ? 'cq-ok' : 'cq-bad');

    var qid = item.getAttribute('data-id');
    var qdata = null;
    if(window.EXAM_QUESTIONS){
      for(var i=0;i<EXAM_QUESTIONS.length;i++){ if(EXAM_QUESTIONS[i].id===qid){ qdata=EXAM_QUESTIONS[i]; break; } }
    }

    var fbHtml = correct
      ? '<b style="color:#16a34a">✓ 回答正确！</b>'
      : '<b style="color:#dc2626">✗ 回答错误</b>，正确答案：'+esc(ans);
    if(qdata && qdata.fb) fbHtml += '<br><span class="cq-exp">'+qdata.fb+'</span>';
    fb.innerHTML = fbHtml;
    renderMath(fb);

    btn.textContent = correct ? '正确 ✓' : '再试一次';
    if(correct) btn.disabled = true;

    if(window.EnergyBar){
      var _c = item.closest('.cq-container');
      EnergyBar.recordMastery(getCh(_c), correct?1:0, 1);
    }
  };

  /* ---- 计算 / 证明题：图片上传预览 ---- */
  function handleUpload(inp){
    var qid = inp.getAttribute('data-qid');
    var box = document.getElementById('thumbs_'+qid);
    if(!box) return;
    Array.prototype.forEach.call(inp.files, function(file){
      if(!/^image\//.test(file.type)) return;
      var reader = new FileReader();
      reader.onload = function(e){
        var img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'cq-thumb';
        box.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---- Auto-init ---- */
  function initAll(){
    document.querySelectorAll('.cq-container').forEach(function(el){
      renderChapterQuiz(el, getCh(el));
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initAll);
  else setTimeout(initAll, 150);

})();
