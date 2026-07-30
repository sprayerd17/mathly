import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions and relationships roles) ────────────────────────
// input / x-values / equation (s2)              → blue   (#2563eb)
// output / y-values / gradient·intercept (s2)   → green  (#16a34a)
// equation (s1) / graph features / ordered pairs → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions and Relationships',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DETERMINING INPUT/OUTPUT USING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-input-output-using-equations',
      title: 'Determining Input/Output Using Equations',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">We determine ${bl('input')} values, ${gr('output')} values or rules for patterns and relationships using flow diagrams, tables, formulae and equations, applying substitution confidently to solve for unknowns in either direction.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('input')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('output')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the output (substitute the input)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${or('equation')} and identify the given ${bl('input')} (x value).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Replace x in the ${or('equation')} with the ${bl('input')} value and simplify.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The result is the ${gr('output')} (y value).</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the input (solve the equation)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Replace y in the ${or('equation')} with the given ${gr('output')} value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Use inverse operations on the ${or('equation')} to isolate x step by step.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The value of x is the ${bl('input')}. Verify by substituting back.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Substitution works in both directions</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you know the ${bl('input')}, substitute it to find the ${gr('output')}. When you know the ${gr('output')}, substitute it for y and solve the ${or('equation')} to find the ${bl('input')}. The same equation is used — only the unknown changes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using y = 5x − 3, find y when x = 8.',
          answer: `y = ${gr('37')}`,
          steps: [
            `Write the ${or('equation')}: y = 5x − 3. The ${bl('input')} is x = ${bl('8')}.`,
            `Substitute x = ${bl('8')}: y = 5(${bl('8')}) − 3`,
            `Calculate: y = 40 − 3 = ${gr('37')}`,
            `<strong>Answer:</strong> When x = ${bl('8')}, y = ${gr('37')} ✓`,
          ],
        },
        {
          question: 'Using y = 2x + 11, find x when y = 27.',
          answer: `x = ${bl('8')}`,
          steps: [
            `Write the ${or('equation')}: y = 2x + 11. The ${gr('output')} is y = ${gr('27')}.`,
            `Substitute y = ${gr('27')}: ${gr('27')} = 2x + 11`,
            `Subtract 11 from both sides: ${gr('27')} − 11 = 2x → 16 = 2x`,
            `Divide both sides by 2: x = 16 ÷ 2 = ${bl('8')}`,
            `<strong>Answer:</strong> When y = ${gr('27')}, x = ${bl('8')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Using y = 6x − 4, find y when x = 5.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Substitute x = 5: y = 6(5) − 4 = 30 − 4 = 26 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Using y = 4x − 9, find x when y = 23.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Substitute y = 23: 23 = 4x − 9. Add 9 to both sides: 32 = 4x. Divide by 4: x = 8 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho says that using y = 3x + 10, when y = 37, x = 9. Is he correct? Explain.",
          answer: 'Yes — 37 = 3x + 10 gives 3x = 27, so x = 9. He is correct.',
          checkMode: 'self',
        },

        // ── Q4 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'An equation is y = 5x − 1. Describe its graph\'s gradient and y-intercept.',
          answer: 'gradient = 5, y-intercept = −1',
          checkMode: 'auto',
          correctAnswer: 'gradient=5, y-intercept=-1',
          correctAnswers: ['gradient=5, y-intercept=-1', 'gradient = 5, y-intercept = -1', 'gradient=5,y-intercept=-1', 'm=5, c=-1', 'm=5,c=-1', '5 and -1'],
          explanation: 'In the equation y = mx + c, m is the gradient and c is the y-intercept. Here m = 5 and c = −1, so gradient = 5 and y-intercept = −1 ✓',
        },

        // ── Q5 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A table shows x: 0, 1, 2, 3 and y: 3, 8, 13, 18. Find the equation.',
          answer: 'y = 5x + 3',
          checkMode: 'auto',
          correctAnswer: 'y=5x+3',
          correctAnswers: ['y=5x+3', 'y = 5x + 3', 'y=5x +3', 'y = 5x+3'],
          explanation: 'Consecutive differences: 8−3=5, 13−8=5, 18−13=5 — the gradient is 5. When x=0, y=3, so the y-intercept is 3. Equation: y = 5x + 3 ✓',
        },
      ],

      videoPlaceholder:
        'Short video showing how to substitute input values into an equation to find outputs, and how to solve an equation backwards to find the input when the output is given',

      diagramPlaceholder:
        'A flow diagram showing an input x passing through an equation rule box to produce output y, with a return arrow showing that solving backwards recovers x from y',

      diagramSvg:
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="45" width="70" height="40" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="50" y="65" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">x</text><text x="50" y="79" font-size="8" fill="#2563eb" text-anchor="middle">(input)</text><rect x="125" y="45" width="70" height="40" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="160" y="60" font-size="7" font-weight="700" fill="#ea580c" text-anchor="middle">RULE</text><text x="160" y="75" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = mx + c</text><rect x="235" y="45" width="70" height="40" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="65" font-size="15" font-weight="700" fill="#16a34a" text-anchor="middle">y</text><text x="270" y="79" font-size="8" fill="#16a34a" text-anchor="middle">(output)</text><line x1="85" y1="65" x2="122" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,65 117,60 117,70" fill="#0f1f3d"/><text x="103" y="57" font-size="8" fill="#0f1f3d" text-anchor="middle">substitute</text><line x1="195" y1="65" x2="232" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="235,65 227,60 227,70" fill="#0f1f3d"/><text x="213" y="57" font-size="8" fill="#0f1f3d" text-anchor="middle">calculate</text><path d="M270,88 C270,125 50,125 50,88" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,3"/><polygon points="50,88 44,98 56,98" fill="#6b7280"/><text x="160" y="140" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">solve backwards (isolate x)</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENCE OF RELATIONSHIPS BY FORMULAE, EQUATIONS AND GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalence-of-relationships',
      title: 'Equivalence of Relationships by Formulae, Equations and Graphs',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">We determine, interpret and justify equivalence of different descriptions of the same relationship — verbally, in flow diagrams, tables, by formulae, by ${bl('equations')}, and now by ${or('graphs')} on a Cartesian plane.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('graph features')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gradient / intercept')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reading gradient and y-intercept from an equation</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1.05em;font-weight:700;text-align:center;color:#0f1f3d;margin-bottom:8px;">${bl('y')} = ${gr('m')}${bl('x')} + ${gr('c')}</p>` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('m')} = gradient</p>` +
        `<p style="font-size:13px;color:#374151;margin:0;">For every 1 unit increase in x, y increases by ${gr('m')}. A positive ${gr('m')} means the line slopes upward.</p>` +
        `</div>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('c')} = y-intercept</p>` +
        `<p style="font-size:13px;color:#374151;margin:0;">The ${or('graph')} crosses the y-axis at the point (0, ${gr('c')}). This is the value of y when x = 0.</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Checking equivalence between a table and an equation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${gr('gradient')} from the table — calculate the constant difference between consecutive y values divided by the constant difference between x values.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${gr('y-intercept')} — read the y value from the table when x = 0, or back-calculate if x = 0 is not in the table.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('equation')} and verify by substituting each x value from the table — all y values must match for the representations to be equivalent.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Straight-line vs curved graphs</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('linear equation')} (y = mx + c) always produces a straight ${or('line graph')}. A ${bl('quadratic equation')} (y = x²) produces a curved ${or('parabola graph')}. Knowing the form of the ${bl('equation')} tells you the shape of the ${or('graph')} before you plot any points.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A relationship is given as the equation y = 3x + 2. Describe how this would appear as a graph.',
          answer: `A straight-line ${or('graph')} with ${gr('y-intercept')} 2 and ${gr('gradient')} 3`,
          steps: [
            `Identify the form: the ${bl('equation')} y = 3x + 2 is in the form y = mx + c, so it produces a straight-line ${or('graph')}.`,
            `Read the ${gr('gradient')}: m = ${gr('3')}. For every 1 unit increase in x, y increases by 3. The line slopes upward steeply.`,
            `Read the ${gr('y-intercept')}: c = ${gr('2')}. The ${or('graph')} crosses the y-axis at the point (0, 2).`,
            `See the diagram below showing this line with the ${gr('y-intercept')} at (0, 2) and the ${gr('gradient')} illustrated with a rise/run triangle.`,
          ],
        },
        {
          question: 'Sipho has a table: x: 0, 1, 2, 3 and y: 4, 7, 10, 13. Write the equation and describe the graph.',
          answer: `${bl('Equation')}: y = 3x + 4. ${or('Graph')}: straight line, ${gr('y-intercept')} 4, ${gr('gradient')} 3`,
          steps: [
            `Find the ${gr('gradient')}: consecutive y differences are 7−4=3, 10−7=3, 13−10=3. The difference is constant at ${gr('3')}, confirming a linear relationship with gradient ${gr('3')}.`,
            `Find the ${gr('y-intercept')}: when x = 0, y = 4. So the ${gr('y-intercept')} is ${gr('4')}.`,
            `Write the ${bl('equation')}: y = ${gr('3')}x + ${gr('4')}.`,
            `Describe the ${or('graph')}: the ${or('graph')} is a straight line with a ${gr('y-intercept')} of 4 and a ${gr('gradient')} of 3 — the line slopes upward and crosses the y-axis at 4.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's table is: x: 1, 2, 3, 4 and y: 5, 11, 17, 23. Find the equation and describe the graph.",
          answer: 'Equation: y = 6x − 1. This would graph as a straight line with gradient 6 and y-intercept −1.',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Generate a table of ordered pairs using y = 2x + 3 for x = −1, 0, 1, 2.',
          answer: '(−1, 1), (0, 3), (1, 5), (2, 7).',
          checkMode: 'self',
        },

        // ── Q8 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Using y = −3x + 8, find y when x = 2.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Substitute x = 2: y = −3(2) + 8 = −6 + 8 = 2 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo generates ordered pairs using y = x² + 2 for x = −2, −1, 0, 1, 2 and gets (−2, 6), (−1, 3), (0, 2), (1, 3), (2, 6). Check his table.',
          answer: 'Correct — substituting each x value into x² + 2 gives the listed y values, forming a symmetric parabola shape.',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Using y = 7x − 15, find x when y = 27.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Substitute y = 27: 27 = 7x − 15. Add 15: 42 = 7x. Divide by 7: x = 6 ✓',
        },
      ],

      videoPlaceholder:
        'Short video showing how to move between verbal descriptions, tables, equations and straight-line graphs, reading gradient and y-intercept from each form',

      diagramPlaceholder:
        'A Cartesian plane showing the line y = 3x + 2, with the y-intercept at (0, 2) clearly marked and the gradient illustrated with a rise/run triangle',

      diagramSvg:
        '<svg viewBox="0 0 170 220" xmlns="http://www.w3.org/2000/svg"><text x="95" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">y = 3x + 2</text><line x1="15" y1="190" x2="150" y2="190" stroke="#0f1f3d" stroke-width="2"/><polygon points="154,190 146,186 146,194" fill="#0f1f3d"/><text x="150" y="184" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="205" x2="60" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,36 56,44 64,44" fill="#0f1f3d"/><text x="66" y="44" font-size="9" fill="#0f1f3d">y</text><line x1="45" y1="205" x2="100" y2="40" stroke="#2563eb" stroke-width="2.5"/><circle cx="60" cy="160" r="4" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><text x="66" y="158" font-size="9" fill="#16a34a" font-weight="700">(0, 2)</text><line x1="60" y1="160" x2="75" y2="160" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><line x1="75" y1="160" x2="75" y2="115" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><text x="67" y="173" font-size="8" fill="#16a34a" font-weight="700" text-anchor="middle">run 1</text><text x="80" y="140" font-size="8" fill="#16a34a" font-weight="700">rise 3</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GENERATING TABLES OF ORDERED PAIRS FOR GRAPHING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'generating-tables-of-ordered-pairs',
      title: 'Generating Tables of Ordered Pairs for Graphing',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We use substitution in equations to generate tables of ${or('ordered pairs')}, preparing data for plotting points and drawing graphs on the Cartesian plane.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ordered pairs')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for generating a table</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">List your chosen ${bl('x-values')} in a table row.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Substitute each ${bl('x-value')} into the equation to calculate each ${gr('y-value')}. Show your substitution clearly.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write each ${or('ordered pair')} as (x, y). These are the points you will plot on the Cartesian plane.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Straight lines vs parabolas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Linear (y = mx + c)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('y-values')} change by a constant amount for each step in ${bl('x')}. When plotted, the ${or('ordered pairs')} form a <strong>straight line</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Quadratic (y = x²)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('y-values')} change by increasing amounts. When plotted, the ${or('ordered pairs')} form a <strong>curved parabola</strong> shape.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Include negative x-values</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always include at least one negative ${bl('x-value')} in your table. This gives a fuller picture of the graph on both sides of the y-axis, and reveals symmetry in parabolas.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using y = −2x + 5, generate ordered pairs for x = −1, 0, 1, 2.',
          answer: `${or('(−1, 7), (0, 5), (1, 3), (2, 1)')}`,
          steps: [
            `x = ${bl('−1')}: y = −2(${bl('−1')}) + 5 = 2 + 5 = ${gr('7')}. Ordered pair: ${or('(−1, 7)')}`,
            `x = ${bl('0')}: y = −2(${bl('0')}) + 5 = 0 + 5 = ${gr('5')}. Ordered pair: ${or('(0, 5)')}`,
            `x = ${bl('1')}: y = −2(${bl('1')}) + 5 = −2 + 5 = ${gr('3')}. Ordered pair: ${or('(1, 3)')}`,
            `x = ${bl('2')}: y = −2(${bl('2')}) + 5 = −4 + 5 = ${gr('1')}. Ordered pair: ${or('(2, 1)')}`,
            `<strong>Table of ${or('ordered pairs')}:</strong> ${or('(−1, 7)')}, ${or('(0, 5)')}, ${or('(1, 3)')}, ${or('(2, 1)')}. See the diagram below showing these points plotted and connected by a straight line.`,
          ],
        },
        {
          question: 'Lerato uses y = x² − 4 for x = −2, −1, 0, 1, 2. Generate the table.',
          answer: `${or('(−2, 0), (−1, −3), (0, −4), (1, −3), (2, 0)')}`,
          steps: [
            `x = ${bl('−2')}: y = (${bl('−2')})² − 4 = 4 − 4 = ${gr('0')}. Ordered pair: ${or('(−2, 0)')}`,
            `x = ${bl('−1')}: y = (${bl('−1')})² − 4 = 1 − 4 = ${gr('−3')}. Ordered pair: ${or('(−1, −3)')}`,
            `x = ${bl('0')}: y = (${bl('0')})² − 4 = 0 − 4 = ${gr('−4')}. Ordered pair: ${or('(0, −4)')}`,
            `x = ${bl('1')}: y = (${bl('1')})² − 4 = 1 − 4 = ${gr('−3')}. Ordered pair: ${or('(1, −3)')}`,
            `x = ${bl('2')}: y = (${bl('2')})² − 4 = 4 − 4 = ${gr('0')}. Ordered pair: ${or('(2, 0)')}`,
            `Notice the symmetry: the ${gr('y-values')} for x = −2 and x = 2 are equal. This creates a curved <strong>parabola</strong> shape, not a straight line.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says the equation y = 4x + 6 and the table x: 1, 2, 3 and y: 10, 14, 18 describe the same relationship. Is she correct? Explain.',
          answer: 'Yes — substituting x = 1, 2, 3 into y = 4x + 6 gives exactly 10, 14, 18, confirming the same relationship.',
          checkMode: 'self',
        },

        // ── Q12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Generate ordered pairs using y = −2x + 1 for x = −1, 0, 1, 2.',
          answer: '(−1, 3), (0, 1), (1, −1), (2, −3)',
          checkMode: 'auto',
          correctAnswer: '(-1,3),(0,1),(1,-1),(2,-3)',
          correctAnswers: ['(-1,3),(0,1),(1,-1),(2,-3)', '(-1, 3), (0, 1), (1, -1), (2, -3)', '(−1,3),(0,1),(1,−1),(2,−3)', '(-1,3), (0,1), (1,-1), (2,-3)'],
          explanation: 'x=−1: y=−2(−1)+1=3. x=0: y=1. x=1: y=−2+1=−1. x=2: y=−4+1=−3. Pairs: (−1,3),(0,1),(1,−1),(2,−3) ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho's relationship is described verbally as 'triple the input, then add 7'. Write the equation and find y when x = 5.",
          answer: 'y = 3x + 7, y = 22',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write the equation',
              correctAnswer: 'y=3x+7',
              correctAnswers: ['y=3x+7', 'y = 3x + 7', 'y=3x +7'],
              explanation: '"Triple the input" means multiply x by 3; "then add 7" means add 7. Equation: y = 3x + 7 ✓',
            },
            {
              label: 'b) Find y when x = 5',
              correctAnswer: '22',
              explanation: 'Substitute x = 5: y = 3(5) + 7 = 15 + 7 = 22 ✓',
            },
          ],
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A table shows x: 0, 2, 4, 6 and y: 1, 9, 17, 25. Find the equation.',
          answer: 'y = 4x + 1',
          checkMode: 'auto',
          correctAnswer: 'y=4x+1',
          correctAnswers: ['y=4x+1', 'y = 4x + 1', 'y=4x +1'],
          explanation: 'x increases by 2 each step; y increases by 8. Gradient = 8 ÷ 2 = 4. When x=0, y=1, so y-intercept is 1. Equation: y = 4x + 1. Verify: x=2 → 9 ✓, x=4 → 17 ✓, x=6 → 25 ✓',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says a graph of y = x² will look identical to a graph of y = 2x. Is she correct? Explain.',
          answer: 'No — y = x² produces a curved parabola shape, while y = 2x produces a straight line; their graphs are fundamentally different shapes.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to substitute x-values into an equation to build a table of ordered pairs and then plot those points on a Cartesian plane',

      diagramPlaceholder:
        'A Cartesian plane with the points (−1, 7), (0, 5), (1, 3), (2, 1) plotted and connected by a straight line',

      diagramSvg:
        '<svg viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg"><text x="100" y="10" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">y = −2x + 5</text><line x1="20" y1="170" x2="140" y2="170" stroke="#0f1f3d" stroke-width="2"/><polygon points="144,170 136,166 136,174" fill="#0f1f3d"/><text x="140" y="184" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="195" x2="60" y2="15" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,11 56,19 64,19" fill="#0f1f3d"/><text x="66" y="19" font-size="9" fill="#0f1f3d">y</text><text x="50" y="183" font-size="8" fill="#374151">O</text><line x1="40" y1="30" x2="100" y2="150" stroke="#2563eb" stroke-width="2.5"/><circle cx="40" cy="30" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="16" y="26" font-size="8" font-weight="700" fill="#ea580c">(−1, 7)</text><circle cx="60" cy="70" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="66" y="68" font-size="8" font-weight="700" fill="#ea580c">(0, 5)</text><circle cx="80" cy="110" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="86" y="108" font-size="8" font-weight="700" fill="#ea580c">(1, 3)</text><circle cx="100" cy="150" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="106" y="148" font-size="8" font-weight="700" fill="#ea580c">(2, 1)</text></svg>',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered functions and relationships.' },
    { minScore: 11, message: 'Great work! You have a strong understanding. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort. Review the sections where you dropped marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again section by section, then try once more.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Finding the output given the input (substitute into equation)
    // Block 2 (3-5):   Finding the input given the output (solve equation backwards)
    // Block 3 (6-9):   Flow diagrams / number machines [DIAGRAM-FLAGGED]
    // Block 4 (10-13): Equivalence — finding the equation from a table of values
    // Block 5 (14-16): Graph features (gradient/y-intercept) and ordered pairs
    // Block 6 (17-19): Generating tables incl. quadratics / error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Finding the output given the input (Easy)
        { difficulty: 'Easy', question: 'Using y = 4x + 3, find y when x = 6.', checkMode: 'auto', options: ['27', '24', '42', '21'], correctIndex: 0, explanation: 'Substitute x = 6: y = 4(6) + 3 = 24 + 3 = 27. (24 forgets to add 3; 42 wrongly adds 3 to x before multiplying by 4; 21 subtracts 3 instead of adding it.)' },
        { difficulty: 'Easy', question: 'Using y = 7x − 5, find y when x = 4.', checkMode: 'auto', options: ['28', '23', '33', '63'], correctIndex: 1, explanation: 'Substitute x = 4: y = 7(4) − 5 = 28 − 5 = 23. (28 forgets to subtract 5; 33 adds 5 instead of subtracting; 63 wrongly adds 5 to x before multiplying by 7.)' },
        { difficulty: 'Easy', question: 'Using y = −3x + 10, find y when x = 5.', checkMode: 'auto', options: ['-15', '25', '-5', '-25'], correctIndex: 2, explanation: 'Substitute x = 5: y = −3(5) + 10 = −15 + 10 = −5. (−15 forgets to add 10; 25 drops the negative sign on −3x; −25 subtracts 10 instead of adding it.)' },

        // Block 2 — Finding the input given the output (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Using y = 5x + 2, find x when y = 37.', checkMode: 'auto', options: ['35', '9', '7.4', '7'], correctIndex: 3, explanation: 'Substitute y = 37: 37 = 5x + 2. Subtract 2: 35 = 5x. Divide by 5: x = 7. (35 stops after subtracting, forgetting to divide; 9 adds 2 instead of subtracting before dividing; 7.4 divides 37 by 5 without subtracting 2 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 3x − 8, find x when y = 13.', checkMode: 'auto', options: ['7', '21', '1.67', '4.33'], correctIndex: 0, explanation: 'Substitute y = 13: 13 = 3x − 8. Add 8: 21 = 3x. Divide by 3: x = 7. (21 stops after adding 8 without dividing; 1.67 subtracts 8 instead of adding before dividing; 4.33 divides 13 by 3 without adding 8 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 2x + 15, find x when y = 7.', checkMode: 'auto', options: ['-8', '-4', '11', '3.5'], correctIndex: 1, explanation: 'Substitute y = 7: 7 = 2x + 15. Subtract 15: −8 = 2x. Divide by 2: x = −4. (−8 stops after subtracting, forgetting to divide; 11 adds 15 instead of subtracting before dividing; 3.5 divides 7 by 2 without subtracting 15 first.)' },

        // Block 3 — Flow diagrams / number machines [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 7 → ×3 → +4 → output. Find the output.', checkMode: 'auto', options: ['21', '33', '25', '24'], correctIndex: 2, explanation: 'Following the flow diagram: 7 × 3 = 21, then 21 + 4 = 25. (21 stops after the multiplication step, forgetting to add 4; 33 mistakenly adds 4 to the input before multiplying by 3; 24 misreads the second box as +3 instead of +4.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">7</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+4</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → −6 → ×2 → output 16. Find the input x.', checkMode: 'auto', options: ['2', '22', '8', '14'], correctIndex: 3, explanation: '(x − 6) × 2 = 16, so x − 6 = 8, giving x = 14. (2 subtracts 6 instead of adding it back; 22 adds 6 to 16 without dividing by 2 first; 8 stops after dividing, forgetting to add 6 back.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">16</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×5 → −2 → output. The table shows: input 3 gives output 13, and input 6 gives output 28. Find the output for input 9.', checkMode: 'auto', options: ['43', '45', '35', '47'], correctIndex: 0, explanation: 'Rule: output = 5 × input − 2. For input 9: 5(9) − 2 = 45 − 2 = 43. (45 forgets to subtract 2; 35 wrongly subtracts 2 from the input before multiplying; 47 adds 2 instead of subtracting.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">13</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">6</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">28</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, has the rule "double the input, then add 6". If the input is 11, find the output.', checkMode: 'auto', options: ['22', '28', '34', '17'], correctIndex: 1, explanation: 'Double 11: 11 × 2 = 22. Add 6: 22 + 6 = 28. (22 stops after doubling, forgetting to add 6; 34 wrongly adds 6 to the input before doubling; 17 adds 6 to the input but forgets to double.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">11</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+6</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Block 4 — Equivalence: finding the equation from a table of values (Medium)
        { difficulty: 'Medium', question: 'A table shows x: 0, 1, 2, 3 and y: 2, 6, 10, 14. Find the equation.', checkMode: 'auto', options: ['y=4x+6', 'y=3x+2', 'y=4x+2', 'y=2x+4'], correctIndex: 2, explanation: 'Consecutive differences: 6−2=4, 10−6=4, 14−10=4, so the gradient is 4. When x=0, y=2, so the y-intercept is 2. Equation: y = 4x + 2. (y=4x+6 mistakes the y-value at x=1 for the y-intercept; y=3x+2 miscalculates the gradient; y=2x+4 swaps the gradient and intercept.)' },
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 9, 13, 17, 21. Find the equation.', checkMode: 'auto', options: ['y=4x+9', 'y=5x+4', 'y=3x+6', 'y=4x+5'], correctIndex: 3, explanation: 'Consecutive differences: 13−9=4, 17−13=4, 21−17=4, so the gradient is 4. Since x starts at 1, back-calculate the y-intercept: 9 = 4(1) + c, so c = 5. Equation: y = 4x + 5. (y=4x+9 mistakes the y-value at x=1 for the y-intercept instead of back-calculating; y=5x+4 swaps the gradient and intercept; y=3x+6 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: 'A table shows x: 0, 5, 10, 15 and y: 3, 23, 43, 63. Find the equation.', checkMode: 'auto', options: ['y=4x+3', 'y=20x+3', 'y=4x+23', 'y=5x+3'], correctIndex: 0, explanation: 'x increases by 5 each step; y increases by 20. Gradient = 20 ÷ 5 = 4. When x=0, y=3, so the y-intercept is 3. Equation: y = 4x + 3. (y=20x+3 forgets to divide the y-difference by the x-step; y=4x+23 mistakes the second y-value for the intercept; y=5x+3 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: "Lerato's relationship is described verbally as 'multiply the input by 6, then subtract 4'. Write the equation and find y when x = 3.", checkMode: 'auto', correctAnswers: ['y=6x-4, y=14', 'y = 6x - 4, y = 14'], answer: 'y = 6x − 4, y = 14', parts: [
          { label: 'a) Write the equation', correctAnswer: 'y=6x-4', correctAnswers: ['y=6x-4', 'y = 6x - 4', 'y=6x −4', 'y=6x−4'], explanation: '"Multiply the input by 6" means multiply x by 6; "then subtract 4" means subtract 4. Equation: y = 6x − 4 ✓' },
          { label: 'b) Find y when x = 3', correctAnswer: '14', explanation: 'Substitute x = 3: y = 6(3) − 4 = 18 − 4 = 14 ✓' },
        ] },

        // Block 5 — Graph features (gradient/y-intercept) and ordered pairs (Medium)
        { difficulty: 'Medium', question: 'An equation is y = 7x − 2. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=-2, y-intercept=7', 'gradient=7, y-intercept=-2', 'gradient=7, y-intercept=2', 'gradient=-7, y-intercept=-2'], correctIndex: 1, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = 7 and c = −2, so gradient = 7 and y-intercept = −2. (The other options swap the gradient and intercept, or lose the negative sign on the intercept or gradient.)' },
        { difficulty: 'Medium', question: 'An equation is y = −4x + 9. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=9, y-intercept=-4', 'gradient=4, y-intercept=9', 'gradient=-4, y-intercept=9', 'gradient=-4, y-intercept=-9'], correctIndex: 2, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = −4 and c = 9, so gradient = −4 and y-intercept = 9. (The other options swap the gradient and intercept, drop the negative sign on the gradient, or flip the sign of the intercept.)' },
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = 3x − 1 for x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,-3),(0,0),(1,3),(2,6)', '(-1,-2),(0,1),(1,4),(2,7)', '(-1,2),(0,-1),(1,2),(2,5)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 3, explanation: 'x=−1: y=3(−1)−1=−4. x=0: y=−1. x=1: y=3−1=2. x=2: y=6−1=5. Pairs: (−1,−4),(0,−1),(1,2),(2,5). (The first option omits the −1 entirely; the second treats −1 as +1 throughout; the third makes a sign error only at x=−1.)' },

        // Block 6 — Generating tables incl. quadratics / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Sipho generates a table using y = x² − 1 for x = −2, −1, 0, 1, 2 and gets (−2, 3), (−1, 0), (0, −1), (1, 0), (2, 3). Which statement about his table is correct?', checkMode: 'auto', options: ['His table is correct — each y-value matches x² − 1, forming a symmetric parabola.', 'He made an error at x = 0 — the correct value is y = 1, not y = −1.', 'He made an error at x = −2 and x = 2 — the correct values are y = 5, not y = 3.', 'His table cannot be checked without a graph.'], correctIndex: 0, explanation: 'Substituting each x value: (−2)²−1=3, (−1)²−1=0, 0²−1=−1, 1²−1=0, 2²−1=3 — all match his table, and the symmetry (equal y-values for x=−2/2 and x=−1/1) is correct. (Option B misreads 0²−1 as 1; option C incorrectly recalculates (±2)²−1 as 5; a table can always be checked by direct substitution.)' },
        { difficulty: 'Hard', question: 'Thabo says the equation y = 5x + 4 and the table x: 1, 2, 3 and y: 9, 14, 19 describe the same relationship. Which statement is correct?', checkMode: 'auto', options: ['He is incorrect — substituting x = 1 into y = 5x + 4 gives y = 5, not 9.', 'He is correct — substituting x = 1, 2, 3 into y = 5x + 4 gives exactly 9, 14, 19.', 'He is incorrect — the table has a gradient of 4, not 5.', 'It is impossible to tell without more x-values.'], correctIndex: 1, explanation: 'Substituting x = 1, 2, 3 into y = 5x + 4 gives 9, 14, 19 exactly, matching the table. (Option A miscalculates 5(1)+4 as 5; option C misreads the table\'s gradient, which is actually 5 since consecutive y-values rise by 5; three matching points are already enough to confirm equivalence for a linear relationship.)' },
        { difficulty: 'Hard', question: 'Amahle says a graph of y = x² − 1 will look identical to a graph of y = 4x + 2. Which statement is correct?', checkMode: 'auto', options: ['She is correct — both equations produce straight lines.', 'She is correct — both equations produce curved parabolas.', 'She is incorrect — y = x² − 1 produces a curved parabola, while y = 4x + 2 produces a straight line.', 'She is incorrect — both are parabolas, but with different widths.'], correctIndex: 2, explanation: 'y = x² − 1 is quadratic, so it produces a curved parabola shape. y = 4x + 2 is linear (y = mx + c form), so it produces a straight line. Their graphs are fundamentally different shapes. (Options A and B wrongly assume the two equations share the same graph type; option D wrongly calls y = 4x + 2 a parabola.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding inputs, outputs and equations for functions and relationships.' },
        { minScore: 15, message: 'Great work! Review any missed questions on flow diagrams or tables of values and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on substitution and equivalence, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Finding the output given the input (Easy)
        { difficulty: 'Easy', question: 'Using y = 5x − 2, find y when x = 7.', checkMode: 'auto', options: ['35', '25', '37', '33'], correctIndex: 3, explanation: 'Substitute x = 7: y = 5(7) − 2 = 35 − 2 = 33. (35 forgets to subtract 2; 25 wrongly subtracts 2 from x before multiplying; 37 adds 2 instead of subtracting.)' },
        { difficulty: 'Easy', question: 'Using y = 6x + 9, find y when x = 3.', checkMode: 'auto', options: ['27', '18', '72', '9'], correctIndex: 0, explanation: 'Substitute x = 3: y = 6(3) + 9 = 18 + 9 = 27. (18 forgets to add 9; 72 wrongly adds 9 to x before multiplying; 9 subtracts 9 instead of adding it.)' },
        { difficulty: 'Easy', question: 'Using y = −2x + 13, find y when x = 6.', checkMode: 'auto', options: ['-12', '1', '25', '-25'], correctIndex: 1, explanation: 'Substitute x = 6: y = −2(6) + 13 = −12 + 13 = 1. (−12 forgets to add 13; 25 drops the negative sign on −2x; −25 subtracts 13 instead of adding it.)' },

        // Block 2 — Finding the input given the output (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Using y = 4x + 7, find x when y = 39.', checkMode: 'auto', options: ['32', '11.5', '8', '9.75'], correctIndex: 2, explanation: 'Substitute y = 39: 39 = 4x + 7. Subtract 7: 32 = 4x. Divide by 4: x = 8. (32 stops after subtracting, forgetting to divide; 11.5 adds 7 instead of subtracting before dividing; 9.75 divides 39 by 4 without subtracting 7 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 6x − 11, find x when y = 13.', checkMode: 'auto', options: ['24', '0.33', '0.83', '4'], correctIndex: 3, explanation: 'Substitute y = 13: 13 = 6x − 11. Add 11: 24 = 6x. Divide by 6: x = 4. (24 stops after adding 11, forgetting to divide; 0.33 subtracts 11 instead of adding before dividing; 0.83 divides 13 by 6 without adding 11 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 3x + 18, find x when y = 6.', checkMode: 'auto', options: ['-4', '-12', '8', '2'], correctIndex: 0, explanation: 'Substitute y = 6: 6 = 3x + 18. Subtract 18: −12 = 3x. Divide by 3: x = −4. (−12 stops after subtracting, forgetting to divide; 8 adds 18 instead of subtracting before dividing; 2 divides 6 by 3 without subtracting 18 first.)' },

        // Block 3 — Flow diagrams / number machines [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 9 → ×2 → +7 → output. Find the output.', checkMode: 'auto', options: ['18', '25', '32', '24'], correctIndex: 1, explanation: 'Following the flow diagram: 9 × 2 = 18, then 18 + 7 = 25. (18 stops after multiplying, forgetting to add 7; 32 wrongly adds 7 to the input before multiplying by 2; 24 misreads the second box as +6 instead of +7.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">9</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+7</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → −5 → ×3 → output 24. Find the input x.', checkMode: 'auto', options: ['8', '29', '13', '3'], correctIndex: 2, explanation: '(x − 5) × 3 = 24, so x − 5 = 8, giving x = 13. (8 stops after dividing, forgetting to add 5 back; 29 adds 5 to 24 without dividing by 3 first; 3 subtracts 5 instead of adding it back.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">24</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×6 → −1 → output. The table shows: input 2 gives output 11, and input 5 gives output 29. Find the output for input 10.', checkMode: 'auto', options: ['60', '54', '61', '59'], correctIndex: 3, explanation: 'Rule: output = 6 × input − 1. For input 10: 6(10) − 1 = 60 − 1 = 59. (60 forgets to subtract 1; 54 wrongly subtracts 1 from the input before multiplying; 61 adds 1 instead of subtracting.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−1</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">11</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">29</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, has the rule "triple the input, then subtract 2". If the input is 8, find the output.', checkMode: 'auto', options: ['22', '24', '18', '6'], correctIndex: 0, explanation: 'Triple 8: 8 × 3 = 24. Subtract 2: 24 − 2 = 22. (24 stops after tripling, forgetting to subtract 2; 18 wrongly subtracts 2 from the input before tripling; 6 subtracts 2 from the input but forgets to triple.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">8</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Block 4 — Equivalence: finding the equation from a table of values (Medium)
        { difficulty: 'Medium', question: 'A table shows x: 0, 1, 2, 3 and y: 4, 7, 10, 13. Find the equation.', checkMode: 'auto', options: ['y=3x+7', 'y=3x+4', 'y=4x+4', 'y=4x+3'], correctIndex: 1, explanation: 'Consecutive differences: 7−4=3, 10−7=3, 13−10=3, so the gradient is 3. When x=0, y=4, so the y-intercept is 4. Equation: y = 3x + 4. (y=3x+7 mistakes the y-value at x=1 for the y-intercept; y=4x+4 miscalculates the gradient; y=4x+3 swaps the gradient and intercept.)' },
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 10, 13, 16, 19. Find the equation.', checkMode: 'auto', options: ['y=3x+10', 'y=7x+3', 'y=3x+7', 'y=2x+8'], correctIndex: 2, explanation: 'Consecutive differences: 13−10=3, 16−13=3, 19−16=3, so the gradient is 3. Since x starts at 1, back-calculate the y-intercept: 10 = 3(1) + c, so c = 7. Equation: y = 3x + 7. (y=3x+10 mistakes the y-value at x=1 for the y-intercept instead of back-calculating; y=7x+3 swaps the gradient and intercept; y=2x+8 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: 'A table shows x: 0, 3, 6, 9 and y: 2, 14, 26, 38. Find the equation.', checkMode: 'auto', options: ['y=12x+2', 'y=4x+14', 'y=3x+2', 'y=4x+2'], correctIndex: 3, explanation: 'x increases by 3 each step; y increases by 12. Gradient = 12 ÷ 3 = 4. When x=0, y=2, so the y-intercept is 2. Equation: y = 4x + 2. (y=12x+2 forgets to divide the y-difference by the x-step; y=4x+14 mistakes the second y-value for the intercept; y=3x+2 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: "Sipho's relationship is described verbally as 'multiply the input by 5, then subtract 7'. Write the equation and find y when x = 4.", checkMode: 'auto', correctAnswers: ['y=5x-7, y=13', 'y = 5x - 7, y = 13'], answer: 'y = 5x − 7, y = 13', parts: [
          { label: 'a) Write the equation', correctAnswer: 'y=5x-7', correctAnswers: ['y=5x-7', 'y = 5x - 7', 'y=5x −7', 'y=5x−7'], explanation: '"Multiply the input by 5" means multiply x by 5; "then subtract 7" means subtract 7. Equation: y = 5x − 7 ✓' },
          { label: 'b) Find y when x = 4', correctAnswer: '13', explanation: 'Substitute x = 4: y = 5(4) − 7 = 20 − 7 = 13 ✓' },
        ] },

        // Block 5 — Graph features (gradient/y-intercept) and ordered pairs (Medium)
        { difficulty: 'Medium', question: 'An equation is y = 6x + 5. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=6, y-intercept=5', 'gradient=5, y-intercept=6', 'gradient=-6, y-intercept=5', 'gradient=6, y-intercept=-5'], correctIndex: 0, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = 6 and c = 5, so gradient = 6 and y-intercept = 5. (The other options swap the gradient and intercept, or wrongly attach a negative sign to one of the values.)' },
        { difficulty: 'Medium', question: 'An equation is y = −3x + 11. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=11, y-intercept=-3', 'gradient=-3, y-intercept=11', 'gradient=3, y-intercept=11', 'gradient=-3, y-intercept=-11'], correctIndex: 1, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = −3 and c = 11, so gradient = −3 and y-intercept = 11. (The other options swap the gradient and intercept, drop the negative sign on the gradient, or flip the sign of the intercept.)' },
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = −3x + 2 for x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,3),(0,0),(1,-3),(2,-6)', '(-1,-1),(0,1),(1,4),(2,7)', '(-1,5),(0,2),(1,-1),(2,-4)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 2, explanation: 'x=−1: y=−3(−1)+2=5. x=0: y=2. x=1: y=−3+2=−1. x=2: y=−6+2=−4. Pairs: (−1,5),(0,2),(1,−1),(2,−4). (The first option omits the +2 entirely; the second flips the sign of the gradient throughout; the fourth mixes up the rule with y=3x−1.)' },

        // Block 6 — Generating tables incl. quadratics / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Lerato generates a table using y = x² + 2 for x = −2, −1, 0, 1, 2 and gets (−2, 6), (−1, 3), (0, 2), (1, 3), (2, 6). Which statement about her table is correct?', checkMode: 'auto', options: ['She made an error at x = 0 — the correct value is y = 0, not y = 2.', 'She made an error at x = −2 and x = 2 — the correct values are y = 4, not y = 6.', 'Her table is incorrect because the y-values should keep increasing, not repeat.', 'Her table is correct — each y-value matches x² + 2, forming a symmetric parabola.'], correctIndex: 3, explanation: 'Substituting each x value: (−2)²+2=6, (−1)²+2=3, 0²+2=2, 1²+2=3, 2²+2=6 — all match her table. The repeated y-values for x=±1 and x=±2 are expected because of the parabola\'s symmetry, not an error. (Option A misreads 0²+2 as 2 being wrong when it is correct; option B miscalculates (±2)²+2 as 6 when checking against 4; option C wrongly assumes a quadratic table cannot repeat values.)' },
        { difficulty: 'Hard', question: 'Bongani says the equation y = 4x + 6 and the table x: 1, 2, 3 and y: 10, 14, 18 describe the same relationship. Which statement is correct?', checkMode: 'auto', options: ['He is correct — substituting x = 1, 2, 3 into y = 4x + 6 gives exactly 10, 14, 18.', 'He is incorrect — substituting x = 1 into y = 4x + 6 gives y = 6, not 10.', 'He is incorrect — the table has a gradient of 6, not 4.', 'It cannot be determined without knowing the y-intercept of the table.'], correctIndex: 0, explanation: 'Substituting x = 1, 2, 3 into y = 4x + 6 gives 10, 14, 18 exactly, matching the table. (Option B miscalculates 4(1)+6 as 6; option C misreads the table\'s gradient, which is actually 4 since consecutive y-values rise by 4; the y-intercept is not needed once three matching points confirm equivalence.)' },
        { difficulty: 'Hard', question: 'Zanele says a graph of y = x² + 2 will look identical to a graph of y = 3x + 4. Which statement is correct?', checkMode: 'auto', options: ['She is correct — both equations produce straight lines.', 'She is incorrect — y = x² + 2 produces a curved parabola, while y = 3x + 4 produces a straight line.', 'She is correct — both equations produce curved parabolas.', 'She is incorrect — both are parabolas, but shifted differently.'], correctIndex: 1, explanation: 'y = x² + 2 is quadratic, so it produces a curved parabola shape. y = 3x + 4 is linear (y = mx + c form), so it produces a straight line. Their graphs are fundamentally different shapes. (Options A and C wrongly assume the two equations share the same graph type; option D wrongly calls y = 3x + 4 a parabola.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding inputs, outputs and equations for functions and relationships.' },
        { minScore: 15, message: 'Great work! Review any missed questions on flow diagrams or tables of values and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on substitution and equivalence, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Finding the output given the input (Easy)
        { difficulty: 'Easy', question: 'Using y = 6x − 7, find y when x = 5.', checkMode: 'auto', options: ['30', '-12', '23', '37'], correctIndex: 2, explanation: 'Substitute x = 5: y = 6(5) − 7 = 30 − 7 = 23. (30 forgets to subtract 7; −12 wrongly subtracts 7 from x before multiplying; 37 adds 7 instead of subtracting.)' },
        { difficulty: 'Easy', question: 'Using y = 8x + 4, find y when x = 2.', checkMode: 'auto', options: ['16', '48', '12', '20'], correctIndex: 3, explanation: 'Substitute x = 2: y = 8(2) + 4 = 16 + 4 = 20. (16 forgets to add 4; 48 wrongly adds 4 to x before multiplying; 12 subtracts 4 instead of adding it.)' },
        { difficulty: 'Easy', question: 'Using y = −5x + 21, find y when x = 4.', checkMode: 'auto', options: ['1', '-20', '41', '-41'], correctIndex: 0, explanation: 'Substitute x = 4: y = −5(4) + 21 = −20 + 21 = 1. (−20 forgets to add 21; 41 drops the negative sign on −5x; −41 subtracts 21 instead of adding it.)' },

        // Block 2 — Finding the input given the output (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Using y = 7x + 3, find x when y = 45.', checkMode: 'auto', options: ['42', '6', '6.86', '6.43'], correctIndex: 1, explanation: 'Substitute y = 45: 45 = 7x + 3. Subtract 3: 42 = 7x. Divide by 7: x = 6. (42 stops after subtracting, forgetting to divide; 6.86 adds 3 instead of subtracting before dividing; 6.43 divides 45 by 7 without subtracting 3 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 9x − 14, find x when y = 13.', checkMode: 'auto', options: ['27', '-0.11', '3', '1.44'], correctIndex: 2, explanation: 'Substitute y = 13: 13 = 9x − 14. Add 14: 27 = 9x. Divide by 9: x = 3. (27 stops after adding 14, forgetting to divide; −0.11 subtracts 14 instead of adding before dividing; 1.44 divides 13 by 9 without adding 14 first.)' },
        { difficulty: 'Easy-Medium', question: 'Using y = 4x + 20, find x when y = 8.', checkMode: 'auto', options: ['-12', '7', '2', '-3'], correctIndex: 3, explanation: 'Substitute y = 8: 8 = 4x + 20. Subtract 20: −12 = 4x. Divide by 4: x = −3. (−12 stops after subtracting, forgetting to divide; 7 adds 20 instead of subtracting before dividing; 2 divides 8 by 4 without subtracting 20 first.)' },

        // Block 3 — Flow diagrams / number machines [DIAGRAM-FLAGGED]
        { difficulty: 'Easy', question: 'A flow diagram, as shown, has input 8 → ×4 → +3 → output. Find the output.', checkMode: 'auto', options: ['35', '32', '44', '34'], correctIndex: 0, explanation: 'Following the flow diagram: 8 × 4 = 32, then 32 + 3 = 35. (32 stops after multiplying, forgetting to add 3; 44 wrongly adds 3 to the input before multiplying by 4; 34 misreads the second box as +2 instead of +3.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">8</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'A flow diagram, as shown, shows input x → −7 → ×5 → output 30. Find the input x.', checkMode: 'auto', options: ['6', '13', '37', '-1'], correctIndex: 1, explanation: '(x − 7) × 5 = 30, so x − 7 = 6, giving x = 13. (6 stops after dividing, forgetting to add 7 back; 37 adds 7 to 30 without dividing by 5 first; −1 subtracts 7 instead of adding it back.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−7</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">30</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, applies input → ×4 → +3 → output. The table shows: input 2 gives output 11, and input 5 gives output 23. Find the output for input 10.', checkMode: 'auto', options: ['40', '52', '43', '37'], correctIndex: 2, explanation: 'Rule: output = 4 × input + 3. For input 10: 4(10) + 3 = 40 + 3 = 43. (40 forgets to add 3; 52 wrongly adds 3 to the input before multiplying; 37 subtracts 3 instead of adding.)', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Known input/output pairs:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">input</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">output</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">11</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },
        { difficulty: 'Hard', question: 'A flow diagram, as shown, has the rule "double the input, then add 9". If the input is 6, find the output.', checkMode: 'auto', options: ['12', '30', '15', '21'], correctIndex: 3, explanation: 'Double 6: 6 × 2 = 12. Add 9: 12 + 9 = 21. (12 stops after doubling, forgetting to add 9; 30 wrongly adds 9 to the input before doubling; 15 adds 9 to the input but forgets to double.)', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">input</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">6</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+9</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">output</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },

        // Block 4 — Equivalence: finding the equation from a table of values (Medium)
        { difficulty: 'Medium', question: 'A table shows x: 0, 1, 2, 3 and y: 5, 9, 13, 17. Find the equation.', checkMode: 'auto', options: ['y=4x+5', 'y=4x+9', 'y=5x+5', 'y=5x+4'], correctIndex: 0, explanation: 'Consecutive differences: 9−5=4, 13−9=4, 17−13=4, so the gradient is 4. When x=0, y=5, so the y-intercept is 5. Equation: y = 4x + 5. (y=4x+9 mistakes the y-value at x=1 for the y-intercept; y=5x+5 miscalculates the gradient; y=5x+4 swaps the gradient and intercept.)' },
        { difficulty: 'Medium', question: 'A table shows x: 1, 2, 3, 4 and y: 7, 12, 17, 22. Find the equation.', checkMode: 'auto', options: ['y=5x+7', 'y=5x+2', 'y=2x+5', 'y=4x+3'], correctIndex: 1, explanation: 'Consecutive differences: 12−7=5, 17−12=5, 22−17=5, so the gradient is 5. Since x starts at 1, back-calculate the y-intercept: 7 = 5(1) + c, so c = 2. Equation: y = 5x + 2. (y=5x+7 mistakes the y-value at x=1 for the y-intercept instead of back-calculating; y=2x+5 swaps the gradient and intercept; y=4x+3 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: 'A table shows x: 0, 4, 8, 12 and y: 3, 19, 35, 51. Find the equation.', checkMode: 'auto', options: ['y=16x+3', 'y=4x+19', 'y=4x+3', 'y=5x+3'], correctIndex: 2, explanation: 'x increases by 4 each step; y increases by 16. Gradient = 16 ÷ 4 = 4. When x=0, y=3, so the y-intercept is 3. Equation: y = 4x + 3. (y=16x+3 forgets to divide the y-difference by the x-step; y=4x+19 mistakes the second y-value for the intercept; y=5x+3 miscalculates the gradient.)' },
        { difficulty: 'Medium', question: "Amahle's relationship is described verbally as 'multiply the input by 7, then subtract 5'. Write the equation and find y when x = 2.", checkMode: 'auto', correctAnswers: ['y=7x-5, y=9', 'y = 7x - 5, y = 9'], answer: 'y = 7x − 5, y = 9', parts: [
          { label: 'a) Write the equation', correctAnswer: 'y=7x-5', correctAnswers: ['y=7x-5', 'y = 7x - 5', 'y=7x −5', 'y=7x−5'], explanation: '"Multiply the input by 7" means multiply x by 7; "then subtract 5" means subtract 5. Equation: y = 7x − 5 ✓' },
          { label: 'b) Find y when x = 2', correctAnswer: '9', explanation: 'Substitute x = 2: y = 7(2) − 5 = 14 − 5 = 9 ✓' },
        ] },

        // Block 5 — Graph features (gradient/y-intercept) and ordered pairs (Medium)
        { difficulty: 'Medium', question: 'An equation is y = 8x − 6. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=-6, y-intercept=8', 'gradient=-8, y-intercept=-6', 'gradient=8, y-intercept=6', 'gradient=8, y-intercept=-6'], correctIndex: 3, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = 8 and c = −6, so gradient = 8 and y-intercept = −6. (The other options swap the gradient and intercept, or wrongly attach/drop a negative sign.)' },
        { difficulty: 'Medium', question: 'An equation is y = −2x + 7. Describe its graph\'s gradient and y-intercept.', checkMode: 'auto', options: ['gradient=-2, y-intercept=7', 'gradient=7, y-intercept=-2', 'gradient=2, y-intercept=7', 'gradient=-2, y-intercept=-7'], correctIndex: 0, explanation: 'In y = mx + c, m is the gradient and c is the y-intercept. Here m = −2 and c = 7, so gradient = −2 and y-intercept = 7. (The other options swap the gradient and intercept, drop the negative sign on the gradient, or flip the sign of the intercept.)' },
        { difficulty: 'Medium', question: 'Generate a table of ordered pairs using y = −2x + 4 for x = −1, 0, 1, 2.', checkMode: 'auto', options: ['(-1,2),(0,0),(1,-2),(2,-4)', '(-1,6),(0,4),(1,2),(2,0)', '(-1,2),(0,4),(1,6),(2,8)', '(-1,-4),(0,-1),(1,2),(2,5)'], correctIndex: 1, explanation: 'x=−1: y=−2(−1)+4=6. x=0: y=4. x=1: y=−2+4=2. x=2: y=−4+4=0. Pairs: (−1,6),(0,4),(1,2),(2,0). (The first option omits the +4 entirely; the third flips the sign of the gradient throughout; the fourth mixes up the rule with a different equation.)' },

        // Block 6 — Generating tables incl. quadratics / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Kagiso generates a table using y = x² − 3 for x = −2, −1, 0, 1, 2 and gets (−2, 1), (−1, −2), (0, −3), (1, −2), (2, 1). Which statement about his table is correct?', checkMode: 'auto', options: ['He made an error at x = 0 — the correct value is y = 3, not y = −3.', 'He made an error at x = −2 and x = 2 — the correct values are y = −1, not y = 1.', 'His table is correct — each y-value matches x² − 3, forming a symmetric parabola.', 'His table cannot be a parabola because it includes negative y-values.'], correctIndex: 2, explanation: 'Substituting each x value: (−2)²−3=1, (−1)²−3=−2, 0²−3=−3, 1²−3=−2, 2²−3=1 — all match his table, with the expected symmetry. (Option A misreads 0²−3 as needing to be positive; option B miscalculates (±2)²−3 as −1; parabolas can absolutely include negative y-values, so option D is wrong.)' },
        { difficulty: 'Hard', question: 'Naledi says the equation y = 3x + 8 and the table x: 1, 2, 3 and y: 11, 14, 17 describe the same relationship. Which statement is correct?', checkMode: 'auto', options: ['She is incorrect — substituting x = 1 into y = 3x + 8 gives y = 8, not 11.', 'She is incorrect — the table has a gradient of 8, not 3.', 'It cannot be determined without knowing the y-intercept of the table.', 'She is correct — substituting x = 1, 2, 3 into y = 3x + 8 gives exactly 11, 14, 17.'], correctIndex: 3, explanation: 'Substituting x = 1, 2, 3 into y = 3x + 8 gives 11, 14, 17 exactly, matching the table. (Option A miscalculates 3(1)+8 as 8; option B misreads the table\'s gradient, which is actually 3 since consecutive y-values rise by 3; the y-intercept is not needed once three matching points confirm equivalence.)' },
        { difficulty: 'Hard', question: 'Sibusiso says a graph of y = x² − 3 will look identical to a graph of y = 5x + 1. Which statement is correct?', checkMode: 'auto', options: ['He is incorrect — y = x² − 3 produces a curved parabola, while y = 5x + 1 produces a straight line.', 'He is correct — both equations produce straight lines.', 'He is correct — both equations produce curved parabolas.', 'He is incorrect — both are parabolas, but shifted differently.'], correctIndex: 0, explanation: 'y = x² − 3 is quadratic, so it produces a curved parabola shape. y = 5x + 1 is linear (y = mx + c form), so it produces a straight line. Their graphs are fundamentally different shapes. (Options B and C wrongly assume the two equations share the same graph type; option D wrongly calls y = 5x + 1 a parabola.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding inputs, outputs and equations for functions and relationships.' },
        { minScore: 15, message: 'Great work! Review any missed questions on flow diagrams or tables of values and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on substitution and equivalence, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
