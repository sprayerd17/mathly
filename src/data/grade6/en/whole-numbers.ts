import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (place value roles) ──────────────────────────────────────
// hundred millions  → purple  (#7c3aed)
// ten millions      → red     (#dc2626)
// millions          → orange  (#ea580c)
// hundred thousands → yellow  (#ca8a04)
// ten thousands     → green   (#16a34a)
// thousands         → blue    (#2563eb)
// hundreds          → purple  (#7c3aed)   (same as hundred millions)
// tens              → green   (#16a34a)   (same as ten thousands)
// units             → blue    (#2563eb)   (same as thousands)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Whole Numbers',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PLACE VALUE UP TO 9-DIGIT NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-9-digit',
      title: 'Place Value up to 9-Digit Numbers',
      icon: '#',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 we work with whole numbers up to 999&nbsp;999&nbsp;999 — that is nine hundred and ninety nine million, nine hundred and ninety nine thousand, nine hundred and ninety nine. Every digit in a number has a <strong>place value</strong>. Starting from the right the places are: ${bl('units')}, ${gr('tens')}, ${pu('hundreds')}, ${bl('thousands')}, ${gr('ten thousands')}, ${ye('hundred thousands')}, ${or('millions')}, ${re('ten millions')} and ${pu('hundred millions')}. We can write numbers in <strong>expanded notation</strong> to show the value of each digit separately.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('hundred millions / hundreds')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('ten millions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('millions')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('hundred thousands')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ten thousands / tens')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('thousands / units')}</span>` +
        `</div>` +

        // ── Place value chart ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Place value positions</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:13px;text-align:center;min-width:560px;">` +
        `<thead>` +
        `<tr>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#7c3aed;font-weight:700;">Hundred<br/>Millions</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#dc2626;font-weight:700;">Ten<br/>Millions</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#ea580c;font-weight:700;">Millions</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#ca8a04;font-weight:700;">Hundred<br/>Thousands</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#16a34a;font-weight:700;">Ten<br/>Thousands</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#2563eb;font-weight:700;">Thousands</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#7c3aed;font-weight:700;">Hundreds</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#16a34a;font-weight:700;">Tens</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#2563eb;font-weight:700;">Units</th>` +
        `</tr>` +
        `</thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#7c3aed;font-weight:700;">100 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#dc2626;font-weight:700;">10 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#ea580c;font-weight:700;">1 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#ca8a04;font-weight:700;">100 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#16a34a;font-weight:700;">10 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#2563eb;font-weight:700;">1 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#7c3aed;font-weight:700;">100</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#16a34a;font-weight:700;">10</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#2563eb;font-weight:700;">1</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Expanded notation ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Expanded notation</p>` +
        `<p style="margin-bottom:12px;">To write a number in expanded notation, write the value of each non-zero digit separately and add them together:</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:1em;font-weight:700;color:#374151;word-break:break-word;">` +
        `325 407 819 = ${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: zeros in expanded notation</p>` +
        `<p style="margin:0;color:#1e3a8a;">Digits with a value of <strong>zero</strong> are not written in expanded notation because adding 0 does not change the total. For example, the ${gr('0')} in the ${gr('ten thousands')} place of 325 407 819 contributes ${gr('0')} × 10 000 = 0, so it is left out.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write the place value of each digit in 4 728 356.',
          answer:
            `${or('4')} millions, ${ye('7')} hundred thousands, ${gr('2')} ten thousands, ${bl('8')} thousands, ${pu('3')} hundreds, ${gr('5')} tens, ${bl('6')} units`,
          steps: [
            `Starting from the right — ${bl('6')} is in the ${bl('units')} place = ${bl('6')}.`,
            `${gr('5')} is in the ${gr('tens')} place = ${gr('50')}.`,
            `${pu('3')} is in the ${pu('hundreds')} place = ${pu('300')}.`,
            `${bl('8')} is in the ${bl('thousands')} place = ${bl('8 000')}.`,
            `${gr('2')} is in the ${gr('ten thousands')} place = ${gr('20 000')}.`,
            `${ye('7')} is in the ${ye('hundred thousands')} place = ${ye('700 000')}.`,
            `${or('4')} is in the ${or('millions')} place = ${or('4 000 000')}.`,
          ],
        },
        {
          question: 'Write 325 407 819 in expanded notation.',
          answer:
            `${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}`,
          steps: [
            `${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}`,
            `Each digit is written as its full value and added together. The ${gr('0')} in the ${gr('ten thousands')} place contributes 0 and is not included.`,
          ],
        },
        {
          question: 'What is the value of the digit 7 in 274 863 109?',
          answer: `The value of ${re('7')} in 274 863 109 is ${re('70 000 000')}`,
          steps: [
            `Find the digit ${re('7')} in the number 274&nbsp;863&nbsp;109.`,
            `It is in the ${re('ten millions')} place.`,
            `The value of ${re('7')} in this number is ${re('7')} × 10&nbsp;000&nbsp;000 = ${re('70 000 000')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — place value of a digit ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the place value of the digit 5 in 5 324 871?',
          answer: '5 000 000',
          checkMode: 'auto',
          correctAnswer: '5 000 000',
          explanation: 'Starting from the right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions. The digit 5 is the leftmost digit — it is in the millions place. Its value is 5 × 1 000 000 = 5 000 000.',
        },

        // ── Q2 Easy — expanded notation ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 4 302 715 in expanded notation.',
          answer: '4 000 000 + 300 000 + 2 000 + 700 + 10 + 5',
          checkMode: 'self',
        },

        // ── Q3 Medium — value of a digit in a 9-digit number ──────────────────────
        {
          difficulty: 'Medium',
          question: 'What is the value of the digit 8 in 348 921 076?',
          answer: '800 000 000',
          checkMode: 'auto',
          correctAnswer: '800 000 000',
          explanation: 'Locate the digit 8 in 348 921 076. Count positions from the right — it falls in the hundred millions place. Its value is 8 × 100 000 000 = 800 000 000.',
        },

        // ── Q4 Hard — reasoning about place value ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the digit 6 in 267 431 has a value of 600. Is he correct? Explain.',
          answer: 'No — the digit 6 is in the ten thousands place so its value is 60 000 not 600.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Place value chart showing all 9 positions from hundred millions to units with each column colour coded and example digits from 325 407 819 placed in each column" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining place value in 9-digit whole numbers using a colour coded place value chart and showing how to write numbers in expanded notation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING WHOLE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-whole-numbers',
      title: 'Comparing and Ordering Whole Numbers',
      icon: '⇔',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>compare</strong> whole numbers we look at the <strong>number of digits</strong> first — a number with more digits is always larger. If two numbers have the same number of digits we compare <strong>digit by digit starting from the left</strong>. We use the symbols ${gr('>')} (greater than), ${re('<')} (less than) and ${bl('=')} (equal to) to show the relationship between numbers. To <strong>order</strong> numbers we arrange them from smallest to biggest (<em>ascending order</em>) or biggest to smallest (<em>descending order</em>).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('> greater than')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('< less than')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('= equal to')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('key digit being compared')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for comparing whole numbers</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Count the digits</strong> — a number with more digits is always larger. No digit-by-digit comparison is needed.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Same number of digits?</strong> Compare digit by digit from the <strong>left</strong>. The first position where the digits differ decides which number is larger.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>All digits equal?</strong> Write ${bl('=')} between the two numbers.</p>` +
        `</div>` +

        `</div>` +

        // ── Symbols box ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The comparison symbols</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#16a34a;margin-bottom:4px;">&gt;</p>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Greater than</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The open end faces the <strong>larger</strong> number.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#dc2626;margin-bottom:4px;">&lt;</p>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Less than</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The pointed end faces the <strong>smaller</strong> number.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#2563eb;margin-bottom:4px;">=</p>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equal to</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Both numbers have exactly the <strong>same value</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Ordering tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Ascending and descending order</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Ascending order</strong> — smallest to largest (numbers go up). <strong>Descending order</strong> — largest to smallest (numbers go down). Always start by counting digits to group numbers, then compare within each group digit by digit from the left.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Compare 4 728 350 and 4 736 200. Which is greater?',
          answer: `4 728 350 ${re('<')} 4 736 200`,
          steps: [
            `Both numbers have <strong>7 digits</strong> — so we compare digit by digit from the left.`,
            `Millions place: both have ${bl('4')} — ${bl('equal')}.`,
            `Hundred thousands place: both have ${bl('7')} — ${bl('equal')}.`,
            `Ten thousands place: first number has ${or('2')}, second has ${or('3')}. Since ${or('3')} ${gr('>')} ${or('2')}, the second number is larger.`,
            `<strong>Answer:</strong> 4 728 350 ${re('<')} 4 736 200 ✓`,
          ],
        },
        {
          question: 'Arrange these numbers in ascending order: 3 421 000,  987 654,  3 419 500,  12 450 000.',
          answer: `987 654 ${re('<')} 3 419 500 ${re('<')} 3 421 000 ${re('<')} 12 450 000`,
          steps: [
            `Count the digits in each number.<br>987 654 has <strong>6 digits</strong> — fewest digits, so it is the <strong>smallest</strong>.<br>3 419 500 and 3 421 000 each have <strong>7 digits</strong>.<br>12 450 000 has <strong>8 digits</strong> — most digits, so it is the <strong>largest</strong>.`,
            `Compare the two 7-digit numbers: 3 419 500 vs 3 421 000.<br>Millions: both have ${bl('3')} — ${bl('equal')}.<br>Hundred thousands: both have ${bl('4')} — ${bl('equal')}.<br>Ten thousands: ${or('1')} vs ${or('2')} — since ${or('1')} ${re('<')} ${or('2')}, the number 3 419 500 is smaller.`,
            `<strong>Ascending order:</strong> 987 654 ${re('<')} 3 419 500 ${re('<')} 3 421 000 ${re('<')} 12 450 000 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — comparing two numbers ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which is greater — 4 328 100 or 4 319 800?',
          answer: '4 328 100',
          checkMode: 'auto',
          correctAnswer: '4 328 100',
          explanation: 'Both numbers have 7 digits. Compare digit by digit from the left.\nMillions: both 4 — equal.\nHundred thousands: both 3 — equal.\nTen thousands: 2 vs 1 — since 2 > 1, the number 4 328 100 is greater.',
        },

        // ── Q6 Medium — descending order ─────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Arrange in descending order: 2 341 000, 987 234, 2 340 999, 15 000 000.',
          answer: '15 000 000, 2 341 000, 2 340 999, 987 234',
          checkMode: 'self',
        },

        // ── Q7 Hard — reasoning about comparing numbers ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says 9 999 999 is greater than 10 000 000 because 9 is greater than 1. Is she correct? Explain.',
          answer: 'No — we compare numbers by the number of digits first. 10 000 000 has 8 digits and 9 999 999 has 7 digits so 10 000 000 is greater.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side digit comparison of 4 728 350 and 4 736 200 with each matching position aligned in columns and the differing ten thousands digits highlighted in orange with a less than symbol in red between the two numbers" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to compare and order large whole numbers by counting digits first then comparing digit by digit from the left using the greater than less than and equal to symbols" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ROUNDING OFF WHOLE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-off-whole-numbers',
      title: 'Rounding Off Whole Numbers',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Rounding off means replacing a number with a simpler number that is close to the original. We round to the nearest <strong>10, 100, 1 000, 10 000, 100 000</strong> or <strong>1 000 000</strong>. To round off, look at the digit immediately to the right of the place you are rounding to. If that digit is <strong>5 or more</strong>, round up. If that digit is <strong>4 or less</strong>, round down — keep the digit the same and replace all digits to the right with zeros.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rounding digit')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('digit to the right')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('round up')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('round down')}</span>` +
        `</div>` +

        // ── Two rounding rules ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two rounding rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Round up')} — digit to the right is 5 or more</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Increase the ${bl('rounding digit')} by 1. Replace all digits to the right with zeros.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">The ${or('digit to the right')} is ${or('5, 6, 7, 8')} or ${or('9')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Round down')} — digit to the right is 4 or less</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Keep the ${bl('rounding digit')} the same. Replace all digits to the right with zeros.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">The ${or('digit to the right')} is ${or('0, 1, 2, 3')} or ${or('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── How to round step by step ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to round — step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identify the ${bl('rounding digit')}</strong> — find the digit in the place you are rounding to (e.g. the thousands digit if rounding to the nearest 1 000).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Look at the ${or('digit to the right')}</strong> — this is the digit immediately to the right of the ${bl('rounding digit')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Apply the rule</strong> — if the ${or('digit to the right')} is ${gr('5 or more')}, ${gr('round up')}. If it is ${re('4 or less')}, ${re('round down')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Replace with zeros</strong> — write zeros in all places to the right of the ${bl('rounding digit')}. Keep all digits to the left unchanged.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key reminder</p>` +
        `<p style="margin:0;color:#1e3a8a;">Only the ${or('digit immediately to the right')} of the ${bl('rounding digit')} decides whether you round up or down. All other digits to the right simply become zeros.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Round 3 847 215 to the nearest 1 000 000.',
          answer: `3 847 215 rounded to the nearest million is ${gr('4 000 000')}`,
          steps: [
            `We are rounding to the nearest million. The ${bl('rounding digit')} is the millions digit — it is ${bl('3')}.`,
            `Look at the digit immediately to the right — the hundred thousands digit is ${or('8')}.`,
            `Since ${or('8')} is 5 or more, we ${gr('round up')} — increase the millions digit from ${bl('3')} to ${gr('4')}.`,
            `Replace all digits to the right with zeros.`,
            `<strong>Answer:</strong> 3 847 215 rounded to the nearest million is ${gr('4 000 000')} ✓`,
          ],
        },
        {
          question: 'Round 2 453 620 to the nearest 10 000.',
          answer: `2 453 620 rounded to the nearest ten thousand is ${re('2 450 000')}`,
          steps: [
            `We are rounding to the nearest ten thousand. The ${bl('rounding digit')} is the ten thousands digit — it is ${bl('5')}.`,
            `Look at the digit to the right — the thousands digit is ${or('3')}.`,
            `Since ${or('3')} is less than 5, we ${re('round down')} — keep the ten thousands digit as ${bl('5')}.`,
            `Replace all digits to the right with zeros.`,
            `<strong>Answer:</strong> 2 453 620 rounded to the nearest ten thousand is ${re('2 450 000')} ✓`,
          ],
        },
        {
          question: 'Round 76 500 to the nearest 1 000.',
          answer: `76 500 rounded to the nearest thousand is ${gr('77 000')}`,
          steps: [
            `The ${bl('rounding digit')} is the thousands digit — it is ${bl('6')}.`,
            `Look at the hundreds digit — it is ${or('5')}.`,
            `Since ${or('5')} is 5 or more, we ${gr('round up')} — increase the thousands digit from ${bl('6')} to ${gr('7')}.`,
            `Replace all digits to the right with zeros.`,
            `<strong>Answer:</strong> 76 500 rounded to the nearest thousand is ${gr('77 000')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy — rounding to the nearest million ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Round 3 456 789 to the nearest million.',
          answer: '3 000 000',
          checkMode: 'auto',
          correctAnswer: '3 000 000',
          explanation: 'The rounding digit is the millions digit — it is 3. The digit to the right (hundred thousands) is 4. Since 4 is less than 5, round down — keep the millions digit as 3 and replace all digits to the right with zeros.\nAnswer: 3 000 000.',
        },

        // ── Q9 Medium — rounding to the nearest ten thousand ─────────────────
        {
          difficulty: 'Medium',
          question: 'Round 7 845 320 to the nearest ten thousand.',
          answer: '7 850 000',
          checkMode: 'auto',
          correctAnswer: '7 850 000',
          explanation: 'The rounding digit is the ten thousands digit — it is 4. The digit to the right (thousands) is 5. Since 5 is 5 or more, round up — increase the ten thousands digit from 4 to 5 and replace all digits to the right with zeros.\nAnswer: 7 850 000.',
        },

        // ── Q10 Hard — reasoning about rounding ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle rounds 4 500 000 to the nearest million and gets 5 000 000. Is she correct? Explain.',
          answer: 'Yes — the hundred thousands digit is 5 so we round up. 4 500 000 rounded to the nearest million is 5 000 000.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing 3 847 215 positioned between 3 000 000 and 4 000 000 with the midpoint at 3 500 000 marked and an arrow pointing to 4 000 000 to illustrate rounding up with the rounding digit in blue and the deciding digit in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to round whole numbers to the nearest 10 100 1 000 10 000 100 000 and 1 000 000 using the colour coded digit to the right rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MULTIPLES AND FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-and-factors',
      title: 'Multiples and Factors',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('multiple')} of a number is what we get when we multiply that number by 1, 2, 3, 4 and so on. The ${bl('multiples')} of 3 are 3, 6, 9, 12, 15 and so on. A ${gr('factor')} of a number is any number that divides into it exactly with no remainder. The ${gr('factors')} of 12 are 1, 2, 3, 4, 6 and 12. The ${or('highest common factor (HCF)')} is the largest ${gr('factor')} that two numbers share. The ${re('lowest common multiple (LCM)')} is the smallest ${bl('multiple')} that two numbers share.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiples')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('factors')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('HCF')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('LCM')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Multiple</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of multiplying a number by 1, 2, 3, 4 and so on.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Any number that divides into another number exactly with no remainder.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Highest Common Factor (HCF)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest factor that two or more numbers share.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Lowest Common Multiple (LCM)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest multiple that two or more numbers share.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find factors ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to find all factors of a number</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Start from 1')}</strong> — Write 1 × the number. Both 1 and the number itself are always ${gr('factors')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Work upwards')}</strong> — Try 2, 3, 4, … in order. If the number divides exactly, both the divisor and the quotient are ${gr('factors')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Stop when factors meet')}</strong> — Stop when the two ${gr('factors')} in a pair are equal or cross over. List all ${gr('factors')} in ascending order.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">HCF and LCM in everyday life</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${or('HCF')} is useful when you want to split things into the largest equal groups possible. The ${re('LCM')} is useful when you want to find the first time two repeating events happen together at the same time.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'List all the factors of 36.',
          answer: `The ${gr('factors')} of 36 are ${gr('1, 2, 3, 4, 6, 9, 12, 18')} and ${gr('36')}`,
          steps: [
            `Find all numbers that divide into 36 exactly.`,
            `${gr('1')} × 36 = 36 — so ${gr('1')} and ${gr('36')} are factors.`,
            `${gr('2')} × 18 = 36 — so ${gr('2')} and ${gr('18')} are factors.`,
            `${gr('3')} × 12 = 36 — so ${gr('3')} and ${gr('12')} are factors.`,
            `${gr('4')} × 9 = 36 — so ${gr('4')} and ${gr('9')} are factors.`,
            `${gr('6')} × 6 = 36 — so ${gr('6')} is a factor (the pair meets here, so we stop).`,
            `<strong>The ${gr('factors')} of 36 are: ${gr('1, 2, 3, 4, 6, 9, 12, 18, 36')} ✓</strong>`,
          ],
        },
        {
          question: 'Find the HCF of 24 and 36.',
          answer: `The ${or('HCF')} of 24 and 36 is ${or('12')}`,
          steps: [
            `List the ${gr('factors')} of 24: ${gr('1, 2, 3, 4, 6, 8, 12, 24')}.`,
            `List the ${gr('factors')} of 36: ${gr('1, 2, 3, 4, 6, 9, 12, 18, 36')}.`,
            `Find the common factors — numbers that appear in <strong>both</strong> lists: ${or('1, 2, 3, 4, 6, 12')}.`,
            `The largest of these common ${gr('factors')} is ${or('12')}.`,
            `<strong>The ${or('HCF')} of 24 and 36 is ${or('12')} ✓</strong>`,
          ],
        },
        {
          question: 'Find the LCM of 4 and 6.',
          answer: `The ${re('LCM')} of 4 and 6 is ${re('12')}`,
          steps: [
            `List the ${bl('multiples')} of 4: ${bl('4, 8, 12, 16, 20, 24')}, …`,
            `List the ${bl('multiples')} of 6: ${bl('6, 12, 18, 24')}, …`,
            `Find the smallest ${bl('multiple')} that appears in <strong>both</strong> lists.`,
            `The smallest ${bl('multiple')} that appears in both lists is ${re('12')}.`,
            `<strong>The ${re('LCM')} of 4 and 6 is ${re('12')} ✓</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Easy — first five multiples ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'List the first 5 multiples of 7.',
          answer: '7, 14, 21, 28, 35',
          checkMode: 'auto',
          correctAnswer: '7, 14, 21, 28, 35',
          explanation: '7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\nFirst 5 multiples of 7: 7, 14, 21, 28, 35.',
        },

        // ── Q12 Medium — HCF ─────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the HCF of 18 and 30.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18.\nFactors of 30: 1, 2, 3, 5, 6, 10, 15, 30.\nCommon factors: 1, 2, 3, 6.\nThe largest common factor is 6.\nHCF of 18 and 30 = 6.',
        },

        // ── Q13 Hard — LCM ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the LCM of 6 and 8.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Multiples of 6: 6, 12, 18, 24, 30, …\nMultiples of 8: 8, 16, 24, 32, …\nThe smallest multiple that appears in both lists is 24.\nLCM of 6 and 8 = 24.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor pairs of 36 shown as multiplication pairs with each factor highlighted in green and a Venn diagram showing factors of 24 and 36 with common factors in orange in the overlapping section and HCF of 12 labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all factors of a number using factor pairs and how to find the HCF and LCM of two numbers using lists of factors and multiples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PRIME AND COMPOSITE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-and-composite-numbers',
      title: 'Prime and Composite Numbers',
      icon: '★',
      explanation:
        `<p style="margin-bottom:16px;">A ${gr('prime number')} is a number that has exactly two factors — 1 and itself. Examples of ${gr('prime numbers')} are ${gr('2')}, ${gr('3')}, ${gr('5')}, ${gr('7')}, ${gr('11')} and ${gr('13')}. The number 1 is not prime because it only has one factor. A ${re('composite number')} is a number that has more than two factors. Examples are ${re('4')}, ${re('6')}, ${re('8')}, ${re('9')} and ${re('10')}. Every ${re('composite number')} can be written as a product of ${or('prime numbers')} — this is called ${bl('prime factorisation')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('prime numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('composite numbers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('prime factors')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('product notation')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Prime number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with exactly two factors — 1 and itself. Examples: ${gr('2, 3, 5, 7, 11, 13')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Composite number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with more than two factors. Examples: ${re('4, 6, 8, 9, 10')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prime factorisation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Writing a ${re('composite number')} as a ${bl('product')} of its ${or('prime factors')}. Example: ${bl('36 = 2² × 3²')}.</p>` +
        `</div>` +

        `</div>` +

        // ── How to test for primality ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to test whether a number is prime</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Start from 2</strong> — Try dividing the number by each ${gr('prime')}: 2, 3, 5, 7, and so on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Use divisibility shortcuts</strong> — even numbers are divisible by ${or('2')}; if the digit sum is divisible by ${or('3')}, so is the number; if it ends in 0 or 5, it is divisible by ${or('5')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Stop when a factor is found</strong> — if any number divides in exactly, the number is ${re('composite')}. If no ${or('prime')} up to the square root divides in, the number is ${gr('prime')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: 1 is neither prime nor composite</p>` +
        `<p style="margin:0;color:#1e3a8a;">The number 1 has only one factor (itself), so it does not meet the definition of a ${gr('prime number')} or a ${re('composite number')}. The smallest ${gr('prime number')} is ${gr('2')} — the only even ${gr('prime')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 37 a prime number?',
          answer: `${gr('37')} is a ${gr('prime number')}`,
          steps: [
            `Check if any number other than 1 and 37 divides into 37 exactly.`,
            `Try ${or('2')} — 37 is odd, so ${or('2')} does not divide into 37.`,
            `Try ${or('3')} — digit sum: 3 + 7 = 10, which is not divisible by 3, so ${or('3')} does not divide into 37.`,
            `Try ${or('5')} — 37 does not end in 0 or 5, so ${or('5')} does not divide into 37.`,
            `Try ${or('7')} — ${or('7')} × 5 = 35, ${or('7')} × 6 = 42, so ${or('7')} does not divide exactly into 37.`,
            `Since no number divides evenly into 37, it is a ${gr('prime number')} ✓`,
          ],
        },
        {
          question: 'Write 36 as a product of its prime factors.',
          answer: `${bl('36 = 2 × 2 × 3 × 3 = 2² × 3²')}`,
          steps: [
            `Divide 36 by the smallest ${gr('prime')} — 36 ÷ ${or('2')} = 18.`,
            `Divide 18 by ${or('2')} — 18 ÷ ${or('2')} = 9.`,
            `Divide 9 by the next ${gr('prime')} — 9 ÷ ${or('3')} = 3.`,
            `Divide 3 by ${or('3')} — 3 ÷ ${or('3')} = 1.`,
            `The ${or('prime factors')} are ${or('2, 2, 3, 3')}.`,
            `Write the ${bl('product notation')}: ${bl('36 = 2 × 2 × 3 × 3 = 2² × 3²')} ✓`,
          ],
        },
        {
          question: 'List all prime numbers between 20 and 40.',
          answer: `The ${gr('prime numbers')} between 20 and 40 are ${gr('23')}, ${gr('29')}, ${gr('31')} and ${gr('37')}`,
          steps: [
            `Check each number — ${re('21')} = ${or('3')} × ${or('7')}, ${re('22')} = ${or('2')} × ${or('11')}, both ${re('composite')}.`,
            `${gr('23')} has no factors other than 1 and 23 — ${gr('prime')} ✓`,
            `${re('24')}, ${re('25')}, ${re('26')}, ${re('27')} and ${re('28')} are all ${re('composite')}.`,
            `${gr('29')} has no factors other than 1 and 29 — ${gr('prime')} ✓`,
            `${re('30')} is ${re('composite')}. ${gr('31')} has no factors other than 1 and 31 — ${gr('prime')} ✓`,
            `${re('32')}, ${re('33')}, ${re('34')}, ${re('35')} and ${re('36')} are all ${re('composite')}.`,
            `${gr('37')} has no factors other than 1 and 37 — ${gr('prime')} ✓`,
            `${re('38')} and ${re('39')} are ${re('composite')}.`,
            `The ${gr('prime numbers')} between 20 and 40 are ${gr('23')}, ${gr('29')}, ${gr('31')} and ${gr('37')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q14 Easy — prime or composite ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is 51 a prime number?',
          answer: 'no',
          checkMode: 'auto',
          correctAnswer: 'no',
          explanation: 'Test for factors: 51 ÷ 3 = 17 exactly (digit sum: 5 + 1 = 6, which is divisible by 3).\nSince 51 = 3 × 17, it has factors other than 1 and itself.\n51 is a composite number, not prime.',
        },

        // ── Q15 Hard — prime factorisation ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Write 48 as a product of its prime factors.',
          answer: '2 x 2 x 2 x 2 x 3',
          checkMode: 'auto',
          correctAnswer: '2 x 2 x 2 x 2 x 3',
          explanation: 'Divide by the smallest prime repeatedly:\n48 ÷ 2 = 24\n24 ÷ 2 = 12\n12 ÷ 2 = 6\n6 ÷ 2 = 3\n3 ÷ 3 = 1\nPrime factors: 2, 2, 2, 2, 3.\n48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor tree for 36 showing prime factorisation — 36 splits into 2 and 18 then 18 into 2 and 9 then 9 into 3 and 3 with prime factors highlighted in orange and the final product notation 2 squared times 3 squared in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between prime and composite numbers and demonstrating prime factorisation using a factor tree for 36 with colour coded prime factors in orange and product notation in blue" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — place value of a digit ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the place value of the digit 5 in 5 324 871?',
      answer: '5 000 000',
      checkMode: 'auto',
      correctAnswer: '5 000 000',
      explanation: 'Starting from the right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions. The digit 5 is the leftmost digit — it is in the millions place. Its value is 5 × 1 000 000 = 5 000 000.',
    },

    // ── Q2 Easy — expanded notation ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 4 302 715 in expanded notation.',
      answer: '4 000 000 + 300 000 + 2 000 + 700 + 10 + 5',
      checkMode: 'self',
    },

    // ── Q3 Medium — value of a digit in a 9-digit number ──────────────────────
    {
      difficulty: 'Medium',
      question: 'What is the value of the digit 8 in 348 921 076?',
      answer: '800 000 000',
      checkMode: 'auto',
      correctAnswer: '800 000 000',
      explanation: 'Locate the digit 8 in 348 921 076. Count positions from the right — it falls in the hundred millions place. Its value is 8 × 100 000 000 = 800 000 000.',
    },

    // ── Q4 Hard — reasoning about place value ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says the digit 6 in 267 431 has a value of 600. Is he correct? Explain.',
      answer: 'No — the digit 6 is in the ten thousands place so its value is 60 000 not 600.',
      checkMode: 'self',
    },

    // ── Q5 Easy — comparing two numbers ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Which is greater — 4 328 100 or 4 319 800?',
      answer: '4 328 100',
      checkMode: 'auto',
      correctAnswer: '4 328 100',
      explanation: 'Both numbers have 7 digits. Compare digit by digit from the left.\nMillions: both 4 — equal.\nHundred thousands: both 3 — equal.\nTen thousands: 2 vs 1 — since 2 > 1, the number 4 328 100 is greater.',
    },

    // ── Q6 Medium — descending order ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Arrange in descending order: 2 341 000, 987 234, 2 340 999, 15 000 000.',
      answer: '15 000 000, 2 341 000, 2 340 999, 987 234',
      checkMode: 'self',
    },

    // ── Q7 Hard — reasoning about comparing numbers ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says 9 999 999 is greater than 10 000 000 because 9 is greater than 1. Is she correct? Explain.',
      answer: 'No — we compare numbers by the number of digits first. 10 000 000 has 8 digits and 9 999 999 has 7 digits so 10 000 000 is greater.',
      checkMode: 'self',
    },

    // ── Q8 Easy — rounding to the nearest million ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Round 3 456 789 to the nearest million.',
      answer: '3 000 000',
      checkMode: 'auto',
      correctAnswer: '3 000 000',
      explanation: 'The rounding digit is the millions digit — it is 3. The digit to the right (hundred thousands) is 4. Since 4 is less than 5, round down — keep the millions digit as 3 and replace all digits to the right with zeros.\nAnswer: 3 000 000.',
    },

    // ── Q9 Medium — rounding to the nearest ten thousand ─────────────────────
    {
      difficulty: 'Medium',
      question: 'Round 7 845 320 to the nearest ten thousand.',
      answer: '7 850 000',
      checkMode: 'auto',
      correctAnswer: '7 850 000',
      explanation: 'The rounding digit is the ten thousands digit — it is 4. The digit to the right (thousands) is 5. Since 5 is 5 or more, round up — increase the ten thousands digit from 4 to 5 and replace all digits to the right with zeros.\nAnswer: 7 850 000.',
    },

    // ── Q10 Hard — reasoning about rounding ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle rounds 4 500 000 to the nearest million and gets 5 000 000. Is she correct? Explain.',
      answer: 'Yes — the hundred thousands digit is 5 so we round up. 4 500 000 rounded to the nearest million is 5 000 000.',
      checkMode: 'self',
    },

    // ── Q11 Easy — first five multiples ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'List the first 5 multiples of 7.',
      answer: '7, 14, 21, 28, 35',
      checkMode: 'auto',
      correctAnswer: '7, 14, 21, 28, 35',
      explanation: '7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\nFirst 5 multiples of 7: 7, 14, 21, 28, 35.',
    },

    // ── Q12 Medium — HCF ─────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the HCF of 18 and 30.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18.\nFactors of 30: 1, 2, 3, 5, 6, 10, 15, 30.\nCommon factors: 1, 2, 3, 6.\nThe largest common factor is 6.\nHCF of 18 and 30 = 6.',
    },

    // ── Q13 Hard — LCM ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the LCM of 6 and 8.',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: 'Multiples of 6: 6, 12, 18, 24, 30, …\nMultiples of 8: 8, 16, 24, 32, …\nThe smallest multiple that appears in both lists is 24.\nLCM of 6 and 8 = 24.',
    },

    // ── Q14 Easy — prime or composite ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is 51 a prime number?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
      explanation: 'Test for factors: 51 ÷ 3 = 17 exactly (digit sum: 5 + 1 = 6, which is divisible by 3).\nSince 51 = 3 × 17, it has factors other than 1 and itself.\n51 is a composite number, not prime.',
    },

    // ── Q15 Hard — prime factorisation ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Write 48 as a product of its prime factors.',
      answer: '2 x 2 x 2 x 2 x 3',
      checkMode: 'auto',
      correctAnswer: '2 x 2 x 2 x 2 x 3',
      explanation: 'Divide by the smallest prime repeatedly:\n48 ÷ 2 = 24\n24 ÷ 2 = 12\n12 ÷ 2 = 6\n6 ÷ 2 = 3\n3 ÷ 3 = 1\nPrime factors: 2, 2, 2, 2, 3.\n48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Outstanding! You have mastered whole numbers.' },
      { minScore: 12, message: 'Great work! You have a strong understanding of whole numbers.' },
      { minScore: 8, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! A perfect score — you have completely mastered whole numbers for Grade 6. Keep it up!' },
    { minScore: 12, message: 'Excellent work! You have a very strong grasp of whole numbers. Review any missed parts and you will have it perfect.' },
    { minScore: 8, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 4, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
