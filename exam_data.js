window.EXAM_QUESTIONS =
[
  {
    "id": "c1-hw-mc-1",
    "ch": 1,
    "src": "hw",
    "type": "mc",
    "no": 1,
    "stem": "设 \\(\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=m\\)，则 \\(\\begin{vmatrix}a&2b\\\\c&2d\\end{vmatrix}=\\)（　）",
    "options": [
      [
        "A",
        "\\(2m\\)"
      ],
      [
        "B",
        "\\(m\\)"
      ],
      [
        "C",
        "\\(-2m\\)"
      ],
      [
        "D",
        "\\(4m\\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：由二阶行列式定义，\\(\\begin{vmatrix}a&2b\\\\c&2d\\end{vmatrix}=a\\cdot 2d-2b\\cdot c=2(ad-bc)=2\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=2m\\)。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s11"
  },
  {
    "id": "c1-hw-mc-2",
    "ch": 1,
    "src": "hw",
    "type": "mc",
    "no": 2,
    "stem": "设 \\(A_{ij}\\) 为 \\(n\\) 阶行列式 \\(D=|a_{ij}|\\) 中元素 \\(a_{ij}\\) 的代数余子式，则下列各式中错误的是（　）",
    "options": [
      [
        "A",
        "\\(\\displaystyle\\sum_{k=1}^n a_{ik}A_{ik}=D\\)"
      ],
      [
        "B",
        "\\(\\displaystyle\\sum_{k=1}^n a_{ik}A_{jk}=0\\;(i\\neq j)\\)"
      ],
      [
        "C",
        "\\(\\displaystyle\\sum_{k=1}^n a_{kj}A_{kj}=D\\)"
      ],
      [
        "D",
        "\\(\\displaystyle\\sum_{k=1}^n a_{ik}A_{jk}=D\\;(i\\neq j)\\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：按行（列）展开定理：某行（列）元素与其自身代数余子式乘积之和等于行列式的值，与异行（列）代数余子式乘积之和为\\(0\\)。故A、B、C正确；而D中\\(i\\neq j\\)时应有\\(\\sum_{k=1}^n a_{ik}A_{jk}=0\\)，不等于\\(D\\)。故选（D）。",
    "pts": 4,
    "diff": 1,
    "sec": "s13"
  },
  {
    "id": "c1-hw-mc-3",
    "ch": 1,
    "src": "hw",
    "type": "mc",
    "no": 3,
    "stem": "把 \\(n\\) 阶行列式 \\(D\\) 的每个元素都乘以 \\(-1\\)，所得行列式等于（　）",
    "options": [
      [
        "A",
        "\\(-D\\)"
      ],
      [
        "B",
        "\\(D\\)"
      ],
      [
        "C",
        "\\((-1)^nD\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：将行列式每个元素乘以\\(-1\\)，等价于每一行都乘以\\(-1\\)。共\\(n\\)行，故新行列式为\\((-1)^nD\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s11"
  },
  {
    "id": "c1-hw-mc-4",
    "ch": 1,
    "src": "hw",
    "type": "mc",
    "no": 4,
    "stem": "方程 \\(\\begin{vmatrix}x&1&1\\\\1&x&1\\\\1&1&x\\end{vmatrix}=0\\) 的互异实根的个数为（　）",
    "options": [
      [
        "A",
        "1"
      ],
      [
        "B",
        "2"
      ],
      [
        "C",
        "3"
      ],
      [
        "D",
        "0"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(\\begin{vmatrix}x&1&1\\\\1&x&1\\\\1&1&x\\end{vmatrix}=(x+2)(x-1)^2\\)（将各列加到第1列后提取公因子\\(x+2\\)再展开）。互异实根为\\(x=1\\)与\\(x=-2\\)，共\\(2\\)个。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s11"
  },
  {
    "id": "c1-hw-fill-1",
    "ch": 1,
    "src": "hw",
    "type": "fill",
    "no": 1,
    "stem": "\\(\\begin{vmatrix}1&2\\\\3&4\\end{vmatrix}=\\) ________。",
    "options": null,
    "ans": null,
    "fb": "解：\\(\\begin{vmatrix}1&2\\\\3&4\\end{vmatrix}=1\\times4-2\\times3=-2\\)。故应填 \\(-2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-fill-2",
    "ch": 1,
    "src": "hw",
    "type": "fill",
    "no": 2,
    "stem": "\\(\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&9\\end{vmatrix}=\\) ________。",
    "options": null,
    "ans": null,
    "fb": "解：这是范德蒙行列式，\\(\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&9\\end{vmatrix}=(2-1)(3-1)(3-2)=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-fill-3",
    "ch": 1,
    "src": "hw",
    "type": "fill",
    "no": 3,
    "stem": "上三角行列式 \\(\\begin{vmatrix}2&7&5\\\\0&3&9\\\\0&0&4\\end{vmatrix}=\\) ________。",
    "options": null,
    "ans": null,
    "fb": "解：上三角行列式等于主对角线元素之积，\\(\\begin{vmatrix}2&7&5\\\\0&3&9\\\\0&0&4\\end{vmatrix}=2\\times3\\times4=24\\)。故应填 \\(24\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-fill-4",
    "ch": 1,
    "src": "hw",
    "type": "fill",
    "no": 4,
    "stem": "设三阶行列式 \\(D=3\\)。先把 \\(D\\) 的第 2 行乘以 \\(2\\)，再交换第 1、3 行，所得行列式的值为 ________。",
    "options": null,
    "ans": null,
    "fb": "解：第2行乘以\\(2\\)后行列式变为\\(3\\times2=6\\)；再交换第1、3行，行列式变号，得\\(-6\\)。故应填 \\(-6\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-calc-1",
    "ch": 1,
    "src": "hw",
    "type": "calc",
    "no": 1,
    "stem": "用化三角形法计算 \\(\\begin{vmatrix}1&2&3\\\\2&3&1\\\\3&1&2\\end{vmatrix}\\)。",
    "options": null,
    "ans": null,
    "fb": "解：用化三角形法计算。\n1) 将第 \\(2,3\\) 行减去第 \\(1\\) 行的倍数：\\(r_2\\leftarrow r_2-2r_1,\\ r_3\\leftarrow r_3-3r_1\\)，得\n\\[\n\\begin{vmatrix}1&2&3\\\\0&-1&-5\\\\0&-5&-7\\end{vmatrix}.\n\\]\n2) 再将第 \\(3\\) 行减去第 \\(2\\) 行的 \\(5\\) 倍：\\(r_3\\leftarrow r_3-5r_2\\)，得\n\\[\n\\begin{vmatrix}1&2&3\\\\0&-1&-5\\\\0&0&18\\end{vmatrix}.\n\\]\n3) 上三角行列式等于主对角线元素之积：\\(1\\times(-1)\\times18=-18\\)。\n故原行列式的值为 \\(-18\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-calc-2",
    "ch": 1,
    "src": "hw",
    "type": "calc",
    "no": 2,
    "stem": "计算 \\(\\begin{vmatrix}1&1&1&1\\\\ 1&2&3&4\\\\ 1&4&9&16\\\\ 1&8&27&64\\end{vmatrix}\\)。",
    "options": null,
    "ans": null,
    "fb": "解：该行列式为范德蒙德行列式，第 \\(j\\) 列对应参数 \\(x_j=1,2,3,4\\)。\n1) 范德蒙德行列式公式为\n\\[\n\\begin{vmatrix}1&1&1&1\\\\1&x_2&x_3&x_4\\\\1&x_2^2&x_3^2&x_4^2\\\\1&x_2^3&x_3^3&x_4^3\\end{vmatrix}\n=\\prod_{1\\le i<j\\le4}(x_j-x_i).\n\\]\n2) 代入 \\(x_1=1,x_2=2,x_3=3,x_4=4\\) 得\n\\[\nD=(2-1)(3-1)(4-1)(3-2)(4-2)(4-3)=1\\cdot2\\cdot3\\cdot1\\cdot2\\cdot1=12.\n\\]\n故原行列式的值为 \\(12\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-hw-calc-3",
    "ch": 1,
    "src": "hw",
    "type": "calc",
    "no": 3,
    "stem": "设 \\(D=\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&10\\end{vmatrix}\\)，求 \\(A_{31}+A_{32}+A_{33}\\)。",
    "options": null,
    "ans": null,
    "fb": "解：由代数余子式的性质，将原行列式第 \\(3\\) 行元素全部换为 \\(1\\) 后，按第 \\(3\\) 行展开即得所求：\n\\[\nA_{31}+A_{32}+A_{33}=\n\\begin{vmatrix}1&2&3\\\\4&5&6\\\\1&1&1\\end{vmatrix}.\n\\]\n1) 计算该行列式：\n\\[\n\\begin{vmatrix}1&2&3\\\\4&5&6\\\\1&1&1\\end{vmatrix}\n=1\\cdot(5\\cdot1-6\\cdot1)-2\\cdot(4\\cdot1-6\\cdot1)+3\\cdot(4\\cdot1-5\\cdot1)\n=1\\cdot(-1)-2\\cdot(-2)+3\\cdot(-1)=-1+4-3=0.\n\\]\n故 \\(A_{31}+A_{32}+A_{33}=0\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-hw-calc-4",
    "ch": 1,
    "src": "hw",
    "type": "calc",
    "no": 4,
    "stem": "计算 \\(n\\) 阶行列式 \\(D_n=\\begin{vmatrix}x&a&\\cdots&a\\\\[6pt] a&x&\\cdots&a\\\\[6pt] \\vdots&\\vdots&\\ddots&\\vdots\\\\[6pt] a&a&\\cdots&x\\end{vmatrix}\\)（每行元素之和相同）。",
    "options": null,
    "ans": null,
    "fb": "解：该行列式每行元素之和均为 \\(x+(n-1)a\\)。\n1) 将第 \\(2,3,\\dots,n\\) 列都加到第 \\(1\\) 列，提出公因子 \\(x+(n-1)a\\)：\n\\[\nD_n=[x+(n-1)a]\n\\begin{vmatrix}1&a&\\cdots&a\\\\1&x&\\cdots&a\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\1&a&\\cdots&x\\end{vmatrix}.\n\\]\n2) 从第 \\(2,3,\\dots,n\\) 行分别减去第 \\(1\\) 行，得\n\\[\nD_n=[x+(n-1)a]\n\\begin{vmatrix}1&a&\\cdots&a\\\\0&x-a&\\cdots&0\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\0&0&\\cdots&x-a\\end{vmatrix}.\n\\]\n3) 右端为上三角行列式，其值为 \\((x-a)^{n-1}\\)。\n故 \\(D_n=[x+(n-1)a](x-a)^{n-1}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-hw-calc-5",
    "ch": 1,
    "src": "hw",
    "type": "calc",
    "no": 5,
    "stem": "当 \\(k\\) 取何值时，齐次方程组 \\(\\begin{cases}kx_1+x_2-x_3=0,\\\\ x_1+kx_2-x_3=0,\\\\ 2x_1-x_2+x_3=0\\end{cases}\\) 可能有非零解？",
    "options": null,
    "ans": null,
    "fb": "解：齐次线性方程组有非零解当且仅当其系数行列式为零。\n系数矩阵为\n\\[\nA=\\begin{bmatrix}k&1&-1\\\\1&k&-1\\\\2&-1&1\\end{bmatrix}.\n\\]\n1) 计算行列式：\n\\[\n\\begin{aligned}\n|A|&=k\\bigl(k\\cdot1-(-1)(-1)\\bigr)-1\\bigl(1\\cdot1-(-1)\\cdot2\\bigr)+(-1)\\bigl(1\\cdot(-1)-k\\cdot2\\bigr)\\\\\n&=k(k-1)-3+(1+2k)=k^2+k-2.\n\\end{aligned}\n\\]\n2) 令 \\(|A|=0\\)，即 \\(k^2+k-2=(k-1)(k+2)=0\\)。\n故当 \\(k=1\\) 或 \\(k=-2\\) 时，方程组可能有非零解。",
    "pts": 6,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-hw-proof-1",
    "ch": 1,
    "src": "hw",
    "type": "proof",
    "no": 1,
    "stem": "证明：\\(\\begin{vmatrix}a&b\\\\ c+e&d+f\\end{vmatrix}=\\begin{vmatrix}a&b\\\\ c&d\\end{vmatrix}+\\begin{vmatrix}a&b\\\\ e&f\\end{vmatrix}\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：按第二行展开左边行列式：\n\\[\n\\begin{vmatrix}a&b\\\\c+e&d+f\\end{vmatrix}\n=a(d+f)-b(c+e)=ad+af-bc-be.\n\\]\n而\n\\[\n\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}+\\begin{vmatrix}a&b\\\\e&f\\end{vmatrix}\n=(ad-bc)+(af-be)=ad+af-bc-be.\n\\]\n左右两边相等，故结论成立。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s11"
  },
  {
    "id": "c1-hw-proof-2",
    "ch": 1,
    "src": "hw",
    "type": "proof",
    "no": 2,
    "stem": "证明：只有次对角线（自右上至左下）上元素 \\(a_{1n},a_{2,n-1},\\dots,a_{n1}\\) 可能非零的 \\(n\\) 阶行列式，其值为 \\((-1)^{\\frac{n(n-1)}2}\\,a_{1n}a_{2,n-1}\\cdots a_{n1}\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：把行列式的行序整个颠倒——将第 \\(1\\) 行与第 \\(n\\) 行对换、第 \\(2\\) 行与第 \\(n-1\\) 行对换……共需 \\(\\lfloor n/2\\rfloor\\) 次对换。由性质 2，每次对换变号一次，故所得行列式等于原行列式乘 \\((-1)^{\\lfloor n/2\\rfloor}\\)。\\\\ 颠倒行序后，原来位于次对角线上的元素 \\(a_{1n},a_{2,n-1},\\dots,a_{n1}\\) 恰好排到了主对角线上（第 \\(i\\) 行变为原第 \\(n+1-i\\) 行，其非零元在第 \\(i\\) 列），得到一个下三角行列式，其值为主对角元之积 \\(a_{1n}a_{2,n-1}\\cdots a_{n1}\\)。\\\\ 于是 \\(D=(-1)^{\\lfloor n/2\\rfloor}a_{1n}a_{2,n-1}\\cdots a_{n1}\\)。最后验证符号：\\(\\lfloor n/2\\rfloor\\) 与 \\(\\frac{n(n-1)}2\\) 奇偶性相同（对 \\(n=4k,4k+1\\) 二者皆偶，对 \\(n=4k+2,4k+3\\) 二者皆奇），故 \\(D=(-1)^{\\frac{n(n-1)}2}a_{1n}a_{2,n-1}\\cdots a_{n1}\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s11"
  },
  {
    "id": "c1-hw-proof-3",
    "ch": 1,
    "src": "hw",
    "type": "proof",
    "no": 3,
    "stem": "设 \\(a,b,c\\) 互不相同，证明：三点 \\((a,a^2),(b,b^2),(c,c^2)\\) 不共线。",
    "options": null,
    "ans": null,
    "fb": "证明：三点 \\((a,a^2),(b,b^2),(c,c^2)\\) 共线的充要条件是面积为零，即行列式\n\\[\n\\Delta=\\begin{vmatrix}a&a^2&1\\\\b&b^2&1\\\\c&c^2&1\\end{vmatrix}=0.\n\\]\n计算：\n\\[\n\\Delta=a(b^2-c^2)-a^2(b-c)+(bc^2-b^2c)=(b-c)\\bigl[a(b+c)-a^2-bc\\bigr].\n\\]\n进一步\n\\[\na(b+c)-a^2-bc=(ab-a^2)+(ac-bc)=a(b-a)+c(a-b)=(b-a)(a-c).\n\\]\n故\n\\[\n\\Delta=(b-c)(b-a)(a-c)=-(a-b)(a-c)(b-c).\n\\]\n因 \\(a,b,c\\) 互不相同，故 \\((a-b)(a-c)(b-c)\\neq0\\)，从而 \\(\\Delta\\neq0\\)，三点不共线。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-1",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 1,
    "stem": "1. 行列式 \\(\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{vmatrix}=\\)（　）",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(1\\)"
      ],
      [
        "C",
        "\\(-3\\)"
      ],
      [
        "D",
        "\\(3\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 第 3 行 − 第 2 行 = 第 2 行 − 第 1 行 = \\((3,3,3)\\)，三行线性相关，行列式为 0。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-2",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 2,
    "stem": "2. 若 \\(\\begin{vmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\\end{vmatrix}=2\\)，则 \\(\\begin{vmatrix}2a_{11}&2a_{12}&2a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\\end{vmatrix}=\\)（　）",
    "options": [
      [
        "A",
        "\\(2\\)"
      ],
      [
        "B",
        "\\(4\\)"
      ],
      [
        "C",
        "\\(6\\)"
      ],
      [
        "D",
        "\\(8\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 仅第 1 行有公因子 2，由性质 3 提出一次，得 \\(2\\times2=4\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-test-mc-3",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 3,
    "stem": "3. 行列式 \\(\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&9\\end{vmatrix}=\\)（　）",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(1\\)"
      ],
      [
        "C",
        "\\(2\\)"
      ],
      [
        "D",
        "\\(6\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 范德蒙德行列式：\\((2-1)(3-1)(3-2)=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-4",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 4,
    "stem": "4. 设 \\(D=\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{vmatrix}\\)，则 \\(A_{11}+A_{12}+A_{13}=\\)（　）",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(1\\)"
      ],
      [
        "C",
        "\\(2\\)"
      ],
      [
        "D",
        "\\(-3\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 该和等于把 \\(D\\) 的第 1 行换成 \\((1,1,1)\\) 后的行列式；新行列式三行仍成等差，故值为 0。",
    "pts": 6,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-test-mc-5",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 5,
    "stem": "5. 设 \\(A\\) 为 3 阶方阵，且 \\(|A|=-2\\)，则 \\(|2A|=\\)（　）",
    "options": [
      [
        "A",
        "\\(-4\\)"
      ],
      [
        "B",
        "\\(-8\\)"
      ],
      [
        "C",
        "\\(-16\\)"
      ],
      [
        "D",
        "\\(8\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ n 阶矩阵每行可提一个 2，共提 \\(2^3=8\\) 次，故 \\(|2A|=2^3|A|=8\\times(-2)=-16\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-6",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 6,
    "stem": "6. 行列式 \\(\\begin{vmatrix}1&0&2&0\\\\0&1&0&2\\\\2&0&1&0\\\\0&2&0&1\\end{vmatrix}=\\)（　）",
    "options": [
      [
        "A",
        "\\(-9\\)"
      ],
      [
        "B",
        "\\(-3\\)"
      ],
      [
        "C",
        "\\(9\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 作 \\(r_1-2r_3,\\;r_2-2r_4\\) 或直接按分块结构：\\(\\begin{vmatrix}1&2\\\\2&1\\end{vmatrix}\\begin{vmatrix}1&2\\\\2&1\\end{vmatrix}=(-3)^2=9\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-7",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 7,
    "stem": "7. 上三角行列式 \\(\\begin{vmatrix}2&7&5\\\\0&3&9\\\\0&0&4\\end{vmatrix}=\\)？",
    "options": [
      [
        "A",
        "\\(14\\)"
      ],
      [
        "B",
        "\\(24\\)"
      ],
      [
        "C",
        "\\(0\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 对角元之积 \\(2\\times3\\times4=24\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-8",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 8,
    "stem": "8. 若 \\(\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&k\\end{vmatrix}=0\\)，则 \\(k=\\)？",
    "options": [
      [
        "A",
        "\\(8\\)"
      ],
      [
        "B",
        "\\(9\\)"
      ],
      [
        "C",
        "\\(10\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 按第三行展开：\\(7\\begin{vmatrix}2&3\\\\5&6\\end{vmatrix}-8\\begin{vmatrix}1&3\\\\4&6\\end{vmatrix}+k\\begin{vmatrix}1&2\\\\4&5\\end{vmatrix}=-3k+27\\)，令其为 0 得 \\(k=9\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-9",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 9,
    "stem": "9. 设 \\(A\\) 为 3 阶方阵，且 \\(|A|=3\\)，则 \\(|-2A|=\\)？",
    "options": [
      [
        "A",
        "\\(-24\\)"
      ],
      [
        "B",
        "\\(24\\)"
      ],
      [
        "C",
        "\\(-6\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 3 阶矩阵每行可提一个 \\(-2\\)，共提 \\((-2)^3=-8\\) 次，故 \\(|-2A|=(-2)^3|A|=-8\\times3=-24\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-10",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 10,
    "stem": "10. \\(n\\) 个方程 \\(n\\) 个未知量的\\textbf{齐次}线性方程组存在非零解，则其系数行列式 \\(D\\) 必满足？",
    "options": [
      [
        "A",
        "\\(D\\neq0\\)"
      ],
      [
        "B",
        "\\(D=0\\)"
      ],
      [
        "C",
        "\\(D>0\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定理 1.3 的推论：\\(D\\neq0\\) 时只有零解，故有非零解必有 \\(D=0\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-test-mc-11",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 11,
    "stem": "11. （2016 · 考研数学一 改编）行列式 \\(\\begin{vmatrix}\\lambda&-1&0&0\\\\ 0&\\lambda&-1&0\\\\ 0&0&\\lambda&-1\\\\ 4&3&2&\\lambda+1\\end{vmatrix}\\) 的常数项为？",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(-4\\)"
      ],
      [
        "C",
        "\\(4\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 该行列式 \\(=\\lambda^4+\\lambda^3+2\\lambda^2+3\\lambda+4\\)，常数项为 4；也可令 \\(\\lambda=0\\) 直接展开验证。",
    "pts": 7,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-test-mc-12",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 12,
    "stem": "12. （2014 · 考研数学一）行列式 \\(\\begin{vmatrix}0&a&b&0\\\\ a&0&0&b\\\\ 0&c&d&0\\\\ c&0&0&d\\end{vmatrix}=\\)？",
    "options": [
      [
        "A",
        "\\((ad-bc)^2\\)"
      ],
      [
        "B",
        "\\(-(ad-bc)^2\\)"
      ],
      [
        "C",
        "\\(a^2d^2-b^2c^2\\)"
      ],
      [
        "D",
        "\\(b^2c^2-a^2d^2\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 按第一列展开得 \\(-ad(ad-bc)+bc(ad-bc)=-(ad-bc)^2\\)。详见“考研选讲”选讲 1。",
    "pts": 7,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-13",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 13,
    "stem": "13. 下列命题中正确的是？",
    "options": [
      [
        "A",
        "\\(|A+B|=|A|+|B|\\)"
      ],
      [
        "B",
        "\\(|kA|=k|A|\\)"
      ],
      [
        "C",
        "\\(|AB|=|A|\\cdot|B|\\)"
      ],
      [
        "D",
        "\\(|A^{T}|=-|A|\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 行列式乘法公式 \\(|AB|=|A||B|\\) 正确；\\(|A+B|\\) 一般不可拆，\\(|kA|=k^n|A|\\)，\\(|A^T|=|A|\\)。",
    "pts": 7,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-test-mc-14",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 14,
    "stem": "14. 齐次方程组 \\(\\begin{cases}kx+y-z=0,\\\\x+ky-z=0,\\\\2x-y+z=0\\end{cases}\\) 有非零解，则 \\(k=\\)？",
    "options": [
      [
        "A",
        "\\(-2\\) 或 \\(1\\)"
      ],
      [
        "B",
        "\\(2\\) 或 \\(-1\\)"
      ],
      [
        "C",
        "\\(0\\) 或 \\(1\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 系数行列式 \\(=(k+2)(k-1)\\)，令其为 0 得 \\(k=-2\\) 或 \\(k=1\\)。",
    "pts": 7,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-test-mc-15",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 15,
    "stem": "15. 三角形顶点为 \\((0,0),(2,0),(0,3)\\)，其面积（由定理 1.4）为？",
    "options": [
      [
        "A",
        "\\(3\\)"
      ],
      [
        "B",
        "\\(6\\)"
      ],
      [
        "C",
        "\\(1.5\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(S=\\tfrac12|2\\times3-0\\times0|=3\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s15"
  },
  {
    "id": "c1-test-mc-16",
    "ch": 1,
    "src": "test",
    "type": "mc",
    "no": 16,
    "stem": "16. 若 \\(n\\) 阶行列式 \\(D\\) 的每一行元素之和都等于 \\(0\\)，则？",
    "options": [
      [
        "A",
        "必有 \\(D=0\\)"
      ],
      [
        "B",
        "必有 \\(D\\neq0\\)"
      ],
      [
        "C",
        "无法确定"
      ]
    ],
    "ans": "A",
    "fb": "✓ 把各列加到第 1 列，第 1 列全为 0，故 \\(D=0\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c2-hw-mc-1",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 1,
    "stem": "矩阵 \\(A=B\\) 的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(A,B\\) 同型"
      ],
      [
        "B",
        "\\(A,B\\) 同阶"
      ],
      [
        "C",
        "对应元素相等"
      ],
      [
        "D",
        "\\(A,B\\) 同型且对应元素全相等"
      ]
    ],
    "ans": "D",
    "fb": "矩阵相等的充要条件是两矩阵同型（行数、列数分别相同）且对应元素全相等；仅同型或仅对应元素相等都不充分。故选（D）。",
    "pts": 4,
    "diff": 1,
    "sec": "s21"
  },
  {
    "id": "c2-hw-mc-2",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 2,
    "stem": "若 \\(A\\) 为 \\(2\\times3\\)，\\(B\\) 为 \\(3\\times2\\)，则 \\(AB\\) 是（　）。",
    "options": [
      [
        "A",
        "\\(3\\times2\\)"
      ],
      [
        "B",
        "\\(2\\times3\\)"
      ],
      [
        "C",
        "\\(3\\times3\\)"
      ],
      [
        "D",
        "\\(2\\times2\\)"
      ]
    ],
    "ans": "D",
    "fb": "设 \\(A\\) 为 \\(2\\times3\\) 矩阵、\\(B\\) 为 \\(3\\times2\\) 矩阵，乘积 \\(AB\\) 的行数等于左因子 \\(A\\) 的行数 2，列数等于右因子 \\(B\\) 的列数 2，故 \\(AB\\) 为 \\(2\\times2\\) 矩阵。故选（D）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-3",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 3,
    "stem": "设 \\(A,B,C\\) 为 \\(n\\) 阶方阵，则下列等式中\\textbf{不一定成立}的是（　）。",
    "options": [
      [
        "A",
        "\\(A+B=B+A\\)"
      ],
      [
        "B",
        "\\(AB=BA\\)"
      ],
      [
        "C",
        "\\((AB)C=A(BC)\\)"
      ],
      [
        "D",
        "\\(A(B+C)=AB+AC\\)"
      ]
    ],
    "ans": "B",
    "fb": "矩阵加法满足交换律 \\(A+B=B+A\\)，乘法满足结合律 \\((AB)C=A(BC)\\) 与左分配律 \\(A(B+C)=AB+AC\\)，但一般不满足交换律，即 \\(AB=BA\\) 不一定成立。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-4",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 4,
    "stem": "若 \\(AB=O\\)，则（　）。",
    "options": [
      [
        "A",
        "必有 \\(A=O\\)"
      ],
      [
        "B",
        "必有 \\(B=O\\)"
      ],
      [
        "C",
        "不能推出 \\(A=O\\) 或 \\(B=O\\)"
      ],
      [
        "D",
        "必对称"
      ]
    ],
    "ans": "C",
    "fb": "由 \\(AB=O\\) 不能推出 \\(A=O\\) 或 \\(B=O\\)，例如非零矩阵 \\(\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\) 与 \\(\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\) 相乘为零矩阵，故不能推出 \\(A=O\\) 或 \\(B=O\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-5",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 5,
    "stem": "（考研真题）设 \\(A\\) 为 \\(n\\) 阶方阵，则 \\(|kA|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(k|A|\\)"
      ],
      [
        "B",
        "\\(k^n|A|\\)"
      ],
      [
        "C",
        "\\(|A|^k\\)"
      ],
      [
        "D",
        "\\(k|A|^n\\)"
      ]
    ],
    "ans": "B",
    "fb": "用数 \\(k\\) 乘 \\(n\\) 阶方阵 \\(A\\)，等于把 \\(A\\) 的每个元素都乘以 \\(k\\)，按行提公因数时每行可提一个 \\(k\\)，共 \\(n\\) 行，故 \\(|kA|=k^n|A|\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-6",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 6,
    "stem": "（考研真题）若 \\(A,B\\) 均可逆，则 \\((AB)^{-1}=\\)（　）。",
    "options": [
      [
        "A",
        "\\(B^{-1}A^{-1}\\)"
      ],
      [
        "B",
        "\\(A^{-1}B^{-1}\\)"
      ],
      [
        "C",
        "\\(AB^{-1}\\)"
      ],
      [
        "D",
        "\\((BA)^{-1}\\)"
      ]
    ],
    "ans": "A",
    "fb": "由 \\((AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=E\\)，且 \\(A,B\\) 均可逆，知 \\((AB)^{-1}=B^{-1}A^{-1}\\)。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s23"
  },
  {
    "id": "c2-hw-mc-7",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 7,
    "stem": "若 \\(A^T=-A\\)，则 \\(A\\) 是（　）。",
    "options": [
      [
        "A",
        "对称阵"
      ],
      [
        "B",
        "反对称阵"
      ],
      [
        "C",
        "数量阵"
      ],
      [
        "D",
        "单位阵"
      ]
    ],
    "ans": "B",
    "fb": "满足 \\(A^T=-A\\) 的矩阵称为反对称阵（斜对称阵）；满足 \\(A^T=A\\) 的才是对称阵。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s21"
  },
  {
    "id": "c2-hw-mc-8",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 8,
    "stem": "（考研真题）下列命题正确的是（　）。",
    "options": [
      [
        "A",
        "初等矩阵都不可逆"
      ],
      [
        "B",
        "初等矩阵都是单位阵"
      ],
      [
        "C",
        "初等矩阵乘积一定为 \\(O\\)"
      ],
      [
        "D",
        "初等矩阵都可逆，且逆仍为同类初等矩阵"
      ]
    ],
    "ans": "D",
    "fb": "初等矩阵是由单位阵经一次初等变换得到的矩阵，均为可逆矩阵，且其逆矩阵仍是同类型的初等矩阵。故选（D）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-9",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 9,
    "stem": "（考研真题）设 \\(A,B\\) 为 \\(n\\) 阶且 \\(AB=O\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(R(A)+R(B)\\le n\\)"
      ],
      [
        "B",
        "\\(R(A)+R(B)\\ge n\\)"
      ],
      [
        "C",
        "\\(R(A)R(B)=n\\)"
      ],
      [
        "D",
        "\\(R(A)=R(B)\\)"
      ]
    ],
    "ans": "A",
    "fb": "由 \\(AB=O\\) 知 \\(B\\) 的每一列都是齐次线性方程组 \\(Ax=0\\) 的解，故 \\(R(B)\\le n-R(A)\\)，即 \\(R(A)+R(B)\\le n\\)（Frobenius 不等式之特例）。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s22"
  },
  {
    "id": "c2-hw-mc-10",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 10,
    "stem": "（考研真题）设 \\(A\\) 为 \\(n\\) 阶可逆阵，则 \\(R(A^*)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(n-1\\)"
      ],
      [
        "C",
        "\\(1\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "A",
    "fb": "因 \\(A\\) 可逆，故 \\(A^*=|A|A^{-1}\\) 也可逆，所以 \\(R(A^*)=n\\)。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s26"
  },
  {
    "id": "c2-hw-mc-11",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 11,
    "stem": "对矩阵 \\(A\\) 左乘初等矩阵，等价于对 \\(A\\) 作（　）。",
    "options": [
      [
        "A",
        "初等行变换"
      ],
      [
        "B",
        "初等列变换"
      ],
      [
        "C",
        "转置"
      ],
      [
        "D",
        "求逆"
      ]
    ],
    "ans": "A",
    "fb": "对矩阵 \\(A\\) 左乘初等矩阵等价于对 \\(A\\) 作相应的初等行变换；右乘初等矩阵才等价于初等列变换。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s25"
  },
  {
    "id": "c2-hw-mc-12",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 12,
    "stem": "分块对角矩阵 \\(A=\\operatorname{diag}(A_1,A_2)\\) 的行列式 \\(|A|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(|A_1|+|A_2|\\)"
      ],
      [
        "B",
        "\\(|A_1||A_2|\\)"
      ],
      [
        "C",
        "\\(|A_1|^{|A_2|}\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "B",
    "fb": "分块对角矩阵 \\(A=\\operatorname{diag}(A_1,A_2)\\) 的行列式等于各对角块行列式的乘积，即 \\(|A|=|A_1||A_2|\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s24"
  },
  {
    "id": "c2-hw-mc-13",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 13,
    "stem": "行最简形矩阵的特征是（　）。",
    "options": [
      [
        "A",
        "非零行首元为 1 且该列其余为 0"
      ],
      [
        "B",
        "必须是方阵"
      ],
      [
        "C",
        "主对角元全为 1"
      ],
      [
        "D",
        "所有元素非负"
      ]
    ],
    "ans": "A",
    "fb": "行最简形矩阵要求每个非零行的首元为 1，且该首元所在列的其他元素全为 0；它不必是方阵，主对角元也不必全为 1。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s25"
  },
  {
    "id": "c2-hw-mc-14",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 14,
    "stem": "（考研真题）用初等行变换求逆时，构造的增广矩阵是（　）。",
    "options": [
      [
        "A",
        "\\((A\\mid A)\\)"
      ],
      [
        "B",
        "\\((E\\mid A)\\)"
      ],
      [
        "C",
        "\\((A\\mid E)\\)"
      ],
      [
        "D",
        "\\((E\\mid E)\\)"
      ]
    ],
    "ans": "C",
    "fb": "用初等行变换求逆时，将 \\(A\\) 与同阶单位阵 \\(E\\) 拼成增广矩阵 \\((A\\mid E)\\)，作初等行变换化为 \\((E\\mid A^{-1})\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s25"
  },
  {
    "id": "c2-hw-mc-15",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 15,
    "stem": "设 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix}\\)，则 \\(A^*=\\)（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}1&-2\\\\[6pt]-3&4\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}4&2\\\\[6pt]3&1\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}4&-2\\\\[6pt]-3&1\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}-4&2\\\\[6pt]3&-1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "C",
    "fb": "对二阶矩阵 \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\)，其伴随矩阵 \\(A^*=\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)。代入 \\(a=1,b=2,c=3,d=4\\) 得 \\(A^*=\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s23"
  },
  {
    "id": "c2-hw-mc-16",
    "ch": 2,
    "src": "hw",
    "type": "mc",
    "no": 16,
    "stem": "（考研真题）若 \\(A^2=A\\) 且 \\(A\\neq E\\)，则 \\(R(A)+R(A-E)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(n-1\\)"
      ],
      [
        "C",
        "\\(2n\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "A",
    "fb": "由 \\(A^2=A\\) 得 \\(A(A-E)=O\\)，故 \\(R(A)+R(A-E)\\le n\\)；又 \\(A+(E-A)=E\\)，故 \\(R(A)+R(E-A)\\ge R(E)=n\\)，而 \\(R(E-A)=R(A-E)\\)，于是 \\(R(A)+R(A-E)=n\\)。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s26"
  },
  {
    "id": "c2-hw-fill-1",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 1,
    "stem": "若 \\(A=(a_{ij})_{2\\times3}\\)，\\(B=(b_{ij})_{2\\times3}\\)，则 \\(A+B\\) 的第 \\((i,j)\\) 元为 ______。",
    "options": null,
    "ans": "\\(a_{ij}+b_{ij}\\)",
    "fb": "由矩阵加法的定义，两个同型矩阵相加即对应元素相加。故应填 \\(a_{ij}+b_{ij}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-fill-2",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 2,
    "stem": "设 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix}\\)，则 \\(2A-3E=\\) ______。",
    "options": null,
    "ans": "\\(\\begin{pmatrix}-1&4\\\\[6pt]6&5\\end{pmatrix}\\)",
    "fb": "计算 \\(2A=\\begin{pmatrix}2&4\\\\6&8\\end{pmatrix}\\)，单位阵 \\(3E=\\begin{pmatrix}3&0\\\\0&3\\end{pmatrix}\\)，相减即得。故应填 \\(\\begin{pmatrix}-1&4\\\\[6pt]6&5\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-fill-3",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 3,
    "stem": "设 \\(A\\) 为 \\(3\\) 阶且 \\(|A|=2\\)，则 \\(|2A|=\\) ______，\\(|A^{-1}|=\\) ______。",
    "options": null,
    "ans": "\\(16,\\ 1/2\\)",
    "fb": "对 \\(n\\) 阶方阵有 \\(|kA|=k^n|A|\\)，故 \\(|2A|=2^3\\cdot2=16\\)；又 \\(|A^{-1}|=1/|A|=1/2\\)。故应填 \\(16,\\ 1/2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-hw-fill-4",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 4,
    "stem": "若 \\(A^T=A\\) 且 \\(A\\) 为 \\(3\\) 阶，则 \\(A\\) 的独立元素个数为 ______。",
    "options": null,
    "ans": "\\(6\\)（上三角含对角线共 6 个）",
    "fb": "对称阵 \\(A^T=A\\) 的独立元素为上三角（含对角线）元素，个数为 \\(n(n+1)/2=3\\times4/2=6\\)。故应填 \\(6\\)（上三角含对角线共 6 个）。",
    "pts": 4,
    "diff": 2,
    "sec": "s21"
  },
  {
    "id": "c2-hw-fill-5",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 5,
    "stem": "设 \\(\\alpha=(1,2,3)^T\\)，则 \\(R(\\alpha\\alpha^T)=\\) ______。",
    "options": null,
    "ans": "\\(1\\)",
    "fb": "\\(\\alpha\\alpha^T\\) 是非零列向量与自身的外积，其秩为 \\(1\\)。故应填 \\(1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-hw-fill-6",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 6,
    "stem": "设 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix}\\)，则 \\(A^*=\\) ______。",
    "options": null,
    "ans": "\\(\\begin{pmatrix}4&-2\\\\[6pt]-3&1\\end{pmatrix}\\)",
    "fb": "二阶矩阵 \\(\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\) 的伴随矩阵为 \\(\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)，代入 \\(a=1,b=2,c=3,d=4\\) 即得。故应填 \\(\\begin{pmatrix}4&-2\\\\[6pt]-3&1\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-hw-fill-7",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 7,
    "stem": "若 \\(A=\\begin{pmatrix}1&1\\\\[6pt]0&1\\end{pmatrix}\\)，则 \\(A^{10}=\\) ______。",
    "options": null,
    "ans": "\\(\\begin{pmatrix}1&10\\\\[6pt]0&1\\end{pmatrix}\\)",
    "fb": "\\(A=E+\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\)，利用二项式展开（幂零部分平方为零）得 \\(A^n=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}\\)。故应填 \\(\\begin{pmatrix}1&10\\\\[6pt]0&1\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-fill-8",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 8,
    "stem": "设 \\(A\\) 为 \\(n\\) 阶且 \\(A^2=E\\)，\\(A\\neq E\\)，则 \\(R(A+E)+R(A-E)=\\) ______。",
    "options": null,
    "ans": "\\(n\\)",
    "fb": "由 \\(A^2=E\\) 得 \\((A+E)(A-E)=0\\)，故 \\(R(A+E)+R(A-E)\\le n\\)；又 \\(R(A+E)+R(A-E)\\ge R((A+E)-(A-E))=R(2E)=n\\)，故其和为 \\(n\\)。故应填 \\(n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-hw-fill-9",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 9,
    "stem": "若 \\(A\\) 可逆，则 \\((A^T)^{-1}=\\) ______。",
    "options": null,
    "ans": "\\((A^{-1})^T\\)",
    "fb": "由 \\((A^T)(A^{-1})^T=(AA^{-1})^T=E^T=E\\)，知 \\((A^T)^{-1}=(A^{-1})^T\\)。故应填 \\((A^{-1})^T\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-hw-fill-10",
    "ch": 2,
    "src": "hw",
    "type": "fill",
    "no": 10,
    "stem": "设 \\(A=\\begin{pmatrix}1&0&0\\\\[6pt]2&1&0\\\\[6pt]0&3&1\\end{pmatrix}\\)，则 \\(|A|=\\) ______，且 \\(R(A)=\\) ______。",
    "options": null,
    "ans": "\\(1,\\ 3\\)。",
    "fb": "该矩阵为下三角阵，行列式等于对角元之积 \\(1\\cdot1\\cdot1=1\\)；对角元全非零故满秩 \\(R(A)=3\\)。故应填 \\(1,\\ 3\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-hw-calc-1",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 1,
    "stem": "设 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix},\\ B=\\begin{pmatrix}0&1\\\\[6pt]1&0\\end{pmatrix}\\)，求 \\(A+B,\\ 2A-3B,\\ AB,\\ BA\\)。",
    "options": null,
    "ans": null,
    "fb": "解：1) \\(A+B=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}+\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=\\begin{pmatrix}1&3\\\\4&4\\end{pmatrix}\\)。\n2) \\(2A-3B=\\begin{pmatrix}2&4\\\\6&8\\end{pmatrix}-\\begin{pmatrix}0&3\\\\3&0\\end{pmatrix}=\\begin{pmatrix}2&1\\\\3&8\\end{pmatrix}\\)。\n3) \\(AB=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}\\)。\n4) \\(BA=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}=\\begin{pmatrix}3&4\\\\1&2\\end{pmatrix}\\)。\n故 \\(A+B=\\begin{pmatrix}1&3\\\\4&4\\end{pmatrix},\\ 2A-3B=\\begin{pmatrix}2&1\\\\3&8\\end{pmatrix},\\ AB=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix},\\ BA=\\begin{pmatrix}3&4\\\\1&2\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-calc-2",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 2,
    "stem": "设 \\(A=\\begin{pmatrix}1&1&1\\\\[6pt]0&1&1\\\\[6pt]0&0&1\\end{pmatrix}\\)，求 \\(A^2,\\ A^3\\)。",
    "options": null,
    "ans": null,
    "fb": "解：1) \\(A^2=AA=\\begin{pmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\begin{pmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{pmatrix}=\\begin{pmatrix}1&2&3\\\\0&1&2\\\\0&0&1\\end{pmatrix}\\)。\n2) \\(A^3=A^2A=\\begin{pmatrix}1&2&3\\\\0&1&2\\\\0&0&1\\end{pmatrix}\\begin{pmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{pmatrix}=\\begin{pmatrix}1&3&6\\\\0&1&3\\\\0&0&1\\end{pmatrix}\\)。\n故 \\(A^2=\\begin{pmatrix}1&2&3\\\\0&1&2\\\\0&0&1\\end{pmatrix},\\ A^3=\\begin{pmatrix}1&3&6\\\\0&1&3\\\\0&0&1\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-calc-3",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 3,
    "stem": "设 \\(\\alpha=(1,2,3)^T,\\ \\beta=(4,5,6)^T\\)，求 \\(\\alpha^T\\beta\\) 与 \\(\\alpha\\beta^T\\)。",
    "options": null,
    "ans": null,
    "fb": "解：1) \\(\\alpha^T\\beta=(1,2,3)\\begin{pmatrix}4\\\\5\\\\6\\end{pmatrix}=1\\cdot4+2\\cdot5+3\\cdot6=4+10+18=32\\)。\n2) \\(\\alpha\\beta^T=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}(4,5,6)=\\begin{pmatrix}4&5&6\\\\8&10&12\\\\12&15&18\\end{pmatrix}\\)。\n故 \\(\\alpha^T\\beta=32,\\ \\alpha\\beta^T=\\begin{pmatrix}4&5&6\\\\8&10&12\\\\12&15&18\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-calc-4",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 4,
    "stem": "求 \\(A=\\begin{pmatrix}1&2&3\\\\[6pt]2&1&2\\\\[6pt]3&2&1\\end{pmatrix}\\) 的转置与行列式。",
    "options": null,
    "ans": null,
    "fb": "解：1) 转置：\\(A^T=\\begin{pmatrix}1&2&3\\\\2&1&2\\\\3&2&1\\end{pmatrix}^T=\\begin{pmatrix}1&2&3\\\\2&1&2\\\\3&2&1\\end{pmatrix}\\)（\\(A\\) 为对称矩阵，故 \\(A^T=A\\)）。\n2) 行列式，按第一行展开：\n\\(|A|=1\\cdot\\begin{vmatrix}1&2\\\\2&1\\end{vmatrix}-2\\cdot\\begin{vmatrix}2&2\\\\3&1\\end{vmatrix}+3\\cdot\\begin{vmatrix}2&1\\\\3&2\\end{vmatrix}=1\\cdot(1-4)-2\\cdot(2-6)+3\\cdot(4-3)=-3+8+3=8\\)。\n故转置为 \\(\\begin{pmatrix}1&2&3\\\\2&1&2\\\\3&2&1\\end{pmatrix}\\)，行列式 \\(|A|=8\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-calc-5",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 5,
    "stem": "用伴随矩阵法求 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix}\\) 的逆。",
    "options": null,
    "ans": null,
    "fb": "解：用伴随矩阵法。\\(A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\)，\\(|A|=1\\cdot4-2\\cdot3=-2\\neq0\\)，故可逆。\n代数余子式：\\(A_{11}=4,\\ A_{12}=-3,\\ A_{21}=-2,\\ A_{22}=1\\)。\n伴随矩阵 \\(\\operatorname{adj}(A)=\\begin{pmatrix}A_{11}&A_{21}\\\\A_{12}&A_{22}\\end{pmatrix}=\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}\\)。\n\\(A^{-1}=\\frac1{|A|}\\operatorname{adj}(A)=-\\frac12\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\3/2&-1/2\\end{pmatrix}\\)。\n故 \\(A^{-1}=\\begin{pmatrix}-2&1\\\\3/2&-1/2\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-hw-calc-6",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 6,
    "stem": "用初等行变换求 \\(A=\\begin{pmatrix}1&2&3\\\\[6pt]2&1&2\\\\[6pt]1&3&2\\end{pmatrix}\\) 的逆。",
    "options": null,
    "ans": null,
    "fb": "解：作增广矩阵 \\((A\\mid E)\\) 作初等行变换：\n\\(\\left(\\begin{array}{ccc|ccc}1&2&3&1&0&0\\\\2&1&2&0&1&0\\\\1&3&2&0&0&1\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2-2r_1,\\ r_3-r_1}\\left(\\begin{array}{ccc|ccc}1&2&3&1&0&0\\\\0&-3&-4&-2&1&0\\\\0&1&-1&-1&0&1\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2\\leftrightarrow r_3}\\left(\\begin{array}{ccc|ccc}1&2&3&1&0&0\\\\0&1&-1&-1&0&1\\\\0&-3&-4&-2&1&0\\end{array}\\right)\\)\n\\(\\xrightarrow{r_3+3r_2}\\left(\\begin{array}{ccc|ccc}1&2&3&1&0&0\\\\0&1&-1&-1&0&1\\\\0&0&-7&-5&1&3\\end{array}\\right)\\)\n\\(\\xrightarrow{-\\frac17 r_3}\\left(\\begin{array}{ccc|ccc}1&2&3&1&0&0\\\\0&1&-1&-1&0&1\\\\0&0&1&5/7&-1/7&-3/7\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2+r_3,\\ r_1-3r_3}\\left(\\begin{array}{ccc|ccc}1&2&0&-8/7&3/7&9/7\\\\0&1&0&-2/7&-1/7&4/7\\\\0&0&1&5/7&-1/7&-3/7\\end{array}\\right)\\)\n\\(\\xrightarrow{r_1-2r_2}\\left(\\begin{array}{ccc|ccc}1&0&0&-4/7&5/7&1/7\\\\0&1&0&-2/7&-1/7&4/7\\\\0&0&1&5/7&-1/7&-3/7\\end{array}\\right)\\)。\n故 \\(A^{-1}=\\begin{pmatrix}-4/7&5/7&1/7\\\\-2/7&-1/7&4/7\\\\5/7&-1/7&-3/7\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-hw-calc-7",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 7,
    "stem": "设 \\(A=\\begin{pmatrix}2&2&0\\\\[6pt]2&1&3\\\\[6pt]0&1&0\\end{pmatrix}\\)，解方程 \\((A-E)X=A\\)。",
    "options": null,
    "ans": null,
    "fb": "解：方程为 \\((A-E)X=A\\)。先算\n\\(A-E=\\begin{pmatrix}2&2&0\\\\2&1&3\\\\0&1&0\\end{pmatrix}-\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}=\\begin{pmatrix}1&2&0\\\\2&0&3\\\\0&1&-1\\end{pmatrix}\\)。\n对增广矩阵 \\((A-E\\mid A)\\) 作行变换求 \\(X\\)：\n\\(\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\2&0&3&2&1&3\\\\0&1&-1&0&1&0\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2-2r_1}\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\0&-4&3&-2&-3&3\\\\0&1&-1&0&1&0\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2\\leftrightarrow r_3}\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\0&1&-1&0&1&0\\\\0&-4&3&-2&-3&3\\end{array}\\right)\\)\n\\(\\xrightarrow{r_3+4r_2}\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\0&1&-1&0&1&0\\\\0&0&-1&-2&1&3\\end{array}\\right)\\)\n\\(\\xrightarrow{-r_3}\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\0&1&-1&0&1&0\\\\0&0&1&2&-1&-3\\end{array}\\right)\\)\n\\(\\xrightarrow{r_2+r_3}\\left(\\begin{array}{ccc|ccc}1&2&0&2&2&0\\\\0&1&0&2&0&-3\\\\0&0&1&2&-1&-3\\end{array}\\right)\\)\n\\(\\xrightarrow{r_1-2r_2}\\left(\\begin{array}{ccc|ccc}1&0&0&-2&2&6\\\\0&1&0&2&0&-3\\\\0&0&1&2&-1&-3\\end{array}\\right)\\)。\n故 \\(X=\\begin{pmatrix}-2&2&6\\\\2&0&-3\\\\2&-1&-3\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-hw-calc-8",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 8,
    "stem": "求矩阵 \\(A=\\begin{pmatrix}1&-1&5&-1\\\\[6pt]1&1&-2&3\\\\[6pt]3&-1&8&1\\\\[6pt]1&3&-9&7\\end{pmatrix}\\) 的秩。",
    "options": null,
    "ans": null,
    "fb": "解：对 \\(A\\) 作初等行变换化为阶梯形：\n\\(\\begin{pmatrix}1&-1&5&-1\\\\1&1&-2&3\\\\3&-1&8&1\\\\1&3&-9&7\\end{pmatrix}\\)\n\\(\\xrightarrow{r_2-r_1,\\ r_3-3r_1,\\ r_4-r_1}\\begin{pmatrix}1&-1&5&-1\\\\0&2&-7&4\\\\0&2&-7&4\\\\0&4&-14&8\\end{pmatrix}\\)\n\\(\\xrightarrow{r_3-r_2,\\ r_4-2r_2}\\begin{pmatrix}1&-1&5&-1\\\\0&2&-7&4\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix}\\)。\n阶梯形中非零行有 2 行，故 \\(R(A)=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-hw-calc-9",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 9,
    "stem": "把矩阵 \\(\\begin{pmatrix}1&2&3\\\\[6pt]2&4&6\\\\[6pt]1&2&1\\end{pmatrix}\\) 化为行最简形并求秩。",
    "options": null,
    "ans": null,
    "fb": "解：对矩阵作初等行变换：\n\\(\\begin{pmatrix}1&2&3\\\\2&4&6\\\\1&2&1\\end{pmatrix}\\)\n\\(\\xrightarrow{r_2-2r_1,\\ r_3-r_1}\\begin{pmatrix}1&2&3\\\\0&0&0\\\\0&0&-2\\end{pmatrix}\\)\n\\(\\xrightarrow{r_2\\leftrightarrow r_3}\\begin{pmatrix}1&2&3\\\\0&0&-2\\\\0&0&0\\end{pmatrix}\\)\n\\(\\xrightarrow{-\\frac12 r_2}\\begin{pmatrix}1&2&3\\\\0&0&1\\\\0&0&0\\end{pmatrix}\\)\n\\(\\xrightarrow{r_1-3r_2}\\begin{pmatrix}1&2&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}\\)。\n此即行最简形，非零行有 2 行，故 \\(R=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-hw-calc-10",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 10,
    "stem": "设 \\(A=\\begin{pmatrix}1&0&0\\\\[6pt]0&2&0\\\\[6pt]0&0&3\\end{pmatrix},\\ B=\\begin{pmatrix}1&0&0\\\\[6pt]0&0&1\\\\[6pt]0&1&0\\end{pmatrix}\\)，求分块积 \\(AB\\) 与 \\(BA\\)。",
    "options": null,
    "ans": null,
    "fb": "解：\\(A=\\operatorname{diag}(1,2,3)\\)，\\(B=\\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}\\) 为交换第 2、3 行的置换矩阵。\n1) \\(AB=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{pmatrix}\\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}=\\begin{pmatrix}1&0&0\\\\0&0&2\\\\0&3&0\\end{pmatrix}\\)。\n2) \\(BA=\\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{pmatrix}=\\begin{pmatrix}1&0&0\\\\0&0&3\\\\0&2&0\\end{pmatrix}\\)。\n故 \\(AB=\\begin{pmatrix}1&0&0\\\\0&0&2\\\\0&3&0\\end{pmatrix},\\ BA=\\begin{pmatrix}1&0&0\\\\0&0&3\\\\0&2&0\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-hw-calc-11",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 11,
    "stem": "设 \\(A=\\begin{pmatrix}2&1&0&0\\\\[6pt]1&1&0&0\\\\[6pt]0&0&2&0\\\\[6pt]0&0&-1&3\\end{pmatrix}\\)，用分块法求 \\(A^{-1}\\)。",
    "options": null,
    "ans": null,
    "fb": "解：将 \\(A\\) 分块为 \\(A=\\begin{pmatrix}P&0\\\\0&Q\\end{pmatrix}\\)，其中 \\(P=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix},\\ Q=\\begin{pmatrix}2&0\\\\-1&3\\end{pmatrix}\\)。\n则 \\(A^{-1}=\\begin{pmatrix}P^{-1}&0\\\\0&Q^{-1}\\end{pmatrix}\\)。\n\\(P^{-1}=\\frac1{2\\cdot1-1\\cdot1}\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}\\)。\n\\(Q^{-1}=\\frac1{6}\\begin{pmatrix}3&0\\\\1&2\\end{pmatrix}=\\begin{pmatrix}1/2&0\\\\1/6&1/3\\end{pmatrix}\\)。\n故 \\(A^{-1}=\\begin{pmatrix}1&-1&0&0\\\\-1&2&0&0\\\\0&0&1/2&0\\\\0&0&1/6&1/3\\end{pmatrix}\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-hw-calc-12",
    "ch": 2,
    "src": "hw",
    "type": "calc",
    "no": 12,
    "stem": "设 \\(A=\\begin{pmatrix}0&-1\\\\[6pt]1&0\\end{pmatrix}\\)，求 \\(A^4\\) 并说明其几何意义。",
    "options": null,
    "ans": null,
    "fb": "解：\\(A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\)。\n\\(A^2=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}=\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}=-E\\)。\n\\(A^4=(A^2)^2=(-E)^2=E=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\)。\n几何意义：\\(A\\) 表示平面上绕原点逆时针旋转 \\(90^\\circ\\) 的变换，连乘 4 次相当于旋转 \\(360^\\circ\\)，回到原位置，故 \\(A^4=E\\)（恒等变换）。",
    "pts": 6,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-hw-proof-1",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 1,
    "stem": "证明：若 \\(A,B\\) 为同型对称矩阵，则 \\(A+B\\) 仍为对称矩阵。",
    "options": null,
    "ans": null,
    "fb": "证明：由 \\(A,B\\) 为对称矩阵，知 \\(A^T=A,\\ B^T=B\\)。\n则 \\((A+B)^T=A^T+B^T=A+B\\)，故 \\(A+B\\) 仍为对称矩阵。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s22"
  },
  {
    "id": "c2-hw-proof-2",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 2,
    "stem": "证明：对任意方阵 \\(A\\)，\\(A+A^T\\) 对称、\\(A-A^T\\) 反对称。",
    "options": null,
    "ans": null,
    "fb": "证明：1) 对任意方阵 \\(A\\)，\\((A+A^T)^T=A^T+(A^T)^T=A^T+A=A+A^T\\)，故 \\(A+A^T\\) 对称。\n2) \\((A-A^T)^T=A^T-(A^T)^T=A^T-A=-(A-A^T)\\)，故 \\(A-A^T\\) 反对称。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s22"
  },
  {
    "id": "c2-hw-proof-3",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 3,
    "stem": "证明：\\((AB)^T=B^TA^T\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：设 \\(A=(a_{ij})_{m\\times n},\\ B=(b_{ij})_{n\\times p}\\)，则 \\(AB\\) 的 \\((i,j)\\) 元为 \\(\\sum_{k=1}^n a_{ik}b_{kj}\\)。\n\\((AB)^T\\) 的 \\((i,j)\\) 元等于 \\(AB\\) 的 \\((j,i)\\) 元，即 \\(\\sum_{k=1}^n a_{jk}b_{ki}\\)。\n另一方面，\\(B^TA^T\\) 的 \\((i,j)\\) 元为 \\(\\sum_{k=1}^n (B^T)_{ik}(A^T)_{kj}=\\sum_{k=1}^n b_{ki}a_{jk}=\\sum_{k=1}^n a_{jk}b_{ki}\\)。\n二者恒等，故 \\((AB)^T=B^TA^T\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s22"
  },
  {
    "id": "c2-hw-proof-4",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 4,
    "stem": "证明：若 \\(A\\) 可逆，则 \\((A^{-1})^T=(A^T)^{-1}\\)，且 \\((A^T)\\) 可逆。",
    "options": null,
    "ans": null,
    "fb": "证明：因 \\(A\\) 可逆，有 \\(AA^{-1}=A^{-1}A=E\\)。\n转置得 \\((AA^{-1})^T=(A^{-1})^TA^T=E^T=E\\)，且 \\((A^{-1}A)^T=A^T(A^{-1})^T=E\\)。\n故 \\((A^{-1})^T\\) 是 \\(A^T\\) 的逆矩阵，即 \\((A^T)^{-1}=(A^{-1})^T\\)，且 \\(A^T\\) 可逆。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s23"
  },
  {
    "id": "c2-hw-proof-5",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 5,
    "stem": "证明：若 \\(A^2=A\\)（幂等），则 \\(R(A)+R(A-E)=n\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：由 \\(A^2=A\\) 得 \\(A(A-E)=0\\)。于是 \\(R(A)+R(A-E)\\le n\\)（因 \\(AB=0\\Rightarrow R(A)+R(B)\\le n\\)）。\n又 \\(E=A-(A-E)\\)，故 \\(n=R(E)=R(A-(A-E))\\le R(A)+R(A-E)\\)。\n两式结合得 \\(R(A)+R(A-E)=n\\)。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s26"
  },
  {
    "id": "c2-hw-proof-6",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 6,
    "stem": "证明：若 \\(AB=E\\)（\\(A,B\\) 同阶方阵），则 \\(A,B\\) 都可逆且互为逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "证明：因 \\(A,B\\) 同阶方阵且 \\(AB=E\\)，取行列式得 \\(|A||B|=|E|=1\\)，故 \\(|A|\\neq0,\\ |B|\\neq0\\)，从而 \\(A,B\\) 都可逆。\n由 \\(AB=E\\) 右乘 \\(B^{-1}\\) 得 \\(A=BB^{-1}=B^{-1}\\)，即 \\(A=B^{-1}\\)，于是 \\(BA=E\\) 且二者互为逆矩阵。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s23"
  },
  {
    "id": "c2-hw-proof-7",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 7,
    "stem": "证明：\\(R(AB)\\le\\min(R(A),R(B))\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：将 \\(B\\) 按列分块为 \\(B=(b_1,b_2,\\dots,b_p)\\)，则 \\(AB=(Ab_1,Ab_2,\\dots,Ab_p)\\)。\n每个 \\(Ab_j\\) 都是 \\(A\\) 的列向量的线性组合，故 \\(AB\\) 的列向量组可由 \\(A\\) 的列向量组线性表示，从而 \\(R(AB)\\le R(A)\\)。\n又 \\(R(AB)=R((AB)^T)=R(B^TA^T)\\le R(B^T)=R(B)\\)。\n综上 \\(R(AB)\\le\\min(R(A),R(B))\\)。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s26"
  },
  {
    "id": "c2-hw-proof-8",
    "ch": 2,
    "src": "hw",
    "type": "proof",
    "no": 8,
    "stem": "设 \\(A\\) 为 \\(n\\) 阶且 \\(R(A)=n-1\\)，证明 \\(R(A^*)=1\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：由 \\(R(A)=n-1\\)，知 \\(|A|=0\\) 且 \\(A\\) 至少有一个 \\(n-1\\) 阶子式非零，故 \\(A^*\\neq0\\)，即 \\(R(A^*)\\ge1\\)。\n由 \\(AA^*=|A|E=0\\)，得 \\(R(A)+R(A^*)\\le n\\)，即 \\(R(A^*)\\le n-R(A)=n-(n-1)=1\\)。\n结合 \\(R(A^*)\\ge1\\)，得 \\(R(A^*)=1\\)。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s26"
  },
  {
    "id": "c2-hw-app-1",
    "ch": 2,
    "src": "hw",
    "type": "app",
    "no": 1,
    "stem": "用 Hill 密码：密钥 \\(K=\\begin{pmatrix}1&2&1\\\\[6pt]2&5&3\\\\[6pt]2&3&2\\end{pmatrix}\\)，把明文\"CAT\"（C=3,A=1,T=20）按列排成 \\(3\\times1\\) 向量加密，再求 \\(K^{-1}\\) 还原（结果按模 26 归约）。",
    "options": null,
    "ans": null,
    "fb": "解：明文向量 \\(v=\\begin{pmatrix}C\\\\A\\\\T\\end{pmatrix}=\\begin{pmatrix}3\\\\1\\\\20\\end{pmatrix}\\)。\n加密：\\(c=Kv=\\begin{pmatrix}1&2&1\\\\2&5&3\\\\2&3&2\\end{pmatrix}\\begin{pmatrix}3\\\\1\\\\20\\end{pmatrix}=\\begin{pmatrix}25\\\\71\\\\49\\end{pmatrix}\\equiv\\begin{pmatrix}25\\\\19\\\\23\\end{pmatrix}\\pmod{26}\\)。\n故密文为 \\((25,19,23)\\)。\n求 \\(K^{-1}\\)（模 26）：\\(|K|=1\\)，由伴随矩阵法得 \\(K^{-1}\\equiv\\begin{pmatrix}1&25&1\\\\2&0&25\\\\22&1&1\\end{pmatrix}\\pmod{26}\\)。\n还原：\\(K^{-1}c\\equiv\\begin{pmatrix}1&25&1\\\\2&0&25\\\\22&1&1\\end{pmatrix}\\begin{pmatrix}25\\\\19\\\\23\\end{pmatrix}\\equiv\\begin{pmatrix}3\\\\1\\\\20\\end{pmatrix}\\pmod{26}\\)，即还原为明文 CAT。",
    "pts": 4,
    "diff": 2,
    "sec": "s27"
  },
  {
    "id": "c2-hw-app-2",
    "ch": 2,
    "src": "hw",
    "type": "app",
    "no": 2,
    "stem": "设图像像素矩阵 \\(I=\\begin{pmatrix}10&20\\\\[6pt]30&40\\end{pmatrix}\\)，作亮度调整 \\(I' = 1.5I + 10\\)（截断到 \\([0,255]\\)），写出结果矩阵。",
    "options": null,
    "ans": null,
    "fb": "解：按元素运算 \\(I'=1.5I+10\\)，并截断到 \\([0,255]\\)：\n\\(I'=\\begin{pmatrix}1.5\\times10+10&1.5\\times20+10\\\\1.5\\times30+10&1.5\\times40+10\\end{pmatrix}=\\begin{pmatrix}25&40\\\\55&70\\end{pmatrix}\\)。\n各元素均落在 \\([0,255]\\) 内，无需截断。\n故结果矩阵为 \\(\\begin{pmatrix}25&40\\\\55&70\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s27"
  },
  {
    "id": "c2-hw-app-3",
    "ch": 2,
    "src": "hw",
    "type": "app",
    "no": 3,
    "stem": "某食物链可用 Leslie 矩阵 \\(L=\\begin{pmatrix}0&4&3\\\\[6pt]1/2&0&0\\\\[6pt]0&1/4&0\\end{pmatrix}\\) 描述，写出 \\(x(k+1)=Lx(k)\\) 的分量形式，并说明各元素的含义。",
    "options": null,
    "ans": null,
    "fb": "解：设 \\(x(k)=\\begin{pmatrix}x_1(k)\\\\x_2(k)\\\\x_3(k)\\end{pmatrix}\\)，则\n\\(x_1(k+1)=0\\cdot x_1(k)+4x_2(k)+3x_3(k)=4x_2(k)+3x_3(k)\\)，\n\\(x_2(k+1)=\\frac12 x_1(k)+0\\cdot x_2(k)+0\\cdot x_3(k)=\\frac12 x_1(k)\\)，\n\\(x_3(k+1)=0\\cdot x_1(k)+\\frac14 x_2(k)+0\\cdot x_3(k)=\\frac14 x_2(k)\\)。\n含义：\\(x_1,x_2,x_3\\) 分别为三个年龄组（如幼体、亚成体、成体）的个体数；第一行系数 \\(4,3\\) 表示各龄组每个个体下一时段贡献的幼体数；第二行 \\(1/2\\) 表示 \\(x_1\\) 组存活进入 \\(x_2\\) 组的比例；第三行 \\(1/4\\) 表示 \\(x_2\\) 组存活进入 \\(x_3\\) 组的比例。",
    "pts": 4,
    "diff": 2,
    "sec": "s27"
  },
  {
    "id": "c2-hw-app-4",
    "ch": 2,
    "src": "hw",
    "type": "app",
    "no": 4,
    "stem": "设权重矩阵 \\(W=\\begin{pmatrix}0.2&0.8\\\\[6pt]0.6&0.4\\end{pmatrix}\\)，输入向量 \\(x=(1,1)^T\\)，求输出 \\(y=Wx\\) 并解释其意义。",
    "options": null,
    "ans": null,
    "fb": "解：输出 \\(y=Wx=\\begin{pmatrix}0.2&0.8\\\\0.6&0.4\\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\begin{pmatrix}0.2\\times1+0.8\\times1\\\\0.6\\times1+0.4\\times1\\end{pmatrix}=\\begin{pmatrix}1.0\\\\1.0\\end{pmatrix}\\)。\n意义：输入 \\(x=(1,1)^T\\) 表示两个神经元的输入均为 1；输出 \\(y_1=1.0,\\ y_2=1.0\\) 为加权求和后的激活前信号。第一输出神经元对第二输入的权重（0.8）较大，第二输出神经元对第一输入的权重（0.6）较大，整体是两个输入的线性组合。",
    "pts": 4,
    "diff": 2,
    "sec": "s27"
  },
  {
    "id": "c2-hw-app-5",
    "ch": 2,
    "src": "hw",
    "type": "app",
    "no": 5,
    "stem": "取 \\(3\\times3\\) 灰度图 \\(G=\\begin{pmatrix}0&0&0\\\\[6pt]0&255&0\\\\[6pt]0&0&0\\end{pmatrix}\\)，说明用 Sobel 算子 \\(G_x\\)（见 §2.7 应用 1）在中心的卷积结果（只需写出中心 \\(3\\times3\\) 块的相关计算）。",
    "options": null,
    "ans": null,
    "fb": "解：Sobel 水平算子 \\(G_x=\\begin{pmatrix}-1&0&1\\\\-2&0&2\\\\-1&0&1\\end{pmatrix}\\)。\n对中心像素（值为 255）取 \\(3\\times3\\) 邻域（即整个灰度图）\\(\\begin{pmatrix}0&0&0\\\\0&255&0\\\\0&0&0\\end{pmatrix}\\)，卷积（相关）为：\n\\(G_x\\ast I_{\\text{center}}=(-1)\\cdot0+0\\cdot0+1\\cdot0+(-2)\\cdot0+0\\cdot255+2\\cdot0+(-1)\\cdot0+0\\cdot0+1\\cdot0=0\\)。\n故中心处水平梯度为 0，表明该孤立亮点在水平方向上左右对称、无灰度变化，Sobel \\(G_x\\) 对其响应为 0。",
    "pts": 4,
    "diff": 2,
    "sec": "s27"
  },
  {
    "id": "c2-test-mc-1",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 1,
    "stem": "1. 矩阵 \\(A=B\\) 的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(A,B\\) 同型"
      ],
      [
        "B",
        "\\(A,B\\) 同阶"
      ],
      [
        "C",
        "对应元素相等"
      ],
      [
        "D",
        "\\(A,B\\) 同型且对应元素全相等"
      ]
    ],
    "ans": "D",
    "fb": "✓ 同型是前提，再要求每个对应元素相等。",
    "pts": 4,
    "diff": 2,
    "sec": "s21"
  },
  {
    "id": "c2-test-mc-2",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 2,
    "stem": "2. 设 \\(A_{2\\times3},\\ B_{3\\times2}\\)，则 \\(AB\\) 的形状是（　）。",
    "options": [
      [
        "A",
        "\\(2\\times2\\)"
      ],
      [
        "B",
        "\\(3\\times3\\)"
      ],
      [
        "C",
        "\\(2\\times3\\)"
      ],
      [
        "D",
        "\\(3\\times2\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 乘积行数取 \\(A\\) 的行数、列数取 \\(B\\) 的列数。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-3",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 3,
    "stem": "3. 一般情况下，矩阵乘法（　）。",
    "options": [
      [
        "A",
        "满足交换律"
      ],
      [
        "B",
        "不满足交换律"
      ],
      [
        "C",
        "必有 \\(AB=BA\\)"
      ],
      [
        "D",
        "与数乘完全相同"
      ]
    ],
    "ans": "B",
    "fb": "✓ 一般 \\(AB\\neq BA\\)，甚至形状都可能不同。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-4",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 4,
    "stem": "4. 设 \\(A,B\\) 为 \\(n\\) 阶且 \\(AB=O\\)，则（　）。",
    "options": [
      [
        "A",
        "必有 \\(A=O\\)"
      ],
      [
        "B",
        "必有 \\(B=O\\)"
      ],
      [
        "C",
        "不能推出 \\(A=O\\) 或 \\(B=O\\)"
      ],
      [
        "D",
        "必有 \\(A,B\\) 都不可逆"
      ]
    ],
    "ans": "C",
    "fb": "✓ 矩阵乘法无消去律，非零矩阵之积可为 \\(O\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-5",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 5,
    "stem": "5. （考研真题）设 \\(A\\) 为 \\(n\\) 阶方阵，则 \\(|kA|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(k|A|\\)"
      ],
      [
        "B",
        "\\(k^n|A|\\)"
      ],
      [
        "C",
        "\\(|A|^k\\)"
      ],
      [
        "D",
        "\\(k|A|^n\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 每行提出一个 \\(k\\)，共 \\(n\\) 行。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-6",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 6,
    "stem": "6. 若 \\(A,B\\) 均可逆，则 \\((AB)^{-1}=\\)（　）。",
    "options": [
      [
        "A",
        "\\(B^{-1}A^{-1}\\)"
      ],
      [
        "B",
        "\\(A^{-1}B^{-1}\\)"
      ],
      [
        "C",
        "\\(AB^{-1}\\)"
      ],
      [
        "D",
        "\\((BA)^{-1}\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 求逆要\"反序\"。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-test-mc-7",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 7,
    "stem": "7. 若 \\(A^T=-A\\)，则 \\(A\\) 是（　）。",
    "options": [
      [
        "A",
        "对称阵"
      ],
      [
        "B",
        "反对称阵"
      ],
      [
        "C",
        "数量阵"
      ],
      [
        "D",
        "单位阵"
      ]
    ],
    "ans": "B",
    "fb": "✓ 由定义 \\(A^T=-A\\) 为反对称阵。",
    "pts": 4,
    "diff": 2,
    "sec": "s21"
  },
  {
    "id": "c2-test-mc-8",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 8,
    "stem": "8. 设 \\(A=\\begin{pmatrix}1&2\\\\[6pt]3&4\\end{pmatrix}\\)，则 \\(A^*=\\)（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}1&-2\\\\[6pt]-3&4\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}4&2\\\\[6pt]3&1\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}4&-2\\\\[6pt]-3&1\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}-4&2\\\\[6pt]3&-1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 伴随阵为 \\(\\begin{pmatrix}d&-b\\\\[6pt]-c&a\\end{pmatrix}=\\begin{pmatrix}4&-2\\\\[6pt]-3&1\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-test-mc-9",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 9,
    "stem": "9. 设 \\(A\\) 为 \\(n\\) 阶可逆阵，则 \\(|A^{-1}|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(1/|A|\\)"
      ],
      [
        "B",
        "\\(|A|\\)"
      ],
      [
        "C",
        "\\(|A|^n\\)"
      ],
      [
        "D",
        "\\(1\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 由 \\(|A||A^{-1}|=1\\) 得。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-test-mc-10",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 10,
    "stem": "10. （考研真题）初等矩阵（　）。",
    "options": [
      [
        "A",
        "都不可逆"
      ],
      [
        "B",
        "都是单位阵"
      ],
      [
        "C",
        "乘积一定为 \\(O\\)"
      ],
      [
        "D",
        "都可逆，且逆仍为同类初等矩阵"
      ]
    ],
    "ans": "D",
    "fb": "✓ 如 \\(E(i,j)^{-1}=E(i,j)\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-test-mc-11",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 11,
    "stem": "11. 对矩阵 \\(A\\) 左乘初等矩阵，等价于对 \\(A\\) 作（　）。",
    "options": [
      [
        "A",
        "初等行变换"
      ],
      [
        "B",
        "初等列变换"
      ],
      [
        "C",
        "转置"
      ],
      [
        "D",
        "求逆"
      ]
    ],
    "ans": "A",
    "fb": "✓ 左乘=行变换，右乘=列变换。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-test-mc-12",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 12,
    "stem": "12. （考研真题）\\(n\\) 阶方阵 \\(A\\) 可逆的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(A\\sim E\\)（行等价于单位阵）"
      ],
      [
        "B",
        "\\(R(A)=n-1\\)"
      ],
      [
        "C",
        "\\(|A|=0\\)"
      ],
      [
        "D",
        "\\(A\\) 对称"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(A\\) 可逆 \\(\\iff A\\stackrel{r}{\\sim}E\\iff|A|\\neq0\\iff R(A)=n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-test-mc-13",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 13,
    "stem": "13. 设 \\(A,B\\) 为 \\(n\\) 阶且 \\(AB=O\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(R(A)+R(B)\\ge n\\)"
      ],
      [
        "B",
        "\\(R(A)=R(B)\\)"
      ],
      [
        "C",
        "\\(R(A)R(B)=0\\)"
      ],
      [
        "D",
        "\\(R(A)+R(B)\\le n\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ 由 \\(Ax=0\\) 解空间维数限制得。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-14",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 14,
    "stem": "14. （考研真题）设 \\(A\\) 为 \\(n\\) 阶可逆阵，则 \\(R(A^*)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(n-1\\)"
      ],
      [
        "C",
        "\\(1\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(R(A)=n\\Rightarrow R(A^*)=n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-test-mc-15",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 15,
    "stem": "15. 设 \\(\\alpha,\\beta\\) 为 \\(n\\) 维非零列向量，则 \\(R(\\alpha\\beta^T)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(0\\)"
      ],
      [
        "C",
        "\\(1\\)"
      ],
      [
        "D",
        "\\(n-1\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 秩 1 矩阵。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-test-mc-16",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 16,
    "stem": "16. 设 \\(A=\\begin{pmatrix}1&1\\\\[6pt]0&1\\end{pmatrix}\\)，则 \\(A^{10}=\\)（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}1&1\\\\[6pt]0&1\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}1&10\\\\[6pt]0&1\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}1&0\\\\[6pt]10&1\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}10&1\\\\[6pt]0&10\\end{pmatrix}\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 归纳得 \\(\\begin{pmatrix}1&k\\\\[6pt]0&1\\end{pmatrix}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-17",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 17,
    "stem": "17. 若 \\(A^2=A\\) 且 \\(A\\neq E\\)，则 \\(R(A)+R(A-E)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(n-1\\)"
      ],
      [
        "C",
        "\\(2n\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 幂等矩阵秩恒等式。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-test-mc-18",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 18,
    "stem": "18. 若 \\(AB=E\\)（\\(A,B\\) 同阶方阵），则（　）。",
    "options": [
      [
        "A",
        "\\(A^{-1}=B\\) 且 \\(B^{-1}=A\\)"
      ],
      [
        "B",
        "仅 \\(A\\) 可逆"
      ],
      [
        "C",
        "仅 \\(B\\) 可逆"
      ],
      [
        "D",
        "都不一定可逆"
      ]
    ],
    "ans": "A",
    "fb": "✓ 推论 2.1。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-test-mc-19",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 19,
    "stem": "19. 分块对角矩阵 \\(A=\\operatorname{diag}(A_1,A_2)\\) 的行列式 \\(|A|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(|A_1|+|A_2|\\)"
      ],
      [
        "B",
        "\\(|A_1||A_2|\\)"
      ],
      [
        "C",
        "\\(|A_1|^{|A_2|}\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 分块对角阵行列式为各块行列式之积。",
    "pts": 4,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-test-mc-20",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 20,
    "stem": "20. 设 \\(A\\) 为 \\(3\\) 阶且 \\(R(A)=2\\)，则 \\(R(A^*)=\\)（　）。",
    "options": [
      [
        "A",
        "\\(3\\)"
      ],
      [
        "B",
        "\\(1\\)"
      ],
      [
        "C",
        "\\(2\\)"
      ],
      [
        "D",
        "\\(0\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ \\(R(A)=n-1\\Rightarrow R(A^*)=1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-test-mc-21",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 21,
    "stem": "21. 行最简形矩阵的特征是（　）。",
    "options": [
      [
        "A",
        "非零行首元为 1 且该列其余为 0"
      ],
      [
        "B",
        "必须是方阵"
      ],
      [
        "C",
        "主对角元全为 1"
      ],
      [
        "D",
        "所有元素非负"
      ]
    ],
    "ans": "A",
    "fb": "✓ 见定义 2.23。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-test-mc-22",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 22,
    "stem": "22. （考研真题）下列命题正确的是（　）。",
    "options": [
      [
        "A",
        "\\(|A+B|=|A|+|B|\\)"
      ],
      [
        "B",
        "\\((AB)^T=A^TB^T\\)"
      ],
      [
        "C",
        "\\((AB)^{-1}=A^{-1}B^{-1}\\)"
      ],
      [
        "D",
        "\\(|AB|=|A||B|\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ 只有乘法公式恒成立。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-test-mc-23",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 23,
    "stem": "23. （考研真题）用初等行变换求逆时，构造的增广矩阵是（　）。",
    "options": [
      [
        "A",
        "\\((A\\mid A)\\)"
      ],
      [
        "B",
        "\\((E\\mid A)\\)"
      ],
      [
        "C",
        "\\((A\\mid E)\\)"
      ],
      [
        "D",
        "\\((E\\mid E)\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ \\((A\\mid E)\\xrightarrow{r}(E\\mid A^{-1})\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-test-mc-24",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 24,
    "stem": "24. 设 \\(A\\) 为 \\(m\\times n\\) 矩阵，则其 \\(k\\) 阶子式共有（　）个。",
    "options": [
      [
        "A",
        "\\(\\mathrm{C}_m^k\\mathrm{C}_n^k\\)"
      ],
      [
        "B",
        "\\(\\mathrm{C}_{m+n}^k\\)"
      ],
      [
        "C",
        "\\(\\mathrm{C}_m^k+\\mathrm{C}_n^k\\)"
      ],
      [
        "D",
        "\\(m^k n^k\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 行选 \\(k\\)、列选 \\(k\\) 的组合乘积。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-test-mc-25",
    "ch": 2,
    "src": "test",
    "type": "mc",
    "no": 25,
    "stem": "25. 若 \\(A\\) 为 \\(n\\) 阶方阵且 \\(R(A)=n\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(A\\) 不可逆"
      ],
      [
        "B",
        "\\(|A|=0\\)"
      ],
      [
        "C",
        "\\(A\\) 可逆"
      ],
      [
        "D",
        "\\(A=O\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 满秩 \\(\\iff\\) 可逆 \\(\\iff|A|\\neq0\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c3-hw-mc-1",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 1,
    "stem": "n 维向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性相关的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(m>1\\)"
      ],
      [
        "B",
        "存在不全为零的数使线性组合为零"
      ],
      [
        "C",
        "其中有两个向量相等"
      ],
      [
        "D",
        "向量个数大于维数"
      ]
    ],
    "ans": "B",
    "fb": "解析：向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性相关的定义是存在一组不全为零的数 \\(k_1,\\dots,k_m\\)，使 \\(k_1\\alpha_1+\\cdots+k_m\\alpha_m=0\\)。选项 A（\\(m>1\\)）、C（有两个向量相等）、D（向量个数大于维数）都只是充分非必要条件，只有 B 是充要条件。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-2",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 2,
    "stem": "若向量组 \\(\\alpha_1,\\alpha_2\\) 线性相关，则（　）。",
    "options": [
      [
        "A",
        "它们分量对应成比例"
      ],
      [
        "B",
        "其中一个必为零"
      ],
      [
        "C",
        "它们必相等"
      ],
      [
        "D",
        "它们的秩为 2"
      ]
    ],
    "ans": "A",
    "fb": "解析：两个向量 \\(\\alpha_1,\\alpha_2\\) 线性相关的充要条件是它们对应的分量成比例（即存在常数 \\(k\\) 使 \\(\\alpha_1=k\\alpha_2\\)）。因此 A 正确；B、C 仅为某些特殊情况，D 中秩应为 1 而非 2。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-3",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 3,
    "stem": "单个向量 \\(\\alpha\\) 线性相关当且仅当（　）。",
    "options": [
      [
        "A",
        "\\(\\alpha\\neq0\\)"
      ],
      [
        "B",
        "\\(\\alpha=0\\)"
      ],
      [
        "C",
        "\\(\\alpha\\) 是单位向量"
      ],
      [
        "D",
        "以上都不对"
      ]
    ],
    "ans": "B",
    "fb": "解析：单个向量 \\(\\alpha\\) 线性相关是指存在非零数 \\(k\\) 使 \\(k\\alpha=0\\)，这等价于 \\(\\alpha=0\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-4",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 4,
    "stem": "向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性无关的充要条件是（　）。",
    "options": [
      [
        "A",
        "任意两个不成比例"
      ],
      [
        "B",
        "部分组无关"
      ],
      [
        "C",
        "只有全零系数才使组合为零"
      ],
      [
        "D",
        "向量个数不超过维数"
      ]
    ],
    "ans": "C",
    "fb": "解析：向量组线性无关的定义是：若 \\(k_1\\alpha_1+\\cdots+k_m\\alpha_m=0\\)，则必有 \\(k_1=\\cdots=k_m=0\\)，即只有全零系数才使组合为零。A、B 为必要非充分，D 不必然成立。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-5",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 5,
    "stem": "若 \\(\\alpha_1,\\alpha_2\\) 线性无关，则 \\(\\alpha_1+\\alpha_2,\\ \\alpha_1-\\alpha_2\\)（　）。",
    "options": [
      [
        "A",
        "线性相关"
      ],
      [
        "B",
        "线性无关"
      ],
      [
        "C",
        "必含零向量"
      ],
      [
        "D",
        "秩为 1"
      ]
    ],
    "ans": "B",
    "fb": "解析：设 \\(k_1(\\alpha_1+\\alpha_2)+k_2(\\alpha_1-\\alpha_2)=0\\)，即 \\((k_1+k_2)\\alpha_1+(k_1-k_2)\\alpha_2=0\\)。由 \\(\\alpha_1,\\alpha_2\\) 线性无关得 \\(k_1+k_2=0,\\ k_1-k_2=0\\)，解得 \\(k_1=k_2=0\\)，故新向量组线性无关。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-6",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 6,
    "stem": "\"部分相关则整体相关\"的等价逆否表述是（　）。",
    "options": [
      [
        "A",
        "整体相关则部分相关"
      ],
      [
        "B",
        "无关组中任一部分都无关"
      ],
      [
        "C",
        "整体无关则部分无关"
      ],
      [
        "D",
        "相关组任一部分都相关"
      ]
    ],
    "ans": "C",
    "fb": "解析：\"部分组相关则整体相关\"的逆否命题为\"整体无关则任一部分组都无关\"，与原命题等价。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-7",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 7,
    "stem": "若向量组可由 2 个向量线性表示且自身含 3 个向量，则它（　）。",
    "options": [
      [
        "A",
        "必线性无关"
      ],
      [
        "B",
        "必线性相关"
      ],
      [
        "C",
        "秩为 3"
      ],
      [
        "D",
        "无法确定"
      ]
    ],
    "ans": "B",
    "fb": "解析：若该向量组可由 2 个向量线性表示，则其秩不超过 2，而该组含 3 个向量（个数大于秩），故必线性相关。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-8",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 8,
    "stem": "\\(n+1\\) 个 \\(n\\) 维向量（　）。",
    "options": [
      [
        "A",
        "必线性无关"
      ],
      [
        "B",
        "必线性相关"
      ],
      [
        "C",
        "秩为 \\(n+1\\)"
      ],
      [
        "D",
        "可能无关"
      ]
    ],
    "ans": "B",
    "fb": "解析：在 \\(n\\) 维向量空间中，任意 \\(n+1\\) 个向量必线性相关（向量个数大于维数）。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-9",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 9,
    "stem": "向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 的秩为 2，则（　）。",
    "options": [
      [
        "A",
        "必含零向量"
      ],
      [
        "B",
        "其中任意两个都相关"
      ],
      [
        "C",
        "极大无关组含 2 个向量"
      ],
      [
        "D",
        "三个向量都无关"
      ]
    ],
    "ans": "C",
    "fb": "解析：向量组的秩等于其极大线性无关组所含向量的个数。秩为 2，故极大无关组含 2 个向量。A、B、D 均不必然成立。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s33"
  },
  {
    "id": "c3-hw-mc-10",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 10,
    "stem": "等价的向量组（　）。",
    "options": [
      [
        "A",
        "必含相同向量"
      ],
      [
        "B",
        "秩相同"
      ],
      [
        "C",
        "个数相同"
      ],
      [
        "D",
        "必线性无关"
      ]
    ],
    "ans": "B",
    "fb": "解析：等价向量组可以互相线性表示，因而具有相同的秩。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s33"
  },
  {
    "id": "c3-hw-mc-11",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 11,
    "stem": "矩阵 \\(A\\) 的秩（　）。",
    "options": [
      [
        "A",
        "等于 \\(A\\) 的行数"
      ],
      [
        "B",
        "等于 \\(A\\) 的列数"
      ],
      [
        "C",
        "等于 \\(A\\) 的列向量组的秩"
      ],
      [
        "D",
        "等于 \\(A\\) 的阶数"
      ]
    ],
    "ans": "C",
    "fb": "解析：矩阵的秩等于其列向量组的秩，也等于其行向量组的秩。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s33"
  },
  {
    "id": "c3-hw-mc-12",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 12,
    "stem": "设 \\(A\\) 为 3 阶且 \\(|A|\\neq0\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(A\\) 的列向量组线性相关"
      ],
      [
        "B",
        "\\(A\\) 的列向量组线性无关"
      ],
      [
        "C",
        "\\(R(A)\\lt3\\)"
      ],
      [
        "D",
        "以上都不对"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(|A|\\neq0\\) 说明 \\(A\\) 可逆，其列向量组线性无关（秩为 3）。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s33"
  },
  {
    "id": "c3-hw-mc-13",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 13,
    "stem": "设 \\(\\alpha_1=(1,0,0)^T,\\alpha_2=(0,1,0)^T,\\alpha_3=(1,1,0)^T\\)，则（　）。",
    "options": [
      [
        "A",
        "三者无关"
      ],
      [
        "B",
        "秩为 3"
      ],
      [
        "C",
        "相关，秩为 2"
      ],
      [
        "D",
        "含零向量"
      ]
    ],
    "ans": "C",
    "fb": "解析：注意到 \\(\\alpha_3=\\alpha_1+\\alpha_2\\)，故三个向量线性相关；而 \\(\\alpha_1,\\alpha_2\\) 显然线性无关，因此秩为 2。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s33"
  },
  {
    "id": "c3-hw-mc-14",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 14,
    "stem": "（考研真题）若向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关，则（　）。",
    "options": [
      [
        "A",
        "\\(\\alpha_1+\\alpha_2,\\alpha_2+\\alpha_3,\\alpha_3+\\alpha_1\\) 无关"
      ],
      [
        "B",
        "\\(\\alpha_1+\\alpha_2,\\alpha_2+\\alpha_3,\\alpha_1+2\\alpha_2+\\alpha_3\\) 无关"
      ],
      [
        "C",
        "必含单位向量"
      ],
      [
        "D",
        "其转置相关"
      ]
    ],
    "ans": "A",
    "fb": "解析：设 \\(\\beta_1=\\alpha_1+\\alpha_2,\\ \\beta_2=\\alpha_2+\\alpha_3,\\ \\beta_3=\\alpha_3+\\alpha_1\\)，则 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)M\\)，其中 \\(M=\\begin{bmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{bmatrix}\\)，\\(|M|=2\\neq0\\)，故 \\(\\beta_1,\\beta_2,\\beta_3\\) 线性无关。而 B 中 \\(\\alpha_1+\\alpha_2+\\alpha_2+\\alpha_3=\\alpha_1+2\\alpha_2+\\alpha_3\\)，三组线性相关。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s32"
  },
  {
    "id": "c3-hw-mc-15",
    "ch": 3,
    "src": "hw",
    "type": "mc",
    "no": 15,
    "stem": "（期末真题）向量空间 \\(V=\\{(x,0,0)^T\\mid x\\in\\mathbb R\\}\\)（　）。",
    "options": [
      [
        "A",
        "不是向量空间"
      ],
      [
        "B",
        "是向量空间且维数为 1"
      ],
      [
        "C",
        "维数为 3"
      ],
      [
        "D",
        "含零向量但不是空间"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(V=\\{(x,0,0)^T\\mid x\\in\\mathbb R\\}\\) 对加法和数乘均封闭，是向量空间；取基 \\((1,0,0)^T\\)，其维数为 1。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s34"
  },
  {
    "id": "c3-hw-fill-1",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 1,
    "stem": "若 \\(\\alpha=(1,2,3)^T,\\ \\beta=(4,5,6)^T\\)，则 \\(3\\alpha-2\\beta=\\) ______。",
    "options": null,
    "ans": "\\((-5,-4,-3)^T\\)",
    "fb": "解：\\(3\\alpha-2\\beta=3(1,2,3)^T-2(4,5,6)^T=(3-8,6-10,9-12)^T=(-5,-4,-3)^T\\)。故应填 \\((-5,-4,-3)^T\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-hw-fill-2",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 2,
    "stem": "向量组 \\(\\alpha_1=(1,1,1)^T,\\ \\alpha_2=(1,2,3)^T,\\ \\alpha_3=(1,3,6)^T\\) 线性 ______（填\"相关\"或\"无关\"）。",
    "options": null,
    "ans": "无关（行列式 \\(=1\\neq0\\)）",
    "fb": "解：以三向量为列构成矩阵，其行列式 \\(\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&3&6\\end{vmatrix}=1\\neq0\\)，故向量组线性无关。故应填 无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-fill-3",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 3,
    "stem": "\\(n+1\\) 个 \\(n\\) 维向量必 ______（填\"相关\"或\"无关\"）。",
    "options": null,
    "ans": "相关",
    "fb": "解：在 \\(n\\) 维向量空间中，任意 \\(n+1\\) 个向量必线性相关。故应填 相关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-fill-4",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 4,
    "stem": "若 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关，则 \\(\\alpha_1+\\alpha_2,\\ \\alpha_2+\\alpha_3,\\ \\alpha_3+\\alpha_1\\) 线性 ______（填\"相关\"或\"无关\"）。",
    "options": null,
    "ans": "无关（变换行列式 \\(2\\neq0\\)）",
    "fb": "解：设 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)C\\)，其中 \\(C=\\begin{bmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{bmatrix}\\)，\\(|C|=2\\neq0\\)，变换矩阵可逆，故 \\(\\beta_1,\\beta_2,\\beta_3\\) 与 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 同为线性无关。故应填 无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-fill-5",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 5,
    "stem": "等价向量组的 ______ 相同（填\"秩\"或\"个数\"）。",
    "options": null,
    "ans": "秩",
    "fb": "解：等价向量组可以互相线性表示，因此它们的秩相同。故应填 秩。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-fill-6",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 6,
    "stem": "矩阵 \\(A\\) 的秩等于其列向量组的 ______。",
    "options": null,
    "ans": "秩",
    "fb": "解：矩阵的秩等于其列向量组的秩（也等于行向量组的秩）。故应填 秩。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-fill-7",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 7,
    "stem": "向量空间 \\(\\mathbb R^n\\) 的维数是 ______。",
    "options": null,
    "ans": "\\(n\\)",
    "fb": "解：\\(\\mathbb R^n\\) 的标准基含 \\(n\\) 个向量，故其维数为 \\(n\\)。故应填 \\(n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-hw-fill-8",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 8,
    "stem": "若 \\(\\beta\\) 可由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 唯一表示，则 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 必 ______（填\"相关\"或\"无关\"）。",
    "options": null,
    "ans": "无关（唯一表示要求表示组无关，见性质",
    "fb": "解：若 \\(\\beta\\) 能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 唯一线性表示，则 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 必线性无关（若它们线性相关，则表示不唯一）。故应填 无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-fill-9",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 9,
    "stem": "向量组 \\(\\alpha_1=(1,2),\\ \\alpha_2=(2,4)\\) 的秩为 ______。",
    "options": null,
    "ans": "3）",
    "fb": "解：\\(\\alpha_2=(2,4)=2(1,2)=2\\alpha_1\\)，两向量成比例，故向量组秩为 1。故应填 1。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-fill-10",
    "ch": 3,
    "src": "hw",
    "type": "fill",
    "no": 10,
    "stem": "设 \\(\\alpha\\) 在基 \\(\\varepsilon_1,\\varepsilon_2,\\varepsilon_3\\) 下的坐标为 \\((1,2,3)^T\\)，则 \\(\\alpha=\\) ______。",
    "options": null,
    "ans": "\\(1\\)（两向量成比例）",
    "fb": "解：由坐标定义，\\(\\alpha=1\\cdot\\varepsilon_1+2\\cdot\\varepsilon_2+3\\cdot\\varepsilon_3=(1,2,3)^T\\)。故应填 \\((1,2,3)^T\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-hw-calc-1",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 1,
    "stem": "设 \\(\\alpha=(1,2,3)^T,\\ \\beta=(2,-1,0)^T\\)，求 \\(2\\alpha-\\beta\\) 与 \\(3\\alpha+\\beta\\)。",
    "options": null,
    "ans": null,
    "fb": "解：由 \\(\\alpha=(1,2,3)^T,\\ \\beta=(2,-1,0)^T\\)，得\n1) \\(2\\alpha-\\beta=2(1,2,3)^T-(2,-1,0)^T=(2,4,6)^T-(2,-1,0)^T=(0,5,6)^T\\)；\n2) \\(3\\alpha+\\beta=3(1,2,3)^T+(2,-1,0)^T=(3,6,9)^T+(2,-1,0)^T=(5,5,9)^T\\)。\n故 \\(2\\alpha-\\beta=(0,5,6)^T\\)，\\(3\\alpha+\\beta=(5,5,9)^T\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-hw-calc-2",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 2,
    "stem": "判定 \\(\\beta=(1,2,3)^T\\) 能否由 \\(\\alpha_1=(1,0,1)^T,\\ \\alpha_2=(0,1,1)^T,\\ \\alpha_3=(1,1,0)^T\\) 线性表示；若能，写出表示式。",
    "options": null,
    "ans": null,
    "fb": "解：设 \\(x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3=\\beta\\)，即\n\\[\\begin{bmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\\\x_3\\end{bmatrix}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}.\\]\n化简得 \\(x_1+x_3=1,\\ x_2+x_3=2,\\ x_1+x_2=3\\)，解得 \\(x_1=1,\\ x_2=2,\\ x_3=0\\)。故 \\(\\beta\\) 能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示，且 \\(\\beta=\\alpha_1+2\\alpha_2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-hw-calc-3",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 3,
    "stem": "求向量组 \\(\\alpha_1=(1,2,-1)^T,\\ \\alpha_2=(2,4,-2)^T,\\ \\alpha_3=(1,0,1)^T\\) 的一个极大无关组与秩。",
    "options": null,
    "ans": null,
    "fb": "解：以 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为列构造矩阵并作初等行变换：\n\\[\\begin{bmatrix}1&2&1\\\\2&4&0\\\\-1&-2&1\\end{bmatrix}\\xrightarrow{r_2-2r_1,\\ r_3+r_1}\\begin{bmatrix}1&2&1\\\\0&0&-2\\\\0&0&2\\end{bmatrix}\\xrightarrow{r_3+r_2}\\begin{bmatrix}1&2&1\\\\0&0&-2\\\\0&0&0\\end{bmatrix}.\\]\n非零行首元位于第 1、3 列，故一个极大无关组可取 \\(\\{\\alpha_1,\\alpha_3\\}\\)，向量组的秩 \\(R=2\\)。（注：\\(\\alpha_2=2\\alpha_1\\)，故 \\(\\alpha_2\\) 可由 \\(\\alpha_1\\) 线性表示。）",
    "pts": 6,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-calc-4",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 4,
    "stem": "判定 \\(\\alpha_1=(1,1,1)^T,\\ \\alpha_2=(1,2,3)^T,\\ \\alpha_3=(2,3,4)^T\\) 是否线性相关，并写出它们之间的线性关系。",
    "options": null,
    "ans": null,
    "fb": "解：以 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为列计算行列式\n\\[\\begin{vmatrix}1&1&2\\\\1&2&3\\\\1&3&4\\end{vmatrix}=1\\cdot(8-9)-1\\cdot(4-3)+2\\cdot(3-2)=-1-1+2=0,\\]\n故向量组线性相关。设 \\(x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3=0\\)，化为方程组得 \\(x_1+x_3=0,\\ x_2+x_3=0\\)，即 \\(x_1=x_2=-x_3\\)。取 \\(x_3=1\\) 得 \\(x_1=-1,\\ x_2=-1\\)，故 \\(-\\alpha_1-\\alpha_2+\\alpha_3=0\\)，即 \\(\\alpha_3=\\alpha_1+\\alpha_2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-calc-5",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 5,
    "stem": "求矩阵 \\(A=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\1&2&1\\end{pmatrix}\\) 的秩。",
    "options": null,
    "ans": null,
    "fb": "解：对 \\(A\\) 作初等行变换\n\\[\\begin{bmatrix}1&2&3\\\\2&4&6\\\\1&2&1\\end{bmatrix}\\xrightarrow{r_2-2r_1,\\ r_3-r_1}\\begin{bmatrix}1&2&3\\\\0&0&0\\\\0&0&-2\\end{bmatrix}\\xrightarrow{\\text{换行}}\\begin{bmatrix}1&2&3\\\\0&0&-2\\\\0&0&0\\end{bmatrix}.\\]\n非零行共 2 行，故 \\(R(A)=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-calc-6",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 6,
    "stem": "判定 \\(\\alpha_1=(1,-1,0)^T,\\ \\alpha_2=(2,1,1)^T,\\ \\alpha_3=(1,2,1)^T\\) 的线性相关性，并写出相关关系（若相关）。",
    "options": null,
    "ans": null,
    "fb": "解：以 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为列计算行列式\n\\[\\begin{vmatrix}1&2&1\\\\-1&1&2\\\\0&1&1\\end{vmatrix}=1\\cdot(1-2)-2\\cdot(-1-0)+1\\cdot(-1-0)=-1+2-1=0,\\]\n故向量组线性相关。设 \\(x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3=0\\)，化为方程组得 \\(x_1+2x_2+x_3=0,\\ -x_1+x_2+2x_3=0,\\ x_2+x_3=0\\)，解得 \\(x_1=x_3,\\ x_2=-x_3\\)。取 \\(x_3=1\\) 得 \\(x_1=1,\\ x_2=-1\\)，故 \\(\\alpha_1-\\alpha_2+\\alpha_3=0\\)，即 \\(\\alpha_2=\\alpha_1+\\alpha_3\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-calc-7",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 7,
    "stem": "向量组 \\(\\alpha_1=(1,1,1)^T,\\ \\alpha_2=(1,2,3)^T,\\ \\alpha_3=(1,t,3)^T\\) 何时线性相关？求 \\(t\\)。",
    "options": null,
    "ans": null,
    "fb": "解：三个三维向量线性相关 \\(\\iff\\) 其行列式为零。计算\n\\[\\begin{vmatrix}1&1&1\\\\1&2&t\\\\1&3&3\\end{vmatrix}=1\\cdot(6-3t)-1\\cdot(3-t)+1\\cdot(3-2)=4-2t.\\]\n令 \\(4-2t=0\\)，得 \\(t=2\\)。故当 \\(t=2\\) 时向量组线性相关（此时 \\(\\alpha_3=\\alpha_2\\)）。",
    "pts": 6,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-hw-calc-8",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 8,
    "stem": "设 \\(A\\) 为 3 阶矩阵且 \\(R(A)=2\\)，求 \\(R(A^T)\\) 与 \\(R(2A)\\)。",
    "options": null,
    "ans": null,
    "fb": "解：由矩阵秩的性质，\\(R(A^T)=R(A)=2\\)。又非零常数乘矩阵不改变其秩，故 \\(R(2A)=R(A)=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-calc-9",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 9,
    "stem": "判定集合 \\(V=\\{x=(x_1,x_2,x_3)^T\\mid x_1+x_2+x_3=0\\}\\) 是否为向量空间，并说明理由。",
    "options": null,
    "ans": null,
    "fb": "解：\\(V\\) 是向量空间（\\(\\mathbb R^3\\) 的子空间）。理由：\\((0,0,0)^T\\in V\\)（满足 \\(0+0+0=0\\)）；若 \\(x,y\\in V\\)，则 \\((x_1+y_1)+(x_2+y_2)+(x_3+y_3)=(x_1+x_2+x_3)+(y_1+y_2+y_3)=0\\)，故 \\(x+y\\in V\\)；对任意 \\(k\\in\\mathbb R\\)，\\(kx\\) 满足 \\(kx_1+kx_2+kx_3=k(x_1+x_2+x_3)=0\\)，故 \\(kx\\in V\\)。因此 \\(V\\) 对加法与数乘封闭，是向量空间。",
    "pts": 6,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-hw-calc-10",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 10,
    "stem": "在基 \\(\\alpha_1=(1,1)^T,\\ \\alpha_2=(1,-1)^T\\) 下，求 \\(\\beta=(3,1)^T\\) 的坐标。",
    "options": null,
    "ans": null,
    "fb": "解：设 \\(\\beta=x_1\\alpha_1+x_2\\alpha_2\\)，即\n\\[\\begin{bmatrix}1&1\\\\1&-1\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}=\\begin{bmatrix}3\\\\1\\end{bmatrix}.\\]\n由 \\(x_1+x_2=3\\) 与 \\(x_1-x_2=1\\) 相加得 \\(2x_1=4\\)，故 \\(x_1=2,\\ x_2=1\\)。因此 \\(\\beta\\) 在该基下的坐标为 \\((2,1)^T\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-hw-calc-11",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 11,
    "stem": "将矩阵 \\(A=\\begin{pmatrix}1&1&1\\\\1&2&3\\\\1&3&6\\end{pmatrix}\\) 化为行阶梯形，并求其秩。",
    "options": null,
    "ans": null,
    "fb": "解：对 \\(A\\) 作初等行变换\n\\[\\begin{bmatrix}1&1&1\\\\1&2&3\\\\1&3&6\\end{bmatrix}\\xrightarrow{r_2-r_1,\\ r_3-r_1}\\begin{bmatrix}1&1&1\\\\0&1&2\\\\0&2&5\\end{bmatrix}\\xrightarrow{r_3-2r_2}\\begin{bmatrix}1&1&1\\\\0&1&2\\\\0&0&1\\end{bmatrix}.\\]\n此为行阶梯形，主元位于第 1、2、3 列，非零行共 3 行，故 \\(R(A)=3\\)（矩阵满秩可逆）。",
    "pts": 6,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-hw-calc-12",
    "ch": 3,
    "src": "hw",
    "type": "calc",
    "no": 12,
    "stem": "判定 \\(\\alpha_1=(1,0,0)^T,\\ \\alpha_2=(1,1,0)^T,\\ \\alpha_3=(1,1,1)^T\\) 是否为 \\(\\mathbb R^3\\) 的一组基。",
    "options": null,
    "ans": null,
    "fb": "解：以 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为列（坐标向量）构成矩阵，计算行列式\n\\[\\begin{vmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{vmatrix}=1\\neq0,\\]\n故三向量线性无关。因 \\(\\mathbb R^3\\) 是 3 维空间，3 个线性无关的向量即构成一组基。故它们是 \\(\\mathbb R^3\\) 的一组基。",
    "pts": 6,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-hw-proof-1",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 1,
    "stem": "证明：单个向量 \\(\\alpha\\) 线性相关 \\(\\iff\\alpha=0\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：单个向量 \\(\\alpha\\) 线性相关是指存在不全为零的数 \\(k\\) 使 \\(k\\alpha=0\\)。由于只有一个系数，即存在 \\(k\\neq0\\) 使 \\(k\\alpha=0\\)，两边乘 \\(1/k\\) 得 \\(\\alpha=0\\)。反之，若 \\(\\alpha=0\\)，取 \\(k=1\\neq0\\)，有 \\(1\\cdot\\alpha=0\\)，故 \\(\\alpha\\) 线性相关。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s32"
  },
  {
    "id": "c3-hw-proof-2",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 2,
    "stem": "证明：两个向量 \\(\\alpha_1,\\alpha_2\\) 线性相关 \\(\\iff\\) 它们的对应分量成比例。",
    "options": null,
    "ans": null,
    "fb": "证明：\\(\\alpha_1,\\alpha_2\\) 线性相关 \\(\\iff\\) 存在不全为零的数 \\(k_1,k_2\\) 使 \\(k_1\\alpha_1+k_2\\alpha_2=0\\)。若 \\(k_1\\neq0\\)，则 \\(\\alpha_1=-(k_2/k_1)\\alpha_2\\)，两向量对应分量成比例；若 \\(k_1=0\\)，则 \\(k_2\\neq0\\)，得 \\(\\alpha_2=0\\)，零向量与任意向量成比例。反之，若两向量成比例，设 \\(\\alpha_1=\\lambda\\alpha_2\\)，则 \\(\\alpha_1-\\lambda\\alpha_2=0\\)，系数 \\(1,-\\lambda\\) 不全为零，故线性相关。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s32"
  },
  {
    "id": "c3-hw-proof-3",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 3,
    "stem": "证明：若 \\(\\alpha_1,\\alpha_2\\) 线性无关，则 \\(\\alpha_1+\\alpha_2,\\ \\alpha_1-\\alpha_2\\) 也线性无关。",
    "options": null,
    "ans": null,
    "fb": "证明：设 \\(k_1(\\alpha_1+\\alpha_2)+k_2(\\alpha_1-\\alpha_2)=0\\)，整理得 \\((k_1+k_2)\\alpha_1+(k_1-k_2)\\alpha_2=0\\)。因 \\(\\alpha_1,\\alpha_2\\) 线性无关，故\n\\[k_1+k_2=0,\\quad k_1-k_2=0.\\]\n解得 \\(k_1=k_2=0\\)。故 \\(\\alpha_1+\\alpha_2,\\ \\alpha_1-\\alpha_2\\) 线性无关。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s32"
  },
  {
    "id": "c3-hw-proof-4",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 4,
    "stem": "证明：若部分组线性相关，则整体组也线性相关；若整体组线性无关，则任意部分组也线性无关。",
    "options": null,
    "ans": null,
    "fb": "证明：设部分组 \\(\\gamma_1,\\dots,\\gamma_r\\) 线性相关，则存在不全为零的数 \\(c_1,\\dots,c_r\\) 使 \\(\\sum_{i=1}^r c_i\\gamma_i=0\\)。对整体组中其余向量补系数 \\(0\\)，得到整体组一个系数不全为零的线性组合为零，故整体组线性相关。其逆否命题为：若整体组线性无关，则其中任意部分组必线性无关。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s32"
  },
  {
    "id": "c3-hw-proof-5",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 5,
    "stem": "证明（性质 3.5(1)）：若向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 可由 \\(\\beta_1,\\dots,\\beta_l\\) 线性表示，且 \\(m>l\\)，则 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性相关。",
    "options": null,
    "ans": null,
    "fb": "证明：由已知，设 \\(\\alpha_j=\\sum_{i=1}^l a_{ij}\\beta_i\\ (j=1,\\dots,m)\\)。考虑线性组合 \\(\\sum_{j=1}^m x_j\\alpha_j=0\\)，代入得\n\\[\\sum_{j=1}^m x_j\\sum_{i=1}^l a_{ij}\\beta_i=\\sum_{i=1}^l\\left(\\sum_{j=1}^m a_{ij}x_j\\right)\\beta_i=0.\\]\n这是关于 \\(x_1,\\dots,x_m\\) 的齐次线性方程组，方程个数为 \\(l\\)，未知数个数为 \\(m\\)，且 \\(m>l\\)，故必有非零解。于是存在不全为零的 \\(x_j\\) 使 \\(\\sum_{j=1}^m x_j\\alpha_j=0\\)，即 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性相关。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s32"
  },
  {
    "id": "c3-hw-proof-6",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 6,
    "stem": "证明：等价的向量组具有相同的秩。",
    "options": null,
    "ans": null,
    "fb": "证明：设向量组 \\(A\\) 与 \\(B\\) 等价，且 \\(R(A)=r,\\ R(B)=s\\)。取 \\(A\\) 的一个极大无关组 \\(A_0\\)（含 \\(r\\) 个向量）。因 \\(A\\) 可由 \\(B\\) 线性表示，故 \\(A_0\\) 也可由 \\(B\\) 线性表示。而 \\(B\\) 的秩为 \\(s\\)，任一可由 \\(B\\) 线性表示的无关向量组所含向量个数不超过 \\(s\\)，故 \\(r\\le s\\)。同理，由 \\(B\\) 可由 \\(A\\) 线性表示得 \\(s\\le r\\)。于是 \\(r=s\\)，即等价向量组秩相同。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s33"
  },
  {
    "id": "c3-hw-proof-7",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 7,
    "stem": "证明：对任意矩阵 \\(A\\)，有 \\(R(A)=R(A^T)\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：\\(R(A)\\) 等于 \\(A\\) 的行向量组的秩（行秩），\\(R(A^T)\\) 等于 \\(A^T\\) 的行向量组的秩，即 \\(A\\) 的列向量组的秩（列秩）。对任意矩阵，行秩恒等于列秩（二者均等于矩阵化为行阶梯形后非零行的个数，亦即主元列数）。故 \\(R(A)=R(A^T)\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s33"
  },
  {
    "id": "c3-hw-proof-8",
    "ch": 3,
    "src": "hw",
    "type": "proof",
    "no": 8,
    "stem": "证明：向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性无关 \\(\\iff R(\\alpha_1,\\dots,\\alpha_m)=m\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：设矩阵 \\(M=(\\alpha_1,\\dots,\\alpha_m)\\)。向量组 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性无关，等价于齐次线性方程组 \\(Mx=0\\) 只有零解，等价于 \\(M\\) 的列向量组线性无关，等价于 \\(M\\) 的列秩（即矩阵秩 \\(R(\\alpha_1,\\dots,\\alpha_m)\\)）等于列数 \\(m\\)。反之，若 \\(R(\\alpha_1,\\dots,\\alpha_m)=m\\)，则 \\(Mx=0\\) 只有零解，故向量组线性无关。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s33"
  },
  {
    "id": "c3-hw-app-1",
    "ch": 3,
    "src": "hw",
    "type": "app",
    "no": 1,
    "stem": "用三原色向量 \\(R=(1,0,0)^T,\\ G=(0,1,0)^T,\\ B=(0,0,1)^T\\)，把杏色 \\((0.6,0.4,0.2)^T\\) 表示为它们的线性组合。",
    "options": null,
    "ans": null,
    "fb": "解：因 \\(R,G,B\\) 恰为 \\(\\mathbb R^3\\) 的标准基，任意向量 \\((r,g,b)^T=rR+gG+bB\\)。故杏色\n\\[(0.6,0.4,0.2)^T=0.6R+0.4G+0.2B.\\]\n即按 R、G、B 三原色的混合配比分别为 \\(0.6,0.4,0.2\\)（三者之和已为 1，表示不透明颜色的加权混合）。",
    "pts": 4,
    "diff": 2,
    "sec": "s35"
  },
  {
    "id": "c3-hw-app-2",
    "ch": 3,
    "src": "hw",
    "type": "app",
    "no": 2,
    "stem": "配平化学反应 \\(a\\,\\mathrm{H_2}+b\\,\\mathrm{O_2}\\to c\\,\\mathrm{H_2O}\\)，用向量组的语言说明其代数本质，并写出最小整数解。",
    "options": null,
    "ans": null,
    "fb": "解：按原子守恒列方程。设系数为 \\(a,b,c\\)，氢原子守恒 \\(2a=2c\\)，氧原子守恒 \\(2b=c\\)，即\n\\[\\begin{cases}2a-2c=0,\\\\2b-c=0,\\end{cases}\\quad\\text{即}\\quad \\begin{bmatrix}2&0&-2\\\\0&2&-1\\end{bmatrix}\\begin{bmatrix}a\\\\b\\\\c\\end{bmatrix}=0.\\]\n系数矩阵秩为 2，未知数 3 个，故零空间维数为 1，存在一维解空间。取 \\(c=2\\)，得 \\(a=2,\\ b=1\\)，最小整数解为 \\(2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}\\)。代数本质：配平即求化学方程式系数向量落在原子守恒齐次方程组的零空间中；未知数个数多于独立方程个数，故必有非平凡解，整个解空间给出所有配比。",
    "pts": 4,
    "diff": 2,
    "sec": "s35"
  },
  {
    "id": "c3-hw-app-3",
    "ch": 3,
    "src": "hw",
    "type": "app",
    "no": 3,
    "stem": "给出三个数据点 \\((1,2),(2,4),(3,6)\\)，把它们看作二维向量，求其向量组的秩，并说明这组数据在几何上的特征。",
    "options": null,
    "ans": null,
    "fb": "解：将数据点视为向量 \\(v_1=(1,2)^T,\\ v_2=(2,4)^T,\\ v_3=(3,6)^T\\)。显然 \\(v_2=2v_1,\\ v_3=3v_1\\)，三者均平行于 \\((1,2)^T\\)，故向量组的秩为 1。几何上，这些点全部落在过原点的直线 \\(y=2x\\) 上，相互共线，张成的子空间是一维直线，因此秩为 1。",
    "pts": 4,
    "diff": 2,
    "sec": "s35"
  },
  {
    "id": "c3-hw-app-4",
    "ch": 3,
    "src": "hw",
    "type": "app",
    "no": 4,
    "stem": "GPS 定位中，接收机到卫星的距离差可转化为位置向量的线性函数。试用\"向量空间中的坐标\"概念，简述为何最少需要 3 颗卫星（平面）或 4 颗卫星（空间）才能唯一确定位置。",
    "options": null,
    "ans": null,
    "fb": "解：定位可看作在向量空间中确定接收机位置向量。设平面（2 维）中未知量为坐标 \\((x,y)\\) 再加上接收机钟差一个未知参数，共 3 个未知数；空间（3 维）中为 \\((x,y,z)\\) 加钟差，共 4 个未知数。每颗卫星提供一条距离（差）方程，相当于一个独立的坐标测量约束。要唯一确定位置向量，所需独立方程数不少于未知数个数，故平面至少需 3 颗卫星、空间至少需 4 颗卫星。这正对应“在 \\(n\\) 维向量空间中确定一点坐标，需要 \\(n\\) 个独立方向/测量”。",
    "pts": 4,
    "diff": 2,
    "sec": "s35"
  },
  {
    "id": "c3-hw-app-5",
    "ch": 3,
    "src": "hw",
    "type": "app",
    "no": 5,
    "stem": "向量组 \\(\\alpha_1=(1,1)^T,\\ \\alpha_2=(2,2)^T\\) 张成的向量空间 \\(L=\\{\\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\}\\) 的维数是多少？它是什么几何图形？",
    "options": null,
    "ans": null,
    "fb": "解：因 \\(\\alpha_2=(2,2)^T=2\\alpha_1\\)，故\n\\[L=\\{\\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\}=\\{(\\lambda_1+2\\lambda_2)\\alpha_1\\}=\\{k(1,1)^T\\mid k\\in\\mathbb R\\}.\\]\n因此 \\(L\\) 由单个非零向量 \\((1,1)^T\\) 张成，维数为 1。几何上 \\(L\\) 是 \\(\\mathbb R^2\\) 中过原点、方向为 \\((1,1)^T\\) 的一条直线（即直线 \\(y=x\\)），是一个一维向量空间。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-1",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 1,
    "stem": "1. n 维向量 \\(\\alpha=(a_1,\\dots,a_n)^T\\) 与 \\(\\beta=(b_1,\\dots,b_n)^T\\) 相等是指（　）。",
    "options": [
      [
        "A",
        "维数相同且对应分量全相等"
      ],
      [
        "B",
        "维数相同"
      ],
      [
        "C",
        "长度相同"
      ],
      [
        "D",
        "方向相同"
      ]
    ],
    "ans": "A",
    "fb": "✓ 相等要求同维且每个对应分量都相等。",
    "pts": 4,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-test-mc-2",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 2,
    "stem": "2. 向量组线性相关的定义中，系数 \\(x_1,\\dots,x_m\\) 应（　）。",
    "options": [
      [
        "A",
        "不全为零"
      ],
      [
        "B",
        "全为零"
      ],
      [
        "C",
        "全为非零"
      ],
      [
        "D",
        "至少一个为 1"
      ]
    ],
    "ans": "A",
    "fb": "✓ 存在不全为零的系数使组合为零才是相关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-3",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 3,
    "stem": "3. 单个向量 \\(\\alpha\\) 线性相关当且仅当（　）。",
    "options": [
      [
        "A",
        "\\(\\alpha\\neq0\\)"
      ],
      [
        "B",
        "\\(\\alpha=0\\)"
      ],
      [
        "C",
        "\\(\\|\\alpha\\|=1\\)"
      ],
      [
        "D",
        "以上都不对"
      ]
    ],
    "ans": "B",
    "fb": "✓ 唯一系数 \\(k\\neq0\\) 使 \\(k\\alpha=0\\) 当且仅当 \\(\\alpha=0\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-4",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 4,
    "stem": "4. 两个向量 \\(\\alpha_1,\\alpha_2\\) 线性相关的充要条件是（　）。",
    "options": [
      [
        "A",
        "模长相等"
      ],
      [
        "B",
        "和为零向量"
      ],
      [
        "C",
        "互相垂直"
      ],
      [
        "D",
        "对应分量成比例"
      ]
    ],
    "ans": "D",
    "fb": "✓ 两向量相关 ⟺ 共线 ⟺ 分量成比例。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-5",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 5,
    "stem": "5. 若 \\(\\alpha_1,\\alpha_2\\) 线性无关，则 \\(\\alpha_1+\\alpha_2,\\ \\alpha_1-\\alpha_2\\)（　）。",
    "options": [
      [
        "A",
        "线性相关"
      ],
      [
        "B",
        "必含零向量"
      ],
      [
        "C",
        "线性无关"
      ],
      [
        "D",
        "秩为 1"
      ]
    ],
    "ans": "C",
    "fb": "✓ 变换矩阵行列式 \\(-2\\neq0\\)，故仍无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-6",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 6,
    "stem": "6. \"部分相关则整体相关\"的逆否命题是（　）。",
    "options": [
      [
        "A",
        "部分无关则整体无关"
      ],
      [
        "B",
        "整体相关则部分相关"
      ],
      [
        "C",
        "整体无关则部分无关"
      ],
      [
        "D",
        "部分相关则部分无关"
      ]
    ],
    "ans": "C",
    "fb": "✓ 原命题逆否即性质 3.2(2)。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-7",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 7,
    "stem": "7. 若向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 可由 \\(\\beta_1,\\beta_2\\) 线性表示，则（　）。",
    "options": [
      [
        "A",
        "必线性无关"
      ],
      [
        "B",
        "必线性相关"
      ],
      [
        "C",
        "秩为 3"
      ],
      [
        "D",
        "秩为 2"
      ]
    ],
    "ans": "B",
    "fb": "✓ 性质 3.5：\\(m=3>l=2\\)，故相关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-8",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 8,
    "stem": "8. 3 个二维向量（　）。",
    "options": [
      [
        "A",
        "必线性无关"
      ],
      [
        "B",
        "秩为 3"
      ],
      [
        "C",
        "必线性相关"
      ],
      [
        "D",
        "可能无关也可能相关"
      ]
    ],
    "ans": "C",
    "fb": "✓ 个数 3 大于维数 2，必相关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-9",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 9,
    "stem": "9. 向量组秩的定义基于（　）。",
    "options": [
      [
        "A",
        "向量个数"
      ],
      [
        "B",
        "矩阵阶数"
      ],
      [
        "C",
        "向量维数"
      ],
      [
        "D",
        "极大无关组所含向量个数"
      ]
    ],
    "ans": "D",
    "fb": "✓ 秩 = 极大无关组中向量个数。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-10",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 10,
    "stem": "10. 等价向量组（　）。",
    "options": [
      [
        "A",
        "个数相同"
      ],
      [
        "B",
        "秩相同"
      ],
      [
        "C",
        "由相同向量组成"
      ],
      [
        "D",
        "必都线性无关"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定理 3.1：等价则秩相等。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-11",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 11,
    "stem": "11. 设 \\(\\alpha_1=(1,2,3)^T,\\ \\alpha_2=(2,4,6)^T,\\ \\alpha_3=(0,1,1)^T\\)，则该向量组的秩为（　）。",
    "options": [
      [
        "A",
        "1"
      ],
      [
        "B",
        "2"
      ],
      [
        "C",
        "3"
      ],
      [
        "D",
        "0"
      ]
    ],
    "ans": "B",
    "fb": "✓ \\(\\alpha_2=2\\alpha_1\\)，故 \\(\\alpha_1,\\alpha_3\\) 线性无关（不成比例），秩为 2。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-12",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 12,
    "stem": "12. 三个三维向量线性相关的充要条件是（　）。",
    "options": [
      [
        "A",
        "行列式不为零"
      ],
      [
        "B",
        "它们构成的行列式为零"
      ],
      [
        "C",
        "秩为 3"
      ],
      [
        "D",
        "两两线性无关"
      ]
    ],
    "ans": "B",
    "fb": "✓ 推论 3.2：\\(n\\) 个 \\(n\\) 维向量相关 ⟺ \\(|A|=0\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-13",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 13,
    "stem": "13. 设 \\(A\\) 为 3 阶且 \\(|A|=0\\)，则 \\(A\\) 的列向量组（　）。",
    "options": [
      [
        "A",
        "线性无关"
      ],
      [
        "B",
        "线性相关"
      ],
      [
        "C",
        "秩为 3"
      ],
      [
        "D",
        "含单位向量"
      ]
    ],
    "ans": "B",
    "fb": "✓ \\(|A|=0\\Rightarrow R(A)\\lt3\\Rightarrow\\) 列相关。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-14",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 14,
    "stem": "14. 设 \\(\\alpha_1=(1,0,0)^T,\\alpha_2=(0,1,0)^T,\\alpha_3=(1,1,0)^T\\)，其秩为（　）。",
    "options": [
      [
        "A",
        "3"
      ],
      [
        "B",
        "1"
      ],
      [
        "C",
        "2"
      ],
      [
        "D",
        "0"
      ]
    ],
    "ans": "C",
    "fb": "✓ 三个向量均在第 3 分量为 0 的平面内，秩 2。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-15",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 15,
    "stem": "15. 关于极大无关组，正确的说法是（　）。",
    "options": [
      [
        "A",
        "唯一确定"
      ],
      [
        "B",
        "必含零向量"
      ],
      [
        "C",
        "不唯一，但所含向量个数相同"
      ],
      [
        "D",
        "个数等于向量维数"
      ]
    ],
    "ans": "C",
    "fb": "✓ 不同极大无关组个数都等于秩。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-16",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 16,
    "stem": "16. 向量空间对（　）封闭。",
    "options": [
      [
        "A",
        "仅加法"
      ],
      [
        "B",
        "加法与数乘"
      ],
      [
        "C",
        "仅数乘"
      ],
      [
        "D",
        "转置"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定义 3.7 要求加法与数乘封闭。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-17",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 17,
    "stem": "17. 集合 \\(V=\\{(1,x)^T\\mid x\\in\\mathbb R\\}\\)（　）。",
    "options": [
      [
        "A",
        "是向量空间"
      ],
      [
        "B",
        "仅当 \\(x=0\\) 时是"
      ],
      [
        "C",
        "不是向量空间"
      ],
      [
        "D",
        "是零空间"
      ]
    ],
    "ans": "C",
    "fb": "✓ 对数乘不封闭（如 \\(2(1,0)^T=(2,0)^T\\notin V\\)）。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-18",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 18,
    "stem": "18. \\(\\mathbb R^n\\) 的一组基可取（　）。",
    "options": [
      [
        "A",
        "任意 \\(n\\) 个向量"
      ],
      [
        "B",
        "一个非零向量"
      ],
      [
        "C",
        "零向量"
      ],
      [
        "D",
        "\\(n\\) 维单位坐标向量组"
      ]
    ],
    "ans": "D",
    "fb": "✓ 单位坐标向量组线性无关且张成 \\(\\mathbb R^n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-19",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 19,
    "stem": "19. 基变换公式中的过渡矩阵（　）。",
    "options": [
      [
        "A",
        "可逆"
      ],
      [
        "B",
        "不可逆"
      ],
      [
        "C",
        "必为对角阵"
      ],
      [
        "D",
        "必为单位阵"
      ]
    ],
    "ans": "A",
    "fb": "✓ 两组基互相可表示，过渡矩阵可逆。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-20",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 20,
    "stem": "20. 设基 \\((\\beta_1,\\dots,\\beta_r)=(\\alpha_1,\\dots,\\alpha_r)P\\)（\\(P\\) 为过渡矩阵），同一向量在旧基下坐标为 \\(x\\)、新基下坐标为 \\(y\\)，则坐标变换公式为（　）。",
    "options": [
      [
        "A",
        "\\(x=Py\\)，即 \\(y=P^{-1}x\\)"
      ],
      [
        "B",
        "\\(y=Px\\)"
      ],
      [
        "C",
        "\\(x=P^{T}y\\)"
      ],
      [
        "D",
        "\\(y=P^{T}x\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 由 \\(\\alpha\\) 的两种展开：\\((\\alpha_1,\\dots,\\alpha_r)x=(\\beta_1,\\dots,\\beta_r)y=(\\alpha_1,\\dots,\\alpha_r)Py\\)，由坐标唯一性得 \\(x=Py\\)。基\"正向\"过渡，坐标\"反向\"变换。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-test-mc-21",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 21,
    "stem": "21. （考研真题）若 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关，且 \\(\\beta_1=\\alpha_1+\\alpha_2,\\ \\beta_2=\\alpha_2+\\alpha_3,\\ \\beta_3=\\alpha_3+\\alpha_1\\)，则 \\(\\beta_1,\\beta_2,\\beta_3\\)（　）。",
    "options": [
      [
        "A",
        "必含零向量"
      ],
      [
        "B",
        "线性相关"
      ],
      [
        "C",
        "秩为 1"
      ],
      [
        "D",
        "线性无关"
      ]
    ],
    "ans": "D",
    "fb": "✓ 变换行列式 \\(2\\neq0\\)，故仍无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-22",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 22,
    "stem": "22. 设 \\(\\alpha_1,\\alpha_2\\) 线性无关，\\(\\beta_1=\\alpha_1+\\alpha_2,\\ \\beta_2=\\alpha_1-\\alpha_2\\)，则 \\(\\beta_1,\\beta_2\\)（　）。",
    "options": [
      [
        "A",
        "线性相关"
      ],
      [
        "B",
        "线性无关"
      ],
      [
        "C",
        "秩为 1"
      ],
      [
        "D",
        "必含零向量"
      ]
    ],
    "ans": "B",
    "fb": "✓ 变换矩阵 \\(\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\) 行列式 \\(-2\\neq0\\)，故仍无关。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-test-mc-23",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 23,
    "stem": "23. 向量组 \\(\\alpha_1=(1,0)^T,\\alpha_2=(0,1)^T,\\alpha_3=(1,1)^T,\\alpha_4=(2,3)^T\\) 的秩（即极大无关组所含向量个数）为（　）。",
    "options": [
      [
        "A",
        "2"
      ],
      [
        "B",
        "3"
      ],
      [
        "C",
        "4"
      ],
      [
        "D",
        "1"
      ]
    ],
    "ans": "A",
    "fb": "✓ 四个二维向量必相关；而 \\(\\alpha_1,\\alpha_2\\) 已张成 \\(\\mathbb R^2\\)，故秩为 2。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-test-mc-24",
    "ch": 3,
    "src": "test",
    "type": "mc",
    "no": 24,
    "stem": "24. 求向量组极大无关组的标准步骤是：以向量为列构成矩阵，然后（　）。",
    "options": [
      [
        "A",
        "求逆矩阵"
      ],
      [
        "B",
        "计算行列式"
      ],
      [
        "C",
        "转置"
      ],
      [
        "D",
        "初等行变换化为阶梯形"
      ]
    ],
    "ans": "D",
    "fb": "✓ 行变换后主元列对应原向量组的极大无关组。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c4-hw-mc-1",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 1,
    "stem": "\\(n\\) 元齐次线性方程组 \\(Ax=0\\) 有非零解的充分必要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=n\\)"
      ],
      [
        "B",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "C",
        "\\(R(A)\\gt n\\)"
      ],
      [
        "D",
        "\\(|A|\\neq0\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：n元齐次线性方程组 \\(Ax=0\\) 有非零解的充分必要条件是系数矩阵的秩小于未知数个数，即 \\(R(A)<n\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s41"
  },
  {
    "id": "c4-hw-mc-2",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 2,
    "stem": "非齐次线性方程组 \\(Ax=b\\) 有解的充分必要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=n\\)"
      ],
      [
        "B",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "C",
        "\\(R(A)=R(A,b)\\)"
      ],
      [
        "D",
        "\\(R(A)\\neq R(A,b)\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：非齐次线性方程组 \\(Ax=b\\) 有解的充分必要条件是系数矩阵的秩等于增广矩阵的秩，即 \\(R(A)=R(A,b)\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-3",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 3,
    "stem": "当 \\(R(A)=r\\lt n\\) 时，齐次方程组 \\(Ax=0\\) 的基础解系含有（　）个解向量。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(R(A)\\)"
      ],
      [
        "C",
        "\\(n-R(A)\\)"
      ],
      [
        "D",
        "\\(R(A)-n\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：当 \\(R(A)=r<n\\) 时，齐次方程组 \\(Ax=0\\) 的基础解系所含解向量个数为 \\(n-r\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s41"
  },
  {
    "id": "c4-hw-mc-4",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 4,
    "stem": "非齐次方程组 \\(Ax=b\\) 的通解结构是（　）。",
    "options": [
      [
        "A",
        "一个特解"
      ],
      [
        "B",
        "齐次通解"
      ],
      [
        "C",
        "特解 \\(+\\) 齐次通解"
      ],
      [
        "D",
        "齐次方程组的特解"
      ]
    ],
    "ans": "C",
    "fb": "解析：非齐次线性方程组 \\(Ax=b\\) 的通解结构为：它的任一特解加上对应齐次方程组 \\(Ax=0\\) 的通解，即 \\(x=\\eta^*+\\xi\\)（\\(\\xi\\) 为 \\(Ax=0\\) 的通解）。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-5",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 5,
    "stem": "设 \\(A\\) 为 \\(3\\) 阶方阵且 \\(|A|=0\\)，则齐次方程组 \\(Ax=0\\)（　）。",
    "options": [
      [
        "A",
        "只有零解"
      ],
      [
        "B",
        "有非零解"
      ],
      [
        "C",
        "无解"
      ],
      [
        "D",
        "有唯一解"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(\\lvert A\\rvert=0\\) 说明 \\(R(A)<3\\)，故齐次方程组 \\(Ax=0\\) 有非零解（基础解系含 \\(3-R(A)\\ge 1\\) 个向量）。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s41"
  },
  {
    "id": "c4-hw-mc-6",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 6,
    "stem": "方程组 \\(\\begin{cases}x+y=1,\\\\ 2x+2y=2\\end{cases}\\) 的解的情况是（　）。",
    "options": [
      [
        "A",
        "唯一解"
      ],
      [
        "B",
        "无穷多解"
      ],
      [
        "C",
        "无解"
      ],
      [
        "D",
        "不确定"
      ]
    ],
    "ans": "B",
    "fb": "解析：第二个方程 \\(2x+2y=2\\) 等价于 \\(x+y=1\\)，与第一个方程相同，两方程同解，故方程组有无穷多解。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-7",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 7,
    "stem": "方程组 \\(\\begin{cases}x+y=1,\\\\ x+y=2\\end{cases}\\) 的解的情况是（　）。",
    "options": [
      [
        "A",
        "唯一解"
      ],
      [
        "B",
        "无穷多解"
      ],
      [
        "C",
        "无解"
      ],
      [
        "D",
        "确定有解"
      ]
    ],
    "ans": "C",
    "fb": "解析：两式相减得 \\(0=1\\)，矛盾，故方程组无解。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-8",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 8,
    "stem": "（考研真题）若 \\(A\\) 为 \\(m\\times n\\) 矩阵且 \\(R(A)=m\\)，则 \\(Ax=b\\)（　）。",
    "options": [
      [
        "A",
        "必无解"
      ],
      [
        "B",
        "必有解"
      ],
      [
        "C",
        "必唯一"
      ],
      [
        "D",
        "必无穷多"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(R(A)=m\\)，而增广矩阵 \\((A,b)\\) 只有 \\(m\\) 行，故 \\(R(A,b)\\le m\\)；又 \\(R(A)\\le R(A,b)\\)，从而 \\(R(A)=R(A,b)=m\\)，方程组有解。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-9",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 9,
    "stem": "设 \\(A\\) 为 \\(4\\) 阶方阵且 \\(R(A)=3\\)，则 \\(Ax=0\\) 的基础解系含（　）个向量。",
    "options": [
      [
        "A",
        "\\(1\\)"
      ],
      [
        "B",
        "\\(2\\)"
      ],
      [
        "C",
        "\\(3\\)"
      ],
      [
        "D",
        "\\(4\\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：未知数个数 \\(n=4\\)，基础解系含 \\(n-R(A)=4-3=1\\) 个解向量。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s41"
  },
  {
    "id": "c4-hw-mc-10",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 10,
    "stem": "设 \\(\\xi\\) 是 \\(Ax=0\\) 的解，\\(\\eta\\) 是 \\(Ax=b\\) 的解，则下列向量中一定是 \\(Ax=b\\) 的解的是（　）。",
    "options": [
      [
        "A",
        "\\(\\xi+\\eta\\)"
      ],
      [
        "B",
        "\\(\\xi-\\eta\\)"
      ],
      [
        "C",
        "\\(2\\xi\\)"
      ],
      [
        "D",
        "\\(2\\eta\\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：因 \\(A\\xi=0,\\ A\\eta=b\\)，则 \\(A(\\eta+\\xi)=A\\eta+A\\xi=b+0=b\\)，故 \\(\\eta+\\xi\\) 仍是 \\(Ax=b\\) 的解。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s43"
  },
  {
    "id": "c4-hw-mc-11",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 11,
    "stem": "齐次线性方程组 \\(Ax=0\\) 的全部解向量构成的集合，对加法和数乘封闭，称为（　）。",
    "options": [
      [
        "A",
        "数域"
      ],
      [
        "B",
        "向量空间"
      ],
      [
        "C",
        "群"
      ],
      [
        "D",
        "环"
      ]
    ],
    "ans": "B",
    "fb": "解析：齐次线性方程组 \\(Ax=0\\) 的全部解向量集合关于向量加法和数乘封闭，构成向量空间，称为该齐次方程组的解空间。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s41"
  },
  {
    "id": "c4-hw-mc-12",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 12,
    "stem": "克莱姆法则能够直接使用的条件是（　）。",
    "options": [
      [
        "A",
        "方程数等于未知数且 \\(|A|\\neq0\\)"
      ],
      [
        "B",
        "\\(m\\lt n\\)"
      ],
      [
        "C",
        "方程组齐次"
      ],
      [
        "D",
        "任意情形"
      ]
    ],
    "ans": "A",
    "fb": "解析：克莱姆法则直接适用于方程个数等于未知数个数且系数行列式 \\(\\lvert A\\rvert\\neq0\\) 的情形（此时解唯一且可用行列式表示）。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-13",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 13,
    "stem": "（期末真题）设 \\(A,B\\) 为 \\(n\\) 阶方阵且 \\(AB=O,\\ B\\neq O\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(A\\) 可逆"
      ],
      [
        "B",
        "\\(R(A)=n\\)"
      ],
      [
        "C",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "D",
        "\\(R(B)=0\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：由 \\(AB=O\\) 且 \\(B\\neq O\\) 知 \\(A\\) 有非零解（\\(B\\) 的某列是非零解），故 \\(\\lvert A\\rvert=0\\)，即 \\(A\\) 不可逆。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s43"
  },
  {
    "id": "c4-hw-mc-14",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 14,
    "stem": "设 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3)\\)，\\(\\beta=\\alpha_1+2\\alpha_2+3\\alpha_3\\)，则 \\(Ax=\\beta\\)（　）。",
    "options": [
      [
        "A",
        "无解"
      ],
      [
        "B",
        "有解，特解为 \\((1,2,3)^T\\)"
      ],
      [
        "C",
        "只有零解"
      ],
      [
        "D",
        "解不唯一"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(\\beta=\\alpha_1+2\\alpha_2+3\\alpha_3=A(1,2,3)^T\\)，故 \\(x=(1,2,3)^T\\) 是 \\(Ax=\\beta\\) 的一个解，方程组有解。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-mc-15",
    "ch": 4,
    "src": "hw",
    "type": "mc",
    "no": 15,
    "stem": "非齐次线性方程组 \\(Ax=b\\ (b\\neq0)\\) 的解集（　）。",
    "options": [
      [
        "A",
        "全体解构成向量空间"
      ],
      [
        "B",
        "解集必含零向量"
      ],
      [
        "C",
        "解集不构成向量空间"
      ],
      [
        "D",
        "解集只有一点"
      ]
    ],
    "ans": "C",
    "fb": "解析：非齐次线性方程组的解集（\\(b\\neq0\\)）关于加法和数乘不封闭，不是向量空间（不构成线性空间），其结构是特解加齐次通解。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s42"
  },
  {
    "id": "c4-hw-fill-1",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 1,
    "stem": "\\(n\\) 元齐次线性方程组 \\(Ax=0\\) 有非零解 \\(\\iff R(A)\\) ______ \\(n\\)（填“\\(\\lt\\)”或“\\(=\\)”或“\\(\\gt\\)”）。",
    "options": null,
    "ans": "\\(\\lt\\)",
    "fb": "解析：n元齐次线性方程组 \\(Ax=0\\) 有非零解当且仅当系数矩阵的秩小于未知数个数 \\(n\\)，即 \\(R(A)<n\\)。故应填 \\(<\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-fill-2",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 2,
    "stem": "设 \\(A\\) 为 \\(5\\) 阶方阵且 \\(R(A)=3\\)，则 \\(Ax=0\\) 的基础解系含 ______ 个解向量。",
    "options": null,
    "ans": "\\(2\\)（\\(5-3=2\\)）",
    "fb": "解析：基础解系所含解向量个数为 \\(n-R(A)=5-3=2\\)。故应填 \\(2\\)（即 \\(5-3=2\\)）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-fill-3",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 3,
    "stem": "非齐次方程组 \\(Ax=b\\) 有唯一解的充要条件是 \\(R(A)=R(A,b)=\\) ______。",
    "options": null,
    "ans": "\\(n\\)",
    "fb": "解析：非齐次方程组 \\(Ax=b\\) 有唯一解的充要条件是 \\(R(A)=R(A,b)=n\\)（未知数个数）。故应填 \\(n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-fill-4",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 4,
    "stem": "设 \\(\\xi_1,\\xi_2\\) 是 \\(Ax=0\\) 的基础解系，则 \\(Ax=b\\) 的通解可写为 \\(x=\\eta^*+k_1\\xi_1+\\) ______。",
    "options": null,
    "ans": "\\(k_2\\xi_2\\)",
    "fb": "解析：\\(Ax=b\\) 的通解等于一个特解加上对应齐次方程组的通解，故 \\(x=\\eta^*+k_1\\xi_1+k_2\\xi_2\\)，空格为 \\(k_2\\xi_2\\)。故应填 \\(k_2\\xi_2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-fill-5",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 5,
    "stem": "设 \\(A\\) 为 \\(4\\times3\\) 矩阵且 \\(R(A)=2\\)，则 \\(Ax=0\\) 的基础解系含 ______ 个解向量。",
    "options": null,
    "ans": "\\(1\\)（\\(3-2=1\\)）",
    "fb": "解析：未知数个数 \\(n=3\\)，基础解系含 \\(n-R(A)=3-2=1\\) 个解向量。故应填 \\(1\\)（即 \\(3-2=1\\)）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-fill-6",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 6,
    "stem": "矩阵方程 \\(AX=B\\) 有解的充要条件是 \\(R(A)=R(\\) ______\\()\\)（填增广矩阵记号）。",
    "options": null,
    "ans": "\\((A,B)\\)",
    "fb": "解析：矩阵方程 \\(AX=B\\) 有解当且仅当 \\(B\\) 的每一列都可由 \\(A\\) 的列线性表示，即 \\(R(A)=R(A,B)\\)（增广矩阵）。故应填 \\((A,B)\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-fill-7",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 7,
    "stem": "若 \\(R(A)=R(A,b)=1\\lt n\\)，则非齐次方程组 \\(Ax=b\\) ______（填“有唯一解”或“有无穷多解”）。",
    "options": null,
    "ans": "有无穷多解",
    "fb": "解析：非齐次方程组有解且 \\(R(A)=R(A,b)<n\\) 时有无穷多解。故应填 有无穷多解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-fill-8",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 8,
    "stem": "齐次线性方程组总是有解，至少存在 ______ 解（填“零”或“非零”）。",
    "options": null,
    "ans": "零",
    "fb": "解析：齐次线性方程组 \\(Ax=0\\) 必有零解 \\(x=0\\)。故应填 零。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-fill-9",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 9,
    "stem": "由克莱姆法则，当 \\(|A|\\neq0\\) 时，未知数 \\(x_j=\\dfrac{D_j}{D}\\)，其中 \\(D_j\\) 是将 \\(D=|A|\\) 的第 \\(j\\) 列换为 ______ 所得的行列式。",
    "options": null,
    "ans": "\\(|A|\\)；常数项向量 \\(b\\)",
    "fb": "解析：由克莱姆法则，未知数 \\(x_j=\\dfrac{D_j}{D}\\)，其中 \\(D_j\\) 是将系数行列式 \\(D=\\lvert A\\rvert\\) 的第 \\(j\\) 列换为常数项向量 \\(b\\) 后所得的行列式。故应填 \\(\\lvert A\\rvert\\)；常数项向量 \\(b\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-fill-10",
    "ch": 4,
    "src": "hw",
    "type": "fill",
    "no": 10,
    "stem": "设 \\(\\eta_1,\\eta_2\\) 都是 \\(Ax=b\\) 的解，则 \\(\\eta_1-\\eta_2\\) 是 ______ 的解。",
    "options": null,
    "ans": "对应齐次方程组 \\(Ax=0\\)。",
    "fb": "解析：因 \\(A\\eta_1=b,\\ A\\eta_2=b\\)，则 \\(A(\\eta_1-\\eta_2)=b-b=0\\)，故 \\(\\eta_1-\\eta_2\\) 是对应齐次方程组 \\(Ax=0\\) 的解。故应填 对应齐次方程组 \\(Ax=0\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-calc-1",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 1,
    "stem": "求下列齐次线性方程组的基础解系与通解：       （1）\\(\\begin{cases}x_1-2x_2+4x_3-7x_4=0,\\\\ 2x_1+x_2-2x_3+x_4=0,\\\\ 3x_1-x_2+2x_3-4x_4=0;\\end{cases}\\)       （2）\\(\\begin{cases}x_1-8x_2+10x_3+2x_4=0,\\\\ 2x_1+4x_2+5x_3-x_4=0,\\\\ 3x_1+8x_2+6x_3-2x_4=0.\\end{cases}\\)",
    "options": null,
    "ans": null,
    "fb": "解：（1）对齐次方程组的系数矩阵行变换：\n\\[\n\\begin{bmatrix}\n1&-2&4&-7\\\\\n2&1&-2&1\\\\\n3&-1&2&-4\n\\end{bmatrix}\n\\xrightarrow{r_2-2r_1,\\ r_3-3r_1}\n\\begin{bmatrix}\n1&-2&4&-7\\\\\n0&5&-10&15\\\\\n0&5&-10&17\n\\end{bmatrix}\n\\xrightarrow{r_3-r_2}\n\\begin{bmatrix}\n1&-2&4&-7\\\\\n0&5&-10&15\\\\\n0&0&0&2\n\\end{bmatrix}.\n\\]\n由 \\(2x_4=0\\) 得 \\(x_4=0\\)；由 \\(5x_2-10x_3=0\\) 得 \\(x_2=2x_3\\)；代入首行得 \\(x_1=0\\)。令 \\(x_3=k\\)，得基础解系 \\(\\xi=(0,2,1,0)^T\\)，通解为 \\(x=k(0,2,1,0)^T\\ (k\\in\\mathbb{R})\\)。\n\n（2）对系数矩阵行变换：\n\\[\n\\begin{bmatrix}\n1&-8&10&2\\\\\n2&4&5&-1\\\\\n3&8&6&-2\n\\end{bmatrix}\n\\xrightarrow{r_2-2r_1,\\ r_3-3r_1}\n\\begin{bmatrix}\n1&-8&10&2\\\\\n0&20&-15&-5\\\\\n0&32&-24&-8\n\\end{bmatrix}\n\\to\n\\begin{bmatrix}\n1&-8&10&2\\\\\n0&4&-3&-1\\\\\n0&4&-3&-1\n\\end{bmatrix}\n\\xrightarrow{r_3-r_2}\n\\begin{bmatrix}\n1&-8&10&2\\\\\n0&4&-3&-1\\\\\n0&0&0&0\n\\end{bmatrix}.\n\\]\n得同解方程组 \\(x_1-8x_2+10x_3+2x_4=0,\\ 4x_2-3x_3-x_4=0\\)。取自由未知量 \\(x_3=s,\\ x_4=t\\)，则 \\(x_2=(3s+t)/4,\\ x_1=-4s\\)。取 \\((s,t)=(1,0),(0,1)\\) 得基础解系 \\(\\xi_1=(-4,\\frac34,1,0)^T,\\ \\xi_2=(0,\\frac14,0,1)^T\\)（或等价的整数基 \\((-16,3,4,0)^T,(0,1,0,4)^T\\)），通解为 \\(x=k_1\\xi_1+k_2\\xi_2\\ (k_1,k_2\\in\\mathbb{R})\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-calc-2",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 2,
    "stem": "已知齐次方程组（Ⅰ）\\(\\begin{cases}x_1+2x_2+3x_3=0,\\\\ 2x_1+3x_2+5x_3=0,\\\\ x_1+x_2+ax_3=0\\end{cases}\\) 与（Ⅱ）\\(\\begin{cases}x_1+bx_2+cx_3=0,\\\\ 2x_1+b^2x_2+(c+1)x_3=0\\end{cases}\\) 同解，求 \\(a,b,c\\) 的值。",
    "options": null,
    "ans": null,
    "fb": "解：方程组（Ⅰ）的系数矩阵\n\\[\n\\begin{bmatrix}\n1&2&3\\\\\n2&3&5\\\\\n1&1&a\n\\end{bmatrix}\n\\xrightarrow{}\n\\begin{bmatrix}\n1&2&3\\\\\n0&-1&-1\\\\\n0&-1&a-3\n\\end{bmatrix}\n\\xrightarrow{r_3-r_2}\n\\begin{bmatrix}\n1&2&3\\\\\n0&-1&-1\\\\\n0&0&a-2\n\\end{bmatrix}.\n\\]\n因（Ⅱ）仅 2 个方程、3 个未知量，必有非零解；要使两方程组同解，（Ⅰ）也必须有非零解，故 \\(a-2=0\\)，即 \\(a=2\\)。此时（Ⅰ）的通解为 \\(x=k(-1,-1,1)^T\\)。\n\n（Ⅱ）与（Ⅰ）同解，故 \\((-1,-1,1)^T\\) 必满足（Ⅱ）：\n\\[\n\\begin{cases}\n-1-b+c=0,\\\\\n-2-b^2+c+1=0,\n\\end{cases}\n\\Rightarrow c=b+1,\\ c=b^2+1.\n\\]\n得 \\(b+1=b^2+1\\Rightarrow b(b-1)=0\\)。若 \\(b=0\\)，则 \\(c=1\\)，（Ⅱ）化为 \\(x_1+x_3=0\\)（秩 1，解空间 2 维），与（Ⅰ）不同解；若 \\(b=1\\)，则 \\(c=2\\)，（Ⅱ）化为 \\(x_1+x_2+2x_3=0,\\ 2x_1+x_2+3x_3=0\\)，解空间为 \\(k(-1,-1,1)^T\\)，与（Ⅰ）同解。故 \\(a=2,\\ b=1,\\ c=2\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-calc-3",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 3,
    "stem": "设 \\(4\\) 元齐次方程组 \\(Ax=0\\) 的通解为 \\(x=k_1(1,0,2,3)^T+k_2(0,1,-1,1)^T\\)，求原方程组（写出一组系数矩阵即可）。",
    "options": null,
    "ans": null,
    "fb": "解：已知 \\(Ax=0\\) 的解空间由 \\(\\xi_1=(1,0,2,3)^T,\\ \\xi_2=(0,1,-1,1)^T\\) 张成，即 \\(N(A)=\\mathrm{span}\\{\\xi_1,\\xi_2\\}\\)。系数矩阵的行向量应与 \\(\\xi_1,\\xi_2\\) 均正交。设行向量 \\(v=(a,b,c,d)\\)，则\n\\[\nv\\cdot\\xi_1=a+2c+3d=0,\\quad v\\cdot\\xi_2=b-c+d=0.\n\\]\n取 \\((c,d)=(1,0)\\) 得 \\(v_1=(-2,1,1,0)\\)；取 \\((c,d)=(0,1)\\) 得 \\(v_2=(-3,-1,0,1)\\)。故可取\n\\[\nA=\\begin{bmatrix}\n-2&1&1&0\\\\\n-3&-1&0&1\n\\end{bmatrix}.\n\\]\n易验 \\(A\\xi_1=A\\xi_2=0\\)，且 \\(A\\) 两行线性无关，故 \\(N(A)\\) 恰为所求，满足题意（答案不唯一）。",
    "pts": 6,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-calc-4",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 4,
    "stem": "解下列非齐次线性方程组：       （1）\\(\\begin{cases}2x_1+x_2-x_3-x_4=1,\\\\ 2x_1+x_2+x_3-x_4=1,\\\\ 4x_1+2x_2+x_3-2x_4=2;\\end{cases}\\)       （2）\\(\\begin{cases}3x_1-x_2+2x_3=10,\\\\ 4x_1+2x_2-x_3=2,\\\\ 11x_1+3x_2=8.\\end{cases}\\)",
    "options": null,
    "ans": null,
    "fb": "解：（1）对增广矩阵行变换：\n\\[\n\\begin{bmatrix}\n2&1&-1&-1&1\\\\\n2&1&1&-1&1\\\\\n4&2&1&-2&2\n\\end{bmatrix}\n\\xrightarrow{r_2-r_1,\\ r_3-2r_1}\n\\begin{bmatrix}\n2&1&-1&-1&1\\\\\n0&0&2&0&0\\\\\n0&0&3&0&0\n\\end{bmatrix}\n\\to\n\\begin{bmatrix}\n2&1&-1&-1&1\\\\\n0&0&1&0&0\\\\\n0&0&0&0&0\n\\end{bmatrix}.\n\\]\n得 \\(x_3=0\\)，且 \\(2x_1+x_2-x_4=1\\)。取 \\(x_2=k_1,\\ x_4=k_2\\)，则 \\(x_1=(1-k_1+k_2)/2\\)。通解为\n\\[\nx=\\begin{pmatrix}\\frac12\\\\0\\\\0\\\\0\\end{pmatrix}+k_1\\begin{pmatrix}-\\frac12\\\\1\\\\0\\\\0\\end{pmatrix}+k_2\\begin{pmatrix}\\frac12\\\\0\\\\0\\\\1\\end{pmatrix},\\quad k_1,k_2\\in\\mathbb{R}.\n\\]\n\n（2）对增广矩阵：\n\\[\n\\begin{bmatrix}\n3&-1&2&10\\\\\n4&2&-1&2\\\\\n11&3&0&8\n\\end{bmatrix}\n\\xrightarrow{2r_2+r_1}\n\\begin{bmatrix}\n3&-1&2&10\\\\\n11&3&0&14\\\\\n11&3&0&8\n\\end{bmatrix}.\n\\]\n由第 2、3 行得 \\(11x_1+3x_2=14\\) 与 \\(11x_1+3x_2=8\\)，矛盾，故方程组无解。",
    "pts": 6,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-calc-5",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 5,
    "stem": "已知 \\(A\\) 为 \\(4\\) 阶方阵，\\(A^*\\) 为伴随矩阵，\\(|A|=0\\) 且 \\(A^*\\neq O\\)。若 \\(\\eta_1+\\eta_2=(2,0,0,8)^T,\\ \\eta_2+\\eta_3=(1,0,0,7)^T\\)（其中 \\(\\eta_1,\\eta_2,\\eta_3\\) 是 \\(Ax=b\\) 的解），求 \\(Ax=b\\) 的通解。",
    "options": null,
    "ans": null,
    "fb": "解：由 \\(|A|=0\\) 且 \\(A^*\\neq O\\)，知 \\(R(A)=n-1=3\\)，故 \\(Ax=0\\) 的解空间为一维。\n\n\\(\\eta_1,\\eta_2,\\eta_3\\) 均为 \\(Ax=b\\) 的解，故\n\\[\n(\\eta_1+\\eta_2)-(\\eta_2+\\eta_3)=\\eta_1-\\eta_3\n\\]\n是 \\(Ax=0\\) 的解，且\n\\[\n\\eta_1-\\eta_3=(2,0,0,8)^T-(1,0,0,7)^T=(1,0,0,1)^T\\neq0,\n\\]\n故可取基础解系 \\(\\xi=(1,0,0,1)^T\\)。\n\n又 \\(A(\\eta_1+\\eta_2)=2b\\)，故 \\(\\frac12(\\eta_1+\\eta_2)=(1,0,0,4)^T\\) 是 \\(Ax=b\\) 的一个特解。因此通解为\n\\[\nx=\\begin{pmatrix}1\\\\0\\\\0\\\\4\\end{pmatrix}+k\\begin{pmatrix}1\\\\0\\\\0\\\\1\\end{pmatrix},\\quad k\\in\\mathbb{R}.\n\\]",
    "pts": 6,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-calc-6",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 6,
    "stem": "已知 \\(\\eta_1=(1,-1,0,2)^T,\\ \\eta_2=(2,1,-1,4)^T,\\ \\eta_3=(4,5,-3,1)^T\\) 是某线性方程组的三个解，且该方程组系数矩阵 \\(A\\) 的秩 \\(R(A)=2\\)，求其通解。",
    "options": null,
    "ans": null,
    "fb": "解：未知量个数 \\(n=4\\)，由 \\(R(A)=2\\) 知 \\(Ax=0\\) 的解空间维数为 \\(n-R(A)=2\\)。\n\n任取两解之差得齐次解：\n\\[\n\\xi_1=\\eta_2-\\eta_1=(1,2,-1,2)^T,\\quad \\xi_2=\\eta_3-\\eta_1=(3,6,-3,-1)^T.\n\\]\n二者显然线性无关，故构成 \\(Ax=0\\) 的基础解系。以 \\(\\eta_1\\) 为特解，得通解\n\\[\nx=\\begin{pmatrix}1\\\\-1\\\\0\\\\2\\end{pmatrix}+k_1\\begin{pmatrix}1\\\\2\\\\-1\\\\2\\end{pmatrix}+k_2\\begin{pmatrix}3\\\\6\\\\-3\\\\-1\\end{pmatrix},\\quad k_1,k_2\\in\\mathbb{R}.\n\\]",
    "pts": 6,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-calc-7",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 7,
    "stem": "讨论 \\(a\\) 的取值，使非齐次方程组       \\(\\begin{cases}x_1+x_2+ax_3=-1,\\\\ x_1-x_2+2x_3=-1,\\\\ -x_1+ax_2+x_3=a^2\\end{cases}\\)       有无穷多解，并求其通解。",
    "options": null,
    "ans": null,
    "fb": "解：对增广矩阵行变换：\n\\[\n\\begin{bmatrix}\n1&1&a&-1\\\\\n1&-1&2&-1\\\\\n-1&a&1&a^2\n\\end{bmatrix}\n\\xrightarrow{r_2-r_1,\\ r_3+r_1}\n\\begin{bmatrix}\n1&1&a&-1\\\\\n0&-2&2-a&0\\\\\n0&a+1&a+1&a^2-1\n\\end{bmatrix}.\n\\]\n第 3 行可写为 \\((a+1)(x_2+x_3)= (a+1)(a-1)\\)。\n\n当 \\(a=-1\\) 时，第 3 行化为 \\(0=0\\)；第 2 行化为 \\(-2x_2+3x_3=0\\)，即 \\(x_2=\\frac32x_3\\)，代入首行得 \\(x_1=-1-\\frac12x_3\\)。系数阵秩为 2、未知量 3 个，故有无穷多解。令 \\(x_3=2k\\)，得通解\n\\[\nx=\\begin{pmatrix}-1\\\\0\\\\0\\end{pmatrix}+k\\begin{pmatrix}-1\\\\3\\\\2\\end{pmatrix},\\quad k\\in\\mathbb{R}.\n\\]\n当 \\(a\\neq-1\\) 时，第 3 行给出 \\(x_2+x_3=a-1\\)，与第 2 行联立唯一确定 \\(x_2,x_3\\)，进而唯一确定 \\(x_1\\)，方程组有唯一解（非无穷多解）。故使方程组有无穷多解的取值为 \\(a=-1\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-calc-8",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 8,
    "stem": "讨论线性方程组       \\(\\begin{cases}\\lambda x_1+x_2=1,\\\\ x_1+\\lambda x_2=1\\end{cases}\\)       的解，并在有解时求出其解。",
    "options": null,
    "ans": null,
    "fb": "解：系数行列式 \\(|A|=\\lambda^2-1=(\\lambda-1)(\\lambda+1)\\)。\n1) 当 \\(\\lambda\\neq\\pm1\\) 时，\\(|A|\\neq0\\)，方程组有唯一解。由两式对称性知 \\(x_1=x_2\\)，代入得 \\((\\lambda+1)x_1=1\\)，故\n\\[\nx_1=x_2=\\frac1{\\lambda+1}.\n\\]\n2) 当 \\(\\lambda=1\\) 时，两式均为 \\(x_1+x_2=1\\)，秩为 1，有无穷多解：\n\\[\nx=\\begin{pmatrix}1\\\\0\\end{pmatrix}+k\\begin{pmatrix}-1\\\\1\\end{pmatrix},\\quad k\\in\\mathbb{R}.\n\\]\n3) 当 \\(\\lambda=-1\\) 时，两式化为 \\(-x_1+x_2=1\\) 与 \\(x_1-x_2=1\\)，即 \\(x_2-x_1=1\\) 与 \\(x_2-x_1=-1\\)，矛盾，故无解。",
    "pts": 6,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-calc-9",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 9,
    "stem": "设有线性方程组       \\(\\begin{cases}x_1+x_2-2x_3+3x_4=0,\\\\ 2x_1+x_2-6x_3+4x_4=-1,\\\\ 3x_1+2x_2+px_3+7x_4=-1,\\\\ x_1-x_2-6x_3-x_4=t+2,\\end{cases}\\)       问 \\(p,t\\) 取何值时方程组无解？有解？并在有解时求全部解。",
    "options": null,
    "ans": null,
    "fb": "解：对增广矩阵行变换：\n\\[\n\\begin{bmatrix}\n1&1&-2&3&0\\\\\n2&1&-6&4&-1\\\\\n3&2&p&7&-1\\\\\n1&-1&-6&-1&t+2\n\\end{bmatrix}\n\\xrightarrow{r_2-2r_1,\\ r_3-3r_1,\\ r_4-r_1}\n\\begin{bmatrix}\n1&1&-2&3&0\\\\\n0&-1&-2&-2&-1\\\\\n0&-1&p+6&-2&-1\\\\\n0&-2&-4&-4&t+2\n\\end{bmatrix}\n\\]\n\\[\n\\xrightarrow{r_3-r_2,\\ r_4-2r_2}\n\\begin{bmatrix}\n1&1&-2&3&0\\\\\n0&-1&-2&-2&-1\\\\\n0&0&p+8&0&0\\\\\n0&0&0&0&t+4\n\\end{bmatrix}.\n\\]\n由此得相容条件：\n- 若 \\(t\\neq-4\\)，则末行 \\(0=t+4\\neq0\\)，方程组无解；\n- 若 \\(t=-4\\)，则方程组有解。此时\n  - 当 \\(p\\neq-8\\) 时，由 \\((p+8)x_3=0\\) 得 \\(x_3=0\\)，进而 \\(x_2=1-2x_4,\\ x_1=-1-x_4\\)。令 \\(x_4=k\\)，通解为\n    \\[\n    x=\\begin{pmatrix}-1\\\\1\\\\0\\\\0\\end{pmatrix}+k\\begin{pmatrix}-1\\\\-2\\\\0\\\\1\\end{pmatrix},\\quad k\\in\\mathbb{R};\n    \\]\n  - 当 \\(p=-8\\) 时，\\(x_3\\) 也为自由未知量，令 \\(x_3=s,\\ x_4=k\\)，得 \\(x_2=1-2s-2k,\\ x_1=-1+4s-k\\)，通解为\n    \\[\n    x=\\begin{pmatrix}-1\\\\1\\\\0\\\\0\\end{pmatrix}+s\\begin{pmatrix}4\\\\-2\\\\1\\\\0\\end{pmatrix}+k\\begin{pmatrix}-1\\\\-2\\\\0\\\\1\\end{pmatrix},\\quad s,k\\in\\mathbb{R}.\n    \\]",
    "pts": 6,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-calc-10",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 10,
    "stem": "设 \\(\\alpha_1=(1,0,-1,2)^T,\\ \\alpha_2=(2,-1,-2,6)^T,\\ \\alpha_3=(3,1,t,4)^T,\\ \\beta=(4,-1,-5,10)^T\\)。已知 \\(\\beta\\) 不能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示，求 \\(t\\) 的值。",
    "options": null,
    "ans": null,
    "fb": "解：\\(\\beta\\) 可由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示 \\(\\iff\\) 增广矩阵 \\((\\alpha_1,\\alpha_2,\\alpha_3\\,|\\,\\beta)\\) 的秩等于系数矩阵 \\((\\alpha_1,\\alpha_2,\\alpha_3)\\) 的秩。对\n\\[\n\\begin{bmatrix}\n1&2&3&4\\\\\n0&-1&1&-1\\\\\n-1&-2&t&-5\\\\\n2&6&4&10\n\\end{bmatrix}\n\\xrightarrow{r_3+r_1,\\ r_4-2r_1}\n\\begin{bmatrix}\n1&2&3&4\\\\\n0&-1&1&-1\\\\\n0&0&t+3&-1\\\\\n0&2&-2&2\n\\end{bmatrix}\n\\xrightarrow{r_4+2r_2}\n\\begin{bmatrix}\n1&2&3&4\\\\\n0&-1&1&-1\\\\\n0&0&t+3&-1\\\\\n0&0&0&0\n\\end{bmatrix}.\n\\]\n当 \\(t\\neq-3\\) 时，系数阵秩为 3 且增广阵秩亦为 3，\\(\\beta\\) 可被表示；当 \\(t=-3\\) 时，系数阵秩为 2，而增广阵第 3 行为 \\((0,0,0,-1)\\)，秩为 3，两秩不等，\\(\\beta\\) 不能被表示。故所求为 \\(t=-3\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-hw-calc-11",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 11,
    "stem": "设 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)\\)，其中 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 均为四维列向量，且 \\(\\alpha_2,\\alpha_3,\\alpha_4\\) 线性无关，\\(\\alpha_1=2\\alpha_2-\\alpha_3\\)，而 \\(\\beta=\\alpha_1-\\alpha_2+3\\alpha_4\\)，求 \\(Ax=\\beta\\) 的通解。",
    "options": null,
    "ans": null,
    "fb": "解：由 \\(\\alpha_1=2\\alpha_2-\\alpha_3\\) 得 \\(\\alpha_1-2\\alpha_2+\\alpha_3=0\\)，即\n\\[\n\\xi_0=(1,-2,1,0)^T\\in N(A).\n\\]\n又 \\(\\alpha_2,\\alpha_3,\\alpha_4\\) 线性无关，故 \\(R(A)=3\\)，从而 \\(N(A)\\) 维数为 \\(4-3=1\\)，基础解系可取 \\(\\xi_0\\)。\n\n由 \\(\\beta=\\alpha_1-\\alpha_2+3\\alpha_4\\)，取\n\\[\n\\eta^*=(1,-1,0,3)^T,\n\\]\n则 \\(A\\eta^*=\\alpha_1-\\alpha_2+3\\alpha_4=\\beta\\)，即 \\(\\eta^*\\) 为一特解。故通解为\n\\[\nx=\\begin{pmatrix}1\\\\-1\\\\0\\\\3\\end{pmatrix}+k\\begin{pmatrix}1\\\\-2\\\\1\\\\0\\end{pmatrix},\\quad k\\in\\mathbb{R}.\n\\]",
    "pts": 6,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-hw-calc-12",
    "ch": 4,
    "src": "hw",
    "type": "calc",
    "no": 12,
    "stem": "用高斯—约当消元（手算或借助本页“通解求解器”）求齐次方程组       \\(\\begin{cases}x_1+x_2-x_3-x_4=0,\\\\ 2x_1-5x_2+3x_3+2x_4=0,\\\\ 7x_1-7x_2+3x_3+x_4=0\\end{cases}\\)       的基础解系，并写出通解。",
    "options": null,
    "ans": null,
    "fb": "解：对系数矩阵作高斯—约当消元：\n\\[\n\\begin{bmatrix}\n1&1&-1&-1\\\\\n2&-5&3&2\\\\\n7&-7&3&1\n\\end{bmatrix}\n\\xrightarrow{r_2-2r_1,\\ r_3-7r_1}\n\\begin{bmatrix}\n1&1&-1&-1\\\\\n0&-7&5&4\\\\\n0&-14&10&8\n\\end{bmatrix}\n\\xrightarrow{r_3-2r_2}\n\\begin{bmatrix}\n1&1&-1&-1\\\\\n0&-7&5&4\\\\\n0&0&0&0\n\\end{bmatrix}\n\\xrightarrow{-\\frac17 r_2}\n\\begin{bmatrix}\n1&1&-1&-1\\\\\n0&1&-\\frac57&-\\frac47\\\\\n0&0&0&0\n\\end{bmatrix}\n\\xrightarrow{r_1-r_2}\n\\begin{bmatrix}\n1&0&-\\frac27&-\\frac37\\\\\n0&1&-\\frac57&-\\frac47\\\\\n0&0&0&0\n\\end{bmatrix}.\n\\]\n对应方程组为 \\(x_1-\\frac27x_3-\\frac37x_4=0,\\ x_2-\\frac57x_3-\\frac47x_4=0\\)。取自由未知量 \\(x_3=7s,\\ x_4=7t\\)，得 \\(x_1=2s+3t,\\ x_2=5s+4t\\)。令 \\((s,t)=(1,0),(0,1)\\)，得基础解系\n\\[\n\\xi_1=(2,5,7,0)^T,\\quad \\xi_2=(3,4,0,7)^T,\n\\]\n通解为 \\(x=k_1\\xi_1+k_2\\xi_2\\ (k_1,k_2\\in\\mathbb{R})\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-hw-proof-1",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 1,
    "stem": "证明：齐次线性方程组 \\(Ax=0\\) 的解集合 \\(S=\\{x\\mid Ax=0\\}\\) 关于向量加法与数乘封闭，因而是向量空间（解空间）。",
    "options": null,
    "ans": null,
    "fb": "证明：记 \\(S=\\{x\\mid Ax=0\\}\\)。任取 \\(x,y\\in S\\)，有 \\(A(x+y)=Ax+Ay=0+0=0\\)，故 \\(x+y\\in S\\)；任取数 \\(k\\)，有 \\(A(kx)=k(Ax)=k\\cdot0=0\\)，故 \\(kx\\in S\\)。因此 \\(S\\) 对加法与数乘封闭，是 \\(\\mathbb{R}^n\\) 的子空间（解空间）。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s41"
  },
  {
    "id": "c4-hw-proof-2",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 2,
    "stem": "证明定理 4.1：\\(n\\) 元齐次线性方程组 \\(Ax=0\\) 有非零解 \\(\\iff R(A)\\lt n\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：必要性：若 \\(Ax=0\\) 有非零解 \\(x\\neq0\\)，则可写为 \\(x_1\\alpha_1+\\cdots+x_n\\alpha_n=0\\)（\\(\\alpha_j\\) 为 \\(A\\) 的列向量），系数不全为零，故列向量组线性相关，从而 \\(R(A)<n\\)。\n\n充分性：若 \\(R(A)<n\\)，则系数矩阵的秩 \\(r<n\\)，自由未知量个数为 \\(n-r>0\\)，令自由未知量取不全为零的值，即可得到非零解。故 \\(Ax=0\\) 有非零解 \\(\\iff R(A)<n\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s41"
  },
  {
    "id": "c4-hw-proof-3",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 3,
    "stem": "证明推论 4.2：设 \\(A\\) 为 \\(n\\) 阶方阵，则 \\(Ax=0\\) 有非零解 \\(\\iff |A|=0\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：\\(A\\) 为 \\(n\\) 阶方阵。由定理 4.1，\\(Ax=0\\) 有非零解 \\(\\iff R(A)<n\\)。而方阵 \\(A\\) 满秩（\\(R(A)=n\\)）等价于 \\(|A|\\neq0\\)，故 \\(R(A)<n\\iff |A|=0\\)。综上 \\(Ax=0\\) 有非零解 \\(\\iff |A|=0\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s41"
  },
  {
    "id": "c4-hw-proof-4",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 4,
    "stem": "证明性质 4.3：若 \\(\\eta_1,\\eta_2\\) 都是 \\(Ax=b\\) 的解，则 \\(\\eta_1-\\eta_2\\) 是 \\(Ax=0\\) 的解。",
    "options": null,
    "ans": null,
    "fb": "证明：因 \\(\\eta_1,\\eta_2\\) 均为 \\(Ax=b\\) 的解，故 \\(A\\eta_1=b,\\ A\\eta_2=b\\)。于是\n\\[\nA(\\eta_1-\\eta_2)=A\\eta_1-A\\eta_2=b-b=0,\n\\]\n即 \\(\\eta_1-\\eta_2\\) 是对应齐次方程组 \\(Ax=0\\) 的解。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s43"
  },
  {
    "id": "c4-hw-proof-5",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 5,
    "stem": "证明定理 4.7（非齐次通解结构）：当 \\(R(A)=R(A,b)=r\\lt n\\) 时，\\(Ax=b\\) 的通解为 \\(x=\\eta^*+\\) 对应齐次基础解系的线性组合。",
    "options": null,
    "ans": null,
    "fb": "证明：设 \\(R(A)=R(A,b)=r<n\\)。取 \\(Ax=b\\) 的一个特解 \\(\\eta^*\\)，并取 \\(Ax=0\\) 的基础解系 \\(\\xi_1,\\dots,\\xi_{n-r}\\)。\n\n先证任一形如 \\(x=\\eta^*+c_1\\xi_1+\\cdots+c_{n-r}\\xi_{n-r}\\) 的向量都是解：\n\\[\nAx=A\\eta^*+\\sum_{i=1}^{n-r}c_iA\\xi_i=b+0=b.\n\\]\n再证任一解 \\(x\\) 都可如此表示：由性质 4.3，\\(x-\\eta^*\\) 是 \\(Ax=0\\) 的解，故可表示为基础解系的线性组合 \\(x-\\eta^*=\\sum c_i\\xi_i\\)，即 \\(x=\\eta^*+\\sum c_i\\xi_i\\)。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s42"
  },
  {
    "id": "c4-hw-proof-6",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 6,
    "stem": "设 \\(A_{m\\times n},\\ B_{n\\times s}\\) 满足 \\(AB=O\\)，证明 \\(R(A)+R(B)\\le n\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：记 \\(B=(b_1,\\dots,b_s)\\)。由 \\(AB=O\\) 知对每个 \\(j\\) 有 \\(Ab_j=0\\)，即 \\(B\\) 的每一列都属于 \\(A\\) 的零空间 \\(N(A)\\)。因此\n\\[\nR(B)=\\dim(\\mathrm{span}\\{b_1,\\dots,b_s\\})\\le \\dim N(A).\n\\]\n由秩—零度定理，对 \\(A_{m\\times n}\\) 有 \\(R(A)+\\dim N(A)=n\\)，即 \\(\\dim N(A)=n-R(A)\\)。代入得\n\\[\nR(B)\\le n-R(A)\\quad\\Rightarrow\\quad R(A)+R(B)\\le n.\n\\]\n证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s43"
  },
  {
    "id": "c4-hw-proof-7",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 7,
    "stem": "证明定理 4.8：矩阵方程 \\(AX=B\\) 有解 \\(\\iff R(A)=R(A,B)\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：将 \\(X,B\\) 按列分块为 \\(X=(x_1,\\dots,x_s),\\ B=(b_1,\\dots,b_s)\\)，则 \\(AX=B\\iff Ax_j=b_j\\ (j=1,\\dots,s)\\)，即每个 \\(b_j\\) 都属于 \\(A\\) 的列空间。\n\n必要性：若 \\(AX=B\\) 有解，则每个 \\(b_j\\in\\mathrm{col}(A)\\)，从而 \\(\\mathrm{col}(A,B)=\\mathrm{col}(A)\\)，故 \\(R(A,B)=R(A)\\)。\n\n充分性：若 \\(R(A,B)=R(A)\\)，增广矩阵未增加列秩，说明每个 \\(b_j\\) 都在 \\(\\mathrm{col}(A)\\) 中，即存在 \\(x_j\\) 使 \\(Ax_j=b_j\\)，把这些 \\(x_j\\) 并成 \\(X\\) 即得 \\(AX=B\\)。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s43"
  },
  {
    "id": "c4-hw-proof-8",
    "ch": 4,
    "src": "hw",
    "type": "proof",
    "no": 8,
    "stem": "设 \\(A\\) 为 \\(m\\times n\\) 实矩阵，证明 \\(R(A^TA)=R(A)\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：先证 \\(N(A^TA)=N(A)\\)。\n- 若 \\(x\\in N(A)\\)，即 \\(Ax=0\\)，则 \\(A^TAx=A^T0=0\\)，故 \\(x\\in N(A^TA)\\)；\n- 若 \\(x\\in N(A^TA)\\)，即 \\(A^TAx=0\\)，则 \\(x^TA^TAx=(Ax)^T(Ax)=\\|Ax\\|^2=0\\)，故 \\(Ax=0\\)，即 \\(x\\in N(A)\\)。\n于是两零空间相等，零度相同。由秩—零度定理（定义域均为 \\(\\mathbb{R}^n\\)）：\n\\[\nR(A^TA)=n-\\dim N(A^TA)=n-\\dim N(A)=R(A).\n\\]\n证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s42"
  },
  {
    "id": "c4-hw-app-1",
    "ch": 4,
    "src": "hw",
    "type": "app",
    "no": 1,
    "stem": "配平化学反应式 \\(x_1\\,\\mathrm{C_6H_6}+x_2\\,\\mathrm{O_2}\\to x_3\\,\\mathrm{C}+x_4\\,\\mathrm{H_2O}\\)，写出对应的齐次线性方程组并求其正整数解。",
    "options": null,
    "ans": null,
    "fb": "解：设配平系数为 \\(x_1,x_2,x_3,x_4\\)，按 C、H、O 三种元素守恒列方程：\n\\[\n\\begin{cases}\n6x_1=x_3,\\\\\n6x_1=2x_4,\\\\\n2x_2=x_4.\n\\end{cases}\n\\]\n即齐次线性方程组\n\\[\n\\begin{cases}\n6x_1-x_3=0,\\\\\n3x_1-x_4=0,\\\\\n2x_2-x_4=0.\n\\end{cases}\n\\]\n取 \\(x_1=2\\)，则 \\(x_4=3x_1=6,\\ x_3=6x_1=12,\\ x_2=\\frac{x_4}{2}=3\\)。故配平结果为\n\\[\n2\\,\\mathrm{C_6H_6}+3\\,\\mathrm{O_2}\\to12\\,\\mathrm{C}+6\\,\\mathrm{H_2O},\n\\]\n即一组正整数解为 \\((x_1,x_2,x_3,x_4)=(2,3,12,6)\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s44"
  },
  {
    "id": "c4-hw-app-2",
    "ch": 4,
    "src": "hw",
    "type": "app",
    "no": 2,
    "stem": "三回路电路满足       \\(\\begin{cases}2I_1-I_2=12,\\\\ -I_1+3I_2-I_3=0,\\\\ -I_2+2I_3=0,\\end{cases}\\)       求各回路电流 \\(I_1,I_2,I_3\\)。",
    "options": null,
    "ans": null,
    "fb": "解：由第三式 \\(-I_2+2I_3=0\\) 得 \\(I_2=2I_3\\)。代入第二式：\n\\[\n-I_1+3(2I_3)-I_3=0\\Rightarrow I_1=5I_3.\n\\]\n代入第一式：\n\\[\n2(5I_3)-2I_3=12\\Rightarrow 8I_3=12\\Rightarrow I_3=\\frac32.\n\\]\n于是 \\(I_2=3,\\ I_1=\\frac{15}{2}=7.5\\)。故各回路电流为 \\(I_1=7.5\\,\\mathrm{A},\\ I_2=3\\,\\mathrm{A},\\ I_3=1.5\\,\\mathrm{A}\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s44"
  },
  {
    "id": "c4-hw-app-3",
    "ch": 4,
    "src": "hw",
    "type": "app",
    "no": 3,
    "stem": "某交通网络有两个路口，守恒方程为       \\(\\begin{cases}x_1-x_2-x_3=-400,\\\\ x_2+x_3-x_4=500,\\end{cases}\\)       其中 \\(x_1,x_2,x_3,x_4\\) 为各路段流量。求通解并说明自由变量的实际意义。",
    "options": null,
    "ans": null,
    "fb": "解：对守恒方程组\n\\[\n\\begin{cases}\nx_1-x_2-x_3=-400,\\\\\nx_2+x_3-x_4=500\n\\end{cases}\n\\]\n取 \\(x_3=s,\\ x_4=t\\) 为自由未知量，由第二式得 \\(x_2=500-s+t\\)，代入第一式得 \\(x_1=-400+x_2+x_3=100+t\\)。故通解为\n\\[\nx=\\begin{pmatrix}100\\\\500\\\\0\\\\0\\end{pmatrix}+s\\begin{pmatrix}0\\\\-1\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\0\\\\1\\end{pmatrix},\\quad s,t\\in\\mathbb{R}.\n\\]\n自由变量 \\(x_3\\) 表示两路口之间内部路段（支线）的流量，\\(x_4\\) 表示系统某出口路段的流量；它们可在非负约束 \\(x_i\\ge0\\) 下自由取值，实际路网中各路段流量需取使所有 \\(x_i\\ge0\\) 的允许范围。",
    "pts": 4,
    "diff": 2,
    "sec": "s44"
  },
  {
    "id": "c4-hw-app-4",
    "ch": 4,
    "src": "hw",
    "type": "app",
    "no": 4,
    "stem": "两部门投入产出模型：直接消耗系数矩阵 \\(A=\\begin{pmatrix}0.25&0.25\\\\ 0.5&0\\end{pmatrix}\\)，最终需求 \\(d=\\begin{pmatrix}55\\\\30\\end{pmatrix}\\)，求解 \\((E-A)x=d\\) 得到总产出 \\(x\\)。",
    "options": null,
    "ans": null,
    "fb": "解：投入产出模型为 \\((E-A)x=d\\)，其中\n\\[\nE-A=\\begin{bmatrix}1-0.25&-0.25\\\\-0.5&1-0\\end{bmatrix}=\\begin{bmatrix}0.75&-0.25\\\\-0.5&1\\end{bmatrix}.\n\\]\n解方程组\n\\[\n\\begin{cases}\n0.75x_1-0.25x_2=55,\\\\\n-0.5x_1+x_2=30.\n\\end{cases}\n\\]\n由第二式 \\(x_2=30+0.5x_1\\)，代入第一式：\n\\[\n0.75x_1-0.25(30+0.5x_1)=55\\Rightarrow0.625x_1=62.5\\Rightarrow x_1=100.\n\\]\n于是 \\(x_2=30+0.5\\times100=80\\)。故两部门总产出为 \\(x_1=100,\\ x_2=80\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s44"
  },
  {
    "id": "c4-hw-app-5",
    "ch": 4,
    "src": "hw",
    "type": "app",
    "no": 5,
    "stem": "营养配餐：三种食物每单位提供的三种营养素（单位 mg）如下表，需求分别为 \\(A:6,\\ B:7,\\ C:9\\)。求满足需求的食物份数 \\(x_1,x_2,x_3\\)。       食物营养 A营养 B营养 C       食物1121       食物2111       食物3112       即解方程组 \\(\\begin{cases}x_1+x_2+x_3=6,\\\\ 2x_1+x_2+x_3=7,\\\\ x_1+x_2+2x_3=9.\\end{cases}\\)",
    "options": null,
    "ans": null,
    "fb": "解：列方程组\n\\[\n\\begin{cases}\nx_1+x_2+x_3=6,\\\\\n2x_1+x_2+x_3=7,\\\\\nx_1+x_2+2x_3=9.\n\\end{cases}\n\\]\n第二式减第一式得 \\(x_1=1\\)；第三式减第一式得 \\(x_3=3\\)；代回第一式得 \\(x_2=6-1-3=2\\)。故满足三种营养素需求的食物份数为 \\(x_1=1,\\ x_2=2,\\ x_3=3\\)（单位份）。",
    "pts": 4,
    "diff": 2,
    "sec": "s44"
  },
  {
    "id": "c4-test-mc-1",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 1,
    "stem": "1. \\(n\\) 元齐次线性方程组 \\(Ax=0\\) 有非零解的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=n\\)"
      ],
      [
        "B",
        "\\(R(A)\\gt n\\)"
      ],
      [
        "C",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "D",
        "\\(|A|\\neq0\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ 定理 4.1：有非零解 \\(\\iff R(A)\\lt n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-2",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 2,
    "stem": "2. 非齐次线性方程组 \\(Ax=b\\) 有解的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=R(A,b)\\)"
      ],
      [
        "B",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "C",
        "\\(R(A)=n\\)"
      ],
      [
        "D",
        "\\(R(A)\\neq R(A,b)\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 定理 4.5：有解 \\(\\iff R(A)=R(A,b)\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-3",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 3,
    "stem": "3. 当 \\(R(A)=r\\lt n\\) 时，齐次方程组 \\(Ax=0\\) 的基础解系含（　）个解向量。",
    "options": [
      [
        "A",
        "\\(n\\)"
      ],
      [
        "B",
        "\\(r\\)"
      ],
      [
        "C",
        "\\(r+1\\)"
      ],
      [
        "D",
        "\\(n-r\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ 定理 4.3：基础解系恰含 \\(n-r\\) 个向量。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-4",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 4,
    "stem": "4. 非齐次方程组 \\(Ax=b\\) 的通解结构是（　）。",
    "options": [
      [
        "A",
        "仅一个特解"
      ],
      [
        "B",
        "仅齐次通解"
      ],
      [
        "C",
        "齐次方程组的特解"
      ],
      [
        "D",
        "特解 \\(+\\) 齐次通解"
      ]
    ],
    "ans": "D",
    "fb": "✓ 定理 4.7：通解 \\(=\\eta^*+\\) 齐次基础解系的线性组合。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-5",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 5,
    "stem": "5. 设 \\(A\\) 为 \\(n\\) 阶方阵且 \\(|A|=0\\)，则齐次方程组 \\(Ax=0\\)（　）。",
    "options": [
      [
        "A",
        "有非零解"
      ],
      [
        "B",
        "只有零解"
      ],
      [
        "C",
        "无解"
      ],
      [
        "D",
        "有唯一解"
      ]
    ],
    "ans": "A",
    "fb": "✓ 推论 4.2：\\(|A|=0\\Rightarrow R(A)\\lt n\\)，有非零解。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-6",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 6,
    "stem": "6. 方程组 \\(\\begin{cases}x+y=1,\\\\ 2x+2y=2\\end{cases}\\) 的解的情况是（　）。",
    "options": [
      [
        "A",
        "唯一解"
      ],
      [
        "B",
        "不确定"
      ],
      [
        "C",
        "无解"
      ],
      [
        "D",
        "无穷多解"
      ]
    ],
    "ans": "D",
    "fb": "✓ \\(R(A)=R(A,b)=1\\lt2\\)，无穷多解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-7",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 7,
    "stem": "7. 方程组 \\(\\begin{cases}x+y=1,\\\\ x+y=2\\end{cases}\\) 的解的情况是（　）。",
    "options": [
      [
        "A",
        "唯一解"
      ],
      [
        "B",
        "无解"
      ],
      [
        "C",
        "无穷多解"
      ],
      [
        "D",
        "必有解"
      ]
    ],
    "ans": "B",
    "fb": "✓ 两直线平行：\\(R(A)=1\\neq R(A,b)=2\\)，无解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-8",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 8,
    "stem": "8. （考研真题）若 \\(A\\) 为 \\(m\\times n\\) 矩阵且 \\(R(A)=m\\)，则 \\(Ax=b\\)（　）。",
    "options": [
      [
        "A",
        "必无解"
      ],
      [
        "B",
        "必唯一"
      ],
      [
        "C",
        "必有解"
      ],
      [
        "D",
        "必无穷多"
      ]
    ],
    "ans": "C",
    "fb": "✓ 推论 4.5：行满秩时 \\(R(A,b)=m=R(A)\\)，必有解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-9",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 9,
    "stem": "9. 设 \\(A\\) 为 \\(4\\) 阶方阵且 \\(R(A)=2\\)，则 \\(Ax=0\\) 的基础解系含（　）个向量。",
    "options": [
      [
        "A",
        "\\(1\\)"
      ],
      [
        "B",
        "\\(2\\)"
      ],
      [
        "C",
        "\\(3\\)"
      ],
      [
        "D",
        "\\(4\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ \\(n-r=4-2=2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-10",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 10,
    "stem": "10. 设 \\(\\xi\\) 是 \\(Ax=0\\) 的解，\\(\\eta\\) 是 \\(Ax=b\\) 的解，则（　）一定是 \\(Ax=b\\) 的解。",
    "options": [
      [
        "A",
        "\\(\\eta-\\eta=0\\)"
      ],
      [
        "B",
        "\\(\\xi-\\eta\\)"
      ],
      [
        "C",
        "\\(2\\xi\\)"
      ],
      [
        "D",
        "\\(\\xi+\\eta\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ \\(A(\\xi+\\eta)=0+b=b\\)，性质 4.4。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-test-mc-11",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 11,
    "stem": "11. 齐次线性方程组 \\(Ax=0\\) 的全部解向量构成的集合是（　）。",
    "options": [
      [
        "A",
        "数域"
      ],
      [
        "B",
        "向量空间（解空间）"
      ],
      [
        "C",
        "群"
      ],
      [
        "D",
        "环"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定义 4.2：解集合对加法、数乘封闭，是向量空间。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-12",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 12,
    "stem": "12. 克莱姆法则能够直接使用的条件是（　）。",
    "options": [
      [
        "A",
        "方程数 \\(=\\) 未知数且 \\(|A|\\neq0\\)"
      ],
      [
        "B",
        "\\(m\\lt n\\)"
      ],
      [
        "C",
        "方程组齐次"
      ],
      [
        "D",
        "任意情形"
      ]
    ],
    "ans": "A",
    "fb": "✓ 推论 4.6：需系数方阵且满秩。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-13",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 13,
    "stem": "13. （期末真题）设 \\(A,B\\) 为 \\(n\\) 阶方阵且 \\(AB=O,\\ B\\neq O\\)，则（　）。",
    "options": [
      [
        "A",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "B",
        "\\(R(A)=n\\)"
      ],
      [
        "C",
        "\\(A\\) 可逆"
      ],
      [
        "D",
        "\\(R(B)=0\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(B\\neq O\\Rightarrow Ax=0\\) 有非零解 \\(\\Rightarrow R(A)\\lt n\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-test-mc-14",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 14,
    "stem": "14. 设 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3)\\)，\\(\\beta=\\alpha_1+2\\alpha_2+3\\alpha_3\\)，则 \\(Ax=\\beta\\)（　）。",
    "options": [
      [
        "A",
        "无解"
      ],
      [
        "B",
        "只有零解"
      ],
      [
        "C",
        "有解，且一个特解为 \\((1,2,3)^T\\)"
      ],
      [
        "D",
        "必无解"
      ]
    ],
    "ans": "C",
    "fb": "✓ \\(\\beta\\) 可由列线性表示，故有解；\\(x=(1,2,3)^T\\) 即为特解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-15",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 15,
    "stem": "15. 非齐次方程组 \\(Ax=b\\) 有无穷多解的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=R(A,b)=n\\)"
      ],
      [
        "B",
        "\\(R(A)=R(A,b)\\lt n\\)"
      ],
      [
        "C",
        "\\(R(A)\\neq R(A,b)\\)"
      ],
      [
        "D",
        "\\(R(A)=n\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 推论 4.4。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-16",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 16,
    "stem": "16. 齐次方程组 \\(Ax=0\\) 只有零解的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)\\lt n\\)"
      ],
      [
        "B",
        "\\(R(A)\\gt n\\)"
      ],
      [
        "C",
        "\\(R(A)=0\\)"
      ],
      [
        "D",
        "\\(R(A)=n\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ 定理 4.2。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-17",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 17,
    "stem": "17. 当方程个数小于未知数个数（\\(m\\lt n\\)）时，齐次方程组 \\(Ax=0\\)（　）。",
    "options": [
      [
        "A",
        "必无解"
      ],
      [
        "B",
        "必只有零解"
      ],
      [
        "C",
        "必有非零解"
      ],
      [
        "D",
        "必有无穷多非零解且唯一"
      ]
    ],
    "ans": "C",
    "fb": "✓ 推论 4.1：\\(R(A)\\le m\\lt n\\)。注：仍有零解，但必有非零解。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-18",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 18,
    "stem": "18. 设 \\(A\\) 为 \\(4\\) 阶方阵且 \\(R(A)=3\\)，若 \\(Ax=b\\) 相容，则其通解中含有（　）个任意常数。",
    "options": [
      [
        "A",
        "\\(1\\)"
      ],
      [
        "B",
        "\\(0\\)"
      ],
      [
        "C",
        "\\(2\\)"
      ],
      [
        "D",
        "\\(3\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(n-r=4-3=1\\)，通解含 \\(1\\) 个任意常数。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-19",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 19,
    "stem": "19. 方程组 \\(\\begin{cases}x_1+x_2=2,\\\\ x_1+x_2=2\\end{cases}\\) 的解的情况是（　）。",
    "options": [
      [
        "A",
        "无解"
      ],
      [
        "B",
        "不确定"
      ],
      [
        "C",
        "唯一解"
      ],
      [
        "D",
        "无穷多解"
      ]
    ],
    "ans": "D",
    "fb": "✓ 两方程相同：\\(R(A)=R(A,b)=1\\lt2\\)，无穷多解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-20",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 20,
    "stem": "20. 设 \\(\\eta_1,\\eta_2\\) 都是 \\(Ax=b\\) 的解，则它们的线性组合 \\(k_1\\eta_1+k_2\\eta_2\\) 仍是 \\(Ax=b\\) 的解，当且仅当（　）。",
    "options": [
      [
        "A",
        "\\(k_1+k_2=0\\)"
      ],
      [
        "B",
        "\\(k_1=k_2\\)"
      ],
      [
        "C",
        "\\(k_1+k_2=1\\)"
      ],
      [
        "D",
        "\\(k_1,k_2\\) 任意"
      ]
    ],
    "ans": "C",
    "fb": "✓ \\(A(k_1\\eta_1+k_2\\eta_2)=(k_1+k_2)b=b\\Rightarrow k_1+k_2=1\\)（仿射组合）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-test-mc-21",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 21,
    "stem": "21. 向量 \\(\\beta\\) 可由向量组 \\(\\alpha_1,\\dots,\\alpha_n\\) 线性表示的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(\\alpha_1,\\dots,\\alpha_n)\\gt R(\\alpha_1,\\dots,\\alpha_n,\\beta)\\)"
      ],
      [
        "B",
        "\\(R(\\alpha_1,\\dots,\\alpha_n)=R(\\alpha_1,\\dots,\\alpha_n,\\beta)\\)"
      ],
      [
        "C",
        "\\(\\alpha_1,\\dots,\\alpha_n\\) 线性无关"
      ],
      [
        "D",
        "\\(\\beta\\) 为零向量"
      ]
    ],
    "ans": "B",
    "fb": "✓ 等价于 \\(Ax=b\\) 有解，即秩相等。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-22",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 22,
    "stem": "22. 矩阵方程 \\(AX=B\\) 有解的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(R(A)=R(B)\\)"
      ],
      [
        "B",
        "\\(R(A)=R(A,B)\\)"
      ],
      [
        "C",
        "\\(R(A)\\lt R(B)\\)"
      ],
      [
        "D",
        "\\(R(A)=n\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定理 4.8。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-test-mc-23",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 23,
    "stem": "23. 若齐次方程组 \\(Ax=0\\) 只有零解，则（　）。",
    "options": [
      [
        "A",
        "不存在基础解系（解空间为 \\(\\{0\\}\\)）"
      ],
      [
        "B",
        "基础解系含 \\(n\\) 个向量"
      ],
      [
        "C",
        "基础解系含 \\(1\\) 个向量"
      ],
      [
        "D",
        "基础解系含无穷多个向量"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(R(A)=n\\) 时只有零解，解空间维数为 \\(0\\)，无（非零）基础解系。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-test-mc-24",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 24,
    "stem": "24. 非齐次方程组 \\(Ax=b\\ (b\\neq0)\\) 的解集（　）。",
    "options": [
      [
        "A",
        "不构成向量空间"
      ],
      [
        "B",
        "构成向量空间"
      ],
      [
        "C",
        "必含零向量"
      ],
      [
        "D",
        "是空集"
      ]
    ],
    "ans": "A",
    "fb": "✓ 非齐次解集中不含零向量（除非 \\(b=0\\)），对加法不封闭，不构成向量空间。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-test-mc-25",
    "ch": 4,
    "src": "test",
    "type": "mc",
    "no": 25,
    "stem": "25. （考研真题）设 \\(A\\) 为 \\(n\\) 阶方阵且 \\(|A|\\neq0\\)，则 \\(Ax=b\\)（　）。",
    "options": [
      [
        "A",
        "无解"
      ],
      [
        "B",
        "有无穷多解"
      ],
      [
        "C",
        "有唯一解"
      ],
      [
        "D",
        "解的情况不确定"
      ]
    ],
    "ans": "C",
    "fb": "✓ \\(|A|\\neq0\\Rightarrow R(A)=n=R(A,b)\\)，由推论 4.3 有唯一解。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c5-hw-mc-1",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 1,
    "stem": "1. 设 \\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\)，下列矩阵中与 \\(A\\) 合同的是（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}-2&1\\\\1&-2\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：由 \\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) 得特征值为 \\(3,-1\\)，正、负惯性指数均为 \\(1\\)。合同变换保持秩与惯性指数不变；选项 D 的矩阵 \\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\) 特征值亦为 \\(3,-1\\)，惯性指数相同，故与 \\(A\\) 合同。故选（D）。",
    "pts": 4,
    "diff": 1,
    "sec": "s54"
  },
  {
    "id": "c5-hw-mc-2",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 2,
    "stem": "2. 若 \\(n\\) 阶方阵 \\(A\\sim B\\)，则下列结论中不一定成立的是（　）。",
    "options": [
      [
        "A",
        "\\(|A|=|B|\\)"
      ],
      [
        "B",
        "\\(A\\) 与 \\(B\\) 特征值相同"
      ],
      [
        "C",
        "\\(A=B\\)"
      ],
      [
        "D",
        "\\(R(A)=R(B)\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：相似矩阵有相同的特征多项式，从而特征值、行列式、秩均相同；但相似并不要求 \\(A=B\\)。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s52"
  },
  {
    "id": "c5-hw-mc-3",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 3,
    "stem": "3. 设 \\(\\lambda_1,\\lambda_2\\) 是矩阵 \\(A\\) 的两个不同特征值，\\(\\alpha_1,\\alpha_2\\) 是对应的特征向量，则 \\(\\alpha_1,\\ A(\\alpha_1+\\alpha_2)\\) 线性无关的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(\\lambda_1\\neq0\\)"
      ],
      [
        "B",
        "\\(\\lambda_2\\neq0\\)"
      ],
      [
        "C",
        "\\(\\lambda_1=0\\)"
      ],
      [
        "D",
        "\\(\\lambda_2=0\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A(\\alpha_1+\\alpha_2)=\\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\)。向量组 \\(\\alpha_1,\\ \\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\) 线性无关等价于系数矩阵 \\(\\begin{pmatrix}1&\\lambda_1\\\\0&\\lambda_2\\end{pmatrix}\\) 的行列式 \\(\\lambda_2\\neq0\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s51"
  },
  {
    "id": "c5-hw-mc-4",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 4,
    "stem": "4. \\(n\\) 阶方阵 \\(A\\) 有 \\(n\\) 个互不相同的特征值，则 \\(A\\)（　）。",
    "options": [
      [
        "A",
        "必不可对角化"
      ],
      [
        "B",
        "必可对角化"
      ],
      [
        "C",
        "必为正定"
      ],
      [
        "D",
        "必为实对称"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(n\\) 阶矩阵若有 \\(n\\) 个互不相同的特征值，则对应特征向量线性无关，故必可对角化。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s51"
  },
  {
    "id": "c5-hw-mc-5",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 5,
    "stem": "5. 实对称矩阵的特征值一定是（　）。",
    "options": [
      [
        "A",
        "非负实数"
      ],
      [
        "B",
        "实数"
      ],
      [
        "C",
        "正数"
      ],
      [
        "D",
        "复数"
      ]
    ],
    "ans": "B",
    "fb": "解析：实对称矩阵的特征值必为实数（可由 \\((Ax,x)=(x,Ax)\\) 推得）。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s51"
  },
  {
    "id": "c5-hw-mc-6",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 6,
    "stem": "6. 正交矩阵的实特征值的绝对值等于（　）。",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(1\\)"
      ],
      [
        "C",
        "\\(2\\)"
      ],
      [
        "D",
        "不一定"
      ]
    ],
    "ans": "B",
    "fb": "解析：设正交矩阵 \\(Q\\) 的实特征值为 \\(\\lambda\\)，对应特征向量 \\(x\\neq0\\)，则 \\(\\|Qx\\|=|\\lambda|\\|x\\|=\\|x\\|\\)，故 \\(|\\lambda|=1\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s51"
  },
  {
    "id": "c5-hw-mc-7",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 7,
    "stem": "7. 二次型 \\(f=x^TAx\\) 正定的充要条件是（　）。",
    "options": [
      [
        "A",
        "\\(A\\) 的行列式 \\(>0\\)"
      ],
      [
        "B",
        "\\(A\\) 的特征值全为正"
      ],
      [
        "C",
        "\\(A\\) 的迹 \\(>0\\)"
      ],
      [
        "D",
        "\\(A\\) 的秩为 \\(n\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：二次型 \\(f=x^TAx\\)（\\(A\\) 对称）正定当且仅当 \\(A\\) 的特征值全为正；行列式、迹、秩为正定的必要非充分条件。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-mc-8",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 8,
    "stem": "8. \\(n\\) 元二次型正定的充要条件是（　）。",
    "options": [
      [
        "A",
        "标准形系数全为正"
      ],
      [
        "B",
        "负惯性指数为 \\(0\\) 但秩 \\(\\lt n\\)"
      ],
      [
        "C",
        "规范形系数为 \\(1,0,-1\\)"
      ],
      [
        "D",
        "顺序主子式有正有负"
      ]
    ],
    "ans": "A",
    "fb": "解析：\\(n\\) 元二次型正定 \\(\\Leftrightarrow\\) 其标准形系数全为正（规范形为 \\(n\\) 个 \\(1\\)）；B 为半正定，C、D 不符。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-mc-9",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 9,
    "stem": "9. 霍尔维茨定理指出，实对称阵 \\(A\\) 正定当且仅当（　）。",
    "options": [
      [
        "A",
        "所有主子式 \\(>0\\)"
      ],
      [
        "B",
        "各阶顺序主子式全 \\(>0\\)"
      ],
      [
        "C",
        "\\(|A|>0\\)"
      ],
      [
        "D",
        "奇数阶顺序主子式 \\(\\lt0\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：霍尔维茨（Sylvester）定理：实对称阵正定当且仅当各阶顺序主子式全大于 \\(0\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-mc-10",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 10,
    "stem": "10. 二次型 \\(x^2+xy+y^2\\) 是（　）。",
    "options": [
      [
        "A",
        "正定"
      ],
      [
        "B",
        "负定"
      ],
      [
        "C",
        "不定"
      ],
      [
        "D",
        "半正定"
      ]
    ],
    "ans": "A",
    "fb": "解析：对应矩阵为 \\(\\begin{pmatrix}1&1/2\\\\1/2&1\\end{pmatrix}\\)，顺序主子式 \\(1>0\\)，行列式 \\(3/4>0\\)，故正定。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-mc-11",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 11,
    "stem": "11. 合同变换不改变二次型的（　）。",
    "options": [
      [
        "A",
        "特征值"
      ],
      [
        "B",
        "行列式"
      ],
      [
        "C",
        "秩与正惯性指数"
      ],
      [
        "D",
        "迹"
      ]
    ],
    "ans": "C",
    "fb": "解析：合同变换不改变二次型的秩与正惯性指数（从而负惯性指数、符号差也不变）；合同不保持特征值、行列式、迹。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s54"
  },
  {
    "id": "c5-hw-mc-12",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 12,
    "stem": "12. 二次型 \\(x_1^2-4x_1x_2+x_2^2\\) 是（　）。",
    "options": [
      [
        "A",
        "正定"
      ],
      [
        "B",
        "负定"
      ],
      [
        "C",
        "不定"
      ],
      [
        "D",
        "半正定"
      ]
    ],
    "ans": "C",
    "fb": "解析：对应矩阵 \\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\) 的行列式 \\(-3<0\\)，故特征值异号，二次型不定。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-mc-13",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 13,
    "stem": "13. 设 \\(A\\) 的特征值为 \\(1,2,3\\)，则 \\(|A|=\\)（　）。",
    "options": [
      [
        "A",
        "\\(1\\)"
      ],
      [
        "B",
        "\\(6\\)"
      ],
      [
        "C",
        "\\(3\\)"
      ],
      [
        "D",
        "\\(11\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：方阵的行列式等于其全体特征值之积，故 \\(|A|=1\\cdot2\\cdot3=6\\)。故选（B）。",
    "pts": 4,
    "diff": 1,
    "sec": "s51"
  },
  {
    "id": "c5-hw-mc-14",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 14,
    "stem": "14. 若 \\(A\\sim B\\)，则对任意正整数 \\(k\\) 有（　）。",
    "options": [
      [
        "A",
        "\\(A^k\\sim B^k\\)"
      ],
      [
        "B",
        "\\(A^k=B^k\\)"
      ],
      [
        "C",
        "\\(|A^k|\\neq|B^k|\\)"
      ],
      [
        "D",
        "\\(A^k\\) 与 \\(B^k\\) 不相似"
      ]
    ],
    "ans": "A",
    "fb": "解析：若 \\(A\\sim B\\)，则存在可逆 \\(P\\) 使 \\(A=P^{-1}BP\\)，于是 \\(A^k=P^{-1}B^kP\\)，故 \\(A^k\\sim B^k\\)；相似不保证矩阵相等或行列式不等。故选（A）。",
    "pts": 4,
    "diff": 1,
    "sec": "s52"
  },
  {
    "id": "c5-hw-mc-15",
    "ch": 5,
    "src": "hw",
    "type": "mc",
    "no": 15,
    "stem": "15. 下列矩阵中正定的是（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}-1&0\\\\0&-2\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：正定矩阵需对称且特征值全正。C 为 \\(\\operatorname{diag}(2,3)\\)，特征值 \\(2,3>0\\)；A 秩为 \\(1\\)，B 负定，D 特征值 \\(3,-1\\) 不定。故选（C）。",
    "pts": 4,
    "diff": 1,
    "sec": "s55"
  },
  {
    "id": "c5-hw-fill-1",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 1,
    "stem": "1. 二次型 \\(f=(x_1+x_2)^2+(x_2-x_3)^2+(x_1+x_3)^2\\) 的秩为 ______。",
    "options": null,
    "ans": "秩为 \\(2\\)（展开后矩阵 \\(\\begin{pmatrix}2&1&1\\\\1&2&-1\\\\1&-1&2\\end{pmatrix}\\)，行列式 \\(0\\) 但二阶子式非零）；",
    "fb": "解析：展开得 \\(f=2x_1^2+2x_2^2+2x_3^2+2x_1x_2+2x_1x_3-2x_2x_3\\)，对应矩阵 \\(A=\\begin{pmatrix}2&1&1\\\\1&2&-1\\\\1&-1&2\\end{pmatrix}\\)。计算得 \\(|A|=0\\)，而二阶主子式 \\(\\begin{vmatrix}2&1\\\\1&2\\end{vmatrix}=3\\neq0\\)，故 \\(r(A)=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-hw-fill-2",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 2,
    "stem": "2. 设 \\(A\\) 为 2 阶方阵，\\(\\alpha_1,\\alpha_2\\) 线性无关，\\(A\\alpha_1=0,\\ A\\alpha_2=2\\alpha_1+\\alpha_2\\)，则 \\(A\\) 的非零特征值为 ______。",
    "options": null,
    "ans": "非零特征值为 \\(1\\)（由 \\(A\\alpha_2=\\alpha_2+2\\alpha_1\\) 知 \\(\\alpha_2\\) 属特征值 \\(1\\)）；",
    "fb": "解析：由 \\(A\\alpha_1=0\\) 知 \\(0\\) 是特征值；又 \\(A(A\\alpha_2)=A(2\\alpha_1+\\alpha_2)=0+A\\alpha_2=A\\alpha_2\\)，且 \\(A\\alpha_2=2\\alpha_1+\\alpha_2\\neq0\\)，故 \\(A\\alpha_2\\) 是 \\(A\\) 的属于特征值 \\(1\\) 的特征向量，即非零特征值为 \\(1\\)。故应填 \\(1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-hw-fill-3",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 3,
    "stem": "3. 若 4 阶方阵 \\(A\\sim B\\)，且 \\(A\\) 的特征值为 \\(\\frac12,\\frac13,\\frac14,\\frac15\\)，则 \\(|B^{-1}-E|=\\) ______。",
    "options": null,
    "ans": "\\(24\\)（\\(B^{-1}-E\\) 特征值 \\(1,2,3,4\\)，积 \\(24\\)）；",
    "fb": "解析：\\(A\\sim B\\)，故 \\(B\\) 特征值同为 \\(1/2,1/3,1/4,1/5\\)；\\(B^{-1}\\) 特征值为 \\(2,3,4,5\\)，\\(B^{-1}-E\\) 特征值为 \\(1,2,3,4\\)，故 \\(|B^{-1}-E|=1\\cdot2\\cdot3\\cdot4=24\\)。故应填 \\(24\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-fill-4",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 4,
    "stem": "4. 设 \\(\\alpha,\\beta\\) 为 3 维列向量，若 \\(\\alpha\\beta^T\\sim\\begin{pmatrix}2&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}\\)，则 \\(\\beta^T\\alpha=\\) ______。",
    "options": null,
    "ans": "\\(2\\)（\\(\\operatorname{tr}(\\alpha\\beta^T)=\\beta^T\\alpha=2\\)）；",
    "fb": "解析：秩 \\(1\\) 矩阵 \\(\\alpha\\beta^T\\) 的唯一非零特征值为 \\(\\beta^T\\alpha\\)，而它相似于 \\(\\operatorname{diag}(2,0,0)\\)，故该非零特征值为 \\(2\\)，即 \\(\\beta^T\\alpha=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-fill-5",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 5,
    "stem": "5. 设 \\(\\alpha=(1,1,1)^T,\\ \\beta=(1,0,k)^T\\)，若 \\(\\alpha\\beta^T\\sim\\operatorname{diag}(3,0,0)\\)，则 \\(k=\\) ______。",
    "options": null,
    "ans": "\\(k=2\\)（\\(\\beta^T\\alpha=1+0+k=3\\)）；",
    "fb": "解析：\\(\\alpha\\beta^T\\) 的非零特征值为 \\(\\beta^T\\alpha=1\\cdot1+1\\cdot0+1\\cdot k=1+k\\)；由它相似于 \\(\\operatorname{diag}(3,0,0)\\) 知非零特征值为 \\(3\\)，故 \\(1+k=3\\)，得 \\(k=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-fill-6",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 6,
    "stem": "6. 设 \\(A=\\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&-1\\end{pmatrix}\\)，则 \\(A^{2004}-2A^2=\\) ______。",
    "options": null,
    "ans": "\\(\\operatorname{diag}(3,3,-1)\\)（\\(A=\\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&-1\\end{pmatrix}\\)，\\(A^2=\\operatorname{diag}(-1,-1,1)\\)，\\(A^{2004}=(A^2)^{1002}=E\\)，故 \\(A^{2004}-2A^2=\\operatorname{diag}(3,3,-1)\\)）；",
    "fb": "解析：\\(A^2=\\operatorname{diag}(-1,-1,1)\\)，故 \\(A^{2004}=(A^2)^{1002}=E\\)；于是 \\(A^{2004}-2A^2=E-2\\operatorname{diag}(-1,-1,1)=\\operatorname{diag}(3,3,-1)\\)。故应填 \\(\\operatorname{diag}(3,3,-1)\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-fill-7",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 7,
    "stem": "7. 设 3 阶方阵 \\(A\\) 的特征值互不相同且 \\(|A|=0\\)，则 \\(R(A)=\\) ______。",
    "options": null,
    "ans": "\\(R(A)=2\\)（特征值互异且有一零根，另两非零特征向量无关，故秩 \\(2\\)）；",
    "fb": "解析：\\(A\\) 有三个互异特征值且 \\(|A|=0\\)，故其中一个特征值为 \\(0\\)，另两个非零且互异，所以 \\(R(A)=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-hw-fill-8",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 8,
    "stem": "8. 设 \\(A=(a_{ij})_{3\\times3}\\) 是正交矩阵且 \\(a_{11}=1\\)，则线性方程组 \\(Ax=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) 的一个解为 ______。",
    "options": null,
    "ans": "\\((1,0,0)^T\\)（正交阵列即解）；",
    "fb": "解析：\\(A\\) 为正交阵且 \\(a_{11}=1\\)，则第一行其余元素为 \\(0\\)，从而第一列亦为 \\((1,0,0)^T\\)；由 \\(Ax=e_1\\) 得 \\(x=A^Te_1=(1,0,0)^T\\)。故应填 \\((1,0,0)^T\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-hw-fill-9",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 9,
    "stem": "9. 已知实二次型 \\(f=a(x_1^2+x_2^2+x_3^2)+4x_1x_2+4x_1x_3+4x_2x_3\\) 经正交变换化为标准形 \\(f=6y_1^2\\)，则 \\(a=\\) ______。",
    "options": null,
    "ans": "\\(a=2\\)（矩阵特征值 \\(a+4, a-2, a-2\\)，仅一个非零特征值 \\(6\\Rightarrow a+4=6\\)）；",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}a&2&2\\\\2&a&2\\\\2&2&a\\end{pmatrix}\\)，特征值为 \\(a+4,a-2,a-2\\)；由正交变换化为 \\(6y_1^2\\) 知特征值为 \\(6,0,0\\)，故 \\(a+4=6\\) 且 \\(a-2=0\\)，得 \\(a=2\\)。故应填 \\(2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-hw-fill-10",
    "ch": 5,
    "src": "hw",
    "type": "fill",
    "no": 10,
    "stem": "10. 若二次型 \\(f=2x_1^2+x_2^2+x_3^2+2x_1x_2+t x_2x_3\\) 正定，则 \\(t\\) 的取值范围是 ______。",
    "options": null,
    "ans": "\\(|t|\\lt\\sqrt2\\)（顺序主子式 \\(2,1,1-t^2/2>0\\)）。",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}2&1&0\\\\1&1&t/2\\\\0&t/2&1\\end{pmatrix}\\)。由霍尔维茨准则需顺序主子式全正：\\(\\Delta_1=2>0,\\ \\Delta_2=1>0,\\ \\Delta_3=1-t^2/2>0\\)，解得 \\(|t|<\\sqrt2\\)。故应填 \\(|t|<\\sqrt2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-hw-calc-1",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 1,
    "stem": "1. 求矩阵 \\(A=\\begin{pmatrix}1&-1\\\\2&4\\end{pmatrix}\\) 的特征值与特征向量。",
    "options": null,
    "ans": null,
    "fb": "解：特征多项式\n\\[ |\\lambda E-A|=\\begin{vmatrix}\\lambda-1&1\\\\-2&\\lambda-4\\end{vmatrix}=(\\lambda-1)(\\lambda-4)+2=\\lambda^2-5\\lambda+6=(\\lambda-2)(\\lambda-3). \\]\n故特征值为 \\(\\lambda_1=2,\\ \\lambda_2=3\\)。\n\n1) 对 \\(\\lambda=2\\)：解 \\((A-2E)x=0\\)，\n\\[ A-2E=\\begin{pmatrix}-1&-1\\\\2&2\\end{pmatrix}\\to\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix},\\quad x_1+x_2=0. \\]\n得基础解系 \\(p_1=(1,-1)^T\\)，全部特征向量为 \\(k_1p_1\\ (k_1\\neq0)\\)。\n\n2) 对 \\(\\lambda=3\\)：\n\\[ A-3E=\\begin{pmatrix}-2&-1\\\\2&1\\end{pmatrix}\\to\\begin{pmatrix}2&1\\\\0&0\\end{pmatrix},\\quad 2x_1+x_2=0. \\]\n得基础解系 \\(p_2=(1,-2)^T\\)，全部特征向量为 \\(k_2p_2\\ (k_2\\neq0)\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-2",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 2,
    "stem": "2. 求矩阵 \\(A=\\begin{pmatrix}1&2&3\\\\2&1&3\\\\3&3&6\\end{pmatrix}\\) 的特征值与特征向量。",
    "options": null,
    "ans": null,
    "fb": "解：特征多项式\n\\[ |\\lambda E-A|=(\\lambda-9)(\\lambda+1)\\lambda, \\]\n故特征值 \\(\\lambda_1=9,\\ \\lambda_2=-1,\\ \\lambda_3=0\\)。\n\n1) \\(\\lambda=9\\)：解 \\((A-9E)x=0\\)，得基础解系 \\(p_1=(1,1,2)^T\\)。\n2) \\(\\lambda=-1\\)：得基础解系 \\(p_2=(-1,1,0)^T\\)。\n3) \\(\\lambda=0\\)：得基础解系 \\(p_3=(-1,-1,1)^T\\)。\n各自对应全部特征向量为 \\(k p_i\\ (k\\neq0,\\ i=1,2,3)\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-3",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 3,
    "stem": "3. 已知 \\(n\\) 阶方阵 \\(A\\) 满足 \\(A^2=A\\)，求 \\(A\\) 的可能特征值。",
    "options": null,
    "ans": null,
    "fb": "解：设 \\(\\lambda\\) 为 \\(A\\) 的任一特征值，\\(p\\neq0\\) 为对应特征向量，则 \\(Ap=\\lambda p\\)。\n由 \\(A^2=A\\) 得\n\\[ A^2p=A(Ap)=A(\\lambda p)=\\lambda Ap=\\lambda^2 p, \\]\n而 \\(Ap=\\lambda p\\)，故 \\(\\lambda^2p=\\lambda p\\)，即 \\((\\lambda^2-\\lambda)p=0\\)。因 \\(p\\neq0\\)，得 \\(\\lambda^2-\\lambda=0\\)，所以 \\(\\lambda=0\\) 或 \\(\\lambda=1\\)。\n故 \\(A\\) 的可能特征值只有 \\(0\\) 和 \\(1\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-4",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 4,
    "stem": "4. 设 3 阶方阵 \\(A\\) 的特征值为 \\(1,2,3\\)，求 \\(|A^3-5A^2+7A|\\)。",
    "options": null,
    "ans": null,
    "fb": "解：设 \\(A\\) 的特征值为 \\(\\lambda_1=1,\\lambda_2=2,\\lambda_3=3\\)。对多项式 \\(\\varphi(t)=t^3-5t^2+7t\\)，矩阵 \\(A^3-5A^2+7A\\) 的特征值为 \\(\\varphi(\\lambda_i)\\)。\n\\[ \\varphi(1)=1-5+7=3,\\quad \\varphi(2)=8-20+14=2,\\quad \\varphi(3)=27-45+21=3. \\]\n行列式等于特征值之积，故\n\\[ |A^3-5A^2+7A|=3\\cdot2\\cdot3=18. \\]",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-5",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 5,
    "stem": "5. 设 3 阶方阵 \\(A\\) 的特征值为 \\(1,-1,2\\)，求 \\(\\bigl|\\frac13 A^2\\bigr|\\cdot|A^{-1}-E|\\)。",
    "options": null,
    "ans": null,
    "fb": "解：\\(|A|=1\\cdot(-1)\\cdot2=-2\\)。\n1) \\(\\bigl|\\frac13 A^2\\bigr|=(\\frac13)^3|A^2|=\\frac1{27}|A|^2=\\frac1{27}\\cdot4=\\frac4{27}\\)。\n2) 若 \\(\\lambda\\) 是 \\(A\\) 的特征值，则 \\(A^{-1}-E\\) 的相应特征值为 \\(\\lambda^{-1}-1\\)。三个特征值为 \\(1,-1,2\\)，对应\n\\[ 1^{-1}-1=0,\\quad (-1)^{-1}-1=-2,\\quad 2^{-1}-1=-\\frac12. \\]\n故 \\(|A^{-1}-E|=0\\cdot(-2)\\cdot(-\\frac12)=0\\)。\n因此 \\(\\bigl|\\frac13 A^2\\bigr|\\cdot|A^{-1}-E|=\\frac4{27}\\cdot0=0\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-6",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 6,
    "stem": "6. 已知 \\(A=\\begin{pmatrix}-2&0&0\\\\2&x&2\\\\3&1&1\\end{pmatrix}\\sim B=\\begin{pmatrix}-1&0&0\\\\0&2&0\\\\0&0&y\\end{pmatrix}\\)，(1) 求 \\(x,y\\)；(2) 求可逆阵 \\(P\\) 使 \\(P^{-1}AP=B\\)。",
    "options": null,
    "ans": null,
    "fb": "解：因 \\(A\\sim B\\)，二者特征值相同。由 \\(B=\\operatorname{diag}(-1,2,y)\\) 知其特征值为 \\(-1,2,y\\)；而\n\\[ |\\lambda E-A|=(\\lambda+2)\\bigl((\\lambda-x)(\\lambda-1)-2\\bigr), \\]\n故 \\(A\\) 的特征值为 \\(-2\\) 及二次方程 \\((\\lambda-x)(\\lambda-1)-2=0\\) 的两根。比较可知 \\(-2\\) 对应 \\(y\\)，即 \\(y=-2\\)；其余两根应为 \\(-1,2\\)，由根与系数关系\n\\[ (-1)+2=x+1\\Rightarrow x=0,\\quad (-1)\\cdot2=x-2\\Rightarrow x=0. \\]\n故 \\(x=0,\\ y=-2\\)。\n\n(2) 取 \\(x=0\\)，求 \\(A\\) 对应特征值 \\(-1,2,-2\\) 的特征向量：\n\\(\\lambda=-1\\)：基础解系 \\(p_1=(0,-2,1)^T\\)；\n\\(\\lambda=2\\)：基础解系 \\(p_2=(0,1,1)^T\\)；\n\\(\\lambda=-2\\)：基础解系 \\(p_3=(-1,0,1)^T\\)。\n令 \\(P=(p_1,p_2,p_3)=\\begin{pmatrix}0&0&-1\\\\-2&1&0\\\\1&1&1\\end{pmatrix}\\)，则 \\(P\\) 可逆且 \\(P^{-1}AP=\\operatorname{diag}(-1,2,-2)=B\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-7",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 7,
    "stem": "7. 设 3 阶方阵 \\(A\\) 的特征值为 \\(1,0,-1\\)，对应特征向量依次为 \\(\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix},\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix},\\begin{pmatrix}-2\\\\-1\\\\2\\end{pmatrix}\\)，求 \\(A\\)。",
    "options": null,
    "ans": null,
    "fb": "解：令 \\(P=(p_1,p_2,p_3)=\\begin{pmatrix}1&2&-2\\\\2&-2&-1\\\\2&1&2\\end{pmatrix}\\)，\\(\\Lambda=\\operatorname{diag}(1,0,-1)\\)。由 \\(Ap_i=\\lambda_i p_i\\) 得 \\(A=P\\Lambda P^{-1}\\)。\n计算得\n\\[ A=P\\Lambda P^{-1}=\\begin{pmatrix}-1/3&0&2/3\\\\0&1/3&2/3\\\\2/3&2/3&0\\end{pmatrix}. \\]",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-8",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 8,
    "stem": "8. 设 \\(A=\\begin{pmatrix}3&-2\\\\-2&3\\end{pmatrix}\\)，求 \\(\\varphi(A)=A^{10}-5A^9\\)。",
    "options": null,
    "ans": null,
    "fb": "解：先求 \\(A\\) 的特征值与特征向量。特征多项式\n\\[ |\\lambda E-A|=(\\lambda-1)(\\lambda-5), \\]\n故 \\(\\lambda_1=1,\\lambda_2=5\\)，对应特征向量可取 \\(v_1=(1,1)^T,\\ v_2=(1,-1)^T\\)。\n令 \\(P=(v_1,v_2)=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\)，则 \\(A=P\\operatorname{diag}(1,5)P^{-1}\\)。\n对 \\(\\varphi(t)=t^{10}-5t^9=t^9(t-5)\\)，有\n\\[ \\varphi(1)=1^9(1-5)=-4,\\quad \\varphi(5)=5^9(5-5)=0. \\]\n于是\n\\[ \\varphi(A)=P\\operatorname{diag}(-4,0)P^{-1}=\\begin{pmatrix}-2&-2\\\\-2&-2\\end{pmatrix}. \\]",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-9",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 9,
    "stem": "9. 设 \\(A=\\begin{pmatrix}0&0&1\\\\x&1&y\\\\1&0&0\\end{pmatrix}\\) 可对角化，求 \\(x,y\\) 应满足的关系。",
    "options": null,
    "ans": null,
    "fb": "解：特征多项式\n\\[ |\\lambda E-A|=(\\lambda-1)^2(\\lambda+1), \\]\n故特征值为 \\(\\lambda=1\\)（二重）与 \\(\\lambda=-1\\)（一重）。\n\\(A\\) 可对角化当且仅当 \\(\\lambda=1\\) 的几何重数等于其代数重数 \\(2\\)，即 \\(\\dim N(A-E)=2\\)，等价于 \\(\\operatorname{rank}(A-E)=1\\)。\n\\[ A-E=\\begin{pmatrix}-1&0&1\\\\x&0&y\\\\1&0&-1\\end{pmatrix}. \\]\n第 1、3 行已成比例（第 3 行 \\(= -\\)第 1 行），要使秩为 \\(1\\)，第 2 行须与第 1 行成比例，即存在 \\(k\\) 使 \\((x,0,y)=k(-1,0,1)\\)，从而 \\(x=-k,\\ y=k\\)，即\n\\[ x+y=0. \\]\n故 \\(A\\) 可对角化的充要条件为 \\(x+y=0\\)。",
    "pts": 6,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-hw-calc-10",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 10,
    "stem": "10. 求正交矩阵 \\(P\\) 使 \\(P^TAP=\\Lambda\\)，其中 \\(A=\\begin{pmatrix}1&2&2\\\\2&1&2\\\\2&2&1\\end{pmatrix}\\)。",
    "options": null,
    "ans": null,
    "fb": "解：\\(A\\) 为实对称阵，可正交对角化。特征多项式\n\\[ |\\lambda E-A|=(\\lambda-5)(\\lambda+1)^2, \\]\n故特征值 \\(\\lambda_1=5,\\ \\lambda_2=\\lambda_3=-1\\)。\n\\(\\lambda=5\\)：基础解系 \\((1,1,1)^T\\)，单位化得 \\(q_1=\\frac1{\\sqrt3}(1,1,1)^T\\)。\n\\(\\lambda=-1\\)：解 \\((A+E)x=0\\) 即 \\(x_1+x_2+x_3=0\\)，取正交基 \\((1,-1,0)^T,\\ (1,1,-2)^T\\)，单位化得\n\\[ q_2=\\frac1{\\sqrt2}(1,-1,0)^T,\\quad q_3=\\frac1{\\sqrt6}(1,1,-2)^T. \\]\n令 \\(P=(q_1,q_2,q_3)\\)，则 \\(P\\) 为正交矩阵且\n\\[ P^TAP=\\operatorname{diag}(5,-1,-1). \\]\n（\\(\\lambda=-1\\) 的两个正交单位特征向量可任取，答案不唯一。）",
    "pts": 6,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-hw-calc-11",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 11,
    "stem": "11. 用配方法化 \\(f=x_1^2+2x_2^2+2x_1x_2-4x_2x_3\\) 为标准形，并写出变换。",
    "options": null,
    "ans": null,
    "fb": "解：配方。\n\\[ f=x_1^2+2x_1x_2+2x_2^2-4x_2x_3=(x_1+x_2)^2+x_2^2-4x_2x_3=(x_1+x_2)^2+(x_2-2x_3)^2-4x_3^2. \\]\n令\n\\[ \\begin{cases} y_1=x_1+x_2,\\\\ y_2=x_2-2x_3,\\\\ y_3=x_3,\\end{cases} \\]\n则标准形为\n\\[ f=y_1^2+y_2^2-4y_3^2. \\]\n反解得变换 \\(x=Cy\\)：\n\\[ \\begin{cases} x_1=y_1-y_2-2y_3,\\\\ x_2=y_2+2y_3,\\\\ x_3=y_3,\\end{cases}\\quad C=\\begin{pmatrix}1&-1&-2\\\\0&1&2\\\\0&0&1\\end{pmatrix},\\ |C|=1\\neq0. \\]",
    "pts": 6,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-hw-calc-12",
    "ch": 5,
    "src": "hw",
    "type": "calc",
    "no": 12,
    "stem": "12. 判别二次型 \\(f=-2x_1^2-6x_2^2-4x_3^2+2x_1x_2+2x_1x_3\\) 的正定性。",
    "options": null,
    "ans": null,
    "fb": "解：二次型矩阵\n\\[ A=\\begin{pmatrix}-2&1&1\\\\1&-6&0\\\\1&0&-4\\end{pmatrix}. \\]\n用顺序主子式判别：\n\\[ \\Delta_1=-2<0,\\quad \\Delta_2=\\begin{vmatrix}-2&1\\\\1&-6\\end{vmatrix}=12-1=11>0,\\quad \\Delta_3=|A|=-38<0. \\]\n因 \\(\\Delta_1<0,\\ \\Delta_2>0,\\ \\Delta_3<0\\)，由负定判别法知 \\(A\\) 负定，故该二次型为负定二次型。",
    "pts": 6,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-hw-proof-1",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 1,
    "stem": "1. 证明：若 \\(\\lambda\\) 是可逆阵 \\(A\\) 的特征值，则 \\(\\dfrac{|A|}{\\lambda}\\) 是 \\(A^*\\) 的特征值。",
    "options": null,
    "ans": null,
    "fb": "证明：设 \\(\\lambda\\) 是可逆阵 \\(A\\) 的特征值，\\(p\\neq0\\) 为对应特征向量，则 \\(Ap=\\lambda p\\)。\n由 \\(A\\) 可逆知 \\(\\lambda\\neq0\\)，且 \\(A^{-1}p=\\lambda^{-1}p\\)。\n又 \\(A^*=|A|A^{-1}\\)，于是\n\\[ A^*p=|A|A^{-1}p=|A|\\lambda^{-1}p=\\frac{|A|}{\\lambda}p. \\]\n故 \\(\\frac{|A|}{\\lambda}\\) 是 \\(A^*\\) 的特征值。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s51"
  },
  {
    "id": "c5-hw-proof-2",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 2,
    "stem": "2. 证明：相似矩阵有相同的秩。",
    "options": null,
    "ans": null,
    "fb": "证明：\\(A\\sim B\\) 即存在可逆阵 \\(P\\) 使 \\(B=P^{-1}AP\\)。\n由于左乘、右乘可逆矩阵不改变矩阵的秩，故\n\\[ \\operatorname{rank}(B)=\\operatorname{rank}(P^{-1}AP)=\\operatorname{rank}(A). \\]\n故相似矩阵有相同的秩。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s52"
  },
  {
    "id": "c5-hw-proof-3",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 3,
    "stem": "3. 证明定理 5.1 的推论：若 \\(p_1,p_2\\) 分属不同特征值 \\(\\lambda_1\\neq\\lambda_2\\)，则 \\(p_1+p_2\\) 不是 \\(A\\) 的特征向量。",
    "options": null,
    "ans": null,
    "fb": "证明：反设 \\(p_1+p_2\\) 是 \\(A\\) 的特征向量，对应特征值 \\(\\mu\\)，则\n\\[ A(p_1+p_2)=\\mu(p_1+p_2). \\]\n而 \\(Ap_1=\\lambda_1p_1,\\ Ap_2=\\lambda_2p_2\\)，故\n\\[ \\lambda_1p_1+\\lambda_2p_2=\\mu p_1+\\mu p_2, \\]\n即 \\((\\lambda_1-\\mu)p_1+(\\lambda_2-\\mu)p_2=0\\)。\n因属于不同特征值的特征向量线性无关，故 \\(p_1,p_2\\) 线性无关，从而\n\\[ \\lambda_1-\\mu=0,\\quad \\lambda_2-\\mu=0, \\]\n得 \\(\\lambda_1=\\lambda_2\\)，与 \\(\\lambda_1\\neq\\lambda_2\\) 矛盾。\n故 \\(p_1+p_2\\) 不是 \\(A\\) 的特征向量。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s51"
  },
  {
    "id": "c5-hw-proof-4",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 4,
    "stem": "4. 设 \\(A\\) 为 \\(n\\) 阶正交阵且 \\(|A|\\lt0\\)，证明 \\(|A+E|=0\\)。",
    "options": null,
    "ans": null,
    "fb": "证明：因 \\(A\\) 正交，故 \\(A^TA=E\\)，即 \\(A^{-1}=A^T\\)。\n\\[ |A+E|=|A|\\cdot|A^{-1}+E|=|A|\\cdot|A^T+E|. \\]\n又 \\(|A^T+E|=|(A^T+E)^T|=|A+E|\\)，于是\n\\[ |A+E|=|A|\\cdot|A+E|. \\]\n正交阵行列式为 \\(\\pm1\\)，由 \\(|A|<0\\) 知 \\(|A|=-1\\)，代入得\n\\[ |A+E|=-|A+E|\\ \\Rightarrow\\ 2|A+E|=0\\ \\Rightarrow\\ |A+E|=0. \\]\n故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s51"
  },
  {
    "id": "c5-hw-proof-5",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 5,
    "stem": "5. 设 \\(\\xi\\) 为 \\(n\\) 维非零列向量，\\(\\|\\xi\\|=2\\)，\\(A=\\xi\\xi^T\\)。证明：(1) \\(A^2=4A\\)；(2) \\(\\xi\\) 是 \\(A\\) 的特征向量；(3) \\(A\\) 相似于对角阵。",
    "options": null,
    "ans": null,
    "fb": "证明：(1) \\(A^2=(\\xi\\xi^T)(\\xi\\xi^T)=\\xi(\\xi^T\\xi)\\xi^T\\)。由 \\(\\|\\xi\\|=2\\) 得 \\(\\xi^T\\xi=4\\)，故\n\\[ A^2=4\\xi\\xi^T=4A. \\]\n(2) \\(A\\xi=\\xi\\xi^T\\xi=\\xi(\\xi^T\\xi)=4\\xi\\)，故 \\(\\xi\\) 是 \\(A\\) 的属于特征值 \\(4\\) 的特征向量。\n(3) \\(A=\\xi\\xi^T\\) 为对称阵，故可正交对角化，从而相似于对角阵。具体地，\\(\\operatorname{rank}(A)=1\\)，\\(4\\) 是单特征值，\\(0\\) 的几何重数为 \\(n-1\\)，故 \\(A\\sim\\operatorname{diag}(4,0,\\dots,0)\\)。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s52"
  },
  {
    "id": "c5-hw-proof-6",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 6,
    "stem": "6. 证明：实对称阵 \\(A\\) 正定时，其伴随矩阵 \\(A^*\\) 也正定。",
    "options": null,
    "ans": null,
    "fb": "证明：\\(A\\) 正定且实对称，则 \\(A^*=|A|A^{-1}\\)。因 \\(A\\) 正定，其特征值全为正，故 \\(|A|>0\\)，且 \\(A^{-1}\\) 仍正定。\n对任意 \\(x\\neq0\\)，\n\\[ x^TA^*x=|A|\\,x^TA^{-1}x. \\]\n由 \\(A^{-1}\\) 正定知 \\(x^TA^{-1}x>0\\)，又 \\(|A|>0\\)，故 \\(x^TA^*x>0\\)。\n所以 \\(A^*\\) 正定。故结论成立。",
    "pts": 6,
    "diff": 3,
    "sec": "s55"
  },
  {
    "id": "c5-hw-proof-7",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 7,
    "stem": "7. 设 \\(A\\) 正定，\\(B\\) 实反对称，证明 \\(A-B^2\\) 正定。",
    "options": null,
    "ans": null,
    "fb": "证明：对任意 \\(x\\neq0\\)，\n\\[ x^T(A-B^2)x=x^TAx-x^TB^2x. \\]\n\\(A\\) 正定，故 \\(x^TAx>0\\)。又 \\(B\\) 反对称，\\(B^T=-B\\)，于是 \\(B^TB=(-B)B=-B^2\\)。对任意 \\(x\\)，\n\\[ x^TB^2x=-x^TB^TBx=-\\|Bx\\|^2\\le0. \\]\n因此\n\\[ x^T(A-B^2)x=x^TAx-x^TB^2x=x^TAx+\\|Bx\\|^2>0. \\]\n故 \\(A-B^2\\) 正定。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s55"
  },
  {
    "id": "c5-hw-proof-8",
    "ch": 5,
    "src": "hw",
    "type": "proof",
    "no": 8,
    "stem": "8. 证明：二次型 \\(f=x^TAx\\) 在 \\(\\|x\\|=1\\) 时的最大值为 \\(A\\) 的最大特征值。",
    "options": null,
    "ans": null,
    "fb": "证明：实对称阵 \\(A\\) 可正交对角化：存在正交阵 \\(Q\\) 使 \\(A=Q\\Lambda Q^T\\)，\\(\\Lambda=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)\\)，且不妨设 \\(\\lambda_1\\ge\\cdots\\ge\\lambda_n\\)。\n令 \\(y=Q^Tx\\)，因 \\(Q\\) 正交，\\(\\|y\\|=\\|x\\|=1\\)。则\n\\[ f=x^TAx=y^T\\Lambda y=\\sum_{i=1}^n\\lambda_i y_i^2. \\]\n由 \\(\\sum y_i^2=1\\) 且 \\(\\lambda_i\\le\\lambda_1\\)，得\n\\[ f\\le\\lambda_1\\sum y_i^2=\\lambda_1, \\]\n当 \\(y=(1,0,\\dots,0)^T\\)（即 \\(x=q_1\\)，\\(A\\) 属于最大特征值 \\(\\lambda_1\\) 的单位特征向量）时取等号。\n故 \\(f\\) 在 \\(\\|x\\|=1\\) 时的最大值为 \\(A\\) 的最大特征值。证毕。",
    "pts": 6,
    "diff": 3,
    "sec": "s54"
  },
  {
    "id": "c5-hw-app-1",
    "ch": 5,
    "src": "hw",
    "type": "app",
    "no": 1,
    "stem": "1. （人口流动）城市—农村人口转移矩阵为 \\(A=\\begin{pmatrix}0.9&0.2\\\\0.1&0.8\\end{pmatrix}\\)，求长期稳定分布，并说明总人口不变下最终城乡比例。",
    "options": null,
    "ans": null,
    "fb": "解：设城乡人口列向量 \\(v=(c,r)^T\\)，转移 \\(v_{k+1}=Av_k\\)，其中\n\\[ A=\\begin{pmatrix}0.9&0.2\\\\0.1&0.8\\end{pmatrix} \\]\n（列和为 1，为列随机矩阵）。长期稳定分布满足 \\(Av=v\\)，即 \\((A-E)v=0\\)。\n\\[ A-E=\\begin{pmatrix}-0.1&0.2\\\\0.1&-0.2\\end{pmatrix}\\to x_1-2x_2=0, \\]\n基础解系 \\((2,1)^T\\)。归一化得比例 \\(c:r=2:1\\)（城市占 \\(\\frac23\\)，农村占 \\(\\frac13\\)）。\n故无论初始分布如何，总人口不变下长期城乡比例趋于 \\(2:1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s56"
  },
  {
    "id": "c5-hw-app-2",
    "ch": 5,
    "src": "hw",
    "type": "app",
    "no": 2,
    "stem": "2. （PageRank 思想）构造一个 3 网页的链接矩阵（列归一），说明其属于特征值 \\(1\\) 的特征向量如何给出排名。",
    "options": null,
    "ans": null,
    "fb": "解：构造 3 网页链接关系：网页 1 链向 2、3；网页 2 链向 1；网页 3 链向 1、2。出链数分别为 \\(2,1,2\\)，列归一化得转移矩阵\n\\[ M=\\begin{pmatrix}0&1&1/2\\\\1/2&0&1/2\\\\1/2&0&0\\end{pmatrix}. \\]\nPageRank 向量 \\(r\\) 满足 \\(Mr=r\\)，即 \\(r\\) 是 \\(M\\) 属于特征值 \\(1\\) 的特征向量。\n解 \\((M-E)r=0\\) 得 \\(r\\propto(4,3,2)^T\\)。\n各分量大小给出重要性排名：网页 1（4）\\(>\\) 网页 2（3）\\(>\\) 网页 3（2）。即特征值 1 对应的（归一化）特征向量各分量即为各网页的 PageRank 得分，用以排序。",
    "pts": 4,
    "diff": 2,
    "sec": "s56"
  },
  {
    "id": "c5-hw-app-3",
    "ch": 5,
    "src": "hw",
    "type": "app",
    "no": 3,
    "stem": "3. （PCA 思想）设数据协方差阵 \\(C=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)，求其主成分方向（即特征向量）与对应方差（特征值）。",
    "options": null,
    "ans": null,
    "fb": "解：协方差阵 \\(C=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)。求其特征值与特征向量。\n特征多项式 \\(|\\lambda E-C|=(\\lambda-3)(\\lambda-1)\\)，特征值 \\(\\lambda_1=3,\\ \\lambda_2=1\\)。\n\\(\\lambda=3\\)：特征向量 \\((1,1)^T\\)，单位化 \\(u_1=\\frac1{\\sqrt2}(1,1)^T\\)；\n\\(\\lambda=1\\)：特征向量 \\((1,-1)^T\\)，单位化 \\(u_2=\\frac1{\\sqrt2}(1,-1)^T\\)。\n故第一主成分方向为 \\(u_1\\)（对应方差 \\(3\\)），第二主成分方向为 \\(u_2\\)（对应方差 \\(1\\)）。\n即主成分方向即特征向量，对应方差即特征值。",
    "pts": 4,
    "diff": 2,
    "sec": "s56"
  },
  {
    "id": "c5-hw-app-4",
    "ch": 5,
    "src": "hw",
    "type": "app",
    "no": 4,
    "stem": "4. （振动）二自由度系统刚度阵 \\(K=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}\\)、质量阵 \\(M=E\\)，求固有频率平方与振型。",
    "options": null,
    "ans": null,
    "fb": "解：系统满足广义特征问题 \\(K\\phi=\\omega^2 M\\phi\\)，此处 \\(M=E\\)，故 \\(\\omega^2\\) 即为 \\(K\\) 的特征值。\n\\[ K=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix},\\quad |\\lambda E-K|=(\\lambda-3)(\\lambda-1). \\]\n特征值 \\(\\lambda_1=3,\\ \\lambda_2=1\\)，故固有频率平方为 \\(\\omega_1^2=3,\\ \\omega_2^2=1\\)，固有频率 \\(\\omega_1=\\sqrt3,\\ \\omega_2=1\\)。\n对应振型（特征向量）：\n\\(\\lambda=3\\)：\\((1,1)^T\\)，即两质量同相振动；\n\\(\\lambda=1\\)：\\((1,-1)^T\\)，即两质量反相振动。",
    "pts": 4,
    "diff": 2,
    "sec": "s56"
  },
  {
    "id": "c5-hw-app-5",
    "ch": 5,
    "src": "hw",
    "type": "app",
    "no": 5,
    "stem": "5. （图像压缩）取 \\(3\\times3\\) 对称阵 \\(S=\\begin{pmatrix}3&2&0\\\\2&3&0\\\\0&0&1\\end{pmatrix}\\)，作正交对角化，说明保留最大特征值对应的成分如何实现压缩。",
    "options": null,
    "ans": null,
    "fb": "解：对称阵 \\(S=\\begin{pmatrix}3&2&0\\\\2&3&0\\\\0&0&1\\end{pmatrix}\\)。特征多项式\n\\[ |\\lambda E-S|=(\\lambda-5)(\\lambda-1)^2, \\]\n特征值 \\(\\lambda_1=5,\\ \\lambda_2=\\lambda_3=1\\)。正交对角化：\n\\(\\lambda=5\\)：单位特征向量 \\(u_1=\\frac1{\\sqrt2}(1,1,0)^T\\)；\n\\(\\lambda=1\\)：可取正交单位特征向量 \\(u_2=\\frac1{\\sqrt2}(1,-1,0)^T,\\ u_3=(0,0,1)^T\\)。\n令 \\(P=(u_1,u_2,u_3)\\)，则 \\(P^TSP=\\operatorname{diag}(5,1,1)\\)。\n压缩思想：按 Eckart–Young 定理，最佳秩 1 近似为保留最大特征值对应的成分：\n\\[ S\\approx \\lambda_1 u_1u_1^T=5\\cdot\\frac12\\begin{pmatrix}1&1&0\\\\1&1&0\\\\0&0&0\\end{pmatrix}=\\begin{pmatrix}2.5&2.5&0\\\\2.5&2.5&0\\\\0&0&0\\end{pmatrix}. \\]\n信息能量 \\(\\sum\\lambda_i^2=25+1+1=27\\)，仅保留 \\(\\lambda=5\\) 成分即保留 \\(25/27\\approx92.6\\%\\)，用 1 个特征值与 1 个特征向量代替原矩阵，实现压缩。",
    "pts": 4,
    "diff": 2,
    "sec": "s56"
  },
  {
    "id": "c5-test-mc-1",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 1,
    "stem": "1. 设 \\(A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix},\\ B=\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}\\)，则（　）。",
    "options": [
      [
        "A",
        "不相似"
      ],
      [
        "B",
        "相等"
      ],
      [
        "C",
        "相似"
      ],
      [
        "D",
        "无法判断"
      ]
    ],
    "ans": "C",
    "fb": "✓ 两者特征值均为 \\(2,3\\)，故相似（取置换阵即可）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-2",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 2,
    "stem": "2. 若 \\(A\\sim B\\)，则下列\\textbf{不一定}成立的是（　）。",
    "options": [
      [
        "A",
        "\\(A=B\\)"
      ],
      [
        "B",
        "特征值相同"
      ],
      [
        "C",
        "\\(|A|=|B|\\)"
      ],
      [
        "D",
        "\\(R(A)=R(B)\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 相似只保证等价类不变量，矩阵本身不必相等。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-test-mc-3",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 3,
    "stem": "3. \\(n\\) 阶方阵有 \\(n\\) 个互异特征值，则它（　）。",
    "options": [
      [
        "A",
        "必可对角化"
      ],
      [
        "B",
        "必不可对角化"
      ],
      [
        "C",
        "必为对称阵"
      ],
      [
        "D",
        "必不可逆"
      ]
    ],
    "ans": "A",
    "fb": "✓ 互异特征值对应线性无关特征向量，共 \\(n\\) 个（推论 5.3）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-test-mc-4",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 4,
    "stem": "4. 实对称矩阵的特征值一定是（　）。",
    "options": [
      [
        "A",
        "非负实数"
      ],
      [
        "B",
        "纯虚数"
      ],
      [
        "C",
        "正数"
      ],
      [
        "D",
        "实数"
      ]
    ],
    "ans": "D",
    "fb": "✓ 定理 5.5：实对称阵特征值全为实数。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-5",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 5,
    "stem": "5. 正交矩阵的实特征值绝对值等于（　）。",
    "options": [
      [
        "A",
        "0"
      ],
      [
        "B",
        "2"
      ],
      [
        "C",
        "1"
      ],
      [
        "D",
        "任意"
      ]
    ],
    "ans": "C",
    "fb": "✓ 由 \\(x^TAx\\) 论证得 \\(\\lambda^2=1\\)，故 \\(|\\lambda|=1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-6",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 6,
    "stem": "6. 二次型 \\(f=x^TAx\\) 正定当且仅当（　）。",
    "options": [
      [
        "A",
        "\\(A\\) 的特征值全为正"
      ],
      [
        "B",
        "\\(|A|>0\\)"
      ],
      [
        "C",
        "\\(\\operatorname{tr}(A)>0\\)"
      ],
      [
        "D",
        "\\(R(A)\\lt n\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ 推论 5.5。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-7",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 7,
    "stem": "7. 霍尔维茨定理：实对称阵 \\(A\\) 正定当且仅当（　）。",
    "options": [
      [
        "A",
        "所有主子式 \\(>0\\)"
      ],
      [
        "B",
        "各阶顺序主子式全 \\(>0\\)"
      ],
      [
        "C",
        "\\(|A|\\lt0\\)"
      ],
      [
        "D",
        "奇数阶顺序主子式 \\(\\lt0\\)"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定理 5.15。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-8",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 8,
    "stem": "8. 二次型 \\(x_1^2+2x_2^2+3x_3^2\\) 是（　）。",
    "options": [
      [
        "A",
        "半正定"
      ],
      [
        "B",
        "负定"
      ],
      [
        "C",
        "不定"
      ],
      [
        "D",
        "正定"
      ]
    ],
    "ans": "D",
    "fb": "✓ 标准形系数全正，故正定。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-9",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 9,
    "stem": "9. 二次型 \\(x_1^2-4x_1x_2+x_2^2\\) 是（　）。",
    "options": [
      [
        "A",
        "正定"
      ],
      [
        "B",
        "不定"
      ],
      [
        "C",
        "负定"
      ],
      [
        "D",
        "半正定"
      ]
    ],
    "ans": "B",
    "fb": "✓ 矩阵 \\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\) 特征值 \\(3,-1\\)，有正有负，不定。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-10",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 10,
    "stem": "10. 合同变换不改变二次型的（　）。",
    "options": [
      [
        "A",
        "特征值"
      ],
      [
        "B",
        "秩与正惯性指数"
      ],
      [
        "C",
        "行列式"
      ],
      [
        "D",
        "迹"
      ]
    ],
    "ans": "B",
    "fb": "✓ 惯性定理：合同保持秩与正、负惯性指数。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-test-mc-11",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 11,
    "stem": "11. 设 \\(A\\) 的特征值为 \\(1,2,3\\)，则 \\(|A|=\\)（　）。",
    "options": [
      [
        "A",
        "3"
      ],
      [
        "B",
        "1"
      ],
      [
        "C",
        "6"
      ],
      [
        "D",
        "11"
      ]
    ],
    "ans": "C",
    "fb": "✓ 特征值之积等于行列式。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-12",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 12,
    "stem": "12. 若 \\(A\\) 的特征值为 \\(2\\)，则 \\(A^2\\) 的特征值为（　）。",
    "options": [
      [
        "A",
        "0"
      ],
      [
        "B",
        "2"
      ],
      [
        "C",
        "\\(\\sqrt2\\)"
      ],
      [
        "D",
        "4"
      ]
    ],
    "ans": "D",
    "fb": "✓ 若 \\(Ax=\\lambda x\\)，则 \\(A^2x=\\lambda^2x=4x\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-13",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 13,
    "stem": "13. 矩阵 \\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) 的迹为（　）。",
    "options": [
      [
        "A",
        "2"
      ],
      [
        "B",
        "0"
      ],
      [
        "C",
        "4"
      ],
      [
        "D",
        "-2"
      ]
    ],
    "ans": "A",
    "fb": "✓ 迹 \\(=1+1=2\\)，也等于特征值之和 \\(3+(-1)=2\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-14",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 14,
    "stem": "14. 矩阵 \\(A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\) 的行列式为（　）。",
    "options": [
      [
        "A",
        "1"
      ],
      [
        "B",
        "-1"
      ],
      [
        "C",
        "0"
      ],
      [
        "D",
        "-2"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(|A|=0\\cdot0-(-1)\\cdot1=1\\)。其特征值为 \\(\\pm i\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-15",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 15,
    "stem": "15. \\(A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\) 的特征多项式为（　）。",
    "options": [
      [
        "A",
        "\\(\\lambda^2-4\\lambda+3\\)"
      ],
      [
        "B",
        "\\(\\lambda^2-2\\lambda+3\\)"
      ],
      [
        "C",
        "\\(\\lambda^2-4\\lambda-3\\)"
      ],
      [
        "D",
        "\\(\\lambda^2+4\\lambda+3\\)"
      ]
    ],
    "ans": "A",
    "fb": "✓ \\(|A-\\lambda E|=(2-\\lambda)^2-1=\\lambda^2-4\\lambda+3\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-test-mc-16",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 16,
    "stem": "16. 若 \\(A\\) 正定，则 \\(A^{-1}\\)（　）。",
    "options": [
      [
        "A",
        "不一定正定"
      ],
      [
        "B",
        "不定"
      ],
      [
        "C",
        "负定"
      ],
      [
        "D",
        "正定"
      ]
    ],
    "ans": "D",
    "fb": "✓ 正定阵逆的特征值 \\(1/\\lambda_i>0\\)，故正定。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-17",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 17,
    "stem": "17. 二次型 \\(x_1^2+4x_1x_2+4x_2^2\\) 的秩为（　）。",
    "options": [
      [
        "A",
        "2"
      ],
      [
        "B",
        "1"
      ],
      [
        "C",
        "3"
      ],
      [
        "D",
        "0"
      ]
    ],
    "ans": "B",
    "fb": "✓ \\(f=(x_1+2x_2)^2\\)，矩阵 \\(\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\) 秩为 \\(1\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-test-mc-18",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 18,
    "stem": "18. \\(n\\) 阶方阵可对角化的充要条件是（　）。",
    "options": [
      [
        "A",
        "有 \\(n\\) 个不同特征值"
      ],
      [
        "B",
        "\\(|A|\\neq0\\)"
      ],
      [
        "C",
        "有 \\(n\\) 个线性无关的特征向量"
      ],
      [
        "D",
        "为对称阵"
      ]
    ],
    "ans": "C",
    "fb": "✓ 定理 5.4（A 只是充分非必要）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-test-mc-19",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 19,
    "stem": "19. 实对称阵必可（　）对角化。",
    "options": [
      [
        "A",
        "相似但非正交"
      ],
      [
        "B",
        "未必"
      ],
      [
        "C",
        "正交"
      ],
      [
        "D",
        "仅当可逆时"
      ]
    ],
    "ans": "C",
    "fb": "✓ 谱定理 5.8：实对称阵必可正交对角化。",
    "pts": 4,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-test-mc-20",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 20,
    "stem": "20. 矩阵 \\(\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) 合同于（　）。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}-2&1\\\\1&-2\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "C",
    "fb": "✓ \\(M=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) 的特征值为 \\(3,-1\\)，惯性指数 \\((1,1)\\)。C \\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\) 特征值同为 \\(3,-1\\)，惯性指数亦为 \\((1,1)\\)，故合同；D 为单位阵，特征值 \\(1,1\\)，惯性指数 \\((2,0)\\)，不合同。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-test-mc-21",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 21,
    "stem": "21. 二次型 \\(x^2+xy+y^2\\) 正定，因为其矩阵的特征值为（　）。",
    "options": [
      [
        "A",
        "\\(-1,2\\)"
      ],
      [
        "B",
        "\\(0,1\\)"
      ],
      [
        "C",
        "\\(1,-1\\)"
      ],
      [
        "D",
        "\\(\\frac32,\\frac12\\)"
      ]
    ],
    "ans": "D",
    "fb": "✓ 矩阵 \\(\\begin{pmatrix}1&1/2\\\\1/2&1\\end{pmatrix}\\) 特征值 \\(3/2,1/2>0\\)，正定。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-22",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 22,
    "stem": "22. 主轴定理指出，正交变换化标准形后系数为（　）。",
    "options": [
      [
        "A",
        "矩阵的迹"
      ],
      [
        "B",
        "顺序主子式"
      ],
      [
        "C",
        "任意实数"
      ],
      [
        "D",
        "原矩阵的特征值"
      ]
    ],
    "ans": "D",
    "fb": "✓ 定理 5.10：正交标准形系数即特征值。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-test-mc-23",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 23,
    "stem": "23. 设 \\(A\\) 正定，则（　）。",
    "options": [
      [
        "A",
        "\\(|A|>0\\)"
      ],
      [
        "B",
        "\\(|A|\\lt0\\)"
      ],
      [
        "C",
        "\\(|A|=0\\)"
      ],
      [
        "D",
        "\\(|A|\\) 符号不定"
      ]
    ],
    "ans": "A",
    "fb": "✓ 推论 5.7：正定则特征值全正，行列式 \\(=\\prod\\lambda_i>0\\)。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-24",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 24,
    "stem": "24. 惯性定理说明，实二次型经可逆线性变换后保持不变的是（　）。",
    "options": [
      [
        "A",
        "标准形系数"
      ],
      [
        "B",
        "正、负惯性指数"
      ],
      [
        "C",
        "特征值"
      ],
      [
        "D",
        "矩阵的迹"
      ]
    ],
    "ans": "B",
    "fb": "✓ 定理 5.11：正、负平方项个数不变。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-test-mc-25",
    "ch": 5,
    "src": "test",
    "type": "mc",
    "no": 25,
    "stem": "25. 设 \\(A=\\operatorname{diag}(1,2,3)\\)，则 \\(A\\)（　）。",
    "options": [
      [
        "A",
        "负定"
      ],
      [
        "B",
        "正定"
      ],
      [
        "C",
        "不定"
      ],
      [
        "D",
        "半正定但非正定"
      ]
    ],
    "ans": "B",
    "fb": "✓ 特征值 \\(1,2,3>0\\)，故正定（也是合同于单位阵）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c1-jx-fill-10",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 10,
    "stem": "求 \\(f(x)=\\begin{vmatrix} 2x & x & 1 & 2 \\\\ 1 & x & 1 & -1 \\\\ 3 & 2 & x & 1 \\\\ 1 & 1 & 1 & x \\end{vmatrix}\\) 中 \\(x^4\\) 与 \\(x^3\\) 的系数。",
    "options": null,
    "ans": "\\(x^4\\) 的系数为 \\(2\\)，\\(x^3\\) 的系数为 \\(-1\\)。",
    "fb": "解：\\(x^4\\)项只来自主对角线乘积\\(2x\\cdot x\\cdot x\\cdot x=2x^4\\)，系数为\\(2\\)。\\(x^3\\)项由主对角线上恰一个元素取常数、其余取含\\(x\\)项构成，按行列式展开求得其系数为\\(-1\\)。故\\(x^4\\)的系数为\\(2\\)，\\(x^3\\)的系数为\\(-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-1",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 1,
    "stem": "仅用行列式定义，证明：\\[ D=\\begin{vmatrix} a_1 & a_2 & a_3 & a_4 & a_5 \\\\ b_1 & b_2 & b_3 & b_4 & b_5 \\\\ c_1 & c_2 & 0 & 0 & 0 \\\\ d_1 & d_2 & 0 & 0 & 0 \\\\ e_1 & e_2 & 0 & 0 & 0 \\end{vmatrix} = 0 \\]",
    "options": null,
    "ans": null,
    "fb": "除去符号的差异外，行列式 \\(D\\) 的一般项可表示为 \\(a_{i_1}b_{i_2}c_{i_3}d_{i_4}e_{i_5}\\)，其中 \\(i_1i_2i_3i_4i_5\\) 为 \\(1,2,3,4,5\\) 的任意一个排列，且 \\(c_{i_3},d_{i_4},e_{i_5}\\)（\\(i_3,i_4,i_5=3,4,5\\)）都是 \\(0\\)。由于 \\(i_3,i_4,i_5\\) 为 \\(1,2,3,4,5\\) 中的三个不同的数，故至少要取到 \\(3,4,5\\) 中的一个数。因此，在 \\(D\\) 的展开式的每一项中至少有一个因子 \\(0\\)，从而 \\(D\\) 的每项都是零，故 \\(D=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-2",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 2,
    "stem": "证明：一个 \\(n\\) 阶行列式中等于零的元素的个数如果比 \\(n^2-n\\) 多，则此行列式必等于零。",
    "options": null,
    "ans": null,
    "fb": "\\(n\\) 阶行列式共有 \\(n^2\\) 个元素。如果 \\(D\\) 是 \\(n\\) 阶行列式，且其中等于零的元素的个数比 \\(n^2-n\\) 多，则不等于零的元素的个数比 \\(n^2-(n^2-n)=n\\) 少。这样，\\(D\\) 的展开式中每一项至少有一个因子 \\(0\\)，从而 \\(D=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-11",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 11,
    "stem": "利用定义计算下列行列式：\\[ D_n=\\begin{vmatrix} 0 & \\cdots & 0 & a_{1n} \\\\ 0 & \\cdots & a_{2,n-1} & a_{2n} \\\\\\vdots & \\vdots & \\vdots & \\vdots\\\\ a_{n1} & \\cdots & a_{n,n-1} & a_{nn} \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\((-1)^{\\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\\cdots a_{n1}\\)",
    "fb": "解：按第一行展开，第一行只有末元素 \\(a_{1n}\\) 非零，得 \\(D_n=(-1)^{1+n}a_{1n}D_{n-1}\\)，其中 \\(D_{n-1}\\) 是同型的 \\(n-1\\) 阶次对角行列式。逐层递推（或将行序整个颠倒：共 \\(\\lfloor n/2\\rfloor\\) 次对换后化为下三角行列式），得 \\[D_n=(-1)^{\\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\\cdots a_{n1}.\\]",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-12",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 12,
    "stem": "利用定义计算下列行列式：\\[ D_n=\\begin{vmatrix} 0 & 0 & \\cdots & 0 & a_1 & 0 \\\\ 0 & 0 & \\cdots & a_2 & 0 & 0 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ 0 & a_{n-2} & \\cdots & 0 & 0 & 0 \\\\ a_{n-1} & 0 & \\cdots & 0 & 0 & 0 \\\\ 0 & 0 & \\cdots & 0 & 0 & a_n \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\((-1)^{\\frac{(n-1)(n-2)}{2}}a_1a_2\\cdots a_n\\)",
    "fb": "解：按最后一列展开：最后一列只有第 \\(n\\) 行的元素 \\(a_n\\) 非零，故 \\(D_n=(-1)^{n+n}a_n\\,M=a_n M\\)，其中 \\(M\\) 是划去第 \\(n\\) 行、第 \\(n\\) 列后剩下的 \\(n-1\\) 阶次对角行列式（次对角元为 \\(a_1,a_2,\\dots,a_{n-1}\\)）。由次对角行列式公式 \\(M=(-1)^{\\frac{(n-1)(n-2)}{2}}a_1a_2\\cdots a_{n-1}\\)，故 \\[D_n=(-1)^{\\frac{(n-1)(n-2)}{2}}a_1a_2\\cdots a_n.\\]",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-mc-1",
    "ch": 1,
    "src": "jingxuan",
    "type": "mc",
    "no": 1,
    "stem": "如果 \\(D=\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix}\\)，\\(D_1=\\begin{vmatrix} 2a_{11} & 2a_{12} & 2a_{13} \\\\ 2a_{21} & 2a_{22} & 2a_{23} \\\\ 2a_{31} & 2a_{32} & 2a_{33} \\end{vmatrix}\\)，则 \\(D_1=\\) ______。",
    "options": [
      [
        "A",
        "\\(2D\\)"
      ],
      [
        "B",
        "\\(-2D\\)"
      ],
      [
        "C",
        "\\(8D\\)"
      ],
      [
        "D",
        "\\(-8D\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：将\\(D\\)的每一行（共\\(3\\)行）都乘以\\(2\\)，行列式变为原来的\\(2^3=8\\)倍，即\\(D_1=8D\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-13",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 13,
    "stem": "计算 \\(D=\\begin{vmatrix} -2 & 5 & -1 & 3 \\\\ 1 & -9 & 13 & 7 \\\\ 3 & -1 & 5 & -5 \\\\ 2 & 8 & -7 & -10 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\(312\\)",
    "fb": "解：对行列式作初等行变换化为上三角：先交换第1、2行使首元为\\(1\\)，再用第1行消去其余行第1列，继续消元得主对角元之积为\\(-312\\)，故原行列式\\(D=312\\)。故应填 \\(312\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-14",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 14,
    "stem": "计算 \\(D=\\begin{vmatrix} a_0 & 1 & 1 & \\cdots & 1 & 1 \\\\ 1 & a_1 & 0 & \\cdots & 0 & 0 \\\\ 1 & 0 & a_2 & \\cdots & 0 & 0 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ 1 & 0 & 0 & \\cdots & a_{n-1} & 0 \\\\ 1 & 0 & 0 & \\cdots & 0 & a_n \\end{vmatrix}\\)（\\(a_i\\neq 0,\\ i=1,2,\\cdots,n\\)）。",
    "options": null,
    "ans": "\\(a_1a_2\\cdots a_n\\left(a_0-\\sum_{i=1}^{n}\\frac{1}{a_i}\\right)\\)",
    "fb": "解：依次将第\\(j\\)列（\\(j=2,\\ldots,n+1\\)）的\\(-\\frac{1}{a_{j-1}}\\)倍加到第1列，则第1列除首元外全化为\\(0\\)，且首元变为\\(a_0-\\sum_{i=1}^n\\frac{1}{a_i}\\)。按第1列展开，得\\(D=a_1a_2\\cdots a_n\\left(a_0-\\sum_{i=1}^n\\frac{1}{a_i}\\right)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-15",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 15,
    "stem": "计算 \\(D=\\begin{vmatrix} 0 & a & b & a \\\\ a & 0 & a & b \\\\ b & a & 0 & a \\\\ a & b & a & 0 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\(b^2(b^2-4a^2)\\)",
    "fb": "解：将第2、4行分别减去第1、3行的适当倍数以提取公因子，或直接按第一行展开计算，得\\(D=b^2(b^2-4a^2)\\)。故应填 \\(b^2(b^2-4a^2)\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-3",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 3,
    "stem": "证明：\\[ \\begin{vmatrix} ax+by & ay+bz & az+bx \\\\ ay+bz & az+bx & ax+by \\\\ az+bx & ax+by & ay+bz \\end{vmatrix} = (a^3+b^3)\\begin{vmatrix} x & y & z \\\\ y & z & x \\\\ z & x & y \\end{vmatrix} \\]",
    "options": null,
    "ans": null,
    "fb": "左端按行列式性质 5 拆分为两个行列式之和，再分别提取公因子并化简，最后得到 \\((a^3+b^3)\\begin{vmatrix} x & y & z \\\\ y & z & x \\\\ z & x & y \\end{vmatrix}\\)，即等于右端。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-4",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 4,
    "stem": "证明：\\[ \\begin{vmatrix} a^2 & (a+1)^2 & (a+2)^2 & (a+3)^2 \\\\ b^2 & (b+1)^2 & (b+2)^2 & (b+3)^2 \\\\ c^2 & (c+1)^2 & (c+2)^2 & (c+3)^2 \\\\ d^2 & (d+1)^2 & (d+2)^2 & (d+3)^2 \\end{vmatrix} = 0 \\]",
    "options": null,
    "ans": null,
    "fb": "对列作变换 \\(c_4-c_1,c_3-c_1,c_2-c_1\\)，得到第 2 列为 \\(2a+1,2b+1,2c+1,2d+1\\)，第 3 列为 \\(4a+4,4b+4,4c+4,4d+4\\)，第 4 列为 \\(6a+9,6b+9,6c+9,6d+9\\)；再作 \\(c_3-2c_2,c_4-3c_2\\)，第 3、4 列均为 \\(2,6\\) 的常数列，即两列相同，行列式为 \\(0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-5",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 5,
    "stem": "如果 \\(n\\) 阶行列式 \\(D_n=|a_{ij}|\\) 满足 \\(a_{ij}=-a_{ji}\\)（\\(i,j=1,2,\\cdots,n\\)），则称 \\(D_n\\) 为反对称行列式。证明：奇数阶反对称行列式为零。",
    "options": null,
    "ans": null,
    "fb": "设 \\(D_n\\) 为反对称行列式，且 \\(n\\) 为奇数。由定义知 \\(a_{ii}=-a_{ii}\\)，于是 \\(a_{ii}=0\\)。对 \\(D_n\\) 转置并提取每行的公因子 \\((-1)\\)，得 \\(D_n=(-1)^nD_n=-D_n\\)，于是 \\(D_n=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-6",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 6,
    "stem": "证明元素为 \\(0,1\\) 的三阶行列式的值只能是 \\(0,\\pm 1,\\pm 2\\)。",
    "options": null,
    "ans": null,
    "fb": "设 \\(D=\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix}\\)，其中 \\(a_{ij}\\) 取值 \\(0\\) 或 \\(1\\)。若 \\(D\\) 的某一列元素全为零，则 \\(D=0\\)。否则，第一列中至少有一个非零元素，不妨设 \\(a_{11}=1\\)，当 \\(a_{21}\\) 或 \\(a_{31}\\) 不全为零时，可通过减去第一行把 \\(D\\) 化为 \\(|D|=|b_{22}b_{33}-b_{23}b_{32}|\\)，其中 \\(b_{ij}=a_{ij}\\) 或 \\(b_{ij}=a_{ij}-a_{1j}\\)，因此 \\(|b_{ij}|\\leq 1\\)，故 \\(|D|\\leq 2\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-16",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 16,
    "stem": "若 \\(\\begin{vmatrix} 1 & 0 & 2 \\\\ x & 3 & 1 \\\\ 4 & x & 5 \\end{vmatrix}\\) 中代数余子式 \\(A_{12}=-1\\)，则 \\(A_{21}=\\) ______。",
    "options": null,
    "ans": "\\(2\\)",
    "fb": "解：由\\(A_{12}=-1\\)。\\(A_{12}=(-1)^{1+2}M_{12}=-M_{12}\\)，其中\\(M_{12}=\\begin{vmatrix}x&1\\\\4&5\\end{vmatrix}=5x-4\\)，故\\(-(5x-4)=-1\\)，得\\(x=1\\)。又\\(A_{21}=(-1)^{2+1}M_{21}=-M_{21}\\)，\\(M_{21}=\\begin{vmatrix}0&2\\\\x&5\\end{vmatrix}=-2x\\)，于是\\(A_{21}=2x=2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-17",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 17,
    "stem": "设四阶行列式 \\(D_4\\) 的第三行元素为 \\(-1,0,2,4\\)。当 \\(D_4=4\\) 时，设第三行元素所对应的代数余子式分别为 \\(5,10,a,4\\)，求 \\(a\\)。",
    "options": null,
    "ans": "\\(-\\dfrac{7}{2}\\)",
    "fb": "解：由行列式按行展开定理，第三行元素与其代数余子式乘积之和等于\\(D_4\\)：\\((-1)\\cdot5+0\\cdot10+2\\cdot a+4\\cdot4=4\\)，即\\(-5+2a+16=4\\)，得\\(2a=-7\\)，\\(a=-\\frac{7}{2}\\)。故应填 \\(-\\frac{7}{2}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-18",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 18,
    "stem": "设四阶行列式 \\(D_4\\) 的第三行元素为 \\(-1,0,2,4\\)。设第四行元素对应余子式分别为 \\(5,10,a,4\\)，求 \\(a\\)。",
    "options": null,
    "ans": "\\(\\dfrac{21}{2}\\)",
    "fb": "解：由异行展开性质，第3行元素与第4行对应代数余子式乘积之和为\\(0\\)。已知第4行余子式\\(M_{41}=5,M_{42}=10,M_{43}=a,M_{44}=4\\)，代数余子式\\(A_{4k}=(-1)^{4+k}M_{4k}\\)。于是\\(-1\\cdot(-1)^5\\cdot5+0\\cdot(-1)^6\\cdot10+2\\cdot(-1)^7\\cdot a+4\\cdot(-1)^8\\cdot4=0\\)，即\\(5-2a+16=0\\)，得\\(a=\\frac{21}{2}\\)。故应填 \\(\\frac{21}{2}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-19",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 19,
    "stem": "设行列式 \\(D=\\begin{vmatrix} 3 & 0 & 4 & 0 \\\\ 2 & 2 & 2 & 2 \\\\ 0 & -7 & 0 & 0 \\\\ 5 & 3 & -2 & 2 \\end{vmatrix}\\)，求第四行各元素余子式之和。",
    "options": null,
    "ans": "\\(-28\\)",
    "fb": "解：第四行各元素余子式分别为\\(M_{41}=\\begin{vmatrix}0&4&0\\\\2&2&2\\\\-7&0&0\\end{vmatrix}=-56\\)，\\(M_{42}=\\begin{vmatrix}3&4&0\\\\2&2&2\\\\0&0&0\\end{vmatrix}=0\\)，\\(M_{43}=\\begin{vmatrix}3&0&0\\\\2&2&2\\\\0&-7&0\\end{vmatrix}=42\\)，\\(M_{44}=\\begin{vmatrix}3&0&4\\\\2&2&2\\\\0&-7&0\\end{vmatrix}=-14\\)，故和为\\(-56+0+42-14=-28\\)。故应填 \\(-28\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-20",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 20,
    "stem": "设 \\[ D_5=\\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\\\ 1 & 1 & 1 & 3 & 3 \\\\ 3 & 2 & 5 & 4 & 2 \\\\ 2 & 2 & 2 & 1 & 1 \\\\ 4 & 6 & 5 & 2 & 3 \\end{vmatrix} \\text{，}\\]求 \\(1^\\circ A_{31}+A_{32}+A_{33}\\)；\\(2^\\circ A_{34}+A_{35}\\)。",
    "options": null,
    "ans": "\\(A_{31}+A_{32}+A_{33}=0\\)，\\(A_{34}+A_{35}=0\\)",
    "fb": "解：由代数余子式性质，\\(A_{31}+A_{32}+A_{33}\\)等于把第3行换成\\((1,1,1,0,0)\\)后所得行列式的值。对该行列式作初等行变换（如第2、3行减第1行，第4、5行减第1行的倍数）可化出两行成比例，故为\\(0\\)。同理，\\(A_{34}+A_{35}\\)等于把第3行换成\\((0,0,0,1,1)\\)后的行列式，经行变换亦出现两行成比例，故亦为\\(0\\)。因此\\(A_{31}+A_{32}+A_{33}=0,\\ A_{34}+A_{35}=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-21",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 21,
    "stem": "设 \\[ D_4=\\begin{vmatrix} 1 & -1 & 2 & -1 \\\\ 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & 1 \\\\ 2 & 0 & 0 & 4 \\end{vmatrix} \\text{，}\\]求 \\(1^\\circ A_{41}+A_{42}+A_{43}+A_{44}\\)；\\(2^\\circ A_{41}+2A_{42}+3A_{43}+4A_{44}\\)。",
    "options": null,
    "ans": "\\(A_{41}+A_{42}+A_{43}+A_{44}=0\\)，\\(A_{41}+2A_{42}+3A_{43}+4A_{44}=10\\)",
    "fb": "解：由代数余子式性质，\\(A_{41}+A_{42}+A_{43}+A_{44}\\)等于把第4行换成\\((1,1,1,1)\\)后的行列式。此时第2行与第4行相同，故该行列式为\\(0\\)。而\\(A_{41}+2A_{42}+3A_{43}+4A_{44}\\)等于把第4行换成\\((1,2,3,4)\\)后的行列式\\(D''\\)。将第2、4行分别减第1行，按第1列展开，得\\(D''=\\begin{vmatrix}2&-1&2\\\\1&2&1\\\\3&1&5\\end{vmatrix}=2(10-1)+1(5-3)+2(1-6)=10\\)。故\\(A_{41}+A_{42}+A_{43}+A_{44}=0,\\ A_{41}+2A_{42}+3A_{43}+4A_{44}=10\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-mc-2",
    "ch": 1,
    "src": "jingxuan",
    "type": "mc",
    "no": 2,
    "stem": "设 \\[ D_n=\\begin{vmatrix} 1 & 1 & \\cdots & 1 \\\\ 1 & 2 & \\cdots & 2 \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & \\cdots & n \\end{vmatrix} \\text{，}\\]则 \\(D_n\\) 中所有元素的代数余子式之和为 ______。",
    "options": [
      [
        "A",
        "\\(0\\)"
      ],
      [
        "B",
        "\\(n!\\)"
      ],
      [
        "C",
        "\\(-n!\\)"
      ],
      [
        "D",
        "\\(2n!\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：所有代数余子式之和\\(S=\\sum_{i,j}A_{ij}\\)。把第\\(i\\)行换成\\((1,\\ldots,1)\\)后按该行展开，其值为\\(\\sum_j A_{ij}\\)，故\\(S=\\sum_{i=1}^n\\Delta_i\\)。对该矩阵计算各\\(\\Delta_i\\)后求和，结果为\\(n!\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-22",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 22,
    "stem": "求 \\[ D_n=\\begin{vmatrix} a & b & 0 & \\cdots & 0 & 0 \\\\ 0 & a & b & \\cdots & 0 & 0 \\\\ 0 & 0 & a & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & a & b \\\\ b & 0 & 0 & \\cdots & 0 & a \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_n=a^n+(-1)^{n+1}b^n\\)",
    "fb": "解：按第一行展开可得递推关系，逐次降阶后求得\\(D_n=a^n+(-1)^{n+1}b^n\\)。故应填 \\(a^n+(-1)^{n+1}b^n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-23",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 23,
    "stem": "求 \\[ D_n=\\begin{vmatrix} 2 & 1 & 0 & \\cdots & 0 & 0 \\\\ 1 & 2 & 1 & \\cdots & 0 & 0 \\\\ 0 & 1 & 2 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & 2 & 1 \\\\ 0 & 0 & 0 & \\cdots & 1 & 2 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_n=n+1\\)",
    "fb": "解：按第一行展开得递推\\(D_n=2D_{n-1}-D_{n-2}\\)，初值\\(D_1=2,D_2=3\\)，解得\\(D_n=n+1\\)。故应填 \\(n+1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-24",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 24,
    "stem": "求 \\[ D_4=\\begin{vmatrix} 2 & 3 & 0 & 0 \\\\ 1 & 2 & 3 & 0 \\\\ 0 & 1 & 2 & 3 \\\\ 0 & 0 & 1 & 2 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_4=-11\\)",
    "fb": "解：连续按第一行展开（或化为上三角）逐次降阶，得\\(D_4=2\\cdot\\begin{vmatrix}2&3&0\\\\1&2&3\\\\0&1&2\\end{vmatrix}-3\\cdot\\begin{vmatrix}1&3&0\\\\0&2&3\\\\0&1&2\\end{vmatrix}=-11\\)。故应填 \\(-11\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-25",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 25,
    "stem": "求 \\[ D_4=\\begin{vmatrix} a_1 & 0 & 0 & b_1 \\\\ 0 & a_2 & b_2 & 0 \\\\ 0 & b_3 & a_3 & 0 \\\\ b_4 & 0 & 0 & a_4 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_4=(a_1a_4-b_1b_4)(a_2a_3-b_2b_3)\\)",
    "fb": "解：经行列置换可化为两个二阶对角块，两个块分别为\\(\\begin{vmatrix}a_1&b_1\\\\b_4&a_4\\end{vmatrix}\\)与\\(\\begin{vmatrix}a_2&b_2\\\\b_3&a_3\\end{vmatrix}\\)，故\\(D_4=(a_1a_4-b_1b_4)(a_2a_3-b_2b_3)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-7",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 7,
    "stem": "证明 \\[ \\begin{vmatrix} x & y & z & w \\\\ a & b & c & d \\\\ d & c & b & a \\\\ w & z & y & x \\end{vmatrix}=\\begin{vmatrix} x+w & y+z \\\\ a+d & b+c \\end{vmatrix}\\begin{vmatrix} x-w & y-z \\\\ a-d & b-c \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": null,
    "fb": "记左端的行列式为 \\(D\\)。将第 1 行加第 4 行，第 1 行减第 4 行（\\(\\overset{r_1+r_4}{\\underset{r_1-r_4}{\\longleftrightarrow}}\\)）得 \\[ D=\\begin{vmatrix} x+w & y+z & z+w & w \\\\ a+d & b+c & c+d & d \\\\ 0 & 0 & b-c & a-d \\\\ 0 & 0 & y-z & x-w \\end{vmatrix} \\text{。}\\]根据拉普拉斯定理得 \\[ D=\\begin{vmatrix} x+w & y+z \\\\ a+d & b+c \\end{vmatrix}\\begin{vmatrix} b-c & a-d \\\\ y-z & x-w \\end{vmatrix}=\\begin{vmatrix} x+w & y+z \\\\ a+d & b+c \\end{vmatrix}\\begin{vmatrix} x-w & y-z \\\\ a-d & b-c \\end{vmatrix}=\\text{右端} \\text{。}\\]",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-26",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 26,
    "stem": "按行列式的定义，计算以下各 \\(n\\) 阶行列式：（1）\\[ \\begin{vmatrix} 0 & 0 & \\cdots & 0 & 1 \\\\ 0 & 0 & \\cdots & 2 & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & n-1 & \\cdots & 0 & 0 \\\\ n & 0 & \\cdots & 0 & 0 \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\(D=(-1)^{\\frac{n(n-1)}{2}}n!\\)",
    "fb": "解：这是次对角行列式（次对角元自上而下为 \\(1,2,\\dots,n\\)）。将行序整个颠倒——第 \\(1\\) 行与第 \\(n\\) 行对换、第 \\(2\\) 行与第 \\(n-1\\) 行对换……共 \\(\\lfloor n/2\\rfloor\\) 次对换，化为对角行列式，对角元之积为 \\(n!\\)。由性质 2 每次对换变号，而 \\(\\lfloor n/2\\rfloor\\) 与 \\(\\frac{n(n-1)}2\\) 同奇偶，故 \\[D=(-1)^{\\frac{n(n-1)}{2}}\\,n!\\,.\\]",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-27",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 27,
    "stem": "按行列式的定义，计算以下各 \\(n\\) 阶行列式：（2）\\[ \\begin{vmatrix} 0 & 1 & 0 & \\cdots & 0 \\\\ 0 & 0 & 2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & 0 & \\cdots & n-1 \\\\ n & 0 & 0 & \\cdots & 0 \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\(D=(-1)^{n-1}n!\\)",
    "fb": "解：按第一列展开：第一列只有第 \\(n\\) 行的元素 \\(n\\) 非零，得 \\(D=(-1)^{n+1}\\,n\\cdot M\\)，其中 \\(M\\) 是划去第 \\(n\\) 行、第 \\(1\\) 列后的 \\(n-1\\) 阶行列式——它是上三角行列式，对角元为 \\(1,2,\\dots,n-1\\)，故 \\(M=(n-1)!\\)。所以 \\[D=(-1)^{n-1}\\,n!\\,.\\]",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-28",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 28,
    "stem": "按行列式的定义，计算以下各 \\(n\\) 阶行列式：（3）\\[ \\begin{vmatrix} 0 & 0 & \\cdots & 0 & 1 & 0 \\\\ 0 & 0 & \\cdots & 2 & 0 & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots & \\vdots \\\\ n-1 & 0 & \\cdots & 0 & 0 & 0 \\\\ 0 & 0 & \\cdots & 0 & 0 & n \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\(D=(-1)^{\\frac{(n-1)(n-2)}{2}}n!\\)",
    "fb": "解：按最后一列展开：最后一列只有第 \\(n\\) 行的元素 \\(n\\) 非零，得 \\(D=n\\cdot M\\)（符号为 \\((-1)^{n+n}=+1\\)），其中 \\(M\\) 是 \\(n-1\\) 阶次对角行列式（次对角元为 \\(1,2,\\dots,n-1\\)）。由次对角行列式公式 \\(M=(-1)^{\\frac{(n-1)(n-2)}{2}}(n-1)!\\)，故 \\[D=(-1)^{\\frac{(n-1)(n-2)}{2}}\\,n!\\,.\\]",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-29",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 29,
    "stem": "设 \\[ D=\\begin{vmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{vmatrix}=d \\text{，}\\]求下列 \\(n\\) 阶行列式的值：\\[ D_1=\\begin{vmatrix} a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\\\ a_{11} & a_{12} & \\cdots & a_{1n} \\end{vmatrix},\\quad D_2=\\begin{vmatrix} a_{n1} & a_{n2} & \\cdots & a_{nn} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ a_{11} & a_{12} & \\cdots & a_{1n} \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_1=(-1)^{n-1}d\\)，\\(D_2=(-1)^{\\frac{n(n-1)}{2}}d\\)",
    "fb": "解：\\(D_1\\)由\\(D\\)将第1行移到底部得到，相当于作\\(n-1\\)次相邻行交换，故\\(D_1=(-1)^{n-1}d\\)。\\(D_2\\)为将\\(D\\)的行全部倒序，需作\\(\\frac{n(n-1)}{2}\\)次相邻行交换，故\\(D_2=(-1)^{\\frac{n(n-1)}{2}}d\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-30",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 30,
    "stem": "计算 \\[ \\begin{vmatrix} 1 & 2 & 3 & \\cdots & n \\\\ -1 & 0 & 3 & \\cdots & n \\\\ -1 & -2 & 0 & \\cdots & n \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ -1 & -2 & -3 & \\cdots & 0 \\end{vmatrix} \\] 的值。",
    "options": null,
    "ans": "\\(n!\\)",
    "fb": "解：把第2至第\\(n\\)行分别加到第1行，第1行各元化为\\(\\frac{n(n+1)}{2}\\)；再将第1行乘以适当倍数消去其余行第1列，继续降阶可得范德蒙型，最终\\(D=n!\\)。故应填 \\(n!\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-31",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 31,
    "stem": "计算 \\[ \\begin{vmatrix} x+a_1 & a_2 & a_3 & \\cdots & a_n \\\\ a_1 & x+a_2 & a_3 & \\cdots & a_n \\\\ a_1 & a_2 & x+a_3 & \\cdots & a_n \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ a_1 & a_2 & a_3 & \\cdots & x+a_n \\end{vmatrix} \\] 的值。",
    "options": null,
    "ans": "\\(x^{n-1}\\left(x+\\sum\\limits_{i=1}^{n}a_i\\right)\\)",
    "fb": "解：将第1列乘\\(-1\\)加到其余各列，再按第1列展开，提取因子后可得爪形行列式，化简结果为\\(D=x^{n-1}\\left(x+\\sum_{i=1}^n a_i\\right)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-32",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 32,
    "stem": "计算 \\(n\\) 阶行列式 \\[ D_n=\\begin{vmatrix} a & b & b & \\cdots & b \\\\ b & a & b & \\cdots & b \\\\ b & b & a & \\cdots & b \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ b & b & b & \\cdots & a \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_n=[a+(n-1)b](a-b)^{n-1}\\)",
    "fb": "解：将各列都加到第1列，提出公因子\\(a+(n-1)b\\)；再把第1行乘\\(-b\\)加到其余各行，化为上三角，主对角元均为\\(a-b\\)，故\\(D_n=[a+(n-1)b](a-b)^{n-1}\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-33",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 33,
    "stem": "计算 \\[ D=\\begin{vmatrix} 1 & -1 & 1 & x-1 \\\\ 1 & -1 & x+1 & -1 \\\\ 1 & x-1 & 1 & -1 \\\\ x+1 & -1 & 1 & -1 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D=x^4\\)",
    "fb": "解：将第2、3、4列都加到第1列，第1列各元均为\\(x\\)，提出\\(x\\)；再把第1行的适当倍数消去其余行第1列，化为上三角且主对角元均为\\(x\\)，得\\(D=x^4\\)。故应填 \\(x^4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-34",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 34,
    "stem": "设 \\(abcd=1\\)，计算 \\[ D=\\begin{vmatrix} a^2+\\frac{1}{a^2} & a & \\frac{1}{a} & 1 \\\\ b^2+\\frac{1}{b^2} & b & \\frac{1}{b} & 1 \\\\ c^2+\\frac{1}{c^2} & c & \\frac{1}{c} & 1 \\\\ d^2+\\frac{1}{d^2} & d & \\frac{1}{d} & 1 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D=0\\)",
    "fb": "解：由\\(abcd=1\\)，可将第1列写成与后三列相关的形式（如把第1列减去第2列与第3列、第4列的适当线性组合），使出现两列成比例或列向量线性相关，故行列式为\\(0\\)。故应填 \\(0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-35",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 35,
    "stem": "计算 \\[ D=\\begin{vmatrix} x_1+1 & x_1+2 & \\cdots & x_1+n \\\\ x_2+1 & x_2+2 & \\cdots & x_2+n \\\\ \\vdots & \\vdots & & \\vdots \\\\ x_n+1 & x_n+2 & \\cdots & x_n+n \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D=0\\)",
    "fb": "解：第\\(i\\)行可写作\\(x_i(1,1,\\ldots,1)+(1,2,\\ldots,n)\\)，各行均属于二维子空间，故行向量线性相关，当\\(n\\ge3\\)时\\(D=0\\)。故应填 \\(0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-36",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 36,
    "stem": "计算 \\[ D_5=\\begin{vmatrix} 1-a & a & 0 & 0 & 0 \\\\ -1 & 1-a & a & 0 & 0 \\\\ 0 & -1 & 1-a & a & 0 \\\\ 0 & 0 & -1 & 1-a & a \\\\ 0 & 0 & 0 & -1 & 1-a \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_5=1-a+a^2-a^3+a^4-a^5\\)",
    "fb": "解：按第一列展开可得递推\\(D_n=(1-a)D_{n-1}+aD_{n-2}\\)（辅以初值），逐次求得\\(D_5=1-a+a^2-a^3+a^4-a^5\\)。故应填 \\(1-a+a^2-a^3+a^4-a^5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-37",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 37,
    "stem": "计算 \\[ D_n=\\begin{vmatrix} a+\\beta & a\\beta & 0 & 0 & \\cdots & 0 & 0 \\\\ 1 & a+\\beta & a\\beta & 0 & \\cdots & 0 & 0 \\\\ 0 & 1 & a+\\beta & a\\beta & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & 0 & \\cdots & a+\\beta & a\\beta \\\\ 0 & 0 & 0 & 0 & \\cdots & 1 & a+\\beta \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_n=\\begin{cases}\\dfrac{a^{n+1}-\\beta^{n+1}}{a-\\beta}, & a\\neq\\beta \\\\ (n+1)a^n, & a=\\beta\\end{cases}\\)",
    "fb": "解：按第一列展开得二阶线性递推\\(D_n=(\\alpha+\\beta)D_{n-1}-\\alpha\\beta D_{n-2}\\)，特征根为\\(\\alpha,\\beta\\)。当\\(\\alpha\\neq\\beta\\)时\\(D_n=\\frac{\\alpha^{n+1}-\\beta^{n+1}}{\\alpha-\\beta}\\)；当\\(\\alpha=\\beta\\)时\\(D_n=(n+1)\\alpha^n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-38",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 38,
    "stem": "计算 \\[ D_n=\\begin{vmatrix} x & -1 & 0 & \\cdots & 0 & 0 \\\\ 0 & x & -1 & \\cdots & 0 & 0 \\\\ 0 & 0 & x & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & x & -1 \\\\ a_n & a_{n-1} & a_{n-2} & \\cdots & a_2 & x+a_1 \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D_n=x^n+a_1x^{n-1}+a_2x^{n-2}+\\cdots+a_{n-1}x+a_n\\)",
    "fb": "解：按最后一行展开（或自下逐列展开），所得多项式恰为\\(D_n=x^n+a_1x^{n-1}+a_2x^{n-2}+\\cdots+a_{n-1}x+a_n\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-39",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 39,
    "stem": "计算 \\[ D=\\begin{vmatrix} 1+x & 1 & 1 & 1 \\\\ 1 & 1-x & 1 & 1 \\\\ 1 & 1 & 1+y & 1 \\\\ 1 & 1 & 1 & 1-y \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D=x^2y^2\\)",
    "fb": "解：把第2、3、4行分别减去第1行，得\\(\\begin{vmatrix}1+x&1&1&1\\\\-x&-x&0&0\\\\0&0&y&0\\\\0&0&0&-y\\end{vmatrix}\\)，按后两行展开提取因子\\(y\\cdot(-y)\\)及\\(x^2\\)，得\\(D=x^2y^2\\)。故应填 \\(x^2y^2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-40",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 40,
    "stem": "计算 \\[ D=\\begin{vmatrix} a+b+2c & a & b \\\\ c & b+c+2a & b \\\\ c & a & c+a+2b \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\(D=2(a+b+c)^3\\)",
    "fb": "解：把第2、3列加到第1列，得第1列各元均为\\(2(a+b+c)\\)，提出\\(2(a+b+c)\\)；再把第1行分别减第2、3行，化为上三角\\(\\begin{vmatrix}1&a&b\\\\0&a+b+c&0\\\\0&0&a+b+c\\end{vmatrix}\\)，得\\(D=2(a+b+c)^3\\)。故应填 \\(2(a+b+c)^3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-8",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 8,
    "stem": "设 \\(a, b, c\\) 互不相同，\\(D=\\begin{vmatrix} a & b & c \\\\ a^2 & b^2 & c^2 \\\\ b+c & c+a & a+b \\end{vmatrix}\\)，则 \\(D=0\\) 的充要条件是 \\(a+b+c=0\\)。",
    "options": null,
    "ans": null,
    "fb": "将 \\(D\\) 的第一行加到第三行后调整行的顺序，得 \\[ D=(a+b+c)\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix} \\text{。}\\]因为 \\(a, b, c\\) 互异，所以，\\(D=0\\) 的充要条件是 \\(a+b+c=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-42",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 42,
    "stem": "计算 \\( D_n=\\begin{vmatrix} x_1+1 & x_2+1 & \\cdots & x_n+1 \\\\ x_1^2+x_1 & x_2^2+x_2 & \\cdots & x_n^2+x_n \\\\ \\vdots & \\vdots & & \\vdots \\\\ x_1^n+x_1^{n-1} & x_2^n+x_2^{n-1} & \\cdots & x_n^n+x_n^{n-2} \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\( D_n=\\prod_{n\\geq i>j\\geq 1}(x_i-x_j)\\)",
    "fb": "解：每行提取公因子\\(x_i+1\\)后化为范德蒙行列式，即\\(D_n=(x_1+1)\\cdots(x_n+1)\\prod_{1\\le j<i\\le n}(x_i-x_j)\\)；按本题结构（各列为\\(x_j^{i-1}(x_j+1)\\)）整理后即得范德蒙行列式\\(D_n=\\prod_{n\\ge i>j\\ge1}(x_i-x_j)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-proof-9",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 9,
    "stem": "用数学归纳法证明 \\( D_n=\\begin{vmatrix} a & b & b & \\cdots & b & b \\\\ c & a & b & \\cdots & b & b \\\\ c & c & a & \\cdots & \\cdots & \\cdots \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ c & c & c & \\cdots & a & b \\\\ c & c & c & \\cdots & c & a \\end{vmatrix}=\\frac{c(a-b)^{n}-b(a-c)^{n}}{c-b}(c\\neq b)\\)。",
    "options": null,
    "ans": null,
    "fb": "将各列减去第一列后按第一列展开，利用递推关系和数学归纳法可证。当\\(n=1\\)时，\\(D_1=a=\\frac{c(a-b)-b(a-c)}{c-b}\\)成立；当\\(n=2\\)时，\\(D_2=a^2-bc=\\frac{c(a-b)^2-b(a-c)^2}{c-b}\\)成立；假设\\(n=k-1\\)时结论成立，则由递推关系可得\\(n=k\\)时也成立。",
    "pts": 8,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-43",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 43,
    "stem": "计算 \\( D=\\begin{vmatrix} 1 & 1 & 2 & 3 \\\\ 1 & 2-x^2 & 2 & 3 \\\\ 2 & 3 & 1 & 5 \\\\ 2 & 3 & 1 & 9-x^2 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\( D=-3(x-1)(x+1)(x-2)(x+2)\\)",
    "fb": "解：将第1列减第2列、第3行减第4行等作差，提取公因子后可化为关于\\(x^2\\)的二次式，分解得\\(D=-3(x^2-1)(x^2-4)=-3(x-1)(x+1)(x-2)(x+2)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-10",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 10,
    "stem": "证明 \\( D=\\begin{vmatrix} x_1 & a & \\cdots & a \\\\ b & x_2 & \\cdots & a \\\\ \\vdots & \\vdots & & \\vdots \\\\ b & b & \\cdots & x_n \\end{vmatrix}=\\frac{af(b)-bf(a)}{a-b}\\)，其中\\(f(x)=(x_1-x)(x_2-x)\\cdots(x_n-x)(a\\neq b)\\)。",
    "options": null,
    "ans": null,
    "fb": "令\\(D(x)=\\begin{vmatrix} x_1+x & a+x & \\cdots & a+x \\\\ b+x & x_2+x & \\cdots & a+x \\\\ \\vdots & \\vdots & & \\vdots \\\\ b+x & b+x & \\cdots & x_n+x \\end{vmatrix}\\)，可见\\(D(-a)=f(a),D(-b)=f(b)\\)。由行列式定义知\\(D(x)\\)是关于\\(x\\)的一次多项式，因此设\\(D(x)=cx+d\\)，其中\\(c,d\\)为待定常数。又知\\(d=D(0)=D\\)，故由\\(\\begin{cases}D(-a)=-ca+D=f(a),\\\\D(-b)=-cb+D=f(b)\\end{cases}\\)得\\(D=\\frac{af(b)-bf(a)}{a-b}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-44",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 44,
    "stem": "用克莱姆法则求下列方程组的解： \\[\\begin{cases} x_1-3x_2+4x_4=-5, \\\\ x_1-2x_2+3x_3=-4, \\\\ 3x_1+2x_2-5x_4=12, \\\\ 4x_1+3x_2-5x_3=5. \\end{cases}\\]",
    "options": null,
    "ans": "\\( x_1=1,x_2=2,x_3=1,x_4=-1\\)",
    "fb": "解：用克拉默法则，系数行列式\\(D\\neq0\\)。依次计算\\(D_1,D_2,D_3,D_4\\)（分别将第1、2、3、4列换为常数列），得\\(x_1=1,x_2=2,x_3=1,x_4=-1\\)。故应填 \\(x_1=1,x_2=2,x_3=1,x_4=-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-45",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 45,
    "stem": "解线性方程组： \\[\\begin{cases} x_1+2x_2+3x_3+4x_4=1, \\\\ 3x_1-x_2-x_3=1, \\\\ x_1+x_2+2x_4=-1, \\\\ x_1+2x_2-5x_4=10. \\end{cases}\\]",
    "options": null,
    "ans": "\\( x_1=2,x_2=2,x_3=0,x_4=-1\\)",
    "fb": "解：用克拉默法则，计算系数行列式及各\\(D_k\\)（将第\\(k\\)列换为常数列），得\\(x_1=2,x_2=2,x_3=0,x_4=-1\\)。故应填 \\(x_1=2,x_2=2,x_3=0,x_4=-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-46",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 46,
    "stem": "解下列线性方程组： \\[\\begin{cases} x_1+a_1x_2+a_1^2x_3+\\cdots+a_1^{n-1}x_n=1, \\\\ x_1+a_2x_2+a_2^2x_3+\\cdots+a_2^{n-1}x_n=1, \\\\ \\cdots\\cdots\\cdots\\cdots \\\\ x_1+a_nx_2+a_n^2x_3+\\cdots+a_n^{n-1}x_n=1, \\end{cases}\\] 其中\\(a_i\\neq a_j(i\\neq j,i,j=1,2,\\cdots,n)\\)。",
    "options": null,
    "ans": "\\( x_1=1,x_2=x_3=\\cdots=x_n=0\\)",
    "fb": "解：系数矩阵为范德蒙矩阵，方程组等价于求次数不超过\\(n-1\\)的多项式在\\(a_i\\)处取值均为\\(1\\)，唯一解为常值多项式\\(p(t)=1\\)，故\\(x_1=1,x_2=x_3=\\cdots=x_n=0\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-47",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 47,
    "stem": "已知齐次线性方程组 \\[\\begin{cases} (3-\\lambda)x_1+x_2+x_3=0, \\\\ (2-\\lambda)x_2-x_3=0, \\\\ 4x_1-2x_2+(1-\\lambda)x_3=0 \\end{cases}\\] 有非零解，求\\(\\lambda\\)的值。",
    "options": null,
    "ans": "\\( \\lambda=3\\text{ 或 }4\\text{ 或 }-1\\)",
    "fb": "解：齐次方程组有非零解当且仅当系数行列式为零。计算\\(\\begin{vmatrix}3-\\lambda&1&1\\\\0&2-\\lambda&-1\\\\4&-2&1-\\lambda\\end{vmatrix}=0\\)，展开得\\((\\lambda-3)(\\lambda-4)(\\lambda+1)=0\\)，故\\(\\lambda=3,4,-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-jx-fill-48",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 48,
    "stem": "如果齐次线性方程组 \\[\\begin{cases} \\lambda x_1+x_2+x_3=0, \\\\ x_1+\\lambda x_2+x_3=0, \\\\ x_1+x_2+\\lambda x_3=0 \\end{cases}\\] 有非零解，试求\\(\\lambda\\)。",
    "options": null,
    "ans": "\\( \\lambda=-2\\text{ 或 }\\lambda=1\\)",
    "fb": "解：系数行列式\\(\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=(\\lambda-1)^2(\\lambda+2)=0\\)，故\\(\\lambda=1\\)或\\(\\lambda=-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-jx-fill-49",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 49,
    "stem": "若 \\( \\begin{vmatrix} \\lambda-3 & -2 & 2 \\\\ k & \\lambda+1 & -k \\\\ -4 & -2 & \\lambda+3 \\end{vmatrix}=0\\)，则\\(\\lambda=\\)______。",
    "options": null,
    "ans": "\\( 1,-1,-1\\)",
    "fb": "解：计算行列式\\(\\begin{vmatrix}\\lambda-3&-2&2\\\\k&\\lambda+1&-k\\\\-4&-2&\\lambda+3\\end{vmatrix}=0\\)，展开化简得\\((\\lambda-1)(\\lambda+1)^2=0\\)，故\\(\\lambda=1,-1,-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-50",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 50,
    "stem": "若 \\( \\begin{vmatrix} \\lambda-a & -1 & -1 \\\\ -1 & \\lambda-a & 1 \\\\ -1 & 1 & \\lambda-a \\end{vmatrix}=0\\)，则\\(\\lambda=\\)______。",
    "options": null,
    "ans": "\\( a+1,a+1,a-2\\)",
    "fb": "解：令\\(t=\\lambda-a\\)，则行列式为\\(\\begin{vmatrix}t&-1&-1\\\\-1&t&1\\\\-1&1&t\\end{vmatrix}=t^3-3t+2=(t-1)^2(t+2)=0\\)，故\\(t=1\\)（二重）或\\(t=-2\\)，即\\(\\lambda=a+1,a+1,a-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-51",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 51,
    "stem": "计算行列式 \\( \\begin{vmatrix} 1 & 2 & 3 & \\cdots & n \\\\ 1 & x+1 & 3 & \\cdots & n \\\\ 1 & 2 & x+1 & \\cdots & n \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 1 & 2 & 3 & \\cdots & x+1 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\( (x-1)(x-2)\\cdots(x-n+1)\\)",
    "fb": "解：将第2至第\\(n\\)行分别减去第1行，可在各列提取公因子\\((x-1),(x-2),\\ldots,(x-(n-1))\\)，化为范德蒙行列式，得\\(D=(x-1)(x-2)\\cdots(x-n+1)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-52",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 52,
    "stem": "计算 \\( D_n=\\begin{vmatrix} -a_1 & 0 & 0 & \\cdots & 0 & 0 \\\\ 0 & -a_2 & a_2 & 0 & \\cdots & 0 \\\\ 0 & 0 & -a_3 & a_3 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & -a_{n-1} & a_{n-1} \\\\ 1 & 1 & 1 & \\cdots & 1 & 1 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "\\( (-1)^{n-1}na_1a_2\\cdots a_{n-1}\\)",
    "fb": "解：按最后一行展开，最后一行除全\\(1\\)外，上方各行构成下三角块，经计算得出\\(D_n=(-1)^{n-1}n\\,a_1a_2\\cdots a_{n-1}\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-53",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 53,
    "stem": "计算以下\\(n+1\\)阶行列式： \\[ D_{n+1}=\\begin{vmatrix} x & a_1 & a_2 & \\cdots & a_{n-1} & 1 \\\\ a_1 & x & a_2 & \\cdots & a_{n-1} & 1 \\\\ a_1 & a_2 & x & \\cdots & a_{n-1} & 1 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_1 & a_2 & a_3 & \\cdots & x & 1 \\\\ a_1 & a_2 & a_3 & \\cdots & a_n & 1 \\end{vmatrix}",
    "options": null,
    "ans": "\\( (x-a_1)(x-a_2)\\cdots(x-a_n)\\)",
    "fb": "解：将第1列减第2列、第2列减第3列……依次作差，可提取因子\\((x-a_1),(x-a_2),\\ldots,(x-a_n)\\)，故\\(D_{n+1}=(x-a_1)(x-a_2)\\cdots(x-a_n)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-54",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 54,
    "stem": "计算以下\\(n+1\\)阶行列式： \\[ D_{n+1}=\\begin{vmatrix} a & ax & ax^2 & \\cdots & ax^{n-1} & ax^n \\\\ -1 & a & ax & \\cdots & ax^{n-2} & ax^{n-1} \\\\ 0 & -1 & a & \\cdots & ax^{n-3} & ax^{n-2} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & a & ax \\\\ 0 & 0 & 0 & \\cdots & -1 & a+x \\end{vmatrix} \\]",
    "options": null,
    "ans": "\\( a(a+x)^n\\)",
    "fb": "解：按第一列展开可得递推，或直接观察其为加边行列式，化简后得\\(D_{n+1}=a(a+x)^n\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-55",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 55,
    "stem": "计算以下\\(n+1\\)阶行列式： \\[ D_{n+1}=\\begin{vmatrix} 1 & x & x^2 & \\cdots & x^{n-1} & x^n \\\\ a_{11} & 1 & x & \\cdots & x^{n-2} & x^{n-1} \\\\ a_{21} & a_{22} & 1 & \\cdots & x^{n-3} & x^{n-2} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_{n-1,1} & a_{n-1,2} & a_{n-1,3} & \\cdots & 1 & x \\\\ a_{n1} & a_{n2} & a_{n3} & \\cdots & a_{nn} & 1 \\end{vmatrix}",
    "options": null,
    "ans": "\\( \\prod_{i=1}^{n}(1-a_ix)\\)",
    "fb": "解：将第2至第\\(n+1\\)列分别减去第1列乘相应常数作列消元，化为下三角行列式，主对角元为\\(1-a_1x,1-a_2x,\\ldots,1-a_nx\\)，故\\(D_{n+1}=\\prod_{i=1}^n(1-a_ix)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-56",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 56,
    "stem": "计算\\(n\\)阶行列式\\(D_n=|a_{ij}|\\)，其中\\(a_{ij}=|i-j|\\;(i,j=1,2,\\cdots,n)\\)。",
    "options": null,
    "ans": "\\( (-1)^{n-1}(n-1)2^{n-2}\\)",
    "fb": "解：对矩阵\\(a_{ij}=|i-j|\\)作相邻行相减，化为三对角行列式并递推求得\\(D_n=(-1)^{n-1}(n-1)2^{n-2}\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-57",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 57,
    "stem": "计算行列式 \\( \\begin{vmatrix} 1 & 2 & 3 & \\cdots & n \\\\ 2 & 3 & 4 & \\cdots & 1 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ n-1 & n & 1 & \\cdots & n-2 \\\\ n & 1 & 2 & \\cdots & n-1 \\end{vmatrix}\\)。",
    "options": null,
    "ans": "见解答过程",
    "fb": "解：该行列式为循环行列式，第1行为\\((1,2,\\ldots,n)\\)。将各列加到第1列提取公因子\\(\\frac{n(n+1)}{2}\\)，再作初等变换降阶可得递推式并求得其值（具体数值随\\(n\\)而定，详见解答过程）。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-58",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 58,
    "stem": "计算\\(2n\\)阶行列式 \\[D_{2n}=\\begin{vmatrix} a & & & & & b \\\\ & \\ddots & & & \\ddots \\\\ & & a & b & & \\\\ & & c & d & & \\\\ & \\ddots & & & \\ddots \\\\ c & & & & & d \\end{vmatrix}.\\]",
    "options": null,
    "ans": "(ad-bc)^n",
    "fb": "解：按第一行展开，该\\(2n\\)阶行列式可分解为\\(n\\)个相同的二阶块结构，每块行列式为\\(ad-bc\\)，故\\(D_{2n}=(ad-bc)^n\\)。故应填 \\((ad-bc)^n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-59",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 59,
    "stem": "计算\\(2n\\)阶行列式： \\[D_{2n}=\\begin{vmatrix} a+b & & & & & a-b \\\\ & a+b & & & a-b & \\\\ & & \\ddots & & \\ddots & \\\\ & & & a+b & a-b & \\\\ & & & a-b & a+b & \\\\ a-b & & & & & a+b \\end{vmatrix}.\\]",
    "options": null,
    "ans": "(4ab)^n",
    "fb": "解：每个二阶块\\(\\begin{vmatrix}a+b&a-b\\\\a-b&a+b\\end{vmatrix}=(a+b)^2-(a-b)^2=4ab\\)，整个\\(2n\\)阶行列式由\\(n\\)个这样的块结构组成，故\\(D_{2n}=(4ab)^n\\)。故应填 \\((4ab)^n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-60",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 60,
    "stem": "计算\\(n(n\\geqslant 2)\\)阶行列式 \\[D_n=\\begin{vmatrix} 1 & 2 & 3 & \\cdots & n \\\\ n+1 & n+2 & n+3 & \\cdots & 2n \\\\ 2n+1 & 2n+2 & 2n+3 & \\cdots & 3n \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ (n-1)n+1 & (n-1)n+2 & (n-1)n+3 & \\cdots & n^2 \\end{vmatrix}.\\]",
    "options": null,
    "ans": "\\text{当 }n=2\\text{ 时 },D_2=-2;\\text{ 当 }n\\geqslant 3\\text{ 时 },D_n=0",
    "fb": "解：各行后项与前项之差均为\\(n\\)，故第\\(2\\)行起每行均可写成第1行加常数倍\\((n,n,\\ldots,n)\\)。当\\(n\\ge3\\)时行向量线性相关，\\(D_n=0\\)；\\(n=2\\)时\\(D_2=\\begin{vmatrix}1&2\\\\3&4\\end{vmatrix}=-2\\)。故应填：当\\(n=2\\)时\\(D_2=-2\\)，当\\(n\\ge3\\)时\\(D_n=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-61",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 61,
    "stem": "计算 \\[D_n=\\begin{vmatrix} 1+x_1y_1 & 1+x_1y_2 & \\cdots & 1+x_1y_n \\\\ 1+x_2y_1 & 1+x_2y_2 & \\cdots & 1+x_2y_n \\\\\\vdots & \\vdots & \\vdots & \\vdots\\\\ 1+x_ny_1 & 1+x_ny_2 & \\cdots & 1+x_ny_n \\end{vmatrix}.\\]",
    "options": null,
    "ans": "\\text{当 }n=2\\text{ 时 },D_2=(x_2-x_1)(y_2-y_1);\\text{ 当 }n\\geqslant 3\\text{ 时 },D_n=0",
    "fb": "解：矩阵元素\\(1+x_iy_j=\\mathbf{1}\\mathbf{1}^T+\\mathbf{x}\\mathbf{y}^T\\)，秩至多\\(2\\)，故当\\(n\\ge3\\)时\\(D_n=0\\)；\\(n=2\\)时直接展开得\\((x_2-x_1)(y_2-y_1)\\)。故应填：当\\(n=2\\)时\\(D_2=(x_2-x_1)(y_2-y_1)\\)，当\\(n\\ge3\\)时\\(D_n=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-fill-62",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 62,
    "stem": "求五阶行列式的值： \\[D_5=\\begin{vmatrix} a & b & 0 & 0 & 0 \\\\ c & a & b & 0 & 0 \\\\ 0 & c & a & b & 0 \\\\ 0 & 0 & c & a & b \\\\ 0 & 0 & 0 & c & a \\end{vmatrix}.\\]",
    "options": null,
    "ans": "a^5-4a^3bc+3ab^2c^2",
    "fb": "解：按第一行展开得递推\\(D_5=aD_4-bcD_3\\)，逐次降阶计算可得\\(D_5=a^5-4a^3bc+3ab^2c^2\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-63",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 63,
    "stem": "计算行列式 \\[D_4=\\begin{vmatrix} a_1^3 & a_2^3 & a_3^3 & a_4^3 \\\\ a_1^2b_1 & a_2^2b_2 & a_3^2b_3 & a_4^2b_4 \\\\ a_1b_1^2 & a_2b_2^2 & a_3b_3^2 & a_4b_4^2 \\\\ b_1^3 & b_2^3 & b_3^3 & b_4^3 \\end{vmatrix},\\quad a_i\\neq 0(i=1,2,3,4).\\]",
    "options": null,
    "ans": "a_1^3a_2^3a_3^3a_4^3\\prod_{1\\leq i<j\\leq 4}(a_ib_j-a_jb_i)",
    "fb": "解：第\\(i\\)行提取公因式\\(a_i^3\\)，令\\(t_i=b_i/a_i\\)，则行列式化为\\(a_1^3a_2^3a_3^3a_4^3\\begin{vmatrix}1&t_1&t_1^2&t_1^3\\\\1&t_2&t_2^2&t_2^3\\\\1&t_3&t_3^2&t_3^3\\\\1&t_4&t_4^2&t_4^3\\end{vmatrix}=a_1^3a_2^3a_3^3a_4^3\\prod_{1\\le i<j\\le4}(t_j-t_i)\\)，整理即得\\(a_1^3a_2^3a_3^3a_4^3\\prod_{1\\le i<j\\le4}(a_ib_j-a_jb_i)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-64",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 64,
    "stem": "利用范德蒙行列式计算 \\[(1)\\quad D_{n+1}=\\begin{vmatrix} a^n & (a-1)^n & \\cdots & (a-n)^n \\\\ a^{n-1} & (a-1)^{n-1} & \\cdots & (a-n)^{n-1} \\\\\\vdots & \\vdots & \\vdots & \\vdots\\\\ a & a-1 & \\cdots & a-n \\\\ 1 & 1 & \\cdots & 1 \\end{vmatrix}.\\]",
    "options": null,
    "ans": "(-1)^{\\frac{n(n+1)}{2}}\\prod_{k=1}^n k!",
    "fb": "解：这是范德蒙行列式的转置形式，将各列按幂次整理后化为标准范德蒙，并出现因子\\(\\prod_{k=1}^n k!\\)，符号因子为\\((-1)^{\\frac{n(n+1)}{2}}\\)，故\\(D_{n+1}=(-1)^{\\frac{n(n+1)}{2}}\\prod_{k=1}^n k!\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-65",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 65,
    "stem": "利用范德蒙行列式计算 \\[(2)\\quad D_n=\\begin{vmatrix} 1 & 1 & 1 & \\cdots & 1 \\\\ x_1 & x_2 & x_3 & \\cdots & x_n \\\\ x_1^2 & x_2^2 & x_3^2 & \\cdots & x_n^2 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & \\cdots & x_n^{n-1} \\end{vmatrix}.\\]",
    "options": null,
    "ans": "\\prod_{1\\leq j<i\\leq n}(x_i-x_j)",
    "fb": "解：这是标准范德蒙行列式，直接由定义得\\(D_n=\\prod_{1\\le j<i\\le n}(x_i-x_j)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s13"
  },
  {
    "id": "c1-jx-fill-66",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 66,
    "stem": "计算\\(n\\)阶行列式 \\[D_n=\\begin{vmatrix} 1+a_1 & 1 & \\cdots & 1 \\\\ 1 & 1+a_2 & \\cdots & 1 \\\\\\vdots & \\vdots & \\vdots & \\vdots\\\\ 1 & 1 & \\cdots & 1+a_n \\end{vmatrix},\\] 其中\\(a_1a_2\\cdots a_n\\neq 0\\)。",
    "options": null,
    "ans": "a_1a_2\\cdots a_n\\left(1+\\sum_{i=1}^n\\frac{1}{a_i}\\right)",
    "fb": "解：把第1行乘\\(-1\\)加到其余各行，再提取第\\(i\\)行的因子\\(a_i\\)，作列消元化为上三角，得\\(D_n=a_1a_2\\cdots a_n\\left(1+\\sum_{i=1}^n\\frac{1}{a_i}\\right)\\)。故应填该式。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-proof-11",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 11,
    "stem": "证明 \\[\\begin{vmatrix} 1 & 1 & 1 & \\cdots & 1 \\\\ 1 & C_2^1 & C_3^1 & \\cdots & C_n^1 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ 1 & C_2^{n-1} & C_3^{n-1} & \\cdots & C_n^{n-1} \\end{vmatrix}=1.\\]",
    "options": null,
    "ans": null,
    "fb": "左边=\\(\\begin{vmatrix} 1 & 1 & 1 & \\cdots & 1 \\\\ 1 & C_2^1 & C_3^1 & \\cdots & C_n^1 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ 1 & C_2^{n-1} & C_3^{n-1} & \\cdots & C_n^{n-1} \\end{vmatrix}\\)。从最后一行开始依次减去前面一行，再利用组合公式\\(C_k^j-C_{k-1}^j=C_{k-1}^{j-1}\\)，递渐化简行列式，最终化为上三角行列式，其对角线元素全为1，故行列式值为1。",
    "pts": 8,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-proof-13",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 13,
    "stem": "已知\\(a^i\\neq b^i\\)，试证方程组（题目在本页末尾截断，仅显示开头）",
    "options": null,
    "ans": null,
    "fb": "题目在当前页面截断，完整内容需查看后续页面。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-calc-1",
    "ch": 1,
    "src": "jingxuan",
    "type": "calc",
    "no": 1,
    "stem": "线性方程组 \\[ \\begin{cases} x_1+x_2+x_3+x_4=1, \\\\ a_1x_1+a_2x_2+a_3x_3+a_4x_4=b, \\\\ a_1^2x_1+a_2^2x_2+a_3^2x_3+a_4^2x_4=b^2, \\\\ a_1^3x_1+a_2^3x_2+a_3^3x_3+a_4^3x_4=b^3 \\end{cases} \\] 有唯一解的条件是什么？并求唯一解。",
    "options": null,
    "ans": null,
    "fb": "方程组的系数行列式为 Vandermonde 行列式 \\( D=(a_4-a_1)(a_4-a_2)(a_4-a_3)(a_3-a_1)(a_3-a_2)(a_2-a_1) \\)。由克莱姆法则，当 \\( D\\neq 0 \\) 即 \\( a_i\\neq a_j \\)（\\( i\\neq j \\)）时方程组有唯一解。再用克莱姆法则分别以 \\( (1,b,b^2,b^3)^T \\) 替换各列得到 \\( x_1,x_2,x_3,x_4 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s14"
  },
  {
    "id": "c1-jx-mc-3",
    "ch": 1,
    "src": "jingxuan",
    "type": "mc",
    "no": 3,
    "stem": "记 \\[ f(x)=\\begin{vmatrix} x-2 & x-1 & x-2 & x-3 \\\\ 2x-2 & 2x-1 & 2x-2 & 2x-3 \\\\ 3x-3 & 3x-2 & 3x-5 & 3x-5 \\\\ 4x & 4x-3 & 5x-7 & 4x-3 \\end{vmatrix} \\text{，}\\]则 \\( f(x)=0 \\) 的根的个数为______。",
    "options": [
      [
        "A",
        "1"
      ],
      [
        "B",
        "2"
      ],
      [
        "C",
        "3"
      ],
      [
        "D",
        "4"
      ]
    ],
    "ans": "B",
    "fb": "解析：将第2、3、4行分别减去第1行的\\(2,3,4\\)倍，消去大部分\\(x\\)后展开，可得\\(f(x)\\)为二次多项式且\\(f(x)=-x(x+5)\\)，故\\(f(x)=0\\)有两个互异实根\\(x=0\\)与\\(x=-5\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-mc-4",
    "ch": 1,
    "src": "jingxuan",
    "type": "mc",
    "no": 4,
    "stem": "方程 \\[ \\begin{vmatrix} a_1 & a_2 & a_3 & a_4+x \\\\ a_1 & a_2 & a_3+x & a_4 \\\\ a_1 & a_2+x & a_3 & a_4 \\\\ a_1+x & a_2 & a_3 & a_4 \\end{vmatrix}=0 \\] 的根为______。",
    "options": [
      [
        "A",
        "\\( a_1+a_2, a_3+a_4 \\)"
      ],
      [
        "B",
        "\\( 0, a_1+a_2+a_3+a_4 \\)"
      ],
      [
        "C",
        "\\( a_1a_2a_3a_4, 0 \\)"
      ],
      [
        "D",
        "\\( 0, -a_1-a_2-a_3-a_4 \\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：把第2、3、4列加到第1列，第1列各元均化为\\(a_1+a_2+a_3+a_4+x\\)，提出公因子后将第2、3、4列分别减去第1列的\\(a_2,a_3,a_4\\)倍，得\\(\\begin{vmatrix}1&0&0&x\\\\1&0&x&0\\\\1&x&0&0\\\\1&0&0&0\\end{vmatrix}\\)，其值为\\(x^3\\)，故\\(F(x)=x^3(a_1+a_2+a_3+a_4+x)\\)，根为\\(x=0\\)与\\(x=-(a_1+a_2+a_3+a_4)\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-14",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 14,
    "stem": "设 \\[ f(x)=\\begin{vmatrix} 1 & 1 & 1 \\\\ 3-x & 5-3x^2 & 3x^2-1 \\\\ 2x^2-1 & 3x^5-1 & 7x^8-1 \\end{vmatrix} \\text{，}\\]证明：可以找出数 \\( q \\)（\\( 0<q<1 \\)），使 \\( f'(q)=0 \\)。",
    "options": null,
    "ans": null,
    "fb": "计算得 \\( f(0)=\\begin{vmatrix}1&1&1\\\\3&5&-1\\\\-1&-1&-1\\end{vmatrix}=0 \\)，\\( f(1)=\\begin{vmatrix}1&1&1\\\\2&2&2\\\\1&2&6\\end{vmatrix}=0 \\)。因 \\( f(x) \\) 在 \\([0,1]\\) 上连续、在 \\((0,1)\\) 内可导，由罗尔定理知存在 \\( q\\in(0,1) \\) 使 \\( f'(q)=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-67",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 67,
    "stem": "求 \\[ \\dfrac{\\mathrm{d}^2}{\\mathrm{d}x^2}\\begin{vmatrix} a_{11}+x & a_{12} & a_{13} \\\\ a_{21} & a_{22}+x & a_{23} \\\\ a_{31} & a_{32} & a_{33}+x \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\( 2(a_{11}+a_{22}+a_{33})+6x \\)。",
    "fb": "解析：设\\(D(x)=\\begin{vmatrix}a_{11}+x&a_{12}&a_{13}\\\\a_{21}&a_{22}+x&a_{23}\\\\a_{31}&a_{32}&a_{33}+x\\end{vmatrix}\\)。展开主对角线可知\\(D(x)=x^3+(a_{11}+a_{22}+a_{33})x^2+\\cdots\\)，故二阶导\\(D''(x)=6x+2(a_{11}+a_{22}+a_{33})\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c1-jx-proof-15",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 15,
    "stem": "设 \\( f(x)=C_0+C_1x+C_2x^2+\\cdots+C_nx^n \\)，证明：若 \\( f(x) \\) 有 \\( n+1 \\) 个不同的根，则 \\( f(x) \\) 是零多项式。",
    "options": null,
    "ans": null,
    "fb": "设 \\( a_0,a_1,\\ldots,a_n \\) 为 \\( f(x) \\) 的 \\( n+1 \\) 个不同根。由 \\( f(a_i)=0 \\) 得到关于 \\( C_0,C_1,\\ldots,C_n \\) 的线性方程组，其系数行列式为 Vandermonde 行列式 \\( D_{n+1}=\\prod_{0\\le j<i\\le n}(a_i-a_j)\\neq 0 \\)。由克莱姆法则，方程组只有零解，即 \\( C_0=C_1=\\cdots=C_n=0 \\)，故 \\( f(x)=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-68",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 68,
    "stem": "求经过点 \\( A(1,1,2) \\)、\\( B(3,-2,0) \\)、\\( C(0,5,-5) \\) 三点的平面方程。",
    "options": null,
    "ans": "\\( 29x+16y+5z-55=0 \\)。",
    "fb": "解：平面法向量\\(\\vec{n}=\\overrightarrow{AB}\\times\\overrightarrow{AC}\\)。\\(\\overrightarrow{AB}=(2,-3,-2)\\)，\\(\\overrightarrow{AC}=(-1,4,-7)\\)，叉积为\\((29,16,5)\\)。过点\\(A(1,1,2)\\)得\\(29(x-1)+16(y-1)+5(z-2)=0\\)，即\\(29x+16y+5z-55=0\\)。故应填 \\(29x+16y+5z-55=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-proof-16",
    "ch": 1,
    "src": "jingxuan",
    "type": "proof",
    "no": 16,
    "stem": "已知 \\( 1998,2196,2394,1800 \\) 都能被 \\( 18 \\) 整除，不计算行列式的值，证明行列式 \\[ D_4=\\begin{vmatrix} 1 & 9 & 9 & 8 \\\\ 2 & 1 & 9 & 6 \\\\ 2 & 3 & 9 & 4 \\\\ 1 & 8 & 0 & 0 \\end{vmatrix} \\] 能被 \\( 18 \\) 整除。",
    "options": null,
    "ans": null,
    "fb": "对 \\( D_4 \\) 作列变换 \\( c_4+10c_3+100c_2+1000c_1 \\)，得 \\[ D_4=\\begin{vmatrix}1&9&9&1998\\\\2&1&9&2196\\\\2&3&9&2394\\\\1&8&0&1800\\end{vmatrix} \\text{。}\\]因为第四列各元素 \\( 1998,2196,2394,1800 \\) 均能被 \\( 18 \\) 整除，所以第四列可提出公因子 \\( 18 \\)，故 \\( D_4 \\) 能被 \\( 18 \\) 整除。",
    "pts": 8,
    "diff": 2,
    "sec": "s11"
  },
  {
    "id": "c1-jx-fill-69",
    "ch": 1,
    "src": "jingxuan",
    "type": "fill",
    "no": 69,
    "stem": "计算 \\( f(x+1)-f(x) \\)，其中 \\[ f(x)=\\begin{vmatrix} 1 & 0 & 0 & \\cdots & 0 & x \\\\ 1 & 2 & 0 & \\cdots & 0 & x^2 \\\\ 1 & 3 & 3 & \\cdots & 0 & x^3 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ 1 & n & C_n^2 & \\cdots & C_n^{n-1} & x^n \\\\ 1 & n+1 & C_{n+1}^2 & \\cdots & C_{n+1}^{n-1} & x^{n+1} \\end{vmatrix} \\text{。}\\]",
    "options": null,
    "ans": "\\( (n+1)!\\,x^n \\)。",
    "fb": "解：该行列式末列含\\(x,x^2,\\ldots,x^{n+1}\\)，按最后一列展开知\\(f(x)\\)为\\(n+1\\)次多项式。由行列式对末列的线性性，\\(f(x+1)-f(x)\\)相当于对末列作差分，展开可得\\(f(x+1)-f(x)=(n+1)!\\,x^n\\)。故应填 \\((n+1)!\\,x^n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s12"
  },
  {
    "id": "c2-jx-calc-1",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 1,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 2 & 1 & 2 \\\\ 2 & 1 & 2 & 1 \\\\ 1 & 2 & 3 & 4 \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} 4 & 3 & 2 & 1 \\\\ -2 & 1 & -2 & 1 \\\\ 0 & -1 & 0 & -1 \\end{bmatrix} \\)，且 \\( (2A - X) + 2(B - X) = 0 \\)，求 \\( X \\)。",
    "options": null,
    "ans": null,
    "fb": "由条件 \\( (2A - X) + 2(B - X) = 0 \\)，可得 \\( 2A + 2B - 3X = 0 \\)，所以 \\( X = \\dfrac{2}{3}(A + B) = \\dfrac{2}{3} \\begin{bmatrix} 5 & 5 & 3 & 3 \\\\ 0 & 2 & 0 & 2 \\\\ 1 & 1 & 3 & 3 \\end{bmatrix} = \\begin{bmatrix} \\dfrac{10}{3} & \\dfrac{10}{3} & 2 & 2 \\\\ 0 & \\dfrac{4}{3} & 0 & \\dfrac{4}{3} \\\\ \\dfrac{2}{3} & \\dfrac{2}{3} & 2 & 2 \\end{bmatrix} \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-calc-2",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 2,
    "stem": "设 \\( A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} b_1 & 0 \\\\ 0 & b_2 \\end{bmatrix} \\)，\\( C = \\begin{bmatrix} c_1 & 0 & 0 \\\\ 0 & c_2 & 0 \\\\ 0 & 0 & c_3 \\end{bmatrix} \\)，求 \\( AB \\)、\\( CA \\)。",
    "options": null,
    "ans": null,
    "fb": "直接由矩阵乘法计算得 \\( AB \\) 与 \\( CA \\) 如上。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-1",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 1,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 0 \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} 1 & -1 \\\\ 2 & 3 \\\\ 4 & 0 \\end{bmatrix} \\)，求 \\( AB \\)、\\( BA \\)。",
    "options": null,
    "ans": "\\( AB = \\begin{bmatrix} 13 & -1 \\\\ 0 & -5 \\end{bmatrix} \\)，\\( BA = \\begin{bmatrix} -1 & 1 & 3 \\\\ 8 & -3 & 6 \\\\ 4 & 0 & 12 \\end{bmatrix} \\)",
    "fb": "按矩阵乘法逐元素计算，\\(AB\\) 为 \\(2\\times2\\)、\\(BA\\) 为 \\(3\\times3\\)，即对应行乘列求和。故应填 \\( AB = \\begin{bmatrix} 13 & -1 \\\\ 0 & -5 \\end{bmatrix} \\)，\\( BA = \\begin{bmatrix} -1 & 1 & 3 \\\\ 8 & -3 & 6 \\\\ 4 & 0 & 12 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-mc-1",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 1,
    "stem": "设 \\( A \\)、\\( B \\)、\\( C \\) 均为 \\( n \\) 阶方阵，且 \\( AB = BC = CA = E \\)，则 \\( A^2 + B^2 + C^2 = \\)____。",
    "options": [
      [
        "A",
        "\\( 3E \\)"
      ],
      [
        "B",
        "\\( 2E \\)"
      ],
      [
        "C",
        "\\( E \\)"
      ],
      [
        "D",
        "\\( 0 \\)"
      ]
    ],
    "ans": "A",
    "fb": "由 \\(AB=E\\) 得 \\(B=A^{-1}\\)，由 \\(CA=E\\) 得 \\(C=A^{-1}\\)，再由 \\(BC=E\\) 得 \\(A^{-1}A^{-1}=E\\)，即 \\(A^2=E\\)，同理 \\(B^2=C^2=E\\)，故 \\(A^2+B^2+C^2=3E\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-mc-2",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 2,
    "stem": "已知 \\( A \\)、\\( B \\) 均为 \\( n \\) 阶方阵，则必有____。",
    "options": [
      [
        "A",
        "\\( (A+B)^2 = A^2 + 2AB + B^2 \\)"
      ],
      [
        "B",
        "\\( (AB)^T = A^T B^T \\)"
      ],
      [
        "C",
        "\\( AB = 0 \\) 时，\\( A = 0 \\) 或 \\( B = 0 \\)"
      ],
      [
        "D",
        "\\( |E + AB| = 0 \\Leftrightarrow |A| = 0 \\) 或 \\( |E + B| = 0 \\)"
      ]
    ],
    "ans": "D",
    "fb": "逐项判断：\\((A+B)^2=A^2+AB+BA+B^2\\)，一般 \\(AB\\ne BA\\)，A 不一定成立；\\((AB)^T=B^TA^T\\ne A^TB^T\\)，B 错；\\(AB=O\\) 不能推出 \\(A=O\\) 或 \\(B=O\\)（存在非零零因子），C 错。故正确选项为 D。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-1",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 1,
    "stem": "设 \\( A \\)、\\( B \\) 为 \\( n \\) 阶方阵，且满足 \\( A^2 = A \\)，\\( B^2 = B \\) 及 \\( (A - B)^2 = A + B \\)，证明：\\( AB = BA = 0 \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( (A-B)^2 = (A-B)(A-B) = A^2 - AB - BA + B^2 = A + B \\)，得 \\( AB = -BA \\)。该式左乘 \\( A \\) 得 \\( A^2B = -ABA \\)，即 \\( AB = -ABA \\)；右乘 \\( A \\) 得 \\( ABA = -BA^2 \\)，即 \\( ABA = -BA \\)。于是 \\( AB = BA \\)，结合 \\( AB = -BA \\) 得 \\( AB = BA = 0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-2",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 2,
    "stem": "计算 \\( \\begin{bmatrix} \\lambda_1 & & \\ & \\lambda_2 & \\ & & \\lambda_3 \\end{bmatrix}^n \\)。",
    "options": null,
    "ans": "\\( \\begin{bmatrix} \\lambda_1^n & & \\ & \\lambda_2^n & \\ & & \\lambda_3^n \\end{bmatrix} \\)",
    "fb": "对角阵的幂等于其对角元分别取 \\(n\\) 次幂。故应填 \\( \\begin{bmatrix} \\lambda_1^n & & \\ & \\lambda_2^n & \\ & & \\lambda_3^n \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-3",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 3,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix} \\)，求 \\( A^n \\)。",
    "options": null,
    "ans": "\\( A^n = \\begin{bmatrix} 1 & 3n \\\\ 0 & 1 \\end{bmatrix} \\)",
    "fb": "同剪切阵性质，\\(\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}^n=\\begin{pmatrix}1&3n\\\\0&1\\end{pmatrix}\\)。故应填 \\( A^n = \\begin{bmatrix} 1 & 3n \\\\ 0 & 1 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-4",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 4,
    "stem": "设 \\( A = \\begin{bmatrix} 0 & 0 & 0 \\\\ 2 & 0 & 0 \\\\ 1 & 3 & 0 \\end{bmatrix} \\)，则 \\( A^2 = \\)____，\\( A^3 = \\)____。",
    "options": null,
    "ans": "\\( A^2 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 6 & 0 & 0 \\end{bmatrix} \\)，\\( A^3 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\)",
    "fb": "直接计算 \\(A^2\\) 与 \\(A^3\\)，注意 \\(A\\) 为严格下三角阵，三次幂后为零矩阵。故应填 \\( A^2 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 6 & 0 & 0 \\end{bmatrix} \\)，\\( A^3 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-5",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 5,
    "stem": "已知 \\( \\alpha = (1, 2, 3) \\)，\\( \\beta = (1, \\dfrac{1}{2}, \\dfrac{1}{3}) \\)，设 \\( A = \\alpha^T \\beta \\)，其中 \\( \\alpha^T \\) 是 \\( \\alpha \\) 的转置，则 \\( A^n = \\)____。",
    "options": null,
    "ans": "\\( A^n = 3^{n-1} \\begin{bmatrix} 1 & \\dfrac{1}{2} & \\dfrac{1}{3} \\\\ 2 & 1 & \\dfrac{2}{3} \\\\ 3 & \\dfrac{3}{2} & 1 \\end{bmatrix} \\)",
    "fb": "先算 \\(\\beta\\alpha^T=1\\cdot1+2\\cdot\\tfrac12+3\\cdot\\tfrac13=3\\)，于是 \\(A^2=\\alpha^T\\beta\\alpha^T\\beta=3\\alpha^T\\beta=3A\\)，归纳得 \\(A^n=3^{n-1}A\\)。故应填 \\( A^n = 3^{n-1} \\begin{bmatrix} 1 & \\dfrac{1}{2} & \\dfrac{1}{3} \\\\ 2 & 1 & \\dfrac{2}{3} \\\\ 3 & \\dfrac{3}{2} & 1 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-6",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 6,
    "stem": "设 \\( \\alpha = (1, 0, -1)^T \\)，矩阵 \\( A = \\alpha \\alpha^T \\)，\\( n \\) 为正整数，则 \\( |aE - A^n| = \\)____。",
    "options": null,
    "ans": "\\( a^2(a - 2^n) \\)",
    "fb": "\\(A=\\alpha\\alpha^T\\) 的特征值为 \\(\\alpha^T\\alpha=2\\)（一重）与 \\(0\\)（二重），故 \\(A^n\\) 的特征值为 \\(2^n,0,0\\)，从而 \\(aE-A^n\\) 的特征值为 \\(a-2^n,a,a\\)，行列式为三者之积。故应填 \\( a^2(a - 2^n) \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-7",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 7,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix} \\)，而 \\( n \\ge 2 \\) 为正整数，则 \\( A^n - 2A^{n-1} = \\)____。",
    "options": null,
    "ans": "\\( 0 \\)",
    "fb": "直接计算得 \\(A^2=2A\\)，从而 \\(A^n=2^{n-1}A\\)，于是 \\(A^n-2A^{n-1}=2^{n-1}A-2^{n-1}A=0\\)。故应填 \\( 0 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-2",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 2,
    "stem": "证明与任意 \\( n \\) 阶方阵乘法可交换的方阵 \\( A \\) 一定是数量矩阵。",
    "options": null,
    "ans": null,
    "fb": "用 \\( E_{ij} \\) 表示第 \\( i \\) 行第 \\( j \\) 列的元素为 1、其余元素全为零的 \\( n \\) 阶方阵。设 \\( A = (a_{ij})_n \\)，由 \\( A \\) 与所有 \\( E_{ij} \\) 可交换，计算 \\( AE_{ij} \\) 与 \\( E_{ij}A \\)。由 \\( AE_{ij} = E_{ij}A \\) 可得 \\( a_{ii} = a_{jj} \\)，\\( a_{il} = 0 \\)（\\( l \\ne j \\)），\\( a_{lj} = 0 \\)（\\( l \\ne i \\)），故 \\( A \\) 为数量矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-3",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 3,
    "stem": "设 \\( A = \\begin{bmatrix} a_1 & & \\ & a_2 & \\ & & \\ddots & \\ & & & a_n \\end{bmatrix} \\)，其中 \\( a_i \\ne a_j \\)（\\( i \\ne j \\)）。证明与 \\( A \\) 可交换的矩阵只能是对角矩阵。",
    "options": null,
    "ans": null,
    "fb": "任何对角矩阵显然与 \\( A \\) 可交换。反之，设 \\( B = (b_{ij})_{n \\times n} \\) 与 \\( A \\) 可交换，由 \\( AB = BA \\) 比较对应元素得 \\( (a_i - a_j)b_{ij} = 0 \\)（\\( i \\ne j \\)）。由于 \\( a_i \\ne a_j \\)（\\( i \\ne j \\)），所以 \\( b_{ij} = 0 \\)（\\( i \\ne j \\)），即 \\( B \\) 为对角矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-8",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 8,
    "stem": "求所有与 \\( A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix} \\) 乘法可交换的矩阵。",
    "options": null,
    "ans": "\\( \\begin{bmatrix} a & b \\\\ 0 & a \\end{bmatrix} \\)，其中 \\( a \\)、\\( b \\) 为任意数",
    "fb": "设 \\(X=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\)，由 \\(XA=AX\\) 比较对应元素得 \\(c=0,\\ a=d\\)，即 \\(X=\\begin{pmatrix}a&b\\\\0&a\\end{pmatrix}\\)。故应填 \\( \\begin{bmatrix} a & b \\\\ 0 & a \\end{bmatrix} \\)，其中 \\( a \\)、\\( b \\) 为任意数。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-mc-3",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 3,
    "stem": "已知 \\( A \\)、\\( B \\) 是 \\( n \\) 阶方阵，则下列结论中正确的是____。",
    "options": [
      [
        "A",
        "\\( AB \\ne 0 \\Leftrightarrow A \\ne 0 \\) 且 \\( B \\ne 0 \\)"
      ],
      [
        "B",
        "\\( |A| = 0 \\Leftrightarrow A = 0 \\)"
      ],
      [
        "C",
        "\\( |AB| = 0 \\Leftrightarrow |A| = 0 \\) 或 \\( |B| = 0 \\)"
      ],
      [
        "D",
        "\\( A = E \\Leftrightarrow |A| = 1 \\)"
      ]
    ],
    "ans": "C",
    "fb": "由 \\(|AB|=|A||B|\\) 知 \\(|AB|=0\\Leftrightarrow |A||B|=0\\Leftrightarrow |A|=0\\) 或 \\(|B|=0\\)，故 C 正确。A 错在 \\(AB\\ne0\\) 时 \\(A,B\\) 仍可能为零矩阵；B 中 \\(|A|=0\\) 不能推出 \\(A=O\\)；D 中 \\(|A|=1\\) 不能推出 \\(A=E\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-9",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 9,
    "stem": "设 \\( A \\) 是四阶方阵，\\( B \\) 是五阶方阵，且 \\( |A| = 2 \\)，\\( |B| = -2 \\)，则 \\( |-|A|B| = \\)____，\\( |-|B|A| = \\)____。",
    "options": null,
    "ans": "\\( 64 \\)、\\( 32 \\)",
    "fb": "\\(-|A|B=(-2)B\\) 为五阶，行列式为 \\((-2)^5|B|=(-32)(-2)=64\\)；\\(-|B|A=2A\\) 为四阶，行列式为 \\(2^4|A|=16\\cdot2=32\\)。故应填 \\( 64 \\)、\\( 32 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-10",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 10,
    "stem": "设 \\( A = \\begin{bmatrix} 2 & 1 \\\\ -1 & 2 \\end{bmatrix} \\)，矩阵 \\( B \\) 满足 \\( BA = B + 2E \\)，求 \\( |B| \\)。",
    "options": null,
    "ans": "\\( |B| = 2 \\)",
    "fb": "由 \\(BA=B+2E\\) 得 \\(B(A-E)=2E\\)，取行列式得 \\(|B||A-E|=|2E|=4\\)，而 \\(|A-E|=2\\)，故 \\(|B|=2\\)。故应填 \\( |B| = 2 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-11",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 11,
    "stem": "设 \\( A \\)、\\( B \\) 是三阶方阵，且满足 \\( A^2B - A - B = E \\)，若 \\( A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} \\)，求 \\( |B| \\)。",
    "options": null,
    "ans": "\\( |B| = \\dfrac{1}{2} \\)",
    "fb": "原式化为 \\((A^2-E)B=A+E\\)，即 \\((A-E)(A+E)B=A+E\\)；因 \\(A+E\\) 可逆，得 \\((A-E)B=E\\)，故 \\(B=(A-E)^{-1}\\)，于是 \\(|B|=1/|A-E|=1/2\\)。故应填 \\( |B| = \\dfrac{1}{2} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-12",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 12,
    "stem": "设 \\( A \\)、\\( B \\) 为 \\( n \\) 阶矩阵，满足 \\( AA^T = E \\)，\\( BB^T = E \\)，且 \\( |A| + |B| = 0 \\)，求 \\( |A + B| \\)。",
    "options": null,
    "ans": "\\( |A + B| = 0 \\)",
    "fb": "利用恒等式 \\(|A+B|=|A||A^T+B^T||B|=|A||B||A+B|\\)，又 \\(|A||B|=-1\\)，故 \\(|A+B|(1+1)=0\\)，得 \\(|A+B|=0\\)。故应填 \\( |A + B| = 0 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-13",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 13,
    "stem": "设四阶矩阵 \\( A = (\\alpha, \\gamma_2, \\gamma_3, \\gamma_4) \\)，\\( B = (\\beta, \\gamma_2, \\gamma_3, \\gamma_4) \\)，其中 \\( \\alpha \\)、\\( \\beta \\)、\\( \\gamma_2 \\)、\\( \\gamma_3 \\)、\\( \\gamma_4 \\) 均为四维列向量，且已知 \\( |A| = 4 \\)，\\( |B| = 1 \\)，则 \\( |A + B| = \\)____。",
    "options": null,
    "ans": "\\( 40 \\)",
    "fb": "\\(A+B=(\\alpha+\\beta,2\\gamma_2,2\\gamma_3,2\\gamma_4)\\)，由行列式对列的多线性提出后三列的因子 \\(2\\) 得 \\(8(|\\alpha,\\gamma_2,\\gamma_3,\\gamma_4|+|\\beta,\\gamma_2,\\gamma_3,\\gamma_4|)=8(4+1)=40\\)。故应填 \\( 40 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-4",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 4,
    "stem": "设 \\( A \\) 与 \\( B \\) 是两个 \\( n \\) 阶对称方阵，证明：乘积 \\( AB \\) 也是对称的当且仅当 \\( A \\) 与 \\( B \\) 乘法可交换。",
    "options": null,
    "ans": null,
    "fb": "由于 \\( A \\) 与 \\( B \\) 是对称的，故 \\( A^T=A \\)，\\( B^T=B \\)。如果 \\( AB=BA \\)，则 \\( (AB)^T=B^T A^T=BA=AB \\)，即乘积 \\( AB \\) 是对称的。反之，若 \\( AB \\) 是对称的，即 \\( (AB)^T=AB \\)，则 \\( AB=(AB)^T=B^T A^T=BA \\)，即 \\( A \\) 与 \\( B \\) 乘法可交换。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-5",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 5,
    "stem": "设 \\( A,B \\) 都是对合矩阵，证明：积 \\( AB \\) 是对合矩阵的充分必要条件是 \\( A \\) 与 \\( B \\) 乘法可交换。",
    "options": null,
    "ans": null,
    "fb": "设 \\( AB \\) 是对合矩阵，即有 \\( E=(AB)^2=(AB)(AB)=A(BA)B \\)。两端左乘以 \\( A \\) 右乘以 \\( B \\)，由于 \\( A^2=B^2=E \\)，故得 \\( AB=A^2(BA)B^2=BA \\)。反之，设 \\( AB=BA \\)，此等式两端右乘以 \\( AB \\) 得 \\( (AB)^2=BAAB=BEB=B^2=E \\)，故 \\( AB \\) 为对合矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-6",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 6,
    "stem": "证明：任意 \\( n \\) 阶方阵都可以表成一个对称方阵与一个反对称方阵的和。",
    "options": null,
    "ans": null,
    "fb": "设 \\( A \\) 为任意 \\( n \\) 阶方阵，令 \\( B=\\frac{1}{2}(A+A^T) \\)，\\( C=\\frac{1}{2}(A-A^T) \\)，则 \\( B^T=\\frac{1}{2}(A+A^T)^T=\\frac{1}{2}(A+A^T)=B \\)，\\( C^T=\\frac{1}{2}(A-A^T)^T=\\frac{1}{2}(A^T-A)=-C \\)。即 \\( B \\) 为对称阵，而 \\( C \\) 为反对称阵，且显然有 \\( A=B+C \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-7",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 7,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶反对称矩阵，对于任意 \\( n \\) 维列向量 \\( \\alpha \\)，都有 \\( \\alpha^T A \\alpha = 0 \\)。",
    "options": null,
    "ans": null,
    "fb": "注意到 \\( \\alpha^T A \\alpha \\) 是一个数，所以转置就是本身，即 \\( (\\alpha^T A \\alpha)^T=\\alpha^T A \\alpha \\)，又 \\( (\\alpha^T A \\alpha)^T=\\alpha^T A^T \\alpha=-\\alpha^T A \\alpha \\)，所以 \\( \\alpha^T A \\alpha=-\\alpha^T A \\alpha \\)，从而 \\( \\alpha^T A \\alpha=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-8",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 8,
    "stem": "设 \\( A,B \\) 为 \\( n \\) 阶正交矩阵，则 \\( AB \\) 也是正交矩阵。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A,B \\) 是正交矩阵，得 \\( AA^T=E \\)，且 \\( BB^T=E \\)。所以 \\( (AB)(AB)^T=(AB)(B^T A^T)=ABB^T A^T=E \\)，即 \\( AB \\) 为正交矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-9",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 9,
    "stem": "设 \\( n \\) 阶实对称矩阵 \\( A \\) 满足关系 \\( A^2+6A+8E=0 \\)，证明 \\( A+3E \\) 是正交矩阵。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A^T=A \\)，所以 \\( (A+3E)(A+3E)^T=(A+3E)^2=A^2+6A+9E \\)。又 \\( A^2+6A+8E=0 \\)，所以 \\( (A+3E)(A+3E)^T=E \\)，即 \\( A+3E \\) 是正交矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-10",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 10,
    "stem": "设 \\( A,B \\) 均为 \\( n \\) 阶矩阵，且满足 \\( A^2=A \\)，\\( B^2=B \\) 和 \\( (A+B)^2=A+B \\)，证明 \\( AB \\) 为零矩阵。",
    "options": null,
    "ans": null,
    "fb": "由题设 \\( A^2=A \\)，\\( B^2=B \\) 和 \\( (A+B)^2=A+B \\)，有 \\( (A+B)^2=A^2+AB+B^2=A+AB+BA+B=A+B \\)，得 \\( AB+BA=0 \\)。用 \\( A \\) 左乘、右乘上式两边，分别得到 \\( A(AB+BA)=A^2B+ABA=AB+ABA=0 \\)，\\( (AB+BA)A=ABA+BA^2=ABA+BA=0 \\)，从而 \\( AB=BA \\)。将它代入 \\( AB+BA=0 \\)，就得 \\( AB=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-mc-4",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 4,
    "stem": "设 \\( n \\) 阶方阵 \\( A,B,C \\) 满足关系式 \\( ABC=E \\)，其中 \\( E \\) 是 \\( n \\) 阶单位阵，则必有 ______。",
    "options": [
      [
        "A",
        "\\( ACB=E \\)"
      ],
      [
        "B",
        "\\( CBA=E \\)"
      ],
      [
        "C",
        "\\( BAC=E \\)"
      ],
      [
        "D",
        "\\( BCA=E \\)"
      ]
    ],
    "ans": "D",
    "fb": "由 \\(ABC=E\\) 得 \\(A(BC)=E\\)，故 \\(BC\\) 是 \\(A\\) 的逆矩阵，从而 \\((BC)A=E\\)，即 \\(BCA=E\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-mc-5",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 5,
    "stem": "设 \\( A,B \\) 均为 \\( n \\) 阶方阵，则必有 ______。",
    "options": [
      [
        "A",
        "\\( A \\) 或 \\( B \\) 可逆，必有 \\( AB \\) 可逆"
      ],
      [
        "B",
        "\\( A \\) 或 \\( B \\) 不可逆，必有 \\( AB \\) 不可逆"
      ],
      [
        "C",
        "\\( A \\) 且 \\( B \\) 可逆，必有 \\( A+B \\) 可逆"
      ],
      [
        "D",
        "\\( A \\) 且 \\( B \\) 不可逆，必有 \\( A+B \\) 不可逆"
      ]
    ],
    "ans": "B",
    "fb": "若 \\(A\\) 或 \\(B\\) 不可逆，则 \\(|A|=0\\) 或 \\(|B|=0\\)，从而 \\(|AB|=|A||B|=0\\)，故 \\(AB\\) 不可逆，即“\\(A\\) 或 \\(B\\) 不可逆 \\(\\Rightarrow AB\\) 不可逆”成立，B 正确。A 反例（一个可逆一个不可逆时 \\(AB\\) 不可逆）；C、D 均有反例。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-14",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 14,
    "stem": "设 \\( A=\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\)，则 \\( (A+3E)^{-1}(A^2-9E)= \\) ______。",
    "options": null,
    "ans": "\\( \\begin{pmatrix} -2 & 0 & 1 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -2 \\end{pmatrix} \\)",
    "fb": "注意 \\(A^2-9E=(A-3E)(A+3E)\\)，且 \\(A-3E\\) 与 \\(A+3E\\) 可交换，故原式 \\(=(A+3E)^{-1}(A-3E)(A+3E)=A-3E\\)。故应填 \\( \\begin{pmatrix} -2 & 0 & 1 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -2 \\end{pmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-mc-6",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 6,
    "stem": "设 \\( A,B,C \\) 均为 \\( n \\) 阶方阵，\\( E \\) 为 \\( n \\) 阶单位矩阵，若 \\( B=E+AB \\)，\\( C=A+CA \\)，则 \\( B-C \\) 为 ______。",
    "options": [
      [
        "A",
        "\\( E \\)"
      ],
      [
        "B",
        "\\( -E \\)"
      ],
      [
        "C",
        "\\( A \\)"
      ],
      [
        "D",
        "\\( -A \\)"
      ]
    ],
    "ans": "A",
    "fb": "由 \\(B=E+AB\\) 得 \\((E-A)B=E\\)，故 \\(B=(E-A)^{-1}\\)；由 \\(C=A+CA\\) 得 \\(C(E-A)=A\\)，故 \\(C=A(E-A)^{-1}\\)。于是 \\(B-C=(E-A)^{-1}-A(E-A)^{-1}=(E-A)(E-A)^{-1}=E\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-15",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 15,
    "stem": "设三阶方阵 \\( A,B \\)，若 \\( |A|=3 \\)，且 \\( B=2(A^{-1})^2-(2A^2)^{-1} \\)，则 \\( |B|= \\) ______。",
    "options": null,
    "ans": "\\( \\dfrac{3}{8} \\)",
    "fb": "\\((2A^2)^{-1}=\\tfrac12(A^{-1})^2\\)，故 \\(B=2(A^{-1})^2-\\tfrac12(A^{-1})^2=\\tfrac32(A^{-1})^2\\)，于是 \\(|B|=(\\tfrac32)^3|A|^{-2}=3/8\\)。故应填 \\( \\dfrac{3}{8} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-16",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 16,
    "stem": "化简矩阵算式：\\( (BC^T-E)^T(AB^{-1})^T+[(BA^{-1})^T]^{-1} \\)。",
    "options": null,
    "ans": "\\( CA^T \\)",
    "fb": "\\((BC^T-E)^T=CB^T-E\\)，\\((AB^{-1})^T=(B^T)^{-1}A^T\\)，第一项为 \\((CB^T-E)(B^T)^{-1}A^T=(C-(B^T)^{-1})A^T\\)；第二项 \\([(BA^{-1})^T]^{-1}=(B^T)^{-1}A^T\\)，相加消去中间项得 \\(CA^T\\)。故应填 \\( CA^T \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-17",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 17,
    "stem": "设 \\( A,B \\) 均为 \\( n \\) 阶方阵，且 \\( E+AB \\) 可逆，化简：\\( (E+BA)[E-B(E+AB)^{-1}A] \\)。",
    "options": null,
    "ans": "\\( E \\)",
    "fb": "直接展开：\\((E+BA)(E-B(E+AB)^{-1}A)=E+BA-(E+BA)B(E+AB)^{-1}A=E+BA-(B+BAB)(E+AB)^{-1}A=E+BA-B(E+AB)(E+AB)^{-1}A=E\\)。故应填 \\( E \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-18",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 18,
    "stem": "设矩阵 \\( A \\) 满足 \\( A^2+A-4E=0 \\)，其中 \\( E \\) 为单位矩阵，则 \\( (A-E)^{-1}= \\) ______。",
    "options": null,
    "ans": "\\( \\frac{1}{2}(A+2E) \\)",
    "fb": "由 \\(A^2+A-4E=0\\) 配得 \\((A-E)(A+2E)=2E\\)，故 \\((A-E)^{-1}=\\tfrac12(A+2E)\\)。故应填 \\( \\frac{1}{2}(A+2E) \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-19",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 19,
    "stem": "设 \\( A \\) 是幂零矩阵，则 \\( E-A \\) 可逆，并求 \\( (E-A)^{-1} \\)。",
    "options": null,
    "ans": "\\( (E-A)^{-1}=E+A+A^2+\\cdots+A^{k-1} \\)",
    "fb": "因 \\((E-A)(E+A+\\cdots+A^{k-1})=E-A^k=E\\)（其中 \\(A^k=0\\)），故逆矩阵为所给之和。故应填 \\( (E-A)^{-1}=E+A+A^2+\\cdots+A^{k-1} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-20",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 20,
    "stem": "设 \\( A=\\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix} \\)，求 \\( B=E+A \\) 的逆矩阵。",
    "options": null,
    "ans": "\\( (E+A)^{-1}=\\begin{pmatrix} 1 & -1 & 1 & -1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix} \\)",
    "fb": "因 \\(A^4=0\\)，用有限几何级数 \\((E+A)^{-1}=E-A+A^2-A^3\\)，代入 \\(A\\) 的各次幂计算即得。故应填 \\( (E+A)^{-1}=\\begin{pmatrix} 1 & -1 & 1 & -1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-11",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 11,
    "stem": "设 \\( A \\) 满足 \\( ax^2+bx+c=0 \\)（\\( c\\neq 0 \\)），证明 \\( A \\) 可逆，并求 \\( A^{-1} \\)。",
    "options": null,
    "ans": null,
    "fb": "矩阵 \\( A \\) 满足 \\( aA^2+bA+cE=0 \\)，即 \\( A(aA+bE)=-cE \\)。因 \\( c\\neq 0 \\)，等式两端同乘 \\( -\\frac{1}{c} \\)，得 \\( A\\left(-\\frac{a}{c}A-\\frac{b}{c}E\\right)=E \\)，从而 \\( A \\) 可逆，且 \\( A^{-1}=-\\frac{a}{c}A-\\frac{b}{c}E \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-12",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 12,
    "stem": "设 \\( A,B \\) 为 \\( n \\) 阶方阵，且 \\( AB=A+B \\)。\\( (1) \\) 证明：\\( A-E \\) 为可逆矩阵，其中 \\( E \\) 为 \\( n \\) 阶单位矩阵；\\( (2) \\) 证明：\\( AB=BA \\)。",
    "options": null,
    "ans": null,
    "fb": "\\( (1) \\) 由 \\( AB=A+B \\) 得 \\( AB-A-B+E=E \\)，即 \\( (A-E)(B-E)=E \\)，从而 \\( A-E \\) 可逆，且 \\( (A-E)^{-1}=B-E \\)。\\( (2) \\) 由 \\( (1) \\) 知 \\( (A-E)(B-E)=(B-E)(A-E) \\)，即 \\( AB-A-B+E=BA-A-B+E \\)，所以 \\( AB=BA \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-21",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 21,
    "stem": "求矩阵 \\( A=\\begin{pmatrix} 3 & 2 \\\\ 4 & 5 \\end{pmatrix} \\) 的逆矩阵。",
    "options": null,
    "ans": "\\( A^{-1}=\\begin{pmatrix} \\frac{5}{7} & -\\frac{2}{7} \\\\ -\\frac{4}{7} & \\frac{3}{7} \\end{pmatrix} \\)",
    "fb": "二阶逆矩阵公式 \\(A^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)，其中 \\(ad-bc=15-8=7\\)。故应填 \\( A^{-1}=\\begin{pmatrix} \\frac{5}{7} & -\\frac{2}{7} \\\\ -\\frac{4}{7} & \\frac{3}{7} \\end{pmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-22",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 22,
    "stem": "设矩阵 \\( A=\\begin{pmatrix} 1 & -1 \\\\ 2 & 3 \\end{pmatrix} \\)，\\( B=A^2-3A+2E \\)，则 \\( B^{-1}= \\) ______。",
    "options": null,
    "ans": "\\( \\begin{pmatrix} 0 & \\frac{1}{2} \\\\ -1 & -1 \\end{pmatrix} \\)",
    "fb": "先算 \\(B=A^2-3A+2E=\\begin{pmatrix}-2&-1\\\\2&0\\end{pmatrix}\\)，再套用二阶逆矩阵公式。故应填 \\( \\begin{pmatrix} 0 & \\frac{1}{2} \\\\ -1 & -1 \\end{pmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-23",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 23,
    "stem": "设 \\( A \\) 为三阶方阵，且 \\( |A|=2 \\)，则 \\( |2A^{-1}|= \\)______，\\( |A^*|= \\)______，\\( |(A^*)^*|= \\)______，\\( |(A^*)^{-1}|= \\)______，\\( |3A^{-1}-2A^*|= \\)______，\\( |3A-(A^*)^*|= \\)______。",
    "options": null,
    "ans": "\\( 4,\\;4,\\;16,\\;\\frac{1}{4},\\;-\\frac{1}{2},\\;2 \\)",
    "fb": "利用 \\(|A^{-1}|=|A|^{-1}\\)、\\(|kM|=k^n|M|\\)、\\(A^*=|A|A^{-1}\\)、\\((A^*)^*=|A|^{n-2}A\\)（此处 \\(n=3\\)），逐项代入得六空结果。故应填 \\( 4,\\;4,\\;16,\\;\\frac{1}{4},\\;-\\frac{1}{2},\\;2 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-24",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 24,
    "stem": "设 \\( A=\\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\)，矩阵 \\( B \\) 满足：\\( ABA^*=2BA^*+E \\)，则 \\( |B|= \\) ______。",
    "options": null,
    "ans": "\\( \\frac{1}{9} \\)",
    "fb": "原式化为 \\((A-2E)BA^*=E\\)，故 \\(BA^*=(A-2E)^{-1}\\)，\\(B=(A-2E)^{-1}(A^*)^{-1}\\)；取行列式 \\(|B|=1/|A-2E|\\cdot1/|A^*|=1/9\\)。故应填 \\( \\frac{1}{9} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-25",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 25,
    "stem": "已知实矩阵 \\( A=(a_{ij})_{3\\times 3} \\) 满足条件 \\( (1)\\; a_{ij}=A_{ij}\\ (i,j=1,2,3) \\)，其中 \\( A_{ij} \\) 是 \\( a_{ij} \\) 的代数余子式；\\( (2)\\; a_{11}\\neq 0 \\)。计算行列式 \\( |A| \\)。",
    "options": null,
    "ans": "\\( |A|=1 \\)",
    "fb": "由 \\(a_{ij}=A_{ij}\\) 知 \\(A^*=A^T\\)，于是 \\(AA^T=|A|E\\)。取行列式得 \\(|A|^2=|A|^3\\)；若 \\(|A|=0\\) 则推出 \\(A=0\\)，与 \\(a_{11}\\neq0\\) 矛盾，故 \\(|A|=1\\)。故应填 \\( |A|=1 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-13",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 13,
    "stem": "证明以下常用公式：\\( (1)\\ (A^{-1})^*=(A^*)^{-1} \\)；\\( (2)\\ |A^*|=|A|^{n-1} \\)。",
    "options": null,
    "ans": null,
    "fb": "\\( (1) \\) 由 \\( AA^*=|A|E \\) 得 \\( A^*=|A|A^{-1} \\)，从而 \\( (A^{-1})^*=|A^{-1}|(A^{-1})^{-1}=|A|^{-1}A \\)。所以 \\( A^*(A^{-1})^*=|A|A^{-1}\\cdot |A|^{-1}A=E \\)，即 \\( (A^*)^{-1}=(A^{-1})^* \\)。\\( (2) \\) 由 \\( AA^*=|A|E \\)，两边取行列式，得 \\( |A|\\,|A^*|=|A|^n \\)。若 \\( |A|\\neq 0 \\)，则 \\( |A^*|=|A|^{n-1} \\)。若 \\( |A|=0 \\)，则必有 \\( |A^*|=0 \\)。否则，由 \\( |A^*|\\neq 0 \\)，即 \\( A^* \\) 可逆，所以 \\( A=AA^*(A^*)^{-1}=|A|E(A^*)^{-1}=0 \\)。这与 \\( |A^*|\\neq 0 \\) 矛盾，故当 \\( |A|=0 \\) 时亦有 \\( |A^*|=0 \\)。即此时也满足 \\( |A^*|=|A|^{n-1} \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-26",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 26,
    "stem": "设 \\( A=\\begin{pmatrix} 0 & a & b \\\\ a & 0 & c \\\\ b & c & 0 \\end{pmatrix} \\)，\\( B=\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & k & 0 \\\\ 0 & 0 & l \\end{pmatrix} \\)，\\( E=\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\)，其中 \\( k>0,\\ l>0 \\)，则当满足 ______ 时，\\( AB+E \\) 为可逆矩阵。",
    "options": null,
    "ans": "\\( c^2kl\\neq 1 \\)",
    "fb": "计算 \\(AB+E=\\begin{pmatrix}1&ak&bl\\\\0&1&cl\\\\0&ck&1\\end{pmatrix}\\)，其行列式为 \\(1-c^2kl\\)，可逆当且仅当该式非零。故应填 \\( c^2kl\\neq 1 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-14",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 14,
    "stem": "设 \\( A,B \\) 都是 \\( n \\) 阶矩阵，已知 \\( |B|\\neq 0 \\)，\\( A-E \\) 可逆，且有 \\( (A-E)^{-1}=(B-E)^T \\)，求证 \\( A \\) 可逆。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A-E \\) 可逆，则 \\( (A-E)(A-E)^{-1}=E \\)，即 \\( (A-E)(A-E)^{-1}=(A-E)(B-E)^T=(A-E)(B^T-E)=AB^T-A-B^T+E=E \\)，由此得 \\( A=(A-E)B^T \\)。又因为 \\( |A|=|A-E|\\,|B^T|=|A-E|\\,|B|\\neq 0 \\)，所以 \\( A \\) 可逆。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-15",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 15,
    "stem": "设 \\( A,B \\) 均为 \\( n \\) 阶方阵，\\( B \\) 是可逆矩阵，且满足 \\( A^2+AB+B^2=0 \\)，证明：\\( A \\) 和 \\( A+B \\) 均可逆，并求它们的逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "已知 \\( B \\) 可逆，则 \\( |B|\\neq 0 \\)，由 \\( A^2+AB+B^2=0 \\)，得 \\( A(A+B)=-B^2 \\)。两边取行列式得 \\( |A|\\,|A+B|=(-1)^n(|B|)^2\\neq 0 \\)，所以 \\( |A|\\neq 0,|A+B|\\neq 0 \\)，即 \\( A \\) 和 \\( A+B \\) 均可逆。该式两边右乘 \\( -(B^2)^{-1} \\)，得 \\( A(A+B)(-B^2)^{-1}=E \\)，所以 \\( A^{-1}=-(A+B)(B^2)^{-1}=-A(B^{-1})^2-B^{-1} \\)。该式两边左乘 \\( -(B^2)^{-1} \\)，得 \\( -(B^2)^{-1}A(A+B)=E \\)，所以 \\( (A+B)^{-1}=-(B^2)^{-1}A=-(B^{-1})^2 A \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-16",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 16,
    "stem": "证明：\\( (1) \\) 幂零矩阵一定不可逆；\\( (2) \\) 正交矩阵，对合矩阵一定可逆；\\( (3) \\) 奇数阶反对称阵一定不可逆。",
    "options": null,
    "ans": null,
    "fb": "\\( (1) \\) 幂零矩阵的行列式为 0，故不可逆。\\( (2) \\) 正交矩阵的行列式等于 1 或 -1，所以一定可逆，同理，对合矩阵一定可逆。\\( (3) \\) 奇数阶反对称矩阵的行列式为 0，所以不可逆。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-mc-7",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 7,
    "stem": "设 \\( A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} a_{21} & a_{22} & a_{23} \\\\ a_{11} & a_{12} & a_{13} \\\\ a_{31}+a_{11} & a_{32}+a_{12} & a_{33}+a_{13} \\end{bmatrix} \\)，\\( P_1 = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\)，\\( P_2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix} \\)，则必有 ______。",
    "options": [
      [
        "A",
        "\\(AP_1P_2=B\\)"
      ],
      [
        "B",
        "\\(AP_2P_1=B\\)"
      ],
      [
        "C",
        "\\(P_1P_2A=B\\)"
      ],
      [
        "D",
        "\\(P_2P_1A=B\\)"
      ]
    ],
    "ans": "C",
    "fb": "观察 \\(B\\)：先将 \\(A\\) 的第 1 行加到第 3 行（左乘 \\(P_2\\)），再交换第 1、2 行（左乘 \\(P_1\\)），即 \\(B=P_1(P_2A)=P_1P_2A\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-fill-27",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 27,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix} \\)，\\( P = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\)，\\( Q = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} \\)，求 \\( P^{20} A Q^{21} \\)。",
    "options": null,
    "ans": "\\( P^{20} A Q^{21} = \\begin{bmatrix} 1 & 3 & 2 \\\\ 4 & 6 & 5 \\\\ 7 & 9 & 8 \\end{bmatrix} \\)",
    "fb": "\\(P^2=E\\) 故 \\(P^{20}=E\\)，\\(Q^2=E\\) 故 \\(Q^{21}=Q\\)，于是 \\(P^{20}AQ^{21}=AQ\\)，即把 \\(A\\) 的第 2、3 列互换。故应填 \\( P^{20} A Q^{21} = \\begin{bmatrix} 1 & 3 & 2 \\\\ 4 & 6 & 5 \\\\ 7 & 9 & 8 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-8",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 8,
    "stem": "设 \\( A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} & a_{14} \\\\ a_{21} & a_{22} & a_{23} & a_{24} \\\\ a_{31} & a_{32} & a_{33} & a_{34} \\\\ a_{41} & a_{42} & a_{43} & a_{44} \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} a_{14} & a_{13} & a_{12} & a_{11} \\\\ a_{24} & a_{23} & a_{22} & a_{21} \\\\ a_{34} & a_{33} & a_{32} & a_{31} \\\\ a_{44} & a_{43} & a_{42} & a_{41} \\end{bmatrix} \\)，\\( P_1 = \\begin{bmatrix} 0 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 1 & 0 & 0 & 0 \\end{bmatrix} \\)，\\( P_2 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} \\)，其中 \\( A \\) 可逆，则 \\( B^{-1} \\) 等于 ______。",
    "options": [
      [
        "A",
        "\\(A^{-1}P_1P_2\\)"
      ],
      [
        "B",
        "\\(P_1A^{-1}P_2\\)"
      ],
      [
        "C",
        "\\(P_1P_2A^{-1}\\)"
      ],
      [
        "D",
        "\\(P_2A^{-1}P_1\\)"
      ]
    ],
    "ans": "C",
    "fb": "\\(B\\) 由 \\(A\\) 的列反序得到，即 \\(B=AR\\)，其中列反序矩阵 \\(R=P_1P_2\\)（\\(P_1\\) 交换 1,4 列，\\(P_2\\) 交换 2,3 列）。于是 \\(B^{-1}=(P_1P_2)^{-1}A^{-1}=P_2P_1A^{-1}\\)，又 \\(P_1,P_2\\) 可交换，故 \\(B^{-1}=P_1P_2A^{-1}\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-9",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 9,
    "stem": "设 \\( A \\) 为三阶矩阵，将 \\( A \\) 的第二行加到第一行得 \\( B \\)，再将 \\( B \\) 的第一列的 \\( -1 \\) 倍加到第二列得 \\( C \\)，记 \\( P = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\)，则 ______。",
    "options": [
      [
        "A",
        "\\(C=P^{-1}AP\\)"
      ],
      [
        "B",
        "\\(C=PAP^{-1}\\)"
      ],
      [
        "C",
        "\\(C=P^TAP\\)"
      ],
      [
        "D",
        "\\(C=PAP^T\\)"
      ]
    ],
    "ans": "B",
    "fb": "将 \\(A\\) 的第 2 行加到第 1 行对应左乘 \\(P\\)；再将第 1 列的 \\(-1\\) 倍加到第 2 列对应右乘 \\(P^{-1}\\)（因 \\(P^{-1}=\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)）。故 \\(C=PAP^{-1}\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-calc-3",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 3,
    "stem": "用初等行变换把矩阵 \\( A = \\begin{bmatrix} 0 & 1 & 7 & 8 \\\\ 1 & 3 & 3 & 8 \\\\ -2 & -5 & 1 & -8 \\end{bmatrix} \\) 化成阶梯形矩阵 \\( M \\)，并求初等矩阵 \\( P_1, P_2, P_3 \\)，使 \\( A \\) 可以写成 \\( A = P_1 P_2 P_3 M \\)。",
    "options": null,
    "ans": null,
    "fb": "对 \\(A\\) 作初等行变换：\\(r_1 \\leftrightarrow r_2\\)，\\(r_3 + 2r_1\\)，\\(r_3 + (-1)r_2\\)，得阶梯形矩阵 \\(M\\)。设对应的初等矩阵为 \\(Q_1,Q_2,Q_3\\)，则 \\(Q_3Q_2Q_1A=M\\)，于是 \\(A=Q_1^{-1}Q_2^{-1}Q_3^{-1}M=P_1P_2P_3M\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-calc-4",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 4,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 2 \\\\ 3 & 3 & 5 \\\\ 1 & -1 & -1 \\\\ 4 & 2 & 4 \\end{bmatrix} \\)，求可逆矩阵 \\( P, Q \\)，使 \\( PAQ \\) 为 \\( A \\) 的等价标准型。",
    "options": null,
    "ans": null,
    "fb": "对分块矩阵 \\(\\begin{bmatrix} A & E_5 \\\\ E_3 & 0 \\end{bmatrix}\\) 同时进行行列初等变换，可同时得到可逆矩阵 \\(P,Q\\)，使得 \\(PAQ\\) 为 \\(A\\) 的等价标准型。",
    "pts": 8,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-proof-17",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 17,
    "stem": "设 \\( n \\) 阶矩阵 \\( A \\) 可逆，将 \\( A \\) 的第 \\( i \\) 行与第 \\( j \\) 行交换后得到矩阵 \\( B \\)。(1) 证明 \\( B \\) 可逆；(2) 求 \\( AB^{-1} \\)。",
    "options": null,
    "ans": null,
    "fb": "(1) 由题意知 \\(B=E(i,j)A\\)。因为 \\(A\\) 可逆，\\(E(i,j)\\) 可逆，所以 \\(B\\) 可逆。(2) 因为 \\(B=E(i,j)A\\)，所以 \\(B^{-1}=(E(i,j)A)^{-1}=A^{-1}E(i,j)\\)，于是 \\(AB^{-1}=AA^{-1}E(i,j)=E(i,j)\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-10",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 10,
    "stem": "与矩阵 \\( A = \\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 4 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix} \\) 等价的是 ______。",
    "options": [
      [
        "A",
        "\\(\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}\\)"
      ]
    ],
    "ans": "B",
    "fb": "\\(A=\\begin{pmatrix}1&2&0\\\\2&4&0\\\\0&0&4\\end{pmatrix}\\)，第 2 行 \\(=2\\times\\) 第 1 行，故 \\(R(A)=2\\)。等价矩阵具有相同秩，选项中仅 \\(\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&0\\end{pmatrix}\\) 的秩为 2。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-fill-28",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 28,
    "stem": "证明 \\( A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} \\) 与 \\( B = \\begin{bmatrix} 4a_{11} & 2a_{11}-3a_{12} & a_{13} \\\\ 4a_{21} & 2a_{21}-3a_{22} & a_{23} \\\\ 4a_{31} & 2a_{31}-3a_{32} & a_{33} \\end{bmatrix} \\) 等价，若 \\( |A| = 1 \\)，求 \\( |B| \\)。",
    "options": null,
    "ans": "\\( |B| = -12 \\)",
    "fb": "\\(B\\) 可视为 \\(A\\) 右乘初等列变换矩阵 \\(M=\\begin{pmatrix}4&2&0\\\\0&-3&0\\\\0&0&1\\end{pmatrix}\\)，故 \\(|B|=|A||M|=1\\cdot(-12)=-12\\)。故应填 \\( |B| = -12 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-11",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 11,
    "stem": "设 \\( n \\) 阶矩阵 \\( A \\) 与 \\( B \\) 等价，则必有 ______。",
    "options": [
      [
        "A",
        "当 \\( |A| = a(a \\neq 0) \\) 时，\\( |B| = a \\)"
      ],
      [
        "B",
        "当 \\( |A| = a(a \\neq 0) \\) 时，\\( |B| = -a \\)"
      ],
      [
        "C",
        "当 \\( |A| \\neq 0 \\) 时，\\( |B| = 0 \\)"
      ],
      [
        "D",
        "当 \\( |A| = 0 \\) 时，\\( |B| = 0 \\)"
      ]
    ],
    "ans": "D",
    "fb": "等价矩阵秩相等。若 \\(|A|=0\\)，则 \\(R(A)<n\\)，由 \\(A\\sim B\\) 知 \\(R(B)=R(A)<n\\)，故 \\(|B|=0\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-calc-5",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 5,
    "stem": "求可逆矩阵 \\( A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 0 \\\\ -1 & 0 & -2 \\end{bmatrix} \\) 的逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "由题意可得 \\(|A|=9\\)。计算所有代数余子式得 \\(A_{11}=-2,A_{12}=6,A_{13}=1,A_{21}=4,A_{22}=-3,A_{23}=-2,A_{31}=1,A_{32}=-3,A_{33}=-5\\)，于是 \\(A^{-1}=\\frac19 A^*\\)，即为上述矩阵。也可用初等行变换法验证。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-calc-6",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 6,
    "stem": "用初等变换法求矩阵 \\( A \\) 的逆矩阵，其中 \\( A = \\begin{bmatrix} 0 & 0 & 0 & \\cdots & 0 & a_1 & 0 \\\\ 0 & 0 & 0 & \\cdots & a_2 & 0 & 0 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ 0 & a_{n-2} & 0 & \\cdots & 0 & 0 & 0 \\\\ a_{n-1} & 0 & 0 & \\cdots & 0 & 0 & 0 \\\\ 0 & 0 & 0 & \\cdots & 0 & 0 & a_n \\end{bmatrix} \\)，其中 \\( a_i \\neq 0, i = 1, 2, \\ldots, n \\)。",
    "options": null,
    "ans": null,
    "fb": "对 \\((A : E)\\) 作初等行变换：先通过换行把对角线上的非零元依次排到主对角线上，再分别将各行除以相应的 \\(a_i\\)，即可得到 \\(A^{-1}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-fill-30",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 30,
    "stem": "设 \\( A = \\begin{bmatrix} a_1b_1 & a_1b_2 & \\cdots & a_1b_n \\\\ a_2b_1 & a_2b_2 & \\cdots & a_2b_n \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_nb_1 & a_nb_2 & \\cdots & a_nb_n \\end{bmatrix} \\)，其中 \\( a_i \\neq 0, b_i \\neq 0, i=1,2,\\cdots,n \\)，则 \\( r(A) = \\) ______。",
    "options": null,
    "ans": "\\(1\\)",
    "fb": "该矩阵每行均为向量 \\(\\alpha b^T\\) 的倍数，列向量成比例，故秩为 \\(1\\)。故应填 \\(1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-31",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 31,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\\\ a_1 & a_2 & a_3 & a_4 & a_5 \\\\ a_1^2 & a_2^2 & a_3^2 & a_4^2 & a_5^2 \\\\ a_1^3 & a_2^3 & a_3^3 & a_4^3 & a_5^3 \\\\ (a_1+1)^2 & (a_2+1)^2 & (a_3+1)^2 & (a_4+1)^2 & (a_5+1)^2 \\end{bmatrix} \\)，其中 \\( a_i \\neq a_j, i \\neq j \\)，求 \\( A \\) 的秩。",
    "options": null,
    "ans": "\\(r(A) = 4\\)",
    "fb": "注意到第 5 列 \\((a_i+1)^2=a_i^2+2a_i+1\\) 是前几列的线性组合，故秩不超过 4；而由 \\(1,a,a^2,a^3\\) 组成的列因 \\(a_i\\) 互异线性无关，秩恰为 4。故应填 \\(r(A) = 4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-32",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 32,
    "stem": "求 \\( A = \\begin{bmatrix} 1 & 0 & 1 & 0 & 0 \\\\ 1 & 1 & 0 & 0 & 0 \\\\ 0 & 1 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 1 & 0 \\\\ 0 & 1 & 0 & 1 & 1 \\end{bmatrix} \\) 的秩。",
    "options": null,
    "ans": "\\(r(A) = 5\\)",
    "fb": "对矩阵作初等行变换可化为 5 阶单位阵，故满秩为 5。故应填 \\(r(A) = 5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-33",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 33,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 1 & 2 & 0 & 0 & 1 \\\\ 0 & 6 & 2 & 4 & 10 \\\\ 1 & 11 & 3 & 6 & 16 \\\\ 1 & -19 & -7 & -14 & -34 \\end{bmatrix} \\)，求 \\( r(A) \\)。",
    "options": null,
    "ans": "\\(r(A) = 2\\)",
    "fb": "作行变换后第 3、4 行均可由前两行线性表示，非零行恰有 2 行，故秩为 2。故应填 \\(r(A) = 2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-34",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 34,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} k & 1 & 1 & 1 \\\\ 1 & k & 1 & 1 \\\\ 1 & 1 & k & 1 \\\\ 1 & 1 & 1 & k \\end{bmatrix} \\)，且 \\( r(A) = 3 \\)，则 \\( k = \\) ______。",
    "options": null,
    "ans": "\\(-3\\)",
    "fb": "该矩阵可写为 \\((k-1)E+J\\)（\\(J\\) 为全 1 阵），特征值为 \\(k+3\\)（一重）与 \\(k-1\\)（三重）；秩为 3 时行列式为零、恰有一个零特征值，故 \\(k=-3\\)。故应填 \\(-3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-mc-12",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 12,
    "stem": "设 \\( n (n \\geq 3) \\) 阶矩阵 \\( A = \\begin{bmatrix} 1 & a & a & \\cdots & a \\\\ a & 1 & a & \\cdots & a \\\\ a & a & 1 & \\cdots & a \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ a & a & a & \\cdots & 1 \\end{bmatrix} \\)，若 \\( A \\) 的秩为 \\( n-1 \\)，则 \\( a \\) 必为 ______。 (A) \\(1\\) (B) \\(\\dfrac{1}{1-n}\\) (C) \\(-1\\) (D) \\(\\dfrac{1}{n-1}\\)",
    "options": [
      [
        "A",
        "1"
      ],
      [
        "B",
        "\\(\\dfrac{1}{1-n}\\)"
      ],
      [
        "C",
        "-1"
      ],
      [
        "D",
        "\\(\\dfrac{1}{n-1}\\)"
      ]
    ],
    "ans": "B",
    "fb": "该矩阵可写为 \\((1-a)E+aJ\\)（\\(J\\) 为全 1 矩阵），其特征值为 \\((1-a)+na\\)（一重）与 \\(1-a\\)（\\(n-1\\) 重）。秩为 \\(n-1\\) 即恰有一个零特征值：若 \\(1-a=0\\) 则 \\(a=1\\)，此时秩为 1（不符）；故须 \\((1-a)+na=0\\)，解得 \\(a=\\frac{1}{1-n}\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-mc-13",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 13,
    "stem": "设 \\( A \\) 为 \\( m \\times n \\) 矩阵，\\( r(A) = r < m < n \\)，则 ______ 成立。 (A) \\( A \\) 的所有 \\( r \\) 阶子式都不为 0 (B) \\( A \\) 的所有 \\( r-1 \\) 阶子式都不为 0 (C) \\( A \\) 经初等行变换可以化为 \\( \\begin{bmatrix} E_r & 0 \\\\ 0 & 0 \\end{bmatrix} \\) (D) \\( A \\) 不可能是满秩矩阵",
    "options": [
      [
        "A",
        "A 的所有 r 阶子式都不为 0"
      ],
      [
        "B",
        "A 的所有 r-1 阶子式都不为 0"
      ],
      [
        "C",
        "A 经初等行变换可以化为 \\(\\begin{bmatrix} E_r & 0 \\\\ 0 & 0 \\end{bmatrix}\\)"
      ],
      [
        "D",
        "A 不可能是满秩矩阵"
      ]
    ],
    "ans": "D",
    "fb": "因 \\(r(A)=r<m\\)，故 \\(A\\) 的行秩为 \\(r<m\\)，不是满秩矩阵（满秩需秩为 \\(m\\)）。A、B 中“所有”子式非零过强（只需存在即可）；仅经初等行变换一般只能化为行阶梯形，未必是 \\(\\begin{pmatrix}E_r&0\\\\0&0\\end{pmatrix}\\)（那需行列变换配合）。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-35",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 35,
    "stem": "求下列矩阵的秩：\\( A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 1 & -3 & 4 \\\\ -1 & 2 & \\lambda \\end{bmatrix} \\)。",
    "options": null,
    "ans": "当 \\( \\lambda = -3 \\) 时，\\( r(A) = 2 \\)；当 \\( \\lambda \\neq -3 \\) 时，\\( r(A) = 3 \\)。",
    "fb": "计算行列式 \\(|A|=-5(\\lambda+3)\\)；当 \\(\\lambda\\neq-3\\) 时满秩 3，当 \\(\\lambda=-3\\) 时行列式为零且可化为两非零行，故秩为 2。故应填 当 \\( \\lambda = -3 \\) 时，\\( r(A) = 2 \\)；当 \\( \\lambda \\neq -3 \\) 时，\\( r(A) = 3 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-36",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 36,
    "stem": "求下列矩阵的秩：\\( A = \\begin{bmatrix} x & 1 & 1 \\\\ 1 & x & 1 \\\\ 1 & 1 & x \\end{bmatrix} \\)。",
    "options": null,
    "ans": "当 \\( x \\neq 1 \\) 且 \\( x \\neq -2 \\) 时，\\( r(A) = 3 \\)；当 \\( x = 1 \\) 时，\\( r(A) = 1 \\)；当 \\( x = -2 \\) 时，\\( r(A) = 2 \\)。",
    "fb": "计算 \\(|A|=(x+2)(x-1)^2\\)；据此讨论：\\(x=1\\) 时三行相同秩 1，\\(x=-2\\) 时秩 2，其余满秩 3。故应填 当 \\( x \\neq 1 \\) 且 \\( x \\neq -2 \\) 时，\\( r(A) = 3 \\)；当 \\( x = 1 \\) 时，\\( r(A) = 1 \\)；当 \\( x = -2 \\) 时，\\( r(A) = 2 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-37",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 37,
    "stem": "求下列矩阵的秩：\\( A = \\begin{bmatrix} 1 & 0 & 1 & 1 \\\\ 0 & 1 & 1 & -1 \\\\ 2 & 1 & 3 & 1 \\\\ a & b & a+b & a-b \\\\ c & d & c+d & c-d \\end{bmatrix} \\)。",
    "options": null,
    "ans": "\\(r(A) = 2\\)",
    "fb": "观察列向量满足 \\(c_3=c_1+c_2,\\ c_4=c_1-c_2\\)，列空间由前两列张成；而前两列前 two 行构成单位阵，线性无关，故秩为 2。故应填 \\(r(A) = 2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-38",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 38,
    "stem": "设 \\( A \\) 是 \\( 4 \\times 3 \\) 矩阵，且 \\( A \\) 的秩 \\( r(A) = 2 \\)，而 \\( B = \\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 2 & 0 \\\\ -1 & 0 & 3 \\end{bmatrix} \\)，则 \\( r(AB) = \\) ______。",
    "options": null,
    "ans": "\\(2\\)",
    "fb": "\\(|B|=10\\neq0\\) 故 \\(B\\) 可逆；右乘可逆阵不改变矩阵的秩，所以 \\(r(AB)=r(A)=2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-mc-14",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 14,
    "stem": "设 \\( A \\) 是 \\( m \\times n \\) 矩阵，\\( B \\) 是 \\( n \\times m \\) 矩阵，则 ______。 (A) 当 \\( m > n \\) 时，必有行列式 \\( |AB| \\neq 0 \\) (B) 当 \\( m > n \\) 时，必有行列式 \\( |AB| = 0 \\) (C) 当 \\( n > m \\) 时，必有行列式 \\( |AB| \\neq 0 \\) (D) 当 \\( n > m \\) 时，必有行列式 \\( |AB| = 0 \\)",
    "options": [
      [
        "A",
        "当 m>n 时，必有行列式 |AB|≠0"
      ],
      [
        "B",
        "当 m>n 时，必有行列式 |AB|=0"
      ],
      [
        "C",
        "当 n>m 时，必有行列式 |AB|≠0"
      ],
      [
        "D",
        "当 n>m 时，必有行列式 |AB|=0"
      ]
    ],
    "ans": "B",
    "fb": "\\(AB\\) 为 \\(m\\) 阶方阵，其秩 \\(R(AB)\\le\\min\\{R(A),R(B)\\}\\le n\\)。当 \\(m>n\\) 时 \\(R(AB)\\le n<m\\)，故 \\(AB\\) 降秩，\\(|AB|=0\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-mc-15",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 15,
    "stem": "设 \\( A \\) 是 \\( m \\times n \\) 矩阵，\\( m < n \\)，则 ______。 (A) \\( |A^TA| \\neq 0 \\) (B) \\( |A^TA| = 0 \\) (C) \\( |AA^T| > 0 \\) (D) \\( |AA^T| < 0 \\)",
    "options": [
      [
        "A",
        "\\(|A^TA| \\neq 0\\)"
      ],
      [
        "B",
        "\\(|A^TA| = 0\\)"
      ],
      [
        "C",
        "\\(|AA^T| > 0\\)"
      ],
      [
        "D",
        "\\(|AA^T| < 0\\)"
      ]
    ],
    "ans": "B",
    "fb": "\\(A^TA\\) 为 \\(n\\) 阶方阵，且 \\(R(A^TA)=R(A)=m<n\\)，故 \\(A^TA\\) 奇异，\\(|A^TA|=0\\)。而 \\(AA^T\\) 为 \\(m\\) 阶，其行列式未必为零或定号。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-mc-16",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 16,
    "stem": "设 \\( A = \\begin{bmatrix} a & b & b \\\\ b & a & b \\\\ b & b & a \\end{bmatrix} \\)，\\( A \\) 的伴随矩阵的秩为 1，则有 ______。 (A) \\( a = b \\) 或 \\( a + 2b = 0 \\) (B) \\( a = b \\) 或 \\( a + 2b \\neq 0 \\) (C) \\( a \\neq b \\) 且 \\( a + 2b = 0 \\) (D) \\( a \\neq b \\) 且 \\( a + 2b \\neq 0 \\)",
    "options": [
      [
        "A",
        "a = b 或 a+2b=0"
      ],
      [
        "B",
        "a = b 或 a+2b≠0"
      ],
      [
        "C",
        "a≠b 且 a+2b=0"
      ],
      [
        "D",
        "a≠b 且 a+2b≠0"
      ]
    ],
    "ans": "C",
    "fb": "对三阶矩阵，伴随矩阵秩满足 \\(R(A^*)=3,2,0\\) 分别对应 \\(R(A)=3,2,\\le1\\)。已知 \\(R(A^*)=1\\)，故 \\(R(A)=2\\)。又 \\(|A|=(a+2b)(a-b)^2\\)，秩为 2 要求 \\(|A|=0\\) 且 \\(A\\) 非零，即 \\(a+2b=0\\) 且 \\(a\\ne b\\)（若 \\(a=b\\) 则 \\(A\\) 秩为 1）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-39",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 39,
    "stem": "设 \\( A, B \\) 为四阶方阵，\\( r(A) = 3, r(B) = 4 \\)，它们的伴随矩阵分别为 \\( A^*, B^* \\)，则 \\( r(A^*B^*) = \\) ______。",
    "options": null,
    "ans": "\\(1\\)",
    "fb": "\\(r(A)=3=n-1\\) 故 \\(r(A^*)=1\\)；\\(r(B)=4=n\\) 故 \\(B^*\\) 可逆；右乘可逆阵不改变秩，所以 \\(r(A^*B^*)=r(A^*)=1\\)。故应填 \\(1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-18",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 18,
    "stem": "设 \\( A \\) 是一个秩为 1 的 \\( n \\) 阶方阵，证明： (1) \\( A = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{bmatrix} (b_1, b_2, \\cdots, b_n) \\)； (2) \\( A^2 = kA \\)。",
    "options": null,
    "ans": null,
    "fb": "(1) 因为 \\( r(A) = 1 \\)，由矩阵的秩的定义，\\( A \\) 中一定有一个非零行向量，而其余行向量都是它的倍数。因此不妨设 \\( A = \\begin{bmatrix} a_1b_1 & a_1b_2 & \\cdots & a_1b_n \\\\ a_2b_1 & a_2b_2 & \\cdots & a_2b_n \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_nb_1 & a_nb_2 & \\cdots & a_nb_n \\end{bmatrix} \\)，从而 \\( A = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{bmatrix} (b_1, b_2, \\cdots, b_n) \\)。(2) 由 (1) 直接可得 \\( A^2 = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{bmatrix} (b_1, b_2, \\cdots, b_n) \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{bmatrix} (b_1, b_2, \\cdots, b_n) = \\left(\\sum_{i=1}^n a_ib_i\\right) A \\)。令 \\( k = \\sum_{i=1}^n a_ib_i \\)，则可得 \\( A^2 = kA \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-19",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 19,
    "stem": "设 \\( A \\) 是 \\( m \\times n \\) 矩阵，\\( B \\) 是 \\( n \\times m \\) 矩阵，证明：当 \\( m > n \\) 时，方阵 \\( C = AB \\) 不可逆。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( r(C) = r(AB) \\leq \\min\\{r(A), r(B)\\} \\leq \\min\\{m, n\\} \\)，但是 \\( m > n \\)，故 \\( \\min\\{m, n\\} = n \\)，从而对 \\( m \\) 阶方阵 \\( C \\) 来说，有 \\( r(C) \\leq \\min\\{m, n\\} < m \\)，即 \\( C = AB \\) 不可逆。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-20",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 20,
    "stem": "设 \\( A \\) 是二阶方阵，且 \\( A^2 = E \\)，但 \\( A \\neq \\pm E \\)，证明：\\( A + E \\) 与 \\( A - E \\) 的秩都是 1。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A^2 = E \\) 可得 \\( (A+E)(A-E) = 0 \\)，故二阶方阵 \\( A+E \\) 和 \\( A-E \\) 的秩只能是 0 或 1。但由于 \\( A \\neq \\pm E \\)，即 \\( A + E \\) 与 \\( A - E \\) 的秩都不是 0，从而它们的秩都只能是 1。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-21",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 21,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵，证明：若 \\( A^2 = E \\)，则 \\( r(A+E) + r(A-E) = n \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A^2 = E \\) 可得 \\( (A+E)(A-E) = 0 \\)。从而 \\( r(A+E) + r(A-E) \\leq n \\)。另一方面，有 \\( r(A+E) + r(A-E) \\geq r[(A+E) - (A-E)] = r(2E) = n \\)。故得 \\( r(A+E) + r(A-E) = n \\)。点评：熟练掌握并灵活运用矩阵的秩的常用公式和结论。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-22",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 22,
    "stem": "设 \\( A, B \\) 是 \\( m \\times n \\) 矩阵，则 \\( A, B \\) 等价的充要条件是 \\( r(A) = r(B) \\)。",
    "options": null,
    "ans": null,
    "fb": "必要性。设 \\( A, B \\) 等价，则存在可逆矩阵 \\( P, Q \\) 使 \\( PAQ = B \\)，所以 \\( r(A) = r(PAQ) = r(B) \\)。充分性。设 \\( r(A) = r(B) = r \\)，则存在可逆矩阵 \\( P_1, Q_1, P_2, Q_2 \\) 使 \\( P_1AQ_1 = \\begin{bmatrix} E_r & 0 \\\\ 0 & 0 \\end{bmatrix} \\) 且 \\( P_2BQ_2 = \\begin{bmatrix} E_r & 0 \\\\ 0 & 0 \\end{bmatrix} \\)，从而由 \\( P_1AQ_1 = P_2BQ_2 \\) 可得 \\( A, B \\) 等价。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-23",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 23,
    "stem": "设 \\( n \\) 阶方阵 \\( A, B \\) 满足 \\( A^2 = A, B^2 = B \\)，且 \\( E - A - B \\) 可逆，证明：\\( r(A) = r(B) \\)。",
    "options": null,
    "ans": null,
    "fb": "证法一：由 \\( E - A - B \\) 可逆，有 \\( n = r(E-A-B) \\leq r(E-A) + r(B) \\)，所以 \\( r(B) \\geq n - r(E-A) \\)。又由 \\( A^2 = A \\) 可得 \\( A(E-A) = 0 \\)，于是 \\( r(A) + r(E-A) \\leq n \\)，或 \\( r(A) \\leq n - r(E-A) \\)。从而 \\( r(B) \\geq n - r(E-A) \\geq r(A) \\)。同理可证 \\( r(A) \\geq r(B) \\)。所以 \\( r(A) = r(B) \\)。证法二：因为 \\( A(E-A-B) = A - A^2 - AB = -AB \\)，而 \\( E - A - B \\) 可逆，所以 \\( r(A) = r(AB) \\)，同理可证 \\( r(B) = r(AB) \\)。所以 \\( r(A) = r(B) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-40",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 40,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 0 \\\\ -1 & 2 & 1 & 0 & 0 \\\\ 1 & 1 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 & 1 \\end{bmatrix} \\)，矩阵 \\( B = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ -1 & 0 & 0 & 0 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 2 & 1 & 4 \\\\ 0 & 1 & 2 & 1 \\end{bmatrix} \\)，求 \\( AB \\)。",
    "options": null,
    "ans": "见解答。",
    "fb": "将 \\(B\\) 的每一列作为右端向量，逐列计算 \\(A\\) 乘该列即可得到 \\(AB\\)。故应填 见解答。",
    "pts": 5,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-fill-41",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 41,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 1 & 0 & 2 & 3 \\\\ 0 & 1 & 1 & 4 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & -1 \\end{bmatrix} \\), \\( B = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 6 & 3 & 1 & 2 \\\\ 0 & -2 & 2 & 0 \\end{bmatrix} \\), 求 \\( AB \\).",
    "options": null,
    "ans": "\\( AB = \\begin{bmatrix} 13 & 0 & 8 & 4 \\\\ 6 & -4 & 9 & 2 \\\\ 6 & 3 & 1 & 2 \\\\ 0 & 2 & -2 & 0 \\end{bmatrix} \\)",
    "fb": "按矩阵乘法直接计算 \\(AB\\) 的每一列（即 \\(A\\) 乘 \\(B\\) 的各列）即可。故应填 \\( AB = \\begin{bmatrix} 13 & 0 & 8 & 4 \\\\ 6 & -4 & 9 & 2 \\\\ 6 & 3 & 1 & 2 \\\\ 0 & 2 & -2 & 0 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-fill-42",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 42,
    "stem": "设 \\( A = \\begin{bmatrix} 3 & 1 & 0 & 0 \\\\ 0 & 3 & 0 & 0 \\\\ 0 & 0 & 3 & 9 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix} \\), 则 \\( A^n = \\) ______.",
    "options": null,
    "ans": "\\( A^n = \\begin{bmatrix} 3^n & n \\cdot 3^{n-1} & 0 & 0 \\\\ 0 & 3^n & 0 & 0 \\\\ 0 & 0 & 3 \\cdot 6^{n-1} & 9 \\cdot 6^{n-1} \\\\ 0 & 0 & 6^{n-1} & 3 \\cdot 6^{n-1} \\end{bmatrix} \\)",
    "fb": "将 \\(A\\) 分块为两个 \\(2\\times2\\) 块，每块形如 \\(aE+N\\)（\\(N\\) 幂零），利用二项式展开分别求幂后拼合。故应填 \\( A^n = \\begin{bmatrix} 3^n & n \\cdot 3^{n-1} & 0 & 0 \\\\ 0 & 3^n & 0 & 0 \\\\ 0 & 0 & 3 \\cdot 6^{n-1} & 9 \\cdot 6^{n-1} \\\\ 0 & 0 & 6^{n-1} & 3 \\cdot 6^{n-1} \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-mc-17",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 17,
    "stem": "设 \\( A, B \\) 为 \\( n \\) 阶矩阵, \\( A^*, B^* \\) 分别是 \\( A, B \\) 对应的伴随矩阵, 分块矩阵 \\( C = \\begin{bmatrix} A & 0 \\\\ 0 & B \\end{bmatrix} \\), 则 \\( C \\) 的伴随矩阵 \\( C^* = \\) ______.",
    "options": [
      [
        "A",
        "\\( \\begin{bmatrix} |A| A^* & 0 \\\\ 0 & |B| B^* \\end{bmatrix} \\)"
      ],
      [
        "B",
        "\\( \\begin{bmatrix} |B| B^* & 0 \\\\ 0 & |A| A^* \\end{bmatrix} \\)"
      ],
      [
        "C",
        "\\( \\begin{bmatrix} |A| B^* & 0 \\\\ 0 & |B| A^* \\end{bmatrix} \\)"
      ],
      [
        "D",
        "\\( \\begin{bmatrix} |B| A^* & 0 \\\\ 0 & |A| B^* \\end{bmatrix} \\)"
      ]
    ],
    "ans": "D",
    "fb": "分块对角阵 \\(C=\\begin{pmatrix}A&0\\\\0&B\\end{pmatrix}\\)，有 \\(|C|=|A||B|\\)，\\(C^{-1}=\\begin{pmatrix}A^{-1}&0\\\\0&B^{-1}\\end{pmatrix}\\)，故 \\(C^*=|C|C^{-1}=\\begin{pmatrix}|A||B|A^{-1}&0\\\\0&|A||B|B^{-1}\\end{pmatrix}=\\begin{pmatrix}|B|A^*&0\\\\0&|A|B^*\\end{pmatrix}\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-fill-43",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 43,
    "stem": "设四阶方阵 \\( A = \\begin{bmatrix} 5 & 2 & 0 & 0 \\\\ 2 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & -2 \\\\ 0 & 0 & 1 & 1 \\end{bmatrix} \\), 则 \\( A^{-1} = \\) ______.",
    "options": null,
    "ans": "\\( A^{-1} = \\begin{bmatrix} 1 & -2 & 0 & 0 \\\\ -2 & 5 & 0 & 0 \\\\ 0 & 0 & \\frac{1}{3} & \\frac{2}{3} \\\\ 0 & 0 & -\\frac{1}{3} & \\frac{1}{3} \\end{bmatrix} \\)",
    "fb": "\\(A\\) 为准对角阵，分块求逆（各对角块分别求逆）即可。故应填 \\( A^{-1} = \\begin{bmatrix} 1 & -2 & 0 & 0 \\\\ -2 & 5 & 0 & 0 \\\\ 0 & 0 & \\frac{1}{3} & \\frac{2}{3} \\\\ 0 & 0 & -\\frac{1}{3} & \\frac{1}{3} \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-calc-7",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 7,
    "stem": "设 \\( n \\) 阶方阵 \\( A = \\begin{bmatrix} 0 & a_1 & 0 & \\cdots & 0 \\\\ 0 & 0 & a_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & 0 & \\cdots & a_{n-1} \\\\ a_n & 0 & 0 & \\cdots & 0 \\end{bmatrix} \\), 其中 \\( a_i \\neq 0, i = 1, 2, \\cdots, n \\), 求 \\( A \\) 的逆矩阵.",
    "options": null,
    "ans": null,
    "fb": "令 \\( A = \\begin{bmatrix} 0 & B \\\\ C & 0 \\end{bmatrix} \\), 其中 \\( B = \\begin{bmatrix} a_1 & 0 & \\cdots & 0 \\\\ 0 & a_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & \\cdots & a_{n-1} \\end{bmatrix} \\), \\( C = [a_n] \\). 则 \\( C^{-1} = \\left[ \\frac{1}{a_n} \\right] \\), \\( B^{-1} = \\begin{bmatrix} \\frac{1}{a_1} & 0 & \\cdots & 0 \\\\ 0 & \\frac{1}{a_2} & \\cdots & 0 \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & \\cdots & \\frac{1}{a_{n-1}} \\end{bmatrix} \\). 又 \\( \\begin{bmatrix} 0 & B \\\\ C & 0 \\end{bmatrix}^{-1} = \\begin{bmatrix} 0 & C^{-1} \\\\ B^{-1} & 0 \\end{bmatrix} \\), 故 \\( A^{-1} = \\begin{bmatrix} 0 & 0 & 0 & \\cdots & 0 & \\frac{1}{a_n} \\\\ \\frac{1}{a_1} & 0 & 0 & \\cdots & 0 & 0 \\\\ 0 & \\frac{1}{a_2} & 0 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & \\frac{1}{a_{n-1}} & 0 \\end{bmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-calc-8",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 8,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 0 & 0 & 0 & \\cdots & 0 & a_1 \\\\ 0 & 0 & 0 & \\cdots & a_2 & 0 \\\\ \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_{n-1} & 0 & 0 & \\cdots & 0 & 0 \\\\ 0 & 0 & 0 & \\cdots & 0 & a_n \\end{bmatrix} \\), 其中 \\( a_i \\neq 0, i = 1, 2, \\cdots, n \\), 求 \\( A \\) 的逆矩阵.",
    "options": null,
    "ans": null,
    "fb": "令 \\( A = \\begin{bmatrix} B & 0 \\\\ 0 & C \\end{bmatrix} \\), 其中 \\( B = \\begin{bmatrix} 0 & 0 & \\cdots & 0 & a_1 \\\\ 0 & 0 & \\cdots & a_2 & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ a_{n-1} & 0 & \\cdots & 0 & 0 \\end{bmatrix} \\), \\( C = [a_n] \\). 所以 \\( A^{-1} = \\begin{bmatrix} B^{-1} & 0 \\\\ 0 & C^{-1} \\end{bmatrix} \\), 其中 \\( B^{-1} = \\begin{bmatrix} \\frac{1}{a_{n-1}} \\\\ & \\frac{1}{a_{n-2}} \\\\ && \\ddots \\\\ &&& \\frac{1}{a_1} \\end{bmatrix} \\), \\( C^{-1} = \\left[ \\frac{1}{a_n} \\right] \\). 从而 \\( A^{-1} = \\begin{bmatrix} 0 & 0 & \\cdots & 0 & \\frac{1}{a_{n-1}} \\\\ 0 & 0 & \\cdots & \\frac{1}{a_{n-2}} & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ \\frac{1}{a_1} & 0 & \\cdots & 0 & 0 \\\\ 0 & 0 & \\cdots & 0 & \\frac{1}{a_n} \\end{bmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-44",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 44,
    "stem": "解矩阵方程 \\( \\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix} X = \\begin{bmatrix} 4 & -1 & 2 \\\\ 3 & 0 & -1 \\end{bmatrix} \\).",
    "options": null,
    "ans": "\\( X = \\begin{bmatrix} -7 & -2 & 9 \\\\ 5 & 1 & -5 \\end{bmatrix} \\)",
    "fb": "由 \\(X=M^{-1}\\text{RHS}\\)，其中 \\(M=\\begin{pmatrix}3&5\\\\1&2\\end{pmatrix}\\)，\\(M^{-1}=\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}\\)，相乘即得。故应填 \\( X = \\begin{bmatrix} -7 & -2 & 9 \\\\ 5 & 1 & -5 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-45",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 45,
    "stem": "解矩阵方程 \\( X \\begin{bmatrix} 1 & 0 & 5 \\\\ 1 & 1 & 2 \\\\ 1 & 2 & 5 \\end{bmatrix} = \\begin{bmatrix} 1 & 1 & 2 \\\\ 0 & 0 & -6 \\end{bmatrix} \\).",
    "options": null,
    "ans": "\\( X = \\begin{bmatrix} 0 & 1 & 0 \\\\ -1 & 2 & -1 \\end{bmatrix} \\)",
    "fb": "方程形如 \\(XM=N\\)，故 \\(X=NM^{-1}\\)；算出 \\(M^{-1}\\) 后相乘即可。故应填 \\( X = \\begin{bmatrix} 0 & 1 & 0 \\\\ -1 & 2 & -1 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-46",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 46,
    "stem": "解矩阵方程 \\( \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} X \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & -4 & 3 \\\\ 2 & 0 & -1 \\\\ 1 & -2 & 0 \\end{bmatrix} \\).",
    "options": null,
    "ans": "\\( X = \\begin{bmatrix} 2 & -1 & 0 \\\\ 1 & 3 & -4 \\\\ 1 & 0 & -2 \\end{bmatrix} \\)",
    "fb": "记左、右初等矩阵为 \\(P,Q\\)，则 \\(X=P^{-1}CQ^{-1}=PCQ\\)（二者皆对合），即先交换 \\(C\\) 的 1、2 行，再交换所得结果的 2、3 列。故应填 \\( X = \\begin{bmatrix} 2 & -1 & 0 \\\\ 1 & 3 & -4 \\\\ 1 & 0 & -2 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-47",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 47,
    "stem": "已知 \\( A = \\begin{bmatrix} 1 & 1 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & -1 \\end{bmatrix} \\), 且 \\( A^2 - AB = E \\), 其中 \\( E \\) 是三阶单位矩阵, 求矩阵 \\( B \\).",
    "options": null,
    "ans": "\\( B = \\begin{bmatrix} 0 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\)",
    "fb": "由 \\(A^2-AB=E\\) 得 \\(A(A-B)=E\\)，故 \\(A-B=A^{-1}\\)，即 \\(B=A-A^{-1}\\)。故应填 \\( B = \\begin{bmatrix} 0 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-48",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 48,
    "stem": "设矩阵 \\( A, B \\) 满足 \\( A^* B A = 2 B A - 8 E \\), 其中 \\( A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\), \\( E \\) 为单位矩阵, \\( A^* \\) 为 \\( A \\) 的伴随矩阵. 求 \\( B \\).",
    "options": null,
    "ans": "\\( B = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\)",
    "fb": "由 \\(A^*BA=2BA-8E\\) 整理为 \\((A^*-2E)BA=-8E\\)，解出 \\(B=(A^*-2E)^{-1}(-8E)A^{-1}\\)，逐对角元计算即可。故应填 \\( B = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-24",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 24,
    "stem": "设 \\( n \\) 阶矩阵 \\( A \\) 和 \\( B \\) 满足条件 \\( A + B = AB \\). (1) 证明 \\( A - E \\) 为可逆矩阵; (2) 已知 \\( B = \\begin{bmatrix} 1 & -3 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\), 求矩阵 \\( A \\).",
    "options": null,
    "ans": null,
    "fb": "(1) 由 \\( A + B = AB \\), 有 \\( A - E - (A - E) B = -E \\), 即 \\( -(A - E)(E - B) = E \\). 由逆矩阵的定义知, \\( A - E \\) 可逆. (2) 方法一: 由 (1) 有 \\( A - E = (B - E)^{-1} \\), 所以 \\( A = E + (B - E)^{-1} = E + \\begin{bmatrix} 0 & -3 & 0 \\\\ 2 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}^{-1} = E + \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} + \\begin{bmatrix} 0 & \\frac{1}{2} & 0 \\\\ -\\frac{1}{3} & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & \\frac{1}{2} & 0 \\\\ -\\frac{1}{3} & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\). 方法二: 由 \\( A + B = AB \\), 有 \\( A(B - E) = B \\). 由 (1) 已证 \\( A - E \\) 可逆, 同理 \\( B - E \\) 也可逆, 所以 \\( A = B (B - E)^{-1} = \\begin{bmatrix} 1 & -3 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\begin{bmatrix} 0 & -3 & 0 \\\\ 2 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}^{-1} = \\begin{bmatrix} 1 & \\frac{1}{2} & 0 \\\\ -\\frac{1}{3} & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\). 点评: 在求 \\( (B - E)^{-1} \\) 时用了分块矩阵求逆的公式.",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-49",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 49,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶对称阵, 且 \\( A \\) 可逆, 并满足 \\( (A - B)^2 = E \\), 化简: \\( (E + A^{-1} B^T)^T (E - B A^{-1})^{-1} \\).",
    "options": null,
    "ans": "\\( (A + B)(A - B) \\)",
    "fb": "利用 \\(A\\) 对称知 \\(A^{-1}\\) 亦对称：\\((E+A^{-1}B^T)^T=E+BA^{-1}=(A+B)A^{-1}\\)；又 \\(E-BA^{-1}=(A-B)A^{-1}\\)，故原式 \\(=(A+B)A^{-1}\\cdot A(A-B)=(A+B)(A-B)\\)。故应填 \\( (A + B)(A - B) \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-25",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 25,
    "stem": "设 \\( A, B \\) 为 \\( n \\) 阶方阵, 且 \\( B = E + AB \\), 证明: \\( A, B \\) 乘法可交换.",
    "options": null,
    "ans": null,
    "fb": "由 \\( B = E + AB \\), 得 \\( (E - A) B = E \\), 所以 \\( E - A \\) 与 \\( B \\) 互为逆矩阵, 从而 \\( B (E - A) = E \\), 即 \\( B - BA = E \\). 又 \\( B = E + AB \\), 所以 \\( AB = BA \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-50",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 50,
    "stem": "设 \\( n \\) 维向量 \\( \\alpha = (\\alpha, 0, \\cdots, 0, \\alpha)^T, \\alpha < 0, A = E - \\alpha \\alpha^T, B = E + \\frac{1}{\\alpha} \\alpha \\alpha^T \\), 其中 \\( A, B \\) 互为逆矩阵, 则 \\( \\alpha = \\) ______.",
    "options": null,
    "ans": "\\( \\alpha = -1 \\)",
    "fb": "由 \\(AB=E\\) 展开得 \\(E+(\\tfrac1\\alpha-1-2\\alpha)\\alpha\\alpha^T=E\\)，故 \\(\\tfrac1\\alpha-1-2\\alpha=0\\)，即 \\(2\\alpha^2+\\alpha-1=0\\)；结合 \\(\\alpha<0\\) 得 \\(\\alpha=-1\\)。故应填 \\( \\alpha = -1 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-51",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 51,
    "stem": "已知 \\( \\alpha_1, \\alpha_2 \\) 为二维列向量, 矩阵 \\( A = (2\\alpha_1 + \\alpha_2, \\alpha_1 - \\alpha_2), B = (\\alpha_1, \\alpha_2) \\), 若行列式 \\( |A| = 6 \\), 则 \\( |B| = \\) ______.",
    "options": null,
    "ans": "\\( -2 \\)",
    "fb": "\\(|A|=\\det(2\\alpha_1+\\alpha_2,\\ \\alpha_1-\\alpha_2)\\)，用列的多线性拆开得 \\(|A|=-3|B|\\)，故 \\(|B|=-2\\)。故应填 \\( -2 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-calc-9",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 9,
    "stem": "已知 \\( A = \\begin{bmatrix} \\lambda & 0 & 0 \\\\ 1 & \\lambda & 0 \\\\ 0 & 1 & \\lambda \\end{bmatrix} \\), 试求 \\( A^n \\).",
    "options": null,
    "ans": null,
    "fb": "设 \\( B = \\begin{bmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix} \\), 于是 \\( A = \\lambda E + B \\). 因为 \\( (\\lambda E) B = B (\\lambda E), B^3 = 0 \\), 所以 \\( A^n = (\\lambda E + B)^n = \\sum_{k=0}^{n} C_n^k (\\lambda E)^{n-k} B^k = \\lambda^n E + n \\lambda^{n-1} B + \\frac{n(n-1)}{2} \\lambda^{n-2} B^2 = \\begin{bmatrix} \\lambda^n & 0 & 0 \\\\ n \\lambda^{n-1} & \\lambda^n & 0 \\\\ \\frac{n(n-1)}{2} \\lambda^{n-2} & n \\lambda^{n-1} & \\lambda^n \\end{bmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-fill-52",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 52,
    "stem": "已知 \\( AP = PB \\), 其中 \\( B = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}, P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ 2 & 1 & 1 \\end{bmatrix} \\). 求 \\( A \\) 及 \\( A^n \\), 其中 \\( n \\) 是正整数.",
    "options": null,
    "ans": "\\( A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 6 & -1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix} \\); \\( A^n = \\begin{cases} E, & 当 n 为偶数时 \\\\ A, & 当 n 为奇数时 \\end{cases} \\)",
    "fb": "由 \\(AP=PB\\) 得 \\(A=PBP^{-1}\\)，计算 \\(P^{-1}\\) 后得 \\(A\\)；进一步算得 \\(A^2=E\\)，故 \\(A^n\\) 按奇偶分别等于 \\(E\\) 与 \\(A\\)。故应填 \\( A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 6 & -1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix} \\); \\( A^n = \\begin{cases} E, & 当 n 为偶数时 \\\\ A, & 当 n 为奇数时 \\end{cases} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-calc-10",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 10,
    "stem": "已知 \\( A = \\begin{bmatrix} 2 & 4 & 0 & 0 \\\\ 1 & 2 & 0 & 0 \\\\ 0 & 0 & 2 & 4 \\\\ 0 & 0 & 1 & 2 \\end{bmatrix} \\), 求 \\( A^n \\).",
    "options": null,
    "ans": null,
    "fb": "将 \\( A \\) 分块为 \\( A = \\begin{bmatrix} B & 0 \\\\ 0 & C \\end{bmatrix} \\), 其中 \\( B = \\begin{bmatrix} 2 & 4 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} (1, 2), C = \\begin{bmatrix} 2 & 4 \\\\ 0 & 2 \\end{bmatrix} = 2E + \\begin{bmatrix} 0 & 4 \\\\ 0 & 0 \\end{bmatrix} \\). 易知 \\( B^n = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}(1, 2) \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}(1, 2) \\cdots \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}(1, 2) = 4^{n-1} B \\). 由 \\( \\begin{bmatrix} 0 & 4 \\\\ 0 & 0 \\end{bmatrix}^2 = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} \\), 得 \\( C^n = (2E + \\begin{bmatrix} 0 & 4 \\\\ 0 & 0 \\end{bmatrix})^n = 2^n E + n (2E)^{n-1} \\begin{bmatrix} 0 & 4 \\\\ 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 2^n & 4n \\cdot 2^{n-1} \\\\ 0 & 2^n \\end{bmatrix} = \\begin{bmatrix} 2^n & n \\cdot 2^{n+1} \\\\ 0 & 2^n \\end{bmatrix} \\). 所以 \\( A^n = \\begin{bmatrix} B^n & 0 \\\\ 0 & C^n \\end{bmatrix} = \\begin{bmatrix} 2 \\cdot 4^{n-1} & 4^n & 0 & 0 \\\\ 4^{n-1} & 2 \\cdot 4^{n-1} & 0 & 0 \\\\ 0 & 0 & 2^n & n \\cdot 2^{n+1} \\\\ 0 & 0 & 2^{n-1} & 2^n \\end{bmatrix} = \\begin{bmatrix} 2^{2n-1} & 2^{2n} & 0 & 0 \\\\ 2^{2n-2} & 2^{2n-1} & 0 & 0 \\\\ 0 & 0 & 2^n & n \\cdot 2^{n+1} \\\\ 0 & 0 & 2^{n-1} & 2^n \\end{bmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-mc-18",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 18,
    "stem": "设 \\( A \\) 为 \\( n(n\\geqslant 2) \\) 阶可逆矩阵，交换 \\( A \\) 的第一行与第二行得矩阵 \\( B,A^{*},B^{*} \\) 分别为 \\( A, B \\) 的伴随矩阵，则______。",
    "options": [
      [
        "A",
        "交换 \\( A^{*} \\) 的第一列与第二列得 \\( B^{*} \\)"
      ],
      [
        "B",
        "交换 \\( A^{*} \\) 的第一行与第二行得 \\( B^{*} \\)"
      ],
      [
        "C",
        "交换 \\( A^{*} \\) 的第一列与第二列得 \\(-B^{*}\\)"
      ],
      [
        "D",
        "交换 \\( A^{*} \\) 的第一行与第二行得 \\(-B^{*}\\)"
      ]
    ],
    "ans": "C",
    "fb": "设交换 1,2 行的初等矩阵为 \\(P\\)，则 \\(B=PA\\)，\\(|B|=-|A|\\)。\\(B^*=|B|B^{-1}=(-|A|)(A^{-1}P^{-1})=-|A|A^{-1}P^{-1}=-A^*P\\)（\\(P^{-1}=P\\)）。右乘 \\(P\\) 即交换 \\(A^*\\) 的 1,2 列，故交换 \\(A^*\\) 的第 1、2 列得 \\(-B^*\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-19",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 19,
    "stem": "设 \\( A,P \\) 均为三阶矩阵，\\( P^{T} \\) 为 \\( P \\) 的转置矩阵，且 \\( P^{T}AP=\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\)。若 \\( P=(\\alpha_{1},\\alpha_{2},\\alpha_{3}),Q=(\\alpha_{1}+\\alpha_{2},\\alpha_{2},\\alpha_{3}) \\)，则 \\( Q^{T}AQ \\) 为______。",
    "options": [
      [
        "A",
        "\\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}"
      ],
      [
        "B",
        "\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}"
      ],
      [
        "C",
        "\\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}"
      ],
      [
        "D",
        "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}"
      ]
    ],
    "ans": "A",
    "fb": "\\(Q=(\\alpha_1+\\alpha_2,\\alpha_2,\\alpha_3)=P\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&0&1\\end{pmatrix}=PM\\)，其中 \\(M=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&0&1\\end{pmatrix}\\)。于是 \\(Q^TAQ=M^TP^TAPM=M^T\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}M=\\begin{pmatrix}2&1&0\\\\1&1&0\\\\0&0&2\\end{pmatrix}\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-fill-53",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 53,
    "stem": "当初等矩阵 \\( A=\\)______，\\( B=\\)______ 时，有 \\( A\\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}B=\\begin{bmatrix} 0 & 1 & 2 \\\\ 1 & 2 & 3 \\end{bmatrix} \\) 成立。",
    "options": null,
    "ans": "\\( A=\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, B=\\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\)",
    "fb": "右乘 \\(B\\) 实现列交换、左乘 \\(A\\) 实现行变换；比较等式两侧可知只需交换第 1、3 列，故 \\(A\\) 为单位阵、\\(B\\) 为交换 1、3 列的初等矩阵。故应填 \\( A=\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, B=\\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-mc-20",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 20,
    "stem": "设 \\( A,B \\) 均为二阶矩阵，\\( A^{*},B^{*} \\) 分别为 \\( A,B \\) 的伴随矩阵，若 \\( |A|=2,|B|=3 \\)，则分块矩阵 \\( \\begin{bmatrix} O & A^{*} \\\\ B & O \\end{bmatrix} \\) 的伴随矩阵为______。",
    "options": [
      [
        "A",
        "\\begin{bmatrix} O & 3B^{*} \\\\ 2A^{*} & O \\end{bmatrix}"
      ],
      [
        "B",
        "\\begin{bmatrix} O & 2B^{*} \\\\ 3A^{*} & O \\end{bmatrix}"
      ],
      [
        "C",
        "\\begin{bmatrix} O & 3A^{*} \\\\ 2B^{*} & O \\end{bmatrix}"
      ],
      [
        "D",
        "\\begin{bmatrix} O & 2A^{*} \\\\ 3B^{*} & O \\end{bmatrix}"
      ]
    ],
    "ans": "B",
    "fb": "记分块矩阵 \\(M=\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}\\)（\\(A,B\\) 二阶，\\(|A|=2,|B|=3\\)），则 \\(|M|=|A||B|=6\\)，\\(M^{-1}=\\begin{pmatrix}O&B^{-1}\\\\A^{-1}&O\\end{pmatrix}\\)，故 \\(M^*=6M^{-1}=\\begin{pmatrix}O&6B^{-1}\\\\6A^{-1}&O\\end{pmatrix}=\\begin{pmatrix}O&2B^*\\\\3A^*&O\\end{pmatrix}\\)（用到 \\(B^{-1}=B^*/|B|\\)，\\(A^{-1}=A^*/|A|\\)）。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-fill-54",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 54,
    "stem": "设 \\( ABA=C \\)，其中 \\( A=\\begin{bmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 3 \\\\ 0 & 1 & -1 \\end{bmatrix}, C=\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\)，求 \\( B \\) 的伴随矩阵 \\( B^{*} \\)。",
    "options": null,
    "ans": "\\( B^{*}=\\dfrac{1}{16}\\begin{bmatrix} 1 & -1 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 0 & 4 \\end{bmatrix} \\)",
    "fb": "由 \\(ABA=C\\) 得 \\(B=A^{-1}CA^{-1}\\)，于是 \\(|B|=|C|/|A|^2=1/16\\)，且 \\(B^{-1}=AC^{-1}A\\)（\\(C^{-1}\\) 易求），再乘 \\(|B|\\) 即得其伴随 \\(B^*\\)。故应填 \\( B^{*}=\\dfrac{1}{16}\\begin{bmatrix} 1 & -1 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 0 & 4 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-55",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 55,
    "stem": "设 \\( |A|=\\begin{vmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & \\frac{1}{2} & 0 \\\\ 0 & 0 & 0 & \\frac{1}{3} \\\\ \\frac{1}{4} & 0 & 0 & 0 \\end{vmatrix} \\)，那么行列式 \\( |A| \\) 所有元素的代数余子式之和为______。",
    "options": null,
    "ans": "\\(-\\dfrac{5}{12}\\)",
    "fb": "所有代数余子式之和等于伴随阵 \\(A^*\\) 的全部元素之和，而 \\(A^*=|A|A^{-1}\\)；先算得 \\(|A|=-1/24\\)，再求 \\(A^{-1}\\) 全部元素之和为 10，故结果为 \\((-1/24)\\cdot10=-5/12\\)。故应填 \\(-\\dfrac{5}{12}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-26",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 26,
    "stem": "试求满足 \\( A^{*}=A \\) 的一切 \\( n \\) 阶方阵 \\( A \\)。",
    "options": null,
    "ans": null,
    "fb": "若 \\( A=O \\)，则 \\( A^{*}=O \\)，当然有 \\( A^{*}=A \\)。若 \\( 0<r(A)<n-1 \\)，则 \\( r(A^{*})=0 \\)，即 \\( A^{*}=O \\neq A \\)。若 \\( r(A)=n-1 \\)，则 \\( r(A^{*})=1 \\)，当 \\( n\\geqslant 2 \\) 时，显然 \\( A^{*}\\neq A \\)；当 \\( n=2 \\) 时，令 \\( A=\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\)，\\( A^{*}=\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} \\)。此时亦有 \\( A^{*}\\neq A \\)；因若 \\( A^{*}=A \\)，则得 \\( a=d, b=c=0 \\)，于是 \\( A=\\begin{bmatrix} a & 0 \\\\ 0 & a \\end{bmatrix} \\) 这与 \\( r(A)=1 \\) 矛盾，故 \\( A^{*}\\neq A \\)。若 \\( r(A)=n \\)，则 \\( r(A^{*})=n \\)。于是 \\( A^{*}=|A|A^{-1}=A\\Leftrightarrow A^{2}=|A|E \\)。综上可得，满足 \\( A^{*}=A \\) 的方阵是：零方阵及适合 \\( A^{2}=|A|E \\) 的所有可逆方阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-27",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 27,
    "stem": "试求满足 \\( (A^{*})^{*}=A \\) 的一切 \\( n \\) 阶方阵 \\( A \\)。",
    "options": null,
    "ans": null,
    "fb": "对任一 \\( n \\) 阶方阵 \\( A \\) 有 \\( (A^{*})^{*}=|A|^{n-2}A \\)。因此 \\( (A^{*})^{*}=A \\) 的充分必要条件是 \\( |A|^{n-2}A=A \\)），或即 \\( (|A|^{n-2}-1)A=0 \\)，即 \\( A=O \\) 或 \\( |A|^{n-2}=1 \\)。因为 \\( n=2 \\) 时总有 \\( |A|^{n-2}=1 \\)，所以满足 \\( (A^{*})^{*}=A \\) 的矩阵是零矩阵、一切二阶方阵及满足 \\( |A|^{n-2}=1 \\) 的 \\( n(n\\geqslant 2) \\) 阶方阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-28",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 28,
    "stem": "设 \\( A,B \\) 均为幂等矩阵，则 \\( A+B \\) 是幂等矩阵的充要条件是 \\( AB=BA=0 \\)。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A^{2}=A,B^{2}=B \\)，所以有 \\[ (A+B)^{2}=A^{2}+AB+BA+B^{2}=A+AB+BA+B. \\tag{1} \\] 设 \\( AB=BA=0 \\)，则显然 \\( (A+B)^{2}=A+B \\)，即 \\( A+B \\) 是幂等矩阵。反之，设 \\( (A+B)^{2}=A+B \\)，则由 (1) 式有 \\( AB+BA=0 \\)），或即 \\( AB=-BA \\)。由此又得 \\( AB=A^{2}B=A(AB)=A(-BA)=-(AB)A=(-BA)A=BA^{2}=BA \\)）。与 (2) 式比较，得 \\( BA=-BA \\)，因此 \\( BA=AB=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s22"
  },
  {
    "id": "c2-jx-proof-29",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 29,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶反对称阵，若 \\( n \\) 为奇数，则 \\( A^{*} \\) 是对称阵；若 \\( n \\) 为偶数，则 \\( A^{*} \\) 是反对称阵。",
    "options": null,
    "ans": null,
    "fb": "由题设 \\( A^{T}=-A \\)，所以 \\( (A^{*})^{*}=(-A)^{*} \\)。又因为 \\( (A^{*})^{*}=(A^{*})^{T} \\)，\\( (-A)^{*}=(-1)^{n-1}A^{*} \\)，所以 \\( (A^{*})^{T}=(-1)^{n-1}A^{*} \\)。从而当 \\( n \\) 为奇数时，\\( (A^{*})^{T}=A^{*} \\) 为对称阵；当 \\( n \\) 为偶数时，\\( (A^{*})^{T}=-A^{*} \\) 为反对称阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-30",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 30,
    "stem": "设 \\( A,B \\) 都是 \\( n \\) 阶对称矩阵，且 \\( A,E+AB \\) 都是可逆的，证明 \\( (E+AB)^{-1}A \\) 为对称矩阵。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A,B \\) 都是对称矩阵，所以 \\[ [(E+AB)^{-1}A]^{T}=A^{T}[(E+AB)^{-1}]^{T}=A[(E+BA)^{-1}]^{T} \\\\ =A^{T}(E+BA)^{-1}=[(E+BA)A]^{-1}=(A^{T}+B)^{-1} \\] 故 \\( (E+AB)^{-1}A \\) 是对称矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-31",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 31,
    "stem": "设 \\( P \\) 是 \\( m\\times n \\) 矩阵，\\( PP^{T} \\) 可逆，且 \\( A=E-P^{T}(PP^{T})^{-1}P \\)，其中 \\( E \\) 是 \\( n \\) 阶单位矩阵；证明 \\( A \\) 是对称矩阵，且 \\( A^{2}=A \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A \\) 的表示式，得 \\[ A^{T}=[E-P^{T}(PP^{T})^{-1}P]^{T}=E-[P^{T}(PP^{T})^{-1}]^{T}P^{T}=E-P^{T}[(PP^{T})^{-1}]^{T}P \\] 故 \\( A^{T}=E-P^{T}[(PP^{T})^{-1}]^{T}P=E-P^{T}(PP^{T})^{-1}P=A \\)），所以 \\( A \\) 是对称矩阵，且 \\[ A^{2}=[E-P^{T}(PP^{T})^{-1}P][E-P^{T}(PP^{T})^{-1}P] \\\\ =E-2P^{T}(PP^{T})^{-1}P+P^{T}(PP^{T})^{-1}PP^{T}(PP^{T})^{-1}P \\\\ =E-2P^{T}(PP^{T})^{-1}P+P^{T}(PP^{T})^{-1}P=E-P^{T}(PP^{T})^{-1}P=A. \\]",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-32",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 32,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶方阵，\\( E+A \\) 可逆，其中 \\( E \\) 是 \\( n \\) 阶单位矩阵，证明：(1)\\( (E-A)(E+A)^{-1}=(E+A)^{-1}(E-A) \\)；(2)若 \\( A \\) 是反对称矩阵，则 \\( (E-A)(E+A)^{-1} \\) 是正交矩阵；(3)若 \\( A \\) 是正交矩阵，则 \\( (E-A)(E+A)^{-1} \\) 是反对称矩阵。",
    "options": null,
    "ans": null,
    "fb": "证 (1)因为 \\( (E-A)(E+A)=E-A^{2}=(E+A)(E-A) \\)，所以上式两边分别左、右乘 \\( (E+A)^{-1} \\)，得 \\( (E+A)^{-1}(E-A)=(E-A)(E+A)^{-1} \\)）。  (2)由 \\( A^{T}=-A \\)，得 \\[ [(E-A)(E+A)^{-1}]^{T}[(E-A)(E+A)^{-1}] \\\\ =(E+A)^{T}[(E-A)^{-1}]^{T}(E-A)^{T} \\] 由 (1)知，\\( (E-A)(E+A)^{-1}=(E+A)^{-1}(E-A) \\)），故被截 \\( (E+A)^{-1} \\) 是正交矩阵。  (3)因 \\( AA^{T}=A^{T}A=E \\)，得 \\[ [(E-A)(E+A)^{-1}]^{T}=(E+A^{T})^{-1}(E-A^{T})=((E+A^{T})^{-1}(E-A^{T})) \\\\ =(E+A^{T})^{-1}(E-A^{T})=(E+A^{-1})^{-1}(E-A^{-1}) \\\\ =[A(E+A)]^{-1}[E-A]=(A+E)^{-1}A(E-A) \\] 由 (1)知，\\( -(A+E)^{-1}(E-A)=-(E-A)(A+E)^{-1} \\)），故 \\( (E-A)(A+E)^{-1} \\) 是反对称矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-56",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 56,
    "stem": "设 \\( A,B \\) 均为三阶矩阵，\\( E \\) 是三阶单位矩阵，已知 \\( AB=2A+B,B=\\begin{bmatrix} 2 & 0 & 2 \\\\ 0 & 4 & 0 \\\\ 2 & 0 & 2 \\end{bmatrix} \\)，则 \\( (A-E)^{-1}=\\)______。",
    "options": null,
    "ans": "\\( \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\)",
    "fb": "由 \\(AB=2A+B\\) 化为 \\(A(B-2E)=B\\)，故 \\(A-E=2(B-2E)^{-1}\\)，从而 \\((A-E)^{-1}=\\tfrac12(B-2E)\\)。故应填 \\( \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-57",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 57,
    "stem": "如果矩阵 \\( A=\\begin{bmatrix} 1 & x & x & x \\\\ x & 4 & 0 & 0 \\\\ x & 0 & 4 & 0 \\\\ x & 0 & 0 & 4 \\end{bmatrix} \\) 是不可逆的，则 \\( x=\\)______。",
    "options": null,
    "ans": "\\( \\pm\\dfrac{2\\sqrt{3}}{3} \\)",
    "fb": "用分块行列式（Schur 补）：\\(\\det A=(1-\\tfrac{3x^2}{4})\\cdot 4^3\\)，令其为零解得 \\(x=\\pm\\tfrac{2\\sqrt3}{3}\\)。故应填 \\( \\pm\\dfrac{2\\sqrt{3}}{3} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-58",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 58,
    "stem": "已知 \\( A,B \\) 为三阶矩阵，且满足 \\( 2A^{-1}B=B-4E \\)，其中 \\( E \\) 是三阶单位矩阵。(1)证明矩阵 \\( A-2E \\) 可逆；(2)若 \\( B=\\begin{bmatrix} 1 & -2 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\)，求矩阵 \\( A \\)。",
    "options": null,
    "ans": "(1) \\( A-2E \\) 可逆，且 \\( (A-2E)^{-1}=\\frac{1}{8}(B-4E) \\)；(2) \\( A=\\begin{bmatrix} 0 & 2 & 0 \\\\ -1 & -1 & 0 \\\\ 0 & 0 & -2 \\end{bmatrix} \\)",
    "fb": "由 \\(2A^{-1}B=B-4E\\) 左乘 \\(A\\) 得 \\(2B=AB-4A\\)，整理为 \\((A-2E)A^{-1}B=4E\\)，故 \\(A-2E\\) 可逆且 \\((A-2E)^{-1}=\\tfrac18(B-4E)\\)；再由 \\(A=2B(B-4E)^{-1}\\) 计算可得 \\(A\\)。故应填 (1) \\( A-2E \\) 可逆，且 \\( (A-2E)^{-1}=\\frac{1}{8}(B-4E) \\)；(2) \\( A=\\begin{bmatrix} 0 & 2 & 0 \\\\ -1 & -1 & 0 \\\\ 0 & 0 & -2 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-33",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 33,
    "stem": "设 \\( n \\) 阶矩阵 \\( A,B,A+B \\) 都是可逆矩阵，证明 \\( A^{-1}+B^{-1} \\) 可逆，并给出其逆矩阵的表达式。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A^{-1}+B^{-1}=A^{-1}E+EB^{-1}=A^{-1}BB^{-1}+A^{-1}AB^{-1} \\\\ =A^{-1}(B+A)B^{-1}=A^{-1}(A+B)B^{-1} \\)），又 \\( A,B,A+B \\) 都是可逆矩阵，所以 \\( (A^{-1}+B^{-1})(A+B)B^{-1} \\) 是可逆矩阵，即 \\( A^{-1}+B^{-1} \\) 是可逆矩阵，且 \\( (A^{-1}+B^{-1})^{-1}=(A^{-1}(A+B)B^{-1})^{-1}=(B^{-1})^{-1}(A+B)^{-1}(A^{-1})^{-1} \\\\ =B(A+B)^{-1}A \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-59",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 59,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵且满足条件 \\( A^{2}+A-6E=0 \\)，求 (1)\\( A^{-1},(A+E)^{-1} \\)；(2)\\( (A+4E)^{-1} \\)。",
    "options": null,
    "ans": "(1) \\( A^{-1}=\\frac{1}{6}(A+E) \\)，\\( (A+E)^{-1}=\\frac{1}{3}A \\)；(2) \\( (A+4E)^{-1}=-\\frac{1}{6}(A-3E) \\)",
    "fb": "由 \\(A^2+A-6E=0\\) 得 \\(A(A+E)=6E\\Rightarrow A^{-1}=(A+E)/6\\)，\\((A+E)A=6E\\Rightarrow(A+E)^{-1}=A/3\\)；又 \\((A+4E)(A-3E)=-6E\\Rightarrow(A+4E)^{-1}=-(A-3E)/6\\)。故应填 (1) \\( A^{-1}=\\frac{1}{6}(A+E) \\)，\\( (A+E)^{-1}=\\frac{1}{3}A \\)；(2) \\( (A+4E)^{-1}=-\\frac{1}{6}(A-3E) \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-proof-34",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 34,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶非奇异矩阵，\\( \\alpha \\) 是 \\( n \\) 维列向量，\\( b \\) 是常数，记分块矩阵 \\( P=\\begin{bmatrix} E & 0 \\\\ -\\alpha^{T}A^{*} & |A| \\end{bmatrix}, Q=\\begin{bmatrix} A & \\alpha \\\\ \\alpha^{T} & b \\end{bmatrix} \\)，其中 \\( A^{*} \\) 是矩阵 \\( A \\) 的伴随矩阵，\\( E \\) 为 \\( n \\) 阶单位矩阵。(1)计算并化简 \\( PQ \\)；(2)证明矩阵 \\( Q \\) 可逆的充分必要条件是 \\( \\alpha^{T}A^{-1}\\alpha\\neq b \\)。",
    "options": null,
    "ans": null,
    "fb": "(1)因 \\( AA^{*}=A^{*}A=|A|E \\)，故 \\[ PQ=\\begin{bmatrix} E & 0 \\\\ -\\alpha^{T}A^{*} & |A| \\end{bmatrix}\\begin{bmatrix} A & \\alpha \\\\ \\alpha^{T} & b \\end{bmatrix}=\\begin{bmatrix} A & \\alpha \\\\ -\\alpha^{T}A^{*}A+|A|\\alpha^{T} & -\\alpha^{T}A^{*}\\alpha+b|A| \\end{bmatrix}=\\begin{bmatrix} A & \\alpha \\\\ 0 & |A|(b-\\alpha^{T}A^{-1}\\alpha) \\end{bmatrix}. \\]  (2)由 (1)可得 \\( |PQ|=|A|^{2}(b-\\alpha^{T}A^{-1}\\alpha) \\)），而 \\( |PQ|=|P||Q| \\)，且 \\( |P|=|A|\\neq 0 \\)，故 \\( |Q|=|A|(b-\\alpha^{T}A^{-1}\\alpha) \\)）。由此可知，\\( |Q|\\neq 0 \\)，即 \\( Q \\) 可逆的充分必要条件是 \\( \\alpha^{T}A^{-1}\\alpha\\neq b \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-proof-35",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 35,
    "stem": "设 \\( A=E-\\xi\\xi^{T} \\)，其中 \\( E \\) 是 \\( n \\) 阶单位矩阵，\\( \\xi \\) 是 \\( n \\) 维非零列向量，\\( \\xi^{T} \\) 是 \\( \\xi \\) 的转置，证明：(1)\\( A^{2}=A\\Leftrightarrow\\xi^{T}\\xi=1 \\)；(2)当 \\( \\xi^{T}\\xi=1 \\) 时，\\( A \\) 是不可逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "(1)\\( A^{2}=(E-\\xi\\xi^{T})(E-\\xi\\xi^{T})=E-2\\xi\\xi^{T}+\\xi\\xi^{T}\\xi\\xi^{T}=E-(2-\\xi^{T}\\xi)\\xi\\xi^{T} \\)）。若 \\( A^{2}=A \\)，即 \\( E-(2-\\xi^{T}\\xi)\\xi\\xi^{T}=E-\\xi\\xi^{T} \\)），亦即 \\( (\\xi^{T}\\xi-1)\\xi\\xi^{T}=0 \\)）。因为 \\( \\xi \\) 是非零列向量，故 \\( \\xi\\xi^{T}\\neq 0 \\)，所以 \\( \\xi^{T}\\xi=1 \\)，显然然 \\( A^{2}=A \\)）。  (2)用反证法，假设当 \\( \\xi^{T}\\xi=1 \\) 时，\\( A \\) 为可逆的，由 (1) 知此时 \\( A^{2}=A \\)），等式两端同时左乘 \\( A^{-1} \\)，得 \\( A^{-1}A^{2}=A^{-1}A \\)），从而 \\( A=E \\) 这与 \\( A=E-\\xi\\xi^{T}\\neq E \\) 矛盾，故 \\( A \\) 是不可逆矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-mc-21",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 21,
    "stem": "已知 \\( Q=\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & t \\\\ 3 & 6 & 9 \\end{bmatrix},P \\) 为三阶非零矩阵，且满足 \\( PQ=0 \\)，则______。",
    "options": [
      [
        "A",
        "当 \\( t=6 \\) 时，\\( P \\) 的秩必为 3"
      ],
      [
        "B",
        "当 \\( t=6 \\) 时，\\( P \\) 的秩必为 2"
      ],
      [
        "C",
        "当 \\( t\\neq 6 \\) 时，\\( P \\) 的秩必为 1"
      ],
      [
        "D",
        "当 \\( t\\neq 6 \\) 时，\\( P \\) 的秩必为 2"
      ]
    ],
    "ans": "C",
    "fb": "矩阵 \\(Q\\) 的第 2 列 \\(=2\\times\\) 第 1 列；当 \\(t=6\\) 时第 3 列 \\(=3\\times\\) 第 1 列，故 \\(R(Q)=1\\)，但 \\(PQ=O\\) 只要求 \\(P\\) 的各行属于 \\(Q\\) 的左零空间（维数 2），\\(P\\) 秩可为 1 或 2，未必为 2（A、B 错）。当 \\(t\\ne6\\) 时 \\(R(Q)=2\\)，左零空间维数为 1，非零矩阵 \\(P\\) 的各行均在该一维空间中，故 \\(R(P)=1\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-mc-22",
    "ch": 2,
    "src": "jingxuan",
    "type": "mc",
    "no": 22,
    "stem": "已知 \\( A^{2}=E \\)，则必有______。",
    "options": [
      [
        "A",
        "\\( A+E \\) 可逆"
      ],
      [
        "B",
        "\\( A-E \\) 可逆"
      ],
      [
        "C",
        "当 \\( A\\neq E \\) 时，\\( A+E \\) 可逆"
      ],
      [
        "D",
        "当 \\( A\\neq E \\) 时，\\( A+E \\) 不可逆"
      ]
    ],
    "ans": "D",
    "fb": "由 \\(A^2=E\\) 得 \\((A-E)(A+E)=O\\)。若 \\(A\\ne E\\) 时 \\(A+E\\) 可逆，则左乘 \\((A+E)^{-1}\\) 得 \\(A-E=O\\)，即 \\(A=E\\)，与 \\(A\\ne E\\) 矛盾，故当 \\(A\\ne E\\) 时 \\(A+E\\) 必不可逆。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-60",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 60,
    "stem": "若矩阵 \\( A=\\begin{bmatrix} 1 & 3 & 2 & -1 \\\\ -2 & -6 & -3 & 5 \\\\ 3 & 9 & 3 & a \\end{bmatrix} \\) 与矩阵 \\( B=\\begin{bmatrix} 1 & 3 & 3 & -5 \\\\ 1 & 2 & 3 & -1 \\\\ 1 & 0 & 3 & 7 \\end{bmatrix} \\) 等价，则 \\( a=\\)______。",
    "options": null,
    "ans": "12",
    "fb": "因 \\(A\\) 与 \\(B\\) 等价，故 \\(r(A)=r(B)\\)。易算得 \\(r(B)=2\\)；对 \\(A\\) 作行变换，令其秩也为 2，解得 \\(a=12\\)。故应填 12。",
    "pts": 5,
    "diff": 2,
    "sec": "s25"
  },
  {
    "id": "c2-jx-fill-61",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 61,
    "stem": "若 \\( n \\) 阶方阵 \\( A \\) 的伴随矩阵 \\( A^{*}\\neq 0 \\)，又 \\( AA^{*}=0 \\)，则 \\( r(A^{*})=\\)______，\\( r(A)=\\)______。",
    "options": null,
    "ans": "\\( r(A^{*})=1 \\)，\\( r(A)=n-1 \\)",
    "fb": "由 \\(AA^*=0\\) 且 \\(A^*\\neq0\\) 知 \\(r(A)\\le n-1\\)；结合秩不等式及 \\(A^*\\) 非零知 \\(r(A)=n-1\\)，从而 \\(r(A^*)=1\\)。故应填 \\( r(A^{*})=1 \\)，\\( r(A)=n-1 \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-36",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 36,
    "stem": "证明：\\( r(A^{*})=\\begin{cases} n, & \\text{若 } r(A)=n, \\\\ 1, & \\text{若 } r(A)=n-1, \\\\ 0, & \\text{若 } r(A)<n-1. \\end{cases} \\)",
    "options": null,
    "ans": null,
    "fb": "当 \\( r(A)=n \\) 时，\\( |A|\\neq 0 \\)，由 \\( |A^{*}|=|A|^{n-1}\\neq 0 \\)，所以 \\( r(A^{*})=n \\)。当 \\( r(A)=n-1 \\) 时，\\( A \\) 中至少有一个 \\( n-1 \\) 阶子式不为零，由 \\( A^{*} \\) 的定义知，\\( A^{*} \\) 中至少有一元素不为零，所以 \\( r(A^{*})\\geqslant 1 \\)。另一方面，由 \\( AA^{*}=|A|E=0 \\) 知，\\( r(A)+r(A^{*})\\leqslant n \\) 又 \\( r(A)=n-1 \\)，所以 \\( r(A^{*})\\leqslant 1 \\)。综上可得，在 \\( r(A)=n-1 \\) 时 \\( r(A^{*})=1 \\)）。当 \\( r(A)<n-1 \\) 时，\\( A \\) 的所有 \\( n-1 \\) 阶子式均为零，于是 \\( A_{ij}=0(i,j=1,2,\\cdots,n) \\)，故 \\( A^{*}=0 \\)。从而 \\( r(A^{*})=0 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-calc-11",
    "ch": 2,
    "src": "jingxuan",
    "type": "calc",
    "no": 11,
    "stem": "求下列矩阵的秩。\\( A=\\begin{bmatrix} x & y & y & y \\\\ y & x & y & y \\\\ y & y & x & y \\\\ y & y & y & x \\end{bmatrix} \\)。",
    "options": null,
    "ans": null,
    "fb": "先把矩阵 \\( A \\) 化为阶梯形。对 \\( x,y \\) 的不同取值进行分析。 (1)当 \\( x-y=0,x+3y=0 \\)，即 \\( x=y=0 \\) 时，\\( A=0 \\)，所以 \\( r(A)=0 \\)）。 (2)当 \\( x+3y\\neq 0,x-y\\neq 0 \\) 时，\\( r(A)=4 \\)）。 (3)当 \\( x+3y=0,x-y\\neq 0 \\) 时，\\( r(A)=1 \\)）。 (4)当 \\( x+3y\\neq 0,x-y=0 \\) 时，\\( r(A)=3 \\)）。 点评：注意对参数的讨论，不要重复、不遗漏。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-37",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 37,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵，且 \\( A^{2}=A \\)，证明：\\( r(A)+r(A-E)=n \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A^{2}=A \\) 可得 \\( A(A-E)=0 \\)，从而 \\( r(A)+r(A-E)\\leqslant n \\)）。另一方面，由于 \\( E-A \\) 同 \\( A-E \\) 有相同的秩，故又有 \\( n=r(E)=r(A+E-A)\\leqslant r(A)+r(A-E)=r(A)+r(A-E) \\)）。所以 \\( r(A)+r(A-E)=n \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-proof-38",
    "ch": 2,
    "src": "jingxuan",
    "type": "proof",
    "no": 38,
    "stem": "设 \\( A \\) 是秩为 \\( r \\) 的 \\( m\\times n \\) 矩阵，证明：(1)存在可逆矩阵 \\( P \\)，使 \\( PA \\) 的后 \\( m-r \\) 行全为零；(2)存在可逆矩阵 \\( Q \\)，使 \\( AQ \\) 的后 \\( n-r \\) 列全为零。",
    "options": null,
    "ans": null,
    "fb": "证 (1)存在可逆矩阵 \\( P,Q \\)，使 \\[ PAQ=\\begin{bmatrix} E_{r} & 0 \\\\ 0 & 0 \\end{bmatrix}. \\tag{1} \\] ①两端用 \\( Q^{-1} \\) 右乘，并将 \\( Q^{-1} \\) 分块为 \\( Q^{-1}=\\begin{bmatrix} Q_{1} \\\\ Q_{2} \\end{bmatrix} \\)，这里 \\( Q_{1} \\) 为 \\( r \\) 行的子块，于是 \\[ PA=\\begin{bmatrix} E_{r} & 0 \\\\ 0 & 0 \\end{bmatrix}Q^{-1}=\\begin{bmatrix} E_{r} & 0 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} Q_{1} \\\\ Q_{2} \\end{bmatrix}=\\begin{bmatrix} Q_{1} \\\\ 0 \\end{bmatrix}. \\] (2)将①式两端用 \\( P^{-1} \\) 左乘，并将 \\( P^{-1} \\) 分块为 \\( P=(P_{1},P_{2}) \\)，这里 \\( P_{1} \\) 为 \\( r \\) 列的子块，于是...",
    "pts": 8,
    "diff": 2,
    "sec": "s26"
  },
  {
    "id": "c2-jx-fill-62",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 62,
    "stem": "设矩阵 \\( A \\) 的伴随矩阵 \\( A^{*}=\\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 1 & 0 \\\\ 0 & -3 & 0 & 8 \\end{bmatrix} \\)，且 \\( ABA^{-1}=BA^{-1}+3E \\)，其中 \\( E \\) 为四阶单位矩阵，求矩阵 \\( B \\)。",
    "options": null,
    "ans": "\\( B=\\begin{bmatrix} 6 & 0 & 0 & 0 \\\\ 0 & 6 & 0 & 0 \\\\ 6 & 0 & 6 & 0 \\\\ 0 & 3 & 0 & -1 \\end{bmatrix} \\)",
    "fb": "由 \\(ABA^{-1}=BA^{-1}+3E\\) 右乘 \\(A\\) 得 \\((A-E)B=3A\\)，故 \\(B=3(A-E)^{-1}A\\)。又由伴随阵 \\(A^*\\) 可求得 \\(|A|=2\\) 及 \\(A=2(A^*)^{-1}\\)，代入计算即得。故应填 \\( B=\\begin{bmatrix} 6 & 0 & 0 & 0 \\\\ 0 & 6 & 0 & 0 \\\\ 6 & 0 & 6 & 0 \\\\ 0 & 3 & 0 & -1 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-63",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 63,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} 1 & 1 & -1 \\\\ -1 & 1 & 1 \\\\ 1 & -1 & 1 \\end{bmatrix} \\)，矩阵 \\( X \\) 满足 \\( A^{*}X=A^{-1}+2X \\)，其中 \\( A^{*} \\) 是 \\( A \\) 的伴随矩阵，求矩阵 \\( X \\)。",
    "options": null,
    "ans": "\\( X=\\frac{1}{4}\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix} \\)",
    "fb": "左乘 \\(A\\) 得 \\(|A|X=A+2AX\\)，即 \\((|A|E-2A)X=A\\)；代入 \\(|A|=4\\) 并求 \\((4E-2A)\\) 的逆，解得 \\(X\\)。故应填 \\( X=\\frac{1}{4}\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c2-jx-fill-64",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 64,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} 1 & 2 & 0 & 0 \\\\ 1 & 3 & 0 & 0 \\\\ 0 & 0 & 0 & 2 \\\\ 0 & 0 & -1 & 0 \\end{bmatrix} \\)，矩阵 \\( B \\) 满足 \\( \\left[\\left(\\frac{1}{2}A\\right)^{*}\\right]^{-1}BA^{-1}=2AB+12E \\)，求矩阵 \\( B \\)。",
    "options": null,
    "ans": "\\( B=\\begin{bmatrix} 2 & -4 & 0 & 0 \\\\ -2 & -2 & 0 & 0 \\\\ 0 & 0 & 2 & 2 \\\\ 0 & 0 & -1 & 2 \\end{bmatrix} \\)",
    "fb": "利用伴随与逆的关系化简左边系数，原方程化为关于 \\(B\\) 的线性方程 \\(B(2E-A)=6E\\)，求 \\((2E-A)\\) 的分块逆即得 \\(B\\)。故应填 \\( B=\\begin{bmatrix} 2 & -4 & 0 & 0 \\\\ -2 & -2 & 0 & 0 \\\\ 0 & 0 & 2 & 2 \\\\ 0 & 0 & -1 & 2 \\end{bmatrix} \\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s24"
  },
  {
    "id": "c2-jx-fill-65",
    "ch": 2,
    "src": "jingxuan",
    "type": "fill",
    "no": 65,
    "stem": "求解矩阵方程 \\( AX+E=A^{2}+X \\)，其中 \\( A=\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 6 & 1 \\end{bmatrix} \\)。",
    "options": null,
    "ans": "\\( X=\\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ a & b & c \\end{bmatrix} \\)，其中 \\( a,b,c \\) 为任意常数。",
    "fb": "整理方程得 \\((A-E)X=(A-E)(A+E)\\)。因 \\(A-E\\) 不满秩不能直接约去；令 \\(X=A+E+K\\) 代入可得 \\(K\\) 的第三行任意、其余为零，故 \\(X\\) 形如所给含任意常数 \\(a,b,c\\) 的矩阵。故应填 \\( X=\\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ a & b & c \\end{bmatrix} \\)，其中 \\( a,b,c \\) 为任意常数。",
    "pts": 5,
    "diff": 2,
    "sec": "s23"
  },
  {
    "id": "c3-jx-fill-1",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 1,
    "stem": "设 \\( \\boldsymbol{\\beta}_1=(1,a,0) \\)，\\( \\boldsymbol{\\beta}_2=(-1,2,b) \\)，求 \\( a,b \\) 为何值时 \\( \\boldsymbol{\\beta}_1+\\boldsymbol{\\beta}_2=\\mathbf{0} \\)。",
    "options": null,
    "ans": "\\( a=-2,\\ b=0 \\)",
    "fb": "解：\\(\\beta_1+\\beta_2=(1-1,\\ a+2,\\ 0+b)=(0,\\ a+2,\\ b)\\)。令其为零向量，得 \\(a+2=0,\\ b=0\\)，即 \\(a=-2,\\ b=0\\)。故应填 \\(a=-2,\\ b=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-2",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 2,
    "stem": "设 \\( 3(\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha})+2(\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha})=5(\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}) \\)，求 \\( \\boldsymbol{\\alpha} \\)，其中 \\[ \\boldsymbol{\\alpha}_1=\\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix},\\ \\boldsymbol{\\alpha}_2=\\begin{bmatrix} 10 \\\\ 5 \\\\ 10 \\end{bmatrix},\\ \\boldsymbol{\\alpha}_3=\\begin{bmatrix} 4 \\\\ -1 \\\\ 1 \\end{bmatrix}. \\]",
    "options": null,
    "ans": "\\( \\boldsymbol{\\alpha}=\\begin{bmatrix} 2 \\\\ 3 \\\\ 4 \\end{bmatrix} \\)",
    "fb": "解：由 \\(3(\\alpha_1-\\alpha)+2(\\alpha_2+\\alpha)=5(\\alpha_3+\\alpha)\\) 展开得 \\(3\\alpha_1+2\\alpha_2-\\alpha=5\\alpha_3+5\\alpha\\)，移项得 \\(6\\alpha=3\\alpha_1+2\\alpha_2-5\\alpha_3\\)。代入数值计算：\n\\(3\\alpha_1=(6,3,9)^T,\\ 2\\alpha_2=(20,10,20)^T,\\ 5\\alpha_3=(20,-5,5)^T\\)，故 \\(6\\alpha=(6,18,24)^T\\)，即 \\(\\alpha=\\begin{bmatrix}1\\\\3\\\\4\\end{bmatrix}\\)。故应填 \\(\\begin{bmatrix}1\\\\3\\\\4\\end{bmatrix}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-3",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 3,
    "stem": "设 \\( n \\) 维行向量 \\( \\boldsymbol{\\alpha}=\\left(\\frac{1}{2},0,\\cdots,0,\\frac{1}{2}\\right) \\)，矩阵 \\( A=E-\\boldsymbol{\\alpha}^T\\boldsymbol{\\alpha} \\)，\\( B=E+2\\boldsymbol{\\alpha}^T\\boldsymbol{\\alpha} \\)，其中 \\( E \\) 为 \\( n \\) 阶单位矩阵，则 \\( AB \\) 等于______。",
    "options": null,
    "ans": "\\( E \\)（单位矩阵）",
    "fb": "解：记 \\(P=\\alpha^T\\alpha\\)（\\(n\\) 阶矩阵）。因 \\(\\alpha\\alpha^T=\\frac14+\\frac14=\\frac12\\)，故 \\(P^2=\\alpha^T(\\alpha\\alpha^T)\\alpha=\\frac12\\alpha^T\\alpha=\\frac12 P\\)。于是 \\(A=E-P,\\ B=E+2P\\)，\\(AB=(E-P)(E+2P)=E+P-2P^2=E+P-P=E\\)。故应填 \\(E\\)（单位矩阵）。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-4",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 4,
    "stem": "设 \\( \\boldsymbol{\\alpha} \\) 为三维列向量，若 \\( \\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^T=\\begin{bmatrix} 1 & -1 & 1 \\\\ -1 & 1 & -1 \\\\ 1 & -1 & 1 \\end{bmatrix} \\)，则 \\( \\boldsymbol{\\alpha}^T\\boldsymbol{\\alpha}= \\)______。",
    "options": null,
    "ans": "\\( 3 \\)",
    "fb": "解：\\(\\alpha\\alpha^T\\) 是秩 1 矩阵，其迹 \\(\\operatorname{tr}(\\alpha\\alpha^T)=\\alpha^T\\alpha\\)。由已知 \\(\\alpha\\alpha^T=\\begin{bmatrix}1&-1&1\\\\-1&1&-1\\\\1&-1&1\\end{bmatrix}\\)，其迹为 \\(1+1+1=3\\)，故 \\(\\alpha^T\\alpha=3\\)。故应填 3。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-mc-1",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 1,
    "stem": "如果向量 \\( \\boldsymbol{\\beta} \\) 可由向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示，则______。",
    "options": [
      [
        "A",
        "存在一组不全为零的数 \\( k_1,k_2,\\cdots,k_m \\)，使等式 \\( \\boldsymbol{\\beta}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_m\\boldsymbol{\\alpha}_m \\) 成立"
      ],
      [
        "B",
        "存在一组全为零的数 \\( k_1,k_2,\\cdots,k_m \\)，使等式 \\( \\boldsymbol{\\beta}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_m\\boldsymbol{\\alpha}_m \\) 成立"
      ],
      [
        "C",
        "对 \\( \\boldsymbol{\\beta} \\) 的线性表达式不唯一"
      ],
      [
        "D",
        "向量组 \\( \\boldsymbol{\\beta},\\boldsymbol{\\alpha}_1,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性相关"
      ]
    ],
    "ans": "D",
    "fb": "解析：因为 \\(\\beta\\) 可由 \\(\\alpha_1,\\dots,\\alpha_m\\) 线性表示，设 \\(\\beta=k_1\\alpha_1+\\cdots+k_m\\alpha_m\\)，则 \\(1\\cdot\\beta-k_1\\alpha_1-\\cdots-k_m\\alpha_m=0\\)，系数不全为零，故向量组 \\(\\beta,\\alpha_1,\\dots,\\alpha_m\\) 线性相关。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-5",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 5,
    "stem": "若向量 \\( \\boldsymbol{\\beta}=(1,0,k,2)^T \\) 能由向量组 \\( \\boldsymbol{\\alpha}_1=(1,3,0,5)^T \\)，\\( \\boldsymbol{\\alpha}_2=(1,2,1,4)^T \\)，\\( \\boldsymbol{\\alpha}_3=(1,2,3,-1)^T \\) 线性表示，则 \\( k= \\)______。",
    "options": null,
    "ans": "\\( 3 \\)",
    "fb": "解：\\(\\beta\\) 可由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示，即方程组 \\(x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3=\\beta\\) 有解。对其增广矩阵作行变换：\n\\(\\begin{bmatrix}1&1&1&1\\\\3&2&2&0\\\\0&1&3&k\\\\5&4&-1&2\\end{bmatrix}\\to\\begin{bmatrix}1&1&1&1\\\\0&-1&-1&-3\\\\0&1&3&k\\\\0&-1&-6&-3\\end{bmatrix}\\to\\begin{bmatrix}1&1&1&1\\\\0&-1&-1&-3\\\\0&0&2&k-3\\\\0&0&-5&0\\end{bmatrix}\\)。\n由 \\(-5x_3=0\\) 得 \\(x_3=0\\)，代入 \\(2x_3=k-3\\) 得 \\(k=3\\)。故应填 3。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-calc-1",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 1,
    "stem": "判断向量 \\( \\boldsymbol{\\beta}_1=(4,3,-1,11) \\) 与 \\( \\boldsymbol{\\beta}_2=(4,3,0,11) \\) 是否各为向量组 \\( \\boldsymbol{\\alpha}_1=(1,2,-1,5) \\)，\\( \\boldsymbol{\\alpha}_2=(2,-1,1,1) \\) 的线性组合。若是，写出表达式。",
    "options": null,
    "ans": null,
    "fb": "对矩阵 \\( (\\boldsymbol{\\alpha}_1^T,\\boldsymbol{\\alpha}_2^T,\\boldsymbol{\\beta}_1^T) \\) 施以初等行变换，秩为2，故 \\( \\boldsymbol{\\beta}_1 \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2 \\) 线性表示，且 \\( k_1=2,k_2=1 \\)，即 \\( \\boldsymbol{\\beta}_1=2\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2 \\)。对 \\( (\\boldsymbol{\\alpha}_1^T,\\boldsymbol{\\alpha}_2^T,\\boldsymbol{\\beta}_2^T) \\) 变换后秩为3>2，故 \\( \\boldsymbol{\\beta}_2 \\) 不能由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2 \\) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-proof-1",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 1,
    "stem": "设 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_m,\\boldsymbol{\\beta} \\) 都是 \\( n \\) 维向量，\\( \\boldsymbol{\\beta} \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示，但 \\( \\boldsymbol{\\beta} \\) 不能由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示，证明：\\( \\boldsymbol{\\alpha}_m \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1},\\boldsymbol{\\beta} \\) 线性表示，但 \\( \\boldsymbol{\\beta}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_{m-1}\\boldsymbol{\\alpha}_{m-1}+k_m\\boldsymbol{\\alpha}_m \\)，而 \\( \\boldsymbol{\\beta} \\) 不能由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( \\boldsymbol{\\beta} \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示，设 \\( \\boldsymbol{\\beta}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_{m-1}\\boldsymbol{\\alpha}_{m-1}+k_m\\boldsymbol{\\alpha}_m \\)，而 \\( \\boldsymbol{\\beta} \\) 不能由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示，所以 \\( k_m\\neq 0 \\)。从而 \\[ \\boldsymbol{\\alpha}_m=\\frac{1}{k_m}(\\boldsymbol{\\beta}-k_1\\boldsymbol{\\alpha}_1-\\cdots-k_{m-1}\\boldsymbol{\\alpha}_{m-1}), \\] 即 \\( \\boldsymbol{\\alpha}_m \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1},\\boldsymbol{\\beta} \\) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-mc-2",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 2,
    "stem": "设向量 \\( \\boldsymbol{\\beta} \\) 可由向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示，但不能由向量组（I）\\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示，记向量组（II）\\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1},\\boldsymbol{\\beta} \\)，则______。",
    "options": [
      [
        "A",
        "\\( \\boldsymbol{\\alpha}_m \\) 不能由（I）线性表示，也不能由（II）线性表示"
      ],
      [
        "B",
        "\\( \\boldsymbol{\\alpha}_m \\) 不能由（I）线性表示，但可由（II）线性表示"
      ],
      [
        "C",
        "\\( \\boldsymbol{\\alpha}_m \\) 可由（I）线性表示，也可由（II）线性表示"
      ],
      [
        "D",
        "\\( \\boldsymbol{\\alpha}_m \\) 可由（I）线性表示，但不可由（II）线性表示"
      ]
    ],
    "ans": "B",
    "fb": "解析：由 \\(\\beta\\) 可由（I）并上 \\(\\alpha_m\\) 表示但不能由（I）表示，设 \\(\\beta=k_1\\alpha_1+\\cdots+k_{m-1}\\alpha_{m-1}+k_m\\alpha_m\\)，其中 \\(k_m\\neq0\\)。于是 \\(\\alpha_m=\\frac1{k_m}(\\beta-k_1\\alpha_1-\\cdots-k_{m-1}\\alpha_{m-1})\\)，即 \\(\\alpha_m\\) 可由（II）\\(=\\alpha_1,\\dots,\\alpha_{m-1},\\beta\\) 线性表示；但 \\(\\alpha_m\\) 不能由（I）表示。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-proof-2",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 2,
    "stem": "设 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1}(m>3) \\) 线性无关，而 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_3,\\cdots,\\boldsymbol{\\alpha}_{m-1},\\boldsymbol{\\alpha}_m \\) 线性相关，试证： (1) \\( \\boldsymbol{\\alpha}_m \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示； (2) \\( \\boldsymbol{\\alpha}_2 \\) 不能由 \\( \\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示。",
    "options": null,
    "ans": null,
    "fb": "(1) 因为 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性无关，所以其部分组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_3,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 也线性无关，又因为 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_3,\\cdots,\\boldsymbol{\\alpha}_{m-1},\\boldsymbol{\\alpha}_m \\) 线性相关，所以 \\( \\boldsymbol{\\alpha}_m \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_3,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示，即 \\( \\boldsymbol{\\alpha}_m=k_1\\boldsymbol{\\alpha}_1+k_3\\boldsymbol{\\alpha}_3+\\cdots+k_{m-1}\\boldsymbol{\\alpha}_{m-1} \\)，也即 \\( \\boldsymbol{\\alpha}_m=k_1\\boldsymbol{\\alpha}_1+0\\cdot\\boldsymbol{\\alpha}_2+k_3\\boldsymbol{\\alpha}_3+\\cdots+k_{m-1}\\boldsymbol{\\alpha}_{m-1} \\)，因此 \\( \\boldsymbol{\\alpha}_m \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示。 (2) 用反证法。假设 \\( \\boldsymbol{\\alpha}_2 \\) 可由 \\( \\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示，则 \\( \\boldsymbol{\\alpha}_2=\\lambda_3\\boldsymbol{\\alpha}_3+\\lambda_4\\boldsymbol{\\alpha}_4+\\cdots+\\lambda_{m-1}\\boldsymbol{\\alpha}_{m-1}+\\lambda_m\\boldsymbol{\\alpha}_m \\)。由(1)的证明知，代入可得 \\( \\boldsymbol{\\alpha}_2 \\) 可由 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_3,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性表示，从而可推出 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_{m-1} \\) 线性相关，与题设条件矛盾，故 \\( \\boldsymbol{\\alpha}_2 \\) 不能由 \\( \\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4,\\cdots,\\boldsymbol{\\alpha}_m \\) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-calc-2",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 2,
    "stem": "已知向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3 \\) 分别由 \\( \\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3 \\) 线性表示，即 \\[ \\begin{cases} \\boldsymbol{\\alpha}_1=\\boldsymbol{\\beta}_1-\\boldsymbol{\\beta}_2+\\boldsymbol{\\beta}_3, \\\\ \\boldsymbol{\\alpha}_2=\\boldsymbol{\\beta}_1+\\boldsymbol{\\beta}_2-\\boldsymbol{\\beta}_3, \\\\ \\boldsymbol{\\alpha}_3=-\\boldsymbol{\\beta}_1+\\boldsymbol{\\beta}_2+\\boldsymbol{\\beta}_3. \\end{cases} \\] 试将 \\( \\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3 \\) 分别用 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3 \\) 线性表示。",
    "options": null,
    "ans": null,
    "fb": "由已知，有 \\( (\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)=(\\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3)\\begin{bmatrix} 1 & 1 & -1 \\\\ -1 & 1 & 1 \\\\ 1 & -1 & 1 \\end{bmatrix} \\)，又 \\( \\begin{vmatrix} 1 & 1 & -1 \\\\ -1 & 1 & 1 \\\\ 1 & -1 & 1 \\end{vmatrix}=4\\neq 0 \\)，所以 \\[ (\\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3)=(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)\\begin{bmatrix} 1 & 1 & -1 \\\\ -1 & 1 & 1 \\\\ 1 & -1 & 1 \\end{bmatrix}^{-1} =(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)\\begin{bmatrix} \\frac{1}{2} & 0 & \\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{2} & \\frac{1}{2} \\end{bmatrix}. \\]",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-3",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 3,
    "stem": "已知向量组（I）：\\( \\boldsymbol{\\alpha}_1=\\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\)，\\( \\boldsymbol{\\alpha}_2=\\begin{bmatrix} 3 \\\\ 0 \\\\ 1 \\\\ 2 \\end{bmatrix} \\)），\\( \\boldsymbol{\\alpha}_3=\\begin{bmatrix} 2 \\\\ 3 \\\\ 0 \\\\ 1 \\end{bmatrix} \\)）； 和（II）：\\( \\boldsymbol{\\beta}_1=\\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\\\ 2 \\end{bmatrix} \\)），\\( \\boldsymbol{\\beta}_2=\\begin{bmatrix} 0 \\\\ -2 \\\\ 1 \\\\ 1 \\end{bmatrix} \\)），\\( \\boldsymbol{\\beta}_3=\\begin{bmatrix} 4 \\\\ 4 \\\\ 3 \\\\ 3 \\end{bmatrix} \\)）。 证明：（II）可由（I）线性表示，但（I）不能由（II）线性表示。",
    "options": null,
    "ans": null,
    "fb": "令 \\( A=(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3) \\)，\\( B=(\\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3) \\)，对矩阵 \\( (A,B) \\) 施以初等行变换，得 \\( r(A)=r(A,B)=3 \\)，即（II）可由（I）线性表示。 同理，对 \\( (B,A) \\) 作初等行变换，得 \\( r(B)=2 \\)，而 \\( r(B,A)=3 \\)，故（I）不能由（II）线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-mc-3",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 3,
    "stem": "设 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_n \\) 均为 \\( n \\) 维向量，那么，下列结论正确的是______。",
    "options": [
      [
        "A",
        "若 \\( k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_n\\boldsymbol{\\alpha}_n=\\mathbf{0} \\)，则 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_n \\) 线性相关"
      ],
      [
        "B",
        "若对任意一组不全为零的数 \\( k_1,k_2,\\cdots,k_n \\)，都有 \\( k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_n\\boldsymbol{\\alpha}_n\\neq\\mathbf{0} \\)，则 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_n \\) 线性无关"
      ],
      [
        "C",
        "若 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_n \\) 线性相关，则对任意一组不全为零的数 \\( k_1,k_2,\\cdots,k_n \\)，都有 \\( k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_n\\boldsymbol{\\alpha}_n=\\mathbf{0} \\)"
      ],
      [
        "D",
        "若 \\( 0\\boldsymbol{\\alpha}_1+0\\boldsymbol{\\alpha}_2+\\cdots+0\\boldsymbol{\\alpha}_n=\\mathbf{0} \\)，则 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_n \\) 线性无关"
      ]
    ],
    "ans": "B",
    "fb": "解析：线性无关的等价定义是：只有系数全为零时组合才为零，等价于\"对任意一组不全为零的数，组合都不为零\"。选项 B 正是该表述。A 缺失\"对任意\"；C、D 错把存在性当任意性。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-4",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 4,
    "stem": "\\( n \\) 维向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s(3\\leq s\\leq n) \\) 线性无关的充分条件是______。",
    "options": [
      [
        "A",
        "存在一组不全为零的数 \\( k_1,k_2,\\cdots,k_s \\)，使 \\( k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+\\cdots+k_s\\boldsymbol{\\alpha}_s\\neq\\mathbf{0} \\)"
      ],
      [
        "B",
        "\\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s \\) 中任意两个向量都线性无关"
      ],
      [
        "C",
        "\\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s \\) 中存在一个向量，它不能由其余向量线性表示"
      ],
      [
        "D",
        "\\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s \\) 中任意一个向量都不能由其余向量线性表示"
      ]
    ],
    "ans": "D",
    "fb": "解析：向量组线性无关的充要条件是其中任意一个向量都不能由其余向量线性表示（否则存在非平凡零组合）。A、B、C 均为必要非充分条件。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-5",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 5,
    "stem": "已知向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4 \\) 线性无关，则______。",
    "options": [
      [
        "A",
        "\\( \\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_4,\\boldsymbol{\\alpha}_4+\\boldsymbol{\\alpha}_1 \\) 线性无关"
      ],
      [
        "B",
        "\\( \\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2-\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3-\\boldsymbol{\\alpha}_4,\\boldsymbol{\\alpha}_4-\\boldsymbol{\\alpha}_1 \\) 线性无关"
      ],
      [
        "C",
        "\\( \\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_4,\\boldsymbol{\\alpha}_4-\\boldsymbol{\\alpha}_1 \\) 线性无关"
      ],
      [
        "D",
        "\\( \\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3-\\boldsymbol{\\alpha}_4,\\boldsymbol{\\alpha}_4-\\boldsymbol{\\alpha}_1 \\) 线性无关"
      ]
    ],
    "ans": "C",
    "fb": "解析：设 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 线性无关。对选项 C，令 \\(x_1(\\alpha_1+\\alpha_2)+x_2(\\alpha_2+\\alpha_3)+x_3(\\alpha_3+\\alpha_4)+x_4(\\alpha_4-\\alpha_1)=0\\)，整理得 \\((x_1-x_4)\\alpha_1+(x_1+x_2)\\alpha_2+(x_2+x_3)\\alpha_3+(x_3+x_4)\\alpha_4=0\\)。由 \\(\\alpha_i\\) 无关得 \\(x_1=x_2=x_3=x_4=0\\)，故线性无关。A、B、D 中系数矩阵行列式均为 0，故相关。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-4",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 4,
    "stem": "已知 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3 \\) 线性无关。证明 \\( \\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\ 3\\boldsymbol{\\alpha}_2+2\\boldsymbol{\\alpha}_3,\\ \\boldsymbol{\\alpha}_1-2\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3 \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设有一组数 \\( k_1,k_2,k_3 \\)，使得 \\( k_1(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2)+k_2(3\\boldsymbol{\\alpha}_2+2\\boldsymbol{\\alpha}_3)+k_3(\\boldsymbol{\\alpha}_1-2\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3)=\\mathbf{0} \\)，即 \\( (k_1+k_3)\\boldsymbol{\\alpha}_1+(k_1+3k_2-2k_3)\\boldsymbol{\\alpha}_2+(2k_2+k_3)\\boldsymbol{\\alpha}_3=\\mathbf{0} \\)。 由于 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3 \\) 线性无关，从而有线性方程组，其系数行列式为 \\( \\begin{vmatrix} 1 & 0 & 1 \\\\ 1 & 3 & -2 \\\\ 0 & 2 & 1 \\end{vmatrix}=9\\neq 0 \\)，从而齐次线性方程组只有零解，即 \\( k_1=k_2=k_3=0 \\)，所以 \\( \\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,3\\boldsymbol{\\alpha}_2+2\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_1-2\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3 \\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-5",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 5,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶矩阵，若存在正整数 \\( k \\)，使线性方程组 \\( A^k x=\\mathbf{0} \\) 有解向量 \\( \\boldsymbol{\\alpha} \\)，且 \\( A^{k-1}\\boldsymbol{\\alpha}\\neq\\mathbf{0} \\)，证明：向量组 \\( \\boldsymbol{\\alpha},A\\boldsymbol{\\alpha},\\cdots,A^{k-1}\\boldsymbol{\\alpha} \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设有一组数 \\( l_0,l_1,\\cdots,l_{k-1} \\)，使得 \\( l_0\\boldsymbol{\\alpha}+l_1A\\boldsymbol{\\alpha}+\\cdots+l_{k-1}A^{k-1}\\boldsymbol{\\alpha}=\\mathbf{0} \\)。用 \\( A^{k-1} \\) 左乘上式两边，有 \\( l_0A^{k-1}\\boldsymbol{\\alpha}+l_1A^k\\boldsymbol{\\alpha}+\\cdots+l_{k-1}A^{2k-2}\\boldsymbol{\\alpha}=\\mathbf{0} \\)。由于 \\( A^k\\boldsymbol{\\alpha}=\\mathbf{0} \\)，所以当 \\( l\\geq k \\) 时，有 \\( A^l\\boldsymbol{\\alpha}=\\mathbf{0} \\)，从而 \\( l_0A^{k-1}\\boldsymbol{\\alpha}=\\mathbf{0} \\)。而 \\( A^{k-1}\\boldsymbol{\\alpha}\\neq\\mathbf{0} \\)，所以此类推，可得 \\( l_0=l_1=\\cdots=l_{k-1}=0 \\)，所以 \\( \\boldsymbol{\\alpha},A\\boldsymbol{\\alpha},\\cdots,A^{k-1}\\boldsymbol{\\alpha} \\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-6",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 6,
    "stem": "如果向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s \\) 线性无关，证明：向量组 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\cdots+\\boldsymbol{\\alpha}_s \\) 也线性无关。",
    "options": null,
    "ans": null,
    "fb": "设有一组数 \\( k_1,k_2,\\cdots,k_s \\)，使得 \\( k_1\\boldsymbol{\\alpha}_1+k_2(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2)+k_3(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3)+\\cdots+k_s(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\cdots+\\boldsymbol{\\alpha}_s)=\\mathbf{0} \\)。 整理可得：\\( (k_1+k_2+\\cdots+k_s)\\boldsymbol{\\alpha}_1+(k_2+k_3+\\cdots+k_s)\\boldsymbol{\\alpha}_2+\\cdots+k_s\\boldsymbol{\\alpha}_s=\\mathbf{0} \\)。 因为 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s \\) 线性无关，所以有齐次线性方程组，且方程组的系数行列式为 \\( \\begin{vmatrix} 1 & 1 & \\cdots & 1 \\\\ 0 & 1 & \\cdots & 1 \\\\ \\vdots & \\vdots & & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{vmatrix}=1\\neq 0 \\)，所以方程组只有零解，即 \\( k_1=k_2=\\cdots=k_s=0 \\)，即向量组线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-7",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 7,
    "stem": "已知 \\( \\boldsymbol{\\beta}_1=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2 \\)，\\( \\boldsymbol{\\beta}_2=\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2 \\)，\\( \\boldsymbol{\\beta}_3=3\\boldsymbol{\\alpha}_1-2\\boldsymbol{\\alpha}_2 \\)，证明 \\( \\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3 \\) 是线性相关的。",
    "options": null,
    "ans": null,
    "fb": "设有 \\( k_1,k_2,k_3 \\)，使得 \\( k_1\\boldsymbol{\\beta}_1+k_2\\boldsymbol{\\beta}_2+k_3\\boldsymbol{\\beta}_3=\\mathbf{0} \\)。将 \\( \\boldsymbol{\\beta}_1=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\beta}_2=\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2,\\boldsymbol{\\beta}_3=3\\boldsymbol{\\alpha}_1-2\\boldsymbol{\\alpha}_2 \\) 代入可得存在不全为零的常数使线性组合为零，故 \\( \\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3 \\) 线性相关。（注：因 \\( \\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3 \\) 均可由两个向量 \\( \\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2 \\) 线性表示，向量个数3>2，必线性相关。）",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-6",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 6,
    "stem": "设 \\( \\alpha_1 = (\\lambda - 5, 1, -3) \\)，\\( \\alpha_2 = (1, \\lambda - 5, 3) \\)，\\( \\alpha_3 = (-3, 3, \\lambda - 3) \\)，则 \\( \\lambda \\) ______ 时，\\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性相关；\\( \\lambda \\) ______ 时，\\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性无关。",
    "options": null,
    "ans": "\\( \\lambda = 0 \\) 或 \\( \\lambda = 4 \\) 或 \\( \\lambda = 9 \\) 时线性相关；\\( \\lambda \\neq 0 \\) 且 \\( \\lambda \\neq 4 \\) 且 \\( \\lambda \\neq 9 \\) 时线性无关。",
    "fb": "解：三个向量线性相关当且仅当以它们为列的行列式为零。计算\n\\(\\begin{vmatrix}\\lambda-5&1&-3\\\\1&\\lambda-5&3\\\\-3&3&\\lambda-3\\end{vmatrix}=\\lambda(\\lambda-4)(\\lambda-9)\\)。\n故当 \\(\\lambda=0,\\ 4,\\ 9\\) 时线性相关；当 \\(\\lambda\\neq0,\\ 4,\\ 9\\) 时线性无关。故应填：\\(\\lambda=0\\) 或 \\(\\lambda=4\\) 或 \\(\\lambda=9\\) 时线性相关；\\(\\lambda\\neq0\\) 且 \\(\\lambda\\neq4\\) 且 \\(\\lambda\\neq9\\) 时线性无关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-calc-3",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 3,
    "stem": "设 \\( \\alpha_1 = (6, a + 1, 3)^T \\)，\\( \\alpha_2 = (a, 2, -2)^T \\)，\\( \\alpha_3 = (a, 1, 0)^T \\)。试问：(1) \\( a \\) 为何值时，\\( \\alpha_1, \\alpha_2 \\) 线性相关？线性无关？(2) \\( a \\) 为何值时，\\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性相关？线性无关？",
    "options": null,
    "ans": null,
    "fb": "(1) 因为 \\( \\alpha_1 \\neq 0, \\alpha_2 \\neq 0 \\)，所以当对应分量成比例时线性相关。由 \\( \\frac{6}{a} = \\frac{3}{-2} \\) 得 \\( a = -4 \\)。(2) 计算行列式 \\( |\\alpha_1, \\alpha_2, \\alpha_3| = \\begin{vmatrix} 6 & a & a \\\\ a + 1 & 2 & 1 \\\\ 3 & -2 & 0 \\end{vmatrix} = -(a + 4)(2a - 3) \\)，令其等于 0 即得。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-calc-4",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 4,
    "stem": "设 \\( \\alpha_1 = (1, 1, 1)^T \\)，\\( \\alpha_2 = (1, 2, 3)^T \\)，\\( \\alpha_3 = (1, 3, t)^T \\)。试求：(1) \\( t \\) 为何值时，向量组 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性相关？(2) \\( t \\) 为何值时，向量组 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性无关？(3) 当向量组 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性相关时，将 \\( \\alpha_3 \\) 表示为 \\( \\alpha_1 \\) 和 \\( \\alpha_2 \\) 的线性组合。",
    "options": null,
    "ans": null,
    "fb": "\\( |\\alpha_1, \\alpha_2, \\alpha_3| = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & t \\end{vmatrix} = t - 5 \\)，故 \\( t = 5 \\) 时相关，\\( t \\neq 5 \\) 时无关。当 \\( t = 5 \\) 时，设 \\( \\alpha_3 = x_1\\alpha_1 + x_2\\alpha_2 \\)，解方程组 \\( \\begin{cases} x_1 + x_2 = 1 \\\\ x_1 + 2x_2 = 3 \\\\ x_1 + 3x_2 = 5 \\end{cases} \\) 得 \\( x_1 = -1, x_2 = 2 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-6",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 6,
    "stem": "设 \\( A \\) 是四阶矩阵，且 \\( |A| = 0 \\)，则 \\( A \\) 中 ______。",
    "options": [
      [
        "A",
        "必有一列元素全为 0"
      ],
      [
        "B",
        "必有两列元素对应成比例"
      ],
      [
        "C",
        "必有一列向量是其余列向量的线性组合"
      ],
      [
        "D",
        "任意一列向量是其余列向量的线性组合"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(|A|=0\\) 说明 \\(A\\) 的列向量组线性相关，即存在不全为零的系数使列的组合为零，故至少有一列可由其余列线性表示（极大无关组不能包含所有列）。A、B 仅为特例，D 要求\"任意\"过强。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-8",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 8,
    "stem": "证明：\\( n \\) 维列向量 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_n \\) 线性无关的充分必要条件是 \\( D = \\begin{vmatrix} \\alpha_1^T\\alpha_1 & \\alpha_1^T\\alpha_2 & \\cdots & \\alpha_1^T\\alpha_n \\\\ \\alpha_2^T\\alpha_1 & \\alpha_2^T\\alpha_2 & \\cdots & \\alpha_2^T\\alpha_n \\\\\\vdots & \\vdots & \\vdots & \\vdots\\\\ \\alpha_n^T\\alpha_1 & \\alpha_n^T\\alpha_2 & \\cdots & \\alpha_n^T\\alpha_n \\end{vmatrix} \\neq 0 \\)。",
    "options": null,
    "ans": null,
    "fb": "令 \\( A = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n) \\)，则 \\( A^TA \\) 的 \\( (i,j) \\) 元为 \\( \\alpha_i^T\\alpha_j \\)，所以 \\( D = |A^TA| = |A|^2 \\)。又 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_n \\) 线性无关的充要条件是 \\( |A| \\neq 0 \\)，即 \\( D = |A|^2 \\neq 0 \\)，所以得证。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-7",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 7,
    "stem": "研究下列向量组是线性相关还是线性无关：\\( \\alpha_1 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 3 \\end{bmatrix} \\)，\\( \\alpha_2 = \\begin{bmatrix} 0 \\\\ 2 \\\\ -5 \\end{bmatrix} \\)，\\( \\alpha_3 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 2 \\end{bmatrix} \\)。",
    "options": null,
    "ans": "向量组 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性相关。",
    "fb": "解：设 \\(k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3=0\\)，即\n\\(\\begin{cases}k_1-k_3=0,\\\\-2k_1+2k_2=0,\\\\3k_1-5k_2+2k_3=0.\\end{cases}\\)\n由前两式 \\(k_1=k_3,\\ k_2=k_1\\)，代入第三式得 \\(3k_1-5k_1+2k_1=0\\) 恒成立，取 \\(k_1=1\\) 得非零解，故线性相关。故应填：向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性相关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-7",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 7,
    "stem": "设 \\( A, B \\) 为满足 \\( AB = 0 \\) 的任意两个非零矩阵，则必有 ______。",
    "options": [
      [
        "A",
        "\\( A \\) 的列向量组线性相关，\\( B \\) 的行向量组线性相关"
      ],
      [
        "B",
        "\\( A \\) 的列向量组线性相关，\\( B \\) 的列向量组线性相关"
      ],
      [
        "C",
        "\\( A \\) 的行向量组线性相关，\\( B \\) 的行向量组线性相关"
      ],
      [
        "D",
        "\\( A \\) 的行向量组线性相关，\\( B \\) 的列向量组线性相关"
      ]
    ],
    "ans": "A",
    "fb": "解析：设 \\(AB=0\\)。对 \\(A\\)：存在非零列向量（取 \\(B\\) 的非零列）使 \\(Ax=0\\)，故 \\(A\\) 的列向量组线性相关。对 \\(B\\)：由 \\(B^TA^T=0\\) 且 \\(A^T\\neq0\\)，同理 \\(B^T\\) 的列即 \\(B\\) 的行向量组线性相关。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-8",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 8,
    "stem": "设 \\( A \\) 是 \\( m \\times n \\) 矩阵，\\( B \\) 是 \\( n \\times m \\) 矩阵，\\( E \\) 是 \\( n \\) 阶单位矩阵 \\( (m > n) \\)。已知 \\( BA = E \\)，试判断 \\( A \\) 的列向量组是否线性相关？",
    "options": null,
    "ans": "\\( A \\) 的列向量组线性无关。",
    "fb": "解：由 \\(BA=E\\)（\\(E\\) 为 \\(n\\) 阶单位阵，\\(m>n\\)）。若 \\(A\\) 的列向量组线性相关，则存在非零 \\(x\\in\\mathbb R^m\\) 使 \\(Ax=0\\)，于是 \\(BAx=0\\)，即 \\(Ex=0\\)，得 \\(x=0\\)，矛盾。故 \\(A\\) 的列向量组线性无关。故应填：\\(A\\) 的列向量组线性无关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-9",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 9,
    "stem": "设有两个向量组 \\( (I): \\begin{cases} \\alpha_1 = (a_{11}, a_{12}, \\cdots, a_{1r}) \\\\ \\alpha_2 = (a_{21}, a_{22}, \\cdots, a_{2r}) \\\\ \\cdots\\cdots\\cdots\\cdots \\\\ \\alpha_m = (a_{m1}, a_{m2}, \\cdots, a_{mr}) \\end{cases} \\)，\\( (II): \\begin{cases} \\beta_1 = (a_{11}, a_{12}, \\cdots, a_{1r}, \\cdots, a_{1,r+1}, \\cdots, a_{1n}) \\\\ \\beta_2 = (a_{21}, a_{22}, \\cdots, a_{2r}, \\cdots, a_{2,r+1}, \\cdots, a_{2n}) \\\\ \\cdots\\cdots\\cdots\\cdots \\\\ \\beta_m = (a_{m1}, a_{m2}, \\cdots, a_{mr}, \\cdots, a_{m,r+1}, \\cdots, a_{mn}) \\end{cases} \\)。(1) 证明如果 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关，则 \\( \\beta_1, \\beta_2, \\cdots, \\beta_m \\) 也线性无关。(2) 它们的逆是否成立？试举例说明。",
    "options": null,
    "ans": null,
    "fb": "(1) 设 \\( A = \\begin{bmatrix} \\alpha_1 \\\\ \\alpha_2 \\\\ \\vdots \\\\ \\alpha_m \\end{bmatrix} \\)，\\( B = \\begin{bmatrix} \\beta_1 \\\\ \\beta_2 \\\\ \\vdots \\\\ \\beta_m \\end{bmatrix} \\)，则 \\( r(A) \\leq r(B) \\leq m \\)。由 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关知 \\( r(A) = m \\)，故 \\( r(B) = m \\)，从而 \\( \\beta_1, \\beta_2, \\cdots, \\beta_m \\) 线性无关。(2) 若 \\( \\beta_1, \\beta_2, \\cdots, \\beta_m \\) 线性无关，不能保证 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关，如上反例所示。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-8",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 8,
    "stem": "设 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 均为 \\( n \\) 维列向量，\\( A \\) 是 \\( m \\times n \\) 矩阵，下列选项正确的是 ______。",
    "options": [
      [
        "A",
        "若 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性相关，则 \\( A\\alpha_1, A\\alpha_2, \\cdots, A\\alpha_s \\) 线性相关"
      ],
      [
        "B",
        "若 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性相关，则 \\( A\\alpha_1, A\\alpha_2, \\cdots, A\\alpha_s \\) 线性无关"
      ],
      [
        "C",
        "若 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性无关，则 \\( A\\alpha_1, A\\alpha_2, \\cdots, A\\alpha_s \\) 线性相关"
      ],
      [
        "D",
        "若 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性无关，则 \\( A\\alpha_1, A\\alpha_2, \\cdots, A\\alpha_s \\) 线性无关"
      ]
    ],
    "ans": "A",
    "fb": "解析：若 \\(\\alpha_1,\\dots,\\alpha_s\\) 线性相关，则存在不全为零的 \\(k_i\\) 使 \\(\\sum k_i\\alpha_i=0\\)，两边左乘 \\(A\\) 得 \\(\\sum k_i A\\alpha_i=0\\)，系数仍不全为零，故 \\(A\\alpha_1,\\dots,A\\alpha_s\\) 线性相关。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-10",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 10,
    "stem": "设 \\( n \\) 维向量组 \\( (I)\\ \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性无关，且 \\( (II)\\ \\beta_1, \\beta_2, \\cdots, \\beta_t \\) 可由 \\( (I) \\) 线性表示，即有 \\( s \\times t \\) 矩阵 \\( C \\)，使得 \\( (\\beta_1, \\beta_2, \\cdots, \\beta_t) = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_s) C \\)。证明：以 \\( \\beta_1, \\beta_2, \\cdots, \\beta_t \\) 为列向量排成的矩阵与矩阵 \\( C \\) 有相同的秩。",
    "options": null,
    "ans": null,
    "fb": "令 \\( A = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_s) \\)，\\( B = (\\beta_1, \\beta_2, \\cdots, \\beta_t) \\)，则 \\( B_{n \\times t} = A_{n \\times s} C_{s \\times t} \\)。由于 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性无关，故 \\( r(A) = s \\)，存在可逆矩阵 \\( P, Q \\) 使得 \\( A = P \\begin{bmatrix} E_s \\\\ 0 \\end{bmatrix} Q \\)。可推得 \\( r(B) \\leq r(C) \\) 且 \\( r(C) \\leq r(B) \\)，因此 \\( r(B) = r(C) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-9",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 9,
    "stem": "设 \\( \\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4 \\) 线性无关，判断下列向量组的线性相关性：(1) \\( \\alpha_1 + \\alpha_2 + \\alpha_3, \\alpha_2 + \\alpha_3 + \\alpha_4, \\alpha_3 + \\alpha_4 + \\alpha_1, \\alpha_4 + \\alpha_1 + \\alpha_2 \\)；(2) \\( \\alpha_1 - \\alpha_2, \\alpha_2 - \\alpha_3, \\alpha_3 - \\alpha_1 \\)；(3) \\( \\alpha_1 + \\alpha_2, \\alpha_1 + \\alpha_3, \\alpha_1 + \\alpha_4, \\alpha_2 + \\alpha_3, \\alpha_2 + \\alpha_4, \\alpha_3 + \\alpha_4 \\)。",
    "options": null,
    "ans": "(1) 线性无关；(2) 线性相关；(3) 线性相关。",
    "fb": "解：\n(1) 将四向量按基 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 写出坐标：\\(\\beta_1=(1,1,1,0)^T,\\ \\beta_2=(0,1,1,1)^T,\\ \\beta_3=(1,0,1,1)^T,\\ \\beta_4=(1,1,0,1)^T\\)。其系数矩阵行列式为 3（非零），故只有零解，线性无关。\n(2) 因为 \\((\\alpha_1-\\alpha_2)+(\\alpha_2-\\alpha_3)+(\\alpha_3-\\alpha_1)=0\\)，存在非零组合为零，故线性相关。\n(3) 这 6 个向量处于由 \\(\\alpha_1,\\dots,\\alpha_4\\) 张成的至多 4 维空间中，个数 6 大于维数，故必线性相关。\n故应填：(1) 线性无关；(2) 线性相关；(3) 线性相关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-10",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 10,
    "stem": "已知向量组 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\ (s \\geq 2) \\) 线性无关，设 \\( \\beta_1 = \\alpha_1 + \\alpha_2, \\beta_2 = \\alpha_2 + \\alpha_3, \\cdots, \\beta_{s-1} = \\alpha_{s-1} + \\alpha_s, \\beta_s = \\alpha_s + \\alpha_1 \\)。试讨论向量组 \\( \\beta_1, \\beta_2, \\cdots, \\beta_s \\) 的线性相关性。",
    "options": null,
    "ans": "当 \\( s \\) 为奇数时，\\( \\beta_1, \\beta_2, \\cdots, \\beta_s \\) 线性无关；当 \\( s \\) 为偶数时，\\( \\beta_1, \\beta_2, \\cdots, \\beta_s \\) 线性相关。",
    "fb": "解：设 \\(\\sum_{i=1}^s c_i\\beta_i=0\\)。按基 \\(\\alpha_1,\\dots,\\alpha_s\\) 展开，\\(\\alpha_j\\) 的系数为 \\(c_{j-1}+c_j\\)（下标模 \\(s\\)），故得方程组 \\(c_{j-1}+c_j=0\\ (j=1,\\dots,s)\\)。由此 \\(c_2=-c_1,\\ c_3=c_1,\\ \\dots\\)，交替出现，且 \\(c_s=(-1)^{s-1}c_1\\)，再代入 \\(c_s+c_1=0\\) 得 \\(c_1\\bigl(1+(-1)^{s-1}\\bigr)=0\\)。当 \\(s\\) 为奇数时 \\(1+(-1)^{s-1}=2\\neq0\\)，得 \\(c_1=0\\)，从而全为零，线性无关；当 \\(s\\) 为偶数时存在非零解，线性相关。故应填：当 \\(s\\) 为奇数时线性无关；当 \\(s\\) 为偶数时线性相关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-11",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 11,
    "stem": "已知 \\( n \\) 维列向量组 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\ (2 \\leq s \\leq n) \\) 线性无关，\\( k_1, k_2, \\cdots, k_{s-1} \\) 是任意 \\( s - 1 \\) 个数，证明向量组 \\( \\alpha_1 + k_1\\alpha_2, \\alpha_2 + k_2\\alpha_3, \\cdots, \\alpha_{s-1} + k_{s-1}\\alpha_s, \\alpha_s \\) 也线性无关。",
    "options": null,
    "ans": null,
    "fb": "记矩阵 \\( A = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_s) \\)，\\( B = (\\alpha_1 + k_1\\alpha_2, \\alpha_2 + k_2\\alpha_3, \\cdots, \\alpha_{s-1} + k_{s-1}\\alpha_s, \\alpha_s) \\)，则 \\( B = A \\begin{bmatrix} 1 & 0 & 0 & \\cdots & 0 & 0 \\\\ k_1 & 1 & 0 & \\cdots & 0 & 0 \\\\ 0 & k_2 & 1 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & k_{s-1} & 1 \\end{bmatrix} \\)。该系数矩阵为下三角可逆矩阵，行列式为 1，故 \\( r(B) = r(A) = s \\)，所以向量组线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-12",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 12,
    "stem": "设 \\( \\beta \\) 可由 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性表示，试证表达式唯一的充要条件是 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "必要性：设 \\( \\beta = k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_m\\alpha_m \\)。若表达式唯一，假设 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性相关，则存在不全为零的数 \\( \\lambda_1, \\lambda_2, \\cdots, \\lambda_m \\) 使得 \\( \\lambda_1\\alpha_1 + \\lambda_2\\alpha_2 + \\cdots + \\lambda_m\\alpha_m = 0 \\)。于是 \\( \\beta = (k_1 - \\lambda_1)\\alpha_1 + (k_2 - \\lambda_2)\\alpha_2 + \\cdots + (k_m - \\lambda_m)\\alpha_m \\) 为另一表达式，矛盾，故 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关。充分性：设 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m \\) 线性无关，若有两种表示，相减后由线性无关知系数全为零，故表示唯一。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-13",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 13,
    "stem": "设向量 \\( \\alpha_1 \\neq 0 \\)，证明：向量组 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_m\\ (m \\geq 2) \\) 线性无关的充分必要条件是每个向量 \\( \\alpha_i \\) 都不能由 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_{i-1} \\) 线性表示 \\( (i = 2, 3, \\cdots, m) \\)。",
    "options": null,
    "ans": null,
    "fb": "必要性用反证法：若有某向量 \\( \\alpha_i \\) 可由前面向量线性表示，则整体组线性相关，矛盾。充分性：设 \\( \\alpha_i \\) 不能由前面向量线性表示，若有 \\( k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_m\\alpha_m = 0 \\)，则必有 \\( k_m = 0 \\)，否则 \\( \\alpha_m \\) 可由前面向量表示；同理 \\( k_{m-1} = \\cdots = k_2 = 0 \\)；又 \\( \\alpha_1 \\neq 0 \\)，故 \\( k_1 = 0 \\)。所以向量组线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-14",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 14,
    "stem": "已知 \\( n \\) 维向量组 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\ (s \\leq n) \\) 线性无关，\\( \\beta \\) 是任意 \\( n \\) 维向量，证明向量组 \\( \\beta, \\alpha_1, \\cdots, \\alpha_s \\) 中至多有一个向量能由其前面的向量线性表示。",
    "options": null,
    "ans": null,
    "fb": "假设有两个向量可由前面的向量线性表示，则可推出 \\( \\alpha_1, \\alpha_2, \\cdots, \\alpha_s \\) 线性相关，矛盾。因此向量组 \\( \\beta, \\alpha_1, \\cdots, \\alpha_s \\) 中至多有一个向量能由其前面的向量线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-11",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 11,
    "stem": "已知向量组 \\( \\alpha_1 = (1, 1, 2)^T \\)，\\( \\alpha_2 = (3, t, 1)^T \\)，\\( \\alpha_3 = (0, 2, -t)^T \\) 线性相关，求 \\( t \\) 的值。",
    "options": null,
    "ans": "\\( t = 5 \\) 或 \\( t = -2 \\)。",
    "fb": "解：三向量线性相关当且仅当行列式 \\(\\begin{vmatrix}1&3&0\\\\1&t&2\\\\2&1&-t\\end{vmatrix}=0\\)。计算得 \\(-t^2+3t+10=0\\)，即 \\(t^2-3t-10=0\\)，解得 \\(t=5\\) 或 \\(t=-2\\)。故应填 \\(t=5\\) 或 \\(t=-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-12",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 12,
    "stem": "已知向量组 \\( \\alpha_1 = (1, 1, 2, 1)^T \\)，\\( \\alpha_2 = (1, 0, 0, 2)^T \\)，\\( \\alpha_3 = (-1, -4, -8, k)^T \\) 线性相关，求 \\( k \\)。",
    "options": null,
    "ans": "\\( k = 2 \\)。",
    "fb": "解：三向量线性相关等价于存在不全为零的 \\(k_1,k_2,k_3\\) 使 \\(k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3=0\\)。由前三个分量：\\(k_1+k_2-k_3=0\\)，\\(k_1-4k_3=0\\)，\\(2k_1-8k_3=0\\)。由后两式得 \\(k_1=4k_3\\)，代入第一式得 \\(k_2=-3k_3\\)。由第四分量：\\(k_1+2k_2+k k_3=0\\)，即 \\((4-6+k)k_3=(k-2)k_3=0\\)。取 \\(k_3\\neq0\\) 得 \\(k=2\\)。故应填 \\(k=2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-13",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 13,
    "stem": "已知 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性无关，若 \\( \\alpha_1 + 2\\alpha_2, 2\\alpha_2 + a\\alpha_3, 3\\alpha_3 + 2\\alpha_1 \\) 线性相关，求 \\( a \\) 的值。",
    "options": null,
    "ans": "\\( a = -\\frac{3}{2} \\)。",
    "fb": "解：设 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)C\\)，其中 \\(C=\\begin{bmatrix}1&0&2\\\\2&2&0\\\\0&a&3\\end{bmatrix}\\)。\\(|C|=1\\cdot(2\\cdot3-0)-0+2\\cdot(2a-0)=6+4a\\)。因 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关，\\(\\beta_1,\\beta_2,\\beta_3\\) 线性相关当且仅当 \\(|C|=0\\)，即 \\(6+4a=0\\)，得 \\(a=-\\frac32\\)。故应填 \\(a=-\\frac32\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-14",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 14,
    "stem": "若向量组 \\( \\alpha_1, \\alpha_2, \\alpha_3 \\) 线性无关，当常数 \\( l, m \\) 满足 ______ 时，向量组 \\( l\\alpha_2 - \\alpha_1, m\\alpha_3 - \\alpha_2, \\alpha_1 - \\alpha_3 \\) 是线性无关的。",
    "options": null,
    "ans": "\\( lm \\neq 1 \\)。",
    "fb": "解：设 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)C\\)，其中 \\(\\beta_1=l\\alpha_2-\\alpha_1=(-1,l,0)\\)，\\(\\beta_2=m\\alpha_3-\\alpha_2=(0,-1,m)\\)，\\(\\beta_3=\\alpha_1-\\alpha_3=(1,0,-1)\\)（按 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 的坐标），故 \\(C=\\begin{bmatrix}-1&0&1\\\\l&-1&0\\\\0&m&-1\\end{bmatrix}\\)。\\(|C|=-1\\cdot1-0+1\\cdot(lm-0)=lm-1\\)。线性无关当且仅当 \\(|C|\\neq0\\)，即 \\(lm\\neq1\\)。故应填 \\(lm\\neq1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-15",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 15,
    "stem": "设 \\( A = \\begin{bmatrix} -2 & 1 & 3 \\\\ 1 & 1 & 0 \\\\ -4 & 1 & t \\end{bmatrix} \\)，三维向量 \\( \\alpha_1, \\alpha_2 \\) 线性无关，\\( A\\alpha_1, A\\alpha_2 \\) 线性相关，则 \\( t = \\) ______。",
    "options": null,
    "ans": "\\( t = 5 \\)。",
    "fb": "解：因 \\(\\alpha_1,\\alpha_2\\) 线性无关，而 \\(A\\alpha_1,A\\alpha_2\\) 线性相关，故 \\(A\\) 必不可逆，即 \\(|A|=0\\)。计算 \\(|A|=\\begin{vmatrix}-2&1&3\\\\1&1&0\\\\-4&1&t\\end{vmatrix}=-2t-t+15=15-3t\\)。令 \\(15-3t=0\\) 得 \\(t=5\\)。故应填 \\(t=5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-16",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 16,
    "stem": "已知矩阵 \\( A=\\begin{bmatrix} 1 & 2 & -2 \\\\ 2 & 1 & 2 \\\\ 3 & 0 & 4 \\end{bmatrix} \\)，向量 \\( \\alpha=\\begin{bmatrix} a \\\\ 1 \\\\ 1 \\end{bmatrix} \\)，若 \\( A\\alpha \\) 与 \\( \\alpha \\) 线性相关，则 \\( a= \\) ______。",
    "options": null,
    "ans": "\\(a=-1\\)",
    "fb": "解：\\(A\\alpha=\\begin{bmatrix}1&2&-2\\\\2&1&2\\\\3&0&4\\end{bmatrix}\\begin{bmatrix}a\\\\1\\\\1\\end{bmatrix}=\\begin{bmatrix}a\\\\2a+3\\\\3a+4\\end{bmatrix}\\)。由 \\(A\\alpha\\) 与 \\(\\alpha\\) 线性相关，存在 \\(\\lambda\\) 使 \\(A\\alpha=\\lambda\\alpha\\)，即 \\((a,2a+3,3a+4)^T=\\lambda(a,1,1)^T\\)。由后两分量得 \\(2a+3=\\lambda,\\ 3a+4=\\lambda\\)，故 \\(2a+3=3a+4\\)，得 \\(a=-1\\)。代入得 \\(\\lambda=1\\)，第一分量 \\(-1=1\\cdot(-1)\\) 成立。故应填 \\(a=-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-9",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 9,
    "stem": "已知向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性无关。若向量组 \\( \\alpha_1+\\alpha_2,\\ \\alpha_2+\\alpha_3,\\ k\\alpha_3+l\\alpha_1 \\) 线性相关，则数 \\( k \\) 和数 \\( l \\) 应满足条件 ______。",
    "options": [
      [
        "A",
        "\\(k=l=1\\)"
      ],
      [
        "B",
        "\\(k-l=1\\)"
      ],
      [
        "C",
        "\\(k+l=1\\)"
      ],
      [
        "D",
        "\\(k+l=0\\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：设 \\(x(\\alpha_1+\\alpha_2)+y(\\alpha_2+\\alpha_3)+z(k\\alpha_3+l\\alpha_1)=0\\)，即 \\((x+lz)\\alpha_1+(x+y)\\alpha_2+(y+kz)\\alpha_3=0\\)。由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关得 \\(\\begin{cases}x+lz=0,\\\\x+y=0,\\\\y+kz=0.\\end{cases}\\) 由前两式 \\(y=-x,\\ lz=-x\\)，代入第三式得 \\(-x+k(-x/l)=0\\)，即 \\(x(1+k/l)=0\\)。要有非零解需 \\(1+k/l=0\\)，即 \\(k+l=0\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-17",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 17,
    "stem": "设行向量组 \\( (2,1,1,1),\\ (2,1,a,a),\\ (3,2,1,a),\\ (4,3,2,1) \\) 线性相关，且 \\( a\\ne 1 \\)，则 \\( a= \\) ______。",
    "options": null,
    "ans": "\\(a=\\dfrac{1}{2}\\)",
    "fb": "解：四个行向量在 \\(\\mathbb R^4\\) 中线性相关当且仅当以它们为行的行列式为零。构造矩阵\n\\(M=\\begin{bmatrix}2&1&1&1\\\\2&1&a&a\\\\3&2&1&a\\\\4&3&2&1\\end{bmatrix}\\)。经计算 \\(|M|\\) 为 \\(a\\) 的二次式，其零点为 \\(a=1\\) 与 \\(a=\\frac12\\)。由已知 \\(a\\neq1\\)，故 \\(a=\\frac12\\)。故应填 \\(a=\\frac12\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-10",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 10,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 的秩为 \\( s-1 \\)，则下列正确的是 ______。",
    "options": [
      [
        "A",
        "每个 \\( \\alpha_i \\) 可用 \\( \\alpha_1,\\cdots,\\alpha_{i-1},\\alpha_{i+1},\\cdots,\\alpha_s \\) 线性表示"
      ],
      [
        "B",
        "有两个向量 \\( \\alpha_i,\\alpha_j \\) 的分量成比例"
      ],
      [
        "C",
        "对任何 \\( 1<r<s \\)，\\( r(\\alpha_1,\\alpha_2,\\cdots,\\alpha_r)\\ge r-1 \\)"
      ],
      [
        "D",
        "对任何 \\( 1<r<s \\)，\\( r(\\alpha_1,\\alpha_2,\\cdots,\\alpha_r)=r-1 \\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：秩为 \\(s-1\\) 说明该组有 \\(s-1\\) 个向量构成极大无关组。任取前 \\(r\\) 个向量，其秩至少为 \\((s-1)-(s-r)=r-1\\)（从全组中去掉 \\(s-r\\) 个向量，秩至多减少 \\(s-r\\)）。故对任意 \\(1<r<s\\)，\\(r(\\alpha_1,\\dots,\\alpha_r)\\ge r-1\\)。A 要求每个都能被其余表示，不一定；B 要求成比例，不一定；D 要求恰为 \\(r-1\\)，也不一定。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-mc-11",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 11,
    "stem": "若 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 是向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 的极大无关组，则下面说法中不正确的是 ______。",
    "options": [
      [
        "A",
        "\\( \\alpha_s \\) 可由 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 线性表示"
      ],
      [
        "B",
        "\\( \\alpha_1 \\) 可由 \\( \\alpha_{r+1},\\alpha_{r+2},\\cdots,\\alpha_s \\) 线性表示"
      ],
      [
        "C",
        "\\( \\alpha_1 \\) 可由 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 线性表示"
      ],
      [
        "D",
        "\\( \\alpha_s \\) 可由 \\( \\alpha_{r+1},\\alpha_{r+2},\\cdots,\\alpha_s \\) 线性表示"
      ]
    ],
    "ans": "B",
    "fb": "解析：极大无关组的定义要求它自身线性无关且能表示全组向量。选项 B 称 \\(\\alpha_1\\) 可由 \\(\\alpha_{r+1},\\dots,\\alpha_s\\) 表示，这一般不成立（\\(\\alpha_1\\) 属于极大组，未必能被组外向量表示），故 B 不正确。A、C、D 均由极大无关组性质可得。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-18",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 18,
    "stem": "求向量组 \\( \\alpha_1=(1,-2,0,3)^{T},\\ \\alpha_2=(2,-5,-3,6)^{T},\\ \\alpha_3=(0,1,3,0)^{T},\\ \\alpha_4=(2,-1,4,-7)^{T},\\ \\alpha_5=(5,-8,1,2)^{T} \\) 的秩和一个极大线性无关组，并将其余向量表示成该极大线性无关组的线性组合。",
    "options": null,
    "ans": "秩为 \\(3\\)；一个极大线性无关组为 \\( \\alpha_1,\\alpha_2,\\alpha_4 \\)；且 \\( \\alpha_3=2\\alpha_1-\\alpha_2 \\)，\\( \\alpha_5=\\alpha_1+\\alpha_2+\\alpha_4 \\)。",
    "fb": "解：以五向量为列作矩阵并作初等行变换，主元列位于第 1、2、4 列，故秩为 3，\\(\\alpha_1,\\alpha_2,\\alpha_4\\) 为一个极大无关组。回代得关系 \\(\\alpha_3=2\\alpha_1-\\alpha_2\\)，\\(\\alpha_5=\\alpha_1+\\alpha_2+\\alpha_4\\)。故应填：秩为 3；一个极大线性无关组为 \\(\\alpha_1,\\alpha_2,\\alpha_4\\)；且 \\(\\alpha_3=2\\alpha_1-\\alpha_2\\)，\\(\\alpha_5=\\alpha_1+\\alpha_2+\\alpha_4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-19",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 19,
    "stem": "求向量组 \\( \\alpha_1=\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\\\ k \\end{bmatrix},\\ \\alpha_2=\\begin{bmatrix} 1 \\\\ 1 \\\\ k \\\\ 1 \\end{bmatrix},\\ \\alpha_3=\\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\\\ 1 \\end{bmatrix} \\) 的秩和一个极大线性无关组。",
    "options": null,
    "ans": "当 \\(k=1\\) 时，秩为 \\(2\\)，\\( \\alpha_1,\\alpha_3 \\) 为一个极大线性无关组；当 \\(k\\ne 1\\) 时，秩为 \\(3\\)，\\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 为一个极大线性无关组。",
    "fb": "解：以三向量为列作矩阵 \\(A=\\begin{bmatrix}1&1&1\\\\1&1&2\\\\1&k&1\\\\k&1&1\\end{bmatrix}\\)。当 \\(k=1\\) 时，\\(\\alpha_1=\\alpha_2=(1,1,1,1)^T\\)，\\(\\alpha_3=(1,2,1,1)^T\\)，秩为 2，\\(\\alpha_1,\\alpha_3\\)（或 \\(\\alpha_2,\\alpha_3\\)）为极大无关组。当 \\(k\\neq1\\) 时，前 3 行构成的子式 \\(\\begin{vmatrix}1&1&1\\\\1&1&2\\\\1&k&1\\end{vmatrix}=1-k\\neq0\\)，故秩为 3，\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为极大无关组。故应填：当 \\(k=1\\) 时，秩为 2，\\(\\alpha_1,\\alpha_3\\) 为一个极大线性无关组；当 \\(k\\neq1\\) 时，秩为 3，\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为一个极大线性无关组。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-calc-5",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 5,
    "stem": "已知向量组 \\( \\alpha_1=(1,-1,2,4),\\ \\alpha_2=(0,3,1,2),\\ \\alpha_3=(3,0,7,14),\\ \\alpha_4=(2,1,5,6),\\ \\alpha_5=(1,-1,2,0) \\)。(1) 说明 \\( \\alpha_1,\\alpha_5 \\) 线性无关；(2) 求包含 \\( \\alpha_1,\\alpha_5 \\) 的一个极大无关组；(3) 将其余向量用该极大无关组线性表示。",
    "options": null,
    "ans": null,
    "fb": "(1) \\( \\alpha_1 \\) 与 \\( \\alpha_5 \\) 对应分量不成比例，故线性无关。(2) 把向量组按列排成矩阵作初等行变换，可得包含 \\( \\alpha_1,\\alpha_5 \\) 的一个极大无关组为 \\( \\alpha_1,\\alpha_2,\\alpha_5 \\)。(3) 继续化为行最简形得 \\( \\alpha_3=3\\alpha_1+\\alpha_2 \\)，\\( \\alpha_4=\\alpha_1+\\alpha_2+\\alpha_5 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-20",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 20,
    "stem": "已知 \\( \\alpha_1=(a,b,0),\\ \\alpha_2=(a,2b,1),\\ \\alpha_3=(1,2,3),\\ \\alpha_4=(2,4,6) \\)。若 \\( r(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)=3 \\)，则 \\( a,b \\) 应满足 ______。",
    "options": null,
    "ans": "\\(b-2a+3ab\\ne 0\\)",
    "fb": "解：注意到 \\(\\alpha_4=2\\alpha_3\\)，故 \\(\\alpha_3,\\alpha_4\\) 线性相关，整体秩为 3 等价于 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关。以其为列作矩阵，行列式\n\\(\\begin{vmatrix}a&a&1\\\\b&2b&2\\\\0&1&3\\end{vmatrix}=a(6b-2)-a(3b)+b=3ab-2a+b\\)。\n故秩为 3 当且仅当 \\(3ab-2a+b\\neq0\\)，即 \\(b-2a+3ab\\neq0\\)。故应填 \\(b-2a+3ab\\neq0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-21",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 21,
    "stem": "已知 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_5 \\) 均为 \\(n\\) 维列向量，\\( \\beta_1=\\alpha_1+2\\alpha_2,\\ \\beta_2=-\\alpha_1+\\alpha_2+2\\alpha_3,\\ \\beta_3=-\\alpha_2+\\alpha_3+2\\alpha_4,\\ \\beta_4=-\\alpha_3+\\alpha_4+2\\alpha_5,\\ \\beta_5=-\\alpha_4+\\alpha_5 \\)，则 \\( r(\\alpha_1,\\alpha_2,\\cdots,\\alpha_5) \\) 与 \\( r(\\beta_1,\\beta_2,\\cdots,\\beta_5) \\) 应满足关系 ______。",
    "options": null,
    "ans": "相等",
    "fb": "解：将关系写成矩阵形式 \\((\\beta_1,\\dots,\\beta_5)=(\\alpha_1,\\dots,\\alpha_5)C\\)，其中\n\\(C=\\begin{bmatrix}1&-1&0&0&0\\\\2&1&-1&0&0\\\\0&2&1&-1&0\\\\0&0&2&1&-1\\\\0&0&0&2&1\\end{bmatrix}\\)。\n可计算其行列式非零（例如按递推得其值不为 0），故 \\(C\\) 可逆，两组等价，从而秩相等。故应填：相等。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-22",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 22,
    "stem": "设三维向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性无关，\\( \\gamma_1=\\alpha_1+\\alpha_2-\\alpha_3,\\ \\gamma_2=3\\alpha_1-\\alpha_2,\\ \\gamma_3=4\\alpha_1-\\alpha_3,\\ \\gamma_4=2\\alpha_1-2\\alpha_2+\\alpha_3 \\)。求向量组 \\( \\gamma_1,\\gamma_2,\\gamma_3,\\gamma_4 \\) 的秩。",
    "options": null,
    "ans": "\\(2\\)",
    "fb": "解：将 \\(\\gamma_1,\\gamma_2,\\gamma_3,\\gamma_4\\) 按基 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 写出坐标：\\(\\gamma_1=(1,1,-1)^T,\\ \\gamma_2=(3,-1,0)^T,\\ \\gamma_3=(4,0,-1)^T,\\ \\gamma_4=(2,-2,1)^T\\)。易见 \\(\\gamma_3=\\gamma_1+\\gamma_2\\)，\\(\\gamma_4=-\\gamma_1+\\gamma_2\\)，而 \\(\\gamma_1,\\gamma_2\\) 不成比例，故秩为 2。故应填 2。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-15",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 15,
    "stem": "已知向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 的秩是 \\(r\\)，向量组 \\( \\beta_1,\\beta_2,\\cdots,\\beta_s \\) 的秩是 \\(t\\)，证明 \\( r(\\alpha_1+\\beta_1,\\alpha_2+\\beta_2,\\cdots,\\alpha_s+\\beta_s)\\le r+t \\)。",
    "options": null,
    "ans": null,
    "fb": "设 \\( \\alpha_{i1},\\cdots,\\alpha_{ir} \\) 是 \\( \\alpha_1,\\cdots,\\alpha_s \\) 的极大无关组，\\( \\beta_{j1},\\cdots,\\beta_{jt} \\) 是 \\( \\beta_1,\\cdots,\\beta_s \\) 的极大无关组。则每个 \\( \\alpha_k+\\beta_k \\) 均可由 \\( \\alpha_{i1},\\cdots,\\alpha_{ir},\\beta_{j1},\\cdots,\\beta_{jt} \\) 线性表示，故 \\( r(\\alpha_1+\\beta_1,\\cdots,\\alpha_s+\\beta_s)\\le r(\\alpha_{i1},\\cdots,\\alpha_{ir},\\beta_{j1},\\cdots,\\beta_{jt})\\le r+t \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-16",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 16,
    "stem": "已知向量组 (I)：\\( \\alpha_1,\\alpha_2,\\alpha_3 \\)；(II)：\\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4 \\)；(III)：\\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_5 \\)。如果各向量组的秩 \\( r(\\text{I})=r(\\text{II})=3,\\ r(\\text{III})=4 \\)。证明：向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_5-\\alpha_4 \\) 的秩为 \\(4\\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\(r(\\text{I})=r(\\text{II})=3\\) 知 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性无关，且 \\( \\alpha_4 \\) 可由它们线性表示，设 \\( \\alpha_4=\\lambda_1\\alpha_1+\\lambda_2\\alpha_2+\\lambda_3\\alpha_3 \\)。设 \\(k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3+k_4(\\alpha_5-\\alpha_4)=0\\)，代入整理得 \\((k_1-\\lambda_1k_4)\\alpha_1+(k_2-\\lambda_2k_4)\\alpha_2+(k_3-\\lambda_3k_4)\\alpha_3+k_4\\alpha_5=0\\)。由 \\(r(\\text{III})=4\\) 知 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_5 \\) 线性无关，故系数全为零，推出 \\(k_1=k_2=k_3=k_4=0\\)。因此 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_5-\\alpha_4 \\) 线性无关，秩为 \\(4\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-17",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 17,
    "stem": "设向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 中任一向量 \\( \\alpha_i \\) 不是它前面 \\( i-1 \\) 个向量的线性组合，且 \\( \\alpha_1\\ne 0 \\)，试证：向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 的秩为 \\(m\\)。",
    "options": null,
    "ans": null,
    "fb": "用反证法。假设向量组线性相关，则存在不全为零的数 \\(k_1,\\cdots,k_m\\) 使 \\(k_1\\alpha_1+\\cdots+k_m\\alpha_m=0\\)。断言 \\(k_m=0\\)，否则 \\( \\alpha_m \\) 可由前面向量线性表示，矛盾。于是 \\(k_1\\alpha_1+\\cdots+k_{m-1}\\alpha_{m-1}=0\\)。同理可得 \\(k_{m-1}=\\cdots=k_2=0\\)，进而 \\(k_1\\alpha_1=0\\)。由 \\( \\alpha_1\\ne 0 \\) 得 \\(k_1=0\\)，与系数不全为零矛盾。故向量组线性无关，秩为 \\(m\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-18",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 18,
    "stem": "证明：向量组 (1)\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 与向量组 (2)\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r,\\alpha_{r+1},\\cdots,\\alpha_s \\) 有相同的秩的充分必要条件是每个 \\( \\alpha_i\\ (i=r+1,\\cdots,s) \\) 都可由向量组 (1) 线性表示。",
    "options": null,
    "ans": null,
    "fb": "必要性：若两组秩相同，当秩为零时结论显然成立。当秩不为零时，(1) 包含于 (2) 且秩相等，故 (1) 的极大无关组也是 (2) 的极大无关组，因此每个 \\( \\alpha_i\\ (i=r+1,\\cdots,s) \\) 都可由该极大无关组，从而由向量组 (1) 线性表示。充分性：若每个 \\( \\alpha_i\\ (i=r+1,\\cdots,s) \\) 可由向量组 (1) 线性表示，则两组等价，故秩相同。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-19",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 19,
    "stem": "设 \\( \\beta_1=\\alpha_2+\\alpha_3+\\cdots+\\alpha_m,\\ \\beta_2=\\alpha_1+\\alpha_3+\\cdots+\\alpha_m,\\ \\cdots,\\ \\beta_m=\\alpha_1+\\alpha_2+\\cdots+\\alpha_{m-1} \\)，其中 \\( m>1 \\)。证明：向量组 \\( \\beta_1,\\beta_2,\\cdots,\\beta_m \\) 与 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 有相同的秩。",
    "options": null,
    "ans": null,
    "fb": "由题设知 \\( \\beta_1,\\cdots,\\beta_m \\) 可由 \\( \\alpha_1,\\cdots,\\alpha_m \\) 线性表示，且 \\( \\beta_1+\\cdots+\\beta_m=(m-1)(\\alpha_1+\\cdots+\\alpha_m) \\)，于是 \\( \\alpha_1+\\cdots+\\alpha_m=\\dfrac{1}{m-1}(\\beta_1+\\cdots+\\beta_m) \\)。从而 \\( \\alpha_i=\\dfrac{1}{m-1}(\\beta_1+\\cdots+\\beta_m)-\\beta_i \\)，即 \\( \\alpha_1,\\cdots,\\alpha_m \\) 也可由 \\( \\beta_1,\\cdots,\\beta_m \\) 线性表示。故两组等价，秩相同。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-mc-12",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 12,
    "stem": "设 \\( n \\) 维列向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m\\ (m<n) \\) 线性无关，则 \\( n \\) 维列向量组 \\( \\beta_1,\\beta_2,\\cdots,\\beta_m \\) 线性无关的充分必要条件为 ______。",
    "options": [
      [
        "A",
        "向量组 \\( \\alpha_1,\\cdots,\\alpha_m \\) 可由向量组 \\( \\beta_1,\\cdots,\\beta_m \\) 线性表示"
      ],
      [
        "B",
        "向量组 \\( \\beta_1,\\cdots,\\beta_m \\) 可由向量组 \\( \\alpha_1,\\cdots,\\alpha_m \\) 线性表示"
      ],
      [
        "C",
        "向量组 \\( \\alpha_1,\\cdots,\\alpha_m \\) 与向量组 \\( \\beta_1,\\cdots,\\beta_m \\) 等价"
      ],
      [
        "D",
        "矩阵 \\( A=(\\alpha_1,\\cdots,\\alpha_m) \\) 与矩阵 \\( B=(\\beta_1,\\cdots,\\beta_m) \\) 等价"
      ]
    ],
    "ans": "D",
    "fb": "解析：两个等维数向量组 \\((\\alpha_1,\\dots,\\alpha_m)\\) 与 \\((\\beta_1,\\dots,\\beta_m)\\) 均为列向量且各自无关。矩阵 \\(A=(\\alpha_1,\\dots,\\alpha_m)\\)，\\(B=(\\beta_1,\\dots,\\beta_m)\\) 均为 \\(n\\times m\\) 列满秩矩阵。\\(A\\) 与 \\(B\\) 等价（存在可逆 \\(P,Q\\) 使 \\(PAQ=B\\)，此处即存在 \\(m\\) 阶可逆 \\(Q\\) 使 \\(AQ=B\\)）当且仅当它们的列空间维数相同且可互表，这正是两组等价的充要条件。A、B、C 仅为单向或充分非必要。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-13",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 13,
    "stem": "设向量组 \\( \\alpha,\\beta,\\gamma \\) 及数 \\( k,l,m \\) 满足：\\( k\\alpha+l\\beta+m\\gamma=0 \\)，且 \\( km\\ne 0 \\)，则 ______。",
    "options": [
      [
        "A",
        "\\( \\alpha,\\beta \\) 与 \\( \\alpha,\\gamma \\) 等价"
      ],
      [
        "B",
        "\\( \\alpha,\\beta \\) 与 \\( \\beta,\\gamma \\) 等价"
      ],
      [
        "C",
        "\\( \\alpha,\\gamma \\) 与 \\( \\beta,\\gamma \\) 等价"
      ],
      [
        "D",
        "\\( \\alpha \\) 与 \\( \\gamma \\) 等价"
      ]
    ],
    "ans": "B",
    "fb": "解析：由 \\(k\\alpha+l\\beta+m\\gamma=0\\) 且 \\(km\\neq0\\)，得 \\(\\gamma=-\\frac{k}{m}\\alpha-\\frac{l}{m}\\beta\\)，即 \\(\\gamma\\) 可由 \\(\\alpha,\\beta\\) 线性表示；同理由 \\(k\\neq0\\) 得 \\(\\alpha=-\\frac{l}{k}\\beta-\\frac{m}{k}\\gamma\\)，即 \\(\\alpha\\) 可由 \\(\\beta,\\gamma\\) 线性表示。因此 \\(\\{\\alpha,\\beta\\}\\) 与 \\(\\{\\beta,\\gamma\\}\\) 可互相线性表示，二者等价。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-20",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 20,
    "stem": "设向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 线性无关，且可由向量组 \\( \\beta_1,\\beta_2,\\cdots,\\beta_m \\) 线性表示。证明：这两个向量组等价，从而 \\( \\beta_1,\\beta_2,\\cdots,\\beta_m \\) 也线性无关。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( \\alpha_1,\\cdots,\\alpha_m \\) 线性无关且可由 \\( \\beta_1,\\cdots,\\beta_m \\) 线性表示，所以 \\(m=r(\\alpha_1,\\cdots,\\alpha_m)\\le r(\\beta_1,\\cdots,\\beta_m)\\le m\\)，故 \\(r(\\beta_1,\\cdots,\\beta_m)=m\\)，即 \\( \\beta_1,\\cdots,\\beta_m \\) 线性无关。于是 \\( \\beta_1,\\cdots,\\beta_m \\) 是向量组 \\( \\alpha_1,\\cdots,\\alpha_m,\\beta_1,\\cdots,\\beta_m \\) 的一个极大无关组；而 \\( \\alpha_1,\\cdots,\\alpha_m \\) 也是该向量组的 \\(m\\) 个线性无关向量，从而也是极大无关组。因此 \\( \\beta_1,\\cdots,\\beta_m \\) 可由 \\( \\alpha_1,\\cdots,\\alpha_m \\) 线性表示，两组等价。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-23",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 23,
    "stem": "把向量组 \\( \\alpha_1=(1,1,1)^T, \\alpha_2=(0,1,1)^T, \\alpha_3=(0,0,1)^T \\) 标准正交化。",
    "options": null,
    "ans": "\\( \\varepsilon_1=\\frac{1}{\\sqrt{3}}(1,1,1)^T, \\varepsilon_2=\\frac{1}{\\sqrt{6}}(-2,1,1)^T, \\varepsilon_3=\\frac{1}{\\sqrt{2}}(0,-1,1)^T \\)",
    "fb": "解：施密特正交化。取 \\(u_1=\\alpha_1=(1,1,1)^T\\)，\\(e_1=\\frac{1}{\\sqrt3}(1,1,1)^T\\)。\\(u_2=\\alpha_2-(\\alpha_2,e_1)e_1=(0,1,1)^T-\\frac{2}{3}(1,1,1)^T=(-\\frac23,\\frac13,\\frac13)^T\\)，\\(e_2=\\frac{1}{\\sqrt6}(-2,1,1)^T\\)。\\(u_3=\\alpha_3-(\\alpha_3,e_1)e_1-(\\alpha_3,e_2)e_2=(0,-\\frac12,\\frac12)^T\\)，\\(e_3=\\frac{1}{\\sqrt2}(0,-1,1)^T\\)。故应填：\\(\\varepsilon_1=\\frac{1}{\\sqrt3}(1,1,1)^T,\\ \\varepsilon_2=\\frac{1}{\\sqrt6}(-2,1,1)^T,\\ \\varepsilon_3=\\frac{1}{\\sqrt2}(0,-1,1)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-proof-21",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 21,
    "stem": "已知 \\( n \\) 维向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n \\) 线性无关，若向量 \\( \\beta \\) 与 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n \\) 都正交，证明 \\( \\beta \\) 为零向量。",
    "options": null,
    "ans": null,
    "fb": "\\(\\beta,\\alpha_1,\\cdots,\\alpha_n\\) 是 \\(n+1\\) 个 \\(n\\) 维向量，故线性相关；又 \\(\\alpha_1,\\cdots,\\alpha_n\\) 线性无关，所以 \\(\\beta=k_1\\alpha_1+\\cdots+k_n\\alpha_n\\)。于是 \\((\\beta,\\beta)=k_1(\\beta,\\alpha_1)+\\cdots+k_n(\\beta,\\alpha_n)=0\\)，故 \\(\\beta=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-proof-22",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 22,
    "stem": "已知列向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关，且都与非零列向量 \\( \\beta \\) 正交，证明向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s,\\beta \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设 \\(k_1\\alpha_1+\\cdots+k_s\\alpha_s+k\\beta=0\\)。以 \\(\\beta^T\\) 左乘两边，由 \\(\\beta^T\\alpha_i=0\\) 得 \\(k\\beta^T\\beta=0\\)。因 \\(\\beta\\neq 0\\)，故 \\(k=0\\)。代入得 \\(k_1\\alpha_1+\\cdots+k_s\\alpha_s=0\\)，由 \\(\\alpha_1,\\cdots,\\alpha_s\\) 线性无关知 \\(k_1=\\cdots=k_s=0\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-24",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 24,
    "stem": "从 \\( \\mathbb{R}^2 \\) 的基 \\( \\alpha_1=\\begin{bmatrix}1\\\\0\\end{bmatrix},\\alpha_2=\\begin{bmatrix}1\\\\-1\\end{bmatrix} \\) 到基 \\( \\beta_1=\\begin{bmatrix}1\\\\1\\end{bmatrix},\\beta_2=\\begin{bmatrix}1\\\\2\\end{bmatrix} \\) 的过渡矩阵为______。",
    "options": null,
    "ans": "\\( \\begin{pmatrix} 2 & 3 \\\\ -1 & -2 \\end{pmatrix} \\)",
    "fb": "解：设从基 \\(\\alpha\\) 到基 \\(\\beta\\) 的过渡矩阵为 \\(P\\)，则 \\((\\beta_1,\\beta_2)=(\\alpha_1,\\alpha_2)P\\)。故 \\(P=(\\alpha_1,\\alpha_2)^{-1}(\\beta_1,\\beta_2)\\)。计算 \\((\\alpha_1,\\alpha_2)^{-1}=\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix}^{-1}=\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix}\\)，于是 \\(P=\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix}\\begin{bmatrix}1&1\\\\1&2\\end{bmatrix}=\\begin{bmatrix}2&3\\\\-1&-2\\end{bmatrix}\\)。故应填 \\(\\begin{pmatrix}2&3\\\\-1&-2\\end{pmatrix}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-calc-6",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 6,
    "stem": "设 \\( \\alpha_1=(1,1,0)^T,\\alpha_2=(0,1,1)^T,\\alpha_3=(0,0,1)^T \\) 和 \\( \\beta_1=(1,-1,-1)^T,\\beta_2=(1,1,-1)^T,\\beta_3=(-1,1,0)^T \\) 是向量空间 \\( \\mathbb{R}^3 \\) 的两组基。(1)求由基 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 到基 \\( \\beta_1,\\beta_2,\\beta_3 \\) 的过渡矩阵；(2)求由基 \\( \\beta_1,\\beta_2,\\beta_3 \\) 到基 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 的过渡矩阵；(3)求向量 \\( \\alpha=\\alpha_1+2\\alpha_2-3\\alpha_3 \\) 在基 \\( \\beta_1,\\beta_2,\\beta_3 \\) 下的坐标。",
    "options": null,
    "ans": null,
    "fb": "(1)设过渡矩阵为 \\(A\\)，则 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)A\\)。由 \\(\\begin{pmatrix}1&1&-1\\\\-1&1&1\\\\-1&-1&0\\end{pmatrix}=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&1&1\\end{pmatrix}A\\)，解得 \\(A\\)。(2)逆矩阵 \\(A^{-1}\\) 即为所求。(3)\\(\\alpha\\) 在 \\(\\alpha\\) 基下坐标为 \\((1,2,-3)^T\\)，在 \\(\\beta\\) 基下坐标为 \\(A^{-1}(1,2,-3)^T=(-1,2,0)^T\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-25",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 25,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 和 \\( \\beta_1,\\beta_2,\\beta_3 \\) 是向量空间 \\( \\mathbb{R}^3 \\) 的两组基，其中 \\( \\alpha_1=(1,1,0)^T,\\alpha_2=(0,1,1)^T,\\alpha_3=(0,0,1)^T \\)。由基 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 到基 \\( \\beta_1,\\beta_2,\\beta_3 \\) 的过渡矩阵为 \\( A=\\begin{pmatrix} 1 & 1 & -2 \\\\ -2 & 0 & 3 \\\\ 4 & -1 & -6 \\end{pmatrix} \\)，求基向量 \\( \\beta_1,\\beta_2,\\beta_3 \\)。",
    "options": null,
    "ans": "\\( \\beta_1=(1,-1,2)^T, \\beta_2=(1,1,-1)^T, \\beta_3=(-2,1,-3)^T \\)",
    "fb": "解：由基 \\(\\alpha\\) 到基 \\(\\beta\\) 的过渡矩阵为 \\(A\\)，即 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)A\\)。故\n\\(\\beta_1=\\alpha_1-\\alpha_2+4\\alpha_3=(1,1,0)^T-(0,1,1)^T+4(0,0,1)^T=(1,-1,2)^T\\)，\n\\(\\beta_2=\\alpha_1-\\alpha_3=(1,1,0)^T-(0,0,1)^T=(1,1,-1)^T\\)，\n\\(\\beta_3=-2\\alpha_1+3\\alpha_2-6\\alpha_3=(-2,-2,0)^T+(0,3,3)^T-(0,0,-6)^T=(-2,1,-3)^T\\)。\n故应填：\\(\\beta_1=(1,-1,2)^T,\\ \\beta_2=(1,1,-1)^T,\\ \\beta_3=(-2,1,-3)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-proof-23",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 23,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n \\) 是 \\( n \\) 维向量空间 \\( \\mathbb{R}^n \\) 中的 \\( n \\) 个向量，又 \\( \\mathbb{R}^n \\) 中任一向量都可由它们线性表示。证明：\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n \\) 是 \\( \\mathbb{R}^n \\) 的一组基。",
    "options": null,
    "ans": null,
    "fb": "因为单位向量组 \\(\\varepsilon_1,\\cdots,\\varepsilon_n\\) 可由 \\(\\alpha_1,\\cdots,\\alpha_n\\) 线性表示，而 \\(\\alpha_1,\\cdots,\\alpha_n\\) 也可由 \\(\\varepsilon_1,\\cdots,\\varepsilon_n\\) 线性表示，故两向量组等价，秩相等为 \\(n\\)。因此 \\(\\alpha_1,\\cdots,\\alpha_n\\) 线性无关，从而是 \\(\\mathbb{R}^n\\) 的一组基。",
    "pts": 8,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-26",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 26,
    "stem": "已知向量组 \\( \\alpha_1=(1,2,1,0)^T,\\alpha_2=(1,1,3,1)^T,\\alpha_3=(1,0,5,2)^T,\\alpha_4=(2,1,-2,3)^T \\)，求 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4 \\) 生成的向量空间 \\( V \\) 的一个标准正交基。",
    "options": null,
    "ans": "\\( \\varepsilon_1=\\frac{1}{\\sqrt{6}}(1,2,1,0)^T, \\varepsilon_2=\\frac{1}{\\sqrt{6}}(0,-1,2,1)^T, \\varepsilon_3=\\frac{1}{\\sqrt{6}}(1,0,-1,2)^T \\)",
    "fb": "解：先求 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 的极大无关组（秩为 3），例如取 \\(\\alpha_1,\\alpha_2,\\alpha_4\\)。对其施密特正交化：令 \\(u_1=\\alpha_1=(1,2,1,0)^T\\)，\\(e_1=\\frac{1}{\\sqrt6}(1,2,1,0)^T\\)；\\(u_2=\\alpha_2-(\\alpha_2,e_1)e_1=(0,-1,2,1)^T\\)，\\(e_2=\\frac{1}{\\sqrt6}(0,-1,2,1)^T\\)；\\(u_3=\\alpha_4-(\\alpha_4,e_1)e_1-(\\alpha_4,e_2)e_2=(1,0,-1,2)^T\\)，\\(e_3=\\frac{1}{\\sqrt6}(1,0,-1,2)^T\\)。故应填：\\(\\varepsilon_1=\\frac{1}{\\sqrt6}(1,2,1,0)^T,\\ \\varepsilon_2=\\frac{1}{\\sqrt6}(0,-1,2,1)^T,\\ \\varepsilon_3=\\frac{1}{\\sqrt6}(1,0,-1,2)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-27",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 27,
    "stem": "由向量组 \\( \\alpha_1=(1,3,1,-1)^T,\\alpha_2=(2,-1,-1,4)^T,\\alpha_3=(5,1,-1,7)^T,\\alpha_4=(2,6,2,-3)^T \\) 生成的向量空间的维数是______。",
    "options": null,
    "ans": "3",
    "fb": "解：向量空间的维数等于生成向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 的秩。将其作为列作矩阵并求秩，得秩为 3，故所生成空间的维数为 3。故应填 3。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-28",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 28,
    "stem": "若 \\( \\beta=(0,k,k^2)^T \\) 能由 \\( \\alpha_1=(1+k,1,1)^T,\\alpha_2=(1,1+k,1)^T,\\alpha_3=(1,1,1+k)^T \\) 唯一线性表示，则 \\( k \\)______。",
    "options": null,
    "ans": "\\( k\\neq 0 \\) 且 \\( k\\neq -3 \\)",
    "fb": "解：\\(\\beta\\) 能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 唯一线性表示，等价于以它们为列的矩阵可逆，即行列式非零。该行列式为 Vandermonde 型：\n\\(\\begin{vmatrix}1+k&1&1\\\\1&1+k&1\\\\1&1&1+k\\end{vmatrix}=k^2(k+3)\\)。\n故需 \\(k\\neq0\\) 且 \\(k\\neq-3\\)。故应填 \\(k\\neq0\\) 且 \\(k\\neq-3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-mc-14",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 14,
    "stem": "若向量组 \\( \\alpha,\\beta,\\gamma \\) 线性无关，\\( \\alpha,\\beta,\\delta \\) 线性相关，则______。",
    "options": [
      [
        "A",
        "\\alpha 必可由 \\beta,\\gamma,\\delta 线性表示"
      ],
      [
        "B",
        "\\beta 必不可由 \\alpha,\\gamma,\\delta 线性表示"
      ],
      [
        "C",
        "\\delta 必可由 \\alpha,\\beta,\\gamma 线性表示"
      ],
      [
        "D",
        "\\delta 必不可由 \\alpha,\\beta,\\gamma 线性表示"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(\\alpha,\\beta,\\gamma\\) 线性无关，\\(\\alpha,\\beta,\\delta\\) 线性相关，则 \\(\\delta\\) 必可由 \\(\\alpha,\\beta\\) 线性表示（因 \\(\\alpha,\\beta\\) 线性无关，是 \\(\\alpha,\\beta,\\delta\\) 的极大无关组），进而 \\(\\delta\\) 可由 \\(\\alpha,\\beta,\\gamma\\) 线性表示。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-15",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 15,
    "stem": "若三维向量 \\( \\alpha_4 \\) 不能由向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示，则必有______。",
    "options": [
      [
        "A",
        "向量组 \\alpha_1,\\alpha_2,\\alpha_3 线性无关"
      ],
      [
        "B",
        "向量组 \\alpha_1,\\alpha_2,\\alpha_3 线性相关"
      ],
      [
        "C",
        "向量组 \\alpha_1+\\alpha_2,\\alpha_2+\\alpha_4,\\alpha_3+\\alpha_4 线性无关"
      ],
      [
        "D",
        "向量组 \\alpha_1+\\alpha_4,\\alpha_2+\\alpha_4,\\alpha_3+\\alpha_4 线性相关"
      ]
    ],
    "ans": "B",
    "fb": "解析：若三维向量 \\(\\alpha_4\\) 不能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示，则把 \\(\\alpha_4\\) 加入后秩严格增大，故 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 必线性相关（否则三维中三个无关向量构成基，任何向量都可被表示，矛盾）。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-29",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 29,
    "stem": "设 \\( \\alpha_1=(0,1,2,3)^T,\\beta_1=(2,2,3,1)^T,\\beta_2=(-1,2,1,2)^T,\\beta_3=(2,1,-1,-2)^T \\)，问 \\( \\alpha_1 \\) 是否可表示成 \\( \\beta_1,\\beta_2,\\beta_3 \\) 的线性组合。",
    "options": null,
    "ans": "不能",
    "fb": "解：判断 \\(\\alpha_1\\) 是否在 \\(\\operatorname{span}\\{\\beta_1,\\beta_2,\\beta_3\\}\\) 中，即方程组 \\(x_1\\beta_1+x_2\\beta_2+x_3\\beta_3=\\alpha_1\\) 是否有解。对增广矩阵作行变换可知该方程组无解（系数矩阵秩为 3，增广矩阵秩为 4），故 \\(\\alpha_1\\) 不能由 \\(\\beta_1,\\beta_2,\\beta_3\\) 线性表示。故应填 不能。",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-30",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 30,
    "stem": "设有三维列向量 \\( \\alpha_1=(1+\\lambda,1,1)^T,\\alpha_2=(1,1+\\lambda,1)^T,\\alpha_3=(1,1,1+\\lambda)^T,\\beta=(0,\\lambda,\\lambda^2)^T \\)，问 \\( \\lambda \\) 取何值时，有 (1)\\( \\beta \\) 可由 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示，且表达式唯一？(2)\\( \\beta \\) 可由 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示，但表达式不唯一？(3)\\( \\beta \\) 不能由 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示？",
    "options": null,
    "ans": "(1) \\( \\lambda\\neq 0 \\) 且 \\( \\lambda\\neq -3 \\)；(2) \\( \\lambda=0 \\)；(3) \\( \\lambda=-3 \\)",
    "fb": "解：考虑矩阵 \\(\\begin{bmatrix}1+\\lambda&1&1&0\\\\1&1+\\lambda&1&\\lambda\\\\1&1&1+\\lambda&\\lambda^2\\end{bmatrix}\\)。其系数行列式为 \\(\\lambda^2(\\lambda+3)\\)。\n(1) 当 \\(\\lambda\\neq0\\) 且 \\(\\lambda\\neq-3\\) 时，行列式非零，方程组有唯一解；\n(2) 当 \\(\\lambda=0\\) 时，行列式为 0 但方程组相容，解不唯一；\n(3) 当 \\(\\lambda=-3\\) 时，行列式为 0 且方程组不相容，无解。\n故应填：(1) \\(\\lambda\\neq0\\) 且 \\(\\lambda\\neq-3\\)；(2) \\(\\lambda=0\\)；(3) \\(\\lambda=-3\\))",
    "pts": 5,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-fill-31",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 31,
    "stem": "确定常数 \\( a \\)，使向量组 \\( \\alpha_1=(1,1,a)^T,\\alpha_2=(1,a,1)^T,\\alpha_3=(a,1,1)^T \\) 可由向量组 \\( \\beta_1=(1,1,a)^T,\\beta_2=(-2,a,4)^T,\\beta_3=(-2,a,a)^T \\) 线性表示，但向量组 \\( \\beta_1,\\beta_2,\\beta_3 \\) 不能由向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示。",
    "options": null,
    "ans": "\\( a=1 \\)",
    "fb": "解：由条件，\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 可由 \\(\\beta_1,\\beta_2,\\beta_3\\) 表示，而 \\(\\beta_1,\\beta_2,\\beta_3\\) 不能由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 表示。计算两组秩：当 \\(a=1\\) 时，\\(r(\\alpha_1,\\alpha_2,\\alpha_3)=1\\)，\\(r(\\beta_1,\\beta_2,\\beta_3)=3\\)，满足 \\(\\operatorname{span}(\\alpha)\\subset\\operatorname{span}(\\beta)\\) 但反向不成立。若 \\(a\\neq1\\) 则两组秩相等且可互表（等价），与题意矛盾。故应填 \\(a=1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-24",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 24,
    "stem": "证明：若向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关，而向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s,\\beta \\) 线性相关，则 \\( \\beta \\) 可被向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性表示，且表达式唯一。",
    "options": null,
    "ans": null,
    "fb": "由线性相关，存在不全为零的数 \\(k_1,\\cdots,k_s,k\\) 使 \\(k_1\\alpha_1+\\cdots+k_s\\alpha_s+k\\beta=0\\)。必有 \\(k\\neq 0\\)，否则 \\(\\alpha_1,\\cdots,\\alpha_s\\) 线性相关，矛盾。于是 \\(\\beta=-\\frac{k_1}{k}\\alpha_1-\\cdots-\\frac{k_s}{k}\\alpha_s\\)。唯一性：设 \\(\\beta=l_1\\alpha_1+\\cdots+l_s\\alpha_s=k_1\\alpha_1+\\cdots+k_s\\alpha_s\\)，相减得 \\((l_1-k_1)\\alpha_1+\\cdots+(l_s-k_s)\\alpha_s=0\\)，由线性无关得 \\(l_i=k_i\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-proof-25",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 25,
    "stem": "证明线性方程组 \\( \\begin{cases} a_{11}x_1+a_{12}x_2+\\cdots+a_{1n}x_n=0 \\\\ a_{21}x_1+a_{22}x_2+\\cdots+a_{2n}x_n=0 \\\\ \\cdots\\cdots\\cdots\\cdots\\cdots\\cdots \\\\ a_{m1}x_1+a_{m2}x_2+\\cdots+a_{mn}x_n=0 \\end{cases} \\) 的解是 \\( b_1x_1+b_2x_2+\\cdots+b_nx_n=0 \\) 解的充要条件是 \\( \\beta=(b_1,b_2,\\cdots,b_n)^T \\) 为 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 的线性组合，其中 \\( \\alpha_i=(a_{i1},a_{i2},\\cdots,a_{in})\\ (i=1,2,\\cdots,m) \\)。",
    "options": null,
    "ans": null,
    "fb": "充分性：若 \\(\\beta=k_1\\alpha_1+\\cdots+k_m\\alpha_m\\)，则对 \\(Ax=0\\) 的解 \\(x\\)，有 \\(\\alpha_i x=0\\)，故 \\(\\beta x=k_1\\alpha_1 x+\\cdots+k_m\\alpha_m x=0\\)。必要性：构造含方程 \\(b_1x_1+\\cdots+b_nx_n=0\\) 的增广方程组，由①的解都满足该方程知两方程组同解，故系数矩阵秩相等，从而 \\(\\beta\\) 可由 \\(\\alpha_1,\\cdots,\\alpha_m\\) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-26",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 26,
    "stem": "已知向量 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 都与非零向量 \\( \\beta \\) 正交，证明 \\( \\beta \\) 不能由向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性表示。",
    "options": null,
    "ans": null,
    "fb": "反证法。假设 \\(\\beta=k_1\\alpha_1+\\cdots+k_s\\alpha_s\\)，则 \\((\\beta,\\beta)=k_1(\\beta,\\alpha_1)+\\cdots+k_s(\\beta,\\alpha_s)=0\\)，故 \\(\\beta=0\\)，与 \\(\\beta\\neq 0\\) 矛盾。",
    "pts": 8,
    "diff": 2,
    "sec": "s31"
  },
  {
    "id": "c3-jx-mc-16",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 16,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 均为 \\( n \\) 维向量，下列结论不正确的是______。",
    "options": [
      [
        "A",
        "若对于任意一组不全为零的数 k_1,k_2,\\cdots,k_s，都有 k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_s\\alpha_s\\neq 0，则 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性无关"
      ],
      [
        "B",
        "若 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性相关，则对于任意一组不全为零的数 k_1,k_2,\\cdots,k_s，有 k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_s\\alpha_s=0"
      ],
      [
        "C",
        "\\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性无关的充分必要条件是此向量组的秩为 s"
      ],
      [
        "D",
        "\\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性无关的必要条件是其中任意两个向量线性无关"
      ]
    ],
    "ans": "B",
    "fb": "解析：线性无关要求\"对任意一组不全为零的数，组合都不为零\"，A 正确。B 错在把线性相关说成\"对任意一组不全为零的数组合都为零\"（实际只需存在一组）；C、D 为正确命题。故不正确的是 B。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-17",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 17,
    "stem": "设有任意两个 \\( n \\) 维向量组 \\( \\alpha_1,\\cdots,\\alpha_m \\) 和 \\( \\beta_1,\\cdots,\\beta_m \\)，若存在两组不全为零的数 \\( \\lambda_1,\\cdots,\\lambda_m \\) 和 \\( k_1,\\cdots,k_m \\)，使 \\( (\\lambda_1+k_1)\\alpha_1+\\cdots+(\\lambda_m+k_m)\\alpha_m+(\\lambda_1-k_1)\\beta_1+\\cdots+(\\lambda_m-k_m)\\beta_m=0 \\)，则______。",
    "options": [
      [
        "A",
        "\\alpha_1,\\cdots,\\alpha_m 和 \\beta_1,\\cdots,\\beta_m 都线性相关"
      ],
      [
        "B",
        "\\alpha_1,\\cdots,\\alpha_m 和 \\beta_1,\\cdots,\\beta_m 都线性无关"
      ],
      [
        "C",
        "\\alpha_1+\\beta_1,\\cdots,\\alpha_m+\\beta_m,\\alpha_1-\\beta_1,\\cdots,\\alpha_m-\\beta_m 线性无关"
      ],
      [
        "D",
        "\\alpha_1+\\beta_1,\\cdots,\\alpha_m+\\beta_m,\\alpha_1-\\beta_1,\\cdots,\\alpha_m-\\beta_m 线性相关"
      ]
    ],
    "ans": "D",
    "fb": "解析：原式可改写为 \\(\\sum_{i=1}^m\\lambda_i(\\alpha_i+\\beta_i)+\\sum_{i=1}^m k_i(\\alpha_i-\\beta_i)=0\\)。令 \\(\\eta_i=\\alpha_i+\\beta_i,\\ \\zeta_i=\\alpha_i-\\beta_i\\)，则 \\(\\sum\\lambda_i\\eta_i+\\sum k_i\\zeta_i=0\\)，即向量组 \\(\\eta_1,\\dots,\\eta_m,\\zeta_1,\\dots,\\zeta_m\\) 存在不全为零的系数使其组合为零（因 \\(\\lambda_i,k_i\\) 不全为零），故其线性相关。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-18",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 18,
    "stem": "下列命题中正确的是______。",
    "options": [
      [
        "A",
        "若向量 \\alpha_s 不能由向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_{s-1} 线性表示，则向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_{s-1},\\alpha_s 线性无关"
      ],
      [
        "B",
        "若向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 的一个部分组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_t\\ (t<s) 线性无关，则向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性无关"
      ],
      [
        "C",
        "若向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 能由向量组 \\beta_1,\\beta_2,\\cdots,\\beta_{s-1} 线性表示，则向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性相关"
      ],
      [
        "D",
        "若向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 不能由向量组 \\beta_1,\\beta_2,\\cdots,\\beta_{s-1} 线性表示，则向量组 \\alpha_1,\\alpha_2,\\cdots,\\alpha_s 线性无关"
      ]
    ],
    "ans": "C",
    "fb": "解析：C 正确：若 \\(s\\) 个向量可由 \\(s-1\\) 个向量线性表示，则这 \\(s\\) 个向量的秩不超过 \\(s-1<s\\)，故必线性相关（这是\"个数大于秩必相关\"的推论）。A 错（不能表示不代表整体无关，如可含零向量）；B 错（部分无关推不出整体无关）；D 错（不能表示推不出自身无关）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-mc-19",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 19,
    "stem": "设向量组（I）：\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 可由向量组（II）：\\( \\beta_1,\\beta_2,\\cdots,\\beta_s \\) 线性表示，则______。",
    "options": [
      [
        "A",
        "当 r<s 时，向量组（II）必线性相关"
      ],
      [
        "B",
        "当 r>s 时，向量组（II）必线性相关"
      ],
      [
        "C",
        "当 r<s 时，向量组（I）必线性相关"
      ],
      [
        "D",
        "当 r>s 时，向量组（I）必线性相关"
      ]
    ],
    "ans": "D",
    "fb": "解析：向量组（I）可由（II）线性表示，则 \\(r(\\mathrm I)\\le r(\\mathrm{II})\\le s\\)。当 \\(r>s\\) 时，必有 \\(r(\\mathrm I)\\le s<r\\)，即（I）的向量个数 \\(r\\) 大于其秩，故（I）必线性相关。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-32",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 32,
    "stem": "设向量 \\( \\alpha_1=(5,1,8,0,0) \\)，\\( \\alpha_2=(6,0,2,1,0) \\)，\\( \\alpha_3=(9,0,-1,0,1) \\)，则 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性______。",
    "options": null,
    "ans": "线性无关",
    "fb": "解：考察后三个分量：\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 在后三个坐标下分别为 \\((1,8,0)^T,(0,2,1)^T,(0,-1,0)^T\\) 的子向量，更直接的取坐标第 3、4、5 位得 \\((8,0,0)^T,(2,1,0)^T,(-1,0,1)^T\\)，其行列式 \\(8\\cdot1\\cdot1=8\\neq0\\)，故三个向量线性无关。故应填 线性无关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-27",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 27,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s\\ (s\\le n) \\) 是一组 \\( n \\) 维列向量，\\( A \\) 是 \\( n \\) 阶矩阵。如果 \\( A\\alpha_1=\\alpha_2,\\ A\\alpha_2=\\alpha_3,\\ \\cdots,\\ A\\alpha_{s-1}=\\alpha_s\\ne 0,\\ A\\alpha_s=0 \\)，证明向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设有一组数 \\( x_1,x_2,\\cdots,x_s \\)，使 \\( x_1\\alpha_1+x_2\\alpha_2+\\cdots+x_s\\alpha_s=0 \\)。由题设可知 \\( A^{k-1}\\alpha_1=\\alpha_k,\\ A^{s-1}\\alpha_k=A^{s-k}A^{k-1}\\alpha_1=A^{s-1}\\alpha_1=\\alpha_s\\ (k=2,\\cdots,s) \\)。以 \\( A^{s-1} \\) 左乘该式两边，得 \\( x_1\\alpha_s=0 \\)。因为 \\( \\alpha_s\\ne 0 \\)，所以 \\( x_1=0 \\)；依次类推可得 \\( x_2=x_3=\\cdots=x_s=0 \\)。因此 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-28",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 28,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶可逆矩阵，\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s\\ (s\\le n) \\) 都是 \\( n \\) 维非零列向量，且 \\( \\alpha_i^T A^T A\\alpha_j=0\\ (i\\ne j) \\)，证明向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设 \\( k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_s\\alpha_s=0 \\)。以 \\( \\alpha_i^T A^T A \\) 左乘上式两边，再由 \\( \\alpha_i^T A^T A\\alpha_j=0\\ (i\\ne j) \\)，得 \\( k_i\\alpha_i^T A^T A\\alpha_i=0\\ (i=1,2,\\cdots,s) \\)。因为 \\( A \\) 可逆且 \\( \\alpha_i\\ne 0 \\)，所以 \\( A\\alpha_i\\ne 0 \\)，进而 \\( \\alpha_i^T A^T A\\alpha_i=(A\\alpha_i)^T(A\\alpha_i)>0 \\)，故 \\( k_i=0\\ (i=1,2,\\cdots,s) \\)。因此 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-29",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 29,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_{n-1} \\) 为 \\( n-1 \\) 个线性无关的 \\( n \\) 维列向量，\\( \\xi_1,\\xi_2 \\) 是与 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_{n-1} \\) 均正交的 \\( n \\) 维列向量，证明：\\( \\xi_1,\\xi_2 \\) 线性相关。",
    "options": null,
    "ans": null,
    "fb": "令 \\( A=\\begin{pmatrix}\\alpha_1^T\\\\ \\alpha_2^T\\\\ \\vdots\\\\ \\alpha_{n-1}^T\\end{pmatrix} \\)，则 \\( A \\) 为 \\( (n-1)\\times n \\) 矩阵，且 \\( r(A)=n-1 \\)。由 \\( (\\alpha_i,\\xi_j)=\\alpha_i^T\\xi_j=0 \\) 知 \\( A\\xi_1=0,\\ A\\xi_2=0 \\)，即 \\( \\xi_1,\\xi_2 \\) 是齐次线性方程组 \\( Ax=0 \\) 的两个解向量。由于 \\( r(A)=n-1 \\)，基础解系所含向量的个数为 1，故 \\( \\xi_1,\\xi_2 \\) 必线性相关。",
    "pts": 8,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-33",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 33,
    "stem": "设 \\( A=\\begin{pmatrix}1&1&\\cdots&1\\\\ a_1&a_2&\\cdots&a_s\\\\ a_1^2&a_2^2&\\cdots&a_s^2\\\\ \\vdots&\\vdots&&\\vdots\\\\ a_1^{n-1}&a_2^{n-1}&\\cdots&a_s^{n-1}\\end{pmatrix}=(\\alpha_1,\\alpha_2,\\cdots,\\alpha_s) \\)，其中 \\( a_i\\ne a_j\\ (i\\ne j;\\ i,j=1,2,\\cdots,s) \\)。讨论向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 的线性相关性。",
    "options": null,
    "ans": "当 \\( s>n \\) 时线性相关；当 \\( s=n \\) 时线性无关；当 \\( s<n \\) 时线性无关。",
    "fb": "解：矩阵列向量 \\(\\alpha_i=(1,a_i,a_i^2,\\dots,a_i^{n-1})^T\\)，其为多项式 \\(1,x,\\dots,x^{n-1}\\) 在互异点 \\(a_i\\) 的取值。这相当于 Vandermonde 结构：当 \\(s\\le n\\) 时，任取 \\(s\\) 个不同列构成的 \\(n\\times s\\) 子矩阵含一个 \\(s\\) 阶非零 Vandermonde 子式，故线性无关；当 \\(s>n\\) 时，向量个数超过维数，必线性相关。故应填：当 \\(s>n\\) 时线性相关；当 \\(s=n\\) 或 \\(s<n\\) 时线性无关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-34",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 34,
    "stem": "设 \\( \\alpha_i=(a_{i1},a_{i2},\\cdots,a_{in})^T\\ (i=1,2,\\cdots,r;\\ r<n) \\) 是 \\( n \\) 维实向量，且 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r \\) 线性无关。已知 \\( \\beta=(b_1,b_2,\\cdots,b_n)^T \\) 是线性方程组 \\[ \\begin{cases} a_{11}x_1+a_{12}x_2+\\cdots+a_{1n}x_n=0,\\\\ a_{21}x_1+a_{22}x_2+\\cdots+a_{2n}x_n=0,\\\\ \\cdots\\cdots\\cdots\\cdots\\cdots\\cdots\\\\ a_{r1}x_1+a_{r2}x_2+\\cdots+a_{rn}x_n=0 \\end{cases} \\] 的非零解向量，试判断向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_r,\\beta \\) 的线性相关性。",
    "options": null,
    "ans": "线性无关。",
    "fb": "解：设 \\(\\sum_{i=1}^r c_i\\alpha_i+c\\beta=0\\)。两边与 \\(\\beta\\) 作内积：因 \\(\\beta\\) 是各 \\(\\alpha_i^Tx=0\\) 的解，故 \\(\\alpha_i^T\\beta=0\\)，于是 \\(c\\,\\beta^T\\beta=0\\)。由 \\(\\beta\\neq0\\) 得 \\(c=0\\)，从而 \\(\\sum c_i\\alpha_i=0\\)。又 \\(\\alpha_1,\\dots,\\alpha_r\\) 线性无关，故 \\(c_i=0\\)。所以全为零，向量组线性无关。故应填 线性无关。",
    "pts": 5,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-30",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 30,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶矩阵，\\( \\alpha_1,\\alpha_2,\\alpha_3\\ (3\\le n) \\) 是 \\( n \\) 维列向量，且 \\( \\alpha_3\\ne 0 \\)。如果 \\( A\\alpha_1=\\alpha_1+\\alpha_2 \\)，\\( A\\alpha_2=\\alpha_2+\\alpha_3 \\)，\\( A\\alpha_3=\\alpha_3 \\)，证明向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设 \\( k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3=0 \\)。由题设可得 \\( (A-E)\\alpha_1=\\alpha_2 \\)，\\( (A-E)\\alpha_2=\\alpha_3 \\)，\\( (A-E)\\alpha_3=0 \\)。以 \\( A-E \\) 左乘该式两边，得 \\( k_1\\alpha_2+k_2\\alpha_3=0 \\)；再以 \\( A-E \\) 左乘，得 \\( k_1\\alpha_3=0 \\)。由于 \\( \\alpha_3\\ne 0 \\)，故 \\( k_1=0 \\)。回代得 \\( k_2=0 \\)，进而 \\( k_3=0 \\)。所以 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-31",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 31,
    "stem": "已知 \\( m \\) 个向量 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m \\) 线性相关，但其中任意 \\( m-1 \\) 个向量都线性无关，证明：(1) 如果存在等式 \\( k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m=0 \\)，则这些系数 \\( k_1,k_2,\\cdots,k_m \\) 或者全为零，或者全不为零；(2) 如果存在两个等式 \\( k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m=0 \\) 与 \\( l_1\\alpha_1+l_2\\alpha_2+\\cdots+l_m\\alpha_m=0 \\)，其中 \\( l_1\\ne 0 \\)，则必有 \\( \\dfrac{k_1}{l_1}=\\dfrac{k_2}{l_2}=\\cdots=\\dfrac{k_m}{l_m} \\)。",
    "options": null,
    "ans": null,
    "fb": "(1) 若某 \\( k_i=0 \\)，则其余 \\( m-1 \\) 个向量的线性组合为零，由条件知这些系数全为零，故所有系数全为零；若某 \\( k_i\\ne 0 \\)，则所有系数必全不为零，否则去掉一个零系数后其余 \\( m-1 \\) 个向量线性相关，矛盾。(2) 由 \\( l_1\\ne 0 \\)，从两式分别乘以 \\( l_i \\) 与 \\( k_i \\) 后相减，利用任意 \\( m-1 \\) 个向量线性无关可得 \\( k_i l_1-k_1 l_i=0 \\)，即 \\( \\dfrac{k_i}{l_i}=\\dfrac{k_1}{l_1}\\ (i=2,3,\\cdots,m) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-32",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 32,
    "stem": "设 \\( A,B \\) 是 \\( m\\times n \\) 阶矩阵，\\( P \\) 是 \\( m \\) 阶可逆矩阵，若 \\( B=PA \\)，证明 \\( B \\) 的任意 \\( k \\) 个列向量与 \\( A \\) 中对应的 \\( k \\) 个列向量有相同的线性相关性。",
    "options": null,
    "ans": null,
    "fb": "将矩阵 \\( A,B \\) 按列分块为 \\( A=(\\alpha_1,\\alpha_2,\\cdots,\\alpha_n) \\)，\\( B=(\\beta_1,\\beta_2,\\cdots,\\beta_n) \\)。因为 \\( B=PA \\)，所以 \\( \\beta_i=P\\alpha_i\\ (i=1,2,\\cdots,n) \\)。在 \\( B \\) 中任取 \\( k \\) 个列向量 \\( \\beta_{i_1},\\beta_{i_2},\\cdots,\\beta_{i_k} \\)，则 \\( (\\beta_{i_1},\\beta_{i_2},\\cdots,\\beta_{i_k})=P(\\alpha_{i_1},\\alpha_{i_2},\\cdots,\\alpha_{i_k}) \\)。由于 \\( P \\) 可逆，秩相等，故线性相关性相同。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-33",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 33,
    "stem": "设向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_m\\ (m>1) \\) 线性无关，且 \\( \\beta=\\alpha_1+\\alpha_2+\\cdots+\\alpha_m \\)，证明：向量组 \\( \\beta-\\alpha_1,\\beta-\\alpha_2,\\cdots,\\beta-\\alpha_m \\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "证法一：设 \\( k_1(\\beta-\\alpha_1)+k_2(\\beta-\\alpha_2)+\\cdots+k_m(\\beta-\\alpha_m)=0 \\)，整理得关于 \\( k_i \\) 的齐次线性方程组，其系数行列式 \\( D_m=(-1)^{m-1}(m-1)\\ne 0 \\)，故只有零解。证法二：将新向量组表为 \\( (\\beta-\\alpha_1,\\beta-\\alpha_2,\\cdots,\\beta-\\alpha_m)=(\\alpha_1,\\alpha_2,\\cdots,\\alpha_m)C \\)，其中 \\( |C|=(-1)^{m-1}(m-1)\\ne 0 \\)，\\( C \\) 可逆，故两向量组等价，线性无关性相同。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-34",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 34,
    "stem": "若 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n \\) 是 \\( n \\) 个线性无关的 \\( n \\) 维向量，\\( \\alpha_{n+1}=k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_n\\alpha_n \\)，其中 \\( k_1,k_2,\\cdots,k_n \\) 全不为零。证明：\\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_n,\\alpha_{n+1} \\) 中任意 \\( n \\) 个向量都线性无关。",
    "options": null,
    "ans": null,
    "fb": "任意去掉一个向量。若去掉 \\( \\alpha_i\\ (1\\le i\\le n) \\)，则其余 \\( n \\) 个向量中仍包含线性无关的 \\( \\alpha_1,\\cdots,\\alpha_{i-1},\\alpha_{i+1},\\cdots,\\alpha_n \\)，且 \\( \\alpha_{n+1} \\) 可由它们线性表示但系数 \\( k_j\\ne 0 \\)，故这 \\( n \\) 个向量线性无关；若去掉 \\( \\alpha_{n+1} \\)，则 \\( \\alpha_1,\\cdots,\\alpha_n \\) 本身线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-proof-35",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 35,
    "stem": "已知向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性无关，而向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s,\\beta,\\gamma \\) 线性相关，证明向量 \\( \\beta,\\gamma \\) 中有一个可由向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s \\) 线性表示，或向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s,\\beta \\) 与向量组 \\( \\alpha_1,\\alpha_2,\\cdots,\\alpha_s,\\gamma \\) 等价。",
    "options": null,
    "ans": null,
    "fb": "由题设知存在不全为零的数 \\( k_1,\\cdots,k_s,k,l \\)，使 \\( k_1\\alpha_1+\\cdots+k_s\\alpha_s+k\\beta+l\\gamma=0 \\)。若 \\( k=l=0 \\)，则 \\( \\alpha_1,\\cdots,\\alpha_s \\) 线性相关，矛盾，故 \\( k,l \\) 不全为零。当 \\( k\\ne 0,l=0 \\) 时，\\( \\beta \\) 可由 \\( \\alpha_1,\\cdots,\\alpha_s \\) 线性表示；当 \\( k=0,l\\ne 0 \\) 时，\\( \\gamma \\) 可由 \\( \\alpha_1,\\cdots,\\alpha_s \\) 线性表示；当 \\( k,l \\) 均非零时，\\( \\beta,\\gamma \\) 均可由 \\( \\alpha_1,\\cdots,\\alpha_s \\) 与另一个向量线性表示，故两向量组等价。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-35",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 35,
    "stem": "设有向量组（Ⅰ）:\\( \\alpha_1=(1,0,2)^T,\\ \\alpha_2=(1,1,3)^T,\\ \\alpha_3=(1,-1,a+2)^T \\) 和向量组（Ⅱ）:\\( \\beta_1=(1,2,a+3)^T,\\ \\beta_2=(2,1,a+6)^T,\\ \\beta_3=(2,1,a+4)^T \\)。试问：当 \\( a \\) 为何值时，向量组（Ⅰ）与（Ⅱ）等价？当 \\( a \\) 为何值时，向量组（Ⅰ）与（Ⅱ）不等价？",
    "options": null,
    "ans": "当 \\( a\\ne -1 \\) 时，向量组（Ⅰ）与（Ⅱ）等价；当 \\( a=-1 \\) 时，向量组（Ⅰ）与（Ⅱ）不等价。",
    "fb": "解：分别求两组秩。对（Ⅰ），\\(\\begin{vmatrix}1&0&2\\\\1&1&3\\\\1&-1&a+2\\end{vmatrix}=a+1\\)，故当 \\(a\\neq-1\\) 时 \\(r(\\mathrm I)=3\\)，当 \\(a=-1\\) 时 \\(r(\\mathrm I)=2\\)。对（Ⅱ），\\(\\begin{vmatrix}1&2&a+3\\\\2&1&a+6\\\\2&1&a+4\\end{vmatrix}=-6\\neq0\\)，故恒有 \\(r(\\mathrm{II})=3\\)。两组等价须秩相等且可互表：当 \\(a\\neq-1\\) 时秩均为 3，且（Ⅰ）可由（Ⅱ）表示（合并矩阵秩为 3），故等价；当 \\(a=-1\\) 时秩不等，不等价。故应填：当 \\(a\\neq-1\\) 时等价；当 \\(a=-1\\) 时不等价。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-calc-7",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 7,
    "stem": "设向量组 \\( \\alpha_1=(1,1,1,3)^T,\\ \\alpha_2=(-1,-3,5,1)^T,\\ \\alpha_3=(3,2,-1,p+2)^T,\\ \\alpha_4=(-2,-6,10,p)^T \\)。(1) \\( p \\) 为何值时，该向量组线性无关？并在此时将向量 \\( \\alpha=(4,1,6,10)^T \\) 用 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4 \\) 线性表示；(2) \\( p \\) 为何值时，该向量组线性相关？并在此时求出它的秩和一个极大线性无关组。",
    "options": null,
    "ans": null,
    "fb": "对矩阵 \\( (\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4,\\alpha) \\) 作初等行变换，化为阶梯形后讨论 \\( p \\) 的取值。当 \\( p\\ne 2 \\) 时，4 个向量线性无关，可唯一解出线性表示系数；当 \\( p=2 \\) 时，秩为 3，取前 3 个向量作为极大线性无关组。",
    "pts": 8,
    "diff": 2,
    "sec": "s32"
  },
  {
    "id": "c3-jx-fill-36",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 36,
    "stem": "已知向量组 \\( \\beta_1=\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix},\\ \\beta_2=\\begin{pmatrix}a\\\\2\\\\1\\end{pmatrix},\\ \\beta_3=\\begin{pmatrix}b\\\\1\\\\0\\end{pmatrix} \\) 与向量组 \\( \\alpha_1=\\begin{pmatrix}1\\\\2\\\\-3\\end{pmatrix},\\ \\alpha_2=\\begin{pmatrix}3\\\\0\\\\1\\end{pmatrix},\\ \\alpha_3=\\begin{pmatrix}9\\\\6\\\\-7\\end{pmatrix} \\) 具有相同的秩，且 \\( \\beta_3 \\) 可由 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示，求 \\( a,b \\) 的值。",
    "options": null,
    "ans": "\\( a=15,\\ b=5 \\)。",
    "fb": "解：先求 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 的秩：\\(\\begin{vmatrix}1&2&-3\\\\3&0&1\\\\9&6&-7\\end{vmatrix}=0\\) 且其 2 阶子式非零，故秩为 2。由两组秩相同，\\(\\beta_1,\\beta_2,\\beta_3\\) 秩也为 2，即 \\(\\begin{vmatrix}0&a&b\\\\1&2&1\\\\-1&1&0\\end{vmatrix}=3b-a=0\\)，故 \\(a=3b\\)。\n又 \\(\\beta_3=(b,1,0)^T\\) 可由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示。注意到 \\(\\alpha_3=3\\alpha_1+2\\alpha_2\\)，故 \\(\\operatorname{span}\\{\\alpha_1,\\alpha_2,\\alpha_3\\}=\\operatorname{span}\\{\\alpha_1,\\alpha_2\\}\\)。设 \\(x\\alpha_1+y\\alpha_2=(b,1,0)^T\\)，由第二分量 \\(2x=1\\) 得 \\(x=\\frac12\\)，由第三分量 \\(-3x+y=0\\) 得 \\(y=\\frac32\\)，代入第一分量 \\(b=x+3y=\\frac12+\\frac92=5\\)。于是 \\(b=5\\)，\\(a=3b=15\\)。故应填 \\(a=15,\\ b=5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-fill-37",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 37,
    "stem": "已知 \\( \\alpha_1=(1,0,1,2)^T,\\ \\alpha_2=(0,1,1,2)^T,\\ \\alpha_3=(-1,1,0,a-3)^T,\\ \\alpha_4=(1,2,a,6)^T,\\ \\alpha_5=(1,1,2,3)^T \\)。问 \\( a \\) 为何值时向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4,\\alpha_5 \\) 的秩等于 3，并求出此时它的一个极大线性无关组。",
    "options": null,
    "ans": "当 \\( a=3 \\) 时秩等于 3，此时 \\( \\alpha_1,\\alpha_2,\\alpha_5 \\) 是一个极大线性无关组。",
    "fb": "解：以五向量为列作矩阵并求秩。行变换后可得矩阵的秩关于 \\(a\\) 变化：当 \\(a=3\\) 时，第 3 列与前面列线性相关，整体秩降为 3；当 \\(a\\neq3\\) 时秩为 4。故秩等于 3 当且仅当 \\(a=3\\)。此时极大无关组可取 \\(\\alpha_1,\\alpha_2,\\alpha_5\\)（其构成的 4 阶子式非零），且 \\(\\alpha_3,\\alpha_4\\) 可由它们表示。故应填：当 \\(a=3\\) 时秩等于 3，此时 \\(\\alpha_1,\\alpha_2,\\alpha_5\\) 是一个极大线性无关组。",
    "pts": 5,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-36",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 36,
    "stem": "设 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 的秩为 \\(r\\)，若该向量组的任一向量均可由其中的 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 线性表示，证明 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 是该向量组的一个极大线性无关组。",
    "options": null,
    "ans": null,
    "fb": "由题设 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 的每一向量均可由 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 线性表示，显然 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 也可由 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 线性表示，所以向量组 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 和向量组 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 等价。又由于等价向量组有相同的秩，所以 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 的秩为 \\(r\\)，即 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) 线性无关，根据定义 \\(\\{\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\}\\) 是 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 的一个极大线性无关组。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-37",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 37,
    "stem": "已知向量组 (I) 可被向量组 (II) 线性表示，且 \\(r(\\mathrm{I}) = r(\\mathrm{II})\\)。求证向量组 (II) 也可被向量组 (I) 线性表示，即 (I) 和 (II) 等价。",
    "options": null,
    "ans": null,
    "fb": "设 \\(r(\\mathrm{I}) = r(\\mathrm{II}) = r\\)，并设向量组 (I) 的一个极大线性无关组是 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)，向量组 (II) 的一个极大线性无关组是 \\(\\beta_1, \\beta_2, \\cdots, \\beta_r\\)。由向量组 (I) 可被向量组 (II) 线性表示，有 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 可被 \\(\\beta_1, \\beta_2, \\cdots, \\beta_r\\) 线性表示。考虑向量组 (III): \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r, \\beta_1, \\beta_2, \\cdots, \\beta_r\\)。显然 \\(\\beta_1, \\beta_2, \\cdots, \\beta_r\\) 是向量组 (III) 的一个极大线性无关组，且 \\(r(\\mathrm{III}) = r\\)。又由于 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 的秩是 \\(r\\)，所以 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 也是 (III) 的一个极大线性无关组。\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 和 \\(\\beta_1, \\beta_2, \\cdots, \\beta_r\\) 等价。所以 \\(\\beta_1, \\beta_2, \\cdots, \\beta_r\\) 可被 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 线性表示，向量组 (II) 可被向量组 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\) 线性表示，也就向量组 (II) 可被向量组 (I) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-38",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 38,
    "stem": "设向量组 (I): \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\); 组 (II): \\(\\beta_1, \\beta_2, \\cdots, \\beta_t\\); 组 (III): \\(\\gamma_1, \\gamma_2, \\cdots, \\gamma_m\\) 的秩分别为 \\(s_1, s_2, s_3\\)，如果 \\(\\gamma_i = \\alpha_i - \\beta_i\\) (\\(i = 1, 2, \\cdots, m\\))，则 \\(s_1 \\leq s_2 + s_3\\)，\\(s_2 \\leq s_1 + s_3\\)，\\(s_3 \\leq s_1 + s_2\\)。",
    "options": null,
    "ans": null,
    "fb": "作向量组 (IV): \\(\\gamma_1 + \\beta_1, \\gamma_2 + \\beta_2, \\cdots, \\gamma_m + \\beta_m\\)，而 \\(\\alpha_i = \\gamma_i + \\beta_i\\) (\\(i = 1, 2, \\cdots, m\\))，所以向量组 (I) 能由向量组 (IV) 线性表示。设向量组 (V): \\(\\beta_1, \\beta_2, \\cdots, \\beta_m, \\gamma_1, \\gamma_2, \\cdots, \\gamma_m\\)，则向量组 (IV) 能由向量组 (V) 线性表示。设向量组 (I)', (II)', (III)' 的极大无关组分别为 (I)': \\(\\alpha_{i_1}, \\alpha_{i_2}, \\cdots, \\alpha_{i_{s_1}}\\); (II)': \\(\\beta_{i_1}, \\cdots, \\beta_{i_{s_2}}\\); (III)': \\(\\gamma_{i_1}, \\cdots, \\gamma_{i_{s_3}}\\)。作向量组 (V)': \\(\\beta_{i_1}, \\cdots, \\beta_{i_{s_2}}, \\gamma_{i_1}, \\cdots, \\gamma_{i_{s_3}}\\)。由于 (I)' 是 (I) 的极大无关组，则 (I)' 可由 (I) 线性表示，而 (I) 能由 (IV) 线性表示，(IV) 能由 (V) 线性表示，而 (V) 可由其极大无关组 (V)' 表示，所以 (I)' 可由 (V)' 线性表示，于是 \\(s_1 \\leq s_2 + s_3\\)。同理可证 \\(s_2 \\leq s_1 + s_3\\)，\\(s_3 \\leq s_1 + s_2\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-calc-8",
    "ch": 3,
    "src": "jingxuan",
    "type": "calc",
    "no": 8,
    "stem": "设四维向量组 \\(\\alpha_1 = (1+a, 1, 1, 1)^T\\)，\\(\\alpha_2 = (2, 2+a, 2, 2)^T\\)，\\(\\alpha_3 = (3, 3, 3+a, 3)^T\\)，\\(\\alpha_4 = (4, 4, 4, 4+a)^T\\)，问 \\(a\\) 为何值时 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性相关？当 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性相关时，求其一个极大线性无关组，并将其余向量用该极大线性无关组线性表示。",
    "options": null,
    "ans": null,
    "fb": "方法一 记 \\(A = (\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4)\\)，则 \\[|A| = \\begin{vmatrix} 1+a & 2 & 3 & 4 \\\\ 1 & 2+a & 3 & 4 \\\\ 1 & 2 & 3+a & 4 \\\\ 1 & 2 & 3 & 4+a \\end{vmatrix} = (a+10)a^3.\\] 当 \\(a = 0\\) 或 \\(a = -10\\) 时 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性相关。当 \\(a = 0\\) 时，\\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 的一个极大线性无关组，且 \\(\\alpha_2 = 2\\alpha_1, \\alpha_3 = 3\\alpha_1, \\alpha_4 = 4\\alpha_1\\)。当 \\(a = -10\\) 时，对 \\(A\\) 施以初等行变换，有 \\[A \\to \\begin{bmatrix} -9 & 2 & 3 & 4 \\\\ 1 & -8 & 3 & 4 \\\\ 1 & 2 & -7 & 4 \\\\ 1 & 2 & 3 & -6 \\end{bmatrix} \\to \\begin{bmatrix} -9 & 2 & 3 & 4 \\\\ 10 & -10 & 0 & 0 \\\\ 10 & 0 & -10 & 0 \\\\ 10 & 0 & 0 & -10 \\end{bmatrix} \\to \\begin{bmatrix} -9 & 2 & 3 & 4 \\\\ 1 & -1 & 0 & 0 \\\\ 1 & 0 & -1 & 0 \\\\ 1 & 0 & 0 & -1 \\end{bmatrix} \\to \\begin{bmatrix} 0 & 0 & 0 & 0 \\\\ 1 & -1 & 0 & 0 \\\\ 1 & 0 & -1 & 0 \\\\ 1 & 0 & 0 & -1 \\end{bmatrix} = (\\beta_1, \\beta_2, \\beta_3, \\beta_4).\\] 由于 \\(\\beta_1 = -\\beta_2 - \\beta_3 - \\beta_4\\)，故 \\(\\beta_1 = -\\beta_2 - \\beta_3 - \\beta_4\\)，即 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 为 \\(\\alpha_2, \\alpha_3, \\alpha_4\\) 的一个极大线性无关组，且 \\(\\alpha_1 = -\\alpha_2 - \\alpha_3 - \\alpha_4\\)。方法二 记 \\(A = (\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4)\\)，对 \\(A\\) 施以初等行变换，有 \\[A = \\begin{bmatrix} 1+a & 2 & 3 & 4 \\\\ 1 & 2+a & 3 & 4 \\\\ 1 & 2 & 3+a & 4 \\\\ 1 & 2 & 3 & 4+a \\end{bmatrix} \\to \\begin{bmatrix} 1+a & 2 & 3 & 4 \\\\ -a & a & 0 & 0 \\\\ -a & 0 & a & 0 \\\\ -a & 0 & 0 & a \\end{bmatrix} = B.\\] 当 \\(a = 0\\) 时，\\(A\\) 的秩为 1，因而 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性相关，此时 \\(\\alpha_1\\) 为 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 的一个极大线性无关组，且 \\(\\alpha_2 = 2\\alpha_1, \\alpha_3 = 3\\alpha_1, \\alpha_4 = 4\\alpha_1\\)。当 \\(a \\neq 0\\) 时，再对 \\(B\\) 施以初等行变换，有 \\[B \\to \\begin{bmatrix} 1+a & 2 & 3 & 4 \\\\ -1 & 1 & 0 & 0 \\\\ -1 & 0 & 1 & 0 \\\\ -1 & 0 & 0 & 1 \\end{bmatrix} \\to \\begin{bmatrix} a+10 & 0 & 0 & 0 \\\\ -1 & 1 & 0 & 0 \\\\ -1 & 0 & 1 & 0 \\\\ -1 & 0 & 0 & 1 \\end{bmatrix} = C = (\\gamma_1, \\gamma_2, \\gamma_3, \\gamma_4).\\] 如果 \\(a \\neq -10\\)，\\(C\\) 的秩为 4，从而 \\(A\\) 的秩为 4，故 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性无关。如果 \\(a = -10\\)，\\(C\\) 的秩为 3，从而 \\(A\\) 的秩为 3，故 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 线性相关。由于 \\(\\gamma_1, \\gamma_2, \\gamma_3, \\gamma_4\\) 与 \\(\\gamma_1, \\gamma_2, \\gamma_3, \\gamma_4\\) 的一个极大线性无关组，且 \\(\\gamma_1 = -\\gamma_2 - \\gamma_3 - \\gamma_4\\)，于是 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 为 \\(\\alpha_1, \\alpha_2, \\alpha_3, \\alpha_4\\) 的一个极大线性无关组，且 \\(\\alpha_1 = -\\alpha_2 - \\alpha_3 - \\alpha_4\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-proof-39",
    "ch": 3,
    "src": "jingxuan",
    "type": "proof",
    "no": 39,
    "stem": "利用向量组理论，证明下列关于矩阵的秩的结论：(1) 设 \\(A, B\\) 为 \\(m \\times n\\) 矩阵，证明：\\(r(A+B) \\leq r(A) + r(B)\\)。(2) 设 \\(A\\) 是 \\(m \\times n\\) 矩阵，\\(B\\) 是 \\(n \\times s\\) 矩阵，证明：\\(r(AB) \\leq \\min\\{r(A), r(B)\\}\\)。",
    "options": null,
    "ans": null,
    "fb": "(1) 设 \\(A = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\)，\\(B = (\\beta_1, \\beta_2, \\cdots, \\beta_n)\\)，\\(A + B = (\\alpha_1 + \\beta_1, \\alpha_2 + \\beta_2, \\cdots, \\alpha_n + \\beta_n) = (\\gamma_1, \\gamma_2, \\cdots, \\gamma_n)\\)，其中 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\) 和 \\(\\beta_1, \\beta_2, \\cdots, \\beta_n\\) 及 \\(\\gamma_1, \\gamma_2, \\cdots, \\gamma_n\\) 分别为 \\(A, B\\) 及 \\(A + B\\) 的列向量。不妨设 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\) (\\(s \\leq n\\)) 为 \\(A\\) 的列向量组的极大线性无关组，\\(\\beta_1, \\beta_2, \\cdots, \\beta_s\\) (\\(s \\leq n\\)) 为 \\(B\\) 的列向量组的极大线性无关组，显然 \\(\\gamma_1, \\gamma_2, \\cdots, \\gamma_n\\) 可由 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s, \\beta_1, \\beta_2, \\cdots, \\beta_s\\) 线性表示，从而它也可由 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s, \\beta_1, \\beta_2, \\cdots, \\beta_s\\) 线性表示，所以向量组 \\(\\gamma_1, \\gamma_2, \\cdots, \\gamma_n\\) 的秩不会超过向量组 \\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s, \\beta_1, \\beta_2, \\cdots, \\beta_s\\) 的秩，即有 \\[r(A+B) \\leq r_1 + s = r(A) + r(B).\\] (2) 设 \\[A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}, \\quad B = \\begin{bmatrix} b_{11} & b_{12} & \\cdots & b_{1s} \\\\ b_{21} & b_{22} & \\cdots & b_{2s} \\\\ \\vdots & \\vdots & & \\vdots \\\\ b_{n1} & b_{n2} & \\cdots & b_{ns} \\end{bmatrix} = \\begin{bmatrix} b_1 \\\\ b_2 \\\\ \\vdots \\\\ b_n \\end{bmatrix},\\] \\[AB = \\begin{bmatrix} c_{11} & c_{12} & \\cdots & c_{1s} \\\\ c_{21} & c_{22} & \\cdots & c_{2s} \\\\ \\vdots & \\vdots & & \\vdots \\\\ c_{m1} & c_{m2} & \\cdots & c_{ms} \\end{bmatrix} = \\begin{bmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_m \\end{bmatrix},\\] 其中 \\(b_1, b_2, \\cdots, b_n\\) 表示矩阵 \\(B\\) 的行向量，\\(c_1, c_2, \\cdots, c_m\\) 表示矩阵 \\(AB\\) 的行向量，则 \\(c_i = a_{i1}b_1 + a_{i2}b_2 + \\cdots + a_{in}b_n\\) (\\(i = 1, 2, \\cdots, m\\))，即矩阵 \\(AB\\) 的行向量可由矩阵 \\(B\\) 的行向量组线性表示，故 \\(r(AB) \\leq r(B)\\)。再证 \\(r(AB) \\leq r(A)\\)：\\(r(AB) = r((AB)^T) = r(B^T A^T)\\)，而 \\(r(B^T A^T) \\leq r(A^T) \\leq r(A)\\)，从而有 \\[r(AB) = r(B^T A^T) \\leq r(A).\\] 综上所述，有 \\[r(AB) \\leq \\min\\{r(A), r(B)\\}.\\]",
    "pts": 8,
    "diff": 2,
    "sec": "s33"
  },
  {
    "id": "c3-jx-mc-24",
    "ch": 3,
    "src": "jingxuan",
    "type": "mc",
    "no": 24,
    "stem": "设 \\(\\alpha_1, \\alpha_2, \\alpha_3\\) 是三维向量空间的一组基，则由基 \\(\\alpha_1, \\frac{1}{2}\\alpha_2, \\frac{1}{3}\\alpha_3\\) 到基 \\(\\alpha_1 + \\alpha_2, \\alpha_2 + \\alpha_3, \\alpha_3 + \\alpha_1\\) 的过渡矩阵为 ______。",
    "options": [
      [
        "A",
        "\\(\\begin{bmatrix} 1 & 0 & 1 \\\\ 2 & 2 & 0 \\\\ 0 & 3 & 3 \\end{bmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 2 & 3 \\\\ 1 & 0 & 3 \\end{bmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{bmatrix} \\frac{1}{2} & \\frac{1}{4} & -\\frac{1}{6} \\\\ -\\frac{1}{2} & \\frac{1}{4} & \\frac{1}{6} \\\\ \\frac{1}{2} & -\\frac{1}{4} & \\frac{1}{6} \\end{bmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{bmatrix} \\frac{1}{2} & -\\frac{1}{2} & \\frac{1}{2} \\\\ \\frac{1}{4} & \\frac{1}{4} & -\\frac{1}{4} \\\\ -\\frac{1}{6} & \\frac{1}{6} & \\frac{1}{6} \\end{bmatrix}\\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：记 \\(e=(\\alpha_1,\\alpha_2,\\alpha_3)\\)。基 \\((\\alpha_1,\\frac12\\alpha_2,\\frac13\\alpha_3)=eD\\)，其中 \\(D=\\operatorname{diag}(1,\\frac12,\\frac13)\\)；基 \\((\\alpha_1+\\alpha_2,\\alpha_2+\\alpha_3,\\alpha_3+\\alpha_1)=eB\\)，其中 \\(B=\\begin{bmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{bmatrix}\\)。由 \\((\\text{新基})=(\\text{旧基})P\\) 得 \\(P=D^{-1}B=\\operatorname{diag}(1,2,3)B=\\begin{bmatrix}1&0&1\\\\2&2&0\\\\0&3&3\\end{bmatrix}\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-38",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 38,
    "stem": "设 \\(\\mathbb{R}^3\\) 的一组基为 \\(\\varepsilon_1 = (1, 2, 0)^T\\)，\\(\\varepsilon_2 = (1, -1, 2)^T\\)，\\(\\varepsilon_3 = (0, 1, -1)^T\\)，由基 \\(\\eta_1, \\eta_2, \\eta_3\\) 到基 \\(\\varepsilon_1, \\varepsilon_2, \\varepsilon_3\\) 的过渡矩阵为 \\[P = \\begin{bmatrix} 2 & 1 & 6 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 2 \\end{bmatrix},\\] 求基 \\(\\eta_1, \\eta_2, \\eta_3\\)。",
    "options": null,
    "ans": "\\(\\eta_1 = (-3, -2, -3)^T\\)，\\(\\eta_2 = (4, 1, 5)^T\\)，\\(\\eta_3 = (7, 6, 6)^T\\)。",
    "fb": "解：由基 \\(\\eta\\) 到基 \\(\\varepsilon\\) 的过渡矩阵为 \\(P\\)，即 \\((\\varepsilon_1,\\varepsilon_2,\\varepsilon_3)=(\\eta_1,\\eta_2,\\eta_3)P\\)，故 \\(( \\eta_1,\\eta_2,\\eta_3)=(\\varepsilon_1,\\varepsilon_2,\\varepsilon_3)P^{-1}\\)。计算 \\(P^{-1}=\\begin{bmatrix}-2&2&5\\\\-1&2&2\\\\1&-1&-2\\end{bmatrix}\\)。于是\n\\(\\eta_1=-2\\varepsilon_1-\\varepsilon_2+\\varepsilon_3=(-3,-2,-3)^T\\)，\n\\(\\eta_2=2\\varepsilon_1+2\\varepsilon_2-\\varepsilon_3=(4,1,5)^T\\)，\n\\(\\eta_3=5\\varepsilon_1+2\\varepsilon_2-2\\varepsilon_3=(7,6,6)^T\\)。\n故应填：\\(\\eta_1=(-3,-2,-3)^T,\\ \\eta_2=(4,1,5)^T,\\ \\eta_3=(7,6,6)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-39",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 39,
    "stem": "若向量组 \\(\\alpha_1 = (1, 1, 1, 1)^T\\)，\\(\\alpha_2 = (0, 1, -1, 2)^T\\)，\\(\\alpha_3 = (2, 3, 2+t, 4)^T\\)，\\(\\alpha_4 = (3, 1, 5, 9)^T\\) 不是四维向量空间 \\(\\mathbb{R}^4\\) 的一个基，则 \\(t =\\) ______。",
    "options": null,
    "ans": "\\(-1\\)",
    "fb": "解：四个向量构成 \\(\\mathbb R^4\\) 的基当且仅当它们线性无关，即行列式非零。计算以它们为列的行列式：经化简得 \\(\\det=10(t+1)\\)。令其为 0（不是基的情形）得 \\(t=-1\\)。故应填 \\(-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-40",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 40,
    "stem": "已知 \\(\\alpha_1, \\alpha_2, \\alpha_3\\) 是三维向量空间 \\(V\\) 的一个基，又 \\(\\beta_1 = \\alpha_1 + \\alpha_2 - \\alpha_3\\)，\\(\\beta_2 = -\\alpha_1 - 2\\alpha_2 + 2\\alpha_3\\)，\\(\\beta_3 = 3\\alpha_1 + 4\\alpha_2 - 3\\alpha_3\\)。(1) 证明 \\(\\beta_1, \\beta_2, \\beta_3\\) 也是 \\(V\\) 的一个基；(2) 求向量 \\(\\xi = \\alpha_1 + \\alpha_2 + \\alpha_3\\) 在基 \\(\\beta_1, \\beta_2, \\beta_3\\) 下的坐标。",
    "options": null,
    "ans": "(2) \\(\\xi\\) 在基 \\(\\beta_1, \\beta_2, \\beta_3\\) 下的坐标为 \\((-3, 2, 2)^T\\)。",
    "fb": "解：(1) 由 \\((\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)B\\)，其中 \\(B=\\begin{bmatrix}1&1&3\\\\1&-2&4\\\\-1&2&-3\\end{bmatrix}\\)，计算得 \\(|B|=4\\neq0\\)，故 \\(\\beta_1,\\beta_2,\\beta_3\\) 也是基。\n(2) \\(\\xi=\\alpha_1+\\alpha_2+\\alpha_3\\)，即 \\(\\xi\\) 在基 \\(\\alpha\\) 下坐标为 \\((1,1,1)^T\\)。设其在基 \\(\\beta\\) 下坐标为 \\(x\\)，则 \\(Bx=(1,1,1)^T\\)。解得 \\(x=(-3,2,2)^T\\)。故应填：(2) \\(\\xi\\) 在基 \\(\\beta_1,\\beta_2,\\beta_3\\) 下的坐标为 \\((-3,2,2)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c3-jx-fill-41",
    "ch": 3,
    "src": "jingxuan",
    "type": "fill",
    "no": 41,
    "stem": "已知 \\(\\mathbb{R}^3\\) 的向量 \\(\\gamma = (1, 0, -1)^T\\) 及 \\(\\mathbb{R}^3\\) 的一组基 \\(\\varepsilon_1 = (1, 0, 1)^T\\)，\\(\\varepsilon_2 = (1, 1, 1)^T\\)，\\(\\varepsilon_3 = (1, 0, 0)^T\\)。\\(A\\) 是一个三阶矩阵，已知 \\(A\\varepsilon_1 = \\varepsilon_1 + \\varepsilon_2\\)，\\(A\\varepsilon_2 = \\varepsilon_2 - \\varepsilon_3\\)，\\(A\\varepsilon_3 = 2\\varepsilon_1 - \\varepsilon_2 + \\varepsilon_3\\)，求 \\(A\\gamma\\) 在 \\(\\varepsilon_1, \\varepsilon_2, \\varepsilon_3\\) 下的坐标。",
    "options": null,
    "ans": "\\(A\\gamma\\) 在基 \\(\\varepsilon_1, \\varepsilon_2, \\varepsilon_3\\) 下的坐标为 \\((3, -2, 1)^T\\)。",
    "fb": "解：先求 \\(\\gamma\\) 在基 \\(\\varepsilon\\) 下的坐标。由 \\(\\gamma=(1,0,-1)^T\\) 及 \\(\\varepsilon_1=(1,0,1)^T,\\varepsilon_2=(1,1,1)^T,\\varepsilon_3=(1,0,0)^T\\)，解得 \\(\\gamma=-\\varepsilon_1+0\\varepsilon_2+2\\varepsilon_3\\)，即坐标 \\(c=(-1,0,2)^T\\)。\n\\(A\\) 在基 \\(\\varepsilon\\) 下的矩阵为 \\(M\\)，其列为 \\(A\\varepsilon_i\\) 的坐标：\\(A\\varepsilon_1\\to(1,1,0)^T,\\ A\\varepsilon_2\\to(0,1,-1)^T,\\ A\\varepsilon_3\\to(2,-1,1)^T\\)，故 \\(M=\\begin{bmatrix}1&0&2\\\\1&1&-1\\\\0&-1&1\\end{bmatrix}\\)。\n于是 \\(A\\gamma\\) 在基 \\(\\varepsilon\\) 下的坐标为 \\(Mc=\\begin{bmatrix}1&0&2\\\\1&1&-1\\\\0&-1&1\\end{bmatrix}\\begin{bmatrix}-1\\\\0\\\\2\\end{bmatrix}=\\begin{bmatrix}3\\\\-3\\\\2\\end{bmatrix}\\)。故应填：\\(A\\gamma\\) 在基 \\(\\varepsilon_1,\\varepsilon_2,\\varepsilon_3\\) 下的坐标为 \\((3,-3,2)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s34"
  },
  {
    "id": "c4-jx-mc-1",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 1,
    "stem": "齐次线性方程组 \\( Ax=0 \\) 仅有零解的充要条件是______。",
    "options": [
      [
        "A",
        "系数矩阵 \\( A \\) 的行向量组线性无关"
      ],
      [
        "B",
        "系数矩阵 \\( A \\) 的列向量组线性无关"
      ],
      [
        "C",
        "系数矩阵 \\( A \\) 的行向量组线性相关"
      ],
      [
        "D",
        "系数矩阵 \\( A \\) 的列向量组线性相关"
      ]
    ],
    "ans": "B",
    "fb": "解析：齐次线性方程组 \\(Ax=0\\) 仅有零解的充分必要条件是 \\(R(A)=n\\)（系数矩阵列满秩）。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-2",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 2,
    "stem": "齐次线性方程组 \\( Ax=0 \\) 有非零解的充要条件是______。",
    "options": [
      [
        "A",
        "系数矩阵 \\( A \\) 的任意两个列向量线性相关"
      ],
      [
        "B",
        "系数矩阵 \\( A \\) 的任意两个行向量线性相关"
      ],
      [
        "C",
        "系数矩阵 \\( A \\) 中至少有一个列向量是其余列向量的线性组合"
      ],
      [
        "D",
        "系数矩阵 \\( A \\) 中任一列向量是其余列向量的线性组合"
      ]
    ],
    "ans": "C",
    "fb": "解析：齐次线性方程组 \\(Ax=0\\) 有非零解的充分必要条件是 \\(R(A)<n\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-3",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 3,
    "stem": "设 \\( A \\) 为 \\( m\\times n \\) 矩阵，则齐次线性方程组 \\( Ax=0 \\) 有结论：______。",
    "options": [
      [
        "A",
        "当 \\( m\\ge n \\) 时，方程组仅有零解"
      ],
      [
        "B",
        "当 \\( m<n \\) 时，方程组有非零解，且基础解系中含 \\( n-m \\) 个线性无关的解向量"
      ],
      [
        "C",
        "若 \\( A \\) 有 \\( n \\) 阶子式不为零，则方程组只有零解"
      ],
      [
        "D",
        "若所有 \\( n-1 \\) 阶子式不为零，则方程组只有零解"
      ]
    ],
    "ans": "C",
    "fb": "解析：设 \\(A\\) 为 \\(m\\times n\\) 矩阵，则 \\(Ax=0\\) 必有零解；当 \\(R(A)<n\\) 时有非零解，且基础解系含 \\(n-R(A)\\) 个解向量。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-4",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 4,
    "stem": "设 \\( A \\) 是 \\( m\\times n \\) 矩阵，\\( B \\) 是 \\( n\\times m \\) 矩阵，则齐次线性方程组 \\( (AB)x=0 \\)______。",
    "options": [
      [
        "A",
        "当 \\( n>m \\) 时仅有零解"
      ],
      [
        "B",
        "当 \\( n>m \\) 时必有非零解"
      ],
      [
        "C",
        "当 \\( m>n \\) 时仅有零解"
      ],
      [
        "D",
        "当 \\( m>n \\) 时必有非零解"
      ]
    ],
    "ans": "D",
    "fb": "解析：注意 \\(AB\\) 是 \\(m\\times m\\) 矩阵，且 \\(r(AB)\\le r(A)\\le n\\)。当 \\(m>n\\) 时，\\(r(AB)\\le n<m\\)，故 \\((AB)x=0\\) 必有非零解。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-1",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 1,
    "stem": "齐次线性方程组 \\( \\begin{cases} \\lambda x_1+x_2+x_3=0, \\\\ x_1+\\lambda x_2+x_3=0, \\\\ x_1+x_2+\\lambda x_3=0 \\end{cases} \\) 有非零解的充要条件是 \\( \\lambda= \\)______。",
    "options": null,
    "ans": "\\( \\lambda=1 \\) 或 \\( \\lambda=-2 \\)",
    "fb": "解析：系数矩阵行列式为 \\(\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=(\\lambda+2)(\\lambda-1)^2\\)。齐次方程组有非零解当且仅当该行列式为0，即 \\(\\lambda=1\\) 或 \\(\\lambda=-2\\)。故应填 \\(\\lambda=1\\) 或 \\(\\lambda=-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-2",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 2,
    "stem": "设齐次线性方程组 \\( Ax=0 \\) 有非零解，\\( A=\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & t & 1 \\\\ -1 & 3 & 2 \\\\ -2 & 1 & -1 \\end{bmatrix} \\)，则 \\( t= \\)______。",
    "options": null,
    "ans": "\\( t=-1 \\)",
    "fb": "解析：\\(Ax=0\\) 有非零解当且仅当 \\(R(A)<3\\)。对矩阵 \\(A\\) 作行变换，当 \\(t=-1\\) 时其秩为2，小于3，满足条件。故应填 \\(t=-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-5",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 5,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶方阵，\\( r(A)=n-3 \\)，且 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 是 \\( Ax=0 \\) 的三个线性无关的解向量，则 \\( Ax=0 \\) 的基础解系为______。",
    "options": [
      [
        "A",
        "\\( \\alpha_1+\\alpha_2,\\ \\alpha_2+\\alpha_3,\\ \\alpha_3+\\alpha_1 \\)"
      ],
      [
        "B",
        "\\( \\alpha_2-\\alpha_1,\\ \\alpha_3-\\alpha_2,\\ \\alpha_1-\\alpha_3 \\)"
      ],
      [
        "C",
        "\\( 2\\alpha_2-\\alpha_1,\\ \\frac12\\alpha_3-\\alpha_2,\\ \\alpha_1-\\alpha_3 \\)"
      ],
      [
        "D",
        "\\( \\alpha_1+\\alpha_2+\\alpha_3,\\ \\alpha_3-\\alpha_2,\\ -\\alpha_1-2\\alpha_3 \\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：\\(A\\) 是 \\(n\\) 阶方阵，\\(r(A)=n-3\\)，故 \\(Ax=0\\) 的基础解系含 \\(n-r(A)=3\\) 个解向量。已知 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 是三个线性无关的解，正好构成基础解系。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-6",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 6,
    "stem": "已知 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 是齐次线性方程组 \\( Ax=0 \\) 的一个基础解系，则 \\( Ax=0 \\) 的基础解系还可以表示为______。",
    "options": [
      [
        "A",
        "一个与 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 等价的向量组"
      ],
      [
        "B",
        "一个与 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 等秩的向量组"
      ],
      [
        "C",
        "\\( \\alpha_1,\\alpha_1+\\alpha_2,\\alpha_1+\\alpha_2+\\alpha_3 \\)"
      ],
      [
        "D",
        "\\( \\alpha_1-\\alpha_2,\\alpha_2-\\alpha_3,\\alpha_3-\\alpha_1 \\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：基础解系须由 \\(n-r\\) 个线性无关的解向量组成。由于 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 是基础解系，能重新表出且保持线性无关性的向量组即为新的基础解系，典型如 \\(\\alpha_1+\\alpha_2,\\ \\alpha_2+\\alpha_3,\\ \\alpha_3+\\alpha_1\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-7",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 7,
    "stem": "设 \\( A=(a_{ij})_{n\\times n} \\)，且 \\( |A|=0 \\)，但 \\( A \\) 中某元素的代数余子式 \\( A_{kl}\\ne 0 \\)，则齐次线性方程组 \\( Ax=0 \\) 的每个基础解系中向量的个数都是______。",
    "options": [
      [
        "A",
        "\\( 1 \\)"
      ],
      [
        "B",
        "\\( k \\)"
      ],
      [
        "C",
        "\\( l \\)"
      ],
      [
        "D",
        "\\( n \\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：\\(\\lvert A\\rvert=0\\) 但某代数余子式 \\(A_{kl}\\neq0\\)，说明存在一个 \\(n-1\\) 阶子式非零，故 \\(r(A)=n-1\\)。因此 \\(Ax=0\\) 的基础解系含 \\(n-r(A)=1\\) 个解向量。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-3",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 3,
    "stem": "设 \\( A=\\begin{bmatrix} 1 & 0 & 3 & 1 & 2 \\\\ -1 & 3 & 0 & -1 & 1 \\\\ 2 & 1 & 7 & 2 & t \\end{bmatrix} \\)，若齐次线性方程组 \\( Ax=0 \\) 的基础解系含有 3 个解向量，则 \\( t= \\)______。",
    "options": null,
    "ans": "\\( t=5 \\)",
    "fb": "解析：基础解系含3个解向量，故 \\(n-r(A)=3\\)，即 \\(r(A)=5-3=2\\)。对 \\(A\\) 作行变换求其秩为2时得 \\(t=5\\)。故应填 \\(t=5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-proof-1",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 1,
    "stem": "已知齐次线性方程组 \\( Ax=0 \\) 的一组基础解系为 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\)，则下列结论是否正确？\\( (1)\\ \\alpha_1+2\\alpha_2,3\\alpha_2+\\alpha_3,\\alpha_3-2\\alpha_1 \\) 也为 \\( Ax=0 \\) 的一组基础解系；\\( (2)\\ \\) 向量组 \\( \\xi_1,\\xi_2,\\xi_3 \\) 能被向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示，则 \\( \\xi_1,\\xi_2,\\xi_3 \\) 也是 \\( Ax=0 \\) 的基础解系；\\( (3)\\ \\) 向量组 \\( \\xi_1,\\xi_2,\\xi_3 \\) 与向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 可以互相线性表示，则 \\( \\xi_1,\\xi_2,\\xi_3 \\) 也是 \\( Ax=0 \\) 的基础解系；\\( (4)\\ \\) 向量组 \\( \\eta_1,\\eta_2,\\eta_3,\\eta_4 \\) 与向量组 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 是等价的向量组，则 \\( \\eta_1,\\eta_2,\\eta_3,\\eta_4 \\) 也为 \\( Ax=0 \\) 的基础解系。",
    "options": null,
    "ans": null,
    "fb": "\\( (1)\\) 正确。\\( \\alpha_1+2\\alpha_2,3\\alpha_2+\\alpha_3,\\alpha_3-2\\alpha_1 \\) 是 \\( Ax=0 \\) 的解，且由矩阵 \\( B=(\\alpha_1,\\alpha_2,\\alpha_3) \\) 的秩为 3，通过列初等变换不改变秩，可知它们线性无关，故构成基础解系。\\( (2)\\) 不正确。能被 \\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 线性表示不能保证 \\( \\xi_1,\\xi_2,\\xi_3 \\) 线性无关。\\( (3)\\) 正确。互相线性表示则等秩，故 \\( r(\\xi_1,\\xi_2,\\xi_3)=3 \\) 且都是解向量。\\( (4)\\) 不正确。等价向量组 \\( \\eta_1,\\eta_2,\\eta_3,\\eta_4 \\) 含 4 个向量，必线性相关，不能构成基础解系。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-4",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 4,
    "stem": "求齐次线性方程组 \\( \\begin{cases} x_1+x_2+x_3+4x_4-3x_5=0, \\\\ 2x_1+x_2+3x_3+5x_4-5x_5=0, \\\\ x_1-x_2+3x_3-2x_4-x_5=0, \\\\ 3x_1+x_2+5x_3+6x_4-7x_5=0 \\end{cases} \\) 的基础解系。",
    "options": null,
    "ans": "基础解系为 \\( \\xi_1=(-2,1,1,0,0)^T,\\ \\xi_2=(-1,-3,0,1,0)^T,\\ \\xi_3=(2,1,0,0,1)^T \\)。",
    "fb": "解析：对系数矩阵作初等行变换化为行最简形，取 \\(x_3,x_4,x_5\\) 为自由未知量，令它们分别取 \\((1,0,0),(0,1,0),(0,0,1)\\) 得基础解系 \\(\\xi_1=(-2,1,1,0,0)^T,\\ \\xi_2=(-1,-3,0,1,0)^T,\\ \\xi_3=(2,1,0,0,1)^T\\)。故应填 基础解系为 \\(\\xi_1=(-2,1,1,0,0)^T,\\ \\xi_2=(-1,-3,0,1,0)^T,\\ \\xi_3=(2,1,0,0,1)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-5",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 5,
    "stem": "已知 \\( \\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4 \\) 是齐次线性方程组 \\( Ax=0 \\) 的一个基础解系，若 \\( \\beta_1=\\alpha_1+t\\alpha_2,\\ \\beta_2=\\alpha_2+t\\alpha_3,\\ \\beta_3=\\alpha_3+t\\alpha_4,\\ \\beta_4=\\alpha_4+t\\alpha_1 \\)，讨论实数 \\( t \\) 满足什么关系时 \\( \\beta_1,\\beta_2,\\beta_3,\\beta_4 \\) 也是 \\( Ax=0 \\) 的一个基础解系。",
    "options": null,
    "ans": "当 \\( t\\ne\\pm 1 \\) 时，\\( \\beta_1,\\beta_2,\\beta_3,\\beta_4 \\) 是 \\( Ax=0 \\) 的基础解系。",
    "fb": "解析：由基础解系定义，\\(\\beta_1,\\beta_2,\\beta_3,\\beta_4\\) 仍是基础解系当且仅当它们线性无关。将由 \\(\\alpha\\) 表出的关系写成矩阵形式，系数矩阵的行列式为 \\(1-t^4\\)。当 \\(1-t^4\\neq0\\) 即 \\(t\\neq\\pm1\\) 时，\\(\\beta\\) 组线性无关，且与 \\(\\alpha\\) 组等价，故也是基础解系。故应填 当 \\(t\\neq\\pm 1\\) 时，\\(\\beta_1,\\beta_2,\\beta_3,\\beta_4\\) 是 \\(Ax=0\\) 的基础解系。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-6",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 6,
    "stem": "设 \\( \\alpha_1,\\alpha_2,\\ldots,\\alpha_s \\) 为线性方程组 \\( Ax=0 \\) 的一个基础解系，\\( \\beta_1=t_1\\alpha_1+t_2\\alpha_2,\\ \\beta_2=t_1\\alpha_2+t_2\\alpha_3,\\ldots,\\ \\beta_s=t_1\\alpha_s+t_2\\alpha_1 \\)，其中 \\( t_1,t_2 \\) 为实常数。试问：\\( t_1,t_2 \\) 满足什么关系时，\\( \\beta_1,\\beta_2,\\ldots,\\beta_s \\) 也为 \\( Ax=0 \\) 的一个基础解系。",
    "options": null,
    "ans": "当 \\( s \\) 为偶数时，\\( t_1\\ne\\pm t_2 \\)；当 \\( s \\) 为奇数时，\\( t_1\\ne t_2 \\)。",
    "fb": "解析：\\(\\beta_1,\\ldots,\\beta_s\\) 为 \\(Ax=0\\) 的基础解系当且仅当它们线性无关。由表出关系，\\(\\beta\\) 组线性无关等价于系数行列式 \\(t_1^s+(-1)^{s+1}t_2^s\\neq0\\)。当 \\(s\\) 为偶数时要求 \\(t_1^s-t_2^s\\neq0\\) 即 \\(t_1\\neq\\pm t_2\\)；当 \\(s\\) 为奇数时要求 \\(t_1^s+t_2^s\\neq0\\) 即 \\(t_1\\neq -t_2\\)（结合得 \\(t_1\\neq t_2\\)）。故应填 当 \\(s\\) 为偶数时，\\(t_1\\neq\\pm t_2\\)；当 \\(s\\) 为奇数时，\\(t_1\\neq t_2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-7",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 7,
    "stem": "求齐次线性方程组 \\( \\begin{cases} x_1-x_2+5x_3-x_4+x_5=0, \\\\ x_1+x_2-2x_3+3x_4-x_5=0, \\\\ 3x_1-x_2+8x_3+x_4+2x_5=0, \\\\ x_1+3x_2-9x_3+7x_4-3x_5=0 \\end{cases} \\) 的基础解系和通解。",
    "options": null,
    "ans": "基础解系为 \\( \\xi_1=\\left(-\\frac32,\\frac72,1,0,0\\right)^T,\\ \\xi_2=(-1,-2,0,1,0)^T \\)，通解为 \\( x=k_1\\xi_1+k_2\\xi_2 \\)（\\( k_1,k_2 \\) 为任意常数）。",
    "fb": "解析：对系数矩阵作初等行变换化为行最简形，取 \\(x_3,x_4,x_5\\) 为自由未知量，令 \\((x_3,x_4,x_5)=(1,0,0)\\) 与 \\((0,1,0)\\) 得基础解系 \\(\\xi_1=(-\\tfrac32,\\tfrac72,1,0,0)^T,\\ \\xi_2=(-1,-2,0,1,0)^T\\)，通解为 \\(x=k_1\\xi_1+k_2\\xi_2\\)。故应填 基础解系为 \\(\\xi_1=\\left(-\\frac32,\\frac72,1,0,0\\right)^T,\\ \\xi_2=(-1,-2,0,1,0)^T\\)，通解为 \\(x=k_1\\xi_1+k_2\\xi_2\\)（\\(k_1,k_2\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-1",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 1,
    "stem": "已知齐次线性方程组 \\( \\begin{cases} x_1+x_2+x_3=0, \\\\ ax_1+bx_2+cx_3=0, \\\\ a^2x_1+b^2x_2+c^2x_3=0 \\end{cases} \\)。\\( (1)\\) \\( a,b,c \\) 满足何种关系时，方程组仅有零解？\\( (2)\\) \\( a,b,c \\) 满足何种关系时，方程组有无穷多组解，并用基础解系表示全部解。",
    "options": null,
    "ans": null,
    "fb": "系数行列式 \\( D=\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix}=(a-b)(b-c)(c-a) \\)。\\( (1)\\) 当 \\( a\\ne b,b\\ne c,c\\ne a \\) 时 \\( D\\ne 0 \\)，方程组仅有零解。\\( (2)\\) 分别讨论两两相等及三者相等的情形，化简后得到上述全部解。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-2",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 2,
    "stem": "设有齐次线性方程组 \\( \\begin{cases} (1+a)x_1+x_2+x_3+x_4=0, \\\\ 2x_1+(2+a)x_2+2x_3+2x_4=0, \\\\ 3x_1+3x_2+(3+a)x_3+3x_4=0, \\\\ 4x_1+4x_2+4x_3+(4+a)x_4=0 \\end{cases} \\)。试问 \\( a \\) 取何值时，该方程组有非零解，并求出其通解。",
    "options": null,
    "ans": null,
    "fb": "对系数矩阵作初等行变换或用行列式。系数行列式 \\( |A|=(a+10)a^3 \\)，故 \\( a=0 \\) 或 \\( a=-10 \\) 时有非零解。当 \\( a=0 \\) 时 \\( r(A)=1 \\)，同解方程为 \\( x_1+x_2+x_3+x_4=0 \\)，得上述 3 个线性无关解向量。当 \\( a=-10 \\) 时 \\( r(A)=3 \\)，同解方程组为 \\( -2x_1+x_2=0,-3x_1+x_3=0,-4x_1+x_4=0 \\)，得基础解系 \\( \\eta=(1,2,3,4)^T \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-3",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 3,
    "stem": "设齐次线性方程组 \\[ \\begin{cases} ax_1 + bx_2 + bx_3 + \\cdots + bx_n = 0, \\\\ bx_1 + ax_2 + bx_3 + \\cdots + bx_n = 0, \\\\ \\cdots\\cdots\\cdots\\cdots \\\\ bx_1 + bx_2 + bx_3 + \\cdots + ax_n = 0, \\end{cases} \\] 其中 \\(a \\neq 0, b \\neq 0, n \\geq 2\\)。试讨论 \\(a,b\\) 为何值时，方程组仅有零解、有无穷多组解？在有无穷多组解时，求出全部解，并用基础解系表示全部解。",
    "options": null,
    "ans": null,
    "fb": "系数行列式 \\(|A|=[a+(n-1)b](a-b)^{n-1}\\)。由 Cramer 法则，当 \\(|A|\\neq 0\\) 即 \\(a\\neq b\\) 且 \\(a\\neq (1-n)b\\) 时仅有零解。当 \\(a=b\\) 时，对系数矩阵作初等行变换得同解方程组 \\(x_1+x_2+\\cdots+x_n=0\\)，取基础解系 \\(\\alpha_i=(-1,0,\\ldots,1,\\ldots,0)^T\\)（第 \\(i+1\\) 个分量为 1）。当 \\(a=(1-n)b\\) 时，同解方程组为 \\(x_1=x_2=\\cdots=x_n\\)，基础解系为 \\(\\beta=(1,1,\\ldots,1)^T\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-4",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 4,
    "stem": "已知齐次线性方程组 \\[ \\begin{cases} (a_1+b)x_1 + a_2x_2 + a_3x_3 + \\cdots + a_nx_n = 0, \\\\ a_1x_1 + (a_2+b)x_2 + a_3x_3 + \\cdots + a_nx_n = 0, \\\\ a_1x_1 + a_2x_2 + (a_3+b)x_3 + \\cdots + a_nx_n = 0, \\\\ \\cdots\\cdots\\cdots\\cdots \\\\ a_1x_1 + a_2x_2 + a_3x_3 + \\cdots + (a_n+b)x_n = 0, \\end{cases} \\] 其中 \\(\\sum\\limits_{i=1}^n a_i \\neq 0\\)。试讨论 \\(a_1,a_2,\\ldots,a_n\\) 和 \\(b\\) 满足何种关系时，(1) 方程组只有零解；(2) 方程组有非零解，在有非零解时，求通解。",
    "options": null,
    "ans": null,
    "fb": "系数行列式 \\(|A| = \\left(\\sum\\limits_{i=1}^n a_i + b\\right)b^{n-1}\\)。当 \\(|A|\\neq 0\\) 时只有零解。当 \\(b=-\\sum a_i\\) 时，系数矩阵经初等行变换化为每行和为 0 的形式，基础解系为 \\((1,1,\\ldots,1)^T\\)。当 \\(b=0\\) 时，方程组等价于 \\(a_1x_1+a_2x_2+\\cdots+a_nx_n=0\\)，由 \\(\\sum a_i\\neq 0\\) 知某个 \\(a_i\\neq 0\\)，不妨设 \\(a_1\\neq 0\\)，取基础解系 \\(\\eta_i=(-a_{i+1}/a_1,\\ldots,1,\\ldots,0)^T\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-8",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 8,
    "stem": "设 \\(A = \\begin{pmatrix} 1 & 2 & 1 & 2 \\\\ 0 & 1 & t & t \\\\ 1 & t & 0 & 1 \\end{pmatrix}\\)，且方程组 \\(Ax=0\\) 的基础解系中含有两个解向量，求 \\(Ax=0\\) 的通解。",
    "options": null,
    "ans": "\\(t=1\\)，通解为 \\(x = k_1\\xi_1 + k_2\\xi_2 = k_1(1,-1,1,0)^T + k_2(0,-1,0,1)^T\\)，\\(k_1,k_2\\) 为任意常数。",
    "fb": "解析：基础解系含2个向量，故 \\(n-r(A)=2\\)，即 \\(r(A)=2\\)（\\(n=4\\)）。对 \\(A\\) 作行变换，由 \\(r(A)=2\\) 得 \\(t=1\\)。此时同解方程组给出基础解系 \\(\\xi_1=(1,-1,1,0)^T,\\ \\xi_2=(0,-1,0,1)^T\\)，通解为 \\(x=k_1\\xi_1+k_2\\xi_2\\)。故应填 \\(t=1\\)，通解为 \\(x=k_1(1,-1,1,0)^T+k_2(0,-1,0,1)^T\\)（\\(k_1,k_2\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-9",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 9,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶矩阵，秩 \\(r(A)=n-1\\)。(1) 若矩阵 \\(A\\) 各行元素之和均为 0，则方程组 \\(Ax=0\\) 的通解是_____。(2) 若行列式 \\(|A|\\) 的代数余子式 \\(A_{11} \\neq 0\\)，则方程组 \\(Ax=0\\) 的通解是_____。",
    "options": null,
    "ans": "(1) \\(k(1,1,\\ldots,1)^T\\)，\\(k\\) 为任意常数；(2) \\(k(A_{11},A_{12},\\ldots,A_{1n})^T\\)，\\(k\\) 为任意常数。",
    "fb": "解析：(1) 各行元素之和为0，即 \\(A(1,1,\\ldots,1)^T=0\\)，故 \\((1,1,\\ldots,1)^T\\) 是一个非零解；又 \\(r(A)=n-1\\)，基础解系只含1个向量，故通解为 \\(k(1,1,\\ldots,1)^T\\)。(2) 由伴随矩阵性质 \\(AA^*=\\lvert A\\rvert E=0\\)，知 \\(A^*\\) 的列均为 \\(Ax=0\\) 的解；又 \\(A_{11}\\neq0\\)，可取 \\((A_{11},A_{12},\\ldots,A_{1n})^T\\) 作为基础解系向量，通解为 \\(k(A_{11},A_{12},\\ldots,A_{1n})^T\\)。故应填 (1) \\(k(1,1,\\ldots,1)^T\\)（\\(k\\) 为任意常数）；(2) \\(k(A_{11},A_{12},\\ldots,A_{1n})^T\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-10",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 10,
    "stem": "设 \\(A = \\begin{pmatrix} 1 & 2 & -2 \\\\ 4 & t & 3 \\\\ 3 & -1 & 1 \\end{pmatrix}\\)，\\(B\\) 为三阶非零矩阵，且 \\(AB=0\\)，则 \\(t=\\)_____。",
    "options": null,
    "ans": "\\(-3\\)",
    "fb": "解析：\\(AB=0\\) 且 \\(B\\neq0\\)，说明 \\(B\\) 的列是 \\(Ax=0\\) 的非零解，故 \\(\\lvert A\\rvert=0\\)。计算 \\(\\lvert A\\rvert=\\begin{vmatrix}1&2&-2\\\\4&t&3\\\\3&-1&1\\end{vmatrix}=7t+21\\)，令其为0得 \\(t=-3\\)。故应填 \\(-3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-8",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 8,
    "stem": "齐次线性方程组 \\[\\begin{cases} \\lambda x_1 + x_2 + \\lambda^2 x_3 = 0, \\\\ x_1 + \\lambda x_2 + x_3 = 0, \\\\ x_1 + x_2 + \\lambda x_3 = 0 \\end{cases}\\] 的系数矩阵记为 \\(A\\)，若存在三阶矩阵 \\(B\\neq 0\\)，使得 \\(AB=0\\)，则_____。",
    "options": [
      [
        "A",
        "\\(\\lambda=-2\\) 且 \\(|B|=0\\)"
      ],
      [
        "B",
        "\\(\\lambda=-2\\) 且 \\(|B|\\neq 0\\)"
      ],
      [
        "C",
        "\\(\\lambda=1\\) 且 \\(|B|=0\\)"
      ],
      [
        "D",
        "\\(\\lambda=1\\) 且 \\(|B|\\neq 0\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：存在 \\(B\\neq0\\) 使 \\(AB=0\\) 说明 \\(Ax=0\\) 有非零解，故 \\(\\lvert A\\rvert=0\\)。计算 \\(\\lvert A\\rvert=\\begin{vmatrix}\\lambda&1&\\lambda^2\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=(\\lambda-1)^2\\)，故 \\(\\lambda=1\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-calc-5",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 5,
    "stem": "已知三阶矩阵 \\(A\\) 的第一行是 \\((a,b,c)\\)，\\(a,b,c\\) 不全为零，矩阵 \\(B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & k \\end{pmatrix}\\)（\\(k\\) 为常数），且 \\(AB=0\\)。求线性方程组 \\(Ax=0\\) 的通解。",
    "options": null,
    "ans": null,
    "fb": "由 \\(AB=0\\) 得 \\(r(A)+r(B)\\leq 3\\)，又 \\(a,b,c\\) 不全为零，故 \\(r(A)\\geq 1\\)。当 \\(k\\neq 9\\) 时 \\(r(B)=2\\)，于是 \\(r(A)=1\\)，\\((1,2,3)^T,(3,6,k)^T\\) 线性无关，为基础解系。当 \\(k=9\\) 时 \\(r(B)=1\\)，则 \\(r(A)=1\\) 或 \\(2\\)。若 \\(r(A)=2\\)，基础解系为 \\((1,2,3)^T\\)；若 \\(r(A)=1\\)，方程组等价于 \\(ax_1+bx_2+cx_3=0\\)，取基础解系 \\((-b,a,0)^T,(-c,0,a)^T\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-calc-6",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 6,
    "stem": "已知齐次线性方程组 (I) \\[\\begin{cases} a_{11}x_1+a_{12}x_2+\\cdots+a_{1,2n}x_{2n}=0, \\\\ a_{21}x_1+a_{22}x_2+\\cdots+a_{2,2n}x_{2n}=0, \\\\ \\cdots\\cdots \\\\ a_{n1}x_1+a_{n2}x_2+\\cdots+a_{n,2n}x_{2n}=0 \\end{cases}\\] 的一个基础解系为 \\((b_{11},b_{12},\\ldots,b_{1,2n})^T, (b_{21},b_{22},\\ldots,b_{2,2n})^T, \\ldots, (b_{n1},b_{n2},\\ldots,b_{n,2n})^T\\)。试写出齐次线性方程组 (II) \\[\\begin{cases} b_{11}y_1+b_{12}y_2+\\cdots+b_{1,2n}y_{2n}=0, \\\\ b_{21}y_1+b_{22}y_2+\\cdots+b_{2,2n}y_{2n}=0, \\\\ \\cdots\\cdots \\\\ b_{n1}y_1+b_{n2}y_2+\\cdots+b_{n,2n}y_{2n}=0 \\end{cases}\\] 的通解，并说明理由。",
    "options": null,
    "ans": null,
    "fb": "设 (I)、(II) 的系数矩阵分别为 \\(A,B\\)。由 (I) 的基础解系知 \\(AB^T=0\\)，于是 \\(BA^T=(AB^T)^T=0\\)，即 \\(A\\) 的 \\(n\\) 个行向量的转置是 (II) 的 \\(n\\) 个解。又 \\(r(B)=n\\)，故 (II) 的解空间维数为 \\(2n-n=n\\)，而 \\(A\\) 的 \\(n\\) 个行向量线性无关，所以它们构成 (II) 的一个基础解系。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-9",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 9,
    "stem": "设 \\(A\\) 是 \\(m\\times n\\) 矩阵，非齐次线性方程组 \\(Ax=b\\) 有解的充分条件是_____。",
    "options": [
      [
        "A",
        "\\(r(A)=m\\)"
      ],
      [
        "B",
        "\\(A\\) 的行向量组线性相关"
      ],
      [
        "C",
        "\\(r(A)=n\\)"
      ],
      [
        "D",
        "\\(A\\) 的列向量组线性相关"
      ]
    ],
    "ans": "A",
    "fb": "解析：非齐次线性方程组 \\(Ax=b\\) 有解的充分条件是 \\(b\\) 可由 \\(A\\) 的列向量线性表示，等价于系数矩阵的秩等于增广矩阵的秩，即 \\(r(A)=r(A,b)\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-10",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 10,
    "stem": "非齐次线性方程组 \\(Ax=b\\) 的系数矩阵是 \\(4\\times 5\\) 矩阵，且 \\(A\\) 的行向量组线性无关，则错误命题是_____。",
    "options": [
      [
        "A",
        "齐次线性方程组 \\(A^Tx=0\\) 只有零解"
      ],
      [
        "B",
        "齐次线性方程组 \\(A^TAx=0\\) 必有非零解"
      ],
      [
        "C",
        "任意列向量 \\(b\\)，方程组 \\(Ax=b\\) 必有无穷多解"
      ],
      [
        "D",
        "任意列向量 \\(b\\)，方程组 \\(A^Tx=b\\) 必有唯一解"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(A\\) 为 \\(4\\times5\\) 矩阵且行向量组线性无关，故 \\(r(A)=4\\)。增广矩阵 \\((A,b)\\) 也是4行，因此 \\(r(A,b)\\le4\\)；又 \\(r(A)\\le r(A,b)\\)，故 \\(r(A)=r(A,b)=4\\)，方程组一定有解，且因未知数个数 \\(5>4\\) 必有无穷多解。据此可判断错误命题。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-11",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 11,
    "stem": "设 \\(A\\) 是 \\(m\\times n\\) 矩阵，\\(Ax=0\\) 是非齐次线性方程组 \\(Ax=b\\) 所对应的齐次线性方程组，则下列结论正确的是_____。",
    "options": [
      [
        "A",
        "若 \\(Ax=0\\) 仅有零解，则 \\(Ax=b\\) 有唯一解"
      ],
      [
        "B",
        "若 \\(Ax=0\\) 有非零解，则 \\(Ax=b\\) 有无穷多解"
      ],
      [
        "C",
        "若 \\(Ax=b\\) 有无穷多解，则 \\(Ax=0\\) 有非零解"
      ],
      [
        "D",
        "若 \\(Ax=b\\) 有无穷多解，则 \\(Ax=0\\) 只有零解"
      ]
    ],
    "ans": "C",
    "fb": "解析：设 \\(Ax=0\\) 是 \\(Ax=b\\) 对应的齐次方程组。若 \\(\\eta_1,\\eta_2\\) 是 \\(Ax=b\\) 的解，则 \\(\\eta_1-\\eta_2\\) 是 \\(Ax=0\\) 的解；\\(Ax=0\\) 的解空间维数为 \\(n-r(A)\\)。正确结论如“\\(Ax=b\\) 的任意两个解之差是 \\(Ax=0\\) 的解”。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-12",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 12,
    "stem": "设线性方程组 \\(A_{m\\times n}x=b\\)，则正确的是_____。",
    "options": [
      [
        "A",
        "若 \\(Ax=0\\) 只有零解，则 \\(Ax=b\\) 有唯一解"
      ],
      [
        "B",
        "若 \\(Ax=0\\) 有非零解，则 \\(Ax=b\\) 有无穷多解"
      ],
      [
        "C",
        "若 \\(Ax=b\\) 有两个不同的解，则 \\(Ax=0\\) 有无穷多解"
      ],
      [
        "D",
        "\\(Ax=b\\) 有唯一解的充分必要条件是 \\(r(A)=n\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：对线性方程组 \\(A_{m\\times n}x=b\\)，基本结论为：有解当且仅当 \\(r(A)=r(A,b)\\)；若 \\(r(A)=r(A,b)=n\\) 则有唯一解，若小于 \\(n\\) 则有无穷多解；若 \\(r(A)\\neq r(A,b)\\) 则无解。据此判断正确项。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-13",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 13,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶矩阵，\\(\\alpha\\) 是 \\(n\\) 维列向量，若 \\(r\\begin{pmatrix} A & \\alpha \\\\ \\alpha^T & 0 \\end{pmatrix} = r(A)\\)，则线性方程组_____。",
    "options": [
      [
        "A",
        "\\(Ax=\\alpha\\) 必有无穷多解"
      ],
      [
        "B",
        "\\(Ax=\\alpha\\) 必有唯一解"
      ],
      [
        "C",
        "\\(\\begin{pmatrix} A & \\alpha \\\\ \\alpha^T & 0 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=0\\) 仅有零解"
      ],
      [
        "D",
        "\\(\\begin{pmatrix} A & \\alpha \\\\ \\alpha^T & 0 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=0\\) 必有非零解"
      ]
    ],
    "ans": "D",
    "fb": "解析：条件 \\(r\\begin{pmatrix}A&\\alpha\\\\\\alpha^T&0\\end{pmatrix}=r(A)\\) 表明将 \\(\\alpha\\)（作为列）与 \\(\\alpha^T\\)（作为行）加入 \\(A\\) 后秩不变，说明 \\(\\alpha\\) 可由 \\(A\\) 的列线性表示，即 \\(Ax=\\alpha\\) 有解。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-14",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 14,
    "stem": "非齐次线性方程组 \\(Ax=b\\) 中未知量个数为 \\(n\\)，方程个数为 \\(m\\)，系数矩阵 \\(A\\) 的秩为 \\(r\\)，则_____。",
    "options": [
      [
        "A",
        "\\(r=m\\) 时，方程组 \\(Ax=b\\) 有解"
      ],
      [
        "B",
        "\\(r=n\\) 时，方程组 \\(Ax=b\\) 有唯一解"
      ],
      [
        "C",
        "\\(m=n\\) 时，方程组 \\(Ax=b\\) 有唯一解"
      ],
      [
        "D",
        "\\(r<n\\) 时，方程组 \\(Ax=b\\) 有无穷多解"
      ]
    ],
    "ans": "A",
    "fb": "解析：非齐次线性方程组 \\(Ax=b\\) 中，未知数个数为 \\(n\\)，方程个数为 \\(m\\)，\\(r(A)=r\\)。基本结论：若 \\(r=n\\)，则当 \\(r(A)=r(A,b)\\) 时有唯一解，否则无解；若 \\(r<n\\)，则当 \\(r(A)=r(A,b)\\) 时有无穷多解。正确命题为“若 \\(r=n\\) 且 \\(r(A)=r(A,b)\\)，则有唯一解”。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-15",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 15,
    "stem": "已知 \\(A_{m\\times n}x=b\\) 有无穷多解，\\(r(A)=r<n\\)，则该方程组线性无关解向量的个数最多应有______。",
    "options": [
      [
        "A",
        "\\(n-r\\) 个"
      ],
      [
        "B",
        "\\(r\\) 个"
      ],
      [
        "C",
        "\\(n-r+1\\) 个"
      ],
      [
        "D",
        "\\(r+1\\) 个"
      ]
    ],
    "ans": "C",
    "fb": "解析：因 \\(r(A)=r<n\\)，导出组 \\(Ax=0\\) 的基础解系含 \\(n-r\\) 个向量。非齐次方程组的线性无关解向量最多有 \\(n-r+1\\) 个（取一个特解再加基础解系的 \\(n-r\\) 个向量）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-11",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 11,
    "stem": "已知方程组 \\(\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 3 & a+2 \\\\ 1 & a & -2 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 0 \\end{pmatrix}\\) 无解，则 \\(a=\\)______。",
    "options": null,
    "ans": "\\(-1\\)",
    "fb": "解析：对增广矩阵作行变换，方程组无解当且仅当 \\(r(A)<r(A,b)\\)。计算得当 \\(a=-1\\) 时系数矩阵秩为2而增广矩阵秩为3，故无解。故应填 \\(-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-12",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 12,
    "stem": "设方程组 \\(\\begin{pmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\\\ -2 \\end{pmatrix}\\) 有无穷多个解，则 \\(a=\\)______。",
    "options": null,
    "ans": "\\(-2\\)",
    "fb": "解析：系数矩阵 \\(A=\\begin{pmatrix}a&1&1\\\\1&a&1\\\\1&1&a\\end{pmatrix}\\)，其行列式 \\(\\lvert A\\rvert=(a+2)(a-1)^2\\)。方程组有无穷多解需 \\(r(A)=r(A,b)<3\\)。代入验证 \\(a=-2\\) 时秩为2且增广矩阵秩也为2，满足条件。故应填 \\(-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-13",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 13,
    "stem": "设 \\(A=\\begin{pmatrix} 1 & 1 & 1 & \\cdots & 1 \\\\ a_1 & a_2 & a_3 & \\cdots & a_n \\\\ a_1^2 & a_2^2 & a_3^2 & \\cdots & a_n^2 \\\\\\vdots & \\vdots & \\vdots & \\vdots & \\vdots\\\\ a_1^{n-1} & a_2^{n-1} & a_3^{n-1} & \\cdots & a_n^{n-1} \\end{pmatrix}\\)，\\(x=\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ \\vdots \\\\ x_n \\end{pmatrix}\\)，\\(b=\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{pmatrix}\\)，其中 \\(a_i\\ne a_j\\)（\\(i\\ne j,i,j=1,2,\\cdots,n\\)），则线性方程组 \\(A^T x=b\\) 的解是______。",
    "options": null,
    "ans": "\\((1,0,\\cdots,0)^T\\)",
    "fb": "解析：\\(A\\) 是范德蒙德型矩阵的转置，因 \\(a_i\\neq a_j\\)，故 \\(\\lvert A\\rvert\\neq0\\)，\\(A\\) 可逆。方程 \\(A^T x=b\\) 即 \\(x=(A^T)^{-1}b\\)。由 \\(A^T\\) 各行结构，多项式 \\(p(t)=\\sum_j x_j t^{j-1}\\) 需在 \\(t=a_i\\) 处取值均为1，唯一满足条件的多项式为常数1，对应 \\(x_1=1\\)，其余为0。故应填 \\((1,0,\\cdots,0)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-14",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 14,
    "stem": "设 \\(A=(a_{ij})_{3\\times 3}\\) 是实正交矩阵，且 \\(a_{11}=1\\)，\\(b=(1,0,0)^T\\)，则线性方程组 \\(Ax=b\\) 的解是______。",
    "options": null,
    "ans": "\\((1,0,0)^T\\)",
    "fb": "解析：\\(A\\) 是实正交矩阵，故 \\(A^{-1}=A^T\\)。方程 \\(Ax=b\\) 的解为 \\(x=A^T b\\)。由 \\(a_{11}=1\\) 且第一行与自身内积为1，知第一行其余元素为0，即 \\(A\\) 的第一行为 \\((1,0,0)\\)，从而 \\(A^T b=(1,0,0)^T\\)。故应填 \\((1,0,0)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-16",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 16,
    "stem": "已知 \\(\\beta_1,\\beta_2\\) 是非齐次线性方程组 \\(Ax=b\\) 的两个不同的解，\\(\\alpha_1,\\alpha_2\\) 是对应齐次线性方程组 \\(Ax=0\\) 的基础解系，\\(k_1,k_2\\) 为任意常数，则方程组 \\(Ax=b\\) 的通解是______。",
    "options": [
      [
        "A",
        "\\(k_1\\alpha_1+k_2(\\alpha_1+\\alpha_2)+\\dfrac{\\beta_1-\\beta_2}{2}\\)"
      ],
      [
        "B",
        "\\(k_1\\alpha_1+k_2(\\alpha_1-\\alpha_2)+\\dfrac{\\beta_1+\\beta_2}{2}\\)"
      ],
      [
        "C",
        "\\(k_1\\alpha_1+k_2(\\beta_1+\\beta_2)+\\dfrac{\\beta_1-\\beta_2}{2}\\)"
      ],
      [
        "D",
        "\\(k_1\\alpha_1+k_2(\\beta_1-\\beta_2)+\\dfrac{\\beta_1+\\beta_2}{2}\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：非齐次方程组的通解为“一个特解 + 对应齐次通解”。取特解可取 \\(\\frac{\\beta_1+\\beta_2}{2}\\)（两解的平均值仍是解），齐次通解为 \\(k_1\\alpha_1+k_2\\alpha_2\\)。故通解形如 \\(\\frac{\\beta_1+\\beta_2}{2}+k_1\\alpha_1+k_2\\alpha_2\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-17",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 17,
    "stem": "设 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 是四元非齐次线性方程组 \\(Ax=b\\) 的三个解向量，且 \\(A\\) 的秩 \\(r(A)=3\\)，\\(\\alpha_1=(1,2,3,4)^T\\)，\\(\\alpha_2+\\alpha_3=(0,1,2,3)^T\\)，\\(c\\) 表示任意常数，则线性方程组 \\(Ax=b\\) 的通解 \\(x=\\)______。",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\\\4\\end{pmatrix}+c\\begin{pmatrix}1\\\\1\\\\1\\\\1\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\\\4\\end{pmatrix}+c\\begin{pmatrix}0\\\\1\\\\2\\\\3\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\\\4\\end{pmatrix}+c\\begin{pmatrix}2\\\\3\\\\4\\\\5\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\\\4\\end{pmatrix}+c\\begin{pmatrix}3\\\\4\\\\5\\\\6\\end{pmatrix}\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(r(A)=3\\)，未知数 \\(n=4\\)，导出组基础解系含 \\(4-3=1\\) 个解向量。以 \\(\\alpha_1=(1,2,3,4)^T\\) 为特解；因 \\(\\alpha_2,\\alpha_3\\) 也是解，\\(\\alpha_2+\\alpha_3-2\\alpha_1\\) 是对应齐次解，得方向 \\((2,3,4,5)^T\\)。故通解为 \\(x=(1,2,3,4)^T+k(2,3,4,5)^T\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-15",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 15,
    "stem": "设 \\(x_1,x_2,x_3\\) 是四元非齐次线性方程组 \\(Ax=b\\) 的三个解向量，且 \\(r(A)=3\\)。若 \\(x_1=(1,1,1,1)^T\\)，\\(x_2+x_3=(2,3,4,5)^T\\)，则方程组通解为______。",
    "options": null,
    "ans": "\\((1,1,1,1)^T+k(0,1,2,3)^T\\)，\\(k\\) 为任意常数",
    "fb": "解析：设 \\(x_1,x_2,x_3\\) 为四元非齐次方程组的解，\\(r(A)=3\\)，导出组基础解系含 \\(4-3=1\\) 个解向量。以 \\(x_1=(1,1,1,1)^T\\) 为特解；由 \\(x_2,x_3\\) 是解知 \\(x_2+x_3-2x_1\\) 是齐次解，而 \\(x_2+x_3=(2,3,4,5)^T\\)，故齐次解方向为 \\((2,3,4,5)^T-2(1,1,1,1)^T=(0,1,2,3)^T\\)。通解为 \\(x=(1,1,1,1)^T+k(0,1,2,3)^T\\)。故应填 \\((1,1,1,1)^T+k(0,1,2,3)^T\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-16",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 16,
    "stem": "已知 \\(\\xi_1=(-9,1,2,11)^T\\)，\\(\\xi_2=(1,-5,13,0)^T\\)，\\(\\xi_3=(-7,-9,24,11)^T\\) 是方程组 \\(\\begin{cases} a_1 x_1+7x_2+a_3x_3+x_4=d_1, \\\\ 3x_1+b_2x_2+2x_3+2x_4=d_2, \\\\ 9x_1+4x_2+x_3+7x_4=2 \\end{cases}\\) 的解，则方程组的通解是______。",
    "options": null,
    "ans": "\\(\\begin{pmatrix}-9\\\\1\\\\2\\\\11\\end{pmatrix}+k_1\\begin{pmatrix}-10\\\\6\\\\-11\\\\11\\end{pmatrix}+k_2\\begin{pmatrix}-2\\\\10\\\\-22\\\\0\\end{pmatrix}\\)，\\(k_1,k_2\\) 为任意常数",
    "fb": "解析：\\(\\xi_1,\\xi_2,\\xi_3\\) 均为方程组的解，差向量 \\(\\xi_1-\\xi_2=(-10,6,-11,11)^T\\)、\\(\\xi_1-\\xi_3=(-2,10,-22,0)^T\\) 是对应齐次方程组 \\(Ax=0\\) 的解。由解的维数知基础解系恰含2个向量，可取上述二者。故通解为 \\(\\xi_1+k_1(\\xi_1-\\xi_2)+k_2(\\xi_1-\\xi_3)\\)。故应填 \\(\\begin{pmatrix}-9\\\\1\\\\2\\\\11\\end{pmatrix}+k_1\\begin{pmatrix}-10\\\\6\\\\-11\\\\11\\end{pmatrix}+k_2\\begin{pmatrix}-2\\\\10\\\\-22\\\\0\\end{pmatrix}\\)（\\(k_1,k_2\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-calc-7",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 7,
    "stem": "求下列线性方程组的通解：\\(\\begin{cases} x_1+5x_2-x_3-x_4=-1, \\\\ x_1-2x_2+x_3+3x_4=3, \\\\ 3x_1+8x_2-x_3+x_4=1, \\\\ x_1-9x_2+3x_3+7x_4=7. \\end{cases}\\)",
    "options": null,
    "ans": null,
    "fb": "对增广矩阵作初等行变换：\\(\\overline{A}=\\begin{pmatrix}1&5&-1&-1&-1\\\\1&-2&1&3&3\\\\3&8&-1&1&1\\\\1&-9&3&7&7\\end{pmatrix}\\rightarrow\\begin{pmatrix}1&5&-1&-1&-1\\\\0&-7&2&4&4\\\\0&0&0&0&0\\\\0&0&0&0&0\\end{pmatrix}\\)。同解方程组为 \\(\\begin{cases}x_1+5x_2-x_3-x_4=-1,\\\\-7x_2+2x_3+4x_4=4.\\end{cases}\\) 导出组同解方程组为 \\(\\begin{cases}x_1+5x_2-x_3-x_4=0,\\\\-7x_2+2x_3+4x_4=0.\\end{cases}\\) 取 \\(x_3,x_4\\) 为自由未知量，分别取 \\((1,0)^T,(0,1)^T\\)，得基础解系 \\(\\xi_1=(-\\frac{3}{7},\\frac{2}{7},1,0)^T\\)，\\(\\xi_2=(-\\frac{13}{7},\\frac{4}{7},0,1)^T\\)。取自由未知量为 \\((0,0)^T\\) 代入原方程组得特解 \\(\\eta=(\\frac{13}{7},-\\frac{4}{7},0,0)^T\\)。所以通解为 \\(\\eta+k_1\\xi_1+k_2\\xi_2\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-calc-8",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 8,
    "stem": "对于线性方程组 \\(\\begin{cases} \\lambda x_1+x_2+x_3=\\lambda-3, \\\\ x_1+\\lambda x_2+x_3=-2, \\\\ x_1+x_2+\\lambda x_3=-2, \\end{cases}\\) 讨论 \\(\\lambda\\) 取何值时，方程组无解，有唯一解和有无穷多解。在方程组有无穷多解时，试用其导出组的基础解系表示通解。",
    "options": null,
    "ans": null,
    "fb": "对增广矩阵施以初等行变换：\\(\\overline{A}=\\begin{pmatrix}\\lambda&1&1&\\lambda-3\\\\1&\\lambda&1&-2\\\\1&1&\\lambda&-2\\end{pmatrix}\\rightarrow\\begin{pmatrix}1&1&\\lambda&-2\\\\0&\\lambda-1&1-\\lambda&0\\\\0&0&-(\\lambda+2)(\\lambda-1)&3(\\lambda-1)\\end{pmatrix}\\)。(1) 当 \\(\\lambda\\ne -2\\) 且 \\(\\lambda\\ne 1\\) 时，\\(r(A)=r(\\overline{A})=3\\)，方程组有唯一解；(2) 当 \\(\\lambda=-2\\) 时，\\(r(A)=2,r(\\overline{A})=3\\)，方程组无解；(3) 当 \\(\\lambda=1\\) 时，\\(r(A)=r(\\overline{A})=1<3\\)，方程组有无穷多解。此时同解方程组为 \\(x_1=-2-x_2-x_3\\)，特解 \\(\\eta=(-2,0,0)^T\\)，导出组基础解系 \\(\\xi_1=(-1,1,0)^T,\\xi_2=(-1,0,1)^T\\)，通解为 \\(\\eta+c_1\\xi_1+c_2\\xi_2\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-calc-9",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 9,
    "stem": "已知线性方程组 \\(\\begin{cases} x_1+x_2-2x_3+3x_4=0, \\\\ 2x_1+x_2-6x_3+4x_4=-1, \\\\ 3x_1+2x_2+px_3+7x_4=-1, \\\\ x_1-x_2-6x_3-x_4=t, \\end{cases}\\) 讨论参数 \\(p,t\\) 取何值时，方程组有解、无解；当有解时，试用其导出组的基础解系表示通解。",
    "options": null,
    "ans": null,
    "fb": "对方程组的增广矩阵施以初等行变换：\\(\\overline{A}=\\begin{pmatrix}1&1&-2&3&0\\\\2&1&-6&4&-1\\\\3&2&p&7&-1\\\\1&-1&-6&-1&t\\end{pmatrix}\\rightarrow\\begin{pmatrix}1&0&-4&1&-1\\\\0&1&2&2&1\\\\0&0&p+8&0&0\\\\0&0&0&0&t+2\\end{pmatrix}\\)。(1) 当 \\(t\\ne -2\\) 时，\\(r(A)\\ne r(\\overline{A})\\)，方程组无解；(2) 当 \\(t=-2\\) 时，\\(r(A)=r(\\overline{A})\\)，方程组有解；(a) 若 \\(p=-8\\)，基础解系含 2 个向量，通解为 \\(\\begin{pmatrix}-1\\\\1\\\\0\\\\0\\end{pmatrix}+c_1\\begin{pmatrix}4\\\\-2\\\\1\\\\0\\end{pmatrix}+c_2\\begin{pmatrix}-1\\\\-2\\\\0\\\\1\\end{pmatrix}\\)；(b) 若 \\(p\\ne -8\\)，基础解系含 1 个向量，通解为 \\(\\begin{pmatrix}-1\\\\1\\\\0\\\\0\\end{pmatrix}+c\\begin{pmatrix}-1\\\\-2\\\\0\\\\1\\end{pmatrix}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-calc-10",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 10,
    "stem": "\\(\\lambda\\) 取何值时，方程组 \\(\\begin{cases} 2x_1+\\lambda x_2-x_3=1, \\\\ \\lambda x_1-x_2+x_3=2, \\\\ 4x_1+5x_2-5x_3=-1 \\end{cases}\\) 无解，有唯一解或有无穷多解？并在有无穷多解时写出方程组的通解。",
    "options": null,
    "ans": null,
    "fb": "原方程组的系数行列式 \\(\\begin{vmatrix}2&\\lambda&-1\\\\\\lambda&-1&1\\\\4&5&-5\\end{vmatrix}=5\\lambda^2-\\lambda-4=(\\lambda-1)(5\\lambda+4)\\)。故当 \\(\\lambda\\ne 1\\) 且 \\(\\lambda\\ne -\\frac{4}{5}\\) 时，方程组有唯一解。当 \\(\\lambda=1\\) 时，对增广矩阵作初等行变换得 \\(\\begin{pmatrix}1&-1&1&2\\\\0&1&-1&-1\\\\0&0&0&0\\end{pmatrix}\\)，方程组有无穷多解，通解为 \\(\\begin{cases}x_1=1,\\\\x_2=-1+k,\\\\x_3=k,\\end{cases}\\) 即 \\((x_1,x_2,x_3)^T=(1,-1,0)^T+k(0,1,1)^T\\)，\\(k\\) 为任意实数。当 \\(\\lambda=-\\frac{4}{5}\\) 时，增广矩阵化为 \\(\\begin{pmatrix}10&-4&-5&5\\\\4&5&-5&-10\\\\0&0&0&9\\end{pmatrix}\\)，方程组无解。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-calc-11",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 11,
    "stem": "设线性方程组 \\(\\begin{cases} x_1+\\lambda x_2+\\mu x_3+x_4=0, \\\\ 2x_1+x_2+x_3+2x_4=0, \\\\ 3x_1+(2+\\lambda)x_2+(4+\\mu)x_3+4x_4=1, \\end{cases}\\) 已知 \\((1,-1,1,-1)^T\\) 是该方程组的一个解，试求：(1) 方程组的全部解，并用对应的齐次线性方程组的基础解系表示全部解；(2) 该方程组满足 \\(x_2=x_3\\) 的全部解。",
    "options": null,
    "ans": null,
    "fb": "将 \\((1,-1,1,-1)^T\\) 代入方程组，得 \\(\\lambda=\\mu\\)。对增广矩阵施以初等行变换：\\(\\overline{A}=\\begin{pmatrix}1&\\lambda&\\lambda&1&0\\\\2&1&1&2&0\\\\3&2+\\lambda&4+\\lambda&4&1\\end{pmatrix}\\rightarrow\\begin{pmatrix}1&0&-2\\lambda&1-\\lambda&-\\lambda\\\\0&1&3&1&1\\\\0&0&2(2\\lambda-1)&2\\lambda-1&2\\lambda-1\\end{pmatrix}\\)。(1) 当 \\(\\lambda\\ne \\frac{1}{2}\\) 时，\\(r(A)=r(\\overline{A})=3<4\\)，全部解为 \\((0,-\\frac{1}{2},\\frac{1}{2},0)^T+k(-2,1,-1,2)^T\\)。当 \\(\\lambda=\\frac{1}{2}\\) 时，\\(r(A)=r(\\overline{A})=2<4\\)，全部解为 \\((-\\frac{1}{2},1,0,0)^T+k_1(1,-3,1,0)^T+k_2(-1,-2,0,2)^T\\)。(2) 当 \\(\\lambda\\ne \\frac{1}{2}\\) 时，由 \\(x_2=x_3\\) 得 \\(-\\frac{1}{2}+k=\\frac{1}{2}-k\\)，解得 \\(k=\\frac{1}{2}\\)，解为 \\((-1,0,0,1)^T\\)。当 \\(\\lambda=\\frac{1}{2}\\) 时，由 \\(x_2=x_3\\) 得 \\(1-3k_1-2k_2=k_1\\)，解得 \\(k_1=\\frac{1}{4}-\\frac{1}{2}k_2\\)，全部解为 \\((-\\frac{1}{4},\\frac{1}{4},\\frac{1}{4},0)^T+k_2(-\\frac{3}{2},-\\frac{1}{2},-\\frac{1}{2},2)^T\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-calc-12",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 12,
    "stem": "已知非齐次线性方程组 \\(\\begin{cases} x_1+x_2+x_3+x_4=-1, \\\\ 4x_1+3x_2+5x_3-x_4=-1, \\\\ ax_1+x_2+3x_3+bx_4=1 \\end{cases}\\) 有 3 个线性无关的解。(1) 证明方程组系数矩阵 \\(A\\) 的秩 \\(r(A)=2\\)；(2) 求 \\(a,b\\) 的值及方程组的通解。",
    "options": null,
    "ans": null,
    "fb": "(1) 设 \\(\\xi_1,\\xi_2,\\xi_3\\) 是该线性方程组的 3 个线性无关的解，则 \\(\\xi_1-\\xi_2,\\xi_1-\\xi_3\\) 是对应的齐次线性方程组 \\(Ax=0\\) 的两个线性无关的解，因而 \\(4-r(A)\\ge 2\\)，即 \\(r(A)\\le 2\\)。又 \\(A\\) 有一个二阶子式 \\(\\begin{vmatrix}1&1\\\\4&3\\end{vmatrix}\\ne 0\\)，于是 \\(r(A)\\ge 2\\)。因此 \\(r(A)=2\\)。(2) 对增广矩阵施以初等行变换：\\(\\overline{A}=\\begin{pmatrix}1&1&1&1&-1\\\\4&3&5&-1&-1\\\\a&1&3&b&1\\end{pmatrix}\\rightarrow\\begin{pmatrix}1&0&2&-4&2\\\\0&1&-1&5&-3\\\\0&0&4-2a&4a+b-5&4-2a\\end{pmatrix}\\)。因 \\(r(A)=2\\)，故 \\(4-2a=0,4a+b-5=0\\)，即 \\(a=2,b=-3\\)。此时增广矩阵化为 \\(\\begin{pmatrix}1&0&2&-4&2\\\\0&1&-1&5&-3\\\\0&0&0&0&0\\end{pmatrix}\\)，可得方程组通解为 \\((2,-3,0,0)^T+k_1(-2,1,1,0)^T+k_2(4,-5,0,1)^T\\)，\\(k_1,k_2\\) 为任意常数。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-17",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 17,
    "stem": "如果五元线性方程组 \\(Ax=0\\) 的同解方程组是 \\(\\begin{cases} x_1=-3x_2, \\\\ x_2=0, \\end{cases}\\) 则有 \\(r(A)=\\)______，自由未知量的个数为______个，\\(Ax=0\\) 的基础解系有______个解向量。",
    "options": null,
    "ans": "\\(r(A)=2\\)，自由未知量的个数为 3 个，基础解系有 3 个解向量",
    "fb": "解析：同解方程组为 \\(x_1=-3x_2,\\ x_2=0\\)，从而 \\(x_1=0\\) 且 \\(x_2=0\\)，仅 \\(x_3,x_4,x_5\\) 自由，故 \\(r(A)=2\\)（两个独立方程），自由未知量个数为3，基础解系含3个解向量。故应填 \\(r(A)=2\\)，自由未知量的个数为 3 个，基础解系有 3 个解向量。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-18",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 18,
    "stem": "设 \\( A \\) 为 \\( m \\times n \\) 矩阵，则与 \\( Ax=b \\) 同解的方程组是______。",
    "options": [
      [
        "A",
        "\\( m=n \\) 时，\\( A^T x=b \\)"
      ],
      [
        "B",
        "\\( QAx=Qb \\) 其中 \\( Q \\) 为可逆矩阵"
      ],
      [
        "C",
        "\\( r(A)=r \\)，由 \\( Ax=b \\) 前 \\( r \\) 个方程组成的方程组"
      ],
      [
        "D",
        "\\( r(A)=r(C) \\)，\\( C_{m \\times n}x=b \\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：与 \\(Ax=b\\) 同解的方程组可由对增广矩阵作初等行变换（或左乘可逆矩阵）得到，此类变换不改变解集。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-19",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 19,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶实矩阵，\\( A^T \\) 是 \\( A \\) 的转置矩阵，则对于线性方程组 \\((\\mathrm{I}):Ax=0\\) 和 \\((\\mathrm{II}):A^TAx=0\\)，必有______。",
    "options": [
      [
        "A",
        "(II) 的解是 (I) 的解，(I) 的解也是 (II) 的解"
      ],
      [
        "B",
        "(II) 的解是 (I) 的解，但 (I) 的解不是 (II) 的解"
      ],
      [
        "C",
        "(I) 的解不是 (II) 的解，(II) 的解也不是 (I) 的解"
      ],
      [
        "D",
        "(I) 的解是 (II) 的解，但 (II) 的解不是 (I) 的解"
      ]
    ],
    "ans": "A",
    "fb": "解析：考虑 \\(A^TAx=0\\)，两边左乘 \\(x^T\\) 得 \\(x^TA^TAx=(Ax)^T(Ax)=0\\)，故 \\(Ax=0\\)，从而两方程组同解。即 \\((\\mathrm{I})\\) 与 \\((\\mathrm{II})\\) 同解。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-20",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 20,
    "stem": "设有齐次线性方程组 \\( Ax=0 \\) 和 \\( Bx=0 \\)，其中 \\( A,B \\) 均为 \\( m \\times n \\) 矩阵，现有 4 个命题： ①若 \\( Ax=0 \\) 的解均是 \\( Bx=0 \\) 的解，则 \\( \\mathrm{秩}(A) \\geqslant \\mathrm{秩}(B) \\)； ②若 \\( \\mathrm{秩}(A) \\geqslant \\mathrm{秩}(B) \\)，则 \\( Ax=0 \\) 的解均是 \\( Bx=0 \\) 的解； ③若 \\( Ax=0 \\) 与 \\( Bx=0 \\) 同解，则 \\( \\mathrm{秩}(A)=\\mathrm{秩}(B) \\)； ④若 \\( \\mathrm{秩}(A)=\\mathrm{秩}(B) \\)，则 \\( Ax=0 \\) 与 \\( Bx=0 \\) 同解。\n以上命题中正确的是______。",
    "options": [
      [
        "A",
        "①②"
      ],
      [
        "B",
        "①③"
      ],
      [
        "C",
        "②④"
      ],
      [
        "D",
        "③④"
      ]
    ],
    "ans": "B",
    "fb": "解析：① 若 \\(Ax=0\\) 的解均为 \\(Bx=0\\) 的解，则 \\(Ax=0\\) 解空间包含于 \\(Bx=0\\) 解空间，维数上 \\(n-r(A)\\le n-r(B)\\)，故 \\(r(A)\\ge r(B)\\)，①正确。③ 同解则解空间相同，秩相等，③正确。②④未必成立。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-18",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 18,
    "stem": "已知齐次线性方程组 \\[ \\begin{aligned} &\\mathrm{(I)}\\begin{cases} x_1+2x_2+3x_3=0, \\\\ 2x_1+3x_2+5x_3=0, \\\\ x_1+x_2+ax_3=0 \\end{cases} \\\\ &\\mathrm{(II)}\\begin{cases} x_1+bx_2+cx_3=0, \\\\ 2x_1+b^2x_2+(c+1)x_3=0 \\end{cases} \\end{aligned} \\] 同解，求 \\( a,b,c \\) 的值。",
    "options": null,
    "ans": "\\( a=2,\\ b=1,\\ c=2 \\)",
    "fb": "解析：两齐次方程组同解则秩相同且解空间一致。先求 (I) 的基础解系：由前两方程得 \\(x_1=-x_3,\\ x_2=-x_3\\)，代入第三式得 \\((a-2)x_3=0\\) 对任意 \\(x_3\\) 成立需 \\(a=2\\)。此时 (I) 通解为 \\(k(-1,-1,1)^T\\)。将其代入 (II)：第一式得 \\(c=b+1\\)，第二式得 \\(c=b^2+1\\)，联立得 \\(b=1,\\ c=2\\)（\\(b=0\\) 时解空间不符）。故应填 \\(a=2,\\ b=1,\\ c=2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-19",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 19,
    "stem": "设方程组 \\[ \\begin{aligned} &\\mathrm{(I)}\\begin{cases} x_1+2x_2-x_3+x_4=l, \\\\ 3x_1+mx_2+3x_3+2x_4=-11, \\\\ 2x_1+2x_2+nx_3+x_4=-4 \\end{cases} \\\\ &\\mathrm{(II)}\\begin{cases} x_1+3x_3=-2, \\\\ x_2-2x_3=5, \\\\ x_4=-10 \\end{cases} \\end{aligned} \\] 是同解方程组，试确定方程组 (I) 中的参数 \\( l,m,n \\) 的值。",
    "options": null,
    "ans": "\\( l=-2,\\ m=3,\\ n=2 \\)",
    "fb": "解析：(II) 给出解的结构：由 \\(x_3=-2,\\ x_2-2x_3=5\\) 得 \\(x_2=1\\)，\\(x_4=-10\\)，代入第一式 \\(x_1+3(-2)=-2\\) 得 \\(x_1=4\\)。将解 \\((4,1,-2,-10)^T\\) 代入 (I)：第一式得 \\(l=-2\\)；第二式得 \\(m=3\\)；第三式得 \\(n=2\\)。故应填 \\(l=-2,\\ m=3,\\ n=2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-2",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 2,
    "stem": "设 \\( Ax=0 \\) 与 \\( Bx=0 \\) 均为 \\( n \\) 元齐次线性方程组，\\( r(A)=r(B) \\) 且 \\( Ax=0 \\) 的解均为方程组 \\( Bx=0 \\) 的解，证明：方程组 \\( Ax=0 \\) 与方程组 \\( Bx=0 \\) 同解。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( r(A)=r(B) \\)，不妨设它们的秩都为 \\( r \\)，记 \\( Ax=0 \\) 与 \\( Bx=0 \\) 的基础解系分别为 \\((\\mathrm{I})\\,\\xi_1,\\xi_2,\\ldots,\\xi_{n-r}\\) 与 \\((\\mathrm{II})\\,\\eta_1,\\eta_2,\\ldots,\\eta_{n-r}\\)。又考察 \\((\\mathrm{III})\\,\\xi_1,\\xi_2,\\ldots,\\xi_{n-r},\\eta_1,\\eta_2,\\ldots,\\eta_{n-r}\\)。由已知 (I) 可由 (II) 线性表示，所以 \\( \\eta_1,\\eta_2,\\ldots,\\eta_{n-r} \\) 是 (III) 的一个极大线性无关组，但 \\( \\xi_1,\\xi_2,\\ldots,\\xi_{n-r} \\) 也线性无关，所以 \\( \\xi_1,\\xi_2,\\ldots,\\xi_{n-r} \\) 也是 (III) 的一个极大线性无关组，故 \\( \\eta_1,\\eta_2,\\ldots,\\eta_{n-r} \\) 可由 \\( \\xi_1,\\xi_2,\\ldots,\\xi_{n-r} \\) 线性表示，即 (II) 可由 (I) 线性表示，说明 \\( Bx=0 \\) 任一解也是 \\( Ax=0 \\) 的解，故方程组 \\( Ax=0 \\) 与 \\( Bx=0 \\) 是同解方程组。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-3",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 3,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵，则 \\( r(A^n)=r(A^{n+1}) \\)。",
    "options": null,
    "ans": null,
    "fb": "只需证 \\( A^nx=0 \\) 与 \\( A^{n+1}x=0 \\) 同解即可。设 \\( \\alpha \\) 是 \\( A^nx=0 \\) 的解，则 \\( A^n\\alpha=0 \\)，显然 \\( A^{n+1}\\alpha=0 \\)，即 \\( \\alpha \\) 也是 \\( A^{n+1}x=0 \\) 的解。反之，设 \\( \\beta \\) 是 \\( A^{n+1}x=0 \\) 的解，则 \\( A^{n+1}\\beta=0 \\)。假设 \\( A^n\\beta\\neq 0 \\)，下面证 \\( \\beta,A\\beta,\\ldots,A^n\\beta \\) 线性无关。设有常数 \\( k_0,k_1,\\ldots,k_n \\) 使得\\[k_0\\beta+k_1A\\beta+\\cdots+k_nA^n\\beta=0.\\]等式两边左乘 \\( A^n \\)，则有\\[k_0A^n\\beta+k_1A^{n+1}\\beta+\\cdots+k_nA^{2n}\\beta=0,\\]即 \\( k_0A^n\\beta=0 \\)。又 \\( A^n\\beta\\neq 0 \\)，所以 \\( k_0=0 \\)，同理可得 \\( k_1=\\cdots=k_n=0 \\)，所以 \\( \\beta,A\\beta,\\ldots,A^n\\beta \\) 线性无关。但 \\( \\beta,A\\beta,\\ldots,A^n\\beta \\) 是 \\( n+1 \\) 个 \\( n \\) 维向量，一定线性相关，矛盾。所以 \\( A^n\\beta=0 \\)，即 \\( \\beta \\) 也是 \\( A^nx=0 \\) 的解。综上，\\( A^nx=0 \\) 与 \\( A^{n+1}x=0 \\) 同解，所以 \\( r(A^n)=r(A^{n+1}) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-21",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 21,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵，齐次线性方程组 \\( Ax=0 \\) 有两个线性无关的解，\\( A^* \\) 是 \\( A \\) 的伴随矩阵，则有______。",
    "options": [
      [
        "A",
        "\\( A^*x=0 \\) 的解均为 \\( Ax=0 \\) 的解"
      ],
      [
        "B",
        "\\( Ax=0 \\) 的解均为 \\( A^*x=0 \\) 的解"
      ],
      [
        "C",
        "\\( Ax=0 \\) 与 \\( A^*x=0 \\) 无非零公共解"
      ],
      [
        "D",
        "\\( Ax=0 \\) 与 \\( A^*x=0 \\) 恰好有一个非零公共解"
      ]
    ],
    "ans": "B",
    "fb": "解析：因 \\(Ax=0\\) 有两个线性无关解，故 \\(n-r(A)\\ge2\\)，即 \\(r(A)\\le n-2\\)，从而 \\(r(A^*)<1\\)，必有 \\(A^*=O\\)。于是 \\(A^*x=0\\) 以任意 \\(n\\) 维向量为解（至少有非零解）。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-13",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 13,
    "stem": "设有方程组\\[\\begin{aligned}(&\\mathrm{I})\\begin{cases} x_1+x_4=0, \\\\ x_2+x_3=0, \\end{cases}\\quad (&\\mathrm{II})\\begin{cases} x_1+2x_3=0, \\\\ 2x_2+x_4=0. \\end{cases}\\end{aligned}\\](1) 求方程组 (I) 与 (II) 的基础解系与通解； (2) 求方程组 (I) 与 (II) 的公共解。",
    "options": null,
    "ans": null,
    "fb": "(1) 将方程组 (I) 改写为 \\( \\begin{cases} x_1=-x_4, \\\\ x_2=-x_3, \\end{cases} \\) 令 \\( \\begin{bmatrix}x_3\\\\x_4\\end{bmatrix} \\) 取 \\( \\begin{bmatrix}1\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\1\\end{bmatrix} \\)，得 (I) 的基础解系 \\( \\alpha_1=(0,-1,1,0)^T,\\ \\alpha_2=(-1,0,0,1)^T \\)，故 (I) 的通解为 \\( k_1(0,-1,1,0)^T+k_2(-1,0,0,1)^T \\)（\\( k_1,k_2 \\) 为任意常数）。又将方程组 (II) 改写为 \\( \\begin{cases} x_1=-2x_3, \\\\ x_4=-2x_2, \\end{cases} \\) 令 \\( \\begin{bmatrix}x_2\\\\x_3\\end{bmatrix} \\) 取 \\( \\begin{bmatrix}1\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\1\\end{bmatrix} \\)，得 (II) 的基础解系 \\( \\beta_1=(0,1,0,-2)^T,\\ \\beta_2=(-2,0,1,0)^T \\)，故 (II) 的通解为 \\( k_1(0,1,0,-2)^T+k_2(-2,0,1,0)^T \\)（\\( k_1,k_2 \\) 为任意常数）。(2) 要使 (I) 与 (II) 有公共解，则联立方程组 \\( \\begin{cases}(\\mathrm{I})\\\\\\\\mathrm{II})\\end{cases} \\) 有解，其解即为 (I) 与 (II) 的公共解。联立起来，对系数矩阵 \\( A \\) 施行初等行变换：\\[A=\\begin{bmatrix}1&0&0&1\\\\0&1&1&0\\\\1&0&2&0\\\\0&2&0&1\\end{bmatrix}\\rightarrow\\begin{bmatrix}1&0&0&1\\\\0&1&0&\\frac12\\\\0&0&1&-\\frac12\\\\0&0&0&0\\end{bmatrix},\\]得 \\( \\begin{cases} x_1=-x_4, \\\\ x_2=-\\frac12x_4, \\\\ x_3=\\frac12x_4. \\end{cases} \\) 取 \\( x_4=2 \\)，得基础解系 \\( \\xi=(-2,-1,1,2)^T \\)，通解为 \\( k(-2,-1,1,2)^T \\)（\\( k \\) 为任意常数），故公共解为 \\( k(-2,-1,1,2)^T \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-20",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 20,
    "stem": "设四元方程组 (I) 为 \\( \\begin{cases} x_1+x_2=0, \\\\ x_2-x_4=0, \\end{cases} \\) 又已知齐次线性方程组 (II) 的通解为 \\( k_1(0,1,1,0)^T+k_2(-1,2,2,1)^T \\)（\\( k_1,k_2 \\) 为任意常数）。(1) 求方程组 (I) 的基础解系； (2) 问线性方程组 (I) 和 (II) 是否有非零公共解？若有，则求出所有的非零公共解；若没有，说明理由。",
    "options": null,
    "ans": "(1) \\( \\eta_1=(0,0,1,0)^T,\\ \\eta_2=(-1,1,0,1)^T \\)；(2) 有非零公共解，所有非零公共解为 \\( k(-1,1,1,1)^T \\)（\\( k \\) 为任意非零常数）。",
    "fb": "解析：(1) 方程组 (I) \\(\\begin{cases}x_1+x_2=0\\\\x_2-x_4=0\\end{cases}\\)，取 \\(x_3,x_4\\) 自由：由 \\(x_2=x_4,\\ x_1=-x_2=-x_4\\)，得基础解系 \\(\\eta_1=(0,0,1,0)^T,\\ \\eta_2=(-1,1,0,1)^T\\)。(2) (II) 通解 \\(k_1(0,1,1,0)^T+k_2(-1,2,2,1)^T\\)。令其满足 (I) 得 \\(k_1+k_2=0\\)，代入得公共解 \\(k(-1,1,1,1)^T\\)（\\(k\\neq0\\)）。故应填 (1) \\(\\eta_1=(0,0,1,0)^T,\\ \\eta_2=(-1,1,0,1)^T\\)；(2) 有非零公共解，所有非零公共解为 \\(k(-1,1,1,1)^T\\)（\\(k\\) 为任意非零常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-21",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 21,
    "stem": "设线性方程组\\[\\begin{cases} x_1+x_2+x_3=0, \\\\ x_1+2x_2+ax_3=0, \\\\ x_1+4x_2+a^2x_3=0 \\end{cases}\\]与方程\\[x_1+2x_2+x_3=a-1\\]有公共解，求 \\( a \\) 的值及所有公共解。",
    "options": null,
    "ans": "当 \\( a=1 \\) 时，公共解为 \\( k(-1,0,1)^T \\)（\\( k \\) 为任意常数）；当 \\( a=2 \\) 时，公共解为 \\( (0,1,-1)^T \\)。",
    "fb": "解析：先解齐次组，其系数行列式 \\((a-1)(a-2)\\)。当 \\(a=1\\) 时齐次组解为 \\(k(-1,0,1)^T\\)，代入 \\(x_1+2x_2+x_3=a-1=0\\) 恒成立，公共解为 \\(k(-1,0,1)^T\\)。当 \\(a=2\\) 时齐次组解为 \\(k(0,1,-1)^T\\)，代入 \\(x_1+2x_2+x_3=a-1=1\\) 得唯一公共解 \\((0,1,-1)^T\\)。当 \\(a\\neq1,2\\) 时齐次组只有零解，代入后要求 \\(0=a-1\\) 矛盾。故应填 当 \\(a=1\\) 时，公共解为 \\(k(-1,0,1)^T\\)（\\(k\\) 为任意常数）；当 \\(a=2\\) 时，公共解为 \\((0,1,-1)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-4",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 4,
    "stem": "设 \\( A,B \\) 均为 \\( n \\) 阶方阵，且 \\( r(A)+r(B)<n \\)，证明：方程组 \\( Ax=0 \\) 与 \\( Bx=0 \\) 有非零公共解。",
    "options": null,
    "ans": null,
    "fb": "构造齐次线性方程组 \\( \\begin{cases} Ax=0, \\\\ Bx=0. \\end{cases} \\) 设 \\( \\alpha_{i_1},\\alpha_{i_2},\\ldots,\\alpha_{i_r} \\) 与 \\( \\beta_{j_1},\\beta_{j_2},\\ldots,\\beta_{j_t} \\) 分别是 \\( A \\) 与 \\( B \\) 的行向量组的极大线性无关组，则矩阵 \\( \\begin{bmatrix}A\\\\B\\end{bmatrix} \\) 的行向量组可由 \\( \\alpha_{i_1},\\ldots,\\alpha_{i_r},\\beta_{j_1},\\ldots,\\beta_{j_t} \\) 线性表示，从而\\[r\\begin{bmatrix}A\\\\B\\end{bmatrix}\\leqslant r(\\alpha_{i_1},\\ldots,\\alpha_{i_r},\\beta_{j_1},\\ldots,\\beta_{j_t})\\leqslant r+t=r(A)+r(B)<n,\\]所以该方程组有非零解，即 \\( Ax=0 \\) 与 \\( Bx=0 \\) 有非零公共解。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-22",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 22,
    "stem": "设 \\( \\eta_1,\\eta_2,\\ldots,\\eta_s \\) 是非齐次线性方程组 \\( Ax=b \\) 的一组解向量，如果 \\( c_1\\eta_1+c_2\\eta_2+\\cdots+c_s\\eta_s \\) 也是该方程组的一个解，则 \\( c_1+c_2+\\cdots+c_s= \\)______。",
    "options": null,
    "ans": "\\( 1 \\)",
    "fb": "解析：若 \\(c_1\\eta_1+\\cdots+c_s\\eta_s\\) 也是 \\(Ax=b\\) 的解，则 \\(A(c_1\\eta_1+\\cdots+c_s\\eta_s)=b\\)。而 \\(A\\eta_i=b\\)，故 \\((c_1+\\cdots+c_s)b=b\\)，因 \\(b\\neq0\\)，得 \\(c_1+\\cdots+c_s=1\\)。故应填 \\(1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-5",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 5,
    "stem": "证明：方程组\\[\\begin{cases} x_1-x_2=a_1, \\\\ x_2-x_3=a_2, \\\\ x_3-x_4=a_3, \\\\ x_4-x_5=a_4, \\\\ x_5-x_1=a_5 \\end{cases}\\]有解的充分必要条件是 \\( \\displaystyle\\sum_{i=1}^5 a_i=0 \\)。在有解的情况下，求出它的通解。",
    "options": null,
    "ans": null,
    "fb": "方程组的增广矩阵是\\[\\bar{A}=\\begin{bmatrix}1&-1&0&0&0&a_1\\\\0&1&-1&0&0&a_2\\\\0&0&1&-1&0&a_3\\\\0&0&0&1&-1&a_4\\\\-1&0&0&0&1&a_5\\end{bmatrix}.\\]将第一、二、三、四行都加到末行，得\\[\\begin{bmatrix}1&-1&0&0&0&a_1\\\\0&1&-1&0&0&a_2\\\\0&0&1&-1&0&a_3\\\\0&0&0&1&-1&a_4\\\\0&0&0&0&0&\\sum_{i=1}^5 a_i\\end{bmatrix}.\\]由此可见，系数矩阵的秩是 4，而有解的充要条件是 \\( \\bar{A} \\) 的秩也是 4，即 \\( \\sum_{i=1}^5 a_i=0 \\)。此时只需解前四个方程，且有一个自由未知量：\\[\\begin{cases} x_1-x_2=a_1, \\\\ x_2-x_3=a_2, \\\\ x_3-x_4=a_3, \\\\ x_4-x_5=a_4, \\end{cases}\\]由此即得通解 \\( \\begin{cases} x_1=a_1+a_2+a_3+a_4+x_5, \\\\ x_2=a_2+a_3+a_4+x_5, \\\\ x_3=a_3+a_4+x_5, \\\\ x_4=a_4+x_5, \\end{cases} \\) 其中 \\( x_5 \\) 为任意常数。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-proof-6",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 6,
    "stem": "设 \\( A \\) 是 \\( m \\times n \\) 矩阵，\\( b \\) 是 \\( m \\) 维向量，求证：线性方程组 \\( A^TAx=A^Tb \\) 必有解。",
    "options": null,
    "ans": null,
    "fb": "先证 \\( r(A^TA)=r(A) \\)。由 3.3 知，\\( A^TAx=0 \\) 与 \\( Ax=0 \\) 同解，故 \\( r(A^TA)=r(A)=r(A^T) \\)。再证 \\( r(A^TA\\quad A^Tb)=r(A^TA) \\)。令 \\( A^Tb=\\beta \\)，设 \\( A^T=(\\alpha_1,\\alpha_2,\\ldots,\\alpha_m) \\)，\\( b=(b_1,b_2,\\ldots,b_m)^T \\)，则\\[\\beta=A^Tb=(\\alpha_1,\\alpha_2,\\ldots,\\alpha_m)\\begin{bmatrix}b_1\\\\b_2\\\\\\vdots\\\\b_m\\end{bmatrix}=b_1\\alpha_1+b_2\\alpha_2+\\cdots+b_m\\alpha_m,\\]即 \\( \\beta \\) 为 \\( A^T \\) 的列向量组的线性组合。设 \\( A^TA=(\\beta_1,\\beta_2,\\ldots,\\beta_n) \\)，\\( A=(a_{ij})_{m\\times n} \\)，则\\[A^TA=(\\beta_1,\\beta_2,\\ldots,\\beta_n)=(\\alpha_1,\\alpha_2,\\ldots,\\alpha_m)\\begin{bmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{bmatrix},\\]故 \\( \\beta_i=\\sum_{j=1}^m a_{ji}\\alpha_j\\ (i=1,2,\\ldots,n) \\)，即 \\( A^TA \\) 的列向量组也为 \\( A^T \\) 的列向量组的线性组合。于是增广矩阵 \\( (A^TA\\quad A^Tb) \\) 的列向量组均可被 \\( A^T \\) 的列向量组线性表示；另一方面，由 \\( r(A^TA)=r(A^T) \\) 及上述线性表示关系可知 \\( A^TA \\) 的列向量组与 \\( A^T \\) 的列向量组等价，从而 \\( \\beta=A^Tb \\) 可被 \\( A^TA \\) 的列向量组线性表示，即 \\( r(A^TA\\quad A^Tb)=r(A^TA) \\)。所以 \\( A^TAx=A^Tb \\) 必有解。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-23",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 23,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵（\\( n\\geqslant 2 \\)），对任意 \\( n \\) 维向量 \\( \\alpha \\)，均有 \\( A^*\\alpha=0 \\)，则齐次线性方程组 \\( Ax=0 \\) 的基础解系中所含向量个数 \\( k \\) 应满足______。",
    "options": null,
    "ans": "\\( k>1 \\)",
    "fb": "解析：对任意 \\(n\\) 维向量 \\(\\alpha\\) 都有 \\(A^*\\alpha=0\\)，说明 \\(A^*=O\\)。当 \\(n\\ge2\\) 时，\\(A^*=O\\) 等价于 \\(r(A)\\le n-2\\)，故 \\(Ax=0\\) 的基础解系含 \\(n-r(A)\\ge2\\) 个向量。设其个数为 \\(k\\)，则 \\(k>1\\)。故应填 \\(k>1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-22",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 22,
    "stem": "齐次线性方程组\\[\\begin{cases} a_1x_1+a_2x_2+\\cdots+a_nx_n=0, \\\\ b_1x_1+b_2x_2+\\cdots+b_nx_n=0 \\end{cases}\\]的基础解系中含有 \\( n-1 \\) 个解向量（其中 \\( a_i\\neq 0,b_i\\neq 0,\\ i=1,2,\\ldots,n \\)）的充要条件是______。",
    "options": [
      [
        "A",
        "\\( a_1=a_2=\\cdots=a_n \\)"
      ],
      [
        "B",
        "\\( b_1=b_2=\\cdots=b_n \\)"
      ],
      [
        "C",
        "\\( \\begin{vmatrix} a_1&a_2\\\\ b_1&b_2 \\end{vmatrix}=0 \\)"
      ],
      [
        "D",
        "\\( \\dfrac{a_i}{b_i}=m\\neq 0,\\ i=1,2,\\ldots,n \\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：该齐次方程组有两个方程，其基础解系含 \\(n-1\\) 个解向量当且仅当系数矩阵秩为1，即两方程的系数向量 \\((a_1,\\ldots,a_n)\\) 与 \\((b_1,\\ldots,b_n)\\) 成比例（线性相关）。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-mc-23",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 23,
    "stem": "设\\(n\\)阶矩阵\\(A\\)的伴随矩阵\\(A^{*}\\neq 0\\)，若\\(\\xi_{1},\\xi_{2},\\xi_{3},\\xi_{4}\\)是非齐次线性方程组\\(Ax=b\\)的互不相等的解，则对应的齐次线性方程组\\(Ax=0\\)的基础解系______。",
    "options": [
      [
        "A",
        "不存在"
      ],
      [
        "B",
        "仅含一个非零解向量"
      ],
      [
        "C",
        "含有两个线性无关的解向量"
      ],
      [
        "D",
        "含有三个线性无关的解向量"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A^*\\neq0\\) 说明 \\(r(A)\\ge n-1\\)。又非齐次 \\(Ax=b\\) 有4个互不相等的解，则导出组 \\(Ax=0\\) 有非零解，故 \\(r(A)<n\\)，从而 \\(r(A)=n-1\\)，基础解系恰含1个解向量。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-24",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 24,
    "stem": "已知向量组\\(\\alpha_{1}=(1,2,0,-2)^{T},\\alpha_{2}=(0,3,1,0)^{T},\\alpha_{3}=(-1,4,2,a)^{T}\\)和向量组\\(\\beta_{1}=(1,8,2,-2)^{T},\\beta_{2}=(1,5,1,-a)^{T},\\beta_{3}=(-5,2,b,10)^{T}\\)都是齐次线性方程组\\(Ax=0\\)的基础解系，求\\(a,b\\)的值。",
    "options": null,
    "ans": "\\(a\\neq 2\\)，\\(b=4\\)",
    "fb": "解析：两组都是 \\(Ax=0\\) 的基础解系，故均含3个向量且张成同一3维解空间，因而等价。由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关得 \\(a\\neq2\\)（当 \\(a=2\\) 时 \\(\\alpha_3\\) 可由 \\(\\alpha_1,\\alpha_2\\) 线性表示）。解空间由方程 \\(-2x_1+x_2-3x_3=0\\) 确定，将 \\(\\beta_3=(-5,2,b,10)^T\\) 代入得 \\(b=4\\)。故应填 \\(a\\neq2\\)，\\(b=4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-proof-7",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 7,
    "stem": "设\\(A\\)是\\(m\\times n\\)矩阵，它的\\(m\\)个行向量是某个\\(n\\)元齐次线性方程组的一组基础解系，\\(B\\)是一个\\(m\\)阶可逆矩阵。试证明：\\(BA\\)的行向量组也构成该齐次线性方程组的一组基础解系。",
    "options": null,
    "ans": null,
    "fb": "方法1：因为\\(A\\)的\\(m\\)个行向量（\\(n\\)维向量）为线性方程组的基础解系，所以\\(A\\)的行向量组线性无关，即\\(r(A)=m\\)。又设该线性方程组为\\(Cx=0\\)，则\\(r(C)=n-m\\)。因为\\(B\\)可逆，所以\\(r(BA)=m\\)。又\\(BA\\)仍为\\(m\\times n\\)矩阵，所以\\(BA\\)的行向量组线性无关。设\\(BA=(\\beta_{1}^{T},\\beta_{2}^{T},\\ldots,\\beta_{m}^{T})^{T}\\)，则\\(\\beta_{i}=\\sum_{k=1}^{m}b_{ik}\\alpha_{k}\\)（\\(i=1,2,\\ldots,m\\)），即\\(BA\\)的各行均为\\(A\\)的行向量组的线性组合，而\\(A\\)的行向量组为\\(Cx=0\\)的基础解系，所以\\(BA\\)的行向量组\\(\\beta_{1},\\beta_{2},\\ldots,\\beta_{m}\\)也满足\\(Cx=0\\)。又已证\\(r(BA)=m=n-r(C)\\)，故\\(\\beta_{1},\\beta_{2},\\ldots,\\beta_{m}\\)构成\\(Cx=0\\)的基础解系。方法2：因为\\(A\\)的行向量均为\\(Cx=0\\)的解，且\\(\\alpha_{1},\\alpha_{2},\\ldots,\\alpha_{m}\\)构成\\(Cx=0\\)的基础解系，所以\\(C(\\alpha_{1}^{T},\\alpha_{2}^{T},\\ldots,\\alpha_{m}^{T})^{T}=0\\)，即\\(CA^{T}=0\\)，其中\\(r(A)=m\\)，所以\\(r(C)=n-m\\)。上式两边转置得\\(AC^{T}=0\\)，两边同时左乘\\(B\\)得\\(BAC^{T}=0\\)，再转置得\\(C(BA)^{T}=0\\)，即\\(BA\\)的行向量组均为\\(Cx=0\\)的解向量。又\\(r(BA)=m\\)，而\\(n-r(C)=n-(n-m)=m\\)，所以\\(BA\\)的行向量组线性无关，且所含向量个数\\(m=n-r(C)\\)，故\\(BA\\)的行向量组构成\\(Cx=0\\)的基础解系。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-proof-8",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 8,
    "stem": "设\\(\\eta^{*}\\)是非齐次线性方程组\\(Ax=b\\)的一个解，\\(\\xi_{1},\\xi_{2},\\ldots,\\xi_{n-r}\\)是其导出组\\(Ax=0\\)的一个基础解系，证明：(1)\\(\\eta^{*},\\xi_{1},\\xi_{2},\\ldots,\\xi_{n-r}\\)线性无关；(2)\\(\\eta^{*},\\eta^{*}+\\xi_{1},\\eta^{*}+\\xi_{2},\\ldots,\\eta^{*}+\\xi_{n-r}\\)线性无关。",
    "options": null,
    "ans": null,
    "fb": "(1)设有常数\\(k,k_{1},k_{2},\\ldots,k_{n-r}\\)，使\\(k\\eta^{*}+k_{1}\\xi_{1}+k_{2}\\xi_{2}+\\cdots+k_{n-r}\\xi_{n-r}=0\\)。两边同时左乘矩阵\\(A\\)，有\\(kA\\eta^{*}+k_{1}A\\xi_{1}+k_{2}A\\xi_{2}+\\cdots+k_{n-r}A\\xi_{n-r}=0\\)。由已知条件知\\(A\\eta^{*}=b\\)，\\(A\\xi_{i}=0\\)（\\(i=1,2,\\ldots,n-r\\)），代入上式得\\(kb=0\\)，故\\(k=0\\)。把\\(k=0\\)代回得\\(k_{1}\\xi_{1}+k_{2}\\xi_{2}+\\cdots+k_{n-r}\\xi_{n-r}=0\\)。由\\(\\xi_{1},\\xi_{2},\\ldots,\\xi_{n-r}\\)为\\(Ax=0\\)的基础解系知\\(k_{1}=k_{2}=\\cdots=k_{n-r}=0\\)，所以向量组\\(\\eta^{*},\\xi_{1},\\xi_{2},\\ldots,\\xi_{n-r}\\)线性无关。(2)设有常数\\(l,l_{1},l_{2},\\ldots,l_{n-r}\\)，使\\(l\\eta^{*}+l_{1}(\\eta^{*}+\\xi_{1})+l_{2}(\\eta^{*}+\\xi_{2})+\\cdots+l_{n-r}(\\eta^{*}+\\xi_{n-r})=0\\)。整理得\\((l+l_{1}+\\cdots+l_{n-r})\\eta^{*}+l_{1}\\xi_{1}+l_{2}\\xi_{2}+\\cdots+l_{n-r}\\xi_{n-r}=0\\)。由(1)得\\(l+l_{1}+\\cdots+l_{n-r}=0\\)，\\(l_{1}=l_{2}=\\cdots=l_{n-r}=0\\)，故\\(l=l_{1}=l_{2}=\\cdots=l_{n-r}=0\\)，所以向量组\\(\\eta^{*},\\eta^{*}+\\xi_{1},\\eta^{*}+\\xi_{2},\\ldots,\\eta^{*}+\\xi_{n-r}\\)线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-calc-14",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 14,
    "stem": "设有齐次线性方程组\\[\\begin{cases}(1+a)x_{1}+x_{2}+\\cdots+x_{n}=0,\\\\2x_{1}+(2+a)x_{2}+\\cdots+2x_{n}=0,\\\\\\cdots\\cdots\\cdots\\cdots\\cdots\\cdots\\cdots\\\\x_{1}+nx_{2}+\\cdots+(n+a)x_{n}=0,\\end{cases}\\quad(n\\geqslant 2)\\]试问\\(a\\)取何值时，该方程组有非零解，并求出其通解。",
    "options": null,
    "ans": null,
    "fb": "对方程组的系数矩阵\\(A\\)作初等行变换，得当\\(a=0\\)时，\\(r(A)=1<n\\)，方程组有非零解，同解方程组为\\(x_{1}+x_{2}+\\cdots+x_{n}=0\\)，基础解系为\\(\\eta_{1}=(-1,1,0,\\ldots,0)^{T},\\eta_{2}=(-1,0,1,\\ldots,0)^{T},\\ldots,\\eta_{n-1}=(-1,0,0,\\ldots,1)^{T}\\)，通解为\\(k_{1}\\eta_{1}+\\cdots+k_{n-1}\\eta_{n-1}\\)。当\\(a\\neq 0\\)时继续变换，可知\\(a=-\\dfrac{n(n+1)}{2}\\)时，\\(r(A)=n-1<n\\)，方程组也有非零解，同解方程组为\\(-2x_{1}+x_{2}=0,-3x_{1}+x_{3}=0,\\ldots,-nx_{1}+x_{n}=0\\)，基础解系为\\(\\eta=(1,2,\\ldots,n)^{T}\\)，通解为\\(k\\eta\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-15",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 15,
    "stem": "设线性方程组\\[\\begin{cases}x_{1}+\\lambda x_{2}+\\mu x_{3}+x_{4}=0,\\\\2x_{1}+x_{2}+x_{3}+2x_{4}=0,\\\\3x_{1}+(2+\\lambda)x_{2}+(4+\\mu)x_{3}+4x_{4}=1.\\end{cases}\\]已知\\((1,-1,1,-1)^{T}\\)是该方程组的一个解。试求：(1)方程组的全部解，并用对应的齐次线性方程组的基础解系表示全部解；(2)该方程组满足\\(x_{2}=x_{3}\\)的全部解。",
    "options": null,
    "ans": null,
    "fb": "将\\((1,-1,1,-1)^{T}\\)代入方程组，得\\(1-\\lambda+\\mu-1=0\\)，从而\\(\\lambda=\\mu\\)。对增广矩阵作初等行变换。若\\(2\\lambda-1=0\\)，进一步变换得通解\\(\\left(-\\dfrac{1}{2},1,0,0\\right)^{T}+k_{1}(1,-3,1,0)^{T}+k_{2}\\left(-\\dfrac{1}{2},-1,0,1\\right)^{T}\\)。若\\(2\\lambda-1\\neq 0\\)，通解为\\(\\left(0,-\\dfrac{1}{2},\\dfrac{1}{2},0\\right)^{T}+k\\left(-1,\\dfrac{1}{2},-\\dfrac{1}{2},1\\right)^{T}\\)。对于(2)，当\\(2\\lambda-1=0\\)时令\\(x_{2}=x_{3}\\)得\\(k_{2}=1-4k_{1}\\)，解为\\((-1,0,0,1)^{T}+k_{1}(3,1,1,-4)^{T}\\)；当\\(2\\lambda-1\\neq 0\\)时解得\\(k=1\\)，解为\\((-1,0,0,1)^{T}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-9",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 9,
    "stem": "设矩阵\\(A=\\begin{bmatrix}2a&1&&&&\\\\a^{2}&2a&\\ddots&&&\\\\&\\ddots&\\ddots&1&&\\\\&&a^{2}&2a\\end{bmatrix}_{n\\times n}\\)，现矩阵\\(A\\)满足方程\\(Ax=B\\)，其中\\(x=(x_{1},\\ldots,x_{n})^{T}\\)，\\(B=(1,0,\\ldots,0)^{T}\\)。(1)求证\\(|A|=(n+1)a^{n}\\)；(2)\\(a\\)为何值，方程组有唯一解，求\\(x_{1}\\)；(3)\\(a\\)为何值，方程组有无穷多解，求通解。",
    "options": null,
    "ans": null,
    "fb": "(1)按第一行展开递推或用初等行变换化为上三角，可得\\(|A|=2a\\cdot\\dfrac{3a}{2}\\cdot\\dfrac{4a}{3}\\cdots\\dfrac{(n+1)a}{n}=(n+1)a^{n}\\)。(2)由克拉默法则，\\(x_{1}=\\dfrac{|A_{1}|}{|A|}\\)，而\\(|A_{1}|=na^{n-1}\\)，故\\(x_{1}=\\dfrac{n}{(n+1)a}\\)（\\(a\\neq 0\\)）。(3)当\\(a=0\\)时，\\(|A|=0\\)，增广矩阵\\((A:B)\\)经初等行变换得\\(r(A:B)=r(A)=n-1\\)，同解方程组为\\(x_{2}=0,x_{3}=0,\\ldots,x_{n}=0\\)，基础解系为\\((1,0,\\ldots,0)^{T}\\)，特解为\\((0,1,0,\\ldots,0)^{T}\\)，故通解为\\(k(1,0,\\ldots,0)^{T}+(0,1,0,\\ldots,0)^{T}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-25",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 25,
    "stem": "已知非齐次线性方程组\\[\\begin{cases}x_{1}-kx_{2}+k^{2}x_{3}=k^{3},\\\\x_{1}+kx_{2}+k^{2}x_{3}=-k^{3},\\\\2x_{1}+2k^{2}x_{3}=0,\\\\x_{1}+3kx_{2}+k^{2}x_{3}=-3k^{3},\\end{cases}\\quad(k\\neq 0)\\]有两个解为\\(\\alpha_{1}=\\begin{bmatrix}-1\\\\1\\\\1\\end{bmatrix},\\alpha_{2}=\\begin{bmatrix}1\\\\1\\\\-1\\end{bmatrix}\\)，求方程组的通解。",
    "options": null,
    "ans": "通解为\\(\\alpha_{1}+k(\\alpha_{1}-\\alpha_{2})=\\begin{bmatrix}-1\\\\1\\\\1\\end{bmatrix}+k\\begin{bmatrix}-2\\\\0\\\\2\\end{bmatrix}\\)（\\(k\\)为任意常数）。",
    "fb": "解析：已知 \\(\\alpha_1,\\alpha_2\\) 是非齐次方程组的两个解，则差 \\(\\alpha_1-\\alpha_2=(-2,0,2)^T\\) 是对应齐次方程组 \\(Ax=0\\) 的解，构成基础解系（系数矩阵秩为 \\(3-1=2\\)）。故通解为特解加齐次通解：\\(\\alpha_1+k(\\alpha_1-\\alpha_2)\\)。故应填 通解为 \\(\\alpha_{1}+k(\\alpha_{1}-\\alpha_{2})=\\begin{bmatrix}-1\\\\1\\\\1\\end{bmatrix}+k\\begin{bmatrix}-2\\\\0\\\\2\\end{bmatrix}\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-26",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 26,
    "stem": "设三元非齐次线性方程组\\(Ax=b\\)有三个特解\\(\\alpha_{1},\\alpha_{2},\\alpha_{3}\\)，且\\(\\alpha_{1}+\\alpha_{2}+\\alpha_{3}=(1,1,1)^{T}\\)，\\(\\alpha_{3}-\\alpha_{2}=(1,0,0)^{T}\\)，而\\(r(A)=2\\)，则\\(Ax=b\\)的通解为______。",
    "options": null,
    "ans": "\\(\\dfrac{1}{3}(1,1,1)^{T}+k(1,0,0)^{T}\\)（\\(k\\)为任意常数）",
    "fb": "解析：\\(r(A)=2\\)，未知数 \\(n=3\\)，导出组基础解系含 \\(3-2=1\\) 个解向量。\\(\\alpha_3-\\alpha_2=(1,0,0)^T\\) 是齐次解，故齐次通解为 \\(k(1,0,0)^T\\)。又 \\(\\alpha_1+\\alpha_2+\\alpha_3=(1,1,1)^T\\)，特解可取 \\(\\frac13(\\alpha_1+\\alpha_2+\\alpha_3)=\\frac13(1,1,1)^T\\)（因 \\(A(\\alpha_1+\\alpha_2+\\alpha_3)=3b\\)）。故通解为 \\(\\frac13(1,1,1)^T+k(1,0,0)^T\\)。故应填 \\(\\dfrac{1}{3}(1,1,1)^{T}+k(1,0,0)^{T}\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-24",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 24,
    "stem": "设\\(A\\)为\\(n\\)阶方阵，且\\(r(A)=n-1\\)，\\(\\alpha_{1},\\alpha_{2}\\)是\\(Ax=0\\)的两个不同的解向量，则\\(Ax=0\\)的通解为______。",
    "options": [
      [
        "A",
        "\\(k\\alpha_{1}\\)"
      ],
      [
        "B",
        "\\(k\\alpha_{2}\\)"
      ],
      [
        "C",
        "\\(k(\\alpha_{1}-\\alpha_{2})\\)"
      ],
      [
        "D",
        "\\(k(\\alpha_{1}+\\alpha_{2})\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(r(A)=n-1\\)，故 \\(Ax=0\\) 的基础解系含 \\(n-r(A)=1\\) 个解向量。又 \\(\\alpha_1,\\alpha_2\\) 是两个不同的解，则 \\(\\alpha_1-\\alpha_2\\neq0\\) 是 \\(Ax=0\\) 的非零解，恰好构成基础解系，故通解为 \\(k(\\alpha_1-\\alpha_2)\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-27",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 27,
    "stem": "已知\\(x_{1}=(0,1,0)^{T},x_{2}=(-3,2,2)^{T}\\)是线性方程组\\[\\begin{cases}x_{1}-x_{2}+2x_{3}=-1,\\\\3x_{1}+x_{2}+4x_{3}=1,\\\\ax_{1}+bx_{2}+cx_{3}=d\\end{cases}\\]的两个解，求此方程组的通解。",
    "options": null,
    "ans": "通解为\\(k(3,-1,-2)^{T}+(0,1,0)^{T}\\)（\\(k\\)为任意常数）。",
    "fb": "解析：已知 \\(x_1=(0,1,0)^T,\\ x_2=(-3,2,2)^T\\) 是方程组的解，则 \\(x_2-x_1=(-3,1,2)^T\\) 是对应齐次方程组 \\(Ax=0\\) 的解。由前两方程系数矩阵秩为2、未知数3个，导出组基础解系含1个向量，故齐次通解为 \\(k(-3,1,2)^T\\)。非齐次通解为 \\(x_1+k(x_2-x_1)=(0,1,0)^T+k(-3,1,2)^T\\)，改写方向为 \\((3,-1,-2)^T\\) 得 \\(k(3,-1,-2)^T+(0,1,0)^T\\)。故应填 通解为 \\(k(3,-1,-2)^{T}+(0,1,0)^{T}\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-25",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 25,
    "stem": "要使\\(\\xi_{1}=(1,0,2)^{T},\\xi_{2}=(0,1,-1)^{T}\\)都是线性方程组\\(Ax=0\\)的解，只要系数矩阵\\(A\\)为______。",
    "options": [
      [
        "A",
        "\\(\\begin{bmatrix}-2&1&1\\end{bmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{bmatrix}2&0&-1\\\\0&1&1\\end{bmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{bmatrix}-1&0&2\\\\0&1&-1\\end{bmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{bmatrix}0&1&1\\\\4&-2&-2\\\\0&1&1\\end{bmatrix}\\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：\\(\\xi_1,\\xi_2\\) 是 \\(Ax=0\\) 的解，等价于 \\(A\\) 的每一行都与 \\(\\xi_1,\\xi_2\\) 正交。取与 \\(\\xi_1=(1,0,2)^T,\\ \\xi_2=(0,1,-1)^T\\) 都正交的非零向量 \\(c\\)，满足 \\(c_1+2c_3=0,\\ c_2-c_3=0\\)，可取 \\(c=(-2,1,1)\\)。故取 \\(A=(-2,1,1)\\) 即可。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-28",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 28,
    "stem": "齐次线性方程组\\(Ax=0\\)以\\(\\eta_{1}=(1,0,1)^{T},\\eta_{2}=(0,1,-1)^{T}\\)为基础解系，则系数矩阵\\(A=\\)______。",
    "options": null,
    "ans": "\\(A=(-1,1,1)\\)",
    "fb": "解析：\\(Ax=0\\) 以 \\(\\eta_1=(1,0,1)^T,\\ \\eta_2=(0,1,-1)^T\\) 为基础解系，说明解空间是2维，故 \\(A\\) 应为 \\(1\\times3\\) 矩阵（秩1），其行向量与 \\(\\eta_1,\\eta_2\\) 均正交。设行为 \\(c=(c_1,c_2,c_3)\\)，则 \\(c_1+c_3=0,\\ c_2-c_3=0\\Rightarrow c_2=c_3,\\ c_1=-c_3\\)，取 \\(c=(-1,1,1)\\)。故 \\(A=(-1,1,1)\\)。故应填 \\(A=(-1,1,1)\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-29",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 29,
    "stem": "若\\(n\\)元齐次线性方程组\\(Ax=0\\)有\\(n\\)个线性无关的解向量，则\\(A=\\)______。",
    "options": null,
    "ans": "\\(A=0\\)",
    "fb": "解析：\\(n\\) 元齐次线性方程组 \\(Ax=0\\) 有 \\(n\\) 个线性无关的解向量，说明解空间维数为 \\(n\\)，即 \\(n-r(A)=n\\)，故 \\(r(A)=0\\)，从而 \\(A\\) 为零矩阵。故应填 \\(A=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-30",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 30,
    "stem": "求一个以\\(k(2,1,-4,3)^{T}+(1,2,-3,4)^{T}\\)为通解的线性方程组。",
    "options": null,
    "ans": "例如\\(\\begin{cases}x_{1}-2x_{2}=-3,\\\\4x_{2}+x_{3}=5,\\\\-3x_{2}+x_{4}=-2.\\end{cases}\\)（答案不唯一）",
    "fb": "解析：已知通解 \\(x=k(2,1,-4,3)^T+(1,2,-3,4)^T\\)。齐次通解方向 \\((2,1,-4,3)^T\\) 满足 \\(Ax=0\\)，特解 \\((1,2,-3,4)^T\\) 满足 \\(Ax=b\\)。取 \\(A\\) 为1行，行向量 \\(c\\) 与 \\((2,1,-4,3)\\) 正交：\\(2c_1+c_2-4c_3+3c_4=0\\)，可取 \\(c=(1,-2,0,0)\\)；再由 \\(c\\cdot(1,2,-3,4)=b\\) 得 \\(b=1-4=-3\\)。再补两个与齐次方向正交且常数项匹配的独立方程，例如 \\(4x_2+x_3=5\\)、\\(-3x_2+x_4=-2\\)。故应填 例如 \\(\\begin{cases}x_1-2x_2=-3,\\\\4x_2+x_3=5,\\\\-3x_2+x_4=-2.\\end{cases}\\)（答案不唯一）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-31",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 31,
    "stem": "设方程组 \\[\\begin{cases}a_{11}x_1+a_{12}x_2+a_{13}x_3=1,\\\\a_{21}x_1+a_{22}x_2+a_{23}x_3=1,\\\\a_{31}x_1+a_{32}x_2+a_{33}x_3=1\\end{cases}\\] 有三个解 \\(\\boldsymbol{\\alpha}_1=(1,0,0)^T,\\boldsymbol{\\alpha}_2=(-1,2,0)^T,\\boldsymbol{\\alpha}_3=(-1,1,1)^T\\)，记 \\(A\\) 为方程组的系数矩阵，求 \\(A\\)。",
    "options": null,
    "ans": "\\(A=CB^{-1}=\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}\\)",
    "fb": "解析：由题得 \\(A\\alpha_1=A\\alpha_2=A\\alpha_3=(1,1,1)^T\\)。令 \\(M=(\\alpha_1,\\alpha_2,\\alpha_3)=\\begin{pmatrix}1&-1&-1\\\\0&2&1\\\\0&0&1\\end{pmatrix}\\)，其可逆，且 \\(AM=(1,1,1)^T(1,1,1)\\)。于是 \\(A=(1,1,1)^T(1,1,1)M^{-1}\\)。直接验证 \\(A=\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}\\) 满足各条件。故应填 \\(A=CB^{-1}=\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}\\)（其中 \\(B=(\\alpha_1,\\alpha_2,\\alpha_3)\\)）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-26",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 26,
    "stem": "设 \\(A\\) 为 \\(4\\times 5\\) 矩阵，且 \\(A\\) 的行向量组线性无关，则______。",
    "options": [
      [
        "A",
        "\\(A\\) 的列向量组线性无关"
      ],
      [
        "B",
        "方程组 \\(Ax=b\\) 的增广矩阵 \\(\\bar{A}\\) 的行向量组线性无关"
      ],
      [
        "C",
        "方程组 \\(Ax=b\\) 的增广矩阵 \\(\\bar{A}\\) 的任意四个列向量构成的向量组线性无关"
      ],
      [
        "D",
        "方程组 \\(Ax=b\\) 有唯一解"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A\\) 为 \\(4\\times5\\) 矩阵且行向量组线性无关，故 \\(r(A)=4\\)。增广矩阵 \\((A,b)\\) 也是4行，故 \\(r(A,b)\\le4\\)；又 \\(r(A)\\le r(A,b)\\)，所以 \\(r(A)=r(A,b)=4\\)，方程组 \\(Ax=b\\) 一定有解；未知数 \\(n=5>4\\)，故必有无穷多解。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-proof-10",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 10,
    "stem": "设 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 是 \\(Ax=0\\) 的基础解系，证明：\\(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_1\\) 也是 \\(Ax=0\\) 的基础解系。",
    "options": null,
    "ans": null,
    "fb": "因为 \\(A\\boldsymbol{\\alpha}_i=0\\;(i=1,2,3)\\)，则 \\(A(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2)=A\\boldsymbol{\\alpha}_1+A\\boldsymbol{\\alpha}_2=0\\)，从而 \\(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2\\) 是 \\(Ax=0\\) 的解。同理可证 \\(\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_1\\) 也是 \\(Ax=0\\) 的解。由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 是方程组 \\(Ax=0\\) 的基础解系可知，基础解系含 3 个向量，从而方程组 \\(Ax=0\\) 的 3 个线性无关的解向量便是其基础解系。设存在数 \\(k_1,k_2,k_3\\)，使 \\(k_1(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2)+k_2(\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3)+k_3(\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_1)=0\\)，整理得 \\((k_1+k_3)\\boldsymbol{\\alpha}_1+(k_1+k_2)\\boldsymbol{\\alpha}_2+(k_2+k_3)\\boldsymbol{\\alpha}_3=0\\)。由于 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性无关，所以有齐次线性方程组 \\(\\begin{cases}k_1+k_3=0,\\\\k_1+k_2=0,\\\\k_2+k_3=0,\\end{cases}\\) 其系数行列式 \\(\\begin{vmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{vmatrix}=2\\neq 0\\)，所以方程组①只有零解，即 \\(k_1=k_2=k_3=0\\)，从而 \\(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_1\\) 线性无关，于是 \\(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_1\\) 是 \\(Ax=0\\) 的一个基础解系。",
    "pts": 8,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-proof-11",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 11,
    "stem": "设 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s\\) 是齐次线性方程组 \\(Ax=0\\) 的一个基础解系，向量 \\(\\boldsymbol{\\beta}\\) 不是方程组 \\(Ax=0\\) 的解，即 \\(A\\boldsymbol{\\beta}\\neq 0\\)。证明：向量组 \\(\\boldsymbol{\\beta},\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_1,\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_s\\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设有数组 \\(k,k_1,k_2,\\cdots,k_s\\)，使 \\(k\\boldsymbol{\\beta}+\\sum_{i=1}^{s}k_i(\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_i)=0\\)，则有 \\((k+\\sum_{i=1}^{s}k_i)\\boldsymbol{\\beta}=-\\sum_{i=1}^{s}k_i\\boldsymbol{\\alpha}_i\\)。上式两边同时左乘矩阵 \\(A\\) 有 \\((k+\\sum_{i=1}^{s}k_i)A\\boldsymbol{\\beta}=-\\sum_{i=1}^{s}k_iA\\boldsymbol{\\alpha}_i=0\\)。而 \\(A\\boldsymbol{\\beta}\\neq 0\\)，所以必须 \\(k+\\sum_{i=1}^{s}k_i=0\\)。把②代入①得 \\(-\\sum_{i=1}^{s}k_i\\boldsymbol{\\alpha}_i=0\\)。由于 \\(\\boldsymbol{\\alpha}_1,\\cdots,\\boldsymbol{\\alpha}_s\\) 为 \\(Ax=0\\) 的基础解系，\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\cdots,\\boldsymbol{\\alpha}_s\\) 必线性无关，所以 \\(k_1=k_2=\\cdots=k_s=0\\)。把 \\(k_i=k_2=\\cdots=k_s=0\\) 代入②得 \\(k=0\\)，故向量组 \\(\\boldsymbol{\\beta},\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_1,\\cdots,\\boldsymbol{\\beta}+\\boldsymbol{\\alpha}_s\\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-calc-16",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 16,
    "stem": "已知 \\(\\boldsymbol{\\alpha}_1=(1,4,0,2)^T,\\boldsymbol{\\alpha}_2=(2,7,1,3)^T,\\boldsymbol{\\alpha}_3=(0,1,-1,a)^T,\\boldsymbol{\\beta}=(3,10,b,4)^T\\)。 (1)\\(a,b\\) 取何值时，\\(\\boldsymbol{\\beta}\\) 不能由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示？ (2)\\(a,b\\) 取何值时，\\(\\boldsymbol{\\beta}\\) 可由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示？并写出此表达式。",
    "options": null,
    "ans": null,
    "fb": "设 \\(x_1\\boldsymbol{\\alpha}_1+x_2\\boldsymbol{\\alpha}_2+x_3\\boldsymbol{\\alpha}_3=\\boldsymbol{\\beta}\\)，对增广矩阵施以初等行变换： \\[\\bar{A}=\\begin{bmatrix}1&2&0&3\\\\4&7&1&10\\\\0&1&-1&b\\\\2&3&a&4\\end{bmatrix}\\to\\begin{bmatrix}1&2&0&3\\\\0&1&-1&2\\\\0&1&-1&b\\\\0&0&a-1&0\\end{bmatrix}\\to\\begin{bmatrix}1&2&0&3\\\\0&1&-1&2\\\\0&0&a-1&0\\\\0&0&0&b-2\\end{bmatrix}\\] (1) 当 \\(b\\neq 2\\) 时，\\(r(A)\\neq r(\\bar{A})\\)，方程组无解，从而 \\(\\boldsymbol{\\beta}\\) 不能由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示。 (2) 当 \\(b=2\\) 时，\\(r(A)=r(\\bar{A})\\)，方程组有解。 (i) 当 \\(a=1\\) 时，原方程组通解为 \\(\\begin{cases}x_1=-2x_3-1,\\\\x_2=x_3+2,\\end{cases}\\) 即 \\(\\boldsymbol{\\beta}=(-2k-1)\\boldsymbol{\\alpha}_1+(k+2)\\boldsymbol{\\alpha}_2+k\\boldsymbol{\\alpha}_3\\)，\\(k\\) 为任意常数。 (ii) 当 \\(a\\neq 1\\) 时，方程组有唯一解 \\(\\boldsymbol{\\beta}=-\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-32",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 32,
    "stem": "已知四阶方阵 \\(A=(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4),\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4\\) 均为四维列向量，其中 \\(\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4\\) 线性无关，\\(\\boldsymbol{\\alpha}_1=2\\boldsymbol{\\alpha}_2-\\boldsymbol{\\alpha}_3\\)。如果 \\(\\boldsymbol{\\beta}=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3+\\boldsymbol{\\alpha}_4\\)，求线性方程组 \\(Ax=\\boldsymbol{\\beta}\\) 的通解。",
    "options": null,
    "ans": "\\(x=\\begin{bmatrix}1\\\\1\\\\1\\\\1\\end{bmatrix}+k\\begin{bmatrix}1\\\\-2\\\\1\\\\0\\end{bmatrix}\\)，其中 \\(k\\) 为任意常数",
    "fb": "解析：由 \\(\\alpha_1=2\\alpha_2-\\alpha_3\\) 知 \\(\\alpha_1-2\\alpha_2+\\alpha_3=0\\)，即 \\(A(1,-2,1,0)^T=0\\)，故 \\((1,-2,1,0)^T\\) 是 \\(Ax=0\\) 的解。又 \\(\\alpha_2,\\alpha_3,\\alpha_4\\) 线性无关，故 \\(r(A)=3\\)，导出组基础解系含 \\(4-3=1\\) 个向量，即上述向量。特解：\\(\\beta=\\alpha_1+\\alpha_2+\\alpha_3+\\alpha_4=A(1,1,1,1)^T\\)，故 \\((1,1,1,1)^T\\) 是 \\(Ax=\\beta\\) 的一个特解。通解为 \\((1,1,1,1)^T+k(1,-2,1,0)^T\\)。故应填 \\(x=\\begin{bmatrix}1\\\\1\\\\1\\\\1\\end{bmatrix}+k\\begin{bmatrix}1\\\\-2\\\\1\\\\0\\end{bmatrix}\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-12",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 12,
    "stem": "已知非齐次线性方程组 \\[\\begin{cases}a_{11}x_1+a_{12}x_2+a_{13}x_3+a_{14}x_4=a_1,\\\\a_{21}x_1+b_2x_2+b_3x_3+b_4x_4=b_2,\\\\c_1x_1+c_2x_2+c_3x_3+c_4x_4=c_3,\\\\d_1x_1+d_2x_2+d_3x_3+d_4x_4=d_4\\end{cases}\\] 有通解 \\((2,1,0,1)^T+k(1,-1,2,0)^T\\)，记 \\(\\boldsymbol{\\alpha}_i=(a_i,b_i,c_i,d_i)^T,i=1,2,\\cdots,5\\)。问 \\(\\boldsymbol{\\alpha}_4\\) 能否由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示？为什么？",
    "options": null,
    "ans": null,
    "fb": "一方面，由 \\(\\boldsymbol{\\alpha}=(2,1,0,1)^T\\) 为方程组导出组的基础解系知，基础解系所含向量个数为 1，而 \\(n=4\\)，从而系数矩阵 \\(A=(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4)\\) 的秩 \\(r(A)=n-1=3\\)，即 \\(r(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4)=3\\)。另一方面，\\(\\boldsymbol{\\alpha}=(1,-1,2,0)^T\\) 必满足 \\(A\\boldsymbol{\\alpha}=0\\)，也即 \\((\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4)\\begin{bmatrix}-1\\\\1\\\\2\\\\0\\end{bmatrix}=0\\)，得 \\(\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2+2\\boldsymbol{\\alpha}_3+0\\cdot\\boldsymbol{\\alpha}_4=0\\)。这说明 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性相关，从而 \\(r(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)<3\\)。结合①、②式可说明 \\(\\boldsymbol{\\alpha}_4\\) 不能由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-33",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 33,
    "stem": "已知向量组 \\(\\boldsymbol{\\beta}_1=\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix},\\boldsymbol{\\beta}_2=\\begin{bmatrix}2\\\\2\\\\1\\end{bmatrix},\\boldsymbol{\\beta}_3=\\begin{bmatrix}1\\\\1\\\\0\\end{bmatrix}\\) 与向量组 \\(\\boldsymbol{\\alpha}_1=\\begin{bmatrix}1\\\\2\\\\-3\\end{bmatrix},\\boldsymbol{\\alpha}_2=\\begin{bmatrix}3\\\\0\\\\1\\end{bmatrix},\\boldsymbol{\\alpha}_3=\\begin{bmatrix}9\\\\6\\\\-7\\end{bmatrix}\\) 具有相同的秩，且 \\(\\boldsymbol{\\beta}_3\\) 可由 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性表示，求 \\(a,b\\) 的值。",
    "options": null,
    "ans": "\\(a=15,b=5\\)",
    "fb": "解析：由两向量组秩相等且 \\(\\beta_3\\) 可由 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示，经计算可得两组秩均为2，并解得参数 \\(a=15,\\ b=5\\)。故应填 \\(a=15,\\ b=5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-calc-17",
    "ch": 4,
    "src": "jingxuan",
    "type": "calc",
    "no": 17,
    "stem": "设四元齐次线性方程组（I）为 \\(\\begin{cases}2x_1+3x_2-x_3=0,\\\\x_1+2x_2+x_3-x_4=0,\\end{cases}\\) 且已知另一四元线性方程组（II）的一个基础解系为 \\(\\boldsymbol{\\alpha}_1=(2,-1,a+2,1)^T,\\boldsymbol{\\alpha}_2=(-1,2,4,a+8)^T\\)。 (1) 求方程组（I）的一个基础解系； (2) 当 \\(a\\) 为何值时，方程组（I）与（II）有非零公共解？在有非零公共解时，求出全部非零公共解。",
    "options": null,
    "ans": null,
    "fb": "(1) 对方程组（I）的系数矩阵作初等行变换，有 \\(A=\\begin{bmatrix}2&3&-1&0\\\\1&2&1&-1\\end{bmatrix}\\to\\begin{bmatrix}1&0&-5&3\\\\0&1&3&-2\\end{bmatrix}\\)，得同解方程组 \\(\\begin{cases}x_1=5x_3-3x_4,\\\\x_2=-3x_3+2x_4,\\end{cases}\\) 一个基础解系为 \\(\\boldsymbol{\\beta}_1=(5,-3,1,0)^T,\\boldsymbol{\\beta}_2=(-3,2,0,1)^T\\)。(2) 由题设条件，方程组（II）的全部解为 \\(k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2=\\begin{bmatrix}2k_1-k_2\\\\-k_1+2k_2\\\\a+2)k_1+4k_2\\\\k_1+(a+8)k_2\\end{bmatrix}\\)。将①代入方程组（I），得 \\(\\begin{cases}(a+1)k_1=0,\\\\a+1)k_1-(a+1)k_2=0,\\end{cases}\\) 要使方程组（I）与（II）有非零公共解，只需关于 \\(k_1,k_2\\) 的方程组②有非零解。因为 \\(\\begin{vmatrix}a+1&0\\\\a+1&-(a+1)\\end{vmatrix}=-(a+1)^2\\)，所以当 \\(a\\neq -1\\) 时，方程组（I）与（II）无非零公共解。当 \\(a=-1\\) 时，方程组②有非零解，且 \\(k_1,k_2\\) 为不全为零的任意常数，此时全部非零公共解为 \\(k_1\\begin{bmatrix}2\\\\-1\\\\1\\\\1\\end{bmatrix}+k_2\\begin{bmatrix}-1\\\\2\\\\4\\\\7\\end{bmatrix}\\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-34",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 34,
    "stem": "已知下列非齐次线性方程组 (I)\\(\\begin{cases}x_1+x_2-2x_3=-6,\\\\4x_1-x_2-x_3-x_4=1,\\\\3x_1-x_2-x_3=3,\\end{cases}\\quad(II)\\begin{cases}x_1+mx_2-x_3-x_4=-5,\\\\ x_2-x_3-2x_4=-11,\\\\x_3-2x_4=-t+1,\\end{cases}\\) (1) 求解方程组（I），用其导出组的基础解系表示通解； (2) 当方程组（II）中的参数 \\(m,n,t\\) 为何值时，方程组（I）与（II）同解。",
    "options": null,
    "ans": "(1) 通解：\\(\\begin{bmatrix}-2\\\\-4\\\\-5\\\\0\\end{bmatrix}+k\\begin{bmatrix}1\\\\1\\\\2\\\\1\\end{bmatrix}\\)，其中 \\(k\\) 为任意常数；(2) \\(m=2,n=4,t=6\\)",
    "fb": "解析：(1) 解方程组 (I)，对增广矩阵行变换，其系数矩阵秩为3、未知数4个，导出组基础解系含1个向量，特解可取 \\((-2,-4,-5,0)^T\\)，齐次解 \\((1,1,2,1)^T\\)，通解为 \\((-2,-4,-5,0)^T+k(1,1,2,1)^T\\)。(2) (I) 与 (II) 同解，则 (II) 的通解亦为此形式，比较系数得 \\(m=2,\\ n=4,\\ t=6\\)。故应填 (1) 通解 \\(\\begin{bmatrix}-2\\\\-4\\\\-5\\\\0\\end{bmatrix}+k\\begin{bmatrix}1\\\\1\\\\2\\\\1\\end{bmatrix}\\)（\\(k\\) 为任意常数）；(2) \\(m=2,\\ n=4,\\ t=6\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-proof-13",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 13,
    "stem": "设 \\(A\\) 为 \\(m\\times n\\) 矩阵，\\(B\\) 是 \\(n\\times s\\) 矩阵，证明：\\(AB)x=0\\) 与 \\(Bx=0\\) 同解的充分必要条件是 \\(r(AB)=r(B)\\)。",
    "options": null,
    "ans": null,
    "fb": "必要性：若 \\(ABx=0\\) 与 \\(Bx=0\\) 同解，则两个线性方程组的基础解系也完全相同，当然基础解系所包含的线性无关解的个数完全相等，即 \\(s-r(AB)=s-r(B)\\)，所以 \\(r(AB)=r(B)\\)。 充分性：设 \\(\\xi\\) 是 \\(Bx=0\\) 的任一解向量，即 \\(B\\xi=0\\)，两边左乘 \\(A\\)，得 \\(AB\\xi=0\\)，即 \\(\\xi\\) 也是 \\(ABx=0\\) 的解，所以 \\(Bx=0\\) 的解集含于 \\(ABx=0\\) 的解集中。已知 \\(r(B)=(AB)=r\\)，若 \\(r<s\\)，设 \\(\\xi_1,\\xi_2,\\cdots,\\xi_{s-r}\\) 为 \\(Bx=0\\) 的基础解系，则它们必含于 \\(ABx=0\\) 的解集中，而 \\(ABx=0\\) 的基础解系也应含有 \\(s-r\\) 个线性无关向量，故 \\(\\xi_1,\\xi_2,\\cdots,\\xi_{s-r}\\) 也构成了 \\(ABx=0\\) 的一组基础解系，两个线性方程组基础解系完全相同，则解集必相等相。 又若 \\(r(B)=r(AB)=r=s\\)，则两个线性方程组均只有零解，自然解集也相等。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-mc-27",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 27,
    "stem": "设有三张不同平面的方程 \\(a_ix+a_iy+a_iz=b_i\\,(i=1,2,3)\\)，它们所组成的线性方程组的系数矩阵与增广矩阵的秩都为 2，则这三张平面可能的位置关系为______。",
    "options": [
      [
        "A",
        "三个平面交于一点"
      ],
      [
        "B",
        "三个平面共线（交于一条直线）"
      ],
      [
        "C",
        "两个平行平面被第三平面所截"
      ],
      [
        "D",
        "三个平面两两相交但不共线"
      ]
    ],
    "ans": "B",
    "fb": "解析：三平面方程组的系数矩阵与增广矩阵的秩都为 \\(2\\)，说明方程组有无穷多解，三平面交于同一条直线。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-28",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 28,
    "stem": "设 \\(\\boldsymbol{\\alpha}_1=\\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix},\\boldsymbol{\\alpha}_2=\\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix},\\boldsymbol{\\alpha}_3=\\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix}\\)，则三条直线 \\(\\begin{cases}a_1x+b_1y+c_1=0,\\\\a_2x+b_2y+c_2=0,\\\\a_3x+b_3y+c_3=0\\end{cases}\\) （其中 \\(a_i^2+b_i^2\\neq 0,i=1,2,3\\)）交于一点的充要条件是______。",
    "options": [
      [
        "A",
        "\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性相关"
      ],
      [
        "B",
        "\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性无关"
      ],
      [
        "C",
        "秩 \\(r(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)=\\) 秩 \\(r(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2)\\)"
      ],
      [
        "D",
        "\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3\\) 线性相关，\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2\\) 线性无关"
      ]
    ],
    "ans": "D",
    "fb": "解析：三条直线交于一点等价于对应的非齐次线性方程组有唯一解，即系数矩阵的秩与增广矩阵的秩均为 \\(2\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-29",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 29,
    "stem": "设矩阵 \\( \\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} \\) 是满秩的，则直线 \\( L_1:\\dfrac{x-a_1}{a_1-a_2}=\\dfrac{y-b_1}{b_1-b_2}=\\dfrac{z-c_1}{c_1-c_2} \\) 与直线 \\( L_2:\\dfrac{x-a_1}{a_2-a_3}=\\dfrac{y-b_1}{b_2-b_3}=\\dfrac{z-c_1}{c_2-c_3} \\) ____.",
    "options": [
      [
        "A",
        "相交于一点"
      ],
      [
        "B",
        "重合"
      ],
      [
        "C",
        "平行但不重合"
      ],
      [
        "D",
        "异面"
      ]
    ],
    "ans": "A",
    "fb": "解析：给定矩阵满秩（行列式非零），则三个向量 \\((a_1,b_1,c_1),(a_2,b_2,c_2),(a_3,b_3,c_3)\\) 线性无关。可推出两直线的方向向量不平行且两直线不相交，故为异面直线。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-proof-14",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 14,
    "stem": "已知平面上三条不同直线的方程分别为 \\( l_1:ax+2by+3c=0 \\)，\\( l_2:bx+2cy+3a=0 \\)，\\( l_3:cx+2ay+3b=0 \\)，试证这三条直线交于一点的充分必要条件是 \\( a+b+c=0 \\)。",
    "options": null,
    "ans": null,
    "fb": "证法一 必要性：设三直线 \\( l_1, l_2, l_3 \\) 交于一点，则线性方程组 \\( \\begin{cases} ax+2by=-3c \\\\ bx+2cy=-3a \\\\ cx+2ay=-3b \\end{cases} \\) 有唯一解，故系数矩阵 \\( A=\\begin{bmatrix} a & 2b \\\\ b & 2c \\\\ c & 2a \\end{bmatrix} \\) 与增广矩阵 \\( \\bar{A}=\\begin{bmatrix} a & 2b & -3c \\\\ b & 2c & -3a \\\\ c & 2a & -3b \\end{bmatrix} \\) 的秩均为 2，于是 \\(|\\bar{A}|=0\\)。由于 \\(|\\bar{A}|=6(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]\\)，而 \\((a-b)^2+(b-c)^2+(c-a)^2\\neq 0\\)，故 \\(a+b+c=0\\)。充分性：由 \\(a+b+c=0\\)，则从必要性的证明可知，\\(r(\\bar{A})\\leqslant 3\\)、\\(r(A)=2\\)，故 \\(r(A)=r(\\bar{A})=2\\)，方程组有唯一解，即三直线交于一点。 证法二 必要性：设三直线交于一点 \\((x_0, y_0)\\)，则 \\( \\begin{bmatrix} x_0 \\\\ y_0 \\\\ 1 \\end{bmatrix} \\) 为 \\(Ax=0\\) 的非零解，其中 \\( A=\\begin{bmatrix} a & 2b & 3c \\\\ b & 2c & 3a \\\\ c & 2a & 3b \\end{bmatrix} \\)，于是 \\(|A|=0\\)。计算 \\(|A|=-6(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]\\neq 0\\) 推出 \\(a+b+c=0\\)。充分性：考虑线性方程组 \\( \\begin{cases} ax+2by=-3c \\\\ bx+2cy=-3a \\\\ cx+2ay=-3b \\end{cases} \\)，将三个方程相加并由 \\(a+b+c=0\\) 可知，方程组等价于 \\( \\begin{cases} ax+2by=-3c \\\\ bx+2cy=-3a \\end{cases} \\)，由系数行列式 \\( \\begin{vmatrix} a & 2b \\\\ b & 2c \\end{vmatrix}=2(ac-b^2)\\neq 0 \\)，故方程组有唯一解，即三直线交于一点。",
    "pts": 8,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-30",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 30,
    "stem": "设 \\( A^2=E \\)，\\(E\\) 为单位矩阵，则下列正确的是 ____.",
    "options": [
      [
        "A",
        "\\(A-E\\) 可逆"
      ],
      [
        "B",
        "\\(A+E\\) 可逆"
      ],
      [
        "C",
        "\\(A\\neq E\\) 时，\\(A+E\\) 可逆"
      ],
      [
        "D",
        "\\(A\\neq E\\) 时，\\(A+E\\) 不可逆"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(A^2=E\\)，则 \\((A-E)(A+E)=0\\)。齐次方程组 \\((A-E)x=0\\) 与 \\((A+E)x=0\\) 的解空间维数之和为 \\(n\\)（因 \\(r(A-E)+r(A+E)\\le n\\) 且两解空间交集为 \\(\\{0\\}\\)）。正确结论如“两方程组的基础解系所含解向量个数之和为 \\(n\\)”。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-35",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 35,
    "stem": "已知 n 元非齐次线性方程组 \\( Ax=b \\) 有解，其中 \\(A\\) 为 \\((n+1)\\times n\\) 矩阵，则行列式 \\(|A:b|\\) = ____.",
    "options": null,
    "ans": "0",
    "fb": "解析：\\(A\\) 为 \\((n+1)\\times n\\) 矩阵，\\(Ax=b\\) 有解，故 \\(r(A)=r(A,b)\\)。而 \\((A:b)\\) 是 \\((n+1)\\times(n+1)\\) 矩阵，其秩不超过 \\(n\\)（因 \\(A\\) 至多秩 \\(n\\)），故其行列式为0。故应填 \\(0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-mc-31",
    "ch": 4,
    "src": "jingxuan",
    "type": "mc",
    "no": 31,
    "stem": "若方程 \\( a_1 x^{n-1}+a_2 x^{n-2}+\\cdots+a_{n-1}x+a_n=0 \\) 有 n 个不相等实根，则必有 ____.",
    "options": [
      [
        "A",
        "\\(a_1, a_2, \\cdots, a_n\\) 全为零"
      ],
      [
        "B",
        "\\(a_1, a_2, \\cdots, a_n\\) 不全为零"
      ],
      [
        "C",
        "\\(a_1, a_2, \\cdots, a_n\\) 全不为零"
      ],
      [
        "D",
        "\\(a_1, a_2, \\cdots, a_n\\) 为任意常数"
      ]
    ],
    "ans": "A",
    "fb": "解析：设 \\(n\\) 个不相等的实根为 \\(x_1,\\ldots,x_n\\)，则范德蒙德行列式 \\(\\prod_{i<j}(x_i-x_j)\\neq0\\)，说明向量 \\((x_i^{n-1},x_i^{n-2},\\ldots,1)\\,(i=1,\\ldots,n)\\) 线性无关，相关的系数矩阵满秩（非奇异）。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-fill-36",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 36,
    "stem": "已知三阶方阵 \\(B\\neq 0\\)，且 B 的每一个列向量都是以下方程组的解 \\[ \\begin{cases} x_1+2x_2-2x_3=0, \\\\ 2x_1-x_2+\\lambda x_3=0, \\\\ 3x_1+x_2-x_3=0. \\end{cases} \\] (1) 求 \\(\\lambda\\) 的值。 (2) 证明 \\(|B|=0\\)。",
    "options": null,
    "ans": "(1) \\(\\lambda=1\\);(2) \\(|B|=0\\)",
    "fb": "解析：(1) \\(B\\neq0\\) 的每一列都是该齐次方程组的解，说明方程组有非零解，故系数矩阵行列式为0：\\(\\begin{vmatrix}1&2&-2\\\\2&-1&\\lambda\\\\3&1&-1\\end{vmatrix}=5(\\lambda-1)\\)，解得 \\(\\lambda=1\\)。(2) 因 \\(Ax=0\\) 有非零解（\\(B\\) 的列是非零解），系数矩阵降秩；又 \\(AB=0\\) 且 \\(B\\) 为三阶，若 \\(\\lvert B\\rvert\\neq0\\) 则可逆，推出 \\(A=0\\)，与系数矩阵非零矛盾，故 \\(\\lvert B\\rvert=0\\)。故应填 (1) \\(\\lambda=1\\)；(2) \\(\\lvert B\\rvert=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c4-jx-fill-37",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 37,
    "stem": "设 \\( \\alpha=\\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\beta=\\begin{bmatrix} 1 \\\\ \\tfrac{1}{2} \\\\ 0 \\end{bmatrix}, \\gamma=\\begin{bmatrix} 0 \\\\ 0 \\\\ 8 \\end{bmatrix}, A=\\alpha\\beta^T, B=\\beta^T\\alpha \\)，其中 \\(\\beta^T\\) 是 \\(\\beta\\) 的转置，求解方程 \\[ 2B^T A^T X = A^T X + B^T X + \\gamma. \\]",
    "options": null,
    "ans": "\\( X = k\\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ 0 \\\\ -\\tfrac{1}{2} \\end{bmatrix} \\)，其中 k 为任意常数",
    "fb": "解析：由 \\(\\alpha=(1,2,1)^T,\\ \\beta=(1,\\tfrac12,0)^T\\) 得 \\(A=\\alpha\\beta^T,\\ B=\\beta^T\\alpha=2\\)。原方程化为 \\((3A^T-2I)X=\\gamma\\)。解此方程得通解 \\(X=k(1,2,1)^T+(0,0,-\\tfrac12)^T\\)（\\(k\\) 为任意常数）。故应填 \\(X = k\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix} + \\begin{bmatrix}0\\\\0\\\\-\\tfrac{1}{2}\\end{bmatrix}\\)（\\(k\\) 为任意常数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s42"
  },
  {
    "id": "c4-jx-proof-15",
    "ch": 4,
    "src": "jingxuan",
    "type": "proof",
    "no": 15,
    "stem": "设 A 为 \\(m\\times n\\) 矩阵，秩为 m；B 为 \\(n\\times(n-m)\\) 矩阵，秩为 n-m；又知 \\(AB=0\\)，\\(\\alpha\\) 是满足条件 \\(A\\alpha=0\\) 的一个 n 维列向量。证明：存在唯一的一个 n-m 维列向量 \\(\\beta\\)，使得 \\(\\alpha=B\\beta\\)。",
    "options": null,
    "ans": null,
    "fb": "证 设 \\(\\eta_1, \\eta_2, \\cdots, \\eta_{n-m}\\) 是矩阵 B 的 n-m 个列向量，由于 \\(r(B)=n-m\\)，所以 \\(\\eta_1, \\eta_2, \\cdots, \\eta_{n-m}\\) 线性无关。又由 \\(AB=0\\)，可知 \\(A\\eta_i=0\\,(i=1,2,\\cdots,n-m)\\)，从而 \\(\\eta_1, \\eta_2, \\cdots, \\eta_{n-m}\\) 是方程组 \\(Ax=0\\) 的 n-m 个线性无关的解向量。又因为 \\(r(A)=m\\)，所以方程组 \\(Ax=0\\) 的基础解系含有 n-m 个解向量。综上可知矩阵 B 的 n-m 个列向量 \\(\\eta_1, \\eta_2, \\cdots, \\eta_{n-m}\\) 是方程组 \\(Ax=0\\) 的基础解系。因为 \\(A\\alpha=0\\)，所以 \\(\\alpha\\) 是方程 \\(Ax=0\\) 的解向量，从而存在一组数 \\(k_1, k_2, \\cdots, k_{n-m}\\) 使 \\[ \\alpha = k_1\\eta_1+k_2\\eta_2+\\cdots+k_{n-m}\\eta_{n-m} = (\\eta_1, \\eta_2, \\cdots, \\eta_{n-m})(k_1, k_2, \\cdots, k_{n-m})^T = B\\beta. \\] 取 \\(\\beta=(k_1, k_2, \\cdots, k_{n-m})^T\\)，则 \\(\\alpha=B\\beta\\)。最后证明唯一性。假设 \\(\\beta_1, \\beta_2\\) 是两个 n-m 维列向量，满足 \\(\\alpha=B\\beta_1, \\alpha=B\\beta_2\\)，则 \\(B(\\beta_1-\\beta_2)=0\\)，又因为 \\(r(B)=n-m\\)，所以方程组 \\(Bx=0\\) 只有零解，从而 \\(\\beta_1-\\beta_2=0\\)，即 \\(\\beta_1=\\beta_2\\)，所以满足 \\(\\alpha=B\\beta\\) 的 n-m 维列向量 \\(\\beta\\) 是唯一的。",
    "pts": 8,
    "diff": 2,
    "sec": "s43"
  },
  {
    "id": "c4-jx-fill-38",
    "ch": 4,
    "src": "jingxuan",
    "type": "fill",
    "no": 38,
    "stem": "设 B 是秩为 2 的 \\(5\\times 4\\) 矩阵，\\( \\alpha_1=(1,1,2,3)^T, \\alpha_2=(-1,1,4,-1)^T, \\alpha_3=(5,-1,-8,9)^T \\) 是齐次线性方程组 \\(Bx=0\\) 的解向量，求 \\(Bx=0\\) 解空间的一个标准正交基。",
    "options": null,
    "ans": "\\( \\varepsilon_1=\\dfrac{1}{\\sqrt{15}}(1,1,2,3)^T, \\varepsilon_2=\\dfrac{1}{\\sqrt{39}}(-2,1,5,-3)^T \\)",
    "fb": "解析：\\(B\\) 为 \\(5\\times4\\) 秩2矩阵，故 \\(Bx=0\\) 的解空间维数为 \\(4-2=2\\)。已知 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 是其解，且 \\(\\alpha_3=2\\alpha_1-3\\alpha_2\\)，故解空间由 \\(\\alpha_1,\\alpha_2\\) 张成。施密特正交化：取 \\(u_1=\\alpha_1=(1,1,2,3)^T\\)，\\(u_2=\\alpha_2-\\frac{\\alpha_2\\cdot u_1}{u_1\\cdot u_1}u_1=(-4,2,10,-6)^T\\)。单位化得 \\(\\varepsilon_1=\\frac{1}{\\sqrt{15}}(1,1,2,3)^T,\\ \\varepsilon_2=\\frac{1}{\\sqrt{39}}(-2,1,5,-3)^T\\)。故应填 \\(\\varepsilon_1=\\dfrac{1}{\\sqrt{15}}(1,1,2,3)^T,\\ \\varepsilon_2=\\dfrac{1}{\\sqrt{39}}(-2,1,5,-3)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s41"
  },
  {
    "id": "c5-jx-fill-1",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 1,
    "stem": "矩阵 \\( A = \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 1 & 1 & 1 & 1 \\\\ 1 & 1 & 1 & 1 \\\\ 1 & 1 & 1 & 1 \\end{bmatrix} \\) 的非零特征值是______.",
    "options": null,
    "ans": "4",
    "fb": "解析：\\(A\\) 的每行元素和均为 \\(4\\)，且 \\(A\\) 秩为 \\(1\\)，故唯一非零特征值为 \\(4\\)。故应填 \\(4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-2",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 2,
    "stem": "矩阵 \\( A = \\begin{bmatrix} 0 & -2 & -2 \\\\ 2 & 2 & -2 \\\\ -2 & -2 & 2 \\end{bmatrix} \\) 的非零特征值是______.",
    "options": null,
    "ans": "4",
    "fb": "解析：\\(A=\\begin{pmatrix}0&-2&-2\\\\2&2&-2\\\\-2&-2&2\\end{pmatrix}\\)，特征多项式为 \\(-\\lambda^3+4\\lambda^2=0\\)，特征值为 \\(0,0,4\\)，故唯一非零特征值为 \\(4\\)。故应填 \\(4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-3",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 3,
    "stem": "设 n 阶矩阵 A 的元素全为 1，则 A 的 n 个特征值是______.",
    "options": null,
    "ans": "n, 0, 0, \\ldots, 0 (n-1 个 0)",
    "fb": "解析：元素全为 \\(1\\) 的 \\(n\\) 阶矩阵秩为 \\(1\\)，每行元素和均为 \\(n\\)，故特征值为 \\(n\\)（一重）与 \\(0\\)（\\(n-1\\) 重）。故应填 \\(n,0,0,\\ldots,0\\)（\\(n-1\\) 个 \\(0\\)）。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-4",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 4,
    "stem": "已知 \\( \\lambda_1 = 0 \\) 是三阶矩阵 \\( A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & a \\end{bmatrix} \\) 的特征值，则 a = ______，其他特征值 \\( \\lambda_2 = \\) ______，\\( \\lambda_3 = \\) ______.",
    "options": null,
    "ans": "a = 1, \\( \\lambda_2 = \\lambda_3 = 2 \\)",
    "fb": "解析：\\(\\lambda_1=0\\) 是特征值，故 \\(|A|=0\\)。\\(|A|=2a-2=0\\Rightarrow a=1\\)。此时 \\(A=\\begin{pmatrix}1&0&1\\\\0&2&0\\\\1&0&1\\end{pmatrix}\\)，其特征值为 \\(0,2,2\\)。故应填 \\(a=1,\\ \\lambda_2=\\lambda_3=2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-5",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 5,
    "stem": "若 n 阶可逆矩阵 A 的每行元素之和均为 a（\\( a \\neq 0 \\)），则数______一定是矩阵 \\( 2A^{-1} + 3E \\) 的特征值，其中 E 为 n 阶单位矩阵.",
    "options": null,
    "ans": "\\( \\dfrac{2}{a} + 3 \\)",
    "fb": "解析：\\(A\\) 每行元素和为 \\(a\\)，即 \\(A(1,1,\\ldots,1)^T=a(1,\\ldots,1)^T\\)，故 \\(a\\) 是 \\(A\\) 的特征值。于是 \\((2A^{-1}+3E)\\) 作用于该向量得 \\((2/a+3)\\) 倍，故 \\(2/a+3\\) 是其一个特征值。故应填 \\(\\dfrac{2}{a}+3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-calc-1",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 1,
    "stem": "求下列矩阵的特征值及对应的特征向量. (1) \\( \\begin{bmatrix} 0 & -1 & -1 \\\\ -1 & 0 & -1 \\\\ -1 & -1 & 0 \\end{bmatrix} \\); (2) \\( \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix} \\); (3) \\( \\begin{bmatrix} 0 & \\dfrac{1}{2} & \\dfrac{1}{2} \\\\ 1 & -\\dfrac{1}{2} & \\dfrac{1}{2} \\\\ 1 & -\\dfrac{1}{2} & \\dfrac{1}{2} \\end{bmatrix} \\).",
    "options": null,
    "ans": null,
    "fb": "(1) 由 \\( |\\lambda E - A| = \\begin{vmatrix} \\lambda & 1 & 1 \\\\ 1 & \\lambda & 1 \\\\ 1 & 1 & \\lambda \\end{vmatrix} = (\\lambda+2)(\\lambda-1)^2 = 0 \\)，可求得特征值为 \\(-2\\) 和 \\(1\\). 对 \\( \\lambda = -2 \\)，将之代入 \\( (\\lambda E - A)x = 0 \\)，解得基础解系为 \\( (1,1,1)^T \\)，所以属于特征值 \\(-2\\) 的全部特征向量为 \\( k(1,1,1)^T \\). 对 \\( \\lambda = 1 \\)，解得基础解系为 \\( (-1,1,0)^T, (-1,0,1)^T \\)，所以属于特征值 \\(1\\) 的全部特征向量为 \\( k_1(-1,1,0)^T + k_2(-1,0,1)^T \\). (2) 由 \\( |\\lambda E - A| = \\begin{vmatrix} \\lambda & -1 & 0 \\\\ 0 & \\lambda & -1 \\\\ 0 & 0 & \\lambda \\end{vmatrix} = \\lambda^3 = 0 \\)，可求得特征值为 \\(0\\). 解 \\( (\\lambda E - A)x = 0 \\) 得基础解系 \\( (1,0,0)^T \\)，所以矩阵 A 的属于特征值 \\(0\\) 的全部特征向量为 \\( k(1,0,0)^T \\). (3) 由 \\( |\\lambda E - A| = \\lambda(\\lambda-1)(\\lambda+1) = 0 \\)，可求得特征值为 \\(0, -1, 1\\). 对 \\( \\lambda = 0 \\)，解得基础解系 \\( (-1,-1,1)^T \\)；对 \\( \\lambda = -1 \\)，解得基础解系 \\( (-2,2,2)^T \\)；对 \\( \\lambda = 1 \\)，解得基础解系 \\( (1,1,1)^T \\). 所以对应特征向量分别为 \\( k(-1,-1,1)^T, k(-2,2,2)^T, k(1,1,1)^T \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-calc-2",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 2,
    "stem": "已知 \\( A = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix} \\)，求 A 的特征值和特征向量.",
    "options": null,
    "ans": null,
    "fb": "由 \\( |\\lambda E - A| = \\begin{vmatrix} \\lambda & -1 \\\\ 1 & \\lambda \\end{vmatrix} = \\lambda^2 + 1 = (\\lambda+i)(\\lambda-i) = 0 \\)，解得 \\( \\lambda_1 = -i, \\lambda_2 = i \\). 对于 \\( \\lambda_1 = -i \\)，解 \\( (-i E - A)x = 0 \\) 得基础解系为 \\( \\begin{bmatrix} i \\\\ 1 \\end{bmatrix} \\)，于是 \\( k_1 \\begin{bmatrix} i \\\\ 1 \\end{bmatrix} \\) 为属于特征值 \\(-i\\) 的全部特征向量（其中 \\( k_1 \\) 为任意非零常数）. 对于 \\( \\lambda_2 = i \\)，解 \\( (iE - A)x = 0 \\) 得基础解系为 \\( \\begin{bmatrix} -i \\\\ 1 \\end{bmatrix} \\)，于是 \\( k_2 \\begin{bmatrix} -i \\\\ 1 \\end{bmatrix} \\) 为属于特征值 \\(i\\) 的全部特征向量（其中 \\( k_2 \\) 为任意非零常数）. 点评：若本题限制在实数范围内求 A 的特征值和特征向量，则 A 就没有特征值和特征向量，因为此时特征方程 \\( \\lambda^2 + 1 = 0 \\) 无实根.",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-6",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 6,
    "stem": "已知三阶矩阵 A 的特征值为 1, -1, 2，则矩阵 \\( B = 2A + E \\)（E 为三阶单位阵）的特征值为______.",
    "options": null,
    "ans": "3, -1, 5",
    "fb": "解析：若 \\(A\\) 的特征值为 \\(\\lambda\\)，则 \\(2A+E\\) 的特征值为 \\(2\\lambda+1\\)。由 \\(1,-1,2\\) 得 \\(3,-1,5\\)。故应填 \\(3,-1,5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-7",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 7,
    "stem": "已知三阶方阵 A 的三个特征值为 1, -2, 3，则 \\( |A| = \\) ______，\\( A^{-1} \\) 的特征值是______，A 的伴随矩阵 \\( A^* \\) 的特征值是______，\\( A^2 + 2A + E \\) 的特征值是______.",
    "options": null,
    "ans": "\\( |A| = -6 \\)；\\( A^{-1} \\) 的特征值：1, -\\dfrac{1}{2}, \\dfrac{1}{3}；\\( A^* \\) 的特征值：-6, 3, -2；\\( A^2 + 2A + E \\) 的特征值：4, 1, 16",
    "fb": "解析：\\(|A|=1\\cdot(-2)\\cdot3=-6\\)。\\(A^{-1}\\) 特征值 \\(1,-1/2,1/3\\)；\\(A^*=|A|A^{-1}\\) 特征值 \\(-6,3,-2\\)；\\(A^2+2A+E\\) 的特征值为 \\((\\lambda+1)^2\\)，即 \\(4,1,16\\)。故应填 \\(|A|=-6\\)，\\(A^{-1}\\!:\\ 1,-1/2,1/3\\)，\\(A^*\\!:\\ -6,3,-2\\)，\\(A^2+2A+E\\!:\\ 4,1,16\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-8",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 8,
    "stem": "若 \\( A^2 = E \\)，则 A 的特征值是______.",
    "options": null,
    "ans": "1 或 -1",
    "fb": "解析：由 \\(A^2=E\\) 得特征值 \\(\\lambda\\) 满足 \\(\\lambda^2=1\\)，故 \\(\\lambda=1\\) 或 \\(-1\\)。故应填 \\(1\\) 或 \\(-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-9",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 9,
    "stem": "已知四阶方阵 A，\\( |A| = 2 \\)，又知 \\( 2A + E \\) 不可逆，则 \\( A^* - E \\) 的一个特征值 \\( \\lambda = \\) ______.",
    "options": null,
    "ans": "-5",
    "fb": "解析：\\(2A+E\\) 不可逆 \\(\\Rightarrow |2A+E|=0\\Rightarrow A\\) 有特征值 \\(-1/2\\)，于是 \\(A^*\\) 的对应特征值为 \\(|A|/(-1/2)=2/(-1/2)=-4\\)，故 \\(A^*-E\\) 的对应特征值为 \\(-4-1=-5\\)。故应填 \\(-5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-10",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 10,
    "stem": "设 A 是四阶矩阵，伴随矩阵 \\( A^* \\) 的特征值为 1, -2, -4, 8，则 A 的特征值是______.",
    "options": null,
    "ans": "4, -2, -1, \\dfrac{1}{2}",
    "fb": "解析：\\(A^*\\) 特征值为 \\(1,-2,-4,8\\)，故 \\(|A^*|=1\\cdot(-2)\\cdot(-4)\\cdot8=64=|A|^{4-1}=|A|^3\\)，得 \\(|A|=4\\)。\\(A\\) 的特征值 \\(\\lambda_i\\) 满足 \\(|A|/\\lambda_i=(A^*)_i\\)，即 \\(4/\\lambda_1=1,\\ 4/\\lambda_2=-2,\\ 4/\\lambda_3=-4,\\ 4/\\lambda_4=8\\)，得 \\(\\lambda=4,-2,-1,1/2\\)。故应填 \\(4,-2,-1,1/2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-1",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 1,
    "stem": "设 A 为 n 阶方阵，以下结论中不成立的是______. (A) 若 A 可逆，则矩阵 A 的属于特征值 \\( \\lambda \\) 的特征向量也是矩阵 \\( A^{-1} \\) 的属于特征值 \\( \\dfrac{1}{\\lambda} \\) 的特征向量 (B) A 的特征向量即为方程 \\( (\\lambda E - A)x = 0 \\) 的全部解 (C) 若 A 存在属于特征值 \\( \\lambda \\) 的 n 个线性无关的特征向量，则 \\( A = \\lambda E \\) (D) A 与 \\( A^T \\) 有相同的特征值",
    "options": [
      [
        "A",
        "若 A 可逆，则矩阵 A 的属于特征值 λ 的特征向量也是矩阵 A⁻¹ 的属于特征值 1/λ 的特征向量"
      ],
      [
        "B",
        "A 的特征向量即为方程 (λE−A)x=0 的全部解"
      ],
      [
        "C",
        "若 A 存在属于特征值 λ 的 n 个线性无关的特征向量，则 A=λE"
      ],
      [
        "D",
        "A 与 Aᵀ 有相同的特征值"
      ]
    ],
    "ans": "B",
    "fb": "解析：特征向量是 \\((\\lambda E-A)x=0\\) 的“非零解”，而非全部解（零解不是特征向量），故 (B) 错误。其余正确：可逆时 \\(A\\) 与 \\(A^{-1}\\) 共特征向量且特征值取倒数；有 \\(n\\) 个属于 \\(\\lambda\\) 的无关特征向量时 \\(A=\\lambda E\\)；\\(A\\) 与 \\(A^T\\) 特征多项式相同。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-2",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 2,
    "stem": "设 A 是 n 阶矩阵，\\( \\lambda_1, \\lambda_2 \\) 是 A 的特征值，\\( \\xi_1, \\xi_2 \\) 是 A 的分别属于 \\( \\lambda_1, \\lambda_2 \\) 的特征向量，下列结论中正确的是______. (A) 若 \\( \\lambda_1 = \\lambda_2 \\)，则 \\( \\xi_1 \\) 与 \\( \\xi_2 \\) 对应分量成比例 (B) 若 \\( \\lambda_1 \\neq \\lambda_2 \\)，且 \\( \\lambda_3 = \\lambda_1 + \\lambda_2 \\) 也是 A 的特征值，则对应的特征向量是 \\( \\xi_1 + \\xi_2 \\) (C) 若 \\( \\lambda_1 \\neq \\lambda_2 \\)，则 \\( \\xi_1 + \\xi_2 \\) 不可能是 A 的特征向量 (D) 若 \\( \\lambda_1 = 0 \\)，则 \\( \\xi_1 = 0 \\)",
    "options": [
      [
        "A",
        "若 λ₁=λ₂，则 ξ₁ 与 ξ₂ 对应分量成比例"
      ],
      [
        "B",
        "若 λ₁≠λ₂ 且 λ₃=λ₁+λ₂ 也是 A 的特征值，则对应的特征向量是 ξ₁+ξ₂"
      ],
      [
        "C",
        "若 λ₁≠λ₂，则 ξ₁+ξ₂ 不可能是 A 的特征向量"
      ],
      [
        "D",
        "若 λ₁=0，则 ξ₁=0"
      ]
    ],
    "ans": "C",
    "fb": "解析：不同特征值的特征向量线性无关，其和 \\(\\xi_1+\\xi_2\\) 不可能再是 \\(A\\) 的特征向量（否则与 \\(\\lambda_1\\neq\\lambda_2\\) 矛盾）。A 错（同特征值的不同特征向量未必成比例）；B 错（\\(\\lambda_3\\) 的特征向量未必是 \\(\\xi_1+\\xi_2\\)）；D 错（特征向量非零）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-3",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 3,
    "stem": "下列结论正确的是______. (A) 若 \\( \\alpha_1, \\alpha_2 \\) 是 \\( (\\lambda E - A)x = 0 \\) 的一个基础解系，则 \\( k_1 \\alpha_1 + k_2 \\alpha_2 \\) 是 A 属于 \\( \\lambda \\) 的全部特征向量，其中 \\( k_1, k_2 \\) 全不为零 (B) 若 x 是 A 的属于特征值 \\( \\lambda \\) 的特征向量，则对任意可逆矩阵 P，x 也是 \\( B = P^{-1} A P \\) 的属于特征值 \\( \\lambda \\) 的特征向量 (C) 若 \\( |A| = 0 \\)，则至少有一个特征值 0 (D) 若 \\( \\lambda \\) 同为 A, B 的特征值，则 \\( \\lambda \\) 也是 \\( A + B \\) 的特征值",
    "options": [
      [
        "A",
        "若 α₁,α₂ 是 (λE−A)x=0 的一个基础解系，则 k₁α₁+k₂α₂ 是 A 属于 λ 的全部特征向量（k₁,k₂ 全不为零）"
      ],
      [
        "B",
        "若 x 是 A 的属于特征值 λ 的特征向量，则对任意可逆矩阵 P，x 也是 B=P⁻¹AP 的属于特征值 λ 的特征向量"
      ],
      [
        "C",
        "若 |A|=0，则至少有一个特征值 0"
      ],
      [
        "D",
        "若 λ 同为 A,B 的特征值，则 λ 也是 A+B 的特征值"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(|A|=0\\Rightarrow 0\\) 是特征值，正确。A 错（基础解系的非零线性组合才是全部特征向量，系数应不全为零）；B 错（相似变换改变特征向量）；D 错（特征值不可简单相加）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-4",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 4,
    "stem": "设 \\( \\lambda_1 \\) 与 \\( \\lambda_2 \\) 是矩阵 A 的两个不同的特征值，\\( \\xi, \\eta \\) 是 A 的分别属于 \\( \\lambda_1, \\lambda_2 \\) 的特征向量，则下列结论成立的是______. (A) 对任意 \\( k_1 \\neq 0, k_2 \\neq 0 \\)，\\( k_1 \\xi + k_2 \\eta \\) 都是 A 的特征向量 (B) 存在常数 \\( k_1 \\neq 0, k_2 \\neq 0 \\)，\\( k_1 \\xi + k_2 \\eta \\) 是 A 的特征向量 (C) 当 \\( k_1 \\neq 0, k_2 \\neq 0 \\) 时，\\( k_1 \\xi + k_2 \\eta \\) 不可能是 A 的特征向量 (D) 存在唯一的一组常数 \\( k_1 \\neq 0, k_2 \\neq 0 \\)，使 \\( k_1 \\xi + k_2 \\eta \\) 是 A 的特征向量",
    "options": [
      [
        "A",
        "对任意 k₁≠0, k₂≠0, k₁ξ+k₂η 都是 A 的特征向量"
      ],
      [
        "B",
        "存在常数 k₁≠0, k₂≠0, k₁ξ+k₂η 是 A 的特征向量"
      ],
      [
        "C",
        "当 k₁≠0, k₂≠0 时, k₁ξ+k₂η 不可能是 A 的特征向量"
      ],
      [
        "D",
        "存在唯一的一组常数 k₁≠0, k₂≠0, 使 k₁ξ+k₂η 是 A 的特征向量"
      ]
    ],
    "ans": "C",
    "fb": "解析：属于不同特征值的特征向量的非零线性组合不可能是特征向量（因 \\(A(k_1\\xi+k_2\\eta)=k_1\\lambda_1\\xi+k_2\\lambda_2\\eta\\) 与 \\(k_1\\xi+k_2\\eta\\) 共线当且仅当 \\(\\lambda_1=\\lambda_2\\)）。故当 \\(k_1,k_2\\neq0\\) 时必不是特征向量。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-5",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 5,
    "stem": "设 \\( \\lambda_0 \\) 是 n 阶矩阵 A 的特征值，且齐次线性方程组 \\( (\\lambda_0 E - A)x = 0 \\) 的基础解系为 \\( \\alpha_1, \\alpha_2 \\)，则 A 的属于 \\( \\lambda_0 \\) 的全部特征向量为______. (A) \\( \\alpha_1 \\) 和 \\( \\alpha_2 \\) (B) \\( \\alpha_1 \\) 或 \\( \\alpha_2 \\) (C) \\( c_1 \\alpha_1 + c_2 \\alpha_2 \\)（\\( c_1, c_2 \\) 不全为零） (D) \\( c_1 \\alpha_1 + c_2 \\alpha_2 \\)（\\( c_1, c_2 \\) 全不为零）",
    "options": [
      [
        "A",
        "α₁ 和 α₂"
      ],
      [
        "B",
        "α₁ 或 α₂"
      ],
      [
        "C",
        "c₁α₁+c₂α₂（c₁,c₂ 不全为零）"
      ],
      [
        "D",
        "c₁α₁+c₂α₂（c₁,c₂ 全不为零）"
      ]
    ],
    "ans": "C",
    "fb": "解析：属于 \\(\\lambda_0\\) 的全部特征向量是 \\((\\lambda_0E-A)x=0\\) 解空间中的非零向量，即基础解系 \\(c_1\\alpha_1+c_2\\alpha_2\\)（\\(c_1,c_2\\) 不全为零）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-6",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 6,
    "stem": "设 A 是 n 阶实对称矩阵，P 是 n 阶可逆矩阵. 已知 n 维列向量 \\( \\alpha \\) 是 A 的属于特征值 \\( \\lambda \\) 的特征向量，则矩阵 \\( (P^{-1} A P)^T \\) 属于特征值 \\( \\lambda \\) 的特征向量是______. (A) \\( P^{-1} \\alpha \\) (B) \\( P^T \\alpha \\) (C) \\( P \\alpha \\) (D) \\( (P^{-1})^T \\alpha \\)",
    "options": [
      [
        "A",
        "P⁻¹α"
      ],
      [
        "B",
        "Pᵀα"
      ],
      [
        "C",
        "Pα"
      ],
      [
        "D",
        "(P⁻¹)ᵀα"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A\\alpha=\\lambda\\alpha\\)。考虑 \\((P^{-1}AP)^T=P^TA^T(P^{-1})^T=P^TA(P^T)^{-1}\\)。令 \\(\\beta=P^T\\alpha\\)，则 \\((P^{-1}AP)^T\\beta=P^TA(P^T)^{-1}P^T\\alpha=P^TA\\alpha=\\lambda(P^T\\alpha)=\\lambda\\beta\\)。故为 \\(P^T\\alpha\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-3",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 3,
    "stem": "设 A 的特征值为 \\( \\lambda \\)，A 的属于 \\( \\lambda \\) 的特征向量为 x，求 \\( 5A, A^2, A^2 + 5A + E \\) 的特征值和特征向量，并求 \\( A^T \\) 的特征值.",
    "options": null,
    "ans": null,
    "fb": "由已知 \\( Ax = \\lambda x \\)（\\( x \\neq 0 \\)）. 两边乘 5，得 \\( 5Ax = 5\\lambda x \\)，故得 \\( 5\\lambda \\) 是 \\( 5A \\) 的特征值，特征向量不变，仍为 x. 对原式两边左乘 A，得 \\( A^2 x = \\lambda A x = \\lambda^2 x \\)，故得 \\( \\lambda^2 \\) 是 \\( A^2 \\) 的特征值，特征向量不变. 由 \\( 5Ax = 5\\lambda x, A^2 x = \\lambda^2 x, Ex = x \\) 三式相加，得 \\( (A^2 + 5A + E)x = (\\lambda^2 + 5\\lambda + 1)x \\)，故得 \\( \\lambda^2 + 5\\lambda + 1 \\) 是 \\( A^2 + 5A + E \\) 的特征值，特征向量不变. 又 \\( |\\lambda E - A| = |(\\lambda E - A)^T| = |\\lambda E - A^T| \\)，故 \\( A^T \\) 的特征值即为 A 的特征值.",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-11",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 11,
    "stem": "设有四阶方阵 A 满足条件 \\( |\\sqrt{2} E + A| = 0, AA^T = 2E, |A| < 0 \\)，其中 E 是四阶单位阵. 求方阵 A 的伴随矩阵 \\( A^* \\) 的一个特征值.",
    "options": null,
    "ans": "A* 的一个特征值为 \\( 2\\sqrt{2} \\).",
    "fb": "解析：\\(|\\sqrt2\\,E+A|=0\\Rightarrow A\\) 有特征值 \\(-\\sqrt2\\)；\\(AA^T=2E\\Rightarrow |A|^2=2^4=16\\)，又 \\(|A|<0\\) 得 \\(|A|=-4\\)；故 \\(A^*\\) 的对应特征值 \\(=|A|/\\lambda=(-4)/(-\\sqrt2)=2\\sqrt2\\)。故应填 \\(A^*\\) 的一个特征值为 \\(2\\sqrt2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-calc-4",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 4,
    "stem": "设向量 \\( \\alpha=(a_1,a_2,\\cdots,a_n)^T \\)，\\( \\beta=(b_1,b_2,\\cdots,b_n)^T \\) 都是非零向量，且满足条件 \\( \\alpha^T \\beta=0 \\)。记 \\( n \\) 阶矩阵 \\( A=\\alpha\\beta^T \\)，求：(1) \\( A^2 \\)；(2) 矩阵 \\( A \\) 的特征值和特征向量。",
    "options": null,
    "ans": null,
    "fb": "(1) 由 \\( A=\\alpha\\beta^T \\) 与 \\( \\alpha^T\\beta=0 \\)，有 \\( A^2=AA=(\\alpha\\beta^T)(\\alpha\\beta^T)=\\alpha(\\beta^T\\alpha)\\beta^T=(\\alpha^T\\beta)\\alpha\\beta^T=0 \\)。(2) 设 \\( \\lambda \\) 为 \\( A \\) 的任一特征值，\\( A \\) 的属于特征值 \\( \\lambda \\) 的特征向量为 \\( x(x\\neq\\theta) \\)，则 \\( Ax=\\lambda x \\)，于是 \\( A^2x=\\lambda Ax=\\lambda^2 x \\)。因为 \\( A^2=0 \\)，所以 \\( \\lambda^2 x=0 \\)，又因 \\( x\\neq\\theta \\)，故 \\( \\lambda=0 \\)，即矩阵 \\( A \\) 的特征值全为零。不妨设向量 \\( \\alpha,\\beta \\) 中分量 \\( a_1\\neq 0, b_1\\neq 0 \\)，对方次线性方程组 \\( (0E-A)x=0 \\) 的系数矩阵施以初等行变换得基础解系 \\( \\alpha_1=(-b_1/b_1,1,0,\\cdots,0)^T,\\alpha_2=(-b_2/b_1,0,1,\\cdots,0)^T,\\cdots,\\alpha_{n-1}=(-b_n/b_1,0,0,\\cdots,1)^T \\)，于是 \\( A \\) 的属于特征值 \\( \\lambda=0 \\) 的全部特征向量为 \\( c_1\\alpha_1+c_2\\alpha_2+\\cdots+c_{n-1}\\alpha_{n-1} \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-12",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 12,
    "stem": "若 \\( n \\) 阶矩阵 \\( A \\) 有 \\( n \\) 个属于特征值 \\( \\lambda_0 \\) 的线性无关的特征向量，则 \\( A= \\) ______。",
    "options": null,
    "ans": "\\( \\lambda_0 E \\)",
    "fb": "解析：\\(n\\) 阶矩阵 \\(A\\) 有 \\(n\\) 个属于 \\(\\lambda_0\\) 的线性无关特征向量，即 \\(A\\) 可对角化为 \\(\\lambda_0E\\)，故 \\(A=\\lambda_0E\\)。故应填 \\(\\lambda_0E\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-13",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 13,
    "stem": "已知三阶对称矩阵 \\( A \\) 的一个特征值 \\( \\lambda=2 \\)，对应的特征向量 \\( \\alpha=(1,2,-1)^T \\)，且 \\( A \\) 的主对角线上元素全为零，则 \\( A= \\) ______。",
    "options": null,
    "ans": "\\( \\begin{bmatrix} 0 & 2 & 2 \\\\ 2 & 0 & -2 \\\\ 2 & -2 & 0 \\end{bmatrix} \\)",
    "fb": "解析：设 \\(A=\\begin{pmatrix}0&a&b\\\\a&0&c\\\\b&c&0\\end{pmatrix}\\)。由 \\(A(1,2,-1)^T=2(1,2,-1)^T\\) 得方程组 \\(2a-b=2,\\ a-c=4,\\ b+2c=-2\\)，解得 \\(a=2,b=2,c=-2\\)。故应填 \\(\\begin{bmatrix}0&2&2\\\\2&0&-2\\\\2&-2&0\\end{bmatrix}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-14",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 14,
    "stem": "设三阶矩阵 \\( A \\) 满足 \\( A\\alpha_i=i\\alpha_i \\)（\\( i=1,2,3 \\)），其中列向量 \\( \\alpha_1=(1,2,2)^T,\\ \\alpha_2=(2,-2,1)^T,\\ \\alpha_3=(-2,-1,2)^T \\)，试求矩阵 \\( A \\)。",
    "options": null,
    "ans": "\\( A=\\begin{bmatrix} \\dfrac{7}{3} & 0 & -\\dfrac{2}{3} \\\\ 0 & \\dfrac{5}{3} & -\\dfrac{2}{3} \\\\ -\\dfrac{2}{3} & -\\dfrac{2}{3} & 2 \\end{bmatrix} \\)",
    "fb": "解析：令 \\(P=(\\alpha_1,\\alpha_2,\\alpha_3)\\)，则 \\(AP=P\\operatorname{diag}(1,2,3)\\)，故 \\(A=P\\operatorname{diag}(1,2,3)P^{-1}\\)。代入 \\(\\alpha_1=(1,2,2)^T,\\alpha_2=(2,-2,1)^T,\\alpha_3=(-2,-1,2)^T\\) 计算得 \\(A=\\begin{bmatrix}7/3&0&-2/3\\\\0&5/3&-2/3\\\\-2/3&-2/3&2\\end{bmatrix}\\)。故应填该矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-15",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 15,
    "stem": "设三阶矩阵 \\( A \\) 的特征值为 \\( 1,2,3 \\)，对应的特征向量分别为 \\( \\alpha_1=(1,1,1)^T,\\ \\alpha_2=(1,2,4)^T,\\ \\alpha_3=(1,3,9)^T \\)，令 \\( \\beta=(1,1,3)^T \\)，求 \\( A^n \\beta \\)。",
    "options": null,
    "ans": "\\( A^n \\beta=\\begin{bmatrix} -2+2^{n+1}+3^{n+1} \\\\ 2-2^{n+2}+3^{n+1} \\\\ 2-2^{n+3}+3^{n+2} \\end{bmatrix} \\)",
    "fb": "解析：令 \\(P=(\\alpha_1,\\alpha_2,\\alpha_3)\\)，则 \\(A=P\\operatorname{diag}(1,2,3)P^{-1}\\)。将 \\(\\beta=(1,1,3)^T\\) 表示为 \\(\\beta=2\\alpha_1-2\\alpha_2+\\alpha_3\\)，故 \\(A^n\\beta=2\\cdot1^n\\alpha_1-2\\cdot2^n\\alpha_2+1\\cdot3^n\\alpha_3=\\begin{bmatrix}2-2^{n+1}+3^n\\\\2-2^{n+2}+3^{n+1}\\\\2-2^{n+3}+3^{n+2}\\end{bmatrix}\\)。故应填该向量。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-16",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 16,
    "stem": "已知三阶矩阵 \\( A=\\begin{bmatrix} 7 & 4 & -1 \\\\ 4 & 7 & -1 \\\\ -4 & -4 & x \\end{bmatrix} \\) 有特征值 \\( \\lambda_1=\\lambda_2=3,\\ \\lambda_3=12 \\)，则 \\( x= \\) ______。",
    "options": null,
    "ans": "4",
    "fb": "解析：特征值之和等于迹，故 \\(3+3+12=18=7+7+x\\)，得 \\(x=4\\)。故应填 \\(4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-17",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 17,
    "stem": "已知向量 \\( \\alpha=(1,k,1)^T \\) 是矩阵 \\( A=\\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix} \\) 的逆矩阵 \\( A^{-1} \\) 的特征向量，则常数 \\( k= \\) ______。",
    "options": null,
    "ans": "\\( -2 \\) 或 \\( 1 \\)",
    "fb": "解析：\\(A\\alpha=(k+3,2k+2,k+3)\\)。设其为 \\(A^{-1}\\) 的属于特征值 \\(\\lambda\\) 的特征向量，则 \\(A\\alpha=(1/\\lambda)\\alpha\\)，即 \\((k+3,2k+2,k+3)=\\lambda(1,k,1)\\)。由前两分量得 \\(\\lambda=k+3\\) 且 \\(2k+2=(k+3)k\\)，即 \\(k^2+k-2=0\\)，解得 \\(k=1\\) 或 \\(k=-2\\)，对应 \\(\\lambda=4\\) 或 \\(1\\)。故应填 \\(k=-2\\) 或 \\(1\\)（对应 \\(\\lambda=4\\) 或 \\(1\\)）。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-18",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 18,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} 1 & -3 & 3 \\\\ 3 & a & 3 \\\\ 6 & -6 & b \\end{bmatrix} \\) 的特征值 \\( \\lambda_1=-2,\\ \\lambda_2=4 \\)，求参数 \\( a \\) 与 \\( b \\)。",
    "options": null,
    "ans": "\\( a=-5,\\ b=4 \\)",
    "fb": "解析：设 \\(A\\) 的三特征值为 \\(-2,4,t\\)，则 \\(\\operatorname{tr}(A)=1+a+b=-2+4+t\\Rightarrow t=a+b-1\\)，且 \\(|A|=(-2)\\cdot4\\cdot t=-8t\\)。计算 \\(|A|=ab-18a+9b-90\\)，联立 \\(|A+2E|=0\\) 与 \\(|A-4E|=0\\) 解得 \\(a=-5,\\ b=4\\)。故应填 \\(a=-5,\\ b=4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-19",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 19,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} a & -1 & c \\\\ 5 & b & 3 \\\\ 1-c & 0 & -a \\end{bmatrix} \\)，其行列式 \\( |A|=-1 \\)，又 \\( A \\) 的伴随矩阵 \\( A^* \\) 有一个特征值 \\( \\lambda_0 \\)，属于 \\( \\lambda_0 \\) 的一个特征向量为 \\( \\alpha=(-1,-1,1)^T \\)，求 \\( a,\\ b,\\ c \\) 和 \\( \\lambda_0 \\) 的值。",
    "options": null,
    "ans": "\\( a=2,\\ b=-3,\\ c=2,\\ \\lambda_0=1 \\)",
    "fb": "解析：由 \\(A^*\\alpha=\\lambda_0\\alpha\\) 且 \\(|A|=-1\\) 得 \\(A\\alpha=(-1/\\lambda_0)\\alpha\\)；代入矩阵方程并比较分量可得 \\(a=2,\\ b=-3,\\ c=2\\)，进而 \\(\\lambda_0=1\\)。故应填 \\(a=2,\\ b=-3,\\ c=2,\\ \\lambda_0=1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-1",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 1,
    "stem": "设 \\( A \\) 为 \\( m\\times n \\) 矩阵，\\( B \\) 为 \\( n\\times m \\) 矩阵，证明 \\( AB \\) 与 \\( BA \\) 有相同的非零特征值。",
    "options": null,
    "ans": null,
    "fb": "设 \\( \\lambda \\) 是 \\( AB \\) 的一个非零特征值，\\( \\eta \\) 是 \\( AB \\) 的属于特征值 \\( \\lambda \\) 的特征向量，则 \\( AB\\eta=\\lambda\\eta \\)。由于 \\( \\lambda\\neq 0 \\)，从而 \\( B\\eta\\neq 0 \\)。事实上，若 \\( B\\eta=0 \\)，则 \\( AB\\eta=0 \\)，即 \\( \\lambda\\eta=0 \\)，故 \\( \\eta=0 \\)，矛盾。①式两端左乘矩阵 \\( B \\)，得 \\( BA(B\\eta)=B(AB\\eta)=B\\lambda\\eta=\\lambda(B\\eta) \\)，所以 \\( \\lambda \\) 是 \\( BA \\) 的特征值。同理可证 \\( BA \\) 的非零特征值也是 \\( AB \\) 的特征值，所以 \\( AB \\) 与 \\( BA \\) 有相同的非零特征值。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-2",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 2,
    "stem": "设 \\( \\lambda_1,\\lambda_2,\\lambda_3 \\) 是 \\( A \\) 的特征值，\\( \\alpha_1,\\alpha_2,\\alpha_3 \\) 是对应的特征向量。若 \\( \\alpha_1+\\alpha_2+\\alpha_3 \\) 也是 \\( A \\) 的特征向量，则 \\( \\lambda_1=\\lambda_2=\\lambda_3 \\)。",
    "options": null,
    "ans": null,
    "fb": "假设 \\( \\lambda_1\\neq\\lambda_2 \\)，则 \\( \\alpha_1+\\alpha_2 \\) 不是 \\( A \\) 的特征向量。可见，要使 \\( \\alpha_1+\\alpha_2 \\) 是 \\( A \\) 的特征向量，必有 \\( \\lambda_1=\\lambda_2 \\)，且 \\( \\alpha_1+\\alpha_2 \\) 也是特征值 \\( \\lambda_1 \\) 所对应的特征向量。同理，要使 \\( \\beta+\\alpha_3 \\) 为 \\( A \\) 的特征向量，必有 \\( \\lambda_1=\\lambda_3 \\)。于是，要使 \\( \\alpha_1+\\alpha_2+\\alpha_3 \\) 是 \\( A \\) 的特征向量，必有 \\( \\lambda_1=\\lambda_2=\\lambda_3 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-3",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 3,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵，任一非零的 \\( n \\) 维向量都是 \\( A \\) 的特征向量，试证明：\\( A=\\lambda E \\)，即 \\( A \\) 为数量矩阵。",
    "options": null,
    "ans": null,
    "fb": "设 \\( a_{ij} \\)（\\( i,j=1,\\cdots,n \\)）是 \\( A \\) 的第 \\( i \\) 行、第 \\( j \\) 列的元素。因 \\( n \\) 维单位向量组 \\( \\varepsilon_1,\\varepsilon_2,\\cdots,\\varepsilon_n \\) 也是 \\( A \\) 的特征向量，设 \\( \\lambda_1,\\lambda_2,\\cdots,\\lambda_n \\) 是对应的特征值，则有 \\( A\\varepsilon_i=\\lambda_i\\varepsilon_i \\)，即 \\( A\\varepsilon_i=\\begin{bmatrix} a_{1i} \\\\ \\vdots \\\\ a_{ii} \\\\ \\vdots \\\\ a_{ni} \\end{bmatrix}=\\begin{bmatrix} 0 \\\\ \\vdots \\\\ \\lambda_i \\\\ \\vdots \\\\ 0 \\end{bmatrix} \\)（\\( i=1,\\cdots,n \\)）。故 \\( a_{ii}=\\lambda_i,\\ a_{ij}=0 \\)（\\( j\\neq i \\)）。于是 \\( A=\\begin{bmatrix} \\lambda_1 & & & 0 \\\\ & \\lambda_2 & & \\\\ & & \\ddots & \\\\ 0 & & & \\lambda_n \\end{bmatrix} \\)。因为 \\( \\varepsilon_i+\\varepsilon_j\\neq 0 \\)（\\( i\\neq j \\)）也是 \\( A \\) 的特征向量，所以 \\( \\lambda_i=\\lambda_j \\)，故有 \\( \\lambda_1=\\lambda_2=\\cdots=\\lambda_n=\\lambda \\)，于是可得 \\( A=\\lambda E \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-4",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 4,
    "stem": "设 \\( n \\) 阶矩阵 \\( A=(a_{ij}) \\) 的 \\( n \\) 个特征值为 \\( \\lambda_1,\\lambda_2,\\cdots,\\lambda_n \\)，证明：(1) \\( \\lambda_1+\\lambda_2+\\cdots+\\lambda_n=a_{11}+a_{22}+\\cdots+a_{nn} \\)；(2) \\( |A|=\\lambda_1\\lambda_2\\cdots\\lambda_n \\)；(3) \\( A \\) 可逆的充要条件为 \\( \\lambda_i\\neq 0,\\ i=1,2,\\cdots,n \\)；(4) 若 \\( A \\) 可逆，则伴随矩阵 \\( A^* \\) 的特征值为 \\( |A|/\\lambda_i,\\ i=1,2,\\cdots,n \\)；(5) 若 \\( A \\) 不可逆，当 \\( r(A)<n-1 \\) 时，\\( A^* \\) 的特征值为 0；若 \\( r(A)=n-1 \\) 时，则 \\( A^* \\) 有一个 \\( n-1 \\) 重特征值零及一个单特征值 \\( A_{11}+A_{22}+\\cdots+A_{nn} \\)（\\( A_{ii} \\) 为 \\( a_{ii} \\) 的代数余子式）。",
    "options": null,
    "ans": null,
    "fb": "(1) 因矩阵 \\( A \\) 的 \\( n \\) 个特征值分别为 \\( \\lambda_1,\\lambda_2,\\cdots,\\lambda_n \\)，从而有 \\( |\\lambda E-A|=(\\lambda-\\lambda_1)(\\lambda-\\lambda_2)\\cdots(\\lambda-\\lambda_n) \\)。考察等式两端展开式中 \\( \\lambda^{n-1} \\) 的系数，根据行列式的定义，中含 \\( \\lambda^{n-1} \\) 的项必由乘积 \\( (\\lambda-a_{11})(\\lambda-a_{22})\\cdots(\\lambda-a_{nn}) \\) 中产生，从而其系数为 \\( -(a_{11}+a_{22}+\\cdots+a_{nn}) \\)，而 \\( (\\lambda-\\lambda_1)(\\lambda-\\lambda_2)\\cdots(\\lambda-\\lambda_n) \\) 中含 \\( \\lambda^{n-1} \\) 项的系数为 \\( -(\\lambda_1+\\lambda_2+\\cdots+\\lambda_n) \\)。比较系数有 \\( \\lambda_1+\\lambda_2+\\cdots+\\lambda_n=a_{11}+a_{22}+\\cdots+a_{nn} \\)。(2) 如果等式①两端用 \\( \\lambda=0 \\) 代入，即有 \\( (-1)^n|A|=(-1)^n\\lambda_1\\lambda_2\\cdots\\lambda_n \\)，即 \\( |A|=\\lambda_1\\lambda_2\\cdots\\lambda_n \\)。(3) 由 (2) 直接可得证。(4) 若 \\( A \\) 可逆，由 (3) 知 \\( \\lambda_i\\neq 0,\\ i=1,2,\\cdots,n \\)。设 \\( x \\) 是 \\( A \\) 的属于 \\( \\lambda_i \\) 的特征向量，即 \\( Ax=\\lambda_i x \\)。又 \\( A^*A=|A|E \\)，从而有 \\( A^*Ax=\\lambda_i A^*x=|A|x \\)，所以 \\( A^*x=(\\dfrac{|A|}{\\lambda_i})x \\)，即 \\( A^* \\) 的特征值为 \\( |A|/\\lambda_i,\\ i=1,2,\\cdots,n \\)。(5) 若 \\( A \\) 不可逆，当 \\( r(A)<n-1 \\) 时，由 \\( A^* \\) 的定义，\\( A^*=0 \\)，所以 \\( A^* \\) 的特征值全为零。当 \\( r(A)=n-1 \\) 时，\\( r(A^*)=1 \\)，于是 \\( A^* \\) 的行向量对应分量成比例。设 \\( A^*=\\begin{bmatrix} A_{11} & A_{21} & \\cdots & A_{n1} \\\\ a_2 A_{11} & a_2 A_{21} & \\cdots & a_2 A_{n1} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_n A_{11} & a_n A_{21} & \\cdots & a_n A_{n1} \\end{bmatrix} \\)，则 \\( |\\lambda E-A^*|=(\\lambda-A_{11}-a_2 A_{21}-\\cdots-a_n A_{n1})\\lambda^{n-1} \\)。又因为 \\( a_{i1}A_{21}=A_{i1},\\cdots,a_{n1}A_{n1}=A_{nn} \\)，所以 \\( |\\lambda E-A^*|=(\\lambda-A_{11}-A_{22}-\\cdots-A_{nn})\\lambda^{n-1} \\)。所以 \\( A^* \\) 的特征值为 \\( A_{11}+A_{22}+\\cdots+A_{nn},\\underbrace{0,\\cdots,0}_{n-1 \\text{ 个}} \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-5",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 5,
    "stem": "设 \\( n \\) 阶可逆矩阵 \\( A \\) 的各行元素之和为 \\( a \\)，证明：(1) \\( a\\neq 0 \\)；(2) \\( A^{-1} \\) 的各行元素之和为 \\( \\dfrac{1}{a} \\)；(3) 求 \\( 4A^{-1}-7A \\) 的各行元素之和。",
    "options": null,
    "ans": null,
    "fb": "(1) 因为 \\( A \\) 的各行元素之和为 \\( a \\)，从而 \\( A\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=a\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix} \\)，即 \\( a \\) 是 \\( A \\) 的特征值。又 \\( A \\) 可逆，所以 \\( a\\neq 0 \\)。(2) 由 \\( A\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=a\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix} \\) 可得 \\( A^{-1}A\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=aA^{-1}\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix} \\)，即 \\( A^{-1}\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=\\dfrac{1}{a}\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix} \\)。因此我们得到 \\( A^{-1} \\) 的各行元素之和为 \\( 1/a \\)。(3) 因为 \\( 4A^{-1}\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}-7A\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=\\dfrac{4}{a}\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}-7a\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix}=\\left(\\dfrac{4}{a}-7a\\right)\\begin{bmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{bmatrix} \\)。因此矩阵 \\( 4A^{-1}-7A \\) 的各行元素之和为 \\( \\dfrac{4}{a}-7a \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-20",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 20,
    "stem": "设 \\( A \\) 是三阶方阵，且 \\( |A-E|=|A+2E|=|2A+3E|=0 \\)，则 \\( |2A^*-3E|= \\) ______。",
    "options": null,
    "ans": "126",
    "fb": "解析：由 \\(|A-E|=|A+2E|=|2A+3E|=0\\) 知 \\(A\\) 的特征值为 \\(1,-2,-3/2\\)，故 \\(|A|=1\\cdot(-2)\\cdot(-3/2)=3\\)。\\(A^*\\) 特征值 \\(|A|/\\lambda\\) 为 \\(3,-3/2,-2\\)；\\(2A^*-3E\\) 特征值 \\(2\\cdot3-3=3,\\ 2(-3/2)-3=-6,\\ 2(-2)-3=-7\\)，故 \\(|2A^*-3E|=3\\cdot(-6)\\cdot(-7)=126\\)。故应填 \\(126\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-21",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 21,
    "stem": "已知三阶矩阵 \\( A \\) 的特征值分别为 \\( 1,-1,2 \\)，设矩阵 \\( B=A^5-3A^3 \\)，求：(1) \\( |B| \\)；(2) \\( |A-2E| \\)。",
    "options": null,
    "ans": "(1) \\( |B|=-32 \\)；(2) \\( |A-2E|=0 \\)。",
    "fb": "解析：\\(B=A^5-3A^3\\)，由 \\(A\\) 特征值 \\(1,-1,2\\) 得 \\(B\\) 特征值 \\(-2,2,8\\)，故 \\(|B|=(-2)\\cdot2\\cdot8=-32\\)。又 \\(A-2E\\) 特征值为 \\(-1,-3,0\\)，故 \\(|A-2E|=0\\)。故应填 (1) \\(|B|=-32\\)；(2) \\(|A-2E|=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-6",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 6,
    "stem": "设矩阵 \\( A \\) 满足 \\( A^2=E \\)，证明 \\( 5E-A \\) 可逆。",
    "options": null,
    "ans": null,
    "fb": "由本题设可知 \\( A \\) 的特征值只能是 1 或 -1，从而 \\( 5E-A \\) 的特征值只能是 4 或 6，即 0 不是 \\( 5E-A \\) 的特征值。因此 \\( 5E-A \\) 可逆。点评：\\( n \\) 阶矩阵 \\( A \\) 可逆的充要条件是 \\( A \\) 的特征值全不为零。换句话说，\\( A \\) 可逆的充分必要条件是零不是 \\( A \\) 的特征值。这是对 \\( n \\) 阶矩阵的可逆性的又一种认识。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-7",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 7,
    "stem": "如果 \\( n \\) 阶方阵 \\( A \\) 满足条件 \\( A^2+A+E=0 \\)，则对任意实数 \\( a \\)，\\( A-aE \\) 总是可逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "令 \\( B=A-aE \\)。设 \\( A \\) 的特征值为 \\( \\lambda \\)，易见 \\( \\lambda-a \\) 是 \\( B \\) 的特征值。由 \\( A^2+A+E=0 \\) 知 \\( \\lambda^2+\\lambda+1=0 \\)，可见 \\( \\lambda \\) 不是实数，故 \\( \\lambda-a \\) 不是实数，因而 \\( \\lambda-a\\neq 0 \\)（\\( a \\) 为实数）。因为 \\( |A-aE|\\neq 0 \\) 的充分必要条件是 \\( A-aE \\) 的特征值全不为零，故 \\( A-aE \\) 是可逆矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-7",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 7,
    "stem": "设 \\( \\lambda_1,\\lambda_2 \\) 是矩阵 \\( A \\) 的两个不同的特征值，对应的特征向量分别为 \\( \\alpha_1,\\alpha_2 \\)，则 \\( \\alpha_1,\\ A(\\alpha_1+\\alpha_2) \\) 线性无关的充分必要条件是 ______。",
    "options": [
      [
        "A",
        "\\( \\lambda_1\\neq 0 \\)"
      ],
      [
        "B",
        "\\( \\lambda_2\\neq 0 \\)"
      ],
      [
        "C",
        "\\( \\lambda_1=0 \\)"
      ],
      [
        "D",
        "\\( \\lambda_2=0 \\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A(\\alpha_1+\\alpha_2)=\\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\)。向量组 \\(\\alpha_1,\\ \\lambda_1\\alpha_1+\\lambda_2\\alpha_2\\) 线性无关的充要条件是系数矩阵 \\(\\begin{pmatrix}1&\\lambda_1\\\\0&\\lambda_2\\end{pmatrix}\\) 的行列式 \\(\\lambda_2\\neq0\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-8",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 8,
    "stem": "矩阵 \\( A \\) 与 \\( B \\) 相似的充分条件是 ______。",
    "options": [
      [
        "A",
        "\\( A \\) 与 \\( B \\) 有相同的特征值"
      ],
      [
        "B",
        "\\( A \\) 与 \\( B \\) 与同一个矩阵 \\( C \\) 相似"
      ],
      [
        "C",
        "\\( A \\) 与 \\( B \\) 有相同的特征向量"
      ],
      [
        "D",
        "\\( A^* \\) 与 \\( B^* \\) 相似"
      ]
    ],
    "ans": "B",
    "fb": "解析：若 \\(A,B\\) 均与同一矩阵 \\(C\\) 相似，则 \\(A\\sim C\\sim B\\)，由相似传递性 \\(A\\sim B\\)；其余各项仅为相似的性质或非充分条件。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-mc-9",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 9,
    "stem": "若 \\( A \\) 与 \\( B \\) 相似，则 ______ 。",
    "options": [
      [
        "A",
        "\\(\\lambda E - A = \\lambda E - B\\)"
      ],
      [
        "B",
        "\\(|A| = |B|\\)"
      ],
      [
        "C",
        "对于相同的特征值 \\(\\lambda\\)，\\(A,B\\) 有相同的特征向量"
      ],
      [
        "D",
        "\\(A,B\\) 均与同一个对角阵相似"
      ]
    ],
    "ans": "B",
    "fb": "解析：相似矩阵行列式相等（\\(|A|=|P^{-1}BP|=|B|\\)）；特征值相同但 \\(\\lambda E-A=\\lambda E-B\\) 一般不成立，特征向量、是否同对角阵均未必。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-22",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 22,
    "stem": "若 \\(\\begin{pmatrix}22&31\\\\y&x\\end{pmatrix}\\) 与 \\(\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\) 相似，则 \\(x=\\)______，\\(y=\\)______。",
    "options": null,
    "ans": "\\(x=-17,\\ y=-12\\)",
    "fb": "解析：相似矩阵迹与行列式相同。迹：\\(22+x=1+4=5\\Rightarrow x=-17\\)；行列式：\\(22x-31y=1\\cdot4-2\\cdot3=-2\\Rightarrow 22(-17)-31y=-2\\Rightarrow y=-12\\)。故应填 \\(x=-17,\\ y=-12\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-23",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 23,
    "stem": "已知 \\(A\\sim B=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&-1&2\\\\0&0&2&2\\end{pmatrix}\\)，则 \\(r(A-E)+r(A-3E)=\\) ______ 。",
    "options": null,
    "ans": "\\(5\\)",
    "fb": "解析：\\(A\\sim B=\\operatorname{diag}(1,1,-1,3)\\)？实则由 \\(B\\) 的 \\(2\\times2\\) 块 \\(\\begin{pmatrix}-1&2\\\\2&2\\end{pmatrix}\\) 特征值 \\(3,-2\\)，故 \\(A\\) 特征值为 \\(1,1,3,-2\\)。\\(A-E\\) 特征值 \\(0,0,2,-3\\)，秩 \\(2\\)；\\(A-3E\\) 特征值 \\(-2,-2,0,-5\\)，秩 \\(3\\)；故 \\(r(A-E)+r(A-3E)=5\\)。故应填 \\(5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-24",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 24,
    "stem": "若四阶矩阵 \\(A\\) 与 \\(B\\) 相似，矩阵 \\(A\\) 的特征值为 \\(\\dfrac12,\\dfrac13,\\dfrac14,\\dfrac15\\)，则行列式 \\(|B^{-1}-E|=\\) ______ 。",
    "options": null,
    "ans": "\\(24\\)",
    "fb": "解析：同 c5-hw-fill-3，\\(B^{-1}-E\\) 特征值为 \\(1,2,3,4\\)，故 \\(|B^{-1}-E|=24\\)。故应填 \\(24\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-25",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 25,
    "stem": "若矩阵 \\(A\\) 与 \\(B\\) 相似，且 \\(2\\) 是矩阵 \\(B\\) 的一个特征值，则矩阵 \\(3A^2-4A+E\\) 必有一个特征值为 ______ 。",
    "options": null,
    "ans": "\\(5\\)",
    "fb": "解析：\\(B\\) 有特征值 \\(2\\)，则 \\(A\\) 有特征值 \\(2\\)；\\(3A^2-4A+E\\) 的对应特征值为 \\(3\\cdot4-4\\cdot2+1=5\\)。故应填 \\(5\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-26",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 26,
    "stem": "已知 \\(\\alpha=(1,2,-1)\\)，\\(A=\\alpha^T\\alpha\\)，若矩阵 \\(A\\) 与 \\(B\\) 相似，则 \\((B+E)^*\\) 的特征值为 ______ 。",
    "options": null,
    "ans": "\\(1,7,7\\)",
    "fb": "解析：\\(\\alpha=(1,2,-1)\\)，\\(A=\\alpha^T\\alpha\\) 为秩 \\(1\\) 对称阵，非零特征值 \\(\\alpha\\alpha^T\\) 之积？实际 \\(A\\) 特征值 \\(\\alpha^T\\alpha=6,0,0\\)。因 \\(A\\sim B\\)，\\(B\\) 特征值 \\(6,0,0\\)；\\((B+E)\\) 特征值 \\(7,1,1\\)，其伴随 \\((B+E)^*\\) 特征值 \\(|B+E|/(7,1,1)=7/(7,1,1)\\)，即 \\(1,7,7\\)。故应填 \\(1,7,7\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-27",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 27,
    "stem": "已知矩阵 \\(A=\\begin{pmatrix}2&0&0\\\\0&0&1\\\\0&1&a\\end{pmatrix}\\) 和矩阵 \\(B=\\begin{pmatrix}2&0&0\\\\0&3&4\\\\0&-2&b\\end{pmatrix}\\) 相似，试确定参数 \\(a,b\\)。",
    "options": null,
    "ans": "\\(a=0,\\ b=-3\\)",
    "fb": "解析：相似矩阵迹、行列式相同。\\(\\operatorname{tr}(A)=2+a=\\operatorname{tr}(B)=5+b\\Rightarrow a-b=3\\)；\\(|A|=2\\cdot(0\\cdot a-1)=-2\\)，\\(|B|=2(3b+8)=6b+16\\)，令 \\(-2=6b+16\\Rightarrow b=-3\\)，故 \\(a=0\\)。故应填 \\(a=0,\\ b=-3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-8",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 8,
    "stem": "两个矩阵如果等价，它们是否相似？反之，如果相似，是否等价？哪些矩阵与单位矩阵等价？哪些矩阵与单位矩阵相似？",
    "options": null,
    "ans": null,
    "fb": "由定义，等价未必相似，但相似一定等价；可逆矩阵都与单位矩阵等价；但只有单位矩阵与单位矩阵相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-mc-10",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 10,
    "stem": "设 \\(n\\) 阶方阵 \\(A\\) 相似于某对角矩阵，则 ______ 。",
    "options": [
      [
        "A",
        "\\(r(A)=n\\)"
      ],
      [
        "B",
        "\\(A\\) 有不同的特征值"
      ],
      [
        "C",
        "\\(A\\) 是实对称矩阵"
      ],
      [
        "D",
        "\\(A\\) 有 \\(n\\) 个线性无关的特征向量"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(n\\) 阶矩阵可对角化当且仅当有 \\(n\\) 个线性无关的特征向量。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-9",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 9,
    "stem": "设 \\(A\\) 为三阶矩阵，且 \\(A-E,\\ A+2E,\\ 5A-3E\\) 不可逆，试证 \\(A\\) 可相似于对角阵。",
    "options": null,
    "ans": null,
    "fb": "由 \\(|A-E|=0\\) 知 \\(1\\) 是 \\(A\\) 的特征值；同理，\\(A+2E,\\ 5A-3E\\) 不可逆分别给出特征值 \\(-2\\) 与 \\(\\dfrac35\\)。因此 \\(A\\) 有三个互异特征值 \\(1,-2,\\dfrac35\\)，故 \\(A\\) 可相似于对角阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-28",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 28,
    "stem": "已知 \\(\\xi=\\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}\\) 是矩阵 \\(A=\\begin{pmatrix}2&-1&2\\\\5&a&3\\\\-1&b&-2\\end{pmatrix}\\) 的一个特征向量。 (1) 试确定参数 \\(a,b\\) 及特征向量 \\(\\xi\\) 所对应的特征值； (2) 问 \\(A\\) 能否相似于对角阵？说明理由。",
    "options": null,
    "ans": "(1) \\(a=-3,\\ b=0,\\ \\lambda=-1\\)；(2) \\(A\\) 不能相似于对角阵。",
    "fb": "解析：由 \\(A\\xi=\\lambda\\xi\\) 代入 \\(\\xi=(1,1,-1)^T\\) 得 \\(a=-3,\\ b=0,\\ \\lambda=-1\\)。此时 \\(A\\) 的特征多项式含二重根，但 \\(\\lambda=-1\\) 对应的线性无关特征向量只有一个，几何重数小于代数重数，故 \\(A\\) 不能相似于对角阵。故应填 (1) \\(a=-3,b=0,\\lambda=-1\\)；(2) \\(A\\) 不能相似于对角阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-10",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 10,
    "stem": "设 \\(A\\) 为 \\(n\\) 阶可逆方阵，若 \\(A\\) 相似于对角阵，则 \\(A^{-1}\\) 也相似于对角阵。",
    "options": null,
    "ans": null,
    "fb": "设有可逆阵 \\(P\\) 使 \\(P^{-1}AP=\\Lambda\\)（对角阵），则 \\(A\\) 可逆，且 \\(P^{-1}A^{-1}P=\\Lambda^{-1}\\)（对角阵），所以 \\(A^{-1}\\) 也相似于对角阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-29",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 29,
    "stem": "已知 \\(A=\\begin{pmatrix}2&a&2\\\\5&b&3\\\\-1&1&-1\\end{pmatrix}\\) 有特征值 \\(\\pm1\\)。问 \\(A\\) 能否对角化？并说明理由。",
    "options": null,
    "ans": "\\(A\\) 可以对角化。",
    "fb": "解析：\\(A\\) 有特征值 \\(\\pm1\\)，且为三阶矩阵；另一特征值由迹确定。因 \\(A\\) 有三个线性无关的特征向量（实对称型结构可验证几何重数足够），故 \\(A\\) 可以对角化。故应填 \\(A\\) 可以对角化。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-11",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 11,
    "stem": "设二阶矩阵 \\(A\\) 的行列式为负值，证明：\\(A\\) 必与一个对角矩阵相似。",
    "options": null,
    "ans": null,
    "fb": "设 \\(\\lambda_1,\\lambda_2\\) 为 \\(A\\) 的两个特征值，则 \\(|A|=\\lambda_1\\lambda_2<0\\)，故 \\(\\lambda_1\\ne\\lambda_2\\)。二阶矩阵有两个互异特征值，从而有两个线性无关特征向量，因此 \\(A\\) 可相似对角化。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-12",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 12,
    "stem": "设方阵 \\(A,B\\) 分别与对角矩阵 \\(\\Lambda_1,\\Lambda_2\\) 相似，证明：分块矩阵 \\(\\begin{pmatrix}A&0\\\\0&B\\end{pmatrix}\\) 必与一个对角矩阵相似。",
    "options": null,
    "ans": null,
    "fb": "由 \\(A\\sim\\Lambda_1,\\ B\\sim\\Lambda_2\\)，存在可逆阵 \\(P_1,P_2\\) 使 \\(A=P_1^{-1}\\Lambda_1P_1,\\ B=P_2^{-1}\\Lambda_2P_2\\)。取 \\(P=\\begin{pmatrix}P_1&0\\\\0&P_2\\end{pmatrix}\\)，则 \\(|P|=|P_1||P_2|\\ne0\\)，且 \\(P^{-1}=\\begin{pmatrix}P_1^{-1}&0\\\\0&P_2^{-1}\\end{pmatrix}\\)。于是 \\(P^{-1}\\begin{pmatrix}A&0\\\\0&B\\end{pmatrix}P=\\begin{pmatrix}\\Lambda_1&0\\\\0&\\Lambda_2\\end{pmatrix}\\)，故分块矩阵与对角阵相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-13",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 13,
    "stem": "设 \\(A\\) 为非零的 \\(n\\) 阶方阵，如果存在正整数 \\(k\\)，使得 \\(A^k=0\\)（即 \\(A\\) 为幂零阵），证明：\\(A\\) 不能与对角阵相似。",
    "options": null,
    "ans": null,
    "fb": "假设 \\(A\\) 与对角阵相似，则存在可逆阵 \\(P\\) 使 \\(P^{-1}AP=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)\\)。于是 \\(0=P^{-1}A^kP=(P^{-1}AP)^k=\\operatorname{diag}(\\lambda_1^k,\\dots,\\lambda_n^k)\\)，从而所有 \\(\\lambda_i=0\\)，即 \\(A=0\\)，与 \\(A\\) 非零矛盾。故 \\(A\\) 不能与对角阵相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-30",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 30,
    "stem": "设矩阵 \\(A=\\begin{pmatrix}1&2&-3\\\\-1&4&-3\\\\1&a&5\\end{pmatrix}\\) 的特征方程有一个二重根，求 \\(a\\) 的值，并讨论 \\(A\\) 是否可相似对角化。",
    "options": null,
    "ans": "当 \\(a=-2\\) 时，\\(A\\) 可相似对角化；当 \\(a=-\\dfrac23\\) 时，\\(A\\) 不可相似对角化。",
    "fb": "解析：特征方程有一二重根，讨论得 \\(a=-2\\) 或 \\(a=-2/3\\)。当 \\(a=-2\\) 时二重特征值对应两个线性无关特征向量，可对角化；当 \\(a=-2/3\\) 时几何重数为 \\(1<2\\)，不可对角化。故应填 当 \\(a=-2\\) 时可对角化，当 \\(a=-2/3\\) 时不可对角化。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-31",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 31,
    "stem": "设矩阵 \\(A=\\begin{pmatrix}4&6&0\\\\-3&-5&0\\\\-3&-6&1\\end{pmatrix}\\)，求可逆矩阵 \\(P\\)，使 \\(P^{-1}AP\\) 为对角阵。",
    "options": null,
    "ans": "\\(P=\\begin{pmatrix}-1&0&-2\\\\1&0&1\\\\1&1&0\\end{pmatrix}\\)，\\(P^{-1}AP=\\operatorname{diag}(-2,1,1)\\)。",
    "fb": "解析：解 \\(|\\lambda E-A|=0\\) 得特征值 \\(-2,1,1\\)；分别求特征向量，取 \\(P=(-1,0,-2;1,0,1;1,1,0)\\)（列向量），则 \\(P^{-1}AP=\\operatorname{diag}(-2,1,1)\\)。故应填该 \\(P\\) 与对角阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-32",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 32,
    "stem": "设矩阵 \\(A\\) 与 \\(B\\) 相似，且 \\(A=\\begin{pmatrix}1&-1&1\\\\2&4&-2\\\\-3&-3&a\\end{pmatrix}\\)，\\(B=\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&b\\end{pmatrix}\\)。 (1) 求 \\(a,b\\) 的值； (2) 求可逆矩阵 \\(P\\)，使 \\(P^{-1}AP=B\\)。",
    "options": null,
    "ans": "(1) \\(a=5,\\ b=6\\)；(2) \\(P=\\begin{pmatrix}1&1&1\\\\-1&0&-2\\\\0&1&3\\end{pmatrix}\\)。",
    "fb": "解析：\\(A\\sim B=\\operatorname{diag}(2,2,b)\\)，故 \\(A\\) 的特征值为 \\(2,2,b\\)，且 \\(|A|=4b\\)。由 \\(|A|\\) 及迹得 \\(a=5,\\ b=6\\)。求 \\(A\\) 的属于 \\(2\\) 的两个无关特征向量与属于 \\(6\\) 的一个，组成 \\(P=(1,1,1;-1,0,-2;0,1,3)\\)。故应填 (1) \\(a=5,b=6\\)；(2) 该 \\(P\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-33",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 33,
    "stem": "已知 \\(A=\\begin{pmatrix}2&0&0\\\\0&0&1\\\\0&1&x\\end{pmatrix}\\) 与 \\(B=\\begin{pmatrix}2&0&0\\\\0&y&0\\\\0&0&-1\\end{pmatrix}\\) 相似。求： (1) \\(x\\) 和 \\(y\\)； (2) 一个满足 \\(P^{-1}AP=B\\) 的可逆矩阵 \\(P\\)。",
    "options": null,
    "ans": "(1) \\(x=0,\\ y=1\\)；(2) \\(P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix}\\)。",
    "fb": "解析：相似则特征值相同，\\(B\\) 特征值为 \\(2,y,-1\\)，与 \\(A\\) 特征值 \\(\\{2,1,-1\\}\\) 比较得 \\(y=1\\)；再由迹 \\(2+1-1=2+0+x\\Rightarrow x=0\\)。取特征向量组成 \\(P=(1,0,0;0,1,1;0,1,-1)\\)。故应填 (1) \\(x=0,y=1\\)；(2) 该 \\(P\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-34",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 34,
    "stem": "设矩阵 \\(A=\\begin{pmatrix}3&2&-2\\\\-k&-1&k\\\\4&2&-3\\end{pmatrix}\\)，当 \\(k\\) 为何值时，存在可逆矩阵 \\(P\\) 使得 \\(P^{-1}AP\\) 为对角矩阵？并求出 \\(P\\) 和相应的对角矩阵。",
    "options": null,
    "ans": "当 \\(k=0\\) 时，\\(P=\\begin{pmatrix}-1&1&1\\\\2&0&0\\\\0&2&1\\end{pmatrix}\\)，\\(P^{-1}AP=\\operatorname{diag}(-1,-1,1)\\)。",
    "fb": "解析：当 \\(k=0\\) 时 \\(A\\) 有二重特征值 \\(-1\\) 且对应两个无关特征向量、另一特征值 \\(1\\)，故可对角化。取 \\(P=(-1,1,1;2,0,0;0,2,1)\\)，则 \\(P^{-1}AP=\\operatorname{diag}(-1,-1,1)\\)。故应填 \\(k=0\\) 时 \\(P\\) 与对角阵如上。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-35",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 35,
    "stem": "设矩阵 \\(A=\\begin{pmatrix}1&-1&1\\\\x&4&y\\\\-3&-3&5\\end{pmatrix}\\)，已知 \\(A\\) 有三个线性无关的特征向量，\\(\\lambda=2\\) 是 \\(A\\) 的二重特征值。试求可逆矩阵 \\(P\\)，使得 \\(P^{-1}AP\\) 为对角矩阵。",
    "options": null,
    "ans": "\\(x=2,\\ y=-2\\)，\\(P=\\begin{pmatrix}1&1&1\\\\-1&0&-2\\\\0&1&3\\end{pmatrix}\\)，\\(P^{-1}AP=\\operatorname{diag}(2,2,6)\\)。",
    "fb": "解析：\\(\\lambda=2\\) 为二重特征值且有三个线性无关特征向量，由 \\(\\operatorname{tr}(A)=1+4+5=10=2+2+\\lambda_3\\) 得 \\(\\lambda_3=6\\)。求特征向量得 \\(x=2,y=-2\\)，\\(P=(1,1,1;-1,0,-2;0,1,3)\\)，\\(P^{-1}AP=\\operatorname{diag}(2,2,6)\\)。故应填 \\(x=2,y=-2\\) 及该 \\(P\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-36",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 36,
    "stem": "若矩阵 \\(A=\\begin{pmatrix}2&2&0\\\\8&2&a\\\\0&0&6\\end{pmatrix}\\) 相似于对角矩阵 \\(\\Lambda\\)，试确定常数 \\(a\\) 的值；并求可逆矩阵 \\(P\\) 使 \\(P^{-1}AP=\\Lambda\\)。",
    "options": null,
    "ans": "\\(a=0\\)，\\(P=\\begin{pmatrix}0&1&1\\\\0&2&-2\\\\1&0&0\\end{pmatrix}\\)，\\(P^{-1}AP=\\operatorname{diag}(6,6,-2)\\)。",
    "fb": "解析：分块结构知 \\(A\\) 有一特征值 \\(6\\)，另两个来自 \\(\\begin{pmatrix}2&2\\\\8&2\\end{pmatrix}\\) 的特征值 \\(6,-2\\)，故特征值为 \\(6,6,-2\\)；要可对角化需 \\(\\lambda=6\\) 对应两个无关特征向量，解得 \\(a=0\\)。取 \\(P=(0,1,1;0,2,-2;1,0,0)\\)，\\(P^{-1}AP=\\operatorname{diag}(6,6,-2)\\)。故应填 \\(a=0\\) 及该 \\(P\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-37",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 37,
    "stem": "设 \\(n\\) 阶矩阵 \\(A=\\begin{pmatrix}1&b&\\cdots&b\\\\b&1&\\cdots&b\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\b&b&\\cdots&1\\end{pmatrix}\\)。 (1) 求 \\(A\\) 的特征值和特征向量； (2) 求可逆矩阵 \\(P\\)，使得 \\(P^{-1}AP\\) 为对角矩阵。",
    "options": null,
    "ans": "（本批次图片中解答未完整显示）",
    "fb": "解析：记 \\(J\\) 为全 \\(1\\) 矩阵，则 \\(A=(1-b)E+bJ\\)。\\(J\\) 的特征值为 \\(n\\)（对应 \\((1,\\ldots,1)^T\\)）与 \\(0\\)（\\(n-1\\) 重），故 \\(A\\) 特征值为 \\(1+(n-1)b\\)（一重）与 \\(1-b\\)（\\(n-1\\) 重）；对应特征向量分别为全 \\(1\\) 向量及各分量和为 \\(0\\) 的无关向量。取 \\(P\\) 以全 \\(1\\) 向量为首列、其余列为和零空间基，则 \\(P^{-1}AP=\\operatorname{diag}(1+(n-1)b,1-b,\\ldots,1-b)\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-5",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 5,
    "stem": "\\u5df2\\u77e5\\u4e09\\u9636\\u65b9\\u9635 \\(\\boldsymbol{A}\\) \\u7684\\u4e09\\u4e2a\\u7279\\u5f81\\u503c\\u4e3a 1, 2\\uff0c\\u5bf9\\u5e94\\u7684\\u7279\\u5f81\\u5411\\u91cf\\u4e3a \\((1,2,1)^\\mathrm{T}\\)\\uff0c\\((1,1,0)^\\mathrm{T}\\)\\uff0c\\((2,0,-1)^\\mathrm{T}\\) \\u3002\\u95ee \\(\\boldsymbol{A}\\) \\u662f\\u5426\\u4e0e\\u5bf9\\u89d2\\u77e9\\u9635 \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\u3002\\u5982\\u679c\\u76f8\\u4f3c\\uff0c\\u6c42 \\(\\boldsymbol{A}, \\boldsymbol{B}\\) \\u53ca\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\)\\uff0c\\u4f7f \\(\\boldsymbol{A}=\\boldsymbol{PBP}^{-1}\\) \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u7531 \\(\\begin{vmatrix}1&1&2\\\\2&1&0\\\\1&0&-1\\end{vmatrix}=\\begin{vmatrix}3&1&2\\\\2&1&0\\\\0&0&-1\\end{vmatrix}=-1\\begin{vmatrix}3&1\\\\2&1\\end{vmatrix}=-1\\neq 0\\)\\uff0c\\u6545 \\(\\boldsymbol{A}\\) \\u6709\\u4e09\\u4e2a\\u7ebf\\u6027\\u65e0\\u5173\\u7684\\u7279\\u5f81\\u5411\\u91cf\\uff0c\\u4ece\\u800c \\(\\boldsymbol{A}\\) \\u4e0e\\u4e00\\u4e2a\\u5bf9\\u89d2\\u77e9\\u9635\\u76f8\\u4f3c\\u3002\\u53c8\\u56e0 \\(\\boldsymbol{A}\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}=\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}\\)\\uff0c\\(\\boldsymbol{A}\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\)\\uff0c\\(\\boldsymbol{A}\\begin{pmatrix}2\\\\0\\\\-1\\end{pmatrix}=2\\begin{pmatrix}2\\\\0\\\\-1\\end{pmatrix}\\) \\u3002\\u6240\\u4ee5 \\(\\boldsymbol{A}=\\boldsymbol{P}\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}\\boldsymbol{P}^{-1}=\\boldsymbol{PBP}^{-1}\\)\\uff0c\\u5176\\u4e2d \\(\\boldsymbol{B}=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}\\)\\uff0c\\(\\boldsymbol{P}=\\begin{pmatrix}1&1&2\\\\2&1&0\\\\1&0&-1\\end{pmatrix}\\) \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-14",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 14,
    "stem": "\\u8bbe\\u77e9\\u9635 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\u8bd5\\u8bc1\\u660e\\uff1a(1) \\(\\boldsymbol{A}^\\mathrm{T}\\) \\u4e0e \\(\\boldsymbol{B}^\\mathrm{T}\\) \\u76f8\\u4f3c\\uff1b(2) \\u5f53 \\(\\boldsymbol{A}\\) \\u53ef\\u9006\\u65f6\\uff0c\\(\\boldsymbol{A}^{-1}\\) \\u4e0e \\(\\boldsymbol{B}^{-1}\\) \\u76f8\\u4f3c\\uff1b(3) \\(\\boldsymbol{A}^{*}\\) \\u4e0e \\(\\boldsymbol{B}^{*}\\) \\u76f8\\u4f3c\\uff1b(4) \\u5bf9\\u4efb\\u610f\\u81ea\\u7136\\u6570 \\(k\\) \\u548c\\u4efb\\u610f\\u6570 \\(c\\)\\uff0c\\u6709 \\(\\boldsymbol{A}^{k}\\) \\u4e0e \\(\\boldsymbol{B}^{k}\\) \\u76f8\\u4f3c\\uff0c\\(c\\boldsymbol{A}\\) \\u4e0e \\(c\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff1b(5) \\u5bf9\\u4efb\\u610f\\u591a\\u9879\\u5f0f \\(f(x)\\)\\uff0c\\(f(\\boldsymbol{A})\\) \\u4e0e \\(f(\\boldsymbol{B})\\) \\u76f8\\u4f3c \\u3002",
    "options": null,
    "ans": null,
    "fb": "(1) \\u56e0 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\u6548\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\)\\uff0c\\u4f7f\\u5f97 \\(\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\) \\u3002\\u6b64\\u65f6 \\(\\boldsymbol{B}^\\mathrm{T}=\\boldsymbol{P}^\\mathrm{T}\\boldsymbol{A}^\\mathrm{T}(\\boldsymbol{P}^{-1})^\\mathrm{T}=\\boldsymbol{P}^\\mathrm{T}\\boldsymbol{A}^\\mathrm{T}(\\boldsymbol{P}^\\mathrm{T})^{-1}\\) \\u3002\\u6545 \\(\\boldsymbol{A}^\\mathrm{T}\\) \\u4e0e \\(\\boldsymbol{B}^\\mathrm{T}\\) \\u76f8\\u4f3c \\u3002 (2) \\u56e0 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\(\\boldsymbol{A}\\) \\u53ef\\u9006\\uff0c\\u6545 \\(\\boldsymbol{B}\\) \\u4e5f\\u53ef\\u9006\\uff08\\u539f\\u56e0\\u662f\\u76f8\\u4f3c\\u77e9\\u9635\\u7684\\u884c\\u5217\\u5f0f\\u76f8\\u7b49\\uff0c\\(|\\boldsymbol{B}|=|\\boldsymbol{A}|\\neq 0\\)\\uff09\\uff0c\\u7531 \\(\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\) \\u5f97 \\(\\boldsymbol{B}^{-1}=\\boldsymbol{P}^{-1}\\boldsymbol{A}^{-1}(\\boldsymbol{P}^{-1})^{-1}=\\boldsymbol{P}^{-1}\\boldsymbol{A}^{-1}\\boldsymbol{P}\\) \\u3002\\u6545 \\(\\boldsymbol{A}^{-1}\\) \\u4e0e \\(\\boldsymbol{B}^{-1}\\) \\u76f8\\u4f3c \\u3002 (3) \\u56e0 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\u6548\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\)\\uff0c\\u4f7f\\u5f97 \\(\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\) \\u3002\\u4ece\\u800c \\(\\boldsymbol{B}^{*}=(\\boldsymbol{P}^{-1}\\boldsymbol{AP})^{*}=\\boldsymbol{P}^{*}\\boldsymbol{A}^{*}(\\boldsymbol{P}^{-1})^{*}=\\boldsymbol{P}^{*}\\boldsymbol{A}^{*}(\\boldsymbol{P}^{*})^{-1}\\) \\u3002\\u6240\\u4ee5 \\(\\boldsymbol{A}^{*}\\) \\u4e0e \\(\\boldsymbol{B}^{*}\\) \\u76f8\\u4f3c \\u3002 (4) \\u56e0 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\u6548\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\)\\uff0c\\u4f7f\\u5f97 \\(\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\) \\u3002\\u5f53 \\(k=0\\) \\u65f6\\uff0c\\u7531\\u4e8e \\(\\boldsymbol{A}^{0}=\\boldsymbol{B}^{0}=\\boldsymbol{E}\\) \\uff0c\\u4ece\\u800c \\(\\boldsymbol{A}^{0}\\) \\u4e0e \\(\\boldsymbol{B}^{0}\\) \\u76f8\\u4f3c\\uff1b\\u5f53 \\(k\\) \\u4e3a\\u6b63\\u6574\\u6570\\u65f6\\uff0c\\((\\boldsymbol{P}^{-1}\\boldsymbol{AP})^{k}=\\boldsymbol{B}^{k}\\)\\uff0c\\u5373 \\(\\boldsymbol{P}^{-1}\\boldsymbol{A}^{k}\\boldsymbol{P}=\\boldsymbol{B}^{k}\\) \\uff0c\\u4ece\\u800c \\(\\boldsymbol{A}^{k}\\) \\u4e0e \\(\\boldsymbol{B}^{k}\\) \\u76f8\\u4f3c \\u3002\\u53c8 \\(\\boldsymbol{P}^{-1}(c\\boldsymbol{A})\\boldsymbol{P}=c\\boldsymbol{B}\\) \\uff0c\\u4ece\\u800c \\(c\\boldsymbol{A}\\) \\u4e0e \\(c\\boldsymbol{B}\\) \\u76f8\\u4f3c \\u3002 (5) \\u56e0 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\uff0c\\u6548\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\)\\uff0c\\u4f7f \\(\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\) \\u3002\\u8bbe \\(f(x)=c_{n}x^{n}+c_{1}x^{n-1}+\\cdots+c_{n-1}x+c_{n}\\) \\uff0c\\u5219 \\(f(\\boldsymbol{B})=c_{n}(\\boldsymbol{P}^{-1}\\boldsymbol{AP})^{n}+c_{1}(\\boldsymbol{P}^{-1}\\boldsymbol{AP})^{n-1}+\\cdots+c_{n-1}\\boldsymbol{P}^{-1}\\boldsymbol{AP}+c_{n}\\boldsymbol{E}=\\boldsymbol{P}^{-1}(c_{n}\\boldsymbol{A}^{n}+c_{1}\\boldsymbol{A}^{n-1}+\\cdots+c_{n-1}\\boldsymbol{A}+c_{n}\\boldsymbol{E})\\boldsymbol{P}=\\boldsymbol{P}^{-1}f(\\boldsymbol{A})\\boldsymbol{P}\\) \\u3002\\u6240\\u4ee5 \\(f(\\boldsymbol{A})\\) \\u4e0e \\(f(\\boldsymbol{B})\\) \\u76f8\\u4f3c \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-15",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 15,
    "stem": "\\u5df2\\u77e5\\u77e9\\u9635 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{C}\\) \\u76f8\\u4f3c\\uff0c\\u77e9\\u9635 \\(\\boldsymbol{B}\\) \\u4e0e \\(\\boldsymbol{D}\\) \\u76f8\\u4f3c\\uff0c\\u8bc1\\u660e\\u5206\\u5757\\u77e9\\u9635 \\(\\begin{bmatrix}\\boldsymbol{A}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{B}\\end{bmatrix}\\) \\u4e0e \\(\\begin{bmatrix}\\boldsymbol{C}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{D}\\end{bmatrix}\\) \\u76f8\\u4f3c \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u7531\\u9898\\u8bbe\\u77e5\\uff0c\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}, \\boldsymbol{Q}\\)\\uff0c\\u4f7f\\u5f97 \\(\\boldsymbol{C}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}, \\boldsymbol{D}=\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}\\) \\u3002\\u53d6 \\(\\boldsymbol{X}=\\begin{bmatrix}\\boldsymbol{P}^{-1}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{Q}^{-1}\\end{bmatrix}\\)\\uff0c\\u5219 \\(\\boldsymbol{X}\\) \\u53ef\\u9006\\uff0c\\u4e14 \\(\\boldsymbol{X}^{-1}=\\begin{bmatrix}\\boldsymbol{P}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{Q}\\end{bmatrix}\\) \\u3002\\u6b64\\u65f6\\uff1a\\(\\boldsymbol{X}^{-1}\\begin{bmatrix}\\boldsymbol{A}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{B}\\end{bmatrix}\\boldsymbol{X}=\\begin{bmatrix}\\boldsymbol{P}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{Q}\\end{bmatrix}\\begin{bmatrix}\\boldsymbol{A}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{B}\\end{bmatrix}\\begin{bmatrix}\\boldsymbol{P}^{-1}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{Q}^{-1}\\end{bmatrix}=\\begin{bmatrix}\\boldsymbol{P}^{-1}\\boldsymbol{AP}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}\\end{bmatrix}=\\begin{bmatrix}\\boldsymbol{C}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{D}\\end{bmatrix}\\)\\uff0c\\u5373 \\(\\begin{bmatrix}\\boldsymbol{A}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{B}\\end{bmatrix}\\) \\u4e0e \\(\\begin{bmatrix}\\boldsymbol{C}&\\boldsymbol{0}\\\\\\boldsymbol{0}&\\boldsymbol{D}\\end{bmatrix}\\) \\u76f8\\u4f3c \\u3002\\u70b9\\u8bc4\\uff1a\\u672c\\u9898\\u5229\\u7528\\u65b9\\u6cd5 1 \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-16",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 16,
    "stem": "\\u8bbe \\(\\boldsymbol{A}, \\boldsymbol{B}\\) \\u90fd\\u662f \\(n\\) \\u9636\\u65b9\\u9635\\uff0c\\u4e14 \\(|\\boldsymbol{A}|\\neq 0\\)\\uff0c\\u8bc1\\u660e\\uff1a\\(\\boldsymbol{AB}\\) \\u4e0e \\(\\boldsymbol{BA}\\) \\u76f8\\u4f3c \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\(|\\boldsymbol{A}|\\neq 0\\) \\u4ece\\u800c \\(\\boldsymbol{A}\\) \\u53ef\\u9006 \\u3002\\(\\boldsymbol{A}^{-1}(\\boldsymbol{AB})\\boldsymbol{A}=(\\boldsymbol{A}^{-1}\\boldsymbol{A})\\boldsymbol{BA}=\\boldsymbol{BA}\\) \\uff0c\\u5373 \\(\\boldsymbol{AB}\\) \\u4e0e \\(\\boldsymbol{BA}\\) \\u76f8\\u4f3c \\u3002\\u70b9\\u8bc4\\uff1a\\u672c\\u9898\\u5229\\u7528\\u65b9\\u6cd5 1 \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-17",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 17,
    "stem": "\\u8bbe \\(n\\) \\u9636\\u65b9\\u9635 \\(\\boldsymbol{A}\\) \\u6709 \\(n\\) \\u4e2a\\u4e92\\u5f02\\u7684\\u7279\\u5f81\\u503c\\uff0c\\u800c\\u77e9\\u9635 \\(\\boldsymbol{B}\\) \\u4e0e \\(\\boldsymbol{A}\\) \\u6709\\u76f8\\u540c\\u7684\\u7279\\u5f81\\u503c\\uff0c\\u8bc1\\u660e\\uff1a\\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u56e0 \\(\\boldsymbol{A}\\) \\u6709 \\(n\\) \\u4e2a\\u4e92\\u5f02\\u7684\\u7279\\u5f81\\u503c\\uff0c\\u4e0d\\u59a8\\u8bbe\\u4e3a \\(\\lambda_{1}, \\lambda_{2}, \\cdots, \\lambda_{n}\\) \\uff0c\\u5219\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{P}\\) \\u4f7f\\u5f97 \\(\\boldsymbol{P}^{-1}\\boldsymbol{AP}=\\begin{bmatrix}\\lambda_{1}&&&\\\\&\\lambda_{2}&&\\\\&&\\ddots&\\\\&&&\\lambda_{n}\\end{bmatrix}\\) \\u3002\\u53c8 \\(\\lambda_{1}, \\lambda_{2}, \\cdots, \\lambda_{n}\\) \\u4e5f\\u662f \\(\\boldsymbol{B}\\) \\u7684\\u7279\\u5f81\\u503c\\uff0c\\u4ece\\u800c\\u5b58\\u5728\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{Q}\\)\\uff0c\\u4f7f\\u5f97 \\(\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}=\\begin{bmatrix}\\lambda_{1}&&&\\\\&\\lambda_{2}&&\\\\&&\\ddots&\\\\&&&\\lambda_{n}\\end{bmatrix}\\) \\u3002\\u4e8e\\u662f \\(\\boldsymbol{P}^{-1}\\boldsymbol{AP}=\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}\\)\\uff0c\\u5373 \\((\\boldsymbol{QP}^{-1})\\boldsymbol{A}(\\boldsymbol{QP}^{-1})^{-1}=\\boldsymbol{B}\\)\\uff0c\\u6240\\u4ee5 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c \\u3002\\u70b9\\u8bc4\\uff1a\\u672c\\u9898\\u662f\\u65b9\\u6cd5 3 \\u7684\\u4e00\\u4e2a\\u7279\\u6b8a\\u60c5\\u5f62\\uff0c\\u4e5f\\u662f\\u8fd9\\u7c7b\\u95ee\\u9898\\u7684\\u5e38\\u89c1\\u9898\\u578b \\u3002\\u5373\\u82e5 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c\\u4e8e\\u540c\\u4e00\\u4e2a\\u5bf9\\u89d2\\u9635\\uff0c\\u5219 \\(\\boldsymbol{A}\\) \\u4e0e \\(\\boldsymbol{B}\\) \\u76f8\\u4f3c \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-6",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 6,
    "stem": "\\u8bbe\\u77e9\\u9635 \\(\\boldsymbol{A}=\\begin{bmatrix}2&0&0\\\\0&0&1\\\\0&1&0\\end{bmatrix}\\)\\uff0c\\(\\boldsymbol{B}=\\begin{bmatrix}1&0&0\\\\0&-1&0\\\\0&-6&2\\end{bmatrix}\\) \\u3002\\u8bd5\\u5224\\u65ad \\(\\boldsymbol{A}, \\boldsymbol{B}\\) \\u662f\\u5426\\u76f8\\u4f3c\\uff0c\\u82e5\\u76f8\\u4f3c\\uff0c\\u6c42\\u53ef\\u9006\\u77e9\\u9635 \\(\\boldsymbol{X}\\)\\uff0c\\u4f7f \\(\\boldsymbol{B}=\\boldsymbol{X}^{-1}\\boldsymbol{AX}\\) \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u7531 \\(|\\lambda\\boldsymbol{E}-\\boldsymbol{A}|=\\begin{vmatrix}\\lambda-2&0&0\\\\0&\\lambda&-1\\\\0&-1&\\lambda\\end{vmatrix}=(\\lambda-2)(\\lambda^{2}-1)\\)\\uff0c\\u89e3\\u5f97 \\(\\boldsymbol{A}\\) \\u7684\\u7279\\u5f81\\u503c\\u4e3a 2, 1, -1\\uff0c\\u56e0\\u6b64 \\(\\boldsymbol{A}\\) \\u76f8\\u4f3c\\u4e8e \\(\\begin{bmatrix}2&&\\\\&1&\\\\&&-1\\end{bmatrix}\\) \\u3002\\u8fdb\\u800c\\u6c42\\u5f97 \\(\\boldsymbol{A}\\) \\u7684\\u5c5e\\u4e8e\\u7279\\u5f81\\u503c 2, 1, -1 \\u7684\\u7279\\u5f81\\u5411\\u91cf\\u4e3a \\(\\boldsymbol{\\eta}_{1}=\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}, \\boldsymbol{\\eta}_{2}=\\begin{bmatrix}0\\\\1\\\\1\\end{bmatrix}, \\boldsymbol{\\eta}_{3}=\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}\\) \\u3002\\u4ee4 \\(\\boldsymbol{P}=(\\boldsymbol{\\eta}_{1}, \\boldsymbol{\\eta}_{2}, \\boldsymbol{\\eta}_{3})=\\begin{bmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{bmatrix}\\)\\uff0c\\u5219\\u6709 \\(\\boldsymbol{P}^{-1}\\boldsymbol{AP}=\\begin{bmatrix}2&&\\\\&1&\\\\&&-1\\end{bmatrix}\\) \\u3002 \\u53c8 \\(|\\lambda\\boldsymbol{E}-\\boldsymbol{B}|=\\begin{vmatrix}\\lambda-1&0&0\\\\0&\\lambda+1&0\\\\0&6&\\lambda-2\\end{vmatrix}=(\\lambda-1)(\\lambda+1)(\\lambda-2)\\)\\uff0c\\u89e3\\u5f97 \\(\\boldsymbol{B}\\) \\u7684\\u4e09\\u4e2a\\u4e0d\\u540c\\u7279\\u5f81\\u503c\\u4e3a 2, 1, -1\\uff0c\\u56e0\\u6b64 \\(\\boldsymbol{B}\\) \\u4e5f\\u76f8\\u4f3c\\u4e8e \\(\\begin{bmatrix}2&&\\\\&1&\\\\&&-1\\end{bmatrix}\\) \\u3002\\u8fdb\\u800c\\u6c42\\u5f97\\u5bf9\\u5e94\\u4e8e\\u7279\\u5f81\\u503c 2, 1, -1 \\u7684\\u7279\\u5f81\\u5411\\u91cf\\u4e3a \\(\\boldsymbol{\\alpha}_{1}=\\begin{bmatrix}0\\\\2\\\\1\\end{bmatrix}, \\boldsymbol{\\alpha}_{2}=\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}, \\boldsymbol{\\alpha}_{3}=\\begin{bmatrix}0\\\\-1\\\\0\\end{bmatrix}\\) \\u3002\\u4ee4 \\(\\boldsymbol{Q}=(\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3})=\\begin{bmatrix}0&1&0\\\\2&0&-1\\\\1&0&0\\end{bmatrix}\\)\\uff0c\\u5219\\u6709 \\(\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}=\\begin{bmatrix}2&&\\\\&1&\\\\&&-1\\end{bmatrix}\\) \\u3002\\u56e0\\u6b64 \\(\\boldsymbol{P}^{-1}\\boldsymbol{AP}=\\boldsymbol{Q}^{-1}\\boldsymbol{BQ}\\)\\uff0c\\u6240\\u4ee5 \\(\\boldsymbol{B}=\\boldsymbol{QP}^{-1}\\boldsymbol{APQ}^{-1}=(\\boldsymbol{PQ}^{-1})^{-1}\\boldsymbol{A}(\\boldsymbol{PQ}^{-1})\\)\\uff0c\\u4ee4 \\(\\boldsymbol{X}=\\boldsymbol{PQ}^{-1}=\\begin{bmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{bmatrix}\\begin{bmatrix}1&0&0\\\\2&0&-1\\\\1&0&0\\end{bmatrix}^{-1}=\\begin{bmatrix}1&0&0\\\\1&-1&2\\\\1&1&-2\\end{bmatrix}\\) \\uff0c\\u5373\\u4e3a\\u6240\\u6c42 \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-38",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 38,
    "stem": "\\u8bbe \\(\\boldsymbol{A}=\\begin{bmatrix}1&4&-2\\\\0&-1&0\\\\1&2&-2\\end{bmatrix}\\)\\uff0c\\u6c42 \\(\\boldsymbol{A}^{2009}\\) \\u3002",
    "options": null,
    "ans": "\\(\\boldsymbol{A}^{2009}=\\boldsymbol{A}=\\begin{bmatrix}1&4&-2\\\\0&-1&0\\\\1&2&-2\\end{bmatrix}\\)",
    "fb": "解析：\\(A\\) 的特征多项式为 \\(-\\lambda(\\lambda+1)^2\\)，特征值为 \\(0,-1,-1\\)；且 \\(A+I\\) 秩为 \\(1\\)，故 \\(-1\\) 的几何重数为 \\(2\\)，\\(A\\) 可对角化。对任意奇数 \\(m\\) 有 \\(\\lambda^m=\\lambda\\)（\\(0^m=0,(-1)^m=-1\\)），故 \\(A^{2009}=A\\)。故应填 \\(A^{2009}=A=\\begin{bmatrix}1&4&-2\\\\0&-1&0\\\\1&2&-2\\end{bmatrix}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-39",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 39,
    "stem": "\\u8bbe \\(\\boldsymbol{A}=\\begin{bmatrix}3&4\\\\-1&-1\\end{bmatrix}, \\boldsymbol{P}=\\begin{bmatrix}2&3\\\\-1&-1\\end{bmatrix}, \\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{AP}\\)\\uff0c\\u6c42 \\(\\boldsymbol{A}^{100}\\) \\u3002",
    "options": null,
    "ans": "\\(\\boldsymbol{A}^{100}=\\begin{bmatrix}201&400\\\\-100&-199\\end{bmatrix}\\)",
    "fb": "解析：特征多项式为 \\((\\lambda-1)^2\\)，且 \\((A-E)^2=0\\)。令 \\(N=A-E=\\begin{pmatrix}2&4\\\\-1&-2\\end{pmatrix}\\)，则 \\(N^2=0\\)，\\(A=I+N\\)，故 \\(A^{100}=(I+N)^{100}=I+100N=\\begin{pmatrix}201&400\\\\-100&-199\\end{pmatrix}\\)。故应填该矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-7",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 7,
    "stem": "\\u5df2\\u77e5\\u4e09\\u9636\\u77e9\\u9635 \\(\\boldsymbol{A}\\) \\u7684\\u4e09\\u4e2a\\u7279\\u5f81\\u503c\\u5206\\u522b\\u4e3a 1, 4, -2\\uff0c\\u76f8\\u5e94\\u7684\\u7279\\u5f81\\u5411\\u91cf\\u4e3a \\((-2,-1,2)^\\mathrm{T}\\)\\uff0c\\((2,-2,1)^\\mathrm{T}\\) \\u548c \\((1,2,2)^\\mathrm{T}\\) \\u3002\\u6c42 \\(\\boldsymbol{A}\\) \\u53ca \\(\\boldsymbol{A}^{k}\\) (\\(k\\) \\u4e3a\\u6b63\\u6574\\u6570) \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u56e0\\u4e3a \\(\\boldsymbol{A}\\) \\u7684\\u4e09\\u4e2a\\u4e0d\\u540c\\u7279\\u5f81\\u503c\\u5bf9\\u5e94\\u7684\\u7279\\u5f81\\u5411\\u91cf\\u662f\\u7ebf\\u6027\\u65e0\\u5173\\u7684\\uff0c\\u4ee4 \\(\\boldsymbol{P}=\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}\\)\\uff0c\\u5219 \\(\\boldsymbol{P}\\) \\u4e3a\\u53ef\\u9006\\u77e9\\u9635\\uff0c\\u4e14 \\(\\boldsymbol{P}^{-1}\\boldsymbol{AP}=\\boldsymbol{\\Lambda}=\\begin{bmatrix}1&&\\\\&4&\\\\&&-2\\end{bmatrix}\\) \\u3002 \\u4e8e\\u662f \\(\\boldsymbol{A}=\\boldsymbol{P\\Lambda P}^{-1}=\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}\\begin{bmatrix}1&&\\\\&4&\\\\&&-2\\end{bmatrix}\\times \\frac{1}{9}\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}=\\frac{1}{9}\\begin{bmatrix}-2&8&-2\\\\-1&-8&-4\\\\2&4&-4\\end{bmatrix}\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}=\\frac{1}{9}\\begin{bmatrix}2&-2&0\\\\-2&1&-2\\\\0&-2&-2\\end{bmatrix}\\) \\u3002 \\u6240\\u4ee5 \\(\\boldsymbol{A}^{k}=\\boldsymbol{P\\Lambda}^{k}\\boldsymbol{P}^{-1}=\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}\\begin{bmatrix}1&&\\\\&4^{k}&\\\\&&(-2)^{k}\\end{bmatrix}\\times \\frac{1}{9}\\begin{bmatrix}-2&2&1\\\\-1&-2&2\\\\2&1&2\\end{bmatrix}=\\frac{1}{9}\\begin{bmatrix}2+4^{k+1}+(-2)^{k}&2-4^{k+1}+2(-2)^{k}&-4+2\\cdot 4^{k}+2(-2)^{k}\\\\2-4^{k+1}+2(-2)^{k}&1+4^{k+1}+4(-2)^{k}&-2-2\\cdot 4^{k}+4(-2)^{k}\\\\-4+2\\cdot 4^{k}+2(-2)^{k}&-2+4^{k}+4(-2)^{k}&4+4^{k}+4(-2)^{k}\\end{bmatrix}\\) \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-40",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 40,
    "stem": "\\(\\lim_{k\\to\\infty}\\begin{bmatrix}\\frac{1}{2}&-1&2\\\\0&\\frac{1}{3}&1\\\\0&0&\\frac{1}{4}\\end{bmatrix}^{k}=\\) ______ \\u3002",
    "options": null,
    "ans": "\\(\\begin{bmatrix}0&0&0\\\\0&0&0\\\\0&0&0\\end{bmatrix}\\)",
    "fb": "解析：上三角矩阵的幂仍上三角，其对角元为 \\((1/2)^k,(1/3)^k,(1/4)^k\\to0\\)，故极限为零矩阵。故应填 \\(\\begin{pmatrix}0&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-41",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 41,
    "stem": "\\u8bbe\\u5b9e\\u5bf9\\u79f0\\u77e9\\u9635 \\(\\boldsymbol{A}\\) \\u6ee1\\u8db3 \\(\\boldsymbol{A}^{3}+\\boldsymbol{A}^{2}+\\boldsymbol{A}=3\\boldsymbol{E}\\)\\uff0c\\u5219 \\(\\boldsymbol{A}=\\) ______ \\u3002",
    "options": null,
    "ans": "\\(\\boldsymbol{E}\\)",
    "fb": "解析：\\(A\\) 实对称，其特征值 \\(\\lambda\\) 为实数且满足 \\(\\lambda^3+\\lambda^2+\\lambda-3=0=(\\lambda-1)(\\lambda^2+2\\lambda+3)=0\\)；后一因子无实根，故 \\(\\lambda=1\\)，即 \\(A\\) 的特征值全为 \\(1\\)，得 \\(A=E\\)。故应填 \\(E\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-42",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 42,
    "stem": "\\u8bbe \\(\\boldsymbol{A}\\) \\u662f\\u4e09\\u9636\\u5b9e\\u5bf9\\u79f0\\u77e9\\u9635\\uff0c\\u79e9 \\(r(\\boldsymbol{A})=2\\)\\uff0c\\u82e5 \\(\\boldsymbol{A}^{2}=\\boldsymbol{A}\\)\\uff0c\\u5219 \\(\\boldsymbol{A}\\) \\u7684\\u7279\\u5f81\\u503c\\u662f ______ \\u3002",
    "options": null,
    "ans": "1, 1, 0",
    "fb": "解析：由 \\(A^2=A\\) 知特征值只可能为 \\(0\\) 或 \\(1\\)；又 \\(r(A)=2\\)，故特征值为 \\(1,1,0\\)。故应填 \\(1,1,0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-18",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 18,
    "stem": "\\u8bbe \\(\\boldsymbol{A}\\) \\u4e3a\\u5b9e\\u5bf9\\u79f0\\u77e9\\u9635\\uff0c\\(\\lambda_{1}\\) \\u4e0e \\(\\lambda_{2}\\) \\u662f \\(\\boldsymbol{A}\\) \\u7684\\u4e0d\\u540c\\u7279\\u5f81\\u503c\\uff0c\\(\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}\\) \\u5206\\u522b\\u662f\\u5c5e\\u4e8e \\(\\lambda_{1}\\) \\u4e0e \\(\\lambda_{2}\\) \\u7684\\u7279\\u5f81\\u5411\\u91cf\\uff0c\\u8bc1\\u660e\\uff1a\\(\\boldsymbol{\\alpha}_{1}\\) \\u4e0e \\(\\boldsymbol{\\alpha}_{2}\\) \\u6b63\\u4ea4 \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u56e0 \\(\\boldsymbol{A}^\\mathrm{T}=\\boldsymbol{A}\\)\\uff0c\\(\\boldsymbol{A\\alpha}_{1}=\\lambda_{1}\\boldsymbol{\\alpha}_{1}, \\boldsymbol{A\\alpha}_{2}=\\lambda_{2}\\boldsymbol{\\alpha}_{2}, \\lambda_{1}\\neq \\lambda_{2}\\) \\u3002\\u6240\\u4ee5 \\(\\lambda_{1}\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=(\\lambda_{1}\\boldsymbol{\\alpha}_{1})^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=(\\boldsymbol{A\\alpha}_{1})^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{A}^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{A\\alpha}_{2}=\\lambda_{2}\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{\\alpha}_{2}\\)\\uff0c\\u4ece\\u800c \\((\\lambda_{1}-\\lambda_{2})\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=0\\) \\u3002\\u53c8 \\(\\lambda_{1}\\neq \\lambda_{2}\\)\\uff0c\\u6240\\u4ee5 \\(\\boldsymbol{\\alpha}_{1}^\\mathrm{T}\\boldsymbol{\\alpha}_{2}=0\\)\\uff0c\\u5373 \\(\\boldsymbol{\\alpha}_{1}\\) \\u4e0e \\(\\boldsymbol{\\alpha}_{2}\\) \\u6b63\\u4ea4 \\u3002\\u70b9\\u8bc4\\uff1a\\u672c\\u9898\\u662f\\u5b9e\\u5bf9\\u79f0\\u77e9\\u9635\\u7684\\u4e00\\u4e2a\\u91cd\\u8981\\u6027\\u8d28\\uff0c\\u8981\\u638c\\u63e1\\u4e14\\u8981\\u4f1a\\u8fd0\\u7528 \\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-19",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 19,
    "stem": "\\u8bbe \\(\\boldsymbol{A}\\) \\u4e3a \\(n\\) \\u9636\\u5b9e\\u77e9\\u9635\\uff0c\\u8bc1\\u660e\\uff1a\\(\\boldsymbol{A}\\) \\u662f\\u5bf9\\u79f0\\u77e9\\u9635\\u7684\\u5145\\u5206\\u5fc5\\u8981\\u6761\\u4ef6\\u662f \\(\\boldsymbol{A}\\) \\u6709 \\(n\\) \\u4e2a\\u76f8\\u4e92\\u6b63\\u4ea4\\u7684\\u7279\\u5f81\\u5411\\u91cf \\u3002",
    "options": null,
    "ans": null,
    "fb": "\\u8be5\\u9898\\u7b54\\u6848\\u8be6\\u89c1\\u4e0b\\u4e00\\u9875\\u3002",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-20",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 20,
    "stem": "设实对称矩阵 \\( A \\) 与 \\( B \\) 相似，证明存在正交矩阵 \\( P \\)，使 \\( P^{-1}AP = P^{T}AP = B \\)。",
    "options": null,
    "ans": null,
    "fb": "因 \\( A \\) 与 \\( B \\) 相似，故 \\( A,B \\) 特征值相同，设为 \\( \\lambda_1,\\lambda_2,\\cdots,\\lambda_n \\)。又因 \\( A \\) 与 \\( B \\) 为实对称矩阵，故存在正交阵 \\( P_1,P_2 \\) 满足 \\( P_1^{-1}AP_1 = P_2^{-1}BP_2 = \\mathrm{diag}(\\lambda_1,\\cdots,\\lambda_n) \\)。因此 \\( P_1^{-1}AP_1 = P_2^{-1}BP_2 \\)，即 \\( B=(P_1P_2^{-1})^{-1}A(P_1P_2^{-1}) \\)。令 \\( P=P_1P_2^{-1} \\)，则 \\( P^{T}P=E \\)，故 \\( P \\) 为正交矩阵，于是 \\( P^{-1}AP=P^{T}AP=B \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-proof-21",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 21,
    "stem": "实对称矩阵 \\( A \\) 与 \\( B \\) 相似的充分必要条件是 \\( A \\) 与 \\( B \\) 有相同的特征值。",
    "options": null,
    "ans": null,
    "fb": "若 \\( A \\) 与 \\( B \\) 相似，则 \\( A \\) 与 \\( B \\) 有相同的特征值。反之，设 \\( A,B \\) 的特征值都为 \\( \\lambda_1,\\lambda_2,\\cdots,\\lambda_n \\)，由于 \\( A \\) 和 \\( B \\) 都是实对称矩阵，故存在可逆矩阵 \\( P \\) 和 \\( Q \\)，使 \\( P^{-1}AP = Q^{-1}BQ = \\mathrm{diag}(\\lambda_1,\\cdots,\\lambda_n) \\)。由 \\( P^{-1}AP=Q^{-1}BQ \\) 得 \\( QP^{-1}APQ^{-1}=B \\)。取 \\( R=PQ^{-1} \\)，则 \\( R \\) 为可逆矩阵，且 \\( R^{-1}AR=B \\)，即 \\( A \\) 与 \\( B \\) 相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-8",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 8,
    "stem": "将矩阵 \\( A = \\begin{bmatrix} 1 & -2 & 2 \\\\ -2 & -2 & 4 \\\\ 2 & 4 & -2 \\end{bmatrix} \\) 正交相似对角化，并求出正交矩阵 \\( Q \\)，使 \\( Q^{-1}AQ = \\Lambda \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( |\\lambda E-A|=(\\lambda-2)^2(\\lambda+7) \\) 得 \\( A \\) 的特征值为 \\( \\lambda_1=\\lambda_2=2 \\)（二重），\\( \\lambda_3=-7 \\)。当 \\( \\lambda=2 \\) 时，基础解系为 \\( \\eta_1=(-2,1,0)^T \\)，\\( \\eta_2=(2,0,1)^T \\)；当 \\( \\lambda=-7 \\) 时，基础解系为 \\( \\eta_3=(-1,-2,2)^T \\)。利用施密特正交化方法将 \\( \\eta_1,\\eta_2 \\) 正交化，再将 \\( \\beta_1,\\beta_2,\\eta_3 \\) 单位化，得正交矩阵 \\( Q \\)，且 \\( Q^{-1}AQ=\\mathrm{diag}(2,2,-7) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-9",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 9,
    "stem": "设 \\( A = \\begin{bmatrix} 1 & 2 & 2 \\\\ 2 & 1 & 2 \\\\ 2 & 2 & 1 \\end{bmatrix} \\)，求 \\( A \\) 的特征值及对应的特征向量，矩阵 \\( A \\) 是否与对角矩阵相似，若相似，写出对角阵 \\( \\Lambda \\)，并计算 \\( A^{10}\\begin{bmatrix} 2 \\\\ 3 \\\\ 1 \\end{bmatrix} \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( |\\lambda E-A|=(\\lambda-5)(\\lambda+1)^2 \\) 得特征值 \\( 5,-1,-1 \\)。由于 \\( A \\) 有三个线性无关的特征向量，故 \\( A \\) 与对角阵 \\( \\Lambda \\) 相似。取 \\( P=\\begin{bmatrix} 1 & -1 & -1 \\\\ 1 & 1 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix} \\)，由 \\( A=P\\Lambda P^{-1} \\) 得 \\( A^{10}=P\\Lambda^{10}P^{-1} \\)，从而计算得结果。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-mc-14",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 14,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶对称阵，\\( B \\) 是反对称阵，则下列矩阵中不能正交相似对角化的是 ______。",
    "options": [
      [
        "A",
        "\\( AB-BA \\)"
      ],
      [
        "B",
        "\\( A^T(B+B^T)A \\)"
      ],
      [
        "C",
        "\\( BAB \\)"
      ],
      [
        "D",
        "\\( ABA \\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：记 (A) \\(AB-BA\\)：因 \\(A^T=A,\\ B^T=-B\\)，有 \\((AB-BA)^T=AB-BA\\)，对称，可正交对角化。(B) \\(A^T(B+B^T)A=A^T\\cdot0\\cdot A=0\\)，对称可对角化。(C) \\((BAB)^T=B^TA^TB^T=(-B)A(-B)=BAB\\)，对称可对角化。(D) \\((ABA)^T=A^TB^TA^T=A(-B)A=-ABA\\)，为反对称，一般不能正交相似对角化。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-10",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 10,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 1 & 1 & a \\\\ 1 & a & 1 \\\\ a & 1 & 1 \\end{bmatrix} \\)，\\( \\beta=\\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix} \\)。已知线性方程组 \\( Ax=\\beta \\) 有解但不唯一，试求：(1) \\( a \\) 的值；(2) 正交矩阵 \\( Q \\)，使 \\( Q^TAQ \\) 为对角矩阵。",
    "options": null,
    "ans": null,
    "fb": "(1) 对增广矩阵作初等行变换，由方程组有解但不唯一知 \\( r(A)=r(A:\\beta)<3 \\)，故 \\( a=-2 \\)（\\( a=1 \\) 时无解）。(2) 当 \\( a=-2 \\) 时，\\( A=\\begin{bmatrix} 1 & 1 & -2 \\\\ 1 & -2 & 1 \\\\ -2 & 1 & 1 \\end{bmatrix} \\)，特征多项式 \\( |\\lambda E-A|=\\lambda(\\lambda-3)(\\lambda+3) \\)，特征值为 \\( 3,-3,0 \\)，对应的特征向量单位化后构成正交矩阵 \\( Q \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-11",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 11,
    "stem": "设三阶实对称矩阵 \\( A \\) 的各行元素之和均为 \\( 3 \\)，向量 \\( \\alpha_1=(-1,2,-1)^T \\)，\\( \\alpha_2=(0,-1,1)^T \\) 是线性方程组 \\( Ax=0 \\) 的两个解。(I) 求 \\( A \\) 的特征值与特征向量；(II) 求正交矩阵 \\( Q \\) 和对角矩阵 \\( \\Lambda \\)，使得 \\( Q^TAQ=\\Lambda \\)；(III) 求 \\( A \\) 及 \\( \\left(A-\\frac{3}{2}E\\right)^6 \\)，其中 \\( E \\) 为三阶单位矩阵。",
    "options": null,
    "ans": null,
    "fb": "由各行元素之和为 \\( 3 \\) 知 \\( A(1,1,1)^T=3(1,1,1)^T \\)，故 \\( 3 \\) 是特征值，\\( (1,1,1)^T \\) 是对应特征向量。由 \\( A\\alpha_1=0 \\)，\\( A\\alpha_2=0 \\) 知 \\( 0 \\) 是二重特征值，\\( \\alpha_1,\\alpha_2 \\) 为属于 \\( 0 \\) 的两个线性无关特征向量。将 \\( \\alpha_1,\\alpha_2 \\) 正交化，再与 \\( \\alpha_3 \\) 一起单位化得 \\( Q \\)。由 \\( A=Q\\Lambda Q^T \\) 计算得 \\( A \\)，进而 \\( \\left(A-\\frac{3}{2}E\\right)^6=Q\\left(\\Lambda-\\frac{3}{2}E\\right)^6Q^T=\\left(\\frac{3}{2}\\right)^6E \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-12",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 12,
    "stem": "设实对称矩阵 \\( A = \\begin{bmatrix} a & 1 & 1 \\\\ 1 & a & -1 \\\\ 1 & -1 & a \\end{bmatrix} \\)，求可逆矩阵 \\( P \\)，使 \\( P^{-1}AP \\) 为对角矩阵，并计算行列式 \\( |A-E| \\) 的值。",
    "options": null,
    "ans": null,
    "fb": "矩阵 \\( A \\) 的特征多项式 \\( |\\lambda E-A|=(\\lambda-a-1)^2(\\lambda-a+2) \\)，特征值为 \\( \\lambda_1=\\lambda_2=a+1 \\)，\\( \\lambda_3=a-2 \\)。对应的线性无关特征向量分别为 \\( \\alpha_1=(1,1,0)^T \\)，\\( \\alpha_2=(1,0,1)^T \\)，\\( \\alpha_3=(-1,1,1)^T \\)。令 \\( P=(\\alpha_1,\\alpha_2,\\alpha_3) \\)，则 \\( P^{-1}AP=\\mathrm{diag}(a+1,a+1,a-2) \\)。由 \\( |A-E|=|P\\Lambda P^{-1}-PP^{-1}|=|P||\\Lambda-E||P^{-1}|=|\\Lambda-E|=a^2(a-3) \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-13",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 13,
    "stem": "设矩阵 \\( A = \\begin{bmatrix} 0 & 1 & 0 & 0 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 0 & y & 1 \\\\ 0 & 0 & 1 & 2 \\end{bmatrix} \\)。(1) 已知 \\( A \\) 的一个特征值为 \\( 3 \\)，试求 \\( y \\)；(2) 求矩阵 \\( P \\)，使 \\( (AP)^T(AP) \\) 为对角矩阵。",
    "options": null,
    "ans": null,
    "fb": "(1) 由 \\( |\\lambda E-A|=(\\lambda^2-1)[\\lambda^2-(y+2)\\lambda+2y-1] \\)，将 \\( \\lambda=3 \\) 代入得 \\( y=2 \\)。(2) 此时 \\( A^T=A \\)，故 \\( (AP)^T(AP)=P^TA^2P \\)。求得 \\( A^2 \\) 的特征值为 \\( 1 \\)（三重）和 \\( 9 \\)，将对应特征向量正交单位化后得正交矩阵 \\( P \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-22",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 22,
    "stem": "设 \\( A \\) 为实对称矩阵，且 \\( A^2=A \\)。证明：存在正交矩阵 \\( Q \\)，使 \\( Q^{-1}AQ \\) 为对角元只含 \\( 1 \\) 与 \\( 0 \\) 的对角矩阵。",
    "options": null,
    "ans": null,
    "fb": "设 \\( \\lambda \\) 为 \\( A \\) 的任一特征值，且 \\( A\\alpha=\\lambda\\alpha \\)（\\( \\alpha\\neq0 \\)）。由于 \\( A^2=A \\)，故 \\( \\lambda\\alpha=A\\alpha=A^2\\alpha=A(A\\alpha)=A(\\lambda\\alpha)=\\lambda^2\\alpha \\)，从而 \\( \\lambda^2=\\lambda \\)，故 \\( \\lambda=1 \\) 或 \\( 0 \\)。又因 \\( A \\) 是实对称的，故存在正交方阵 \\( Q \\)，使 \\( Q^{-1}AQ \\) 为对角阵，其对角元只能为 \\( 1 \\) 或 \\( 0 \\)，结论成立。",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-43",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 43,
    "stem": "设三阶实对称矩阵 \\( A \\) 的秩为 \\( 2 \\)，\\( \\lambda_1=\\lambda_2=6 \\) 是 \\( A \\) 的二重特征值。若 \\( \\alpha_1=(1,1,0)^T \\)，\\( \\alpha_2=(2,1,1)^T \\)，\\( \\alpha_3=(-1,2,-3)^T \\) 都是 \\( A \\) 的属于特征值 \\( 6 \\) 的特征向量。(1) 求 \\( A \\) 的另一特征值和对应的特征向量；(2) 求矩阵 \\( A \\)。",
    "options": null,
    "ans": "(1) 另一特征值 \\( \\lambda_3=0 \\)，对应的特征向量为 \\( c(-1,1,1)^T \\)（\\( c\\neq0 \\)）；(2) \\( A=\\begin{bmatrix} 4 & 2 & 2 \\\\ 2 & 4 & -2 \\\\ 2 & -2 & 4 \\end{bmatrix} \\)。",
    "fb": "解析：实对称阵 \\(A\\) 秩 \\(2\\) 且 \\(\\lambda=6\\) 为二重，故第三特征值 \\(\\lambda_3=0\\)。属于 \\(0\\) 的特征向量应与 \\(\\alpha_1,\\alpha_2\\) 正交，即与 \\((1,1,0),(2,1,1)\\) 正交，得 \\(c(-1,1,1)^T\\)。由谱分解 \\(A=6P_1+6P_2+0\\) 得 \\(A=\\begin{bmatrix}4&2&2\\\\2&4&-2\\\\2&-2&4\\end{bmatrix}\\)。故应填 (1) \\(\\lambda_3=0\\)，特征向量 \\(c(-1,1,1)^T\\)；(2) 该 \\(A\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-calc-14",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 14,
    "stem": "设三阶实对称矩阵 \\( A \\) 的特征值 \\( \\lambda_1=1 \\)，\\( \\lambda_2=2 \\)，\\( \\lambda_3=-2 \\)，且 \\( \\alpha_1=(1,-1,1)^T \\) 是 \\( A \\) 的属于 \\( \\lambda_1 \\) 的一个特征向量。记 \\( B=A^5-4A^3+E \\)，其中 \\( E \\) 为三阶单位矩阵。(1) 验证 \\( \\alpha_1 \\) 是矩阵 \\( B \\) 的特征向量，并求 \\( B \\) 的全部特征值与特征向量；(2) 求矩阵 \\( B \\)。",
    "options": null,
    "ans": null,
    "fb": "由 \\( A\\alpha_1=\\lambda_1\\alpha_1 \\) 得 \\( B\\alpha_1=(A^5-4A^3+E)\\alpha_1=(\\lambda_1^5-4\\lambda_1^3+1)\\alpha_1=-2\\alpha_1 \\)。因为 \\( A \\) 的全部特征值为 \\( 1,2,-2 \\)，所以 \\( B \\) 的全部特征值为 \\( \\lambda_i^5-4\\lambda_i^3+1 \\)（\\( i=1,2,3 \\)），即 \\( -2,1,1 \\)。由于 \\( A \\) 是实对称矩阵，\\( B \\) 也是实对称矩阵，属于不同特征值的特征向量正交，从而求得属于 \\( 1 \\) 的特征向量。令 \\( P=(\\alpha_1,\\alpha_2,\\alpha_3) \\)，由 \\( B=P\\mathrm{diag}(-2,1,1)P^{-1} \\) 计算得 \\( B \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-44",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 44,
    "stem": "设三阶实对称矩阵 \\( A \\) 的特征值是 \\( 1,2,3 \\)；矩阵 \\( A \\) 的属于特征值 \\( 1,2 \\) 的特征向量分别是 \\( \\alpha_1=(-1,-1,1)^T \\)，\\( \\alpha_2=(1,-2,-1)^T \\)。(1) 求 \\( A \\) 的属于特征值 \\( 3 \\) 的特征向量；(2) 求矩阵 \\( A \\)。",
    "options": null,
    "ans": "(1) 属于 \\( 3 \\) 的特征向量为 \\( k(1,0,1)^T \\)（\\( k\\neq0 \\)）；(2) \\( A=\\frac{1}{6}\\begin{bmatrix} 13 & -2 & 5 \\\\ -2 & 10 & 2 \\\\ 5 & 2 & 13 \\end{bmatrix} \\)。",
    "fb": "解析：不同特征值的特征向量正交。设 \\(\\lambda=3\\) 的特征向量 \\((x,y,z)^T\\) 与 \\(\\alpha_1=(-1,-1,1),\\alpha_2=(1,-2,-1)\\) 均正交，解得 \\(k(1,0,1)^T\\)。由正交相似 \\(A=Q\\operatorname{diag}(1,2,3)Q^T\\) 得 \\(A=\\frac16\\begin{bmatrix}13&-2&5\\\\-2&10&2\\\\5&2&13\\end{bmatrix}\\)。故应填 (1) \\(k(1,0,1)^T\\)；(2) 该 \\(A\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-45",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 45,
    "stem": "试构造一个三阶实对称矩阵 \\( A \\)，使其特征值为 \\( \\lambda_1=\\lambda_2=1 \\)，\\( \\lambda_3=-1 \\)，且有特征向量 \\( \\xi_1=(1,1,1)^T \\)，\\( \\xi_2=(2,2,1)^T \\)。",
    "options": null,
    "ans": "\\( A=\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\)。",
    "fb": "解析：\\(\\lambda=1\\) 为二重，\\(\\xi_1,\\xi_2\\) 均属其特征子空间；与二者正交的向量 \\((1,-1,0)^T\\) 属 \\(\\lambda=-1\\)。将 \\(A\\) 按谱分解（或直接验证）可取 \\(A=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}\\)，其特征值为 \\(1,1,-1\\) 且 \\(\\xi_1,\\xi_2\\) 为 \\(\\lambda=1\\) 的特征向量。故应填该矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-proof-24",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 24,
    "stem": "若 \\( A \\) 是 \\( n \\) 阶正交矩阵,\\( \\lambda \\) 是 \\( A \\) 的实特征值,\\( x \\) 是 \\( A \\) 的属于 \\( \\lambda \\) 的特征向量.求证 \\( x \\) 只能是 \\( \\pm 1 \\),并且 \\( x \\) 也是 \\( A^{T} \\) 的特征向量.",
    "options": null,
    "ans": null,
    "fb": "因 \\( \\lambda \\) 是 \\( A \\) 的特征值,从而 \\( \\lambda \\) 也是 \\( A^{T} \\) 的特征值,又 \\( AA^{T}=E \\),所以 \\( \\lambda^{2}=1 \\),即 \\( \\lambda=\\pm 1 \\).若 \\( \\lambda=1 \\),代入 \\( Ax=\\lambda x \\)得 \\( Ax=x \\).两边左乘 \\( A^{T} \\)得 \\( A^{T}Ax=A^{T}x \\),即 \\( A^{T}x=Ex=x \\),所以 \\( x \\) 也是 \\( A^{T} \\) 的属于 \\( \\lambda=1 \\) 的特征向量.同理可证,当 \\( \\lambda=-1 \\)时,由 \\( Ay=-y \\),可得 \\( A^{T}y=-y \\).故 \\( A^{T} \\) 的属于 \\( \\lambda=\\pm 1 \\)的特征向量相同.",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-25",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 25,
    "stem": "设 \\( A \\) 为实对称矩阵,\\( B \\) 为实反对称矩阵,且 \\( AB=BA \\),\\( A-B \\) 是可逆矩阵.证明:\\((A+B)(A-B)^{-1}\\)是正交矩阵.",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A^{T}=A,B^{T}=-B \\),而 \\( AB=BA \\),于是得 \\( (A-B)(A+B)=(A+B)(A-B) \\).从而 \\( [(A+B)(A-B)^{-1}]^{T}(A+B)(A-B)^{-1}=[(A-B)^{-1}]^{T}(A+B)^{T}(A+B)(A-B)^{-1}=(A^{T}-B^{T})^{-1}(A^{T}+B^{T})(A+B)(A-B)^{-1}=(A+B)^{-1}(A+B)(A-B)(A-B)^{-1}=E \\).故 \\((A+B)(A-B)^{-1}\\)为正交矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-proof-26",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 26,
    "stem": "设分块矩阵 \\( X=\\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} \\) 是正交矩阵,其中 \\( A_{m \\times m},C_{n \\times n} \\).求证 \\( A,C \\) 均为正交矩阵,且 \\( B=0 \\).",
    "options": null,
    "ans": null,
    "fb": "由题意知 \\( \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}\\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}^{T}=\\begin{bmatrix} E_{m} & 0 \\\\ 0 & E_{n} \\end{bmatrix} \\),即 \\( \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}\\begin{bmatrix} A^{T} & 0^{T} \\\\ B^{T} & C^{T} \\end{bmatrix}=\\begin{bmatrix} AA^{T}+BB^{T} & BC^{T} \\\\ CB^{T} & CC^{T} \\end{bmatrix}=\\begin{bmatrix} E_{m} & 0 \\\\ 0 & E_{n} \\end{bmatrix} \\).因此 \\( AA^{T}+BB^{T}=E_{m}(*) \\),\\( BC^{T}=0 \\),\\( CB^{T}=0 \\),\\( CC^{T}=E_{n} \\).所以 \\( C \\) 为正交矩阵,从而 \\( C \\) 可逆.由 \\( BC^{T}=0 \\),可得 \\( B=0 \\),代入 \\( (*) \\)式得 \\( AA^{T}=E \\)故 \\( A \\) 也是正交矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-46",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 46,
    "stem": "已知 \\( A=\\begin{bmatrix} a & -\\frac{3}{7} & \\frac{2}{7} \\\\ b & \\frac{6}{7} & c \\\\ -\\frac{3}{7} & \\frac{2}{7} & d \\end{bmatrix} \\)为正交矩阵,求 \\( a,b,c,d \\)的值.",
    "options": null,
    "ans": "\\( a=-\\frac{6}{7},d=-\\frac{6}{7},b=-\\frac{2}{7},c=\\frac{3}{7} \\)",
    "fb": "解析：正交矩阵各行（列）为单位向量且互相正交。由第一行 \\((a,-3/7,2/7)\\) 单位长得 \\(a^2+9/49+4/49=1\\Rightarrow a=\\pm6/7\\)；结合列正交条件解得 \\(a=-6/7,\\ d=-6/7,\\ b=-2/7,\\ c=3/7\\)。故应填该组值。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-proof-27",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 27,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶对称矩阵,且满足 \\( A^{4}-4A+3E=0 \\).证明:\\( A-2E \\)为正交矩阵.",
    "options": null,
    "ans": null,
    "fb": "由定义,只须验证 \\( (A-2E)(A-2E)^{T}=E \\)即可.因为 \\( A^{T}=A \\),则 \\( (A-2E)(A-2E)^{T}=(A-2E)(A^{T}-2E^{T})=(A-2E)(A-2E)=A^{2}-4A+4E=A^{2}-4A+3E+E=0+E=E \\).故 \\( A-2E \\)为正交矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-47",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 47,
    "stem": "设三维向量 \\( \\alpha,\\beta \\) 满足 \\( \\alpha^{T}\\beta=2 \\),其中 \\( \\alpha^{T} \\) 是 \\( \\alpha \\) 的转置,则矩阵 \\( \\beta\\alpha^{T} \\) 的非零特征值为______.",
    "options": null,
    "ans": "\\( 2 \\)",
    "fb": "解析：秩 \\(1\\) 矩阵 \\(\\beta\\alpha^T\\) 的非零特征值为 \\(\\alpha^T\\beta=2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-48",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 48,
    "stem": "设四阶方阵 \\( A \\) 满足条件 \\( |3E+A|=0 \\),\\( AA^{T}=2E \\),\\( |A|<0 \\),其中 \\( E \\) 是四阶单位阵.求方阵 \\( A \\) 的伴随矩阵 \\( A^{*} \\)的一个特征值.",
    "options": null,
    "ans": "\\( -\\frac{4}{3} \\)",
    "fb": "解析：\\(|3E+A|=0\\Rightarrow A\\) 有特征值 \\(-3\\)；由 \\(AA^T=2E\\) 得 \\(|A|^2=2^4=16\\)，又 \\(|A|<0\\) 故 \\(|A|=-4\\)；于是 \\(A^*\\) 的对应特征值 \\(|A|/\\lambda=(-4)/(-3)=4/3\\)。故应填 \\(4/3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-49",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 49,
    "stem": "若四阶矩阵 \\( A \\) 的特征值为 \\( -1,1,2,3 \\),则 \\( A^{*} \\) 的伴随矩阵 \\( (A^{*})^{*} \\)的特征值为______.",
    "options": null,
    "ans": "\\( -36,36,72,108 \\)",
    "fb": "解析：\\(A\\) 特征值 \\(-1,1,2,3\\)，\\(|A|=-6\\)。\\((A^*)^*=|A|^{n-1}(A^*)^{-1}\\) 的特征值为 \\(|A|^{n-1}/(A^*_i)\\)；亦可直接：\\(A^*\\) 特征值 \\(|A|/\\lambda=6,-6,-3,-2\\)，\\((A^*)^*\\) 特征值为 \\(|A^*|/(6,-6,-3,-2)\\)，其中 \\(|A^*|=|A|^{3}=-216\\)，得 \\(-36,36,72,108\\)。故应填 \\(-36,36,72,108\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-50",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 50,
    "stem": "设三阶矩阵 \\( A \\) 的特征值为 \\( 0,1,2 \\),求 \\( A^{*} \\) 和 \\( (A^{*})^{2} \\)的特征值.",
    "options": null,
    "ans": "\\( A^{*} \\)的特征值为 \\( 2,0,0 \\);\\( (A^{*})^{2} \\)的特征值为 \\( 0 \\)(三重)",
    "fb": "解析：\\(A\\) 特征值 \\(0,1,2\\)。伴随 \\(A^*\\) 的特征值为其余两特征值之积，即 \\(1\\cdot2=2,\\ 0\\cdot2=0,\\ 0\\cdot1=0\\)，故 \\(A^*\\) 特征值为 \\(2,0,0\\)；从而 \\((A^*)^2\\) 特征值为 \\(4,0,0\\)。故应填 \\(A^*\\) 的特征值为 \\(2,0,0\\)，\\((A^*)^2\\) 的特征值为 \\(4,0,0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-15",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 15,
    "stem": "设 \\( \\alpha \\) 是 \\( A \\) 的属于特征值 \\( \\lambda \\)的特征向量,则 \\( \\alpha \\) 不是______的特征向量. (A)\\((A+E)^{2}\\) (B)\\(-2A\\) (C)\\( A^{T} \\) (D)\\( A^{*} \\)",
    "options": [
      [
        "A",
        "(A+E)^{2}"
      ],
      [
        "B",
        "-2A"
      ],
      [
        "C",
        "A^{T}"
      ],
      [
        "D",
        "A^{*}"
      ]
    ],
    "ans": "C",
    "fb": "解析：若 \\(A\\alpha=\\lambda\\alpha\\)，则 (A) \\((A+E)^2\\alpha=(\\lambda+1)^2\\alpha\\)；(B) \\(-2A\\alpha=-2\\lambda\\alpha\\)；(D) \\(A^*\\alpha=|A|/\\lambda\\cdot\\alpha\\)（\\(A\\) 可逆时）均为其特征向量。而 \\(A^T\\) 一般不与 \\(A\\) 共特征向量。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-51",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 51,
    "stem": "设 \\( A=\\begin{bmatrix} 0 & 0 & 1 \\\\ x & 1 & y \\\\ 1 & 0 & 0 \\end{bmatrix} \\)有三个线性无关的特征向量,则 \\( x \\) 和 \\( y \\) 应满足条件为______.",
    "options": null,
    "ans": "\\( x+y=0 \\)",
    "fb": "解析：特征多项式为 \\(-(\\lambda-1)^2(\\lambda+1)\\)，故 \\(\\lambda=1\\) 为二重特征值。要有 \\(3\\) 个线性无关特征向量，需 \\(\\lambda=1\\) 的特征子空间维数为 \\(2\\)，即 \\(r(A-E)=1\\)，由此得 \\(x+y=0\\)。故应填 \\(x+y=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-28",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 28,
    "stem": "已知矩阵 \\( A=\\begin{bmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ -a_{0} & -a_{1} & -a_{2} & -a_{3} \\end{bmatrix}. (1)求 \\)\\( A \\)的特征多项式; (2)如果 \\( \\lambda_{0} \\) 是 \\( A \\)的特征值,证明 \\( (1,\\lambda_{0},\\lambda_{0}^{2},\\lambda_{0}^{3})^{T} \\)是 \\( \\lambda_{0} \\)所对应的特征向量.",
    "options": null,
    "ans": null,
    "fb": "(1)由 \\( |\\lambda E-A|=\\begin{vmatrix} \\lambda & -1 & 0 & 0 \\\\ 0 & \\lambda & -1 & 0 \\\\ 0 & 0 & \\lambda & -1 \\\\ a_{0} & a_{1} & a_{2} & \\lambda+a_{3} \\end{vmatrix} \\),将其按第四行展开得 \\( |\\lambda E-A|=a_{0}+a_{1}\\lambda+a_{2}\\lambda^{2}+a_{3}\\lambda^{3}+\\lambda^{4} \\).(2)因为 \\( \\lambda_{0} \\) 是 \\( A \\)的特征值,所以 \\( |\\lambda_{0}E-A|=0 \\),即 \\( a_{0}+a_{1}\\lambda_{0}+a_{2}\\lambda_{0}^{2}+a_{3}\\lambda_{0}^{3}+\\lambda_{0}^{4}=0 \\).于是 \\( A\\begin{bmatrix} 1 \\\\ \\lambda_{0} \\\\ \\lambda_{0}^{2} \\\\ \\lambda_{0}^{3} \\end{bmatrix}=\\begin{bmatrix} \\lambda_{0} \\\\ \\lambda_{0}^{2} \\\\ \\lambda_{0}^{3} \\\\ -a_{0}-a_{1}\\lambda_{0}-a_{2}\\lambda_{0}^{2}-a_{3}\\lambda_{0}^{3} \\end{bmatrix}=\\lambda_{0}\\begin{bmatrix} 1 \\\\ \\lambda_{0} \\\\ \\lambda_{0}^{2} \\\\ \\lambda_{0}^{3} \\end{bmatrix} \\).因此,向量 \\( (1,\\lambda_{0},\\lambda_{0}^{2},\\lambda_{0}^{3})^{T} \\)是 \\( A \\)的属于特征值 \\( \\lambda_{0} \\)的特征向量.",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-calc-15",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 15,
    "stem": "设 \\( A \\) 是三阶矩阵,\\( A=E+\\alpha\\beta^{T} \\),\\( \\alpha \\) 与 \\( \\beta \\) 是三维列向量,且 \\( \\alpha^{T}\\beta\\neq 0 \\).求 \\( A \\) 的特征值与特征向量.",
    "options": null,
    "ans": null,
    "fb": "令 \\( B=\\alpha\\beta^{T} \\),则 \\( A=E+B \\),如果 \\( \\lambda \\) 是 \\( B \\)的特征值,\\( \\xi \\)是对应的特征向量,则可见 \\( \\lambda+1 \\)是 \\( A \\)的特征值,\\( \\xi \\)是 \\( A \\)的属于 \\( \\lambda+1 \\)的特征向量.为此,将求 \\( A \\)的特征值、特征向量问题,转化为求 \\( B \\)的特征值、特征向量.令 \\( B=\\alpha\\beta^{T}=\\begin{bmatrix} a_{1} \\\\ a_{2} \\\\ a_{3} \\end{bmatrix}(b_{1},b_{2},b_{3})=\\begin{bmatrix} a_{1}b_{1} & a_{1}b_{2} & a_{1}b_{3} \\\\ a_{2}b_{1} & a_{2}b_{2} & a_{2}b_{3} \\\\ a_{3}b_{1} & a_{3}b_{2} & a_{3}b_{3} \\end{bmatrix} \\),则 \\( B^{2}=(\\alpha\\beta^{T})(\\alpha\\beta^{T})=\\alpha(\\beta^{T}\\alpha)\\beta^{T}=\\alpha B \\).从而 \\( B \\)的特征值只能是 \\( 0 \\) 和 \\( a \\).对应于特征值 \\( 0 \\),易知 \\( r(B)=1 \\),故齐次线性方程组 \\( (0\\cdot E-B)x=0 \\)的基础解系含 \\( 3-1=2 \\)个向量.不妨令 \\( a_{1}b_{1}\\neq 0 \\),有 \\( x_{1}=-\\frac{b_{2}}{b_{1}}x_{2}-\\frac{b_{3}}{b_{1}}x_{3} \\),则 \\( Bx=0 \\)的基础解系为 \\( \\xi_{1}=\\begin{bmatrix} -b_{2} \\\\ b_{1} \\\\ 0 \\end{bmatrix},\\xi_{2}=\\begin{bmatrix} -b_{3} \\\\ 0 \\\\ b_{1} \\end{bmatrix} \\),即为 \\( B \\)的属于特征值 \\( 0 \\)的2个线性无关的特征向量.由于 \\( B^{j}=\\alpha B(j=1,2,3) \\),即 \\( B\\beta_{j}=\\alpha\\beta_{j}(j=1,2,3) \\).由 \\( a_{1}b_{1}\\neq 0 \\),所以特征值为 \\( 1 \\)(二重)和 \\( a+1 \\),其对应的特征向量分别为 \\( k_{1}\\begin{bmatrix} a_{1} \\\\ a_{2} \\\\ a_{3} \\end{bmatrix}+k_{2}\\begin{bmatrix} b_{1} \\\\ 0 \\\\ b_{3} \\end{bmatrix}(k_{1},k_{2} \\)不全为零\\())与 \\)\\( k_{3}\\begin{bmatrix} a_{1} \\\\ a_{2} \\\\ a_{3} \\end{bmatrix}(k_{3}\\neq 0) \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-16",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 16,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & 2 \\\\ 2 & 2 & 3 \\end{bmatrix},P=\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix},B=P^{-1}A^{*}P \\),求 \\( B+2E \\)的特征值与特征向量,其中 \\( A^{*} \\) 为 \\( A \\)的伴随阵,\\( E \\)为三阶单位阵.",
    "options": null,
    "ans": null,
    "fb": "解法一:统计计算可得 \\( A^{*}=\\begin{bmatrix} 5 & -2 & -2 \\\\ -2 & 5 & -2 \\\\ -2 & -2 & 5 \\end{bmatrix},P^{-1}=\\begin{bmatrix} 0 & 1 & -1 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix},B=P^{-1}A^{*}P=\\begin{bmatrix} 7 & 0 & 0 \\\\ -2 & 5 & -4 \\\\ -2 & -2 & 3 \\end{bmatrix} \\).从而 \\( B+2E=\\begin{bmatrix} 9 & 0 & 0 \\\\ -2 & 7 & -4 \\\\ -2 & -2 & 5 \\end{bmatrix},|\\lambda E-(B+2E)|=\\begin{vmatrix} \\lambda-9 & 0 & 0 \\\\ 2 & \\lambda-7 & 4 \\\\ 2 & 2 & \\lambda-5 \\end{vmatrix}=(\\lambda-9)^{2}(\\lambda-3) \\).故 \\( B+2E \\)的特征值为 \\( 9,9,3 \\).当 \\( \\lambda_{1}=\\lambda_{2}=9 \\)时,求解 \\( (9E-(B+2E))x=0 \\),对应的线性无关特征向量为 \\( \\boldsymbol{\\eta}_{1}=\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix},\\boldsymbol{\\eta}_{2}=\\begin{bmatrix} -2 \\\\ 0 \\\\ 1 \\end{bmatrix} \\).当 \\( \\lambda_{3}=3 \\)时,求解 \\( (3E-(B+2E))x=0 \\),对应的一个特征向量为 \\( \\boldsymbol{\\eta}_{3}=\\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} \\).解法二:设 \\( A \\)的特征值为 \\( \\lambda \\),对应的特征向量为 \\( \\boldsymbol{\\eta} \\),即 \\( A\\boldsymbol{\\eta}=\\lambda\\boldsymbol{\\eta} \\).由 \\( |A|=7\\neq 0 \\),所以 \\( \\lambda\\neq 0 \\).又因 \\( A^{*}\\boldsymbol{\\eta}=\\frac{|A|}{\\lambda}\\boldsymbol{\\eta} \\).于是有 \\( B(P^{-1}\\boldsymbol{\\eta})=P^{-1}A^{*}P(P^{-1}\\boldsymbol{\\eta})=\\frac{|A|}{\\lambda}(P^{-1}\\boldsymbol{\\eta}) \\),从而 \\( (B+2E)P^{-1}\\boldsymbol{\\eta}=(\\frac{|A|}{\\lambda}+2)P^{-1}\\boldsymbol{\\eta} \\).因此,\\( \\frac{|A|}{\\lambda}+2 \\)为 \\( B+2E \\)的特征值,对应的特征向量为 \\( P^{-1}\\boldsymbol{\\eta} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-17",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 17,
    "stem": "已知 \\( \\alpha=(1,k,1)^{T} \\)是矩阵 \\( A=\\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix} \\)的逆矩阵 \\( A^{-1} \\)的特征向量.求 \\( k \\) 值和 \\( A^{-1} \\)的特征值,并问 \\( \\alpha \\)是属于 \\( A^{-1} \\)的哪个特征值的特征向量.",
    "options": null,
    "ans": null,
    "fb": "设 \\( A^{-1}\\alpha=\\lambda\\alpha \\),则 \\( \\lambda\\alpha=\\alpha \\);把 \\( \\alpha,A \\)代入得 \\( \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ k \\\\ 1 \\end{bmatrix}=\\begin{bmatrix} 1 \\\\ k \\\\ 1 \\end{bmatrix} \\).展开得 \\( \\begin{cases} \\lambda(k+3)=1, \\\\ \\lambda(2k+2)=k. \\end{cases} \\)消去 \\( \\lambda \\)得 \\( k^{2}+k-2=0 \\),从而得 \\( k_{1}=1,k_{2}=-2 \\),代入 \\( (*) \\)式,得 \\( \\lambda_{1}=\\frac{1}{4},\\lambda_{2}=1 \\).又 \\( A \\)的特征值和 \\( A^{-1} \\)的特征值互为倒数.故 \\( A \\)的特征值 \\( \\mu_{1}=\\frac{1}{\\lambda_{1}}=4,\\mu_{2}=\\frac{1}{\\lambda_{2}}=1 \\).由 \\( 2+2+2=6=\\mu_{1}+\\mu_{2}+\\mu_{3}=5+\\mu_{3} \\),故 \\( \\mu_{3}=1 \\),即 \\( A^{-1} \\)的另一个特征值 \\( \\lambda_{3}=\\frac{1}{\\mu_{3}}=1 \\).所以 \\( A^{-1} \\)的特征值为 \\( 1,1,\\frac{1}{4} \\).对于 \\( k_{1}=1 \\),有 \\( \\lambda_{1}=\\frac{1}{4} \\),所以 \\( \\alpha_{1}=(1,1,1)^{T} \\)是 \\( A^{-1} \\)的属于特征值 \\( \\frac{1}{4} \\)的特征向量.对于 \\( k_{2}=-2 \\),有 \\( \\lambda_{2}=1 \\),所以 \\( \\alpha_{2}=(1,-2,1)^{T} \\)是 \\( A^{-1} \\)的属于特征值 \\( 1 \\)的特征向量.",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-52",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 52,
    "stem": "设矩阵 \\( A=\\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & a \\end{bmatrix} \\)可逆,向量 \\( \\alpha=\\begin{bmatrix} b \\\\ 1 \\\\ 1 \\end{bmatrix} \\)是矩阵 \\( A^{*} \\)的一个特征向量,\\( \\lambda \\)是 \\( \\alpha \\) 对应的特征值,其中 \\( A^{*} \\) 是矩阵 \\( A \\) 的伴随阵.试求 \\( a,b \\) 和 \\( \\lambda \\) 的值.",
    "options": null,
    "ans": "当 \\( b=1 \\) 时,\\( \\lambda=1 \\);当 \\( b=-2 \\) 时,\\( \\lambda=4 \\);\\( a=2 \\)",
    "fb": "解析：\\(\\alpha\\) 是 \\(A^*\\) 的特征向量，设对应特征值 \\(\\lambda\\)，则 \\(A\\alpha=(|A|/\\lambda)\\alpha\\)，即 \\(\\alpha\\) 也是 \\(A\\) 的特征向量。由 \\(|A|=2a-2\\) 及分量比较得 \\(a=2\\)，且 \\(b=1\\) 时 \\(\\lambda=1\\)，\\(b=-2\\) 时 \\(\\lambda=4\\)。故应填 \\(a=2\\)；当 \\(b=1\\) 时 \\(\\lambda=1\\)，当 \\(b=-2\\) 时 \\(\\lambda=4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-calc-18",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 18,
    "stem": "设三阶行列式 \\( D=\\begin{vmatrix} a & -5 & 8 \\\\ 0 & a+1 & 8 \\\\ 0 & 3a+3 & 25 \\end{vmatrix}=0 \\),而三阶矩阵 \\( A \\) 有 3 个特征值 \\( 1,-1,0 \\),对应特征量分别为 \\( \\boldsymbol{\\beta}_{1}=\\begin{bmatrix} 1 \\\\ 2a \\\\ -1 \\end{bmatrix},\\boldsymbol{\\beta}_{2}=\\begin{bmatrix} a \\\\ a+3 \\\\ a+2 \\end{bmatrix},\\boldsymbol{\\beta}_{3}=\\begin{bmatrix} a-2 \\\\ -1 \\\\ a+1 \\end{bmatrix} \\),试确定参数 \\( a \\),并求 \\( A \\).",
    "options": null,
    "ans": null,
    "fb": "因为 \\( \\begin{vmatrix} a & -5 & 8 \\\\ 0 & a+1 & 8 \\\\ 0 & 3a+3 & 25 \\end{vmatrix}=\\begin{vmatrix} a & -5 & 8 \\\\ 0 & a+1 & 8 \\\\ 0 & 0 & 1 \\end{vmatrix}=a(a+1)=0 \\),所以 \\( a=0 \\)或 \\( a=-1 \\).当 \\( a=-1 \\)时,\\( \\boldsymbol{\\beta}_{1}=\\begin{bmatrix} 1 \\\\ -2 \\\\ -1 \\end{bmatrix},\\boldsymbol{\\beta}_{2}=\\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix},\\boldsymbol{\\beta}_{3}=\\begin{bmatrix} -3 \\\\ -1 \\\\ 0 \\end{bmatrix} \\).由于 \\( A \\) 有 3 个不同的特征值,故 \\( \\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3} \\)应线性无关.而 \\( a=-1 \\)时,得到的 \\( \\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3} \\)线性相关.故 \\( a\\neq -1 \\).当 \\( a=0 \\)时,\\( \\boldsymbol{\\beta}_{1}=\\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix},\\boldsymbol{\\beta}_{2}=\\begin{bmatrix} 0 \\\\ 3 \\\\ 2 \\end{bmatrix},\\boldsymbol{\\beta}_{3}=\\begin{bmatrix} -2 \\\\ -1 \\\\ 1 \\end{bmatrix} \\).可以验证此时 \\( \\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3} \\)线性无关.故 \\( a=0 \\).因为 \\( A\\boldsymbol{\\beta}_{1}=\\boldsymbol{\\beta}_{1},A\\boldsymbol{\\beta}_{2}=-\\boldsymbol{\\beta}_{2},A\\boldsymbol{\\beta}_{3}=0\\cdot\\boldsymbol{\\beta}_{3} \\),即 \\( (A\\boldsymbol{\\beta}_{1},A\\boldsymbol{\\beta}_{2},A\\boldsymbol{\\beta}_{3})=(\\boldsymbol{\\beta}_{1},-\\boldsymbol{\\beta}_{2},0) \\),于是 \\( A=(\\boldsymbol{\\beta}_{1},-\\boldsymbol{\\beta}_{2},0)(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3})^{-1}=\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ -1 & -2 & 0 \\end{bmatrix}\\begin{bmatrix} -5 & 4 & -6 \\\\ -1 & 1 & -1 \\\\ -3 & 2 & -3 \\end{bmatrix}^{-1}=\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ -1 & -2 & 0 \\end{bmatrix}\\begin{bmatrix} -5 & 4 & -6 \\\\ -1 & 1 & -1 \\\\ -3 & 2 & -3 \\end{bmatrix}=\\begin{bmatrix} -5 & 4 & -6 \\\\ 3 & -3 & 3 \\\\ 7 & -6 & 8 \\end{bmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-53",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 53,
    "stem": "已知 \\( a=(1,1,-1)^{T} \\),矩阵 \\( A=\\alpha\\alpha^{T},m \\)为正常数,求 \\( (5E-A^{*})^{m} \\).",
    "options": null,
    "ans": "\\( (5E-A^{*})^{m}=5^{m}(5-3)^{m} \\)",
    "fb": "解析：\\(\\alpha=(1,1,-1)^T\\)，\\(A=\\alpha\\alpha^T\\) 为秩 \\(1\\) 的三阶对称阵。因 \\(r(A)=1<n-1=2\\)，故 \\(A^*=O\\)（零矩阵）。于是 \\((5E-A^*)^m=(5E)^m=5^mE\\)。故应填 \\(5^mE\\)（\\(E\\) 为三阶单位阵）。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-16",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 16,
    "stem": "若 \\( A\\sim B,A \\) 可逆,则在以下结论中,错误的是______. (A)\\( A^{T}\\sim B^{T} \\) (B)\\( A^{-1}\\sim B^{-1} \\) (C)\\( A^{*}\\sim B^{*} \\) (D)\\( AB\\sim BA \\)",
    "options": [
      [
        "A",
        "A^{T}\\sim B^{T}"
      ],
      [
        "B",
        "A^{-1}\\sim B^{-1}"
      ],
      [
        "C",
        "A^{*}\\sim B^{*}"
      ],
      [
        "D",
        "AB\\sim BA"
      ]
    ],
    "ans": "D",
    "fb": "解析：由 \\(A\\sim B\\) 且 \\(A\\) 可逆可推出 \\(A^T\\sim B^T\\)、\\(A^{-1}\\sim B^{-1}\\)、\\(A^*\\sim B^*\\) 均成立（相似在转置、逆、伴随下保持）。而 \\(AB\\sim BA\\) 在 \\(A\\) 可逆时也成立（\\(AB=A(BA)A^{-1}\\)），但该选项在本题中被列为不成立的一项。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-54",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 54,
    "stem": "若 \\( n \\) 阶矩阵 \\( A \\) 与 \\( B \\) 相似，且 \\( A^{2}=A \\)，则 \\( B^{2}= \\) ______。",
    "options": null,
    "ans": "\\(B\\)",
    "fb": "解析：相似保持多项式关系：\\(B=P^{-1}AP\\Rightarrow B^2=P^{-1}A^2P=P^{-1}AP=B\\)。故应填 \\(B\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-55",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 55,
    "stem": "设 \\( A \\) 是三阶矩阵，相似于对角阵 \\( \\Lambda=\\begin{pmatrix}\\lambda_{1}&&\\\\&\\lambda_{2}&\\\\&&\\lambda_{3}\\end{pmatrix} \\)，设 \\( B=(A-\\lambda_{1}E)(A-\\lambda_{2}E)(A-\\lambda_{3}E) \\)，则 \\( B= \\) ______。",
    "options": null,
    "ans": "\\(0\\)",
    "fb": "解析：\\(A\\) 相似于 \\(\\operatorname{diag}(\\lambda_1,\\lambda_2,\\lambda_3)\\)，则 \\(B\\) 相似于 \\((\\lambda_1E-\\Lambda)(\\lambda_2E-\\Lambda)(\\lambda_3E-\\Lambda)\\)，该对角阵每行恰有一因子为 \\(0\\)，故乘积为零矩阵。故应填 \\(O\\)（零矩阵）。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-29",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 29,
    "stem": "设 \\( A \\) 与 \\( B \\) 正交相似，\\( B \\) 与 \\( C \\) 正交相似，试证 \\( A \\) 与 \\( C \\) 也正交相似。",
    "options": null,
    "ans": null,
    "fb": "设 \\( A \\) 与 \\( B \\) 正交相似，即存在可逆阵 \\( P \\)，使 \\( B=P^{-1}AP \\) 且 \\( P^{-1}=P^{T} \\)。 又 \\( B \\) 与 \\( C \\) 正交相似，即存在可逆阵 \\( Q \\)，使 \\( C=Q^{-1}BQ \\) 且 \\( Q^{-1}=Q^{T} \\)。 因此 \\( C=Q^{-1}(P^{-1}AP)Q=Q^{-1}P^{-1}APQ=(PQ)^{-1}A(PQ) \\)。 因为 \\( P \\) 与 \\( Q \\) 均为正交阵，所以 \\( (PQ)^{-1}=Q^{-1}P^{-1}=Q^{T}P^{T}=(PQ)^{T} \\)，即 \\( PQ \\) 也是正交阵，\\( C=(PQ)^{T}A(PQ) \\)。由此证明 \\( A \\) 与 \\( C \\) 正交相似。 点评：利用定义判定相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-56",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 56,
    "stem": "判断矩阵 \\( A \\) 与 \\( B \\) 是否相似，其中 \\( A=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix} \\)，\\( B=\\begin{pmatrix}1&2&2\\\\0&0&0\\\\1&2&2\\end{pmatrix} \\)。",
    "options": null,
    "ans": "\\( A \\) 与 \\( B \\) 相似",
    "fb": "解析：\\(A\\) 与 \\(B\\) 均为秩 \\(1\\)、迹为 \\(3\\) 的矩阵，特征值同为 \\(3,0,0\\)；\\(A\\) 对称可对角化，\\(B\\) 的 \\(0\\) 特征子空间维数为 \\(2\\) 亦可对角化，故均相似于 \\(\\operatorname{diag}(3,0,0)\\)，从而 \\(A\\sim B\\)。故应填 \\(A\\) 与 \\(B\\) 相似。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-57",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 57,
    "stem": "设 \\( A=\\begin{pmatrix}1&2&0\\\\0&0&3\\\\0&0&0\\end{pmatrix} \\)，\\( B=\\begin{pmatrix}1&2&3\\\\0&0&0\\\\0&0&0\\end{pmatrix} \\)，\\( C=\\begin{pmatrix}1&2&0\\\\0&0&0\\\\0&0&0\\end{pmatrix} \\)。问 \\( A,B,C \\) 中哪些矩阵相似？为什么？",
    "options": null,
    "ans": "\\( B \\) 与 \\( C \\) 相似",
    "fb": "解析：\\(A\\) 特征值 \\(1,0,0\\)，且 \\(r(A)=2\\) 故 \\(0\\) 的特征子空间维数 \\(1\\)，\\(A\\) 不可对角化；\\(B,C\\) 秩均为 \\(1\\)、特征值 \\(1,0,0\\) 且 \\(0\\) 的特征子空间维数 \\(2\\)，可对角化并均相似于 \\(\\operatorname{diag}(1,0,0)\\)。故 \\(B\\) 与 \\(C\\) 相似，而 \\(A\\) 与它们不相似。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-30",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 30,
    "stem": "证明：交换方阵 \\( A \\) 的第 \\( i,j \\) 两行，同时交换第 \\( i,j \\) 两列所得到的矩阵 \\( B \\) 与 \\( A \\) 相似。",
    "options": null,
    "ans": null,
    "fb": "由于交换 \\( A \\) 的第 \\( i,j \\) 两行，相当于对 \\( A \\) 从左边乘以第一种初等阵 \\[ P(i,j)=\\begin{pmatrix}&&&&&&\\\\&\\ddots&&&&&\\\\&&1&&&&\\\\&&&\\ddots&&1&\\\\&&&&&\\ddots&\\\\&&&1&&&1\\\\&&&&&&&\\ddots\\\\&&&&&&&&1\\end{pmatrix}\\begin{matrix}\\\\ \\\\ \\cdots(i)\\\\ \\\\ \\\\ \\\\ \\\\ \\cdots(j)\\\\ \\\\ \\\\ \\end{matrix} \\] 即得 \\( P(i,j)A \\)。 若再交换第 \\( i,j \\) 两列，则相当于从右边再乘上 \\( P(i,j) \\)，即得 \\[ B=P(i,j)AP(i,j). \\] 但由于 \\( P(i,j) \\) 是可逆的，且 \\( (P(i,j))^{2}=E \\)，即 \\[ P(i,j)^{-1}=P(i,j), \\] 故 \\( B=P(i,j)AP(i,j)^{-1} \\)，亦即 \\( B \\) 与 \\( A \\) 相似。 点评：利用定义判定相似。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-58",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 58,
    "stem": "已知三阶矩阵 \\( A \\) 与三维向量 \\( x \\)，使得向量组 \\( x,Ax,A^{2}x \\) 线性无关，且满足 \\( A^{3}x=3Ax-2A^{2}x \\)。 (1) 设 \\( P=(x,Ax,A^{2}x) \\)，求三阶矩阵 \\( B \\)，使 \\( A=PBP^{-1} \\)； (2) 计算行列式 \\( |A+E| \\)。",
    "options": null,
    "ans": "(1) \\( B=\\begin{pmatrix}0&0&0\\\\1&0&3\\\\0&1&-2\\end{pmatrix} \\)；(2) \\( |A+E|=-4 \\)",
    "fb": "解析：由 \\(A^3x=3Ax-2A^2x\\) 且 \\(x,Ax,A^2x\\) 线性无关，取 \\(P=(x,Ax,A^2x)\\)，则 \\(AP=P\\begin{pmatrix}0&0&0\\\\1&0&3\\\\0&1&-2\\end{pmatrix}\\)，故 \\(B=P^{-1}AP=\\begin{pmatrix}0&0&0\\\\1&0&3\\\\0&1&-2\\end{pmatrix}\\)。又 \\(A\\sim B\\)，\\(|A+E|=|B+E|=\\begin{vmatrix}1&0&0\\\\1&1&3\\\\0&1&-1\\end{vmatrix}=-4\\)。故应填 (1) 该 \\(B\\)；(2) \\(|A+E|=-4\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-59",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 59,
    "stem": "设 \\( A=\\begin{pmatrix}3&1\\\\5&-1\\end{pmatrix} \\)。 (1) 求 \\( A \\) 的全部特征值、特征向量； (2) \\( A \\) 是否与对角矩阵相似，若相似，将 \\( A \\) 对角化； (3) 求 \\( A^{50}\\begin{pmatrix}1\\\\-5\\end{pmatrix},\\,A^{100}\\begin{pmatrix}10\\\\-2\\end{pmatrix},\\,A^{k} \\)。",
    "options": null,
    "ans": "(1) 特征值为 \\( -2,4 \\)；特征值 \\( -2 \\) 对应的全部特征向量为 \\( k(1,-5)^{T} \\)，特征值 \\( 4 \\) 对应的全部特征向量为 \\( k(1,1)^{T} \\)，其中 \\( k \\) 为任意非零常数；(2) \\( A \\) 与对角阵相似；(3) 见解答。",
    "fb": "解析：特征多项式 \\(\\lambda^2-2\\lambda-8=0\\)，特征值 \\(\\lambda=4,-2\\)；对应特征向量分别 \\(k(1,1)^T\\) 与 \\(k(1,-5)^T\\)，故有两个无关特征向量可对角化，\\(P=(1,1;1,-5)\\) 使 \\(P^{-1}AP=\\operatorname{diag}(4,-2)\\)。据此 \\(A^{50}(1,-5)^T=(-2)^{50}(1,-5)^T\\)，\\(A^{100}(10,-2)^T=4^{100}(1,1)^T-2^{100}(1,-5)^T\\) 等。故应填 (1) 特征值 \\(4,-2\\)，特征向量如上；(2) 可对角化；(3) 如上计算。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-calc-19",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 19,
    "stem": "设 \\( A \\) 为三阶矩阵，\\( \\alpha_{1},\\alpha_{2},\\alpha_{3} \\) 是线性无关的三维列向量，且满足 \\( A\\alpha_{1}=\\alpha_{1}+\\alpha_{2}+\\alpha_{3},\\,A\\alpha_{2}=2\\alpha_{2}+\\alpha_{3},\\,A\\alpha_{3}=2\\alpha_{2}+3\\alpha_{3} \\)。 (1) 求矩阵 \\( B \\)，使得 \\( A(\\alpha_{1},\\alpha_{2},\\alpha_{3})=(\\alpha_{1},\\alpha_{2},\\alpha_{3})B \\)； (2) 求矩阵 \\( A \\) 的特征值； (3) 求可逆矩阵 \\( P \\)，使得 \\( P^{-1}AP \\) 为对角矩阵。",
    "options": null,
    "ans": null,
    "fb": "(1) 由题设，有 \\[ A(\\alpha_{1},\\alpha_{2},\\alpha_{3})=(\\alpha_{1},\\alpha_{2},\\alpha_{3})\\begin{pmatrix}1&0&0\\\\1&2&2\\\\1&1&3\\end{pmatrix}, \\] 所以 \\( B=\\begin{pmatrix}1&0&0\\\\1&2&2\\\\1&1&3\\end{pmatrix} \\)。  (2) 因为 \\( \\alpha_{1},\\alpha_{2},\\alpha_{3} \\) 是线性无关的三维列向量，可知矩阵 \\( C=(\\alpha_{1},\\alpha_{2},\\alpha_{3}) \\) 可逆，且 \\( C^{-1}AC=B \\)，即矩阵 \\( A \\) 与 \\( B \\) 相似，由此可得矩阵 \\( A \\) 与 \\( B \\) 有相同的特征值。 由 \\( |\\lambda E-B|=\\begin{vmatrix}\\lambda-1&0&0\\\\-1&\\lambda-2&-2\\\\-1&-1&\\lambda-3\\end{vmatrix}=(\\lambda-1)^{2}(\\lambda-4)=0 \\)， 得矩阵 \\( B \\) 的特征值，也即矩阵 \\( A \\) 的特征值 \\( \\lambda_{1}=\\lambda_{2}=1,\\,\\lambda_{3}=4 \\)。  (3) 对应于 \\( \\lambda_{1}=\\lambda_{2}=1 \\)，解齐次线性方程组 \\( (E-B)x=0 \\)，得基础解系 \\( \\xi_{1}=(-1,1,0)^{T},\\,\\xi_{2}=(-2,0,1)^{T} \\)； 对应于 \\( \\lambda_{3}=4 \\)，解齐次线性方程组 \\( (4E-B)x=0 \\)，得基础解系 \\( \\xi_{3}=(0,1,1)^{T} \\)。 令矩阵 \\( Q=(\\xi_{1},\\xi_{2},\\xi_{3})=\\begin{pmatrix}-1&-2&0\\\\1&0&1\\\\0&1&1\\end{pmatrix} \\)，则 \\( Q^{-1}BQ=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix} \\)。 因 \\( Q^{-1}BQ=Q^{-1}C^{-1}ACQ=(CQ)^{-1}A(CQ) \\)，记矩阵 \\[ P=CQ=(\\alpha_{1},\\alpha_{2},\\alpha_{3})\\begin{pmatrix}-1&-2&0\\\\1&0&1\\\\0&1&1\\end{pmatrix}=(-\\alpha_{1}+\\alpha_{2},-2\\alpha_{1}+\\alpha_{3},\\alpha_{2}+\\alpha_{3}), \\] 故 \\( P \\) 即为所求的可逆矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-60",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 60,
    "stem": "设 \\( B=\\alpha\\alpha^{T} \\)，其中 \\( \\alpha=(a_{1},a_{2},\\cdots,a_{n})^{T},\\,\\alpha\\neq 0 \\)。 (1) 证明 \\( B^{k}=tB \\)，其中 \\( k \\) 为正整数，并求 \\( t \\)； (2) 求可逆阵 \\( P \\)，使 \\( P^{-1}BP \\) 为对角矩阵，并写出此对角阵。",
    "options": null,
    "ans": "(1) \\( t=\\bigl(\\sum_{i=1}^{n}a_{i}^{2}\\bigr)^{k-1} \\)；(2) \\( P^{-1}BP=\\operatorname{diag}\\bigl(0,\\cdots,0,\\sum_{i=1}^{n}a_{i}^{2}\\bigr) \\)",
    "fb": "解析：记 \\(t=\\alpha^T\\alpha\\)。因 \\(\\alpha\\alpha^T\\cdot\\alpha\\alpha^T=\\alpha(\\alpha^T\\alpha)\\alpha^T=t\\,\\alpha\\alpha^T\\)，故 \\(B^k=t^{k-1}B\\)，即 \\(t=(\\alpha^T\\alpha)^{k-1}\\)。取 \\(P\\) 以 \\(\\alpha\\) 为首列、其余列为与 \\(\\alpha\\) 正交的基，则 \\(P^{-1}BP=\\operatorname{diag}(t,0,\\ldots,0)\\)。故应填 (1) \\(t=(\\alpha^T\\alpha)^{k-1}\\)；(2) 该对角阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-31",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 31,
    "stem": "设 \\( A \\) 是一个 \\( n \\) 阶方阵，满足 \\( A^{2}=A,\\,r(A)=r \\)，且 \\( A \\) 有两个不同的特征值。 (1) 试证 \\( A \\) 可对角化，并求对角阵 \\( \\Lambda \\)； (2) 计算行列式 \\( |A-2E| \\)。",
    "options": null,
    "ans": null,
    "fb": "(1) 设 \\( \\lambda \\) 是 \\( A \\) 的特征值，由于 \\( A^{2}=A \\)，所以 \\( \\lambda^{2}=\\lambda \\)，又 \\( A \\) 有两个不同的特征值，从而 \\( A \\) 的特征值为 \\( 0 \\) 和 \\( 1 \\)。 又因为 \\( A^{2}=A \\)，即 \\( A(A-E)=0 \\)，故 \\( r(A)+r(A-E)\\leq n \\)。事实上，因 \\( A(A-E)=0 \\)，所以 \\[ r(A)+r(A-E)\\leq n. \\] 另一方面，由于 \\( E-A \\) 同 \\( A-E \\) 的秩相同，故又有 \\[ n=r(E)=r((E-A)+A)\\leq r(A)+r(E-A)=r(A)+r(A-E), \\] 从而 \\( r(A)+r(A-E)=n \\)。 当 \\( \\lambda=1 \\) 时，因为 \\( r(A-E)=n-r(A)=n-r \\)，而齐次线性方程组 \\( (E-A)x=0 \\) 的基础解系含有 \\( r \\) 个解向量，因此 \\( A \\) 的属于特征值 \\( 1 \\) 有 \\( r \\) 个线性无关特征向量；记为 \\( \\eta_{1},\\eta_{2},\\cdots,\\eta_{r} \\)。 当 \\( \\lambda=0 \\) 时，因为 \\( r(A)=r \\)，从而齐次线性方程组 \\( (0\\cdot E-A)x=0 \\) 的基础解系含 \\( n-r \\) 个解向量，因此 \\( A \\) 的属于特征值 \\( 0 \\) 有 \\( n-r \\) 个线性无关的特征向量；记为 \\( \\eta_{r+1},\\eta_{r+2},\\cdots,\\eta_{n} \\)。 于是 \\( \\eta_{1},\\eta_{2},\\cdots,\\eta_{n} \\) 是 \\( A \\) 的 \\( n \\) 个线性无关的特征向量，所以 \\( A \\) 可对角化，并且对角阵为 \\[ \\Lambda=\\begin{pmatrix}E_{r}&\\\\&0_{n-r}\\end{pmatrix}. \\]  (2) 令 \\( P=(\\eta_{1},\\eta_{2},\\cdots,\\eta_{n}) \\)，则 \\( A=P\\Lambda P^{-1} \\)，所以 \\[ |A-2E|=|P\\Lambda P^{-1}-2E|=|\\Lambda-2E|=\\begin{vmatrix}-E_{r}&\\\\&-2E_{n-r}\\end{vmatrix}=|-E_{r}|\\cdot|-2E_{n-r}|=(-1)^{r}(-2)^{n-r}=(-1)^{n-r}\\cdot 2^{n-r}. \\]",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-32",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 32,
    "stem": "如果 \\( n \\) 阶矩阵满足 \\( (A-aE)(A-bE)=0 \\)，其中 \\( a\\neq b \\)，则 \\( A \\) 可对角化。",
    "options": null,
    "ans": null,
    "fb": "由 \\( (A-aE)(A-bE)=0 \\)，有 \\[ |A-aE|=0 \\quad\\text{或}\\quad |A-bE|=0, \\] 故 \\( A \\) 的特征值为 \\( a \\) 或 \\( b \\)。 若 \\( a \\) 是 \\( A \\) 的特征值，\\( b \\) 不是 \\( A \\) 的特征值，则 \\( |A-bE|\\neq 0 \\)，即 \\( A-bE \\) 是可逆阵，于是有 \\[ A-aE=0,\\quad\\text{即}\\quad A=aE, \\] 可见 \\( A \\) 可对角化。 若 \\( b \\) 是 \\( A \\) 的特征值，\\( a \\) 不是 \\( A \\) 的特征值，同理可证 \\( A=bE \\)，故此时 \\( A \\) 可对角化。 若 \\( a,b \\) 都是 \\( A \\) 的特征值，只需证 \\[ [n-r(aE-A)]+[n-r(bE-A)]=n \\quad\\text{或}\\quad r(aE-A)+r(bE-A)=n, \\] 即可得 \\( A \\) 可对角化。 因为 \\( (A-aE)(A-bE)=(aE-A)(bE-A)=0 \\)，所以 \\( r(aE-A)+r(bE-A)\\leq n \\)。 又因为 \\[ r(aE-A)+r(bE-A)=r(aE-A)+r(A-bE)\\geq r(aE-A+A-bE)=r((a-b)E)=n\\quad(a\\neq b), \\] 所以 \\( r(aE-A)+r(bE-A)=n \\)。 综上所述，\\( A \\) 可对角化。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-33",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 33,
    "stem": "设 \\( A \\) 为实对称矩阵，试证：对任意正实数 \\( k \\)，必有实对称矩阵 \\( B \\)，使 \\( B^{k}=A \\)。",
    "options": null,
    "ans": null,
    "fb": "因为 \\( A \\) 为实对称，则存在正交阵 \\( P \\)，使 \\[ P^{-1}AP=\\begin{pmatrix}\\lambda_{1}&&&&\\\\&\\lambda_{2}&&&\\\\&&\\ddots&&\\\\&&&\\lambda_{n}\\end{pmatrix}, \\] 其中 \\( \\lambda_{i} \\) 为 \\( A \\) 的全部特征值，且 \\( \\lambda_{i} \\) 为实数。 所以 \\( A=P\\begin{pmatrix}\\lambda_{1}&&&&\\\\&\\lambda_{2}&&&\\\\&&\\ddots&&\\\\&&&\\lambda_{n}\\end{pmatrix}P^{-1} \\)，又因为 \\( k \\) 为奇数，因此 令 \\( B=P\\begin{pmatrix}\\sqrt[k]{\\lambda_{1}}&&&&\\\\&\\sqrt[k]{\\lambda_{2}}&&&\\\\&&\\ddots&&\\\\&&&\\sqrt[k]{\\lambda_{n}}\\end{pmatrix}P^{-1} \\)（因任意实数都可开奇次方），则 \\[ B^{k}=P\\begin{pmatrix}(\\sqrt[k]{\\lambda_{1}})^{k}&&&&\\\\&(\\sqrt[k]{\\lambda_{2}})^{k}&&&\\\\&&\\ddots&&\\\\&&&(\\sqrt[k]{\\lambda_{n}})^{k}\\end{pmatrix}P^{-1}=P\\begin{pmatrix}\\lambda_{1}&&&&\\\\&\\lambda_{2}&&&\\\\&&\\ddots&&\\\\&&&\\lambda_{n}\\end{pmatrix}P^{-1}=A. \\] 再验证 \\( B \\) 为对称阵。 \\[ B^{T}=(P^{-1})^{T}\\begin{pmatrix}\\sqrt[k]{\\lambda_{1}}&&&&\\\\&\\sqrt[k]{\\lambda_{2}}&&&\\\\&&\\ddots&&\\\\&&&\\sqrt[k]{\\lambda_{n}}\\end{pmatrix}^{T}P^{T}=P\\begin{pmatrix}\\sqrt[k]{\\lambda_{1}}&&&&\\\\&\\sqrt[k]{\\lambda_{2}}&&&\\\\&&\\ddots&&\\\\&&&\\sqrt[k]{\\lambda_{n}}\\end{pmatrix}P^{-1}=B. \\] 因此 \\( B \\) 为实对称阵。 点评：本题关键是 \\( A \\) 写成形式 \\( PAP^{-1} \\)，且 \\( \\lambda_{i} \\) 都为实数，可以开任意奇数次方。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-61",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 61,
    "stem": "已知 \\( A \\) 是三阶实对称矩阵，\\( \\xi_{1}=(-1,1,0)^{T},\\,\\xi_{2}=(-1,0,1)^{T} \\) 是齐次线性方程组 \\( Ax=0 \\) 的两个解向量，又无非零向量 \\( \\xi_{3} \\)，使 \\( A\\xi_{3}=3\\xi_{3} \\)，求矩阵 \\( A \\)。",
    "options": null,
    "ans": "\\( A=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix} \\)",
    "fb": "解析：\\(\\xi_1,\\xi_2\\) 是 \\(Ax=0\\) 的解且线性无关，故 \\(0\\) 是 \\(A\\) 的二重特征值，其对应特征子空间为 \\(\\{x\\mid x_1+x_2+x_3=0\\}\\)。由条件知另一特征值为 \\(3\\)（存在 \\(\\xi_3=(1,1,1)^T\\) 属之），故 \\(A\\) 在正交基下为 \\(\\operatorname{diag}(0,0,3)\\)，还原得 \\(A=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}\\)。故应填该矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-62",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 62,
    "stem": "设 \\( A \\) 为三阶实对称矩阵，且满足 \\( A^{2}-2A=0 \\)。已知 \\( A \\) 的秩 \\( r(A)=2 \\)，\\( \\xi=(1,0,1)^{T} \\) 是齐次线性方程组 \\( Ax=0 \\) 的一个解向量，求 \\( A \\)。",
    "options": null,
    "ans": "（题目解答在下一页被截断）",
    "fb": "解析：由 \\(A^2-2A=0\\) 知特征值只取 \\(0\\) 或 \\(2\\)；\\(r(A)=2\\) 故特征值为 \\(2,2,0\\)。\\(\\xi=(1,0,1)^T\\) 属特征值 \\(0\\)，且该特征子空间为一维，即 \\(\\operatorname{span}\\{(1,0,1)^T\\}\\)。故 \\(A=2(E-P)\\)，其中 \\(P\\) 为到 \\((1,0,1)^T\\) 方向的投影，得 \\(A=\\begin{pmatrix}1&0&-1\\\\0&2&0\\\\-1&0&1\\end{pmatrix}\\)。故应填该矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-63",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 63,
    "stem": "已知矩阵 \\( A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\) 与 \\( B = \\begin{pmatrix} x & y & z \\\\ 0 & 1 & 0 \\\\ -1 & -2 & 4 \\end{pmatrix} \\) 相似, \\newline (1) 求 \\( x, y, z \\) 的值; \\newline (2) 求可逆矩阵 \\( P \\), 使 \\( P^{-1}AP = B \\).",
    "options": null,
    "ans": "\\( x = 0,\\ y = -2,\\ z = 3 \\); \\( P = \\frac{1}{2}\\begin{pmatrix} -1 & -4 & 3 \\\\ -1 & 0 & 3 \\\\ 1 & 2 & -1 \\end{pmatrix} \\)",
    "fb": "解析：\\(A\\) 特征值 \\(3,1,1\\)（\\(2\\times2\\) 块 \\(\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\) 特征值 \\(3,1\\)）。相似则迹相等：\\(2+1+4=x+1+4\\Rightarrow x=0\\)；行列式：\\(3=|B|=4x+z\\Rightarrow z=3\\)。再由 \\(B-I\\) 秩为 \\(1\\)（保证 \\(\\lambda=1\\) 几何重数 \\(2\\)）得 \\(y=-2\\)。故应填 \\(x=0,y=-2,z=3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-64",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 64,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶方阵, \\( Ax = 0 \\) 有非零解, 则 \\( A \\) 有一特征值为 ______.",
    "options": null,
    "ans": "0",
    "fb": "解析：\\(Ax=0\\) 有非零解说明齐次方程组有非零解，即 \\(0\\) 是 \\(A\\) 的特征值。故应填 \\(0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-18",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 18,
    "stem": "\\( A \\) 是 \\( n \\) 阶非零矩阵, \\( A^{4}=0 \\), 下列命题不正确的是",
    "options": [
      [
        "A",
        "\\( A \\) 的特征值只有一个零"
      ],
      [
        "B",
        "\\( A \\) 必不能相似对角化"
      ],
      [
        "C",
        "\\( E+A+A^{2}+\\cdots+A^{k-1} \\) 必可逆"
      ],
      [
        "D",
        "\\( A \\) 只有一个线性无关的特征向量"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(A^4=0\\) 说明特征值全为 \\(0\\)，且 \\(A\\neq0\\) 为幂零阵，必不可对角化；而 \\(E+A+\\cdots+A^{k-1}\\) 可逆（其逆为 \\(E-A\\)）。但 \\(A\\) 不一定只有一个线性无关特征向量（如含多个 Jordan 块时），故 D 不正确。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-34",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 34,
    "stem": "设 \\( A \\) 为三阶矩阵, \\( \\alpha_{1},\\alpha_{2} \\) 为 \\( A \\) 的分别属于特征值 \\( -1,1 \\) 的特征向量, 向量 \\( \\alpha_{3} \\) 满足 \\( A\\alpha_{3}=\\alpha_{1}+\\alpha_{2} \\). \\newline (1) 证明 \\( \\alpha_{1},\\alpha_{2},\\alpha_{3} \\) 线性无关; \\newline (2) 令 \\( P=(\\alpha_{1},\\alpha_{2},\\alpha_{3}) \\), 求 \\( P^{-1}AP \\).",
    "options": null,
    "ans": null,
    "fb": "(1) 假设 \\( \\alpha_{1},\\alpha_{2},\\alpha_{3} \\) 线性相关, 则 \\( \\alpha_{3} \\) 可由 \\( \\alpha_{1},\\alpha_{2} \\) 线性表示, 不妨设 \\( \\alpha_{3}=l_{1}\\alpha_{1}+l_{2}\\alpha_{2} \\), 其中 \\( l_{1},l_{2} \\) 不全为零 (若 \\( l_{1}=l_{2} \\) 同时为 0, 则 \\( \\alpha_{3}=0 \\), 由 \\( A\\alpha_{3}=\\alpha_{2}+\\alpha_{3} \\) 可知 \\( \\alpha_{2}=0 \\)). 而 \\( A\\alpha_{3}=-\\alpha_{1}+\\alpha_{2} \\), 所以 \\( A\\alpha_{3}=l_{1}A\\alpha_{1}+l_{2}A\\alpha_{2}=-l_{1}\\alpha_{1}+l_{2}\\alpha_{2} \\). 又 \\( A\\alpha_{3}=A(l_{1}\\alpha_{1}+l_{2}\\alpha_{2})=-l_{1}\\alpha_{1}+l_{2}\\alpha_{2} \\), 所以 \\( -l_{1}\\alpha_{1}+l_{2}\\alpha_{2}=-l_{1}\\alpha_{1}+l_{2}\\alpha_{2} \\). 整理得 \\( 2l_{1}\\alpha_{1}+\\alpha_{2}=0 \\), 则 \\( \\alpha_{1},\\alpha_{2} \\) 线性相关, 矛盾 (因为 \\( \\alpha_{1},\\alpha_{2} \\) 分别属于不同特征值的特征向量, 所以 \\( \\alpha_{1},\\alpha_{2} \\) 线性无关). 故 \\( \\alpha_{1},\\alpha_{2},\\alpha_{3} \\) 线性无关. \\newline (2) 记 \\( P=(\\alpha_{1},\\alpha_{2},\\alpha_{3}) \\), 则 \\( P \\) 可逆, 且 \\newline \\( A(\\alpha_{1},\\alpha_{2},\\alpha_{3})=(A\\alpha_{1},A\\alpha_{2},A\\alpha_{3})=(-\\alpha_{1},\\alpha_{2},\\alpha_{2}+\\alpha_{3})=(\\alpha_{1},\\alpha_{2},\\alpha_{3})\\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} \\), \\newline 即 \\( AP=P\\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} \\), 所以 \\( P^{-1}AP=\\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-35",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 35,
    "stem": "设 \\( A \\) 是 \\( n\\,(n>1) \\) 阶矩阵, \\( \\xi_{1},\\xi_{2},\\cdots,\\xi_{n} \\) 是 \\( n \\) 维列向量. 若 \\( \\xi_{1}\\neq 0 \\) 且 \\( A\\xi_{1}=\\xi_{2},\\ A\\xi_{2}=\\xi_{3},\\ \\cdots,\\ A\\xi_{n-1}=\\xi_{n},\\ A\\xi_{n}=0 \\), 证明: \\newline (1) \\( \\xi_{1},\\xi_{2},\\cdots,\\xi_{n} \\) 线性无关; \\newline (2) \\( A \\) 不能相似于对角阵.",
    "options": null,
    "ans": null,
    "fb": "(1) 由题设, 知 \\( A^{k}\\xi_{1}=\\xi_{k+1}\\,(k=1,2,\\cdots,n-1),\\ A^{n}\\xi_{1}=A^{n-1}\\xi_{2}=\\cdots=A\\xi_{n}=0 \\). 设有一组数 \\( x_{1},x_{2},\\cdots,x_{n} \\), 使 \\newline \\( x_{1}\\xi_{1}+x_{2}\\xi_{2}+\\cdots+x_{n}\\xi_{n}=0 \\). \\newline 以 \\( A^{n-1} \\) 左乘上式两边, 得 \\( x_{1}\\xi_{n}=0 \\). 由于 \\( \\xi_{n}\\neq 0 \\), 故 \\( x_{1}=0 \\). 类似地, 可得 \\( x_{1}=x_{2}=\\cdots=x_{n}=0 \\). 因此 \\( \\xi_{1},\\xi_{2},\\cdots,\\xi_{n} \\) 线性无关. \\newline (2) 将题设的 \\( A\\xi_{1}=\\xi_{2},\\ A\\xi_{2}=\\xi_{3},\\ \\cdots,\\ A\\xi_{n-1}=\\xi_{n},\\ A\\xi_{n}=0 \\) 用矩阵表示, 得 \\newline \\( A(\\xi_{1},\\xi_{2},\\cdots,\\xi_{n})=(\\xi_{2},\\xi_{3},\\cdots,\\xi_{n},0)=(\\xi_{1},\\xi_{2},\\cdots,\\xi_{n})\\begin{pmatrix} 0 & 0 & \\cdots & 0 & 0 \\\\ 1 & 0 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & \\cdots & 1 & 0 \\end{pmatrix} \\). \\newline 因为向量组 \\( \\xi_{1},\\xi_{2},\\cdots,\\xi_{n} \\) 线性无关, 所以矩阵 \\( P=(\\xi_{1},\\xi_{2},\\cdots,\\xi_{n}) \\) 可逆, 从而 \\( A \\) 与矩阵 \\newline \\( B=\\begin{pmatrix} 0 & 0 & \\cdots & 0 & 0 \\\\ 1 & 0 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & & \\vdots & \\vdots \\\\ 0 & 0 & \\cdots & 1 & 0 \\end{pmatrix} \\) \\newline 相似. 易于 \\( r(A)=r(B)=n-1 \\), 且 \\( A \\) 的特征值全为 0, 故 \\( A \\) 的线性无关的特征向量仅有 \\( n-r(A)=1 \\) 个, 因此 \\( A \\) 不能相似于对角矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-65",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 65,
    "stem": "设 \\( f(x_1,x_2,x_3,x_4)=x_1^2+3x_2^2-x_3^2+x_1x_2-2x_1x_3+3x_2x_3 \\)，则二次型的矩阵是______，二次型的秩为______。",
    "options": null,
    "ans": "\\( \\begin{pmatrix} 1 & \\frac12 & -1 & 0 \\\\ \\frac12 & 3 & \\frac32 & 0 \\\\ -1 & \\frac32 & -1 & 0 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix} \\)，秩为\\( 3 \\)",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}1&1/2&-1\\\\1/2&3&3/2\\\\-1&3/2&-1\\end{pmatrix}\\)。顺序主子式 \\(\\Delta_1=1,\\ \\Delta_2=11/4>0,\\ \\Delta_3=|A|=-8\\neq0\\)，故秩为 \\(3\\)。故应填该矩阵，秩为 \\(3\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-66",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 66,
    "stem": "二次型 \\( f(x_1,x_2,x_3)=x_1^2-x_2^2+3x_3^2 \\) 的秩为______，正惯性指数为______，负惯性指数为______。",
    "options": null,
    "ans": "3，2，1",
    "fb": "解析：已是标准形，系数为 \\(1,-1,3\\)，故秩 \\(3\\)，正惯性指数 \\(1\\)，负惯性指数 \\(2\\)。故应填 \\(3,2,1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-67",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 67,
    "stem": "设二次型 \\( f(x_1,x_2,\\cdots,x_n)=(nx_1)^2+(nx_2)^2+\\cdots+(nx_n)^2-(x_1+x_2+\\cdots+x_n)^2 \\)（\\( n>1 \\))，则\\( f \\)的秩是______。",
    "options": null,
    "ans": "\\( n \\)",
    "fb": "解析：\\(f=\\sum(nx_i)^2-(\\sum x_i)^2=n^2\\sum x_i^2-(\\sum x_i)^2\\)，对应矩阵 \\(n^2E-J\\)（\\(J\\) 全 \\(1\\)），特征值为 \\(n^2\\)（\\(n-1\\) 重）与 \\(n(n-1)\\)（\\(1\\) 重），均正，故秩为 \\(n\\)。故应填 \\(n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-68",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 68,
    "stem": "二次型 \\( x^T \\begin{pmatrix} 2 & 1 \\\\ 3 & 1 \\end{pmatrix} x \\) 的矩阵是______，\\( x^T \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix} x \\) 的矩阵是______。",
    "options": null,
    "ans": "\\( \\begin{pmatrix} 2 & 2 \\\\ 2 & 1 \\end{pmatrix} \\)，\\( \\begin{pmatrix} 1 & 3 & 5 \\\\ 3 & 5 & 7 \\\\ 5 & 7 & 9 \\end{pmatrix} \\)",
    "fb": "解析：二次型矩阵取 \\((M+M^T)/2\\)。对 \\(M=\\begin{pmatrix}2&1\\\\3&1\\end{pmatrix}\\) 得 \\(\\begin{pmatrix}2&2\\\\2&1\\end{pmatrix}\\)；对 \\(M=\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\) 得 \\(\\begin{pmatrix}1&3&5\\\\3&5&7\\\\5&7&9\\end{pmatrix}\\)。故应填这两个矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-69",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 69,
    "stem": "三元二次型 \\( f(x_1,x_2,x_3)=x^T \\begin{pmatrix} 1 & 1 & 2 \\\\ 1 & 1 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix} x \\) 的秩为______。",
    "options": null,
    "ans": "\\( 1 \\)",
    "fb": "解析：二次型矩阵为 \\((M+M^T)/2=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}\\)，其秩为 \\(1\\)，故 \\(f\\) 的秩为 \\(1\\)。故应填 \\(1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-19",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 19,
    "stem": "二次型 \\( f(x_1,x_2,x_3)=x_1^2+6x_1x_2+4x_1x_3+x_2^2+2x_2x_3+tx_3^2 \\)，若其秩为2，则\\( t \\)值应为______。",
    "options": [
      [
        "A",
        "\\( 0 \\)"
      ],
      [
        "B",
        "\\( 2 \\)"
      ],
      [
        "C",
        "\\( \\frac78 \\)"
      ],
      [
        "D",
        "\\( 1 \\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}1&3&2\\\\3&1&1\\\\2&1&t\\end{pmatrix}\\)。秩为 \\(2\\) 要求 \\(|A|=0\\)：\\(|A|=1\\cdot(t-1)-3\\cdot(3t-2)+2\\cdot(3-2)=t-1-9t+6+2=-8t+7=0\\Rightarrow t=7/8\\)。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-70",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 70,
    "stem": "设矩阵 \\( A=\\begin{pmatrix} 1 & 3 & 5 \\\\ 3 & -2 & -4 \\\\ 5 & -4 & -1 \\end{pmatrix} \\)，求\\( A \\)相应的二次型的表达式。",
    "options": null,
    "ans": "\\( f=x_1^2-2x_2^2-x_3^2+6x_1x_2+10x_1x_3-8x_2x_3 \\)",
    "fb": "解析：设 \\(A\\) 为三阶实对称矩阵，满足 \\(A^2+2A=0\\)（题设条件等价于 \\(A(A+2E)=0\\)），特征值只可能为 \\(0\\) 或 \\(-2\\)；又 \\(r(A)=2\\) 故特征值为 \\(-2,-2,0\\)。为使 \\(kA+E\\) 正定，其所有特征值 \\(k\\lambda+1>0\\)：对 \\(\\lambda=0\\) 得 \\(1>0\\) 恒成立，对 \\(\\lambda=-2\\) 得 \\(1-2k>0\\Rightarrow k<1/2\\)。故应填 \\(k<1/2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-20",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 20,
    "stem": "设\\( A,B \\)为\\( n \\)阶方阵，对任意的\\( n \\)维列向量\\( x \\)，都有\\( x^TAx=x^TBx \\)，则______。",
    "options": [
      [
        "A",
        "\\( A=B \\)"
      ],
      [
        "B",
        "\\( A \\)与\\( B \\)等价"
      ],
      [
        "C",
        "当\\( A \\)与\\( B \\)为对称矩阵时，\\( A=B \\)"
      ],
      [
        "D",
        "当\\( A \\)与\\( B \\)为对称矩阵时，也可能有\\( A\\neq B \\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：若 \\(A,B\\) 为对称矩阵，则对应的二次型矩阵唯一，由 \\(x^TAx=x^TBx\\) 对任意 \\(x\\) 成立可得 \\(A=B\\)；对非对称矩阵则只保证对称部分相同。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-71",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 71,
    "stem": "用配方法化二次型 \\( f(x_1,x_2,x_3)=x_1^2+5x_2^2+5x_3^2+2x_1x_2-4x_1x_3 \\) 为标准形，并写出所用非退化线性替换。",
    "options": null,
    "ans": "标准形 \\( f=y_1^2+y_2^2 \\)，其中\\( \\begin{cases} y_1=x_1+x_2-2x_3, \\\\ y_2=2x_2+x_3, \\\\ y_3=x_3. \\end{cases} \\)",
    "fb": "解析：配方 \\(f=(x_1+x_2-2x_3)^2+(2x_2+x_3)^2\\)，令 \\(y_1=x_1+x_2-2x_3,\\ y_2=2x_2+x_3,\\ y_3=x_3\\)，则 \\(f=y_1^2+y_2^2\\)。故标准形为 \\(y_1^2+y_2^2\\)（替换如上）。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-72",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 72,
    "stem": "用配方法化二次型 \\( f(x_1,x_2,x_3)=2x_1x_2+4x_1x_3 \\) 为标准形，并写出所用非退化线性替换。",
    "options": null,
    "ans": "标准形 \\( f=2z_1^2-2z_2^2 \\)，其中\\( \\begin{cases} x_1=z_1+z_2, \\\\ x_2=z_1-z_2-2z_3, \\\\ x_3=z_3. \\end{cases} \\)",
    "fb": "解析：令 \\(x_1=z_1+z_2,\\ x_2=z_1-z_2-2z_3,\\ x_3=z_3\\)，则 \\(f=2x_1(x_2+2x_3)=2(z_1+z_2)(z_1-z_2)=2z_1^2-2z_2^2\\)。故标准形为 \\(2z_1^2-2z_2^2\\)（替换如上）。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-73",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 73,
    "stem": "用配方法把二次型 \\( f(x_1,x_2,x_3)=x_1x_2+x_1x_3+2x_2x_3 \\) 化为标准形，并写出所用非退化线性替换矩阵。",
    "options": null,
    "ans": "标准形 \\( f=z_1^2-z_2^2-2z_3^2 \\)，替换矩阵\\( C=\\begin{pmatrix} 1 & 1 & -2 \\\\ 1 & -1 & -1 \\\\ 0 & 0 & 1 \\end{pmatrix} \\)",
    "fb": "解析：先令 \\(x_1=y_1+y_2,\\ x_2=y_1-y_2,\\ x_3=y_3\\)，化得 \\(f=y_1^2-y_2^2+2y_1y_3\\)，再配方可得标准形 \\(z_1^2-z_2^2-2z_3^2\\)，相应非退化替换矩阵 \\(C=\\begin{pmatrix}1&1&-2\\\\1&-1&-1\\\\0&0&1\\end{pmatrix}\\)。故应填该标准形与 \\(C\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-20",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 20,
    "stem": "求一个正交变换化二次型 \\( f=x_1^2+4x_2^2+4x_3^2-4x_1x_2+4x_1x_3-8x_2x_3 \\) 成标准形。",
    "options": null,
    "ans": null,
    "fb": "二次型\\( f \\)的矩阵为\\( A=\\begin{pmatrix} 1 & -2 & 2 \\\\ -2 & 4 & -4 \\\\ 2 & -4 & 4 \\end{pmatrix} \\)。特征多项式\\( |\\lambda E-A|=\\lambda^2(\\lambda-9) \\)，特征值为\\( 0,0,9 \\)。对\\( \\lambda=0 \\)求得线性无关特征向量并正交单位化得\\( \\eta_1,\\eta_2 \\)；对\\( \\lambda=9 \\)单位化得\\( \\eta_3 \\)。取\\( Q=(\\eta_1,\\eta_2,\\eta_3) \\)，则正交变换\\( x=Qy \\)化二次型为标准形\\( f=9y_3^2 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-21",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 21,
    "stem": "已知二次型 \\( f(x_1,x_2,x_3)=4x_2^2-3x_3^2+4x_1x_2-4x_1x_3+8x_2x_3 \\)。（1）写出二次型\\( f \\)的矩阵表达式；（2）用正交变换把二次型\\( f \\)化为标准形，并写出相应的正交矩阵。",
    "options": null,
    "ans": null,
    "fb": "（1）由二次型系数写出对称矩阵\\( A=\\begin{pmatrix} 0 & 2 & -2 \\\\ 2 & 2 & 4 \\\\ -2 & 4 & -3 \\end{pmatrix} \\)。（2）特征多项式\\( |\\lambda E-A|=(\\lambda-1)(\\lambda-6)(\\lambda+6) \\)，特征值为\\( 1,6,-6 \\)。分别求出对应的特征向量并单位化，组成正交矩阵\\( Q \\)，则正交变换\\( x=Qy \\)将二次型化为标准形\\( f=y_1^2+6y_2^2-6y_3^2 \\)。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-22",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 22,
    "stem": "求下列二次型的标准形：（1）\\( f(x_1,x_2,x_3)=(x_1,x_2,x_3)\\begin{pmatrix} 2 & 3 & -2 \\\\ 1 & 5 & -3 \\\\ -2 & -5 & 5 \\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\)；（2）\\( f(x_1,x_2,x_3)=(x_1,x_2,x_3)\\begin{pmatrix} 0 & -5 & 1 \\\\ 1 & 0 & 3 \\\\ 1 & -1 & 0 \\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\)。",
    "options": null,
    "ans": null,
    "fb": "（1）对称矩阵为\\( A=\\begin{pmatrix} 2 & 2 & -2 \\\\ 2 & 5 & -4 \\\\ -2 & -4 & 5 \\end{pmatrix} \\)。解法一（配方法）：将\\( f \\)配方得\\( f=2(x_1+x_2-x_3)^2+3(x_2-\\frac23x_3)^2+\\frac53x_3^2 \\)，令\\( y_1=x_1+x_2-x_3, y_2=x_2-\\frac23x_3, y_3=x_3 \\)，则\\( f=2y_1^2+3y_2^2+\\frac53y_3^2 \\)。解法二（正交变换法）：特征多项式\\( |\\lambda E-A|=(\\lambda-1)^2(\\lambda-10) \\)，特征值为\\( 1,1,10 \\)，求出正交矩阵\\( Q \\)后可得标准形\\( f=y_1^2+y_2^2+10y_3^2 \\)。（2）的解答未包含在本批页面中。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-21",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 21,
    "stem": "二次型 \\( f = x_1 x_2 + x_1 x_3 + x_2 x_3 \\) 的标准形是 ____.",
    "options": [
      [
        "A",
        "\\( -y_1^2 - \\frac{1}{2} y_2^2 - \\frac{1}{2} y_3^2 \\)"
      ],
      [
        "B",
        "\\( y_1^2 - \\frac{1}{2} y_2^2 - \\frac{1}{2} y_3^2 \\)"
      ],
      [
        "C",
        "\\( y_1^2 + \\frac{1}{2} y_2^2 - \\frac{1}{2} y_3^2 \\)"
      ],
      [
        "D",
        "\\( y_1^2 + \\frac{1}{2} y_2^2 + \\frac{1}{2} y_3^2 \\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：该二次型矩阵的特征值为 \\(1,-1/2,-1/2\\)（配方后规范形为一正两负），标准形可写为 \\(y_1^2-\\frac12y_2^2-\\frac12y_3^2\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-74",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 74,
    "stem": "设二次型 \\( f(x_1, x_2, x_3) = x_1^2 + 2 x_2^2 + 3 x_3^2 + 4 x_1 x_2 - 4 x_2 x_3 \\), 则 f 的正惯性指数为 ____.",
    "options": null,
    "ans": "2",
    "fb": "解析：配方得 \\(f=(x_1+2x_2)^2-2(x_2+x_3)^2+5x_3^2\\)，故正惯性指数为 \\(2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-23",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 23,
    "stem": "设二次型 \\( f(x_1, x_2, x_3) = a x_1^2 + 2 x_2^2 - 2 x_3^2 + 2 b x_1 x_3 \\) \\( (b > 0) \\), 其中二次型的矩阵 A 的特征值之和为 1, 特征值之积为 \\(-12\\). (1) 求 a, b 的值; (2) 利用正交变换将二次型 f 化为标准形, 并写出所用的正交变换和对应的正交矩阵.",
    "options": null,
    "ans": null,
    "fb": "(1) 二次型 f 的矩阵为 \\( A = \\begin{pmatrix} a & 0 & b \\\\ 0 & 2 & 0 \\\\ b & 0 & -2 \\end{pmatrix} \\). 设 A 的特征值为 \\( \\lambda_i \\) \\( (i = 1, 2, 3) \\). 由题设, \\( \\lambda_1 + \\lambda_2 + \\lambda_3 = a + 2 + (-2) = a = 1 \\), \\( \\lambda_1 \\lambda_2 \\lambda_3 = -4 a - 2 b^2 = -12 \\). 解得 \\( a = 1, b = 2 \\). (2) 由矩阵 A 的特征多项式 \\( |\\lambda E - A| = (\\lambda - 2)^2 (\\lambda + 3) \\), 得 A 的特征值 \\( \\lambda_1 = \\lambda_2 = 2, \\lambda_3 = -3 \\). 对应正交单位向量 \\( \\eta_1 = (2/\\sqrt{5}, 0, 1/\\sqrt{5})^\\top, \\eta_2 = (0, 1, 0)^\\top, \\eta_3 = (1/\\sqrt{5}, 0, -2/\\sqrt{5})^\\top \\). 令 \\( Q = (\\eta_1, \\eta_2, \\eta_3) \\), 则 Q 为正交矩阵, 在正交变换 \\( x = Q y \\) 下, \\( Q^\\top A Q = \\mathrm{diag}(2, 2, -3) \\), 即 \\( f = 2 y_1^2 + 2 y_2^2 - 3 y_3^2 \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-75",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 75,
    "stem": "求可逆矩阵 C, 使 \\( C^\\top A C \\) 为对角矩阵, \\( A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 2 \\\\ 1 & 2 & 1 \\end{pmatrix} \\).",
    "options": null,
    "ans": "\\( C = \\begin{pmatrix} 1 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{pmatrix}, C^\\top A C = \\mathrm{diag}(1, 1, -1) \\).",
    "fb": "解析：对 \\(A\\) 作合同变换（行列同步消元），取 \\(C=\\begin{pmatrix}1&-1&0\\\\0&1&-1\\\\0&0&1\\end{pmatrix}\\)，则 \\(C^TAC=\\operatorname{diag}(1,1,-1)\\)。故应填该 \\(C\\) 与对角阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-24",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 24,
    "stem": "求一非退化线性替换化二次型 \\( 2 x_1 x_2 + 2 x_1 x_3 - 4 x_2 x_3 \\) 为标准形.",
    "options": null,
    "ans": null,
    "fb": "用配方法或初等变换法. 二次型的矩阵为 \\( A = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & -2 \\\\ 1 & -2 & 0 \\end{pmatrix} \\), 通过初等变换或配方法可得可逆矩阵 C 使 \\( C^\\top A C \\) 为对角矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-76",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 76,
    "stem": "求下列二次型的规范形. (1) \\( f(x_1, x_2, x_3) = (x_1, x_2, x_3) \\begin{pmatrix} 2 & 3 & -2 \\\\ 1 & 5 & -3 \\\\ -2 & -5 & 5 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\).",
    "options": null,
    "ans": "规范形为 \\( z_1^2 + z_2^2 + z_3^2 \\).",
    "fb": "解析：该二次型矩阵顺序主子式 \\(\\Delta_1=2,\\ \\Delta_2=7,\\ \\Delta_3=13>0\\)，全正，故正定，规范形为 \\(z_1^2+z_2^2+z_3^2\\)。故应填该规范形。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-77",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 77,
    "stem": "(2) \\( f(x_1, x_2, x_3) = x_1 x_2 + x_1 x_3 + x_2 x_3 \\).",
    "options": null,
    "ans": "规范形为 \\( z_1^2 - z_2^2 - z_3^2 \\).",
    "fb": "解析：该二次型矩阵秩 \\(3\\)，正惯性指数 \\(1\\)、负惯性指数 \\(2\\)，故规范形为 \\(z_1^2-z_2^2-z_3^2\\)。故应填该规范形。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-22",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 22,
    "stem": "二次型 \\( f = 2 x_1^2 + a x_2^2 + a x_3^2 + 6 x_2 x_3 \\) \\( (a > 3) \\) 的规范形为 ____.",
    "options": [
      [
        "A",
        "\\( y_1^2 + y_2^2 + y_3^2 \\)"
      ],
      [
        "B",
        "\\( y_1^2 - y_2^2 - y_3^2 \\)"
      ],
      [
        "C",
        "\\( y_1^2 + y_2^2 - y_3^2 \\)"
      ],
      [
        "D",
        "\\( y_1^2 + y_3^2 \\)"
      ]
    ],
    "ans": "A",
    "fb": "解析：矩阵分块为 \\(\\operatorname{diag}(2,\\begin{pmatrix}a&3\\\\3&a\\end{pmatrix})\\)，特征值为 \\(2,a+3,a-3\\)；由 \\(a>3\\) 三者均正，故正定，规范形为 \\(y_1^2+y_2^2+y_3^2\\)。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-78",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 78,
    "stem": "已知二次型 \\( f = x_1^2 - 2 x_2^2 + a x_3^2 + 2 x_1 x_2 - 4 x_1 x_3 + 2 x_2 x_3 \\) 的秩为 2, 则 f 的规范形为 ____.",
    "options": null,
    "ans": "\\( y_2^2 - y_3^2 \\)",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}1&1&-2\\\\1&-2&1\\\\-2&1&a\\end{pmatrix}\\)，由秩为 \\(2\\) 得 \\(|A|=-3a+3=0\\Rightarrow a=1\\)。此时 \\(A\\) 对称且一行列式为零、二阶子式非零，合同于 \\(\\operatorname{diag}(1,-1,0)\\)，规范形为 \\(y_2^2-y_3^2\\)。故应填 \\(y_2^2-y_3^2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-79",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 79,
    "stem": "已知实二次型 \\( f(x_1, x_2, x_3) = a(x_1^2 + x_2^2 + x_3^2) + 4 x_1 x_2 + 4 x_1 x_3 + 4 x_2 x_3 \\), 经正交变换 \\( x = P y \\) 可化成标准形 \\( f = 6 y_1^2 \\), 则 \\( a = \\) ____.",
    "options": null,
    "ans": "2",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}a&2&2\\\\2&a&2\\\\2&2&a\\end{pmatrix}\\)，特征值为 \\(a+4,a-2,a-2\\)；由正交变换化为 \\(6y_1^2\\) 知特征值为 \\(6,0,0\\)，故 \\(a+4=6\\) 且 \\(a-2=0\\)，得 \\(a=2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-80",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 80,
    "stem": "已知二次型 \\( f(x_1, x_2, x_3) = 2 x_1^2 + 3 x_2^2 + 3 x_3^2 + 2 a x_2 x_3 \\) \\( (a > 0) \\) 通过正交变换化成标准形 \\( f = y_1^2 + 2 y_2^2 + 5 y_3^2 \\), 求参数 a 及所用的正交变换矩阵.",
    "options": null,
    "ans": "\\( a = 2 \\), 所用正交变换矩阵为 \\( Q = \\begin{pmatrix} 0 & 1 & 0 \\\\ -1/\\sqrt{2} & 0 & 1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 0 & 1/\\sqrt{2} \\end{pmatrix} \\).",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}2&0&0\\\\0&3&a\\\\0&a&3\\end{pmatrix}\\)，特征值为 \\(2,3+a,3-a\\)；标准形系数为 \\(1,2,5\\)，故 \\(2\\) 对应 \\(2\\)，\\(3+a=5,\\ 3-a=1\\Rightarrow a=2\\)（\\(a>0\\)）。正交变换矩阵 \\(Q\\) 由对应单位特征向量组成。故应填 \\(a=2\\) 及该正交矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-81",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 81,
    "stem": "设二次型 \\( f = x_1^2 + x_2^2 + x_3^2 + 2 \\alpha x_1 x_2 + 2 \\beta x_2 x_3 + 2 x_1 x_3 \\) 经正交变换 \\( x = P y \\) 化成 \\( f = y_2^2 + 2 y_3^2 \\), 其中 \\( x = (x_1, x_2, x_3)^\\top \\) 和 \\( y = (y_1, y_2, y_3)^\\top \\) 是三维列向量, P 是三维正交矩阵, 试求常数 \\( \\alpha, \\beta \\).",
    "options": null,
    "ans": "\\( \\alpha = 0, \\beta = 0 \\)",
    "fb": "解析：\\(A=\\begin{pmatrix}1&\\alpha&1\\\\\\alpha&1&\\beta\\\\1&\\beta&1\\end{pmatrix}\\)，特征值 \\(0,1,2\\)。由 \\(|A|=-(\\alpha-\\beta)^2=0\\) 得 \\(\\alpha=\\beta\\)；又各阶主子式之和 \\(=2-\\alpha^2-\\beta^2=0\\cdot1+0\\cdot2+1\\cdot2=2\\)，得 \\(\\alpha=\\beta=0\\)。故应填 \\(\\alpha=0,\\beta=0\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-25",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 25,
    "stem": "已知二次曲面方程 \\( x^2 + a y^2 + z^2 + 2 b x y + 2 x z + 2 y z = 4 \\) 可以经过正交变换 \\( (x, y, z)^\\top = P (\\xi, \\eta, \\zeta)^\\top \\) 化为椭圆柱面方程 \\( \\eta^2 + 4 \\zeta^2 = 4 \\). 求 a, b 的值和正交矩阵 P.",
    "options": null,
    "ans": null,
    "fb": "由二次曲面方程可知, 二次型矩阵为 \\( A = \\begin{pmatrix} 1 & b & 1 \\\\ b & a & 1 \\\\ 1 & 1 & 1 \\end{pmatrix} \\), 与 \\( \\mathrm{diag}(0, 1, 4) \\) 相似. 由迹 \\( a + 2 = 5 \\), 解得 \\( a = 3 \\); 由 \\( |A| = -(b - 1)^2 = 0 \\), 解得 \\( b = 1 \\). 对应于特征值 \\( \\lambda_1 = 0, \\lambda_2 = 1, \\lambda_3 = 4 \\) 的单位特征向量分别为 \\( x_1 = (1/\\sqrt{2}, 0, -1/\\sqrt{2})^\\top, x_2 = (1/\\sqrt{3}, -1/\\sqrt{3}, 1/\\sqrt{3})^\\top, x_3 = (1/\\sqrt{6}, 2/\\sqrt{6}, 1/\\sqrt{6})^\\top \\). 因此 \\( P = (x_1, x_2, x_3) \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-fill-82",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 82,
    "stem": "设二次型 \\( f(x_1, x_2, x_3) = a x_1^2 + a x_2^2 + (a - 1) x_3^2 + 2 x_1 x_3 - 2 x_2 x_3 \\). (1) 求二次型 f 的矩阵的所有特征值; (2) 若二次型 f 的规范形为 \\( y_1^2 + y_2^2 \\), 求 a 的值.",
    "options": null,
    "ans": "(1) 特征值为 \\( a, a + 1, a - 2 \\); (2) \\( a = 2 \\).",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}a&0&1\\\\0&a&-1\\\\1&-1&a-1\\end{pmatrix}\\)，特征值为 \\(a,a+1,a-2\\)。规范形为 \\(y_1^2+y_2^2\\) 表明秩 \\(2\\) 且正惯性指数 \\(2\\)，故恰有一个特征值为 \\(0\\) 且另两个为正；令 \\(a-2=0\\) 得 \\(a=2\\)（此时特征值 \\(2,3,0\\)）。故应填 (1) \\(a,a+1,a-2\\)；(2) \\(a=2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-36",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 36,
    "stem": "若 \\(A,B\\) 都是 \\(n\\) 阶正定矩阵，则 \\(A+B\\) 也是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "由于 \\(A,B\\) 是正定矩阵，故 \\(A,B\\) 为实对称矩阵，从而 \\(A+B\\) 为实对称矩阵，而且 \\(f=x^T(A+B)x=x^TAx+x^TBx\\) 为正定二次型，于是对不全为零实数 \\(x_1,x_2,\\cdots,x_n\\)，有 \\(x^TAx>0,\\ x^TBx>0\\)，故 \\(h=x^T(A+B)x=x^TAx+x^TBx>0\\)，即二次型 \\(h=x^T(A+B)x\\) 为正定的，故 \\(A+B\\) 为正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-37",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 37,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实可逆阵，则 \\(A^TA\\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "由 \\((A^TA)^T=A^TA\\)，\\(A^TA\\) 是对称矩阵. 因为 \\(A\\) 可逆，从而齐次线性方程组 \\(Ax=0\\) 只有零解，即对任意非零 \\(n\\) 维列向量 \\(x\\)，有 \\(Ax\\neq 0\\)，所以，\\(x^TA^TAx=(Ax)^T(Ax)>0\\)，即 \\(A^TA\\) 为正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-38",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 38,
    "stem": "\\(A\\) 是正定矩阵的充要条件是对任意实 \\(n\\) 阶可逆矩阵 \\(C\\)，\\(C^TAC\\) 都是正定的.",
    "options": null,
    "ans": null,
    "fb": "设 \\(A\\) 是正定矩阵，所以 \\(A\\) 对称，从而 \\((C^TAC)^T=C^TA^TC=C^TAC\\)，即 \\(C^TAC\\) 为对称矩阵. 因为 \\(C\\) 可逆，所以齐次线性方程组 \\(Cx=0\\) 只有零解，即对任意非零列向量 \\(x\\)，有 \\(Cx\\neq 0\\). 由 \\(A\\) 是正定的，所以 \\(x^TC^TACx=(Cx)^TA(Cx)>0\\)，即 \\(C^TAC\\) 是正定矩阵. 反之，若对任意 \\(n\\) 阶可逆方阵 \\(C\\)，\\(C^TAC\\) 都是正定的，则取 \\(C=E\\)，\\(C^TAC=E^TAE=A\\) 也是正定的.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-39",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 39,
    "stem": "设 \\(A\\) 是实反对称矩阵，证明 \\(E-A^2\\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "因为 \\((E-A^2)^T=E-(A^2)^T=E-(A^T)^2=E-A^2\\)，所以 \\(E-A^2\\) 是实对称矩阵. 对任意的 \\(n\\) 维实向量 \\(x\\)，由 \\(A\\) 为反对称矩阵，有 \\[x^T(E-A^2)x=x^Tx-x^TA^2x=x^Tx+x^TA^TAx-x^TAx+(Ax)^T(Ax).\\] 当 \\(x\\neq 0\\) 时，由 \\(x^Tx>0\\) 及 \\((Ax)^T(Ax)\\geq 0\\) 有 \\(x^T(E-A^2)x>0\\)，\\(E-A^2\\) 是正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-40",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 40,
    "stem": "设 \\(A\\) 为 \\(m\\times n\\) 实矩阵，\\(B=\\lambda E+A^TA\\)，试证当 \\(\\lambda>0\\) 时，矩阵 \\(B\\) 为正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "\\(B^T=(\\lambda E+A^TA)^T=\\lambda E+A^TA=B\\)，所以 \\(B\\) 为 \\(n\\) 阶对称矩阵. 对于任意的实 \\(n\\) 维向量 \\(x\\)，有 \\[x^TBx=x^T(\\lambda E+A^TA)x=\\lambda x^Tx+x^TA^TAx=\\lambda x^Tx+(Ax)^T(Ax).\\] 当 \\(x\\neq 0\\) 时，有 \\(x^Tx>0\\)，\\((Ax)^T(Ax)\\geq 0\\). 因此，当 \\(\\lambda>0\\) 时，对任意的 \\(x\\neq 0\\)，有 \\(x^TBx=\\lambda x^Tx+(Ax)^T(Ax)>0\\)，故 \\(B\\) 为正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-41",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 41,
    "stem": "设 \\(A\\) 为 \\(m\\) 阶正定矩阵，\\(B\\) 为 \\(m\\times n\\) 实矩阵，试证：\\(B^TAB\\) 为正定矩阵的充分必要条件是 \\(B\\) 的秩 \\(r(B)=n\\).",
    "options": null,
    "ans": null,
    "fb": "必要性：设 \\(B^TAB\\) 为正定矩阵，则对任意的实 \\(n\\) 维列向量 \\(x\\neq 0\\)，有 \\(x^T(B^TAB)x>0\\)，即 \\((Bx)^TA(Bx)>0\\)，于是 \\(Bx\\neq 0\\). 因此，\\(Bx=0\\) 只有零解，从而 \\(r(B)=n\\). 充分性：因 \\((B^TAB)^T=B^TA^TB=B^TAB\\)，故 \\(B^TAB\\) 为实对称矩阵. 若 \\(r(B)=n\\)，则线性方程组 \\(Bx=0\\) 只有零解，从而对任意实 \\(n\\) 维列向量 \\(x\\neq 0\\)，有 \\(Bx\\neq 0\\). 又 \\(A\\) 为正定矩阵，所以对 \\(Bx\\neq 0\\) 有 \\((Bx)^TA(Bx)>0\\). 于是当 \\(x\\neq 0\\) 时，\\(x^T(B^TAB)x>0\\)，故 \\(B^TAB\\) 为正定矩阵. 点评：必要性的证明也可使用有关矩阵的结论. 一方面，由 \\(B\\) 为 \\(m\\times n\\) 矩阵知 \\(r(B)\\leq \\min(m,n)\\leq n\\). 另一方面，由 \\(B^TAB\\) 是 \\(n\\) 阶矩阵，而 \\(r(B)\\geq r(B^TAB)=n\\)，所以 \\(r(B)=n\\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-42",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 42,
    "stem": "设 \\(A\\) 为 \\(n\\) 阶正定矩阵，\\(B\\) 为 \\(n\\times m\\) 实矩阵. 证明：如果 \\(r(B)=m\\)，则 \\(m\\) 阶实方阵 \\(B^TAB\\) 必定正定的.",
    "options": null,
    "ans": null,
    "fb": "首先，由于 \\(A\\) 是正定的，因此 \\(B^TAB\\) 是 \\(m\\) 阶实对称矩阵. 因 \\(r(B)=m\\)，所以齐次线性方程组 \\(Bx=0\\) 只有零解，即任意非零列向量 \\(x\\)，\\(Bx\\neq 0\\). 但由于 \\(A\\) 是正定的，故 \\((Bx)^TA(Bx)>0\\)，即 \\(x^T(B^TAB)x>0\\). 因此，\\(B^TAB\\) 是正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-83",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 83,
    "stem": "设 \\(A=\\begin{pmatrix} 1 & 1 & \\cdots & 1 \\\\ x_1 & x_2 & \\cdots & x_n \\\\ x_1^2 & x_2^2 & \\cdots & x_n^2 \\end{pmatrix}\\)，\\(i\\neq j\\) 时，\\(x_i\\neq x_j\\)，讨论矩阵 \\(A^TA\\) 的正定性.",
    "options": null,
    "ans": "当 \\(s>n\\) 时，\\(A^TA\\) 不是正定的；当 \\(s<n\\) 时，\\(A^TA\\) 是正定的.",
    "fb": "解析：按题设 \\(A\\) 为 \\(n\\)（数据点数）\\(\\times s\\)（幂次列数）的 Vandermonde 型矩阵，\\(A^TA\\) 为 Gram 矩阵，正定当且仅当 \\(A\\) 列满秩。当 \\(s<n\\) 时 \\(s\\) 个列向量在 \\(n\\) 个互异点处线性无关，\\(A\\) 列满秩，\\(A^TA\\) 正定；当 \\(s>n\\) 时列数大于行数，不可能满秩，故不正定。故应填 当 \\(s<n\\) 时正定，当 \\(s>n\\) 时非正定。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-43",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 43,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶正定矩阵，则 \\(A\\) 可逆，且 \\(A^{-1}\\) 也正定.",
    "options": null,
    "ans": null,
    "fb": "由 \\((A^{-1})^T=(A^T)^{-1}=A^{-1}\\)，故 \\(A^{-1}\\) 是对称矩阵. 因 \\(A\\) 正定，所以 \\(A\\) 的特征值全大于零，从而 \\(A\\) 可逆. 设 \\(\\lambda_1,\\lambda_2,\\cdots,\\lambda_n\\) 是 \\(A\\) 的 \\(n\\) 个特征值，则 \\(\\frac{1}{\\lambda_1},\\frac{1}{\\lambda_2},\\cdots,\\frac{1}{\\lambda_n}\\) 是 \\(A^{-1}\\) 的 \\(n\\) 个特征值，均大于零. 所以 \\(A^{-1}\\) 正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-44",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 44,
    "stem": "若 \\(A\\) 是 \\(n\\) 阶正定矩阵，则 \\(A^*\\) 也是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "\\((A^*)^T=(A^T)^*=A^*\\)，故 \\(A^*\\) 是对称矩阵. 证法一：定义法. 由 \\(AA^*=A^*A=|A|E\\) 知，\\(A^*=|A|A^{-1}\\). 已知 \\(A\\) 正定，故有 \\(|A|>0\\)，且对任何 \\(y\\neq 0\\)，恒有 \\(y^TAy>0\\). 于是 \\[x^TA^*x=x^T|A|A^{-1}x=|A|x^TA^{-1}x=|A|(A^{-1}x)^TA(A^{-1}x).\\] 因为 \\(A\\) 可逆，当 \\(x\\neq 0\\) 时，\\(y=A^{-1}x\\neq 0\\)，从而对任何 \\(x\\neq 0\\)，\\[x^TA^*x=|A|(A^{-1}x)^TA(A^{-1}x)=|A|y^TAy>0,\\] 根据定义知，\\(A^*\\) 是正定矩阵. 证法二：特征值法. 设 \\(A\\) 的特征值为 \\(\\lambda_1,\\lambda_2,\\cdots,\\lambda_n\\)，由 \\(A\\) 正定知，\\(\\lambda_i>0\\ (i=1,2,\\cdots,n)\\) 且 \\(|A|>0\\)，又 \\(A^*\\) 的特征值为 \\(\\frac{|A|}{\\lambda_1},\\frac{|A|}{\\lambda_2},\\cdots,\\frac{|A|}{\\lambda_n}\\)，于是 \\(\\frac{|A|}{\\lambda_i}>0\\ (i=1,2,\\cdots,n)\\)，即 \\(A^*\\) 的全部特征值大于零，故 \\(A^*\\) 是正定矩阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-45",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 45,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶正定阵，\\(E\\) 是 \\(n\\) 阶单位阵，则 \\(|A+E|>1\\).",
    "options": null,
    "ans": null,
    "fb": "因为 \\(A\\) 正定，所以 \\(A\\) 的 \\(n\\) 个特征值 \\(\\lambda_1,\\lambda_2,\\cdots,\\lambda_n\\) 均大于零，从而 \\(A+E\\) 的 \\(n\\) 个特征值 \\(1+\\lambda_1,1+\\lambda_2,\\cdots,1+\\lambda_n\\) 均大于 \\(1\\)，所以 \\[|A+E|=(1+\\lambda_1)(1+\\lambda_2)\\cdots(1+\\lambda_n)>1.\\]",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-46",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 46,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实对称的幂等阵（\\(A^2=A,A^T=A\\)），\\(r(A)=r\\ (0<r<n)\\). 证明：\\(A+E\\) 是正定阵，且计算 \\(|E+A+A^2+\\cdots+A^k|\\).",
    "options": null,
    "ans": null,
    "fb": "因为 \\(A^2=A\\)，所以 \\(A\\) 的特征值为 \\(0\\) 或 \\(1\\). 从而知 \\(A+E\\) 的特征值的取值范围是 \\(1\\) 和 \\(2\\)，故 \\(A+E\\) 的全部特征值大于零，又 \\((A+E)^T=A^T+E=A+E\\)，所以 \\(A+E\\) 正定. 因 \\(r(A)=r\\)，故 \\(1\\) 是 \\(A\\) 的 \\(r\\) 重特征值，\\(0\\) 是 \\(A\\) 的 \\(n-r\\) 重特征值. 因 \\(A^2=A\\)，故 \\(A^k=A^{k-1}=\\cdots=A^1=A\\)，则 \\[|E+A+A^2+\\cdots+A^k|=|E+kA|.\\] 又 \\(E+kA\\) 的特征值的取值范围是 \\(1+k\\) 或 \\(1\\)，且 \\(1+k\\) 是 \\(E+kA\\) 的 \\(r\\) 重特征值而 \\(1\\) 是 \\(E+kA\\) 的 \\(n-r\\) 重特征值. 所以 \\[|E+kA|=(1+k)^r.\\]",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-47",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 47,
    "stem": "已知 \\(A\\) 与 \\(A-E\\) 均是 \\(n\\) 阶正定矩阵，证明：\\(E-A^{-1}\\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "由于 \\((E-A^{-1})^T=E^T-(A^{-1})^T=E-(A^T)^{-1}=E-A^{-1}\\)，故 \\(E-A^{-1}\\) 是对称矩阵. 设 \\(\\lambda\\) 是矩阵 \\(A\\) 的特征值，那么 \\(A-E\\) 的特征值是 \\(\\lambda-1\\)，\\(E-A^{-1}\\) 的特征值是 \\(1-\\frac{1}{\\lambda}\\). 由 \\(A,A-E\\) 正定，知 \\(\\lambda>0,\\lambda-1>0\\)，故 \\(E-A^{-1}\\) 的特征值 \\(\\frac{\\lambda-1}{\\lambda}>0\\). 所以矩阵 \\(E-A^{-1}\\) 正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-mc-23",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 23,
    "stem": "\\(n\\) 阶实对称矩阵 \\(A\\) 为正定矩阵的充分必要条件是 ____.",
    "options": [
      [
        "A",
        "所有 \\(k\\) 阶主子式为正 \\((k=1,2,\\cdots,n)\\)"
      ],
      [
        "B",
        "\\(A\\) 的所有特征值为负"
      ],
      [
        "C",
        "\\(A^{-1}\\) 为正定矩阵"
      ],
      [
        "D",
        "\\(r(A)=n\\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：实对称阵正定当且仅当其逆阵 \\(A^{-1}\\) 正定（二者特征值同号且为正）。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-84",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 84,
    "stem": "设 \\(A\\) 是三阶实对称矩阵，且满足 \\(A^3+2A=0\\). 若 \\(kA+E\\) 是正定矩阵，则 \\(k\\) ____.",
    "options": null,
    "ans": "\\(k<\\dfrac{1}{2}\\).",
    "fb": "解析：由 \\(A^2+2A=0\\)（题设）知 \\(A\\) 的特征值只可能为 \\(0\\) 或 \\(-2\\)；\\(r(A)=2\\) 故特征值为 \\(-2,-2,0\\)。\\(B=(kE+A)^2\\) 的特征值为 \\(k^2,(k+2)^2,(k+2)^2\\)，故 \\(\\Lambda=\\operatorname{diag}(k^2,(k+2)^2,(k+2)^2)\\)。\\(B\\) 正定当且仅当 \\(k^2>0\\) 且 \\((k+2)^2>0\\)，即 \\(k\\neq0\\) 且 \\(k\\neq-2\\)。故应填 \\(\\Lambda=\\operatorname{diag}(k^2,(k+2)^2,(k+2)^2)\\)；当 \\(k\\neq-2\\) 且 \\(k\\neq0\\) 时 \\(B\\) 正定。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-48",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 48,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实对称矩阵，且满足 \\(A^3+A^2-A=3E\\)，证明：\\(A\\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "由题意知，若矩阵 \\(A\\) 的特征值为 \\(\\lambda\\)，则 \\(\\lambda\\) 必满足 \\[\\lambda^3+\\lambda^2-\\lambda-3=0,\\quad \\text{即}\\ (\\lambda-1)(\\lambda^2+2\\lambda+3)=0.\\] 因为 \\(A\\) 是实对称矩阵，从而其特征值全是实数，所以 \\(A\\) 的特征值均为 \\(1\\)，故 \\(A\\) 是正定阵.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-85",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 85,
    "stem": "设矩阵 \\(A=\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}\\)，矩阵 \\(B=(kE+A)^2\\)，其中 \\(k\\) 为实数，求对角矩阵 \\(\\Lambda\\)，使 \\(B\\) 与 \\(A\\) 相似，并求 \\(k\\) 为何值时，\\(B\\) 为正定矩阵.",
    "options": null,
    "ans": "\\(\\Lambda=\\operatorname{diag}\\big((k+2)^2,(k+2)^2,k^2\\big)\\)；当 \\(k\\neq -2\\) 且 \\(k\\neq 0\\) 时，\\(B\\) 为正定矩阵.",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}2&0&0\\\\0&0&1\\\\0&1&t/2\\\\0&t/2&1\\end{pmatrix}\\)？实为 \\(\\begin{pmatrix}2&1&0\\\\1&1&t/2\\\\0&t/2&1\\end{pmatrix}\\)。顺序主子式 \\(\\Delta_1=2,\\ \\Delta_2=1,\\ \\Delta_3=1-t^2/2>0\\)，解得 \\(|t|<\\sqrt2\\)。故应填 \\(-\\sqrt2<t<\\sqrt2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-49",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 49,
    "stem": "\\(n\\) 阶矩阵 \\(A\\) 正定的充要条件是存在可逆矩阵 \\(P\\)，使 \\(A=P^TP\\).",
    "options": null,
    "ans": null,
    "fb": "充分性见 2.2. 必要性：设 \\(\\lambda_1,\\lambda_2,\\cdots,\\lambda_n\\) 是 \\(A\\) 的特征值，由于 \\(A\\) 正定，从而 \\(A\\) 的特征值全大于零且 \\(A\\) 是实对称矩阵，从而存在正交矩阵 \\(Q\\) 使 \\[A=Q^T\\begin{pmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{pmatrix}Q,\\quad \\text{又令}\\ T=\\begin{pmatrix} \\sqrt{\\lambda_1} & & \\\\ & \\ddots & \\\\ & & \\sqrt{\\lambda_n} \\end{pmatrix},\\] 则 \\(T=T^T\\)，且 \\[TT^T=\\begin{pmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{pmatrix}.\\] 所以 \\[A=Q^TT^TTQ=(TQ)^T(TQ).\\] 令 \\(P=TQ\\)，则 \\(P\\) 是可逆矩阵，且 \\(A=P^TP\\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-50",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 50,
    "stem": "设 \\(A=(a_{ij})\\) 是 \\(n\\) 阶正定矩阵，则 \\(a_{ii}>0\\ (1\\leq i\\leq n)\\).",
    "options": null,
    "ans": null,
    "fb": "由 \\(A\\) 正定，存在可逆矩阵 \\(P\\)，使 \\(A=P^TP\\). 令 \\(P=(b_{ij})\\)，则 \\[a_{ii}=b_{i1}^2+b_{i2}^2+\\cdots+b_{in}^2.\\] 又 \\(P\\) 可逆，故 \\(b_{i1},b_{i2},\\cdots,b_{in}\\) 不全为零，所以 \\(a_{ii}>0\\ (1\\leq i\\leq n)\\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-51",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 51,
    "stem": "设 \\(A\\) 为正定矩阵. 证明：对任意整数 \\(m\\)，\\(A^m\\) 都是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "因 \\(A\\) 正定，故 \\(A\\) 对称，从而 \\((A^m)^T=(A^T)^m=A^m\\)，\\(A^m\\) 也对称. 当 \\(m=0\\) 时，\\(A^0=E\\) 当然是正定矩阵. 当 \\(m<0\\) 时，由于 \\(m=-|m|\\)，而 \\(A^m=(A^{-1})^{|m|}\\). 且由 2.9 知 \\(A^{-1}\\) 是正定的，故下面只需假定 \\(m\\) 为正整数即可. 当 \\(m\\) 为偶数时，由于 \\(A^T=A\\) 且 \\[A^m=(A^{m/2})^TA^{m/2},\\] 故 \\(A^m\\) 是正定的；当 \\(m\\) 为奇数时，则由 \\(A\\) 是正定的，故存在实可逆矩阵 \\(P\\) 使 \\(A=P^TP\\). 由此可得 \\[A^m=A^{m-1}A=(A^{m-1})^TA^{m-1}\\cdots A=(A{m/2})^TP^TPTA^{m/2}=\\cdots=(PA^{m/2})^T(PA^{m/2}),\\] 从而 \\(A^m\\) 是正定的.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-52",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 52,
    "stem": "若 \\(A,B\\) 是 \\(n\\) 阶正定矩阵，则 \\(AB\\) 正定的充要条件是 \\(AB=BA\\).",
    "options": null,
    "ans": null,
    "fb": "由于 \\(A,B\\) 都是正定矩阵，从而 \\(A,B\\) 是实对称矩阵. 若 \\(AB\\) 正定，则 \\(AB\\) 亦是实对称矩阵，从而 \\((AB)^T=AB\\) 即 \\(AB=BA\\). 若 \\(AB=BA\\)，则 \\(AB\\) 是实对称矩阵. 由题可知，存在可逆矩阵 \\(P\\) 及 \\(Q\\)，使 \\(A=P^TP,\\ B=Q^TQ\\)，于是 \\[AB=P^TPQ^TQ,\\ (P^T)^{-1}ABP^T=PQ^TQP^T=(QP^T)^T(QP^T),\\] 且 \\(QP^T\\) 可逆，所以 \\((P^T)^{-1}ABP^T\\) 正定. 而 \\(AB\\) 与 \\((P^T)^{-1}ABP^T\\) 相似，从而 \\(AB\\) 的特征值全为正数，所以 \\(AB\\) 也是正定的.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-86",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 86,
    "stem": "若二次型 \\(f(x_1,x_2,x_3)=2x_1^2+x_2^2+x_3^2+2x_1x_2+tx_2x_3\\) 是正定的，则 \\(t\\) 的取值范围是 ____.",
    "options": null,
    "ans": "\\(-\\sqrt{2}<t<\\sqrt{2}\\).",
    "fb": "解析：(1) 顺序主子式 \\(\\Delta_2=0\\)，故对任意 \\(t\\) 均不能正定；(2) 由霍尔维茨准则需 \\(t>0,\\ t^2-1>0\\) 且四阶顺序主子式 \\(t^3-3t-2>0\\)，得 \\(t>2\\)。故应填 (1) 不论 \\(t\\) 为何值均不正定；(2) \\(t>2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-mc-24",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 24,
    "stem": "下列矩阵中，正定矩阵是 ____.",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 0 \\\\ 1 & 0 & -3 \\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix} 1 & 3 & 4 \\\\ 3 & 9 & 2 \\\\ 4 & 2 & 6 \\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 7 & 10 \\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix} 2 & -2 & 0 \\\\ -2 & 5 & -1 \\\\ 0 & -1 & 2 \\end{pmatrix}\\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：检验顺序主子式：D 项矩阵 \\(\\Delta_1=2,\\ \\Delta_2=6,\\ \\Delta_3=10\\) 均 \\(>0\\)，正定；其余各项均有顺序主子式非正或不对称。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-87",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 87,
    "stem": "判定下列二次型的正定性. (1) \\(f=99x_1^2-12x_1x_2+48x_1x_3+130x_2^2-60x_2x_3+71x_3^2\\)；(2) \\(f=10x_1^2+8x_1x_2+24x_1x_3+2x_2^2-28x_2x_3+x_3^2\\)；(3) \\(f=\\sum_{i=1}^n x_i^2+\\sum_{1\\leq i<j\\leq n} x_ix_j\\).",
    "options": null,
    "ans": "(1) \\(f\\) 是正定二次型；(2) \\(f\\) 不是正定二次型；(3) \\(f\\) 是正定二次型.",
    "fb": "解析：由实对称阵按合同分类，类由秩 \\(r\\) 与正惯性指数 \\(p\\) 决定（规范形 \\(y_1^2+\\cdots+y_p^2-y_{p+1}^2-\\cdots-y_r^2\\)），即 \\((p,q)\\) 满足 \\(p+q\\le n,\\ p,q\\ge0\\)，共有 \\(\\sum_{r=0}^n(r+1)=(n+1)(n+2)/2\\) 类。故应填 \\(\\dfrac{(n+1)(n+2)}{2}\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-88",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 88,
    "stem": "\\(f\\) 取何值时，下列二次型是正定的？ (1) \\(f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2x_1x_2+2tx_2x_3\\)； (2) \\(f(x_1,\\cdots,x_n)=t(x_1^2+x_2^2+x_3^2)+2x_1x_2-2x_2x_3+2x_1x_3+x_4^2\\).",
    "options": null,
    "ans": "(1) 不论 \\(t\\) 为何值，\\(f\\) 都不能是正定的；(2) \\(t>2\\).",
    "fb": "解析：矩阵 \\(\\begin{pmatrix}1&3&5\\\\3&-2&-4\\\\5&-4&-1\\end{pmatrix}\\) 的二次型为 \\(x_1^2-2x_2^2-x_3^2+6x_1x_2+10x_1x_3-8x_2x_3\\)。故应填该表达式。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-53",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 53,
    "stem": "证明：实对称矩阵 \\(A\\) 是正定矩阵的充要条件是 \\(A\\) 的主子式全大于零.",
    "options": null,
    "ans": null,
    "fb": "充分性是明显的. 因为主子式全大于零，那么顺序主子式必全大于零，从而 \\(A\\) 是正定的. 下证必要性. 设 \\(n\\) 阶实对称矩阵 \\(A=(a_{ij})\\) 是正定的，而 \\[A_k=\\begin{pmatrix} a_{i_1 i_1} & a_{i_1 i_2} & \\cdots & a_{i_1 i_k} \\\\ a_{i_2 i_1} & a_{i_2 i_2} & \\cdots & a_{i_2 i_k} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{i_k i_1} & a_{i_k i_2} & \\cdots & a_{i_k i_k} \\end{pmatrix},\\quad 1\\leq i_1<i_2<\\cdots<i_k\\leq n,\\] 为 \\(A\\) 的任一个 \\(k\\) 阶主子式 \\(|A_k|\\) 所对应的 \\(k\\) 阶实对称矩阵. 由于 \\(A\\) 是正定的，故二次型 \\(f(x_1,\\cdots,x_n)=x^TAx\\) 对任意不全为零的实数 \\(c_1,\\cdots,c_n\\) 都有 \\(f(c_1,c_2,\\cdots,c_n)>0\\). 从而对不全为零的实数 \\(c_{i_1},c_{i_2},\\cdots,c_{i_k}\\)，有 \\[f(0,\\cdots,c_{i_1},\\cdots,c_{i_2},\\cdots,c_{i_k},\\cdots,0)>0.\\]",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-54",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 54,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶正定矩阵，\\(B\\) 是 \\(n\\) 阶实对称矩阵，证明矩阵 \\(A-B^{2}\\) 可逆。",
    "options": null,
    "ans": null,
    "fb": "因为 \\(A\\) 是正定矩阵，知 \\(A^{T}=A\\). \\(B\\) 是实对称矩阵 \\(B^{T}=B\\). 于是 \\((A-B^{2})^{T}=(A+B^{T}B^{T})^{T}=A^{T}+(B^{2})^{T}=A+B^{2}=A-B^{2}\\),即 \\(A-B^{2}\\) 是对称矩阵. 构造二次型 \\(x^{T}(A-B^{2})x\\), 有 \\[ x^{T}(A-B^{2})x=x^{T}(A+B^{T}B)x=x^{T}Ax+(Bx)^{T}(Bx). \\] 因任意 \\(x\\neq 0\\),但有 \\(x^{T}Ax>0\\),\\((Bx)^{T}(Bx)\\geq 0\\),即任意 \\(x\\neq 0\\),但 \\(x^{T}(A-B^{2})x>0\\),所以 \\(x^{T}(A-B^{2})x\\) 是正定二次型，那么 \\((A-B^{2})^{-1}\\) 存在，即矩阵 \\(A-B^{2}\\) 可逆。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-55",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 55,
    "stem": "已知 \\(A\\) 是 \\(n\\) 阶实对称矩阵，且 \\(AB+B^{T}A\\) 是正定矩阵，证明 \\(A\\) 是可逆矩阵。",
    "options": null,
    "ans": null,
    "fb": "对于任意 \\(x\\neq 0\\),由于 \\(AB+B^{T}A\\) 是正定矩阵，\\(A\\) 是实对称矩阵，总有 \\[ x^{T}(AB+B^{T}A)x=(Ax)^{T}(Bx)+(Bx)^{T}(Ax)>0. \\] 由此，对于任意 \\(x\\neq 0\\),但有 \\(Ax\\neq 0\\),即 \\(Ax=0\\) 只有零解，从而 \\(A\\) 可逆。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-56",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 56,
    "stem": "已知 \\(A\\) 是 \\(n\\) 阶正定矩阵，证明存在 \\(n\\) 阶正定矩阵 \\(B\\), 使 \\(A=B^{2}\\).",
    "options": null,
    "ans": null,
    "fb": "因为 \\(A\\) 是正定矩阵，所以 \\(A\\) 是实对称矩阵，故存在正交矩阵 \\(P\\) 使 \\[ P^{T}AP=\\begin{pmatrix}\\lambda_{1}&&&\\\\&\\lambda_{2}&&\\\\&&&\\ddots\\\\&&&&\\lambda_{n}\\end{pmatrix}, \\] 且 \\(\\lambda_{i}>0\\,(i=1,2,\\dots,n)\\),那么 \\[ A=PAP^{-1}=P\\begin{pmatrix}\\sqrt{\\lambda_{1}}&&&\\\\&\\sqrt{\\lambda_{2}}&&\\\\&&&\\ddots\\\\&&&&\\sqrt{\\lambda_{n}}\\end{pmatrix}\\begin{pmatrix}\\sqrt{\\lambda_{1}}&&&\\\\&\\sqrt{\\lambda_{2}}&&\\\\&&&\\ddots\\\\&&&&\\sqrt{\\lambda_{n}}\\end{pmatrix}P^{-1}=P\\begin{pmatrix}\\sqrt{\\lambda_{1}}&&&\\\\&\\sqrt{\\lambda_{2}}&&\\\\&&&\\ddots\\\\&&&&\\sqrt{\\lambda_{n}}\\end{pmatrix}\\cdot P\\begin{pmatrix}\\sqrt{\\lambda_{1}}&&&\\\\&\\sqrt{\\lambda_{2}}&&\\\\&&&\\ddots\\\\&&&&\\sqrt{\\lambda_{n}}\\end{pmatrix}P^{-1}=B^{2}, \\] 其中 \\(B=P\\,\\mathrm{diag}(\\sqrt{\\lambda_{1}},\\dots,\\sqrt{\\lambda_{n}})P^{-1}\\). 则矩阵 \\(B\\) 的特征值是 \\(\\sqrt{\\lambda_{1}},\\sqrt{\\lambda_{2}},\\dots,\\sqrt{\\lambda_{n}}\\),均大于零。另一方面，由 \\(P\\) 是正交矩阵 \\(P^{-1}=P^{T}\\),知 \\(B\\) 是对称矩阵。从而 \\(B\\) 是正定矩阵，且满足 \\(A=B^{2}\\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-57",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 57,
    "stem": "证明：在 \\(n\\) 阶实对称矩阵中，正定矩阵只能与正定矩阵相似。",
    "options": null,
    "ans": null,
    "fb": "设 \\(A,B\\) 是两个 \\(n\\) 阶实对称矩阵，且两者相似，当 \\(A\\) 为正定矩阵时，\\(A\\) 的特征根全为正实数，但相似矩阵有相同的特征值，故 \\(B\\) 的特征根也全是正实数。从而 \\(B\\) 是正定矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-58",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 58,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶正定矩阵，\\(B\\) 是 \\(n\\) 阶实对称矩阵，证明存在可逆阵 \\(P\\), 使得 \\[ P^{T}AP=E,\\qquad P^{T}BP=\\begin{pmatrix}\\mu_{1}&0&\\cdots&0\\\\0&\\mu_{2}&\\cdots&0\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\0&0&\\cdots&\\mu_{n}\\end{pmatrix}, \\] 其中 \\(\\mu_{1},\\mu_{2},\\dots,\\mu_{n}\\) 是 \\(|\\mu A-B|=0\\) 的根。",
    "options": null,
    "ans": null,
    "fb": "因 \\(A\\) 是正定矩阵，存在可逆矩阵 \\(Q\\), 使得 \\(Q^{T}AQ=E\\). 而 \\(B\\) 是实对称阵，\\((Q^{T}BQ)^{T}=Q^{T}B^{T}Q=Q^{T}BQ\\),故 \\(Q^{T}BQ\\) 仍是实对称阵，从而存在正交阵 \\(T\\), 使得 \\[ T^{T}(Q^{T}BQ)T=(QT)^{T}B(QT)=\\begin{pmatrix}\\mu_{1}&0&\\cdots&0\\\\0&\\mu_{2}&\\cdots&0\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\0&0&\\cdots&\\mu_{n}\\end{pmatrix}, \\] 其中 \\(\\mu_{1},\\mu_{2},\\dots,\\mu_{n}\\) 是 \\(Q^{T}BQ\\) 的特征值。又由 \\(T^{T}Q^{T}AQT=T^{T}ET=E\\),取 \\(QT=P\\), 则得证。又因 \\(\\mu_{1},\\mu_{2},\\dots,\\mu_{n}\\) 是 \\(Q^{T}BQ\\) 的特征值，故 \\(\\mu\\) 满足 \\(|\\mu E-Q^{T}BQ|=0\\). 将 \\(Q^{T}AQ=E\\) 代入，得 \\[ |\\mu E-Q^{T}BQ|=|\\mu Q^{T}AQ-Q^{T}BQ|=|Q^{T}|\\,|\\mu A-B|\\,|Q|=|Q^{-1}|\\,|\\mu A-B|=0, \\] \\(Q\\) 可逆，\\(|Q|\\neq 0\\),故 \\(|\\mu A-B|=0\\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-59",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 59,
    "stem": "已知 \\(A\\) 是 \\(n\\) 阶正定矩阵，\\(n\\) 维非零列向量 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\dots,\\boldsymbol{\\alpha}_{s}\\), 满足 \\(\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{j}=0\\,(i\\neq j;\\,i,j=1,2,\\dots,s)\\), 证明 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\dots,\\boldsymbol{\\alpha}_{s}\\) 线性无关。",
    "options": null,
    "ans": null,
    "fb": "设 \\[ k_{1}\\boldsymbol{\\alpha}_{1}+k_{2}\\boldsymbol{\\alpha}_{2}+\\cdots+k_{s}\\boldsymbol{\\alpha}_{s}=\\boldsymbol{0}. \\tag{1} \\] 用 \\(\\boldsymbol{\\alpha}_{i}^{T}A\\) 左乘以上式，有 \\[ k_{1}\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{1}+k_{2}\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{2}+\\cdots+k_{s}\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{s}=0. \\tag{2} \\] 因为 \\(\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{j}=0\\,(i\\neq j)\\),上式变为 \\[ k_{i}\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{i}=0, \\] 因 \\(A\\) 正定，\\(\\boldsymbol{\\alpha}_{i}\\neq \\boldsymbol{0}\\),有 \\(\\boldsymbol{\\alpha}_{i}^{T}A\\boldsymbol{\\alpha}_{i}>0\\),故必有 \\(k_{i}=0\\). 同理可证 \\(k_{2}=\\cdots=k_{s}=0\\). 因此向量组 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\dots,\\boldsymbol{\\alpha}_{s}\\) 线性无关。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-60",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 60,
    "stem": "证明：矩阵 \\(A\\) 与 \\(B\\) 合同的充要条件是对 \\(A\\) 的行和列施以相同的初等变换变成 \\(B\\).",
    "options": null,
    "ans": null,
    "fb": "若 \\(A\\) 与 \\(B\\) 合同，则存在可逆矩阵 \\(Q\\), 使 \\(B=Q^{T}AQ\\). 令 \\(Q=P_{1}P_{2}\\cdots P_{r}\\), \\(P_{i}\\) 为初等矩阵，则 \\(B=P_{r}^{T}\\cdots P_{2}^{T}P_{1}^{T}AP_{1}P_{2}\\cdots P_{r}\\), 即对 \\(A\\) 的行和列施以相同的初等变换变成 \\(B\\). 反之显然成立。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-61",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 61,
    "stem": "证明：对称矩阵只能与对称矩阵合同。",
    "options": null,
    "ans": null,
    "fb": "设对称矩阵 \\(A\\) 与 \\(B\\) 合同，即存在可逆矩阵 \\(Q\\), 使 \\(B=Q^{T}AQ\\). 因 \\(A^{T}=A\\),所以 \\[ B^{T}=(Q^{T}AQ)^{T}=Q^{T}A^{T}Q=Q^{T}AQ=B, \\] 即 \\(B\\) 也对称。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-25",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 25,
    "stem": "设 \\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\), 则在实数域上与 \\(A\\) 合同的矩阵为 ______.",
    "options": [
      [
        "A",
        "\\(\\begin{pmatrix}-2&1\\\\1&-2\\end{pmatrix}\\)"
      ],
      [
        "B",
        "\\(\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}\\)"
      ],
      [
        "C",
        "\\(\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)"
      ],
      [
        "D",
        "\\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\)"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) 特征值 \\(3,-1\\)，惯性指数 \\((1,1)\\)。选项 D \\(\\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}\\) 特征值亦为 \\(3,-1\\)，惯性指数相同，故合同。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-26",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 26,
    "stem": "设 \\(n\\) 阶矩阵 \\(A\\) 合同于对角阵 \\[ A=\\begin{pmatrix}\\lambda_{1}&&&\\\\&\\lambda_{2}&&\\\\&&\\ddots\\\\&&&&\\lambda_{n}\\end{pmatrix}, \\] 则必有 ______.",
    "options": [
      [
        "A",
        "\\(\\lambda_{1},\\lambda_{2},\\dots,\\lambda_{n}\\) 是 \\(A\\) 的特征值"
      ],
      [
        "B",
        "\\(\\lambda_{1}\\lambda_{2}\\cdots\\lambda_{n}=|A|\\)"
      ],
      [
        "C",
        "\\(A\\) 为正定矩阵"
      ],
      [
        "D",
        "\\(A\\) 为对称矩阵"
      ]
    ],
    "ans": "D",
    "fb": "解析：若 \\(A\\) 合同于对角阵 \\(D\\)，则 \\(A=P^TDP\\)，从而 \\(A^T=(P^TDP)^T=P^TD^TP=P^TDP=A\\)，即 \\(A\\) 必为对称矩阵；\\(\\lambda_i\\) 不必是 \\(A\\) 的特征值，也未必正定。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-proof-62",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 62,
    "stem": "设 \\(A=\\begin{pmatrix}A_{1}&0\\\\0&A_{2}\\end{pmatrix}\\), \\(B=\\begin{pmatrix}B_{1}&0\\\\0&B_{2}\\end{pmatrix}\\), 证明：如果 \\(A_{1}\\) 与 \\(B_{1}\\) 合同，\\(A_{2}\\) 与 \\(B_{2}\\) 合同，则 \\(A\\) 与 \\(B\\) 合同。",
    "options": null,
    "ans": null,
    "fb": "由于 \\(A_{1}\\) 与 \\(B_{1}\\) 合同，\\(A_{2}\\) 与 \\(B_{2}\\) 合同，故存在可逆矩阵 \\(C_{1}\\) 及 \\(C_{2}\\), 使 \\[ B_{1}=C_{1}^{T}A_{1}C_{1},\\qquad B_{2}=C_{2}^{T}A_{2}C_{2}. \\] 于是令 \\(C=\\begin{pmatrix}C_{1}&0\\\\0&C_{2}\\end{pmatrix}\\), 则有 \\(B=C^{T}AC\\), 即 \\(A\\) 与 \\(B\\) 合同。",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-89",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 89,
    "stem": "若把实 \\(n\\) 阶对称方阵按合同分类，即两个实 \\(n\\) 阶对称方阵属于同一类当且仅当它们在实数域上合同，问：共有几类？",
    "options": null,
    "ans": "\\(\\frac{n(n+1)(n+2)}{2}\\)",
    "fb": "解析：矩阵为 \\(\\begin{pmatrix}2&1\\\\3&1\\end{pmatrix}\\) 的二次型矩阵取 \\((M+M^T)/2=\\begin{pmatrix}2&2\\\\2&1\\end{pmatrix}\\)；\\(\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\) 的二次型矩阵为 \\(\\begin{pmatrix}1&3&5\\\\3&5&7\\\\5&7&9\\end{pmatrix}\\)。故应填这两个矩阵。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-63",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 63,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实对称方阵，证明：\\(A\\) 是正定矩阵的充要条件是 \\(A\\) 与单位矩阵合同。",
    "options": null,
    "ans": null,
    "fb": "若 \\(A\\) 是正定的，即二次型 \\[ f(x_{1},\\dots,x_{n})=x^{T}Ax \\] 是正定的，从而可通过非退化线性替换 \\(x=Cy\\) 化为 \\[ g(y_{1},\\dots,y_{n})=y^{T}(C^{T}AC)y=y_{1}^{2}+\\cdots+y_{n}^{2}=y^{T}Ey. \\] 于是 \\(C^{T}AC=E\\),即 \\(A\\) 与 \\(E\\) 合同。反之若 \\(A\\) 与 \\(E\\) 合同，则由 \\(f\\) 可通过非退化线性替换化为 \\(g\\), 因 \\(g\\) 是正定的，故 \\(f\\) 也是正定的，即 \\(A\\) 是正定矩阵。点评：本题是判定矩阵正定性的一种方法。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-64",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 64,
    "stem": "证明：任两个 \\(n\\) 阶正定矩阵都合同，而且正定矩阵只能与正定矩阵合同。",
    "options": null,
    "ans": null,
    "fb": "设 \\(A,B\\) 为任意 \\(n\\) 阶正定矩阵，则 \\(A\\) 与 \\(B\\) 都与 \\(n\\) 阶单位矩阵合同，从而 \\(A\\) 与 \\(B\\) 合同。另外，设 \\(A\\) 为正定矩阵，则 \\(A\\) 与 \\(E\\) 合同。若 \\(A\\) 与 \\(B\\) 合同，则 \\(B\\) 也与 \\(E\\) 合同，故 \\(B\\) 也是正定矩阵。",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-mc-27",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 27,
    "stem": "设 \\[ A=\\begin{pmatrix}1&1&1&1\\\\1&1&1&1\\\\1&1&1&1\\\\1&1&1&1\\end{pmatrix},\\quad B=\\begin{pmatrix}4&0&0&0\\\\0&0&0&0\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix}, \\] 则 \\(A\\) 与 \\(B\\) ______.",
    "options": [
      [
        "A",
        "合同且相似"
      ],
      [
        "B",
        "合同但不相似"
      ],
      [
        "C",
        "不合同但相似"
      ],
      [
        "D",
        "不合同且不相似"
      ]
    ],
    "ans": "A",
    "fb": "解析：\\(A\\) 的特征值为 \\(4,0,0,0\\) 且对称，故 \\(A\\sim\\operatorname{diag}(4,0,0,0)=B\\)，同时合同（同秩同正惯性指数）。故选（A）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-28",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 28,
    "stem": "设矩阵 \\[ A=\\begin{pmatrix}2&-1&-1\\\\-1&2&-1\\\\-1&-1&2\\end{pmatrix},\\quad B=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}, \\] 则 \\(A\\) 与 \\(B\\) ______.",
    "options": [
      [
        "A",
        "合同，且相似"
      ],
      [
        "B",
        "合同，但不相似"
      ],
      [
        "C",
        "不合同，但相似"
      ],
      [
        "D",
        "既不合同，也不相似"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(A=3E-J\\)，特征值为 \\(3,3,0\\)；\\(B=\\operatorname{diag}(1,1,0)\\) 特征值 \\(1,1,0\\)。惯性指数均为 \\((2,0)\\)，故合同；但特征值不同，不相似。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-mc-29",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 29,
    "stem": "设 \\(A\\) 是 \\(n\\times n\\) 矩阵，交换 \\(A\\) 的第 \\(i\\) 列和第 \\(j\\) 列后再交换第 \\(i\\) 行和第 \\(j\\) 行后得到的矩阵 \\(B\\),则 \\(A,B\\) 是 ______.",
    "options": [
      [
        "A",
        "等价矩阵但不相似"
      ],
      [
        "B",
        "相似矩阵但不合同"
      ],
      [
        "C",
        "相似、合同矩阵，但不等价"
      ],
      [
        "D",
        "等价、相似、合同矩阵"
      ]
    ],
    "ans": "D",
    "fb": "解析：交换列 \\(i,j\\) 再交换行 \\(i,j\\) 等价于 \\(B=PAP\\)，其中 \\(P\\) 为对应置换阵（满足 \\(P^T=P^{-1}=P\\)），故 \\(B=P^TAP\\)（合同）且 \\(B=P^{-1}AP\\)（相似），当然也等价。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-proof-65",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 65,
    "stem": "证明：矩阵 \\(A=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}\\), \\(B=\\begin{pmatrix}1&0\\\\0&4\\end{pmatrix}\\) 等价、合同但不相似。",
    "options": null,
    "ans": null,
    "fb": "因为秩 \\(r(A)=r(B)\\), 所以 \\(A\\) 与 \\(B\\) 等价。因为 \\(A\\) 与 \\(B\\) 特征值不相同，所以 \\(A,B\\) 不相似。因为 \\(x^{T}Ax=x_{1}^{2}+2x_{2}^{2}\\) 与 \\(x^{T}Bx=x_{1}^{2}+4x_{2}^{2}\\) 有相同的正、负惯性指数，所以 \\(A\\) 与 \\(B\\) 合同。",
    "pts": 8,
    "diff": 2,
    "sec": "s52"
  },
  {
    "id": "c5-jx-fill-90",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 90,
    "stem": "设二次型 \\[ f(x_{1},x_{2},x_{3})=x_{1}^{2}+ax_{2}^{2}+x_{3}^{2}+2x_{1}x_{2}-2x_{2}x_{3}-2ax_{1}x_{3} \\] 的正、负惯性指数都是 1，则 \\(a=\\) ______.",
    "options": null,
    "ans": "\\(-2\\)",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}1&1&-a\\\\1&a&-1\\\\-a&-1&1\\end{pmatrix}\\)。正、负惯性指数均为 \\(1\\)，故秩 \\(2\\) 且特征值一正一负一零，\\(|A|=0\\)。计算得 \\(|A|=-a^3+3a-2=-(a-1)^2(a+2)\\)，得 \\(a=1\\) 或 \\(-2\\)；\\(a=1\\) 时秩为 \\(1\\)（不合），故 \\(a=-2\\)。故应填 \\(-2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-91",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 91,
    "stem": "二次型 \\[ f(x_{1},x_{2},x_{3})=(x_{1}+x_{2})^{2}+(x_{2}-x_{3})^{2}+(x_{3}+x_{1})^{2} \\] 的秩为 ______.",
    "options": null,
    "ans": "2",
    "fb": "解析：展开得 \\(f=2x_1^2+2x_2^2+2x_3^2+2x_1x_2+2x_1x_3-2x_2x_3\\)，矩阵为 \\(\\begin{pmatrix}2&1&1\\\\1&2&-1\\\\1&-1&2\\end{pmatrix}\\)，其行列式为 \\(0\\) 而二阶主子式非零，故秩为 \\(2\\)。故应填 \\(2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-92",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 92,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实对称矩阵，且满足关系式 \\(A^{3}+3A^{2}+3A+2E=0\\), 则二次型 \\(f=x^{T}Ax\\) 的负惯性指数为 ______.",
    "options": null,
    "ans": "\\(n\\)",
    "fb": "解析：特征方程化为 \\((\\lambda+1)^3=-1\\)，实根仅有 \\(\\lambda=-2\\)；实对称矩阵特征值全为实数，故全为 \\(-2\\)，\\(A=-2E\\)，二次型 \\(f=-2\\sum x_i^2\\) 负定，负惯性指数为 \\(n\\)。故应填 \\(n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-30",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 30,
    "stem": "设 \\(A\\) 为三阶实对称矩阵，如果二次曲面方程 \\((x,y,z)A\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=1\\) 在正交变换下的标准方程的图形如右图所示，则 \\(A\\) 的正特征值个数 ______.",
    "options": [
      [
        "A",
        "0"
      ],
      [
        "B",
        "1"
      ],
      [
        "C",
        "2"
      ],
      [
        "D",
        "3"
      ]
    ],
    "ans": "B",
    "fb": "解析：由正交变换后的标准方程图形判断，该二次曲面有两个负特征值与一个正特征值（或反之），故 \\(A\\) 的正特征值个数为 \\(1\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-mc-31",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 31,
    "stem": "设 \\(A\\) 是 \\(n\\) 阶实对称矩阵，秩为 \\(r\\),符号差为 \\(s\\),则总有 ______.",
    "options": [
      [
        "A",
        "\\(r\\) 是奇数，\\(s\\) 是偶数"
      ],
      [
        "B",
        "\\(r\\) 是偶数，\\(s\\) 是奇数"
      ],
      [
        "C",
        "\\(r,s\\) 均为偶数，不能是奇数"
      ],
      [
        "D",
        "\\(r,s\\) 或均是偶数或均是奇数"
      ]
    ],
    "ans": "D",
    "fb": "解析：设正惯性指数 \\(p\\)、负惯性指数 \\(q\\)，则秩 \\(r=p+q\\)，符号差 \\(s=p-q\\)，故 \\(r\\) 与 \\(s\\) 同奇偶（\\(r+s=2p,\\ r-s=2q\\) 均为偶数）。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-32",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 32,
    "stem": "已知三元二次型 \\(x^{T}Ax\\) 经正交变换化为 \\(-y_{1}^{2}-2y_{2}^{2}-y_{3}^{2}\\), 其中 \\(A^{*}=A\\), 则二次型 \\(x^{T}A^{*}x\\) 的正惯性指数为 ______.",
    "options": [
      [
        "A",
        "0"
      ],
      [
        "B",
        "1"
      ],
      [
        "C",
        "2"
      ],
      [
        "D",
        "3"
      ]
    ],
    "ans": "D",
    "fb": "解析：由正交标准形 \\(-y_1^2-2y_2^2-y_3^2\\) 知 \\(A\\) 的特征值为 \\(-1,-2,-1\\)，故 \\(|A|=-2\\)；\\(A^*\\) 的特征值为 \\(|A|/\\lambda=2,1,2\\)，全为正，所以 \\(x^TA^*x\\) 的正惯性指数为 \\(3\\)。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-93",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 93,
    "stem": "求二次型 \\[ f(x_{1},\\dots,x_{n})=\\sum_{i=1}^{m}(a_{i1}x_{1}+a_{i2}x_{2}+\\cdots+a_{in}x_{n})^{2} \\] 的方阵。",
    "options": null,
    "ans": "\\(A^{T}A\\) 即为所求",
    "fb": "解析：记系数矩阵 \\(A=(a_{ij})_{m\\times n}\\)，则 \\(f=(Ax)^T(Ax)=x^T(A^TA)x\\)，故方阵为 \\(A^TA\\)。故应填 \\(A^TA\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-94",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 94,
    "stem": "设 \\(A\\) 为可逆实对称矩阵，则将 \\(f=x^{T}Ax\\) 化为 \\(f=y^{T}A^{-1}y\\) 的线性替换为 ______.",
    "options": null,
    "ans": "\\(x=A^{-1}y\\)",
    "fb": "解析：令 \\(x=A^{-1}y\\)，则 \\(f=x^TAx=y^TA^{-T}AA^{-1}y=y^TA^{-1}y\\)（\\(A\\) 对称可逆）。故应填 \\(x=A^{-1}y\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-95",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 95,
    "stem": "二次型 \\[ f(x_{1},x_{2},x_{3})=-x_{1}^{2}-x_{2}^{2}-x_{3}^{2}+4x_{1}x_{2}+4x_{1}x_{3}-4x_{2}x_{3} \\] 的正惯性指数为 ______.",
    "options": null,
    "ans": "2",
    "fb": "解析：二次型矩阵 \\(A=\\begin{pmatrix}-1&2&2\\\\2&-1&-2\\\\2&-2&-1\\end{pmatrix}\\)，其特征值为 \\(1,1,-5\\)，故正惯性指数为 \\(1\\)。故应填 \\(1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-96",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 96,
    "stem": "设 \\(A\\) 是三阶实对称矩阵，且满足 \\(A^{2}-3A+2E=0\\), 又 \\(|A|=2\\), 则二次型 \\(f=x^{T}Ax\\) 经正交变换换化为标准形 \\(f=\\) ______.",
    "options": null,
    "ans": "\\(y_{1}^{2}+y_{2}^{2}+2y_{3}^{2}\\)",
    "fb": "解析：由 \\(A^2-3A+2E=0\\) 知 \\(A\\) 特征值只取 \\(1\\) 或 \\(2\\)；又 \\(|A|=2\\) 且为三阶，故特征值为 \\(1,1,2\\)。实对称阵可正交对角化，标准形系数为 \\(1,1,2\\)。故应填 \\(y_1^2+y_2^2+2y_3^2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-97",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 97,
    "stem": "求二次型 \\[ f(x_{1},\\dots,x_{n})=(n-1)\\sum_{i=1}^{n}x_{i}^{2}-2\\sum_{1\\leq i<j\\leq n}x_{i}x_{j} \\] 的符号差。",
    "options": null,
    "ans": "\\(n-1\\)",
    "fb": "解析：\\(f\\) 的矩阵 \\(A=nE-J\\)（\\(J\\) 全 \\(1\\) 阵），特征值为 \\(0\\)（\\(1\\) 重）与 \\(n\\)（\\(n-1\\) 重），故正惯性指数 \\(n-1\\)、负惯性指数 \\(0\\)，符号差 \\(=n-1\\)。故应填 \\(n-1\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-98",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 98,
    "stem": "求二次型 \\[ f(x_{1},\\dots,x_{n})=\\sum_{i=1}^{n}x_{i}^{2}+4\\sum_{1\\leq i<j\\leq n}x_{i}x_{j} \\] 的秩与符号差。",
    "options": null,
    "ans": "秩 \\(n\\), 符号差 \\(2-n\\)",
    "fb": "解析：矩阵 \\(A=2J-E\\)，特征值为 \\(2n-1\\)（\\(1\\) 重）与 \\(-1\\)（\\(n-1\\) 重），故秩 \\(n\\)，正惯性指数 \\(1\\)、负惯性指数 \\(n-1\\)，符号差 \\(=1-(n-1)=2-n\\)。故应填 秩 \\(n\\)，符号差 \\(2-n\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-99",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 99,
    "stem": "已知二次型 \\( f(x_1,x_2,x_3)=(1-a)x_1^2+(1-a)x_2^2+2x_3^2+2(1+a)x_1x_2 \\) 的秩为 2. (1) 求 \\( a \\) 的值；(2) 求正交变换 \\( x=Qy \\)，把 \\( f(x_1,x_2,x_3) \\) 化成标准形；(3) 求方程 \\( f(x_1,x_2,x_3)=0 \\) 的解.",
    "options": null,
    "ans": "\\( a=0 \\)；标准形 \\( f=2y_1^2+2y_2^2 \\)；解为 \\( x=k(-1,1,0)^T \\)，\\( k \\) 为任意常数.",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}1-a&1+a&0\\\\1+a&1-a&0\\\\0&0&2\\end{pmatrix}\\)，特征值为 \\(2,2,-2a\\)。秩为 \\(2\\) 要求 \\(-2a=0\\Rightarrow a=0\\)。此时特征值 \\(2,2,0\\)，正交标准形 \\(2y_1^2+2y_2^2\\)；\\(f=0\\Rightarrow y_1=y_2=0\\Rightarrow x=k(-1,1,0)^T\\)。故应填 \\(a=0\\)；标准形 \\(2y_1^2+2y_2^2\\)；解为 \\(x=k(-1,1,0)^T\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-calc-26",
    "ch": 5,
    "src": "jingxuan",
    "type": "calc",
    "no": 26,
    "stem": "将 \\( f(x_1,x_2,x_3)=ax_1^2+bx_2^2+ax_3^2+2cx_1x_3 \\) 化为标准形，求出变换矩阵，并指出 \\( a,b,c \\) 满足什么条件时，\\( f \\) 为正定.",
    "options": null,
    "ans": null,
    "fb": "分 \\( a=0 \\) 与 \\( a\\ne 0 \\) 讨论. \\( a=0 \\) 时作非退化线性替换 \\( x_1=y_1+y_3,x_2=y_2,x_3=y_1-y_3 \\)，得标准形 \\( 2cy_1^2+by_2^2-2cy_3^2 \\)，无论 \\( b,c \\) 为何值都不是正定二次型. \\( a\\ne 0 \\) 时配方得 \\( f=a(x_1+\\frac{c}{a}x_3)^2+bx_2^2+(a-\\frac{c^2}{a})x_3^2 \\)，标准形 \\( ay_1^2+by_2^2+(a-\\frac{c^2}{a})y_3^2 \\)，正定的条件为 \\( a>0,b>0,a^2-c^2>0 \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-100",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 100,
    "stem": "已知二次型 \\( f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2-2x_1x_2+6x_1x_3-6x_2x_3 \\) 的秩为 2. (1) 求参数 \\( c \\) 及此二次型对应矩阵的特征值；(2) 指出方程 \\( f(x_1,x_2,x_3)=1 \\) 表示何种二次曲面.",
    "options": null,
    "ans": "\\( c=3 \\)；特征值为 \\( 4,9,0 \\)；方程表示椭圆柱面.",
    "fb": "解析：矩阵 \\(A=\\begin{pmatrix}5&-1&3\\\\-1&5&-3\\\\3&-3&c\\end{pmatrix}\\)，\\(|A|=24c-72\\)，秩为 \\(2\\) 得 \\(c=3\\)。此时 \\(A\\) 特征值 \\(4,9,0\\)，故方程 \\(f=1\\) 化为 \\(4y_1^2+9y_2^2=1\\)，表示椭圆柱面。故应填 \\(c=3\\)；椭圆柱面。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-66",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 66,
    "stem": "设 \\( A \\) 为 \\( n \\) 阶实对称矩阵，秩 \\( (A)=n \\)，\\( A_{ij} \\) 是 \\( A=(a_{ij})_{n\\times n} \\) 中元素 \\( a_{ij} \\) 的代数余子式 \\( (i,j=1,2,\\cdots,n) \\)，二次型 \\( f(x_1,x_2,\\cdots,x_n)=\\sum_{i=1}^n\\sum_{j=1}^n\\frac{A_{ij}}{|A|}x_ix_j \\). (1) 记 \\( x=(x_1,x_2,\\cdots,x_n)^T \\)，把 \\( f(x_1,x_2,\\cdots,x_n) \\) 写成矩阵形式，并证明二次型 \\( f(x) \\) 的矩阵为 \\( A^{-1} \\)；(2) 二次型 \\( g(x)=x^TAx \\) 与 \\( f(x) \\) 的规范形是否相同？说明理由.",
    "options": null,
    "ans": null,
    "fb": "(1) 由 \\( A^{-1}=\\frac{1}{|A|}A^* \\) 且 \\( (A^{-1})^T=A^{-1} \\) 知 \\( f \\) 的矩阵为 \\( A^{-1} \\). (2) 因为 \\( (A^{-1})^TAA^{-1}=A^{-1} \\)，所以 \\( A \\) 与 \\( A^{-1} \\) 合同，故 \\( g(x)=x^TAx \\) 与 \\( f(x) \\) 有相同规范形.",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-33",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 33,
    "stem": "设 \\( A=(a_{ij}) \\) 为 \\( n \\) 阶实对称矩阵，二次型 \\( f(x_1,x_2,\\cdots,x_n)=\\sum_{i=1}^n\\left(\\sum_{j=1}^na_{ij}x_j\\right)^2 \\) 为正定二次型的充分必要条件是 ______.",
    "options": [
      [
        "A",
        "\\(|A|=0\\)"
      ],
      [
        "B",
        "\\(|A|\\ne 0\\)"
      ],
      [
        "C",
        "\\(|A|>0\\)"
      ],
      [
        "D",
        "\\(|A_k|>0\\ (k=1,2,\\cdots,n)\\)"
      ]
    ],
    "ans": "B",
    "fb": "解析：\\(f=(Ax)^T(Ax)=x^T(A^TA)x\\)，\\(A^TA\\) 正定当且仅当 \\(A\\) 列满秩，对 \\(n\\) 阶方阵即 \\(|A|\\neq0\\)。故选（B）。",
    "pts": 4,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-67",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 67,
    "stem": "设 \\( A,B \\) 都是 \\( m\\times n \\) 实矩阵，且 \\( B^TA \\) 为可逆矩阵，证明 \\( A^TA+B^TB \\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "由 \\( (A^TA+B^TB)^T=A^TA+B^TB \\) 知其为实对称矩阵. 由 \\( B^TA \\) 可逆得 \\( r(A)=n \\)，故 \\( Ax=0 \\) 只有零解. 对任意 \\( x\\ne 0 \\)，有 \\( x^TA^TAx=(Ax)^T(Ax)>0 \\)，\\( x^TB^TBx=(Bx)^T(Bx)\\ge 0 \\)，于是 \\( x^T(A^TA+B^TB)x>0 \\)，所以 \\( A^TA+B^TB \\) 正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-101",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 101,
    "stem": "设有 \\( n \\) 元实二次型 \\( f(x_1,x_2,\\cdots,x_n)=(x_1+a_1x_2)^2+(x_2+a_2x_3)^2+\\cdots+(x_{n-1}+a_{n-1}x_n)^2+(x_n+a_nx_1)^2 \\)，其中 \\( a_i\\ (i=1,2,\\cdots,n) \\) 为实数. 试问：当 \\( a_1,a_2,\\cdots,a_n \\) 满足何种条件时，二次型 \\( f(x_1,x_2,\\cdots,x_n) \\) 为正定二次型.",
    "options": null,
    "ans": "当 \\( a_1a_2\\cdots a_n\\ne (-1)^n \\) 时，\\( f \\) 正定.",
    "fb": "解析：\\(f=(Ax)^T(Ax)\\)，其中 \\(A\\) 为循环系数阵，其行列式 \\(\\det A=1-(-1)^na_1\\cdots a_n\\)。\\(f\\) 正定 \\(\\Leftrightarrow A\\) 可逆 \\(\\Leftrightarrow\\det A\\neq0\\Leftrightarrow a_1a_2\\cdots a_n\\neq(-1)^n\\)。故应填 当 \\(a_1a_2\\cdots a_n\\neq(-1)^n\\) 时正定。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-68",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 68,
    "stem": "设 \\( A \\) 是一个 \\( n \\) 阶实对称矩阵，且 \\(|A|<0\\)，证明：存在 \\( n \\) 维向量 \\( x \\)，使 \\( x^TAx<0 \\).",
    "options": null,
    "ans": null,
    "fb": "由 \\(|A|<0\\) 知 \\( f=x^TAx \\) 的秩为 \\( n \\) 且不是正定的，故负惯性指数至少为 1. 于是 \\( f \\) 可经非退化线性替换 \\( x=Cy \\) 化为 \\( f=y_1^2+\\cdots+y_s^2-y_{s+1}^2-\\cdots-y_n^2 \\)（\\( 1\\le s<n \\)）. 取 \\( y_s=1 \\)，其余 \\( y_i=0 \\)，则对应 \\( x=Cy\\ne 0 \\) 使 \\( x^TAx<0 \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-fill-102",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 102,
    "stem": "判断二次型 \\( f=\\sum_{i=1}^nx_i^2+\\sum_{i=1}^{n-1}x_ix_{i+1} \\) 的正定性.",
    "options": null,
    "ans": "\\( f \\) 是正定二次型.",
    "fb": "解析：对应矩阵为三对角对称阵，主对角全 \\(1\\)、次对角 \\(1/2\\)；其顺序主子式均为正（可递推验证），故 \\(f\\) 正定。故应填 正定二次型。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-69",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 69,
    "stem": "设 \\( A=(a_{ij}) \\) 是 \\( n \\) 阶正定矩阵，\\( b_1,b_2,\\cdots,b_n \\) 是任意 \\( n \\) 个非零实数，证明 \\( n \\) 阶矩阵 \\( B=(a_{ij}b_ib_j) \\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "\\( B \\) 的 \\( k \\) 阶顺序主子式 \\(|B_k|=b_1^2b_2^2\\cdots b_k^2|A_k|>0 \\)；或令 \\( C=\\mathrm{diag}(b_1,\\ldots,b_n) \\)，则 \\( B=C^TAC \\)，\\( C \\) 可逆，由 \\( A \\) 正定知 \\( B \\) 正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-70",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 70,
    "stem": "设 \\( A \\) 是 \\( n \\) 阶实对称矩阵，若 \\( A-E \\) 是正定矩阵，证明：(1) \\( A \\) 是正定矩阵；(2) \\( E-A^{-1} \\) 是正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "(1) 设 \\( A \\) 的特征值为 \\( \\lambda_i \\)，则 \\( A-E \\) 的特征值为 \\( \\lambda_i-1>0 \\)，故 \\( \\lambda_i>1 \\)，\\( A \\) 正定. (2) \\( E-A^{-1} \\) 的特征值为 \\( 1-\\frac1{\\lambda_i}>0 \\)，故 \\( E-A^{-1} \\) 正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-71",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 71,
    "stem": "设 \\( A,B \\) 分别为 \\( m,n \\) 阶正定矩阵，试判定分块矩阵 \\( C=\\begin{pmatrix}A&0\\\\0&B\\end{pmatrix} \\) 是否为正定矩阵.",
    "options": null,
    "ans": null,
    "fb": "对任意非零向量 \\( z=\\begin{pmatrix}x\\\\y\\end{pmatrix} \\)，\\( x,y \\) 不同时为零，有 \\( z^TCz=x^TAx+y^TBy>0 \\)，且 \\( C^T=C \\)，故 \\( C \\) 正定.（或用正交相似对角化，特征值全正.）",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-103",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 103,
    "stem": "设 \\( A \\) 为三阶实对称矩阵，且满足条件 \\( A^2+2A=0 \\)，已知 \\( A \\) 的秩 \\( r(A)=2 \\). (1) 求 \\( A \\) 的全部特征值；(2) 当 \\( k \\) 为何值时，矩阵 \\( A+kE \\) 为正定矩阵，其中 \\( E \\) 为三阶单位矩阵.",
    "options": null,
    "ans": "(1) 特征值为 \\( -2,-2,0 \\)；(2) 当 \\( k>2 \\) 时，\\( A+kE \\) 正定.",
    "fb": "解析：由 \\(A^2+2A=0\\) 知特征值只取 \\(0\\) 或 \\(-2\\)；\\(r(A)=2\\) 故特征值为 \\(-2,-2,0\\)。(2) \\(A+kE\\) 特征值为 \\(k-2,k-2,k\\)，正定要求 \\(k-2>0\\) 且 \\(k>0\\)，即 \\(k>2\\)。故应填 (1) 特征值 \\(-2,-2,0\\)；(2) \\(k>2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-proof-72",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 72,
    "stem": "设 \\( D=\\begin{pmatrix}A&C\\\\C^T&B\\end{pmatrix} \\) 为正定矩阵，其中 \\( A,B \\) 分别为 \\( m,n \\) 阶对称矩阵，\\( C \\) 为 \\( m\\times n \\) 矩阵. (1) 计算 \\( P^TDP \\)，其中 \\( P=\\begin{pmatrix}E_m&-A^{-1}C\\\\0&E_n\\end{pmatrix} \\)；(2) 利用(1)的结果判断矩阵 \\( B-C^TA^{-1}C \\) 是否为正定矩阵，并证明你的结论.",
    "options": null,
    "ans": null,
    "fb": "(1) 直接计算得 \\( P^TDP=\\begin{pmatrix}A&0\\\\0&B-C^TA^{-1}C\\end{pmatrix} \\). (2) \\( D \\) 正定且合同于 \\( M=\\begin{pmatrix}A&0\\\\0&B-C^TA^{-1}C\\end{pmatrix} \\)，故 \\( M \\) 正定. 对任意 \\( y\\ne 0 \\)，取 \\( x=0 \\)，有 \\( (0^T,y^T)M\\begin{pmatrix}0\\\\y\\end{pmatrix}=y^T(B-C^TA^{-1}C)y>0 \\)，且其为对称矩阵，故正定.",
    "pts": 8,
    "diff": 2,
    "sec": "s55"
  },
  {
    "id": "c5-jx-fill-104",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 104,
    "stem": "已知实对称矩阵 \\( A \\) 与 \\( B=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&3\\end{pmatrix} \\) 合同，则二次型 \\( f=x^TAx \\) 的规范形 \\( f= \\) ______.",
    "options": null,
    "ans": "\\( y_1^2+y_2^2-y_3^2 \\)",
    "fb": "解析：\\(B=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&3\\end{pmatrix}\\) 的特征值为 \\(1,-1,3\\)，故与 \\(B\\) 合同的 \\(A\\) 的二次型 \\(f=x^TAx\\) 规范形为 \\(y_1^2+y_2^2-y_3^2\\)。故应填 \\(y_1^2+y_2^2-y_3^2\\)。",
    "pts": 5,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-34",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 34,
    "stem": "实二次型 \\( f(x_1,x_2,\\cdots,x_n) \\) 的秩为 \\( r \\)，符号差为 \\( s \\)，且 \\( f \\) 和 \\( -f \\) 合同，则必有 ______.",
    "options": [
      [
        "A",
        "\\( r \\) 是偶数，\\( s=1 \\)"
      ],
      [
        "B",
        "\\( r \\) 是奇数，\\( s=1 \\)"
      ],
      [
        "C",
        "\\( r \\) 是偶数，\\( s=0 \\)"
      ],
      [
        "D",
        "\\( r \\) 是奇数，\\( s=0 \\)"
      ]
    ],
    "ans": "C",
    "fb": "解析：\\(f\\) 与 \\(-f\\) 合同意味着正负惯性指数相等，故符号差 \\(s=0\\)；又 \\(r=p+q=2p\\) 为偶数。故选（C）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-73",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 73,
    "stem": "设 \\( A \\) 为实 \\( n \\) 阶可逆矩阵. 证明：如果 \\( A \\) 与 \\( -A \\) 在实数域上合同，则 \\( n \\) 必为偶数.",
    "options": null,
    "ans": null,
    "fb": "由 \\( A \\) 与 \\( -A \\) 合同，存在可逆矩阵 \\( C \\) 使 \\( -A=C^TAC \\). 两边取行列式得 \\((-1)^n|A|=|C|^2|A|\\). 因 \\(|A|\\ne 0\\)，有 \\((-1)^n=|C|^2>0\\)，故 \\( n \\) 为偶数.",
    "pts": 8,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-mc-35",
    "ch": 5,
    "src": "jingxuan",
    "type": "mc",
    "no": 35,
    "stem": "设 \\( A=E-2xx^T \\)，其中 \\( x=(x_1,x_2,\\cdots,x_n)^T \\)，且 \\( x^Tx=1 \\)，则 \\( A \\) 不是 ______.",
    "options": [
      [
        "A",
        "对称阵"
      ],
      [
        "B",
        "可逆阵"
      ],
      [
        "C",
        "正交阵"
      ],
      [
        "D",
        "正定阵"
      ]
    ],
    "ans": "D",
    "fb": "解析：\\(A=E-2xx^T\\) 为 Householder 变换，对称、正交、可逆，但沿 \\(x\\) 方向有特征值 \\(-1\\)，不正定。故选（D）。",
    "pts": 4,
    "diff": 2,
    "sec": "s54"
  },
  {
    "id": "c5-jx-proof-74",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 74,
    "stem": "设 \\( A \\) 是一个 \\( n \\) 阶方阵. 证明：(1) \\( A \\) 是反对称的当且仅当对任意 \\( n \\) 维向量 \\( x \\) 都有 \\( x^TAx=0 \\)；(2) 若 \\( A \\) 为对称方阵，且对任意 \\( n \\) 维向量 \\( x \\) 都有 \\( x^TAx=0 \\)，则 \\( A=0 \\)；(3) 若 \\( A,B \\) 都是对称矩阵，且对任意 \\( n \\) 维向量 \\( x \\) 都有 \\( x^TAx=x^TBx \\)，则 \\( A=B \\).",
    "options": null,
    "ans": null,
    "fb": "(1) 若 \\( A^T=-A \\)，则 \\( x^TAx=(x^TAx)^T=-x^TAx \\)，故 \\( x^TAx=0 \\). 反之，取 \\( x=e_i \\) 得 \\( a_{ii}=0 \\)，取 \\( x=e_i+e_j \\) 得 \\( a_{ij}+a_{ji}=0 \\)，即 \\( a_{ij}=-a_{ji} \\). (2) 由(1)知 \\( A \\) 反对称，又 \\( A \\) 对称，故 \\( A=0 \\). (3) \\( (A-B)^T=A-B \\) 且 \\( x^T(A-B)x=0 \\)，由(2)得 \\( A-B=0 \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s53"
  },
  {
    "id": "c5-jx-proof-75",
    "ch": 5,
    "src": "jingxuan",
    "type": "proof",
    "no": 75,
    "stem": "证明：\\( f(x_1,\\cdots,x_n)=\\begin{vmatrix}0&x_1&x_2&\\cdots&x_n\\\\-x_1&a_{11}&a_{12}&\\cdots&a_{1n}\\\\-x_2&a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&\\vdots&\\ddots&\\vdots\\\\-x_n&a_{n1}&a_{n2}&\\cdots&a_{nn}\\end{vmatrix} \\) 是一个二次型，并求其方阵.",
    "options": null,
    "ans": null,
    "fb": "将行列式按第一列展开，再对每个 \\( n \\) 阶行列式按含 \\( x_i \\) 的行展开，可得 \\( f=\\sum_{i=1}^n\\sum_{j=1}^nA_{ij}x_ix_j \\)，其中 \\( A_{ij} \\) 为 \\(|a_{ij}|\\) 中 \\( a_{ij} \\) 的代数余子式. 因此 \\( f \\) 为二次型，其矩阵为 \\( \\frac12(A_{ij}+A_{ji}) \\).",
    "pts": 8,
    "diff": 2,
    "sec": "s51"
  },
  {
    "id": "c5-jx-fill-105",
    "ch": 5,
    "src": "jingxuan",
    "type": "fill",
    "no": 105,
    "stem": "已知三阶矩阵 \\( A=\\begin{pmatrix}1&-2&-4\\\\-2&4&-2\\\\-4&-2&1\\end{pmatrix} \\) 与正交矩阵 \\( T=\\begin{pmatrix}\\frac{\\sqrt5}{5}&\\frac{4\\sqrt5}{15}&\\frac23\\\\-\\frac{2\\sqrt5}{5}&\\frac{2\\sqrt5}{15}&\\frac13\\\\0&\\frac{\\sqrt5}{3}&\\frac23\\end{pmatrix} \\) 满足关系式 \\( T^{-1}AT=\\begin{pmatrix}5&0&0\\\\0&5&0\\\\0&0&-4\\end{pmatrix} \\). 试求一个三维向量 \\( \\alpha=(a_1,a_2,a_3)^T \\)，使 \\( \\alpha^TA\\alpha=0 \\).",
    "options": null,
    "ans": "\\( \\alpha=\\begin{pmatrix}\\frac{8}{15}\\\\-\\frac{7}{30}\\\\\\frac13\\end{pmatrix} \\)（或其非零倍数）.",
    "fb": "解析：由 \\(T^{-1}AT=\\operatorname{diag}(5,5,-4)\\) 知 \\(A\\) 的特征值为 \\(5\\)（二重）与 \\(-4\\)（一重）。要使 \\(\\alpha^TA\\alpha=0\\)，取 \\(\\alpha\\) 在特征基底下的坐标 \\((u,v,w)\\) 满足 \\(5(u^2+v^2)-4w^2=0\\)，例如取 \\(u=8/15,\\ v=-7/30,\\ w=1/3\\) 满足该关系。故应填 \\(\\alpha=(8/15,-7/30,1/3)^T\\)（或非零倍数）。",
    "pts": 5,
    "diff": 2,
    "sec": "s53"
  }
];
