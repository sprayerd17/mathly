import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// triangle area   → blue    (#2563eb)   section 1
// length          → orange  (#ea580c)   section 1
// surface area    → green   (#16a34a)   section 1 / blue section 3
// unit conversion → orange  (#ea580c)   section 2
// calculations    → blue    (#2563eb)   section 2
// final answer    → green   (#16a34a)   section 2
// surface area    → blue    (#2563eb)   section 3
// volume          → green   (#16a34a)   section 3
// scale factor    → orange  (#ea580c)   section 3
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Surface Area and Volume of 3D Objects',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA AND VOLUME OF TRIANGULAR PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangular-prism-surface-area-volume',
      title: 'Surface Area and Volume of Triangular Prisms',
      icon: '▲',
      explanation:
        `<p style="margin-bottom:16px;">We revise surface area and volume formulae for <strong>cubes</strong> and <strong>rectangular prisms</strong>, and extend to <strong>triangular prisms</strong>. A triangular prism has two identical triangular faces and three rectangular faces. For a triangular prism: <strong>Volume = area of triangular base × length</strong> and <strong>Surface Area = (2 × triangle area) + (perimeter of triangle × length)</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('triangle area')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('length')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('surface area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulae</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volume of a triangular prism</p>` +
        `<p style="margin:0;font-size:15px;color:#374151;">V = ${bl('area of triangular base')} × ${or('length')}</p>` +
        `<p style="margin:6px 0 0;font-size:13px;color:#6b7280;">${bl('Triangle area')} = ½ × base × height of the triangle</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Surface area of a triangular prism</p>` +
        `<p style="margin:0;font-size:15px;color:#374151;">${gr('SA')} = (2 × ${bl('triangle area')}) + (perimeter of triangle × ${or('length')})</p>` +
        `<p style="margin:6px 0 0;font-size:13px;color:#6b7280;">The perimeter of the triangle is the sum of all three sides.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Revision: cubes and rectangular prisms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Cube (side = s)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">Volume = s³</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">SA = 6 × s²</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Rectangular prism (l × w × h)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">Volume = l × w × h</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">SA = 2(lw + lh + wh)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Remember the units</p>` +
        `<p style="margin:0;color:#9a3412;">Volume is always in <strong>cubic units</strong> (cm³, m³). Surface area is always in <strong>square units</strong> (cm², m²). Never mix the two.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangular prism has a triangular base with base 6 cm and height 4 cm, and a length of 10 cm. Find its volume.',
          answer: `Volume = ${gr('120 cm³')}`,
          steps: [
            `Find the ${bl('area of the triangular base')}: ${bl('Triangle area')} = ½ × 6 × 4 = ${bl('12 cm²')}`,
            `Apply the volume formula: V = ${bl('triangle area')} × ${or('length')} = ${bl('12')} × ${or('10')} = ${gr('120 cm³')}`,
            `<strong>Answer:</strong> The volume of the prism is ${gr('120 cm³')} ✓`,
          ],
        },
        {
          question: "Find the surface area of the same prism if the triangle's three sides are 6 cm, 5 cm and 5 cm.",
          answer: `${gr('SA')} = ${gr('184 cm²')}`,
          steps: [
            `The ${bl('triangle area')} from Example 1 is ${bl('12 cm²')}.`,
            `Find the perimeter of the triangle: 6 + 5 + 5 = 16 cm.`,
            `Apply the surface area formula: ${gr('SA')} = (2 × ${bl('12')}) + (16 × ${or('10')}) = ${bl('24')} + ${or('160')} = ${gr('184 cm²')}`,
            `<strong>Answer:</strong> The surface area is ${gr('184 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A triangular prism has a triangular base with base 8 cm, height 5 cm, and length 12 cm. Find its volume.',
          answer: '240 cm³',
          checkMode: 'auto',
          correctAnswer: '240',
          correctAnswers: ['240', '240cm³', '240 cm³'],
          explanation: 'Triangle area = ½ × 8 × 5 = 20 cm².\nVolume = 20 × 12 = 240 cm³ ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the surface area of a triangular prism with triangle sides 5 cm, 5 cm and 6 cm, length 10 cm, and triangle area 12 cm².',
          answer: '184 cm²',
          checkMode: 'auto',
          correctAnswer: '184',
          correctAnswers: ['184', '184cm²', '184 cm²'],
          explanation: 'SA = (2 × 12) + ((5 + 5 + 6) × 10) = 24 + 160 = 184 cm² ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates the volume of a triangular prism with base 4 cm, height 3 cm and length 8 cm, and gets 96 cm³. Check his answer.',
          answer: 'Triangle area = ½ × 4 × 3 = 6 cm².\nVolume = 6 × 8 = 48 cm³.\nHe is incorrect — the correct volume is 48 cm³, not 96 cm³.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the volume and surface area of a triangular prism using the triangular base area and the length of the prism" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a triangular prism labelling the triangular base, height, length and three rectangular faces with colour coded measurements" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING PROBLEMS INVOLVING SURFACE AREA, VOLUME AND CAPACITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area-volume-capacity-si-units',
      title: 'Solving Problems Involving Surface Area, Volume and Capacity, with SI Unit Conversions',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life problems involving <strong>surface area, volume and capacity</strong> (using or without a calculator), converting between SI units including mm²↔cm²↔m²↔km², mm³↔cm³↔m³, and ml (cm³)↔l↔kl. Capacity is the amount a container can hold, measured in millilitres, litres and kilolitres.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('unit conversion')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('calculations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI unit conversions</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Area units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 100')} mm² → cm² &nbsp;|&nbsp; ${or('÷ 100')} cm² → mm²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 10 000')} cm² → m² &nbsp;|&nbsp; ${or('÷ 10 000')} m² → cm²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('× 1 000 000')} m² → km² &nbsp;|&nbsp; ${or('÷ 1 000 000')} km² → m²</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Volume units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 1 000')} mm³ → cm³ &nbsp;|&nbsp; ${or('÷ 1 000')} cm³ → mm³</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('× 1 000 000')} cm³ → m³ &nbsp;|&nbsp; ${or('÷ 1 000 000')} m³ → cm³</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Capacity units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('1 cm³ = 1 ml')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('1 000 ml = 1 litre (l)')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('1 000 l = 1 kilolitre (kl)')} &nbsp;|&nbsp; ${or('1 m³ = 1 kl = 1 000 l')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volume and capacity connection</p>` +
        `<p style="margin:0;color:#1e3a8a;">A container with volume <strong>1 m³</strong> holds exactly <strong>1 kilolitre (1 000 litres)</strong> of liquid. This is the key link between volume and capacity.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 5 000 cm³ to litres.',
          answer: `${gr('5 litres')}`,
          steps: [
            `Recall the ${or('conversion')}: ${or('1 000 cm³ = 1 litre')}.`,
            `${bl('Calculate')}: 5 000 ÷ ${or('1 000')} = ${gr('5 litres')}`,
            `<strong>Answer:</strong> 5 000 cm³ = ${gr('5 litres')} ✓`,
          ],
        },
        {
          question: 'A rectangular tank is 2 m by 1.5 m by 1 m. Find its volume in cubic metres, then convert to kilolitres.',
          answer: `Volume = ${gr('3 m³')} = ${gr('3 kl')}`,
          steps: [
            `${bl('Calculate volume')}: V = ${bl('2 × 1.5 × 1')} = ${bl('3 m³')}`,
            `Apply the ${or('conversion')}: ${or('1 m³ = 1 kl')}`,
            `${bl('3 m³')} = ${gr('3 kl')}`,
            `<strong>Answer:</strong> The volume is ${gr('3 m³')} = ${gr('3 kl')} ✓`,
          ],
        },
        {
          question: "Sipho's water tank is a rectangular prism 1.2 m by 0.8 m by 1 m. Find its capacity in litres.",
          answer: `Capacity = ${gr('960 litres')}`,
          steps: [
            `${bl('Calculate volume')}: V = ${bl('1.2 × 0.8 × 1')} = ${bl('0.96 m³')}`,
            `Apply the ${or('conversion')}: ${or('1 m³ = 1 000 litres')}`,
            `${gr('Capacity')} = ${bl('0.96')} × ${or('1 000')} = ${gr('960 litres')}`,
            `<strong>Answer:</strong> Sipho's tank holds ${gr('960 litres')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 3 000 cm³ to litres.',
          answer: '3 litres',
          checkMode: 'auto',
          correctAnswer: '3',
          correctAnswers: ['3', '3 litres', '3l', '3 l'],
          explanation: '1 000 cm³ = 1 litre.\n3 000 ÷ 1 000 = 3 litres ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A rectangular tank is 1.5 m by 1 m by 0.8 m. Find its volume in cubic metres.',
          answer: '1.2 m³',
          checkMode: 'auto',
          correctAnswer: '1.2',
          correctAnswers: ['1.2', '1.2m³', '1.2 m³'],
          explanation: 'Volume = 1.5 × 1 × 0.8 = 1.2 m³ ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Convert the tank's volume in Q5 to kilolitres and litres.",
          answer: '1.2 m³ = 1.2 kl = 1 200 litres, since 1 m³ = 1 kl = 1 000 litres.',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Lerato's water tank is 1 m by 0.6 m by 0.5 m. Find its capacity in litres.",
          answer: '300 litres',
          checkMode: 'auto',
          correctAnswer: '300',
          correctAnswers: ['300', '300 litres', '300l', '300 l'],
          explanation: 'Volume = 1 × 0.6 × 0.5 = 0.3 m³.\nCapacity = 0.3 × 1 000 = 300 litres ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve real-life problems involving volume and capacity with SI unit conversions between cm³, m³, litres and kilolitres" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the chain of SI unit conversions for area, volume and capacity with multiplication and division factors labelled in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE INTERRELATIONSHIP BETWEEN SURFACE AREA AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interrelationship-surface-area-volume',
      title: 'The Interrelationship Between Surface Area and Volume',
      icon: '⚖',
      explanation:
        `<p style="margin-bottom:16px;">We describe the interrelationship between <strong>surface area</strong> and <strong>volume</strong> of cubes, rectangular prisms and triangular prisms. As a shape's dimensions increase, <strong>volume increases faster than surface area</strong> — because volume relates to <em>cubing</em> dimensions while surface area relates to <em>squaring</em> them.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('surface area')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale factor')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Scale factor rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">${bl('Surface area')} scale</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If all dimensions are multiplied by ${or('scale factor k')}, the surface area is multiplied by <strong>${or('k')}²</strong>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">${gr('Volume')} scale</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If all dimensions are multiplied by ${or('scale factor k')}, the volume is multiplied by <strong>${or('k')}³</strong>.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why volume grows faster</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Surface area')} scales by the square of the ${or('scale factor')} (2D), while ${gr('volume')} scales by the cube (3D). For any ${or('k > 1')}, k³ &gt; k² — so ${gr('volume')} always increases proportionally more than ${bl('surface area')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cube has sides of 2 cm. Double the sides to 4 cm. Compare how surface area and volume change.',
          answer: `${bl('SA')} increased 4× (${or('2²')}), ${gr('Volume')} increased 8× (${or('2³')})`,
          steps: [
            `<strong>Original cube (side = 2 cm):</strong><br>${bl('SA')} = 6 × 2² = 6 × 4 = ${bl('24 cm²')}<br>${gr('Volume')} = 2³ = ${gr('8 cm³')}`,
            `<strong>New cube (side = 4 cm), ${or('scale factor k = 2')}:</strong><br>${bl('SA')} = 6 × 4² = 6 × 16 = ${bl('96 cm²')}<br>${gr('Volume')} = 4³ = ${gr('64 cm³')}`,
            `<strong>Compare:</strong> ${bl('SA')} increased by ${or('k²')} = ${or('2²')} = ${or('4')} times (24 × 4 = 96 ✓). ${gr('Volume')} increased by ${or('k³')} = ${or('2³')} = ${or('8')} times (8 × 8 = 64 ✓).`,
            `<strong>Conclusion:</strong> Doubling all sides multiplies ${bl('surface area')} by 4 but multiplies ${gr('volume')} by 8 — ${gr('volume')} grows twice as fast as ${bl('surface area')}.`,
          ],
        },
        {
          question: 'Lerato says doubling all dimensions of a rectangular prism always increases volume more than surface area. Is she correct?',
          answer: `Yes — ${gr('volume')} always increases proportionally more than ${bl('surface area')} for any ${or('scale factor')} &gt; 1`,
          steps: [
            `When all dimensions are multiplied by ${or('scale factor k')}, ${bl('surface area')} is multiplied by ${or('k')}².`,
            `${gr('Volume')} is multiplied by ${or('k')}³.`,
            `For any ${or('k > 1')}, k³ &gt; k² — so ${gr('volume')} always increases proportionally more.`,
            `<strong>Conclusion:</strong> Yes, Lerato is correct — ${bl('surface area')} scales by the square of the ${or('scale factor')}, while ${gr('volume')} scales by the cube, so ${gr('volume')} always increases proportionally more for any ${or('scale factor')} greater than 1.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo says doubling a cube's sides doubles its volume. Is he correct? Explain with calculations.",
          answer: 'No — doubling the sides multiplies the volume by 2³ = 8, not 2. For example, a 2 cm cube has volume 8 cm³, and a 4 cm cube has volume 64 cm³, which is 8 times bigger.',
          checkMode: 'self',
        },

        // ── Q9 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A cube has sides of 3 cm. Find its surface area and volume.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Surface area',
              correctAnswer: '54',
              correctAnswers: ['54', '54cm²', '54 cm²'],
              explanation: 'SA = 6 × 3² = 6 × 9 = 54 cm² ✓',
            },
            {
              label: 'b) Volume',
              correctAnswer: '27',
              correctAnswers: ['27', '27cm³', '27 cm³'],
              explanation: 'Volume = 3³ = 27 cm³ ✓',
            },
          ],
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "A cube's sides increase from 3 cm to 9 cm (scale factor 3). Compare how surface area and volume change.",
          answer: 'Surface area increases by 3² = 9 times.\nVolume increases by 3³ = 27 times.',
          checkMode: 'self',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 8 m³ to litres.',
          answer: '8 000 litres',
          checkMode: 'auto',
          correctAnswer: '8000',
          correctAnswers: ['8000', '8 000', '8000 litres', '8 000 litres'],
          explanation: '1 m³ = 1 000 litres.\n8 × 1 000 = 8 000 litres ✓',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says a rectangular prism with double the length, width and height will have exactly double the surface area too. Is she correct? Explain.',
          answer: 'No — surface area increases by the scale factor squared, so doubling all dimensions increases surface area by 2² = 4 times, not 2 times.',
          checkMode: 'self',
        },

        // ── Q13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangular prism has a triangle area of 15 cm² and length 9 cm. Find its volume.',
          answer: '135 cm³',
          checkMode: 'auto',
          correctAnswer: '135',
          correctAnswers: ['135', '135cm³', '135 cm³'],
          explanation: 'Volume = triangle area × length = 15 × 9 = 135 cm³ ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Convert 2 500 000 cm³ to m³ and then to kilolitres.',
          answer: '2 500 000 cm³ ÷ 1 000 000 = 2.5 m³, which equals 2.5 kl since 1 m³ = 1 kl.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A cube has volume 125 cm³. Find the length of each side, then find the surface area.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Length of each side',
              correctAnswer: '5',
              correctAnswers: ['5', '5cm', '5 cm'],
              explanation: 'Volume = s³ = 125. So s = ∛125 = 5 cm ✓',
            },
            {
              label: 'b) Surface area',
              correctAnswer: '150',
              correctAnswers: ['150', '150cm²', '150 cm²'],
              explanation: 'SA = 6 × s² = 6 × 5² = 6 × 25 = 150 cm² ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how surface area scales by the square and volume scales by the cube of the scale factor, with worked comparisons using cubes and rectangular prisms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing a small cube and a large cube showing how surface area and volume change at different rates when all dimensions are scaled up by the same factor" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered surface area and volume of 3D objects.' },
    { minScore: 12, message: 'Great work! You have a strong understanding. Review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the sections where you dropped marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again and try the questions once more.' },
  ],
}
