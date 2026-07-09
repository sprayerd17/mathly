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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Place value & expanded notation | 4-7 Comparing & ordering |
    // 8-10 Rounding off | 11-14 Multiples, factors, HCF & LCM |
    // 15-19 Prime & composite numbers, prime factorisation
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'What is the place value of the digit 6 in 6 481 203?', answer: '6 000 000', checkMode: 'auto', correctAnswer: '6 000 000', explanation: 'The digit 6 is the leftmost digit in this 7-digit number, so it is in the millions place.\nIts value is 6 × 1 000 000 = 6 000 000 ✓' },
        { difficulty: 'Easy', question: 'Write 528 694 371 in expanded notation.', answer: '500 000 000 + 20 000 000 + 8 000 000 + 600 000 + 90 000 + 4 000 + 300 + 70 + 1', checkMode: 'self', explanation: 'Each non-zero digit is written as its full value and added together: 5 in hundred millions = 500 000 000, 2 in ten millions = 20 000 000, 8 in millions = 8 000 000, 6 in hundred thousands = 600 000, 9 in ten thousands = 90 000, 4 in thousands = 4 000, 3 in hundreds = 300, 7 in tens = 70, 1 in units = 1.' },
        { difficulty: 'Easy', question: 'A number has a 4 in the hundred thousands place, a 7 in the thousands place, and zeros everywhere else, up to the hundred thousands. What number is it?', answer: '407 000', checkMode: 'auto', correctAnswer: '407 000', explanation: '4 in hundred thousands = 400 000. 7 in thousands = 7 000. All other digits are 0.\n400 000 + 7 000 = 407 000 ✓' },
        { difficulty: 'Easy', question: 'Palesa says the number 3 809 214 has 8 digits. Is she correct? Explain.', answer: 'No — 3 809 214 has only 7 digits: 3, 8, 0, 9, 2, 1, 4. Palesa miscounted.', checkMode: 'self', explanation: 'Counting the digits one at a time: 3-8-0-9-2-1-4 gives exactly 7 digits, not 8. It is easy to miscount when a number contains a zero, but the zero still only counts as one digit.' },
        { difficulty: 'Easy', question: 'Which is greater — 6 245 800 or 6 249 500?', answer: '6 249 500', checkMode: 'auto', correctAnswer: '6 249 500', explanation: 'Both numbers have 7 digits, so compare digit by digit from the left.\nMillions: both 6 — equal. Hundred thousands: both 2 — equal. Ten thousands: both 4 — equal.\nThousands: 5 vs 9 — since 9 > 5, the number 6 249 500 is greater ✓' },
        { difficulty: 'Easy', question: 'A farmer sold 84 500 kg of maize last season and 138 200 kg this season. In which season did he sell more?', answer: 'This season', checkMode: 'auto', correctAnswer: 'This season', correctAnswers: ['this season', 'This season (138 200 kg)'], explanation: '84 500 has 5 digits. 138 200 has 6 digits. A number with more digits is always larger, so 138 200 kg is more than 84 500 kg — this season had the greater sales ✓' },
        { difficulty: 'Easy', question: 'Bonga compares 45 678 and 9 999 999 and says 45 678 is bigger because it "looks like a normal number." Is he correct?', answer: 'No — 9 999 999 has 7 digits while 45 678 has only 5 digits. A number with more digits is always larger, so 9 999 999 is far bigger than 45 678.', checkMode: 'self', explanation: 'Counting digits: 45 678 has 5 digits, 9 999 999 has 7 digits. Since 9 999 999 has more digits, it must be the larger number, regardless of how the digits look. Bonga is incorrect.' },
        { difficulty: 'Easy', question: 'Order these numbers from smallest to largest: 512 300, 89 750, 512 030, 1 200 000.', answer: '89 750, 512 030, 512 300, 1 200 000', checkMode: 'auto', correctAnswer: '89 750, 512 030, 512 300, 1 200 000', explanation: 'Count digits: 89 750 has 5 digits (smallest). 512 300 and 512 030 each have 6 digits. 1 200 000 has 7 digits (largest).\nCompare the two 6-digit numbers: 512 300 vs 512 030 — hundreds place: 3 vs 0, so 512 030 < 512 300.\nOrder: 89 750, 512 030, 512 300, 1 200 000 ✓' },
        { difficulty: 'Medium', question: 'Round 68 432 915 to the nearest ten thousand.', answer: '68 430 000', checkMode: 'auto', correctAnswer: '68 430 000', explanation: 'The rounding digit is the ten thousands digit — it is 3. The digit to the right (thousands) is 2. Since 2 is less than 5, round down — keep the ten thousands digit as 3 and replace all digits to the right with zeros.\nAnswer: 68 430 000 ✓' },
        { difficulty: 'Medium', question: 'A stadium had an attendance of 45 728 spectators at a big match. Round this figure to the nearest thousand for the newspaper headline.', answer: '46 000', checkMode: 'auto', correctAnswer: '46 000', explanation: 'The rounding digit is the thousands digit — it is 5. The digit to the right (hundreds) is 7. Since 7 is 5 or more, round up — increase the thousands digit from 5 to 6.\nRounded attendance: 46 000 spectators ✓' },
        { difficulty: 'Medium', question: 'Thandeka rounds 82 500 to the nearest thousand and gets 82 000, saying "the hundreds digit is 5, so it stays the same." Is she correct?', answer: 'No — when the digit to the right is exactly 5, we round UP, not keep it the same. 82 500 rounded to the nearest thousand is 83 000.', checkMode: 'self', explanation: 'The rounding digit is the thousands digit (2). The digit to the right is 5, which falls under the "5 or more, round up" rule — it does not mean "stays the same". So 82 500 rounds up to 83 000, not down to 82 000. Thandeka made the classic boundary-5 mistake.' },
        { difficulty: 'Medium', question: 'A charity fundraiser collected R596 400. Round this amount to the nearest R10 000, then estimate how many R50 000 project grants that rounded amount could fund (ignore any remainder).', answer: 'R600 000, which could fund 12 grants', checkMode: 'auto', correctAnswer: 'R600 000, which could fund 12 grants', correctAnswers: ['R600 000, 12 grants', '600 000, 12', '12 grants'], explanation: 'Round 596 400 to the nearest 10 000: the rounding digit (ten thousands) is 9, the digit to the right (thousands) is 6, so round up — 596 400 → 600 000.\nR600 000 ÷ R50 000 = 12 grants ✓' },
        { difficulty: 'Medium-Hard', question: 'List the first 6 multiples of 9.', answer: '9, 18, 27, 36, 45, 54', checkMode: 'auto', correctAnswer: '9, 18, 27, 36, 45, 54', explanation: '9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27, 9 × 4 = 36, 9 × 5 = 45, 9 × 6 = 54\nFirst 6 multiples of 9: 9, 18, 27, 36, 45, 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'List all the factors of 40.', answer: '1, 2, 4, 5, 8, 10, 20, 40', checkMode: 'auto', correctAnswer: '1, 2, 4, 5, 8, 10, 20, 40', correctAnswers: ['1, 2, 4, 5, 8, 10, 20, 40', '1,2,4,5,8,10,20,40'], explanation: '40 ÷ 1 = 40, ÷2 = 20, ÷4 = 10, ÷5 = 8 (meet in the middle).\nFactors of 40: 1, 2, 4, 5, 8, 10, 20, 40 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two taxi routes leave the same rank together. Route A leaves every 15 minutes and Route B leaves every 20 minutes. After how many minutes will they next leave together?', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'This is an LCM problem: find the LCM of 15 and 20.\nMultiples of 15: 15, 30, 45, 60\nMultiples of 20: 20, 40, 60\nSmallest shared multiple: 60\nThey will next leave together after 60 minutes ✓' },
        { difficulty: 'Medium-Hard', question: 'Kagiso is finding the factors of 28. He lists 1, 2, 4, 7, 28 and stops. Has he found all the factors?', answer: 'No — he missed 14. The full list of factors of 28 is 1, 2, 4, 7, 14, 28.', checkMode: 'self', explanation: '28 ÷ 1 = 28, ÷2 = 14, ÷4 = 7 — so 14 must also be a factor since 4 × 7 = 28 already appears, but 14 (its matching pair with 2) was left out. Full list: 1, 2, 4, 7, 14, 28. Kagiso forgot to include the factor pair partner for 2.' },
        { difficulty: 'Hard', question: 'Is 59 a prime number? Justify your answer using divisibility tests for 2, 3 and 5.', answer: 'Yes, 59 is prime — it is not divisible by 2 (odd), not divisible by 3 (digit sum 5+9=14, not a multiple of 3), and not divisible by 5 (does not end in 0 or 5), and no other number below its square root divides in evenly.', checkMode: 'self', explanation: '59 is odd, so 2 does not divide it. Digit sum = 5 + 9 = 14, not divisible by 3. It does not end in 0 or 5, so 5 does not divide it. Checking up to its square root (about 7.7) — 7 does not divide 59 either (7 × 8 = 56, 7 × 9 = 63). So 59 is prime ✓' },
        { difficulty: 'Hard', question: 'Write 72 as a product of its prime factors, using index (exponent) notation.', answer: '2³ x 3²', checkMode: 'auto', correctAnswer: '2³ x 3²', correctAnswers: ['2³ x 3²', '2^3 x 3^2', '2³ × 3²', '2^3 × 3²'], explanation: '72 ÷ 2 = 36, 36 ÷ 2 = 18, 18 ÷ 2 = 9, 9 ÷ 3 = 3, 3 ÷ 3 = 1\nPrime factors: 2, 2, 2, 3, 3\n2 appears three times, 3 appears twice\n72 = 2³ × 3² ✓' },
        { difficulty: 'Hard', question: 'Zola says 1 is a prime number because "nothing else fits into it evenly except itself." Is she correct?', answer: 'No — 1 is neither prime nor composite. A prime number must have exactly TWO factors (1 and itself), but 1 only has ONE factor (itself), so it fails the definition of prime.', checkMode: 'self', explanation: 'A prime number is defined as having exactly two different factors: 1 and itself. For the number 1, those two would be the same number, giving only one factor in total. Since 1 does not have exactly two factors, it is excluded from being prime by definition — it is neither prime nor composite.' },
        { difficulty: 'Hard', question: 'Find the prime factorisation of both 60 and 84, then use them to state the HCF of 60 and 84.', answer: '60 = 2² x 3 x 5, 84 = 2² x 3 x 7, HCF = 12', checkMode: 'auto', correctAnswer: '60 = 2² x 3 x 5, 84 = 2² x 3 x 7, HCF = 12', correctAnswers: ['HCF = 12', '12'], explanation: '60 = 2 × 2 × 3 × 5 = 2² × 3 × 5\n84 = 2 × 2 × 3 × 7 = 2² × 3 × 7\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3¹)\nHCF = 2² × 3 = 4 × 3 = 12 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a rock-solid grip on whole numbers — place value, rounding, factors and primes. Keep it up!' },
        { minScore: 15, message: 'Great work! You clearly understand whole numbers — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on place value, rounding, factors and primes, then try this set again.' },
        { minScore: 0, message: "Keep going — every mathematician started somewhere! Work through the study guide again and retry this set." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'What is the value of the digit 4 in 245 678?', answer: '40 000', checkMode: 'auto', correctAnswer: '40 000', explanation: 'The digit 4 is in the ten thousands place of 245 678.\nIts value is 4 × 10 000 = 40 000 ✓' },
        { difficulty: 'Easy', question: 'Write 704 918 263 in expanded notation.', answer: '700 000 000 + 4 000 000 + 900 000 + 10 000 + 8 000 + 200 + 60 + 3', checkMode: 'self', explanation: '7 in hundred millions = 700 000 000, 0 in ten millions contributes nothing, 4 in millions = 4 000 000, 9 in hundred thousands = 900 000, 1 in ten thousands = 10 000, 8 in thousands = 8 000, 2 in hundreds = 200, 6 in tens = 60, 3 in units = 3.' },
        { difficulty: 'Easy', question: 'A number has a 9 in the ten millions place, a 3 in the hundreds place, and zeros everywhere else. What is the number?', answer: '90 000 300', checkMode: 'auto', correctAnswer: '90 000 300', explanation: '9 in ten millions = 90 000 000. 3 in hundreds = 300. All other digits are 0.\n90 000 000 + 300 = 90 000 300 ✓' },
        { difficulty: 'Easy', question: 'Mpho writes the number six million, forty thousand, five as 6 040 005. Is his number correct?', answer: 'Yes — 6 000 000 + 40 000 + 5 = 6 040 005, which matches "six million, forty thousand, five" exactly.', checkMode: 'self', explanation: 'Six million = 6 000 000. Forty thousand = 40 000. Five = 5. Adding these: 6 000 000 + 40 000 + 5 = 6 040 005. Mpho is correct — the zeros correctly hold the hundred thousands, thousands, hundreds and tens places.' },
        { difficulty: 'Easy', question: 'Which is smaller — 3 720 600 or 3 718 900?', answer: '3 718 900', checkMode: 'auto', correctAnswer: '3 718 900', explanation: 'Both numbers have 7 digits, so compare digit by digit from the left.\nMillions: both 3 — equal. Hundred thousands: both 7 — equal.\nTen thousands: 2 vs 1 — since 1 < 2, the number 3 718 900 is smaller ✓' },
        { difficulty: 'Easy', question: 'Town A has a population of 256 900 and Town B has a population of 98 400. Which town has more people?', answer: 'Town A', checkMode: 'auto', correctAnswer: 'Town A', correctAnswers: ['Town A (256 900)', 'town a'], explanation: '256 900 has 6 digits, while 98 400 has 5 digits. A number with more digits is always larger, so Town A (256 900) has more people than Town B (98 400) ✓' },
        { difficulty: 'Easy', question: 'Given 618 200 and 6 182 000, Reabetswe says these are basically the same number since the digits "6, 1, 8, 2" appear in both. Is she correct?', answer: 'No — 618 200 has 6 digits while 6 182 000 has 7 digits. Having the same leading digits does not make numbers equal; 6 182 000 is ten times bigger than 618 200.', checkMode: 'self', explanation: '618 200 has 6 digits, 6 182 000 has 7 digits — a number with more digits is always larger. In fact, 6 182 000 is exactly 10 times 618 200. Sharing leading digits is irrelevant to the size comparison; Reabetswe is incorrect.' },
        { difficulty: 'Easy', question: 'Order these numbers from largest to smallest: 74 300, 743 000, 74 030, 7 430 000.', answer: '7 430 000, 743 000, 74 300, 74 030', checkMode: 'auto', correctAnswer: '7 430 000, 743 000, 74 300, 74 030', explanation: 'Count digits: 7 430 000 has 7 digits (largest). 743 000 has 6 digits. 74 300 and 74 030 each have 5 digits.\nCompare the two 5-digit numbers: 74 300 vs 74 030 — tens place: 0 vs 3, so 74 300 > 74 030.\nOrder: 7 430 000, 743 000, 74 300, 74 030 ✓' },
        { difficulty: 'Medium', question: 'Round 245 678 to the nearest thousand.', answer: '246 000', checkMode: 'auto', correctAnswer: '246 000', explanation: 'The rounding digit is the thousands digit — it is 5. The digit to the right (hundreds) is 6. Since 6 is 5 or more, round up — increase the thousands digit from 5 to 6.\nAnswer: 246 000 ✓' },
        { difficulty: 'Medium', question: 'A school fundraising drive collected R823 456. Round this amount to the nearest R100 for the school newsletter.', answer: 'R823 500', checkMode: 'auto', correctAnswer: 'R823 500', explanation: 'The rounding digit is the hundreds digit — it is 4. The digit to the right (tens) is 5. Since 5 is 5 or more, round up — increase the hundreds digit from 4 to 5.\nRounded amount: R823 500 ✓' },
        { difficulty: 'Medium', question: 'Kagiso rounds 34 200 to the nearest ten thousand and gets 40 000, saying "the ten thousands digit is 3, so it definitely rounds up." Is he correct?', answer: 'No — 34 200 rounded to the nearest ten thousand is 30 000. The digit to the right of the ten thousands digit is 4 (thousands), and since 4 is less than 5, we round down, not up.', checkMode: 'self', explanation: 'The rounding digit is the ten thousands digit (3). The digit to the right is 4 (thousands), which is less than 5, so we round DOWN, keeping the ten thousands digit as 3: 34 200 → 30 000. Kagiso wrongly rounded in the wrong direction.' },
        { difficulty: 'Medium', question: 'A district recorded a population of 1 248 700 people at the last census. Round this to the nearest 100 000, then estimate how many schools of 5 000 learners each that rounded population could theoretically fill (ignore any remainder).', answer: '1 200 000, which could fill 240 schools', checkMode: 'auto', correctAnswer: '1 200 000, which could fill 240 schools', correctAnswers: ['1 200 000, 240 schools', '1 200 000, 240', '240 schools'], explanation: 'Round 1 248 700 to the nearest 100 000: the rounding digit (hundred thousands) is 2, the digit to the right (ten thousands) is 4, so round down — 1 248 700 → 1 200 000.\n1 200 000 ÷ 5 000 = 240 schools ✓' },
        { difficulty: 'Medium-Hard', question: 'List the first 6 multiples of 11.', answer: '11, 22, 33, 44, 55, 66', checkMode: 'auto', correctAnswer: '11, 22, 33, 44, 55, 66', explanation: '11 × 1 = 11, 11 × 2 = 22, 11 × 3 = 33, 11 × 4 = 44, 11 × 5 = 55, 11 × 6 = 66\nFirst 6 multiples of 11: 11, 22, 33, 44, 55, 66 ✓' },
        { difficulty: 'Medium-Hard', question: 'List all the factors of 32.', answer: '1, 2, 4, 8, 16, 32', checkMode: 'auto', correctAnswer: '1, 2, 4, 8, 16, 32', correctAnswers: ['1, 2, 4, 8, 16, 32', '1,2,4,8,16,32'], explanation: '32 ÷ 1 = 32, ÷2 = 16, ÷4 = 8 (meet in the middle).\nFactors of 32: 1, 2, 4, 8, 16, 32 ✓' },
        { difficulty: 'Medium-Hard', question: 'A baker has 36 muffins and 60 cupcakes. She wants to arrange them onto trays with the largest possible equal number of each item per tray, using everything with none left over. How many trays does she need?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'This is an HCF problem: find the HCF of 36 and 60.\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nFactors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\nCommon factors: 1, 2, 3, 4, 6, 12\nHCF = 12, so she needs 12 trays ✓' },
        { difficulty: 'Medium-Hard', question: 'Naledi says 6 is a factor of 42 but not a multiple of 42. Is she correct?', answer: 'Yes — 42 ÷ 6 = 7 exactly, so 6 is a factor of 42. But the multiples of 42 (42, 84, 126 …) are all much bigger than 6, so 6 is not a multiple of 42.', checkMode: 'self', explanation: '6 is a factor of 42 because 6 × 7 = 42 exactly, with no remainder. A multiple of 42 must be 42 times a whole number (42, 84, 126, …), and 6 is smaller than 42, so it cannot be a multiple of 42. Naledi is correct.' },
        { difficulty: 'Hard', question: 'Is 91 a prime number? Justify your answer using divisibility tests for 2, 3, 5 and 7.', answer: 'No, 91 is composite — it is not divisible by 2, 3 or 5, but 91 ÷ 7 = 13 exactly, so 7 and 13 are factors of 91 besides 1 and 91.', checkMode: 'self', explanation: '91 is odd (not divisible by 2). Digit sum = 9 + 1 = 10, not divisible by 3. Does not end in 0 or 5 (not divisible by 5). Testing 7: 7 × 13 = 91 exactly. Since 91 has factors other than 1 and itself, it is composite, not prime.' },
        { difficulty: 'Hard', question: 'Write 100 as a product of its prime factors, using index (exponent) notation.', answer: '2² x 5²', checkMode: 'auto', correctAnswer: '2² x 5²', correctAnswers: ['2² x 5²', '2^2 x 5^2', '2² × 5²', '2^2 × 5²'], explanation: '100 ÷ 2 = 50, 50 ÷ 2 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1\nPrime factors: 2, 2, 5, 5\n2 appears twice, 5 appears twice\n100 = 2² × 5² ✓' },
        { difficulty: 'Hard', question: 'Tumi says 21 is a prime number because it is odd and does not end in 0 or 5. Is he correct?', answer: 'No — 21 is composite. Although it is odd and does not end in 0 or 5, it is divisible by 3 and 7 (21 = 3 × 7), so it has more than two factors.', checkMode: 'self', explanation: 'Being odd only rules out divisibility by 2, and not ending in 0 or 5 only rules out divisibility by 5. Tumi forgot to check divisibility by 3: digit sum 2 + 1 = 3, which is divisible by 3, so 21 = 3 × 7. Since 21 has factors 1, 3, 7 and 21, it is composite, not prime.' },
        { difficulty: 'Hard', question: 'Find the prime factorisation of both 90 and 60, then use them to state the LCM of 90 and 60.', answer: '90 = 2 x 3² x 5, 60 = 2² x 3 x 5, LCM = 180', checkMode: 'auto', correctAnswer: '90 = 2 x 3² x 5, 60 = 2² x 3 x 5, LCM = 180', correctAnswers: ['LCM = 180', '180'], explanation: '90 = 2 × 3 × 3 × 5 = 2 × 3² × 5\n60 = 2 × 2 × 3 × 5 = 2² × 3 × 5\nAll prime factors using highest powers: 2² (from 60), 3² (from 90), 5¹ (shared)\nLCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently apply place value, rounding, factors and primes to a wide range of problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'What is the place value of the digit 3 in 812 356 940?', answer: '300 000', checkMode: 'auto', correctAnswer: '300 000', explanation: 'Counting from the right in 812 356 940, the digit 3 falls in the hundred thousands place.\nIts value is 3 × 100 000 = 300 000 ✓' },
        { difficulty: 'Easy', question: 'Write 390 062 508 in expanded notation.', answer: '300 000 000 + 90 000 000 + 60 000 + 2 000 + 500 + 8', checkMode: 'self', explanation: '3 in hundred millions = 300 000 000, 9 in ten millions = 90 000 000, 0 in millions contributes nothing, 0 in hundred thousands contributes nothing, 6 in ten thousands = 60 000, 2 in thousands = 2 000, 5 in hundreds = 500, 0 in tens contributes nothing, 8 in units = 8.' },
        { difficulty: 'Easy', question: 'A number has an 8 in the millions place, a 5 in the tens place, and zeros everywhere else. What is the number?', answer: '8 000 050', checkMode: 'auto', correctAnswer: '8 000 050', explanation: '8 in millions = 8 000 000. 5 in tens = 50. All other digits are 0.\n8 000 000 + 50 = 8 000 050 ✓' },
        { difficulty: 'Easy', question: 'Sizwe says that in the number 5 026 741, the zero has no value at all and can just be left out when writing the number. Is he correct?', answer: 'No — the zero holds the hundred thousands place. Removing it would change the number to 526 741, which is a completely different (and much smaller) number.', checkMode: 'self', explanation: 'While the zero itself contributes 0 × 100 000 = 0 to the expanded notation sum, it is essential as a placeholder to keep every other digit in its correct position. Removing it collapses the number to 526 741 (6 digits instead of 7), which is wrong. Sizwe is incorrect.' },
        { difficulty: 'Easy', question: 'Which is greater — 91 480 200 or 9 999 999?', answer: '91 480 200', checkMode: 'auto', correctAnswer: '91 480 200', explanation: '91 480 200 has 8 digits, while 9 999 999 has only 7 digits. A number with more digits is always larger, so 91 480 200 is greater ✓' },
        { difficulty: 'Easy', question: 'A company\'s annual budget is R2 450 000 and a competitor\'s budget is R980 600. Which company has the bigger budget?', answer: 'The first company', checkMode: 'auto', correctAnswer: 'The first company', correctAnswers: ['first company', 'R2 450 000'], explanation: 'R2 450 000 has 7 digits, while R980 600 has 6 digits. A number with more digits is always larger, so the first company\'s budget of R2 450 000 is bigger ✓' },
        { difficulty: 'Easy', question: 'Comparing 512 400 and 59 800, Vusi lines up the digits as "51" vs "59" and concludes 59 800 is bigger because 9 > 1. Is he correct?', answer: 'No — 512 400 has 6 digits while 59 800 has only 5 digits, so 512 400 is the bigger number. You must count digits first and only compare digit by digit when the numbers have the SAME number of digits.', checkMode: 'self', explanation: 'Vusi incorrectly lined up the digits without first counting how many digits each number has. 512 400 has 6 digits, 59 800 has 5 digits — since they have different digit counts, the one with more digits (512 400) is automatically larger, regardless of what the leading digits are.' },
        { difficulty: 'Easy', question: 'Order these numbers from smallest to largest: 6 003 200, 603 200, 6 030 200, 630 200.', answer: '603 200, 630 200, 6 003 200, 6 030 200', checkMode: 'auto', correctAnswer: '603 200, 630 200, 6 003 200, 6 030 200', explanation: 'Count digits: 603 200 and 630 200 each have 6 digits. 6 003 200 and 6 030 200 each have 7 digits.\nCompare the two 6-digit numbers: 603 200 vs 630 200 — ten thousands place: 0 vs 3, so 603 200 < 630 200.\nCompare the two 7-digit numbers: 6 003 200 vs 6 030 200 — hundred thousands place: 0 vs 3, so 6 003 200 < 6 030 200.\nOrder: 603 200, 630 200, 6 003 200, 6 030 200 ✓' },
        { difficulty: 'Medium', question: 'Round 5 648 219 to the nearest hundred thousand.', answer: '5 600 000', checkMode: 'auto', correctAnswer: '5 600 000', explanation: 'The rounding digit is the hundred thousands digit — it is 6. The digit to the right (ten thousands) is 4. Since 4 is less than 5, round down — keep the hundred thousands digit as 6.\nAnswer: 5 600 000 ✓' },
        { difficulty: 'Medium', question: 'A cross-country race covers a distance of 18 350 m. Round this distance to the nearest 100 m for the event poster.', answer: '18 400 m', checkMode: 'auto', correctAnswer: '18 400 m', correctAnswers: ['18 400', '18400 m'], explanation: 'The rounding digit is the hundreds digit — it is 3. The digit to the right (tens) is 5. Since 5 is 5 or more, round up — increase the hundreds digit from 3 to 4.\nRounded distance: 18 400 m ✓' },
        { difficulty: 'Medium', question: 'Anele rounds 7 499 999 to the nearest million and gets 7 000 000, saying "the number is less than 7 500 000, so it must round down." Is her reasoning and answer correct?', answer: 'Yes — the hundred thousands digit is 4, which is less than 5, so we round down. 7 499 999 rounded to the nearest million is indeed 7 000 000.', checkMode: 'self', explanation: 'The rounding digit is the millions digit (7). The digit to the right (hundred thousands) is 4, which is less than 5, so we round down, keeping the millions digit as 7: 7 499 999 → 7 000 000. Anele\'s reasoning and answer are both correct.' },
        { difficulty: 'Medium', question: 'A city recorded 912 345 678 litres of water used in a year across all households. Round this to the nearest million litres, then estimate how many years of 90 000 000 litres it would take at that rounded rate to reach that same total once (ignore any remainder).', answer: '912 000 000 litres, which is about 10 years at 90 000 000 litres a year', checkMode: 'auto', correctAnswer: '912 000 000 litres, which is about 10 years at 90 000 000 litres a year', correctAnswers: ['912 000 000, 10 years', '912 000 000 litres, 10 years', '10 years'], explanation: 'Round 912 345 678 to the nearest million: the rounding digit (millions) is 2, the digit to the right (hundred thousands) is 3, so round down — 912 345 678 → 912 000 000.\n912 000 000 ÷ 90 000 000 = 10.13…, so about 10 years ✓' },
        { difficulty: 'Medium-Hard', question: 'List the first 6 multiples of 13.', answer: '13, 26, 39, 52, 65, 78', checkMode: 'auto', correctAnswer: '13, 26, 39, 52, 65, 78', explanation: '13 × 1 = 13, 13 × 2 = 26, 13 × 3 = 39, 13 × 4 = 52, 13 × 5 = 65, 13 × 6 = 78\nFirst 6 multiples of 13: 13, 26, 39, 52, 65, 78 ✓' },
        { difficulty: 'Medium-Hard', question: 'List all the factors of 54.', answer: '1, 2, 3, 6, 9, 18, 27, 54', checkMode: 'auto', correctAnswer: '1, 2, 3, 6, 9, 18, 27, 54', correctAnswers: ['1, 2, 3, 6, 9, 18, 27, 54', '1,2,3,6,9,18,27,54'], explanation: '54 ÷ 1 = 54, ÷2 = 27, ÷3 = 18, ÷6 = 9 (meet in the middle).\nFactors of 54: 1, 2, 3, 6, 9, 18, 27, 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'A vendor has 45 oranges and 63 apples. She wants to pack identical fruit bags using all the fruit with none left over, giving each bag the largest possible equal share. How many bags can she make?', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'This is an HCF problem: find the HCF of 45 and 63.\nFactors of 45: 1, 3, 5, 9, 15, 45\nFactors of 63: 1, 3, 7, 9, 21, 63\nCommon factors: 1, 3, 9\nHCF = 9, so she can make 9 identical fruit bags ✓' },
        { difficulty: 'Medium-Hard', question: 'Does 8 have more factors than 9? List each set of factors to check.', answer: 'Yes — 8 has 4 factors (1, 2, 4, 8) while 9 has only 3 factors (1, 3, 9).', checkMode: 'self', explanation: 'Factors of 8: 1, 2, 4, 8 — that is 4 factors.\nFactors of 9: 1, 3, 9 — that is 3 factors.\nSince 4 > 3, the number 8 has more factors than 9.' },
        { difficulty: 'Hard', question: 'Is 83 a prime number? Justify your answer using divisibility tests for 2, 3, 5 and 7.', answer: 'Yes, 83 is prime — it is odd (not divisible by 2), digit sum 8+3=11 is not divisible by 3, it does not end in 0 or 5 (not divisible by 5), 83 ÷ 7 is not exact (7×11=77, 7×12=84), and checking up to its square root (about 9.1) is enough.', checkMode: 'self', explanation: '83 is odd, so 2 does not divide it. Digit sum = 8 + 3 = 11, not divisible by 3. Does not end in 0 or 5, so 5 does not divide it. Testing 7: 7 × 11 = 77, 7 × 12 = 84 — neither equals 83. Since the square root of 83 is about 9.1, we only need to check primes up to 9 (2, 3, 5, 7), and none divide evenly, so 83 is prime ✓' },
        { difficulty: 'Hard', question: 'Write 60 as a product of its prime factors, using index (exponent) notation.', answer: '2² x 3 x 5', checkMode: 'auto', correctAnswer: '2² x 3 x 5', correctAnswers: ['2² x 3 x 5', '2^2 x 3 x 5', '2² × 3 × 5', '2^2 × 3 × 5'], explanation: '60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1\nPrime factors: 2, 2, 3, 5\n2 appears twice, 3 and 5 appear once each\n60 = 2² × 3 × 5 ✓' },
        { difficulty: 'Hard', question: 'Given the number 62, Ntando says it must be prime because it does not appear in his 2, 3, 4, 5 times tables that he checked in his head. Is he correct?', answer: 'No — 62 is composite. It IS divisible by 2 (62 = 2 × 31), since it is an even number. Ntando made an error checking divisibility by 2 — any even number greater than 2 is automatically composite.', checkMode: 'self', explanation: '62 is an even number (it ends in 2), so it is divisible by 2: 62 = 2 × 31. Since 62 has factors 1, 2, 31 and 62 (more than just 1 and itself), it is composite, not prime. Ntando likely made a mental slip — any even number bigger than 2 can never be prime.' },
        { difficulty: 'Hard', question: 'Find the prime factorisation of both 36 and 54, then use them to state both the HCF and LCM of 36 and 54.', answer: '36 = 2² x 3², 54 = 2 x 3³, HCF = 18, LCM = 108', checkMode: 'auto', correctAnswer: '36 = 2² x 3², 54 = 2 x 3³, HCF = 18, LCM = 108', correctAnswers: ['HCF = 18, LCM = 108', 'HCF 18 LCM 108'], explanation: '36 = 2 × 2 × 3 × 3 = 2² × 3²\n54 = 2 × 3 × 3 × 3 = 2 × 3³\nHCF: shared primes at lowest power — 2¹ and 3² → HCF = 2 × 9 = 18\nLCM: all primes at highest power — 2² and 3³ → LCM = 4 × 27 = 108 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply place value, rounding, factors and primes to real-world problems and multi-step reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
