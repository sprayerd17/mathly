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
        'Short video showing how to use the circumference and area formulas for circles using π = 3.14 with worked examples',

      diagramPlaceholder:
        'Diagram of a circle with radius labelled blue, diameter labelled red, circumference labelled green and area region shaded orange',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="110" cy="120" r="78" fill="#fed7aa" fill-opacity="0.4" stroke="#16a34a" stroke-width="3"/>' +
        '<line x1="32" y1="120" x2="188" y2="120" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="110" y1="120" x2="110" y2="42" stroke="#2563eb" stroke-width="2.5"/>' +
        '<circle cx="110" cy="120" r="3.5" fill="#374151"/>' +
        '<text x="110" y="16" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">Circumference</text>' +
        '<text x="118" y="78" font-size="13" font-weight="700" fill="#2563eb">Radius</text>' +
        '<text x="60" y="136" font-size="13" font-weight="700" fill="#dc2626">Diameter</text>' +
        '<text x="150" y="165" font-size="13" font-weight="700" fill="#ea580c">Area</text>' +
        '</svg>',
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
        'Short video showing how to decompose an L-shape and a pentagon into rectangles and triangles to find the total area',

      diagramPlaceholder:
        'A pentagon shape split into a rectangle and a triangle, each section labelled with its dimensions',

      diagramSvg:
        '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="40,170 180,170 180,90 110,30 40,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="40" y1="90" x2="180" y2="90" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,4"/>' +
        '<line x1="110" y1="30" x2="110" y2="90" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<rect x="104" y="84" width="8" height="8" fill="none" stroke="#9ca3af" stroke-width="1.2"/>' +
        '<text x="110" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">Rectangle</text>' +
        '<text x="130" y="65" text-anchor="start" font-size="12" font-weight="700" fill="#7c3aed">Triangle</text>' +
        '<text x="110" y="188" text-anchor="middle" font-size="12" fill="#374151">base = 8 cm</text>' +
        '<text x="20" y="132" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90 20 132)">height = 5 cm</text>' +
        '<text x="152" y="55" text-anchor="middle" font-size="11" fill="#374151">height = 3 cm</text>' +
        '</svg>',
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
        'Short video showing how to solve real-life perimeter and area problems involving circles and how to convert between SI area units',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Area and perimeter of triangles ──────────────────────────
        { difficulty: 'Easy', question: 'A triangular flag has a base of 12 cm and a height of 9 cm, as shown. Find its area.', answer: '54 cm²', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 cm²', '54cm²'], explanation: 'A = ½ × b × h = 0.5 × 12 × 9 = 54 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular garden bed has sides of 8 m, 9 m and 7 m, as shown. Calculate its perimeter.', answer: '24 m', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 m', '24m'], explanation: 'Add all three sides: P = 8 + 9 + 7 = 24 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">9 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'A triangular sail has an area of 54 m². Its base is 12 m. Find its height, as shown.', answer: '9 m', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 m', '9m'], explanation: 'A = ½ × b × h\n54 = ½ × 12 × h\n54 = 6h\nh = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="124" y="90.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="start">?</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 54 m²</text></svg>' },

        // ── Block 2: Area and perimeter of parallelograms and trapeziums ──────
        { difficulty: 'Easy', question: 'A parallelogram-shaped tile has a base of 14 cm and a height of 8 cm, as shown. Find its area.', answer: '112 cm²', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112', '112 cm²', '112cm²'], explanation: 'A = b × h = 14 × 8 = 112 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram-shaped plot has slanted sides of 9 m and 6 m, as shown. Calculate its perimeter.', answer: '30 m', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 m', '30m'], explanation: 'A parallelogram has two pairs of equal sides.\nP = 2(9 + 6) = 2(15) = 30 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium-shaped garden bed has parallel sides of 10 m and 16 m, and a height of 6 m, as shown. Find its area.', answer: '78 m²', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 m²', '78m²'], explanation: 'A = ½ × (a + b) × h = 0.5 × (10 + 16) × 6 = 0.5 × 26 × 6 = 78 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">16 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">6 m</text></svg>' },

        // ── Block 3: Circumference of circles ──────────────────────────────────
        { difficulty: 'Easy', question: 'A circular clock face has a radius of 6 cm, as shown. Find its circumference (π = 3.14).', answer: '37.68 cm', checkMode: 'auto', correctAnswer: '37.68cm', correctAnswers: ['37.68cm', '37.68 cm', '37.68'], explanation: 'C = 2πr = 2 × 3.14 × 6 = 37.68 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table has a diameter of 10 cm, as shown. Find its circumference to 2 decimal places (π = 3.14).', answer: '31.4 cm', checkMode: 'auto', correctAnswer: '31.4cm', correctAnswers: ['31.4cm', '31.4 cm', '31.4'], explanation: 'C = πd = 3.14 × 10 = 31.4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular running track has a circumference of 37.68 m (π = 3.14). Find its radius, as shown.', answer: '6 m', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 m', '6m'], explanation: 'C = 2πr\n37.68 = 2 × 3.14 × r\n37.68 = 6.28r\nr = 6 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 37.68 m</text></svg>' },

        // ── Block 4: Area of circles ────────────────────────────────────────────
        { difficulty: 'Easy', question: 'A circular coaster has a radius of 5 cm, as shown. Find its area (π = 3.14).', answer: '78.5 cm²', checkMode: 'auto', correctAnswer: '78.5cm²', correctAnswers: ['78.5cm²', '78.5 cm²', '78.5'], explanation: 'A = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular pizza has a diameter of 12 cm, as shown. Find its area to 2 decimal places (π = 3.14).', answer: '113.04 cm²', checkMode: 'auto', correctAnswer: '113.04cm²', correctAnswers: ['113.04cm²', '113.04 cm²', '113.04'], explanation: 'r = d ÷ 2 = 12 ÷ 2 = 6 cm\nA = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">12 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular pond has an area of 200.96 m² (π = 3.14). Find its radius, as shown.', answer: '8 m', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 m', '8m'], explanation: 'A = πr²\n200.96 = 3.14 × r²\nr² = 200.96 ÷ 3.14 = 64\nr = √64 = 8 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 200.96 m²</text></svg>' },

        // ── Block 5: Composite 2D figure area ────────────────────────────────────
        { difficulty: 'Medium', question: 'A house-shaped sign is made of a rectangle 16 cm wide and 10 cm tall, topped by a triangular roof with base 16 cm and height 5 cm, as shown. Find the total area of the sign.', answer: '200 cm²', checkMode: 'auto', correctAnswer: '200', correctAnswers: ['200', '200 cm²', '200cm²'], explanation: 'Rectangle area = 16 × 10 = 160 cm²\nTriangle area = ½ × 16 × 5 = 40 cm²\nTotal = 160 + 40 = 200 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A shape is made of a rectangle 14 cm by 9 cm with a semicircle of radius 4 cm cut from one side, as shown. Find the remaining area to 2 decimal places (π = 3.14).', answer: '100.88 cm²', checkMode: 'auto', correctAnswer: '100.88cm²', correctAnswers: ['100.88cm²', '100.88 cm²', '100.88'], explanation: 'Rectangle area = 14 × 9 = 126 cm²\nSemicircle area = ½ × π × 4² = ½ × 3.14 × 16 = 25.12 cm²\nRemaining area = 126 − 25.12 = 100.88 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">9 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 15 m by 12 m, as shown, with a rectangular corner of 6 m by 5 m missing. Find the floor area of the room.', answer: '150 m²', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 m²', '150m²'], explanation: 'Outer rectangle = 15 × 12 = 180 m²\nMissing corner = 6 × 5 = 30 m²\nFloor area = 180 − 30 = 150 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">12 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'An L-shaped patio is made of a 10 m by 6 m rectangle joined to a 4 m by 3 m rectangle, as shown. Find its total area.', answer: '72 m²', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 m²', '72m²'], explanation: 'Area 1 = 10 × 6 = 60 m²\nArea 2 = 4 × 3 = 12 m²\nTotal = 60 + 12 = 72 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">6 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">3 m</text></svg>' },

        // ── Block 6: Applied / multi-step real-world word problems ────────────
        { difficulty: 'Hard', question: 'A farmer wants to fence a rectangular field that is 22 m by 14 m, using wire that costs R25 per metre. Calculate the total cost of the wire.', answer: 'R1800', checkMode: 'auto', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Perimeter = 2 × (22 + 14) = 2 × 36 = 72 m\nCost = 72 × R25 = R1 800 ✓' },
        { difficulty: 'Hard', question: 'An athlete runs 4 laps of a circular track with radius 35 m, as shown. Find the total distance run to 2 decimal places (π = 3.14).', answer: '879.2 m', checkMode: 'auto', correctAnswer: '879.2m', correctAnswers: ['879.2m', '879.2 m', '879.2'], explanation: 'One lap = C = 2πr = 2 × 3.14 × 35 = 219.8 m\nTotal distance = 4 × 219.8 = 879.2 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">4 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Naledi says a circle with radius 7 cm has a larger area than a square with sides of 12 cm. Is she correct? Show your working to explain.', answer: 'Yes — the circle has an area of πr² = 3.14 × 7² = 153.86 cm², while the square has an area of 12² = 144 cm². Since 153.86 cm² is greater than 144 cm², Naledi is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circular flower bed has a radius of 3 m, as shown. Mulch costs R45 per m². Find the total cost to cover the flower bed with mulch, to the nearest rand (π = 3.14).', answer: 'R1272', checkMode: 'auto', correctAnswer: 'R1272', correctAnswers: ['R1272', '1272', 'R1271.70', 'R1 272'], explanation: 'A = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 m²\nCost = 28.26 × R45 = R1 271.70 ≈ R1 272 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area and perimeter of triangles, quadrilaterals, circles and composite figures.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Area and perimeter of triangles ──────────────────────────
        { difficulty: 'Easy', question: 'A triangular banner has a base of 15 cm and a height of 8 cm, as shown. Find its area.', answer: '60 cm²', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 cm²', '60cm²'], explanation: 'A = ½ × b × h = 0.5 × 15 × 8 = 60 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular flower bed has sides of 10 m, 11 m and 9 m, as shown. Calculate its perimeter.', answer: '30 m', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 m', '30m'], explanation: 'Add all three sides: P = 10 + 11 + 9 = 30 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">11 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">9 m</text></svg>' },
        { difficulty: 'Hard', question: 'A triangular sail has an area of 84 m². Its base is 14 m. Find its height, as shown.', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m', '12m'], explanation: 'A = ½ × b × h\n84 = ½ × 14 × h\n84 = 7h\nh = 12 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="124" y="90.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="start">?</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 84 m²</text></svg>' },

        // ── Block 2: Area and perimeter of parallelograms and trapeziums ──────
        { difficulty: 'Easy', question: 'A parallelogram-shaped tile has a base of 18 cm and a height of 10 cm, as shown. Find its area.', answer: '180 cm²', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 cm²', '180cm²'], explanation: 'A = b × h = 18 × 10 = 180 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram-shaped plot has slanted sides of 11 m and 7 m, as shown. Calculate its perimeter.', answer: '36 m', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 m', '36m'], explanation: 'A parallelogram has two pairs of equal sides.\nP = 2(11 + 7) = 2(18) = 36 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium-shaped garden bed has parallel sides of 8 m and 14 m, and a height of 5 m, as shown. Find its area.', answer: '55 m²', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 m²', '55m²'], explanation: 'A = ½ × (a + b) × h = 0.5 × (8 + 14) × 5 = 0.5 × 22 × 5 = 55 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">14 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">5 m</text></svg>' },

        // ── Block 3: Circumference of circles ──────────────────────────────────
        { difficulty: 'Easy', question: 'A circular clock face has a radius of 9 cm, as shown. Find its circumference (π = 3.14).', answer: '56.52 cm', checkMode: 'auto', correctAnswer: '56.52cm', correctAnswers: ['56.52cm', '56.52 cm', '56.52'], explanation: 'C = 2πr = 2 × 3.14 × 9 = 56.52 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table has a diameter of 20 cm, as shown. Find its circumference to 2 decimal places (π = 3.14).', answer: '62.8 cm', checkMode: 'auto', correctAnswer: '62.8cm', correctAnswers: ['62.8cm', '62.8 cm', '62.8'], explanation: 'C = πd = 3.14 × 20 = 62.8 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">20 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular running track has a circumference of 62.8 m (π = 3.14). Find its radius, as shown.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 m', '10m'], explanation: 'C = 2πr\n62.8 = 2 × 3.14 × r\n62.8 = 6.28r\nr = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 62.8 m</text></svg>' },

        // ── Block 4: Area of circles ────────────────────────────────────────────
        { difficulty: 'Easy', question: 'A circular coaster has a radius of 9 cm, as shown. Find its area (π = 3.14).', answer: '254.34 cm²', checkMode: 'auto', correctAnswer: '254.34cm²', correctAnswers: ['254.34cm²', '254.34 cm²', '254.34'], explanation: 'A = πr² = 3.14 × 9² = 3.14 × 81 = 254.34 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular pizza has a diameter of 18 cm, as shown. Find its area to 2 decimal places (π = 3.14).', answer: '254.34 cm²', checkMode: 'auto', correctAnswer: '254.34cm²', correctAnswers: ['254.34cm²', '254.34 cm²', '254.34'], explanation: 'r = d ÷ 2 = 18 ÷ 2 = 9 cm\nA = πr² = 3.14 × 9² = 3.14 × 81 = 254.34 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular pond has an area of 113.04 m² (π = 3.14). Find its radius, as shown.', answer: '6 m', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 m', '6m'], explanation: 'A = πr²\n113.04 = 3.14 × r²\nr² = 113.04 ÷ 3.14 = 36\nr = √36 = 6 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 113.04 m²</text></svg>' },

        // ── Block 5: Composite 2D figure area ────────────────────────────────────
        { difficulty: 'Medium', question: 'A house-shaped sign is made of a rectangle 18 cm wide and 11 cm tall, topped by a triangular roof with base 18 cm and height 6 cm, as shown. Find the total area of the sign.', answer: '252 cm²', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252 cm²', '252cm²'], explanation: 'Rectangle area = 18 × 11 = 198 cm²\nTriangle area = ½ × 18 × 6 = 54 cm²\nTotal = 198 + 54 = 252 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">11 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A shape is made of a rectangle 16 cm by 10 cm with a semicircle of radius 3 cm cut from one side, as shown. Find the remaining area to 2 decimal places (π = 3.14).', answer: '145.87 cm²', checkMode: 'auto', correctAnswer: '145.87cm²', correctAnswers: ['145.87cm²', '145.87 cm²', '145.87'], explanation: 'Rectangle area = 16 × 10 = 160 cm²\nSemicircle area = ½ × π × 3² = ½ × 3.14 × 9 = 14.13 cm²\nRemaining area = 160 − 14.13 = 145.87 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">10 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 17 m by 13 m, as shown, with a rectangular corner of 7 m by 4 m missing. Find the floor area of the room.', answer: '193 m²', checkMode: 'auto', correctAnswer: '193', correctAnswers: ['193', '193 m²', '193m²'], explanation: 'Outer rectangle = 17 × 13 = 221 m²\nMissing corner = 7 × 4 = 28 m²\nFloor area = 221 − 28 = 193 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">13 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">7 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Medium', question: 'An L-shaped patio is made of a 12 m by 5 m rectangle joined to a 6 m by 4 m rectangle, as shown. Find its total area.', answer: '84 m²', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 m²', '84m²'], explanation: 'Area 1 = 12 × 5 = 60 m²\nArea 2 = 6 × 4 = 24 m²\nTotal = 60 + 24 = 84 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">5 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text></svg>' },

        // ── Block 6: Applied / multi-step real-world word problems ────────────
        { difficulty: 'Hard', question: 'A farmer wants to fence a rectangular field that is 26 m by 16 m, using wire that costs R20 per metre. Calculate the total cost of the wire.', answer: 'R1680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'Perimeter = 2 × (26 + 16) = 2 × 42 = 84 m\nCost = 84 × R20 = R1 680 ✓' },
        { difficulty: 'Hard', question: 'A cyclist rides 3 laps of a circular track with diameter 70 m, as shown. Find the total distance ridden to 2 decimal places (π = 3.14).', answer: '659.4 m', checkMode: 'auto', correctAnswer: '659.4m', correctAnswers: ['659.4m', '659.4 m', '659.4'], explanation: 'r = 70 ÷ 2 = 35 m\nOne lap = C = 2πr = 2 × 3.14 × 35 = 219.8 m\nTotal distance = 3 × 219.8 = 659.4 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">70 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">3 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Kagiso says a circle with radius 6 cm has a larger area than a square with sides of 11 cm. Is he correct? Show your working to explain.', answer: 'No — the circle has an area of πr² = 3.14 × 6² = 113.04 cm², while the square has an area of 11² = 121 cm². Since 113.04 cm² is less than 121 cm², Kagiso is incorrect.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circular flower bed has a radius of 2.5 m, as shown. Mulch costs R60 per m². Find the total cost to cover the flower bed with mulch, to the nearest rand (π = 3.14).', answer: 'R1178', checkMode: 'auto', correctAnswer: 'R1178', correctAnswers: ['R1178', '1178', 'R1177.50', 'R1 178'], explanation: 'A = πr² = 3.14 × 2.5² = 3.14 × 6.25 = 19.625 m²\nCost = 19.625 × R60 = R1 177.50 ≈ R1 178 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area and perimeter of triangles, quadrilaterals, circles and composite figures.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Area and perimeter of triangles ──────────────────────────
        { difficulty: 'Easy', question: 'A triangular pennant has a base of 20 cm and a height of 11 cm, as shown. Find its area.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110', '110 cm²', '110cm²'], explanation: 'A = ½ × b × h = 0.5 × 20 × 11 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular flower bed has sides of 9 m, 10 m and 8 m, as shown. Calculate its perimeter.', answer: '27 m', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 m', '27m'], explanation: 'Add all three sides: P = 9 + 10 + 8 = 27 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">10 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">8 m</text></svg>' },
        { difficulty: 'Hard', question: 'A triangular sail has an area of 45 m². Its height is 9 m. Find its base, as shown.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 m', '10m'], explanation: 'A = ½ × b × h\n45 = ½ × b × 9\n45 = 4.5b\nb = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 m</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 45 m²</text></svg>' },

        // ── Block 2: Area and perimeter of parallelograms and trapeziums ──────
        { difficulty: 'Easy', question: 'A parallelogram-shaped tile has a base of 16 cm and a height of 9 cm, as shown. Find its area.', answer: '144 cm²', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 cm²', '144cm²'], explanation: 'A = b × h = 16 × 9 = 144 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram-shaped plot has slanted sides of 13 m and 8 m, as shown. Calculate its perimeter.', answer: '42 m', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 m', '42m'], explanation: 'A parallelogram has two pairs of equal sides.\nP = 2(13 + 8) = 2(21) = 42 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">8 m</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium-shaped garden bed has parallel sides of 12 m and 18 m, and a height of 7 m, as shown. Find its area.', answer: '105 m²', checkMode: 'auto', correctAnswer: '105', correctAnswers: ['105', '105 m²', '105m²'], explanation: 'A = ½ × (a + b) × h = 0.5 × (12 + 18) × 7 = 0.5 × 30 × 7 = 105 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">18 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">7 m</text></svg>' },

        // ── Block 3: Circumference of circles ──────────────────────────────────
        { difficulty: 'Easy', question: 'A circular clock face has a radius of 4 cm, as shown. Find its circumference (π = 3.14).', answer: '25.12 cm', checkMode: 'auto', correctAnswer: '25.12cm', correctAnswers: ['25.12cm', '25.12 cm', '25.12'], explanation: 'C = 2πr = 2 × 3.14 × 4 = 25.12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table has a diameter of 16 cm, as shown. Find its circumference to 2 decimal places (π = 3.14).', answer: '50.24 cm', checkMode: 'auto', correctAnswer: '50.24cm', correctAnswers: ['50.24cm', '50.24 cm', '50.24'], explanation: 'C = πd = 3.14 × 16 = 50.24 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">16 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular running track has a circumference of 75.36 m (π = 3.14). Find its radius, as shown.', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m', '12m'], explanation: 'C = 2πr\n75.36 = 2 × 3.14 × r\n75.36 = 6.28r\nr = 12 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 75.36 m</text></svg>' },

        // ── Block 4: Area of circles ────────────────────────────────────────────
        { difficulty: 'Easy', question: 'A circular coaster has a radius of 6 cm, as shown. Find its area (π = 3.14).', answer: '113.04 cm²', checkMode: 'auto', correctAnswer: '113.04cm²', correctAnswers: ['113.04cm²', '113.04 cm²', '113.04'], explanation: 'A = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular pizza has a diameter of 22 cm, as shown. Find its area to 2 decimal places (π = 3.14).', answer: '379.94 cm²', checkMode: 'auto', correctAnswer: '379.94cm²', correctAnswers: ['379.94cm²', '379.94 cm²', '379.94'], explanation: 'r = d ÷ 2 = 22 ÷ 2 = 11 cm\nA = πr² = 3.14 × 11² = 3.14 × 121 = 379.94 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">22 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A circular pond has an area of 153.86 m² (π = 3.14). Find its radius, as shown.', answer: '7 m', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 m', '7m'], explanation: 'A = πr²\n153.86 = 3.14 × r²\nr² = 153.86 ÷ 3.14 = 49\nr = √49 = 7 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 153.86 m²</text></svg>' },

        // ── Block 5: Composite 2D figure area ────────────────────────────────────
        { difficulty: 'Medium', question: 'A house-shaped sign is made of a rectangle 20 cm wide and 9 cm tall, topped by a triangular roof with base 20 cm and height 7 cm, as shown. Find the total area of the sign.', answer: '250 cm²', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', '250 cm²', '250cm²'], explanation: 'Rectangle area = 20 × 9 = 180 cm²\nTriangle area = ½ × 20 × 7 = 70 cm²\nTotal = 180 + 70 = 250 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A shape is made of a rectangle 18 cm by 8 cm with a semicircle of radius 4 cm cut from one side, as shown. Find the remaining area to 2 decimal places (π = 3.14).', answer: '118.88 cm²', checkMode: 'auto', correctAnswer: '118.88cm²', correctAnswers: ['118.88cm²', '118.88 cm²', '118.88'], explanation: 'Rectangle area = 18 × 8 = 144 cm²\nSemicircle area = ½ × π × 4² = ½ × 3.14 × 16 = 25.12 cm²\nRemaining area = 144 − 25.12 = 118.88 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">8 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped room has an outer rectangle of 19 m by 14 m, as shown, with a rectangular corner of 8 m by 6 m missing. Find the floor area of the room.', answer: '218 m²', checkMode: 'auto', correctAnswer: '218', correctAnswers: ['218', '218 m²', '218m²'], explanation: 'Outer rectangle = 19 × 14 = 266 m²\nMissing corner = 8 × 6 = 48 m²\nFloor area = 266 − 48 = 218 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">19 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">14 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">8 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'An L-shaped patio is made of an 11 m by 7 m rectangle joined to a 5 m by 3 m rectangle, as shown. Find its total area.', answer: '92 m²', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92 m²', '92m²'], explanation: 'Area 1 = 11 × 7 = 77 m²\nArea 2 = 5 × 3 = 15 m²\nTotal = 77 + 15 = 92 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">7 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">5 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">3 m</text></svg>' },

        // ── Block 6: Applied / multi-step real-world word problems ────────────
        { difficulty: 'Hard', question: 'A farmer wants to fence a rectangular field that is 24 m by 15 m, using wire that costs R30 per metre. Calculate the total cost of the wire.', answer: 'R2340', checkMode: 'auto', correctAnswer: 'R2340', correctAnswers: ['R2340', '2340', 'R2 340', '2 340'], explanation: 'Perimeter = 2 × (24 + 15) = 2 × 39 = 78 m\nCost = 78 × R30 = R2 340 ✓' },
        { difficulty: 'Hard', question: 'An athlete runs 5 laps of a circular track with radius 35 m, as shown. Find the total distance run to 2 decimal places (π = 3.14).', answer: '1099 m', checkMode: 'auto', correctAnswer: '1099m', correctAnswers: ['1099m', '1099 m', '1099', '1099.0m', '1099.0 m'], explanation: 'One lap = C = 2πr = 2 × 3.14 × 35 = 219.8 m\nTotal distance = 5 × 219.8 = 1099 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">5 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Palesa says a circle with radius 8 cm has a larger area than a square with sides of 14 cm. Is she correct? Show your working to explain.', answer: 'Yes — the circle has an area of πr² = 3.14 × 8² = 200.96 cm², while the square has an area of 14² = 196 cm². Since 200.96 cm² is greater than 196 cm², Palesa is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A circular flower bed has a radius of 4 m, as shown. Mulch costs R35 per m². Find the total cost to cover the flower bed with mulch, to the nearest rand (π = 3.14).', answer: 'R1758', checkMode: 'auto', correctAnswer: 'R1758', correctAnswers: ['R1758', '1758', 'R1758.40', 'R1 758'], explanation: 'A = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 m²\nCost = 50.24 × R35 = R1 758.40 ≈ R1 758 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area and perimeter of triangles, quadrilaterals, circles and composite figures.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered area and perimeter of 2D shapes.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of the content. Review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the sections where you dropped marks and give it another go.' },
    { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
  ],
}
