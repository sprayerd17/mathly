import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (factorising roles) ──────────────────────────────────────
// common factor / first square / numbers found → blue   (#2563eb)
// remaining expression / factorised form       → green  (#16a34a)
// second square / common factor in trinomials  → orange (#ea580c)
// step labels / checks                         → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Factorising Algebraic Expressions',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FACTORISING USING COMMON FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'common-factors',
      title: 'Factorising Using Common Factors',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Factorising means writing an expression as a <strong>product of its factors</strong> — the reverse of expanding. We find the <strong>highest common factor (HCF)</strong> of all terms and write it outside brackets, with the remaining parts inside.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('common factor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('remaining expression')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to find and factor out the HCF</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${bl('HCF')} of the numerical coefficients of all terms.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${bl('HCF')} of any variable parts — the lowest power of each variable that appears in every term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('HCF')} outside the brackets and divide each term by it to get the ${gr('remaining expression')} inside the brackets.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Check your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always expand your answer to verify it matches the original expression. If ${bl('HCF')} × ${gr('bracket')} = original expression, your factorisation is correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise 6x² + 9x.',
          answer: `${bl('3x')}(${gr('2x + 3')})`,
          steps: [
            `Find the ${bl('HCF')} of 6x² and 9x. HCF of 6 and 9 is 3; HCF of x² and x is x. So ${bl('HCF = 3x')}.`,
            `Factor out ${bl('3x')}: divide each term by ${bl('3x')} to get the ${gr('remaining expression')}: 6x² ÷ 3x = ${gr('2x')} and 9x ÷ 3x = ${gr('3')}.`,
            `Write the factorised form: ${bl('3x')}(${gr('2x + 3')}).`,
            `<strong>Check:</strong> ${bl('3x')} × ${gr('2x')} = 6x² and ${bl('3x')} × ${gr('3')} = 9x → 6x² + 9x ✓`,
          ],
        },
        {
          question: 'Factorise 12x³ − 8x² + 4x.',
          answer: `${bl('4x')}(${gr('3x² − 2x + 1')})`,
          steps: [
            `Find the ${bl('HCF')} of 12x³, 8x², and 4x. HCF of 12, 8 and 4 is 4; HCF of x³, x² and x is x. So ${bl('HCF = 4x')}.`,
            `Factor out ${bl('4x')}: 12x³ ÷ 4x = ${gr('3x²')}, 8x² ÷ 4x = ${gr('2x')}, 4x ÷ 4x = ${gr('1')}.`,
            `Write the factorised form: ${bl('4x')}(${gr('3x² − 2x + 1')}).`,
            `<strong>Check:</strong> ${bl('4x')} × ${gr('3x²')} = 12x³, ${bl('4x')} × ${gr('−2x')} = −8x², ${bl('4x')} × ${gr('1')} = 4x → 12x³ − 8x² + 4x ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the HCF of algebraic terms and factor it out of an expression" />',

      diagramPlaceholder:
        'Diagram showing 6x² and 9x converging to their HCF 3x, which is factored out to give 3x(2x + 3)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 175" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="20" width="70" height="32" rx="6" fill="rgba(55,65,81,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="45" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#374151">6x²</text>` +
        `<rect x="10" y="122" width="70" height="32" rx="6" fill="rgba(55,65,81,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="45" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#374151">9x</text>` +
        `<line x1="80" y1="36" x2="138" y2="78" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="140,80 130,77 133,86" fill="#0f1f3d"/>` +
        `<line x1="80" y1="138" x2="138" y2="97" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="140,95 130,94 135,102" fill="#0f1f3d"/>` +
        `<text x="170" y="60" text-anchor="middle" font-size="9" fill="#6b7280">HCF</text>` +
        `<rect x="140" y="68" width="60" height="38" rx="6" fill="rgba(37,99,235,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="170" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">3x</text>` +
        `<line x1="200" y1="87" x2="233" y2="87" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="235,87 226,83 226,91" fill="#0f1f3d"/>` +
        `<rect x="235" y="62" width="85" height="50" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="277" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">3x(2x + 3)</text>` +
        `<text x="160" y="168" text-anchor="middle" font-size="10" fill="#6b7280">The HCF is factored out, leaving the rest in brackets</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FACTORISING THE DIFFERENCE OF TWO SQUARES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'difference-of-two-squares',
      title: 'Factorising the Difference of Two Squares',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>difference of two squares</strong> pattern states that a² − b² = (a − b)(a + b). We recognise this pattern when an expression is a <strong>subtraction of two perfect squares</strong>, and factorise accordingly.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first square (a²)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second square (b²)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('factorised form')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The pattern</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('a²')} − ${or('b²')} = ${gr('(a − b)(a + b)')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to recognise the pattern</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">The expression must be a <strong>subtraction</strong> (difference), not addition.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Both terms must be <strong>perfect squares</strong> — a number or expression that results from squaring something.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Find the square root of each term (a and b), then write the ${gr('factorised form')} (a − b)(a + b).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Important: addition cannot be factorised this way</p>` +
        `<p style="margin:0;color:#991b1b;">The difference of two squares only works for <strong>subtraction</strong>. An expression like x² + 16 cannot be factorised using this pattern because it is an addition.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise x² − 25.',
          answer: `${gr('(x − 5)(x + 5)')}`,
          steps: [
            `Recognise the pattern: ${bl('x²')} − ${or('25')} is a difference of two squares since ${bl('x²')} = (x)² and ${or('25')} = (5)².`,
            `Identify a = x and b = 5.`,
            `Apply the pattern a² − b² = (a − b)(a + b): ${gr('(x − 5)(x + 5)')}.`,
            `<strong>Check:</strong> (x − 5)(x + 5) = x² + 5x − 5x − 25 = x² − 25 ✓`,
          ],
        },
        {
          question: 'Sipho factorises 9x² − 16 and gets (3x − 4)(3x + 4). Check his answer.',
          answer: `Sipho is correct — ${gr('(3x − 4)(3x + 4)')}`,
          steps: [
            `Check whether 9x² and 16 are perfect squares: ${bl('9x²')} = (3x)² and ${or('16')} = (4)². Both are perfect squares and the expression is a subtraction — the pattern applies.`,
            `Applying a² − b² = (a − b)(a + b) with a = 3x and b = 4 gives ${gr('(3x − 4)(3x + 4)')}.`,
            `Sipho is <strong>correct</strong>. ✓`,
            `<strong>Verify by expanding:</strong> (3x − 4)(3x + 4) = 9x² + 12x − 12x − 16 = 9x² − 16 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to recognise and factorise a difference of two squares using the pattern a squared minus b squared equals (a minus b)(a plus b)" />',

      diagramPlaceholder:
        'Geometric diagram showing a square of side a with a smaller square of side b removed, rearranged into a rectangle of width (a + b) and height (a − b), illustrating a² − b² = (a − b)(a + b)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 190" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<polygon points="20,20 85,20 85,55 120,55 120,120 20,120" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="10" y="74" font-size="13" font-weight="700" fill="#2563eb">a</text>` +
        `<text x="68" y="138" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">a</text>` +
        `<text x="102" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">b</text>` +
        `<text x="130" y="41" font-size="12" font-weight="700" fill="#ea580c">b</text>` +
        `<line x1="128" y1="70" x2="178" y2="70" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="184,70 176,65 176,75" fill="#0f1f3d"/>` +
        `<text x="156" y="58" text-anchor="middle" font-size="9" fill="#6b7280">rearrange</text>` +
        `<rect x="192" y="42" width="125" height="58" rx="4" fill="rgba(22,163,74,0.15)" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="254" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(a + b)</text>` +
        `<text x="254" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(a − b)</text>` +
        `<text x="170" y="180" text-anchor="middle" font-size="14" font-weight="700">` +
        `<tspan fill="#2563eb">a²</tspan><tspan fill="#0f1f3d"> − </tspan><tspan fill="#ea580c">b²</tspan><tspan fill="#0f1f3d"> = </tspan><tspan fill="#16a34a">(a − b)(a + b)</tspan>` +
        `</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING TRINOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trinomials',
      title: 'Factorising Trinomials',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">We factorise trinomials of the form <strong>x² + bx + c</strong> by finding two numbers that multiply to give <strong>c</strong> and add to give <strong>b</strong>. For trinomials of the form <strong>ax² + bx + c</strong> where a is a common factor, we factor out a first, then factorise the remaining trinomial.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numbers found')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('factorised brackets')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common factor')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Factorising x² + bx + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find two ${bl('numbers')} that <strong>multiply</strong> to give c (the constant term) and <strong>add</strong> to give b (the coefficient of x).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${gr('factorised form')}: (x + first number)(x + second number).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check</strong> by expanding your answer — it should equal the original trinomial.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">When a ≠ 1 but a is a common factor</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;font-size:14px;">If every term shares a ${or('common factor')} a, <strong>factor it out first</strong>: write ${or('a')}(x² + …). Then factorise the trinomial inside the brackets as normal.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sign rules for the two numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">If c is positive and b is positive → both numbers are <strong>positive</strong>.<br>If c is positive and b is negative → both numbers are <strong>negative</strong>.<br>If c is negative → one number is positive and one is <strong>negative</strong>; the larger absolute value has the same sign as b.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise x² + 7x + 12.',
          answer: `${gr('(x + 3)(x + 4)')}`,
          steps: [
            `Find two ${bl('numbers')} that multiply to 12 and add to 7.`,
            `List factor pairs of 12: 1 × 12, 2 × 6, ${bl('3 × 4')}. Check sums: 3 + 4 = ${bl('7')} ✓`,
            `The two numbers are ${bl('3')} and ${bl('4')}.`,
            `Write the ${gr('factorised form')}: ${gr('(x + 3)(x + 4)')}.`,
            `<strong>Check:</strong> (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓`,
          ],
        },
        {
          question: 'Factorise x² − 2x − 15.',
          answer: `${gr('(x − 5)(x + 3)')}`,
          steps: [
            `Find two ${bl('numbers')} that multiply to −15 and add to −2.`,
            `Since the product is negative, the numbers have opposite signs. Try ${bl('−5 and 3')}: (−5) × 3 = −15 ✓ and (−5) + 3 = ${bl('−2')} ✓`,
            `The two numbers are ${bl('−5')} and ${bl('3')}.`,
            `Write the ${gr('factorised form')}: ${gr('(x − 5)(x + 3)')}.`,
            `<strong>Check:</strong> (x − 5)(x + 3) = x² + 3x − 5x − 15 = x² − 2x − 15 ✓`,
          ],
        },
        {
          question: 'Factorise 2x² + 10x + 12.',
          answer: `${or('2')}${gr('(x + 2)(x + 3)')}`,
          steps: [
            `All three terms are divisible by ${or('2')} — factor out the ${or('common factor')} first: ${or('2')}(x² + 5x + 6).`,
            `Now factorise the trinomial x² + 5x + 6: find two ${bl('numbers')} that multiply to 6 and add to 5.`,
            `Try ${bl('2 and 3')}: 2 × 3 = 6 ✓ and 2 + 3 = ${bl('5')} ✓`,
            `Write the ${gr('factorised trinomial')}: ${gr('(x + 2)(x + 3)')}.`,
            `Final answer: ${or('2')}${gr('(x + 2)(x + 3)')}.`,
            `<strong>Check:</strong> 2(x + 2)(x + 3) = 2(x² + 5x + 6) = 2x² + 10x + 12 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to factorise trinomials of the form x squared plus bx plus c by finding two numbers that multiply to c and add to b" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — HCF common factor ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Factorise 8x² + 12x.',
      answer: '4x(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '4x(2x+3)',
      correctAnswers: ['4x(2x+3)', '4x(2x + 3)'],
      explanation: 'HCF of 8x² and 12x is 4x.\n8x² ÷ 4x = 2x and 12x ÷ 4x = 3.\nFactorised: 4x(2x + 3) ✓',
    },

    // ── Q2 Medium — three-term common factor ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise 15x³ − 10x² + 5x.',
      answer: '5x(3x² − 2x + 1)',
      checkMode: 'auto',
      correctAnswer: '5x(3x²-2x+1)',
      correctAnswers: ['5x(3x²-2x+1)', '5x(3x² - 2x + 1)', '5x(3x²−2x+1)', '5x(3x² − 2x + 1)'],
      explanation: 'HCF of 15x³, 10x² and 5x is 5x.\n15x³ ÷ 5x = 3x², 10x² ÷ 5x = 2x, 5x ÷ 5x = 1.\nFactorised: 5x(3x² − 2x + 1) ✓',
    },

    // ── Q3 Hard — check a learner's common factor answer ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho factorises 6x² − 9x and gets 3(2x − 3). Check his answer.',
      answer: 'He missed an x — the correct factorisation is 3x(2x − 3), since 3x is the full common factor, not just 3.',
      checkMode: 'self',
    },

    // ── Q4 Easy — difference of two squares ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Factorise x² − 49.',
      answer: '(x − 7)(x + 7)',
      checkMode: 'auto',
      correctAnswer: '(x-7)(x+7)',
      correctAnswers: ['(x-7)(x+7)', '(x − 7)(x + 7)', '(x+7)(x-7)', '(x + 7)(x − 7)'],
      explanation: 'Recognise x² − 49 = x² − 7².\nDifference of squares: a² − b² = (a − b)(a + b).\nFactorised: (x − 7)(x + 7) ✓',
    },

    // ── Q5 Medium — difference of two squares with coefficient ───────────────
    {
      difficulty: 'Medium',
      question: 'Factorise 4x² − 9.',
      answer: '(2x − 3)(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '(2x-3)(2x+3)',
      correctAnswers: ['(2x-3)(2x+3)', '(2x − 3)(2x + 3)', '(2x+3)(2x-3)', '(2x + 3)(2x − 3)'],
      explanation: '4x² = (2x)² and 9 = (3)².\nDifference of squares: (2x − 3)(2x + 3) ✓',
    },

    // ── Q6 Hard — check a learner's difference of squares answer ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato factorises 16x² − 25y² and gets (4x − 5y)(4x + 5y). Check her answer.',
      answer: 'She is correct — 16x² = (4x)² and 25y² = (5y)², so the difference of squares gives (4x − 5y)(4x + 5y).',
      checkMode: 'self',
    },

    // ── Q7 Easy — trinomial with positive terms ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Factorise x² + 9x + 20.',
      answer: '(x + 4)(x + 5)',
      checkMode: 'auto',
      correctAnswer: '(x+4)(x+5)',
      correctAnswers: ['(x+4)(x+5)', '(x + 4)(x + 5)', '(x+5)(x+4)', '(x + 5)(x + 4)'],
      explanation: 'Find two numbers multiplying to 20 and adding to 9: 4 and 5.\nFactorised: (x + 4)(x + 5) ✓',
    },

    // ── Q8 Medium — trinomial with negative constant ──────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise x² − 3x − 10.',
      answer: '(x − 5)(x + 2)',
      checkMode: 'auto',
      correctAnswer: '(x-5)(x+2)',
      correctAnswers: ['(x-5)(x+2)', '(x − 5)(x + 2)', '(x+2)(x-5)', '(x + 2)(x − 5)'],
      explanation: 'Find two numbers multiplying to −10 and adding to −3: −5 and 2.\nFactorised: (x − 5)(x + 2) ✓',
    },

    // ── Q9 Hard — check a learner's trinomial answer ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo factorises x² + x − 12 and gets (x + 4)(x − 3). Check his answer.',
      answer: 'He is correct — 4 and −3 multiply to −12 and add to 1.',
      checkMode: 'self',
    },

    // ── Q10 Medium — trinomial with common factor ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise 3x² + 15x + 18.',
      answer: '3(x + 2)(x + 3)',
      checkMode: 'auto',
      correctAnswer: '3(x+2)(x+3)',
      correctAnswers: ['3(x+2)(x+3)', '3(x + 2)(x + 3)', '3(x+3)(x+2)', '3(x + 3)(x + 2)'],
      explanation: 'Factor out 3: 3(x² + 5x + 6).\nFind two numbers multiplying to 6 and adding to 5: 2 and 3.\nFactorised: 3(x + 2)(x + 3) ✓',
    },

    // ── Q11 Hard — full factorisation with common factor shown ────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise 2x² − 8x − 10 fully, showing the common factor step.',
      answer: 'Factor out 2: 2(x² − 4x − 5). Factorise trinomial: 2(x − 5)(x + 1).',
      checkMode: 'self',
    },

    // ── Q12 Medium — difference of two squares (larger square) ───────────────
    {
      difficulty: 'Medium',
      question: 'Factorise x² − 64.',
      answer: '(x − 8)(x + 8)',
      checkMode: 'auto',
      correctAnswer: '(x-8)(x+8)',
      correctAnswers: ['(x-8)(x+8)', '(x − 8)(x + 8)', '(x+8)(x-8)', '(x + 8)(x − 8)'],
      explanation: 'Recognise x² − 64 = x² − 8².\nDifference of squares: (x − 8)(x + 8) ✓',
    },

    // ── Q13 Hard — addition cannot use difference of squares ──────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says x² + 16 can be factorised using the difference of two squares. Is she correct? Explain.',
      answer: 'No — the difference of two squares requires subtraction (a² − b²), but x² + 16 is an addition, so it cannot be factorised this way.',
      checkMode: 'self',
    },

    // ── Q14 Hard — combined common factor and difference of squares ───────────
    {
      difficulty: 'Hard',
      question: 'Factorise 5x² − 20 fully, identifying both the common factor and the difference of squares pattern used.',
      answer: 'Factor out 5: 5(x² − 4). Recognise difference of squares: 5(x − 2)(x + 2).',
      checkMode: 'self',
    },

    // ── Q15 Hard — factorise and verify by expanding ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise x² − 5x − 24 and verify your answer by expanding it back.',
      answer: 'Find numbers multiplying to −24 and adding to −5: −8 and 3. Factorised: (x − 8)(x + 3). Verify by expanding: x² + 3x − 8x − 24 = x² − 5x − 24 ✓',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered factorising algebraic expressions.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of factorising. Review any missed questions and aim for full marks.' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-1):   Common factor — two-term monomial HCF
    // Block 2 (2-3):   Common factor — three-term (incl. cubic)
    // Block 3 (4-6):   Difference of two squares — basic (x² − n²)
    // Block 4 (7-9):   Difference of two squares — with coefficients
    // Block 5 (10-12): Trinomial x² + bx + c — positive/simple constant
    // Block 6 (13-15): Trinomial x² + bx + c — negative constant
    // Block 7 (16-19): Trinomial with common factor + error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Common factor, two-term (Easy)
        { difficulty: 'Easy', question: 'Factorise 10x² + 15x.', checkMode: 'auto', correctAnswer: '5x(2x+3)', correctAnswers: ['5x(2x+3)', '5x(2x + 3)'], answer: '5x(2x + 3)', explanation: 'HCF of 10x² and 15x is 5x.\n10x² ÷ 5x = 2x and 15x ÷ 5x = 3.\nFactorised: 5x(2x + 3) ✓' },
        { difficulty: 'Easy', question: 'Factorise 6x³ − 18x².', checkMode: 'auto', correctAnswer: '6x²(x-3)', correctAnswers: ['6x²(x-3)', '6x²(x - 3)', '6x^2(x-3)', '6x^2(x - 3)'], answer: '6x²(x − 3)', explanation: 'HCF of 6x³ and 18x² is 6x².\n6x³ ÷ 6x² = x and 18x² ÷ 6x² = 3.\nFactorised: 6x²(x − 3) ✓' },

        // Block 2 — Common factor, three-term / cubic (Easy-Medium)
        { difficulty: 'Medium', question: 'Factorise 4x³ + 8x² − 12x.', checkMode: 'auto', correctAnswer: '4x(x²+2x-3)', correctAnswers: ['4x(x²+2x-3)', '4x(x² + 2x - 3)', '4x(x²+2x−3)', '4x(x² + 2x − 3)', '4x(x^2+2x-3)', '4x(x^2 + 2x - 3)'], answer: '4x(x² + 2x − 3)', explanation: 'HCF of 4x³, 8x² and 12x is 4x.\n4x³ ÷ 4x = x², 8x² ÷ 4x = 2x, 12x ÷ 4x = 3.\nFactorised: 4x(x² + 2x − 3) ✓' },
        { difficulty: 'Medium', question: 'Factorise 9a²b + 6ab².', checkMode: 'auto', correctAnswer: '3ab(3a+2b)', correctAnswers: ['3ab(3a+2b)', '3ab(3a + 2b)'], answer: '3ab(3a + 2b)', explanation: 'HCF of 9a²b and 6ab² is 3ab.\n9a²b ÷ 3ab = 3a and 6ab² ÷ 3ab = 2b.\nFactorised: 3ab(3a + 2b) ✓' },

        // Block 3 — Difference of two squares, basic (Medium)
        { difficulty: 'Medium', question: 'Factorise x² − 81.', checkMode: 'auto', correctAnswer: '(x-9)(x+9)', correctAnswers: ['(x-9)(x+9)', '(x − 9)(x + 9)', '(x+9)(x-9)', '(x + 9)(x − 9)'], answer: '(x − 9)(x + 9)', explanation: 'Recognise x² − 81 = x² − 9².\nDifference of squares: (x − 9)(x + 9) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 121.', checkMode: 'auto', correctAnswer: '(x-11)(x+11)', correctAnswers: ['(x-11)(x+11)', '(x − 11)(x + 11)', '(x+11)(x-11)', '(x + 11)(x − 11)'], answer: '(x − 11)(x + 11)', explanation: 'Recognise x² − 121 = x² − 11².\nDifference of squares: (x − 11)(x + 11) ✓' },
        { difficulty: 'Medium', question: 'Factorise 16x² − 1.', checkMode: 'auto', correctAnswer: '(4x-1)(4x+1)', correctAnswers: ['(4x-1)(4x+1)', '(4x − 1)(4x + 1)', '(4x+1)(4x-1)', '(4x + 1)(4x − 1)'], answer: '(4x − 1)(4x + 1)', explanation: '16x² = (4x)² and 1 = (1)².\nDifference of squares: (4x − 1)(4x + 1) ✓' },

        // Block 4 — Difference of two squares, with coefficients (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise 9x² − 25.', checkMode: 'auto', correctAnswer: '(3x-5)(3x+5)', correctAnswers: ['(3x-5)(3x+5)', '(3x − 5)(3x + 5)', '(3x+5)(3x-5)', '(3x + 5)(3x − 5)'], answer: '(3x − 5)(3x + 5)', explanation: '9x² = (3x)² and 25 = (5)².\nDifference of squares: (3x − 5)(3x + 5) ✓' },
        { difficulty: 'Hard', question: 'Factorise 25x² − 4y².', checkMode: 'auto', correctAnswer: '(5x-2y)(5x+2y)', correctAnswers: ['(5x-2y)(5x+2y)', '(5x − 2y)(5x + 2y)', '(5x+2y)(5x-2y)', '(5x + 2y)(5x − 2y)'], answer: '(5x − 2y)(5x + 2y)', explanation: '25x² = (5x)² and 4y² = (2y)².\nDifference of squares: (5x − 2y)(5x + 2y) ✓' },
        { difficulty: 'Hard', question: 'Lindiwe factorises 36x² − 49 and gets (6x − 7)(6x + 7). Check her answer.', answer: 'She is correct — 36x² = (6x)² and 49 = (7)², so the difference of squares gives (6x − 7)(6x + 7).', checkMode: 'self' },

        // Block 5 — Trinomial x² + bx + c, positive/simple constant (Medium)
        { difficulty: 'Medium', question: 'Factorise x² + 10x + 24.', checkMode: 'auto', correctAnswer: '(x+4)(x+6)', correctAnswers: ['(x+4)(x+6)', '(x + 4)(x + 6)', '(x+6)(x+4)', '(x + 6)(x + 4)'], answer: '(x + 4)(x + 6)', explanation: 'Find two numbers multiplying to 24 and adding to 10: 4 and 6.\nFactorised: (x + 4)(x + 6) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² + 11x + 18.', checkMode: 'auto', correctAnswer: '(x+2)(x+9)', correctAnswers: ['(x+2)(x+9)', '(x + 2)(x + 9)', '(x+9)(x+2)', '(x + 9)(x + 2)'], answer: '(x + 2)(x + 9)', explanation: 'Find two numbers multiplying to 18 and adding to 11: 2 and 9.\nFactorised: (x + 2)(x + 9) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 7x + 12.', checkMode: 'auto', correctAnswer: '(x-3)(x-4)', correctAnswers: ['(x-3)(x-4)', '(x − 3)(x − 4)', '(x-4)(x-3)', '(x − 4)(x − 3)'], answer: '(x − 3)(x − 4)', explanation: 'Find two numbers multiplying to 12 and adding to −7: −3 and −4.\nFactorised: (x − 3)(x − 4) ✓' },

        // Block 6 — Trinomial x² + bx + c, negative constant (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Factorise x² − 4x − 21.', checkMode: 'auto', correctAnswer: '(x-7)(x+3)', correctAnswers: ['(x-7)(x+3)', '(x − 7)(x + 3)', '(x+3)(x-7)', '(x + 3)(x − 7)'], answer: '(x − 7)(x + 3)', explanation: 'Find two numbers multiplying to −21 and adding to −4: −7 and 3.\nFactorised: (x − 7)(x + 3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Factorise x² + 2x − 24.', checkMode: 'auto', correctAnswer: '(x+6)(x-4)', correctAnswers: ['(x+6)(x-4)', '(x + 6)(x − 4)', '(x-4)(x+6)', '(x − 4)(x + 6)'], answer: '(x + 6)(x − 4)', explanation: 'Find two numbers multiplying to −24 and adding to 2: 6 and −4.\nFactorised: (x + 6)(x − 4) ✓' },
        { difficulty: 'Hard', question: 'Factorise x² − x − 30.', checkMode: 'auto', correctAnswer: '(x-6)(x+5)', correctAnswers: ['(x-6)(x+5)', '(x − 6)(x + 5)', '(x+5)(x-6)', '(x + 5)(x − 6)'], answer: '(x − 6)(x + 5)', explanation: 'Find two numbers multiplying to −30 and adding to −1: −6 and 5.\nFactorised: (x − 6)(x + 5) ✓' },

        // Block 7 — Trinomial with common factor + error-spotting (Hard)
        { difficulty: 'Hard', question: 'Factorise 2x² + 14x + 24 fully.', checkMode: 'auto', correctAnswer: '2(x+3)(x+4)', correctAnswers: ['2(x+3)(x+4)', '2(x + 3)(x + 4)', '2(x+4)(x+3)', '2(x + 4)(x + 3)'], answer: '2(x + 3)(x + 4)', explanation: 'Factor out 2: 2(x² + 7x + 12).\nFind two numbers multiplying to 12 and adding to 7: 3 and 4.\nFactorised: 2(x + 3)(x + 4) ✓' },
        { difficulty: 'Hard', question: 'Factorise 3x² − 3x − 18 fully.', checkMode: 'auto', correctAnswer: '3(x-3)(x+2)', correctAnswers: ['3(x-3)(x+2)', '3(x − 3)(x + 2)', '3(x+2)(x-3)', '3(x + 2)(x − 3)'], answer: '3(x − 3)(x + 2)', explanation: 'Factor out 3: 3(x² − x − 6).\nFind two numbers multiplying to −6 and adding to −1: −3 and 2.\nFactorised: 3(x − 3)(x + 2) ✓' },
        { difficulty: 'Hard', question: 'Factorise 4x² − 16 fully, identifying the common factor and the pattern used.', answer: 'Factor out 4: 4(x² − 4). Recognise difference of squares: 4(x − 2)(x + 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Karabo factorises x² − 5x − 14 and gets (x − 2)(x + 7). Check his answer.', answer: 'He is incorrect — although (−2)(7) = −14, the sum −2 + 7 = 5, not −5. The correct factorisation is (x − 7)(x + 2), since (−7)(2) = −14 and −7 + 2 = −5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered factorising common factors, differences of squares and trinomials.' },
        { minScore: 15, message: 'Great work! Review any missed questions on trinomials or difference of squares and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the HCF and factorising trinomials, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Common factor, two-term (Easy)
        { difficulty: 'Easy', question: 'Factorise 14x² + 21x.', checkMode: 'auto', correctAnswer: '7x(2x+3)', correctAnswers: ['7x(2x+3)', '7x(2x + 3)'], answer: '7x(2x + 3)', explanation: 'HCF of 14x² and 21x is 7x.\n14x² ÷ 7x = 2x and 21x ÷ 7x = 3.\nFactorised: 7x(2x + 3) ✓' },
        { difficulty: 'Easy', question: 'Factorise 8x³ − 20x².', checkMode: 'auto', correctAnswer: '4x²(2x-5)', correctAnswers: ['4x²(2x-5)', '4x²(2x − 5)', '4x^2(2x-5)', '4x^2(2x − 5)'], answer: '4x²(2x − 5)', explanation: 'HCF of 8x³ and 20x² is 4x².\n8x³ ÷ 4x² = 2x and 20x² ÷ 4x² = 5.\nFactorised: 4x²(2x − 5) ✓' },

        // Block 2 — Common factor, three-term / cubic (Easy-Medium)
        { difficulty: 'Medium', question: 'Factorise 6x³ + 9x² − 15x.', checkMode: 'auto', correctAnswer: '3x(2x²+3x-5)', correctAnswers: ['3x(2x²+3x-5)', '3x(2x² + 3x - 5)', '3x(2x²+3x−5)', '3x(2x² + 3x − 5)', '3x(2x^2+3x-5)', '3x(2x^2 + 3x - 5)'], answer: '3x(2x² + 3x − 5)', explanation: 'HCF of 6x³, 9x² and 15x is 3x.\n6x³ ÷ 3x = 2x², 9x² ÷ 3x = 3x, 15x ÷ 3x = 5.\nFactorised: 3x(2x² + 3x − 5) ✓' },
        { difficulty: 'Medium', question: 'Factorise 12a²b + 8ab².', checkMode: 'auto', correctAnswer: '4ab(3a+2b)', correctAnswers: ['4ab(3a+2b)', '4ab(3a + 2b)'], answer: '4ab(3a + 2b)', explanation: 'HCF of 12a²b and 8ab² is 4ab.\n12a²b ÷ 4ab = 3a and 8ab² ÷ 4ab = 2b.\nFactorised: 4ab(3a + 2b) ✓' },

        // Block 3 — Difference of two squares, basic (Medium)
        { difficulty: 'Medium', question: 'Factorise x² − 36.', checkMode: 'auto', correctAnswer: '(x-6)(x+6)', correctAnswers: ['(x-6)(x+6)', '(x − 6)(x + 6)', '(x+6)(x-6)', '(x + 6)(x − 6)'], answer: '(x − 6)(x + 6)', explanation: 'Recognise x² − 36 = x² − 6².\nDifference of squares: (x − 6)(x + 6) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 100.', checkMode: 'auto', correctAnswer: '(x-10)(x+10)', correctAnswers: ['(x-10)(x+10)', '(x − 10)(x + 10)', '(x+10)(x-10)', '(x + 10)(x − 10)'], answer: '(x − 10)(x + 10)', explanation: 'Recognise x² − 100 = x² − 10².\nDifference of squares: (x − 10)(x + 10) ✓' },
        { difficulty: 'Medium', question: 'Factorise 9x² − 1.', checkMode: 'auto', correctAnswer: '(3x-1)(3x+1)', correctAnswers: ['(3x-1)(3x+1)', '(3x − 1)(3x + 1)', '(3x+1)(3x-1)', '(3x + 1)(3x − 1)'], answer: '(3x − 1)(3x + 1)', explanation: '9x² = (3x)² and 1 = (1)².\nDifference of squares: (3x − 1)(3x + 1) ✓' },

        // Block 4 — Difference of two squares, with coefficients (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise 16x² − 49.', checkMode: 'auto', correctAnswer: '(4x-7)(4x+7)', correctAnswers: ['(4x-7)(4x+7)', '(4x − 7)(4x + 7)', '(4x+7)(4x-7)', '(4x + 7)(4x − 7)'], answer: '(4x − 7)(4x + 7)', explanation: '16x² = (4x)² and 49 = (7)².\nDifference of squares: (4x − 7)(4x + 7) ✓' },
        { difficulty: 'Hard', question: 'Factorise 4x² − 9y².', checkMode: 'auto', correctAnswer: '(2x-3y)(2x+3y)', correctAnswers: ['(2x-3y)(2x+3y)', '(2x − 3y)(2x + 3y)', '(2x+3y)(2x-3y)', '(2x + 3y)(2x − 3y)'], answer: '(2x − 3y)(2x + 3y)', explanation: '4x² = (2x)² and 9y² = (3y)².\nDifference of squares: (2x − 3y)(2x + 3y) ✓' },
        { difficulty: 'Hard', question: 'Thandi factorises 64x² − 81 and gets (8x − 9)(8x + 9). Check her answer.', answer: 'She is correct — 64x² = (8x)² and 81 = (9)², so the difference of squares gives (8x − 9)(8x + 9).', checkMode: 'self' },

        // Block 5 — Trinomial x² + bx + c, positive/simple constant (Medium)
        { difficulty: 'Medium', question: 'Factorise x² + 9x + 14.', checkMode: 'auto', correctAnswer: '(x+2)(x+7)', correctAnswers: ['(x+2)(x+7)', '(x + 2)(x + 7)', '(x+7)(x+2)', '(x + 7)(x + 2)'], answer: '(x + 2)(x + 7)', explanation: 'Find two numbers multiplying to 14 and adding to 9: 2 and 7.\nFactorised: (x + 2)(x + 7) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² + 13x + 40.', checkMode: 'auto', correctAnswer: '(x+5)(x+8)', correctAnswers: ['(x+5)(x+8)', '(x + 5)(x + 8)', '(x+8)(x+5)', '(x + 8)(x + 5)'], answer: '(x + 5)(x + 8)', explanation: 'Find two numbers multiplying to 40 and adding to 13: 5 and 8.\nFactorised: (x + 5)(x + 8) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 9x + 20.', checkMode: 'auto', correctAnswer: '(x-4)(x-5)', correctAnswers: ['(x-4)(x-5)', '(x − 4)(x − 5)', '(x-5)(x-4)', '(x − 5)(x − 4)'], answer: '(x − 4)(x − 5)', explanation: 'Find two numbers multiplying to 20 and adding to −9: −4 and −5.\nFactorised: (x − 4)(x − 5) ✓' },

        // Block 6 — Trinomial x² + bx + c, negative constant (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Factorise x² − 3x − 40.', checkMode: 'auto', correctAnswer: '(x-8)(x+5)', correctAnswers: ['(x-8)(x+5)', '(x − 8)(x + 5)', '(x+5)(x-8)', '(x + 5)(x − 8)'], answer: '(x − 8)(x + 5)', explanation: 'Find two numbers multiplying to −40 and adding to −3: −8 and 5.\nFactorised: (x − 8)(x + 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Factorise x² + 4x − 21.', checkMode: 'auto', correctAnswer: '(x+7)(x-3)', correctAnswers: ['(x+7)(x-3)', '(x + 7)(x − 3)', '(x-3)(x+7)', '(x − 3)(x + 7)'], answer: '(x + 7)(x − 3)', explanation: 'Find two numbers multiplying to −21 and adding to 4: 7 and −3.\nFactorised: (x + 7)(x − 3) ✓' },
        { difficulty: 'Hard', question: 'Factorise x² − 2x − 35.', checkMode: 'auto', correctAnswer: '(x-7)(x+5)', correctAnswers: ['(x-7)(x+5)', '(x − 7)(x + 5)', '(x+5)(x-7)', '(x + 5)(x − 7)'], answer: '(x − 7)(x + 5)', explanation: 'Find two numbers multiplying to −35 and adding to −2: −7 and 5.\nFactorised: (x − 7)(x + 5) ✓' },

        // Block 7 — Trinomial with common factor + error-spotting (Hard)
        { difficulty: 'Hard', question: 'Factorise 3x² + 21x + 30 fully.', checkMode: 'auto', correctAnswer: '3(x+2)(x+5)', correctAnswers: ['3(x+2)(x+5)', '3(x + 2)(x + 5)', '3(x+5)(x+2)', '3(x + 5)(x + 2)'], answer: '3(x + 2)(x + 5)', explanation: 'Factor out 3: 3(x² + 7x + 10).\nFind two numbers multiplying to 10 and adding to 7: 2 and 5.\nFactorised: 3(x + 2)(x + 5) ✓' },
        { difficulty: 'Hard', question: 'Factorise 2x² − 2x − 24 fully.', checkMode: 'auto', correctAnswer: '2(x-4)(x+3)', correctAnswers: ['2(x-4)(x+3)', '2(x − 4)(x + 3)', '2(x+3)(x-4)', '2(x + 3)(x − 4)'], answer: '2(x − 4)(x + 3)', explanation: 'Factor out 2: 2(x² − x − 12).\nFind two numbers multiplying to −12 and adding to −1: −4 and 3.\nFactorised: 2(x − 4)(x + 3) ✓' },
        { difficulty: 'Hard', question: 'Factorise 5x² − 45 fully, identifying the common factor and the pattern used.', answer: 'Factor out 5: 5(x² − 9). Recognise difference of squares: 5(x − 3)(x + 3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Naledi factorises x² − 6x − 16 and gets (x − 2)(x + 8). Check her answer.', answer: 'She is incorrect — although (−2)(8) = −16, the sum −2 + 8 = 6, not −6. The correct factorisation is (x − 8)(x + 2), since (−8)(2) = −16 and −8 + 2 = −6.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered factorising common factors, differences of squares and trinomials.' },
        { minScore: 15, message: 'Great work! Review any missed questions on trinomials or difference of squares and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the HCF and factorising trinomials, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Common factor, two-term (Easy)
        { difficulty: 'Easy', question: 'Factorise 12x² + 18x.', checkMode: 'auto', correctAnswer: '6x(2x+3)', correctAnswers: ['6x(2x+3)', '6x(2x + 3)'], answer: '6x(2x + 3)', explanation: 'HCF of 12x² and 18x is 6x.\n12x² ÷ 6x = 2x and 18x ÷ 6x = 3.\nFactorised: 6x(2x + 3) ✓' },
        { difficulty: 'Easy', question: 'Factorise 10x³ − 15x².', checkMode: 'auto', correctAnswer: '5x²(2x-3)', correctAnswers: ['5x²(2x-3)', '5x²(2x − 3)', '5x^2(2x-3)', '5x^2(2x − 3)'], answer: '5x²(2x − 3)', explanation: 'HCF of 10x³ and 15x² is 5x².\n10x³ ÷ 5x² = 2x and 15x² ÷ 5x² = 3.\nFactorised: 5x²(2x − 3) ✓' },

        // Block 2 — Common factor, three-term / cubic (Easy-Medium)
        { difficulty: 'Medium', question: 'Factorise 8x³ + 12x² − 20x.', checkMode: 'auto', correctAnswer: '4x(2x²+3x-5)', correctAnswers: ['4x(2x²+3x-5)', '4x(2x² + 3x - 5)', '4x(2x²+3x−5)', '4x(2x² + 3x − 5)', '4x(2x^2+3x-5)', '4x(2x^2 + 3x - 5)'], answer: '4x(2x² + 3x − 5)', explanation: 'HCF of 8x³, 12x² and 20x is 4x.\n8x³ ÷ 4x = 2x², 12x² ÷ 4x = 3x, 20x ÷ 4x = 5.\nFactorised: 4x(2x² + 3x − 5) ✓' },
        { difficulty: 'Medium', question: 'Factorise 15a²b + 10ab².', checkMode: 'auto', correctAnswer: '5ab(3a+2b)', correctAnswers: ['5ab(3a+2b)', '5ab(3a + 2b)'], answer: '5ab(3a + 2b)', explanation: 'HCF of 15a²b and 10ab² is 5ab.\n15a²b ÷ 5ab = 3a and 10ab² ÷ 5ab = 2b.\nFactorised: 5ab(3a + 2b) ✓' },

        // Block 3 — Difference of two squares, basic (Medium)
        { difficulty: 'Medium', question: 'Factorise x² − 16.', checkMode: 'auto', correctAnswer: '(x-4)(x+4)', correctAnswers: ['(x-4)(x+4)', '(x − 4)(x + 4)', '(x+4)(x-4)', '(x + 4)(x − 4)'], answer: '(x − 4)(x + 4)', explanation: 'Recognise x² − 16 = x² − 4².\nDifference of squares: (x − 4)(x + 4) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 144.', checkMode: 'auto', correctAnswer: '(x-12)(x+12)', correctAnswers: ['(x-12)(x+12)', '(x − 12)(x + 12)', '(x+12)(x-12)', '(x + 12)(x − 12)'], answer: '(x − 12)(x + 12)', explanation: 'Recognise x² − 144 = x² − 12².\nDifference of squares: (x − 12)(x + 12) ✓' },
        { difficulty: 'Medium', question: 'Factorise 25x² − 1.', checkMode: 'auto', correctAnswer: '(5x-1)(5x+1)', correctAnswers: ['(5x-1)(5x+1)', '(5x − 1)(5x + 1)', '(5x+1)(5x-1)', '(5x + 1)(5x − 1)'], answer: '(5x − 1)(5x + 1)', explanation: '25x² = (5x)² and 1 = (1)².\nDifference of squares: (5x − 1)(5x + 1) ✓' },

        // Block 4 — Difference of two squares, with coefficients (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise 49x² − 9.', checkMode: 'auto', correctAnswer: '(7x-3)(7x+3)', correctAnswers: ['(7x-3)(7x+3)', '(7x − 3)(7x + 3)', '(7x+3)(7x-3)', '(7x + 3)(7x − 3)'], answer: '(7x − 3)(7x + 3)', explanation: '49x² = (7x)² and 9 = (3)².\nDifference of squares: (7x − 3)(7x + 3) ✓' },
        { difficulty: 'Hard', question: 'Factorise 9x² − 16y².', checkMode: 'auto', correctAnswer: '(3x-4y)(3x+4y)', correctAnswers: ['(3x-4y)(3x+4y)', '(3x − 4y)(3x + 4y)', '(3x+4y)(3x-4y)', '(3x + 4y)(3x − 4y)'], answer: '(3x − 4y)(3x + 4y)', explanation: '9x² = (3x)² and 16y² = (4y)².\nDifference of squares: (3x − 4y)(3x + 4y) ✓' },
        { difficulty: 'Hard', question: 'Mpho factorises 100x² − 121 and gets (10x − 11)(10x + 11). Check his answer.', answer: 'He is correct — 100x² = (10x)² and 121 = (11)², so the difference of squares gives (10x − 11)(10x + 11).', checkMode: 'self' },

        // Block 5 — Trinomial x² + bx + c, positive/simple constant (Medium)
        { difficulty: 'Medium', question: 'Factorise x² + 8x + 15.', checkMode: 'auto', correctAnswer: '(x+3)(x+5)', correctAnswers: ['(x+3)(x+5)', '(x + 3)(x + 5)', '(x+5)(x+3)', '(x + 5)(x + 3)'], answer: '(x + 3)(x + 5)', explanation: 'Find two numbers multiplying to 15 and adding to 8: 3 and 5.\nFactorised: (x + 3)(x + 5) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² + 12x + 35.', checkMode: 'auto', correctAnswer: '(x+5)(x+7)', correctAnswers: ['(x+5)(x+7)', '(x + 5)(x + 7)', '(x+7)(x+5)', '(x + 7)(x + 5)'], answer: '(x + 5)(x + 7)', explanation: 'Find two numbers multiplying to 35 and adding to 12: 5 and 7.\nFactorised: (x + 5)(x + 7) ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 8x + 15.', checkMode: 'auto', correctAnswer: '(x-3)(x-5)', correctAnswers: ['(x-3)(x-5)', '(x − 3)(x − 5)', '(x-5)(x-3)', '(x − 5)(x − 3)'], answer: '(x − 3)(x − 5)', explanation: 'Find two numbers multiplying to 15 and adding to −8: −3 and −5.\nFactorised: (x − 3)(x − 5) ✓' },

        // Block 6 — Trinomial x² + bx + c, negative constant (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Factorise x² − 4x − 32.', checkMode: 'auto', correctAnswer: '(x-8)(x+4)', correctAnswers: ['(x-8)(x+4)', '(x − 8)(x + 4)', '(x+4)(x-8)', '(x + 4)(x − 8)'], answer: '(x − 8)(x + 4)', explanation: 'Find two numbers multiplying to −32 and adding to −4: −8 and 4.\nFactorised: (x − 8)(x + 4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Factorise x² + 3x − 28.', checkMode: 'auto', correctAnswer: '(x+7)(x-4)', correctAnswers: ['(x+7)(x-4)', '(x + 7)(x − 4)', '(x-4)(x+7)', '(x − 4)(x + 7)'], answer: '(x + 7)(x − 4)', explanation: 'Find two numbers multiplying to −28 and adding to 3: 7 and −4.\nFactorised: (x + 7)(x − 4) ✓' },
        { difficulty: 'Hard', question: 'Factorise x² − 3x − 18.', checkMode: 'auto', correctAnswer: '(x-6)(x+3)', correctAnswers: ['(x-6)(x+3)', '(x − 6)(x + 3)', '(x+3)(x-6)', '(x + 3)(x − 6)'], answer: '(x − 6)(x + 3)', explanation: 'Find two numbers multiplying to −18 and adding to −3: −6 and 3.\nFactorised: (x − 6)(x + 3) ✓' },

        // Block 7 — Trinomial with common factor + error-spotting (Hard)
        { difficulty: 'Hard', question: 'Factorise 4x² + 20x + 24 fully.', checkMode: 'auto', correctAnswer: '4(x+2)(x+3)', correctAnswers: ['4(x+2)(x+3)', '4(x + 2)(x + 3)', '4(x+3)(x+2)', '4(x + 3)(x + 2)'], answer: '4(x + 2)(x + 3)', explanation: 'Factor out 4: 4(x² + 5x + 6).\nFind two numbers multiplying to 6 and adding to 5: 2 and 3.\nFactorised: 4(x + 2)(x + 3) ✓' },
        { difficulty: 'Hard', question: 'Factorise 3x² − 6x − 45 fully.', checkMode: 'auto', correctAnswer: '3(x-5)(x+3)', correctAnswers: ['3(x-5)(x+3)', '3(x − 5)(x + 3)', '3(x+3)(x-5)', '3(x + 3)(x − 5)'], answer: '3(x − 5)(x + 3)', explanation: 'Factor out 3: 3(x² − 2x − 15).\nFind two numbers multiplying to −15 and adding to −2: −5 and 3.\nFactorised: 3(x − 5)(x + 3) ✓' },
        { difficulty: 'Hard', question: 'Factorise 6x² − 24 fully, identifying the common factor and the pattern used.', answer: 'Factor out 6: 6(x² − 4). Recognise difference of squares: 6(x − 2)(x + 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo factorises x² − 7x − 18 and gets (x − 2)(x + 9). Check his answer.', answer: 'He is incorrect — although (−2)(9) = −18, the sum −2 + 9 = 7, not −7. The correct factorisation is (x − 9)(x + 2), since (−9)(2) = −18 and −9 + 2 = −7.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered factorising common factors, differences of squares and trinomials.' },
        { minScore: 15, message: 'Great work! Review any missed questions on trinomials or difference of squares and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the HCF and factorising trinomials, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
