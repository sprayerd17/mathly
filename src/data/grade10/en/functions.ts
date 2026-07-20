import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions roles) ─────────────────────────────────────────
// independent variable (input) / gradient / turning point  → blue   (#2563eb)
// dependent variable (output) / plotted points / width     → green  (#16a34a)
// function rule / y-intercept / direction of opening       → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const rd = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Functions',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE CONCEPT OF A FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'concept-of-a-function',
      title: 'The Concept of a Function',
      icon: 'f(x)',
      explanation:
        `<p style="margin-bottom:16px;">A function describes how an ${bl('output')} (${bl('dependent variable')}) depends on an ${bl('input')} (${bl('independent variable')}), and can be represented using tables, graphs, words or formulae — converting flexibly between these representations. For a relationship to be a function, each ${bl('input')} value must give exactly one ${gr('output')} value.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('independent variable (input)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('dependent variable (output)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('function rule')}</span>` +
        `</div>` +

        // ── Key concepts ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Independent variable (input)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The variable whose value you choose freely — usually <em>x</em>. It is the cause or starting value.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Dependent variable (output)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The variable whose value depends on the input — usually <em>y</em>. It is the result or effect.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Function rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The rule or formula that links the input to the output — it can be written as a formula, shown in a table, drawn as a graph, or described in words.</p>` +
        `</div>` +

        `</div>` +

        // ── Four representations ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Four representations of a function</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Formula</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">y = 2x + 3</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Table</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">List input–output pairs</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Graph</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Plot points on a Cartesian plane</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Words</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Describe the relationship in a sentence</p>` +
        `</div>` +

        `</div>` +

        // ── Definition tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The function definition</p>` +
        `<p style="margin:0;color:#1e3a8a;">A relationship is only a function if <strong>every</strong> ${bl('input')} value produces <strong>exactly one</strong> ${gr('output')} value. If any ${bl('input')} gives two or more different ${gr('outputs')}, the relationship is <strong>not</strong> a function.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is the relationship y = 2x + 3 a function?',
          answer: `Yes — y = 2x + 3 ${or('is a function')}`,
          steps: [
            `Apply the definition: for a relationship to be a function, every ${bl('input')} value must give exactly one ${gr('output')} value.`,
            `Check the ${or('rule')} y = 2x + 3: choose any value of ${bl('x')} — for example, ${bl('x')} = 4. Then ${gr('y')} = 2(4) + 3 = ${gr('11')}. There is only one possible output.`,
            `No matter which value of ${bl('x')} you choose, the formula produces exactly one value of ${gr('y')}. This satisfies the definition of a function.`,
            `<strong>Answer:</strong> Yes — for every value of ${bl('x')}, there is exactly one corresponding value of ${gr('y')}, satisfying the definition of a function.`,
          ],
        },
        {
          question: 'Sipho has a table: x = 2 gives y = 5 and y = 8 (two outputs for one input). Is this a function?',
          answer: `No — this is ${or('not a function')}`,
          steps: [
            `Apply the definition: for a relationship to be a function, every ${bl('input')} value must give exactly one ${gr('output')} value.`,
            `Examine the table: when ${bl('x')} = 2, the table shows ${gr('y')} = 5 <strong>and</strong> ${gr('y')} = 8. That is two different outputs for the same input.`,
            `This violates the definition — a function requires exactly one ${gr('output')} per ${bl('input')}.`,
            `<strong>Answer:</strong> No — having two different ${gr('y')}-values for the same ${bl('x')}-value disqualifies this relationship from being a function.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a function is, how to identify functions from tables and graphs, and how to convert between the four representations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINEAR FUNCTIONS y = ax + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-functions',
      title: 'Linear Functions — y = ax + q',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">A linear function has the form y = ${bl('a')}x + ${or('q')}, producing a straight-line graph. The parameter ${bl('a')} is the <strong>gradient</strong> (slope) — a positive ${bl('a')} means the line rises from left to right, while a negative ${bl('a')} means it falls from left to right. The parameter ${or('q')} is the <strong>y-intercept</strong>, where the line crosses the y-axis (at x = 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradient (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('y-intercept (q)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('plotted points')}</span>` +
        `</div>` +

        // ── Parameter cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Understanding the parameters</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gradient — ${bl('a')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Controls the steepness and direction of the line.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &gt; 0 → line rises from left to right</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &lt; 0 → line falls from left to right</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Larger |${bl('a')}| → steeper line</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">y-intercept — ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The value of y when x = 0 — the point where the line crosses the y-axis.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &gt; 0 → line crosses y-axis above the origin</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('q')} &lt; 0 → line crosses y-axis below the origin</p>` +
        `</div>` +

        `</div>` +

        // ── Sketching tip ────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to sketch a linear function</p>` +
        `<p style="margin:0;color:#1e3a8a;">Plot two ${gr('points')} on the Cartesian plane, then draw a straight line through them. The easiest ${gr('points')} to find are the y-intercept (set x = 0) and one other point (choose any convenient x-value and calculate y).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'For y = 3x − 4, identify the gradient and y-intercept, then sketch the graph by finding two points.',
          answer: `${bl('Gradient')} = 3 &nbsp; ${or('y-intercept')} = −4 &nbsp; ${gr('Points')}: (0, −4) and (2, 2)`,
          steps: [
            `Identify the parameters: the function is y = ${bl('3')}x + (${or('−4')}). So ${bl('a')} = ${bl('3')} and ${or('q')} = ${or('−4')}.`,
            `<strong>y-intercept:</strong> Set x = 0 → y = 3(0) − 4 = ${or('−4')}. First ${gr('point')}: ${gr('(0, −4)')}.`,
            `<strong>Second point:</strong> Choose x = 2 → y = 3(2) − 4 = 6 − 4 = 2. Second ${gr('point')}: ${gr('(2, 2)')}.`,
            `Plot ${gr('(0, −4)')} and ${gr('(2, 2)')} on a Cartesian plane, then draw a straight line through both points — the line rises from left to right because the ${bl('gradient')} = ${bl('3')} is positive.`,
            `The completed graph is a straight line through ${gr('(0, −4)')} and ${gr('(2, 2)')}, with ${bl('gradient')} 3 and ${or('y-intercept')} −4.`,
          ],
        },
        {
          question: 'Lerato compares y = 2x + 1 to y = −2x + 1. Describe the difference in their graphs.',
          answer: `Same ${or('y-intercept')} (1); y = 2x + 1 rises, y = −2x + 1 falls — they are reflections of each other about the y-axis`,
          steps: [
            `Identify the parameters of each function.<br>y = ${bl('2')}x + ${or('1')}: gradient = ${bl('2')}, y-intercept = ${or('1')}.<br>y = ${bl('−2')}x + ${or('1')}: gradient = ${bl('−2')}, y-intercept = ${or('1')}.`,
            `<strong>y-intercepts:</strong> Both functions have ${or('q')} = ${or('1')}, so both lines cross the y-axis at the same ${gr('point')} (0, 1).`,
            `<strong>Gradients:</strong> y = 2x + 1 has a ${bl('positive gradient')} — the line rises from left to right. y = −2x + 1 has a ${bl('negative gradient')} — the line falls from left to right.`,
            `<strong>Answer:</strong> Both graphs share the same ${or('y-intercept')} of ${or('1')}, but y = 2x + 1 rises from left to right (positive ${bl('gradient')}) while y = −2x + 1 falls from left to right (negative ${bl('gradient')}) — they are reflections of each other about the y-axis.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Cartesian plane showing the line y = 3x − 4 plotted through points (0, −4) and (2, 2), with the gradient and y-intercept labelled',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="105.4" y1="220" x2="178.6" y2="0" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="206" r="3.5" fill="#ea580c"/><text x="116" y="200" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="158" cy="62" r="3.5" fill="#16a34a"/><text x="164" y="56" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">(2, 2)</text><text x="150" y="132" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">a = 3</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify the gradient and y-intercept of a linear function, find two points, and sketch the straight-line graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — QUADRATIC FUNCTIONS y = ax² + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-functions',
      title: 'Quadratic Functions — y = ax² + q',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">A quadratic function of the form y = ${bl('a')}x² + ${or('q')} produces a parabola (U-shaped or ∩-shaped curve). The parameter ${bl('a')} affects the width and ${or('direction of opening')}: ${bl('a')} &gt; 0 opens upward, ${bl('a')} &lt; 0 opens downward, and larger |${bl('a')}| makes the parabola narrower. The parameter ${or('q')} shifts the graph vertically — the ${bl('turning point')} (vertex) is at (0, ${or('q')}) when there is no horizontal shift.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('turning point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('direction of opening')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('width comparison')}</span>` +
        `</div>` +

        // ── Parameter cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Understanding the parameters</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parameter ${bl('a')} — direction and width</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Controls which way the parabola opens and how wide or narrow it is.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &gt; 0 → opens ${or('upward')} (U-shape)</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &lt; 0 → opens ${or('downward')} (∩-shape)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Larger |${bl('a')}| → ${gr('narrower')} parabola</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Parameter ${or('q')} — vertical shift</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Moves the entire parabola up or down.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &gt; 0 → ${bl('turning point')} above the x-axis</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &lt; 0 → ${bl('turning point')} below the x-axis</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Turning point')} is always at (0, ${or('q')})</p>` +
        `</div>` +

        `</div>` +

        // ── Sketching tip ────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to sketch a quadratic function</p>` +
        `<p style="margin:0;color:#1e3a8a;">Start by plotting the ${bl('turning point')} at (0, ${or('q')}). Then find symmetric point pairs by substituting equal positive and negative x-values. Note the ${or('direction of opening')} from the sign of ${bl('a')}, and compare the ${gr('width')} to y = x² to judge steepness.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sketch y = x² − 4 by plotting points and identifying the turning point.',
          answer: `${bl('Turning point')}: (0, −4); x-intercepts: (−2, 0) and (2, 0); parabola opens ${or('upward')}`,
          steps: [
            `Identify the parameters: ${bl('a')} = 1 (positive → opens ${or('upward')}), ${or('q')} = −4.`,
            `${bl('Turning point')}: (0, ${or('−4')}).`,
            `Find additional points. Let x = 2: y = (2)² − 4 = 4 − 4 = 0. Point: (2, 0). By symmetry, x = −2 also gives y = 0. Point: (−2, 0). These are the x-intercepts.`,
            `Let x = 3: y = 9 − 4 = 5. Point: (3, 5). By symmetry, (−3, 5) is also on the graph.`,
            `The parabola opens ${or('upward')} (${bl('a')} = 1 &gt; 0) with ${bl('turning point')} (0, −4) and x-intercepts at (−2, 0) and (2, 0). Plot these points and draw a smooth U-shaped curve through them.`,
          ],
        },
        {
          question: 'Thabo compares y = 2x² to y = −2x². Describe the difference in their graphs.',
          answer: `y = 2x² opens ${or('upward')}; y = −2x² opens ${or('downward')} — same ${gr('width')}, reflections of each other about the x-axis`,
          steps: [
            `Identify the parameters.<br>y = ${bl('2')}x²: ${bl('a')} = 2, ${or('q')} = 0.<br>y = ${bl('−2')}x²: ${bl('a')} = −2, ${or('q')} = 0.`,
            `<strong>Direction of opening:</strong> y = 2x² has ${bl('a')} = 2 &gt; 0, so it opens ${or('upward')} (U-shape). y = −2x² has ${bl('a')} = −2 &lt; 0, so it opens ${or('downward')} (∩-shape).`,
            `<strong>Width:</strong> Both have |${bl('a')}| = 2, so they are the same ${gr('width')} — neither is wider or narrower than the other.`,
            `<strong>Turning points:</strong> Both have ${or('q')} = 0, so both ${bl('turning points')} are at the origin (0, 0).`,
            `<strong>Answer:</strong> y = 2x² opens ${or('upward')} (${bl('a')} &gt; 0); y = −2x² opens ${or('downward')} (${bl('a')} &lt; 0). Both have the same ${gr('width')} and steepness, but are reflections of each other about the x-axis.`,
          ],
        },
        {
          question: 'Compare the widths of y = x² and y = 4x².',
          answer: `y = 4x² is ${gr('narrower')} than y = x²`,
          steps: [
            `Identify the parameters.<br>y = ${bl('1')}x²: |${bl('a')}| = 1.<br>y = ${bl('4')}x²: |${bl('a')}| = 4.`,
            `Compare |${bl('a')}| values: since |4| &gt; |1|, the graph of y = 4x² is ${gr('narrower')} than y = x².`,
            `Verify with a point: at x = 1, y = x² gives y = 1, while y = 4x² gives y = 4 — the steeper rise confirms the ${gr('narrower')} shape.`,
            `<strong>Answer:</strong> Since |${bl('a')}| = 4 &gt; |${bl('a')}| = 1, the graph of y = 4x² is ${gr('narrower')} than y = x² — it rises more steeply from the ${bl('turning point')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Side-by-side Cartesian planes: left shows y = x² − 4 with its turning point and x-intercepts labelled; right compares y = x² and y = 4x² on the same axes to show the width difference',
      diagramSvg:
        '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M50,56 L62,110 L74,152 L86,182 L98,200 L110,206 L122,200 L134,182 L146,152 L158,110 L170,56" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="206" r="3.5" fill="#2563eb"/><text x="118" y="196" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="62" cy="110" r="3" fill="#2563eb"/><text x="62" y="98" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">(-2, 0)</text><circle cx="158" cy="110" r="3" fill="#2563eb"/><text x="158" y="98" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">(2, 0)</text><line x1="254" y1="2" x2="254" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="278" y1="2" x2="278" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="302" y1="2" x2="302" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="326" y1="2" x2="326" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="350" y1="2" x2="350" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="374" y1="2" x2="374" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="398" y1="2" x2="398" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="422" y1="2" x2="422" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="446" y1="2" x2="446" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="206" x2="458" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="182" x2="458" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="158" x2="458" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="134" x2="458" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="110" x2="458" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="86" x2="458" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="62" x2="458" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="38" x2="458" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="14" x2="458" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="110" x2="458" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="350" y1="2" x2="350" y2="218" stroke="#374151" stroke-width="1.5"/><text x="450" y="104" font-size="11" fill="#374151">x</text><text x="356" y="12" font-size="11" fill="#374151">y</text><path d="M302,14 L314,56 L326,86 L338,104 L350,110 L362,104 L374,86 L386,56 L398,14" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M326,14 L332,56 L338,86 L344,104 L350,110 L356,104 L362,86 L368,56 L374,14" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="298" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">y = x²</text><text x="330" y="30" font-size="11" fill="#16a34a" font-weight="700" text-anchor="start">y = 4x²</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sketch a quadratic function by finding the turning point and plotting symmetric pairs of points, and how changing a and q affects the parabola" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THE HYPERBOLIC FUNCTION y = a/x + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hyperbolic-functions',
      title: 'The Hyperbolic Function — y = a/x + q',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">A hyperbolic function of the form y = ${bl('a')}/x + ${or('q')} has two separate curved ${bl('branches')} that approach but never touch two asymptotes: a ${rd('vertical asymptote')} at x = 0, and a ${or('horizontal asymptote')} at y = ${or('q')}. The parameter ${bl('a')} affects which quadrants the branches occupy and how close the curve sits to the axes.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('vertical asymptote')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('horizontal asymptote')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('curve branches')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Understanding the asymptotes and branches</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertical asymptote</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Always at x = 0 (the y-axis). The ${bl('branches')} approach this line but never touch it.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Horizontal asymptote — y = ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">As x becomes very large or very small, y approaches ${or('q')}. The ${bl('branches')} approach this line but never cross it.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Curve branches — ${bl('a')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} > 0 → ${bl('branches')} in quadrants 1 and 3</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('a')} < 0 → ${bl('branches')} in quadrants 2 and 4</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Key fact</p>` +
        `<p style="margin:0;color:#7f1d1d;">The hyperbola never crosses either asymptote. The ${rd('vertical asymptote')} is always x = 0. The ${or('horizontal asymptote')} shifts up or down depending on ${or('q')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the asymptotes of y = 3/x + 2.',
          answer: `${rd('Vertical asymptote')}: x = 0 &nbsp; ${or('Horizontal asymptote')}: y = 2`,
          steps: [
            `Identify the form: y = ${bl('a')}/x + ${or('q')}. Here ${bl('a')} = ${bl('3')} and ${or('q')} = ${or('2')}.`,
            `${rd('Vertical asymptote')}: The denominator is x, which equals zero at x = 0. The vertical asymptote is at x = 0.`,
            `${or('Horizontal asymptote')}: As x becomes very large or very small, the term ${bl('3')}/x approaches 0, so y approaches ${or('q')} = ${or('2')}. The horizontal asymptote is at y = 2.`,
            `The graph has both ${bl('branches')} of the hyperbola approaching but never touching the ${rd('vertical asymptote')} at x = 0 and the ${or('horizontal asymptote')} at y = 2.`,
          ],
        },
        {
          question: 'Sipho compares y = 2/x to y = −2/x. Describe the difference.',
          answer: `y = 2/x: ${bl('branches in quadrants 1 and 3')}; y = −2/x: ${bl('branches in quadrants 2 and 4')} — reflections of each other`,
          steps: [
            `Identify the parameter ${bl('a')} in each function.<br>y = ${bl('2')}/x: ${bl('a')} = ${bl('2')} (positive).<br>y = ${bl('−2')}/x: ${bl('a')} = ${bl('−2')} (negative).`,
            `With ${bl('a')} = 2 (positive), the ${bl('curve branches')} lie in the first and third quadrants.`,
            `With ${bl('a')} = −2 (negative), the ${bl('curve branches')} lie in the second and fourth quadrants — they are reflections of each other about the y-axis (or x-axis).`,
            `Both functions share the same ${rd('vertical asymptote')} (x = 0) and ${or('horizontal asymptote')} (y = 0), since both have ${or('q')} = 0.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Cartesian plane showing the graph of y = 3/x + 2 with both branches of the hyperbola, the horizontal asymptote at y = 2 shown as an orange dashed line, and the vertical asymptote x = 0 labelled in red',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="46" font-size="11" fill="#374151">y</text><text x="116" y="30" font-size="11" fill="#dc2626" font-weight="700">x = 0</text><line x1="14" y1="62" x2="206" y2="62" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="200" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M137.9,0 L141.2,6.6 L146,14 L153.2,22 L162.8,29.3 L174.8,35.3 L189.2,39.8 L206,44 L219.9,46.3" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M0.1,77.7 L26,88.6 L50,98.8 L66.8,102 L78.8,117.4 L86,134 L92,158 L96.8,192.9 L99.1,220" fill="none" stroke="#2563eb" stroke-width="2.5"/></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the hyperbolic function y=a/x+q — how to identify the vertical and horizontal asymptotes, which quadrants the branches occupy based on the sign of a, and how to sketch the graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE EXPONENTIAL FUNCTION y = a·bˣ + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-functions',
      title: 'The Exponential Function — y = a·bˣ + q (b > 0, b ≠ 1)',
      icon: 'eˣ',
      explanation:
        `<p style="margin-bottom:16px;">An exponential function of the form y = ${bl('a')} · ${bl('b')}ˣ + ${or('q')} produces a curve that grows (if ${bl('b')} > 1) or decays (if 0 < ${bl('b')} < 1) rapidly. There is a ${or('horizontal asymptote')} at y = ${or('q')}, which the curve approaches but never crosses. The ${gr('y-intercept')} occurs where x = 0.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('horizontal asymptote')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('growth / decay direction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-intercept')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Understanding the parameters</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Base — ${bl('b')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Controls ${bl('growth')} or ${bl('decay')}.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('b')} > 1 → exponential ${bl('growth')} (curve rises steeply)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">0 < ${bl('b')} < 1 → exponential ${bl('decay')} (curve falls steeply)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Horizontal asymptote — y = ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The curve approaches y = ${or('q')} but never crosses it.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} > 0 → asymptote above the x-axis</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('q')} < 0 → asymptote below the x-axis</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('y-intercept')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Set x = 0: y = ${bl('a')} · ${bl('b')}⁰ + ${or('q')} = ${bl('a')} + ${or('q')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Growth vs decay</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the base ${bl('b')} > 1, the function shows ${bl('exponential growth')} — the curve rises steeply as x increases. If 0 < ${bl('b')} < 1, the function shows ${bl('exponential decay')} — the curve falls steeply as x increases. The ${or('horizontal asymptote')} y = ${or('q')} is approached as x → −∞ (for growth) or x → +∞ (for decay).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the graph of y = 2ˣ + 1.',
          answer: `Exponential ${bl('growth')} (b = 2 > 1); ${or('horizontal asymptote')}: y = 1; ${gr('y-intercept')}: (0, 2)`,
          steps: [
            `Identify the parameters: ${bl('a')} = 1, ${bl('b')} = 2, ${or('q')} = 1.`,
            `Since ${bl('b')} = 2 > 1, the function shows exponential ${bl('growth')} — as x increases, y grows rapidly.`,
            `${or('Horizontal asymptote')}: y = ${or('q')} = ${or('1')}. The curve approaches y = 1 from above as x → −∞.`,
            `${gr('y-intercept')} (x = 0): y = 2⁰ + 1 = 1 + 1 = ${gr('2')}. The y-intercept is at (0, 2).`,
          ],
        },
        {
          question: 'Lerato compares y = 3ˣ to y = (1/3)ˣ. Describe the difference.',
          answer: `y = 3ˣ shows ${bl('exponential growth')}; y = (1/3)ˣ shows ${bl('exponential decay')} — they are reflections of each other about the y-axis`,
          steps: [
            `Identify the base ${bl('b')} in each function.<br>y = ${bl('3')}ˣ: ${bl('b')} = 3 > 1.<br>y = (${bl('1/3')})ˣ: ${bl('b')} = 1/3 where 0 < 1/3 < 1.`,
            `y = 3ˣ grows as x increases (exponential ${bl('growth')}, since b = 3 > 1).`,
            `y = (1/3)ˣ decreases as x increases (exponential ${bl('decay')}, since 0 < 1/3 < 1) — they are reflections of each other about the y-axis.`,
            `Both functions have the same ${or('horizontal asymptote')}: y = 0 (since ${or('q')} = 0 for both).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Cartesian plane comparing y = 3ˣ (exponential growth) and y = (1/3)ˣ (exponential decay), with the shared horizontal asymptote at y = 0 and y-intercept at (0, 1) labelled',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="14" y1="110" x2="206" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="18" y="102" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">y = 0</text><path d="M62,107.3 L74,105.4 L86,102 L98,96.1 L110,86 L122,68.8 L134,38 L143.2,0" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M158,107.3 L146,105.4 L134,102 L122,96.1 L110,86 L98,68.8 L86,38 L76.8,0" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="110" cy="86" r="3.5" fill="#16a34a"/><text x="116" y="80" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">(0, 1)</text><text x="146" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">y = 3ˣ</text><text x="73" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">y = (1/3)ˣ</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the exponential function y=a·bˣ+q — how to identify growth vs decay from the base b, find the horizontal asymptote and y-intercept, and how changing q shifts the graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — PROBLEM SOLVING AND GRAPH WORK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-graph-work',
      title: 'Problem Solving and Graph Work with Prescribed Functions',
      icon: '✎',
      explanation:
        `<p style="margin-bottom:16px;">We apply our knowledge of linear, quadratic, hyperbolic and exponential functions to solve real-life and abstract problems, including determining equations from given information, sketching graphs, and interpreting key features (intercepts, asymptotes, turning points) in context.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known points / values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('unknown parameter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final equation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for finding equations from graphs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Step 1</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Identify which function type applies from the shape of the graph or the form of the equation.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Step 2</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Use ${bl('known points')} (e.g. intercepts, turning point) to read off any parameters you can directly.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Step 3</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Substitute a ${bl('known point')} into the equation to solve for the ${rd('unknown parameter')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Step 4</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Write the ${gr('final equation')} and verify by checking it satisfies all given conditions.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key features to identify on a graph</p>` +
        `<p style="margin:0;color:#1e3a8a;">x-intercepts (set y = 0), ${gr('y-intercepts')} (set x = 0), turning points (vertex of a parabola), ${or('asymptotes')} (lines the curve approaches), and ${rd('unknown parameters')} found by substituting a ${bl('known point')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A graph of the form y = ax + q passes through (0, 5) and (2, 9). Find the equation.',
          answer: `${gr('y = 2x + 5')}`,
          steps: [
            `Identify the form: y = ${rd('a')}x + ${rd('q')} (linear function).`,
            `The point ${bl('(0, 5)')} is the y-intercept, so ${rd('q')} = 5 directly.`,
            `Use the ${bl('known points')} to find the ${rd('gradient a')}: ${rd('a')} = (9 − 5) / (2 − 0) = 4 / 2 = 2.`,
            `${gr('Final equation')}: ${gr('y = 2x + 5')}. Verify: at x = 2, y = 2(2) + 5 = 9 ✓`,
          ],
        },
        {
          question: 'Thabo has a quadratic graph y = ax² + q with turning point (0, −3) passing through (1, 1). Find a.',
          answer: `${rd('a')} = 4; ${gr('equation: y = 4x² − 3')}`,
          steps: [
            `Identify the form: y = ${rd('a')}x² + ${rd('q')} (quadratic function). The turning point is (0, ${rd('q')}), so ${rd('q')} = −3.`,
            `Substitute the ${bl('known point')} ${bl('(1, 1)')} into y = ${rd('a')}x² − 3: 1 = ${rd('a')}(1)² − 3.`,
            `Solve for the ${rd('unknown parameter a')}: 1 = ${rd('a')} − 3 → ${rd('a')} = 4.`,
            `${gr('Final equation')}: ${gr('y = 4x² − 3')}. Verify: at x = 1, y = 4(1) − 3 = 1 ✓`,
          ],
        },
        {
          question: 'A population grows according to P = 1000(1.05)ᵗ. Find the population after 5 years.',
          answer: `P ≈ ${gr('1 276')}`,
          steps: [
            `Identify the ${bl('known values')}: initial population = ${bl('1 000')}, growth base = ${bl('1.05')}, time = ${bl('t = 5')} years.`,
            `Substitute into the formula: P = ${bl('1 000')} × (${bl('1.05')})⁵.`,
            `Calculate: (1.05)⁵ ≈ 1.2763, so P ≈ 1 000 × 1.2763 ≈ 1 276.`,
            `${gr('Final answer')}: The population after 5 years is approximately ${gr('1 276')} (rounded to the nearest whole number).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video walking through problem-solving strategies for prescribed functions — how to read a graph to identify parameters, substitute known points to find unknowns, and verify the final equation" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — identify whether y=x² is a function ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is y=x² a function? Explain.',
      answer: 'yes, since every x value gives exactly one y value',
      checkMode: 'auto',
      correctAnswer: 'yes, since every x value gives exactly one y value',
      explanation: 'For every value of x, y=x² produces exactly one output value, satisfying the function definition.',
    },

    // ── Q2 Medium — identify non-function from a table ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho has a table where x=3 gives both y=6 and y=9. Is this a function? Explain.',
      answer: 'no, since one input cannot have two different outputs',
      checkMode: 'auto',
      correctAnswer: 'no, since one input cannot have two different outputs',
      explanation: 'One input (x=3) maps to two different outputs. This violates the definition that each input must give exactly one output.',
    },

    // ── Q3 Hard — vertical line test ──────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says a vertical line graph (like x=5) is a function. Is she correct? Explain.',
      answer: 'No — a vertical line has one x-value paired with infinitely many y-values, which violates the function definition (one output per input).',
      checkMode: 'self',
    },

    // ── Q4 Easy — read gradient and y-intercept ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identify the gradient and y-intercept of y=5x−2.',
      answer: 'gradient=5, y-intercept=-2',
      checkMode: 'auto',
      correctAnswer: 'gradient=5, y-intercept=-2',
      explanation: 'Compare y=5x−2 to y=ax+q. The gradient a=5 and the y-intercept q=−2.',
    },

    // ── Q5 Medium — write equation from gradient and y-intercept ─────────────
    {
      difficulty: 'Medium',
      question: 'Find the equation of a line with gradient 4 passing through (0,−7).',
      answer: 'y=4x-7',
      checkMode: 'auto',
      correctAnswer: 'y=4x-7',
      explanation: 'The y-intercept is −7 (the line passes through (0,−7)) and the gradient is 4, giving y=4x−7.',
    },

    // ── Q6 Hard — find linear equation from two points ────────────────────────
    {
      difficulty: 'Hard',
      question: 'A line passes through (0,3) and (4,11). Find its equation.',
      answer: 'y-intercept=3. Gradient=(11−3)/4=2. Equation: y=2x+3.',
      checkMode: 'self',
    },

    // ── Q7 Easy — find turning point of a quadratic ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the turning point of y=x²+5.',
      answer: '(0,5)',
      checkMode: 'auto',
      correctAnswer: '(0,5)',
      explanation: 'For y=ax²+q, the turning point is (0,q). Here q=5, so the turning point is (0,5).',
    },

    // ── Q8 Medium — direction of opening of a parabola ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Does y=−3x² open upward or downward?',
      answer: 'downward',
      checkMode: 'auto',
      correctAnswer: 'downward',
      explanation: 'Since a=−3<0, the parabola opens downward.',
    },

    // ── Q9 Hard — compare widths of two parabolas ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Compare the width of y=2x² and y=0.5x². Explain which is narrower.',
      answer: 'y=2x² is narrower, since |2|>|0.5|, making the parabola steeper/narrower.',
      checkMode: 'self',
    },

    // ── Q10 Easy — asymptotes of a hyperbola ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the asymptotes of y=4/x+3.',
      answer: 'x=0 and y=3',
      checkMode: 'auto',
      correctAnswer: 'x=0 and y=3',
      explanation: 'The vertical asymptote is always x=0 for y=a/x+q. The horizontal asymptote is y=q=3.',
    },

    // ── Q11 Medium — quadrants of a hyperbola ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In which quadrants do the branches of y=−5/x lie?',
      answer: 'second and fourth quadrants',
      checkMode: 'auto',
      correctAnswer: 'second and fourth quadrants',
      explanation: 'Since a=−5<0, the branches lie in quadrants 2 and 4.',
    },

    // ── Q12 Hard — vertical asymptote with vertical shift ────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says y=2/x and y=2/x+5 have the same vertical asymptote. Is he correct? Explain.',
      answer: 'Yes — both have a vertical asymptote at x=0, since adding 5 only shifts the graph vertically, not horizontally.',
      checkMode: 'self',
    },

    // ── Q13 Easy — horizontal asymptote of exponential ───────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the horizontal asymptote of y=3·2ˣ+4.',
      answer: 'y=4',
      checkMode: 'auto',
      correctAnswer: 'y=4',
      explanation: 'The horizontal asymptote of y=a·bˣ+q is y=q=4.',
    },

    // ── Q14 Medium — growth vs decay ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Does y=(1/2)ˣ represent growth or decay?',
      answer: 'decay',
      checkMode: 'auto',
      correctAnswer: 'decay',
      explanation: 'Since 0<1/2<1, the function represents exponential decay.',
    },

    // ── Q15 Hard — y-intercept of exponential with q ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the y-intercept of y=5·3ˣ−2.',
      answer: 'At x=0: y=5(3⁰)−2=5(1)−2=3.',
      checkMode: 'self',
    },

    // ── Q16 Hard — find a and q for a linear function ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'A line y=ax+q passes through (0,−2) and (3,7). Find a and q.',
      answer: 'a=3, q=-2',
      checkMode: 'auto',
      correctAnswer: 'a=3, q=-2',
      explanation: 'q=−2 (y-intercept, from point (0,−2)). a=(7−(−2))/(3−0)=9/3=3.',
    },

    // ── Q17 Hard — find a for a quadratic given turning point and one point ───
    {
      difficulty: 'Hard',
      question: 'A quadratic y=ax²+q has turning point (0,2) and passes through (2,10). Find a.',
      answer: 'Substitute (2,10): 10=a(4)+2. 8=4a. a=2.',
      checkMode: 'self',
    },

    // ── Q18 Hard — exponential population growth calculation ──────────────────
    {
      difficulty: 'Hard',
      question: 'A population grows according to P=500(1.08)ᵗ. Find the population after 6 years, rounded to the nearest whole number.',
      answer: '793',
      checkMode: 'auto',
      correctAnswer: '793',
      explanation: 'P=500(1.08)⁶=500×1.58687...≈793.',
    },

    // ── Q19 Hard — relate two quadratics by reflection ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares y=x²−4 and y=−x²+4. Describe how these two graphs relate to each other.',
      answer: 'They are reflections of each other about the x-axis — one opens upward with turning point (0,−4), the other opens downward with turning point (0,4).',
      checkMode: 'self',
    },

    // ── Q20 Hard — find a and q for a hyperbola ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A hyperbola y=a/x+q has a horizontal asymptote at y=−1 and passes through (2,1). Find a and q.',
      answer: 'q=−1 (horizontal asymptote). Substitute (2,1): 1=a/2−1. 2=a/2. a=4.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered functions.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (1-3):   Quadratic y=ax²+q — turning point / direction / x-intercepts
    // Block 2 (4-6):   Hyperbola y=a/x+q — asymptotes / quadrants
    // Block 3 (7-9):   Exponential y=a·bˣ+q — asymptote / growth-decay / y-intercept
    // Block 4 (10-12): Transformations of a and q parameters (algebraic only)
    // Block 5 (13-16): [DIAGRAM] Sketch-description-to-equation (parabola/hyperbola/exponential)
    // Block 6 (17-20): Domain/range and mixed hard application
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — quadratic features from equation (Easy)
        { difficulty: 'Easy', question: 'Find the turning point of y = x² − 9.', checkMode: 'auto', correctAnswer: '(0,-9)', correctAnswers: ['(0,-9)', '(0, -9)', '(0,−9)', '(0, −9)'], answer: '(0, −9)', explanation: 'For y = ax² + q, the turning point is (0, q). Here q = −9, so the turning point is (0, −9).' },
        { difficulty: 'Easy', question: 'Does y = −2x² + 8 open upward or downward?', checkMode: 'auto', correctAnswer: 'downward', answer: 'downward', explanation: 'Since a = −2 < 0, the parabola opens downward.' },
        { difficulty: 'Easy', question: 'Find the x-intercepts of y = x² − 16.', checkMode: 'auto', correctAnswer: '(4,0) and (-4,0)', correctAnswers: ['(4,0) and (-4,0)', '(-4,0) and (4,0)', 'x=4, x=-4', 'x=-4, x=4', '4 and -4'], answer: 'x = 4 and x = −4', explanation: 'Set y = 0: 0 = x² − 16, so x² = 16, giving x = ±4. The x-intercepts are (4, 0) and (−4, 0).' },

        // Block 2 — hyperbola features from equation (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the asymptotes of y = 6/x − 1.', checkMode: 'auto', correctAnswer: 'x=0 and y=-1', correctAnswers: ['x=0 and y=-1', 'x=0, y=-1', 'x = 0 and y = -1', 'x = 0 and y = −1'], answer: 'x = 0 and y = −1', explanation: 'The vertical asymptote is always x = 0 for y = a/x + q. The horizontal asymptote is y = q = −1.' },
        { difficulty: 'Easy-Medium', question: 'In which quadrants do the branches of y = −4/x lie?', checkMode: 'auto', correctAnswer: 'second and fourth quadrants', answer: 'second and fourth quadrants', explanation: 'Since a = −4 < 0, the branches lie in quadrants 2 and 4.' },
        { difficulty: 'Easy-Medium', question: 'Find the horizontal asymptote of y = 3/x + 7.', checkMode: 'auto', correctAnswer: 'y=7', correctAnswers: ['y=7', 'y = 7'], answer: 'y = 7', explanation: 'The horizontal asymptote of y = a/x + q is y = q = 7.' },

        // Block 3 — exponential features from equation (Medium)
        { difficulty: 'Medium', question: 'Find the horizontal asymptote of y = 3·2ˣ + 1.', checkMode: 'auto', correctAnswer: 'y=1', correctAnswers: ['y=1', 'y = 1'], answer: 'y = 1', explanation: 'The horizontal asymptote of y = a·bˣ + q is y = q = 1.' },
        { difficulty: 'Medium', question: 'Does y = 5·(1/2)ˣ − 3 represent growth or decay, and what is its horizontal asymptote?', checkMode: 'auto', correctAnswer: 'decay, y=-3', correctAnswers: ['decay, y=-3', 'decay; y=-3', 'decay, y = -3', 'decay; asymptote y=-3'], answer: 'Decay; horizontal asymptote y = −3', explanation: 'Since 0 < b = 1/2 < 1, this represents exponential decay. The horizontal asymptote is y = q = −3.' },
        { difficulty: 'Medium', question: 'Find the y-intercept of y = 2·3ˣ + 4.', checkMode: 'auto', correctAnswer: '(0,6)', correctAnswers: ['(0,6)', '(0, 6)', '6'], answer: '(0, 6)', explanation: 'Set x = 0: y = 2(3⁰) + 4 = 2(1) + 4 = 6. The y-intercept is (0, 6).' },

        // Block 4 — transformations of a and q (Medium)
        { difficulty: 'Medium', question: 'For y = ax² + q, if a increases from 2 to 5 (both positive), what happens to the parabola?', answer: 'The parabola becomes narrower, since a larger value of |a| makes the parabola steeper/narrower. The direction of opening and the turning point are unaffected.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a/x + q, if q changes from 3 to −2, what happens to the graph?', answer: 'The horizontal asymptote shifts from y = 3 to y = −2 — the whole graph shifts down 5 units. The vertical asymptote stays at x = 0, and the shape/branches are unaffected since a is unchanged.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a·bˣ + q, if q increases (becomes more positive), what happens to the horizontal asymptote?', answer: 'The horizontal asymptote shifts upward — the whole graph moves up, since the asymptote is always at y = q.', checkMode: 'self' },

        // Block 5 — [DIAGRAM] sketch-description-to-equation (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, −2) and passes through the point (2, 6). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=2x^2-2', correctAnswers: ['y=2x^2-2', 'y = 2x^2 - 2', 'y=2x²-2', 'y = 2x² − 2'], answer: 'y = 2x² − 2', explanation: 'The turning point (0, −2) gives q = −2. Substitute (2, 6): 6 = a(2)² − 2, so 8 = 4a, giving a = 2. Equation: y = 2x² − 2.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M86,38 L89,60.5 L92,80 L95,96.5 L98,110 L101,120.5 L104,128 L107,132.5 L110,134 L113,132.5 L116,128 L119,120.5 L122,110 L125,96.5 L128,80 L131,60.5 L134,38" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="134" r="3.5" fill="#2563eb"/><text x="116" y="150" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -2)</text><circle cx="134" cy="38" r="3.5" fill="#2563eb"/><text x="141" y="30" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, 6)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The hyperbola shown has a horizontal asymptote at y = 1 and passes through the point (1, 4). Find the equation of the hyperbola in the form y = a/x + q.', checkMode: 'auto', correctAnswer: 'y=3/x+1', correctAnswers: ['y=3/x+1', 'y = 3/x + 1'], answer: 'y = 3/x + 1', explanation: 'The horizontal asymptote y = 1 gives q = 1. Substitute (1, 4): 4 = a/1 + 1, so a = 3. Equation: y = 3/x + 1.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="98" x2="203.12" y2="98" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="92" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 1</text><path d="M115.76,23 L117.44,39.94 L119.12,50.63 L120.8,58 L122.48,63.38 L124.16,67.49 L125.84,70.73 L127.52,73.34 L129.2,75.5 L130.88,77.31 L132.56,78.85 L134.24,80.18 L135.92,81.33 L137.6,82.35 L139.28,83.25 L140.96,84.05 L142.64,84.76 L144.32,85.41 L146,86 L147.68,86.54 L149.36,87.02 L151.04,87.47 L152.72,87.89 L154.4,88.27 L156.08,88.63 L157.76,88.95 L159.44,89.26 L161.12,89.55 L162.8,89.82 L164.48,90.07 L166.16,90.31 L167.84,90.53 L169.52,90.74 L171.2,90.94 L172.88,91.13 L174.56,91.31 L176.24,91.48 L177.92,91.64 L179.6,91.79 L181.28,91.94 L182.96,92.08 L184.64,92.21 L186.32,92.34 L188,92.46 L189.68,92.58 L191.36,92.69 L193.04,92.8 L194.72,92.9 L196.4,93 L198.08,93.1 L199.76,93.19 L201.44,93.28 L203.12,93.36 L204.8,93.44 L206.48,93.52 L208.16,93.6 L209.84,93.67 L211.52,93.74 L213.2,93.81 L214.88,93.88 L216.56,93.95 L218.24,94.01 L219.92,94.07 L221.6,94.13 L223.28,94.19 L224.96,94.24 L226.64,94.3 L228.32,94.35 L230,94.4" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M-10,101.6 L-8.32,101.65 L-6.64,101.7 L-4.96,101.76 L-3.28,101.81 L-1.6,101.87 L0.08,101.93 L1.76,101.99 L3.44,102.05 L5.12,102.12 L6.8,102.19 L8.48,102.26 L10.16,102.33 L11.84,102.4 L13.52,102.48 L15.2,102.56 L16.88,102.64 L18.56,102.72 L20.24,102.81 L21.92,102.9 L23.6,103 L25.28,103.1 L26.96,103.2 L28.64,103.31 L30.32,103.42 L32,103.54 L33.68,103.66 L35.36,103.79 L37.04,103.92 L38.72,104.06 L40.4,104.21 L42.08,104.36 L43.76,104.52 L45.44,104.69 L47.12,104.87 L48.8,105.06 L50.48,105.26 L52.16,105.47 L53.84,105.69 L55.52,105.93 L57.2,106.18 L58.88,106.45 L60.56,106.74 L62.24,107.05 L63.92,107.38 L65.6,107.73 L67.28,108.11 L68.96,108.53 L70.64,108.98 L72.32,109.46 L74,110 L75.68,110.59 L77.36,111.24 L79.04,111.95 L80.72,112.75 L82.4,113.65 L84.08,114.67 L85.76,115.82 L87.44,117.15 L89.12,118.69 L90.8,120.5 L92.48,122.66 L94.16,125.27 L95.84,128.51 L97.52,132.62 L99.2,138 L100.88,145.37 L102.56,156.06 L104.24,173 L105.92,203.88" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="122" cy="62" r="3.5" fill="#2563eb"/><text x="129" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 4)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The exponential graph shown has base 2, a horizontal asymptote at y = 2, and passes through the point (0, 5). Find the equation in the form y = a·2ˣ + q.', checkMode: 'auto', correctAnswer: 'y=3*2^x+2', correctAnswers: ['y=3*2^x+2', 'y = 3(2)^x + 2', 'y=3·2ˣ+2', 'y = 3·2ˣ + 2'], answer: 'y = 3·2ˣ + 2', explanation: 'The horizontal asymptote y = 2 gives q = 2. Substitute (0, 5): 5 = a(2⁰) + 2 = a + 2, so a = 3. Equation: y = 3·2ˣ + 2.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="86" x2="203.12" y2="86" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="80" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M-10,85.96 L-7.33,85.96 L-4.67,85.95 L-2,85.94 L0.67,85.93 L3.33,85.92 L6,85.91 L8.67,85.9 L11.33,85.88 L14,85.86 L16.67,85.84 L19.33,85.81 L22,85.78 L24.67,85.74 L27.33,85.7 L30,85.65 L32.67,85.59 L35.33,85.52 L38,85.44 L40.67,85.34 L43.33,85.23 L46,85.11 L48.67,84.96 L51.33,84.78 L54,84.58 L56.67,84.35 L59.33,84.07 L62,83.75 L64.67,83.38 L67.33,82.94 L70,82.43 L72.67,81.83 L75.33,81.14 L78,80.33 L80.67,79.39 L83.33,78.28 L86,77 L88.67,75.5 L91.33,73.75 L94,71.71 L96.67,69.33 L99.33,66.56 L102,63.32 L104.67,59.54 L107.33,55.14 L110,50 L112.67,44 L115.33,37.01 L118,28.85 L120.67,19.34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="50" r="3.5" fill="#2563eb"/><text x="116" y="42" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 5)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, 4) and passes through the point (−1, 1). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=-3x^2+4', correctAnswers: ['y=-3x^2+4', 'y = -3x^2 + 4', 'y=-3x²+4', 'y = −3x² + 4'], answer: 'y = −3x² + 4', explanation: 'The turning point (0, 4) gives q = 4. Substitute (−1, 1): 1 = a(−1)² + 4, so 1 = a + 4, giving a = −3. Equation: y = −3x² + 4.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M86,206 L89,172.25 L92,143 L95,118.25 L98,98 L101,82.25 L104,71 L107,64.25 L110,62 L113,64.25 L116,71 L119,82.25 L122,98 L125,118.25 L128,143 L131,172.25 L134,206" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="62" r="3.5" fill="#2563eb"/><text x="116" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text><circle cx="98" cy="98" r="3.5" fill="#2563eb"/><text x="91" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">(-1, 1)</text></svg>' },

        // Block 6 — domain/range and mixed hard application (Hard)
        { difficulty: 'Hard', question: 'State the domain and range of y = x² + 3.', answer: 'Domain: x ∈ ℝ (all real numbers). Range: y ≥ 3, since the parabola opens upward with turning point (0, 3), so the minimum y-value is 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'State the domain and range of y = 4/x − 2.', answer: 'Domain: x ∈ ℝ, x ≠ 0 (x cannot be 0, since the function is undefined there). Range: y ∈ ℝ, y ≠ −2 (y can never equal the horizontal asymptote value).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A hyperbola y = a/x + q has asymptotes x = 0 and y = 3, and passes through the point (2, 5). Find a and q, and state the equation.', answer: 'q = 3 (from the horizontal asymptote). Substitute (2, 5): 5 = a/2 + 3, so 2 = a/2, giving a = 4. Equation: y = 4/x + 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bacteria colony grows according to N = 200(1.15)ᵗ, where t is time in hours. Find N after 4 hours, rounded to the nearest whole number.', checkMode: 'auto', correctAnswer: '350', answer: '350', explanation: 'N = 200(1.15)⁴ = 200 × 1.74900625 ≈ 349.8, which rounds to 350.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered parabolas, hyperbolas and exponential functions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on asymptotes or turning points and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding equations from key features, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — quadratic features from equation (Easy)
        { difficulty: 'Easy', question: 'Find the turning point of y = x² + 7.', checkMode: 'auto', correctAnswer: '(0,7)', correctAnswers: ['(0,7)', '(0, 7)'], answer: '(0, 7)', explanation: 'For y = ax² + q, the turning point is (0, q). Here q = 7, so the turning point is (0, 7).' },
        { difficulty: 'Easy', question: 'Does y = 3x² − 12 open upward or downward?', checkMode: 'auto', correctAnswer: 'upward', answer: 'upward', explanation: 'Since a = 3 > 0, the parabola opens upward.' },
        { difficulty: 'Easy', question: 'Find the x-intercepts of y = x² − 25.', checkMode: 'auto', correctAnswer: '(5,0) and (-5,0)', correctAnswers: ['(5,0) and (-5,0)', '(-5,0) and (5,0)', 'x=5, x=-5', 'x=-5, x=5', '5 and -5'], answer: 'x = 5 and x = −5', explanation: 'Set y = 0: 0 = x² − 25, so x² = 25, giving x = ±5. The x-intercepts are (5, 0) and (−5, 0).' },

        // Block 2 — hyperbola features from equation (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the asymptotes of y = 8/x + 4.', checkMode: 'auto', correctAnswer: 'x=0 and y=4', correctAnswers: ['x=0 and y=4', 'x=0, y=4', 'x = 0 and y = 4'], answer: 'x = 0 and y = 4', explanation: 'The vertical asymptote is always x = 0 for y = a/x + q. The horizontal asymptote is y = q = 4.' },
        { difficulty: 'Easy-Medium', question: 'In which quadrants do the branches of y = 7/x lie?', checkMode: 'auto', correctAnswer: 'first and third quadrants', answer: 'first and third quadrants', explanation: 'Since a = 7 > 0, the branches lie in quadrants 1 and 3.' },
        { difficulty: 'Easy-Medium', question: 'Find the horizontal asymptote of y = 2/x − 5.', checkMode: 'auto', correctAnswer: 'y=-5', correctAnswers: ['y=-5', 'y = -5', 'y = −5'], answer: 'y = −5', explanation: 'The horizontal asymptote of y = a/x + q is y = q = −5.' },

        // Block 3 — exponential features from equation (Medium)
        { difficulty: 'Medium', question: 'Find the horizontal asymptote of y = 4·3ˣ − 2.', checkMode: 'auto', correctAnswer: 'y=-2', correctAnswers: ['y=-2', 'y = -2', 'y = −2'], answer: 'y = −2', explanation: 'The horizontal asymptote of y = a·bˣ + q is y = q = −2.' },
        { difficulty: 'Medium', question: 'Does y = 6·(1/4)ˣ + 1 represent growth or decay, and what is its horizontal asymptote?', checkMode: 'auto', correctAnswer: 'decay, y=1', correctAnswers: ['decay, y=1', 'decay; y=1', 'decay, y = 1', 'decay; asymptote y=1'], answer: 'Decay; horizontal asymptote y = 1', explanation: 'Since 0 < b = 1/4 < 1, this represents exponential decay. The horizontal asymptote is y = q = 1.' },
        { difficulty: 'Medium', question: 'Find the y-intercept of y = 5·2ˣ − 1.', checkMode: 'auto', correctAnswer: '(0,4)', correctAnswers: ['(0,4)', '(0, 4)', '4'], answer: '(0, 4)', explanation: 'Set x = 0: y = 5(2⁰) − 1 = 5(1) − 1 = 4. The y-intercept is (0, 4).' },

        // Block 4 — transformations of a and q (Medium)
        { difficulty: 'Medium', question: 'For y = ax² + q, if a changes from −1 to −4 (the parabola still opens downward), what happens to the shape?', answer: 'The parabola becomes narrower/steeper, since |a| increases from 1 to 4. It continues to open downward because a stays negative.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a/x + q, if a changes sign from positive to negative (q unchanged), what happens to the graph?', answer: 'The branches move from quadrants 1 and 3 to quadrants 2 and 4 — the graph is reflected. The asymptotes (x = 0 and y = q) stay the same since only a changed sign.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a·bˣ + q, if q decreases (becomes more negative), what happens to the horizontal asymptote?', answer: 'The horizontal asymptote shifts downward — the whole graph moves down, since the asymptote is always at y = q.', checkMode: 'self' },

        // Block 5 — [DIAGRAM] sketch-description-to-equation (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, 1) and passes through the point (3, 10). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=x^2+1', correctAnswers: ['y=x^2+1', 'y = x^2 + 1', 'y=x²+1', 'y = x² + 1'], answer: 'y = x² + 1', explanation: 'The turning point (0, 1) gives q = 1. Substitute (3, 10): 10 = a(3)² + 1, so 9 = 9a, giving a = 1. Equation: y = x² + 1.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="56" y1="2" x2="56" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="2" x2="92" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="128" y1="2" x2="128" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="164" y1="2" x2="164" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="200" x2="218" y2="200" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="164" x2="218" y2="164" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="128" x2="218" y2="128" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="92" x2="218" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="56" x2="218" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="20" x2="218" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M83,20 L85.7,35.39 L88.4,49.16 L91.1,61.31 L93.8,71.84 L96.5,80.75 L99.2,88.04 L101.9,93.71 L104.6,97.76 L107.3,100.19 L110,101 L112.7,100.19 L115.4,97.76 L118.1,93.71 L120.8,88.04 L123.5,80.75 L126.2,71.84 L128.9,61.31 L131.6,49.16 L134.3,35.39 L137,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="101" r="3.5" fill="#2563eb"/><text x="116" y="117" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 1)</text><circle cx="137" cy="20" r="3.5" fill="#2563eb"/><text x="144" y="12" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 10)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The hyperbola shown has a horizontal asymptote at y = −3 and passes through the point (1, 2). Find the equation of the hyperbola in the form y = a/x + q.', checkMode: 'auto', correctAnswer: 'y=5/x-3', correctAnswers: ['y=5/x-3', 'y = 5/x - 3', 'y = 5/x − 3'], answer: 'y = 5/x − 3', explanation: 'The horizontal asymptote y = −3 gives q = −3. Substitute (1, 2): 2 = a/1 − 3, so a = 5. Equation: y = 5/x − 3.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="146" x2="203.12" y2="146" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="140" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -3</text><path d="M115.76,21 L117.44,49.23 L119.12,67.05 L120.8,79.33 L122.48,88.31 L124.16,95.15 L125.84,100.55 L127.52,104.9 L129.2,108.5 L130.88,111.52 L132.56,114.09 L134.24,116.3 L135.92,118.22 L137.6,119.91 L139.28,121.41 L140.96,122.74 L142.64,123.94 L144.32,125.02 L146,126 L147.68,126.89 L149.36,127.71 L151.04,128.46 L152.72,129.15 L154.4,129.78 L156.08,130.38 L157.76,130.92 L159.44,131.44 L161.12,131.92 L162.8,132.36 L164.48,132.78 L166.16,133.18 L167.84,133.55 L169.52,133.9 L171.2,134.24 L172.88,134.55 L174.56,134.85 L176.24,135.13 L177.92,135.4 L179.6,135.66 L181.28,135.9 L182.96,136.13 L184.64,136.35 L186.32,136.57 L188,136.77 L189.68,136.96 L191.36,137.15 L193.04,137.33 L194.72,137.5 L196.4,137.67 L198.08,137.83 L199.76,137.98 L201.44,138.13 L203.12,138.27 L204.8,138.41 L206.48,138.54 L208.16,138.67 L209.84,138.79 L211.52,138.91 L213.2,139.02 L214.88,139.14 L216.56,139.24 L218.24,139.35 L219.92,139.45 L221.6,139.55 L223.28,139.64 L224.96,139.74 L226.64,139.83 L228.32,139.91 L230,140" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M-10,152 L-8.32,152.09 L-6.64,152.17 L-4.96,152.26 L-3.28,152.36 L-1.6,152.45 L0.08,152.55 L1.76,152.65 L3.44,152.76 L5.12,152.86 L6.8,152.98 L8.48,153.09 L10.16,153.21 L11.84,153.33 L13.52,153.46 L15.2,153.59 L16.88,153.73 L18.56,153.87 L20.24,154.02 L21.92,154.17 L23.6,154.33 L25.28,154.5 L26.96,154.67 L28.64,154.85 L30.32,155.04 L32,155.23 L33.68,155.43 L35.36,155.65 L37.04,155.87 L38.72,156.1 L40.4,156.34 L42.08,156.6 L43.76,156.87 L45.44,157.15 L47.12,157.45 L48.8,157.76 L50.48,158.1 L52.16,158.45 L53.84,158.82 L55.52,159.22 L57.2,159.64 L58.88,160.08 L60.56,160.56 L62.24,161.08 L63.92,161.63 L65.6,162.22 L67.28,162.85 L68.96,163.54 L70.64,164.29 L72.32,165.11 L74,166 L75.68,166.98 L77.36,168.06 L79.04,169.26 L80.72,170.59 L82.4,172.09 L84.08,173.78 L85.76,175.7 L87.44,177.91 L89.12,180.48 L90.8,183.5 L92.48,187.1 L94.16,191.45 L95.84,196.85 L97.52,203.69" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="122" cy="86" r="3.5" fill="#2563eb"/><text x="129" y="78" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 2)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The exponential graph shown has base 2, a horizontal asymptote at y = 0, and passes through the point (0, 4). Find the equation in the form y = a·2ˣ + q.', checkMode: 'auto', correctAnswer: 'y=4*2^x', correctAnswers: ['y=4*2^x', 'y = 4(2)^x', 'y=4·2ˣ', 'y = 4·2ˣ', 'y=4*2^x+0'], answer: 'y = 4·2ˣ', explanation: 'The horizontal asymptote y = 0 gives q = 0. Substitute (0, 4): 4 = a(2⁰) + 0 = a, so a = 4. Equation: y = 4·2ˣ.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 0</text><path d="M-10,109.95 L-7.33,109.95 L-4.67,109.94 L-2,109.93 L0.67,109.91 L3.33,109.9 L6,109.88 L8.67,109.86 L11.33,109.84 L14,109.81 L16.67,109.78 L19.33,109.74 L22,109.7 L24.67,109.65 L27.33,109.59 L30,109.53 L32.67,109.45 L35.33,109.36 L38,109.25 L40.67,109.13 L43.33,108.98 L46,108.81 L48.67,108.61 L51.33,108.38 L54,108.11 L56.67,107.8 L59.33,107.43 L62,107 L64.67,106.5 L67.33,105.92 L70,105.24 L72.67,104.44 L75.33,103.52 L78,102.44 L80.67,101.18 L83.33,99.71 L86,98 L88.67,96 L91.33,93.67 L94,90.95 L96.67,87.78 L99.33,84.08 L102,79.76 L104.67,74.73 L107.33,68.85 L110,62 L112.67,54.01 L115.33,44.68 L118,33.8 L120.67,21.12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="62" r="3.5" fill="#2563eb"/><text x="116" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, −5) and passes through the point (2, −1). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=x^2-5', correctAnswers: ['y=x^2-5', 'y = x^2 - 5', 'y=x²-5', 'y = x² − 5'], answer: 'y = x² − 5', explanation: 'The turning point (0, −5) gives q = −5. Substitute (2, −1): −1 = a(2)² − 5, so 4 = 4a, giving a = 1. Equation: y = x² − 5.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M68,23 L71,43.25 L74,62 L77,79.25 L80,95 L83,109.25 L86,122 L89,133.25 L92,143 L95,151.25 L98,158 L101,163.25 L104,167 L107,169.25 L110,170 L113,169.25 L116,167 L119,163.25 L122,158 L125,151.25 L128,143 L131,133.25 L134,122 L137,109.25 L140,95 L143,79.25 L146,62 L149,43.25 L152,23" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="170" r="3.5" fill="#2563eb"/><text x="116" y="186" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -5)</text><circle cx="134" cy="122" r="3.5" fill="#2563eb"/><text x="141" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, -1)</text></svg>' },

        // Block 6 — domain/range and mixed hard application (Hard)
        { difficulty: 'Hard', question: 'State the domain and range of y = −2x² − 1.', answer: 'Domain: x ∈ ℝ (all real numbers). Range: y ≤ −1, since the parabola opens downward with turning point (0, −1), so the maximum y-value is −1.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'State the domain and range of y = −3/x + 5.', answer: 'Domain: x ∈ ℝ, x ≠ 0 (x cannot be 0, since the function is undefined there). Range: y ∈ ℝ, y ≠ 5 (y can never equal the horizontal asymptote value).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A hyperbola y = a/x + q has asymptotes x = 0 and y = −2, and passes through the point (1, 3). Find a and q, and state the equation.', answer: 'q = −2 (from the horizontal asymptote). Substitute (1, 3): 3 = a/1 − 2, so a = 5. Equation: y = 5/x − 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'An investment grows according to A = 1500(1.06)ᵗ, where t is time in years. Find A after 5 years, rounded to the nearest rand.', checkMode: 'auto', correctAnswer: '2007', correctAnswers: ['2007', 'R2007'], answer: 'R2 007', explanation: 'A = 1500(1.06)⁵ = 1500 × 1.3382255... ≈ 2007.34, which rounds to R2 007.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered parabolas, hyperbolas and exponential functions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on asymptotes or turning points and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding equations from key features, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — quadratic features from equation (Easy)
        { difficulty: 'Easy', question: 'Find the turning point of y = x² − 6.', checkMode: 'auto', correctAnswer: '(0,-6)', correctAnswers: ['(0,-6)', '(0, -6)', '(0,−6)', '(0, −6)'], answer: '(0, −6)', explanation: 'For y = ax² + q, the turning point is (0, q). Here q = −6, so the turning point is (0, −6).' },
        { difficulty: 'Easy', question: 'Does y = −4x² + 2 open upward or downward?', checkMode: 'auto', correctAnswer: 'downward', answer: 'downward', explanation: 'Since a = −4 < 0, the parabola opens downward.' },
        { difficulty: 'Easy', question: 'Find the x-intercepts of y = x² − 36.', checkMode: 'auto', correctAnswer: '(6,0) and (-6,0)', correctAnswers: ['(6,0) and (-6,0)', '(-6,0) and (6,0)', 'x=6, x=-6', 'x=-6, x=6', '6 and -6'], answer: 'x = 6 and x = −6', explanation: 'Set y = 0: 0 = x² − 36, so x² = 36, giving x = ±6. The x-intercepts are (6, 0) and (−6, 0).' },

        // Block 2 — hyperbola features from equation (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the asymptotes of y = −3/x + 6.', checkMode: 'auto', correctAnswer: 'x=0 and y=6', correctAnswers: ['x=0 and y=6', 'x=0, y=6', 'x = 0 and y = 6'], answer: 'x = 0 and y = 6', explanation: 'The vertical asymptote is always x = 0 for y = a/x + q. The horizontal asymptote is y = q = 6.' },
        { difficulty: 'Easy-Medium', question: 'In which quadrants do the branches of y = −9/x lie?', checkMode: 'auto', correctAnswer: 'second and fourth quadrants', answer: 'second and fourth quadrants', explanation: 'Since a = −9 < 0, the branches lie in quadrants 2 and 4.' },
        { difficulty: 'Easy-Medium', question: 'Find the horizontal asymptote of y = 10/x − 4.', checkMode: 'auto', correctAnswer: 'y=-4', correctAnswers: ['y=-4', 'y = -4', 'y = −4'], answer: 'y = −4', explanation: 'The horizontal asymptote of y = a/x + q is y = q = −4.' },

        // Block 3 — exponential features from equation (Medium)
        { difficulty: 'Medium', question: 'Find the horizontal asymptote of y = 2·5ˣ + 3.', checkMode: 'auto', correctAnswer: 'y=3', correctAnswers: ['y=3', 'y = 3'], answer: 'y = 3', explanation: 'The horizontal asymptote of y = a·bˣ + q is y = q = 3.' },
        { difficulty: 'Medium', question: 'Does y = 8·(1/3)ˣ − 2 represent growth or decay, and what is its horizontal asymptote?', checkMode: 'auto', correctAnswer: 'decay, y=-2', correctAnswers: ['decay, y=-2', 'decay; y=-2', 'decay, y = -2', 'decay; asymptote y=-2'], answer: 'Decay; horizontal asymptote y = −2', explanation: 'Since 0 < b = 1/3 < 1, this represents exponential decay. The horizontal asymptote is y = q = −2.' },
        { difficulty: 'Medium', question: 'Find the y-intercept of y = 3·4ˣ + 2.', checkMode: 'auto', correctAnswer: '(0,5)', correctAnswers: ['(0,5)', '(0, 5)', '5'], answer: '(0, 5)', explanation: 'Set x = 0: y = 3(4⁰) + 2 = 3(1) + 2 = 5. The y-intercept is (0, 5).' },

        // Block 4 — transformations of a and q (Medium)
        { difficulty: 'Medium', question: 'For y = ax² + q, if q changes from −3 to 6, what happens to the turning point?', answer: 'The turning point moves from (0, −3) to (0, 6) — the whole parabola shifts upward 9 units. The width and direction of opening are unaffected since a is unchanged.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a/x + q, if |a| increases while a stays positive, what happens to the branches?', answer: 'The branches move further away from the asymptotes/axes — the curve stretches outward, becoming less tightly curved near the origin. The branches remain in quadrants 1 and 3, and the asymptotes are unaffected.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'For y = a·bˣ + q, if the base b changes from a value greater than 1 to a value between 0 and 1 (a and q unchanged), what happens to the graph?', answer: 'The graph changes from exponential growth to exponential decay — instead of rising steeply as x increases, the curve now falls as x increases. The horizontal asymptote y = q stays the same.', checkMode: 'self' },

        // Block 5 — [DIAGRAM] sketch-description-to-equation (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, 3) and passes through the point (1, −2). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=-5x^2+3', correctAnswers: ['y=-5x^2+3', 'y = -5x^2 + 3', 'y=-5x²+3', 'y = −5x² + 3'], answer: 'y = −5x² + 3', explanation: 'The turning point (0, 3) gives q = 3. Substitute (1, −2): −2 = a(1)² + 3, so a = −5. Equation: y = −5x² + 3.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M95,167.75 L98,134 L101,107.75 L104,89 L107,77.75 L110,74 L113,77.75 L116,89 L119,107.75 L122,134 L125,167.75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="74" r="3.5" fill="#2563eb"/><text x="116" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 3)</text><circle cx="122" cy="134" r="3.5" fill="#2563eb"/><text x="129" y="150" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, -2)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The hyperbola shown has a horizontal asymptote at y = 2 and passes through the point (−1, −3). Find the equation of the hyperbola in the form y = a/x + q.', checkMode: 'auto', correctAnswer: 'y=5/x+2', correctAnswers: ['y=5/x+2', 'y = 5/x + 2'], answer: 'y = 5/x + 2', explanation: 'The horizontal asymptote y = 2 gives q = 2. Substitute (−1, −3): −3 = a/(−1) + 2, so −3 = −a + 2, giving a = 5. Equation: y = 5/x + 2.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="86" x2="203.12" y2="86" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="80" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M102.56,182.77 L100.88,164.95 L99.2,152.67 L97.52,143.69 L95.84,136.85 L94.16,131.45 L92.48,127.1 L90.8,123.5 L89.12,120.48 L87.44,117.91 L85.76,115.7 L84.08,113.78 L82.4,112.09 L80.72,110.59 L79.04,109.26 L77.36,108.06 L75.68,106.98 L74,106 L72.32,105.11 L70.64,104.29 L68.96,103.54 L67.28,102.85 L65.6,102.22 L63.92,101.63 L62.24,101.08 L60.56,100.56 L58.88,100.08 L57.2,99.64 L55.52,99.22 L53.84,98.82 L52.16,98.45 L50.48,98.1 L48.8,97.76 L47.12,97.45 L45.44,97.15 L43.76,96.87 L42.08,96.6 L40.4,96.34 L38.72,96.1 L37.04,95.87 L35.36,95.65 L33.68,95.43 L32,95.23 L30.32,95.04 L28.64,94.85 L26.96,94.67 L25.28,94.5 L23.6,94.33 L21.92,94.17 L20.24,94.02 L18.56,93.87 L16.88,93.73 L15.2,93.59 L13.52,93.46 L11.84,93.33 L10.16,93.21 L8.48,93.09 L6.8,92.98 L5.12,92.86 L3.44,92.76 L1.76,92.65 L0.08,92.55 L-1.6,92.45 L-3.28,92.36 L-4.96,92.26 L-6.64,92.17 L-8.32,92.09 L-10,92" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M230,80 L228.32,79.91 L226.64,79.83 L224.96,79.74 L223.28,79.64 L221.6,79.55 L219.92,79.45 L218.24,79.35 L216.56,79.24 L214.88,79.14 L213.2,79.02 L211.52,78.91 L209.84,78.79 L208.16,78.67 L206.48,78.54 L204.8,78.41 L203.12,78.27 L201.44,78.13 L199.76,77.98 L198.08,77.83 L196.4,77.67 L194.72,77.5 L193.04,77.33 L191.36,77.15 L189.68,76.96 L188,76.77 L186.32,76.57 L184.64,76.35 L182.96,76.13 L181.28,75.9 L179.6,75.66 L177.92,75.4 L176.24,75.13 L174.56,74.85 L172.88,74.55 L171.2,74.24 L169.52,73.9 L167.84,73.55 L166.16,73.18 L164.48,72.78 L162.8,72.36 L161.12,71.92 L159.44,71.44 L157.76,70.92 L156.08,70.38 L154.4,69.78 L152.72,69.15 L151.04,68.46 L149.36,67.71 L147.68,66.89 L146,66 L144.32,65.02 L142.64,63.94 L140.96,62.74 L139.28,61.41 L137.6,59.91 L135.92,58.22 L134.24,56.3 L132.56,54.09 L130.88,51.52 L129.2,48.5 L127.52,44.9 L125.84,40.55 L124.16,35.15 L122.48,28.31 L120.8,19.33" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="98" cy="146" r="3.5" fill="#2563eb"/><text x="91" y="162" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">(-1, -3)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The exponential graph shown has base 3, a horizontal asymptote at y = 1, and passes through the point (0, 6). Find the equation in the form y = a·3ˣ + q.', checkMode: 'auto', correctAnswer: 'y=5*3^x+1', correctAnswers: ['y=5*3^x+1', 'y = 5(3)^x + 1', 'y=5·3ˣ+1', 'y = 5·3ˣ + 1'], answer: 'y = 5·3ˣ + 1', explanation: 'The horizontal asymptote y = 1 gives q = 1. Substitute (0, 6): 6 = a(3⁰) + 1 = a + 1, so a = 5. Equation: y = 5·3ˣ + 1.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="98" x2="203.12" y2="98" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="92" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 1</text><path d="M-10,98 L-7.33,98 L-4.67,98 L-2,98 L0.67,98 L3.33,98 L6,98 L8.67,97.99 L11.33,97.99 L14,97.99 L16.67,97.99 L19.33,97.99 L22,97.98 L24.67,97.98 L27.33,97.97 L30,97.96 L32.67,97.95 L35.33,97.94 L38,97.92 L40.67,97.89 L43.33,97.87 L46,97.83 L48.67,97.78 L51.33,97.72 L54,97.64 L56.67,97.55 L59.33,97.42 L62,97.26 L64.67,97.05 L67.33,96.79 L70,96.46 L72.67,96.03 L75.33,95.49 L78,94.8 L80.67,93.91 L83.33,92.78 L86,91.33 L88.67,89.49 L91.33,87.14 L94,84.13 L96.67,80.3 L99.33,75.4 L102,69.16 L104.67,61.18 L107.33,51 L110,38 L112.67,21.41" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="38" r="3.5" fill="#2563eb"/><text x="116" y="30" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 6)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'The parabola shown has a turning point at (0, −4) and passes through the point (3, 5). Find the equation of the parabola in the form y = ax² + q.', checkMode: 'auto', correctAnswer: 'y=x^2-4', correctAnswers: ['y=x^2-4', 'y = x^2 - 4', 'y=x²-4', 'y = x² − 4'], answer: 'y = x² − 4', explanation: 'The turning point (0, −4) gives q = −4. Substitute (3, 5): 5 = a(3)² − 4, so 9 = 9a, giving a = 1. Equation: y = x² − 4.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="2" x2="80" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="2" x2="140" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="200" x2="218" y2="200" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="140" x2="218" y2="140" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="80" x2="218" y2="80" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="20" x2="218" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M74.25,22.19 L77,41.1 L79.75,58.49 L82.5,74.38 L85.25,88.74 L88,101.6 L90.75,112.94 L93.5,122.78 L96.25,131.09 L99,137.9 L101.75,143.19 L104.5,146.98 L107.25,149.24 L110,150 L112.75,149.24 L115.5,146.98 L118.25,143.19 L121,137.9 L123.75,131.09 L126.5,122.78 L129.25,112.94 L132,101.6 L134.75,88.74 L137.5,74.38 L140.25,58.49 L143,41.1 L145.75,22.19" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="150" r="3.5" fill="#2563eb"/><text x="116" y="166" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="140" cy="60" r="3.5" fill="#2563eb"/><text x="147" y="52" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 5)</text></svg>' },

        // Block 6 — domain/range and mixed hard application (Hard)
        { difficulty: 'Hard', question: 'State the domain and range of y = 5x² + 2.', answer: 'Domain: x ∈ ℝ (all real numbers). Range: y ≥ 2, since the parabola opens upward with turning point (0, 2), so the minimum y-value is 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'State the domain and range of y = 6/x + 1.', answer: 'Domain: x ∈ ℝ, x ≠ 0 (x cannot be 0, since the function is undefined there). Range: y ∈ ℝ, y ≠ 1 (y can never equal the horizontal asymptote value).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A hyperbola y = a/x + q has asymptotes x = 0 and y = 4, and passes through the point (−1, 1). Find a and q, and state the equation.', answer: 'q = 4 (from the horizontal asymptote). Substitute (−1, 1): 1 = a/(−1) + 4, so 1 = −a + 4, giving a = 3. Equation: y = 3/x + 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A radioactive substance decays according to M = 800(0.92)ᵗ, where t is time in years. Find M after 6 years, rounded to the nearest whole number.', checkMode: 'auto', correctAnswer: '485', answer: '485', explanation: 'M = 800(0.92)⁶ = 800 × 0.606355... ≈ 485.08, which rounds to 485.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered parabolas, hyperbolas and exponential functions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on asymptotes or turning points and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding equations from key features, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
