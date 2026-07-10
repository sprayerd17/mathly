import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ─────────────────────────────────────────
// angle values              → orange  (#ea580c)
// equal sides               → blue    (#2563eb)
// triangle type / parallel sides → green   (#16a34a)
// sum of angles / shape names    → red     (#dc2626)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D Shapes',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROPERTIES OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-triangles',
      title: 'Properties of Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">A triangle is a 2D shape with <strong>3 sides</strong> and <strong>3 angles</strong>. The three angles of any triangle always add up to ${re('180°')}. We classify triangles in two ways — by their <strong>sides</strong> and by their <strong>angles</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angle values')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('equal sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('triangle type')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('sum of angles')}</span>` +
        `</div>` +

        // ── The 180° rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The angle sum rule</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">The three angles of <strong>any</strong> triangle always add up to ${re('180°')}. No matter what type of triangle it is, this rule never changes.</p>` +
        `</div>` +

        // ── Classification by sides ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Classification by sides</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Equilateral')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('3 equal sides')} and ${bl('3 equal angles')} of ${or('60°')} each.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Isosceles')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('2 equal sides')} and ${bl('2 equal angles')} (the angles opposite the equal sides).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${gr('Scalene')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">No equal sides and no equal angles.</p>` +
        `</div>` +

        `</div>` +

        // ── Classification by angles ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Classification by angles</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Acute')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All angles are less than ${or('90°')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Right-angled')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Has one angle of exactly ${or('90°')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${gr('Obtuse')} triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Has one angle greater than ${or('90°')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using both classifications together</p>` +
        `<p style="margin:0;color:#1e3a8a;">A triangle can be named using <strong>both</strong> a side classification and an angle classification. For example, a triangle can be an ${gr('acute isosceles')} triangle or a ${gr('right-angled scalene')} triangle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has angles of 45° and 75°. Find the third angle.',
          answer: `The third angle is ${or('60°')}`,
          steps: [
            `All angles in a triangle add up to ${re('180°')}.`,
            `Third angle = ${re('180')} − ${or('45')} − ${or('75')} = ${or('60°')}.`,
            `The third angle is ${or('60°')}.`,
          ],
        },
        {
          question: 'Classify this triangle — sides of 5 cm, 5 cm and 8 cm, angles of 66°, 66° and 48°.',
          answer: `It is an ${gr('acute isosceles')} triangle`,
          steps: [
            `By sides — ${bl('two sides are equal')} (5 cm and 5 cm), so it is ${gr('isosceles')}.`,
            `By angles — all angles (${or('66°')}, ${or('66°')}, ${or('48°')}) are less than ${or('90°')}, so it is ${gr('acute')}.`,
            `It is an ${gr('acute isosceles')} triangle.`,
          ],
        },
        {
          question: 'Sipho says a triangle can have two obtuse angles. Is he correct?',
          answer: `Sipho is incorrect`,
          steps: [
            `An obtuse angle is greater than ${or('90°')}.`,
            `Two obtuse angles would add up to more than ${re('180°')}.`,
            `But all three angles must add up to exactly ${re('180°')}.`,
            `If two angles already exceed ${re('180°')}, the third angle would be negative, which is impossible.`,
            `Sipho is incorrect.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — angle sum of a triangle ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What do the three angles of any triangle add up to?',
          answer: '180 degrees',
          checkMode: 'auto',
          correctAnswer: '180 degrees',
          correctAnswers: ['180 degrees', '180°', '180'],
          explanation: 'The three angles of any triangle always add up to 180°. This is called the angle sum property of triangles.',
        },

        // ── Q2 Easy — find the third angle ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A triangle has angles of 60° and 80°. What is the third angle?',
          answer: '40 degrees',
          checkMode: 'auto',
          correctAnswer: '40 degrees',
          correctAnswers: ['40 degrees', '40°', '40'],
          explanation: 'Sum of all angles = 180°.\nThird angle = 180 − 60 − 80 = 40°. ✓',
        },

        // ── Q3 Medium — classify a triangle by sides and angles ─────────────────
        {
          difficulty: 'Medium',
          question: 'Classify this triangle — all sides equal 7 cm and all angles equal 60°.',
          answer: 'equilateral triangle',
          checkMode: 'auto',
          correctAnswer: 'equilateral triangle',
          correctAnswers: ['equilateral triangle', 'equilateral'],
          explanation: 'All three sides are equal (7 cm each) and all three angles are equal (60° each). A triangle with 3 equal sides and 3 equal angles is an equilateral triangle. ✓',
        },

        // ── Q4 Medium — dual classification by angles and sides ─────────────────
        {
          difficulty: 'Medium',
          question: 'A triangle has angles of 90°, 45° and 45°. Classify it by its angles and by its sides.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Classify by its angles',
              correctAnswer: 'right-angled triangle',
              correctAnswers: ['right-angled triangle', 'right angled triangle', 'right-angle triangle'],
              explanation: 'One angle is exactly 90°. A triangle with one right angle is called a right-angled triangle. ✓',
            },
            {
              label: 'b) Classify by its sides',
              correctAnswer: 'isosceles triangle',
              correctAnswers: ['isosceles triangle', 'isosceles'],
              explanation: 'Two angles are equal (45° and 45°). The sides opposite the equal angles are also equal, making it an isosceles triangle. ✓',
            },
          ],
        },

        // ── Q5 Hard — can a right-angled triangle also be equilateral? ──────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a right-angled triangle can also be equilateral. Is he correct? Explain.',
          answer: 'No — an equilateral triangle has all angles equal to 60°. A right-angled triangle must have one angle of 90°. These two conditions cannot both be true at the same time.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="100%" style="max-width:520px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<polygon points="65,12 18,95 112,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="65" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Equilateral</text>` +
        `<polygon points="195,10 165,95 225,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="195" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Isosceles</text>` +
        `<polygon points="285,10 263,95 375,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<text x="319" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Scalene</text>` +
        `<polygon points="405,95 405,12 490,95" fill="rgba(30,64,175,0.12)" stroke="#0f1f3d" stroke-width="2" stroke-linejoin="round"/>` +
        `<path d="M405,83 L417,83 L417,95" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="447" y="113" text-anchor="middle" font-size="12" fill="#0f1f3d" font-weight="600">Right-angled</text>` +
        `</svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to classify triangles by their sides and angles and how to find a missing angle using the 180 degree rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROPERTIES OF QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-quadrilaterals',
      title: 'Properties of Quadrilaterals',
      icon: '□',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>quadrilateral</strong> is any 2D shape with <strong>4 sides</strong> and <strong>4 angles</strong>. The four angles of any quadrilateral always add up to ${re('360°')}. There are many types of quadrilaterals, each with different properties.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angle values')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('equal sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallel sides')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('shape names')}</span>` +
        `</div>` +

        // ── The 360° rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The angle sum rule</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">The four angles of <strong>any</strong> quadrilateral always add up to ${re('360°')}. No matter what type of quadrilateral it is, this rule never changes.</p>` +
        `</div>` +

        // ── Types of quadrilaterals ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of quadrilaterals</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Square')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('4 equal sides')} and ${or('4 right angles')} of ${or('90°')} each.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Rectangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Opposite sides equal')} and ${or('4 right angles')} of ${or('90°')} each.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Parallelogram')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Opposite sides equal')} and ${gr('parallel')}; opposite angles equal. No right angles.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Rhombus')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('4 equal sides')}; opposite angles equal but no right angles.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Trapezium')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly one pair of ${gr('parallel sides')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Kite')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two pairs of adjacent ${bl('equal sides')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Special relationships</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${re('square')} is a special ${re('rectangle')} (it has all the properties of a rectangle plus ${bl('equal sides')}). A ${re('rectangle')} is a special ${re('parallelogram')} (it has all the properties of a parallelogram plus ${or('right angles')}). A ${re('rhombus')} is a special ${re('parallelogram')} (it has all the properties of a parallelogram plus ${bl('4 equal sides')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A quadrilateral has angles of 85°, 110° and 95°. Find the fourth angle.',
          answer: `The fourth angle is ${or('70°')}`,
          steps: [
            `All angles in a quadrilateral add up to ${re('360°')}.`,
            `Fourth angle = ${re('360')} − ${or('85')} − ${or('110')} − ${or('95')} = ${or('70°')}.`,
          ],
        },
        {
          question: 'How is a parallelogram different from a rectangle?',
          answer: `A ${re('rectangle')} is a special type of ${re('parallelogram')} — it has ${or('right angles')} while a parallelogram does not`,
          steps: [
            `Both a ${re('rectangle')} and a ${re('parallelogram')} have ${bl('opposite sides that are equal')} and ${gr('parallel')}.`,
            `A ${re('rectangle')} has ${or('4 right angles')} of ${or('90°')} each.`,
            `A ${re('parallelogram')} does not have right angles — its angles can be any size as long as opposite angles are equal.`,
            `A ${re('rectangle')} is a special type of ${re('parallelogram')}.`,
          ],
        },
        {
          question: 'Lerato draws a quadrilateral with 4 equal sides but no right angles. What is it called?',
          answer: `It is a ${re('rhombus')}`,
          steps: [
            `${bl('Four equal sides')} — not a ${re('square')} because there are no right angles.`,
            `A ${re('rhombus')} has ${bl('4 equal sides')} and opposite angles equal but no right angles.`,
            `It is a ${re('rhombus')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — angle sum of a quadrilateral ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What do the four angles of any quadrilateral add up to?',
          answer: '360 degrees',
          checkMode: 'auto',
          correctAnswer: '360 degrees',
          correctAnswers: ['360 degrees', '360°', '360'],
          explanation: 'The four angles of any quadrilateral always add up to 360°. This is called the angle sum property of quadrilaterals.',
        },

        // ── Q7 Medium — find the fourth angle ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A quadrilateral has angles of 75°, 110° and 85°. Find the fourth angle.',
          answer: '90 degrees',
          checkMode: 'auto',
          correctAnswer: '90 degrees',
          correctAnswers: ['90 degrees', '90°', '90'],
          explanation: 'Sum of all angles = 360°.\nFourth angle = 360 − 75 − 110 − 85 = 90°. ✓',
        },

        // ── Q8 Medium — difference between a rhombus and a square ───────────────
        {
          difficulty: 'Medium',
          question: 'What is the difference between a rhombus and a square?',
          answer: 'Both have 4 equal sides but a square has 4 right angles of 90° and a rhombus does not have right angles — its angles are not 90°.',
          checkMode: 'self',
        },

        // ── Q9 Hard — identify a trapezium from its properties ──────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato draws a quadrilateral with one pair of parallel sides and no equal sides. What is it called?',
          answer: 'trapezium',
          checkMode: 'auto',
          correctAnswer: 'trapezium',
          correctAnswers: ['trapezium', 'a trapezium'],
          explanation: 'A quadrilateral with exactly one pair of parallel sides is a trapezium. Since there are no equal sides, it cannot be a parallelogram or isosceles trapezium. ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagrams showing six types of quadrilaterals — square, rectangle, parallelogram, rhombus, trapezium and kite — each labelled with equal sides in blue, parallel sides in green, and angle values in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the properties of different quadrilaterals and how to find a missing angle using the 360 degree rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ANGLES IN SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-shapes',
      title: 'Angles in Shapes',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">The angles inside a shape are called <strong>interior angles</strong>. The ${gr('sum of interior angles')} depends on the ${or('number of sides')}. We can find the sum using the ${bl('formula')}: ${bl('(number of sides − 2) × 180°')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('formula')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('number of sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sum of angles')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('each angle')}</span>` +
        `</div>` +

        // ── The formula ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The formula</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#1e40af;margin:0;">${bl('Sum of interior angles = (number of sides − 2) × 180°')}</p>` +
        `</div>` +

        // ── Interior angle sums ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Interior angle sums</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Triangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('3 sides')} → ${gr('180°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Quadrilateral</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 sides')} → ${gr('360°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Pentagon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('5 sides')} → ${gr('540°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hexagon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('6 sides')} → ${gr('720°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why does the formula work?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Any polygon can be split into triangles. A shape with ${or('n sides')} can be divided into ${or('(n − 2)')} triangles, and each triangle has angles adding up to ${gr('180°')}. So the total is ${bl('(n − 2) × 180°')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the sum of interior angles of a hexagon.',
          answer: `The sum of interior angles of a hexagon is ${gr('720°')}`,
          steps: [
            `Use the ${bl('formula')}: ${bl('(number of sides − 2) × 180°')}.`,
            `A hexagon has ${or('6 sides')}: ${bl('(6 − 2) × 180')} = ${bl('4 × 180')} = ${gr('720°')}.`,
            `The sum of interior angles of a hexagon is ${gr('720°')}.`,
          ],
        },
        {
          question: 'A regular pentagon has all equal angles. What is each angle?',
          answer: `Each angle of a regular pentagon is ${re('108°')}`,
          steps: [
            `Sum of interior angles of a pentagon: ${bl('(5 − 2) × 180')} = ${bl('3 × 180')} = ${gr('540°')}.`,
            `All ${or('5')} angles are equal: ${gr('540')} ÷ ${or('5')} = ${re('108°')}.`,
            `Each angle is ${re('108°')}.`,
          ],
        },
        {
          question: 'Amahle draws a quadrilateral with three angles of 80°, 95° and 120°. Find the fourth angle and name a quadrilateral it could be.',
          answer: `The fourth angle is ${re('65°')} and it could be a trapezium`,
          steps: [
            `A quadrilateral has ${or('4 sides')}, so the ${gr('sum of angles')} = ${gr('360°')}.`,
            `Fourth angle = ${gr('360')} − ${or('80')} − ${or('95')} − ${or('120')} = ${re('65°')}.`,
            `The angles are all different so it could be a trapezium.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium — interior angle sum of a pentagon ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the sum of interior angles of a pentagon.',
          answer: '540 degrees',
          checkMode: 'auto',
          correctAnswer: '540 degrees',
          correctAnswers: ['540 degrees', '540°', '540'],
          explanation: 'Use the formula: (number of sides − 2) × 180°.\nA pentagon has 5 sides: (5 − 2) × 180 = 3 × 180 = 540°. ✓',
        },

        // ── Q11 Medium — each angle of a regular hexagon ────────────────────────
        {
          difficulty: 'Medium',
          question: 'A regular hexagon has all equal angles. What is the size of each angle?',
          answer: '120 degrees',
          checkMode: 'auto',
          correctAnswer: '120 degrees',
          correctAnswers: ['120 degrees', '120°', '120'],
          explanation: 'Sum of interior angles of a hexagon: (6 − 2) × 180 = 4 × 180 = 720°.\nAll 6 angles are equal: 720 ÷ 6 = 120°. ✓',
        },

        // ── Q12 Hard — regular octagon sum and each angle ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle draws a regular octagon. Find the sum of its interior angles and the size of each angle.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Sum of interior angles',
              correctAnswer: '1080 degrees',
              correctAnswers: ['1080 degrees', '1080°', '1080'],
              explanation: 'Use the formula: (number of sides − 2) × 180°.\nAn octagon has 8 sides: (8 − 2) × 180 = 6 × 180 = 1080°. ✓',
            },
            {
              label: 'b) Size of each interior angle',
              correctAnswer: '135 degrees',
              correctAnswers: ['135 degrees', '135°', '135'],
              explanation: 'All 8 angles of a regular octagon are equal.\n1080 ÷ 8 = 135°. ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagrams showing a triangle, quadrilateral, pentagon and hexagon with their interior angles labelled in red and the angle sum shown in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to find the sum of interior angles using the formula (number of sides minus 2) times 180 degrees with worked examples" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered 2D shapes.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of 2D shapes.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered the properties of triangles. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of 2D shapes. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Triangle angle sum (180°) | 4-8 Classifying triangles by
    // sides/angles | 9-11 Quadrilateral angle sum (360°) | 12-15 Special
    // quadrilaterals | 16-19 Polygon interior angle sum formula
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has angles of 52° and 67°, as shown. What is the size of the third angle?', answer: '61 degrees', checkMode: 'auto', correctAnswer: '61 degrees', correctAnswers: ['61 degrees', '61°', '61'], explanation: 'The three angles of a triangle add up to 180°.\nThird angle = 180 − 52 − 67 = 61°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 95,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">52°</text><path d="M 165,140 A 28,28 0 0 0 178,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="148" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">67°</text><path d="M 85,38 A 18,18 0 0 1 106,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="95" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A roof truss is built in the shape of a triangle, as shown. Two of its base angles measure 58° each. What is the size of the angle at the top of the truss?', answer: '64 degrees', checkMode: 'auto', correctAnswer: '64 degrees', correctAnswers: ['64 degrees', '64°', '64'], explanation: 'All three angles of the triangular truss add up to 180°.\nTop angle = 180 − 58 − 58 = 64°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 41,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">58°</text><path d="M 170,140 A 28,28 0 0 0 179,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">58°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'Karabo says a triangle can have angles of 100°, 90° and 30°, as shown. Is she correct? Explain.', answer: 'No — 100 + 90 + 30 = 220°, but the angles of any triangle must add up to exactly 180°, so this triangle is impossible.', checkMode: 'self', explanation: '100 + 90 + 30 = 220°. Since every triangle\'s angles must sum to exactly 180°, an angle set that adds up to 220° cannot form a real triangle. Karabo is incorrect.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 120,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">100°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="165" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><path d="M 109,38 A 18,18 0 0 1 131,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="120" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text></svg>' },
        { difficulty: 'Easy', question: 'A triangle has angles of 73° and 54°, as shown. Explain, in words, how you would find the third angle, and give its value.', answer: 'Add the two known angles together, then subtract the total from 180° because all three angles of a triangle must add up to 180°. 180 − 73 − 54 = 53°.', checkMode: 'self', explanation: 'Since every triangle\'s interior angles sum to 180°, the missing angle is found by subtracting the two known angles from 180°: 180 − 73 − 54 = 53°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 80,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 41,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">73°</text><path d="M 165,140 A 28,28 0 0 0 176,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="148" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">54°</text><path d="M 68,38 A 18,18 0 0 1 90,40" fill="none" stroke="#ea580c" stroke-width="2"/><text x="80" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 9 cm, 9 cm and 9 cm, as shown. Classify this triangle by its sides.', answer: 'equilateral triangle', checkMode: 'auto', correctAnswer: 'equilateral triangle', correctAnswers: ['equilateral triangle', 'equilateral'], explanation: 'All three sides are equal in length (9 cm each), so this is an equilateral triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="90" font-size="14" fill="#2563eb" font-weight="700">9 cm</text><text x="145" y="90" font-size="14" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has angles of 40°, 65° and 75°, as shown. Classify this triangle by its angles.', answer: 'acute triangle', checkMode: 'auto', correctAnswer: 'acute triangle', correctAnswers: ['acute triangle', 'acute'], explanation: 'All three angles (40°, 65°, 75°) are less than 90°, so this is an acute triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 130,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 44,112" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">40°</text><path d="M 170,140 A 28,28 0 0 0 176,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 119,38 A 18,18 0 0 1 141,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has two sides of 6 cm each, with angles of 90°, 45° and 45°, as shown. Give both its side classification and its angle classification.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Classify by sides', correctAnswer: 'isosceles', correctAnswers: ['isosceles', 'isosceles triangle'], explanation: 'Two sides are equal (6 cm and 6 cm), so it is isosceles. ✓' }, { label: 'b) Classify by angles', correctAnswer: 'right-angled', correctAnswers: ['right-angled', 'right angled', 'right-angled triangle', 'right angle'], explanation: 'One angle is exactly 90°, so it is right-angled. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 145,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 cm</text><text x="87" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 120,140 A 28,28 0 0 0 127,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="105" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 30,55 A 18,18 0 0 1 48,70" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="55" font-size="13" fill="#2563eb" font-weight="700">45°</text></svg>' },
        { difficulty: 'Medium', question: 'Tumi says a triangle with sides 4 cm, 4 cm and 9 cm is possible and would be isosceles. Is he correct? Explain.', answer: 'No — the two shorter sides (4 cm + 4 cm = 8 cm) must add up to more than the third side for a triangle to exist. Since 8 cm is less than 9 cm, this triangle cannot be formed at all.', checkMode: 'self', explanation: 'For any triangle, the sum of the two shorter sides must be greater than the longest side. Here 4 + 4 = 8, which is less than 9, so the three lengths cannot join up to close a triangle. Tumi\'s triangle is impossible, so it cannot be isosceles or any other type.' },
        { difficulty: 'Medium', question: 'Triangle A has sides 5 cm, 5 cm, 5 cm. Triangle B has sides 5 cm, 5 cm, 7 cm. State one property they share and one way they differ.', answer: 'Shared — both are isosceles (Triangle A has 2 equal sides as a special case of this, in fact 3). Different — Triangle A is equilateral with 3 equal sides and 3 equal 60° angles, while Triangle B is isosceles with only 2 equal sides and 2 equal angles.', checkMode: 'self', explanation: 'Triangle A (5, 5, 5) is equilateral, so all three sides and all three angles (60° each) are equal. Triangle B (5, 5, 7) has only two equal sides, making it isosceles but not equilateral. Since equilateral triangles always satisfy the isosceles condition (at least 2 equal sides), both triangles are technically isosceles, but only Triangle A is also equilateral.' },
        { difficulty: 'Medium', question: 'A road sign is shaped like a triangle with all three sides equal and all three angles equal. What type of triangle is the sign, classified by both sides and angles?', answer: 'equilateral and equiangular (acute) triangle', checkMode: 'auto', correctAnswer: 'equilateral acute', correctAnswers: ['equilateral acute', 'equilateral, acute', 'equilateral acute triangle', 'acute equilateral'], explanation: 'Equal sides means it is equilateral. An equilateral triangle always has three 60° angles, and since 60° is less than 90°, it is also acute. So the sign is an acute equilateral triangle.' },
        { difficulty: 'Easy-Medium', question: 'A quadrilateral has angles of 90°, 95° and 100°, as shown. Find the fourth angle.', answer: '75 degrees', checkMode: 'auto', correctAnswer: '75 degrees', correctAnswers: ['75 degrees', '75°', '75'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 90 − 95 − 100 = 75°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A window pane is shaped like a quadrilateral, as shown. Three of its corners measure 90° each. What must the fourth corner measure?', answer: '90 degrees', checkMode: 'auto', correctAnswer: '90 degrees', correctAnswers: ['90 degrees', '90°', '90'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 90 − 90 − 90 = 90°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,135 185,35 35,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="117" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="30" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><rect x="169" y="117" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="190" y="110" font-size="12" fill="#2563eb" font-weight="700">90°</text><rect x="169" y="35" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="2"/><text x="190" y="55" font-size="12" fill="#2563eb" font-weight="700">90°</text><text x="45" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A learner claims a quadrilateral can have three angles of 100° each and one angle of 40°, as shown. Is this claim correct? Explain.', answer: 'Yes — 100 + 100 + 100 + 40 = 340°, but the four angles of a quadrilateral must add up to exactly 360°, so this quadrilateral is NOT possible.', checkMode: 'self', explanation: '100 + 100 + 100 + 40 = 340°, which is less than the required 360°. Since every quadrilateral\'s angles must sum to exactly 360°, this set of angles cannot form a real quadrilateral — the learner\'s claim is incorrect.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">100°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100°</text><text x="65" y="62" font-size="13" fill="#2563eb" font-weight="700">40°</text></svg>' },
        { difficulty: 'Medium', question: 'A shape has 4 equal sides and 4 right angles. Identify the shape.', answer: 'square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'a square'], explanation: 'A quadrilateral with 4 equal sides and 4 right angles (90° each) is a square.' },
        { difficulty: 'Medium', question: 'Compare a rectangle and a parallelogram: state one property they always share and one property that separates them.', answer: 'Shared — both have opposite sides equal and parallel. Different — a rectangle always has 4 right angles, while a parallelogram usually does not.', checkMode: 'self', explanation: 'Both a rectangle and a parallelogram have two pairs of opposite sides that are equal in length and parallel to each other. The defining difference is that a rectangle\'s angles are always 90°, while a parallelogram\'s angles only need to be equal in opposite pairs — they are not required to be right angles.' },
        { difficulty: 'Medium', question: 'Anele says all rectangles are squares because both have 4 right angles. Is she correct? Explain.', answer: 'No — a rectangle only needs opposite sides equal and 4 right angles, but a square additionally needs all 4 sides equal. A rectangle with unequal length and width is not a square.', checkMode: 'self', explanation: 'A square is a special rectangle where, in addition to having 4 right angles, all 4 sides happen to be equal. Most rectangles have a length different from their width, so they satisfy the rectangle definition but fail the "all sides equal" requirement of a square. Anele\'s claim is false.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum of the interior angles of a heptagon (7 sides).', answer: '900 degrees', checkMode: 'auto', correctAnswer: '900 degrees', correctAnswers: ['900 degrees', '900°', '900'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA heptagon has 7 sides: (7 − 2) × 180 = 5 × 180 = 900°. ✓' },
        { difficulty: 'Medium-Hard', question: 'A regular nonagon (9 sides) has all equal angles. What is the size of each interior angle?', answer: '140 degrees', checkMode: 'auto', correctAnswer: '140 degrees', correctAnswers: ['140 degrees', '140°', '140'], explanation: 'Sum of interior angles of a nonagon: (9 − 2) × 180 = 7 × 180 = 1260°.\nAll 9 angles are equal: 1260 ÷ 9 = 140°. ✓' },
        { difficulty: 'Hard', question: 'A regular decagon (10 sides) is used to tile a floor pattern. Find the sum of its interior angles and the size of each individual angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Sum of interior angles', correctAnswer: '1440 degrees', correctAnswers: ['1440 degrees', '1440°', '1440'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA decagon has 10 sides: (10 − 2) × 180 = 8 × 180 = 1440°. ✓' }, { label: 'b) Size of each interior angle', correctAnswer: '144 degrees', correctAnswers: ['144 degrees', '144°', '144'], explanation: 'All 10 angles of a regular decagon are equal.\n1440 ÷ 10 = 144°. ✓' } ] },
        { difficulty: 'Hard', question: 'A polygon has an interior angle sum of 900°. How many sides does it have?', answer: '7 sides', checkMode: 'auto', correctAnswer: '7 sides', correctAnswers: ['7 sides', '7', 'seven', 'seven sides', 'heptagon'], explanation: 'Sum = (n − 2) × 180°, so 900 = (n − 2) × 180.\nDivide both sides by 180: n − 2 = 5.\nAdd 2: n = 7. The polygon has 7 sides (a heptagon). ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered angle sums, triangle and quadrilateral classification, and the polygon angle formula.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has angles of 38° and 95°, as shown. What is the size of the third angle?', answer: '47 degrees', checkMode: 'auto', correctAnswer: '47 degrees', correctAnswers: ['47 degrees', '47°', '47'], explanation: 'The three angles of a triangle add up to 180°.\nThird angle = 180 − 38 − 95 = 47°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 130,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 44,112" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">38°</text><path d="M 170,140 A 28,28 0 0 0 176,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><path d="M 119,38 A 18,18 0 0 1 141,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="130" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A sailboat\'s sail is shaped like a right-angled triangle, as shown. One of its other angles measures 27°. What is the size of the third angle?', answer: '63 degrees', checkMode: 'auto', correctAnswer: '63 degrees', correctAnswers: ['63 degrees', '63°', '63'], explanation: 'A right-angled triangle has one angle of 90°. All three angles add up to 180°.\nThird angle = 180 − 90 − 27 = 63°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 173,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">27°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#ea580c" stroke-width="2"/><text x="55" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy', question: 'Given that a triangle has angles of 95°, 50° and 40°, as shown, is this a valid triangle? Explain.', answer: 'No — 95 + 50 + 40 = 185°, but the angles of any triangle must add up to exactly 180°, so this set of angles cannot form a real triangle.', checkMode: 'self', explanation: '95 + 50 + 40 = 185°. Since a triangle\'s three angles must always sum to exactly 180°, angles totalling 185° cannot form a real triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 125,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 40,114" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">95°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">50°</text><path d="M 114,38 A 18,18 0 0 1 136,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="125" y="58" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">40°</text></svg>' },
        { difficulty: 'Easy', question: 'A triangle has two equal angles of 61° each, as shown. Explain in words why the third angle must be 58°, then confirm the calculation.', answer: 'Since all three angles of a triangle add up to 180°, subtract the two known angles from 180°: 180 − 61 − 61 = 58°. This must be the third angle because there is no other value that would make the sum equal 180°.', checkMode: 'self', explanation: 'The interior angles of any triangle sum to exactly 180°. With two angles of 61° each, the third angle is forced to be 180 − 61 − 61 = 58° — no other value satisfies the angle sum rule.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="128" font-size="14" fill="#2563eb" font-weight="700">61°</text><path d="M 165,140 A 28,28 0 0 0 177,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">61°</text><path d="M 99,38 A 18,18 0 0 1 121,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has angles of 90°, 55° and 35°, as shown. Classify this triangle by its angles.', answer: 'right-angled triangle', checkMode: 'auto', correctAnswer: 'right-angled triangle', correctAnswers: ['right-angled triangle', 'right angled triangle', 'right-angle triangle', 'right angled'], explanation: 'One angle is exactly 90°, so this is a right-angled triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 173,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">55°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#2563eb" stroke-width="2"/><text x="52" y="58" font-size="14" fill="#2563eb" font-weight="700">35°</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 8 cm, 3 cm and 6 cm, as shown. Classify this triangle by its sides.', answer: 'scalene triangle', checkMode: 'auto', correctAnswer: 'scalene triangle', correctAnswers: ['scalene triangle', 'scalene'], explanation: 'All three side lengths are different (8 cm, 3 cm, 6 cm), so no sides are equal. This makes it a scalene triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 75,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="90" font-size="14" fill="#2563eb" font-weight="700">8 cm</text><text x="140" y="90" font-size="14" fill="#2563eb" font-weight="700">3 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides of 8 cm, 8 cm and 6 cm, with angles of 44°, 68° and 68°, as shown. Give both its side classification and its angle classification.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Classify by sides', correctAnswer: 'isosceles', correctAnswers: ['isosceles', 'isosceles triangle'], explanation: 'Two sides are equal (8 cm and 8 cm), so it is isosceles. ✓' }, { label: 'b) Classify by angles', correctAnswer: 'acute', correctAnswers: ['acute', 'acute triangle'], explanation: 'All three angles (44°, 68°, 68°) are less than 90°, so it is acute. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="61,140 159,140 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="68" y="90" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="142" y="90" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 86,140 A 28,28 0 0 1 76,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="78" y="128" font-size="12" fill="#2563eb" font-weight="700">68°</text><path d="M 134,140 A 28,28 0 0 0 146,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="142" y="128" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">68°</text><path d="M 99,33 A 18,18 0 0 1 121,33" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="50" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">44°</text></svg>' },
        { difficulty: 'Medium', question: 'Palesa says an equilateral triangle can also be obtuse. Is she correct? Explain.', answer: 'No — every equilateral triangle has three equal angles of 60° each, and 60° is less than 90°, so an equilateral triangle is always acute and can never be obtuse.', checkMode: 'self', explanation: 'Since all three sides of an equilateral triangle are equal, all three angles must also be equal, and because they sum to 180°, each one is exactly 180 ÷ 3 = 60°. A 60° angle is acute, so every equilateral triangle is acute — it can never have an obtuse (over 90°) angle. Palesa is incorrect.' },
        { difficulty: 'Medium', question: 'Triangle C has sides 6 cm, 8 cm, 10 cm with angles 37°, 53°, 90°. Triangle D has sides 6 cm, 6 cm, 6 cm with angles 60°, 60°, 60°. State one difference between these two triangles by sides and one by angles.', answer: 'By sides — Triangle C is scalene (no equal sides) while Triangle D is equilateral (all sides equal). By angles — Triangle C is right-angled (has a 90° angle) while Triangle D is acute (all angles 60°).', checkMode: 'self', explanation: 'Triangle C (6, 8, 10) has three different side lengths, so it is scalene, and its 90° angle makes it right-angled. Triangle D (6, 6, 6) has all sides equal, so it is equilateral, and its three 60° angles make it acute. The two triangles differ in both classifications.' },
        { difficulty: 'Medium', question: 'A triangular garden bed has one side of 5 m, another of 5 m, and angles of 90°, 45° and 45°. Classify the garden bed by both its sides and its angles.', answer: 'isosceles right-angled triangle', checkMode: 'auto', correctAnswer: 'isosceles right-angled', correctAnswers: ['isosceles right-angled', 'isosceles, right-angled', 'isosceles right angled triangle', 'right-angled isosceles'], explanation: 'Two sides are equal (5 m and 5 m), so it is isosceles. One angle is exactly 90°, so it is also right-angled. Together, the garden bed is an isosceles right-angled triangle.' },
        { difficulty: 'Easy-Medium', question: 'A quadrilateral has angles of 72°, 108° and 95°, as shown. Find the fourth angle.', answer: '85 degrees', checkMode: 'auto', correctAnswer: '85 degrees', correctAnswers: ['85 degrees', '85°', '85'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 72 − 108 − 95 = 85°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">72°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">108°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A kite-shaped frame has angles of 120°, 60° and 120° at three of its corners, as shown. Find the size of the fourth corner.', answer: '60 degrees', checkMode: 'auto', correctAnswer: '60 degrees', correctAnswers: ['60 degrees', '60°', '60'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 120 − 60 − 120 = 60°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 185,80 110,150 35,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115" y="45" font-size="13" fill="#2563eb" font-weight="700">120°</text><text x="150" y="82" font-size="13" fill="#2563eb" font-weight="700">60°</text><text x="115" y="132" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="50" y="82" font-size="13" fill="#2563eb" font-weight="700">120°</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular plot of land has one corner measuring 115° due to a surveying error, with the other three corners measuring 78°, 92° and the unknown fourth corner, as shown. Find the fourth angle, then decide whether this plot could really be a rectangle.', answer: 'Fourth angle = 360 − 115 − 78 − 92 = 75°. Since a true rectangle needs all four angles to be exactly 90°, and these angles are 115°, 78°, 92° and 75°, this plot is NOT actually a rectangle despite being called one.', checkMode: 'self', explanation: 'Fourth angle = 360 − 115 − 78 − 92 = 75°. A rectangle requires all four interior angles to equal 90°. Since none of the four angles here (115°, 78°, 92°, 75°) is 90°, the plot cannot actually be a rectangle, even though the angles correctly sum to 360°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,125 175,35 45,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">115°</text><text x="165" y="110" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">78°</text><text x="160" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">92°</text><text x="55" y="62" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A shape has opposite sides equal and parallel, with 4 right angles, but its length and width are different. Identify the shape.', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'Opposite sides equal and parallel with 4 right angles, but not all 4 sides equal, describes a rectangle (not a square).' },
        { difficulty: 'Medium', question: 'Compare a rhombus and a square: state one property they always share and one property that separates them.', answer: 'Shared — both always have 4 equal sides. Different — a square always has 4 right angles, while a rhombus does not need right angles.', checkMode: 'self', explanation: 'Both shapes have all 4 sides equal in length. The difference lies in the angles: a square must have 4 right angles (90° each), while a rhombus\'s angles only need to be equal in opposite pairs — they are not required to be 90°.' },
        { difficulty: 'Medium', question: 'Bheki says all parallelograms are rhombi because both have opposite sides equal. Is he correct? Explain.', answer: 'No — a parallelogram only needs opposite sides equal and parallel, but a rhombus additionally needs all 4 sides equal. A parallelogram with unequal adjacent sides is not a rhombus.', checkMode: 'self', explanation: 'A rhombus is a special parallelogram where, beyond having opposite sides equal and parallel, ALL 4 sides are equal in length. Most parallelograms have adjacent sides of different lengths, so they meet the parallelogram definition but not the rhombus one. Bheki\'s claim is false.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum of the interior angles of a nonagon (9 sides).', answer: '1260 degrees', checkMode: 'auto', correctAnswer: '1260 degrees', correctAnswers: ['1260 degrees', '1260°', '1260'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA nonagon has 9 sides: (9 − 2) × 180 = 7 × 180 = 1260°. ✓' },
        { difficulty: 'Medium-Hard', question: 'A regular decagon (10 sides) has all equal angles. What is the size of each interior angle?', answer: '144 degrees', checkMode: 'auto', correctAnswer: '144 degrees', correctAnswers: ['144 degrees', '144°', '144'], explanation: 'Sum of interior angles of a decagon: (10 − 2) × 180 = 8 × 180 = 1440°.\nAll 10 angles are equal: 1440 ÷ 10 = 144°. ✓' },
        { difficulty: 'Hard', question: 'A stop-sign designer wants to use a regular dodecagon (12 sides) for a new sign. Find the sum of its interior angles and the size of each individual angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Sum of interior angles', correctAnswer: '1800 degrees', correctAnswers: ['1800 degrees', '1800°', '1800'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA dodecagon has 12 sides: (12 − 2) × 180 = 10 × 180 = 1800°. ✓' }, { label: 'b) Size of each interior angle', correctAnswer: '150 degrees', correctAnswers: ['150 degrees', '150°', '150'], explanation: 'All 12 angles of a regular dodecagon are equal.\n1800 ÷ 12 = 150°. ✓' } ] },
        { difficulty: 'Hard', question: 'Zola says that doubling the number of sides of a polygon always doubles the sum of its interior angles. Is she correct? Use a quadrilateral and an octagon to check.', answer: 'No — a quadrilateral (4 sides) has an angle sum of 360°, and an octagon (8 sides, double the sides) has an angle sum of 1080°, not 720°. Doubling the sides does not simply double the angle sum because of the "−2" in the formula.', checkMode: 'self', explanation: 'Quadrilateral: (4 − 2) × 180 = 360°. Octagon: (8 − 2) × 180 = 1080°. If doubling sides doubled the angle sum, the octagon would need 720°, but it is actually 1080°. The formula (n − 2) × 180° is not directly proportional to n, so Zola\'s claim is false.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently apply angle rules and classify triangles and quadrilaterals.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has angles of 49° and 88°, as shown. What is the size of the third angle?', answer: '43 degrees', checkMode: 'auto', correctAnswer: '43 degrees', correctAnswers: ['43 degrees', '43°', '43'], explanation: 'The three angles of a triangle add up to 180°.\nThird angle = 180 − 49 − 88 = 43°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 115,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 42,114" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">49°</text><path d="M 170,140 A 28,28 0 0 0 178,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><path d="M 104,38 A 18,18 0 0 1 126,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="115" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A single slice cut from a round pizza forms a triangle, as shown. The point of the slice at the centre measures 90°, and one of the crust-edge angles measures 63°. What is the size of the other crust-edge angle?', answer: '27 degrees', checkMode: 'auto', correctAnswer: '27 degrees', correctAnswers: ['27 degrees', '27°', '27'], explanation: 'All three angles of the triangular slice add up to 180°.\nThird angle = 180 − 90 − 63 = 27°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 30,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="150" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">63°</text><path d="M 30,55 A 18,18 0 0 1 46,68" fill="none" stroke="#ea580c" stroke-width="2"/><text x="55" y="58" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Easy', question: 'Given that a triangle has one angle of 90° and another angle of 90°, as shown, could it also have a third angle greater than 0°? Explain.', answer: 'No — two angles of 90° already add up to 180°, which uses up the entire angle sum. The third angle would have to be 0°, which is impossible for a real triangle.', checkMode: 'self', explanation: '90 + 90 = 180°, which already equals the full angle sum of a triangle. There is no room left for a third angle greater than 0°, so a triangle can never have two right angles.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 25,25" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="25" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="88" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><rect x="150" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="145" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text></svg>' },
        { difficulty: 'Easy', question: 'A triangle has angles of 100° and 42°, as shown. Explain, in words, why the third angle must be less than 90°, and give its exact value.', answer: 'The third angle = 180 − 100 − 42 = 38°, which is less than 90° because the other two angles already total 142°, leaving very little of the 180° sum remaining.', checkMode: 'self', explanation: 'Third angle = 180 − 100 − 42 = 38°. Since 100° and 42° already add up to 142° out of the total 180°, only 38° remains — this is well under 90°, confirming the third angle must be acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 115,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 39,113" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">100°</text><path d="M 170,140 A 28,28 0 0 0 177,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">42°</text><path d="M 104,38 A 18,18 0 0 1 126,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="115" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 11 cm, 6 cm and 9 cm, as shown. Classify this triangle by its sides.', answer: 'scalene triangle', checkMode: 'auto', correctAnswer: 'scalene triangle', correctAnswers: ['scalene triangle', 'scalene'], explanation: 'All three side lengths are different (11 cm, 6 cm, 9 cm), so this is a scalene triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 95,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="90" font-size="14" fill="#2563eb" font-weight="700">11 cm</text><text x="150" y="90" font-size="14" fill="#2563eb" font-weight="700">6 cm</text><text x="110" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has angles of 112°, 40° and 28°, as shown. Classify this triangle by its angles.', answer: 'obtuse triangle', checkMode: 'auto', correctAnswer: 'obtuse triangle', correctAnswers: ['obtuse triangle', 'obtuse'], explanation: 'One angle (112°) is greater than 90°, so this is an obtuse triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 50,140 A 28,28 0 0 1 30,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">112°</text><path d="M 170,140 A 28,28 0 0 0 178,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="163" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 44,58 A 18,18 0 0 1 66,60" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="55" font-size="14" fill="#2563eb" font-weight="700">28°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides of 7 cm, 7 cm and 7 cm, with angles of 60°, 60° and 60°, as shown. Give both its side classification and its angle classification.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Classify by sides', correctAnswer: 'equilateral', correctAnswers: ['equilateral', 'equilateral triangle'], explanation: 'All three sides are equal (7 cm each), so it is equilateral. ✓' }, { label: 'b) Classify by angles', correctAnswer: 'acute', correctAnswers: ['acute', 'acute triangle'], explanation: 'All three angles (60° each) are less than 90°, so it is acute. ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,140 180,140 110,19" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="58" y="90" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><path d="M 65,140 A 28,28 0 0 1 55,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="70" y="128" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 155,140 A 28,28 0 0 0 167,117" fill="none" stroke="#2563eb" stroke-width="2"/><text x="140" y="128" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 99,32 A 18,18 0 0 1 121,32" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'Refilwe says a right-angled triangle can never be isosceles. Is she correct? Explain.', answer: 'No — a right-angled triangle can have two equal angles of 45° each alongside the 90° angle, making it both right-angled and isosceles at the same time.', checkMode: 'self', explanation: 'A triangle with angles 90°, 45° and 45° is a valid triangle (90 + 45 + 45 = 180°). It has one right angle, so it is right-angled, and it has two equal angles (and therefore two equal sides), so it is also isosceles. Refilwe is incorrect — a right-angled isosceles triangle is entirely possible.' },
        { difficulty: 'Medium', question: 'Triangle E has sides 9 cm, 9 cm, 9 cm. Triangle F has sides 9 cm, 9 cm, 5 cm. Both are isosceles by the loosest definition. Explain why only one of them is also equilateral.', answer: 'Triangle E has all three sides equal (9, 9, 9), so it meets the extra requirement of equilateral. Triangle F only has two sides equal (9, 9) with a different third side (5), so it is isosceles but not equilateral.', checkMode: 'self', explanation: 'Equilateral requires all three sides to be equal, which is a stricter condition than isosceles (at least two equal sides). Triangle E (9, 9, 9) satisfies both conditions, so it is equilateral. Triangle F (9, 9, 5) only satisfies the isosceles condition because its third side differs from the other two.' },
        { difficulty: 'Medium', question: 'A road sign shaped like a triangle has two sides of 30 cm and angles of 90°, 45° and 45°. Classify the sign by both its sides and its angles.', answer: 'isosceles right-angled triangle', checkMode: 'auto', correctAnswer: 'isosceles right-angled', correctAnswers: ['isosceles right-angled', 'isosceles, right-angled', 'isosceles right angled triangle', 'right-angled isosceles'], explanation: 'Two angles are equal (45° and 45°), so the sides opposite them are equal too, making it isosceles. One angle is exactly 90°, making it right-angled. Together, it is an isosceles right-angled triangle.' },
        { difficulty: 'Medium', question: 'A quadrilateral has angles of 61°, 146° and 83°, as shown. Find the fourth angle.', answer: '70 degrees', checkMode: 'auto', correctAnswer: '70 degrees', correctAnswers: ['70 degrees', '70°', '70'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 61 − 146 − 83 = 70°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">61°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">146°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">83°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A kite-shaped frame for a school project has two matching angles of 115° each and one other angle of 65°, as shown. Find the size of the fourth angle.', answer: '65 degrees', checkMode: 'auto', correctAnswer: '65 degrees', correctAnswers: ['65 degrees', '65°', '65'], explanation: 'The four angles of a quadrilateral add up to 360°.\nFourth angle = 360 − 115 − 115 − 65 = 65°. ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 185,80 110,150 35,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115" y="45" font-size="13" fill="#2563eb" font-weight="700">65°</text><text x="150" y="82" font-size="13" fill="#2563eb" font-weight="700">115°</text><text x="115" y="132" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="50" y="82" font-size="13" fill="#2563eb" font-weight="700">115°</text></svg>' },
        { difficulty: 'Medium', question: 'A learner measures a quadrilateral field and records angles of 85°, 95°, 90° and 91°, as shown. Check whether these angles could really belong to the same quadrilateral, and explain your reasoning.', answer: '85 + 95 + 90 + 91 = 361°, which is 1° too many. Since a quadrilateral\'s angles must add up to exactly 360°, these four measurements cannot all be correct — the learner must have made a small measuring error.', checkMode: 'self', explanation: '85 + 95 + 90 + 91 = 361°. A true quadrilateral always has interior angles summing to exactly 360°, so a total of 361° is impossible. This tells us at least one of the four measurements has a small error.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,125 175,35 45,45" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">85°</text><text x="165" y="110" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="160" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="55" y="62" font-size="13" fill="#2563eb" font-weight="700">91°</text></svg>' },
        { difficulty: 'Medium', question: 'A shape has exactly one pair of parallel sides and no sides equal. Identify the shape.', answer: 'trapezium', checkMode: 'auto', correctAnswer: 'trapezium', correctAnswers: ['trapezium', 'a trapezium', 'trapezoid'], explanation: 'A quadrilateral with exactly one pair of parallel sides (and no requirement for equal sides) is a trapezium.' },
        { difficulty: 'Medium', question: 'Compare a kite and a rhombus: state one property they always share and one property that separates them.', answer: 'Shared — both can have all interior angles that are not right angles, and both have some equal sides. Different — a rhombus has all 4 sides equal, while a kite has two separate pairs of adjacent equal sides that are not equal to each other.', checkMode: 'self', explanation: 'A rhombus has all 4 sides the same length, while a kite has two pairs of adjacent sides that are equal to each other within each pair, but the two pairs are usually different lengths from one another. Both shapes can lack right angles, but only the rhombus guarantees all sides are the same length.' },
        { difficulty: 'Medium', question: 'Naledi says a shape with two pairs of adjacent equal sides must be a rhombus. Is she correct? Explain, and name the shape she is actually describing.', answer: 'No — a shape with two pairs of adjacent equal sides (rather than all 4 sides equal) is a kite, not a rhombus. A rhombus specifically needs all 4 sides equal, not just two matching pairs.', checkMode: 'self', explanation: 'A kite is defined by two pairs of adjacent sides being equal, where the two pairs can have different lengths from each other. A rhombus is stricter — it needs all 4 sides to be exactly equal. Since Naledi\'s description only guarantees adjacent pairs (not all 4 sides matching), she is actually describing a kite.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum of the interior angles of a decagon (10 sides).', answer: '1440 degrees', checkMode: 'auto', correctAnswer: '1440 degrees', correctAnswers: ['1440 degrees', '1440°', '1440'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA decagon has 10 sides: (10 − 2) × 180 = 8 × 180 = 1440°. ✓' },
        { difficulty: 'Medium-Hard', question: 'A regular nonagon (9 sides) has all equal angles. What is the size of each interior angle?', answer: '140 degrees', checkMode: 'auto', correctAnswer: '140 degrees', correctAnswers: ['140 degrees', '140°', '140'], explanation: 'Sum of interior angles of a nonagon: (9 − 2) × 180 = 7 × 180 = 1260°.\nAll 9 angles are equal: 1260 ÷ 9 = 140°. ✓' },
        { difficulty: 'Hard', question: 'A tiling company wants to use a regular polygon with 15 sides (a pentadecagon) for a decorative floor pattern. Find the sum of its interior angles and the size of each individual angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Sum of interior angles', correctAnswer: '2340 degrees', correctAnswers: ['2340 degrees', '2340°', '2340'], explanation: 'Use the formula: (number of sides − 2) × 180°.\nA 15-sided polygon has: (15 − 2) × 180 = 13 × 180 = 2340°. ✓' }, { label: 'b) Size of each interior angle', correctAnswer: '156 degrees', correctAnswers: ['156 degrees', '156°', '156'], explanation: 'All 15 angles of a regular 15-sided polygon are equal.\n2340 ÷ 15 = 156°. ✓' } ] },
        { difficulty: 'Hard', question: 'A polygon has an interior angle sum of 1800°. How many sides does it have?', answer: '12 sides', checkMode: 'auto', correctAnswer: '12 sides', correctAnswers: ['12 sides', '12', 'twelve', 'twelve sides', 'dodecagon'], explanation: 'Sum = (n − 2) × 180°, so 1800 = (n − 2) × 180.\nDivide both sides by 180: n − 2 = 10.\nAdd 2: n = 12. The polygon has 12 sides (a dodecagon). ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply angle rules and shape properties to real-world problems and reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
