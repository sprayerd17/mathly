import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// radius         → blue    (#2563eb)
// diameter       → red     (#dc2626)
// circumference  → green   (#16a34a)
// area / units   → orange  (#ea580c)
// shape 2        → purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Area and Perimeter of 2D Shapes',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — AREA AND CIRCUMFERENCE OF CIRCLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-circumference-circles',
      title: 'Area and Circumference of Circles',
      icon: 'π',
      explanation:
        `<p style="margin-bottom:16px;">We use the relationships between ${bl('radius')}, ${re('diameter')} and ${gr('circumference')} — ${gr('Circumference')} = 2π${bl('r')} or π${re('d')} — and between ${bl('radius')} and ${or('area')} — ${or('Area')} = π${bl('r')}² — to calculate circle measurements, using π ≈ 3.14, to at least 2 decimal places.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('diameter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('circumference')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Radius')} and ${re('Diameter')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('d')} = 2${bl('r')} &nbsp;|&nbsp; ${bl('r')} = ${re('d')} ÷ 2</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Circumference')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('C')} = 2π${bl('r')} = π${re('d')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Area')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('A')} = π${bl('r')}²</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always find the radius first</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you are given the ${re('diameter')}, divide it by 2 to find the ${bl('radius')} before substituting into any formula. Both the ${gr('circumference')} formula and the ${or('area')} formula use the ${bl('radius')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the circumference of a circle with radius 8 cm (π = 3.14).',
          answer: `${gr('Circumference')} = ${gr('50.24 cm')}`,
          steps: [
            `Write the formula: ${gr('C')} = 2π${bl('r')}`,
            `Substitute: ${gr('C')} = 2 × 3.14 × ${bl('8')}`,
            `Calculate: ${gr('C')} = 6.28 × 8 = ${gr('50.24 cm')}`,
          ],
        },
        {
          question: 'Find the area of a circle with diameter 10 cm (π = 3.14).',
          answer: `${or('Area')} = ${or('78.5 cm²')}`,
          steps: [
            `Find the ${bl('radius')}: ${bl('r')} = ${re('d')} ÷ 2 = ${re('10')} ÷ 2 = ${bl('5 cm')}`,
            `Write the formula: ${or('A')} = π${bl('r')}²`,
            `Substitute: ${or('A')} = 3.14 × ${bl('5')}²`,
            `Calculate: ${or('A')} = 3.14 × 25 = ${or('78.5 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — circumference given radius ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the circumference of a circle with radius 5 cm (π = 3.14).',
          answer: '31.4 cm',
          checkMode: 'auto',
          correctAnswer: '31.4cm',
          correctAnswers: ['31.4cm', '31.4 cm', '31.4'],
          explanation: 'C = 2πr = 2 × 3.14 × 5 = 31.4 cm ✓',
        },

        // ── Q2 Medium — area given radius ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the area of a circle with radius 7 cm (π = 3.14).',
          answer: '153.86 cm²',
          checkMode: 'auto',
          correctAnswer: '153.86cm²',
          correctAnswers: ['153.86cm²', '153.86 cm²', '153.86'],
          explanation: 'A = πr² = 3.14 × 7² = 3.14 × 49 = 153.86 cm² ✓',
        },

        // ── Q3 Hard — circumference comparison ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a circle with diameter 10 cm has the same circumference as one with radius 10 cm. Is he correct? Explain.',
          answer: 'No — circumference depends on radius (or diameter). A diameter of 10 cm gives radius 5 cm and circumference 31.4 cm, while a radius of 10 cm gives circumference 62.8 cm. They are different.',
          checkMode: 'self',
        },

        // ── Q4 Medium — circumference to 2 decimal places ────────────────────
        {
          difficulty: 'Medium',
          question: 'A circular pool has radius 3.6 m. Find the circumference to 2 decimal places (π = 3.14).',
          answer: '22.61 m',
          checkMode: 'auto',
          correctAnswer: '22.61m',
          correctAnswers: ['22.61m', '22.61 m', '22.61'],
          explanation: 'C = 2πr = 2 × 3.14 × 3.6 = 22.608 ≈ 22.61 m ✓',
        },

        // ── Q5 Hard — effect of doubling the radius ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says doubling the radius of a circle doubles its area. Is she correct? Explain with calculations.',
          answer: 'No — area depends on r², so doubling the radius quadruples the area (since 2² = 4), not doubles it.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the circumference and area formulas for circles using π = 3.14 with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with radius labelled blue, diameter labelled red, circumference labelled green and area region labelled orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DECOMPOSING POLYGONS INTO RECTANGLES AND TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'decomposing-polygons',
      title: 'Decomposing Polygons into Rectangles and Triangles',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">We calculate the areas of more complex polygons, to at least 2 decimal places, by <strong>decomposing</strong> (splitting) them into simpler shapes like ${bl('rectangles')} and ${pu('triangles')}, finding each area separately, and adding them together for the ${gr('total area')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape 1')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('shape 2')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('total area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Area formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Rectangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Area = length × width</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">${pu('Triangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Area = ½ × base × height</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Total area')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add the areas of each section together</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify how to split the shape into ${bl('rectangles')} and/or ${pu('triangles')}.<br><strong>Step 2</strong> — Find the area of each section separately.<br><strong>Step 3</strong> — Add (or subtract) the areas to find the ${gr('total area')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'An L-shaped figure is made of a 6 cm by 4 cm rectangle and a 3 cm by 2 cm rectangle. Find the total area.',
          answer: `${gr('Total area')} = ${gr('30 cm²')}`,
          steps: [
            `${bl('Area 1')} = 6 × 4 = ${bl('24 cm²')}`,
            `${pu('Area 2')} = 3 × 2 = ${pu('6 cm²')}`,
            `${gr('Total area')} = ${bl('24')} + ${pu('6')} = ${gr('30 cm²')}`,
          ],
        },
        {
          question: 'A pentagon is split into a rectangle (8 cm by 5 cm) and a triangle (base 8 cm, height 3 cm) on top. Find the total area.',
          answer: `${gr('Total area')} = ${gr('52 cm²')}`,
          steps: [
            `${bl('Rectangle area')} = 8 × 5 = ${bl('40 cm²')}`,
            `${pu('Triangle area')} = ½ × 8 × 3 = ${pu('12 cm²')}`,
            `${gr('Total area')} = ${bl('40')} + ${pu('12')} = ${gr('52 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Medium — L-shaped figure ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'An L-shaped figure is made of a 5 cm by 3 cm rectangle and a 2 cm by 4 cm rectangle. Find the total area.',
          answer: '23 cm²',
          checkMode: 'auto',
          correctAnswer: '23cm²',
          correctAnswers: ['23cm²', '23 cm²', '23'],
          explanation: 'Area 1 = 5 × 3 = 15 cm²\nArea 2 = 2 × 4 = 8 cm²\nTotal = 15 + 8 = 23 cm² ✓',
        },

        // ── Q7 Hard — pentagon decomposed into rectangle and triangle ─────────
        {
          difficulty: 'Hard',
          question: 'A pentagon is split into a rectangle (6 cm by 4 cm) and a triangle (base 6 cm, height 2 cm). Find the total area.',
          answer: '30 cm²',
          checkMode: 'auto',
          correctAnswer: '30cm²',
          correctAnswers: ['30cm²', '30 cm²', '30'],
          explanation: 'Rectangle area = 6 × 4 = 24 cm²\nTriangle area = ½ × 6 × 2 = 6 cm²\nTotal = 24 + 6 = 30 cm² ✓',
        },

        // ── Q8 Medium — rectangle with semicircle removed ─────────────────────
        {
          difficulty: 'Medium',
          question: 'A shape is made of a rectangle (10 cm by 6 cm) with a semicircle (radius 3 cm) cut from one side. Find the remaining area to 2 decimal places (π = 3.14).',
          answer: '45.87 cm²',
          checkMode: 'auto',
          correctAnswer: '45.87cm²',
          correctAnswers: ['45.87cm²', '45.87 cm²', '45.87'],
          explanation: 'Rectangle area = 10 × 6 = 60 cm²\nSemicircle area = ½ × π × 3² = ½ × 3.14 × 9 = 14.13 cm²\nRemaining area = 60 − 14.13 = 45.87 cm² ✓',
        },

        // ── Q9 Hard — rectangle with triangle added on top ────────────────────
        {
          difficulty: 'Hard',
          question: 'A garden is shaped like a rectangle (8 m by 5 m) with a triangular section (base 8 m, height 3 m) added on top. Find the total area.',
          answer: '52 m²',
          checkMode: 'auto',
          correctAnswer: '52m²',
          correctAnswers: ['52m²', '52 m²', '52'],
          explanation: 'Rectangle area = 8 × 5 = 40 m²\nTriangle area = ½ × 8 × 3 = 12 m²\nTotal = 40 + 12 = 52 m² ✓',
        },

        // ── Q10 Hard — irregular polygon reasoning ────────────────────────────
        {
          difficulty: 'Hard',
          question: "Amahle says it's impossible to calculate the area of an irregular polygon exactly. Is she correct? Explain.",
          answer: 'No — irregular polygons can be decomposed (split) into simpler shapes like rectangles and triangles, and their areas calculated and added together for an exact total.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to decompose an L-shape and a pentagon into rectangles and triangles to find the total area" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="A pentagon shape split into a rectangle and triangle with each section labelled with its dimensions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS INVOLVING PERIMETER AND AREA, WITH CALCULATOR USE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-perimeter-area-problems',
      title: 'Solving Problems Involving Perimeter and Area, with Calculator Use',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life problems involving perimeter and area of polygons and circles, calculating to at least 2 decimal places, using a calculator where appropriate, and converting between SI units (mm² ↔ cm² ↔ m² ↔ km²).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('units converted')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('calculations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI unit conversions for area</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">mm² ↔ cm²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 100')} / ${or('× 100')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">cm² ↔ m²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 10 000')} / ${or('× 10 000')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">m² ↔ km²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 1 000 000')} / ${or('× 1 000 000')}</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Problem-solving steps</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Read carefully: identify whether you need perimeter (distance around) or area (surface covered).<br><strong>Step 2</strong> — ${bl('Calculate')} using the correct formula, to at least 2 decimal places.<br><strong>Step 3</strong> — ${or('Convert units')} if required.<br><strong>Step 4</strong> — Write your ${gr('final answer')} with the correct unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A circular garden has a radius of 3.5 m. Find its area to 2 decimal places (π = 3.14).',
          answer: `${gr('Area')} = ${gr('38.47 m²')}`,
          steps: [
            `Write the formula: ${bl('A')} = π${bl('r')}²`,
            `Substitute: ${bl('A')} = 3.14 × ${bl('3.5')}²`,
            `Calculate: ${bl('A')} = 3.14 × 12.25 = ${bl('38.465')} ≈ ${gr('38.47 m²')}`,
          ],
        },
        {
          question: 'Convert 25 000 cm² to m².',
          answer: `${gr('2.5 m²')}`,
          steps: [
            `Recall the conversion: ${or('1 m² = 10 000 cm²')}`,
            `Divide: ${bl('25 000')} ÷ ${or('10 000')} = ${gr('2.5 m²')}`,
          ],
        },
        {
          question: 'Sipho wants to fence a circular pool with radius 4.2 m. Find the length of fencing needed (the circumference) to 2 decimal places (π = 3.14).',
          answer: `${gr('Circumference')} = ${gr('26.38 m')}`,
          steps: [
            `Write the formula: ${bl('C')} = 2π${bl('r')}`,
            `Substitute: ${bl('C')} = 2 × 3.14 × ${bl('4.2')}`,
            `Calculate: ${bl('C')} = 6.28 × 4.2 = ${bl('26.376')} ≈ ${gr('26.38 m')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Easy — unit conversion cm² to m² ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 30 000 cm² to m².',
          answer: '3 m²',
          checkMode: 'auto',
          correctAnswer: '3m²',
          correctAnswers: ['3m²', '3 m²', '3'],
          explanation: '1 m² = 10 000 cm²\n30 000 ÷ 10 000 = 3 m² ✓',
        },

        // ── Q12 Medium — unit conversion km² to m² ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 4.5 km² to m².',
          answer: '4 500 000 m²',
          checkMode: 'auto',
          correctAnswer: '4500000m²',
          correctAnswers: ['4500000m²', '4 500 000 m²', '4500000', '4,500,000m²'],
          explanation: '1 km² = 1 000 000 m²\n4.5 × 1 000 000 = 4 500 000 m² ✓',
        },

        // ── Q13 Medium — unit conversion m² to cm² ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 0.75 m² to cm².',
          answer: '7 500 cm²',
          checkMode: 'auto',
          correctAnswer: '7500cm²',
          correctAnswers: ['7500cm²', '7 500 cm²', '7500'],
          explanation: '1 m² = 10 000 cm²\n0.75 × 10 000 = 7 500 cm² ✓',
        },

        // ── Q14 Hard — circular garden area to 2 decimal places ───────────────
        {
          difficulty: 'Hard',
          question: 'A circular garden has radius 2.8 m. Find its area to 2 decimal places (π = 3.14).',
          answer: '24.62 m²',
          checkMode: 'auto',
          correctAnswer: '24.62m²',
          correctAnswers: ['24.62m²', '24.62 m²', '24.62'],
          explanation: 'A = πr² = 3.14 × 2.8² = 3.14 × 7.84 = 24.6176 ≈ 24.62 m² ✓',
        },

        // ── Q15 Hard — fencing a circular field given diameter ────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo wants to fence a circular field with diameter 14 m. Find the length of fencing needed to 2 decimal places (π = 3.14).',
          answer: '43.96 m',
          checkMode: 'auto',
          correctAnswer: '43.96m',
          correctAnswers: ['43.96m', '43.96 m', '43.96'],
          explanation: 'r = 14 ÷ 2 = 7 m\nC = 2πr = 2 × 3.14 × 7 = 43.96 m ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve real-life perimeter and area problems involving circles and how to convert between SI area units" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a circular garden with radius labelled and a unit conversion scale from mm² to cm² to m² to km²" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered area and perimeter of 2D shapes.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of the content. Review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the sections where you dropped marks and give it another go.' },
    { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
  ],
}
