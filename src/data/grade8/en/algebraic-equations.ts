import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// unknown variable → blue   (#2563eb)
// equation         → orange (#ea580c)
// solution         → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Equations',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SETTING UP AND SOLVING EQUATIONS BY INSPECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'setting-up-solving-by-inspection',
      title: 'Setting Up and Solving Equations by Inspection',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We revise setting up equations to describe problem situations, analysing and interpreting them, and solving by <strong>inspection</strong> — asking what value makes the equation true.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('unknown variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Unknown variable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A letter such as ${bl('x')} that represents the value we are trying to find.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A mathematical statement showing that two expressions are equal, e.g. ${or('4x + 7 = 31')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Solution</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value of the variable that makes the equation true — e.g. ${gr('x = 6')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Solving by inspection</p>` +
        `<p style="margin:0;color:#1e3a8a;">Ask yourself: <em>"What value of ${bl('x')} makes this equation true?"</em> Try values until you find the one that works, or use reasoning to deduce it directly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho thinks of a number, multiplies it by 4 and adds 7 to get 31. Find the number.',
          answer: `${gr('x = 6')}`,
          steps: [
            `Let the unknown number be ${bl('x')}. Set up the ${or('equation')}: ${or('4x + 7 = 31')}.`,
            `By inspection: ${or('4x')} = 31 − 7 = 24, so we need ${bl('x')} such that 4 × ${bl('x')} = 24.`,
            `Ask: what number multiplied by 4 gives 24? Answer: ${gr('x = 6')}.`,
            `Check: 4(${gr('6')}) + 7 = 24 + 7 = 31 ✓`,
          ],
        },
        {
          question: "Set up an equation for 'a number decreased by 9 equals 15' and solve.",
          answer: `${gr('x = 24')}`,
          steps: [
            `Let the unknown number be ${bl('x')}. Set up the ${or('equation')}: ${or('x − 9 = 15')}.`,
            `By inspection: ask what number minus 9 gives 15.`,
            `Answer: ${gr('x = 24')}. Check: 24 − 9 = 15 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up equations from word problems and solve by inspection" />',

      diagramPlaceholder:
        'Balance scale showing 4x + 7 on one side and 31 on the other, staying level, with the solution x = 6 shown below',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 195" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">4x + 7 = 31 stays balanced</text>` +
        `<line x1="30" y1="80" x2="190" y2="80" stroke="#0f1f3d" stroke-width="3"/>` +
        `<line x1="110" y1="80" x2="110" y2="150" stroke="#0f1f3d" stroke-width="3"/>` +
        `<polygon points="110,150 94,172 126,172" fill="#0f1f3d"/>` +
        `<rect x="70" y="172" width="80" height="4" fill="#0f1f3d"/>` +
        `<line x1="50" y1="80" x2="35" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="50" y1="80" x2="65" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<path d="M35,108 Q50,124 65,108" fill="none" stroke="#2563eb" stroke-width="2.5"/>` +
        `<line x1="170" y1="80" x2="155" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="170" y1="80" x2="185" y2="108" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<path d="M155,108 Q170,124 185,108" fill="none" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="50" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4x + 7</text>` +
        `<text x="170" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">31</text>` +
        `<text x="110" y="190" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">x = 6</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING ADDITIVE AND MULTIPLICATIVE INVERSES AND LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'additive-multiplicative-inverses-exponents',
      title: 'Using Additive and Multiplicative Inverses and Laws of Exponents to Solve Equations',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">We extend solving equations to use <strong>additive inverses</strong> (adding the opposite to cancel a term) and <strong>multiplicative inverses</strong> (multiplying by the reciprocal), as well as applying <strong>laws of exponents</strong> where equations involve exponential terms.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('additive inverse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplicative inverse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('exponent laws')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Additive Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('additive inverse')} of a number is its opposite. Adding a number and its additive inverse always gives 0. e.g. 8 + (${bl('−8')}) = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Multiplicative Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('multiplicative inverse')} (reciprocal) of a number when multiplied gives 1. e.g. ¾ × ${or('4/3')} = 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Exponent Laws</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When solving x² = k, apply ${gr('square root')} to both sides: x = ±√k. Remember both the positive and negative root.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Golden rule: whatever you do to one side, do to the other</p>` +
        `<p style="margin:0;color:#1e3a8a;">To keep an equation balanced, apply the same operation to both sides. Use the ${bl('additive inverse')} to eliminate a constant, and the ${or('multiplicative inverse')} to eliminate a coefficient.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x + 8 = 15 using the additive inverse.',
          answer: `x = ${gr('7')}`,
          steps: [
            `The ${bl('additive inverse')} of 8 is ${bl('−8')}. Add ${bl('−8')} to both sides:`,
            `x + 8 + (${bl('−8')}) = 15 + (${bl('−8')})`,
            `x + 0 = 7`,
            `x = ${gr('7')}. Check: ${gr('7')} + 8 = 15 ✓`,
          ],
        },
        {
          question: 'Solve ¾x = 9 using the multiplicative inverse.',
          answer: `x = ${gr('12')}`,
          steps: [
            `The ${or('multiplicative inverse')} of ¾ is ${or('4/3')}. Multiply both sides by ${or('4/3')}:`,
            `${or('4/3')} × ¾x = 9 × ${or('4/3')}`,
            `1x = 36/3 = 12`,
            `x = ${gr('12')}. Check: ¾ × ${gr('12')} = 9 ✓`,
          ],
        },
        {
          question: 'Solve x² = 49.',
          answer: `x = ${gr('±7')}`,
          steps: [
            `This equation involves an exponent. Apply the ${gr('square root')} to both sides:`,
            `√(x²) = √49`,
            `x = ${gr('±7')} — there are two solutions since both 7² = 49 and (−7)² = 49.`,
            `Check: (${gr('7')})² = 49 ✓ and (${gr('−7')})² = 49 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use additive and multiplicative inverses to solve equations, and how to solve equations with squared terms" />',

      diagramPlaceholder:
        'Balance scale showing x + 8 = 15, with −8 subtracted from both sides to leave x = 7',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 210" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="120" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Start: balanced</text>` +
        `<line x1="40" y1="35" x2="200" y2="35" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<polygon points="120,35 112,50 128,50" fill="#0f1f3d"/>` +
        `<rect x="55" y="20" width="60" height="26" rx="4" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="85" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">x + 8</text>` +
        `<rect x="145" y="20" width="60" height="26" rx="4" fill="rgba(234,88,12,0.12)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="175" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">15</text>` +
        `<line x1="85" y1="55" x2="85" y2="80" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="85,86 79,74 91,74" fill="#2563eb"/>` +
        `<text x="85" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">−8</text>` +
        `<line x1="175" y1="55" x2="175" y2="80" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="175,86 169,74 181,74" fill="#ea580c"/>` +
        `<text x="175" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">−8</text>` +
        `<text x="120" y="120" text-anchor="middle" font-size="10" fill="#6b7280">same operation on both sides</text>` +
        `<line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<polygon points="120,140 112,155 128,155" fill="#0f1f3d"/>` +
        `<rect x="55" y="125" width="60" height="26" rx="4" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="85" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">x</text>` +
        `<rect x="145" y="125" width="60" height="26" rx="4" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="175" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">7</text>` +
        `<text x="120" y="195" text-anchor="middle" font-size="20" font-weight="700" fill="#16a34a">x = 7</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SUBSTITUTION TO GENERATE TABLES OF ORDERED PAIRS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'substitution-ordered-pairs',
      title: 'Substitution to Generate Tables of Ordered Pairs',
      icon: '(x,y)',
      explanation:
        `<p style="margin-bottom:16px;">We use <strong>substitution</strong> in equations to generate <strong>tables of ordered pairs</strong>, connecting algebraic equations to their graphical representation.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ordered pairs')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How substitution works</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Choose a ${bl('x-value')} from your table.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Substitute the ${bl('x-value')} into the equation and calculate the ${gr('y-value')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write the result as an ${or('ordered pair')} (${bl('x')}, ${gr('y')}) — x always comes first.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Linking algebra to graphs</p>` +
        `<p style="margin:0;color:#1e3a8a;">Each ${or('ordered pair')} (${bl('x')}, ${gr('y')}) represents a point on the coordinate plane. Plotting these points reveals the shape of the graph of the equation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using y = 3x − 2, generate ordered pairs for x = 0, 1, 2, 3.',
          answer: `${or('(0, −2), (1, 1), (2, 4), (3, 7)')}`,
          steps: [
            `${bl('x = 0')}: y = 3(${bl('0')}) − 2 = 0 − 2 = ${gr('−2')}. Ordered pair: ${or('(0, −2)')}`,
            `${bl('x = 1')}: y = 3(${bl('1')}) − 2 = 3 − 2 = ${gr('1')}. Ordered pair: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = 3(${bl('2')}) − 2 = 6 − 2 = ${gr('4')}. Ordered pair: ${or('(2, 4)')}`,
            `${bl('x = 3')}: y = 3(${bl('3')}) − 2 = 9 − 2 = ${gr('7')}. Ordered pair: ${or('(3, 7)')}`,
          ],
        },
        {
          question: 'Lerato substitutes x = −1, 0, 1, 2 into y = −2x + 3. Find the ordered pairs.',
          answer: `${or('(−1, 5), (0, 3), (1, 1), (2, −1)')}`,
          steps: [
            `${bl('x = −1')}: y = −2(${bl('−1')}) + 3 = 2 + 3 = ${gr('5')}. Ordered pair: ${or('(−1, 5)')}`,
            `${bl('x = 0')}: y = −2(${bl('0')}) + 3 = 0 + 3 = ${gr('3')}. Ordered pair: ${or('(0, 3)')}`,
            `${bl('x = 1')}: y = −2(${bl('1')}) + 3 = −2 + 3 = ${gr('1')}. Ordered pair: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = −2(${bl('2')}) + 3 = −4 + 3 = ${gr('−1')}. Ordered pair: ${or('(2, −1)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute x-values into an equation to generate a table of ordered pairs and plot the points" />',

      diagramPlaceholder:
        'Coordinate grid plotting the ordered pairs (0,−2), (1,1), (2,4) and (3,7) generated from y = 3x − 2, joined by a straight line',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="50" y1="185" x2="50" y2="15" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="50,10 45,20 55,20" fill="#0f1f3d"/>` +
        `<line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="210,150 200,145 200,155" fill="#0f1f3d"/>` +
        `<text x="213" y="146" font-size="11" fill="#0f1f3d">x</text>` +
        `<text x="42" y="14" font-size="11" fill="#0f1f3d">y</text>` +
        `<text x="50" y="163" text-anchor="middle" font-size="9" fill="#6b7280">0</text>` +
        `<text x="85" y="163" text-anchor="middle" font-size="9" fill="#6b7280">1</text>` +
        `<text x="120" y="163" text-anchor="middle" font-size="9" fill="#6b7280">2</text>` +
        `<text x="155" y="163" text-anchor="middle" font-size="9" fill="#6b7280">3</text>` +
        `<line x1="50" y1="174" x2="155" y2="66" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>` +
        `<circle cx="50" cy="174" r="4.5" fill="#ea580c"/>` +
        `<text x="60" y="186" font-size="9" font-weight="700" fill="#ea580c">(0,−2)</text>` +
        `<circle cx="85" cy="138" r="4.5" fill="#ea580c"/>` +
        `<text x="97" y="132" font-size="9" font-weight="700" fill="#ea580c">(1,1)</text>` +
        `<circle cx="120" cy="102" r="4.5" fill="#ea580c"/>` +
        `<text x="132" y="96" font-size="9" font-weight="700" fill="#ea580c">(2,4)</text>` +
        `<circle cx="155" cy="66" r="4.5" fill="#ea580c"/>` +
        `<text x="167" y="60" font-size="9" font-weight="700" fill="#ea580c">(3,7)</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x + 12 = 27 by inspection.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Ask: what number added to 12 gives 27? Answer: x = 15. Check: 15 + 12 = 27 ✓',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho thinks of a number, multiplies it by 5 and subtracts 8 to get 32. Find the number.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Equation: 5x − 8 = 32. By inspection: 5x = 40, so x = 8. Check: 5(8) − 8 = 40 − 8 = 32 ✓',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sets up the equation 3x − 6 = 21 for a number problem and solves x = 9. Check her answer.',
      answer: 'Correct — substituting x = 9: 3(9) − 6 = 27 − 6 = 21.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x − 15 = 22 using the additive inverse.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Add 15 (the additive inverse of −15) to both sides: x = 22 + 15 = 37. Check: 37 − 15 = 22 ✓',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve ²⁄₃x = 10 using the multiplicative inverse.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Multiply both sides by 3/2 (the multiplicative inverse of 2/3): x = 10 × 3/2 = 30/2 = 15. Check: (2/3)(15) = 10 ✓',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² = 64 and explain why there are two solutions.',
      answer: 'x = ±8, since both 8² = 64 and (−8)² = 64.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve 5x + 9 = 34.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: '5x + 9 = 34 → 5x = 34 − 9 = 25 → x = 25 ÷ 5 = 5. Check: 5(5) + 9 = 25 + 9 = 34 ✓',
    },

    // ── Q8 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says solving x² = 36 only gives x = 6. Is he correct? Explain.',
      answer: 'No — there are two solutions, x = 6 and x = −6, since both squared give 36.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Generate ordered pairs using y = 2x + 5 for x = 0, 1, 2, 3.',
      answer: '(0, 5), (1, 7), (2, 9), (3, 11).',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using y = 4x − 1, find y when x = 3.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: 'y = 4(3) − 1 = 12 − 1 = 11 ✓',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle generates a table for y = −x + 6 using x = −2, −1, 0, 1 and gets (−2, 8), (−1, 7), (0, 6), (1, 5). Check her table.',
      answer: 'Correct — each value is found by substituting x into the equation.',
      checkMode: 'self',
    },

    // ── Q12 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve 4x − 7 = 21.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: '4x − 7 = 21 → 4x = 28 → x = 7. Check: 4(7) − 7 = 28 − 7 = 21 ✓',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve ³⁄₅x = 18 using the multiplicative inverse.',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'Multiply both sides by 5/3 (the multiplicative inverse of 3/5): x = 18 × 5/3 = 90/3 = 30. Check: (3/5)(30) = 18 ✓',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says solving x + (−9) = 14 is the same as solving x − 9 = 14. Is he correct? Explain.',
      answer: 'Yes — adding a negative number is the same as subtracting that number, so the two equations are equivalent.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Generate ordered pairs using y = x² − 3 for x = 0, 1, 2, 3.',
      answer: '(0, −3), (1, −2), (2, 1), (3, 6)',
      checkMode: 'auto',
      correctAnswer: '(0,-3),(1,-2),(2,1),(3,6)',
      correctAnswers: [
        '(0,-3),(1,-2),(2,1),(3,6)',
        '(0, -3), (1, -2), (2, 1), (3, 6)',
        '(0,−3),(1,−2),(2,1),(3,6)',
      ],
      explanation: 'x=0: y=0−3=−3. x=1: y=1−3=−2. x=2: y=4−3=1. x=3: y=9−3=6.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered algebraic equations.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of algebraic equations.' },
      { minPercent: 50, message: 'Good effort, review the sections and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Variables on both sides (positions 0-3)
        { difficulty: 'Medium', question: 'Solve: 6x + 5 = 2x + 29', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '6x + 5 = 2x + 29\nSubtract 2x from both sides: 4x + 5 = 29\nSubtract 5 from both sides: 4x = 24\nDivide both sides by 4: x = 6\nCheck: 6(6) + 5 = 41 and 2(6) + 29 = 41 ✓' },
        { difficulty: 'Medium', question: 'Solve: 9x − 8 = 4x + 17', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '9x − 8 = 4x + 17\nSubtract 4x from both sides: 5x − 8 = 17\nAdd 8 to both sides: 5x = 25\nDivide both sides by 5: x = 5\nCheck: 9(5) − 8 = 37 and 4(5) + 17 = 37 ✓' },
        { difficulty: 'Medium-Hard', question: 'Seven times a number, decreased by 3, equals four times the number increased by 15. Form an equation and solve it.', answer: '7x − 3 = 4x + 15', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x = 6', '7x - 3 = 4x + 15, x = 6'], explanation: 'Let the number be x.\n7x − 3 = 4x + 15\nSubtract 4x from both sides: 3x − 3 = 15\nAdd 3 to both sides: 3x = 18\nDivide both sides by 3: x = 6\nCheck: 7(6) − 3 = 39 and 4(6) + 15 = 39 ✓' },
        { difficulty: 'Hard', question: 'A student solves 5x + 9 = 2x + 30 by subtracting 2x from the right side only, writing 5x + 9 = 30. Explain the error and give the correct solution.', answer: 'The student only removed the 2x term from the right-hand side but left it out of the left-hand side entirely, instead of subtracting 2x from BOTH sides. Correct method: subtract 2x from both sides to get 3x + 9 = 30, subtract 9 from both sides to get 3x = 21, then divide by 3 to get x = 7. Check: 5(7) + 9 = 44 and 2(7) + 30 = 44 ✓', checkMode: 'self' },

        // Block 2 — Equations with brackets to expand first (positions 4-7)
        { difficulty: 'Medium', question: 'Solve: 3(x + 5) = 27', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '3(x + 5) = 27\nExpand the bracket: 3x + 15 = 27\nSubtract 15 from both sides: 3x = 12\nDivide both sides by 3: x = 4\nCheck: 3(4 + 5) = 3(9) = 27 ✓' },
        { difficulty: 'Medium', question: 'Solve: 4(2x − 3) = 44', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '4(2x − 3) = 44\nExpand the bracket: 8x − 12 = 44\nAdd 12 to both sides: 8x = 56\nDivide both sides by 8: x = 7\nCheck: 4(2(7) − 3) = 4(11) = 44 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 5(x − 2) = 3x + 8', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5(x − 2) = 3x + 8\nExpand the bracket: 5x − 10 = 3x + 8\nSubtract 3x from both sides: 2x − 10 = 8\nAdd 10 to both sides: 2x = 18\nDivide both sides by 2: x = 9\nCheck: 5(9 − 2) = 5(7) = 35 and 3(9) + 8 = 35 ✓' },
        { difficulty: 'Hard', question: 'A student solves 3(2x + 4) = 42 by writing 6x + 4 = 42, only multiplying the first term inside the bracket by 3. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 3 to BOTH terms inside the bracket — the 4 must also be multiplied by 3, not left as a plain "+ 4". Correct method: expand the bracket to get 6x + 12 = 42, subtract 12 from both sides to get 6x = 30, then divide by 6 to get x = 5. Check: 3(2(5) + 4) = 3(14) = 42 ✓', checkMode: 'self' },

        // Block 3 — Equations with fractions, clearing denominators (positions 8-11)
        { difficulty: 'Medium', question: 'Solve: x/3 + 5 = 12', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'x/3 + 5 = 12\nSubtract 5 from both sides: x/3 = 7\nMultiply both sides by 3: x = 21\nCheck: 21/3 + 5 = 7 + 5 = 12 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 4)/5 = 6', answer: '26', checkMode: 'auto', correctAnswer: '26', explanation: '(x + 4)/5 = 6\nMultiply both sides by 5: x + 4 = 30\nSubtract 4 from both sides: x = 26\nCheck: (26 + 4)/5 = 30/5 = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/2 + x/3 = 10', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'x/2 + x/3 = 10\nMultiply every term by the lowest common denominator, 6: 3x + 2x = 60\nCollect like terms: 5x = 60\nDivide both sides by 5: x = 12\nCheck: 12/2 + 12/3 = 6 + 4 = 10 ✓' },
        { difficulty: 'Hard', question: 'A student solves (2x − 1)/3 = 7 by writing 2x − 1 = 7/3. Explain the error and give the correct solution.', answer: 'The student divided the wrong side by 3 — to clear the denominator, both sides must be multiplied by 3, giving 2x − 1 = 21, not 2x − 1 = 7/3. Correct method: multiply both sides by 3 to get 2x − 1 = 21, add 1 to both sides to get 2x = 22, then divide by 2 to get x = 11. Check: (2(11) − 1)/3 = 21/3 = 7 ✓', checkMode: 'self' },

        // Block 4 — Forming and solving equations from word problems (positions 12-15)
        { difficulty: 'Medium', question: 'A number is added to twice a second number plus 3, and the total is 30. If the second number is x, the first number can be written as 2x + 3. Form an equation and find both numbers.', answer: 'x + (2x + 3) = 30\n3x + 3 = 30\n3x = 27\nx = 9\nThe second number is 9 and the first number is 2(9) + 3 = 21.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A father is 4 times as old as his son. In 6 years' time, the father will only be 3 times as old as his son. If the son's current age is x, form an equation and find the son's current age.", answer: '4x + 6 = 3(x + 6)', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'x = 12', '4x + 6 = 3(x + 6), x = 12'], explanation: "Let the son's current age be x, so the father's current age is 4x.\nIn 6 years: father = 4x + 6, son = x + 6\n4x + 6 = 3(x + 6)\nExpand: 4x + 6 = 3x + 18\nSubtract 3x from both sides: x + 6 = 18\nSubtract 6 from both sides: x = 12\nThe son is currently 12 years old." },
        { difficulty: 'Hard', question: 'The width of a rectangle is w cm and its length is 5 cm more than its width. The perimeter is 46 cm. Form an equation and solve it to find the width.', answer: '2(w + (w + 5)) = 46\n2(2w + 5) = 46\n4w + 10 = 46\n4w = 36\nw = 9\nThe width is 9 cm and the length is 9 + 5 = 14 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A stationery shop charges a R20 joining fee plus R3 per pen. A second shop charges a R8 joining fee plus R5 per pen. For how many pens, n, would the total cost be the same at both shops?', answer: '20 + 3n = 8 + 5n', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'n = 6', '20 + 3n = 8 + 5n, n = 6'], explanation: 'Shop A cost: 20 + 3n. Shop B cost: 8 + 5n.\n20 + 3n = 8 + 5n\nSubtract 3n from both sides: 20 = 8 + 2n\nSubtract 8 from both sides: 12 = 2n\nDivide both sides by 2: n = 6\nCheck: 20 + 3(6) = 38 and 8 + 5(6) = 38 ✓' },

        // Block 5 — Checking solutions by substitution / error-spotting (positions 16-17)
        { difficulty: 'Medium', question: 'Is x = 6 a solution to 5x − 4 = 3x + 8? Show your substitution check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute x = 6 into both sides.\nLeft side: 5(6) − 4 = 30 − 4 = 26\nRight side: 3(6) + 8 = 18 + 8 = 26\nBoth sides equal 26, so x = 6 is a solution.' },
        { difficulty: 'Hard', question: 'Lerato checks x = 8 in the equation 4(x + 2) = 3x + 22 and concludes it is a solution because 4(10) = 40 and the right side "looks close" to 40. Show a proper substitution check and state whether x = 8 is actually correct.', answer: 'Substitute x = 8 into both sides.\nLeft side: 4(8 + 2) = 4(10) = 40\nRight side: 3(8) + 22 = 24 + 22 = 46\n40 does not equal 46, so x = 8 is NOT a solution — Lerato was wrong to accept an approximate match instead of checking the exact values. Solving correctly: 4(x + 2) = 3x + 22 → 4x + 8 = 3x + 22 → x = 14. Check: 4(14 + 2) = 4(16) = 64 and 3(14) + 22 = 64 ✓', checkMode: 'self' },

        // Block 6 — Multi-step combined equations (positions 18-19)
        { difficulty: 'Hard', question: 'Solve: 2(x + 3) = x + 11', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '2(x + 3) = x + 11\nExpand the bracket: 2x + 6 = x + 11\nSubtract x from both sides: x + 6 = 11\nSubtract 6 from both sides: x = 5\nCheck: 2(5 + 3) = 2(8) = 16 and 5 + 11 = 16 ✓' },
        { difficulty: 'Hard', question: 'Solve: (x + 2)/3 + 4 = x − 6', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '(x + 2)/3 + 4 = x − 6\nMultiply every term by 3 to clear the fraction: (x + 2) + 12 = 3x − 18\nSimplify the left side: x + 14 = 3x − 18\nSubtract x from both sides: 14 = 2x − 18\nAdd 18 to both sides: 32 = 2x\nDivide both sides by 2: x = 16\nCheck: (16 + 2)/3 + 4 = 6 + 4 = 10 and 16 − 6 = 10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered equations with variables on both sides, brackets, and fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions on brackets or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on clearing fractions and expanding brackets, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Variables on both sides (positions 0-3)
        { difficulty: 'Medium', question: 'Solve: 8x + 3 = 3x + 38', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '8x + 3 = 3x + 38\nSubtract 3x from both sides: 5x + 3 = 38\nSubtract 3 from both sides: 5x = 35\nDivide both sides by 5: x = 7\nCheck: 8(7) + 3 = 59 and 3(7) + 38 = 59 ✓' },
        { difficulty: 'Medium', question: 'Solve: 10x − 6 = 5x + 29', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '10x − 6 = 5x + 29\nSubtract 5x from both sides: 5x − 6 = 29\nAdd 6 to both sides: 5x = 35\nDivide both sides by 5: x = 7\nCheck: 10(7) − 6 = 64 and 5(7) + 29 = 64 ✓' },
        { difficulty: 'Medium-Hard', question: 'Nine times a number, decreased by 4, equals five times the number increased by 24. Form an equation and solve it.', answer: '9x − 4 = 5x + 24', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'x = 7', '9x - 4 = 5x + 24, x = 7'], explanation: 'Let the number be x.\n9x − 4 = 5x + 24\nSubtract 5x from both sides: 4x − 4 = 24\nAdd 4 to both sides: 4x = 28\nDivide both sides by 4: x = 7\nCheck: 9(7) − 4 = 59 and 5(7) + 24 = 59 ✓' },
        { difficulty: 'Hard', question: 'A student solves 6x + 11 = 3x + 35 by subtracting 3x from the right side only, writing 6x + 11 = 35. Explain the error and give the correct solution.', answer: 'The student only removed the 3x term from the right-hand side but left it out of the left-hand side entirely, instead of subtracting 3x from BOTH sides. Correct method: subtract 3x from both sides to get 3x + 11 = 35, subtract 11 from both sides to get 3x = 24, then divide by 3 to get x = 8. Check: 6(8) + 11 = 59 and 3(8) + 35 = 59 ✓', checkMode: 'self' },

        // Block 2 — Equations with brackets to expand first (positions 4-7)
        { difficulty: 'Medium', question: 'Solve: 4(x + 6) = 52', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '4(x + 6) = 52\nExpand the bracket: 4x + 24 = 52\nSubtract 24 from both sides: 4x = 28\nDivide both sides by 4: x = 7\nCheck: 4(7 + 6) = 4(13) = 52 ✓' },
        { difficulty: 'Medium', question: 'Solve: 6(2x − 3) = 54', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '6(2x − 3) = 54\nExpand the bracket: 12x − 18 = 54\nAdd 18 to both sides: 12x = 72\nDivide both sides by 12: x = 6\nCheck: 6(2(6) − 3) = 6(9) = 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 6(x − 1) = 4x + 10', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '6(x − 1) = 4x + 10\nExpand the bracket: 6x − 6 = 4x + 10\nSubtract 4x from both sides: 2x − 6 = 10\nAdd 6 to both sides: 2x = 16\nDivide both sides by 2: x = 8\nCheck: 6(8 − 1) = 6(7) = 42 and 4(8) + 10 = 42 ✓' },
        { difficulty: 'Hard', question: 'A student solves 4(3x + 2) = 68 by writing 12x + 2 = 68, only multiplying the first term inside the bracket by 4. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 4 to BOTH terms inside the bracket — the 2 must also be multiplied by 4, not left as a plain "+ 2". Correct method: expand the bracket to get 12x + 8 = 68, subtract 8 from both sides to get 12x = 60, then divide by 12 to get x = 5. Check: 4(3(5) + 2) = 4(17) = 68 ✓', checkMode: 'self' },

        // Block 3 — Equations with fractions, clearing denominators (positions 8-11)
        { difficulty: 'Medium', question: 'Solve: x/4 + 6 = 15', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'x/4 + 6 = 15\nSubtract 6 from both sides: x/4 = 9\nMultiply both sides by 4: x = 36\nCheck: 36/4 + 6 = 9 + 6 = 15 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 7)/3 = 9', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '(x + 7)/3 = 9\nMultiply both sides by 3: x + 7 = 27\nSubtract 7 from both sides: x = 20\nCheck: (20 + 7)/3 = 27/3 = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/3 + x/4 = 7', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'x/3 + x/4 = 7\nMultiply every term by the lowest common denominator, 12: 4x + 3x = 84\nCollect like terms: 7x = 84\nDivide both sides by 7: x = 12\nCheck: 12/3 + 12/4 = 4 + 3 = 7 ✓' },
        { difficulty: 'Hard', question: 'A student solves (3x − 2)/4 = 10 by writing 3x − 2 = 10/4. Explain the error and give the correct solution.', answer: 'The student divided the wrong side by 4 — to clear the denominator, both sides must be multiplied by 4, giving 3x − 2 = 40, not 3x − 2 = 10/4. Correct method: multiply both sides by 4 to get 3x − 2 = 40, add 2 to both sides to get 3x = 42, then divide by 3 to get x = 14. Check: (3(14) − 2)/4 = 40/4 = 10 ✓', checkMode: 'self' },

        // Block 4 — Forming and solving equations from word problems (positions 12-15)
        { difficulty: 'Medium', question: 'A number is added to twice a second number plus 6, and the total is 39. If the second number is x, the first number can be written as 2x + 6. Form an equation and find both numbers.', answer: 'x + (2x + 6) = 39\n3x + 6 = 39\n3x = 33\nx = 11\nThe second number is 11 and the first number is 2(11) + 6 = 28.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A father is 5 times as old as his son. In 4 years' time, the father will only be 4 times as old as his son. If the son's current age is x, form an equation and find the son's current age.", answer: '5x + 4 = 4(x + 4)', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'x = 12', '5x + 4 = 4(x + 4), x = 12'], explanation: "Let the son's current age be x, so the father's current age is 5x.\nIn 4 years: father = 5x + 4, son = x + 4\n5x + 4 = 4(x + 4)\nExpand: 5x + 4 = 4x + 16\nSubtract 4x from both sides: x + 4 = 16\nSubtract 4 from both sides: x = 12\nThe son is currently 12 years old." },
        { difficulty: 'Hard', question: 'The width of a rectangle is w cm and its length is 8 cm more than its width. The perimeter is 52 cm. Form an equation and solve it to find the width.', answer: '2(w + (w + 8)) = 52\n2(2w + 8) = 52\n4w + 16 = 52\n4w = 36\nw = 9\nThe width is 9 cm and the length is 9 + 8 = 17 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A printing shop charges a R25 setup fee plus R4 per poster. A second shop has a R10 setup fee but charges R7 per poster. For how many posters, n, would the total cost be the same at both shops?', answer: '25 + 4n = 10 + 7n', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'n = 5', '25 + 4n = 10 + 7n, n = 5'], explanation: '25 + 4n = 10 + 7n\nSubtract 4n from both sides: 25 = 10 + 3n\nSubtract 10 from both sides: 15 = 3n\nDivide both sides by 3: n = 5\nCheck: 25 + 4(5) = 45 and 10 + 7(5) = 45 ✓' },

        // Block 5 — Checking solutions by substitution / error-spotting (positions 16-17)
        { difficulty: 'Medium', question: 'Is x = 7 a solution to 4x + 9 = 2x + 23? Show your substitution check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute x = 7 into both sides.\nLeft side: 4(7) + 9 = 28 + 9 = 37\nRight side: 2(7) + 23 = 14 + 23 = 37\nBoth sides equal 37, so x = 7 is a solution.' },
        { difficulty: 'Hard', question: 'Thabo checks x = 9 in the equation 3(x + 4) = 2x + 27 and concludes it is a solution because 3(13) = 39 and the right side "looks close" to 39. Show a proper substitution check and state whether x = 9 is actually correct.', answer: 'Substitute x = 9 into both sides.\nLeft side: 3(9 + 4) = 3(13) = 39\nRight side: 2(9) + 27 = 18 + 27 = 45\n39 does not equal 45, so x = 9 is NOT a solution — Thabo was wrong to accept an approximate match instead of checking the exact values. Solving correctly: 3(x + 4) = 2x + 27 → 3x + 12 = 2x + 27 → x = 15. Check: 3(15 + 4) = 3(19) = 57 and 2(15) + 27 = 57 ✓', checkMode: 'self' },

        // Block 6 — Multi-step combined equations (positions 18-19)
        { difficulty: 'Hard', question: 'Solve: 3(x − 2) = x + 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '3(x − 2) = x + 8\nExpand the bracket: 3x − 6 = x + 8\nSubtract x from both sides: 2x − 6 = 8\nAdd 6 to both sides: 2x = 14\nDivide both sides by 2: x = 7\nCheck: 3(7 − 2) = 3(5) = 15 and 7 + 8 = 15 ✓' },
        { difficulty: 'Hard', question: 'Solve: (x + 1)/5 + 2 = x − 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x + 1)/5 + 2 = x − 5\nMultiply every term by 5 to clear the fraction: (x + 1) + 10 = 5x − 25\nSimplify the left side: x + 11 = 5x − 25\nSubtract x from both sides: 11 = 4x − 25\nAdd 25 to both sides: 36 = 4x\nDivide both sides by 4: x = 9\nCheck: (9 + 1)/5 + 2 = 2 + 2 = 4 and 9 − 5 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered equations with variables on both sides, brackets, and fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions on brackets or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on clearing fractions and expanding brackets, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Variables on both sides (positions 0-3)
        { difficulty: 'Medium', question: 'Solve: 7x + 9 = 4x + 27', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '7x + 9 = 4x + 27\nSubtract 4x from both sides: 3x + 9 = 27\nSubtract 9 from both sides: 3x = 18\nDivide both sides by 3: x = 6\nCheck: 7(6) + 9 = 51 and 4(6) + 27 = 51 ✓' },
        { difficulty: 'Medium', question: 'Solve: 11x − 10 = 6x + 30', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '11x − 10 = 6x + 30\nSubtract 6x from both sides: 5x − 10 = 30\nAdd 10 to both sides: 5x = 40\nDivide both sides by 5: x = 8\nCheck: 11(8) − 10 = 78 and 6(8) + 30 = 78 ✓' },
        { difficulty: 'Medium-Hard', question: 'Eight times a number, decreased by 5, equals five times the number increased by 19. Form an equation and solve it.', answer: '8x − 5 = 5x + 19', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'x = 8', '8x - 5 = 5x + 19, x = 8'], explanation: 'Let the number be x.\n8x − 5 = 5x + 19\nSubtract 5x from both sides: 3x − 5 = 19\nAdd 5 to both sides: 3x = 24\nDivide both sides by 3: x = 8\nCheck: 8(8) − 5 = 59 and 5(8) + 19 = 59 ✓' },
        { difficulty: 'Hard', question: 'A student solves 9x + 4 = 4x + 49 by subtracting 4x from the right side only, writing 9x + 4 = 49. Explain the error and give the correct solution.', answer: 'The student only removed the 4x term from the right-hand side but left it out of the left-hand side entirely, instead of subtracting 4x from BOTH sides. Correct method: subtract 4x from both sides to get 5x + 4 = 49, subtract 4 from both sides to get 5x = 45, then divide by 5 to get x = 9. Check: 9(9) + 4 = 85 and 4(9) + 49 = 85 ✓', checkMode: 'self' },

        // Block 2 — Equations with brackets to expand first (positions 4-7)
        { difficulty: 'Medium', question: 'Solve: 6(x + 2) = 54', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '6(x + 2) = 54\nExpand the bracket: 6x + 12 = 54\nSubtract 12 from both sides: 6x = 42\nDivide both sides by 6: x = 7\nCheck: 6(7 + 2) = 6(9) = 54 ✓' },
        { difficulty: 'Medium', question: 'Solve: 4(3x − 2) = 100', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '4(3x − 2) = 100\nExpand the bracket: 12x − 8 = 100\nAdd 8 to both sides: 12x = 108\nDivide both sides by 12: x = 9\nCheck: 4(3(9) − 2) = 4(25) = 100 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 7(x − 3) = 4x + 3', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '7(x − 3) = 4x + 3\nExpand the bracket: 7x − 21 = 4x + 3\nSubtract 4x from both sides: 3x − 21 = 3\nAdd 21 to both sides: 3x = 24\nDivide both sides by 3: x = 8\nCheck: 7(8 − 3) = 7(5) = 35 and 4(8) + 3 = 35 ✓' },
        { difficulty: 'Hard', question: 'A student solves 5(2x + 3) = 65 by writing 10x + 3 = 65, only multiplying the first term inside the bracket by 5. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 5 to BOTH terms inside the bracket — the 3 must also be multiplied by 5, not left as a plain "+ 3". Correct method: expand the bracket to get 10x + 15 = 65, subtract 15 from both sides to get 10x = 50, then divide by 10 to get x = 5. Check: 5(2(5) + 3) = 5(13) = 65 ✓', checkMode: 'self' },

        // Block 3 — Equations with fractions, clearing denominators (positions 8-11)
        { difficulty: 'Medium', question: 'Solve: x/5 + 8 = 15', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'x/5 + 8 = 15\nSubtract 8 from both sides: x/5 = 7\nMultiply both sides by 5: x = 35\nCheck: 35/5 + 8 = 7 + 8 = 15 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 9)/4 = 8', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: '(x + 9)/4 = 8\nMultiply both sides by 4: x + 9 = 32\nSubtract 9 from both sides: x = 23\nCheck: (23 + 9)/4 = 32/4 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/4 + x/5 = 9', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'x/4 + x/5 = 9\nMultiply every term by the lowest common denominator, 20: 5x + 4x = 180\nCollect like terms: 9x = 180\nDivide both sides by 9: x = 20\nCheck: 20/4 + 20/5 = 5 + 4 = 9 ✓' },
        { difficulty: 'Hard', question: 'A student solves (4x − 3)/5 = 9 by writing 4x − 3 = 9/5. Explain the error and give the correct solution.', answer: 'The student divided the wrong side by 5 — to clear the denominator, both sides must be multiplied by 5, giving 4x − 3 = 45, not 4x − 3 = 9/5. Correct method: multiply both sides by 5 to get 4x − 3 = 45, add 3 to both sides to get 4x = 48, then divide by 4 to get x = 12. Check: (4(12) − 3)/5 = 45/5 = 9 ✓', checkMode: 'self' },

        // Block 4 — Forming and solving equations from word problems (positions 12-15)
        { difficulty: 'Medium', question: 'A number is added to twice a second number plus 9, and the total is 45. If the second number is x, the first number can be written as 2x + 9. Form an equation and find both numbers.', answer: 'x + (2x + 9) = 45\n3x + 9 = 45\n3x = 36\nx = 12\nThe second number is 12 and the first number is 2(12) + 9 = 33.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A father is 6 times as old as his son. In 2 years' time, the father will only be 5 times as old as his son. If the son's current age is x, form an equation and find the son's current age.", answer: '6x + 2 = 5(x + 2)', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'x = 8', '6x + 2 = 5(x + 2), x = 8'], explanation: "Let the son's current age be x, so the father's current age is 6x.\nIn 2 years: father = 6x + 2, son = x + 2\n6x + 2 = 5(x + 2)\nExpand: 6x + 2 = 5x + 10\nSubtract 5x from both sides: x + 2 = 10\nSubtract 2 from both sides: x = 8\nThe son is currently 8 years old." },
        { difficulty: 'Hard', question: 'The width of a rectangle is w cm and its length is 6 cm more than its width. The perimeter is 64 cm. Form an equation and solve it to find the width.', answer: '2(w + (w + 6)) = 64\n2(2w + 6) = 64\n4w + 12 = 64\n4w = 52\nw = 13\nThe width is 13 cm and the length is 13 + 6 = 19 cm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A tuck shop charges a R18 stall fee plus R6 per item. A second stall has a R6 stall fee but charges R9 per item. For how many items, n, would the total cost be the same at both stalls?', answer: '18 + 6n = 6 + 9n', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'n = 4', '18 + 6n = 6 + 9n, n = 4'], explanation: '18 + 6n = 6 + 9n\nSubtract 6n from both sides: 18 = 6 + 3n\nSubtract 6 from both sides: 12 = 3n\nDivide both sides by 3: n = 4\nCheck: 18 + 6(4) = 42 and 6 + 9(4) = 42 ✓' },

        // Block 5 — Checking solutions by substitution / error-spotting (positions 16-17)
        { difficulty: 'Medium', question: 'Is x = 10 a solution to 3x − 8 = 2x + 3? Show your substitution check, and give the correct solution if not.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Substitute x = 10 into both sides.\nLeft side: 3(10) − 8 = 30 − 8 = 22\nRight side: 2(10) + 3 = 20 + 3 = 23\n22 does not equal 23, so x = 10 is not a solution. Solving correctly: 3x − 8 = 2x + 3 → x = 11. Check: 3(11) − 8 = 25 and 2(11) + 3 = 25 ✓' },
        { difficulty: 'Hard', question: 'Amahle checks x = 6 in the equation 5(x + 1) = 3x + 27 and concludes it is a solution because 5(7) = 35 and the right side "looks close" to 35. Show a proper substitution check and state whether x = 6 is actually correct.', answer: 'Substitute x = 6 into both sides.\nLeft side: 5(6 + 1) = 5(7) = 35\nRight side: 3(6) + 27 = 18 + 27 = 45\n35 does not equal 45, so x = 6 is NOT a solution — Amahle was wrong to accept an approximate match instead of checking the exact values. Solving correctly: 5(x + 1) = 3x + 27 → 5x + 5 = 3x + 27 → 2x = 22 → x = 11. Check: 5(11 + 1) = 5(12) = 60 and 3(11) + 27 = 60 ✓', checkMode: 'self' },

        // Block 6 — Multi-step combined equations (positions 18-19)
        { difficulty: 'Hard', question: 'Solve: 4(x − 1) = x + 11', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '4(x − 1) = x + 11\nExpand the bracket: 4x − 4 = x + 11\nSubtract x from both sides: 3x − 4 = 11\nAdd 4 to both sides: 3x = 15\nDivide both sides by 3: x = 5\nCheck: 4(5 − 1) = 4(4) = 16 and 5 + 11 = 16 ✓' },
        { difficulty: 'Hard', question: 'Solve: (x + 3)/4 + 1 = x − 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x + 3)/4 + 1 = x − 5\nMultiply every term by 4 to clear the fraction: (x + 3) + 4 = 4x − 20\nSimplify the left side: x + 7 = 4x − 20\nSubtract x from both sides: 7 = 3x − 20\nAdd 20 to both sides: 27 = 3x\nDivide both sides by 3: x = 9\nCheck: (9 + 3)/4 + 1 = 3 + 1 = 4 and 9 − 5 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered equations with variables on both sides, brackets, and fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions on brackets or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on clearing fractions and expanding brackets, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
