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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 Naming/classifying by base | 4-7 Counting V/E/F of named solids |
    // 8-11 Euler's formula | 12-15 Nets (12,14 diagram-flagged) |
    // 16-18 Cross-sections of prisms | 19-20 Prism vs pyramid / multi-step
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid has two identical, parallel heptagonal (7-sided) bases joined by 7 rectangular faces. What is this solid called?', answer: 'heptagonal prism', checkMode: 'auto', correctAnswer: 'heptagonalprism', correctAnswers: ['heptagonalprism', 'heptagonal prism'], explanation: 'A solid with two identical parallel bases and rectangular lateral faces is a prism. The base has 7 sides, so it is a heptagonal prism ✓' },
        { difficulty: 'Easy', question: 'A solid has one octagonal (8-sided) base and 8 triangular faces that all meet at a single apex. What is this solid called?', answer: 'octagonal pyramid', checkMode: 'auto', correctAnswer: 'octagonalpyramid', correctAnswers: ['octagonalpyramid', 'octagonal pyramid'], explanation: 'A solid with one base and triangular faces meeting at a single apex is a pyramid. The base has 8 sides, so it is an octagonal pyramid ✓' },
        { difficulty: 'Medium', question: 'Zanele is classifying two solids for a project. Solid A has 2 parallel pentagonal bases and rectangular lateral faces. Solid B has 1 pentagonal base and triangular lateral faces meeting at an apex. Name each solid.', answer: 'Solid A: pentagonal prism. Solid B: pentagonal pyramid.', checkMode: 'auto', correctAnswer: 'pentagonalprismpentagonalpyramid', correctAnswers: ['pentagonalprismpentagonalpyramid', 'prismpyramid', 'pentagonal prism, pentagonal pyramid'], explanation: 'Two parallel identical bases + rectangular lateral faces = prism, named by its base (pentagon) → pentagonal prism.\nOne base + triangular lateral faces meeting at an apex = pyramid, named by its base (pentagon) → pentagonal pyramid ✓' },

        // Block B: counting V/E/F of named solids (4-7)
        { difficulty: 'Easy', question: 'How many faces does a hexagonal prism have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A hexagonal prism has a 6-sided base.\nFaces = base sides + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a pentagonal pyramid have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A pentagonal pyramid has a 5-sided base.\nVertices = base sides + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'A gift box is shaped like a triangular prism. How many edges does it have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'A triangular prism has a 3-sided base.\nEdges = base sides × 3 = 3 × 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a square pyramid has 6 faces, since "a square has 4 sides plus a top and bottom." Is the learner correct? State the actual number of faces.', answer: 'No, the learner is incorrect. A square pyramid has only 5 faces: 1 square base and 4 triangular side faces. There is no "top" face — the triangles meet directly at the apex, so there is no second base like in a prism.', checkMode: 'self' },

        // Block C: Euler's formula (8-11)
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F − E + V = 2) for an octagonal prism. State F, E and V.', answer: 'F = 10, E = 24, V = 16. F − E + V = 10 − 24 + 16 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A hexagonal pyramid has F = 7 and V = 7. Use Euler\'s formula to find E.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'F − E + V = 2\n7 − E + 7 = 2\n14 − E = 2\nE = 12 ✓\nCheck: a hexagon base has 6 sides, so E = 6 × 2 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'A learner states that a nonagonal prism has F = 11, E = 27, V = 16. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'V=18', 'v18'], explanation: 'A nonagonal prism has a 9-sided base.\nF = 9 + 2 = 11, E = 9 × 3 = 27, V = 9 × 2 = 18.\nThe learner\'s numbers give 11 − 27 + 16 = 0, not 2 — wrong.\nV should be 18, not 16.\nCheck: 11 − 27 + 18 = 2 ✓' },
        { difficulty: 'Hard', question: 'A decagonal pyramid (10-sided base) is being checked with Euler\'s formula. Find F, E and V, and show the formula holds.', answer: 'F = 11, E = 20, V = 11. F − E + V = 11 − 20 + 11 = 2 ✓', checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 hexagons and 6 rectangles arranged as shown, where the two hexagons form opposite ends and the 6 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'hexagonal prism', checkMode: 'auto', correctAnswer: 'hexagonalprism', correctAnswers: ['hexagonalprism', 'hexagonal prism'], explanation: 'The net has 2 identical hexagonal bases and 6 rectangular side faces, matching a hexagonal prism (F = 6 + 2 = 8, made of 2 hexagons + 6 rectangles) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="94" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="118" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="142" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="166" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="58" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="82" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="106" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="130" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><text x="154" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><text x="178" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">6</text><polygon points="46,95 34,83 12,83 0,95 12,107 34,107" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="23" y="99" font-size="10" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Describe the net of a heptagonal pyramid — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 8 shapes in total: 1 heptagon (the base) and 7 triangles (the side faces). The heptagon sits in the centre with one triangle attached to each of its 7 sides — when folded, the triangles rise up and their free vertices meet at the apex.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 square and 4 triangles arranged as shown, where the square sits in the centre and one triangle is attached to each of the square\'s four sides. Which solid does this net fold into?', answer: 'square pyramid', checkMode: 'auto', correctAnswer: 'squarepyramid', correctAnswers: ['squarepyramid', 'square pyramid'], explanation: 'The net has 1 square base with 4 triangles folding up to meet at a single apex, matching a square pyramid (F = 4 + 1 = 5) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="85" y="70" width="50" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="99" font-size="12" text-anchor="middle" fill="#0f1f3d">1</text><polygon points="85,70 135,70 110,35" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><polygon points="85,120 135,120 110,155" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="130" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><polygon points="85,70 85,120 50,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="76" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><polygon points="135,70 135,120 170,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="144" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text></svg>' },
        { difficulty: 'Hard', question: 'A learner draws a net for a hexagonal prism using 2 hexagons and 5 rectangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A hexagonal prism has F = 6 + 2 = 8 faces: 2 hexagonal bases and 6 rectangular side faces. The learner\'s net has only 5 rectangles instead of 6, so it is one rectangular face short and cannot fold into a closed hexagonal prism.', checkMode: 'self' },

        // Block E: cross-sections of prisms (16-18)
        { difficulty: 'Hard', question: 'A rectangular prism is sliced by a plane parallel to its rectangular base, cutting straight across the prism. What shape is the cross-section?', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a rectangle, the cross-section is a rectangle ✓' },
        { difficulty: 'Hard', question: 'A triangular prism lying on its rectangular side is sliced straight down, perpendicular to its triangular base, all the way through. What shape is the cross-section?', answer: 'A rectangle — slicing perpendicular to the triangular ends cuts straight through the rectangular side faces, producing a rectangular cross-section (its width equals the prism\'s length and its height depends on where the cut is made through the triangle).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A hexagonal prism is cut by a plane parallel to its hexagonal base. What shape will the resulting cross-section be, and why?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'a hexagon'], explanation: 'Cutting a prism parallel to its base always produces a cross-section identical in shape to that base, because the prism has the same cross-sectional shape all the way along its length. Since the base is a hexagon, the cross-section is a hexagon ✓' },

        // Block F: prism vs pyramid / multi-step reasoning (19-20)
        { difficulty: 'Hard', question: 'A heptagonal prism and a heptagonal pyramid both have a 7-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Heptagonal prism: F = 9, E = 21, V = 14. Heptagonal pyramid: F = 8, E = 14, V = 8. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A display stand designer is comparing an octagonal prism and an octagonal pyramid, both with an 8-sided base. The stand with fewer edges will use less trim material. Find the number of edges for each solid, and state which one needs less trim.', answer: 'octagonal pyramid, 16 edges', checkMode: 'auto', correctAnswer: 'octagonalpyramid16', correctAnswers: ['octagonalpyramid16', 'octagonalpyramid', 'pyramid16'], explanation: 'Octagonal prism: E = base sides × 3 = 8 × 3 = 24.\nOctagonal pyramid: E = base sides × 2 = 8 × 2 = 16.\n16 < 24, so the octagonal pyramid needs less trim material — 16 edges ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying 3D objects, Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid has two identical, parallel nonagonal (9-sided) bases joined by 9 rectangular faces. What is this solid called?', answer: 'nonagonal prism', checkMode: 'auto', correctAnswer: 'nonagonalprism', correctAnswers: ['nonagonalprism', 'nonagonal prism'], explanation: 'A solid with two identical parallel bases and rectangular lateral faces is a prism. The base has 9 sides, so it is a nonagonal prism ✓' },
        { difficulty: 'Easy', question: 'A solid has one heptagonal (7-sided) base and 7 triangular faces that all meet at a single apex. What is this solid called?', answer: 'heptagonal pyramid', checkMode: 'auto', correctAnswer: 'heptagonalpyramid', correctAnswers: ['heptagonalpyramid', 'heptagonal pyramid'], explanation: 'A solid with one base and triangular faces meeting at a single apex is a pyramid. The base has 7 sides, so it is a heptagonal pyramid ✓' },
        { difficulty: 'Medium', question: 'Kabelo is classifying two solids for a display. Solid A has 2 parallel octagonal bases and rectangular lateral faces. Solid B has 1 octagonal base and triangular lateral faces meeting at an apex. Name each solid.', answer: 'Solid A: octagonal prism. Solid B: octagonal pyramid.', checkMode: 'auto', correctAnswer: 'octagonalprismoctagonalpyramid', correctAnswers: ['octagonalprismoctagonalpyramid', 'prismpyramid', 'octagonal prism, octagonal pyramid'], explanation: 'Two parallel identical bases + rectangular lateral faces = prism, named by its base (octagon) → octagonal prism.\nOne base + triangular lateral faces meeting at an apex = pyramid, named by its base (octagon) → octagonal pyramid ✓' },

        // Block B: counting V/E/F of named solids (4-7)
        { difficulty: 'Easy', question: 'How many faces does a heptagonal prism have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'A heptagonal prism has a 7-sided base.\nFaces = base sides + 2 = 7 + 2 = 9 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a hexagonal pyramid have?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'A hexagonal pyramid has a 6-sided base.\nVertices = base sides + 1 = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'A jewellery box is shaped like a triangular prism. How many vertices does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A triangular prism has a 3-sided base.\nVertices = base sides × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a triangular prism has 4 faces, since "a triangle has 3 sides plus a bottom." Is the learner correct? State the actual number of faces.', answer: 'No, the learner is incorrect. A triangular prism has 5 faces: 2 triangular bases (not just 1) and 3 rectangular side faces. The learner forgot that a prism has two identical bases — a top and a bottom triangle — not just one.', checkMode: 'self' },

        // Block C: Euler's formula (8-11)
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F − E + V = 2) for a nonagonal prism. State F, E and V.', answer: 'F = 11, E = 27, V = 18. F − E + V = 11 − 27 + 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A heptagonal pyramid has F = 8 and V = 8. Use Euler\'s formula to find E.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'F − E + V = 2\n8 − E + 8 = 2\n16 − E = 2\nE = 14 ✓\nCheck: a heptagon base has 7 sides, so E = 7 × 2 = 14 ✓' },
        { difficulty: 'Medium-Hard', question: 'A learner states that a decagonal prism has F = 12, E = 30, V = 18. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'V=20', 'v20'], explanation: 'A decagonal prism has a 10-sided base.\nF = 10 + 2 = 12, E = 10 × 3 = 30, V = 10 × 2 = 20.\nThe learner\'s numbers give 12 − 30 + 18 = 0, not 2 — wrong.\nV should be 20, not 18.\nCheck: 12 − 30 + 20 = 2 ✓' },
        { difficulty: 'Hard', question: 'A nonagonal pyramid (9-sided base) is being checked with Euler\'s formula. Find F, E and V, and show the formula holds.', answer: 'F = 10, E = 18, V = 10. F − E + V = 10 − 18 + 10 = 2 ✓', checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 pentagons and 5 rectangles arranged as shown, where the two pentagons form opposite ends and the 5 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'pentagonal prism', checkMode: 'auto', correctAnswer: 'pentagonalprism', correctAnswers: ['pentagonalprism', 'pentagonal prism'], explanation: 'The net has 2 identical pentagonal bases and 5 rectangular side faces, matching a pentagonal prism (F = 5 + 2 = 7, made of 2 pentagons + 5 rectangles) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="56" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="84" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="112" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="140" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="70" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="98" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="126" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="154" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><text x="182" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><polygon points="56,70 56,120 26,113 14,95 26,77" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="30" y="99" font-size="10" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Describe the net of an octagonal pyramid — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 9 shapes in total: 1 octagon (the base) and 8 triangles (the side faces). The octagon sits in the centre with one triangle attached to each of its 8 sides — when folded, the triangles rise up and their free vertices meet at the apex.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 triangle and 3 triangles (4 triangles total, all the same size) arranged as shown, where one triangle sits in the centre and the other three are attached to each of its three sides. Which solid does this net fold into?', answer: 'triangular pyramid', checkMode: 'auto', correctAnswer: 'triangularpyramid', correctAnswers: ['triangularpyramid', 'triangular pyramid'], explanation: 'The net has 4 triangles in total — 1 base triangle with 3 side triangles folding up to meet at a single apex, matching a triangular pyramid (F = 3 + 1 = 4) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,60 75,121 145,121" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="103" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><polygon points="75,121 145,121 110,182" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="150" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><polygon points="110,60 75,121 41,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="76" y="90" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><polygon points="110,60 145,121 179,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="144" y="90" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text></svg>' },
        { difficulty: 'Hard', question: 'A learner draws a net for a pentagonal prism using 2 pentagons and 4 rectangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A pentagonal prism has F = 5 + 2 = 7 faces: 2 pentagonal bases and 5 rectangular side faces. The learner\'s net has only 4 rectangles instead of 5, so it is one rectangular face short and cannot fold into a closed pentagonal prism.', checkMode: 'self' },

        // Block E: cross-sections of prisms (16-18)
        { difficulty: 'Hard', question: 'A triangular prism is sliced by a plane parallel to its triangular base, cutting straight across the prism. What shape is the cross-section?', answer: 'triangle', checkMode: 'auto', correctAnswer: 'triangle', correctAnswers: ['triangle', 'a triangle'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a triangle, the cross-section is a triangle ✓' },
        { difficulty: 'Hard', question: 'A rectangular prism (box) is sliced straight down, perpendicular to its rectangular base, all the way through, cutting parallel to one of its shorter side faces. What shape is the cross-section?', answer: 'A rectangle — slicing perpendicular to the base and parallel to a side face cuts straight through the box, producing a rectangular cross-section whose dimensions are the height of the prism and the width of the face being cut through.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A pentagonal prism is cut by a plane parallel to its pentagonal base. What shape will the resulting cross-section be, and why?', answer: 'pentagon', checkMode: 'auto', correctAnswer: 'pentagon', correctAnswers: ['pentagon', 'a pentagon'], explanation: 'Cutting a prism parallel to its base always produces a cross-section identical in shape to that base, because the prism has the same cross-sectional shape all the way along its length. Since the base is a pentagon, the cross-section is a pentagon ✓' },

        // Block F: prism vs pyramid / multi-step reasoning (19-20)
        { difficulty: 'Hard', question: 'A nonagonal prism and a nonagonal pyramid both have a 9-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Nonagonal prism: F = 11, E = 27, V = 18. Nonagonal pyramid: F = 10, E = 18, V = 10. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A packaging designer is comparing a heptagonal prism and a heptagonal pyramid, both with a 7-sided base. The package with fewer vertices will need fewer reinforced corners. Find the number of vertices for each solid, and state which one needs fewer reinforced corners.', answer: 'heptagonal pyramid, 8 vertices', checkMode: 'auto', correctAnswer: 'heptagonalpyramid8', correctAnswers: ['heptagonalpyramid8', 'heptagonalpyramid', 'pyramid8'], explanation: 'Heptagonal prism: V = base sides × 2 = 7 × 2 = 14.\nHeptagonal pyramid: V = base sides + 1 = 7 + 1 = 8.\n8 < 14, so the heptagonal pyramid needs fewer reinforced corners — 8 vertices ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently classify 3D objects and work with Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid has two identical, parallel decagonal (10-sided) bases joined by 10 rectangular faces. What is this solid called?', answer: 'decagonal prism', checkMode: 'auto', correctAnswer: 'decagonalprism', correctAnswers: ['decagonalprism', 'decagonal prism'], explanation: 'A solid with two identical parallel bases and rectangular lateral faces is a prism. The base has 10 sides, so it is a decagonal prism ✓' },
        { difficulty: 'Easy', question: 'A solid has one nonagonal (9-sided) base and 9 triangular faces that all meet at a single apex. What is this solid called?', answer: 'nonagonal pyramid', checkMode: 'auto', correctAnswer: 'nonagonalpyramid', correctAnswers: ['nonagonalpyramid', 'nonagonal pyramid'], explanation: 'A solid with one base and triangular faces meeting at a single apex is a pyramid. The base has 9 sides, so it is a nonagonal pyramid ✓' },
        { difficulty: 'Medium', question: 'Amahle is classifying two solids for a science fair. Solid A has 2 parallel hexagonal bases and rectangular lateral faces. Solid B has 1 hexagonal base and triangular lateral faces meeting at an apex. Name each solid.', answer: 'Solid A: hexagonal prism. Solid B: hexagonal pyramid.', checkMode: 'auto', correctAnswer: 'hexagonalprismhexagonalpyramid', correctAnswers: ['hexagonalprismhexagonalpyramid', 'prismpyramid', 'hexagonal prism, hexagonal pyramid'], explanation: 'Two parallel identical bases + rectangular lateral faces = prism, named by its base (hexagon) → hexagonal prism.\nOne base + triangular lateral faces meeting at an apex = pyramid, named by its base (hexagon) → hexagonal pyramid ✓' },

        // Block B: counting V/E/F of named solids (4-7)
        { difficulty: 'Easy', question: 'How many faces does an octagonal prism have?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'An octagonal prism has an 8-sided base.\nFaces = base sides + 2 = 8 + 2 = 10 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a heptagonal pyramid have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A heptagonal pyramid has a 7-sided base.\nVertices = base sides + 1 = 7 + 1 = 8 ✓' },
        { difficulty: 'Medium', question: 'A camping tent is shaped like a triangular prism. How many faces does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A triangular prism has a 3-sided base.\nFaces = base sides + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a hexagonal pyramid has 12 vertices, "since a hexagon has 6 vertices and the pyramid needs double for the sides." Is the learner correct? State the actual number of vertices.', answer: 'No, the learner is incorrect. A hexagonal pyramid has 7 vertices: the 6 vertices of the hexagonal base plus 1 single apex where all the triangular faces meet. The apex only adds 1 vertex, not a doubling of the base vertices.', checkMode: 'self' },

        // Block C: Euler's formula (8-11)
        { difficulty: 'Medium', question: 'Verify Euler\'s formula (F − E + V = 2) for a decagonal prism. State F, E and V.', answer: 'F = 12, E = 30, V = 20. F − E + V = 12 − 30 + 20 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'An octagonal pyramid has F = 9 and V = 9. Use Euler\'s formula to find E.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'F − E + V = 2\n9 − E + 9 = 2\n18 − E = 2\nE = 16 ✓\nCheck: an octagon base has 8 sides, so E = 8 × 2 = 16 ✓' },
        { difficulty: 'Medium-Hard', question: 'A learner states that a heptagonal prism has F = 9, E = 21, V = 12. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'V=14', 'v14'], explanation: 'A heptagonal prism has a 7-sided base.\nF = 7 + 2 = 9, E = 7 × 3 = 21, V = 7 × 2 = 14.\nThe learner\'s numbers give 9 − 21 + 12 = 0, not 2 — wrong.\nV should be 14, not 12.\nCheck: 9 − 21 + 14 = 2 ✓' },
        { difficulty: 'Hard', question: 'A decagonal pyramid (10-sided base) is checked against a triangular pyramid (3-sided base) using Euler\'s formula. Find F, E and V for both, and show the formula holds for each.', answer: 'Decagonal pyramid: F = 11, E = 20, V = 11. F − E + V = 11 − 20 + 11 = 2 ✓. Triangular pyramid: F = 4, E = 6, V = 4. F − E + V = 4 − 6 + 4 = 2 ✓. Euler\'s formula holds for both, even though their actual F, E and V values are very different.', checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 octagons and 8 rectangles arranged as shown, where the two octagons form opposite ends and the 8 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'octagonal prism', checkMode: 'auto', correctAnswer: 'octagonalprism', correctAnswers: ['octagonalprism', 'octagonal prism'], explanation: 'The net has 2 identical octagonal bases and 8 rectangular side faces, matching an octagonal prism (F = 8 + 2 = 10, made of 2 octagons + 8 rectangles) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="60" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="78" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="96" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="114" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="132" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="150" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="51" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">1</text><text x="69" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">2</text><text x="87" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">3</text><text x="105" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">4</text><text x="123" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">5</text><text x="141" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">6</text><text x="159" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">7</text><text x="177" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">8</text><polygon points="42,75 42,117 30,124 16,124 4,117 4,75 16,68 30,68" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="21" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Describe the net of a nonagonal pyramid — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 10 shapes in total: 1 nonagon (the base) and 9 triangles (the side faces). The nonagon sits in the centre with one triangle attached to each of its 9 sides — when folded, the triangles rise up and their free vertices meet at the apex.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 6 identical squares arranged as shown in a cross (or "T") pattern, with 4 squares in a vertical column and 1 extra square attached to each side of the second square from the top. Which solid does this net fold into?', answer: 'cube', checkMode: 'auto', correctAnswer: 'cube', correctAnswers: ['cube', 'a cube'], explanation: 'The net has 6 identical squares arranged in a cross, matching a cube — a special rectangular prism where all 6 faces are equal squares (F = 4 + 2 = 6) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="76" y="8" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="76" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="110" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="93" y="29" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="93" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="93" y="97" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="93" y="131" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><rect x="42" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="59" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><rect x="110" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="127" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">6</text></svg>' },
        { difficulty: 'Hard', question: 'A learner draws a net for a square pyramid using 1 square and 3 triangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A square pyramid has F = 4 + 1 = 5 faces: 1 square base and 4 triangular side faces. The learner\'s net has only 3 triangles instead of 4, so one side of the square has no triangle attached and the net cannot fold into a closed square pyramid.', checkMode: 'self' },

        // Block E: cross-sections of prisms (16-18)
        { difficulty: 'Hard', question: 'A hexagonal prism is sliced by a plane parallel to its hexagonal base, cutting straight across the prism. What shape is the cross-section?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'a hexagon'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a hexagon, the cross-section is a hexagon ✓' },
        { difficulty: 'Hard', question: 'A triangular prism standing upright on a triangular base is sliced straight across, parallel to the ground, partway up. What shape is the cross-section, and does its size change depending on the height of the cut?', answer: 'The cross-section is a triangle, identical in shape and size to the triangular base, no matter where along the height the cut is made — a prism has the same cross-sectional shape and size all the way along its length, so the height of the cut does not change the triangle\'s size.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular prism is cut by a plane parallel to its rectangular base. What shape will the resulting cross-section be, and why?', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'Cutting a prism parallel to its base always produces a cross-section identical in shape to that base, because the prism has the same cross-sectional shape all the way along its length. Since the base is a rectangle, the cross-section is a rectangle ✓' },

        // Block F: prism vs pyramid / multi-step reasoning (19-20)
        { difficulty: 'Hard', question: 'A decagonal prism and a decagonal pyramid both have a 10-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Decagonal prism: F = 12, E = 30, V = 20. Decagonal pyramid: F = 11, E = 20, V = 11. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A trophy manufacturer is comparing a pentagonal prism and a pentagonal pyramid, both with a 5-sided base. The trophy with fewer edges is cheaper to cast in metal. Find the number of edges for each solid, and state which one is cheaper to cast.', answer: 'pentagonal pyramid, 10 edges', checkMode: 'auto', correctAnswer: 'pentagonalpyramid10', correctAnswers: ['pentagonalpyramid10', 'pentagonalpyramid', 'pyramid10'], explanation: 'Pentagonal prism: E = base sides × 3 = 5 × 3 = 15.\nPentagonal pyramid: E = base sides × 2 = 5 × 2 = 10.\n10 < 15, so the pentagonal pyramid is cheaper to cast — 10 edges ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have fully mastered classifying 3D objects, Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered 3D objects.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
