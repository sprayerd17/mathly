import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → linear function / original function / one-to-one
// green  → quadratic function / inverse function / function (passes test)
// orange → hyperbolic function / swapped variables
// red    → exponential function / not a function
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gy = (t: string) => `<span style="color:#6b7280;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions (Including Inverses)',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: LINEAR, QUADRATIC, HYPERBOLIC AND EXPONENTIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-function-types',
      title: 'Revision — Linear, Quadratic, Hyperbolic and Exponential Functions',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Before working with inverses, we revise the four key function types and their standard forms. ${bl('Linear functions')} y = ax + q produce straight lines, with <em>a</em> as the gradient and <em>q</em> as the y-intercept. ${gr('Quadratic functions')} y = ax² + q produce parabolas, with turning point at (0, q) when unshifted horizontally, opening upward if a &gt; 0 and downward if a &lt; 0. ${or('Hyperbolic functions')} y = a/x + q have a vertical asymptote at x = 0 and horizontal asymptote at y = q. ${re('Exponential functions')} y = a·bˣ + q have a horizontal asymptote at y = q, growing if b &gt; 1 and decaying if 0 &lt; b &lt; 1.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('linear')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quadratic')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hyperbolic')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('exponential')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four standard forms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Linear &nbsp; y = ax + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>a</strong> = gradient (slope of the line)<br><strong>q</strong> = y-intercept<br>Graph: straight line</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Quadratic &nbsp; y = ax² + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>a &gt; 0</strong>: opens upward (smile)<br><strong>a &lt; 0</strong>: opens downward (frown)<br>Turning point at (0, q)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Hyperbolic &nbsp; y = a/x + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vertical asymptote: x = 0<br>Horizontal asymptote: y = q<br>Graph: two branches</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Exponential &nbsp; y = a·bˣ + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>b &gt; 1</strong>: growth curve<br><strong>0 &lt; b &lt; 1</strong>: decay curve<br>Horizontal asymptote: y = q</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why revise these now?</p>` +
        `<p style="margin:0;color:#1e3a8a;">The inverses of all four function types appear in the Grade 12 curriculum. Understanding each function's shape, asymptotes, and key points is essential before reversing them to find their inverses.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Sketch ${bl('y = 2x − 3')} by finding the gradient and y-intercept.`,
          answer: `${bl('Gradient = 2')}, y-intercept = (0, −3), second point (2, 1)`,
          steps: [
            `Identify the form: ${bl('y = ax + q')} where ${bl('a = 2')} and ${bl('q = −3')}.`,
            `${bl('Gradient = 2')} — the line rises by 2 units for every 1 unit across.`,
            `${bl('y-intercept:')} set x = 0 → y = 2(0) − 3 = −3. Plot the point (0, −3).`,
            `Find a second point: let x = 2 → y = 2(2) − 3 = 4 − 3 = 1. Plot the point (2, 1).`,
            `Draw a straight line through (0, −3) and (2, 1). ✓`,
          ],
        },
        {
          question: `Sketch ${gr('y = x² − 4')} by finding the turning point and x-intercepts.`,
          answer: `${gr('Turning point (0, −4)')}, x-intercepts at x = ±2`,
          steps: [
            `Identify the form: ${gr('y = ax² + q')} where ${gr('a = 1')} and ${gr('q = −4')}.`,
            `Since ${gr('a = 1 > 0')}, the parabola opens ${gr('upward')}.`,
            `${gr('Turning point:')} (0, q) = (0, −4). This is the lowest point on the graph.`,
            `${gr('x-intercepts:')} set y = 0 → 0 = x² − 4 → x² = 4 → x = ±2. Plot (−2, 0) and (2, 0).`,
            `Sketch the parabola opening upward through (−2, 0), (0, −4), and (2, 0). ✓`,
          ],
        },
        {
          question: `Sketch ${or('y = 3/x + 1')} by finding both asymptotes.`,
          answer: `${or('Vertical asymptote: x = 0')}, ${or('horizontal asymptote: y = 1')}`,
          steps: [
            `Identify the form: ${or('y = a/x + q')} where ${or('a = 3')} and ${or('q = 1')}.`,
            `${or('Vertical asymptote:')} the denominator is zero when x = 0, so the vertical asymptote is x = 0.`,
            `${or('Horizontal asymptote:')} as x → ±∞, the term 3/x → 0, so y → q = 1. The horizontal asymptote is y = 1.`,
            `Find a point: let x = 1 → y = 3/1 + 1 = 4. Plot (1, 4). Let x = −1 → y = 3/(−1) + 1 = −2. Plot (−1, −2).`,
            `Sketch two branches approaching both asymptotes, passing through (1, 4) and (−1, −2). ✓`,
          ],
        },
        {
          question: `Sketch ${re('y = 2ˣ − 2')} by finding the horizontal asymptote and y-intercept.`,
          answer: `${re('Horizontal asymptote: y = −2')}, y-intercept (0, −1)`,
          steps: [
            `Identify the form: ${re('y = a·bˣ + q')} where ${re('a = 1')}, ${re('b = 2')}, ${re('q = −2')}.`,
            `Since ${re('b = 2 > 1')}, this is an ${re('exponential growth')} curve.`,
            `${re('Horizontal asymptote:')} as x → −∞, 2ˣ → 0, so y → q = −2. The asymptote is y = −2.`,
            `${re('y-intercept:')} set x = 0 → y = 2⁰ − 2 = 1 − 2 = −1. Plot (0, −1).`,
            `Find a second point: let x = 1 → y = 2¹ − 2 = 0. Plot (1, 0).`,
            `Sketch the curve approaching y = −2 from above on the left, rising steeply to the right. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the four function types — linear, quadratic, hyperbolic, and exponential — with their standard forms, key features, and how to sketch each one" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE FORMAL DEFINITION OF A FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-a-function',
      title: 'The Formal Definition of a Function',
      icon: '✓',
      explanation:
        `<p style="margin-bottom:16px;">A function is a relation where every input (x-value) maps to exactly one output (y-value). We formally test this using the <strong>vertical line test</strong> — if any vertical line drawn on a graph crosses the curve more than once, the relation is ${re('not a function')}. We also distinguish ${bl('one-to-one functions')} (where each output also corresponds to exactly one input, passing a horizontal line test too) from ${gr('many-to-one functions')} (where multiple inputs can share the same output).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('function (passes test)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('not a function')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('one-to-one')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two important tests</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertical Line Test</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Draw vertical lines across the graph. If <strong>every</strong> vertical line crosses the graph at most once, it is a ${gr('function')}. If any vertical line crosses it <strong>more than once</strong>, it is ${re('not a function')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horizontal Line Test</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Draw horizontal lines across the graph. If <strong>every</strong> horizontal line crosses the graph at most once, the function is ${bl('one-to-one')}. If any line crosses more than once, it is many-to-one.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Why does this matter for inverses?</p>` +
        `<p style="margin:0;color:#92400e;">Only ${bl('one-to-one functions')} have inverses that are also functions. If a function is many-to-one, its inverse fails the vertical line test and is therefore a relation, not a function — unless we restrict the domain.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is y = x² + 1 a function? Is it one-to-one?',
          answer: `${gr('Yes, it is a function')} (passes the vertical line test). ${re('Not one-to-one')} — it is many-to-one.`,
          steps: [
            `${gr('Vertical line test:')} For every x-value, y = x² + 1 gives exactly one y-value (squaring is well-defined). No vertical line crosses the parabola more than once. ${gr('It is a function.')}`,
            `${bl('Horizontal line test:')} Try the horizontal line y = 5. This crosses the parabola at x = 2 (giving y = 4 + 1 = 5) and at x = −2 (giving y = 4 + 1 = 5).`,
            `Since two different x-values (x = 2 and x = −2) give the same y-value (y = 5), the horizontal line test fails. ${re('It is NOT one-to-one')} — it is a many-to-one function.`,
          ],
        },
        {
          question: 'Sipho checks whether x = y² is a function. What does he find?',
          answer: `${re('x = y² is NOT a function')} — it fails the vertical line test.`,
          steps: [
            `Rearrange to understand the relation: for a given x-value, the equation gives y = ±√x, meaning one input can produce two outputs.`,
            `Example: let x = 4 → y² = 4 → ${re('y = 2 or y = −2')}. A single x-value (x = 4) maps to two different y-values (2 and −2).`,
            `${re('Vertical line test:')} The vertical line x = 4 crosses the graph at (4, 2) and (4, −2) — two points. The vertical line test fails.`,
            `${re('Conclusion:')} x = y² is a relation, not a function, because one input gives two outputs. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the formal definition of a function, the vertical line test, the horizontal line test, and the difference between one-to-one and many-to-one functions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DEFINITION OF THE INVERSE FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-inverse-function',
      title: 'Definition of the Inverse Function',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">The inverse of a function f, written ${gr('f⁻¹')}, reverses the input-output relationship — if ${bl('f(a) = b')}, then ${gr('f⁻¹(b) = a')}. To find an inverse algebraically, we ${or('swap x and y')} in the equation, then solve for y. Importantly, ${gr('f⁻¹(x)')} is different from 1/f(x) — the inverse notation only applies to one-to-one functions, since many-to-one functions would create an inverse that fails the function test itself.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original function')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('swapped variables')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('inverse function')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to find an inverse algebraically</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('original function')} as ${bl('y = f(x)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Swap x and y')} — replace every x with y and every y with x.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Solve for y to express the ${gr('inverse function')} as ${gr('y = f⁻¹(x)')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common misconception: f⁻¹(x) ≠ 1/f(x)</p>` +
        `<p style="margin:0;color:#991b1b;">The notation f⁻¹ means the <strong>inverse function</strong> (swapping inputs and outputs), not the reciprocal. For example, if f(x) = 2x, then f⁻¹(x) = x/2, not 1/(2x).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Find the inverse of ${bl('f(x) = 3x + 1')}.`,
          answer: `${gr('f⁻¹(x) = (x − 1) / 3')}`,
          steps: [
            `Write the ${bl('original function')} as ${bl('y = 3x + 1')}.`,
            `${or('Swap x and y:')} ${or('x = 3y + 1')}.`,
            `Solve for y: subtract 1 from both sides → x − 1 = 3y → divide both sides by 3 → y = (x − 1)/3.`,
            `Write the ${gr('inverse function:')} ${gr('f⁻¹(x) = (x − 1) / 3')}. ✓`,
            `<strong>Check:</strong> Apply f and then f⁻¹: f(2) = 3(2) + 1 = 7, then f⁻¹(7) = (7 − 1)/3 = 6/3 = 2. ✓ The inverse reverses f.`,
          ],
        },
        {
          question: `Lerato says the inverse of ${bl('f(x) = x²')} is f⁻¹(x) = 1/x². Is she correct?`,
          answer: `No — Lerato confused the inverse with the reciprocal. The actual inverse is ${gr('y = ±√x')}, which is not a function.`,
          steps: [
            `Lerato has confused two different things: the ${gr('inverse function')} f⁻¹ (swapping inputs and outputs) and the <strong>reciprocal</strong> 1/f(x) = 1/x².`,
            `To find the correct inverse, write the ${bl('original function:')} ${bl('y = x²')}.`,
            `${or('Swap x and y:')} ${or('x = y²')}.`,
            `Solve for y: y = ±√x.`,
            `This gives ${re('y = ±√x')}, which ${re('fails the vertical line test')} — for any x &gt; 0, there are two outputs (+√x and −√x). The inverse is therefore a relation, not a function (unless we restrict the domain of f).`,
            `<strong>Conclusion:</strong> Lerato is incorrect. f⁻¹(x) ≠ 1/x². The actual inverse is y = ±√x, and because f(x) = x² is many-to-one, its inverse is not a function without a domain restriction. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the definition of an inverse function, how to find it by swapping x and y, and why the inverse of a many-to-one function is not itself a function" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SKETCHING INVERSES OF LINEAR, QUADRATIC AND EXPONENTIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sketching-inverses',
      title: 'Sketching Inverses of Linear, Quadratic and Exponential Functions',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">The graph of ${or('f⁻¹')} is always the ${gy('reflection of f in the line y = x')}. This means every point (a, b) on f corresponds to the point (b, a) on f⁻¹. The behaviour of the inverse depends on the type of original function:</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original function')}</span>` +
        `<span style="background:#f9fafb;border:1px solid #d1d5db;border-radius:6px;padding:3px 10px;font-size:13px;">${gy('y = x  (axis of reflection)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse function')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three function types and their inverses</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Linear &nbsp; y = ax + q</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The inverse is also a ${bl('linear function')}. Swap x and y and solve: the inverse is ${or('y = (x − q) / a')}. Both lines are reflections of each other across ${gy('y = x')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Quadratic &nbsp; y = ax²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A parabola is many-to-one, so its inverse ${re('y = ±√(x/a)')} is NOT a function. We must ${bl('restrict the domain')} (e.g. x ≥ 0) so that only ${or('y = +√(x/a)')} is used.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Exponential &nbsp; y = bˣ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The exponential is one-to-one, so its inverse is the ${or('logarithmic function')} ${or('y = log_b(x)')}. The asymptote and domain/range swap: the vertical asymptote of log is x = 0.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Key insight — points swap across y = x</p>` +
        `<p style="margin:0;color:#14532d;">If the point (a, b) lies on f, then the point (b, a) lies on f⁻¹. The ${gy('line y = x')} is always the mirror line between a function and its inverse when both are drawn on the same set of axes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Sketch ${bl('f(x) = 2x − 4')} and its inverse on the same axes.`,
          answer: `${or('f⁻¹(x) = (x + 4) / 2')}`,
          steps: [
            `Write the ${bl('original function:')} ${bl('y = 2x − 4')}. Key points: set x = 0 → y = −4 giving (0, −4); set y = 0 → 0 = 2x − 4 → x = 2 giving (2, 0).`,
            `${gy('Draw the axis of reflection y = x')} as a dashed grey line. This is the mirror line.`,
            `Find f⁻¹ by swapping x and y: x = 2y − 4. Solve for y: x + 4 = 2y → ${or('y = (x + 4) / 2')}.`,
            `Key points on f⁻¹: the point (0, −4) on f swaps to (−4, 0) on f⁻¹; the point (2, 0) on f swaps to (0, 2) on f⁻¹.`,
            `${bl('f')} passes through (0, −4) and (2, 0). ${or('f⁻¹')} passes through (−4, 0) and (0, 2). Both lines are reflections of each other across ${gy('y = x')}. ✓`,
          ],
        },
        {
          question: `Find the inverse of ${bl('f(x) = x²')} for ${bl('x ≥ 0')} (restricted domain).`,
          answer: `${or('f⁻¹(x) = √x')} (positive root only)`,
          steps: [
            `Without restriction, f(x) = x² is many-to-one (e.g. f(2) = f(−2) = 4), so its full inverse would be y = ±√x, which fails the vertical line test.`,
            `We restrict the domain to ${bl('x ≥ 0')}, keeping only the right-hand branch of the parabola where f is one-to-one.`,
            `Write the restricted function as ${bl('y = x²')} for x ≥ 0. Swap x and y: ${or('x = y²')}.`,
            `Solve for y: y = ±√x. Because we restricted the original domain to x ≥ 0, the output of the inverse must satisfy y ≥ 0, so we take only the ${or('positive root: y = √x')}.`,
            `${or('f⁻¹(x) = √x')} is a valid function with domain x ≥ 0 and range y ≥ 0. Its graph is the reflection of the right-hand branch of the parabola across ${gy('y = x')}. ✓`,
          ],
        },
        {
          question: `Find the inverse of ${bl('f(x) = 2ˣ')}.`,
          answer: `${or('f⁻¹(x) = log₂x')}`,
          steps: [
            `Write the ${bl('original function:')} ${bl('y = 2ˣ')}. This exponential is one-to-one (it passes the horizontal line test), so its inverse is a function.`,
            `Swap x and y: ${or('x = 2ʸ')}.`,
            `Convert from exponential form to logarithmic form: if x = 2ʸ then ${or('y = log₂x')}.`,
            `So ${or('f⁻¹(x) = log₂x')}. The domain of f⁻¹ is x > 0 (corresponding to the range of f), and it has a vertical asymptote at x = 0 (corresponding to the horizontal asymptote y = 0 of f).`,
            `The graph of ${or('f⁻¹(x) = log₂x')} is the reflection of ${bl('f(x) = 2ˣ')} across ${gy('y = x')}. Key point: (0, 1) on f becomes (1, 0) on f⁻¹. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sketch inverses of linear, quadratic, and exponential functions by reflecting across y = x, with worked examples for each type including domain restriction for quadratics" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — gradient and y-intercept of a linear function ──────────────
    {
      difficulty: 'Easy',
      question: 'Find the gradient and y-intercept of y = 5x − 7.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Gradient =',
          correctAnswer: '5',
          explanation: 'y = 5x − 7 is in the form y = ax + q. The coefficient of x is a = 5, so the gradient is 5.',
        },
        {
          label: 'b) y-intercept =',
          correctAnswer: '-7',
          explanation: 'The constant term q = −7, so the y-intercept is −7 (the graph crosses the y-axis at (0, −7)).',
        },
      ],
    },

    // ── Q2 Easy — turning point of a quadratic ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the turning point of y = x² + 6.',
      answer: '(0, 6)',
      checkMode: 'auto',
      correctAnswer: '(0, 6)',
      correctAnswers: ['(0,6)', '(0, 6)'],
      explanation: 'y = x² + 6 is in the form y = ax² + q with q = 6. The turning point is at (0, q) = (0, 6).',
    },

    // ── Q3 Medium — asymptotes of a hyperbolic function ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Find both asymptotes of y = 4/x − 2.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Vertical asymptote:',
          correctAnswer: 'x=0',
          correctAnswers: ['x=0', 'x = 0'],
          explanation: 'The denominator equals zero when x = 0, so the vertical asymptote is x = 0.',
        },
        {
          label: 'b) Horizontal asymptote:',
          correctAnswer: 'y=-2',
          correctAnswers: ['y=-2', 'y = -2'],
          explanation: 'y = a/x + q with q = −2. As x → ±∞, 4/x → 0, so y → −2. The horizontal asymptote is y = −2.',
        },
      ],
    },

    // ── Q4 Medium — asymptote and y-intercept of an exponential function ──────
    {
      difficulty: 'Medium',
      question: 'Find the horizontal asymptote and y-intercept of y = 3ˣ + 1.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horizontal asymptote:',
          correctAnswer: 'y=1',
          correctAnswers: ['y=1', 'y = 1'],
          explanation: 'y = bˣ + q with q = 1. As x → −∞, 3ˣ → 0, so y → 1. The horizontal asymptote is y = 1.',
        },
        {
          label: 'b) y-intercept:',
          correctAnswer: '(0, 2)',
          correctAnswers: ['(0,2)', '(0, 2)', '2'],
          explanation: 'Set x = 0: y = 3⁰ + 1 = 1 + 1 = 2. The y-intercept is (0, 2).',
        },
      ],
    },

    // ── Q5 Easy — vertical line test (yes/no) ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is y = 2x + 5 a function? Answer yes or no.',
      answer: 'Yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes', 'YES'],
      explanation: 'y = 2x + 5 is a linear function. Every x-value gives exactly one y-value, so it passes the vertical line test. It is a function.',
    },

    // ── Q6 Medium — vertical line test with explanation ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Is y² = x a function? Explain your answer.',
      answer: 'No — y² = x is not a function. For any positive x-value, there are two y-values (y = √x and y = −√x). For example, x = 4 gives y = 2 or y = −2. This fails the vertical line test, so it is not a function.',
      checkMode: 'self',
    },

    // ── Q7 Hard — one-to-one vs vertical lines (Sipho) ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all straight lines are one-to-one functions, except for vertical lines. Is he correct? Explain.',
      answer: 'Yes — non-vertical straight lines pass both the vertical and horizontal line tests (each x gives one y, and each y comes from only one x), making them one-to-one; vertical lines fail the vertical line test entirely.',
      checkMode: 'self',
    },

    // ── Q8 Easy — inverse of a linear function ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the inverse of f(x) = 4x − 3.',
      answer: 'f⁻¹(x) = (x + 3) / 4',
      checkMode: 'auto',
      correctAnswer: '(x+3)/4',
      correctAnswers: ['(x+3)/4', '(x + 3)/4', '(x+3) / 4', 'x/4 + 3/4'],
      explanation: 'Step 1: Write y = 4x − 3.\nStep 2: Swap x and y: x = 4y − 3.\nStep 3: Solve for y: x + 3 = 4y → y = (x + 3)/4.\nSo f⁻¹(x) = (x + 3)/4 ✓',
    },

    // ── Q9 Medium — inverse of a linear function with negative gradient ───────
    {
      difficulty: 'Medium',
      question: 'Find the inverse of f(x) = −2x + 6.',
      answer: 'f⁻¹(x) = (6 − x) / 2',
      checkMode: 'auto',
      correctAnswer: '(6-x)/2',
      correctAnswers: ['(6-x)/2', '(6 - x)/2', '-(x-6)/2', '-(x - 6)/2', '3 - x/2', '3-x/2'],
      explanation: 'Step 1: Write y = −2x + 6.\nStep 2: Swap x and y: x = −2y + 6.\nStep 3: Solve for y: x − 6 = −2y → y = (6 − x)/2.\nSo f⁻¹(x) = (6 − x)/2 ✓',
    },

    // ── Q10 Hard — check a student's inverse (Lerato) ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato finds the inverse of f(x) = 5x + 10 and gets f⁻¹(x) = x/5 + 2. Check her answer.',
      answer: 'Swap: x = 5y + 10. Solve: y = (x − 10)/5 = x/5 − 2. Her answer is incorrect — it should be x/5 − 2, not x/5 + 2.',
      checkMode: 'self',
    },

    // ── Q11 Medium — inverse of a quadratic with restricted domain ────────────
    {
      difficulty: 'Medium',
      question: 'Find the inverse of f(x) = x² for x ≤ 0 (restricted domain).',
      answer: 'f⁻¹(x) = −√x',
      checkMode: 'auto',
      correctAnswer: '-√x',
      correctAnswers: ['-√x', '-sqrt(x)', '−√x'],
      explanation: 'Step 1: Write y = x² for x ≤ 0.\nStep 2: Swap x and y: x = y².\nStep 3: Solve for y: y = ±√x. Since the original domain was x ≤ 0, the outputs of f⁻¹ must satisfy y ≤ 0, so we take the negative root: f⁻¹(x) = −√x ✓',
    },

    // ── Q12 Hard — domain restriction for quadratic inverse (Thabo) ───────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the inverse of f(x) = x² + 3 is f⁻¹(x) = √(x − 3), without specifying any domain restriction. Is this fully correct? Explain.',
      answer: 'No — without restricting the original domain of f to x ≥ 0 or x ≤ 0, the inverse relation is not actually a function, since it fails the vertical line test; the domain restriction must be stated.',
      checkMode: 'self',
    },

    // ── Q13 Easy — inverse of an exponential function ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the inverse of f(x) = 3ˣ.',
      answer: 'f⁻¹(x) = log₃x',
      checkMode: 'auto',
      correctAnswer: 'log₃x',
      correctAnswers: ['log₃x', 'log3(x)', 'log_3(x)', 'log_3 x', 'log₃ x'],
      explanation: 'Step 1: Write y = 3ˣ.\nStep 2: Swap x and y: x = 3ʸ.\nStep 3: Convert to logarithmic form: y = log₃x.\nSo f⁻¹(x) = log₃x ✓',
    },

    // ── Q14 Medium — inverse of a logarithmic function ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the inverse of f(x) = log₂x.',
      answer: 'f⁻¹(x) = 2ˣ',
      checkMode: 'auto',
      correctAnswer: '2ˣ',
      correctAnswers: ['2ˣ', '2^x'],
      explanation: 'Step 1: Write y = log₂x.\nStep 2: Swap x and y: x = log₂y.\nStep 3: Convert to exponential form: 2ˣ = y.\nSo f⁻¹(x) = 2ˣ ✓',
    },

    // ── Q15 Hard — reflection axis for f and f⁻¹ (Amahle) ───────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says f and f⁻¹ are always reflections of each other across the y-axis. Is she correct? Explain.',
      answer: 'No — f and f⁻¹ are always reflections of each other across the line y = x, not the y-axis.',
      checkMode: 'self',
    },

    // ── Q16 Hard — find inverse and verify with composition ──────────────────
    {
      difficulty: 'Hard',
      question: 'Find the inverse of f(x) = ½x − 4, then verify your answer by checking that f(f⁻¹(x)) = x.',
      answer: 'f⁻¹(x) = 2x + 8. Check: f(f⁻¹(x)) = ½(2x + 8) − 4 = x + 4 − 4 = x ✓.',
      checkMode: 'self',
    },

    // ── Q17 Hard — not every function has an inverse function (Thabo) ─────────
    {
      difficulty: 'Hard',
      question: 'Thabo says every function has an inverse that is also a function. Is he correct? Explain with a counter-example.',
      answer: 'No — for example f(x) = x² has an inverse relation that is not a function (fails vertical line test) unless the domain is restricted; not all functions have a true inverse function without restriction.',
      checkMode: 'self',
    },

    // ── Q18 Hard — inverse and y-intercepts of both f and f⁻¹ ───────────────
    {
      difficulty: 'Hard',
      question: 'Find the inverse of f(x) = −3x + 9, and state the y-intercept of both f and f⁻¹.',
      answer: 'f⁻¹(x) = (9 − x)/3 = 3 − x/3. f\'s y-intercept: (0, 9). f⁻¹\'s y-intercept: (0, 3).',
      checkMode: 'self',
    },

    // ── Q19 Hard — domain and range swap under inversion (Lerato) ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says the domain of f becomes the range of f⁻¹, and vice versa. Is she correct? Explain why this makes sense.',
      answer: 'Yes — since the inverse swaps inputs and outputs, whatever values were valid inputs (domain) for f become valid outputs (range) for f⁻¹, and vice versa.',
      checkMode: 'self',
    },

    // ── Q20 Hard — defining property of an inverse (Sipho) ───────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says if f(2) = 7, this tells us f⁻¹(7) = 2 directly, without any further calculation needed. Is he correct? Explain.',
      answer: 'Yes — this is the defining property of an inverse function: if f maps 2 to 7, then by definition f⁻¹ must map 7 back to 2, no further calculation required.',
      checkMode: 'self',
    },

    // ── Q21 Hard (Problem-solving) — work backwards from two given conditions to find a and q of a restricted quadratic, hence f⁻¹ ──
    {
      difficulty: 'Hard',
      question: 'A restricted quadratic function is defined as f(x) = ax² + q for x ≥ 0. It is given that the point (3, 3) lies on both f and f⁻¹, and that f(1) = −1. Determine the values of a and q, and hence find f⁻¹(x).',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) a =',
          correctAnswer: '1/2',
          correctAnswers: ['1/2', '0.5', '0,5'],
          explanation: 'Since (3, 3) lies on f, f(3) = 3: a(3)² + q = 3 → 9a + q = 3. We are also given f(1) = −1: a(1)² + q = −1 → a + q = −1. Subtracting the second equation from the first: 8a = 4, so a = 1/2.',
        },
        {
          label: 'b) q =',
          correctAnswer: '-3/2',
          correctAnswers: ['-3/2', '-1.5', '-1,5'],
          explanation: 'Substitute a = 1/2 into a + q = −1: 1/2 + q = −1 → q = −3/2.',
        },
        {
          label: 'c) f⁻¹(x) =',
          correctAnswer: '√(2x+3)',
          correctAnswers: ['√(2x+3)', 'sqrt(2x+3)', '√(2x + 3)'],
          explanation: 'With a = 1/2 and q = −3/2, f(x) = ½x² − 3/2 for x ≥ 0. Swap x and y: x = ½y² − 3/2 → x + 3/2 = ½y² → y² = 2x + 3 → y = ±√(2x + 3). Since the domain of f was x ≥ 0, the range of f⁻¹ must satisfy y ≥ 0, so take the positive root: f⁻¹(x) = √(2x + 3). Check: f⁻¹(3) = √9 = 3, confirming (3, 3) also lies on f⁻¹. ✓',
        },
      ],
    },

    // ── Q22 Hard (Problem-solving) — prove f and f⁻¹ meet on y = x, then use that shortcut instead of the routine swap-and-solve method ──
    {
      difficulty: 'Hard',
      question: 'Given f(x) = 3x − 4, show that any point of intersection of f and f⁻¹ must lie on the line y = x, and use this fact to find the point of intersection WITHOUT first finding the equation of f⁻¹.',
      answer: 'Suppose (x₀, y₀) is a point where the graphs of f and f⁻¹ intersect, so y₀ = f(x₀) and y₀ = f⁻¹(x₀). Applying f to both sides of y₀ = f⁻¹(x₀) gives f(y₀) = x₀. So f(x₀) = y₀ and f(y₀) = x₀. Since f(x) = 3x − 4 is strictly increasing (gradient 3 > 0), if x₀ were less than y₀ then f(x₀) < f(y₀), i.e. y₀ < x₀ — a contradiction; likewise x₀ > y₀ leads to a contradiction. So x₀ = y₀, meaning the intersection point lies on y = x. Since the point lies on both y = x and on f, substitute y = x into f(x) = 3x − 4: x = 3x − 4 → 4 = 2x → x = 2. The point of intersection is (2, 2). Check: f(2) = 3(2) − 4 = 2 ✓, and f⁻¹(x) = (x + 4)/3, so f⁻¹(2) = 6/3 = 2 ✓.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered functions and inverses.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 90, message: 'Outstanding! A perfect score — you have completely mastered this section on functions and inverses.' },
    { minScore: 70, message: 'Excellent work! You have a very strong grasp of functions and inverses. Review any missed parts and you will have it perfect.' },
    { minScore: 50, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 30, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Inverse of a linear function (Easy) | 4-7 Inverse of an exponential
    // function as a log (Easy-Medium) | 8-11 Inverse of a restricted quadratic (Medium) |
    // 12-15 Domain restriction reasoning (Medium-Hard) | 16-19 Function-inverse
    // relationship: point swap, reflection, domain/range swap, composition (Hard)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 6x + 2.', answer: 'f⁻¹(x) = (x − 2) / 6', checkMode: 'auto', correctAnswer: '(x-2)/6', correctAnswers: ['(x-2)/6', '(x − 2)/6', '(x-2) / 6', 'x/6 - 1/3'], explanation: 'Step 1: Write y = 6x + 2.\nStep 2: Swap x and y: x = 6y + 2.\nStep 3: Solve for y: x − 2 = 6y → y = (x − 2)/6.\nSo f⁻¹(x) = (x − 2)/6 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = −4x + 8.', answer: 'f⁻¹(x) = (8 − x) / 4', checkMode: 'auto', correctAnswer: '(8-x)/4', correctAnswers: ['(8-x)/4', '(8 − x)/4', '2-x/4', '2 - x/4'], explanation: 'Step 1: Write y = −4x + 8.\nStep 2: Swap x and y: x = −4y + 8.\nStep 3: Solve for y: x − 8 = −4y → y = (8 − x)/4.\nSo f⁻¹(x) = (8 − x)/4 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 3x − 9.', answer: 'f⁻¹(x) = (x + 9) / 3', checkMode: 'auto', correctAnswer: '(x+9)/3', correctAnswers: ['(x+9)/3', '(x + 9)/3', 'x/3 + 3'], explanation: 'Step 1: Write y = 3x − 9.\nStep 2: Swap x and y: x = 3y − 9.\nStep 3: Solve for y: x + 9 = 3y → y = (x + 9)/3.\nSo f⁻¹(x) = (x + 9)/3 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = ½x + 5.', answer: 'f⁻¹(x) = 2x − 10', checkMode: 'auto', correctAnswer: '2x-10', correctAnswers: ['2x-10', '2x − 10', '2(x-5)', '2(x − 5)'], explanation: 'Step 1: Write y = ½x + 5.\nStep 2: Swap x and y: x = ½y + 5.\nStep 3: Solve for y: x − 5 = ½y → y = 2x − 10.\nSo f⁻¹(x) = 2x − 10 ✓' },

        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = 5ˣ.', answer: 'f⁻¹(x) = log₅x', checkMode: 'auto', correctAnswer: 'log₅x', correctAnswers: ['log₅x', 'log5(x)', 'log_5(x)', 'log_5 x', 'log₅ x'], explanation: 'Step 1: Write y = 5ˣ.\nStep 2: Swap x and y: x = 5ʸ.\nStep 3: Convert to logarithmic form: y = log₅x.\nSo f⁻¹(x) = log₅x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = 10ˣ.', answer: 'f⁻¹(x) = log x', checkMode: 'auto', correctAnswer: 'log x', correctAnswers: ['log x', 'logx', 'log₁₀x', 'log_10(x)', 'log(x)'], explanation: 'Step 1: Write y = 10ˣ.\nStep 2: Swap x and y: x = 10ʸ.\nStep 3: Convert to logarithmic form: y = log₁₀x, usually written simply as log x.\nSo f⁻¹(x) = log x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = log₃x.', answer: 'f⁻¹(x) = 3ˣ', checkMode: 'auto', correctAnswer: '3ˣ', correctAnswers: ['3ˣ', '3^x'], explanation: 'Step 1: Write y = log₃x.\nStep 2: Swap x and y: x = log₃y.\nStep 3: Convert to exponential form: 3ˣ = y.\nSo f⁻¹(x) = 3ˣ ✓' },
        { difficulty: 'Medium', question: 'If f(x) = log₄x, find f⁻¹(x) and then evaluate f⁻¹(3).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '4ˣ', correctAnswers: ['4ˣ', '4^x'], explanation: 'Swap x and y in y = log₄x: x = log₄y. Convert to exponential form: y = 4ˣ. So f⁻¹(x) = 4ˣ.' },
          { label: 'f⁻¹(3) =', correctAnswer: '64', correctAnswers: ['64'], explanation: 'f⁻¹(3) = 4³ = 64. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² for x ≥ 0.', answer: 'f⁻¹(x) = √x', checkMode: 'auto', correctAnswer: '√x', correctAnswers: ['√x', 'sqrt(x)'], explanation: 'Step 1: Write y = x² for x ≥ 0.\nStep 2: Swap x and y: x = y².\nStep 3: Solve for y: y = ±√x. Since the original domain was x ≥ 0, the outputs of f⁻¹ must satisfy y ≥ 0, so take the positive root: f⁻¹(x) = √x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² − 4 for x ≥ 0.', answer: 'f⁻¹(x) = √(x + 4)', checkMode: 'auto', correctAnswer: '√(x+4)', correctAnswers: ['√(x+4)', 'sqrt(x+4)', '√(x + 4)'], explanation: 'Step 1: Write y = x² − 4 for x ≥ 0.\nStep 2: Swap x and y: x = y² − 4.\nStep 3: Solve for y: y² = x + 4 → y = ±√(x + 4). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x + 4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = x² + 1 for x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 1)', checkMode: 'auto', correctAnswer: '-√(x-1)', correctAnswers: ['-√(x-1)', '−√(x − 1)', '-sqrt(x-1)'], explanation: 'Step 1: Write y = x² + 1 for x ≤ 0.\nStep 2: Swap x and y: x = y² + 1.\nStep 3: Solve for y: y² = x − 1 → y = ±√(x − 1). Since x ≤ 0 originally, take the negative root: f⁻¹(x) = −√(x − 1) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = 2x² for x ≥ 0.', answer: 'f⁻¹(x) = √(x / 2)', checkMode: 'auto', correctAnswer: '√(x/2)', correctAnswers: ['√(x/2)', 'sqrt(x/2)'], explanation: 'Step 1: Write y = 2x² for x ≥ 0.\nStep 2: Swap x and y: x = 2y².\nStep 3: Solve for y: y² = x/2 → y = ±√(x/2). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x/2) ✓' },

        { difficulty: 'Hard', question: 'Explain why f(x) = x² must have its domain restricted before it can have an inverse function.', answer: 'f(x) = x² is many-to-one — for example f(2) = f(−2) = 4 — so it fails the horizontal line test. Its full inverse relation y = ±√x fails the vertical line test, so it is not a function unless the domain of f is restricted to make f one-to-one.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the smallest domain restriction (of the form x ≥ 0) that makes f(x) = x² − 6 one-to-one, then find f⁻¹(x) for that restriction.', answer: 'Restrict to x ≥ 0. Then f⁻¹(x) = √(x + 6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the inverse of f(x) = x² + 2 for x ≤ 0 is f⁻¹(x) = √(x − 2). Is this correct? Explain and give the correct inverse.', answer: 'No — since the original domain was x ≤ 0, the outputs of f⁻¹ must be ≤ 0, so the negative root must be used. The correct inverse is f⁻¹(x) = −√(x − 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain why restricting f(x) = x² to x ≥ 0 gives the inverse y = +√x, while restricting it to x ≤ 0 gives the inverse y = −√x.', answer: 'The sign of the root in the inverse must match the restricted domain of the original function, because the range of the inverse equals the domain of the original function. Restricting to x ≥ 0 means f⁻¹ must output values ≥ 0, so the positive root is used; restricting to x ≤ 0 means f⁻¹ must output values ≤ 0, so the negative root is used.', checkMode: 'self' },

        { difficulty: 'Hard', question: 'The point (3, 11) lies on f(x) = 3x + 2. State the corresponding point that must lie on f⁻¹.', answer: '(11, 3)', checkMode: 'auto', correctAnswer: '(11,3)', correctAnswers: ['(11,3)', '(11, 3)'], explanation: 'If (a, b) lies on f, then (b, a) lies on f⁻¹, since the inverse swaps inputs and outputs. So (3, 11) on f gives (11, 3) on f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 3x − 2 is sketched together with f⁻¹ on the same axes, both reflected across the line y = x. The line f passes through the points (0, −2) and (2, 4). Find the equation of f⁻¹.', answer: 'f⁻¹(x) = (x + 2) / 3', checkMode: 'auto', correctAnswer: '(x+2)/3', correctAnswers: ['(x+2)/3', '(x + 2)/3'], explanation: 'Swap x and y in y = 3x − 2: x = 3y − 2. Solve for y: x + 2 = 3y → y = (x + 2)/3. Check with the reflected points: (0, −2) on f swaps to (−2, 0) on f⁻¹, and (2, 4) on f swaps to (4, 2) on f⁻¹ — both satisfy y = (x + 2)/3. So f⁻¹(x) = (x + 2)/3 ✓' },
        { difficulty: 'Hard', question: 'A function f has domain x ≥ 3 and range y ≥ 0. State the domain and range of f⁻¹.', answer: 'Domain of f⁻¹ is x ≥ 0, and range of f⁻¹ is y ≥ 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the inverse of f(x) = 4x − 1, then verify your answer by showing that f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x + 1)/4. Check: f(f⁻¹(x)) = 4·(x + 1)/4 − 1 = (x + 1) − 1 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered finding and reasoning about inverse functions.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 7x − 3.', answer: 'f⁻¹(x) = (x + 3) / 7', checkMode: 'auto', correctAnswer: '(x+3)/7', correctAnswers: ['(x+3)/7', '(x + 3)/7'], explanation: 'Step 1: Write y = 7x − 3.\nStep 2: Swap x and y: x = 7y − 3.\nStep 3: Solve for y: x + 3 = 7y → y = (x + 3)/7.\nSo f⁻¹(x) = (x + 3)/7 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = −2x + 10.', answer: 'f⁻¹(x) = (10 − x) / 2', checkMode: 'auto', correctAnswer: '(10-x)/2', correctAnswers: ['(10-x)/2', '(10 − x)/2', '5-x/2', '5 - x/2'], explanation: 'Step 1: Write y = −2x + 10.\nStep 2: Swap x and y: x = −2y + 10.\nStep 3: Solve for y: x − 10 = −2y → y = (10 − x)/2.\nSo f⁻¹(x) = (10 − x)/2 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 4x − 1.', answer: 'f⁻¹(x) = (x + 1) / 4', checkMode: 'auto', correctAnswer: '(x+1)/4', correctAnswers: ['(x+1)/4', '(x + 1)/4'], explanation: 'Step 1: Write y = 4x − 1.\nStep 2: Swap x and y: x = 4y − 1.\nStep 3: Solve for y: x + 1 = 4y → y = (x + 1)/4.\nSo f⁻¹(x) = (x + 1)/4 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = ⅓x − 2.', answer: 'f⁻¹(x) = 3x + 6', checkMode: 'auto', correctAnswer: '3x+6', correctAnswers: ['3x+6', '3x + 6', '3(x+2)', '3(x + 2)'], explanation: 'Step 1: Write y = ⅓x − 2.\nStep 2: Swap x and y: x = ⅓y − 2.\nStep 3: Solve for y: x + 2 = ⅓y → y = 3x + 6.\nSo f⁻¹(x) = 3x + 6 ✓' },

        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = 2ˣ.', answer: 'f⁻¹(x) = log₂x', checkMode: 'auto', correctAnswer: 'log₂x', correctAnswers: ['log₂x', 'log2(x)', 'log_2(x)', 'log_2 x', 'log₂ x'], explanation: 'Step 1: Write y = 2ˣ.\nStep 2: Swap x and y: x = 2ʸ.\nStep 3: Convert to logarithmic form: y = log₂x.\nSo f⁻¹(x) = log₂x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = 6ˣ.', answer: 'f⁻¹(x) = log₆x', checkMode: 'auto', correctAnswer: 'log₆x', correctAnswers: ['log₆x', 'log6(x)', 'log_6(x)', 'log_6 x', 'log₆ x'], explanation: 'Step 1: Write y = 6ˣ.\nStep 2: Swap x and y: x = 6ʸ.\nStep 3: Convert to logarithmic form: y = log₆x.\nSo f⁻¹(x) = log₆x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = log₅x.', answer: 'f⁻¹(x) = 5ˣ', checkMode: 'auto', correctAnswer: '5ˣ', correctAnswers: ['5ˣ', '5^x'], explanation: 'Step 1: Write y = log₅x.\nStep 2: Swap x and y: x = log₅y.\nStep 3: Convert to exponential form: 5ˣ = y.\nSo f⁻¹(x) = 5ˣ ✓' },
        { difficulty: 'Medium', question: 'If f(x) = log₂x, find f⁻¹(x) and then evaluate f⁻¹(4).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '2ˣ', correctAnswers: ['2ˣ', '2^x'], explanation: 'Swap x and y in y = log₂x: x = log₂y. Convert to exponential form: y = 2ˣ. So f⁻¹(x) = 2ˣ.' },
          { label: 'f⁻¹(4) =', correctAnswer: '16', correctAnswers: ['16'], explanation: 'f⁻¹(4) = 2⁴ = 16. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² for x ≤ 0.', answer: 'f⁻¹(x) = −√x', checkMode: 'auto', correctAnswer: '-√x', correctAnswers: ['-√x', '−√x', '-sqrt(x)'], explanation: 'Step 1: Write y = x² for x ≤ 0.\nStep 2: Swap x and y: x = y².\nStep 3: Solve for y: y = ±√x. Since the original domain was x ≤ 0, the outputs of f⁻¹ must satisfy y ≤ 0, so take the negative root: f⁻¹(x) = −√x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² − 9 for x ≥ 0.', answer: 'f⁻¹(x) = √(x + 9)', checkMode: 'auto', correctAnswer: '√(x+9)', correctAnswers: ['√(x+9)', 'sqrt(x+9)', '√(x + 9)'], explanation: 'Step 1: Write y = x² − 9 for x ≥ 0.\nStep 2: Swap x and y: x = y² − 9.\nStep 3: Solve for y: y² = x + 9 → y = ±√(x + 9). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x + 9) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = x² + 5 for x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 5)', checkMode: 'auto', correctAnswer: '-√(x-5)', correctAnswers: ['-√(x-5)', '−√(x − 5)', '-sqrt(x-5)'], explanation: 'Step 1: Write y = x² + 5 for x ≤ 0.\nStep 2: Swap x and y: x = y² + 5.\nStep 3: Solve for y: y² = x − 5 → y = ±√(x − 5). Since x ≤ 0 originally, take the negative root: f⁻¹(x) = −√(x − 5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = 3x² for x ≥ 0.', answer: 'f⁻¹(x) = √(x / 3)', checkMode: 'auto', correctAnswer: '√(x/3)', correctAnswers: ['√(x/3)', 'sqrt(x/3)'], explanation: 'Step 1: Write y = 3x² for x ≥ 0.\nStep 2: Swap x and y: x = 3y².\nStep 3: Solve for y: y² = x/3 → y = ±√(x/3). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x/3) ✓' },

        { difficulty: 'Hard', question: 'Explain why f(x) = x² + 4 must have its domain restricted before it can have an inverse function.', answer: 'f(x) = x² + 4 is many-to-one — for example f(1) = f(−1) = 5 — so it fails the horizontal line test. Its full inverse relation fails the vertical line test, so it is not a function unless the domain of f is restricted to make f one-to-one.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the smallest domain restriction (of the form x ≥ 0) that makes f(x) = x² − 10 one-to-one, then find f⁻¹(x) for that restriction.', answer: 'Restrict to x ≥ 0. Then f⁻¹(x) = √(x + 10).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the inverse of f(x) = x² + 7 for x ≤ 0 is f⁻¹(x) = √(x − 7). Is this correct? Explain and give the correct inverse.', answer: 'No — since the original domain was x ≤ 0, the outputs of f⁻¹ must be ≤ 0, so the negative root must be used. The correct inverse is f⁻¹(x) = −√(x − 7).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Two students restrict f(x) = x² differently — one to x ≥ 0 and the other to x ≤ 0 — before finding the inverse. Explain why they end up with different signs in front of the square root in f⁻¹.', answer: 'The sign of the root in the inverse must match the restricted domain of the original function, because the range of the inverse equals the domain of the original function. Restricting to x ≥ 0 forces f⁻¹ to output values ≥ 0 (positive root); restricting to x ≤ 0 forces f⁻¹ to output values ≤ 0 (negative root).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'The point (5, 17) lies on f(x) = 3x + 2. State the corresponding point that must lie on f⁻¹.', answer: '(17, 5)', checkMode: 'auto', correctAnswer: '(17,5)', correctAnswers: ['(17,5)', '(17, 5)'], explanation: 'If (a, b) lies on f, then (b, a) lies on f⁻¹, since the inverse swaps inputs and outputs. So (5, 17) on f gives (17, 5) on f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 2x − 6 is sketched together with f⁻¹ on the same axes, both reflected across the line y = x. The line f passes through the points (0, −6) and (3, 0). Find the equation of f⁻¹.', answer: 'f⁻¹(x) = (x + 6) / 2', checkMode: 'auto', correctAnswer: '(x+6)/2', correctAnswers: ['(x+6)/2', '(x + 6)/2'], explanation: 'Swap x and y in y = 2x − 6: x = 2y − 6. Solve for y: x + 6 = 2y → y = (x + 6)/2. Check with the reflected points: (0, −6) on f swaps to (−6, 0) on f⁻¹, and (3, 0) on f swaps to (0, 3) on f⁻¹ — both satisfy y = (x + 6)/2. So f⁻¹(x) = (x + 6)/2 ✓' },
        { difficulty: 'Hard', question: 'A function f has domain x ≥ −1 and range y ≥ 4. State the domain and range of f⁻¹.', answer: 'Domain of f⁻¹ is x ≥ 4, and range of f⁻¹ is y ≥ −1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the inverse of f(x) = 5x + 3, then verify your answer by showing that f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x − 3)/5. Check: f(f⁻¹(x)) = 5·(x − 3)/5 + 3 = (x − 3) + 3 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently find and reason about inverse functions.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, fresh numbers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 8x + 4.', answer: 'f⁻¹(x) = (x − 4) / 8', checkMode: 'auto', correctAnswer: '(x-4)/8', correctAnswers: ['(x-4)/8', '(x − 4)/8'], explanation: 'Step 1: Write y = 8x + 4.\nStep 2: Swap x and y: x = 8y + 4.\nStep 3: Solve for y: x − 4 = 8y → y = (x − 4)/8.\nSo f⁻¹(x) = (x − 4)/8 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = −5x + 15.', answer: 'f⁻¹(x) = (15 − x) / 5', checkMode: 'auto', correctAnswer: '(15-x)/5', correctAnswers: ['(15-x)/5', '(15 − x)/5', '3-x/5', '3 - x/5'], explanation: 'Step 1: Write y = −5x + 15.\nStep 2: Swap x and y: x = −5y + 15.\nStep 3: Solve for y: x − 15 = −5y → y = (15 − x)/5.\nSo f⁻¹(x) = (15 − x)/5 ✓' },
        { difficulty: 'Easy', question: 'Find the inverse of f(x) = 2x − 7.', answer: 'f⁻¹(x) = (x + 7) / 2', checkMode: 'auto', correctAnswer: '(x+7)/2', correctAnswers: ['(x+7)/2', '(x + 7)/2'], explanation: 'Step 1: Write y = 2x − 7.\nStep 2: Swap x and y: x = 2y − 7.\nStep 3: Solve for y: x + 7 = 2y → y = (x + 7)/2.\nSo f⁻¹(x) = (x + 7)/2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = ¼x + 3.', answer: 'f⁻¹(x) = 4x − 12', checkMode: 'auto', correctAnswer: '4x-12', correctAnswers: ['4x-12', '4x − 12', '4(x-3)', '4(x − 3)'], explanation: 'Step 1: Write y = ¼x + 3.\nStep 2: Swap x and y: x = ¼y + 3.\nStep 3: Solve for y: x − 3 = ¼y → y = 4x − 12.\nSo f⁻¹(x) = 4x − 12 ✓' },

        { difficulty: 'Easy-Medium', question: 'Find the inverse of f(x) = 8ˣ.', answer: 'f⁻¹(x) = log₈x', checkMode: 'auto', correctAnswer: 'log₈x', correctAnswers: ['log₈x', 'log8(x)', 'log_8(x)', 'log_8 x', 'log₈ x'], explanation: 'Step 1: Write y = 8ˣ.\nStep 2: Swap x and y: x = 8ʸ.\nStep 3: Convert to logarithmic form: y = log₈x.\nSo f⁻¹(x) = log₈x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = 7ˣ.', answer: 'f⁻¹(x) = log₇x', checkMode: 'auto', correctAnswer: 'log₇x', correctAnswers: ['log₇x', 'log7(x)', 'log_7(x)', 'log_7 x', 'log₇ x'], explanation: 'Step 1: Write y = 7ˣ.\nStep 2: Swap x and y: x = 7ʸ.\nStep 3: Convert to logarithmic form: y = log₇x.\nSo f⁻¹(x) = log₇x ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = log x (base 10).', answer: 'f⁻¹(x) = 10ˣ', checkMode: 'auto', correctAnswer: '10ˣ', correctAnswers: ['10ˣ', '10^x'], explanation: 'Step 1: Write y = log₁₀x.\nStep 2: Swap x and y: x = log₁₀y.\nStep 3: Convert to exponential form: 10ˣ = y.\nSo f⁻¹(x) = 10ˣ ✓' },
        { difficulty: 'Medium', question: 'If f(x) = log₃x, find f⁻¹(x) and then evaluate f⁻¹(2).', answer: '', checkMode: 'auto', parts: [
          { label: 'f⁻¹(x) =', correctAnswer: '3ˣ', correctAnswers: ['3ˣ', '3^x'], explanation: 'Swap x and y in y = log₃x: x = log₃y. Convert to exponential form: y = 3ˣ. So f⁻¹(x) = 3ˣ.' },
          { label: 'f⁻¹(2) =', correctAnswer: '9', correctAnswers: ['9'], explanation: 'f⁻¹(2) = 3² = 9. ✓' },
        ]},

        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² − 1 for x ≥ 0.', answer: 'f⁻¹(x) = √(x + 1)', checkMode: 'auto', correctAnswer: '√(x+1)', correctAnswers: ['√(x+1)', 'sqrt(x+1)', '√(x + 1)'], explanation: 'Step 1: Write y = x² − 1 for x ≥ 0.\nStep 2: Swap x and y: x = y² − 1.\nStep 3: Solve for y: y² = x + 1 → y = ±√(x + 1). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x + 1) ✓' },
        { difficulty: 'Medium', question: 'Find the inverse of f(x) = x² − 16 for x ≥ 0.', answer: 'f⁻¹(x) = √(x + 16)', checkMode: 'auto', correctAnswer: '√(x+16)', correctAnswers: ['√(x+16)', 'sqrt(x+16)', '√(x + 16)'], explanation: 'Step 1: Write y = x² − 16 for x ≥ 0.\nStep 2: Swap x and y: x = y² − 16.\nStep 3: Solve for y: y² = x + 16 → y = ±√(x + 16). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x + 16) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = x² + 3 for x ≤ 0.', answer: 'f⁻¹(x) = −√(x − 3)', checkMode: 'auto', correctAnswer: '-√(x-3)', correctAnswers: ['-√(x-3)', '−√(x − 3)', '-sqrt(x-3)'], explanation: 'Step 1: Write y = x² + 3 for x ≤ 0.\nStep 2: Swap x and y: x = y² + 3.\nStep 3: Solve for y: y² = x − 3 → y = ±√(x − 3). Since x ≤ 0 originally, take the negative root: f⁻¹(x) = −√(x − 3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the inverse of f(x) = 5x² for x ≥ 0.', answer: 'f⁻¹(x) = √(x / 5)', checkMode: 'auto', correctAnswer: '√(x/5)', correctAnswers: ['√(x/5)', 'sqrt(x/5)'], explanation: 'Step 1: Write y = 5x² for x ≥ 0.\nStep 2: Swap x and y: x = 5y².\nStep 3: Solve for y: y² = x/5 → y = ±√(x/5). Since x ≥ 0 originally, take the positive root: f⁻¹(x) = √(x/5) ✓' },

        { difficulty: 'Hard', question: 'Explain why f(x) = x² − 2 must have its domain restricted before it can have an inverse function.', answer: 'f(x) = x² − 2 is many-to-one — for example f(1) = f(−1) = −1 — so it fails the horizontal line test. Its full inverse relation fails the vertical line test, so it is not a function unless the domain of f is restricted to make f one-to-one.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Determine the smallest domain restriction (of the form x ≥ 0) that makes f(x) = x² − 3 one-to-one, then find f⁻¹(x) for that restriction.', answer: 'Restrict to x ≥ 0. Then f⁻¹(x) = √(x + 3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the inverse of f(x) = x² + 9 for x ≤ 0 is f⁻¹(x) = √(x − 9). Is this correct? Explain and give the correct inverse.', answer: 'No — since the original domain was x ≤ 0, the outputs of f⁻¹ must be ≤ 0, so the negative root must be used. The correct inverse is f⁻¹(x) = −√(x − 9).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A parabola f(x) = x² can be restricted to either x ≥ 0 or x ≤ 0 to create an inverse function. Explain how the choice of restriction determines the sign used in f⁻¹.', answer: 'The sign of the root in the inverse must match the restricted domain of the original function, because the range of the inverse equals the domain of the original function. Restricting to x ≥ 0 forces f⁻¹ to output values ≥ 0 (positive root); restricting to x ≤ 0 forces f⁻¹ to output values ≤ 0 (negative root).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'The point (4, 9) lies on f(x) = 2x + 1. State the corresponding point that must lie on f⁻¹.', answer: '(9, 4)', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '(9, 4)'], explanation: 'If (a, b) lies on f, then (b, a) lies on f⁻¹, since the inverse swaps inputs and outputs. So (4, 9) on f gives (9, 4) on f⁻¹. ✓' },
        { difficulty: 'Hard', question: 'f(x) = 4x − 8 is sketched together with f⁻¹ on the same axes, both reflected across the line y = x. The line f passes through the points (0, −8) and (2, 0). Find the equation of f⁻¹.', answer: 'f⁻¹(x) = (x + 8) / 4', checkMode: 'auto', correctAnswer: '(x+8)/4', correctAnswers: ['(x+8)/4', '(x + 8)/4'], explanation: 'Swap x and y in y = 4x − 8: x = 4y − 8. Solve for y: x + 8 = 4y → y = (x + 8)/4. Check with the reflected points: (0, −8) on f swaps to (−8, 0) on f⁻¹, and (2, 0) on f swaps to (0, 2) on f⁻¹ — both satisfy y = (x + 8)/4. So f⁻¹(x) = (x + 8)/4 ✓' },
        { difficulty: 'Hard', question: 'A function f has domain x ≥ 2 and range y ≥ −5. State the domain and range of f⁻¹.', answer: 'Domain of f⁻¹ is x ≥ −5, and range of f⁻¹ is y ≥ 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the inverse of f(x) = 6x − 2, then verify your answer by showing that f(f⁻¹(x)) = x.', answer: 'f⁻¹(x) = (x + 2)/6. Check: f(f⁻¹(x)) = 6·(x + 2)/6 − 2 = (x + 2) − 2 = x ✓.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply inverse function skills — linear, exponential, and restricted quadratic — to a wide range of problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
