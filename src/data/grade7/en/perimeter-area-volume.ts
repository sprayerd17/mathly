import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (measurement roles) ──────────────────────────────────────
// side length / dimension → blue    (#2563eb)
// formula                 → orange  (#ea580c)
// perimeter / answer      → green   (#16a34a)
// width / red dimension   → red     (#dc2626)
// base                    → orange  (#ea580c)  [reused]
// height                  → purple  (#7c3aed)
// surface area            → orange  (#ea580c)  [reused]
// volume                  → green   (#16a34a)  [reused]
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Perimeter, Area and Volume',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PERIMETER OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-of-polygons',
      title: 'Perimeter of Polygons',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>perimeter</strong> is the total distance around a shape. For <strong>regular polygons</strong> we multiply one side by the number of sides. For <strong>irregular polygons</strong> we add all side lengths together. In Grade 7 we use formulae:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Square</p>` +
        `<p style="font-size:1.1em;margin:0;">${or('P')} = ${or('4')}${bl('s')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Rectangle</p>` +
        `<p style="font-size:1.1em;margin:0;">${or('P')} = ${or('2(')}${bl('l')} + ${re('b')}${or(')')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('side lengths')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formula')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('perimeter answer')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always include units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Perimeter is a <strong>length</strong>, so your answer must have a length unit such as cm, m, or mm. Never leave the unit out.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A square has sides of 9 cm. Find its perimeter using the formula.',
          answer: `${gr('P = 36 cm')}`,
          steps: [
            `Write the formula: ${or('P = 4s')}`,
            `Substitute the side length: ${or('P = 4 ×')} ${bl('9')}`,
            `Calculate: ${or('P =')} ${gr('36 cm')}`,
          ],
        },
        {
          question: 'A rectangle is 14 cm long and 8 cm wide. Find its perimeter using the formula.',
          answer: `${gr('P = 44 cm')}`,
          steps: [
            `Write the formula: ${or('P = 2(l + b)')}`,
            `Substitute the values: ${or('P = 2(')}${bl('14')} + ${re('8')}${or(')')}`,
            `Add inside the brackets: ${or('P = 2(')}${bl('22')}${or(')')}`,
            `Multiply: ${or('P =')} ${gr('44 cm')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A square has sides of 12 cm. Calculate its perimeter using the formula.',
          answer: '48 cm',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48 cm', '48cm'],
          explanation: 'P = 4s = 4 × 12 = 48 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate the perimeter of each shape.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A rectangle 20 cm long and 7 cm wide.',
              correctAnswer: '54',
              correctAnswers: ['54', '54 cm', '54cm'],
              explanation: 'P = 2(l + b) = 2(20 + 7) = 2(27) = 54 cm ✓',
            },
            {
              label: 'b) A square with sides of 15 cm.',
              correctAnswer: '60',
              correctAnswers: ['60', '60 cm', '60cm'],
              explanation: 'P = 4s = 4 × 15 = 60 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'The perimeter of a rectangle is 72 cm. The length is 22 cm. Find the width.',
          answer: '14 cm',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14', '14 cm', '14cm'],
          explanation: 'P = 2(l + b)\n72 = 2(22 + b)\n36 = 22 + b\nb = 14 cm ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the perimeter of squares and rectangles using formulae" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Labelled diagrams of a square and a rectangle showing the side length formula for perimeter with colour coded measurements" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — AREA OF TRIANGLES, SQUARES AND RECTANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-triangles-squares-rectangles',
      title: 'Area of Triangles, Squares and Rectangles',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Area</strong> is the space inside a shape and is measured in <strong>square units</strong> (cm², m², mm²). In Grade 7 we use these formulae:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Square</p>` +
        `<p style="font-size:1.1em;margin:0;">A = ${bl('l')}²</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Rectangle</p>` +
        `<p style="font-size:1.1em;margin:0;">A = ${bl('l')} × ${re('b')}</p>` +
        `</div>` +

        `<div style="background:#fdf4ff;border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#6b21a8;margin-bottom:6px;">Triangle</p>` +
        `<p style="font-size:1.1em;margin:0;">A = ½ × ${or('b')} × ${pu('h')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('length')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('width / breadth')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('base')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('height')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('area')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Area units are always squared</p>` +
        `<p style="margin:0;color:#166534;">If you measure in centimetres your area is in cm². If you measure in metres your area is in m². Do not forget to square the unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A square has sides of 11 cm. Find its area.',
          answer: `${gr('A = 121 cm²')}`,
          steps: [
            `Write the formula: A = ${bl('l')}²`,
            `Substitute the length: A = ${bl('11')}²`,
            `Calculate: A = ${gr('121 cm²')}`,
          ],
        },
        {
          question: 'A rectangle is 15 cm long and 9 cm wide. Find its area.',
          answer: `${gr('A = 135 cm²')}`,
          steps: [
            `Write the formula: A = ${bl('l')} × ${re('b')}`,
            `Substitute the values: A = ${bl('15')} × ${re('9')}`,
            `Calculate: A = ${gr('135 cm²')}`,
          ],
        },
        {
          question: 'A triangle has a base of 16 cm and a height of 10 cm. Find its area.',
          answer: `${gr('A = 80 cm²')}`,
          steps: [
            `Write the formula: A = ½ × ${or('b')} × ${pu('h')}`,
            `Substitute the values: A = 0.5 × ${or('16')} × ${pu('10')}`,
            `Multiply: A = 0.5 × 160`,
            `Calculate: A = ${gr('80 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A square has sides of 13 cm. Calculate its area.',
          answer: '169 cm²',
          checkMode: 'auto',
          correctAnswer: '169',
          correctAnswers: ['169', '169 cm²', '169cm²'],
          explanation: 'A = l² = 13² = 169 cm² ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate the area of each shape.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A rectangle 18 cm long and 7 cm wide.',
              correctAnswer: '126',
              correctAnswers: ['126', '126 cm²', '126cm²'],
              explanation: 'A = l × b = 18 × 7 = 126 cm² ✓',
            },
            {
              label: 'b) A triangle with base 20 cm and height 12 cm.',
              correctAnswer: '120',
              correctAnswers: ['120', '120 cm²', '120cm²'],
              explanation: 'A = ½ × b × h = 0.5 × 20 × 12 = 120 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'The area of a rectangle is 180 cm². The length is 15 cm. Find the width.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12 cm', '12cm'],
          explanation: 'A = l × b\n180 = 15 × b\nb = 180 ÷ 15 = 12 cm ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the area of squares, rectangles and triangles using formulae" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Labelled diagrams of a square, rectangle and triangle with colour coded length, breadth, base and height dimensions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SURFACE AREA AND VOLUME OF CUBES AND RECTANGULAR PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area-volume-3d',
      title: 'Surface Area and Volume of Cubes and Rectangular Prisms',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Surface area</strong> is the total area of all the faces of a 3D object. <strong>Volume</strong> is the space a 3D object occupies, measured in <strong>cubic units</strong> (cm³, m³). In Grade 7 we use these formulae:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">Cube</p>` +
        `<p style="font-size:1em;margin-bottom:4px;">${or('SA')} = ${or('6')}${bl('l')}²</p>` +
        `<p style="font-size:1em;margin:0;">${gr('V')} = ${bl('l')}³</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:8px;">Rectangular Prism</p>` +
        `<p style="font-size:1em;margin-bottom:4px;">${or('SA')} = ${or('2(')}${bl('lb')} + ${bl('lh')} + ${bl('bh')}${or(')')}</p>` +
        `<p style="font-size:1em;margin:0;">${gr('V')} = ${bl('l')} × ${bl('b')} × ${bl('h')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensions (l, b, h)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('surface area')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Units to remember</p>` +
        `<p style="margin:0;color:#7c2d12;">Surface area uses <strong>square units</strong> (cm², m²) because it is still an area. Volume uses <strong>cubic units</strong> (cm³, m³) because it fills three-dimensional space.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cube has sides of 5 cm. Find its surface area and volume.',
          answer: `${or('SA = 150 cm²')} &nbsp; ${gr('V = 125 cm³')}`,
          steps: [
            `<strong>Surface Area</strong> — write the formula: ${or('SA = 6l²')}`,
            `Substitute: ${or('SA = 6 ×')} ${bl('5')}² = ${or('6 ×')} ${bl('25')}`,
            `Calculate: ${or('SA = 150 cm²')}`,
            `<strong>Volume</strong> — write the formula: ${gr('V = l³')}`,
            `Substitute: ${gr('V =')} ${bl('5')}³ = ${bl('5')} × ${bl('5')} × ${bl('5')}`,
            `Calculate: ${gr('V = 125 cm³')}`,
          ],
        },
        {
          question: 'A rectangular prism is 8 cm long, 5 cm wide and 4 cm high. Find its volume.',
          answer: `${gr('V = 160 cm³')}`,
          steps: [
            `Write the formula: ${gr('V = l × b × h')}`,
            `Substitute the values: ${gr('V =')} ${bl('8')} × ${bl('5')} × ${bl('4')}`,
            `Multiply step by step: ${bl('8')} × ${bl('5')} = ${bl('40')}, then ${bl('40')} × ${bl('4')}`,
            `Calculate: ${gr('V = 160 cm³')}`,
          ],
        },
        {
          question: 'Find the surface area of the same rectangular prism (8 cm × 5 cm × 4 cm).',
          answer: `${or('SA = 184 cm²')}`,
          steps: [
            `Write the formula: ${or('SA = 2(lb + lh + bh)')}`,
            `Find each face pair: ${bl('lb')} = ${bl('8 × 5')} = ${bl('40')}, ${bl('lh')} = ${bl('8 × 4')} = ${bl('32')}, ${bl('bh')} = ${bl('5 × 4')} = ${bl('20')}`,
            `Add the face pairs: ${bl('40')} + ${bl('32')} + ${bl('20')} = ${bl('92')}`,
            `Multiply by 2: ${or('SA = 2 × 92')}`,
            `Calculate: ${or('SA = 184 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A cube has sides of 6 cm. Calculate its volume.',
          answer: '216 cm³',
          checkMode: 'auto',
          correctAnswer: '216',
          correctAnswers: ['216', '216 cm³', '216cm³'],
          explanation: 'V = l³ = 6³ = 6 × 6 × 6 = 216 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A rectangular prism measures 10 cm × 6 cm × 3 cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the volume.',
              correctAnswer: '180',
              correctAnswers: ['180', '180 cm³', '180cm³'],
              explanation: 'V = l × b × h = 10 × 6 × 3 = 180 cm³ ✓',
            },
            {
              label: 'b) Find the surface area.',
              correctAnswer: '216',
              correctAnswers: ['216', '216 cm²', '216cm²'],
              explanation: 'SA = 2(lb + lh + bh) = 2(60 + 30 + 18) = 2(108) = 216 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A cube has a surface area of 294 cm². Find the side length and the volume of the cube.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Side length of the cube.',
              correctAnswer: '7',
              correctAnswers: ['7', '7 cm', '7cm'],
              explanation: 'SA = 6l²\n294 = 6l²\nl² = 294 ÷ 6 = 49\nl = √49 = 7 cm ✓',
            },
            {
              label: 'b) Volume of the cube.',
              correctAnswer: '343',
              correctAnswers: ['343', '343 cm³', '343cm³'],
              explanation: 'V = l³ = 7³ = 7 × 7 × 7 = 343 cm³ ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the surface area and volume of cubes and rectangular prisms using formulae" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="3D diagrams of a cube and a rectangular prism with colour coded dimensions showing all six faces for surface area and the interior for volume" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — square perimeter using formula ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A square has sides of 7 cm. Find its perimeter using the formula.',
      answer: '28 cm',
      checkMode: 'auto',
      correctAnswer: '28',
      explanation: 'P = 4s = 4 × 7 = 28 cm ✓',
    },

    // ── Q2 Medium — rectangle perimeter ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A rectangle is 12 cm long and 6 cm wide. Find its perimeter.',
      answer: '36 cm',
      checkMode: 'auto',
      correctAnswer: '36',
      explanation: 'P = 2(l + b) = 2(12 + 6) = 2(18) = 36 cm ✓',
    },

    // ── Q3 Hard — Sipho's perimeter error ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a square with perimeter 48 cm has sides of 16 cm. Is he correct? Explain.',
      answer: 'No — Perimeter = 4s, so s = 48 ÷ 4 = 12 cm, not 16 cm.',
      checkMode: 'self',
    },

    // ── Q4 Easy — square area ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A square has sides of 8 cm. Find its area.',
      answer: '64 cm²',
      checkMode: 'auto',
      correctAnswer: '64',
      explanation: 'A = l² = 8² = 64 cm² ✓',
    },

    // ── Q5 Easy — rectangle area ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A rectangle is 10 cm long and 7 cm wide. Find its area.',
      answer: '70 cm²',
      checkMode: 'auto',
      correctAnswer: '70',
      explanation: 'A = l × b = 10 × 7 = 70 cm² ✓',
    },

    // ── Q6 Medium — triangle area ─────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A triangle has a base of 12 cm and height of 9 cm. Find its area.',
      answer: '54 cm²',
      checkMode: 'auto',
      correctAnswer: '54',
      explanation: 'A = ½ × b × h = 0.5 × 12 × 9 = 54 cm² ✓',
    },

    // ── Q7 Hard — Lerato's doubling claim ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says doubling the side length of a square quadruples its area. Is she correct? Explain with an example.',
      answer: 'Yes — if a square has sides of 4 cm (area = 16 cm²), doubling to 8 cm gives area = 64 cm², which is 4 times bigger.',
      checkMode: 'self',
    },

    // ── Q8 Easy — cube volume ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the volume of a cube with sides of 6 cm.',
      answer: '216 cm³',
      checkMode: 'auto',
      correctAnswer: '216',
      explanation: 'V = l³ = 6³ = 6 × 6 × 6 = 216 cm³ ✓',
    },

    // ── Q9 Medium — rectangular prism volume ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the volume of a rectangular prism 9 cm by 5 cm by 3 cm.',
      answer: '135 cm³',
      checkMode: 'auto',
      correctAnswer: '135',
      explanation: 'V = l × b × h = 9 × 5 × 3 = 135 cm³ ✓',
    },

    // ── Q10 Hard — cube surface area ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the surface area of a cube with sides of 7 cm.',
      answer: '294 cm²',
      checkMode: 'auto',
      correctAnswer: '294',
      explanation: 'SA = 6l² = 6 × 7² = 6 × 49 = 294 cm² ✓',
    },

    // ── Q11 Medium — rectangular prism surface area ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the surface area of a rectangular prism 10 cm by 6 cm by 4 cm.',
      answer: '248 cm²',
      checkMode: 'auto',
      correctAnswer: '248',
      explanation: 'SA = 2(lb + lh + bh) = 2(10×6 + 10×4 + 6×4) = 2(60 + 40 + 24) = 2(124) = 248 cm² ✓',
    },

    // ── Q12 Hard — Thabo's cube volume error ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says a cube with volume 64 cm³ has sides of 8 cm. Is he correct? Explain.',
      answer: 'No — Volume = l³, so l = ∛64 = 4 cm, not 8 cm.',
      checkMode: 'self',
    },

    // ── Q13 Medium — triangular garden area ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A triangular garden has a base of 18 m and height of 12 m. Find its area.',
      answer: '108 m²',
      checkMode: 'auto',
      correctAnswer: '108',
      explanation: 'A = ½ × b × h = 0.5 × 18 × 12 = 108 m² ✓',
    },

    // ── Q14 Hard — cube packing ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle packs a box 30 cm by 20 cm by 10 cm with cubes of 5 cm sides. How many cubes fit?',
      answer: '48',
      checkMode: 'auto',
      correctAnswer: '48',
      explanation: 'Number along each dimension: 30 ÷ 5 = 6, 20 ÷ 5 = 4, 10 ÷ 5 = 2\nTotal cubes: 6 × 4 × 2 = 48 ✓',
    },

    // ── Q15 Hard — square from area ──────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A square has an area of 121 cm². Find its side length and its perimeter.',
      answer: 'Side = √121 = 11 cm. Perimeter = 4 × 11 = 44 cm.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Outstanding! You have mastered perimeter, area and volume.' },
      { minScore: 12, message: 'Great work!' },
      { minScore: 8, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered perimeter, area and volume for Grade 7. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of measurement. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
