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
        'Short video showing how to apply area and perimeter formulae for circles and composite shapes, including SI unit conversions between cm² and m²',
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
        'Short video demonstrating how doubling one dimension vs doubling all dimensions affects the perimeter and area of rectangles and squares differently',

      diagramPlaceholder:
        'A small square and a larger square with sides doubled, shown side by side with both perimeter and area labelled on each, illustrating the 2x perimeter vs 4x area relationship',
      diagramSvg:
        '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="42.5" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="42.5" y="132" font-size="11" fill="#374151" text-anchor="middle">P = 20 cm</text><text x="42.5" y="146" font-size="11" fill="#374151" text-anchor="middle">A = 25 cm²</text><text x="90" y="98" font-size="18" fill="#ea580c" font-weight="700" text-anchor="middle">→</text><text x="90" y="112" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="115" y="25" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="160" y="18" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">10 cm</text><text x="160" y="132" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">P = 40 cm (×2)</text><text x="160" y="146" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">A = 100 cm² (×4)</text></svg>',
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
        'Short video showing how to apply linear and area scale factors to solve real-life enlargement and reduction problems involving area and perimeter',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Circle area and circumference (forward + reverse) ────────
        { difficulty: 'Easy', question: 'A circular fountain has a radius of 7 m, as shown. Find its circumference (π = 3.14).', checkMode: 'auto', options: ['43.96 m', '21.98 m', '153.86 m²', '14 m'], correctIndex: 0, explanation: 'Circumference = 2πr = 2 × 3.14 × 7 = 43.96 m. (21.98 m forgets to double; 153.86 m² wrongly uses the area formula; 14 m forgets π.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 m</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table top has a diameter of 90 cm, as shown. Find its area (π = 3.14).', checkMode: 'auto', options: ['25 434 cm²', '6358.5 cm²', '282.6 cm', '141.3 cm²'], correctIndex: 1, explanation: 'r = d ÷ 2 = 90 ÷ 2 = 45 cm\nArea = πr² = 3.14 × 45² = 3.14 × 2025 = 6358.5 cm². (25 434 cm² mistakenly uses the diameter as the radius; 282.6 cm computes the circumference instead; 141.3 cm² forgets to square the radius.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 90 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular flower bed has a radius of 4.2 m, as shown. Calculate its area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['13.19 m²', '26.38 m', '55.39 m²', '110.78 m²'], correctIndex: 2, explanation: 'Area = πr² = 3.14 × 4.2² = 3.14 × 17.64 = 55.3896 ≈ 55.39 m². (13.19 m² forgets to square r; 26.38 m computes the circumference; 110.78 m² doubles the correct answer.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4.2 m</text></svg>' },
        { difficulty: 'Hard', question: 'A circular racetrack has a circumference of 62.8 m (π = 3.14). Find its radius.', checkMode: 'auto', options: ['20 m', '31.4 m', '4.47 m', '10 m'], correctIndex: 3, explanation: 'C = 2πr\n62.8 = 2 × 3.14 × r\n62.8 = 6.28r\nr = 62.8 ÷ 6.28 = 10 m. (20 m divides by π only; 31.4 m divides by 2 only; 4.47 m wrongly uses the area formula.) ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">C = 62.8 m</text></svg>' },

        // ── Block 2: Composite figures (parts added or subtracted) ────────────
        { difficulty: 'Medium', question: 'A sports field is made of a rectangle 40 m by 25 m with a semicircle of radius 12.5 m attached to one of the 25 m ends, as shown. Find the total area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['1245.31 m²', '1000 m²', '1490.63 m²', '754.69 m²'], correctIndex: 0, explanation: 'Rectangle area = 40 × 25 = 1000 m²\nSemicircle area = ½ × π × 12.5² = 0.5 × 3.14 × 156.25 = 245.3125 m²\nTotal area = 1000 + 245.3125 ≈ 1245.31 m². (1000 m² forgets the semicircle; 1490.63 m² wrongly adds a full circle; 754.69 m² subtracts instead of adding.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">25 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 12.5 m</text></svg>' },
        { difficulty: 'Medium', question: 'A wooden board measuring 80 cm by 50 cm has a semicircular notch of radius 25 cm cut from one edge, as shown. Find the remaining area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['4000 cm²', '3018.75 cm²', '2037.5 cm²', '4981.25 cm²'], correctIndex: 1, explanation: 'Rectangle area = 80 × 50 = 4000 cm²\nSemicircle area = ½ × π × 25² = 0.5 × 3.14 × 625 = 981.25 cm²\nRemaining area = 4000 − 981.25 = 3018.75 cm². (4000 cm² forgets to subtract the notch; 2037.5 cm² wrongly subtracts a full circle; 4981.25 cm² adds instead of subtracting.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 A 45,45 0 0 0 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">80 cm</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">50 cm</text><text x="114" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 25 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped classroom has an outer rectangle of 14 m by 10 m, as shown, with a rectangular corner of 5 m by 4 m missing. Find the floor area.', checkMode: 'auto', options: ['160 m²', '140 m²', '120 m²', '20 m²'], correctIndex: 2, explanation: 'Outer rectangle = 14 × 10 = 140 m²\nMissing corner = 5 × 4 = 20 m²\nFloor area = 140 − 20 = 120 m². (160 m² wrongly adds the corner instead of subtracting; 140 m² forgets to subtract it; 20 m² is only the missing corner.) ✓', diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,61 128.57,61 128.57,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="128.57" y1="61" x2="128.57" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="128.57" y1="61" x2="175" y2="61" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">10 m</text><text x="151.79" y="53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text><text x="183" y="47" font-size="12" fill="#2563eb" font-weight="700">4 m</text></svg>' },
        { difficulty: 'Hard', question: "Sipho's irregular plot is a rectangle 15 m by 9 m with a circular fish pond of radius 2.5 m cut out of it, as shown. Find the remaining area to 2 decimal places (π = 3.14).", checkMode: 'auto', options: ['135 m²', '130.09 m²', '154.63 m²', '115.38 m²'], correctIndex: 3, explanation: 'Rectangle area = 15 × 9 = 135 m²\nCircle area = π × 2.5² = 3.14 × 6.25 = 19.625 m²\nRemaining area = 135 − 19.625 ≈ 115.38 m². (135 m² forgets to subtract the pond; 130.09 m² mistakenly treats 2.5 m as the diameter; 154.63 m² adds the pond instead of subtracting it.) ✓', diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="26.6" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><line x1="110" y1="82.5" x2="136.6" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="123.3" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 m</text></svg>' },

        // ── Block 3: SI unit conversions for area ──────────────────────────────
        { difficulty: 'Easy', question: 'Convert 3.2 m² to cm².', checkMode: 'auto', options: ['32 000 cm²', '320 cm²', '0.00032 cm²', '3200 cm²'], correctIndex: 0, explanation: '1 m² = 10 000 cm²\n3.2 × 10 000 = 32 000 cm². (320 cm² uses the linear factor 100 instead of 10 000; 3200 cm² uses factor 1000; 0.00032 cm² divides instead of multiplying.) ✓' },
        { difficulty: 'Medium', question: 'Convert 68 000 cm² to m².', checkMode: 'auto', options: ['680 m²', '6.8 m²', '68 m²', '6800 m²'], correctIndex: 1, explanation: '1 m² = 10 000 cm²\n68 000 ÷ 10 000 = 6.8 m². (680 m² uses the linear factor 100 instead of 10 000; 68 m² uses factor 1000; 6800 m² multiplies instead of dividing.) ✓' },

        // ── Block 4: Scaling one dimension only ────────────────────────────────
        { difficulty: 'Easy', question: 'A rectangle is 5 cm by 9 cm. Triple only the width. Find the new area.', checkMode: 'auto', options: ['405 cm²', '90 cm²', '135 cm²', '45 cm²'], correctIndex: 2, explanation: 'Original area = 5 × 9 = 45 cm².\nNew width = 5 × 3 = 15 cm. New area = 15 × 9 = 135 cm² (area tripled since only one dimension changed). (405 cm² wrongly triples both dimensions; 90 cm² only doubles the width; 45 cm² forgets to change the width.) ✓' },
        { difficulty: 'Medium', question: "A rectangle's length is doubled while its width stays the same. The original area was 42 cm². Find the new area.", checkMode: 'auto', options: ['168 cm²', '42 cm²', '44 cm²', '84 cm²'], correctIndex: 3, explanation: 'Doubling one dimension only doubles the area.\nNew area = 42 × 2 = 84 cm². (168 cm² wrongly quadruples the area; 42 cm² forgets to scale it; 44 cm² wrongly adds 2 instead of multiplying.) ✓' },
        { difficulty: 'Hard', question: "A rectangular banner's height is quadrupled while its base stays fixed. The original area was 30 m². Find the new area.", checkMode: 'auto', options: ['120 m²', '60 m²', '480 m²', '30 m²'], correctIndex: 0, explanation: 'Quadrupling one dimension only quadruples the area.\nNew area = 30 × 4 = 120 m². (60 m² only doubles it; 480 m² wrongly squares the scale factor (4² = 16); 30 m² forgets to scale it.) ✓' },

        // ── Block 5: Scaling all dimensions (perimeter ×k, area ×k²) ──────────
        { difficulty: 'Medium', question: 'A square has sides of 7 cm. Triple all the sides. Find the new perimeter and area.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) New perimeter', correctAnswer: '84cm', correctAnswers: ['84cm', '84 cm', '84'], explanation: 'New side = 7 × 3 = 21 cm.\nNew perimeter = 4 × 21 = 84 cm ✓' },
          { label: 'b) New area', correctAnswer: '441cm²', correctAnswers: ['441cm²', '441 cm²', '441'], explanation: 'New area = 21² = 441 cm² (original area 49 cm² × 3² = 441 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A rectangle is 4 cm by 6 cm, with an area of 24 cm². All dimensions are enlarged by a scale factor of 2.5. Find the new area.', checkMode: 'auto', options: ['60 cm²', '150 cm²', '120 cm²', '24 cm²'], correctIndex: 1, explanation: 'Area scale factor = 2.5² = 6.25\nNew area = 24 × 6.25 = 150 cm². (60 cm² wrongly uses the linear scale factor 2.5 instead of squaring it; 120 cm² wrongly uses 2 × 2.5; 24 cm² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A circle has radius 3 cm. Its radius is tripled to 9 cm. By what factor does the circle's area increase?", checkMode: 'auto', options: ['×3', '×6', '×9', '×27'], correctIndex: 2, explanation: 'Area scale factor = k² = 3² = 9, so the area increases ×9 (28.26 cm² → 254.34 cm²). (×3 is the circumference/linear scale factor, not the area one; ×6 wrongly adds 3 + 3; ×27 wrongly cubes the scale factor.) ✓', diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Block 6: Combined scale factor problems ────────────────────────────
        { difficulty: 'Medium', question: "A garden plan has an area of 6 m². It is enlarged by a linear scale factor of 5 to build the actual garden. Find the actual garden's area.", checkMode: 'auto', options: ['30 m²', '750 m²', '6 m²', '150 m²'], correctIndex: 3, explanation: 'Area scale factor = 5² = 25\nActual area = 6 × 25 = 150 m². (30 m² wrongly uses the linear scale factor 5 instead of squaring it; 750 m² wrongly uses k³; 6 m² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A model of a building is built at a scale of 1:12 (model to actual). The model's base area is 9 cm². Find the area scale factor and the actual base area (assuming consistent units).", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Area scale factor', correctAnswer: '144', correctAnswers: ['144', '144x', '144 times'], explanation: 'Linear scale factor k = 12\nArea scale factor = k² = 12² = 144 ✓' },
          { label: 'b) Actual base area', correctAnswer: '1296cm²', correctAnswers: ['1296cm²', '1296 cm²', '1296'], explanation: 'Actual area = 9 × 144 = 1296 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: "A playground design is enlarged by a linear scale factor of 5 to build the actual playground. The actual playground has an area of 500 m². Find the area of the original design plan.", checkMode: 'auto', options: ['20 m²', '100 m²', '12500 m²', '4 m²'], correctIndex: 0, explanation: 'Area scale factor = 5² = 25\nPlan area = actual area ÷ area scale factor = 500 ÷ 25 = 20 m². (100 m² wrongly divides by k instead of k²; 12500 m² wrongly multiplies instead of dividing; 4 m² wrongly divides by k³.) ✓' },
        { difficulty: 'Hard', question: "Lerato's rectangular poster, originally 60 cm by 40 cm, is reprinted with its length tripled and its width doubled. Find the new area.", checkMode: 'auto', options: ['12000 cm²', '14400 cm²', '21600 cm²', '7200 cm²'], correctIndex: 1, explanation: 'New length = 60 × 3 = 180 cm, new width = 40 × 2 = 80 cm. New area = 180 × 80 = 14400 cm², which is 6 times the original 2400 cm² (3 × 2 = 6). (12000 cm² wrongly multiplies the original area by 3 + 2 = 5; 21600 cm² wrongly treats it as a single scale factor squared (3² = 9); 7200 cm² only scales the length and forgets the width.) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area, perimeter and scale factor problems.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Circle area and circumference (forward + reverse) ────────
        { difficulty: 'Easy', question: 'A circular fountain has a radius of 9 m, as shown. Find its circumference (π = 3.14).', checkMode: 'auto', options: ['28.26 m', '254.34 m²', '56.52 m', '18 m'], correctIndex: 2, explanation: 'Circumference = 2πr = 2 × 3.14 × 9 = 56.52 m. (28.26 m forgets to double; 254.34 m² wrongly uses the area formula; 18 m forgets π.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 m</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table top has a diameter of 120 cm, as shown. Find its area (π = 3.14).', checkMode: 'auto', options: ['45216 cm²', '376.8 cm', '188.4 cm²', '11304 cm²'], correctIndex: 3, explanation: 'r = d ÷ 2 = 120 ÷ 2 = 60 cm\nA = πr² = 3.14 × 60² = 3.14 × 3600 = 11304 cm². (45216 cm² mistakenly uses the diameter as the radius; 376.8 cm computes the circumference instead; 188.4 cm² forgets to square the radius.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 120 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular flower bed has a radius of 5.5 m, as shown. Calculate its area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['94.99 m²', '17.27 m²', '34.54 m', '189.98 m²'], correctIndex: 0, explanation: 'A = πr² = 3.14 × 5.5² = 3.14 × 30.25 = 94.985 ≈ 94.99 m². (17.27 m² forgets to square r; 34.54 m computes the circumference; 189.98 m² doubles the correct answer.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5.5 m</text></svg>' },
        { difficulty: 'Hard', question: 'A circular pond has an area of 200.96 m² (π = 3.14). Find its radius.', checkMode: 'auto', options: ['64 m', '8 m', '16 m', '5.66 m'], correctIndex: 1, explanation: 'A = πr²\n200.96 = 3.14 × r²\nr² = 200.96 ÷ 3.14 = 64\nr = √64 = 8 m. (64 m forgets to take the square root; 16 m finds the diameter but reports it as the radius; 5.66 m wrongly divides by 2π instead of π.) ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">A = 200.96 m²</text></svg>' },

        // ── Block 2: Composite figures (parts added or subtracted) ────────────
        { difficulty: 'Medium', question: 'A sports field is made of a rectangle 45 m by 20 m with a semicircle of radius 10 m attached to one of the 20 m ends, as shown. Find the total area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['900 m²', '1214 m²', '1057 m²', '743 m²'], correctIndex: 2, explanation: 'Rectangle area = 45 × 20 = 900 m²\nSemicircle area = ½ × π × 10² = 0.5 × 3.14 × 100 = 157 m²\nTotal area = 900 + 157 = 1057 m². (900 m² forgets the semicircle; 1214 m² wrongly adds a full circle; 743 m² subtracts instead of adding.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">20 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 10 m</text></svg>' },
        { difficulty: 'Medium', question: 'A wooden board measuring 90 cm by 60 cm has a semicircular notch of radius 30 cm cut from one edge, as shown. Find the remaining area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['5400 cm²', '2574 cm²', '6813 cm²', '3987 cm²'], correctIndex: 3, explanation: 'Rectangle area = 90 × 60 = 5400 cm²\nSemicircle area = ½ × π × 30² = 0.5 × 3.14 × 900 = 1413 cm²\nRemaining area = 5400 − 1413 = 3987 cm². (5400 cm² forgets to subtract the notch; 2574 cm² wrongly subtracts a full circle; 6813 cm² adds instead of subtracting.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 A 45,45 0 0 0 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">90 cm</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">60 cm</text><text x="114" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 30 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped classroom has an outer rectangle of 16 m by 11 m, as shown, with a rectangular corner of 6 m by 5 m missing. Find the floor area.', checkMode: 'auto', options: ['146 m²', '206 m²', '176 m²', '30 m²'], correctIndex: 0, explanation: 'Outer rectangle = 16 × 11 = 176 m²\nMissing corner = 6 × 5 = 30 m²\nFloor area = 176 − 30 = 146 m². (206 m² wrongly adds the corner instead of subtracting; 176 m² forgets to subtract it; 30 m² is only the missing corner.) ✓', diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,65.91 126.25,65.91 126.25,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="126.25" y1="65.91" x2="126.25" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="126.25" y1="65.91" x2="175" y2="65.91" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">11 m</text><text x="150.63" y="57.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="183" y="49.45" font-size="12" fill="#2563eb" font-weight="700">5 m</text></svg>' },
        { difficulty: 'Hard', question: "Sipho's irregular plot is a rectangle 14 m by 8 m with a circular fish pond of radius 2.5 m cut out of it, as shown. Find the remaining area to 2 decimal places (π = 3.14).", checkMode: 'auto', options: ['112 m²', '92.38 m²', '131.63 m²', '107.09 m²'], correctIndex: 1, explanation: 'Rectangle area = 14 × 8 = 112 m²\nCircle area = π × 2.5² = 3.14 × 6.25 = 19.625 m²\nRemaining area = 112 − 19.625 ≈ 92.38 m². (112 m² forgets to subtract the pond; 131.63 m² adds the pond instead of subtracting it; 107.09 m² mistakenly treats 2.5 m as the diameter.) ✓', diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="26.6" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 m</text><line x1="110" y1="82.5" x2="136.6" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="123.3" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 m</text></svg>' },

        // ── Block 3: SI unit conversions for area ──────────────────────────────
        { difficulty: 'Easy', question: 'Convert 5.6 m² to cm².', checkMode: 'auto', options: ['560 cm²', '5600 cm²', '56 000 cm²', '0.00056 cm²'], correctIndex: 2, explanation: '1 m² = 10 000 cm²\n5.6 × 10 000 = 56 000 cm². (560 cm² uses the linear factor 100 instead of 10 000; 5600 cm² uses factor 1000; 0.00056 cm² divides instead of multiplying.) ✓' },
        { difficulty: 'Medium', question: 'Convert 92 000 cm² to m².', checkMode: 'auto', options: ['920 m²', '92 m²', '0.92 m²', '9.2 m²'], correctIndex: 3, explanation: '1 m² = 10 000 cm²\n92 000 ÷ 10 000 = 9.2 m². (920 m² uses the linear factor 100 instead of 10 000; 92 m² uses factor 1000; 0.92 m² uses factor 100 000.) ✓' },

        // ── Block 4: Scaling one dimension only ────────────────────────────────
        { difficulty: 'Easy', question: 'A rectangle is 4 cm by 11 cm. Triple only the length. Find the new area.', checkMode: 'auto', options: ['132 cm²', '396 cm²', '88 cm²', '44 cm²'], correctIndex: 0, explanation: 'Original area = 4 × 11 = 44 cm².\nNew length = 4 × 3 = 12 cm. New area = 12 × 11 = 132 cm² (area tripled since only one dimension changed). (396 cm² wrongly triples both dimensions; 88 cm² only doubles the length; 44 cm² forgets to change the length.) ✓' },
        { difficulty: 'Medium', question: "A rectangle's width is doubled while its length stays the same. The original area was 36 cm². Find the new area.", checkMode: 'auto', options: ['144 cm²', '72 cm²', '36 cm²', '38 cm²'], correctIndex: 1, explanation: 'Doubling one dimension only doubles the area.\nNew area = 36 × 2 = 72 cm². (144 cm² wrongly quadruples the area; 36 cm² forgets to scale it; 38 cm² wrongly adds 2 instead of multiplying.) ✓' },
        { difficulty: 'Hard', question: "A rectangular banner's base is quadrupled while its height stays fixed. The original area was 25 m². Find the new area.", checkMode: 'auto', options: ['50 m²', '400 m²', '100 m²', '25 m²'], correctIndex: 2, explanation: 'Quadrupling one dimension only quadruples the area.\nNew area = 25 × 4 = 100 m². (50 m² only doubles it; 400 m² wrongly squares the scale factor (4² = 16); 25 m² forgets to scale it.) ✓' },

        // ── Block 5: Scaling all dimensions (perimeter ×k, area ×k²) ──────────
        { difficulty: 'Medium', question: 'A square has sides of 5 cm. Quadruple all the sides. Find the new perimeter and area.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) New perimeter', correctAnswer: '80cm', correctAnswers: ['80cm', '80 cm', '80'], explanation: 'New side = 5 × 4 = 20 cm.\nNew perimeter = 4 × 20 = 80 cm ✓' },
          { label: 'b) New area', correctAnswer: '400cm²', correctAnswers: ['400cm²', '400 cm²', '400'], explanation: 'New area = 20² = 400 cm² (original area 25 cm² × 4² = 400 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×4</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A rectangle is 5 cm by 8 cm, with an area of 40 cm². All dimensions are enlarged by a scale factor of 1.5. Find the new area.', checkMode: 'auto', options: ['60 cm²', '120 cm²', '40 cm²', '90 cm²'], correctIndex: 3, explanation: 'Area scale factor = 1.5² = 2.25\nNew area = 40 × 2.25 = 90 cm². (60 cm² wrongly uses the linear scale factor 1.5 instead of squaring it; 120 cm² wrongly uses 2 × 1.5; 40 cm² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A circle has radius 4 cm. Its radius is doubled to 8 cm. By what factor does the circle's area increase?", checkMode: 'auto', options: ['×4', '×2', '×8', '×16'], correctIndex: 0, explanation: 'Area scale factor = k² = 2² = 4, so the area increases ×4 (50.24 cm² → 200.96 cm²). (×2 is the circumference/linear scale factor, not the area one; ×8 wrongly doubles the scale factor instead of squaring it; ×16 wrongly uses k⁴.) ✓', diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Block 6: Combined scale factor problems ────────────────────────────
        { difficulty: 'Medium', question: "A garden plan has an area of 4 m². It is enlarged by a linear scale factor of 6 to build the actual garden. Find the actual garden's area.", checkMode: 'auto', options: ['24 m²', '144 m²', '864 m²', '4 m²'], correctIndex: 1, explanation: 'Area scale factor = 6² = 36\nActual area = 4 × 36 = 144 m². (24 m² wrongly uses the linear scale factor 6 instead of squaring it; 864 m² wrongly uses k³; 4 m² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A model of a building is built at a scale of 1:10 (model to actual). The model's base area is 7 cm². Find the area scale factor and the actual base area (assuming consistent units).", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Area scale factor', correctAnswer: '100', correctAnswers: ['100', '100x', '100 times'], explanation: 'Linear scale factor k = 10\nArea scale factor = k² = 10² = 100 ✓' },
          { label: 'b) Actual base area', correctAnswer: '700cm²', correctAnswers: ['700cm²', '700 cm²', '700'], explanation: 'Actual area = 7 × 100 = 700 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: "A playground design is enlarged by a linear scale factor of 11 to build the actual playground. The actual playground has an area of 847 m². Find the area of the original design plan.", checkMode: 'auto', options: ['77 m²', '102487 m²', '7 m²', '0.64 m²'], correctIndex: 2, explanation: 'Area scale factor = 11² = 121\nPlan area = actual area ÷ area scale factor = 847 ÷ 121 = 7 m². (77 m² wrongly divides by k instead of k²; 102487 m² wrongly multiplies instead of dividing; 0.64 m² wrongly divides by k³.) ✓' },
        { difficulty: 'Hard', question: "Lerato's rectangular poster, originally 50 cm by 30 cm, is reprinted with its length quadrupled and its width doubled. Find the new area.", checkMode: 'auto', options: ['9000 cm²', '24000 cm²', '6000 cm²', '12000 cm²'], correctIndex: 3, explanation: 'New length = 50 × 4 = 200 cm, new width = 30 × 2 = 60 cm. New area = 200 × 60 = 12000 cm², which is 8 times the original 1500 cm² (4 × 2 = 8). (9000 cm² wrongly multiplies the original area by 4 + 2 = 6; 24000 cm² wrongly treats it as a single scale factor squared (4² = 16); 6000 cm² only scales the length and forgets the width.) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area, perimeter and scale factor problems.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Circle area and circumference (forward + reverse) ────────
        { difficulty: 'Easy', question: 'A circular fountain has a radius of 11 m, as shown. Find its circumference (π = 3.14).', checkMode: 'auto', options: ['69.08 m', '34.54 m', '379.94 m²', '22 m'], correctIndex: 0, explanation: 'Circumference = 2πr = 2 × 3.14 × 11 = 69.08 m. (34.54 m forgets to double; 379.94 m² wrongly uses the area formula; 22 m forgets π.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 11 m</text></svg>' },
        { difficulty: 'Medium', question: 'A circular table top has a diameter of 140 cm, as shown. Find its area (π = 3.14).', checkMode: 'auto', options: ['61544 cm²', '15386 cm²', '439.6 cm', '219.8 cm²'], correctIndex: 1, explanation: 'r = d ÷ 2 = 140 ÷ 2 = 70 cm\nA = πr² = 3.14 × 70² = 3.14 × 4900 = 15386 cm². (61544 cm² mistakenly uses the diameter as the radius; 439.6 cm computes the circumference instead; 219.8 cm² forgets to square the radius.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="110" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">d = 140 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A circular flower bed has a radius of 6.4 m, as shown. Calculate its area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['20.10 m²', '40.19 m', '128.61 m²', '257.22 m²'], correctIndex: 2, explanation: 'A = πr² = 3.14 × 6.4² = 3.14 × 40.96 = 128.6144 ≈ 128.61 m². (20.10 m² forgets to square r; 40.19 m computes the circumference; 257.22 m² doubles the correct answer.) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><text x="140" y="87" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6.4 m</text></svg>' },
        { difficulty: 'Hard', question: 'A circular racetrack has a circumference of 94.2 m (π = 3.14). Find its radius.', checkMode: 'auto', options: ['30 m', '47.1 m', '5.48 m', '15 m'], correctIndex: 3, explanation: 'C = 2πr\n94.2 = 2 × 3.14 × r\n94.2 = 6.28r\nr = 94.2 ÷ 6.28 = 15 m. (30 m divides by π only; 47.1 m divides by 2 only; 5.48 m wrongly uses the area formula.) ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/><line x1="110" y1="95" x2="170" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="140" y="87" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">r = ?</text><text x="110" y="179" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">C = 94.2 m</text></svg>' },

        // ── Block 2: Composite figures (parts added or subtracted) ────────────
        { difficulty: 'Medium', question: 'A sports field is made of a rectangle 30 m by 22 m with a semicircle of radius 11 m attached to one of the 22 m ends, as shown. Find the total area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['849.97 m²', '660 m²', '1039.94 m²', '470.03 m²'], correctIndex: 0, explanation: 'Rectangle area = 30 × 22 = 660 m²\nSemicircle area = ½ × π × 11² = 0.5 × 3.14 × 121 = 189.97 m²\nTotal area = 660 + 189.97 = 849.97 m². (660 m² forgets the semicircle; 1039.94 m² wrongly adds a full circle; 470.03 m² subtracts instead of adding.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="130" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 165,40 A 45,45 0 0 1 165,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="130" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">30 m</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">22 m</text><line x1="165" y1="85" x2="210" y2="85" stroke="#2563eb" stroke-width="2"/><text x="215" y="79" font-size="12" fill="#2563eb" font-weight="700">r = 11 m</text></svg>' },
        { difficulty: 'Medium', question: 'A wooden board measuring 70 cm by 60 cm has a semicircular notch of radius 20 cm cut from one edge, as shown. Find the remaining area to 2 decimal places (π = 3.14).', checkMode: 'auto', options: ['4200 cm²', '3572 cm²', '2944 cm²', '4828 cm²'], correctIndex: 1, explanation: 'Rectangle area = 70 × 60 = 4200 cm²\nSemicircle area = ½ × π × 20² = 0.5 × 3.14 × 400 = 628 cm²\nRemaining area = 4200 − 628 = 3572 cm². (4200 cm² forgets to subtract the notch; 2944 cm² wrongly subtracts a full circle; 4828 cm² adds instead of subtracting.) ✓', diagramSvg: '<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg"><path d="M 35,40 L 165,40 L 165,45 A 40,40 0 0 0 165,125 L 165,130 L 35,130 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="125" y1="85" x2="165" y2="85" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="100" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">70 cm</text><text x="27" y="89" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">60 cm</text><text x="119" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">r = 20 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An L-shaped classroom has an outer rectangle of 15 m by 9 m, as shown, with a rectangular corner of 4 m by 3 m missing. Find the floor area.', checkMode: 'auto', options: ['147 m²', '135 m²', '123 m²', '12 m²'], correctIndex: 2, explanation: 'Outer rectangle = 15 × 9 = 135 m²\nMissing corner = 4 × 3 = 12 m²\nFloor area = 135 − 12 = 123 m². (147 m² wrongly adds the corner instead of subtracting; 135 m² forgets to subtract it; 12 m² is only the missing corner.) ✓', diagramSvg: '<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg"><polygon points="45,55 140.33,55 140.33,25 175,25 175,115 45,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140.33" y1="55" x2="140.33" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="140.33" y1="55" x2="175" y2="55" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/><text x="110" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="37" y="74" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><text x="157.67" y="47" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text><text x="183" y="44" font-size="12" fill="#2563eb" font-weight="700">3 m</text></svg>' },
        { difficulty: 'Hard', question: "Sipho's irregular plot is a rectangle 10 m by 6 m with a circular fish pond of radius 1.5 m cut out of it, as shown. Find the remaining area to 2 decimal places (π = 3.14).", checkMode: 'auto', options: ['60 m²', '67.07 m²', '58.23 m²', '52.94 m²'], correctIndex: 3, explanation: 'Rectangle area = 10 × 6 = 60 m²\nCircle area = π × 1.5² = 3.14 × 2.25 = 7.065 m²\nRemaining area = 60 − 7.065 ≈ 52.94 m². (60 m² forgets to subtract the pond; 67.07 m² adds the pond instead of subtracting it; 58.23 m² mistakenly treats 1.5 m as the diameter.) ✓', diagramSvg: '<svg viewBox="0 0 225 165" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="82.5" r="23" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="5,4"/><text x="110" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="27" y="86.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 m</text><line x1="110" y1="82.5" x2="133" y2="82.5" stroke="#2563eb" stroke-width="2"/><text x="121.5" y="76.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 m</text></svg>' },

        // ── Block 3: SI unit conversions for area ──────────────────────────────
        { difficulty: 'Easy', question: 'Convert 2.4 m² to cm².', checkMode: 'auto', options: ['24 000 cm²', '240 cm²', '2400 cm²', '0.00024 cm²'], correctIndex: 0, explanation: '1 m² = 10 000 cm²\n2.4 × 10 000 = 24 000 cm². (240 cm² uses the linear factor 100 instead of 10 000; 2400 cm² uses factor 1000; 0.00024 cm² divides instead of multiplying.) ✓' },
        { difficulty: 'Medium', question: 'Convert 35 000 cm² to m².', checkMode: 'auto', options: ['350 m²', '3.5 m²', '35 m²', '0.35 m²'], correctIndex: 1, explanation: '1 m² = 10 000 cm²\n35 000 ÷ 10 000 = 3.5 m². (350 m² uses the linear factor 100 instead of 10 000; 35 m² uses factor 1000; 0.35 m² uses factor 100 000.) ✓' },

        // ── Block 4: Scaling one dimension only ────────────────────────────────
        { difficulty: 'Easy', question: 'A rectangle is 6 cm by 7 cm. Triple only the width. Find the new area.', checkMode: 'auto', options: ['378 cm²', '84 cm²', '126 cm²', '42 cm²'], correctIndex: 2, explanation: 'Original area = 6 × 7 = 42 cm².\nNew width = 6 × 3 = 18 cm. New area = 18 × 7 = 126 cm² (area tripled since only one dimension changed). (378 cm² wrongly triples both dimensions; 84 cm² only doubles the width; 42 cm² forgets to change the width.) ✓' },
        { difficulty: 'Medium', question: "A rectangle's length is doubled while its width stays the same. The original area was 54 cm². Find the new area.", checkMode: 'auto', options: ['216 cm²', '54 cm²', '56 cm²', '108 cm²'], correctIndex: 3, explanation: 'Doubling one dimension only doubles the area.\nNew area = 54 × 2 = 108 cm². (216 cm² wrongly quadruples the area; 54 cm² forgets to scale it; 56 cm² wrongly adds 2 instead of multiplying.) ✓' },
        { difficulty: 'Hard', question: "A rectangular banner's height is quadrupled while its base stays fixed. The original area was 18 m². Find the new area.", checkMode: 'auto', options: ['72 m²', '36 m²', '288 m²', '18 m²'], correctIndex: 0, explanation: 'Quadrupling one dimension only quadruples the area.\nNew area = 18 × 4 = 72 m². (36 m² only doubles it; 288 m² wrongly squares the scale factor (4² = 16); 18 m² forgets to scale it.) ✓' },

        // ── Block 5: Scaling all dimensions (perimeter ×k, area ×k²) ──────────
        { difficulty: 'Medium', question: 'A square has sides of 9 cm. Triple all the sides. Find the new perimeter and area.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) New perimeter', correctAnswer: '108cm', correctAnswers: ['108cm', '108 cm', '108'], explanation: 'New side = 9 × 3 = 27 cm.\nNew perimeter = 4 × 27 = 108 cm ✓' },
          { label: 'b) New area', correctAnswer: '729cm²', correctAnswers: ['729cm²', '729 cm²', '729'], explanation: 'New area = 27² = 729 cm² (original area 81 cm² × 3² = 729 cm²) ✓' },
        ], diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowSq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="25" y="60" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52.5" y="50" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><line x1="92" y1="87.5" x2="160" y2="87.5" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSq)"/><text x="126" y="75.5" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="175" y="43.5" width="88" height="88" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A rectangle is 3 cm by 10 cm, with an area of 30 cm². All dimensions are enlarged by a scale factor of 2. Find the new area.', checkMode: 'auto', options: ['60 cm²', '120 cm²', '240 cm²', '30 cm²'], correctIndex: 1, explanation: 'Area scale factor = 2² = 4\nNew area = 30 × 4 = 120 cm². (60 cm² wrongly uses the linear scale factor 2 instead of squaring it; 240 cm² wrongly uses k³ = 8; 30 cm² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A circle has radius 5 cm. Its radius is tripled to 15 cm. By what factor does the circle's area increase?", checkMode: 'auto', options: ['×3', '×6', '×9', '×27'], correctIndex: 2, explanation: 'Area scale factor = k² = 3² = 9, so the area increases ×9 (78.5 cm² → 706.5 cm²). (×3 is the circumference/linear scale factor, not the area one; ×6 wrongly adds 3 + 3; ×27 wrongly cubes the scale factor.) ✓', diagramSvg: '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrowCi" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="70" cy="90" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="90" r="2.5" fill="#0f1f3d"/><line x1="70" y1="90" x2="112" y2="90" stroke="#2563eb" stroke-width="2"/><text x="91" y="82" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><line x1="126" y1="90" x2="180" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowCi)"/><text x="153" y="78" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><circle cx="207" cy="90" r="27.3" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,4"/></svg>' },

        // ── Block 6: Combined scale factor problems ────────────────────────────
        { difficulty: 'Medium', question: "A garden plan has an area of 3 m². It is enlarged by a linear scale factor of 7 to build the actual garden. Find the actual garden's area.", checkMode: 'auto', options: ['21 m²', '1029 m²', '3 m²', '147 m²'], correctIndex: 3, explanation: 'Area scale factor = 7² = 49\nActual area = 3 × 49 = 147 m². (21 m² wrongly uses the linear scale factor 7 instead of squaring it; 1029 m² wrongly uses k³; 3 m² forgets to scale it.) ✓' },
        { difficulty: 'Hard', question: "A model of a building is built at a scale of 1:8 (model to actual). The model's base area is 5 cm². Find the area scale factor and the actual base area (assuming consistent units).", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Area scale factor', correctAnswer: '64', correctAnswers: ['64', '64x', '64 times'], explanation: 'Linear scale factor k = 8\nArea scale factor = k² = 8² = 64 ✓' },
          { label: 'b) Actual base area', correctAnswer: '320cm²', correctAnswers: ['320cm²', '320 cm²', '320'], explanation: 'Actual area = 5 × 64 = 320 cm² ✓' },
        ] },
        { difficulty: 'Hard', question: "A playground design is enlarged by a linear scale factor of 9 to build the actual playground. The actual playground has an area of 486 m². Find the area of the original design plan.", checkMode: 'auto', options: ['6 m²', '54 m²', '39366 m²', '0.67 m²'], correctIndex: 0, explanation: 'Area scale factor = 9² = 81\nPlan area = actual area ÷ area scale factor = 486 ÷ 81 = 6 m². (54 m² wrongly divides by k instead of k²; 39366 m² wrongly multiplies instead of dividing; 0.67 m² wrongly divides by k³.) ✓' },
        { difficulty: 'Hard', question: "Lerato's rectangular poster, originally 40 cm by 30 cm, is reprinted with its length multiplied by 5 and its width doubled. Find the new area.", checkMode: 'auto', options: ['8400 cm²', '12000 cm²', '30000 cm²', '6000 cm²'], correctIndex: 1, explanation: 'New length = 40 × 5 = 200 cm, new width = 30 × 2 = 60 cm. New area = 200 × 60 = 12000 cm², which is 10 times the original 1200 cm² (5 × 2 = 10). (8400 cm² wrongly multiplies the original area by 5 + 2 = 7; 30000 cm² wrongly treats it as a single scale factor squared (5² = 25); 6000 cm² only scales the length and forgets the width.) ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered area, perimeter and scale factor problems.' },
        { minScore: 14, message: 'Great work! You have a strong grasp of these skills — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again section by section, then try again.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered area and perimeter.' },
    { minScore: 12, message: 'Great work! You are performing well — review any sections where you lost marks.' },
    { minScore: 8, message: 'Good effort! Review the worked examples and try the questions again.' },
    { minScore: 0, message: 'Keep going! Work through the study guide again and you will get there.' },
  ],
}
