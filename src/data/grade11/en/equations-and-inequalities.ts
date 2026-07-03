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
}
