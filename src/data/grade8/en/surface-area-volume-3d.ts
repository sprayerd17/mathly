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
        'Diagram of a triangular prism labelling the triangular base, height and length',

      diagramSvg:
        '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="50,70 110,70 80,5" fill="none" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="3,3"/>' +
        '<line x1="20" y1="90" x2="50" y2="70" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="3,3"/>' +
        '<line x1="80" y1="90" x2="110" y2="70" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="50" y1="25" x2="80" y2="5" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<polygon points="20,90 80,90 50,25" fill="#eff6ff" fill-opacity="0.6" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="50" y1="25" x2="50" y2="90" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="3,3"/>' +
        '<text x="50" y="108" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">base</text>' +
        '<text x="30" y="58" font-size="11" font-weight="700" fill="#2563eb">height</text>' +
        '<text x="98" y="76" font-size="11" font-weight="700" fill="#ea580c">length</text>' +
        '</svg>',
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
        'Diagram comparing a small cube and a large cube showing how surface area and volume change at different rates when all dimensions are scaled up by the same factor',

      diagramSvg:
        '<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="165" y="16" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Scale factor k = 2</text>' +
        '<g transform="translate(70,75)">' +
        '<polygon points="-12,-12 12,-12 12,12 -12,12" fill="none" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="-4" y1="-20" x2="20" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="20" y1="-20" x2="20" y2="4" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="20" y1="4" x2="-4" y2="4" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<line x1="-4" y1="4" x2="-4" y2="-20" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<line x1="-12" y1="-12" x2="-4" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="12" y1="-12" x2="20" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="12" y1="12" x2="20" y2="4" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="-12" y1="12" x2="-4" y2="4" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<text x="0" y="36" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">2 cm</text>' +
        '<text x="0" y="49" font-size="9.5" text-anchor="middle"><tspan fill="#2563eb">SA 24 cm²</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">V 8 cm³</tspan></text>' +
        '</g>' +
        '<text x="165" y="82" font-size="18" font-weight="700" text-anchor="middle" fill="#ea580c">×2</text>' +
        '<text x="165" y="112" font-size="10.5" text-anchor="middle"><tspan fill="#2563eb">SA ×4</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">Volume ×8</tspan></text>' +
        '<g transform="translate(260,95)">' +
        '<polygon points="-24,-24 24,-24 24,24 -24,24" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-8" y1="-40" x2="40" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="40" y1="-40" x2="40" y2="8" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="40" y1="8" x2="-8" y2="8" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-8" y1="8" x2="-8" y2="-40" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-24" y1="-24" x2="-8" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="24" y1="-24" x2="40" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="24" y1="24" x2="40" y2="8" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-24" y1="24" x2="-8" y2="8" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<text x="0" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">4 cm</text>' +
        '<text x="0" y="57" font-size="9.5" text-anchor="middle"><tspan fill="#2563eb">SA 96 cm²</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">V 64 cm³</tspan></text>' +
        '</g>' +
        '</svg>',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered surface area and volume of 3D objects.' },
    { minScore: 12, message: 'Great work! You have a strong understanding. Review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the sections where you dropped marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again and try the questions once more.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Surface area of rectangular prisms/cubes [diagram-aware] |
    // 3-5 Volume of rectangular prisms/cubes [diagram-aware] | 6-8 Surface
    // area of triangular prisms [diagram-aware] | 9-11 Volume of triangular
    // prisms [diagram-aware] | 12-15 Reverse/missing-dimension questions
    // [diagram-aware] | 16-19 Applied/multi-step real-world word problems
    // [some diagram-aware]
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Surface area of rectangular prisms/cubes ──────────────
        { difficulty: 'Easy', question: 'A cube has sides of 6 cm, as shown. Find its total surface area.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'SA = 6 × s² = 6 × 6² = 6 × 36 = 216 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 8 cm, width 5 cm and height 3 cm, as shown. Find its total surface area.', answer: '158 cm²', checkMode: 'auto', correctAnswer: '158', correctAnswers: ['158', '158cm²', '158 cm²'], explanation: 'SA = 2(lw + lh + wh) = 2(8×5 + 8×3 + 5×3) = 2(40 + 24 + 15) = 2 × 79 = 158 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A storage cube has sides of 9 cm, as shown. Palesa says its surface area is 81 cm² because she only calculated one face and multiplied it incorrectly. Find the correct surface area and explain her mistake.', answer: 'SA = 6 × 9² = 6 × 81 = 486 cm². Palesa forgot to multiply by 6 for all the faces — she only found the area of one face (9² = 81 cm²) and stopped there instead of including all 6 identical faces of the cube.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },

        // ── Block 2: Volume of rectangular prisms/cubes ─────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 4 cm, as shown. Find its volume.', answer: '64 cm³', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64cm³', '64 cm³'], explanation: 'Volume = s³ = 4³ = 64 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">4 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 9 cm, width 4 cm and height 3 cm, as shown. Find its volume.', answer: '108 cm³', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108cm³', '108 cm³'], explanation: 'Volume = l × w × h = 9 × 4 × 3 = 108 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A cube-shaped storage crate has sides of 6 cm, as shown. Find both its surface area and its volume.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Surface area', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'SA = 6 × 6² = 6 × 36 = 216 cm² ✓' }, { label: 'b) Volume', correctAnswer: '216', correctAnswers: ['216', '216cm³', '216 cm³'], explanation: 'Volume = 6³ = 216 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },

        // ── Block 3: Surface area of triangular prisms ──────────────────────
        { difficulty: 'Medium', question: 'A triangular prism has a right-angled triangular base with the two shorter sides 6 cm and 8 cm (so the longest side is 10 cm), and a length of 15 cm, as shown. Find its total surface area.', answer: '408 cm²', checkMode: 'auto', correctAnswer: '408', correctAnswers: ['408', '408cm²', '408 cm²'], explanation: 'Triangle area = ½ × 6 × 8 = 24 cm² (the 6 cm and 8 cm sides meet at the right angle).\nPerimeter of triangle = 6 + 8 + 10 = 24 cm.\nSA = (2 × 24) + (24 × 15) = 48 + 360 = 408 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">8 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">10 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A triangular prism has an isosceles triangular base with base 10 cm, height 12 cm, and equal slanted sides of 13 cm each, and a length of 20 cm, as shown. Find its total surface area.', answer: '840 cm²', checkMode: 'auto', correctAnswer: '840', correctAnswers: ['840', '840cm²', '840 cm²'], explanation: 'Triangle area = ½ × 10 × 12 = 60 cm².\nPerimeter of triangle = 13 + 13 + 10 = 36 cm.\nSA = (2 × 60) + (36 × 20) = 120 + 720 = 840 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">12 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">13 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">20 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo calculates the surface area of a triangular prism with triangle sides 6 cm, 8 cm and 10 cm, triangle area 24 cm², and length 15 cm. He writes SA = 24 + (24 × 15) = 384 cm². Find the correct surface area and explain his error.', answer: 'The correct surface area is (2 × 24) + (24 × 15) = 48 + 360 = 408 cm². Thabo forgot to double the triangle area — a prism has TWO triangular end faces, not one, so the formula needs 2 × triangle area, not just the triangle area once.', checkMode: 'self' },

        // ── Block 4: Volume of triangular prisms ─────────────────────────────
        { difficulty: 'Easy-Medium', question: 'A triangular prism has a triangular base with base 9 cm and height 4 cm, and a length of 14 cm, as shown. Find its volume.', answer: '252 cm³', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252cm³', '252 cm³'], explanation: 'Triangle area = ½ × 9 × 4 = 18 cm².\nVolume = 18 × 14 = 252 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">4 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">14 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular prism has a triangular base with base 7 cm and height 6 cm, and a length of 11 cm, as shown. Find its volume.', answer: '231 cm³', checkMode: 'auto', correctAnswer: '231', correctAnswers: ['231', '231cm³', '231 cm³'], explanation: 'Triangle area = ½ × 7 × 6 = 21 cm².\nVolume = 21 × 11 = 231 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">6 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Explain, in words, the two steps needed to find the volume of a triangular prism, then apply them to a prism with triangular base 8 cm base and 5 cm height, and length 10 cm.', answer: 'First find the area of the triangular base using ½ × base × height. Then multiply that triangle area by the length of the prism. Triangle area = ½ × 8 × 5 = 20 cm². Volume = 20 × 10 = 200 cm³.', checkMode: 'self' },

        // ── Block 5: Reverse/missing-dimension questions ────────────────────
        { difficulty: 'Medium', question: 'A cube has a volume of 343 cm³. Find the length of each side.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'Volume = s³ = 343. So s = ∛343 = 7 cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular prism has a volume of 180 cm³. Its length is 9 cm and its width is 5 cm. Find its height.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'Volume = l × w × h, so 180 = 9 × 5 × h = 45 × h.\nh = 180 ÷ 45 = 4 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'A cube has a total surface area of 294 cm². Find the length of each side.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'SA = 6s², so 294 = 6s².\ns² = 294 ÷ 6 = 49.\ns = √49 = 7 cm ✓' },
        { difficulty: 'Hard', question: 'A triangular prism has a volume of 200 cm³ and a triangular base area of 20 cm². Find the length of the prism.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = triangle area × length, so 200 = 20 × length.\nLength = 200 ÷ 20 = 10 cm ✓' },

        // ── Block 6: Applied/multi-step real-world word problems ────────────
        { difficulty: 'Medium', question: 'A gift box in the shape of a rectangular prism measures 12 cm by 8 cm by 5 cm, as shown. Zanele wants to wrap it completely in wrapping paper. How much paper does she need, at minimum?', answer: '392 cm²', checkMode: 'auto', correctAnswer: '392', correctAnswers: ['392', '392cm²', '392 cm²'], explanation: 'Wrapping the box completely means covering its total surface area.\nSA = 2(lw + lh + wh) = 2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 2 × 196 = 392 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: "A fish tank shaped like a rectangular prism measures 50 cm by 30 cm by 20 cm, as shown. Find the tank's capacity in litres (1 000 cm³ = 1 litre).", answer: '30 litres', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 litres', '30l', '30 l'], explanation: 'Volume = 50 × 30 × 20 = 30 000 cm³.\nCapacity = 30 000 ÷ 1 000 = 30 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">30 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A canvas tent has triangular end walls with base 8 m and height 3 m, and equal slanted sides of 5 m each, with the tent 4 m long, as shown. Find the volume of air inside the tent and the total surface area of canvas needed (including the two triangular ends, but not the ground).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume of air inside', correctAnswer: '48', correctAnswers: ['48', '48m³', '48 m³'], explanation: 'Triangle area = ½ × 8 × 3 = 12 m².\nVolume = 12 × 4 = 48 m³ ✓' }, { label: 'b) Total surface area of canvas', correctAnswer: '96', correctAnswers: ['96', '96m²', '96 m²'], explanation: 'Perimeter of triangle = 5 + 5 + 8 = 18 m.\nSA = (2 × 12) + (18 × 4) = 24 + 72 = 96 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">3 m</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">4 m</text></svg>' },
        { difficulty: 'Hard', question: "A cube-shaped water tank has sides of 6 m. A larger cube-shaped tank has sides of 12 m — exactly double. Bongani says the larger tank will hold exactly double the water. Is he correct? Compare the two tanks' volumes to check.", answer: "No — the small tank (side 6 m) has volume 6³ = 216 m³, and the large tank (side 12 m) has volume 12³ = 1 728 m³. That is 1 728 ÷ 216 = 8 times more, not double. Doubling all the dimensions of a cube multiplies its volume by 2³ = 8, so Bongani is incorrect.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered surface area and volume of rectangular and triangular prisms.' },
        { minScore: 14, message: 'Great work! You have a strong understanding. Review any missed questions and try again.' },
        { minScore: 9, message: 'Good effort! Review the sections where you dropped marks and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and try the questions once more.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Surface area of rectangular prisms/cubes ──────────────
        { difficulty: 'Easy', question: 'A cube has sides of 7 cm, as shown. Find its total surface area.', answer: '294 cm²', checkMode: 'auto', correctAnswer: '294', correctAnswers: ['294', '294cm²', '294 cm²'], explanation: 'SA = 6 × s² = 6 × 7² = 6 × 49 = 294 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">7 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 10 cm, width 6 cm and height 4 cm, as shown. Find its total surface area.', answer: '248 cm²', checkMode: 'auto', correctAnswer: '248', correctAnswers: ['248', '248cm²', '248 cm²'], explanation: 'SA = 2(lw + lh + wh) = 2(10×6 + 10×4 + 6×4) = 2(60 + 40 + 24) = 2 × 124 = 248 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A storage cube has sides of 11 cm, as shown. Amahle says its surface area is 121 cm² because she only calculated one face and stopped there. Find the correct surface area and explain her mistake.', answer: 'SA = 6 × 11² = 6 × 121 = 726 cm². Amahle forgot to multiply by 6 for all the faces — she only found the area of one face (11² = 121 cm²) and stopped there instead of including all 6 identical faces of the cube.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">11 cm</text></svg>' },

        // ── Block 2: Volume of rectangular prisms/cubes ─────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 5 cm, as shown. Find its volume.', answer: '125 cm³', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125cm³', '125 cm³'], explanation: 'Volume = s³ = 5³ = 125 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 12 cm, width 5 cm and height 4 cm, as shown. Find its volume.', answer: '240 cm³', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240', '240cm³', '240 cm³'], explanation: 'Volume = l × w × h = 12 × 5 × 4 = 240 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A cube-shaped storage crate has sides of 10 cm, as shown. Find both its surface area and its volume.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Surface area', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'SA = 6 × 10² = 6 × 100 = 600 cm² ✓' }, { label: 'b) Volume', correctAnswer: '1000', correctAnswers: ['1000', '1 000', '1000cm³', '1000 cm³', '1 000 cm³'], explanation: 'Volume = 10³ = 1 000 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">10 cm</text></svg>' },

        // ── Block 3: Surface area of triangular prisms ──────────────────────
        { difficulty: 'Medium', question: 'A triangular prism has a right-angled triangular base with the two shorter sides 9 cm and 12 cm (so the longest side is 15 cm), and a length of 18 cm, as shown. Find its total surface area.', answer: '756 cm²', checkMode: 'auto', correctAnswer: '756', correctAnswers: ['756', '756cm²', '756 cm²'], explanation: 'Triangle area = ½ × 9 × 12 = 54 cm² (the 9 cm and 12 cm sides meet at the right angle).\nPerimeter of triangle = 9 + 12 + 15 = 36 cm.\nSA = (2 × 54) + (36 × 18) = 108 + 648 = 756 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">12 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">15 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">18 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A triangular prism has an isosceles triangular base with base 8 cm, height 3 cm, and equal slanted sides of 5 cm each, and a length of 10 cm, as shown. Find its total surface area.', answer: '204 cm²', checkMode: 'auto', correctAnswer: '204', correctAnswers: ['204', '204cm²', '204 cm²'], explanation: 'Triangle area = ½ × 8 × 3 = 12 cm².\nPerimeter of triangle = 5 + 5 + 8 = 18 cm.\nSA = (2 × 12) + (18 × 10) = 24 + 180 = 204 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">3 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Lindiwe calculates the surface area of a triangular prism with triangle sides 9 cm, 12 cm and 15 cm, triangle area 54 cm², and length 18 cm. She writes SA = 54 + (36 × 18) = 702 cm². Find the correct surface area and explain her error.', answer: 'The correct surface area is (2 × 54) + (36 × 18) = 108 + 648 = 756 cm². Lindiwe forgot to double the triangle area — a prism has TWO triangular end faces, not one, so the formula needs 2 × triangle area, not just the triangle area once.', checkMode: 'self' },

        // ── Block 4: Volume of triangular prisms ─────────────────────────────
        { difficulty: 'Easy-Medium', question: 'A triangular prism has a triangular base with base 10 cm and height 5 cm, and a length of 16 cm, as shown. Find its volume.', answer: '400 cm³', checkMode: 'auto', correctAnswer: '400', correctAnswers: ['400', '400cm³', '400 cm³'], explanation: 'Triangle area = ½ × 10 × 5 = 25 cm².\nVolume = 25 × 16 = 400 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">5 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">16 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular prism has a triangular base with base 8 cm and height 9 cm, and a length of 12 cm, as shown. Find its volume.', answer: '432 cm³', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', '432cm³', '432 cm³'], explanation: 'Triangle area = ½ × 8 × 9 = 36 cm².\nVolume = 36 × 12 = 432 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">9 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Explain, in words, the two steps needed to find the volume of a triangular prism, then apply them to a prism with triangular base 6 cm base and 4 cm height, and length 9 cm.', answer: 'First find the area of the triangular base using ½ × base × height. Then multiply that triangle area by the length of the prism. Triangle area = ½ × 6 × 4 = 12 cm². Volume = 12 × 9 = 108 cm³.', checkMode: 'self' },

        // ── Block 5: Reverse/missing-dimension questions ────────────────────
        { difficulty: 'Medium', question: 'A cube has a volume of 512 cm³. Find the length of each side.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'Volume = s³ = 512. So s = ∛512 = 8 cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular prism has a volume of 210 cm³. Its length is 7 cm and its width is 6 cm. Find its height.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'Volume = l × w × h, so 210 = 7 × 6 × h = 42 × h.\nh = 210 ÷ 42 = 5 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'A cube has a total surface area of 384 cm². Find the length of each side.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'SA = 6s², so 384 = 6s².\ns² = 384 ÷ 6 = 64.\ns = √64 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'A triangular prism has a volume of 270 cm³ and a triangular base area of 27 cm². Find the length of the prism.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = triangle area × length, so 270 = 27 × length.\nLength = 270 ÷ 27 = 10 cm ✓' },

        // ── Block 6: Applied/multi-step real-world word problems ────────────
        { difficulty: 'Medium', question: 'A gift box in the shape of a rectangular prism measures 15 cm by 10 cm by 6 cm, as shown. Sipho wants to wrap it completely in wrapping paper. How much paper does he need, at minimum?', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'Wrapping the box completely means covering its total surface area.\nSA = 2(lw + lh + wh) = 2(15×10 + 15×6 + 10×6) = 2(150 + 90 + 60) = 2 × 300 = 600 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Medium', question: "A fish tank shaped like a rectangular prism measures 40 cm by 25 cm by 20 cm, as shown. Find the tank's capacity in litres (1 000 cm³ = 1 litre).", answer: '20 litres', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 litres', '20l', '20 l'], explanation: 'Volume = 40 × 25 × 20 = 20 000 cm³.\nCapacity = 20 000 ÷ 1 000 = 20 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A canvas tent has triangular end walls with base 6 m and height 4 m, and equal slanted sides of 5 m each, with the tent 7 m long, as shown. Find the volume of air inside the tent and the total surface area of canvas needed (including the two triangular ends, but not the ground).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume of air inside', correctAnswer: '84', correctAnswers: ['84', '84m³', '84 m³'], explanation: 'Triangle area = ½ × 6 × 4 = 12 m².\nVolume = 12 × 7 = 84 m³ ✓' }, { label: 'b) Total surface area of canvas', correctAnswer: '136', correctAnswers: ['136', '136m²', '136 m²'], explanation: 'Perimeter of triangle = 5 + 5 + 6 = 16 m.\nSA = (2 × 12) + (16 × 7) = 24 + 112 = 136 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">4 m</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'Two gift boxes hold exactly the same volume of 1 000 cm³. Box A is a cube with sides of 10 cm. Box B is a rectangular prism 20 cm by 5 cm by 10 cm. Zola says both boxes need the same amount of wrapping paper since their volumes are equal. Is she correct? Compare their surface areas to check.', answer: "No — Box A (the cube) has surface area 2(10×10 + 10×10 + 10×10) = 6 × 100 = 600 cm², while Box B has surface area 2(20×5 + 20×10 + 5×10) = 2(100 + 200 + 50) = 700 cm². Even though both boxes have the same volume (1 000 cm³), Box B needs more wrapping paper because equal volumes do not guarantee equal surface areas — the shape matters.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply surface area and volume formulae to rectangular and triangular prisms.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Surface area of rectangular prisms/cubes ──────────────
        { difficulty: 'Easy', question: 'A cube has sides of 5 cm, as shown. Find its total surface area.', answer: '150 cm²', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150cm²', '150 cm²'], explanation: 'SA = 6 × s² = 6 × 5² = 6 × 25 = 150 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 12 cm, width 7 cm and height 5 cm, as shown. Find its total surface area.', answer: '358 cm²', checkMode: 'auto', correctAnswer: '358', correctAnswers: ['358', '358cm²', '358 cm²'], explanation: 'SA = 2(lw + lh + wh) = 2(12×7 + 12×5 + 7×5) = 2(84 + 60 + 35) = 2 × 179 = 358 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A storage cube has sides of 8 cm, as shown. Karabo says its surface area is 64 cm² because he only calculated one face and stopped there. Find the correct surface area and explain his mistake.', answer: 'SA = 6 × 8² = 6 × 64 = 384 cm². Karabo forgot to multiply by 6 for all the faces — he only found the area of one face (8² = 64 cm²) and stopped there instead of including all 6 identical faces of the cube.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">8 cm</text></svg>' },

        // ── Block 2: Volume of rectangular prisms/cubes ─────────────────────
        { difficulty: 'Easy', question: 'A cube has sides of 3 cm, as shown. Find its volume.', answer: '27 cm³', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27cm³', '27 cm³'], explanation: 'Volume = s³ = 3³ = 27 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">3 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A rectangular box has length 11 cm, width 6 cm and height 2 cm, as shown. Find its volume.', answer: '132 cm³', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132cm³', '132 cm³'], explanation: 'Volume = l × w × h = 11 × 6 × 2 = 132 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A cube-shaped storage crate has sides of 12 cm, as shown. Find both its surface area and its volume.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Surface area', correctAnswer: '864', correctAnswers: ['864', '864cm²', '864 cm²'], explanation: 'SA = 6 × 12² = 6 × 144 = 864 cm² ✓' }, { label: 'b) Volume', correctAnswer: '1728', correctAnswers: ['1728', '1 728', '1728cm³', '1728 cm³', '1 728 cm³'], explanation: 'Volume = 12³ = 1 728 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">12 cm</text></svg>' },

        // ── Block 3: Surface area of triangular prisms ──────────────────────
        { difficulty: 'Medium', question: 'A triangular prism has a right-angled triangular base with the two shorter sides 5 cm and 12 cm (so the longest side is 13 cm), and a length of 20 cm, as shown. Find its total surface area.', answer: '660 cm²', checkMode: 'auto', correctAnswer: '660', correctAnswers: ['660', '660cm²', '660 cm²'], explanation: 'Triangle area = ½ × 5 × 12 = 30 cm² (the 5 cm and 12 cm sides meet at the right angle).\nPerimeter of triangle = 5 + 12 + 13 = 30 cm.\nSA = (2 × 30) + (30 × 20) = 60 + 600 = 660 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">12 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">13 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">20 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A triangular prism has an isosceles triangular base with base 12 cm, height 8 cm, and equal slanted sides of 10 cm each, and a length of 14 cm, as shown. Find its total surface area.', answer: '544 cm²', checkMode: 'auto', correctAnswer: '544', correctAnswers: ['544', '544cm²', '544 cm²'], explanation: 'Triangle area = ½ × 12 × 8 = 48 cm².\nPerimeter of triangle = 10 + 10 + 12 = 32 cm.\nSA = (2 × 48) + (32 × 14) = 96 + 448 = 544 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">10 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">14 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Mpho calculates the surface area of a triangular prism with triangle sides 5 cm, 12 cm and 13 cm, triangle area 30 cm², and length 20 cm. He writes SA = 30 + (30 × 20) = 630 cm². Find the correct surface area and explain his error.', answer: 'The correct surface area is (2 × 30) + (30 × 20) = 60 + 600 = 660 cm². Mpho forgot to double the triangle area — a prism has TWO triangular end faces, not one, so the formula needs 2 × triangle area, not just the triangle area once.', checkMode: 'self' },

        // ── Block 4: Volume of triangular prisms ─────────────────────────────
        { difficulty: 'Easy-Medium', question: 'A triangular prism has a triangular base with base 14 cm and height 6 cm, and a length of 9 cm, as shown. Find its volume.', answer: '378 cm³', checkMode: 'auto', correctAnswer: '378', correctAnswers: ['378', '378cm³', '378 cm³'], explanation: 'Triangle area = ½ × 14 × 6 = 42 cm².\nVolume = 42 × 9 = 378 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">6 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangular prism has a triangular base with base 6 cm and height 7 cm, and a length of 13 cm, as shown. Find its volume.', answer: '273 cm³', checkMode: 'auto', correctAnswer: '273', correctAnswers: ['273', '273cm³', '273 cm³'], explanation: 'Triangle area = ½ × 6 × 7 = 21 cm².\nVolume = 21 × 13 = 273 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">7 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Explain, in words, the two steps needed to find the volume of a triangular prism, then apply them to a prism with triangular base 12 cm base and 5 cm height, and length 6 cm.', answer: 'First find the area of the triangular base using ½ × base × height. Then multiply that triangle area by the length of the prism. Triangle area = ½ × 12 × 5 = 30 cm². Volume = 30 × 6 = 180 cm³.', checkMode: 'self' },

        // ── Block 5: Reverse/missing-dimension questions ────────────────────
        { difficulty: 'Medium', question: 'A cube has a volume of 1 000 cm³. Find the length of each side.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = s³ = 1 000. So s = ∛1 000 = 10 cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular prism has a volume of 360 cm³. Its length is 10 cm and its width is 6 cm. Find its height.', answer: '6 cm', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'Volume = l × w × h, so 360 = 10 × 6 × h = 60 × h.\nh = 360 ÷ 60 = 6 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'A cube has a total surface area of 150 cm². Find the length of each side.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'SA = 6s², so 150 = 6s².\ns² = 150 ÷ 6 = 25.\ns = √25 = 5 cm ✓' },
        { difficulty: 'Hard', question: 'A triangular prism has a volume of 175 cm³ and a triangular base area of 25 cm². Find the length of the prism.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'Volume = triangle area × length, so 175 = 25 × length.\nLength = 175 ÷ 25 = 7 cm ✓' },

        // ── Block 6: Applied/multi-step real-world word problems ────────────
        { difficulty: 'Medium', question: 'A gift box in the shape of a rectangular prism measures 14 cm by 9 cm by 6 cm, as shown. Naledi wants to wrap it completely in wrapping paper. How much paper does she need, at minimum?', answer: '528 cm²', checkMode: 'auto', correctAnswer: '528', correctAnswers: ['528', '528cm²', '528 cm²'], explanation: 'Wrapping the box completely means covering its total surface area.\nSA = 2(lw + lh + wh) = 2(14×9 + 14×6 + 9×6) = 2(126 + 84 + 54) = 2 × 264 = 528 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: "A fish tank shaped like a rectangular prism measures 60 cm by 25 cm by 20 cm, as shown. Find the tank's capacity in litres (1 000 cm³ = 1 litre).", answer: '30 litres', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 litres', '30l', '30 l'], explanation: 'Volume = 60 × 25 × 20 = 30 000 cm³.\nCapacity = 30 000 ÷ 1 000 = 30 litres ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A water trough has a right-angled triangular cross-section with the two shorter sides 8 m and 15 m (so the longest side is 17 m), and the trough is 25 m long, as shown. Find the volume of water the trough can hold and the total surface area of metal needed to build it (including the two triangular ends).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume the trough can hold', correctAnswer: '1500', correctAnswers: ['1500', '1 500', '1500m³', '1500 m³', '1 500 m³'], explanation: 'Triangle area = ½ × 8 × 15 = 60 m² (the 8 m and 15 m sides meet at the right angle).\nVolume = 60 × 25 = 1 500 m³ ✓' }, { label: 'b) Total surface area of metal', correctAnswer: '1120', correctAnswers: ['1120', '1 120', '1120m²', '1120 m²', '1 120 m²'], explanation: 'Perimeter of triangle = 8 + 15 + 17 = 40 m.\nSA = (2 × 60) + (40 × 25) = 120 + 1 000 = 1 120 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">15 m</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">17 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 m</text></svg>' },
        { difficulty: 'Hard', question: 'A juice carton is a rectangular prism 10 cm by 10 cm by 10 cm, giving a volume of 1 000 cm³. A second carton is 20 cm by 5 cm by 10 cm, also giving a volume of 1 000 cm³. Sibusiso says since the volumes match, the two cartons must use the same amount of cardboard. Is he correct? Compare their surface areas to check.', answer: "No — the first carton has surface area 6 × 10² = 600 cm², while the second has surface area 2(20×5 + 20×10 + 5×10) = 2(100 + 200 + 50) = 700 cm². Even though both cartons hold the same volume (1 000 cm³), the second needs more cardboard because equal volumes do not guarantee equal surface areas — the shape matters.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You can apply surface area and volume formulae to real-world problems and reasoning with confidence.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
