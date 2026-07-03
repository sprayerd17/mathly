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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing four representations of a function: a formula, a table of values, a Cartesian graph, and a written description — with arrows linking each representation to the others" />',

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
            `[Diagram needed: a Cartesian plane showing the line y = 3x − 4 plotted using points (0, −4) and (2, 2), with the ${bl('gradient')} and ${or('y-intercept')} labelled]`,
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
        '<DiagramPlaceholder label="Cartesian plane showing the line y=3x−4 plotted through points (0,−4) and (2,2) with the gradient labelled in blue and the y-intercept labelled in orange" />',

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
        '<DiagramPlaceholder label="Side-by-side Cartesian planes showing: (left) y=x²−4 with turning point (0,−4) and x-intercepts (−2,0) and (2,0) labelled in blue; (right) y=x² and y=4x² on the same axes showing the width difference in green" />',

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
            `[Diagram needed: the graph of y=3/x+2 showing both ${bl('branches')} of the hyperbola, with the ${rd('vertical asymptote')} at x=0 and ${or('horizontal asymptote')} at y=2 shown as dashed lines]`,
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
        '<DiagramPlaceholder label="Cartesian plane showing the graph of y=3/x+2 with both branches of the hyperbola drawn in blue, the vertical asymptote at x=0 shown as a red dashed line, and the horizontal asymptote at y=2 shown as an orange dashed line" />',

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
        '<DiagramPlaceholder label="Cartesian plane showing y=3ˣ rising steeply in blue (exponential growth) and y=(1/3)ˣ falling steeply in blue (exponential decay), with the horizontal asymptote at y=0 shown as an orange dashed line and the y-intercept at (0,1) marked in green" />',

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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three side-by-side sketches: (1) the line y=2x+5 with known points (0,5) and (2,9) marked in blue; (2) the parabola y=4x²−3 with turning point (0,−3) and the point (1,1) marked in blue; (3) an exponential growth curve for P=1000(1.05)ᵗ with the point at t=5 marked in green" />',

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
}
