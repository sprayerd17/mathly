import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────────
// quotient term    → blue   (#2563eb)
// subtraction step → orange (#ea580c)
// remainder        → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions — Polynomials',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: POLYNOMIALS AND LONG DIVISION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'polynomials-long-division',
      title: 'Revision — Polynomials and Long Division',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">A polynomial of degree n has the form a<sub>n</sub>x<sup>n</sup>+a<sub>n−1</sub>x<sup>n−1</sup>+…+a<sub>1</sub>x+a<sub>0</sub>, where the coefficients are real numbers and n is a non-negative integer. We revise <strong>polynomial long division</strong> — dividing a polynomial of higher degree by a polynomial of lower degree to find a <strong>quotient</strong> and <strong>remainder</strong>, similar to long division with whole numbers.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('quotient term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('subtraction step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('remainder')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Quotient</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The polynomial result of the division. Its degree equals the dividend's degree minus the divisor's degree.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Remainder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">What is left after dividing. If the remainder is zero, the divisor is a factor of the dividend.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Division Algorithm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">p(x) = d(x)·q(x) + r(x), where p is the dividend, d the divisor, q the quotient, and r the remainder.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for polynomial long division</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Divide')} — Divide the leading term of the current dividend by the leading term of the divisor. This gives the next term of the ${bl('quotient')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiply & Subtract')} — Multiply the quotient term by the whole divisor, then ${or('subtract')} from the current dividend.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Repeat</strong> — Repeat until the degree of what remains is less than the degree of the divisor. What remains is the ${gr('remainder')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tip: include zero-coefficient terms</p>` +
        `<p style="margin:0;color:#1e3a8a;">If a power of x is missing from the polynomial (for example x<sup>2</sup> is absent in x<sup>3</sup>−3x+5), write it as <strong>0x<sup>2</sup></strong> in your working to keep the columns aligned correctly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Divide x³+2x²−5x−6 by (x−2) using polynomial long division.',
          answer: `Quotient: ${bl('x²+4x+3')},  ${gr('Remainder: 0')}`,
          steps: [
            `${bl('Divide:')} x<sup>3</sup> ÷ x = ${bl('x²')}. Write ${bl('x²')} as the first term of the quotient.`,
            `${or('Multiply:')} ${bl('x²')}(x−2) = x<sup>3</sup>−2x<sup>2</sup>. ${or('Subtract:')} (x<sup>3</sup>+2x<sup>2</sup>−5x−6) − (x<sup>3</sup>−2x<sup>2</sup>) = 4x<sup>2</sup>−5x−6.`,
            `${bl('Divide:')} 4x<sup>2</sup> ÷ x = ${bl('4x')}. Write ${bl('4x')} as the next term of the quotient.`,
            `${or('Multiply:')} ${bl('4x')}(x−2) = 4x<sup>2</sup>−8x. ${or('Subtract:')} (4x<sup>2</sup>−5x−6) − (4x<sup>2</sup>−8x) = 3x−6.`,
            `${bl('Divide:')} 3x ÷ x = ${bl('3')}. Write ${bl('3')} as the next term of the quotient.`,
            `${or('Multiply:')} ${bl('3')}(x−2) = 3x−6. ${or('Subtract:')} (3x−6) − (3x−6) = ${gr('0')}.`,
            `<strong>Result:</strong> Quotient = ${bl('x²+4x+3')}, ${gr('Remainder = 0')}. So x<sup>3</sup>+2x<sup>2</sup>−5x−6 = (x−2)(x<sup>2</sup>+4x+3).`,
          ],
        },
        {
          question: 'Sipho divides x³−3x+5 by (x+1). Find the quotient and remainder.',
          answer: `Quotient: ${bl('x²−x−2')},  ${gr('Remainder: 7')}`,
          steps: [
            `<strong>Note:</strong> x<sup>3</sup>−3x+5 has no x<sup>2</sup> term. Rewrite as x<sup>3</sup>+<strong>0x<sup>2</sup></strong>−3x+5 to keep columns aligned.`,
            `${bl('Divide:')} x<sup>3</sup> ÷ x = ${bl('x²')}. Write ${bl('x²')} as the first term of the quotient.`,
            `${or('Multiply:')} ${bl('x²')}(x+1) = x<sup>3</sup>+x<sup>2</sup>. ${or('Subtract:')} (x<sup>3</sup>+0x<sup>2</sup>−3x+5) − (x<sup>3</sup>+x<sup>2</sup>) = −x<sup>2</sup>−3x+5.`,
            `${bl('Divide:')} −x<sup>2</sup> ÷ x = ${bl('−x')}. Write ${bl('−x')} as the next term of the quotient.`,
            `${or('Multiply:')} ${bl('−x')}(x+1) = −x<sup>2</sup>−x. ${or('Subtract:')} (−x<sup>2</sup>−3x+5) − (−x<sup>2</sup>−x) = −2x+5.`,
            `${bl('Divide:')} −2x ÷ x = ${bl('−2')}. Write ${bl('−2')} as the next term of the quotient.`,
            `${or('Multiply:')} ${bl('−2')}(x+1) = −2x−2. ${or('Subtract:')} (−2x+5) − (−2x−2) = ${gr('7')}.`,
            `<strong>Result:</strong> Quotient = ${bl('x²−x−2')}, ${gr('Remainder = 7')}. So x<sup>3</sup>−3x+5 = (x+1)(x<sup>2</sup>−x−2) + 7.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Divide x² + 8x + 15 by (x + 3) using polynomial long division. State the quotient and remainder.',
          answer: 'Quotient: x + 5, Remainder: 0\n\nSteps:\nx²÷x = x. Multiply: x(x+3)=x²+3x. Subtract: 5x+15.\n5x÷x = 5. Multiply: 5(x+3)=5x+15. Subtract: 0.\nQuotient: x+5, Remainder: 0 ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following using polynomial long division.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (x³ + 5x² + 8x + 4) ÷ (x + 1) =',
              correctAnswer: 'x²+4x+4',
              correctAnswers: ['x²+4x+4', 'x^2+4x+4'],
              explanation: 'Divide: x³÷x=x². Multiply: x²(x+1)=x³+x². Subtract: 4x²+8x+4.\nDivide: 4x²÷x=4x. Multiply: 4x(x+1)=4x²+4x. Subtract: 4x+4.\nDivide: 4x÷x=4. Multiply: 4(x+1)=4x+4. Subtract: 0.\nQuotient: x²+4x+4, Remainder: 0 ✓',
            },
            {
              label: 'b) (x³ − 2x² − 5x + 6) ÷ (x − 3) =',
              correctAnswer: 'x²+x-2',
              correctAnswers: ['x²+x-2', 'x^2+x-2'],
              explanation: 'Divide: x³÷x=x². Multiply: x²(x-3)=x³-3x². Subtract: x²-5x+6.\nDivide: x²÷x=x. Multiply: x(x-3)=x²-3x. Subtract: -2x+6.\nDivide: -2x÷x=-2. Multiply: -2(x-3)=-2x+6. Subtract: 0.\nQuotient: x²+x-2, Remainder: 0 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Given p(x) = 2x³ + x² − 13x + 6:\n\na) Divide p(x) by (x − 2) and state the quotient.\nb) Hence fully factorise p(x).\nc) Solve p(x) = 0.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Quotient when divided by (x − 2)',
              correctAnswer: '2x²+5x-3',
              correctAnswers: ['2x²+5x-3', '2x^2+5x-3'],
              explanation: 'Divide: 2x³÷x=2x². Multiply: 2x²(x-2)=2x³-4x². Subtract: 5x²-13x+6.\nDivide: 5x²÷x=5x. Multiply: 5x(x-2)=5x²-10x. Subtract: -3x+6.\nDivide: -3x÷x=-3. Multiply: -3(x-2)=-3x+6. Subtract: 0.\nQuotient: 2x²+5x-3 ✓',
            },
            {
              label: 'b) Full factorisation of p(x)',
              correctAnswer: '(x-2)(2x-1)(x+3)',
              correctAnswers: ['(x-2)(2x-1)(x+3)', '(x-2)(x+3)(2x-1)'],
              explanation: 'Factorise the quotient: 2x²+5x-3 = (2x-1)(x+3).\nFull factorisation: p(x) = (x-2)(2x-1)(x+3) ✓',
            },
            {
              label: 'c) Solutions to p(x) = 0',
              correctAnswer: 'x=2, x=1/2, x=-3',
              correctAnswers: ['x=2, x=1/2, x=-3', 'x=2 x=1/2 x=-3', '2; 1/2; -3'],
              explanation: 'Set each factor to zero:\nx−2=0 → x=2\n2x−1=0 → x=½\nx+3=0 → x=−3 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide a cubic polynomial by a linear factor using polynomial long division with colour coded quotient terms and subtraction steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE REMAINDER AND FACTOR THEOREMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'remainder-factor-theorems',
      title: 'The Remainder and Factor Theorems',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>Remainder Theorem</strong> states that when a polynomial p(x) is divided by (x−a), the remainder equals <strong>p(a)</strong> — meaning we can find the remainder without performing the full long division. The <strong>Factor Theorem</strong> (a direct consequence) states that (x−a) is a factor of p(x) <strong>if and only if p(a)=0</strong>. We use the Factor Theorem to identify factors of polynomials by testing values of a that make p(a)=0.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('test value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('substitution result')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('factor conclusion')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two theorems</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Remainder Theorem</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When p(x) is divided by (x−a), the remainder = ${bl('p(a)')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Note: for (x+a), substitute x = ${bl('−a')} since x+a = x−(−a).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Factor Theorem</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">(x−a) is a factor of p(x) ${gr('if and only if p(a)=0')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">This means zero remainder ↔ exact factor.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Testing strategy — which values to try?</p>` +
        `<p style="margin:0;color:#78350f;">For a polynomial with integer coefficients, try factors of the constant term (the number with no x). For example, if the constant term is 6, try x = ±1, ±2, ±3, ±6 until you find one that makes p(a)=0.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-top:12px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">What CAPS actually examines here</p>` +
        `<p style="margin:0;color:#1e3a8a;">The <strong>Factor Theorem</strong> — using p(a)=0 to identify factors — is the examinable skill, since it's the tool you'll use throughout cubic factorisation. The Remainder Theorem is introduced here mainly to explain <em>why</em> the Factor Theorem works; you won't be asked to calculate an isolated, non-zero remainder as a stand-alone exam question.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Use the Remainder Theorem to find the remainder when p(x)=x³−4x²+x+6 is divided by (x−3).',
          answer: `${gr('Remainder = 0')}. Since p(3)=0, by the Factor Theorem (x−3) is also a factor of p(x).`,
          steps: [
            `The Remainder Theorem says: substitute x = ${bl('3')} into p(x).`,
            `${or('p(3)')} = (3)<sup>3</sup> − 4(3)<sup>2</sup> + (3) + 6 = ${or('27 − 36 + 3 + 6')} = ${or('0')}.`,
            `${gr('The remainder is 0.')} Since the remainder is zero, the Factor Theorem also tells us that ${gr('(x−3) is a factor of p(x)')}.`,
          ],
        },
        {
          question: 'Show that (x+2) is a factor of p(x)=x³+3x²−4x−12.',
          answer: `${gr('(x+2) is a factor because p(−2)=0.')}`,
          steps: [
            `For the factor (x+2), substitute x = ${bl('−2')} (since x+2 = x−(−2)).`,
            `${or('p(−2)')} = (−2)<sup>3</sup> + 3(−2)<sup>2</sup> − 4(−2) − 12 = ${or('−8 + 12 + 8 − 12')} = ${or('0')}.`,
            `Since ${or('p(−2) = 0')}, by the Factor Theorem ${gr('(x+2) is a factor of p(x)')}. ✓`,
          ],
        },
        {
          question: 'Lerato finds a value of k such that (x−2) is a factor of p(x)=x³−kx²+x+2. Find k.',
          answer: `${gr('k = 3')}`,
          steps: [
            `If (x−2) is a factor, then by the Factor Theorem p(${bl('2')}) = 0.`,
            `${or('p(2)')} = (2)<sup>3</sup> − k(2)<sup>2</sup> + (2) + 2 = ${or('8 − 4k + 2 + 2')} = ${or('12 − 4k')}.`,
            `Set equal to zero: ${or('12 − 4k')} = 0 → 4k = 12 → ${gr('k = 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Determine whether (x−1) is a factor of p(x)=x³+x²−2x+4 by evaluating p(1). State your conclusion.',
          answer: 'No, (x−1) is not a factor.',
          checkMode: 'auto',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'Not a factor', 'not a factor'],
          explanation: 'Substitute x=1: p(1)=1+1-2+4=4.\nSince p(1)=4≠0, by the Factor Theorem (x−1) is NOT a factor of p(x) ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Show that (x−2) is a factor of p(x)=x³−4x²+x+6 by evaluating p(2).',
              correctAnswer: '0',
              explanation: 'p(2)=8-16+2+6=0.\nSince p(2)=0, by the Factor Theorem (x-2) is a factor of p(x) ✓',
            },
            {
              label: 'b) Find the value of k if (x−1) is a factor of p(x)=2x³−kx²+3x−4.',
              correctAnswer: '1',
              explanation: 'If (x-1) is a factor, then p(1)=0.\np(1)=2-k+3-4=1-k=0 → k=1 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'p(x) = x³+ax²+bx+c. Given that p(0)=−6, p(1)=0, and p(−2)=0:\n\na) Find the values of a, b, and c.\nb) Fully factorise p(x).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Values of a, b, and c',
              correctAnswer: 'a=4, b=1, c=-6',
              correctAnswers: ['a=4, b=1, c=-6', 'a=4 b=1 c=-6'],
              explanation: 'p(0)=c=-6.\np(1)=1+a+b-6=0 → a+b=5.\np(-2)=-8+4a-2b-6=0 → 4a-2b=14 → 2a-b=7.\nAdding the two equations: 3a=12 → a=4, b=1 ✓',
            },
            {
              label: 'b) Full factorisation of p(x)=x³+4x²+x−6',
              correctAnswer: '(x-1)(x+2)(x+3)',
              correctAnswers: ['(x-1)(x+2)(x+3)', '(x-1)(x+3)(x+2)'],
              explanation: 'Since p(1)=0, (x-1) is a factor. Since p(-2)=0, (x+2) is a factor.\nDivide x³+4x²+x-6 by (x-1): quotient = x²+5x+6 = (x+2)(x+3).\nFull factorisation: (x-1)(x+2)(x+3) ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Remainder Theorem and Factor Theorem with colour coded test value substitutions and factor conclusions for cubic polynomials" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING THIRD DEGREE POLYNOMIALS FULLY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-cubic-polynomials',
      title: 'Factorising Third Degree Polynomials Fully',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">To fully factorise a <strong>cubic polynomial</strong> (degree 3), we follow three steps: first use the <strong>Factor Theorem</strong> to find one linear factor (x−a) by testing values until p(a)=0, then <strong>divide</strong> the polynomial by that factor (using long division or inspection) to get the quadratic quotient, and finally <strong>factorise the quadratic</strong> (if possible).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tested value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('linear factor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quadratic quotient')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find a factor</strong> — Test values x = ${bl('±1, ±2, ±3, …')} (factors of the constant term) until p(a)=0. Then (x−a) is a ${or('linear factor')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Divide</strong> — Divide the cubic by the ${or('linear factor')} using long division to get the ${gr('quadratic quotient')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Factorise the quadratic</strong> — Factorise the ${gr('quadratic quotient')} into two linear factors where possible.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Which values to test first?</p>` +
        `<p style="margin:0;color:#78350f;">Always start with x = 1 and x = −1 as they are the quickest to substitute. Then try x = 2, x = −2, x = 3, x = −3, etc. Try factors of the constant term first — the answer will always be among them for a polynomial with integer coefficients.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Factorise p(x)=x³+2x²−5x−6 fully.',
          answer: `p(x) = ${or('(x−2)')}${gr('(x+1)(x+3)')}`,
          steps: [
            `<strong>Step 1 — Find a factor:</strong> Test x = ${bl('1')}: p(1) = 1+2−5−6 = −8 (not zero). Test x = ${bl('2')}: p(2) = 8+8−10−6 = 0 ✓. So ${or('(x−2) is a factor')}.`,
            `<strong>Step 2 — Divide:</strong> (x<sup>3</sup>+2x<sup>2</sup>−5x−6) ÷ (x−2).<br>x<sup>3</sup>÷x=x², x²(x−2)=x³−2x², subtract: 4x²−5x−6.<br>4x²÷x=4x, 4x(x−2)=4x²−8x, subtract: 3x−6.<br>3x÷x=3, 3(x−2)=3x−6, subtract: 0.<br>${gr('Quotient: x²+4x+3')}.`,
            `<strong>Step 3 — Factorise the quadratic:</strong> ${gr('x²+4x+3')} = ${gr('(x+1)(x+3)')}.`,
            `<strong>Full factorisation:</strong> p(x) = ${or('(x−2)')}${gr('(x+1)(x+3)')} ✓`,
          ],
        },
        {
          question: 'Factorise p(x)=x³−3x²−4x+12 fully.',
          answer: `p(x) = ${or('(x−2)')}${gr('(x−3)(x+2)')}`,
          steps: [
            `<strong>Step 1 — Find a factor:</strong> Test x = ${bl('2')}: p(2) = 8−12−8+12 = 0 ✓. So ${or('(x−2) is a factor')}.`,
            `<strong>Step 2 — Divide:</strong> (x<sup>3</sup>−3x<sup>2</sup>−4x+12) ÷ (x−2).<br>x<sup>3</sup>÷x=x², x²(x−2)=x³−2x², subtract: −x²−4x+12.<br>−x²÷x=−x, −x(x−2)=−x²+2x, subtract: −6x+12.<br>−6x÷x=−6, −6(x−2)=−6x+12, subtract: 0.<br>${gr('Quotient: x²−x−6')}.`,
            `<strong>Step 3 — Factorise the quadratic:</strong> ${gr('x²−x−6')} = ${gr('(x−3)(x+2)')}.`,
            `<strong>Full factorisation:</strong> p(x) = ${or('(x−2)')}${gr('(x−3)(x+2)')} ✓`,
          ],
        },
        {
          question: 'Thabo factorises p(x)=2x³+3x²−11x−6. Find the full factorisation.',
          answer: `p(x) = ${or('(x−2)')}${gr('(2x+1)(x+3)')}`,
          steps: [
            `<strong>Step 1 — Find a factor:</strong> Test x = ${bl('2')}: p(2) = 2(8)+3(4)−11(2)−6 = 16+12−22−6 = 0 ✓. So ${or('(x−2) is a factor')}.`,
            `<strong>Step 2 — Divide:</strong> (2x<sup>3</sup>+3x<sup>2</sup>−11x−6) ÷ (x−2).<br>2x<sup>3</sup>÷x=2x², 2x²(x−2)=2x³−4x², subtract: 7x²−11x−6.<br>7x²÷x=7x, 7x(x−2)=7x²−14x, subtract: 3x−6.<br>3x÷x=3, 3(x−2)=3x−6, subtract: 0.<br>${gr('Quotient: 2x²+7x+3')}.`,
            `<strong>Step 3 — Factorise the quadratic:</strong> ${gr('2x²+7x+3')} = ${gr('(2x+1)(x+3)')}.`,
            `<strong>Full factorisation:</strong> p(x) = ${or('(x−2)')}${gr('(2x+1)(x+3)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Fully factorise p(x) = x³ − x² − 4x + 4.',
          answer: '(x-1)(x-2)(x+2)',
          checkMode: 'auto',
          correctAnswer: '(x-1)(x-2)(x+2)',
          correctAnswers: ['(x-1)(x-2)(x+2)', '(x-1)(x+2)(x-2)', '(x-2)(x+2)(x-1)'],
          explanation: 'Test x=1: 1-1-4+4=0 ✓. So (x-1) is a factor.\nDivide: x³-x²-4x+4 ÷ (x-1).\nx³÷x=x², x²(x-1)=x³-x², subtract: -4x+4.\n-4x÷x=-4, -4(x-1)=-4x+4, subtract: 0.\nQuotient: x²-4=(x-2)(x+2).\nFull factorisation: (x-1)(x-2)(x+2) ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Fully factorise each of the following polynomials.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) p(x) = x³ + x² − 10x + 8',
              correctAnswer: '(x-1)(x-2)(x+4)',
              correctAnswers: ['(x-1)(x-2)(x+4)', '(x-1)(x+4)(x-2)', '(x-2)(x+4)(x-1)'],
              explanation: 'Test x=1: 1+1-10+8=0 ✓. (x-1) is a factor.\nDivide: quotient = x²+2x-8 = (x-2)(x+4).\nFull: (x-1)(x-2)(x+4) ✓',
            },
            {
              label: 'b) p(x) = 2x³ − 9x² + 7x + 6',
              correctAnswer: '(x-3)(2x+1)(x-2)',
              correctAnswers: ['(x-3)(2x+1)(x-2)', '(x-3)(x-2)(2x+1)', '(x-2)(x-3)(2x+1)'],
              explanation: 'Test x=3: 2(27)-9(9)+7(3)+6=54-81+21+6=0 ✓. (x-3) is a factor.\nDivide: 2x³-9x²+7x+6 ÷ (x-3).\n2x³÷x=2x², 2x²(x-3)=2x³-6x², subtract: -3x²+7x+6.\n-3x²÷x=-3x, -3x(x-3)=-3x²+9x, subtract: -2x+6.\n-2x÷x=-2, -2(x-3)=-2x+6, subtract: 0.\nQuotient: 2x²-3x-2=(2x+1)(x-2).\nFull: (x-3)(2x+1)(x-2) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Given p(x) = 2x³ − 3x² − 11x + 6:\n\na) Show that (x − 3) is a factor of p(x).\nb) Fully factorise p(x).\nc) Hence solve 2x³ − 3x² − 11x + 6 = 0.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Show (x − 3) is a factor',
              correctAnswer: '0',
              explanation: 'p(3)=2(27)-3(9)-11(3)+6=54-27-33+6=0.\nSince p(3)=0, by the Factor Theorem (x-3) is a factor ✓',
            },
            {
              label: 'b) Full factorisation of p(x)',
              correctAnswer: '(x-3)(2x-1)(x+2)',
              correctAnswers: ['(x-3)(2x-1)(x+2)', '(x-3)(x+2)(2x-1)', '(x+2)(x-3)(2x-1)'],
              explanation: 'Divide 2x³-3x²-11x+6 by (x-3).\n2x³÷x=2x², 2x²(x-3)=2x³-6x², subtract: 3x²-11x+6.\n3x²÷x=3x, 3x(x-3)=3x²-9x, subtract: -2x+6.\n-2x÷x=-2, -2(x-3)=-2x+6, subtract: 0.\nQuotient: 2x²+3x-2=(2x-1)(x+2).\nFull: (x-3)(2x-1)(x+2) ✓',
            },
            {
              label: 'c) Solutions to p(x) = 0',
              correctAnswer: 'x=3, x=1/2, x=-2',
              correctAnswers: ['x=3, x=1/2, x=-2', 'x=3 x=1/2 x=-2', '3; 1/2; -2'],
              explanation: 'Set each factor to zero:\nx-3=0 → x=3\n2x-1=0 → x=½\nx+2=0 → x=-2 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to fully factorise a cubic polynomial by finding a linear factor using the Factor Theorem then dividing and factorising the quadratic quotient" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING CUBIC EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-cubic-equations',
      title: 'Solving Cubic Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">To solve a cubic equation p(x)=0, we <strong>fully factorise</strong> the polynomial (using the Factor Theorem and long division as in Section 3), then apply the <strong>zero product property</strong> to each factor — setting each equal to zero and solving to find all three roots.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('roots found')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('factorised form')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x³+2x²−5x−6=0.',
          answer: `${bl('x=2')}, ${bl('x=−1')}, ${bl('x=−3')}`,
          steps: [
            `From Section 3, the full factorisation is ${or('(x−2)(x+1)(x+3)')} = 0.`,
            `Apply the zero product property — set each factor to zero: x−2=0 → ${bl('x=2')}; x+1=0 → ${bl('x=−1')}; x+3=0 → ${bl('x=−3')}.`,
            `The three roots are ${bl('x=2')}, ${bl('x=−1')}, ${bl('x=−3')}.`,
          ],
        },
        {
          question: 'Solve 2x³+x²−5x+2=0.',
          answer: `${bl('x=1')}, ${bl('x=½')}, ${bl('x=−2')}`,
          steps: [
            `Test x=${bl('1')}: 2(1)+1−5+2=0 ✓. So (x−1) is a factor.`,
            `Divide 2x³+x²−5x+2 by (x−1):<br>2x³÷x=2x², 2x²(x−1)=2x³−2x², subtract: 3x²−5x+2.<br>3x²÷x=3x, 3x(x−1)=3x²−3x, subtract: −2x+2.<br>−2x÷x=−2, −2(x−1)=−2x+2, subtract: 0.<br>Quotient: 2x²+3x−2.`,
            `Factorise the quotient: 2x²+3x−2 = (2x−1)(x+2).`,
            `Full factorisation: ${or('(x−1)(2x−1)(x+2)')} = 0.`,
            `Set each factor to zero: x−1=0 → ${bl('x=1')}; 2x−1=0 → ${bl('x=½')}; x+2=0 → ${bl('x=−2')}.`,
          ],
        },
        {
          question: 'Lerato solves x³−6x²+11x−6=0. Find all three roots.',
          answer: `${bl('x=1')}, ${bl('x=2')}, ${bl('x=3')}`,
          steps: [
            `Test x=${bl('1')}: 1−6+11−6=0 ✓. So (x−1) is a factor.`,
            `Divide x³−6x²+11x−6 by (x−1):<br>x³÷x=x², x²(x−1)=x³−x², subtract: −5x²+11x−6.<br>−5x²÷x=−5x, −5x(x−1)=−5x²+5x, subtract: 6x−6.<br>6x÷x=6, 6(x−1)=6x−6, subtract: 0.<br>Quotient: x²−5x+6.`,
            `Factorise the quotient: x²−5x+6 = (x−2)(x−3).`,
            `Full factorisation: ${or('(x−1)(x−2)(x−3)')} = 0.`,
            `Set each factor to zero: ${bl('x=1')}, ${bl('x=2')}, ${bl('x=3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'Zanele wants to solve x³ − 9x = 0. Show two different ways to solve it — (1) using the Factor Theorem to find a root by testing values, then dividing; and (2) by taking out a common factor first. Then explain which method is more efficient for this particular equation, and why.',
          answer: 'Method 1 (Factor Theorem + division): test x=1: 1−9=−8≠0. Test x=−1: −1+9=8≠0. Test x=2: 8−18=−10≠0. Test x=−2: −8+18=10≠0. Test x=3: 27−27=0 ✓, so (x−3) is a factor.\nDividing x³−9x by (x−3): x³÷x=x², x²(x−3)=x³−3x², subtract: 3x²−9x. 3x²÷x=3x, 3x(x−3)=3x²−9x, subtract: 0. Quotient: x²+3x=x(x+3).\nSo x³−9x=(x−3)(x)(x+3)=0, giving x=3, x=0, x=−3.\n\nMethod 2 (common factor first): x³−9x=x(x²−9)=x(x−3)(x+3)=0, giving x=0, x=3, x=−3 directly.\n\nMethod 2 is more efficient here: x³−9x already has a common factor of x that can be spotted immediately, whereas the Factor Theorem approach needs four failed trial values (x=1,−1,2,−2) before finding the working root x=3, and then still requires a full division. Always check for a common factor before reaching for the Factor Theorem.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve a cubic equation by fully factorising using the Factor Theorem and long division then applying the zero product property to find all three roots" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SKETCHING CUBIC GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sketching-cubic-graphs',
      title: 'Sketching Cubic Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">To sketch a cubic function y=p(x), we use the <strong>factorised form</strong> to find the x-intercepts (roots), find the <strong>y-intercept</strong> by setting x=0, determine the <strong>general shape</strong> (a positive leading coefficient rises from bottom-left to top-right; a negative leading coefficient does the opposite), and identify the turning points if needed (using calculus in the next topic).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-intercepts')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('y-intercept')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('curve direction')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sketch y=x³+2x²−5x−6=(x−2)(x+1)(x+3).',
          answer: `${bl('x-intercepts: x=2, x=−1, x=−3')}; ${or('y-intercept: y=−6')}; ${gr('positive leading coefficient — rises left to right')}.`,
          steps: [
            `${bl('x-intercepts:')} set each factor to zero: (x−2)=0 → ${bl('x=2')}; (x+1)=0 → ${bl('x=−1')}; (x+3)=0 → ${bl('x=−3')}.`,
            `${or('y-intercept:')} substitute x=0: y=(0−2)(0+1)(0+3) = (−2)(1)(3) = ${or('−6')}.`,
            `${gr('Shape:')} the leading term is x³ (positive coefficient), so the graph ${gr('rises from bottom-left to top-right')}.`,
            `Plot the intercepts at (${bl('−3')},0), (${bl('−1')},0), (${bl('2')},0) and (0,${or('−6')}), then sketch a smooth S-shaped curve through them.`,
          ],
        },
        {
          question: 'Sipho sketches y=(x−1)(x−2)(x−3). He says the graph touches the x-axis at x=2 and crosses at x=1 and x=3. Is he correct?',
          answer: `No — the graph ${bl('crosses')} the x-axis at all three intercepts: ${bl('x=1')}, ${bl('x=2')}, and ${bl('x=3')}.`,
          steps: [
            `A graph only <strong>touches</strong> the x-axis (without crossing) at a root if that root is <strong>repeated</strong> — meaning the corresponding factor appears more than once (multiplicity ≥ 2).`,
            `In y=(x−1)(x−2)(x−3), all three factors are distinct and each appears exactly once (multiplicity 1).`,
            `Therefore the graph ${bl('crosses')} the x-axis at all three intercepts: ${bl('x=1')}, ${bl('x=2')}, and ${bl('x=3')}. Sipho is incorrect about x=2.`,
            `${or('y-intercept:')} substitute x=0: y=(−1)(−2)(−3) = ${or('−6')}.`,
            `${gr('Shape:')} positive leading coefficient (x³ term) — the graph ${gr('rises from bottom-left to top-right')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'A cubic function f(x) = ax³ + bx² + cx + d touches the x-axis at x = 1 and cuts (crosses) the x-axis at x = −4. Given that f(0) = 4:\n\na) Explain why f(x) can be written as f(x) = a(x−1)²(x+4), then determine the value of a.\nb) Hence determine the values of b, c and d.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Value of a',
              correctAnswer: 'a=1',
              correctAnswers: ['a=1', '1'],
              explanation: 'Touching the x-axis at x=1 means x=1 is a repeated (double) root, so (x−1)² is a factor. Cutting the x-axis at x=−4 means x=−4 is a single root, so (x+4) is a factor. Hence f(x) = a(x−1)²(x+4) for some constant a.\nSubstitute x=0: f(0) = a(0−1)²(0+4) = a(1)(4) = 4a.\nSince f(0) = 4: 4a = 4, so a = 1 ✓',
            },
            {
              label: 'b) Values of b, c and d',
              correctAnswer: 'b=2, c=-7, d=4',
              correctAnswers: ['b=2, c=-7, d=4', 'b=2 c=-7 d=4'],
              explanation: 'With a=1: f(x) = (x−1)²(x+4) = (x²−2x+1)(x+4) = x³+4x²−2x²−8x+x+4 = x³+2x²−7x+4.\nSo b=2, c=−7, d=4 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sketch a cubic graph by finding x-intercepts from the factorised form the y-intercept by substituting x=0 and the curve direction from the sign of the leading coefficient" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — Factor Theorem: testing whether (x-1) is a factor ──────────
    {
      difficulty: 'Easy',
      question: 'Determine whether (x−1) is a factor of p(x)=x³−2x²+3x−1 by evaluating p(1). State your conclusion.',
      answer: 'No, (x−1) is not a factor.',
      checkMode: 'auto',
      correctAnswer: 'No',
      correctAnswers: ['No', 'no', 'Not a factor', 'not a factor'],
      explanation: 'Substitute x=1: p(1)=1−2+3−1=1.\nSince p(1)=1≠0, by the Factor Theorem (x−1) is NOT a factor of p(x) ✓',
    },

    // ── Q2 Medium — Factor Theorem: show a factor ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Show that (x−3) is a factor of p(x)=x³−6x²+11x−6. What is the value of p(3)?',
      answer: '0',
      checkMode: 'auto',
      correctAnswer: '0',
      explanation: 'p(3)=27−54+33−6=0. Since p(3)=0, by the Factor Theorem (x−3) is a factor of p(x) ✓',
    },

    // ── Q3 Hard — find k using Factor Theorem ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the value of k if (x+1) is a factor of p(x)=x³+kx²−4x−4.',
      answer: 'p(−1)=−1+k+4−4=k−1=0. k=1.',
      checkMode: 'self',
    },

    // ── Q4 Medium — polynomial long division ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Divide x³+x²−10x+8 by (x−2) using long division.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Quotient',
          correctAnswer: 'x²+3x-4',
          correctAnswers: ['x²+3x-4', 'x^2+3x-4'],
          explanation: 'x³÷x=x². x²(x−2)=x³−2x². Subtract: 3x²−10x+8.\n3x²÷x=3x. 3x(x−2)=3x²−6x. Subtract: −4x+8.\n−4x÷x=−4. −4(x−2)=−4x+8. Subtract: 0.\nQuotient: x²+3x−4 ✓',
        },
        {
          label: 'b) Remainder',
          correctAnswer: '0',
          explanation: 'The remainder is 0, confirming (x−2) is a factor of x³+x²−10x+8.',
        },
      ],
    },

    // ── Q5 Medium — full factorisation given one factor ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Factorise p(x)=x³+x²−10x+8 fully, given that (x−2) is a factor.',
      answer: '(x−2)(x−1)(x+4)',
      checkMode: 'auto',
      correctAnswer: '(x-2)(x-1)(x+4)',
      correctAnswers: ['(x-2)(x-1)(x+4)', '(x-2)(x+4)(x-1)', '(x-1)(x-2)(x+4)'],
      explanation: 'From Q4, dividing by (x−2) gives quotient x²+3x−4=(x−1)(x+4).\nFull factorisation: (x−2)(x−1)(x+4) ✓',
    },

    // ── Q6 Hard — Factor Theorem then full factorisation ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise p(x)=x³−7x+6 fully, using the Factor Theorem to find the first factor.',
      answer: 'Test x=1: 1−7+6=0 ✓. Divide: x³−7x+6÷(x−1)=x²+x−6=(x+3)(x−2). Full factorisation: (x−1)(x+3)(x−2).',
      checkMode: 'self',
    },

    // ── Q7 Easy — solve cubic using factorised form ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x³−7x+6=0 using the factorised form from Q6.',
      answer: 'x=1, x=−3, x=2',
      checkMode: 'auto',
      correctAnswer: 'x=1, x=-3, x=2',
      correctAnswers: ['x=1, x=-3, x=2', 'x=1, x=2, x=-3', '1; -3; 2', '1, -3, 2'],
      explanation: '(x−1)(x+3)(x−2)=0.\nx−1=0 → x=1; x+3=0 → x=−3; x−2=0 → x=2 ✓',
    },

    // ── Q8 Medium — solve cubic using factorised form ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x³+x²−10x+8=0 using the factorised form from Q5.',
      answer: 'x=2, x=1, x=−4',
      checkMode: 'auto',
      correctAnswer: 'x=2, x=1, x=-4',
      correctAnswers: ['x=2, x=1, x=-4', 'x=1, x=2, x=-4', '2; 1; -4', '1, 2, -4'],
      explanation: '(x−2)(x−1)(x+4)=0.\nx−2=0 → x=2; x−1=0 → x=1; x+4=0 → x=−4 ✓',
    },

    // ── Q9 Hard — solve cubic, showing Factor Theorem step ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x³−3x²−4x+12=0 fully, showing the Factor Theorem step.',
      answer: 'Test x=2: 8−12−8+12=0 ✓. Divide: quotient=x²−x−6=(x−3)(x+2). Solutions: x=2, x=3, x=−2.',
      checkMode: 'self',
    },

    // ── Q10 Hard — critical reasoning about number of real solutions ──────────
    {
      difficulty: 'Hard',
      question: 'Lerato says a cubic equation always has exactly three real solutions. Is she correct? Explain.',
      answer: 'No — a cubic always has at least one real solution, but the other two may be non-real (complex) if the quadratic factor has a negative discriminant.',
      checkMode: 'self',
    },

    // ── Q11 Medium — x-intercepts and y-intercept from factorised form ────────
    {
      difficulty: 'Medium',
      question: 'State the x-intercepts and y-intercept of y=(x+1)(x−3)(x−5).',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x-intercepts (list all three values, separated by commas)',
          correctAnswer: '-1, 3, 5',
          correctAnswers: ['-1, 3, 5', '-1,3,5', 'x=-1, x=3, x=5', '-1; 3; 5'],
          explanation: 'Set each factor to zero: x+1=0 → x=−1; x−3=0 → x=3; x−5=0 → x=5.',
        },
        {
          label: 'b) y-intercept',
          correctAnswer: '15',
          explanation: 'Substitute x=0: y=(0+1)(0−3)(0−5)=(1)(−3)(−5)=15.',
        },
      ],
    },

    // ── Q12 Hard — repeated root and graph behaviour ──────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho says if a cubic has a repeated root at x=2, the graph touches but doesn't cross the x-axis there. Is he correct? Explain.",
      answer: 'Yes — a repeated (double) root means the factor (x−2)² appears, causing the graph to touch and bounce off the x-axis at x=2 rather than crossing through it.',
      checkMode: 'self',
    },

    // ── Q13 Medium — y-intercept by substitution ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the y-intercept of y=x³−6x²+11x−6.',
      answer: '−6',
      checkMode: 'auto',
      correctAnswer: '-6',
      correctAnswers: ['-6', '−6'],
      explanation: 'Substitute x=0: y=0−0+0−6=−6. The y-intercept is −6 ✓',
    },

    // ── Q14 Hard — full factorisation with leading coefficient ────────────────
    {
      difficulty: 'Hard',
      question: 'Factorise p(x)=2x³−3x²−11x+6 fully.',
      answer: 'Test x=3: 54−27−33+6=0 ✓. Divide: 2x³−3x²−11x+6÷(x−3)=2x²+3x−2=(2x−1)(x+2). Full factorisation: (x−3)(2x−1)(x+2).',
      checkMode: 'self',
    },

    // ── Q15 Hard — solve using factorised form from Q14 ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve 2x³−3x²−11x+6=0 using your answer from Q14.',
      answer: 'x=3, x=1/2, x=−2',
      checkMode: 'auto',
      correctAnswer: 'x=3, x=1/2, x=-2',
      correctAnswers: ['x=3, x=1/2, x=-2', 'x=3, x=0.5, x=-2', '3; 1/2; -2', '3, 1/2, -2'],
      explanation: '(x−3)(2x−1)(x+2)=0.\nx−3=0 → x=3; 2x−1=0 → x=½; x+2=0 → x=−2 ✓',
    },

    // ── Q16 Hard — critical reasoning about the Remainder Theorem ────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the remainder when any polynomial is divided by (x−a) is always zero if a is an integer. Is he correct? Explain.',
      answer: 'No — the remainder is zero only if (x−a) is a factor of the polynomial. For most values of a, the remainder will be non-zero.',
      checkMode: 'self',
    },

    // ── Q17 Hard — find k from a given remainder ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find k if the remainder when p(x)=x³+kx−4 is divided by (x−2) is 8.',
      answer: 'p(2)=8+2k−4=4+2k=8. 2k=4. k=2.',
      checkMode: 'self',
    },

    // ── Q18 Hard — equation from a cubic graph diagram ────────────────────────
    {
      difficulty: 'Hard',
      question: '[DIAGRAM: A cubic graph with x-intercepts at x=−2, x=1, x=4 and a positive leading coefficient, passing through the y-axis at a negative y-value] Using the diagram, write the equation of the cubic in factorised form.',
      answer: 'y=a(x+2)(x−1)(x−4). y-intercept: y=a(2)(−1)(−4)=8a. So the y-intercept depends on a — if the graph appears to cross the y-axis at −8, then a=1 and y=(x+2)(x−1)(x−4).',
      checkMode: 'self',
    },

    // ── Q19 Hard — find a, b and third root from two known roots ─────────────
    {
      difficulty: 'Hard',
      question: 'Amahle has the cubic p(x)=x³+ax²+bx−8, which has roots at x=1 and x=−2. Find a and b, then determine the third root.',
      answer: 'p(1)=1+a+b−8=a+b−7=0, so a+b=7. p(−2)=−8+4a−2b−8=4a−2b−16=0, so 4a−2b=16, 2a−b=8. Adding: 3a=15, a=5. b=2. p(x)=x³+5x²+2x−8. Third root: p(x)=(x−1)(x+2)(x−r). Expand: x³+(r+1)x²+(r−2)x−2r=−8 when r=4: (x−1)(x+2)(x−4) gives product of roots=1×(−2)×4=−8 ✓. Third root: x=4.',
      checkMode: 'self',
    },

    // ── Q20 Hard — critical reasoning about two known roots ──────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says that if p(a)=0 and p(b)=0, then (x−a)(x−b) must be a factor of p(x). Is this always true for a cubic polynomial? Explain.',
      answer: 'Yes — if both a and b are roots of the cubic, then both (x−a) and (x−b) are factors; since their product (x−a)(x−b) is a degree-2 polynomial dividing a degree-3 polynomial, and the cubic has exactly three roots (counting multiplicity), the remaining factor must be linear, confirming (x−a)(x−b) is indeed part of the full factorisation.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Factor Theorem test (Easy) | 3-6 Division/quotient given a factor (Easy-Medium) |
    // 7-9 Full factorisation, integer leading coeff (Medium) | 10-12 Full factorisation, leading coeff 2 (Medium) |
    // 13-16 Solving cubic equations (Medium-Hard) | 17-19 Cubic intercepts/shape (Hard, some diagram-flagged)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Determine whether (x+1) is a factor of p(x)=x³−6x²+5x+12 by evaluating p(−1). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: '0, yes it is a factor', correctAnswers: ['0, yes it is a factor', 'yes', 'Yes', '0', 'yes, it is a factor'], explanation: 'p(−1)=(−1)³−6(−1)²+5(−1)+12=−1−6−5+12=0.\nSince p(−1)=0, by the Factor Theorem (x+1) IS a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Determine whether (x−1) is a factor of p(x)=x³+2x²−5x−6 by evaluating p(1). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Not a factor', 'not a factor'], explanation: 'p(1)=1+2−5−6=−8.\nSince p(1)=−8≠0, by the Factor Theorem (x−1) is NOT a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Show that (x−1) is a factor of p(x)=x³+6x²+3x−10 by evaluating p(1).', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(1)=1+6+3−10=0.\nSince p(1)=0, by the Factor Theorem (x−1) is a factor of p(x) ✓' },

        { difficulty: 'Easy-Medium', question: 'Divide x³−2x²−5x+6 by (x−3) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²+x-2', correctAnswers: ['x²+x-2', 'x^2+x-2'], explanation: 'x³÷x=x². x²(x−3)=x³−3x². Subtract: x²−5x+6.\nx²÷x=x. x(x−3)=x²−3x. Subtract: −2x+6.\n−2x÷x=−2. −2(x−3)=−2x+6. Subtract: 0.\nQuotient: x²+x−2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Divide x³−31x−30 by (x+1) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'Rewrite as x³+0x²−31x−30 to keep columns aligned.\nx³÷x=x². x²(x+1)=x³+x². Subtract: −x²−31x−30.\n−x²÷x=−x. −x(x+1)=−x²−x. Subtract: −30x−30.\n−30x÷x=−30. −30(x+1)=−30x−30. Subtract: 0.\nQuotient: x²−x−30 ✓' },
        { difficulty: 'Medium', question: 'Divide x³+x²−14x−24 by (x+2) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²-x-12', correctAnswers: ['x²-x-12', 'x^2-x-12'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Subtract: −x²−14x−24.\n−x²÷x=−x. −x(x+2)=−x²−2x. Subtract: −12x−24.\n−12x÷x=−12. −12(x+2)=−12x−24. Subtract: 0.\nQuotient: x²−x−12 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x+2) is a factor of x³+x²−14x−24.' },
        ]},
        { difficulty: 'Medium', question: 'Divide x³−2x²−29x+30 by (x−1) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Subtract: −x²−29x+30.\n−x²÷x=−x. −x(x−1)=−x²+x. Subtract: −30x+30.\n−30x÷x=−30. −30(x−1)=−30x+30. Subtract: 0.\nQuotient: x²−x−30 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x−1) is a factor of x³−2x²−29x+30.' },
        ]},

        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 6x² + 11x − 6.', answer: '', checkMode: 'auto', correctAnswer: '(x-1)(x-2)(x-3)', correctAnswers: ['(x-1)(x-2)(x-3)', '(x-1)(x-3)(x-2)', '(x-2)(x-3)(x-1)'], explanation: 'Test x=1: 1−6+11−6=0 ✓. So (x−1) is a factor.\nDivide: quotient = x²−5x+6 = (x−2)(x−3).\nFull factorisation: (x−1)(x−2)(x−3) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ + 3x² − 6x − 8.', answer: '', checkMode: 'auto', correctAnswer: '(x+1)(x-2)(x+4)', correctAnswers: ['(x+1)(x-2)(x+4)', '(x+1)(x+4)(x-2)', '(x-2)(x+4)(x+1)'], explanation: 'Test x=−1: −1+3+6−8=0 ✓. So (x+1) is a factor.\nDivide: quotient = x²+2x−8 = (x−2)(x+4).\nFull factorisation: (x+1)(x−2)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 4x² − 15x + 18.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x-1)(x+3)', correctAnswers: ['(x-6)(x-1)(x+3)', '(x-6)(x+3)(x-1)', '(x-1)(x+3)(x-6)'], explanation: 'Test x=6: 216−144−90+18=0 ✓. So (x−6) is a factor.\nDivide: quotient = x²+2x−3 = (x−1)(x+3).\nFull factorisation: (x−6)(x−1)(x+3) ✓' },

        { difficulty: 'Medium', question: 'Fully factorise p(x) = 2x³ − 3x² − 11x + 6.', answer: '', checkMode: 'auto', correctAnswer: '(2x-1)(x+2)(x-3)', correctAnswers: ['(2x-1)(x+2)(x-3)', '(2x-1)(x-3)(x+2)', '(x+2)(x-3)(2x-1)'], explanation: 'Test x=½: 2(⅛)−3(¼)−11(½)+6=¼−¾−5½+6=0 ✓. So (2x−1) is a factor.\nDivide: quotient = x²−x−6 = (x−3)(x+2).\nFull factorisation: (2x−1)(x−3)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 3x² − 22x + 24, given that (x+4) is a factor.', answer: '', checkMode: 'auto', correctAnswer: '(x+4)(x-1)(x-6)', correctAnswers: ['(x+4)(x-1)(x-6)', '(x+4)(x-6)(x-1)', '(x-1)(x-6)(x+4)'], explanation: 'Divide x³−3x²−22x+24 by (x+4): quotient = x²−7x+6 = (x−1)(x−6).\nFull factorisation: (x+4)(x−1)(x−6) ✓' },
        { difficulty: 'Medium-Hard', question: 'Given p(x) = x³ − 4x² − 11x − 6:\n\na) Show that (x−6) is a factor of p(x).\nb) Fully factorise p(x).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Show (x − 6) is a factor', correctAnswer: '0', explanation: 'p(6)=216−144−66−6=0.\nSince p(6)=0, by the Factor Theorem (x−6) is a factor ✓' },
          { label: 'b) Full factorisation of p(x)', correctAnswer: '(x-6)(x+1)²', correctAnswers: ['(x-6)(x+1)²', '(x-6)(x+1)^2', '(x-6)(x+1)(x+1)'], explanation: 'Divide x³−4x²−11x−6 by (x−6): quotient = x²+2x+1 = (x+1)².\nFull factorisation: (x−6)(x+1)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Solve for x: x³ − 3x² − 22x + 24 = 0, given that (x+4) is a factor.', answer: '', checkMode: 'auto', correctAnswer: 'x=-4, x=1, x=6', correctAnswers: ['x=-4, x=1, x=6', 'x=1, x=6, x=-4', '-4; 1; 6', '-4, 1, 6'], explanation: '(x+4)(x²−7x+6)=0 → (x+4)(x−1)(x−6)=0.\nx+4=0 → x=−4; x−1=0 → x=1; x−6=0 → x=6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: x³ − 4x² − 11x − 6 = 0, using your factorisation from the earlier question.', answer: '', checkMode: 'auto', correctAnswer: 'x=6, x=-1', correctAnswers: ['x=6, x=-1', 'x=-1, x=6', '6; -1', '6, -1'], explanation: '(x−6)(x+1)²=0.\nx−6=0 → x=6; (x+1)²=0 → x=−1 (a repeated root, so only two distinct solutions) ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2x³ − 3x² − 11x + 6 = 0, using your factorisation from Q11.', answer: '', checkMode: 'auto', correctAnswer: 'x=1/2, x=-2, x=3', correctAnswers: ['x=1/2, x=-2, x=3', 'x=-2, x=1/2, x=3', '1/2; -2; 3', '0.5, -2, 3'], explanation: '(2x−1)(x−3)(x+2)=0.\n2x−1=0 → x=½; x−3=0 → x=3; x+2=0 → x=−2 ✓' },
        { difficulty: 'Hard', question: 'Given p(x)=x³+ax²+bx+18, and that p(1)=0 and p(−3)=0, find a and b, then solve p(x)=0 fully.', answer: '', checkMode: 'auto', correctAnswer: 'a=-4, b=-15; x=1, x=-3, x=6', correctAnswers: ['a=-4, b=-15; x=1, x=-3, x=6', 'a=-4 b=-15 x=1 x=-3 x=6'], explanation: 'p(1)=1+a+b+18=0 → a+b=−19.\np(−3)=−27+9a−3b+18=0 → 9a−3b=9 → 3a−b=3.\nAdding: 4a=−16 → a=−4, b=−15.\np(x)=x³−4x²−15x+18=(x−1)(x+3)(x−6). Solving: x=1, x=−3, x=6 ✓' },

        { difficulty: 'Hard', question: 'A cubic graph is described by y=x³+4x²−15x−18=(x+6)(x−3)(x+1). State the x-intercepts, the y-intercept, and the general shape (rising or falling from left to right).', answer: '', checkMode: 'auto', correctAnswer: 'x=-6, x=3, x=-1; y=-18; rises left to right', correctAnswers: ['x=-6, x=3, x=-1; y=-18; rises left to right', 'x=-6,x=-1,x=3; y-int=-18; rises'], explanation: 'x-intercepts: (x+6)=0 → x=−6; (x−3)=0 → x=3; (x+1)=0 → x=−1.\ny-intercept: y=(6)(−3)(1)=−18.\nSince the leading coefficient is positive (x³ term), the graph rises from bottom-left to top-right ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: A cubic graph crosses the x-axis at x=−2, x=1 and x=5, has a positive leading coefficient, and crosses the y-axis at y=10] Using the sketch, write the equation of the cubic in factorised form y=(x+2)(x−1)(x−5), then verify the y-intercept matches the diagram.', answer: '', checkMode: 'auto', correctAnswer: 'y=10, matches', correctAnswers: ['y=10, matches', '10', 'y-intercept is 10, which matches the diagram'], explanation: 'Substitute x=0 into y=(x+2)(x−1)(x−5): y=(2)(−1)(−5)=10.\nThis matches the y-intercept of 10 shown in the diagram, confirming the equation ✓' },
        { difficulty: 'Hard', question: 'Sipho sketches y=(x−4)(x+2)(x+1) and claims the graph touches (but does not cross) the x-axis at x=−1. Is he correct? Explain, then state all three x-intercepts and the y-intercept.', answer: '', checkMode: 'auto', correctAnswer: 'No, crosses at all three; x=4,-2,-1; y=-8', correctAnswers: ['No, crosses at all three; x=4,-2,-1; y=-8', 'No; x=4, x=-2, x=-1; y-intercept=-8'], explanation: 'Sipho is incorrect — all three factors (x−4), (x+2) and (x+1) are distinct with multiplicity 1, so the graph CROSSES the x-axis at all three intercepts, including x=−1.\nx-intercepts: x=4, x=−2, x=−1.\ny-intercept: y=(−4)(2)(1)=−8 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered the Factor Theorem, cubic factorisation, solving cubic equations and sketching cubic graphs.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Determine whether (x−2) is a factor of p(x)=x³+4x²−7x−10 by evaluating p(2). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: '0, yes it is a factor', correctAnswers: ['0, yes it is a factor', 'yes', 'Yes', '0', 'yes, it is a factor'], explanation: 'p(2)=8+16−14−10=0.\nSince p(2)=0, by the Factor Theorem (x−2) IS a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Determine whether (x−1) is a factor of p(x)=x³+4x²+x−6 by evaluating p(1). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: '0, yes it is a factor', correctAnswers: ['0, yes it is a factor', 'yes', 'Yes', '0', 'yes, it is a factor'], explanation: 'p(1)=1+4+1−6=0.\nSince p(1)=0, by the Factor Theorem (x−1) IS a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Show that (x+3) is a factor of p(x)=x³+4x²+x−6 by evaluating p(−3).', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(−3)=−27+36−3−6=0.\nSince p(−3)=0, by the Factor Theorem (x+3) is a factor of p(x) ✓' },

        { difficulty: 'Easy-Medium', question: 'Divide x³+x²−14x−24 by (x+2) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-12', correctAnswers: ['x²-x-12', 'x^2-x-12'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Subtract: −x²−14x−24.\n−x²÷x=−x. −x(x+2)=−x²−2x. Subtract: −12x−24.\n−12x÷x=−12. −12(x+2)=−12x−24. Subtract: 0.\nQuotient: x²−x−12 ✓' },
        { difficulty: 'Easy-Medium', question: 'Divide x³−2x²−29x+30 by (x−1) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Subtract: −x²−29x+30.\n−x²÷x=−x. −x(x−1)=−x²+x. Subtract: −30x+30.\n−30x÷x=−30. −30(x−1)=−30x+30. Subtract: 0.\nQuotient: x²−x−30 ✓' },
        { difficulty: 'Medium', question: 'Divide x³+5x²−2x−24 by (x+3) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²+2x-8', correctAnswers: ['x²+2x-8', 'x^2+2x-8'], explanation: 'x³÷x=x². x²(x+3)=x³+3x². Subtract: 2x²−2x−24.\n2x²÷x=2x. 2x(x+3)=2x²+6x. Subtract: −8x−24.\n−8x÷x=−8. −8(x+3)=−8x−24. Subtract: 0.\nQuotient: x²+2x−8 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x+3) is a factor of x³+5x²−2x−24.' },
        ]},
        { difficulty: 'Medium', question: 'Divide x³−2x²−13x−10 by (x−5) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²+3x+2', correctAnswers: ['x²+3x+2', 'x^2+3x+2'], explanation: 'x³÷x=x². x²(x−5)=x³−5x². Subtract: 3x²−13x−10.\n3x²÷x=3x. 3x(x−5)=3x²−15x. Subtract: 2x−10.\n2x÷x=2. 2(x−5)=2x−10. Subtract: 0.\nQuotient: x²+3x+2 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x−5) is a factor of x³−2x²−13x−10.' },
        ]},

        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ + 4x² − 11x − 30.', answer: '', checkMode: 'auto', correctAnswer: '(x+5)(x-3)(x+2)', correctAnswers: ['(x+5)(x-3)(x+2)', '(x+5)(x+2)(x-3)', '(x-3)(x+2)(x+5)'], explanation: 'Test x=−5: −125+100+55−30=0 ✓. So (x+5) is a factor.\nDivide: quotient = x²−x−6 = (x−3)(x+2).\nFull factorisation: (x+5)(x−3)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 13x − 12.', answer: '', checkMode: 'auto', correctAnswer: '(x+1)(x+3)(x-4)', correctAnswers: ['(x+1)(x+3)(x-4)', '(x+1)(x-4)(x+3)', '(x-4)(x+3)(x+1)'], explanation: 'Test x=−1: −1+13−12=0 ✓. So (x+1) is a factor.\nDivide: quotient = x²−x−12 = (x−4)(x+3).\nFull factorisation: (x+1)(x−4)(x+3) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ + 2x² − 11x − 12.', answer: '', checkMode: 'auto', correctAnswer: '(x-3)(x+1)(x+4)', correctAnswers: ['(x-3)(x+1)(x+4)', '(x-3)(x+4)(x+1)', '(x+1)(x+4)(x-3)'], explanation: 'Test x=3: 27+18−33−12=0 ✓. So (x−3) is a factor.\nDivide: quotient = x²+5x+4 = (x+1)(x+4).\nFull factorisation: (x−3)(x+1)(x+4) ✓' },

        { difficulty: 'Medium', question: 'Fully factorise p(x) = 2x³ + x² − 13x − 6.', answer: '', checkMode: 'auto', correctAnswer: '(2x+1)(x-2)(x+3)', correctAnswers: ['(2x+1)(x-2)(x+3)', '(2x+1)(x+3)(x-2)', '(x-2)(x+3)(2x+1)'], explanation: 'Test x=−½: 2(−⅛)+¼−13(−½)−6=−¼+¼+6½−6=0 ✓. So (2x+1) is a factor.\nDivide: quotient = x²−x−6 = (x−3)(x+2).\nFull factorisation: (2x+1)(x−3)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 4x² − 15x + 18, given that (x−6) is a factor.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x-1)(x+3)', correctAnswers: ['(x-6)(x-1)(x+3)', '(x-6)(x+3)(x-1)', '(x-1)(x+3)(x-6)'], explanation: 'Divide x³−4x²−15x+18 by (x−6): quotient = x²+2x−3 = (x−1)(x+3).\nFull factorisation: (x−6)(x−1)(x+3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Given p(x) = x³ − 12x − 16:\n\na) Show that (x−4) is a factor of p(x).\nb) Fully factorise p(x).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Show (x − 4) is a factor', correctAnswer: '0', explanation: 'p(4)=64−48−16=0.\nSince p(4)=0, by the Factor Theorem (x−4) is a factor ✓' },
          { label: 'b) Full factorisation of p(x)', correctAnswer: '(x-4)(x+2)²', correctAnswers: ['(x-4)(x+2)²', '(x-4)(x+2)^2', '(x-4)(x+2)(x+2)'], explanation: 'Divide x³−12x−16 by (x−4): quotient = x²+4x+4 = (x+2)².\nFull factorisation: (x−4)(x+2)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Solve for x: 2x³ + 7x² − 5x − 4 = 0, given that (2x+1) is a factor.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1/2, x=1, x=-4', correctAnswers: ['x=-1/2, x=1, x=-4', 'x=1, x=-4, x=-1/2', '-1/2; 1; -4', '-0.5, 1, -4'], explanation: '(2x+1)(x²+3x−4)=0 → (2x+1)(x−1)(x+4)=0.\n2x+1=0 → x=−½; x−1=0 → x=1; x+4=0 → x=−4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: x³ − 12x − 16 = 0, using your factorisation from the earlier question.', answer: '', checkMode: 'auto', correctAnswer: 'x=4, x=-2', correctAnswers: ['x=4, x=-2', 'x=-2, x=4', '4; -2', '4, -2'], explanation: '(x−4)(x+2)²=0.\nx−4=0 → x=4; (x+2)²=0 → x=−2 (a repeated root, so only two distinct solutions) ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2x³ + x² − 13x − 6 = 0, using your factorisation from Q11.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1/2, x=2, x=-3', correctAnswers: ['x=-1/2, x=2, x=-3', 'x=2, x=-3, x=-1/2', '-1/2; 2; -3', '-0.5, 2, -3'], explanation: '(2x+1)(x−2)(x+3)=0.\n2x+1=0 → x=−½; x−2=0 → x=2; x+3=0 → x=−3 ✓' },
        { difficulty: 'Hard', question: 'Given p(x)=x³+ax²+bx−24, and that p(−1)=0 and p(6)=0, find a and b, then solve p(x)=0 fully.', answer: '', checkMode: 'auto', correctAnswer: 'a=-1, b=-26; x=-1, x=6, x=-4', correctAnswers: ['a=-1, b=-26; x=-1, x=6, x=-4', 'a=-1 b=-26 x=-1 x=6 x=-4'], explanation: 'p(−1)=−1+a−b−24=0 → a−b=25.\np(6)=216+36a+6b−24=0 → 36a+6b=−192 → 6a+b=−32.\nAdding the two equations (a−b=25) and (6a+b=−32): 7a=−7 → a=−1, so b=−26.\np(x)=x³−x²−26x−24=(x+1)(x−6)(x+4). Solving: x=−1, x=6, x=−4 ✓' },

        { difficulty: 'Hard', question: 'A cubic graph is described by y=x³+2x²−11x−12=(x−3)(x+1)(x+4). State the x-intercepts, the y-intercept, and the general shape (rising or falling from left to right).', answer: '', checkMode: 'auto', correctAnswer: 'x=3, x=-1, x=-4; y=-12; rises left to right', correctAnswers: ['x=3, x=-1, x=-4; y=-12; rises left to right', 'x=3,x=-1,x=-4; y-int=-12; rises'], explanation: 'x-intercepts: (x−3)=0 → x=3; (x+1)=0 → x=−1; (x+4)=0 → x=−4.\ny-intercept: y=(−3)(1)(4)=−12.\nSince the leading coefficient is positive (x³ term), the graph rises from bottom-left to top-right ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: A cubic graph crosses the x-axis at x=1, x=−6 and x=2, has a positive leading coefficient, and crosses the y-axis at y=12] Using the sketch, write the equation of the cubic in factorised form y=(x−1)(x+6)(x−2), then verify the y-intercept matches the diagram.', answer: '', checkMode: 'auto', correctAnswer: 'y=12, matches', correctAnswers: ['y=12, matches', '12', 'y-intercept is 12, which matches the diagram'], explanation: 'Substitute x=0 into y=(x−1)(x+6)(x−2): y=(−1)(6)(−2)=12.\nThis matches the y-intercept of 12 shown in the diagram, confirming the equation ✓' },
        { difficulty: 'Hard', question: 'Lerato sketches y=(x+1)(x−6)(x+2) and claims the graph touches (but does not cross) the x-axis at x=−1. Is she correct? Explain, then state all three x-intercepts and the y-intercept.', answer: '', checkMode: 'auto', correctAnswer: 'No, crosses at all three; x=-1,6,-2; y=-12', correctAnswers: ['No, crosses at all three; x=-1,6,-2; y=-12', 'No; x=-1, x=6, x=-2; y-intercept=-12'], explanation: 'Lerato is incorrect — all three factors (x+1), (x−6) and (x+2) are distinct with multiplicity 1, so the graph CROSSES the x-axis at all three intercepts, including x=−1.\nx-intercepts: x=−1, x=6, x=−2.\ny-intercept: y=(1)(−6)(2)=−12 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply the Factor Theorem, factorise cubics, solve cubic equations and read cubic graphs.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, fresh numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Determine whether (x−4) is a factor of p(x)=x³−4x²−20x+48 by evaluating p(4). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Not a factor', 'not a factor'], explanation: 'p(4)=64−64−80+48=−32.\nSince p(4)=−32≠0, by the Factor Theorem (x−4) is NOT a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Show that (x+4) is a factor of p(x)=x³−4x²−20x+48 by evaluating p(−4).', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(−4)=−64−64+80+48=0.\nSince p(−4)=0, by the Factor Theorem (x+4) is a factor of p(x) ✓' },
        { difficulty: 'Easy', question: 'Determine whether (x−3) is a factor of p(x)=x³−7x−6 by evaluating p(3). State your conclusion.', answer: '', checkMode: 'auto', correctAnswer: '0, yes it is a factor', correctAnswers: ['0, yes it is a factor', 'yes', 'Yes', '0', 'yes, it is a factor'], explanation: 'p(3)=27−21−6=0.\nSince p(3)=0, by the Factor Theorem (x−3) IS a factor of p(x) ✓' },

        { difficulty: 'Easy-Medium', question: 'Divide x³−2x²−13x−10 by (x−5) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²+3x+2', correctAnswers: ['x²+3x+2', 'x^2+3x+2'], explanation: 'x³÷x=x². x²(x−5)=x³−5x². Subtract: 3x²−13x−10.\n3x²÷x=3x. 3x(x−5)=3x²−15x. Subtract: 2x−10.\n2x÷x=2. 2(x−5)=2x−10. Subtract: 0.\nQuotient: x²+3x+2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Divide x³+5x²−2x−24 by (x+3) using long division. State the quotient.', answer: '', checkMode: 'auto', correctAnswer: 'x²+2x-8', correctAnswers: ['x²+2x-8', 'x^2+2x-8'], explanation: 'x³÷x=x². x²(x+3)=x³+3x². Subtract: 2x²−2x−24.\n2x²÷x=2x. 2x(x+3)=2x²+6x. Subtract: −8x−24.\n−8x÷x=−8. −8(x+3)=−8x−24. Subtract: 0.\nQuotient: x²+2x−8 ✓' },
        { difficulty: 'Medium', question: 'Divide x³+6x²+3x−10 by (x−1) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²+7x+10', correctAnswers: ['x²+7x+10', 'x^2+7x+10'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Subtract: 7x²+3x−10.\n7x²÷x=7x. 7x(x−1)=7x²−7x. Subtract: 10x−10.\n10x÷x=10. 10(x−1)=10x−10. Subtract: 0.\nQuotient: x²+7x+10 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x−1) is a factor of x³+6x²+3x−10.' },
        ]},
        { difficulty: 'Medium', question: 'Divide x³+x²−22x−40 by (x+2) using long division. State the quotient and remainder.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient', correctAnswer: 'x²-x-20', correctAnswers: ['x²-x-20', 'x^2-x-20'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Subtract: −x²−22x−40.\n−x²÷x=−x. −x(x+2)=−x²−2x. Subtract: −20x−40.\n−20x÷x=−20. −20(x+2)=−20x−40. Subtract: 0.\nQuotient: x²−x−20 ✓' },
          { label: 'b) Remainder', correctAnswer: '0', explanation: 'The remainder is 0, confirming (x+2) is a factor of x³+x²−22x−40.' },
        ]},

        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 4x² − 19x − 14.', answer: '', checkMode: 'auto', correctAnswer: '(x-7)(x+2)(x+1)', correctAnswers: ['(x-7)(x+2)(x+1)', '(x-7)(x+1)(x+2)', '(x+2)(x+1)(x-7)'], explanation: 'Test x=7: 343−196−133−14=0 ✓. So (x−7) is a factor.\nDivide: quotient = x²+3x+2 = (x+1)(x+2).\nFull factorisation: (x−7)(x+1)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ + x² − 22x − 40.', answer: '', checkMode: 'auto', correctAnswer: '(x+2)(x-5)(x+4)', correctAnswers: ['(x+2)(x-5)(x+4)', '(x+2)(x+4)(x-5)', '(x-5)(x+4)(x+2)'], explanation: 'Test x=−2: −8+4+44−40=0 ✓. So (x+2) is a factor.\nDivide: quotient = x²−x−20 = (x−5)(x+4).\nFull factorisation: (x+2)(x−5)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 4x² − 7x + 10.', answer: '', checkMode: 'auto', correctAnswer: '(x+2)(x-1)(x-5)', correctAnswers: ['(x+2)(x-1)(x-5)', '(x+2)(x-5)(x-1)', '(x-1)(x-5)(x+2)'], explanation: 'Test x=−2: −8−16+14+10=0 ✓. So (x+2) is a factor.\nDivide: quotient = x²−6x+5 = (x−1)(x−5).\nFull factorisation: (x+2)(x−1)(x−5) ✓' },

        { difficulty: 'Medium', question: 'Fully factorise p(x) = 2x³ + 7x² − 7x − 12.', answer: '', checkMode: 'auto', correctAnswer: '(2x-3)(x+1)(x+4)', correctAnswers: ['(2x-3)(x+1)(x+4)', '(2x-3)(x+4)(x+1)', '(x+1)(x+4)(2x-3)'], explanation: 'Test x=1.5: 2(3.375)+7(2.25)−7(1.5)−12=6.75+15.75−10.5−12=0 ✓. So (2x−3) is a factor.\nDivide: quotient = x²+5x+4 = (x+1)(x+4).\nFull factorisation: (2x−3)(x+1)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Fully factorise p(x) = x³ − 2x² − 21x − 18, given that (x−6) is a factor.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x+3)(x+1)', correctAnswers: ['(x-6)(x+3)(x+1)', '(x-6)(x+1)(x+3)', '(x+3)(x+1)(x-6)'], explanation: 'Divide x³−2x²−21x−18 by (x−6): quotient = x²+4x+3 = (x+1)(x+3).\nFull factorisation: (x−6)(x+1)(x+3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Given p(x) = x³ − 5x² + 3x + 9:\n\na) Show that (x+1) is a factor of p(x).\nb) Fully factorise p(x).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Show (x + 1) is a factor', correctAnswer: '0', explanation: 'p(−1)=−1−5−3+9=0.\nSince p(−1)=0, by the Factor Theorem (x+1) is a factor ✓' },
          { label: 'b) Full factorisation of p(x)', correctAnswer: '(x+1)(x-3)²', correctAnswers: ['(x+1)(x-3)²', '(x+1)(x-3)^2', '(x+1)(x-3)(x-3)'], explanation: 'Divide x³−5x²+3x+9 by (x+1): quotient = x²−6x+9 = (x−3)².\nFull factorisation: (x+1)(x−3)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Solve for x: x³ − 5x² − 8x + 12 = 0, given that (x−6) is a factor.', answer: '', checkMode: 'auto', correctAnswer: 'x=6, x=1, x=-2', correctAnswers: ['x=6, x=1, x=-2', 'x=1, x=-2, x=6', '6; 1; -2', '6, 1, -2'], explanation: '(x−6)(x²+x−2)=0 → (x−6)(x−1)(x+2)=0.\nx−6=0 → x=6; x−1=0 → x=1; x+2=0 → x=−2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: x³ − 5x² + 3x + 9 = 0, using your factorisation from the earlier question.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1, x=3', correctAnswers: ['x=-1, x=3', 'x=3, x=-1', '-1; 3', '-1, 3'], explanation: '(x+1)(x−3)²=0.\nx+1=0 → x=−1; (x−3)²=0 → x=3 (a repeated root, so only two distinct solutions) ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2x³ + 7x² − 7x − 12 = 0, using your factorisation from Q11.', answer: '', checkMode: 'auto', correctAnswer: 'x=3/2, x=-1, x=-4', correctAnswers: ['x=3/2, x=-1, x=-4', 'x=-1, x=-4, x=3/2', '3/2; -1; -4', '1.5, -1, -4'], explanation: '(2x−3)(x+1)(x+4)=0.\n2x−3=0 → x=1½; x+1=0 → x=−1; x+4=0 → x=−4 ✓' },
        { difficulty: 'Hard', question: 'Given p(x)=x³+ax²+bx−18, and that p(2)=0 and p(−1)=0, find a and b, then solve p(x)=0 fully.', answer: '', checkMode: 'auto', correctAnswer: 'a=8, b=-11; x=2, x=-1, x=-9', correctAnswers: ['a=8, b=-11; x=2, x=-1, x=-9', 'a=8 b=-11 x=2 x=-1 x=-9'], explanation: 'p(2)=8+4a+2b−18=0 → 4a+2b=10 → 2a+b=5.\np(−1)=−1+a−b−18=0 → a−b=19.\nAdding the two equations (2a+b=5) and (a−b=19): 3a=24 → a=8, so b=−11.\np(x)=x³+8x²−11x−18=(x−2)(x+1)(x+9). Solving: x=2, x=−1, x=−9 ✓' },

        { difficulty: 'Hard', question: 'A cubic graph is described by y=x³−4x²−7x+10=(x+2)(x−1)(x−5). State the x-intercepts, the y-intercept, and the general shape (rising or falling from left to right).', answer: '', checkMode: 'auto', correctAnswer: 'x=-2, x=1, x=5; y=10; rises left to right', correctAnswers: ['x=-2, x=1, x=5; y=10; rises left to right', 'x=-2,x=1,x=5; y-int=10; rises'], explanation: 'x-intercepts: (x+2)=0 → x=−2; (x−1)=0 → x=1; (x−5)=0 → x=5.\ny-intercept: y=(2)(−1)(−5)=10.\nSince the leading coefficient is positive (x³ term), the graph rises from bottom-left to top-right ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: A cubic graph crosses the x-axis at x=6, x=−3 and x=−1, has a positive leading coefficient, and crosses the y-axis at y=−18] Using the sketch, write the equation of the cubic in factorised form y=(x−6)(x+3)(x+1), then verify the y-intercept matches the diagram.', answer: '', checkMode: 'auto', correctAnswer: 'y=-18, matches', correctAnswers: ['y=-18, matches', '-18', 'y-intercept is -18, which matches the diagram'], explanation: 'Substitute x=0 into y=(x−6)(x+3)(x+1): y=(−6)(3)(1)=−18.\nThis matches the y-intercept of −18 shown in the diagram, confirming the equation ✓' },
        { difficulty: 'Hard', question: 'Thabo sketches y=(x−4)(x+1)(x−1) and claims the graph touches (but does not cross) the x-axis at x=−1. Is he correct? Explain, then state all three x-intercepts and the y-intercept.', answer: '', checkMode: 'auto', correctAnswer: 'No, crosses at all three; x=4,-1,1; y=4', correctAnswers: ['No, crosses at all three; x=4,-1,1; y=4', 'No; x=4, x=-1, x=1; y-intercept=4'], explanation: 'Thabo is incorrect — all three factors (x−4), (x+1) and (x−1) are distinct with multiplicity 1, so the graph CROSSES the x-axis at all three intercepts, including x=−1.\nx-intercepts: x=4, x=−1, x=1.\ny-intercept: y=(−4)(1)(−1)=4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You can apply the Factor Theorem, cubic factorisation, equation solving and graph sketching with confidence.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered functions — polynomials.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 25, message: 'Outstanding! A perfect score — you have completely mastered polynomials for Grade 12. Excellent work!' },
    { minScore: 20, message: 'Excellent work! You have a very strong grasp of polynomial theory and long division. Review any missed parts and you will have it perfect.' },
    { minScore: 14, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 8, message: 'Good effort! Work through the study guide and worked examples for each section carefully, then try again.' },
    { minScore: 0, message: "Don't give up — polynomial methods take practice! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
