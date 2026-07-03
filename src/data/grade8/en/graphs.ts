import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (graph roles) ────────────────────────────────────────────
// increasing / y-axis   → green  (#16a34a)
// decreasing / drops    → red    (#dc2626)
// maximum / minimum /
//   plotted points      → orange (#ea580c)
// x-axis / constant /
//   flat sections       → blue   (#2563eb)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Graphs',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INTERPRETING GLOBAL GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-global-graphs',
      title: 'Interpreting Global Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">We <strong>analyse and interpret global graphs</strong> of problem situations, focusing on whether trends are <strong>linear or non-linear</strong>, <strong>constant, increasing or decreasing</strong>, whether there is a <strong>maximum or minimum</strong> point, and whether the data is <strong>discrete or continuous</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('increasing')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('decreasing')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('maximum / minimum')}</span>` +
        `</div>` +

        // ── Key features ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key features to identify</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Increasing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The graph rises from left to right — the quantity is getting bigger.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Decreasing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The graph falls from left to right — the quantity is getting smaller.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Constant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The graph is flat (horizontal) — the quantity is staying the same.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Maximum / Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The highest or lowest point on the graph — where the graph changes direction.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Linear vs Non-linear</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A <strong>linear</strong> graph is a straight line. A <strong>non-linear</strong> graph is curved.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Discrete vs Continuous</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Discrete</strong> data has separate values (e.g. people). <strong>Continuous</strong> data flows without gaps (e.g. temperature).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Reading a global graph</p>` +
        `<p style="margin:0;color:#166534;">Read the graph from left to right. Describe each section separately using the terms above — ${gr('increasing')}, ${re('decreasing')}, or constant. Mark any ${or('maximum')} or ${or('minimum')} points. State whether the graph is linear or non-linear.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "A graph shows a car's speed over time — it rises steadily then stays flat. Describe the trend.",
          answer: `The graph is ${gr('increasing')} (linear) in the first section, then constant in the second section.`,
          steps: [
            `The ${gr('rising')} part of the graph shows the speed ${gr('increasing')} — the car is accelerating at a steady rate. This section is <strong>linear</strong> (a straight line going upward).`,
            `The flat part shows <strong>constant speed</strong> — the car is no longer accelerating or slowing down. The graph stays horizontal.`,
            `See the diagram below showing this graph.`,
          ],
        },
        {
          question: "Sipho's height-over-time graph for a ball thrown in the air rises then falls, reaching a peak. Describe this trend.",
          answer: `This is a non-linear graph with a ${or('maximum point')} at the peak height, where the ball briefly stops before falling.`,
          steps: [
            `The graph first ${gr('increases')} — the ball is rising. This section curves upward, so the graph is <strong>non-linear</strong>.`,
            `At the top of the curve there is a ${or('maximum point')} — the highest point the ball reaches, where it momentarily stops before changing direction.`,
            `After the ${or('maximum')}, the graph ${re('decreases')} — the ball is falling back down.`,
            `See the diagram below illustrating this curve.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is a graph that rises steadily then stays flat increasing, decreasing or constant throughout?',
          answer: 'It is increasing in the first part, then constant in the second part.',
          checkMode: 'self',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A graph for a ball thrown upward shows a peak. What does this peak represent?',
          answer: 'maximum height',
          checkMode: 'auto',
          correctAnswer: 'maximum height',
          explanation: 'The peak of the graph is the highest point the ball reaches. This is called the maximum point — where the graph stops increasing and begins to decrease.',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a graph showing temperature over a day with a peak at noon has only one maximum point. Is this always true for real temperature graphs? Explain.',
          answer: 'Not necessarily — real temperature can fluctuate with multiple local peaks, but a simple idealized graph may show just one clear maximum.',
          checkMode: 'self',
        },

        // ── Q9 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: "Is a graph of a person's age over time increasing, decreasing or constant?",
          answer: 'increasing',
          checkMode: 'auto',
          correctAnswer: 'increasing',
          explanation: "A person's age increases steadily over time — it never decreases or stays the same. The graph would be a straight line rising from left to right (linear and increasing).",
        },

        // ── Q10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A water tank empties at a constant rate. Describe the shape of this graph.',
          answer: 'a straight line decreasing at a constant rate',
          checkMode: 'auto',
          correctAnswer: 'a straight line decreasing at a constant rate',
          explanation: 'Since the tank empties at a constant rate, the volume decreases by the same amount every minute. This produces a straight line (linear) that slopes downward — a constant decrease.',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to analyse and interpret global graphs — identifying increasing, decreasing, constant sections, and maximum and minimum points" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two example global graphs — one showing speed vs time with a rising then flat line; one showing height vs time for a ball throw, rising to a peak then falling, with the maximum point marked" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PLOTTING POINTS ON THE CARTESIAN PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'plotting-points-cartesian-plane',
      title: 'Plotting Points on the Cartesian Plane',
      icon: '📍',
      explanation:
        `<p style="margin-bottom:16px;">We use <strong>tables of ordered pairs</strong> to plot points and draw graphs on the <strong>Cartesian plane</strong>. The ${bl('x-axis')} is horizontal and the ${gr('y-axis')} is vertical. Each point is plotted as (x, y) — move right along the ${bl('x-axis')} first, then up or down along the ${gr('y-axis')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-axis')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-axis')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('plotted points')}</span>` +
        `</div>` +

        // ── How to plot ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to plot an ordered pair (x, y)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Start at the origin (0, 0)')} — the point where the x-axis and y-axis cross.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Move <strong>${bl('x units')} along the x-axis</strong> — right if x is positive, left if x is negative.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Move <strong>${gr('y units')} along the y-axis</strong> — up if y is positive, down if y is negative.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Mark the ${or('point')} with a dot and label it with its coordinates.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: x before y</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always go ${bl('horizontal first')} (x-axis), then ${gr('vertical')} (y-axis). Think of it as: "walk along the corridor, then take the stairs." The ordered pair is always written as (${bl('x')}, ${gr('y')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Plot the points (1, 2), (2, 4), (3, 6) from the table for y = 2x.',
          answer: `The ${or('points')} (1, 2), (2, 4) and (3, 6) lie on a straight ${gr('line')} through the origin, showing direct proportion.`,
          steps: [
            `For (${bl('1')}, ${gr('2')}): Start at the origin. Move ${bl('1 unit right')} along the x-axis, then ${gr('2 units up')} along the y-axis. Mark the ${or('point')}.`,
            `For (${bl('2')}, ${gr('4')}): Start at the origin. Move ${bl('2 units right')}, then ${gr('4 units up')}. Mark the ${or('point')}.`,
            `For (${bl('3')}, ${gr('6')}): Start at the origin. Move ${bl('3 units right')}, then ${gr('6 units up')}. Mark the ${or('point')}.`,
            `Connect the three ${or('plotted points')} — they form a straight ${gr('line')} through the origin, confirming that y = 2x is a linear function.`,
            `See the diagram below showing these plotted points forming a straight line.`,
          ],
        },
        {
          question: 'Lerato plots (−1, 3), (0, 1), (1, −1) for y = −2x + 1. Describe the direction of the line.',
          answer: `As ${bl('x')} increases, ${gr('y')} decreases — this shows a ${re('downward-sloping')} line.`,
          steps: [
            `Plot (${bl('−1')}, ${gr('3')}): Move ${bl('1 unit left')}, then ${gr('3 units up')}.`,
            `Plot (${bl('0')}, ${gr('1')}): Stay at the y-axis, move ${gr('1 unit up')} — this is the y-intercept.`,
            `Plot (${bl('1')}, ${re('−1')}): Move ${bl('1 unit right')}, then ${re('1 unit down')} (y is negative).`,
            `As ${bl('x')} increases from left to right, ${gr('y')} ${re('decreases')} — the line slopes ${re('downward')}. This confirms y = −2x + 1 has a negative gradient.`,
            `See the diagram below for the plotted points.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Plot the point (3, 5) on a Cartesian plane. Describe the steps.',
          answer: 'Move 3 units right along the x-axis, then 5 units up along the y-axis.',
          checkMode: 'self',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Using y = 3x − 2, find the ordered pair when x = 2.',
          answer: '(2, 4)',
          checkMode: 'auto',
          correctAnswer: '(2,4)',
          explanation: 'Substitute x = 2 into the equation: y = 3(2) − 2 = 6 − 2 = 4. The ordered pair is (2, 4) ✓',
        },

        // ── Q6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato plots (0, 4), (1, 2), (2, 0), (3, −2) and says this shows a decreasing line. Is she correct? Explain.',
          answer: 'Yes — as x increases, y decreases consistently, confirming a decreasing (downward-sloping) line.',
          checkMode: 'self',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Using y = −x + 5, generate the ordered pair for x = 3.',
          answer: '(3, 2)',
          checkMode: 'auto',
          correctAnswer: '(3,2)',
          explanation: 'Substitute x = 3 into the equation: y = −3 + 5 = 2. The ordered pair is (3, 2) ✓',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says all graphs that pass through the origin (0, 0) represent direct proportion. Is this generally true for straight-line graphs? Explain.',
          answer: 'Yes, for straight lines through the origin (y = mx), this represents direct proportion since y increases at a constant rate relative to x.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to plot ordered pairs on the Cartesian plane and draw a straight line through plotted points" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: Cartesian plane showing points (1,2),(2,4),(3,6) connected by a line; a second Cartesian plane showing points (-1,3),(0,1),(1,-1) connected by a downward line" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DRAWING GLOBAL GRAPHS FROM DESCRIPTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-global-graphs',
      title: 'Drawing Global Graphs from Descriptions',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">We <strong>draw global graphs</strong> from given descriptions of a problem situation, identifying key features such as where the graph ${gr('increases')}, ${re('decreases')}, stays ${bl('constant')}, or reaches a ${or('maximum')} or ${or('minimum')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rising sections')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('drops')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('flat sections')}</span>` +
        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for drawing from a description</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Read carefully</strong> — identify each event or phase described. Each phase becomes a section of the graph.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Label the axes</strong> — decide what goes on the x-axis (usually time) and what goes on the y-axis (the quantity changing).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Draw each section</strong> — ${gr('rising')} line for increasing, ${re('falling')} line for decreasing, ${bl('flat')} line for constant. Connect sections smoothly where appropriate.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Mark key points</strong> — label any ${or('maximum')}, ${or('minimum')}, or transition points on the graph.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Global graphs do not need exact values</p>` +
        `<p style="margin:0;color:#1e3a8a;">A global graph shows the <strong>shape and trend</strong> of a situation — not exact numerical values. Focus on getting the ${gr('direction')}, ${bl('flatness')}, and ${or('turning points')} correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Draw a graph showing a tank filling steadily, then staying full once it reaches capacity.',
          answer: `The graph ${gr('rises steadily')} (linear increase), then becomes ${bl('flat')} at the maximum capacity level.`,
          steps: [
            `Label the axes: x-axis = time, y-axis = volume of water in the tank.`,
            `Phase 1 — Filling: The tank fills at a steady rate, so draw a ${gr('straight line rising')} from left to right (linear increase).`,
            `Phase 2 — Full: Once the tank reaches capacity, the volume stops changing. Draw a ${bl('horizontal flat line')} at the maximum level.`,
            `The transition between the ${gr('rising')} section and the ${bl('flat')} section marks the ${or('maximum')} point — the tank is full.`,
            `See the diagram below for this shape.`,
          ],
        },
        {
          question: 'Thabo describes his savings growing steadily then suddenly dropping when he buys something. Sketch this graph shape.',
          answer: `A steady ${gr('upward line')}, followed by a sudden ${re('vertical drop')}, then ${gr('rising')} again.`,
          steps: [
            `Label the axes: x-axis = time, y-axis = amount of savings (in rands).`,
            `Phase 1 — Saving: Thabo's savings ${gr('increase steadily')} — draw a ${gr('straight line rising')} from left to right.`,
            `Phase 2 — Purchase: When Thabo buys something, his savings ${re('drop suddenly')} — draw a ${re('sharp vertical drop')} in the graph.`,
            `Phase 3 — Saving again: After the purchase, savings ${gr('rise again')} — draw another ${gr('rising')} line continuing upward.`,
            `See the diagram below illustrating this pattern.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Describe the graph of a candle burning down at a constant rate over time.',
          answer: 'a straight line decreasing at a constant rate',
          checkMode: 'auto',
          correctAnswer: 'a straight line decreasing at a constant rate',
          explanation: 'The candle height decreases by the same amount every hour — this is a constant rate of decrease. The graph is a straight line (linear) sloping downward from left to right.',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sketches a graph of his speed while running a race — speeding up, staying constant, then slowing down at the end. Describe the three sections.',
          answer: 'The graph increases (speeding up), then flattens (constant speed), then decreases (slowing down).',
          checkMode: 'self',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says a graph showing a phone battery charging then suddenly being unplugged would show a sudden drop to zero. Is this accurate? Explain.',
          answer: "Not quite — unplugging stops the charging (the graph would flatten, not drop), since the battery level doesn't disappear; it would only decrease gradually as it's used.",
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Describe a real-life situation that would produce a graph with a clear minimum point.',
          answer: "Example: a person's stress level during a calm holiday, dipping to its lowest point mid-trip before rising again as they prepare to return home.",
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says a discrete graph (separate points) is used for situations like the number of people in a room over exact hours, while a continuous graph is used for things like temperature. Is she correct? Explain.',
          answer: 'Yes — discrete data involves separate countable values (like whole people at specific times), while continuous data can take any value within a range (like temperature changing continuously).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a global graph from a real-life description, identifying rising, falling and flat sections" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two simple sketched graphs — one showing a tank filling (rising then flat line); one showing savings rising, a sudden drop, then rising again" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered graphs.' },
    { minScore: 11, message: 'Great work! You are nearly there — review any gaps and try again.' },
    { minScore: 8, message: 'Good effort! Review the sections where you lost marks and try again.' },
    { minScore: 0, message: 'Keep going — work through the guide again section by section.' },
  ],
}
