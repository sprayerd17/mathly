import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour palette ───────────────────────────────────────────────────────────
// Ten Thousands — red     (#dc2626 / bg #fee2e2 / border #fca5a5)
// Thousands     — orange  (#ea580c / bg #ffedd5 / border #fed7aa)
// Hundreds      — yellow  (#ca8a04 / bg #fef9c3 / border #fde68a)
// Tens          — green   (#16a34a / bg #dcfce7 / border #86efac)
// Units         — blue    (#2563eb / bg #dbeafe / border #93c5fd)
// Carries       — purple  (#7c3aed / bg #ede9fe / border #c4b5fd)

const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Reusable table wrapper ───────────────────────────────────────────────────
const TW  = (inner: string) =>
  `<div style="overflow-x:auto;margin-top:14px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
  `<table style="border-collapse:collapse;font-size:0.93em;text-align:center;min-width:280px">${inner}</table></div>`

// ─── Shared column header row ─────────────────────────────────────────────────
const TH_ROW =
  `<thead><tr style="background:#f8fafc">` +
  `<th style="padding:8px 16px;font-weight:700;color:#dc2626;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">TTh</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#ea580c;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#ca8a04;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#16a34a;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#2563eb;border-bottom:2px solid #e5e7eb">U</th>` +
  `</tr></thead>`

// ─── Helper: one data row ─────────────────────────────────────────────────────
type CellOpts = { topBorder?: boolean; thick?: boolean; prefix?: string }
function dataRow(
  [a, b, c, d, e]: string[],
  colours: string[],
  opts: CellOpts = {}
): string {
  const borderTop = opts.topBorder ? 'border-top:1px solid #e5e7eb;' : ''
  const fs        = opts.thick     ? 'font-size:1.08em;font-weight:800;' : 'font-weight:700;'
  const cells     = [a, b, c, d, e].map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const pre   = i === 0 && opts.prefix ? opts.prefix : ''
    return `<td style="padding:8px 16px;color:${colours[i]};${fs}${borderTop}${right}">${pre}${v}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── Helper: carry row (purple, small) ───────────────────────────────────────
function carryRow(carries: (string | '')[]): string {
  const cells = carries.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const val   = v ? `<span style="color:#7c3aed;font-weight:800;font-size:0.82em">${v}</span>` : ''
    return `<td style="padding:3px 16px;${right}">${val}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── Helper: borrow row (purple, small — shows modified digit above original) ─
function borrowRow(borrows: (string | '')[]): string {
  const cells = borrows.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const val   = v ? `<span style="color:#7c3aed;font-weight:800;font-size:0.82em">${v}</span>` : ''
    return `<td style="padding:3px 16px;${right}">${val}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

const COL5 = ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#2563eb']

// ─── Answer row (bottom double border) ───────────────────────────────────────
function answerRow(digits: string[]): string {
  const cells = digits.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    return `<td style="padding:8px 16px;color:${COL5[i]};font-weight:800;font-size:1.1em;border-top:3px double #374151;${right}">${v}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── WE1 tables ──────────────────────────────────────────────────────────────
// 34 567 + 28 914 = 63 481
// Carries: U→T (1), H→Th (1), Th→TTh (1)
// Carry row shows the digit carried INTO each column:
//   TTh: ¹ (carried from Th), Th: ¹ (carried from H), H: —, T: ¹ (carried from U), U: —

const we1SetupTable = TW(
  TH_ROW +
  `<tbody>` +
  dataRow(['3','4','5','6','7'], COL5) +
  dataRow(['2','8','9','1','4'], COL5, { topBorder: true, prefix: '+ ' }) +
  `</tbody>`
)

const we1FullTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '', '¹', '']) +
  dataRow(['3','4','5','6','7'], COL5) +
  dataRow(['2','8','9','1','4'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['6','3','4','8','1']) +
  `</tbody>`
)

// ─── WE2 tables ──────────────────────────────────────────────────────────────
// 47 856 + 38 749 = 86 605
// U: 6+9=15 carry 1 → T; T: 5+4+1=10 carry 1 → H; H: 8+7+1=16 carry 1 → Th; Th: 7+8+1=16 carry 1 → TTh; TTh: 4+3+1=8
// Carry row: TTh: ¹, Th: ¹, H: ¹, T: ¹, U: —

const we2FullTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['4','7','8','5','6'], COL5) +
  dataRow(['3','8','7','4','9'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['8','6','6','0','5']) +
  `</tbody>`
)

// ─── WE3 tables ──────────────────────────────────────────────────────────────
// 73 425 − 38 768 = 34 657
// Borrow chain: U→15-8=7; T→11-6=5; H→13-7=6; Th→12-8=4; TTh→6-3=3

const we3SetupTable = TW(
  TH_ROW +
  `<tbody>` +
  dataRow(['7','3','4','2','5'], COL5) +
  dataRow(['3','8','7','6','8'], COL5, { topBorder: true, prefix: '− ' }) +
  `</tbody>`
)

const we3FullTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['6', '12', '13', '11', '15']) +
  dataRow(['7','3','4','2','5'], COL5) +
  dataRow(['3','8','7','6','8'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['3','4','6','5','7']) +
  `</tbody>`
)

// ─── WE4 tables ──────────────────────────────────────────────────────────────
// 82 500 − 47 836 = 34 664
// Borrow chain: U→10-6=4; T→9-3=6; H→14-8=6; Th→11-7=4; TTh→7-4=3

const we4FullTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '11', '14', '9', '10']) +
  dataRow(['8','2','5','0','0'], COL5) +
  dataRow(['4','7','8','3','6'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['3','4','6','6','4']) +
  `</tbody>`
)

// ─── WE5 table ───────────────────────────────────────────────────────────────
// 47 382 + 28 915 = 76 297
// H→Th carry (1), Th→TTh carry (1)

const we5Table = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '', '', '']) +
  dataRow(['4','7','3','8','2'], COL5) +
  dataRow(['2','8','9','1','5'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['7','6','2','9','7']) +
  `</tbody>`
)

// ─── WE6 table ───────────────────────────────────────────────────────────────
// 83 654 − 37 429 = 46 225
// Borrow: T=4,U=14; TTh=7,Th=13

const we6Table = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '13', '', '4', '14']) +
  dataRow(['8','3','6','5','4'], COL5) +
  dataRow(['3','7','4','2','9'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['4','6','2','2','5']) +
  `</tbody>`
)

// ─── WE7 tables ──────────────────────────────────────────────────────────────
// 54 738 + 27 465 = 82 203  (all 4 columns carry)

