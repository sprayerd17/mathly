import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Multiplication',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS MULTIPLICATION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-multiplication',
      title: 'What is Multiplication?',
      icon: '✖️',
      explanation: `<p style="margin-bottom:18px;">Multiplication is a <strong>fast way of doing repeated addition</strong>. When you have equal groups of the same number, you can multiply instead of adding the same number over and over again. This saves a lot of time!</p>

<p style="margin-bottom:12px;font-weight:600;">Three real-life examples:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">4</span> boxes, each holding <span style="color:#1e40af;font-weight:700;">6</span> pencils — instead of writing <span style="color:#1e40af;font-weight:600;">6 + 6 + 6 + 6</span>, we write <span style="color:#dc2626;font-weight:600;">4</span> × <span style="color:#1e40af;font-weight:600;">6</span> = <strong>24</strong>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">5</span> bags, each with <span style="color:#1e40af;font-weight:700;">3</span> apples — instead of writing <span style="color:#1e40af;font-weight:600;">3 + 3 + 3 + 3 + 3</span>, we write <span style="color:#dc2626;font-weight:600;">5</span> × <span style="color:#1e40af;font-weight:600;">3</span> = <strong>15</strong>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">3</span> packets, each with <span style="color:#1e40af;font-weight:700;">10</span> sweets — instead of writing <span style="color:#1e40af;font-weight:600;">10 + 10 + 10</span>, we write <span style="color:#dc2626;font-weight:600;">3</span> × <span style="color:#1e40af;font-weight:600;">10</span> = <strong>30</strong>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Key words to know:</p>

<div style="display:flex;flex-direction:column;gap:9px;">
  <div><strong>Times</strong> — another word for multiply. "3 times 5" means 3 × 5.</div>
  <div><strong>Multiply</strong> — to find the total when you have equal groups.</div>
  <div><strong>Product</strong> — the answer you get when you multiply. In 3 × 5 = 15, the <em>product</em> is <strong>15</strong>.</div>
  <div><strong>Groups of</strong> — "3 groups of 5" means 3 × 5.</div>
  <div><strong>Lots of</strong> — "3 lots of 5" also means 3 × 5.</div>
</div>`,

      workedExamples: [
        {
          question: 'Show that 3 × 5 is the same as 5 + 5 + 5',
          answer: '15',
          steps: [
            `Think of <span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#1e40af;font-weight:700;">5</span> as "<span style="color:#dc2626;font-weight:600;">3</span> groups of <span style="color:#1e40af;font-weight:600;">5</span>". The <span style="color:#dc2626;font-weight:600;">first number</span> tells you how many groups, and the <span style="color:#1e40af;font-weight:600;">second number</span> tells you how many are in each group.`,
            `Compare repeated addition and multiplication side by side:
<div style="display:flex;gap:14px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;min-width:170px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Repeated Addition</div>
    <div style="font-size:16px;color:#1e3a8a;"><span style="color:#1e40af;font-weight:700;">5</span> + <span style="color:#1e40af;font-weight:700;">5</span> + <span style="color:#1e40af;font-weight:700;">5</span> = <strong>15</strong></div>
    <div style="font-size:12px;color:#6b7280;margin-top:5px;"><span style="color:#dc2626;font-weight:600;">3</span> lots of <span style="color:#1e40af;font-weight:600;">5</span></div>
  </div>
  <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;min-width:170px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Multiplication</div>
    <div style="font-size:16px;color:#7f1d1d;"><span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#1e40af;font-weight:700;">5</span> = <strong>15</strong></div>
    <div style="font-size:12px;color:#6b7280;margin-top:5px;"><span style="color:#dc2626;font-weight:600;">3</span> groups of <span style="color:#1e40af;font-weight:600;">5</span></div>
  </div>
</div>`,
            'Both methods give exactly the same answer: <strong>15</strong>. Multiplication is just a faster, shorter way to write it.',
          ],
        },
        {
          question:
            'A classroom has 6 rows of desks with 7 desks in each row. How many desks are there altogether?',
          answer: '42 desks',
          steps: [
            `Identify the groups and the group size: there are <span style="color:#dc2626;font-weight:700;">6</span> rows (the number of groups) with <span style="color:#1e40af;font-weight:700;">7</span> desks in each row (the group size). This is a multiplication problem — equal groups of the same number.`,
            `Write the multiplication number sentence: <span style="color:#dc2626;font-weight:700;">6</span> × <span style="color:#1e40af;font-weight:700;">7</span> = <strong>42</strong>`,
            `There are <strong>42 desks</strong> altogether in the classroom.`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MULTIPLICATION TABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-tables',
      title: 'Multiplication Tables',
      icon: '📋',
      explanation: `<p style="margin-bottom:16px;">Knowing your multiplication tables by heart makes maths much faster. Instead of working out each calculation step by step, you can recall the answer straight away. This is one of the most useful maths skills you can build!</p>

<p style="margin-bottom:20px;">In Grade 4, you need to know the <strong>2, 3, 4, 5 and 10 times tables</strong> well. Practise these until you can say them without even thinking about it.</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(108px,1fr));gap:10px;">

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 2</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 2 = <strong style="color:#1e40af;">2</strong><br>
      2 × 2 = <strong style="color:#1e40af;">4</strong><br>
      3 × 2 = <strong style="color:#1e40af;">6</strong><br>
      4 × 2 = <strong style="color:#1e40af;">8</strong><br>
      5 × 2 = <strong style="color:#1e40af;">10</strong><br>
      6 × 2 = <strong style="color:#1e40af;">12</strong><br>
      7 × 2 = <strong style="color:#1e40af;">14</strong><br>
      8 × 2 = <strong style="color:#1e40af;">16</strong><br>
      9 × 2 = <strong style="color:#1e40af;">18</strong><br>
      10 × 2 = <strong style="color:#1e40af;">20</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 3</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 3 = <strong style="color:#1e40af;">3</strong><br>
      2 × 3 = <strong style="color:#1e40af;">6</strong><br>
      3 × 3 = <strong style="color:#1e40af;">9</strong><br>
      4 × 3 = <strong style="color:#1e40af;">12</strong><br>
      5 × 3 = <strong style="color:#1e40af;">15</strong><br>
      6 × 3 = <strong style="color:#1e40af;">18</strong><br>
      7 × 3 = <strong style="color:#1e40af;">21</strong><br>
      8 × 3 = <strong style="color:#1e40af;">24</strong><br>
      9 × 3 = <strong style="color:#1e40af;">27</strong><br>
      10 × 3 = <strong style="color:#1e40af;">30</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 4</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 4 = <strong style="color:#1e40af;">4</strong><br>
      2 × 4 = <strong style="color:#1e40af;">8</strong><br>
      3 × 4 = <strong style="color:#1e40af;">12</strong><br>
      4 × 4 = <strong style="color:#1e40af;">16</strong><br>
      5 × 4 = <strong style="color:#1e40af;">20</strong><br>
      6 × 4 = <strong style="color:#1e40af;">24</strong><br>
      7 × 4 = <strong style="color:#1e40af;">28</strong><br>
      8 × 4 = <strong style="color:#1e40af;">32</strong><br>
      9 × 4 = <strong style="color:#1e40af;">36</strong><br>
      10 × 4 = <strong style="color:#1e40af;">40</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 5</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 5 = <strong style="color:#1e40af;">5</strong><br>
      2 × 5 = <strong style="color:#1e40af;">10</strong><br>
      3 × 5 = <strong style="color:#1e40af;">15</strong><br>
      4 × 5 = <strong style="color:#1e40af;">20</strong><br>
      5 × 5 = <strong style="color:#1e40af;">25</strong><br>
      6 × 5 = <strong style="color:#1e40af;">30</strong><br>
      7 × 5 = <strong style="color:#1e40af;">35</strong><br>
      8 × 5 = <strong style="color:#1e40af;">40</strong><br>
      9 × 5 = <strong style="color:#1e40af;">45</strong><br>
      10 × 5 = <strong style="color:#1e40af;">50</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 10</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 10 = <strong style="color:#1e40af;">10</strong><br>
      2 × 10 = <strong style="color:#1e40af;">20</strong><br>
      3 × 10 = <strong style="color:#1e40af;">30</strong><br>
      4 × 10 = <strong style="color:#1e40af;">40</strong><br>
      5 × 10 = <strong style="color:#1e40af;">50</strong><br>
      6 × 10 = <strong style="color:#1e40af;">60</strong><br>
      7 × 10 = <strong style="color:#1e40af;">70</strong><br>
      8 × 10 = <strong style="color:#1e40af;">80</strong><br>
      9 × 10 = <strong style="color:#1e40af;">90</strong><br>
      10 × 10 = <strong style="color:#1e40af;">100</strong>
    </div>
  </div>

</div>`,

      workedExamples: [
        {
          question: 'Use the 4 times table to solve: 4 × 8',
          answer: '32',
          steps: [
            `We need to find <strong>4 × 8</strong>. We can use the 4 times table by counting up in 4s — we need to count <strong>8 steps</strong>.`,
            `Count up in 4s, one step at a time:
<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0;">
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">4</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">8</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">12</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">16</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">20</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">24</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">28</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#1e40af;border:1px solid #1e40af;border-radius:20px;padding:3px 12px;font-size:13px;color:white;font-weight:700;">32 ✓</span>
</div>`,
            `The 8th step is <strong>32</strong>, so <strong>4 × 8 = 32</strong>.`,
          ],
        },
        {
          question: 'A packet has 5 sweets. How many sweets are in 7 packets?',
          answer: '35 sweets',
          steps: [
            `There are <strong>7</strong> packets with <strong>5</strong> sweets in each. Write this as a multiplication: <strong>7 × 5</strong>`,
            `Use the 5 times table. Count up in 5s for 7 steps:
<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0;">
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">5</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">10</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">15</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">20</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">25</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">30</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#1e40af;border:1px solid #1e40af;border-radius:20px;padding:3px 12px;font-size:13px;color:white;font-weight:700;">35 ✓</span>
</div>`,
            `The 7th step is <strong>35</strong>, so there are <strong>35 sweets</strong> altogether.`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to memorise the 5 times table using skip counting',
      diagramPlaceholder: 'Multiplication table grid for 2s, 3s, 4s, 5s and 10s laid out clearly',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MULTIPLYING A 2-DIGIT NUMBER BY A 1-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2digit-by-1digit',
      title: 'Multiplying a 2-Digit Number by a 1-Digit Number',
      icon: '🔢',
      explanation: `<p style="margin-bottom:16px;">When we multiply a 2-digit number by a 1-digit number, we use the <strong>column method</strong>. Write the numbers lined up on the right, one above the other. Then multiply each column separately — always starting from the <span style="color:#1e40af;font-weight:600;">units</span> column on the right, then moving to the <span style="color:#16a34a;font-weight:600;">tens</span> column on the left.</p>

<p style="margin-bottom:16px;"><strong>The golden rule:</strong> if your answer in any column is <strong>10 or more</strong>, write the units digit of that answer and <em>carry</em> the tens digit over to the next column. The carried digit is shown in <span style="color:#ea580c;font-weight:600;">orange</span>.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Colour guide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Units — blue</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tens — green</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Carry — orange</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 34 × 2',
          answer: '68',
          steps: [
            `Write the numbers in column format, digits lined up on the right. We always start with the <span style="color:#1e40af;font-weight:600;">units</span> column first.
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">2</td>
    </tr>
  </table>
</div>`,
            `Multiply the <span style="color:#1e40af;font-weight:700;">units</span>: <span style="color:#1e40af;font-weight:700;">4 × 2 = 8</span>. Write <span style="color:#1e40af;font-weight:700;">8</span> in the units column. There is nothing to carry because 8 is less than 10.`,
            `Multiply the <span style="color:#16a34a;font-weight:700;">tens</span>: <span style="color:#16a34a;font-weight:700;">3 × 2 = 6</span>. Write <span style="color:#16a34a;font-weight:700;">6</span> in the tens column. The complete column layout:
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">2</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">6</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">8</td>
    </tr>
  </table>
</div>`,
          ],
        },
        {
          question: 'Calculate 47 × 3',
          answer: '141',
          steps: [
            `Write <strong>47 × 3</strong> in column format. Start with the <span style="color:#1e40af;font-weight:600;">units</span> column.`,
            `Multiply the <span style="color:#1e40af;font-weight:700;">units</span>: <span style="color:#1e40af;font-weight:700;">7 × 3 = 21</span>. 21 is 10 or more, so write the <span style="color:#1e40af;font-weight:700;">1</span> in the units column and <span style="color:#ea580c;font-weight:700;">carry the 2</span> to the tens column.`,
            `Multiply the <span style="color:#16a34a;font-weight:700;">tens</span>: <span style="color:#16a34a;font-weight:700;">4 × 3 = 12</span>. Now add the carried <span style="color:#ea580c;font-weight:700;">2</span>: <span style="color:#16a34a;font-weight:700;">12</span> + <span style="color:#ea580c;font-weight:700;">2</span> = <strong>14</strong>. Write <span style="color:#16a34a;font-weight:700;">4</span> in the tens column and <strong>1</strong> in the hundreds column. The complete column layout:
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">2</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">4</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">7</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">3</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">4</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">1</td>
    </tr>
  </table>
</div>`,
          ],
        },
        {
          question:
            'A farmer plants 56 trees in each row. There are 4 rows. How many trees altogether?',
          answer: '224 trees',
          steps: [
            `The farmer has <strong>4</strong> rows with <strong>56</strong> trees in each. This is a multiplication problem: <strong>56 × 4</strong>. Write it in column format.`,
            `Multiply the <span style="color:#1e40af;font-weight:700;">units</span>: <span style="color:#1e40af;font-weight:700;">6 × 4 = 24</span>. 24 is 10 or more, so write <span style="color:#1e40af;font-weight:700;">4</span> in the units column and <span style="color:#ea580c;font-weight:700;">carry the 2</span> to the tens column.`,
            `Multiply the <span style="color:#16a34a;font-weight:700;">tens</span>: <span style="color:#16a34a;font-weight:700;">5 × 4 = 20</span>. Add the carried <span style="color:#ea580c;font-weight:700;">2</span>: <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">2</span> = <strong>22</strong>. Write <span style="color:#16a34a;font-weight:700;">2</span> in the tens column and <strong>2</strong> in the hundreds column. There are <strong>224 trees</strong> altogether.
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">2</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">5</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">6</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">4</td>
    </tr>
  </table>
</div>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Short video showing column multiplication of a 2-digit number by a 1-digit number with carrying',
      diagramPlaceholder: 'Column multiplication layout showing 47 × 3 with carried digit shown in orange',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MULTIPLYING USING FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-using-factors',
      title: 'Multiplying Using Factors',
      icon: '🔗',
      explanation: `<p style="margin-bottom:16px;">Sometimes it is easier to <strong>break a bigger number into its factors</strong> before multiplying. <strong>Factors</strong> are two numbers that multiply together to give another number.</p>

<p style="margin-bottom:16px;">For example, <span style="color:#dc2626;font-weight:700;">12</span> = <span style="color:#1e40af;font-weight:700;">6</span> × <span style="color:#16a34a;font-weight:700;">2</span> — so instead of calculating 6 × <span style="color:#dc2626;font-weight:700;">12</span> in one step, you can do 6 × <span style="color:#1e40af;font-weight:700;">6</span> × <span style="color:#16a34a;font-weight:700;">2</span>. This turns one bigger multiplication into two smaller ones that are much easier to work with!</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Colour guide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Original number — red</span>
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">First factor — blue</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Second factor — green</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 4 × 12 using factors',
          answer: '48',
          steps: [
            `Break <span style="color:#dc2626;font-weight:700;">12</span> into two factors: <span style="color:#dc2626;font-weight:700;">12</span> = <span style="color:#1e40af;font-weight:700;">4</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Replace <span style="color:#dc2626;font-weight:700;">12</span> with its factors in the original calculation: 4 × <span style="color:#dc2626;font-weight:700;">12</span> = 4 × <span style="color:#1e40af;font-weight:700;">4</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Multiply the first two numbers: 4 × <span style="color:#1e40af;font-weight:700;">4</span> = <strong>16</strong>`,
            `Multiply the result by the remaining factor: 16 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>48</strong>`,
          ],
        },
        {
          question: 'Calculate 6 × 15 using factors',
          answer: '90',
          steps: [
            `Break <span style="color:#dc2626;font-weight:700;">15</span> into two factors: <span style="color:#dc2626;font-weight:700;">15</span> = <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Replace <span style="color:#dc2626;font-weight:700;">15</span> with its factors in the original calculation: 6 × <span style="color:#dc2626;font-weight:700;">15</span> = 6 × <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Multiply the first two numbers: 6 × <span style="color:#1e40af;font-weight:700;">5</span> = <strong>30</strong>`,
            `Multiply the result by the remaining factor: 30 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>90</strong>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to use factors to simplify multiplication',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — ESTIMATING AND SOLVING MULTIPLICATION PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-multiplication',
      title: 'Estimating and Solving Multiplication Problems',
      icon: '🎯',
      explanation: `<p style="margin-bottom:16px;">Before doing any multiplication, it is good practice to <strong>estimate first</strong>. An estimate is a quick approximate answer you get by rounding. After you work out the exact answer, you compare it to your estimate — if they are close, your answer is likely correct. If they are very far apart, you may have made a mistake and should check your working.</p>

<p style="margin-bottom:16px;"><strong>How to estimate a multiplication:</strong> round the bigger number to the nearest 10, then multiply. Your estimate will not be exact, but it will be close enough to tell you if your answer makes sense.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Colour guide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Estimate — orange</span>
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Exact answer — blue</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Estimate 38 × 4, then calculate the exact answer',
          answer: 'Estimate: ≈ 160 — Exact: 152',
          steps: [
            `Round 38 to the nearest 10: 38 rounds <strong>up</strong> to <span style="color:#ea580c;font-weight:700;">40</span>. Multiply: <span style="color:#ea580c;font-weight:700;">40 × 4 = 160</span>. So our exact answer should be close to <span style="color:#ea580c;font-weight:700;">160</span>.`,
            `Now calculate the exact answer using the column method:
<br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Units:</span> 8 × 4 = 32 — write <span style="color:#1e40af;font-weight:700;">2</span>, carry <span style="color:#ea580c;font-weight:700;">3</span></span><br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#16a34a;font-weight:600;">Tens:</span> 3 × 4 = 12, plus carried <span style="color:#ea580c;font-weight:700;">3</span> = 15 — write <span style="color:#16a34a;font-weight:700;">5</span>, carry 1</span>
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">3</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">8</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">5</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">2</td>
    </tr>
  </table>
</div>`,
            `Compare the estimate and the exact answer:
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:6px;">Estimate</div>
    <div style="font-size:18px;font-weight:700;color:#c2410c;">≈ 160</div>
    <div style="font-size:12px;color:#9a3412;margin-top:3px;">40 × 4</div>
  </div>
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Exact Answer</div>
    <div style="font-size:18px;font-weight:700;color:#1e3a8a;">152</div>
    <div style="font-size:12px;color:#1e40af;margin-top:3px;">38 × 4</div>
  </div>
</div>
<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:10px 14px;">
  <span style="color:#16a34a;font-weight:600;font-size:13px;">✓ 152 is close to 160 — the answer is reasonable!</span>
</div>`,
          ],
        },
        {
          question:
            'A school buys 9 boxes of crayons. Each box has 24 crayons. How many crayons altogether?',
          answer: '216 crayons',
          steps: [
            `Estimate first: round 24 to the nearest 10 — 24 rounds <strong>down</strong> to <span style="color:#ea580c;font-weight:700;">20</span>. Multiply: <span style="color:#ea580c;font-weight:700;">9 × 20 = 180</span>. Our exact answer should be close to <span style="color:#ea580c;font-weight:700;">180</span>.`,
            `Now calculate the exact answer — 24 × 9 — using the column method:
<br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Units:</span> 4 × 9 = 36 — write <span style="color:#1e40af;font-weight:700;">6</span>, carry <span style="color:#ea580c;font-weight:700;">3</span></span><br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#16a34a;font-weight:600;">Tens:</span> 2 × 9 = 18, plus carried <span style="color:#ea580c;font-weight:700;">3</span> = 21 — write <span style="color:#16a34a;font-weight:700;">1</span> in tens, <strong>2</strong> in hundreds</span>
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">3</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">2</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">9</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">6</td>
    </tr>
  </table>
</div>`,
            `Compare the estimate and the exact answer:
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:6px;">Estimate</div>
    <div style="font-size:18px;font-weight:700;color:#c2410c;">≈ 180</div>
    <div style="font-size:12px;color:#9a3412;margin-top:3px;">9 × 20</div>
  </div>
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Exact Answer</div>
    <div style="font-size:18px;font-weight:700;color:#1e3a8a;">216</div>
    <div style="font-size:12px;color:#1e40af;margin-top:3px;">24 × 9</div>
  </div>
</div>
<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:10px 14px;">
  <span style="color:#16a34a;font-weight:600;font-size:13px;">✓ 216 is close to 180 — there are <strong>216 crayons</strong> altogether and the answer is reasonable!</span>
</div>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to estimate before multiplying and check if the answer is reasonable',
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — TIMES TABLES AND DIRECT MULTIPLICATION (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Times Tables and Direct Multiplication',
      questions: [
        { difficulty: 'Easy', question: 'Calculate: 3 × 5', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: '3 × 5 = 15. Count in 5s for 3 steps: 5, 10, 15 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 4 × 6', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: '4 × 6 = 24. Count in 6s for 4 steps: 6, 12, 18, 24 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 7 × 8', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: '7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 9 × 9', answer: '81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81'], explanation: '9 × 9 = 81 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 6 × 7', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42'], explanation: '6 × 7 = 42 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 8 × 8', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64'], explanation: '8 × 8 = 64 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 5 × 9', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: '5 × 9 = 45. Count in 5s for 9 steps: 5, 10, 15, 20, 25, 30, 35, 40, 45 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 7 × 7', answer: '49', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49'], explanation: '7 × 7 = 49 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 4 × 9', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '4 × 9 = 36 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 6 × 8', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48'], explanation: '6 × 8 = 48 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 3 × 9', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: '3 × 9 = 27. Count in 3s for 9 steps: 3, 6, 9, 12, 15, 18, 21, 24, 27 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 8 × 9', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '8 × 9 = 72 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 9 × 10', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: '9 × 10 = 90 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 7 × 10', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70'], explanation: '7 × 10 = 70 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 10 × 10', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: '10 × 10 = 100 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 12 × 5', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60'], explanation: '12 × 5 = 60. Think of it as 10 × 5 + 2 × 5 = 50 + 10 = 60 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 12 × 7', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: '12 × 7 = 84. Think: 10 × 7 + 2 × 7 = 70 + 14 = 84 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 12 × 8', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: '12 × 8 = 96. Think: 10 × 8 + 2 × 8 = 80 + 16 = 96 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 12 × 9', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108'], explanation: '12 × 9 = 108. Think: 10 × 9 + 2 × 9 = 90 + 18 = 108 ✓' },
        { difficulty: 'Hard', question: 'Calculate: 12 × 12', answer: '144', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144'], explanation: '12 × 12 = 144. Think: 10 × 12 + 2 × 12 = 120 + 24 = 144 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: '11 × 6 = 66. Think: 10 × 6 + 1 × 6 = 60 + 6 = 66 ✓' },
        { difficulty: 'Medium', question: 'Calculate: 11 × 9', answer: '99', checkMode: 'auto', correctAnswer: '99', correctAnswers: ['99'], explanation: '11 × 9 = 99. Think: 10 × 9 + 1 × 9 = 90 + 9 = 99 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 6 × 6', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '6 × 6 = 36 ✓' },
        { difficulty: 'Medium', question: 'Fill in the missing number: 9 × ___ = 63', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Count in 9s until you reach 63: 9, 18, 27, 36, 45, 54, 63 — that is 7 steps, so 9 × 7 = 63 ✓' },
        { difficulty: 'Medium', question: 'Fill in the missing number: ___ × 7 = 56', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 × 7 = 56, so the missing number is 8 ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You know your times tables and direct multiplication facts really well.' },
        { minScore: 19, message: 'Great work! You are confident with multiplication — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Practise your times tables a bit more and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — 2-DIGIT MULTIPLICATION, FACTORS AND ESTIMATION (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: 2-Digit Multiplication, Factors and Estimation',
      questions: [
        { difficulty: 'Easy', question: 'Calculate using the column method: 23 × 3', answer: '69', checkMode: 'auto', correctAnswer: '69', correctAnswers: ['69'], explanation: 'Units: 3 × 3 = 9. Tens: 2 × 3 = 6.\nAnswer: 69 ✓' },
        { difficulty: 'Easy', question: 'Calculate using the column method: 42 × 2', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Units: 2 × 2 = 4. Tens: 4 × 2 = 8.\nAnswer: 84 ✓' },
        { difficulty: 'Easy', question: 'Calculate using the column method: 34 × 2', answer: '68', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68'], explanation: 'Units: 4 × 2 = 8. Tens: 3 × 2 = 6.\nAnswer: 68 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 47 × 3', answer: '141', checkMode: 'auto', correctAnswer: '141', correctAnswers: ['141'], explanation: 'Units: 7 × 3 = 21. Write 1, carry 2.\nTens: 4 × 3 = 12, plus carried 2 = 14. Write 4 in tens, 1 in hundreds.\nAnswer: 141 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 56 × 4', answer: '224', checkMode: 'auto', correctAnswer: '224', correctAnswers: ['224'], explanation: 'Units: 6 × 4 = 24. Write 4, carry 2.\nTens: 5 × 4 = 20, plus carried 2 = 22. Write 2 in tens, 2 in hundreds.\nAnswer: 224 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 67 × 4', answer: '268', checkMode: 'auto', correctAnswer: '268', correctAnswers: ['268'], explanation: 'Units: 7 × 4 = 28. Write 8, carry 2.\nTens: 6 × 4 = 24, plus carried 2 = 26. Write 6 in tens, 2 in hundreds.\nAnswer: 268 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 45 × 6', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Units: 5 × 6 = 30. Write 0, carry 3.\nTens: 4 × 6 = 24, plus carried 3 = 27. Write 7 in tens, 2 in hundreds.\nAnswer: 270 ✓' },
        { difficulty: 'Hard', question: 'Calculate using the column method, showing your carrying: 32 × 8', answer: '256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256'], explanation: 'Units: 2 × 8 = 16. Write 6, carry 1.\nTens: 3 × 8 = 24, plus carried 1 = 25. Write 5 in tens, 2 in hundreds.\nAnswer: 256 ✓' },
        { difficulty: 'Hard', question: 'Calculate using the column method, showing your carrying: 64 × 9', answer: '576', checkMode: 'auto', correctAnswer: '576', correctAnswers: ['576'], explanation: 'Units: 4 × 9 = 36. Write 6, carry 3.\nTens: 6 × 9 = 54, plus carried 3 = 57. Write 7 in tens, 5 in hundreds.\nAnswer: 576 ✓' },
        { difficulty: 'Hard', question: 'Calculate using the column method, showing your carrying: 92 × 4', answer: '368', checkMode: 'auto', correctAnswer: '368', correctAnswers: ['368'], explanation: 'Units: 2 × 4 = 8. No carrying needed.\nTens: 9 × 4 = 36. Write 6 in tens, 3 in hundreds.\nAnswer: 368 ✓' },
        { difficulty: 'Easy', question: 'Break 12 into two factors and use them to calculate: 3 × 12', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '12 = 6 × 2, so 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36 ✓' },
        { difficulty: 'Medium', question: 'Break 16 into two factors and use them to calculate: 5 × 16', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80'], explanation: '16 = 8 × 2, so 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80 ✓' },
        { difficulty: 'Medium', question: 'Break 18 into two factors and use them to calculate: 4 × 18', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '18 = 9 × 2, so 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72 ✓' },
        { difficulty: 'Medium', question: 'Break 14 into two factors and use them to calculate: 6 × 14', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: '14 = 7 × 2, so 6 × 14 = 6 × 7 × 2 = 42 × 2 = 84 ✓' },
        { difficulty: 'Medium', question: 'Break 15 into two factors and use them to calculate: 8 × 15', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: '15 = 5 × 3, so 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120 ✓' },
        { difficulty: 'Hard', question: 'Break 16 into two factors and use them to calculate: 7 × 16', answer: '112', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112'], explanation: '16 = 8 × 2, so 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112 ✓' },
        { difficulty: 'Hard', question: 'Break 14 into two factors and use them to calculate: 9 × 14', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '14 = 7 × 2, so 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126 ✓' },
        { difficulty: 'Easy', question: 'Estimate 29 × 3 by rounding 29 to the nearest 10 first. Write only the estimate.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: '29 rounds up to 30. Estimate: 30 × 3 = 90 ✓' },
        { difficulty: 'Easy', question: 'What is the exact answer to 29 × 3?', answer: '87', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87'], explanation: 'Units: 9 × 3 = 27. Write 7, carry 2.\nTens: 2 × 3 = 6, plus carried 2 = 8.\nAnswer: 87 (close to the estimate of 90) ✓' },
        { difficulty: 'Medium', question: 'Estimate 48 × 6 by rounding 48 to the nearest 10 first. Write only the estimate.', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300'], explanation: '48 rounds up to 50. Estimate: 50 × 6 = 300 ✓' },
        { difficulty: 'Medium', question: 'What is the exact answer to 48 × 6?', answer: '288', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288'], explanation: 'Units: 8 × 6 = 48. Write 8, carry 4.\nTens: 4 × 6 = 24, plus carried 4 = 28.\nAnswer: 288 (close to the estimate of 300) ✓' },
        { difficulty: 'Medium', question: 'Estimate 75 × 8 by rounding 75 to the nearest 10 first. Write only the estimate.', answer: '640', checkMode: 'auto', correctAnswer: '640', correctAnswers: ['640'], explanation: '75 rounds up to 80. Estimate: 80 × 8 = 640 ✓' },
        { difficulty: 'Medium', question: 'What is the exact answer to 75 × 8?', answer: '600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600'], explanation: 'Units: 5 × 8 = 40. Write 0, carry 4.\nTens: 7 × 8 = 56, plus carried 4 = 60.\nAnswer: 600 (close to the estimate of 640) ✓' },
        { difficulty: 'Hard', question: 'Estimate 53 × 7 by rounding 53 to the nearest 10 first, then calculate the exact answer. Write only the exact answer.', answer: '371', checkMode: 'auto', correctAnswer: '371', correctAnswers: ['371'], explanation: 'Estimate: 53 rounds to 50, so 50 × 7 = 350.\nExact: Units 3 × 7 = 21, write 1 carry 2. Tens 5 × 7 = 35, plus carried 2 = 37.\nExact answer: 371 (close to the estimate of 350) ✓' },
        { difficulty: 'Hard', question: 'Estimate 86 × 5 by rounding 86 to the nearest 10 first, then calculate the exact answer. Write only the exact answer.', answer: '430', checkMode: 'auto', correctAnswer: '430', correctAnswers: ['430'], explanation: 'Estimate: 86 rounds to 90, so 90 × 5 = 450.\nExact: Units 6 × 5 = 30, write 0 carry 3. Tens 8 × 5 = 40, plus carried 3 = 43.\nExact answer: 430 (close to the estimate of 450) ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered 2-digit multiplication, factors and estimation.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the column method and factor worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Real-World Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'A classroom has 6 rows of desks with 7 desks in each row. How many desks are there altogether?', answer: '42 desks', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 desks'], explanation: '6 × 7 = 42 desks ✓' },
        { difficulty: 'Easy', question: 'A bag has 5 apples. There are 8 bags. How many apples are there altogether?', answer: '40 apples', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 apples'], explanation: '8 × 5 = 40 apples ✓' },
        { difficulty: 'Easy', question: 'A box has 6 pencils. There are 9 boxes. How many pencils are there altogether?', answer: '54 pencils', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 pencils'], explanation: '9 × 6 = 54 pencils ✓' },
        { difficulty: 'Easy', question: 'A shelf holds 8 books. There are 7 shelves. How many books are there altogether?', answer: '56 books', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 books'], explanation: '7 × 8 = 56 books ✓' },
        { difficulty: 'Medium', question: 'A pack has 12 eggs. There are 4 packs. How many eggs are there altogether?', answer: '48 eggs', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 eggs'], explanation: '4 × 12 = 48 eggs ✓' },
        { difficulty: 'Medium', question: 'A team has 11 players. There are 5 teams. How many players are there altogether?', answer: '55 players', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 players'], explanation: '5 × 11 = 55 players ✓' },
        { difficulty: 'Medium', question: 'A bus carries 45 learners. There are 3 buses. How many learners are there altogether?', answer: '135 learners', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 learners'], explanation: '3 × 45 = 135 learners ✓' },
        { difficulty: 'Medium', question: 'A box holds 24 oranges. There are 6 boxes. How many oranges are there altogether?', answer: '144 oranges', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 oranges'], explanation: '6 × 24 = 144 oranges ✓' },
        { difficulty: 'Medium', question: 'A crate holds 15 bottles. There are 9 crates. How many bottles are there altogether?', answer: '135 bottles', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 bottles'], explanation: '9 × 15 = 135 bottles ✓' },
        { difficulty: 'Medium', question: 'A packet has 18 sweets. There are 7 packets. How many sweets are there altogether?', answer: '126 sweets', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126 sweets'], explanation: '7 × 18 = 126 sweets ✓' },
        { difficulty: 'Easy', question: 'A table seats 6 chairs. There are 12 tables. How many chairs are there altogether?', answer: '72 chairs', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 chairs'], explanation: '12 × 6 = 72 chairs ✓' },
        { difficulty: 'Medium', question: 'A class has 27 learners. There are 8 classes. How many learners are there altogether?', answer: '216 learners', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 learners'], explanation: '8 × 27 = 216 learners ✓' },
        { difficulty: 'Medium', question: '5 farmers each own 34 sheep. How many sheep do they own altogether?', answer: '170 sheep', checkMode: 'auto', correctAnswer: '170', correctAnswers: ['170', '170 sheep'], explanation: '5 × 34 = 170 sheep ✓' },
        { difficulty: 'Hard', question: 'A truck carries 48 boxes. There are 6 trucks. How many boxes are there altogether?', answer: '288 boxes', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288', '288 boxes'], explanation: '6 × 48 = 288 boxes ✓' },
        { difficulty: 'Medium', question: 'A row has 16 seats. There are 9 rows. How many seats are there altogether?', answer: '144 seats', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 seats'], explanation: '9 × 16 = 144 seats ✓' },
        { difficulty: 'Medium', question: 'A shelf holds 23 cans. There are 4 shelves. How many cans are there altogether?', answer: '92 cans', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92 cans'], explanation: '4 × 23 = 92 cans ✓' },
        { difficulty: 'Medium', question: 'A basket holds 19 mangoes. There are 7 baskets. How many mangoes are there altogether?', answer: '133 mangoes', checkMode: 'auto', correctAnswer: '133', correctAnswers: ['133', '133 mangoes'], explanation: '7 × 19 = 133 mangoes ✓' },
        { difficulty: 'Hard', question: 'A water tank holds 65 litres. There are 3 tanks. How many litres of water are there altogether?', answer: '195 litres', checkMode: 'auto', correctAnswer: '195', correctAnswers: ['195', '195 litres'], explanation: '3 × 65 = 195 litres ✓' },
        { difficulty: 'Medium', question: 'A packet has 14 biscuits. There are 8 packets. How many biscuits are there altogether?', answer: '112 biscuits', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112', '112 biscuits'], explanation: '8 × 14 = 112 biscuits ✓' },
        { difficulty: 'Hard', question: 'A delivery van carries 36 parcels. There are 6 vans. How many parcels are there altogether?', answer: '216 parcels', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 parcels'], explanation: '6 × 36 = 216 parcels ✓' },
        { difficulty: 'Medium', question: 'A bundle has 8 sticks. There are 9 bundles. How many sticks are there altogether?', answer: '72 sticks', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 sticks'], explanation: '9 × 8 = 72 sticks ✓' },
        { difficulty: 'Hard', question: 'A box holds 42 tiles. There are 5 boxes. How many tiles are there altogether?', answer: '210 tiles', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210 tiles'], explanation: '5 × 42 = 210 tiles ✓' },
        { difficulty: 'Easy', question: 'A farmer plants 9 trees in each row. There are 4 rows. How many trees does the farmer plant altogether?', answer: '36 trees', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 trees'], explanation: '4 × 9 = 36 trees ✓' },
        { difficulty: 'Easy', question: 'Each of 7 friends has 6 marbles. How many marbles do they have altogether?', answer: '42 marbles', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 marbles'], explanation: '7 × 6 = 42 marbles ✓' },
        { difficulty: 'Medium', question: 'A pack has 13 stickers. There are 9 packs. How many stickers are there altogether?', answer: '117 stickers', checkMode: 'auto', correctAnswer: '117', correctAnswers: ['117', '117 stickers'], explanation: '9 × 13 = 117 stickers ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently apply multiplication to real-world problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'A shop has 4 boxes of pens with 8 pens in each box. Each pen costs R3. What is the total cost of all the pens?', answer: 'R96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', 'R96'], explanation: 'Step 1: 4 × 8 = 32 pens.\nStep 2: 32 × 3 = R96 ✓' },
        { difficulty: 'Medium', question: 'A shop has 6 packs of chocolates with 9 chocolates in each pack. Each chocolate costs R2. What is the total cost of all the chocolates?', answer: 'R108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', 'R108'], explanation: 'Step 1: 6 × 9 = 54 chocolates.\nStep 2: 54 × 2 = R108 ✓' },
        { difficulty: 'Medium', question: 'A library has 3 shelves with 12 books each and 2 shelves with 15 books each. How many books are there in total?', answer: '66 books', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66', '66 books'], explanation: 'Step 1: 3 × 12 = 36 books.\nStep 2: 2 × 15 = 30 books.\nStep 3: 36 + 30 = 66 books ✓' },
        { difficulty: 'Medium', question: 'A school has 5 classes with 24 learners each and 3 classes with 18 learners each. How many learners are there in total?', answer: '174 learners', checkMode: 'auto', correctAnswer: '174', correctAnswers: ['174', '174 learners'], explanation: 'Step 1: 5 × 24 = 120 learners.\nStep 2: 3 × 18 = 54 learners.\nStep 3: 120 + 54 = 174 learners ✓' },
        { difficulty: 'Hard', question: 'A farmer has 7 rows of trees with 16 trees in each row. A storm destroys 3 whole rows. How many trees are left standing?', answer: '64 trees', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 trees'], explanation: 'Step 1: Total trees = 7 × 16 = 112.\nStep 2: Trees destroyed = 3 × 16 = 48.\nStep 3: Trees left = 112 − 48 = 64 trees ✓' },
        { difficulty: 'Medium', question: 'Estimate 68 × 7 by rounding 68 to the nearest 10, then calculate the exact answer. Write only the exact answer.', answer: '476', checkMode: 'auto', correctAnswer: '476', correctAnswers: ['476'], explanation: 'Estimate: 68 rounds to 70, so 70 × 7 = 490.\nExact: Units 8 × 7 = 56, write 6 carry 5. Tens 6 × 7 = 42, plus carried 5 = 47.\nExact answer: 476 (close to the estimate of 490) ✓' },
        { difficulty: 'Medium', question: 'A shop orders 9 boxes with 34 apples in each box, estimating first by rounding 34 to the nearest 10. What is the exact total number of apples?', answer: '306 apples', checkMode: 'auto', correctAnswer: '306', correctAnswers: ['306', '306 apples'], explanation: 'Estimate: 34 rounds to 30, so 9 × 30 = 270.\nExact: 9 × 34 = 306 apples (close to the estimate of 270) ✓' },
        { difficulty: 'Medium', question: 'A shop buys 4 boxes of shoes. Each box costs R125. What is the total cost?', answer: 'R500', checkMode: 'auto', correctAnswer: '500', correctAnswers: ['500', 'R500'], explanation: '4 × 125 = 500. Think: 4 × 100 = 400, 4 × 25 = 100, 400 + 100 = R500 ✓' },
        { difficulty: 'Easy', question: 'A vegetable garden is planted in 12 rows, with 12 plants in each row. How many plants are there in total?', answer: '144 plants', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 plants'], explanation: '12 × 12 = 144 plants ✓' },
        { difficulty: 'Medium', question: 'A farmer has 8 rows of 9 maize plants and adds 4 more rows of 9 maize plants. How many maize plants are there in total?', answer: '108 plants', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108 plants'], explanation: 'Total rows = 8 + 4 = 12 rows.\n12 × 9 = 108 plants ✓' },
        { difficulty: 'Hard', question: 'A vendor has 6 baskets of 15 mangoes each. 2 mangoes in each basket go bad and are thrown away. How many good mangoes are left in total?', answer: '78 mangoes', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 mangoes'], explanation: 'Step 1: Good mangoes per basket = 15 − 2 = 13.\nStep 2: 6 × 13 = 78 mangoes ✓' },
        { difficulty: 'Medium', question: 'Estimate 45 × 6 by rounding 45 to the nearest 10, then calculate the exact answer. Write only the exact answer.', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Estimate: 45 rounds to 50, so 50 × 6 = 300.\nExact: Units 5 × 6 = 30, write 0 carry 3. Tens 4 × 6 = 24, plus carried 3 = 27.\nExact answer: 270 (close to the estimate of 300) ✓' },
        { difficulty: 'Hard', question: 'A company has 5 delivery vans that each carry 40 boxes, and adds 2 more vans that also carry 40 boxes each. How many boxes can all the vans carry in total?', answer: '280 boxes', checkMode: 'auto', correctAnswer: '280', correctAnswers: ['280', '280 boxes'], explanation: 'Total vans = 5 + 2 = 7 vans.\n7 × 40 = 280 boxes ✓' },
        { difficulty: 'Medium', question: 'Calculate 96 × 5 using any method you like. Write only the final answer.', answer: '480', checkMode: 'auto', correctAnswer: '480', correctAnswers: ['480'], explanation: '96 × 5 = 480. Think: 100 × 5 = 500, then subtract 4 × 5 = 20: 500 − 20 = 480 ✓' },
        { difficulty: 'Hard', question: 'Break 16 into factors 8 × 2 to calculate 8 × 16. Write only the final answer.', answer: '128', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128'], explanation: '8 × 16 = 8 × 8 × 2 = 64 × 2 = 128 ✓' },
        { difficulty: 'Medium', question: 'A factory produces 250 toys per day. How many toys does it produce in 4 days?', answer: '1000 toys', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '1 000', '1000 toys', '1 000 toys'], explanation: '250 × 4 = 1 000 toys ✓' },
        { difficulty: 'Hard', question: 'Sipho says 6 × 23 = 148. Use a correct method to check whether he is right. Show all your working.', answer: 'Sipho is incorrect. 6 × 23 = 138, not 148. (Units: 3 × 6 = 18, write 8 carry 1. Tens: 2 × 6 = 12, plus carried 1 = 13, giving 138.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says 9 × 36 = 314. Use a correct method to check whether he is right. Show all your working.', answer: 'Thabo is incorrect. 9 × 36 = 324, not 314. (Units: 6 × 9 = 54, write 4 carry 5. Tens: 3 × 9 = 27, plus carried 5 = 32, giving 324.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says 7 × 18 = 133. Use a correct method to check whether she is right. Show all your working.', answer: 'Lerato is incorrect. 7 × 18 = 126, not 133. (Units: 8 × 7 = 56, write 6 carry 5. Tens: 1 × 7 = 7, plus carried 5 = 12, giving 126.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle says 12 × 11 = 142. Use a correct method to check whether she is right. Show all your working.', answer: 'Amahle is incorrect. 12 × 11 = 132, not 142. (Think: 12 × 10 = 120, plus 12 × 1 = 12, giving 120 + 12 = 132.)', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain, in your own words, why 6 × 8 gives the same answer as 8 × 6.', answer: 'Multiplication can be done in any order — this is called the commutative property. 6 groups of 8 and 8 groups of 6 both contain the exact same total number of items (48), just arranged differently, so the answer is always the same no matter which order you multiply in.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain, in your own words, why estimating before you calculate helps you check your answer.', answer: 'Rounding the numbers first gives a quick approximate answer. After working out the exact answer, comparing it to the estimate shows whether the exact answer is reasonable. If the exact answer is very far from the estimate, it is a sign that a mistake was probably made somewhere in the calculation.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A school has 4 classes of 28 learners and 2 classes of 19 learners. How many learners are there in total?', answer: '150 learners', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 learners'], explanation: 'Step 1: 4 × 28 = 112 learners.\nStep 2: 2 × 19 = 38 learners.\nStep 3: 112 + 38 = 150 learners ✓' },
        { difficulty: 'Hard', question: 'A stationery shop buys 9 boxes of pens, each with 12 pens, at a cost of R4 per pen. What is the total cost?', answer: 'R432', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', 'R432'], explanation: 'Step 1: 9 × 12 = 108 pens.\nStep 2: 108 × 4 = R432 ✓' },
        { difficulty: 'Hard', question: '3 farmers each start with 45 chickens. Each farmer sells 15 chickens. How many chickens do all 3 farmers have left altogether?', answer: '90 chickens', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90 chickens'], explanation: 'Step 1: Chickens left per farmer = 45 − 15 = 30.\nStep 2: 3 × 30 = 90 chickens ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined multiplication problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
