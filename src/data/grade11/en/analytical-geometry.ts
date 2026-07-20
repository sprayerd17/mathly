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
        'Cartesian plane showing points A and B plotted, with a dashed right-angle triangle between them illustrating the horizontal and vertical distance used in the distance formula, and the midpoint M marked between A and B',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="160" x2="30" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="60" y1="120" x2="170" y2="45" stroke="#2563eb" stroke-width="2.5"/><line x1="60" y1="120" x2="170" y2="120" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="170" y1="120" x2="170" y2="45" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><circle cx="60" cy="120" r="4" fill="#0f1f3d"/><circle cx="170" cy="45" r="4" fill="#0f1f3d"/><circle cx="115" cy="82.5" r="4" fill="#ea580c"/><text x="48" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="end">A</text><text x="176" y="42" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">B</text><text x="122" y="80" font-size="12" font-weight="700" fill="#ea580c" text-anchor="start">M</text><text x="115" y="136" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">&#916;x</text><text x="178" y="86" font-size="12" font-weight="700" fill="#dc2626" text-anchor="start">&#916;y</text><text x="78" y="94" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">d</text><text x="205" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="22" y="20" font-size="11" fill="#374151">y</text></svg>',

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
        'Cartesian plane showing the two given points plotted, the line drawn through both, and the resulting equation labelled next to the line, with the y-intercept marked where relevant',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="170" x2="30" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="18" x2="145" y2="168" stroke="#16a34a" stroke-width="2.5"/><circle cx="30" cy="30" r="4" fill="#0f1f3d"/><circle cx="130" cy="150" r="4" fill="#0f1f3d"/><circle cx="30" cy="30" r="7" fill="none" stroke="#ea580c" stroke-width="2"/><text x="38" y="26" font-size="11" font-weight="700" fill="#0f1f3d">P(0, 6)</text><text x="38" y="44" font-size="10" font-weight="700" fill="#ea580c">y-intercept</text><text x="130" y="166" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Q(2, 0)</text><text x="140" y="60" font-size="13" font-weight="700" fill="#16a34a">y = &#8722;3x + 6</text><text x="20" y="163" font-size="10" fill="#374151">O</text><text x="205" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="22" y="15" font-size="11" fill="#374151">y</text></svg>',

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

        // ── Q12b Hard — perpendicularity used to find an unknown coordinate ──
        {
          difficulty: 'Hard',
          question: 'Points A(1, 2), B(5, 4) and D(k, −4) are given such that AD ⊥ AB. Determine the value of k.',
          answer: 'Step 1: Calculate the gradient of AB.\nm_AB = (4 − 2)/(5 − 1) = 2/4 = 1/2\n\nStep 2: Since AD ⊥ AB, the gradient of AD is the negative reciprocal.\nm_AD = −1 ÷ (1/2) = −2\n\nStep 3: Write the gradient of AD using the unknown coordinate k, and set it equal to −2.\nm_AD = (−4 − 2)/(k − 1) = −6/(k − 1)\n−6/(k − 1) = −2\n\nStep 4: Solve for k.\n−6 = −2(k − 1)\n−6 = −2k + 2\n−8 = −2k\nk = 4 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Cartesian plane showing two parallel lines with matching gradient triangles drawn alongside each, and a separate diagram showing two perpendicular lines meeting at a right angle with their gradient triangles drawn to show the negative reciprocal relationship',

      diagramSvg:
        '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="160" y1="15" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1.5"/><text x="80" y="18" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Parallel lines</text><line x1="20" y1="155" x2="60" y2="155" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="60" y1="155" x2="60" y2="110" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="20" y1="155" x2="60" y2="110" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="125" x2="80" y2="125" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="80" y1="125" x2="80" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="40" y1="125" x2="80" y2="80" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="167" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8321;</text><text x="60" y="137" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8322;</text><text x="80" y="182" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">m&#8321; = m&#8322;</text><text x="245" y="18" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Perpendicular lines</text><line x1="205" y1="165" x2="285" y2="85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="205" y1="165" x2="285" y2="165" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="285" y1="165" x2="285" y2="85" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="205" y1="85" x2="285" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="205" y1="85" x2="285" y2="85" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="205" y1="85" x2="205" y2="165" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3"/><polygon points="245,125 252,118 259,125 252,132" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="245" y="178" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8321;</text><text x="198" y="90" font-size="12" font-weight="700" fill="#16a34a" text-anchor="end">m&#8322;</text><text x="245" y="182" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">m&#8321; &#215; m&#8322; = &#8722;1</text></svg>',

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

        // ── Q16b Hard — inclination used to find an unknown coordinate ───────
        {
          difficulty: 'Hard',
          question: 'Line AB has inclination 135°, and passes through A(2, −1) and B(t, 3). Determine the value of t.',
          answer: 'Step 1: Convert the inclination to a gradient.\nm = tan(135°) = −1\n\nStep 2: Write the gradient of AB using the unknown coordinate t, and set it equal to −1.\nm_AB = (3 − (−1))/(t − 2) = 4/(t − 2)\n4/(t − 2) = −1\n\nStep 3: Solve for t.\n4 = −1(t − 2)\n4 = −t + 2\nt = 2 − 4\nt = −2 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Cartesian plane showing a line with inclination angle θ marked at the point where the line crosses the x-axis, anti-clockwise from the positive x-axis, for both a positive-gradient example and a negative-gradient example side by side',

      diagramSvg:
        '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="160" y1="15" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1.5"/><text x="82" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Positive gradient</text><line x1="15" y1="150" x2="150" y2="150" stroke="#0f1f3d" stroke-width="2"/><circle cx="55" cy="150" r="3" fill="#0f1f3d"/><line x1="55" y1="150" x2="112" y2="110" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 83,150 A 28,28 0 0 0 78,134" fill="none" stroke="#2563eb" stroke-width="2"/><text x="90" y="140" font-size="13" font-weight="700" fill="#ea580c">&#952;</text><text x="82" y="178" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">0&#176; &lt; &#952; &lt; 90&#176;</text><text x="145" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="245" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Negative gradient</text><line x1="170" y1="150" x2="305" y2="150" stroke="#0f1f3d" stroke-width="2"/><circle cx="245" cy="150" r="3" fill="#0f1f3d"/><line x1="245" y1="150" x2="191" y2="105" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="150" x2="264" y2="166" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 273,150 A 28,28 0 0 1 224,132" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 263,150 A 18,18 0 0 0 259,162" fill="none" stroke="#6b7280" stroke-width="1.5"/><text x="258" y="114" font-size="12" font-weight="700" fill="#ea580c">&#952; = 140&#176;</text><text x="266" y="163" font-size="9" font-weight="700" fill="#6b7280">&#8722;40&#176;</text><text x="245" y="178" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">&#8722;40&#176; + 180&#176; = 140&#176;</text><text x="300" y="145" font-size="11" fill="#374151" text-anchor="end">x</text></svg>',

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
        'Cartesian plane showing the full triangle formed by the three given points, all three vertices labelled, the relevant angle marked at the vertex in question, and dashed gradient triangles on each side as needed',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="90,35 35,145 185,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="35" x2="35" y2="35" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="35" y1="35" x2="35" y2="145" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="35" y1="145" x2="185" y2="145" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="185" y1="145" x2="185" y2="120" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,3"/><path d="M 59,141 A 24,24 0 0 1 46,124" fill="none" stroke="#2563eb" stroke-width="2"/><text x="62" y="126" font-size="13" font-weight="700" fill="#2563eb">&#952;</text><text x="90" y="27" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">A</text><text x="22" y="150" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">B</text><text x="192" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">C</text><text x="28" y="90" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">AB</text><text x="110" y="157" font-size="10" font-weight="700" fill="#d97706" text-anchor="middle">BC</text><text x="110" y="172" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">&#952; = difference of inclinations</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine distance, gradient, midpoint, and inclination to solve mixed Analytical Geometry problems involving triangles" />',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets x 20 questions, skill blocks in matching positions:
  // Block 1 (Q1-3):   Distance / gradient / midpoint revision — Easy, Easy, Medium (diagram: Q3)
  // Block 2 (Q4-7):   Equation of a line through two points — Easy, Easy, Medium, Medium
  // Block 3 (Q8-11):  Parallel and perpendicular lines — Easy, Easy, Medium, Hard
  // Block 4 (Q12-15): Inclination of a line — Easy, Medium, Medium, Hard
  // Block 5 (Q16-18): Right-angle / isosceles triangle proofs — Medium, Medium, Hard (diagram: Q18)
  // Block 6 (Q19-20): Angle at a vertex via inclination — Hard, Hard (diagram: Q20)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Distance / gradient / midpoint revision
        { difficulty: 'Easy', question: 'Given A(1, 2) and B(4, 6), calculate the distance AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Given A(1, 2) and C(4, 2), calculate the gradient of AC.', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'm = (2 − 2)/(4 − 1) = 0/3 = 0 ✓' },
        { difficulty: 'Medium', question: 'A(1, 2), B(4, 6) and C(4, 2) are plotted on the Cartesian plane, forming triangle ABC. Determine the midpoint of BC.', checkMode: 'auto', correctAnswer: '(4, 4)', correctAnswers: ['(4, 4)', '(4,4)', '4, 4'], answer: '(4, 4)', explanation: 'M = ((4 + 4)/2, (6 + 2)/2) = (8/2, 8/2) = (4, 4) ✓', diagramSvg: `<svg viewBox="0 0 130 162" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="154" x2="26" y2="26" /><line x1="42" y1="154" x2="42" y2="26" /><line x1="58" y1="154" x2="58" y2="26" /><line x1="74" y1="154" x2="74" y2="26" /><line x1="90" y1="154" x2="90" y2="26" /><line x1="106" y1="154" x2="106" y2="26" /><line x1="122" y1="154" x2="122" y2="26" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="122" y2="138" /><line x1="42" y1="154" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-1</text><text x="58" y="150" text-anchor="middle">1</text><text x="74" y="150" text-anchor="middle">2</text><text x="90" y="150" text-anchor="middle">3</text><text x="106" y="150" text-anchor="middle">4</text><text x="122" y="150" text-anchor="middle">5</text><text x="34" y="157" text-anchor="end">-1</text><text x="34" y="141" text-anchor="end">0</text><text x="34" y="125" text-anchor="end">1</text><text x="34" y="109" text-anchor="end">2</text><text x="34" y="93" text-anchor="end">3</text><text x="34" y="77" text-anchor="end">4</text><text x="34" y="61" text-anchor="end">5</text><text x="34" y="45" text-anchor="end">6</text><text x="34" y="29" text-anchor="end">7</text></g><polygon points="58,106 106,42 106,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="58" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="46" y="112" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(1,2)</text><text x="100" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(4,6)</text><text x="100" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4,2)</text></svg>` },

        // Block 2 — Equation of a line through two points
        { difficulty: 'Easy', question: 'Find the equation of the line through (0, 4) and (2, 8).', checkMode: 'auto', correctAnswer: 'y = 2x + 4', correctAnswers: ['y = 2x + 4', 'y=2x+4'], answer: 'y = 2x + 4', explanation: 'm = (8 − 4)/(2 − 0) = 4/2 = 2. Substitute (0, 4): y − 4 = 2(x − 0) → y = 2x + 4 ✓' },
        { difficulty: 'Easy', question: 'Find the equation of the line through (1, 5) and (4, 11).', checkMode: 'auto', correctAnswer: 'y = 2x + 3', correctAnswers: ['y = 2x + 3', 'y=2x+3'], answer: 'y = 2x + 3', explanation: 'm = (11 − 5)/(4 − 1) = 6/3 = 2. Substitute (1, 5): y − 5 = 2(x − 1) → y = 2x + 3 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (−3, 6) and (3, −6).', checkMode: 'auto', correctAnswer: 'y = -2x', correctAnswers: ['y = -2x', 'y=-2x', 'y = −2x', 'y=−2x', 'y = -2x + 0'], answer: 'y = -2x', explanation: 'm = (−6 − 6)/(3 − (−3)) = −12/6 = −2. Substitute (3, −6): y − (−6) = −2(x − 3) → y + 6 = −2x + 6 → y = −2x ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (2, 2) and (2, 9), and state what type of line this is.', answer: 'The equation is x = 2. This is a vertical line because both points share the same x-coordinate, making the gradient undefined.', checkMode: 'self' },

        // Block 3 — Parallel and perpendicular lines
        { difficulty: 'Easy', question: 'Write down the gradient of a line parallel to y = 2x − 5.', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'Parallel lines have equal gradients. The gradient of y = 2x − 5 is m = 2, so a parallel line also has m = 2 ✓' },
        { difficulty: 'Easy', question: 'Write down the gradient of a line perpendicular to y = -1/3x + 4.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'For perpendicular lines, m₁ × m₂ = −1.\nGiven m₁ = −1/3: m₂ = −1 ÷ (−1/3) = 3 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (1, −1) parallel to y = 2x + 3.', checkMode: 'auto', correctAnswer: 'y = 2x - 3', correctAnswers: ['y = 2x - 3', 'y=2x-3', 'y = 2x − 3', 'y=2x−3'], answer: 'y = 2x - 3', explanation: 'Gradient: m = 2 (same as parallel line).\nSubstitute (1, −1): y − (−1) = 2(x − 1) → y + 1 = 2x − 2 → y = 2x − 3 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the line through (4, 1) perpendicular to y = -1/3x - 2.', checkMode: 'auto', correctAnswer: 'y = 3x - 11', correctAnswers: ['y = 3x - 11', 'y=3x-11', 'y = 3x − 11', 'y=3x−11'], answer: 'y = 3x - 11', explanation: 'Gradient of given line: m₁ = −1/3.\nPerpendicular gradient: m₂ = 3.\nSubstitute (4, 1): y − 1 = 3(x − 4) → y − 1 = 3x − 12 → y = 3x − 11 ✓' },

        // Block 4 — Inclination of a line
        { difficulty: 'Easy', question: 'Determine the inclination of a line with gradient m = 0.5774, rounded to the nearest degree.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], answer: '30', explanation: 'tan θ = 0.5774 → θ = tan⁻¹(0.5774) ≈ 30°. Gradient is positive so no correction needed. θ ≈ 30° ✓' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = 0.7002, rounded to the nearest degree.', answer: 'θ = tan⁻¹(0.7002) ≈ 35°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = −0.5774, rounded to the nearest degree.', answer: 'θ = tan⁻¹(−0.5774) ≈ −30°. Since the gradient is negative, add 180°: θ = −30° + 180° = 150°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the gradient of a line with inclination 65°, rounded to two decimal places.', answer: 'm = tan(65°) ≈ 2.14', checkMode: 'self' },

        // Block 5 — Right-angle / isosceles triangle proofs
        { difficulty: 'Medium', question: 'Given A(0, 0), B(5, 0) and C(5, 4), show that triangle ABC is right-angled at B.', answer: 'Gradient of AB: m₁ = (0 − 0)/(5 − 0) = 0 (horizontal). Gradient of BC: m₂ = (4 − 0)/(5 − 5) = undefined (vertical). A horizontal line is perpendicular to a vertical line, so AB ⊥ BC. Therefore triangle ABC is right-angled at B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Given P(1, 1) and Q(5, 1), calculate the length of PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(5 − 1)² + (1 − 1)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(1, 1), Q(5, 1) and R(5, 5) are plotted on the Cartesian plane, forming triangle PQR. Given that PQ = 4 and QR = 4, calculate PR and hence state whether triangle PQR is isosceles.', answer: 'PR = √[(5 − 1)² + (5 − 1)²] = √[16 + 16] = √32 = 4√2\nSince PQ = QR = 4 and PR = 4√2, exactly two sides are equal. Triangle PQR is isosceles. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 146 146" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="138" x2="26" y2="26" /><line x1="42" y1="138" x2="42" y2="26" /><line x1="58" y1="138" x2="58" y2="26" /><line x1="74" y1="138" x2="74" y2="26" /><line x1="90" y1="138" x2="90" y2="26" /><line x1="106" y1="138" x2="106" y2="26" /><line x1="122" y1="138" x2="122" y2="26" /><line x1="138" y1="138" x2="138" y2="26" /><line x1="26" y1="138" x2="138" y2="138" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="122" x2="138" y2="122" /><line x1="42" y1="138" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="134" text-anchor="middle">-1</text><text x="58" y="134" text-anchor="middle">1</text><text x="74" y="134" text-anchor="middle">2</text><text x="90" y="134" text-anchor="middle">3</text><text x="106" y="134" text-anchor="middle">4</text><text x="122" y="134" text-anchor="middle">5</text><text x="138" y="134" text-anchor="middle">6</text><text x="34" y="141" text-anchor="end">-1</text><text x="34" y="125" text-anchor="end">0</text><text x="34" y="109" text-anchor="end">1</text><text x="34" y="93" text-anchor="end">2</text><text x="34" y="77" text-anchor="end">3</text><text x="34" y="61" text-anchor="end">4</text><text x="34" y="45" text-anchor="end">5</text><text x="34" y="29" text-anchor="end">6</text></g><polygon points="58,106 122,106 122,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="58" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="46" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(1,1)</text><text x="116" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(5,1)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(5,5)</text></svg>` },

        // Block 6 — Angle at a vertex via inclination
        { difficulty: 'Hard', question: 'Given A(−2, 2), B(3, 2) and C(3, −2), determine the size of angle ABC, rounded to one decimal place.', answer: 'Gradient of BA: m₁ = (2 − 2)/(−2 − 3) = 0 (horizontal). Gradient of BC: m₂ = (−2 − 2)/(3 − 3) = undefined (vertical). Since BA is horizontal and BC is vertical, BA ⊥ BC. Therefore angle ABC = 90.0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−2, 2), B(3, 2) and C(3, −2) are plotted on the Cartesian plane, forming triangle ABC with a right angle at B. Given that AB = 5 and BC = 4, calculate the length of AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(3 − (−2))² + (−2 − 2)²] = √[25 + 16] = √41 ≈ 6.40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="74" x2="138" y2="74" /><line x1="74" y1="122" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="86" text-anchor="middle">-3</text><text x="42" y="86" text-anchor="middle">-2</text><text x="58" y="86" text-anchor="middle">-1</text><text x="90" y="86" text-anchor="middle">1</text><text x="106" y="86" text-anchor="middle">2</text><text x="122" y="86" text-anchor="middle">3</text><text x="138" y="86" text-anchor="middle">4</text><text x="66" y="125" text-anchor="end">-3</text><text x="66" y="109" text-anchor="end">-2</text><text x="66" y="93" text-anchor="end">-1</text><text x="66" y="77" text-anchor="end">0</text><text x="66" y="61" text-anchor="end">1</text><text x="66" y="45" text-anchor="end">2</text><text x="66" y="29" text-anchor="end">3</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-2,2)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(3,2)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(3,-2)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered lines, gradients, inclination and triangle proofs. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on inclination or the mixed triangle applications and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on equations of lines and parallel/perpendicular gradients, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Distance / gradient / midpoint revision
        { difficulty: 'Easy', question: 'Given A(2, 1) and B(6, 4), calculate the distance AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(6 − 2)² + (4 − 1)²] = √[16 + 9] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Given A(2, 1) and C(2, 4), calculate the gradient of AC.', checkMode: 'auto', correctAnswer: 'undefined', correctAnswers: ['undefined', 'Undefined'], answer: 'undefined', explanation: 'm = (4 − 1)/(2 − 2) = 3/0 = undefined (vertical line) ✓' },
        { difficulty: 'Medium', question: 'A(2, 1), B(6, 4) and C(2, 4) are plotted on the Cartesian plane, forming triangle ABC. Determine the midpoint of BC.', checkMode: 'auto', correctAnswer: '(4, 4)', correctAnswers: ['(4, 4)', '(4,4)', '4, 4'], answer: '(4, 4)', explanation: 'M = ((6 + 2)/2, (4 + 4)/2) = (8/2, 8/2) = (4, 4) ✓', diagramSvg: `<svg viewBox="0 0 162 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="154" y1="122" x2="154" y2="26" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="154" y2="106" /><line x1="42" y1="122" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-1</text><text x="58" y="118" text-anchor="middle">1</text><text x="74" y="118" text-anchor="middle">2</text><text x="90" y="118" text-anchor="middle">3</text><text x="106" y="118" text-anchor="middle">4</text><text x="122" y="118" text-anchor="middle">5</text><text x="138" y="118" text-anchor="middle">6</text><text x="154" y="118" text-anchor="middle">7</text><text x="34" y="125" text-anchor="end">-1</text><text x="34" y="109" text-anchor="end">0</text><text x="34" y="93" text-anchor="end">1</text><text x="34" y="77" text-anchor="end">2</text><text x="34" y="61" text-anchor="end">3</text><text x="34" y="45" text-anchor="end">4</text><text x="34" y="29" text-anchor="end">5</text></g><polygon points="74,90 138,42 74,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="74" cy="90" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="74" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="68" y="102" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(2,1)</text><text x="132" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(6,4)</text><text x="80" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">C(2,4)</text></svg>` },

        // Block 2 — Equation of a line through two points
        { difficulty: 'Easy', question: 'Find the equation of the line through (0, 2) and (3, 8).', checkMode: 'auto', correctAnswer: 'y = 2x + 2', correctAnswers: ['y = 2x + 2', 'y=2x+2'], answer: 'y = 2x + 2', explanation: 'm = (8 − 2)/(3 − 0) = 6/3 = 2. Substitute (0, 2): y − 2 = 2(x − 0) → y = 2x + 2 ✓' },
        { difficulty: 'Easy', question: 'Find the equation of the line through (2, 3) and (5, 9).', checkMode: 'auto', correctAnswer: 'y = 2x - 1', correctAnswers: ['y = 2x - 1', 'y=2x-1', 'y = 2x − 1', 'y=2x−1'], answer: 'y = 2x - 1', explanation: 'm = (9 − 3)/(5 − 2) = 6/3 = 2. Substitute (2, 3): y − 3 = 2(x − 2) → y = 2x − 1 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (−2, 8) and (4, −4).', checkMode: 'auto', correctAnswer: 'y = -2x + 4', correctAnswers: ['y = -2x + 4', 'y=-2x+4', 'y = −2x + 4', 'y=−2x+4'], answer: 'y = -2x + 4', explanation: 'm = (−4 − 8)/(4 − (−2)) = −12/6 = −2. Substitute (4, −4): y − (−4) = −2(x − 4) → y + 4 = −2x + 8 → y = −2x + 4 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (5, 1) and (5, 7), and state what type of line this is.', answer: 'The equation is x = 5. This is a vertical line because both points share the same x-coordinate, making the gradient undefined.', checkMode: 'self' },

        // Block 3 — Parallel and perpendicular lines
        { difficulty: 'Easy', question: 'Write down the gradient of a line parallel to y = 4x + 1.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Parallel lines have equal gradients. The gradient of y = 4x + 1 is m = 4, so a parallel line also has m = 4 ✓' },
        { difficulty: 'Easy', question: 'Write down the gradient of a line perpendicular to y = 2/5x - 3.', checkMode: 'auto', correctAnswer: '-5/2', correctAnswers: ['-5/2', '−5/2', '-2.5'], answer: '-5/2', explanation: 'For perpendicular lines, m₁ × m₂ = −1.\nGiven m₁ = 2/5: m₂ = −1 ÷ (2/5) = −5/2 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (0, −5) parallel to y = 4x + 2.', checkMode: 'auto', correctAnswer: 'y = 4x - 5', correctAnswers: ['y = 4x - 5', 'y=4x-5', 'y = 4x − 5', 'y=4x−5'], answer: 'y = 4x - 5', explanation: 'Gradient: m = 4 (same as parallel line).\nSubstitute (0, −5): y − (−5) = 4(x − 0) → y = 4x − 5 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the line through (2, 5) perpendicular to y = 2/5x + 1.', checkMode: 'auto', correctAnswer: 'y = -5/2x + 10', correctAnswers: ['y = -5/2x + 10', 'y=-5/2x+10', 'y = −5/2x + 10', 'y=−5/2x+10'], answer: 'y = -5/2x + 10', explanation: 'Gradient of given line: m₁ = 2/5.\nPerpendicular gradient: m₂ = −5/2.\nSubstitute (2, 5): y − 5 = −5/2(x − 2) → y − 5 = −5/2x + 5 → y = −5/2x + 10 ✓' },

        // Block 4 — Inclination of a line
        { difficulty: 'Easy', question: 'Determine the inclination of a line with gradient m = 1.7321, rounded to the nearest degree.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], answer: '60', explanation: 'tan θ = 1.7321 → θ = tan⁻¹(1.7321) ≈ 60°. Gradient is positive so no correction needed. θ ≈ 60° ✓' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = 0.3640, rounded to the nearest degree.', answer: 'θ = tan⁻¹(0.3640) ≈ 20°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = −2.9042, rounded to the nearest degree.', answer: 'θ = tan⁻¹(−2.9042) ≈ −71°. Since the gradient is negative, add 180°: θ = −71° + 180° = 109°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the gradient of a line with inclination 40°, rounded to two decimal places.', answer: 'm = tan(40°) ≈ 0.84', checkMode: 'self' },

        // Block 5 — Right-angle / isosceles triangle proofs
        { difficulty: 'Medium', question: 'Given A(0, 0), B(6, 0) and C(6, 3), show that triangle ABC is right-angled at B.', answer: 'Gradient of AB: m₁ = (0 − 0)/(6 − 0) = 0 (horizontal). Gradient of BC: m₂ = (3 − 0)/(6 − 6) = undefined (vertical). A horizontal line is perpendicular to a vertical line, so AB ⊥ BC. Therefore triangle ABC is right-angled at B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Given P(2, 2) and Q(6, 2), calculate the length of PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(6 − 2)² + (2 − 2)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(2, 2), Q(6, 2) and R(6, 6) are plotted on the Cartesian plane, forming triangle PQR. Given that PQ = 4 and QR = 4, calculate PR and hence state whether triangle PQR is isosceles.', answer: 'PR = √[(6 − 2)² + (6 − 2)²] = √[16 + 16] = √32 = 4√2\nSince PQ = QR = 4 and PR = 4√2, exactly two sides are equal. Triangle PQR is isosceles. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 162 162" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="154" x2="26" y2="26" /><line x1="42" y1="154" x2="42" y2="26" /><line x1="58" y1="154" x2="58" y2="26" /><line x1="74" y1="154" x2="74" y2="26" /><line x1="90" y1="154" x2="90" y2="26" /><line x1="106" y1="154" x2="106" y2="26" /><line x1="122" y1="154" x2="122" y2="26" /><line x1="138" y1="154" x2="138" y2="26" /><line x1="154" y1="154" x2="154" y2="26" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="154" y2="138" /><line x1="42" y1="154" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-1</text><text x="58" y="150" text-anchor="middle">1</text><text x="74" y="150" text-anchor="middle">2</text><text x="90" y="150" text-anchor="middle">3</text><text x="106" y="150" text-anchor="middle">4</text><text x="122" y="150" text-anchor="middle">5</text><text x="138" y="150" text-anchor="middle">6</text><text x="154" y="150" text-anchor="middle">7</text><text x="34" y="157" text-anchor="end">-1</text><text x="34" y="141" text-anchor="end">0</text><text x="34" y="125" text-anchor="end">1</text><text x="34" y="109" text-anchor="end">2</text><text x="34" y="93" text-anchor="end">3</text><text x="34" y="77" text-anchor="end">4</text><text x="34" y="61" text-anchor="end">5</text><text x="34" y="45" text-anchor="end">6</text><text x="34" y="29" text-anchor="end">7</text></g><polygon points="74,106 138,106 138,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="74" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="62" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(2,2)</text><text x="132" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(6,2)</text><text x="132" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(6,6)</text></svg>` },

        // Block 6 — Angle at a vertex via inclination
        { difficulty: 'Hard', question: 'Given A(−1, 3), B(4, 3) and C(4, −1), determine the size of angle ABC, rounded to one decimal place.', answer: 'Gradient of BA: m₁ = (3 − 3)/(−1 − 4) = 0 (horizontal). Gradient of BC: m₂ = (−1 − 3)/(4 − 4) = undefined (vertical). Since BA is horizontal and BC is vertical, BA ⊥ BC. Therefore angle ABC = 90.0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−1, 3), B(4, 3) and C(4, −1) are plotted on the Cartesian plane, forming triangle ABC with a right angle at B. Given that AB = 5 and BC = 4, calculate the length of AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(4 − (−1))² + (−1 − 3)²] = √[25 + 16] = √41 ≈ 6.40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="90" x2="138" y2="90" /><line x1="58" y1="122" x2="58" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="102" text-anchor="middle">-2</text><text x="42" y="102" text-anchor="middle">-1</text><text x="74" y="102" text-anchor="middle">1</text><text x="90" y="102" text-anchor="middle">2</text><text x="106" y="102" text-anchor="middle">3</text><text x="122" y="102" text-anchor="middle">4</text><text x="138" y="102" text-anchor="middle">5</text><text x="50" y="125" text-anchor="end">-2</text><text x="50" y="109" text-anchor="end">-1</text><text x="50" y="93" text-anchor="end">0</text><text x="50" y="77" text-anchor="end">1</text><text x="50" y="61" text-anchor="end">2</text><text x="50" y="45" text-anchor="end">3</text><text x="50" y="29" text-anchor="end">4</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-1,3)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(4,3)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4,-1)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered lines, gradients, inclination and triangle proofs. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on inclination or the mixed triangle applications and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on equations of lines and parallel/perpendicular gradients, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Distance / gradient / midpoint revision
        { difficulty: 'Easy', question: 'Given A(0, 3) and B(3, 7), calculate the distance AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(3 − 0)² + (7 − 3)²] = √[9 + 16] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Given A(0, 3) and C(3, 3), calculate the gradient of AC.', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'm = (3 − 3)/(3 − 0) = 0/3 = 0 ✓' },
        { difficulty: 'Medium', question: 'A(0, 3), B(3, 7) and C(3, 3) are plotted on the Cartesian plane, forming triangle ABC. Determine the midpoint of BC.', checkMode: 'auto', correctAnswer: '(3, 5)', correctAnswers: ['(3, 5)', '(3,5)', '3, 5'], answer: '(3, 5)', explanation: 'M = ((3 + 3)/2, (7 + 3)/2) = (6/2, 10/2) = (3, 5) ✓', diagramSvg: `<svg viewBox="0 0 114 178" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="170" x2="26" y2="26" /><line x1="42" y1="170" x2="42" y2="26" /><line x1="58" y1="170" x2="58" y2="26" /><line x1="74" y1="170" x2="74" y2="26" /><line x1="90" y1="170" x2="90" y2="26" /><line x1="106" y1="170" x2="106" y2="26" /><line x1="26" y1="170" x2="106" y2="170" /><line x1="26" y1="154" x2="106" y2="154" /><line x1="26" y1="138" x2="106" y2="138" /><line x1="26" y1="122" x2="106" y2="122" /><line x1="26" y1="106" x2="106" y2="106" /><line x1="26" y1="90" x2="106" y2="90" /><line x1="26" y1="74" x2="106" y2="74" /><line x1="26" y1="58" x2="106" y2="58" /><line x1="26" y1="42" x2="106" y2="42" /><line x1="26" y1="26" x2="106" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="106" y2="154" /><line x1="42" y1="170" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-1</text><text x="58" y="166" text-anchor="middle">1</text><text x="74" y="166" text-anchor="middle">2</text><text x="90" y="166" text-anchor="middle">3</text><text x="106" y="166" text-anchor="middle">4</text><text x="34" y="173" text-anchor="end">-1</text><text x="34" y="157" text-anchor="end">0</text><text x="34" y="141" text-anchor="end">1</text><text x="34" y="125" text-anchor="end">2</text><text x="34" y="109" text-anchor="end">3</text><text x="34" y="93" text-anchor="end">4</text><text x="34" y="77" text-anchor="end">5</text><text x="34" y="61" text-anchor="end">6</text><text x="34" y="45" text-anchor="end">7</text><text x="34" y="29" text-anchor="end">8</text></g><polygon points="42,106 90,42 90,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="30" y="112" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(0,3)</text><text x="84" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(3,7)</text><text x="84" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(3,3)</text></svg>` },

        // Block 2 — Equation of a line through two points
        { difficulty: 'Easy', question: 'Find the equation of the line through (0, 1) and (4, 9).', checkMode: 'auto', correctAnswer: 'y = 2x + 1', correctAnswers: ['y = 2x + 1', 'y=2x+1'], answer: 'y = 2x + 1', explanation: 'm = (9 − 1)/(4 − 0) = 8/4 = 2. Substitute (0, 1): y − 1 = 2(x − 0) → y = 2x + 1 ✓' },
        { difficulty: 'Easy', question: 'Find the equation of the line through (1, 4) and (3, 10).', checkMode: 'auto', correctAnswer: 'y = 3x + 1', correctAnswers: ['y = 3x + 1', 'y=3x+1'], answer: 'y = 3x + 1', explanation: 'm = (10 − 4)/(3 − 1) = 6/2 = 3. Substitute (1, 4): y − 4 = 3(x − 1) → y = 3x + 1 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (−4, 7) and (2, −5).', checkMode: 'auto', correctAnswer: 'y = -2x - 1', correctAnswers: ['y = -2x - 1', 'y=-2x-1', 'y = −2x − 1', 'y=−2x−1'], answer: 'y = -2x - 1', explanation: 'm = (−5 − 7)/(2 − (−4)) = −12/6 = −2. Substitute (2, −5): y − (−5) = −2(x − 2) → y + 5 = −2x + 4 → y = −2x − 1 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (−1, 3) and (−1, 9), and state what type of line this is.', answer: 'The equation is x = −1. This is a vertical line because both points share the same x-coordinate, making the gradient undefined.', checkMode: 'self' },

        // Block 3 — Parallel and perpendicular lines
        { difficulty: 'Easy', question: 'Write down the gradient of a line parallel to y = -3x + 7.', checkMode: 'auto', correctAnswer: '-3', answer: '-3', explanation: 'Parallel lines have equal gradients. The gradient of y = −3x + 7 is m = −3, so a parallel line also has m = −3 ✓' },
        { difficulty: 'Easy', question: 'Write down the gradient of a line perpendicular to y = 3/4x - 6.', checkMode: 'auto', correctAnswer: '-4/3', correctAnswers: ['-4/3', '−4/3', '-1.33', '-1.3'], answer: '-4/3', explanation: 'For perpendicular lines, m₁ × m₂ = −1.\nGiven m₁ = 3/4: m₂ = −1 ÷ (3/4) = −4/3 ✓' },
        { difficulty: 'Medium', question: 'Find the equation of the line through (0, 2) parallel to y = -3x - 1.', checkMode: 'auto', correctAnswer: 'y = -3x + 2', correctAnswers: ['y = -3x + 2', 'y=-3x+2', 'y = −3x + 2', 'y=−3x+2'], answer: 'y = -3x + 2', explanation: 'Gradient: m = −3 (same as parallel line).\nSubstitute (0, 2): y − 2 = −3(x − 0) → y = −3x + 2 ✓' },
        { difficulty: 'Hard', question: 'Find the equation of the line through (3, 2) perpendicular to y = 3/4x + 5.', checkMode: 'auto', correctAnswer: 'y = -4/3x + 6', correctAnswers: ['y = -4/3x + 6', 'y=-4/3x+6', 'y = −4/3x + 6', 'y=−4/3x+6'], answer: 'y = -4/3x + 6', explanation: 'Gradient of given line: m₁ = 3/4.\nPerpendicular gradient: m₂ = −4/3.\nSubstitute (3, 2): y − 2 = −4/3(x − 3) → y − 2 = −4/3x + 4 → y = −4/3x + 6 ✓' },

        // Block 4 — Inclination of a line
        { difficulty: 'Easy', question: 'Determine the inclination of a line with gradient m = 0.5, rounded to two decimal places.', checkMode: 'auto', correctAnswer: '26.57', correctAnswers: ['26.57', '26.57°', '26.6', '26.6°'], answer: '26.57', explanation: 'tan θ = 0.5 → θ = tan⁻¹(0.5) ≈ 26.57°. Gradient is positive so no correction needed. θ ≈ 26.57° ✓' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = 1.1918, rounded to the nearest degree.', answer: 'θ = tan⁻¹(1.1918) ≈ 50°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Determine the inclination of a line with gradient m = −0.2679, rounded to the nearest degree.', answer: 'θ = tan⁻¹(−0.2679) ≈ −15°. Since the gradient is negative, add 180°: θ = −15° + 180° = 165°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the gradient of a line with inclination 104°, rounded to two decimal places.', answer: 'm = tan(104°) ≈ −4.01', checkMode: 'self' },

        // Block 5 — Right-angle / isosceles triangle proofs
        { difficulty: 'Medium', question: 'Given A(0, 0), B(4, 0) and C(4, 6), show that triangle ABC is right-angled at B.', answer: 'Gradient of AB: m₁ = (0 − 0)/(4 − 0) = 0 (horizontal). Gradient of BC: m₂ = (6 − 0)/(4 − 4) = undefined (vertical). A horizontal line is perpendicular to a vertical line, so AB ⊥ BC. Therefore triangle ABC is right-angled at B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Given P(0, 0) and Q(4, 0), calculate the length of PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(4 − 0)² + (0 − 0)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(0, 0), Q(4, 0) and R(4, 4) are plotted on the Cartesian plane, forming triangle PQR. Given that PQ = 4 and QR = 4, calculate PR and hence state whether triangle PQR is isosceles.', answer: 'PR = √[(4 − 0)² + (4 − 0)²] = √[16 + 16] = √32 = 4√2\nSince PQ = QR = 4 and PR = 4√2, exactly two sides are equal. Triangle PQR is isosceles. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="122" y2="106" /><line x1="42" y1="122" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-1</text><text x="58" y="118" text-anchor="middle">1</text><text x="74" y="118" text-anchor="middle">2</text><text x="90" y="118" text-anchor="middle">3</text><text x="106" y="118" text-anchor="middle">4</text><text x="122" y="118" text-anchor="middle">5</text><text x="34" y="125" text-anchor="end">-1</text><text x="34" y="109" text-anchor="end">0</text><text x="34" y="93" text-anchor="end">1</text><text x="34" y="77" text-anchor="end">2</text><text x="34" y="61" text-anchor="end">3</text><text x="34" y="45" text-anchor="end">4</text><text x="34" y="29" text-anchor="end">5</text></g><polygon points="42,106 106,106 106,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="30" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,0)</text><text x="100" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(4,0)</text><text x="100" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(4,4)</text></svg>` },

        // Block 6 — Angle at a vertex via inclination
        { difficulty: 'Hard', question: 'Given A(−3, 1), B(2, 1) and C(2, −3), determine the size of angle ABC, rounded to one decimal place.', answer: 'Gradient of BA: m₁ = (1 − 1)/(−3 − 2) = 0 (horizontal). Gradient of BC: m₂ = (−3 − 1)/(2 − 2) = undefined (vertical). Since BA is horizontal and BC is vertical, BA ⊥ BC. Therefore angle ABC = 90.0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−3, 1), B(2, 1) and C(2, −3) are plotted on the Cartesian plane, forming triangle ABC with a right angle at B. Given that AB = 5 and BC = 4, calculate the length of AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(2 − (−3))² + (−3 − 1)²] = √[25 + 16] = √41 ≈ 6.40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="58" x2="138" y2="58" /><line x1="90" y1="122" x2="90" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="70" text-anchor="middle">-4</text><text x="42" y="70" text-anchor="middle">-3</text><text x="58" y="70" text-anchor="middle">-2</text><text x="74" y="70" text-anchor="middle">-1</text><text x="106" y="70" text-anchor="middle">1</text><text x="122" y="70" text-anchor="middle">2</text><text x="138" y="70" text-anchor="middle">3</text><text x="82" y="125" text-anchor="end">-4</text><text x="82" y="109" text-anchor="end">-3</text><text x="82" y="93" text-anchor="end">-2</text><text x="82" y="77" text-anchor="end">-1</text><text x="82" y="61" text-anchor="end">0</text><text x="82" y="45" text-anchor="end">1</text><text x="82" y="29" text-anchor="end">2</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-3,1)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(2,1)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(2,-3)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered lines, gradients, inclination and triangle proofs. Excellent work!' },
        { minScore: 13, message: 'Great work! Review any missed questions on inclination or the mixed triangle applications and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples on equations of lines and parallel/perpendicular gradients, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
