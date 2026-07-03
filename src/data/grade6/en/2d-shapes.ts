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
}
