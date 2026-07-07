import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Geometric Patterns',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A GEOMETRIC PATTERN?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-geometric-pattern',
      title: 'What is a Geometric Pattern?',
      icon: '🔷',
      explanation: `
<p style="margin-bottom:14px;">A <strong>geometric pattern</strong> is a pattern made up of <strong>shapes, colours or sizes</strong> that repeat or grow according to a rule. If you know the rule, you can predict what comes next — just like with number patterns!</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Tiles on a floor:</strong> the same shape or colour is laid out in a repeating arrangement</li>
    <li><strong>Bricks on a wall:</strong> each row of bricks is offset in the same way, over and over</li>
    <li><strong>A beaded necklace:</strong> beads of different colours repeat in the same order around the necklace</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Two types of geometric patterns</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#1e40af;margin-bottom:6px;">🔁 Repeating pattern</div>
      <div style="color:#1e3a8a;font-size:14px;line-height:1.7;">The <strong>same sequence</strong> of shapes repeats over and over.<br/>
        Example: <span style="color:#1e40af;font-weight:700;">▲ ● ■ ▲ ● ■ ▲ ● ■ …</span>
      </div>
    </div>
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">📈 Growing pattern</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">The shapes <strong>increase in number or size</strong> each time.<br/>
        Example: <span style="color:#16a34a;font-weight:700;">■ &nbsp; ■■■ &nbsp; ■■■■■ &nbsp; ■■■■■■■ …</span>
      </div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = repeating patterns</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = growing patterns</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = the rule</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Describe this repeating pattern and say what comes next:\ncircle, square, triangle, circle, square, triangle, …',
          answer: 'circle',
          steps: [
            `Identify the <strong>repeating unit</strong> — the group of shapes that keeps coming back:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <span style="background:#dbeafe;border:2px solid #93c5fd;border-radius:8px;padding:8px 16px;font-size:15px;font-weight:700;color:#1e40af;">circle, square, triangle</span>
  <span style="color:#374151;font-size:14px;">← this is the repeating unit</span>
</div>`,
            `Count how many shapes are in one unit:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">3 shapes per unit</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">The pattern <strong>restarts every 3 shapes</strong>.</p>`,
            `State the <strong>rule</strong>:<br/>
<div style="background:#fee2e2;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Rule: repeat the group of 3 shapes (circle → square → triangle) over and over</span>
</div>`,
            `Find what comes next — after <span style="color:#1e40af;font-weight:700;">… triangle</span>, the unit starts again:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="color:#1e40af;font-weight:700;font-size:16px;">circle, square, triangle,</span>
  <span style="color:#1e40af;font-weight:700;font-size:16px;">circle, square, triangle,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">circle</span>
  <span style="color:#16a34a;font-weight:700;">← next</span>
</div>`,
          ],
        },
        {
          question: 'Describe this growing pattern and say what comes next:\n1 square, 3 squares, 5 squares, 7 squares, …',
          answer: '9 squares',
          steps: [
            `Count the number of shapes at each step:<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Step 1</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">1</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Step 2</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">3</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Step 3</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">5</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Step 4</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■■■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">7</span>
  </div>
</div>`,
            `Find the rule — look at how the count changes at each step:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">3 − 1 = 2</span>
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">5 − 3 = 2</span>
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">7 − 5 = 2</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 2 squares each time</span></p>`,
            `Apply the rule to find what comes next:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#16a34a;">7</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">= 9 squares</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Two rows — top row showing a repeating pattern of circle square triangle, bottom row showing a growing pattern of 1 then 3 then 5 squares arranged in an L shape',

      videoPlaceholder: 'Short video showing the difference between repeating and growing geometric patterns with real life examples',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EXTENDING GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'extending-geometric-patterns',
      title: 'Extending Geometric Patterns',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">To <strong>extend a geometric pattern</strong> you need to first <strong>find the rule</strong> and then <strong>apply it</strong> to draw or describe what comes next. The rule tells you exactly what changes each time — and once you know it, you can keep the pattern going as long as you like.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = the rule</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = known shapes (given)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = new shapes (extended)</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The 4 steps to extend any geometric pattern</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Look at the pattern carefully</strong> — take your time before guessing.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Find what changes each time</strong> — is it the shape, the colour, the size, or the number of shapes?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Find the rule</strong> — describe exactly what happens each time using words like "add", "remove", or "repeat".</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Apply the rule</strong> — use the rule to draw or describe the next shape or group in the pattern.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'A pattern shows: 2 triangles, 4 triangles, 6 triangles, 8 triangles, …\nWhat are the next 2 terms?',
          answer: '10 triangles, then 12 triangles',
          steps: [
            `<strong>Step 1:</strong> Look at the pattern — the number of <span style="color:#1e40af;font-weight:700;">triangles</span> changes each time.<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 1</span>
    <span style="font-size:22px;color:#1e40af;">▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">2</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 2</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">4</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 3</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">6</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 4</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">8</span>
  </div>
</div>`,
            `<strong>Step 2:</strong> Find the difference between consecutive terms:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">4 − 2 = 2</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">6 − 4 = 2</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">8 − 6 = 2</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">The number of triangles grows by <strong>2</strong> each time — this is a growing pattern.</p>`,
            `<strong>Step 3 — Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 2 triangles each time</span>`,
            `<strong>Step 4:</strong> Apply the rule to extend the pattern:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:16px;font-weight:700;color:#1e40af;">…, 8</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 10 triangles</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">10</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 12 triangles</span>
</div>`,
          ],
        },
        {
          question: 'Squares are arranged like stairs:\nRow 1: 1 square, Row 2: 2 squares, Row 3: 3 squares.\nHow many squares are in row 4? How many squares in total across 4 rows?',
          answer: 'Row 4 has 4 squares. Total across 4 rows: 1 + 2 + 3 + 4 = 10 squares.',
          steps: [
            `<strong>Step 1:</strong> Look at the staircase — each row is one step taller than the row before it.<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:280px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Row</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Squares</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Visual</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">1</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">1</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■ ■</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■ ■ ■</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Step 2 — Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add one square to each new row</span><br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Each row number equals its square count: row 1 has 1, row 2 has 2, row 3 has 3 — the row number <em>is</em> the number of squares.</p>`,
            `<strong>Step 3:</strong> Apply the rule to find row 4 and row 5:<br/>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;text-align:center;">
    <div style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;margin-bottom:4px;">Row 4</div>
    <div style="font-size:20px;color:#16a34a;">■ ■ ■ ■</div>
    <div style="font-size:14px;font-weight:700;color:#16a34a;margin-top:4px;">4 squares</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;text-align:center;">
    <div style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;margin-bottom:4px;">Row 5</div>
    <div style="font-size:20px;color:#16a34a;">■ ■ ■ ■ ■</div>
    <div style="font-size:14px;font-weight:700;color:#16a34a;margin-top:4px;">5 squares</div>
  </div>
