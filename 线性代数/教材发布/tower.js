/* ============================================================
   知识之塔 · 教材嵌入组件（tower.js）
   - 挂载到 #tower-slot，每章一层（高数 13 层 / 线代 5 层）
   - 读 localStorage('study_v1').mastery[ch] 正确率驱动点亮
   - 盲盒：从 window.EXAM_QUESTIONS 抽 src==="kaoyan" 考研题（用教材 KaTeX 渲染）
   - 每章差异化老师互动（DIALOGS）
   - 彩蛋：随机悄悄话 / 称号 / 隐藏留言
   零依赖、IIFE 隔离，不与教材其他脚本冲突.
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

  /* ---------- 颜色工具：让每章世界在配色上也与众不同 ---------- */
  function hexToRgb(hex) {
    var h = (hex || '#000000').replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function rgbToHex(r, g, b) {
    function c(x) { var s = Math.max(0, Math.min(255, Math.round(x))).toString(16); return s.length < 2 ? '0' + s : s; }
    return '#' + c(r) + c(g) + c(b);
  }
  function hueRotate(hex, deg) {
    if (!hex || hex === 'transparent' || hex[0] !== '#') return hex;
    var rgb = hexToRgb(hex), r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, h = 0, s = 0, l = (max + min) / 2;
    if (d !== 0) {
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d) % 6; else if (max === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60; if (h < 0) h += 360;
    }
    h = (h + deg) % 360; if (h < 0) h += 360;
    var c2 = (1 - Math.abs(2 * l - 1)) * s, x = c2 * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c2 / 2, rr = 0, gg = 0, bb = 0;
    if (h < 60) { rr = c2; gg = x; } else if (h < 120) { rr = x; gg = c2; } else if (h < 180) { gg = c2; bb = x; }
    else if (h < 240) { gg = x; bb = c2; } else if (h < 300) { rr = x; bb = c2; } else { rr = c2; bb = x; }
    return rgbToHex((rr + m) * 255, (gg + m) * 255, (bb + m) * 255);
  }
  function shade(hex, amt) {
    if (!hex || hex[0] !== '#') return hex;
    var rgb = hexToRgb(hex);
    return rgbToHex(rgb[0] + amt * 255, rgb[1] + amt * 255, rgb[2] + amt * 255);
  }
  /* 每章装饰子类型：同族（林/谷/海/星/峰）不同章用不同植被/地貌，视觉上明显区分 */
  var DECOR_VARS = {
    forest: ['cherry', 'pine', 'bamboo', 'maple', 'ginkgo'],
    canyon: ['mesa', 'dune', 'arch', 'spire'],
    sea:    ['coral', 'kelp', 'ice', 'shell', 'reef'],
    star:   ['nebula', 'comet', 'planet', 'galaxy'],
    peak:   ['snow', 'icefield', 'aurora', 'crag']
  };

  /* ---------- 每章独立世界（差异化世界地图核心） ---------- */
  /* 确定性伪随机：同一 ch 永远得到同一张地图，刷新不跳变 */
  function makeRng(seed) {
    var a = (seed >>> 0) || 1;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /* 章节世界名后缀：同一地形族（林/谷/海/星/峰）每章有独立后缀，保证每章世界名不同 */
  var WORLD_SUFFIX = ['·初境', '·深境', '·秘境', '·幻境', '·绝境', '·圣境', '·灵境', '·幽境', '·炎境', '·霜境', '·空境', '·星境', '·终境'];
  /* 线性代数专属世界名（覆盖 WORLDS 的高数命名） */
  var LINALG_NAMES = { forest: '矩阵之林', canyon: '运算峡谷', sea: '向量之海', star: '特征星空', peak: '二次雪峰' };

  /* ---------- 迷雾盲盒内容库：不只有题，还有故事、对话、冷知识 ----------
     按 (ch, idx) 命中；未命中时回退到 EXAM_QUESTIONS 做题.                */
  var BLIND_STORIES = [
    /* ===== 高等数学 · 第1章 函数 ===== */
    { ch: 1, type: 'story', icon: '📜', title: '函数符号的诞生', content: '1694 年，瑞士数学家约翰·伯努利首次用“x 的函数”描述曲线上的点.后来他的学生欧拉在 1734 年正式写下 f(x)——这个小小的括号，把千变万化的对应关系装进了一个简洁的符号.今天你看 f(x)=sin x，其实是在和欧拉“握手”.' },
    { ch: 1, type: 'dialogue', icon: '💬', title: '狄利克雷的“怪函数”', content: '学生：老师，函数能不能处处不连续？<br>狄利克雷：能.定义 D(x)=1（x 为有理数），D(x)=0（x 为无理数）.你画不出图，但它实实在在是个函数.<br>学生：那它到底有多“怪”？<br>狄利克雷：怪到黎曼积分都拿它没办法——这催生了更强大的勒贝格积分.' },
    { ch: 1, type: 'trivia', icon: '🎲', title: '冷知识：最早的学生编号', content: '函数概念最早并非“公式”，而是“曲线”.17 世纪人们觉得，只有能用代数式写出的才算函数.直到 1837 年，狄利克雷才给出现代定义：任意对应法则都是函数.也就是说，你今天的“y 是 x 的函数”，其实是 19 世纪才定型.' },

    /* ===== 第2章 极限与连续 ===== */
    { ch: 2, type: 'story', icon: '🏃', title: '芝诺的乌龟', content: '古希腊哲学家芝诺说：阿喀琉斯永远追不上乌龟——因为他跑到乌龟起点时，乌龟又向前爬了一小段.这个悖论困扰了人类近两千年，直到极限语言出现：无穷多个越来越小的段，其“总和”可以是有限的.极限，让人类第一次真正“追上”了乌龟.' },
    { ch: 2, type: 'dialogue', icon: '💬', title: '刘徽割圆', content: '刘徽：圆内接正六边形不像圆，正十二边形稍像，正九十六边形就更像了.<br>学生：那要画多少边形才“是”圆？<br>刘徽：不必画到无穷.只要边数足够多，多边形面积与圆面积的差可以小于你任意指定的小数——这就叫“割之弥细，所失弥少”.' },
    { ch: 2, type: 'trivia', icon: '🌊', title: '冷知识：ε 怎么念', content: '极限定义里那个 ε（epsilon），在希腊语里只是字母“e”.魏尔斯特拉斯用它来代表“任意小的正数”，于是 ε-δ 语言成了分析学的门槛.下次写 ε>0 时，可以默念：这是“误差”error 的首字母！' },

    /* ===== 第3章 一元函数微分学 ===== */
    { ch: 3, type: 'story', icon: '🍎', title: '牛顿的“流数术”', content: '1665 年，剑桥大学因瘟疫停课，22 岁的牛顿回到乡下.他在自家果园里思考：行星运动的瞬时方向如何描述？于是他发明了“流数术”——用无穷小量的比值研究变化率.这就是导数的前身.苹果不一定砸中他，但变化率确实“砸”开了近代科学.' },
    { ch: 3, type: 'dialogue', icon: '💬', title: '莱布尼茨的 d', content: '莱布尼茨：我用 dy/dx 表示 y 对 x 的变化率，像分数一样好看.<br>牛顿：我用“点”表示流数，ẏ，更简洁.<br>学生：为什么今天我们用 dy/dx？<br>莱布尼茨：因为分数形式能“假装”约分，做链式法则时特别直观——虽然它其实不是普通分数.' },
    { ch: 3, type: 'trivia', icon: '⚡', title: '冷知识：导数与速度', content: '汽车仪表盘上的“瞬时速度”，本质上就是位移函数的导数.GPS 每秒测一次位置，用相邻时刻位置差除以时间差，就得到近似的瞬时速度.所以，你每次开车看速度表，都在用微积分.' },

    /* ===== 第4章 微分学的应用 ===== */
    { ch: 4, type: 'story', icon: '📈', title: '洛必达买了条法则', content: '1696 年，洛必达出版了欧洲第一本微积分教材.书中有一条求 0/0 型极限的法则，被命名为“洛必达法则”.但历史上，这条定理其实是瑞士数学家约翰·伯努利告诉洛必达的——洛必达付了钱买下了署名权.所以，这条法则可以说是“买”来的.' },
    { ch: 4, type: 'dialogue', icon: '💬', title: '函数也想知道自己最值', content: '函数 f(x)：我到底有没有最大值？<br>导数 f\'(x)：先让我等于零，找驻点看看.<br>二阶导 f\'\'(x)：驻点处我小于零，说明那是“山顶”，最大值！<br>函数：谢谢，我终于知道自己“巅峰”在哪了.' },
    { ch: 4, type: 'trivia', icon: '🎯', title: '冷知识：凸函数与橡皮筋', content: '如果函数图像是“碗”形的，就叫凸函数.一个直观判据：在图像上任意两点连一条线段，线段都在图像上方.这就像在碗口拉一根橡皮筋，橡皮筋不会掉进碗里.凸优化能派上大用场，因为“碗底”就是全局最小值.' },

    /* ===== 第5章 一元函数积分学 ===== */
    { ch: 5, type: 'story', icon: '📐', title: '黎曼的“切蛋糕”', content: '1854 年，德国数学家黎曼提出：求曲边梯形面积，可以把区间切成很多小段，每段用矩形近似，然后让段数趋于无穷.这种“切蛋糕”的思想，就是黎曼积分.只要函数不是太离谱，切得足够细，矩形总面积就会逼近真正的面积.' },
    { ch: 5, type: 'dialogue', icon: '💬', title: '不定积分找“爸爸”', content: '学生：∫ 2x dx = x² + C，为什么要加 C？<br>老师：因为导数为 2x 的函数不止一个，x²+1、x²-5、x²+π 都行.它们都是 2x 的“原函数爸爸”，彼此相差一个常数.<br>学生：所以不定积分是一族函数？<br>老师：对，C 就是这个家族的“族徽”.' },
    { ch: 5, type: 'trivia', icon: '🥧', title: '冷知识：积分符号 ∫', content: '积分符号 ∫ 是莱布尼茨把拉丁文 summa（求和）的首字母 S 拉长写的.所以它本质上就是“求和”——只不过是无穷多项的求和.记住：∫ 就是拉长的 S，表示“把无穷小量加起来”.' },

    /* ===== 第6章 积分学的应用 ===== */
    { ch: 6, type: 'story', icon: '🏛️', title: '阿基米德的浴缸', content: '阿基米德发现，不规则物体的体积可以通过排出的水量来测量.后来积分学把这一思想数学化：旋转体的体积可以看成无数个薄圆盘的体积之和.所以，当你下次看到花瓶，可以想象它是由无数个“薄片”堆出来的.' },
    { ch: 6, type: 'dialogue', icon: '💬', title: '曲线的弧长', content: '学生：曲线弯弯扭扭，怎么量长度？<br>老师：把它切成很多小段，每段近似看成直线.<br>学生：段数无限多时呢？<br>老师：小段长度的总和就是弧长.用积分写出来就是 ∫√(1+(y\')²) dx.简单说：把弯的当成很多直的拼起来.' },
    { ch: 6, type: 'trivia', icon: '⚖️', title: '冷知识：重心与积分', content: '古代建筑师用杠杆找石块的重心，现代工程师用积分计算不规则物体的质心.飞机机翼、汽车外壳的重心设计，都要靠多重积分.一块薄板的重心，就是“各点坐标按面积加权平均”的结果.' },

    /* ===== 第7章 常微分方程 ===== */
    { ch: 7, type: 'story', icon: '🦠', title: '马尔萨斯的人口预言', content: '1798 年，马尔萨斯提出：人口增长率与现有人口成正比.用微分方程写就是 dP/dt = kP，解得 P(t)=P₀e^(kt)——指数增长.虽然现实中资源有限，人口不会永远指数爆炸，但这个模型开启了用微分方程研究变化的先河.' },
    { ch: 7, type: 'dialogue', icon: '💬', title: '放射性同位素的告别', content: '碳-14：我的数量每过 5730 年就会减半.<br>考古学家：所以你身边的碳-14 剩多少，就能推算文物年代.<br>碳-14：对，这就是放射性碳定年法.我的衰变满足 dN/dt = -λN，解是指数衰减 N(t)=N₀e^(-λt).<br>考古学家：谢谢你，让我能“读”出时间.' },
    { ch: 7, type: 'trivia', icon: '🚀', title: '冷知识：微分方程与火箭', content: '火箭推力、电路振荡、弹簧振动、传染病传播……这些看似无关的现象，往往能用同一类微分方程描述.微分方程是连接“局部变化规律”与“整体演化结果”的桥梁，被称为“自然界的通用语言”.' },

    /* ===== 第8章 向量代数与空间解析几何 ===== */
    { ch: 8, type: 'story', icon: '📍', title: '笛卡尔的坐标梦', content: '传说笛卡尔生病卧床，看到天花板上一只蜘蛛.他想：要描述蜘蛛的位置，只需要三个数（到两面墙和地面的距离）.于是直角坐标系诞生了.今天三维空间里的每个点 (x,y,z)，都延续着那只蜘蛛的灵感.' },
    { ch: 8, type: 'dialogue', icon: '💬', title: '点积与叉积的对话', content: '点积 a·b：我衡量两个向量“同向”的程度，结果是个数.<br>叉积 a×b：我衡量两个向量“张成”的程度，结果是个向量，方向垂直于你们俩.<br>学生：那我该用哪个？<br>点积：算夹角、投影找我.<br>叉积：算面积、法向量找我.' },
    { ch: 8, type: 'trivia', icon: '🧊', title: '冷知识：为什么右手系', content: '三维坐标系有“左手系”和“右手系”.我们常用右手系，是因为叉积方向用右手定则最自然.如果哪天发现物理定律在左手系里不一样，那说明你发现了新的对称性破缺——这可是诺贝尔奖级别的线索.' },

    /* ===== 第9章 多元函数微分学 ===== */
    { ch: 9, type: 'story', icon: '⛰️', title: '山地的坡度', content: '想象你站在山坡上，朝东走和朝北走，坡度可能完全不同.多元函数的偏导数，就是分别考察沿每个坐标轴方向的变化率.而梯度，则把所有方向的信息合成一个向量，指向函数增长最快的方向.登山时，梯度方向就是最陡的上山路.' },
    { ch: 9, type: 'dialogue', icon: '💬', title: '全微分的自我介绍', content: '全微分 dz：我是函数值的“小变化”.<br>偏导数 ∂z/∂x、∂z/∂y：我是沿坐标轴的局部变化率.<br>全微分 dz = (∂z/∂x)dx + (∂z/∂y)dy.<br>学生：所以全微分就是“把各个方向的小贡献加起来”？<br>全微分：没错，线性近似就是这么简单.' },
    { ch: 9, type: 'trivia', icon: '🌡️', title: '冷知识：梯度下降', content: '人工智能训练神经网络时，最常用的优化算法叫“梯度下降”：沿着损失函数梯度的反方向一小步一小步走，就能逐渐逼近最小值.你每天刷到的推荐算法、语音识别、图像生成，背后都在默默求偏导数.' },

    /* ===== 第10章 重积分 ===== */
    { ch: 10, type: 'story', icon: '🧱', title: '薄板的质量', content: '一块薄板各处的密度不同，怎么求总质量？黎曼的想法是：把薄板切成很多小方块，每小块密度近似不变，质量≈密度×面积，然后全部加起来.让方块越来越小，就得到二重积分 ∬ρ(x,y)dσ.切得越细，近似越真.' },
    { ch: 10, type: 'dialogue', icon: '💬', title: '极坐标登场', content: '直角坐标：圆域积分我算起来很麻烦.<br>极坐标：让我来！x=r cosθ，y=r sinθ，面积元变成 r dr dθ.<br>学生：为什么多一个 r？<br>极坐标：因为同样 dθ 和 dr，离原点越远，“小块”面积越大.r 就是面积拉伸的倍数.' },
    { ch: 10, type: 'trivia', icon: '📊', title: '冷知识：二重积分与概率', content: '二维正态分布的概率密度，图像像一座“钟形山”.求某个区域的概率，就是求这座山在该区域上方的体积——正是二重积分.统计学里很多检验量的分布，都是这样算出来的.' },

    /* ===== 第11章 曲线积分 ===== */
    { ch: 11, type: 'story', icon: '🌀', title: '格林的圈地法', content: '19 世纪英国数学家格林发现：沿着一块区域边界走一圈的“环量”，等于区域内部某种“涡旋”的总和.这就是格林公式.它把边界上的曲线积分和区域上的二重积分联系起来——“沿边转一圈”就知道“里面转多猛”.' },
    { ch: 11, type: 'dialogue', icon: '💬', title: '保守场的捷径', content: '力场 F：沿不同路径做功可能不同.<br>保守场：不，只要我是保守场，做功只与起点终点有关，与路径无关.<br>学生：怎么判断？<br>保守场：看我的旋度是否为零，或者是否存在势函数 φ 使得 F=∇φ.有势函数，我就“懒”得绕弯.' },
    { ch: 11, type: 'trivia', icon: '🌪️', title: '冷知识：龙卷风与旋度', content: '向量场的旋度描述“旋转”强弱.气象学家用旋度分析气旋和反气旋.如果一个区域的旋度不为零，就像水里有个漩涡——曲线积分绕它一圈，会得到非零环量.' },

    /* ===== 第12章 曲面积分 ===== */
    { ch: 12, type: 'story', icon: '🌊', title: '高斯的高斯定理', content: '高斯发现：通过一个封闭曲面的“通量”，等于曲面内部“源”的总量.这就是高斯公式（散度定理）.电场、磁场、流体力学中到处都有它的身影.可以说，高斯公式是“看外表通量，知内部总量”的数学魔法.' },
    { ch: 12, type: 'dialogue', icon: '💬', title: '通量与流量', content: '水速场 v：我每秒穿过某张曲面多少水？<br>曲面积分 ∬v·n dS：我来算！把曲面切成小片，每片用点积 v·n 看“正对着”流过去多少，再求和.<br>学生：n 是什么？<br>曲面积分：曲面的单位法向量，表示“朝外指”的方向.' },
    { ch: 12, type: 'trivia', icon: '🔭', title: '冷知识：麦克斯韦方程组', content: '电磁学巅峰之作麦克斯韦方程组，其中两个方程正是用散度、旋度和曲面积分写成的.没有高斯公式和斯托克斯公式，19 世纪的物理学家就无法把电、磁、光统一起来.微积分，真的改变了世界.' },

    /* ===== 第13章 无穷级数 ===== */
    { ch: 13, type: 'story', icon: '🎵', title: '泰勒的无限多项式', content: '1715 年，英国数学家泰勒发现：很多光滑函数都能写成无穷个幂次项的和.这就是泰勒级数.它像一把“数学显微镜”，把函数在某点附近的 behavior 放大成多项式.计算器里的 sin、cos、e^x，很多都是用泰勒级数逼近算出来的.' },
    { ch: 13, type: 'dialogue', icon: '💬', title: '调和级数的自信', content: '调和级数 H = 1 + 1/2 + 1/3 + 1/4 + …：我每一项都在变小，总和一定收敛吧？<br>数学家：不，你的和其实会无限增大，只是增得很慢.<br>调和级数：有多慢？<br>数学家：前 n 项和约等于 ln n + γ，γ≈0.5772 叫欧拉常数.' },
    { ch: 13, type: 'trivia', icon: '♾️', title: '冷知识：π 的级数', content: '1665 年，苏格兰数学家格雷戈里发现：π/4 = 1 - 1/3 + 1/5 - 1/7 + ….把无穷多个分数交替相加，竟然能得到圆周率！这就是著名的莱布尼茨级数.无穷级数让“无限”变得可以计算.' },

    /* ===== 线性代数 · 第1章 行列式 ===== */
    { ch: 101, type: 'story', icon: '🧮', title: '莱布尼茨的“行列式”草图', content: '1693 年，莱布尼茨在研究线性方程组时，用指标排列描述解的结构——这被认为是行列式的雏形.后来范德蒙德、柯西等人不断完善，才有了今天 n 阶行列式的模样.行列式最神奇的地方：一个数就能告诉我们方程组是否有唯一解.' },
    { ch: 101, type: 'dialogue', icon: '💬', title: '行列式与面积', content: '二阶行列式：我的绝对值等于两个列向量张成的平行四边形面积.<br>三阶行列式：我的绝对值等于三个列向量张成的平行六面体体积.<br>学生：那 n 阶呢？<br>行列式：n 维“超体积”.所以行列式不只是“解方程的工具”，还是“体积的度量”.' },
    { ch: 101, type: 'trivia', icon: '🔀', title: '冷知识：逆序数与排列', content: '行列式展开中每一项的符号，由列标排列的逆序数决定.逆序数就是“大数排在小数前面”的次数.逆序数为偶数取正，奇数取负.所以算行列式，其实是在数“乱序”的奇偶性.' },

    /* ===== 第2章 矩阵及其运算 ===== */
    { ch: 102, type: 'story', icon: '📋', title: '凯莱与矩阵乘法', content: '1858 年，英国数学家凯莱发表《矩阵论备忘录》，首次系统研究矩阵.他发现矩阵乘法虽然看起来“别扭”——不满足交换律，但恰恰是这种非交换性，完美描述了线性变换的复合.今天，矩阵是人工智能、计算机图形学的基本语言.' },
    { ch: 102, type: 'dialogue', icon: '💬', title: 'AB 不等于 BA', content: '矩阵 A：我和 B 相乘，结果看“行乘列”.<br>矩阵 B：但 BA 的维度可能都不一样！<br>学生：为什么矩阵乘法不交换？<br>A：因为线性变换的先后顺序一般不能颠倒.先旋转再拉伸，和先拉伸再旋转，效果通常不同.' },
    { ch: 102, type: 'trivia', icon: '🖼️', title: '冷知识：矩阵与游戏画面', content: '3D 游戏里每个角色的旋转、缩放、平移，都是用矩阵（或四元数）实现的.GPU 每秒要进行上亿次矩阵运算，才让游戏画面流畅.你打的每一场游戏，都是线性代数在加班.' },

    /* ===== 第3章 向量组 ===== */
    { ch: 103, type: 'story', icon: '🏗️', title: '基底的“骨架”', content: '平面上任意向量都能由 i、j 线性表示，所以 {i,j} 是二维空间的一组基底.基底就像房子的骨架：不能多（冗余）、不能少（不够撑）、方向不能共线.向量组的线性相关与无关，就是在判断这些向量能不能“互相替代”.' },
    { ch: 103, type: 'dialogue', icon: '💬', title: '线性相关辩论', content: '向量 a：没有我你们不行！<br>向量 b：得了吧，你等于 2a，咱俩方向一样，多你一个不多.<br>秩：别吵，极大无关组说了算.极大无关组里有几个向量，秩就是几.' },
    { ch: 103, type: 'trivia', icon: '🎨', title: '冷知识：色彩空间的基', content: 'RGB 色彩空间用红、绿、蓝三种基色混合出所有颜色.如果三种基色线性相关（比如一种是另两种的叠加），就会损失颜色信息.线性无关的基底，是“能表示所有东西的最小集合”.' },

    /* ===== 第4章 线性方程组 ===== */
    { ch: 104, type: 'story', icon: '🔧', title: '高斯消元的智慧', content: '高斯消元法 idea 很简单：通过初等行变换，把方程组化成“上三角”形状，再从下往上回代求解.这个从小学就开始用的方法，其实就是矩阵的初等变换.高斯把这一技巧系统化，让它能处理任意多个方程、任意多个未知数.' },
    { ch: 104, type: 'dialogue', icon: '💬', title: '解的三种命运', content: '增广矩阵：我的秩 r 和系数矩阵的秩 R 决定一切.<br>学生：那什么时候有解？<br>增广矩阵：R=r 才有解；R=r=n（未知数个数）唯一解；R=r<n 无穷多解；R≠r 无解.<br>学生：就这么简单？<br>增广矩阵：对，秩就是方程组的“真实约束数”.' },
    { ch: 104, type: 'trivia', icon: '📡', title: '冷知识：GPS 定位靠解方程组', content: 'GPS 接收器同时收到多颗卫星信号，每颗卫星给出一个距离方程.联立这些方程，就能解出接收器的三维坐标和时间偏差.现代导航，本质上是实时求解一个大规模线性（或非线性）方程组.' },

    /* ===== 第5章 相似矩阵与二次型 ===== */
    { ch: 105, type: 'story', icon: '🌌', title: '特征值的“不变量”', content: '两个相似矩阵，看起来不同，却共享特征值、行列式、迹、秩.特征值就像是矩阵的“指纹”——无论你怎么换基底，它都保持不变.相似对角化，就是找一个最简的“同族代表”来研究复杂的矩阵.' },
    { ch: 105, type: 'dialogue', icon: '💬', title: '二次型的形状', content: '二次型：我是一类特殊的多元二次函数，图像可能是椭球、双曲面或抛物面.<br>正交变换：我能通过换坐标，把你的交叉项消掉，变成标准形.<br>学生：怎么判断是椭球还是双曲面？<br>二次型：看标准形系数全正、全负还是有正有负——这就是惯性定理.' },
    { ch: 105, type: 'trivia', icon: '📉', title: '冷知识：搜索引擎与特征向量', content: 'Google 早期 PageRank 算法，把网页之间的链接关系建构成一个巨大矩阵，通过求主特征向量给网页排序.特征值最大的那个特征向量，就对应着“最重要的网页”.线性代数，撑起了整个搜索引擎时代.' }
  ];

  function chapterWorld(ch) {
    var base = CFG.worldOf[ch] || 'forest';
    var W = WORLDS[base];
    var suf = WORLD_SUFFIX[(ch - 1) % WORLD_SUFFIX.length];
    /* 每章微调：色相旋转（±25°）+ 轻量明暗，使同族不同章在配色上区分，又保留族身份 */
    var shift = ((ch * 23) % 50) - 25;
    var lit = ((ch * 17) % 18) / 100 - 0.09; /* -0.09 .. +0.08 */
    var sky0 = hueRotate(W.sky[0], shift), sky1 = hueRotate(W.sky[1], shift);
    var ground = shade(hueRotate(W.ground, shift), lit);
    var water = W.water === 'transparent' ? W.water : hueRotate(W.water, shift);
    var vars = DECOR_VARS[base] || ['tree'];
    var dvar = vars[(ch - 1) % vars.length];
    var accent = shade(ground, 0.14);
    /* 封面粒子配色直接由地图 ground/sky 派生 → 封面主色 == 世界图主色 */
    var particle = [ground, shade(ground, -0.14), accent, shade(sky0, 0.06), '#ffffff'];
    var wName = (BOOK === 'linalg') ? (LINALG_NAMES[base] || W.name) : W.name;
    return {
      base: base, name: wName + suf,
      sky: [sky0, sky1], ground: ground, water: water,
      decor: W.decor, ambient: W.ambient, boss: W.boss,
      decorVar: dvar, ch: ch, accent: accent, particle: particle
    };
  }

  /* ---------- 数据读取 ---------- */
  function readStudy() { try { return JSON.parse(localStorage.getItem('study_v1')) || {}; } catch (e) { return {}; } }
  function mastery(ch) {
    var s = readStudy(), m = s.mastery && s.mastery[ch];
    var quizRate = 0, right = 0, total = 0;
    if (m && m.total) { quizRate = m.right / m.total; right = m.right; total = m.total; }
    // 内容能量：旧版由 chapter-fog.js 写入 fog_content_v1；现已由荧光回收率取代
    var contentRate = 0;
    try {
      contentRate = JSON.parse(localStorage.getItem('fog_content_v1') || '{}')[BOOK + ':' + ch] || 0;
    } catch (e) {}
    // 同时读取 fluo 进度作为内容掌握率
    var fluoRate = 0;
    try {
      var fluo = JSON.parse(localStorage.getItem('fluo_learned_v1') || '{}');
      var prefix = BOOK + ':' + ch + ':';
      var got = 0, all = 0;
      for (var k in fluo) {
        if (fluo.hasOwnProperty(k) && k.indexOf(prefix) === 0) { got++; all++; }
      }
      // 如果没有荧光标记，fluoRate 保持 0，避免干扰
      if (all > 0) fluoRate = got / all;
    } catch (e) {}
    contentRate = Math.min(1, Math.max(contentRate, fluoRate));
    var combined = Math.min(1, contentRate * 0.35 + quizRate * 0.65);
    return { rate: combined, done: combined >= 0.6, right: right, total: total, gemRate: contentRate };
  }
  var LS = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var DIALOG_DONE = LS.get('tb_dialog'), RELICS = LS.get('tb_relics'), BLIND_OPEN = LS.get('tb_blind'), TITLES = LS.get('tb_titles');

  /* ---------- 迷雾盲盒：每章多个，分散在地图中，打开后变路标 ---------- */
  var BLIND_MARKERS = ['🚩','⭐','🏆','🗿','🌟','💎','🔮','⚓','🧭','🎐'];
  function getBlindBoxes(ch) {
    var rng = makeRng(ch * 7919 + 31415);
    var bases = [
      { left: 24, threshold: 22 },
      { left: 52, threshold: 50 },
      { left: 82, threshold: 78 }
    ];
    return bases.map(function (b, i) {
      return {
        left: Math.max(14, Math.min(90, b.left + Math.round((rng() - 0.5) * 8))),
        threshold: Math.max(10, Math.min(95, b.threshold + Math.round((rng() - 0.5) * 10))),
        marker: BLIND_MARKERS[(ch * 3 + i) % BLIND_MARKERS.length]
      };
    });
  }
  function normalizeBlindOpen() {
    var need = false;
    for (var ch in BLIND_OPEN) {
      if (!BLIND_OPEN.hasOwnProperty(ch)) continue;
      if (typeof BLIND_OPEN[ch] === 'number') {
        var n = BLIND_OPEN[ch];
        BLIND_OPEN[ch] = {};
        for (var i = 0; i < n; i++) BLIND_OPEN[ch][i] = true;
        need = true;
      }
    }
    if (need) LS.set('tb_blind', BLIND_OPEN);
  }
  normalizeBlindOpen();
  function isBlindOpened(ch, idx) { var o = BLIND_OPEN[ch]; return !!(o && o[idx]); }
  function markBlindOpened(ch, idx) {
    if (!BLIND_OPEN[ch]) BLIND_OPEN[ch] = {};
    BLIND_OPEN[ch][idx] = true;
    LS.set('tb_blind', BLIND_OPEN);
    syncTowerToCloud();
  }

  /* 塔数据云端同步：写 tb_* 时同步进 study_v1.tower（energy_bar 云端推送整个 study_v1，自动带走；mergeStudy 已支持并集合并） */
  function syncTowerToCloud() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1')) || {};
      if (!s.tower) s.tower = {};
      s.tower.relics = RELICS; s.tower.blind = BLIND_OPEN; s.tower.dialog = DIALOG_DONE; s.tower.titles = TITLES;
      localStorage.setItem('study_v1', JSON.stringify(s));
    } catch (e) {}
    // 立即触发云端上传（修掉旧版：写入 study_v1 却不推送，导致塔数据跨设备不同步）
    try { if (window.EnergyBar && window.EnergyBar.flush) window.EnergyBar.flush(); } catch (e) {}
  }
  // 初始化：若云端有塔数据（本地为空）则回填
  function pullTowerFromCloud() {
    try {
      var s = JSON.parse(localStorage.getItem('study_v1')) || {};
      if (!s.tower) return;
      // 与云端并集合并（不覆盖本地已有进度）：手迹/盲盒/对话/称号
      [['relics', RELICS], ['blind', BLIND_OPEN], ['dialog', DIALOG_DONE], ['titles', TITLES]].forEach(function (pair) {
        var src = s.tower[pair[0]];
        if (src && typeof src === 'object') {
          var dst = pair[1];
          Object.keys(src).forEach(function (ch) { if (dst[ch] === undefined) dst[ch] = src[ch]; });
        }
      });
    } catch (e) {}
  }

  /* ---------- 每章差异化老师对话（结合本章知识点） ---------- */
  var DIALOGS = {
    gdsx: {
      1: { title: '第一层 · 囚室外的函语', relic: '「函数是给万物起的名字.」', lines: [
        { who: 't', mood: 'worried', text: '……是你吗？我正被困在塔顶，但别慌——你脚下这一层，是"函数"的世界.' },
        { who: 't', mood: 'soft', text: '函数，是给万物起的名字：温度随高度变、利息随时间滚、信号随距离衰减……它们都是函数.学会它，你就掌握了描述世界的语法.' },
        { who: 's', opts: [
          { t: '老师别怕，我马上到！', mood: 'tear', reply: '好！函数是"一对一"的对应——一个 x 只对应一个 y，就像现在的你，只认准一个目标.' },
          { t: '函数有点抽象……', mood: 'soft', reply: '抽象，是因为它太本质.你学过的每一条曲线、每一个公式，都是函数在说话.' },
          { t: '我会把这一层学透', mood: 'happy', reply: '那我就在塔顶，听你一步步踩楼梯的声音.' }] } ]
      },
      2: { title: '第二层 · 无限逼近的勇气', relic: '「无限接近，永不放弃.」', lines: [
        { who: 't', mood: 'worried', text: '这一层是"极限与连续"——很多人在这里被劝退，但你别怕.' },
        { who: 't', mood: 'soft', text: '极限是什么？是你无限靠近一个值，却永远触不到它.就像你爬塔——每一层都更接近我，这本身就是极限的精神.' },
        { who: 's', opts: [
          { t: 'lim 是我前进的动力！', mood: 'happy', reply: '哈哈，那 ε-δ 语言你也要认真看——它把"无限靠近"说成了精确的数学，那是严谨的美.' },
          { t: '无穷小好难懂', mood: 'soft', reply: '无穷小不是"很小的数"，而是"趋于 0 的过程".看透这一点，后面的路就顺了.' },
          { t: '连续又是什么？', mood: 'soft', reply: '连续是"断不了"：函数值跟着自变量走，像你爬塔的每一步，稳稳接住前一步.' }] } ]
      },
      3: { title: '第三层 · 变化的瞬间', relic: '「变化，是这一刻的速度.」', lines: [
        { who: 't', mood: 'soft', text: '导数层——这一层讲"变化".f\'(x₀) 不是凭空来的，它是差商的极限.' },
        { who: 't', mood: 'worried', text: '（压低声音）他们的脚步声又近了……但我相信你：变化不可怕，可怕的是不敢面对变化.' },
        { who: 's', opts: [
          { t: '差商的极限，我记住了！', mood: 'happy', reply: '对！导数就是"这一刻的速度".火箭升空、股价波动、疫情曲线——都是导数在说话.' },
          { t: '为什么尖点不可导？', mood: 'soft', reply: '尖点处左边一个斜率、右边一个斜率，变化没有唯一答案.就像人生岔路口，得先想清楚再走.' },
          { t: '乘积法则我总记错', mood: 'worried', reply: '（低声）u\'v + uv\'，前导后不导，后导前不导.你背熟它，我这儿的锁就松一根.' }] } ]
      },
      4: { title: '第四层 · 中值定理的桥', relic: '「总有那么一刻，斜率等于平均速度.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是中值定理——罗尔、拉格朗日、柯西，它们是微积分里的"桥梁".' },
        { who: 't', mood: 'soft', text: '拉格朗日说：一段旅程的平均速度，总在途中某个瞬间被真实达到.像你爬塔——总有一层，你走得最快.' },
        { who: 's', opts: [
          { t: '那洛必达呢？', mood: 'happy', reply: '洛必达是"0/0 的钥匙"——上下同时求导.但记住：先看清是不是未定式，别乱开锁.' },
          { t: '泰勒展开好难', mood: 'soft', reply: '泰勒是"用多项式逼近函数"——把一个复杂的函数，拆成无数简单的幂.你拆得越多，越接近真相.' },
          { t: '我会证明它的！', mood: 'tear', reply: '（眼眶微红）能证明中值定理的人，一定也能走完这座塔.老师等你.' }] } ]
      },
      5: { title: '第五层 · 积分的拼接术', relic: '「把破碎，拼成整体.」', lines: [
        { who: 't', mood: 'worried', text: '积分层到了……门缝太窄，我只能用手指在灰尘上写：∫' },
        { who: 't', mood: 'soft', text: '把碎掉的部分，拼回一个整体——这就是积分.同学，我等你把破碎的我，一片一片拼回来.' },
        { who: 's', opts: [
          { t: '∫ 是拼回整体的魔法！', mood: 'happy', reply: '你已经有积分直觉了.记得加 C——那是被遗忘的无限可能.' },
          { t: '牛顿-莱布尼茨公式呢？', mood: 'soft', reply: '它把积分和导数连成一体：求积先找原函数.像你爬塔——找到对的台阶，一步就是一层.' },
          { t: '换元总是漏 dx', mood: 'soft', reply: '（隔着门笑）漏 dx 就像写信忘了写日期——信还在，但总觉得差了点什么.' }] } ]
      },
      6: { title: '第六层 · 积分的用武之地', relic: '「数学的浪漫，在应用里开花.」', lines: [
        { who: 't', mood: 'soft', text: '这一层讲积分的应用：面积、体积、弧长、功……微积分在这里真正"用起来"了.' },
        { who: 't', mood: 'soft', text: '你算出的每一个面积，都是数学家几百年前求了又求的梦想.同学，你在替他们圆梦.' },
        { who: 's', opts: [
          { t: '旋转体体积好神奇！', mood: 'happy', reply: '把一个图形绕着轴转一圈，就得到了一个立体的世界——这就是"想象力的微积分".' },
          { t: '弧长公式记住了', mood: 'soft', reply: 'ds = √(1+f\'²) dx，是"小段斜边"的极限.数学最动人的地方，就是把"大约"变成"精确".' },
          { t: '我会算给老师看！', mood: 'tear', reply: '好，那我等着看你算出的那个数——那会是我听过最好听的数字.' }] } ]
      },
      7: { title: '第七层 · 方程里的未来', relic: '「微分方程，是写给未来的预言.」', lines: [
        { who: 't', mood: 'worried', text: '这一层是常微分方程——描述"变化如何发生"的方程.' },
        { who: 't', mood: 'soft', text: '人口增长、放射性衰变、电路震荡……世界的运行法则，一半写在微分方程里.解出它，你就看见了未来.' },
        { who: 's', opts: [
          { t: '分离变量我会了！', mood: 'happy', reply: '对，把 x 和 y 分开，两边积分——像把纠缠的线团理清，一根一根分开.' },
          { t: '特解和通解分不清', mood: 'soft', reply: '通解是"所有可能"，特解是"恰好那个".像塔的每一层——通解是路，特解是你正在走的那条.' },
          { t: '老师，我会解出你的！', mood: 'tear', reply: '（沉默片刻）这句话……比任何方程都让我安心.' }] } ]
      },
      8: { title: '第八层 · 向量的方向', relic: '「向量有大小，也有方向——像梦想.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是空间解析几何：向量、平面、直线、曲面.三维的世界，从这里打开.' },
        { who: 't', mood: 'soft', text: '向量告诉你：光有大小不够，还要有方向.学数学也一样——方向对了，每一步都算数.' },
        { who: 's', opts: [
          { t: '点积叉积我能分清！', mood: 'happy', reply: '点积给数、叉积给向量——一个问"像不像"，一个问"转不转".你已经在用数学思考空间了.' },
          { t: '空间想象好难', mood: 'soft', reply: '难就对了.三维的世界，本来就该用三维的脑子去想.你每画一张草图，就多了一分直觉.' },
          { t: '我会找到方向的！', mood: 'tear', reply: '你此刻的方向，就是朝塔顶.老师在这条直线上等你.' }] } ]
      },
      9: { title: '第九层 · 多变量的世界', relic: '「世界不是单行道，多元才精彩.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是多元函数微分学——一个因变量，多个自变量.温度随 x, y, z, t 变化，世界本来就是多元的.' },
        { who: 't', mood: 'soft', text: '偏导数，是"抓住一个变量，其他先不动".像你爬塔时，此刻只专注脚下的这一级台阶.' },
        { who: 's', opts: [
          { t: '偏导把 y 当常数！', mood: 'happy', reply: '没错！求 ∂f/∂x 时，y 暂时"冻结".数学也懂得"一次只做一件事".' },
          { t: '全微分是什么？', mood: 'soft', reply: '全微分是"所有方向的变化加起来".像你走的每一步——不只是前进，还有上升.' },
          { t: '多元好丰富啊', mood: 'tear', reply: '（笑）丰富，才像人生.你已经在用多元的眼光看世界了.' }] } ]
      },
      10: { title: '第十层 · 重积分的厚积', relic: '「厚度，来自一次次叠加.」', lines: [
        { who: 't', mood: 'soft', text: '重积分层——把一个区域切成无数小块，再一块块加起来.' },
        { who: 't', mood: 'soft', text: '你的每一次复习、每一道题，都像一个小积分元.积多了，就是一片厚实的"体积".' },
        { who: 's', opts: [
          { t: '二重积分我会画图！', mood: 'happy', reply: '画图是重积分的半壁江山——先看清区域，再选对积分次序，剩下就是耐心的叠加.' },
          { t: '极坐标好绕', mood: 'soft', reply: '极坐标，是把"圆的世界"用"半径和角度"讲清楚.圆的题目，用它就顺了.' },
          { t: '我在积累每一小块', mood: 'tear', reply: '（点头）那老师也在塔顶，一小块一小块地，等你积满这层.' }] } ]
      },
      11: { title: '第十一层 · 沿着曲线的足迹', relic: '「曲线积分，是沿着路走出来的积分.」', lines: [
        { who: 't', mood: 'soft', text: '曲线积分层——不再沿直线积分，而是沿一条曲线.路弯了，数学也跟着弯.' },
        { who: 't', mood: 'soft', text: '人生也一样：不是所有路都是直的.曲线积分教你的，是"弯路上也要走一步算一步".' },
        { who: 's', opts: [
          { t: '格林公式好漂亮！', mood: 'happy', reply: '格林公式把"边界上的线积分"换成"区域内的二重积分"——换一种视角，难题就开了.' },
          { t: '路径无关是什么？', mood: 'soft', reply: '有些积分，从哪条路走结果都一样——像努力，方向对了，弯路也通向塔顶.' },
          { t: '我会沿路走上去', mood: 'tear', reply: '那老师就在路的尽头，等你把这条曲线走完.' }] } ]
      },
      12: { title: '第十二层 · 曲面的拥抱', relic: '「曲面积分，是拥抱立体的温柔.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是曲面积分——在曲面（比如球面、锥面）上做积分.' },
        { who: 't', mood: 'soft', text: '高斯公式把"闭曲面的通量"和"内部的散度"连起来——外面看得见的，和里面藏着的，是一体的.' },
        { who: 's', opts: [
          { t: '斯托克斯公式呢？', mood: 'happy', reply: '它把"边界曲线"和"曲面旋度"连起来——线里有面，面里有旋.数学的环环相扣，美极了.' },
          { t: '方向好难判断', mood: 'soft', reply: '外侧、正向、右手法则……多画图多转笔，方向感是练出来的，不是背出来的.' },
          { t: '我快到了！', mood: 'tear', reply: '（声音有些颤）是的……我听见你的脚步，已经到第十三层下面了.' }] } ]
      },
      13: { title: '第十三层 · 级数的尽头', relic: '「走够远，就能逼近理想.」', lines: [
        { who: 't', mood: 'tear', text: '……级数层，最后一道门了.' },
        { who: 't', mood: 'soft', text: '级数像人生的展开式：你走得够远，就能逼近理想.但漏掉一项，就永远差一点——学习最怕"差不多就行".' },
        { who: 's', opts: [
          { t: '老师，我不会漏掉任何一项！', mood: 'tear', reply: '（沉默片刻）这是你爬完 13 层说过，最像数学家的一句话.' },
          { t: '收敛域好难……', mood: 'soft', reply: '收敛域是你的安全区：在里面怎么走都踏实.你已经走到塔顶了，同学.' },
          { t: '我来了，老师！', mood: 'happy', reply: '（门开了）走，我们回家.记住——学数学的人，永远不会迷路.' }] } ]
      }
    },
    linalg: {
      1: { title: '第一层 · 行列式的锁', relic: '「行列式，是空间伸缩的度量.」', lines: [
        { who: 't', mood: 'worried', text: '你终于来了.这一层是行列式——线性代数真正的"第一把锁".' },
        { who: 't', mood: 'soft', text: '行列式不为 0，方程组就有唯一解——它像一把尺子，量出"空间被拉伸了多少".' },
        { who: 's', opts: [
          { t: '克拉默法则我懂了！', mood: 'happy', reply: '把解写成行列式之比，是线性代数最早的浪漫.' },
          { t: '展开定理好绕', mood: 'soft', reply: '按行展开，是"大问题拆成小问题"——像爬塔，一层一层来.' },
          { t: '我会解开的！', mood: 'tear', reply: '那老师等着你，把这把锁一层层打开.' }] } ]
      },
      2: { title: '第二层 · 矩阵的编织', relic: '「矩阵，是线性变换的编织者.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是矩阵——它不是一堆数的表格，而是一个"变换"：旋转、缩放、投影.' },
        { who: 't', mood: 'soft', text: '矩阵乘法，是"变换的复合"：先转再缩，和先缩再转，往往不同——顺序，是线性代数的性格.' },
        { who: 's', opts: [
          { t: '矩阵乘法我会算！', mood: 'happy', reply: '会算乘法，你已经握住了"变换的语言".' },
          { t: '逆矩阵是干嘛的？', mood: 'soft', reply: '逆矩阵是"撤销操作"——做了 A 再 A⁻¹，回到原点.人生也需要这样的"撤销键".' },
          { t: '矩阵好神奇', mood: 'tear', reply: '（笑）你已经开始觉得它神奇了——那就离"爱上它"不远了.' }] } ]
      },
      3: { title: '第三层 · 向量组的骨架', relic: '「线性无关，是独立的底气.」', lines: [
        { who: 't', mood: 'soft', text: '这一层是向量组——线性相关、线性无关、秩.' },
        { who: 't', mood: 'soft', text: '"无关"的意思是：谁也不能由别人代替.像你——每一份努力都独立算数，谁也替代不了.' },
        { who: 's', opts: [
          { t: '秩是维度的核心！', mood: 'happy', reply: '秩，是"真正独立的方向有几个".你抓住秩，就抓住了向量组的命脉.' },
          { t: '线性相关好抽象', mood: 'soft', reply: '相关就是"冗余"：有个向量可以靠别人拼出来.删掉冗余，留下骨架——这就是化简.' },
          { t: '我要做线性无关的人', mood: 'tear', reply: '（感动）你这句话，比秩的定义更让我骄傲.' }] } ]
      },
      4: { title: '第四层 · 方程组的解', relic: '「有解、无解、无穷解——都是答案.」', lines: [
        { who: 't', mood: 'worried', text: '这一层是线性方程组——人类最早学会"解方程"的地方.' },
        { who: 't', mood: 'soft', text: '高斯消元法，是几千年智慧的结晶：把复杂的方程组，一步步削成最简的样子.' },
        { who: 's', opts: [
          { t: '消元我会！', mood: 'happy', reply: '会消元，你就掌握了"化简"的真谛——人生也一样，复杂问题先化简.' },
          { t: '无穷多解怎么理解？', mood: 'soft', reply: '自由变量，是方程组的"自由度".约束少了，选择就多了——但别怕，那也是一种答案.' },
          { t: '我会解出老师的！', mood: 'tear', reply: '（眼里有光）这大概是世上最动人的一个"解".' }] } ]
      },
      5: { title: '第五层 · 特征值的钥匙', relic: '「特征向量，是不变的方向.」', lines: [
        { who: 't', mood: 'tear', text: '最后一层了……特征值与特征向量.' },
        { who: 't', mood: 'soft', text: '特征向量，是变换下"方向不变"的向量——只被拉伸，不被扭曲.像你：走了这么远，初心没变.' },
        { who: 's', opts: [
          { t: '对角化我会算！', mood: 'happy', reply: '对角化，是把变换"理顺"——找到一个坐标系，让它变得简单.你已经在给人生找坐标系了.' },
          { t: '二次型标准化呢？', mood: 'soft', reply: '配方法、正交变换——把乱糟糟的二次型，化成标准形.数学的优雅，就是"化简".' },
          { t: '老师，我们回家！', mood: 'happy', reply: '（门开了）走，我们回家.记住——你的特征向量，永远是"向上".' }] } ]
      }
    }
  };
  var DIALS = DIALOGS[BOOK];

  /* ---------- 彩蛋池 ---------- */
  var EASTER_EGGS = [
    '（悄悄话）你知道吗？你做题的速度，比级数收敛还快.',
    '我偷偷算过——你爬的每一层楼，正好等于一道题的步骤数.',
    '其实塔是我故意让他们抓我来的……不这样，你怎么会认真学完这一章？',
    '顶层那扇门的密码，是 3.1415926.',
    '你刚才做题的样子，像极了当年的我.',
    '（小声）塔里的怪兽其实怕的不是剑，是"会做题的人".',
    '听说你每次打开教材，塔都会悄悄长高一毫米.',
    '这一章的考点，我在梦里给你讲过三遍了.'
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
  function maybeKatex(el) {
    if (!el || !window.katex || !window.katex.renderToString) return;
    var html = el.innerHTML;
    function render(tex, display) {
      try { return window.katex.renderToString(tex, { throwOnError: false, displayMode: display }); } catch (e) { return null; }
    }
    // 行内 \(...\)
    html = html.replace(/\\\((.*?)\\\)/g, function (m, tex) {
      var out = render(tex, false); return out || m;
    });
    //  display \[...\]
    html = html.replace(/\\\[(.*?)\\\]/g, function (m, tex) {
      var out = render(tex, true); return out || m;
    });
    //  display $$...$$
    html = html.replace(/\$\$(.*?)\$\$/g, function (m, tex) {
      var out = render(tex, true); return out || m;
    });
    el.innerHTML = html;
  }
  /* 自评区专用：把裸 LaTeX 片段识别出来并安全渲染 */
  function texForKatex(s) { return s.replace(/\\dfrac/g, '\\frac').replace(/\\tfrac/g, '\\frac'); }
  function wrapInlineMath(s) {
    if (!s) return s;
    if (/\\\(|\\\)|\$\$/.test(s)) return s; // 已有包裹不再拆分
    var out = '', math = '';
    function flush() { if (math) { out += '\\(' + math + '\\)'; math = ''; } }
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (/[A-Za-z0-9\\_\^{}.\-+*/=(),;]/.test(c)) { math += c; }
      else if (c === ' ' && math) { math += c; }
      else { flush(); out += c; }
    }
    flush();
    return out;
  }
  function renderInlineMath(s) {
    if (!window.katex || !window.katex.renderToString) return s;
    return s.replace(/\\\((.*?)\\\)/g, function (m, tex) {
      try { return window.katex.renderToString(tex, { throwOnError: true, displayMode: false }); }
      catch (e) { return '<span style="font-family:KaTeX_Main,serif;white-space:pre-wrap">' + escHtml(tex) + '</span>'; }
    });
  }
  function renderSelfCheckText(s) { return renderInlineMath(wrapInlineMath(texForKatex(s || ''))); }

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
  /* 当前章：从页面文件名识别（chN.html → N），塔 = 章级目录 */
  var _pm = ((location.pathname || '').split('/').pop() || '').match(/^ch(\d+)\.html$/);
  var curCh = _pm ? Math.min(+_pm[1], CFG.total) : 1, curTab = 'map', dlgTimer = null, dlgBusy = false, dlgTyping = false, toastT = null;
  var prevDone = null;

  /* ---------- Toast ---------- */
  function toast(msg) {
    var t = document.getElementById('tbtoast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  /* ---------- 地图渲染（单章单层，5×6 紧凑网格——按章节程序化，每章地形各不相同） ---------- */
  var COLS = 5, ROWS = 6, CELL = 42, PAD = 15;
  // 大图模式同网格、格子再放大
  var BIG_COLS = 5, BIG_ROWS = 6;
  /* 每章一张独一无二的地图：
   *  - hero(底行) / stairs(顶行) 列随章节号变化
   *  - 蛇形主路连通二者（保证可玩），路径弯曲随章节抖动
   *  - 地形特征(water/chasm/void)按基调散布于主路两侧，密度随章节变化
   *  - 确定性伪随机（makeRng(ch)），刷新不跳变
   */
  function genLayout(ch, big) {
    var cols = big ? BIG_COLS : COLS, rows = big ? BIG_ROWS : ROWS;
    var base = CFG.worldOf[ch] || 'forest';
    var rnd = makeRng((ch * 2654435761) >>> 0);
    var T = []; for (var r = 0; r < rows; r++) { T.push(new Array(cols).fill('ground')); }
    // hero 底行、stairs 顶行：列随章变化
    var hc = Math.floor(rnd() * cols);
    var sc = Math.floor(rnd() * cols);
    var hero = [hc, rows - 1], stairs = [sc, 0];
    // 蛇形主路：保证 hero↔stairs 连通
    var path = {};
    (function carve() {
      var rr = hero[1], c = hero[0]; T[rr][c] = 'ground'; path[rr + ',' + c] = 1;
      while (rr > stairs[1]) {
        rr--;
        if (c < sc) c++; else if (c > sc) c--;
        if (rnd() < 0.3) { var j = (c > 0 && (c >= cols - 1 || rnd() < 0.5)) ? -1 : 1; var nc = c + j; if (nc >= 0 && nc < cols) c = nc; }
        T[rr][c] = 'ground'; path[rr + ',' + c] = 1;
      }
      T[stairs[1]][stairs[0]] = 'ground'; path[stairs[1] + ',' + stairs[0]] = 1;
    })();
    function freeCell() {
      for (var k = 0; k < 80; k++) {
        var fr = 1 + Math.floor(rnd() * (rows - 2));
        var fc = Math.floor(rnd() * cols);
        if (path[fr + ',' + fc]) continue;
        if ((fr === hero[1] && fc === hero[0]) || (fr === stairs[1] && fc === stairs[0])) continue;
        return [fc, fr];
      }
      return [Math.floor(rnd() * cols), 1];
    }
    var monster = freeCell(), blind = freeCell();
    if (monster[0] === blind[0] && monster[1] === blind[1]) blind = freeCell();
    // 地形特征：按基调撒 water/chasm/void（避开主路/关键格），密度随章节变化
    var feat = base === 'canyon' ? 'chasm' : (base === 'star' || base === 'peak') ? 'void' : 'water';
    var density = 0.16 + (ch % 4) * 0.045;
    for (var r2 = 0; r2 < rows; r2++) for (var c2 = 0; c2 < cols; c2++) {
      if (path[r2 + ',' + c2]) continue;
      if ((r2 === hero[1] && c2 === hero[0]) || (r2 === stairs[1] && c2 === stairs[0])) continue;
      if ((r2 === monster[1] && c2 === monster[0]) || (r2 === blind[1] && c2 === blind[0])) continue;
      if (rnd() < density) T[r2][c2] = feat;
    }
    return { T: T, hero: hero, stairs: stairs, monster: monster, blind: blind, world: base, W: chapterWorld(ch), ch: ch, cols: cols, rows: rows };
  }
  /* ---------- 每章装饰子类型小图标（由 decorVar 决定，使同族不同章视觉各异） ---------- */
  function tileDecor(dvar, x, y, sz, big) {
    var u = big ? 1.5 : 1;
    var s = '<g transform="translate(' + x + ',' + y + ')">';
    switch (dvar) {
      case 'cherry':   s += '<circle cx="-4" cy="2" r="' + (1.6 * u) + '" fill="#ff9ec4"/><circle cx="4" cy="-1" r="' + (1.4 * u) + '" fill="#ffc2d6"/>'; break;
      case 'pine':     s += '<path d="M0 ' + (-5 * u) + ' L' + (4 * u) + ' ' + (4 * u) + ' L' + (-4 * u) + ' ' + (4 * u) + ' Z" fill="#3f8f57"/><rect x="-1" y="' + (3 * u) + '" width="2" height="3" fill="#7a4a2e"/>'; break;
      case 'bamboo':   s += '<path d="M-3 5 L-3 -5" stroke="#5fae6a" stroke-width="' + (1.4 * u) + '" fill="none"/><path d="M3 5 L3 -4" stroke="#7bc47f" stroke-width="' + (1.2 * u) + '" fill="none"/>'; break;
      case 'maple':    s += '<path d="M0 -5 L2 -1 L5 -2 L2 1 L3 5 L0 3 L-3 5 L-2 1 L-5 -2 L-2 -1 Z" fill="#e8703a"/>'; break;
      case 'ginkgo':   s += '<path d="M0 5 L-5 -2 Q0 -6 5 -2 Z" fill="#f2c83c"/>'; break;
      case 'mesa':     s += '<path d="M-5 5 L-4 -2 L4 -2 L5 5 Z" fill="#c87a4a"/>'; break;
      case 'dune':     s += '<path d="M-5 5 Q0 0 5 5 Z" fill="#e8c483"/>'; break;
      case 'arch':     s += '<path d="M-4 5 L-4 -1 Q0 -5 4 -1 L4 5" stroke="#d99a5a" stroke-width="' + (1.6 * u) + '" fill="none"/>'; break;
      case 'spire':    s += '<path d="M0 5 L-2 -4 L2 -4 Z" fill="#b9743f"/>'; break;
      case 'coral':    s += '<path d="M0 5 L0 -3 M0 -1 L-3 -4 M0 -1 L3 -4" stroke="#ff8fae" stroke-width="' + (1.4 * u) + '" fill="none"/>'; break;
      case 'kelp':     s += '<path d="M0 5 Q-3 0 0 -4 Q3 -1 0 -5" stroke="#3fae8f" stroke-width="' + (1.4 * u) + '" fill="none"/>'; break;
      case 'ice':      s += '<path d="M0 5 L-3 -3 L0 -5 L3 -3 Z" fill="#bfe9ff" opacity=".9"/>'; break;
      case 'shell':    s += '<path d="M0 4 Q-4 0 0 -3 Q4 0 0 4" fill="#ffd9c2"/>'; break;
      case 'reef':     s += '<path d="M-4 5 L-2 -2 L1 2 L4 -3 L5 5 Z" fill="#e08a6a"/>'; break;
      case 'nebula':   s += '<circle cx="0" cy="0" r="' + (3 * u) + '" fill="#cdbfff" opacity=".7"/><circle cx="2" cy="-2" r="' + (1.6 * u) + '" fill="#bfe0ff" opacity=".7"/>'; break;
      case 'comet':    s += '<path d="M-5 -4 L4 4" stroke="#fff" stroke-width="' + (1.6 * u) + '" opacity=".8"/><circle cx="5" cy="5" r="' + (1.6 * u) + '" fill="#fff"/>'; break;
      case 'planet':   s += '<circle cx="0" cy="0" r="' + (3.4 * u) + '" fill="#9b8bff"/><ellipse cx="0" cy="0" rx="' + (5 * u) + '" ry="' + (1.6 * u) + '" fill="none" stroke="#c9b6ff" stroke-width="1"/>'; break;
      case 'galaxy':   s += '<path d="M0 0 Q4 -3 2 3 Q-2 5 -3 -1 Q-3 -4 0 0" fill="#bfa9ff" opacity=".7"/>'; break;
      case 'snow':     s += '<g stroke="#bcd9ee" stroke-width="' + (1.2 * u) + '"><path d="M0 -4 L0 4 M-3 -2 L3 2 M-3 2 L3 -2"/></g>'; break;
      case 'icefield': s += '<path d="M-4 4 L-1 -3 L2 2 L4 -2 L5 4 Z" fill="#dff0ff"/>'; break;
      case 'aurora':   s += '<path d="M-5 3 Q0 -4 5 3" stroke="#7bffb0" stroke-width="' + (1.6 * u) + '" fill="none" opacity=".7"/>'; break;
      case 'crag':     s += '<path d="M-4 5 L-1 -3 L3 -1 L5 5 Z" fill="#9aa6b2"/>'; break;
      default:         s += '<circle cx="-3" cy="2" r="' + (1.4 * u) + '" fill="#ffd24d"/><circle cx="3" cy="-1" r="' + (1.3 * u) + '" fill="#ff8fa8"/>';
    }
    return s + '</g>';
  }
  /* ---------- 地图渲染（big=true 时放大为大图模式；renderCh 指定渲染章，用于盲盒打开状态） ---------- */
  function mapSVG(layout, m, big, renderCh) {
    var renderChNum = renderCh || curCh;
    var W = layout.W || WORLDS[layout.world];
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
        var dvar = (layout.W && layout.W.decorVar) || 'tree';
        s += '<rect x="' + (x - sz / 2) + '" y="' + (y - sz / 2) + '" width="' + sz + '" height="' + sz + '" rx="10" fill="' + W.ground + '" opacity="' + (0.35 + 0.5 * lit) + '"/>';
        if (lit >= 1) s += '<rect x="' + (x - sz / 2 + 3) + '" y="' + (y - sz / 2 + 2) + '" width="' + (sz - 6) + '" height="5" rx="2.5" fill="#fff" opacity=".2"/>';
        // 地面装饰：按本章 decorVar 稀疏点缀（每章图案不同，大图更明显）
        var decMask = ((r * 5 + c * 3 + (layout.ch || 0)) % 4);
        if (decMask === 0 || decMask === 1) s += tileDecor(dvar, x, y, sz, big);
      }
    }
    // 怪（该章未通关 → 显示；通关 → ✓）
    var mx = pad + layout.monster[0] * cell + cell / 2, my = pad + layout.monster[1] * cell + cell / 2;
    var mr = big ? 13 : 8;
    if (m.done) { s += '<g transform="translate(' + mx + ',' + my + ')"><circle r="' + (mr + 1) + '" fill="none" stroke="#e0a93b" stroke-width="2.4"/><path d="M -5 0 L -1 5 L 6 -5" stroke="#e0a93b" stroke-width="3" fill="none" stroke-linecap="round"/></g>'; }
    else { s += '<g transform="translate(' + mx + ',' + my + ')"><circle r="' + mr + '" fill="#e2607a"/><circle cx="' + (-mr * 0.38) + '" cy="' + (-mr * 0.25) + '" r="' + (mr * 0.2) + '" fill="#fff"/><circle cx="' + (mr * 0.38) + '" cy="' + (-mr * 0.25) + '" r="' + (mr * 0.2) + '" fill="#fff"/><path d="M ' + (-mr * 0.5) + ' ' + (mr * 0.4) + ' Q 0 ' + (mr * 0.75) + ' ' + (mr * 0.5) + ' ' + (mr * 0.4) + '" stroke="#fff" stroke-width="1.6" fill="none"/></g>'; }
    // 盲盒
    var bx = pad + layout.blind[0] * cell + cell / 2, by = pad + layout.blind[1] * cell + cell / 2;
    var opened = !!BLIND_OPEN[renderChNum];
    var br = big ? 13 : 9;
    if (opened) { s += '<g transform="translate(' + bx + ',' + by + ')"><circle r="' + br + '" fill="none" stroke="#e0a93b" stroke-width="2" opacity=".8"/><text y="' + (br * 0.4) + '" text-anchor="middle" font-size="' + (big ? 15 : 10) + '">🎉</text></g>'; }
    else { s += '<g class="tbb-blind" transform="translate(' + bx + ',' + by + ')" style="cursor:pointer"><animateTransform attributeName="transform" type="translate" values="' + bx + ' ' + by + ';' + bx + ' ' + (by - 4) + ';' + bx + ' ' + by + '" dur="2.2s" repeatCount="indefinite"/><rect x="' + (-br) + '" y="' + (-br + 2) + '" width="' + (br * 2) + '" height="' + (br * 1.55) + '" rx="4" fill="#e0a93b"/><rect x="' + (-br) + '" y="' + (-br - 2) + '" width="' + (br * 2) + '" height="' + (br * 0.55) + '" rx="3" fill="#f5c35c"/><path d="M ' + (-br * 0.55) + ' ' + (-br - 2) + ' L ' + (br * 0.55) + ' ' + (-br - 2) + ' L 0 ' + (-br - 8) + ' Z" fill="#e07a3b"/></g>'; }
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
    { at: 0, label: '启程', name: '攀登者', icon: '🧑\u200d🎓' }, { at: 20, label: '求索', name: '攀登者', icon: '🔭' },
    { at: 40, label: '笃行', name: '攀登者', icon: '🧗' }, { at: 60, label: '破云', name: '攀登者', icon: '🌤️' },
    { at: 80, label: '登顶', name: '攀登者', icon: '⛰️' }, { at: 100, label: '传奇', name: '攀登者', icon: '🌟' }
  ];
  function heroStageFor(e) { var c = HERO_STAGES[0]; for (var i = 0; i < HERO_STAGES.length; i++) if (e >= HERO_STAGES[i].at) c = HERO_STAGES[i]; return c; }
  function render() {
    if (!root) return;
    var curWorld = CFG.worldOf[curCh], W = WORLDS[curWorld];
    var doneCnt = 0; for (var d = 1; d <= CFG.total; d++) { if (mastery(d).done) doneCnt++; }
    var st = readStudy(), energy = st.energy || 0, lv = st.level || 1, streak = st.streak || 0;
    var hs = heroStageFor(energy), xp = Math.round(energy % 100);
    var h = '<div class="tb-head">🏰 知识之塔<button class="tbtn" id="tbRelic">📜 手迹 ' + Object.keys(RELICS).length + '/' + CFG.total + '</button></div>';
    // 攀登者等级条（紧凑单行：头像左 + 徽章+名字+等级同行；经验用百分比避免换行）
    h += '<div class="tb-hero"><div class="th-ava">' + hs.icon + '</div><div class="th-info">'
      + '<div class="th-name"><span class="th-badge">' + hs.label + '</span><span class="th-nm">' + hs.name + '</span> <span class="th-lv">Lv.' + lv + '</span>' + (streak >= 2 ? ' <span class="th-streak">🔥' + streak + '</span>' : '') + '</div>'
      + '<div class="th-bar"><i style="width:' + xp + '%"></i></div>'
      + '<div class="th-xp">经验 ' + xp + '% · 做题自动积累</div></div></div>';
    h += '<div class="tb-progress" title="章节掌握度 ≥60% 即点亮">已点亮 <b>' + doneCnt + '</b>/' + CFG.total + ' 层 <button class="tbtn tb-q" id="tbHelpBtn" title="这是什么？">?</button></div>';
    h += '<div class="tb-tower">';
    var _ts = window.TOWER_SECS;
    for (var ch = 1; ch <= CFG.total; ch++) {
      var m = mastery(ch), wd = chapterWorld(ch);
      var cls = 'floor' + (m.done ? ' done' : '') + (m.rate > 0 ? ' lit' : '') + (ch === curCh ? ' on' : '');
      /* 楼层条 = 宽版迷雾世界地图章节条（同 tower_demo.html） */
      var ratePct = Math.round(m.rate * 100);
      h += '<div class="' + cls + '" data-ch="' + ch + '" data-rate="' + ratePct + '" style="--clear:' + ratePct + '">';
      h += '<div class="floor-map" aria-hidden="true">';
      h += '<div class="fm-sky" style="background:linear-gradient(180deg,' + wd.sky[0] + ' 0%,' + wd.sky[1] + ' 55%,' + wd.ground + ' 55%,' + wd.ground + ' 100%)"></div>';
      h += '<div class="fm-sun"></div>';
      h += '<div class="fm-cloud c1"></div><div class="fm-cloud c2"></div>';
      h += '<div class="fm-tree">' + (wd.base === 'forest' ? '🌳' : wd.base === 'canyon' ? '🌵' : wd.base === 'sea' ? '🪸' : wd.base === 'star' ? '✨' : '🏔️') + '</div>';
      h += '<div class="fm-tree t2">' + (wd.base === 'forest' ? '🌲' : wd.base === 'canyon' ? '🪨' : wd.base === 'sea' ? '🐚' : wd.base === 'star' ? '⭐' : '❄️') + '</div>';
      h += '<svg class="fm-path" viewBox="0 0 900 60" preserveAspectRatio="none"><path d="M80,50 C160,45 200,20 280,28 C360,36 400,48 480,35 C560,22 620,42 700,30 C760,20 800,45 850,25"></path></svg>';
      /* 每章 3 个迷雾盲盒，随 clear 进度 stagger 露出；打开后变成路标 */
      var bboxes = getBlindBoxes(ch);
      bboxes.forEach(function (bb, idx) {
        var opened = isBlindOpened(ch, idx);
        var cls = 'fm-blind' + (ratePct >= bb.threshold ? ' revealed' : '') + (opened ? ' opened' : '');
        h += '<div class="' + cls + '" data-ch="' + ch + '" data-idx="' + idx + '" style="left:' + bb.left + '%">' + (opened ? bb.marker : '🎁') + '</div>';
      });
      h += '<div class="fm-fog"></div>';
      h += '<div class="fm-front"></div>';
      h += '<div class="fm-sweep"></div>';
      h += '</div>';
      h += '<div class="floor-head">';
      h += '<span class="fno">' + ch + '</span>';
      h += '<span class="fname">' + CFG.chNames[ch] + '</span>';
      h += '<span class="mastery"><span class="mini-orb"></span></span>';
      h += '</div>';
      h += '</div>';
      /* 当前章后面紧跟「本章小节」（大地图已删除） */
      if (ch === curCh && _ts && _ts.list && _ts.list.length) {
        h += '<div class="tb-sec tb-sec-inline"><div class="tb-sec-head" id="tbSecHead">📑 本章小节<span class="tb-sec-cnt">' + _ts.list.length + '</span><i class="tb-sec-arr">▸</i></div><div class="tb-sec-list" id="tbSecList" style="display:none">';
        _ts.list.forEach(function (it) {
          var isAdv = String(it[1]).indexOf('考研') >= 0 || String(it[1]).indexOf('测试') >= 0;
          h += '<a href="#' + it[0] + '"' + (isAdv ? ' class="tb-adv"' : '') + '>' + it[1] + '</a>';
        });
        h += '</div></div>';
      }
    }
    h += '</div>';
    root.innerHTML = h;
    // 绑定：点楼层 = 进入该章（先播放"攀登"过场，再跳转）
    root.querySelectorAll('.floor').forEach(function (el) { el.addEventListener('click', function () { gotoFloor(el.dataset.ch); }); });
    // 迷雾盲盒：点 🎁 直接开盒（阻止冒泡到楼层跳转）
    root.querySelectorAll('.fm-blind').forEach(function (el) {
      el.addEventListener('click', function (e) { e.stopPropagation(); openBlind(parseInt(el.dataset.ch, 10), parseInt(el.dataset.idx, 10)); });
    });
    // 新点亮层：触发庆祝动画（prevDone 为 null 表示首屏渲染，跳过）
    if (prevDone) {
      for (var _c = 1; _c <= CFG.total; _c++) {
        if (mastery(_c).done && !prevDone[_c]) {
          var _fe = root.querySelector('.floor[data-ch="' + _c + '"]');
          if (_fe) _fe.classList.add('justlit');
          playBeam(_c);
        }
      }
    }
    prevDone = {}; for (var _c2 = 1; _c2 <= CFG.total; _c2++) prevDone[_c2] = mastery(_c2).done;
    // 绑定：本章小节折叠
    var _secHead = document.getElementById('tbSecHead');
    if (_secHead) _secHead.addEventListener('click', function () {
      var _ls = document.getElementById('tbSecList');
      if (!_ls) return;
      var open = _ls.style.display !== 'none';
      _ls.style.display = open ? 'none' : 'block';
      _secHead.classList.toggle('open', !open);
    });
    root.querySelectorAll('.tbb-blind').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); openBlind(parseInt(b.dataset.ch || curCh, 10)); }); });
    document.getElementById('tbRelic').addEventListener('click', showRelics);
    var hb = document.getElementById('tbHelpBtn'); if (hb) hb.addEventListener('click', showHelp);
  }
  /* ---------- 点楼层：攀登过场后跳转 ---------- */
  function gotoFloor(ch) {
    var ov = document.getElementById('tbClimb');
    if (!ov) {
      ov = document.createElement('div');
      ov.className = 'tb-climb'; ov.id = 'tbClimb';
      ov.innerHTML = '<div class="climb-inner"><div class="climb-fig">🧗</div><div class="climb-txt" id="climbTxt"></div></div>';
      document.body.appendChild(ov);
    }
    ov.querySelector('#climbTxt').textContent = '攀登第 ' + ch + ' 层…';
    requestAnimationFrame(function () { ov.classList.add('go'); });
    setTimeout(function () { location.href = 'ch' + ch + '.html'; }, 640);
  }
  function playBeam(ch) {
    var tw = root && root.querySelector('.tb-tower'); if (!tw) return;
    var b = document.createElement('div'); b.className = 'tb-beam'; tw.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1150);
  }
  /* 大图模式：全屏放大地图（格子 52px，27 寸屏也能看清） */
  function openBigMap() {
    var box = document.getElementById('tbbig');
    var W = WORLDS[CFG.worldOf[curCh]];
    var layout = genLayout(curCh, true); // 大图用 5×6 紧凑网格，按章差异化
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

  /* ---------- 常驻帮助（"?" 按钮） ---------- */
  /* ---------- 迷雾盲盒 ---------- */
  function closeBlind() { var b = document.getElementById('tbblind'); if (b) b.classList.remove('open'); }
  /* 按章节与盲盒索引命中故事/对话/冷知识；线性代数 ch 映射到 101-105 */
  function getStoryForBox(ch, idx) {
    var mapCh = (BOOK === 'linalg') ? ch + 100 : ch;
    var pool = BLIND_STORIES.filter(function (s) { return s.ch === mapCh; });
    if (!pool.length) return null;
    return pool[(idx || 0) % pool.length];
  }
  /* 渲染“故事型”盲盒：直接读小故事，不用做题 */
  function renderStoryBox(story, opened) {
    var qEl = document.getElementById('bbQ'),
        optsEl = document.getElementById('bbOpts'),
        fbEl = document.getElementById('bbFb'),
        prizeEl = document.getElementById('bbPrize');
    qEl.innerHTML = '<span class="bb-story-tag">' + escHtml(story.icon) + ' ' + (story.type === 'story' ? '数学小故事' : story.type === 'dialogue' ? '数学家对话' : '冷知识') + '</span>'
      + '<div class="bb-story-title">' + escHtml(story.title) + '</div>';
    optsEl.innerHTML = '<div class="bb-story-body">' + story.content + '</div>';
    maybeKatex(optsEl);
    fbEl.style.display = 'none'; fbEl.innerHTML = '';
    prizeEl.className = 'bb-prize'; prizeEl.textContent = '';
    if (opened) {
      optsEl.innerHTML += '<div class="bb-story-note">🔓 你已经开启过这个盲盒，可以随时回顾这个小故事.</div>';
    } else {
      var btn = document.createElement('button');
      btn.className = 'bb-story-btn';
      btn.textContent = '原来如此 · 收下这个小故事';
      btn.addEventListener('click', function () {
        btn.disabled = true;
        awardPrize();
      });
      optsEl.appendChild(btn);
    }
  }
  function openBlind(forCh, idx) {
    blindTargetCh = forCh || curCh;
    blindTargetIdx = (idx === undefined ? 0 : idx);
    var boxes = getBlindBoxes(blindTargetCh);
    var boxInfo = boxes[blindTargetIdx] || boxes[0];
    var opened = isBlindOpened(blindTargetCh, blindTargetIdx);
    var stemTitle = document.getElementById('bbStem');
    if (stemTitle) stemTitle.innerHTML = (opened ? boxInfo.marker : '🎁') + ' 第 ' + blindTargetCh + ' 章 · 迷雾盲盒 #' + (blindTargetIdx + 1);
    var box = document.getElementById('tbblind'); if (!box) return;
    var all = window.EXAM_QUESTIONS || [];
    var chQ = all.filter(function (x) { return x.ch === blindTargetCh; });
    var kao = chQ.filter(function (x) { return x.src === 'kaoyan'; });
    var pool = kao.length ? kao : chQ;
    var qEl = document.getElementById('bbQ'),
        optsEl = document.getElementById('bbOpts'),
        fbEl = document.getElementById('bbFb'),
        prizeEl = document.getElementById('bbPrize');
    /* 优先命中故事/对话/冷知识盲盒；偶数索引或没题时直接上故事 */
    var story = getStoryForBox(blindTargetCh, blindTargetIdx);
    if (story && (blindTargetIdx % 2 === 0 || !pool.length)) {
      renderStoryBox(story, opened);
      box.classList.add('open');
      return;
    }
    if (!pool.length) {
      qEl.textContent = '本章暂无可抽取的盲盒内容，再多学一会儿就有啦～';
      optsEl.innerHTML = ''; fbEl.style.display = 'none'; fbEl.textContent = '';
      prizeEl.className = 'bb-prize'; prizeEl.textContent = '';
      box.classList.add('open'); return;
    }
    /* 同一盲盒始终抽同一道题（稳定），不同盲盒题目不同 */
    var qIndex = (blindTargetIdx * 7) % pool.length;
    var q = pool[qIndex];
    qEl.innerHTML = q.stem || '';
    maybeKatex(qEl);
    optsEl.innerHTML = '';
    fbEl.style.display = 'none'; fbEl.textContent = '';
    prizeEl.className = 'bb-prize'; prizeEl.textContent = '';

    /* ---- 选择题：渲染选项按钮 ---- */
    if (q.options && q.options.length) {
      q.options.forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'bb-opt-btn';
        b.innerHTML = '<span class="bb-opt-key">' + o[0] + '</span> <span class="bb-opt-txt">' + o[1] + '</span>';
        maybeKatex(b);
        b.addEventListener('click', function () {
          var correct = (o[0] === q.ans);
          showFeedback(correct, q.ans, q.fb || '');
          if (correct) awardPrize();
          Array.prototype.forEach.call(optsEl.querySelectorAll('.bb-opt-btn'), function (c) { c.disabled = true; if (c === b) c.classList.add(correct ? 'ok' : 'no'); else if (c.querySelector('.bb-opt-key').textContent === q.ans) c.classList.add('ok'); });
        });
        optsEl.appendChild(b);
      });
    /* ---- 填空/问答题：学生自评模式，不自动判定对错 ---- */
    } else {
      var wrap = document.createElement('div');
      wrap.className = 'bb-fill-wrap';
      if (opened) {
        wrap.innerHTML = '<div class="bb-fill-hint">🔓 你已经开启过这个盲盒，下面是参考答案与解析.</div>';
        optsEl.appendChild(wrap);
        showSelfCheck(q.ans || '', q.fb || '', true, null, null);
      } else {
        wrap.innerHTML = '<div class="bb-fill-hint">✏️ 这是一道填空题，请输入你的答案：</div>'
          + '<div class="bb-fill-row"><input type="text" id="bbFillInput" class="bb-fill-input" placeholder="在此输入答案..." autocomplete="off" spellcheck="false">'
          + '<button id="bbFillSubmit" class="bb-fill-submit">提交答案</button></div>';
        optsEl.appendChild(wrap);
        var inp = document.getElementById('bbFillInput');
        var btn = document.getElementById('bbFillSubmit');
        /* 回车提交 */
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') btn.click(); });
        /* 聚焦输入框（延迟到动画完成后） */
        setTimeout(function () { try { inp.focus(); } catch (e) {} }, 350);
        btn.addEventListener('click', function () {
          var val = inp.value.trim();
          if (!val) { inp.classList.add('shake'); setTimeout(function () { inp.classList.remove('shake'); }, 450); return; }
          btn.disabled = true; inp.disabled = true;
          /* 自评：显示参考答案与解析，由学生自己判断对错 */
          showSelfCheck(q.ans || '', q.fb || '', false, inp, btn);
        });
      }
    }
    box.classList.add('open');
  }
  /* 显示选择题答题反馈（客观题仍自动判定） */
  function showFeedback(correct, ans, fb) {
    var fbEl = document.getElementById('bbFb');
    fbEl.style.display = 'block';
    fbEl.innerHTML = (correct ? '✅ 答对了！' : '❌ 答错啦（正确答案 ' + ans + '）') + '<br>' + fb;
    maybeKatex(fbEl);
  }
  /* 显示填空/问答题自评区（学生自己对答案） */
  function showSelfCheck(ans, fb, alreadyOpened, inp, btn) {
    var fbEl = document.getElementById('bbFb');
    fbEl.style.display = 'block';
    var html = '<div class="bb-selfcheck-ans"><strong>参考答案</strong><span>' + renderSelfCheckText(ans) + '</span></div>'
      + '<div class="bb-selfcheck-fb"><strong>解析</strong><div>' + renderSelfCheckText(fb) + '</div></div>';
    if (!alreadyOpened) {
      html += '<div class="bb-selfcheck-btns"><button class="bb-selfcheck-btn ok" id="bbSelfOk">✅ 我做对了</button>'
        + '<button class="bb-selfcheck-btn no" id="bbSelfNo">❌ 还要再练</button></div>';
    } else {
      html += '<div class="bb-selfcheck-note">你已开启过这个盲盒，可随时回顾解析.</div>';
    }
    fbEl.innerHTML = html;
    if (!alreadyOpened && inp && btn) {
      document.getElementById('bbSelfOk').addEventListener('click', function () {
        this.disabled = true;
        var noBtn = document.getElementById('bbSelfNo');
        if (noBtn) noBtn.disabled = true;
        awardPrize();
      });
      document.getElementById('bbSelfNo').addEventListener('click', function () {
        fbEl.style.display = 'none'; fbEl.innerHTML = '';
        inp.disabled = false; btn.disabled = false;
        try { inp.focus(); } catch (e) {}
      });
    }
  }
  /* 简单 HTML 转义，避免答案里的 < > & 破坏结构 */
  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /* 颁奖 */
  var blindTargetCh = curCh, blindTargetIdx = 0;
  function awardPrize() {
    var prizes = ['🍀 好运符 ×2', '⚡ 能量 +5', '📜 老师手迹碎片', '🌟 称号碎片'];
    var prizeEl = document.getElementById('bbPrize');
    prizeEl.textContent = '🎁 恭喜获得：' + prizes[Math.floor(Math.random() * prizes.length)];
    prizeEl.className = 'bb-prize show';
    markBlindOpened(blindTargetCh, blindTargetIdx);
    /* 当前盲盒图标立即切换为路标 */
    var curBox = document.querySelector('.floor[data-ch="' + blindTargetCh + '"] .fm-blind[data-idx="' + blindTargetIdx + '"]');
    if (curBox) {
      var boxes = getBlindBoxes(blindTargetCh);
      curBox.textContent = boxes[blindTargetIdx].marker;
      curBox.classList.add('opened');
    }
  }
  /* 答案标准化（去空白、统一 LaTeX 格式） */
  function normalizeAns(s) {
    return s.replace(/\s+/g, '').replace(/\\{/g, '{').replace(/\\}/g, '}').toLowerCase();
  }
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
    // 点击气泡可立即打完当前句（再点不触发）
    textEl.onclick = function () {
      if (dlgTyping) finishTypeNow(textEl, sc.who === 's' ? '' : sc.text, function () {
        if (sc.who !== 's' && idx + 1 < D.lines.length) setTimeout(function () { playScene(D, idx + 1); }, 260);
        else if (sc.who !== 's') finishDialog(D);
      });
    };
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
            setTimeout(function () { finishDialog(D); }, 900);
          });
        });
        optsEl.appendChild(b);
      });
      return;
    }
    avaEl.innerHTML = teacherFace(sc.mood);
    typeInto(textEl, sc.text, function () {
      textEl.onclick = null;
      if (idx + 1 < D.lines.length) setTimeout(function () { playScene(D, idx + 1); }, 2200);
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
    dlgTyping = true;
    el.textContent = ''; var i = 0;
    dlgTimer = setInterval(function () {
      i++; el.textContent = text.slice(0, i);
      if (i >= text.length) { clearInterval(dlgTimer); dlgTimer = null; dlgTyping = false; if (done) done(); }
    }, 42);
  }
  function finishTypeNow(el, text, done) {
    if (dlgTimer) { clearInterval(dlgTimer); dlgTimer = null; }
    dlgTyping = false;
    el.textContent = text;
    if (done) done();
  }
  function closeDialog() {
    var textEl = document.getElementById('tbText'); if (textEl) textEl.onclick = null;
    document.getElementById('tbchat').classList.remove('open');
    if (dlgTimer) { clearInterval(dlgTimer); dlgTimer = null; }
    dlgBusy = false; dlgTyping = false;
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
        : '🔒 尚未获得第' + ch + '章的手迹……先通关这一层吧.<small style="display:block;color:var(--mut,#7a7785);margin-top:2px">' + CFG.chNames[ch] + ' · 未解锁</small>';
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
      { emoji: '🗝️', title: '传说，塔里困着一位老师', sub: '相传这册教材深处，藏着一座古老的「知识之塔」.多年前，一位老师为守护塔中的学识，被永远困在了塔顶——只有学会每一章的人，才能一层层点亮塔身，将他唤醒.' },
      { emoji: '⚡', title: '而你，就是那个攀登者', sub: '你不需要额外操作：在教材里「学完就练」、答对题目，对应层掌握度就会上升.达到 60%，整层点亮、尘封的难题被解开——塔在为你开路.' },
      { emoji: '🎁', title: '塔里藏着不少秘密', sub: '每层都藏着一口「迷雾盲盒」，答对开盒有惊喜；每登上一层，塔顶会传来老师的声音；集齐他的手迹，传说就能拼出离开塔的路.' }
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
            : '🎁 <span>每层 <b>🎁盲盒</b> 藏惊喜题目 · <b>🗣️老师的声音</b> 登层后传来 · <b>📜手迹</b> 集齐有彩蛋</span>') + '</div>'
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
        if (ch === curCh) {
          (function (c) { setTimeout(function () { openDialog(c); }, 900); })(ch);
        } else {
          toast('第 ' + ch + ' 章「' + CFG.chNames[ch] + '」已点亮，点左侧楼层即可前往');
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
      + '<div class="tbblind" id="tbblind"><div class="bb-card"><div class="bb-head"><span id="bbStem">🎁 迷雾盲盒</span><button class="x" id="bbClose">✕</button></div>'
      + '<div class="bb-q" id="bbQ"></div><div class="bb-opts" id="bbOpts"></div><div class="bb-fb" id="bbFb"></div><div class="bb-prize" id="bbPrize"></div></div></div>'
      + '<div class="tbblind" id="tbrelics"><div class="bb-card"><div class="bb-head"><span>📜 老师手迹 · 收集册</span><button class="x" id="tbrelicClose">✕</button></div><div id="tbrelicList"></div></div></div>'
      + '<div class="tb-help" id="tbhelp"><h3>🏰 知识之塔 · 这是什么？</h3>'
      + '<div class="th-row"><span class="ic">🗝️</span><span>传说这座塔困住了一位守护学识的老师.塔的每一层 = 教材的一章——你学得越深，点亮越多，他的声音就越清晰.</span></div>'
      + '<div class="th-row"><span class="ic">📈</span><span>在教材里「学完就练」、答对题目，对应章节的掌握度会上升；达到 60% 这一层点亮（✓ 绿），达到 80% 整层焕彩.</span></div>'
      + '<div class="th-row"><span class="ic">🎁</span><span>每层地图上都藏着一口「迷雾盲盒」：点它抽一道本章的惊喜题目，答对就有奖励（称号/能量/手迹…）.</span></div>'
      + '<div class="th-row"><span class="ic">🧙</span><span>每点亮一层，老师会来和你聊两句——内容都来自本章的知识点.登顶后还能收集他的「手迹」金句.</span></div>'
      + '<div class="th-row"><span class="ic">📱</span><span>手机端：塔收进右上角，不影响阅读；点楼层号可在各章之间查看自己的进度.</span></div>'
      + '<button class="th-close" id="tbhelpClose">知道了</button>'
      + '<button class="th-replay" id="tbhelpReplay">↻ 再看一次开篇引导</button></div>'
      + '<div class="tb-intro" id="tbintro"><div class="ti-card" id="tiCard"></div></div>'
      + '<div class="tb-big" id="tbbig"><div class="big-card"><div class="big-head"><span id="tbbigTitle">地图</span><button class="x" id="tbbigClose">✕</button></div><svg id="tbbigMap" xmlns="http://www.w3.org/2000/svg"></svg><div class="big-tip">🎁 点击金盒子抽题 · ⬆ 楼梯点亮后可登层</div></div></div>'
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

    pullTowerFromCloud();   // 本地 study_v1 已有塔数据则先回填（非阻塞）
    // 云端合并完成后由能量柱派发 study:cloud-synced 事件回填；并加 2s 兜底，防竞态
    document.addEventListener('study:cloud-synced', function () { pullTowerFromCloud(); render(); });
    setTimeout(function () { pullTowerFromCloud(); render(); }, 2000);
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
    },
    /* 接收 chapter-fog.js 飞来的能量球：让对应楼层条闪烁 + 雾层扫开 */
    pulseChapter: function (ch, weak) {
      var slot = document.getElementById('tower-slot');
      if (!slot) return;
      var floor = slot.querySelector('.floor[data-ch="' + ch + '"]');
      if (!floor) return;
      // 能量到达 → 把雾层向右侧扫开至当前掌握度
      try { floor.style.setProperty('--clear', Math.round(mastery(ch).rate * 100)); } catch (e) {}
      floor.classList.remove('pulse', 'sweep');
      void floor.offsetWidth;
      floor.classList.add('pulse', 'sweep');
      floor.classList.add(weak ? 'pulse-weak' : 'pulse-strong');
      setTimeout(function () {
        floor.classList.remove('pulse', 'sweep', 'pulse-weak', 'pulse-strong');
      }, 950);
    },
    /* ===== 章节封面「世界地图」迷你版接口（供 ux-enhancer 封面联动） ===== */
    currentChapter: function () {
      var pm = location.pathname.match(/ch(\d+)/i);
      return pm ? Math.min(+pm[1], CFG.total) : (typeof curCh !== 'undefined' ? curCh : 1);
    },
    chapterMapSVG: function (ch) {
      ch = ch || this.currentChapter();
      var lay = genLayout(ch);
      var m = mastery(ch);
      var vw = PAD * 2 + COLS * CELL, vh = PAD * 2 + ROWS * CELL;
      return '<svg class="tb-map cover-map-svg" viewBox="0 0 ' + vw + ' ' + vh +
        '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">' +
        mapSVG(lay, m) + '</svg>';
    },
    worldName: function (ch) { return chapterWorld(ch || this.currentChapter()).name; },
    chapterWorld: function (ch) { return chapterWorld(ch || this.currentChapter()); },
    chapterPalette: function (ch) {
      ch = ch || this.currentChapter();
      var W = chapterWorld(ch);
      return {
        ground: W.ground, sky: W.sky, water: W.water, name: W.name, base: W.base,
        decorVar: W.decorVar, accent: W.accent, particle: W.particle, ambient: W.ambient
      };
    },
    chapterName: function (ch) { return CFG.chNames[ch || this.currentChapter()]; },
    openBigMap: function () { if (typeof openBigMap === 'function') openBigMap(); },
    openBlind: function (ch, idx) { if (typeof openBlind === 'function') openBlind(ch, idx); }
  };

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', build); }
  else { build(); }
})();
