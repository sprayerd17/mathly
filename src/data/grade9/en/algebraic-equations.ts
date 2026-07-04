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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step layout showing a bracketed equation being expanded with the distributive property highlighted in blue, simplified terms in orange, and the final solution in green" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing an equation with x terms on both sides, with the x terms highlighted in blue on each side and an arrow showing the smaller one being moved across, ending in a green solution" />',
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
        '<DiagramPlaceholder label="Step-by-step layout showing how to factorise x squared plus 5x plus 6 equals zero with factorised brackets highlighted in blue and solutions in orange" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the zero product property with each factor highlighted in blue and the two solutions highlighted in green" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side examples showing common factor, difference of squares, and trinomial factorisation methods with rearranging highlighted in blue, factorisation in orange, and solutions in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 22, message: 'Outstanding! You have mastered algebraic equations.' },
    { minScore: 16, message: 'Great work!' },
    { minScore: 11, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
