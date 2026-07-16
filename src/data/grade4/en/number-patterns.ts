import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Number Patterns',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A NUMBER PATTERN?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-number-pattern',
      title: 'What is a Number Pattern?',
      icon: '🔢',
      explanation: `
<p style="margin-bottom:14px;">A <strong>number pattern</strong> is a list of numbers that follow a <strong>rule</strong>. Each number in the list is called a <strong>term</strong>. If you know the rule, you can predict what comes next — even if the list goes on forever!</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Page numbers in a book:</strong> 1, 2, 3, 4, 5 … — add 1 each time</li>
    <li><strong>House numbers on a street:</strong> 2, 4, 6, 8, 10 … — add 2 each time</li>
    <li><strong>Counting money in 5c coins:</strong> 5, 10, 15, 20, 25 … — add 5 each time</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Key parts of a pattern</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:4px;">Pattern numbers</div>
      <div style="color:#1e3a8a;font-size:15px;">The numbers in the sequence — shown in <span style="color:#1e40af;font-weight:700;">blue</span></div>
    </div>
    <div style="background:#fee2e2;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#dc2626;margin-bottom:4px;">The rule</div>
      <div style="color:#7f1d1d;font-size:15px;">What you do each time to get the next number — shown in <span style="color:#dc2626;font-weight:700;">red</span></div>
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#16a34a;margin-bottom:4px;">Next number</div>
      <div style="color:#14532d;font-size:15px;">The predicted next term — shown in <span style="color:#16a34a;font-weight:700;">green</span></div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Two types of patterns</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">📈 Increasing pattern</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Numbers get <strong>bigger</strong> each time.<br/>
        Example: <span style="color:#1e40af;font-weight:700;">2, 4, 6, 8</span> <span style="color:#dc2626;font-weight:700;">(+2)</span> → <span style="color:#16a34a;font-weight:700;">10</span>
      </div>
    </div>
    <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#c2410c;margin-bottom:6px;">📉 Decreasing pattern</div>
      <div style="color:#7c2d12;font-size:14px;line-height:1.7;">Numbers get <strong>smaller</strong> each time.<br/>
        Example: <span style="color:#1e40af;font-weight:700;">50, 40, 30, 20</span> <span style="color:#dc2626;font-weight:700;">(−10)</span> → <span style="color:#16a34a;font-weight:700;">10</span>
      </div>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Identify the rule and find the next 3 numbers:  5, 10, 15, 20, __, __, __',
          answer: '25, 30, 35',
          steps: [
            `Find the difference between consecutive terms:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">10 − 5 = 5</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">15 − 10 = 5</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">20 − 15 = 5</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">The difference is always <strong>5</strong> — this is an <strong>increasing pattern</strong>.</p>`,
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 5 each time</span>`,
            `Apply the rule to find the next 3 terms:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">20</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 25</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">25</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 30</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">30</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 35</span>
</div>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">5, 10, 15, 20,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">25, 30, 35</span>
</div>`,
          ],
        },
        {
          question: 'Identify the rule and find the next 3 numbers:  100, 90, 80, 70, __, __, __',
          answer: '60, 50, 40',
          steps: [
            `Find the difference between consecutive terms:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">100 − 90 = 10</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">90 − 80 = 10</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">80 − 70 = 10</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">The numbers get smaller by <strong>10</strong> each time — this is a <strong>decreasing pattern</strong>.</p>`,
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">subtract 10 each time</span>`,
            `Apply the rule to find the next 3 terms:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">70</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 60</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">60</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 50</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">50</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 40</span>
</div>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">100, 90, 80, 70,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">60, 50, 40</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to identify the rule in a number pattern and extend it',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SKIP COUNTING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'skip-counting-patterns',
      title: 'Skip Counting Patterns',
      icon: '⏭️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Skip counting</strong> means counting forwards or backwards by the <strong>same number</strong> every time — skipping over the numbers in between. It is one of the most useful patterns in maths!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:8px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = the skip number (the rule)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = the pattern numbers</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Common skip counting patterns</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 2s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">2, 4, 6, 8, 10 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 3s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">3, 6, 9, 12, 15 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 4s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">4, 8, 12, 16, 20 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 5s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">5, 10, 15, 20, 25 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 25s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">25, 50, 75, 100, 125 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 50s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">50, 100, 150, 200, 250 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Count in 100s</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">100, 200, 300, 400, 500 …</span>
    </div>

  </div>
</div>`,

      workedExamples: [
        {
          question: 'Count forwards in 25s starting from 150. Write the next 5 numbers.',
          answer: '175, 200, 225, 250, 275',
          steps: [
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 25 each time</span> &nbsp;(counting forwards — increasing pattern)`,
            `Apply the rule step by step:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">150</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 175</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">175</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 200</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">200</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 225</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">225</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 250</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">250</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 275</span>
</div>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">150,</span>
  <span style="font-size:19px;font-weight:700;color:#16a34a;">175, 200, 225, 250, 275</span>
</div>`,
          ],
        },
        {
          question: 'Count backwards in 50s starting from 500. Write the next 5 numbers.',
          answer: '450, 400, 350, 300, 250',
          steps: [
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">subtract 50 each time</span> &nbsp;(counting backwards — decreasing pattern)`,
            `Apply the rule step by step:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">500</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 450</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">450</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 400</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">400</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 350</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">350</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 300</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">300</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 250</span>
</div>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">500,</span>
  <span style="font-size:19px;font-weight:700;color:#16a34a;">450, 400, 350, 300, 250</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Number line showing skip counting in 25s from 0 to 200 with each landing number marked and labelled',
      diagramSvg:
        '<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="50" x2="570" y2="50" stroke="#0f1f3d" stroke-width="2"/><polygon points="570,50 560,45 560,55" fill="#0f1f3d"/><text x="63.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="131.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="198.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="266.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="333.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="401.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="468.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="536.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><circle cx="30" cy="50" r="5" fill="#1e40af"/><circle cx="97.5" cy="50" r="5" fill="#1e40af"/><circle cx="165" cy="50" r="5" fill="#1e40af"/><circle cx="232.5" cy="50" r="5" fill="#1e40af"/><circle cx="300" cy="50" r="5" fill="#1e40af"/><circle cx="367.5" cy="50" r="5" fill="#1e40af"/><circle cx="435" cy="50" r="5" fill="#1e40af"/><circle cx="502.5" cy="50" r="5" fill="#1e40af"/><circle cx="570" cy="50" r="5" fill="#1e40af"/><text x="30" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">0</text><text x="97.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">25</text><text x="165" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">50</text><text x="232.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">75</text><text x="300" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">100</text><text x="367.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">125</text><text x="435" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">150</text><text x="502.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">175</text><text x="570" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">200</text></svg>',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INPUT AND OUTPUT VALUES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-and-output-values',
      title: 'Input and Output Values',
      icon: '⚙️',
      explanation: `
<p style="margin-bottom:14px;">An <strong>input/output machine</strong> takes a number, applies a <strong>rule</strong>, and produces a new number. You can think of it like a machine in a factory — something goes in, the machine does its job, and something new comes out the other side.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How the machine works</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;">Input</span>
      <div style="background:#dbeafe;border:2px solid #1e40af;border-radius:8px;padding:10px 18px;font-size:20px;font-weight:700;color:#1e40af;">5</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;padding:0 8px;margin-top:18px;">
      <span style="font-size:22px;color:#374151;font-weight:300;">→</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;">Rule</span>
      <div style="background:#fee2e2;border:2px solid #dc2626;border-radius:8px;padding:10px 18px;font-size:16px;font-weight:700;color:#dc2626;">× 3</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;padding:0 8px;margin-top:18px;">
      <span style="font-size:22px;color:#374151;font-weight:300;">→</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:.05em;">Output</span>
      <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:10px 18px;font-size:20px;font-weight:700;color:#16a34a;">15</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Three things you can be asked to do</div>
  <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.1;font-size:15px;">
    <li><strong>Find the output</strong> — you know the input and the rule, calculate the output.</li>
    <li><strong>Find the rule</strong> — you know the inputs and outputs, work out what the machine does.</li>
    <li><strong>Find the input</strong> — you know the output and the rule, work backwards using the inverse operation.</li>
  </ul>
</div>`,

      workedExamples: [
        {
          question: 'The rule is multiply by 3. Complete the table:\nInput: 2, 4, 6, 8\nOutput: ?, ?, ?, ?',
          answer: 'Output: 6, 12, 18, 24',
          steps: [
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">× 3</span> — multiply each input by 3 to get the output.`,
            `Apply the rule to each <span style="color:#1e40af;font-weight:700;">input</span>:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:320px;width:100%;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Input</th>
        <th style="background:#fee2e2;color:#dc2626;font-weight:700;padding:8px 16px;border:1.5px solid #fca5a5;font-size:14px;">Calculation</th>
        <th style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:8px 16px;border:1.5px solid #86efac;font-size:14px;">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">2 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">6</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">4</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">4 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">12</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">6</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">6 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">18</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">8</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">8 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">24</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Answer:</strong> Output values are <span style="color:#16a34a;font-weight:700;">6, 12, 18, 24</span>`,
          ],
        },
        {
          question: 'Find the rule. Complete the table:\nInput: 5, 10, 15, 20\nOutput: 9, 14, 19, 24',
          answer: 'Rule: add 4',
          steps: [
            `Compare the <span style="color:#1e40af;font-weight:700;">input</span> and <span style="color:#16a34a;font-weight:700;">output</span> for each pair — find the difference:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">5</span> → <span style="color:#16a34a;font-weight:700;">9</span> &nbsp; difference: <span style="color:#dc2626;font-weight:700;">9 − 5 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">10</span> → <span style="color:#16a34a;font-weight:700;">14</span> &nbsp; difference: <span style="color:#dc2626;font-weight:700;">14 − 10 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">15</span> → <span style="color:#16a34a;font-weight:700;">19</span> &nbsp; difference: <span style="color:#dc2626;font-weight:700;">19 − 15 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">20</span> → <span style="color:#16a34a;font-weight:700;">24</span> &nbsp; difference: <span style="color:#dc2626;font-weight:700;">24 − 20 = 4</span></span>
</div>`,
            `The difference is always <strong>4</strong> and the output is always <em>bigger</em> than the input, so the rule is adding.<br/>
<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 4</span>`,
            `<strong>Answer:</strong> The rule is <span style="color:#dc2626;font-weight:700;">add 4</span>. Check: <span style="color:#1e40af;font-weight:700;">5</span> + 4 = <span style="color:#16a34a;font-weight:700;">9</span> ✓`,
          ],
        },
        {
          question: 'The rule is subtract 7. The output is 15. What is the input?',
          answer: 'Input is 22',
          steps: [
            `We know the <span style="color:#16a34a;font-weight:700;">output = 15</span> and the <span style="color:#dc2626;font-weight:700;">rule = subtract 7</span>. We need to find the <span style="color:#1e40af;font-weight:700;">input</span>.`,
            `To work backwards, use the <strong>inverse operation</strong>. The inverse of subtraction is addition.<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;margin-top:10px;display:inline-block;">
  <span style="color:#ea580c;font-weight:700;">Inverse rule: add 7</span>
</div>`,
            `Apply the inverse to the output:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:12px;font-weight:700;color:#16a34a;text-transform:uppercase;">Output</span>
    <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:8px 16px;font-size:20px;font-weight:700;color:#16a34a;">15</div>
  </div>
  <div style="margin-top:16px;">
    <span style="color:#ea580c;font-weight:700;font-size:16px;">+ 7 (inverse)</span>
  </div>
  <div style="margin-top:16px;font-size:20px;color:#374151;font-weight:300;">→</div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;">Input</span>
    <div style="background:#dbeafe;border:2px solid #1e40af;border-radius:8px;padding:8px 16px;font-size:20px;font-weight:700;color:#1e40af;">22</div>
  </div>
</div>`,
            `<strong>Answer:</strong> The input is <span style="color:#1e40af;font-weight:700;font-size:17px;">22</span>.<br/>
<span style="color:#16a34a;font-weight:600;font-size:14px;margin-top:4px;display:inline-block;">Check: 22 − 7 = 15 ✓</span>`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how input and output function machines work with different rules',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FINDING MISSING NUMBERS IN A PATTERN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'finding-missing-numbers',
      title: 'Finding Missing Numbers in a Pattern',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Sometimes a number is <strong>missing from the middle of a pattern</strong>. You cannot just keep adding or subtracting from the start — you need to find the rule first, then use it to fill in the gap.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = known numbers</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#ea580c;display:inline-block;"></span>
      <span style="color:#ea580c;font-weight:700;">Orange = missing number</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = the rule</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The 3-step method</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Find the rule</strong> by looking at the numbers you can see — find the difference or check for multiplication.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Apply the rule</strong> to the number just before the gap to find the missing number.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Check your answer</strong> by applying the rule to the missing number — you should get the next known number.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Find the missing number:  12, 18, __, 30, 36',
          answer: '24',
          steps: [
            `Find the rule using the numbers you can see:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">18 − 12 = 6</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">36 − 30 = 6</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">add 6 each time</span></p>`,
            `Apply the rule to the number before the gap:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">18</span>
  <span style="color:#dc2626;font-weight:700;">+ 6</span>
  <span style="font-size:18px;font-weight:700;color:#ea580c;">= 24</span>
</div>`,
            `Check: apply the rule to the missing number — it must give the next known number:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#ea580c;">24</span>
  <span style="color:#dc2626;font-weight:700;">+ 6</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">= 30</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>`,
            `<strong>Answer:</strong>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">12, 18,</span>
  <span style="font-size:20px;font-weight:700;color:#ea580c;">24</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">, 30, 36</span>
</div>`,
          ],
        },
        {
          question: 'Find the missing numbers:  200, __, 160, __, 120',
          answer: '180 and 140',
          steps: [
            `Two numbers are missing, but we can still find the rule by looking at what we know.<br/>
From <span style="color:#1e40af;font-weight:700;">200</span> to <span style="color:#1e40af;font-weight:700;">160</span> is a decrease of <strong>40</strong> over <strong>2 steps</strong>.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 12px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:600;">40 ÷ 2 = 20 per step</div>`,
            `<strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">subtract 20 each time</span>`,
            `Apply the rule to find both missing numbers:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">200</span>
  <span style="color:#dc2626;font-weight:700;">− 20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">= 180</span>
  <span style="color:#374151;margin:0 4px;">and</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">160</span>
  <span style="color:#dc2626;font-weight:700;">− 20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">= 140</span>
</div>`,
            `Check the full sequence — each step should decrease by 20:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">200</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">180</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">160</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">140</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">120</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>`,
          ],
        },
        {
          question: 'Find the missing number:  3, 6, __, 24, 48',
          answer: '12',
          steps: [
            `First check if this is an addition pattern:<br/>
<div style="background:#fef2f2;border-radius:6px;padding:6px 12px;display:inline-block;margin-top:8px;color:#dc2626;font-weight:600;">6 − 3 = 3 &nbsp; but &nbsp; 48 − 24 = 24 — the difference keeps changing. Not addition.</div>`,
            `Check multiplication — does each number get multiplied by the same amount?<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">3 × 2 = 6 ✓</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">24 × 2 = 48 ✓</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">multiply by 2 each time</span></p>`,
            `Apply the rule to find the missing number:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">6</span>
  <span style="color:#dc2626;font-weight:700;">× 2</span>
  <span style="font-size:18px;font-weight:700;color:#ea580c;">= 12</span>
</div>`,
            `Check: apply the rule to the missing number — it must give the next known number:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#ea580c;">12</span>
  <span style="color:#dc2626;font-weight:700;">× 2</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">= 24</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">3, 6,</span>
  <span style="font-size:20px;font-weight:700;color:#ea580c;">12</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">, 24, 48</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to find missing numbers in a pattern by identifying the rule first',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — REPRESENTING PATTERNS ON A NUMBER LINE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-on-a-number-line',
      title: 'Representing Patterns on a Number Line',
      icon: '📏',
      explanation: `
<p style="margin-bottom:14px;">A <strong>number line</strong> is a great way to <em>see</em> a pattern. You mark each number in the sequence with a dot, then draw arrows between the dots to show how far the pattern jumps each time.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Colour guide</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blue = marked numbers (dots)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Red = arrows showing each jump</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Green = the rule label on each arrow</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">How to draw a pattern on a number line</div>
  <ol style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.2;font-size:15px;">
    <li><strong>Draw a number line</strong> long enough to fit all numbers in the pattern.</li>
    <li><strong>Mark each number</strong> in the sequence with a dot in <span style="color:#1e40af;font-weight:700;">blue</span>.</li>
    <li><strong>Draw an arrow</strong> from each dot to the next in <span style="color:#dc2626;font-weight:700;">red</span>, and label it with the rule in <span style="color:#16a34a;font-weight:700;">green</span>.</li>
  </ol>
</div>`,

      workedExamples: [
        {
          question: 'Show the pattern 0, 5, 10, 15, 20 on a number line.',
          answer: 'Number line from 0 to 25 with dots at 0, 5, 10, 15, 20 and arrows labelled "+5" between each.',
          steps: [
            `Draw a number line from <span style="color:#1e40af;font-weight:700;">0</span> to <span style="color:#1e40af;font-weight:700;">25</span> — leave enough room for all the numbers in the pattern plus a little extra.`,
            `Mark each number in the pattern with a <span style="color:#1e40af;font-weight:700;">blue dot</span>: <span style="color:#1e40af;font-weight:700;">0, 5, 10, 15, 20</span>.`,
            `Draw a <span style="color:#dc2626;font-weight:700;">red arrow</span> from each dot to the next. Label every arrow with the rule in <span style="color:#16a34a;font-weight:700;">green</span>:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <div style="display:flex;align-items:center;gap:0;min-width:420px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">0</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">5</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">10</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">15</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">20</span>
    </div>
  </div>
</div>`,
            `The diagram now clearly shows the pattern: every jump is the same size — the rule is <span style="color:#16a34a;font-weight:700;">add 5</span> each time.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — CREATING YOUR OWN PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'creating-your-own-patterns',
      title: 'Creating Your Own Patterns',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">You do not always have to <em>find</em> a pattern — you can <strong>create one yourself</strong>! All you need is a starting number and a rule, and you can build a pattern that goes on as long as you like.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The 4 steps</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Choose a starting number</strong> — this is the first term in your pattern.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Choose a rule</strong> — decide what you will do each time (add, subtract, or multiply by a number).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Apply the rule repeatedly</strong> — use the rule over and over to get each next term.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Write at least 6 numbers</strong> — a pattern needs enough terms so the rule is clear.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Create a pattern starting at 7 with the rule: add 8.',
          answer: '7, 15, 23, 31, 39, 47',
          steps: [
            `<strong>Starting number:</strong> <span style="color:#1e40af;font-weight:700;">7</span> &nbsp;|&nbsp; <strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:3px 10px;color:#dc2626;font-weight:700;">add 8</span>`,
            `Apply the rule repeatedly:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">7</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">15</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">23</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">31</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">39</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">47</span>
</div>`,
            `<strong>Pattern:</strong> <span style="color:#1e40af;font-weight:700;font-size:17px;">7, 15, 23, 31, 39, 47</span>`,
          ],
        },
        {
          question: 'Create a decreasing pattern starting at 120 with the rule: subtract 15.',
          answer: '120, 105, 90, 75, 60, 45',
          steps: [
            `<strong>Starting number:</strong> <span style="color:#1e40af;font-weight:700;">120</span> &nbsp;|&nbsp; <strong>Rule:</strong> <span style="background:#fee2e2;border-radius:6px;padding:3px 10px;color:#dc2626;font-weight:700;">subtract 15</span> &nbsp;(decreasing pattern)`,
            `Apply the rule repeatedly:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">120</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">105</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">90</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">75</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">60</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">45</span>
</div>`,
            `<strong>Pattern:</strong> <span style="color:#1e40af;font-weight:700;font-size:17px;">120, 105, 90, 75, 60, 45</span>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — Blocks: Extend(0-3) / Missing(4-7) / In-Out(8-11) /
    // Word problems(12-15) / Reasoning(16-18) / Capstone(19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Extend the pattern (Easy)
        { difficulty: 'Easy', question: 'Find the rule and write the next 3 numbers:\n\n4, 7, 10, 13, __, __, __', answer: '16, 19, 22', checkMode: 'auto', correctAnswer: '16,19,22', correctAnswers: ['16,19,22', '161922'], explanation: 'Rule: add 3 each time (7−4=3, 10−7=3, 13−10=3).\n13+3=16, 16+3=19, 19+3=22' },
        { difficulty: 'Easy', question: 'Count in 9s starting from 6. Write the next 3 numbers:\n\n6, 15, 24, 33, __, __, __', answer: '42, 51, 60', checkMode: 'auto', correctAnswer: '42,51,60', correctAnswers: ['42,51,60', '425160'], explanation: 'Rule: add 9 each time.\n33+9=42, 42+9=51, 51+9=60' },
        { difficulty: 'Easy', question: 'A pattern goes 60, 55, 50, 45 and then continues the same way. What are the next 3 numbers?', answer: '40, 35, 30', checkMode: 'auto', correctAnswer: '40,35,30', correctAnswers: ['40,35,30', '403530'], explanation: 'Rule: subtract 5 each time.\n45−5=40, 40−5=35, 35−5=30' },
        { difficulty: 'Easy-Medium', question: 'Find the rule and write the next 3 numbers:\n\n300, 275, 250, 225, __, __, __', answer: '200, 175, 150', checkMode: 'auto', correctAnswer: '200,175,150', correctAnswers: ['200,175,150', '200175150'], explanation: 'Rule: subtract 25 each time.\n225−25=200, 200−25=175, 175−25=150' },

        // Block 2 — Missing number in the middle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the missing number:\n\n10, 15, __, 25, 30', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20'], explanation: 'Rule: add 5 each time (15−10=5, 30−25=5).\n15+5=20\nCheck: 20+5=25 ✓' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n63, 54, __, 36, 27', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: 'Rule: subtract 9 each time (54−63=−9, 27−36=−9).\n54−9=45\nCheck: 45−9=36 ✓' },
        { difficulty: 'Medium', question: 'Find the two missing numbers:\n\n200, __, 160, __, 120', answer: '180, 140', checkMode: 'auto', correctAnswer: '180,140', correctAnswers: ['180,140', '180140'], explanation: 'From 200 to 160 is a decrease of 40 over 2 steps, so each step is 40 ÷ 2 = 20.\nRule: subtract 20 each time.\n200−20=180, 160−20=140\nFull sequence: 200, 180, 160, 140, 120' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n2, 6, __, 54, 162', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'This is not an addition pattern (6−2=4 but 162−54=108). Check multiplication: 2×3=6, 54×3=162.\nRule: multiply by 3 each time.\n6×3=18\nCheck: 18×3=54 ✓' },

        // Block 3 — Input/output machines (Medium)
        { difficulty: 'Medium', question: 'The rule is add 9. Find the outputs for inputs 2, 5 and 8.', answer: '11, 14, 17', checkMode: 'auto', correctAnswer: '11,14,17', correctAnswers: ['11,14,17', '111417'], explanation: '2+9=11, 5+9=14, 8+9=17' },
        { difficulty: 'Medium', question: 'Find the rule: input 3 → output 9, input 6 → output 18, input 9 → output 27. What is the rule?', answer: 'Multiply by 3', checkMode: 'auto', correctAnswer: 'Multiply by 3', correctAnswers: ['Multiply by 3', 'multiply by 3', 'multiplyby3', 'times 3', 'times3', 'x3', '×3'], explanation: '3×3=9, 6×3=18, 9×3=27 — each output is 3 times the input.\nRule: Multiply by 3' },
        { difficulty: 'Medium', question: 'The rule is subtract 18. The output is 12. What is the input?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: 'Use the inverse operation (add 18) on the output.\n12+18=30\nCheck: 30−18=12 ✓' },
        { difficulty: 'Medium', question: 'The rule is multiply by 5. Complete the table:\n\nInput: 2, 4, 6, 8\nOutput: ?, ?, ?, ?', answer: '10, 20, 30, 40', checkMode: 'auto', correctAnswer: '10,20,30,40', correctAnswers: ['10,20,30,40', '10, 20, 30, 40', '10203040'], explanation: '2×5=10, 4×5=20, 6×5=30, 8×5=40' },

        // Block 4 — Real-world word problems (Medium)
        { difficulty: 'Medium', question: 'Thabo saves R12 every week. How much does he save in week 6 alone?', answer: 'R72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', 'R72'], explanation: 'The pattern is 12, 24, 36, 48, 60, 72 (add 12 each week).\nWeek 6 = 12 × 6 = R72' },
        { difficulty: 'Medium', question: 'A parking garage charges R10 for the first hour and R6 for each extra hour. How much does 3 hours of parking cost altogether?', answer: 'R22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', 'R22'], explanation: 'First hour = R10. Two extra hours = 2 × R6 = R12.\nTotal = 10 + 12 = R22' },
        { difficulty: 'Medium', question: 'Eggs are packed 6 to a box. How many eggs are in 9 boxes?', answer: '54 eggs', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54eggs', '54 eggs'], explanation: 'The pattern is 6, 12, 18 … (multiples of 6).\n9 boxes = 6 × 9 = 54 eggs' },
        { difficulty: 'Medium', question: 'A staircase has steps that rise 18 cm each. If the first step is 18 cm above the ground, how many centimetres above the ground is the 5th step?', answer: '90 cm', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90cm', '90 cm'], explanation: 'The pattern is 18, 36, 54, 72, 90 (multiples of 18).\n5th step = 18 × 5 = 90 cm' },

        // Block 5 — Reasoning, error-spotting & justification (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern decreases: 50, 43, 36, 29, 22. A student claims the rule is "subtract 5". Is this correct? If not, what is the actual rule?', answer: 'No, the actual rule is subtract 7', checkMode: 'auto', correctAnswer: 'Subtract 7', correctAnswers: ['Subtract 7', 'subtract 7', 'subtract7', 'minus 7', 'minus7', '-7', 'no, subtract 7', 'no subtract 7'], explanation: '50−43=7, 43−36=7, 36−29=7, 29−22=7 — the difference is always 7, not 5.\nThe student is incorrect: the actual rule is subtract 7.' },
        { difficulty: 'Medium-Hard', question: 'Pattern A starts at 4 and follows the rule add 6. Pattern B starts at 10 and follows the rule add 4. Which pattern has the bigger 5th term?', answer: 'Pattern A', checkMode: 'auto', correctAnswer: 'Pattern A', correctAnswers: ['Pattern A', 'pattern a', 'a', 'A'], explanation: 'Pattern A: 4, 10, 16, 22, 28 — 5th term is 28.\nPattern B: 10, 14, 18, 22, 26 — 5th term is 26.\n28 > 26, so Pattern A has the bigger 5th term.' },
        { difficulty: 'Medium-Hard', question: 'Explain, in your own words, how you can tell whether a number pattern uses addition/subtraction or multiplication as its rule.', answer: 'If the difference between consecutive terms is always the same (constant), the rule is addition or subtraction. If the difference keeps changing but each term is always the previous term times the same number, the rule is multiplication. You can test by dividing consecutive terms — if the ratio is always the same, it is a multiplication pattern.', checkMode: 'self' },

        // Block 6 — Multi-step / nth-term capstone (Hard)
        { difficulty: 'Hard', question: 'A pattern starts at 6 and follows the rule add 5. What is the 12th number in the pattern?', answer: '61', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61'], explanation: 'From term 1 (which is 6), you add 5 a total of 11 times to reach term 12.\n6 + 5 × 11 = 6 + 55 = 61' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered number patterns — every skill in this set, from extending patterns to multi-step reasoning.' },
        { minScore: 15, message: 'Great work! You are confident with most number pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, different questions/context
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Extend the pattern (Easy)
        { difficulty: 'Easy', question: 'Find the rule and write the next 3 numbers:\n\n9, 17, 25, 33, __, __, __', answer: '41, 49, 57', checkMode: 'auto', correctAnswer: '41,49,57', correctAnswers: ['41,49,57', '414957'], explanation: 'Rule: add 8 each time.\n33+8=41, 41+8=49, 49+8=57' },
        { difficulty: 'Easy', question: 'Count in 12s starting from 7. Write the next 3 numbers:\n\n7, 19, 31, 43, __, __, __', answer: '55, 67, 79', checkMode: 'auto', correctAnswer: '55,67,79', correctAnswers: ['55,67,79', '556779'], explanation: 'Rule: add 12 each time.\n43+12=55, 55+12=67, 67+12=79' },
        { difficulty: 'Easy', question: 'Find the rule and write the next 3 numbers:\n\n40, 37, 34, 31, __, __, __', answer: '28, 25, 22', checkMode: 'auto', correctAnswer: '28,25,22', correctAnswers: ['28,25,22', '282522'], explanation: 'Rule: subtract 3 each time.\n31−3=28, 28−3=25, 25−3=22' },
        { difficulty: 'Easy-Medium', question: 'Find the rule and write the next 3 numbers:\n\n200, 180, 160, 140, __, __, __', answer: '120, 100, 80', checkMode: 'auto', correctAnswer: '120,100,80', correctAnswers: ['120,100,80', '12010080'], explanation: 'Rule: subtract 20 each time.\n140−20=120, 120−20=100, 100−20=80' },

        // Block 2 — Missing number in the middle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the missing number:\n\n40, 36, __, 28, 24', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32'], explanation: 'Rule: subtract 4 each time (36−40=−4, 24−28=−4).\n36−4=32\nCheck: 32−4=28 ✓' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n17, 26, __, 44, 53', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35'], explanation: 'Rule: add 9 each time.\n26+9=35\nCheck: 35+9=44 ✓' },
        { difficulty: 'Medium', question: 'Find the two missing numbers:\n\n90, __, 70, __, 50', answer: '80, 60', checkMode: 'auto', correctAnswer: '80,60', correctAnswers: ['80,60', '8060'], explanation: 'From 90 to 70 is a decrease of 20 over 2 steps, so each step is 20 ÷ 2 = 10.\nRule: subtract 10 each time.\n90−10=80, 70−10=60\nFull sequence: 90, 80, 70, 60, 50' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n1, 2, __, 8, 16', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'This is not an addition pattern (2−1=1 but 16−8=8). Check multiplication: 1×2=2, 8×2=16.\nRule: multiply by 2 each time.\n2×2=4\nCheck: 4×2=8 ✓' },

        // Block 3 — Input/output machines (Medium)
        { difficulty: 'Medium', question: 'The rule is multiply by 4. Find the outputs for inputs 2, 5 and 8.', answer: '8, 20, 32', checkMode: 'auto', correctAnswer: '8,20,32', correctAnswers: ['8,20,32', '82032'], explanation: '2×4=8, 5×4=20, 8×4=32' },
        { difficulty: 'Medium', question: 'Find the rule: input 5 → output 11, input 10 → output 16, input 15 → output 21. What is the rule?', answer: 'Add 6', checkMode: 'auto', correctAnswer: 'Add 6', correctAnswers: ['Add 6', 'add 6', 'add6', '+6', 'plus 6', 'plus6'], explanation: '11−5=6, 16−10=6, 21−15=6 — the difference is always 6.\nRule: Add 6' },
        { difficulty: 'Medium', question: 'The rule is multiply by 7. The output is 63. What is the input?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Use the inverse operation (divide by 7) on the output.\n63÷7=9\nCheck: 9×7=63 ✓' },
        { difficulty: 'Medium', question: 'The rule is subtract 3. Complete the table:\n\nInput: 10, 15, 20, 25\nOutput: ?, ?, ?, ?', answer: '7, 12, 17, 22', checkMode: 'auto', correctAnswer: '7,12,17,22', correctAnswers: ['7,12,17,22', '7, 12, 17, 22', '7121722'], explanation: '10−3=7, 15−3=12, 20−3=17, 25−3=22' },

        // Block 4 — Real-world word problems (Medium)
        { difficulty: 'Medium', question: 'Lerato catches a bus every 15 minutes starting at 07:00. How many minutes after 07:00 does the 4th bus arrive?', answer: '45 minutes', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45minutes', '45 minutes'], explanation: 'Bus times after 07:00: 1st = 0 min, 2nd = 15 min, 3rd = 30 min, 4th = 45 min.\nRule: add 15 minutes each time. 4th bus = 15 × 3 = 45 minutes after 07:00.' },
        { difficulty: 'Medium', question: 'Amahle has 10 stickers. She adds 5 more stickers every day. How many stickers does she have altogether after 6 days (including day 1)?', answer: '35 stickers', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35stickers', '35 stickers'], explanation: 'The pattern is 10, 15, 20, 25, 30, 35 (add 5 each day, starting at 10).\nAfter 6 days: 10 + 5 × 5 = 35 stickers' },
        { difficulty: 'Medium', question: 'A gardener waters a row of plants every 4th day, starting on day 4. On which day does she water the plants for the 5th time?', answer: 'Day 20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'day 20', 'Day 20'], explanation: 'The pattern is 4, 8, 12, 16, 20 (multiples of 4).\n5th watering day = 4 × 5 = day 20' },
        { difficulty: 'Medium', question: 'A printer numbers tickets starting at 100, and each new ticket number is 4 more than the last. What is the number on the 6th ticket printed?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: 'The pattern is 100, 104, 108, 112, 116, 120 (add 4 each time, starting at 100).\n6th ticket = 100 + 4 × 5 = 120' },

        // Block 5 — Reasoning, error-spotting & justification (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern has the rule "multiply by 2" and starts at 4. Thabo says the 6th term is 24. Is he correct? What is the actual 6th term?', answer: 'No, the actual 6th term is 128', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128'], explanation: 'Pattern: 4, 8, 16, 32, 64, 128 (multiply by 2 each time).\nThabo may have added 4 each time instead of multiplying. The actual 6th term is 128, not 24.' },
        { difficulty: 'Medium-Hard', question: 'Pattern A starts at 20 and follows the rule subtract 3. Pattern B starts at 8 and follows the rule add 2. Which pattern has the bigger 6th term?', answer: 'Pattern B', checkMode: 'auto', correctAnswer: 'Pattern B', correctAnswers: ['Pattern B', 'pattern b', 'b', 'B'], explanation: 'Pattern A: 20, 17, 14, 11, 8, 5 — 6th term is 5.\nPattern B: 8, 10, 12, 14, 16, 18 — 6th term is 18.\n18 > 5, so Pattern B has the bigger 6th term.' },
        { difficulty: 'Medium-Hard', question: 'Explain why it is important to check your answer for a missing number both forwards and backwards, not just one way.', answer: 'Checking only one way (for example, only checking that the number before the gap plus the rule gives your answer) can hide a mistake if you picked the wrong rule by accident. Checking backwards too — using your answer with the rule to see if it gives the next known number — confirms the rule works consistently in both directions, so you can be sure the answer is correct and not just a lucky guess.', checkMode: 'self' },

        // Block 6 — Multi-step / nth-term capstone (Hard)
        { difficulty: 'Hard', question: 'Start with the number 6. First apply the rule "add 4", then apply the rule "multiply by 3" to that result. What is the final answer?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: 'Step 1: 6 + 4 = 10\nStep 2: 10 × 3 = 30\nFinal answer: 30' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered number patterns — every skill in this set, from extending patterns to multi-step reasoning.' },
        { minScore: 15, message: 'Great work! You are confident with most number pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1-2, different questions/context
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Extend the pattern (Easy)
        { difficulty: 'Easy', question: 'Find the rule and write the next 3 numbers:\n\n5, 14, 23, 32, __, __, __', answer: '41, 50, 59', checkMode: 'auto', correctAnswer: '41,50,59', correctAnswers: ['41,50,59', '415059'], explanation: 'Rule: add 9 each time.\n32+9=41, 41+9=50, 50+9=59' },
        { difficulty: 'Easy', question: 'Count in 11s starting from 4. Write the next 3 numbers:\n\n4, 15, 26, 37, __, __, __', answer: '48, 59, 70', checkMode: 'auto', correctAnswer: '48,59,70', correctAnswers: ['48,59,70', '485970'], explanation: 'Rule: add 11 each time.\n37+11=48, 48+11=59, 59+11=70' },
        { difficulty: 'Easy', question: 'A pattern goes 45, 41, 37, 33 and then continues the same way. What are the next 3 numbers?', answer: '29, 25, 21', checkMode: 'auto', correctAnswer: '29,25,21', correctAnswers: ['29,25,21', '292521'], explanation: 'Rule: subtract 4 each time.\n33−4=29, 29−4=25, 25−4=21' },
        { difficulty: 'Easy-Medium', question: 'Find the rule and write the next 3 numbers:\n\n99, 90, 81, 72, __, __, __', answer: '63, 54, 45', checkMode: 'auto', correctAnswer: '63,54,45', correctAnswers: ['63,54,45', '635445'], explanation: 'Rule: subtract 9 each time.\n72−9=63, 63−9=54, 54−9=45' },

        // Block 2 — Missing number in the middle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Find the missing number:\n\n21, 18, __, 12, 9', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Rule: subtract 3 each time (18−21=−3, 9−12=−3).\n18−3=15\nCheck: 15−3=12 ✓' },
        { difficulty: 'Medium', question: 'Find the two missing numbers:\n\n84, __, 60, __, 36', answer: '72, 48', checkMode: 'auto', correctAnswer: '72,48', correctAnswers: ['72,48', '7248'], explanation: 'From 84 to 60 is a decrease of 24 over 2 steps, so each step is 24 ÷ 2 = 12.\nRule: subtract 12 each time.\n84−12=72, 60−12=48\nFull sequence: 84, 72, 60, 48, 36' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n100, 125, __, 175, 200', answer: '150', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150'], explanation: 'Rule: add 25 each time.\n125+25=150\nCheck: 150+25=175 ✓' },
        { difficulty: 'Medium', question: 'Find the missing number:\n\n5, 10, __, 40, 80', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20'], explanation: 'This is not an addition pattern (10−5=5 but 80−40=40). Check multiplication: 5×2=10, 40×2=80.\nRule: multiply by 2 each time.\n10×2=20\nCheck: 20×2=40 ✓' },

        // Block 3 — Input/output machines (Medium)
        { difficulty: 'Medium', question: 'The rule is subtract 7. Find the outputs for inputs 10, 15 and 20.', answer: '3, 8, 13', checkMode: 'auto', correctAnswer: '3,8,13', correctAnswers: ['3,8,13', '3813'], explanation: '10−7=3, 15−7=8, 20−7=13' },
        { difficulty: 'Medium', question: 'Find the rule: input 8 → output 2, input 16 → output 10, input 24 → output 18. What is the rule?', answer: 'Subtract 6', checkMode: 'auto', correctAnswer: 'Subtract 6', correctAnswers: ['Subtract 6', 'subtract 6', 'subtract6', 'minus 6', 'minus6', '-6'], explanation: '8−2=6, 16−10=6, 24−18=6 — each output is 6 less than the input.\nRule: Subtract 6' },
        { difficulty: 'Medium', question: 'The rule is multiply by 5. The output is 45. What is the input?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Use the inverse operation (divide by 5) on the output.\n45÷5=9\nCheck: 9×5=45 ✓' },
        { difficulty: 'Medium', question: 'The rule is add 8. Complete the table:\n\nInput: 3, 6, 9, 12\nOutput: ?, ?, ?, ?', answer: '11, 14, 17, 20', checkMode: 'auto', correctAnswer: '11,14,17,20', correctAnswers: ['11,14,17,20', '11, 14, 17, 20', '11141720'], explanation: '3+8=11, 6+8=14, 9+8=17, 12+8=20' },

        // Block 4 — Real-world word problems (Medium)
        { difficulty: 'Medium', question: 'Sipho reads 8 pages every day. How many pages does he read on day 5?', answer: '40 pages', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40pages', '40 pages'], explanation: 'The pattern is 8, 16, 24, 32, 40 (add 8 each day).\nDay 5 = 8 × 5 = 40 pages' },
        { difficulty: 'Medium', question: 'A tiling pattern starts with 5 tiles and adds 5 tiles for each new shape. How many tiles are in the 6th shape?', answer: '30 tiles', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30tiles', '30 tiles'], explanation: 'The pattern is 5, 10, 15, 20, 25, 30 (multiples of 5).\n6th shape = 5 × 6 = 30 tiles' },
        { difficulty: 'Medium', question: 'How much altogether does an event organiser pay for numbering tickets if the printer costs R50 to set up plus R2 for every ticket, for an order of 20 tickets?', answer: 'R90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'R90'], explanation: 'Set-up fee = R50. 20 tickets = 20 × R2 = R40.\nTotal = 50 + 40 = R90' },
        { difficulty: 'Medium', question: 'A stack of chairs grows by 6 chairs every time a new stack is added. If the first stack has 6 chairs, how many minutes after starting is the 5th stack finished if each stack takes 3 minutes to build?', answer: '15 minutes', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15minutes', '15 minutes'], explanation: 'Each stack takes 3 minutes, and the 5th stack finishes after 5 stacks are built.\n5 × 3 = 15 minutes after starting.' },

        // Block 5 — Reasoning, error-spotting & justification (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A pattern increases: 8, 20, 32, 44, 56. A student claims the rule is "add 10". Is this correct? If not, what is the actual rule?', answer: 'No, the actual rule is add 12', checkMode: 'auto', correctAnswer: 'Add 12', correctAnswers: ['Add 12', 'add 12', 'add12', '+12', 'plus 12', 'plus12', 'no, add 12', 'no add 12'], explanation: '20−8=12, 32−20=12, 44−32=12, 56−44=12 — the difference is always 12, not 10.\nThe student is incorrect: the actual rule is add 12.' },
        { difficulty: 'Medium-Hard', question: 'Pattern A starts at 3 and follows the rule multiply by 2. Pattern B starts at 3 and follows the rule add 8. Which pattern has the bigger 5th term?', answer: 'Pattern A', checkMode: 'auto', correctAnswer: 'Pattern A', correctAnswers: ['Pattern A', 'pattern a', 'a', 'A'], explanation: 'Pattern A: 3, 6, 12, 24, 48 — 5th term is 48.\nPattern B: 3, 11, 19, 27, 35 — 5th term is 35.\n48 > 35, so Pattern A has the bigger 5th term. Multiplying repeatedly eventually grows faster than adding a fixed amount.' },
        { difficulty: 'Medium-Hard', question: 'A friend checks only the first pair of numbers in a sequence and then says they know the rule for the whole pattern. Explain why this is risky, and describe a better way to be sure the rule is correct.', answer: 'Checking only one pair of numbers can be misleading, because two different rules can happen to give the same result for just one step (for example, both "add 4" and a changing rule could match the first jump by coincidence). A better way is to test the rule against every consecutive pair of terms in the sequence, not just the first one — if the same rule works for all of them, you can be confident it is correct. If even one pair does not match, the rule needs to be reconsidered.', checkMode: 'self' },

        // Block 6 — Multi-step / nth-term capstone (Hard)
        { difficulty: 'Hard', question: 'A pattern has the rule "add 7" and includes the numbers …, 38, 45, 52. What number comes just before 38 in the pattern?', answer: '31', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31'], explanation: 'Use the inverse rule (subtract 7) to go backwards.\n38−7=31' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered number patterns — every skill in this set, from extending patterns to multi-step reasoning.' },
        { minScore: 15, message: 'Great work! You are confident with most number pattern skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

}
