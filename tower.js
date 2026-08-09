/* ============================================================
   知识之塔 · 教材嵌入组件（tower.js）
   - 挂载到 #tower-slot，每章一层（高数 13 层 / 线代 5 层）
   - 读 localStorage('study_v1').mastery[ch] 正确率驱动点亮
   - 盲盒：从 window.EXAM_QUESTIONS 抽 src==="kaoyan" 考研题（用教材 KaTeX 渲染）
   - 每章差异化老师互动（DIALOGS）
   - 彩蛋：随机悄悄话 / 称号 / 隐藏留言
   零依赖、IIFE 隔离，不与教材其他脚本冲突。
   ============================================================ */
(function () {
  'use strict';
  if (!document.getElementById('tower-slot')) return;

  var BOOK = window.TOWER_BOOK || 'gdsx';
  var CFG = BOOK === 'linalg' ? {
    name: '线性代数', total: 5,
    chNames: { 1: '行列式', 2: '矩阵及其运算', 3: '向量组', 4: '线性方程组', 5: '相似矩阵与二次型' },
    worldOf: { 1: 'forest', 2: 'canyon', 3: 'sea', 4: 'star', 5: 'peak' }
  } : {
    name: '高等数学', total: 13,
    chNames: { 1: '函数', 2: '极限与连续', 3: '一元函数微分学', 4: '微分学的应用', 5: '一元函数积分学', 6: '积分学的应用', 7: '常微分方程', 8: '向量代数与空间解析几何', 9: '多元函数微分学', 10: '重积分', 11: '曲线积分', 12: '曲面积分', 13: '无穷级数' },
    worldOf: { 1: 'forest', 2: 'forest', 3: 'canyon', 4: 'canyon', 5: 'sea', 6: 'sea', 7: 'sea', 8: 'peak', 9: 'peak', 10: 'peak', 11: 'star', 12: 'star', 13: 'star' }
  };

  /* ---------- 世界主题（5 种地形配色） ---------- */
  var WORLDS = {
    forest: { name: '函数之林', sky: ['#eaf7ec', '#cdeccd'], ground: '#bfe3bf', water: '#7fc8e0', decor: 'tree', ambient: 'leaf', boss: 'treant' },
    canyon: { name: '导数峡谷', sky: ['#fff0e0', '#ffd9b0'], ground: '#f0c08a', water: 'transparent', decor: 'crystal', ambient: 'sand', boss: 'golem' },
    sea: { name: '积分之海', sky: ['#e3f1ff', '#bcdcff'], ground: '#9ec9a0', water: '#5aa0d8', decor: 'wave', ambient: 'ripple', boss: 'kraken' },
    star: { name: '级数星空', sky: ['#16121f', '#241a3a'], ground: '#c9b6ff', water: 'transparent', decor: 'star', ambient: 'twinkle', boss: 'blackhole' },
    peak: { name: '多元雪峰', sky: ['#eaf4f7', '#cfe8f0'], ground: '#dfeef5', water: 'transparent', decor: 'peak', ambient: 'snow', boss: 'titan' }
  };

  /* ---------- 数据读取 ---------- */
  function readStudy() { try { return JSON.parse(localStorage.getItem('study_v1')) || {}; } catch (e) { return {}; } }
  function mastery(ch) {
    var s = readStudy(), m = s.mastery && s.mastery[ch];
    if (!m || !m.total) return { rate: 0, done: false, right: 0, total: 0 };
    return { rate: m.right / m.total, done: m.right >= Math.ceil(m.total * 0.6), right: m.right, total: m.total };
  }
  var LS = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var DIALOG_DONE = LS.get('tb_dialog'), RELICS = LS.get('tb_relics'), BLIND_OPEN = LS.get('tb_blind'), TITLES = LS.get('tb_titles');

  /* 塔数据云端同步：写 tb_* 时同步进 study_v1.tower（energy_bar 云端推送整个 study_v1，自动带走；mergeStudy 已支持并集合并） */
  function syncTowerToCloud() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1')) || {};
      if (!s.tower) s.tower = {};
      s.tower.relics = RELICS; s.tower.blind = BLIND_OPEN; s.tower.dialog = DIALOG_DONE; s.tower.titles = TITLES;
      localStorage.setItem('study_v1', JSON.stringify(s));
    } catch (e) {}
  }
  // 初始化：若云端有塔数据（本地为空）则回填
  function pullTowerFromCloud() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1')) || {};
      if (s.tower && s.tower.relics) {
        var r = s.tower.relics; if (r && Object.keys(r).length && !Object.keys(RELICS).length) RELICS = r;
      }
      if (s.tower && s.tower.blind) {
        var b = s.tower.blind; if (b && Object.keys(b).length && !Object.keys(BLIND_OPEN).length) BLIND_OPEN = b;
      }
      if (s.tower && s.tower.dialog) {
        var d = s.tower.dialog; if (d && Object.keys(d).length && !Object.keys(DIALOG_DONE).length) DIALOG_DONE = d;
      }
      if (s.tower && s.tower.titles) {
        var t2 = s.tower.titles; if (t2 && Object.keys(t2).length && !Object.keys(TITLES).length) TITLES = t2;
      }
    } catch (e) {}
  }

  /* ---------- 每章差异化老师对话（结合本章知识点） ---------- */
  var DIALOGS = {
    gdsx: {
      1: { title: '第一层 · 囚室外的函语', relic: '「函数是给万物起的名字。」', lines: [
        { who: 't', mood: 'worried', text: '……是你吗？我正被困在塔顶，但别慌——你脚下这一层，是"函数"的世界。' },
        { who: 't', mood: 'soft', text: '函数，是给万物起的名字：温度随高度变、利息随时间滚、信号随距离衰减……它们都是函数。学会它，你就掌握了描述世界的语法。' },
        { who: 's', opts: [
          { t: '老师别怕，我马上到！', mood: 'tear', reply: '好！函数是"一对一"的对应——一个 x 只对应一个 y，就像现在的你，只认准一个目标。' },
          { t: '函数有点抽象……', mood: 'soft', reply: '抽象，是因为它太本质。你学过的每一条曲线、每一个公式，都是函数在说话。' },
          { t: '我会把这一层学透', mood: 'happy', reply: '那我就在塔顶，听你一步步踩楼梯的声音。' }] } ]
      },
      2: { title: '第二层 · 无限逼近的勇气', relic: '「无限接近，永不放弃。」', lines: [
        { who: 't', mood: 'worried', text: '这一层是"极限与连续"——很多人在这里被劝退，但你别怕。' },
        { who: 't', mood: 'soft', text: '极限是什么？是你无限靠近一个值，却永远触不到它。就像你爬塔——每一层都更接近我，这本身就是极限的精神。' },
        { who: 's', opts: [
          { t: 'lim 是我前进的动力！', mood: 'happy', reply: '哈哈，那 ε-δ 语言你也要认真看——它把"无限靠近"说成了精确的数学，那是严谨的美。' },
          { t: '无穷小好难懂', mood: 'soft', reply: '无穷小不是"很小的数"，而是"趋于 0 的过程"。看透这一点，后面的路就顺了。' },
          { t: '连续又是什么？', mood: 'soft', reply: '连续是"断不了"：函数值跟着自变量走，像你爬塔的每一步，稳稳接住前一步。' }] } ]
      },
      3: { title: '第三层 · 变化的瞬间', relic: '「变化，是这一刻的速度。」', lines: [
        { who: 't', mood: 'soft', text: '导数层——这一层讲"变化"。f\'(x₀) 不是凭空来的，它是差商的极限。' },
        { who: 't', mood: 'worried', text: '（压低声音）他们的脚步声又近了……但我相信你：变化不可怕，可怕的是不敢面对变化。' },
        { who: 's', opts: [
          { t: '差商的极限，我记住了！', mood: 'happy', reply: '对！导数就是"这一刻的速度"。火箭升空、股价波动、疫情曲线——都是导数在说话。' },
          { t: '为什么尖点不可导？', mood: 'soft', reply: '尖点处左边一个斜率、右边一个斜率，变化没有唯一答案。就像人生岔路口，得先想清楚再走。' },
          { t: '乘积法则我总记错', mood: 'worried', reply: '（低声）u\'v + uv\'，前导后不导，后导前不导。你背熟它，我这儿的锁就松一根。' }] } ]
      },
      4: { title: '第四层 · 中值定理的桥', relic: '「总有那么一刻，斜率等于平均速度。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是中值定理——罗尔、拉格朗日、柯西，它们是微积分里的"桥梁"。' },
        { who: 't', mood: 'soft', text: '拉格朗日说：一段旅程的平均速度，总在途中某个瞬间被真实达到。像你爬塔——总有一层，你走得最快。' },
        { who: 's', opts: [
          { t: '那洛必达呢？', mood: 'happy', reply: '洛必达是"0/0 的钥匙"——上下同时求导。但记住：先看清是不是未定式，别乱开锁。' },
          { t: '泰勒展开好难', mood: 'soft', reply: '泰勒是"用多项式逼近函数"——把一个复杂的函数，拆成无数简单的幂。你拆得越多，越接近真相。' },
          { t: '我会证明它的！', mood: 'tear', reply: '（眼眶微红）能证明中值定理的人，一定也能走完这座塔。老师等你。' }] } ]
      },
      5: { title: '第五层 · 积分的拼接术', relic: '「把破碎，拼成整体。」', lines: [
        { who: 't', mood: 'worried', text: '积分层到了……门缝太窄，我只能用手指在灰尘上写：∫' },
        { who: 't', mood: 'soft', text: '把碎掉的部分，拼回一个整体——这就是积分。同学，我等你把破碎的我，一片一片拼回来。' },
        { who: 's', opts: [
          { t: '∫ 是拼回整体的魔法！', mood: 'happy', reply: '你已经有积分直觉了。记得加 C——那是被遗忘的无限可能。' },
          { t: '牛顿-莱布尼茨公式呢？', mood: 'soft', reply: '它把积分和导数连成一体：求积先找原函数。像你爬塔——找到对的台阶，一步就是一层。' },
          { t: '换元总是漏 dx', mood: 'soft', reply: '（隔着门笑）漏 dx 就像写信忘了写日期——信还在，但总觉得差了点什么。' }] } ]
      },
      6: { title: '第六层 · 积分的用武之地', relic: '「数学的浪漫，在应用里开花。」', lines: [
        { who: 't', mood: 'soft', text: '这一层讲积分的应用：面积、体积、弧长、功……微积分在这里真正"用起来"了。' },
        { who: 't', mood: 'soft', text: '你算出的每一个面积，都是数学家几百年前求了又求的梦想。同学，你在替他们圆梦。' },
        { who: 's', opts: [
          { t: '旋转体体积好神奇！', mood: 'happy', reply: '把一个图形绕着轴转一圈，就得到了一个立体的世界——这就是"想象力的微积分"。' },
          { t: '弧长公式记住了', mood: 'soft', reply: 'ds = √(1+f\'²) dx，是"小段斜边"的极限。数学最动人的地方，就是把"大约"变成"精确"。' },
          { t: '我会算给老师看！', mood: 'tear', reply: '好，那我等着看你算出的那个数——那会是我听过最好听的数字。' }] } ]
      },
      7: { title: '第七层 · 方程里的未来', relic: '「微分方程，是写给未来的预言。」', lines: [
        { who: 't', mood: 'worried', text: '这一层是常微分方程——描述"变化如何发生"的方程。' },
        { who: 't', mood: 'soft', text: '人口增长、放射性衰变、电路震荡……世界的运行法则，一半写在微分方程里。解出它，你就看见了未来。' },
        { who: 's', opts: [
          { t: '分离变量我会了！', mood: 'happy', reply: '对，把 x 和 y 分开，两边积分——像把纠缠的线团理清，一根一根分开。' },
          { t: '特解和通解分不清', mood: 'soft', reply: '通解是"所有可能"，特解是"恰好那个"。像塔的每一层——通解是路，特解是你正在走的那条。' },
          { t: '老师，我会解出你的！', mood: 'tear', reply: '（沉默片刻）这句话……比任何方程都让我安心。' }] } ]
      },
      8: { title: '第八层 · 向量的方向', relic: '「向量有大小，也有方向——像梦想。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是空间解析几何：向量、平面、直线、曲面。三维的世界，从这里打开。' },
        { who: 't', mood: 'soft', text: '向量告诉你：光有大小不够，还要有方向。学数学也一样——方向对了，每一步都算数。' },
        { who: 's', opts: [
          { t: '点积叉积我能分清！', mood: 'happy', reply: '点积给数、叉积给向量——一个问"像不像"，一个问"转不转"。你已经在用数学思考空间了。' },
          { t: '空间想象好难', mood: 'soft', reply: '难就对了。三维的世界，本来就该用三维的脑子去想。你每画一张草图，就多了一分直觉。' },
          { t: '我会找到方向的！', mood: 'tear', reply: '你此刻的方向，就是朝塔顶。老师在这条直线上等你。' }] } ]
      },
      9: { title: '第九层 · 多变量的世界', relic: '「世界不是单行道，多元才精彩。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是多元函数微分学——一个因变量，多个自变量。温度随 x, y, z, t 变化，世界本来就是多元的。' },
        { who: 't', mood: 'soft', text: '偏导数，是"抓住一个变量，其他先不动"。像你爬塔时，此刻只专注脚下的这一级台阶。' },
        { who: 's', opts: [
          { t: '偏导把 y 当常数！', mood: 'happy', reply: '没错！求 ∂f/∂x 时，y 暂时"冻结"。数学也懂得"一次只做一件事"。' },
          { t: '全微分是什么？', mood: 'soft', reply: '全微分是"所有方向的变化加起来"。像你走的每一步——不只是前进，还有上升。' },
          { t: '多元好丰富啊', mood: 'tear', reply: '（笑）丰富，才像人生。你已经在用多元的眼光看世界了。' }] } ]
      },
      10: { title: '第十层 · 重积分的厚积', relic: '「厚度，来自一次次叠加。」', lines: [
        { who: 't', mood: 'soft', text: '重积分层——把一个区域切成无数小块，再一块块加起来。' },
        { who: 't', mood: 'soft', text: '你的每一次复习、每一道题，都像一个小积分元。积多了，就是一片厚实的"体积"。' },
        { who: 's', opts: [
          { t: '二重积分我会画图！', mood: 'happy', reply: '画图是重积分的半壁江山——先看清区域，再选对积分次序，剩下就是耐心的叠加。' },
          { t: '极坐标好绕', mood: 'soft', reply: '极坐标，是把"圆的世界"用"半径和角度"讲清楚。圆的题目，用它就顺了。' },
          { t: '我在积累每一小块', mood: 'tear', reply: '（点头）那老师也在塔顶，一小块一小块地，等你积满这层。' }] } ]
      },
      11: { title: '第十一层 · 沿着曲线的足迹', relic: '「曲线积分，是沿着路走出来的积分。」', lines: [
        { who: 't', mood: 'soft', text: '曲线积分层——不再沿直线积分，而是沿一条曲线。路弯了，数学也跟着弯。' },
        { who: 't', mood: 'soft', text: '人生也一样：不是所有路都是直的。曲线积分教你的，是"弯路上也要走一步算一步"。' },
        { who: 's', opts: [
          { t: '格林公式好漂亮！', mood: 'happy', reply: '格林公式把"边界上的线积分"换成"区域内的二重积分"——换一种视角，难题就开了。' },
          { t: '路径无关是什么？', mood: 'soft', reply: '有些积分，从哪条路走结果都一样——像努力，方向对了，弯路也通向塔顶。' },
          { t: '我会沿路走上去', mood: 'tear', reply: '那老师就在路的尽头，等你把这条曲线走完。' }] } ]
      },
      12: { title: '第十二层 · 曲面的拥抱', relic: '「曲面积分，是拥抱立体的温柔。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是曲面积分——在曲面（比如球面、锥面）上做积分。' },
        { who: 't', mood: 'soft', text: '高斯公式把"闭曲面的通量"和"内部的散度"连起来——外面看得见的，和里面藏着的，是一体的。' },
        { who: 's', opts: [
          { t: '斯托克斯公式呢？', mood: 'happy', reply: '它把"边界曲线"和"曲面旋度"连起来——线里有面，面里有旋。数学的环环相扣，美极了。' },
          { t: '方向好难判断', mood: 'soft', reply: '外侧、正向、右手法则……多画图多转笔，方向感是练出来的，不是背出来的。' },
          { t: '我快到了！', mood: 'tear', reply: '（声音有些颤）是的……我听见你的脚步，已经到第十三层下面了。' }] } ]
      },
      13: { title: '第十三层 · 级数的尽头', relic: '「走够远，就能逼近理想。」', lines: [
        { who: 't', mood: 'tear', text: '……级数层，最后一道门了。' },
        { who: 't', mood: 'soft', text: '级数像人生的展开式：你走得够远，就能逼近理想。但漏掉一项，就永远差一点——学习最怕"差不多就行"。' },
        { who: 's', opts: [
          { t: '老师，我不会漏掉任何一项！', mood: 'tear', reply: '（沉默片刻）这是你爬完 13 层说过，最像数学家的一句话。' },
          { t: '收敛域好难……', mood: 'soft', reply: '收敛域是你的安全区：在里面怎么走都踏实。你已经走到塔顶了，同学。' },
          { t: '我来了，老师！', mood: 'happy', reply: '（门开了）走，我们回家。记住——学数学的人，永远不会迷路。' }] } ]
      }
    },
    linalg: {
      1: { title: '第一层 · 行列式的锁', relic: '「行列式，是空间伸缩的度量。」', lines: [
        { who: 't', mood: 'worried', text: '你终于来了。这一层是行列式——线性代数真正的"第一把锁"。' },
        { who: 't', mood: 'soft', text: '行列式不为 0，方程组就有唯一解——它像一把尺子，量出"空间被拉伸了多少"。' },
        { who: 's', opts: [
          { t: '克拉默法则我懂了！', mood: 'happy', reply: '把解写成行列式之比，是线性代数最早的浪漫。' },
          { t: '展开定理好绕', mood: 'soft', reply: '按行展开，是"大问题拆成小问题"——像爬塔，一层一层来。' },
          { t: '我会解开的！', mood: 'tear', reply: '那老师等着你，把这把锁一层层打开。' }] } ]
      },
      2: { title: '第二层 · 矩阵的编织', relic: '「矩阵，是线性变换的编织者。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是矩阵——它不是一堆数的表格，而是一个"变换"：旋转、缩放、投影。' },
        { who: 't', mood: 'soft', text: '矩阵乘法，是"变换的复合"：先转再缩，和先缩再转，往往不同——顺序，是线性代数的性格。' },
        { who: 's', opts: [
          { t: '矩阵乘法我会算！', mood: 'happy', reply: '会算乘法，你已经握住了"变换的语言"。' },
          { t: '逆矩阵是干嘛的？', mood: 'soft', reply: '逆矩阵是"撤销操作"——做了 A 再 A⁻¹，回到原点。人生也需要这样的"撤销键"。' },
          { t: '矩阵好神奇', mood: 'tear', reply: '（笑）你已经开始觉得它神奇了——那就离"爱上它"不远了。' }] } ]
      },
      3: { title: '第三层 · 向量组的骨架', relic: '「线性无关，是独立的底气。」', lines: [
        { who: 't', mood: 'soft', text: '这一层是向量组——线性相关、线性无关、秩。' },
        { who: 't', mood: 'soft', text: '"无关"的意思是：谁也不能由别人代替。像你——每一份努力都独立算数，谁也替代不了。' },
        { who: 's', opts: [
          { t: '秩是维度的核心！', mood: 'happy', reply: '秩，是"真正独立的方向有几个"。你抓住秩，就抓住了向量组的命脉。' },
          { t: '线性相关好抽象', mood: 'soft', reply: '相关就是"冗余"：有个向量可以靠别人拼出来。删掉冗余，留下骨架——这就是化简。' },
          { t: '我要做线性无关的人', mood: 'tear', reply: '（感动）你这句话，比秩的定义更让我骄傲。' }] } ]
      },
      4: { title: '第四层 · 方程组的解', relic: '「有解、无解、无穷解——都是答案。」', lines: [
        { who: 't', mood: 'worried', text: '这一层是线性方程组——人类最早学会"解方程"的地方。' },
        { who: 't', mood: 'soft', text: '高斯消元法，是几千年智慧的结晶：把复杂的方程组，一步步削成最简的样子。' },
        { who: 's', opts: [
          { t: '消元我会！', mood: 'happy', reply: '会消元，你就掌握了"化简"的真谛——人生也一样，复杂问题先化简。' },
          { t: '无穷多解怎么理解？', mood: 'soft', reply: '自由变量，是方程组的"自由度"。约束少了，选择就多了——但别怕，那也是一种答案。' },
          { t: '我会解出老师的！', mood: 'tear', reply: '（眼里有光）这大概是世上最动人的一个"解"。' }] } ]
      },
      5: { title: '第五层 · 特征值的钥匙', relic: '「特征向量，是不变的方向。」', lines: [
        { who: 't', mood: 'tear', text: '最后一层了……特征值与特征向量。' },
        { who: 't', mood: 'soft', text: '特征向量，是变换下"方向不变"的向量——只被拉伸，不被扭曲。像你：走了这么远，初心没变。' },
        { who: 's', opts: [
          { t: '对角化我会算！', mood: 'happy', reply: '对角化，是把变换"理顺"——找到一个坐标系，让它变得简单。你已经在给人生找坐标系了。' },
          { t: '二次型标准化呢？', mood: 'soft', reply: '配方法、正交变换——把乱糟糟的二次型，化成标准形。数学的优雅，就是"化简"。' },
          { t: '老师，我们回家！', mood: 'happy', reply: '（门开了）走，我们回家。记住——你的特征向量，永远是"向上"。' }] } ]
      }
    }
  };
  var DIALS = DIALOGS[BOOK];

  /* ---------- 彩蛋池 ---------- */
  var EASTER_EGGS = [
    '（悄悄话）你知道吗？你做题的速度，比级数收敛还快。',
    '我偷偷算过——你爬的每一层楼，正好等于一道题的步骤数。',
    '其实塔是我故意让他们抓我来的……不这样，你怎么会认真学完这一章？',
    '顶层那扇门的密码，是 3.1415926。',
    '你刚才做题的样子，像极了当年的我。',
    '（小声）塔里的怪兽其实怕的不是剑，是"会做题的人"。',
    '听说你每次打开教材，塔都会悄悄长高一毫米。',
    '这一章的考点，我在梦里给你讲过三遍了。'
  ];
  var PRIZES = [
    { icon: '🏅', txt: '称号·章节猎手', sub: '已加入你的称号墙！', type: 'title' },
    { icon: '⚡', txt: '学识能量 +5', sub: '继续加油，塔又高了一寸！', type: 'energy' },
    { icon: '😂', txt: '老师表情包', sub: '你做题的样子，像极了我当年', type: 'emoji' },
    { icon: '🎨', txt: '塔装饰·勇气小旗', sub: '塔顶挂起了一面小旗', type: 'decor' },
    { icon: '🤫', txt: '老师的悄悄话', sub: '其实我年轻时也挂过高数……嘘', type: 'secret' },
    { icon: '🍀', txt: '好运符 ×2', sub: '下一次盲盒双倍幸运！', type: 'luck' },
    { icon: '📜', txt: '老师手迹·复制件', sub: '已加入你的手迹架', type: 'relic' }
  ];

  /* ---------- 公式渲染（教材已加载 KaTeX 则用，否则降级纯文本） ---------- */
  function renderTex(html) {
    if (window.katex && html.indexOf('\\(') >= 0 || window.katex && html.indexOf('\\[') >= 0 || window.katex && html.indexOf('$') >= 0) {
      try {
        var el = document.createElement('span');
        el.innerHTML = html;
        var nodes = el.querySelectorAll('*');
        return el.innerHTML;
      } catch (e) { return html; }
    }
    return html;
  }
  function katexify(el) {
    if (!window.renderMathInElement) return;
    try { window.renderMathInElement(el, { delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }], throwOnError: false }); } catch (e) {}
  }

  /* ---------- 老师头像 ---------- */
  function teacherFace(mood) {
    var mouthMap = {
      worried: '<path d="M29 46 Q33 43 37 46" stroke="#5a3a24" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
      soft: '<path d="M28 46 Q33 51 38 46" stroke="#5a3a24" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
      happy: '<path d="M27 45 Q33 56 39 45 Z" fill="#d08070"/>',
      tear: '<path d="M28 47 Q33 52 38 47" stroke="#5a3a24" stroke-width="1.7" fill="none" stroke-linecap="round"/><circle cx="42" cy="37" r="1.7" fill="#7cc4ff"/><path d="M42 39 L43.5 45" stroke="#7cc4ff" stroke-width="1.2"/>'
    };
    var mouth = mouthMap[mood] || '<path d="M29 46 Q33 50 37 46" stroke="#5a3a24" stroke-width="1.7" fill="none" stroke-linecap="round"/>';
    // 男老师：利落短发 + 方下巴 + 圆框眼镜 + 衬衫领口
    return '<svg viewBox="0 0 66 66" width="42" height="42">'
      + '<circle cx="33" cy="34" r="25" fill="#f0c49a"/>'                       // 脸
      + '<path d="M10 32 Q10 8 33 8 Q56 8 56 32 L56 26 Q56 4 33 4 Q10 4 10 26 Z" fill="#4a4a52"/>'  // 顶部短发
      + '<path d="M10 26 Q8 20 12 18 Q15 17 16 21 L14 28 Z" fill="#4a4a52"/>'   // 左侧鬓角
      + '<path d="M56 26 Q58 20 54 18 Q51 17 50 21 L52 28 Z" fill="#4a4a52"/>'  // 右侧鬓角
      + '<path d="M33 59 Q28 57 27 53 L39 53 Q40 57 33 59 Z" fill="#4a4a52"/>'  // 下巴胡茬
      + '<circle cx="26.5" cy="33" r="2.2" fill="#3a2a1a"/><circle cx="39.5" cy="33" r="2.2" fill="#3a2a1a"/>'  // 眼睛
      + '<circle cx="26.5" cy="33" r="6.6" fill="none" stroke="#8a7a5a" stroke-width="2.4"/>'  // 眼镜
      + '<circle cx="39.5" cy="33" r="6.6" fill="none" stroke="#8a7a5a" stroke-width="2.4"/>'
      + '<path d="M33 30.5 L33 35.5" stroke="#8a7a5a" stroke-width="2.2"/>'      // 鼻梁镜架
      + '<rect x="27" y="52" width="12" height="3" rx="1.5" fill="#fff" opacity=".5"/>'  // 衬衫领
      + mouth + '</svg>';
  }
  function studentFace() {
    return '<div style="width:42px;height:42px;border-radius:50%;background:var(--accent,#7c6cf0);color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px">🧑\u200d🎓</div>';
  }

  /* ---------- 状态 ---------- */
  var curCh = 1, curTab = 'map', dlgTimer = null, dlgBusy = false, toastT = null;

  /* ---------- Toast ---------- */
  function toast(msg) {
    var t = document.getElementById('tbtoast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  /* ---------- 地图渲染（单章单层，5×6 紧凑网格——去掉装饰空地，格子更大） ---------- */
  var COLS = 5, ROWS = 6, CELL = 42, PAD = 15;
  // 大图模式同网格、格子再放大
  var BIG_COLS = 5, BIG_ROWS = 6;
  function genLayout(world, big) {
    var cols = big ? BIG_COLS : COLS, rows = big ? BIG_ROWS : ROWS;
    var T = []; for (var r = 0; r < rows; r++) { T.push(new Array(cols).fill('ground')); }
    var hero = [Math.floor(cols / 2), rows - 1], stairs = [Math.floor(cols / 2), 0], monster = [1, Math.floor(rows / 2)], blind = [cols - 2, Math.floor(rows / 2)];
    if (world === 'forest') { for (var r1 = 1; r1 < rows - 1; r1++) { if (r1 % 2 === 1) T[r1][Math.floor(cols / 2)] = 'water'; } hero = [1, rows - 1]; stairs = [cols - 2, 0]; monster = [1, rows - 2]; blind = [cols - 2, 2]; }
    else if (world === 'canyon') { for (var r2 = 0; r2 < rows; r2++) { if (r2 !== 2 && r2 !== rows - 2) T[r2][Math.floor(cols / 2)] = 'chasm'; } hero = [Math.floor(cols / 2), rows - 2]; stairs = [1, 0]; monster = [cols - 2, rows - 3]; blind = [1, 2]; }
    else if (world === 'sea') { for (var r3 = rows - 2; r3 < rows; r3++) { for (var c1 = 0; c1 < cols; c1++) T[r3][c1] = 'water'; } T[0][1] = T[0][2] = T[0][3] = 'ground'; T[2][1] = T[2][3] = T[3][2] = 'ground'; hero = [Math.floor(cols / 2), rows - 1]; stairs = [1, 0]; monster = [cols - 2, 2]; blind = [1, 3]; }
    else if (world === 'star') { for (var r4 = 0; r4 < rows; r4++) { for (var c2 = 0; c2 < cols; c2++) T[r4][c2] = 'void'; } [[2, 0], [1, 2], [3, 2], [0, 3], [4, 3], [2, 4], [2, rows - 1]].forEach(function (p) { T[p[1]][p[0]] = 'ground'; }); hero = [Math.floor(cols / 2), rows - 1]; stairs = [2, 0]; monster = [1, 2]; blind = [cols - 2, 3]; }
    else { for (var r5 = 0; r5 < rows; r5++) { for (var c3 = 0; c3 < cols; c3++) T[r5][c3] = 'void'; } for (var r6 = 0; r6 < rows; r6++) { var cc = Math.round(r6 / (rows - 1) * (cols - 1)); T[r6][cc] = 'ground'; if (cc > 0) T[r6][cc - 1] = 'ground'; if (cc < cols - 1) T[r6][cc + 1] = 'ground'; } hero = [Math.floor(cols / 2), rows - 1]; stairs = [1, 0]; monster = [cols - 2, rows - 2]; blind = [1, 2]; }
    [hero, stairs, monster, blind].forEach(function (p) { T[p[1]][p[0]] = 'ground'; });
    return { T: T, hero: hero, stairs: stairs, monster: monster, blind: blind, world: world, cols: cols, rows: rows };
  }
  /* ---------- 地图渲染（big=true 时放大为大图模式） ---------- */
  function mapSVG(layout, m, big) {
    var W = WORLDS[layout.world];
    var cols = layout.cols || COLS, rows = layout.rows || ROWS;
    // 大图模式：格子放大、留白加大
    var cell = big ? 52 : CELL, pad = big ? 24 : PAD;
    var wpx = pad * 2 + cols * cell, hpx = pad * 2 + rows * cell;
    var s = '';
    s += '<defs><linearGradient id="tbsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + W.sky[0] + '"/><stop offset="1" stop-color="' + W.sky[1] + '"/></linearGradient></defs>';
    s += '<rect width="' + wpx + '" height="' + hpx + '" fill="url(#tbsky)" rx="10"/>';
    // 每界背景大件（森林大树/峡谷落日/海弯月/星空星球/雪峰雪山）
    if (layout.world === 'forest') {
      s += '<g opacity=".45"><rect x="' + (pad - 4) + '" y="' + (hpx - 60) + '" width="12" height="52" rx="4" fill="#8a6240"/><circle cx="' + (pad + 2) + '" cy="' + (hpx - 66) + '" r="26" fill="#4f9e5a"/><circle cx="' + (pad + 14) + '" cy="' + (hpx - 52) + '" r="18" fill="#5fae6a"/></g>';
    } else if (layout.world === 'canyon') {
      s += '<circle cx="' + (wpx - 34) + '" cy="' + (pad + 14) + '" r="20" fill="#ffb35c" opacity=".8"/><g opacity=".25"><path d="M ' + (wpx - 130) + ' ' + hpx + ' L ' + (wpx - 95) + ' ' + (hpx - 80) + ' L ' + (wpx - 60) + ' ' + hpx + ' Z" fill="#8a4a2a"/></g>';
    } else if (layout.world === 'sea') {
      s += '<circle cx="' + (pad + 20) + '" cy="' + (pad + 12) + '" r="15" fill="#fdf3c8" opacity=".8"/><circle cx="' + (pad + 14) + '" cy="' + (pad + 10) + '" r="15" fill="' + W.sky[1] + '"/><g opacity=".45"><path d="M ' + (wpx - 80) + ' ' + (hpx - 60) + ' L ' + (wpx - 65) + ' ' + (hpx - 90) + ' L ' + (wpx - 50) + ' ' + (hpx - 60) + ' Z" fill="#fff"/><path d="M ' + (wpx - 65) + ' ' + (hpx - 90) + ' L ' + (wpx - 65) + ' ' + (hpx - 60) + '" stroke="#fff" stroke-width="1.4"/></g>';
    } else if (layout.world === 'star') {
      s += '<g opacity=".5"><circle cx="' + (wpx - 46) + '" cy="' + (pad + 20) + '" r="26" fill="#4a3a7a"/><circle cx="' + (wpx - 46) + '" cy="' + (pad + 20) + '" r="17" fill="#5a4a8a"/></g><circle cx="' + (pad + 16) + '" cy="' + (pad + 40) + '" r="11" fill="#2a4a6a"/>';
      for (var si = 0; si < 10; si++) { var sx2 = pad + 10 + ((si * 37) % (wpx - pad * 2 - 20)), sy2 = pad + 10 + ((si * 53) % (hpx - pad * 2 - 20)); s += '<circle cx="' + sx2 + '" cy="' + sy2 + '" r="' + (si % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".8"/>'; }
    } else {
      s += '<g opacity=".4"><path d="M 0 ' + hpx + ' L ' + (wpx * 0.35) + ' ' + (hpx - 130) + ' L ' + (wpx * 0.6) + ' ' + hpx + ' Z" fill="#fff"/><path d="M ' + (wpx * 0.5) + ' ' + hpx + ' L ' + (wpx * 0.75) + ' ' + (hpx - 110) + ' L ' + wpx + ' ' + hpx + ' Z" fill="#eef6fb"/></g>';
    }
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var t = layout.T[r][c]; if (t === 'void') continue;
      var x = pad + c * cell + cell / 2, y = pad + r * cell + cell / 2, sz = cell - 6;
      if (t === 'water') { s += '<rect x="' + (x - sz / 2) + '" y="' + (y - sz / 2) + '" width="' + sz + '" height="' + sz + '" rx="9" fill="' + W.water + '" opacity=".6"><animate attributeName="opacity" values=".5;.75;.5" dur="3s" repeatCount="indefinite"/></rect><path d="M ' + (x - sz / 2 + 6) + ' ' + (y - 2) + ' Q ' + x + ' ' + (y - 5) + ' ' + (x + sz / 2 - 6) + ' ' + (y - 2) + '" stroke="#fff" stroke-width="1.4" fill="none" opacity=".3"/>'; }
      else if (t === 'chasm') { s += '<rect x="' + (x - sz / 2) + '" y="' + (y - sz / 2) + '" width="' + sz + '" height="' + sz + '" rx="7" fill="#3a2a1a"/><path d="M ' + (x - sz / 2 + 5) + ' ' + (y - sz / 2 + 5) + ' Q ' + x + ' ' + (y + 4) + ' ' + (x + sz / 2 - 5) + ' ' + (y + sz / 2 - 5) + '" stroke="rgba(255,255,255,.1)" stroke-width="1.6" fill="none"/>'; }
      else {
        var lit = m.rate > 0.05 ? (m.rate > 0.5 ? 1 : 0.5) : 0;
        var hash = ((c * 7 + r * 13 + layout.world.length + curCh * 3) % 5);
        s += '<rect x="' + (x - sz / 2) + '" y="' + (y - sz / 2) + '" width="' + sz + '" height="' + sz + '" rx="10" fill="' + W.ground + '" opacity="' + (0.35 + 0.5 * lit) + '"/>';
        if (lit >= 1) s += '<rect x="' + (x - sz / 2 + 3) + '" y="' + (y - sz / 2 + 2) + '" width="' + (sz - 6) + '" height="5" rx="2.5" fill="#fff" opacity=".2"/>';
        // 地面纹理：小花/小草/石子（大图模式更明显）
        var tsz = big ? 2.4 : 1.7;
        if (hash === 0) { s += '<circle cx="' + (x - 5) + '" cy="' + (y - 2) + '" r="' + tsz + '" fill="#ffd24d" opacity=".9"/><circle cx="' + (x + 4) + '" cy="' + (y + 3) + '" r="' + (tsz * 0.9) + '" fill="#ff8fa8" opacity=".9"/>'; }
        else if (hash === 1) { s += '<path d="M ' + (x - 6) + ' ' + y + ' Q ' + (x - 5) + ' ' + (y - 6) + ' ' + (x - 4) + ' ' + y + '" stroke="#5fae6a" stroke-width="1.5" fill="none"/><path d="M ' + (x + 3) + ' ' + y + ' Q ' + (x + 4.5) + ' ' + (y - 5) + ' ' + (x + 6) + ' ' + y + '" stroke="#5fae6a" stroke-width="1.5" fill="none"/>'; }
        else if (hash === 2) { s += '<ellipse cx="' + (x + 4) + '" cy="' + (y + 1) + '" rx="3" ry="2" fill="#9aa0a8" opacity=".5"/>'; }
      }
    }
    // 怪（该章未通关 → 显示；通关 → ✓）
    var mx = pad + layout.monster[0] * cell + cell / 2, my = pad + layout.monster[1] * cell + cell / 2;
    var mr = big ? 13 : 8;
    if (m.done) { s += '<g transform="translate(' + mx + ',' + my + ')"><circle r="' + (mr + 1) + '" fill="none" stroke="#e0a93b" stroke-width="2.4"/><path d="M -5 0 L -1 5 L 6 -5" stroke="#e0a93b" stroke-width="3" fill="none" stroke-linecap="round"/><text y="' + (mr + 12) + '" text-anchor="middle" font-size="' + (big ? 8 : 6.5) + '" fill="#e0a93b">已化解</text></g>'; }
    else { s += '<g transform="translate(' + mx + ',' + my + ')"><circle r="' + mr + '" fill="#e2607a"/><circle cx="' + (-mr * 0.38) + '" cy="' + (-mr * 0.25) + '" r="' + (mr * 0.2) + '" fill="#fff"/><circle cx="' + (mr * 0.38) + '" cy="' + (-mr * 0.25) + '" r="' + (mr * 0.2) + '" fill="#fff"/><path d="M ' + (-mr * 0.5) + ' ' + (mr * 0.4) + ' Q 0 ' + (mr * 0.75) + ' ' + (mr * 0.5) + ' ' + (mr * 0.4) + '" stroke="#fff" stroke-width="1.6" fill="none"/><text y="' + (mr + 12) + '" text-anchor="middle" font-size="' + (big ? 8 : 6) + '" fill="#e2607a">本章误区</text></g>'; }
    // 盲盒
    var bx = pad + layout.blind[0] * cell + cell / 2, by = pad + layout.blind[1] * cell + cell / 2;
    var opened = !!BLIND_OPEN[curCh];
    var br = big ? 13 : 9;
    if (opened) { s += '<g transform="translate(' + bx + ',' + by + ')"><circle r="' + br + '" fill="none" stroke="#e0a93b" stroke-width="2" opacity=".8"/><text y="' + (br * 0.4) + '" text-anchor="middle" font-size="' + (big ? 15 : 10) + '">🎉</text></g>'; }
    else { s += '<g class="tbb-blind" transform="translate(' + bx + ',' + by + ')" style="cursor:pointer"><animateTransform attributeName="transform" type="translate" values="' + bx + ' ' + by + ';' + bx + ' ' + (by - 4) + ';' + bx + ' ' + by + '" dur="2.2s" repeatCount="indefinite"/><rect x="' + (-br) + '" y="' + (-br + 2) + '" width="' + (br * 2) + '" height="' + (br * 1.55) + '" rx="4" fill="#e0a93b"/><rect x="' + (-br) + '" y="' + (-br - 2) + '" width="' + (br * 2) + '" height="' + (br * 0.55) + '" rx="3" fill="#f5c35c"/><path d="M ' + (-br * 0.55) + ' ' + (-br - 2) + ' L ' + (br * 0.55) + ' ' + (-br - 2) + ' L 0 ' + (-br - 8) + ' Z" fill="#e07a3b"/><text y="' + (br * 1.4 + 10) + '" text-anchor="middle" font-size="' + (big ? 8 : 5.5) + '" fill="#e0a93b">考研盲盒</text></g>'; }
    // 楼梯
    var sx = pad + layout.stairs[0] * cell + cell / 2, sy = pad + layout.stairs[1] * cell + cell / 2;
    var canUp = m.done;
    var sr = big ? 17 : 12;
    s += '<g transform="translate(' + sx + ',' + sy + ')"><rect x="' + (-sr) + '" y="' + (-sr + 4) + '" width="' + (sr * 2) + '" height="' + (sr * 1.6) + '" rx="8" fill="' + (canUp ? '#9b8bff' : '#b9b3c8') + '" opacity="' + (canUp ? '.95' : '.5') + '"/><text y="' + (sr * 0.35) + '" text-anchor="middle" font-size="' + (big ? 20 : 14) + '" fill="#fff">' + (canUp ? '⬆' : '🔒') + '</text></g>';
    // 攀登者（小人，按 big 缩放）
    var hx = pad + layout.hero[0] * cell + cell / 2, hy = pad + layout.hero[1] * cell + cell / 2;
    var sc = big ? 1.6 : 1; // 大图模式小人放大 1.6 倍
    var skin = '#f5d0a8', dark = '#5a3a24';
    var gender = (window.HERO_GENDER === 'f') ? 'f' : 'm';
    var shirt = (gender === 'f') ? '#f06a8a' : '#5b6cf0';
    s += '<g transform="translate(' + hx + ',' + hy + ') scale(' + sc + ')"><ellipse cy="9.5" rx="7" ry="2.2" fill="rgba(0,0,0,.15)"/><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.2;0 0" dur="2s" repeatCount="indefinite"/>';
    if (gender === 'f') {
      s += '<path d="M -5.2 -3.6 Q -6 -8.6 0 -8.8 Q 6 -8.6 5.2 -3.6 Q 6.4 -4.6 5.8 -6.2 Q 5.5 -8.2 3.6 -9 Q 1.6 -9.4 0 -8.8 Q -1.6 -9.4 -3.6 -9 Q -5.5 -8.2 -5.8 -6.2 Q -6.4 -4.6 -5.2 -3.6 Z" fill="#7a4a2e"/><path d="M -5.6 -2 Q -8 -1 -8.4 3 Q -8.6 7 -6.2 8.4 Q -5 9 -4.4 7.6 Q -3.8 5.8 -4.4 2.6 Z" fill="#7a4a2e"/><path d="M 5.6 -2 Q 8 -1 8.4 3 Q 8.6 7 6.2 8.4 Q 5 9 4.4 7.6 Q 3.8 5.8 4.4 2.6 Z" fill="#7a4a2e"/><circle cx="5.8" cy="-6.4" r="2.3" fill="#ff7a9a"/><circle cx="6.4" cy="-5.8" r="2.3" fill="#ff9ab0"/>';
    } else {
      s += '<path d="M -5.4 -3 Q -6.6 -8.4 0 -8.6 Q 6.6 -8.4 5.4 -3 Q 4.8 -6 0 -6.2 Q -4.8 -6 -5.4 -3 Z" fill="#5a3a24"/>';
    }
    s += '<circle r="5.4" fill="' + skin + '"/><circle cx="-2.1" cy="-0.8" r="1" fill="' + dark + '"/><circle cx="2.1" cy="-0.8" r="1" fill="' + dark + '"/><path d="M -1.6 1.6 Q 0 3.2 1.6 1.6" stroke="' + dark + '" stroke-width="1" fill="none" stroke-linecap="round"/>';
    s += '<rect x="-5" y="4.6" width="10" height="6.4" rx="3" fill="' + shirt + '"/><rect x="-8.2" y="5.2" width="3.4" height="4.6" rx="1.7" fill="' + shirt + '"/><rect x="4.8" y="5.2" width="3.4" height="4.6" rx="1.7" fill="' + shirt + '"/>';
    if (gender === 'f') { s += '<path d="M -5.4 10.4 L 5.4 10.4 L 3.6 15.4 L -3.6 15.4 Z" fill="#8a4a6a"/>'; }
    else { s += '<rect x="-4.6" y="10.4" width="3.8" height="5" rx="1.8" fill="#4a4a6a"/><rect x="0.8" y="10.4" width="3.8" height="5" rx="1.8" fill="#4a4a6a"/>'; }
    s += '</g></g>';
    return s;
  }

  /* ---------- 渲染主面板 ---------- */
  var root = null, lastStudySig = '';
  function studySig() { var s = readStudy(); return JSON.stringify({ m: s.mastery || {}, e: s.energy, l: s.level, k: s.streak, g: s.todayGain }); }
  // 攀登者阶段（能量=经验值；"攀登者"=正在攀登知识之塔的你）
  var HERO_STAGES = [
    { at: 0, name: '启程攀登者', icon: '🧑\u200d🎓' }, { at: 20, name: '求索攀登者', icon: '🔭' },
    { at: 40, name: '笃行攀登者', icon: '🧗' }, { at: 60, name: '破云攀登者', icon: '🌤️' },
    { at: 80, name: '登顶攀登者', icon: '⛰️' }, { at: 100, name: '传奇攀登者', icon: '🌟' }
  ];
  function heroStageFor(e) { var c = HERO_STAGES[0]; for (var i = 0; i < HERO_STAGES.length; i++) if (e >= HERO_STAGES[i].at) c = HERO_STAGES[i]; return c; }
  function render() {
    if (!root) return;
    var curWorld = CFG.worldOf[curCh], W = WORLDS[curWorld];
    var doneCnt = 0; for (var d = 1; d <= CFG.total; d++) { if (mastery(d).done) doneCnt++; }
    var st = readStudy(), energy = st.energy || 0, lv = st.level || 1, streak = st.streak || 0;
    var hs = heroStageFor(energy), xp = Math.round(energy % 100);
    var h = '<div class="tb-head">🏰 知识之塔<button class="tbtn" id="tbRelic">📜 手迹 ' + Object.keys(RELICS).length + '/' + CFG.total + '</button></div>';
    // 攀登者等级条（能量=经验：数据来自能量柱引擎 study_v1，同一套叙事）
    h += '<div class="tb-hero"><div class="th-ava">' + hs.icon + '</div><div class="th-info">'
      + '<div class="th-name">' + hs.name + ' <span class="th-lv">Lv.' + lv + '</span>' + (streak >= 2 ? ' <span class="th-streak">🔥连击 ' + streak + ' 天</span>' : '') + '</div>'
      + '<div class="th-bar"><i style="width:' + xp + '%"></i></div>'
      + '<div class="th-xp">经验 ' + xp + '/100 · 做题自动积累</div></div></div>';
    h += '<div class="tb-progress" title="章节掌握度 ≥60% 即点亮">已点亮 <b>' + doneCnt + '</b>/' + CFG.total + ' 层 · 做题自动点亮，无需操作 <button class="tbtn tb-q" id="tbHelpBtn" title="这是什么？">?</button></div>';
    h += '<div class="tb-tower">';
    for (var ch = 1; ch <= CFG.total; ch++) {
      var m = mastery(ch), wd = WORLDS[CFG.worldOf[ch]];
      var cls = 'floor' + (m.done ? ' done' : '') + (m.rate > 0 ? ' lit' : '') + (ch === curCh ? ' on' : '');
      var stat = m.done ? '✓ 通关' : (m.rate > 0 ? Math.round(m.rate * 100) + '%' : '🔒');
      h += '<div class="' + cls + '" data-ch="' + ch + '"><span class="fno">' + ch + '</span><span class="fname">' + CFG.chNames[ch] + '</span><span class="fstat">' + stat + '</span></div>';
    }
    h += '</div>';
    // 当前层地图 + 该章世界名 + 放大按钮
    h += '<div class="tb-map-wrap"><div style="font-size:11px;color:var(--mut,#7a7785);margin:2px 0 5px;display:flex;align-items:center">第 ' + curCh + ' 章 · ' + CFG.chNames[curCh] + '（' + W.name + '）—— 掌握度 ' + Math.round(mastery(curCh).rate * 100) + '%<button class="tbtn tb-zoom" id="tbZoom" title="放大查看地图">⛶ 放大</button></div>';
    h += '<svg class="tb-map" viewBox="0 0 ' + (PAD * 2 + COLS * CELL) + ' ' + (PAD * 2 + ROWS * CELL) + '" xmlns="http://www.w3.org/2000/svg">' + mapSVG(genLayout(curWorld), mastery(curCh)) + '</svg></div>';
    root.innerHTML = h;
    // 绑定
    root.querySelectorAll('.floor').forEach(function (el) { el.addEventListener('click', function () { curCh = +el.dataset.ch; render(); }); });
    var b = root.querySelector('.tbb-blind'); if (b) b.addEventListener('click', openBlind);
    document.getElementById('tbRelic').addEventListener('click', showRelics);
    var hb = document.getElementById('tbHelpBtn'); if (hb) hb.addEventListener('click', showHelp);
    var zm = document.getElementById('tbZoom'); if (zm) zm.addEventListener('click', openBigMap);
  }
  /* 大图模式：全屏放大地图（格子 52px，27 寸屏也能看清） */
  function openBigMap() {
    var box = document.getElementById('tbbig');
    var W = WORLDS[CFG.worldOf[curCh]];
    var layout = genLayout(CFG.worldOf[curCh], true); // 大图用 5×6 紧凑网格
    var svg = document.getElementById('tbbigMap');
    svg.innerHTML = '';
    var wpx = 24 * 2 + layout.cols * 52, hpx = 24 * 2 + layout.rows * 52;
    svg.setAttribute('viewBox', '0 0 ' + wpx + ' ' + hpx);
    svg.innerHTML = mapSVG(layout, mastery(curCh), true);
    // 大图里盲盒也可点
    var bb = svg.querySelector('.tbb-blind'); if (bb) bb.addEventListener('click', function () { closeBigMap(); openBlind(); });
    document.getElementById('tbbigTitle').textContent = '第 ' + curCh + ' 章 · ' + CFG.chNames[curCh] + '（' + W.name + '）';
    box.classList.add('open');
  }
  function closeBigMap() { document.getElementById('tbbig').classList.remove('open'); }

  /* ---------- 考研盲盒 ---------- */
  function pickKaoyan(ch) {
    if (!window.EXAM_QUESTIONS || !window.EXAM_QUESTIONS.length) return null;
    // 优先级：考研真题(kaoyan) > 精选(jingxuan) > 任何选择题；都要单选 mc
    var pool = window.EXAM_QUESTIONS.filter(function (q) { return (q.src === 'kaoyan' || q.src === 'jingxuan') && q.ch === ch && q.type === 'mc' && q.options && q.options.length >= 2; });
    if (!pool.length) pool = window.EXAM_QUESTIONS.filter(function (q) { return q.src === 'kaoyan' && q.type === 'mc' && q.options; });
    if (!pool.length) pool = window.EXAM_QUESTIONS.filter(function (q) { return q.type === 'mc' && q.options && q.options.length >= 2; });
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function openBlind() {
    if (BLIND_OPEN[curCh]) { toast('这一章的盲盒你已经开过啦 🎉'); return; }
    var q = pickKaoyan(curCh); if (!q) { toast('这一章暂时没有考研题，换个章节试试'); return; }
    var box = document.getElementById('tbblind');
    var srcLabel = (q.src === 'kaoyan') ? '考研真题' : (q.src === 'jingxuan' ? '考研精选' : '章节精题');
    document.getElementById('bbStem').textContent = '🎁 考研盲盒 · 第' + curCh + '章 · ' + srcLabel;
    var qEl = document.getElementById('bbQ'); qEl.innerHTML = q.stem; katexify(qEl);
    var opts = document.getElementById('bbOpts'); opts.innerHTML = '';
    q.options.forEach(function (o, i) {
      var b = document.createElement('button');
      var span = document.createElement('span'); span.innerHTML = o[1]; katexify(span);
      b.textContent = o[0] + '. '; b.appendChild(span);
      b.addEventListener('click', function () {
        opts.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
        if (i === q.ansIdx || (q.ans && String(o[0]) === String(q.ans))) {
          b.classList.add('ok');
          var fb = document.getElementById('bbFb'); fb.innerHTML = '✓ 答对！' + (q.fb || ''); katexify(fb); fb.style.display = 'block';
          grantBlindPrize();
        } else {
          b.classList.add('no');
          var fb2 = document.getElementById('bbFb'); fb2.innerHTML = '再想想：' + (q.fb || ''); katexify(fb2); fb2.style.display = 'block';
        }
      });
      opts.appendChild(b);
    });
    document.getElementById('bbFb').style.display = 'none';
    document.getElementById('bbPrize').classList.remove('show');
    box.classList.add('open');
  }
  function grantBlindPrize(tries) {
    tries = tries || 0;
    if (tries > 6) { var p0 = PRIZES[1]; showPrize(p0); return; }
    var p = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    if ((p.type === 'title' && TITLES[curCh]) || (p.type === 'relic' && RELICS[curCh])) { grantBlindPrize(tries + 1); return; }
    if (p.type === 'title') { TITLES[curCh] = p.txt; LS.set('tb_titles', TITLES); syncTowerToCloud(); }
    if (p.type === 'relic') { RELICS[curCh] = { text: p.sub, t: Date.now() }; LS.set('tb_relics', RELICS); syncTowerToCloud(); }
    BLIND_OPEN[curCh] = 1; LS.set('tb_blind', BLIND_OPEN); syncTowerToCloud();
    showPrize(p);
  }
  function showPrize(p) {
    document.getElementById('bbPrize').innerHTML = '<div style="font-size:42px;margin:6px 0">' + p.icon + '</div><div style="font-weight:800;font-size:15px">' + p.txt + '</div><div style="color:var(--mut,#7a7785);font-size:12.5px;margin-top:3px">' + p.sub + '</div>';
    document.getElementById('bbPrize').classList.add('show');
    setTimeout(function () { document.getElementById('tbblind').classList.remove('open'); render(); }, 2600);
  }
  function closeBlind() { document.getElementById('tbblind').classList.remove('open'); }

  /* ---------- 老师互动 ---------- */
  function openDialog(ch) {
    var D = DIALS[ch]; if (!D) return;
    document.getElementById('tbTitle').textContent = '🧙 老师 · ' + CFG.chNames[ch] + '（' + D.title + '）';
    document.getElementById('tbRelicGain').classList.remove('show');
    document.getElementById('tbOpts').innerHTML = '';
    document.getElementById('tbchat').classList.add('open');
    playScene(D, 0);
  }
  function playScene(D, idx) {
    var sc = D.lines[idx];
    var textEl = document.getElementById('tbText'), optsEl = document.getElementById('tbOpts'), avaEl = document.getElementById('tbAva');
    optsEl.innerHTML = '';
    if (sc.who === 's') {
      avaEl.innerHTML = studentFace();
      textEl.textContent = '';
      sc.opts.forEach(function (o) {
        var b = document.createElement('button'); b.textContent = o.t;
        b.addEventListener('click', function () {
          if (dlgBusy) return; dlgBusy = true;
          avaEl.innerHTML = teacherFace(o.mood);
          optsEl.innerHTML = '';
          typeInto(textEl, o.reply, function () {
            dlgBusy = false;
            setTimeout(function () { finishDialog(D); }, 600);
          });
        });
        optsEl.appendChild(b);
      });
      return;
    }
    avaEl.innerHTML = teacherFace(sc.mood);
    typeInto(textEl, sc.text, function () {
      if (idx + 1 < D.lines.length) setTimeout(function () { playScene(D, idx + 1); }, 550);
      else finishDialog(D);
    });
  }
  function finishDialog(D) {
    if (Math.random() < 0.35) {
      var egg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
      setTimeout(function () { typeInto(document.getElementById('tbText'), egg); }, 500);
    }
    if (D.relic && !RELICS[curCh]) {
      RELICS[curCh] = { text: D.relic, t: Date.now() }; LS.set('tb_relics', RELICS); syncTowerToCloud();
      var rEl = document.getElementById('tbRelicGain');
      rEl.innerHTML = '📜 获得老师手迹：<b>' + D.relic + '</b><small style="display:block;color:var(--mut,#7a7785)">已收入手迹架</small>';
      rEl.classList.add('show');
    }
  }
  function typeInto(el, text, done) {
    if (dlgTimer) clearInterval(dlgTimer);
    el.textContent = ''; var i = 0;
    dlgTimer = setInterval(function () {
      i += 2; el.textContent = text.slice(0, i);
      if (i >= text.length) { clearInterval(dlgTimer); dlgTimer = null; if (done) done(); }
    }, 24);
  }
  function closeDialog() {
    document.getElementById('tbchat').classList.remove('open');
    if (dlgTimer) { clearInterval(dlgTimer); dlgTimer = null; }
    dlgBusy = false;
  }

  /* ---------- 手迹架 ---------- */
  function showRelics() {
    var box = document.getElementById('tbrelics');
    var L = document.getElementById('tbrelicList'); L.innerHTML = '';
    for (var ch = 1; ch <= CFG.total; ch++) {
      var r = RELICS[ch];
      var card = document.createElement('div');
      card.className = 'bb-card' + (r ? '' : '');
      card.style.cssText = 'padding:10px 12px;border-radius:11px;background:color-mix(in srgb,#e0a93b 9%,transparent);border:1px solid color-mix(in srgb,#e0a93b 30%,transparent);margin-bottom:8px;font-size:12.5px;line-height:1.6';
      card.innerHTML = r ? r.text + '<small style="display:block;color:var(--mut,#7a7785);margin-top:2px">第' + ch + '章 · ' + CFG.chNames[ch] + ' · 已收藏</small>'
        : '🔒 尚未获得第' + ch + '章的手迹……先通关这一层吧。<small style="display:block;color:var(--mut,#7a7785);margin-top:2px">' + CFG.chNames[ch] + ' · 未解锁</small>';
      L.appendChild(card);
    }
    box.classList.add('open');
  }
  function closeRelics() { document.getElementById('tbrelics').classList.remove('open'); }

  /* ---------- 常驻帮助（"?" 按钮） ---------- */
  function showHelp() {
    var box = document.getElementById('tbhelp');
    box.classList.add('open');
  }
  function closeHelp() { document.getElementById('tbhelp').classList.remove('open'); }

  /* ---------- 首访引导（3 步教学浮层） ---------- */
  var introSeen = false;
  try { introSeen = localStorage.getItem('tb_intro_seen2') === '1'; } catch (e) {}
  function buildIntroCard() {
    var card = document.getElementById('tiCard');
    if (!card) return;
    var steps = [
      { emoji: '🗝️', title: '传说，塔里困着一位老师', sub: '相传这册教材深处，藏着一座古老的「知识之塔」。多年前，一位老师为守护塔中的学识，被永远困在了塔顶——只有学会每一章的人，才能一层层点亮塔身，将他唤醒。' },
      { emoji: '⚡', title: '而你，就是那个攀登者', sub: '你不需要额外操作：在教材里「学完就练」、答对题目，对应层掌握度就会上升。达到 60%，整层点亮、尘封的难题被解开——塔在为你开路。' },
      { emoji: '🎁', title: '塔里藏着不少秘密', sub: '每层有一口「考研盲盒」，答对开盒有惊喜；每登上一层，塔顶会传来老师的声音；集齐他的手迹，传说就能拼出离开塔的路。' }
    ];
    var i = 0;
    function paint() {
      var st = steps[i];
      card.innerHTML = ''
        + '<div class="ti-emoji">' + st.emoji + '</div>'
        + '<div class="ti-title">' + st.title + '</div>'
        + '<div class="ti-sub">' + st.sub + '</div>'
        + '<div class="ti-demo">' + (i === 0
            ? '🏗️ <span>塔 = 你的<span style="color:var(--accent,#7c6cf0);font-weight:700">学习进度</span>，登顶之日 = 唤醒老师之时</span>'
            : i === 1
            ? '📈 <span>去任意章节<b>做几道题</b>，回来看塔：<b>紫色 = 塔在苏醒</b>，<b>绿色 ✓ = 整层点亮</b></span>'
            : '🎁 <span>每层 <b>🎁盲盒</b> 藏考研题 · <b>🗣️老师的声音</b> 登层后传来 · <b>📜手迹</b> 集齐有彩蛋</span>') + '</div>'
        + '<div class="ti-dots"><i class="' + (i === 0 ? 'on' : '') + '"></i><i class="' + (i === 1 ? 'on' : '') + '"></i><i class="' + (i === 2 ? 'on' : '') + '"></i></div>'
        + '<div class="ti-btns">'
        + (i < 2
            ? '<button class="ti-next">下一步 →</button>'
            : '<button class="ti-go">🗝️ 开始攀登</button>')
        + '<button class="ti-skip">跳过</button></div>';
      card.querySelector('.ti-skip').addEventListener('click', closeIntro);
      var next = card.querySelector('.ti-next'); if (next) next.addEventListener('click', function () { i++; paint(); });
      var go = card.querySelector('.ti-go'); if (go) go.addEventListener('click', function () {
        closeIntro();
        // 关闭引导后给个神秘的落地提示
        toast('塔在等你……去学一章，听它为你亮起的声音 ✨');
      });
    }
    document.getElementById('tbintro').classList.add('open');
    paint();
  }
  function closeIntro() {
    document.getElementById('tbintro').classList.remove('open');
    try { localStorage.setItem('tb_intro_seen2', '1'); } catch (e) {}
  }

  /* ---------- 通关检测（读 mastery 自动触发老师对话） ---------- */
  var dialogFired = {};
  function checkChapters() {
    for (var ch = 1; ch <= CFG.total; ch++) {
      var m = mastery(ch);
      if (m.done && !dialogFired[ch] && !DIALOG_DONE[ch] && DIALS[ch]) {
        dialogFired[ch] = 1; DIALOG_DONE[ch] = 1; LS.set('tb_dialog', DIALOG_DONE); syncTowerToCloud();
        if (ch === curCh || ch === firstUndone()) {
          curCh = ch; render();
          (function (c) { setTimeout(function () { openDialog(c); }, 900); })(ch);
        }
      }
    }
  }
  function firstUndone() {
    for (var ch = 1; ch <= CFG.total; ch++) { if (!mastery(ch).done) return ch; }
    return CFG.total;
  }

  /* ---------- 注入 DOM ---------- */
  function build() {
    var slot = document.getElementById('tower-slot');
    if (!slot) return;
    root = document.createElement('div');
    root.className = 'towerbox';
    root.id = 'towerbox';
    slot.appendChild(root);

    // 聊天窗 / 盲盒 / 手迹 / 帮助 / 引导 / toast（追加到 body 末尾）
    var frag = document.createElement('div');
    frag.innerHTML = ''
      + '<div class="tbchat" id="tbchat"><div class="tbc-head"><span id="tbTitle">🧙 老师</span><button class="x" id="tbClose">✕</button></div>'
      + '<div class="tbc-body"><div class="ava" id="tbAva"></div><div class="bubble"><span id="tbText"></span><span class="caret"></span></div></div>'
      + '<div class="opts" id="tbOpts"></div><div class="relic-gain" id="tbRelicGain"></div></div>'
      + '<div class="tbblind" id="tbblind"><div class="bb-card"><div class="bb-head"><span id="bbStem">🎁 考研盲盒</span><button class="x" id="bbClose">✕</button></div>'
      + '<div class="bb-q" id="bbQ"></div><div class="bb-opts" id="bbOpts"></div><div class="bb-fb" id="bbFb"></div><div class="bb-prize" id="bbPrize"></div></div></div>'
      + '<div class="tbblind" id="tbrelics"><div class="bb-card"><div class="bb-head"><span>📜 老师手迹 · 收集册</span><button class="x" id="tbrelicClose">✕</button></div><div id="tbrelicList"></div></div></div>'
      + '<div class="tb-help" id="tbhelp"><h3>🏰 知识之塔 · 这是什么？</h3>'
      + '<div class="th-row"><span class="ic">🗝️</span><span>传说这座塔困住了一位守护学识的老师。塔的每一层 = 教材的一章——你学得越深，点亮越多，他的声音就越清晰。</span></div>'
      + '<div class="th-row"><span class="ic">📈</span><span>在教材里「学完就练」、答对题目，对应章节的掌握度会上升；达到 60% 这一层点亮（✓ 绿），达到 80% 整层焕彩。</span></div>'
      + '<div class="th-row"><span class="ic">🎁</span><span>每层地图上有一个金盒子「考研盲盒」：点它抽一道本章的考研真题，答对就有惊喜奖励（称号/能量/手迹…）。</span></div>'
      + '<div class="th-row"><span class="ic">🧙</span><span>每点亮一层，老师会来和你聊两句——内容都来自本章的知识点。登顶后还能收集他的「手迹」金句。</span></div>'
      + '<div class="th-row"><span class="ic">📱</span><span>手机端：塔收进右上角，不影响阅读；点楼层号可在各章之间查看自己的进度。</span></div>'
      + '<button class="th-close" id="tbhelpClose">知道了</button>'
      + '<button class="th-replay" id="tbhelpReplay">↻ 再看一次开篇引导</button></div>'
      + '<div class="tb-intro" id="tbintro"><div class="ti-card" id="tiCard"></div></div>'
      + '<div class="tb-big" id="tbbig"><div class="big-card"><div class="big-head"><span id="tbbigTitle">地图</span><button class="x" id="tbbigClose">✕</button></div><svg id="tbbigMap" xmlns="http://www.w3.org/2000/svg"></svg><div class="big-tip">🎁 点击金盒子可抽考研盲盒 · ⬆ 楼梯点亮后可登层</div></div></div>'
      + '<div class="tbtoast" id="tbtoast"></div>';
    while (frag.firstChild) document.body.appendChild(frag.firstChild);

    document.getElementById('tbClose').addEventListener('click', closeDialog);
    document.getElementById('bbClose').addEventListener('click', closeBlind);
    document.getElementById('tbrelicClose').addEventListener('click', closeRelics);
    document.getElementById('tbhelpClose').addEventListener('click', closeHelp);
    document.getElementById('tbhelpReplay').addEventListener('click', function () { closeHelp(); try { localStorage.removeItem('tb_intro_seen2'); } catch (e) {} setTimeout(buildIntroCard, 300); });
    document.getElementById('tbhelp').addEventListener('click', function (e) { if (e.target === this) closeHelp(); });
    document.getElementById('tbintro').addEventListener('click', function (e) { if (e.target === this) closeIntro(); });
    document.getElementById('tbbigClose').addEventListener('click', closeBigMap);
    document.getElementById('tbbig').addEventListener('click', function (e) { if (e.target === this) closeBigMap(); });
    ['tbblind', 'tbrelics'].forEach(function (id) {
      document.getElementById(id).addEventListener('click', function (e) { if (e.target === this) this.classList.remove('open'); });
    });

    pullTowerFromCloud();   // 云端塔数据回填（换设备后）
    render();
    checkChapters();
    // 轮询 study_v1 变化（同页 localStorage 不触发 storage 事件，用轻量轮询）
    setInterval(function () {
      var sig = studySig();
      if (sig !== lastStudySig) { lastStudySig = sig; render(); checkChapters(); }
    }, 1500);
    lastStudySig = studySig();
    // 首访引导（只弹一次）
    if (!introSeen) { setTimeout(buildIntroCard, 700); }
    else {
      // 初始彩蛋（10% 概率一句悄悄话）
      if (Math.random() < 0.1) {
        setTimeout(function () { toast(EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)]); }, 3000);
      }
    }
  }
  /* 对外 API：供教材其他模块（如章节测试）联动塔 */
  window.TowerGame = {
    // 章节测试完成：刷新塔状态，若该章掌握度达标则提示
    onChapterTest: function (ch, right, total) {
      lastStudySig = '';   // 强制下次轮询刷新
      render(); checkChapters();
      var m = mastery(ch);
      if (m.done) {
        setTimeout(function () {
          toast('🎉 第' + ch + '章「' + CFG.chNames[ch] + '」掌握度 ' + Math.round(m.rate * 100) + '% · 塔的这一层点亮了！');
        }, 400);
      } else {
        setTimeout(function () {
          toast('📈 第' + ch + '章掌握度 ' + Math.round(m.rate * 100) + '% · 再做几题就能点亮塔层');
        }, 400);
      }
    }
  };

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', build); }
  else { build(); }
})();
