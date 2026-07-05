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
    // SET 1 — REPEATING PATTERNS: IDENTIFYING THE NTH SHAPE (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Repeating Patterns',
      questions: [
        { difficulty: 'Easy', question: 'A pattern repeats: circle, square, circle, square, circle, square, …\n\nWhat is the 4th shape?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: 'The repeating unit is: circle, square — 2 shapes per unit.\n4 ÷ 2 = 2 remainder 0. A remainder of 0 means it is the last shape in the unit, which is square.' },
        { difficulty: 'Easy', question: 'A pattern repeats: circle, square, circle, square, circle, square, …\n\nWhat is the 7th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 2.\n7 ÷ 2 = 3 remainder 1.\nRemainder 1 → the 1st shape in the unit, which is circle.' },
        { difficulty: 'Easy', question: 'A pattern repeats: triangle, circle, triangle, circle, triangle, circle, …\n\nWhat is the 10th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 2 (triangle, circle).\n10 ÷ 2 = 5 remainder 0.\nRemainder 0 → the last shape in the unit, which is circle.' },
        { difficulty: 'Easy', question: 'A pattern repeats: circle, square, triangle, circle, square, triangle, …\n\nWhat is the 6th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 3 (circle, square, triangle).\n6 ÷ 3 = 2 remainder 0.\nRemainder 0 → the last shape in the unit, which is triangle.' },
        { difficulty: 'Easy', question: 'A pattern repeats: circle, square, triangle, circle, square, triangle, …\n\nWhat is the 9th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 3.\n9 ÷ 3 = 3 remainder 0.\nRemainder 0 → the last shape in the unit, which is triangle.' },
        { difficulty: 'Medium', question: 'A pattern repeats: circle, square, triangle, circle, square, triangle, …\n\nWhat is the 14th shape?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: 'Unit length = 3.\n14 ÷ 3 = 4 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is square.' },
        { difficulty: 'Easy', question: 'A pattern of beads repeats: red, blue, green, red, blue, green, …\n\nWhat colour is the 8th bead?', answer: 'Blue', checkMode: 'auto', correctAnswer: 'Blue', correctAnswers: ['Blue', 'blue'], explanation: 'Unit length = 3 (red, blue, green).\n8 ÷ 3 = 2 remainder 2.\nRemainder 2 → the 2nd colour in the unit, which is blue.' },
        { difficulty: 'Medium', question: 'A pattern of beads repeats: red, blue, green, red, blue, green, …\n\nWhat colour is the 11th bead?', answer: 'Blue', checkMode: 'auto', correctAnswer: 'Blue', correctAnswers: ['Blue', 'blue'], explanation: 'Unit length = 3.\n11 ÷ 3 = 3 remainder 2.\nRemainder 2 → the 2nd colour in the unit, which is blue.' },
        { difficulty: 'Medium', question: 'A pattern of beads repeats: red, blue, green, red, blue, green, …\n\nWhat colour is the 16th bead?', answer: 'Red', checkMode: 'auto', correctAnswer: 'Red', correctAnswers: ['Red', 'red'], explanation: 'Unit length = 3.\n16 ÷ 3 = 5 remainder 1.\nRemainder 1 → the 1st colour in the unit, which is red.' },
        { difficulty: 'Medium', question: 'A pattern repeats: circle, circle, triangle, square, circle, circle, triangle, square, …\n\nWhat is the 10th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 4 (circle, circle, triangle, square).\n10 ÷ 4 = 2 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is circle.' },
        { difficulty: 'Medium', question: 'A pattern repeats: circle, circle, triangle, square, circle, circle, triangle, square, …\n\nWhat is the 13th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 4.\n13 ÷ 4 = 3 remainder 1.\nRemainder 1 → the 1st shape in the unit, which is circle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, circle, triangle, square, circle, circle, triangle, square, …\n\nWhat is the 18th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 4.\n18 ÷ 4 = 4 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is circle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, circle, triangle, square, circle, circle, triangle, square, …\n\nWhat is the 22nd shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 4.\n22 ÷ 4 = 5 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is circle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: star, star, moon, sun, cloud, star, star, moon, sun, cloud, …\n\nWhat is the 12th shape?', answer: 'Star', checkMode: 'auto', correctAnswer: 'Star', correctAnswers: ['Star', 'star'], explanation: 'Unit length = 5 (star, star, moon, sun, cloud).\n12 ÷ 5 = 2 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is star.' },
        { difficulty: 'Hard', question: 'A pattern repeats: star, star, moon, sun, cloud, star, star, moon, sun, cloud, …\n\nWhat is the 17th shape?', answer: 'Star', checkMode: 'auto', correctAnswer: 'Star', correctAnswers: ['Star', 'star'], explanation: 'Unit length = 5.\n17 ÷ 5 = 3 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is star.' },
        { difficulty: 'Hard', question: 'A pattern repeats: star, star, moon, sun, cloud, star, star, moon, sun, cloud, …\n\nWhat is the 23rd shape?', answer: 'Moon', checkMode: 'auto', correctAnswer: 'Moon', correctAnswers: ['Moon', 'moon'], explanation: 'Unit length = 5.\n23 ÷ 5 = 4 remainder 3.\nRemainder 3 → the 3rd shape in the unit, which is moon.' },
        { difficulty: 'Easy', question: 'A pattern of flags repeats: red, yellow, red, yellow, red, yellow, …\n\nWhat colour is the 15th flag?', answer: 'Red', checkMode: 'auto', correctAnswer: 'Red', correctAnswers: ['Red', 'red'], explanation: 'Unit length = 2 (red, yellow).\n15 ÷ 2 = 7 remainder 1.\nRemainder 1 → the 1st colour in the unit, which is red.' },
        { difficulty: 'Easy', question: 'A pattern of flags repeats: red, yellow, red, yellow, red, yellow, …\n\nWhat colour is the 20th flag?', answer: 'Yellow', checkMode: 'auto', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: 'Unit length = 2.\n20 ÷ 2 = 10 remainder 0.\nRemainder 0 → the last colour in the unit, which is yellow.' },
        { difficulty: 'Medium', question: 'A pattern repeats: triangle, triangle, square, triangle, triangle, square, …\n\nWhat is the 19th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 3 (triangle, triangle, square).\n19 ÷ 3 = 6 remainder 1.\nRemainder 1 → the 1st shape in the unit, which is triangle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: triangle, triangle, square, triangle, triangle, square, …\n\nWhat is the 25th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 3.\n25 ÷ 3 = 8 remainder 1.\nRemainder 1 → the 1st shape in the unit, which is triangle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, square, triangle, star, circle, square, triangle, star, …\n\nWhat is the 30th shape?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square'], explanation: 'Unit length = 4 (circle, square, triangle, star).\n30 ÷ 4 = 7 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is square.' },
        { difficulty: 'Medium', question: 'A pattern of ribbons repeats: blue, green, yellow, blue, green, yellow, …\n\nWhat colour is the 27th ribbon?', answer: 'Yellow', checkMode: 'auto', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: 'Unit length = 3 (blue, green, yellow).\n27 ÷ 3 = 9 remainder 0.\nRemainder 0 → the last colour in the unit, which is yellow.' },
        { difficulty: 'Medium', question: 'A pattern of ribbons repeats: blue, green, yellow, blue, green, yellow, …\n\nWhat colour is the 21st ribbon?', answer: 'Yellow', checkMode: 'auto', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: 'Unit length = 3.\n21 ÷ 3 = 7 remainder 0.\nRemainder 0 → the last colour in the unit, which is yellow.' },
        { difficulty: 'Hard', question: 'A pattern repeats: square, circle, circle, triangle, square, circle, circle, triangle, …\n\nWhat is the 24th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 4 (square, circle, circle, triangle).\n24 ÷ 4 = 6 remainder 0.\nRemainder 0 → the last shape in the unit, which is triangle.' },
        { difficulty: 'Easy-Medium', question: 'A pattern repeats: circle, square, triangle, star, moon, circle, square, triangle, star, moon, …\n\nWhat is the 5th shape?', answer: 'Moon', checkMode: 'auto', correctAnswer: 'Moon', correctAnswers: ['Moon', 'moon'], explanation: 'Unit length = 5 (circle, square, triangle, star, moon).\n5 ÷ 5 = 1 remainder 0.\nRemainder 0 → the last shape in the unit, which is moon.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered spotting shapes in a repeating pattern.' },
        { minScore: 19, message: 'Great work! You are confident finding the nth shape in a pattern — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Go back over dividing by the unit length and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — GROWING AND SHRINKING PATTERNS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Growing and Shrinking Patterns',
      questions: [
        { difficulty: 'Easy', question: 'A growing pattern uses 1 dot in step 1, 3 dots in step 2, 5 dots in step 3, 7 dots in step 4, …\n\nFollowing this rule, how many dots are in step 6?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 dots'], explanation: 'The rule is add 2 dots each time.\nStep 4 = 7, Step 5 = 7 + 2 = 9, Step 6 = 9 + 2 = 11 dots.' },
        { difficulty: 'Easy', question: 'A growing pattern uses 2 squares in step 1, 4 squares in step 2, 6 squares in step 3, 8 squares in step 4, …\n\nHow many squares are in step 7?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 squares'], explanation: 'The rule is add 2 squares each time.\nStep 4 = 8, Step 5 = 10, Step 6 = 12, Step 7 = 14 squares.' },
        { difficulty: 'Easy', question: 'A growing pattern uses 3 triangles in step 1, 6 triangles in step 2, 9 triangles in step 3, …\n\nHow many triangles are in step 5?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 triangles'], explanation: 'The rule is add 3 triangles each time.\nStep 3 = 9, Step 4 = 12, Step 5 = 15 triangles.' },
        { difficulty: 'Easy', question: 'A growing pattern uses 2 circles in step 1, 5 circles in step 2, 8 circles in step 3, …\n\nHow many circles are in step 6?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 circles'], explanation: 'The rule is add 3 circles each time.\nStep 3 = 8, Step 4 = 11, Step 5 = 14, Step 6 = 17 circles.' },
        { difficulty: 'Medium', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 6 rows?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21 squares'], explanation: 'Add up all the rows from 1 to 6:\n1 + 2 + 3 + 4 + 5 + 6 = 21 squares.' },
        { difficulty: 'Medium', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 7 rows?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 squares'], explanation: 'Add up all the rows from 1 to 7:\n1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 squares.' },
        { difficulty: 'Easy', question: 'A growing pattern uses 4 stars in step 1, 8 stars in step 2, 12 stars in step 3, …\n\nHow many stars are in step 5?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 stars'], explanation: 'The rule is add 4 stars each time.\nStep 3 = 12, Step 4 = 16, Step 5 = 20 stars.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 5 tiles in step 1, 10 tiles in step 2, 15 tiles in step 3, …\n\nHow many tiles are in step 6?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 tiles'], explanation: 'The rule is add 5 tiles each time.\nStep 3 = 15, Step 4 = 20, Step 5 = 25, Step 6 = 30 tiles.' },
        { difficulty: 'Medium', question: 'A shrinking pattern uses 20 counters in step 1, 17 counters in step 2, 14 counters in step 3, …\n\nHow many counters are in step 5?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 counters'], explanation: 'The rule is subtract 3 counters each time.\nStep 3 = 14, Step 4 = 11, Step 5 = 8 counters.' },
        { difficulty: 'Medium', question: 'A shrinking pattern uses 30 blocks in step 1, 25 blocks in step 2, 20 blocks in step 3, …\n\nHow many blocks are in step 6?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 blocks'], explanation: 'The rule is subtract 5 blocks each time.\nStep 3 = 20, Step 4 = 15, Step 5 = 10, Step 6 = 5 blocks.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 1 shape in step 1, 4 shapes in step 2, 7 shapes in step 3, 10 shapes in step 4, …\n\nWhich step has 22 shapes?', answer: 'Step 8', checkMode: 'auto', correctAnswer: 'Step 8', correctAnswers: ['Step 8', 'step 8', '8', 'eighth', '8th', '8th step'], explanation: 'The rule is add 3 shapes each time.\nStep 4 = 10, Step 5 = 13, Step 6 = 16, Step 7 = 19, Step 8 = 22 shapes. ✓' },
        { difficulty: 'Medium', question: 'A growing pattern uses 2 shapes in step 1, 6 shapes in step 2, 10 shapes in step 3, 14 shapes in step 4, …\n\nWhich step has 26 shapes?', answer: 'Step 7', checkMode: 'auto', correctAnswer: 'Step 7', correctAnswers: ['Step 7', 'step 7', '7', 'seventh', '7th', '7th step'], explanation: 'The rule is add 4 shapes each time.\nStep 4 = 14, Step 5 = 18, Step 6 = 22, Step 7 = 26 shapes. ✓' },
        { difficulty: 'Hard', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 8 rows?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 squares'], explanation: 'Add up all the rows from 1 to 8:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 squares.' },
        { difficulty: 'Hard', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 9 rows?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 squares'], explanation: 'Add up all the rows from 1 to 9:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 squares.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 3 shapes in step 1, 7 shapes in step 2, 11 shapes in step 3, …\n\nHow many shapes are in step 7?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 shapes'], explanation: 'The rule is add 4 shapes each time.\nStep 3 = 11, Step 4 = 15, Step 5 = 19, Step 6 = 23, Step 7 = 27 shapes.' },
        { difficulty: 'Hard', question: 'A growing pattern uses 6 shapes in step 1, 11 shapes in step 2, 16 shapes in step 3, …\n\nHow many shapes are in step 8?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 shapes'], explanation: 'The rule is add 5 shapes each time.\nStep 3 = 16, Step 4 = 21, Step 5 = 26, Step 6 = 31, Step 7 = 36, Step 8 = 41 shapes.' },
        { difficulty: 'Hard', question: 'A growing pattern uses 1 shape in step 1, 4 shapes in step 2, 7 shapes in step 3, …\n\nHow many shapes are in step 9?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 shapes'], explanation: 'The rule is add 3 shapes each time.\nStep 3 = 7, Step 4 = 10, Step 5 = 13, Step 6 = 16, Step 7 = 19, Step 8 = 22, Step 9 = 25 shapes.' },
        { difficulty: 'Medium', question: 'A doubling pattern uses 2 dots in step 1, 4 dots in step 2, 8 dots in step 3, 16 dots in step 4, …\n\nHow many dots are in step 5?', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32 dots'], explanation: 'The rule is double the number of dots each time.\nStep 4 = 16, Step 5 = 16 × 2 = 32 dots.' },
        { difficulty: 'Hard', question: 'A doubling pattern uses 2 dots in step 1, 4 dots in step 2, 8 dots in step 3, 16 dots in step 4, 32 dots in step 5, …\n\nHow many dots are in step 6?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 dots'], explanation: 'The rule is double the number of dots each time.\nStep 5 = 32, Step 6 = 32 × 2 = 64 dots.' },
        { difficulty: 'Hard', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 10 rows?', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 squares'], explanation: 'Add up all the rows from 1 to 10:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55 squares.' },
        { difficulty: 'Hard', question: 'A growing pattern uses 5 shapes in step 1, 9 shapes in step 2, 13 shapes in step 3, …\n\nWhich step has 33 shapes?', answer: 'Step 8', checkMode: 'auto', correctAnswer: 'Step 8', correctAnswers: ['Step 8', 'step 8', '8', 'eighth', '8th', '8th step'], explanation: 'The rule is add 4 shapes each time.\nStep 3 = 13, Step 4 = 17, Step 5 = 21, Step 6 = 25, Step 7 = 29, Step 8 = 33 shapes. ✓' },
        { difficulty: 'Medium', question: 'A shrinking pattern uses 24 beads in step 1, 20 beads in step 2, 16 beads in step 3, …\n\nHow many beads are in step 6?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 beads'], explanation: 'The rule is subtract 4 beads each time.\nStep 3 = 16, Step 4 = 12, Step 5 = 8, Step 6 = 4 beads.' },
        { difficulty: 'Medium', question: 'A shrinking pattern uses 40 counters in step 1, 35 counters in step 2, 30 counters in step 3, …\n\nHow many counters are in step 7?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 counters'], explanation: 'The rule is subtract 5 counters each time.\nStep 3 = 30, Step 4 = 25, Step 5 = 20, Step 6 = 15, Step 7 = 10 counters.' },
        { difficulty: 'Hard', question: 'A growing pattern uses 2 shapes in step 1, 7 shapes in step 2, 12 shapes in step 3, …\n\nWhich step has 47 shapes?', answer: 'Step 10', checkMode: 'auto', correctAnswer: 'Step 10', correctAnswers: ['Step 10', 'step 10', '10', 'tenth', '10th', '10th step'], explanation: 'The rule is add 5 shapes each time.\nStep 3 = 12, Step 4 = 17, Step 5 = 22, Step 6 = 27, Step 7 = 32, Step 8 = 37, Step 9 = 42, Step 10 = 47 shapes. ✓' },
        { difficulty: 'Hard', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\nHow many squares are there in total after 12 rows?', answer: '78', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 squares'], explanation: 'Add up all the rows from 1 to 12:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 78 squares.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered growing and shrinking patterns.' },
        { minScore: 19, message: 'Great work! You can confidently find the rule and apply it — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Practise finding the difference between steps and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — TESSELLATION AND REAL-WORLD PATTERN PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Tessellation and Real-World Patterns',
      questions: [
        { difficulty: 'Easy', question: 'Does a square tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Squares have straight edges that fit together with no gaps and no overlaps. Yes, squares tessellate.' },
        { difficulty: 'Easy', question: 'Does a circle tessellate? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Circles have curved edges that always leave gaps when placed next to each other. No, circles do not tessellate.' },
        { difficulty: 'Easy', question: 'Does an equilateral triangle tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Triangles have straight edges that fit together with no gaps. Yes, triangles tessellate.' },
        { difficulty: 'Medium', question: 'Each angle of a square is 90°. How many squares meet at each point in a tessellating pattern?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 squares'], explanation: 'For tessellation, angles at a point must add up to 360°.\n360° ÷ 90° = 4 squares.' },
        { difficulty: 'Medium', question: 'Each angle of an equilateral triangle is 60°. How many triangles meet at each point in a tessellating pattern?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 triangles'], explanation: 'For tessellation, angles at a point must add up to 360°.\n360° ÷ 60° = 6 triangles.' },
        { difficulty: 'Medium', question: 'Each angle of a regular hexagon is 120°. How many hexagons meet at each point in a tessellating pattern?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 hexagons'], explanation: 'For tessellation, angles at a point must add up to 360°.\n360° ÷ 120° = 3 hexagons.' },
        { difficulty: 'Easy', question: 'A bathroom floor is tiled with square tiles in 4 rows of 5 tiles each. How many tiles are used in total?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 tiles'], explanation: '4 rows × 5 tiles = 20 tiles.' },
        { difficulty: 'Easy', question: 'A wall is tiled with square tiles in 6 rows of 7 tiles each. How many tiles are used in total?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 tiles'], explanation: '6 rows × 7 tiles = 42 tiles.' },
        { difficulty: 'Medium', question: 'A patio is paved with square paving stones in 8 rows of 9 stones each. How many paving stones are used in total?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 paving stones', '72 stones'], explanation: '8 rows × 9 stones = 72 paving stones.' },
        { difficulty: 'Medium', question: 'A kitchen floor is tiled with square tiles in 10 rows of 6 tiles each. How many tiles are used in total?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 tiles'], explanation: '10 rows × 6 tiles = 60 tiles.' },
        { difficulty: 'Easy', question: 'A brick wall has bricks laid in 3 rows of 12 bricks each. How many bricks are used in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 bricks'], explanation: '3 rows × 12 bricks = 36 bricks.' },
        { difficulty: 'Medium', question: 'A chessboard-style grid has 5 rows of 5 squares each. How many squares are there in total?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 squares'], explanation: '5 rows × 5 squares = 25 squares.' },
        { difficulty: 'Medium', question: 'A honeycomb section has 7 rows of 8 hexagonal cells each. How many cells are there in total?', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 cells'], explanation: '7 rows × 8 cells = 56 cells.' },
        { difficulty: 'Medium', question: 'A window has rectangular panes arranged in 9 rows of 4 panes each. How many panes are there in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 panes'], explanation: '9 rows × 4 panes = 36 panes.' },
        { difficulty: 'Medium', question: 'A fence has posts arranged in 12 rows of 3 posts each. How many posts are there in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 posts'], explanation: '12 rows × 3 posts = 36 posts.' },
        { difficulty: 'Easy', question: 'A beaded bracelet has beads that repeat: red, blue, green. If there are 18 beads in total and the pattern divides evenly, how many red beads are there?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 beads', '6 red beads'], explanation: 'Unit length = 3 (red, blue, green). 18 ÷ 3 = 6 complete units, so there are 6 red beads.' },
        { difficulty: 'Medium', question: 'A beaded necklace has beads that repeat: circle, circle, square, triangle (unit length 4). If there are 24 beads in total and the pattern divides evenly, how many complete units are there?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 units'], explanation: 'Unit length = 4. 24 ÷ 4 = 6 complete units.' },
        { difficulty: 'Hard', question: 'Lerato is tiling a floor with regular hexagon tiles. Each hexagon has an interior angle of 120°. Do the hexagons tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '360° ÷ 120° = 3 (a whole number), so hexagons fit perfectly around every point. Yes, they tessellate.' },
        { difficulty: 'Hard', question: 'Amahle is tiling a floor with regular pentagon tiles. Each pentagon has an interior angle of 108°. Do the pentagons tessellate on their own? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '360° ÷ 108° = 3.33…, which is not a whole number, so pentagons leave gaps and do not tessellate on their own.' },
        { difficulty: 'Medium', question: 'A Ndebele wall painting uses a repeating pattern of 4 colours around a border. If the border has 32 shapes and the pattern divides evenly, how many shapes are there of each colour?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 shapes'], explanation: 'Unit length = 4 colours. 32 ÷ 4 = 8 shapes of each colour.' },
        { difficulty: 'Easy', question: 'Thabo sees floor tiles arranged in 6 rows of 6 tiles. How many tiles are on the floor in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 tiles'], explanation: '6 rows × 6 tiles = 36 tiles.' },
        { difficulty: 'Medium', question: 'Sipho is building a brick path using a repeating pattern of 3 colours of brick. If the path has 27 bricks and the pattern divides evenly, how many bricks are there of each colour?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 bricks'], explanation: 'Unit length = 3 colours. 27 ÷ 3 = 9 bricks of each colour.' },
        { difficulty: 'Hard', question: 'A tiler wants to use regular octagons (interior angle 135°) to tile a floor by themselves. Will regular octagons tessellate on their own? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '360° ÷ 135° = 2.67…, which is not a whole number, so regular octagons leave gaps and cannot tessellate on their own.' },
        { difficulty: 'Medium', question: 'Why does a rectangle tessellate but a circle does not? Give one reason.', answer: 'A rectangle has straight edges that fit flush against each other with no gaps, while a circle has curved edges that always leave gaps when placed next to each other.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain why the angles around a meeting point must add up to exactly 360° for a shape to tessellate.', answer: '360° is a full turn all the way around a single point. If the angles of the shapes meeting at that point add up to exactly 360°, they fill all the space around the point with nothing left over — no gaps and no overlaps. If they add up to less than 360°, there are gaps; if more, the shapes overlap.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered tessellation and real-world pattern problems.' },
        { minScore: 19, message: 'Great work! You understand tessellating shapes and pattern word problems — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the tessellation worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND SELF-CHECK QUESTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Easy', question: 'Is this pattern repeating or growing?\n\ncircle, square, circle, square, circle, square', answer: 'Repeating', checkMode: 'auto', correctAnswer: 'Repeating', correctAnswers: ['Repeating', 'repeating'], explanation: 'The same group — circle, square — comes back over and over without changing in number. This is a repeating pattern.' },
        { difficulty: 'Easy', question: 'Is this pattern repeating or growing?\n\n2 dots, 5 dots, 8 dots, 11 dots', answer: 'Growing', checkMode: 'auto', correctAnswer: 'Growing', correctAnswers: ['Growing', 'growing'], explanation: 'The number of dots increases each time: 2, 5, 8, 11. This is a growing pattern.' },
        { difficulty: 'Medium', question: 'A pattern repeats: circle, square, triangle, star (unit length 4).\n\nWhat is the 27th shape?', answer: 'Triangle', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle'], explanation: 'Unit length = 4.\n27 ÷ 4 = 6 remainder 3.\nRemainder 3 → the 3rd shape in the unit, which is triangle.' },
        { difficulty: 'Medium', question: 'A staircase pattern has 1 square in row 1, 2 squares in row 2, and so on. How many squares are there in total after 15 rows?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120 squares'], explanation: 'Add up all the rows from 1 to 15:\n1 + 2 + 3 + … + 15 = 120 squares.' },
        { difficulty: 'Medium', question: 'A growing pattern uses 4 shapes in step 1, 9 shapes in step 2, 14 shapes in step 3, …\n\nWhich step has 49 shapes?', answer: 'Step 10', checkMode: 'auto', correctAnswer: 'Step 10', correctAnswers: ['Step 10', 'step 10', '10', 'tenth', '10th', '10th step'], explanation: 'The rule is add 5 shapes each time.\nStep 3 = 14, Step 4 = 19, Step 5 = 24, Step 6 = 29, Step 7 = 34, Step 8 = 39, Step 9 = 44, Step 10 = 49 shapes. ✓' },
        { difficulty: 'Medium', question: 'A growing pattern uses 3 triangles in step 1, 6 triangles in step 2, 9 triangles in step 3, …\n\nHow many triangles are in step 12?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 triangles'], explanation: 'The rule is add 3 triangles each time, so step n = 3 × n.\nStep 12 = 3 × 12 = 36 triangles.' },
        { difficulty: 'Medium', question: 'A pattern repeats: star, star, moon, sun, cloud (unit length 5).\n\nWhat is the 33rd shape?', answer: 'Moon', checkMode: 'auto', correctAnswer: 'Moon', correctAnswers: ['Moon', 'moon'], explanation: 'Unit length = 5.\n33 ÷ 5 = 6 remainder 3.\nRemainder 3 → the 3rd shape in the unit, which is moon.' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, square, triangle (unit length 3).\n\nWhat is the 100th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 3.\n100 ÷ 3 = 33 remainder 1.\nRemainder 1 → the 1st shape in the unit, which is circle.' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, circle, triangle, square (unit length 4).\n\nWhat is the 50th shape?', answer: 'Circle', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: 'Unit length = 4.\n50 ÷ 4 = 12 remainder 2.\nRemainder 2 → the 2nd shape in the unit, which is circle.' },
        { difficulty: 'Medium', question: 'A doubling pattern uses 3 dots in step 1, 6 dots in step 2, 12 dots in step 3, 24 dots in step 4, …\n\nHow many dots are in step 5?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 dots'], explanation: 'The rule is double the number of dots each time.\nStep 4 = 24, Step 5 = 24 × 2 = 48 dots.' },
        { difficulty: 'Hard', question: 'A growing pattern uses 2 shapes in step 1, 6 shapes in step 2, 10 shapes in step 3, …\n\nWhich step has 50 shapes?', answer: 'Step 13', checkMode: 'auto', correctAnswer: 'Step 13', correctAnswers: ['Step 13', 'step 13', '13', 'thirteenth', '13th', '13th step'], explanation: 'The rule is add 4 shapes each time.\nStep 3 = 10, Step 4 = 14, Step 5 = 18, Step 6 = 22, Step 7 = 26, Step 8 = 30, Step 9 = 34, Step 10 = 38, Step 11 = 42, Step 12 = 46, Step 13 = 50 shapes. ✓' },
        { difficulty: 'Easy', question: 'Does a rectangle tessellate? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Rectangles have straight edges that fit together with no gaps. Yes, rectangles tessellate.' },
        { difficulty: 'Medium', question: 'A pattern shows: 5 shapes, 5 shapes, 5 shapes, 5 shapes, …\n\nIs this a repeating pattern, a growing pattern, or neither? Explain your answer.', answer: 'Neither — the number of shapes stays exactly the same every time (5, 5, 5, 5), so it is not growing. It is also not a repeating pattern in the usual sense because there is only one term that repeats, rather than a sequence of different shapes cycling through a unit.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Describe, in your own words, the rule for this pattern: 1 square, 4 squares, 7 squares, 10 squares, …', answer: 'The rule is: start with 1 square and add 3 squares each time to get the next term.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A pattern repeats: red, red, blue, red, red, blue, …\n\nIs this pattern repeating or growing? What is the unit length?', answer: 'a) Repeating    b) Unit length 3', parts: [ { label: 'a) Repeating or growing?', correctAnswer: 'Repeating', correctAnswers: ['Repeating', 'repeating'], explanation: 'The same group of colours (red, red, blue) comes back over and over without changing in number.' }, { label: 'b) What is the unit length?', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'The repeating group is red, red, blue — 3 colours per unit.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'A growing pattern and a repeating pattern both start with 2 shapes. After 4 steps, which type of pattern usually has more shapes — growing or repeating? Explain why.', answer: 'A growing pattern usually has more shapes after several steps, because it keeps adding more shapes each time. A repeating pattern keeps the same small group of shapes cycling, so the amount used in each cycle does not increase — only the position in the pattern changes.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain the difference between a repeating pattern and a growing pattern, and give one real-life example of each.', answer: 'A repeating pattern uses the same sequence of shapes, colours or objects over and over without changing in number — for example, tiles on a floor arranged in the same colour order again and again. A growing pattern increases in number or size at each step — for example, a staircase where each step has one more brick than the step before it.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A pattern repeats: yellow, green, yellow, green, yellow, green, …\n\na) What is the unit length?\nb) What colour is the 13th shape?', answer: 'a) 2    b) Yellow', parts: [ { label: 'a) What is the unit length?', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'The repeating group is yellow, green — 2 colours per unit.' }, { label: 'b) What colour is the 13th shape?', correctAnswer: 'Yellow', correctAnswers: ['Yellow', 'yellow'], explanation: 'Unit length = 2. 13 ÷ 2 = 6 remainder 1. Remainder 1 → the 1st colour, which is yellow.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'A growing pattern uses 2 shapes in step 1 and adds 4 shapes each time.\n\na) How many shapes are in step 4?\nb) How many shapes are in step 6?', answer: 'a) 14    b) 22', parts: [ { label: 'a) How many shapes in step 4?', correctAnswer: '14', correctAnswers: ['14', '14 shapes'], explanation: 'Step 1 = 2. Step 2 = 6. Step 3 = 10. Step 4 = 14 shapes.' }, { label: 'b) How many shapes in step 6?', correctAnswer: '22', correctAnswers: ['22', '22 shapes'], explanation: 'Continue from Step 4 (14): Step 5 = 18. Step 6 = 22 shapes.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Design a repeating pattern using 3 different shapes. Write the rule and the first 9 terms.', answer: 'Any valid repeating pattern using 3 different shapes is correct.\n\nChecklist:\n• Uses exactly 3 different shapes\n• The same sequence repeats exactly\n• The first 9 terms are written (3 full repeats of the unit)\n• The rule is clearly stated\n\nExample: circle, square, triangle, circle, square, triangle, circle, square, triangle\nRule: repeat circle, square, triangle over and over.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A pattern repeats: circle, square, triangle, circle, square, triangle, …\n\na) What is the unit length?\nb) What is the 40th shape?\nc) Is a triangle used at position 40? Explain.', answer: 'a) 3    b) circle    c) No', parts: [ { label: 'a) What is the unit length?', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'The repeating group is circle, square, triangle — 3 shapes per unit.' }, { label: 'b) What is the 40th shape?', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle'], explanation: '40 ÷ 3 = 13 remainder 1. Remainder 1 → the 1st shape, which is circle.' }, { label: 'c) Is a triangle used at position 40? Explain.', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The 40th shape is circle, not triangle, because the remainder is 1 (not 0), so position 40 lands on the 1st shape in the unit.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Look at this growing pattern: 1 square, 3 squares, 6 squares, 10 squares, …\n\nIs the rule "add the same number each time"? Explain your answer.', answer: 'No — the amount added is not the same each time. From 1 to 3 you add 2, from 3 to 6 you add 3, and from 6 to 10 you add 4. The amount being added itself increases by 1 each time, so this pattern grows faster than a simple "add the same number" pattern.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A pattern of coloured tiles repeats every 6 tiles: red, red, blue, blue, green, green.\n\nWhat colour is the 29th tile?', answer: 'Green', checkMode: 'auto', correctAnswer: 'Green', correctAnswers: ['Green', 'green'], explanation: 'Unit length = 6.\n29 ÷ 6 = 4 remainder 5.\nRemainder 5 → the 5th item in the unit (red, red, blue, blue, green, green), which is green.' },
        { difficulty: 'Easy', question: 'A garden path uses paving stones in a growing pattern: 2 stones in row 1, 4 stones in row 2, 6 stones in row 3.\n\nHow many stones are in row 5?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 stones'], explanation: 'The rule is add 2 stones each time.\nRow 3 = 6, Row 4 = 8, Row 5 = 10 stones.' },
        { difficulty: 'Medium', question: 'Look at this pattern: circle, square, circle, square, circle, square, …\n\nIs this pattern an example of tessellation, a repeating pattern, or both? Explain your answer.', answer: 'It is a repeating pattern because the same two shapes (circle, square) keep coming back in the same order. It is not necessarily an example of tessellation, because tessellation is about shapes fitting together with no gaps and no overlaps when tiling a surface — this pattern is just a sequence, and whether the shapes tessellate depends on whether circles and squares are actually being fitted together edge to edge (circles alone would not tessellate).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined geometric pattern problems.' },
        { minScore: 19, message: 'Great work! You can confidently combine ideas about patterns — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
