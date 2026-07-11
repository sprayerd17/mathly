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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Product & quotient law | 5-7 Power of a power / power of a
    // product | 8-10 Zero exponent & multi-step law combinations |
    // 11-14 Squares/cubes/roots of integers incl. negative bases |
    // 15-17 Squares/cubes/roots of rationals | 18-20 Scientific notation
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 3⁵ × 3², leaving your answer as a power of 3, then evaluate it.', answer: '3⁷ = 2 187', checkMode: 'auto', correctAnswer: '2187', correctAnswers: ['2187', '3^7=2187', '3⁷=2187'], explanation: 'Same base — add the exponents: 3⁵ × 3² = 3^(5+2) = 3⁷ = 2 187 ✓' },
        { difficulty: 'Easy', question: 'Simplify 4⁶ ÷ 4², leaving your answer as a power of 4, then evaluate it.', answer: '4⁴ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '4^4=256', '4⁴=256'], explanation: 'Same base — subtract the exponents: 4⁶ ÷ 4² = 4^(6−2) = 4⁴ = 256 ✓' },
        { difficulty: 'Medium', question: 'Bongiwe simplifies 2⁴ × 2⁶ as 4¹⁰, saying "you multiply the bases and add the exponents." Explain her error and give the correct simplified answer.', answer: 'The base stays the same (2) — it must not be multiplied. Only the exponents are added: 2⁴ × 2⁶ = 2^(4+6) = 2¹⁰ = 1 024, not 4¹⁰.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 7⁷ ÷ 7³, leaving your answer as a power of 7, then evaluate it.', answer: '7⁴ = 2 401', checkMode: 'auto', correctAnswer: '2401', correctAnswers: ['2401', '7^4=2401', '7⁴=2401'], explanation: 'Same base — subtract the exponents: 7⁷ ÷ 7³ = 7^(7−3) = 7⁴ = 2 401 ✓' },
        { difficulty: 'Medium', question: 'Apply the power of a power law to simplify (2³)⁴, then evaluate it.', answer: '2¹² = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '2^12=4096', '2¹²=4096'], explanation: 'Power of a power — multiply the exponents: (2³)⁴ = 2^(3×4) = 2¹² = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Simplify (3²)³ using the power of a power law, then evaluate it.', answer: '3⁶ = 729', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Power of a power — multiply the exponents: (3²)³ = 3^(2×3) = 3⁶ = 729 ✓' },
        { difficulty: 'Medium-Hard', question: 'Use the power of a product law to simplify (2 × 5)³, then evaluate it two different ways to check your answer matches.', answer: '(2 × 5)³ = 10³ = 1 000, and 2³ × 5³ = 8 × 125 = 1 000', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '10^3=1000', '10³=1000'], explanation: 'Method 1: (2 × 5)³ = 10³ = 1 000. Method 2 (power of a product): 2³ × 5³ = 8 × 125 = 1 000. Both methods agree ✓' },
        { difficulty: 'Medium', question: 'Simplify and evaluate: (2³ × 2²) ÷ 2⁴.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Step 1: Product law in the numerator: 2³ × 2² = 2^(3+2) = 2⁵.\nStep 2: Quotient law: 2⁵ ÷ 2⁴ = 2^(5−4) = 2¹ = 2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Simplify (3⁴ × 3¹) ÷ 3³, giving a final numerical answer.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Step 1: Product law: 3⁴ × 3¹ = 3^(4+1) = 3⁵.\nStep 2: Quotient law: 3⁵ ÷ 3³ = 3^(5−3) = 3² = 9 ✓' },
        { difficulty: 'Hard', question: 'Zanele says that because 5⁰ = 1, it must also be true that 0 × 5⁰ = 0 × 1 = 0, so "any expression with a zero exponent equals zero." Explain what is wrong with her reasoning.', answer: 'She is confusing the exponent 0 with a coefficient of 0. The zero exponent law only tells us 5⁰ = 1; multiplying that result by an unrelated 0 gives 0, but this has nothing to do with the exponent itself. 5⁰ on its own is still 1, not 0.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−6)².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '(−6)² = (−6) × (−6) = +36\nThe negative sign is inside the brackets and is squared, giving a positive result ✓' },
        { difficulty: 'Easy', question: 'Calculate −6².', answer: '-36', checkMode: 'auto', correctAnswer: '-36', correctAnswers: ['-36', '−36'], explanation: '−6² means −(6²) = −(36) = −36\nThe exponent applies only to 6, not to the negative sign ✓' },
        { difficulty: 'Medium', question: 'Calculate (−2)³ and −2³. Kagiso says these must be different because "(−a)ⁿ and −aⁿ are never equal." Show the values and comment on his claim.', answer: '(−2)³ = −8 and −2³ = −8 — they happen to be equal here', checkMode: 'auto', correctAnswer: '-8', correctAnswers: ['-8', '−8', 'bothequal-8', 'equal'], explanation: '(−2)³ = (−2)×(−2)×(−2) = −8. −2³ = −(2³) = −8. His claim is false in this case — for odd exponents, (−a)ⁿ and −aⁿ are always equal, because a negative number raised to an odd power stays negative either way.', },
        { difficulty: 'Hard', question: 'Calculate (−4)² + √36, then calculate −4² − ∛(−64). Show all working for both.', answer: '(−4)² + √36 = 22, and −4² − ∛(−64) = −12', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−4)² + √36', correctAnswer: '22', explanation: '(−4)² = (−4) × (−4) = 16\n√36 = 6\n16 + 6 = 22 ✓' }, { label: 'b) −4² − ∛(−64)', correctAnswer: '-12', correctAnswers: ['-12', '−12'], explanation: '−4² = −(4²) = −16\n∛(−64) = −4 (since (−4)³ = −64)\n−16 − (−4) = −16 + 4 = −12 ✓' } ] },
        { difficulty: 'Medium', question: 'Find the square root of 16/25.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5', '0.8'], explanation: 'Apply the root to numerator and denominator separately.\n√16 = 4 and √25 = 5\n√(16/25) = 4/5 ✓' },
        { difficulty: 'Medium', question: 'Find the cube root of 27/64.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '0.75'], explanation: 'Apply the cube root to numerator and denominator separately.\n∛27 = 3 and ∛64 = 4\n∛(27/64) = 3/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate the cube of 0.3, and then find the square root of 2.25. Show all working.', answer: '(0.3)³ = 0.027, and √2.25 = 1.5', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0.3)³', correctAnswer: '0.027', explanation: '0.3 × 0.3 = 0.09\n0.09 × 0.3 = 0.027\nAnswer: (0.3)³ = 0.027 ✓' }, { label: 'b) √2.25', correctAnswer: '1.5', explanation: '2.25 = 225/100\n√(225/100) = √225 / √100 = 15/10 = 1.5\nOr: 1.5 × 1.5 = 2.25 ✓' } ] },
        { difficulty: 'Easy', question: 'Write 123 000 in scientific notation.', answer: '1.23 × 10⁵', checkMode: 'auto', correctAnswer: '1.23 × 10⁵', correctAnswers: ['1.23 × 10⁵', '1.23 x 10⁵', '1.23×10⁵', '1.23 × 10^5', '1.23x10^5'], explanation: 'Move the decimal 5 places left: 123 000 → 1.23\nAnswer: 1.23 × 10⁵ ✓' },
        { difficulty: 'Medium', question: 'Write 900 000 000 in scientific notation.', answer: '9 × 10⁸', checkMode: 'auto', correctAnswer: '9 × 10⁸', correctAnswers: ['9 × 10⁸', '9 x 10⁸', '9×10⁸', '9 × 10^8', '9.0 × 10⁸'], explanation: 'Move the decimal 8 places left: 900 000 000 → 9\nAnswer: 9 × 10⁸ ✓' },
        { difficulty: 'Hard', question: 'A city library holds approximately 300 000 000 (3.0 × 10⁸) pages of documents in total, stored in files of 24 000 (2.4 × 10⁴) pages each. Write both quantities in scientific notation, then calculate how many files are needed.', answer: '3.0 × 10⁸ pages, 2.4 × 10⁴ pages per file, 12 500 files', checkMode: 'auto', correctAnswer: '12500', correctAnswers: ['12500', '12 500', '1.25 × 10⁴', '1.25×10⁴'], explanation: 'Divide: (3.0 × 10⁸) ÷ (2.4 × 10⁴)\n= (3.0 ÷ 2.4) × 10^(8−4)\n= 1.25 × 10⁴ = 12 500 files ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the laws of exponents, roots and scientific notation at Grade 8 level.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 5³ × 5⁴, leaving your answer as a power of 5, then evaluate it.', answer: '5⁷ = 78 125', checkMode: 'auto', correctAnswer: '78125', correctAnswers: ['78125', '5^7=78125', '5⁷=78125'], explanation: 'Same base — add the exponents: 5³ × 5⁴ = 5^(3+4) = 5⁷ = 78 125 ✓' },
        { difficulty: 'Easy', question: 'Simplify 8⁷ ÷ 8³, leaving your answer as a power of 8, then evaluate it.', answer: '8⁴ = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '8^4=4096', '8⁴=4096'], explanation: 'Same base — subtract the exponents: 8⁷ ÷ 8³ = 8^(7−3) = 8⁴ = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Thabiso simplifies 3⁵ × 3² as 9⁷, saying "you multiply the bases and add the exponents." Explain his error and give the correct simplified answer.', answer: 'The base stays the same (3) — it must not be multiplied. Only the exponents are added: 3⁵ × 3² = 3^(5+2) = 3⁷ = 2 187, not 9⁷.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 9⁶ ÷ 9⁴, leaving your answer as a power of 9, then evaluate it.', answer: '9² = 81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'Same base — subtract the exponents: 9⁶ ÷ 9⁴ = 9^(6−4) = 9² = 81 ✓' },
        { difficulty: 'Medium', question: 'Apply the power of a power law to simplify (4²)³, then evaluate it.', answer: '4⁶ = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '4^6=4096', '4⁶=4096'], explanation: 'Power of a power — multiply the exponents: (4²)³ = 4^(2×3) = 4⁶ = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Simplify (2⁴)² using the power of a power law, then evaluate it.', answer: '2⁸ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Power of a power — multiply the exponents: (2⁴)² = 2^(4×2) = 2⁸ = 256 ✓' },
        { difficulty: 'Medium-Hard', question: 'Use the power of a product law to simplify (3 × 4)³, then evaluate it two different ways to check your answer matches.', answer: '(3 × 4)³ = 12³ = 1 728, and 3³ × 4³ = 27 × 64 = 1 728', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '12^3=1728', '12³=1728'], explanation: 'Method 1: (3 × 4)³ = 12³ = 1 728. Method 2 (power of a product): 3³ × 4³ = 27 × 64 = 1 728. Both methods agree ✓' },
        { difficulty: 'Medium', question: 'Simplify and evaluate: (5³ × 5²) ÷ 5⁴.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Step 1: Product law in the numerator: 5³ × 5² = 5^(3+2) = 5⁵.\nStep 2: Quotient law: 5⁵ ÷ 5⁴ = 5^(5−4) = 5¹ = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Simplify (2⁵ × 2¹) ÷ 2⁴, giving a final numerical answer.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Step 1: Product law: 2⁵ × 2¹ = 2^(5+1) = 2⁶.\nStep 2: Quotient law: 2⁶ ÷ 2⁴ = 2^(6−4) = 2² = 4 ✓' },
        { difficulty: 'Hard', question: 'Kagiso says that because 8⁰ = 1, it must also be true that 0 × 8⁰ = 0 × 1 = 0, so "any expression with a zero exponent equals zero." Explain what is wrong with his reasoning.', answer: 'He is confusing the exponent 0 with a coefficient of 0. The zero exponent law only tells us 8⁰ = 1; multiplying that result by an unrelated 0 gives 0, but this has nothing to do with the exponent itself. 8⁰ on its own is still 1, not 0.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−8)².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '(−8)² = (−8) × (−8) = +64\nThe negative sign is inside the brackets and is squared, giving a positive result ✓' },
        { difficulty: 'Easy', question: 'Calculate −8².', answer: '-64', checkMode: 'auto', correctAnswer: '-64', correctAnswers: ['-64', '−64'], explanation: '−8² means −(8²) = −(64) = −64\nThe exponent applies only to 8, not to the negative sign ✓' },
        { difficulty: 'Medium', question: 'Calculate (−3)³ and −3³. Naledi says these must be different because "(−a)ⁿ and −aⁿ are never equal." Show the values and comment on her claim.', answer: '(−3)³ = −27 and −3³ = −27 — they happen to be equal here', checkMode: 'auto', correctAnswer: '-27', correctAnswers: ['-27', '−27', 'bothequal-27', 'equal'], explanation: '(−3)³ = (−3)×(−3)×(−3) = −27. −3³ = −(3³) = −27. Her claim is false in this case — for odd exponents, (−a)ⁿ and −aⁿ are always equal, because a negative number raised to an odd power stays negative either way.' },
        { difficulty: 'Hard', question: 'Calculate (−3)² + √64, then calculate −3² − ∛(−27). Show all working for both.', answer: '(−3)² + √64 = 17, and −3² − ∛(−27) = −6', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−3)² + √64', correctAnswer: '17', explanation: '(−3)² = (−3) × (−3) = 9\n√64 = 8\n9 + 8 = 17 ✓' }, { label: 'b) −3² − ∛(−27)', correctAnswer: '-6', correctAnswers: ['-6', '−6'], explanation: '−3² = −(3²) = −9\n∛(−27) = −3 (since (−3)³ = −27)\n−9 − (−3) = −9 + 3 = −6 ✓' } ] },
        { difficulty: 'Medium', question: 'Find the square root of 25/49.', answer: '5/7', checkMode: 'auto', correctAnswer: '5/7', explanation: 'Apply the root to numerator and denominator separately.\n√25 = 5 and √49 = 7\n√(25/49) = 5/7 ✓' },
        { difficulty: 'Medium', question: 'Find the cube root of 64/125.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5', '0.8'], explanation: 'Apply the cube root to numerator and denominator separately.\n∛64 = 4 and ∛125 = 5\n∛(64/125) = 4/5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate the cube of 0.2, and then find the square root of 1.69. Show all working.', answer: '(0.2)³ = 0.008, and √1.69 = 1.3', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0.2)³', correctAnswer: '0.008', explanation: '0.2 × 0.2 = 0.04\n0.04 × 0.2 = 0.008\nAnswer: (0.2)³ = 0.008 ✓' }, { label: 'b) √1.69', correctAnswer: '1.3', explanation: '1.69 = 169/100\n√(169/100) = √169 / √100 = 13/10 = 1.3\nOr: 1.3 × 1.3 = 1.69 ✓' } ] },
        { difficulty: 'Easy', question: 'Write 67 000 in scientific notation.', answer: '6.7 × 10⁴', checkMode: 'auto', correctAnswer: '6.7 × 10⁴', correctAnswers: ['6.7 × 10⁴', '6.7 x 10⁴', '6.7×10⁴', '6.7 × 10^4', '6.7x10^4'], explanation: 'Move the decimal 4 places left: 67 000 → 6.7\nAnswer: 6.7 × 10⁴ ✓' },
        { difficulty: 'Medium', question: 'Write 5 000 000 000 in scientific notation.', answer: '5 × 10⁹', checkMode: 'auto', correctAnswer: '5 × 10⁹', correctAnswers: ['5 × 10⁹', '5 x 10⁹', '5×10⁹', '5 × 10^9', '5.0 × 10⁹'], explanation: 'Move the decimal 9 places left: 5 000 000 000 → 5\nAnswer: 5 × 10⁹ ✓' },
        { difficulty: 'Hard', question: 'A phone manufacturer produces approximately 480 000 000 (4.8 × 10⁸) components per year, packed into boxes of 160 000 (1.6 × 10⁵) components each. Write both quantities in scientific notation, then calculate how many boxes are needed per year.', answer: '4.8 × 10⁸ components, 1.6 × 10⁵ per box, 3 000 boxes', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', '3 000', '3.0 × 10³', '3.0×10³'], explanation: 'Divide: (4.8 × 10⁸) ÷ (1.6 × 10⁵)\n= (4.8 ÷ 1.6) × 10^(8−5)\n= 3.0 × 10³ = 3 000 boxes ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the laws of exponents, roots and scientific notation at Grade 8 level.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 2⁶ × 2³, leaving your answer as a power of 2, then evaluate it.', answer: '2⁹ = 512', checkMode: 'auto', correctAnswer: '512', correctAnswers: ['512', '2^9=512', '2⁹=512'], explanation: 'Same base — add the exponents: 2⁶ × 2³ = 2^(6+3) = 2⁹ = 512 ✓' },
        { difficulty: 'Easy', question: 'Simplify 6⁷ ÷ 6⁵, leaving your answer as a power of 6, then evaluate it.', answer: '6² = 36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '6^2=36', '6²=36'], explanation: 'Same base — subtract the exponents: 6⁷ ÷ 6⁵ = 6^(7−5) = 6² = 36 ✓' },
        { difficulty: 'Medium', question: 'Amahle simplifies 4³ × 4² as 16⁵, saying "you multiply the bases and add the exponents." Explain her error and give the correct simplified answer.', answer: 'The base stays the same (4) — it must not be multiplied. Only the exponents are added: 4³ × 4² = 4^(3+2) = 4⁵ = 1 024, not 16⁵.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 10⁸ ÷ 10⁵, leaving your answer as a power of 10, then evaluate it.', answer: '10³ = 1 000', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '10^3=1000', '10³=1000'], explanation: 'Same base — subtract the exponents: 10⁸ ÷ 10⁵ = 10^(8−5) = 10³ = 1 000 ✓' },
        { difficulty: 'Medium', question: 'Apply the power of a power law to simplify (5³)², then evaluate it.', answer: '5⁶ = 15 625', checkMode: 'auto', correctAnswer: '15625', correctAnswers: ['15625', '15 625', '5^6=15625', '5⁶=15625'], explanation: 'Power of a power — multiply the exponents: (5³)² = 5^(3×2) = 5⁶ = 15 625 ✓' },
        { difficulty: 'Medium', question: 'Simplify (3²)⁴ using the power of a power law, then evaluate it.', answer: '3⁸ = 6 561', checkMode: 'auto', correctAnswer: '6561', correctAnswers: ['6561', '3^8=6561', '3⁸=6561'], explanation: 'Power of a power — multiply the exponents: (3²)⁴ = 3^(2×4) = 3⁸ = 6 561 ✓' },
        { difficulty: 'Medium-Hard', question: 'Use the power of a product law to simplify (2 × 3)⁵, then evaluate it two different ways to check your answer matches.', answer: '(2 × 3)⁵ = 6⁵ = 7 776, and 2⁵ × 3⁵ = 32 × 243 = 7 776', checkMode: 'auto', correctAnswer: '7776', correctAnswers: ['7776', '6^5=7776', '6⁵=7776'], explanation: 'Method 1: (2 × 3)⁵ = 6⁵ = 7 776. Method 2 (power of a product): 2⁵ × 3⁵ = 32 × 243 = 7 776. Both methods agree ✓' },
        { difficulty: 'Medium', question: 'Simplify and evaluate: (3³ × 3²) ÷ 3⁴.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Step 1: Product law in the numerator: 3³ × 3² = 3^(3+2) = 3⁵.\nStep 2: Quotient law: 3⁵ ÷ 3⁴ = 3^(5−4) = 3¹ = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Simplify (6⁴ × 6¹) ÷ 6³, giving a final numerical answer.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Step 1: Product law: 6⁴ × 6¹ = 6^(4+1) = 6⁵.\nStep 2: Quotient law: 6⁵ ÷ 6³ = 6^(5−3) = 6² = 36 ✓' },
        { difficulty: 'Hard', question: 'Palesa says that because 12⁰ = 1, it must also be true that 0 × 12⁰ = 0 × 1 = 0, so "any expression with a zero exponent equals zero." Explain what is wrong with her reasoning.', answer: 'She is confusing the exponent 0 with a coefficient of 0. The zero exponent law only tells us 12⁰ = 1; multiplying that result by an unrelated 0 gives 0, but this has nothing to do with the exponent itself. 12⁰ on its own is still 1, not 0.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate (−9)².', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: '(−9)² = (−9) × (−9) = +81\nThe negative sign is inside the brackets and is squared, giving a positive result ✓' },
        { difficulty: 'Easy', question: 'Calculate −9².', answer: '-81', checkMode: 'auto', correctAnswer: '-81', correctAnswers: ['-81', '−81'], explanation: '−9² means −(9²) = −(81) = −81\nThe exponent applies only to 9, not to the negative sign ✓' },
        { difficulty: 'Medium', question: 'Calculate (−5)³ and −5³. Sibusiso says these must be different because "(−a)ⁿ and −aⁿ are never equal." Show the values and comment on his claim.', answer: '(−5)³ = −125 and −5³ = −125 — they happen to be equal here', checkMode: 'auto', correctAnswer: '-125', correctAnswers: ['-125', '−125', 'bothequal-125', 'equal'], explanation: '(−5)³ = (−5)×(−5)×(−5) = −125. −5³ = −(5³) = −125. His claim is false in this case — for odd exponents, (−a)ⁿ and −aⁿ are always equal, because a negative number raised to an odd power stays negative either way.' },
        { difficulty: 'Hard', question: 'Calculate (−6)² + √81, then calculate −6² − ∛(−216). Show all working for both.', answer: '(−6)² + √81 = 45, and −6² − ∛(−216) = −30', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−6)² + √81', correctAnswer: '45', explanation: '(−6)² = (−6) × (−6) = 36\n√81 = 9\n36 + 9 = 45 ✓' }, { label: 'b) −6² − ∛(−216)', correctAnswer: '-30', correctAnswers: ['-30', '−30'], explanation: '−6² = −(6²) = −36\n∛(−216) = −6 (since (−6)³ = −216)\n−36 − (−6) = −36 + 6 = −30 ✓' } ] },
        { difficulty: 'Medium', question: 'Find the square root of 36/121.', answer: '6/11', checkMode: 'auto', correctAnswer: '6/11', explanation: 'Apply the root to numerator and denominator separately.\n√36 = 6 and √121 = 11\n√(36/121) = 6/11 ✓' },
        { difficulty: 'Medium', question: 'Find the cube root of 125/216.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', explanation: 'Apply the cube root to numerator and denominator separately.\n∛125 = 5 and ∛216 = 6\n∛(125/216) = 5/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate the square of 0.7, and then find the square root of 6.25. Show all working.', answer: '(0.7)² = 0.49, and √6.25 = 2.5', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0.7)²', correctAnswer: '0.49', explanation: '0.7 × 0.7 = 0.49\nAnswer: (0.7)² = 0.49 ✓' }, { label: 'b) √6.25', correctAnswer: '2.5', explanation: '6.25 = 625/100\n√(625/100) = √625 / √100 = 25/10 = 2.5\nOr: 2.5 × 2.5 = 6.25 ✓' } ] },
        { difficulty: 'Easy', question: 'Write 890 000 in scientific notation.', answer: '8.9 × 10⁵', checkMode: 'auto', correctAnswer: '8.9 × 10⁵', correctAnswers: ['8.9 × 10⁵', '8.9 x 10⁵', '8.9×10⁵', '8.9 × 10^5', '8.9x10^5'], explanation: 'Move the decimal 5 places left: 890 000 → 8.9\nAnswer: 8.9 × 10⁵ ✓' },
        { difficulty: 'Medium', question: 'Write 72 000 000 in scientific notation.', answer: '7.2 × 10⁷', checkMode: 'auto', correctAnswer: '7.2 × 10⁷', correctAnswers: ['7.2 × 10⁷', '7.2 x 10⁷', '7.2×10⁷', '7.2 × 10^7'], explanation: 'Move the decimal 7 places left: 72 000 000 → 7.2\nAnswer: 7.2 × 10⁷ ✓' },
        { difficulty: 'Hard', question: 'A national data centre processes approximately 6 600 000 000 (6.6 × 10⁹) records per year, in batches of 300 000 (3.0 × 10⁵) records each. Write both quantities in scientific notation, then calculate how many batches are processed per year.', answer: '6.6 × 10⁹ records, 3.0 × 10⁵ per batch, 22 000 batches', checkMode: 'auto', correctAnswer: '22000', correctAnswers: ['22000', '22 000', '2.2 × 10⁴', '2.2×10⁴'], explanation: 'Divide: (6.6 × 10⁹) ÷ (3.0 × 10⁵)\n= (6.6 ÷ 3.0) × 10^(9−5)\n= 2.2 × 10⁴ = 22 000 batches ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the laws of exponents, roots and scientific notation at Grade 8 level.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
