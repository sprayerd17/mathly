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
        '<VideoPlaceholder label="Short video showing how to substitute input values into an equation to find outputs, and how to solve an equation backwards to find the input when the output is given" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Flow diagram showing an input x arrow passing through an equation rule box to produce output y, illustrating substitution in both directions" />',
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
        '<VideoPlaceholder label="Short video showing how to move between verbal descriptions, tables, equations and straight-line graphs, reading gradient and y-intercept from each form" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a Cartesian plane showing the line y=3x+2, with the y-intercept at (0,2) clearly marked and the gradient illustrated with a rise/run triangle" />',
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
        '<VideoPlaceholder label="Short video showing how to substitute x-values into an equation to build a table of ordered pairs and then plot those points on a Cartesian plane" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a Cartesian plane with points (-1,7),(0,5),(1,3),(2,1) plotted and connected by a straight line" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered functions and relationships.' },
    { minScore: 11, message: 'Great work! You have a strong understanding. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort. Review the sections where you dropped marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again section by section, then try once more.' },
  ],
}