</div>`,
            `<strong>Total squares across 4 rows:</strong> Add up all the rows:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:16px;font-weight:700;color:#1e40af;">1 + 2 + 3 +</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">4</span>
  <span style="font-size:16px;font-weight:700;color:#374151;">=</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">10 squares</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Staircase pattern showing 1 square in first column 2 in second 3 in third 4 in fourth each column a different colour',

      videoPlaceholder: 'Short video showing how to find the rule in a geometric pattern and extend it correctly',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PATTERNS THAT CHANGE COLOUR OR SHAPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-colour-shape',
      title: 'Patterns That Change Colour or Shape',
      icon: '🎨',
      explanation: `
<p style="margin-bottom:14px;">Not all geometric patterns grow in number. Some patterns change <strong>colour</strong> or <strong>shape</strong> according to a rule. The shapes or colours follow a repeating sequence — and if you know the sequence, you can work out which colour or shape falls at any position in the pattern.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = first colour in the sequence</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = second colour in the sequence</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = third colour in the sequence</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Two types of colour or shape patterns</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#1e40af;margin-bottom:6px;">🎨 Colour patterns</div>
      <div style="color:#1e3a8a;font-size:14px;line-height:1.7;">The <strong>shape stays the same</strong> but the <strong>colours repeat</strong> in a sequence.<br/>
        Example: <span style="color:#1e40af;font-weight:700;">● </span><span style="color:#dc2626;font-weight:700;">● </span><span style="color:#16a34a;font-weight:700;">●</span><span style="color:#1e40af;font-weight:700;"> ●</span><span style="color:#dc2626;font-weight:700;"> ●</span><span style="color:#16a34a;font-weight:700;"> ● …</span>
      </div>
    </div>
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">🔷 Shape patterns</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">The <strong>colour stays the same</strong> but the <strong>shapes repeat</strong> in a sequence.<br/>
        Example: <span style="color:#1e40af;font-weight:700;">● ● ■ ▲ ● ● ■ ▲ …</span>
      </div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key trick: use division with remainder</div>
  <p style="color:#1e3a8a;font-size:15px;margin:0 0 8px 0;">To find the <strong>nth shape or colour</strong> in a repeating pattern:</p>
  <ol style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.1;font-size:15px;">
    <li>Count the number of items in one repeating unit.</li>
    <li>Divide the position number by the unit length.</li>
    <li>The <strong>remainder</strong> tells you which item in the unit it is. If the remainder is <strong>0</strong>, it is the <em>last</em> item in the unit.</li>
  </ol>
</div>`,

      workedExamples: [
        {
          question: 'A pattern of circles repeats: red, blue, green, red, blue, green, …\nWhat colour is the 10th circle?',
          answer: 'The 10th circle is red.',
          steps: [
            `<strong>Step 1:</strong> Identify the repeating colour sequence:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#dc2626;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#dc2626;">red</span>
    <span style="font-size:12px;color:#374151;">1st</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#1e40af;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">blue</span>
    <span style="font-size:12px;color:#374151;">2nd</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#16a34a;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#16a34a;">green</span>
    <span style="font-size:12px;color:#374151;">3rd</span>
  </div>
  <span style="color:#374151;font-size:14px;margin-left:4px;">← then it repeats</span>
</div>`,
            `<strong>Step 2:</strong> Count the items in one unit:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">3 colours per unit (red, blue, green)</div>`,
            `<strong>Step 3:</strong> We need the <strong>10th</strong> circle. Divide the position by the unit length:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">10 ÷ 3 = 3 remainder 1</span>
</div>`,
            `<strong>Step 4:</strong> The remainder is <strong>1</strong>, so the 10th circle is the <strong>1st colour</strong> in the sequence — which is <span style="color:#dc2626;font-weight:700;">red</span>.<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:13px;font-weight:600;color:#374151;">Sequence check:</span>
  <span style="color:#dc2626;font-weight:700;">red(1)</span>
  <span style="color:#1e40af;font-weight:700;">blue(2)</span>
  <span style="color:#16a34a;font-weight:700;">green(3)</span>
  <span style="color:#dc2626;font-weight:700;">red(4)</span>
  <span style="color:#1e40af;font-weight:700;">blue(5)</span>
  <span style="color:#16a34a;font-weight:700;">green(6)</span>
  <span style="color:#dc2626;font-weight:700;">red(7)</span>
  <span style="color:#1e40af;font-weight:700;">blue(8)</span>
  <span style="color:#16a34a;font-weight:700;">green(9)</span>
  <span style="background:#fee2e2;border:2px solid #dc2626;border-radius:6px;padding:2px 8px;color:#dc2626;font-weight:700;">red(10) ✓</span>
</div>`,
          ],
        },
        {
          question: 'A pattern repeats: circle, circle, square, triangle, circle, circle, square, triangle, …\nWhat is the 15th shape?',
          answer: 'The 15th shape is a square.',
          steps: [
            `<strong>Step 1:</strong> Identify the repeating unit:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">●</span>
    <span style="font-size:12px;color:#374151;">1st</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">●</span>
    <span style="font-size:12px;color:#374151;">2nd</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">■</span>
    <span style="font-size:12px;color:#374151;">3rd</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">▲</span>
    <span style="font-size:12px;color:#374151;">4th</span>
  </div>
  <span style="color:#374151;font-size:14px;margin-left:4px;">← then it repeats</span>
</div>`,
            `<strong>Step 2:</strong> Count the items in one unit:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">4 shapes per unit (circle, circle, square, triangle)</div>`,
            `<strong>Step 3:</strong> We need the <strong>15th</strong> shape. Divide the position by the unit length:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">15 ÷ 4 = 3 remainder 3</span>
</div>`,
            `<strong>Step 4:</strong> The remainder is <strong>3</strong>, so the 15th shape is the <strong>3rd shape</strong> in the unit — which is <span style="color:#1e40af;font-weight:700;">square</span>.<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:13px;font-weight:600;color:#374151;">Unit positions:</span>
  <span style="color:#1e40af;font-weight:700;">● (1)</span>
  <span style="color:#1e40af;font-weight:700;">● (2)</span>
  <span style="background:#dbeafe;border:2px solid #1e40af;border-radius:6px;padding:2px 8px;color:#1e40af;font-weight:700;">■ (3) ← remainder 3 ✓</span>
  <span style="color:#1e40af;font-weight:700;">▲ (4)</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Two rows — top row showing colour pattern red blue green repeating, bottom row showing shape pattern circle circle square triangle repeating',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — TESSELLATING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns',
      title: 'Tessellating Patterns',
      icon: '🔲',
      explanation: `
<p style="margin-bottom:14px;">A <strong>tessellating pattern</strong> is one where shapes fit together perfectly — with <strong>no gaps</strong> and <strong>no overlaps</strong>. You can tile a flat surface forever using the same shape, and it will always fit without leaving any empty space.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Bathroom tiles:</strong> square tiles cover a floor with no gaps between them</li>
    <li><strong>A honeycomb:</strong> bees build perfect hexagonal cells that fit together without any wasted space</li>
    <li><strong>A brick wall:</strong> rectangular bricks are laid in rows that lock together tightly</li>
    <li><strong>A chessboard:</strong> 64 squares arranged in a perfect 8 × 8 grid with no gaps at all</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Which shapes tessellate?</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">■</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Squares</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Yes — tessellates perfectly</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">▬</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Rectangles</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Yes — tessellates perfectly</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">▲</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Triangles</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Yes — tessellates perfectly</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">⬡</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Regular hexagons</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Yes — tessellates perfectly</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">●</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Circles</span>
      <span style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">✗ No — always leaves gaps</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Why does tessellation work?</div>
  <p style="color:#1e3a8a;font-size:15px;margin:0 0 8px 0;">A shape tessellates when the <strong>angles around every meeting point add up to exactly 360°</strong>. That means the shapes fill all the space around that point with nothing left over.</p>
  <div style="background:#dbeafe;border-radius:6px;padding:8px 14px;display:inline-block;">
    <span style="color:#1e40af;font-weight:700;">Squares: 4 corners × 90° = 360° ✓</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Can equilateral triangles tessellate? Explain why.',
          answer: 'Yes, equilateral triangles tessellate perfectly.',
          steps: [
            `<strong>Step 1:</strong> Find the size of each angle in an equilateral triangle.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">Each angle = 60°</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">(All three angles in an equilateral triangle are equal, and they add up to 180°, so each one is 180° ÷ 3 = 60°.)</p>`,
            `<strong>Step 2:</strong> For a shape to tessellate, the angles around each meeting point must add up to <strong>360°</strong>.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">Target: 360°</div>`,
            `<strong>Step 3:</strong> Divide 360° by the angle size to find how many triangles fit around each point:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">360° ÷ 60° = 6</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Six triangles fit perfectly around every meeting point. Check: <span style="color:#16a34a;font-weight:700;">6 × 60° = 360° ✓</span></p>`,
            `<strong>Answer:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Yes — equilateral triangles tessellate perfectly. Six triangles meet at every point and their angles add up to exactly 360°.</span>
</div>`,
          ],
        },
        {
          question: 'Why do circles not tessellate?',
          answer: 'Circles do not tessellate because their curved edges always leave gaps.',
          steps: [
            `<strong>Step 1:</strong> Look at the edges of a circle — they are <strong>curved</strong>, not straight.<br/>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#dc2626;font-weight:700;">Circles have curved edges — no flat sides</div>`,
            `<strong>Step 2:</strong> When you place circles next to each other, the curved edges cannot lie flat against each other.<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="color:#dc2626;font-weight:700;margin-left:8px;font-size:14px;">← gaps appear between the circles</span>
</div>`,
            `<strong>Step 3:</strong> The curved edges always create <strong>triangular-shaped gaps</strong> between circles. There is no way to arrange circles so that every gap disappears.<br/>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Angles around each meeting point do not add up to 360° — space is always left over.</span>
</div>`,
            `<strong>Answer:</strong>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Circles do not tessellate because their curved edges cannot fit flush against each other — there will always be gaps.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Two side by side images — left showing squares tessellating perfectly with no gaps, right showing circles with visible gaps between them',

      videoPlaceholder: 'Short video showing real life examples of tessellating patterns and explaining why some shapes tessellate and others do not',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — GEOMETRIC PATTERNS IN REAL LIFE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-real-life',
      title: 'Geometric Patterns in Real Life',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">Geometric patterns are not just found in maths class — they appear <strong>all around us</strong> in nature, in the things people build, and in art and culture. Once you know what to look for, you will start to see them everywhere!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = natural patterns</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = man-made patterns</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#d97706;display:inline-block;"></span>
      <span style="color:#d97706;font-weight:700;">Amber = artistic patterns</span>
    </div>
  </div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:8px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#15803d;margin-bottom:8px;">🌿 Nature</div>
    <ul style="margin:0;padding-left:20px;color:#14532d;line-height:2;font-size:15px;">
      <li><strong>Honeycomb:</strong> bees arrange hexagonal cells in a perfectly tessellating pattern</li>
      <li><strong>Sunflower seeds:</strong> seeds are arranged in interlocking spirals radiating from the centre</li>
      <li><strong>Snake skin scales:</strong> overlapping scales form a repeating pattern along the snake's body</li>
      <li><strong>Zebra stripes:</strong> alternating black and white stripes form a unique repeating pattern</li>
    </ul>
  </div>

  <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#1e40af;margin-bottom:8px;">🏗️ Man-made</div>
    <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2;font-size:15px;">
      <li><strong>Brick walls:</strong> rectangular bricks laid in offset rows create a strong tessellating pattern</li>
      <li><strong>Floor tiles:</strong> square or hexagonal tiles cover a surface with no gaps</li>
      <li><strong>Window panes:</strong> rectangular glass panels arranged in a repeating grid</li>
      <li><strong>Fences:</strong> evenly spaced posts or panels form a repeating pattern along a boundary</li>
    </ul>
  </div>

  <div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#b45309;margin-bottom:8px;">🎨 Art and culture</div>
    <ul style="margin:0;padding-left:20px;color:#92400e;line-height:2;font-size:15px;">
      <li><strong>Ndebele wall paintings:</strong> bold geometric shapes in repeating colour sequences decorate the outside of homes</li>
      <li><strong>Kente cloth patterns:</strong> interwoven strips of brightly coloured fabric create a complex repeating pattern</li>
      <li><strong>Islamic geometric art:</strong> intricate repeating tile patterns based on stars and polygons cover mosque walls and floors</li>
    </ul>
  </div>

</div>`,

      workedExamples: [
        {
          question: 'Look at a brick wall. Describe the geometric pattern.',
          answer: 'A repeating tessellating pattern where each row shifts half a brick to the right.',
          steps: [
            `<strong>Step 1:</strong> Identify the shape used:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">The bricks are rectangles</div>`,
            `<strong>Step 2:</strong> Look at how the rows are arranged — do the bricks line up directly above each other, or are they shifted?<br/>
<div style="background:#dbeafe;border-radius:6px;padding:8px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#1e40af;font-weight:700;">Each row is offset by half a brick from the row below it.</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">This means the joins in one row never line up with the joins in the row above — which makes the wall much stronger.</p>`,
            `<strong>Step 3:</strong> Identify the type of pattern:<br/>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">Repeating pattern ✓</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">Tessellating pattern ✓</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">The rectangles cover the wall completely with no gaps and no overlaps.</p>`,
            `<strong>Step 4 — Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">each row shifts half a brick to the right, then the same arrangement repeats</span>`,
          ],
        },
      ],

      diagramPlaceholder: 'Three images side by side showing a honeycomb pattern, a brick wall pattern and a Ndebele geometric wall painting pattern',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — CREATING YOUR OWN GEOMETRIC PATTERN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'creating-your-own-geometric-pattern',
      title: 'Creating Your Own Geometric Pattern',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">You can design your own geometric pattern from scratch! All you need is a shape, a rule, and a few steps — then you can build a pattern that someone else can read and extend. A good pattern has a <strong>clear rule</strong> that works the same way every time.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The 5 steps to create your own geometric pattern</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Choose your shape or shapes</strong> — pick one or more shapes such as squares, triangles or circles.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Decide on a rule</strong> — will your pattern repeat, grow in number or size, or change colour?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Draw the first 4 to 6 terms</strong> — apply your rule step by step to build the pattern.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#d97706;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Write the rule clearly</strong> — describe it in plain words so anyone can understand it.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Check your pattern</strong> — could someone else read your rule and correctly draw the next term?</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Create a growing pattern using squares where each term adds a new row with one more square than the row before.',
          answer: 'Term 1: 1 square. Term 2: 3 squares. Term 3: 6 squares. Rule: each new term adds a row with one more square than the previous row.',
          steps: [
            `<strong>Step 1 — Choose the shape:</strong> <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">squares</span>`,
            `<strong>Step 2 — Decide the rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">growing pattern — each new term adds a row with one more square</span>`,
            `<strong>Step 3 — Draw the first 3 terms:</strong><br/>
<div style="display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-top:12px;">

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 1</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 square</span>
  </div>

  <span style="font-size:18px;color:#374151;font-weight:300;margin-bottom:18px;">→</span>

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 2</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
      <span style="font-size:22px;color:#16a34a;line-height:1;">■ ■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 </span><span style="font-size:13px;font-weight:700;color:#16a34a;">+ 2 </span><span style="font-size:13px;font-weight:700;color:#374151;">= 3 squares</span>
  </div>

  <span style="font-size:18px;color:#374151;font-weight:300;margin-bottom:18px;">→</span>

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 3</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
      <span style="font-size:22px;color:#1e40af;line-height:1;">■ ■</span>
      <span style="font-size:22px;color:#16a34a;line-height:1;">■ ■ ■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 + 2 </span><span style="font-size:13px;font-weight:700;color:#16a34a;">+ 3 </span><span style="font-size:13px;font-weight:700;color:#374151;">= 6 squares</span>
  </div>

</div>`,
            `<strong>Step 4 — Write the rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">each new term adds a row with one more square than the row before it</span>`,
            `<strong>Step 5 — Check:</strong> Could someone extend this? What would Term 4 look like?<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <span style="color:#374151;font-size:14px;">Term 4 = 1 + 2 + 3 +</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">4 (new row)</span>
  <span style="color:#374151;font-size:14px;">=</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">10 squares ✓</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to design and describe your own geometric pattern step by step',

      practiceQuestions: [],
      openQuestions: [],
    },
  ],


  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Repeating pattern basics (positions 0-3, Easy)
        { difficulty: 'Easy', question: 'A row of floor tiles is laid in a repeating order: circle, square, circle, square, circle, square, …\n\nWhat is the 4th tile?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: 'The repeating unit is: circle, square — 2 shapes per unit.\n4 ÷ 2 = 2 remainder 0. A remainder of 0 means it is the last shape in the unit, which is square.' },
        { difficulty: 'Easy', question: 'Palesa is threading a necklace. She strings the beads in the order red, blue, red, blue, … and plans to stop at the 9th bead.\n\nWhat colour will that last bead be?', answer: 'Red', checkMode: 'auto', correctAnswer: 'Red', correctAnswers: ['Red', 'red'], explanation: 'Unit length = 2 (red, blue).\n9 ÷ 2 = 4 remainder 1.\nRemainder 1 → the 1st colour in the unit, which is red.' },
        { difficulty: 'Medium', question: 'Five flags hang above a stage in a fixed order and then the order repeats: star, moon, sun, cloud, flag, star, moon, sun, cloud, flag, …\n\nSipho counts along and stops at the 23rd flag. Which flag is it?', answer: 'Sun', checkMode: 'auto', correctAnswer: 'Sun', correctAnswers: ['Sun', 'sun'], explanation: 'Unit length = 5 (star, moon, sun, cloud, flag).\n23 ÷ 5 = 4 remainder 3.\nRemainder 3 → the 3rd item in the unit, which is sun.' },
        { difficulty: 'Medium', question: 'A bracelet pattern repeats every 3 beads: red, yellow, blue, red, yellow, blue, …\n\nNomvula says the 16th bead must be yellow, "because 16 is close to the middle of the unit." Is she correct? Give the actual colour and explain her mistake.', answer: 'No, Nomvula is not correct — the 16th bead is red, not yellow. Unit length = 3 (red, yellow, blue). 16 ÷ 3 = 5 remainder 1, and a remainder of 1 means the 1st colour in the unit, which is red. Her reasoning about "the middle of the unit" is not a valid method — only the remainder after dividing by the unit length tells you the position.', checkMode: 'self' },

        // Block B — Growing/shrinking patterns (positions 4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'A growing pattern uses 2 dots in step 1, 4 dots in step 2, 6 dots in step 3, 8 dots in step 4, …\n\nHow many dots are in step 6?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 dots'], explanation: 'The rule is add 2 dots each time.\nStep 4 = 8, Step 5 = 10, Step 6 = 12 dots.' },
        { difficulty: 'Easy-Medium', question: 'A shrinking pattern uses 24 counters in step 1, 20 counters in step 2, 16 counters in step 3, …\n\nHow many counters are in step 5?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 counters'], explanation: 'The rule is subtract 4 counters each time.\nStep 3 = 16, Step 4 = 12, Step 5 = 8 counters.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 1 shape in step 1, 4 shapes in step 2, 7 shapes in step 3, 10 shapes in step 4, …\n\nWhich step has 25 shapes?', answer: 'Step 9', checkMode: 'auto', correctAnswer: 'Step 9', correctAnswers: ['Step 9', 'step 9', '9', 'ninth', '9th', '9th step'], explanation: 'The rule is add 3 shapes each time.\nStep 4 = 10, Step 5 = 13, Step 6 = 16, Step 7 = 19, Step 8 = 22, Step 9 = 25 shapes. ✓' },
        { difficulty: 'Medium', question: 'A doubling pattern uses 2 dots in step 1, 4 dots in step 2, 8 dots in step 3, 16 dots in step 4, …\n\nHow many dots are in step 6?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 dots'], explanation: 'The rule is double the number of dots each time.\nStep 4 = 16, Step 5 = 32, Step 6 = 32 × 2 = 64 dots.' },
        { difficulty: 'Medium', question: 'Look at this growing pattern: 1 square, 3 squares, 6 squares, 10 squares, …\n\nKeenan says the rule is "add 3 squares each time." Is Keenan correct? Explain your answer.', answer: 'No, Keenan is not correct. The amount added is not always 3: from 1 to 3 you add 2, from 3 to 6 you add 3, and from 6 to 10 you add 4. The number being added itself increases by 1 each time, so the rule is not a constant addition.', checkMode: 'self' },

        // Block C — Shape and tessellation reasoning (positions 9-12, Medium)
        { difficulty: 'Medium', question: 'Look at the diagram. Do the squares tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Squares have straight edges that fit together with no gaps and no overlaps, as shown in the diagram. Yes, squares tessellate.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Look at the diagram. Do the circles tessellate? Explain why, using what you see in the diagram.', answer: 'No, circles do not tessellate. Circles have curved edges, so however they are arranged, small curved gaps are always left between them — you can see this in the diagram, unlike the squares which fit together with no gaps at all.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows regular hexagons meeting at a point. Each angle of a regular hexagon is 120°. How many hexagons meet at each point in a tessellating pattern?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 hexagons'], explanation: 'For tessellation, the angles at a point must add up to 360°.\n360° ÷ 120° = 3 hexagons, as shown meeting at the point in the diagram.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 144.6,120 144.6,160 110,180 75.4,160 75.4,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 75.4,120 40.7,100 40.7,60 75.4,40 110,60" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 110,60 144.6,40 179.3,60 179.3,100 144.6,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 124 117 A 20 20 0 0 1 96 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 96 117 A 20 20 0 0 1 100 82" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 100 82 A 20 20 0 0 1 124 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Each angle of a square is 90°. Using the same 360°-at-a-point rule shown in the diagram, how many squares meet at each point in a tessellating pattern?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 squares'], explanation: 'For tessellation, the angles at a point must add up to 360°.\n360° ÷ 90° = 4 squares, as shown meeting at the point in the diagram.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="60" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="60" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="100" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="100" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="103" y="93" width="14" height="14" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },

        // Block D — Real-world grid & row/column word problems (positions 13-15, Medium)
        { difficulty: 'Medium', question: 'A bathroom floor is tiled with square tiles in 6 rows of 7 tiles each. How many tiles are used in total?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 tiles'], explanation: '6 rows × 7 tiles = 42 tiles.' },
        { difficulty: 'Medium', question: 'A brick path is laid using bricks in 8 rows of 9 bricks each. How many bricks are used in total?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 bricks'], explanation: '8 rows × 9 bricks = 72 bricks.' },
        { difficulty: 'Medium', question: 'A beaded bracelet repeats a unit of 3 colours: red, blue, green. If there are 24 beads in total and the pattern divides evenly, how many red beads are there?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 beads', '8 red beads'], explanation: 'Unit length = 3 (red, blue, green). 24 ÷ 3 = 8 complete units, so there are 8 red beads.' },

        // Block E — Multi-part & comparison (positions 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern repeats: circle, square, triangle, circle, square, triangle, …\n\na) What is the unit length?\nb) What is the 26th shape?\nc) Is the 26th shape the same as the 3rd shape? Explain.', answer: 'a) 3    b) square    c) No', parts: [ { label: 'a) What is the unit length?', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'The repeating group is circle, square, triangle — 3 shapes per unit.' }, { label: 'b) What is the 26th shape?', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: '26 ÷ 3 = 8 remainder 2. Remainder 2 → the 2nd shape, which is square.' }, { label: 'c) Is the 26th shape the same as the 3rd shape? Explain.', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The 3rd shape in the unit is triangle, but the 26th shape works out to square (remainder 2, not remainder 0), so they are not the same.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Pattern A repeats every 3 shapes: circle, square, triangle. Pattern B repeats every 4 shapes: circle, circle, square, triangle. Which pattern has a triangle at position 12 — A, B, or both?', answer: 'Both', checkMode: 'auto', correctAnswer: 'Both', correctAnswers: ['Both', 'both'], explanation: 'Pattern A: 12 ÷ 3 = 4 remainder 0 → last shape in unit → triangle.\nPattern B: 12 ÷ 4 = 3 remainder 0 → last shape in unit → triangle.\nBoth patterns have a triangle at position 12.' },

        // Block F — Justify, critique, and create (positions 18-19, Hard)
        { difficulty: 'Hard', question: 'A pattern repeats: circle, square, triangle, star, circle, square, triangle, star, …\n\nJada says the 22nd shape is a triangle. Is Jada correct? Show your working and explain any mistake.', answer: 'No, Jada is not correct. Unit length = 4 (circle, square, triangle, star). 22 ÷ 4 = 5 remainder 2. A remainder of 2 means the 2nd shape in the unit, which is square, not triangle. Jada likely miscounted the remainder or the position in the unit.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Design your own growing pattern that starts at a number of your choice and adds the same amount each time. Write the rule and list the first 5 terms.', answer: 'Any valid growing pattern with a constant addition rule is correct.\n\nChecklist:\n• States a clear starting value\n• Adds the same fixed amount every step\n• Lists exactly 5 terms that follow the rule correctly\n• The rule is clearly stated in words\n\nExample: start at 2, add 3 each time: 2, 5, 8, 11, 14.\nRule: start at 2 and add 3 shapes each time.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered geometric patterns at every level.' },
        { minScore: 15, message: 'Great work! You are confident with most pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Repeating pattern basics (positions 0-3, Easy)
        { difficulty: 'Easy', question: 'A border painted along a wall repeats: square, triangle, square, triangle, square, triangle, …\n\nWhat is the 6th shape in the border?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'The repeating unit is: square, triangle — 2 shapes per unit.\n6 ÷ 2 = 3 remainder 0. A remainder of 0 means it is the last shape in the unit, which is triangle.' },
        { difficulty: 'Easy', question: 'Bunting flags are strung up in the order yellow, purple, yellow, purple, … all the way along a fence.\n\nWhat colour is the 11th flag from the start?', answer: 'Yellow', checkMode: 'auto', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: 'Unit length = 2 (yellow, purple).\n11 ÷ 2 = 5 remainder 1.\nRemainder 1 → the 1st colour in the unit, which is yellow.' },
        { difficulty: 'Medium', question: 'Five shapes are painted on a running track in a fixed order that keeps repeating: circle, square, triangle, star, moon, circle, square, triangle, star, moon, …\n\nA runner stops exactly on the 27th shape. Which shape are they standing on?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: 'Unit length = 5 (circle, square, triangle, star, moon).\n27 ÷ 5 = 5 remainder 2.\nRemainder 2 → the 2nd item in the unit, which is square.' },
        { difficulty: 'Medium', question: 'A beading unit of 4 colours repeats: blue, green, yellow, red, blue, green, yellow, red, …\n\nTshepo claims that every 4th bead in this pattern is red. Is he correct, and what colour is the 19th bead?', answer: 'Yes, Tshepo is correct that every 4th bead is red — but the 19th bead itself is yellow, not the 4th bead. Unit length = 4 (blue, green, yellow, red). 19 ÷ 4 = 4 remainder 3, and a remainder of 3 means the 3rd colour in the unit, which is yellow.', checkMode: 'self' },

        // Block B — Growing/shrinking patterns (positions 4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'A growing pattern uses 2 shapes in step 1, 5 shapes in step 2, 8 shapes in step 3, 11 shapes in step 4, …\n\nHow many shapes are in step 6?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 shapes'], explanation: 'The rule is add 3 shapes each time.\nStep 4 = 11, Step 5 = 14, Step 6 = 17 shapes.' },
        { difficulty: 'Easy-Medium', question: 'A shrinking pattern uses 30 blocks in step 1, 25 blocks in step 2, 20 blocks in step 3, …\n\nHow many blocks are in step 5?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 blocks'], explanation: 'The rule is subtract 5 blocks each time.\nStep 3 = 20, Step 4 = 15, Step 5 = 10 blocks.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 2 shapes in step 1, 6 shapes in step 2, 10 shapes in step 3, 14 shapes in step 4, …\n\nWhich step has 26 shapes?', answer: 'Step 7', checkMode: 'auto', correctAnswer: 'Step 7', correctAnswers: ['Step 7', 'step 7', '7', 'seventh', '7th', '7th step'], explanation: 'The rule is add 4 shapes each time.\nStep 4 = 14, Step 5 = 18, Step 6 = 22, Step 7 = 26 shapes. ✓' },
        { difficulty: 'Medium', question: 'A doubling pattern uses 3 dots in step 1, 6 dots in step 2, 12 dots in step 3, 24 dots in step 4, …\n\nHow many dots are in step 5?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 dots'], explanation: 'The rule is double the number of dots each time.\nStep 4 = 24, Step 5 = 24 × 2 = 48 dots.' },
        { difficulty: 'Medium', question: 'Describe, in your own words, the rule for this pattern: 2 triangles, 5 triangles, 8 triangles, 11 triangles, …', answer: 'The rule is: start with 2 triangles and add 3 triangles each time to get the next term.', checkMode: 'self' },

        // Block C — Shape and tessellation reasoning (positions 9-12, Medium)
        { difficulty: 'Medium', question: 'Look at the diagram. Do the squares tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Squares have straight edges that fit together with no gaps and no overlaps, as shown in the diagram. Yes, squares tessellate.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Look at the diagram. Do the circles tessellate? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Circles have curved edges, so gaps are always left between them when they are placed next to each other, as shown in the diagram. No, circles do not tessellate.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows regular hexagons meeting at a point. Each angle of a regular hexagon is 120°. How many hexagons meet at each point in a tessellating pattern?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 hexagons'], explanation: 'For tessellation, the angles at a point must add up to 360°.\n360° ÷ 120° = 3 hexagons, as shown meeting at the point in the diagram.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 144.6,120 144.6,160 110,180 75.4,160 75.4,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 75.4,120 40.7,100 40.7,60 75.4,40 110,60" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 110,60 144.6,40 179.3,60 179.3,100 144.6,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 124 117 A 20 20 0 0 1 96 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 96 117 A 20 20 0 0 1 100 82" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 100 82 A 20 20 0 0 1 124 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Each angle of an equilateral triangle is 60°. Using the same 360°-at-a-point rule shown in the diagram, how many triangles meet at each point in a tessellating pattern?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 triangles'], explanation: 'For tessellation, the angles at a point must add up to 360°.\n360° ÷ 60° = 6 triangles, as shown meeting at the point in the diagram.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 150,100 130,65.4" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 130,65.4 90,65.4" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 90,65.4 70,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 70,100 90,134.6" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 90,134.6 130,134.6" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 130,134.6 150,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },

        // Block D — Real-world grid & row/column word problems (positions 13-15, Medium)
        { difficulty: 'Medium', question: 'A honeycomb section has 7 rows of 8 hexagonal cells each. How many cells are there in total?', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 cells'], explanation: '7 rows × 8 cells = 56 cells.' },
        { difficulty: 'Medium', question: 'A window has rectangular panes arranged in 9 rows of 6 panes each. How many panes are there in total?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 panes'], explanation: '9 rows × 6 panes = 54 panes.' },
        { difficulty: 'Medium', question: 'A Ndebele wall painting uses a repeating unit of 3 colours around a border. If the border has 30 shapes and the pattern divides evenly, how many shapes are there of each colour?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 shapes'], explanation: 'Unit length = 3 colours. 30 ÷ 3 = 10 shapes of each colour.' },

        // Block E — Multi-part & comparison (positions 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern repeats: yellow, green, yellow, green, yellow, green, …\n\na) What is the unit length?\nb) What colour is the 15th shape?\nc) Is the 15th shape the same colour as the 2nd shape? Explain.', answer: 'a) 2    b) Yellow    c) No', parts: [ { label: 'a) What is the unit length?', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'The repeating group is yellow, green — 2 colours per unit.' }, { label: 'b) What colour is the 15th shape?', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: '15 ÷ 2 = 7 remainder 1. Remainder 1 → the 1st colour, which is yellow.' }, { label: 'c) Is the 15th shape the same colour as the 2nd shape? Explain.', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The 2nd shape in the unit is green, but the 15th shape works out to yellow (remainder 1, not remainder 0), so they are not the same colour.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Pattern A starts at 2 and adds 3 shapes each step. Pattern B starts at 1 and adds 4 shapes each step. Which pattern reaches exactly 20 shapes — A, B, or both? Show your working.', answer: 'A only. Pattern A: 2, 5, 8, 11, 14, 17, 20, … — reaches 20 at step 7. Pattern B: 1, 5, 9, 13, 17, 21, 25, … — jumps from 17 straight to 21, so it never lands on exactly 20.', checkMode: 'self' },

        // Block F — Justify, critique, and create (positions 18-19, Hard)
        { difficulty: 'Hard', question: 'A pattern of beads repeats: red, red, blue, yellow, red, red, blue, yellow, …\n\nThabiso says the 30th bead is blue. Is Thabiso correct? Show your working and explain any mistake.', answer: 'No, Thabiso is not correct. Unit length = 4 (red, red, blue, yellow). 30 ÷ 4 = 7 remainder 2. A remainder of 2 means the 2nd item in the unit, which is red, not blue. Thabiso likely counted the remainder as pointing to the 3rd item instead of the 2nd.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain the difference between a repeating pattern and a growing pattern, and give one real-life example of each.', answer: 'A repeating pattern uses the same sequence of shapes, colours or objects over and over without changing in number — for example, beads on a bracelet arranged in the same colour order again and again. A growing pattern increases in number or size at each step — for example, a stack of blocks where each layer has one more block than the layer above it.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered geometric patterns at every level.' },
        { minScore: 15, message: 'Great work! You are confident with most pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Repeating pattern basics (positions 0-3, Easy)
        { difficulty: 'Easy', question: 'A stack of blocks is arranged in a repeating order from bottom to top: triangle, square, triangle, square, triangle, square, …\n\nWhat shape is the 5th block?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'The repeating unit is: triangle, square — 2 shapes per unit.\n5 ÷ 2 = 2 remainder 1. Remainder 1 → the 1st shape in the unit, which is triangle.' },
        { difficulty: 'Easy', question: 'A row of flags at a sports day repeats: green, white, green, white, green, white, …\n\nA judge is told to look at the 12th flag in the row. What colour will she see?', answer: 'White', checkMode: 'auto', correctAnswer: 'White', correctAnswers: ['White', 'white'], explanation: 'Unit length = 2 (green, white).\n12 ÷ 2 = 6 remainder 0.\nRemainder 0 → the last colour in the unit, which is white.' },
        { difficulty: 'Medium', question: 'A woven mat uses 5 thread colours in a fixed repeating order: red, blue, yellow, green, white, red, blue, yellow, green, white, …\n\nWhat colour is the 29th thread counted from the edge of the mat?', answer: 'Green', checkMode: 'auto', correctAnswer: 'Green', correctAnswers: ['Green', 'green'], explanation: 'Unit length = 5 (red, blue, yellow, green, white).\n29 ÷ 5 = 5 remainder 4.\nRemainder 4 → the 4th colour in the unit, which is green.' },
        { difficulty: 'Medium', question: 'Three symbols repeat in a fixed order along a scarf: star, moon, sun, star, moon, sun, …\n\nA classmate says, "since 19 is odd, the 19th symbol must be the middle one of the unit — moon." Explain whether this reasoning is valid, and state the actual 19th symbol.', answer: 'The reasoning is not valid — whether a position number is odd or even tells you nothing about which item in the unit it lands on; only dividing by the unit length and looking at the remainder does that. Unit length = 3 (star, moon, sun). 19 ÷ 3 = 6 remainder 1, and a remainder of 1 means the 1st symbol in the unit, so the 19th symbol is actually star, not moon.', checkMode: 'self' },

        // Block B — Growing/shrinking patterns (positions 4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'A growing pattern uses 3 shapes in step 1, 6 shapes in step 2, 9 shapes in step 3, 12 shapes in step 4, …\n\nHow many shapes are in step 6?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18 shapes'], explanation: 'The rule is add 3 shapes each time.\nStep 4 = 12, Step 5 = 15, Step 6 = 18 shapes.' },
        { difficulty: 'Easy-Medium', question: 'A shrinking pattern uses 40 counters in step 1, 34 counters in step 2, 28 counters in step 3, …\n\nHow many counters are in step 5?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 counters'], explanation: 'The rule is subtract 6 counters each time.\nStep 3 = 28, Step 4 = 22, Step 5 = 16 counters.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 3 shapes in step 1, 8 shapes in step 2, 13 shapes in step 3, 18 shapes in step 4, …\n\nWhich step has 38 shapes?', answer: 'Step 8', checkMode: 'auto', correctAnswer: 'Step 8', correctAnswers: ['Step 8', 'step 8', '8', 'eighth', '8th', '8th step'], explanation: 'The rule is add 5 shapes each time.\nStep 4 = 18, Step 5 = 23, Step 6 = 28, Step 7 = 33, Step 8 = 38 shapes. ✓' },
        { difficulty: 'Medium', question: 'A doubling pattern uses 5 dots in step 1, 10 dots in step 2, 20 dots in step 3, 40 dots in step 4, …\n\nHow many dots are in step 5?', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80 dots'], explanation: 'The rule is double the number of dots each time.\nStep 4 = 40, Step 5 = 40 × 2 = 80 dots.' },
        { difficulty: 'Medium', question: 'Look at this growing pattern: 1 dot, 3 dots, 6 dots, 10 dots, …\n\nZinhle says the rule is "add 2 dots each time." Is Zinhle correct? Explain your answer.', answer: 'No, Zinhle is not correct. The amount added changes each time: from 1 to 3 you add 2, from 3 to 6 you add 3, and from 6 to 10 you add 4. Since the amount added keeps increasing rather than staying at 2, this is not a constant "add 2" rule.', checkMode: 'self' },

        // Block C — Shape and tessellation reasoning (positions 9-12, Medium)
        { difficulty: 'Medium', question: 'Look at the diagram. Do the squares tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Squares have straight edges that fit together with no gaps and no overlaps, as shown in the diagram. Yes, squares tessellate.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Look at the diagram. Explain why the circles leave gaps when the squares do not.', answer: 'The squares have straight edges, so each edge can sit flush against the next square with no space left over. The circles have curved edges, so wherever two circles touch, the curve bends away from its neighbour and leaves a small gap — no matter how the circles are arranged, curved edges cannot fit together perfectly like straight ones can.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'The diagram shows regular hexagons meeting at a point. Each angle of a regular hexagon is 120°. How many hexagons meet at each point in a tessellating pattern?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 hexagons'], explanation: 'For tessellation, the angles at a point must add up to 360°.\n360° ÷ 120° = 3 hexagons, as shown meeting at the point in the diagram.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 144.6,120 144.6,160 110,180 75.4,160 75.4,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 75.4,120 40.7,100 40.7,60 75.4,40 110,60" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 110,60 144.6,40 179.3,60 179.3,100 144.6,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 124 117 A 20 20 0 0 1 96 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 96 117 A 20 20 0 0 1 100 82" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 100 82 A 20 20 0 0 1 124 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'A regular pentagon has an interior angle of 108°. Using the same 360°-at-a-point rule shown in the diagram, explain why regular pentagons cannot tessellate on their own.', answer: '360° ÷ 108° = 3.33…, which is not a whole number. Pentagons cannot meet at a point without either leaving a gap (using 3 pentagons, which only fill 324°) or overlapping (using 4 pentagons, which would need 432°). Since no whole number of pentagons fills exactly 360° with no gaps or overlaps, regular pentagons do not tessellate on their own.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,105 93,157.3 65.5,72.7" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,105 65.5,72.7 154.5,72.7" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,105 154.5,72.7 127,157.3" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="105" x2="93" y2="157.3" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="105" x2="127" y2="157.3" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/><circle cx="110" cy="105" r="3" fill="#dc2626"/><text x="110" y="148" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">?</text></svg>' },

        // Block D — Real-world grid & row/column word problems (positions 13-15, Medium)
        { difficulty: 'Medium', question: 'A patio is paved with square paving stones in 8 rows of 9 stones each. How many paving stones are used in total?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 paving stones', '72 stones'], explanation: '8 rows × 9 stones = 72 paving stones.' },
        { difficulty: 'Medium', question: 'A kitchen floor is tiled with square tiles in 10 rows of 6 tiles each. How many tiles are used in total?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 tiles'], explanation: '10 rows × 6 tiles = 60 tiles.' },
        { difficulty: 'Medium', question: 'A beaded necklace repeats a unit of 4 items: circle, circle, square, triangle. If there are 28 beads in total and the pattern divides evenly, how many complete units are there?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 units'], explanation: 'Unit length = 4. 28 ÷ 4 = 7 complete units.' },

        // Block E — Multi-part & comparison (positions 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern repeats: red, red, blue, red, red, blue, …\n\na) What is the unit length?\nb) What is the 20th shape\'s colour?\nc) Is the 20th shape the same colour as the 3rd shape? Explain.', answer: 'a) 3    b) Red    c) No', parts: [ { label: 'a) What is the unit length?', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'The repeating group is red, red, blue — 3 colours per unit.' }, { label: 'b) What colour is the 20th shape?', correctAnswer: 'Red', correctAnswers: ['Red', 'red'], explanation: '20 ÷ 3 = 6 remainder 2. Remainder 2 → the 2nd colour in the unit, which is red.' }, { label: 'c) Is the 20th shape the same colour as the 3rd shape? Explain.', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The 3rd shape in the unit is blue, but the 20th shape works out to red (remainder 2, not remainder 0), so they are not the same colour.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Pattern A repeats every 4 shapes and Pattern B repeats every 6 shapes. Both patterns start their unit at position 1. At which position number will both patterns next begin a new unit together (other than position 1)?', answer: 'Position 13. Pattern A starts a new unit at positions 1, 5, 9, 13, 17, … (every 4). Pattern B starts a new unit at positions 1, 7, 13, 19, … (every 6). The first position they share after 1 is 13.', checkMode: 'self' },

        // Block F — Justify, critique, and create (positions 18-19, Hard)
        { difficulty: 'Hard', question: 'A pattern repeats: circle, circle, square, triangle, circle, circle, square, triangle, …\n\nLindiwe says the 21st shape is a square. Is Lindiwe correct? Show your working and explain any mistake.', answer: 'No, Lindiwe is not correct. Unit length = 4 (circle, circle, square, triangle). 21 ÷ 4 = 5 remainder 1. A remainder of 1 means the 1st shape in the unit, which is circle, not square. Lindiwe likely counted the remainder as pointing to the 3rd item instead of the 1st.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Design your own repeating pattern using 4 different shapes or colours. Write the rule and the first 8 terms.', answer: 'Any valid repeating pattern using 4 different shapes or colours is correct.\n\nChecklist:\n• Uses exactly 4 different shapes or colours\n• The same sequence repeats exactly\n• The first 8 terms are written (2 full repeats of the unit)\n• The rule is clearly stated\n\nExample: circle, square, triangle, star, circle, square, triangle, star\nRule: repeat circle, square, triangle, star over and over.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered geometric patterns at every level.' },
        { minScore: 15, message: 'Great work! You are confident with most pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
