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
        '<DiagramPlaceholder label="Visual showing an equation balance with the unknown variable on one side and the solution on the other" />',
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
        '<DiagramPlaceholder label="Balance diagram showing additive and multiplicative inverse steps applied to both sides of an equation" />',
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
        '<DiagramPlaceholder label="Table of x and y values alongside a coordinate grid showing the plotted ordered pairs forming a straight line" />',
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
}
