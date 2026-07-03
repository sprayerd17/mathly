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
        '<DiagramPlaceholder label="Diagram showing the distributive law applied to 3x(2x²+5x−4) with arrows from the distributed term in blue to each multiplication in orange and the final expression in green" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing (15x³+10x²−5x)÷5x split into three separate fractions with the divisor in blue each division step in orange and the final expression in green" />',
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
        '<DiagramPlaceholder label="Diagram showing FOIL method for (x+3)(x+5) with first term in blue outer and inner terms in orange last term in green and final answer in red alongside the square of a binomial pattern" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered algebraic expressions.' },
    { minScore: 12, message: 'Great work! You have a strong understanding of algebraic expressions. Review any missed questions and you will have it perfect.' },
    { minScore: 8, message: 'Good effort — review the study guide and try the questions again.' },
    { minScore: 0, message: 'Keep going — work back through the guide carefully, paying attention to each worked example.' },
  ],
}
