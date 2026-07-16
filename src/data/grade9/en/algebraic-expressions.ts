import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic expression roles) ──────────────────────────────
// distributed term / divisor / first term      → blue   (#2563eb)
// each multiplication / division / outer+inner → orange (#ea580c)
// final expression / last term                 → green  (#16a34a)
// final answer (FOIL)                          → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Expressions',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING MONOMIALS BY POLYNOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-monomials-polynomials',
      title: 'Multiplying Monomials by Polynomials',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">We extend our algebraic manipulation skills to multiply integers and monomials by polynomials (expressions with many terms), applying the <strong>distributive law</strong> across every term in the polynomial.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('distributed term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('each multiplication')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final expression')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The distributive law</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">${bl('a')}(b + c + d) = ${or('ab')} + ${or('ac')} + ${or('ad')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">Multiply the term outside the bracket by <strong>every</strong> term inside the bracket, keeping track of signs.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Step-by-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Write out the ${bl('monomial')} that will be distributed. Note its coefficient and variable(s).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiply')} — ${or('Multiply')} the monomial by each term in the bracket: multiply coefficients and add exponents (x<sup>a</sup> × x<sup>b</sup> = x<sup>a+b</sup>).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the final expression')} — List all resulting terms. No further simplification is needed unless like terms can be collected.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Exponent rule for multiplication</p>` +
        `<p style="margin:0;color:#1e3a8a;">When multiplying powers with the same base, <strong>add</strong> the exponents: x<sup>a</sup> × x<sup>b</sup> = x<sup>a+b</sup>. For example, x × x² = x<sup>1+2</sup> = x³.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Multiply 3x(2x² + 5x − 4).',
          answer: `${gr('6x³ + 15x² − 12x')}`,
          steps: [
            `${bl('Distribute 3x')} to each term: ${or('(3x)(2x²)')} + ${or('(3x)(5x)')} + ${or('(3x)(−4)')}`,
            `${or('Multiply each pair:')} (3x)(2x²) = 6x³ &nbsp;·&nbsp; (3x)(5x) = 15x² &nbsp;·&nbsp; (3x)(−4) = −12x`,
            `${gr('Final expression:')} ${gr('6x³ + 15x² − 12x')}`,
          ],
        },
        {
          question: 'Multiply −2y(y³ − 3y² + y − 7).',
          answer: `${gr('−2y⁴ + 6y³ − 2y² + 14y')}`,
          steps: [
            `${bl('Distribute −2y')} to each term: ${or('(−2y)(y³)')} + ${or('(−2y)(−3y²)')} + ${or('(−2y)(y)')} + ${or('(−2y)(−7)')}`,
            `${or('Multiply each pair:')} −2y⁴ &nbsp;·&nbsp; +6y³ &nbsp;·&nbsp; −2y² &nbsp;·&nbsp; +14y`,
            `${gr('Final expression:')} ${gr('−2y⁴ + 6y³ − 2y² + 14y')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Multiply 4x(x + 7).',
          answer: '4x² + 28x',
          checkMode: 'auto',
          correctAnswer: '4x² + 28x',
          correctAnswers: ['4x² + 28x', '4x^2 + 28x', '4x²+28x', '4x^2+28x', '28x + 4x²', '28x + 4x^2'],
          explanation: 'Distribute 4x to each term:\n(4x)(x) = 4x²\n(4x)(7) = 28x\nAnswer: 4x² + 28x ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Multiply −3x(2x² − 5x + 1).',
          answer: '−6x³ + 15x² − 3x',
          checkMode: 'auto',
          correctAnswer: '−6x³ + 15x² − 3x',
          correctAnswers: [
            '−6x³ + 15x² − 3x', '-6x³ + 15x² - 3x',
            '-6x^3 + 15x^2 - 3x', '−6x^3 + 15x^2 − 3x',
            '−6x³+15x²−3x', '-6x³+15x²-3x',
          ],
          explanation: 'Distribute −3x:\n(−3x)(2x²) = −6x³\n(−3x)(−5x) = +15x²\n(−3x)(1) = −3x\nAnswer: −6x³ + 15x² − 3x ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho multiplies 5y(y² − 3y + 8) and gets 5y³ − 15y² + 40y. Check his answer.',
          answer: 'He is correct — distributing 5y to each term gives:\n(5y)(y²) = 5y³\n(5y)(−3y) = −15y²\n(5y)(8) = 40y\nFinal expression: 5y³ − 15y² + 40y ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a monomial by a polynomial using the distributive law with step-by-step colour coded examples" />',

      diagramPlaceholder:
        'Fan diagram showing 3x distributed by arrows to each term in (2x² + 5x − 4), with the resulting products 6x³, 15x² and −12x on the right',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 175" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="8" y="64" width="50" height="38" rx="6" fill="rgba(37,99,235,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="33" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">3x</text>` +
        `<rect x="105" y="6" width="60" height="30" rx="6" fill="rgba(234,88,12,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="135" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">2x²</text>` +
        `<rect x="105" y="68" width="60" height="30" rx="6" fill="rgba(234,88,12,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="135" y="87" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">5x</text>` +
        `<rect x="105" y="130" width="60" height="30" rx="6" fill="rgba(234,88,12,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="135" y="149" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">−4</text>` +
        `<line x1="58" y1="83" x2="103" y2="21" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="105,21 96,17 96,25" fill="#0f1f3d"/>` +
        `<line x1="58" y1="83" x2="103" y2="83" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="105,83 96,79 96,87" fill="#0f1f3d"/>` +
        `<line x1="58" y1="83" x2="103" y2="145" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="105,145 96,141 96,149" fill="#0f1f3d"/>` +
        `<rect x="225" y="6" width="65" height="30" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="257" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">6x³</text>` +
        `<rect x="225" y="68" width="65" height="30" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="257" y="87" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">15x²</text>` +
        `<rect x="225" y="130" width="65" height="30" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="257" y="149" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">−12x</text>` +
        `<line x1="165" y1="21" x2="223" y2="21" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="225,21 216,17 216,25" fill="#0f1f3d"/>` +
        `<line x1="165" y1="83" x2="223" y2="83" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="225,83 216,79 216,87" fill="#0f1f3d"/>` +
        `<line x1="165" y1="145" x2="223" y2="145" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="225,145 216,141 216,149" fill="#0f1f3d"/>` +
        `<text x="150" y="168" text-anchor="middle" font-size="10" fill="#6b7280">3x is multiplied by every term inside the bracket</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING POLYNOMIALS BY INTEGERS OR MONOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-polynomials-monomials',
      title: 'Dividing Polynomials by Integers or Monomials',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">We divide polynomials by integers or monomials, <strong>dividing each term</strong> of the polynomial separately by the divisor.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('divisor')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('each division step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final expression')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The division rule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">(a + b + c) ÷ ${bl('d')} = ${or('a ÷ d')} + ${or('b ÷ d')} + ${or('c ÷ d')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">Divide <strong>every</strong> term in the polynomial by the ${bl('divisor')} separately, then simplify each result.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Step-by-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify the divisor')} — Note the ${bl('divisor')} and rewrite the polynomial as separate fractions, one per term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Divide each term')} — Divide the coefficients and subtract the exponents (x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup>).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the final expression')} — Combine the simplified terms into the ${gr('final expression')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Exponent rule for division</p>` +
        `<p style="margin:0;color:#1e3a8a;">When dividing powers with the same base, <strong>subtract</strong> the exponents: x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup>. For example, x³ ÷ x = x<sup>3−1</sup> = x².</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Divide (15x³ + 10x² − 5x) ÷ 5x.',
          answer: `${gr('3x² + 2x − 1')}`,
          steps: [
            `${bl('Divisor:')} 5x. Divide each term separately.`,
            `${or('15x³ ÷ 5x')} = 3x² &nbsp;&nbsp; ${or('10x² ÷ 5x')} = 2x &nbsp;&nbsp; ${or('−5x ÷ 5x')} = −1`,
            `${gr('Answer:')} ${gr('3x² + 2x − 1')}`,
          ],
        },
        {
          question: 'Sipho divides (8x⁴ − 12x²) ÷ 4x² and gets 2x² − 3. Check his answer.',
          answer: `${gr('He is correct: 2x² − 3')}`,
          steps: [
            `${bl('Divisor:')} 4x². Divide each term separately.`,
            `${or('8x⁴ ÷ 4x²')} = 2x² &nbsp;&nbsp; ${or('−12x² ÷ 4x²')} = −3`,
            `${gr('Answer:')} ${gr('2x² − 3')}. Sipho is correct. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Divide (12x³ + 8x²) ÷ 4x.',
          answer: '3x² + 2x',
          checkMode: 'auto',
          correctAnswer: '3x² + 2x',
          correctAnswers: ['3x² + 2x', '3x^2 + 2x', '3x²+2x', '3x^2+2x', '2x + 3x²', '2x + 3x^2'],
          explanation: 'Divide each term by 4x:\n12x³ ÷ 4x = 3x²\n8x² ÷ 4x = 2x\nAnswer: 3x² + 2x ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Divide (20x⁴ − 15x² + 10x) ÷ 5x.',
          answer: '4x³ − 3x + 2',
          checkMode: 'auto',
          correctAnswer: '4x³ − 3x + 2',
          correctAnswers: [
            '4x³ − 3x + 2', '4x^3 − 3x + 2',
            '4x³ - 3x + 2', '4x^3 - 3x + 2',
            '4x³−3x+2', '4x^3-3x+2',
          ],
          explanation: 'Divide each term by 5x:\n20x⁴ ÷ 5x = 4x³\n−15x² ÷ 5x = −3x\n10x ÷ 5x = 2\nAnswer: 4x³ − 3x + 2 ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato divides (9x³ − 6x²) ÷ 3x² and gets 3x − 2. Check her answer.',
          answer: 'She is correct — dividing each term by 3x²:\n9x³ ÷ 3x² = 3x\n−6x² ÷ 3x² = −2\nFinal expression: 3x − 2 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide a polynomial by a monomial by splitting each term and applying the exponent subtraction rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PRODUCT OF TWO BINOMIALS AND SQUARE OF A BINOMIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-binomials-square',
      title: 'The Product of Two Binomials and the Square of a Binomial',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We multiply two binomials using the <strong>FOIL method</strong> (First, Outer, Inner, Last) or distribution, and recognise special patterns for the square of a binomial: <strong>(a + b)² = a² + 2ab + b²</strong>, and <strong>(a − b)² = a² − 2ab + b²</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('outer / inner terms')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('last term')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The FOIL method</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;font-size:1.1em;">F — ${bl('First')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Multiply the ${bl('first')} terms of each binomial.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:1.1em;">O — ${or('Outer')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Multiply the ${or('outer')} terms (first of first × last of second).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:1.1em;">I — ${or('Inner')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Multiply the ${or('inner')} terms (last of first × first of second).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;font-size:1.1em;">L — ${gr('Last')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Multiply the ${gr('last')} terms of each binomial.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Special patterns</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Square of a sum</p>` +
        `<p style="font-size:1.05em;color:#374151;margin-bottom:6px;">(a + b)² = a² + 2ab + b²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Note the <strong>middle term 2ab</strong> — it is essential and easily forgotten.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Square of a difference</p>` +
        `<p style="font-size:1.05em;color:#374151;margin-bottom:6px;">(a − b)² = a² − 2ab + b²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The last term is always <strong>positive</strong> because (−b)² = +b².</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common mistake to avoid</p>` +
        `<p style="margin:0;color:#991b1b;">(x + 4)² ≠ x² + 16. Squaring a binomial always produces a <strong>trinomial</strong>: (x + 4)² = x² + 8x + 16. The middle term 2ab is essential — never omit it.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Multiply (x + 3)(x + 5).',
          answer: `${re('x² + 8x + 15')}`,
          steps: [
            `FOIL: ${bl('First:')} x · x = x² &nbsp;&nbsp; ${or('Outer:')} x · 5 = 5x &nbsp;&nbsp; ${or('Inner:')} 3 · x = 3x &nbsp;&nbsp; ${gr('Last:')} 3 · 5 = 15`,
            `Combine like terms: x² + 5x + 3x + 15`,
            `${re('Final answer:')} ${re('x² + 8x + 15')}`,
          ],
        },
        {
          question: 'Expand (2x − 1)(3x + 4).',
          answer: `${re('6x² + 5x − 4')}`,
          steps: [
            `FOIL: ${bl('First:')} 2x · 3x = 6x² &nbsp;&nbsp; ${or('Outer:')} 2x · 4 = 8x &nbsp;&nbsp; ${or('Inner:')} −1 · 3x = −3x &nbsp;&nbsp; ${gr('Last:')} −1 · 4 = −4`,
            `Combine like terms: 6x² + 8x − 3x − 4`,
            `${re('Final answer:')} ${re('6x² + 5x − 4')}`,
          ],
        },
        {
          question: 'Expand (x + 4)² using the special pattern.',
          answer: `${re('x² + 8x + 16')}`,
          steps: [
            `Use the pattern: (a + b)² = a² + 2ab + b²`,
            `Here a = x, b = 4.`,
            `x² + 2(x)(4) + 4² = x² + 8x + 16`,
            `${re('Final answer:')} ${re('x² + 8x + 16')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Expand (x + 2)(x + 5).',
          answer: 'x² + 7x + 10',
          checkMode: 'auto',
          correctAnswer: 'x² + 7x + 10',
          correctAnswers: ['x² + 7x + 10', 'x^2 + 7x + 10', 'x²+7x+10', 'x^2+7x+10'],
          explanation: 'FOIL:\nFirst: x · x = x²\nOuter: x · 5 = 5x\nInner: 2 · x = 2x\nLast: 2 · 5 = 10\nCombine: x² + 7x + 10 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Expand (x − 3)(x + 6).',
          answer: 'x² + 3x − 18',
          checkMode: 'auto',
          correctAnswer: 'x² + 3x − 18',
          correctAnswers: ['x² + 3x − 18', 'x^2 + 3x − 18', 'x²+3x−18', 'x²+3x-18', 'x^2+3x-18'],
          explanation: 'FOIL:\nFirst: x²\nOuter: +6x\nInner: −3x\nLast: −18\nCombine: x² + 3x − 18 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo expands (2x + 3)(x − 4) and gets 2x² − 5x − 12. Check his answer.',
          answer: 'He is correct.\nFOIL:\nFirst: 2x · x = 2x²\nOuter: 2x · (−4) = −8x\nInner: 3 · x = 3x\nLast: 3 · (−4) = −12\nCombined: 2x² − 8x + 3x − 12 = 2x² − 5x − 12 ✓',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Expand (x + 6)² using the special pattern.',
          answer: 'x² + 12x + 36',
          checkMode: 'auto',
          correctAnswer: 'x² + 12x + 36',
          correctAnswers: ['x² + 12x + 36', 'x^2 + 12x + 36', 'x²+12x+36', 'x^2+12x+36'],
          explanation: 'Use (a + b)² = a² + 2ab + b²\na = x, b = 6\nx² + 2(x)(6) + 6² = x² + 12x + 36 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Expand (x − 5)² using the special pattern and explain which formula you used.',
          answer: 'Used the pattern (a − b)² = a² − 2ab + b².\na = x, b = 5.\nx² − 2(x)(5) + 5² = x² − 10x + 25 ✓',
          checkMode: 'self',
        },

        // ── Q12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Expand (3x + 2)².',
          answer: '9x² + 12x + 4',
          checkMode: 'auto',
          correctAnswer: '9x² + 12x + 4',
          correctAnswers: ['9x² + 12x + 4', '9x^2 + 12x + 4', '9x²+12x+4', '9x^2+12x+4'],
          explanation: 'Use (a + b)² = a² + 2ab + b²\na = 3x, b = 2\n(3x)² + 2(3x)(2) + 2² = 9x² + 12x + 4 ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says (x + 4)² and x² + 16 are equal. Is she correct? Explain.',
          answer: 'No — (x + 4)² = x² + 8x + 16, which includes the middle term 8x that is missing in x² + 16. They are not equal.',
          checkMode: 'self',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Expand (2x − 5)(2x + 5) and identify any special pattern used.',
          answer: '4x² − 25. This is the difference of two squares pattern: (a − b)(a + b) = a² − b².\nHere a = 2x and b = 5, so (2x)² − 5² = 4x² − 25.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Divide (6x⁴ + 9x³ − 3x²) ÷ 3x² and expand (x + 7)(x − 7). Compare the techniques used.',
          answer: 'Division: divide each term by 3x²:\n6x⁴ ÷ 3x² = 2x²\n9x³ ÷ 3x² = 3x\n−3x² ÷ 3x² = −1\nResult: 2x² + 3x − 1\n\nExpansion: (x + 7)(x − 7) is the difference of two squares: x² − 49.\n\nDivision uses the exponent subtraction rule; expansion uses the (a − b)(a + b) = a² − b² pattern.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply two binomials using FOIL and how to expand the square of a binomial using the special patterns with colour coded steps" />',

      diagramPlaceholder:
        'Arc diagram showing the FOIL method applied to (x + 3)(x + 5), with coloured arcs connecting the First, Outer, Inner and Last term pairs down to the final expanded answer x² + 8x + 15',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 175" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="20" y="65" font-size="20" font-weight="700" fill="#0f1f3d">(</text>` +
        `<text x="35" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">x</text>` +
        `<text x="55" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">+</text>` +
        `<text x="75" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="90" y="65" font-size="20" font-weight="700" fill="#0f1f3d">)(</text>` +
        `<text x="155" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">x</text>` +
        `<text x="175" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">+</text>` +
        `<text x="195" y="65" text-anchor="middle" font-size="20" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="205" y="65" font-size="20" font-weight="700" fill="#0f1f3d">)</text>` +
        `<path d="M35,55 Q95,20 155,55" fill="none" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="95" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">F</text>` +
        `<path d="M35,55 Q115,2 195,55" fill="none" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="115" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">O</text>` +
        `<path d="M75,75 Q115,100 155,75" fill="none" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="115" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">I</text>` +
        `<path d="M75,75 Q135,122 195,75" fill="none" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="135" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">L</text>` +
        `<text x="115" y="160" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">= x² + 8x + 15</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered algebraic expressions.' },
    { minScore: 12, message: 'Great work! You have a strong understanding of algebraic expressions. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the study guide and try the questions again.' },
    { minScore: 0, message: 'Keep going — work back through the guide carefully, paying attention to each worked example.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Simplifying — multiplying/dividing monomials with
    //                  more than one variable and multiple exponents
    // Block 2 (3-6):   Expanding a binomial × binomial (general FOIL)
    // Block 3 (7-10):  Square of a binomial and difference of two squares
    // Block 4 (11-13): Substitution with negative/fractional values
    // Block 5 (14-16): Algebraic fractions — finding the LCD
    // Block 6 (17-19): Multi-step simplification / error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Simplifying with more complex exponent laws (Easy)
        { difficulty: 'Easy', question: 'Simplify 3x²y × 4xy².', checkMode: 'auto', correctAnswer: '12x³y³', correctAnswers: ['12x³y³', '12x^3y^3'], answer: '12x³y³', explanation: 'Multiply coefficients: 3 × 4 = 12.\nAdd exponents of x: x² × x = x³.\nAdd exponents of y: y × y² = y³.\nAnswer: 12x³y³' },
        { difficulty: 'Easy', question: 'Simplify (−2a³b²)(5ab³).', checkMode: 'auto', correctAnswer: '-10a⁴b⁵', correctAnswers: ['-10a⁴b⁵', '−10a⁴b⁵', '-10a^4b^5', '−10a^4b^5'], answer: '−10a⁴b⁵', explanation: 'Multiply coefficients: −2 × 5 = −10.\nAdd exponents of a: a³ × a = a⁴.\nAdd exponents of b: b² × b³ = b⁵.\nAnswer: −10a⁴b⁵' },
        { difficulty: 'Medium', question: 'Simplify 24x⁵y³ ÷ 6x²y.', checkMode: 'auto', correctAnswer: '4x³y²', correctAnswers: ['4x³y²', '4x^3y^2'], answer: '4x³y²', explanation: 'Divide coefficients: 24 ÷ 6 = 4.\nSubtract exponents of x: x⁵ ÷ x² = x³.\nSubtract exponents of y: y³ ÷ y = y².\nAnswer: 4x³y²' },

        // Block 2 — Expanding a binomial × binomial (general FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 4)(x + 9).', checkMode: 'auto', correctAnswer: 'x²+13x+36', correctAnswers: ['x²+13x+36', 'x^2+13x+36', 'x² + 13x + 36'], answer: 'x² + 13x + 36', explanation: 'FOIL: First: x·x = x². Outer: x·9 = 9x. Inner: 4·x = 4x. Last: 4·9 = 36.\nCombine: x² + 9x + 4x + 36 = x² + 13x + 36' },
        { difficulty: 'Medium', question: 'Expand (2x − 3)(x + 7).', checkMode: 'auto', correctAnswer: '2x²+11x-21', correctAnswers: ['2x²+11x-21', '2x²+11x−21', '2x^2+11x-21', '2x^2+11x−21'], answer: '2x² + 11x − 21', explanation: 'FOIL: First: 2x·x = 2x². Outer: 2x·7 = 14x. Inner: −3·x = −3x. Last: −3·7 = −21.\nCombine: 2x² + 14x − 3x − 21 = 2x² + 11x − 21' },
        { difficulty: 'Hard', question: 'A rugby field extension is modelled by (3x + 2)(2x − 5) square metres, where x is measured in metres. Expand this expression fully.', checkMode: 'auto', correctAnswer: '6x²-11x-10', correctAnswers: ['6x²-11x-10', '6x²−11x−10', '6x^2-11x-10', '6x^2−11x−10'], answer: '6x² − 11x − 10', explanation: 'FOIL: First: 3x·2x = 6x². Outer: 3x·(−5) = −15x. Inner: 2·2x = 4x. Last: 2·(−5) = −10.\nCombine: 6x² − 15x + 4x − 10 = 6x² − 11x − 10' },
        { difficulty: 'Hard', question: 'Buhle expands (x − 6)(x − 8) and gets x² − 14x − 48. Check her working and correct it if needed.', answer: 'She made a sign error on the last term. FOIL: First: x·x = x². Outer: x·(−8) = −8x. Inner: −6·x = −6x. Last: (−6)(−8) = +48 (two negatives multiply to a positive), not −48.\nCombine: x² − 8x − 6x + 48 = x² − 14x + 48. The correct expansion is x² − 14x + 48.', checkMode: 'self' },

        // Block 3 — Square of a binomial and difference of two squares (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 7)² using the special pattern.', checkMode: 'auto', correctAnswer: 'x²+14x+49', correctAnswers: ['x²+14x+49', 'x^2+14x+49'], answer: 'x² + 14x + 49', explanation: 'Use (a + b)² = a² + 2ab + b² with a = x, b = 7.\nx² + 2(x)(7) + 7² = x² + 14x + 49' },
        { difficulty: 'Medium', question: 'Expand (2x − 5)² using the special pattern.', checkMode: 'auto', correctAnswer: '4x²-20x+25', correctAnswers: ['4x²-20x+25', '4x²−20x+25', '4x^2-20x+25', '4x^2−20x+25'], answer: '4x² − 20x + 25', explanation: 'Use (a − b)² = a² − 2ab + b² with a = 2x, b = 5.\n(2x)² − 2(2x)(5) + 5² = 4x² − 20x + 25' },
        { difficulty: 'Hard', question: 'A square courtyard has sides of length (x − 9) m, next to a second square courtyard with sides (x + 9) m. Expand (x − 9)(x + 9) to find the pattern connecting the two.', checkMode: 'auto', correctAnswer: 'x²-81', correctAnswers: ['x²-81', 'x²−81', 'x^2-81', 'x^2−81'], answer: 'x² − 81', explanation: 'This is the difference of two squares pattern: (a − b)(a + b) = a² − b².\nHere a = x, b = 9, so x² − 9² = x² − 81.' },
        { difficulty: 'Hard', question: 'Kagiso says (x + 4)(x − 4) and (x + 4)² give the same answer because both involve the number 4. Explain why he is wrong, giving both expansions.', answer: 'He is wrong — these use different patterns. (x + 4)(x − 4) is the difference of two squares: x² − 16. (x + 4)² is the square of a binomial: x² + 8x + 16. The two results differ by the middle term 8x, since one expression has a "+4, −4" pair (middle terms cancel) and the other squares the same "+4" twice (middle terms add).', checkMode: 'self' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 2x² − 3x + 1 when x = −3.', checkMode: 'auto', correctAnswer: '28', answer: '28', explanation: 'Substitute x = −3: 2(−3)² − 3(−3) + 1.\n(−3)² = 9, so 2(9) = 18. Also −3(−3) = +9.\n18 + 9 + 1 = 28' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 3(x − 2)² when x = −1.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Substitute x = −1: 3(−1 − 2)² = 3(−3)².\n(−3)² = 9, so 3(9) = 27.' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 4x² − 2y when x = ½ and y = −2.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'Substitute x = ½, y = −2: 4(½)² − 2(−2).\n(½)² = ¼, so 4(¼) = 1. Also −2(−2) = +4.\n1 + 4 = 5' },

        // Block 5 — Algebraic fractions requiring an LCD (Hard)
        { difficulty: 'Hard', question: 'Simplify x/2 + x/5 by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '7x/10', correctAnswers: ['7x/10', '7x÷10'], answer: '7x/10', explanation: 'The LCD of 2 and 5 is 10.\nx/2 = 5x/10 and x/5 = 2x/10.\nAdd: 5x/10 + 2x/10 = 7x/10' },
        { difficulty: 'Hard', question: 'Simplify 2/x + 3/x² by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '(2x+3)/x²', correctAnswers: ['(2x+3)/x²', '(2x+3)/x^2', '2x+3/x²', '2x+3/x^2'], answer: '(2x + 3)/x²', explanation: 'The LCD of x and x² is x².\n2/x = 2x/x² and 3/x² stays as 3/x².\nAdd: 2x/x² + 3/x² = (2x + 3)/x²' },
        { difficulty: 'Hard', question: 'Simplify 5/(2x) − 1/(3x) by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'The LCD of 2x and 3x is 6x.\n5/(2x) = 15/(6x) and 1/(3x) = 2/(6x).\nSubtract: 15/(6x) − 2/(6x) = 13/(6x)' },

        // Block 6 — Multi-step simplification / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Expand and simplify (x + 3)(x + 2) + 2x.', checkMode: 'auto', correctAnswer: 'x²+7x+6', correctAnswers: ['x²+7x+6', 'x^2+7x+6'], answer: 'x² + 7x + 6', explanation: 'Expand first: (x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6.\nAdd the remaining term: x² + 5x + 6 + 2x.\nCombine like terms: 5x + 2x = 7x.\nAnswer: x² + 7x + 6' },
        { difficulty: 'Hard', question: 'A student claims (x + 6)² = x² + 36. Explain the error and give the correct expansion.', answer: 'The student squared each term separately and forgot the middle term. Squaring a binomial always gives a trinomial: (x + 6)² = x² + 2(x)(6) + 6² = x² + 12x + 36, not x² + 36.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evaluate (x + 3)(x − 2) when x = −1, showing whether you expand first or substitute first.', answer: 'Either method works. Substituting directly: (−1 + 3)(−1 − 2) = (2)(−3) = −6.\nExpanding first: (x + 3)(x − 2) = x² + x − 6, then substituting x = −1: 1 − 1 − 6 = −6. Both methods give −6.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding and substituting into algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on binomial products or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on FOIL and the square of a binomial, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Simplifying with more complex exponent laws (Easy)
        { difficulty: 'Easy', question: 'Simplify 4x²y × 3xy³.', checkMode: 'auto', correctAnswer: '12x³y⁴', correctAnswers: ['12x³y⁴', '12x^3y^4'], answer: '12x³y⁴', explanation: 'Multiply coefficients: 4 × 3 = 12.\nAdd exponents of x: x² × x = x³.\nAdd exponents of y: y × y³ = y⁴.\nAnswer: 12x³y⁴' },
        { difficulty: 'Easy', question: 'Simplify (−3a²b⁴)(4a³b).', checkMode: 'auto', correctAnswer: '-12a⁵b⁵', correctAnswers: ['-12a⁵b⁵', '−12a⁵b⁵', '-12a^5b^5', '−12a^5b^5'], answer: '−12a⁵b⁵', explanation: 'Multiply coefficients: −3 × 4 = −12.\nAdd exponents of a: a² × a³ = a⁵.\nAdd exponents of b: b⁴ × b = b⁵.\nAnswer: −12a⁵b⁵' },
        { difficulty: 'Medium', question: 'Simplify 30x⁶y² ÷ 5x³y.', checkMode: 'auto', correctAnswer: '6x³y', correctAnswers: ['6x³y', '6x^3y'], answer: '6x³y', explanation: 'Divide coefficients: 30 ÷ 5 = 6.\nSubtract exponents of x: x⁶ ÷ x³ = x³.\nSubtract exponents of y: y² ÷ y = y.\nAnswer: 6x³y' },

        // Block 2 — Expanding a binomial × binomial (general FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 5)(x + 7).', checkMode: 'auto', correctAnswer: 'x²+12x+35', correctAnswers: ['x²+12x+35', 'x^2+12x+35', 'x² + 12x + 35'], answer: 'x² + 12x + 35', explanation: 'FOIL: First: x·x = x². Outer: x·7 = 7x. Inner: 5·x = 5x. Last: 5·7 = 35.\nCombine: x² + 7x + 5x + 35 = x² + 12x + 35' },
        { difficulty: 'Medium', question: 'Expand (3x − 2)(x + 4).', checkMode: 'auto', correctAnswer: '3x²+10x-8', correctAnswers: ['3x²+10x-8', '3x²+10x−8', '3x^2+10x-8', '3x^2+10x−8'], answer: '3x² + 10x − 8', explanation: 'FOIL: First: 3x·x = 3x². Outer: 3x·4 = 12x. Inner: −2·x = −2x. Last: −2·4 = −8.\nCombine: 3x² + 12x − 2x − 8 = 3x² + 10x − 8' },
        { difficulty: 'Hard', question: 'A vegetable patch extension is modelled by (2x + 5)(3x − 4) square metres, where x is measured in metres. Expand this expression fully.', checkMode: 'auto', correctAnswer: '6x²+7x-20', correctAnswers: ['6x²+7x-20', '6x²+7x−20', '6x^2+7x-20', '6x^2+7x−20'], answer: '6x² + 7x − 20', explanation: 'FOIL: First: 2x·3x = 6x². Outer: 2x·(−4) = −8x. Inner: 5·3x = 15x. Last: 5·(−4) = −20.\nCombine: 6x² − 8x + 15x − 20 = 6x² + 7x − 20' },
        { difficulty: 'Hard', question: 'Sibusiso expands (x − 7)(x − 9) and gets x² − 16x − 63. Check his working and correct it if needed.', answer: 'He made a sign error on the last term. FOIL: First: x·x = x². Outer: x·(−9) = −9x. Inner: −7·x = −7x. Last: (−7)(−9) = +63 (two negatives multiply to a positive), not −63.\nCombine: x² − 9x − 7x + 63 = x² − 16x + 63. The correct expansion is x² − 16x + 63.', checkMode: 'self' },

        // Block 3 — Square of a binomial and difference of two squares (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 8)² using the special pattern.', checkMode: 'auto', correctAnswer: 'x²+16x+64', correctAnswers: ['x²+16x+64', 'x^2+16x+64'], answer: 'x² + 16x + 64', explanation: 'Use (a + b)² = a² + 2ab + b² with a = x, b = 8.\nx² + 2(x)(8) + 8² = x² + 16x + 64' },
        { difficulty: 'Medium', question: 'Expand (3x − 4)² using the special pattern.', checkMode: 'auto', correctAnswer: '9x²-24x+16', correctAnswers: ['9x²-24x+16', '9x²−24x+16', '9x^2-24x+16', '9x^2−24x+16'], answer: '9x² − 24x + 16', explanation: 'Use (a − b)² = a² − 2ab + b² with a = 3x, b = 4.\n(3x)² − 2(3x)(4) + 4² = 9x² − 24x + 16. The last term stays positive since (−4)² = +16.' },
        { difficulty: 'Hard', question: 'A square field has sides of length (x − 10) m, next to a second square field with sides (x + 10) m. Expand (x − 10)(x + 10) to find the pattern connecting the two.', checkMode: 'auto', correctAnswer: 'x²-100', correctAnswers: ['x²-100', 'x²−100', 'x^2-100', 'x^2−100'], answer: 'x² − 100', explanation: 'This is the difference of two squares pattern: (a − b)(a + b) = a² − b².\nHere a = x, b = 10, so x² − 10² = x² − 100.' },
        { difficulty: 'Hard', question: 'Naledi says (x + 5)(x − 5) and (x + 5)² give the same answer because both involve the number 5. Explain why she is wrong, giving both expansions.', answer: 'She is wrong — these use different patterns. (x + 5)(x − 5) is the difference of two squares: x² − 25. (x + 5)² is the square of a binomial: x² + 10x + 25. The two results differ by the middle term 10x, since one expression has a "+5, −5" pair (middle terms cancel) and the other squares the same "+5" twice (middle terms add).', checkMode: 'self' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 2x² − 5x + 3 when x = −4.', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'Substitute x = −4: 2(−4)² − 5(−4) + 3.\n(−4)² = 16, so 2(16) = 32. Also −5(−4) = +20.\n32 + 20 + 3 = 55' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 2(x − 3)² when x = −2.', checkMode: 'auto', correctAnswer: '50', answer: '50', explanation: 'Substitute x = −2: 2(−2 − 3)² = 2(−5)².\n(−5)² = 25, so 2(25) = 50.' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 9x² − 3y when x = ⅓ and y = −3.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'Substitute x = ⅓, y = −3: 9(⅓)² − 3(−3).\n(⅓)² = 1/9, so 9(1/9) = 1. Also −3(−3) = +9.\n1 + 9 = 10' },

        // Block 5 — Algebraic fractions requiring an LCD (Hard)
        { difficulty: 'Hard', question: 'Simplify x/3 + x/4 by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '7x/12', correctAnswers: ['7x/12', '7x÷12'], answer: '7x/12', explanation: 'The LCD of 3 and 4 is 12.\nx/3 = 4x/12 and x/4 = 3x/12.\nAdd: 4x/12 + 3x/12 = 7x/12' },
        { difficulty: 'Hard', question: 'Simplify 5/x + 2/x² by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '(5x+2)/x²', correctAnswers: ['(5x+2)/x²', '(5x+2)/x^2', '5x+2/x²', '5x+2/x^2'], answer: '(5x + 2)/x²', explanation: 'The LCD of x and x² is x².\n5/x = 5x/x² and 2/x² stays as 2/x².\nAdd: 5x/x² + 2/x² = (5x + 2)/x²' },
        { difficulty: 'Hard', question: 'Simplify 3/(2x) − 1/(4x) by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '5/(4x)', correctAnswers: ['5/(4x)', '5/4x'], answer: '5/(4x)', explanation: 'The LCD of 2x and 4x is 4x.\n3/(2x) = 6/(4x) and 1/(4x) stays as 1/(4x).\nSubtract: 6/(4x) − 1/(4x) = 5/(4x)' },

        // Block 6 — Multi-step simplification / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Expand and simplify (x + 4)(x + 1) + 3x.', checkMode: 'auto', correctAnswer: 'x²+8x+4', correctAnswers: ['x²+8x+4', 'x^2+8x+4'], answer: 'x² + 8x + 4', explanation: 'Expand first: (x + 4)(x + 1) = x² + x + 4x + 4 = x² + 5x + 4.\nAdd the remaining term: x² + 5x + 4 + 3x.\nCombine like terms: 5x + 3x = 8x.\nAnswer: x² + 8x + 4' },
        { difficulty: 'Hard', question: 'A student claims (x − 5)² = x² − 25. Explain the error and give the correct expansion.', answer: 'The student squared each term separately and forgot the middle term. Squaring a binomial always gives a trinomial: (x − 5)² = x² − 2(x)(5) + 5² = x² − 10x + 25, not x² − 25.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evaluate (x + 5)(x − 3) when x = −2, showing whether you expand first or substitute first.', answer: 'Either method works. Substituting directly: (−2 + 5)(−2 − 3) = (3)(−5) = −15.\nExpanding first: (x + 5)(x − 3) = x² + 2x − 15, then substituting x = −2: 4 − 4 − 15 = −15. Both methods give −15.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding and substituting into algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on binomial products or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on FOIL and the square of a binomial, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Simplifying with more complex exponent laws (Easy)
        { difficulty: 'Easy', question: 'Simplify 5x²y × 2xy³.', checkMode: 'auto', correctAnswer: '10x³y⁴', correctAnswers: ['10x³y⁴', '10x^3y^4'], answer: '10x³y⁴', explanation: 'Multiply coefficients: 5 × 2 = 10.\nAdd exponents of x: x² × x = x³.\nAdd exponents of y: y × y³ = y⁴.\nAnswer: 10x³y⁴' },
        { difficulty: 'Easy', question: 'Simplify (−4a³b)(3a²b⁴).', checkMode: 'auto', correctAnswer: '-12a⁵b⁵', correctAnswers: ['-12a⁵b⁵', '−12a⁵b⁵', '-12a^5b^5', '−12a^5b^5'], answer: '−12a⁵b⁵', explanation: 'Multiply coefficients: −4 × 3 = −12.\nAdd exponents of a: a³ × a² = a⁵.\nAdd exponents of b: b × b⁴ = b⁵.\nAnswer: −12a⁵b⁵' },
        { difficulty: 'Medium', question: 'Simplify 36x⁵y⁴ ÷ 9x²y².', checkMode: 'auto', correctAnswer: '4x³y²', correctAnswers: ['4x³y²', '4x^3y^2'], answer: '4x³y²', explanation: 'Divide coefficients: 36 ÷ 9 = 4.\nSubtract exponents of x: x⁵ ÷ x² = x³.\nSubtract exponents of y: y⁴ ÷ y² = y².\nAnswer: 4x³y²' },

        // Block 2 — Expanding a binomial × binomial (general FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 6)(x + 8).', checkMode: 'auto', correctAnswer: 'x²+14x+48', correctAnswers: ['x²+14x+48', 'x^2+14x+48', 'x² + 14x + 48'], answer: 'x² + 14x + 48', explanation: 'FOIL: First: x·x = x². Outer: x·8 = 8x. Inner: 6·x = 6x. Last: 6·8 = 48.\nCombine: x² + 8x + 6x + 48 = x² + 14x + 48' },
        { difficulty: 'Medium', question: 'Expand (4x − 1)(x + 5).', checkMode: 'auto', correctAnswer: '4x²+19x-5', correctAnswers: ['4x²+19x-5', '4x²+19x−5', '4x^2+19x-5', '4x^2+19x−5'], answer: '4x² + 19x − 5', explanation: 'FOIL: First: 4x·x = 4x². Outer: 4x·5 = 20x. Inner: −1·x = −x. Last: −1·5 = −5.\nCombine: 4x² + 20x − x − 5 = 4x² + 19x − 5' },
        { difficulty: 'Hard', question: 'A community hall extension is modelled by (2x + 3)(3x − 7) square metres, where x is measured in metres. Expand this expression fully.', checkMode: 'auto', correctAnswer: '6x²-5x-21', correctAnswers: ['6x²-5x-21', '6x²−5x−21', '6x^2-5x-21', '6x^2−5x−21'], answer: '6x² − 5x − 21', explanation: 'FOIL: First: 2x·3x = 6x². Outer: 2x·(−7) = −14x. Inner: 3·3x = 9x. Last: 3·(−7) = −21.\nCombine: 6x² − 14x + 9x − 21 = 6x² − 5x − 21' },
        { difficulty: 'Hard', question: 'Zanele expands (x − 5)(x − 11) and gets x² − 16x − 55. Check her working and correct it if needed.', answer: 'She made a sign error on the last term. FOIL: First: x·x = x². Outer: x·(−11) = −11x. Inner: −5·x = −5x. Last: (−5)(−11) = +55 (two negatives multiply to a positive), not −55.\nCombine: x² − 11x − 5x + 55 = x² − 16x + 55. The correct expansion is x² − 16x + 55.', checkMode: 'self' },

        // Block 3 — Square of a binomial and difference of two squares (Medium/Hard)
        { difficulty: 'Medium', question: 'Expand (x + 9)² using the special pattern.', checkMode: 'auto', correctAnswer: 'x²+18x+81', correctAnswers: ['x²+18x+81', 'x^2+18x+81'], answer: 'x² + 18x + 81', explanation: 'Use (a + b)² = a² + 2ab + b² with a = x, b = 9.\nx² + 2(x)(9) + 9² = x² + 18x + 81' },
        { difficulty: 'Medium', question: 'Expand (2x − 7)² using the special pattern.', checkMode: 'auto', correctAnswer: '4x²-28x+49', correctAnswers: ['4x²-28x+49', '4x²−28x+49', '4x^2-28x+49', '4x^2−28x+49'], answer: '4x² − 28x + 49', explanation: 'Use (a − b)² = a² − 2ab + b² with a = 2x, b = 7.\n(2x)² − 2(2x)(7) + 7² = 4x² − 28x + 49' },
        { difficulty: 'Hard', question: 'A square plot has sides of length (x − 6) m, next to a second square plot with sides (x + 6) m. Expand (x − 6)(x + 6) to find the pattern connecting the two.', checkMode: 'auto', correctAnswer: 'x²-36', correctAnswers: ['x²-36', 'x²−36', 'x^2-36', 'x^2−36'], answer: 'x² − 36', explanation: 'This is the difference of two squares pattern: (a − b)(a + b) = a² − b².\nHere a = x, b = 6, so x² − 6² = x² − 36.' },
        { difficulty: 'Hard', question: 'Bongani says (x + 3)(x − 3) and (x + 3)² give the same answer because both involve the number 3. Explain why he is wrong, giving both expansions.', answer: 'He is wrong — these use different patterns. (x + 3)(x − 3) is the difference of two squares: x² − 9. (x + 3)² is the square of a binomial: x² + 6x + 9. The two results differ by the middle term 6x, since one expression has a "+3, −3" pair (middle terms cancel) and the other squares the same "+3" twice (middle terms add).', checkMode: 'self' },

        // Block 4 — Substitution with negative/fractional values (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evaluate 3x² − 4x + 2 when x = −2.', checkMode: 'auto', correctAnswer: '22', answer: '22', explanation: 'Substitute x = −2: 3(−2)² − 4(−2) + 2.\n(−2)² = 4, so 3(4) = 12. Also −4(−2) = +8.\n12 + 8 + 2 = 22' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 4(x − 1)² when x = −1.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Substitute x = −1: 4(−1 − 1)² = 4(−2)².\n(−2)² = 4, so 4(4) = 16.' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 4x² − 3y when x = ½ and y = −3.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'Substitute x = ½, y = −3: 4(½)² − 3(−3).\n(½)² = ¼, so 4(¼) = 1. Also −3(−3) = +9.\n1 + 9 = 10' },

        // Block 5 — Algebraic fractions requiring an LCD (Hard)
        { difficulty: 'Hard', question: 'Simplify x/2 + x/3 by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '5x/6', correctAnswers: ['5x/6', '5x÷6'], answer: '5x/6', explanation: 'The LCD of 2 and 3 is 6.\nx/2 = 3x/6 and x/3 = 2x/6.\nAdd: 3x/6 + 2x/6 = 5x/6' },
        { difficulty: 'Hard', question: 'Simplify 3/x + 4/x² by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '(3x+4)/x²', correctAnswers: ['(3x+4)/x²', '(3x+4)/x^2', '3x+4/x²', '3x+4/x^2'], answer: '(3x + 4)/x²', explanation: 'The LCD of x and x² is x².\n3/x = 3x/x² and 4/x² stays as 4/x².\nAdd: 3x/x² + 4/x² = (3x + 4)/x²' },
        { difficulty: 'Hard', question: 'Simplify 7/(3x) − 1/(6x) by writing both fractions with a common denominator.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'The LCD of 3x and 6x is 6x.\n7/(3x) = 14/(6x) and 1/(6x) stays as 1/(6x).\nSubtract: 14/(6x) − 1/(6x) = 13/(6x)' },

        // Block 6 — Multi-step simplification / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Expand and simplify (x + 2)(x + 5) + 4x.', checkMode: 'auto', correctAnswer: 'x²+11x+10', correctAnswers: ['x²+11x+10', 'x^2+11x+10'], answer: 'x² + 11x + 10', explanation: 'Expand first: (x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10.\nAdd the remaining term: x² + 7x + 10 + 4x.\nCombine like terms: 7x + 4x = 11x.\nAnswer: x² + 11x + 10' },
        { difficulty: 'Hard', question: 'A student claims (x − 4)² = x² − 16. Explain the error and give the correct expansion.', answer: 'The student squared each term separately and forgot the middle term. Squaring a binomial always gives a trinomial: (x − 4)² = x² − 2(x)(4) + 4² = x² − 8x + 16, not x² − 16.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evaluate (x + 4)(x − 1) when x = −3, showing whether you expand first or substitute first.', answer: 'Either method works. Substituting directly: (−3 + 4)(−3 − 1) = (1)(−4) = −4.\nExpanding first: (x + 4)(x − 1) = x² + 3x − 4, then substituting x = −3: 9 − 9 − 4 = −4. Both methods give −4.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered simplifying, expanding and substituting into algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on binomial products or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on FOIL and the square of a binomial, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
