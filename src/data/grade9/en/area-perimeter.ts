import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// shapes broken down / original dimensions / scale factor (linear) → blue   (#2563eb)
// unit conversion / doubled dimensions / area scale factor          → orange (#ea580c)
// final answer / area-perimeter change / final calculation          → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Area and Perimeter',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING PROBLEMS USING FORMULAE AND UNIT CONVERSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formulae-and-unit-conversions',
      title: 'Solving Problems Using Formulae and Unit Conversions',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We use appropriate formulae and conversions between SI units to solve problems and calculate the perimeter and area of polygons and circles, applying our full range of skills from previous grades confidently.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shapes broken down')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('unit conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Circle — Area</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A = πr²</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Circle — Circumference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">C = πd = 2πr</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Semicircle — Area</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A = ½πr²</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rectangle — Area</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A = l × w</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI unit conversions for area</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0 0 6px;font-size:14px;color:#374151;">${or('1 m = 100 cm')} → ${or('1 m² = 100 × 100 = 10 000 cm²')}</p>` +
        `<p style="margin:0 0 6px;font-size:14px;color:#374151;">${or('1 m = 1 000 mm')} → ${or('1 m² = 1 000 000 mm²')}</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${or('1 km = 1 000 m')} → ${or('1 km² = 1 000 000 m²')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for irregular shapes</p>` +
        `<p style="margin:0;color:#1e3a8a;">Break the shape into ${bl('recognisable parts')} (rectangles, triangles, semicircles), calculate each part separately, then add or subtract to get the ${gr('total area')}. Apply ${or('unit conversions')} only at the final step where required.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A circular garden has radius 4.5 m. Find its area in m², then convert to cm².',
          answer: `Area = ${gr('63.585 m²')} = ${or('635 850 cm²')}`,
          steps: [
            `Apply the formula: Area = ${bl('πr²')} = 3.14 × ${bl('4.5²')} = 3.14 × ${bl('20.25')} = ${gr('63.585 m²')}`,
            `${or('Convert to cm²:')} 1 m² = 10 000 cm², so ${or('63.585 × 10 000')} = ${or('635 850 cm²')}`,
            `<strong>Answer:</strong> Area = ${gr('63.585 m²')} = ${or('635 850 cm²')} ✓`,
          ],
        },
        {
          question: "Sipho's irregular plot is made of a rectangle (10 m by 6 m) and a semicircle (radius 3 m) attached to one side. Find the total area to 2 decimal places.",
          answer: `Total area = ${gr('74.13 m²')}`,
          steps: [
            `${bl('Rectangle area:')} l × w = ${bl('10 × 6')} = ${bl('60 m²')}`,
            `${bl('Semicircle area:')} ½ × π × r² = 0.5 × 3.14 × ${bl('3²')} = 0.5 × 3.14 × ${bl('9')} = ${bl('14.13 m²')}`,
            `${gr('Total area:')} 60 + 14.13 = ${gr('74.13 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — circle area ──────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A circle has radius 6 m. Find its area to 2 decimal places.',
          answer: '113.04 m²',
          checkMode: 'auto',
          correctAnswer: '113.04m²',
          correctAnswers: ['113.04m²', '113.04 m²', '113.04'],
          explanation: 'Area = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 m² ✓',
        },

        // ── Q2 Medium — unit conversion ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 45 000 cm² to m².',
          answer: '4.5 m²',
          checkMode: 'auto',
          correctAnswer: '4.5m²',
          correctAnswers: ['4.5m²', '4.5 m²', '4.5'],
          explanation: '1 m² = 10 000 cm²\n45 000 ÷ 10 000 = 4.5 m² ✓',
        },

        // ── Q3 Hard — irregular plot ──────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho's plot is a rectangle (8 m by 5 m) with a semicircle (radius 2.5 m) attached. Find the total area to 2 decimal places.",
          answer: 'Rectangle = 8 × 5 = 40 m²\nSemicircle = 0.5 × 3.14 × 2.5² = 0.5 × 3.14 × 6.25 = 9.81 m²\nTotal = 40 + 9.81 = 49.81 m²',
          checkMode: 'self',
        },

        // ── Q9 Medium — circle diameter, separate parts ───────────────────────
        {
          difficulty: 'Medium',
          question: 'A circle has diameter 10 cm. Find its circumference and area to 2 decimal places.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Circumference',
              correctAnswer: '31.4cm',
              correctAnswers: ['31.4cm', '31.4 cm', '31.4'],
              explanation: 'Circumference = πd = 3.14 × 10 = 31.4 cm ✓',
            },
            {
              label: 'b) Area',
              correctAnswer: '78.5cm²',
              correctAnswers: ['78.5cm²', '78.5 cm²', '78.5', '78.50cm²', '78.50 cm²'],
              explanation: 'Radius = diameter ÷ 2 = 5 cm\nArea = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 cm² ✓',
            },
          ],
        },

        // ── Q12 Hard — rectangle minus circle cutout ──────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho's irregular shape is a rectangle (12 m by 7 m) minus a circular cutout (radius 2 m). Find the remaining area to 2 decimal places.",
          answer: '71.44 m²',
          checkMode: 'auto',
          correctAnswer: '71.44m²',
          correctAnswers: ['71.44m²', '71.44 m²', '71.44'],
          explanation: 'Rectangle area = 12 × 7 = 84 m²\nCircle area = π × r² = 3.14 × 2² = 3.14 × 4 = 12.56 m²\nRemaining area = 84 − 12.56 = 71.44 m² ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply area and perimeter formulae for circles and composite shapes, including SI unit conversions between cm² and m²" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of Sipho\'s irregular plot broken into a rectangle and a semicircle, with each part labelled in blue and the total area shown in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING THE EFFECT OF DOUBLING DIMENSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-doubling-dimensions',
      title: 'Investigating the Effect of Doubling Dimensions on Perimeter and Area',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">We investigate how doubling any or all of the dimensions of a 2D figure affects its perimeter and its area. Doubling one dimension of a rectangle doubles either the perimeter contribution from that side or the area proportionally; doubling all dimensions multiplies the perimeter by the scale factor and the area by the scale factor squared.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original dimensions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('doubled dimensions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('area / perimeter change')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key scaling relationships</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">If ${bl('one dimension only')} is multiplied by a factor k, the ${gr('area is multiplied by k')} (the other dimension is unchanged).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">If ${or('all dimensions')} are multiplied by k, the ${gr('perimeter is multiplied by k')} and the ${gr('area is multiplied by k²')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For a circle, doubling the radius ${gr('doubles the circumference')} (linear) but ${gr('quadruples the area')} (area ∝ r²).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why perimeter and area scale differently</p>` +
        `<p style="margin:0;color:#1e3a8a;">Perimeter is a ${bl('one-dimensional')} measure (length), so it scales by the same factor as the dimensions. Area is a ${or('two-dimensional')} measure, so it scales by the ${gr('square of the scale factor')}. This is why enlarging a shape makes its area grow much faster than its perimeter.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 4 cm by 6 cm. Double only the length. Compare the new area to the original.',
          answer: `Original area = ${bl('24 cm²')}. New area = ${or('48 cm²')} — the area ${gr('doubled')}.`,
          steps: [
            `${bl('Original area:')} 4 × 6 = ${bl('24 cm²')}`,
            `${or('New dimensions:')} length doubled → new length = 12 cm, width unchanged = 4 cm`,
            `${or('New area:')} 4 × 12 = ${or('48 cm²')}`,
            `${gr('Comparison:')} 48 ÷ 24 = 2 — the area ${gr('doubled')}, proportional to the single dimension change ✓`,
          ],
        },
        {
          question: 'A square has sides of 5 cm. Double the sides. Compare the new perimeter and area to the original.',
          answer: `Perimeter: ${bl('20 cm')} → ${or('40 cm')} (${gr('doubled')}). Area: ${bl('25 cm²')} → ${or('100 cm²')} (${gr('quadrupled, since 2² = 4')}).`,
          steps: [
            `${bl('Original:')} perimeter = 4 × 5 = ${bl('20 cm')}, area = 5² = ${bl('25 cm²')}`,
            `${or('New sides:')} 5 × 2 = ${or('10 cm')}`,
            `${or('New perimeter:')} 4 × 10 = ${or('40 cm')} — ${gr('doubled')} (perimeter scales by the same factor as the dimensions)`,
            `${or('New area:')} 10² = ${or('100 cm²')} — ${gr('quadrupled')} because 2² = 4 (area scales by the square of the scale factor) ✓`,
          ],
        },
        {
          question: 'Lerato says doubling only one dimension (length OR width) of a rectangle always doubles its area. Is this always true?',
          answer: `${gr('Yes — always true.')} Doubling one dimension while keeping the other fixed always doubles the area.`,
          steps: [
            `Let a rectangle have dimensions ${bl('l')} and ${bl('w')}. Original area = ${bl('l × w')}.`,
            `Double only the length: new area = ${or('2l')} × ${bl('w')} = ${or('2lw')} = ${gr('2 × original area')}`,
            `Double only the width: new area = ${bl('l')} × ${or('2w')} = ${or('2lw')} = ${gr('2 × original area')}`,
            `${gr('Conclusion:')} Yes — if only one dimension doubles while the other stays the same, the area is directly proportional to that dimension, so doubling it always doubles the area ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — double only the width ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A rectangle is 3 cm by 8 cm. Double only the width. Find the new area.',
          answer: '48 cm²',
          checkMode: 'auto',
          correctAnswer: '48cm²',
          correctAnswers: ['48cm²', '48 cm²', '48'],
          explanation: 'Original: 3 × 8 = 24 cm².\nNew width = 3 × 2 = 6 cm. New area = 6 × 8 = 48 cm² (area doubled since only one dimension changed) ✓',
        },

        // ── Q5 Medium — double square sides, separate parts ───────────────────
        {
          difficulty: 'Medium',
          question: 'A square has sides of 6 cm. Double the sides. Find the new perimeter and area.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) New perimeter',
              correctAnswer: '48cm',
              correctAnswers: ['48cm', '48 cm', '48'],
              explanation: 'Original perimeter = 4 × 6 = 24 cm.\nNew sides = 12 cm. New perimeter = 4 × 12 = 48 cm (doubled) ✓',
            },
            {
              label: 'b) New area',
              correctAnswer: '144cm²',
              correctAnswers: ['144cm²', '144 cm²', '144'],
              explanation: 'Original area = 6² = 36 cm².\nNew area = 12² = 144 cm² (quadrupled, since 2² = 4) ✓',
            },
          ],
        },

        // ── Q6 Hard — Lerato tripling (self) ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says tripling one dimension of a rectangle triples its area, while tripling both dimensions multiplies the area by 9. Is she correct? Explain.',
          answer: 'Yes — tripling one dimension only triples area proportionally, but tripling both dimensions means area scales by 3² = 9, since both length and width factors multiply together.',
          checkMode: 'self',
        },

        // ── Q10 Hard — Amahle doubling radius (self) ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says doubling the radius of a circle quadruples its area but only doubles its circumference. Is she correct? Explain.',
          answer: 'Yes — circumference depends linearly on radius (doubles), while area depends on radius squared (quadruples when radius doubles).',
          checkMode: 'self',
        },

        // ── Q11 Medium — halved rectangle ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "A rectangle's dimensions are both halved. The original area was 36 cm². Find the new area.",
          answer: '9 cm²',
          checkMode: 'auto',
          correctAnswer: '9cm²',
          correctAnswers: ['9cm²', '9 cm²', '9'],
          explanation: 'Scale factor = ½. Area scale factor = (½)² = ¼.\nNew area = 36 × ¼ = 9 cm² ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how doubling one dimension vs doubling all dimensions affects the perimeter and area of rectangles and squares differently" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a small square and a larger square with sides doubled, shown side by side with both perimeter and area labelled on each, illustrating the 2x perimeter vs 4x area relationship" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING COMBINED PROBLEMS WITH SCALE FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scale-factors-combined-problems',
      title: 'Solving Combined Problems with Scale Factors',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">We solve problems combining perimeter/area formulae with scale factor reasoning, often comparing original and transformed (enlarged or reduced) shapes in real-life contexts.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('scale factor (linear)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('area scale factor (squared)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final calculation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Scale factor rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Linear scale factor k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Lengths, perimeters and radii are multiplied by ${bl('k')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Area scale factor k²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Areas are always multiplied by ${or('k²')}, the square of the linear scale factor.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Two-step approach</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify the ${bl('linear scale factor k')} (given directly or calculated from the ratio of lengths).<br><strong>Step 2</strong> — Square it to get the ${or('area scale factor k²')}, then multiply the known area to get the ${gr('actual area')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "A garden plan is enlarged by a scale factor of 3 for the actual build. If the plan's area is 8 m², find the actual garden's area.",
          answer: `Actual area = ${gr('72 m²')}`,
          steps: [
            `${bl('Linear scale factor:')} k = ${bl('3')}`,
            `${or('Area scale factor:')} k² = ${or('3² = 9')}`,
            `${gr('Actual area:')} 8 × ${or('9')} = ${gr('72 m²')} ✓`,
          ],
        },
        {
          question: "Thabo's model car is built at a scale of 1:20 (model to actual). If the model's surface area is 15 cm², find the actual car's surface area scale factor and describe the relationship.",
          answer: `Area scale factor = ${or('400')}. The actual car's surface area would be ${gr('400 times')} the model's.`,
          steps: [
            `${bl('Linear scale factor:')} k = ${bl('20')} (the actual car is 20 times larger than the model in every linear dimension)`,
            `${or('Area scale factor:')} k² = ${or('20² = 400')}`,
            `${gr('Relationship:')} The actual car's surface area would be ${gr('400 times')} the model's — though in practice units would need converting (cm² to m²) for a real car ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — garden plan scale factor ──────────────────────────────
        {
          difficulty: 'Medium',
          question: "A garden plan with area 5 m² is enlarged by a scale factor of 4. Find the actual garden's area.",
          answer: '80 m²',
          checkMode: 'auto',
          correctAnswer: '80m²',
          correctAnswers: ['80m²', '80 m²', '80'],
          explanation: 'Area scale factor = 4² = 16. Actual area = 5 × 16 = 80 m² ✓',
        },

        // ── Q8 Hard — model 1:15 (self) ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo's model is built at scale 1:15. If the model's area is 12 cm², find the actual area's scale factor and the actual area (assuming consistent units for simplicity).",
          answer: 'Area scale factor = 15² = 225. Actual area = 12 × 225 = 2700 cm² (in the same units, before any unit conversion if needed).',
          checkMode: 'self',
        },

        // ── Q13 Hard — scale model 1:10 (self) ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A scale model has area 20 cm² at a scale of 1:10. Find the actual area, and explain the relationship used.',
          answer: 'Area scale factor = 10² = 100. Actual area = 20 × 100 = 2000 cm².',
          checkMode: 'self',
        },

        // ── Q14 Hard — triple length double width (self) ──────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's rectangle has its length tripled and width doubled. If original dimensions were 4 cm by 5 cm, find the new area and compare it as a multiple of the original.",
          answer: 'New dimensions: 12 cm by 10 cm. New area = 120 cm². Original area = 20 cm². New area is 6 times the original (3 × 2 = 6, matching the combined scale factors).',
          checkMode: 'self',
        },

        // ── Q15 Hard — circular pool doubling area (self) ─────────────────────
        {
          difficulty: 'Hard',
          question: 'A circular pool with radius 5 m is to be enlarged so its area doubles. Find the new radius to 2 decimal places, explaining your reasoning.',
          answer: 'Original area = 3.14 × 25 = 78.5 m². Doubled area = 157 m². New radius: 157 = 3.14 × r², r² = 50, r = √50 ≈ 7.07 m.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply linear and area scale factors to solve real-life enlargement and reduction problems involving area and perimeter" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a small garden plan and its enlarged version with scale factor k labelled on sides, and k² labelled on the area, illustrating the difference between linear and area scaling" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered area and perimeter.' },
    { minScore: 12, message: 'Great work! You are performing well — review any sections where you lost marks.' },
    { minScore: 8, message: 'Good effort! Review the worked examples and try the questions again.' },
    { minScore: 0, message: 'Keep going! Work through the study guide again and you will get there.' },
  ],
}
