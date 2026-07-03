import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D objects roles) ───────────────────────────────────────
// length        → blue   (#2563eb)
// width         → red    (#dc2626)
// height        → green  (#16a34a)
// surface area  → orange (#ea580c)
// formula       → green  (#16a34a)
// dimensions    → blue   (#2563eb)
// final answer  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D Objects',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area',
      title: 'Surface Area',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Surface area is the <strong>total area of all the faces</strong> of a 3D object added together. To find the surface area of a rectangular prism we find the area of each of the 6 faces and add them together, or use the formula ${or('SA')} = 2(${bl('l')}${re('w')} + ${bl('l')}${gr('h')} + ${re('w')}${gr('h')}). For a cube, ${or('SA')} = 6 × ${bl('side')}².</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('length')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('width')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('height')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('surface area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Rectangular Prism</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${or('SA')} = 2(${bl('l')}${re('w')} + ${bl('l')}${gr('h')} + ${re('w')}${gr('h')})</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Add the areas of all 6 faces and multiply by 2 because opposite faces are equal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Cube</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${or('SA')} = 6 × ${bl('side')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">All 6 faces are identical squares, so multiply one face area by 6.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why surface area matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Surface area tells us how much material is needed to wrap or cover a 3D object — for example, how much cardboard is needed to make a box, or how much paint is needed to cover a wall.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the surface area of a rectangular prism that is 8 cm long, 5 cm wide and 4 cm high.',
          answer: `${or('SA')} = ${or('184 cm²')}`,
          steps: [
            `Write the formula: ${or('SA')} = 2(${bl('l')}${re('w')} + ${bl('l')}${gr('h')} + ${re('w')}${gr('h')})`,
            `Substitute the values: ${bl('l')} = ${bl('8')}, ${re('w')} = ${re('5')}, ${gr('h')} = ${gr('4')}<br>${or('SA')} = 2(${bl('8')} × ${re('5')} + ${bl('8')} × ${gr('4')} + ${re('5')} × ${gr('4')})`,
            `Calculate each term inside the brackets:<br>${bl('8')} × ${re('5')} = 40 &nbsp;|&nbsp; ${bl('8')} × ${gr('4')} = 32 &nbsp;|&nbsp; ${re('5')} × ${gr('4')} = 20`,
            `Add the three products: 40 + 32 + 20 = 92`,
            `Multiply by 2: ${or('SA')} = 2 × 92 = ${or('184 cm²')}`,
          ],
        },
        {
          question: 'Find the surface area of a cube with sides of 6 cm.',
          answer: `${or('SA')} = ${or('216 cm²')}`,
          steps: [
            `Write the formula: ${or('SA')} = 6 × ${bl('side')}²`,
            `Substitute the value: ${bl('side')} = ${bl('6')}<br>${or('SA')} = 6 × ${bl('6')}²`,
            `Calculate the square: ${bl('6')}² = ${bl('36')}`,
            `Multiply by 6: ${or('SA')} = 6 × ${bl('36')} = ${or('216 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — cube surface area ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the surface area of a cube with sides of 4 cm.',
          answer: '96 cm²',
          checkMode: 'auto',
          correctAnswer: '96',
          correctAnswers: ['96', '96cm²', '96 cm²'],
          explanation: 'SA = 6 × side²\n= 6 × 4²\n= 6 × 16\n= 96 cm²',
        },

        // ── Q2 Medium — rectangular prism surface area ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the surface area of a rectangular prism 6 cm by 4 cm by 3 cm.',
          answer: '108 cm²',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108cm²', '108 cm²'],
          explanation: 'SA = 2(lw + lh + wh)\n= 2(6 × 4 + 6 × 3 + 4 × 3)\n= 2(24 + 18 + 12)\n= 2 × 54\n= 108 cm²',
        },

        // ── Q3 Hard — surface area error check ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates the surface area of a 5 cm cube and gets 125 cm². Check his answer and explain the mistake.',
          answer: 'He calculated volume (5³ = 125) instead of surface area. Surface area = 6 × 5² = 6 × 25 = 150 cm².',
          checkMode: 'self',
        },

        // ── Q9 Medium — larger rectangular prism surface area ─────────────────
        {
          difficulty: 'Medium',
          question: 'Find the surface area of a rectangular prism 12 cm by 8 cm by 5 cm.',
          answer: '392 cm²',
          checkMode: 'auto',
          correctAnswer: '392',
          correctAnswers: ['392', '392cm²', '392 cm²'],
          explanation: 'SA = 2(lw + lh + wh)\n= 2(12 × 8 + 12 × 5 + 8 × 5)\n= 2(96 + 60 + 40)\n= 2 × 196\n= 392 cm²',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a rectangular prism with length blue, width red and height green labelled, showing all 6 faces and the surface area formula" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the surface area of a rectangular prism and a cube using the formulas with colour coded dimensions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume',
      title: 'Volume',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Volume is the <strong>amount of space a 3D object takes up</strong>, measured in cubic units (cm³, m³). For a rectangular prism, ${gr('Volume')} = ${bl('length')} × ${bl('width')} × ${bl('height')}. For a cylinder, ${gr('Volume')} = π × ${bl('radius')}² × ${bl('height')}, where π is approximately 3.14.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('formula')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Rectangular Prism</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${gr('V')} = ${bl('l')} × ${bl('w')} × ${bl('h')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Multiply ${bl('length')} by ${bl('width')} by ${bl('height')}. Answer is in cubic units.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Cylinder</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${gr('V')} = π × ${bl('r')}² × ${bl('h')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Use π ≈ 3.14. Square the ${bl('radius')}, then multiply by π and ${bl('height')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Cubic units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Volume is always expressed in <strong>cubic units</strong> (cm³, m³, mm³). A cubic centimetre (cm³) is the space taken up by a cube with sides of 1 cm. When all dimensions are in centimetres, the volume will be in cm³.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the volume of a rectangular prism that is 10 cm long, 6 cm wide and 4 cm high.',
          answer: `${or('Volume = 240 cm³')}`,
          steps: [
            `Write the formula: ${gr('V')} = ${bl('l')} × ${bl('w')} × ${bl('h')}`,
            `Substitute the values: ${bl('l')} = ${bl('10')}, ${bl('w')} = ${bl('6')}, ${bl('h')} = ${bl('4')}<br>${gr('V')} = ${bl('10')} × ${bl('6')} × ${bl('4')}`,
            `Multiply step by step: ${bl('10')} × ${bl('6')} = 60, then 60 × ${bl('4')} = ${or('240')}`,
            `<strong>Answer:</strong> ${gr('V')} = ${or('240 cm³')}`,
          ],
        },
        {
          question: 'Find the volume of a cylinder with radius 3 cm and height 10 cm. Use π = 3.14.',
          answer: `${or('Volume = 282.6 cm³')}`,
          steps: [
            `Write the formula: ${gr('V')} = π × ${bl('r')}² × ${bl('h')}`,
            `Substitute the values: π = 3.14, ${bl('r')} = ${bl('3')}, ${bl('h')} = ${bl('10')}<br>${gr('V')} = 3.14 × ${bl('3')}² × ${bl('10')}`,
            `Calculate the square: ${bl('3')}² = ${bl('9')}`,
            `Multiply step by step: 3.14 × ${bl('9')} = 28.26, then 28.26 × ${bl('10')} = ${or('282.6')}`,
            `<strong>Answer:</strong> ${gr('V')} = ${or('282.6 cm³')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — rectangular prism volume ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the volume of a rectangular prism 5 cm by 4 cm by 3 cm.',
          answer: '60 cm³',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60cm³', '60 cm³'],
          explanation: 'V = l × w × h\n= 5 × 4 × 3\n= 60 cm³',
        },

        // ── Q5 Medium — cube volume ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the volume of a cube with sides of 7 cm.',
          answer: '343 cm³',
          checkMode: 'auto',
          correctAnswer: '343',
          correctAnswers: ['343', '343cm³', '343 cm³'],
          explanation: 'V = side³\n= 7³\n= 7 × 7 × 7\n= 343 cm³',
        },

        // ── Q6 Hard — volume doubling misconception ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says doubling all the dimensions of a rectangular prism doubles its volume. Is she correct? Explain.',
          answer: 'No — doubling all three dimensions multiplies the volume by 2 × 2 × 2 = 8, not just 2.',
          checkMode: 'self',
        },

        // ── Q7 Medium — cylinder volume ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the volume of a cylinder with radius 4 cm and height 9 cm. Use π = 3.14.',
          answer: '452.16 cm³',
          checkMode: 'auto',
          correctAnswer: '452.16',
          correctAnswers: ['452.16', '452.16cm³', '452.16 cm³'],
          explanation: 'V = π × r² × h\n= 3.14 × 4² × 9\n= 3.14 × 16 × 9\n= 3.14 × 144\n= 452.16 cm³',
        },

        // ── Q8 Hard — cylinder tank word problem ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A water tank is a cylinder with radius 2 m and height 5 m. Find its volume to the nearest whole number. Use π = 3.14.',
          answer: '63 m³',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63m³', '63 m³'],
          explanation: 'V = π × r² × h\n= 3.14 × 2² × 5\n= 3.14 × 4 × 5\n= 3.14 × 20\n= 62.8 m³\nRounded to the nearest whole number: 63 m³',
        },

        // ── Q10 Hard — packing problem ────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo packs a box 20 cm by 15 cm by 10 cm with smaller cubes of 5 cm sides. How many small cubes fit in the box? What is the volume of the large box?',
          answer: 'Box volume = 20 × 15 × 10 = 3 000 cm³.\nCube volume = 5³ = 125 cm³.\nNumber of cubes = 3 000 ÷ 125 = 24.\na) 24 small cubes fit. b) Volume of the large box = 3 000 cm³.',
          checkMode: 'self',
        },

        // ── Q11 Medium — cylinder volume ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the volume of a cylinder with radius 5 cm and height 12 cm. Use π = 3.14.',
          answer: '942 cm³',
          checkMode: 'auto',
          correctAnswer: '942',
          correctAnswers: ['942', '942cm³', '942 cm³'],
          explanation: 'V = π × r² × h\n= 3.14 × 5² × 12\n= 3.14 × 25 × 12\n= 3.14 × 300\n= 942 cm³',
        },

        // ── Q12 Hard — same volume different surface area ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says a cube and a rectangular prism with the same volume always have the same surface area. Is she correct? Explain.',
          answer: 'No — for the same volume, different dimension combinations can give different surface areas. Surface area depends on the specific shape and dimensions, not just the total volume.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rectangular prism and a cylinder side by side with dimensions labelled in blue and volume formulas in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the volume of a rectangular prism and a cylinder using the formulas with colour coded steps" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered 3D objects.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
