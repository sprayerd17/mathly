import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ─────────────────────────────────────────
// base            → blue    (#2563eb)
// exponent        → orange  (#ea580c)
// simplified      → green   (#16a34a)
// negative sign   → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'laws-of-exponents',
      title: 'Laws of Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We establish the general <strong>laws of exponents</strong> for natural number exponents. These laws allow us to simplify expressions with powers by operating on the ${or('exponents')} directly, instead of computing large numbers.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified answer')}</span>` +
        `</div>` +

        // ── Five laws ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The five laws</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Product Law</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('m')}</sup> × ${bl('a')}<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m+n')}</sup> &nbsp;— add the ${or('exponents')} when multiplying powers with the same ${bl('base')}.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Quotient Law</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('m')}</sup> ÷ ${bl('a')}<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m−n')}</sup> &nbsp;— subtract the ${or('exponents')} when dividing like bases (m &gt; n).</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Power of a Power</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">(${bl('a')}<sup>${or('m')}</sup>)<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m×n')}</sup> &nbsp;— multiply the ${or('exponents')} when raising a power to another power.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Power of a Product</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">(${bl('a')} × ${bl('t')})<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('n')}</sup> × ${gr('t')}<sup>${gr('n')}</sup> &nbsp;— distribute the ${or('exponent')} over each factor.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Zero Exponent</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('0')}</sup> = ${gr('1')} &nbsp;— any non-zero number raised to the power ${or('0')} equals ${gr('1')}.</p></div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">The base must be the same</p>` +
        `<p style="margin:0;color:#7c2d12;">The product and quotient laws only apply when the ${bl('bases')} are identical. You cannot add or subtract ${or('exponents')} when the bases differ — e.g. 2³ × 3² cannot be simplified using these laws.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify 3⁴ × 3².',
          answer: `${bl('3')}<sup>${or('4')}</sup> × ${bl('3')}<sup>${or('2')}</sup> = ${bl('3')}<sup>${or('6')}</sup> = ${gr('729')}`,
          steps: [
            `Both terms have the same ${bl('base')}: ${bl('3')}. Apply the <strong>product law</strong> — add the ${or('exponents')}.`,
            `${bl('3')}<sup>${or('4')}</sup> × ${bl('3')}<sup>${or('2')}</sup> = ${bl('3')}<sup>${or('4+2')}</sup> = ${bl('3')}<sup>${or('6')}</sup>`,
            `Calculate: ${bl('3')}<sup>${or('6')}</sup> = 3 × 3 × 3 × 3 × 3 × 3 = ${gr('729')}`,
          ],
        },
        {
          question: 'Simplify (5³)².',
          answer: `(${bl('5')}<sup>${or('3')}</sup>)<sup>${or('2')}</sup> = ${bl('5')}<sup>${or('6')}</sup> = ${gr('15 625')}`,
          steps: [
            `Apply the <strong>power of a power law</strong> — multiply the ${or('exponents')}.`,
            `(${bl('5')}<sup>${or('3')}</sup>)<sup>${or('2')}</sup> = ${bl('5')}<sup>${or('3×2')}</sup> = ${bl('5')}<sup>${or('6')}</sup>`,
            `Calculate: ${bl('5')}<sup>${or('6')}</sup> = 5 × 5 × 5 × 5 × 5 × 5 = ${gr('15 625')}`,
          ],
        },
        {
          question: 'Simplify 8⁰.',
          answer: `${bl('8')}<sup>${or('0')}</sup> = ${gr('1')}`,
          steps: [
            `Apply the <strong>zero exponent law</strong>: any non-zero number raised to the power ${or('0')} equals ${gr('1')}.`,
            `${bl('8')}<sup>${or('0')}</sup> = ${gr('1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Simplify 2³ × 2⁴.',
          answer: '128',
          checkMode: 'auto',
          correctAnswer: '128',
          explanation: 'Same base (2) — apply the product law: add the exponents.\n2^(3+4) = 2⁷ = 128 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Simplify each expression.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 5⁶ ÷ 5²',
              correctAnswer: '625',
              explanation: 'Quotient law — subtract the exponents.\n5^(6−2) = 5⁴ = 625 ✓',
            },
            {
              label: 'b) (2⁴)³',
              correctAnswer: '4096',
              explanation: 'Power of a power — multiply the exponents.\n2^(4×3) = 2¹² = 4 096 ✓',
            },
            {
              label: 'c) (3 × 4)²',
              correctAnswer: '144',
              explanation: 'Power of a product — distribute the exponent.\n3² × 4² = 9 × 16 = 144 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Simplify and evaluate: (2³ × 2⁴) ÷ 2⁵.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Step 1: Apply product law in the numerator: 2^(3+4) = 2⁷.\nStep 2: Apply quotient law: 2^(7−5) = 2² = 4 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining all five laws of exponents with colour coded base and exponent examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Reference card showing all five laws of exponents with base blue exponent orange and simplified answer green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SCIENTIFIC NOTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scientific-notation',
      title: 'Scientific Notation',
      icon: '×10ⁿ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Scientific notation</strong> expresses very large or very small numbers as a number between 1 and 10 multiplied by a power of 10. In Grade 8 we work with positive ${or('exponents')} only. To convert, move the decimal point until exactly one non-zero digit remains before it, then count how many places it moved — that count is the ${or('exponent')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal movement')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('power of 10')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final form')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to convert to scientific notation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Move the decimal point')} to the left until only one non-zero digit remains before it.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Count the number of places moved — this becomes the ${or('exponent')} in ${or('10')}<sup>${or('n')}</sup>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${gr('final form')}: (digit between 1 and 10) × ${or('10')}<sup>${or('n')}</sup>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why scientific notation?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Writing 3 200 000 as ${gr('3.2 × 10⁶')} is compact and easy to compare. Scientists use it for distances, masses, and quantities that span many orders of magnitude.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write 45 000 in scientific notation.',
          answer: `${gr('4.5 × 10')}<sup>${or('4')}</sup>`,
          steps: [
            `${bl('Move the decimal point')} 4 places to the left until one non-zero digit remains before it: 45 000 → ${bl('4.5')}`,
            `The decimal moved ${or('4')} places, so the ${or('power of 10')} is ${or('10')}<sup>${or('4')}</sup>.`,
            `Write the ${gr('final form')}: ${gr('4.5 × 10')}<sup>${or('4')}</sup>`,
          ],
        },
        {
          question: 'Write 3 200 000 in scientific notation.',
          answer: `${gr('3.2 × 10')}<sup>${or('6')}</sup>`,
          steps: [
            `${bl('Move the decimal point')} 6 places to the left until one non-zero digit remains before it: 3 200 000 → ${bl('3.2')}`,
            `The decimal moved ${or('6')} places, so the ${or('power of 10')} is ${or('10')}<sup>${or('6')}</sup>.`,
            `Write the ${gr('final form')}: ${gr('3.2 × 10')}<sup>${or('6')}</sup>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Write 6 700 in scientific notation.',
          answer: '6.7 × 10³',
          checkMode: 'auto',
          correctAnswer: '6.7 × 10³',
          correctAnswers: ['6.7 × 10³', '6.7 x 10³', '6.7×10³', '6.7x10^3', '6.7 × 10^3'],
          explanation: 'Move the decimal 3 places left: 6 700 → 6.7\nAnswer: 6.7 × 10³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Write each number in scientific notation.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 850 000',
              correctAnswer: '8.5 × 10⁵',
              correctAnswers: ['8.5 × 10⁵', '8.5 x 10⁵', '8.5×10⁵', '8.5 × 10^5'],
              explanation: 'Move the decimal 5 places left: 850 000 → 8.5\nAnswer: 8.5 × 10⁵ ✓',
            },
            {
              label: 'b) 12 000 000',
              correctAnswer: '1.2 × 10⁷',
              correctAnswers: ['1.2 × 10⁷', '1.2 x 10⁷', '1.2×10⁷', '1.2 × 10^7'],
              explanation: 'Move the decimal 7 places left: 12 000 000 → 1.2\nAnswer: 1.2 × 10⁷ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'The distance from Earth to the Sun is approximately 150 000 000 km.\n\na) Write this distance in scientific notation.\nb) The distance from Earth to Proxima Centauri is approximately 4.0 × 10¹³ km. How many times further is Proxima Centauri than the Sun? (Write your answer in scientific notation.)',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Earth to Sun in scientific notation',
              correctAnswer: '1.5 × 10⁸',
              correctAnswers: ['1.5 × 10⁸', '1.5 x 10⁸', '1.5 × 10^8'],
              explanation: 'Move the decimal 8 places left: 150 000 000 → 1.5\nAnswer: 1.5 × 10⁸ km ✓',
            },
            {
              label: 'b) How many times further (in scientific notation)',
              correctAnswer: '2.67 × 10⁵',
              correctAnswers: ['2.67 × 10⁵', '2.67 x 10⁵', '≈ 2.67 × 10⁵', '2.7 × 10⁵'],
              explanation: 'Divide: (4.0 × 10¹³) ÷ (1.5 × 10⁸)\n= (4.0 ÷ 1.5) × 10^(13−8)\n≈ 2.67 × 10⁵\nProxima Centauri is approximately 2.67 × 10⁵ times further ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert large numbers to scientific notation by moving the decimal point and counting places" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step diagram showing decimal movement blue power of 10 orange and final scientific notation form green for 45 000 and 3 200 000" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATIONS WITH SQUARES, CUBES AND ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots',
      title: 'Calculations with Squares, Cubes and Roots of Integers and Rationals',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">We perform all four operations using numbers involving <strong>squares</strong>, <strong>cubes</strong>, <strong>square roots</strong> and <strong>cube roots</strong> of integers, and extend this to calculating squares, cubes, square roots and cube roots of <strong>rational numbers</strong> (fractions and decimals).</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative sign')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('root / result')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('n')}² = ${bl('n')} × ${bl('n')}. For fractions: (${bl('a/b')})² = ${bl('a²/b²')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cube</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('n')}³ = ${bl('n')} × ${bl('n')} × ${bl('n')}. For fractions: (${bl('a/b')})³ = ${bl('a³/b³')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square Root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('√(a/b)')} = ${gr('√a / √b')}. Apply the root to numerator and denominator separately.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Cube Root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('∛(a/b)')} = ${gr('∛a / ∛b')}. Apply the root to numerator and denominator separately.</p>` +
        `</div>` +

        `</div>` +

        // ── Critical distinction box ─────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Critical distinction: ${re('(−4)²')} is NOT the same as ${re('−4²')}</p>` +
        `<p style="margin:0;color:#991b1b;">${re('(−4)²')} means the ${re('negative sign')} is inside the brackets, so it is squared: (${re('−')}4) × (${re('−')}4) = +16.<br>` +
        `${re('−4²')} means only 4 is squared: ${re('−')}(4²) = ${re('−')}16. The ${re('negative sign')} is applied after squaring.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate (−4)² and −4². Explain the difference.',
          answer: `${re('(−4)²')} = ${gr('16')} &nbsp;and&nbsp; ${re('−4²')} = ${re('−')}${gr('16')} — these are different`,
          steps: [
            `${re('(−4)²')}: The ${re('negative sign')} is inside the brackets, so it is part of the base. Multiply: (${re('−')}4) × (${re('−')}4) = ${gr('+16')}.`,
            `${re('−4²')}: The exponent applies only to 4, not to the ${re('negative sign')}. Calculate: ${re('−')}(4 × 4) = ${re('−')}${gr('16')}.`,
            `<strong>Conclusion:</strong> ${re('(−4)²')} = ${gr('16')} but ${re('−4²')} = ${re('−')}${gr('16')}. These are different because the position of the ${re('negative sign')} relative to the brackets matters.`,
          ],
        },
        {
          question: 'Find the square root of 4/9.',
          answer: `${gr('√')}(${bl('4/9')}) = ${gr('2/3')}`,
          steps: [
            `Apply the square root to numerator and denominator separately: ${gr('√')}(${bl('4/9')}) = ${gr('√4')} / ${gr('√9')}`,
            `Calculate: ${gr('√4')} = ${gr('2')} &nbsp;and&nbsp; ${gr('√9')} = ${gr('3')}`,
            `Result: ${gr('√')}(${bl('4/9')}) = ${gr('2/3')}`,
          ],
        },
        {
          question: 'Calculate the cube of 0.5.',
          answer: `${bl('0.5')}³ = ${gr('0.125')}`,
          steps: [
            `Write 0.5 as a ${bl('fraction')}: ${bl('0.5')} = ${bl('1/2')}`,
            `Cube the fraction: (${bl('1/2')})³ = ${bl('1³/2³')} = ${bl('1/8')}`,
            `Convert back to a decimal: ${bl('1/8')} = ${gr('0.125')}`,
            `Alternatively: ${bl('0.5')} × ${bl('0.5')} × ${bl('0.5')} = 0.25 × 0.5 = ${gr('0.125')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Calculate (−3)².',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: '(−3)² = (−3) × (−3) = +9\nThe negative sign is inside the brackets and is squared, giving a positive result ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) √(9/16)',
              correctAnswer: '3/4',
              correctAnswers: ['3/4', '0.75'],
              explanation: 'Apply the root to each part separately.\n√9 = 3 and √16 = 4\n√(9/16) = 3/4 ✓',
            },
            {
              label: 'b) ∛(8/27)',
              correctAnswer: '2/3',
              correctAnswers: ['2/3'],
              explanation: 'Apply the cube root to each part separately.\n∛8 = 2 and ∛27 = 3\n∛(8/27) = 2/3 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Calculate and compare. Show all working.\n\na) (−5)² + √25\nb) −5² − ∛(−125)',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (−5)² + √25',
              correctAnswer: '30',
              explanation: '(−5)² = (−5) × (−5) = 25\n√25 = 5\n25 + 5 = 30 ✓',
            },
            {
              label: 'b) −5² − ∛(−125)',
              correctAnswer: '-20',
              correctAnswers: ['-20', '−20'],
              explanation: '−5² = −(5²) = −25\n∛(−125) = −5 (since (−5)³ = −125)\n−25 − (−5) = −25 + 5 = −20 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating squares cubes square roots and cube roots of integers and fractions with negative sign rules explained" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side comparison showing negative sign red fraction blue and root result green for key examples including the critical distinction between (negative 4) squared and negative 4 squared" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — product law ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify 2³ × 2².',
      answer: '32',
      checkMode: 'auto',
      correctAnswer: '32',
      explanation: 'Product law — same base (2), add the exponents: 2^(3+2) = 2⁵ = 32 ✓',
    },

    // ── Q2 Medium — quotient law ──────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify 7⁵ ÷ 7².',
      answer: '343',
      checkMode: 'auto',
      correctAnswer: '343',
      explanation: 'Quotient law — same base (7), subtract the exponents: 7^(5−2) = 7³ = 343 ✓',
    },

    // ── Q3 Medium — power of a power ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify (4²)³.',
      answer: '4096',
      checkMode: 'auto',
      correctAnswer: '4096',
      explanation: 'Power of a power — multiply the exponents: 4^(2×3) = 4⁶ = 4 096 ✓',
    },

    // ── Q4 Hard — zero exponent ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says 6⁰ = 0. Is he correct? Explain.',
      answer: 'No — any non-zero number to the power 0 equals 1, not 0.',
      checkMode: 'self',
    },

    // ── Q5 Easy — scientific notation ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 67 000 in scientific notation.',
      answer: '6.7 × 10⁴',
      checkMode: 'auto',
      correctAnswer: '6.7 × 10⁴',
      correctAnswers: ['6.7 × 10⁴', '6.7 x 10⁴', '6.7×10⁴', '6.7 × 10^4', '6.7x10^4'],
      explanation: 'Move the decimal 4 places left: 67 000 → 6.7\nAnswer: 6.7 × 10⁴ ✓',
    },

    // ── Q6 Medium — scientific notation ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write 9 150 000 in scientific notation.',
      answer: '9.15 × 10⁶',
      checkMode: 'auto',
      correctAnswer: '9.15 × 10⁶',
      correctAnswers: ['9.15 × 10⁶', '9.15 x 10⁶', '9.15×10⁶', '9.15 × 10^6'],
      explanation: 'Move the decimal 6 places left: 9 150 000 → 9.15\nAnswer: 9.15 × 10⁶ ✓',
    },

    // ── Q7 Hard — check scientific notation ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato converts 520 000 to scientific notation and gets 5.2 × 10⁵. Check her answer.',
      answer: 'Correct — moving the decimal 5 places left gives 5.2 × 10⁵.',
      checkMode: 'self',
    },

    // ── Q8 Easy — negative base squared ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate (−3)².',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: '(−3)² = (−3) × (−3) = +9\nThe negative sign is inside the brackets and is squared, giving a positive result ✓',
    },

    // ── Q9 Easy — negative sign outside exponent ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate −3².',
      answer: '-9',
      checkMode: 'auto',
      correctAnswer: '-9',
      correctAnswers: ['-9', '−9'],
      explanation: '−3² means −(3²) = −(9) = −9\nThe exponent applies only to 3, not to the negative sign ✓',
    },

    // ── Q10 Medium — square root of a fraction ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the square root of 9/16.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      correctAnswers: ['3/4', '0.75'],
      explanation: 'Apply the root to numerator and denominator separately.\n√9 = 3 and √16 = 4\n√(9/16) = 3/4 ✓',
    },

    // ── Q11 Medium — cube of a decimal ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate the cube of 0.4.',
      answer: '0.064',
      checkMode: 'auto',
      correctAnswer: '0.064',
      explanation: '0.4 × 0.4 = 0.16\n0.16 × 0.4 = 0.064\nAnswer: (0.4)³ = 0.064 ✓',
    },

    // ── Q12 Hard — cube of negative: same result ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says (−2)³ and −2³ give the same answer. Is he correct? Explain.',
      answer: 'Yes — (−2)³ = −8 and −2³ = −(2³) = −8. In this case they happen to be equal because cubing a negative keeps it negative.',
      checkMode: 'self',
    },

    // ── Q13 Hard — square of negative: different results ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says (−5)² and −5² give the same answer. Is she correct? Explain.',
      answer: 'No — (−5)² = 25 (positive) but −5² = −(5²) = −25 (negative). They are different.',
      checkMode: 'self',
    },

    // ── Q14 Medium — power of a product ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify (2 × 3)².',
      answer: '36',
      checkMode: 'auto',
      correctAnswer: '36',
      explanation: 'Power of a product: (2 × 3)² = 6² = 36\nOr distribute: 2² × 3² = 4 × 9 = 36 ✓',
    },

    // ── Q15 Hard — square root of a decimal ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the square root of 1.44.',
      answer: '1.2',
      checkMode: 'auto',
      correctAnswer: '1.2',
      explanation: '1.44 = 144/100\n√(144/100) = √144 / √100 = 12/10 = 1.2\nOr: 1.2 × 1.2 = 1.44 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered exponents.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! A perfect score — you have completely mastered Exponents for Grade 8. Keep it up!' },
    { minScore: 9, message: 'Excellent work! You have a very strong grasp of exponents. Review any missed parts and you will have it perfect.' },
    { minScore: 6, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
