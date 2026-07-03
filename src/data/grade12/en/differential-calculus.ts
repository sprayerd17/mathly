import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// indeterminate form   → red     (#dc2626)
// factorised form      → blue    (#2563eb)
// limit / derivative   → green   (#16a34a)
// simplified numerator → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Differential Calculus',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — AN INTUITIVE UNDERSTANDING OF LIMITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'limits-intuitive',
      title: 'An Intuitive Understanding of Limits',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>limit</strong> describes the value that a function approaches as the input approaches a particular value — even if the function is not defined at that exact point. We write lim<sub>x→a</sub> f(x) = L to mean "as x gets closer and closer to <em>a</em>, f(x) gets closer and closer to <em>L</em>". Limits are the foundation of differential calculus, since the derivative is defined as a specific limit.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('indeterminate form')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factorised form')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('limit value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Indeterminate form</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When direct substitution gives 0/0, we cannot read the answer directly — we must simplify first. This is called an <strong>indeterminate form</strong>.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Factorising to find the limit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Factorise the numerator, cancel the common factor causing the 0/0, then substitute to find the limit.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Limit value</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value L that f(x) approaches as x → a. The function need not be defined at x = a for the limit to exist.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Limit notation</p>` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">lim<sub>x→a</sub> f(x) = ${gr('L')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:6px;margin-bottom:0;">"As x approaches a, f(x) approaches ${gr('L')}"</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A limit is about approach, not arrival</p>` +
        `<p style="margin:0;color:#1e3a8a;">The limit describes where f(x) is <em>heading</em>, not necessarily the value at x = a. A function can have a limit at a point where it is undefined or has a hole in the graph.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evaluate lim(x→2) of (x² − 4)/(x − 2).',
          answer: `lim<sub>x→2</sub> (x² − 4)/(x − 2) = ${gr('4')}`,
          steps: [
            `<strong>Direct substitution:</strong> Substitute x = 2: (2² − 4)/(2 − 2) = ${re('0/0')} — this is an ${re('indeterminate form')}. We cannot read the answer directly.`,
            `<strong>Factorise the numerator:</strong> x² − 4 = ${bl('(x − 2)(x + 2)')}. The expression becomes ${bl('(x − 2)(x + 2)')} / (x − 2).`,
            `<strong>Cancel the common factor:</strong> Cancel (x − 2) from numerator and denominator — the expression simplifies to ${bl('x + 2')}.`,
            `<strong>Substitute x = 2:</strong> ${bl('x + 2')} = 2 + 2 = ${gr('4')}.`,
            `<strong>Answer:</strong> lim<sub>x→2</sub> (x² − 4)/(x − 2) = ${gr('4')} ✓`,
          ],
        },
        {
          question: 'Evaluate lim(h→0) of [(x + h)² − x²] / h.',
          answer: `lim<sub>h→0</sub> [(x + h)² − x²] / h = ${gr('2x')}`,
          steps: [
            `<strong>Expand the numerator:</strong> (x + h)² = x² + 2xh + h². So (x + h)² − x² = ${bl('2xh + h²')}.`,
            `<strong>Factor h from the numerator:</strong> ${bl('2xh + h²')} = ${bl('h(2x + h)')}. The expression becomes ${bl('h(2x + h)')} / h.`,
            `<strong>Cancel h:</strong> ${bl('h(2x + h)')} / h = ${bl('2x + h')} (valid since h ≠ 0 when finding the limit).`,
            `<strong>Substitute h = 0:</strong> ${bl('2x + h')} → ${gr('2x')}.`,
            `<strong>Answer:</strong> lim<sub>h→0</sub> [(x + h)² − x²] / h = ${gr('2x')} ✓`,
          ],
        },
        {
          question: 'Sipho says lim(x→3) of (x² − 9)/(x − 3) is undefined since the denominator is 0 at x = 3. Is he correct?',
          answer: `No — the limit exists and equals ${gr('6')}`,
          steps: [
            `<strong>Sipho's error:</strong> He confused "the function is undefined at x = 3" with "the limit does not exist". ${re('These are not the same thing.')} A limit can exist even when the function is undefined at that point.`,
            `<strong>Factorise the numerator:</strong> x² − 9 = ${bl('(x − 3)(x + 3)')}. The expression becomes ${bl('(x − 3)(x + 3)')} / (x − 3).`,
            `<strong>Cancel (x − 3):</strong> The expression simplifies to ${bl('x + 3')}.`,
            `<strong>Substitute x = 3:</strong> ${bl('x + 3')} = 3 + 3 = ${gr('6')}.`,
            `<strong>Conclusion:</strong> Sipho is <strong>incorrect</strong>. lim<sub>x→3</sub> (x² − 9)/(x − 3) = ${gr('6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — direct limit by factorising ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Evaluate lim(x→3) of (x² − 9)/(x − 3).',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Direct substitution gives (9−9)/(3−3) = 0/0 — indeterminate form.\nFactorise numerator: x²−9 = (x−3)(x+3). Cancel (x−3) to get x+3.\nSubstitute x=3: 3+3 = 6 ✓',
        },

        // ── Q2 Medium — limit of a cubic difference quotient ──────────────────
        {
          difficulty: 'Medium',
          question: 'Evaluate lim(h→0) of [(x+h)³ − x³]/h.',
          answer: '3x²',
          checkMode: 'auto',
          correctAnswer: '3x²',
          correctAnswers: ['3x²', '3x^2'],
          explanation: 'Expand (x+h)³ = x³+3x²h+3xh²+h³.\nNumerator: (x³+3x²h+3xh²+h³)−x³ = h(3x²+3xh+h²).\nDivide by h: 3x²+3xh+h².\nAs h→0: 3x² ✓',
        },

        // ── Q3 Hard — conceptual error correction ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says lim(x→2) of (x−2)/(x²−4) is undefined because the numerator and denominator are both zero at x=2. Is he correct? Explain.',
          answer: 'No — factorise denominator: (x−2)(x+2). Cancel (x−2): 1/(x+2). Limit as x→2 = 1/4.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a limit is, how to recognise an indeterminate form, and how to evaluate limits by factorising" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIFFERENTIATION FROM FIRST PRINCIPLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'first-principles',
      title: 'Differentiation from First Principles',
      icon: "f'",
      explanation:
        `<p style="margin-bottom:16px;">The <strong>derivative</strong> of a function f(x), written f'(x) or dy/dx, measures the instantaneous rate of change of f at any point. It is defined using the <strong>first principles formula</strong>: f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h. This formula computes the gradient of the tangent to the curve at any point x by finding the limit of the gradient of a secant line as the two points move infinitely close together.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('f(x+h) substitution')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('simplified numerator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('limit result')}</span>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">First principles formula</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">f'(x) = lim<sub>h→0</sub> [ ${bl('f(x+h)')} − f(x) ] / h</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Applying first principles: step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Substitute f(x+h)')} — Replace every x in the function with (x + h) and expand.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Simplify the numerator')} — Subtract f(x), expand fully, and collect like terms so that all h-free terms cancel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Divide by h')} — Factor h from the numerator and cancel with the denominator. This removes the division by zero.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Take the limit')} — Substitute h = 0 into the simplified expression. The result is f'(x).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always expand fully before cancelling h</p>` +
        `<p style="margin:0;color:#1e3a8a;">The key step is expanding ${bl('f(x+h)')} completely so that all h-free terms cancel with f(x), leaving only terms with h in the numerator. Never try to cancel h before expanding.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the derivative of f(x) = x² from first principles.',
          answer: `f'(x) = ${gr('2x')}`,
          steps: [
            `<strong>Write the formula:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Substitute ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('(x+h)²')} = ${bl('x² + 2xh + h²')}.`,
            `<strong>Subtract f(x):</strong> ${bl('x² + 2xh + h²')} − x² = ${or('2xh + h²')}.`,
            `<strong>Divide by h:</strong> ${or('(2xh + h²)')} / h = ${or('h(2x + h)')} / h = ${or('2x + h')}.`,
            `<strong>Take the limit (h → 0):</strong> ${or('2x + h')} → ${gr('2x')}.`,
            `<strong>Answer:</strong> f'(x) = ${gr('2x')} ✓`,
          ],
        },
        {
          question: 'Find the derivative of f(x) = 3x + 5 from first principles.',
          answer: `f'(x) = ${gr('3')}`,
          steps: [
            `<strong>Write the formula:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Substitute ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('3(x+h) + 5')} = ${bl('3x + 3h + 5')}.`,
            `<strong>Subtract f(x):</strong> (${bl('3x + 3h + 5')}) − (3x + 5) = ${or('3h')}.`,
            `<strong>Divide by h:</strong> ${or('3h')} / h = ${or('3')}.`,
            `<strong>Take the limit (h → 0):</strong> ${or('3')} → ${gr('3')} (constant — no h terms remain).`,
            `<strong>Answer:</strong> f'(x) = ${gr('3')} ✓`,
          ],
        },
        {
          question: 'Find the derivative of f(x) = x³ from first principles.',
          answer: `f'(x) = ${gr('3x²')}`,
          steps: [
            `<strong>Write the formula:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Substitute ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('(x+h)³')}.`,
            `<strong>Expand ${bl('(x+h)³')}:</strong> ${bl('x³ + 3x²h + 3xh² + h³')}.`,
            `<strong>Subtract f(x):</strong> (${bl('x³ + 3x²h + 3xh² + h³')}) − x³ = ${or('3x²h + 3xh² + h³')}.`,
            `<strong>Divide by h:</strong> ${or('h(3x² + 3xh + h²)')} / h = ${or('3x² + 3xh + h²')}.`,
            `<strong>Take the limit (h → 0):</strong> ${or('3x² + 3xh + h²')} → ${gr('3x²')}.`,
            `<strong>Answer:</strong> f'(x) = ${gr('3x²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — derivative of x² from first principles ──────────────────
        {
          difficulty: 'Easy',
          question: 'Find the derivative of f(x) = x² from first principles.',
          answer: "f'(x) = 2x",
          checkMode: 'auto',
          correctAnswer: '2x',
          correctAnswers: ['2x', "f'(x)=2x", "f'(x) = 2x"],
          explanation: "f'(x) = lim(h→0) [(x+h)²−x²]/h\n= lim(h→0) [x²+2xh+h²−x²]/h\n= lim(h→0) [2xh+h²]/h\n= lim(h→0) (2x+h)\n= 2x ✓",
        },

        // ── Q5 Medium — derivative of a linear function from first principles ──
        {
          difficulty: 'Medium',
          question: 'Find the derivative of f(x) = 4x + 7 from first principles.',
          answer: "f'(x) = 4",
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', "f'(x)=4", "f'(x) = 4"],
          explanation: "f'(x) = lim(h→0) [(4(x+h)+7)−(4x+7)]/h\n= lim(h→0) [4x+4h+7−4x−7]/h\n= lim(h→0) 4h/h\n= lim(h→0) 4\n= 4 ✓",
        },

        // ── Q6 Hard — derivative of a quadratic from first principles ─────────
        {
          difficulty: 'Hard',
          question: 'Find the derivative of f(x) = x² + 3x from first principles, showing all steps.',
          answer: "f'(x) = lim(h→0) [(x+h)²+3(x+h)−x²−3x]/h = lim(h→0) [2xh+h²+3h]/h = lim(h→0) (2x+h+3) = 2x+3.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating differentiation from first principles for f(x) = x² and f(x) = x³ step by step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — RULES OF DIFFERENTIATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'differentiation-rules',
      title: 'Rules of Differentiation',
      icon: 'd/dx',
      explanation:
        `<p style="margin-bottom:16px;">Rather than always using first principles, we apply the following rules to differentiate polynomials quickly and efficiently. <strong>Note:</strong> expressions must be expanded or simplified into separate terms before differentiating.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('power rule applied')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('simplified expression')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('derivative')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Constant rule</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (c) = 0</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The derivative of any constant is zero.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Power rule</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (xⁿ) = nxⁿ⁻¹</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Multiply by the exponent, then reduce the exponent by 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Constant multiple rule</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (c·f(x)) = c·f'(x)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">The constant factor carries through unchanged.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Sum / difference rule</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx [f ± g] = f' ± g'</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Differentiate each term separately and combine.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Simplify before you differentiate</p>` +
        `<p style="margin:0;color:#991b1b;">If the expression involves fractions or products, expand or rewrite it as a sum of individual terms (using negative exponents where needed) before applying the rules. You cannot apply the rules term-by-term to a product or fraction without simplifying first.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Differentiate f(x) = 5x³ − 4x² + 7x − 3.',
          answer: `f'(x) = ${gr('15x² − 8x + 7')}`,
          steps: [
            `<strong>Apply the power rule to each term:</strong>`,
            `${bl('d/dx(5x³)')} = ${bl('5 · 3 · x²')} = 15x²`,
            `${bl('d/dx(−4x²)')} = ${bl('−4 · 2 · x')} = −8x`,
            `${bl('d/dx(7x)')} = ${bl('7 · 1')} = 7`,
            `${bl('d/dx(−3)')} = 0 (constant rule)`,
            `<strong>Combine all terms:</strong> f'(x) = ${gr('15x² − 8x + 7')} ✓`,
          ],
        },
        {
          question: 'Differentiate f(x) = (x² + 3) / x.',
          answer: `f'(x) = ${gr('1 − 3/x²')}`,
          steps: [
            `<strong>Simplify first — divide each term by x:</strong>`,
            `(x² + 3) / x = x²/x + 3/x = ${or('x + 3x⁻¹')}`,
            `<strong>Apply the power rule to each term of ${or('x + 3x⁻¹')}:</strong>`,
            `${bl('d/dx(x)')} = 1`,
            `${bl('d/dx(3x⁻¹)')} = ${bl('3 · (−1) · x⁻²')} = −3x⁻²`,
            `<strong>Combine and rewrite:</strong> f'(x) = 1 − 3x⁻² = ${gr('1 − 3/x²')} ✓`,
          ],
        },
        {
          question: 'Differentiate f(x) = (2x − 1)(x + 3).',
          answer: `f'(x) = ${gr('4x + 5')}`,
          steps: [
            `<strong>Expand the product first:</strong>`,
            `(2x − 1)(x + 3) = 2x² + 6x − x − 3 = ${or('2x² + 5x − 3')}`,
            `<strong>Apply the power rule to each term of ${or('2x² + 5x − 3')}:</strong>`,
            `${bl('d/dx(2x²)')} = 4x`,
            `${bl('d/dx(5x)')} = 5`,
            `${bl('d/dx(−3)')} = 0`,
            `<strong>Combine:</strong> f'(x) = ${gr('4x + 5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — differentiate a polynomial using the rules ───────────────
        {
          difficulty: 'Easy',
          question: 'Differentiate f(x) = 6x⁴ − 3x² + 8x − 5.',
          answer: "f'(x) = 24x³ − 6x + 8",
          checkMode: 'auto',
          correctAnswer: '24x³-6x+8',
          correctAnswers: ['24x³-6x+8', '24x^3-6x+8', '24x³ − 6x + 8', '24x^3 - 6x + 8'],
          explanation: 'Apply the power rule to each term:\nd/dx(6x⁴) = 24x³\nd/dx(−3x²) = −6x\nd/dx(8x) = 8\nd/dx(−5) = 0\nf\'(x) = 24x³ − 6x + 8 ✓',
        },

        // ── Q8 Medium — differentiate a rational function by simplifying first ─
        {
          difficulty: 'Medium',
          question: 'Differentiate f(x) = (x² + 4)/x by simplifying first.',
          answer: "f'(x) = 1 − 4/x²",
          checkMode: 'auto',
          correctAnswer: '1-4/x²',
          correctAnswers: ['1-4/x²', '1-4/x^2', '1 − 4/x²', '1 - 4/x^2'],
          explanation: 'Simplify: (x²+4)/x = x + 4x⁻¹.\nDifferentiate: d/dx(x) = 1, d/dx(4x⁻¹) = −4x⁻².\nf\'(x) = 1 − 4x⁻² = 1 − 4/x² ✓',
        },

        // ── Q9 Hard — differentiate a squared binomial by expanding first ──────
        {
          difficulty: 'Hard',
          question: 'Differentiate f(x) = (3x − 2)², expanding first.',
          answer: "Expand: 9x²−12x+4. f'(x) = 18x−12.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the constant, power, constant multiple, and sum/difference rules to differentiate polynomials and simplified rational expressions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — EQUATIONS OF TANGENTS TO CURVES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-equations',
      title: 'Equations of Tangents to Curves',
      icon: '∥',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>gradient of the tangent</strong> to a curve y = f(x) at a specific point x = a is given by f'(a) — the derivative evaluated at that point. We then use the <strong>point-slope form</strong> of a straight line (y − y₁ = m(x − x₁)) to write the equation of the tangent, substituting the gradient m = f'(a) and the point (a, f(a)).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('derivative (gradient)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('point on curve')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tangent equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the tangent equation: step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Differentiate f(x)')} to find f'(x), then substitute x = a to get the gradient m = f'(a).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Find the point')} — if only x = a is given, calculate y₁ = f(a) to get the point (a, y₁).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the tangent equation')} using y − y₁ = m(x − x₁) and simplify to the form y = mx + c.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Point-slope form</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">y − y₁ = ${bl('m')}(x − x₁)&nbsp;&nbsp; where &nbsp;&nbsp;${bl('m')} = ${bl("f'(a)")}&nbsp;&nbsp; and &nbsp;&nbsp;${or('(x₁, y₁)')} = ${or('(a, f(a))')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always find the point first if only x is given</p>` +
        `<p style="margin:0;color:#1e3a8a;">If a question gives only x = a, substitute back into the original function f(x) to find the y-coordinate before writing the tangent equation. Skipping this step is a common error.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the equation of the tangent to y = x² at the point (3, 9).',
          answer: `${gr('y = 6x − 9')}`,
          steps: [
            `<strong>Find the gradient:</strong> ${bl("f'(x)")} = ${bl('2x')}.`,
            `<strong>Evaluate at x = 3:</strong> ${bl("f'(3)")} = ${bl('2(3)')} = ${bl('6')}. The gradient of the tangent is ${bl('m = 6')}.`,
            `<strong>Use the given point</strong> ${or('(3, 9)')}${or('')}: y − y₁ = m(x − x₁) → y − ${or('9')} = ${bl('6')}(x − ${or('3')}).`,
            `<strong>Simplify:</strong> y = ${bl('6')}x − 18 + ${or('9')} = ${gr('6x − 9')}.`,
            `<strong>Answer:</strong> ${gr('y = 6x − 9')} ✓`,
          ],
        },
        {
          question: 'Find the equation of the tangent to y = x³ − 2x at x = 1.',
          answer: `${gr('y = x − 2')}`,
          steps: [
            `<strong>Find the y-coordinate:</strong> f(1) = 1³ − 2(1) = 1 − 2 = ${or('−1')}. Point: ${or('(1, −1)')}.`,
            `<strong>Differentiate:</strong> ${bl("f'(x)")} = ${bl('3x² − 2')}.`,
            `<strong>Evaluate at x = 1:</strong> ${bl("f'(1)")} = ${bl('3(1)² − 2')} = ${bl('1')}. Gradient: ${bl('m = 1')}.`,
            `<strong>Write tangent equation:</strong> y − ${or('(−1)')} = ${bl('1')}(x − ${or('1')}) → y + 1 = x − 1.`,
            `<strong>Simplify:</strong> ${gr('y = x − 2')} ✓`,
          ],
        },
        {
          question: 'Lerato finds the equation of the tangent to y = 2x² + 3x − 1 at the point where x = 2.',
          answer: `${gr('y = 11x − 9')}`,
          steps: [
            `<strong>Find the y-coordinate:</strong> f(2) = 2(4) + 3(2) − 1 = 8 + 6 − 1 = ${or('13')}. Point: ${or('(2, 13)')}.`,
            `<strong>Differentiate:</strong> ${bl("f'(x)")} = ${bl('4x + 3')}.`,
            `<strong>Evaluate at x = 2:</strong> ${bl("f'(2)")} = ${bl('4(2) + 3')} = ${bl('11')}. Gradient: ${bl('m = 11')}.`,
            `<strong>Write tangent equation:</strong> y − ${or('13')} = ${bl('11')}(x − ${or('2')}) → y = ${bl('11')}x − 22 + ${or('13')}.`,
            `<strong>Simplify:</strong> ${gr('y = 11x − 9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium — tangent equation given a point ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the equation of the tangent to y = x² + 1 at the point (2, 5).',
          answer: 'y = 4x − 3',
          checkMode: 'auto',
          correctAnswer: 'y=4x-3',
          correctAnswers: ['y=4x-3', 'y = 4x - 3', 'y=4x−3', '4x-3'],
          explanation: "f'(x) = 2x. f'(2) = 4. Gradient m = 4.\nTangent: y−5 = 4(x−2) → y = 4x−8+5 = 4x−3 ✓",
        },

        // ── Q11 Hard — tangent given only x-value ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the equation of the tangent to y = x³ − 4x at x = −1.',
          answer: "f(−1) = −1+4 = 3. Point: (−1, 3). f'(x) = 3x²−4. f'(−1) = 3−4 = −1. Tangent: y−3 = −1(x+1). y = −x+2.",
          checkMode: 'self',
        },

        // ── Q12 Hard — conceptual: tangent at a turning point ─────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says the tangent to a curve at its turning point is always horizontal. Is she correct? Explain.',
          answer: 'Yes — at a turning point, the gradient of the curve is zero, meaning the derivative equals zero, which means the tangent line has a gradient of zero and is therefore horizontal.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the equation of a tangent to a curve using differentiation and the point-slope formula" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SKETCHING GRAPHS OF CUBIC FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cubic-sketching',
      title: 'Sketching Graphs of Cubic Functions',
      icon: '∿',
      explanation:
        `<p style="margin-bottom:16px;">To sketch a cubic function y = f(x), we systematically find: (1) <strong>x-intercepts</strong> by solving f(x) = 0 using the Factor Theorem, (2) <strong>y-intercept</strong> by setting x = 0, (3) <strong>stationary points (turning points)</strong> by solving f'(x) = 0 and classifying each as a local maximum or minimum by testing the sign of f'(x) on either side (or using the second derivative), and (4) the <strong>end behaviour</strong> based on the sign of the leading coefficient.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-intercepts')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('stationary points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('curve direction')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sketching a cubic: step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('x-intercepts')} — Use the Factor Theorem to find a root, then factorise fully and solve f(x) = 0.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>y-intercept</strong> — Substitute x = 0 into f(x).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Stationary points')} — Solve f'(x) = 0. Test f'(x) on either side to classify as local max or min.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('End behaviour')} — Positive leading coefficient: rises to the right. Negative leading coefficient: falls to the right.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sign table shortcut for classifying stationary points</p>` +
        `<p style="margin:0;color:#1e3a8a;">Pick test values just to the left and right of each stationary point and check whether f'(x) is positive (increasing) or negative (decreasing). A change from + to − is a local maximum; − to + is a local minimum.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sketch y = x³ − 3x².',
          answer: `Local max at ${or('(0, 0)')}, local min at ${or('(2, −4)')}; ${bl('x-intercepts')} at x = 0 and x = 3`,
          steps: [
            `<strong>y-intercept:</strong> f(0) = 0. y-intercept: (0, 0).`,
            `<strong>${bl('x-intercepts')}:</strong> x³ − 3x² = ${bl('x²(x − 3)')} = 0. So ${bl('x = 0')} (repeated root) and ${bl('x = 3')}.`,
            `<strong>Differentiate:</strong> f'(x) = 3x² − 6x = ${or('3x(x − 2)')}.`,
            `<strong>${or('Stationary points')}:</strong> f'(x) = 0 → ${or('x = 0')} and ${or('x = 2')}. f(0) = 0, f(2) = 8 − 12 = ${or('−4')}.`,
            `<strong>Classify by sign table:</strong> f'(−1) = 3(−1)(−3) = 9 > 0 (increasing). f'(1) = 3(1)(−1) = −3 < 0 (decreasing). f'(3) = 3(3)(1) = 9 > 0 (increasing). So ${or('x = 0 is a local maximum')} and ${or('x = 2 is a local minimum')}.`,
            `<strong>${gr('End behaviour')}:</strong> Leading coefficient is positive (+1), so the ${gr('curve rises to the right and falls to the left')}.`,
            `<strong>Sketch:</strong> Plot intercepts ${bl('(0,0)')} and ${bl('(3,0)')}, mark stationary points ${or('(0,0)')} (local max) and ${or('(2,−4)')} (local min), then draw the ${gr('S-shaped curve')} consistent with the end behaviour.`,
          ],
        },
        {
          question: 'Sipho must sketch y = −x³ + 3x.',
          answer: `Local max at ${or('(1, 2)')}, local min at ${or('(−1, −2)')}; ${bl('x-intercepts')} at x = 0, x = √3, x = −√3`,
          steps: [
            `<strong>y-intercept:</strong> f(0) = 0. y-intercept: (0, 0).`,
            `<strong>${bl('x-intercepts')}:</strong> −x³ + 3x = ${bl('−x(x² − 3)')} = 0. So ${bl('x = 0')}, ${bl('x = √3')} ≈ 1.73, and ${bl('x = −√3')} ≈ −1.73.`,
            `<strong>Differentiate:</strong> f'(x) = −3x² + 3 = ${or('−3(x² − 1)')}.`,
            `<strong>${or('Stationary points')}:</strong> f'(x) = 0 → x² = 1 → ${or('x = ±1')}. f(1) = −1 + 3 = ${or('2')}, f(−1) = 1 − 3 = ${or('−2')}.`,
            `<strong>Classify:</strong> f'(0) = 3 > 0, f'(2) = −9 < 0, so ${or('x = 1 is a local maximum (2)')}. f'(−2) = −9 < 0, f'(0) = 3 > 0, so ${or('x = −1 is a local minimum (−2)')}.`,
            `<strong>${gr('End behaviour')}:</strong> Leading coefficient is negative (−1), so the ${gr('curve falls to the right and rises to the left')}.`,
            `<strong>Sketch:</strong> Plot the ${bl('three x-intercepts')}, mark the ${or('stationary points')} (1, 2) and (−1, −2), then draw the ${gr('inverted S-curve')} falling left-to-right overall.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Hard — interpret increasing/decreasing from a diagram ──────────
        {
          difficulty: 'Hard',
          question: '<DiagramPlaceholder label="A cubic curve with x-intercepts at x=−2, x=1, x=3, a local maximum between x=−2 and x=1, and a local minimum between x=1 and x=3, with a positive leading coefficient" />\nUsing the diagram, describe the intervals where the function is increasing and where it is decreasing.',
          answer: 'The function increases for x < (local max x-value) and x > (local min x-value), and decreases between the local maximum and local minimum — refer to the actual turning point x-values on the diagram for precise intervals.',
          checkMode: 'self',
        },

        // ── Q14 Hard — find and classify stationary points ────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the stationary points of y = x³ − 6x² + 9x and classify each as a local max or min.',
          answer: "f'(x) = 3x²−12x+9 = 3(x²−4x+3) = 3(x−1)(x−3) = 0. x=1 or x=3. f(1) = 1−6+9 = 4 (local max). f(3) = 27−54+27 = 0 (local min).",
          checkMode: 'self',
        },

        // ── Q15 Hard — sketch a cubic showing intercepts and stationary points ─
        {
          difficulty: 'Hard',
          question: 'Sketch y = x³ − 6x² + 9x, showing intercepts and stationary points.',
          answer: 'y-intercept: 0. x-intercepts: x(x²−6x+9) = x(x−3)² = 0, so x=0 or x=3 (repeated). Stationary points from Q14: (1, 4) local max, (3, 0) local min (touching x-axis). Positive leading coefficient.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to find intercepts, stationary points, and sketch a cubic function step by step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — OPTIMISATION AND RATES OF CHANGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'optimisation',
      title: 'Optimisation and Rates of Change',
      icon: '★',
      explanation:
        `<p style="margin-bottom:16px;">Calculus is used to solve real-life <strong>optimisation problems</strong> — finding the maximum or minimum value of a quantity (like area, volume, profit or cost) subject to constraints. The method is: write an equation for the quantity to optimise in terms of one variable, differentiate and set equal to zero to find the stationary point, then verify it is a maximum or minimum, and answer the question in context.</p>` +
        `<p style="margin-bottom:16px;"><strong>Rates of change</strong> problems use the derivative to find how fast one quantity changes relative to another, including average rate of change (gradient of secant) and instantaneous rate of change (gradient of tangent).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('constraint equation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('optimised function')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('critical point (max/min)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Optimisation method: step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify the constraint')} — Write the constraint equation that links your variables, then use it to express one variable in terms of the other.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Write the objective function')} — Express the quantity to maximise or minimise in terms of one variable only.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Differentiate, set equal to zero')} — Solve for the ${gr('critical point')}, verify it is a max or min, then answer in context.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always answer in context</p>` +
        `<p style="margin:0;color:#991b1b;">An optimisation answer is not complete until you state what the maximum or minimum value means in the real-world context of the problem, including units. Do not stop at the critical x-value — substitute back to find the actual optimised quantity.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A farmer has 40 m of fencing and wants to enclose a rectangular garden against a wall (one side needs no fencing). Find the dimensions that maximise the area.',
          answer: `Dimensions: ${gr('10 m × 20 m')}, maximum area = ${gr('200 m²')}`,
          steps: [
            `<strong>${bl('Constraint')}:</strong> Only three sides need fencing. Let the two perpendicular sides each have length x. Then the parallel side (opposite the wall) has length ${bl('40 − 2x')}.`,
            `<strong>${or('Objective function')}:</strong> Area A = x(${bl('40 − 2x')}) = ${or('40x − 2x²')}.`,
            `<strong>Differentiate:</strong> dA/dx = 40 − 4x.`,
            `<strong>${gr('Critical point')}:</strong> Set dA/dx = 0 → 40 − 4x = 0 → ${gr('x = 10')}.`,
            `<strong>Maximum area:</strong> A = 10(40 − 20) = ${gr('200 m²')}.`,
            `<strong>Answer:</strong> Dimensions are ${gr('10 m by 20 m')}, giving a maximum area of ${gr('200 m²')} ✓`,
          ],
        },
        {
          question: 'The height of a ball (in metres) after t seconds is given by h(t) = −5t² + 20t + 2. Find the maximum height and when it occurs.',
          answer: `Maximum height = ${gr('22 m')} at t = ${gr('2 seconds')}`,
          steps: [
            `<strong>${or('Objective function')}:</strong> h(t) = ${or('−5t² + 20t + 2')}.`,
            `<strong>Differentiate:</strong> h'(t) = −10t + 20.`,
            `<strong>${gr('Critical point')}:</strong> Set h'(t) = 0 → −10t + 20 = 0 → ${gr('t = 2 seconds')}.`,
            `<strong>Verify maximum:</strong> h''(t) = −10 < 0, confirming a maximum.`,
            `<strong>Maximum height:</strong> h(2) = −5(4) + 20(2) + 2 = −20 + 40 + 2 = ${gr('22 m')}.`,
            `<strong>Answer:</strong> The ball reaches a maximum height of ${gr('22 m')} at ${gr('t = 2 seconds')} ✓`,
          ],
        },
        {
          question: 'A cylindrical can must have a volume of 500 cm³. Find the radius that minimises the total surface area.',
          answer: `Optimal radius ≈ ${gr('4.30 cm')}`,
          steps: [
            `<strong>${bl('Constraint')}:</strong> Volume V = πr²h = ${bl('500')}, so h = ${bl('500 / (πr²)')}.`,
            `<strong>${or('Objective function')}:</strong> Surface area S = 2πr² + 2πrh = 2πr² + 2πr · ${bl('500/(πr²)')} = ${or('2πr² + 1000/r')}.`,
            `<strong>Differentiate:</strong> dS/dr = 4πr − 1000/r².`,
            `<strong>${gr('Critical point')}:</strong> Set dS/dr = 0 → 4πr = 1000/r² → 4πr³ = 1000 → r³ = 1000/(4π) ≈ 79.58 → ${gr('r ≈ 4.30 cm')}.`,
            `<strong>Verify minimum:</strong> The second derivative d²S/dr² = 4π + 2000/r³ > 0, confirming a minimum.`,
            `<strong>Answer:</strong> The radius that minimises the surface area is ${gr('r ≈ 4.30 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q16 Hard — fencing optimisation ───────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A farmer has 60 m of fencing to enclose a rectangular area against a straight wall. Find the dimensions and maximum area.',
          answer: 'Let perpendicular side = x. Parallel side = 60−2x. A = x(60−2x) = 60x−2x². dA/dx = 60−4x = 0. x = 15. Max area = 15×30 = 450 m².',
          checkMode: 'self',
        },

        // ── Q17 Hard — rocket height: max value and time ──────────────────────
        {
          difficulty: 'Hard',
          question: 'The height of a rocket after t seconds is h(t) = −4t² + 24t + 10. Find the maximum height and the time taken to reach it.',
          answer: 'Maximum height at t = 3 seconds, h = 46 m.',
          checkMode: 'self',
        },

        // ── Q18 Hard — open box optimisation ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle wants to make an open box from a 20 cm by 20 cm piece of cardboard by cutting equal squares from each corner and folding up the sides. Find the size of the square cut that maximises the volume.',
          answer: 'Let cut size = x. Volume = x(20−2x)² = x(400−80x+4x²) = 400x−80x²+4x³. dV/dx = 400−160x+12x² = 0. Divide by 4: 3x²−40x+100 = 0. x = (40±√(1600−1200))/6 = (40±20)/6. x = 10/3 ≈ 3.33 cm or x = 10 (rejected since 2x = 20 leaves no base). x ≈ 3.33 cm.',
          checkMode: 'self',
        },

        // ── Q19 Hard — conceptual: when does max occur? ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the maximum of a function always occurs where the derivative equals zero. Is he correct? Explain.',
          answer: 'Not always — the derivative equals zero at stationary points, but these could be local maxima, local minima, or inflection points; also, global maxima on a closed interval could occur at endpoints where the derivative need not be zero.',
          checkMode: 'self',
        },

        // ── Q20 Hard — average vs instantaneous rate of change ────────────────
        {
          difficulty: 'Hard',
          question: 'Find the average rate of change of f(x) = x³ between x = 1 and x = 3, and compare it to the instantaneous rate of change at x = 2.',
          answer: 'Average rate = (f(3)−f(1))/(3−1) = (27−1)/2 = 13. Instantaneous: f\'(x) = 3x². f\'(2) = 12. The average rate (13) is slightly higher than the instantaneous rate at the midpoint (12).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating optimisation using calculus — fencing problem and falling object worked through step by step" />',
    },
  ],
  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered differential calculus.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
