import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic equation roles) ────────────────────────────────
// brackets / given equation / each factor / x terms / rearranging → blue   (#2563eb)
// operation applied / zero product property / factorisation       → orange (#ea580c)
// solution(s)                                                     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Equations',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING MULTI-STEP LINEAR EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-multi-step-linear-equations',
      title: 'Solving Multi-Step Linear Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 8 you solved equations like ${bl('5x + 9 = 34')} using inverse operations. Now we extend this to equations that include ${bl('brackets')}. Before you can isolate x, you must first ${or('expand the brackets')} using the distributive property, and then ${or('combine any like terms')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('brackets / given equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('operation applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Step-by-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Expand')} — Multiply out any brackets using the distributive property. Watch the sign carefully when a bracket is preceded by a minus sign.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Simplify')} — Combine any like terms on the same side of the equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Solve')} — Use inverse operations to isolate x, exactly as you did in Grade 8.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch the sign when subtracting a bracket</p>` +
        `<p style="margin:0;color:#1e3a8a;">When a bracket is preceded by a minus sign, like ${bl('−3(x − 2)')}, the minus sign multiplies into <strong>every</strong> term inside: ${or('−3(x − 2) = −3x + 6')}, not −3x − 6. Always double-check this sign.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve 3(x + 2) = 21.',
          answer: `${gr('x = 5')}`,
          steps: [
            `${bl('Expand the bracket:')} ${or('3(x + 2) = 3x + 6')}`,
            `The equation is now: ${or('3x + 6 = 21')}`,
            `Subtract 6 from both sides: ${or('3x = 15')}`,
            `Divide both sides by 3: ${gr('x = 5')}`,
            `Check: 3(5 + 2) = 3 × 7 = 21 ✓`,
          ],
        },
        {
          question: 'Solve 5x − 3(x − 2) = 16.',
          answer: `${gr('x = 5')}`,
          steps: [
            `${bl('Expand the bracket:')} ${or('−3(x − 2) = −3x + 6')} (the minus sign flips both signs inside)`,
            `The equation is now: ${or('5x − 3x + 6 = 16')}`,
            `Combine like terms: ${or('2x + 6 = 16')}`,
            `Subtract 6 from both sides: ${or('2x = 10')}`,
            `Divide both sides by 2: ${gr('x = 5')}`,
            `Check: 5(5) − 3(5 − 2) = 25 − 3(3) = 25 − 9 = 16 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve 2(x + 3) = 16.',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Expand: 2x + 6 = 16.\nSubtract 6: 2x = 10.\nDivide by 2: x = 5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve 3(2x − 1) = 15.',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: 'Expand: 6x − 3 = 15.\nAdd 3: 6x = 18.\nDivide by 6: x = 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve 6(x − 2) − 2(x + 1) = 14.',
          answer: 'x = 7',
          checkMode: 'auto',
          correctAnswer: 'x=7',
          correctAnswers: ['x=7', 'x = 7', '7'],
          explanation: 'Expand both brackets: 6x − 12 − 2x − 2 = 14.\nCombine like terms: 4x − 14 = 14.\nAdd 14: 4x = 28.\nDivide by 4: x = 7 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to expand brackets using the distributive property, combine like terms, and then solve a multi-step linear equation using inverse operations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VARIABLES ON BOTH SIDES AND EQUATIONS WITH FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'variables-both-sides-fractions',
      title: 'Variables on Both Sides and Equations with Fractions',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Some equations have the variable ${bl('x')} on both sides. To solve these, first move all the ${bl('x')} terms to one side by adding or subtracting, then solve as usual. Other equations involve ${or('fractions')} — multiply both sides by the denominator to clear the fraction before solving.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x terms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('operation applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two new equation types</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Variables on Both Sides</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For ${bl('5x + 3 = 2x + 18')}, subtract ${bl('2x')} from both sides first: ${or('3x + 3 = 18')}. Now solve as a normal two-step equation.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Equations with Fractions</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For ${or('(x + 4) ÷ 2 = 9')}, multiply both sides by 2 first to clear the fraction: ${or('x + 4 = 18')}. Now solve as a normal equation.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Choosing which side to move the x terms to</p>` +
        `<p style="margin:0;color:#1e3a8a;">Subtract the ${bl('smaller x term')} from both sides — this keeps the remaining x term ${gr('positive')}, which is easier to work with. In ${bl('5x + 3 = 2x + 18')}, subtract ${bl('2x')} (not 5x) since 2x is smaller.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve 5x + 3 = 2x + 18.',
          answer: `${gr('x = 5')}`,
          steps: [
            `Subtract ${bl('2x')} from both sides: ${or('3x + 3 = 18')}`,
            `Subtract 3 from both sides: ${or('3x = 15')}`,
            `Divide both sides by 3: ${gr('x = 5')}`,
            `Check: 5(5) + 3 = 28, and 2(5) + 18 = 28 ✓`,
          ],
        },
        {
          question: 'Solve x ÷ 3 + 2 = 7.',
          answer: `${gr('x = 15')}`,
          steps: [
            `Subtract 2 from both sides: ${or('x ÷ 3 = 5')}`,
            `Multiply both sides by 3: ${gr('x = 15')}`,
            `Check: 15 ÷ 3 + 2 = 5 + 2 = 7 ✓`,
          ],
        },
        {
          question: 'Solve (x + 4) ÷ 2 = 9.',
          answer: `${gr('x = 14')}`,
          steps: [
            `Multiply both sides by 2 to clear the fraction: ${or('x + 4 = 18')}`,
            `Subtract 4 from both sides: ${gr('x = 14')}`,
            `Check: (14 + 4) ÷ 2 = 18 ÷ 2 = 9 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve 4x + 5 = x + 17.',
          answer: 'x = 4',
          checkMode: 'auto',
          correctAnswer: 'x=4',
          correctAnswers: ['x=4', 'x = 4', '4'],
          explanation: 'Subtract x from both sides: 3x + 5 = 17.\nSubtract 5: 3x = 12.\nDivide by 3: x = 4 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve x ÷ 4 + 3 = 8.',
          answer: 'x = 20',
          checkMode: 'auto',
          correctAnswer: 'x=20',
          correctAnswers: ['x=20', 'x = 20', '20'],
          explanation: 'Subtract 3 from both sides: x ÷ 4 = 5.\nMultiply both sides by 4: x = 20 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Solve 7x − 2 = 3x + 18.',
              correctAnswer: 'x=5',
              correctAnswers: ['x=5', 'x = 5', '5'],
              explanation: 'Subtract 3x from both sides: 4x − 2 = 18.\nAdd 2: 4x = 20.\nDivide by 4: x = 5 ✓',
            },
            {
              label: 'b) Solve (2x − 1) ÷ 3 = 5.',
              correctAnswer: 'x=8',
              correctAnswers: ['x=8', 'x = 8', '8'],
              explanation: 'Multiply both sides by 3: 2x − 1 = 15.\nAdd 1: 2x = 16.\nDivide by 2: x = 8 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve an equation with variables on both sides by moving the smaller x term across, followed by an example clearing a fraction by multiplying both sides" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING EQUATIONS USING FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-factorisation',
      title: 'Solving Equations Using Factorisation',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We extend solving equations to use <strong>factorisation</strong>. When an equation can be factorised, we set up each factor to potentially equal zero, since any number multiplied by zero gives zero.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factorised brackets')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('each solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Step-by-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Rearrange')} — Make sure one side of the equation equals zero before you begin.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Factorise')} — Find two numbers that multiply to the constant term and add to the coefficient of x. Write the expression as ${bl('two brackets')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Set each factor to zero')} — If ${bl('(x + a)(x + b)')} = 0, then either x + a = 0 or x + b = 0, giving ${or('two solutions')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why we need zero on one side</p>` +
        `<p style="margin:0;color:#1e3a8a;">The zero product property only works when the product equals <strong>zero</strong>. Always rearrange the equation so that one side equals zero before factorising.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x² + 5x + 6 = 0 by factorising.',
          answer: `${or('x = −2')} or ${or('x = −3')}`,
          steps: [
            `${bl('Factorise:')} Find two numbers that multiply to 6 and add to 5. Those numbers are 2 and 3.<br>${bl('(x + 2)(x + 3)')} = 0`,
            `Set each factor to zero: x + 2 = 0 or x + 3 = 0`,
            `Solve each equation: ${or('x = −2')} or ${or('x = −3')}`,
          ],
        },
        {
          question: 'Solve x² − 9x + 20 = 0.',
          answer: `${or('x = 4')} or ${or('x = 5')}`,
          steps: [
            `${bl('Factorise:')} Find two numbers that multiply to 20 and add to −9. Those numbers are −4 and −5.<br>${bl('(x − 4)(x − 5)')} = 0`,
            `Set each factor to zero: x − 4 = 0 or x − 5 = 0`,
            `Solve each equation: ${or('x = 4')} or ${or('x = 5')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve x² + 7x + 10 = 0 by factorising.',
          answer: 'x = −2 or x = −5',
          checkMode: 'auto',
          correctAnswer: 'x=-2 or x=-5',
          correctAnswers: ['x=-2 or x=-5', 'x=-5 or x=-2', 'x = -2 or x = -5', 'x = -5 or x = -2', '-2 or -5', '-5 or -2'],
          explanation: 'Factorise: find numbers multiplying to 10, adding to 7 → 2 and 5.\n(x + 2)(x + 5) = 0\nx + 2 = 0 or x + 5 = 0\nx = −2 or x = −5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve x² − 8x + 15 = 0.',
          answer: 'x = 3 or x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=3 or x=5',
          correctAnswers: ['x=3 or x=5', 'x=5 or x=3', 'x = 3 or x = 5', 'x = 5 or x = 3', '3 or 5', '5 or 3'],
          explanation: 'Factorise: find numbers multiplying to 15, adding to −8 → −3 and −5.\n(x − 3)(x − 5) = 0\nx − 3 = 0 or x − 5 = 0\nx = 3 or x = 5 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho solves x² + 3x − 10 = 0 and gets x = 2 or x = −5. Is he correct?',
          answer: 'He is correct — factorise by finding numbers that multiply to −10 and add to 3: those are 5 and −2. So (x + 5)(x − 2) = 0, giving x = −5 or x = 2. Both of Sipho\'s solutions are correct.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve a quadratic equation by factorising into two brackets and applying the zero product property" />',

      diagramPlaceholder:
        'Flowchart showing (x + 2)(x + 3) = 0 branching into two zero-product equations x + 2 = 0 and x + 3 = 0, leading to the two solutions x = −2 and x = −3',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 185" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="55" y="6" width="150" height="28" rx="6" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">(x + 2)(x + 3) = 0</text>` +
        `<line x1="130" y1="34" x2="130" y2="48" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="130" y1="48" x2="65" y2="64" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="130" y1="48" x2="195" y2="64" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="45" text-anchor="middle" font-size="10" font-style="italic" fill="#6b7280">or</text>` +
        `<rect x="20" y="64" width="90" height="26" rx="6" fill="rgba(234,88,12,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">x + 2 = 0</text>` +
        `<rect x="150" y="64" width="90" height="26" rx="6" fill="rgba(234,88,12,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="195" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">x + 3 = 0</text>` +
        `<line x1="65" y1="90" x2="65" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="65,118 60,109 70,109" fill="#0f1f3d"/>` +
        `<line x1="195" y1="90" x2="195" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="195,118 190,109 200,109" fill="#0f1f3d"/>` +
        `<rect x="30" y="120" width="70" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">x = −2</text>` +
        `<rect x="160" y="120" width="70" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="195" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">x = −3</text>` +
        `<text x="130" y="172" text-anchor="middle" font-size="11" fill="#6b7280">Two solutions from one factorised equation</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — EQUATIONS OF THE FORM 'PRODUCT OF FACTORS = 0'
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-of-factors-zero',
      title: "Equations of the Form 'Product of Factors = 0'",
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We solve equations already given in factorised form, recognising that if a product of factors equals zero, then at least one of the factors must equal zero — this is called the <strong>zero product property</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('each factor')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('zero product property')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solutions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The zero product property</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">If ${bl('A')} × ${bl('B')} = ${or('0')}, then ${bl('A')} = ${or('0')} or ${bl('B')} = ${or('0')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">This means: whenever a product of factors equals zero, <strong>at least one</strong> of the factors must be zero. Set each factor equal to zero and solve.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common mistake to avoid</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Incorrect — missing a solution</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For x(x − 6) = 0, writing only x = 6 misses the solution x = 0. The factor "x" gives the equation x = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Correct — both solutions</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For x(x − 6) = 0: ${bl('x')} = 0 or ${bl('x − 6')} = 0, giving ${gr('x = 0')} or ${gr('x = 6')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Every factor gives a solution</p>` +
        `<p style="margin:0;color:#1e3a8a;">Count the number of factors — that is the maximum number of solutions. Work through <strong>every</strong> factor, including lone variable factors like x or 2x.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve (x − 7)(x + 2) = 0.',
          answer: `${gr('x = 7')} or ${gr('x = −2')}`,
          steps: [
            `${or('Zero product property:')} If ${bl('(x − 7)')} × ${bl('(x + 2)')} = 0, then ${bl('x − 7')} = 0 or ${bl('x + 2')} = 0`,
            `Solve ${bl('x − 7')} = 0: ${gr('x = 7')}`,
            `Solve ${bl('x + 2')} = 0: ${gr('x = −2')}`,
            `Solutions: ${gr('x = 7')} or ${gr('x = −2')} ✓`,
          ],
        },
        {
          question: 'Sipho solves x(x − 6) = 0 and gets only x = 6. Is he correct?',
          answer: `No — Sipho is missing a solution. The correct solutions are ${gr('x = 0')} or ${gr('x = 6')}`,
          steps: [
            `${or('Zero product property:')} If ${bl('x')} × ${bl('(x − 6)')} = 0, then ${bl('x')} = 0 or ${bl('x − 6')} = 0`,
            `Solve ${bl('x')} = 0: ${gr('x = 0')}`,
            `Solve ${bl('x − 6')} = 0: ${gr('x = 6')}`,
            `Sipho forgot that the factor ${bl('x')} itself gives the solution ${gr('x = 0')}. He is incorrect — there are two solutions: ${gr('x = 0')} or ${gr('x = 6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve (x − 4)(x + 9) = 0.',
          answer: 'x = 4 or x = −9',
          checkMode: 'auto',
          correctAnswer: 'x=4 or x=-9',
          correctAnswers: ['x=4 or x=-9', 'x=-9 or x=4', 'x = 4 or x = -9', 'x = -9 or x = 4', '4 or -9', '-9 or 4'],
          explanation: 'Zero product property: (x − 4) = 0 or (x + 9) = 0.\nx − 4 = 0 → x = 4\nx + 9 = 0 → x = −9\nSolutions: x = 4 or x = −9 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve x(x + 8) = 0.',
          answer: 'x = 0 or x = −8',
          checkMode: 'auto',
          correctAnswer: 'x=0 or x=-8',
          correctAnswers: ['x=0 or x=-8', 'x=-8 or x=0', 'x = 0 or x = -8', 'x = -8 or x = 0', '0 or -8', '-8 or 0'],
          explanation: 'Zero product property: x = 0 or (x + 8) = 0.\nx = 0\nx + 8 = 0 → x = −8\nSolutions: x = 0 or x = −8 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato solves (2x − 6)(x + 3) = 0 and gets x = 3 or x = −3. Check her answer. Is she correct?',
          answer: 'She is correct — 2x − 6 = 0 gives 2x = 6, so x = 3. And x + 3 = 0 gives x = −3. Both solutions are x = 3 or x = −3, which matches what Lerato wrote.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the zero product property to solve equations already given in factorised form" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING EQUATIONS REQUIRING FACTORISATION FIRST
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-factorise-first',
      title: 'Solving Equations Requiring Factorisation First',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We solve quadratic equations that must first be <strong>rearranged and factorised</strong> before applying the zero product property, often requiring the difference of two squares or common factor methods first.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rearranging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('factorisation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solutions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Factorisation methods at a glance</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Common factor</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Take out the highest common factor first.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">e.g. 2x² − 8x = ${or('2x')}(x − 4)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Difference of two squares</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">a² − b² = (a − b)(a + b)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">e.g. x² − 16 = ${or('(x − 4)(x + 4)')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Trinomial factorisation</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Find two numbers that multiply to c and add to b.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">e.g. x² + 4x − 21 = ${or('(x + 7)(x − 3)')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always rearrange first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Move all terms to one side so the equation equals zero. Only then ${or('factorise')} and apply the zero product property to find the ${gr('solutions')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x² − 16 = 0.',
          answer: `${gr('x = 4')} or ${gr('x = −4')}`,
          steps: [
            `${bl('Recognise')} as a difference of two squares: x² − 16 = x² − 4²`,
            `${or('Factorise:')} ${or('(x − 4)(x + 4)')} = 0`,
            `Set each factor to zero: x − 4 = 0 or x + 4 = 0`,
            `Solutions: ${gr('x = 4')} or ${gr('x = −4')} ✓`,
          ],
        },
        {
          question: 'Solve 2x² − 8x = 0.',
          answer: `${gr('x = 0')} or ${gr('x = 4')}`,
          steps: [
            `${bl('Rearrange:')} One side is already zero.`,
            `${or('Factor out the common factor:')} ${or('2x')}(x − 4) = 0`,
            `Set each factor to zero: 2x = 0 or x − 4 = 0`,
            `Solutions: ${gr('x = 0')} or ${gr('x = 4')} ✓`,
          ],
        },
        {
          question: 'Lerato solves x² + 4x − 21 = 0. Show the full working.',
          answer: `${gr('x = −7')} or ${gr('x = 3')}`,
          steps: [
            `${bl('Rearrange:')} One side is already zero.`,
            `${or('Factorise:')} Find two numbers that multiply to −21 and add to 4. Those numbers are 7 and −3.<br>${or('(x + 7)(x − 3)')} = 0`,
            `Set each factor to zero: x + 7 = 0 or x − 3 = 0`,
            `Solutions: ${gr('x = −7')} or ${gr('x = 3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Solve x² − 36 = 0.',
          answer: 'x = 6 or x = −6',
          checkMode: 'auto',
          correctAnswer: 'x=6 or x=-6',
          correctAnswers: ['x=6 or x=-6', 'x=-6 or x=6', 'x = 6 or x = -6', 'x = -6 or x = 6', '6 or -6', '-6 or 6'],
          explanation: 'Recognise as difference of two squares: x² − 36 = x² − 6²\nFactorise: (x − 6)(x + 6) = 0\nx − 6 = 0 or x + 6 = 0\nx = 6 or x = −6 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve 3x² − 12x = 0 by factoring out the common factor first.',
          answer: 'Factor out 3x: 3x(x − 4) = 0. Set each factor to zero: 3x = 0 or x − 4 = 0. Solutions: x = 0 or x = 4.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Solve x² + x − 12 = 0.',
          answer: 'x = −4 or x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=-4 or x=3',
          correctAnswers: ['x=-4 or x=3', 'x=3 or x=-4', 'x = -4 or x = 3', 'x = 3 or x = -4', '-4 or 3', '3 or -4'],
          explanation: 'Factorise: find numbers multiplying to −12, adding to 1 → 4 and −3.\n(x + 4)(x − 3) = 0\nx + 4 = 0 or x − 3 = 0\nx = −4 or x = 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo solves x² − 49 = 0 and gets only x = 7. Is he correct? Explain.',
          answer: 'No — Thabo is missing a solution. x² − 49 = 0 is a difference of two squares: (x − 7)(x + 7) = 0. This gives x − 7 = 0 or x + 7 = 0, so x = 7 or x = −7. Thabo forgot the negative solution.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Solve x² − 10x + 24 = 0.',
          answer: 'x = 4 or x = 6',
          checkMode: 'auto',
          correctAnswer: 'x=4 or x=6',
          correctAnswers: ['x=4 or x=6', 'x=6 or x=4', 'x = 4 or x = 6', 'x = 6 or x = 4', '4 or 6', '6 or 4'],
          explanation: 'Factorise: find numbers multiplying to 24, adding to −10 → −4 and −6.\n(x − 4)(x − 6) = 0\nx − 4 = 0 or x − 6 = 0\nx = 4 or x = 6 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve 5x² − 45 = 0, identifying the common factor and difference of squares steps.',
          answer: 'Step 1: Factor out the common factor 5: 5(x² − 9) = 0.\nStep 2: Recognise the difference of squares: 5(x − 3)(x + 3) = 0.\nStep 3: Set each factor to zero: x − 3 = 0 or x + 3 = 0.\nSolutions: x = 3 or x = −3.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says every quadratic equation has exactly two solutions. Is she always correct? Explain with an example.',
          answer: 'Not always — some quadratic equations have only one repeated solution (for example x² = 0 gives only x = 0), and some have no real solutions at all (for example x² + 1 = 0). Amahle is incorrect as a general claim.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Solve x² + 2x − 35 = 0 and verify your answer by substituting back into the original equation.',
          answer: 'Factorise: find numbers multiplying to −35, adding to 2 → 7 and −5.\n(x + 7)(x − 5) = 0\nx = −7 or x = 5.\nVerify x = 5: 25 + 10 − 35 = 0 ✓\nVerify x = −7: 49 − 14 − 35 = 0 ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Solve 4x² − 16x = 0, fully showing all steps including factoring.',
          answer: 'x = 0 or x = 4',
          checkMode: 'auto',
          correctAnswer: 'x=0 or x=4',
          correctAnswers: ['x=0 or x=4', 'x=4 or x=0', 'x = 0 or x = 4', 'x = 4 or x = 0', '0 or 4', '4 or 0'],
          explanation: 'Factor out the common factor 4x: 4x(x − 4) = 0.\nSet each factor to zero: 4x = 0 or x − 4 = 0.\n4x = 0 → x = 0\nx − 4 = 0 → x = 4\nSolutions: x = 0 or x = 4 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rearrange a quadratic equation, apply common factor and difference of squares factorisation, then use the zero product property" />',
    },
  ],
  scoreMessages: [
    { minScore: 22, message: 'Outstanding! You have mastered algebraic equations.' },
    { minScore: 16, message: 'Great work!' },
    { minScore: 11, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Multi-step linear equations with brackets (positions 0-2)
        { difficulty: 'Medium', question: 'Solve: 4(x + 3) = 32', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: '4(x + 3) = 32\nExpand: 4x + 12 = 32\nSubtract 12: 4x = 20\nDivide by 4: x = 5\nCheck: 4(5 + 3) = 4(8) = 32 ✓' },
        { difficulty: 'Medium', question: 'Solve: 7x − 2(x − 4) = 38', answer: 'x = 6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: '7x − 2(x − 4) = 38\nExpand (the minus sign flips both signs): 7x − 2x + 8 = 38\nCombine like terms: 5x + 8 = 38\nSubtract 8: 5x = 30\nDivide by 5: x = 6\nCheck: 7(6) − 2(6 − 4) = 42 − 4 = 38 ✓' },
        { difficulty: 'Hard', question: 'A student solves 5(x − 2) = 3x + 8 by writing 5x − 2 = 3x + 8, forgetting to multiply the 2 by 5. Explain the error and give the correct solution.', answer: 'The student only multiplied the first term inside the bracket by 5 and left the −2 unmultiplied. Correct method: expand the bracket fully to get 5x − 10 = 3x + 8, subtract 3x from both sides to get 2x − 10 = 8, add 10 to both sides to get 2x = 18, then divide by 2 to get x = 9. Check: 5(9 − 2) = 5(7) = 35 and 3(9) + 8 = 35 ✓', checkMode: 'self' },

        // Block B — Variables on both sides and equations with fractions (positions 3-5)
        { difficulty: 'Medium', question: 'Solve: 6x + 7 = 3x + 22', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: '6x + 7 = 3x + 22\nSubtract 3x from both sides: 3x + 7 = 22\nSubtract 7 from both sides: 3x = 15\nDivide by 3: x = 5\nCheck: 6(5) + 7 = 37 and 3(5) + 22 = 37 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 5) ÷ 3 = 8', answer: 'x = 19', checkMode: 'auto', correctAnswer: 'x=19', correctAnswers: ['x=19', 'x = 19', '19'], explanation: '(x + 5) ÷ 3 = 8\nMultiply both sides by 3: x + 5 = 24\nSubtract 5: x = 19\nCheck: (19 + 5) ÷ 3 = 24 ÷ 3 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/2 + x/5 = 7', answer: 'x = 10', checkMode: 'auto', correctAnswer: 'x=10', correctAnswers: ['x=10', 'x = 10', '10'], explanation: 'x/2 + x/5 = 7\nMultiply every term by the LCD, 10: 5x + 2x = 70\nCombine like terms: 7x = 70\nDivide by 7: x = 10\nCheck: 10/2 + 10/5 = 5 + 2 = 7 ✓' },

        // Block C — Solving quadratics by factorising a trinomial (positions 6-9)
        { difficulty: 'Medium', question: 'Solve x² + 9x + 18 = 0 by factorising.', answer: 'x = −3 or x = −6', checkMode: 'auto', correctAnswer: 'x=-3 or x=-6', correctAnswers: ['x=-3 or x=-6', 'x=-6 or x=-3', 'x = -3 or x = -6', 'x = -6 or x = -3', '-3 or -6', '-6 or -3'], explanation: 'Find two numbers multiplying to 18, adding to 9 → 3 and 6.\n(x + 3)(x + 6) = 0\nx + 3 = 0 or x + 6 = 0\nx = −3 or x = −6 ✓' },
        { difficulty: 'Medium', question: 'Solve x² − 11x + 24 = 0.', answer: 'x = 3 or x = 8', checkMode: 'auto', correctAnswer: 'x=3 or x=8', correctAnswers: ['x=3 or x=8', 'x=8 or x=3', 'x = 3 or x = 8', 'x = 8 or x = 3', '3 or 8', '8 or 3'], explanation: 'Find two numbers multiplying to 24, adding to −11 → −3 and −8.\n(x − 3)(x − 8) = 0\nx − 3 = 0 or x − 8 = 0\nx = 3 or x = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve x² − 2x − 15 = 0.', answer: 'x = 5 or x = −3', checkMode: 'auto', correctAnswer: 'x=5 or x=-3', correctAnswers: ['x=5 or x=-3', 'x=-3 or x=5', 'x = 5 or x = -3', 'x = -3 or x = 5', '5 or -3', '-3 or 5'], explanation: 'Find two numbers multiplying to −15, adding to −2 → −5 and 3.\n(x − 5)(x + 3) = 0\nx − 5 = 0 or x + 3 = 0\nx = 5 or x = −3 ✓' },
        { difficulty: 'Hard', question: 'Kabelo solves x² + 6x − 16 = 0 and gets x = 2 or x = −8. Check his answer. Is he correct?', answer: 'He is correct — find two numbers multiplying to −16 and adding to 6: those are 8 and −2. So (x + 8)(x − 2) = 0, giving x = −8 or x = 2. Both of Kabelo\'s solutions match.', checkMode: 'self' },

        // Block D — Zero product property (positions 10-12)
        { difficulty: 'Medium', question: 'Solve (x − 5)(x + 8) = 0.', answer: 'x = 5 or x = −8', checkMode: 'auto', correctAnswer: 'x=5 or x=-8', correctAnswers: ['x=5 or x=-8', 'x=-8 or x=5', 'x = 5 or x = -8', 'x = -8 or x = 5', '5 or -8', '-8 or 5'], explanation: 'Zero product property: x − 5 = 0 or x + 8 = 0.\nx − 5 = 0 → x = 5\nx + 8 = 0 → x = −8\nSolutions: x = 5 or x = −8 ✓' },
        { difficulty: 'Medium', question: 'Solve x(x − 9) = 0.', answer: 'x = 0 or x = 9', checkMode: 'auto', correctAnswer: 'x=0 or x=9', correctAnswers: ['x=0 or x=9', 'x=9 or x=0', 'x = 0 or x = 9', 'x = 9 or x = 0', '0 or 9', '9 or 0'], explanation: 'Zero product property: x = 0 or x − 9 = 0.\nx = 0\nx − 9 = 0 → x = 9\nSolutions: x = 0 or x = 9 ✓' },
        { difficulty: 'Hard', question: 'Bongani solves x(x + 7) = 0 and writes only x = −7 as the answer. Is he correct? Explain.', answer: 'No — Bongani is missing a solution. The factor x itself gives x = 0, so the full solution is x = 0 or x = −7. He forgot that a lone variable factor is still a factor that must be set to zero.', checkMode: 'self' },

        // Block E — Factorising first: common factor and difference of squares (positions 13-16)
        { difficulty: 'Medium', question: 'Solve x² − 25 = 0.', answer: 'x = 5 or x = −5', checkMode: 'auto', correctAnswer: 'x=5 or x=-5', correctAnswers: ['x=5 or x=-5', 'x=-5 or x=5', 'x = 5 or x = -5', 'x = -5 or x = 5', '5 or -5', '-5 or 5'], explanation: 'Recognise as a difference of two squares: x² − 25 = x² − 5²\nFactorise: (x − 5)(x + 5) = 0\nx − 5 = 0 or x + 5 = 0\nx = 5 or x = −5 ✓' },
        { difficulty: 'Medium', question: 'Solve 3x² − 21x = 0 by factoring out the common factor first.', answer: 'x = 0 or x = 7', checkMode: 'auto', correctAnswer: 'x=0 or x=7', correctAnswers: ['x=0 or x=7', 'x=7 or x=0', 'x = 0 or x = 7', 'x = 7 or x = 0', '0 or 7', '7 or 0'], explanation: 'Factor out the common factor 3x: 3x(x − 7) = 0.\n3x = 0 → x = 0\nx − 7 = 0 → x = 7\nSolutions: x = 0 or x = 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve 2x² − 32 = 0, identifying the common factor and difference of squares steps.', answer: 'Step 1: Factor out the common factor 2: 2(x² − 16) = 0.\nStep 2: Recognise the difference of squares: 2(x − 4)(x + 4) = 0.\nStep 3: Set each factor to zero: x − 4 = 0 or x + 4 = 0.\nSolutions: x = 4 or x = −4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve x² + 5x = 24, showing the rearranging step before you factorise.', answer: 'x = −8 or x = 3', checkMode: 'auto', correctAnswer: 'x=-8 or x=3', correctAnswers: ['x=-8 or x=3', 'x=3 or x=-8', 'x = -8 or x = 3', 'x = 3 or x = -8', '-8 or 3', '3 or -8'], explanation: 'Rearrange so one side is zero: x² + 5x − 24 = 0.\nFind two numbers multiplying to −24, adding to 5 → 8 and −3.\n(x + 8)(x − 3) = 0\nx + 8 = 0 or x − 3 = 0\nx = −8 or x = 3 ✓' },

        // Block F — Applied word problems and error-critique mixing linear and quadratic skills (positions 17-19)
        { difficulty: 'Hard', question: 'A rectangular garden has a length that is 3 m more than its width. If the area is 40 m², form an equation in terms of the width w and solve for w (reject any negative solution, since width cannot be negative).', answer: 'w(w + 3) = 40\nw² + 3w − 40 = 0\n(w + 8)(w − 5) = 0\nw = −8 or w = 5\nSince width cannot be negative, w = 5.\nThe width is 5 m and the length is 5 + 3 = 8 m.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twice a number increased by 9 equals the number increased by 16. Find the number.', answer: 'x = 7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: 'Let the number be x.\n2x + 9 = x + 16\nSubtract x from both sides: x + 9 = 16\nSubtract 9: x = 7\nCheck: 2(7) + 9 = 23 and 7 + 16 = 23 ✓' },
        { difficulty: 'Hard', question: 'Zanele solves x² − 6x = 0 and says the only solution is x = 6, because dividing both sides by x gives x − 6 = 0. Explain her error and give the correct solution(s).', answer: 'Zanele\'s error is dividing both sides by x — this is not allowed because x could be zero, and dividing by zero is undefined, so it silently throws away the solution x = 0. The correct method is to factorise instead: x(x − 6) = 0, giving x = 0 or x − 6 = 0, so x = 0 or x = 6.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, including factorising and the zero product property.' },
        { minScore: 14, message: 'Great work! Review any missed questions on factorising or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising trinomials and the zero product property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Multi-step linear equations with brackets (positions 0-2)
        { difficulty: 'Medium', question: 'Solve: 5(x + 4) = 45', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: '5(x + 4) = 45\nExpand: 5x + 20 = 45\nSubtract 20: 5x = 25\nDivide by 5: x = 5\nCheck: 5(5 + 4) = 5(9) = 45 ✓' },
        { difficulty: 'Medium', question: 'Solve: 8x − 3(x − 5) = 50', answer: 'x = 7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: '8x − 3(x − 5) = 50\nExpand (the minus sign flips both signs): 8x − 3x + 15 = 50\nCombine like terms: 5x + 15 = 50\nSubtract 15: 5x = 35\nDivide by 5: x = 7\nCheck: 8(7) − 3(7 − 5) = 56 − 6 = 50 ✓' },
        { difficulty: 'Hard', question: 'A student solves 6(x − 3) = 2x + 10 by writing 6x − 3 = 2x + 10, forgetting to multiply the 3 by 6. Explain the error and give the correct solution.', answer: 'The student only multiplied the first term inside the bracket by 6 and left the −3 unmultiplied. Correct method: expand the bracket fully to get 6x − 18 = 2x + 10, subtract 2x from both sides to get 4x − 18 = 10, add 18 to both sides to get 4x = 28, then divide by 4 to get x = 7. Check: 6(7 − 3) = 6(4) = 24 and 2(7) + 10 = 24 ✓', checkMode: 'self' },

        // Block B — Variables on both sides and equations with fractions (positions 3-5)
        { difficulty: 'Medium', question: 'Solve: 7x + 4 = 2x + 29', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: '7x + 4 = 2x + 29\nSubtract 2x from both sides: 5x + 4 = 29\nSubtract 4 from both sides: 5x = 25\nDivide by 5: x = 5\nCheck: 7(5) + 4 = 39 and 2(5) + 29 = 39 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 8) ÷ 4 = 9', answer: 'x = 28', checkMode: 'auto', correctAnswer: 'x=28', correctAnswers: ['x=28', 'x = 28', '28'], explanation: '(x + 8) ÷ 4 = 9\nMultiply both sides by 4: x + 8 = 36\nSubtract 8: x = 28\nCheck: (28 + 8) ÷ 4 = 36 ÷ 4 = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/3 + x/6 = 9', answer: 'x = 18', checkMode: 'auto', correctAnswer: 'x=18', correctAnswers: ['x=18', 'x = 18', '18'], explanation: 'x/3 + x/6 = 9\nMultiply every term by the LCD, 6: 2x + x = 54\nCombine like terms: 3x = 54\nDivide by 3: x = 18\nCheck: 18/3 + 18/6 = 6 + 3 = 9 ✓' },

        // Block C — Solving quadratics by factorising a trinomial (positions 6-9)
        { difficulty: 'Medium', question: 'Solve x² + 8x + 15 = 0 by factorising.', answer: 'x = −3 or x = −5', checkMode: 'auto', correctAnswer: 'x=-3 or x=-5', correctAnswers: ['x=-3 or x=-5', 'x=-5 or x=-3', 'x = -3 or x = -5', 'x = -5 or x = -3', '-3 or -5', '-5 or -3'], explanation: 'Find two numbers multiplying to 15, adding to 8 → 3 and 5.\n(x + 3)(x + 5) = 0\nx + 3 = 0 or x + 5 = 0\nx = −3 or x = −5 ✓' },
        { difficulty: 'Medium', question: 'Solve x² − 13x + 36 = 0.', answer: 'x = 4 or x = 9', checkMode: 'auto', correctAnswer: 'x=4 or x=9', correctAnswers: ['x=4 or x=9', 'x=9 or x=4', 'x = 4 or x = 9', 'x = 9 or x = 4', '4 or 9', '9 or 4'], explanation: 'Find two numbers multiplying to 36, adding to −13 → −4 and −9.\n(x − 4)(x − 9) = 0\nx − 4 = 0 or x − 9 = 0\nx = 4 or x = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve x² − 3x − 18 = 0.', answer: 'x = 6 or x = −3', checkMode: 'auto', correctAnswer: 'x=6 or x=-3', correctAnswers: ['x=6 or x=-3', 'x=-3 or x=6', 'x = 6 or x = -3', 'x = -3 or x = 6', '6 or -3', '-3 or 6'], explanation: 'Find two numbers multiplying to −18, adding to −3 → −6 and 3.\n(x − 6)(x + 3) = 0\nx − 6 = 0 or x + 3 = 0\nx = 6 or x = −3 ✓' },
        { difficulty: 'Hard', question: 'Palesa solves x² + 2x − 24 = 0 and gets x = 4 or x = −6. Check her answer. Is she correct?', answer: 'She is correct — find two numbers multiplying to −24 and adding to 2: those are 6 and −4. So (x + 6)(x − 4) = 0, giving x = −6 or x = 4. Both of Palesa\'s solutions match.', checkMode: 'self' },

        // Block D — Zero product property (positions 10-12)
        { difficulty: 'Medium', question: 'Solve (x − 6)(x + 4) = 0.', answer: 'x = 6 or x = −4', checkMode: 'auto', correctAnswer: 'x=6 or x=-4', correctAnswers: ['x=6 or x=-4', 'x=-4 or x=6', 'x = 6 or x = -4', 'x = -4 or x = 6', '6 or -4', '-4 or 6'], explanation: 'Zero product property: x − 6 = 0 or x + 4 = 0.\nx − 6 = 0 → x = 6\nx + 4 = 0 → x = −4\nSolutions: x = 6 or x = −4 ✓' },
        { difficulty: 'Medium', question: 'Solve x(x − 11) = 0.', answer: 'x = 0 or x = 11', checkMode: 'auto', correctAnswer: 'x=0 or x=11', correctAnswers: ['x=0 or x=11', 'x=11 or x=0', 'x = 0 or x = 11', 'x = 11 or x = 0', '0 or 11', '11 or 0'], explanation: 'Zero product property: x = 0 or x − 11 = 0.\nx = 0\nx − 11 = 0 → x = 11\nSolutions: x = 0 or x = 11 ✓' },
        { difficulty: 'Hard', question: 'Tumelo solves x(x + 9) = 0 and writes only x = −9 as the answer. Is he correct? Explain.', answer: 'No — Tumelo is missing a solution. The factor x itself gives x = 0, so the full solution is x = 0 or x = −9. He forgot that a lone variable factor is still a factor that must be set to zero.', checkMode: 'self' },

        // Block E — Factorising first: common factor and difference of squares (positions 13-16)
        { difficulty: 'Medium', question: 'Solve x² − 49 = 0.', answer: 'x = 7 or x = −7', checkMode: 'auto', correctAnswer: 'x=7 or x=-7', correctAnswers: ['x=7 or x=-7', 'x=-7 or x=7', 'x = 7 or x = -7', 'x = -7 or x = 7', '7 or -7', '-7 or 7'], explanation: 'Recognise as a difference of two squares: x² − 49 = x² − 7²\nFactorise: (x − 7)(x + 7) = 0\nx − 7 = 0 or x + 7 = 0\nx = 7 or x = −7 ✓' },
        { difficulty: 'Medium', question: 'Solve 4x² − 20x = 0 by factoring out the common factor first.', answer: 'x = 0 or x = 5', checkMode: 'auto', correctAnswer: 'x=0 or x=5', correctAnswers: ['x=0 or x=5', 'x=5 or x=0', 'x = 0 or x = 5', 'x = 5 or x = 0', '0 or 5', '5 or 0'], explanation: 'Factor out the common factor 4x: 4x(x − 5) = 0.\n4x = 0 → x = 0\nx − 5 = 0 → x = 5\nSolutions: x = 0 or x = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve 3x² − 48 = 0, identifying the common factor and difference of squares steps.', answer: 'Step 1: Factor out the common factor 3: 3(x² − 16) = 0.\nStep 2: Recognise the difference of squares: 3(x − 4)(x + 4) = 0.\nStep 3: Set each factor to zero: x − 4 = 0 or x + 4 = 0.\nSolutions: x = 4 or x = −4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve x² + 4x = 21, showing the rearranging step before you factorise.', answer: 'x = −7 or x = 3', checkMode: 'auto', correctAnswer: 'x=-7 or x=3', correctAnswers: ['x=-7 or x=3', 'x=3 or x=-7', 'x = -7 or x = 3', 'x = 3 or x = -7', '-7 or 3', '3 or -7'], explanation: 'Rearrange so one side is zero: x² + 4x − 21 = 0.\nFind two numbers multiplying to −21, adding to 4 → 7 and −3.\n(x + 7)(x − 3) = 0\nx + 7 = 0 or x − 3 = 0\nx = −7 or x = 3 ✓' },

        // Block F — Applied word problems and error-critique mixing linear and quadratic skills (positions 17-19)
        { difficulty: 'Hard', question: 'A rectangular flower bed has a length that is 4 m more than its width. If the area is 45 m², form an equation in terms of the width w and solve for w (reject any negative solution, since width cannot be negative).', answer: 'w(w + 4) = 45\nw² + 4w − 45 = 0\n(w + 9)(w − 5) = 0\nw = −9 or w = 5\nSince width cannot be negative, w = 5.\nThe width is 5 m and the length is 5 + 4 = 9 m.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Three times a number decreased by 5 equals the number increased by 11. Find the number.', answer: 'x = 8', checkMode: 'auto', correctAnswer: 'x=8', correctAnswers: ['x=8', 'x = 8', '8'], explanation: 'Let the number be x.\n3x − 5 = x + 11\nSubtract x from both sides: 2x − 5 = 11\nAdd 5: 2x = 16\nDivide by 2: x = 8\nCheck: 3(8) − 5 = 19 and 8 + 11 = 19 ✓' },
        { difficulty: 'Hard', question: 'Kagiso solves x² − 8x = 0 and says the only solution is x = 8, because dividing both sides by x gives x − 8 = 0. Explain his error and give the correct solution(s).', answer: 'Kagiso\'s error is dividing both sides by x — this is not allowed because x could be zero, and dividing by zero is undefined, so it silently throws away the solution x = 0. The correct method is to factorise instead: x(x − 8) = 0, giving x = 0 or x − 8 = 0, so x = 0 or x = 8.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, including factorising and the zero product property.' },
        { minScore: 14, message: 'Great work! Review any missed questions on factorising or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising trinomials and the zero product property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Multi-step linear equations with brackets (positions 0-2)
        { difficulty: 'Medium', question: 'Solve: 6(x + 5) = 54', answer: 'x = 4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: '6(x + 5) = 54\nExpand: 6x + 30 = 54\nSubtract 30: 6x = 24\nDivide by 6: x = 4\nCheck: 6(4 + 5) = 6(9) = 54 ✓' },
        { difficulty: 'Medium', question: 'Solve: 9x − 4(x − 3) = 47', answer: 'x = 7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: '9x − 4(x − 3) = 47\nExpand (the minus sign flips both signs): 9x − 4x + 12 = 47\nCombine like terms: 5x + 12 = 47\nSubtract 12: 5x = 35\nDivide by 5: x = 7\nCheck: 9(7) − 4(7 − 3) = 63 − 16 = 47 ✓' },
        { difficulty: 'Hard', question: 'A student solves 4(x − 6) = 2x − 4 by writing 4x − 6 = 2x − 4, forgetting to multiply the 6 by 4. Explain the error and give the correct solution.', answer: 'The student only multiplied the first term inside the bracket by 4 and left the −6 unmultiplied. Correct method: expand the bracket fully to get 4x − 24 = 2x − 4, subtract 2x from both sides to get 2x − 24 = −4, add 24 to both sides to get 2x = 20, then divide by 2 to get x = 10. Check: 4(10 − 6) = 4(4) = 16 and 2(10) − 4 = 16 ✓', checkMode: 'self' },

        // Block B — Variables on both sides and equations with fractions (positions 3-5)
        { difficulty: 'Medium', question: 'Solve: 8x + 3 = 3x + 38', answer: 'x = 7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: '8x + 3 = 3x + 38\nSubtract 3x from both sides: 5x + 3 = 38\nSubtract 3 from both sides: 5x = 35\nDivide by 5: x = 7\nCheck: 8(7) + 3 = 59 and 3(7) + 38 = 59 ✓' },
        { difficulty: 'Medium', question: 'Solve: (x + 6) ÷ 5 = 7', answer: 'x = 29', checkMode: 'auto', correctAnswer: 'x=29', correctAnswers: ['x=29', 'x = 29', '29'], explanation: '(x + 6) ÷ 5 = 7\nMultiply both sides by 5: x + 6 = 35\nSubtract 6: x = 29\nCheck: (29 + 6) ÷ 5 = 35 ÷ 5 = 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: x/4 + x/3 = 14', answer: 'x = 24', checkMode: 'auto', correctAnswer: 'x=24', correctAnswers: ['x=24', 'x = 24', '24'], explanation: 'x/4 + x/3 = 14\nMultiply every term by the LCD, 12: 3x + 4x = 168\nCombine like terms: 7x = 168\nDivide by 7: x = 24\nCheck: 24/4 + 24/3 = 6 + 8 = 14 ✓' },

        // Block C — Solving quadratics by factorising a trinomial (positions 6-9)
        { difficulty: 'Medium', question: 'Solve x² + 10x + 21 = 0 by factorising.', answer: 'x = −3 or x = −7', checkMode: 'auto', correctAnswer: 'x=-3 or x=-7', correctAnswers: ['x=-3 or x=-7', 'x=-7 or x=-3', 'x = -3 or x = -7', 'x = -7 or x = -3', '-3 or -7', '-7 or -3'], explanation: 'Find two numbers multiplying to 21, adding to 10 → 3 and 7.\n(x + 3)(x + 7) = 0\nx + 3 = 0 or x + 7 = 0\nx = −3 or x = −7 ✓' },
        { difficulty: 'Medium', question: 'Solve x² − 12x + 35 = 0.', answer: 'x = 5 or x = 7', checkMode: 'auto', correctAnswer: 'x=5 or x=7', correctAnswers: ['x=5 or x=7', 'x=7 or x=5', 'x = 5 or x = 7', 'x = 7 or x = 5', '5 or 7', '7 or 5'], explanation: 'Find two numbers multiplying to 35, adding to −12 → −5 and −7.\n(x − 5)(x − 7) = 0\nx − 5 = 0 or x − 7 = 0\nx = 5 or x = 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve x² − 4x − 21 = 0.', answer: 'x = 7 or x = −3', checkMode: 'auto', correctAnswer: 'x=7 or x=-3', correctAnswers: ['x=7 or x=-3', 'x=-3 or x=7', 'x = 7 or x = -3', 'x = -3 or x = 7', '7 or -3', '-3 or 7'], explanation: 'Find two numbers multiplying to −21, adding to −4 → −7 and 3.\n(x − 7)(x + 3) = 0\nx − 7 = 0 or x + 3 = 0\nx = 7 or x = −3 ✓' },
        { difficulty: 'Hard', question: 'Naledi solves x² + 3x − 28 = 0 and gets x = 4 or x = −7. Check her answer. Is she correct?', answer: 'She is correct — find two numbers multiplying to −28 and adding to 3: those are 7 and −4. So (x + 7)(x − 4) = 0, giving x = −7 or x = 4. Both of Naledi\'s solutions match.', checkMode: 'self' },

        // Block D — Zero product property (positions 10-12)
        { difficulty: 'Medium', question: 'Solve (x − 8)(x + 3) = 0.', answer: 'x = 8 or x = −3', checkMode: 'auto', correctAnswer: 'x=8 or x=-3', correctAnswers: ['x=8 or x=-3', 'x=-3 or x=8', 'x = 8 or x = -3', 'x = -3 or x = 8', '8 or -3', '-3 or 8'], explanation: 'Zero product property: x − 8 = 0 or x + 3 = 0.\nx − 8 = 0 → x = 8\nx + 3 = 0 → x = −3\nSolutions: x = 8 or x = −3 ✓' },
        { difficulty: 'Medium', question: 'Solve x(x − 13) = 0.', answer: 'x = 0 or x = 13', checkMode: 'auto', correctAnswer: 'x=0 or x=13', correctAnswers: ['x=0 or x=13', 'x=13 or x=0', 'x = 0 or x = 13', 'x = 13 or x = 0', '0 or 13', '13 or 0'], explanation: 'Zero product property: x = 0 or x − 13 = 0.\nx = 0\nx − 13 = 0 → x = 13\nSolutions: x = 0 or x = 13 ✓' },
        { difficulty: 'Hard', question: 'Mpho solves x(x + 5) = 0 and writes only x = −5 as the answer. Is he correct? Explain.', answer: 'No — Mpho is missing a solution. The factor x itself gives x = 0, so the full solution is x = 0 or x = −5. He forgot that a lone variable factor is still a factor that must be set to zero.', checkMode: 'self' },

        // Block E — Factorising first: common factor and difference of squares (positions 13-16)
        { difficulty: 'Medium', question: 'Solve x² − 81 = 0.', answer: 'x = 9 or x = −9', checkMode: 'auto', correctAnswer: 'x=9 or x=-9', correctAnswers: ['x=9 or x=-9', 'x=-9 or x=9', 'x = 9 or x = -9', 'x = -9 or x = 9', '9 or -9', '-9 or 9'], explanation: 'Recognise as a difference of two squares: x² − 81 = x² − 9²\nFactorise: (x − 9)(x + 9) = 0\nx − 9 = 0 or x + 9 = 0\nx = 9 or x = −9 ✓' },
        { difficulty: 'Medium', question: 'Solve 5x² − 30x = 0 by factoring out the common factor first.', answer: 'x = 0 or x = 6', checkMode: 'auto', correctAnswer: 'x=0 or x=6', correctAnswers: ['x=0 or x=6', 'x=6 or x=0', 'x = 0 or x = 6', 'x = 6 or x = 0', '0 or 6', '6 or 0'], explanation: 'Factor out the common factor 5x: 5x(x − 6) = 0.\n5x = 0 → x = 0\nx − 6 = 0 → x = 6\nSolutions: x = 0 or x = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve 2x² − 50 = 0, identifying the common factor and difference of squares steps.', answer: 'Step 1: Factor out the common factor 2: 2(x² − 25) = 0.\nStep 2: Recognise the difference of squares: 2(x − 5)(x + 5) = 0.\nStep 3: Set each factor to zero: x − 5 = 0 or x + 5 = 0.\nSolutions: x = 5 or x = −5.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve x² + 6x = 16, showing the rearranging step before you factorise.', answer: 'x = −8 or x = 2', checkMode: 'auto', correctAnswer: 'x=-8 or x=2', correctAnswers: ['x=-8 or x=2', 'x=2 or x=-8', 'x = -8 or x = 2', 'x = 2 or x = -8', '-8 or 2', '2 or -8'], explanation: 'Rearrange so one side is zero: x² + 6x − 16 = 0.\nFind two numbers multiplying to −16, adding to 6 → 8 and −2.\n(x + 8)(x − 2) = 0\nx + 8 = 0 or x − 2 = 0\nx = −8 or x = 2 ✓' },

        // Block F — Applied word problems and error-critique mixing linear and quadratic skills (positions 17-19)
        { difficulty: 'Hard', question: 'A rectangular vegetable patch has a length that is 5 m more than its width. If the area is 36 m², form an equation in terms of the width w and solve for w (reject any negative solution, since width cannot be negative).', answer: 'w(w + 5) = 36\nw² + 5w − 36 = 0\n(w + 9)(w − 4) = 0\nw = −9 or w = 4\nSince width cannot be negative, w = 4.\nThe width is 4 m and the length is 4 + 5 = 9 m.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Four times a number decreased by 7 equals the number increased by 20. Find the number.', answer: 'x = 9', checkMode: 'auto', correctAnswer: 'x=9', correctAnswers: ['x=9', 'x = 9', '9'], explanation: 'Let the number be x.\n4x − 7 = x + 20\nSubtract x from both sides: 3x − 7 = 20\nAdd 7: 3x = 27\nDivide by 3: x = 9\nCheck: 4(9) − 7 = 29 and 9 + 20 = 29 ✓' },
        { difficulty: 'Hard', question: 'Refilwe solves x² − 10x = 0 and says the only solution is x = 10, because dividing both sides by x gives x − 10 = 0. Explain her error and give the correct solution(s).', answer: 'Refilwe\'s error is dividing both sides by x — this is not allowed because x could be zero, and dividing by zero is undefined, so it silently throws away the solution x = 0. The correct method is to factorise instead: x(x − 10) = 0, giving x = 0 or x − 10 = 0, so x = 0 or x = 10.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, including factorising and the zero product property.' },
        { minScore: 14, message: 'Great work! Review any missed questions on factorising or fractions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising trinomials and the zero product property, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
