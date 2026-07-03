import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: x-coordinates → blue   (#2563eb)
//            y-coordinates → green  (#16a34a)
//            final answer  → orange (#ea580c)
// Section 2: gradient step → red    (#dc2626)
//            substitution  → yellow (#d97706)
//            final equation→ green  (#16a34a)
// Section 3: known gradient → red   (#dc2626)
//            new gradient   → green (#16a34a)
//            final equation → blue  (#2563eb)
// Section 4: gradient values → blue (#2563eb)
//            angle values   → orange(#ea580c)
//            +180° correction→ red  (#dc2626)
// Section 5: first line/side → red  (#dc2626)
//            second line/side→ yellow(#d97706)
//            third line/side → green(#16a34a)
//            final conclusion→ blue (#2563eb)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#d97706;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analytical Geometry',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: DISTANCE, GRADIENT AND MIDPOINT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-distance-gradient-midpoint',
      title: 'Revision — Distance, Gradient and Midpoint',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Before working with new line equations, we revise three Grade 10 tools that Analytical Geometry depends on. For two points (${bl('x₁')}, ${gr('y₁')}) and (${bl('x₂')}, ${gr('y₂')}): the <strong>distance formula</strong> is d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²], the <strong>gradient formula</strong> is m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')}), and the <strong>midpoint formula</strong> is M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2). These three formulas let us calculate any measurement between two points on the Cartesian plane without drawing to scale.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-coordinates')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-coordinates')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('final answer')}</span>` +
        `</div>` +

        // ── Three formulas ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Distance</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²]</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The straight-line length between two points.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Gradient</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')})</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The slope or steepness of the line between two points.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Midpoint</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The exact halfway point between two points.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Order of the points does not matter for distance and midpoint</p>` +
        `<p style="margin:0;color:#1e3a8a;">You may swap (${bl('x₁')}, ${gr('y₁')}) and (${bl('x₂')}, ${gr('y₂')}) and still get the same distance and midpoint. For the gradient, swapping the points gives the same result because both the numerator and denominator change sign together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Given A(2, 5) and B(3, 1), calculate the distance AB.',
          answer: `d = ${or('√17')}`,
          steps: [
            `Identify (${bl('x₁')}, ${gr('y₁')}) = (${bl('2')}, ${gr('5')}) and (${bl('x₂')}, ${gr('y₂')}) = (${bl('3')}, ${gr('1')}).`,
            `Substitute into d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²].`,
            `Calculate: d = √[(${bl('3')} − ${bl('2')})² + (${gr('1')} − ${gr('5')})²] = √[1 + 16] = ${or('√17')}`,
          ],
        },
        {
          question: 'Given A(2, 5) and B(3, 1), calculate the gradient of AB.',
          answer: `m = ${or('−4')}`,
          steps: [
            `Substitute into m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')}).`,
            `Calculate: m = (${gr('1')} − ${gr('5')}) / (${bl('3')} − ${bl('2')}) = ${or('−4')}`,
          ],
        },
        {
          question: 'Given A(2, 5) and B(3, 1), find the midpoint of AB.',
          answer: `M = ${or('(2.5, 3)')}`,
          steps: [
            `Substitute into M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2).`,
            `Calculate: M = ((${bl('2')} + ${bl('3')}) / 2, (${gr('5')} + ${gr('1')}) / 2) = ${or('(2.5, 3)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — distance with integer answer ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate the distance between (0, 0) and (3, 4).',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Substitute into d = √[(x₂ − x₁)² + (y₂ − y₁)²]:\nd = √[(3 − 0)² + (4 − 0)²] = √[9 + 16] = √25 = 5 ✓',
        },

        // ── Q2 Easy — gradient between two points ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate the gradient of the line joining (1, 2) and (5, 10).',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'm = (y₂ − y₁) / (x₂ − x₁) = (10 − 2) / (5 − 1) = 8/4 = 2 ✓',
        },

        // ── Q3 Medium — midpoint ─────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the midpoint of the segment joining (−2, 7) and (6, −3).',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)', '2, 2'],
          explanation: 'M = ((−2 + 6)/2, (7 + (−3))/2) = (4/2, 4/2) = (2, 2) ✓',
        },

        // ── Q4 Hard — multi-part: distance, gradient and midpoint ────────────
        {
          difficulty: 'Hard',
          question: 'Given A(−1, −1) and B(5, 7), calculate each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Distance AB',
              correctAnswer: '10',
              explanation: 'd = √[(5 − (−1))² + (7 − (−1))²] = √[36 + 64] = √100 = 10 ✓',
            },
            {
              label: 'b) Gradient of AB',
              correctAnswer: '4/3',
              correctAnswers: ['4/3', '1.33', '1.3'],
              explanation: 'm = (7 − (−1)) / (5 − (−1)) = 8/6 = 4/3 ✓',
            },
            {
              label: 'c) Midpoint of AB',
              correctAnswer: '(2, 3)',
              correctAnswers: ['(2, 3)', '(2,3)', '2, 3'],
              explanation: 'M = ((−1 + 5)/2, (−1 + 7)/2) = (4/2, 6/2) = (2, 3) ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: Cartesian plane showing points A and B plotted, with a dashed right-angle triangle between them illustrating the horizontal and vertical distance used in the distance formula, and the midpoint M marked between A and B]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the distance, gradient and midpoint formulas with worked examples on the Cartesian plane" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUATION OF A LINE THROUGH TWO POINTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equation-of-a-line-two-points',
      title: 'Equation of a Line Through Two Points',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">To find the equation of a line through two known points, first ${re('calculate the gradient m')} using the gradient formula, then ${ye('substitute m and one of the points into y − y₁ = m(x − x₁)')}, and ${gr('simplify into y = mx + c form')}. This method works for any two points as long as they don't share the same x-coordinate (which would give an undefined, vertical line).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gradient calculation')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('point substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final equation')}</span>` +
        `</div>` +

        // ── Three-step method ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Calculate m')} — use m = (y₂ − y₁) / (x₂ − x₁) to find the gradient between the two given points.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fefce8;border:1.5px solid #fef08a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${ye('Substitute')} — pick either of the two given points and substitute m and the point into y − y₁ = m(x − x₁).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Simplify')} — expand and rearrange into the form y = mx + c.</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ──────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Vertical lines</p>` +
        `<p style="margin:0;color:#7c2d12;">If two points share the same x-coordinate, the gradient is undefined and the line is vertical. Its equation is simply <strong>x = a</strong>, where a is the shared x-value. The three-step method above does not apply to vertical lines.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the equation of the line through A(−3, −4) and B(4, −2).',
          answer: `${gr('y = 2/7x − 22/7')}`,
          steps: [
            `${re('Calculate gradient:')} m = (−2 − (−4)) / (4 − (−3)) = ${re('2/7')}`,
            `${ye('Substitute point A(−3, −4) into y − y₁ = m(x − x₁):')} y − (−4) = 2/7(x − (−3))`,
            `Simplify: y + 4 = 2/7x + 6/7, so ${gr('y = 2/7x − 22/7')}`,
          ],
        },
        {
          question: 'Find the equation of the line through P(0, 6) and Q(2, 0).',
          answer: `${gr('y = −3x + 6')}`,
          steps: [
            `${re('Calculate gradient:')} m = (0 − 6) / (2 − 0) = ${re('−3')}`,
            `${ye('Substitute point P(0, 6) into y − y₁ = m(x − x₁):')} y − 6 = −3(x − 0)`,
            `Simplify: ${gr('y = −3x + 6')}`,
          ],
        },
        {
          question: 'Find the equation of the line through C(1, 1) and D(5, 9), and determine where it cuts the y-axis.',
          answer: `${gr('y = 2x − 1')}, cuts the y-axis at (0, −1)`,
          steps: [
            `${re('Calculate gradient:')} m = (9 − 1) / (5 − 1) = ${re('2')}`,
            `${ye('Substitute point C(1, 1) into y − y₁ = m(x − x₁):')} y − 1 = 2(x − 1)`,
            `Simplify: ${gr('y = 2x − 1')}`,
            `Set x = 0 to find y-intercept: y = 2(0) − 1 = −1, so the line cuts the y-axis at (0, −1).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — equation from two points ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the equation of the line through (0, 3) and (2, 7).',
          answer: 'y = 2x + 3',
          checkMode: 'auto',
          correctAnswer: 'y = 2x + 3',
          correctAnswers: ['y = 2x + 3', 'y=2x+3'],
          explanation: 'Step 1: m = (7 − 3)/(2 − 0) = 4/2 = 2\nStep 2: y − 3 = 2(x − 0)\nStep 3: y = 2x + 3 ✓',
        },

        // ── Q6 Medium — equation with negative gradient ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the equation of the line through (−2, 5) and (4, −7).',
          answer: 'y = -2x + 1',
          checkMode: 'auto',
          correctAnswer: 'y = -2x + 1',
          correctAnswers: ['y = -2x + 1', 'y=-2x+1', 'y = −2x + 1', 'y=−2x+1'],
          explanation: 'Step 1: m = (−7 − 5)/(4 − (−2)) = −12/6 = −2\nStep 2: y − 5 = −2(x − (−2))\nStep 3: y − 5 = −2x − 4 → y = −2x + 1 ✓',
        },

        // ── Q7 Medium — vertical line with explanation ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the equation of the line through (3, 3) and (3, 8), and explain what type of line this is.',
          answer: 'The equation is x = 3. This is a vertical line because both points share the same x-coordinate, making the gradient undefined.',
          checkMode: 'self',
        },

        // ── Q8 Hard — horizontal line multi-part ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Given the line through (1, 4) and (6, 4), answer the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the equation of the line.',
              correctAnswer: 'y = 4',
              correctAnswers: ['y = 4', 'y=4'],
              explanation: 'Step 1: m = (4 − 4)/(6 − 1) = 0/5 = 0\nStep 2: y − 4 = 0(x − 1)\nStep 3: y = 4 ✓',
            },
            {
              label: 'b) Determine where the line cuts the y-axis. Explain your reasoning.',
              checkMode: 'self',
              answer: 'Since the equation is y = 4, the line is horizontal. It cuts the y-axis at (0, 4) because the y-value is always 4 regardless of x.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: Cartesian plane showing the two given points plotted, the line drawn through both, and the resulting equation labelled next to the line, with the y-intercept marked where relevant]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the equation of a straight line through two points using the gradient formula and point-slope form" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PARALLEL AND PERPENDICULAR LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'parallel-perpendicular-lines',
      title: 'Parallel and Perpendicular Lines',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Two lines are ${re('parallel')} if and only if they have equal gradients: ${re('m₁ = m₂')}. Two lines are ${gr('perpendicular')} if and only if the product of their gradients is −1: ${re('m₁')} × ${gr('m₂')} = −1, which means each gradient is the negative reciprocal of the other. To find the equation of a line through a given point that is parallel or perpendicular to a known line, first ${re('identify the gradient of the known line')}, then ${gr('apply the parallel or perpendicular rule to find the new gradient')}, then substitute the new gradient and the given point into ${bl('y − y₁ = m(x − x₁)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('known / given gradient')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated new gradient')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('final equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Parallel lines</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">${re('m₁ = m₂')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Parallel lines never meet — they have equal gradients and different y-intercepts.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Perpendicular lines</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">${re('m₁')} × ${gr('m₂')} = −1, so ${gr('m₂ = −1 / m₁')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Perpendicular lines meet at a right angle — the new gradient is the negative reciprocal of the given gradient.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Method: finding the equation of a parallel or perpendicular line</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — ${re('Identify the gradient')} of the known line.<br><strong>Step 2</strong> — Apply the rule to find ${gr('the new gradient')}.<br><strong>Step 3</strong> — Substitute ${gr('the new gradient')} and the given point into ${bl('y − y₁ = m(x − x₁)')} and simplify.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the equation of the line through (2, −1) parallel to y = 3x + 4.',
          answer: `${bl('y = 3x − 7')}`,
          steps: [
            `Identify the gradient of the given line: ${re('m = 3')}.`,
            `Since parallel lines share the same gradient, the new line also has ${re('m = 3')}.`,
            `Substitute (2, −1) and ${re('m = 3')} into y − y₁ = m(x − x₁): y − (−1) = 3(x − 2).`,
            `Simplify: y + 1 = 3x − 6, so ${bl('y = 3x − 7')}.`,
          ],
        },
        {
          question: 'Find the equation of the line through (4, 5) perpendicular to y = −2x + 1.',
          answer: `${bl('y = ½x + 3')}`,
          steps: [
            `Identify the gradient of the given line: ${re('m₁ = −2')}.`,
            `Calculate the perpendicular gradient: ${gr('m₂ = −1/m₁ = −1/(−2) = ½')}.`,
            `Substitute (4, 5) and ${gr('m₂ = ½')} into y − y₁ = m(x − x₁): y − 5 = ½(x − 4).`,
            `Simplify: y − 5 = ½x − 2, so ${bl('y = ½x + 3')}.`,
          ],
        },
        {
          question: 'Determine whether the line through A(1, 2) and B(4, 8) is parallel, perpendicular, or neither to the line through C(0, 3) and D(2, −1).',
          answer: 'Neither parallel nor perpendicular',
          steps: [
            `Calculate gradient of AB: ${re('m₁ = (8 − 2)/(4 − 1) = 6/3 = 2')}.`,
            `Calculate gradient of CD: ${re('m₂ = (−1 − 3)/(2 − 0) = −4/2 = −2')}.`,
            `Check parallel condition: m₁ ≠ m₂ (2 ≠ −2), so the lines are not parallel.`,
            `Check perpendicular condition: ${re('m₁')} × ${re('m₂')} = 2 × (−2) = −4 ≠ −1, so the lines are not perpendicular.`,
            `Conclusion: the lines are <strong>neither parallel nor perpendicular</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — gradient of a parallel line ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write down the gradient of a line parallel to y = 5x − 2.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Parallel lines have equal gradients. The gradient of y = 5x − 2 is m = 5, so a parallel line also has m = 5 ✓',
        },

        // ── Q10 Easy — gradient of a perpendicular line ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Write down the gradient of a line perpendicular to y = 4x + 1.',
          answer: '-1/4',
          checkMode: 'auto',
          correctAnswer: '-1/4',
          correctAnswers: ['-1/4', '−1/4', '-0.25'],
          explanation: 'For perpendicular lines, m₁ × m₂ = −1.\nGiven m₁ = 4: m₂ = −1/4 ✓',
        },

        // ── Q11 Medium — equation of parallel line ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the equation of the line through (0, −3) parallel to y = −3x + 5.',
          answer: 'y = -3x - 3',
          checkMode: 'auto',
          correctAnswer: 'y = -3x - 3',
          correctAnswers: ['y = -3x - 3', 'y=-3x-3', 'y = −3x − 3', 'y=−3x−3'],
          explanation: 'Gradient: m = −3 (same as parallel line).\nSubstitute (0, −3): y − (−3) = −3(x − 0) → y = −3x − 3 ✓',
        },

        // ── Q12 Hard — equation of perpendicular line ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the equation of the line through (2, 6) perpendicular to y = ⅓x − 2.',
          answer: 'y = -3x + 12',
          checkMode: 'auto',
          correctAnswer: 'y = -3x + 12',
          correctAnswers: ['y = -3x + 12', 'y=-3x+12', 'y = −3x + 12'],
          explanation: 'Gradient of given line: m₁ = 1/3.\nPerpendicular gradient: m₂ = −3.\nSubstitute (2, 6): y − 6 = −3(x − 2) → y − 6 = −3x + 6 → y = −3x + 12 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: Cartesian plane showing two parallel lines with matching gradient triangles drawn alongside each, and a separate diagram showing two perpendicular lines meeting at a right angle with their gradient triangles drawn to show the negative reciprocal relationship]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the parallel and perpendicular gradient rules and showing how to find the equation of a line through a given point using each rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — INCLINATION OF A LINE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inclination-of-a-line',
      title: 'Inclination of a Line',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">The inclination of a line is the angle ${or('θ')} that the line makes with the positive direction of the x-axis, measured anti-clockwise, where 0° ≤ ${or('θ')} &lt; 180°. The gradient and inclination are linked by the formula ${bl('m')} = tan ${or('θ')}. If the gradient is positive, ${or('θ')} is an acute angle between 0° and 90°. If the gradient is negative, the calculator will return a negative angle, which ${re('must be corrected by adding 180°')} to give the correct inclination between 90° and 180°. A horizontal line has ${or('θ = 0°')} and an undefined (vertical) line has ${or('θ = 90°')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradient values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angle values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('+180° correction — common error')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key cases</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Positive gradient</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m')} &gt; 0 → ${or('0° &lt; θ &lt; 90°')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Calculator answer is correct. No adjustment needed.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Negative gradient</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m')} &lt; 0 → ${re('add 180°')} to the calculator value</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Calculator returns a negative angle. Add 180° to find the true inclination between 90° and 180°.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Special cases</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m = 0')} → ${or('θ = 0°')} &nbsp;|&nbsp; vertical → ${or('θ = 90°')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Horizontal lines have zero gradient and zero inclination. Vertical lines have undefined gradient and 90° inclination.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The formula</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('m')} = tan ${or('θ')} &nbsp;⟺&nbsp; ${or('θ')} = tan⁻¹(${bl('m')})<br>If ${bl('m')} &lt; 0: ${or('θ')} = tan⁻¹(${bl('m')}) ${re('+ 180°')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Determine the inclination of a line with gradient m = 1.5.',
          answer: `θ = ${or('56.31°')}`,
          steps: [
            `Substitute into ${bl('m')} = tan ${or('θ')}: tan ${or('θ')} = ${bl('1.5')}.`,
            `Calculate ${or('θ')} = tan⁻¹(${bl('1.5')}) = ${or('56.31°')}.`,
            `Since the gradient is positive, this angle is already correct: ${or('θ = 56.31°')}.`,
          ],
        },
        {
          question: 'Determine the inclination of a line with gradient m = −0.84.',
          answer: `θ = ${or('140.0°')}`,
          steps: [
            `Substitute into ${bl('m')} = tan ${or('θ')}: tan ${or('θ')} = ${bl('−0.84')}.`,
            `Calculate the calculator value: tan⁻¹(${bl('−0.84')}) = ${or('−40.0°')}.`,
            `Since the gradient is negative, the true inclination is between 90° and 180°, so ${re('add 180°')}: ${or('θ')} = ${or('−40.0°')} ${re('+ 180°')} = ${or('140.0°')}.`,
          ],
        },
        {
          question: 'Find the gradient of a line with inclination θ = 120°.',
          answer: `m = ${bl('−1.73')}`,
          steps: [
            `Substitute into ${bl('m')} = tan ${or('θ')}: ${bl('m')} = tan(${or('120°')}).`,
            `Calculate: ${bl('m')} = ${bl('−1.73')} (rounded to 2 decimal places).`,
            `Note that this is negative, consistent with an inclination greater than 90°.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy — inclination with exact value ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Determine the inclination of a line with gradient m = 1.',
          answer: '45',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°', '45 degrees'],
          explanation: 'tan θ = 1 → θ = tan⁻¹(1) = 45°.\nGradient is positive so no correction needed. θ = 45° ✓',
        },

        // ── Q14 Medium — inclination with positive decimal gradient ──────────
        {
          difficulty: 'Medium',
          question: 'Determine the inclination of a line with gradient m = 0.5774, rounded to one decimal place.',
          answer: 'θ = tan⁻¹(0.5774) ≈ 30.0°',
          checkMode: 'self',
        },

        // ── Q15 Medium — inclination with negative gradient ──────────────────
        {
          difficulty: 'Medium',
          question: 'Determine the inclination of a line with gradient m = −1.19, rounded to one decimal place.',
          answer: 'θ = tan⁻¹(−1.19) ≈ −49.9°. Since the gradient is negative, add 180°: θ = −49.9° + 180° = 130.1°',
          checkMode: 'self',
        },

        // ── Q16 Hard — gradient from inclination ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Determine the gradient of a line with inclination 150°, rounded to two decimal places.',
          answer: 'm = tan(150°) = −tan(30°) ≈ −0.58',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: Cartesian plane showing a line with inclination angle θ marked at the point where the line crosses the x-axis, anti-clockwise from the positive x-axis, for both a positive-gradient example and a negative-gradient example side by side]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the inclination of a line, the formula m = tan θ, and the +180° correction for negative gradients" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MIXED APPLICATIONS: LINES, ANGLES AND TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-applications-lines-angles-triangles',
      title: 'Mixed Applications — Lines, Angles and Triangles',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Analytical Geometry questions often combine distance, gradient, midpoint, parallel/perpendicular conditions and inclination in a single problem, frequently using three points to form a triangle on the Cartesian plane. The angle between two lines can be found by calculating the inclination of each line separately, then finding the difference between the two angles. This section brings together every tool from this topic to solve combined problems, which is how Analytical Geometry is typically examined.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('first line / side')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('second line / side')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('third line / side')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('final conclusion')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Combining the tools</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Sketch first</strong> — plot the given points and draw the triangle or lines to understand the geometry before calculating.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Calculate gradients')} — use m = (y₂ − y₁)/(x₂ − x₁) for each required side or line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fefce8;border:1.5px solid #fef08a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${ye('Find inclinations')} — use θ = tan⁻¹(m) for each line, adding 180° where the gradient is negative.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('State conclusions')} — use the parallel/perpendicular rules or subtract inclinations to find angles between lines.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Angle between two lines</p>` +
        `<p style="margin:0;color:#1e3a8a;">To find the angle at a vertex of a triangle, calculate the inclination of each side meeting at that vertex. The angle between the two lines is the difference between the two inclinations (taking care with direction).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Given A(−3, 1), B(2, 4) and C(5, −2), determine the size of angle BAC.',
          answer: `∠BAC ≈ ${bl('51.52°')}`,
          steps: [
            `Calculate gradient of AB: ${re('m₁ = (4 − 1)/(2 − (−3)) = 3/5')}.`,
            `Calculate gradient of AC: ${ye('m₂ = (−2 − 1)/(5 − (−3)) = −3/8')}.`,
            `Find inclination of AB: ${re('θ₁ = tan⁻¹(3/5) = 30.96°')}.`,
            `Find inclination of AC: tan⁻¹(−3/8) = −20.56°. Since the gradient is negative, add 180°: ${ye('θ₂ = 159.44°')}.`,
            `Calculate angle BAC = 180° − 159.44° + 30.96° = ${bl('51.52°')}.`,
          ],
        },
        {
          question: 'Given P(0, 0), Q(4, 0) and R(4, 3), show that triangle PQR is right-angled at Q.',
          answer: `${bl('Triangle PQR is right-angled at Q')} — PQ ⊥ QR`,
          steps: [
            `Calculate gradient of PQ: ${re('m₁ = (0 − 0)/(4 − 0) = 0')} (horizontal line).`,
            `Calculate gradient of QR: ${ye('m₂ = (3 − 0)/(4 − 4) = undefined')} (vertical line).`,
            `Since PQ is horizontal (gradient 0) and QR is vertical (undefined gradient), PQ ⊥ QR.`,
            `${bl('Conclusion:')} Triangle PQR has a right angle at Q. ✓`,
          ],
        },
        {
          question: 'Given A(1, 2), B(7, 4) and C(3, 8), determine if the triangle ABC is isosceles.',
          answer: `${bl('Triangle ABC is isosceles')} — AB = AC = √40`,
          steps: [
            `Calculate AB: ${re('AB = √[(7 − 1)² + (4 − 2)²] = √[36 + 4] = √40')}.`,
            `Calculate AC: ${ye('AC = √[(3 − 1)² + (8 − 2)²] = √[4 + 36] = √40')}.`,
            `Calculate BC: ${gr('BC = √[(3 − 7)² + (8 − 4)²] = √[16 + 16] = √32')}.`,
            `Since ${re('AB')} = ${ye('AC')} = √40 but ${gr('BC')} = √32, exactly two sides are equal.`,
            `${bl('Conclusion:')} Triangle ABC is isosceles. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q17 Medium — right angle proof ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Given A(0, 0), B(4, 0) and C(4, 5), show that triangle ABC is right-angled at B.',
          answer: 'Gradient of AB: m₁ = (0 − 0)/(4 − 0) = 0 (horizontal). Gradient of BC: m₂ = (5 − 0)/(4 − 4) = undefined (vertical). A horizontal line is perpendicular to a vertical line, so AB ⊥ BC. Therefore triangle ABC is right-angled at B. ✓',
          checkMode: 'self',
        },

        // ── Q18 Medium — length and isosceles check ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Given P(1, 1), Q(5, 1) and R(5, 5), answer the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate the length of PR.',
              correctAnswer: '4√2',
              correctAnswers: ['4√2', '4sqrt(2)', '√32', 'sqrt(32)', '4√2 units'],
              explanation: 'PR = √[(5 − 1)² + (5 − 1)²] = √[16 + 16] = √32 = 4√2 ✓',
            },
            {
              label: 'b) Calculate PQ and QR, then state whether triangle PQR is isosceles.',
              checkMode: 'self',
              answer: 'PQ = √[(5−1)²+(1−1)²] = √16 = 4\nQR = √[(5−5)²+(5−1)²] = √16 = 4\nSince PQ = QR = 4 and PR = 4√2, exactly two sides are equal. Triangle PQR is isosceles. ✓',
            },
          ],
        },

        // ── Q19 Hard — angle at a vertex ─────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Given A(−2, 3), B(3, 3) and C(3, −2), determine the size of angle ABC, rounded to one decimal place.',
          answer: 'Gradient of BA: m₁ = (3 − 3)/(−2 − 3) = 0 (horizontal). Gradient of BC: m₂ = (−2 − 3)/(3 − 3) = undefined (vertical). Since BA is horizontal and BC is vertical, BA ⊥ BC. Therefore angle ABC = 90.0°.',
          checkMode: 'self',
        },

        // ── Q20 Hard — multi-part combined application ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Given A(1, 5), B(6, 5) and C(6, 1), answer the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate the gradient of AB.',
              correctAnswer: '0',
              explanation: 'm = (5 − 5)/(6 − 1) = 0/5 = 0 ✓',
            },
            {
              label: 'b) Calculate the gradient of BC.',
              correctAnswer: 'undefined',
              correctAnswers: ['undefined', 'Undefined'],
              explanation: 'm = (1 − 5)/(6 − 6) = −4/0 = undefined (vertical line) ✓',
            },
            {
              label: 'c) Is AB perpendicular to BC? Write Yes or No.',
              correctAnswer: 'Yes',
              correctAnswers: ['Yes', 'yes', 'YES'],
              explanation: 'AB has gradient 0 (horizontal) and BC has undefined gradient (vertical). A horizontal line is always perpendicular to a vertical line. Yes ✓',
            },
            {
              label: 'd) Determine the size of angle ABC.',
              checkMode: 'self',
              answer: 'Since AB is horizontal and BC is vertical, AB ⊥ BC. Therefore angle ABC = 90°.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: Cartesian plane showing the full triangle formed by the three given points, all three vertices labelled, the relevant angle marked at the vertex in question, and dashed gradient triangles on each side as needed]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine distance, gradient, midpoint, and inclination to solve mixed Analytical Geometry problems involving triangles" />',
    },
  ],
  scoreMessages: [
    { minScore: 24, message: 'Outstanding! You have mastered every section of Analytical Geometry. Excellent work throughout!' },
    { minScore: 20, message: 'Excellent work! You have a very strong grasp of analytical geometry. Review any missed parts and you will have it perfect.' },
    { minScore: 14, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 8, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — analytical geometry becomes very logical once the formulas click! Revisit the explanations and worked examples, then try again." },
  ],
}
