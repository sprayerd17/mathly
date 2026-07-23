import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (graphs roles) ───────────────────────────────────────────
// y-intercept / plotted points → blue   (#2563eb)
// x-intercept / gradient       → orange (#ea580c)
// gradient / line / equation   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Graphs',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — x-INTERCEPT, y-INTERCEPT AND GRADIENT OF LINEAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'intercepts-and-gradient',
      title: 'x-Intercept, y-Intercept and Gradient of Linear Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>y-intercept</strong> is where a line crosses the y-axis (where x = 0). The <strong>x-intercept</strong> is where a line crosses the x-axis (where y = 0). The <strong>gradient</strong> describes the steepness and direction of a line — calculated as (change in y) ÷ (change in x) between any two points on the line.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('y-intercept')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('x-intercept')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gradient')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">y-Intercept</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Where the line crosses the y-axis.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>How to find it:</strong> Set x = 0 and solve for y.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">x-Intercept</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Where the line crosses the x-axis.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>How to find it:</strong> Set y = 0 and solve for x.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gradient</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Steepness and direction of the line.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Formula:</strong> (y₂ − y₁) ÷ (x₂ − x₁)</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gradient formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('gradient')} = (y₂ − y₁) ÷ (x₂ − x₁) = ${gr('change in y')} ÷ ${gr('change in x')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gradient sign tells you the direction</p>` +
        `<p style="margin:0;color:#1e3a8a;">A <strong>positive gradient</strong> means the line rises from left to right. A <strong>negative gradient</strong> means the line falls from left to right. A <strong>zero gradient</strong> means the line is horizontal. A <strong>vertical line</strong> has an undefined gradient.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the x-intercept and y-intercept of y = 2x − 6.',
          answer: `${bl('y-intercept: (0, −6)')}   ${or('x-intercept: (3, 0)')}`,
          steps: [
            `${bl('y-intercept:')} Set x = 0: y = 2(0) − 6 = −6. The y-intercept is ${bl('(0, −6)')}.`,
            `${or('x-intercept:')} Set y = 0: 0 = 2x − 6. Add 6 to both sides: 2x = 6. Divide by 2: x = 3. The x-intercept is ${or('(3, 0)')}.`,
            `See the diagram below showing both intercepts.`,
          ],
        },
        {
          question: 'Find the gradient of the line passing through (1, 3) and (4, 12).',
          answer: `${gr('Gradient = 3')}`,
          steps: [
            `Identify the two points: (x₁, y₁) = (1, 3) and (x₂, y₂) = (4, 12).`,
            `Apply the gradient formula: gradient = (y₂ − y₁) ÷ (x₂ − x₁) = (12 − 3) ÷ (4 − 1) = ${gr('9 ÷ 3 = 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — y-intercept ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the y-intercept of y = 3x + 7.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Set x = 0: y = 3(0) + 7 = 7. The y-intercept is 7.',
        },

        // ── Q2 Easy — x-intercept ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the x-intercept of y = 2x − 8.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Set y = 0: 0 = 2x − 8. So 2x = 8, x = 4. The x-intercept is 4.',
        },

        // ── Q3 Medium — gradient between two points ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the gradient of the line through (2, 5) and (6, 17).',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Gradient = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3.',
        },

        // ── Q4 Hard — horizontal vs vertical gradient ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the gradient of a horizontal line is undefined. Is he correct? Explain.',
          answer: 'No — a horizontal line has a gradient of 0, since there is no change in y. A vertical line is the one with an undefined gradient.',
          checkMode: 'self',
        },

        // ── Q5 Medium — both intercepts ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find both intercepts of y = −3x + 9.',
          answer: 'y-intercept: (0, 9). x-intercept: set y = 0, x = 3, so (3, 0).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A Cartesian plane showing the line y = 2x − 6, with the x-intercept at (3, 0) and y-intercept at (0, −6) clearly marked',

      diagramSvg:
        '<svg viewBox="0 0 180 230" xmlns="http://www.w3.org/2000/svg"><text x="90" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = 2x − 6</text><line x1="20" y1="70" x2="160" y2="70" stroke="#0f1f3d" stroke-width="2"/><polygon points="164,70 156,66 156,74" fill="#0f1f3d"/><text x="160" y="64" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="225" x2="60" y2="20" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,16 56,24 64,24" fill="#0f1f3d"/><text x="66" y="24" font-size="9" fill="#0f1f3d">y</text><line x1="42" y1="214" x2="132" y2="34" stroke="#16a34a" stroke-width="2.5"/><circle cx="114" cy="70" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="118" y="62" font-size="9" font-weight="700" fill="#ea580c">(3, 0)</text><circle cx="60" cy="178" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="10" y="192" font-size="9" font-weight="700" fill="#2563eb">(0, −6)</text></svg>',

      videoPlaceholder:
        'Short video explaining y-intercept, x-intercept and gradient of linear graphs with worked examples',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DRAWING LINEAR GRAPHS FROM GIVEN EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-linear-graphs',
      title: 'Drawing Linear Graphs from Given Equations',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We draw straight-line graphs from given equations by finding the intercepts or using a <strong>table of ordered pairs</strong>, then plotting and connecting the points with a straight line.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('plotted points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('connecting line')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two methods for drawing linear graphs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Method 1: Intercept method</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Find the ${bl('x-intercept')} and ${bl('y-intercept')}, plot both ${bl('points')} and draw the ${gr('line')} through them.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Best when the intercepts are easy whole-number values.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Method 2: Table of values</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Choose at least 3 x-values, substitute each into the equation to find y, then plot the ${bl('ordered pairs')} and draw the ${gr('line')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Always use three points as a check — they must be collinear.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always use a ruler</p>` +
        `<p style="margin:0;color:#1e3a8a;">A linear graph is always a <strong>straight line</strong> — use a ruler to draw it. Extend the ${gr('line')} past the plotted ${bl('points')} to show it continues in both directions.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Draw the graph of y = −x + 4 by finding its intercepts.',
          answer: `${bl('(0, 4)')} and ${bl('(4, 0)')} plotted and connected with a ${gr('straight line')}`,
          steps: [
            `${bl('y-intercept')} (set x = 0): y = −(0) + 4 = 4. Plot the point ${bl('(0, 4)')}.`,
            `${bl('x-intercept')} (set y = 0): 0 = −x + 4. So x = 4. Plot the point ${bl('(4, 0)')}.`,
            `Draw the ${gr('straight line')} through ${bl('(0, 4)')} and ${bl('(4, 0)')}. See the diagram below.`,
          ],
        },
        {
          question: 'Sipho draws y = 3x using a table of values for x = −1, 0 and 1.',
          answer: `Points ${bl('(−1, −3)')}, ${bl('(0, 0)')} and ${bl('(1, 3)')} plotted and connected with a ${gr('straight line')}`,
          steps: [
            `x = −1: y = 3(−1) = −3. Point: ${bl('(−1, −3)')}.`,
            `x = 0: y = 3(0) = 0. Point: ${bl('(0, 0)')}.`,
            `x = 1: y = 3(1) = 3. Point: ${bl('(1, 3)')}.`,
            `Plotting these points and connecting them shows a ${gr('straight line')} passing through the origin with gradient 3.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard — intercepts for drawing ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato draws y = 2x − 4 using its intercepts. Find the two points she would plot.',
          answer: 'y-intercept (0, −4). x-intercept (2, 0).',
          checkMode: 'self',
        },

        // ── Q7 Medium — gradient between two points ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the gradient of the line through (−1, 2) and (3, 14).',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Gradient = (14 − 2) ÷ (3 − (−1)) = 12 ÷ 4 = 3.',
        },

        // ── Q8 Hard — equation from two points ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A line passes through (0, 3) and (4, 15). Find its equation.',
          answer: 'y-intercept = 3. Gradient = (15 − 3) ÷ 4 = 3. Equation: y = 3x + 3.',
          checkMode: 'self',
        },

        // ── Q9 Medium — equation from gradient and y-intercept ───────────────
        {
          difficulty: 'Medium',
          question: 'A graph crosses the y-axis at −2 and has a gradient of 5. Write its equation.',
          answer: 'y=5x-2',
          checkMode: 'auto',
          correctAnswer: 'y=5x-2',
          correctAnswers: ['y=5x-2', 'y = 5x - 2', 'y = 5x − 2', 'y=5x−2'],
          explanation: 'Using y = mx + c with m = 5 and c = −2: y = 5x − 2.',
        },

        // ── Q10 Hard — equation and x-intercept, two parts ───────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo reads a graph and finds the gradient is −2 with a y-intercept of 6. Write the equation and find the x-intercept.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write the equation',
              correctAnswer: 'y=-2x+6',
              correctAnswers: ['y=-2x+6', 'y = -2x + 6', 'y = −2x + 6', 'y=−2x+6'],
              explanation: 'Using y = mx + c with m = −2 and c = 6: y = −2x + 6.',
            },
            {
              label: 'b) Find the x-intercept',
              correctAnswer: '3',
              correctAnswers: ['3', 'x=3', 'x = 3'],
              explanation: 'Set y = 0: 0 = −2x + 6. So 2x = 6, x = 3. The x-intercept is 3.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'A Cartesian plane showing the line y = −x + 4 plotted using its x-intercept (4, 0) and y-intercept (0, 4)',

      diagramSvg:
        '<svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = −x + 4</text><line x1="15" y1="150" x2="185" y2="150" stroke="#0f1f3d" stroke-width="2"/><polygon points="189,150 181,146 181,154" fill="#0f1f3d"/><text x="185" y="144" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="50" y1="200" x2="50" y2="25" stroke="#0f1f3d" stroke-width="2"/><polygon points="50,21 46,29 54,29" fill="#0f1f3d"/><text x="56" y="29" font-size="9" fill="#0f1f3d">y</text><line x1="30" y1="50" x2="170" y2="190" stroke="#16a34a" stroke-width="2.5"/><circle cx="130" cy="150" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="134" y="145" font-size="9" font-weight="700" fill="#ea580c">(4, 0)</text><circle cx="50" cy="70" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="8" y="60" font-size="9" font-weight="700" fill="#2563eb">(0, 4)</text></svg>',

      videoPlaceholder:
        'Short video showing how to draw a straight-line graph using the intercept method and a table of values',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DETERMINING EQUATIONS FROM GIVEN LINEAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-equations',
      title: 'Determining Equations from Given Linear Graphs',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">Given a linear graph (or two known points on it), we determine its equation by calculating the <strong>gradient</strong> and identifying the <strong>y-intercept</strong>, then writing the equation in the form y = mx + c.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('y-intercept (c)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gradient (m)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for finding the equation y = mx + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find c (y-intercept)')} — Read the y-intercept from the graph, or substitute x = 0 into the equation to find where the line crosses the y-axis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Find m (gradient)')} — Use the formula m = (y₂ − y₁) ÷ (x₂ − x₁) with any two known points on the line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the equation')} — Substitute m and c into y = mx + c to write the ${gr('final equation')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">If neither point is on the y-axis</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you are given two points and neither has x = 0, calculate the ${or('gradient')} first, then substitute one point into y = ${or('m')}x + ${bl('c')} and solve for ${bl('c')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A line passes through (0, 5) and (2, 9). Find its equation.',
          answer: `${gr('y = 2x + 5')}`,
          steps: [
            `${bl('y-intercept (c):')} The point (0, 5) has x = 0, so c = ${bl('5')}.`,
            `${or('Gradient (m):')} m = (9 − 5) ÷ (2 − 0) = 4 ÷ 2 = ${or('2')}.`,
            `${gr('Equation:')} y = ${or('2')}x + ${bl('5')} → ${gr('y = 2x + 5')}.`,
          ],
        },
        {
          question: 'Lerato reads a graph showing the line crosses the y-axis at −3 and has a gradient of −4. Write the equation.',
          answer: `${gr('y = −4x − 3')}`,
          steps: [
            `${bl('y-intercept (c):')} c = ${bl('−3')} (read from the graph).`,
            `${or('Gradient (m):')} m = ${or('−4')} (read from the graph).`,
            `${gr('Equation:')} y = ${or('−4')}x + (${bl('−3')}) → ${gr('y = −4x − 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium — gradient through origin ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the gradient of the line through (0, 0) and (5, 20).',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Gradient = (20 − 0) ÷ (5 − 0) = 20 ÷ 5 = 4.',
        },

        // ── Q12 Hard — y-intercept of y=4x ───────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says a line with equation y = 4x has no y-intercept. Is she correct? Explain.',
          answer: 'No — it does have a y-intercept, which is 0 (the line passes through the origin (0, 0)).',
          checkMode: 'self',
        },

        // ── Q13 Hard — gradient and equation from intercepts ─────────────────
        {
          difficulty: 'Hard',
          question: 'A line has x-intercept at (5, 0) and y-intercept at (0, 10). Find its gradient and equation.',
          answer: 'Gradient = (0 − 10) ÷ (5 − 0) = −2. Equation: y = −2x + 10.',
          checkMode: 'self',
        },

        // ── Q14 Hard — parallel lines ─────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says two lines with the same gradient but different y-intercepts will never cross. Is he correct? Explain.',
          answer: 'Yes — lines with the same gradient are parallel, meaning they never intersect since they always maintain the same distance apart.',
          checkMode: 'self',
        },

        // ── Q15 Hard — full equation from two points ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'A line passes through (−2, 1) and (2, 17). Find its equation, showing the gradient and y-intercept calculations.',
          answer: 'Gradient = (17 − 1) ÷ (2 − (−2)) = 16 ÷ 4 = 4. Using point (2, 17): 17 = 4(2) + c. c = 9. Equation: y = 4x + 9.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A Cartesian plane showing a line passing through (0, 5) and (2, 9), with the gradient triangle (rise of 4, run of 2) marked between the points',

      diagramSvg:
        '<svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg"><text x="80" y="12" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = 2x + 5</text><line x1="25" y1="165" x2="115" y2="165" stroke="#0f1f3d" stroke-width="2"/><polygon points="119,165 111,161 111,169" fill="#0f1f3d"/><text x="115" y="159" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="45" y1="183" x2="45" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="45,6 41,14 49,14" fill="#0f1f3d"/><text x="52" y="21" font-size="9" fill="#0f1f3d">y</text><line x1="38" y1="109" x2="83" y2="19" stroke="#16a34a" stroke-width="2.5"/><circle cx="45" cy="95" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="8" y="91" font-size="9" font-weight="700" fill="#2563eb">(0, 5)</text><circle cx="73" cy="39" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="78" y="35" font-size="9" font-weight="700" fill="#2563eb">(2, 9)</text><line x1="45" y1="95" x2="73" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><line x1="73" y1="95" x2="73" y2="39" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><text x="59" y="108" font-size="8" font-weight="700" fill="#ea580c" text-anchor="middle">run 2</text><text x="79" y="70" font-size="8" font-weight="700" fill="#ea580c">rise 4</text></svg>',

      videoPlaceholder:
        'Short video showing how to determine the equation of a linear graph from two known points using y = mx + c',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered graphs.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-1):   y-intercept / x-intercept from a given equation
    // Block 2 (2-4):   Gradient between two points
    // Block 3 (5-8):   Equation of a line (y = mx + c) from gradient/points
    // Block 4 (9-11):  [DIAGRAM] Reading gradient/x-intercept/equation from
    //                  a described drawn line
    // Block 5 (12-15): [DIAGRAM] Interpreting travel-graphs / distance-time
    // Block 6 (16-19): Word-problem application, both intercepts, error-spot
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — y-intercept / x-intercept from equation (Easy)
        { difficulty: 'Easy', question: 'Find the y-intercept of y = 4x + 9.', checkMode: 'auto', correctAnswer: '9', answer: '9', explanation: 'Set x = 0: y = 4(0) + 9 = 9. The y-intercept is 9.' },
        { difficulty: 'Easy', question: 'Find the x-intercept of y = 3x − 9.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Set y = 0: 0 = 3x − 9. So 3x = 9, x = 3. The x-intercept is 3.' },

        // Block 2 — gradient between two points (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (2, 5) and (5, 17).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradient = (17 − 5) ÷ (5 − 2) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (−1, 3) and (3, 15).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (15 − 3) ÷ (3 − (−1)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Find the gradient of the line through (0, −4) and (6, 8).', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'Gradient = (8 − (−4)) ÷ (6 − 0) = 12 ÷ 6 = 2.' },

        // Block 3 — equation of a line y = mx + c (Medium)
        { difficulty: 'Medium', question: 'A line has a gradient of 6 and a y-intercept of −4. Write its equation.', checkMode: 'auto', correctAnswer: 'y=6x-4', correctAnswers: ['y=6x-4', 'y = 6x - 4', 'y = 6x − 4', 'y=6x−4'], answer: 'y = 6x − 4', explanation: 'Using y = mx + c with m = 6 and c = −4: y = 6x − 4.' },
        { difficulty: 'Medium', question: 'A line passes through (0, 7) and (4, 23). Find its equation.', checkMode: 'auto', correctAnswer: 'y=4x+7', correctAnswers: ['y=4x+7', 'y = 4x + 7'], answer: 'y = 4x + 7', explanation: 'y-intercept: (0, 7) has x = 0, so c = 7.\nGradient: m = (23 − 7) ÷ (4 − 0) = 16 ÷ 4 = 4.\nEquation: y = 4x + 7.' },
        { difficulty: 'Medium', question: 'A line passes through (2, 11) and (5, 20). Find its equation.', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], answer: 'y = 3x + 5', explanation: 'Gradient: m = (20 − 11) ÷ (5 − 2) = 9 ÷ 3 = 3.\nSubstitute (2, 11): 11 = 3(2) + c, so c = 5.\nEquation: y = 3x + 5.' },
        { difficulty: 'Medium', question: 'Find the x-intercept of y = −4x + 12.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Set y = 0: 0 = −4x + 12. So 4x = 12, x = 3. The x-intercept is 3.' },

        // Block 4 — [DIAGRAM] reading gradient/x-intercept/equation from a described drawn line (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, 2) and (3, 11). Find the gradient of the line.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (11 − 2) ÷ (3 − 0) = 9 ÷ 3 = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="94.55" x2="210" y2="94.55" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="44.08" x2="210" y2="44.08" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="100.43" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="143.57" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">3</text><text x="53.29" y="97.05" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="46.58" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="155.01" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,138.45 206.12,20.36" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="124.83" r="4" fill="#2563eb"/><text x="64.29" y="117.83" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 2)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(3, 11)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, 6) and (4, −2). Find the x-intercept of the line.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (−2 − 6) ÷ (4 − 0) = −8 ÷ 4 = −2. Equation: y = −2x + 6. Set y = 0: 0 = −2x + 6, so x = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="117.26" x2="210" y2="117.26" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="47.86" x2="210" y2="47.86" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="117.26" x2="210" y2="117.26" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="127.26" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="127.26" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="50.36" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="127.26" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 6)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, -2)</text></svg>' },
        { difficulty: 'Hard', question: 'The graph shown is a straight line passing through (−1, −5) and (2, 4). Find the equation of the line.', checkMode: 'auto', correctAnswer: 'y=3x-2', correctAnswers: ['y=3x-2', 'y = 3x - 2', 'y = 3x − 2', 'y=3x−2'], answer: 'y = 3x − 2', explanation: 'Gradient: m = (4 − (−5)) ÷ (2 − (−1)) = 9 ÷ 3 = 3.\nSubstitute (2, 4): 4 = 3(2) + c, so c = −2.\nEquation: y = 3x − 2.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="83.33" x2="210" y2="83.33" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="21.65" x2="210" y2="21.65" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="83.33" x2="210" y2="83.33" stroke="#374151" stroke-width="1.5"/><line x1="100.43" y1="165" x2="100.43" y2="14" stroke="#374151" stroke-width="1.5"/><text x="57.29" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">-1</text><text x="143.57" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="186.71" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="96.43" y="147.51" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="96.43" y="24.15" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="96.43" y="93.33" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-1, -5)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 4)</text></svg>' },

        // Block 5 — [DIAGRAM] interpreting travel-graphs / distance-time graphs (Hard)
        { difficulty: 'Hard', question: 'The distance-time graph shows a taxi travelling at a constant speed of 60 km/h for 2.5 hours. What distance does the taxi cover?', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 km'], answer: '150 km', explanation: 'Distance = speed × time = 60 × 2.5 = 150 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">60 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 h</text></svg>' },
        { difficulty: 'Hard', question: 'The distance-time graph shows a straight line from (0, 0) to (3, 180), where x is time in hours and y is distance in kilometres. Find the speed represented by the graph.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Speed = gradient = (180 − 0) ÷ (3 − 0) = 180 ÷ 3 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(3, 180)</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a cyclist travelling at a constant 80 km/h for 2 hours, then resting for 1 hour, then covering the final 150 km of the journey in 2.5 hours. Find the cyclist\'s speed on the final leg of the journey.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Speed = distance ÷ time = 150 ÷ 2.5 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 91.14,97.23" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="58.57" y="123.12" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">80 km/h</text><polyline points="91.14,97.23 119.71,97.23" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="105.43" y="91.23" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rest 1 h</text><polyline points="119.71,97.23 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="151.43" y="57.46" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">150 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="91.14" cy="97.23" r="2.8" fill="#0f1f3d"/><circle cx="119.71" cy="97.23" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="91.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5.5 h</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a bus travelling at 80 km/h for 2 hours, then at 50 km/h for a further 1.5 hours. Find the total distance travelled.', checkMode: 'auto', correctAnswer: '235', correctAnswers: ['235', '235 km'], answer: '235 km', explanation: 'First leg: 80 × 2 = 160 km. Second leg: 50 × 1.5 = 75 km. Total: 160 + 75 = 235 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 123.8,75.6" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="74.9" y="112.3" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">80 km/h</text><polyline points="123.8,75.6 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="153.47" y="46.65" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">50 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="123.8" cy="75.6" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="123.8" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">3.5 h</text></svg>' },

        // Block 6 — word-problem application, both intercepts, error-spot (Hard)
        { difficulty: 'Hard', question: 'A plumber charges according to the formula C = 15n + 200, where C is the total cost in rand and n is the number of hours worked. Find the cost for a job that takes 10 hours.', checkMode: 'auto', correctAnswer: '350', correctAnswers: ['350', 'R350'], answer: 'R350', explanation: 'Substitute n = 10: C = 15(10) + 200 = 150 + 200 = 350. The cost is R350.' },
        { difficulty: 'Hard', question: 'A line has equation y = 5x − 20. Find both the y-intercept and the x-intercept.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Find the y-intercept', correctAnswer: '-20', correctAnswers: ['-20', '−20'], explanation: 'Set x = 0: y = 5(0) − 20 = −20. The y-intercept is −20.' },
          { label: 'b) Find the x-intercept', correctAnswer: '4', correctAnswers: ['4', 'x=4', 'x = 4'], explanation: 'Set y = 0: 0 = 5x − 20. So 5x = 20, x = 4. The x-intercept is 4.' },
        ] },
        { difficulty: 'Hard', question: 'Thandiwe says the line y = −2x + 8 has a gradient of 2. Is she correct? Explain and give the correct gradient.', answer: 'No — she has the wrong sign. In y = mx + c, the coefficient of x is the gradient. Here m = −2, so the gradient is −2, not 2. The negative sign means the line falls from left to right.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cyclist needs to travel 240 km at a constant average speed of 60 km/h. How long will the journey take?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 hours'], answer: '4 hours', explanation: 'Time = distance ÷ speed = 240 ÷ 60 = 4 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered gradients, equations of lines and interpreting graphs.' },
        { minScore: 15, message: 'Great work! Review any missed questions on travel-graphs or equations of lines and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on gradient and y = mx + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — y-intercept / x-intercept from equation (Easy)
        { difficulty: 'Easy', question: 'Find the y-intercept of y = 5x + 6.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'Set x = 0: y = 5(0) + 6 = 6. The y-intercept is 6.' },
        { difficulty: 'Easy', question: 'Find the x-intercept of y = 4x − 12.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Set y = 0: 0 = 4x − 12. So 4x = 12, x = 3. The x-intercept is 3.' },

        // Block 2 — gradient between two points (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (1, 6) and (4, 18).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradient = (18 − 6) ÷ (4 − 1) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (−2, 1) and (2, 13).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (13 − 1) ÷ (2 − (−2)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Find the gradient of the line through (0, 5) and (5, −5).', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], answer: '−2', explanation: 'Gradient = (−5 − 5) ÷ (5 − 0) = −10 ÷ 5 = −2.' },

        // Block 3 — equation of a line y = mx + c (Medium)
        { difficulty: 'Medium', question: 'A line has a gradient of 7 and a y-intercept of −5. Write its equation.', checkMode: 'auto', correctAnswer: 'y=7x-5', correctAnswers: ['y=7x-5', 'y = 7x - 5', 'y = 7x − 5', 'y=7x−5'], answer: 'y = 7x − 5', explanation: 'Using y = mx + c with m = 7 and c = −5: y = 7x − 5.' },
        { difficulty: 'Medium', question: 'A line passes through (0, 4) and (3, 25). Find its equation.', checkMode: 'auto', correctAnswer: 'y=7x+4', correctAnswers: ['y=7x+4', 'y = 7x + 4'], answer: 'y = 7x + 4', explanation: 'y-intercept: (0, 4) has x = 0, so c = 4.\nGradient: m = (25 − 4) ÷ (3 − 0) = 21 ÷ 3 = 7.\nEquation: y = 7x + 4.' },
        { difficulty: 'Medium', question: 'A line passes through (1, 9) and (4, 18). Find its equation.', checkMode: 'auto', correctAnswer: 'y=3x+6', correctAnswers: ['y=3x+6', 'y = 3x + 6'], answer: 'y = 3x + 6', explanation: 'Gradient: m = (18 − 9) ÷ (4 − 1) = 9 ÷ 3 = 3.\nSubstitute (1, 9): 9 = 3(1) + c, so c = 6.\nEquation: y = 3x + 6.' },
        { difficulty: 'Medium', question: 'Find the x-intercept of y = −5x + 20.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Set y = 0: 0 = −5x + 20. So 5x = 20, x = 4. The x-intercept is 4.' },

        // Block 4 — [DIAGRAM] reading gradient/x-intercept/equation from a described drawn line (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, 4) and (2, 14). Find the gradient of the line.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'Gradient = (14 − 4) ÷ (2 − 0) = 10 ÷ 2 = 5.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="105.36" x2="210" y2="105.36" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="65.71" x2="210" y2="65.71" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.05" x2="210" y2="26.05" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="186.71" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="53.29" y="107.86" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="68.21" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="28.55" font-size="7.5" fill="#374151" text-anchor="end">15</text><text x="53.29" y="155.01" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,125.19 206.12,22.09" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="113.29" r="4" fill="#2563eb"/><text x="64.29" y="106.29" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 14)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, 8) and (6, −4). Find the x-intercept of the line.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradient = (−4 − 8) ÷ (6 − 0) = −12 ÷ 6 = −2. Equation: y = −2x + 8. Set y = 0: 0 = −2x + 8, so x = 4.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="154.27" x2="210" y2="154.27" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="108" x2="210" y2="108" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="61.74" x2="210" y2="61.74" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="15.48" x2="210" y2="15.48" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="108" x2="210" y2="108" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="100.43" y="118" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="143.57" y="118" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="186.71" y="118" font-size="7.5" fill="#374151" text-anchor="middle">6</text><text x="53.29" y="156.77" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="53.29" y="64.24" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="17.98" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="118" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 8)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(6, -4)</text></svg>' },
        { difficulty: 'Hard', question: 'The graph shown is a straight line passing through (−2, −7) and (1, 2). Find the equation of the line.', checkMode: 'auto', correctAnswer: 'y=3x-1', correctAnswers: ['y=3x-1', 'y = 3x - 1', 'y = 3x − 1', 'y=3x−1'], answer: 'y = 3x − 1', explanation: 'Gradient: m = (2 − (−7)) ÷ (1 − (−2)) = 9 ÷ 3 = 3.\nSubstitute (1, 2): 2 = 3(1) + c, so c = −1.\nEquation: y = 3x − 1.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="120.34" x2="210" y2="120.34" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58.66" x2="210" y2="58.66" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58.66" x2="210" y2="58.66" stroke="#374151" stroke-width="1.5"/><line x1="143.57" y1="165" x2="143.57" y2="14" stroke="#374151" stroke-width="1.5"/><text x="57.29" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">-2</text><text x="100.43" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">-1</text><text x="186.71" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="139.57" y="122.84" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="139.57" y="68.66" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-2, -7)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(1, 2)</text></svg>' },

        // Block 5 — [DIAGRAM] interpreting travel-graphs / distance-time graphs (Hard)
        { difficulty: 'Hard', question: 'The distance-time graph shows a taxi travelling at a constant speed of 50 km/h for 3.5 hours. What distance does the taxi cover?', checkMode: 'auto', correctAnswer: '175', correctAnswers: ['175', '175 km'], answer: '175 km', explanation: 'Distance = speed × time = 50 × 3.5 = 175 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">50 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">3.5 h</text></svg>' },
        { difficulty: 'Hard', question: 'The distance-time graph shows a straight line from (0, 0) to (4, 220), where x is time in hours and y is distance in kilometres. Find the speed represented by the graph.', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 km/h'], answer: '55 km/h', explanation: 'Speed = gradient = (220 − 0) ÷ (4 − 0) = 220 ÷ 4 = 55 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, 220)</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a cyclist travelling at a constant 70 km/h for 1.5 hours, then resting for 0.5 hours, then covering the final 120 km of the journey in 2 hours. Find the cyclist\'s speed on the final leg of the journey.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Speed = distance ÷ time = 120 ÷ 2 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 92.93,103.72" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="59.46" y="126.36" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">70 km/h</text><polyline points="92.93,103.72 112.57,103.72" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="102.75" y="97.72" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rest 0.5 h</text><polyline points="112.57,103.72 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="147.86" y="60.71" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">120 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="92.93" cy="103.72" r="2.8" fill="#0f1f3d"/><circle cx="112.57" cy="103.72" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="92.93" y="175" font-size="7.5" fill="#374151" text-anchor="middle">1.5 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">4 h</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a bus travelling at 60 km/h for 3 hours, then at 40 km/h for a further 2 hours. Find the total distance travelled.', checkMode: 'auto', correctAnswer: '260', correctAnswers: ['260', '260 km'], answer: '260 km', explanation: 'First leg: 60 × 3 = 180 km. Second leg: 40 × 2 = 80 km. Total: 180 + 80 = 260 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 128.29,74.1" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="77.14" y="111.55" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">60 km/h</text><polyline points="128.29,74.1 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="155.71" y="45.9" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">40 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="128.29" cy="74.1" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="128.29" y="175" font-size="7.5" fill="#374151" text-anchor="middle">3 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },

        // Block 6 — word-problem application, both intercepts, error-spot (Hard)
        { difficulty: 'Hard', question: 'A plumber charges according to the formula C = 20n + 150, where C is the total cost in rand and n is the number of hours worked. Find the cost for a job that takes 8 hours.', checkMode: 'auto', correctAnswer: '310', correctAnswers: ['310', 'R310'], answer: 'R310', explanation: 'Substitute n = 8: C = 20(8) + 150 = 160 + 150 = 310. The cost is R310.' },
        { difficulty: 'Hard', question: 'A line has equation y = 4x − 24. Find both the y-intercept and the x-intercept.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Find the y-intercept', correctAnswer: '-24', correctAnswers: ['-24', '−24'], explanation: 'Set x = 0: y = 4(0) − 24 = −24. The y-intercept is −24.' },
          { label: 'b) Find the x-intercept', correctAnswer: '6', correctAnswers: ['6', 'x=6', 'x = 6'], explanation: 'Set y = 0: 0 = 4x − 24. So 4x = 24, x = 6. The x-intercept is 6.' },
        ] },
        { difficulty: 'Hard', question: 'Katlego says the line y = −3x + 9 has a gradient of 3. Is he correct? Explain and give the correct gradient.', answer: 'No — he has the wrong sign. In y = mx + c, the coefficient of x is the gradient. Here m = −3, so the gradient is −3, not 3. The negative sign means the line falls from left to right.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cyclist needs to travel 210 km at a constant average speed of 70 km/h. How long will the journey take?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 hours'], answer: '3 hours', explanation: 'Time = distance ÷ speed = 210 ÷ 70 = 3 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered gradients, equations of lines and interpreting graphs.' },
        { minScore: 15, message: 'Great work! Review any missed questions on travel-graphs or equations of lines and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on gradient and y = mx + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — y-intercept / x-intercept from equation (Easy)
        { difficulty: 'Easy', question: 'Find the y-intercept of y = 2x + 11.', checkMode: 'auto', correctAnswer: '11', answer: '11', explanation: 'Set x = 0: y = 2(0) + 11 = 11. The y-intercept is 11.' },
        { difficulty: 'Easy', question: 'Find the x-intercept of y = 6x − 18.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Set y = 0: 0 = 6x − 18. So 6x = 18, x = 3. The x-intercept is 3.' },

        // Block 2 — gradient between two points (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (3, 4) and (6, 16).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradient = (16 − 4) ÷ (6 − 3) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Find the gradient of the line through (−3, −4) and (1, 8).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (8 − (−4)) ÷ (1 − (−3)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Find the gradient of the line through (0, 7) and (4, −1).', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], answer: '−2', explanation: 'Gradient = (−1 − 7) ÷ (4 − 0) = −8 ÷ 4 = −2.' },

        // Block 3 — equation of a line y = mx + c (Medium)
        { difficulty: 'Medium', question: 'A line has a gradient of 8 and a y-intercept of −6. Write its equation.', checkMode: 'auto', correctAnswer: 'y=8x-6', correctAnswers: ['y=8x-6', 'y = 8x - 6', 'y = 8x − 6', 'y=8x−6'], answer: 'y = 8x − 6', explanation: 'Using y = mx + c with m = 8 and c = −6: y = 8x − 6.' },
        { difficulty: 'Medium', question: 'A line passes through (0, 3) and (5, 28). Find its equation.', checkMode: 'auto', correctAnswer: 'y=5x+3', correctAnswers: ['y=5x+3', 'y = 5x + 3'], answer: 'y = 5x + 3', explanation: 'y-intercept: (0, 3) has x = 0, so c = 3.\nGradient: m = (28 − 3) ÷ (5 − 0) = 25 ÷ 5 = 5.\nEquation: y = 5x + 3.' },
        { difficulty: 'Medium', question: 'A line passes through (3, 14) and (6, 26). Find its equation.', checkMode: 'auto', correctAnswer: 'y=4x+2', correctAnswers: ['y=4x+2', 'y = 4x + 2'], answer: 'y = 4x + 2', explanation: 'Gradient: m = (26 − 14) ÷ (6 − 3) = 12 ÷ 3 = 4.\nSubstitute (3, 14): 14 = 4(3) + c, so c = 2.\nEquation: y = 4x + 2.' },
        { difficulty: 'Medium', question: 'Find the x-intercept of y = −6x + 24.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Set y = 0: 0 = −6x + 24. So 6x = 24, x = 4. The x-intercept is 4.' },

        // Block 4 — [DIAGRAM] reading gradient/x-intercept/equation from a described drawn line (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, −1) and (4, 11). Find the gradient of the line.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (11 − (−1)) ÷ (4 − 0) = 12 ÷ 4 = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="135.76" x2="210" y2="135.76" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="43.24" x2="210" y2="43.24" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="135.76" x2="210" y2="135.76" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="145.76" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="145.76" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="92" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="45.74" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="145.76" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, -1)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, 11)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The graph shown is a straight line passing through (0, 9) and (5, −6). Find the x-intercept of the line.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradient = (−6 − 9) ÷ (5 − 0) = −15 ÷ 5 = −3. Equation: y = −3x + 9. Set y = 0: 0 = −3x + 9, so x = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="109.06" y1="14" x2="109.06" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="160.82" y1="14" x2="160.82" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="137.61" x2="210" y2="137.61" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.58" x2="210" y2="26.58" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="109.06" y="110.6" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="160.82" y="110.6" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="140.11" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="53.29" y="66.09" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="29.08" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="110.6" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 9)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(5, -6)</text></svg>' },
        { difficulty: 'Hard', question: 'The graph shown is a straight line passing through (−3, −11) and (2, 4). Find the equation of the line.', checkMode: 'auto', correctAnswer: 'y=3x-2', correctAnswers: ['y=3x-2', 'y = 3x - 2', 'y = 3x − 2', 'y=3x−2'], answer: 'y = 3x − 2', explanation: 'Gradient: m = (4 − (−11)) ÷ (2 − (−3)) = 15 ÷ 5 = 3.\nSubstitute (2, 4): 4 = 3(2) + c, so c = −2.\nEquation: y = 3x − 2.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="83.18" y1="14" x2="83.18" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="134.94" y1="14" x2="134.94" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="137.61" x2="210" y2="137.61" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.58" x2="210" y2="26.58" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#374151" stroke-width="1.5"/><line x1="134.94" y1="165" x2="134.94" y2="14" stroke="#374151" stroke-width="1.5"/><text x="83.18" y="73.59" font-size="7.5" fill="#374151" text-anchor="middle">-2</text><text x="186.71" y="73.59" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="130.94" y="140.11" font-size="7.5" fill="#374151" text-anchor="end">-10</text><text x="130.94" y="103.1" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="130.94" y="29.08" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="130.94" y="73.59" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-3, -11)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 4)</text></svg>' },

        // Block 5 — [DIAGRAM] interpreting travel-graphs / distance-time graphs (Hard)
        { difficulty: 'Hard', question: 'The distance-time graph shows a taxi travelling at a constant speed of 45 km/h for 4 hours. What distance does the taxi cover?', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 km'], answer: '180 km', explanation: 'Distance = speed × time = 45 × 4 = 180 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">45 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">4 h</text></svg>' },
        { difficulty: 'Hard', question: 'The distance-time graph shows a straight line from (0, 0) to (5, 275), where x is time in hours and y is distance in kilometres. Find the speed represented by the graph.', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 km/h'], answer: '55 km/h', explanation: 'Speed = gradient = (275 − 0) ÷ (5 − 0) = 275 ÷ 5 = 55 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(5, 275)</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a cyclist travelling at a constant 90 km/h for 1 hour, then resting for 1.5 hours, then covering the final 100 km of the journey in 2.5 hours. Find the cyclist\'s speed on the final leg of the journey.', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 km/h'], answer: '40 km/h', explanation: 'Speed = distance ÷ time = 100 ÷ 2.5 = 40 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 65.43,102.8" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="45.71" y="125.9" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">90 km/h</text><polyline points="65.43,102.8 112.57,102.8" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="89" y="96.8" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rest 1.5 h</text><polyline points="112.57,102.8 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="147.86" y="60.25" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">100 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="65.43" cy="102.8" r="2.8" fill="#0f1f3d"/><circle cx="112.57" cy="102.8" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="65.43" y="175" font-size="7.5" fill="#374151" text-anchor="middle">1 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },
        { difficulty: 'Hard', question: 'The travel graph shows a bus travelling at 70 km/h for 2 hours, then at 30 km/h for a further 3 hours. Find the total distance travelled.', checkMode: 'auto', correctAnswer: '230', correctAnswers: ['230', '230 km'], answer: '230 km', explanation: 'First leg: 70 × 2 = 140 km. Second leg: 30 × 3 = 90 km. Total: 140 + 90 = 230 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">time (hours)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">distance (km)</text><polyline points="34,165 96.86,85.08" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="61.43" y="117.04" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">70 km/h</text><polyline points="96.86,85.08 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="140" y="51.39" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">30 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="96.86" cy="85.08" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="96.86" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },

        // Block 6 — word-problem application, both intercepts, error-spot (Hard)
        { difficulty: 'Hard', question: 'A plumber charges according to the formula C = 25n + 100, where C is the total cost in rand and n is the number of hours worked. Find the cost for a job that takes 6 hours.', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', 'R250'], answer: 'R250', explanation: 'Substitute n = 6: C = 25(6) + 100 = 150 + 100 = 250. The cost is R250.' },
        { difficulty: 'Hard', question: 'A line has equation y = 6x − 30. Find both the y-intercept and the x-intercept.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Find the y-intercept', correctAnswer: '-30', correctAnswers: ['-30', '−30'], explanation: 'Set x = 0: y = 6(0) − 30 = −30. The y-intercept is −30.' },
          { label: 'b) Find the x-intercept', correctAnswer: '5', correctAnswers: ['5', 'x=5', 'x = 5'], explanation: 'Set y = 0: 0 = 6x − 30. So 6x = 30, x = 5. The x-intercept is 5.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle says the line y = −4x + 16 has a gradient of 4. Is she correct? Explain and give the correct gradient.', answer: 'No — she has the wrong sign. In y = mx + c, the coefficient of x is the gradient. Here m = −4, so the gradient is −4, not 4. The negative sign means the line falls from left to right.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cyclist needs to travel 315 km at a constant average speed of 45 km/h. How long will the journey take?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 hours'], answer: '7 hours', explanation: 'Time = distance ÷ speed = 315 ÷ 45 = 7 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered gradients, equations of lines and interpreting graphs.' },
        { minScore: 15, message: 'Great work! Review any missed questions on travel-graphs or equations of lines and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on gradient and y = mx + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
