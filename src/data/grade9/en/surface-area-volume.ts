import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (measurement roles) ──────────────────────────────────────
// radius / formula used    → blue   (#2563eb)
// height / unit conversion → orange (#ea580c)
// volume / comparison      → green  (#16a34a)
// surface area             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Surface Area and Volume',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA AND VOLUME OF CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cylinders-surface-area-volume',
      title: 'Surface Area and Volume of Cylinders',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We extend our surface area and volume calculations to <strong>cylinders</strong>. The ${gr('volume')} is found by multiplying the area of the circular base by the ${or('height')}: ${gr('V')} = π${bl('r')}²${or('h')}. The ${re('surface area')} adds the two circular ends to the curved surface, which unwraps into a rectangle: ${re('SA')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('height')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('surface area')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Volume')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('V')} = π${bl('r')}²${or('h')}<br><span style="color:#6b7280;font-size:13px;">area of circular base × height</span></p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Surface Area')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('SA')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}<br><span style="color:#6b7280;font-size:13px;">two circular ends + curved surface</span></p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why the curved surface is a rectangle</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you cut along the side of a cylinder and unroll it, you get a rectangle. Its width equals the circumference (2π${bl('r')}) and its ${or('height')} equals ${or('h')}. Area = 2π${bl('r')}${or('h')}, which is the second term in the surface area formula.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cylinder has radius 4 cm and height 10 cm. Find its volume to 2 decimal places.',
          answer: `${gr('Volume')} = ${gr('502.4')} cm³`,
          steps: [
            `Write the formula: ${gr('V')} = π${bl('r')}²${or('h')}`,
            `Substitute: ${gr('V')} = 3.14 × ${bl('4')}² × ${or('10')} = 3.14 × ${bl('16')} × ${or('10')}`,
            `Calculate: 3.14 × 16 × 10 = ${gr('502.4')} cm³`,
            `<strong>Answer:</strong> ${gr('Volume')} = ${gr('502.4')} cm³`,
          ],
        },
        {
          question: 'Find the surface area of the same cylinder (radius 4 cm, height 10 cm).',
          answer: `${re('Surface Area')} = ${re('351.68')} cm²`,
          steps: [
            `Write the formula: ${re('SA')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}`,
            `Substitute: ${re('SA')} = 2 × 3.14 × ${bl('4')}² + 2 × 3.14 × ${bl('4')} × ${or('10')}`,
            `Calculate each term: 2 × 3.14 × ${bl('16')} = 100.48 &nbsp;and&nbsp; 2 × 3.14 × ${bl('4')} × ${or('10')} = 251.2`,
            `Add the terms: 100.48 + 251.2 = ${re('351.68')} cm²`,
            `<strong>Answer:</strong> ${re('Surface Area')} = ${re('351.68')} cm²`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — volume of cylinder ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A cylinder has radius 5 cm and height 12 cm. Find its volume to 2 decimal places.',
          answer: '942 cm³',
          checkMode: 'auto',
          correctAnswer: '942cm³',
          correctAnswers: ['942cm³', '942', '942 cm³', '942.00cm³', '942.00'],
          explanation: 'V = πr²h = 3.14 × 5² × 12 = 3.14 × 25 × 12 = 942 cm³',
        },

        // ── Q2 Medium — surface area of cylinder ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the surface area of a cylinder with radius 3 cm and height 8 cm.',
          answer: '207.24 cm²',
          checkMode: 'auto',
          correctAnswer: '207.24cm²',
          correctAnswers: ['207.24cm²', '207.24', '207.24 cm²'],
          explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 9 + 2 × 3.14 × 3 × 8 = 56.52 + 150.72 = 207.24 cm²',
        },

        // ── Q3 Hard — check Sipho's calculation ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates the volume of a cylinder with radius 6 cm and height 10 cm and gets 1 130.4 cm³. Check his answer.',
          answer: 'Volume = 3.14 × 36 × 10 = 1 130.4 cm³. He is correct.',
          checkMode: 'self',
        },

        // ── Q13 Hard — surface area with decimal radius ───────────────────────
        {
          difficulty: 'Hard',
          question: 'A cylinder has radius 2.5 cm and height 8 cm. Find its surface area to 2 decimal places.',
          answer: '164.93 cm²',
          checkMode: 'auto',
          correctAnswer: '164.93cm²',
          correctAnswers: ['164.93cm²', '164.93', '164.93 cm²'],
          explanation: 'SA = 2πr² + 2πrh = 2 × π × 6.25 + 2 × π × 2.5 × 8 = 39.27 + 125.66 = 164.93 cm² (using π ≈ 3.14159)',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the volume and surface area formulae for cylinders, showing how the curved surface unwraps into a rectangle with width equal to the circumference" />',

      diagramPlaceholder:
        'A cylinder with radius and height labelled in blue and orange, showing the net unwrapped into two circles and a rectangle',
      diagramSvg:
        '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrSav1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#374151"/></marker></defs><circle cx="45" cy="45" r="30" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><line x1="45" y1="45" x2="45" y2="15" stroke="#2563eb" stroke-width="1.5"/><text x="51" y="30" font-size="12" fill="#2563eb" font-weight="700">r</text><rect x="90" y="75" width="120" height="45" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><text x="150" y="65" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">2πr (circumference)</text><text x="82" y="100" font-size="12" fill="#ea580c" font-weight="700">h</text><circle cx="45" cy="150" r="30" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><path d="M 74,55 Q 82,68 90,78" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrSav1)"/><path d="M 74,140 Q 82,127 90,117" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrSav1)"/></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING PROBLEMS USING FORMULAE AND UNIT CONVERSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formulae-unit-conversions',
      title: 'Solving Problems Using Formulae and Unit Conversions',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We use appropriate formulae and conversions between SI units to solve real-life problems involving the ${re('surface area')}, ${gr('volume')} and capacity of cubes, rectangular prisms, triangular prisms and cylinders.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('formula used')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('unit conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('comparison')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key SI unit conversions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Volume → Capacity')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">1 m³ = ${or('1 000 litres')}<br>1 litre = 1 000 cm³<br>1 cm³ = ${or('1 ml')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Volume formulae')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Prism: ${bl('V')} = base area × length<br>Cylinder: ${bl('V')} = π${bl('r')}²h</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Three-step strategy</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify the shape and write the ${bl('formula')}.<br><strong>Step 2</strong> — Substitute values and calculate the volume or surface area.<br><strong>Step 3</strong> — Apply the ${or('unit conversion')} to reach the required unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cylindrical water tank has radius 1.2 m and height 2 m. Find its capacity in litres to 2 decimal places.',
          answer: `Capacity = ${gr('9 043.2')} litres`,
          steps: [
            `${bl('Formula:')} ${bl('V')} = π${bl('r')}²h = 3.14 × ${bl('1.2')}² × 2`,
            `Calculate: 3.14 × ${bl('1.44')} × 2 = ${gr('9.0432')} m³`,
            `${or('Convert to litres:')} 9.0432 × 1 000 = ${gr('9 043.2')} litres`,
            `<strong>Answer:</strong> Capacity = ${gr('9 043.2')} litres`,
          ],
        },
        {
          question: 'Sipho compares a triangular prism (triangle base area 15 cm², length 20 cm) to a cylinder (radius 3 cm, height 25 cm) by volume. Which has more volume?',
          answer: `The ${gr('cylinder')} has more volume`,
          steps: [
            `${bl('Prism formula:')} ${bl('V')} = base area × length = ${bl('15')} × 20 = ${gr('300')} cm³`,
            `${bl('Cylinder formula:')} ${bl('V')} = πr²h = 3.14 × ${bl('9')} × 25 = ${gr('706.5')} cm³`,
            `${gr('Compare:')} ${gr('706.5')} cm³ > ${gr('300')} cm³`,
            `<strong>Answer:</strong> The ${gr('cylinder')} has more volume.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — tank capacity ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A cylindrical tank has radius 1 m and height 3 m. Find its capacity in litres.',
          answer: '9 420 litres',
          checkMode: 'auto',
          correctAnswer: '9420 litres',
          correctAnswers: ['9420 litres', '9420', '9 420 litres', '9 420'],
          explanation: 'V = 3.14 × 1² × 3 = 9.42 m³. Convert: 9.42 × 1 000 = 9 420 litres',
        },

        // ── Q5 Medium — prism vs cylinder comparison ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'A triangular prism has base area 18 cm² and length 15 cm. A cylinder has radius 4 cm and height 20 cm. Which has more volume?',
          answer: 'the cylinder',
          checkMode: 'auto',
          correctAnswer: 'the cylinder',
          correctAnswers: ['the cylinder', 'cylinder', 'Cylinder', 'The cylinder'],
          explanation: 'Prism: V = 18 × 15 = 270 cm³. Cylinder: V = 3.14 × 16 × 20 = 1 004.8 cm³. The cylinder has more volume.',
        },

        // ── Q11 Medium — convert cm³ to litres ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert a cylinder\'s volume of 4 500 cm³ to litres.',
          answer: '4.5 litres',
          checkMode: 'auto',
          correctAnswer: '4.5 litres',
          correctAnswers: ['4.5 litres', '4.5', '4.5l', '4.5 l'],
          explanation: '1 litre = 1 000 cm³, so 4 500 ÷ 1 000 = 4.5 litres',
        },

        // ── Q10 Hard — Thabo's pool ───────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo\'s cylindrical pool has radius 3.5 m and height 1.5 m. Find its capacity in litres to 2 decimal places.',
          answer: '57 727.5 litres',
          checkMode: 'auto',
          correctAnswer: '57727.5 litres',
          correctAnswers: ['57727.5 litres', '57727.5', '57 727.5 litres', '57 727.5'],
          explanation: 'V = 3.14 × 3.5² × 1.5 = 3.14 × 12.25 × 1.5 = 57.7275 m³. Convert: 57.7275 × 1 000 = 57 727.5 litres',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply volume formulae for prisms and cylinders and convert between SI units to solve real-life capacity problems" />',

      diagramPlaceholder:
        'Diagram comparing a triangular prism and a cylinder side by side with labelled dimensions and calculated volumes, highlighting the unit conversion step',
      diagramSvg:
        '<svg viewBox="0 0 260 215" xmlns="http://www.w3.org/2000/svg"><polygon points="20,140 70,140 45,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,125 85,125 60,75" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="20" y1="140" x2="35" y2="125" stroke="#0f1f3d" stroke-width="2"/><line x1="70" y1="140" x2="85" y2="125" stroke="#0f1f3d" stroke-width="2"/><line x1="45" y1="90" x2="60" y2="75" stroke="#0f1f3d" stroke-width="2"/><text x="52" y="165" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">base area = 15 cm²</text><text x="52" y="180" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">length = 20 cm</text><text x="52" y="198" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">V = 300 cm³</text><ellipse cx="190" cy="80" rx="35" ry="12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="80" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="225" y1="80" x2="225" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155,140 A 35,12 0 0 0 225,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155,140 A 35,12 0 0 1 225,140" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><text x="190" y="165" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm, h = 25 cm</text><text x="190" y="198" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">V = 706.5 cm³</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING THE EFFECT OF DOUBLING DIMENSIONS ON VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'doubling-dimensions-volume',
      title: 'Investigating the Effect of Doubling Dimensions on Volume',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We investigate how doubling any or all the dimensions of right prisms and cylinders affects their ${gr('volume')}. Doubling all linear dimensions multiplies the volume by the scale factor <strong>cubed</strong>, since volume relates to three dimensions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original dimensions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scaled dimensions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume change')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key relationships</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Scale factor k — all dimensions</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">New volume = ${gr('k³')} × original volume<br>Double all dimensions → volume × ${gr('8')}<br>Triple all dimensions → volume × ${gr('27')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Scale one dimension only</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Volume changes by the ${or('same factor')} as that one dimension, since volume is linear in each individual dimension.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Radius vs height in a cylinder</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because radius is <strong>squared</strong> in the cylinder formula (π${bl('r')}²h), doubling the ${bl('radius')} increases volume by 2² = 4. Doubling only the height increases volume by just 2. These two operations are <em>not</em> equivalent.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cube has sides of 3 cm (volume = 27 cm³). Double the sides. Find the new volume and the scale factor relationship.',
          answer: `New volume = ${gr('216')} cm³; volume increased by factor ${gr('8')} (= 2³)`,
          steps: [
            `${bl('Original:')} side = ${bl('3')} cm, volume = 3³ = ${bl('27')} cm³`,
            `${or('New sides:')} ${or('6')} cm (doubled from 3)`,
            `${or('New volume:')} ${or('6')}³ = ${gr('216')} cm³`,
            `${gr('Volume change:')} ${gr('216')} ÷ ${bl('27')} = ${gr('8')} = 2³ — confirming that doubling all dimensions multiplies the volume by the scale factor cubed.`,
            `<strong>Answer:</strong> New volume = ${gr('216')} cm³; factor = ${gr('8')}`,
          ],
        },
        {
          question: 'Lerato has a cylinder with radius 2 cm and height 5 cm. Triple only the height. Compare the new volume to the original.',
          answer: `${bl('Original')} = ${bl('62.8')} cm³; ${or('New')} = ${gr('188.4')} cm³ — the volume tripled`,
          steps: [
            `${bl('Original volume:')} π${bl('r')}²h = 3.14 × ${bl('4')} × ${bl('5')} = ${bl('62.8')} cm³`,
            `${or('New height:')} ${or('15')} cm (tripled from 5)`,
            `${gr('New volume:')} 3.14 × ${bl('4')} × ${or('15')} = ${gr('188.4')} cm³`,
            `${gr('Ratio:')} ${gr('188.4')} ÷ ${bl('62.8')} = ${gr('3')} — the volume tripled, proportional to the single dimension (height) that changed.`,
            `<strong>Answer:</strong> Original = ${bl('62.8')} cm³; New = ${gr('188.4')} cm³ (tripled).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — cube sides doubled ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A cube has sides of 4 cm. Double the sides. Find the new volume.',
          answer: '512 cm³',
          checkMode: 'auto',
          correctAnswer: '512cm³',
          correctAnswers: ['512cm³', '512', '512 cm³'],
          explanation: 'New side = 8 cm. New volume = 8³ = 512 cm³. (Original = 4³ = 64 cm³; factor = 512 ÷ 64 = 8 = 2³ ✓)',
        },

        // ── Q9 Medium — cylinder height tripled ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A cylinder with radius 2 cm and height 6 cm has its height tripled. Find the new volume and compare it to the original.',
          answer: 'Original volume = 75.36 cm³. New volume (height = 18 cm) = 226.08 cm³. The volume tripled.',
          checkMode: 'self',
        },

        // ── Q6 Hard — doubling radius vs height ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says doubling a cylinder\'s radius has the same effect on volume as doubling its height. Is she correct? Explain.',
          answer: 'No — doubling the radius increases volume by a factor of 2² = 4 (since radius is squared in the formula), while doubling the height only increases volume by a factor of 2.',
          checkMode: 'self',
        },

        // ── Q8 Hard — find scale factor from volume ratio ─────────────────────
        {
          difficulty: 'Hard',
          question: 'A cube\'s volume increases from 8 cm³ to 216 cm³ after a scale factor was applied to its sides. Find the scale factor used.',
          answer: 'Volume ratio = 216 ÷ 8 = 27. Since 27 = 3³, the scale factor applied to the sides was 3.',
          checkMode: 'self',
        },

        // ── Q12 Hard — doubling all three dimensions ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says doubling all three dimensions of a rectangular prism (length, width, height) multiplies its volume by 6. Is she correct? Explain.',
          answer: 'No — doubling all three dimensions multiplies the volume by 2³ = 8, not 6, since each of the three dimensions contributes a factor of 2.',
          checkMode: 'self',
        },

        // ── Q14 Hard — cube with tripled sides ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho\'s cube has a volume of 64 cm³. If he triples the side length, find the new volume.',
          answer: 'Original side = 4 cm (since 4³ = 64). New side = 12 cm. New volume = 12³ = 1 728 cm³.',
          checkMode: 'self',
        },

        // ── Q15 Hard — cylinder radius halved ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A cylinder\'s radius is reduced by half while its height stays the same. The original volume was 200 cm³. Find the new volume.',
          answer: 'Since volume depends on radius squared, halving the radius reduces volume by a factor of (1/2)² = 1/4. New volume = 200 ÷ 4 = 50 cm³.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video investigating how doubling one or all dimensions of a prism or cylinder affects its volume, explaining the cubed scale factor relationship" />',

      diagramPlaceholder:
        'A small cube and a larger cube with sides doubled, shown side by side with volumes labelled, illustrating the 8x volume increase from doubling all three dimensions',
      diagramSvg:
        '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="100" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="20" y1="115" x2="35" y2="100" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="115" x2="70" y2="100" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="70" y2="135" stroke="#0f1f3d" stroke-width="1.6"/><rect x="20" y="115" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="37.5" y="168" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="37.5" y="183" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">V = 27 cm³</text><text x="105" y="135" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="170" y="50" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="140" y1="80" x2="170" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><line x1="210" y1="80" x2="240" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><line x1="210" y1="150" x2="240" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><rect x="140" y="80" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="175" y="168" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">6 cm</text><text x="175" y="185" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">V = 216 cm³ (×8)</text></svg>',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered surface area and volume.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Volume of a rectangular prism / cube
    // Block 2 (3-5):   Surface area of a rectangular prism / cube
    // Block 3 (6-9):   Volume of a cylinder
    // Block 4 (10-12): Surface area of a cylinder
    // Block 5 (13-15): Unit conversions (cm³ ↔ m³ ↔ litres)
    // Block 6 (16-19): Combined/composite solids and scaling
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Volume of a rectangular prism / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 8 cm, width 5 cm and height 4 cm. Find its volume.', checkMode: 'auto', correctAnswer: '160cm³', correctAnswers: ['160cm³', '160', '160 cm³', '160cm^3', '160 cm^3'], answer: '160 cm³', explanation: 'V = length × width × height = 8 × 5 × 4 = 160 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy', question: 'A cube has sides of 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '216cm³', correctAnswers: ['216cm³', '216', '216 cm³', '216cm^3', '216 cm^3'], answer: '216 cm³', explanation: 'V = side³ = 6³ = 216 cm³' },
        { difficulty: 'Easy', question: 'A rectangular prism has length 12 cm, width 6 cm and height 5 cm. Find its volume.', checkMode: 'auto', correctAnswer: '360cm³', correctAnswers: ['360cm³', '360', '360 cm³', '360cm^3', '360 cm^3'], answer: '360 cm³', explanation: 'V = length × width × height = 12 × 6 × 5 = 360 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Block 2 — Surface area of a rectangular prism / cube (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cube has sides of 5 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '150cm²', correctAnswers: ['150cm²', '150', '150 cm²', '150cm^2', '150 cm^2'], answer: '150 cm²', explanation: 'SA = 6 × side² = 6 × 5² = 6 × 25 = 150 cm²' },
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 10 cm, width 4 cm and height 3 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '164cm²', correctAnswers: ['164cm²', '164', '164 cm²', '164cm^2', '164 cm^2'], answer: '164 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(10×4 + 10×3 + 4×3) = 2(40 + 30 + 12) = 2(82) = 164 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">4 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 9 cm, width 6 cm and height 4 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '228cm²', correctAnswers: ['228cm²', '228', '228 cm²', '228cm^2', '228 cm^2'], answer: '228 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(9×6 + 9×4 + 6×4) = 2(54 + 36 + 24) = 2(114) = 228 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Block 3 — Volume of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 3 cm and height 7 cm. Find its volume to 2 decimal places.', checkMode: 'auto', correctAnswer: '197.82cm³', correctAnswers: ['197.82cm³', '197.82', '197.82 cm³'], answer: '197.82 cm³', explanation: 'V = πr²h = 3.14 × 3² × 7 = 3.14 × 9 × 7 = 197.82 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 5 cm and height 9 cm. Find its volume.', checkMode: 'auto', correctAnswer: '706.5cm³', correctAnswers: ['706.5cm³', '706.5', '706.5 cm³', '706.50cm³', '706.50'], answer: '706.5 cm³', explanation: 'V = πr²h = 3.14 × 5² × 9 = 3.14 × 25 × 9 = 706.5 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 2.5 cm and height 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '117.75cm³', correctAnswers: ['117.75cm³', '117.75', '117.75 cm³'], answer: '117.75 cm³', explanation: 'V = πr²h = 3.14 × 2.5² × 6 = 3.14 × 6.25 × 6 = 117.75 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylindrical water tank has radius 6 cm and height 15 cm. Find its volume to 2 decimal places.', checkMode: 'auto', correctAnswer: '1695.6cm³', correctAnswers: ['1695.6cm³', '1695.6', '1695.6 cm³', '1695.60cm³', '1695.60', '1 695.6cm³', '1 695.6'], answer: '1 695.6 cm³', explanation: 'V = πr²h = 3.14 × 6² × 15 = 3.14 × 36 × 15 = 1 695.6 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 15 cm</text></svg>'},

        // Block 4 — Surface area of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 3 cm and height 7 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '188.4cm²', correctAnswers: ['188.4cm²', '188.4', '188.4 cm²', '188.40cm²', '188.40'], answer: '188.4 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×9 + 2×3.14×3×7 = 56.52 + 131.88 = 188.4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 4 cm and height 9 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '326.56cm²', correctAnswers: ['326.56cm²', '326.56', '326.56 cm²'], answer: '326.56 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×16 + 2×3.14×4×9 = 100.48 + 226.08 = 326.56 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 2 cm and height 10 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '150.72cm²', correctAnswers: ['150.72cm²', '150.72', '150.72 cm²'], answer: '150.72 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×4 + 2×3.14×2×10 = 25.12 + 125.6 = 150.72 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text></svg>'},

        // Block 5 — Unit conversions (cm³ ↔ m³ ↔ litres) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Convert 2.5 m³ to cm³.', checkMode: 'auto', correctAnswer: '2500000cm³', correctAnswers: ['2500000cm³', '2500000', '2 500 000cm³', '2 500 000', '2500000 cm³', '2 500 000 cm³'], answer: '2 500 000 cm³', explanation: '1 m³ = 1 000 000 cm³, so 2.5 × 1 000 000 = 2 500 000 cm³' },
        { difficulty: 'Medium-Hard', question: 'Convert 750 000 cm³ to m³.', checkMode: 'auto', correctAnswer: '0.75m³', correctAnswers: ['0.75m³', '0.75', '0.75 m³'], answer: '0.75 m³', explanation: '1 m³ = 1 000 000 cm³, so 750 000 ÷ 1 000 000 = 0.75 m³' },
        { difficulty: 'Medium-Hard', question: 'A cylindrical tank has radius 1.5 m and height 2 m. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '14130litres', correctAnswers: ['14130litres', '14130', '14 130litres', '14 130', '14130 litres', '14 130 litres'], answer: '14 130 litres', explanation: 'V = πr²h = 3.14 × 1.5² × 2 = 3.14 × 2.25 × 2 = 14.13 m³. Convert: 14.13 × 1 000 = 14 130 litres'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 2 cm</text></svg>'},

        // Block 6 — Combined/composite solids and scaling (Hard)
        { difficulty: 'Hard', question: 'A composite solid is made of a rectangular prism (10 cm × 6 cm × 4 cm) with a cube of side 3 cm placed on top. Find the total volume of the solid.', checkMode: 'auto', correctAnswer: '267cm³', correctAnswers: ['267cm³', '267', '267 cm³'], answer: '267 cm³', explanation: 'Prism volume = 10 × 6 × 4 = 240 cm³. Cube volume = 3³ = 27 cm³. Total = 240 + 27 = 267 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cube with side 3 cm is scaled up so its new side is 9 cm. Find the scale factor applied to the volume.', answer: 'Linear scale factor = 9 ÷ 3 = 3. Volume scale factor = 3³ = 27, since volume increases by the cube of the linear scale factor.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular prism has dimensions 4 cm × 3 cm × 2 cm (volume 24 cm³). All three dimensions are doubled. Find the new volume.', checkMode: 'auto', correctAnswer: '192cm³', correctAnswers: ['192cm³', '192', '192 cm³'], answer: '192 cm³', explanation: 'New dimensions: 8 cm × 6 cm × 4 cm. New volume = 8 × 6 × 4 = 192 cm³. Check: 24 × 2³ = 24 × 8 = 192 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">3 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">4 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Thabo has a rectangular prism (length 10 cm, width 6 cm, height 4 cm) and a cylinder (radius 4 cm, height 10 cm) with a cube of side 3 cm removed from inside the cylinder. Explain, without necessarily calculating the exact final value, how you would find the remaining volume of the cylinder after the cube is removed.', answer: 'Find the volume of the cylinder using V = πr²h, then find the volume of the cube using V = side³, and subtract the cube\'s volume from the cylinder\'s volume: remaining volume = cylinder volume − cube volume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered surface area and volume calculations for prisms and cylinders.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or unit conversions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on cylinder volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Volume of a rectangular prism / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 9 cm, width 4 cm and height 3 cm. Find its volume.', checkMode: 'auto', correctAnswer: '108cm³', correctAnswers: ['108cm³', '108', '108 cm³'], answer: '108 cm³', explanation: 'V = length × width × height = 9 × 4 × 3 = 108 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">4 cm</text></svg>'},
        { difficulty: 'Easy', question: 'A cube has sides of 7 cm. Find its volume.', checkMode: 'auto', correctAnswer: '343cm³', correctAnswers: ['343cm³', '343', '343 cm³'], answer: '343 cm³', explanation: 'V = side³ = 7³ = 343 cm³' },
        { difficulty: 'Easy', question: 'A rectangular prism has length 15 cm, width 8 cm and height 2 cm. Find its volume.', checkMode: 'auto', correctAnswer: '240cm³', correctAnswers: ['240cm³', '240', '240 cm³'], answer: '240 cm³', explanation: 'V = length × width × height = 15 × 8 × 2 = 240 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text></svg>'},

        // Block 2 — Surface area of a rectangular prism / cube (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cube has sides of 6 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '216cm²', correctAnswers: ['216cm²', '216', '216 cm²'], answer: '216 cm²', explanation: 'SA = 6 × side² = 6 × 6² = 6 × 36 = 216 cm²' },
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 12 cm, width 5 cm and height 3 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '222cm²', correctAnswers: ['222cm²', '222', '222 cm²'], answer: '222 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(12×5 + 12×3 + 5×3) = 2(60 + 36 + 15) = 2(111) = 222 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 8 cm, width 7 cm and height 5 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '262cm²', correctAnswers: ['262cm²', '262', '262 cm²'], answer: '262 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(8×7 + 8×5 + 7×5) = 2(56 + 40 + 35) = 2(131) = 262 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>'},

        // Block 3 — Volume of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 4 cm and height 8 cm. Find its volume.', checkMode: 'auto', correctAnswer: '401.92cm³', correctAnswers: ['401.92cm³', '401.92', '401.92 cm³'], answer: '401.92 cm³', explanation: 'V = πr²h = 3.14 × 4² × 8 = 3.14 × 16 × 8 = 401.92 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 6 cm and height 10 cm. Find its volume.', checkMode: 'auto', correctAnswer: '1130.4cm³', correctAnswers: ['1130.4cm³', '1130.4', '1130.4 cm³', '1 130.4cm³', '1 130.4'], answer: '1 130.4 cm³', explanation: 'V = πr²h = 3.14 × 6² × 10 = 3.14 × 36 × 10 = 1 130.4 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 1.5 cm and height 5 cm. Find its volume.', checkMode: 'auto', correctAnswer: '35.325cm³', correctAnswers: ['35.325cm³', '35.325', '35.325 cm³', '35.33cm³', '35.33'], answer: '35.325 cm³', explanation: 'V = πr²h = 3.14 × 1.5² × 5 = 3.14 × 2.25 × 5 = 35.325 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylindrical water tank has radius 7 cm and height 12 cm. Find its volume to 2 decimal places.', checkMode: 'auto', correctAnswer: '1846.32cm³', correctAnswers: ['1846.32cm³', '1846.32', '1846.32 cm³', '1 846.32cm³', '1 846.32'], answer: '1 846.32 cm³', explanation: 'V = πr²h = 3.14 × 7² × 12 = 3.14 × 49 × 12 = 1 846.32 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 12 cm</text></svg>'},

        // Block 4 — Surface area of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 4 cm and height 8 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '301.44cm²', correctAnswers: ['301.44cm²', '301.44', '301.44 cm²'], answer: '301.44 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×16 + 2×3.14×4×8 = 100.48 + 200.96 = 301.44 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 5 cm and height 11 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '502.4cm²', correctAnswers: ['502.4cm²', '502.4', '502.4 cm²', '502.40cm²', '502.40'], answer: '502.4 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×25 + 2×3.14×5×11 = 157 + 345.4 = 502.4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 3 cm and height 9 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '226.08cm²', correctAnswers: ['226.08cm²', '226.08', '226.08 cm²'], answer: '226.08 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×9 + 2×3.14×3×9 = 56.52 + 169.56 = 226.08 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},

        // Block 5 — Unit conversions (cm³ ↔ m³ ↔ litres) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Convert 3.2 m³ to litres.', checkMode: 'auto', correctAnswer: '3200litres', correctAnswers: ['3200litres', '3200', '3 200litres', '3 200', '3200 litres', '3 200 litres'], answer: '3 200 litres', explanation: '1 m³ = 1 000 litres, so 3.2 × 1 000 = 3 200 litres' },
        { difficulty: 'Medium-Hard', question: 'Convert 5 200 000 cm³ to m³.', checkMode: 'auto', correctAnswer: '5.2m³', correctAnswers: ['5.2m³', '5.2', '5.2 m³'], answer: '5.2 m³', explanation: '1 m³ = 1 000 000 cm³, so 5 200 000 ÷ 1 000 000 = 5.2 m³' },
        { difficulty: 'Medium-Hard', question: 'A cylindrical tank has radius 2 m and height 1.5 m. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '18840litres', correctAnswers: ['18840litres', '18840', '18 840litres', '18 840', '18840 litres', '18 840 litres'], answer: '18 840 litres', explanation: 'V = πr²h = 3.14 × 2² × 1.5 = 3.14 × 4 × 1.5 = 18.84 m³. Convert: 18.84 × 1 000 = 18 840 litres'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 1.5 cm</text></svg>'},

        // Block 6 — Combined/composite solids and scaling (Hard)
        { difficulty: 'Hard', question: 'A composite solid is made of a rectangular prism (12 cm × 5 cm × 3 cm) with a cube of side 2 cm placed on top. Find the total volume of the solid.', checkMode: 'auto', correctAnswer: '188cm³', correctAnswers: ['188cm³', '188', '188 cm³'], answer: '188 cm³', explanation: 'Prism volume = 12 × 5 × 3 = 180 cm³. Cube volume = 2³ = 8 cm³. Total = 180 + 8 = 188 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">3 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">2 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cube with side 2 cm is scaled up so its new side is 6 cm. Find the scale factor applied to the volume.', answer: 'Linear scale factor = 6 ÷ 2 = 3. Volume scale factor = 3³ = 27, since volume increases by the cube of the linear scale factor.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular prism has dimensions 3 cm × 2 cm × 2 cm (volume 12 cm³). All three dimensions are tripled. Find the new volume.', checkMode: 'auto', correctAnswer: '324cm³', correctAnswers: ['324cm³', '324', '324 cm³'], answer: '324 cm³', explanation: 'New dimensions: 9 cm × 6 cm × 6 cm. New volume = 9 × 6 × 6 = 324 cm³. Check: 12 × 3³ = 12 × 27 = 324 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">2 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">6 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Lerato has a rectangular prism (length 12 cm, width 5 cm, height 3 cm) and a cylinder (radius 5 cm, height 11 cm) with a cube of side 2 cm removed from inside the cylinder. Explain, without necessarily calculating the exact final value, how you would find the remaining volume of the cylinder after the cube is removed.', answer: 'Find the volume of the cylinder using V = πr²h, then find the volume of the cube using V = side³, and subtract the cube\'s volume from the cylinder\'s volume: remaining volume = cylinder volume − cube volume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">2 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered surface area and volume calculations for prisms and cylinders.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or unit conversions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on cylinder volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Volume of a rectangular prism / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 11 cm, width 5 cm and height 3 cm. Find its volume.', checkMode: 'auto', correctAnswer: '165cm³', correctAnswers: ['165cm³', '165', '165 cm³'], answer: '165 cm³', explanation: 'V = length × width × height = 11 × 5 × 3 = 165 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy', question: 'A cube has sides of 9 cm. Find its volume.', checkMode: 'auto', correctAnswer: '729cm³', correctAnswers: ['729cm³', '729', '729 cm³'], answer: '729 cm³', explanation: 'V = side³ = 9³ = 729 cm³' },
        { difficulty: 'Easy', question: 'A rectangular prism has length 14 cm, width 6 cm and height 4 cm. Find its volume.', checkMode: 'auto', correctAnswer: '336cm³', correctAnswers: ['336cm³', '336', '336 cm³'], answer: '336 cm³', explanation: 'V = length × width × height = 14 × 6 × 4 = 336 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Block 2 — Surface area of a rectangular prism / cube (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cube has sides of 8 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '384cm²', correctAnswers: ['384cm²', '384', '384 cm²'], answer: '384 cm²', explanation: 'SA = 6 × side² = 6 × 8² = 6 × 64 = 384 cm²' },
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 11 cm, width 6 cm and height 4 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '268cm²', correctAnswers: ['268cm²', '268', '268 cm²'], answer: '268 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(11×6 + 11×4 + 6×4) = 2(66 + 44 + 24) = 2(134) = 268 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 10 cm, width 7 cm and height 3 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '242cm²', correctAnswers: ['242cm²', '242', '242 cm²'], answer: '242 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(10×7 + 10×3 + 7×3) = 2(70 + 30 + 21) = 2(121) = 242 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>'},

        // Block 3 — Volume of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 5 cm and height 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '471cm³', correctAnswers: ['471cm³', '471', '471 cm³', '471.00cm³', '471.00'], answer: '471 cm³', explanation: 'V = πr²h = 3.14 × 5² × 6 = 3.14 × 25 × 6 = 471 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 8 cm and height 11 cm. Find its volume.', checkMode: 'auto', correctAnswer: '2210.56cm³', correctAnswers: ['2210.56cm³', '2210.56', '2210.56 cm³', '2 210.56cm³', '2 210.56'], answer: '2 210.56 cm³', explanation: 'V = πr²h = 3.14 × 8² × 11 = 3.14 × 64 × 11 = 2 210.56 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 3.5 cm and height 4 cm. Find its volume.', checkMode: 'auto', correctAnswer: '153.86cm³', correctAnswers: ['153.86cm³', '153.86', '153.86 cm³'], answer: '153.86 cm³', explanation: 'V = πr²h = 3.14 × 3.5² × 4 = 3.14 × 12.25 × 4 = 153.86 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylindrical water tank has radius 4 cm and height 20 cm. Find its volume to 2 decimal places.', checkMode: 'auto', correctAnswer: '1004.8cm³', correctAnswers: ['1004.8cm³', '1004.8', '1004.8 cm³', '1004.80cm³', '1004.80', '1 004.8cm³', '1 004.8'], answer: '1 004.8 cm³', explanation: 'V = πr²h = 3.14 × 4² × 20 = 3.14 × 16 × 20 = 1 004.8 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 20 cm</text></svg>'},

        // Block 4 — Surface area of a cylinder (Medium)
        { difficulty: 'Medium', question: 'A cylinder has radius 5 cm and height 6 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '345.4cm²', correctAnswers: ['345.4cm²', '345.4', '345.4 cm²', '345.40cm²', '345.40'], answer: '345.4 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×25 + 2×3.14×5×6 = 157 + 188.4 = 345.4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 6 cm and height 13 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '715.92cm²', correctAnswers: ['715.92cm²', '715.92', '715.92 cm²'], answer: '715.92 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×36 + 2×3.14×6×13 = 226.08 + 489.84 = 715.92 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 13 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cylinder has radius 4 cm and height 7 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '276.32cm²', correctAnswers: ['276.32cm²', '276.32', '276.32 cm²'], answer: '276.32 cm²', explanation: 'SA = 2πr² + 2πrh = 2×3.14×16 + 2×3.14×4×7 = 100.48 + 175.84 = 276.32 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},

        // Block 5 — Unit conversions (cm³ ↔ m³ ↔ litres) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Convert 4.8 m³ to litres.', checkMode: 'auto', correctAnswer: '4800litres', correctAnswers: ['4800litres', '4800', '4 800litres', '4 800', '4800 litres', '4 800 litres'], answer: '4 800 litres', explanation: '1 m³ = 1 000 litres, so 4.8 × 1 000 = 4 800 litres' },
        { difficulty: 'Medium-Hard', question: 'Convert 2 300 000 cm³ to m³.', checkMode: 'auto', correctAnswer: '2.3m³', correctAnswers: ['2.3m³', '2.3', '2.3 m³'], answer: '2.3 m³', explanation: '1 m³ = 1 000 000 cm³, so 2 300 000 ÷ 1 000 000 = 2.3 m³' },
        { difficulty: 'Medium-Hard', question: 'A cylindrical tank has radius 1.2 m and height 2.5 m. Find its capacity in litres.', checkMode: 'auto', correctAnswer: '11304litres', correctAnswers: ['11304litres', '11304', '11 304litres', '11 304', '11304 litres', '11 304 litres'], answer: '11 304 litres', explanation: 'V = πr²h = 3.14 × 1.2² × 2.5 = 3.14 × 1.44 × 2.5 = 11.304 m³. Convert: 11.304 × 1 000 = 11 304 litres'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 2.5 cm</text></svg>'},

        // Block 6 — Combined/composite solids and scaling (Hard)
        { difficulty: 'Hard', question: 'A composite solid is made of a rectangular prism (14 cm × 6 cm × 4 cm) with a cube of side 4 cm placed on top. Find the total volume of the solid.', checkMode: 'auto', correctAnswer: '400cm³', correctAnswers: ['400cm³', '400', '400 cm³'], answer: '400 cm³', explanation: 'Prism volume = 14 × 6 × 4 = 336 cm³. Cube volume = 4³ = 64 cm³. Total = 336 + 64 = 400 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cube with side 4 cm is scaled up so its new side is 8 cm. Find the scale factor applied to the volume.', answer: 'Linear scale factor = 8 ÷ 4 = 2. Volume scale factor = 2³ = 8, since volume increases by the cube of the linear scale factor.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular prism has dimensions 5 cm × 3 cm × 2 cm (volume 30 cm³). All three dimensions are doubled. Find the new volume.', checkMode: 'auto', correctAnswer: '240cm³', correctAnswers: ['240cm³', '240', '240 cm³'], answer: '240 cm³', explanation: 'New dimensions: 10 cm × 6 cm × 4 cm. New volume = 10 × 6 × 4 = 240 cm³. Check: 30 × 2³ = 30 × 8 = 240 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">3 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">4 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Amahle has a rectangular prism (length 14 cm, width 6 cm, height 4 cm) and a cylinder (radius 8 cm, height 11 cm) with a cube of side 4 cm removed from inside the cylinder. Explain, without necessarily calculating the exact final value, how you would find the remaining volume of the cylinder after the cube is removed.', answer: 'Find the volume of the cylinder using V = πr²h, then find the volume of the cube using V = side³, and subtract the cube\'s volume from the cylinder\'s volume: remaining volume = cylinder volume − cube volume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered surface area and volume calculations for prisms and cylinders.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or unit conversions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on cylinder volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
