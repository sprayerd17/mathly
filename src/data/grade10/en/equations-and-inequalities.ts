import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (equation roles) ─────────────────────────────────────────
// LCM / rearranged equation / substitution steps   → blue   (#2563eb)
// expanded / factorised brackets / other variables → orange (#ea580c)
// solution / isolated subject / intersection point → green  (#16a34a)
// inequality sign flip                             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Equations and Inequalities',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING LINEAR EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-equations',
      title: 'Solving Linear Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We revise solving <strong>linear equations</strong>, including those with fractions and brackets, by simplifying both sides, collecting like terms, and isolating the variable using inverse operations.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('LCM / multiply through')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('expanded brackets')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Clear fractions')} — Multiply both sides by the ${bl('LCM')} of all denominators to eliminate fractions before anything else.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Expand brackets')} — Apply the distributive law to remove any brackets on both sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Collect like terms</strong> — Move all variable terms to one side and all constants to the other.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isolate the variable')} — Divide both sides by the coefficient of the variable to find the ${gr('solution')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Finding the LCM for fractions</p>` +
        `<p style="margin:0;color:#1e3a8a;">List the multiples of each denominator and find the smallest one they share. Multiplying every term on both sides by the ${bl('LCM')} clears all fractions in one step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: (2x − 3)/3 = (x + 2)/6',
          answer: `x = ${gr('8/3')}`,
          steps: [
            `The denominators are 3 and 6. The ${bl('LCM is 6')}. Multiply every term on both sides by ${bl('6')}:<br>${bl('6')} × (2x − 3)/3 = ${bl('6')} × (x + 2)/6 &nbsp;→&nbsp; ${bl('2')}(2x − 3) = x + 2`,
            `${or('Expand the brackets:')} ${or('4x − 6')} = x + 2`,
            `Subtract x from both sides: 3x − 6 = 2`,
            `Add 6 to both sides: 3x = 8`,
            `Divide both sides by 3: x = ${gr('8/3')} ✓`,
          ],
        },
        {
          question: 'Solve for x: 3(x − 2) = 2(x + 5)',
          answer: `x = ${gr('16')}`,
          steps: [
            `${or('Expand both brackets:')} ${or('3x − 6')} = ${or('2x + 10')}`,
            `Subtract 2x from both sides: x − 6 = 10`,
            `Add 6 to both sides: x = ${gr('16')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to solve linear equations with fractions and brackets using LCM and inverse operations',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING QUADRATIC EQUATIONS BY FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-equations-factorisation',
      title: 'Solving Quadratic Equations by Factorisation',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We solve quadratic equations by first <strong>rearranging</strong> to set the equation equal to zero, <strong>factorising</strong> the resulting expression, then applying the <strong>zero product property</strong> to find both solutions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rearranged equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('factorised brackets')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solutions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Rearrange')} — Move all terms to one side so the equation equals ${bl('zero')}: ax² + bx + c = 0.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Factorise')} — Write the expression as a product of ${or('two brackets')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Zero product property')} — If A × B = 0 then A = 0 or B = 0. Set each factor equal to zero to find both ${gr('solutions')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Finding the right factors (a × c method)</p>` +
        `<p style="margin:0;color:#9a3412;">For ax² + bx + c, find two numbers that <strong>multiply to a × c</strong> and <strong>add to b</strong>. Use these numbers to split the middle term, then factorise by grouping.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: x² − 5x − 14 = 0',
          answer: `x = ${gr('7')} or x = ${gr('−2')}`,
          steps: [
            `The equation is already ${bl('equal to zero:')} ${bl('x² − 5x − 14 = 0')}`,
            `${or('Factorise:')} Find two numbers that multiply to −14 and add to −5. Those numbers are <strong>−7</strong> and <strong>2</strong> (−7 × 2 = −14, −7 + 2 = −5).`,
            `Write the ${or('factorised brackets:')} ${or('(x − 7)(x + 2)')} = 0`,
            `Apply the zero product property: x − 7 = 0 &nbsp;or&nbsp; x + 2 = 0`,
            `Solutions: x = ${gr('7')} or x = ${gr('−2')} ✓`,
          ],
        },
        {
          question: 'Solve for x: 2x² + 3x = 20',
          answer: `x = ${gr('−4')} or x = ${gr('5/2')}`,
          steps: [
            `${bl('Rearrange')} to equal zero: ${bl('2x² + 3x − 20 = 0')}`,
            `${or('Factorise')} using the a × c method: a × c = 2 × (−20) = −40. Find two numbers that multiply to −40 and add to 3: <strong>−5</strong> and <strong>8</strong>.`,
            `Split the middle term: ${or('2x² − 5x + 8x − 20')} = 0`,
            `Group: x(2x − 5) + 4(2x − 5) = 0`,
            `${or('Factorised form:')} ${or('(x + 4)(2x − 5)')} = 0`,
            `Set each factor to zero: x + 4 = 0 &nbsp;or&nbsp; 2x − 5 = 0`,
            `Solutions: x = ${gr('−4')} or x = ${gr('5/2')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to solve quadratic equations by factorisation using the zero product property and the a×c method',

      diagramPlaceholder:
        'X-box diagram for 2x² + 3x − 20 = 0 showing a×c = −40 at top, b = 3 at bottom, and the two numbers −5 and 8 at the sides, leading through splitting and grouping to the factorised form (x + 4)(2x − 5) = 0 and solutions x = −4 or x = 5/2',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 250" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">2x² + 3x − 20 = 0</text>` +
        `<rect x="60" y="30" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="60" y1="30" x2="160" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="160" y1="30" x2="60" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="110" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a×c = −40</text>` +
        `<text x="110" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">b = 3</text>` +
        `<text x="80" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">−5</text>` +
        `<text x="140" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">8</text>` +
        `<text x="110" y="150" text-anchor="middle" font-size="11" fill="#6b7280">−5 × 8 = −40 and −5 + 8 = 3</text>` +
        `<text x="110" y="172" text-anchor="middle" font-size="12" fill="#0f1f3d">Split: 2x² <tspan fill="#2563eb" font-weight="700">− 5x + 8x</tspan> − 20</text>` +
        `<text x="110" y="192" text-anchor="middle" font-size="12" fill="#0f1f3d">Group: x(2x − 5) + 4(2x − 5)</text>` +
        `<text x="110" y="212" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">= (x + 4)(2x − 5) = 0</text>` +
        `<text x="110" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">x = −4 or x = 5/2</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE QUADRATIC FORMULA AND THE DISCRIMINANT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-formula-discriminant',
      title: 'The Quadratic Formula and the Discriminant',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">When a quadratic trinomial in <strong>ax² + bx + c = 0</strong> does not factorise nicely using the a × c method, we can always find its solutions using the <strong>quadratic formula</strong>: x = (−b ± √(b² − 4ac)) / 2a. The expression under the square root, <strong>b² − 4ac</strong>, is called the <strong>discriminant</strong> (written Δ), and its sign tells us how many real solutions the equation has — before we even finish solving it.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('substitute a, b, c')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('discriminant')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution(s)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('no real solutions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify a, b and c')} — Write the equation in standard form ax² + bx + c = 0 and read off the values of a, b and c.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Work out the ${or('discriminant')} first — Δ = b² − 4ac. Its sign tells you what kind of solutions to expect before you go any further.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Substitute into the formula</strong> — Substitute ${bl('a, b, c')} and the ${or('discriminant')} into x = (−b ± √(b² − 4ac)) / 2a.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Simplify')} — Simplify the square root (or leave it in simplest surd form) and simplify the fraction to state the final ${gr('solution(s)')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The discriminant and the nature of the roots</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Δ > 0')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two distinct real roots — the graph crosses the x-axis at two different points.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Δ = 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">One repeated (equal) real root — the graph touches the x-axis at a single point.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Δ < 0')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">No real roots — you would need the square root of a negative number, which is not real. The graph never touches the x-axis.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: x² − 4x − 3 = 0',
          answer: `x = ${gr('2 ± √7')}`,
          steps: [
            `${bl('Identify a, b and c:')} ${bl('a = 1, b = −4, c = −3')}`,
            `Calculate the ${or('discriminant')}: ${or('Δ = (−4)² − 4(1)(−3) = 16 + 12 = 28')}`,
            `Substitute into the formula: x = (−(−4) ± √28) / 2(1) = (4 ± √28) / 2`,
            `Simplify the surd: √28 = 2√7, so x = (4 ± 2√7) / 2`,
            `${gr('Solutions:')} x = ${gr('2 ± √7')} ✓`,
          ],
        },
        {
          question: 'Show that 2x² − 3x + 5 = 0 has no real solutions.',
          answer: `${re('No real solutions')} — Δ = ${re('−31')} < 0`,
          steps: [
            `${bl('Identify a, b and c:')} ${bl('a = 2, b = −3, c = 5')}`,
            `Calculate the ${or('discriminant')}: ${or('Δ = (−3)² − 4(2)(5) = 9 − 40 = −31')}`,
            `Since ${re('Δ = −31 < 0')}, we would need √(−31), and the square root of a negative number is not a real number.`,
            `${re('There are no real solutions')} — the graph of y = 2x² − 3x + 5 never crosses the x-axis ✓`,
          ],
        },
        {
          question: 'Use the discriminant to show that 4x² − 12x + 9 = 0 has two equal real roots, then solve for x.',
          answer: `x = ${gr('3/2')} (equal roots)`,
          steps: [
            `${bl('Identify a, b and c:')} ${bl('a = 4, b = −12, c = 9')}`,
            `Calculate the ${or('discriminant')}: ${or('Δ = (−12)² − 4(4)(9) = 144 − 144 = 0')}`,
            `Since Δ = 0, the equation has two equal real roots.`,
            `Substitute into the formula: x = (−(−12) ± √0) / 2(4) = 12 / 8`,
            `${gr('Solution:')} x = ${gr('3/2')} ✓ (Notice 4x² − 12x + 9 = (2x − 3)², confirming the repeated root.)`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to use the quadratic formula and how the discriminant tells you the number of real solutions',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING LITERAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'literal-equations',
      title: 'Solving Literal Equations (Changing the Subject of a Formula)',
      icon: '∀',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>literal equation</strong> contains multiple variables. We solve for one variable <em>in terms of the others</em> — this is also called <em>changing the subject of the formula</em>. We use the same inverse operation principles as regular equations, treating the other variables as constants.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('subject variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('other variables')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('isolated subject')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${bl('variable to isolate')} — this will become the new subject on the left-hand side.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Treat ${or('all other variables')} as if they are constants — apply the same inverse operations you would use with numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isolate the subject')} completely — the final answer expresses ${gr('the subject')} in terms of the other variables.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Square roots and squared variables</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the ${bl('subject variable')} is squared, divide first to isolate the squared term, then take the square root of both sides as the final step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for r in V = πr²h (in terms of V, π and h).',
          answer: `${gr('r')} = √(V / (πh))`,
          steps: [
            `Identify the ${bl('subject variable:')} ${bl('r')}. The formula is V = π${bl('r')}²${or('h')}.`,
            `Divide both sides by ${or('πh')}: V / (${or('πh')}) = ${bl('r')}²`,
            `Take the square root of both sides: ${gr('r')} = √(V / (${or('πh')})) ✓`,
          ],
        },
        {
          question: 'Solve for h in A = 2πr² + 2πrh (in terms of A, π and r).',
          answer: `${gr('h')} = (A − 2πr²) / (2πr)`,
          steps: [
            `Identify the ${bl('subject variable:')} ${bl('h')}. The formula is A = 2π${or('r')}² + 2π${or('r')}${bl('h')}.`,
            `Subtract 2π${or('r')}² from both sides: A − 2π${or('r')}² = 2π${or('r')}${bl('h')}`,
            `Divide both sides by 2π${or('r')}: ${gr('h')} = (A − 2π${or('r')}²) / (2π${or('r')}) ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to change the subject of a formula using inverse operations treating other variables as constants',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — LINEAR INEQUALITIES AND SIMULTANEOUS EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inequalities-simultaneous-equations',
      title: 'Solving Linear Inequalities and Simultaneous Equations',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Solving <strong>linear inequalities</strong> follows the same steps as linear equations, <strong>EXCEPT</strong> that multiplying or dividing both sides by a <em>negative number</em> ${re('reverses the inequality sign')}. <strong>Simultaneous equations</strong> (two equations, two unknowns) can be solved numerically, algebraically (substitution or elimination), or graphically (finding the intersection point).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('inequality sign flip')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('intersection point')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Critical rule for inequalities</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Reverse the inequality sign')} when multiplying or dividing by a negative number</p>` +
        `<p style="margin:0;color:#991b1b;">Example: −2x ≤ 4 &nbsp;→&nbsp; divide by −2 &nbsp;→&nbsp; ${re('x ≥ −2')} (sign flips from ≤ to ≥)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Methods for simultaneous equations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Substitution')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Express one variable in terms of the other, then ${bl('substitute')} into the second equation.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Elimination</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add or subtract the equations to eliminate one variable, then solve for the other.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Graphical')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Plot both lines on the same axes. The ${gr('intersection point')} is the simultaneous solution.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: 3 − 2x ≤ 7',
          answer: `x ${gr('≥')} −2`,
          steps: [
            `Subtract 3 from both sides: −2x ≤ 4`,
            `Divide both sides by −2 — ${re('the inequality sign reverses:')} x ${re('≥')} −2`,
            `Answer: x ${gr('≥')} −2 ✓`,
          ],
        },
        {
          question: 'Solve simultaneously using substitution: 2x + y = 10 and x − y = 2',
          answer: `x = ${gr('4')}, y = ${gr('2')}`,
          steps: [
            `From the second equation, express x in terms of y: ${bl('x = y + 2')}`,
            `${bl('Substitute')} ${bl('x = y + 2')} into the first equation: 2(y + 2) + y = 10`,
            `Expand: 2y + 4 + y = 10 &nbsp;→&nbsp; 3y + 4 = 10`,
            `Subtract 4: 3y = 6 &nbsp;→&nbsp; y = ${gr('2')}`,
            `Substitute back: x = ${gr('2')} + 2 = ${gr('4')}`,
            `Solution: x = ${gr('4')}, y = ${gr('2')} ✓ &nbsp; Check: 2(4) + 2 = 10 ✓ and 4 − 2 = 2 ✓`,
          ],
        },
        {
          question: 'Solve graphically: y = x + 3 and y = −x + 7',
          answer: `Intersection point: ${gr('(2, 5)')}`,
          steps: [
            `Plot both lines on the same Cartesian plane. The line y = x + 3 has gradient 1 and y-intercept 3. The line y = −x + 7 has gradient −1 and y-intercept 7.`,
            `The point where the lines cross is the simultaneous solution. Algebraically: set x + 3 = −x + 7`,
            `Add x to both sides: 2x + 3 = 7 &nbsp;→&nbsp; 2x = 4 &nbsp;→&nbsp; x = 2`,
            `Substitute x = 2: y = 2 + 3 = 5`,
            `${gr('Intersection point:')} ${gr('(2, 5)')} ✓ &nbsp; See the diagram below.`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to solve linear inequalities including sign reversal and how to solve simultaneous equations by substitution and graphically',

      diagramPlaceholder:
        'Cartesian plane showing the lines y = x + 3 (blue) and y = −x + 7 (orange) intersecting at the point (2, 5), marked in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" style="max-width:280px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<g stroke="#e5e7eb" stroke-width="1">` +
        `<line x1="30" y1="20" x2="30" y2="200"/><line x1="50" y1="20" x2="50" y2="200"/><line x1="70" y1="20" x2="70" y2="200"/>` +
        `<line x1="90" y1="20" x2="90" y2="200"/><line x1="110" y1="20" x2="110" y2="200"/><line x1="130" y1="20" x2="130" y2="200"/>` +
        `<line x1="150" y1="20" x2="150" y2="200"/><line x1="170" y1="20" x2="170" y2="200"/><line x1="190" y1="20" x2="190" y2="200"/>` +
        `<line x1="20" y1="30" x2="200" y2="30"/><line x1="20" y1="50" x2="200" y2="50"/><line x1="20" y1="70" x2="200" y2="70"/>` +
        `<line x1="20" y1="90" x2="200" y2="90"/><line x1="20" y1="110" x2="200" y2="110"/><line x1="20" y1="130" x2="200" y2="130"/>` +
        `<line x1="20" y1="150" x2="200" y2="150"/><line x1="20" y1="170" x2="200" y2="170"/>` +
        `</g>` +
        `<line x1="20" y1="190" x2="205" y2="190" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="210,190 202,186 202,194" fill="#0f1f3d"/>` +
        `<line x1="30" y1="205" x2="30" y2="15" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="30,10 26,18 34,18" fill="#0f1f3d"/>` +
        `<text x="212" y="203" font-size="11" fill="#0f1f3d">x</text>` +
        `<text x="20" y="10" font-size="11" fill="#0f1f3d">y</text>` +
        `<line x1="30" y1="130" x2="130" y2="30" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="134" y="26" font-size="11" font-weight="700" fill="#2563eb">y = x + 3</text>` +
        `<line x1="30" y1="50" x2="170" y2="190" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="34" y="44" font-size="11" font-weight="700" fill="#ea580c">y = −x + 7</text>` +
        `<circle cx="70" cy="90" r="4.5" fill="#16a34a"/>` +
        `<text x="78" y="86" font-size="12" font-weight="700" fill="#16a34a">(2, 5)</text>` +
        `<text x="110" y="215" text-anchor="middle" font-size="8" fill="#6b7280">Lines intersect where both equations are true</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — QUADRATIC AND RATIONAL INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-rational-inequalities',
      title: 'Quadratic and Rational Inequalities',
      icon: '≠',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>quadratic inequality</strong> (like x² − x − 6 > 0) is solved by finding the <strong>critical values</strong> where the expression equals zero, marking them on a number line, and <strong>testing each interval</strong> to see where the expression is positive or negative. A <strong>rational inequality</strong> (a fraction compared to zero) needs critical values from <strong>both</strong> the numerator and the denominator — and the value that makes the denominator zero must <strong>always</strong> be excluded from the solution set, since the expression is undefined there.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('critical values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interval testing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final solution')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('always excluded')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy — quadratic inequalities</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Flip if needed')} — If the coefficient of x² is negative, multiply or divide both sides by −1 first so a is positive, and ${re('reverse the inequality sign')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${bl('critical values')} — Factorise and set each factor to zero to find where the expression equals zero.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Draw a <strong>sign diagram</strong> — Mark the ${bl('critical values')} on a number line and ${or('test a value from each interval')} to see whether the expression is positive or negative there.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the solution set')} — Select the interval(s) that satisfy the original inequality, using ≤ or ≥ to include the critical values where appropriate.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Remember: flip the sign when the leading coefficient is negative')}</p>` +
        `<p style="margin:0;color:#991b1b;">Example: −x² + 4x + 5 ≥ 0 &nbsp;→&nbsp; multiply by −1 and flip &nbsp;→&nbsp; ${re('x² − 4x − 5 ≤ 0')} &nbsp;→&nbsp; factorise and solve as usual.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key strategy — rational inequalities</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find ${bl('critical values')} from <strong>both</strong> parts — Set the numerator equal to zero, AND set the denominator equal to zero.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Mark the values and ${or('test each interval')} — Use the sign diagram exactly as with a quadratic inequality.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Always exclude the denominator-zero value')} — Even if ≤ or ≥ is used and the sign pattern seems to include it, that value makes the expression undefined and can ${re('never')} be part of the solution set.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the solution set')} — The numerator-zero value may be included (open or closed circle depending on the inequality), but the denominator-zero value is always shown with an ${re('open circle')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Number line notation</p>` +
        `<p style="margin:0;color:#1e3a8a;">An <strong>open circle</strong> means the value is excluded (not part of the solution); a <strong>closed (filled) circle</strong> means the value is included. A denominator-zero value is always shown with an open circle, no matter what the inequality sign is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: −x² + 4x + 5 ≥ 0',
          answer: `${gr('−1 ≤ x ≤ 5')}`,
          steps: [
            `${re('Multiply both sides by −1 and flip the inequality:')} ${re('x² − 4x − 5 ≤ 0')}`,
            `Find the ${bl('critical values')} by factorising: (x − 5)(x + 1) = 0, so ${bl('x = 5')} or ${bl('x = −1')}`,
            `${or('Test the intervals:')} for x < −1 the expression is positive; for −1 < x < 5 it is negative; for x > 5 it is positive.`,
            `We need the expression ≤ 0, so we want the interval where it is negative or zero — including the critical values, since the inequality is ≤.`,
            `${gr('Solution:')} ${gr('−1 ≤ x ≤ 5')} ✓`,
          ],
        },
        {
          question: 'Solve for x: (x − 2)/(x + 1) ≤ 0. Remember to exclude any value that makes the denominator zero.',
          answer: `${gr('−1 < x ≤ 2')}`,
          steps: [
            `Find the ${bl('critical values')}: numerator zero at ${bl('x = 2')}; denominator zero at ${re('x = −1')} (this value must be excluded).`,
            `${or('Test the intervals:')} for x < −1 the expression is positive; for −1 < x < 2 it is negative; for x > 2 it is positive.`,
            `We need the expression ≤ 0, so we want where it is negative or zero. x = 2 gives exactly zero, so it is included; x = −1 is ${re('always excluded')} since the expression is undefined there.`,
            `${gr('Solution:')} ${gr('−1 < x ≤ 2')} ✓`,
          ],
        },
        {
          question: 'Solve for x: (2x + 1)/(x − 3) ≥ 0. Explain why x = 3 must always be excluded from the solution set.',
          answer: `${gr('x ≤ −1/2 or x > 3')}`,
          steps: [
            `Find the ${bl('critical values')}: numerator zero at ${bl('x = −1/2')}; denominator zero at ${re('x = 3')}.`,
            `${or('Test the intervals:')} for x < −1/2 the expression is positive; for −1/2 < x < 3 it is negative; for x > 3 it is positive.`,
            `We need the expression ≥ 0, so we want where it is positive or zero. x = −1/2 gives exactly zero, so it is included.`,
            `${re('x = 3 must always be excluded')}, even though the expression is positive on both sides of it here — at x = 3 the denominator is zero, so the expression is undefined and can never be part of the solution, regardless of the sign pattern either side of it.`,
            `${gr('Solution:')} ${gr('x ≤ −1/2 or x > 3')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Short video showing how to solve quadratic inequalities using a sign diagram and how to solve rational inequalities while always excluding the denominator-zero value',

      diagramPlaceholder:
        'Number line showing the solution to (2x + 1)/(x − 3) ≥ 0: a closed (filled) circle at x = −1/2 with shading to the left, and an open circle at x = 3 (always excluded, denominator zero) with shading to the right',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" width="100%" style="max-width:320px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="50" x2="205" y2="50" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="10,50 18,46 18,54" fill="#0f1f3d"/>` +
        `<polygon points="210,50 202,46 202,54" fill="#0f1f3d"/>` +
        `<line x1="18" y1="50" x2="70" y2="50" stroke="#16a34a" stroke-width="5"/>` +
        `<line x1="150" y1="50" x2="202" y2="50" stroke="#16a34a" stroke-width="5"/>` +
        `<circle cx="70" cy="50" r="6" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="70" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">−1/2</text>` +
        `<circle cx="150" cy="50" r="6" fill="white" stroke="#dc2626" stroke-width="2.5"/>` +
        `<text x="150" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">3 (excluded)</text>` +
        `<text x="110" y="16" text-anchor="middle" font-size="11" fill="#6b7280">Solution: x ≤ −1/2 or x > 3</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation, simple trinomial ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: x² − 9x + 20 = 0',
      checkMode: 'auto',
      options: ['x = 4 or x = 5', 'x = -4 or x = -5', 'x = -4 or x = 5', 'x = 4 or x = -5'],
      correctIndex: 0,
      explanation: 'Find two numbers that multiply to 20 and add to −9: −4 and −5. So (x−4)(x−5)=0, giving x=4 or x=5. Flipping the signs of the factors (the other options) gives numbers that no longer multiply to +20 or add to −9.',
    },

    // ── Q2 Easy — factorisation with negative constant ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: x² + 2x − 15 = 0',
      checkMode: 'auto',
      options: ['x = 5 or x = -3', 'x = -5 or x = 3', 'x = -3 or x = -5', 'x = 15 or x = -1'],
      correctIndex: 1,
      explanation: 'Find two numbers that multiply to −15 and add to 2: 5 and −3. So (x+5)(x−3)=0, giving x=−5 or x=3. Flipping both signs (option A) or using the wrong factor pair of 15 (option D) are common mistakes.',
    },

    // ── Q3 Medium — factorisation with a≠1 (a×c method) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 2x² − x − 6 = 0',
      checkMode: 'auto',
      options: ['x = 3/2 or x = -2', 'x = -2/3 or x = 3', 'x = -3/2 or x = 2', 'x = 3/2 or x = 2'],
      correctIndex: 2,
      explanation: 'a×c = 2×(−6) = −12. Find two numbers multiplying to −12 and adding to −1: −4 and 3. Split: 2x²−4x+3x−6=0 → 2x(x−2)+3(x−2)=0 → (2x+3)(x−2)=0, giving x=−3/2 or x=2. Sign-flipping the roots (option A) or using the wrong factor pair (option B) are common mistakes.',
    },

    // ── Q4 Medium — rearrange before factorising ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² = 7x − 12',
      checkMode: 'auto',
      options: ['x = -3 or x = -4', 'x = 12 or x = -1', 'x = 2 or x = 5', 'x = 3 or x = 4'],
      correctIndex: 3,
      explanation: 'Rearrange to x²−7x+12=0. Find two numbers that multiply to 12 and add to −7: −3 and −4. So (x−3)(x−4)=0, giving x=3 or x=4. Forgetting to rearrange correctly (option A) or an arithmetic slip in the factor pair (option C) are common errors.',
    },

    // ── Q5 Medium — factorisation with fractional root ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 3x² + 5x − 2 = 0',
      checkMode: 'auto',
      options: ['x = 1/3 or x = -2', 'x = -1/3 or x = 2', 'x = 1/3 or x = 2', 'x = 3 or x = -2'],
      correctIndex: 0,
      explanation: 'a×c = 3×(−2) = −6. Find two numbers multiplying to −6 and adding to 5: 6 and −1. Split: 3x²+6x−x−2=0 → 3x(x+2)−1(x+2)=0 → (3x−1)(x+2)=0, giving x=1/3 or x=−2. Sign errors (option B) or dropping the coefficient 3 when isolating x (option D) are common mistakes.',
    },

    // ── Q6 Medium — quadratic formula, irrational roots ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Use the quadratic formula to solve for x (correct to 2 decimal places): x² + 4x − 7 = 0',
      checkMode: 'auto',
      options: ['x ≈ -0.68 or x ≈ -7.32', 'x ≈ 1.32 or x ≈ -5.32', 'x ≈ 5.32 or x ≈ -1.32', 'x ≈ 1.32 or x ≈ 4.68'],
      correctIndex: 1,
      explanation: 'a=1, b=4, c=−7. Discriminant = 4²−4(1)(−7) = 16+28 = 44. x = (−4±√44)/2 = −2±√11 ≈ 1.32 or ≈ −5.32. Forgetting to divide the −b term by 2a (option A), or using the wrong sign for −b (option C), are common mistakes.',
    },

    // ── Q7 Medium — quadratic formula, irrational roots (leave in surd form) ──
    {
      difficulty: 'Medium',
      question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 2x² − 3x − 4 = 0',
      checkMode: 'auto',
      options: ['x = (3 ± √41) / 2', 'x = (-3 ± √41) / 4', 'x = (3 ± √41) / 4', 'x = (3 ± √25) / 4'],
      correctIndex: 2,
      explanation: 'a=2, b=−3, c=−4. Discriminant = (−3)²−4(2)(−4) = 9+32 = 41. x = (−(−3)±√41)/(2×2) = (3±√41)/4. Forgetting to double a in the denominator (option A), or a sign error on −b (option B), are common mistakes.',
    },

    // ── Q8 Hard — discriminant shows no real solutions ────────────────────────
    {
      difficulty: 'Hard',
      question: 'What is the discriminant of x² + 2x + 5 = 0, and what does it tell you about the solutions?',
      checkMode: 'auto',
      options: [
        'Δ = 24, so there are two distinct real solutions (Δ > 0)',
        'Δ = -16, so there is one repeated real solution',
        'Δ = 4, so there are two distinct real solutions (Δ > 0)',
        'Δ = -16, so there are no real solutions (Δ < 0)',
      ],
      correctIndex: 3,
      explanation: 'Discriminant = b²−4ac = 2²−4(1)(5) = 4−20 = −16. Since Δ < 0, the square root of a negative number is not real, so this equation has no real solutions. Sign errors when computing 4ac (option A), or confusing Δ<0 with Δ=0 (option B), are common mistakes.',
    },

    // ── Q9 Hard — quadratic formula, irrational roots ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x using the quadratic formula, leaving your answer in simplest surd form: 3x² − 2x − 2 = 0',
      checkMode: 'auto',
      options: ['x = (1 ± √7) / 3', 'x = (-1 ± √7) / 3', 'x = (1 ± √10) / 3', 'x = (1 ± √7) / 6'],
      correctIndex: 0,
      explanation: 'a=3, b=−2, c=−2. Discriminant = (−2)²−4(3)(−2) = 4+24 = 28. x = (2±√28)/6 = (2±2√7)/6 = (1±√7)/3 after simplifying. Sign errors on −b (option B) or arithmetic slips in the discriminant (option C) are common mistakes.',
    },

    // ── Q10 Medium — discriminant shows equal roots ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Use the discriminant to show that x² − 6x + 9 = 0 has two equal real roots, then solve for x.',
      checkMode: 'auto',
      options: [
        'Δ = 36, so there are two distinct real roots; x = 3 or x = -3',
        'Δ = 0, so there are two equal real roots; x = 3',
        'Δ = 0, so there are two equal real roots; x = -3',
        'Δ = -36, so there are no real roots',
      ],
      correctIndex: 1,
      explanation: 'Discriminant = (−6)²−4(1)(9) = 36−36 = 0, so there are two equal real roots. Factorising: (x−3)²=0, so x=3. Forgetting the −4ac term (option A), or a sign error in the final root (option C), are common mistakes.',
    },

    // ── Q11 Medium — quadratic inequality (>), roots outside ──────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² − x − 6 > 0',
      checkMode: 'auto',
      options: ['-2 < x < 3', 'x > -2 or x < 3', 'x < -2 or x > 3', 'x ≤ -2 or x ≥ 3'],
      correctIndex: 2,
      explanation: 'Factorise: (x−3)(x+2)>0. Critical values: x=−2 and x=3. Since the parabola opens upward, it is positive outside the roots: x<−2 or x>3. Choosing the interval between the roots (option A) or using the wrong boundary type (option D) are common mistakes.',
    },

    // ── Q12 Medium — quadratic inequality (≥), between roots after rearranging ─
    {
      difficulty: 'Medium',
      question: 'Solve for x: −x² + 2x + 8 ≥ 0',
      checkMode: 'auto',
      options: ['x ≤ -2 or x ≥ 4', '-4 ≤ x ≤ 2', '-2 < x < 4', '-2 ≤ x ≤ 4'],
      correctIndex: 3,
      explanation: 'Multiply both sides by −1 and flip the inequality: x²−2x−8≤0. Factorise: (x−4)(x+2)≤0. Critical values: x=−2 and x=4. Since this parabola (after flipping) opens upward, it is ≤0 between the roots: −2≤x≤4. Forgetting to flip the inequality sign (option A) is the classic mistake here.',
    },

    // ── Q13 Hard — quadratic inequality (<), a≠1 ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: 2x² + 3x − 2 < 0',
      checkMode: 'auto',
      options: ['-2 < x < 1/2', 'x < -2 or x > 1/2', '-1/2 < x < 2', '-2 ≤ x ≤ 1/2'],
      correctIndex: 0,
      explanation: 'Factorise: (2x−1)(x+2)<0. Critical values: x=1/2 and x=−2. Since the parabola opens upward, it is negative between the roots: −2<x<1/2. Choosing the outside interval (option B) or the wrong boundary type (option D) are common mistakes.',
    },

    // ── Q14 Medium — quadratic inequality (≤), perfect trinomial ──────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: x² − 5x + 6 ≤ 0',
      checkMode: 'auto',
      options: ['x ≤ 2 or x ≥ 3', '2 ≤ x ≤ 3', '-3 ≤ x ≤ -2', '2 < x < 3'],
      correctIndex: 1,
      explanation: 'Factorise: (x−2)(x−3)≤0. Critical values: x=2 and x=3. Since the parabola opens upward, it is ≤0 between the roots: 2≤x≤3. Picking the outside interval (option A) or using strict inequalities (option D) are common mistakes.',
    },

    // ── Q15 Hard — rational inequality, strict, both critical values excluded ──
    {
      difficulty: 'Hard',
      question: `Solve for x: ${frac('x − 1', 'x + 2')} > 0. Remember to exclude any value that makes the denominator zero.`,
      checkMode: 'auto',
      options: ['-2 < x < 1', 'x ≤ -2 or x ≥ 1', 'x < -2 or x > 1', '1 < x'],
      correctIndex: 2,
      explanation: 'Critical values: x=1 (numerator zero) and x=−2 (denominator zero, always excluded). Testing intervals shows the expression is positive when x<−2 or x>1. Including x=−2 (option B) is a serious error since the expression is undefined there; dropping a branch (option D) misses part of the solution.',
    },

    // ── Q16 Hard — rational inequality, ≤, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: `Solve for x: ${frac('x + 3', 'x − 2')} ≤ 0. Remember to exclude any value that makes the denominator zero.`,
      checkMode: 'auto',
      options: ['-3 < x ≤ 2', '-3 ≤ x ≤ 2', 'x ≤ -3 or x > 2', '-3 ≤ x < 2'],
      correctIndex: 3,
      explanation: 'Critical values: x=−3 (numerator zero, included since the expression equals 0 there) and x=2 (denominator zero, must always be excluded). Testing intervals shows the expression is negative or zero for −3≤x<2. Including x=2 (option B) is a serious error since the expression is undefined there.',
    },

    // ── Q17 Hard — rational inequality, ≥, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: `Solve for x: ${frac('2x − 1', 'x + 4')} ≥ 0. Remember that the value making the denominator zero must always be excluded.`,
      checkMode: 'auto',
      options: ['x < -4 or x ≥ 1/2', '-4 ≤ x ≤ 1/2', 'x ≤ -4 or x ≥ 1/2', 'x < -4 or x > 1/2'],
      correctIndex: 0,
      explanation: 'Critical values: numerator zero at x=1/2 (included, since the expression equals zero there) and denominator zero at x=−4 (always excluded, since the expression is undefined there). Testing intervals gives x<−4 or x≥1/2. Including x=−4 (option C) is a serious error regardless of the sign pattern nearby.',
    },

    // ── Q18 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously for x and y: y = x + 1 and y = x² − 1',
      checkMode: 'auto',
      options: ['x=2,y=3 or x=1,y=0', 'x=2,y=3 or x=-1,y=0', 'x=-2,y=-1 or x=1,y=0', 'x=2,y=1 or x=-1,y=0'],
      correctIndex: 1,
      explanation: 'Set x+1 = x²−1, so x²−x−2=0, giving (x−2)(x+1)=0, so x=2 or x=−1. Substitute into y=x+1: when x=2, y=3; when x=−1, y=0. Check: (2)²−1=3 ✓ and (−1)²−1=0 ✓. Forgetting to substitute back to find y correctly (options A and D) is a common mistake.',
    },

    // ── Q19 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Solve simultaneously for x and y: y = 2x − 3 and y = x² − 4x + 5',
      checkMode: 'auto',
      options: ['x=2,y=1 or x=4,y=13', 'x=-2,y=-7 or x=-4,y=-11', 'x=2,y=1 or x=4,y=5', 'x=2,y=5 or x=4,y=1'],
      correctIndex: 2,
      explanation: 'Set 2x−3 = x²−4x+5, so x²−6x+8=0, giving (x−2)(x−4)=0, so x=2 or x=4. Substitute into y=2x−3: when x=2, y=1; when x=4, y=5. Check: (2)²−4(2)+5=1 ✓ and (4)²−4(4)+5=5 ✓. Swapping the paired y-values (option D) is a common mistake.',
    },

    // ── Q20 Hard — simultaneous linear-quadratic, irrational solutions ────────
    {
      difficulty: 'Hard',
      question: 'Solve simultaneously for x and y, leaving your answers in simplest surd form: x + y = 5 and y = x² − 3x + 1',
      checkMode: 'auto',
      options: [
        'x=1+√5, y=4+√5 or x=1-√5, y=4-√5',
        'x=2+√5, y=3-√5 or x=2-√5, y=3+√5',
        'x=1+√20, y=4-√20 or x=1-√20, y=4+√20',
        'x=1+√5, y=4-√5 or x=1-√5, y=4+√5',
      ],
      correctIndex: 3,
      explanation: 'From the first equation, y=5−x. Substitute: 5−x=x²−3x+1, so x²−2x−4=0. Using the quadratic formula: x=(2±√20)/2=1±√5. When x=1+√5, y=5−(1+√5)=4−√5. When x=1−√5, y=5−(1−√5)=4+√5. Forgetting to divide √20 by 2 (option C) or swapping the paired y-values (option A) are common mistakes.',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered equations and inequalities for Grade 10. Keep it up!' },
      { minScore: 15, message: 'Excellent work! You have a very strong grasp of the content. Review any missed parts and you will have it perfect.' },
      { minScore: 11, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
      { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered equations and inequalities for Grade 10. Keep it up!' },
    { minScore: 15, message: 'Excellent work! You have a very strong grasp of the content. Review any missed parts and you will have it perfect.' },
    { minScore: 11, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 4(x − 3) = 20', checkMode: 'auto', options: ['x = 9', 'x = 5.75', 'x = 2', 'x = 8'], correctIndex: 3, explanation: 'Expand: 4x − 12 = 20. Add 12 to both sides: 4x = 32. Divide by 4: x = 8. Forgetting to distribute the 4 across the bracket (option B), or a sign slip when isolating x (option C), are common mistakes.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 5x − 2(x + 1) = 13', checkMode: 'auto', options: ['x = 11/3', 'x = 5', 'x = 3', 'x = 15'], correctIndex: 1, explanation: 'Expand (the minus sign flips both signs inside the bracket): 5x − 2x − 2 = 13. Combine like terms: 3x − 2 = 13. Add 2: 3x = 15. Divide by 3: x = 5. Forgetting to distribute the negative sign onto every term in the bracket (option A) is the classic mistake here.' },
        { difficulty: 'Medium', question: `Solve for x: ${frac('3x + 1', '4')} = ${frac('x − 2', '2')}`, checkMode: 'auto', options: ['x = -3', 'x = -1.5', 'x = -5', 'x = 3'], correctIndex: 2, explanation: 'The LCM of 4 and 2 is 4. Multiply every term by 4: (3x + 1) = 2(x − 2). Expand: 3x + 1 = 2x − 4. Subtract 2x: x + 1 = −4. Subtract 1: x = −5. Forgetting to distribute the 2, or a sign error when expanding the bracket, are common mistakes.' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 3x − 10 = 0', checkMode: 'auto', options: ['x = -5 or x = 2', 'x = -5 or x = -2', 'x = 10 or x = -1', 'x = 5 or x = -2'], correctIndex: 3, explanation: 'Find two numbers multiplying to −10 and adding to −3: −5 and 2, so (x−5)(x+2)=0, giving x=5 or x=−2. Sign confusion when writing the factors (options A and B), or using the wrong factor pair of 10 (option C), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: 2x² − 7x + 3 = 0', checkMode: 'auto', options: ['x = 3 or x = 1/2', 'x = -3 or x = -1/2', 'x = 3 or x = -1/2', 'x = 1/3 or x = -6'], correctIndex: 0, explanation: 'a×c = 2×3 = 6. Two numbers multiplying to 6 and adding to −7: −6 and −1. Split: 2x²−6x−x+3=0 → 2x(x−3)−1(x−3)=0 → (2x−1)(x−3)=0, giving x=1/2 or x=3. Sign errors (options B and C), or using the wrong factor pair of 6 (option D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 4x = 21', checkMode: 'auto', options: ['x = -3 or x = 7', 'x = 3 or x = -7', 'x = -3 or x = -7', 'x = 21 or x = -1'], correctIndex: 1, explanation: 'Rearrange: x²+4x−21=0. Two numbers multiplying to −21 and adding to 4: 7 and −3, so (x+7)(x−3)=0, giving x=−7 or x=3. Sign confusion (options A and C) or using the wrong factor pair of 21 (option D) are common mistakes.' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 9 and x − y = 3', checkMode: 'auto', options: ['x=3,y=6', 'x=9,y=0', 'x=6,y=3', 'x=6,y=2'], correctIndex: 2, explanation: 'Add the equations: 2x = 12, so x = 6. Substitute into x + y = 9: 6 + y = 9, so y = 3. Swapping x and y (option A), or an arithmetic slip in either step (options B and D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = x − 1 and 3x + y = 15', checkMode: 'auto', options: ['x=3.5,y=2.5', 'x=3,y=4', 'x=5,y=4', 'x=4,y=3'], correctIndex: 3, explanation: 'Substitute y = x − 1 into 3x + y = 15: 3x + x − 1 = 15. Combine: 4x − 1 = 15, so 4x = 16, x = 4. Substitute back: y = 4 − 1 = 3. A sign slip when substituting (option A), or swapping which variable is which (option B), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 2x + 3y = 16 and 2x − y = 4', checkMode: 'auto', options: ['x=3.5,y=3', 'x=0.5,y=-3', 'x=2,y=3', 'x=3.5,y=4'], correctIndex: 0, explanation: 'Subtract the second equation from the first: (2x + 3y) − (2x − y) = 16 − 4, so 4y = 12, y = 3. Substitute y = 3 into 2x − y = 4: 2x − 3 = 4, so 2x = 7, x = 3.5. A sign error when subtracting the equations (option B), or substituting into the wrong equation (option C), are common mistakes.' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 20 and a difference of 6. What are the two numbers?', checkMode: 'auto', options: ['14 and 6', '13 and 7', '10 and 10', '13 and 6'], correctIndex: 1, explanation: 'Let the numbers be x and y, with x > y. x + y = 20 and x − y = 6. Add the equations: 2x = 26, so x = 13. Substitute into x + y = 20: 13 + y = 20, so y = 7. The numbers are 13 and 7. Forgetting to use both equations together (option C), or an arithmetic slip when adding (option A), are common mistakes.' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 3x − 5 > 10', checkMode: 'auto', options: ['x < 5', 'x > 15', 'x > 5', 'x > -5'], correctIndex: 2, explanation: 'Add 5 to both sides: 3x > 15. Divide by 3: x > 5 (no flip needed since we divided by a positive number). Flipping the inequality unnecessarily (option A), or forgetting to divide by 3 (option B), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: −4x + 3 ≤ 15', checkMode: 'auto', options: ['x ≤ -3', 'x ≥ 3', 'x ≥ -12', 'x ≥ -3'], correctIndex: 3, explanation: 'Subtract 3 from both sides: −4x ≤ 12. Divide both sides by −4 — the inequality sign reverses: x ≥ −3. Forgetting to flip the inequality sign when dividing by a negative number (option A) is the classic mistake here.' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 5 − 2x < 3(x − 5). Describe how you would represent the solution set on a number line.', checkMode: 'auto', options: ['x > 4', 'x > 2', 'x < 4', 'x > 5'], correctIndex: 0, explanation: 'Expand the right side: 5 − 2x < 3x − 15. Add 2x to both sides: 5 < 5x − 15. Add 15: 20 < 5x. Divide by 5: 4 < x, i.e. x > 4. Forgetting to distribute the 3 onto both terms in the bracket (3(x−5) = 3x−5 instead of 3x−15) gives the common wrong answer x>2 (option B). On a number line the true solution is shown with an open circle at 4 and shading extending right toward positive infinity, since 4 itself is not included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 2 and y = x² − 4', checkMode: 'auto', options: ['x=-3,y=-1 or x=2,y=4', 'x=3,y=5 or x=-2,y=0', 'x=3,y=0 or x=-2,y=5', 'x=3,y=5 or x=-2,y=2'], correctIndex: 1, explanation: 'Set x + 2 = x² − 4, so x² − x − 6 = 0. Factorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2. When x = 3: y = 5. When x = −2: y = 0. Check: 3² − 4 = 5 ✓ and (−2)² − 4 = 0 ✓. Sign errors in the factoring (option A), or swapping which y-value belongs to which x (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 3x − 2 and y = x² + 2x − 8', checkMode: 'auto', options: ['x=-3,y=-11 or x=2,y=4', 'x=3,y=-8 or x=-2,y=7', 'x=3,y=7 or x=-2,y=-8', 'x=3,y=7 or x=-2,y=-6'], correctIndex: 2, explanation: 'Set 3x − 2 = x² + 2x − 8, so x² − x − 6 = 0. Factorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2. When x = 3: y = 3(3) − 2 = 7. When x = −2: y = 3(−2) − 2 = −8. Check: 3² + 2(3) − 8 = 7 ✓ and (−2)² + 2(−2) − 8 = −8 ✓. Swapping the paired y-values (option B), or an arithmetic slip computing y (option D), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 4 and y = x² + x − 2', checkMode: 'auto', options: ['x=√6, y=-√6+4 or x=-√6, y=√6+4', 'x=2√2, y=2√2+4 or x=-2√2, y=-2√2+4', 'x=√6, y=√6 or x=-√6, y=-√6', 'x=√6, y=√6+4 or x=-√6, y=-√6+4'], correctIndex: 3, explanation: 'From the first equation substitute into the second: x + 4 = x² + x − 2. Simplify: 4 = x² − 2, so x² = 6, x = ±√6. When x = √6: y = √6 + 4. When x = −√6: y = −√6 + 4. Swapping the paired y-values (option A), or forgetting to add the 4 back into y (option C), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 2x + y = 7 and y = x² − 3x + 5', checkMode: 'auto', options: ['x=2,y=3 or x=-1,y=9', 'x=2,y=9 or x=-1,y=3', 'x=-2,y=11 or x=1,y=5', 'x=2,y=3 or x=-1,y=8'], correctIndex: 0, explanation: 'From the first equation, y = 7 − 2x. Substitute: 7 − 2x = x² − 3x + 5. Rearrange: x² − x − 2 = 0. Factorise: (x − 2)(x + 1) = 0, so x = 2 or x = −1. When x = 2: y = 3. When x = −1: y = 9. Check: 2² − 3(2) + 5 = 3 ✓ and (−1)² − 3(−1) + 5 = 9 ✓. Swapping the paired y-values (option B), or a sign error in the factoring (option C), are common mistakes.' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 5 cm more than its width. If the perimeter is 34 cm, form an equation in terms of the width w and solve for w.', checkMode: 'auto', options: ['w = 14.5', 'w = 6', 'w = 11', 'w = 7'], correctIndex: 1, explanation: 'Perimeter = 2(length + width) = 2((w + 5) + w) = 34. Simplify: 2(2w + 5) = 34, so 4w + 10 = 34. Subtract 10: 4w = 24. Divide by 4: w = 6. Forgetting the factor of 2 in the perimeter formula (option A), or reporting the length instead of the width (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 3, then doubled, gives the same result as the number decreased by 1, then tripled. Find the number.', checkMode: 'auto', options: ['x = 3', 'x = 6', 'x = 9', 'x = 15'], correctIndex: 2, explanation: 'Let the number be x. Equation: 2(x + 3) = 3(x − 1). Expand: 2x + 6 = 3x − 3. Subtract 2x: 6 = x − 3. Add 3: x = 9. Check: 2(9 + 3) = 24 and 3(9 − 1) = 24 ✓. A sign error when expanding (option A), or forgetting to distribute fully (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'A school hires chairs for a matric dance at a set-up fee of R500 plus R15 per chair. Sipho has a budget of R1 400. Form an inequality for the number of chairs c he can afford, and solve for c.', checkMode: 'auto', options: ['c ≤ 93', 'c ≤ 65', 'c ≥ 60', 'c ≤ 60'], correctIndex: 3, explanation: 'Total cost: 500 + 15c ≤ 1400. Subtract 500: 15c ≤ 900. Divide by 15: c ≤ 60. Sipho can afford at most 60 chairs. Forgetting to subtract the set-up fee first (option A), or flipping the inequality unnecessarily (option C), are common mistakes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 3(x − 4) = 15', checkMode: 'auto', options: ['x = 9', 'x = 19/3', 'x = 1', 'x = 8'], correctIndex: 0, explanation: 'Expand: 3x − 12 = 15. Add 12 to both sides: 3x = 27. Divide by 3: x = 9. Forgetting to distribute the 3 across the bracket (option B), or a sign slip when isolating x (option C), are common mistakes.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 6x − 3(x + 2) = 12', checkMode: 'auto', options: ['x = 2', 'x = 6', 'x = 4', 'x = 18'], correctIndex: 1, explanation: 'Expand (the minus sign flips both signs inside the bracket): 6x − 3x − 6 = 12. Combine like terms: 3x − 6 = 12. Add 6: 3x = 18. Divide by 3: x = 6. Forgetting to distribute the negative sign onto every term in the bracket (option A) is the classic mistake here.' },
        { difficulty: 'Medium', question: `Solve for x: ${frac('2x − 1', '3')} = ${frac('x + 4', '5')}`, checkMode: 'auto', options: ['x = 1', 'x = -1', 'x = 17/7', 'x = -13'], correctIndex: 2, explanation: 'The LCM of 3 and 5 is 15. Multiply every term by 15: 5(2x − 1) = 3(x + 4). Expand: 10x − 5 = 3x + 12. Subtract 3x: 7x − 5 = 12. Add 5: 7x = 17. Divide by 7: x = 17/7. Forgetting to multiply both sides by the correct LCM factor, or a sign error when expanding, are common mistakes.' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 2x − 8 = 0', checkMode: 'auto', options: ['x = -4 or x = 2', 'x = -4 or x = -2', 'x = 8 or x = -1', 'x = 4 or x = -2'], correctIndex: 3, explanation: 'Find two numbers multiplying to −8 and adding to −2: −4 and 2, so (x−4)(x+2)=0, giving x=4 or x=−2. Sign confusion (options A and B), or using the wrong factor pair of 8 (option C), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: 3x² − 5x − 2 = 0', checkMode: 'auto', options: ['x = 2 or x = -1/3', 'x = -2 or x = 1/3', 'x = 2 or x = 1/3', 'x = -1/6 or x = 6'], correctIndex: 0, explanation: 'a×c = 3×(−2) = −6. Two numbers multiplying to −6 and adding to −5: −6 and 1. Split: 3x²−6x+x−2=0 → 3x(x−2)+1(x−2)=0 → (3x+1)(x−2)=0, giving x=−1/3 or x=2. Sign errors (options B and C), or using the wrong factor pair of 6 (option D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 3x = 18', checkMode: 'auto', options: ['x = -3 or x = 6', 'x = 3 or x = -6', 'x = -3 or x = -6', 'x = 18 or x = -1'], correctIndex: 1, explanation: 'Rearrange: x²+3x−18=0. Two numbers multiplying to −18 and adding to 3: 6 and −3, so (x+6)(x−3)=0, giving x=−6 or x=3. Sign confusion (options A and C), or using the wrong factor pair of 18 (option D), are common mistakes.' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 11 and x − y = 5', checkMode: 'auto', options: ['x=3,y=8', 'x=8,y=2', 'x=8,y=3', 'x=11,y=0'], correctIndex: 2, explanation: 'Add the equations: 2x = 16, so x = 8. Substitute into x + y = 11: 8 + y = 11, so y = 3. Swapping x and y (option A), or an arithmetic slip (options B and D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = 2x + 1 and 2x + y = 13', checkMode: 'auto', options: ['x=3.5,y=8', 'x=7,y=3', 'x=4,y=9', 'x=3,y=7'], correctIndex: 3, explanation: 'Substitute y = 2x + 1 into 2x + y = 13: 2x + 2x + 1 = 13. Combine: 4x + 1 = 13, so 4x = 12, x = 3. Substitute back: y = 2(3) + 1 = 7. A sign slip when substituting (option A), or swapping which variable is which (option B), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 3x + 2y = 18 and 3x − y = 3', checkMode: 'auto', options: ['x=8/3,y=5', 'x=1,y=5', 'x=8/3,y=-5', 'x=8/3,y=6'], correctIndex: 0, explanation: 'Subtract the second equation from the first: (3x + 2y) − (3x − y) = 18 − 3, so 3y = 15, y = 5. Substitute y = 5 into 3x − y = 3: 3x − 5 = 3, so 3x = 8, x = 8/3. A sign error when substituting back (option C), or an arithmetic slip (option D), are common mistakes.' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 24 and a difference of 8. What are the two numbers?', checkMode: 'auto', options: ['17 and 7', '16 and 8', '12 and 12', '16 and 9'], correctIndex: 1, explanation: 'Let the numbers be x and y, with x > y. x + y = 24 and x − y = 8. Add the equations: 2x = 32, so x = 16. Substitute into x + y = 24: 16 + y = 24, so y = 8. The numbers are 16 and 8. Forgetting to use both equations together (option C), or an arithmetic slip when adding (option A), are common mistakes.' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 2x − 7 > 9', checkMode: 'auto', options: ['x < 8', 'x > 16', 'x > 8', 'x > -8'], correctIndex: 2, explanation: 'Add 7 to both sides: 2x > 16. Divide by 2: x > 8 (no flip needed since we divided by a positive number). Flipping the inequality unnecessarily (option A), or forgetting to divide by 2 (option B), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: −3x + 4 ≥ 19', checkMode: 'auto', options: ['x ≥ -5', 'x ≤ 5', 'x ≤ -25', 'x ≤ -5'], correctIndex: 3, explanation: 'Subtract 4 from both sides: −3x ≥ 15. Divide both sides by −3 — the inequality sign reverses: x ≤ −5. Forgetting to flip the inequality sign when dividing by a negative number (option A) is the classic mistake here.' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 8 − 3x ≤ 2(x + 4). Describe how you would represent the solution set on a number line.', checkMode: 'auto', options: ['x ≥ 0', 'x ≥ 4/5', 'x ≤ 0', 'x ≥ 1'], correctIndex: 0, explanation: 'Expand the right side: 8 − 3x ≤ 2x + 8. Subtract 8 from both sides: −3x ≤ 2x. Subtract 2x: −5x ≤ 0. Divide by −5 — the sign reverses: x ≥ 0. Forgetting to distribute the 2 across both terms in the bracket (option B), or forgetting to flip the inequality when dividing by −5 (option C), are common mistakes. On a number line this is shown with a closed (filled) circle at 0 and shading extending right toward positive infinity, since 0 itself is included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 3 and y = x² − 3', checkMode: 'auto', options: ['x=-3,y=0 or x=2,y=5', 'x=3,y=6 or x=-2,y=1', 'x=3,y=1 or x=-2,y=6', 'x=3,y=6 or x=-2,y=2'], correctIndex: 1, explanation: 'Set x + 3 = x² − 3, so x² − x − 6 = 0. Factorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2. When x = 3: y = 6. When x = −2: y = 1. Check: 3² − 3 = 6 ✓ and (−2)² − 3 = 1 ✓. Sign errors in the factoring (option A), or swapping the paired y-values (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 4x − 3 and y = x² + x − 3', checkMode: 'auto', options: ['x=0,y=-3 or x=-3,y=-15', 'x=0,y=9 or x=3,y=-3', 'x=0,y=-3 or x=3,y=9', 'x=0,y=-3 or x=3,y=10'], correctIndex: 2, explanation: 'Set 4x − 3 = x² + x − 3, so x² − 3x = 0. Factorise: x(x − 3) = 0, so x = 0 or x = 3. When x = 0: y = −3. When x = 3: y = 9. Check: 0² + 0 − 3 = −3 ✓ and 3² + 3 − 3 = 9 ✓. A sign error on the second root (option A), or swapping the paired y-values (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 2 and y = x² + x − 6', checkMode: 'auto', options: ['x=2√2, y=-2√2+2 or x=-2√2, y=2√2+2', 'x=√6, y=√6+2 or x=-√6, y=-√6+2', 'x=2√2, y=2√2 or x=-2√2, y=-2√2', 'x=2√2, y=2√2+2 or x=-2√2, y=-2√2+2'], correctIndex: 3, explanation: 'From the first equation substitute into the second: x + 2 = x² + x − 6. Simplify: 2 = x² − 6, so x² = 8, x = ±√8 = ±2√2. When x = 2√2: y = 2√2 + 2. When x = −2√2: y = −2√2 + 2. Swapping the paired y-values (option A), or an arithmetic slip in the constant term (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 3x + y = 11 and y = x² − 2x − 1', checkMode: 'auto', options: ['x=3,y=2 or x=-4,y=23', 'x=-3,y=20 or x=4,y=-1', 'x=3,y=23 or x=-4,y=2', 'x=3,y=2 or x=-4,y=22'], correctIndex: 0, explanation: 'From the first equation, y = 11 − 3x. Substitute: 11 − 3x = x² − 2x − 1. Rearrange: x² + x − 12 = 0. Factorise: (x + 4)(x − 3) = 0, so x = −4 or x = 3. When x = 3: y = 2. When x = −4: y = 23. Check: 3² − 2(3) − 1 = 2 ✓ and (−4)² − 2(−4) − 1 = 23 ✓. A sign error in the factoring (option B), or swapping the paired y-values (option C), are common mistakes.' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 4 cm more than its width. If the perimeter is 28 cm, form an equation in terms of the width w and solve for w.', checkMode: 'auto', options: ['w = 12', 'w = 5', 'w = 9', 'w = 6'], correctIndex: 1, explanation: 'Perimeter = 2(length + width) = 2((w + 4) + w) = 28. Simplify: 2(2w + 4) = 28, so 4w + 8 = 28. Subtract 8: 4w = 20. Divide by 4: w = 5. Forgetting the factor of 2 in the perimeter formula (option A), or reporting the length instead of the width (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 4, then doubled, gives the same result as the number decreased by 2, then tripled. Find the number.', checkMode: 'auto', options: ['x = 2', 'x = 10', 'x = 14', 'x = 20'], correctIndex: 2, explanation: 'Let the number be x. Equation: 2(x + 4) = 3(x − 2). Expand: 2x + 8 = 3x − 6. Subtract 2x: 8 = x − 6. Add 6: x = 14. Check: 2(14+4)=36 and 3(14-2)=36 ✓. A sign error when expanding (option A), or forgetting to distribute fully (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'A venue charges a set-up fee of R800 plus R25 per guest for a Grade 10 farewell. The committee has a budget of R3 800. Form an inequality for the number of guests g they can afford, and solve for g.', checkMode: 'auto', options: ['g ≤ 152', 'g ≤ 128', 'g ≥ 120', 'g ≤ 120'], correctIndex: 3, explanation: 'Total cost: 800 + 25g ≤ 3800. Subtract 800: 25g ≤ 3000. Divide by 25: g ≤ 120. The committee can afford at most 120 guests. Forgetting to subtract the set-up fee first (option A), or flipping the inequality unnecessarily (option C), are common mistakes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Linear equations with brackets / fractions (positions 0-2)
        { difficulty: 'Easy', question: 'Solve for x: 5(x − 2) = 25', checkMode: 'auto', options: ['x = 7', 'x = 5.4', 'x = 3', 'x = 8'], correctIndex: 0, explanation: 'Expand: 5x − 10 = 25. Add 10 to both sides: 5x = 35. Divide by 5: x = 7. Forgetting to distribute the 5 across the bracket (option B), or a sign slip when isolating x (option C), are common mistakes.' },
        { difficulty: 'Easy-Medium', question: 'Solve for x: 7x − 4(x − 1) = 22', checkMode: 'auto', options: ['x = 26/3', 'x = 6', 'x = 8', 'x = 18'], correctIndex: 1, explanation: 'Expand (the minus sign flips both signs inside the bracket): 7x − 4x + 4 = 22. Combine like terms: 3x + 4 = 22. Subtract 4: 3x = 18. Divide by 3: x = 6. Forgetting to distribute the negative sign onto every term in the bracket (option A) is the classic mistake here.' },
        { difficulty: 'Medium', question: `Solve for x: ${frac('4x − 3', '5')} = ${frac('x + 6', '2')}`, checkMode: 'auto', options: ['x = 12/7', 'x = -8', 'x = 12', 'x = -33'], correctIndex: 2, explanation: 'The LCM of 5 and 2 is 10. Multiply every term by 10: 2(4x − 3) = 5(x + 6). Expand: 8x − 6 = 5x + 30. Subtract 5x: 3x − 6 = 30. Add 6: 3x = 36. Divide by 3: x = 12. Forgetting to multiply both sides by the correct LCM factor, or a sign error when expanding, are common mistakes.' },

        // Block B — Quadratic equations by factorisation (positions 3-5)
        { difficulty: 'Easy', question: 'Solve for x: x² − 4x − 21 = 0', checkMode: 'auto', options: ['x = -7 or x = 3', 'x = -7 or x = -3', 'x = 21 or x = -1', 'x = 7 or x = -3'], correctIndex: 3, explanation: 'Find two numbers multiplying to −21 and adding to −4: −7 and 3, so (x−7)(x+3)=0, giving x=7 or x=−3. Sign confusion (options A and B), or using the wrong factor pair of 21 (option C), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: 4x² − 4x − 3 = 0', checkMode: 'auto', options: ['x = 3/2 or x = -1/2', 'x = -3/2 or x = 1/2', 'x = 3/2 or x = 1/2', 'x = 1/4 or x = -3'], correctIndex: 0, explanation: 'a×c = 4×(−3) = −12. Two numbers multiplying to −12 and adding to −4: −6 and 2. Split: 4x²−6x+2x−3=0 → 2x(2x−3)+1(2x−3)=0 → (2x+1)(2x−3)=0, giving x=−1/2 or x=3/2. Sign errors (options B and C), or using the wrong factor pair of 12 (option D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: x² + 2x = 24', checkMode: 'auto', options: ['x = -4 or x = 6', 'x = 4 or x = -6', 'x = -4 or x = -6', 'x = 24 or x = -1'], correctIndex: 1, explanation: 'Rearrange: x²+2x−24=0. Two numbers multiplying to −24 and adding to 2: 6 and −4, so (x+6)(x−4)=0, giving x=−6 or x=4. Sign confusion (options A and C), or using the wrong factor pair of 24 (option D), are common mistakes.' },

        // Block C — Simultaneous linear equations (positions 6-9)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: x + y = 14 and x − y = 2', checkMode: 'auto', options: ['x=6,y=8', 'x=8,y=5', 'x=8,y=6', 'x=14,y=0'], correctIndex: 2, explanation: 'Add the equations: 2x = 16, so x = 8. Substitute into x + y = 14: 8 + y = 14, so y = 6. Swapping x and y (option A), or an arithmetic slip (options B and D), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y using substitution: y = 3x − 4 and x + y = 12', checkMode: 'auto', options: ['x=2,y=2', 'x=8,y=4', 'x=5,y=11', 'x=4,y=8'], correctIndex: 3, explanation: 'Substitute y = 3x − 4 into x + y = 12: x + 3x − 4 = 12. Combine: 4x − 4 = 12, so 4x = 16, x = 4. Substitute back: y = 3(4) − 4 = 8. A sign slip when substituting (option A), or swapping which variable is which (option B), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y using elimination: 4x + 3y = 26 and 4x − y = 6', checkMode: 'auto', options: ['x=2.75,y=5', 'x=1,y=6', 'x=2.75,y=-5', 'x=2.75,y=6'], correctIndex: 0, explanation: 'Subtract the second equation from the first: (4x + 3y) − (4x − y) = 26 − 6, so 4y = 20, y = 5. Substitute y = 5 into 4x − y = 6: 4x − 5 = 6, so 4x = 11, x = 2.75. A sign error when substituting back (option C), or an arithmetic slip (option D), are common mistakes.' },
        { difficulty: 'Hard', question: 'Two numbers have a sum of 30 and a difference of 12. What are the two numbers?', checkMode: 'auto', options: ['22 and 8', '21 and 9', '15 and 15', '21 and 10'], correctIndex: 1, explanation: 'Let the numbers be x and y, with x > y. x + y = 30 and x − y = 12. Add the equations: 2x = 42, so x = 21. Substitute into x + y = 30: 21 + y = 30, so y = 9. The numbers are 21 and 9. Forgetting to use both equations together (option C), or an arithmetic slip when adding (option A), are common mistakes.' },

        // Block D — Linear inequalities, incl. sign-flip and number-line description (positions 10-12)
        { difficulty: 'Easy', question: 'Solve for x: 4x − 3 > 13', checkMode: 'auto', options: ['x < 4', 'x > 16', 'x > 4', 'x > -4'], correctIndex: 2, explanation: 'Add 3 to both sides: 4x > 16. Divide by 4: x > 4 (no flip needed since we divided by a positive number). Flipping the inequality unnecessarily (option A), or forgetting to divide by 4 (option B), are common mistakes.' },
        { difficulty: 'Medium', question: 'Solve for x: −5x + 2 ≤ 22', checkMode: 'auto', options: ['x ≤ -4', 'x ≥ 4', 'x ≥ -20', 'x ≥ -4'], correctIndex: 3, explanation: 'Subtract 2 from both sides: −5x ≤ 20. Divide both sides by −5 — the inequality sign reverses: x ≥ −4. Forgetting to flip the inequality sign when dividing by a negative number (option A) is the classic mistake here.' },
        { difficulty: 'Medium-Hard', question: 'Solve for x: 10 − x ≥ 2(x − 1). Describe how you would represent the solution set on a number line.', checkMode: 'auto', options: ['x ≤ 4', 'x ≤ 11/3', 'x ≥ 4', 'x ≤ 3'], correctIndex: 0, explanation: 'Expand the right side: 10 − x ≥ 2x − 2. Add x to both sides: 10 ≥ 3x − 2. Add 2: 12 ≥ 3x. Divide by 3: 4 ≥ x, i.e. x ≤ 4. Forgetting to distribute the 2 across both terms in the bracket (option B), or flipping the inequality unnecessarily when dividing by a positive number (option C), are common mistakes. On a number line this is shown with a closed (filled) circle at 4 and shading extending left toward negative infinity, since 4 itself is included.' },

        // Block E — Simultaneous linear-quadratic systems (positions 13-16)
        { difficulty: 'Medium', question: 'Solve simultaneously for x and y: y = x + 1 and y = x² − 5', checkMode: 'auto', options: ['x=-3,y=-2 or x=2,y=3', 'x=3,y=4 or x=-2,y=-1', 'x=3,y=-1 or x=-2,y=4', 'x=3,y=4 or x=-2,y=-3'], correctIndex: 1, explanation: 'Set x + 1 = x² − 5, so x² − x − 6 = 0. Factorise: (x − 3)(x + 2) = 0, so x = 3 or x = −2. When x = 3: y = 4. When x = −2: y = −1. Check: 3² − 5 = 4 ✓ and (−2)² − 5 = −1 ✓. Sign errors in the factoring (option A), or swapping the paired y-values (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'Solve simultaneously for x and y: y = 5x − 4 and y = x² + 2x − 4', checkMode: 'auto', options: ['x=0,y=-4 or x=-3,y=-19', 'x=0,y=11 or x=3,y=-4', 'x=0,y=-4 or x=3,y=11', 'x=0,y=-4 or x=3,y=12'], correctIndex: 2, explanation: 'Set 5x − 4 = x² + 2x − 4, so x² − 3x = 0. Factorise: x(x − 3) = 0, so x = 0 or x = 3. When x = 0: y = −4. When x = 3: y = 11. Check: 0² + 2(0) − 4 = −4 ✓ and 3² + 2(3) − 4 = 11 ✓. A sign error on the second root (option A), or swapping the paired y-values (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y, leaving answers in simplest surd form: y = x + 5 and y = x² + x − 1', checkMode: 'auto', options: ['x=√6, y=-√6+5 or x=-√6, y=√6+5', 'x=2, y=7 or x=-2, y=3', 'x=√6, y=√6 or x=-√6, y=-√6', 'x=√6, y=√6+5 or x=-√6, y=-√6+5'], correctIndex: 3, explanation: 'From the first equation substitute into the second: x + 5 = x² + x − 1. Simplify: 5 = x² − 1, so x² = 6, x = ±√6. When x = √6: y = √6 + 5. When x = −√6: y = −√6 + 5. Swapping the paired y-values (option A), or an arithmetic slip in the constant term (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'Solve simultaneously for x and y: 2x + y = 9 and y = x² − x − 3', checkMode: 'auto', options: ['x=3,y=3 or x=-4,y=17', 'x=-3,y=15 or x=4,y=1', 'x=3,y=17 or x=-4,y=3', 'x=3,y=3 or x=-4,y=16'], correctIndex: 0, explanation: 'From the first equation, y = 9 − 2x. Substitute: 9 − 2x = x² − x − 3. Rearrange: x² + x − 12 = 0. Factorise: (x + 4)(x − 3) = 0, so x = −4 or x = 3. When x = 3: y = 9 − 2(3) = 3. When x = −4: y = 9 − 2(−4) = 17. Check: 3² − 3 − 3 = 3 ✓ and (−4)² − (−4) − 3 = 17 ✓. A sign error in the factoring (option B), or swapping the paired y-values (option C), are common mistakes.' },

        // Block F — Word problems and literal-equation style applications (positions 17-19)
        { difficulty: 'Medium', question: 'The length of a rectangle is 6 cm more than its width. If the perimeter is 40 cm, form an equation in terms of the width w and solve for w.', checkMode: 'auto', options: ['w = 17', 'w = 7', 'w = 13', 'w = 8'], correctIndex: 1, explanation: 'Perimeter = 2(length + width) = 2((w + 6) + w) = 40. Simplify: 2(2w + 6) = 40, so 4w + 12 = 40. Subtract 12: 4w = 28. Divide by 4: w = 7. Forgetting the factor of 2 in the perimeter formula (option A), or reporting the length instead of the width (option C), are common mistakes.' },
        { difficulty: 'Medium-Hard', question: 'A number increased by 5, then doubled, gives the same result as the number decreased by 3, then tripled. Find the number.', checkMode: 'auto', options: ['x = 1', 'x = 14', 'x = 19', 'x = 25'], correctIndex: 2, explanation: 'Let the number be x. Equation: 2(x + 5) = 3(x − 3). Expand: 2x + 10 = 3x − 9. Subtract 2x: 10 = x − 9. Add 9: x = 19. Check: 2(19+5)=48 and 3(19-3)=48 ✓. A sign error when expanding (option A), or forgetting to distribute fully (option B), are common mistakes.' },
        { difficulty: 'Hard', question: 'A conference centre charges a set-up fee of R600 plus R20 per delegate. The organiser has a budget of R2 600. Form an inequality for the number of delegates d they can afford, and solve for d.', checkMode: 'auto', options: ['d ≤ 130', 'd ≤ 110', 'd ≥ 100', 'd ≤ 100'], correctIndex: 3, explanation: 'Total cost: 600 + 20d ≤ 2600. Subtract 600: 20d ≤ 2000. Divide by 20: d ≤ 100. The organiser can afford at most 100 delegates. Forgetting to subtract the set-up fee first (option A), or flipping the inequality unnecessarily (option C), are common mistakes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered linear and quadratic equations, simultaneous systems, and inequalities.' },
        { minScore: 14, message: 'Great work! Review any missed questions on simultaneous systems or inequalities and try again.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples on factorising and solving simultaneous equations, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
