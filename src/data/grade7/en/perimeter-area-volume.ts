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
        'Labelled diagrams of a square and a rectangle showing the side length formula for perimeter with colour coded measurements',

      diagramSvg:
        '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="70" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">s</text><text x="70" y="145" font-size="12" fill="#374151" text-anchor="middle">square</text><rect x="160" y="45" width="120" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="220" y="35" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="293" y="80" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 293 80)">b</text><text x="220" y="145" font-size="12" fill="#374151" text-anchor="middle">rectangle</text></svg>',
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
        'Labelled diagrams of a square, rectangle and triangle with colour coded length, breadth, base and height dimensions',

      diagramSvg:
        '<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="80" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="60" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="60" y="140" font-size="11" fill="#374151" text-anchor="middle">square</text><rect x="160" y="45" width="110" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="215" y="35" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="285" y="77.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 285 77.5)">b</text><text x="215" y="140" font-size="11" fill="#374151" text-anchor="middle">rectangle</text><polygon points="320,115 440,115 380,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="380" y1="40" x2="380" y2="115" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="374" y="108" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="380" y="132" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">b</text><text x="400" y="80" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">h</text><text x="380" y="150" font-size="11" fill="#374151" text-anchor="middle">triangle</text></svg>',
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
        '3D diagrams of a cube and a rectangular prism with colour coded dimensions showing all six faces for surface area and the interior for volume',

      diagramSvg:
        '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg"><text x="60" y="15" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cube</text><polygon points="30,90 90,90 90,150 30,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M30,90 L50,70 M90,90 L110,70 M90,150 L110,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,70 L110,70 M110,70 L110,130 M110,130 L90,150" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/><text x="60" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="104" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="220" y="15" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Rectangular prism</text><polygon points="170,75 250,75 250,150 170,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M170,75 L190,55 M250,75 L270,55 M250,150 L270,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M190,55 L270,55 M270,55 L270,130 M270,130 L250,150" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/><text x="210" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l</text><text x="158" y="116" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 158 116)">h</text><text x="232" y="48" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">b</text></svg>',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Perimeter of polygons ──────────────────────────────────
        { difficulty: 'Easy', question: 'A regular heptagon has sides of 9 cm each, as shown. Find its perimeter.', answer: '63 cm', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', '63 cm', '63cm'], explanation: 'A regular heptagon has 7 equal sides.\nP = 7 × 9 = 63 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 155.3,58.8 166.5,107.9 135.2,147.3 84.8,147.3 53.5,107.9 64.7,58.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="140.5" y="31.7" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular heptagon</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular sports field is 16 m long and 9 m wide, as shown. Calculate its perimeter.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 m', '50m'], explanation: 'P = 2(l + b) = 2(16 + 9) = 2(25) = 50 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">9 m</text></svg>' },
        { difficulty: 'Medium', question: 'An irregular pentagon has sides of 6 cm, 8 cm, 5 cm, 9 cm and 7 cm, as shown. Find its perimeter.', answer: '35 cm', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 cm', '35cm'], explanation: 'Add all five sides: P = 6 + 8 + 5 + 9 + 7 = 35 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 30,80 100,30 175,70 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="16.5" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="34" y="19" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="183.5" y="41" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="192.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="44.5" y="164" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text></svg>' },

        // ── Block 2: Area of rectangles, squares and triangles ──────────────
        { difficulty: 'Easy', question: 'A square tile has sides of 14 cm, as shown. Find its area.', answer: '196 cm²', checkMode: 'auto', correctAnswer: '196', correctAnswers: ['196', '196 cm²', '196cm²'], explanation: 'A = l² = 14² = 196 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangular whiteboard is 17 cm long and 8 cm wide, as shown. Find its area.', answer: '136 cm²', checkMode: 'auto', correctAnswer: '136', correctAnswers: ['136', '136 cm²', '136cm²'], explanation: 'A = l × b = 17 × 8 = 136 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular sail has a base of 20 cm and a height of 11 cm, as shown. Find its area.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110', '110 cm²', '110cm²'], explanation: 'A = ½ × b × h = 0.5 × 20 × 11 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="156.0" y="90.0" font-size="14" fill="#7c3aed" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular poster has an area of 192 cm². Its length is 16 cm. Find its width, as shown.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 cm', '12cm'], explanation: 'A = l × b\n192 = 16 × b\nb = 192 ÷ 16 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="26" y="85.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">?</text><text x="110.0" y="70" font-size="12" fill="#374151" text-anchor="middle">Area = 192 cm²</text></svg>' },

        // ── Block 3: Composite 2D figure area ────────────────────────────────
        { difficulty: 'Medium', question: 'A rectangular garden measures 18 m by 12 m, as shown. A rectangular shed measuring 5 m by 4 m is built in one corner. Find the area of the garden not covered by the shed.', answer: '196 m²', checkMode: 'auto', correctAnswer: '196', correctAnswers: ['196', '196 m²', '196m²'], explanation: 'Garden area = 18 × 12 = 216 m²\nShed area = 5 × 4 = 20 m²\nRemaining = 216 − 20 = 196 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">12 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 14 m by 11 m, as shown, with a rectangular corner of 6 m by 5 m missing. Find the floor area of the room.', answer: '124 m²', checkMode: 'auto', correctAnswer: '124', correctAnswers: ['124', '124 m²', '124m²'], explanation: 'Outer rectangle = 14 × 11 = 154 m²\nMissing corner = 6 × 5 = 30 m²\nFloor area = 154 − 30 = 124 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">11 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Hard', question: 'A house-shaped sign is made of a rectangle 16 cm wide and 8 cm tall, topped by a triangular roof with base 16 cm and height 5 cm, as shown. Find the total area of the sign.', answer: '168 cm²', checkMode: 'auto', correctAnswer: '168', correctAnswers: ['168', '168 cm²', '168cm²'], explanation: 'Rectangle area = 16 × 8 = 128 cm²\nTriangle area = ½ × 16 × 5 = 40 cm²\nTotal = 128 + 40 = 168 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="150.0" y="47.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">8 cm</text></svg>' },

        // ── Block 4: Surface area of prisms and cubes ────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 9 cm, as shown. Find its surface area.', answer: '486 cm²', checkMode: 'auto', correctAnswer: '486', correctAnswers: ['486', '486 cm²', '486cm²'], explanation: 'SA = 6l² = 6 × 9² = 6 × 81 = 486 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 12 cm long, 7 cm wide and 5 cm high, as shown. Find its surface area.', answer: '358 cm²', checkMode: 'auto', correctAnswer: '358', correctAnswers: ['358', '358 cm²', '358cm²'], explanation: 'SA = 2(lb + lh + bh) = 2(84 + 60 + 35) = 2(179) = 358 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A cube has a surface area of 216 cm². Find the length of its sides.', answer: '6 cm', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 cm', '6cm'], explanation: 'SA = 6l²\n216 = 6l²\nl² = 36\nl = √36 = 6 cm ✓' },

        // ── Block 5: Volume of prisms and cubes ──────────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 6 cm, as shown. Find its volume.', answer: '216 cm³', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 cm³', '216cm³'], explanation: 'V = l³ = 6³ = 216 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 11 cm long, 6 cm wide and 4 cm high, as shown. Find its volume.', answer: '264 cm³', checkMode: 'auto', correctAnswer: '264', correctAnswers: ['264', '264 cm³', '264cm³'], explanation: 'V = l × b × h = 11 × 6 × 4 = 264 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular prism has a volume of 180 cm³. Its length is 9 cm and its width is 5 cm. Find its height, as shown.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 cm', '4cm'], explanation: 'V = l × b × h\n180 = 9 × 5 × h\n180 = 45 × h\nh = 4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 180 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank in the shape of a rectangular prism is 2 m long, 1.5 m wide and 1 m high, as shown. Find its capacity in litres (1 m³ = 1 000 litres).', answer: '3000 litres', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', '3000 litres', '3000 l', '3 000 litres', '3 000'], explanation: 'V = l × b × h = 2 × 1.5 × 1 = 3 m³\nCapacity = 3 × 1 000 = 3 000 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">1.5 m</text></svg>' },

        // ── Block 6: Applied / multi-step word problems ──────────────────────
        { difficulty: 'Hard', question: 'A farmer wants to fence a rectangular field that is 26 m by 14 m, using wire that costs R18 per metre. Calculate the total cost of the wire.', answer: 'R1440', checkMode: 'auto', correctAnswer: 'R1440', correctAnswers: ['R1440', '1440', 'R1 440', '1 440'], explanation: 'Perimeter = 2 × (26 + 14) = 2 × 40 = 80 m\nCost = 80 × R18 = R1 440 ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 9 m by 4 m needs to be painted, except for a rectangular window measuring 2 m by 1.5 m, as shown. Find the area that needs to be painted.', answer: '33 m²', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33 m²', '33m²'], explanation: 'Wall area = 9 × 4 = 36 m²\nWindow area = 2 × 1.5 = 3 m²\nArea to paint = 36 − 3 = 33 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">4 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1.5 m</text></svg>' },
        { difficulty: 'Hard', question: 'Zanele says that a rectangular prism 8 cm by 5 cm by 3 cm has the same volume as a cube with sides of 5 cm. Is she correct? Show your working to explain.', answer: 'No — the prism has a volume of 8 × 5 × 3 = 120 cm³, while the cube has a volume of 5³ = 125 cm³. These are not equal, so Zanele is incorrect.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter, area, surface area and volume across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with these measurement skills — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Perimeter of polygons ──────────────────────────────────
        { difficulty: 'Easy', question: 'A regular nonagon (9 sides) has sides of 6 cm each, as shown. Find its perimeter.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 cm', '54cm'], explanation: 'A regular nonagon has 9 equal sides.\nP = 9 × 6 = 54 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 147.3,50.6 167.1,84.9 160.2,124 129.8,149.5 90.2,149.5 59.8,124 52.9,84.9 72.7,50.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="134.8" y="26.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular nonagon</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular parking area is 18 m long and 11 m wide, as shown. Calculate its perimeter.', answer: '58 m', checkMode: 'auto', correctAnswer: '58', correctAnswers: ['58', '58 m', '58m'], explanation: 'P = 2(l + b) = 2(18 + 11) = 2(29) = 58 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">11 m</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular sports court has a perimeter of 52 m. Its length is 17 m. Find its width, as shown.', answer: '9 m', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 m', '9m'], explanation: 'P = 2(l + b)\n52 = 2(17 + b)\n26 = 17 + b\nb = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },

        // ── Block 2: Area of rectangles, squares and triangles ──────────────
        { difficulty: 'Easy', question: 'A square patch of carpet has sides of 16 cm, as shown. Find its area.', answer: '256 cm²', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '256 cm²', '256cm²'], explanation: 'A = l² = 16² = 256 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangular notice board is 19 cm long and 9 cm wide, as shown. Find its area.', answer: '171 cm²', checkMode: 'auto', correctAnswer: '171', correctAnswers: ['171', '171 cm²', '171cm²'], explanation: 'A = l × b = 19 × 9 = 171 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular flag has a base of 24 cm and a height of 13 cm, as shown. Find its area.', answer: '156 cm²', checkMode: 'auto', correctAnswer: '156', correctAnswers: ['156', '156 cm²', '156cm²'], explanation: 'A = ½ × b × h = 0.5 × 24 × 13 = 156 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text><text x="156.0" y="90.0" font-size="14" fill="#7c3aed" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A square rug has an area of 225 cm². Find the length of its sides.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 cm', '15cm'], explanation: 'A = l²\n225 = l²\nl = √225 = 15 cm ✓' },

        // ── Block 3: Composite 2D figure area ────────────────────────────────
        { difficulty: 'Medium', question: 'A rectangular garden measures 20 m by 10 m, as shown. A rectangular pond measuring 6 m by 3 m is dug in one corner. Find the area of the garden not covered by the pond.', answer: '182 m²', checkMode: 'auto', correctAnswer: '182', correctAnswers: ['182', '182 m²', '182m²'], explanation: 'Garden area = 20 × 10 = 200 m²\nPond area = 6 × 3 = 18 m²\nRemaining = 200 − 18 = 182 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 16 m by 11 m, as shown, with a rectangular corner of 4 m by 4 m missing. Find the floor area of the room.', answer: '160 m²', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160 m²', '160m²'], explanation: 'Outer rectangle = 16 × 11 = 176 m²\nMissing corner = 4 × 4 = 16 m²\nFloor area = 176 − 16 = 160 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">11 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'A house-shaped sign is made of a rectangle 18 cm wide and 9 cm tall, topped by a triangular roof with base 18 cm and height 6 cm, as shown. Find the total area of the sign.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 cm²', '216cm²'], explanation: 'Rectangle area = 18 × 9 = 162 cm²\nTriangle area = ½ × 18 × 6 = 54 cm²\nTotal = 162 + 54 = 216 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="150.0" y="47.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">9 cm</text></svg>' },

        // ── Block 4: Surface area of prisms and cubes ────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 8 cm, as shown. Find its surface area.', answer: '384 cm²', checkMode: 'auto', correctAnswer: '384', correctAnswers: ['384', '384 cm²', '384cm²'], explanation: 'SA = 6l² = 6 × 8² = 6 × 64 = 384 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 10 cm long, 8 cm wide and 6 cm high, as shown. Find its surface area.', answer: '376 cm²', checkMode: 'auto', correctAnswer: '376', correctAnswers: ['376', '376 cm²', '376cm²'], explanation: 'SA = 2(lb + lh + bh) = 2(80 + 60 + 48) = 2(188) = 376 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A cube has a surface area of 294 cm². Find the length of its sides.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 cm', '7cm'], explanation: 'SA = 6l²\n294 = 6l²\nl² = 49\nl = √49 = 7 cm ✓' },

        // ── Block 5: Volume of prisms and cubes ──────────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 9 cm, as shown. Find its volume.', answer: '729 cm³', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '729 cm³', '729cm³'], explanation: 'V = l³ = 9³ = 729 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 13 cm long, 5 cm wide and 3 cm high, as shown. Find its volume.', answer: '195 cm³', checkMode: 'auto', correctAnswer: '195', correctAnswers: ['195', '195 cm³', '195cm³'], explanation: 'V = l × b × h = 13 × 5 × 3 = 195 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular prism has a volume of 300 cm³. Its length is 10 cm and its width is 6 cm. Find its height, as shown.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 cm', '5cm'], explanation: 'V = l × b × h\n300 = 10 × 6 × h\n300 = 60 × h\nh = 5 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 300 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank in the shape of a rectangular prism is 2.5 m long, 2 m wide and 1 m high, as shown. Find its capacity in litres (1 m³ = 1 000 litres).', answer: '5000 litres', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5000 litres', '5000 l', '5 000 litres', '5 000'], explanation: 'V = l × b × h = 2.5 × 2 × 1 = 5 m³\nCapacity = 5 × 1 000 = 5 000 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">2 m</text></svg>' },

        // ── Block 6: Applied / multi-step word problems ──────────────────────
        { difficulty: 'Hard', question: 'A school wants to fence a rectangular field that is 30 m by 20 m, using wire that costs R14 per metre. Calculate the total cost of the wire.', answer: 'R1400', checkMode: 'auto', correctAnswer: 'R1400', correctAnswers: ['R1400', '1400', 'R1 400', '1 400'], explanation: 'Perimeter = 2 × (30 + 20) = 2 × 50 = 100 m\nCost = 100 × R14 = R1 400 ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 8 m by 3 m needs to be painted, except for a rectangular door measuring 2 m by 1 m, as shown. Find the area that needs to be painted.', answer: '22 m²', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 m²', '22m²'], explanation: 'Wall area = 8 × 3 = 24 m²\nDoor area = 2 × 1 = 2 m²\nArea to paint = 24 − 2 = 22 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">3 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1 m</text></svg>' },
        { difficulty: 'Hard', question: 'Tumi says that a rectangular prism 10 cm by 4 cm by 3 cm has a greater volume than a cube with sides of 5 cm. Is he correct? Show your working to explain.', answer: 'No — the prism has a volume of 10 × 4 × 3 = 120 cm³, while the cube has a volume of 5³ = 125 cm³. The cube has the greater volume, so Tumi is incorrect.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter, area, surface area and volume across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with these measurement skills — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Perimeter of polygons ──────────────────────────────────
        { difficulty: 'Easy', question: 'A regular decagon (10 sides) has sides of 5 cm each, as shown. Find its perimeter.', answer: '50 cm', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 cm', '50cm'], explanation: 'A regular decagon has 10 equal sides.\nP = 10 × 5 = 50 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 144.1,48.1 165.2,77.1 165.2,112.9 144.1,141.9 110,153 75.9,141.9 54.8,112.9 54.8,77.1 75.9,48.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="132.6" y="25.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular decagon</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular courtyard is 21 m long and 13 m wide, as shown. Calculate its perimeter.', answer: '68 m', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68 m', '68m'], explanation: 'P = 2(l + b) = 2(21 + 13) = 2(34) = 68 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">21 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">13 m</text></svg>' },
        { difficulty: 'Medium', question: 'An irregular quadrilateral has sides of 10 cm, 14 cm, 8 cm and 12 cm, as shown. Find its perimeter.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44', '44 cm', '44cm'], explanation: 'Add all four sides: P = 10 + 14 + 8 + 12 = 44 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 35,55 160,30 180,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="21.5" y="56.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="83.5" y="41.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="194" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="102" y="164" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },

        // ── Block 2: Area of rectangles, squares and triangles ──────────────
        { difficulty: 'Easy', question: 'A square placemat has sides of 18 cm, as shown. Find its area.', answer: '324 cm²', checkMode: 'auto', correctAnswer: '324', correctAnswers: ['324', '324 cm²', '324cm²'], explanation: 'A = l² = 18² = 324 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangular door panel is 23 cm long and 7 cm wide, as shown. Find its area.', answer: '161 cm²', checkMode: 'auto', correctAnswer: '161', correctAnswers: ['161', '161 cm²', '161cm²'], explanation: 'A = l × b = 23 × 7 = 161 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">23 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular banner has a base of 18 cm and a height of 15 cm, as shown. Find its area.', answer: '135 cm²', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 cm²', '135cm²'], explanation: 'A = ½ × b × h = 0.5 × 18 × 15 = 135 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="156.0" y="90.0" font-size="14" fill="#7c3aed" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular floor mat has an area of 210 cm². Its width is 14 cm. Find its length, as shown.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 cm', '15cm'], explanation: 'A = l × b\n210 = l × 14\nl = 210 ÷ 14 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">14 cm</text><text x="110.0" y="70" font-size="12" fill="#374151" text-anchor="middle">Area = 210 cm²</text></svg>' },

        // ── Block 3: Composite 2D figure area ────────────────────────────────
        { difficulty: 'Medium', question: 'A rectangular garden measures 22 m by 14 m, as shown. A rectangular patio measuring 7 m by 5 m is built in one corner. Find the area of the garden not covered by the patio.', answer: '273 m²', checkMode: 'auto', correctAnswer: '273', correctAnswers: ['273', '273 m²', '273m²'], explanation: 'Garden area = 22 × 14 = 308 m²\nPatio area = 7 × 5 = 35 m²\nRemaining = 308 − 35 = 273 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">14 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">7 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 18 m by 13 m, as shown, with a rectangular corner of 8 m by 6 m missing. Find the floor area of the room.', answer: '186 m²', checkMode: 'auto', correctAnswer: '186', correctAnswers: ['186', '186 m²', '186m²'], explanation: 'Outer rectangle = 18 × 13 = 234 m²\nMissing corner = 8 × 6 = 48 m²\nFloor area = 234 − 48 = 186 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">13 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'A house-shaped sign is made of a rectangle 20 cm wide and 10 cm tall, topped by a triangular roof with base 20 cm and height 7 cm, as shown. Find the total area of the sign.', answer: '270 cm²', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270', '270 cm²', '270cm²'], explanation: 'Rectangle area = 20 × 10 = 200 cm²\nTriangle area = ½ × 20 × 7 = 70 cm²\nTotal = 200 + 70 = 270 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="150.0" y="47.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">10 cm</text></svg>' },

        // ── Block 4: Surface area of prisms and cubes ────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 10 cm, as shown. Find its surface area.', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600 cm²', '600cm²'], explanation: 'SA = 6l² = 6 × 10² = 6 × 100 = 600 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">10 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 14 cm long, 9 cm wide and 4 cm high, as shown. Find its surface area.', answer: '436 cm²', checkMode: 'auto', correctAnswer: '436', correctAnswers: ['436', '436 cm²', '436cm²'], explanation: 'SA = 2(lb + lh + bh) = 2(126 + 56 + 36) = 2(218) = 436 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A cube has a surface area of 150 cm². Find the length of its sides.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 cm', '5cm'], explanation: 'SA = 6l²\n150 = 6l²\nl² = 25\nl = √25 = 5 cm ✓' },

        // ── Block 5: Volume of prisms and cubes ──────────────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 12 cm, as shown. Find its volume.', answer: '1728 cm³', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '1728 cm³', '1728cm³'], explanation: 'V = l³ = 12³ = 1 728 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular prism is 15 cm long, 7 cm wide and 2 cm high, as shown. Find its volume.', answer: '210 cm³', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210 cm³', '210cm³'], explanation: 'V = l × b × h = 15 × 7 × 2 = 210 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular prism has a volume of 192 cm³. Its length is 8 cm and its width is 6 cm. Find its height, as shown.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 cm', '4cm'], explanation: 'V = l × b × h\n192 = 8 × 6 × h\n192 = 48 × h\nh = 4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 192 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank in the shape of a rectangular prism is 3 m long, 1.5 m wide and 1 m high, as shown. Find its capacity in litres (1 m³ = 1 000 litres).', answer: '4500 litres', checkMode: 'auto', correctAnswer: '4500', correctAnswers: ['4500', '4500 litres', '4500 l', '4 500 litres', '4 500'], explanation: 'V = l × b × h = 3 × 1.5 × 1 = 4.5 m³\nCapacity = 4.5 × 1 000 = 4 500 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="192.0" y="33.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">1.5 m</text></svg>' },

        // ── Block 6: Applied / multi-step word problems ──────────────────────
        { difficulty: 'Hard', question: 'A community wants to fence a rectangular playground that is 24 m by 16 m, using wire that costs R20 per metre. Calculate the total cost of the wire.', answer: 'R1600', checkMode: 'auto', correctAnswer: 'R1600', correctAnswers: ['R1600', '1600', 'R1 600', '1 600'], explanation: 'Perimeter = 2 × (24 + 16) = 2 × 40 = 80 m\nCost = 80 × R20 = R1 600 ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 10 m by 3.5 m needs to be painted, except for a rectangular window measuring 2.5 m by 1.5 m, as shown. Find the area that needs to be painted.', answer: '31.25 m²', checkMode: 'auto', correctAnswer: '31.25', correctAnswers: ['31.25', '31.25 m²', '31.25m²'], explanation: 'Wall area = 10 × 3.5 = 35 m²\nWindow area = 2.5 × 1.5 = 3.75 m²\nArea to paint = 35 − 3.75 = 31.25 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">3.5 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1.5 m</text></svg>' },
        { difficulty: 'Hard', question: 'Karabo says that a cube with sides of 6 cm has double the volume of a rectangular prism 9 cm by 4 cm by 3 cm. Is he correct? Show your working to explain.', answer: 'Yes — the cube has a volume of 6³ = 216 cm³, while the prism has a volume of 9 × 4 × 3 = 108 cm³. Since 216 = 2 × 108, the cube does have exactly double the volume of the prism, so Karabo is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter, area, surface area and volume across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with these measurement skills — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
