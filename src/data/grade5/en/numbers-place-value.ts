import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour palette for 6-digit place value ──────────────────────────────────
// Hundred Thousands — purple  (#7c3aed / bg #ede9fe / border #c4b5fd)
// Ten Thousands     — red     (#dc2626 / bg #fee2e2 / border #fca5a5)
// Thousands         — orange  (#ea580c / bg #ffedd5 / border #fed7aa)
// Hundreds          — yellow  (#ca8a04 / bg #fef9c3 / border #fde68a)
// Tens              — green   (#16a34a / bg #dcfce7 / border #86efac)
// Units             — blue    (#2563eb / bg #dbeafe / border #93c5fd)

const TABLE_HEADER = `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px"><table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr><th style="padding:9px 10px;background:#ede9fe;color:#7c3aed;border:2px solid #c4b5fd;font-weight:700;text-align:center">Hundred Thousands</th><th style="padding:9px 10px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Ten Thousands</th><th style="padding:9px 10px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Thousands</th><th style="padding:9px 10px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds</th><th style="padding:9px 10px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens</th><th style="padding:9px 10px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units</th></tr></thead>`

function tableRow(digits: string[], small = false): string {
  const p = small ? '8px 9px' : '11px 10px'
  const fs = small ? '1.1em' : '1.25em'
  const colours = [
    { bg: '#ede9fe', color: '#7c3aed', border: '#c4b5fd' },
    { bg: '#fee2e2', color: '#dc2626', border: '#fca5a5' },
    { bg: '#ffedd5', color: '#ea580c', border: '#fed7aa' },
    { bg: '#fef9c3', color: '#ca8a04', border: '#fde68a' },
    { bg: '#dcfce7', color: '#16a34a', border: '#86efac' },
    { bg: '#dbeafe', color: '#2563eb', border: '#93c5fd' },
  ]
  const cells = digits.map((d, i) => {
    const c = colours[i]
    return `<td style="padding:${p};background:${c.bg};color:${c.color};border:2px solid ${c.border};font-weight:800;font-size:${fs};text-align:center">${d}</td>`
  }).join('')
  return `<tbody><tr>${cells}</tr></tbody></table></div>`
}

const SMALL_HEADER = `<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:0.84em"><thead><tr><th style="padding:7px 9px;background:#ede9fe;color:#7c3aed;border:2px solid #c4b5fd;font-weight:700;text-align:center">Hundred Thousands</th><th style="padding:7px 9px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Ten Thousands</th><th style="padding:7px 9px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Thousands</th><th style="padding:7px 9px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds</th><th style="padding:7px 9px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens</th><th style="padding:7px 9px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units</th></tr></thead>`

