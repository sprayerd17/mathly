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
        '<DiagramPlaceholder label="Diagram of a cylinder with radius and height labelled in blue and orange, showing the net unwrapped into two circles and a rectangle" />',
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
        '<DiagramPlaceholder label="Diagram comparing a triangular prism and a cylinder side by side with labelled dimensions and calculated volumes, highlighting the unit conversion step" />',
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
        '<DiagramPlaceholder label="Diagram needed: a small cube and a larger cube with sides doubled, shown side by side with volumes labelled, illustrating the 8x volume increase from doubling all three dimensions" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered surface area and volume.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
