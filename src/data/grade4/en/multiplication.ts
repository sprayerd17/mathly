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
    // SET 1 (20 Qs) — 6 skill blocks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 4 × 6', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: '4 × 6 = 24. Count in 6s for 4 steps: 6, 12, 18, 24 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 7 × 8', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: '7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 9 × 9', answer: '81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81'], explanation: '9 × 9 = 81 ✓' },
        { difficulty: 'Easy', question: 'Fill in the missing number: 9 × ___ = 63', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Count in 9s until you reach 63: 9, 18, 27, 36, 45, 54, 63 — that is 7 steps, so 9 × 7 = 63 ✓' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 34 × 2', answer: '68', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68'], explanation: 'Units: 4 × 2 = 8. Tens: 3 × 2 = 6.\nAnswer: 68 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 47 × 3', answer: '141', checkMode: 'auto', correctAnswer: '141', correctAnswers: ['141'], explanation: 'Units: 7 × 3 = 21. Write 1, carry 2.\nTens: 4 × 3 = 12, plus carried 2 = 14. Write 4 in tens, 1 in hundreds.\nAnswer: 141 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 64 × 9', answer: '576', checkMode: 'auto', correctAnswer: '576', correctAnswers: ['576'], explanation: 'Units: 4 × 9 = 36. Write 6, carry 3.\nTens: 6 × 9 = 54, plus carried 3 = 57. Write 7 in tens, 5 in hundreds.\nAnswer: 576 ✓' },
        { difficulty: 'Medium', question: 'A learner is calculating 53 × 4 using the column method but was interrupted partway through. Their working shows: units column 3 × 4 = 12, wrote down 2 and carried 1 — but the tens row is blank. What number should go in the tens column, and what is the final answer?', answer: 'Tens: 5 × 4 = 20, plus carried 1 = 21. Final answer: 212', checkMode: 'self' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 48 × 6 by rounding 48 to the nearest 10 first, then give the exact answer.', answer: 'Estimate: 300 (50 × 6). Exact: 288', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288', '300 288', 'Estimate 300 Exact 288'], explanation: '48 rounds up to 50, so the estimate is 50 × 6 = 300. Exact: units 8 × 6 = 48, write 8 carry 4; tens 4 × 6 = 24, plus carried 4 = 28. Exact answer: 288, which is close to the estimate of 300 ✓' },
        { difficulty: 'Medium', question: 'A learner estimates 62 × 5 by rounding 62 to 60, getting 300. Their exact answer comes out to 310. Is 310 a reasonable answer? Explain how you know.', answer: 'Yes, 310 is reasonable — it is very close to the estimate of 300, so it makes sense as the exact answer to 62 × 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Without multiplying either one out fully, which is greater: 6 × 14 or 9 × 9? Explain how you can tell using rounding or estimation.', answer: '6 × 14 is greater. Estimate: 6 × 14 is close to 6 × 15 = 90, while 9 × 9 = 81. So 6 × 14 (which equals 84) is greater than 9 × 9 (81).', checkMode: 'self' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 12 into two factors and use them to calculate: 3 × 12', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '12 = 6 × 2, so 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36 ✓' },
        { difficulty: 'Medium', question: 'Break 15 into two factors and use them to calculate: 8 × 15', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: '15 = 5 × 3, so 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120 ✓' },
        { difficulty: 'Medium', question: 'For the calculation 6 × 18, would you rather break 18 into factors (6 × 9 × 2) or use the column method? Choose a strategy and explain why it suits this particular product.', answer: 'Either strategy works, but breaking 18 into 9 × 2 is quick because 6 × 9 = 54 is a known fact, then doubling to 108 is easy. The column method also works well since 18 is a 2-digit number, but the factor method avoids carrying altogether here.', checkMode: 'self' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A netball team has 12 players. If 7 teams enter a tournament, how many players are competing altogether?', answer: '84 players', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 players'], explanation: '7 × 12 = 84 players ✓' },
        { difficulty: 'Medium', question: 'A minibus taxi can carry 15 passengers. How many more passengers can 6 taxis carry than 4 taxis?', answer: '30 more passengers', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 more passengers'], explanation: '6 × 15 = 90 and 4 × 15 = 60. 90 − 60 = 30 more passengers ✓' },
        { difficulty: 'Medium', question: 'Class A orders 6 boxes of 15 pencils each for the year. Class B orders 5 boxes of 18 pencils each. Which class ordered more pencils, and by how many?', answer: 'Neither — both classes ordered exactly the same number of pencils (90 each).', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'they are equal', 'neither, they are equal', 'the same'], explanation: 'Class A: 6 × 15 = 90 pencils. Class B: 5 × 18 = 90 pencils. Both classes ordered exactly the same number of pencils — 90 each ✓' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Sipho says 6 × 23 = 148. Use a correct method to check whether he is right. Show all your working.', answer: 'Sipho is incorrect. 6 × 23 = 138, not 148. (Units: 3 × 6 = 18, write 8 carry 1. Tens: 2 × 6 = 12, plus carried 1 = 13, giving 138.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A farmer has 8 rows of 14 cabbages. A hailstorm ruins 2 whole rows. How many cabbages are left standing?', answer: '84 cabbages', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 cabbages'], explanation: 'Step 1: Total cabbages = 8 × 14 = 112.\nStep 2: Cabbages ruined = 2 × 14 = 28.\nStep 3: Cabbages left = 112 − 28 = 84 cabbages ✓' },
        { difficulty: 'Hard', question: 'Explain, in your own words, why 6 × 8 gives the same answer as 8 × 6.', answer: 'Multiplication can be done in any order — this is called the commutative property. 6 groups of 8 and 8 groups of 6 both contain the exact same total number of items (48), just arranged differently, so the answer is always the same no matter which order you multiply in.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, word problems and reasoning.' },
        { minScore: 15, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — 6 skill blocks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 5 × 9', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: '5 × 9 = 45. Count in 5s for 9 steps: 5, 10, 15, 20, 25, 30, 35, 40, 45 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 6 × 7', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42'], explanation: '6 × 7 = 42 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 12 × 8', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: '12 × 8 = 96. Think: 10 × 8 + 2 × 8 = 80 + 16 = 96 ✓' },
        { difficulty: 'Easy', question: 'Fill in the missing number: ___ × 7 = 56', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 × 7 = 56, so the missing number is 8 ✓' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 42 × 2', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Units: 2 × 2 = 4. Tens: 4 × 2 = 8.\nAnswer: 84 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 56 × 4', answer: '224', checkMode: 'auto', correctAnswer: '224', correctAnswers: ['224'], explanation: 'Units: 6 × 4 = 24. Write 4, carry 2.\nTens: 5 × 4 = 20, plus carried 2 = 22. Write 2 in tens, 2 in hundreds.\nAnswer: 224 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 32 × 8', answer: '256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256'], explanation: 'Units: 2 × 8 = 16. Write 6, carry 1.\nTens: 3 × 8 = 24, plus carried 1 = 25. Write 5 in tens, 2 in hundreds.\nAnswer: 256 ✓' },
        { difficulty: 'Medium', question: 'A learner is calculating 76 × 3 using the column method but was interrupted partway through. Their working shows: units column 6 × 3 = 18, wrote down 8 and carried 1 — but the tens row is blank. What number should go in the tens column, and what is the final answer?', answer: 'Tens: 7 × 3 = 21, plus carried 1 = 22. Final answer: 228', checkMode: 'self' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 75 × 8 by rounding 75 to the nearest 10 first, then give the exact answer.', answer: 'Estimate: 640 (80 × 8). Exact: 600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '640 600', 'Estimate 640 Exact 600'], explanation: '75 rounds up to 80, so the estimate is 80 × 8 = 640. Exact: units 5 × 8 = 40, write 0 carry 4; tens 7 × 8 = 56, plus carried 4 = 60. Exact answer: 600, which is close to the estimate of 640 ✓' },
        { difficulty: 'Medium', question: 'Two learners estimate 39 × 7. Bongani rounds 39 to 40 and gets 280. Zanele rounds 39 to 35 (not the nearest 10) and gets 245. Whose estimate is closer to the true rounding rule, and why?', answer: "Bongani's estimate is correct — 39 rounds to the nearest 10, which is 40, not 35. Zanele did not round to the nearest 10 correctly, so her estimate of 245 is not a valid estimate for this method.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Without multiplying either one out fully, which is greater: 7 × 13 or 8 × 11? Explain how you can tell using rounding or estimation.', answer: '7 × 13 is greater. Rounding 13 down slightly and 11 up slightly both land near 12, so compare the leading factors instead: 7 is close to 8, but 13 is quite a bit bigger than 11, so the product with 13 (91) beats the product with 11 (88).', checkMode: 'self' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 16 into two factors and use them to calculate: 5 × 16', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80'], explanation: '16 = 8 × 2, so 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80 ✓' },
        { difficulty: 'Medium', question: 'Break 14 into two factors and use them to calculate: 9 × 14', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '14 = 7 × 2, so 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126 ✓' },
        { difficulty: 'Medium', question: 'For the calculation 4 × 25, would you rather break 25 into factors (4 × 5 × 5) or use the column method? Choose a strategy and explain why it suits this particular product.', answer: 'Breaking 25 into 5 × 5 is much faster here, because 4 × 5 = 20 is an easy known fact, and 20 × 5 = 100. The column method would still work but involves more writing and carrying for no extra benefit.', checkMode: 'self' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A spaza shop stocks cooldrink in crates of 24 cans. If the owner has 5 crates, how many cans of cooldrink does the shop have in total?', answer: '120 cans', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120 cans'], explanation: '5 × 24 = 120 cans ✓' },
        { difficulty: 'Medium', question: 'A goat farmer has 9 pens with 13 goats in each pen. How many fewer goats would the farmer have if 3 of the pens were empty instead?', answer: '39 fewer goats', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39 fewer goats'], explanation: '9 × 13 = 117 goats with all pens full. If 3 pens were empty, that removes 3 × 13 = 39 goats, so there would be 39 fewer goats ✓' },
        { difficulty: 'Medium', question: 'A taxi rank has 7 minibuses carrying 16 passengers each. A second rank has 8 minibuses carrying 14 passengers each. Which rank is transporting more passengers, and by how many?', answer: 'Neither — both ranks transport exactly the same number of passengers (112 each).', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'they are equal', 'neither, they are equal', 'the same'], explanation: 'First rank: 7 × 16 = 112 passengers. Second rank: 8 × 14 = 112 passengers. Both ranks transport exactly the same number — 112 passengers each ✓' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Thabo says 9 × 36 = 314. Use a correct method to check whether he is right. Show all your working.', answer: 'Thabo is incorrect. 9 × 36 = 324, not 314. (Units: 6 × 9 = 54, write 4 carry 5. Tens: 3 × 9 = 27, plus carried 5 = 32, giving 324.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A stationery shop buys 7 boxes of pens, each with 12 pens, at a cost of R4 per pen. What is the total cost?', answer: 'R336', checkMode: 'auto', correctAnswer: '336', correctAnswers: ['336', 'R336'], explanation: 'Step 1: 7 × 12 = 84 pens.\nStep 2: 84 × 4 = R336 ✓' },
        { difficulty: 'Hard', question: 'Explain, in your own words, why estimating before you calculate helps you check your answer.', answer: 'Rounding the numbers first gives a quick approximate answer. After working out the exact answer, comparing it to the estimate shows whether the exact answer is reasonable. If the exact answer is very far from the estimate, it is a sign that a mistake was probably made somewhere in the calculation.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, word problems and reasoning.' },
        { minScore: 15, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — 6 skill blocks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 8 × 8', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64'], explanation: '8 × 8 = 64 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 3 × 9', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: '3 × 9 = 27. Count in 3s for 9 steps: 3, 6, 9, 12, 15, 18, 21, 24, 27 ✓' },
        { difficulty: 'Easy', question: 'Calculate: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: '11 × 6 = 66. Think: 10 × 6 + 1 × 6 = 60 + 6 = 66 ✓' },
        { difficulty: 'Easy', question: 'Fill in the missing number: ___ × 6 = 42', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Count in 6s until you reach 42: 6, 12, 18, 24, 30, 36, 42 — that is 7 steps, so 7 × 6 = 42 ✓' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 23 × 3', answer: '69', checkMode: 'auto', correctAnswer: '69', correctAnswers: ['69'], explanation: 'Units: 3 × 3 = 9. Tens: 2 × 3 = 6.\nAnswer: 69 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 67 × 4', answer: '268', checkMode: 'auto', correctAnswer: '268', correctAnswers: ['268'], explanation: 'Units: 7 × 4 = 28. Write 8, carry 2.\nTens: 6 × 4 = 24, plus carried 2 = 26. Write 6 in tens, 2 in hundreds.\nAnswer: 268 ✓' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 45 × 6', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Units: 5 × 6 = 30. Write 0, carry 3.\nTens: 4 × 6 = 24, plus carried 3 = 27. Write 7 in tens, 2 in hundreds.\nAnswer: 270 ✓' },
        { difficulty: 'Medium', question: 'A learner is calculating 84 × 6 using the column method but was interrupted partway through. Their working shows: units column 4 × 6 = 24, wrote down 4 and carried 2 — but the tens row is blank. What number should go in the tens column, and what is the final answer?', answer: 'Tens: 8 × 6 = 48, plus carried 2 = 50. Final answer: 504', checkMode: 'self' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 53 × 7 by rounding 53 to the nearest 10 first, then give the exact answer.', answer: 'Estimate: 350 (50 × 7). Exact: 371', checkMode: 'auto', correctAnswer: '371', correctAnswers: ['371', '350 371', 'Estimate 350 Exact 371'], explanation: '53 rounds down to 50, so the estimate is 50 × 7 = 350. Exact: units 3 × 7 = 21, write 1 carry 2; tens 5 × 7 = 35, plus carried 2 = 37. Exact answer: 371, which is close to the estimate of 350 ✓' },
        { difficulty: 'Medium', question: 'A learner estimates 41 × 9 by rounding 41 to 40, getting 360. Their exact answer comes out to 369. Is 369 a reasonable answer? Explain how you know.', answer: 'Yes, 369 is reasonable — it is very close to the estimate of 360, so it makes sense as the exact answer to 41 × 9.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Without multiplying either one out fully, which is greater: 5 × 19 or 8 × 12? Explain how you can tell using rounding or estimation.', answer: '8 × 12 is greater, though the two are very close. Rounding 19 up to 20 gives an estimate of 5 × 20 = 100 for the first product, while 8 × 12 is already close to that at roughly 96 — since the estimate for 5 × 19 was rounded up, the true value (95) is even closer to 96, and 8 × 12 (96) edges it out.', checkMode: 'self' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 18 into two factors and use them to calculate: 4 × 18', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '18 = 9 × 2, so 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72 ✓' },
        { difficulty: 'Medium', question: 'Break 16 into two factors and use them to calculate: 7 × 16', answer: '112', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112'], explanation: '16 = 8 × 2, so 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112 ✓' },
        { difficulty: 'Medium', question: 'For the calculation 3 × 45, would you rather break 45 into factors (3 × 9 × 5) or use the column method? Choose a strategy and explain why it suits this particular product.', answer: 'The column method is probably easier here, because 45 does not break into two very simple small factors (9 × 5 still needs multiplying by 3 twice). Lining up 45 × 3 in columns and carrying once is quick and direct.', checkMode: 'self' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A soccer coach buys new kit for the squad: 8 boxes of socks with 12 pairs in each box. How many pairs of socks did the coach buy altogether?', answer: '96 pairs', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96 pairs'], explanation: '8 × 12 = 96 pairs of socks ✓' },
        { difficulty: 'Medium', question: 'A citrus farmer packs oranges into crates of 18. How many more oranges are packed into 9 crates than into 6 crates?', answer: '54 more oranges', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 more oranges'], explanation: '9 × 18 = 162 and 6 × 18 = 108. 162 − 108 = 54 more oranges ✓' },
        { difficulty: 'Medium', question: 'Route A buses run 6 trips a day carrying 17 passengers each. Route B buses run 7 trips a day carrying 15 passengers each. Which route carries more passengers per day, and by how many?', answer: 'Route A carries more, by 0 — check: Route A = 102, Route B = 105, so Route B actually carries more, by 3.', checkMode: 'auto', correctAnswer: 'RouteBby3', correctAnswers: ['Route B by 3', 'Route B, by 3', '3 more'], explanation: 'Route A: 6 × 17 = 102 passengers. Route B: 7 × 15 = 105 passengers. Route B carries more passengers, by 105 − 102 = 3 ✓' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Amahle says 12 × 11 = 142. Use a correct method to check whether she is right. Show all your working.', answer: 'Amahle is incorrect. 12 × 11 = 132, not 142. (Think: 12 × 10 = 120, plus 12 × 1 = 12, giving 120 + 12 = 132.)', checkMode: 'self' },
        { difficulty: 'Hard', question: '4 fishermen each start the day with 38 fish in their catch. Each fisherman sells 14 fish at the market. How many fish do all 4 fishermen have left altogether?', answer: '96 fish', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96 fish'], explanation: 'Step 1: Fish left per fisherman = 38 − 14 = 24.\nStep 2: 4 × 24 = 96 fish ✓' },
        { difficulty: 'Hard', question: 'Explain, in your own words, why breaking 15 into 5 × 3 and multiplying step by step gives exactly the same answer as multiplying by 15 directly.', answer: 'Breaking 15 into 5 × 3 does not change its value — 5 × 3 is still 15. So multiplying by 5 and then by 3 is the same total amount of multiplying as multiplying by 15 in one step, just split into two easier smaller steps. The order and grouping of the multiplication can change, but the final product stays the same.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, word problems and reasoning.' },
        { minScore: 15, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
