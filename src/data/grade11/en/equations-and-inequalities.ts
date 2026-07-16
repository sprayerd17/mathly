import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────
// Section 1: factorisation method  → blue   (#2563eb)
//            completing the square → orange (#ea580c)
//            quadratic formula     → green  (#16a34a)
// Section 2: critical values       → blue
//            sign of each interval → orange
//            final solution        → green
// Section 3: linear equation       → blue
//            quadratic equation    → orange
//            substitution result   → green
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Equations and Inequalities',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING QUADRATIC EQUATIONS USING THREE METHODS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-quadratic-equations',
      title: 'Solving Quadratic Equations Using Three Methods',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We solve quadratic equations of the form <strong>ax² + bx + c = 0</strong> using three methods: ${bl('factorisation')} (when the expression factorises easily), ${or('completing the square')} (especially useful when factorisation isn't simple), and the ${gr('quadratic formula')} x = (−b ± √(b² − 4ac)) / 2a (which always works for any quadratic ax² + bx + c = 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factorisation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('completing the square')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quadratic formula')}</span>` +
        `</div>` +

        // ── Three method cards ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three methods</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Factorisation</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Express ax² + bx + c as a product of two linear factors, then set each factor equal to zero.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Use when:</strong> the expression factorises easily over the integers.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Completing the Square</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rewrite the equation in the form (x + p)² = q, then take square roots of both sides.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Use when:</strong> factorisation is not straightforward, or when surd answers are expected.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Quadratic Formula</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Substitute the values of a, b, and c from ax² + bx + c = 0 directly into the formula.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Use when:</strong> any quadratic — this method always works.</p>` +
        `</div>` +

        `</div>` +

        // ── Quadratic formula display ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The quadratic formula</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin:0;letter-spacing:0.02em;">x = (−b ± √(b² − 4ac)) / 2a</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">where ax² + bx + c = 0, with a ≠ 0</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Choosing the most efficient method</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always check whether the quadratic ${bl('factorises')} first — it gives the quickest solution. If it does not factorise nicely, use ${or('completing the square')} (especially efficient when a = 1) or the ${gr('quadratic formula')} (the safe all-purpose choice, especially when a ≠ 1).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x² − 7x + 12 = 0 by factorisation.',
          answer: `${bl('x = 3')} or ${bl('x = 4')}`,
          steps: [
            `Write the equation in standard form: x² − 7x + 12 = 0.`,
            `${bl('Factorise:')} Find two numbers that multiply to +12 and add to −7. These are −3 and −4.<br>(x − 3)(x − 4) = 0`,
            `Set each factor equal to zero: x − 3 = 0 or x − 4 = 0.`,
            `<strong>Solutions:</strong> ${bl('x = 3')} or ${bl('x = 4')}`,
          ],
        },
        {
          question: 'Solve x² + 6x + 4 = 0 by completing the square.',
          answer: `${or('x = −3 + √5')} or ${or('x = −3 − √5')}`,
          steps: [
            `Write the equation: x² + 6x + 4 = 0. Since a = 1, completing the square is straightforward.`,
            `${or('Complete the square:')} Take half the coefficient of x: half of 6 is 3. Write the perfect square trinomial:<br>(x + 3)² − 9 + 4 = 0`,
            `Simplify: ${or('(x + 3)² = 5')}`,
            `Take square roots of both sides: x + 3 = ±√5`,
            `<strong>Solutions:</strong> ${or('x = −3 ± √5')} &nbsp;(i.e. x = −3 + √5 or x = −3 − √5)`,
          ],
        },
        {
          question: 'Solve 2x² − 5x − 3 = 0 using the quadratic formula.',
          answer: `${gr('x = 3')} or ${gr('x = −½')}`,
          steps: [
            `Identify the coefficients: a = 2, b = −5, c = −3.`,
            `${gr('Quadratic formula:')} x = (−b ± √(b² − 4ac)) / 2a`,
            `Substitute: x = (−(−5) ± √((−5)² − 4(2)(−3))) / (2 × 2) = (5 ± √(25 + 24)) / 4 = (5 ± √49) / 4 = (5 ± 7) / 4`,
            `<strong>Solutions:</strong> x = (5 + 7) / 4 = 12/4 = ${gr('3')} &nbsp; or &nbsp; x = (5 − 7) / 4 = −2/4 = ${gr('−½')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve quadratic equations using factorisation, completing the square, and the quadratic formula with a worked example for each method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side comparison of all three methods applied to a quadratic equation with factorisation steps in blue, completing the square in orange, and the quadratic formula in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — QUADRATIC AND RATIONAL INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-rational-inequalities',
      title: 'Quadratic and Rational Inequalities',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">To solve a quadratic inequality, we first solve the related quadratic equation to find the ${bl('critical values')}, then use a number line or ${or('sign analysis')} to determine which intervals satisfy the inequality. The ${gr('final solution')} is the set of all x-values where the inequality holds. For rational inequalities (fractions), we must also consider where the denominator equals zero, since the expression is undefined there.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('critical values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sign of each interval')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final solution')}</span>` +
        `</div>` +

        // ── Steps ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for solving inequalities</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find critical values')} — Solve the related equation (replace the inequality sign with =) to find the x-values where the expression equals zero. For rational inequalities, also note where the denominator equals zero.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Analyse each interval')} — The critical values divide the number line into regions. Choose a test point in each region and determine the ${or('sign')} (positive or negative) of the expression in that region.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the final solution')} — Select the regions where the sign matches the inequality. Include the endpoints if ≤ or ≥ is used; exclude them if &lt; or &gt; is used. Always exclude values that make the denominator zero.</p>` +
        `</div>` +

        `</div>` +

        // ── Rational inequalities warning ────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Important: rational inequalities</p>` +
        `<p style="margin:0;color:#7c2d12;">When the inequality involves a fraction, include the x-value that makes the <strong>denominator zero</strong> as a critical value. This value is <strong>always excluded</strong> from the solution — even when the inequality uses ≤ or ≥ — because the expression is undefined there.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Number line sign analysis</p>` +
        `<p style="margin:0;color:#1e3a8a;">Draw a number line, mark the ${bl('critical values')}, and test one point in each region. The ${or('sign')} typically alternates between regions for quadratic and rational expressions — but always verify by substitution. Identify the regions that match the inequality and write the ${gr('solution')} in inequality or interval notation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x² − 5x + 6 > 0.',
          answer: `${gr('x < 2 or x > 3')}`,
          steps: [
            `Solve the related equation: x² − 5x + 6 = 0. Factorise: (x − 2)(x − 3) = 0.<br>${bl('Critical values:')} x = ${bl('2')} or x = ${bl('3')}`,
            `The critical values divide the number line into three intervals: x &lt; 2, &nbsp;2 &lt; x &lt; 3, &nbsp;x &gt; 3.`,
            `${or('Test each interval:')}<br>• x &lt; 2: test x = 0 → (0)² − 5(0) + 6 = 6 &gt; 0 &nbsp;${or('positive ✓')}<br>• 2 &lt; x &lt; 3: test x = 2.5 → (2.5)² − 5(2.5) + 6 = −0.25 &lt; 0 &nbsp;${or('negative')}<br>• x &gt; 3: test x = 4 → (4)² − 5(4) + 6 = 2 &gt; 0 &nbsp;${or('positive ✓')}`,
            `We need the expression &gt; 0. The inequality is strict, so the endpoints x = 2 and x = 3 are excluded.<br><strong>Solution:</strong> ${gr('x < 2 or x > 3')}`,
          ],
        },
        {
          question: 'Solve x² − 9 ≤ 0.',
          answer: `${gr('−3 ≤ x ≤ 3')}`,
          steps: [
            `Solve the related equation: x² − 9 = 0 → x² = 9.<br>${bl('Critical values:')} x = ${bl('−3')} or x = ${bl('3')}`,
            `The critical values divide the number line into three intervals: x &lt; −3, &nbsp;−3 ≤ x ≤ 3, &nbsp;x &gt; 3.`,
            `${or('Test each interval:')}<br>• x &lt; −3: test x = −4 → (−4)² − 9 = 7 &gt; 0 &nbsp;${or('positive')}<br>• −3 &lt; x &lt; 3: test x = 0 → (0)² − 9 = −9 &lt; 0 &nbsp;${or('negative ✓')}<br>• x &gt; 3: test x = 4 → (4)² − 9 = 7 &gt; 0 &nbsp;${or('positive')}`,
            `We need the expression ≤ 0. The expression equals zero at x = −3 and x = 3, so these endpoints are included (≤).<br><strong>Solution:</strong> ${gr('−3 ≤ x ≤ 3')}`,
          ],
        },
        {
          question: 'Solve (x − 2) / (x + 1) > 0.',
          answer: `${gr('x < −1 or x > 2')}`,
          steps: [
            `Find ${bl('critical values:')} The numerator equals zero when x = ${bl('2')} (expression is zero). The denominator equals zero when x = ${bl('−1')} (expression is undefined — always excluded).`,
            `The critical values divide the number line into three intervals: x &lt; −1, &nbsp;−1 &lt; x &lt; 2, &nbsp;x &gt; 2.`,
            `${or('Test each interval:')}<br>• x &lt; −1: test x = −2 → (−2 − 2)/(−2 + 1) = (−4)/(−1) = 4 &gt; 0 &nbsp;${or('positive ✓')}<br>• −1 &lt; x &lt; 2: test x = 0 → (0 − 2)/(0 + 1) = −2 &lt; 0 &nbsp;${or('negative')}<br>• x &gt; 2: test x = 3 → (3 − 2)/(3 + 1) = ¼ &gt; 0 &nbsp;${or('positive ✓')}`,
            `We need the expression &gt; 0. The inequality is strict, so x = 2 is excluded. x = −1 is always excluded (denominator zero).<br><strong>Solution:</strong> ${gr('x < −1 or x > 2')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve quadratic and rational inequalities using critical values and sign analysis on a number line" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line diagram showing critical values marked in blue, sign of the expression in each interval in orange, and the final solution intervals highlighted in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING SYSTEMS WITH ONE LINEAR AND ONE QUADRATIC EQUATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-quadratic-systems',
      title: 'Solving Systems with One Linear and One Quadratic Equation',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">When solving two equations simultaneously where one is ${bl('linear')} and the other is ${or('quadratic')}, we use substitution: solve the ${bl('linear equation')} for one variable, substitute into the ${or('quadratic equation')}, then solve the ${gr('resulting quadratic')}. This can be done algebraically or verified graphically by finding where the line intersects the parabola.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('linear equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quadratic equation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('substitution result')}</span>` +
        `</div>` +

        // ── Substitution steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Substitution method steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Solve the linear equation')} for one variable — usually express y in terms of x from the linear equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Substitute the expression from step 1 into the ${or('quadratic equation')} to eliminate one variable, giving a single equation in x.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Solve the ${gr('resulting quadratic')} using any appropriate method — factorisation, completing the square, or the quadratic formula.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Back-substitute</strong> — substitute each x-value back into the ${bl('linear equation')} to find the corresponding y-value, then write your answer as coordinate pairs.</p>` +
        `</div>` +

        `</div>` +

        // ── Graphical interpretation ──────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Graphical interpretation</p>` +
        `<p style="margin:0;color:#1e3a8a;">The solutions represent the <strong>points of intersection</strong> of the ${bl('straight line')} and the ${or('parabola')} on the Cartesian plane. A system may have 0, 1, or 2 solutions, corresponding to the line intersecting the parabola at 0, 1, or 2 points. The discriminant of the resulting quadratic tells you how many intersection points exist.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve simultaneously: y = x + 1 and y = x² − x − 1.',
          answer: `(${gr('1 + √3')} ; ${gr('2 + √3')}) and (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          steps: [
            `Identify the equations: ${bl('linear:')} y = x + 1 &nbsp; and &nbsp; ${or('quadratic:')} y = x² − x − 1.`,
            `${gr('Substitute')} the linear expression into the quadratic equation:<br>x + 1 = x² − x − 1`,
            `Rearrange: ${gr('x² − 2x − 2 = 0')}`,
            `Solve using the quadratic formula: a = 1, b = −2, c = −2.<br>x = (2 ± √(4 + 8)) / 2 = (2 ± √12) / 2 = 1 ± √3`,
            `Find corresponding y-values using ${bl('y = x + 1')}:<br>When x = 1 + √3: y = (1 + √3) + 1 = 2 + √3<br>When x = 1 − √3: y = (1 − √3) + 1 = 2 − √3`,
            `<strong>Solutions:</strong> (${gr('1 + √3')} ; ${gr('2 + √3')}) and (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          ],
        },
        {
          question: 'Sipho solves simultaneously: y = 2x − 3 and y = x² − 4x + 1.',
          answer: `(${gr('3 + √5')} ; ${gr('3 + 2√5')}) and (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          steps: [
            `Identify the equations: ${bl('linear:')} y = 2x − 3 &nbsp; and &nbsp; ${or('quadratic:')} y = x² − 4x + 1.`,
            `${gr('Substitute')} the linear expression into the quadratic equation:<br>2x − 3 = x² − 4x + 1`,
            `Rearrange: ${gr('x² − 6x + 4 = 0')}`,
            `Solve using the quadratic formula: a = 1, b = −6, c = 4.<br>x = (6 ± √(36 − 16)) / 2 = (6 ± √20) / 2 = 3 ± √5`,
            `Find corresponding y-values using ${bl('y = 2x − 3')}:<br>When x = 3 + √5: y = 2(3 + √5) − 3 = 6 + 2√5 − 3 = 3 + 2√5<br>When x = 3 − √5: y = 2(3 − √5) − 3 = 6 − 2√5 − 3 = 3 − 2√5`,
            `<strong>Solutions:</strong> (${gr('3 + √5')} ; ${gr('3 + 2√5')}) and (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve a system of one linear and one quadratic equation simultaneously using the substitution method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Graph showing a straight line in blue intersecting a parabola in orange at two points, with the intersection coordinates highlighted in green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x² − 9x + 20 = 0 by factorisation.',
      answer: 'x = 4 or x = 5',
      checkMode: 'auto',
      correctAnswers: ['x=4 or x=5', 'x = 4 or x = 5', 'x=5 or x=4', 'x = 5 or x = 4', '4 or 5', '5 or 4'],
      explanation: 'Find two numbers that multiply to 20 and add to −9: these are −4 and −5.\n(x − 4)(x − 5) = 0\nSet each factor to zero: x = 4 or x = 5 ✓',
    },

    // ── Q2 Medium — completing the square ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² + 4x − 1 = 0 by completing the square.',
      answer: 'x² + 4x = 1\n(x + 2)² − 4 = 1 → (x + 2)² = 5\nx + 2 = ±√5\nx = −2 + √5 or x = −2 − √5',
      checkMode: 'self',
    },

    // ── Q3 Hard — quadratic formula with full discriminant ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve 3x² + 2x − 5 = 0 using the quadratic formula, showing the full discriminant calculation.',
      answer: 'a = 3, b = 2, c = −5.\nDiscriminant: b² − 4ac = 4 − 4(3)(−5) = 4 + 60 = 64.\nx = (−2 ± √64) / 6 = (−2 ± 8) / 6.\nSolutions: x = (−2 + 8) / 6 = 1  or  x = (−2 − 8) / 6 = −5/3.',
      checkMode: 'self',
    },

    // ── Q4 Easy — quadratic inequality ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x² − 4 > 0.',
      answer: 'x < −2 or x > 2',
      checkMode: 'auto',
      correctAnswers: ['x<-2 or x>2', 'x < -2 or x > 2', 'x<−2 or x>2', 'x < −2 or x > 2'],
      explanation: 'Critical values: x² − 4 = 0 → x = −2 or x = 2.\nTest intervals:\n• x < −2: positive ✓\n• −2 < x < 2: negative\n• x > 2: positive ✓\nSolution: x < −2 or x > 2.',
    },

    // ── Q5 Medium — quadratic inequality ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² − 7x + 10 ≤ 0.',
      answer: '2 ≤ x ≤ 5',
      checkMode: 'auto',
      correctAnswers: ['2≤x≤5', '2 ≤ x ≤ 5', '[2,5]', '2<=x<=5', '2 <= x <= 5'],
      explanation: 'Critical values: (x − 2)(x − 5) = 0 → x = 2 or x = 5.\nTest intervals:\n• x < 2: positive\n• 2 < x < 5: negative ✓\n• x > 5: positive\nThe expression ≤ 0 between and at the roots.\nSolution: 2 ≤ x ≤ 5.',
    },

    // ── Q6 Hard — incomplete inequality answer ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho solves x² − 16 < 0 and gets x < 4. Is his answer complete? Explain.',
      answer: 'No — he is missing part of the solution. The full solution is −4 < x < 4, since x² − 16 < 0 means x must be between −4 and 4.',
      checkMode: 'self',
    },

    // ── Q7 Medium — rational inequality ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve (x − 3) / (x + 2) < 0.',
      answer: '−2 < x < 3',
      checkMode: 'auto',
      correctAnswers: ['-2<x<3', '-2 < x < 3', '−2<x<3', '−2 < x < 3', '(-2,3)'],
      explanation: 'Critical values: numerator zero → x = 3; denominator zero → x = −2 (always excluded).\nTest intervals:\n• x < −2: positive\n• −2 < x < 3: negative ✓\n• x > 3: positive\nSolution: −2 < x < 3.',
    },

    // ── Q8 Hard — excluded value in rational inequality ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato solves (x + 1) / (x − 4) ≥ 0 and includes x = 4 in her answer. Is this correct? Explain.',
      answer: 'No — x = 4 makes the denominator zero, making the expression undefined, so x = 4 must be excluded even though the inequality includes "or equal to".',
      checkMode: 'self',
    },

    // ── Q9 Hard — quadratic inequality with sign analysis ────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² − 2x − 8 ≥ 0.',
      answer: 'Solve x² − 2x − 8 = 0: (x − 4)(x + 2) = 0, x = 4 or x = −2.\nTest intervals:\n• x < −2: positive ✓\n• −2 < x < 4: negative\n• x > 4: positive ✓\nSolution: x ≤ −2 or x ≥ 4.',
      checkMode: 'self',
    },

    // ── Q10 Medium — simultaneous linear and quadratic ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously: y = x + 2 and y = x² − 4.',
      answer: 'x = 3, y = 5  or  x = −2, y = 0',
      checkMode: 'auto',
      correctAnswers: ['x=3 or x=-2', 'x = 3 or x = -2', '(3,5) and (-2,0)', 'x=3,y=5 and x=-2,y=0'],
      explanation: 'Substitute y = x + 2 into y = x² − 4:\nx + 2 = x² − 4\nx² − x − 6 = 0 → (x − 3)(x + 2) = 0\nx = 3 or x = −2\nCorresponding y-values: y = 5 or y = 0.',
    },

    // ── Q11 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo solves y = 2x − 1 and y = x² − 3x + 2 simultaneously. Find both solution points.',
      answer: 'Substitute: 2x − 1 = x² − 3x + 2.\nx² − 5x + 3 = 0.\nx = (5 ± √13) / 2.\nCorresponding y = 2x − 1 = 4 ± √13.\nSolution points: ((5 + √13)/2 ; 4 + √13) and ((5 − √13)/2 ; 4 − √13).',
      checkMode: 'self',
    },

    // ── Q12 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously: y = −x + 5 and y = x² − 2x − 3.',
      answer: 'Substitute: −x + 5 = x² − 2x − 3.\nx² − x − 8 = 0.\nx = (1 ± √33) / 2.\nCorresponding y-values from y = −x + 5.\nSolution points: ((1 + √33)/2 ; (9 − √33)/2) and ((1 − √33)/2 ; (9 + √33)/2).',
      checkMode: 'self',
    },

    // ── Q13 Medium — quadratic formula ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² + x − 12 = 0 using the quadratic formula.',
      answer: 'x = 3 or x = −4',
      checkMode: 'auto',
      correctAnswers: ['x=3 or x=-4', 'x = 3 or x = -4', 'x=-4 or x=3', 'x = -4 or x = 3', '3 or -4', '-4 or 3'],
      explanation: 'a = 1, b = 1, c = −12. Discriminant: Δ = 1 + 48 = 49.\nx = (−1 ± 7) / 2.\nx = 3 or x = −4 ✓',
    },

    // ── Q14 Hard — discriminant and nature of roots ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says every quadratic equation has two real solutions. Is she correct? Explain using the discriminant.',
      answer: 'No — if the discriminant (b² − 4ac) is negative, there are no real solutions; if it equals zero, there is exactly one repeated real solution; only a positive discriminant gives two distinct real solutions.',
      checkMode: 'self',
    },

    // ── Q15 Hard — inequality with repeated root ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² − 6x + 9 ≤ 0, explaining what the discriminant tells us before solving.',
      answer: 'Discriminant = 36 − 36 = 0 → one repeated root. Solving: (x − 3)² ≤ 0. Since a square is always ≥ 0, the only solution is x = 3 (where it equals exactly 0).',
      checkMode: 'self',
    },

    // ── Q16 Hard — rational inequality requiring rearrangement ───────────────
    {
      difficulty: 'Hard',
      question: 'Solve (2x − 1) / (x + 3) ≤ 2, being careful with the inequality direction when multiplying.',
      answer: 'Rearrange first: (2x − 1)/(x + 3) − 2 ≤ 0.\nCombine fractions: [(2x − 1) − 2(x + 3)] / (x + 3) ≤ 0.\nSimplify numerator: (2x − 1 − 2x − 6) / (x + 3) = −7 / (x + 3) ≤ 0.\nSince −7 is always negative, we need (x + 3) > 0.\nSolution: x > −3.',
      checkMode: 'self',
    },

    // ── Q17 Hard — simultaneous linear and quadratic ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously: y = 3x − 4 and y = 2x² − 6x − 9, finding both intersection points.',
      answer: 'x = 5, y = 11  or  x = −½, y = −5.5',
      checkMode: 'auto',
      correctAnswers: ['x=5 or x=-1/2', 'x = 5 or x = -1/2', 'x=5 or x=-0.5', '(5,11) and (-0.5,-5.5)', '(5,11) and (-1/2,-5.5)'],
      explanation: 'Substitute y = 3x − 4 into y = 2x² − 6x − 9:\n3x − 4 = 2x² − 6x − 9\n2x² − 9x − 5 = 0 → (2x + 1)(x − 5) = 0\nx = 5 or x = −½\nCorresponding y-values: y = 11 or y = −5.5.',
    },

    // ── Q18 Hard — nature of inequality solutions ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says solving a quadratic inequality always gives a single continuous interval as the answer. Is this always true? Explain with an example.',
      answer: 'No — for example x² − 4 > 0 gives two separate intervals (x < −2 or x > 2), not one continuous interval; this depends on whether the parabola opens upward or downward and the direction of the inequality.',
      checkMode: 'self',
    },

    // ── Q19 Hard — boundary points of inequality ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² + 3x − 10 = 0, then verify both solutions satisfy the inequality x² + 3x − 10 ≤ 0 only at these exact boundary points.',
      answer: 'Factorise: (x + 5)(x − 2) = 0 → x = −5 or x = 2. These are the boundary points where x² + 3x − 10 = 0. The full inequality x² + 3x − 10 ≤ 0 holds between and including these points: −5 ≤ x ≤ 2.',
      checkMode: 'self',
    },

    // ── Q20 Hard — quadratic inequality in context ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'A rectangular garden has length (x + 4) and width (x − 2), with area greater than 35 m². Find the possible range of x values, given that x > 2 for the dimensions to make sense.',
      answer: '(x + 4)(x − 2) > 35\nx² + 2x − 8 > 35\nx² + 2x − 43 > 0\nUsing the quadratic formula: x = (−2 ± √(4 + 172)) / 2 = (−2 ± √176) / 2 = −1 ± √44.\nCritical values: x ≈ −7.63 or x ≈ 5.63.\nSince x > 2, the solution is x > −1 + √44 (approximately x > 5.63).',
      checkMode: 'self',
    },

    // ── Q21 Hard — problem-solving: work backwards from equal-roots condition to find k ──
    {
      difficulty: 'Hard',
      question: 'The equation x² − kx + 9 = 0 has real, equal roots. Determine the value(s) of k.',
      answer: 'k = 6 or k = −6',
      checkMode: 'auto',
      correctAnswers: ['k=6 or k=-6', 'k = 6 or k = -6', 'k=-6 or k=6', 'k = -6 or k = 6', 'k=±6', 'k = ±6', '6 or -6', '-6 or 6'],
      explanation: 'For real, equal roots, the discriminant must equal zero: b² − 4ac = 0.\nHere a = 1, b = −k, c = 9, so (−k)² − 4(1)(9) = 0.\nk² − 36 = 0 → k² = 36 → k = 6 or k = −6.\nCheck: k = 6 gives x² − 6x + 9 = (x − 3)² = 0 (one repeated root); k = −6 gives x² + 6x + 9 = (x + 3)² = 0 (one repeated root) ✓',
    },

    // ── Q22 Hard — problem-solving: synthesise systems + discriminant to find range of k ──
    {
      difficulty: 'Hard',
      question: 'For which value(s) of k will the line y = x + k not intersect the parabola y = x² + 3x + 5?',
      answer: 'k < 4',
      checkMode: 'auto',
      correctAnswers: ['k<4', 'k < 4'],
      explanation: 'Substitute the line into the parabola: x + k = x² + 3x + 5.\nRearrange into standard form: x² + 2x + (5 − k) = 0.\nFor the line and parabola not to intersect, this equation must have no real solutions, so the discriminant must be negative: b² − 4ac < 0.\nHere a = 1, b = 2, c = 5 − k, so 4 − 4(5 − k) < 0 → 4 − 20 + 4k < 0 → 4k − 16 < 0.\nSolution: k < 4 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered equations and inequalities.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + 2x − 8 = 0', answer: 'x=2 or x=-4', checkMode: 'auto', correctAnswers: ['x=2 or x=-4', 'x=-4 or x=2', '2 or -4', '-4 or 2'], explanation: 'a=1, b=2, c=−8. Discriminant = 4 − 4(1)(−8) = 4 + 32 = 36.\nx = (−2 ± 6) / 2.\nx = 2 or x = −4 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 2x² + 3x − 5 = 0', answer: 'x=1 or x=-5/2', checkMode: 'auto', correctAnswers: ['x=1 or x=-5/2', 'x=-5/2 or x=1', 'x=1 or x=-2.5', 'x=-2.5 or x=1'], explanation: 'a=2, b=3, c=−5. Discriminant = 9 − 4(2)(−5) = 9 + 40 = 49.\nx = (−3 ± 7) / 4.\nx = 1 or x = −5/2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 3x² − 2x − 8 = 0', answer: 'x=2 or x=-4/3', checkMode: 'auto', correctAnswers: ['x=2 or x=-4/3', 'x=-4/3 or x=2'], explanation: 'a=3, b=−2, c=−8. Discriminant = 4 − 4(3)(−8) = 4 + 96 = 100.\nx = (2 ± 10) / 6.\nx = 2 or x = −4/3 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 4x − 3 = 0', answer: 'x=2+√7 or x=2-√7', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 2x² + 3x − 5 = 0. State the discriminant before solving.', answer: 'a=2, b=3, c=−5. Discriminant = 9 − 4(2)(−5) = 49, which is a positive perfect square, so there are two distinct rational roots.\nx = (−3 ± 7) / 4.\nx = 1 or x = −5/2.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(2x + 3) = x', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Square both sides: 2x + 3 = x².\nRearrange: x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0, so x = 3 or x = −1.\nCheck x = 3: √(2(3)+3) = √9 = 3 = 3 ✓ valid.\nCheck x = −1: √(2(−1)+3) = √1 = 1 ≠ −1, so x = −1 is extraneous (rejected).\nSolution: x = 3 only.' },
        { difficulty: 'Medium', question: 'Solve for x: √(3x + 4) = x, checking for extraneous roots.', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Square both sides: 3x + 4 = x².\nRearrange: x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0, so x = 4 or x = −1.\nCheck x = 4: √(3(4)+4) = √16 = 4 = 4 ✓ valid.\nCheck x = −1: √(3(−1)+4) = √1 = 1 ≠ −1, so x = −1 is extraneous (rejected).\nSolution: x = 4 only.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 7) = x − 5, checking carefully for extraneous roots.', answer: 'Square both sides: x + 7 = (x − 5)² = x² − 10x + 25.\nRearrange: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0, so x = 9 or x = 2.\nCheck x = 9: √16 = 4 and 9 − 5 = 4 ✓ valid.\nCheck x = 2: √9 = 3 but 2 − 5 = −3, and 3 ≠ −3, so x = 2 is extraneous (rejected — the square root can never equal a negative number).\nSolution: x = 9 only.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 2^x = 32', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Write 32 as a power of 2: 32 = 2⁵.\nSo 2^x = 2⁵, which means x = 5 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 2^(x+1) = 64', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Write 64 as a power of 2: 64 = 2⁶.\nSo 2^(x+1) = 2⁶, which means x + 1 = 6, so x = 5 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2^(2x) − 5 · 2^x + 4 = 0', answer: 'x=0 or x=2', checkMode: 'auto', correctAnswers: ['x=0 or x=2', 'x=2 or x=0'], explanation: 'Let y = 2^x, so 2^(2x) = y². The equation becomes y² − 5y + 4 = 0.\nFactorise: (y − 1)(y − 4) = 0, so y = 1 or y = 4.\nSubstitute back: 2^x = 1 → x = 0. &nbsp; 2^x = 4 = 2² → x = 2.\nSolution: x = 0 or x = 2 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 25 ≥ 0', answer: 'x≤-5 or x≥5', checkMode: 'auto', correctAnswers: ['x≤-5 or x≥5', 'x<=-5 or x>=5', 'x≥5 or x≤-5'], explanation: 'Critical values: x² − 25 = 0 → x = −5 or x = 5.\nSince the expression is a upward parabola, it is ≥ 0 outside the roots (endpoints included since ≥).\nSolution: x ≤ −5 or x ≥ 5.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − x − 12 ≤ 0', answer: '-3≤x≤4', checkMode: 'auto', correctAnswer: '-3≤x≤4', correctAnswers: ['-3≤x≤4', '-3 <= x <= 4', '[-3,4]'], explanation: 'Critical values: (x − 4)(x + 3) = 0 → x = 4 or x = −3.\nSince the parabola opens upward, it is ≤ 0 between the roots (endpoints included since ≤).\nSolution: −3 ≤ x ≤ 4.' },
        { difficulty: 'Hard', question: 'Solve for x: 2x² − x − 6 > 0', answer: 'x<-3/2 or x>2', checkMode: 'auto', correctAnswers: ['x<-3/2 or x>2', 'x>2 or x<-3/2', 'x<-1.5 or x>2'], explanation: 'Factorise: (2x + 3)(x − 2) > 0. Critical values: x = −3/2 or x = 2.\nSince the parabola opens upward, it is > 0 outside the roots (endpoints excluded since strict).\nSolution: x < −3/2 or x > 2.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 2x − 1 and y = x² − 4', answer: 'x=3,y=5 or x=-1,y=-3', checkMode: 'auto', correctAnswers: ['x=3,y=5 or x=-1,y=-3', 'x=-1,y=-3 or x=3,y=5'], explanation: 'Set 2x − 1 = x² − 4, so x² − 2x − 3 = 0.\nFactorise: (x − 3)(x + 1) = 0, so x = 3 or x = −1.\nWhen x = 3: y = 2(3) − 1 = 5. When x = −1: y = 2(−1) − 1 = −3.\nCheck: 3² − 4 = 5 ✓ and (−1)² − 4 = −3 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 3 and y = x² − x − 2', answer: 'From the first equation substitute into the second: x + 3 = x² − x − 2.\nRearrange: x² − 2x − 5 = 0.\nUsing the quadratic formula: x = (2 ± √(4 + 20)) / 2 = (2 ± √24) / 2 = 1 ± √6.\nWhen x = 1 + √6: y = (1 + √6) + 3 = 4 + √6. When x = 1 − √6: y = (1 − √6) + 3 = 4 − √6.\nSolution points: (1 + √6 ; 4 + √6) and (1 − √6 ; 4 − √6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = x + 6 and y = x² + 2x', answer: 'x=-3,y=3 or x=2,y=8', checkMode: 'auto', correctAnswers: ['x=-3,y=3 or x=2,y=8', 'x=2,y=8 or x=-3,y=3'], explanation: 'Set x + 6 = x² + 2x, so x² + x − 6 = 0.\nFactorise: (x + 3)(x − 2) = 0, so x = −3 or x = 2.\nWhen x = −3: y = −3 + 6 = 3. When x = 2: y = 2 + 6 = 8.\nCheck: (−3)² + 2(−3) = 9 − 6 = 3 ✓ and (2)² + 2(2) = 4 + 4 = 8 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Thabo solves √(x − 2) = −3 and says there is no solution. Is he correct? Explain.', answer: 'Yes, Thabo is correct. The square root symbol always denotes the non-negative square root, so √(x − 2) can never equal a negative number such as −3. Squaring both sides would give x − 2 = 9, so x = 11, but substituting back gives √9 = 3, not −3, confirming this is an extraneous solution and the equation truly has no solution.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle says the equation 3^(2x) − 4 · 3^x + 3 = 0 cannot be solved because it is not a normal quadratic. Show her method to solve it and find x.', answer: 'Let y = 3^x, so 3^(2x) = y². The equation becomes y² − 4y + 3 = 0.\nFactorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3.\nSubstitute back: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nSolution: x = 0 or x = 1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho solves x² − x − 12 ≤ 0 and writes his final answer as x ≤ 4. Explain what is wrong with his answer and give the correct solution.', answer: 'Sipho is missing part of the solution — a quadratic inequality of this type is bounded between the two critical values, not just below the larger one. The critical values are x = 4 and x = −3 (from (x − 4)(x + 3) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots. The correct solution is −3 ≤ x ≤ 4.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered the quadratic formula, surd equations, exponential equations, quadratic inequalities, and simultaneous systems.' },
        { minScore: 14, message: 'Great work! Review any missed questions on surd equations or quadratic inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on the quadratic formula and simultaneous systems, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + 3x − 10 = 0', answer: 'x=2 or x=-5', checkMode: 'auto', correctAnswers: ['x=2 or x=-5', 'x=-5 or x=2', '2 or -5', '-5 or 2'], explanation: 'a=1, b=3, c=−10. Discriminant = 9 − 4(1)(−10) = 9 + 40 = 49.\nx = (−3 ± 7) / 2.\nx = 2 or x = −5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 3x² + 2x − 8 = 0', answer: 'x=4/3 or x=-2', checkMode: 'auto', correctAnswers: ['x=4/3 or x=-2', 'x=-2 or x=4/3'], explanation: 'a=3, b=2, c=−8. Discriminant = 4 − 4(3)(−8) = 4 + 96 = 100.\nx = (−2 ± 10) / 6.\nx = 4/3 or x = −2 ✓' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 2x² − x − 6 = 0', answer: 'x=2 or x=-3/2', checkMode: 'auto', correctAnswers: ['x=2 or x=-3/2', 'x=-3/2 or x=2', 'x=2 or x=-1.5', 'x=-1.5 or x=2'], explanation: 'a=2, b=−1, c=−6. Discriminant = 1 − 4(2)(−6) = 1 + 48 = 49.\nx = (1 ± 7) / 4.\nx = 2 or x = −3/2 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 2x − 9 = 0', answer: 'x=1+√10 or x=1-√10', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 3x² − 2x − 8 = 0. State the discriminant before solving.', answer: 'a=3, b=−2, c=−8. Discriminant = 4 − 4(3)(−8) = 100, which is a positive perfect square, so there are two distinct rational roots.\nx = (2 ± 10) / 6.\nx = 2 or x = −4/3.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(x + 6) = x', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Square both sides: x + 6 = x².\nRearrange: x² − x − 6 = 0 → (x − 3)(x + 2) = 0, so x = 3 or x = −2.\nCheck x = 3: √(3+6) = √9 = 3 = 3 ✓ valid.\nCheck x = −2: √(−2+6) = √4 = 2 ≠ −2, so x = −2 is extraneous (rejected).\nSolution: x = 3 only.' },
        { difficulty: 'Medium', question: 'Solve for x: √(4x + 5) = x, checking for extraneous roots.', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Square both sides: 4x + 5 = x².\nRearrange: x² − 4x − 5 = 0 → (x − 5)(x + 1) = 0, so x = 5 or x = −1.\nCheck x = 5: √(4(5)+5) = √25 = 5 = 5 ✓ valid.\nCheck x = −1: √(4(−1)+5) = √1 = 1 ≠ −1, so x = −1 is extraneous (rejected).\nSolution: x = 5 only.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 6) = x − 6, checking carefully for extraneous roots.', answer: 'Square both sides: x + 6 = (x − 6)² = x² − 12x + 36.\nRearrange: x² − 13x + 30 = 0 → (x − 10)(x − 3) = 0, so x = 10 or x = 3.\nCheck x = 10: √16 = 4 and 10 − 6 = 4 ✓ valid.\nCheck x = 3: √9 = 3 but 3 − 6 = −3, and 3 ≠ −3, so x = 3 is extraneous (rejected — the square root can never equal a negative number).\nSolution: x = 10 only.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 3^x = 81', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Write 81 as a power of 3: 81 = 3⁴.\nSo 3^x = 3⁴, which means x = 4 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 3^(x-1) = 27', answer: 'x=4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: 'Write 27 as a power of 3: 27 = 3³.\nSo 3^(x−1) = 3³, which means x − 1 = 3, so x = 4 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 3^(2x) − 4 · 3^x + 3 = 0', answer: 'x=0 or x=1', checkMode: 'auto', correctAnswers: ['x=0 or x=1', 'x=1 or x=0'], explanation: 'Let y = 3^x, so 3^(2x) = y². The equation becomes y² − 4y + 3 = 0.\nFactorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3.\nSubstitute back: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nSolution: x = 0 or x = 1 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 36 ≥ 0', answer: 'x≤-6 or x≥6', checkMode: 'auto', correctAnswers: ['x≤-6 or x≥6', 'x<=-6 or x>=6', 'x≥6 or x≤-6'], explanation: 'Critical values: x² − 36 = 0 → x = −6 or x = 6.\nSince the expression is an upward parabola, it is ≥ 0 outside the roots (endpoints included since ≥).\nSolution: x ≤ −6 or x ≥ 6.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − 2x − 15 ≤ 0', answer: '-3≤x≤5', checkMode: 'auto', correctAnswer: '-3≤x≤5', correctAnswers: ['-3≤x≤5', '-3 <= x <= 5', '[-3,5]'], explanation: 'Critical values: (x − 5)(x + 3) = 0 → x = 5 or x = −3.\nSince the parabola opens upward, it is ≤ 0 between the roots (endpoints included since ≤).\nSolution: −3 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Solve for x: 3x² + x − 4 > 0', answer: 'x<-4/3 or x>1', checkMode: 'auto', correctAnswers: ['x<-4/3 or x>1', 'x>1 or x<-4/3'], explanation: 'Factorise: (3x + 4)(x − 1) > 0. Critical values: x = −4/3 or x = 1.\nSince the parabola opens upward, it is > 0 outside the roots (endpoints excluded since strict).\nSolution: x < −4/3 or x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 3x − 2 and y = x² − 2x − 2', answer: 'x=0,y=-2 or x=5,y=13', checkMode: 'auto', correctAnswers: ['x=0,y=-2 or x=5,y=13', 'x=5,y=13 or x=0,y=-2'], explanation: 'Set 3x − 2 = x² − 2x − 2, so x² − 5x = 0.\nFactorise: x(x − 5) = 0, so x = 0 or x = 5.\nWhen x = 0: y = 3(0) − 2 = −2. When x = 5: y = 3(5) − 2 = 13.\nCheck: 0² − 2(0) − 2 = −2 ✓ and 5² − 2(5) − 2 = 13 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 2 and y = x² − 3x − 4', answer: 'From the first equation substitute into the second: x + 2 = x² − 3x − 4.\nRearrange: x² − 4x − 6 = 0.\nUsing the quadratic formula: x = (4 ± √(16 + 24)) / 2 = (4 ± √40) / 2 = 2 ± √10.\nWhen x = 2 + √10: y = (2 + √10) + 2 = 4 + √10. When x = 2 − √10: y = (2 − √10) + 2 = 4 − √10.\nSolution points: (2 + √10 ; 4 + √10) and (2 − √10 ; 4 − √10).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = 4x − 3 and y = x² − x − 3', answer: 'x=0,y=-3 or x=5,y=17', checkMode: 'auto', correctAnswers: ['x=0,y=-3 or x=5,y=17', 'x=5,y=17 or x=0,y=-3'], explanation: 'Set 4x − 3 = x² − x − 3, so x² − 5x = 0.\nFactorise: x(x − 5) = 0, so x = 0 or x = 5.\nWhen x = 0: y = 4(0) − 3 = −3. When x = 5: y = 4(5) − 3 = 17.\nCheck: 0² − 0 − 3 = −3 ✓ and 5² − 5 − 3 = 17 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Lerato solves √(x − 3) = −4 and says there is no solution. Is she correct? Explain.', answer: 'Yes, Lerato is correct. The square root symbol always denotes the non-negative square root, so √(x − 3) can never equal a negative number such as −4. Squaring both sides would give x − 3 = 16, so x = 19, but substituting back gives √16 = 4, not −4, confirming this is an extraneous solution and the equation truly has no solution.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says the equation 2^(2x) − 6 · 2^x + 8 = 0 cannot be solved because it is not a normal quadratic. Show his method to solve it and find x.', answer: 'Let y = 2^x, so 2^(2x) = y². The equation becomes y² − 6y + 8 = 0.\nFactorise: (y − 2)(y − 4) = 0, so y = 2 or y = 4.\nSubstitute back: 2^x = 2 → x = 1. &nbsp; 2^x = 4 → x = 2.\nSolution: x = 1 or x = 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle solves x² − 2x − 15 ≤ 0 and writes her final answer as x ≤ 5. Explain what is wrong with her answer and give the correct solution.', answer: 'Amahle is missing part of the solution — a quadratic inequality of this type is bounded between the two critical values, not just below the larger one. The critical values are x = 5 and x = −3 (from (x − 5)(x + 3) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots. The correct solution is −3 ≤ x ≤ 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered the quadratic formula, surd equations, exponential equations, quadratic inequalities, and simultaneous systems.' },
        { minScore: 14, message: 'Great work! Review any missed questions on surd equations or quadratic inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on the quadratic formula and simultaneous systems, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + x − 6 = 0', answer: 'x=2 or x=-3', checkMode: 'auto', correctAnswers: ['x=2 or x=-3', 'x=-3 or x=2', '2 or -3', '-3 or 2'], explanation: 'a=1, b=1, c=−6. Discriminant = 1 − 4(1)(−6) = 1 + 24 = 25.\nx = (−1 ± 5) / 2.\nx = 2 or x = −3 ✓' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 4x² − 3x − 1 = 0', answer: 'x=1 or x=-1/4', checkMode: 'auto', correctAnswers: ['x=1 or x=-1/4', 'x=-1/4 or x=1', 'x=1 or x=-0.25', 'x=-0.25 or x=1'], explanation: 'a=4, b=−3, c=−1. Discriminant = 9 − 4(4)(−1) = 9 + 16 = 25.\nx = (3 ± 5) / 8.\nx = 1 or x = −1/4 ✓' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 2x² + 5x − 3 = 0', answer: 'x=1/2 or x=-3', checkMode: 'auto', correctAnswers: ['x=1/2 or x=-3', 'x=-3 or x=1/2', 'x=0.5 or x=-3', 'x=-3 or x=0.5'], explanation: 'a=2, b=5, c=−3. Discriminant = 25 − 4(2)(−3) = 25 + 24 = 49.\nx = (−5 ± 7) / 4.\nx = 1/2 or x = −3 ✓' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² + 2x − 7 = 0', answer: 'x=-1+2√2 or x=-1-2√2', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 2x² − x − 6 = 0. State the discriminant before solving.', answer: 'a=2, b=−1, c=−6. Discriminant = 1 − 4(2)(−6) = 49, which is a positive perfect square, so there are two distinct rational roots.\nx = (1 ± 7) / 4.\nx = 2 or x = −3/2.', checkMode: 'self' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(x + 2) = x', answer: 'x=2', checkMode: 'auto', correctAnswer: 'x=2', correctAnswers: ['x=2', 'x = 2', '2'], explanation: 'Square both sides: x + 2 = x².\nRearrange: x² − x − 2 = 0 → (x − 2)(x + 1) = 0, so x = 2 or x = −1.\nCheck x = 2: √(2+2) = √4 = 2 = 2 ✓ valid.\nCheck x = −1: √(−1+2) = √1 = 1 ≠ −1, so x = −1 is extraneous (rejected).\nSolution: x = 2 only.' },
        { difficulty: 'Medium', question: 'Solve for x: √(6x + 7) = x, checking for extraneous roots.', answer: 'x=7', checkMode: 'auto', correctAnswer: 'x=7', correctAnswers: ['x=7', 'x = 7', '7'], explanation: 'Square both sides: 6x + 7 = x².\nRearrange: x² − 6x − 7 = 0 → (x − 7)(x + 1) = 0, so x = 7 or x = −1.\nCheck x = 7: √(6(7)+7) = √49 = 7 = 7 ✓ valid.\nCheck x = −1: √(6(−1)+7) = √1 = 1 ≠ −1, so x = −1 is extraneous (rejected).\nSolution: x = 7 only.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 8) = x − 4, checking carefully for extraneous roots.', answer: 'Square both sides: x + 8 = (x − 4)² = x² − 8x + 16.\nRearrange: x² − 9x + 8 = 0 → (x − 8)(x − 1) = 0, so x = 8 or x = 1.\nCheck x = 8: √16 = 4 and 8 − 4 = 4 ✓ valid.\nCheck x = 1: √9 = 3 but 1 − 4 = −3, and 3 ≠ −3, so x = 1 is extraneous (rejected — the square root can never equal a negative number).\nSolution: x = 8 only.', checkMode: 'self' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 5^x = 125', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Write 125 as a power of 5: 125 = 5³.\nSo 5^x = 5³, which means x = 3 ✓' },
        { difficulty: 'Medium', question: 'Solve for x: 5^(x+2) = 625', answer: 'x=2', checkMode: 'auto', correctAnswer: 'x=2', correctAnswers: ['x=2', 'x = 2', '2'], explanation: 'Write 625 as a power of 5: 625 = 5⁴.\nSo 5^(x+2) = 5⁴, which means x + 2 = 4, so x = 2 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2^(2x) − 6 · 2^x + 8 = 0', answer: 'x=1 or x=2', checkMode: 'auto', correctAnswers: ['x=1 or x=2', 'x=2 or x=1'], explanation: 'Let y = 2^x, so 2^(2x) = y². The equation becomes y² − 6y + 8 = 0.\nFactorise: (y − 2)(y − 4) = 0, so y = 2 or y = 4.\nSubstitute back: 2^x = 2 → x = 1. &nbsp; 2^x = 4 → x = 2.\nSolution: x = 1 or x = 2 ✓' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 49 ≥ 0', answer: 'x≤-7 or x≥7', checkMode: 'auto', correctAnswers: ['x≤-7 or x≥7', 'x<=-7 or x>=7', 'x≥7 or x≤-7'], explanation: 'Critical values: x² − 49 = 0 → x = −7 or x = 7.\nSince the expression is an upward parabola, it is ≥ 0 outside the roots (endpoints included since ≥).\nSolution: x ≤ −7 or x ≥ 7.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − 3x − 10 ≤ 0', answer: '-2≤x≤5', checkMode: 'auto', correctAnswer: '-2≤x≤5', correctAnswers: ['-2≤x≤5', '-2 <= x <= 5', '[-2,5]'], explanation: 'Critical values: (x − 5)(x + 2) = 0 → x = 5 or x = −2.\nSince the parabola opens upward, it is ≤ 0 between the roots (endpoints included since ≤).\nSolution: −2 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Solve for x: 2x² + 3x − 5 > 0', answer: 'x<-5/2 or x>1', checkMode: 'auto', correctAnswers: ['x<-5/2 or x>1', 'x>1 or x<-5/2'], explanation: 'Factorise: (2x + 5)(x − 1) > 0. Critical values: x = −5/2 or x = 1.\nSince the parabola opens upward, it is > 0 outside the roots (endpoints excluded since strict).\nSolution: x < −5/2 or x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 4x − 5 and y = x² − x − 5', answer: 'x=0,y=-5 or x=5,y=15', checkMode: 'auto', correctAnswers: ['x=0,y=-5 or x=5,y=15', 'x=5,y=15 or x=0,y=-5'], explanation: 'Set 4x − 5 = x² − x − 5, so x² − 5x = 0.\nFactorise: x(x − 5) = 0, so x = 0 or x = 5.\nWhen x = 0: y = 4(0) − 5 = −5. When x = 5: y = 4(5) − 5 = 15.\nCheck: 0² − 0 − 5 = −5 ✓ and 5² − 5 − 5 = 15 ✓' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 4 and y = x² − 2x − 3', answer: 'From the first equation substitute into the second: x + 4 = x² − 2x − 3.\nRearrange: x² − 3x − 7 = 0.\nUsing the quadratic formula: x = (3 ± √(9 + 28)) / 2 = (3 ± √37) / 2.\nWhen x = (3 + √37)/2: y = (3 + √37)/2 + 4 = (11 + √37)/2. When x = (3 − √37)/2: y = (3 − √37)/2 + 4 = (11 − √37)/2.\nSolution points: ((3 + √37)/2 ; (11 + √37)/2) and ((3 − √37)/2 ; (11 − √37)/2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = x − 5 and y = x² − 6x + 1', answer: 'x=6,y=1 or x=1,y=-4', checkMode: 'auto', correctAnswers: ['x=6,y=1 or x=1,y=-4', 'x=1,y=-4 or x=6,y=1'], explanation: 'Set x − 5 = x² − 6x + 1, so x² − 7x + 6 = 0.\nFactorise: (x − 6)(x − 1) = 0, so x = 6 or x = 1.\nWhen x = 6: y = 6 − 5 = 1. When x = 1: y = 1 − 5 = −4.\nCheck: 6² − 6(6) + 1 = 1 ✓ and 1² − 6(1) + 1 = −4 ✓' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Sipho solves √(x − 5) = −2 and says there is no solution. Is he correct? Explain.', answer: 'Yes, Sipho is correct. The square root symbol always denotes the non-negative square root, so √(x − 5) can never equal a negative number such as −2. Squaring both sides would give x − 5 = 4, so x = 9, but substituting back gives √4 = 2, not −2, confirming this is an extraneous solution and the equation truly has no solution.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says the equation 3^(2x) − 4 · 3^x + 3 = 0 cannot be solved because it is not a normal quadratic. Show her method to solve it and find x.', answer: 'Let y = 3^x, so 3^(2x) = y². The equation becomes y² − 4y + 3 = 0.\nFactorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3.\nSubstitute back: 3^x = 1 → x = 0. &nbsp; 3^x = 3 → x = 1.\nSolution: x = 0 or x = 1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle solves x² − 3x − 10 ≤ 0 and writes her final answer as x ≤ 5. Explain what is wrong with her answer and give the correct solution.', answer: 'Amahle is missing part of the solution — a quadratic inequality of this type is bounded between the two critical values, not just below the larger one. The critical values are x = 5 and x = −2 (from (x − 5)(x + 2) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots. The correct solution is −2 ≤ x ≤ 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered the quadratic formula, surd equations, exponential equations, quadratic inequalities, and simultaneous systems.' },
        { minScore: 14, message: 'Great work! Review any missed questions on surd equations or quadratic inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on the quadratic formula and simultaneous systems, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
