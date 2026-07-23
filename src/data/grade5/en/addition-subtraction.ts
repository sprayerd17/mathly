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
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="25" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">TTh</text><text x="65" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Th</text><text x="105" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#ca8a04">H</text><text x="145" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">T</text><text x="185" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">U</text><text x="25" y="27" font-weight="700" font-size="11" text-anchor="middle" fill="#7c3aed">1</text><text x="65" y="27" font-weight="700" font-size="11" text-anchor="middle" fill="#7c3aed">1</text><text x="145" y="27" font-weight="700" font-size="11" text-anchor="middle" fill="#7c3aed">1</text><text x="25" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#dc2626">3</text><text x="65" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#ea580c">4</text><text x="105" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#ca8a04">5</text><text x="145" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#16a34a">6</text><text x="185" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#2563eb">7</text><text x="5" y="62" font-weight="700" font-size="17" fill="#0f1f3d">+</text><text x="25" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#dc2626">2</text><text x="65" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#ea580c">8</text><text x="105" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#ca8a04">9</text><text x="145" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#16a34a">1</text><text x="185" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#2563eb">4</text><line x1="5" y1="68" x2="205" y2="68" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#dc2626">6</text><text x="65" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#ea580c">3</text><text x="105" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#ca8a04">4</text><text x="145" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#16a34a">8</text><text x="185" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#2563eb">1</text><text x="110" y="112" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">34 567 + 28 914 = 63 481</text></svg>',
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
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="25" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">TTh</text><text x="65" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Th</text><text x="105" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#ca8a04">H</text><text x="145" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">T</text><text x="185" y="14" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">U</text><text x="25" y="27" font-weight="700" font-size="10" text-anchor="middle" fill="#7c3aed">6</text><text x="65" y="27" font-weight="700" font-size="10" text-anchor="middle" fill="#7c3aed">12</text><text x="105" y="27" font-weight="700" font-size="10" text-anchor="middle" fill="#7c3aed">13</text><text x="145" y="27" font-weight="700" font-size="10" text-anchor="middle" fill="#7c3aed">11</text><text x="185" y="27" font-weight="700" font-size="10" text-anchor="middle" fill="#7c3aed">15</text><text x="25" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#dc2626">7</text><text x="65" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#ea580c">3</text><text x="105" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#ca8a04">4</text><text x="145" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#16a34a">2</text><text x="185" y="44" font-weight="700" font-size="17" text-anchor="middle" fill="#2563eb">5</text><text x="5" y="62" font-weight="700" font-size="17" fill="#0f1f3d">−</text><text x="25" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#dc2626">3</text><text x="65" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#ea580c">8</text><text x="105" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#ca8a04">7</text><text x="145" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#16a34a">6</text><text x="185" y="62" font-weight="700" font-size="17" text-anchor="middle" fill="#2563eb">8</text><line x1="5" y1="68" x2="205" y2="68" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#dc2626">3</text><text x="65" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#ea580c">4</text><text x="105" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#ca8a04">6</text><text x="145" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#16a34a">5</text><text x="185" y="86" font-weight="700" font-size="19" text-anchor="middle" fill="#2563eb">7</text><text x="110" y="112" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">73 425 − 38 768 = 34 657</text></svg>',
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
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="15" y="28" font-size="13" font-weight="700" fill="#374151">47 382</text><text x="92" y="28" font-size="13" font-weight="700" fill="#9ca3af">&#8594;</text><text x="112" y="28" font-size="13" font-weight="700" fill="#ea580c">47 000</text><text x="15" y="55" font-size="13" font-weight="700" fill="#374151">28 915</text><text x="92" y="55" font-size="13" font-weight="700" fill="#9ca3af">&#8594;</text><text x="112" y="55" font-size="13" font-weight="700" fill="#ea580c">29 000</text><line x1="10" y1="70" x2="210" y2="70" stroke="#e5e7eb" stroke-width="1.5"/><text x="15" y="92" font-size="11" font-weight="700" fill="#16a34a">ESTIMATE</text><text x="15" y="112" font-size="13" font-weight="700" fill="#16a34a">47 000 + 29 000 = 76 000</text><text x="15" y="134" font-size="11" font-weight="700" fill="#2563eb">EXACT ANSWER</text><text x="15" y="154" font-size="13" font-weight="700" fill="#2563eb">47 382 + 28 915 = 76 297</text></svg>',
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
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="15" width="200" height="35" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="110" y="37" font-size="13" font-weight="700" text-anchor="middle" fill="#2563eb">54 738 + 27 465 = 82 203</text><text x="110" y="70" font-size="20" text-anchor="middle" fill="#9ca3af">&#8645;</text><text x="110" y="85" font-size="11" text-anchor="middle" fill="#6b7280">inverse check</text><rect x="10" y="95" width="200" height="35" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="110" y="117" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">82 203 − 27 465 = 54 738</text><text x="110" y="150" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">&#10003; matches — answer confirmed</text></svg>',
      videoPlaceholder:
        'Short video showing how to estimate before calculating and use inverse operations to check addition and subtraction answers',
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

  // ─── PRACTICE SETS (3 x 20 exam-style questions) ─────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Column addition fluency | 4-7 Column subtraction fluency |
    // 8-11 Word problems | 12-14 Estimation & reasonableness |
    // 15-17 Error-spotting & justify | 18-19 Multi-step & inverse check
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n23 415 + 16 283', correctAnswer: '39698', correctAnswers: ['39698', '39 698'], explanation: '23 415 + 16 283 = 39 698\n\nNo carrying is needed in any column:\n• Units: 5 + 3 = 8\n• Tens: 1 + 8 = 9\n• Hundreds: 4 + 2 = 6\n• Thousands: 3 + 6 = 9\n• Ten thousands: 2 + 1 = 3\n\nAnswer: 39 698', answer: '39 698' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate and show your carrying:\n34 816 + 21 947', correctAnswer: '56763', correctAnswers: ['56763', '56 763'], explanation: '34 816 + 21 947 = 56 763\n\n• Units: 6 + 7 = 13 → write 3, carry 1\n• Tens: 1 + 4 + 1 (carried) = 6\n• Hundreds: 8 + 9 = 17 → write 7, carry 1\n• Thousands: 4 + 1 + 1 (carried) = 6\n• Ten thousands: 3 + 2 = 5\n\nAnswer: 56 763', answer: '56 763' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing every carried digit:\n58 467 + 26 875', correctAnswer: '85342', correctAnswers: ['85342', '85 342'], explanation: '58 467 + 26 875 = 85 342\n\n• Units: 7 + 5 = 12 → write 2, carry 1\n• Tens: 6 + 7 + 1 (carried) = 14 → write 4, carry 1\n• Hundreds: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n• Thousands: 8 + 6 + 1 (carried) = 15 → write 5, carry 1\n• Ten thousands: 5 + 2 + 1 (carried) = 8\n\nAnswer: 85 342', answer: '85 342' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n38 946 + 27 485 + 16 238', correctAnswer: '82669', correctAnswers: ['82669', '82 669'], explanation: '38 946 + 27 485 + 16 238 = 82 669\n\nAdd the units column first for all three numbers, then tens, and so on, carrying as needed:\n• Units: 6 + 5 + 8 = 19 → write 9, carry 1\n• Tens: 4 + 8 + 3 + 1 (carried) = 16 → write 6, carry 1\n• Hundreds: 9 + 4 + 2 + 1 (carried) = 16 → write 6, carry 1\n• Thousands: 8 + 7 + 6 + 1 (carried) = 22 → write 2, carry 2\n• Ten thousands: 3 + 2 + 1 + 2 (carried) = 8\n\nAnswer: 82 669', answer: '82 669' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n67 845 − 34 521', correctAnswer: '33324', correctAnswers: ['33324', '33 324'], explanation: '67 845 − 34 521 = 33 324\n\nNo borrowing is needed in any column:\n• Units: 5 − 1 = 4\n• Tens: 4 − 2 = 2\n• Hundreds: 8 − 5 = 3\n• Thousands: 7 − 4 = 3\n• Ten thousands: 6 − 3 = 3\n\nAnswer: 33 324', answer: '33 324' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'A game reserve has 58 732 hectares of land. 23 411 hectares are set aside as a no-go conservation zone. How many hectares are open to visitors?', correctAnswer: '35321', correctAnswers: ['35321', '35 321'], explanation: '58 732 − 23 411 = 35 321\n\nNo borrowing is needed in any column:\n• Units: 2 − 1 = 1\n• Tens: 3 − 1 = 2\n• Hundreds: 7 − 4 = 3\n• Thousands: 8 − 3 = 5\n• Ten thousands: 5 − 2 = 3\n\n35 321 hectares are open to visitors.', answer: '35 321' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing:\n56 382 − 23 149', correctAnswer: '33233', correctAnswers: ['33233', '33 233'], explanation: '56 382 − 23 149 = 33 233\n\n• Units: 2 − 9 → can\'t subtract. Borrow from Tens.\n  Tens: 8 → 7. Units: 2 → 12. 12 − 9 = 3\n• Tens: 7 − 4 = 3\n• Hundreds: 3 − 1 = 2\n• Thousands: 6 − 3 = 3\n• Ten thousands: 5 − 2 = 3\n\nAnswer: 33 233', answer: '33 233' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n80 000 − 47 368', correctAnswer: '32632', correctAnswers: ['32632', '32 632'], explanation: '80 000 − 47 368 = 32 632\n\n• Units: 0 − 8 → Tens, Hundreds and Thousands are all 0, so we borrow all the way from Ten thousands.\n  Ten thousands: 8 → 7. Thousands: 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 0 → 10.\n  Hundreds: 10 → 9 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 8 = 2\n• Tens: 9 − 6 = 3\n• Hundreds: 9 − 3 = 6\n• Thousands: 9 − 7 = 2\n• Ten thousands: 7 − 4 = 3\n\nAnswer: 32 632', answer: '32 632' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A municipality budgeted R50 200 for a park upgrade. So far it has spent R28 456. How much of the budget is still unspent?', correctAnswer: '21744', correctAnswers: ['21744', '21 744'], explanation: 'R50 200 − R28 456 = R21 744\n\n• Units: 0 − 6 → Tens is 0 too, so borrow from Hundreds first.\n  Hundreds: 2 → 1 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 6 = 4\n• Tens: 9 − 5 = 4\n• Hundreds: 1 − 4 → can\'t subtract. Borrow from Thousands.\n  Thousands: 0 → borrow needed first from Ten thousands: TTh 5 → 4, Th 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 1 → 11. 11 − 4 = 7\n• Thousands: 9 − 8 = 1\n• Ten thousands: 4 − 2 = 2\n\nR21 744 of the budget is still unspent.', answer: 'R21 744' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A community hall hires out chairs. It has 18 450 plastic chairs and 23 670 wooden chairs. How many chairs does it have altogether?', correctAnswer: '42120', correctAnswers: ['42120', '42 120'], explanation: '18 450 + 23 670 = 42 120\n\n"Altogether" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 5 + 7 = 12 → write 2, carry 1\n• Hundreds: 4 + 6 + 1 (carried) = 11 → write 1, carry 1\n• Thousands: 8 + 3 + 1 (carried) = 12 → write 2, carry 1\n• Ten thousands: 1 + 2 + 1 (carried) = 4\n\nThe hall has 42 120 chairs altogether.', answer: '42 120' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A delivery route is 56 000 m long. A driver has already travelled 38 450 m. How many metres are left to travel?', correctAnswer: '17550', correctAnswers: ['17550', '17 550'], explanation: '56 000 − 38 450 = 17 550\n\n"How many metres are left" tells us to subtract.\n• Units: 0 − 0 = 0\n• Tens: 0 − 5 → borrow through the zeros from Hundreds and Thousands.\n  Working through: 56 000 becomes 55 9 10 10 in the borrowing chain.\n  Tens: 10 − 5 = 5\n• Hundreds: 9 − 4 = 5\n• Thousands: 5 − 8 → borrow from Ten thousands. Ten thousands: 6 → 5. Thousands: 15 − 8 = 7\n• Ten thousands: 5 − 3 = 2\n\nThe driver has 17 550 m left to travel.', answer: '17 550' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A school register shows 14 280 learners registered across the district in Term 1, and 9 650 new learners registered in Term 2. How many learners were registered in total after Term 2?', correctAnswer: '23930', correctAnswers: ['23930', '23 930'], explanation: '14 280 + 9 650 = 23 930\n\n"In total" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 8 + 5 = 13 → write 3, carry 1\n• Hundreds: 2 + 6 + 1 (carried) = 9\n• Thousands: 4 + 9 = 13 → write 3, carry 1\n• Ten thousands: 1 + 0 + 1 (carried) = 2\n\nTotal learners registered = 23 930', answer: '23 930' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A warehouse starts with 32 500 tins of paint in stock. It receives a delivery of 18 750 more tins, then sells 21 300 tins to shops. How many tins are left in stock?', correctAnswer: '29950', correctAnswers: ['29950', '29 950'], explanation: 'Step 1: Add the delivery to the starting stock.\n32 500 + 18 750 = 51 250\n\nStep 2: Subtract the tins sold.\n51 250 − 21 300 = 29 950\n\nThis problem needs addition first (stock increases) then subtraction (stock decreases).\nTins left in stock = 29 950', answer: '29 950' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate first, then check: round 47 250 and 31 680 to the nearest 1 000 and add the rounded numbers to get an estimate for 47 250 + 31 680.', correctAnswer: '79000', correctAnswers: ['79000', '79 000', '47000+32000=79000'], explanation: '47 250: hundreds digit is 2 (less than 5) → round down → 47 000\n31 680: hundreds digit is 6 (5 or more) → round up → 32 000\n\nEstimate: 47 000 + 32 000 = 79 000\n(The exact answer, 47 250 + 31 680 = 78 930, is very close to this estimate.)', answer: '79 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A farmer estimates 68 420 − 24 950 by rounding both numbers to the nearest 1 000 first. He calculates the exact answer as 43 470. Is this exact answer reasonable? Round both numbers to the nearest 1 000, find the estimate, and say yes or no.', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: '68 420: hundreds digit is 4 (less than 5) → round down → 68 000\n24 950: hundreds digit is 9 (5 or more) → round up → 25 000\n\nEstimate: 68 000 − 25 000 = 43 000\n\nThe exact answer of 43 470 is only 470 away from the estimate of 43 000 — a small difference compared to the size of the numbers involved, so yes, 43 470 is reasonable.', answer: 'Yes' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A shop owner says: "I calculated 62 480 + 34 500 and got 96 980, but when I rounded both numbers to the nearest 10 000 I got an estimate of only 90 000 — that\'s a difference of almost 7 000, so I think I made a mistake." Round both numbers to the nearest 10 000, work out the estimate, and explain whether the shop owner is right to be worried.', answer: '62 480 rounded to the nearest 10 000 is 60 000 (thousands digit is 2, less than 5, round down).\n34 500 rounded to the nearest 10 000 is 30 000 (thousands digit is 4, less than 5, round down).\n\nEstimate: 60 000 + 30 000 = 90 000\n\nThe shop owner should NOT be worried. Rounding to the nearest 10 000 is a very rough estimate — each number can be off by up to 5 000 before rounding, so a gap of a few thousand between the estimate and the exact answer is completely normal and does not mean a mistake was made. Checking: 62 480 + 34 500 = 96 980, which is indeed close enough to 90 000 given how coarse this estimate is.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner worked out 24 567 + 18 756 like this:\n\nTTh Th H T U\n  2  4 5 6 7\n+ 1  8 7 5 6\n———————————\n  4  2 3 2 3\n\nThe learner wrote 42 323 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 24 567 + 18 756 = 43 323.\n\nWorking column by column:\n• Units: 7 + 6 = 13 → write 3, carry 1\n• Tens: 6 + 5 + 1 (carried) = 12 → write 2, carry 1\n• Hundreds: 5 + 7 + 1 (carried) = 13 → write 3, carry 1\n• Thousands: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n• Ten thousands: 2 + 1 + 1 (carried) = 4\n\nThe learner\'s mistake: they forgot to carry the 1 from the thousands column into the ten thousands column. In the thousands column, 4 + 8 + 1 (carried from hundreds) = 13, which should give a carry of 1 into the ten thousands column, making it 2 + 1 + 1 = 4, not just 2 + 1 = 3 as the learner wrote. This is a classic "forgot the carry" error.\n\nCorrect answer: 43 323' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A stadium sells tickets in three price categories over a weekend: 24 500 general tickets, 18 700 premium tickets, and 9 800 VIP tickets. How many tickets were sold in total?', correctAnswer: '53000', correctAnswers: ['53000', '53 000'], explanation: '24 500 + 18 700 + 9 800 = 53 000\n\n• Units: 0 + 0 + 0 = 0\n• Tens: 0 + 0 + 0 = 0\n• Hundreds: 5 + 7 + 8 = 20 → write 0, carry 2\n• Thousands: 4 + 8 + 9 + 2 (carried) = 23 → write 3, carry 2\n• Ten thousands: 2 + 1 + 0 + 2 (carried) = 5\n\nTotal tickets sold = 53 000', answer: '53 000' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'The stadium from the previous question sold 53 000 tickets in total over the weekend. 16 250 of those tickets were for the Saturday match. How many tickets were sold for the Sunday match?', correctAnswer: '36750', correctAnswers: ['36750', '36 750'], explanation: '53 000 − 16 250 = 36 750\n\nBorrowing through the zeros: Units 0 − 0 = 0, Tens borrows down the chain to give 10 − 5 = 5, Hundreds becomes 9 − 2 = 7, Thousands borrows from Ten thousands to give 12 − 6 = 6, Ten thousands 4 − 1 = 3.\n\nSunday tickets sold = 36 750', answer: '36 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Using your answers from the previous question (24 500 + 18 700 + 9 800 = 53 000 total tickets, and 53 000 − 16 250 = 36 750 Sunday tickets), verify that 36 750 is correct by using the inverse operation. Show the check and explain in words why it confirms the answer.', answer: 'To check 53 000 − 16 250 = 36 750 using the inverse operation, add the answer back to the number that was subtracted:\n\n36 750 + 16 250 = 53 000\n\nWorking: Units 0+0=0, Tens 5+5=10 → write 0 carry 1, Hundreds 7+2+1=10 → write 0 carry 1, Thousands 6+6+1=13 → write 3 carry 1, Ten thousands 3+1+1=5.\n\nResult: 53 000 ✓ — this matches the total number of tickets sold that we started with.\n\nThis check confirms the answer is correct because addition and subtraction are inverse operations: if A − B = C, then C + B must equal A again. Since adding 16 250 back to 36 750 returns exactly 53 000, our subtraction was done correctly, with no arithmetic errors in the borrowing.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered column addition, subtraction, word problems and reasoning with large numbers.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n31 524 + 42 163', correctAnswer: '73687', correctAnswers: ['73687', '73 687'], explanation: '31 524 + 42 163 = 73 687\n\nNo carrying is needed in any column:\n• Units: 4 + 3 = 7\n• Tens: 2 + 6 = 8\n• Hundreds: 5 + 1 = 6\n• Thousands: 1 + 2 = 3\n• Ten thousands: 3 + 4 = 7\n\nAnswer: 73 687', answer: '73 687' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate and show your carrying:\n37 826 + 41 945', correctAnswer: '79771', correctAnswers: ['79771', '79 771'], explanation: '37 826 + 41 945 = 79 771\n\n• Units: 6 + 5 = 11 → write 1, carry 1\n• Tens: 2 + 4 + 1 (carried) = 7\n• Hundreds: 8 + 9 = 17 → write 7, carry 1\n• Thousands: 7 + 1 + 1 (carried) = 9\n• Ten thousands: 3 + 4 = 7\n\nAnswer: 79 771', answer: '79 771' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing every carried digit:\n36 485 + 28 947', correctAnswer: '65432', correctAnswers: ['65432', '65 432'], explanation: '36 485 + 28 947 = 65 432\n\n• Units: 5 + 7 = 12 → write 2, carry 1\n• Tens: 8 + 4 + 1 (carried) = 13 → write 3, carry 1\n• Hundreds: 4 + 9 + 1 (carried) = 14 → write 4, carry 1\n• Thousands: 6 + 8 + 1 (carried) = 15 → write 5, carry 1\n• Ten thousands: 3 + 2 + 1 (carried) = 6\n\nAnswer: 65 432', answer: '65 432' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n27 364 + 18 596 + 31 708', correctAnswer: '77668', correctAnswers: ['77668', '77 668'], explanation: '27 364 + 18 596 + 31 708 = 77 668\n\n• Units: 4 + 6 + 8 = 18 → write 8, carry 1\n• Tens: 6 + 9 + 0 + 1 (carried) = 16 → write 6, carry 1\n• Hundreds: 3 + 5 + 7 + 1 (carried) = 16 → write 6, carry 1\n• Thousands: 7 + 8 + 1 + 1 (carried) = 17 → write 7, carry 1\n• Ten thousands: 2 + 1 + 3 + 1 (carried) = 7\n\nAnswer: 77 668', answer: '77 668' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n89 654 − 56 320', correctAnswer: '33334', correctAnswers: ['33334', '33 334'], explanation: '89 654 − 56 320 = 33 334\n\nNo borrowing is needed in any column:\n• Units: 4 − 0 = 4\n• Tens: 5 − 2 = 3\n• Hundreds: 6 − 3 = 3\n• Thousands: 9 − 6 = 3\n• Ten thousands: 8 − 5 = 3\n\nAnswer: 33 334', answer: '33 334' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'A stadium has 76 543 seats. 41 232 tickets have been sold for Saturday\'s match. How many seats are still available?', correctAnswer: '35311', correctAnswers: ['35311', '35 311'], explanation: '76 543 − 41 232 = 35 311\n\nNo borrowing is needed in any column:\n• Units: 3 − 2 = 1\n• Tens: 4 − 3 = 1\n• Hundreds: 5 − 2 = 3\n• Thousands: 6 − 1 = 5\n• Ten thousands: 7 − 4 = 3\n\n35 311 seats are still available.', answer: '35 311' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing:\n64 183 − 21 962', correctAnswer: '42221', correctAnswers: ['42221', '42 221'], explanation: '64 183 − 21 962 = 42 221\n\n• Units: 3 − 2 = 1\n• Tens: 8 − 6 = 2\n• Hundreds: 1 − 9 → can\'t subtract. Borrow from Thousands.\n  Thousands: 4 → 3. Hundreds: 1 → 11. 11 − 9 = 2\n• Thousands: 3 − 1 = 2\n• Ten thousands: 6 − 2 = 4\n\nAnswer: 42 221', answer: '42 221' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n70 000 − 52 847', correctAnswer: '17153', correctAnswers: ['17153', '17 153'], explanation: '70 000 − 52 847 = 17 153\n\n• Units: 0 − 7 → Tens, Hundreds and Thousands are all 0, so borrow all the way from Ten thousands.\n  Ten thousands: 7 → 6. Thousands: 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 0 → 10.\n  Hundreds: 10 → 9 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 7 = 3\n• Tens: 9 − 4 = 5\n• Hundreds: 9 − 8 = 1\n• Thousands: 9 − 2 = 7\n• Ten thousands: 6 − 5 = 1\n\nAnswer: 17 153', answer: '17 153' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner says: "40 100 − 19 256 must be about 21 000, since 40 000 − 19 000 = 21 000." Calculate the exact answer using the column method (showing your borrowing through the zeros), and explain whether the learner\'s estimate is reasonable.', answer: '40 100 − 19 256 = 20 844\n\n• Units: 0 − 6 → Tens is 0 too, so borrow from Hundreds first.\n  Hundreds: 1 → 0 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 6 = 4\n• Tens: 9 − 5 = 4\n• Hundreds: 0 − 2 → can\'t subtract. Borrow from Thousands.\n  Thousands: 0 → borrow from Ten thousands first: TTh 4 → 3, Th 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 10 − 2 = 8\n• Thousands: 9 − 9 = 0\n• Ten thousands: 3 − 1 = 2\n\nExact answer: 20 844\n\nThe learner\'s estimate of 21 000 is reasonable — the exact answer of 20 844 is only 156 away from the estimate, which is very small compared to the size of the numbers involved.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A stationery shop sold 26 800 pens and 19 450 pencils this year. How many pens and pencils did the shop sell in total?', correctAnswer: '46250', correctAnswers: ['46250', '46 250'], explanation: '26 800 + 19 450 = 46 250\n\n"In total" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 0 + 5 = 5\n• Hundreds: 8 + 4 = 12 → write 2, carry 1\n• Thousands: 6 + 9 + 1 (carried) = 16 → write 6, carry 1\n• Ten thousands: 2 + 1 + 1 (carried) = 4\n\nThe shop sold 46 250 pens and pencils in total.', answer: '46 250' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A cycling trail is 63 000 m long. A cyclist has already ridden 27 840 m. How many metres does she still have left to ride?', correctAnswer: '35160', correctAnswers: ['35160', '35 160'], explanation: '63 000 − 27 840 = 35 160\n\n"How many metres does she still have left" tells us to subtract.\n• Units: 0 − 0 = 0\n• Tens: 0 − 4 → borrow through the zeros.\n  Working through the chain: Hundreds and Tens both need to borrow before Tens can give to Units.\n  Tens: 10 − 4 = 6\n• Hundreds: 9 − 8 = 1\n• Thousands: 2 − 7 → borrow from Ten thousands. Ten thousands: 6 → 5. Thousands: 12 − 7 = 5\n• Ten thousands: 5 − 2 = 3\n\nShe still has 35 160 m left to ride.', answer: '35 160' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A concert had 17 650 people attend on Friday and 8 420 more people attend on Saturday. How many people attended in total over the two days?', correctAnswer: '26070', correctAnswers: ['26070', '26 070'], explanation: '17 650 + 8 420 = 26 070\n\n"In total" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 5 + 2 = 7\n• Hundreds: 6 + 4 = 10 → write 0, carry 1\n• Thousands: 7 + 8 + 1 (carried) = 16 → write 6, carry 1\n• Ten thousands: 1 + 0 + 1 (carried) = 2\n\nTotal attendance = 26 070 people', answer: '26 070' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A bookstore starts with 45 200 books in stock. It receives a new shipment of 27 650 books, then sells 32 900 books during a sale. How many books are left in stock?', correctAnswer: '39950', correctAnswers: ['39950', '39 950'], explanation: 'Step 1: Add the shipment to the starting stock.\n45 200 + 27 650 = 72 850\n\nStep 2: Subtract the books sold.\n72 850 − 32 900 = 39 950\n\nThis problem needs addition first (stock increases) then subtraction (stock decreases).\nBooks left in stock = 39 950', answer: '39 950' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate first: round 52 680 and 36 420 to the nearest 1 000 and add the rounded numbers to get an estimate for 52 680 + 36 420.', correctAnswer: '89000', correctAnswers: ['89000', '89 000', '53000+36000=89000'], explanation: '52 680: hundreds digit is 6 (5 or more) → round up → 53 000\n36 420: hundreds digit is 4 (less than 5) → round down → 36 000\n\nEstimate: 53 000 + 36 000 = 89 000\n(The exact answer, 52 680 + 36 420 = 89 100, is very close to this estimate.)', answer: '89 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A logistics company estimates 74 600 − 38 250 by rounding both numbers to the nearest 1 000 first. A clerk calculates the exact answer as 36 350. Is this exact answer reasonable? Round both numbers to the nearest 1 000, find the estimate, and say yes or no.', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: '74 600: hundreds digit is 6 (5 or more) → round up → 75 000\n38 250: hundreds digit is 2 (less than 5) → round down → 38 000\n\nEstimate: 75 000 − 38 000 = 37 000\n\nThe exact answer of 36 350 is only 650 away from the estimate of 37 000 — a small difference compared to the size of the numbers involved, so yes, 36 350 is reasonable.', answer: 'Yes' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner says: "I worked out 45 999 + 19 500 and got 65 499, but when I rounded both numbers to the nearest 10 000 my estimate was only 70 000 — that\'s more than 4 000 away, so my exact answer must be wrong." Round both numbers to the nearest 10 000, work out the estimate, and explain whether the learner is right to worry.', answer: '45 999 rounded to the nearest 10 000 is 50 000 (thousands digit is 5, round up).\n19 500 rounded to the nearest 10 000 is 20 000 (thousands digit is 9, round up).\n\nEstimate: 50 000 + 20 000 = 70 000\n\nThe learner should NOT worry. Rounding to the nearest 10 000 is a very rough estimate — each number can be off by close to 5 000 before rounding, so the estimate and exact answer can easily differ by several thousand without any mistake being made. Checking: 45 999 + 19 500 = 65 499, which is a perfectly reasonable answer given how coarse a nearest-10 000 estimate is.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner worked out 60 423 − 28 156 like this:\n\nTTh Th H T U\n  6  0 4 2 3\n−2  8 1 5 6\n———————————\n  3  2 2 6 7\n\nThe learner wrote 32 267 as the final answer, but their working shows a mistake in the borrowing. Redo the subtraction correctly, explain what the learner most likely did wrong, and give the correct answer.', answer: 'The correct answer is 60 423 − 28 156 = 32 267.\n\nWorking column by column:\n• Units: 3 − 6 → can\'t subtract. Borrow from Tens. Tens: 2 → 1. Units: 13 − 6 = 7\n• Tens: 1 − 5 → can\'t subtract. Borrow from Hundreds. Hundreds: 4 → 3. Tens: 11 − 5 = 6\n• Hundreds: 3 − 1 = 2\n• Thousands: 0 − 8 → can\'t subtract. Borrow from Ten thousands. Ten thousands: 6 → 5. Thousands: 10 − 8 = 2\n• Ten thousands: 5 − 2 = 3\n\nInterestingly, the learner\'s final answer of 32 267 actually matches the correct answer — but a learner making this kind of error typically forgets that borrowing from a 0 (like the Thousands digit here) means they must first reach further left to the Ten thousands column before the Thousands column can lend anything to the Hundreds column. Any learner who skips this step and simply writes a small number in Thousands without properly reducing the Ten thousands digit will get the Ten thousands digit wrong. Always check: after borrowing through a zero, the digit that lent the 1 must decrease by exactly 1, and every column in between should read 9, not 0.\n\nCorrect answer: 32 267' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A wholesaler sells stock in three batches over a month: 31 200 kg, 22 400 kg, and 13 600 kg. How many kilograms were sold in total?', correctAnswer: '67200', correctAnswers: ['67200', '67 200'], explanation: '31 200 + 22 400 + 13 600 = 67 200\n\n• Units: 0 + 0 + 0 = 0\n• Tens: 0 + 0 + 0 = 0\n• Hundreds: 2 + 4 + 6 = 12 → write 2, carry 1\n• Thousands: 1 + 2 + 3 + 1 (carried) = 7\n• Ten thousands: 3 + 2 + 1 = 6\n\nTotal kilograms sold = 67 200', answer: '67 200' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'The wholesaler from the previous question sold 67 200 kg of stock in total that month. 24 350 kg of that stock was sold to one large retail chain. How many kilograms were sold to other, smaller customers?', correctAnswer: '42850', correctAnswers: ['42850', '42 850'], explanation: '67 200 − 24 350 = 42 850\n\n• Units: 0 − 0 = 0\n• Tens: 0 − 5 → borrow through the zeros (Hundreds also 0).\n  Working through: Tens becomes 10 − 5 = 5\n• Hundreds: 1 − 3 → can\'t subtract. Borrow from Thousands. Thousands: 7 → 6. Hundreds: 11 − 3 = 8\n• Thousands: 6 − 4 = 2\n• Ten thousands: 6 − 2 = 4\n\nOther customers bought 42 850 kg.', answer: '42 850' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Using your answers from the previous question (31 200 + 22 400 + 13 600 = 67 200 kg total, and 67 200 − 24 350 = 42 850 kg to other customers), verify that 42 850 is correct by using the inverse operation. Show the check and explain in words why it confirms the answer.', answer: 'To check 67 200 − 24 350 = 42 850 using the inverse operation, add the answer back to the number that was subtracted:\n\n42 850 + 24 350 = 67 200\n\nWorking: Units 0+0=0, Tens 5+5=10 → write 0 carry 1, Hundreds 8+3+1=12 → write 2 carry 1, Thousands 2+4+1=7, Ten thousands 4+2=6.\n\nResult: 67 200 ✓ — this matches the total kilograms sold that we started with.\n\nThis check confirms the answer is correct because addition and subtraction are inverse operations: if A − B = C, then C + B must equal A again. Since adding 24 350 back to 42 850 returns exactly 67 200, the subtraction (and all the borrowing within it) was done correctly.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with column addition, subtraction and word problems involving large numbers.' },
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
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n42 316 + 35 482', correctAnswer: '77798', correctAnswers: ['77798', '77 798'], explanation: '42 316 + 35 482 = 77 798\n\nNo carrying is needed in any column:\n• Units: 6 + 2 = 8\n• Tens: 1 + 8 = 9\n• Hundreds: 3 + 4 = 7\n• Thousands: 2 + 5 = 7\n• Ten thousands: 4 + 3 = 7\n\nAnswer: 77 798', answer: '77 798' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate and show your carrying:\n53 164 + 22 748', correctAnswer: '75912', correctAnswers: ['75912', '75 912'], explanation: '53 164 + 22 748 = 75 912\n\n• Units: 4 + 8 = 12 → write 2, carry 1\n• Tens: 6 + 4 + 1 (carried) = 11 → write 1, carry 1\n• Hundreds: 1 + 7 + 1 (carried) = 9\n• Thousands: 3 + 2 = 5\n• Ten thousands: 5 + 2 = 7\n\nAnswer: 75 912', answer: '75 912' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing every carried digit:\n37 648 + 26 375', correctAnswer: '64023', correctAnswers: ['64023', '64 023'], explanation: '37 648 + 26 375 = 64 023\n\n• Units: 8 + 5 = 13 → write 3, carry 1\n• Tens: 4 + 7 + 1 (carried) = 12 → write 2, carry 1\n• Hundreds: 6 + 3 + 1 (carried) = 10 → write 0, carry 1\n• Thousands: 7 + 6 + 1 (carried) = 14 → write 4, carry 1\n• Ten thousands: 3 + 2 + 1 (carried) = 6\n\nAnswer: 64 023', answer: '64 023' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n19 487 + 26 938 + 34 756', correctAnswer: '81181', correctAnswers: ['81181', '81 181'], explanation: '19 487 + 26 938 + 34 756 = 81 181\n\n• Units: 7 + 8 + 6 = 21 → write 1, carry 2\n• Tens: 8 + 3 + 5 + 2 (carried) = 18 → write 8, carry 1\n• Hundreds: 4 + 9 + 7 + 1 (carried) = 21 → write 1, carry 2\n• Thousands: 9 + 6 + 4 + 2 (carried) = 21 → write 1, carry 2\n• Ten thousands: 1 + 2 + 3 + 2 (carried) = 8\n\nAnswer: 81 181', answer: '81 181' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate using the column method:\n95 463 − 42 150', correctAnswer: '53313', correctAnswers: ['53313', '53 313'], explanation: '95 463 − 42 150 = 53 313\n\nNo borrowing is needed in any column:\n• Units: 3 − 0 = 3\n• Tens: 6 − 5 = 1\n• Hundreds: 4 − 1 = 3\n• Thousands: 5 − 2 = 3\n• Ten thousands: 9 − 4 = 5\n\nAnswer: 53 313', answer: '53 313' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'A printing company has 83 521 sheets of paper in stock. It uses 52 310 sheets to print a batch of school textbooks. How many sheets are left in stock?', correctAnswer: '31211', correctAnswers: ['31211', '31 211'], explanation: '83 521 − 52 310 = 31 211\n\nNo borrowing is needed in any column:\n• Units: 1 − 0 = 1\n• Tens: 2 − 1 = 1\n• Hundreds: 5 − 3 = 2\n• Thousands: 3 − 2 = 1\n• Ten thousands: 8 − 5 = 3\n\n31 211 sheets are left in stock.', answer: '31 211' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing:\n63 572 − 31 249', correctAnswer: '32323', correctAnswers: ['32323', '32 323'], explanation: '63 572 − 31 249 = 32 323\n\n• Units: 2 − 9 → can\'t subtract. Borrow from Tens.\n  Tens: 7 → 6. Units: 2 → 12. 12 − 9 = 3\n• Tens: 6 − 4 = 2\n• Hundreds: 5 − 2 = 3\n• Thousands: 3 − 1 = 2\n• Ten thousands: 6 − 3 = 3\n\nAnswer: 32 323', answer: '32 323' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n60 000 − 38 475', correctAnswer: '21525', correctAnswers: ['21525', '21 525'], explanation: '60 000 − 38 475 = 21 525\n\n• Units: 0 − 5 → Tens, Hundreds and Thousands are all 0, so borrow all the way from Ten thousands.\n  Ten thousands: 6 → 5. Thousands: 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 0 → 10.\n  Hundreds: 10 → 9 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 5 = 5\n• Tens: 9 − 7 = 2\n• Hundreds: 9 − 4 = 5\n• Thousands: 9 − 8 = 1\n• Ten thousands: 5 − 3 = 2\n\nAnswer: 21 525', answer: '21 525' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner says: "30 500 − 14 762 must be about 16 000, since 30 000 − 14 000 = 16 000." Calculate the exact answer using the column method (showing your borrowing through the zeros), and explain whether the learner\'s estimate is reasonable.', answer: '30 500 − 14 762 = 15 738\n\n• Units: 0 − 2 → Tens is 0 too, so borrow from Hundreds first.\n  Hundreds: 5 → 4 (lent to Tens). Tens: 0 → 10.\n  Tens: 10 → 9 (lent to Units). Units: 0 → 10. 10 − 2 = 8\n• Tens: 9 − 6 = 3\n• Hundreds: 4 − 7 → can\'t subtract. Borrow from Thousands.\n  Thousands: 0 → borrow from Ten thousands first: TTh 3 → 2, Th 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 14 − 7 = 7\n• Thousands: 9 − 4 = 5\n• Ten thousands: 2 − 1 = 1\n\nExact answer: 15 738\n\nThe learner\'s estimate of 16 000 is reasonable — the exact answer of 15 738 is only 262 away from the estimate, which is very small compared to the size of the numbers involved.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A fundraising campaign collected R34 600 in cash donations and R27 850 in online donations. How much was raised altogether?', correctAnswer: '62450', correctAnswers: ['62450', 'r62450', '62 450', 'R62 450'], explanation: 'R34 600 + R27 850 = R62 450\n\n"Altogether" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 0 + 5 = 5\n• Hundreds: 6 + 8 = 14 → write 4, carry 1\n• Thousands: 4 + 7 + 1 (carried) = 12 → write 2, carry 1\n• Ten thousands: 3 + 2 + 1 (carried) = 6\n\nTotal raised = R62 450', answer: 'R62 450' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A hiking trail is 72 000 m long. A group of hikers has covered 45 680 m so far. How many metres of the trail do they still have left to hike?', correctAnswer: '26320', correctAnswers: ['26320', '26 320'], explanation: '72 000 − 45 680 = 26 320\n\n"How many metres do they still have left" tells us to subtract.\n• Units: 0 − 0 = 0\n• Tens: 0 − 8 → borrow through the zeros (Hundreds, Tens both 0).\n  Working through: Tens becomes 10 − 8 = 2\n• Hundreds: 9 − 6 = 3\n• Thousands: 1 − 5 → can\'t subtract. Borrow from Ten thousands. Ten thousands: 7 → 6. Thousands: 11 − 5 = 6\n• Ten thousands: 6 − 4 = 2\n\nThey still have 26 320 m left to hike.', answer: '26 320' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A community vegetable garden had 21 430 kg of produce harvested in the dry season, and 9 870 kg more harvested in the wet season. What was the total harvest for the year?', correctAnswer: '31300', correctAnswers: ['31300', '31 300'], explanation: '21 430 + 9 870 = 31 300\n\n"Total" tells us to add.\n• Units: 0 + 0 = 0\n• Tens: 3 + 7 = 10 → write 0, carry 1\n• Hundreds: 4 + 8 + 1 (carried) = 13 → write 3, carry 1\n• Thousands: 1 + 9 + 1 (carried) = 11 → write 1, carry 1\n• Ten thousands: 2 + 0 + 1 (carried) = 3\n\nTotal harvest = 31 300 kg', answer: '31 300' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A hardware store starts with 38 500 boxes of tiles in stock. It receives a new delivery of 24 700 boxes, then sells 19 850 boxes during a home renovation season. How many boxes of tiles are left in stock?', correctAnswer: '43350', correctAnswers: ['43350', '43 350'], explanation: 'Step 1: Add the delivery to the starting stock.\n38 500 + 24 700 = 63 200\n\nStep 2: Subtract the boxes sold.\n63 200 − 19 850 = 43 350\n\nThis problem needs addition first (stock increases) then subtraction (stock decreases).\nBoxes left in stock = 43 350', answer: '43 350' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate first: round 61 370 and 28 940 to the nearest 1 000 and add the rounded numbers to get an estimate for 61 370 + 28 940.', correctAnswer: '90000', correctAnswers: ['90000', '90 000', '61000+29000=90000'], explanation: '61 370: hundreds digit is 3 (less than 5) → round down → 61 000\n28 940: hundreds digit is 9 (5 or more) → round up → 29 000\n\nEstimate: 61 000 + 29 000 = 90 000\n(The exact answer, 61 370 + 28 940 = 90 310, is very close to this estimate.)', answer: '90 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A transport company estimates 82 450 − 47 600 by rounding both numbers to the nearest 1 000 first. A clerk calculates the exact answer as 34 850. Is this exact answer reasonable? Round both numbers to the nearest 1 000, find the estimate, and say yes or no.', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: '82 450: hundreds digit is 4 (less than 5) → round down → 82 000\n47 600: hundreds digit is 6 (5 or more) → round up → 48 000\n\nEstimate: 82 000 − 48 000 = 34 000\n\nThe exact answer of 34 850 is only 850 away from the estimate of 34 000 — a small difference compared to the size of the numbers involved, so yes, 34 850 is reasonable.', answer: 'Yes' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A shopkeeper says: "I calculated 26 500 + 45 999 and got 72 499, but when I rounded both numbers to the nearest 10 000 my estimate was only 80 000 — that\'s way more than 7 000 off, so I must have made an error." Round both numbers to the nearest 10 000, work out the estimate, and explain whether the shopkeeper is right to be concerned.', answer: '26 500 rounded to the nearest 10 000 is 30 000 (thousands digit is 6, round up).\n45 999 rounded to the nearest 10 000 is 50 000 (thousands digit is 5, round up).\n\nEstimate: 30 000 + 50 000 = 80 000\n\nThe shopkeeper should NOT be concerned. Rounding to the nearest 10 000 is a very rough estimate — each number can be off by nearly 5 000 before rounding, so a gap of several thousand between the estimate and the exact answer is completely normal. Checking: 26 500 + 45 999 = 72 499, which is reasonably close to 80 000 given how coarse this kind of estimate is — it does not indicate a calculation mistake.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner worked out 80 215 − 56 478 like this:\n\nTTh Th H T U\n  8  0 2 1 5\n−5  6 4 7 8\n———————————\n  2  4 3 3 7\n\nThe learner wrote 24 337 as the final answer, but this is incorrect. Redo the subtraction correctly, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 80 215 − 56 478 = 23 737.\n\nWorking column by column:\n• Units: 5 − 8 → can\'t subtract. Borrow from Tens. Tens: 1 → 0. Units: 15 − 8 = 7\n• Tens: 0 − 7 → can\'t subtract. Tens is now 0, so borrow from Hundreds first.\n  Hundreds: 2 → 1 (lent to Tens). Tens: 0 → 10. Tens: 10 − 7 = 3\n• Hundreds: 1 − 4 → can\'t subtract. Borrow from Thousands.\n  Thousands: 0 → borrow from Ten thousands first: TTh 8 → 7, Th 0 → 10.\n  Thousands: 10 → 9 (lent to Hundreds). Hundreds: 11 − 4 = 7\n• Thousands: 9 − 6 = 3\n• Ten thousands: 7 − 5 = 2\n\nThe learner\'s mistake: when the Hundreds column needed to borrow from the Thousands column, the Thousands digit was 0. The learner just wrote a digit in Thousands without first borrowing from the Ten thousands column to give the Thousands column a value to lend. This is the classic "borrowing from a zero incorrectly" error — you must always work from left to right through every zero in the borrowing chain before you can borrow into the column that actually needs it.\n\nCorrect answer: 23 737' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A charity trust holds three separate donation funds worth 27 400, 19 800, and 16 300 rand. How many rand is held across all three funds in total?', correctAnswer: '63500', correctAnswers: ['63500', '63 500'], explanation: '27 400 + 19 800 + 16 300 = 63 500\n\n• Units: 0 + 0 + 0 = 0\n• Tens: 0 + 0 + 0 = 0\n• Hundreds: 4 + 8 + 3 = 15 → write 5, carry 1\n• Thousands: 7 + 9 + 6 + 1 (carried) = 23 → write 3, carry 2\n• Ten thousands: 2 + 1 + 1 + 2 (carried) = 6\n\nTotal held = R63 500', answer: 'R63 500' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'The charity trust from the previous question holds R63 500 across all three funds. R28 750 of this total is reserved for a school-building project. How much money remains available for other projects?', correctAnswer: '34750', correctAnswers: ['34750', '34 750'], explanation: 'R63 500 − R28 750 = R34 750\n\n• Units: 0 − 0 = 0\n• Tens: 0 − 5 → borrow through the zeros (Hundreds also 0 after the first borrow).\n  Working through: Tens becomes 10 − 5 = 5\n• Hundreds: 4 − 7 → can\'t subtract. Borrow from Thousands. Thousands: 3 → 2. Hundreds: 14 − 7 = 7\n• Thousands: 2 − 8 → can\'t subtract. Borrow from Ten thousands. Ten thousands: 6 → 5. Thousands: 12 − 8 = 4\n• Ten thousands: 5 − 2 = 3\n\nAmount remaining = R34 750', answer: 'R34 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Using your answers from the previous question (27 400 + 19 800 + 16 300 = 63 500 total, and 63 500 − 28 750 = 34 750 remaining), verify that 34 750 is correct by using the inverse operation. Show the check and explain in words why it confirms the answer.', answer: 'To check 63 500 − 28 750 = 34 750 using the inverse operation, add the answer back to the number that was subtracted:\n\n34 750 + 28 750 = 63 500\n\nWorking: Units 0+0=0, Tens 5+5=10 → write 0 carry 1, Hundreds 7+7+1=15 → write 5 carry 1, Thousands 4+8+1=13 → write 3 carry 1, Ten thousands 3+2+1=6.\n\nResult: 63 500 ✓ — this matches the total amount held across all three funds that we started with.\n\nThis check confirms the answer is correct because addition and subtraction are inverse operations: if A − B = C, then C + B must equal A again. Since adding 28 750 back to 34 750 returns exactly 63 500, the subtraction was carried out correctly, including all the borrowing steps.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply column addition, subtraction and reasoning to real-world money and measurement problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 31, message: 'Outstanding! Full marks — you have mastered all six sections of addition and subtraction.' },
    { minScore: 25, message: 'Excellent work! You have a strong understanding. Review any questions you missed.' },
    { minScore: 16, message: 'Good effort! Go back and practise the sections where you lost marks.' },
    { minScore: 0, message: 'Keep practising! Work carefully through the worked examples step by step and try again.' },
  ],
}
