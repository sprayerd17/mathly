import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (perimeter and area roles) ────────────────────────────────
// side length / length / base → blue    (#2563eb)
// width / height               → red     (#dc2626)
// multiplication               → green   (#16a34a)
// perimeter / area answer      → orange  (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Perimeter and Area',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PERIMETER OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-of-polygons',
      title: 'Perimeter of Polygons',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Perimeter is the <strong>total distance around the outside</strong> of a shape. To find perimeter we add up all side lengths. For <strong>regular polygons</strong> where all sides are equal we can multiply one side length by the number of sides instead of adding repeatedly. Always make sure all sides are in the <strong>same unit</strong> before calculating.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('side lengths')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perimeter answer')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Irregular polygon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add all the ${bl('side lengths')} together: P = ${bl('a')} + ${bl('b')} + ${bl('c')} + …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Regular polygon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All sides are equal — ${gr('multiply')} one ${bl('side length')} by the number of sides: P = n ${gr('×')} ${bl('s')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before you add or multiply, make sure every ${bl('side length')} is in the <strong>same unit</strong>. Convert first if needed, then calculate the ${or('perimeter')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A regular pentagon has sides of 9 cm each. Find the perimeter.',
          answer: `Perimeter = ${or('45 cm')}`,
          steps: [
            `The pentagon has <strong>5 equal sides</strong>. Each ${bl('side')} = ${bl('9 cm')}.`,
            `For a regular polygon: P = number of sides ${gr('×')} ${bl('side length')} = ${gr('5 ×')} ${bl('9')} = ${or('45 cm')}`,
            `<strong>Answer:</strong> Perimeter = ${or('45 cm')} ✓`,
          ],
        },
        {
          question: 'An irregular quadrilateral has sides of 6 cm, 9 cm, 5 cm and 11 cm. Find the perimeter.',
          answer: `Perimeter = ${or('31 cm')}`,
          steps: [
            `The shape has <strong>4 unequal sides</strong>: ${bl('6 cm')}, ${bl('9 cm')}, ${bl('5 cm')}, ${bl('11 cm')}.`,
            `Add all ${bl('side lengths')}: P = ${bl('6')} + ${bl('9')} + ${bl('5')} + ${bl('11')} = ${or('31 cm')}`,
            `<strong>Answer:</strong> Perimeter = ${or('31 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — regular hexagon perimeter ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A regular hexagon has sides of 7 cm each. Find the perimeter.',
          answer: '42cm',
          checkMode: 'auto',
          correctAnswer: '42cm',
          correctAnswers: ['42cm', '42 cm', '42'],
          explanation: 'A regular hexagon has 6 equal sides.\nP = 6 × 7 = 42 cm ✓',
        },

        // ── Q2 Easy — rectangle perimeter by adding all sides ────────────────
        {
          difficulty: 'Easy',
          question: 'A rectangle has sides of 8 cm, 8 cm, 5 cm and 5 cm. Find the perimeter.',
          answer: '26cm',
          checkMode: 'auto',
          correctAnswer: '26cm',
          correctAnswers: ['26cm', '26 cm', '26'],
          explanation: 'Add all four sides: P = 8 + 8 + 5 + 5 = 26 cm ✓',
        },

        // ── Q3 Medium — irregular pentagon perimeter ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'An irregular pentagon has sides of 4 cm, 6 cm, 5 cm, 7 cm and 3 cm. Find the perimeter.',
          answer: '25cm',
          checkMode: 'auto',
          correctAnswer: '25cm',
          correctAnswers: ['25cm', '25 cm', '25'],
          explanation: 'Add all five sides: P = 4 + 6 + 5 + 7 + 3 = 25 cm ✓',
        },

        // ── Q4 Hard — spot the error in perimeter reasoning ──────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a square with a perimeter of 36 cm has sides of 12 cm. Is he correct? Explain.',
          answer: 'No — perimeter divided by 4 gives the side length. 36 ÷ 4 = 9 cm, not 12 cm.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the perimeter of regular and irregular polygons by adding or multiplying side lengths" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — AREA OF RECTANGLES AND SQUARES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-rectangles-squares',
      title: 'Area of Rectangles and Squares',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">Area is the amount of <strong>flat surface a shape covers</strong>, measured in square units like cm² or m². For a rectangle, Area ${gr('=')} ${bl('length')} ${gr('×')} ${re('width')}. For a square, Area ${gr('=')} ${bl('side')} ${gr('×')} ${bl('side')} (or side²). Knowing area helps us solve real-life problems like tiling, painting and carpeting.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('length')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('width')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('area answer')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A = ${bl('length')} ${gr('×')} ${re('width')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A = ${bl('side')} ${gr('×')} ${bl('side')} = ${bl('side')}²</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Remember: square units</p>` +
        `<p style="margin:0;color:#7c2d12;">Area is always written in <strong>square units</strong> — cm², m², km². The square reminds us that we multiplied two dimensions together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 12 cm long and 7 cm wide. Find the area.',
          answer: `Area = ${or('84 cm²')}`,
          steps: [
            `Identify the dimensions: ${bl('length')} = ${bl('12 cm')}, ${re('width')} = ${re('7 cm')}.`,
            `Apply the formula: A = ${bl('length')} ${gr('×')} ${re('width')} = ${bl('12')} ${gr('×')} ${re('7')} = ${or('84 cm²')}`,
            `<strong>Answer:</strong> Area = ${or('84 cm²')} ✓`,
          ],
        },
        {
          question: 'A square has sides of 9 m. Find the area.',
          answer: `Area = ${or('81 m²')}`,
          steps: [
            `Identify the dimension: ${bl('side')} = ${bl('9 m')}.`,
            `Apply the formula: A = ${bl('side')} ${gr('×')} ${bl('side')} = ${bl('9')} ${gr('×')} ${bl('9')} = ${or('81 m²')}`,
            `<strong>Answer:</strong> Area = ${or('81 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — rectangle area ─────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A rectangle is 10 cm long and 4 cm wide. Find the area.',
          answer: '40cm²',
          checkMode: 'auto',
          correctAnswer: '40cm²',
          correctAnswers: ['40cm²', '40 cm²', '40cm2', '40 cm2', '40'],
          explanation: 'A = length × width = 10 × 4 = 40 cm² ✓',
        },

        // ── Q6 Easy — square area ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A square has sides of 6 m. Find the area.',
          answer: '36m²',
          checkMode: 'auto',
          correctAnswer: '36m²',
          correctAnswers: ['36m²', '36 m²', '36m2', '36 m2', '36'],
          explanation: 'A = side × side = 6 × 6 = 36 m² ✓',
        },

        // ── Q7 Medium — rectangular garden area ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A rectangular garden is 15 m long and 8 m wide. Find its area.',
          answer: '120m²',
          checkMode: 'auto',
          correctAnswer: '120m²',
          correctAnswers: ['120m²', '120 m²', '120m2', '120 m2', '120'],
          explanation: 'A = length × width = 15 × 8 = 120 m² ✓',
        },

        // ── Q8 Hard — tiling word problem ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wants to tile a floor that is 5 m by 4 m. Each tile covers 1 m². How many tiles does she need?',
          answer: '20',
          checkMode: 'auto',
          correctAnswer: '20',
          explanation: 'Floor area = 5 × 4 = 20 m².\nEach tile covers 1 m², so she needs 20 tiles ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a labelled rectangle with length in blue and width in red, and a labelled square with side in blue, illustrating the area formula for each shape" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the area of a rectangle and a square using the formulas length times width and side squared" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — AREA OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-of-triangles',
      title: 'Area of Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">The area of a triangle is <strong>half the area of a rectangle</strong> with the same base and height. The formula is: Area ${gr('=')} ½ ${gr('×')} ${bl('base')} ${gr('×')} ${re('height')}. The ${re('height')} must always be measured <strong>perpendicular to the base</strong> — at a right angle to it, not along a slanted side.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('height')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('½ × multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('area answer')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">A = ${gr('½ ×')} ${bl('base')} ${gr('×')} ${re('height')}&nbsp;&nbsp; or &nbsp;&nbsp;A = ${gr('0.5 ×')} ${bl('b')} ${gr('×')} ${re('h')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">The height must be perpendicular</p>` +
        `<p style="margin:0;color:#991b1b;">Always use the ${re('perpendicular height')} — the straight-up distance from the base to the opposite vertex. Never use the length of a slanted side as the ${re('height')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has a base of 10 cm and a height of 6 cm. Find the area.',
          answer: `Area = ${or('30 cm²')}`,
          steps: [
            `Identify the dimensions: ${bl('base')} = ${bl('10 cm')}, ${re('height')} = ${re('6 cm')}.`,
            `Apply the formula: A = ${gr('0.5 ×')} ${bl('10')} ${gr('×')} ${re('6')} = ${gr('0.5 ×')} 60 = ${or('30 cm²')}`,
            `<strong>Answer:</strong> Area = ${or('30 cm²')} ✓`,
          ],
        },
        {
          question: 'A triangle has a base of 14 m and a height of 8 m. Find the area.',
          answer: `Area = ${or('56 m²')}`,
          steps: [
            `Identify the dimensions: ${bl('base')} = ${bl('14 m')}, ${re('height')} = ${re('8 m')}.`,
            `Apply the formula: A = ${gr('0.5 ×')} ${bl('14')} ${gr('×')} ${re('8')} = ${gr('0.5 ×')} 112 = ${or('56 m²')}`,
            `<strong>Answer:</strong> Area = ${or('56 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — triangle area ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A triangle has a base of 8 cm and a height of 5 cm. Find the area.',
          answer: '20cm²',
          checkMode: 'auto',
          correctAnswer: '20cm²',
          correctAnswers: ['20cm²', '20 cm²', '20cm2', '20 cm2', '20'],
          explanation: 'A = 0.5 × base × height = 0.5 × 8 × 5 = 0.5 × 40 = 20 cm² ✓',
        },

        // ── Q10 Medium — triangle area with larger values ─────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangle has a base of 12 m and a height of 9 m. Find the area.',
          answer: '54m²',
          checkMode: 'auto',
          correctAnswer: '54m²',
          correctAnswers: ['54m²', '54 m²', '54m2', '54 m2', '54'],
          explanation: 'A = 0.5 × base × height = 0.5 × 12 × 9 = 0.5 × 108 = 54 m² ✓',
        },

        // ── Q11 Hard — spot the error in triangle area reasoning ──────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says a triangle with base 10 cm and height 6 cm has an area of 60 cm². Is he correct? Explain.',
          answer: 'No — he forgot to halve it. Area = 0.5 × 10 × 6 = 30 cm², not 60 cm².',
          checkMode: 'self',
        },

        // ── Q12 Hard — composite shape: rectangle minus triangle ──────────────
        {
          difficulty: 'Hard',
          question: 'A rectangular field is 20 m by 15 m. A triangular section with base 10 m and height 6 m is removed from a corner. What is the remaining area?',
          answer: 'Rectangle area = 20 × 15 = 300 m².\nTriangle area = 0.5 × 10 × 6 = 30 m².\nRemaining = 300 − 30 = 270 m².',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a triangle with base labelled in blue and perpendicular height labelled in red, with a dotted line indicating the height is at a right angle to the base" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the area of a triangle using half times base times height with the perpendicular height highlighted" />',
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered perimeter and area.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