const we7Table = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['5','4','7','3','8'], COL5) +
  dataRow(['2','7','4','6','5'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['8','2','2','0','3']) +
  `</tbody>`
)

// 82 203 − 27 465 = 54 738 (inverse check)
// Borrow chain: U→13; T→9; H→11 (lent to T, borrowed from Th); Th→11 (lent to H, borrowed from TTh); TTh→7

const we7CheckTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '11', '11', '9', '13']) +
  dataRow(['8','2','2','0','3'], COL5) +
  dataRow(['2','7','4','6','5'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['5','4','7','3','8']) +
  `</tbody>`
)

// ─── WE8 tables ──────────────────────────────────────────────────────────────
// 91 000 − 43 567 = 47 433
// Borrow chain: U→10; T→9; H→9 (lent to T, borrowed from Th); Th→10 (lent to H, borrowed from TTh); TTh→8

const we8Table = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['8', '10', '9', '9', '10']) +
  dataRow(['9','1','0','0','0'], COL5) +
  dataRow(['4','3','5','6','7'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['4','7','4','3','3']) +
  `</tbody>`
)

// 47 433 + 43 567 = 91 000 (inverse check — all 4 columns carry)

const we8CheckTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['4','7','4','3','3'], COL5) +
  dataRow(['4','3','5','6','7'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['9','1','0','0','0']) +
  `</tbody>`
)

