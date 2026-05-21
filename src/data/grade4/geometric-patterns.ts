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
    },
  ],

  topicPractice: [

    // ── SECTION 1: WHAT IS A GEOMETRIC PATTERN? ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Is this a repeating or growing pattern?\n\ncircle, square, circle, square, circle, square',
      answer: 'Repeating',
      correctAnswer: 'Repeating',
      correctAnswers: ['Repeating', 'repeating', 'repeat', 'repeating pattern'],
      explanation:
        'The same sequence — circle, square — comes back over and over without growing.\n' +
        'When the same group repeats, it is called a repeating pattern.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Describe the pattern and find the next two terms:\n\n' +
        '1 dot, 3 dots, 5 dots, 7 dots, …\n\n' +
        'a) Is this repeating or growing?\n' +
        'b) What is the rule?\n' +
        'c) What are the next two terms?',
      answer: 'a) Growing    b) Add 2 dots each time    c) 9 dots, 11 dots',
      parts: [
        {
          label: 'a) Is this repeating or growing?',
          correctAnswer: 'Growing',
          correctAnswers: ['Growing', 'growing', 'growing pattern'],
          explanation:
            'The number of dots increases each time: 1, 3, 5, 7 …\n' +
            'Because the amounts get bigger, this is a growing pattern.',
        },
        {
          label: 'b) What is the rule?',
          correctAnswer: 'Add 2 dots each time',
          correctAnswers: [
            'Add 2 dots each time', 'add 2 dots each time',
            'Add 2', 'add 2', '+2', 'plus 2', 'plus2',
            'add 2 each time', 'Add 2 each time',
          ],
          explanation:
            'Find the difference between consecutive terms:\n' +
            '3 − 1 = 2,  5 − 3 = 2,  7 − 5 = 2\n' +
            'Rule: add 2 dots each time.',
        },
        {
          label: 'c) What are the next two terms?',
          correctAnswer: '9dots11dots',
          correctAnswers: [
            '9dots11dots', '9 dots11 dots', '9dot11dot',
            '9,11', '911',
          ],
          explanation:
            'Apply the rule (add 2) twice from the last known term:\n' +
            '7 + 2 = 9 dots\n' +
            '9 + 2 = 11 dots',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A pattern starts with 1 triangle and adds 3 triangles each time.\n\n' +
        'a) How many triangles are in the 5th term?\n' +
        'b) How many triangles are in the 8th term?\n' +
        'c) Which term has 22 triangles?',
      answer: 'a) 13    b) 22    c) 8th term',
      parts: [
        {
          label: 'a) How many triangles in the 5th term?',
          correctAnswer: '13',
          explanation:
            'Term 1 = 1 triangle. Add 3 each time:\n' +
            'Term 2 = 1 + 3 = 4\n' +
            'Term 3 = 4 + 3 = 7\n' +
            'Term 4 = 7 + 3 = 10\n' +
            'Term 5 = 10 + 3 = 13',
        },
        {
          label: 'b) How many triangles in the 8th term?',
          correctAnswer: '22',
          explanation:
            'Continue the pattern from Term 5 (13):\n' +
            'Term 6 = 13 + 3 = 16\n' +
            'Term 7 = 16 + 3 = 19\n' +
            'Term 8 = 19 + 3 = 22',
        },
        {
          label: 'c) Which term has 22 triangles?',
          correctAnswer: '8th term',
          correctAnswers: ['8th term', '8', 'term 8', 'eighth', 'eighth term'],
          explanation:
            'From part b) we found Term 8 = 22 triangles.\n' +
            'You can also use the formula: Term n = 1 + (n − 1) × 3\n' +
            '22 = 1 + (n − 1) × 3  →  21 = (n − 1) × 3  →  n − 1 = 7  →  n = 8',
        },
      ],
    },

    // ── SECTION 2: EXTENDING GEOMETRIC PATTERNS ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'A pattern shows: 2 squares, 4 squares, 6 squares, 8 squares.\n\nHow many squares are in the next term?',
      answer: '10',
      correctAnswer: '10',
      correctAnswers: ['10', '10 squares'],
      explanation:
        'Find the rule: 4 − 2 = 2, 6 − 4 = 2, 8 − 6 = 2.\n' +
        'Rule: add 2 squares each time.\n' +
        'Next term = 8 + 2 = 10 squares.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A staircase pattern has 1 square in row 1, 2 squares in row 2, 3 squares in row 3, and so on.\n\n' +
        'a) How many squares are in row 6?\n' +
        'b) How many squares are there in total after 5 rows?',
      answer: 'a) 6    b) 15',
      parts: [
        {
          label: 'a) How many squares in row 6?',
          correctAnswer: '6',
          correctAnswers: ['6', '6 squares'],
          explanation:
            'The rule is: the row number equals the number of squares in that row.\n' +
            'Row 1 = 1,  Row 2 = 2,  Row 3 = 3 …\n' +
            'Row 6 = 6 squares.',
        },
        {
          label: 'b) Total squares after 5 rows?',
          correctAnswer: '15',
          correctAnswers: ['15', '15 squares'],
          explanation:
            'Add up all rows from 1 to 5:\n' +
            '1 + 2 + 3 + 4 + 5 = 15 squares.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A pattern of squares grows as follows:\n' +
        'Term 1: 3 squares,  Term 2: 5 squares,  Term 3: 7 squares, …\n\n' +
        'a) What is the rule?\n' +
        'b) How many squares are in term 6?\n' +
        'c) Which term has 19 squares?',
      answer: 'a) Add 2 each time    b) 13    c) Term 9',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Add 2 each time',
          correctAnswers: [
            'Add 2 each time', 'add 2 each time',
            'Add 2', 'add 2', '+2', 'plus 2', 'plus2',
          ],
          explanation:
            'Find the difference between consecutive terms:\n' +
            '5 − 3 = 2,  7 − 5 = 2\n' +
            'Rule: add 2 each time.',
        },
        {
          label: 'b) How many squares in term 6?',
          correctAnswer: '13',
          correctAnswers: ['13', '13 squares'],
          explanation:
            'Continue from Term 3 (7 squares), adding 2 each time:\n' +
            'Term 4 = 7 + 2 = 9\n' +
            'Term 5 = 9 + 2 = 11\n' +
            'Term 6 = 11 + 2 = 13 squares.',
        },
        {
          label: 'c) Which term has 19 squares?',
          correctAnswer: 'Term 9',
          correctAnswers: ['Term 9', 'term 9', '9', 'ninth', '9th term', 'term9'],
          explanation:
            'Continue the pattern:\n' +
            'Term 7 = 13 + 2 = 15\n' +
            'Term 8 = 15 + 2 = 17\n' +
            'Term 9 = 17 + 2 = 19 ✓',
        },
      ],
    },

    // ── SECTION 3: PATTERNS THAT CHANGE COLOUR OR SHAPE ──────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'A pattern goes: red, blue, red, blue, red, blue, …\n\nWhat colour is the 9th shape?',
      answer: 'Red',
      correctAnswer: 'Red',
      correctAnswers: ['Red', 'red'],
      explanation:
        'The repeating unit is: red, blue — 2 colours per unit.\n' +
        'Divide the position by the unit length: 9 ÷ 2 = 4 remainder 1.\n' +
        'Remainder 1 → the 1st colour in the unit, which is red.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A pattern goes: circle, square, triangle, circle, square, triangle, …\n\n' +
        'a) What is the repeating unit?\n' +
        'b) What is the 11th shape?\n' +
        'c) What is the 20th shape?',
      answer: 'a) circle, square, triangle    b) square    c) square',
      parts: [
        {
          label: 'a) What is the repeating unit?',
          correctAnswer: 'circlesquaretriangle',
          correctAnswers: [
            'circlesquaretriangle',
            'circle square triangle',
            'circle,square,triangle',
          ],
          explanation:
            'The group that repeats is: circle, square, triangle — 3 shapes per unit.',
        },
        {
          label: 'b) What is the 11th shape?',
          correctAnswer: 'square',
          correctAnswers: ['square', 'Square'],
          explanation:
            'Unit length = 3.\n' +
            '11 ÷ 3 = 3 remainder 2.\n' +
            'Remainder 2 → the 2nd shape in the unit.\n' +
            'Unit: circle (1st), square (2nd), triangle (3rd).\n\n' +
            'The 2nd shape is square.\n\n' +
            'Verify by listing: 1-circle, 2-square, 3-triangle, 4-circle, 5-square, 6-triangle, 7-circle, 8-square, 9-triangle, 10-circle, 11-square ✓',
        },
        {
          label: 'c) What is the 20th shape?',
          correctAnswer: 'square',
          correctAnswers: ['square', 'Square'],
          explanation:
            'Unit length = 3.\n' +
            '20 ÷ 3 = 6 remainder 2.\n' +
            'Remainder 2 → the 2nd shape in the unit = square.\n\n' +
            'Verify: 18-triangle, 19-circle, 20-square ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A colour pattern goes: red, red, blue, green, red, red, blue, green, …\n\n' +
        'a) What is the repeating unit?\n' +
        'b) What colour is the 15th shape?\n' +
        'c) What colour is the 22nd shape?',
      answer: 'a) red, red, blue, green    b) blue    c) red',
      parts: [
        {
          label: 'a) What is the repeating unit?',
          correctAnswer: 'redredbluegreen',
          correctAnswers: [
            'redredbluegreen',
            'red red blue green',
            'red,red,blue,green',
          ],
          explanation:
            'The group that repeats is: red, red, blue, green — 4 colours per unit.',
        },
        {
          label: 'b) What colour is the 15th shape?',
          correctAnswer: 'blue',
          correctAnswers: ['blue', 'Blue'],
          explanation:
            'Unit length = 4.\n' +
            '15 ÷ 4 = 3 remainder 3.\n' +
            'Remainder 3 → the 3rd colour in the unit.\n' +
            'Unit: red (1st), red (2nd), blue (3rd), green (4th).\n\n' +
            'The 3rd colour is blue.\n\n' +
            'Verify: 12-green, 13-red, 14-red, 15-blue ✓',
        },
        {
          label: 'c) What colour is the 22nd shape?',
          correctAnswer: 'red',
          correctAnswers: ['red', 'Red'],
          explanation:
            'Unit length = 4.\n' +
            '22 ÷ 4 = 5 remainder 2.\n' +
            'Remainder 2 → the 2nd colour in the unit = red.\n\n' +
            'Verify: 20-green, 21-red, 22-red ✓',
        },
      ],
    },

    // ── SECTION 4: TESSELLATING PATTERNS ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Does a square tessellate? Write yes or no and give one reason.',
      answer:
        'Yes — squares tessellate.\n\n' +
        'Reason: squares have straight edges that fit together perfectly with no gaps and no overlaps. The four 90° corners meet at every point, and 4 × 90° = 360°.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Name two shapes that tessellate and two shapes that do not tessellate.\n' +
        'Explain why circles do not tessellate.',
      answer:
        'Shapes that tessellate: squares and triangles (also rectangles and regular hexagons).\n\n' +
        'Shapes that do not tessellate: circles and regular pentagons.\n\n' +
        'Why circles do not tessellate: circles have curved edges that cannot fit flush against each other. This always leaves gaps between the circles, so they cannot cover a surface completely.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A bathroom floor is being tiled with regular hexagons. Each angle of a regular hexagon is 120°.\n\n' +
        'a) How many hexagons meet at each point?\n' +
        'b) Do the angles add up correctly for tessellation?\n' +
        'c) Will the hexagons tessellate?',
      answer: 'a) 3    b) Yes, 3 × 120° = 360°    c) Yes',
      parts: [
        {
          label: 'a) How many hexagons meet at each point?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three', '3 hexagons'],
          explanation:
            'For tessellation the angles at each meeting point must add up to 360°.\n' +
            'Each angle = 120°.\n' +
            '360° ÷ 120° = 3.\n' +
            'So 3 hexagons meet at each point.',
        },
        {
          label: 'b) Do the angles add up correctly for tessellation?',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes', 'yes 3x120=360', 'yes 3×120=360'],
          explanation:
            'Check: 3 × 120° = 360°.\n' +
            '360° is exactly the full rotation around a point, so yes — the angles add up correctly.',
        },
        {
          label: 'c) Will the hexagons tessellate?',
          correctAnswer: 'Yes',
          correctAnswers: ['Yes', 'yes'],
          explanation:
            'Because 3 hexagons fit perfectly around every meeting point (3 × 120° = 360°) with no gaps and no overlaps, regular hexagons tessellate. This is why honeycombs are made of hexagons!',
        },
      ],
    },

    // ── SECTION 5: GEOMETRIC PATTERNS IN REAL LIFE ───────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Name two places in real life where you can see a tessellating pattern.',
      answer:
        'Any two valid real-life examples are correct.\n\n' +
        'Examples include:\n' +
        '• Bathroom floor tiles\n' +
        '• Brick walls\n' +
        '• A honeycomb\n' +
        '• A chessboard\n' +
        '• Window panes\n' +
        '• A paved footpath',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Look at a brick wall pattern. Answer the following:\n\n' +
        'a) What shape are the bricks?\n' +
        'b) Why is a brick wall considered a tessellating pattern?\n' +
        'c) What would happen if the bricks were circles instead of rectangles?',
      answer:
        'a) The bricks are rectangles.\n\n' +
        'b) A brick wall is a tessellating pattern because the bricks fit together with no gaps and no overlaps — they cover the surface completely.\n\n' +
        'c) If the bricks were circles there would be gaps between them because circles have curved edges that cannot fit flush against each other. The wall would not hold together and would fall apart.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Ndebele wall paintings use geometric patterns.\n\n' +
        'a) Name two geometric shapes commonly used in these patterns.\n' +
        'b) Why do you think geometric shapes are used rather than curved shapes?\n' +
        'c) How is this an example of a tessellating pattern?',
      answer:
        'a) Any two valid geometric shapes are correct — for example: squares, rectangles, triangles, diamonds (rhombuses).\n\n' +
        'b) Geometric shapes have straight edges that fit together easily without leaving gaps. They are also easier to paint neatly in rows and grids, and they create bold, clear patterns.\n\n' +
        'c) The geometric shapes in Ndebele paintings fit together with straight edges that leave no gaps — this is what makes them tessellating patterns. The same arrangement of shapes repeats across the whole wall.',
    },

    // ── SECTION 6: CREATING YOUR OWN GEOMETRIC PATTERN ───────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question:
        'Create a repeating pattern using two different shapes.\n\n' +
        'Write the first 6 terms and state the rule.',
      answer:
        'Any valid repeating pattern using two shapes is correct.\n\n' +
        'Checklist:\n' +
        '• Uses at least two different shapes\n' +
        '• The same sequence repeats exactly\n' +
        '• At least 6 terms are written\n' +
        '• The rule is clearly stated\n\n' +
        'Example: circle, square, circle, square, circle, square\n' +
        'Rule: repeat circle, square over and over.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Create a growing pattern starting with 2 shapes and adding 3 each time.\n\n' +
        'a) Write the first 5 terms.\n' +
        'b) What is the rule?\n' +
        'c) How many shapes are in the 8th term?',
      answer: 'a) 2, 5, 8, 11, 14    b) Add 3 each time    c) 23',
      parts: [
        {
          label: 'a) Write the first 5 terms',
          correctAnswer: '2,5,8,11,14',
          correctAnswers: ['2,5,8,11,14', '2581114'],
          explanation:
            'Start at 2, add 3 each time:\n' +
            'Term 1 = 2\n' +
            'Term 2 = 2 + 3 = 5\n' +
            'Term 3 = 5 + 3 = 8\n' +
            'Term 4 = 8 + 3 = 11\n' +
            'Term 5 = 11 + 3 = 14\n\n' +
            'First 5 terms: 2, 5, 8, 11, 14',
        },
        {
          label: 'b) What is the rule?',
          correctAnswer: 'Add 3 each time',
          correctAnswers: [
            'Add 3 each time', 'add 3 each time',
            'Add 3', 'add 3', '+3', 'plus 3', 'plus3',
          ],
          explanation:
            'Find the difference between consecutive terms:\n' +
            '5 − 2 = 3,  8 − 5 = 3,  11 − 8 = 3.\n' +
            'Rule: add 3 each time.',
        },
        {
          label: 'c) How many shapes are in the 8th term?',
          correctAnswer: '23',
          correctAnswers: ['23', '23 shapes'],
          explanation:
            'Continue from Term 5 (14), adding 3 each time:\n' +
            'Term 6 = 14 + 3 = 17\n' +
            'Term 7 = 17 + 3 = 20\n' +
            'Term 8 = 20 + 3 = 23',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Design your own geometric pattern that could be used to tile a floor.\n\n' +
        'a) Which shape or shapes will you use?\n' +
        'b) Write the rule for your pattern.\n' +
        'c) Explain why your chosen shape or shapes will tessellate.\n' +
        'd) How many tiles would you need for 5 rows of 6 tiles each?',
      answer:
        'a) Any valid tessellating shape is correct — for example: squares, rectangles, triangles, or regular hexagons.\n\n' +
        'b) Any clear rule is correct — for example: "repeat the same square in a grid" or "alternate between two triangle orientations."\n\n' +
        'c) A valid tessellating explanation must mention that the chosen shape has straight edges that fit together with no gaps and no overlaps, and that the angles at each meeting point add up to 360°.\n\n' +
        'd) 5 rows × 6 tiles = 30 tiles.',
    },

  ],

  scoreMessages: [
    {
      minScore: 33,
      message:
        'Outstanding! 33 out of 33 — you have mastered Geometric Patterns completely. Every single part was correct. Excellent work! 🌟',
    },
    {
      minScore: 27,
      message:
        'Excellent work! You have a strong understanding of geometric patterns. Review the parts you missed and you will be at full marks.',
    },
    {
      minScore: 20,
      message:
        'Good effort! You are making solid progress with geometric patterns. Go back over the sections where you lost marks and try those questions again.',
    },
    {
      minScore: 0,
      message:
        'Keep going — geometric patterns take practice! Work through the study guide again, focus on the worked examples, and then give the questions another try. You can do it!',
    },
  ],
}
