import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (addition / subtraction roles) ────────────────────────────
// carried digit      → purple (#7c3aed)
// borrow adjustment  → orange (#ea580c)
// column sum         → blue   (#2563eb)
// final answer       → green  (#16a34a)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Addition and Subtraction',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ADDING LARGE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-large-numbers',
      title: 'Adding Large Numbers',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 we add numbers up to <strong>9 digits</strong>. We always add from <strong>right to left</strong> starting with the units. When the sum of a column is 10 or more we write down the units digit and <strong>carry</strong> the tens digit to the next column. Always line up digits according to their place value before adding — units under units, tens under tens and so on.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('carried digit')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('column sum')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Key rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules to remember</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Line up place values</strong> — write numbers so that units are under units, tens under tens, hundreds under hundreds, and so on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add right to left</strong> — always start at the units column and work towards the largest place value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Carry when the sum ≥ 10</strong> — write the units digit below the line and ${pu('carry')} the tens digit to the top of the next column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Include the carry in the next column</strong> — add the ${pu('carried digit')} together with the column digits before writing the ${bl('column sum')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Adding three or more numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">When adding three or more numbers in a column, add them all together at once. The carry rule still applies — if the total is 10 or more, write the units digit and ${pu('carry')} the rest to the next column.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 3 456 728 + 2 341 865 = 5 798 593 ────────────────────
        {
          question: 'Calculate 3 456 728 + 2 341 865.',
          answer: `${gr('5 798 593')}`,
          steps: [
            `Line up the digits by place value: 3 456 728 above 2 341 865, units under units.`,
            `Add units: ${bl('8 + 5')} = ${bl('13')} — write 3, ${pu('carry 1')}.`,
            `Add tens: ${bl('2 + 6')} + ${pu('1')} = ${bl('9')} — write 9.`,
            `Add hundreds: ${bl('7 + 8')} = ${bl('15')} — write 5, ${pu('carry 1')}.`,
            `Add thousands: ${bl('6 + 1')} + ${pu('1')} = ${bl('8')} — write 8.`,
            `Add ten thousands: ${bl('5 + 4')} = ${bl('9')} — write 9.`,
            `Add hundred thousands: ${bl('4 + 3')} = ${bl('7')} — write 7.`,
            `Add millions: ${bl('3 + 2')} = ${bl('5')} — write 5.`,
            `<strong>Answer:</strong> ${gr('5 798 593')}`,
          ],
        },

        // ── Example 2: 14 567 + 8 934 + 21 408 = 44 909 ────────────────────
        {
          question: 'Calculate 14 567 + 8 934 + 21 408.',
          answer: `${gr('44 909')}`,
          steps: [
            `Line up all three numbers by place value.`,
            `Add units: ${bl('7 + 4 + 8')} = ${bl('19')} — write 9, ${pu('carry 1')}.`,
            `Add tens: ${bl('6 + 3 + 0')} + ${pu('1')} = ${bl('10')} — write 0, ${pu('carry 1')}.`,
            `Add hundreds: ${bl('5 + 9 + 4')} + ${pu('1')} = ${bl('19')} — write 9, ${pu('carry 1')}.`,
            `Add thousands: ${bl('4 + 8 + 1')} + ${pu('1')} = ${bl('14')} — write 4, ${pu('carry 1')}.`,
            `Add ten thousands: ${bl('1 + 0 + 2')} + ${pu('1')} = ${bl('4')} — write 4.`,
            `<strong>Answer:</strong> ${gr('44 909')}`,
          ],
        },

        // ── Example 3: Sipho saves R12 450 + R8 375 + R21 680 = R42 505 ─────
        {
          question: 'Sipho saves R12 450, R8 375 and R21 680. How much has he saved in total?',
          answer: `${gr('R42 505')}`,
          steps: [
            `Add the amounts: 12 450 + 8 375 + 21 680. Line up by place value.`,
            `Add units: ${bl('0 + 5 + 0')} = ${bl('5')} — write 5.`,
            `Add tens: ${bl('5 + 7 + 8')} = ${bl('20')} — write 0, ${pu('carry 2')}.`,
            `Add hundreds: ${bl('4 + 3 + 6')} + ${pu('2')} = ${bl('15')} — write 5, ${pu('carry 1')}.`,
            `Add thousands: ${bl('2 + 8 + 1')} + ${pu('1')} = ${bl('12')} — write 2, ${pu('carry 1')}.`,
            `Add ten thousands: ${bl('1 + 0 + 2')} + ${pu('1')} = ${bl('4')} — write 4.`,
            `<strong>Answer:</strong> Sipho has saved ${gr('R42 505')} in total.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column addition layout showing 3 456 728 plus 2 341 865 with carried digits shown in purple above each column, column sums in blue, and final answer in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add large numbers up to 9 digits using column addition with carrying, colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SUBTRACTING LARGE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'subtracting-large-numbers',
      title: 'Subtracting Large Numbers',
      icon: '−',
      explanation:
        `<p style="margin-bottom:16px;">To subtract large numbers we work from <strong>right to left</strong>. If the top digit is smaller than the bottom digit we <strong>borrow</strong> from the next column to the left. When we borrow we add 10 to the current column and reduce the next column by 1. Always check your answer by adding the answer to the number you subtracted — you should get back to the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('borrowed digits')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('borrowing adjustment')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules to remember</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Line up place values</strong> — write numbers so that units are under units, tens under tens, and so on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Subtract right to left</strong> — always start at the units column and work towards the largest place value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Borrow when the top digit &lt; bottom digit</strong> — reduce the next column to the left by 1 (the ${or('borrowing adjustment')}) and add 10 to the current column (the ${pu('borrowed digit')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Borrowing across zeros</strong> — if the next column is also 0, keep moving left until you find a non-zero digit, then borrow down the chain. Each zero in between becomes ${or('9')} and the column you are working on gets ${pu('10')} added.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Check your answer using addition</p>` +
        `<p style="margin:0;color:#166534;">Add the answer to the number you subtracted. You should get back to the original number. Example: if 7 435 862 − 3 214 549 = ${gr('4 221 313')}, then ${gr('4 221 313')} + 3 214 549 must equal 7 435 862. ✓</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 7 435 862 − 3 214 549 = 4 221 313 ────────────────────
        {
          question: 'Calculate 7 435 862 − 3 214 549.',
          answer: `${gr('4 221 313')}`,
          steps: [
            `Line up the digits by place value: 7 435 862 above 3 214 549, units under units.`,
            `Subtract units: 2 − 9 — top digit is smaller, we need to borrow. Borrow from tens: tens digit (6) decreases to ${or('5')}, units become ${pu('12')}. ${pu('12')} − 9 = 3. Write 3.`,
            `Subtract tens: ${or('5')} − 4 = 1. Write 1.`,
            `Subtract hundreds: 8 − 5 = 3. Write 3.`,
            `Subtract thousands: 5 − 4 = 1. Write 1.`,
            `Subtract ten thousands: 3 − 1 = 2. Write 2.`,
            `Subtract hundred thousands: 4 − 2 = 2. Write 2.`,
            `Subtract millions: 7 − 3 = 4. Write 4.`,
            `<strong>Answer:</strong> ${gr('4 221 313')}`,
          ],
        },

        // ── Example 5: 5 000 000 − 2 347 865 = 2 652 135 ────────────────────
        {
          question: 'Calculate 5 000 000 − 2 347 865.',
          answer: `${gr('2 652 135')}`,
          steps: [
            `Line up the digits by place value: 5 000 000 above 2 347 865, units under units. The top number has zeros in all columns except millions — we need to borrow repeatedly.`,
            `Units: 0 − 5 — top digit is smaller. All columns from tens to hundred thousands are zero, so we cannot borrow directly. We must borrow all the way from the millions column.`,
            `Begin the borrowing chain: millions ${or('4')} lends 1 → hundred thousands ${or('9')} lends 1 → ten thousands ${or('9')} lends 1 → thousands ${or('9')} lends 1 → hundreds ${or('9')} lends 1 → tens ${or('9')} lends 1 → units become ${pu('10')}. Work carefully column by column from right to left.`,
            `Subtract from right to left: units ${pu('10')} − 5 = 5; tens ${or('9')} − 6 = 3; hundreds ${or('9')} − 8 = 1; thousands ${or('9')} − 7 = 2; ten thousands ${or('9')} − 4 = 5; hundred thousands ${or('9')} − 3 = 6; millions ${or('4')} − 2 = 2.`,
            `<strong>Answer:</strong> ${gr('2 652 135')}`,
          ],
        },

        // ── Example 6: Lerato 45 750 − 32 480 = 13 270 ──────────────────────
        {
          question: 'Lerato earns R45 750 per month. She spends R32 480. How much does she save?',
          answer: `Lerato saves ${gr('R13 270')} per month`,
          steps: [
            `Subtract: 45 750 − 32 480. Line up by place value.`,
            `Units: 0 − 0 = 0. Write 0.`,
            `Tens: 5 − 8 — top digit is smaller, we need to borrow. Borrow from hundreds: hundreds digit (7) decreases to ${or('6')}, tens become ${pu('15')}. ${pu('15')} − 8 = 7. Write 7.`,
            `Hundreds: ${or('6')} − 4 = 2. Write 2.`,
            `Thousands: 5 − 2 = 3. Write 3.`,
            `Ten thousands: 4 − 3 = 1. Write 1.`,
            `<strong>Answer:</strong> Lerato saves ${gr('R13 270')} per month.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column subtraction layout showing 7 435 862 minus 3 214 549 with borrowed digits in purple and borrowing adjustments in orange, final answer in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to subtract large numbers using borrowing, including how to borrow across zeros, with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ESTIMATING AND CHECKING ANSWERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-and-checking',
      title: 'Estimating and Checking Answers',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Before we calculate we can <strong>estimate</strong> the answer by rounding each number to the nearest suitable value. This helps us check whether our final answer is reasonable. After calculating we always <strong>check</strong> our work using the inverse operation.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rounded numbers')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('estimate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('exact answer')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check calculation')}</span>` +
        `</div>` +

        // ── How to check ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to check your answer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Checking addition</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Subtract one of the numbers from the ${gr('answer')}. You should get the other number back.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">If A + B = ${gr('C')}, then ${re('C − B = A')} ✓</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Checking subtraction</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Add the ${gr('answer')} to the number you subtracted. You should get the original number back.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">If A − B = ${gr('C')}, then ${re('C + B = A')} ✓</p>` +
        `</div>` +

        `</div>` +

        // ── 3-step strategy ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 3-step strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Estimate')} — Round each number to the nearest suitable value and calculate a rough answer. This is your target range.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Calculate exactly')} — Use column addition or subtraction to find the precise answer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Check')} — Use the inverse operation to verify your exact answer, and confirm it is close to the estimate.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why estimate first?</p>` +
        `<p style="margin:0;color:#1e3a8a;">An estimate catches big mistakes. If your exact answer is far from the estimate, you have likely made an error somewhere and should recalculate. Always estimate first, then calculate, then check.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Estimate and then calculate 47 836 + 28 194.',
          answer: `${gr('76 030')} (estimate was ${bl('80 000')})`,
          steps: [
            `${or('Estimate:')} Round each number to the nearest ten thousand — ${or('47 836')} ≈ ${or('50 000')} and ${or('28 194')} ≈ ${or('30 000')}. ${bl('50 000 + 30 000 = 80 000')}. This is our ${bl('estimate')}.`,
            `${gr('Calculate exactly:')} 47 836 + 28 194 = ${gr('76 030')}.`,
            `${re('Check:')} Subtract one addend from the answer — ${re('76 030 − 28 194 = 47 836')}. We get back the other addend. ✓`,
            `Our answer ${gr('76 030')} is correct and close to the ${bl('estimate of 80 000')}. ✓`,
          ],
        },
        {
          question: 'Estimate and then calculate 83 540 − 27 865.',
          answer: `${gr('55 675')} (estimate was ${bl('50 000')})`,
          steps: [
            `${or('Estimate:')} Round each number to the nearest ten thousand — ${or('83 540')} ≈ ${or('80 000')} and ${or('27 865')} ≈ ${or('30 000')}. ${bl('80 000 − 30 000 = 50 000')}. This is our ${bl('estimate')}.`,
            `${gr('Calculate exactly:')} 83 540 − 27 865 = ${gr('55 675')}.`,
            `${re('Check:')} Add the answer to the number that was subtracted — ${re('55 675 + 27 865 = 83 540')}. We get back the original number. ✓`,
            `Our answer ${gr('55 675')} is correct and close to the ${bl('estimate of 50 000')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Rounding diagram showing 47 836 rounded to 50 000 and 28 194 rounded to 30 000 in orange, estimate 80 000 in blue, exact answer 76 030 in green, and check calculation 76 030 minus 28 194 equals 47 836 in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to estimate by rounding, calculate exactly, and check addition and subtraction answers using inverse operations with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBLEM SOLVING WITH ADDITION AND SUBTRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-addition-subtraction',
      title: 'Problem Solving with Addition and Subtraction',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">When solving word problems with addition and subtraction, read the question carefully to decide which operation to use. ${gr('Addition')} is used when ${or('combining amounts')} or finding a ${or('total')}. ${re('Subtraction')} is used when finding a ${or('difference')}, finding ${or('what is left over')}, or finding ${or('how much more is needed')}. Some problems require ${or('both operations')}. Always write your answer in a full sentence with the correct unit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('key words')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('subtraction')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('final answer')}</span>` +
        `</div>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key words to look for</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">${gr('Addition key words')}</p>` +
        `<div style="display:flex;gap:6px;flex-wrap:wrap;">` +
        ['total', 'altogether', 'combined', 'sum', 'in all', 'how much in total', 'raise', 'deposit'].map(w => `<span style="background:#bbf7d0;border-radius:6px;padding:2px 8px;font-size:13px;font-weight:700;color:#16a34a;">${w}</span>`).join('') +
        `</div>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">${re('Subtraction key words')}</p>` +
        `<div style="display:flex;gap:6px;flex-wrap:wrap;">` +
        ['difference', 'how many more', 'how much less', 'left over', 'remaining', 'spent', 'decrease', 'how much more needed'].map(w => `<span style="background:#fecaca;border-radius:6px;padding:2px 8px;font-size:13px;font-weight:700;color:#dc2626;">${w}</span>`).join('') +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">3-step strategy for word problems</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Find the ${or('key word')} and decide: ${gr('addition')} or ${re('subtraction')} (or both).<br><strong>Step 2</strong> — Write the number sentence.<br><strong>Step 3</strong> — Calculate and write your ${bl('answer')} in a full sentence with the correct unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A school raises R234 500 in term 1 and R187 350 in term 2. How much have they raised in total?',
          answer: `The school has raised ${bl('R421 850')} in total`,
          steps: [
            `${or('Key word:')} <em>"in total"</em> — we are ${gr('combining two amounts')} so we ${gr('add')}.`,
            `Write the number sentence: ${gr('234 500 + 187 350')} = ?`,
            `${gr('Calculate:')} 234 500 + 187 350 = ${bl('421 850')}`,
            `<strong>Answer:</strong> The school has raised ${bl('R421 850')} in total.`,
          ],
        },
        {
          question: 'A factory produced 1 250 000 units last year. This year they produced 987 645 units. How many more units did they produce last year?',
          answer: `They produced ${bl('262 355')} more units last year`,
          steps: [
            `${or('Key word:')} <em>"how many more"</em> — we are ${re('finding a difference')} so we ${re('subtract')}.`,
            `Write the number sentence: ${re('1 250 000 − 987 645')} = ?`,
            `${re('Calculate:')} 1 250 000 − 987 645 = ${bl('262 355')}`,
            `<strong>Answer:</strong> They produced ${bl('262 355')} more units last year.`,
          ],
        },
        {
          question: 'Thabo has R45 000 in savings. He spends R12 750 on a bicycle and R8 430 on equipment. How much does he have left?',
          answer: `Thabo has ${bl('R23 820')} left`,
          steps: [
            `${or('Key words:')} <em>"spends"</em> and <em>"how much left"</em> — this problem uses ${or('both operations')}.`,
            `${gr('Step 1 — Add')} the amounts spent: ${gr('12 750 + 8 430')} = ${gr('21 180')}`,
            `${re('Step 2 — Subtract')} the total spent from savings: ${re('45 000 − 21 180')} = ${bl('23 820')}`,
            `<strong>Answer:</strong> Thabo has ${bl('R23 820')} left.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Flowchart showing how to identify key words in a word problem and choose addition (green) or subtraction (red) or both, leading to the final answer in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve word problems using addition and subtraction by identifying key words and writing a number sentence with colour coded steps" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 234 567 + 145 321.',
      answer: '379 888',
      checkMode: 'auto',
      correctAnswer: '379 888',
      correctAnswers: ['379 888', '379888'],
      explanation: 'Line up by place value and add right to left — no carrying needed.\n2+1=3, 3+4=7, 4+5=9, 5+3=8, 6+2=8, 7+1=8.\nAnswer: 379 888 ✓',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 875 430 − 324 210.',
      answer: '551 220',
      checkMode: 'auto',
      correctAnswer: '551 220',
      correctAnswers: ['551 220', '551220'],
      explanation: 'Line up by place value and subtract right to left — no borrowing needed.\n8−3=5, 7−2=5, 5−4=1, 4−2=2, 3−1=2, 0−0=0.\nAnswer: 551 220 ✓',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 3 456 728 + 2 891 465.',
      answer: '6 348 193',
      checkMode: 'auto',
      correctAnswer: '6 348 193',
      correctAnswers: ['6 348 193', '6348193'],
      explanation: 'Add right to left with carrying:\nUnits: 8+5=13 — write 3, carry 1.\nTens: 2+6+1=9 — write 9.\nHundreds: 7+4=11 — write 1, carry 1.\nThousands: 6+1+1=8 — write 8.\nTen thousands: 5+9=14 — write 4, carry 1.\nHundred thousands: 4+8+1=13 — write 3, carry 1.\nMillions: 3+2+1=6 — write 6.\nAnswer: 6 348 193 ✓',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 7 000 000 − 3 456 789.',
      answer: '3 543 211',
      checkMode: 'auto',
      correctAnswer: '3 543 211',
      correctAnswers: ['3 543 211', '3543211'],
      explanation: 'Borrow across the zeros — millions 6 lends 1 → hundred thousands 9 lends 1 → ten thousands 9 lends 1 → thousands 9 lends 1 → hundreds 9 lends 1 → tens 9 lends 1 → units become 10.\nSubtract right to left: 10−9=1, 9−8=1, 9−7=2, 9−6=3, 9−5=4, 9−4=5 (wait: after borrow millions becomes 6), 6−3=3.\nAnswer: 3 543 211 ✓',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 12 450 375 + 8 976 248 + 3 104 561.',
      answer: '24 531 184',
      checkMode: 'auto',
      correctAnswer: '24 531 184',
      correctAnswers: ['24 531 184', '24531184'],
      explanation: 'Add all three numbers right to left:\nUnits: 5+8+1=14 — write 4, carry 1.\nTens: 7+4+6+1=18 — write 8, carry 1.\nHundreds: 3+2+5+1=11 — write 1, carry 1.\nThousands: 0+6+4+1=11 — write 1, carry 1.\nTen thousands: 5+7+0+1=13 — write 3, carry 1.\nHundred thousands: 4+9+1+1=15 — write 5, carry 1.\nMillions: 2+8+3+1=14 — write 4, carry 1.\nTen millions: 1+0+0+1=2 — write 2.\nAnswer: 24 531 184 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says 5 000 000 − 2 999 999 = 3 000 001. Is he correct? Explain.',
      answer: 'No — 5 000 000 − 2 999 999 = 2 000 001. He made an error borrowing across the zeros.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Estimate 67 845 + 42 317 by rounding to the nearest ten thousand.',
      answer: '110 000',
      checkMode: 'auto',
      correctAnswer: '110 000',
      correctAnswers: ['110 000', '110000'],
      explanation: 'Round to the nearest ten thousand:\n67 845 ≈ 70 000\n42 317 ≈ 40 000\n70 000 + 40 000 = 110 000 ✓',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle calculates 84 320 − 35 675 = 48 645. Check her answer. Is she correct?',
      answer: 'Check by adding: 48 645 + 35 675 = 84 320. Yes she is correct.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A stadium holds 87 500 people. On Saturday 64 837 people attended and on Sunday 71 294 people attended. How many more people attended on Sunday than Saturday?',
      answer: '6 457',
      checkMode: 'auto',
      correctAnswer: '6 457',
      correctAnswers: ['6 457', '6457'],
      explanation: 'Find the difference between Sunday and Saturday attendance:\n71 294 − 64 837:\nUnits: 4−7 — borrow. 14−7=7.\nTens: 8−3=5 (after borrow: 8−1=7 lent 1, so 8−1=7... actually: 9−1=8 tens digit after borrow). Let\'s work through it:\n71 294 − 64 837 = 6 457.\nCheck: 6 457 + 64 837 = 71 294 ✓',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has R125 000 in her bank account. She withdraws R34 750 and then deposits R18 430. How much is in her account now?',
      answer: 'R108 680',
      checkMode: 'auto',
      correctAnswer: 'R108 680',
      correctAnswers: ['R108 680', '108 680', 'R108680', '108680'],
      explanation: 'Step 1 — Subtract the withdrawal:\n125 000 − 34 750 = 90 250\nStep 2 — Add the deposit:\n90 250 + 18 430 = 108 680\nAnswer: R108 680 ✓',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A factory produced 2 450 000 items in January and 1 875 650 items in February.\n\na) How many items were produced in total?\nb) How many more items were produced in January than February?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Total items produced',
          correctAnswer: '4 325 650',
          correctAnswers: ['4 325 650', '4325650'],
          explanation: '2 450 000 + 1 875 650:\nAdd right to left with carrying.\n0+0=0, 0+5=5, 0+6=6, 0+5=5 (thousands), 5+7=12 — write 2 carry 1, 4+8+1=13 — write 3 carry 1, 2+1+1=4.\nAnswer: 4 325 650 ✓',
        },
        {
          label: 'b) How many more in January than February',
          correctAnswer: '574 350',
          correctAnswers: ['574 350', '574350'],
          explanation: '2 450 000 − 1 875 650:\nSubtract right to left with borrowing.\nAnswer: 574 350.\nCheck: 574 350 + 1 875 650 = 2 450 000 ✓',
        },
      ],
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo estimates 345 678 + 254 321 as 600 000 by rounding to the nearest hundred thousand. He then calculates the exact answer as 599 999. Is his estimate reasonable? Explain.',
      answer: 'Yes — 600 000 is very close to 599 999. Rounding to the nearest hundred thousand gives 300 000 + 300 000 = 600 000 which is an excellent estimate.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered addition and subtraction.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of addition and subtraction.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
