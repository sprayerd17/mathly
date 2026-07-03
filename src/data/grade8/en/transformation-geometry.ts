import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation geometry roles) ───────────────────────────
// x-axis / original shape / perimeter  → blue   (#2563eb)
// y-axis / transformed shape / area    → green  (#16a34a)
// reflected point / rule / scale factor→ orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformation Geometry',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTING AND TRANSLATING POINTS ON A COORDINATE PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflecting-translating-points',
      title: 'Reflecting and Translating Points on a Coordinate Plane',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We perform transformations with points on a <strong>coordinate plane</strong>: reflecting a point in the ${bl('x-axis')} or ${gr('y-axis')}, and translating a point within and across quadrants. ${bl('Reflecting in the x-axis')} flips the y-value's sign; ${gr('reflecting in the y-axis')} flips the x-value's sign.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-axis')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-axis')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reflected / translated point')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reflection and translation rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reflect in the ${bl('x-axis')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x, y) → (x, ${or('−y')}). The x-value stays the same; the y-value changes sign.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reflect in the ${gr('y-axis')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x, y) → (${or('−x')}, y). The y-value stays the same; the x-value changes sign.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Translation')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Slide the point left/right (change x) and up/down (change y). Add to move right or up; subtract to move left or down.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key fact</p>` +
        `<p style="margin:0;color:#1e3a8a;">A reflection or translation does <strong>not</strong> change the size or shape of a figure — only its position or orientation. The image is always <strong>congruent</strong> to the original.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Reflect the point (3, 5) in the x-axis.',
          answer: `The reflected point is ${or('(3, −5)')}`,
          steps: [
            `Reflecting in the ${bl('x-axis')} changes the sign of y: (x, y) → (x, ${or('−y')}).`,
            `Apply the rule: (3, 5) → (3, ${or('−5')}).`,
            `<strong>Answer:</strong> The reflected point is ${or('(3, −5)')}. See the diagram below showing this reflection.`,
          ],
        },
        {
          question: 'Translate the point (−2, 4) by 5 right and 3 down.',
          answer: `The translated point is ${or('(3, 1)')}`,
          steps: [
            `Moving <strong>right</strong> increases x; moving <strong>down</strong> decreases y.`,
            `New x = ${bl('−2')} + 5 = ${or('3')}.`,
            `New y = ${gr('4')} − 3 = ${or('1')}.`,
            `<strong>Answer:</strong> New point = ${or('(3, 1)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — reflect point in x-axis ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflect the point (4, 7) in the x-axis.',
          answer: '(4, −7)',
          checkMode: 'auto',
          correctAnswer: '(4,-7)',
          correctAnswers: ['(4,-7)', '(4, -7)', '(4,−7)', '(4, −7)'],
          explanation: 'Reflecting in the x-axis changes the sign of y: (4, 7) → (4, −7).',
        },

        // ── Q2 Easy — reflect point in y-axis ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflect the point (−3, 6) in the y-axis.',
          answer: '(3, 6)',
          checkMode: 'auto',
          correctAnswer: '(3,6)',
          correctAnswers: ['(3,6)', '(3, 6)'],
          explanation: 'Reflecting in the y-axis changes the sign of x: (−3, 6) → (3, 6).',
        },

        // ── Q3 Medium — translate a point ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Translate the point (5, −2) by 3 left and 4 up.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2,2)',
          correctAnswers: ['(2,2)', '(2, 2)'],
          explanation: 'Moving left: x = 5 − 3 = 2. Moving up: y = −2 + 4 = 2. New point = (2, 2).',
        },

        // ── Q4 Hard — identify reflection error ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho reflects the point (6, −8) in the x-axis and gets (−6, −8). Is he correct? Explain.',
          answer: 'No — reflecting in the x-axis only changes the sign of y, giving (6, 8), not (−6, −8).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing point (3,5) and its reflection (3,-5) across the x-axis, with a dotted line showing the reflection" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect and translate points on a coordinate plane, with the x-axis in blue, y-axis in green and reflected point in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSFORMING TRIANGLES ON A COORDINATE PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'transforming-triangles',
      title: 'Transforming Triangles on a Coordinate Plane',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We perform transformations with <strong>triangles</strong> on a coordinate plane, focusing on the coordinates of the vertices when reflecting in the ${bl('x-axis')} or ${gr('y-axis')}, translating within and across quadrants, and rotating around the origin.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original triangle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('transformed triangle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rotation / reflection rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Transformation rules for vertices</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reflect in the ${bl('x-axis')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (x, −y)')} — apply to each vertex.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reflect in the ${gr('y-axis')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (−x, y)')} — apply to each vertex.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('90° clockwise rotation')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('(x, y) → (y, −x)')} — apply to each vertex.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;"><span style="color:#7c3aed;font-weight:700">180° rotation</span></p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><span style="color:#7c3aed;font-weight:700">(x, y) → (−x, −y)</span> — apply to each vertex.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Congruence after transformation</p>` +
        `<p style="margin:0;color:#1e3a8a;">Reflection, translation and rotation all produce a <strong>congruent</strong> image — the size and shape remain the same, only the position or orientation changes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has vertices (1, 2), (3, 2), (2, 5). Reflect it in the y-axis.',
          answer: `The reflected vertices are ${gr('(−1, 2), (−3, 2), (−2, 5)')}`,
          steps: [
            `Reflecting in the ${gr('y-axis')} uses the rule ${or('(x, y) → (−x, y)')}.`,
            `Apply to each vertex of the ${bl('original triangle')}:`,
            `${bl('(1, 2)')} → ${gr('(−1, 2)')}.`,
            `${bl('(3, 2)')} → ${gr('(−3, 2)')}.`,
            `${bl('(2, 5)')} → ${gr('(−2, 5)')}.`,
            `<strong>Answer:</strong> Reflected triangle: ${gr('(−1, 2), (−3, 2), (−2, 5)')}. See the diagram below showing the original and reflected triangle.`,
          ],
        },
        {
          question: 'Sipho rotates a triangle with vertex (4, 1) by 90° clockwise around the origin using the rule (x, y) → (y, −x). Find the new vertex.',
          answer: `The new vertex is ${gr('(1, −4)')}`,
          steps: [
            `The ${or('90° clockwise rotation rule')} is: ${or('(x, y) → (y, −x)')}.`,
            `Apply to the vertex ${bl('(4, 1)')}: new x = 1, new y = −4.`,
            `<strong>Answer:</strong> New vertex = ${gr('(1, −4)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium — reflect triangle in x-axis ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangle has vertices (2, 3), (4, 3), (3, 6). Reflect it in the x-axis.',
          answer: '(2, −3), (4, −3), (3, −6)',
          checkMode: 'auto',
          correctAnswer: '(2,-3),(4,-3),(3,-6)',
          correctAnswers: ['(2,-3),(4,-3),(3,-6)', '(2, -3),(4, -3),(3, -6)', '(2, -3), (4, -3), (3, -6)', '(2,−3),(4,−3),(3,−6)', '(2, −3), (4, −3), (3, −6)'],
          explanation: 'Reflecting in the x-axis: (x, y) → (x, −y). Apply to each vertex: (2,3)→(2,−3), (4,3)→(4,−3), (3,6)→(3,−6).',
        },

        // ── Q6 Hard — rotate point 90° clockwise ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato rotates the point (5, 2) by 90° clockwise around the origin using (x, y) → (y, −x). Find the new point.',
          answer: 'New point = (2, −5).',
          checkMode: 'self',
        },

        // ── Q7 Medium — rotate point 180° ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Rotate the point (−3, 4) by 180° around the origin using (x, y) → (−x, −y).',
          answer: '(3, −4)',
          checkMode: 'auto',
          correctAnswer: '(3,-4)',
          correctAnswers: ['(3,-4)', '(3, -4)', '(3,−4)', '(3, −4)'],
          explanation: 'Apply (x, y) → (−x, −y): (−3, 4) → (3, −4).',
        },

        // ── Q8 Hard — reflection preserves size and shape ────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says reflecting a triangle in the y-axis keeps its size and shape the same. Is he correct? Explain.',
          answer: 'Yes — reflection only changes orientation, not size or shape; the triangle remains congruent.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A triangle with vertices (1,2),(3,2),(2,5) and its reflection in the y-axis shown side by side on a Cartesian plane" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect and rotate triangles on a coordinate plane with original triangle in blue and transformed triangle in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ENLARGEMENTS AND REDUCTIONS USING PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargements-reductions-proportion',
      title: 'Enlargements and Reductions Using Proportion',
      icon: '⬛',
      explanation:
        `<p style="margin-bottom:16px;">We use <strong>proportion</strong> to describe the effect of enlargement or reduction on the area and perimeter of geometric figures. If a shape is enlarged by a ${or('scale factor k')}, the ${bl('perimeter')} is multiplied by ${or('k')} and the ${gr('area')} is multiplied by ${or('k²')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('perimeter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Scale factor rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Enlargement (${or('k > 1')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The image is bigger than the original.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">New ${bl('perimeter')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">New ${bl('perimeter')} = original ${bl('perimeter')} × ${or('k')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">New ${gr('area')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">New ${gr('area')} = original ${gr('area')} × ${or('k²')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reduction (${or('0 < k < 1')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The image is smaller than the original.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common mistake</p>` +
        `<p style="margin:0;color:#991b1b;">Students often multiply the ${gr('area')} by ${or('k')} instead of ${or('k²')}. Remember: ${bl('perimeter')} scales by ${or('k')}, but ${gr('area')} scales by ${or('k²')} because area is two-dimensional.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle with perimeter 20 cm is enlarged by a scale factor of 3. Find the new perimeter.',
          answer: `New ${bl('perimeter')} = ${bl('60 cm')}`,
          steps: [
            `The ${bl('perimeter')} scales by the ${or('scale factor k')}: new ${bl('perimeter')} = original ${bl('perimeter')} × ${or('k')}.`,
            `New ${bl('perimeter')} = ${bl('20')} × ${or('3')} = ${bl('60 cm')}.`,
            `<strong>Answer:</strong> New ${bl('perimeter')} = ${bl('60 cm')}.`,
          ],
        },
        {
          question: 'A square with area 16 cm² is enlarged by a scale factor of 2. Find the new area.',
          answer: `New ${gr('area')} = ${gr('64 cm²')}`,
          steps: [
            `The ${gr('area')} scales by ${or('k²')}: new ${gr('area')} = original ${gr('area')} × ${or('k²')}.`,
            `New ${gr('area')} = ${gr('16')} × ${or('2²')} = ${gr('16')} × ${or('4')} = ${gr('64 cm²')}.`,
            `<strong>Answer:</strong> New ${gr('area')} = ${gr('64 cm²')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — enlarge perimeter ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: "A rectangle's perimeter is 24 cm. It is enlarged by a scale factor of 2. Find the new perimeter.",
          answer: '48 cm',
          checkMode: 'auto',
          correctAnswer: '48cm',
          correctAnswers: ['48cm', '48 cm'],
          explanation: 'New perimeter = 24 × 2 = 48 cm.',
        },

        // ── Q10 Medium — enlarge area ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A square has an area of 9 cm². It is enlarged by a scale factor of 3. Find the new area.',
          answer: '81 cm²',
          checkMode: 'auto',
          correctAnswer: '81cm²',
          correctAnswers: ['81cm²', '81 cm²', '81cm2', '81 cm2'],
          explanation: 'New area = 9 × 3² = 9 × 9 = 81 cm².',
        },

        // ── Q11 Hard — scale factor misconception ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says enlarging a shape by a scale factor of 4 multiplies its perimeter by 4 and its area by 4 too. Is she correct? Explain.',
          answer: 'No — the perimeter is multiplied by 4, but the area is multiplied by 4² = 16, not 4.',
          checkMode: 'self',
        },

        // ── Q12 Medium — translate triangle vertices ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangle with vertices (1, 1), (3, 1), (2, 4) is translated by 2 right and 3 up. Find the new vertices.',
          answer: '(3, 4), (5, 4), (4, 7)',
          checkMode: 'auto',
          correctAnswer: '(3,4),(5,4),(4,7)',
          correctAnswers: ['(3,4),(5,4),(4,7)', '(3, 4),(5, 4),(4, 7)', '(3, 4), (5, 4), (4, 7)'],
          explanation: 'Add 2 to each x and 3 to each y: (1+2, 1+3)=(3,4), (3+2, 1+3)=(5,4), (2+2, 4+3)=(4,7).',
        },

        // ── Q13 Hard — reduce area using scale factor ────────────────────────
        {
          difficulty: 'Hard',
          question: 'A shape with area 25 cm² is reduced by a scale factor of ¹⁄₅. Find the new area.',
          answer: 'New area = 25 × (1/5)² = 25 × 1/25 = 1 cm².',
          checkMode: 'self',
        },

        // ── Q14 Hard — rotate point 90° anticlockwise ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho rotates the point (0, 6) by 90° anticlockwise around the origin using (x, y) → (−y, x). Find the new point.',
          answer: '(−6, 0)',
          checkMode: 'auto',
          correctAnswer: '(-6,0)',
          correctAnswers: ['(-6,0)', '(-6, 0)', '(−6,0)', '(−6, 0)'],
          explanation: 'Apply (x, y) → (−y, x): (0, 6) → (−6, 0).',
        },

        // ── Q15 Hard — enlarge rectangle perimeter and area ──────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangle has a perimeter of 30 cm and an area of 50 cm². It is enlarged by a scale factor of 2. Find the new perimeter and new area.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) New perimeter',
              correctAnswer: '60cm',
              correctAnswers: ['60cm', '60 cm'],
              explanation: 'New perimeter = 30 × 2 = 60 cm.',
            },
            {
              label: 'b) New area',
              correctAnswer: '200cm²',
              correctAnswers: ['200cm²', '200 cm²', '200cm2', '200 cm2'],
              explanation: 'New area = 50 × 2² = 50 × 4 = 200 cm².',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A small square and a larger square showing an enlargement by scale factor 2, with side lengths and areas labelled on each" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate new perimeter and area after enlargement or reduction using a scale factor, with scale factor in orange, perimeter in blue and area in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered transformation geometry.' },
    { minScore: 12, message: 'Great work! You have a strong understanding of transformation geometry. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort! Review the sections where you dropped marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again section by section, then reattempt the questions.' },
  ],
}
