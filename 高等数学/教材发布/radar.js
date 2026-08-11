/* 薄弱点清单 · Weakness List（挂载到成长详情面板）
 * 数据来源：与能量条共用 localStorage('study_v1') 的 mastery[ch] = {right, total}
 * 目标：用可滚动的清单替代雷达图，让学生一眼看到该补哪里，并直接跳转到对应章节.
 */
(function () {
  'use strict';

  var CHAPTERS = [
    { ch: 1,  name: '函数与极限' },
    { ch: 2,  name: '极限与连续' },
    { ch: 3,  name: '导数应用' },
    { ch: 4,  name: '不定积分' },
    { ch: 5,  name: '定积分' },
    { ch: 6,  name: '积分应用' },
    { ch: 7,  name: '微分方程' },
    { ch: 8,  name: '向量几何' },
    { ch: 9,  name: '多元微分' },
    { ch: 10, name: '重积分' },
    { ch: 11, name: '线面积分' },
    { ch: 12, name: '无穷级数' },
    { ch: 13, name: '傅里叶级数' }
  ];

  var FEW_THRESHOLD = 3;
  var WEAK_RATE = 60;

  function readData() {
    var mastery = {};
    try {
      var s = JSON.parse(localStorage.getItem('study_v1'));
      if (s && s.mastery) mastery = s.mastery;
    } catch (e) {}
    return CHAPTERS.map(function (c) {
      var m = mastery[c.ch];
      var total = m ? (m.total || 0) : 0;
      var right = m ? (m.right || 0) : 0;
      var rate = total ? Math.round(right / total * 100) : 0;
      var status = total < FEW_THRESHOLD ? 'few' : (rate < WEAK_RATE ? 'weak' : 'ok');
      return { ch: c.ch, name: c.name, total: total, right: right, rate: rate, status: status };
    });
  }

  function adviceHTML(data) {
    var anyData = data.some(function (d) { return d.total > 0; });
    if (!anyData) {
      return '<p class="eb-radar-tip">还没有做题数据.完成任意章末「学完就练」或「本章测验」，这里会自动列出你的薄弱点.</p>';
    }
    var list = data.slice().sort(function (a, b) {
      // 练习不足排最前，其次按正确率升序
      var fa = a.status === 'few' ? -1 : (a.status === 'weak' ? 0 : 1);
      var fb = b.status === 'few' ? -1 : (b.status === 'weak' ? 0 : 1);
      if (fa !== fb) return fa - fb;
      return a.rate - b.rate;
    });
    return list.map(function (d) {
      var color = d.status === 'few' ? '#B0BEC5' : (d.status === 'weak' ? '#E08A2B' : '#0F6E56');
      var tag = d.status === 'few' ? '练习不足' : (d.status === 'weak' ? '薄弱' : '达标');
      var detail = d.status === 'few'
        ? '只做了 ' + d.total + ' 题，数据还不够'
        : '正确率 ' + d.rate + '%（' + d.right + '/' + d.total + ' 题）';
      var bar = d.total > 0
        ? '<div class="eb-rate-bar"><div class="eb-rate-fill" style="width:' + d.rate + '%;background:' + color + '"></div></div>'
        : '<div class="eb-rate-bar"><div class="eb-rate-fill" style="width:0;background:' + color + '"></div></div>';
      return '<div class="eb-radar-item">' +
        '<div class="eb-radar-head">' +
          '<span class="eb-radar-dot" style="background:' + color + '"></span>' +
          '<b>第' + d.ch + '章 ' + d.name + '</b>' +
          '<span class="eb-radar-tag" style="color:' + color + '">' + tag + '</span>' +
        '</div>' +
        bar +
        '<div class="eb-radar-sub">' + detail + ' · <a href="ch' + d.ch + '.html">去复习 →</a></div>' +
      '</div>';
    }).join('');
  }

  function init() {
    var tries = 0;
    var iv = setInterval(function () {
      var detail = document.getElementById('eb-detail');
      var chs = document.getElementById('eb-chs');
      if (detail && chs && !document.getElementById('eb-radar-wrap')) {
        var wrap = document.createElement('div');
        wrap.className = 'eb-radar-wrap';
        wrap.id = 'eb-radar-wrap';
        wrap.innerHTML = '<div class="eb-gh-title">薄弱点清单</div>' +
          '<div class="eb-radar-list" id="eb-radar-list"></div>';
        detail.insertBefore(wrap, chs);
      }
      var list = document.getElementById('eb-radar-list');
      if (list) {
        clearInterval(iv);
        function redraw() {
          if (detail.hidden) return;
          list.innerHTML = adviceHTML(readData());
        }
        if (window.MutationObserver) {
          new MutationObserver(redraw).observe(chs, { childList: true, subtree: true });
        }
        window.addEventListener('storage', function (e) { if (e.key === 'study_v1') redraw(); });
        redraw();
      } else if (++tries > 50) {
        clearInterval(iv);
      }
    }, 200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