// ─── Purple span helpers ──────────────────────────────────────────────────────
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Whole Numbers — Counting, Ordering and Place Value',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PLACE VALUE UP TO 6 DIGITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-6-digits',
      title: 'Place Value Up to 6 Digits',
      icon: '🔢',
      explanation:
        `<p>In Grade 5 we work with numbers up to <strong>100 000</strong> and beyond. Every digit in a number has a value that depends on its <strong>position</strong>. This is called <strong>place value</strong>. Moving one place to the left makes a digit <strong>ten times bigger</strong>.</p>` +
        `<p style="margin-top:14px">We use <strong>six columns</strong> in our place value table. Each column has its own colour — learn these colours because we use them in every example below:</p>` +
        TABLE_HEADER + tableRow(['4', '5', '3', '2', '7', '6']) +
        `<p style="margin-top:16px">The number shown is <strong>453 276</strong>. Here is what each digit is worth:</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.4">` +
        `<li>The ${pu('4')} is in the Hundred Thousands column → its value is ${pu('400 000')}</li>` +
        `<li>The ${re('5')} is in the Ten Thousands column → its value is ${re('50 000')}</li>` +
        `<li>The ${or('3')} is in the Thousands column → its value is ${or('3 000')}</li>` +
        `<li>The ${ye('2')} is in the Hundreds column → its value is ${ye('200')}</li>` +
        `<li>The ${gr('7')} is in the Tens column → its value is ${gr('70')}</li>` +
        `<li>The ${bl('6')} is in the Units column → its value is ${bl('6')}</li>` +
        `</ul>` +
        `<p style="margin-top:18px">We can write this in <strong>expanded notation</strong> — splitting the number to show the value of every digit:</p>` +
        `<p style="margin-top:10px;font-size:1.05em;padding:10px 0">453 276 &nbsp;=&nbsp; ${pu('400 000')} &nbsp;+&nbsp; ${re('50 000')} &nbsp;+&nbsp; ${or('3 000')} &nbsp;+&nbsp; ${ye('200')} &nbsp;+&nbsp; ${gr('70')} &nbsp;+&nbsp; ${bl('6')}</p>`,
      workedExamples: [
        {
          question: 'Write 806 054 in a place value table and in expanded notation. Show every step.',
          answer:
            `${pu('800 000')} + ${re('0')} + ${or('6 000')} + ${ye('0')} + ${gr('50')} + ${bl('4')}`,
          steps: [
            `Place each digit of 806 054 in the correct column:<br><br>` +
            SMALL_HEADER + tableRow(['8', '0', '6', '0', '5', '4'], true),

            `${pu('8')} is in the Hundred Thousands column → its value is ${pu('800 000')}.`,

            `${re('0')} is in the Ten Thousands column → its value is ${re('0')} (there are no ten thousands in this number).`,

            `${or('6')} is in the Thousands column → its value is ${or('6 000')}.`,

            `${ye('0')} is in the Hundreds column → its value is ${ye('0')} (there are no hundreds in this number).`,

            `${gr('5')} is in the Tens column → its value is ${gr('50')}.`,

            `${bl('4')} is in the Units column → its value is ${bl('4')}.`,

            `Write in expanded notation: ${pu('800 000')} + ${re('0')} + ${or('6 000')} + ${ye('0')} + ${gr('50')} + ${bl('4')} = 806 054.`,
          ],
        },
        {
          question: 'What is the value of the digit 7 in 374 812?',
          answer: `The value of 7 is ${re('70 000')}`,
          steps: [
            `<strong>Step 1 — Place 374 812 in the place value table to find where 7 sits:</strong><br><br>` +
            SMALL_HEADER + tableRow(['3', '7', '4', '8', '1', '2'], true),

            `<strong>Step 2 — Read off the column.</strong> The digit ${re('7')} is in the ${re('Ten Thousands')} column.`,

            `<strong>Step 3 — Work out the value.</strong> A digit in the Ten Thousands column is worth digit × 10 000. So ${re('7')} × 10 000 = ${re('70 000')}.`,

            `<strong>Answer:</strong> The value of the digit 7 in 374 812 is ${re('70 000')}.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Place value table showing 453 276 with each digit colour coded in its column — hundred thousands purple, ten thousands red, thousands orange, hundreds yellow, tens green, units blue',
      videoPlaceholder:
        'Short video explaining place value of 6-digit numbers using a colour coded place value table',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COUNTING FORWARDS AND BACKWARDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-forwards-backwards',
      title: 'Counting Forwards and Backwards',
      icon: '↔️',
      explanation:
        `<p>In Grade 5 we count in <strong>larger intervals</strong> than Grade 4. An <span style="color:#dc2626;font-weight:700">interval</span> is the size of the jump between numbers. Each new number in the <span style="color:#2563eb;font-weight:700">pattern</span> is found by adding (counting forwards) or subtracting (counting backwards) the same interval.</p>` +
        `<p style="margin-top:16px"><strong>We count in these intervals:</strong></p>` +
        `<div style="margin-top:12px;padding:14px 18px;background:#eff6ff;border-radius:10px;border:2px solid #bfdbfe">` +
        `<p style="font-weight:700;margin-bottom:8px;color:#0f1f3d">Revision from Grade 4</p>` +
        `<ul style="margin-left:20px;list-style:disc;line-height:2.6">` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">2s</span>: <span style="color:#2563eb;font-weight:700">2, 4, 6, 8, 10, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">3s</span>: <span style="color:#2563eb;font-weight:700">3, 6, 9, 12, 15, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">4s</span>: <span style="color:#2563eb;font-weight:700">4, 8, 12, 16, 20, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">5s</span>: <span style="color:#2563eb;font-weight:700">5, 10, 15, 20, 25, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">10s</span>: <span style="color:#2563eb;font-weight:700">10, 20, 30, 40, 50, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">100s</span>: <span style="color:#2563eb;font-weight:700">100, 200, 300, 400, 500, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">1 000s</span>: <span style="color:#2563eb;font-weight:700">1 000, 2 000, 3 000, 4 000, 5 000, …</span></li>` +
        `</ul>` +
        `</div>` +
        `<div style="margin-top:14px;padding:14px 18px;background:#fef2f2;border-radius:10px;border:2px solid #fca5a5">` +
        `<p style="font-weight:700;margin-bottom:8px;color:#dc2626">New in Grade 5</p>` +
        `<ul style="margin-left:20px;list-style:disc;line-height:2.6">` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">10 000s</span>: <span style="color:#2563eb;font-weight:700">10 000, 20 000, 30 000, 40 000, 50 000, …</span></li>` +
        `<li>Count in <span style="color:#dc2626;font-weight:700">100 000s</span>: <span style="color:#2563eb;font-weight:700">100 000, 200 000, 300 000, 400 000, 500 000, …</span></li>` +
        `</ul>` +
        `</div>` +
        `<p style="margin-top:16px">To continue a pattern, find the <span style="color:#dc2626;font-weight:700">interval</span> first — subtract any term from the one after it. Then keep adding or subtracting that <span style="color:#dc2626;font-weight:700">interval</span> to get the next numbers in the <span style="color:#2563eb;font-weight:700">pattern</span>.</p>`,
      workedExamples: [
        {
          question: 'Count forwards in 10 000s starting from 30 000. Write the next 5 numbers.',
          answer:
            `${bl('40 000')}, ${bl('50 000')}, ${bl('60 000')}, ${bl('70 000')}, ${bl('80 000')}`,
          steps: [
            `<strong>Step 1 — Identify the interval.</strong> We are counting in <span style="color:#dc2626;font-weight:700">10 000s</span> forwards, so the interval is <span style="color:#dc2626;font-weight:700">+10 000</span>.`,
            `<strong>Step 2 — Add the interval to each term:</strong><br>30 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">40 000</span>`,
            `40 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">50 000</span>`,
            `50 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">60 000</span>`,
            `60 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">70 000</span>`,
            `70 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">80 000</span>`,
            `<strong>Answer: </strong><span style="color:#2563eb;font-weight:700">40 000, 50 000, 60 000, 70 000, 80 000</span>`,
          ],
        },
        {
          question: 'Count backwards in 100 000s starting from 700 000. Write the next 4 numbers.',
          answer:
            `${bl('600 000')}, ${bl('500 000')}, ${bl('400 000')}, ${bl('300 000')}`,
          steps: [
            `<strong>Step 1 — Identify the interval.</strong> We are counting in <span style="color:#dc2626;font-weight:700">100 000s</span> backwards, so the interval is <span style="color:#dc2626;font-weight:700">−100 000</span>.`,
            `<strong>Step 2 — Subtract the interval from each term:</strong><br>700 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">600 000</span>`,
            `600 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">500 000</span>`,
            `500 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">400 000</span>`,
            `400 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">300 000</span>`,
            `<strong>Answer: </strong><span style="color:#2563eb;font-weight:700">600 000, 500 000, 400 000, 300 000</span>`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REPRESENTING NUMBERS ON A NUMBER LINE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'number-line',
      title: 'Representing Numbers on a Number Line',
      icon: '📏',
      explanation:
        `<p>Large numbers can be shown on a <strong>number line</strong>. A number line has <span style="color:#2563eb;font-weight:700">marked intervals</span> placed at equal distances apart. To place a number that falls between two markers, you <strong>estimate</strong> its <span style="color:#16a34a;font-weight:700">position</span> by working out how far it sits between those two marked intervals.</p>` +
        `<p style="margin-top:16px"><strong>How to place a number on a number line:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Find the two nearest <span style="color:#2563eb;font-weight:700">marked intervals</span> on either side of your number.</li>` +
        `<li>Work out how far your number is from each of those two markers.</li>` +
        `<li>Mark its <span style="color:#16a34a;font-weight:700">estimated position</span> in the right spot between the two markers.</li>` +
        `</ol>` +
        `<p style="margin-top:14px">A useful shortcut: if your number is <strong>exactly halfway</strong> between two markers, place it right in the middle of that gap. The halfway point between two numbers is found by adding them and dividing by 2.</p>`,
      workedExamples: [
        {
          question: 'A number line goes from 0 to 100 000 in intervals of 10 000. Where does 65 000 sit?',
          answer:
            `${gr('65 000')} sits exactly halfway between ${bl('60 000')} and ${bl('70 000')}`,
          steps: [
            `<strong>Step 1 — Find the nearest marked intervals.</strong> The <span style="color:#2563eb;font-weight:700">marked intervals</span> on this number line are 0, 10 000, 20 000, 30 000, … 60 000, 70 000, … 100 000. The number 65 000 falls between <span style="color:#2563eb;font-weight:700">60 000</span> and <span style="color:#2563eb;font-weight:700">70 000</span>.`,
            `<strong>Step 2 — Find the halfway point.</strong> Halfway between <span style="color:#2563eb;font-weight:700">60 000</span> and <span style="color:#2563eb;font-weight:700">70 000</span>:<br>(60 000 + 70 000) ÷ 2 = 130 000 ÷ 2 = <span style="color:#16a34a;font-weight:700">65 000</span>.`,
            `<strong>Step 3 — Conclude.</strong> Because 65 000 equals the halfway point exactly, it sits right in the middle of the gap.`,
            `<strong>Answer:</strong> <span style="color:#16a34a;font-weight:700">65 000</span> sits exactly halfway between <span style="color:#2563eb;font-weight:700">60 000</span> and <span style="color:#2563eb;font-weight:700">70 000</span>.`,
          ],
        },
        {
          question: 'A number line goes from 40 000 to 50 000 in intervals of 1 000. Where does 46 500 sit?',
          answer:
            `${gr('46 500')} sits exactly halfway between ${bl('46 000')} and ${bl('47 000')}`,
          steps: [
            `<strong>Step 1 — Find the nearest marked intervals.</strong> The <span style="color:#2563eb;font-weight:700">marked intervals</span> are 40 000, 41 000, 42 000, … 46 000, 47 000, … 50 000. The number 46 500 falls between <span style="color:#2563eb;font-weight:700">46 000</span> and <span style="color:#2563eb;font-weight:700">47 000</span>.`,
            `<strong>Step 2 — Find the halfway point.</strong> Halfway between <span style="color:#2563eb;font-weight:700">46 000</span> and <span style="color:#2563eb;font-weight:700">47 000</span>:<br>(46 000 + 47 000) ÷ 2 = 93 000 ÷ 2 = <span style="color:#16a34a;font-weight:700">46 500</span>.`,
            `<strong>Step 3 — Conclude.</strong> Because 46 500 equals the halfway point exactly, it sits right in the middle of the gap.`,
            `<strong>Answer:</strong> <span style="color:#16a34a;font-weight:700">46 500</span> sits exactly halfway between <span style="color:#2563eb;font-weight:700">46 000</span> and <span style="color:#2563eb;font-weight:700">47 000</span>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Number line from 0 to 100 000 in intervals of 10 000 with 65 000 marked halfway between 60 000 and 70 000',
      videoPlaceholder:
        'Short video showing how to place large numbers on a number line by finding the nearest interval markers and estimating position',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING, ORDERING AND ROUNDING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-rounding',
      title: 'Comparing, Ordering and Rounding',
      icon: '⚖️',
      explanation:
        `<p>To <strong>compare</strong> two numbers, always start at the <strong>highest place value column</strong> and work right, one column at a time, until you find two digits that are different. That is the <strong>deciding column</strong>. We show the deciding digit in <span style="color:#dc2626;font-weight:700">red</span> and equal digits already checked in <span style="color:#2563eb;font-weight:700">blue</span>.</p>` +
        `<p style="margin-top:14px">Use these symbols to write your answer:</p>` +
        `<ul style="margin-top:8px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li><strong>&lt;</strong> &nbsp;means <strong>less than</strong> &nbsp;— the open mouth always faces the bigger number</li>` +
        `<li><strong>&gt;</strong> &nbsp;means <strong>greater than</strong></li>` +
        `<li><strong>=</strong> &nbsp;means <strong>equal to</strong></li>` +
        `</ul>` +
        `<p style="margin-top:16px"><strong>To order a list of numbers from smallest to biggest:</strong></p>` +
        `<p style="margin-top:8px"><strong>Step 1</strong> — Sort by number of digits. Fewer digits = smaller number. A 4-digit number is always smaller than a 5-digit number.</p>` +
        `<p style="margin-top:6px"><strong>Step 2</strong> — Numbers with the same digit count: compare from the highest column. Find the deciding column to rank them.</p>` +
        `<div style="margin-top:24px;padding-top:20px;border-top:2px solid #e2e8f0">` +
        `<p style="font-size:1.05em;font-weight:700;color:#0f1f3d">Rounding Off</p>` +
        `<p style="margin-top:10px">The same rule from Grade 4 applies to larger numbers. Find the <strong>deciding digit</strong> — the digit <em>immediately to the right</em> of the column you are rounding to.</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Deciding digit <strong>0 – 4</strong> → <strong>round down</strong> (the rounding column stays the same)</li>` +
        `<li>Deciding digit <strong>5 – 9</strong> → <strong>round up</strong> (add 1 to the rounding column)</li>` +
        `<li>Replace all digits to the right of the rounding column with <strong>0</strong></li>` +
        `</ul>` +
        `<p style="margin-top:14px">The deciding digit is shown in the colour of its place value column:</p>` +
        `<ul style="margin-top:8px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Nearest <strong>1 000</strong> → look at the <span style="color:#ca8a04;font-weight:700">hundreds digit (yellow)</span></li>` +
        `<li>Nearest <strong>10 000</strong> → look at the <span style="color:#ea580c;font-weight:700">thousands digit (orange)</span></li>` +
        `</ul>` +
        `</div>`,
      workedExamples: [
        // ── WE3: Compare 74 382 and 74 529 ───────────────────────────────────
        {
          question: 'Compare 74 382 and 74 529. Which is bigger? Write your answer using &lt; or &gt;.',
          answer:
            `74 529 is bigger. &nbsp; <span style="color:#2563eb;font-weight:700">74</span> <span style="color:#dc2626;font-weight:700">3</span>82 &lt; <span style="color:#2563eb;font-weight:700">74</span> <span style="color:#dc2626;font-weight:700">5</span>29`,
          steps: [
            `<strong>Step 1 — Count the digits:</strong> 74 382 has 5 digits and 74 529 has 5 digits. Same number of digits — compare from the highest column.`,
            `<strong>Step 2 — Ten thousands:</strong> ${bl('7')}4 382 vs ${bl('7')}4 529. Both have ${bl('7')} — equal. Move right.`,
            `<strong>Step 3 — Thousands:</strong> ${bl('7')}${bl('4')} 382 vs ${bl('7')}${bl('4')} 529. Both have ${bl('4')} — equal. Move right.`,
            `<strong>Step 4 — Hundreds (deciding column):</strong> ${bl('7')}${bl('4')} ${re('3')}82 vs ${bl('7')}${bl('4')} ${re('5')}29. The digits are ${re('3')} and ${re('5')}. Since ${re('3')} &lt; ${re('5')}, the number 74 382 is smaller.`,
            `<strong>Answer:</strong> 74 529 is bigger. Write as: ${bl('74')} ${re('3')}82 &lt; ${bl('74')} ${re('5')}29.`,
          ],
        },

        // ── WE4: Order from smallest to biggest ──────────────────────────────
        {
          question: 'Order from smallest to biggest: 52 341, &nbsp;9 876, &nbsp;52 099, &nbsp;100 452.',
          answer: '9 876 &nbsp; &lt; &nbsp; 52 099 &nbsp; &lt; &nbsp; 52 341 &nbsp; &lt; &nbsp; 100 452',
          steps: [
            `<strong>Step 1 — Count the digits in each number:</strong><br>• 9 876 → 4 digits (fewest digits = smallest number)<br>• 52 341 → 5 digits<br>• 52 099 → 5 digits<br>• 100 452 → 6 digits (most digits = biggest number)`,
            `<strong>Step 2 — Place the 4-digit and 6-digit numbers:</strong> 9 876 is smallest and 100 452 is biggest. The two 5-digit numbers (52 341 and 52 099) sit in between.`,
            `<strong>Step 3 — Compare the two 5-digit numbers:</strong><br>52 341 vs 52 099.<br>Ten thousands: ${bl('5')} vs ${bl('5')} — equal. Move right.<br>Thousands: ${bl('5')}${bl('2')} vs ${bl('5')}${bl('2')} — equal. Move right.<br>Hundreds: ${bl('52')} ${re('3')}41 vs ${bl('52')} ${re('0')}99. The digits are ${re('3')} and ${re('0')}. Since ${re('0')} &lt; ${re('3')}, the number 52 099 is smaller.`,
            `<strong>Answer:</strong> 9 876 &nbsp;&lt;&nbsp; 52 099 &nbsp;&lt;&nbsp; 52 341 &nbsp;&lt;&nbsp; 100 452.`,
          ],
        },

        // ── WE5: Round 47 836 to nearest 1 000 ───────────────────────────────
        {
          question: 'Round 47 836 to the nearest 1 000.',
          answer: '48 000',
          steps: [
            `<strong>Step 1 — Identify the deciding digit.</strong> We are rounding to the nearest 1 000, so we look at the digit one place to the right — the ${ye('hundreds digit')}. In 47 836, the hundreds digit is ${ye('8')}.`,
            `<strong>Step 2 — Apply the rounding rule.</strong> The deciding digit is ${ye('8')}. Because 8 is 5 or more, we <strong>round up</strong> — add 1 to the thousands digit.`,
            `<strong>Step 3 — Calculate.</strong> The thousands digit is 7. Add 1: 7 + 1 = 8. Replace all digits to the right of the thousands column with 0.`,
            `<strong>Answer: 48 000.</strong>`,
          ],
        },

        // ── WE6: Round 234 500 to nearest 10 000 ─────────────────────────────
        {
          question: 'Round 234 500 to the nearest 10 000.',
          answer: '230 000',
          steps: [
            `<strong>Step 1 — Identify the deciding digit.</strong> We are rounding to the nearest 10 000, so we look at the digit one place to the right — the ${or('thousands digit')}. In 234 500, the thousands digit is ${or('4')}.`,
            `<strong>Step 2 — Apply the rounding rule.</strong> The deciding digit is ${or('4')}. Because 4 is less than 5, we <strong>round down</strong> — the ten thousands digit stays the same.`,
            `<strong>Step 3 — Calculate.</strong> The ten thousands digit stays as 3. Replace all digits to the right of the ten thousands column with 0.`,
            `<strong>Answer: 230 000.</strong>`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to compare, order and round large numbers up to 100 000 using place value',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MULTIPLES AND FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-factors',
      title: 'Multiples and Factors',
      icon: '🧮',
      explanation:
        `<p>A <strong>multiple</strong> is the result of multiplying a number by any whole number. Multiples are the numbers you say when you count in a times table.</p>` +
        `<p style="margin-top:12px">Multiples of ${re('6')}:</p>` +
        `<p style="margin-top:6px;padding:10px 16px;background:#eff6ff;border-radius:8px;font-size:1.02em;line-height:2">${bl('6')}, ${bl('12')}, ${bl('18')}, ${bl('24')}, ${bl('30')}, ${bl('36')}, …</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>A number has <strong>infinitely many</strong> multiples — the list never ends.</li>` +
        `<li>The <strong>first multiple</strong> of any number is the number itself (${re('6')} × 1 = ${bl('6')}).</li>` +
        `</ul>` +
        `<div style="margin-top:22px;padding-top:18px;border-top:2px solid #e2e8f0">` +
        `<p>A <strong>factor</strong> of a number is a number that divides into it <strong>exactly with no remainder</strong>.</p>` +
        `<p style="margin-top:12px">Factors of ${re('24')}:</p>` +
        `<p style="margin-top:6px;padding:10px 16px;background:#f0fdf4;border-radius:8px;font-size:1.02em;line-height:2">${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('8')}, ${gr('12')}, ${gr('24')}</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Every number has at least <strong>two factors</strong>: 1 and itself.</li>` +
        `<li>To find all factors: divide the number by 1, 2, 3, 4, … in order and write down every number that divides with <strong>no remainder</strong>.</li>` +
        `</ul>` +
        `</div>`,
      workedExamples: [
        // ── WE7: Factors of 36 ────────────────────────────────────────────────
        {
          question: 'Find all the factors of 36.',
          answer:
            `Factors of ${re('36')}: ${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('9')}, ${gr('12')}, ${gr('18')}, ${gr('36')}`,
          steps: [
            `<strong>Divide ${re('36')} by 1:</strong> &nbsp;36 ÷ 1 = 36 exactly ✓ &nbsp;→ ${gr('1')} and ${gr('36')} are both factors (1 × 36 = 36).`,
            `<strong>Divide ${re('36')} by 2:</strong> &nbsp;36 ÷ 2 = 18 exactly ✓ &nbsp;→ ${gr('2')} and ${gr('18')} are both factors (2 × 18 = 36).`,
            `<strong>Divide ${re('36')} by 3:</strong> &nbsp;36 ÷ 3 = 12 exactly ✓ &nbsp;→ ${gr('3')} and ${gr('12')} are both factors (3 × 12 = 36).`,
            `<strong>Divide ${re('36')} by 4:</strong> &nbsp;36 ÷ 4 = 9 exactly ✓ &nbsp;→ ${gr('4')} and ${gr('9')} are both factors (4 × 9 = 36).`,
            `<strong>Divide ${re('36')} by 5:</strong> &nbsp;36 ÷ 5 = 7.2 ✗ &nbsp;→ 5 is not a factor (there is a remainder).`,
            `<strong>Divide ${re('36')} by 6:</strong> &nbsp;36 ÷ 6 = 6 exactly ✓ &nbsp;→ ${gr('6')} is a factor. We stop here because 6 × 6 = 36 — we have now paired up all the factors.`,
            `<strong>Answer — all factors of ${re('36')} in order:</strong> ${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('9')}, ${gr('12')}, ${gr('18')}, ${gr('36')}.`,
          ],
        },

        // ── WE8: Is 7 a factor of 56? ─────────────────────────────────────────
        {
          question: 'Is 7 a factor of 56?',
          answer: `Yes — ${gr('7')} is a factor of ${re('56')} because 56 ÷ 7 = 8 with no remainder.`,
          steps: [
            `<strong>Step 1 — Divide ${re('56')} by 7:</strong> &nbsp;56 ÷ 7 = 8. Check: 7 × 8 = 56 exactly ✓ — no remainder.`,
            `<strong>Step 2 — Conclude:</strong> Because ${re('56')} ÷ ${gr('7')} leaves no remainder, ${gr('7')} divides into ${re('56')} exactly.`,
            `<strong>Answer:</strong> Yes, ${gr('7')} is a factor of ${re('56')}. We can also write this as ${gr('7')} × 8 = ${re('56')}.`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PRIME NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-numbers',
      title: 'Prime Numbers',
      icon: '⭐',
      explanation:
        `<p>A <strong>prime number</strong> is a number that has <strong>exactly 2 factors</strong> — 1 and itself. That is all. Nothing else divides into it exactly.</p>` +
        `<p style="margin-top:12px">Examples of prime numbers: ${bl('2')}, ${bl('3')}, ${bl('5')}, ${bl('7')}, ${bl('11')}, ${bl('13')}</p>` +
        `<p style="margin-top:16px">A <strong>composite number</strong> has <strong>more than 2 factors</strong> — other numbers also divide into it exactly.</p>` +
        `<p style="margin-top:10px">Examples of composite numbers: ${re('4')} (factors: 1, 2, 4) &nbsp;·&nbsp; ${re('9')} (factors: 1, 3, 9) &nbsp;·&nbsp; ${re('15')} (factors: 1, 3, 5, 15)</p>` +
        `<p style="margin-top:16px">The number <strong>1</strong> is <strong>neither prime nor composite</strong>. It has only one factor (itself), so it does not fit either definition.</p>` +
        `<p style="margin-top:20px;font-weight:700;color:#0f1f3d">All prime numbers up to 100:</p>` +
        `<p style="margin-top:8px;padding:12px 16px;background:#eff6ff;border-radius:8px;line-height:2.4;font-size:0.97em">${[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97].map(n => bl(String(n))).join(', ')}</p>` +
        `<p style="margin-top:16px">💡 ${bl('2')} is the <strong>only even prime number</strong>. Every other even number has 2 as a factor — which gives it at least 3 factors — so all other even numbers are composite.</p>`,
      workedExamples: [
        // ── WE9: Is 47 prime? ─────────────────────────────────────────────────
        {
          question: 'Is 47 a prime number?',
          answer: `Yes — ${bl('47')} is a prime number. Its only factors are 1 and 47.`,
          steps: [
            `<strong>Step 1 — What to check:</strong> A prime number has no factors between 2 and itself. We only need to test divisors up to the square root of 47 (which is about 6.8), so we check 2, 3, 5 and 7.`,
            `<strong>Step 2 — Test each divisor:</strong><br>47 ÷ 2 = 23.5 &nbsp;✗ (not exact)<br>47 ÷ 3 = 15.67 ✗ (not exact)<br>47 ÷ 5 = 9.4 &nbsp;&nbsp;✗ (not exact)<br>47 ÷ 7 = 6.7 &nbsp;&nbsp;✗ (not exact)`,
            `<strong>Step 3 — Conclude:</strong> No number between 2 and 7 divides into 47 exactly. So 47 has no factors other than 1 and 47.`,
            `<strong>Answer:</strong> Yes, ${bl('47')} is a prime number — its only factors are 1 and 47.`,
          ],
        },

        // ── WE10: Is 51 prime? ────────────────────────────────────────────────
        {
          question: 'Is 51 a prime number?',
          answer: `No — ${re('51')} is a composite number. It has 4 factors: 1, 3, 17 and 51.`,
          steps: [
            `<strong>Step 1 — Test divisors starting from 2:</strong> Check whether any number from 2 upwards divides into 51 exactly.`,
            `<strong>Step 2 — Test 3:</strong> 51 ÷ 3 = 17 exactly ✓ — 3 divides into ${re('51')} with no remainder.`,
            `<strong>Step 3 — Conclude:</strong> Because ${re('51')} has a factor other than 1 and itself, it cannot be prime. Its full list of factors is: 1, 3, 17, 51 — that is 4 factors.`,
            `<strong>Answer:</strong> No, ${re('51')} is <strong>not</strong> a prime number. It is a <strong>composite number</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A grid of numbers from 1 to 100 with prime numbers highlighted in blue and composite numbers in a lighter colour showing the distribution of primes up to 100',
      videoPlaceholder:
        'Short video explaining multiples, factors and prime numbers with examples showing how to find all factors of a number',
    },
  ],

  topicPractice: [

    // ── Section 1: Place Value Up to 6 Digits ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Write the number 304 052 in expanded notation.',
      correctAnswer: '300000+4000+50+2',
      explanation:
        '304 052 in expanded notation:\n\n' +
        '• 3 is in the Hundred Thousands column → 300 000\n' +
        '• 0 is in the Ten Thousands column → 0 (zero terms are left out)\n' +
        '• 4 is in the Thousands column → 4 000\n' +
        '• 0 is in the Hundreds column → 0 (zero terms are left out)\n' +
        '• 5 is in the Tens column → 50\n' +
        '• 2 is in the Units column → 2\n\n' +
        '304 052 = 300 000 + 4 000 + 50 + 2',
      answer: '300 000 + 4 000 + 50 + 2',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'What is the value of the given digit in each number?\n\n' +
        'a) The digit 8 in 384 621\n' +
        'b) The digit 5 in 450 093\n' +
        'c) The digit 2 in 726 415',
      parts: [
        {
          label: 'a)',
          correctAnswer: '80000',
          explanation:
            'In 384 621, the digit 8 is in the Ten Thousands column.\n' +
            'Value = 8 × 10 000 = 80 000',
        },
        {
          label: 'b)',
          correctAnswer: '50000',
          explanation:
            'In 450 093, the digit 5 is in the Ten Thousands column.\n' +
            'Value = 5 × 10 000 = 50 000',
        },
        {
          label: 'c)',
          correctAnswer: '20000',
          explanation:
            'In 726 415, the digit 2 is in the Ten Thousands column.\n' +
            'Value = 2 × 10 000 = 20 000',
        },
      ],
      answer: 'a) 80 000\nb) 50 000\nc) 20 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A number has 4 hundred thousands, 0 ten thousands, 7 thousands, 3 hundreds, 0 tens and 9 units.\n\n' +
        'a) Write the number\n' +
        'b) Write it in expanded notation\n' +
        'c) What is the value of the digit 7?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '407309',
          explanation:
            'Place each part into its column:\n' +
            '• 4 hundred thousands → 400 000\n' +
            '• 0 ten thousands → 0\n' +
            '• 7 thousands → 7 000\n' +
            '• 3 hundreds → 300\n' +
            '• 0 tens → 0\n' +
            '• 9 units → 9\n\n' +
            'Read the columns from left to right: 407 309',
        },
        {
          label: 'b)',
          correctAnswer: '400000+7000+300+9',
          explanation:
            '407 309 = 400 000 + 0 + 7 000 + 300 + 0 + 9\n\n' +
            'Zero terms are left out, so the expanded notation is:\n' +
            '400 000 + 7 000 + 300 + 9',
        },
        {
          label: 'c)',
          correctAnswer: '7000',
          explanation:
            'The digit 7 is in the Thousands column.\n' +
            'Value = 7 × 1 000 = 7 000',
        },
      ],
      answer: 'a) 407 309\nb) 400 000 + 7 000 + 300 + 9\nc) 7 000',
    },

    // ── Section 2: Comparing, Ordering and Rounding ────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Round 63 847 to the nearest 1 000.',
      correctAnswer: '64000',
      explanation:
        'Rounding 63 847 to the nearest 1 000:\n\n' +
        'Step 1: Find the deciding digit. Rounding to the nearest 1 000 means we look at the hundreds digit. In 63 847, the hundreds digit is 8.\n' +
        'Step 2: 8 is 5 or more → round up.\n' +
        'Step 3: Add 1 to the thousands digit: 3 + 1 = 4. Replace hundreds, tens and units with 0.\n\n' +
        '63 847 → 64 000',
      answer: '64 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'a) Round 284 632 to the nearest 10 000\n' +
        'b) Round 57 499 to the nearest 100\n' +
        'c) Order from smallest to biggest: 43 218,  8 954,  43 098,  100 001',
      parts: [
        {
          label: 'a)',
          correctAnswer: '280000',
          explanation:
            'Rounding 284 632 to the nearest 10 000:\n' +
            'Deciding digit = thousands digit = 4.\n' +
            '4 is less than 5 → round down.\n' +
            'The ten thousands digit stays as 8. Replace thousands, hundreds, tens and units with 0.\n\n' +
            '284 632 → 280 000',
        },
        {
          label: 'b)',
          correctAnswer: '57500',
          explanation:
            'Rounding 57 499 to the nearest 100:\n' +
            'Deciding digit = tens digit = 9.\n' +
            '9 is 5 or more → round up.\n' +
            'Add 1 to the hundreds digit: 4 + 1 = 5. Replace tens and units with 0.\n\n' +
            '57 499 → 57 500',
        },
        {
          label: 'c)',
          // "8 954, 43 098, 43 218, 100 001" → strip spaces/commas → "89544309843218100001"
          correctAnswer: '89544309843218100001',
          explanation:
            'Step 1 — Count digits:\n' +
            '• 8 954 has 4 digits → smallest\n' +
            '• 43 218 and 43 098 each have 5 digits\n' +
            '• 100 001 has 6 digits → biggest\n\n' +
            'Step 2 — Compare the two 5-digit numbers (43 218 and 43 098):\n' +
            '• Ten thousands: 4 = 4 → equal, move right\n' +
            '• Thousands: 3 = 3 → equal, move right\n' +
            '• Hundreds: 2 vs 0 → 0 is smaller, so 43 098 < 43 218\n\n' +
            'Order from smallest to biggest: 8 954,  43 098,  43 218,  100 001',
        },
      ],
      answer: 'a) 280 000\nb) 57 500\nc) 8 954, 43 098, 43 218, 100 001',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sipho says 345 678 rounded to the nearest 10 000 is 350 000.\n' +
        'Lerato says it is 340 000.\n\n' +
        'Who is correct? Show your working.',
      answer:
        'Sipho is correct. 345 678 rounded to the nearest 10 000 is 350 000.\n\n' +
        'Step 1: Rounding to the nearest 10 000, so look at the deciding digit — the thousands digit.\n' +
        'In 345 678, the thousands digit is 5.\n\n' +
        'Step 2: 5 is 5 or more → round up.\n\n' +
        'Step 3: Add 1 to the ten thousands digit: 4 + 1 = 5.\n' +
        'Replace thousands, hundreds, tens and units with 0.\n\n' +
        '345 678 → 350 000 ✓\n\n' +
        'Lerato rounded down (kept the ten thousands digit as 4), but the deciding digit of 5 means we must always round up.',
    },

    // ── Section 2: Counting Forwards and Backwards ────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Count forwards in 10 000s starting from 20 000. Write the next 5 numbers.',
      correctAnswer: '3000040000500006000070000',
      explanation:
        'Start at 20 000 and add 10 000 each time:\n\n' +
        '20 000 + 10 000 = 30 000\n' +
        '30 000 + 10 000 = 40 000\n' +
        '40 000 + 10 000 = 50 000\n' +
        '50 000 + 10 000 = 60 000\n' +
        '60 000 + 10 000 = 70 000\n\n' +
        'The next 5 numbers are: 30 000, 40 000, 50 000, 60 000, 70 000',
      answer: '30 000, 40 000, 50 000, 60 000, 70 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Answer the following:\n\n' +
        'a) Count backwards in 100 000s starting from 600 000. Write the next 4 numbers.\n' +
        'b) Count forwards in 10 000s starting from 45 000. Write the next 4 numbers.\n' +
        'c) What number comes before 300 000 when counting in 100 000s?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '500000400000300000200000',
          explanation:
            'Start at 600 000 and subtract 100 000 each time:\n\n' +
            '600 000 − 100 000 = 500 000\n' +
            '500 000 − 100 000 = 400 000\n' +
            '400 000 − 100 000 = 300 000\n' +
            '300 000 − 100 000 = 200 000\n\n' +
            'The next 4 numbers are: 500 000, 400 000, 300 000, 200 000',
        },
        {
          label: 'b)',
          correctAnswer: '55000650007500085000',
          explanation:
            'Start at 45 000 and add 10 000 each time:\n\n' +
            '45 000 + 10 000 = 55 000\n' +
            '55 000 + 10 000 = 65 000\n' +
            '65 000 + 10 000 = 75 000\n' +
            '75 000 + 10 000 = 85 000\n\n' +
            'The next 4 numbers are: 55 000, 65 000, 75 000, 85 000',
        },
        {
          label: 'c)',
          correctAnswer: '200000',
          explanation:
            'When counting in 100 000s the sequence goes: … 100 000, 200 000, 300 000, 400 000 …\n\n' +
            'The number that comes before 300 000 is 200 000.\n\n' +
            'Check: 200 000 + 100 000 = 300 000 ✓',
        },
      ],
      answer: 'a) 500 000, 400 000, 300 000, 200 000\nb) 55 000, 65 000, 75 000, 85 000\nc) 200 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A pattern counts backwards in 10 000s. The 3rd number in the pattern is 470 000.\n\n' +
        'a) What is the 1st number?\n' +
        'b) What is the 6th number?\n' +
        'c) What is the 10th number?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '490000',
          explanation:
            'The pattern counts backwards in 10 000s. To go from the 3rd term back to the 1st term, add 10 000 twice:\n\n' +
            '3rd number: 470 000\n' +
            '2nd number: 470 000 + 10 000 = 480 000\n' +
            '1st number: 480 000 + 10 000 = 490 000',
        },
        {
          label: 'b)',
          correctAnswer: '440000',
          explanation:
            'Start from the 1st number (490 000) and subtract 10 000 five times to reach the 6th:\n\n' +
            '1st: 490 000 → 2nd: 480 000 → 3rd: 470 000\n' +
            '4th: 460 000 → 5th: 450 000 → 6th: 440 000',
        },
        {
          label: 'c)',
          correctAnswer: '400000',
          explanation:
            'The 10th number is 9 steps below the 1st number:\n\n' +
            '10th number = 490 000 − (9 × 10 000)\n' +
            '= 490 000 − 90 000\n' +
            '= 400 000',
        },
      ],
      answer: 'a) 490 000\nb) 440 000\nc) 400 000',
    },

    // ── Section 3: Representing Numbers on a Number Line ──────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'A number line goes from 0 to 100 000 in intervals of 10 000. Between which two numbers does 73 000 sit?',
      correctAnswers: ['7000080000', '70000and80000', '70000to80000', '70000-80000'],
      correctAnswer: '7000080000',
      explanation:
        'The marked intervals on this number line are: 0, 10 000, 20 000, … 70 000, 80 000, … 100 000.\n\n' +
        '73 000 falls between 70 000 and 80 000 because:\n' +
        '70 000 < 73 000 < 80 000\n\n' +
        '73 000 is 3 000 above 70 000 and 7 000 below 80 000, so it sits closer to the 70 000 mark.',
      answer: '70 000 and 80 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A number line goes from 50 000 to 60 000 in intervals of 1 000.\n\n' +
        'a) Where does 54 500 sit?\n' +
        'b) What number is three quarters of the way between 50 000 and 60 000?\n' +
        'c) What number is halfway between 57 000 and 58 000?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['5400055000', '54000and55000', '54000to55000', '54000-55000', 'halfwaybetween54000and55000', 'between54000and55000'],
          correctAnswer: '5400055000',
          explanation:
            'The marked intervals around 54 500 are 54 000 and 55 000.\n\n' +
            'Halfway point: (54 000 + 55 000) ÷ 2 = 54 500\n\n' +
            '54 500 sits exactly halfway between 54 000 and 55 000.',
        },
        {
          label: 'b)',
          correctAnswer: '57500',
          explanation:
            'Three quarters of the way from 50 000 to 60 000:\n\n' +
            'Distance = 60 000 − 50 000 = 10 000\n' +
            '¾ of 10 000 = 7 500\n' +
            '50 000 + 7 500 = 57 500',
        },
        {
          label: 'c)',
          correctAnswer: '57500',
          explanation:
            'Halfway between 57 000 and 58 000:\n\n' +
            '(57 000 + 58 000) ÷ 2 = 115 000 ÷ 2 = 57 500',
        },
      ],
      answer: 'a) Halfway between 54 000 and 55 000\nb) 57 500\nc) 57 500',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A number line goes from 200 000 to 300 000 in intervals of 10 000.\n\n' +
        'a) How many intervals are there?\n' +
        'b) Where does 265 000 sit?\n' +
        'c) What number is two thirds of the way between 200 000 and 300 000?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '10',
          explanation:
            'The number of intervals = (end − start) ÷ interval size\n\n' +
            '= (300 000 − 200 000) ÷ 10 000\n' +
            '= 100 000 ÷ 10 000\n' +
            '= 10 intervals',
        },
        {
          label: 'b)',
          correctAnswers: ['260000270000', '260000and270000', '260000to270000', '260000-270000', 'halfwaybetween260000and270000', 'between260000and270000'],
          correctAnswer: '260000270000',
          explanation:
            'The marked intervals around 265 000 are 260 000 and 270 000.\n\n' +
            'Halfway point: (260 000 + 270 000) ÷ 2 = 265 000\n\n' +
            '265 000 sits exactly halfway between 260 000 and 270 000.',
        },
        {
          label: 'c)',
          correctAnswers: ['266667', '266666', '266500', '266000', '267000'],
          correctAnswer: '266667',
          explanation:
            'Two thirds of the way from 200 000 to 300 000:\n\n' +
            'Distance = 300 000 − 200 000 = 100 000\n' +
            '⅔ of 100 000 = 66 667 (rounded to the nearest whole number)\n' +
            '200 000 + 66 667 = 266 667\n\n' +
            'Any answer between 266 000 and 267 000 is accepted.',
        },
      ],
      answer: 'a) 10\nb) Halfway between 260 000 and 270 000\nc) 266 667 (any answer from 266 000 to 267 000 is accepted)',
    },

    // ── Section 3: Multiples and Factors ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'List the first 5 multiples of 8.',
      correctAnswer: '816243240',
      explanation:
        'Multiples of 8 are found by multiplying 8 by 1, 2, 3, 4, 5:\n\n' +
        '8 × 1 = 8\n' +
        '8 × 2 = 16\n' +
        '8 × 3 = 24\n' +
        '8 × 4 = 32\n' +
        '8 × 5 = 40\n\n' +
        'First 5 multiples of 8: 8, 16, 24, 32, 40',
      answer: '8, 16, 24, 32, 40',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Answer the following:\n\n' +
        'a) List all the factors of 48\n' +
        'b) Is 9 a factor of 72?\n' +
        'c) What is the smallest multiple of 7 that is greater than 50?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '12346812162448',
          explanation:
            'Factors of 48 are numbers that divide into 48 with no remainder:\n\n' +
            '48 ÷ 1 = 48 ✓ → 1 and 48\n' +
            '48 ÷ 2 = 24 ✓ → 2 and 24\n' +
            '48 ÷ 3 = 16 ✓ → 3 and 16\n' +
            '48 ÷ 4 = 12 ✓ → 4 and 12\n' +
            '48 ÷ 5 = 9.6 ✗ (not exact)\n' +
            '48 ÷ 6 = 8 ✓ → 6 and 8\n\n' +
            'All factors of 48 in order: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48',
        },
        {
          label: 'b)',
          correctAnswer: 'yes',
          explanation:
            '72 ÷ 9 = 8 exactly — no remainder.\n\n' +
            'Check: 9 × 8 = 72 ✓\n\n' +
            'Yes — 9 is a factor of 72.',
        },
        {
          label: 'c)',
          correctAnswer: '56',
          explanation:
            'List multiples of 7 until you pass 50:\n\n' +
            '7 × 7 = 49 (not greater than 50)\n' +
            '7 × 8 = 56 ✓ (greater than 50)\n\n' +
            'The smallest multiple of 7 that is greater than 50 is 56.',
        },
      ],
      answer: 'a) 1, 2, 3, 4, 6, 8, 12, 16, 24, 48\nb) Yes\nc) 56',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo says 6 is a factor of 90 because 90 ÷ 6 = 14 remainder 6. Is he correct? Show your working and list all factors of 90.',
      answer:
        'Step 1: Divide 90 by 6\n90 ÷ 6 = 15 exactly — there is no remainder.\n\n' +
        'Step 2: Thabo made a calculation error.\n' +
        '6 × 14 = 84, and 90 − 84 = 6. So Thabo\'s division was wrong.\n' +
        '6 × 15 = 90 exactly ✓\n\n' +
        'Thabo is wrong in his working, but his conclusion is correct — 6 IS a factor of 90.\n\n' +
        'Factors of 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90',
    },

    // ── Section 4: Prime Numbers ────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Is 13 a prime number? Write yes or no and give a reason.',
      answer:
        'Yes — 13 is a prime number.\n\n' +
        'A prime number has exactly 2 factors: 1 and itself.\n\n' +
        '13 ÷ 2 = 6.5 ✗,  13 ÷ 3 ≈ 4.3 ✗\n' +
        'No number between 2 and 12 divides into 13 exactly.\n\n' +
        'Factors of 13: 1 and 13 only. That is exactly 2 factors, so 13 is prime.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'List all prime numbers between 20 and 40.',
      correctAnswer: '23293137',
      explanation:
        'Check each odd number between 20 and 40:\n\n' +
        '21 = 3 × 7 ✗ (composite)\n' +
        '23: not divisible by 2, 3 or 5 ✓ — prime\n' +
        '25 = 5 × 5 ✗ (composite)\n' +
        '27 = 3 × 9 ✗ (composite)\n' +
        '29: not divisible by 2, 3 or 5 ✓ — prime\n' +
        '31: not divisible by 2, 3 or 5 ✓ — prime\n' +
        '33 = 3 × 11 ✗ (composite)\n' +
        '35 = 5 × 7 ✗ (composite)\n' +
        '37: not divisible by 2, 3 or 5 ✓ — prime\n' +
        '39 = 3 × 13 ✗ (composite)\n\n' +
        'Prime numbers between 20 and 40: 23, 29, 31, 37',
      answer: '23, 29, 31, 37',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Answer the following:\n\n' +
        'b) Is 1 a prime number? Explain why or why not.\n' +
        'c) Why is 2 the only even prime number?',
      answer:
        'b) No — 1 is not a prime number.\n' +
        '1 has only one factor: itself. A prime number must have exactly 2 factors (1 and itself). Since 1 only has one factor, it does not fit the definition of prime.\n\n' +
        'c) 2 is the only even prime number because all other even numbers have 2 as a factor. That means they have at least 3 factors (1, 2, and themselves), which makes them composite.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato says all odd numbers are prime. Is she correct? Give two examples to support your answer.',
      answer:
        'No — Lerato is incorrect. Odd numbers can be composite.\n\n' +
        'Example 1: 9 = 3 × 3\nFactors of 9: 1, 3, 9 (three factors) → 9 is odd but not prime.\n\n' +
        'Example 2: 15 = 3 × 5\nFactors of 15: 1, 3, 5, 15 (four factors) → 15 is odd but not prime.\n\n' +
        'Both 9 and 15 are odd numbers with more than 2 factors, so they are composite, not prime.',
    },

  ],

  scoreMessages: [
    { minScore: 35, message: 'Perfect score! You have mastered Whole Numbers.' },
    { minScore: 27, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 18, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
