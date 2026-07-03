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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the line y=2x-6, with the x-intercept at (3,0) and y-intercept at (0,-6) clearly marked]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining y-intercept, x-intercept and gradient of linear graphs with worked examples" />',
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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the line y=-x+4 plotted using its x-intercept (4,0) and y-intercept (0,4)]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a straight-line graph using the intercept method and a table of values" />',
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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing a line passing through (0,5) and (2,9), with the gradient triangle (rise of 4, run of 2) marked between the points]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to determine the equation of a linear graph from two known points using y = mx + c" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered graphs.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
