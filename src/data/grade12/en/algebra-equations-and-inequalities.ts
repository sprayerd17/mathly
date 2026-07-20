import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────────
// bl (blue #2563eb)   → given/tested values, linear parts, factorised forms
// or (orange #ea580c) → intermediate working, critical values, substitution steps
// gr (green #16a34a)  → final results / conclusions
// re (red #dc2626)    → warnings, non-real / rejected (extraneous) results
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebra, Equations and Inequalities',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NATURE OF ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nature-of-roots',
      title: 'Nature of Roots',
      icon: 'Δ',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>discriminant</strong> Δ = b² − 4ac (from the quadratic formula) tells us the <strong>nature of the roots</strong> of ax²+bx+c=0 — how many real solutions there are, and whether they are rational or irrational — without actually solving the equation. This is new for Grade 12: in Grade 11 you used the discriminant to solve equations; now you use it to reason about the type of solution before you solve.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('coefficients a, b, c')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('discriminant value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('conclusion')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('no real roots / non-real case')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reading the discriminant</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Δ &gt; 0 — two real, unequal roots</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">If Δ is a <strong>perfect square</strong>, the roots are ${bl('rational')}. If Δ is positive but NOT a perfect square, the roots are ${bl('irrational')} (surds).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Δ = 0 — real, equal roots</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">There is exactly one repeated root, x = −b/2a. This root is always ${or('rational')} whenever a, b, c are rational.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Δ &lt; 0 — non-real roots</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The square root of a negative number is not a real number, so the equation has ${re('no real solutions')} — the parabola never touches the x-axis.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">You do not need to solve the equation</p>` +
        `<p style="margin:0;color:#1e3a8a;">To describe the nature of the roots, calculate ${or('Δ = b² − 4ac')} only — there's no need to substitute into the full quadratic formula. This makes "nature of roots" questions quick once you know the rules above.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Determine the nature of the roots of x² − 6x + 9 = 0 without solving the equation.',
          answer: `${gr('Real, equal, rational roots')} (Δ = 0)`,
          steps: [
            `Identify ${bl('a = 1, b = −6, c = 9')}.`,
            `Calculate the ${or('discriminant')}: Δ = b² − 4ac = (−6)² − 4(1)(9) = ${or('36 − 36 = 0')}.`,
            `Since Δ = 0, the roots are ${gr('real, equal, and rational')} (the repeated root is x = −b/2a = 6/2 = 3, a rational number).`,
          ],
        },
        {
          question: 'Determine the nature of the roots of 2x² + 3x − 5 = 0 without solving the equation.',
          answer: `${gr('Real, unequal, rational roots')} (Δ = 49, a perfect square)`,
          steps: [
            `Identify ${bl('a = 2, b = 3, c = −5')}.`,
            `Calculate the ${or('discriminant')}: Δ = 3² − 4(2)(−5) = ${or('9 + 40 = 49')}.`,
            `Since Δ = 49 &gt; 0, the roots are real and unequal. Since 49 = 7² is a ${or('perfect square')}, the roots are also ${gr('rational')} (they will simplify to fractions, not surds).`,
          ],
        },
        {
          question: 'Determine the nature of the roots of x² + 2x + 5 = 0 without solving the equation.',
          answer: `${re('Non-real roots')} (Δ = −16)`,
          steps: [
            `Identify ${bl('a = 1, b = 2, c = 5')}.`,
            `Calculate the ${or('discriminant')}: Δ = 2² − 4(1)(5) = ${or('4 − 20 = −16')}.`,
            `Since Δ &lt; 0, the equation has ${re('no real roots')} — the roots are non-real.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Determine the nature of the roots of x² + 4x + 4 = 0 without solving the equation.',
          answer: 'Real, equal, rational roots',
          checkMode: 'auto',
          correctAnswer: 'real, equal, rational',
          correctAnswers: ['real, equal, rational', 'real equal rational', 'equal, real, rational', 'rational, real, equal'],
          explanation: 'a=1, b=4, c=4. Δ = 16 − 16 = 0.\nSince Δ = 0, the roots are real, equal and rational ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Determine the nature of the roots of x² − 4x − 2 = 0 without solving the equation.',
          answer: 'Real, unequal, irrational roots',
          checkMode: 'auto',
          correctAnswer: 'real, unequal, irrational',
          correctAnswers: ['real, unequal, irrational', 'real unequal irrational', 'unequal, real, irrational', 'irrational, real, unequal'],
          explanation: 'a=1, b=−4, c=−2. Δ = 16 + 8 = 24.\nSince Δ=24>0, the roots are real and unequal. Since 24 is not a perfect square, the roots are irrational ✓',
        },
        {
          difficulty: 'Hard',
          question: 'For which value(s) of k will the equation x² − 2x + k = 0 have non-real roots?',
          answer: 'k > 1',
          checkMode: 'auto',
          correctAnswer: 'k>1',
          correctAnswers: ['k>1', 'k > 1'],
          explanation: 'a=1, b=−2, c=k. For non-real roots, Δ < 0: 4 − 4k < 0 → 4 < 4k → k > 1 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg"><g><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 30 Q 100 245 180 30" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="58" cy="110" r="3.5" fill="#2563eb"/><circle cx="142" cy="110" r="3.5" fill="#2563eb"/><text x="100" y="20" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">&#916; &gt; 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">two real, unequal roots</text></g><g transform="translate(210,0)"><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 30 Q 100 190 180 30" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="100" cy="110" r="3.5" fill="#ea580c"/><text x="100" y="20" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">&#916; = 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">one real, repeated root</text></g><g transform="translate(420,0)"><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 90 Q 100 55 180 90" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="100" y="20" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">&#916; &lt; 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">no real roots (non-real)</text></g></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how the discriminant determines whether the roots of a quadratic equation are real and equal, real and unequal (rational or irrational), or non-real" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING QUADRATIC EQUATIONS (CONSOLIDATION)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-quadratic-equations',
      title: 'Solving Quadratic Equations — Consolidation',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Solving ax²+bx+c=0 is revision from Grade 11, and a core skill you will lean on throughout this topic. The two methods examined at Grade 12 are ${bl('factorisation')} and the ${gr('quadratic formula')} x = (−b ± √(b² − 4ac)) / 2a. ${or('Completing the square')} is included below purely as revision, since it is exactly where the quadratic formula (and therefore the discriminant from Section 1) comes from.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factorisation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('completing the square (revision)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quadratic formula')}</span>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Exam scope note</p>` +
        `<p style="margin:0;color:#78350f;">According to the NSC examination guidelines, solving a quadratic equation by completing the square is <strong>not</strong> examined as a stand-alone question at Grade 12 — you will be expected to use ${bl('factorisation')} or the ${gr('quadratic formula')}. The <strong>substitution ("k-method")</strong> for equations that reduce to quadratic form (used later in this topic for exponential equations) <em>is</em> examinable.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The quadratic formula</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin:0;letter-spacing:0.02em;">x = (−b ± √(b² − 4ac)) / 2a</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">Always works — especially useful when the expression does not factorise over the integers, giving surd answers.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x by factorisation: 3x² − 5x − 2 = 0.',
          answer: `${bl('x = 2')} or ${bl('x = −⅓')}`,
          steps: [
            `Find two numbers that multiply to (3)(−2) = −6 and add to −5: these are ${bl('−6 and 1')}.`,
            `Split the middle term: 3x² − 6x + x − 2 = 0. ${bl('Factorise')} in pairs: 3x(x − 2) + 1(x − 2) = 0 → (3x + 1)(x − 2) = 0.`,
            `Set each factor to zero: 3x + 1 = 0 or x − 2 = 0.`,
            `<strong>Solutions:</strong> ${bl('x = −⅓')} or ${bl('x = 2')}`,
          ],
        },
        {
          question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 6x + 4 = 0.',
          answer: `${gr('x = 3 + √5')} or ${gr('x = 3 − √5')}`,
          steps: [
            `Identify the coefficients: a = 1, b = −6, c = 4.`,
            `Calculate the discriminant: Δ = (−6)² − 4(1)(4) = 36 − 16 = 20.`,
            `Apply the ${gr('quadratic formula')}: x = (6 ± √20) / 2 = (6 ± 2√5) / 2`,
            `<strong>Solutions:</strong> ${gr('x = 3 ± √5')}`,
          ],
        },
        {
          question: 'Revision: write x² + 8x + 3 = 0 in completed square form, and hence solve for x.',
          answer: `${or('(x + 4)² = 13')}, so x = ${or('−4 + √13')} or x = ${or('−4 − √13')}`,
          steps: [
            `Take half of 8 (the x-coefficient): 8 ÷ 2 = 4. Square it: 4² = 16.`,
            `Add and subtract 16: x² + 8x + 16 − 16 + 3 = 0 → ${or('(x + 4)² − 13 = 0')}.`,
            `Rearrange and take square roots: (x + 4)² = 13 → x + 4 = ±√13.`,
            `<strong>Solutions:</strong> x = ${or('−4 ± √13')} — notice this matches what the quadratic formula would give directly, since Δ = 64 − 12 = 52 = 4×13, and (−8 ± √52)/2 = −4 ± √13.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x by factorisation: 2x² + 7x + 3 = 0.',
          answer: 'x = −½ or x = −3',
          checkMode: 'auto',
          correctAnswers: ['x=-1/2 or x=-3', 'x = -1/2 or x = -3', 'x=-3 or x=-1/2', 'x=-0.5 or x=-3', '-0.5 or -3', '-3 or -0.5'],
          explanation: '2x²+6x+x+3=0 → 2x(x+3)+1(x+3)=0 → (2x+1)(x+3)=0.\nx=−½ or x=−3 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 8x + 9 = 0.',
          answer: 'x = 4 + √7 or x = 4 − √7',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Write x² + 10x − 3 = 0 in completed square form, and hence solve for x.',
          answer: 'Half of 10 is 5; 5²=25. x²+10x+25−25−3=0 → (x+5)²−28=0 → (x+5)²=28 → x=−5±√28=−5±2√7.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video consolidating the three methods for solving quadratic equations, with a note on which methods are directly examined at Grade 12 level" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — QUADRATIC INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-inequalities',
      title: 'Quadratic Inequalities',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">At Grade 12 level we solve quadratic inequalities by ${bl('sketching (or imagining) the parabola')} from its factorised form, then reading off the ${gr('solution')} directly from where the graph lies above or below the x-axis — this is often faster than a full sign table, and it is the method CAPS expects you to be comfortable with since it connects directly to the Functions topics.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('critical values / roots')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('shape of the parabola')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Using a sketch to solve</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find the critical values')} — solve the related equation (replace the inequality sign with =) and factorise to find where the expression equals zero.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Sketch the shape')} — if a &gt; 0 the parabola opens upward (below the x-axis between the roots, above outside them); if a &lt; 0 it opens downward (the opposite).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Read off the solution')} — for "&gt; 0" or "≥ 0" read the x-values where the graph is above the axis; for "&lt; 0" or "≤ 0" read where it is below. Include endpoints for ≤ / ≥, exclude them for &lt; / &gt;.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A sign table still works</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you find sketching tricky, the Grade 11 sign-table method (testing a point in each interval) always gives the same answer — use whichever method you find quicker under exam conditions.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: x² − x − 6 ≤ 0.',
          answer: `${gr('−2 ≤ x ≤ 3')}`,
          steps: [
            `${bl('Critical values:')} x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = ${bl('−2')} or x = ${bl('3')}.`,
            `${or('Shape:')} a = 1 &gt; 0, so the parabola opens upward — it is below the x-axis (negative) between the roots.`,
            `We need the expression ≤ 0, so we want where the graph is below or on the axis — this happens between and including the roots.`,
            `<strong>Solution:</strong> ${gr('−2 ≤ x ≤ 3')}`,
          ],
        },
        {
          question: 'Solve for x: −x² + 4x − 3 > 0.',
          answer: `${gr('1 < x < 3')}`,
          steps: [
            `${bl('Critical values:')} −x² + 4x − 3 = 0 → multiply by −1: x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = ${bl('1')} or x = ${bl('3')}.`,
            `${or('Shape:')} a = −1 &lt; 0, so the parabola opens downward — it is above the x-axis (positive) between the roots.`,
            `We need the expression &gt; 0, so we want where the graph is strictly above the axis — this happens between the roots, endpoints excluded.`,
            `<strong>Solution:</strong> ${gr('1 < x < 3')}`,
          ],
        },
        {
          question: 'The graph of f(x) = x² − 2x − 8 has x-intercepts at x = −2 and x = 4, with its turning point below the x-axis. Use the graph to solve f(x) ≥ 0.',
          answer: `${gr('x ≤ −2 or x ≥ 4')}`,
          steps: [
            `${bl('x-intercepts (critical values):')} x = ${bl('−2')} and x = ${bl('4')}.`,
            `${or('Shape:')} the leading coefficient of x² is positive, and the turning point is below the axis — this matches an upward-opening parabola that dips below the axis between its roots.`,
            `We need f(x) ≥ 0, i.e. where the graph is on or above the axis — this happens outside (and including) the roots.`,
            `<strong>Solution:</strong> ${gr('x ≤ −2 or x ≥ 4')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x: x² − 5x + 4 ≤ 0.',
          answer: '1 ≤ x ≤ 4',
          checkMode: 'auto',
          correctAnswers: ['1≤x≤4', '1 ≤ x ≤ 4', '[1,4]', '1<=x<=4'],
          explanation: 'Critical values: (x−1)(x−4)=0 → x=1 or x=4.\nParabola opens upward (a=1>0), so it is ≤0 between the roots.\nSolution: 1 ≤ x ≤ 4 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x: −x² + 2x + 3 < 0.',
          answer: 'x < −1 or x > 3',
          checkMode: 'auto',
          correctAnswers: ['x<-1 or x>3', 'x < -1 or x > 3', 'x>3 or x<-1'],
          explanation: '−x²+2x+3=0 → x²−2x−3=0 → (x−3)(x+1)=0 → x=3 or x=−1.\nParabola opens downward (a=−1<0), so it is positive between the roots and negative outside.\nWe need <0 (negative): x < −1 or x > 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'The graph of g(x) = x² + x − 12 has x-intercepts at x = −4 and x = 3. Use the graph to solve g(x) > 0.',
          answer: 'x < −4 or x > 3',
          checkMode: 'auto',
          correctAnswers: ['x<-4 or x>3', 'x < -4 or x > 3', 'x>3 or x<-4'],
          explanation: 'a=1>0, so the parabola opens upward — positive (above the axis) outside the roots.\nSince the inequality is strict, endpoints are excluded.\nSolution: x < −4 or x > 3 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="110" x2="245" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><rect x="80" y="110" width="100" height="35" fill="#fed7aa" opacity="0.5"/><path d="M 40 40 Q 130 220 220 40" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="80" cy="110" r="4" fill="#2563eb"/><circle cx="180" cy="110" r="4" fill="#2563eb"/><text x="80" y="128" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">-2</text><text x="180" y="128" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="130" y="150" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">-2 &#8804; x &#8804; 3</text><text x="130" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = x&#178; - x - 6 &#8804; 0</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve a quadratic inequality by sketching the parabola from its factorised form and reading the solution off the graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SIMULTANEOUS EQUATIONS: ONE LINEAR AND ONE QUADRATIC
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simultaneous-linear-quadratic',
      title: 'Simultaneous Equations — Linear and Quadratic',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">You met the substitution method for one ${bl('linear')} and one ${or('quadratic')} equation in Grade 11. At Grade 12 level, this skill is consolidated and extended: expect messier coefficients, ${gr('surd solutions')}, and questions that connect the number of solutions to the ${gr('discriminant')} — for example, determining a value of a constant for which a line is <strong>tangent</strong> to a parabola, or showing algebraically that a line and parabola do <strong>not</strong> intersect.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('linear equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quadratic equation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('resulting equation / solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: substitution</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Make ${bl('y (or x)')} the subject of the linear equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Substitute into the ${or('quadratic equation')} to get a single equation in one variable.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Solve the ${gr('resulting quadratic')}, then back-substitute to find the other variable for each solution.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Linking to the discriminant</p>` +
        `<p style="margin:0;color:#1e3a8a;">The discriminant of the resulting quadratic tells you exactly how the line and parabola relate: <strong>Δ &gt; 0</strong> → two intersection points, <strong>Δ = 0</strong> → the line is tangent to the parabola (one point), <strong>Δ &lt; 0</strong> → the line never meets the parabola.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve simultaneously: 2x + y = 7 and y = x² − 4x + 1.',
          answer: `(${gr('1 + √7')} ; ${gr('5 − 2√7')}) and (${gr('1 − √7')} ; ${gr('5 + 2√7')})`,
          steps: [
            `Make y the subject of the ${bl('linear equation')}: y = 7 − 2x.`,
            `${gr('Substitute')} into the ${or('quadratic equation')}: 7 − 2x = x² − 4x + 1.`,
            `Rearrange: ${gr('x² − 2x − 6 = 0')}.`,
            `Solve with the quadratic formula: a=1, b=−2, c=−6. x = (2 ± √(4+24)) / 2 = (2 ± √28) / 2 = 1 ± √7.`,
            `Back-substitute into ${bl('y = 7 − 2x')}: when x = 1+√7, y = 7−2(1+√7) = 5−2√7; when x = 1−√7, y = 7−2(1−√7) = 5+2√7.`,
            `<strong>Solutions:</strong> (${gr('1 + √7')} ; ${gr('5 − 2√7')}) and (${gr('1 − √7')} ; ${gr('5 + 2√7')})`,
          ],
        },
        {
          question: 'Determine the value of c for which the line y = 2x + c is tangent to (touches) the parabola y = x² + 4x + 1.',
          answer: `${gr('c = 0')}`,
          steps: [
            `${gr('Substitute')} the ${bl('linear equation')} into the ${or('quadratic equation')}: 2x + c = x² + 4x + 1.`,
            `Rearrange: x² + 2x + (1 − c) = 0.`,
            `For the line to be <strong>tangent</strong>, this equation must have equal roots, so Δ = 0: Δ = 2² − 4(1)(1−c) = 4 − 4 + 4c = 4c.`,
            `Set Δ = 0: 4c = 0 → ${gr('c = 0')}.`,
            `<strong>Check:</strong> with c=0, x² + 2x + 1 = 0 → (x+1)² = 0 → x = −1 (repeated). At x=−1: y = 2(−1)+0 = −2, and on the parabola: (−1)²+4(−1)+1 = 1−4+1 = −2 ✓ — the line touches the parabola at exactly one point.`,
          ],
        },
        {
          question: 'Show algebraically that the line y = 3x − 1 does not intersect the parabola y = x² + x + 5.',
          answer: `${re('No real solutions — the line and parabola do not intersect')} (Δ = −20)`,
          steps: [
            `${gr('Substitute')} the ${bl('linear equation')} into the ${or('quadratic equation')}: 3x − 1 = x² + x + 5.`,
            `Rearrange: x² − 2x + 6 = 0.`,
            `Calculate the discriminant: Δ = (−2)² − 4(1)(6) = 4 − 24 = ${re('−20')}.`,
            `Since Δ &lt; 0, the equation has ${re('no real solutions')} — the line never meets the parabola.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve simultaneously: y = 2x − 3 and y = x² − 2x − 3.',
          answer: 'x = 0, y = −3  or  x = 4, y = 5',
          checkMode: 'auto',
          correctAnswers: ['x=0,y=-3 or x=4,y=5', 'x=4,y=5 or x=0,y=-3', '(0,-3) and (4,5)'],
          explanation: '2x−3=x²−2x−3 → x²−4x=0 → x(x−4)=0 → x=0 or x=4.\nWhen x=0: y=2(0)−3=−3. When x=4: y=2(4)−3=5.\nCheck: 0²−2(0)−3=−3 ✓ and 4²−2(4)−3=5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve simultaneously, leaving your answers in simplest surd form: y = x + 4 and y = x² − x − 2.',
          answer: 'x = 1+√7, y = 5+√7  or  x = 1−√7, y = 5−√7',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Determine the value of k for which the line y = x + k touches (is tangent to) the parabola y = x² − 4x + 9.',
          answer: 'k = 11/4',
          checkMode: 'auto',
          correctAnswer: 'k=11/4',
          correctAnswers: ['k=11/4', 'k = 11/4', 'k=2.75', 'k = 2.75', '11/4', '2.75'],
          explanation: 'x+k=x²−4x+9 → x²−5x+(9−k)=0.\nFor tangency, Δ=0: 25−4(9−k)=0 → 25−36+4k=0 → 4k=11 → k=11/4 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="160" x2="245" y2="160" stroke="#0f1f3d" stroke-width="1.5"/><line x1="25" y1="150" x2="235" y2="30" stroke="#2563eb" stroke-width="2.5"/><path d="M 30 30 Q 130 185 230 30" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="107" cy="103" r="4.5" fill="#16a34a"/><circle cx="227" cy="35" r="4.5" fill="#16a34a"/><text x="130" y="16" font-size="11.5" font-weight="700" fill="#0f1f3d" text-anchor="middle">line and parabola: 2 points of intersection</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve a linear-quadratic system with surd solutions, and how the discriminant of the resulting equation determines tangency or no intersection" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — EQUATIONS INVOLVING SURDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surd-equations',
      title: 'Equations Involving Surds',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">To solve an equation with x under a square root, we ${bl('isolate the surd')}, then ${or('square both sides')} to remove it — this usually produces a quadratic equation. Squaring both sides can introduce ${re('extraneous (false) roots')}, so every solution <strong>must</strong> be checked in the <strong>original</strong> equation, not the squared version.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('isolate the surd')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('square both sides')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check for extraneous roots')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Isolate the surd')} — get the square root term alone on one side of the equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Square both sides')} to remove the root, then solve the resulting equation (usually a quadratic).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Check every solution')} in the original (unsquared) equation. Reject any solution that does not satisfy it — the square root symbol always means the non-negative root, so it can never equal a negative number.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">Why extraneous roots appear</p>` +
        `<p style="margin:0;color:#7f1d1d;">Squaring both sides of an equation can make a false statement true — for example √9 = −3 is false, but squaring both sides gives 9 = 9, which is true. This is why the check against the original equation is not optional.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: √(x + 10) = x − 2.',
          answer: `${gr('x = 6')} (x = −1 is rejected)`,
          steps: [
            `The surd is already ${bl('isolated')}. ${or('Square both sides')}: x + 10 = (x−2)² = x² − 4x + 4.`,
            `Rearrange: x² − 5x − 6 = 0 → (x − 6)(x + 1) = 0 → x = 6 or x = −1.`,
            `${re('Check x = 6')}: √(6+10) = √16 = 4, and 6−2 = 4. 4 = 4 ✓ valid.`,
            `${re('Check x = −1')}: √(−1+10) = √9 = 3, but −1−2 = −3. 3 ≠ −3 ✗ — ${re('extraneous, rejected')}.`,
            `<strong>Solution:</strong> ${gr('x = 6')} only.`,
          ],
        },
        {
          question: 'Solve for x: √(3x − 2) = x − 4.',
          answer: `${gr('x = 9')} (x = 2 is rejected)`,
          steps: [
            `${or('Square both sides')}: 3x − 2 = (x−4)² = x² − 8x + 16.`,
            `Rearrange: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0 → x = 9 or x = 2.`,
            `${re('Check x = 9')}: √(27−2) = √25 = 5, and 9−4 = 5. 5 = 5 ✓ valid.`,
            `${re('Check x = 2')}: √(6−2) = √4 = 2, but 2−4 = −2. 2 ≠ −2 ✗ — ${re('extraneous, rejected')}.`,
            `<strong>Solution:</strong> ${gr('x = 9')} only.`,
          ],
        },
        {
          question: 'Solve for x: √(5x + 1) = x + 1.',
          answer: `${gr('x = 0')} or ${gr('x = 3')} (both valid)`,
          steps: [
            `${or('Square both sides')}: 5x + 1 = (x+1)² = x² + 2x + 1.`,
            `Rearrange: x² − 3x = 0 → x(x − 3) = 0 → x = 0 or x = 3.`,
            `${re('Check x = 0')}: √(0+1) = √1 = 1, and 0+1 = 1. 1 = 1 ✓ valid.`,
            `${re('Check x = 3')}: √(15+1) = √16 = 4, and 3+1 = 4. 4 = 4 ✓ valid.`,
            `<strong>Solution:</strong> ${gr('x = 0')} or ${gr('x = 3')} — not every surd equation produces an extraneous root; you must still check both.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x: √(x + 4) = x − 2.',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Square: x+4=x²−4x+4 → x²−5x=0 → x(x−5)=0 → x=0 or x=5.\nCheck x=0: √4=2, but 0−2=−2, so 2≠−2, rejected.\nCheck x=5: √9=3, and 5−2=3 ✓ valid.\nSolution: x=5 only.',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x: √(3x + 7) = x + 1.',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: 'Square: 3x+7=x²+2x+1 → x²−x−6=0 → (x−3)(x+2)=0 → x=3 or x=−2.\nCheck x=3: √16=4, and 3+1=4 ✓ valid.\nCheck x=−2: √1=1, but −2+1=−1, so 1≠−1, rejected.\nSolution: x=3 only.',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho is asked to solve √(2x − 3) = −5. Without doing any algebra, explain why this equation has no solution.',
          answer: 'The square root symbol always denotes the non-negative root, so √(2x − 3) can never equal a negative number such as −5. No algebra is needed — the equation has no solution because the right side is negative.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve equations involving surds by isolating the root, squaring both sides, and checking every solution against the original equation to reject extraneous roots" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — EXPONENTIAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-equations',
      title: 'Exponential Equations',
      icon: 'ˣ',
      explanation:
        `<p style="margin-bottom:16px;">This is a short bridge back to skills from Grade 11: when both sides of an equation can be written with the ${bl('same base')}, the exponents can be set equal to each other. Some equations reduce to a quadratic in disguise — using the ${or('substitution ("k-method")')} letting k = a^x turns them into an ordinary quadratic equation.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('same base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('substitution (k-method)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Full coverage elsewhere</p>` +
        `<p style="margin:0;color:#1e3a8a;">This section only revises the algebraic manipulation of exponents. For a full treatment of exponential functions, logarithms, and equations that cannot be reduced to the same base (which require logarithms to solve), see the <strong>Exponential and Logarithmic Functions</strong> topic.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: 5^(2x − 1) = 125.',
          answer: `${gr('x = 2')}`,
          steps: [
            `Write 125 as a power of ${bl('5')}: 125 = 5³.`,
            `So 5^(2x−1) = 5³, which means the exponents must be equal: 2x − 1 = 3.`,
            `<strong>Solution:</strong> 2x = 4 → ${gr('x = 2')}`,
          ],
        },
        {
          question: 'Solve for x: 4^(x + 1) = 8^(x − 2).',
          answer: `${gr('x = 8')}`,
          steps: [
            `Write both sides with base ${bl('2')}: 4 = 2² and 8 = 2³.`,
            `So (2²)^(x+1) = (2³)^(x−2) → 2^(2x+2) = 2^(3x−6).`,
            `Set the exponents equal: 2x + 2 = 3x − 6.`,
            `<strong>Solution:</strong> 8 = x → ${gr('x = 8')}`,
          ],
        },
        {
          question: 'Solve for x: 3^(2x) − 10 · 3^x + 9 = 0.',
          answer: `${gr('x = 0')} or ${gr('x = 2')}`,
          steps: [
            `${or('Let k = 3^x')}, so 3^(2x) = (3^x)² = k². The equation becomes k² − 10k + 9 = 0.`,
            `Factorise: (k − 1)(k − 9) = 0 → k = 1 or k = 9.`,
            `Substitute back: 3^x = 1 → x = 0. &nbsp; 3^x = 9 = 3² → x = 2.`,
            `<strong>Solution:</strong> ${gr('x = 0')} or ${gr('x = 2')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x: 3^(x + 2) = 81.',
          answer: 'x = 2',
          checkMode: 'auto',
          correctAnswer: 'x=2',
          correctAnswers: ['x=2', 'x = 2', '2'],
          explanation: '81=3⁴. So x+2=4 → x=2 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x: 9^x = 27^(x − 1).',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: '9=3², 27=3³. So 3^(2x)=3^(3x−3) → 2x=3x−3 → x=3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve for x: 2^(2x) − 9 · 2^x + 8 = 0.',
          answer: 'x = 0 or x = 3',
          checkMode: 'auto',
          correctAnswers: ['x=0 or x=3', 'x=3 or x=0'],
          explanation: 'Let k=2^x: k²−9k+8=0 → (k−1)(k−8)=0 → k=1 or k=8.\n2^x=1 → x=0. 2^x=8=2³ → x=3.\nSolution: x=0 or x=3 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising how to solve exponential equations by writing both sides with the same base, including the substitution method for equations that reduce to a quadratic" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — ALGEBRAIC (RATIONAL) FRACTION EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-fraction-equations',
      title: 'Algebraic (Rational) Fraction Equations',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">This is genuinely new for Grade 12: solving an equation where x appears in a ${bl('denominator')}. First state the ${re('restrictions')} — the values of x that make any denominator zero, since the expression is undefined there. Then multiply every term by the ${or('lowest common denominator (LCD)')} to clear the fractions, and solve the resulting equation. Always check your solution(s) against the restrictions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('denominator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiply by the LCD')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('restrictions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('State the restrictions')} first — set every ${bl('denominator')} ≠ 0 and solve for the excluded x-value(s).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiply every term by the LCD')} to clear all the fractions, leaving a linear or quadratic equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Solve, then <strong>reject</strong> any solution that equals a restricted value — even though it solves the cleared equation, it does not solve the original.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">A restricted value can be the only "solution"</p>` +
        `<p style="margin:0;color:#7f1d1d;">If the algebra produces only a restricted x-value, the equation has ${re('no solution')} — this is the rational-equation equivalent of an extraneous root in a surd equation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: 3/(x + 2) = 2/(x − 1).',
          answer: `${gr('x = 7')}`,
          steps: [
            `${re('Restrictions:')} x ≠ ${bl('−2')} and x ≠ ${bl('1')}.`,
            `${or('Cross-multiply')} (equivalent to multiplying both sides by the LCD (x+2)(x−1)): 3(x − 1) = 2(x + 2).`,
            `Expand and solve: 3x − 3 = 2x + 4 → x = 7.`,
            `Check against restrictions: x = 7 is not excluded. <strong>Solution:</strong> ${gr('x = 7')}`,
          ],
        },
        {
          question: 'Solve for x: x + 6/x = 5.',
          answer: `${gr('x = 2')} or ${gr('x = 3')}`,
          steps: [
            `${re('Restriction:')} x ≠ ${bl('0')}.`,
            `${or('Multiply every term by x')}: x² + 6 = 5x.`,
            `Rearrange and factorise: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or x = 3.`,
            `Check against restrictions: neither solution equals 0. <strong>Solution:</strong> ${gr('x = 2')} or ${gr('x = 3')}`,
          ],
        },
        {
          question: 'Solve for x: 2x/(x − 4) = 3 + 8/(x − 4).',
          answer: `${re('No solution')} (x = 4 is excluded)`,
          steps: [
            `${re('Restriction:')} x ≠ ${bl('4')}.`,
            `${or('Multiply every term by (x − 4)')}: 2x = 3(x − 4) + 8.`,
            `Expand and solve: 2x = 3x − 12 + 8 → 2x = 3x − 4 → x = 4.`,
            `Check against restrictions: x = 4 ${re('is excluded')} — it makes the original denominators zero. <strong>There is no solution.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x: 4/(x + 1) = 2/(x − 2).',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Restrictions: x≠−1, x≠2.\nCross-multiply: 4(x−2)=2(x+1) → 4x−8=2x+2 → 2x=10 → x=5.\nNot excluded — valid. x=5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x: x − 4/x = 3.',
          answer: 'x = 4 or x = −1',
          checkMode: 'auto',
          correctAnswers: ['x=4 or x=-1', 'x=-1 or x=4', '4 or -1', '-1 or 4'],
          explanation: 'Restriction: x≠0.\nMultiply by x: x²−4=3x → x²−3x−4=0 → (x−4)(x+1)=0 → x=4 or x=−1.\nNeither excluded. Solution: x=4 or x=−1 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Solve for x: (3x)/(x − 3) = 4 + 6/(x − 3), stating any restrictions.',
          answer: 'No solution — x = 3 is excluded',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve algebraic fraction equations by stating restrictions, multiplying by the LCD, and checking solutions against the excluded values" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — nature of roots ────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Determine the nature of the roots of 3x² − 2x − 1 = 0 without solving the equation.',
      answer: 'Real, unequal, rational roots',
      checkMode: 'auto',
      correctAnswer: 'real, unequal, rational',
      correctAnswers: ['real, unequal, rational', 'real unequal rational', 'unequal, real, rational'],
      explanation: 'a=3, b=−2, c=−1. Δ = 4 + 12 = 16, a perfect square.\nReal, unequal, rational roots ✓',
    },

    // ── Q2 Medium — nature of roots ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Determine the nature of the roots of x² + 3x + 5 = 0 without solving the equation.',
      answer: 'Non-real roots',
      checkMode: 'auto',
      correctAnswer: 'non-real',
      correctAnswers: ['non-real', 'non real', 'not real', 'no real roots'],
      explanation: 'a=1, b=3, c=5. Δ = 9 − 20 = −11 < 0.\nNon-real roots ✓',
    },

    // ── Q3 Hard — nature of roots, problem-solving ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Show that the roots of x² − (k + 1)x + k = 0 are real for every real value of k.',
      answer: 'a=1, b=−(k+1), c=k. Δ = (k+1)² − 4k = k² + 2k + 1 − 4k = k² − 2k + 1 = (k−1)².\nSince (k−1)² ≥ 0 for every real k, Δ ≥ 0 always, so the roots are always real (equal when k=1).',
      checkMode: 'self',
    },

    // ── Q4 Medium — solving quadratics, surd form ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 2x² − 4x − 1 = 0.',
      answer: 'x = (2 + √6)/2 or x = (2 − √6)/2',
      checkMode: 'self',
    },

    // ── Q5 Hard — completing the square, work backwards ──────────────────────
    {
      difficulty: 'Hard',
      question: 'The equation x² + bx + c = 0 is written in completed square form as (x + 7)² = 40. Determine the values of b and c.',
      answer: 'b = 14, c = 9',
      checkMode: 'auto',
      correctAnswers: ['b=14, c=9', 'b=14 c=9', 'b = 14, c = 9'],
      explanation: 'Expand (x+7)²=40: x²+14x+49=40 → x²+14x+9=0.\nSo b=14, c=9 ✓',
    },

    // ── Q6 Easy — quadratic inequality ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: x² − 49 ≥ 0.',
      answer: 'x ≤ −7 or x ≥ 7',
      checkMode: 'auto',
      correctAnswers: ['x≤-7 or x≥7', 'x <= -7 or x >= 7', 'x≥7 or x≤-7'],
      explanation: 'x²−49=0 → x=±7. Parabola opens upward, so ≥0 outside the roots.\nSolution: x≤−7 or x≥7 ✓',
    },

    // ── Q7 Medium — quadratic inequality ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: −x² + 5x − 4 ≥ 0.',
      answer: '1 ≤ x ≤ 4',
      checkMode: 'auto',
      correctAnswers: ['1≤x≤4', '1 <= x <= 4', '[1,4]'],
      explanation: '−x²+5x−4=0 → x²−5x+4=0 → (x−1)(x−4)=0 → x=1 or x=4.\nParabola opens downward (a=−1<0), positive between the roots.\nSolution: 1 ≤ x ≤ 4 ✓',
    },

    // ── Q8 Hard — quadratic inequality, applied context ──────────────────────
    {
      difficulty: 'Hard',
      question: 'A ball\'s height above the ground is modelled by h(t) = −5t² + 20t (t in seconds). For how long is the ball above a height of 15 m?',
      answer: '−5t²+20t>15 → −5t²+20t−15>0 → divide by −5 (flip): t²−4t+3<0 → (t−1)(t−3)<0 → 1<t<3.\nThe ball is above 15 m for 1s < t < 3s, i.e. for a duration of 2 seconds.',
      checkMode: 'self',
    },

    // ── Q9 Easy — simultaneous linear-quadratic ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve simultaneously: y = 3x − 2 and y = x² − x − 2.',
      answer: 'x = 0, y = −2  or  x = 4, y = 10',
      checkMode: 'auto',
      correctAnswers: ['x=0,y=-2 or x=4,y=10', 'x=4,y=10 or x=0,y=-2', '(0,-2) and (4,10)'],
      explanation: '3x−2=x²−x−2 → x²−4x=0 → x(x−4)=0 → x=0 or x=4.\nWhen x=0: y=−2. When x=4: y=10.\nCheck: 0²−0−2=−2 ✓ and 4²−4−2=10 ✓',
    },

    // ── Q10 Medium — simultaneous linear-quadratic, clean integers ───────────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously: y = x − 2 and y = x² − 5x + 3.',
      answer: 'x = 1, y = −1  or  x = 5, y = 3',
      checkMode: 'auto',
      correctAnswers: ['x=1,y=-1 or x=5,y=3', 'x=5,y=3 or x=1,y=-1', '(1,-1) and (5,3)'],
      explanation: 'x−2=x²−5x+3 → x²−6x+5=0 → (x−1)(x−5)=0 → x=1 or x=5.\nWhen x=1: y=−1. When x=5: y=3.\nCheck: 1²−5(1)+3=−1 ✓ and 5²−5(5)+3=3 ✓',
    },

    // ── Q11 Hard — simultaneous, discriminant reasoning ──────────────────────
    {
      difficulty: 'Hard',
      question: 'For which value(s) of m will the line y = mx + 4 intersect the parabola y = x² + 2x + 7 at two distinct points?',
      answer: 'm < 2 − 2√3 or m > 2 + 2√3',
      checkMode: 'self',
    },

    // ── Q12 Easy — surd equation ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: √(x + 4) = x − 2.',
      answer: 'x = 5',
      checkMode: 'auto',
      correctAnswer: 'x=5',
      correctAnswers: ['x=5', 'x = 5', '5'],
      explanation: 'Square: x+4=x²−4x+4 → x²−5x=0 → x=0 or x=5.\nCheck x=0: √4=2, but 0−2=−2, rejected.\nCheck x=5: √9=3, and 5−2=3 ✓ valid.\nSolution: x=5.',
    },

    // ── Q13 Medium — surd equation ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: √(3x + 7) = x + 1.',
      answer: 'x = 3',
      checkMode: 'auto',
      correctAnswer: 'x=3',
      correctAnswers: ['x=3', 'x = 3', '3'],
      explanation: 'Square: 3x+7=x²+2x+1 → x²−x−6=0 → (x−3)(x+2)=0 → x=3 or x=−2.\nCheck x=3: √16=4, and 3+1=4 ✓ valid.\nCheck x=−2: √1=1, but −2+1=−1, rejected.\nSolution: x=3.',
    },

    // ── Q14 Hard — surd equation, conceptual ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho solves √(2x − 3) = −5 and says there is no solution. Is he correct? Explain.',
      answer: 'Yes — the square root symbol always denotes the non-negative root, so √(2x − 3) can never equal a negative number such as −5. The equation has no solution, and no algebra is needed to see this.',
      checkMode: 'self',
    },

    // ── Q15 Easy — exponential equation ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: 2^(3x) = 64.',
      answer: 'x = 2',
      checkMode: 'auto',
      correctAnswer: 'x=2',
      correctAnswers: ['x=2', 'x = 2', '2'],
      explanation: '64=2⁶. So 3x=6 → x=2 ✓',
    },

    // ── Q16 Medium — exponential equation ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 25^(x + 1) = 125^x.',
      answer: 'x = 2',
      checkMode: 'auto',
      correctAnswer: 'x=2',
      correctAnswers: ['x=2', 'x = 2', '2'],
      explanation: '25=5², 125=5³. So 5^(2x+2)=5^(3x) → 2x+2=3x → x=2 ✓',
    },

    // ── Q17 Hard — exponential equation, k-method ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: 5^(2x) − 30 · 5^x + 125 = 0.',
      answer: 'x = 1 or x = 2',
      checkMode: 'auto',
      correctAnswers: ['x=1 or x=2', 'x=2 or x=1'],
      explanation: 'Let k=5^x: k²−30k+125=0. Δ=900−500=400, √400=20. k=(30±20)/2=25 or 5.\n5^x=25=5² → x=2. 5^x=5 → x=1.\nSolution: x=1 or x=2 ✓',
    },

    // ── Q18 Easy — rational fraction equation ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: 6/(x − 1) = 3/(x + 2).',
      answer: 'x = −5',
      checkMode: 'auto',
      correctAnswer: 'x=-5',
      correctAnswers: ['x=-5', 'x = -5', '-5'],
      explanation: 'Restrictions: x≠1, x≠−2.\nCross-multiply: 6(x+2)=3(x−1) → 6x+12=3x−3 → 3x=−15 → x=−5.\nNot excluded — valid. x=−5 ✓',
    },

    // ── Q19 Medium — rational fraction equation, quadratic ───────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x − 12/x = 1.',
      answer: 'x = 4 or x = −3',
      checkMode: 'auto',
      correctAnswers: ['x=4 or x=-3', 'x=-3 or x=4', '4 or -3', '-3 or 4'],
      explanation: 'Restriction: x≠0.\nMultiply by x: x²−12=x → x²−x−12=0 → (x−4)(x+3)=0 → x=4 or x=−3.\nNeither excluded. Solution: x=4 or x=−3 ✓',
    },

    // ── Q20 Hard — rational fraction equation, restriction reasoning ─────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: (5x)/(x − 3) = 2 + 15/(x − 3), stating any restrictions.',
      answer: 'Restriction: x ≠ 3.\nMultiply by (x−3): 5x = 2(x−3) + 15 → 5x = 2x − 6 + 15 → 5x = 2x + 9 → 3x = 9 → x = 3.\nSince x = 3 is excluded (it makes the denominator zero), there is no solution.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered algebra, equations and inequalities at Grade 12 level.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block A (0-2):   Nature of roots
    // Block B (3-4):   Solving quadratics (formula / completing the square)
    // Block C (5-7):   Quadratic inequalities
    // Block D (8-10):  Simultaneous linear-quadratic
    // Block E (11-13): Surd equations
    // Block F (14-16): Exponential equations
    // Block G (17-19): Algebraic fraction equations
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Nature of roots
        { difficulty: 'Easy', question: 'Determine the nature of the roots of x² − 10x + 25 = 0 without solving.', answer: 'Real, equal, rational roots', checkMode: 'auto', correctAnswer: 'real, equal, rational', correctAnswers: ['real, equal, rational', 'real equal rational', 'equal, real, rational'], explanation: 'a=1, b=−10, c=25. Δ=100−100=0.\nReal, equal, rational roots ✓' },
        { difficulty: 'Medium', question: 'Determine the nature of the roots of x² + 2x − 4 = 0 without solving.', answer: 'Real, unequal, irrational roots', checkMode: 'auto', correctAnswer: 'real, unequal, irrational', correctAnswers: ['real, unequal, irrational', 'real unequal irrational', 'unequal, real, irrational'], explanation: 'a=1, b=2, c=−4. Δ=4+16=20, not a perfect square.\nReal, unequal, irrational roots ✓' },
        { difficulty: 'Hard', question: 'For which value(s) of p will 2x² + px + 8 = 0 have real, equal roots?', answer: 'p = 8 or p = −8', checkMode: 'auto', correctAnswers: ['p=8 or p=-8', 'p=-8 or p=8', 'p=±8', 'p = ±8', '8 or -8', '-8 or 8'], explanation: 'Δ=p²−4(2)(8)=p²−64. For equal roots, Δ=0: p²=64 → p=8 or p=−8 ✓' },

        // Block B — Solving quadratics
        { difficulty: 'Easy', question: 'Solve for x by factorisation: 4x² + 4x − 3 = 0.', answer: 'x = ½ or x = −3/2', checkMode: 'auto', correctAnswers: ['x=1/2 or x=-3/2', 'x=-3/2 or x=1/2', 'x=0.5 or x=-1.5', 'x=-1.5 or x=0.5'], explanation: '4x²+6x−2x−3=0 → 2x(2x+3)−1(2x+3)=0 → (2x−1)(2x+3)=0.\nx=½ or x=−3/2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² + 4x − 3 = 0.', answer: 'x = −2 + √7 or x = −2 − √7', checkMode: 'self' },

        // Block C — Quadratic inequalities
        { difficulty: 'Easy', question: 'Solve for x: x² − 16 < 0.', answer: '−4 < x < 4', checkMode: 'auto', correctAnswers: ['-4<x<4', '-4 < x < 4', '(-4,4)'], explanation: 'x²−16=0 → x=±4. Opens upward, so <0 between the roots.\nSolution: −4 < x < 4 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 2x − 15 ≥ 0.', answer: 'x ≤ −5 or x ≥ 3', checkMode: 'auto', correctAnswers: ['x≤-5 or x≥3', 'x <= -5 or x >= 3', 'x≥3 or x≤-5'], explanation: '(x+5)(x−3)=0 → x=−5 or x=3. Opens upward, so ≥0 outside the roots.\nSolution: x≤−5 or x≥3 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: −2x² + 2x + 4 > 0.', answer: '−1 < x < 2', checkMode: 'auto', correctAnswers: ['-1<x<2', '-1 < x < 2', '(-1,2)'], explanation: 'Divide by −2 (flip): x²−x−2<0 → (x−2)(x+1)<0 → −1<x<2 ✓' },

        // Block D — Simultaneous linear-quadratic
        { difficulty: 'Medium', question: 'Solve simultaneously: y = 2x + 1 and y = x² + 2x − 3.', answer: 'x = 2, y = 5  or  x = −2, y = −3', checkMode: 'auto', correctAnswers: ['x=2,y=5 or x=-2,y=-3', 'x=-2,y=-3 or x=2,y=5', '(2,5) and (-2,-3)'], explanation: '2x+1=x²+2x−3 → x²−4=0 → x=±2.\nWhen x=2: y=5. When x=−2: y=−3.\nCheck: 2²+2(2)−3=5 ✓ and (−2)²+2(−2)−3=−3 ✓' },
        { difficulty: 'Medium', question: 'Solve simultaneously: y = x + 1 and y = x² − 3x + 1.', answer: 'x = 0, y = 1  or  x = 4, y = 5', checkMode: 'auto', correctAnswers: ['x=0,y=1 or x=4,y=5', 'x=4,y=5 or x=0,y=1', '(0,1) and (4,5)'], explanation: 'x+1=x²−3x+1 → x²−4x=0 → x=0 or x=4.\nWhen x=0: y=1. When x=4: y=5.\nCheck: 0²−0+1=1 ✓ and 4²−3(4)+1=5 ✓' },
        { difficulty: 'Hard', question: 'Show algebraically that the line y = x − 4 does not intersect the parabola y = x² − 3x + 2.', answer: 'x−4=x²−3x+2 → x²−4x+6=0. Δ=16−24=−8<0.\nSince Δ<0, there are no real solutions, so the line does not intersect the parabola.', checkMode: 'self' },

        // Block E — Surd equations
        { difficulty: 'Easy', question: 'Solve for x: √(x + 6) = x.', answer: 'x = 3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Square: x+6=x² → x²−x−6=0 → (x−3)(x+2)=0 → x=3 or x=−2.\nCheck x=3: √9=3=3 ✓ valid.\nCheck x=−2: √4=2≠−2, rejected.\nSolution: x=3.' },
        { difficulty: 'Medium', question: 'Solve for x: √(4x + 5) = x + 2.', answer: 'x = 1 or x = −1', checkMode: 'auto', correctAnswers: ['x=1 or x=-1', 'x=-1 or x=1', '1 or -1', '-1 or 1'], explanation: 'Square: 4x+5=x²+4x+4 → x²=1 → x=±1.\nCheck x=1: √9=3, and 1+2=3 ✓ valid.\nCheck x=−1: √1=1, and −1+2=1 ✓ valid.\nSolution: x=1 or x=−1.' },
        { difficulty: 'Hard', question: 'Solve for x: 2 + √(x − 3) = x − 1.', answer: 'x = 3 or x = 4', checkMode: 'auto', correctAnswers: ['x=3 or x=4', 'x=4 or x=3', '3 or 4', '4 or 3'], explanation: 'Isolate: √(x−3)=x−3. Square: x−3=(x−3)². Let w=x−3: w=w² → w(w−1)=0 → w=0 or w=1 → x=3 or x=4.\nCheck x=3: 2+√0=2, and 3−1=2 ✓ valid.\nCheck x=4: 2+√1=3, and 4−1=3 ✓ valid.\nSolution: x=3 or x=4.' },

        // Block F — Exponential equations
        { difficulty: 'Easy', question: 'Solve for x: 4^x = 256.', answer: 'x = 4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: '256=4⁴. So x=4 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 8^(x − 1) = 16^x.', answer: 'x = −3', checkMode: 'auto', correctAnswer: 'x=-3', correctAnswers: ['x=-3', 'x = -3', '-3'], explanation: '8=2³, 16=2⁴. So 2^(3x−3)=2^(4x) → 3x−3=4x → x=−3 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 3^(2x) − 12 · 3^x + 27 = 0.', answer: 'x = 1 or x = 2', checkMode: 'auto', correctAnswers: ['x=1 or x=2', 'x=2 or x=1'], explanation: 'Let k=3^x: k²−12k+27=0 → (k−3)(k−9)=0 → k=3 or k=9.\n3^x=3 → x=1. 3^x=9=3² → x=2.\nSolution: x=1 or x=2 ✓' },

        // Block G — Algebraic fraction equations
        { difficulty: 'Easy', question: 'Solve for x: 8/(x + 3) = 4/(x − 1).', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Restrictions: x≠−3, x≠1.\nCross-multiply: 8(x−1)=4(x+3) → 8x−8=4x+12 → 4x=20 → x=5 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: x − 12/x = 1.', answer: 'x = 4 or x = −3', checkMode: 'auto', correctAnswers: ['x=4 or x=-3', 'x=-3 or x=4', '4 or -3', '-3 or 4'], explanation: 'Restriction: x≠0.\nMultiply by x: x²−12=x → x²−x−12=0 → (x−4)(x+3)=0 → x=4 or x=−3 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: (2x + 1)/(x − 1) = 3 − 2/(x − 1), stating any restrictions.', answer: 'x = 6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: 'Restriction: x≠1.\nMultiply by (x−1): 2x+1=3(x−1)−2 → 2x+1=3x−3−2 → 2x+1=3x−5 → −x=−6 → x=6.\nNot excluded — valid. x=6 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered the nature of roots, quadratic equations and inequalities, simultaneous systems, surd equations, exponential equations, and algebraic fraction equations.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples, especially on surd and rational fraction equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
