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
      videoPlaceholder: 'Short video showing how to estimate before multiplying and check if the answer is reasonable',
    },
  ],

  topicPractice: [

    // ── SECTION 1 — What is Multiplication? ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Write the following as a multiplication sentence:\n\n' +
        '7 + 7 + 7 + 7 + 7\n\n' +
        'Type your answer using × or x (for example: 3 × 5)',
      // Accept either order — multiplication is commutative
      correctAnswer: '5x7',
      correctAnswers: ['5x7', '7x5'],
      explanation:
        '7 + 7 + 7 + 7 + 7 has 5 groups of 7.\n' +
        'As a multiplication: 5 × 7 (or 7 × 5 — both are correct).\n' +
        'The product is 5 × 7 = 35.',
      answer: '5 × 7 (or 7 × 5)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A bag has 6 apples. There are 8 bags.\n\n' +
        'Part A: Write this as a multiplication sentence (use × or x).\n' +
        'Part B: Calculate the answer.',
      answer: 'Part A: 8 × 6 (or 6 × 8)  Part B: 48',
      parts: [
        {
          label: 'Part A — Write the multiplication',
          correctAnswer: '8x6',
          correctAnswers: ['8x6', '6x8'],
          explanation:
            '8 bags with 6 apples each: 8 × 6.\n' +
            '(6 × 8 is also correct — multiplication works in either order.)',
        },
        {
          label: 'Part B — Calculate the answer',
          correctAnswer: '48',
          explanation:
            '8 × 6 = 48.\n' +
            'Check: 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 48.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A teacher has 9 boxes of coloured pencils. Each box has 8 pencils.\n' +
        'She needs 75 pencils for her class.\n\n' +
        'Does she have enough? Show your working.',
      explanation:
        'Step 1: Find the total number of pencils.\n' +
        '9 × 8 = 72 pencils\n\n' +
        'Step 2: Compare 72 with 75.\n' +
        '72 < 75 — she does NOT have enough.\n\n' +
        'She is 3 pencils short (75 − 72 = 3).',
      answer: 'No, the teacher does not have enough. She is 3 pencils short (72 pencils vs 75 needed).',
    },

    // ── SECTION 2 — Multiplication Tables ───────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Use your times tables to answer each part. Write only the number.\n\n' +
        'a) 4 × 7\n' +
        'b) 5 × 9\n' +
        'c) 3 × 8',
      answer: 'a) 28  b) 45  c) 24',
      parts: [
        {
          label: 'a) 4 × 7',
          correctAnswer: '28',
          explanation:
            '4 × 7 = 28.\n' +
            'Count in 4s for 7 steps: 4, 8, 12, 16, 20, 24, 28.',
        },
        {
          label: 'b) 5 × 9',
          correctAnswer: '45',
          explanation:
            '5 × 9 = 45.\n' +
            'Count in 5s for 9 steps: 5, 10, 15, 20, 25, 30, 35, 40, 45.',
        },
        {
          label: 'c) 3 × 8',
          correctAnswer: '24',
          explanation:
            '3 × 8 = 24.\n' +
            'Count in 3s for 8 steps: 3, 6, 9, 12, 15, 18, 21, 24.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Fill in the missing number in each multiplication. Write only the missing number.\n\n' +
        'a) 6 × ___ = 30\n' +
        'b) ___ × 4 = 32\n' +
        'c) 7 × ___ = 49',
      answer: 'a) 5  b) 8  c) 7',
      parts: [
        {
          label: 'a) 6 × ___ = 30',
          correctAnswer: '5',
          explanation:
            '6 × 5 = 30.\n' +
            'Think: count in 6s until you reach 30 — 6, 12, 18, 24, 30. That is 5 steps.',
        },
        {
          label: 'b) ___ × 4 = 32',
          correctAnswer: '8',
          explanation:
            '8 × 4 = 32.\n' +
            'Think: count in 4s until you reach 32 — 4, 8, 12, 16, 20, 24, 28, 32. That is 8 steps.',
        },
        {
          label: 'c) 7 × ___ = 49',
          correctAnswer: '7',
          explanation:
            '7 × 7 = 49.\n' +
            'Think: count in 7s until you reach 49 — 7, 14, 21, 28, 35, 42, 49. That is 7 steps.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A shop sells chocolate bars in packs of 4.\n' +
        'There are 9 packs on the shelf and 3 packs behind the counter.\n\n' +
        'How many chocolate bars are there in total? Show all working.\n' +
        'Write only the final number.',
      // Step 1: 9 + 3 = 12 packs total
      // Step 2: 12 × 4 = 48 chocolate bars
      correctAnswer: '48',
      explanation:
        'Step 1: Find the total number of packs.\n' +
        '9 + 3 = 12 packs\n\n' +
        'Step 2: Multiply by 4 (bars per pack).\n' +
        '12 × 4 = 48 chocolate bars',
      answer: '48 chocolate bars',
    },

    // ── SECTION 3 — Multiplying a 2-Digit Number by a 1-Digit Number ─────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate using the column method and show your working:\n\n' +
        '23 × 3\n\n' +
        'Write only the final answer.',
      // 23 × 3: units 3×3=9, tens 2×3=6 → 69 (no carrying)
      correctAnswer: '69',
      explanation:
        'Column multiplication:\n' +
        '• Units: 3 × 3 = 9. Write 9.\n' +
        '• Tens: 2 × 3 = 6. Write 6.\n\n' +
        'Answer: 69',
      answer: '69',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate using the column method. Show your carrying where needed:\n\n' +
        '67 × 4\n\n' +
        'Write only the final answer.',
      // 67 × 4: units 7×4=28 write 8 carry 2, tens 6×4=24+2=26 → 268
      correctAnswer: '268',
      explanation:
        'Column multiplication:\n' +
        '• Units: 7 × 4 = 28. Write 8, carry 2.\n' +
        '• Tens: 6 × 4 = 24, plus carried 2 = 26. Write 6 in tens, 2 in hundreds.\n\n' +
        'Answer: 268',
      answer: '268',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A school has 8 classrooms. Each classroom has 32 desks.\n\n' +
        'How many desks are there in total?\n' +
        'Show full column multiplication with carrying where needed.',
      explanation:
        'Step 1: Write 32 × 8 in column format.\n\n' +
        '• Units: 2 × 8 = 16. Write 6, carry 1.\n' +
        '• Tens: 3 × 8 = 24, plus carried 1 = 25. Write 5 in tens, 2 in hundreds.\n\n' +
        'Answer: 256 desks',
      answer: '256 desks',
    },

    // ── SECTION 4 — Multiplying Using Factors ────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Break 12 into two factors and use them to calculate:\n\n' +
        '3 × 12\n\n' +
        'Any valid factor pair for 12 is accepted. Write only the final answer.',
      // 12 = 6×2 → 3×6×2=18×2=36, or 12=4×3 → 3×4×3=12×3=36
      correctAnswer: '36',
      explanation:
        'You can break 12 into factors in different ways — all give the same answer:\n\n' +
        '• 12 = 6 × 2: so 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36\n' +
        '• 12 = 4 × 3: so 3 × 12 = 3 × 4 × 3 = 12 × 3 = 36\n\n' +
        'Answer: 36',
      answer: '36',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Use factors to calculate each part. Write only the final number.\n\n' +
        'a) 5 × 16\n' +
        'b) 4 × 18',
      answer: 'a) 80  b) 72',
      parts: [
        {
          label: 'a) 5 × 16',
          // 16 = 8 × 2: 5 × 8 × 2 = 40 × 2 = 80
          correctAnswer: '80',
          explanation:
            'Break 16 into factors: 16 = 8 × 2\n' +
            '5 × 16 = 5 × 8 × 2\n' +
            '5 × 8 = 40\n' +
            '40 × 2 = 80',
        },
        {
          label: 'b) 4 × 18',
          // 18 = 9 × 2: 4 × 9 × 2 = 36 × 2 = 72
          correctAnswer: '72',
          explanation:
            'Break 18 into factors: 18 = 9 × 2\n' +
            '4 × 18 = 4 × 9 × 2\n' +
            '4 × 9 = 36\n' +
            '36 × 2 = 72',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sipho says 6 × 24 = 134.\n\n' +
        'Use factors to check whether he is correct. Show all your working.',
      explanation:
        'Step 1: Break 24 into factors: 24 = 6 × 4\n\n' +
        'Step 2: Replace 24 with its factors:\n' +
        '6 × 24 = 6 × 6 × 4\n' +
        '6 × 6 = 36\n' +
        '36 × 4 = 144\n\n' +
        'Sipho is INCORRECT. The correct answer is 144, not 134.\n' +
        '(He was 10 out — he may have made an error in his column multiplication.)',
      answer: 'Sipho is incorrect. The correct answer is 144 (not 134).',
    },

    // ── SECTION 5 — Estimating and Solving Multiplication Problems ───────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Estimate the answer to 29 × 3 by rounding to the nearest 10 first.\n\n' +
        'a) What is your estimate? Write only the number.\n' +
        'b) What is the exact answer? Write only the number.',
      answer: 'a) 90  b) 87',
      parts: [
        {
          label: 'a) Estimate',
          // Round 29 → 30, then 30 × 3 = 90
          correctAnswer: '90',
          explanation:
            'Round 29 to the nearest 10: 29 rounds up to 30.\n' +
            'Estimate: 30 × 3 = 90.',
        },
        {
          label: 'b) Exact answer',
          // 29 × 3: units 9×3=27 write 7 carry 2, tens 2×3=6+2=8 → 87
          correctAnswer: '87',
          explanation:
            '29 × 3 using the column method:\n' +
            '• Units: 9 × 3 = 27. Write 7, carry 2.\n' +
            '• Tens: 2 × 3 = 6, plus carried 2 = 8.\n\n' +
            'Exact answer: 87 — close to the estimate of 90. ✓',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Estimate first then calculate exactly: 48 × 6\n\n' +
        'a) Estimate by rounding 48 to the nearest 10. Write only the number.\n' +
        'b) Calculate the exact answer using the column method. Write only the number.\n' +
        'c) Is your exact answer close to your estimate? Type yes or no.',
      answer: 'a) 300  b) 288  c) yes',
      parts: [
        {
          label: 'a) Estimate',
          // Round 48 → 50, then 50 × 6 = 300
          correctAnswer: '300',
          explanation:
            'Round 48 to the nearest 10: 48 rounds up to 50.\n' +
            'Estimate: 50 × 6 = 300.',
        },
        {
          label: 'b) Exact answer',
          // 48 × 6: units 8×6=48 write 8 carry 4, tens 4×6=24+4=28 → 288
          correctAnswer: '288',
          explanation:
            '48 × 6 using the column method:\n' +
            '• Units: 8 × 6 = 48. Write 8, carry 4.\n' +
            '• Tens: 4 × 6 = 24, plus carried 4 = 28. Write 8 in tens, 2 in hundreds.\n\n' +
            'Exact answer: 288.',
        },
        {
          label: 'c) Close to estimate?',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'yesitis', 'yes288iscloseto300'],
          explanation:
            '288 is only 12 away from the estimate of 300 — that is very close.\n' +
            'The answer is reasonable. ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A factory packs 75 bottles into each crate. They have 8 crates.\n\n' +
        'a) Estimate the total number of bottles by rounding 75 to the nearest 10. Write only the number.\n' +
        'b) Calculate the exact total number of bottles. Write only the number.\n' +
        'c) The factory needs 650 bottles for an order. Type yes or no — do they have enough?',
      answer: 'a) 640  b) 600  c) no',
      parts: [
        {
          label: 'a) Estimate',
          // Round 75 → 80, then 80 × 8 = 640
          correctAnswer: '640',
          explanation:
            'Round 75 to the nearest 10: 75 rounds up to 80.\n' +
            'Estimate: 80 × 8 = 640.',
        },
        {
          label: 'b) Exact answer',
          // 75 × 8: units 5×8=40 write 0 carry 4, tens 7×8=56+4=60 → 600
          correctAnswer: '600',
          explanation:
            '75 × 8 using the column method:\n' +
            '• Units: 5 × 8 = 40. Write 0, carry 4.\n' +
            '• Tens: 7 × 8 = 56, plus carried 4 = 60. Write 0 in tens, 6 in hundreds.\n\n' +
            'Exact answer: 600.',
        },
        {
          label: 'c) Do they have enough?',
          correctAnswer: 'no',
          correctAnswers: ['no', 'notheydonot', 'notheydonothaveenough'],
          explanation:
            '600 < 650 — the factory does NOT have enough bottles.\n' +
            'They are 50 bottles short (650 − 600 = 50).',
        },
      ],
    },

  ],
}
