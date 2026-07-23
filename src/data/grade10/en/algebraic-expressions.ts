import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// first binomial term / split terms / converted fractions → blue   (#2563eb)
// second binomial term / a×c value / LCM                 → orange (#ea580c)
// combined result / factored form / simplified answer     → green  (#16a34a)
// grouped pair 1                                          → red    (#dc2626)
// grouped pair 2                                          → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Expressions',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING A BINOMIAL BY A TRINOMIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'binomial-times-trinomial',
      title: 'Multiplying a Binomial by a Trinomial',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">To multiply a <strong>binomial</strong> (two terms) by a <strong>trinomial</strong> (three terms), we distribute each term of the binomial across every term of the trinomial, then combine like terms. There are always <strong>six partial products</strong> before simplifying.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first binomial term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second binomial term')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined result')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How distribution works</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;font-size:15px;">(${bl('a')} + ${or('b')})(c + d + e) = ${bl('ac')} + ${bl('ad')} + ${bl('ae')} + ${or('bc')} + ${or('bd')} + ${or('be')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Each term of the binomial multiplies every term of the trinomial — six products in total.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Distribute the first term')} — Multiply the first term of the binomial by every term of the trinomial.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Distribute the second term')} — Multiply the second term of the binomial by every term of the trinomial.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Combine like terms')} — Collect terms with the same power of x and add their coefficients.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Write your answer in standard form</p>` +
        `<p style="margin:0;color:#1e3a8a;">Arrange the final answer with the <strong>highest power first</strong> (x³, then x², then x, then the constant). This makes like terms easy to spot and answers easy to check.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Expand (x + 2)(x² + 3x − 5).',
          answer: `${gr('x³ + 5x² + x − 10')}`,
          steps: [
            `Identify the binomial terms: ${bl('x')} and ${or('+2')}.`,
            `${bl('Distribute x:')} ${bl('x')} × x² = ${bl('x³')}, &nbsp; ${bl('x')} × 3x = ${bl('+3x²')}, &nbsp; ${bl('x')} × (−5) = ${bl('−5x')}.`,
            `${or('Distribute +2:')} ${or('+2')} × x² = ${or('+2x²')}, &nbsp; ${or('+2')} × 3x = ${or('+6x')}, &nbsp; ${or('+2')} × (−5) = ${or('−10')}.`,
            `Write all six products together: ${bl('x³ + 3x² − 5x')} + ${or('2x² + 6x − 10')}.`,
            `${gr('Combine like terms:')} x³ &nbsp;|&nbsp; (3 + 2)x² = 5x² &nbsp;|&nbsp; (−5 + 6)x = x &nbsp;|&nbsp; −10.`,
            `<strong>Answer:</strong> ${gr('x³ + 5x² + x − 10')}`,
          ],
        },
        {
          question: 'Expand (2x − 1)(x² − 4x + 3).',
          answer: `${gr('2x³ − 9x² + 10x − 3')}`,
          steps: [
            `Identify the binomial terms: ${bl('2x')} and ${or('−1')}.`,
            `${bl('Distribute 2x:')} ${bl('2x')} × x² = ${bl('2x³')}, &nbsp; ${bl('2x')} × (−4x) = ${bl('−8x²')}, &nbsp; ${bl('2x')} × 3 = ${bl('+6x')}.`,
            `${or('Distribute −1:')} ${or('−1')} × x² = ${or('−x²')}, &nbsp; ${or('−1')} × (−4x) = ${or('+4x')}, &nbsp; ${or('−1')} × 3 = ${or('−3')}.`,
            `Write all six products together: ${bl('2x³ − 8x² + 6x')} + ${or('−x² + 4x − 3')}.`,
            `${gr('Combine like terms:')} 2x³ &nbsp;|&nbsp; (−8 − 1)x² = −9x² &nbsp;|&nbsp; (6 + 4)x = 10x &nbsp;|&nbsp; −3.`,
            `<strong>Answer:</strong> ${gr('2x³ − 9x² + 10x − 3')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Expand (x + 3)(x² − 2x + 1).',
          answer: 'Distribute x: x³ − 2x² + x. Distribute +3: 3x² − 6x + 3. Combine: x³ + (−2 + 3)x² + (1 − 6)x + 3 = x³ + x² − 5x + 3.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Expand each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (x − 2)(x² + 4x − 3) =',
              correctAnswer: 'x³+2x²-11x+6',
              correctAnswers: ['x³+2x²-11x+6', 'x^3+2x^2-11x+6'],
              explanation: 'Distribute x: x³ + 4x² − 3x. Distribute −2: −2x² − 8x + 6. Combine: x³ + (4 − 2)x² + (−3 − 8)x + 6 = x³ + 2x² − 11x + 6.',
            },
            {
              label: 'b) (3x + 1)(2x² − x + 4) =',
              correctAnswer: '6x³-x²+11x+4',
              correctAnswers: ['6x³-x²+11x+4', '6x^3-x^2+11x+4'],
              explanation: 'Distribute 3x: 6x³ − 3x² + 12x. Distribute +1: 2x² − x + 4. Combine: 6x³ + (−3 + 2)x² + (12 − 1)x + 4 = 6x³ − x² + 11x + 4.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Expand (2x − 3)(3x² + 5x − 2) and verify your answer by substituting x = 1 into both the original expression and the expanded form.',
          answer: 'Expanded: 6x³ + x² − 19x + 6.\nVerify x = 1: Original: (2 − 3)(3 + 5 − 2) = (−1)(6) = −6. Expanded: 6 + 1 − 19 + 6 = −6. ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to multiply a binomial by a trinomial using distribution with colour coded first term blue and second term orange then combining like terms green',

      diagramPlaceholder:
        'Distribution diagram for (x + 2)(x² + 3x − 5) showing six arrows from each binomial term (x and +2) to each trinomial term (x², 3x, −5), colour coded blue for x and orange for +2',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 205" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">(x + 2)(x² + 3x − 5)</text>` +
        `<rect x="45" y="24" width="50" height="30" rx="6" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="70" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">x</text>` +
        `<rect x="165" y="24" width="50" height="30" rx="6" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="190" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">+2</text>` +
        `<rect x="8" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="35" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">x²</text>` +
        `<rect x="100" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="127" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">3x</text>` +
        `<rect x="192" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="219" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">−5</text>` +
        `<line x1="70" y1="54" x2="35" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="70" y1="54" x2="127" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="70" y1="54" x2="219" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="35" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="127" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="219" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="130" y="196" text-anchor="middle" font-size="11" fill="#6b7280">Each binomial term multiplies every trinomial term — six products</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FACTORISING TRINOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-trinomials',
      title: 'Factorising Trinomials',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">Factorising reverses expansion. For <strong>x² + bx + c</strong>, find two numbers that <em>multiply</em> to give <strong>c</strong> and <em>add</em> to give <strong>b</strong>. For <strong>ax² + bx + c where a ≠ 1</strong>, use the <strong>a × c method</strong>: find two numbers that multiply to give <strong>ac</strong> and add to give <strong>b</strong>, then split the middle term and factor by grouping.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('a × c value')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('split terms')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('factored brackets')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 1 — x² + bx + c &nbsp;(a = 1)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find two numbers that ${or('multiply to c')} and add to b.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${gr('factored form')} as (x + p)(x + q) where p and q are your two numbers.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 2 — ax² + bx + c &nbsp;(a ≠ 1): the a × c method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Calculate ${or('a × c')}. Find two numbers that multiply to give ${or('ac')} and add to give b.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Split the middle term')} — replace bx with two separate terms using your two numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Group and factor')} — factor each pair of terms, then factor out the common binomial.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check by expanding</p>` +
        `<p style="margin:0;color:#1e3a8a;">After factorising, expand your answer to verify it matches the original expression. This takes seconds and guarantees your answer is correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise x² + 2x − 15.',
          answer: `${gr('(x + 5)(x − 3)')}`,
          steps: [
            `Identify a = 1, b = 2, c = −15. Since a = 1, use Method 1.`,
            `Find two numbers that multiply to ${or('−15')} and add to 2.`,
            `Test factor pairs of 15: 1 × 15, 3 × 5. Try ${or('5 and −3')}: 5 × (−3) = ${or('−15')} ✓ and 5 + (−3) = 2 ✓.`,
            `Write the factored form: ${gr('(x + 5)(x − 3)')}.`,
            `Check: (x + 5)(x − 3) = x² − 3x + 5x − 15 = x² + 2x − 15 ✓`,
          ],
        },
        {
          question: 'Factorise 3x² + 11x + 6.',
          answer: `${gr('(3x + 2)(x + 3)')}`,
          steps: [
            `Identify a = 3, b = 11, c = 6. Since a ≠ 1, use the a × c method.`,
            `Calculate ${or('a × c = 3 × 6 = 18')}.`,
            `Find two numbers that multiply to ${or('18')} and add to 11: 9 and 2 — 9 × 2 = 18 ✓, 9 + 2 = 11 ✓.`,
            `${bl('Split the middle term:')} 3x² + ${bl('9x + 2x')} + 6.`,
            `Group: (3x² + ${bl('9x')}) + (${bl('2x')} + 6) = ${bl('3x(x + 3)')} + ${bl('2(x + 3)')}.`,
            `Factor out the common binomial: ${gr('(3x + 2)(x + 3)')}.`,
            `Check: (3x + 2)(x + 3) = 3x² + 9x + 2x + 6 = 3x² + 11x + 6 ✓`,
          ],
        },
        {
          question: 'Factorise 2x² − 7x − 15.',
          answer: `${gr('(2x + 3)(x − 5)')}`,
          steps: [
            `Identify a = 2, b = −7, c = −15. Use the a × c method.`,
            `Calculate ${or('a × c = 2 × (−15) = −30')}.`,
            `Find two numbers that multiply to ${or('−30')} and add to −7: −10 and 3 — (−10) × 3 = −30 ✓, (−10) + 3 = −7 ✓.`,
            `${bl('Split the middle term:')} 2x² + ${bl('3x − 10x')} − 15.`,
            `Group: (2x² + ${bl('3x')}) + (${bl('−10x')} − 15) = ${bl('x(2x + 3)')} ${bl('− 5(2x + 3)')}.`,
            `Factor out the common binomial: ${gr('(2x + 3)(x − 5)')}.`,
            `Check: (2x + 3)(x − 5) = 2x² − 10x + 3x − 15 = 2x² − 7x − 15 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Factorise x² + 7x + 12.',
          answer: 'Find two numbers multiplying to 12, adding to 7: 3 and 4.\nFactorised: (x + 3)(x + 4).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Factorise each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) x² − x − 12 =',
              correctAnswer: '(x-4)(x+3)',
              correctAnswers: ['(x-4)(x+3)', '(x+3)(x-4)'],
              explanation: 'Find numbers multiplying to −12, adding to −1: −4 and 3. Answer: (x − 4)(x + 3).\nCheck: (x − 4)(x + 3) = x² + 3x − 4x − 12 = x² − x − 12 ✓',
            },
            {
              label: 'b) 2x² + 7x + 3 =',
              correctAnswer: '(2x+1)(x+3)',
              correctAnswers: ['(2x+1)(x+3)', '(x+3)(2x+1)'],
              explanation: 'a × c = 6. Numbers multiplying to 6, adding to 7: 6 and 1.\nSplit: 2x² + 6x + x + 3. Group: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Factorise 6x² − x − 12.',
          answer: 'a × c = 6 × (−12) = −72.\nNumbers multiplying to −72, adding to −1: −9 and 8.\nSplit: 6x² − 9x + 8x − 12.\nGroup: 3x(2x − 3) + 4(2x − 3) = (3x + 4)(2x − 3).\nCheck: (3x + 4)(2x − 3) = 6x² − 9x + 8x − 12 = 6x² − x − 12 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to factorise trinomials using the sum-product method for a=1 and the a×c method for a≠1 with colour coded a×c value orange and split terms blue',

      diagramPlaceholder:
        'X-box diagram for 3x² + 11x + 6 showing a×c = 18 at top, b = 11 at bottom, and the two numbers 9 and 2 at the sides, leading to the split and factored form (3x + 2)(x + 3)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 230" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">3x² + 11x + 6</text>` +
        `<rect x="60" y="30" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="60" y1="30" x2="160" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="160" y1="30" x2="60" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="110" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a×c = 18</text>` +
        `<text x="110" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">b = 11</text>` +
        `<text x="80" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9</text>` +
        `<text x="140" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="110" y="150" text-anchor="middle" font-size="11" fill="#6b7280">9 × 2 = 18 and 9 + 2 = 11</text>` +
        `<text x="110" y="172" text-anchor="middle" font-size="12" fill="#0f1f3d">Split: 3x² + <tspan fill="#2563eb" font-weight="700">9x + 2x</tspan> + 6</text>` +
        `<text x="110" y="192" text-anchor="middle" font-size="12" fill="#0f1f3d">Group: 3x(x + 3) + 2(x + 3)</text>` +
        `<text x="110" y="212" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">= (3x + 2)(x + 3)</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING BY GROUPING IN PAIRS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-by-grouping',
      title: 'Factorising by Grouping in Pairs',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">When an expression has <strong>four or more terms</strong> with no single common factor across all terms, we group terms in <strong>pairs</strong> that share a common factor, factor each pair, then factor out the <strong>common binomial factor</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('first pair')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('second pair')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('common binomial')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Group the first pair')} — place the first two terms together in brackets.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Group the second pair')} — place the last two terms in brackets. Watch signs carefully.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Factor each pair, then factor out the ${gr('common binomial')} from both groups.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Grouping order matters</p>` +
        `<p style="margin:0;color:#78350f;">Both groups must produce the <strong>same binomial factor</strong> after factoring. If they do not, try rearranging the terms into a different grouping before concluding the expression cannot be factored this way.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise ax + ay + bx + by.',
          answer: `${gr('(x + y)(a + b)')}`,
          steps: [
            `Group the terms in pairs: (${re('ax + ay')}) + (${pu('bx + by')}).`,
            `Factor the ${re('first pair:')} ${re('a(x + y)')}.`,
            `Factor the ${pu('second pair:')} ${pu('b(x + y)')}.`,
            `Both pairs contain the ${gr('common binomial (x + y)')}.`,
            `Factor out the common binomial: ${gr('(x + y)(a + b)')}.`,
            `Check: (x + y)(a + b) = ax + bx + ay + by ✓`,
          ],
        },
        {
          question: 'Factorise x³ + 3x² − 4x − 12.',
          answer: `${gr('(x + 3)(x − 2)(x + 2)')}`,
          steps: [
            `Group the terms in pairs: (${re('x³ + 3x²')}) + (${pu('−4x − 12')}).`,
            `Factor the ${re('first pair:')} ${re('x²(x + 3)')}.`,
            `Factor the ${pu('second pair:')} ${pu('−4(x + 3)')}. (Factor out −4 so that (x + 3) appears in both groups.)`,
            `Both pairs contain the ${gr('common binomial (x + 3)')}.`,
            `Factor out the common binomial: ${gr('(x + 3)(x² − 4)')}.`,
            `Recognise that x² − 4 is a <strong>difference of squares</strong>: x² − 4 = (x − 2)(x + 2).`,
            `<strong>Answer:</strong> ${gr('(x + 3)(x − 2)(x + 2)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Factorise 3x + 3y + ax + ay.',
          answer: 'Group: (3x + 3y) + (ax + ay).\nFactor each pair: 3(x + y) + a(x + y).\nCommon binomial: (x + y)(3 + a).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Factorise each of the following by grouping in pairs.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2x² + 4x + 3x + 6 =',
              correctAnswer: '(2x+3)(x+2)',
              correctAnswers: ['(2x+3)(x+2)', '(x+2)(2x+3)'],
              explanation: 'Group: (2x²+4x)+(3x+6). Factor: 2x(x+2)+3(x+2) = (2x+3)(x+2).',
            },
            {
              label: 'b) x³ − 2x² + 5x − 10 =',
              correctAnswer: '(x²+5)(x-2)',
              correctAnswers: ['(x²+5)(x-2)', '(x-2)(x²+5)', '(x^2+5)(x-2)', '(x-2)(x^2+5)'],
              explanation: 'Group: (x³−2x²)+(5x−10). Factor: x²(x−2)+5(x−2) = (x²+5)(x−2).',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Factorise x³ − x² − 4x + 4 fully.',
          answer: 'Group: (x³−x²)+(−4x+4).\nFactor: x²(x−1)−4(x−1).\nCommon binomial: (x²−4)(x−1).\nFactor difference of squares: (x−2)(x+2)(x−1).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to factorise a four-term expression by grouping in pairs with first pair colour coded red and second pair purple and common binomial green',

      diagramPlaceholder:
        'Flowchart for x³ + 3x² − 4x − 12 showing the first pair red, second pair purple, their factored forms, converging on the common binomial factor, and the final fully factored answer in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 265" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="55" y="6" width="170" height="28" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="140" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">x³ + 3x² − 4x − 12</text>` +
        `<line x1="140" y1="34" x2="140" y2="48" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="48" x2="70" y2="62" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="48" x2="210" y2="62" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="62" width="100" height="26" rx="6" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="70" y="79" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">x³ + 3x²</text>` +
        `<rect x="160" y="62" width="100" height="26" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.5"/>` +
        `<text x="210" y="79" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">−4x − 12</text>` +
        `<line x1="70" y1="88" x2="70" y2="102" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="210" y1="88" x2="210" y2="102" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="102" width="100" height="26" rx="6" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="70" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">x²(x + 3)</text>` +
        `<rect x="160" y="102" width="100" height="26" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.5"/>` +
        `<text x="210" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">−4(x + 3)</text>` +
        `<line x1="70" y1="128" x2="140" y2="146" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="210" y1="128" x2="140" y2="146" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="70" y="146" width="140" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="140" y="165" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(x + 3)(x² − 4)</text>` +
        `<line x1="140" y1="174" x2="140" y2="192" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="140,200 135,191 145,191" fill="#0f1f3d"/>` +
        `<text x="150" y="188" font-size="9" font-style="italic" fill="#6b7280">x² − 4 = (x−2)(x+2)</text>` +
        `<rect x="55" y="206" width="170" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="140" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(x + 3)(x − 2)(x + 2)</text>` +
        `<text x="140" y="250" text-anchor="middle" font-size="10" fill="#6b7280">Grouping in pairs finds the common binomial factor</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SIMPLIFYING ALGEBRAIC FRACTIONS WITH MONOMIAL DENOMINATORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'algebraic-fractions-monomial',
      title: 'Simplifying Algebraic Fractions with Monomial Denominators',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>simplify, add, or subtract</strong> algebraic fractions with <strong>monomial (single-term) denominators</strong>, find the <strong>LCM</strong> of the denominators, convert each fraction, then combine and simplify by factorising the numerator where possible.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('converted fractions')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for adding or subtracting algebraic fractions</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${or('LCM')} of all the denominators.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Convert each fraction')} — multiply numerator and denominator by what is needed to reach the LCM denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Combine the numerators, then ${gr('simplify')} by factorising the numerator where possible.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">State restrictions on the variable</p>` +
        `<p style="margin:0;color:#991b1b;">The denominator of a fraction can never equal zero. Always state restrictions such as <strong>x ≠ 0</strong> when the variable appears in the denominator. This is a required part of a complete answer in Grade 10.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify (6x² + 9x) / 3x.',
          answer: `${gr('2x + 3')} &nbsp;(x ≠ 0)`,
          steps: [
            `Factor the numerator: 6x² + 9x = ${bl('3x(2x + 3)')}.`,
            `Write the fraction: ${bl('3x(2x + 3)')} / 3x.`,
            `Cancel the common factor 3x (allowed since x ≠ 0): ${gr('2x + 3')}.`,
            `<strong>Answer:</strong> ${gr('2x + 3')} &nbsp;(x ≠ 0)`,
          ],
        },
        {
          question: 'Calculate 3/x + 5/(2x).',
          answer: `${gr('11/(2x)')} &nbsp;(x ≠ 0)`,
          steps: [
            `Find the ${or('LCM')} of x and 2x: ${or('LCM = 2x')}.`,
            `${bl('Convert the first fraction:')} 3/x = ${bl('6/(2x)')} (multiply numerator and denominator by 2).`,
            `The second fraction ${bl('5/(2x)')} already has the LCM as its denominator.`,
            `Combine: ${bl('6/(2x)')} + ${bl('5/(2x)')} = ${gr('11/(2x)')}.`,
            `<strong>Answer:</strong> ${gr('11/(2x)')} &nbsp;(x ≠ 0)`,
          ],
        },
        {
          question: 'Calculate 4/x² − 1/x.',
          answer: `${gr('(4 − x)/x²')} &nbsp;(x ≠ 0)`,
          steps: [
            `Find the ${or('LCM')} of x² and x: ${or('LCM = x²')}.`,
            `The first fraction ${bl('4/x²')} already has the LCM as its denominator.`,
            `${bl('Convert the second fraction:')} 1/x = ${bl('x/x²')} (multiply numerator and denominator by x).`,
            `Combine: ${bl('4/x²')} − ${bl('x/x²')} = ${gr('(4 − x)/x²')}.`,
            `The numerator 4 − x cannot be factored further.`,
            `<strong>Answer:</strong> ${gr('(4 − x)/x²')} &nbsp;(x ≠ 0)`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Simplify (8x² + 12x) / 4x &nbsp;(x ≠ 0).',
          answer: '2x + 3',
          checkMode: 'auto',
          correctAnswer: '2x+3',
          correctAnswers: ['2x+3', '2x + 3'],
          explanation: 'Factor numerator: 8x²+12x = 4x(2x+3). Cancel 4x: 2x+3 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following &nbsp;(x ≠ 0).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2/x + 3/(2x) =',
              correctAnswer: '7/(2x)',
              correctAnswers: ['7/(2x)', '7/2x'],
              explanation: 'LCM = 2x. Convert: 4/(2x) + 3/(2x) = 7/(2x) ✓',
            },
            {
              label: 'b) 5/x − 2/x² =',
              correctAnswer: '(5x-2)/x²',
              correctAnswers: ['(5x-2)/x²', '(5x-2)/x^2'],
              explanation: 'LCM = x². Convert: 5x/x² − 2/x² = (5x−2)/x² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Calculate 4/(3x) + 5/(6x²) − 1/(2x) &nbsp;(x ≠ 0) and simplify fully.',
          answer: 'LCM of 3x, 6x², 2x is 6x².\nConvert: 8x/(6x²) + 5/(6x²) − 3x/(6x²).\nCombine numerators: (8x + 5 − 3x)/(6x²) = (5x + 5)/(6x²).\nFactor: 5(x + 1)/(6x²).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to simplify add and subtract algebraic fractions with monomial denominators using LCM colour coded orange with converted fractions blue and simplified answer green',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — Expand (x+3)(x²+2x-1) ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Expand (x+3)(x²+2x-1).',
      answer: 'x³+5x²+5x-3',
      checkMode: 'auto',
      correctAnswer: 'x³+5x²+5x-3',
      correctAnswers: ['x³+5x²+5x-3', 'x^3+5x^2+5x-3'],
      explanation: 'Distribute x: x³+2x²-x. Distribute +3: 3x²+6x-3. Combine: x³+(2+3)x²+(-1+6)x-3 = x³+5x²+5x-3.',
    },

    // ── Q2 Medium — Expand (2x-3)(x²+x+4) ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Expand (2x-3)(x²+x+4).',
      answer: '2x³-x²+5x-12',
      checkMode: 'auto',
      correctAnswer: '2x³-x²+5x-12',
      correctAnswers: ['2x³-x²+5x-12', '2x^3-x^2+5x-12'],
      explanation: 'Distribute 2x: 2x³+2x²+8x. Distribute -3: -3x²-3x-12. Combine: 2x³+(2-3)x²+(8-3)x-12 = 2x³-x²+5x-12.',
    },

    // ── Q3 Hard — Check Sipho's expansion of (x-1)(x²+x+1) ──────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho expands (x-1)(x²+x+1) and gets x³-1. Check his answer.',
      answer: 'Correct — distributing fully gives x³+x²+x-x²-x-1=x³-1.',
      checkMode: 'self',
    },

    // ── Q4 Easy — Factorise x²-3x-10 ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Factorise x²-3x-10.',
      answer: '(x-5)(x+2)',
      checkMode: 'auto',
      correctAnswer: '(x-5)(x+2)',
      correctAnswers: ['(x-5)(x+2)', '(x+2)(x-5)'],
      explanation: 'Find two numbers multiplying to -10 and adding to -3: -5 and 2. Answer: (x-5)(x+2). Check: (x-5)(x+2)=x²+2x-5x-10=x²-3x-10 ✓',
    },

    // ── Q5 Medium — Factorise 2x²+7x+3 ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise 2x²+7x+3.',
      answer: '(2x+1)(x+3)',
      checkMode: 'auto',
      correctAnswer: '(2x+1)(x+3)',
      correctAnswers: ['(2x+1)(x+3)', '(x+3)(2x+1)'],
      explanation: 'a×c=6. Numbers multiplying to 6, adding to 7: 1 and 6. Split: 2x²+x+6x+3. Group: x(2x+1)+3(2x+1)=(2x+1)(x+3). Check: (2x+1)(x+3)=2x²+6x+x+3=2x²+7x+3 ✓',
    },

    // ── Q6 Hard — Factorise 6x²-13x+6 using a×c method ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise 6x²-13x+6, showing the a×c method clearly.',
      answer: 'a×c=36. Numbers multiplying to 36, adding to -13: -9 and -4. Split: 6x²-9x-4x+6. Group: 3x(2x-3)-2(2x-3)=(3x-2)(2x-3).',
      checkMode: 'self',
    },

    // ── Q7 Medium — Factorise by grouping: ab+ac+db+dc ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise by grouping: ab+ac+db+dc.',
      answer: '(b+c)(a+d)',
      checkMode: 'auto',
      correctAnswer: '(b+c)(a+d)',
      correctAnswers: ['(b+c)(a+d)', '(a+d)(b+c)'],
      explanation: 'Group: (ab+ac)+(db+dc). Factor: a(b+c)+d(b+c)=(b+c)(a+d).',
    },

    // ── Q8 Hard — Factorise x³-2x²-9x+18 fully ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise x³-2x²-9x+18 fully.',
      answer: 'Group: x²(x-2)-9(x-2)=(x-2)(x²-9)=(x-2)(x-3)(x+3).',
      checkMode: 'self',
    },

    // ── Q9 Easy — Simplify (4x²+8x)/4x ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify (4x²+8x)/4x.',
      answer: 'x+2',
      checkMode: 'auto',
      correctAnswer: 'x+2',
      explanation: 'Factor numerator: 4x(x+2). Cancel 4x: x+2.',
    },

    // ── Q10 Medium — Calculate 2/x + 7/3x ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 2/x + 7/3x.',
      answer: '13/3x',
      checkMode: 'auto',
      correctAnswer: '13/(3x)',
      correctAnswers: ['13/(3x)', '13/3x'],
      explanation: 'LCM=3x. Convert first fraction: 2/x=6/3x. Add: 6/3x+7/3x=13/3x.',
    },

    // ── Q11 Hard — Calculate 5/x² - 2/x showing the LCM step ─────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 5/x² - 2/x, showing the LCM step.',
      answer: 'LCM=x². Convert: 5/x² - 2x/x². Combine: (5-2x)/x².',
      checkMode: 'self',
    },

    // ── Q12 Medium — Factorise 4x²-9 ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise 4x²-9.',
      answer: '(2x-3)(2x+3)',
      checkMode: 'auto',
      correctAnswer: '(2x-3)(2x+3)',
      correctAnswers: ['(2x-3)(2x+3)', '(2x+3)(2x-3)'],
      explanation: 'Difference of squares: (2x)²-3²=(2x-3)(2x+3). Check: (2x-3)(2x+3)=4x²-9 ✓',
    },

    // ── Q13 Hard — Lerato's claim about 3x²+12x+9 ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says 3x²+12x+9 cannot be factorised since 3 is not a perfect square. Is she correct?',
      answer: 'No — factor out the common factor 3 first: 3(x²+4x+3)=3(x+1)(x+3).',
      checkMode: 'self',
    },

    // ── Q14 Hard — Expand (x+4)(2x²-3x+5) ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Expand (x+4)(2x²-3x+5).',
      answer: '2x³+5x²-7x+20',
      checkMode: 'auto',
      correctAnswer: '2x³+5x²-7x+20',
      correctAnswers: ['2x³+5x²-7x+20', '2x^3+5x^2-7x+20'],
      explanation: 'Distribute x: 2x³-3x²+5x. Distribute +4: 8x²-12x+20. Combine: 2x³+(-3+8)x²+(5-12)x+20=2x³+5x²-7x+20.',
    },

    // ── Q15 Medium — Factorise x²-11x+24 ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise x²-11x+24.',
      answer: '(x-8)(x-3)',
      checkMode: 'auto',
      correctAnswer: '(x-8)(x-3)',
      correctAnswers: ['(x-8)(x-3)', '(x-3)(x-8)'],
      explanation: 'Find two numbers multiplying to 24 and adding to -11: -8 and -3. Answer: (x-8)(x-3). Check: (x-8)(x-3)=x²-3x-8x+24=x²-11x+24 ✓',
    },

    // ── Q16 Hard — Factorise by grouping: 2x³+6x²-x-3 ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise by grouping: 2x³+6x²-x-3.',
      answer: 'Group: 2x²(x+3)-1(x+3)=(x+3)(2x²-1).',
      checkMode: 'self',
    },

    // ── Q17 Hard — Calculate 1/2x + 3/4x - 1/x ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 1/2x + 3/4x - 1/x.',
      answer: '1/4x',
      checkMode: 'auto',
      correctAnswer: '1/(4x)',
      correctAnswers: ['1/(4x)', '1/4x'],
      explanation: 'LCM=4x. Convert: 2/4x+3/4x-4/4x=(2+3-4)/4x=1/4x.',
    },

    // ── Q18 Hard — Factorise 5x²-20x-25 fully ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise 5x²-20x-25 fully, including the common factor.',
      answer: 'Factor out 5: 5(x²-4x-5)=5(x-5)(x+1).',
      checkMode: 'self',
    },

    // ── Q19 Hard — Expand and simplify (x-2)(x²+2x+4) ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Expand and simplify (x-2)(x²+2x+4).',
      answer: 'x³-8',
      checkMode: 'auto',
      correctAnswer: 'x³-8',
      correctAnswers: ['x³-8', 'x^3-8'],
      explanation: 'Distribute x: x³+2x²+4x. Distribute -2: -2x²-4x-8. Combine: x³+(2-2)x²+(4-4)x-8=x³-8.',
    },

    // ── Q20 Hard — Thabo's difference of cubes claim ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says (x-2)(x²+2x+4)=x³-8 is an example of a special factoring pattern (difference of cubes). Is he correct? Explain.',
      answer: 'Yes — this matches the difference of cubes pattern a³-b³=(a-b)(a²+ab+b²), where a=x and b=2.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered algebraic expressions.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Expand binomial × trinomial
    // Block 2 (3-5):   Factorise trinomial (a = 1)
    // Block 3 (6-9):   Factorise trinomial (a ≠ 1) — a×c method
    // Block 4 (10-12): Factorise by grouping in pairs
    // Block 5 (13-15): Simplify a single algebraic fraction (factor & cancel)
    // Block 6 (16-19): Add/subtract algebraic fractions with LCM / multi-step / error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Expand binomial × trinomial (Easy)
        { difficulty: 'Easy', question: 'Expand (x + 1)(x² + 2x + 3).', checkMode: 'auto', correctAnswer: 'x³+3x²+5x+3', correctAnswers: ['x³+3x²+5x+3', 'x^3+3x^2+5x+3'], answer: 'x³ + 3x² + 5x + 3', explanation: 'Distribute x: x³+2x²+3x. Distribute +1: x²+2x+3. Combine: x³+(2+1)x²+(3+2)x+3 = x³+3x²+5x+3.' },
        { difficulty: 'Easy', question: 'Expand (x + 4)(x² − 3x + 2).', checkMode: 'auto', correctAnswer: 'x³+x²-10x+8', correctAnswers: ['x³+x²-10x+8', 'x³+x²−10x+8', 'x^3+x^2-10x+8', 'x^3+x^2−10x+8'], answer: 'x³ + x² − 10x + 8', explanation: 'Distribute x: x³-3x²+2x. Distribute +4: 4x²-12x+8. Combine: x³+(-3+4)x²+(2-12)x+8 = x³+x²-10x+8.' },
        { difficulty: 'Medium', question: 'Expand (2x − 1)(x² + 3x − 4).', checkMode: 'auto', correctAnswer: '2x³+5x²-11x+4', correctAnswers: ['2x³+5x²-11x+4', '2x³+5x²−11x+4', '2x^3+5x^2-11x+4', '2x^3+5x^2−11x+4'], answer: '2x³ + 5x² − 11x + 4', explanation: 'Distribute 2x: 2x³+6x²-8x. Distribute -1: -x²-3x+4. Combine: 2x³+(6-1)x²+(-8-3)x+4 = 2x³+5x²-11x+4.' },

        // Block 2 — Factorise trinomial a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Factorise x² + 9x + 20.', checkMode: 'auto', correctAnswer: '(x+4)(x+5)', correctAnswers: ['(x+4)(x+5)', '(x+5)(x+4)'], answer: '(x + 4)(x + 5)', explanation: 'Find two numbers multiplying to 20 and adding to 9: 4 and 5. Answer: (x+4)(x+5). Check: x²+5x+4x+20 = x²+9x+20 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 4x − 21.', checkMode: 'auto', correctAnswer: '(x-7)(x+3)', correctAnswers: ['(x-7)(x+3)', '(x+3)(x-7)'], answer: '(x − 7)(x + 3)', explanation: 'Find two numbers multiplying to -21 and adding to -4: -7 and 3. Answer: (x-7)(x+3). Check: x²+3x-7x-21 = x²-4x-21 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 13x + 40.', checkMode: 'auto', correctAnswer: '(x-8)(x-5)', correctAnswers: ['(x-8)(x-5)', '(x-5)(x-8)'], answer: '(x − 8)(x − 5)', explanation: 'Find two numbers multiplying to 40 and adding to -13: -8 and -5. Answer: (x-8)(x-5). Check: x²-5x-8x+40 = x²-13x+40 ✓' },

        // Block 3 — Factorise trinomial a ≠ 1, a×c method (Medium)
        { difficulty: 'Medium', question: 'Factorise 2x² + 9x + 4.', checkMode: 'auto', correctAnswer: '(x+4)(2x+1)', correctAnswers: ['(x+4)(2x+1)', '(2x+1)(x+4)'], answer: '(2x + 1)(x + 4)', explanation: 'a×c = 2×4 = 8. Numbers multiplying to 8, adding to 9: 8 and 1. Split: 2x²+8x+x+4. Group: 2x(x+4)+1(x+4) = (2x+1)(x+4).' },
        { difficulty: 'Medium', question: 'Factorise 3x² − 5x − 2.', checkMode: 'auto', correctAnswer: '(x-2)(3x+1)', correctAnswers: ['(x-2)(3x+1)', '(3x+1)(x-2)'], answer: '(3x + 1)(x − 2)', explanation: 'a×c = 3×(-2) = -6. Numbers multiplying to -6, adding to -5: -6 and 1. Split: 3x²-6x+x-2. Group: 3x(x-2)+1(x-2) = (3x+1)(x-2).' },
        { difficulty: 'Medium', question: 'Factorise 4x² − 4x − 3.', checkMode: 'auto', correctAnswer: '(2x-3)(2x+1)', correctAnswers: ['(2x-3)(2x+1)', '(2x+1)(2x-3)'], answer: '(2x − 3)(2x + 1)', explanation: 'a×c = 4×(-3) = -12. Numbers multiplying to -12, adding to -4: -6 and 2. Split: 4x²-6x+2x-3. Group: 2x(2x-3)+1(2x-3) = (2x-3)(2x+1).' },
        { difficulty: 'Hard', question: 'Factorise 6x² + 7x − 3.', checkMode: 'auto', correctAnswer: '(2x+3)(3x-1)', correctAnswers: ['(2x+3)(3x-1)', '(3x-1)(2x+3)'], answer: '(2x + 3)(3x − 1)', explanation: 'a×c = 6×(-3) = -18. Numbers multiplying to -18, adding to 7: 9 and -2. Split: 6x²+9x-2x-3. Group: 3x(2x+3)-1(2x+3) = (2x+3)(3x-1).' },

        // Block 4 — Factorise by grouping in pairs (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise by grouping: 4x² + 12x + 3x + 9.', checkMode: 'auto', correctAnswer: '(x+3)(4x+3)', correctAnswers: ['(x+3)(4x+3)', '(4x+3)(x+3)'], answer: '(x + 3)(4x + 3)', explanation: 'Group: (4x²+12x)+(3x+9). Factor each pair: 4x(x+3)+3(x+3). Common binomial: (x+3)(4x+3).' },
        { difficulty: 'Medium', question: 'Factorise by grouping: ax + 3a + bx + 3b.', checkMode: 'auto', correctAnswer: '(a+b)(x+3)', correctAnswers: ['(a+b)(x+3)', '(x+3)(a+b)'], answer: '(a + b)(x + 3)', explanation: 'Group: (ax+3a)+(bx+3b). Factor each pair: a(x+3)+b(x+3). Common binomial: (a+b)(x+3).' },
        { difficulty: 'Hard', question: 'Factorise x³ + 2x² − 9x − 18 fully.', checkMode: 'auto', correctAnswer: '(x-3)(x+2)(x+3)', correctAnswers: ['(x-3)(x+2)(x+3)', '(x+2)(x-3)(x+3)', '(x+2)(x+3)(x-3)', '(x+3)(x+2)(x-3)', '(x+3)(x-3)(x+2)', '(x-3)(x+3)(x+2)'], answer: '(x − 3)(x + 3)(x + 2)', explanation: 'Group: (x³+2x²)+(-9x-18). Factor: x²(x+2)-9(x+2). Common binomial: (x+2)(x²-9). Recognise x²-9 as a difference of squares: (x-3)(x+3). Final: (x+2)(x-3)(x+3).' },

        // Block 5 — Simplify a single algebraic fraction (Hard)
        { difficulty: 'Hard', question: 'Simplify (10x² + 15x) / 5x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x+3', correctAnswers: ['2x+3', '2x + 3'], answer: '2x + 3', explanation: 'Factor the numerator: 10x²+15x = 5x(2x+3). Cancel the common factor 5x: 2x+3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (6x² − 9x) / 3x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Factor the numerator: 6x²-9x = 3x(2x-3). Cancel the common factor 3x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (x² + 7x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+7', correctAnswers: ['x+7', 'x + 7'], answer: 'x + 7', explanation: 'Factor the numerator: x²+7x = x(x+7). Cancel the common factor x: x+7 (x ≠ 0).' },

        // Block 6 — Add/subtract fractions with LCM / multi-step / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Calculate 3/x + 4/(2x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '5/x', correctAnswers: ['5/x'], answer: '5/x', explanation: 'LCM of x and 2x is 2x. Convert: 6/(2x)+4/(2x) = 10/(2x). Simplify: 10/(2x) = 5/x.' },
        { difficulty: 'Hard', question: 'Calculate 5/x² − 3/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(5-3x)/x²', correctAnswers: ['(5-3x)/x²', '(5−3x)/x²', '(5-3x)/x^2', '(5−3x)/x^2'], answer: '(5 − 3x)/x²', explanation: 'LCM of x² and x is x². 5/x² already has the LCM denominator. Convert 3/x = 3x/x². Combine: (5-3x)/x².' },
        { difficulty: 'Hard', question: 'Calculate 2/(3x) + 1/(4x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '11/(12x)', correctAnswers: ['11/(12x)', '11/12x'], answer: '11/(12x)', explanation: 'LCM of 3x and 4x is 12x. Convert: 8/(12x)+3/(12x) = 11/(12x).' },
        { difficulty: 'Hard', question: 'Simplify fully: (x² − 9)/(x + 3) &nbsp;(x ≠ −3).', checkMode: 'auto', correctAnswer: 'x-3', correctAnswers: ['x-3', 'x − 3'], answer: 'x − 3', explanation: 'Recognise x²-9 as a difference of squares: x²-9 = (x-3)(x+3). Write the fraction as (x-3)(x+3)/(x+3) and cancel (x+3): x-3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered expanding, factorising and simplifying algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the a×c method or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on factorising and grouping, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Expand binomial × trinomial (Easy)
        { difficulty: 'Easy', question: 'Expand (x + 2)(x² + x + 4).', checkMode: 'auto', correctAnswer: 'x³+3x²+6x+8', correctAnswers: ['x³+3x²+6x+8', 'x^3+3x^2+6x+8'], answer: 'x³ + 3x² + 6x + 8', explanation: 'Distribute x: x³+x²+4x. Distribute +2: 2x²+2x+8. Combine: x³+(1+2)x²+(4+2)x+8 = x³+3x²+6x+8.' },
        { difficulty: 'Easy', question: 'Expand (x + 5)(x² − 2x + 1).', checkMode: 'auto', correctAnswer: 'x³+3x²-9x+5', correctAnswers: ['x³+3x²-9x+5', 'x³+3x²−9x+5', 'x^3+3x^2-9x+5', 'x^3+3x^2−9x+5'], answer: 'x³ + 3x² − 9x + 5', explanation: 'Distribute x: x³-2x²+x. Distribute +5: 5x²-10x+5. Combine: x³+(-2+5)x²+(1-10)x+5 = x³+3x²-9x+5.' },
        { difficulty: 'Medium', question: 'Expand (3x − 2)(x² + x − 5).', checkMode: 'auto', correctAnswer: '3x³+x²-17x+10', correctAnswers: ['3x³+x²-17x+10', '3x³+x²−17x+10', '3x^3+x^2-17x+10', '3x^3+x^2−17x+10'], answer: '3x³ + x² − 17x + 10', explanation: 'Distribute 3x: 3x³+3x²-15x. Distribute -2: -2x²-2x+10. Combine: 3x³+(3-2)x²+(-15-2)x+10 = 3x³+x²-17x+10.' },

        // Block 2 — Factorise trinomial a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Factorise x² + 10x + 21.', checkMode: 'auto', correctAnswer: '(x+3)(x+7)', correctAnswers: ['(x+3)(x+7)', '(x+7)(x+3)'], answer: '(x + 3)(x + 7)', explanation: 'Find two numbers multiplying to 21 and adding to 10: 3 and 7. Answer: (x+3)(x+7). Check: x²+7x+3x+21 = x²+10x+21 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 2x − 24.', checkMode: 'auto', correctAnswer: '(x-6)(x+4)', correctAnswers: ['(x-6)(x+4)', '(x+4)(x-6)'], answer: '(x − 6)(x + 4)', explanation: 'Find two numbers multiplying to -24 and adding to -2: -6 and 4. Answer: (x-6)(x+4). Check: x²+4x-6x-24 = x²-2x-24 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 12x + 35.', checkMode: 'auto', correctAnswer: '(x-7)(x-5)', correctAnswers: ['(x-7)(x-5)', '(x-5)(x-7)'], answer: '(x − 7)(x − 5)', explanation: 'Find two numbers multiplying to 35 and adding to -12: -7 and -5. Answer: (x-7)(x-5). Check: x²-5x-7x+35 = x²-12x+35 ✓' },

        // Block 3 — Factorise trinomial a ≠ 1, a×c method (Medium)
        { difficulty: 'Medium', question: 'Factorise 2x² + 11x + 5.', checkMode: 'auto', correctAnswer: '(x+5)(2x+1)', correctAnswers: ['(x+5)(2x+1)', '(2x+1)(x+5)'], answer: '(2x + 1)(x + 5)', explanation: 'a×c = 2×5 = 10. Numbers multiplying to 10, adding to 11: 10 and 1. Split: 2x²+10x+x+5. Group: 2x(x+5)+1(x+5) = (2x+1)(x+5).' },
        { difficulty: 'Medium', question: 'Factorise 3x² + 2x − 8.', checkMode: 'auto', correctAnswer: '(x+2)(3x-4)', correctAnswers: ['(x+2)(3x-4)', '(3x-4)(x+2)'], answer: '(3x − 4)(x + 2)', explanation: 'a×c = 3×(-8) = -24. Numbers multiplying to -24, adding to 2: 6 and -4. Split: 3x²+6x-4x-8. Group: 3x(x+2)-4(x+2) = (3x-4)(x+2).' },
        { difficulty: 'Medium', question: 'Factorise 4x² + 4x − 3.', checkMode: 'auto', correctAnswer: '(2x-1)(2x+3)', correctAnswers: ['(2x-1)(2x+3)', '(2x+3)(2x-1)'], answer: '(2x − 1)(2x + 3)', explanation: 'a×c = 4×(-3) = -12. Numbers multiplying to -12, adding to 4: 6 and -2. Split: 4x²+6x-2x-3. Group: 2x(2x+3)-1(2x+3) = (2x-1)(2x+3).' },
        { difficulty: 'Hard', question: 'Factorise 6x² − 13x + 6.', checkMode: 'auto', correctAnswer: '(2x-3)(3x-2)', correctAnswers: ['(2x-3)(3x-2)', '(3x-2)(2x-3)'], answer: '(2x − 3)(3x − 2)', explanation: 'a×c = 6×6 = 36. Numbers multiplying to 36, adding to -13: -9 and -4. Split: 6x²-9x-4x+6. Group: 3x(2x-3)-2(2x-3) = (2x-3)(3x-2).' },

        // Block 4 — Factorise by grouping in pairs (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise by grouping: 3x² + 15x + 2x + 10.', checkMode: 'auto', correctAnswer: '(x+5)(3x+2)', correctAnswers: ['(x+5)(3x+2)', '(3x+2)(x+5)'], answer: '(x + 5)(3x + 2)', explanation: 'Group: (3x²+15x)+(2x+10). Factor each pair: 3x(x+5)+2(x+5). Common binomial: (x+5)(3x+2).' },
        { difficulty: 'Medium', question: 'Factorise by grouping: 2ax − 2ay + bx − by.', checkMode: 'auto', correctAnswer: '(2a+b)(x-y)', correctAnswers: ['(2a+b)(x-y)', '(x-y)(2a+b)'], answer: '(2a + b)(x − y)', explanation: 'Group: (2ax-2ay)+(bx-by). Factor each pair: 2a(x-y)+b(x-y). Common binomial: (2a+b)(x-y).' },
        { difficulty: 'Hard', question: 'Factorise x³ + 5x² − 4x − 20 fully.', checkMode: 'auto', correctAnswer: '(x-2)(x+2)(x+5)', correctAnswers: ['(x-2)(x+2)(x+5)', '(x+2)(x-2)(x+5)', '(x+2)(x+5)(x-2)', '(x+5)(x+2)(x-2)', '(x+5)(x-2)(x+2)', '(x-2)(x+5)(x+2)'], answer: '(x − 2)(x + 2)(x + 5)', explanation: 'Group: (x³+5x²)+(-4x-20). Factor: x²(x+5)-4(x+5). Common binomial: (x+5)(x²-4). Recognise x²-4 as a difference of squares: (x-2)(x+2). Final: (x+5)(x-2)(x+2).' },

        // Block 5 — Simplify a single algebraic fraction (Hard)
        { difficulty: 'Hard', question: 'Simplify (12x² + 8x) / 4x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '3x+2', correctAnswers: ['3x+2', '3x + 2'], answer: '3x + 2', explanation: 'Factor the numerator: 12x²+8x = 4x(3x+2). Cancel the common factor 4x: 3x+2 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (10x² − 15x) / 5x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Factor the numerator: 10x²-15x = 5x(2x-3). Cancel the common factor 5x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (x² + 9x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+9', correctAnswers: ['x+9', 'x + 9'], answer: 'x + 9', explanation: 'Factor the numerator: x²+9x = x(x+9). Cancel the common factor x: x+9 (x ≠ 0).' },

        // Block 6 — Add/subtract fractions with LCM / multi-step / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Calculate 5/x + 3/(2x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '13/(2x)', correctAnswers: ['13/(2x)', '13/2x'], answer: '13/(2x)', explanation: 'LCM of x and 2x is 2x. Convert: 10/(2x)+3/(2x) = 13/(2x).' },
        { difficulty: 'Hard', question: 'Calculate 7/x² − 2/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(7-2x)/x²', correctAnswers: ['(7-2x)/x²', '(7−2x)/x²', '(7-2x)/x^2', '(7−2x)/x^2'], answer: '(7 − 2x)/x²', explanation: 'LCM of x² and x is x². 7/x² already has the LCM denominator. Convert 2/x = 2x/x². Combine: (7-2x)/x².' },
        { difficulty: 'Hard', question: 'Calculate 3/(2x) + 1/(5x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '17/(10x)', correctAnswers: ['17/(10x)', '17/10x'], answer: '17/(10x)', explanation: 'LCM of 2x and 5x is 10x. Convert: 15/(10x)+2/(10x) = 17/(10x).' },
        { difficulty: 'Hard', question: 'Simplify fully: (x² − 16)/(x + 4) &nbsp;(x ≠ −4).', checkMode: 'auto', correctAnswer: 'x-4', correctAnswers: ['x-4', 'x − 4'], answer: 'x − 4', explanation: 'Recognise x²-16 as a difference of squares: x²-16 = (x-4)(x+4). Write the fraction as (x-4)(x+4)/(x+4) and cancel (x+4): x-4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered expanding, factorising and simplifying algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the a×c method or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on factorising and grouping, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Expand binomial × trinomial (Easy)
        { difficulty: 'Easy', question: 'Expand (x + 3)(x² + x + 2).', checkMode: 'auto', correctAnswer: 'x³+4x²+5x+6', correctAnswers: ['x³+4x²+5x+6', 'x^3+4x^2+5x+6'], answer: 'x³ + 4x² + 5x + 6', explanation: 'Distribute x: x³+x²+2x. Distribute +3: 3x²+3x+6. Combine: x³+(1+3)x²+(2+3)x+6 = x³+4x²+5x+6.' },
        { difficulty: 'Easy', question: 'Expand (x + 6)(x² − 4x + 3).', checkMode: 'auto', correctAnswer: 'x³+2x²-21x+18', correctAnswers: ['x³+2x²-21x+18', 'x³+2x²−21x+18', 'x^3+2x^2-21x+18', 'x^3+2x^2−21x+18'], answer: 'x³ + 2x² − 21x + 18', explanation: 'Distribute x: x³-4x²+3x. Distribute +6: 6x²-24x+18. Combine: x³+(-4+6)x²+(3-24)x+18 = x³+2x²-21x+18.' },
        { difficulty: 'Medium', question: 'Expand (2x + 3)(x² − 2x − 3).', checkMode: 'auto', correctAnswer: '2x³-x²-12x-9', correctAnswers: ['2x³-x²-12x-9', '2x³−x²−12x−9', '2x^3-x^2-12x-9', '2x^3−x^2−12x−9'], answer: '2x³ − x² − 12x − 9', explanation: 'Distribute 2x: 2x³-4x²-6x. Distribute +3: 3x²-6x-9. Combine: 2x³+(-4+3)x²+(-6-6)x-9 = 2x³-x²-12x-9.' },

        // Block 2 — Factorise trinomial a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Factorise x² + 11x + 18.', checkMode: 'auto', correctAnswer: '(x+2)(x+9)', correctAnswers: ['(x+2)(x+9)', '(x+9)(x+2)'], answer: '(x + 2)(x + 9)', explanation: 'Find two numbers multiplying to 18 and adding to 11: 2 and 9. Answer: (x+2)(x+9). Check: x²+9x+2x+18 = x²+11x+18 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 5x − 14.', checkMode: 'auto', correctAnswer: '(x-7)(x+2)', correctAnswers: ['(x-7)(x+2)', '(x+2)(x-7)'], answer: '(x − 7)(x + 2)', explanation: 'Find two numbers multiplying to -14 and adding to -5: -7 and 2. Answer: (x-7)(x+2). Check: x²+2x-7x-14 = x²-5x-14 ✓' },
        { difficulty: 'Medium', question: 'Factorise x² − 14x + 45.', checkMode: 'auto', correctAnswer: '(x-9)(x-5)', correctAnswers: ['(x-9)(x-5)', '(x-5)(x-9)'], answer: '(x − 9)(x − 5)', explanation: 'Find two numbers multiplying to 45 and adding to -14: -9 and -5. Answer: (x-9)(x-5). Check: x²-5x-9x+45 = x²-14x+45 ✓' },

        // Block 3 — Factorise trinomial a ≠ 1, a×c method (Medium)
        { difficulty: 'Medium', question: 'Factorise 2x² + 7x + 3.', checkMode: 'auto', correctAnswer: '(x+3)(2x+1)', correctAnswers: ['(x+3)(2x+1)', '(2x+1)(x+3)'], answer: '(2x + 1)(x + 3)', explanation: 'a×c = 2×3 = 6. Numbers multiplying to 6, adding to 7: 6 and 1. Split: 2x²+6x+x+3. Group: 2x(x+3)+1(x+3) = (2x+1)(x+3).' },
        { difficulty: 'Medium', question: 'Factorise 3x² − 7x − 6.', checkMode: 'auto', correctAnswer: '(x-3)(3x+2)', correctAnswers: ['(x-3)(3x+2)', '(3x+2)(x-3)'], answer: '(3x + 2)(x − 3)', explanation: 'a×c = 3×(-6) = -18. Numbers multiplying to -18, adding to -7: -9 and 2. Split: 3x²-9x+2x-6. Group: 3x(x-3)+2(x-3) = (3x+2)(x-3).' },
        { difficulty: 'Medium', question: 'Factorise 4x² − 9x + 2.', checkMode: 'auto', correctAnswer: '(x-2)(4x-1)', correctAnswers: ['(x-2)(4x-1)', '(4x-1)(x-2)'], answer: '(x − 2)(4x − 1)', explanation: 'a×c = 4×2 = 8. Numbers multiplying to 8, adding to -9: -8 and -1. Split: 4x²-8x-x+2. Group: 4x(x-2)-1(x-2) = (x-2)(4x-1).' },
        { difficulty: 'Hard', question: 'Factorise 6x² + 5x − 6.', checkMode: 'auto', correctAnswer: '(2x+3)(3x-2)', correctAnswers: ['(2x+3)(3x-2)', '(3x-2)(2x+3)'], answer: '(2x + 3)(3x − 2)', explanation: 'a×c = 6×(-6) = -36. Numbers multiplying to -36, adding to 5: 9 and -4. Split: 6x²+9x-4x-6. Group: 3x(2x+3)-2(2x+3) = (2x+3)(3x-2).' },

        // Block 4 — Factorise by grouping in pairs (Medium/Hard)
        { difficulty: 'Medium', question: 'Factorise by grouping: 2x² + 10x + 3x + 15.', checkMode: 'auto', correctAnswer: '(x+5)(2x+3)', correctAnswers: ['(x+5)(2x+3)', '(2x+3)(x+5)'], answer: '(x + 5)(2x + 3)', explanation: 'Group: (2x²+10x)+(3x+15). Factor each pair: 2x(x+5)+3(x+5). Common binomial: (x+5)(2x+3).' },
        { difficulty: 'Medium', question: 'Factorise by grouping: 3px − 3py + qx − qy.', checkMode: 'auto', correctAnswer: '(3p+q)(x-y)', correctAnswers: ['(3p+q)(x-y)', '(x-y)(3p+q)'], answer: '(3p + q)(x − y)', explanation: 'Group: (3px-3py)+(qx-qy). Factor each pair: 3p(x-y)+q(x-y). Common binomial: (3p+q)(x-y).' },
        { difficulty: 'Hard', question: 'Factorise x³ − 3x² − 25x + 75 fully.', checkMode: 'auto', correctAnswer: '(x-3)(x-5)(x+5)', correctAnswers: ['(x-3)(x-5)(x+5)', '(x-5)(x-3)(x+5)', '(x-5)(x+5)(x-3)', '(x+5)(x-5)(x-3)', '(x+5)(x-3)(x-5)', '(x-3)(x+5)(x-5)'], answer: '(x − 3)(x − 5)(x + 5)', explanation: 'Group: (x³-3x²)+(-25x+75). Factor: x²(x-3)-25(x-3). Common binomial: (x-3)(x²-25). Recognise x²-25 as a difference of squares: (x-5)(x+5). Final: (x-3)(x-5)(x+5).' },

        // Block 5 — Simplify a single algebraic fraction (Hard)
        { difficulty: 'Hard', question: 'Simplify (14x² + 21x) / 7x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x+3', correctAnswers: ['2x+3', '2x + 3'], answer: '2x + 3', explanation: 'Factor the numerator: 14x²+21x = 7x(2x+3). Cancel the common factor 7x: 2x+3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (8x² − 12x) / 4x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Factor the numerator: 8x²-12x = 4x(2x-3). Cancel the common factor 4x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Simplify (x² + 5x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+5', correctAnswers: ['x+5', 'x + 5'], answer: 'x + 5', explanation: 'Factor the numerator: x²+5x = x(x+5). Cancel the common factor x: x+5 (x ≠ 0).' },

        // Block 6 — Add/subtract fractions with LCM / multi-step / error-spotting (Hard)
        { difficulty: 'Hard', question: 'Calculate 4/x + 5/(2x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '13/(2x)', correctAnswers: ['13/(2x)', '13/2x'], answer: '13/(2x)', explanation: 'LCM of x and 2x is 2x. Convert: 8/(2x)+5/(2x) = 13/(2x).' },
        { difficulty: 'Hard', question: 'Calculate 3/x² − 2/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(3-2x)/x²', correctAnswers: ['(3-2x)/x²', '(3−2x)/x²', '(3-2x)/x^2', '(3−2x)/x^2'], answer: '(3 − 2x)/x²', explanation: 'LCM of x² and x is x². 3/x² already has the LCM denominator. Convert 2/x = 2x/x². Combine: (3-2x)/x².' },
        { difficulty: 'Hard', question: 'Calculate 5/(3x) + 1/(2x) &nbsp;(x ≠ 0), simplifying fully.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'LCM of 3x and 2x is 6x. Convert: 10/(6x)+3/(6x) = 13/(6x).' },
        { difficulty: 'Hard', question: 'Simplify fully: (x² − 25)/(x + 5) &nbsp;(x ≠ −5).', checkMode: 'auto', correctAnswer: 'x-5', correctAnswers: ['x-5', 'x − 5'], answer: 'x − 5', explanation: 'Recognise x²-25 as a difference of squares: x²-25 = (x-5)(x+5). Write the fraction as (x-5)(x+5)/(x+5) and cancel (x+5): x-5.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered expanding, factorising and simplifying algebraic expressions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the a×c method or algebraic fractions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on factorising and grouping, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
