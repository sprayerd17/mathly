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
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to memorise the 5 times table using skip counting',
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
      openQuestions: [],
      videoPlaceholder: 'Short video showing column multiplication of a 2-digit number by a 1-digit number with carrying',
      diagramPlaceholder: 'Column multiplication layout showing 47 × 3 with carried digit shown in orange',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="90" y="20" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">2</text><text x="90" y="55" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="140" y="55" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">7</text><text x="55" y="85" font-weight="700" font-size="22" text-anchor="middle" fill="#0f1f3d">×</text><text x="140" y="85" font-weight="700" font-size="26" text-anchor="middle" fill="#0f1f3d">3</text><line x1="35" y1="95" x2="170" y2="95" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#0f1f3d">1</text><text x="90" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="140" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">1</text><text x="105" y="155" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">47 × 3 = 141</text></svg>',
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
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to estimate before multiplying and check if the answer is reasonable',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — MULTIPLYING A 2-DIGIT NUMBER BY A 2-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2digit-by-2digit',
      title: 'Multiplying a 2-Digit Number by a 2-Digit Number',
      icon: '🔲',
      explanation: `<p style="margin-bottom:16px;">To multiply two 2-digit numbers, we can use the <strong>grid method</strong> (also called partial products). Break <em>both</em> numbers into tens and units, multiply every part of the first number by every part of the second number, then add all four answers together.</p>

<p style="margin-bottom:16px;">For example, <span style="color:#1e40af;font-weight:700;">23</span> × <span style="color:#16a34a;font-weight:700;">14</span> can be broken up as (<span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>) × (<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>). Multiply each part of the first bracket by each part of the second bracket, then add the four partial products together: <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#ea580c;font-weight:700;">4</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#ea580c;font-weight:700;">4</span> = 200 + 80 + 30 + 12 = <strong>322</strong>.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Colour guide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">First number's tens — blue</span>
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">First number's units — red</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Second number's tens — green</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Second number's units — orange</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 23 × 14 using the grid method',
          answer: '322',
          steps: [
            `Break both numbers into tens and units: <span style="color:#1e40af;font-weight:700;">23</span> = <span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>, and <span style="color:#16a34a;font-weight:700;">14</span> = <span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
            `Draw a grid and multiply each part of one number by each part of the other:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">10</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">4</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">20</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">200</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">80</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">3</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">30</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">12</td>
    </tr>
  </table>
</div>`,
            `Add all four partial products together: 200 + 80 + 30 + 12 = <strong>322</strong>. So 23 × 14 = <strong>322</strong>.`,
          ],
        },
        {
          question: 'Calculate 34 × 21 using the grid method',
          answer: '714',
          steps: [
            `Break both numbers into tens and units: <span style="color:#1e40af;font-weight:700;">34</span> = <span style="color:#1e40af;font-weight:700;">30</span> + <span style="color:#dc2626;font-weight:700;">4</span>, and <span style="color:#16a34a;font-weight:700;">21</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">1</span>.`,
            `Multiply each part of one number by each part of the other:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">20</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">1</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">30</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">600</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">30</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">4</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">80</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">4</td>
    </tr>
  </table>
</div>`,
            `Add all four partial products together: 600 + 30 + 80 + 4 = <strong>714</strong>. So 34 × 21 = <strong>714</strong>.`,
          ],
        },
        {
          question:
            'A school orders 15 boxes of pencils, with 24 pencils in each box. How many pencils are there in total?',
          answer: '360 pencils',
          steps: [
            `This is a multiplication problem: <strong>15 × 24</strong>. Break both numbers into tens and units: <span style="color:#1e40af;font-weight:700;">15</span> = <span style="color:#1e40af;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">5</span>, and <span style="color:#16a34a;font-weight:700;">24</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
            `Multiply each part of one number by each part of the other:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">20</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">4</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">10</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">200</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">40</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">5</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">100</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">20</td>
    </tr>
  </table>
</div>`,
            `Add all four partial products together: 200 + 40 + 100 + 20 = <strong>360</strong>. There are <strong>360 pencils</strong> in total.`,
          ],
        },
      ],
      openQuestions: [],
      videoPlaceholder: 'Short video showing how to use the grid method to multiply a 2-digit number by a 2-digit number',
      diagramPlaceholder: 'Grid method diagram showing 23 × 14 split into four partial products that add up to 322',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="15" width="55" height="35" fill="#dcfce7"/><rect x="120" y="15" width="55" height="35" fill="#ffedd5"/><rect x="10" y="50" width="55" height="35" fill="#dbeafe"/><rect x="10" y="85" width="55" height="35" fill="#fee2e2"/><rect x="10" y="15" width="165" height="105" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="15" x2="65" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="120" y1="15" x2="120" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="10" y1="50" x2="175" y2="50" stroke="#0f1f3d" stroke-width="1.5"/><line x1="10" y1="85" x2="175" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><text x="92" y="37" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">10</text><text x="147" y="37" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">4</text><text x="37" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">20</text><text x="37" y="107" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">3</text><text x="92" y="72" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">200</text><text x="147" y="72" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">80</text><text x="92" y="107" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">30</text><text x="147" y="107" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">12</text><text x="92" y="145" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">200+80+30+12=322</text></svg>',
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (23 Qs) — 6 skill blocks — all multiple choice
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 4 × 6', checkMode: 'auto', options: ['24', '20', '28', '10'], correctIndex: 0, explanation: '4 × 6 = 24. (20 comes from 4 × 5, 28 comes from 4 × 7 — both use the wrong table entry. 10 comes from adding 4 + 6 instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate: 7 × 8', checkMode: 'auto', options: ['48', '56', '64', '49'], correctIndex: 1, explanation: '7 × 8 = 56. (48 comes from 6 × 8, 64 comes from 8 × 8, 49 comes from 7 × 7 — each swaps one factor for a neighbouring number.)' },
        { difficulty: 'Easy', question: 'Calculate: 9 × 9', checkMode: 'auto', options: ['72', '90', '81', '64'], correctIndex: 2, explanation: '9 × 9 = 81. (72 comes from 8 × 9, 90 comes from 9 × 10, 64 comes from 8 × 8 — each is one step away in the times table.)' },
        { difficulty: 'Easy', question: 'Fill in the missing number: 9 × ___ = 63', checkMode: 'auto', options: ['8', '9', '6', '7'], correctIndex: 3, explanation: 'Count in 9s until you reach 63: 9, 18, 27, 36, 45, 54, 63 — that is 7 steps, so 9 × 7 = 63. (8 and 6 are miscounts of the steps, 9 confuses the missing number with the given one.)' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 34 × 2', checkMode: 'auto', options: ['68', '38', '76', '36'], correctIndex: 0, explanation: 'Units: 4 × 2 = 8. Tens: 3 × 2 = 6. Answer: 68. (38 comes from multiplying only the units digit and leaving the tens digit unchanged. 76 comes from multiplying only the tens digit and leaving the units digit unchanged. 36 comes from adding 34 + 2 instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 47 × 3', checkMode: 'auto', options: ['121', '141', '131', '147'], correctIndex: 1, explanation: 'Units: 7 × 3 = 21. Write 1, carry 2. Tens: 4 × 3 = 12, plus carried 2 = 14. Answer: 141. (121 forgets to add the carried 2 to the tens. 131 and 147 come from small arithmetic slips in the tens calculation.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 64 × 9', checkMode: 'auto', options: ['546', '414', '576', '566'], correctIndex: 2, explanation: 'Units: 4 × 9 = 36. Write 6, carry 3. Tens: 6 × 9 = 54, plus carried 3 = 57. Answer: 576. (546 forgets to add the carried 3. 414 comes from misreading 64 as 46. 566 comes from an addition slip when adding the carry.)' },
        { difficulty: 'Medium', question: 'A learner is calculating 53 × 4 using the column method. Their working shows: units column 3 × 4 = 12, they wrote down 2 and carried 1 — but the tens row is blank. What is the correct final answer?', checkMode: 'auto', options: ['202', '222', '232', '212'], correctIndex: 3, explanation: 'Tens: 5 × 4 = 20, plus carried 1 = 21. Final answer: 212. (202 forgets to add the carried 1 to the tens. 222 mistakenly carries 2 instead of 1. 232 comes from misreading 53 as 58.)' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 48 × 6 by rounding 48 to the nearest 10, then calculate the exact answer. What is the exact answer?', checkMode: 'auto', options: ['288', '248', '300', '298'], correctIndex: 0, explanation: '48 rounds up to 50, so the estimate is 50 × 6 = 300. Exact: units 8 × 6 = 48, write 8 carry 4; tens 4 × 6 = 24, plus carried 4 = 28, giving 288. (248 forgets to add the carried 4. 300 mistakes the estimate for the exact answer. 298 comes from an addition slip in the tens.)' },
        { difficulty: 'Medium', question: 'A learner estimates 62 × 5 by rounding 62 to 60, getting an estimate of 300. Their exact answer comes out to 310. Which statement is correct?', checkMode: 'auto', options: ['310 is not reasonable — it should exactly equal the estimate of 300, so the learner made an error.', 'Yes, 310 is reasonable — it is close to the estimate of 300, and is in fact the exact correct answer to 62 × 5.', 'No, 310 cannot be correct because an exact answer must always equal its estimate.', 'No, since 62 rounds down to 60, the exact answer must always be smaller than the estimate.'], correctIndex: 1, explanation: '62 × 5 = 310 exactly, and 310 is close to the estimate of 300, so it is reasonable. An estimate only needs to be close to the exact answer, not identical to it — the other options are built on that misconception.' },
        { difficulty: 'Medium', question: 'Without working out either product exactly, which is greater: 6 × 14 or 9 × 9?', checkMode: 'auto', options: ['9 × 9 is greater', 'They are equal', '6 × 14 is greater', 'Cannot be determined without exact calculation'], correctIndex: 2, explanation: '6 × 14 is close to 6 × 15 = 90, while 9 × 9 = 81. So 6 × 14 (which equals 84) is greater than 9 × 9 (81) — rounding lets you compare them without a full calculation.' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 12 into two factors and use them to calculate: 3 × 12', checkMode: 'auto', options: ['15', '18', '24', '36'], correctIndex: 3, explanation: '12 = 6 × 2, so 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36. (15 comes from adding 3 + 12 instead of multiplying. 18 stops after multiplying by only one factor, 6, and forgets the 2. 24 comes from using the wrong factor pair for 12.)' },
        { difficulty: 'Medium', question: 'Break 15 into two factors and use them to calculate: 8 × 15', checkMode: 'auto', options: ['120', '40', '23', '64'], correctIndex: 0, explanation: '15 = 5 × 3, so 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120. (40 stops after multiplying by only one factor, 5, and forgets the 3. 23 comes from adding 8 + 15 instead of multiplying. 64 comes from misreading 8 × 15 as 8 × 8.)' },
        { difficulty: 'Medium', question: 'For the calculation 6 × 18, a learner breaks 18 into 6 × 9 × 2 instead of using the column method. Which statement about this strategy is correct?', checkMode: 'auto', options: ['This strategy is invalid because you cannot break a number into factors when multiplying.', 'This strategy works well — 6 × 9 = 54 is a known fact, and doubling 54 to 108 is quick and easy.', 'This strategy gives a different, larger answer than the column method would.', 'This strategy only works for even numbers being multiplied, not for 18.'], correctIndex: 1, explanation: 'Breaking 18 into 9 × 2 is a valid and efficient strategy here: 6 × 9 = 54 is a known fact, and doubling to 108 avoids carrying altogether. It gives exactly the same answer as the column method.' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A netball team has 12 players. If 7 teams enter a tournament, how many players are competing altogether?', checkMode: 'auto', options: ['19 players', '72 players', '84 players', '96 players'], correctIndex: 2, explanation: '7 × 12 = 84 players. (19 comes from adding 7 + 12 instead of multiplying. 72 and 96 come from using the wrong number of teams, 6 or 8, instead of 7.)' },
        { difficulty: 'Medium', question: 'A minibus taxi can carry 15 passengers. How many more passengers can 6 taxis carry than 4 taxis?', checkMode: 'auto', options: ['90 more passengers', '60 more passengers', '45 more passengers', '30 more passengers'], correctIndex: 3, explanation: '6 × 15 = 90 and 4 × 15 = 60. 90 − 60 = 30 more passengers. (90 and 60 give the totals for one group of taxis but forget to subtract. 45 comes from miscounting the difference as 3 extra taxis instead of 2.)' },
        { difficulty: 'Medium', question: 'Class A orders 6 boxes of 15 pencils each for the year. Class B orders 5 boxes of 18 pencils each. Which class ordered more pencils, and by how many?', checkMode: 'auto', options: ['Both classes ordered the same number of pencils — 90 each.', 'Class A ordered more, by 6 pencils.', 'Class B ordered more, by 12 pencils.', 'Class A ordered more, by 15 pencils.'], correctIndex: 0, explanation: 'Class A: 6 × 15 = 90 pencils. Class B: 5 × 18 = 90 pencils. Both classes ordered exactly the same number — 90 each. The other options come from arithmetic slips in one of the two multiplications.' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Sipho says 6 × 23 = 148. Which statement is correct?', checkMode: 'auto', options: ['Sipho is correct — 6 × 23 = 148.', 'Sipho is incorrect — the correct answer is 138.', 'Sipho is incorrect — the correct answer is 158.', 'Sipho is incorrect — the correct answer is 128.'], correctIndex: 1, explanation: 'Units: 3 × 6 = 18, write 8 carry 1. Tens: 2 × 6 = 12, plus carried 1 = 13, giving 138. Sipho is incorrect — 148 is not the answer to 6 × 23.' },
        { difficulty: 'Hard', question: 'A farmer has 8 rows of 14 cabbages. A hailstorm ruins 2 whole rows. How many cabbages are left standing?', checkMode: 'auto', options: ['112 cabbages', '28 cabbages', '98 cabbages', '84 cabbages'], correctIndex: 3, explanation: 'Total cabbages = 8 × 14 = 112. Cabbages ruined = 2 × 14 = 28. Cabbages left = 112 − 28 = 84. (112 forgets to subtract the ruined rows. 28 gives only the ruined amount. 98 subtracts just one row of 14 instead of two.)' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why 6 × 8 gives the same answer as 8 × 6?', checkMode: 'auto', options: ["It's a coincidence that only works for these two particular numbers.", '6 × 8 and 8 × 6 are actually different calculations that happen to both equal 48 by chance.', 'Multiplication only gives the same answer when both numbers are even.', 'Multiplication can be done in any order (the commutative property) — 6 groups of 8 and 8 groups of 6 contain the same total number of items, just arranged differently.'], correctIndex: 3, explanation: 'This is the commutative property of multiplication — it always holds, for any two numbers, not just even ones or a special pair. 6 groups of 8 and 8 groups of 6 both contain 48 items total.' },

        // Block 7 — Multiplying a 2-Digit Number by a 2-Digit Number (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the grid method: 12 × 13', checkMode: 'auto', options: ['156', '130', '126', '166'], correctIndex: 0, explanation: '12 = 10 + 2, 13 = 10 + 3. Partial products: 10×10=100, 10×3=30, 2×10=20, 2×3=6. Sum: 100 + 30 + 20 + 6 = 156. (130 only adds two of the four partial products. 126 forgets the 30 term. 166 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Calculate using the grid method: 26 × 34', checkMode: 'auto', options: ['680', '884', '804', '908'], correctIndex: 1, explanation: '26 = 20 + 6, 34 = 30 + 4. Partial products: 20×30=600, 20×4=80, 6×30=180, 6×4=24. Sum: 600 + 80 + 180 + 24 = 884. (680 only adds two of the four partial products. 804 forgets the 80 term. 908 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A stadium has 18 rows of seats with 22 seats in each row. How many seats are there in total?', checkMode: 'auto', options: ['220 seats', '380 seats', '396 seats', '412 seats'], correctIndex: 2, explanation: '18 = 10 + 8, 22 = 20 + 2. Partial products: 10×20=200, 10×2=20, 8×20=160, 8×2=16. Sum: 200 + 20 + 160 + 16 = 396 seats. (220 only adds two of the four partial products. 380 forgets the 16 term. 412 comes from an addition slip.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, 2-digit multiplication, word problems and reasoning.' },
        { minScore: 17, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (23 Qs) — 6 skill blocks — all multiple choice
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 5 × 9', checkMode: 'auto', options: ['45', '40', '50', '14'], correctIndex: 0, explanation: '5 × 9 = 45. (40 comes from 5 × 8, 50 comes from 5 × 10 — both use the wrong table entry. 14 comes from adding 5 + 9 instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate: 6 × 7', checkMode: 'auto', options: ['36', '42', '49', '13'], correctIndex: 1, explanation: '6 × 7 = 42. (36 comes from 6 × 6, 49 comes from 7 × 7 — each repeats one factor instead of using both given numbers. 13 comes from adding 6 + 7.)' },
        { difficulty: 'Easy', question: 'Calculate: 12 × 8', checkMode: 'auto', options: ['80', '84', '96', '88'], correctIndex: 2, explanation: '12 × 8 = 96. Think: 10 × 8 + 2 × 8 = 80 + 16 = 96. (80 stops after only the tens part. 84 comes from 12 × 7. 88 comes from misreading 12 as 11.)' },
        { difficulty: 'Easy', question: 'Fill in the missing number: ___ × 7 = 56', checkMode: 'auto', options: ['7', '9', '6', '8'], correctIndex: 3, explanation: '8 × 7 = 56, so the missing number is 8. (7 confuses the missing number with the given one. 9 and 6 are neighbouring numbers in the 7 times table.)' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 42 × 2', checkMode: 'auto', options: ['84', '44', '48', '168'], correctIndex: 0, explanation: 'Units: 2 × 2 = 4. Tens: 4 × 2 = 8. Answer: 84. (44 forgets to multiply the tens digit and leaves it unchanged. 48 reverses the digits of the correct answer. 168 comes from multiplying by an extra 2 somewhere.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 56 × 4', checkMode: 'auto', options: ['204', '224', '216', '234'], correctIndex: 1, explanation: 'Units: 6 × 4 = 24. Write 4, carry 2. Tens: 5 × 4 = 20, plus carried 2 = 22. Answer: 224. (204 forgets to add the carried 2. 216 comes from misreading 56 as 54. 234 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 32 × 8', checkMode: 'auto', options: ['246', '184', '256', '266'], correctIndex: 2, explanation: 'Units: 2 × 8 = 16. Write 6, carry 1. Tens: 3 × 8 = 24, plus carried 1 = 25. Answer: 256. (246 forgets to add the carried 1. 184 comes from misreading 32 as 23. 266 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A learner is calculating 76 × 3 using the column method. Their working shows: units column 6 × 3 = 18, they wrote down 8 and carried 1 — but the tens row is blank. What is the correct final answer?', checkMode: 'auto', options: ['218', '238', '234', '228'], correctIndex: 3, explanation: 'Tens: 7 × 3 = 21, plus carried 1 = 22. Final answer: 228. (218 forgets to add the carried 1. 238 mistakenly carries 2 instead of 1. 234 comes from misreading 76 as 78.)' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 75 × 8 by rounding 75 to the nearest 10, then calculate the exact answer. What is the exact answer?', checkMode: 'auto', options: ['600', '640', '560', '610'], correctIndex: 0, explanation: '75 rounds up to 80, so the estimate is 80 × 8 = 640. Exact: units 5 × 8 = 40, write 0 carry 4; tens 7 × 8 = 56, plus carried 4 = 60, giving 600. (640 mistakes the estimate for the exact answer. 560 forgets to add the carried 4. 610 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Two learners estimate 39 × 7. Bongani rounds 39 to 40 and gets 280. Zanele rounds 39 to 35 (not the nearest 10) and gets 245. Which statement is correct?', checkMode: 'auto', options: ["Zanele's estimate is more accurate since 245 is closer to the exact answer.", "Bongani's estimate is correct — 39 rounds to the nearest 10, which is 40, not 35.", 'Both estimates are equally valid since estimation allows rounding to any nearby number.', 'Neither is correct — 39 should round down to 30.'], correctIndex: 1, explanation: '39 is closer to 40 than to 30, so it rounds to 40 — that is the nearest 10. Zanele rounded to 35, which is not a multiple of 10 at all, so her method is invalid even though her final number happens to be closer to the true product.' },
        { difficulty: 'Medium', question: 'Without working out either product exactly, which is greater: 7 × 13 or 8 × 11?', checkMode: 'auto', options: ['8 × 11 is greater', 'They are equal', '7 × 13 is greater', 'Cannot be determined without exact calculation'], correctIndex: 2, explanation: '7 × 13 = 91 and 8 × 11 = 88. Comparing the leading factors (7 is close to 8) and the second factors (13 is noticeably bigger than 11) shows 7 × 13 must be the larger product.' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 16 into two factors and use them to calculate: 5 × 16', checkMode: 'auto', options: ['21', '40', '60', '80'], correctIndex: 3, explanation: '16 = 8 × 2, so 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80. (21 comes from adding 5 + 16 instead of multiplying. 40 stops after multiplying by only one factor, 8, and forgets the 2. 60 comes from using the wrong factor pair for 16.)' },
        { difficulty: 'Medium', question: 'Break 14 into two factors and use them to calculate: 9 × 14', checkMode: 'auto', options: ['126', '63', '23', '144'], correctIndex: 0, explanation: '14 = 7 × 2, so 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126. (63 stops after multiplying by only one factor, 7, and forgets the 2. 23 comes from adding 9 + 14. 144 comes from misreading 7 as 8.)' },
        { difficulty: 'Medium', question: 'For the calculation 4 × 25, a learner breaks 25 into 4 × 5 × 5 instead of using the column method. Which statement about this strategy is correct?', checkMode: 'auto', options: ['The column method is always faster for any 2-digit number.', 'Breaking 25 into 5 × 5 is much faster here — 4 × 5 = 20 is an easy known fact, then × 5 = 100.', 'Neither method works for numbers ending in 5.', 'The factor method gives a different, incorrect answer for this calculation.'], correctIndex: 1, explanation: '4 × 5 = 20 is a well-known fact, and 20 × 5 = 100 is easy to work out — this strategy suits 25 particularly well. It gives exactly the same answer as the column method, just with less writing.' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A spaza shop stocks cooldrink in crates of 24 cans. If the owner has 5 crates, how many cans of cooldrink does the shop have in total?', checkMode: 'auto', options: ['29 cans', '96 cans', '120 cans', '144 cans'], correctIndex: 2, explanation: '5 × 24 = 120 cans. (29 comes from adding 5 + 24 instead of multiplying. 96 and 144 come from using the wrong number of crates, 4 or 6, instead of 5.)' },
        { difficulty: 'Medium', question: 'A goat farmer has 9 pens with 13 goats in each pen. How many fewer goats would the farmer have if 3 of the pens were empty instead?', checkMode: 'auto', options: ['117 fewer goats', '78 fewer goats', '26 fewer goats', '39 fewer goats'], correctIndex: 3, explanation: '9 × 13 = 117 goats with all pens full. If 3 pens were empty, that removes 3 × 13 = 39 goats. (117 gives the total instead of the amount removed. 78 gives the remaining goats instead of the fewer amount. 26 miscounts the empty pens as 2 instead of 3.)' },
        { difficulty: 'Medium', question: 'A taxi rank has 7 minibuses carrying 16 passengers each. A second rank has 8 minibuses carrying 14 passengers each. Which rank is transporting more passengers, and by how many?', checkMode: 'auto', options: ['Both ranks transport the same number of passengers — 112 each.', 'The first rank transports more, by 8.', 'The second rank transports more, by 8.', 'The first rank transports more, by 16.'], correctIndex: 0, explanation: 'First rank: 7 × 16 = 112 passengers. Second rank: 8 × 14 = 112 passengers. Both ranks transport exactly the same number — 112 each. The other options come from arithmetic slips in one of the two multiplications.' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Thabo says 9 × 36 = 314. Which statement is correct?', checkMode: 'auto', options: ['Thabo is correct — 9 × 36 = 314.', 'Thabo is incorrect — the correct answer is 324.', 'Thabo is incorrect — the correct answer is 304.', 'Thabo is incorrect — the correct answer is 334.'], correctIndex: 1, explanation: 'Units: 6 × 9 = 54, write 4 carry 5. Tens: 3 × 9 = 27, plus carried 5 = 32, giving 324. Thabo is incorrect — 314 is not the answer to 9 × 36.' },
        { difficulty: 'Hard', question: 'A stationery shop buys 7 boxes of pens, each with 12 pens, at a cost of R4 per pen. What is the total cost?', checkMode: 'auto', options: ['R84', 'R340', 'R336', 'R288'], correctIndex: 2, explanation: '7 × 12 = 84 pens. 84 × 4 = R336. (R84 gives the number of pens and forgets to multiply by the price. R340 comes from an addition slip. R288 comes from miscalculating the number of pens as 72 instead of 84.)' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why estimating before you calculate helps you check your answer?', checkMode: 'auto', options: ['Estimating replaces the need to calculate the exact answer at all.', 'Estimating only works for multiplication problems with two-digit numbers.', 'Estimating guarantees the exact answer will always be a round number.', 'Rounding first gives a quick approximate answer; comparing it to the exact answer afterwards shows whether the exact answer is reasonable.'], correctIndex: 3, explanation: 'An estimate is a quick check, not a replacement for the exact calculation. If the exact answer is far from the estimate, that is a sign a mistake was probably made — this works for any size of number, not just two-digit ones.' },

        // Block 7 — Multiplying a 2-Digit Number by a 2-Digit Number (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the grid method: 14 × 21', checkMode: 'auto', options: ['294', '210', '284', '304'], correctIndex: 0, explanation: '14 = 10 + 4, 21 = 20 + 1. Partial products: 10×20=200, 10×1=10, 4×20=80, 4×1=4. Sum: 200 + 10 + 80 + 4 = 294. (210 only adds two of the four partial products. 284 forgets the 10 term. 304 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Calculate using the grid method: 37 × 25', checkMode: 'auto', options: ['750', '925', '890', '965'], correctIndex: 1, explanation: '37 = 30 + 7, 25 = 20 + 5. Partial products: 30×20=600, 30×5=150, 7×20=140, 7×5=35. Sum: 600 + 150 + 140 + 35 = 925. (750 only adds two of the four partial products. 890 forgets the 35 term. 965 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A farmer plants 24 trees in each of 16 rows. How many trees are there in total?', checkMode: 'auto', options: ['320 trees', '360 trees', '384 trees', '404 trees'], correctIndex: 2, explanation: '24 = 20 + 4, 16 = 10 + 6. Partial products: 20×10=200, 20×6=120, 4×10=40, 4×6=24. Sum: 200 + 120 + 40 + 24 = 384 trees. (320 only adds two of the four partial products. 360 forgets the 24 term. 404 comes from an addition slip.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, 2-digit multiplication, word problems and reasoning.' },
        { minScore: 17, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (23 Qs) — 6 skill blocks — all multiple choice
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Times Tables Fluency (0-3, Easy)
        { difficulty: 'Easy', question: 'Calculate: 8 × 8', checkMode: 'auto', options: ['64', '56', '72', '16'], correctIndex: 0, explanation: '8 × 8 = 64. (56 comes from 7 × 8, 72 comes from 8 × 9 — both use the wrong table entry. 16 comes from adding 8 + 8 instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate: 3 × 9', checkMode: 'auto', options: ['24', '27', '30', '12'], correctIndex: 1, explanation: '3 × 9 = 27. (24 comes from 3 × 8, 30 comes from 3 × 10 — both use the wrong table entry. 12 comes from adding 3 + 9 instead of multiplying.)' },
        { difficulty: 'Easy', question: 'Calculate: 11 × 6', checkMode: 'auto', options: ['60', '55', '66', '72'], correctIndex: 2, explanation: '11 × 6 = 66. Think: 10 × 6 + 1 × 6 = 60 + 6 = 66. (60 stops after only the tens part. 55 comes from 11 × 5. 72 comes from misreading 11 as 12.)' },
        { difficulty: 'Easy', question: 'Fill in the missing number: ___ × 6 = 42', checkMode: 'auto', options: ['6', '8', '5', '7'], correctIndex: 3, explanation: 'Count in 6s until you reach 42: 6, 12, 18, 24, 30, 36, 42 — that is 7 steps, so 7 × 6 = 42. (6 confuses the missing number with the given one. 8 and 5 are neighbouring numbers in the 6 times table.)' },

        // Block 2 — Column Multiplication (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the column method: 23 × 3', checkMode: 'auto', options: ['69', '29', '26', '96'], correctIndex: 0, explanation: 'Units: 3 × 3 = 9. Tens: 2 × 3 = 6. Answer: 69. (29 forgets to multiply the tens digit and leaves it unchanged. 26 comes from adding 23 + 3. 96 reverses the digits of the correct answer.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 67 × 4', checkMode: 'auto', options: ['248', '268', '276', '278'], correctIndex: 1, explanation: 'Units: 7 × 4 = 28. Write 8, carry 2. Tens: 6 × 4 = 24, plus carried 2 = 26. Answer: 268. (248 forgets to add the carried 2. 276 comes from misreading 67 as 69. 278 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing your carrying: 45 × 6', checkMode: 'auto', options: ['240', '288', '270', '260'], correctIndex: 2, explanation: 'Units: 5 × 6 = 30. Write 0, carry 3. Tens: 4 × 6 = 24, plus carried 3 = 27. Answer: 270. (240 forgets to add the carried 3. 288 comes from misreading 45 as 48. 260 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A learner is calculating 84 × 6 using the column method. Their working shows: units column 4 × 6 = 24, they wrote down 4 and carried 2 — but the tens row is blank. What is the correct final answer?', checkMode: 'auto', options: ['484', '514', '516', '504'], correctIndex: 3, explanation: 'Tens: 8 × 6 = 48, plus carried 2 = 50. Final answer: 504. (484 forgets to add the carried 2. 514 mistakenly carries 3 instead of 2. 516 comes from misreading 84 as 86.)' },

        // Block 3 — Estimation and Reasonableness (8-10, Medium)
        { difficulty: 'Medium', question: 'Estimate 53 × 7 by rounding 53 to the nearest 10, then calculate the exact answer. What is the exact answer?', checkMode: 'auto', options: ['371', '350', '351', '391'], correctIndex: 0, explanation: '53 rounds down to 50, so the estimate is 50 × 7 = 350. Exact: units 3 × 7 = 21, write 1 carry 2; tens 5 × 7 = 35, plus carried 2 = 37, giving 371. (350 mistakes the estimate for the exact answer. 351 forgets to add the carried 2. 391 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A learner estimates 41 × 9 by rounding 41 to 40, getting an estimate of 360. Their exact answer comes out to 369. Which statement is correct?', checkMode: 'auto', options: ['369 is not reasonable — it should exactly equal the estimate of 360, so the learner made an error.', 'Yes, 369 is reasonable — it is close to the estimate of 360, and is in fact the exact correct answer to 41 × 9.', 'No, 369 cannot be correct because an exact answer must always equal its estimate.', 'No, since 41 rounds down to 40, the exact answer must always be smaller than the estimate.'], correctIndex: 1, explanation: '41 × 9 = 369 exactly, and 369 is close to the estimate of 360, so it is reasonable. An estimate only needs to be close to the exact answer, not identical to it — the other options are built on that misconception.' },
        { difficulty: 'Medium', question: 'Without working out either product exactly, which is greater: 5 × 19 or 8 × 12?', checkMode: 'auto', options: ['5 × 19 is greater', 'They are equal', '8 × 12 is greater', 'Cannot be determined without exact calculation'], correctIndex: 2, explanation: '5 × 19 = 95 and 8 × 12 = 96 — very close, but 8 × 12 is greater. Rounding 19 up to 20 gives 5 × 20 = 100 as an upper estimate for the first product, showing the true value (95) sits just below 8 × 12 (96).' },

        // Block 4 — Factors and Flexible Strategies (11-13, Medium)
        { difficulty: 'Easy', question: 'Break 18 into two factors and use them to calculate: 4 × 18', checkMode: 'auto', options: ['22', '36', '48', '72'], correctIndex: 3, explanation: '18 = 9 × 2, so 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72. (22 comes from adding 4 + 18 instead of multiplying. 36 stops after multiplying by only one factor, 9, and forgets the 2. 48 comes from using the wrong factor pair for 18.)' },
        { difficulty: 'Medium', question: 'Break 16 into two factors and use them to calculate: 7 × 16', checkMode: 'auto', options: ['112', '56', '23', '126'], correctIndex: 0, explanation: '16 = 8 × 2, so 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112. (56 stops after multiplying by only one factor, 8, and forgets the 2. 23 comes from adding 7 + 16. 126 comes from misreading 8 as 9.)' },
        { difficulty: 'Medium', question: 'For the calculation 3 × 45, a learner breaks 45 into 3 × 9 × 5 instead of using the column method. Which statement about this strategy is correct?', checkMode: 'auto', options: ['The factor method is always faster regardless of the numbers involved.', 'The column method is likely easier here — 45 does not break into very simple small factors, and multiplying 45 × 3 directly only needs one carry.', 'Neither method can be used because 45 is an odd number.', 'The factor method gives a different, incorrect answer for this calculation.'], correctIndex: 1, explanation: '9 × 5 still needs multiplying by 3 twice, so the factor method takes just as many steps here. Lining up 45 × 3 in columns and carrying once is quicker and more direct for this particular product.' },

        // Block 5 — Word Problems in Varied Contexts (14-16, Medium)
        { difficulty: 'Medium', question: 'A soccer coach buys new kit for the squad: 8 boxes of socks with 12 pairs in each box. How many pairs of socks did the coach buy altogether?', checkMode: 'auto', options: ['20 pairs', '88 pairs', '96 pairs', '104 pairs'], correctIndex: 2, explanation: '8 × 12 = 96 pairs of socks. (20 comes from adding 8 + 12 instead of multiplying. 88 and 104 come from using the wrong number of pairs per box, 11 or 13, instead of 12.)' },
        { difficulty: 'Medium', question: 'A citrus farmer packs oranges into crates of 18. How many more oranges are packed into 9 crates than into 6 crates?', checkMode: 'auto', options: ['162 more oranges', '108 more oranges', '36 more oranges', '54 more oranges'], correctIndex: 3, explanation: '9 × 18 = 162 and 6 × 18 = 108. 162 − 108 = 54 more oranges. (162 and 108 give the totals for one group of crates but forget to subtract. 36 comes from miscounting the difference as 2 extra crates instead of 3.)' },
        { difficulty: 'Medium', question: 'Route A buses run 6 trips a day carrying 17 passengers each. Route B buses run 7 trips a day carrying 15 passengers each. Which route carries more passengers per day, and by how many?', checkMode: 'auto', options: ['Route B carries more, by 3.', 'Route A carries more, by 3.', 'They carry the same number of passengers.', 'Route B carries more, by 5.'], correctIndex: 0, explanation: 'Route A: 6 × 17 = 102 passengers. Route B: 7 × 15 = 105 passengers. Route B carries more, by 105 − 102 = 3. The other options come from arithmetic slips in one of the two multiplications.' },

        // Block 6 — Error-Spotting and Justify-Your-Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Amahle says 12 × 11 = 142. Which statement is correct?', checkMode: 'auto', options: ['Amahle is correct — 12 × 11 = 142.', 'Amahle is incorrect — the correct answer is 132.', 'Amahle is incorrect — the correct answer is 152.', 'Amahle is incorrect — the correct answer is 122.'], correctIndex: 1, explanation: 'Think: 12 × 10 = 120, plus 12 × 1 = 12, giving 120 + 12 = 132. Amahle is incorrect — 142 is not the answer to 12 × 11.' },
        { difficulty: 'Hard', question: '4 fishermen each start the day with 38 fish in their catch. Each fisherman sells 14 fish at the market. How many fish do all 4 fishermen have left altogether?', checkMode: 'auto', options: ['152 fish', '56 fish', '96 fish', '138 fish'], correctIndex: 2, explanation: 'Fish left per fisherman = 38 − 14 = 24. Total left = 4 × 24 = 96 fish. (152 forgets to subtract the sold fish first. 56 gives the total number sold instead of what is left. 138 subtracts 14 only once from the group total instead of per fisherman.)' },
        { difficulty: 'Hard', question: 'Which statement correctly explains why breaking 15 into 5 × 3 and multiplying step by step gives exactly the same answer as multiplying by 15 directly?', checkMode: 'auto', options: ["It's a coincidence that only works for the number 15.", 'Breaking numbers into factors always changes the final answer slightly.', 'This only works when both factors are odd numbers.', 'Breaking 15 into 5 × 3 does not change its value, so multiplying by 5 then 3 is the same total amount of multiplying as multiplying by 15 in one step.'], correctIndex: 3, explanation: '5 × 3 is still 15, so splitting the multiplication into two smaller steps does not change the total amount being multiplied. This works for any number broken into factors, not just 15 or odd numbers.' },

        // Block 7 — Multiplying a 2-Digit Number by a 2-Digit Number (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Calculate using the grid method: 13 × 24', checkMode: 'auto', options: ['312', '240', '300', '322'], correctIndex: 0, explanation: '13 = 10 + 3, 24 = 20 + 4. Partial products: 10×20=200, 10×4=40, 3×20=60, 3×4=12. Sum: 200 + 40 + 60 + 12 = 312. (240 only adds two of the four partial products. 300 forgets the 12 term. 322 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'Calculate using the grid method: 42 × 36', checkMode: 'auto', options: ['1440', '1512', '1500', '1522'], correctIndex: 1, explanation: '42 = 40 + 2, 36 = 30 + 6. Partial products: 40×30=1200, 40×6=240, 2×30=60, 2×6=12. Sum: 1200 + 240 + 60 + 12 = 1512. (1440 only adds two of the four partial products. 1500 forgets the 12 term. 1522 comes from an addition slip.)' },
        { difficulty: 'Medium', question: 'A theatre has 27 rows with 19 seats in each row. How many seats are there in total?', checkMode: 'auto', options: ['380 seats', '450 seats', '513 seats', '523 seats'], correctIndex: 2, explanation: '27 = 20 + 7, 19 = 10 + 9. Partial products: 20×10=200, 20×9=180, 7×10=70, 7×9=63. Sum: 200 + 180 + 70 + 63 = 513 seats. (380 only adds two of the four partial products. 450 forgets the 63 term. 523 comes from an addition slip.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Outstanding! You have mastered times tables, column method, estimation, factors, 2-digit multiplication, word problems and reasoning.' },
        { minScore: 17, message: 'Great work! You are confident across most of these skills — review any missed questions.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples for the blocks you found tricky and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
