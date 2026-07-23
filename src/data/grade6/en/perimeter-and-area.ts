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

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// CAPS Grade 6 clarification notes state (identically for Grades 4-6):
// "Learners are not required to know or apply formulae for the perimeter,
// area or volume of any shape or object in the Intermediate Phase. Area
// ... [is] only measured informally in the Intermediate Phase." For area,
// Grade 6 specifically should "investigate why the area of a rectangle can
// be stated as its length multiplied by its width" — i.e. explore the idea
// with grid squares, NOT memorise and apply Area = length × width as a
// formula. Counting grid squares is the CAPS Grade 6 method; the formula
// below is kept as clearly labelled enrichment because it is accurate,
// well-built content that many learners meet informally before Grade 7.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

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
        'Short video showing how to find the perimeter of regular and irregular polygons by adding or multiplying side lengths',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — AREA OF RECTANGLES AND SQUARES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-rectangles-squares',
      title: 'Area of Rectangles and Squares',
      icon: '▭',
      explanation:
        lookingAhead(
          'using Area = length × width as a formula',
          'CAPS Grade 6 wants you to count grid squares to find area, and to investigate why a rectangle\'s area works out the same as length × width — not to memorise and apply that formula on its own. Applying the formula directly to numbers (without grid-counting) is Grade 7+ practice. It is kept here as clearly labelled enrichment.'
        ) +
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

      videoPlaceholder:
        'Short video showing how to calculate the area of a rectangle and a square using the formulas length times width and side squared',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — AREA OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-of-triangles',
      title: 'Area of Triangles',
      icon: '△',
      explanation:
        lookingAhead(
          'the triangle area formula',
          'The formula Area = ½ × base × height is Grade 7+ content. CAPS Grade 6 sticks to counting grid squares (including for shapes with straight or curved sides) rather than applying a triangle-area formula. This section is kept as clearly labelled enrichment for learners who want a preview of what comes next.'
        ) +
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

      videoPlaceholder:
        'Short video showing how to calculate the area of a triangle using half times base times height with the perpendicular height highlighted',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A regular octagon has sides of 6 cm each. Find the perimeter.', answer: '48 cm', checkMode: 'auto', correctAnswer: '48 cm', correctAnswers: ['48 cm', '48cm', '48'], explanation: 'A regular octagon has 8 equal sides.\nP = 8 × 6 = 48 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="132.2,41.4 163.6,72.8 163.6,117.2 132.2,148.6 87.8,148.6 56.4,117.2 56.4,72.8 87.8,41.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="159.2" y="45.8" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular octagon</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangle has sides of 9 cm, 4 cm, 9 cm and 4 cm. Find the perimeter by adding all four sides.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26 cm', correctAnswers: ['26 cm', '26cm', '26'], explanation: 'P = 9 + 4 + 9 + 4 = 26 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Easy', question: 'An irregular hexagon has sides of 5 cm, 7 cm, 3 cm, 8 cm, 6 cm and 4 cm. Find the perimeter.', answer: '33 cm', checkMode: 'auto', correctAnswer: '33 cm', correctAnswers: ['33 cm', '33cm', '33'], explanation: 'Add all six sides: P = 5 + 7 + 3 + 8 + 6 + 4 = 33 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 30,100 70,45 140,40 185,90 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="27.3" y="130.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="37.1" y="67.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="105.2" y="28.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="174.9" y="58.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="180.6" y="125.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="98.9" y="164.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A square has sides of 11 cm. What is its area?', answer: '121 cm²', checkMode: 'auto', correctAnswer: '121 cm²', correctAnswers: ['121 cm²', '121cm²', '121 cm2', '121cm2', '121'], explanation: 'A = side × side = 11 × 11 = 121 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Find the area of a rectangle that is 13 cm long and 6 cm wide.', answer: '78 cm²', checkMode: 'auto', correctAnswer: '78 cm²', correctAnswers: ['78 cm²', '78cm²', '78 cm2', '78cm2', '78'], explanation: 'A = length × width = 13 × 6 = 78 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">6 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has a base of 16 cm and a perpendicular height of 9 cm. Calculate its area.', answer: '72 cm²', checkMode: 'auto', correctAnswer: '72 cm²', correctAnswers: ['72 cm²', '72cm²', '72 cm2', '72cm2', '72'], explanation: 'A = 0.5 × base × height = 0.5 × 16 × 9 = 0.5 × 144 = 72 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A regular pentagon has sides of 13 cm each. What is its perimeter?', answer: '65 cm', checkMode: 'auto', correctAnswer: '65 cm', correctAnswers: ['65 cm', '65cm', '65'], explanation: 'P = number of sides × side length = 5 × 13 = 65 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="144.1,48.1 165.2,112.9 110.0,153.0 54.8,112.9 75.9,48.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="169.8" y="75.6" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular pentagon</text></svg>' },
        { difficulty: 'Medium', question: 'Mrs Naidoo\'s rectangular vegetable garden measures 18 m by 7 m. What area does the garden cover?', answer: '126 m²', checkMode: 'auto', correctAnswer: '126 m²', correctAnswers: ['126 m²', '126m²', '126 m2', '126m2', '126'], explanation: 'A = length × width = 18 × 7 = 126 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">7 m</text></svg>' },
        { difficulty: 'Medium', question: 'A square tabletop has sides of 15 cm. What length of edging tape is needed to go all the way around it?', answer: '60 cm', checkMode: 'auto', correctAnswer: '60 cm', correctAnswers: ['60 cm', '60cm', '60'], explanation: 'The tape goes around the perimeter: P = 4 × side = 4 × 15 = 60 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular flag has a base of 20 cm and a height of 11 cm. Find its area.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110 cm²', correctAnswers: ['110 cm²', '110cm²', '110 cm2', '110cm2', '110'], explanation: 'A = 0.5 × base × height = 0.5 × 20 × 11 = 0.5 × 220 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular pool deck has a perimeter of 54 m. If one side is 17 m long, what is the length of the adjacent side?', answer: '10 m', checkMode: 'auto', correctAnswer: '10 m', correctAnswers: ['10 m', '10m', '10'], explanation: 'Half the perimeter = one length + one width: 54 ÷ 2 = 27 m.\nWidth = 27 − 17 = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'A square poster has an area of 144 cm². What is the length of each side?', answer: '12 cm', checkMode: 'auto', correctAnswer: '12 cm', correctAnswers: ['12 cm', '12cm', '12'], explanation: 'Side × side = 144, so the side length is the square root of 144.\n√144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Area = 144 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangle is 14 cm by 9 cm, and a square has sides of 11 cm. Which shape has the larger area, and by how much?', answer: 'The rectangle, by 5 cm²', checkMode: 'auto', correctAnswer: 'The rectangle, by 5 cm²', correctAnswers: ['The rectangle, by 5 cm²', 'rectangle, by 5 cm²', 'rectangle by 5', 'rectangle', '5 cm² more'], explanation: 'Rectangle area = 14 × 9 = 126 cm².\nSquare area = 11 × 11 = 121 cm².\n126 − 121 = 5, so the rectangle is larger by 5 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="50" width="75" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="52.5" y="42" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="9" y="75.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 9 75.0)">9 cm</text><rect x="130" y="42" width="58" height="58" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="159.0" y="34" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'A hall floor measuring 6 m by 4 m needs to be covered with square tiles, each exactly 1 m². How many tiles are needed?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 tiles'], explanation: 'Floor area = 6 × 4 = 24 m². Each tile covers 1 m², so 24 tiles are needed ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">4 m</text></svg>' },
        { difficulty: 'Medium', question: 'A sail in the shape of a triangle has a base of 24 m and a height of 10 m. Calculate the area of canvas needed to make the sail.', answer: '120 m²', checkMode: 'auto', correctAnswer: '120 m²', correctAnswers: ['120 m²', '120m²', '120 m2', '120m2', '120'], explanation: 'A = 0.5 × base × height = 0.5 × 24 × 10 = 0.5 × 240 = 120 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">24 m</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">10 m</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A rectangular plot of land is 20 m by 10 m. A square section with sides of 6 m is fenced off inside it for a shed. What area of the plot is left uncovered by the shed?', answer: '164 m²', checkMode: 'auto', correctAnswer: '164 m²', correctAnswers: ['164 m²', '164m²', '164 m2', '164m2', '164'], explanation: 'Plot area = 20 × 10 = 200 m².\nShed area = 6 × 6 = 36 m².\nRemaining = 200 − 36 = 164 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="85.0" y="57.5" width="50.0" height="50.0" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="110.0" y="78.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="110.0" y="94.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'Farmer Dlamini wants to fence a rectangular field that is 25 m by 15 m, using wire that costs R15 per metre. How much will the wire cost in total?', answer: 'R1200', checkMode: 'auto', correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Perimeter = 2 × (25 + 15) = 2 × 40 = 80 m.\nCost = 80 × R15 = R1 200 ✓' },
        { difficulty: 'Hard', question: 'A regular nonagon (9 sides) has an unknown side length. If its perimeter is 45 cm, what is the length of each side?', answer: '5 cm', checkMode: 'auto', correctAnswer: '5 cm', correctAnswers: ['5 cm', '5cm', '5'], explanation: 'For a regular polygon, side = perimeter ÷ number of sides.\nSide = 45 ÷ 9 = 5 cm ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 8 m by 3 m needs to be painted, except for a rectangular door opening that measures 2 m by 1 m. What area needs to be painted?', answer: '22 m²', checkMode: 'auto', correctAnswer: '22 m²', correctAnswers: ['22 m²', '22m²', '22 m2', '22m2', '22'], explanation: 'Wall area = 8 × 3 = 24 m².\nDoor area = 2 × 1 = 2 m².\nArea to paint = 24 − 2 = 22 m² ✓' },
        { difficulty: 'Hard', question: 'Rectangle A measures 12 m by 5 m and Rectangle B measures 10 m by 8 m. Bongani says both rectangles have the same perimeter because they look similar in size. Is he correct? Show the perimeter of each to explain.', answer: 'No — Rectangle A has a perimeter of 34 m (2 × (12 + 5)) and Rectangle B has a perimeter of 36 m (2 × (10 + 8)). The perimeters are different, so Bongani is incorrect.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with perimeter and area — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A regular heptagon has sides of 8 cm each. Find the perimeter.', answer: '56 cm', checkMode: 'auto', correctAnswer: '56 cm', correctAnswers: ['56 cm', '56cm', '56'], explanation: 'A regular heptagon has 7 equal sides.\nP = 7 × 8 = 56 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="135.2,42.7 166.5,82.1 155.3,131.2 110.0,153.0 64.7,131.2 53.5,82.1 84.8,42.7" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="163.4" y="52.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular heptagon</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangle has sides of 10 cm, 3 cm, 10 cm and 3 cm. Find the perimeter by adding all four sides.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26 cm', correctAnswers: ['26 cm', '26cm', '26'], explanation: 'P = 10 + 3 + 10 + 3 = 26 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>' },
        { difficulty: 'Easy', question: 'An irregular pentagon has sides of 5 cm, 9 cm, 4 cm, 7 cm and 6 cm. Find the perimeter.', answer: '31 cm', checkMode: 'auto', correctAnswer: '31 cm', correctAnswers: ['31 cm', '31cm', '31'], explanation: 'Add all five sides: P = 5 + 9 + 4 + 7 + 6 = 31 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 30,80 100,30 175,70 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="24.1" y="119.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="55.9" y="44.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="146.3" y="39.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="176.2" y="113.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="96.9" y="164.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A square has sides of 14 cm. What is its area?', answer: '196 cm²', checkMode: 'auto', correctAnswer: '196 cm²', correctAnswers: ['196 cm²', '196cm²', '196 cm2', '196cm2', '196'], explanation: 'A = side × side = 14 × 14 = 196 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Find the area of a rectangle that is 17 cm long and 5 cm wide.', answer: '85 cm²', checkMode: 'auto', correctAnswer: '85 cm²', correctAnswers: ['85 cm²', '85cm²', '85 cm2', '85cm2', '85'], explanation: 'A = length × width = 17 × 5 = 85 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has a base of 18 cm and a perpendicular height of 7 cm. Calculate its area.', answer: '63 cm²', checkMode: 'auto', correctAnswer: '63 cm²', correctAnswers: ['63 cm²', '63cm²', '63 cm2', '63cm2', '63'], explanation: 'A = 0.5 × base × height = 0.5 × 18 × 7 = 0.5 × 126 = 63 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A regular decagon (10 sides) has sides of 4 cm each. What is its perimeter?', answer: '40 cm', checkMode: 'auto', correctAnswer: '40 cm', correctAnswers: ['40 cm', '40cm', '40'], explanation: 'P = number of sides × side length = 10 × 4 = 40 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="127.9,39.8 156.9,60.9 168.0,95.0 156.9,129.1 127.9,150.2 92.1,150.2 63.1,129.1 52.0,95.0 63.1,60.9 92.1,39.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="151.8" y="37.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular decagon (10 sides)</text></svg>' },
        { difficulty: 'Medium', question: 'Mr Botha wants to lay new carpet in a rectangular room measuring 9 m by 6 m. How much carpet does he need to cover the floor?', answer: '54 m²', checkMode: 'auto', correctAnswer: '54 m²', correctAnswers: ['54 m²', '54m²', '54 m2', '54m2', '54'], explanation: 'A = length × width = 9 × 6 = 54 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'A square picture frame has sides of 13 cm. What length of ribbon is needed to go all the way around the outside edge?', answer: '52 cm', checkMode: 'auto', correctAnswer: '52 cm', correctAnswers: ['52 cm', '52cm', '52'], explanation: 'The ribbon goes around the perimeter: P = 4 × side = 4 × 13 = 52 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular banner has a base of 22 cm and a height of 13 cm. Find its area.', answer: '143 cm²', checkMode: 'auto', correctAnswer: '143 cm²', correctAnswers: ['143 cm²', '143cm²', '143 cm2', '143cm2', '143'], explanation: 'A = 0.5 × base × height = 0.5 × 22 × 13 = 0.5 × 286 = 143 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">22 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular sports court has a perimeter of 46 m. If one side is 14 m long, what is the length of the adjacent side?', answer: '9 m', checkMode: 'auto', correctAnswer: '9 m', correctAnswers: ['9 m', '9m', '9'], explanation: 'Half the perimeter = one length + one width: 46 ÷ 2 = 23 m.\nWidth = 23 − 14 = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'A square rug has an area of 169 cm². What is the length of each side?', answer: '13 cm', checkMode: 'auto', correctAnswer: '13 cm', correctAnswers: ['13 cm', '13cm', '13'], explanation: 'Side × side = 169, so the side length is the square root of 169.\n√169 = 13 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Area = 169 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has a base of 16 cm and a height of 10 cm, and a rectangle is 9 cm by 8 cm. Which shape has the larger area, and by how much?', answer: 'The triangle, by 8 cm²', checkMode: 'auto', correctAnswer: 'The triangle, by 8 cm²', correctAnswers: ['The triangle, by 8 cm²', 'triangle, by 8 cm²', 'triangle by 8', 'triangle', '8 cm² more'], explanation: 'Triangle area = 0.5 × 16 × 10 = 80 cm².\nRectangle area = 9 × 8 = 72 cm².\n80 − 72 = 8, so the triangle is larger by 8 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="15,100 93,100 54.0,42.0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="54.0" y1="42.0" x2="54.0" y2="100" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><rect x="46" y="92" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="54.0" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="80.0" y="71.0" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">10 cm</text><rect x="130" y="55" width="60" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="160.0" y="47" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="124" y="77.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 124 77.5)">8 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'A patio measuring 7 m by 5 m needs to be covered with square paving slabs, each exactly 1 m². How many slabs are needed?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 slabs'], explanation: 'Patio area = 7 × 5 = 35 m². Each slab covers 1 m², so 35 slabs are needed ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular garden bed has a base of 30 m and a height of 12 m. Calculate its area.', answer: '180 m²', checkMode: 'auto', correctAnswer: '180 m²', correctAnswers: ['180 m²', '180m²', '180 m2', '180m2', '180'], explanation: 'A = 0.5 × base × height = 0.5 × 30 × 12 = 0.5 × 360 = 180 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30 m</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">12 m</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A rectangular yard is 15 m by 10 m. A rectangular pond measuring 6 m by 4 m is dug inside it. What area of the yard is left uncovered by the pond?', answer: '126 m²', checkMode: 'auto', correctAnswer: '126 m²', correctAnswers: ['126 m²', '126m²', '126 m2', '126m2', '126'], explanation: 'Yard area = 15 × 10 = 150 m².\nPond area = 6 × 4 = 24 m².\nRemaining = 150 − 24 = 126 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="80.0" y="62.5" width="60.0" height="39.9" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="110.0" y="78.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="110.0" y="94.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'A school wants to fence a rectangular sports field that is 18 m by 12 m, using wire that costs R12 per metre. How much will the wire cost in total?', answer: 'R720', checkMode: 'auto', correctAnswer: 'R720', correctAnswers: ['R720', '720'], explanation: 'Perimeter = 2 × (18 + 12) = 2 × 30 = 60 m.\nCost = 60 × R12 = R720 ✓' },
        { difficulty: 'Hard', question: 'A regular dodecagon (12 sides) has an unknown side length. If its perimeter is 36 cm, what is the length of each side?', answer: '3 cm', checkMode: 'auto', correctAnswer: '3 cm', correctAnswers: ['3 cm', '3cm', '3'], explanation: 'For a regular polygon, side = perimeter ÷ number of sides.\nSide = 36 ÷ 12 = 3 cm ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 6 m by 4 m needs to be painted, except for a rectangular window measuring 1.5 m by 1 m. What area needs to be painted?', answer: '22.5 m²', checkMode: 'auto', correctAnswer: '22.5 m²', correctAnswers: ['22.5 m²', '22.5m²', '22.5 m2', '22.5m2', '22.5'], explanation: 'Wall area = 6 × 4 = 24 m².\nWindow area = 1.5 × 1 = 1.5 m².\nArea to paint = 24 − 1.5 = 22.5 m² ✓' },
        { difficulty: 'Hard', question: 'A rectangle measures 9 m by 7 m and a regular hexagon has sides of 5 m. Nomvula says the hexagon has the greater perimeter since it has more sides. Is she correct? Show the perimeter of each to explain.', answer: 'No — the rectangle has a perimeter of 32 m (2 × (9 + 7)) and the hexagon has a perimeter of 30 m (6 × 5). The rectangle actually has the greater perimeter, so Nomvula is incorrect — more sides does not always mean a greater perimeter.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with perimeter and area — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A regular hexagon has sides of 11 cm each. Find the perimeter.', answer: '66 cm', checkMode: 'auto', correctAnswer: '66 cm', correctAnswers: ['66 cm', '66cm', '66'], explanation: 'A regular hexagon has 6 equal sides.\nP = 6 × 11 = 66 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="139.0,44.8 168.0,95.0 139.0,145.2 81.0,145.2 52.0,95.0 81.0,44.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="167.4" y="61.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular hexagon</text></svg>' },
        { difficulty: 'Easy', question: 'A rectangle has sides of 14 cm, 6 cm, 14 cm and 6 cm. Find the perimeter by adding all four sides.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40 cm', correctAnswers: ['40 cm', '40cm', '40'], explanation: 'P = 14 + 6 + 14 + 6 = 40 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Easy', question: 'An irregular quadrilateral has sides of 8 cm, 12 cm, 6 cm and 10 cm. Find the perimeter.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36 cm', correctAnswers: ['36 cm', '36cm', '36'], explanation: 'Add all four sides: P = 8 + 12 + 6 + 10 = 36 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 35,55 160,30 180,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="23.6" y="104.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="95.8" y="28.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="183.9" y="83.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="111.7" y="158.9" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>' },
        { difficulty: 'Easy', question: 'A square has sides of 17 cm. What is its area?', answer: '289 cm²', checkMode: 'auto', correctAnswer: '289 cm²', correctAnswers: ['289 cm²', '289cm²', '289 cm2', '289cm2', '289'], explanation: 'A = side × side = 17 × 17 = 289 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Find the area of a rectangle that is 21 cm long and 8 cm wide.', answer: '168 cm²', checkMode: 'auto', correctAnswer: '168 cm²', correctAnswers: ['168 cm²', '168cm²', '168 cm2', '168cm2', '168'], explanation: 'A = length × width = 21 × 8 = 168 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">8 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A triangle has a base of 14 cm and a perpendicular height of 9 cm. Calculate its area.', answer: '63 cm²', checkMode: 'auto', correctAnswer: '63 cm²', correctAnswers: ['63 cm²', '63cm²', '63 cm2', '63cm2', '63'], explanation: 'A = 0.5 × base × height = 0.5 × 14 × 9 = 0.5 × 126 = 63 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A regular octagon has sides of 7 cm each. What is its perimeter?', answer: '56 cm', checkMode: 'auto', correctAnswer: '56 cm', correctAnswers: ['56 cm', '56cm', '56'], explanation: 'P = number of sides × side length = 8 × 7 = 56 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="132.2,41.4 163.6,72.8 163.6,117.2 132.2,148.6 87.8,148.6 56.4,117.2 56.4,72.8 87.8,41.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="159.2" y="45.8" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">regular octagon</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular classroom floor measures 12 m by 5 m. What area does the floor cover?', answer: '60 m²', checkMode: 'auto', correctAnswer: '60 m²', correctAnswers: ['60 m²', '60m²', '60 m2', '60m2', '60'], explanation: 'A = length × width = 12 × 5 = 60 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'A square noticeboard has sides of 18 cm. What length of border trim is needed to go all the way around it?', answer: '72 cm', checkMode: 'auto', correctAnswer: '72 cm', correctAnswers: ['72 cm', '72cm', '72'], explanation: 'The trim goes around the perimeter: P = 4 × side = 4 × 18 = 72 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular road sign has a base of 26 cm and a height of 15 cm. Find its area.', answer: '195 cm²', checkMode: 'auto', correctAnswer: '195 cm²', correctAnswers: ['195 cm²', '195cm²', '195 cm2', '195cm2', '195'], explanation: 'A = 0.5 × base × height = 0.5 × 26 × 15 = 0.5 × 390 = 195 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">26 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular parking lot has a perimeter of 58 m. If one side is 19 m long, what is the length of the adjacent side?', answer: '10 m', checkMode: 'auto', correctAnswer: '10 m', correctAnswers: ['10 m', '10m', '10'], explanation: 'Half the perimeter = one length + one width: 58 ÷ 2 = 29 m.\nWidth = 29 − 19 = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'A square placemat has an area of 225 cm². What is the length of each side?', answer: '15 cm', checkMode: 'auto', correctAnswer: '15 cm', correctAnswers: ['15 cm', '15cm', '15'], explanation: 'Side × side = 225, so the side length is the square root of 225.\n√225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Area = 225 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'A square has sides of 12 cm, and a triangle has a base of 20 cm and a height of 16 cm. Which shape has the larger area, and by how much?', answer: 'The triangle, by 16 cm²', checkMode: 'auto', correctAnswer: 'The triangle, by 16 cm²', correctAnswers: ['The triangle, by 16 cm²', 'triangle, by 16 cm²', 'triangle by 16', 'triangle', '16 cm² more'], explanation: 'Square area = 12 × 12 = 144 cm².\nTriangle area = 0.5 × 20 × 16 = 160 cm².\n160 − 144 = 16, so the triangle is larger by 16 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="45" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42.5" y="37" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><polygon points="130,100 208,100 169.0,40.0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="169.0" y1="40.0" x2="169.0" y2="100" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><rect x="161" y="92" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="169.0" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="182.0" y="50.0" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">16 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'A workshop floor measuring 9 m by 6 m needs to be covered with square mats, each exactly 1 m². How many mats are needed?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 mats'], explanation: 'Floor area = 9 × 6 = 54 m². Each mat covers 1 m², so 54 mats are needed ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular kite has a base of 19 cm and a height of 8 cm. Calculate the area of fabric needed.', answer: '76 cm²', checkMode: 'auto', correctAnswer: '76 cm²', correctAnswers: ['76 cm²', '76cm²', '76 cm2', '76cm2', '76'], explanation: 'A = 0.5 × base × height = 0.5 × 19 × 8 = 0.5 × 152 = 76 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 cm</text><text x="156.0" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A garden shed has a rectangular base of 10 m by 6 m, and a triangular roof section above one wall with a base of 10 m and a height of 4 m. What is the total area covered by the base plus the roof section?', answer: '80 m²', checkMode: 'auto', correctAnswer: '80 m²', correctAnswers: ['80 m²', '80m²', '80 m2', '80m2', '80'], explanation: 'Base area = 10 × 6 = 60 m².\nRoof section area = 0.5 × 10 × 4 = 20 m².\nTotal = 60 + 20 = 80 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110.0,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110.0" y1="20" x2="110.0" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102.0" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="124.0" y="47.5" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">4 m</text><text x="110.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'A community wants to fence a rectangular playground that is 22 m by 9 m, using wire that costs R10 per metre. How much will the wire cost in total?', answer: 'R620', checkMode: 'auto', correctAnswer: 'R620', correctAnswers: ['R620', '620'], explanation: 'Perimeter = 2 × (22 + 9) = 2 × 31 = 62 m.\nCost = 62 × R10 = R620 ✓' },
        { difficulty: 'Hard', question: 'An equilateral triangle has an unknown side length. If its perimeter is 69 cm, what is the length of each side?', answer: '23 cm', checkMode: 'auto', correctAnswer: '23 cm', correctAnswers: ['23 cm', '23cm', '23'], explanation: 'An equilateral triangle has 3 equal sides, so side = perimeter ÷ 3.\nSide = 69 ÷ 3 = 23 cm ✓' },
        { difficulty: 'Hard', question: 'A wall measuring 7 m by 3 m needs to be painted, except for a rectangular window measuring 2 m by 1.5 m. What area needs to be painted?', answer: '18 m²', checkMode: 'auto', correctAnswer: '18 m²', correctAnswers: ['18 m²', '18m²', '18 m2', '18m2', '18'], explanation: 'Wall area = 7 × 3 = 21 m².\nWindow area = 2 × 1.5 = 3 m².\nArea to paint = 21 − 3 = 18 m² ✓' },
        { difficulty: 'Hard', question: 'A square has sides of 11 m and a rectangle measures 7 m by 10 m. Kagiso says the rectangle must have the greater perimeter because it looks longer. Is he correct? Show the perimeter of each to explain.', answer: 'No — the square has a perimeter of 44 m (4 × 11) and the rectangle has a perimeter of 34 m (2 × (7 + 10)). The square actually has the greater perimeter, so Kagiso is incorrect — looking longer in one direction does not tell you the total perimeter.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area across every skill in this set.' },
        { minScore: 15, message: 'Great work! You are confident with perimeter and area — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered perimeter and area.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