export const topicData: TopicData = {
  title: 'Addition and Subtraction',
  grade: 5,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ADDITION OF LARGE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'addition-large-numbers',
      title: 'Addition of Large Numbers',
      icon: '➕',
      explanation:
        `<p>In Grade 5 we add numbers with up to <strong>5 digits</strong> — numbers up to 99 999. We use the same <strong>column method</strong> as Grade 4, but we now have an extra column: the <strong>ten thousands</strong> column. Each column has its own colour — learn these colours because they are used in every example below.</p>` +

        `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px">` +
        `<table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr>` +
        `<th style="padding:9px 12px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Ten Thousands (TTh)</th>` +
        `<th style="padding:9px 12px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Thousands (Th)</th>` +
        `<th style="padding:9px 12px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds (H)</th>` +
        `<th style="padding:9px 12px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens (T)</th>` +
        `<th style="padding:9px 12px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units (U)</th>` +
        `</tr></thead></table></div>` +

        `<p style="margin-top:18px"><strong>How to add using columns:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Write the numbers one under the other — ${bl('units')} under ${bl('units')}, ${gr('tens')} under ${gr('tens')}, ${ye('hundreds')} under ${ye('hundreds')}, ${or('thousands')} under ${or('thousands')}, ${re('ten thousands')} under ${re('ten thousands')}.</li>` +
        `<li>Always start adding from the <strong>right side</strong> — begin with the ${bl('units')} column.</li>` +
        `<li>If a column total is <strong>10 or more</strong>, write down the units digit of that total and <strong>carry</strong> the tens digit to the top of the next column on the left. Carry digits are shown in ${pu('purple')}.</li>` +
        `<li>Remember to add any ${pu('carried digit')} when you get to that column.</li>` +
        `</ol>` +

        `<p style="margin-top:20px"><strong>Key words that tell you to add in a word problem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">altogether</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">total</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">sum</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">in all</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">combined</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how much altogether</span>` +
        `</div>`,

      workedExamples: [

        // ── WORKED EXAMPLE 1 ─────────────────────────────────────────────────
        {
          question: 'Calculate 34 567 + 28 914',
          answer: `${re('6')}${or('3')} ${ye('4')}${gr('8')}${bl('1')} — that is <strong>63 481</strong>`,
          steps: [
            // Step 1 — layout
            `<strong>Step 1 — Write in columns.</strong> Line up ${bl('units')} under ${bl('units')}, ${gr('tens')} under ${gr('tens')}, ${ye('hundreds')} under ${ye('hundreds')}, ${or('thousands')} under ${or('thousands')}, and ${re('ten thousands')} under ${re('ten thousands')}.` +
            we1SetupTable,

            // Step 2 — units
            `<strong>Step 2 — Add the ${bl('units')} column.</strong><br>` +
            `${bl('7')} + ${bl('4')} = ${bl('11')}<br>` +
            `11 is bigger than 9, so we cannot fit two digits in one column.<br>` +
            `Write ${bl('1')} in the units column and carry ${pu('1')} to the top of the ${gr('tens')} column.`,

            // Step 3 — tens
            `<strong>Step 3 — Add the ${gr('tens')} column</strong> (do not forget the ${pu('carried 1')}).<br>` +
            `${gr('6')} + ${gr('1')} + ${pu('1')} (carried) = ${gr('8')}<br>` +
            `8 is less than 10, so write ${gr('8')} in the tens column. No carry needed.`,

            // Step 4 — hundreds
            `<strong>Step 4 — Add the ${ye('hundreds')} column.</strong><br>` +
            `${ye('5')} + ${ye('9')} = ${ye('14')}<br>` +
            `14 is bigger than 9. Write ${ye('4')} in the hundreds column and carry ${pu('1')} to the top of the ${or('thousands')} column.`,

            // Step 5 — thousands
            `<strong>Step 5 — Add the ${or('thousands')} column</strong> (do not forget the ${pu('carried 1')}).<br>` +
            `${or('4')} + ${or('8')} + ${pu('1')} (carried) = ${or('13')}<br>` +
            `13 is bigger than 9. Write ${or('3')} in the thousands column and carry ${pu('1')} to the top of the ${re('ten thousands')} column.`,

            // Step 6 — ten thousands
            `<strong>Step 6 — Add the ${re('ten thousands')} column</strong> (do not forget the ${pu('carried 1')}).<br>` +
            `${re('3')} + ${re('2')} + ${pu('1')} (carried) = ${re('6')}<br>` +
            `6 is less than 10, so write ${re('6')} in the ten thousands column. No carry needed.`,

            // Step 7 — full table with answer
            `<strong>Complete working — all carries shown in ${pu('purple')}:</strong>` +
            we1FullTable +
            `<p style="margin-top:14px"><strong>Answer: 63 481</strong></p>`,
          ],
        },

        // ── WORKED EXAMPLE 2 ─────────────────────────────────────────────────
        {
          question: 'A school raises R47 856 in term 1 and R38 749 in term 2. How much did they raise altogether?',
          answer: '<strong>R86 605</strong>',
          steps: [
            // Step 1 — identify operation
            `<strong>Step 1 — Find the key word.</strong><br>` +
            `The word <strong>"altogether"</strong> tells us to <strong>add</strong>.<br><br>` +
            `<strong>Number sentence:</strong> R47 856 + R38 749 = ?`,

            // Step 2 — set up and show carries
            `<strong>Step 2 — Write in columns and add, starting from the units.</strong><br><br>` +
            `${bl('Units')}: ${bl('6')} + ${bl('9')} = ${bl('15')} → write ${bl('5')}, carry ${pu('1')}<br>` +
            `${gr('Tens')}: ${gr('5')} + ${gr('4')} + ${pu('1')} carried = ${gr('10')} → write ${gr('0')}, carry ${pu('1')}<br>` +
            `${ye('Hundreds')}: ${ye('8')} + ${ye('7')} + ${pu('1')} carried = ${ye('16')} → write ${ye('6')}, carry ${pu('1')}<br>` +
            `${or('Thousands')}: ${or('7')} + ${or('8')} + ${pu('1')} carried = ${or('16')} → write ${or('6')}, carry ${pu('1')}<br>` +
            `${re('Ten thousands')}: ${re('4')} + ${re('3')} + ${pu('1')} carried = ${re('8')} → write ${re('8')}` +
            `<br><br><strong>Full column working — carries shown in ${pu('purple')}:</strong>` +
            we2FullTable,

            // Step 3 — answer
            `<strong>Step 3 — Write the answer with the correct unit.</strong><br><br>` +
            `The school raised <strong>R86 605</strong> altogether in the two terms.`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Column addition layout showing 34 567 plus 28 914 with each place value column colour coded and carried digits shown in purple',
      videoPlaceholder:
        'Short video showing column addition of 5-digit numbers with carrying using colour coded place value columns',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SUBTRACTION OF LARGE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'subtraction-large-numbers',
      title: 'Subtraction of Large Numbers',
      icon: '➖',
      explanation:
        `<p>In Grade 5 we subtract numbers with up to <strong>5 digits</strong> — numbers up to 99 999. We use the same <strong>column method</strong> as Grade 4, but we now include the <strong>ten thousands</strong> column. When the top digit in a column is smaller than the bottom digit, we must <strong>borrow</strong> from the column to the left. Borrowed values are shown in ${pu('purple')} above the original digit.</p>` +

        `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px">` +
        `<table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr>` +
        `<th style="padding:9px 12px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Ten Thousands (TTh)</th>` +
        `<th style="padding:9px 12px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Thousands (Th)</th>` +
        `<th style="padding:9px 12px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds (H)</th>` +
        `<th style="padding:9px 12px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens (T)</th>` +
        `<th style="padding:9px 12px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units (U)</th>` +
        `</tr></thead></table></div>` +

        `<p style="margin-top:18px"><strong>How to subtract using columns:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Write the larger number on top and the smaller number below — ${bl('units')} under ${bl('units')}, ${gr('tens')} under ${gr('tens')}, ${ye('hundreds')} under ${ye('hundreds')}, ${or('thousands')} under ${or('thousands')}, ${re('ten thousands')} under ${re('ten thousands')}.</li>` +
        `<li>Always start subtracting from the <strong>right side</strong> — begin with the ${bl('units')} column.</li>` +
        `<li>If the top digit is <strong>smaller</strong> than the bottom digit, you must <strong>borrow</strong>: take 1 from the column to the left. That column loses 1, and your column gains 10. The new value is shown in ${pu('purple')} above the original digit.</li>` +
        `<li>If the column you need to borrow from is 0, first borrow from the column further to the left to give it a value, then borrow from it.</li>` +
        `</ol>` +

        `<p style="margin-top:20px"><strong>Key words that tell you to subtract in a word problem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">difference</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how many left</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how many remain</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">less than</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">fewer</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">how many more</span>` +
        `</div>`,

      workedExamples: [

        // ── WORKED EXAMPLE 3 ─────────────────────────────────────────────────
        {
          question: 'Calculate 73 425 − 38 768',
          answer: `${re('3')}${or('4')} ${ye('6')}${gr('5')}${bl('7')} — that is <strong>34 657</strong>`,
          steps: [
            `<strong>Step 1 — Write in columns.</strong> Line up ${bl('units')} under ${bl('units')}, ${gr('tens')} under ${gr('tens')}, ${ye('hundreds')} under ${ye('hundreds')}, ${or('thousands')} under ${or('thousands')}, and ${re('ten thousands')} under ${re('ten thousands')}.` +
            we3SetupTable,

            `<strong>Step 2 — ${bl('Units')} column: ${bl('5')} − ${bl('8')}.</strong><br>` +
            `5 is smaller than 8 — we cannot subtract. We must <strong>borrow</strong> from the ${gr('tens')} column.<br>` +
            `The ${gr('tens')} digit is ${gr('2')}. Borrowing 1 makes it ${pu('1')}.<br>` +
            `Our ${bl('units')} digit gains 10 and becomes ${pu('15')}.<br>` +
            `Now subtract: ${pu('15')} − ${bl('8')} = ${bl('7')}.`,

            `<strong>Step 3 — ${gr('Tens')} column: ${pu('1')} − ${gr('6')}.</strong><br>` +
            `After lending 1 to units, the tens digit is now ${pu('1')}.<br>` +
            `1 is smaller than 6 — we must borrow from the ${ye('hundreds')} column.<br>` +
            `The ${ye('hundreds')} digit is ${ye('4')}. Borrowing 1 makes it ${pu('3')}.<br>` +
            `Our ${gr('tens')} digit gains 10 and becomes ${pu('11')}.<br>` +
            `Now subtract: ${pu('11')} − ${gr('6')} = ${gr('5')}.`,

            `<strong>Step 4 — ${ye('Hundreds')} column: ${pu('3')} − ${ye('7')}.</strong><br>` +
            `After lending 1 to tens, the hundreds digit is now ${pu('3')}.<br>` +
            `3 is smaller than 7 — we must borrow from the ${or('thousands')} column.<br>` +
            `The ${or('thousands')} digit is ${or('3')}. Borrowing 1 makes it ${pu('2')}.<br>` +
            `Our ${ye('hundreds')} digit gains 10 and becomes ${pu('13')}.<br>` +
            `Now subtract: ${pu('13')} − ${ye('7')} = ${ye('6')}.`,

            `<strong>Step 5 — ${or('Thousands')} column: ${pu('2')} − ${or('8')}.</strong><br>` +
            `After lending 1 to hundreds, the thousands digit is now ${pu('2')}.<br>` +
            `2 is smaller than 8 — we must borrow from the ${re('ten thousands')} column.<br>` +
            `The ${re('ten thousands')} digit is ${re('7')}. Borrowing 1 makes it ${pu('6')}.<br>` +
            `Our ${or('thousands')} digit gains 10 and becomes ${pu('12')}.<br>` +
            `Now subtract: ${pu('12')} − ${or('8')} = ${or('4')}.`,

            `<strong>Step 6 — ${re('Ten thousands')} column: ${pu('6')} − ${re('3')}.</strong><br>` +
            `After lending 1 to thousands, the ten thousands digit is now ${pu('6')}.<br>` +
            `6 is bigger than 3 — no borrowing needed.<br>` +
            `${pu('6')} − ${re('3')} = ${re('3')}.`,

            `<strong>Complete working — all borrowed values shown in ${pu('purple')}:</strong>` +
            we3FullTable +
            `<p style="margin-top:14px"><strong>Answer: 34 657</strong></p>`,
          ],
        },

        // ── WORKED EXAMPLE 4 ─────────────────────────────────────────────────
        {
          question: 'A factory produced 82 500 items. It sold 47 836 items. How many items are left?',
          answer: '<strong>34 664</strong>',
          steps: [
            `<strong>Step 1 — Find the key words.</strong><br>` +
            `The words <strong>"how many items are left"</strong> tell us to <strong>subtract</strong>.<br><br>` +
            `<strong>Number sentence:</strong> 82 500 − 47 836 = ?`,

            `<strong>Step 2 — Write in columns and subtract, starting from the units.</strong><br><br>` +
            `${bl('Units')}: ${bl('0')} − ${bl('6')} → can't subtract. The ${gr('tens')} digit is also ${gr('0')}, so we first borrow from ${ye('hundreds')}: H ${ye('5')}→${pu('4')}, giving T a value of 10. Then borrow from ${gr('tens')} for ${bl('units')}: T 10→${pu('9')}, U becomes ${pu('10')}. Now ${pu('10')} − ${bl('6')} = ${bl('4')}.<br>` +
            `${gr('Tens')}: ${pu('9')} − ${gr('3')} = ${gr('6')}. No further borrowing.<br>` +
            `${ye('Hundreds')}: ${pu('4')} − ${ye('8')} → can't subtract. Borrow from ${or('thousands')}: Th ${or('2')}→${pu('1')}, H becomes ${pu('14')}. Now ${pu('14')} − ${ye('8')} = ${ye('6')}.<br>` +
            `${or('Thousands')}: ${pu('1')} − ${or('7')} → can't subtract. Borrow from ${re('ten thousands')}: TTh ${re('8')}→${pu('7')}, Th becomes ${pu('11')}. Now ${pu('11')} − ${or('7')} = ${or('4')}.<br>` +
            `${re('Ten thousands')}: ${pu('7')} − ${re('4')} = ${re('3')}.<br><br>` +
            `<strong>Full column working — borrowed values shown in ${pu('purple')}:</strong>` +
            we4FullTable,

            `<strong>Step 3 — Write the answer with the correct unit.</strong><br><br>` +
            `The factory has <strong>34 664 items</strong> left.`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Column subtraction layout showing 73 425 minus 38 768 with each place value column colour coded and borrowed values shown in purple above the original digits',
      videoPlaceholder:
        'Short video showing column subtraction of 5-digit numbers with borrowing using colour coded place value columns',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ESTIMATING BEFORE CALCULATING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-before-calculating',
      title: 'Estimating Before Calculating',
      icon: '≈',
      explanation:
        `<p><strong>Estimating</strong> means rounding numbers first to get an <strong>approximate answer</strong> before you calculate the exact answer. This helps you check whether your final answer is reasonable — if your exact answer is far from your estimate, you probably made a mistake somewhere.</p>` +

        `<p style="margin-top:16px"><strong>Colour code used in this section:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#fff7ed;color:#ea580c;border:1px solid #fed7aa;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">rounded numbers — orange</span>` +
        `<span style="background:#f0fdf4;color:#16a34a;border:1px solid #86efac;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">estimate — green</span>` +
        `<span style="background:#eff6ff;color:#2563eb;border:1px solid #93c5fd;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">exact answer — blue</span>` +
        `</div>` +

        `<p style="margin-top:18px"><strong>Steps for estimating before calculating:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Round each number to the nearest ${or('1 000')} or ${or('10 000')}.</li>` +
        `<li>Add or subtract the ${or('rounded numbers')} to get an ${gr('estimate')}.</li>` +
        `<li>Calculate the ${bl('exact answer')} using the column method.</li>` +
        `<li>Check that the ${bl('exact answer')} is close to the ${gr('estimate')}. If it is, your answer is <strong>reasonable</strong>.</li>` +
        `</ol>`,

      workedExamples: [

        // ── WORKED EXAMPLE 5 ─────────────────────────────────────────────────
        {
          question: 'Estimate, then calculate exactly: 47 382 + 28 915',
          answer: `${gr('Estimate:')} ${gr('76 000')} &nbsp;&nbsp; ${bl('Exact answer:')} ${bl('76 297')}`,
          steps: [
            `<strong>Step 1 — Round each number to the nearest 1 000.</strong><br><br>` +
            `47 382: the hundreds digit is 3 (less than 5) → round <strong>down</strong> → ${or('47 000')}<br>` +
            `28 915: the hundreds digit is 9 (5 or more) → round <strong>up</strong> → ${or('29 000')}<br><br>` +
            `<strong>Estimate:</strong> ${or('47 000')} + ${or('29 000')} = ${gr('76 000')}`,

            `<strong>Step 2 — Calculate the exact answer using columns.</strong>` +
            we5Table +
            `<p style="margin-top:14px"><strong>Exact answer: ${bl('76 297')}</strong></p>`,

            `<strong>Step 3 — Check that the exact answer is close to the estimate.</strong><br><br>` +
            `${bl('Exact answer:')} ${bl('76 297')}<br>` +
            `${gr('Estimate:')} ${gr('76 000')}<br><br>` +
            `Difference: 76 297 − 76 000 = 297. This is small compared to the size of the numbers, so the answer is <strong>reasonable</strong>. ✓`,
          ],
        },

        // ── WORKED EXAMPLE 6 ─────────────────────────────────────────────────
        {
          question: 'Estimate, then calculate exactly: 83 654 − 37 429',
          answer: `${gr('Estimate:')} ${gr('47 000')} &nbsp;&nbsp; ${bl('Exact answer:')} ${bl('46 225')}`,
          steps: [
            `<strong>Step 1 — Round each number to the nearest 1 000.</strong><br><br>` +
            `83 654: the hundreds digit is 6 (5 or more) → round <strong>up</strong> → ${or('84 000')}<br>` +
            `37 429: the hundreds digit is 4 (less than 5) → round <strong>down</strong> → ${or('37 000')}<br><br>` +
            `<strong>Estimate:</strong> ${or('84 000')} − ${or('37 000')} = ${gr('47 000')}`,

            `<strong>Step 2 — Calculate the exact answer using columns.</strong>` +
            we6Table +
            `<p style="margin-top:14px"><strong>Exact answer: ${bl('46 225')}</strong></p>`,

            `<strong>Step 3 — Check that the exact answer is close to the estimate.</strong><br><br>` +
            `${bl('Exact answer:')} ${bl('46 225')}<br>` +
            `${gr('Estimate:')} ${gr('47 000')}<br><br>` +
            `Difference: 47 000 − 46 225 = 775. This is small compared to the size of the numbers, so the answer is <strong>reasonable</strong>. ✓`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Diagram showing 47 382 rounded to 47 000 and 28 915 rounded to 29 000 in orange with the green estimate 76 000 and the blue exact answer 76 297',
      videoPlaceholder:
        'Short video showing how to round 5-digit numbers to the nearest 1 000 and use the rounded values to estimate before calculating the exact answer',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — INVERSE OPERATIONS AND CHECKING ANSWERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inverse-operations',
      title: 'Inverse Operations and Checking Answers',
      icon: '↔',
      explanation:
        `<p><strong>Inverse operations</strong> are operations that undo each other. Addition and subtraction are inverse operations — if you add two numbers, you can undo it by subtracting one of them from the answer.</p>` +

        `<div style="margin-top:14px;padding:14px 18px;background:#eff6ff;border:1.5px solid #93c5fd;border-radius:10px">` +
        `<p style="margin:0;font-weight:600;color:#1e40af">If A + B = C, then C − B = A and C − A = B</p>` +
        `<p style="margin-top:8px;font-weight:600;color:#1e40af">If A − B = C, then C + B = A</p>` +
        `</div>` +

        `<p style="margin-top:16px">After you calculate an answer, use the <strong>inverse operation</strong> to check it. If the check gives you back the original number, your answer is correct.</p>` +

        `<p style="margin-top:16px"><strong>Colour code used in this section:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#2563eb;border:1px solid #93c5fd;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">original calculation — blue</span>` +
        `<span style="background:#f0fdf4;color:#16a34a;border:1px solid #86efac;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">inverse check — green</span>` +
        `<span style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">confirmed answer — red</span>` +
        `</div>`,

      workedExamples: [

        // ── WORKED EXAMPLE 7 ─────────────────────────────────────────────────
        {
          question: 'Calculate 54 738 + 27 465 and check using the inverse operation.',
          answer: `Answer confirmed: ${re('82 203')}`,
          steps: [
            `<strong>Step 1 — Calculate: ${bl('54 738 + 27 465')}</strong>` +
            we7Table +
            `<p style="margin-top:14px">${bl('Result:')} ${bl('82 203')}</p>`,

            `<strong>Step 2 — Check using the inverse operation: ${gr('82 203 − 27 465')}</strong><br>` +
            `If 54 738 + 27 465 = 82 203, then 82 203 − 27 465 must equal 54 738.` +
            we7CheckTable +
            `<p style="margin-top:14px">${gr('Check result:')} ${gr('54 738')} ✓ — matches the first number, so the answer is confirmed: ${re('82 203')}</p>`,
          ],
        },

        // ── WORKED EXAMPLE 8 ─────────────────────────────────────────────────
        {
          question: 'Calculate 91 000 − 43 567 and check using the inverse operation.',
          answer: `Answer confirmed: ${re('47 433')}`,
          steps: [
            `<strong>Step 1 — Calculate: ${bl('91 000 − 43 567')}</strong>` +
            we8Table +
            `<p style="margin-top:14px">${bl('Result:')} ${bl('47 433')}</p>`,

            `<strong>Step 2 — Check using the inverse operation: ${gr('47 433 + 43 567')}</strong><br>` +
            `If 91 000 − 43 567 = 47 433, then 47 433 + 43 567 must equal 91 000.` +
            we8CheckTable +
            `<p style="margin-top:14px">${gr('Check result:')} ${gr('91 000')} ✓ — matches the original starting number, so the answer is confirmed: ${re('47 433')}</p>`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Diagram showing the inverse relationship: 54 738 plus 27 465 equals 82 203 in blue, and the check 82 203 minus 27 465 equals 54 738 confirmed in green',
      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to estimate before calculating and use inverse operations to check addition and subtraction answers" />',
    },

  ],

  // ─── TOPIC PRACTICE ──────────────────────────────────────────────────────────
  topicPractice: [

    // ── Section 1: Addition of Large Numbers ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate and show your working in columns:\n23 456 + 34 817',
      correctAnswer: '58273',
      explanation:
        '23 456 + 34 817 = 58 273\n\n' +
        '• Units: 6 + 7 = 13 → write 3, carry 1\n' +
        '• Tens: 5 + 1 + 1 (carried) = 7\n' +
        '• Hundreds: 4 + 8 = 12 → write 2, carry 1\n' +
        '• Thousands: 3 + 4 + 1 (carried) = 8\n' +
        '• Ten thousands: 2 + 3 = 5\n\n' +
        'Answer: 58 273',
      answer: '58 273',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your carrying:\n47 865 + 38 947',
      correctAnswer: '86812',
      explanation:
        '47 865 + 38 947 = 86 812\n\n' +
        '• Units: 5 + 7 = 12 → write 2, carry 1\n' +
        '• Tens: 6 + 4 + 1 (carried) = 11 → write 1, carry 1\n' +
        '• Hundreds: 8 + 9 + 1 (carried) = 18 → write 8, carry 1\n' +
        '• Thousands: 7 + 8 + 1 (carried) = 16 → write 6, carry 1\n' +
        '• Ten thousands: 4 + 3 + 1 (carried) = 8\n\n' +
        'Answer: 86 812',
      answer: '86 812',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A school collects R34 750 in term 1, R28 965 in term 2 and R41 380 in term 3. How much did they collect in total? Show all your working.\n\n' +
        'Step 1: What is the total for term 1 and term 2?\n' +
        'Step 2: What is the grand total for all three terms?',
      parts: [
        {
          label: 'Step 1:',
          correctAnswer: '63715',
          explanation:
            'Step 1: R34 750 + R28 965\n\n' +
            '• Units: 0 + 5 = 5\n' +
            '• Tens: 5 + 6 = 11 → write 1, carry 1\n' +
            '• Hundreds: 7 + 9 + 1 (carried) = 17 → write 7, carry 1\n' +
            '• Thousands: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n' +
            '• Ten thousands: 3 + 2 + 1 (carried) = 6\n\n' +
            'Term 1 + Term 2 = R63 715',
        },
        {
          label: 'Step 2:',
          correctAnswers: ['105095', 'r105095'],
          correctAnswer: '105095',
          explanation:
            'Step 2: R63 715 + R41 380\n\n' +
            '• Units: 5 + 0 = 5\n' +
            '• Tens: 1 + 8 = 9\n' +
            '• Hundreds: 7 + 3 = 10 → write 0, carry 1\n' +
            '• Thousands: 3 + 1 + 1 (carried) = 5\n' +
            '• Ten thousands: 6 + 4 = 10 → write 0, carry 1\n' +
            '• Hundred thousands: 1 (carried) — the answer has 6 digits\n\n' +
            'Grand total = R105 095',
        },
      ],
      answer: 'Step 1: R63 715\nStep 2: R105 095',
    },

    // ── Section 2: Subtraction of Large Numbers ───────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate and show your working in columns:\n67 845 − 34 521',
      correctAnswer: '33324',
      explanation:
        '67 845 − 34 521 = 33 324\n\n' +
        '• Units: 5 − 1 = 4\n' +
        '• Tens: 4 − 2 = 2\n' +
        '• Hundreds: 8 − 5 = 3\n' +
        '• Thousands: 7 − 4 = 3\n' +
        '• Ten thousands: 6 − 3 = 3\n\n' +
        'No borrowing needed.\n' +
        'Answer: 33 324',
      answer: '33 324',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate and show your borrowing:\n83 402 − 47 865',
      correctAnswer: '35537',
      explanation:
        '83 402 − 47 865 = 35 537\n\n' +
        '• Units: 2 − 5 → can\'t subtract. Tens digit is 0, so borrow from Hundreds.\n' +
        '  Hundreds: 4 → 3 (lent to Tens). Tens: 0 → 10.\n' +
        '  Tens: 10 → 9 (lent to Units). Units: 2 → 12.\n' +
        '  Units: 12 − 5 = 7\n\n' +
        '• Tens: 9 − 6 = 3\n\n' +
        '• Hundreds: 3 − 8 → can\'t subtract. Borrow from Thousands.\n' +
        '  Thousands: 3 → 2 (lent to Hundreds). Hundreds: 3 → 13.\n' +
        '  Hundreds: 13 − 8 = 5\n\n' +
        '• Thousands: 2 − 7 → can\'t subtract. Borrow from Ten thousands.\n' +
        '  Ten thousands: 8 → 7 (lent to Thousands). Thousands: 2 → 12.\n' +
        '  Thousands: 12 − 7 = 5\n\n' +
        '• Ten thousands: 7 − 4 = 3\n\n' +
        'Answer: 35 537',
      answer: '35 537',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A factory produced 75 000 items. It sold 38 647 items in the first week and 21 934 items in the second week. How many items are left?\n\n' +
        'Step 1: Calculate the total number of items sold.\n' +
        'Step 2: Calculate the number of items left.',
      parts: [
        {
          label: 'Step 1:',
          correctAnswer: '60581',
          explanation:
            'Step 1: Total sold = 38 647 + 21 934\n\n' +
            '• Units: 7 + 4 = 11 → write 1, carry 1\n' +
            '• Tens: 4 + 3 + 1 (carried) = 8\n' +
            '• Hundreds: 6 + 9 = 15 → write 5, carry 1\n' +
            '• Thousands: 8 + 1 + 1 (carried) = 10 → write 0, carry 1\n' +
            '• Ten thousands: 3 + 2 + 1 (carried) = 6\n\n' +
            'Total items sold = 60 581',
        },
        {
          label: 'Step 2:',
          correctAnswers: ['14419', '14419items', '14419itemsleft', '14419itemsareleft'],
          correctAnswer: '14419',
          explanation:
            'Step 2: Items left = 75 000 − 60 581\n\n' +
            '• Units: 0 − 1 → can\'t subtract. Tens and Hundreds are both 0.\n' +
            '  Borrow from Thousands: Thousands 5 → 4. Hundreds 0 → 10.\n' +
            '  Hundreds: 10 → 9 (lent to Tens). Tens 0 → 10.\n' +
            '  Tens: 10 → 9 (lent to Units). Units 0 → 10.\n' +
            '  Units: 10 − 1 = 9\n\n' +
            '• Tens: 9 − 8 = 1\n\n' +
            '• Hundreds: 9 − 5 = 4\n\n' +
            '• Thousands: 4 − 0 = 4\n\n' +
            '• Ten thousands: 7 − 6 = 1\n\n' +
            'Items left = 14 419',
        },
      ],
      answer: 'Step 1: 60 581 items sold\nStep 2: 14 419 items left',
    },

    // ── Section 3: Estimating Before Calculating ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Round both numbers to the nearest 1 000 and estimate:\n38 742 + 24 615',
      correctAnswers: ['64000', '39000+25000=64000'],
      correctAnswer: '64000',
      explanation:
        '38 742: hundreds digit is 7 (5 or more) → round up → 39 000\n' +
        '24 615: hundreds digit is 6 (5 or more) → round up → 25 000\n\n' +
        'Estimate: 39 000 + 25 000 = 64 000',
      answer: '64 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Estimate first, then calculate exactly: 67 834 − 29 456\n\n' +
        'a) Round both numbers to the nearest 1 000 and estimate.\n' +
        'b) Calculate the exact answer.\n' +
        'c) Is your exact answer close to your estimate?',
      parts: [
        {
          label: 'a) Estimate:',
          correctAnswers: ['39000', '68000-29000=39000'],
          correctAnswer: '39000',
          explanation:
            '67 834: hundreds digit is 8 (5 or more) → round up → 68 000\n' +
            '29 456: hundreds digit is 4 (less than 5) → round down → 29 000\n\n' +
            'Estimate: 68 000 − 29 000 = 39 000',
        },
        {
          label: 'b) Exact answer:',
          correctAnswer: '38378',
          explanation:
            '67 834 − 29 456 = 38 378\n\n' +
            '• Units: 4 − 6 → can\'t subtract. Borrow from Tens.\n' +
            '  Tens: 3 → 2. Units: 4 → 14. 14 − 6 = 8\n' +
            '• Tens: 2 − 5 → can\'t subtract. Borrow from Hundreds.\n' +
            '  Hundreds: 8 → 7. Tens: 2 → 12. 12 − 5 = 7\n' +
            '• Hundreds: 7 − 4 = 3\n' +
            '• Thousands: 7 − 9 → can\'t subtract. Borrow from Ten thousands.\n' +
            '  Ten thousands: 6 → 5. Thousands: 7 → 17. 17 − 9 = 8\n' +
            '• Ten thousands: 5 − 2 = 3\n\n' +
            'Exact answer: 38 378',
        },
        {
          label: 'c) Is your exact answer close to your estimate?',
          correctAnswer: 'yes',
          explanation:
            'Yes! 38 378 is close to 39 000.\n' +
            'Difference: 39 000 − 38 378 = 622.\n' +
            '622 is small compared to the size of the numbers, so the answer is reasonable. ✓',
        },
      ],
      answer: 'a) 39 000\nb) 38 378\nc) Yes — 38 378 is close to 39 000 (difference of 622)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato says 84 321 − 37 648 is approximately 50 000. Is her estimate reasonable?\n' +
        'Round both numbers to the nearest 1 000 and explain whether 50 000 is a good estimate.',
      answer:
        'Step 1: Round 84 321 to the nearest 1 000.\n' +
        '  Hundreds digit is 3 (less than 5) → round down → 84 000\n\n' +
        'Step 2: Round 37 648 to the nearest 1 000.\n' +
        '  Hundreds digit is 6 (5 or more) → round up → 38 000\n\n' +
        'Step 3: Estimate: 84 000 − 38 000 = 46 000\n\n' +
        'Lerato\'s estimate of 50 000 is NOT reasonable.\n' +
        'A better estimate is 46 000.\n' +
        'The difference between 50 000 and 46 000 is 4 000 — this is too large for a good estimate.',
    },

    // ── Section 4: Inverse Operations and Checking Answers ────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Calculate 34 567 + 28 914 and write the inverse subtraction to check your answer.\n\n' +
        'a) Calculate: 34 567 + 28 914\n' +
        'b) Write and calculate the inverse check: your answer − 28 914',
      parts: [
        {
          label: 'a) Answer:',
          correctAnswer: '63481',
          explanation:
            '34 567 + 28 914 = 63 481\n\n' +
            '• Units: 7 + 4 = 11 → write 1, carry 1\n' +
            '• Tens: 6 + 1 + 1 (carried) = 8\n' +
            '• Hundreds: 5 + 9 = 14 → write 4, carry 1\n' +
            '• Thousands: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n' +
            '• Ten thousands: 3 + 2 + 1 (carried) = 6\n\n' +
            'Answer: 63 481',
        },
        {
          label: 'b) Inverse check (63 481 − 28 914 = ?):',
          correctAnswer: '34567',
          explanation:
            '63 481 − 28 914 = 34 567 ✓\n\n' +
            'This matches the first number in the original addition,\n' +
            'so the answer 63 481 is confirmed correct.\n\n' +
            'Inverse rule: if A + B = C, then C − B = A.',
        },
      ],
      answer: 'a) 63 481\nb) 63 481 − 28 914 = 34 567 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate 72 000 − 38 456 and check using the inverse operation. Show both calculations.\n\n' +
        'a) Calculate: 72 000 − 38 456\n' +
        'b) Write and calculate the inverse check: your answer + 38 456',
      parts: [
        {
          label: 'a) Answer:',
          correctAnswer: '33544',
          explanation:
            '72 000 − 38 456 = 33 544\n\n' +
            '• Units: 0 − 6 → Tens and Hundreds are both 0, borrow from Thousands.\n' +
            '  Thousands: 2 → 1 (lent to Hundreds). Hundreds: 0 → 10.\n' +
            '  Hundreds: 10 → 9 (lent to Tens). Tens: 0 → 10.\n' +
            '  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 6 = 4\n' +
            '• Tens: 9 − 5 = 4\n' +
            '• Hundreds: 9 − 4 = 5\n' +
            '• Thousands: 1 − 8 → can\'t subtract. Borrow from Ten thousands.\n' +
            '  Ten thousands: 7 → 6. Thousands: 1 → 11. 11 − 8 = 3\n' +
            '• Ten thousands: 6 − 3 = 3\n\n' +
            'Answer: 33 544',
        },
        {
          label: 'b) Inverse check (33 544 + 38 456 = ?):',
          correctAnswer: '72000',
          explanation:
            '33 544 + 38 456 = 72 000 ✓\n\n' +
            'This matches the original starting number,\n' +
            'so the answer 33 544 is confirmed correct.\n\n' +
            'Inverse rule: if A − B = C, then C + B = A.',
        },
      ],
      answer: 'a) 33 544\nb) 33 544 + 38 456 = 72 000 ✓',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'The answer to an addition sum is 91 234. One of the numbers is 47 865. What is the other number?\n' +
        'Use inverse operations to find it and show your working.\n\n' +
        'a) Use subtraction as the inverse operation: 91 234 − 47 865\n' +
        'b) Check your answer: your answer + 47 865',
      parts: [
        {
          label: 'a) The other number:',
          correctAnswer: '43369',
          explanation:
            '91 234 − 47 865 = 43 369\n\n' +
            '• Units: 4 − 5 → borrow from Tens. Tens: 3 → 2. Units: 14 − 5 = 9\n' +
            '• Tens: 2 − 6 → borrow from Hundreds. Hundreds: 2 → 1. Tens: 12 − 6 = 6\n' +
            '• Hundreds: 1 − 8 → borrow from Thousands. Thousands: 1 → 0. Hundreds: 11 − 8 = 3\n' +
            '• Thousands: 0 − 7 → borrow from Ten thousands. Ten thousands: 9 → 8. Thousands: 10 − 7 = 3\n' +
            '• Ten thousands: 8 − 4 = 4\n\n' +
            'The other number is 43 369',
        },
        {
          label: 'b) Check (43 369 + 47 865 = ?):',
          correctAnswer: '91234',
          explanation:
            '43 369 + 47 865 = 91 234 ✓\n\n' +
            'This matches the total given in the question,\n' +
            'so 43 369 is confirmed as the other number.',
        },
      ],
      answer: 'a) Other number: 43 369\nb) Check: 43 369 + 47 865 = 91 234 ✓',
    },

    // ── Section 5: Mental Calculations ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate mentally:\n45 000 + 38 000',
      correctAnswer: '83000',
      explanation:
        'Using place value thinking with thousands:\n' +
        '45 + 38 = 83\n' +
        'So 45 000 + 38 000 = 83 000',
      answer: '83 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Calculate mentally:\n\n' +
        'a) 70 000 − 43 000\n' +
        'b) 56 000 + 37 000\n' +
        'c) 90 000 − 54 000',
      parts: [
        {
          label: 'a)',
          correctAnswer: '27000',
          explanation:
            '70 000 − 43 000 = 27 000\n\n' +
            'Think: 70 − 43 = 27, so 70 000 − 43 000 = 27 000',
        },
        {
          label: 'b)',
          correctAnswer: '93000',
          explanation:
            '56 000 + 37 000 = 93 000\n\n' +
            'Think: 56 + 37 = 93, so 56 000 + 37 000 = 93 000',
        },
        {
          label: 'c)',
          correctAnswer: '36000',
          explanation:
            '90 000 − 54 000 = 36 000\n\n' +
            'Think: 90 − 54 = 36, so 90 000 − 54 000 = 36 000',
        },
      ],
      answer: 'a) 27 000\nb) 93 000\nc) 36 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Calculate mentally: 67 000 + 28 000\na) What is the answer?',
      correctAnswer: '95000',
      explanation:
        '67 000 + 28 000 = 95 000\n\n' +
        'Breaking it into parts:\n' +
        '• 60 000 + 20 000 = 80 000\n' +
        '• 7 000 + 8 000 = 15 000\n' +
        '• 80 000 + 15 000 = 95 000',
      answer: '95 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'For the calculation 67 000 + 28 000 = 95 000:\n' +
        'b) Explain the mental strategy you used to work out the answer.',
      answer:
        'Any valid mental strategy is accepted. Examples:\n\n' +
        '• Break by place value: 60 000 + 20 000 = 80 000, then 7 000 + 8 000 = 15 000, then 80 000 + 15 000 = 95 000\n' +
        '• Round and adjust: 67 000 + 30 000 = 97 000, then subtract 2 000 → 95 000\n' +
        '• Count on: start at 67 000, add 3 000 to reach 70 000, then add 25 000 → 95 000',
    },

    // ── Section 6: Money and Word Problems ────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A school raised R34 750 from fees and R18 925 from a fundraiser.\n' +
        'What is the total amount raised?',
      correctAnswers: ['53675', 'r53675'],
      correctAnswer: '53675',
      explanation:
        'R34 750 + R18 925 = R53 675\n\n' +
        '• Units: 0 + 5 = 5\n' +
        '• Tens: 5 + 2 = 7\n' +
        '• Hundreds: 7 + 9 = 16 → write 6, carry 1\n' +
        '• Thousands: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n' +
        '• Ten thousands: 3 + 1 + 1 (carried) = 5\n\n' +
        'Total raised = R53 675',
      answer: 'R53 675',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'A car costs R87 500. Thabo has saved R49 375.\n\n' +
        'a) How much more does Thabo need to buy the car?\n' +
        'b) If he saves R3 250 per month, how many months will it take him to save the remaining amount?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['38125', 'r38125'],
          correctAnswer: '38125',
          explanation:
            'Amount still needed = R87 500 − R49 375\n\n' +
            '• Units: 0 − 5 → can\'t subtract. Tens is 0, borrow from Hundreds.\n' +
            '  Hundreds: 5 → 4 (lent to Tens). Tens: 0 → 10.\n' +
            '  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 5 = 5\n' +
            '• Tens: 9 − 7 = 2\n' +
            '• Hundreds: 4 − 3 = 1\n' +
            '• Thousands: 7 − 9 → can\'t subtract. Borrow from Ten thousands.\n' +
            '  Ten thousands: 8 → 7. Thousands: 7 → 17. 17 − 9 = 8\n' +
            '• Ten thousands: 7 − 4 = 3\n\n' +
            'Thabo still needs R38 125',
        },
        {
          label: 'b)',
          correctAnswers: ['12', '12months'],
          correctAnswer: '12',
          explanation:
            'Months needed = R38 125 ÷ R3 250 = 11.73...\n\n' +
            'Since he cannot save a fraction of a month, round up to the next whole month.\n' +
            '• 11 months: 11 × R3 250 = R35 750 — not enough\n' +
            '• 12 months: 12 × R3 250 = R39 000 — enough ✓\n\n' +
            'Thabo will need 12 months.',
        },
      ],
      answer: 'a) R38 125\nb) 12 months',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato earns R23 450 per month. Her monthly expenses are R18 675.\n\n' +
        'a) How much does she save each month?\n' +
        'b) How much will she have saved after 6 months?\n' +
        'c) She wants to buy a laptop costing R12 999. After how many months can she afford it?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['4775', 'r4775'],
          correctAnswer: '4775',
          explanation:
            'Monthly savings = R23 450 − R18 675\n\n' +
            '• Units: 0 − 5 → borrow from Tens. Tens: 5 → 4. Units: 0 → 10. 10 − 5 = 5\n' +
            '• Tens: 4 − 7 → borrow from Hundreds. Hundreds: 4 → 3. Tens: 4 → 14. 14 − 7 = 7\n' +
            '• Hundreds: 3 − 6 → borrow from Thousands. Thousands: 3 → 2. Hundreds: 3 → 13. 13 − 6 = 7\n' +
            '• Thousands: 2 − 8 → borrow from Ten thousands. Ten thousands: 2 → 1. Thousands: 2 → 12. 12 − 8 = 4\n' +
            '• Ten thousands: 1 − 1 = 0\n\n' +
            'Lerato saves R4 775 per month',
        },
        {
          label: 'b)',
          correctAnswers: ['28650', 'r28650'],
          correctAnswer: '28650',
          explanation:
            'Savings after 6 months = R4 775 × 6\n\n' +
            '• 4 000 × 6 = 24 000\n' +
            '• 700 × 6 = 4 200\n' +
            '• 75 × 6 = 450\n' +
            '• 24 000 + 4 200 + 450 = 28 650\n\n' +
            'Lerato will have saved R28 650 after 6 months',
        },
        {
          label: 'c)',
          correctAnswers: ['3', '3months'],
          correctAnswer: '3',
          explanation:
            'Months needed to afford R12 999:\n\n' +
            '• 1 month: R4 775 — not enough\n' +
            '• 2 months: R4 775 × 2 = R9 550 — not enough\n' +
            '• 3 months: R4 775 × 3 = R14 325 — R14 325 > R12 999 ✓\n\n' +
            'Lerato can afford the laptop after 3 months.',
        },
      ],
      answer: 'a) R4 775\nb) R28 650\nc) 3 months',
    },

  ],

  scoreMessages: [
    { minScore: 31, message: 'Outstanding! Full marks — you have mastered all six sections of addition and subtraction.' },
    { minScore: 25, message: 'Excellent work! You have a strong understanding. Review any questions you missed.' },
    { minScore: 16, message: 'Good effort! Go back and practise the sections where you lost marks.' },
    { minScore: 0, message: 'Keep practising! Work carefully through the worked examples step by step and try again.' },
  ],
}
