import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (analytical geometry roles) ──────────────────────────────
// x-coordinates       → blue   (#2563eb)
// y-coordinates       → green  (#16a34a)
// result/distance     → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analytical Geometry',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE DISTANCE FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distance-formula',
      title: 'The Distance Formula',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">To find the distance between two points (${bl('x₁')},${gr('y₁')}) and (${bl('x₂')},${gr('y₂')}) on a Cartesian plane, we use the formula: ${or('distance')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]. This comes from applying the <strong>Theorem of Pythagoras</strong> to the horizontal and vertical differences between the points.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-coordinates')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-coordinates')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('final distance')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The distance formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${or('distance')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Where the formula comes from</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horizontal difference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('x₂')} − ${bl('x₁')} gives the horizontal distance between the two points — the base of the right-angled triangle.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertical difference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('y₂')} − ${gr('y₁')} gives the vertical distance between the two points — the height of the right-angled triangle.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Pythagoras applied</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Squaring both differences, adding them, and taking the square root gives the hypotenuse — the ${or('distance')} between the two points.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tip: the order of subtraction does not matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because we square the differences, (${bl('x₂')}−${bl('x₁')})² = (${bl('x₁')}−${bl('x₂')})². You can subtract in either order and the ${or('distance')} will be the same.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the distance between P(2,5) and Q(7,1).',
          answer: `${or('distance')} = √41 ≈ ${or('6.40 units')}`,
          steps: [
            `Write down the coordinates: ${bl('x₁')} = ${bl('2')}, ${gr('y₁')} = ${gr('5')}, ${bl('x₂')} = ${bl('7')}, ${gr('y₂')} = ${gr('1')}.`,
            `Apply the formula: ${or('distance')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]`,
            `Substitute: ${or('distance')} = √[(${bl('7')}−${bl('2')})² + (${gr('1')}−${gr('5')})²]`,
            `Calculate the differences: = √[(${bl('5')})² + (${gr('−4')})²]`,
            `Square the differences: = √[${bl('25')} + ${gr('16')}]`,
            `Add: = √41`,
            `<strong>Answer:</strong> ${or('distance')} = √41 ≈ ${or('6.40 units')} ✓`,
          ],
        },
        {
          question: 'Sipho finds the distance between A(−3,4) and B(2,−8).',
          answer: `${or('distance')} = ${or('13 units')}`,
          steps: [
            `Write down the coordinates: ${bl('x₁')} = ${bl('−3')}, ${gr('y₁')} = ${gr('4')}, ${bl('x₂')} = ${bl('2')}, ${gr('y₂')} = ${gr('−8')}.`,
            `Apply the formula: ${or('distance')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]`,
            `Substitute: ${or('distance')} = √[(${bl('2')}−(${bl('−3')}))² + (${gr('−8')}−${gr('4')})²]`,
            `Simplify the differences: = √[(${bl('5')})² + (${gr('−12')})²]`,
            `Square the differences: = √[${bl('25')} + ${gr('144')}]`,
            `Add: = √169`,
            `<strong>Answer:</strong> ${or('distance')} = ${or('13 units')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing points P(2,5) and Q(7,1) with the right-angled triangle formed by the horizontal and vertical differences colour coded blue and green, hypotenuse labelled as distance √41 in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how the distance formula is derived from the Theorem of Pythagoras, with a worked example on the Cartesian plane colour coding x-coordinates blue y-coordinates green and the final distance orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE GRADIENT FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'gradient-formula',
      title: 'The Gradient Formula',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">To find the gradient (slope) of the line segment joining two points (${bl('x₁')},${gr('y₁')}) and (${bl('x₂')},${gr('y₂')}), we use: ${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')}). This tells us how steep the line is and in which direction it slopes. <strong>Parallel lines</strong> have ${gr('equal gradients')}; <strong>perpendicular lines</strong> have gradients that are ${or('negative reciprocals')} of each other (their product equals −1).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradient calculation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallel comparison')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perpendicular relationship')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The gradient formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')})</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parallel and perpendicular lines</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallel lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two lines are ${gr('parallel')} if their gradients are ${gr('equal')}: ${gr('m₁ = m₂')}. The lines never meet.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Perpendicular lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two lines are ${or('perpendicular')} if their gradients are ${or('negative reciprocals')}: ${or('m₁ × m₂ = −1')}, or equivalently ${or('m₂ = −1/m₁')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Interpreting the gradient</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('positive')} gradient means the line slopes upward from left to right. A ${bl('negative')} gradient means it slopes downward. A gradient of ${bl('zero')} means the line is horizontal. An ${bl('undefined')} gradient means the line is vertical (the denominator is zero).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the gradient of the line through A(1,3) and B(5,11).',
          answer: `${bl('gradient')} = ${bl('2')}`,
          steps: [
            `Write down the coordinates: ${bl('x₁')} = ${bl('1')}, ${gr('y₁')} = ${gr('3')}, ${bl('x₂')} = ${bl('5')}, ${gr('y₂')} = ${gr('11')}.`,
            `Apply the formula: ${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')})`,
            `Substitute: ${bl('m')} = (${gr('11')}−${gr('3')}) ÷ (${bl('5')}−${bl('1')})`,
            `Calculate: ${bl('m')} = ${gr('8')} ÷ ${bl('4')}`,
            `<strong>Answer:</strong> ${bl('gradient')} = ${bl('2')} ✓`,
          ],
        },
        {
          question: 'Lerato has two lines: one through (0,2) and (3,8), another through (1,5) and (4,11). Are they parallel?',
          answer: `The lines ${gr('are parallel')} — both have ${gr('gradient = 2')}`,
          steps: [
            `Calculate the ${bl('gradient')} of the first line through (${bl('0')},${gr('2')}) and (${bl('3')},${gr('8')}):`,
            `${bl('m₁')} = (${gr('8')}−${gr('2')}) ÷ (${bl('3')}−${bl('0')}) = ${gr('6')} ÷ ${bl('3')} = ${bl('2')}`,
            `Calculate the ${bl('gradient')} of the second line through (${bl('1')},${gr('5')}) and (${bl('4')},${gr('11')}):`,
            `${bl('m₂')} = (${gr('11')}−${gr('5')}) ÷ (${bl('4')}−${bl('1')}) = ${gr('6')} ÷ ${bl('3')} = ${bl('2')}`,
            `${gr('Compare:')} ${gr('m₁')} = ${gr('2')} and ${gr('m₂')} = ${gr('2')}. Since ${gr('m₁ = m₂')}, the lines are ${gr('parallel')}. ✓`,
          ],
        },
        {
          question: 'Thabo has a line with gradient 3. Find the gradient of a line perpendicular to it.',
          answer: `Perpendicular gradient = ${or('−1/3')}`,
          steps: [
            `The given gradient is ${bl('m₁')} = ${bl('3')}.`,
            `For ${or('perpendicular')} lines: ${or('m₁ × m₂ = −1')}`,
            `Substitute: ${bl('3')} × ${or('m₂')} = −1`,
            `Solve for ${or('m₂')}: ${or('m₂')} = −1 ÷ ${bl('3')} = ${or('−1/3')}`,
            `<strong>Answer:</strong> The perpendicular gradient is ${or('−1/3')} (the ${or('negative reciprocal')} of ${bl('3')}). ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing two parallel lines with equal gradients labelled in green and two perpendicular lines with gradients multiplying to −1 labelled in orange, gradient calculation shown in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the gradient of a line and how to identify parallel lines by equal gradients and perpendicular lines by negative reciprocal gradients" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE MIDPOINT FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'midpoint-formula',
      title: 'The Midpoint Formula',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">To find the coordinates of the midpoint of a line segment joining (${bl('x₁')},${gr('y₁')}) and (${bl('x₂')},${gr('y₂')}), we average the x-coordinates and average the y-coordinates: ${or('Midpoint')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('averaged x-coordinate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('averaged y-coordinate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('midpoint result')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The midpoint formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${or('M')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Using the midpoint formula in reverse</p>` +
        `<p style="margin-bottom:12px;">If you know the midpoint and one endpoint, you can find the other endpoint by working backwards:</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1em;color:#374151;margin-bottom:8px;">If ${or('M')} = (${or('a')},${or('b')}) and one point is (${bl('x₁')},${gr('y₁')}), then the other point is:</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('x₂')} = 2${or('a')} − ${bl('x₁')} &nbsp;&nbsp; and &nbsp;&nbsp; ${gr('y₂')} = 2${or('b')} − ${gr('y₁')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why averaging works</p>` +
        `<p style="margin:0;color:#1e3a8a;">The midpoint lies exactly halfway between the two endpoints. Averaging the ${bl('x-coordinates')} gives the exact horizontal centre, and averaging the ${gr('y-coordinates')} gives the exact vertical centre.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the midpoint of the segment joining C(4,6) and D(10,2).',
          answer: `${or('Midpoint')} = ${or('(7, 4)')}`,
          steps: [
            `Write down the coordinates: ${bl('x₁')} = ${bl('4')}, ${gr('y₁')} = ${gr('6')}, ${bl('x₂')} = ${bl('10')}, ${gr('y₂')} = ${gr('2')}.`,
            `Apply the formula: ${or('M')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2)`,
            `Substitute: ${or('M')} = ((${bl('4')}+${bl('10')})÷2 , (${gr('6')}+${gr('2')})÷2)`,
            `Calculate the ${bl('x-coordinate')}: ${bl('14')} ÷ 2 = ${bl('7')}`,
            `Calculate the ${gr('y-coordinate')}: ${gr('8')} ÷ 2 = ${gr('4')}`,
            `<strong>Answer:</strong> ${or('Midpoint')} = (${bl('7')}, ${gr('4')}) = ${or('(7, 4)')} ✓`,
          ],
        },
        {
          question: 'Amahle knows the midpoint of segment EF is (5,3), and point E is (2,1). Find point F.',
          answer: `Point F = ${or('(8, 5)')}`,
          steps: [
            `Write down what is known: ${or('M')} = (${or('5')},${or('3')}), E = (${bl('2')},${gr('1')}), F = (${bl('x')},${gr('y')}).`,
            `Set up the equations using the midpoint formula: (${bl('2')}+${bl('x')})÷2 = ${or('5')} and (${gr('1')}+${gr('y')})÷2 = ${or('3')}`,
            `Solve for ${bl('x')}: ${bl('2')}+${bl('x')} = 2×${or('5')} = 10, so ${bl('x')} = 10−${bl('2')} = ${bl('8')}`,
            `Solve for ${gr('y')}: ${gr('1')}+${gr('y')} = 2×${or('3')} = 6, so ${gr('y')} = 6−${gr('1')} = ${gr('5')}`,
            `<strong>Answer:</strong> Point F = (${bl('8')},${gr('5')}) = ${or('(8, 5)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing segment CD with C(4,6) and D(10,2) and midpoint M(7,4) marked halfway between them, averaged x-coordinate shown in blue and averaged y-coordinate in green, midpoint result in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the midpoint formula and how to work backwards to find an unknown endpoint when the midpoint is given" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — COMBINING DISTANCE, GRADIENT AND MIDPOINT TO SOLVE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combining-formulae',
      title: 'Combining Distance, Gradient and Midpoint to Solve Problems',
      icon: '🔗',
      explanation:
        `<p style="margin-bottom:16px;">We combine the distance, gradient and midpoint formulae to represent and solve more complex geometric figures on the Cartesian coordinate system, such as proving shapes are specific types of quadrilaterals or finding unknown vertices.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('midpoint')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('distance comparison')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('conclusion')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key geometric properties</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Parallelogram</strong> — opposite sides are parallel (equal gradients) and the diagonals bisect each other (share the same ${bl('midpoint')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Rectangle</strong> — a parallelogram with equal-length diagonals. Use the ${or('distance formula')} to compare diagonal lengths.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Rhombus</strong> — a parallelogram with all four sides equal in length. Use the ${gr('distance formula')} to compare side lengths.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy: always state your conclusion</p>` +
        `<p style="margin:0;color:#1e3a8a;">After calculating, write a ${gr('clear conclusion')} that directly answers the question. For proof questions, show the calculation AND the reasoning — a number alone does not constitute a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Given points P(2,5) and Q(3,1), find R if M(1;0) is the midpoint of PR.',
          answer: `R = ${bl('(0, −5)')}`,
          steps: [
            `The ${bl('midpoint')} of PR is M(${bl('1')},${bl('0')}). Point P = (${bl('2')},${gr('5')}). Let R = (${bl('x')},${gr('y')}).`,
            `Set up equations using the midpoint formula: (${bl('2')}+${bl('x')})÷2 = ${bl('1')} and (${gr('5')}+${gr('y')})÷2 = ${bl('0')}`,
            `Solve for ${bl('x')}: ${bl('2')}+${bl('x')} = 2×${bl('1')} = 2, so ${bl('x')} = 2−${bl('2')} = ${bl('0')}`,
            `Solve for ${gr('y')}: ${gr('5')}+${gr('y')} = 2×${bl('0')} = 0, so ${gr('y')} = 0−${gr('5')} = ${gr('−5')}`,
            `<strong>Answer:</strong> R = (${bl('0')},${gr('−5')}) ✓`,
          ],
        },
        {
          question: 'Determine if PQRS (with P(2,5), Q(3,1), R(0,−5), S to find) forms a parallelogram, by finding S such that PQRS has both pairs of opposite sides parallel.',
          answer: `S = ${bl('(−1, −1)')}`,
          steps: [
            `For a parallelogram, the diagonals bisect each other — they must share the same ${bl('midpoint')}.`,
            `Find the ${bl('midpoint')} of diagonal PR: ${bl('M')} = ((${bl('2')}+${bl('0')})÷2 , (${gr('5')}+(${gr('−5')}))÷2) = (${bl('1')},${gr('0')})`,
            `The ${bl('midpoint')} of diagonal QS must also equal (${bl('1')},${gr('0')}). Let S = (${bl('x')},${gr('y')}).`,
            `Solve for ${bl('x')}: (${bl('3')}+${bl('x')})÷2 = ${bl('1')}, so ${bl('3')}+${bl('x')} = 2, giving ${bl('x')} = ${bl('−1')}`,
            `Solve for ${gr('y')}: (${gr('1')}+${gr('y')})÷2 = ${gr('0')}, so ${gr('1')}+${gr('y')} = 0, giving ${gr('y')} = ${gr('−1')}`,
            `<strong>Answer:</strong> S = (${bl('−1')},${gr('−1')}) ✓`,
          ],
        },
        {
          question: 'Is PQRS (using the points found above: P(2,5), Q(3,1), R(0,−5), S(−1,−1)) a rectangle? Justify your answer.',
          answer: `${gr('PQRS is NOT a rectangle')} — the diagonals are not equal in length`,
          steps: [
            `A rectangle has equal-length diagonals. ${or('Compare the lengths')} of diagonals PR and QS.`,
            `${or('Distance')} PR = √[(${bl('0')}−${bl('2')})²+(${gr('−5')}−${gr('5')})²] = √[(${bl('−2')})²+(${gr('−10')})²] = √[${or('4')}+${or('100')}] = √${or('104')}`,
            `${or('Distance')} QS = √[(${bl('−1')}−${bl('3')})²+(${gr('−1')}−${gr('1')})²] = √[(${bl('−4')})²+(${gr('−2')})²] = √[${or('16')}+${or('4')}] = √${or('20')}`,
            `${or('Compare:')} √${or('104')} ≠ √${or('20')} — the diagonals are not equal in length.`,
            `<strong>${gr('Conclusion:')} Since the diagonals are not equal, PQRS is a parallelogram but ${gr('not a rectangle')}.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing quadrilateral PQRS with P(2,5) Q(3,1) R(0,-5) S(-1,-1), diagonals PR and QS drawn with their lengths labelled in orange to show PQRS is a parallelogram but not a rectangle, midpoints shown in blue and conclusion in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine the distance midpoint and gradient formulas to prove geometric properties of quadrilaterals on the Cartesian plane" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — distance formula (integer answer) ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the distance between A(1,2) and B(4,6).',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'distance = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5 ✓',
    },

    // ── Q2 Medium — distance formula with negative coordinates ────────────────
    {
      difficulty: 'Medium',
      question: 'Find the distance between C(−2,3) and D(4,−5).',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'distance = √[(4−(−2))² + (−5−3)²] = √[36 + 64] = √100 = 10 ✓',
    },

    // ── Q3 Hard — verify a learner's distance calculation ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho calculates the distance between (0,0) and (6,8) and gets 10. Check his answer.',
      answer: 'distance=√(36+64)=√100=10. He is correct.',
      checkMode: 'self',
    },

    // ── Q4 Easy — gradient formula (positive integer) ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the gradient of the line through (2,4) and (5,13).',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'm = (13 − 4) / (5 − 2) = 9 / 3 = 3 ✓',
    },

    // ── Q5 Medium — gradient formula (negative result) ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the gradient of the line through (−1,5) and (3,−3).',
      answer: '-2',
      checkMode: 'auto',
      correctAnswer: '-2',
      explanation: 'm = (−3 − 5) / (3 − (−1)) = −8 / 4 = −2 ✓',
    },

    // ── Q6 Hard — parallel lines from gradient comparison ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has two lines: one through (0,1) and (2,9), another through (1,4) and (3,12). Are they parallel? Explain.',
      answer: 'Gradient 1=(9-1)/2=4. Gradient 2=(12-4)/2=4. Yes, they are parallel since the gradients are equal.',
      checkMode: 'self',
    },

    // ── Q7 Medium — perpendicular gradient ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A line has gradient 4. Find the gradient of a line perpendicular to it.',
      answer: '-1/4',
      checkMode: 'auto',
      correctAnswer: '-1/4',
      correctAnswers: ['-1/4', '−1/4', '-0.25'],
      explanation: 'Perpendicular gradient = −1 / m = −1 / 4 ✓',
    },

    // ── Q8 Hard — verify perpendicular claim ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says two lines with gradients 2/3 and −3/2 are perpendicular. Is he correct? Explain.',
      answer: 'Yes — multiplying the gradients gives (2/3)×(-3/2)=-1, confirming they are perpendicular.',
      checkMode: 'self',
    },

    // ── Q9 Easy — midpoint formula (positive coordinates) ────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the midpoint of the segment joining (2,8) and (6,4).',
      answer: '(4,6)',
      checkMode: 'auto',
      correctAnswer: '(4,6)',
      correctAnswers: ['(4,6)', '(4, 6)', '4,6'],
      explanation: 'M = ((2 + 6) / 2 , (8 + 4) / 2) = (4, 6) ✓',
    },

    // ── Q10 Medium — midpoint formula (mixed coordinates) ────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the midpoint of the segment joining (−3,5) and (7,−1).',
      answer: '(2,2)',
      checkMode: 'auto',
      correctAnswer: '(2,2)',
      correctAnswers: ['(2,2)', '(2, 2)', '2,2'],
      explanation: 'M = ((−3 + 7) / 2 , (5 + (−1)) / 2) = (4/2 , 4/2) = (2, 2) ✓',
    },

    // ── Q11 Hard — find unknown endpoint using midpoint ───────────────────────
    {
      difficulty: 'Hard',
      question: 'The midpoint of segment AB is (4,3), and point A is (1,7). Find point B.',
      answer: '4=(1+x)/2, x=7. 3=(7+y)/2, y=-1. B=(7,-1).',
      checkMode: 'self',
    },

    // ── Q12 Medium — find unknown endpoint R ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Given P(3,4) and Q(7,2), find R if M(5,3) is the midpoint of PR.',
      answer: '(7,2)',
      checkMode: 'auto',
      correctAnswer: '(7,2)',
      correctAnswers: ['(7,2)', '(7, 2)', '7,2'],
      explanation: '5 = (3 + x) / 2 → x = 7.\n3 = (4 + y) / 2 → y = 2.\nR = (7, 2) ✓',
    },

    // ── Q13 Hard — find C using midpoint of BC ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Given B(4,6), find C if M(2,3) is the midpoint of BC.',
      answer: '2=(4+x)/2, x=0. 3=(6+y)/2, y=0. C=(0,0).',
      checkMode: 'self',
    },

    // ── Q14 Hard — determine parallel lines from two pairs of points ──────────
    {
      difficulty: 'Hard',
      question: 'Determine whether the line through (1,2) and (5,10) is parallel to the line through (0,−3) and (3,3).',
      answer: 'Gradient 1=(10-2)/4=2. Gradient 2=(3-(-3))/3=2. Yes, they are parallel.',
      checkMode: 'self',
    },

    // ── Q15 Hard — distance and gradient in one question ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the distance and gradient between (2,−1) and (8,7), showing both calculations.',
      answer: 'Distance=√[(8-2)²+(7-(-1))²]=√[36+64]=√100=10. Gradient=(7-(-1))/(8-2)=8/6=4/3.',
      checkMode: 'self',
    },

    // ── Q16 Medium — midpoint of a diagonal in a quadrilateral ───────────────
    {
      difficulty: 'Medium',
      question: 'Quadrilateral PQRS has P(1,1), Q(5,1), R(5,4), S(1,4). Find the midpoint of diagonal PR.',
      answer: '(3,2.5)',
      checkMode: 'auto',
      correctAnswer: '(3,2.5)',
      correctAnswers: ['(3,2.5)', '(3, 2.5)', '3,2.5'],
      explanation: 'Midpoint of PR = ((1 + 5) / 2 , (1 + 4) / 2) = (3, 2.5) ✓',
    },

    // ── Q17 Hard — midpoints of both diagonals to prove parallelogram ─────────
    {
      difficulty: 'Hard',
      question: 'Using PQRS from Q16 with P(1,1), Q(5,1), R(5,4), S(1,4), find the midpoint of diagonal QS and determine if PQRS is a parallelogram.',
      answer: 'Midpoint of QS=((5+1)/2,(1+4)/2)=(3,2.5). Since both diagonals share the same midpoint, PQRS is a parallelogram.',
      checkMode: 'self',
    },

    // ── Q18 Hard — side length to determine rectangle ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the length of side PQ in the quadrilateral from Q16, then determine if PQRS could be a rectangle.',
      answer: 'PQ=√[(5-1)²+(1-1)²]=√16=4. Checking all angles would confirm right angles exist (since sides are horizontal/vertical), making PQRS a rectangle.',
      checkMode: 'self',
    },

    // ── Q19 Hard — find D to complete a square ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Given A(2,3), B(6,3), C(6,7), find D such that ABCD forms a square.',
      answer: 'Since AB is horizontal (length 4) and BC is vertical (length 4), D must complete the square: D=(2,7).',
      checkMode: 'self',
    },

    // ── Q20 Hard — verify ABCD is a square by all four side lengths ───────────
    {
      difficulty: 'Hard',
      question: 'Verify that ABCD from Q19 (A(2,3), B(6,3), C(6,7), D(2,7)) is a square by calculating and comparing all four side lengths.',
      answer: 'AB=4, BC=4, CD=√[(2-6)²+(7-7)²]=4, DA=√[(2-2)²+(3-7)²]=4. All four sides equal 4, confirming a square (assuming right angles, which the horizontal/vertical sides guarantee).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered analytical geometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
