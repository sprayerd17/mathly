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

      practiceQuestions: [],
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

      diagramPlaceholder: 'Function machine diagram showing input arrow going into a box labelled with the rule and output arrow coming out the other side',
      videoPlaceholder: 'Short video showing how input and output function machines work with different rules',

      practiceQuestions: [],
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

      diagramPlaceholder: 'Number line from 0 to 25 showing the pattern 0 5 10 15 20 with dots and arrows labelled add 5 between each',

      practiceQuestions: [],
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
    },
  ],

  topicPractice: [

    // ── SECTION 1: WHAT IS A NUMBER PATTERN? ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Write the rule and the next 3 numbers:\n\n' +
        '2, 4, 6, 8, __, __, __\n\n' +
        'a) What is the rule?\n' +
        'b) Write the next 3 numbers.',
      answer: 'a) Add 2    b) 10, 12, 14',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Add 2',
          correctAnswers: ['Add 2', 'add 2', '+2', 'plus 2', 'plus2', 'add2'],
          explanation:
            'Find the difference between consecutive terms: 4 − 2 = 2, 6 − 4 = 2, 8 − 6 = 2.\n' +
            'The numbers get bigger by 2 each time.\n' +
            'Rule: Add 2',
        },
        {
          label: 'b) Write the next 3 numbers',
          correctAnswer: '10,12,14',
          correctAnswers: ['10,12,14', '101214'],
          explanation:
            'Apply the rule (add 2) three more times:\n' +
            '8 + 2 = 10\n' +
            '10 + 2 = 12\n' +
            '12 + 2 = 14\n\n' +
            'Next 3 numbers: 10, 12, 14',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Write the rule and the next 3 numbers:\n\n' +
        '75, 70, 65, 60, __, __, __\n\n' +
        'a) What is the rule?\n' +
        'b) Write the next 3 numbers.',
      answer: 'a) Subtract 5    b) 55, 50, 45',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Subtract 5',
          correctAnswers: [
            'Subtract 5', 'subtract 5', 'subtract5',
            'minus 5', 'minus5', '-5', 'takeaway5', 'take away 5',
          ],
          explanation:
            'Find the difference: 75 − 70 = 5, 70 − 65 = 5, 65 − 60 = 5.\n' +
            'The numbers get smaller by 5 each time — this is a decreasing pattern.\n' +
            'Rule: Subtract 5',
        },
        {
          label: 'b) Write the next 3 numbers',
          correctAnswer: '55,50,45',
          correctAnswers: ['55,50,45', '555045'],
          explanation:
            'Apply the rule (subtract 5) three more times:\n' +
            '60 − 5 = 55\n' +
            '55 − 5 = 50\n' +
            '50 − 5 = 45\n\n' +
            'Next 3 numbers: 55, 50, 45',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Thabo says the next number in this pattern is 45:\n\n' +
        '5, 10, 20, 40, __, ...\n\n' +
        'a) Is Thabo correct?\n' +
        'b) What is the actual rule?\n' +
        'c) What is the next number?',
      answer: 'a) No    b) Multiply by 2    c) 80',
      parts: [
        {
          label: 'a) Is Thabo correct?',
          correctAnswer: 'No',
          correctAnswers: ['No', 'no', 'incorrect', 'wrong', 'false'],
          explanation:
            'Thabo may have added 5 each time (5, 10, 15, 20 …), but look at the differences:\n' +
            '10 − 5 = 5, 20 − 10 = 10, 40 − 20 = 20.\n' +
            'The differences are not the same, so this is not an addition pattern.\n' +
            'Thabo is incorrect.',
        },
        {
          label: 'b) What is the actual rule?',
          correctAnswer: 'Multiply by 2',
          correctAnswers: [
            'Multiply by 2', 'multiply by 2', 'multiplyby2',
            'times 2', 'times2', 'x2', '×2', 'double',
          ],
          explanation:
            'Check multiplication: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40.\n' +
            'Each term is doubled.\n' +
            'Rule: Multiply by 2',
        },
        {
          label: 'c) What is the next number?',
          correctAnswer: '80',
          explanation:
            'Apply the rule to the last known term:\n' +
            '40 × 2 = 80\n\n' +
            'The next number is 80 (not 45).',
        },
      ],
    },

    // ── SECTION 2: SKIP COUNTING PATTERNS ────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Count forwards in 50s starting from 300.\n\nWrite the next 4 numbers.',
      answer: '350, 400, 450, 500',
      correctAnswer: '350,400,450,500',
      correctAnswers: ['350,400,450,500', '350400450500'],
      explanation:
        'Rule: add 50 each time.\n' +
        '300 + 50 = 350\n' +
        '350 + 50 = 400\n' +
        '400 + 50 = 450\n' +
        '450 + 50 = 500\n\n' +
        'Next 4 numbers: 350, 400, 450, 500',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Count backwards in 25s starting from 250.\n\nWrite the next 5 numbers.',
      answer: '225, 200, 175, 150, 125',
      correctAnswer: '225,200,175,150,125',
      correctAnswers: ['225,200,175,150,125', '225200175150125'],
      explanation:
        'Rule: subtract 25 each time.\n' +
        '250 − 25 = 225\n' +
        '225 − 25 = 200\n' +
        '200 − 25 = 175\n' +
        '175 − 25 = 150\n' +
        '150 − 25 = 125\n\n' +
        'Next 5 numbers: 225, 200, 175, 150, 125',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A pattern counts in 100s. The 3rd number in the pattern is 450.\n\n' +
        'a) What is the 1st number?\n' +
        'b) What is the 5th number?\n' +
        'c) What is the 10th number?',
      answer: 'a) 250    b) 650    c) 1150',
      parts: [
        {
          label: 'a) What is the 1st number?',
          correctAnswer: '250',
          explanation:
            'The 3rd number is 450. Count backwards in 100s to reach the 1st number.\n' +
            '3rd = 450\n' +
            '2nd = 450 − 100 = 350\n' +
            '1st = 350 − 100 = 250',
        },
        {
          label: 'b) What is the 5th number?',
          correctAnswer: '650',
          explanation:
            'Count forwards in 100s from the 3rd number (450).\n' +
            '3rd = 450\n' +
            '4th = 450 + 100 = 550\n' +
            '5th = 550 + 100 = 650',
        },
        {
          label: 'c) What is the 10th number?',
          correctAnswer: '1150',
          explanation:
            'Starting from the 1st number (250), add 100 for each step.\n' +
            'The nth number = 250 + (n − 1) × 100\n' +
            '10th number = 250 + 9 × 100 = 250 + 900 = 1150',
        },
      ],
    },

    // ── SECTION 3: INPUT AND OUTPUT VALUES ───────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'The rule is add 9. Find the output for each input:\n\n' +
        'a) Output for input 3\n' +
        'b) Output for input 6\n' +
        'c) Output for input 9\n' +
        'd) Output for input 12',
      answer: 'a) 12    b) 15    c) 18    d) 21',
      parts: [
        {
          label: 'a) Output for input 3',
          correctAnswer: '12',
          explanation: 'Rule: add 9.\n3 + 9 = 12',
        },
        {
          label: 'b) Output for input 6',
          correctAnswer: '15',
          explanation: 'Rule: add 9.\n6 + 9 = 15',
        },
        {
          label: 'c) Output for input 9',
          correctAnswer: '18',
          explanation: 'Rule: add 9.\n9 + 9 = 18',
        },
        {
          label: 'd) Output for input 12',
          correctAnswer: '21',
          explanation: 'Rule: add 9.\n12 + 9 = 21',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Find the rule and complete the table:\n\n' +
        'Input:  4, 8, 12, 16\n' +
        'Output: 12, 24, 36, __\n\n' +
        'a) What is the rule?\n' +
        'b) What is the missing output?',
      answer: 'a) Multiply by 3    b) 48',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Multiply by 3',
          correctAnswers: [
            'Multiply by 3', 'multiply by 3', 'multiplyby3',
            'times 3', 'times3', 'x3', '×3',
          ],
          explanation:
            'Compare each input with its output:\n' +
            '4 → 12: 4 × 3 = 12\n' +
            '8 → 24: 8 × 3 = 24\n' +
            '12 → 36: 12 × 3 = 36\n\n' +
            'The output is always 3 times the input.\n' +
            'Rule: Multiply by 3',
        },
        {
          label: 'b) What is the missing output?',
          correctAnswer: '48',
          explanation:
            'Apply the rule to the last input:\n' +
            '16 × 3 = 48',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'The rule is subtract 11. The output is 23.\n\n' +
        'a) What is the input?\n' +
        'b) Write the inverse operation you used to find it.\n' +
        'c) If the input was 50, what would the output be?',
      answer: 'a) 34    b) 23 + 11 = 34    c) 39',
      parts: [
        {
          label: 'a) What is the input?',
          correctAnswer: '34',
          explanation:
            'To find the input when you know the output, use the inverse operation.\n' +
            'The inverse of subtract 11 is add 11.\n' +
            'Input = 23 + 11 = 34',
        },
        {
          label: 'b) Write the inverse operation',
          correctAnswer: '23+11=34',
          correctAnswers: ['23+11=34', '23+11', 'add11', 'add 11', '+11'],
          explanation:
            'The inverse of "subtract 11" is "add 11".\n' +
            'Output + 11 = Input\n' +
            '23 + 11 = 34',
        },
        {
          label: 'c) If the input was 50, what is the output?',
          correctAnswer: '39',
          explanation:
            'Apply the original rule (subtract 11) to the new input:\n' +
            '50 − 11 = 39',
        },
      ],
    },

    // ── SECTION 4: FINDING MISSING NUMBERS IN A PATTERN ──────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Find the missing number:\n\n10, 20, __, 40, 50',
      answer: '30',
      correctAnswer: '30',
      explanation:
        'Find the rule: 20 − 10 = 10, 50 − 40 = 10.\n' +
        'Rule: add 10 each time.\n' +
        'Apply the rule to the number before the gap: 20 + 10 = 30.\n' +
        'Check: 30 + 10 = 40 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Find the missing numbers:\n\n' +
        '150, __, 110, __, 70\n\n' +
        'a) What is the rule?\n' +
        'b) What is the first missing number?\n' +
        'c) What is the second missing number?',
      answer: 'a) Subtract 20    b) 130    c) 90',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Subtract 20',
          correctAnswers: [
            'Subtract 20', 'subtract 20', 'subtract20',
            'minus 20', 'minus20', '-20',
          ],
          explanation:
            'Look at the known numbers: 150, 110, 70.\n' +
            'From 150 to 110 is a decrease of 40 over 2 steps → each step = 40 ÷ 2 = 20.\n' +
            'Check: 110 to 70 = decrease of 40 over 2 steps → 20 per step. ✓\n' +
            'Rule: Subtract 20',
        },
        {
          label: 'b) First missing number (between 150 and 110)',
          correctAnswer: '130',
          explanation:
            'Apply the rule to the first known number:\n' +
            '150 − 20 = 130\n' +
            'Check: 130 − 20 = 110 ✓',
        },
        {
          label: 'c) Second missing number (between 110 and 70)',
          correctAnswer: '90',
          explanation:
            'Apply the rule to 110:\n' +
            '110 − 20 = 90\n' +
            'Check: 90 − 20 = 70 ✓\n\n' +
            'Full sequence: 150, 130, 110, 90, 70',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        '4, 8, __, 32, 64\n\n' +
        'a) What is the rule?\n' +
        'b) What is the missing number?\n' +
        'c) What would the 6th number be?',
      answer: 'a) Multiply by 2    b) 16    c) 128',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Multiply by 2',
          correctAnswers: [
            'Multiply by 2', 'multiply by 2', 'multiplyby2',
            'times 2', 'times2', 'x2', '×2', 'double',
          ],
          explanation:
            'Check if addition works: 8 − 4 = 4, but 64 − 32 = 32 — differences not equal. Not addition.\n' +
            'Check multiplication: 4 × 2 = 8, 32 × 2 = 64. ✓\n' +
            'Rule: Multiply by 2',
        },
        {
          label: 'b) What is the missing number?',
          correctAnswer: '16',
          explanation:
            'Apply the rule to the number before the gap:\n' +
            '8 × 2 = 16\n' +
            'Check: 16 × 2 = 32 ✓',
        },
        {
          label: 'c) What is the 6th number?',
          correctAnswer: '128',
          explanation:
            'The full sequence so far: 4, 8, 16, 32, 64 (5 terms).\n' +
            'Apply the rule once more:\n' +
            '64 × 2 = 128',
        },
      ],
    },

    // ── SECTION 5: REPRESENTING PATTERNS ON A NUMBER LINE ────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A pattern is shown on a number line: 0, 10, 20, 30, 40.\n\n' +
        'a) What is the rule?\n' +
        'b) What are the next 2 numbers?',
      answer: 'a) Add 10    b) 50, 60',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Add 10',
          correctAnswers: ['Add 10', 'add 10', 'add10', '+10', 'plus 10', 'plus10'],
          explanation:
            'Find the difference between consecutive terms: 10 − 0 = 10, 20 − 10 = 10.\n' +
            'The numbers increase by 10 each time.\n' +
            'Rule: Add 10',
        },
        {
          label: 'b) What are the next 2 numbers?',
          correctAnswer: '50,60',
          correctAnswers: ['50,60', '5060'],
          explanation:
            'Apply the rule twice:\n' +
            '40 + 10 = 50\n' +
            '50 + 10 = 60\n\n' +
            'Next 2 numbers: 50, 60',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A number line shows these marked points: 5, 11, 17, 23.\n\n' +
        'a) What is the rule?\n' +
        'b) What number comes before 5 on this number line?\n' +
        'c) What is the 6th number in the pattern?',
      answer: 'a) Add 6    b) −1    c) 35',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Add 6',
          correctAnswers: ['Add 6', 'add 6', 'add6', '+6', 'plus 6', 'plus6'],
          explanation:
            'Find the difference: 11 − 5 = 6, 17 − 11 = 6, 23 − 17 = 6.\n' +
            'Rule: Add 6',
        },
        {
          label: 'b) What number comes before 5?',
          correctAnswer: '-1',
          correctAnswers: ['-1', '−1', 'negativeone', 'negative1', 'nonumber', 'none', 'thereisnonumber'],
          explanation:
            'Use the inverse rule (subtract 6) to go backwards:\n' +
            '5 − 6 = −1\n\n' +
            'The number before 5 in this pattern is −1.',
        },
        {
          label: 'c) What is the 6th number?',
          correctAnswer: '35',
          explanation:
            'The known terms are: 5 (1st), 11 (2nd), 17 (3rd), 23 (4th).\n' +
            '5th = 23 + 6 = 29\n' +
            '6th = 29 + 6 = 35',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A pattern on a number line starts at 200 and ends at 100. There are 4 equal steps between them.\n\n' +
        'a) What is the rule?\n' +
        'b) Write all the numbers in the pattern.',
      answer: 'a) Subtract 25    b) 200, 175, 150, 125, 100',
      parts: [
        {
          label: 'a) What is the rule?',
          correctAnswer: 'Subtract 25',
          correctAnswers: [
            'Subtract 25', 'subtract 25', 'subtract25',
            'minus 25', 'minus25', '-25',
          ],
          explanation:
            'Total decrease = 200 − 100 = 100.\n' +
            'Number of steps = 4.\n' +
            'Each step = 100 ÷ 4 = 25.\n' +
            'Rule: Subtract 25',
        },
        {
          label: 'b) Write all the numbers in the pattern',
          correctAnswer: '200,175,150,125,100',
          correctAnswers: ['200,175,150,125,100', '200175150125100'],
          explanation:
            'Starting at 200, subtract 25 each time:\n' +
            '200 − 25 = 175\n' +
            '175 − 25 = 150\n' +
            '150 − 25 = 125\n' +
            '125 − 25 = 100\n\n' +
            'Pattern: 200, 175, 150, 125, 100',
        },
      ],
    },

    // ── SECTION 6: CREATING YOUR OWN PATTERNS ────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Create an increasing pattern starting at 3 with the rule add 7.\n\n' +
        'Write the first 6 numbers.',
      answer: '3, 10, 17, 24, 31, 38',
      correctAnswer: '3,10,17,24,31,38',
      correctAnswers: ['3,10,17,24,31,38', '31017243138'],
      explanation:
        'Starting number: 3. Rule: add 7.\n' +
        '3 + 7 = 10\n' +
        '10 + 7 = 17\n' +
        '17 + 7 = 24\n' +
        '24 + 7 = 31\n' +
        '31 + 7 = 38\n\n' +
        'Pattern: 3, 10, 17, 24, 31, 38',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Create a decreasing pattern starting at 500 with the rule subtract 45.\n\n' +
        'Write the first 5 numbers.',
      answer: '500, 455, 410, 365, 320',
      correctAnswer: '500,455,410,365,320',
      correctAnswers: ['500,455,410,365,320', '500455410365320'],
      explanation:
        'Starting number: 500. Rule: subtract 45.\n' +
        '500 − 45 = 455\n' +
        '455 − 45 = 410\n' +
        '410 − 45 = 365\n' +
        '365 − 45 = 320\n\n' +
        'Pattern: 500, 455, 410, 365, 320',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Create your own number pattern with at least 6 numbers.\n\n' +
        'a) Write your pattern.\n' +
        'b) What is the rule?\n' +
        'c) Describe a real-life situation where you might see this pattern.',
      answer:
        'Accept any valid pattern with a clear rule.\n\n' +
        'Checklist:\n' +
        '• a) At least 6 numbers that follow the same rule every time\n' +
        '• b) A clear rule stated (e.g. "Add 5" or "Subtract 10")\n' +
        '• c) A realistic real-life connection\n\n' +
        'Example: Start at 5, rule add 5 → 5, 10, 15, 20, 25, 30\n' +
        'Real life: counting 5c coins in a piggy bank.',
    },

  ],

  scoreMessages: [
    {
      minScore: 38,
      message:
        'Outstanding! 38 out of 38 — you have mastered Number Patterns completely. Every single part was correct. Excellent work! 🌟',
    },
    {
      minScore: 31,
      message:
        'Excellent work! You have a strong understanding of number patterns. Review the parts you missed and you will be at full marks.',
    },
    {
      minScore: 23,
      message:
        'Good effort! You are making solid progress with number patterns. Go back over the sections where you lost marks and try those questions again.',
    },
    {
      minScore: 0,
      message:
        'Keep going — patterns take practice! Work through the study guide again, focus on the worked examples, and then give the questions another try. You can do it!',
    },
  ],
}
