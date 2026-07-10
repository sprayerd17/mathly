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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Numeric sequences (next/missing term) | 4-7 General rule/nth term
    // (words + algebraic) | 8-11 Input-output flow diagrams/function tables |
    // 12-14 Geometric/growing patterns [DIAGRAM-FLAGGED] | 15-16 Describing/
    // extending + error-spotting | 17-19 Multi-step/real-world word problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 4, 9, 14, 19, 24, ?', answer: '29', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29'], explanation: 'The common difference is 5 (9−4=5, 14−9=5, 19−14=5, 24−19=5). Next term: 24 + 5 = 29 ✓' },
        { difficulty: 'Easy', question: 'A water tank starts with 500 litres and loses 50 litres a day through a leak: 500, 450, 400, 350. How many litres will be left the next day?', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300', '300 litres', '300 l'], explanation: 'The rule is subtract 50 each time. 350 − 50 = 300 litres ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 9, ?, 23, 30.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'The known difference is 30 − 23 = 7, so the rule is add 7 each time. 9 + 7 = 16. Check: 23 − 16 = 7 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "double the term, then add 1", starting at 3: 3, 7, 15, 31. What is the next term?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63'], explanation: 'Apply the rule to 31: 31 × 2 = 62, then 62 + 1 = 63 ✓' },

        // ── Block 2: General rule/nth term (words + algebraic) ──────────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 5, 9, 13, 17 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 4 each time', checkMode: 'self', answer: 'Start at 5 and add 4 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '4n+1', correctAnswers: ['4n+1', '4n + 1'], explanation: 'Common difference = 4. Substitute n=1: 4(1)+c=5 → c=1. Rule: nth term = 4n+1. Check: 4(2)+1=9 ✓, 4(3)+1=13 ✓, 4(4)+1=17 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 4, 10, 16, 22.', answer: 'nth term = 6n − 2', checkMode: 'auto', correctAnswer: '6n-2', correctAnswers: ['6n-2', '6n − 2', 'nth term=6n-2', 'nth term = 6n − 2'], explanation: 'Common difference = 6. Substitute n=1: 6(1)+c=4 → c=−2. Rule: nth term = 6n − 2. Check: 6(2)−2=10 ✓, 6(3)−2=16 ✓, 6(4)−2=22 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 3, 6, 11, 18. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 20th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+2', correctAnswers: ['n²+2', 'n^2+2', 'nth term=n²+2'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+2: 1+2=3 ✓, 4+2=6 ✓, 9+2=11 ✓, 16+2=18 ✓' },
          { label: 'b) 20th term', correctAnswer: '402', explanation: '20² + 2 = 400 + 2 = 402.' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula says the pattern 6, 10, 14, 18 has the rule nth term = 4n. Check her rule for every term. Is she correct, and if not, what is the correct rule?', answer: 'Check n=1: 4(1)=4, but the actual first term is 6 ✗. Nomvula\'s rule is incorrect for every term — she likely used only the common difference and forgot the starting adjustment. The common difference is 4 (10−6=4, 14−10=4, 18−14=4), so the rule starts with 4n. Substituting n=1: 4(1)+c=6 → c=2. The correct rule is nth term = 4n + 2. Check: 4(1)+2=6 ✓, 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓', checkMode: 'self' },

        // ── Block 3: Input-output flow diagrams / function tables ───────────
        { difficulty: 'Easy', question: 'Complete the table using the rule y = 3x + 2 for x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '5', explanation: 'y = 3(1)+2 = 3+2 = 5' },
          { label: 'x = 2, y =', correctAnswer: '8', explanation: 'y = 3(2)+2 = 6+2 = 8' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 3(3)+2 = 9+2 = 11' },
          { label: 'x = 4, y =', correctAnswer: '14', explanation: 'y = 3(4)+2 = 12+2 = 14' },
        ] },
        { difficulty: 'Medium', question: 'A function machine applies "multiply by 3, then subtract 2" to each input. Complete the outputs for inputs 2, 5 and 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 2, output =', correctAnswer: '4', explanation: '2 × 3 = 6, then 6 − 2 = 4' },
          { label: 'b) Input 5, output =', correctAnswer: '13', explanation: '5 × 3 = 15, then 15 − 2 = 13' },
          { label: 'c) Input 8, output =', correctAnswer: '22', explanation: '8 × 3 = 24, then 24 − 2 = 22' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Find the rule for this input-output table.\n\nInput:  2,  4,  6,  8\nOutput: 9, 17, 25, 33', answer: 'output = 4 × input + 1', checkMode: 'auto', correctAnswer: 'output = 4 × input + 1', correctAnswers: ['output = 4 × input + 1', 'output = 4 x input + 1', '4 × input + 1', '4 x input + 1', '4n + 1'], explanation: 'Differences in output: 17−9=8, 25−17=8, 33−25=8, over a gap of 2 inputs, so 8 ÷ 2 = 4. Try output = 4 × input + c: 4×2=8, 9−8=1. Rule: output = 4 × input + 1. Check: 4(4)+1=17 ✓, 4(6)+1=25 ✓, 4(8)+1=33 ✓' },
        { difficulty: 'Hard', question: 'A function machine uses the rule output = 6 × input − 4. Which input gives an output of 50?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Set up: 6 × input − 4 = 50. Add 4 to both sides: 6 × input = 54. Divide by 6: input = 9. Check: 6(9)−4 = 54−4 = 50 ✓' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of triangles is made from matchsticks, as shown. Pattern 1 is a single triangle made of 3 matchsticks. Pattern 2 has two triangles joined side by side in a row, sharing one matchstick between them, using 5 matchsticks in total. Pattern 3 has three triangles joined in a row, using 7 matchsticks in total. How many matchsticks are needed for Pattern 6?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 matchsticks'], explanation: 'The pattern increases by 2 matchsticks each time: 3, 5, 7 (differences of 2). Rule: matchsticks = 2n + 1. Check: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Pattern 6: 2(6)+1 = 12+1 = 13 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 sticks</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 sticks</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 sticks</text></g></svg>' },
        { difficulty: 'Medium', question: 'A growing dot pattern, as shown, follows this structure: Pattern 1 has 2 dots. Pattern 2 has 5 dots. Pattern 3 has 8 dots, with each new pattern adding 3 more dots than the last in a consistent staircase arrangement. Find the rule for the number of dots at pattern n, then use it to find the number of dots in Pattern 12.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule (dots = a × n + b)', correctAnswer: 'dots = 3n − 1', correctAnswers: ['dots = 3n − 1', 'dots = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Constant difference of 3 each time (2,5,8). Substitute n=1: 3(1)+c=2 → c=−1. Rule: dots = 3n − 1. Check: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Dots in Pattern 12', correctAnswer: '35', explanation: '3(12) − 1 = 36 − 1 = 35 dots.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 dots</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 dots</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 dots</text></g></svg>' },
        { difficulty: 'Hard', question: 'A pattern of separate squares is built from matchsticks, as shown — each square stands alone and does not share any sides with the others. Pattern 1 has 1 square made of 4 matchsticks. Pattern 2 has 2 separate squares made of 8 matchsticks. Pattern 3 has 3 separate squares made of 12 matchsticks. Zinhle says Pattern 15 will need 56 matchsticks. Check her answer using the rule, and correct it if she is wrong.', answer: 'Zinhle is incorrect. Since each square is separate (no shared sides), the number of matchsticks is always 4 times the pattern number: matchsticks = 4n. Check: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. For Pattern 15: 4 × 15 = 60 matchsticks, not 56. Zinhle likely used the wrong rule (perhaps one for shared/joined squares instead of separate ones). The correct answer is 60 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 sticks</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 sticks</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 sticks</text></g></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 5, 11, 17, 23 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '29,35', correctAnswers: ['29,35', '29, 35'], explanation: 'Common difference = 6. 23+6=29, 29+6=35.' },
          { label: 'b) Rule in words', correctAnswer: 'add 6 each time', checkMode: 'self', answer: 'Start at 5 and add 6 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'Bongani says the pattern 5, 11, 17, 23 has the rule nth term = 5n + 1, because it works for the first term. Test his rule against every term in the pattern. Is he correct?', answer: 'Bongani is incorrect. Check n=1: 5(1)+1=6, not 5 ✗ — his rule does not even work for the first term, so it is wrong from the start. The common difference is actually 6 (11−5=6, 17−11=6, 23−17=6), so the rule should start with 6n. Substituting n=1: 6(1)+c=5 → c=−1. The correct rule is nth term = 6n − 1. Check: 6(1)−1=5 ✓, 6(2)−1=11 ✓, 6(3)−1=17 ✓, 6(4)−1=23 ✓. This shows why a rule must be checked against every term, not assumed from a quick glance.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world word problems ────────────────────
        { difficulty: 'Medium-Hard', question: 'A gym charges a once-off joining fee of R80 plus R35 per month, using the rule: cost = 35 × months + 80. Complete the table for 2, 5 and 8 months.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 2 months', correctAnswer: '150', explanation: '35 × 2 + 80 = 70 + 80 = 150' },
          { label: 'b) Cost for 5 months', correctAnswer: '255', explanation: '35 × 5 + 80 = 175 + 80 = 255' },
          { label: 'c) Cost for 8 months', correctAnswer: '360', explanation: '35 × 8 + 80 = 280 + 80 = 360' },
        ] },
        { difficulty: 'Hard', question: 'Using the gym rule cost = 35 × months + 80, after how many full months will the total cost first reach at least R430?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'Set up: 35 × months + 80 ≥ 430, so 35 × months ≥ 350, giving months ≥ 10. Check: 9 months gives 35(9)+80 = 395 (too little). 10 months gives 35(10)+80 = 430 ✓. 10 months is the first to reach at least R430.' },
        { difficulty: 'Hard', question: 'A theatre arranges seats in rows that follow the rule: seats = 4 × row number + 10. Row 1 has 14 seats, row 2 has 18 seats, and so on.\n\na) How many seats are in row 15?\nb) If a row has 78 seats, which row number is it?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Seats in row 15', correctAnswer: '70', explanation: '4 × 15 + 10 = 60 + 10 = 70 seats.' },
          { label: 'b) Row number for 78 seats', correctAnswer: '17', explanation: 'Set up: 4 × row + 10 = 78. Subtract 10: 4 × row = 68. Divide by 4: row = 17. Check: 4(17)+10=78 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, nth term rules, input-output tables, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of patterns and functions. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on rules and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 6, 13, 20, 27, 34, ?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41'], explanation: 'The common difference is 7 (13−6=7, 20−13=7, 27−20=7, 34−27=7). Next term: 34 + 7 = 41 ✓' },
        { difficulty: 'Easy', question: 'A campsite gas bottle starts with 720 g of gas and uses 60 g every hour: 720, 660, 600, 540. How many grams will be left the next hour?', answer: '480', checkMode: 'auto', correctAnswer: '480', correctAnswers: ['480', '480 g', '480g'], explanation: 'The rule is subtract 60 each time. 540 − 60 = 480 g ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 11, ?, 27, 35.', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19'], explanation: 'The known difference is 35 − 27 = 8, so the rule is add 8 each time. 11 + 8 = 19. Check: 27 − 19 = 8 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "double the term, then add 3", starting at 2: 2, 7, 17, 37. What is the next term?', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77'], explanation: 'Apply the rule to 37: 37 × 2 = 74, then 74 + 3 = 77 ✓' },

        // ── Block 2: General rule/nth term (words + algebraic) ──────────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 7, 12, 17, 22 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 5 each time', checkMode: 'self', answer: 'Start at 7 and add 5 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '5n+2', correctAnswers: ['5n+2', '5n + 2'], explanation: 'Common difference = 5. Substitute n=1: 5(1)+c=7 → c=2. Rule: nth term = 5n+2. Check: 5(2)+2=12 ✓, 5(3)+2=17 ✓, 5(4)+2=22 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 5, 13, 21, 29.', answer: 'nth term = 8n − 3', checkMode: 'auto', correctAnswer: '8n-3', correctAnswers: ['8n-3', '8n − 3', 'nth term=8n-3', 'nth term = 8n − 3'], explanation: 'Common difference = 8. Substitute n=1: 8(1)+c=5 → c=−3. Rule: nth term = 8n − 3. Check: 8(2)−3=13 ✓, 8(3)−3=21 ✓, 8(4)−3=29 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 4, 7, 12, 19. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 22nd term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+3', correctAnswers: ['n²+3', 'n^2+3', 'nth term=n²+3'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+3: 1+3=4 ✓, 4+3=7 ✓, 9+3=12 ✓, 16+3=19 ✓' },
          { label: 'b) 22nd term', correctAnswer: '487', explanation: '22² + 3 = 484 + 3 = 487.' },
        ] },
        { difficulty: 'Hard', question: 'Thabo says the pattern 8, 17, 26, 35 has the rule nth term = 8n. Check his rule for every term. Is he correct, and if not, what is the correct rule?', answer: 'Thabo is incorrect. Check n=1: 8(1)=8 ✓ (this one happens to match), but check n=2: 8(2)=16, not 17 ✗ — his rule fails from the second term onward. The common difference is actually 9 (17−8=9, 26−17=9, 35−26=9), so the rule should start with 9n. Substituting n=1: 9(1)+c=8 → c=−1. The correct rule is nth term = 9n − 1. Check: 9(1)−1=8 ✓, 9(2)−1=17 ✓, 9(3)−1=26 ✓, 9(4)−1=35 ✓. This shows why a rule that matches the first term is not automatically correct.', checkMode: 'self' },

        // ── Block 3: Input-output flow diagrams / function tables ───────────
        { difficulty: 'Easy', question: 'Complete the table using the rule y = 4x − 1 for x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '3', explanation: 'y = 4(1)−1 = 4−1 = 3' },
          { label: 'x = 2, y =', correctAnswer: '7', explanation: 'y = 4(2)−1 = 8−1 = 7' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 4(3)−1 = 12−1 = 11' },
          { label: 'x = 4, y =', correctAnswer: '15', explanation: 'y = 4(4)−1 = 16−1 = 15' },
        ] },
        { difficulty: 'Medium', question: 'A function machine applies "multiply by 4, then subtract 3" to each input. Complete the outputs for inputs 2, 5 and 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 2, output =', correctAnswer: '5', explanation: '2 × 4 = 8, then 8 − 3 = 5' },
          { label: 'b) Input 5, output =', correctAnswer: '17', explanation: '5 × 4 = 20, then 20 − 3 = 17' },
          { label: 'c) Input 8, output =', correctAnswer: '29', explanation: '8 × 4 = 32, then 32 − 3 = 29' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Find the rule for this input-output table.\n\nInput:  2,  4,  6,  8\nOutput: 13, 23, 33, 43', answer: 'output = 5 × input + 3', checkMode: 'auto', correctAnswer: 'output = 5 × input + 3', correctAnswers: ['output = 5 × input + 3', 'output = 5 x input + 3', '5 × input + 3', '5 x input + 3', '5n + 3'], explanation: 'Differences in output: 23−13=10, 33−23=10, 43−33=10, over a gap of 2 inputs, so 10 ÷ 2 = 5. Try output = 5 × input + c: 5×2=10, 13−10=3. Rule: output = 5 × input + 3. Check: 5(4)+3=23 ✓, 5(6)+3=33 ✓, 5(8)+3=43 ✓' },
        { difficulty: 'Hard', question: 'A function machine uses the rule output = 7 × input − 3. Which input gives an output of 53?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Set up: 7 × input − 3 = 53. Add 3 to both sides: 7 × input = 56. Divide by 7: input = 8. Check: 7(8)−3 = 56−3 = 53 ✓' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of triangles is made from matchsticks, as shown. Pattern 1 is a single triangle made of 3 matchsticks. Pattern 2 has two triangles joined side by side in a row, sharing one matchstick between them, using 5 matchsticks in total. Pattern 3 has three triangles joined in a row, using 7 matchsticks in total. How many matchsticks are needed for Pattern 9?', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19 matchsticks'], explanation: 'The pattern increases by 2 matchsticks each time: 3, 5, 7 (differences of 2). Rule: matchsticks = 2n + 1. Check: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Pattern 9: 2(9)+1 = 18+1 = 19 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 sticks</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 sticks</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 sticks</text></g></svg>' },
        { difficulty: 'Medium', question: 'A growing dot pattern, as shown, follows this structure: Pattern 1 has 2 dots. Pattern 2 has 5 dots. Pattern 3 has 8 dots, with each new pattern adding 3 more dots than the last in a consistent staircase arrangement. Find the rule for the number of dots at pattern n, then use it to find the number of dots in Pattern 10.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule (dots = a × n + b)', correctAnswer: 'dots = 3n − 1', correctAnswers: ['dots = 3n − 1', 'dots = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Constant difference of 3 each time (2,5,8). Substitute n=1: 3(1)+c=2 → c=−1. Rule: dots = 3n − 1. Check: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Dots in Pattern 10', correctAnswer: '29', explanation: '3(10) − 1 = 30 − 1 = 29 dots.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 dots</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 dots</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 dots</text></g></svg>' },
        { difficulty: 'Hard', question: 'A pattern of separate squares is built from matchsticks, as shown — each square stands alone and does not share any sides with the others. Pattern 1 has 1 square made of 4 matchsticks. Pattern 2 has 2 separate squares made of 8 matchsticks. Pattern 3 has 3 separate squares made of 12 matchsticks. Kagiso says Pattern 11 will need 40 matchsticks. Check his answer using the rule, and correct it if he is wrong.', answer: 'Kagiso is incorrect. Since each square is separate (no shared sides), the number of matchsticks is always 4 times the pattern number: matchsticks = 4n. Check: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. For Pattern 11: 4 × 11 = 44 matchsticks, not 40. Kagiso likely miscounted or misapplied the rule. The correct answer is 44 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 sticks</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 sticks</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 sticks</text></g></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 8, 17, 26, 35 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '44,53', correctAnswers: ['44,53', '44, 53'], explanation: 'Common difference = 9. 35+9=44, 44+9=53.' },
          { label: 'b) Rule in words', correctAnswer: 'add 9 each time', checkMode: 'self', answer: 'Start at 8 and add 9 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'Precious says the pattern 8, 17, 26, 35 has the rule nth term = 8n + 1, because it works for the first term. Test her rule against every term in the pattern. Is she correct?', answer: 'Precious is incorrect. Check n=1: 8(1)+1=9, not 8 ✗ — her rule does not even work for the first term, so it is wrong from the start. The common difference is actually 9 (17−8=9, 26−17=9, 35−26=9), so the rule should start with 9n. Substituting n=1: 9(1)+c=8 → c=−1. The correct rule is nth term = 9n − 1. Check: 9(1)−1=8 ✓, 9(2)−1=17 ✓, 9(3)−1=26 ✓, 9(4)−1=35 ✓. This shows why a rule must be checked against every term, not assumed from a quick glance.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world word problems ────────────────────
        { difficulty: 'Medium-Hard', question: 'A phone repair shop charges a callout fee of R60 plus R45 per hour of labour, using the rule: cost = 45 × hours + 60. Complete the table for 2, 5 and 7 hours.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 2 hours', correctAnswer: '150', explanation: '45 × 2 + 60 = 90 + 60 = 150' },
          { label: 'b) Cost for 5 hours', correctAnswer: '285', explanation: '45 × 5 + 60 = 225 + 60 = 285' },
          { label: 'c) Cost for 7 hours', correctAnswer: '375', explanation: '45 × 7 + 60 = 315 + 60 = 375' },
        ] },
        { difficulty: 'Hard', question: 'Using the repair shop rule cost = 45 × hours + 60, after how many full hours will the total cost first reach at least R555?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Set up: 45 × hours + 60 ≥ 555, so 45 × hours ≥ 495, giving hours ≥ 11. Check: 10 hours gives 45(10)+60 = 510 (too little). 11 hours gives 45(11)+60 = 555 ✓. 11 hours is the first to reach at least R555.' },
        { difficulty: 'Hard', question: 'A stadium arranges seats in rows that follow the rule: seats = 3 × row number + 12. Row 1 has 15 seats, row 2 has 18 seats, and so on.\n\na) How many seats are in row 18?\nb) If a row has 66 seats, which row number is it?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Seats in row 18', correctAnswer: '66', explanation: '3 × 18 + 12 = 54 + 12 = 66 seats.' },
          { label: 'b) Row number for 66 seats', correctAnswer: '18', explanation: 'Set up: 3 × row + 12 = 66. Subtract 12: 3 × row = 54. Divide by 3: row = 18. Check: 3(18)+12=66 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, nth term rules, input-output tables, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of patterns and functions. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on rules and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1 and 2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 8, 15, 22, 29, 36, ?', answer: '43', checkMode: 'auto', correctAnswer: '43', correctAnswers: ['43'], explanation: 'The common difference is 7 (15−8=7, 22−15=7, 29−22=7, 36−29=7). Next term: 36 + 7 = 43 ✓' },
        { difficulty: 'Easy', question: 'A dam starts with 810 kilolitres of water and loses 80 kilolitres a day to evaporation: 810, 730, 650, 570. How many kilolitres will be left the next day?', answer: '490', checkMode: 'auto', correctAnswer: '490', correctAnswers: ['490', '490 kilolitres', '490 kl'], explanation: 'The rule is subtract 80 each time. 570 − 80 = 490 kilolitres ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 6, ?, 24, 33.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'The known difference is 33 − 24 = 9, so the rule is add 9 each time. 6 + 9 = 15. Check: 24 − 15 = 9 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "triple the term, then add 2", starting at 1: 1, 5, 17, 53. What is the next term?', answer: '161', checkMode: 'auto', correctAnswer: '161', correctAnswers: ['161'], explanation: 'Apply the rule to 53: 53 × 3 = 159, then 159 + 2 = 161 ✓' },

        // ── Block 2: General rule/nth term (words + algebraic) ──────────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 6, 10, 14, 18 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 4 each time', checkMode: 'self', answer: 'Start at 6 and add 4 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '4n+2', correctAnswers: ['4n+2', '4n + 2'], explanation: 'Common difference = 4. Substitute n=1: 4(1)+c=6 → c=2. Rule: nth term = 4n+2. Check: 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 9, 20, 31, 42.', answer: 'nth term = 11n − 2', checkMode: 'auto', correctAnswer: '11n-2', correctAnswers: ['11n-2', '11n − 2', 'nth term=11n-2', 'nth term = 11n − 2'], explanation: 'Common difference = 11. Substitute n=1: 11(1)+c=9 → c=−2. Rule: nth term = 11n − 2. Check: 11(2)−2=20 ✓, 11(3)−2=31 ✓, 11(4)−2=42 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 2, 5, 10, 17. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 24th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+1', correctAnswers: ['n²+1', 'n^2+1', 'nth term=n²+1'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+1: 1+1=2 ✓, 4+1=5 ✓, 9+1=10 ✓, 16+1=17 ✓' },
          { label: 'b) 24th term', correctAnswer: '577', explanation: '24² + 1 = 576 + 1 = 577.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle says the pattern 4, 13, 22, 31 has the rule nth term = 4n. Check her rule for every term. Is she correct, and if not, what is the correct rule?', answer: 'Amahle is incorrect. Check n=1: 4(1)=4 ✓ (this one happens to match), but check n=2: 4(2)=8, not 13 ✗ — her rule fails from the second term onward. The common difference is actually 9 (13−4=9, 22−13=9, 31−22=9), so the rule should start with 9n. Substituting n=1: 9(1)+c=4 → c=−5. The correct rule is nth term = 9n − 5. Check: 9(1)−5=4 ✓, 9(2)−5=13 ✓, 9(3)−5=22 ✓, 9(4)−5=31 ✓. This shows why a rule that matches the first term is not automatically correct.', checkMode: 'self' },

        // ── Block 3: Input-output flow diagrams / function tables ───────────
        { difficulty: 'Easy', question: 'Complete the table using the rule y = 2x + 5 for x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '7', explanation: 'y = 2(1)+5 = 2+5 = 7' },
          { label: 'x = 2, y =', correctAnswer: '9', explanation: 'y = 2(2)+5 = 4+5 = 9' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 2(3)+5 = 6+5 = 11' },
          { label: 'x = 4, y =', correctAnswer: '13', explanation: 'y = 2(4)+5 = 8+5 = 13' },
        ] },
        { difficulty: 'Medium', question: 'A function machine applies "multiply by 5, then subtract 4" to each input. Complete the outputs for inputs 2, 5 and 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 2, output =', correctAnswer: '6', explanation: '2 × 5 = 10, then 10 − 4 = 6' },
          { label: 'b) Input 5, output =', correctAnswer: '21', explanation: '5 × 5 = 25, then 25 − 4 = 21' },
          { label: 'c) Input 8, output =', correctAnswer: '36', explanation: '8 × 5 = 40, then 40 − 4 = 36' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Find the rule for this input-output table.\n\nInput:  2,  4,  6,  8\nOutput: 7, 13, 19, 25', answer: 'output = 3 × input + 1', checkMode: 'auto', correctAnswer: 'output = 3 × input + 1', correctAnswers: ['output = 3 × input + 1', 'output = 3 x input + 1', '3 × input + 1', '3 x input + 1', '3n + 1'], explanation: 'Differences in output: 13−7=6, 19−13=6, 25−19=6, over a gap of 2 inputs, so 6 ÷ 2 = 3. Try output = 3 × input + c: 3×2=6, 7−6=1. Rule: output = 3 × input + 1. Check: 3(4)+1=13 ✓, 3(6)+1=19 ✓, 3(8)+1=25 ✓' },
        { difficulty: 'Hard', question: 'A function machine uses the rule output = 8 × input − 5. Which input gives an output of 59?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Set up: 8 × input − 5 = 59. Add 5 to both sides: 8 × input = 64. Divide by 8: input = 8. Check: 8(8)−5 = 64−5 = 59 ✓' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of triangles is made from matchsticks, as shown. Pattern 1 is a single triangle made of 3 matchsticks. Pattern 2 has two triangles joined side by side in a row, sharing one matchstick between them, using 5 matchsticks in total. Pattern 3 has three triangles joined in a row, using 7 matchsticks in total. How many matchsticks are needed for Pattern 20?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 matchsticks'], explanation: 'The pattern increases by 2 matchsticks each time: 3, 5, 7 (differences of 2). Rule: matchsticks = 2n + 1. Check: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Pattern 20: 2(20)+1 = 40+1 = 41 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 sticks</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 sticks</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 sticks</text></g></svg>' },
        { difficulty: 'Medium', question: 'A growing dot pattern, as shown, follows this structure: Pattern 1 has 2 dots. Pattern 2 has 5 dots. Pattern 3 has 8 dots, with each new pattern adding 3 more dots than the last in a consistent staircase arrangement. Find the rule for the number of dots at pattern n, then use it to find the number of dots in Pattern 14.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule (dots = a × n + b)', correctAnswer: 'dots = 3n − 1', correctAnswers: ['dots = 3n − 1', 'dots = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Constant difference of 3 each time (2,5,8). Substitute n=1: 3(1)+c=2 → c=−1. Rule: dots = 3n − 1. Check: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Dots in Pattern 14', correctAnswer: '41', explanation: '3(14) − 1 = 42 − 1 = 41 dots.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 dots</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 dots</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 dots</text></g></svg>' },
        { difficulty: 'Hard', question: 'A pattern of separate squares is built from matchsticks, as shown — each square stands alone and does not share any sides with the others. Pattern 1 has 1 square made of 4 matchsticks. Pattern 2 has 2 separate squares made of 8 matchsticks. Pattern 3 has 3 separate squares made of 12 matchsticks. Themba says Pattern 9 will need 32 matchsticks. Check his answer using the rule, and correct it if he is wrong.', answer: 'Themba is incorrect. Since each square is separate (no shared sides), the number of matchsticks is always 4 times the pattern number: matchsticks = 4n. Check: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. For Pattern 9: 4 × 9 = 36 matchsticks, not 32. Themba likely miscounted. The correct answer is 36 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 sticks</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 sticks</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Pattern 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 sticks</text></g></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 4, 13, 22, 31 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '40,49', correctAnswers: ['40,49', '40, 49'], explanation: 'Common difference = 9. 31+9=40, 40+9=49.' },
          { label: 'b) Rule in words', correctAnswer: 'add 9 each time', checkMode: 'self', answer: 'Start at 4 and add 9 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'Sizwe says the pattern 4, 13, 22, 31 has the rule nth term = 4n + 1, because it works for the first term. Test his rule against every term in the pattern. Is he correct?', answer: 'Sizwe is incorrect. Check n=1: 4(1)+1=5, not 4 ✗ — his rule does not even work for the first term, so it is wrong from the start. The common difference is actually 9 (13−4=9, 22−13=9, 31−22=9), so the rule should start with 9n. Substituting n=1: 9(1)+c=4 → c=−5. The correct rule is nth term = 9n − 5. Check: 9(1)−5=4 ✓, 9(2)−5=13 ✓, 9(3)−5=22 ✓, 9(4)−5=31 ✓. This shows why a rule must be checked against every term, not assumed from a quick glance.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world word problems ────────────────────
        { difficulty: 'Medium-Hard', question: 'A driving school charges a registration fee of R100 plus R30 per lesson, using the rule: cost = 30 × lessons + 100. Complete the table for 3, 6 and 9 lessons.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 3 lessons', correctAnswer: '190', explanation: '30 × 3 + 100 = 90 + 100 = 190' },
          { label: 'b) Cost for 6 lessons', correctAnswer: '280', explanation: '30 × 6 + 100 = 180 + 100 = 280' },
          { label: 'c) Cost for 9 lessons', correctAnswer: '370', explanation: '30 × 9 + 100 = 270 + 100 = 370' },
        ] },
        { difficulty: 'Hard', question: 'Using the driving school rule cost = 30 × lessons + 100, after how many full lessons will the total cost first reach at least R460?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Set up: 30 × lessons + 100 ≥ 460, so 30 × lessons ≥ 360, giving lessons ≥ 12. Check: 11 lessons gives 30(11)+100 = 430 (too little). 12 lessons gives 30(12)+100 = 460 ✓. 12 lessons is the first to reach at least R460.' },
        { difficulty: 'Hard', question: 'A cinema arranges seats in rows that follow the rule: seats = 5 × row number + 8. Row 1 has 13 seats, row 2 has 18 seats, and so on.\n\na) How many seats are in row 20?\nb) If a row has 88 seats, which row number is it?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Seats in row 20', correctAnswer: '108', explanation: '5 × 20 + 8 = 100 + 8 = 108 seats.' },
          { label: 'b) Row number for 88 seats', correctAnswer: '16', explanation: 'Set up: 5 × row + 8 = 88. Subtract 8: 5 × row = 80. Divide by 5: row = 16. Check: 5(16)+8=88 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, nth term rules, input-output tables, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of patterns and functions. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on rules and tables, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered patterns, functions and relationships for Grade 7. Keep it up!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of this topic. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
