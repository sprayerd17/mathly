import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// pattern terms      → blue   (#2563eb)
// common difference  → orange (#ea580c)
// rule / formula     → green  (#16a34a)
// nth term / answer  → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patterns, Functions and Relationships',
  grade: 7,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NUMERIC PATTERNS AND RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'numeric-patterns-rules',
      title: 'Numeric Patterns and Rules',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">We identify the <strong>rule</strong> that links terms in a numeric pattern, including patterns involving more than one operation. We describe the rule in words and write it using a variable to find the <strong>nth term</strong> — for any term number n.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('pattern terms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common difference')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rule')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nth term')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Pattern terms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The numbers that appear in the sequence, listed in order.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Common difference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The constant amount added (or subtracted) between consecutive terms in a linear pattern.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A formula that generates any term in the pattern when you know its position number n.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">nth term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The general term at position n — substitute any value of n to find that term.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Finding the rule for a linear pattern</p>` +
        `<p style="margin:0;color:#1e3a8a;">For a pattern with a <strong>constant difference</strong>, the rule is always of the form: ${re('nth term')} = ${or('d')} × n + c, where ${or('d')} is the common difference and c is found by substituting the first term.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the rule and the 10th term of the pattern 5, 9, 13, 17.',
          answer: `${gr('Rule: nth term = 4n + 1')} &nbsp;|&nbsp; ${re('10th term = 41')}`,
          steps: [
            `Find the ${or('common difference')}: 9 − 5 = 13 − 9 = 17 − 13 = ${or('4')}. The ${bl('pattern terms')} increase by ${or('4')} each time.`,
            `Since the ${or('common difference')} is ${or('4')}, the ${gr('rule')} starts with ${gr('4n')}. Substitute the first term (n = 1): 4 × 1 + c = ${bl('5')}, so c = 1.`,
            `${gr('Rule: nth term = 4n + 1')}. Check: 4(1)+1=${bl('5')} ✓, 4(2)+1=${bl('9')} ✓, 4(3)+1=${bl('13')} ✓, 4(4)+1=${bl('17')} ✓`,
            `Find the ${re('10th term')}: substitute n = 10. ${re('nth term')} = 4 × 10 + 1 = 40 + 1 = ${re('41')}`,
          ],
        },
        {
          question: 'Find the rule for the pattern 2, 5, 10, 17.',
          answer: `${gr('Rule: nth term = n² + 1')}`,
          steps: [
            `Find the differences between consecutive ${bl('pattern terms')}: 5 − 2 = ${or('3')}, 10 − 5 = ${or('5')}, 17 − 10 = ${or('7')}. The differences are ${or('3, 5, 7')} — not constant, so the pattern is not linear.`,
            `The differences are increasing by 2 each time, which suggests a relationship with ${gr('square numbers')}.`,
            `Check ${gr('n² + 1')}: n=1 gives 1²+1=${bl('2')} ✓. n=2 gives 2²+1=${bl('5')} ✓. n=3 gives 3²+1=${bl('10')} ✓. n=4 gives 4²+1=${bl('17')} ✓`,
            `${gr('Rule: nth term = n² + 1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — find rule and 8th term ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the rule and the 8th term of the pattern 3, 7, 11, 15.',
          answer: 'Common difference = 4. Using n = 1: 4(1) + c = 3, so c = −1.\nRule: nth term = 4n − 1\n8th term = 4(8) − 1 = 31',
          checkMode: 'self',
        },

        // ── Q2 Medium — find rules for two patterns ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the rule for each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 6, 11, 16, 21 — nth term =',
              correctAnswer: '5n+1',
              correctAnswers: ['5n+1', '5n + 1'],
              explanation: 'Common difference = 5. Substitute n=1: 5(1)+c=6 → c=1. Rule: nth term = 5n+1 ✓',
            },
            {
              label: 'b) 1, 4, 9, 16 — nth term =',
              correctAnswer: 'n²',
              correctAnswers: ['n²', 'n^2'],
              explanation: 'Differences: 3, 5, 7 — not constant. Check square numbers: 1²=1, 2²=4, 3²=9, 4²=16. Rule: nth term = n² ✓',
            },
          ],
        },

        // ── Q3 Hard — quadratic nth term formula ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A pattern has the rule nth term = 3n² − 1.\n\na) Write the first four terms.\nb) What is the 20th term?\nc) Is 299 a term in this pattern? Explain.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) First four terms',
              correctAnswer: '2,11,26,47',
              correctAnswers: ['2,11,26,47', '2, 11, 26, 47'],
              explanation: 'n=1: 3(1)²−1=2. n=2: 3(4)−1=11. n=3: 3(9)−1=26. n=4: 3(16)−1=47.',
            },
            {
              label: 'b) 20th term',
              correctAnswer: '1199',
              explanation: '3(20)²−1 = 3(400)−1 = 1200−1 = 1199.',
            },
            {
              label: 'c) Is 299 a term in the pattern?',
              correctAnswer: 'Yes',
              checkMode: 'self',
              answer: 'Set 3n²−1=299 → 3n²=300 → n²=100 → n=10. Since n=10 is a positive whole number, 299 IS a term — the 10th term.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the rule of a numeric pattern including linear patterns and patterns based on square numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Numeric pattern with terms highlighted in blue, common difference highlighted in orange, and the nth term rule written in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TABLES OF VALUES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tables-of-values',
      title: 'Tables of Values',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>table of values</strong> shows the relationship between ${bl('input')} and ${gr('output')} values for a given rule. We can use a table to find the ${or('rule')} connecting input and output, or use a known rule to complete a table.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('input (x)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('output (y)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to use a table of values</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Given the rule → complete the table</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Substitute each ${bl('input')} value into the ${or('rule')} to calculate the corresponding ${gr('output')} value.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Given the table → find the rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the differences in the ${gr('output')} values, then work out what operation links each ${bl('input')} to its ${gr('output')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Strategy for finding a rule from a table</p>` +
        `<p style="margin:0;color:#14532d;"><strong>Step 1</strong> — Find the differences in the ${gr('output')} column. If constant, the ${or('rule')} is linear.<br><strong>Step 2</strong> — The constant difference is the coefficient of x: write ${or('y = (difference) × x + c')}.<br><strong>Step 3</strong> — Substitute one ${bl('input')}–${gr('output')} pair to find c.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Complete the table using the rule y = 3x − 2 for x = 1, 2, 3, 4.',
          answer: `${gr('y')} values: ${gr('1, 4, 7, 10')}`,
          steps: [
            `${or('Rule: y = 3x − 2')}. Substitute ${bl('x = 1')}: y = 3(${bl('1')}) − 2 = 3 − 2 = ${gr('1')}`,
            `Substitute ${bl('x = 2')}: y = 3(${bl('2')}) − 2 = 6 − 2 = ${gr('4')}`,
            `Substitute ${bl('x = 3')}: y = 3(${bl('3')}) − 2 = 9 − 2 = ${gr('7')}`,
            `Substitute ${bl('x = 4')}: y = 3(${bl('4')}) − 2 = 12 − 2 = ${gr('10')}`,
          ],
        },
        {
          question: 'Find the rule for this table — x: 1, 2, 3, 4 and y: 6, 11, 16, 21.',
          answer: `${or('Rule: y = 5x + 1')}`,
          steps: [
            `Find the differences in the ${gr('output')} column: 11 − 6 = ${or('5')}, 16 − 11 = ${or('5')}, 21 − 16 = ${or('5')}. The differences are constant at ${or('5')}.`,
            `So the coefficient of x is 5: try ${or('y = 5x + c')}.`,
            `Substitute ${bl('x = 1')}, ${gr('y = 6')}: 5(${bl('1')}) + c = ${gr('6')} → c = 1.`,
            `${or('Rule: y = 5x + 1')}. Check: 5(${bl('1')})+1=${gr('6')} ✓, 5(${bl('2')})+1=${gr('11')} ✓, 5(${bl('3')})+1=${gr('16')} ✓, 5(${bl('4')})+1=${gr('21')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — complete table from given rule ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Complete the table using the rule y = 2x + 3 for x = 1, 2, 3, 4.',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'x = 1, y =', correctAnswer: '5', explanation: 'y = 2(1)+3 = 2+3 = 5' },
            { label: 'x = 2, y =', correctAnswer: '7', explanation: 'y = 2(2)+3 = 4+3 = 7' },
            { label: 'x = 3, y =', correctAnswer: '9', explanation: 'y = 2(3)+3 = 6+3 = 9' },
            { label: 'x = 4, y =', correctAnswer: '11', explanation: 'y = 2(4)+3 = 8+3 = 11' },
          ],
        },

        // ── Q5 Medium — find rule from two tables ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the rule for each table of values.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) x: 1,2,3,4 → y: 4,7,10,13. Rule: y =',
              correctAnswer: '3x+1',
              correctAnswers: ['3x+1', '3x + 1'],
              explanation: 'Differences in y: 3, 3, 3 — constant at 3. Try y=3x+c: 3(1)+c=4 → c=1. Rule: y=3x+1 ✓',
            },
            {
              label: 'b) x: 1,2,3,4 → y: 8,13,18,23. Rule: y =',
              correctAnswer: '5x+3',
              correctAnswers: ['5x+3', '5x + 3'],
              explanation: 'Differences in y: 5, 5, 5 — constant at 5. Try y=5x+c: 5(1)+c=8 → c=3. Rule: y=5x+3 ✓',
            },
          ],
        },

        // ── Q6 Hard — quadratic table with second differences ─────────────────
        {
          difficulty: 'Hard',
          question: 'A table shows x: 1, 2, 3, 4, 5 and y: 3, 8, 15, 24, 35.\n\na) Find the first differences in y.\nb) Find the second differences.\nc) What does this tell you about the rule?\nd) Find the rule.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) First differences',
              correctAnswer: '5,7,9,11',
              correctAnswers: ['5,7,9,11', '5, 7, 9, 11'],
              explanation: '8−3=5, 15−8=7, 24−15=9, 35−24=11.',
            },
            {
              label: 'b) Second differences',
              correctAnswer: '2,2,2',
              correctAnswers: ['2,2,2', '2, 2, 2'],
              explanation: '7−5=2, 9−7=2, 11−9=2. The second differences are constant at 2.',
            },
            {
              label: 'c) What does the constant second difference tell you?',
              correctAnswer: 'quadratic',
              checkMode: 'self',
              answer: 'Constant second differences mean the rule is quadratic — it involves n² (or x²).',
            },
            {
              label: 'd) Rule: y =',
              correctAnswer: 'n²+2n',
              correctAnswers: ['n²+2n', 'x²+2x', 'n^2+2n', 'x^2+2x'],
              explanation: 'Try y=n²+2n: 1+2=3 ✓, 4+4=8 ✓, 9+6=15 ✓, 16+8=24 ✓, 25+10=35 ✓.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to complete a table of values using a given rule and how to find the rule from a completed table" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table of values with the input column highlighted in blue and the output column highlighted in green, showing the rule connecting them written in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUATIONS AND GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equations-graphs',
      title: 'Equations and Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">A relationship between two variables can be shown as an equation, a table or a graph. We plot points from a table of values onto a <strong>Cartesian plane</strong> to create a graph, with the ${bl('input values on the x-axis')} and ${gr('output values on the y-axis')}. Straight line graphs represent relationships with a constant rate of change.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-axis')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-axis')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('points')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('graph shape')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cartesian plane</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A grid with a horizontal ${bl('x-axis')} (input) and a vertical ${gr('y-axis')} (output). Each ${or('point')} is written as (x, y).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Straight line graph</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${re('straight line')} is produced when the rate of change between y and x is constant — i.e. when the first differences in y are equal.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Curved graph</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${re('curve')} is produced when the rate of change is not constant — for example, rules involving x² produce a parabola.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">How to draw a graph from a rule</p>` +
        `<p style="margin:0;color:#78350f;"><strong>Step 1</strong> — Build a table of values by choosing at least 3 ${bl('x-values')} and calculating the matching ${gr('y-values')}.<br><strong>Step 2</strong> — Plot each ${or('point')} (x, y) on the Cartesian plane.<br><strong>Step 3</strong> — Join the ${or('points')} to show the ${re('graph shape')} — use a ruler for straight lines, and draw a smooth curve for non-linear graphs.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the rule y = 2x + 1, find 3 points to plot and describe the graph shape.',
          answer: `Points: ${or('(0, 1), (1, 3), (2, 5)')} — ${re('straight line graph')}`,
          steps: [
            `Build a table. Choose ${bl('x = 0')}: y = 2(${bl('0')}) + 1 = ${gr('1')}. Point: ${or('(0, 1)')}.`,
            `Choose ${bl('x = 1')}: y = 2(${bl('1')}) + 1 = ${gr('3')}. Point: ${or('(1, 3)')}.`,
            `Choose ${bl('x = 2')}: y = 2(${bl('2')}) + 1 = ${gr('5')}. Point: ${or('(2, 5)')}.`,
            `The first differences in y are constant (${or('2')} each time), so these ${or('points')} lie on a ${re('straight line')}. The rate of change is constant. Join the three points with a straight line.`,
          ],
        },
        {
          question: 'Lerato says the rule y = x² produces a straight line graph. Is she correct?',
          answer: `${re('Lerato is incorrect')} — y = x² produces a curve`,
          steps: [
            `Build a table. ${bl('x = 1')}: y = 1² = ${gr('1')}. ${bl('x = 2')}: y = 2² = ${gr('4')}. ${bl('x = 3')}: y = 3² = ${gr('9')}.`,
            `Find the first differences in y: 4 − 1 = ${or('3')}, 9 − 4 = ${or('5')}. The differences are ${or('3, 5')} — they are NOT constant.`,
            `Because the rate of change is not constant, the ${or('points')} do NOT lie on a ${re('straight line')}.`,
            `${re('Lerato is incorrect')} — y = x² produces a ${re('curve')} (a parabola), not a straight line.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — find y-values from a rule ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Using the rule y = x + 3, find the y-value for each x-value.',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'x = 0, y =', correctAnswer: '3', explanation: 'y = 0+3 = 3' },
            { label: 'x = 2, y =', correctAnswer: '5', explanation: 'y = 2+3 = 5' },
            { label: 'x = 4, y =', correctAnswer: '7', explanation: 'y = 4+3 = 7' },
          ],
        },

        // ── Q8 Medium — straight line or curve ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'For each rule, state whether the graph is a straight line or a curve, and explain why.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y = 4x − 1',
              correctAnswer: 'straight line',
              correctAnswers: ['straight line', 'straight', 'linear'],
              explanation: 'The rule is linear — no powers of x. The first differences are constant (4), so it produces a straight line.',
            },
            {
              label: 'b) y = x² + 3',
              correctAnswer: 'curve',
              correctAnswers: ['curve', 'curved', 'parabola'],
              explanation: 'The rule involves x². First differences will not be constant, so the graph is a curve.',
            },
          ],
        },

        // ── Q9 Hard — full graph analysis ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'For the rule y = 2x + 4:\n\na) Complete the table of values for x = −1, 0, 1, 2, 3.\nb) Describe how to plot and join the points.\nc) What is the y-value when x = 10?\nd) What is the x-value when y = 0?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y-values for x = −1, 0, 1, 2, 3',
              correctAnswer: '2,4,6,8,10',
              correctAnswers: ['2,4,6,8,10', '2, 4, 6, 8, 10'],
              explanation: 'x=−1: 2(−1)+4=2. x=0: 0+4=4. x=1: 2+4=6. x=2: 4+4=8. x=3: 6+4=10.',
            },
            {
              label: 'b) How to plot and join the points',
              correctAnswer: 'straight line',
              checkMode: 'self',
              answer: 'Plot points (−1, 2), (0, 4), (1, 6), (2, 8), (3, 10) on the Cartesian plane and join with a straight line using a ruler.',
            },
            {
              label: 'c) y when x = 10',
              correctAnswer: '24',
              explanation: 'y = 2(10)+4 = 20+4 = 24.',
            },
            {
              label: 'd) x when y = 0',
              correctAnswer: '-2',
              correctAnswers: ['-2', '−2'],
              explanation: 'Set 2x+4=0 → 2x=−4 → x=−2.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to plot points from a table of values on a Cartesian plane and describe whether the graph is a straight line or a curve" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane with x-axis in blue, y-axis in green, plotted points in orange, and a straight line graph shape in red for the rule y equals 2x plus 1" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — next term in a linear pattern ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the next term in the pattern: 6, 11, 16, 21, ?',
      answer: '26',
      checkMode: 'auto',
      correctAnswer: '26',
      explanation: 'The common difference is 5 (11−6=5, 16−11=5, 21−16=5). Next term: 21+5 = 26 ✓',
    },

    // ── Q2 Medium — rule and nth term ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the rule and the 12th term of the pattern 3, 7, 11, 15.',
      answer: 'Common difference = 4. Using n=1: 4(1)+c=3 → c=−1.\nRule: nth term = 4n − 1\n12th term = 4(12) − 1 = 48 − 1 = 47',
      checkMode: 'self',
    },

    // ── Q3 Hard — check and correct a given rule ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says the pattern 4, 7, 12, 19 has the rule nth term = 3n + 1. Check his rule for each term and correct it if needed.',
      answer: 'Check n=1: 3(1)+1=4 ✓\nCheck n=2: 3(2)+1=7 ✓\nCheck n=3: 3(3)+1=10, but the actual term is 12 ✗\nSipho\'s rule is incorrect.\nThe true rule is nth term = n² + 3:\nn=1: 1+3=4 ✓, n=2: 4+3=7 ✓, n=3: 9+3=12 ✓, n=4: 16+3=19 ✓',
      checkMode: 'self',
    },

    // ── Q4 Medium — complete a table using a rule ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Complete the table using the rule y = 4x − 3 for x = 1, 2, 3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'x = 1, y =',
          correctAnswer: '1',
          explanation: 'y = 4(1) − 3 = 4 − 3 = 1',
        },
        {
          label: 'x = 2, y =',
          correctAnswer: '5',
          explanation: 'y = 4(2) − 3 = 8 − 3 = 5',
        },
        {
          label: 'x = 3, y =',
          correctAnswer: '9',
          explanation: 'y = 4(3) − 3 = 12 − 3 = 9',
        },
      ],
    },

    // ── Q5 Hard — find rule from a table ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the rule for this table of values.\nx: 1, 2, 3, 4\ny: 4, 9, 14, 19',
      answer: '',
      checkMode: 'auto',
      correctAnswer: 'y=5x-1',
      correctAnswers: ['y=5x-1', 'y=5x−1', '5x-1', '5x−1'],
      explanation: 'Differences in y: 9−4=5, 14−9=5, 19−14=5 — constant at 5.\nTry y=5x+c: 5(1)+c=4 → c=−1.\nRule: y = 5x − 1 ✓',
    },

    // ── Q6 Easy — substitute x to find y ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the rule y = 2x + 5, find the value of y when x = 6.',
      answer: '17',
      checkMode: 'auto',
      correctAnswer: '17',
      explanation: 'y = 2(6) + 5 = 12 + 5 = 17 ✓',
    },

    // ── Q7 Medium — find x given y ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the rule y = 3x − 7, find the value of x when y = 14.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: 'Set 3x − 7 = 14 → 3x = 21 → x = 7 ✓',
    },

    // ── Q8 Hard — straight line y-intercept misconception ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says all straight line graphs pass through the point (0, 0). Is she correct? Explain your answer with an example.',
      answer: 'No — only graphs of the form y = mx (with no constant term) pass through (0, 0).\nA graph like y = 2x + 3 passes through (0, 3), not (0, 0).\nThe y-intercept equals the constant in the rule, and this is only zero when there is no constant.',
      checkMode: 'self',
    },

    // ── Q9 Medium — plot points and describe shape ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the rule y = x + 4, plot 3 points and describe the shape they form.',
      answer: 'Points: (0, 4), (1, 5), (2, 6)\nThese three points form a straight line because the rate of change is constant at 1 (the first differences in y are all equal to 1).',
      checkMode: 'self',
    },

    // ── Q10 Hard — curved graph misconception ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says the rule y = x² forms a straight line graph. Explain why this is incorrect.',
      answer: 'Build a table: x=1 → y=1, x=2 → y=4, x=3 → y=9.\nFirst differences in y: 4−1=3, 9−4=5 — not constant.\nBecause the differences are not constant (1, 3, 5, 7, ...), the points do not lie on a straight line.\ny = x² produces a curve (parabola), not a straight line.',
      checkMode: 'self',
    },

    // ── Q11 Medium — find rule for square number pattern ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the rule for the pattern 1, 4, 9, 16.',
      answer: 'nth term = n²',
      checkMode: 'auto',
      correctAnswer: 'n²',
      correctAnswers: ['n²', 'n^2', 'nth term=n²', 'nth term = n²'],
      explanation: 'Check: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓, 4²=16 ✓. Rule: nth term = n² ✓',
    },

    // ── Q12 Hard — increasing differences pattern ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo notices the pattern 7, 13, 21, 31 has first differences 6, 8, 10. Find the next term and explain your reasoning.',
      answer: 'The differences increase by 2 each time: 6, 8, 10, ...\nNext difference: 10 + 2 = 12\nNext term: 31 + 12 = 43',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have mastered patterns, functions and relationships.' },
      { minScore: 9, message: 'Great work!' },
      { minScore: 6, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered patterns, functions and relationships for Grade 7. Keep it up!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of this topic. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
