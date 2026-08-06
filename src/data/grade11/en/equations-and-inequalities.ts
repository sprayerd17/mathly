import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────
// Section 1: factorisation method  → blue   (#2563eb)
//            completing the square → orange (#ea580c)
//            quadratic formula     → green  (#16a34a)
// Section 2: isolate the surd      → blue
//            square both sides     → orange
//            check for extraneous roots → green
// Section 3: same base             → blue
//            quadratic in form     → orange
//            substitution          → green
// Section 4: critical values       → blue
//            sign of each interval → orange
//            final solution        → green
// Section 5: linear equation       → blue
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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to solve quadratic equations using factorisation, completing the square, and the quadratic formula with a worked example for each method',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING SURD (RADICAL) EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surd-equations',
      title: 'Solving Surd (Radical) Equations',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>surd equation</strong> (or radical equation) contains the variable under a square root sign, for example √(2x + 3) = x. To solve one: ${bl('isolate the surd')} on one side of the equation, then ${or('square both sides')} to remove the root, and solve the equation that remains. Because squaring both sides can create extra solutions that do not actually satisfy the original equation, you must always substitute each answer back into the ${gr('original equation to check for extraneous roots')} and reject any that fail.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('isolate the surd')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('square both sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('check for extraneous roots')}</span>` +
        `</div>` +

        // ── Steps ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for solving surd equations</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Isolate the surd')} — rearrange the equation so the square root term is alone on one side.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Square both sides')} of the equation to remove the square root sign — remember to square the entire other side, not just each term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Solve the resulting equation</strong> — this is usually a quadratic, so use factorisation or the quadratic formula.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Check every solution in the ORIGINAL equation')} — substitute each value back before squaring. Reject any value that does not satisfy the original equation; these are called extraneous roots.</p>` +
        `</div>` +

        `</div>` +

        // ── Why extraneous roots occur ─────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Why extraneous roots occur</p>` +
        `<p style="margin:0;color:#7c2d12;">The symbol √ always denotes the <strong>non-negative</strong> square root, so √(anything) can never equal a negative number. Squaring both sides of an equation loses this information — it treats a possible negative result as though it were positive. This is why squaring can introduce a solution that satisfies the squared equation but not the original surd equation, and why checking is not optional.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick check before you even square</p>` +
        `<p style="margin:0;color:#1e3a8a;">If, after you ${bl('isolate the surd')}, the other side is a value that must be negative (for example √(x + 3) = −5), you can immediately conclude there is no solution — a square root can never equal a negative number, so there is no need to ${or('square both sides')} at all.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: √(5x + 14) = x',
          answer: `${gr('x = 7')} (x = −2 is rejected)`,
          steps: [
            `${bl('The surd is already isolated:')} √(5x + 14) = x`,
            `${or('Square both sides:')} 5x + 14 = x²`,
            `Rearrange into standard form and solve: x² − 5x − 14 = 0 → (x − 7)(x + 2) = 0, so x = 7 or x = −2`,
            `${gr('Check both solutions in the original equation:')}<br>x = 7: √(5(7) + 14) = √49 = 7 = 7 ✓ valid<br>x = −2: √(5(−2) + 14) = √4 = 2 ≠ −2 ✗ extraneous — rejected`,
            `<strong>Solution:</strong> ${gr('x = 7')} only`,
          ],
        },
        {
          question: 'Solve for x: √(2x + 8) = x, checking for extraneous roots.',
          answer: `${gr('x = 4')} (x = −2 is rejected)`,
          steps: [
            `${bl('The surd is already isolated:')} √(2x + 8) = x`,
            `${or('Square both sides:')} 2x + 8 = x²`,
            `Rearrange into standard form and solve: x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0, so x = 4 or x = −2`,
            `${gr('Check both solutions in the original equation:')}<br>x = 4: √(2(4) + 8) = √16 = 4 = 4 ✓ valid<br>x = −2: √(2(−2) + 8) = √4 = 2 ≠ −2 ✗ extraneous — rejected`,
            `<strong>Solution:</strong> ${gr('x = 4')} only`,
          ],
        },
        {
          question: 'Solve for x: √(x + 3) = x − 3, checking carefully for extraneous roots.',
          answer: `${gr('x = 6')} (x = 1 is rejected)`,
          steps: [
            `${bl('The surd is already isolated:')} √(x + 3) = x − 3`,
            `${or('Square both sides:')} x + 3 = (x − 3)² = x² − 6x + 9`,
            `Rearrange into standard form and solve: x² − 7x + 6 = 0 → (x − 6)(x − 1) = 0, so x = 6 or x = 1`,
            `${gr('Check both solutions in the original equation:')}<br>x = 6: √(6 + 3) = √9 = 3, and 6 − 3 = 3 ✓ valid<br>x = 1: √(1 + 3) = √4 = 2, but 1 − 3 = −2, and 2 ≠ −2 ✗ extraneous — rejected (a square root can never equal a negative number)`,
            `<strong>Solution:</strong> ${gr('x = 6')} only`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to solve surd equations by isolating the surd, squaring both sides, and checking every solution in the original equation for extraneous roots',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING EXPONENTIAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-equations',
      title: 'Solving Exponential Equations',
      icon: 'ˣ',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>exponential equation</strong> is an equation in which the variable appears in the exponent, for example 2^x = 8. The most common strategy is to ${bl('write both sides with the same base')}, since if b^m = b^n (with b &gt; 0 and b ≠ 1) then the exponents must be equal: m = n. Some exponential equations are ${or('quadratic in form')} — they cannot be reduced to a single power on each side, but a ${gr('substitution')} such as y = b^x turns them into an ordinary quadratic equation.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('same base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quadratic in form')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('substitution')}</span>` +
        `</div>` +

        // ── Law box ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#2563eb;margin:0;letter-spacing:0.02em;">If b^m = b^n then m = n</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">(where b &gt; 0 and b ≠ 1) — once both sides share the same base, simply equate the exponents.</p>` +
        `</div>` +

        // ── Two method cards ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two solving strategies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Same Base Method</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rewrite both sides as powers of the same base, then equate the exponents and solve the resulting equation for x.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Use when:</strong> both sides can be expressed as powers of the same number, e.g. 2^x = 32 = 2⁵.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Substitution (Quadratic Form)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Let y = b^x to turn the equation into a quadratic in y. Solve for y, then substitute back to solve for x.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Use when:</strong> the equation contains b^(2x) and b^x terms, e.g. 2^(2x) − 3·2^x + 2 = 0.</p>` +
        `</div>` +

        `</div>` +

        // ── Powers reference ────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Powers worth knowing</p>` +
        `<p style="margin:0;color:#7c2d12;">2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64 &nbsp;|&nbsp; 3² = 9, 3³ = 27, 3⁴ = 81 &nbsp;|&nbsp; 5² = 25, 5³ = 125, 5⁴ = 625. Recognising these quickly makes the ${bl('same base method')} much faster.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spotting the quadratic form</p>` +
        `<p style="margin:0;color:#1e3a8a;">If an equation has both b^(2x) and b^x, remember that b^(2x) = (b^x)². Use the ${gr('substitution')} y = b^x to rewrite the equation as an ordinary ${or('quadratic in y')}, solve it (by factorising or the quadratic formula), then convert each y-value back using b^x = y to find x.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: 2^x = 16',
          answer: `${bl('x = 4')}`,
          steps: [
            `Write 16 as a power of 2: 16 = 2⁴.`,
            `${bl('Same base:')} 2^x = 2⁴`,
            `Since the bases are equal, equate the exponents: x = 4`,
            `<strong>Solution:</strong> ${bl('x = 4')}`,
          ],
        },
        {
          question: 'Solve for x: 3^(x−2) = 27',
          answer: `${bl('x = 5')}`,
          steps: [
            `Write 27 as a power of 3: 27 = 3³.`,
            `${bl('Same base:')} 3^(x−2) = 3³`,
            `Since the bases are equal, equate the exponents: x − 2 = 3`,
            `<strong>Solution:</strong> x = 3 + 2 = ${bl('5')}`,
          ],
        },
        {
          question: 'Solve for x: 2^(2x) − 3 · 2^x + 2 = 0',
          answer: `${gr('x = 0')} or ${gr('x = 1')}`,
          steps: [
            `Notice that 2^(2x) = (2^x)². ${gr('Let y = 2^x,')} so the equation becomes a quadratic in y: y² − 3y + 2 = 0`,
            `${or('Solve the quadratic:')} Factorise: (y − 1)(y − 2) = 0, so y = 1 or y = 2`,
            `Substitute back using 2^x = y:<br>2^x = 1 = 2⁰ → x = 0<br>2^x = 2 = 2¹ → x = 1`,
            `<strong>Solutions:</strong> ${gr('x = 0')} or ${gr('x = 1')}`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to solve exponential equations by writing both sides with the same base, and by substitution when the equation is quadratic in form',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — QUADRATIC AND RATIONAL INEQUALITIES
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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to solve quadratic and rational inequalities using critical values and sign analysis on a number line',

      diagramPlaceholder:
        'Number line diagram showing critical values marked in blue, sign of the expression in each interval in orange, and the final solution intervals highlighted in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="150" y="14" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">x² − 5x + 6 &gt; 0</text>` +
        `<text x="86" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<text x="166" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">−</text>` +
        `<text x="227" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<polygon points="15,40 25,35 25,45" fill="#16a34a"/>` +
        `<line x1="25" y1="40" x2="148" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<line x1="184" y1="40" x2="271" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<polygon points="281,40 271,35 271,45" fill="#16a34a"/>` +
        `<polygon points="15,55 25,50 25,60" fill="#0f1f3d"/>` +
        `<line x1="25" y1="55" x2="271" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="281,55 271,50 271,60" fill="#0f1f3d"/>` +
        `<line x1="40" y1="50" x2="40" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="76" y1="50" x2="76" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="112" y1="50" x2="112" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="220" y1="50" x2="220" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="256" y1="50" x2="256" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<circle cx="148" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="184" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="40" y="75" text-anchor="middle" font-size="11" fill="#6b7280">−1</text>` +
        `<text x="76" y="75" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="112" y="75" text-anchor="middle" font-size="11" fill="#6b7280">1</text>` +
        `<text x="148" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="184" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="220" y="75" text-anchor="middle" font-size="11" fill="#6b7280">4</text>` +
        `<text x="256" y="75" text-anchor="middle" font-size="11" fill="#6b7280">5</text>` +
        `<text x="150" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">Solution: x &lt; 2 or x &gt; 3</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING SYSTEMS WITH ONE LINEAR AND ONE QUADRATIC EQUATION
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

      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to solve a system of one linear and one quadratic equation simultaneously using the substitution method',

      diagramPlaceholder:
        'Graph showing a straight line in blue intersecting a parabola in orange at two points, with the intersection coordinates highlighted in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="5" y1="150" x2="230" y2="150" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="238,150 228,145 228,155" fill="#0f1f3d"/>` +
        `<line x1="70" y1="175" x2="70" y2="20" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="70,10 65,20 75,20" fill="#0f1f3d"/>` +
        `<text x="230" y="163" text-anchor="middle" font-size="10" fill="#0f1f3d">x</text>` +
        `<text x="76" y="16" font-size="10" fill="#0f1f3d">y</text>` +
        `<polyline points="10,121 25,134 40,143 55,148 70,150 85,148 100,143 115,134 130,121 145,105 160,85" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<line x1="0" y1="137" x2="175" y2="106" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="24" cy="133" r="4" fill="#16a34a"/>` +
        `<circle cx="138" cy="113" r="4" fill="#16a34a"/>` +
        `<text x="12" y="126" font-size="10" font-weight="700" fill="#16a34a">A</text>` +
        `<text x="144" y="106" font-size="10" font-weight="700" fill="#16a34a">B</text>` +
        `<text x="163" y="78" font-size="9" font-weight="700" fill="#ea580c">y=ax²+bx+c</text>` +
        `<text x="178" y="103" font-size="9" font-weight="700" fill="#2563eb">y=mx+c</text>` +
        `<text x="120" y="184" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">2 points of intersection = 2 solutions</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x² − 9x + 20 = 0 by factorisation.',
      checkMode: 'auto',
      options: ['x = 4 or x = 5', 'x = −4 or x = −5', 'x = 2 or x = 10', 'x = −2 or x = −10'],
      correctIndex: 0,
      explanation: 'Find two numbers that multiply to 20 and add to −9: these are −4 and −5, so (x − 4)(x − 5) = 0, giving x = 4 or x = 5. Flipping the signs when solving each factor gives x = −4 or x = −5; using the factor pair 2 × 10 = 20 satisfies the product but not the sum condition (2 + 10 = 12, not −9).',
    },

    // ── Q2 Medium — completing the square ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² + 4x − 1 = 0 by completing the square.',
      checkMode: 'auto',
      options: ['x = −1 or x = −3', 'x = −2 + √5 or x = −2 − √5', 'x = 2 + √5 or x = 2 − √5', 'x = −4 + √5 or x = −4 − √5'],
      correctIndex: 1,
      explanation: 'x² + 4x = 1. Half of 4 is 2, so (x + 2)² − 4 = 1, giving (x + 2)² = 5, so x = −2 ± √5. Forgetting to add the 4 back before taking square roots gives x = −1 or x = −3; using the wrong sign inside the bracket gives x = 2 ± √5; using b itself instead of half of b gives x = −4 ± √5.',
    },

    // ── Q3 Hard — quadratic formula with full discriminant ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve 3x² + 2x − 5 = 0 using the quadratic formula, showing the full discriminant calculation.',
      checkMode: 'auto',
      options: ['x = 5/3 or x = −1', 'x = 1 or x = −5/3', 'No real solutions — the discriminant is negative', 'x = 2 or x = −10/3'],
      correctIndex: 1,
      explanation: 'a = 3, b = 2, c = −5. Discriminant = b² − 4ac = 4 − 4(3)(−5) = 4 + 60 = 64. x = (−2 ± 8) / 6, giving x = 1 or x = −5/3. Using +b instead of −b in the numerator gives x = 5/3 or x = −1; incorrectly computing the discriminant as b² + 4ac gives a negative value; dividing by a instead of 2a gives x = 2 or x = −10/3.',
    },

    // ── Q4 Easy — quadratic inequality ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve x² − 4 > 0.',
      checkMode: 'auto',
      options: ['−2 < x < 2', 'x > 2', 'x ≤ −2 or x ≥ 2', 'x < −2 or x > 2'],
      correctIndex: 3,
      explanation: 'Critical values: x² − 4 = 0 → x = −2 or x = 2. Testing intervals shows the expression is positive outside the roots. Since the inequality is strict (>), endpoints are excluded. Solution: x < −2 or x > 2. Picking the negative/inside interval, missing the left-hand branch, or wrongly including the endpoints are common mistakes.',
    },

    // ── Q5 Medium — quadratic inequality ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² − 7x + 10 ≤ 0.',
      checkMode: 'auto',
      options: ['2 ≤ x ≤ 5', 'x ≤ 2 or x ≥ 5', '2 < x < 5', '−5 ≤ x ≤ −2'],
      correctIndex: 0,
      explanation: 'Critical values: (x − 2)(x − 5) = 0 → x = 2 or x = 5. Since the parabola opens upward, the expression is ≤ 0 between the roots, with endpoints included because the inequality is ≤. Solution: 2 ≤ x ≤ 5. Choosing the outside interval, forgetting the endpoints, or using the wrong sign on the critical values are common mistakes.',
    },

    // ── Q6 Hard — incomplete inequality answer ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho solves x² − 16 < 0 and gets x < 4. Which statement correctly evaluates his answer?',
      checkMode: 'auto',
      options: [
        'He is correct — x < 4 is the full solution.',
        'He is incorrect — the correct solution is −4 < x < 4, since x² − 16 < 0 only holds between the roots.',
        'He is incorrect — the correct solution is x < −4 or x > 4.',
        'He is incorrect — the correct solution is x ≤ 4.',
      ],
      correctIndex: 1,
      explanation: 'The critical values are x = −4 and x = 4. Since the parabola opens upward, x² − 16 < 0 only between the roots (strict, since <). Sipho found one boundary but forgot the lower bound, so the full solution is −4 < x < 4, not just x < 4.',
    },

    // ── Q7 Medium — rational inequality ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve (x − 3) / (x + 2) < 0.',
      checkMode: 'auto',
      options: ['x < −2 or x > 3', '−2 ≤ x < 3', '−2 < x < 3', '−3 < x < 2'],
      correctIndex: 2,
      explanation: 'Critical values: numerator zero at x = 3; denominator zero at x = −2 (always excluded). Testing intervals shows the expression is negative between the critical values. Solution: −2 < x < 3. Picking the outside intervals, wrongly including x = −2 (where the expression is undefined), or swapping the two critical values are common mistakes.',
    },

    // ── Q8 Hard — excluded value in rational inequality ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato solves (x + 1) / (x − 4) ≥ 0 and includes x = 4 in her final answer. Which statement correctly evaluates this?',
      checkMode: 'auto',
      options: [
        'Correct — since the inequality includes "or equal to", x = 4 must be included.',
        'Incorrect — x = −1 must also be excluded, not just x = 4.',
        'Correct, but only if x is restricted to positive values.',
        'Incorrect — x = 4 makes the denominator zero, so the expression is undefined there and must always be excluded, regardless of the inequality sign.',
      ],
      correctIndex: 3,
      explanation: 'A rational expression is undefined wherever its denominator equals zero. Since x = 4 makes (x − 4) = 0, it must be excluded from the solution set even though the inequality uses ≥. Only x = −1 (where the numerator is zero) may be included, since the expression equals exactly 0 there.',
    },

    // ── Q9 Hard — quadratic inequality with sign analysis ────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² − 2x − 8 ≥ 0.',
      checkMode: 'auto',
      options: ['x ≤ −2 or x ≥ 4', '−2 ≤ x ≤ 4', 'x < −2 or x > 4', 'x ≤ 2 or x ≥ −4'],
      correctIndex: 0,
      explanation: 'Solve x² − 2x − 8 = 0: (x − 4)(x + 2) = 0, so x = 4 or x = −2. Since the parabola opens upward, the expression is ≥ 0 outside the roots, with endpoints included because the inequality is ≥. Solution: x ≤ −2 or x ≥ 4. Choosing the interval between the roots, wrongly excluding the endpoints, or swapping the critical-value signs are common mistakes.',
    },

    // ── Q10 Medium — simultaneous linear and quadratic ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously: y = x + 2 and y = x² − 4.',
      checkMode: 'auto',
      options: ['(2, 4) and (−3, −1)', '(3, 5) and (−2, 0)', '(3, 3) and (−2, −2)', '(3, 5) and (−2, −8)'],
      correctIndex: 1,
      explanation: 'Substitute y = x + 2 into y = x² − 4: x + 2 = x² − 4, so x² − x − 6 = 0. Factorise: (x − 3)(x + 2) = 0, giving x = 3 or x = −2. Corresponding y-values from y = x + 2: y = 5 or y = 0. Solutions: (3, 5) and (−2, 0). A sign error forming the quadratic can give x² + x − 6 = 0 instead; forgetting to add 2 when finding y gives (3, 3) and (−2, −2); and mis-squaring (−2)² as −4 gives (−2, −8).',
    },

    // ── Q11 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo solves y = 2x − 1 and y = x² − 3x + 2 simultaneously. Which pair of solution points is correct?',
      checkMode: 'auto',
      options: [
        '((−5 + √13)/2 ; −6 + √13) and ((−5 − √13)/2 ; −6 − √13)',
        '((5 + √37)/2 ; 4 + √37) and ((5 − √37)/2 ; 4 − √37)',
        '((5 + √13)/2 ; 4 + √13) and ((5 − √13)/2 ; 4 − √13)',
        '((5 + √13)/2 ; (3 + √13)/2) and ((5 − √13)/2 ; (3 − √13)/2)',
      ],
      correctIndex: 2,
      explanation: 'Substitute: 2x − 1 = x² − 3x + 2, giving x² − 5x + 3 = 0. Using the quadratic formula: x = (5 ± √13)/2. Corresponding y = 2x − 1 = 4 ± √13. Solution points: ((5+√13)/2 ; 4+√13) and ((5−√13)/2 ; 4−√13). A sign error while rearranging can give x² + 5x + 3 = 0 instead; miscalculating the discriminant as b² + 4ac gives √37 instead of √13; forgetting to double x when substituting back into y = 2x − 1 halves the y-values.',
    },

    // ── Q12 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously: y = −x + 5 and y = x² − 2x − 3.',
      checkMode: 'auto',
      options: [
        '((−1 + √33)/2 ; (11 − √33)/2) and ((−1 − √33)/2 ; (11 + √33)/2)',
        'No real solutions — the discriminant is negative',
        '((1 + √33)/2 ; (11 + √33)/2) and ((1 − √33)/2 ; (11 − √33)/2)',
        '((1 + √33)/2 ; (9 − √33)/2) and ((1 − √33)/2 ; (9 + √33)/2)',
      ],
      correctIndex: 3,
      explanation: 'Substitute −x + 5 = x² − 2x − 3, giving x² − x − 8 = 0. Using the quadratic formula: x = (1 ± √33)/2. Corresponding y = −x + 5 gives the paired values: ((1+√33)/2 ; (9−√33)/2) and ((1−√33)/2 ; (9+√33)/2). A sign error while rearranging can produce x² + x − 8 = 0 instead; using the wrong sign for c makes the discriminant negative with no real solution; and forgetting the negative sign in y = −x + 5 shifts every y-value.',
    },

    // ── Q13 Medium — quadratic formula ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x² + x − 12 = 0 using the quadratic formula.',
      checkMode: 'auto',
      options: ['x = 3 or x = −4', 'x = 4 or x = −3', 'No real solutions — the discriminant is negative', 'x = 6 or x = −8'],
      correctIndex: 0,
      explanation: 'a = 1, b = 1, c = −12. Discriminant = 1 + 48 = 49. x = (−1 ± 7) / 2, giving x = 3 or x = −4. A sign error using +b instead of −b gives x = 4 or x = −3; miscalculating the discriminant as b² + 4ac gives a negative value; forgetting to divide by 2a (dividing by 1 instead) doubles both roots.',
    },

    // ── Q14 Hard — discriminant and nature of roots ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says every quadratic equation has two real solutions. Which statement correctly evaluates her claim?',
      checkMode: 'auto',
      options: [
        'Yes — the quadratic formula always produces two values of x.',
        'No — the number of real solutions depends on the discriminant: negative gives none, zero gives one repeated root, and only a positive discriminant gives two distinct real roots.',
        'No — every quadratic has exactly one real solution, found using the vertex.',
        'No — quadratics with a negative constant term c always have two real solutions, but a positive c never does.',
      ],
      correctIndex: 1,
      explanation: 'The discriminant b² − 4ac determines the number of real roots: negative means no real solutions, zero means one repeated real solution, and positive means two distinct real solutions. Amahle is incorrect to assume there are always two.',
    },

    // ── Q15 Hard — inequality with repeated root ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² − 6x + 9 ≤ 0, explaining what the discriminant tells us before solving.',
      checkMode: 'auto',
      options: [
        'No solution — a zero discriminant means the inequality can never be satisfied.',
        'All real x, since (x − 3)² is always ≥ 0.',
        'x = 3 only, since (x − 3)² ≥ 0 always, and it only equals 0 (satisfying ≤ 0) when x = 3.',
        '3 ≤ x ≤ 9',
      ],
      correctIndex: 2,
      explanation: 'Discriminant = 36 − 36 = 0, so there is one repeated root at x = 3, meaning x² − 6x + 9 = (x − 3)². Since a perfect square is always ≥ 0, the inequality (x − 3)² ≤ 0 is satisfied only where it equals exactly 0 — at x = 3.',
    },

    // ── Q16 Hard — rational inequality requiring rearrangement ───────────────
    {
      difficulty: 'Hard',
      question: 'Solve (2x − 1) / (x + 3) ≤ 2, being careful with the inequality direction when multiplying.',
      checkMode: 'auto',
      options: [
        'All real x except x = −3 (found by multiplying both sides by (x + 3) directly)',
        'x < −3',
        'x ≥ −3',
        'x > −3',
      ],
      correctIndex: 3,
      explanation: 'Rearranging first avoids the danger of multiplying by an expression of unknown sign: (2x − 1)/(x + 3) − 2 ≤ 0 combines to −7/(x + 3) ≤ 0. Since the numerator −7 is always negative, the fraction is ≤ 0 exactly when the denominator is positive, so x + 3 > 0, giving x > −3. Multiplying both sides by (x + 3) directly, without knowing its sign, is invalid and produces a false "always true" result.',
    },

    // ── Q17 Hard — simultaneous linear and quadratic ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously: y = 3x − 4 and y = 2x² − 6x − 9, finding both intersection points.',
      checkMode: 'auto',
      options: [
        'x = 5, y = 11 or x = −1/2, y = −5.5',
        'x = 1/2, y = −2.5 or x = −5, y = −19',
        'x = 5, y = 11 or x = 1/2, y = −2.5',
        'x = 5, y = 11 or x = −1/2, y = −4.5',
      ],
      correctIndex: 0,
      explanation: 'Substitute y = 3x − 4 into y = 2x² − 6x − 9: 3x − 4 = 2x² − 6x − 9, giving 2x² − 9x − 5 = 0. Factorise: (2x + 1)(x − 5) = 0, so x = 5 or x = −1/2. Corresponding y-values from y = 3x − 4: y = 11 or y = −5.5. A sign error while rearranging can flip the middle term to give 2x² + 9x − 5 = 0 instead; dropping the negative sign on the fractional root, or miscalculating 3(−1/2) − 4, are other common slips.',
    },

    // ── Q18 Hard — nature of inequality solutions ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says solving a quadratic inequality always gives a single continuous interval as the answer. Which statement is correct?',
      checkMode: 'auto',
      options: [
        'Yes — quadratic inequalities always produce one continuous interval, such as a < x < b.',
        'No — for example, x² − 4 > 0 gives two separate intervals, x < −2 or x > 2, rather than one continuous interval. Whether the solution is one interval or two depends on the direction of the parabola and the inequality sign.',
        'No — quadratic inequalities always produce two separate intervals, never one.',
        'Yes, but only when the coefficient of x² is negative.',
      ],
      correctIndex: 1,
      explanation: 'Whether a quadratic inequality gives one interval or two separate intervals depends on whether the inequality asks for the region between the roots (one interval, e.g. x² − 4 < 0 gives −2 < x < 2) or outside the roots (two intervals, e.g. x² − 4 > 0 gives x < −2 or x > 2). Sipho is wrong to claim it is always a single interval.',
    },

    // ── Q19 Hard — boundary points of inequality ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve x² + 3x − 10 = 0 to find the critical values, then give the complete solution set of x² + 3x − 10 ≤ 0.',
      checkMode: 'auto',
      options: ['x ≤ −5 or x ≥ 2', '−5 < x < 2', '−5 ≤ x ≤ 2', '2 ≤ x ≤ 5'],
      correctIndex: 2,
      explanation: 'Factorise: (x + 5)(x − 2) = 0, so the critical values are x = −5 and x = 2. Since the parabola opens upward, the expression is ≤ 0 between the roots, with the endpoints included because the inequality is ≤. Full solution: −5 ≤ x ≤ 2.',
    },

    // ── Q20 Hard — quadratic inequality in context ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'A rectangular garden has length (x + 4) and width (x − 2), with area greater than 35 m². Find the possible range of x values, given that x > 2 for the dimensions to make sense.',
      checkMode: 'auto',
      options: [
        'x < −1 − √44 or x > −1 + √44',
        'x > √43 (x ≈ 6.56 m)',
        'No real solution — so no valid range of x exists.',
        'x > −1 + √44 (x ≈ 5.63 m)',
      ],
      correctIndex: 3,
      explanation: '(x + 4)(x − 2) > 35 expands to x² + 2x − 8 > 35, so x² + 2x − 43 > 0. Using the quadratic formula: x = (−2 ± √176)/2 = −1 ± √44. Since x > 2 is required for the dimensions to make sense, the negative branch (x < −1 − √44) must be discarded as it lies outside the valid domain. Solution: x > −1 + √44 (approximately x > 5.63). Forgetting the cross term when expanding, or making a sign error in the discriminant, are common mistakes here.',
    },

    // ── Q21 Hard — problem-solving: work backwards from equal-roots condition to find k ──
    {
      difficulty: 'Hard',
      question: 'The equation x² − kx + 9 = 0 has real, equal roots. Determine the value(s) of k.',
      checkMode: 'auto',
      options: ['k = 6 or k = −6', 'k = 3 or k = −3', 'k = 6 only', 'No real value of k exists (k² = −36 has no real solution)'],
      correctIndex: 0,
      explanation: 'For real, equal roots the discriminant must be zero: b² − 4ac = 0. With a = 1, b = −k, c = 9: (−k)² − 4(1)(9) = 0, so k² − 36 = 0, giving k = 6 or k = −6. Forgetting the factor of 4 in 4ac gives k² − 9 = 0 (k = ±3 instead); forgetting the ± only gives one value; and flipping the sign of c gives an equation with no real solution.',
    },

    // ── Q22 Hard — problem-solving: synthesise systems + discriminant to find range of k ──
    {
      difficulty: 'Hard',
      question: 'For which value(s) of k will the line y = x + k not intersect the parabola y = x² + 3x + 5?',
      checkMode: 'auto',
      options: ['k > 4', 'k < 4', 'k > −4', 'k ≤ 4'],
      correctIndex: 1,
      explanation: 'Substitute the line into the parabola: x + k = x² + 3x + 5, giving x² + 2x + (5 − k) = 0. For the line and parabola not to intersect at all, this equation must have no real solutions, so the discriminant must be negative: 4 − 4(5 − k) < 0 → 4k − 16 < 0 → k < 4. A sign error while distributing the −4 can flip the inequality to k > −4; reversing the discriminant direction gives k > 4; and using ≤ instead of < incorrectly includes the tangent case (exactly one intersection point) as "no intersection."',
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
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + 2x − 8 = 0', checkMode: 'auto', options: ['x = 2 or x = −4', 'x = 4 or x = −2', 'x = 4 or x = −8', 'No real solutions — the discriminant is negative'], correctIndex: 0, explanation: 'a = 1, b = 2, c = −8. Discriminant = 4 − 4(1)(−8) = 4 + 32 = 36. x = (−2 ± 6) / 2, giving x = 2 or x = −4. Using +b instead of −b gives x = 4 or x = −2; forgetting to divide by 2a (dividing by a instead) gives x = 4 or x = −8; treating c as positive gives a negative discriminant.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 2x² + 3x − 5 = 0', checkMode: 'auto', options: ['x = 5/2 or x = −1', 'x = 1 or x = −5/2', 'No real solutions — the discriminant is negative', 'x = 2 or x = −5'], correctIndex: 1, explanation: 'a = 2, b = 3, c = −5. Discriminant = 9 + 40 = 49. x = (−3 ± 7) / 4, giving x = 1 or x = −5/2. Using +b instead of −b gives x = 5/2 or x = −1; treating c as positive gives a negative discriminant; dividing by a instead of 2a gives x = 2 or x = −5.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 3x² − 2x − 8 = 0', checkMode: 'auto', options: ['x = 4/3 or x = −2', 'No real solutions — the discriminant is negative', 'x = 2 or x = −4/3', 'x = 4 or x = −8/3'], correctIndex: 2, explanation: 'a = 3, b = −2, c = −8. Discriminant = 4 + 96 = 100. x = (2 ± 10) / 6, giving x = 2 or x = −4/3. Using the wrong sign for b gives x = 4/3 or x = −2; treating c as positive gives a negative discriminant; dividing by a instead of 2a gives x = 4 or x = −8/3.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 4x − 3 = 0', checkMode: 'auto', options: ['x = −2 + √7 or x = −2 − √7', 'x = 3 or x = 1', 'x = 4 + 2√7 or x = 4 − 2√7', 'x = 2 + √7 or x = 2 − √7'], correctIndex: 3, explanation: 'a = 1, b = −4, c = −3. Discriminant = 16 + 12 = 28. x = (4 ± √28) / 2 = (4 ± 2√7) / 2 = 2 ± √7. Using the wrong sign for b gives −2 ± √7; miscalculating the discriminant as b² + 4ac = 4 gives the clean-looking but incorrect x = 3 or x = 1; forgetting to divide the 2√7 term by 2 leaves 4 ± 2√7.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² + 4x + 1 = 0', checkMode: 'auto', options: ['x = −2 + √3 or x = −2 − √3', 'x = 2 + √3 or x = 2 − √3', 'x = −2 + √5 or x = −2 − √5', 'x = −4 + 2√3 or x = −4 − 2√3'], correctIndex: 0, explanation: 'a = 1, b = 4, c = 1. Discriminant = 16 − 4(1)(1) = 12, positive but not a perfect square, giving surd roots. x = (−4 ± √12)/2 = (−4 ± 2√3)/2 = −2 ± √3. Using the wrong sign for b gives 2 ± √3; miscalculating the discriminant as b² + 4ac = 20 gives −2 ± √5; forgetting to halve the radical term leaves −4 ± 2√3.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(2x + 3) = x', checkMode: 'auto', options: ['x = 3 or x = −1', 'x = 3', 'x = −3', 'x = −1'], correctIndex: 1, explanation: 'Square both sides: 2x + 3 = x². Rearranged: x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0, so x = 3 or x = −1. Checking: x = 3 gives √9 = 3 ✓ valid; x = −1 gives √1 = 1 ≠ −1 ✗ extraneous — rejected. Forgetting to check for extraneous roots gives both values; forgetting to square altogether (treating the equation as linear) gives x = −3.' },
        { difficulty: 'Medium', question: 'Solve for x: √(3x + 4) = x, checking for extraneous roots.', checkMode: 'auto', options: ['x = 4 or x = −1', 'x = −2', 'x = 4', 'x = −1'], correctIndex: 2, explanation: 'Square both sides: 3x + 4 = x². Rearranged: x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0, so x = 4 or x = −1. Checking: x = 4 gives √16 = 4 ✓ valid; x = −1 gives √1 = 1 ≠ −1 ✗ extraneous — rejected. Forgetting to check for extraneous roots keeps both values; forgetting to square (treating it as linear) gives x = −2; keeping only the extraneous root gives x = −1.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 7) = x − 5, checking carefully for extraneous roots.', checkMode: 'auto', options: ['x = 9 or x = 2', 'x = 2', 'No real solutions (from incorrectly expanding (x − 5)² as x² + 25)', 'x = 9'], correctIndex: 3, explanation: 'Square both sides: x + 7 = (x − 5)² = x² − 10x + 25. Rearranged: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0, so x = 9 or x = 2. Checking: x = 9 gives √16 = 4 = 9 − 5 ✓ valid; x = 2 gives √9 = 3 but 2 − 5 = −3 ✗ extraneous — rejected (a square root can never equal a negative number). Forgetting to check both roots keeps the extraneous x = 2; incorrectly expanding (x − 5)² as x² + 25 gives no real solution at all.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 2^x = 32', checkMode: 'auto', options: ['x = 5', 'x = 6', 'x = 4', 'x = 16'], correctIndex: 0, explanation: 'Write 32 as a power of 2: 32 = 2⁵. So 2^x = 2⁵, meaning x = 5. Misremembering the power of 2 (thinking 2⁶ = 32 or 2⁴ = 32) gives x = 6 or x = 4; dividing 32 by 2 instead of converting to the same base gives x = 16.' },
        { difficulty: 'Medium', question: 'Solve for x: 2^(x+1) = 64', checkMode: 'auto', options: ['x = 6', 'x = 5', 'x = 4', 'x = 7'], correctIndex: 1, explanation: 'Write 64 as a power of 2: 64 = 2⁶. So 2^(x+1) = 2⁶, meaning x + 1 = 6, so x = 5. Forgetting to subtract 1 after equating exponents gives x = 6; misremembering 64 as 2⁵ gives x = 4; adding instead of subtracting 1 gives x = 7.' },
        { difficulty: 'Hard', question: 'Solve for x: 2^(2x) − 5 · 2^x + 4 = 0', checkMode: 'auto', options: ['x = 1 (repeated root, from incorrectly factoring y² − 5y + 4 as (y − 2)²)', 'y = 1 or y = 4 (forgot to convert back to x)', 'x = 0 or x = 2', 'x = 0 only (rejecting y = 4 by mistake)'], correctIndex: 2, explanation: 'Let y = 2^x, so the equation becomes y² − 5y + 4 = 0. Factorise: (y − 1)(y − 4) = 0, so y = 1 or y = 4. Substituting back: 2^x = 1 → x = 0, and 2^x = 4 → x = 2. Misfactoring the quadratic as a perfect square gives a repeated root; forgetting the final substitution step leaves the answer in terms of y; incorrectly rejecting one of the valid y-values loses a solution.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 25 ≥ 0', checkMode: 'auto', options: ['−5 ≤ x ≤ 5', 'x < −5 or x > 5', 'x ≥ 5 only', 'x ≤ −5 or x ≥ 5'], correctIndex: 3, explanation: 'Critical values: x² − 25 = 0 → x = −5 or x = 5. Since the expression is an upward parabola, it is ≥ 0 outside the roots, with endpoints included because the inequality is ≥. Solution: x ≤ −5 or x ≥ 5. Choosing the interval between the roots, excluding the endpoints, or missing the negative branch are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − x − 12 ≤ 0', checkMode: 'auto', options: ['−3 ≤ x ≤ 4', 'x ≤ −3 or x ≥ 4', '−3 < x < 4', '−4 ≤ x ≤ 3'], correctIndex: 0, explanation: 'Critical values: (x − 4)(x + 3) = 0 → x = 4 or x = −3. Since the parabola opens upward, the expression is ≤ 0 between the roots, with endpoints included. Solution: −3 ≤ x ≤ 4. Choosing the outside interval, dropping the endpoints, or swapping the critical values are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve for x: 2x² − x − 6 > 0', checkMode: 'auto', options: ['−3/2 < x < 2', 'x < −3/2 or x > 2', 'x ≤ −3/2 or x ≥ 2', 'x < −2 or x > 3/2'], correctIndex: 1, explanation: 'Factorise: (2x + 3)(x − 2) > 0. Critical values: x = −3/2 or x = 2. Since the parabola opens upward, the expression is > 0 outside the roots, with endpoints excluded since strict. Solution: x < −3/2 or x > 2. Choosing the interval between the roots, wrongly including the endpoints, or swapping the two critical values are common mistakes.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 2x − 1 and y = x² − 4', checkMode: 'auto', options: ['(−3, −7) and (1, 1)', '(3, 6) and (−1, −2)', '(3, 5) and (−1, −3)', 'x = 3 or x = −1 (y-values not found)'], correctIndex: 2, explanation: 'Substitute y = 2x − 1 into y = x² − 4: 2x − 1 = x² − 4, giving x² − 2x − 3 = 0. Factorise: (x − 3)(x + 1) = 0, so x = 3 or x = −1. Corresponding y = 2x − 1 gives y = 5 or y = −3. A sign error while rearranging can give x² + 2x − 3 = 0 instead; forgetting to subtract 1 when finding y gives (3, 6) and (−1, −2); stopping after finding x leaves the answer incomplete.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 3 and y = x² − x − 2', checkMode: 'auto', options: ['(−1 + √6 ; 2 + √6) and (−1 − √6 ; 2 − √6)', 'No real solution — the discriminant is negative', '(1 + √6 ; 1 + √6) and (1 − √6 ; 1 − √6)', '(1 + √6 ; 4 + √6) and (1 − √6 ; 4 − √6)'], correctIndex: 3, explanation: 'Substitute: x + 3 = x² − x − 2, giving x² − 2x − 5 = 0. Using the quadratic formula: x = (2 ± √24)/2 = 1 ± √6. Corresponding y = x + 3 gives y = 4 ± √6. A sign error while rearranging can give x² + 2x − 5 = 0 instead; miscalculating the discriminant gives a false "no real solution"; forgetting to add 3 when finding y leaves y equal to x itself.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = x + 6 and y = x² + 2x', checkMode: 'auto', options: ['(3, 9) and (−2, 4)', '(−3, −3) and (2, 2)', 'x = 2, y = 8 only', '(−3, 3) and (2, 8)'], correctIndex: 3, explanation: 'Substitute y = x + 6 into y = x² + 2x: x + 6 = x² + 2x, giving x² + x − 6 = 0. Factorise: (x + 3)(x − 2) = 0, so x = −3 or x = 2. Corresponding y = x + 6 gives y = 3 or y = 8. A sign error while rearranging can give x² − x − 6 = 0 instead; forgetting to add 6 when finding y gives (−3, −3) and (2, 2); reporting only one intersection point misses that a line can cross a parabola twice.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Thabo solves √(x − 2) = −3 and says there is no solution. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['No — he is incorrect; squaring both sides gives x − 2 = 9, so x = 11 is a valid solution.', 'Yes, he is correct — the square root symbol always denotes the non-negative root, so √(x − 2) can never equal −3, meaning the equation truly has no solution.', 'No — the equation actually has two solutions, x = 11 and x = −7.', 'Yes, but only because the expression inside the root is x − 2 rather than x + 2.'], correctIndex: 1, explanation: 'The square root symbol always denotes the non-negative square root, so √(x − 2) can never equal a negative number such as −3. Squaring both sides gives x − 2 = 9, so x = 11, but substituting back gives √9 = 3, not −3 — confirming this is an extraneous solution and the equation truly has no solution. Thabo is correct.' },
        { difficulty: 'Hard', question: 'Amahle says the equation 3^(2x) − 4 · 3^x + 3 = 0 cannot be solved because it is not a normal quadratic. Which is the correct solution, found using the substitution y = 3^x?', checkMode: 'auto', options: ['x = 0 only (y = 3 mistakenly rejected)', 'No solution — 3^x can never be negative', 'x = 0 or x = 1', 'y = 1 or y = 3 (the substitution was never converted back to x)'], correctIndex: 2, explanation: 'Amahle is incorrect — the substitution y = 3^x turns the equation into an ordinary quadratic: y² − 4y + 3 = 0. Factorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3. Both are valid since 3^x is always positive. Substituting back: 3^x = 1 → x = 0, and 3^x = 3 → x = 1.' },
        { difficulty: 'Hard', question: 'Sipho solves x² − x − 12 ≤ 0 and writes his final answer as x ≤ 4. Which statement correctly evaluates his answer, and what is the correct solution?', checkMode: 'auto', options: ['Correct — x ≤ 4 is the complete solution.', 'Incorrect — the correct solution is x ≤ −3.', 'Incorrect — the correct solution is x < −3 or x > 4.', 'Incorrect — he is missing the lower bound; the critical values are x = 4 and x = −3, and since the parabola opens upward the expression is ≤ 0 only between them, so the correct solution is −3 ≤ x ≤ 4.'], correctIndex: 3, explanation: 'The critical values are x = 4 and x = −3 (from (x − 4)(x + 3) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots, not below just one of them. Sipho found one boundary but omitted the lower bound, so the correct, complete solution is −3 ≤ x ≤ 4.' },
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
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + 3x − 10 = 0', checkMode: 'auto', options: ['x = 2 or x = −5', 'x = 5 or x = −2', 'x = 4 or x = −10', 'No real solutions — the discriminant is negative'], correctIndex: 0, explanation: 'a = 1, b = 3, c = −10. Discriminant = 9 + 40 = 49. x = (−3 ± 7) / 2, giving x = 2 or x = −5. Using +b instead of −b gives x = 5 or x = −2; dividing by a instead of 2a gives x = 4 or x = −10; treating c as positive gives a negative discriminant.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 3x² + 2x − 8 = 0', checkMode: 'auto', options: ['x = 2 or x = −4/3', 'x = 4/3 or x = −2', 'No real solutions — the discriminant is negative', 'x = 8/3 or x = −4'], correctIndex: 1, explanation: 'a = 3, b = 2, c = −8. Discriminant = 4 + 96 = 100. x = (−2 ± 10) / 6, giving x = 4/3 or x = −2. Using +b instead of −b gives x = 2 or x = −4/3; treating c as positive gives a negative discriminant; dividing by a instead of 2a gives x = 8/3 or x = −4.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 2x² − x − 6 = 0', checkMode: 'auto', options: ['x = 3/2 or x = −2', 'No real solutions — the discriminant is negative', 'x = 2 or x = −3/2', 'x = 4 or x = −3'], correctIndex: 2, explanation: 'a = 2, b = −1, c = −6. Discriminant = 1 + 48 = 49. x = (1 ± 7) / 4, giving x = 2 or x = −3/2. Using the wrong sign for b gives x = 3/2 or x = −2; treating c as positive gives a negative discriminant; dividing by a instead of 2a gives x = 4 or x = −3.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 2x − 9 = 0', checkMode: 'auto', options: ['x = −1 + √10 or x = −1 − √10', 'No real solutions — the discriminant is negative', 'x = 2 + 2√10 or x = 2 − 2√10', 'x = 1 + √10 or x = 1 − √10'], correctIndex: 3, explanation: 'a = 1, b = −2, c = −9. Discriminant = 4 + 36 = 40. x = (2 ± √40)/2 = (2 ± 2√10)/2 = 1 ± √10. Using the wrong sign for b gives −1 ± √10; treating c as positive gives a negative discriminant; forgetting to halve the radical term leaves 2 ± 2√10.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 6x + 4 = 0', checkMode: 'auto', options: ['x = 3 + √5 or x = 3 − √5', 'x = −3 + √5 or x = −3 − √5', 'x = 3 + √13 or x = 3 − √13', 'x = 6 + 2√5 or x = 6 − 2√5'], correctIndex: 0, explanation: 'a = 1, b = −6, c = 4. Discriminant = 36 − 16 = 20, positive but not a perfect square, giving surd roots. x = (6 ± √20)/2 = (6 ± 2√5)/2 = 3 ± √5. Using the wrong sign for b gives −3 ± √5; miscalculating the discriminant as b² + 4ac = 52 gives 3 ± √13; forgetting to halve the radical term leaves 6 ± 2√5.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(x + 6) = x', checkMode: 'auto', options: ['x = 3 or x = −2', 'x = 3', 'No solution (from forgetting to square before solving)', 'x = −2'], correctIndex: 1, explanation: 'Square both sides: x + 6 = x². Rearranged: x² − x − 6 = 0 → (x − 3)(x + 2) = 0, so x = 3 or x = −2. Checking: x = 3 gives √9 = 3 ✓ valid; x = −2 gives √4 = 2 ≠ −2 ✗ extraneous — rejected. Forgetting to check for extraneous roots keeps both values; forgetting to square at all leads to a false "no solution."' },
        { difficulty: 'Medium', question: 'Solve for x: √(4x + 5) = x, checking for extraneous roots.', checkMode: 'auto', options: ['x = 5 or x = −1', 'x = −5/3', 'x = 5', 'x = −1'], correctIndex: 2, explanation: 'Square both sides: 4x + 5 = x². Rearranged: x² − 4x − 5 = 0 → (x − 5)(x + 1) = 0, so x = 5 or x = −1. Checking: x = 5 gives √25 = 5 ✓ valid; x = −1 gives √1 = 1 ≠ −1 ✗ extraneous — rejected. Forgetting to check for extraneous roots keeps both values; forgetting to square at all gives x = −5/3.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 6) = x − 6, checking carefully for extraneous roots.', checkMode: 'auto', options: ['x = 10 or x = 3', 'x = 3', 'No real solutions (from incorrectly expanding (x − 6)² as x² + 36)', 'x = 10'], correctIndex: 3, explanation: 'Square both sides: x + 6 = (x − 6)² = x² − 12x + 36. Rearranged: x² − 13x + 30 = 0 → (x − 10)(x − 3) = 0, so x = 10 or x = 3. Checking: x = 10 gives √16 = 4 = 10 − 6 ✓ valid; x = 3 gives √9 = 3 but 3 − 6 = −3 ✗ extraneous — rejected. Forgetting to check both roots keeps the extraneous x = 3; incorrectly expanding (x − 6)² by dropping the middle term gives no real solution at all.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 3^x = 81', checkMode: 'auto', options: ['x = 4', 'x = 3', 'x = 5', 'x = 27'], correctIndex: 0, explanation: 'Write 81 as a power of 3: 81 = 3⁴. So 3^x = 3⁴, meaning x = 4. Misremembering the power of 3 (thinking 3³ = 81 or 3⁵ = 81) gives x = 3 or x = 5; dividing 81 by 3 instead of converting to the same base gives x = 27.' },
        { difficulty: 'Medium', question: 'Solve for x: 3^(x-1) = 27', checkMode: 'auto', options: ['x = 3', 'x = 4', 'x = 5', 'x = 2'], correctIndex: 1, explanation: 'Write 27 as a power of 3: 27 = 3³. So 3^(x−1) = 3³, meaning x − 1 = 3, so x = 4. Forgetting to add 1 back after equating exponents gives x = 3; misremembering 27 as 3⁴ gives x = 5; subtracting instead of adding gives x = 2.' },
        { difficulty: 'Hard', question: 'Solve for x: 3^(2x) − 4 · 3^x + 3 = 0', checkMode: 'auto', options: ['x = 0 only (y = 3 mistakenly rejected)', 'y = 1 or y = 3 (never converted back to x)', 'x = 0 or x = 1', 'No solution — both y-values would need to be negative'], correctIndex: 2, explanation: 'Let y = 3^x, so the equation becomes y² − 4y + 3 = 0. Factorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3 — both valid since 3^x is always positive. Substituting back: 3^x = 1 → x = 0, and 3^x = 3 → x = 1. Misfactoring the quadratic, forgetting the final substitution step, or wrongly assuming a sign error in the setup are common mistakes.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 36 ≥ 0', checkMode: 'auto', options: ['−6 ≤ x ≤ 6', 'x < −6 or x > 6', 'x ≥ 6 only', 'x ≤ −6 or x ≥ 6'], correctIndex: 3, explanation: 'Critical values: x² − 36 = 0 → x = −6 or x = 6. Since the expression is an upward parabola, it is ≥ 0 outside the roots, with endpoints included. Solution: x ≤ −6 or x ≥ 6. Choosing the interval between the roots, excluding the endpoints, or missing the negative branch are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − 2x − 15 ≤ 0', checkMode: 'auto', options: ['−3 ≤ x ≤ 5', 'x ≤ −3 or x ≥ 5', '−3 < x < 5', '−5 ≤ x ≤ 3'], correctIndex: 0, explanation: 'Critical values: (x − 5)(x + 3) = 0 → x = 5 or x = −3. Since the parabola opens upward, the expression is ≤ 0 between the roots, with endpoints included. Solution: −3 ≤ x ≤ 5. Choosing the outside interval, dropping the endpoints, or swapping the critical values are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve for x: 3x² + x − 4 > 0', checkMode: 'auto', options: ['−4/3 < x < 1', 'x < −4/3 or x > 1', 'x ≤ −4/3 or x ≥ 1', 'x < −1 or x > 4/3'], correctIndex: 1, explanation: 'Factorise: (3x + 4)(x − 1) > 0. Critical values: x = −4/3 or x = 1. Since the parabola opens upward, the expression is > 0 outside the roots, with endpoints excluded. Solution: x < −4/3 or x > 1. Choosing the interval between the roots, wrongly including the endpoints, or swapping the two critical values are common mistakes.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 3x − 2 and y = x² − 2x − 2', checkMode: 'auto', options: ['(0, −2) and (−5, −17)', '(0, 0) and (5, 15)', '(0, −2) and (5, 13)', 'x = 5, y = 13 only'], correctIndex: 2, explanation: 'Substitute y = 3x − 2 into y = x² − 2x − 2: 3x − 2 = x² − 2x − 2, giving x² − 5x = 0. Factorise: x(x − 5) = 0, so x = 0 or x = 5. Corresponding y = 3x − 2 gives y = −2 or y = 13. A sign error while rearranging can give x² + 5x = 0 instead; forgetting to subtract 2 when finding y gives (0, 0) and (5, 15); reporting only one intersection point misses the second.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 2 and y = x² − 3x − 4', checkMode: 'auto', options: ['(−2 + √10 ; √10) and (−2 − √10 ; −√10)', 'No real solution — the discriminant is negative', '(2 + √10 ; 2 + √10) and (2 − √10 ; 2 − √10)', '(2 + √10 ; 4 + √10) and (2 − √10 ; 4 − √10)'], correctIndex: 3, explanation: 'Substitute: x + 2 = x² − 3x − 4, giving x² − 4x − 6 = 0. Using the quadratic formula: x = (4 ± √40)/2 = 2 ± √10. Corresponding y = x + 2 gives y = 4 ± √10. A sign error while rearranging can give x² + 4x − 6 = 0 instead; treating c as positive gives a negative discriminant; forgetting to add 2 when finding y leaves y equal to x itself.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = 4x − 3 and y = x² − x − 3', checkMode: 'auto', options: ['(0, −3) and (5, 17)', '(0, −3) and (−5, −23)', '(0, 0) and (5, 20)', 'x = 0, y = −3 only'], correctIndex: 0, explanation: 'Substitute y = 4x − 3 into y = x² − x − 3: 4x − 3 = x² − x − 3, giving x² − 5x = 0. Factorise: x(x − 5) = 0, so x = 0 or x = 5. Corresponding y = 4x − 3 gives y = −3 or y = 17. A sign error while rearranging can give x² + 5x = 0 instead; forgetting to subtract 3 when finding y gives (0, 0) and (5, 20); reporting only one intersection point misses the second.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Lerato solves √(x − 3) = −4 and says there is no solution. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['No — she is incorrect; squaring both sides gives x − 3 = 16, so x = 19 is a valid solution.', 'Yes, she is correct — the square root symbol always denotes the non-negative root, so √(x − 3) can never equal −4, meaning the equation truly has no solution.', 'No — the equation actually has two solutions, x = 19 and x = −13.', 'Yes, but only because the expression inside the root is x − 3 rather than x + 3.'], correctIndex: 1, explanation: 'The square root symbol always denotes the non-negative square root, so √(x − 3) can never equal a negative number such as −4. Squaring both sides gives x − 3 = 16, so x = 19, but substituting back gives √16 = 4, not −4 — confirming this is an extraneous solution and the equation truly has no solution. Lerato is correct.' },
        { difficulty: 'Hard', question: 'Sipho says the equation 2^(2x) − 6 · 2^x + 8 = 0 cannot be solved because it is not a normal quadratic. Which is the correct solution, found using the substitution y = 2^x?', checkMode: 'auto', options: ['x = 1 only (y = 4 mistakenly rejected)', 'y = 2 or y = 4 (never converted back to x)', 'x = 1 or x = 2', 'No solution — both y-values would need to be negative'], correctIndex: 2, explanation: 'Sipho is incorrect — the substitution y = 2^x turns the equation into an ordinary quadratic: y² − 6y + 8 = 0. Factorise: (y − 2)(y − 4) = 0, so y = 2 or y = 4, both valid since 2^x is always positive. Substituting back: 2^x = 2 → x = 1, and 2^x = 4 → x = 2.' },
        { difficulty: 'Hard', question: 'Amahle solves x² − 2x − 15 ≤ 0 and writes her final answer as x ≤ 5. Which statement correctly evaluates her answer, and what is the correct solution?', checkMode: 'auto', options: ['Correct — x ≤ 5 is the complete solution.', 'Incorrect — the correct solution is x ≤ −3.', 'Incorrect — the correct solution is x < −3 or x > 5.', 'Incorrect — she is missing the lower bound; the critical values are x = 5 and x = −3, and since the parabola opens upward the expression is ≤ 0 only between them, so the correct solution is −3 ≤ x ≤ 5.'], correctIndex: 3, explanation: 'The critical values are x = 5 and x = −3 (from (x − 5)(x + 3) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots. Amahle found one boundary but omitted the lower bound, so the correct, complete solution is −3 ≤ x ≤ 5.' },
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
        { difficulty: 'Easy', question: 'Solve for x using the quadratic formula: x² + x − 6 = 0', checkMode: 'auto', options: ['x = 2 or x = −3', 'x = 3 or x = −2', 'x = 4 or x = −6', 'No real solutions — the discriminant is negative'], correctIndex: 0, explanation: 'a = 1, b = 1, c = −6. Discriminant = 1 + 24 = 25. x = (−1 ± 5) / 2, giving x = 2 or x = −3. Using +b instead of −b gives x = 3 or x = −2; dividing by a instead of 2a gives x = 4 or x = −6; treating c as positive gives a negative discriminant.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x using the quadratic formula: 4x² − 3x − 1 = 0', checkMode: 'auto', options: ['x = 1/4 or x = −1', 'x = 1 or x = −1/4', 'No real solutions — the discriminant is negative', 'x = 2 or x = −1/2'], correctIndex: 1, explanation: 'a = 4, b = −3, c = −1. Discriminant = 9 + 16 = 25. x = (3 ± 5) / 8, giving x = 1 or x = −1/4. Using the wrong sign for b gives x = 1/4 or x = −1; treating c as positive gives a negative discriminant; dividing by a instead of 2a gives x = 2 or x = −1/2.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula: 2x² + 5x − 3 = 0', checkMode: 'auto', options: ['x = 3 or x = −1/2', 'x = −1 or x = −3/2', 'x = 1/2 or x = −3', 'x = 1 or x = −6'], correctIndex: 2, explanation: 'a = 2, b = 5, c = −3. Discriminant = 25 + 24 = 49. x = (−5 ± 7) / 4, giving x = 1/2 or x = −3. Using +b instead of −b gives x = 3 or x = −1/2; treating c as positive changes the discriminant to 1, giving x = −1 or x = −3/2; dividing by a instead of 2a gives x = 1 or x = −6.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² + 2x − 7 = 0', checkMode: 'auto', options: ['x = 1 + 2√2 or x = 1 − 2√2', 'No real solutions — the discriminant is negative', 'x = −2 + 4√2 or x = −2 − 4√2', 'x = −1 + 2√2 or x = −1 − 2√2'], correctIndex: 3, explanation: 'a = 1, b = 2, c = −7. Discriminant = 4 + 28 = 32. x = (−2 ± √32)/2 = (−2 ± 4√2)/2 = −1 ± 2√2. Using the wrong sign for b gives 1 ± 2√2; treating c as positive gives a negative discriminant; forgetting to halve the radical term leaves −2 ± 4√2.' },
        { difficulty: 'Medium', question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² + 6x + 3 = 0', checkMode: 'auto', options: ['x = −3 + √6 or x = −3 − √6', 'x = 3 + √6 or x = 3 − √6', 'x = −3 + 2√3 or x = −3 − 2√3', 'x = −6 + 2√6 or x = −6 − 2√6'], correctIndex: 0, explanation: 'a = 1, b = 6, c = 3. Discriminant = 36 − 12 = 24, positive but not a perfect square, giving surd roots. x = (−6 ± √24)/2 = (−6 ± 2√6)/2 = −3 ± √6. Using the wrong sign for b gives 3 ± √6; miscalculating the discriminant as b² + 4ac = 48 gives −3 ± 2√3; forgetting to halve the radical term leaves −6 ± 2√6.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Solve for x: √(x + 2) = x', checkMode: 'auto', options: ['x = 2 or x = −1', 'x = 2', 'No solution (from forgetting to square before solving)', 'x = −1'], correctIndex: 1, explanation: 'Square both sides: x + 2 = x². Rearranged: x² − x − 2 = 0 → (x − 2)(x + 1) = 0, so x = 2 or x = −1. Checking: x = 2 gives √4 = 2 ✓ valid; x = −1 gives √1 = 1 ≠ −1 ✗ extraneous — rejected. Forgetting to check for extraneous roots keeps both values; forgetting to square at all leads to a false "no solution."' },
        { difficulty: 'Medium', question: 'Solve for x: √(6x + 7) = x, checking for extraneous roots.', checkMode: 'auto', options: ['x = 7 or x = −1', 'x = −7/5', 'x = 7', 'x = −1'], correctIndex: 2, explanation: 'Square both sides: 6x + 7 = x². Rearranged: x² − 6x − 7 = 0 → (x − 7)(x + 1) = 0, so x = 7 or x = −1. Checking: x = 7 gives √49 = 7 ✓ valid; x = −1 gives √1 = 1 ≠ −1 ✗ extraneous — rejected. Forgetting to check for extraneous roots keeps both values; forgetting to square at all gives x = −7/5.' },
        { difficulty: 'Hard', question: 'Solve for x: √(x + 8) = x − 4, checking carefully for extraneous roots.', checkMode: 'auto', options: ['x = 8 or x = 1', 'x = 1', 'No real solutions (from incorrectly expanding (x − 4)² as x² + 16)', 'x = 8'], correctIndex: 3, explanation: 'Square both sides: x + 8 = (x − 4)² = x² − 8x + 16. Rearranged: x² − 9x + 8 = 0 → (x − 8)(x − 1) = 0, so x = 8 or x = 1. Checking: x = 8 gives √16 = 4 = 8 − 4 ✓ valid; x = 1 gives √9 = 3 but 1 − 4 = −3 ✗ extraneous — rejected. Forgetting to check both roots keeps the extraneous x = 1; incorrectly expanding (x − 4)² by dropping the middle term gives no real solution at all.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Solve for x: 5^x = 125', checkMode: 'auto', options: ['x = 3', 'x = 2', 'x = 4', 'x = 25'], correctIndex: 0, explanation: 'Write 125 as a power of 5: 125 = 5³. So 5^x = 5³, meaning x = 3. Misremembering the power of 5 (thinking 5² = 125 or 5⁴ = 125) gives x = 2 or x = 4; dividing 125 by 5 instead of converting to the same base gives x = 25.' },
        { difficulty: 'Medium', question: 'Solve for x: 5^(x+2) = 625', checkMode: 'auto', options: ['x = 4', 'x = 2', 'x = 1', 'x = 6'], correctIndex: 1, explanation: 'Write 625 as a power of 5: 625 = 5⁴. So 5^(x+2) = 5⁴, meaning x + 2 = 4, so x = 2. Forgetting to subtract 2 after equating exponents gives x = 4; misremembering 625 as 5³ gives x = 1; adding instead of subtracting 2 gives x = 6.' },
        { difficulty: 'Hard', question: 'Solve for x: 2^(2x) − 6 · 2^x + 8 = 0', checkMode: 'auto', options: ['x = 1 only (y = 4 mistakenly rejected)', 'y = 2 or y = 4 (never converted back to x)', 'x = 1 or x = 2', 'No solution — both y-values would need to be negative'], correctIndex: 2, explanation: 'Let y = 2^x, so the equation becomes y² − 6y + 8 = 0. Factorise: (y − 2)(y − 4) = 0, so y = 2 or y = 4 — both valid since 2^x is always positive. Substituting back: 2^x = 2 → x = 1, and 2^x = 4 → x = 2. Misfactoring the quadratic, forgetting the final substitution step, or wrongly assuming a sign error are common mistakes.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Solve for x: x² − 49 ≥ 0', checkMode: 'auto', options: ['−7 ≤ x ≤ 7', 'x < −7 or x > 7', 'x ≥ 7 only', 'x ≤ −7 or x ≥ 7'], correctIndex: 3, explanation: 'Critical values: x² − 49 = 0 → x = −7 or x = 7. Since the expression is an upward parabola, it is ≥ 0 outside the roots, with endpoints included. Solution: x ≤ −7 or x ≥ 7. Choosing the interval between the roots, excluding the endpoints, or missing the negative branch are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² − 3x − 10 ≤ 0', checkMode: 'auto', options: ['−2 ≤ x ≤ 5', 'x ≤ −2 or x ≥ 5', '−2 < x < 5', '−5 ≤ x ≤ 2'], correctIndex: 0, explanation: 'Critical values: (x − 5)(x + 2) = 0 → x = 5 or x = −2. Since the parabola opens upward, the expression is ≤ 0 between the roots, with endpoints included. Solution: −2 ≤ x ≤ 5. Choosing the outside interval, dropping the endpoints, or swapping the critical values are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve for x: 2x² + 3x − 5 > 0', checkMode: 'auto', options: ['−5/2 < x < 1', 'x < −5/2 or x > 1', 'x ≤ −5/2 or x ≥ 1', 'x < −1 or x > 5/2'], correctIndex: 1, explanation: 'Factorise: (2x + 5)(x − 1) > 0. Critical values: x = −5/2 or x = 1. Since the parabola opens upward, the expression is > 0 outside the roots, with endpoints excluded. Solution: x < −5/2 or x > 1. Choosing the interval between the roots, wrongly including the endpoints, or swapping the two critical values are common mistakes.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = 4x − 5 and y = x² − x − 5', checkMode: 'auto', options: ['(0, −5) and (−5, −25)', '(0, 0) and (5, 20)', '(0, −5) and (5, 15)', 'x = 5, y = 15 only'], correctIndex: 2, explanation: 'Substitute y = 4x − 5 into y = x² − x − 5: 4x − 5 = x² − x − 5, giving x² − 5x = 0. Factorise: x(x − 5) = 0, so x = 0 or x = 5. Corresponding y = 4x − 5 gives y = −5 or y = 15. A sign error while rearranging can give x² + 5x = 0 instead; forgetting to subtract 5 when finding y gives (0, 0) and (5, 20); reporting only one intersection point misses the second.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: y = x + 4 and y = x² − 2x − 3', checkMode: 'auto', options: ['((−3 + √37)/2 ; (5 + √37)/2) and ((−3 − √37)/2 ; (5 − √37)/2)', 'No real solution — the discriminant is negative', '((3 + √37)/2 ; (3 + √37)/2) and ((3 − √37)/2 ; (3 − √37)/2)', '((3 + √37)/2 ; (11 + √37)/2) and ((3 − √37)/2 ; (11 − √37)/2)'], correctIndex: 3, explanation: 'Substitute: x + 4 = x² − 2x − 3, giving x² − 3x − 7 = 0. Using the quadratic formula: x = (3 ± √37)/2. Corresponding y = x + 4 gives y = (11 ± √37)/2. A sign error while rearranging can give x² + 3x − 7 = 0 instead; treating c as positive gives a negative discriminant; forgetting to add 4 when finding y leaves y equal to x itself.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: y = x − 5 and y = x² − 6x + 1', checkMode: 'auto', options: ['(6, 1) and (1, −4)', '(−6, −11) and (−1, −6)', '(6, 6) and (1, 1)', 'x = 6, y = 1 only'], correctIndex: 0, explanation: 'Substitute y = x − 5 into y = x² − 6x + 1: x − 5 = x² − 6x + 1, giving x² − 7x + 6 = 0. Factorise: (x − 6)(x − 1) = 0, so x = 6 or x = 1. Corresponding y = x − 5 gives y = 1 or y = −4. A sign error while rearranging can give x² + 7x + 6 = 0 instead; forgetting to subtract 5 when finding y gives (6, 6) and (1, 1); reporting only one intersection point misses the second.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Sipho solves √(x − 5) = −2 and says there is no solution. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['No — he is incorrect; squaring both sides gives x − 5 = 4, so x = 9 is a valid solution.', 'Yes, he is correct — the square root symbol always denotes the non-negative root, so √(x − 5) can never equal −2, meaning the equation truly has no solution.', 'No — the equation actually has two solutions, x = 9 and x = 1.', 'Yes, but only because the expression inside the root is x − 5 rather than x + 5.'], correctIndex: 1, explanation: 'The square root symbol always denotes the non-negative square root, so √(x − 5) can never equal a negative number such as −2. Squaring both sides gives x − 5 = 4, so x = 9, but substituting back gives √4 = 2, not −2 — confirming this is an extraneous solution and the equation truly has no solution. Sipho is correct.' },
        { difficulty: 'Hard', question: 'Lerato says the equation 3^(2x) − 4 · 3^x + 3 = 0 cannot be solved because it is not a normal quadratic. Which is the correct solution, found using the substitution y = 3^x?', checkMode: 'auto', options: ['x = 0 only (y = 3 mistakenly rejected)', 'y = 1 or y = 3 (never converted back to x)', 'x = 0 or x = 1', 'No solution — both y-values would need to be negative'], correctIndex: 2, explanation: 'Lerato is incorrect — the substitution y = 3^x turns the equation into an ordinary quadratic: y² − 4y + 3 = 0. Factorise: (y − 1)(y − 3) = 0, so y = 1 or y = 3, both valid since 3^x is always positive. Substituting back: 3^x = 1 → x = 0, and 3^x = 3 → x = 1.' },
        { difficulty: 'Hard', question: 'Amahle solves x² − 3x − 10 ≤ 0 and writes her final answer as x ≤ 5. Which statement correctly evaluates her answer, and what is the correct solution?', checkMode: 'auto', options: ['Correct — x ≤ 5 is the complete solution.', 'Incorrect — the correct solution is x ≤ −2.', 'Incorrect — the correct solution is x < −2 or x > 5.', 'Incorrect — she is missing the lower bound; the critical values are x = 5 and x = −2, and since the parabola opens upward the expression is ≤ 0 only between them, so the correct solution is −2 ≤ x ≤ 5.'], correctIndex: 3, explanation: 'The critical values are x = 5 and x = −2 (from (x − 5)(x + 2) = 0). Since the parabola opens upward, the expression is ≤ 0 only between the roots. Amahle found one boundary but omitted the lower bound, so the correct, complete solution is −2 ≤ x ≤ 5.' },
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
