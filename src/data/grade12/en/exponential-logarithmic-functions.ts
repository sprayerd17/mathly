import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// horizontal asymptote / change of base → red    (#dc2626)
// base / product law                    → blue   (#2563eb)
// growth (b>1) / result / power law     → green  (#16a34a)
// decay (0<b<1) / exponent / quotient   → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponential and Logarithmic Functions',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: EXPONENTIAL FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-exponential-functions',
      title: 'Revision — Exponential Functions',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Before working with logarithms, we revise exponential functions of the form <strong>y = a · bˣ + q</strong> (where b &gt; 0, b ≠ 1). Understanding the role of each parameter is essential for the work that follows.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('horizontal asymptote')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('growth (b > 1)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('decay (0 < b < 1)')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key properties of y = a · bˣ + q</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Horizontal asymptote</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The line <strong>y = q</strong>. The graph approaches this line as x → ±∞ but never crosses it.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Growth (b &gt; 1)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When b &gt; 1 the function <strong>increases</strong> as x increases — the graph rises from left to right.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Decay (0 &lt; b &lt; 1)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When 0 &lt; b &lt; 1 the function <strong>decreases</strong> as x increases — the graph falls from left to right.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">y-intercept</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Set x = 0: y = a · b⁰ + q = <strong>a + q</strong>, since any non-zero base to the power 0 equals 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why revise this now?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Logarithms are the <em>inverse</em> of exponential functions. The better you understand the exponential graph and its asymptote, the easier it is to sketch and interpret the corresponding logarithmic graph.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sketch y = 2ˣ + 1 by finding the horizontal asymptote and y-intercept.',
          answer: `${re('Horizontal asymptote: y = 1')}; y-intercept: (0, 2); the graph ${gr('grows')} as x increases`,
          steps: [
            `${re('Horizontal asymptote:')} q = 1, so the asymptote is the line <strong>y = 1</strong>. The graph approaches y = 1 but never crosses it.`,
            `<strong>y-intercept:</strong> Set x = 0 → y = 2⁰ + 1 = 1 + 1 = <strong>2</strong>. The graph passes through the point (0, 2).`,
            `<strong>Behaviour:</strong> Since b = 2 and ${gr('2 > 1')}, the function ${gr('grows')} — the graph rises steeply as x increases and flattens toward y = 1 as x → −∞.`,
          ],
        },
        {
          question: 'Sketch y = 3 · (0.5)ˣ − 2 by finding the horizontal asymptote and y-intercept.',
          answer: `${re('Horizontal asymptote: y = −2')}; y-intercept: (0, 1); the graph ${or('decays')} as x increases`,
          steps: [
            `${re('Horizontal asymptote:')} q = −2, so the asymptote is the line <strong>y = −2</strong>.`,
            `<strong>y-intercept:</strong> Set x = 0 → y = 3 · (0.5)⁰ − 2 = 3 · 1 − 2 = <strong>1</strong>. The graph passes through the point (0, 1).`,
            `<strong>Behaviour:</strong> Since b = 0.5 and ${or('0 < 0.5 < 1')}, the function ${or('decays')} — the graph falls as x increases and approaches y = −2 from above.`,
          ],
        },
        {
          question: 'Sipho compares y = 4ˣ to y = 4ˣ − 3. Describe the relationship between the two graphs.',
          answer: `y = 4ˣ − 3 is y = 4ˣ shifted 3 units down; the ${re('horizontal asymptote')} moves from y = 0 to y = −3`,
          steps: [
            `Both functions have the same base b = 4 (${gr('b > 1')}), so both graphs have the same shape and ${gr('growth behaviour')}.`,
            `y = 4ˣ has ${re('horizontal asymptote')} y = 0 (since q = 0).`,
            `y = 4ˣ − 3 subtracts 3 from every y-value — this shifts the entire graph <strong>3 units downward</strong>. Its ${re('horizontal asymptote')} moves from y = 0 to <strong>y = −3</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the exponential function y = a times b to the power x plus q, showing how to identify the horizontal asymptote, y-intercept, and whether the graph grows or decays" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DEFINITION OF A LOGARITHM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-a-logarithm',
      title: 'Definition of a Logarithm',
      icon: '㏒',
      explanation:
        `<p style="margin-bottom:16px;">A logarithm answers the question: <em>"to what power must the base be raised to get this number?"</em> We define <strong>log<sub>b</sub> x = y</strong> to mean <strong>b<sup>y</sup> = x</strong> (where b &gt; 0, b ≠ 1, x &gt; 0). Logarithmic form and exponential form are two ways of expressing the exact same relationship.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('result')}</span>` +
        `</div>` +

        // ── Conversion table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting between forms</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +

        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Logarithmic form</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.6em;font-weight:300;">⟺</div>` +

        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Exponential form</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('b')}<sup>${or('y')}</sup> = ${gr('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── Restrictions ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Restrictions to remember</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${bl('Base b:')} b &gt; 0 and b ≠ 1 — a negative base or a base of 1 makes the logarithm undefined.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${gr('Argument x:')} x &gt; 0 — you cannot take the logarithm of zero or a negative number.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick memory trick</p>` +
        `<p style="margin:0;color:#1e3a8a;">In log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}: the ${bl('base')} on the left stays the ${bl('base')} on the right, the ${or('exponent')} is the answer of the log, and the ${gr('result')} is what you get when you raise the base to that power.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert log₂8 = 3 to exponential form.',
          answer: `${bl('2')}${or('³')} = ${gr('8')}`,
          steps: [
            `The definition: log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')} means ${bl('b')}<sup>${or('y')}</sup> = ${gr('x')}.`,
            `Identify the parts: ${bl('base b = 2')}, ${gr('result x = 8')}, ${or('exponent y = 3')}.`,
            `Exponential form: <strong>${bl('2')}<sup>${or('3')}</sup> = ${gr('8')}</strong>.`,
          ],
        },
        {
          question: 'Convert 5² = 25 to logarithmic form.',
          answer: `log<sub>${bl('5')}</sub> ${gr('25')} = ${or('2')}`,
          steps: [
            `The definition: ${bl('b')}<sup>${or('y')}</sup> = ${gr('x')} means log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}.`,
            `Identify the parts: ${bl('base b = 5')}, ${or('exponent y = 2')}, ${gr('result x = 25')}.`,
            `Logarithmic form: <strong>log<sub>${bl('5')}</sub> ${gr('25')} = ${or('2')}</strong>.`,
          ],
        },
        {
          question: 'Evaluate log₃81.',
          answer: `log<sub>${bl('3')}</sub> ${gr('81')} = ${or('4')}`,
          steps: [
            `We ask: to what ${or('power')} must ${bl('3')} be raised to get ${gr('81')}?`,
            `Work through the powers of ${bl('3')}: 3¹ = 3, 3² = 9, 3³ = 27, <strong>3⁴ = 81</strong>.`,
            `Since ${bl('3')}<sup>${or('4')}</sup> = ${gr('81')}, we have <strong>log<sub>${bl('3')}</sub> ${gr('81')} = ${or('4')}</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the definition of a logarithm and how to convert freely between logarithmic form and exponential form" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — STANDARD LOGARITHM LAWS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'standard-logarithm-laws',
      title: 'Standard Logarithm Laws',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">We use four standard laws to simplify and evaluate logarithmic expressions. These laws hold for any valid base b (b &gt; 0, b ≠ 1) and positive arguments.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('product law')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quotient law')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('power law')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('change of base')}</span>` +
        `</div>` +

        // ── Laws reference ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four laws</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Product law:</strong>&nbsp; log<sub>b</sub>(AB) = log<sub>b</sub>A + log<sub>b</sub>B<br><span style="color:#6b7280;font-size:13px;">A product inside the log splits into a sum of logs.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Quotient law:</strong>&nbsp; log<sub>b</sub>(A/B) = log<sub>b</sub>A − log<sub>b</sub>B<br><span style="color:#6b7280;font-size:13px;">A quotient inside the log splits into a difference of logs.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Power law:</strong>&nbsp; log<sub>b</sub>(Aⁿ) = n · log<sub>b</sub>A<br><span style="color:#6b7280;font-size:13px;">An exponent inside the log moves to the front as a multiplier.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Change of base:</strong>&nbsp; log<sub>b</sub>A = log<sub>c</sub>A / log<sub>c</sub>b<br><span style="color:#6b7280;font-size:13px;">Converts to any new base c — useful for calculator evaluation (use c = 10 or c = e).</span></div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Calculator tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">Scientific calculators have a <strong>log</strong> button (base 10) and a <strong>ln</strong> button (base e). Use the ${re('change of base formula')} to evaluate any other base: log<sub>b</sub>A = log(A) / log(b).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify log₂(8 × 4) using the product law.',
          answer: `${bl('log₂(8 × 4)')} = 5`,
          steps: [
            `${bl('Product law:')} log<sub>2</sub>(8 × 4) = log<sub>2</sub>8 + log<sub>2</sub>4.`,
            `Evaluate each term: log<sub>2</sub>8 = 3 (since 2³ = 8) and log<sub>2</sub>4 = 2 (since 2² = 4).`,
            `Answer: 3 + 2 = <strong>5</strong>.`,
          ],
        },
        {
          question: 'Simplify log₃(81/9) using the quotient law.',
          answer: `${or('log₃(81/9)')} = 2`,
          steps: [
            `${or('Quotient law:')} log<sub>3</sub>(81/9) = log<sub>3</sub>81 − log<sub>3</sub>9.`,
            `Evaluate each term: log<sub>3</sub>81 = 4 (since 3⁴ = 81) and log<sub>3</sub>9 = 2 (since 3² = 9).`,
            `Answer: 4 − 2 = <strong>2</strong>.`,
          ],
        },
        {
          question: 'Simplify log₂(8³) using the power law.',
          answer: `${gr('log₂(8³)')} = 9`,
          steps: [
            `${gr('Power law:')} log<sub>2</sub>(8³) = 3 · log<sub>2</sub>8.`,
            `Evaluate: log<sub>2</sub>8 = 3 (since 2³ = 8).`,
            `Answer: 3 × 3 = <strong>9</strong>.`,
          ],
        },
        {
          question: 'Sipho uses a calculator to evaluate log₅20. Use the change of base formula.',
          answer: `${re('log₅20')} ≈ 1.861`,
          steps: [
            `${re('Change of base formula:')} log<sub>5</sub>20 = log(20) / log(5).`,
            `Using a calculator: log(20) ≈ 1.301 and log(5) ≈ 0.699.`,
            `Answer: 1.301 / 0.699 ≈ <strong>1.861</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating all four logarithm laws — product, quotient, power, and change of base — with worked examples for each" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING LOGARITHMIC AND EXPONENTIAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-log-exp-equations',
      title: 'Solving Logarithmic and Exponential Equations',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">We solve equations involving logarithms or exponentials by converting between forms as needed, using the laws of logarithms to combine or simplify expressions, and applying logs to both sides of an exponential equation when the variable is in the exponent.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('equation form')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('conversion step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution(s)')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x: log₂x = 5.',
          answer: `${gr('x = 32')}`,
          steps: [
            `${or('Convert to exponential form:')} log<sub>2</sub>x = 5 means 2<sup>5</sup> = x.`,
            `${gr('x = 2⁵ = 32')}.`,
          ],
        },
        {
          question: 'Solve for x: 3ˣ = 20.',
          answer: `${gr('x ≈ 2.727')}`,
          steps: [
            `${or('Take log of both sides:')} log(3<sup>x</sup>) = log(20).`,
            `${or('Using the power law:')} x · log 3 = log 20.`,
            `${gr('x = log 20 / log 3 ≈ 2.727')}.`,
          ],
        },
        {
          question: 'Solve for x: log x + log(x − 3) = 1.',
          answer: `${gr('x = 5')} (x = −2 is rejected)`,
          steps: [
            `${or('Combine using the product law:')} log(x(x − 3)) = 1.`,
            `${or('Convert to exponential form:')} x(x − 3) = 10<sup>1</sup> = 10.`,
            `${bl('Expand and rearrange:')} x² − 3x − 10 = 0.`,
            `${bl('Factorise:')} (x − 5)(x + 2) = 0, so x = 5 or x = −2.`,
            `Since the logarithm of a negative number is undefined, x = −2 is rejected. ${gr('Only x = 5 is valid')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving logarithmic and exponential equations — converting between forms, applying log laws, and checking for invalid solutions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE GRAPH OF y = logₐx
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'graph-of-log-function',
      title: 'The Graph of y = logₐx',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">The graph of y = log<sub>a</sub>x is the inverse of y = a<sup>x</sup>, reflected across the line y = x. For a &gt; 1, the graph increases (passing through (1, 0), since log<sub>a</sub>1 = 0 for any base), with a ${re('vertical asymptote')} at x = 0 (the graph never touches or crosses the y-axis, since logs of zero or negative numbers are undefined). For 0 &lt; a &lt; 1, the graph decreases instead.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertical asymptote')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('key points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('increasing / decreasing direction')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sketch y = log₂x by finding key points and the asymptote.',
          answer: `${re('Vertical asymptote: x = 0')}; ${bl('passes through (1, 0) and (2, 1)')}; ${gr('increasing')}`,
          steps: [
            `${re('Vertical asymptote:')} x = 0 — the graph approaches the y-axis but never crosses it.`,
            `${bl('Key point:')} (1, 0), since log<sub>2</sub>1 = 0.`,
            `${bl('Another point:')} (2, 1), since log<sub>2</sub>2 = 1.`,
            `${gr('The graph increases')} steadily as x increases, but very slowly for large x values.`,
          ],
        },
        {
          question: 'Lerato compares y = log₂x to y = log₀.₅x. Describe the difference.',
          answer: `y = log₀.₅x is ${gr('decreasing')} (unlike the ${gr('increasing')} y = log₂x); both share the same ${re('vertical asymptote (x = 0)')} and the same ${bl('point (1, 0)')}`,
          steps: [
            `Since 0.5 &lt; 1, y = log<sub>0.5</sub>x is a ${gr('decreasing function')} — unlike the ${gr('increasing')} y = log<sub>2</sub>x.`,
            `Both graphs share the same ${re('vertical asymptote (x = 0)')} and the same ${bl('key point (1, 0)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video sketching the graph of y equals log base a of x — identifying the vertical asymptote, key points, and comparing increasing versus decreasing cases" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the horizontal asymptote and y-intercept of y = 2ˣ + 3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horizontal asymptote (write as y = ...):',
          correctAnswer: 'y=3',
          correctAnswers: ['y=3', 'y = 3'],
          explanation: 'The horizontal asymptote is y = q. Here q = 3, so the asymptote is y = 3.',
        },
        {
          label: 'b) y-intercept (write as coordinates):',
          correctAnswer: '(0,4)',
          correctAnswers: ['(0,4)', '(0, 4)', '4'],
          explanation: 'Set x = 0: y = 2⁰ + 3 = 1 + 3 = 4. The y-intercept is (0, 4).',
        },
      ],
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the horizontal asymptote of y = 5 · (0.4)ˣ − 1, and state whether the function grows or decays.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horizontal asymptote (write as y = ...):',
          correctAnswer: 'y=-1',
          correctAnswers: ['y=-1', 'y = -1'],
          explanation: 'q = −1, so the horizontal asymptote is y = −1.',
        },
        {
          label: 'b) Growth or decay:',
          correctAnswer: 'decays',
          correctAnswers: ['decays', 'decay'],
          explanation: 'Since b = 0.4 and 0 < 0.4 < 1, the function decays as x increases.',
        },
      ],
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho compares y = 3ˣ to y = 3ˣ + 5. Describe the relationship between the two graphs.',
      answer: 'Both have the same shape and growth, but y = 3ˣ + 5 is shifted 5 units up, moving the asymptote from y = 0 to y = 5.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Convert log₄ 16 = 2 to exponential form.',
      answer: '4² = 16',
      checkMode: 'auto',
      correctAnswer: '4^2=16',
      correctAnswers: ['4^2=16', '4²=16', '4^2 = 16', '4² = 16'],
      explanation: 'log₄ 16 = 2 means the base 4 must be raised to the power 2 to give 16: 4² = 16.',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Convert 6³ = 216 to logarithmic form.',
      answer: 'log₆ 216 = 3',
      checkMode: 'auto',
      correctAnswer: 'log6(216)=3',
      correctAnswers: ['log6(216)=3', 'log6 216=3', 'log_6(216)=3'],
      explanation: '6³ = 216 means log₆ 216 = 3.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Evaluate log₅ 125.',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Ask: to what power must 5 be raised to get 125? 5³ = 125, so log₅ 125 = 3.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says log₂ 0 is equal to 0. Is he correct? Explain.',
      answer: 'No — log of 0 is undefined, since there is no power you can raise a positive base to that gives 0.',
      checkMode: 'self',
    },

    // ── Q8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify log₃(9 × 27) using the product law.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'Product law: log₃(9 × 27) = log₃ 9 + log₃ 27 = 2 + 3 = 5.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Simplify log₂(64 ÷ 8) using the quotient law.',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Quotient law: log₂(64 ÷ 8) = log₂ 64 − log₂ 8 = 6 − 3 = 3.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Simplify log₅(125²) using the power law, showing your working.',
      answer: 'log₅(125²) = 2 · log₅ 125 = 2 × 3 = 6.',
      checkMode: 'self',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Use the change of base formula to evaluate log₇ 50 to 3 decimal places.',
      answer: 'log₇ 50 = log(50) / log(7) ≈ 1.699 / 0.845 ≈ 2.011.',
      checkMode: 'self',
    },

    // ── Q12 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for x: log₃ x = 4.',
      answer: 'x = 81',
      checkMode: 'auto',
      correctAnswer: '81',
      correctAnswers: ['81', 'x=81', 'x = 81'],
      explanation: 'Convert to exponential form: x = 3⁴ = 81.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x: 2ˣ = 15. Give your answer to 3 decimal places.',
      answer: 'x ≈ 3.907',
      checkMode: 'auto',
      correctAnswer: '3.907',
      correctAnswers: ['3.907', '≈3.907', 'x=3.907', 'x ≈ 3.907'],
      explanation: 'Take log of both sides: x · log 2 = log 15. x = log 15 / log 2 ≈ 1.176 / 0.301 ≈ 3.907.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: log x + log(x − 2) = log 15.',
      answer: 'log(x(x − 2)) = log 15. x(x − 2) = 15. x² − 2x − 15 = 0. (x − 5)(x + 3) = 0. x = 5 or x = −3 (rejected, since log of negative is undefined). x = 5.',
      checkMode: 'self',
    },

    // ── Q15 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State the vertical asymptote of y = log₃ x.',
      answer: 'x = 0',
      checkMode: 'auto',
      correctAnswer: 'x=0',
      correctAnswers: ['x=0', 'x = 0'],
      explanation: 'The graph of y = log₃ x has a vertical asymptote at x = 0. Logarithms are undefined for x ≤ 0.',
    },

    // ── Q16 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'For y = log₅ x, state the coordinates of the point where the graph crosses y = 0.',
      answer: '(1, 0)',
      checkMode: 'auto',
      correctAnswer: '(1,0)',
      correctAnswers: ['(1,0)', '(1, 0)', '1,0'],
      explanation: 'Set y = 0: log₅ x = 0 → x = 5⁰ = 1. The graph crosses the x-axis at (1, 0).',
    },

    // ── Q17 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says y = log₀.₃ x is an increasing function. Is she correct? Explain.',
      answer: 'No — since the base 0.3 is between 0 and 1, this is a decreasing function, not increasing.',
      checkMode: 'self',
    },

    // ── Q18 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: log₂(x + 3) = 4.',
      answer: 'Convert to exponential form: x + 3 = 2⁴ = 16. x = 13.',
      checkMode: 'self',
    },

    // ── Q19 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the inverse of f(x) = log₄ x, and explain why this makes sense given the relationship between exponential and logarithmic functions.',
      answer: 'f⁻¹(x) = 4ˣ. This makes sense since logarithmic and exponential functions are inverses of each other by definition — converting between log and exponential form is the same operation as finding the inverse.',
      checkMode: 'self',
    },

    // ── Q20 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x: log(x²) = 4, considering both possible solutions.',
      answer: 'x² = 10⁴ = 10 000. x = ±100 (both values are valid since x² is always positive, regardless of the sign of x).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered exponential and logarithmic functions.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered exponential and logarithmic functions.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
