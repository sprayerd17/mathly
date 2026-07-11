import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block A — Naming/describing transformations (Q1-3) ────────────────
        { difficulty: 'Easy', question: 'A figure is flipped over a line so that the image is a mirror image of the object. What type of transformation is this?', answer: 'reflection', checkMode: 'auto', correctAnswer: 'reflection', correctAnswers: ['reflection', 'a reflection'], explanation: 'Flipping a figure over a line so the image is a mirror image of the object is called a reflection.' },
        { difficulty: 'Easy', question: 'A figure is slid to a new position without turning, flipping or changing size. What type of transformation is this?', answer: 'translation', checkMode: 'auto', correctAnswer: 'translation', correctAnswers: ['translation', 'a translation'], explanation: 'Sliding a figure to a new position, in a straight line, without turning or flipping it, is called a translation.' },
        { difficulty: 'Medium', question: 'Triangle A has vertices (1, 1), (5, 1), (1, 4). Triangle B has vertices (3, 3), (7, 3), (3, 6). Describe the single transformation that maps triangle A onto triangle B.', answer: 'Translation by (2, 2)', checkMode: 'auto', correctAnswer: 'Translation by (2, 2)', correctAnswers: ['Translation by (2, 2)', 'translation (2,2)', 'translation of (2,2)', 'translate by (2,2)', '(2, 2)', '(2,2)'], explanation: 'Compare matching vertices: (1,1)→(3,3) is +2 in x, +2 in y. (5,1)→(7,3) is the same shift. (1,4)→(3,6) is the same shift again.\nEvery point moves the same distance in the same direction and the shape does not flip or turn, so this is a translation by (2, 2) ✓' },

        // ── Block B — Reflection with coordinates (Q4-7) ──────────────────────
        { difficulty: 'Easy', question: 'Point P is at (6, 9). It is reflected in the x-axis, as shown. Find the coordinates of the image P\'.', answer: '(6, -9)', checkMode: 'auto', correctAnswer: '(6, -9)', correctAnswers: ['(6, -9)', '(6,-9)', '(6, −9)', '(6,−9)'], explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nP(6, 9) → P\'(6, −9) ✓' },
        { difficulty: 'Easy-Medium', question: 'Point Q is at (−4, 7). It is reflected in the y-axis, as shown. Find the coordinates of the image Q\'.', answer: '(4, 7)', checkMode: 'auto', correctAnswer: '(4, 7)', correctAnswers: ['(4, 7)', '(4,7)'], explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nQ(−4, 7) → Q\'(4, 7) ✓' },
        { difficulty: 'Medium', question: 'Point R is at (3, 8). It is reflected over the vertical line x = 6, as shown. Find the coordinates of the image R\'.', answer: '(9, 8)', checkMode: 'auto', correctAnswer: '(9, 8)', correctAnswers: ['(9, 8)', '(9,8)'], explanation: 'Mirror line x = 6. Distance from R to the line: 6 − 3 = 3 units.\nImage is 3 units on the other side: 6 + 3 = 9.\nThe y-coordinate stays the same.\nR\' = (9, 8) ✓' },
        { difficulty: 'Medium-Hard', question: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(4, 5), as shown. It is reflected in the y-axis. Find the coordinates of the image A\'B\'C\'.', answer: "A'(-1,2) B'(-4,2) C'(-4,5)", checkMode: 'auto', correctAnswer: "A'(-1,2) B'(-4,2) C'(-4,5)", correctAnswers: ["A'(-1,2) B'(-4,2) C'(-4,5)", "A'(-1, 2) B'(-4, 2) C'(-4, 5)", "A'(−1,2) B'(−4,2) C'(−4,5)"], explanation: "Reflecting in the y-axis: (x, y) → (−x, y).\nA(1, 2) → A'(−1, 2).\nB(4, 2) → B'(−4, 2).\nC(4, 5) → C'(−4, 5). ✓" },

        // ── Block C — Translation with coordinates (Q8-10) ────────────────────
        { difficulty: 'Easy', question: 'Point A is at (−3, 5). It is translated 6 units right and 2 units down, as shown. Find the new coordinates of A\'.', answer: '(3, 3)', checkMode: 'auto', correctAnswer: '(3, 3)', correctAnswers: ['(3, 3)', '(3,3)'], explanation: 'Translation of (6, −2): (x, y) → (x + 6, y − 2).\nA(−3, 5) → A\'(−3 + 6, 5 − 2) = (3, 3) ✓' },
        { difficulty: 'Medium', question: 'Triangle ABC has vertices A(2, 1), B(5, 1), C(2, 4), as shown. It is translated by (−4, 3). Find the coordinates of the image A\'B\'C\'.', answer: "A'(-2,4) B'(1,4) C'(-2,7)", checkMode: 'auto', correctAnswer: "A'(-2,4) B'(1,4) C'(-2,7)", correctAnswers: ["A'(-2,4) B'(1,4) C'(-2,7)", "A'(-2, 4) B'(1, 4) C'(-2, 7)", "A'(−2,4) B'(1,4) C'(−2,7)"], explanation: "Translation of (−4, 3): (x, y) → (x − 4, y + 3).\nA(2, 1) → A'(−2, 4).\nB(5, 1) → B'(1, 4).\nC(2, 4) → C'(−2, 7). ✓" },
        { difficulty: 'Hard', question: 'A student translates the point (−6, 4) by (5, −3) and writes the image as (11, 1). Is this correct? If not, find the correct image.', answer: 'No, the correct image is (-1, 1).', checkMode: 'auto', correctAnswer: '(-1, 1)', correctAnswers: ['(-1, 1)', '(-1,1)', 'No, (-1,1)', 'No, the correct image is (-1, 1).'], explanation: 'Correct rule: (x, y) → (x + 5, y − 3).\n(−6, 4) → (−6 + 5, 4 − 3) = (−1, 1).\nThe student added the x-values together as if the translation only affected the digits, instead of applying +5 to −6. The correct image is (−1, 1) ✓' },

        // ── Block D — Rotation about the origin (Q11-14) ───────────────────────
        { difficulty: 'Easy', question: 'Point A is at (5, 3). It is rotated 90° clockwise about the origin, as shown. Use the rule (x, y) → (y, −x) to find the image A\'.', answer: '(3, -5)', checkMode: 'auto', correctAnswer: '(3, -5)', correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'], explanation: 'Rule: (x, y) → (y, −x).\nA(5, 3) → A\'(3, −5) ✓' },
        { difficulty: 'Medium', question: 'Point B is at (−2, 6). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.', answer: '(2, -6)', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', '(2, −6)', '(2,−6)'], explanation: 'Rule: (x, y) → (−x, −y).\nB(−2, 6) → B\'(2, −6) ✓' },
        { difficulty: 'Medium-Hard', question: 'Point C is at (4, −1). It is rotated 90° anticlockwise about the origin, as shown. Use the rule (x, y) → (−y, x) to find the image C\'.', answer: '(1, 4)', checkMode: 'auto', correctAnswer: '(1, 4)', correctAnswers: ['(1, 4)', '(1,4)'], explanation: 'Rule: (x, y) → (−y, x).\nC(4, −1) → C\'(1, 4) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(1, 1), B(4, 1), C(4, 3), as shown. It is rotated 90° clockwise about the origin. Find the coordinates of the image A\'B\'C\'.', answer: "A'(1,-1) B'(1,-4) C'(3,-4)", checkMode: 'auto', correctAnswer: "A'(1,-1) B'(1,-4) C'(3,-4)", correctAnswers: ["A'(1,-1) B'(1,-4) C'(3,-4)", "A'(1, -1) B'(1, -4) C'(3, -4)", "A'(1,−1) B'(1,−4) C'(3,−4)"], explanation: "Rule for 90° clockwise: (x, y) → (y, −x).\nA(1, 1) → A'(1, −1).\nB(4, 1) → B'(1, −4).\nC(4, 3) → C'(3, −4). ✓" },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ─────────
        { difficulty: 'Medium', question: 'Point P is at (2, 3). It is enlarged by scale factor 3 from the origin, as shown. Find the coordinates of the image P\'.', answer: '(6, 9)', checkMode: 'auto', correctAnswer: '(6, 9)', correctAnswers: ['(6, 9)', '(6,9)'], explanation: 'Enlargement from the origin by scale factor 3: (x, y) → (3x, 3y).\nP(2, 3) → P\'(3×2, 3×3) = (6, 9) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(1, 1), B(3, 1), C(1, 3), as shown. It is enlarged by scale factor 2 from the centre (1, 1). Find the coordinates of the image A\'B\'C\'.', answer: "A'(1,1) B'(5,1) C'(1,5)", checkMode: 'auto', correctAnswer: "A'(1,1) B'(5,1) C'(1,5)", correctAnswers: ["A'(1,1) B'(5,1) C'(1,5)", "A'(1, 1) B'(5, 1) C'(1, 5)"], explanation: "Rule for enlargement from centre (1, 1) with scale factor 2: (x, y) → (1 + 2(x−1), 1 + 2(y−1)).\nA(1, 1) → A'(1 + 2(0), 1 + 2(0)) = (1, 1) (the centre maps to itself).\nB(3, 1) → B'(1 + 2(2), 1 + 2(0)) = (5, 1).\nC(1, 3) → C'(1 + 2(0), 1 + 2(2)) = (1, 5). ✓" },
        { difficulty: 'Hard', question: 'Point P is at (8, 6). It is reduced by scale factor ½ from the origin, as shown. Find the coordinates of the image P\'.', answer: '(4, 3)', checkMode: 'auto', correctAnswer: '(4, 3)', correctAnswers: ['(4, 3)', '(4,3)'], explanation: 'Reduction from the origin by scale factor ½: (x, y) → (½x, ½y).\nP(8, 6) → P\'(½×8, ½×6) = (4, 3) ✓' },

        // ── Block F — Combined transformations & congruency/similarity (Q18-20) ─
        { difficulty: 'Hard', question: 'Point P is at (2, 3). First translate it by (3, 1), then reflect the resulting image in the x-axis. Find the final coordinates.', answer: '(5, -4)', checkMode: 'auto', correctAnswer: '(5, -4)', correctAnswers: ['(5, -4)', '(5,-4)', '(5, −4)', '(5,−4)'], explanation: 'Step 1 — translate by (3, 1): (2, 3) → (2+3, 3+1) = (5, 4).\nStep 2 — reflect (5, 4) in the x-axis: (x, y) → (x, −y), giving (5, −4).\nFinal image = (5, −4) ✓' },
        { difficulty: 'Hard', question: 'Point A is at (1, 2). It is first reflected in the y-axis, and then the resulting image is rotated 180° about the origin. Describe a single transformation that has the same overall effect, and give the final coordinates.', answer: 'Reflection in the x-axis; final point (1, -2)', checkMode: 'self', correctAnswer: 'Reflection in the x-axis; final point (1, -2)' },
        { difficulty: 'Hard', question: 'Triangle A has vertices (1, 1), (4, 1), (1, 3). It is enlarged by scale factor 2 from the origin to form triangle B. Explain whether triangle B is congruent or similar to triangle A, and give a reason.', answer: 'Similar, not congruent — enlargement changes the size of the triangle (all sides become 2 times as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.', checkMode: 'self', correctAnswer: 'Similar, not congruent — enlargement changes the size of the triangle (all sides become 2 times as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered transformation geometry across every skill in this set.' },
        { minScore: 13, message: 'Great work! You are confident with reflections, translations, rotations and enlargements — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block A — Naming/describing transformations (Q1-3) ────────────────
        { difficulty: 'Easy', question: 'A figure is made bigger or smaller by a scale factor, from a fixed centre point, while keeping the same shape. What type of transformation is this?', answer: 'enlargement', checkMode: 'auto', correctAnswer: 'enlargement', correctAnswers: ['enlargement', 'an enlargement', 'enlargement/reduction'], explanation: 'Changing the size of a figure from a fixed centre point using a scale factor, while keeping the same shape, is called an enlargement. If the scale factor is less than 1, it is still classified as an enlargement (sometimes called a reduction).' },
        { difficulty: 'Easy', question: 'A figure is turned about a fixed centre point through a given angle, without changing its size or shape. What type of transformation is this?', answer: 'rotation', checkMode: 'auto', correctAnswer: 'rotation', correctAnswers: ['rotation', 'a rotation'], explanation: 'Turning a figure about a fixed centre point through an angle, without changing its size or shape, is called a rotation.' },
        { difficulty: 'Medium', question: 'Triangle A has vertices (2, 2), (6, 2), (2, 5). Triangle B has vertices (0, 5), (4, 5), (0, 8). Describe the single transformation that maps triangle A onto triangle B.', answer: 'Translation by (-2, 3)', checkMode: 'auto', correctAnswer: 'Translation by (-2, 3)', correctAnswers: ['Translation by (-2, 3)', 'translation (-2,3)', 'translation of (-2,3)', 'translate by (-2,3)', '(-2, 3)', '(-2,3)'], explanation: 'Compare matching vertices: (2,2)→(0,5) is −2 in x, +3 in y. (6,2)→(4,5) is the same shift. (2,5)→(0,8) is the same shift again.\nEvery point moves the same distance in the same direction and the shape does not flip or turn, so this is a translation by (−2, 3) ✓' },

        // ── Block B — Reflection with coordinates (Q4-7) ──────────────────────
        { difficulty: 'Easy', question: 'Point P is at (5, 8). It is reflected in the x-axis, as shown. Find the coordinates of the image P\'.', answer: '(5, -8)', checkMode: 'auto', correctAnswer: '(5, -8)', correctAnswers: ['(5, -8)', '(5,-8)', '(5, −8)', '(5,−8)'], explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nP(5, 8) → P\'(5, −8) ✓' },
        { difficulty: 'Easy-Medium', question: 'Point Q is at (−6, 3). It is reflected in the y-axis, as shown. Find the coordinates of the image Q\'.', answer: '(6, 3)', checkMode: 'auto', correctAnswer: '(6, 3)', correctAnswers: ['(6, 3)', '(6,3)'], explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nQ(−6, 3) → Q\'(6, 3) ✓' },
        { difficulty: 'Medium', question: 'Point R is at (9, 4). It is reflected over the vertical line x = 7, as shown. Find the coordinates of the image R\'.', answer: '(5, 4)', checkMode: 'auto', correctAnswer: '(5, 4)', correctAnswers: ['(5, 4)', '(5,4)'], explanation: 'Mirror line x = 7. Distance from R to the line: 9 − 7 = 2 units.\nImage is 2 units on the other side: 7 − 2 = 5.\nThe y-coordinate stays the same.\nR\' = (5, 4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Triangle ABC has vertices A(2, 3), B(5, 3), C(5, 6), as shown. It is reflected in the x-axis. Find the coordinates of the image A\'B\'C\'.', answer: "A'(2,-3) B'(5,-3) C'(5,-6)", checkMode: 'auto', correctAnswer: "A'(2,-3) B'(5,-3) C'(5,-6)", correctAnswers: ["A'(2,-3) B'(5,-3) C'(5,-6)", "A'(2, -3) B'(5, -3) C'(5, -6)", "A'(2,−3) B'(5,−3) C'(5,−6)"], explanation: "Reflecting in the x-axis: (x, y) → (x, −y).\nA(2, 3) → A'(2, −3).\nB(5, 3) → B'(5, −3).\nC(5, 6) → C'(5, −6). ✓" },

        // ── Block C — Translation with coordinates (Q8-10) ────────────────────
        { difficulty: 'Easy', question: 'Point A is at (4, −6). It is translated 5 units left and 3 units up, as shown. Find the new coordinates of A\'.', answer: '(-1, -3)', checkMode: 'auto', correctAnswer: '(-1, -3)', correctAnswers: ['(-1, -3)', '(-1,-3)', '(−1, −3)', '(−1,−3)'], explanation: 'Translation of (−5, 3): (x, y) → (x − 5, y + 3).\nA(4, −6) → A\'(4 − 5, −6 + 3) = (−1, −3) ✓' },
        { difficulty: 'Medium', question: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(1, 5), as shown. It is translated by (3, −4). Find the coordinates of the image A\'B\'C\'.', answer: "A'(4,-2) B'(7,-2) C'(4,1)", checkMode: 'auto', correctAnswer: "A'(4,-2) B'(7,-2) C'(4,1)", correctAnswers: ["A'(4,-2) B'(7,-2) C'(4,1)", "A'(4, -2) B'(7, -2) C'(4, 1)", "A'(4,−2) B'(7,−2) C'(4,1)"], explanation: "Translation of (3, −4): (x, y) → (x + 3, y − 4).\nA(1, 2) → A'(4, −2).\nB(4, 2) → B'(7, −2).\nC(1, 5) → C'(4, 1). ✓" },
        { difficulty: 'Hard', question: 'A student translates the point (7, −5) by (−2, 6) and writes the image as (9, −11). Is this correct? If not, find the correct image.', answer: 'No, the correct image is (5, 1).', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', 'No, (5,1)', 'No, the correct image is (5, 1).'], explanation: 'Correct rule: (x, y) → (x + (−2), y + 6).\n(7, −5) → (7 − 2, −5 + 6) = (5, 1).\nThe student subtracted where they should have added and vice versa. The correct image is (5, 1) ✓' },

        // ── Block D — Rotation about the origin (Q11-14) ───────────────────────
        { difficulty: 'Easy', question: 'Point A is at (6, 2). It is rotated 90° clockwise about the origin, as shown. Use the rule (x, y) → (y, −x) to find the image A\'.', answer: '(2, -6)', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', '(2, −6)', '(2,−6)'], explanation: 'Rule: (x, y) → (y, −x).\nA(6, 2) → A\'(2, −6) ✓' },
        { difficulty: 'Medium', question: 'Point B is at (4, −5). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.', answer: '(-4, 5)', checkMode: 'auto', correctAnswer: '(-4, 5)', correctAnswers: ['(-4, 5)', '(-4,5)', '(−4, 5)', '(−4,5)'], explanation: 'Rule: (x, y) → (−x, −y).\nB(4, −5) → B\'(−4, 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Point C is at (−3, 5). It is rotated 90° anticlockwise about the origin, as shown. Use the rule (x, y) → (−y, x) to find the image C\'.', answer: '(-5, -3)', checkMode: 'auto', correctAnswer: '(-5, -3)', correctAnswers: ['(-5, -3)', '(-5,-3)', '(−5, −3)', '(−5,−3)'], explanation: 'Rule: (x, y) → (−y, x).\nC(−3, 5) → C\'(−5, −3) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(2, 1), B(5, 1), C(5, 4), as shown. It is rotated 90° clockwise about the origin. Find the coordinates of the image A\'B\'C\'.', answer: "A'(1,-2) B'(1,-5) C'(4,-5)", checkMode: 'auto', correctAnswer: "A'(1,-2) B'(1,-5) C'(4,-5)", correctAnswers: ["A'(1,-2) B'(1,-5) C'(4,-5)", "A'(1, -2) B'(1, -5) C'(4, -5)", "A'(1,−2) B'(1,−5) C'(4,−5)"], explanation: "Rule for 90° clockwise: (x, y) → (y, −x).\nA(2, 1) → A'(1, −2).\nB(5, 1) → B'(1, −5).\nC(5, 4) → C'(4, −5). ✓" },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ─────────
        { difficulty: 'Medium', question: 'Point P is at (3, 4). It is enlarged by scale factor 2 from the origin, as shown. Find the coordinates of the image P\'.', answer: '(6, 8)', checkMode: 'auto', correctAnswer: '(6, 8)', correctAnswers: ['(6, 8)', '(6,8)'], explanation: 'Enlargement from the origin by scale factor 2: (x, y) → (2x, 2y).\nP(3, 4) → P\'(2×3, 2×4) = (6, 8) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(2, 2), B(4, 2), C(2, 4), as shown. It is enlarged by scale factor 3 from the centre (2, 2). Find the coordinates of the image A\'B\'C\'.', answer: "A'(2,2) B'(8,2) C'(2,8)", checkMode: 'auto', correctAnswer: "A'(2,2) B'(8,2) C'(2,8)", correctAnswers: ["A'(2,2) B'(8,2) C'(2,8)", "A'(2, 2) B'(8, 2) C'(2, 8)"], explanation: "Rule for enlargement from centre (2, 2) with scale factor 3: (x, y) → (2 + 3(x−2), 2 + 3(y−2)).\nA(2, 2) → A'(2 + 3(0), 2 + 3(0)) = (2, 2) (the centre maps to itself).\nB(4, 2) → B'(2 + 3(2), 2 + 3(0)) = (8, 2).\nC(2, 4) → C'(2 + 3(0), 2 + 3(2)) = (2, 8). ✓" },
        { difficulty: 'Hard', question: 'Point P is at (12, 9). It is reduced by scale factor ⅓ from the origin, as shown. Find the coordinates of the image P\'.', answer: '(4, 3)', checkMode: 'auto', correctAnswer: '(4, 3)', correctAnswers: ['(4, 3)', '(4,3)'], explanation: 'Reduction from the origin by scale factor ⅓: (x, y) → (⅓x, ⅓y).\nP(12, 9) → P\'(⅓×12, ⅓×9) = (4, 3) ✓' },

        // ── Block F — Combined transformations & congruency/similarity (Q18-20) ─
        { difficulty: 'Hard', question: 'Point P is at (1, 4). First translate it by (4, −1), then reflect the resulting image in the y-axis. Find the final coordinates.', answer: '(-5, 3)', checkMode: 'auto', correctAnswer: '(-5, 3)', correctAnswers: ['(-5, 3)', '(-5,3)', '(−5, 3)', '(−5,3)'], explanation: 'Step 1 — translate by (4, −1): (1, 4) → (1+4, 4−1) = (5, 3).\nStep 2 — reflect (5, 3) in the y-axis: (x, y) → (−x, y), giving (−5, 3).\nFinal image = (−5, 3) ✓' },
        { difficulty: 'Hard', question: 'Point A is at (3, 1). It is first rotated 180° about the origin, and then the resulting image is reflected in the x-axis. Describe a single transformation that has the same overall effect, and give the final coordinates.', answer: 'Reflection in the y-axis; final point (-3, 1)', checkMode: 'self', correctAnswer: 'Reflection in the y-axis; final point (-3, 1)' },
        { difficulty: 'Hard', question: 'Triangle A has vertices (1, 1), (3, 1), (1, 4). It is reduced by scale factor ½ from the origin to form triangle B. Explain whether triangle B is congruent or similar to triangle A, and give a reason.', answer: 'Similar, not congruent — reduction changes the size of the triangle (all sides become half as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.', checkMode: 'self', correctAnswer: 'Similar, not congruent — reduction changes the size of the triangle (all sides become half as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered transformation geometry across every skill in this set.' },
        { minScore: 13, message: 'Great work! You are confident with reflections, translations, rotations and enlargements — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block A — Naming/describing transformations (Q1-3) ────────────────
        { difficulty: 'Easy', question: 'A figure is flipped over a line so that every point on the image is the same distance from the line as the matching point on the object. What type of transformation is this?', answer: 'reflection', checkMode: 'auto', correctAnswer: 'reflection', correctAnswers: ['reflection', 'a reflection'], explanation: 'Flipping a figure over a line, so the image is a mirror image the same distance from the line as the object, is called a reflection.' },
        { difficulty: 'Easy', question: 'A figure is turned about a fixed centre point by a given angle, in a given direction, without changing its size. What type of transformation is this?', answer: 'rotation', checkMode: 'auto', correctAnswer: 'rotation', correctAnswers: ['rotation', 'a rotation'], explanation: 'Turning a figure about a fixed centre point through a given angle, in a given direction, without changing its size or shape, is called a rotation.' },
        { difficulty: 'Medium', question: 'Triangle A has vertices (3, 1), (6, 1), (3, 4). Triangle B has vertices (1, 4), (4, 4), (1, 7). Describe the single transformation that maps triangle A onto triangle B.', answer: 'Translation by (-2, 3)', checkMode: 'auto', correctAnswer: 'Translation by (-2, 3)', correctAnswers: ['Translation by (-2, 3)', 'translation (-2,3)', 'translation of (-2,3)', 'translate by (-2,3)', '(-2, 3)', '(-2,3)'], explanation: 'Compare matching vertices: (3,1)→(1,4) is −2 in x, +3 in y. (6,1)→(4,4) is the same shift. (3,4)→(1,7) is the same shift again.\nEvery point moves the same distance in the same direction and the shape does not flip or turn, so this is a translation by (−2, 3) ✓' },

        // ── Block B — Reflection with coordinates (Q4-7) ──────────────────────
        { difficulty: 'Easy', question: 'Point P is at (7, 3). It is reflected in the x-axis, as shown. Find the coordinates of the image P\'.', answer: '(7, -3)', checkMode: 'auto', correctAnswer: '(7, -3)', correctAnswers: ['(7, -3)', '(7,-3)', '(7, −3)', '(7,−3)'], explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nP(7, 3) → P\'(7, −3) ✓' },
        { difficulty: 'Easy-Medium', question: 'Point Q is at (−5, 9). It is reflected in the y-axis, as shown. Find the coordinates of the image Q\'.', answer: '(5, 9)', checkMode: 'auto', correctAnswer: '(5, 9)', correctAnswers: ['(5, 9)', '(5,9)'], explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nQ(−5, 9) → Q\'(5, 9) ✓' },
        { difficulty: 'Medium', question: 'Point R is at (2, 5). It is reflected over the vertical line x = 8, as shown. Find the coordinates of the image R\'.', answer: '(14, 5)', checkMode: 'auto', correctAnswer: '(14, 5)', correctAnswers: ['(14, 5)', '(14,5)'], explanation: 'Mirror line x = 8. Distance from R to the line: 8 − 2 = 6 units.\nImage is 6 units on the other side: 8 + 6 = 14.\nThe y-coordinate stays the same.\nR\' = (14, 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Triangle ABC has vertices A(3, 2), B(6, 2), C(6, 5), as shown. It is reflected in the y-axis. Find the coordinates of the image A\'B\'C\'.', answer: "A'(-3,2) B'(-6,2) C'(-6,5)", checkMode: 'auto', correctAnswer: "A'(-3,2) B'(-6,2) C'(-6,5)", correctAnswers: ["A'(-3,2) B'(-6,2) C'(-6,5)", "A'(-3, 2) B'(-6, 2) C'(-6, 5)", "A'(−3,2) B'(−6,2) C'(−6,5)"], explanation: "Reflecting in the y-axis: (x, y) → (−x, y).\nA(3, 2) → A'(−3, 2).\nB(6, 2) → B'(−6, 2).\nC(6, 5) → C'(−6, 5). ✓" },

        // ── Block C — Translation with coordinates (Q8-10) ────────────────────
        { difficulty: 'Easy', question: 'Point A is at (−6, −2). It is translated 8 units right and 5 units up, as shown. Find the new coordinates of A\'.', answer: '(2, 3)', checkMode: 'auto', correctAnswer: '(2, 3)', correctAnswers: ['(2, 3)', '(2,3)'], explanation: 'Translation of (8, 5): (x, y) → (x + 8, y + 5).\nA(−6, −2) → A\'(−6 + 8, −2 + 5) = (2, 3) ✓' },
        { difficulty: 'Medium', question: 'Triangle ABC has vertices A(3, 1), B(6, 1), C(3, 3), as shown. It is translated by (−5, 2). Find the coordinates of the image A\'B\'C\'.', answer: "A'(-2,3) B'(1,3) C'(-2,5)", checkMode: 'auto', correctAnswer: "A'(-2,3) B'(1,3) C'(-2,5)", correctAnswers: ["A'(-2,3) B'(1,3) C'(-2,5)", "A'(-2, 3) B'(1, 3) C'(-2, 5)", "A'(−2,3) B'(1,3) C'(−2,5)"], explanation: "Translation of (−5, 2): (x, y) → (x − 5, y + 2).\nA(3, 1) → A'(−2, 3).\nB(6, 1) → B'(1, 3).\nC(3, 3) → C'(−2, 5). ✓" },
        { difficulty: 'Hard', question: 'A student translates the point (−1, −4) by (3, −2) and writes the image as (2, -2). Is this correct? If not, find the correct image.', answer: 'No, the correct image is (2, -6).', checkMode: 'auto', correctAnswer: '(2, -6)', correctAnswers: ['(2, -6)', '(2,-6)', 'No, (2,-6)', 'No, the correct image is (2, -6).'], explanation: 'Correct rule: (x, y) → (x + 3, y − 2).\n(−1, −4) → (−1 + 3, −4 − 2) = (2, −6).\nThe student found the correct x-coordinate but forgot to subtract 2 from the y-coordinate. The correct image is (2, −6) ✓' },

        // ── Block D — Rotation about the origin (Q11-14) ───────────────────────
        { difficulty: 'Easy', question: 'Point A is at (−4, 7). It is rotated 90° clockwise about the origin, as shown. Use the rule (x, y) → (y, −x) to find the image A\'.', answer: '(7, 4)', checkMode: 'auto', correctAnswer: '(7, 4)', correctAnswers: ['(7, 4)', '(7,4)'], explanation: 'Rule: (x, y) → (y, −x).\nA(−4, 7) → A\'(7, 4) ✓' },
        { difficulty: 'Medium', question: 'Point B is at (5, −3). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.', answer: '(-5, 3)', checkMode: 'auto', correctAnswer: '(-5, 3)', correctAnswers: ['(-5, 3)', '(-5,3)', '(−5, 3)', '(−5,3)'], explanation: 'Rule: (x, y) → (−x, −y).\nB(5, −3) → B\'(−5, 3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Point C is at (6, 2). It is rotated 90° anticlockwise about the origin, as shown. Use the rule (x, y) → (−y, x) to find the image C\'.', answer: '(-2, 6)', checkMode: 'auto', correctAnswer: '(-2, 6)', correctAnswers: ['(-2, 6)', '(-2,6)', '(−2, 6)', '(−2,6)'], explanation: 'Rule: (x, y) → (−y, x).\nC(6, 2) → C\'(−2, 6) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(1, 2), B(3, 2), C(3, 5), as shown. It is rotated 90° clockwise about the origin. Find the coordinates of the image A\'B\'C\'.', answer: "A'(2,-1) B'(2,-3) C'(5,-3)", checkMode: 'auto', correctAnswer: "A'(2,-1) B'(2,-3) C'(5,-3)", correctAnswers: ["A'(2,-1) B'(2,-3) C'(5,-3)", "A'(2, -1) B'(2, -3) C'(5, -3)", "A'(2,−1) B'(2,−3) C'(5,−3)"], explanation: "Rule for 90° clockwise: (x, y) → (y, −x).\nA(1, 2) → A'(2, −1).\nB(3, 2) → B'(2, −3).\nC(3, 5) → C'(5, −3). ✓" },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ─────────
        { difficulty: 'Medium', question: 'Point P is at (4, 1). It is enlarged by scale factor 4 from the origin, as shown. Find the coordinates of the image P\'.', answer: '(16, 4)', checkMode: 'auto', correctAnswer: '(16, 4)', correctAnswers: ['(16, 4)', '(16,4)'], explanation: 'Enlargement from the origin by scale factor 4: (x, y) → (4x, 4y).\nP(4, 1) → P\'(4×4, 4×1) = (16, 4) ✓' },
        { difficulty: 'Hard', question: 'Triangle ABC has vertices A(3, 3), B(5, 3), C(3, 5), as shown. It is enlarged by scale factor 2 from the centre (3, 3). Find the coordinates of the image A\'B\'C\'.', answer: "A'(3,3) B'(7,3) C'(3,7)", checkMode: 'auto', correctAnswer: "A'(3,3) B'(7,3) C'(3,7)", correctAnswers: ["A'(3,3) B'(7,3) C'(3,7)", "A'(3, 3) B'(7, 3) C'(3, 7)"], explanation: "Rule for enlargement from centre (3, 3) with scale factor 2: (x, y) → (3 + 2(x−3), 3 + 2(y−3)).\nA(3, 3) → A'(3 + 2(0), 3 + 2(0)) = (3, 3) (the centre maps to itself).\nB(5, 3) → B'(3 + 2(2), 3 + 2(0)) = (7, 3).\nC(3, 5) → C'(3 + 2(0), 3 + 2(2)) = (3, 7). ✓" },
        { difficulty: 'Hard', question: 'Point P is at (15, 6). It is reduced by scale factor ⅓ from the origin, as shown. Find the coordinates of the image P\'.', answer: '(5, 2)', checkMode: 'auto', correctAnswer: '(5, 2)', correctAnswers: ['(5, 2)', '(5,2)'], explanation: 'Reduction from the origin by scale factor ⅓: (x, y) → (⅓x, ⅓y).\nP(15, 6) → P\'(⅓×15, ⅓×6) = (5, 2) ✓' },

        // ── Block F — Combined transformations & congruency/similarity (Q18-20) ─
        { difficulty: 'Hard', question: 'Point P is at (4, 2). First translate it by (−1, 3), then reflect the resulting image in the x-axis. Find the final coordinates.', answer: '(3, -5)', checkMode: 'auto', correctAnswer: '(3, -5)', correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'], explanation: 'Step 1 — translate by (−1, 3): (4, 2) → (4−1, 2+3) = (3, 5).\nStep 2 — reflect (3, 5) in the x-axis: (x, y) → (x, −y), giving (3, −5).\nFinal image = (3, −5) ✓' },
        { difficulty: 'Hard', question: 'Point A is at (2, 5). It is first reflected in the x-axis, and then the resulting image is rotated 180° about the origin. Describe a single transformation that has the same overall effect, and give the final coordinates.', answer: 'Reflection in the y-axis; final point (-2, 5)', checkMode: 'self', correctAnswer: 'Reflection in the y-axis; final point (-2, 5)' },
        { difficulty: 'Hard', question: 'Triangle A has vertices (1, 1), (4, 1), (1, 2). It is enlarged by scale factor 3 from the origin to form triangle B. Explain whether triangle B is congruent or similar to triangle A, and give a reason.', answer: 'Similar, not congruent — enlargement changes the size of the triangle (all sides become 3 times as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.', checkMode: 'self', correctAnswer: 'Similar, not congruent — enlargement changes the size of the triangle (all sides become 3 times as long) while keeping the angles and shape the same, so the triangles are similar but not congruent.' },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Outstanding! You have mastered transformation geometry across every skill in this set.' },
        { minScore: 13, message: 'Great work! You are confident with reflections, translations, rotations and enlargements — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then retry this set.' },
      ],
    },
  ] satisfies PracticeSet[],
}
