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
        'Column addition of 3 456 728 + 2 341 865 showing the carried digits in purple above each column and the final answer 5 798 593 in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 115" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="124" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="184" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="34" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="64" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="94" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="124" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="154" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="184" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="214" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="10" y="58" font-size="15" font-weight="700" fill="#0f1f3d">+</text>` +
        `<text x="34" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="64" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="94" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="124" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="154" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="184" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="214" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<line x1="6" y1="66" x2="228" y2="66" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="34" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="64" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">7</text>` +
        `<text x="94" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<text x="124" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">8</text>` +
        `<text x="154" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="184" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<text x="214" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="120" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">3 456 728 + 2 341 865 = 5 798 593</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to add large numbers up to 9 digits using column addition with carrying, colour coded steps',
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
        'Column subtraction layout showing 7 435 862 minus 3 214 549 with borrowed digits in purple and borrowing adjustments in orange, final answer in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 115" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="184" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">5</text>` +
        `<text x="214" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="34" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="64" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="94" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="124" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="154" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="184" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<line x1="177" y1="29" x2="191" y2="39" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="214" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="10" y="58" font-size="15" font-weight="700" fill="#0f1f3d">−</text>` +
        `<text x="34" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="64" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="94" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="124" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="154" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="184" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="214" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">9</text>` +
        `<line x1="6" y1="66" x2="228" y2="66" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="34" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4</text>` +
        `<text x="64" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<text x="94" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<text x="124" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">1</text>` +
        `<text x="154" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="184" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">1</text>` +
        `<text x="214" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="120" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">7 435 862 − 3 214 549 = 4 221 313</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to subtract large numbers using borrowing, including how to borrow across zeros, with colour coded steps',
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

      videoPlaceholder:
        'Short video showing how to estimate by rounding, calculate exactly, and check addition and subtraction answers using inverse operations with colour coded steps',
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

      videoPlaceholder:
        'Short video showing how to solve word problems using addition and subtraction by identifying key words and writing a number sentence with colour coded steps',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Column addition w/ carrying | 4-7 Column subtraction w/
    // borrowing (incl. across zeros) | 8-10 Estimating by rounding |
    // 11-13 Checking with inverse operations | 14-16 Word problems |
    // 17-19 Multi-step word problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block: Column Addition with Carrying (0-3) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n3 456 782 + 2 341 865', correctAnswer: '5798647', correctAnswers: ['5798647', '5 798 647'], explanation: '3 456 782 + 2 341 865 = 5 798 647\n\n• Units: 2 + 5 = 7\n• Tens: 8 + 6 = 14 → write 4, carry 1\n• Hundreds: 7 + 8 + 1 (carried) = 16 → write 6, carry 1\n• Thousands: 6 + 1 + 1 (carried) = 8\n• Ten thousands: 5 + 4 = 9\n• Hundred thousands: 4 + 3 = 7\n• Millions: 3 + 2 = 5\n\nAnswer: 5 798 647', answer: '5 798 647' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Find the sum of 2 345 671 and 1 234 568.', correctAnswer: '3580239', correctAnswers: ['3580239', '3 580 239'], explanation: '2 345 671 + 1 234 568 = 3 580 239\n\n• Units: 1 + 8 = 9\n• Tens: 7 + 6 = 13 → write 3, carry 1\n• Hundreds: 6 + 5 + 1 (carried) = 12 → write 2, carry 1\n• Thousands: 5 + 4 + 1 (carried) = 10 → write 0, carry 1\n• Ten thousands: 4 + 3 + 1 (carried) = 8\n• Hundred thousands: 3 + 2 = 5\n• Millions: 2 + 1 = 3\n\nAnswer: 3 580 239', answer: '3 580 239' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n145 678 + 238 945 + 96 387', correctAnswer: '481010', correctAnswers: ['481010', '481 010'], explanation: '145 678 + 238 945 + 96 387 = 481 010\n\n• Units: 8 + 5 + 7 = 20 → write 0, carry 2\n• Tens: 7 + 4 + 8 + 2 (carried) = 21 → write 1, carry 2\n• Hundreds: 6 + 9 + 3 + 2 (carried) = 20 → write 0, carry 2\n• Thousands: 5 + 8 + 6 + 2 (carried) = 21 → write 1, carry 2\n• Ten thousands: 4 + 3 + 9 + 2 (carried) = 18 → write 8, carry 1\n• Hundred thousands: 1 + 2 + 0 + 1 (carried) = 4\n\nAnswer: 481 010', answer: '481 010' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner worked out 38 475 + 29 618 like this:\n\nTh H T U\n 3 8 4 7 5\n+2 9 6 1 8\n—————————\n 6 7 0 9 3\n\nThe learner wrote 67 093 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 38 475 + 29 618 = 68 093.\n\nWorking column by column:\n• Units: 5 + 8 = 13 → write 3, carry 1\n• Tens: 7 + 1 + 1 (carried) = 9\n• Hundreds: 4 + 6 = 10 → write 0, carry 1\n• Thousands: 8 + 9 + 1 (carried) = 18 → write 8, carry 1\n• Ten thousands: 3 + 2 + 1 (carried) = 6\n\nThe learner\'s mistake: in the thousands column they added 8 + 9 = 17 and forgot to also add the carry of 1 from the hundreds column, so they wrote 7 instead of 8 and lost the carry into the ten thousands column. This is a classic "dropped carry" error.\n\nCorrect answer: 68 093' },

        // ── Block: Column Subtraction with Borrowing, incl. across zeros (4-7) ──
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n8 345 621 − 3 928 475', correctAnswer: '4417146', correctAnswers: ['4417146', '4 417 146'], explanation: '8 345 621 − 3 928 475 = 4 417 146\n\n• Units: 1 − 5 → borrow. Tens 2 → 1, Units 11 − 5 = 6\n• Tens: 1 − 7 → borrow. Hundreds 6 → 5, Tens 11 − 7 = 4\n• Hundreds: 5 − 4 = 1\n• Thousands: 5 − 8 → borrow. Ten thousands 4 → 3, Thousands 15 − 8 = 7\n• Ten thousands: 3 − 2 = 1\n• Hundred thousands: 3 − 9 → borrow. Millions 8 → 7, Hundred thousands 13 − 9 = 4\n• Millions: 7 − 3 = 4\n\nAnswer: 4 417 146', answer: '4 417 146' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n70 000 000 − 23 456 789', correctAnswer: '46543211', correctAnswers: ['46543211', '46 543 211'], explanation: '70 000 000 − 23 456 789 = 46 543 211\n\nThe top number has six zeros, so we borrow all the way from the ten millions column:\nTen millions 7 → 6, and every column from millions down to units becomes 9, except units which becomes 10.\n\n• Units: 10 − 9 = 1\n• Tens: 9 − 8 = 1\n• Hundreds: 9 − 7 = 2\n• Thousands: 9 − 6 = 3\n• Ten thousands: 9 − 5 = 4\n• Hundred thousands: 9 − 4 = 5\n• Millions: 9 − 3 = 6\n• Ten millions: 6 − 2 = 4\n\nAnswer: 46 543 211', answer: '46 543 211' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n9 000 000 − 4 567 123', correctAnswer: '4432877', correctAnswers: ['4432877', '4 432 877'], explanation: '9 000 000 − 4 567 123 = 4 432 877\n\nBorrow across the zeros: millions 9 → 8, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 3 = 7\n• Tens: 9 − 2 = 7\n• Hundreds: 9 − 1 = 8\n• Thousands: 9 − 7 = 2\n• Ten thousands: 9 − 6 = 3\n• Hundred thousands: 9 − 5 = 4\n• Millions: 8 − 4 = 4\n\nAnswer: 4 432 877', answer: '4 432 877' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner says: "5 000 000 − 1 234 567 = 3 865 443, because I borrowed across all the zeros." Calculate the exact answer using the column method, and explain whether the learner is correct.', answer: 'The correct answer is 5 000 000 − 1 234 567 = 3 765 433.\n\nBorrowing across the zeros: millions 5 → 4, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 7 = 3\n• Tens: 9 − 6 = 3\n• Hundreds: 9 − 5 = 4\n• Thousands: 9 − 4 = 5\n• Ten thousands: 9 − 3 = 6\n• Hundred thousands: 9 − 2 = 7\n• Millions: 4 − 1 = 3\n\nThe learner is NOT correct — their answer of 3 865 443 does not match 3 765 433. It looks like they made an error somewhere in the borrowing chain, most likely mixing up which column change belongs to which place value. Always work column by column, right to left, and check that only the units digit becomes 10 — every zero digit in between should become 9, not 10.\n\nCorrect answer: 3 765 433' },

        // ── Block: Estimating by Rounding Before Calculating (8-10) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 56 789 + 23 456 by rounding each number to the nearest ten thousand.', correctAnswer: '80000', correctAnswers: ['80000', '80 000'], explanation: 'Round each number to the nearest ten thousand:\n56 789 ≈ 60 000\n23 456 ≈ 20 000\n\nEstimate: 60 000 + 20 000 = 80 000\n\n(The exact answer, 56 789 + 23 456 = 80 245, is very close to this estimate.)', answer: '80 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Two learners estimate 483 200 + 251 900. Naledi rounds both numbers to the nearest hundred thousand and gets an estimate of 800 000. Kabelo rounds both numbers to the nearest ten thousand and gets an estimate of 730 000. The exact answer is 735 100. Whose estimate is more reasonable, and why?', answer: 'The exact answer is 483 200 + 251 900 = 735 100.\n\nNaledi rounded to the nearest hundred thousand: 483 200 ≈ 500 000 and 251 900 ≈ 300 000, giving 500 000 + 300 000 = 800 000. This is 64 900 away from the exact answer.\n\nKabelo rounded to the nearest ten thousand: 483 200 ≈ 480 000 and 251 900 ≈ 250 000, giving 480 000 + 250 000 = 730 000. This is only 5 100 away from the exact answer.\n\nKabelo\'s estimate of 730 000 is more reasonable because rounding to a smaller place value (ten thousand instead of hundred thousand) keeps each number closer to its original value, so the estimate lands much closer to the exact answer.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A shop clerk estimates 345 216 − 128 744 by rounding both numbers to the nearest ten thousand first, getting an estimate of 220 000. She then calculates the exact answer as 216 472. Is her exact answer reasonable? Show the rounding and explain.', answer: '345 216 rounded to the nearest ten thousand is 350 000 (thousands digit is 5, round up).\n128 744 rounded to the nearest ten thousand is 130 000 (thousands digit is 8, round up).\n\nEstimate: 350 000 − 130 000 = 220 000\n\nThe exact answer of 216 472 is only 3 528 away from the estimate of 220 000 — a small difference compared to the size of the numbers involved. Yes, her exact answer is reasonable.' },

        // ── Block: Checking Answers with Inverse Operations (11-13) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Check this calculation using the inverse operation:\n64 321 − 28 756 = 35 565\nWrite the addition you would use to check it, and give its answer to confirm the subtraction is correct.', correctAnswer: '64321', correctAnswers: ['64321', '64 321', '35565+28756=64321', '35 565 + 28 756 = 64 321'], explanation: 'To check a subtraction, add the answer back to the number that was subtracted:\n35 565 + 28 756 = 64 321\n\nThis matches the original number, 64 321, so the subtraction is confirmed correct. ✓', answer: '35 565 + 28 756 = 64 321' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner calculates 93 215 − 47 836 = 45 379. To check it, they add 45 379 + 47 836 and get 92 215, and conclude the subtraction must be wrong. Redo the CHECKING addition carefully. Was the learner\'s original subtraction actually correct, and where did the mistake happen?', answer: 'First, check the original subtraction 93 215 − 47 836:\n45 379 + 47 836 = 93 215 (done correctly this time)\n\nSince this matches the original number 93 215, the learner\'s original subtraction (45 379) was correct.\n\nThe mistake happened in the CHECKING calculation, not the original subtraction. The learner made an addition error when adding 45 379 + 47 836 — they got 92 215 instead of the correct 93 215, likely from a dropped carry in one of the columns. This shows why it is important to redo a check calculation carefully: a mistake in the check itself can make a correct answer look wrong.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A statement reads: "402 005 − 187 648 = 214 357." Write the correct inverse-check equation (an addition) that would confirm this subtraction, and give the total.', correctAnswer: '402005', correctAnswers: ['402005', '402 005', '214357+187648=402005', '214 357 + 187 648 = 402 005'], explanation: 'To check a subtraction, add the answer to the number that was subtracted:\n214 357 + 187 648 = 402 005\n\nThis matches the original number, 402 005, so the subtraction is confirmed correct. ✓', answer: '214 357 + 187 648 = 402 005' },

        // ── Block: Word Problems — Addition, Subtraction, or Both (14-16) ───
        { difficulty: 'Medium', checkMode: 'auto', question: 'A charity collected R345 600 in the first half of the year and R178 950 in the second half. How much did the charity collect in total for the year?', correctAnswer: '524550', correctAnswers: ['524550', '524 550', 'r524550', 'R524 550'], explanation: '"In total" tells us to add.\n345 600 + 178 950 = 524 550\n\nThe charity collected R524 550 in total for the year.', answer: 'R524 550' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A dam holds 524 750 kilolitres of water at the start of the dry season. By the end of the dry season only 386 920 kilolitres remain. How many kilolitres of water were used during the dry season?', correctAnswer: '137830', correctAnswers: ['137830', '137 830'], explanation: '"How many kilolitres were used" tells us to find the difference, so we subtract.\n524 750 − 386 920 = 137 830\n\n137 830 kilolitres of water were used during the dry season.', answer: '137 830 kilolitres' },
        { difficulty: 'Medium', checkMode: 'self', question: 'On Saturday a music festival was attended by 92 450 people. On Sunday attendance was 78 630 people. Which day had higher attendance, and by how many people?', answer: 'Saturday had higher attendance.\n\nDifference: 92 450 − 78 630 = 13 820\n\nSaturday\'s attendance was 13 820 people higher than Sunday\'s.' },

        // ── Block: Multi-Step Word Problems (17-19) ──────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'Thandi has R125 000 in her savings account. She withdraws R38 400 to pay for a course, then deposits R15 750 from her bonus. How much is in her account now?', correctAnswer: '102350', correctAnswers: ['102350', '102 350', 'r102350', 'R102 350'], explanation: 'Step 1 — Subtract the withdrawal:\n125 000 − 38 400 = 86 600\n\nStep 2 — Add the deposit:\n86 600 + 15 750 = 102 350\n\nThandi now has R102 350 in her account.', answer: 'R102 350' },
        { difficulty: 'Hard', question: 'A dairy farm produced 218 400 litres of milk in January and 194 750 litres in February.\n\na) How many litres were produced over the two months?\nb) In March, the farm produced 235 900 litres. How many more litres were produced in March than in February?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total litres for January and February', correctAnswer: '413150', correctAnswers: ['413150', '413 150'], explanation: '218 400 + 194 750 = 413 150\n\nAdd right to left with carrying.\nAnswer: 413 150 litres.' },
          { label: 'b) How many more litres in March than February', correctAnswer: '41150', correctAnswers: ['41150', '41 150'], explanation: '235 900 − 194 750 = 41 150\n\nSubtract right to left with borrowing.\nCheck: 41 150 + 194 750 = 235 900 ✓\n\nAnswer: 41 150 litres more in March than February.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner solves this problem: "A school had R156 000 in its fundraising account. It spent R42 300 on new library books and then received a further donation of R18 900. How much is in the account now?" The learner calculates 156 000 + 42 300 = 198 300, then 198 300 − 18 900 = 179 400, and gives R179 400 as the final answer. Explain the learner\'s mistake and give the correct answer.', answer: 'The correct answer is R132 600.\n\nThe learner did the operations in the wrong order and used the wrong operation for spending. Spending money means the amount decreases (subtract), and receiving a donation means it increases (add) — the learner added first and then subtracted, which reverses both operations from what the problem describes.\n\nCorrect working:\nStep 1 — Subtract the amount spent: 156 000 − 42 300 = 113 700\nStep 2 — Add the donation: 113 700 + 18 900 = 132 600\n\nThe account now has R132 600, not R179 400. Reading each key word carefully ("spent" means subtract, "received a donation" means add) and applying the operations in the order they happen in the story is essential for multi-step problems.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered column addition, subtraction, estimating and checking answers with large numbers.' },
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
        // ── Block: Column Addition with Carrying (0-3) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n4 523 687 + 1 876 945', correctAnswer: '6400632', correctAnswers: ['6400632', '6 400 632'], explanation: '4 523 687 + 1 876 945 = 6 400 632\n\n• Units: 7 + 5 = 12 → write 2, carry 1\n• Tens: 8 + 4 + 1 (carried) = 13 → write 3, carry 1\n• Hundreds: 6 + 9 + 1 (carried) = 16 → write 6, carry 1\n• Thousands: 3 + 6 + 1 (carried) = 10 → write 0, carry 1\n• Ten thousands: 2 + 7 + 1 (carried) = 10 → write 0, carry 1\n• Hundred thousands: 5 + 8 + 1 (carried) = 14 → write 4, carry 1\n• Millions: 4 + 1 + 1 (carried) = 6\n\nAnswer: 6 400 632', answer: '6 400 632' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Find the sum of 3 167 284 and 2 954 837.', correctAnswer: '6122121', correctAnswers: ['6122121', '6 122 121'], explanation: '3 167 284 + 2 954 837 = 6 122 121\n\n• Units: 4 + 7 = 11 → write 1, carry 1\n• Tens: 8 + 3 + 1 (carried) = 12 → write 2, carry 1\n• Hundreds: 2 + 8 + 1 (carried) = 11 → write 1, carry 1\n• Thousands: 7 + 4 + 1 (carried) = 12 → write 2, carry 1\n• Ten thousands: 6 + 5 + 1 (carried) = 12 → write 2, carry 1\n• Hundred thousands: 1 + 9 + 1 (carried) = 11 → write 1, carry 1\n• Millions: 3 + 2 + 1 (carried) = 6\n\nAnswer: 6 122 121', answer: '6 122 121' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n267 834 + 149 567 + 384 291', correctAnswer: '801692', correctAnswers: ['801692', '801 692'], explanation: '267 834 + 149 567 + 384 291 = 801 692\n\n• Units: 4 + 7 + 1 = 12 → write 2, carry 1\n• Tens: 3 + 6 + 9 + 1 (carried) = 19 → write 9, carry 1\n• Hundreds: 8 + 5 + 2 + 1 (carried) = 16 → write 6, carry 1\n• Thousands: 7 + 9 + 4 + 1 (carried) = 21 → write 1, carry 2\n• Ten thousands: 6 + 4 + 8 + 2 (carried) = 20 → write 0, carry 2\n• Hundred thousands: 2 + 1 + 3 + 2 (carried) = 8\n\nAnswer: 801 692', answer: '801 692' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner worked out 42 638 + 19 457 like this:\n\nTh H T U\n 4 2 6 3 8\n+1 9 4 5 7\n—————————\n 5 1 0 9 5\n\nThe learner wrote 51 095 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 42 638 + 19 457 = 62 095.\n\nWorking column by column:\n• Units: 8 + 7 = 15 → write 5, carry 1\n• Tens: 3 + 5 + 1 (carried) = 9\n• Hundreds: 6 + 4 = 10 → write 0, carry 1\n• Thousands: 2 + 9 + 1 (carried) = 12 → write 2, carry 1\n• Ten thousands: 4 + 1 + 1 (carried) = 6\n\nThe learner\'s mistake: in the thousands column, 2 + 9 + 1 (carried) = 12, which should give a carry of 1 into the ten thousands column, making it 4 + 1 + 1 = 6, not 5 as the learner wrote. They dropped the carry from the thousands column.\n\nCorrect answer: 62 095' },

        // ── Block: Column Subtraction with Borrowing, incl. across zeros (4-7) ──
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n6 237 845 − 2 948 976', correctAnswer: '3288869', correctAnswers: ['3288869', '3 288 869'], explanation: '6 237 845 − 2 948 976 = 3 288 869\n\n• Units: 5 − 6 → borrow. Tens 4 → 3, Units 15 − 6 = 9\n• Tens: 3 − 7 → borrow. Hundreds 8 → 7, Tens 13 − 7 = 6\n• Hundreds: 7 − 9 → borrow. Thousands 7 → 6, Hundreds 17 − 9 = 8\n• Thousands: 6 − 8 → borrow. Ten thousands 3 → 2, Thousands 16 − 8 = 8\n• Ten thousands: 2 − 4 → borrow. Hundred thousands 2 → 1, Ten thousands 12 − 4 = 8\n• Hundred thousands: 1 − 9 → borrow. Millions 6 → 5, Hundred thousands 11 − 9 = 2\n• Millions: 5 − 2 = 3\n\nAnswer: 3 288 869', answer: '3 288 869' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n80 000 000 − 34 567 892', correctAnswer: '45432108', correctAnswers: ['45432108', '45 432 108'], explanation: '80 000 000 − 34 567 892 = 45 432 108\n\nThe top number has seven zeros, so we borrow all the way from the ten millions column:\nTen millions 8 → 7, and every column from millions down to units becomes 9, except units which becomes 10.\n\n• Units: 10 − 2 = 8\n• Tens: 9 − 9 = 0\n• Hundreds: 9 − 8 = 1\n• Thousands: 9 − 7 = 2\n• Ten thousands: 9 − 6 = 3\n• Hundred thousands: 9 − 5 = 4\n• Millions: 9 − 4 = 5\n• Ten millions: 7 − 3 = 4\n\nAnswer: 45 432 108', answer: '45 432 108' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n8 000 000 − 3 216 549', correctAnswer: '4783451', correctAnswers: ['4783451', '4 783 451'], explanation: '8 000 000 − 3 216 549 = 4 783 451\n\nBorrow across the zeros: millions 8 → 7, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 9 = 1\n• Tens: 9 − 4 = 5\n• Hundreds: 9 − 5 = 4\n• Thousands: 9 − 6 = 3\n• Ten thousands: 9 − 1 = 8\n• Hundred thousands: 9 − 2 = 7\n• Millions: 7 − 3 = 4\n\nAnswer: 4 783 451', answer: '4 783 451' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner says: "6 000 000 − 2 345 678 = 3 754 322, because I borrowed across all the zeros." Calculate the exact answer using the column method, and explain whether the learner is correct.', answer: 'The correct answer is 6 000 000 − 2 345 678 = 3 654 322.\n\nBorrowing across the zeros: millions 6 → 5, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 8 = 2\n• Tens: 9 − 7 = 2\n• Hundreds: 9 − 6 = 3\n• Thousands: 9 − 5 = 4\n• Ten thousands: 9 − 4 = 5\n• Hundred thousands: 9 − 3 = 6\n• Millions: 5 − 2 = 3\n\nThe learner is NOT correct — their answer of 3 754 322 does not match 3 654 322. It looks like they made a small slip in one of the columns of the borrowing chain. Always work column by column, right to left, checking that only the units digit becomes 10 — every zero digit in between should become 9.\n\nCorrect answer: 3 654 322' },

        // ── Block: Estimating by Rounding Before Calculating (8-10) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 68 234 + 31 567 by rounding each number to the nearest ten thousand.', correctAnswer: '100000', correctAnswers: ['100000', '100 000'], explanation: 'Round each number to the nearest ten thousand:\n68 234 ≈ 70 000\n31 567 ≈ 30 000\n\nEstimate: 70 000 + 30 000 = 100 000\n\n(The exact answer, 68 234 + 31 567 = 99 801, is very close to this estimate.)', answer: '100 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Two learners estimate 592 400 + 347 100. Zanele rounds both numbers to the nearest hundred thousand and gets an estimate of 900 000. Ben rounds both numbers to the nearest ten thousand and gets an estimate of 940 000. The exact answer is 939 500. Whose estimate is more reasonable, and why?', answer: 'The exact answer is 592 400 + 347 100 = 939 500.\n\nZanele rounded to the nearest hundred thousand: 592 400 ≈ 600 000 and 347 100 ≈ 300 000, giving 600 000 + 300 000 = 900 000. This is 39 500 away from the exact answer.\n\nBen rounded to the nearest ten thousand: 592 400 ≈ 590 000 and 347 100 ≈ 350 000, giving 590 000 + 350 000 = 940 000. This is only 500 away from the exact answer.\n\nBen\'s estimate of 940 000 is more reasonable because rounding to a smaller place value (ten thousand instead of hundred thousand) keeps each number closer to its original value, so the estimate lands much closer to the exact answer.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A clerk estimates 456 839 − 217 364 by rounding both numbers to the nearest ten thousand first, getting an estimate of 240 000. He then calculates the exact answer as 239 475. Is his exact answer reasonable? Show the rounding and explain.', answer: '456 839 rounded to the nearest ten thousand is 460 000 (thousands digit is 6, round up).\n217 364 rounded to the nearest ten thousand is 220 000 (thousands digit is 7, round up).\n\nEstimate: 460 000 − 220 000 = 240 000\n\nThe exact answer of 239 475 is only 525 away from the estimate of 240 000 — a small difference compared to the size of the numbers involved. Yes, his exact answer is reasonable.' },

        // ── Block: Checking Answers with Inverse Operations (11-13) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Check this calculation using the inverse operation:\n73 542 − 28 675 = 44 867\nWrite the addition you would use to check it, and give its answer to confirm the subtraction is correct.', correctAnswer: '73542', correctAnswers: ['73542', '73 542', '44867+28675=73542', '44 867 + 28 675 = 73 542'], explanation: 'To check a subtraction, add the answer back to the number that was subtracted:\n44 867 + 28 675 = 73 542\n\nThis matches the original number, 73 542, so the subtraction is confirmed correct. ✓', answer: '44 867 + 28 675 = 73 542' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner calculates 85 421 − 39 867 = 45 554. To check it, they add 45 554 + 39 867 and get 84 421, and conclude the subtraction must be wrong. Redo the CHECKING addition carefully. Was the learner\'s original subtraction actually correct, and where did the mistake happen?', answer: 'First, check the original subtraction 85 421 − 39 867:\n45 554 + 39 867 = 85 421 (done correctly this time)\n\nSince this matches the original number 85 421, the learner\'s original subtraction (45 554) was correct.\n\nThe mistake happened in the CHECKING calculation, not the original subtraction. The learner made an addition error when adding 45 554 + 39 867 — they got 84 421 instead of the correct 85 421, likely from a dropped carry. This shows why it is important to redo a check calculation carefully: a mistake in the check itself can make a correct answer look wrong.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A statement reads: "305 008 − 167 439 = 137 569." Write the correct inverse-check equation (an addition) that would confirm this subtraction, and give the total.', correctAnswer: '305008', correctAnswers: ['305008', '305 008', '137569+167439=305008', '137 569 + 167 439 = 305 008'], explanation: 'To check a subtraction, add the answer to the number that was subtracted:\n137 569 + 167 439 = 305 008\n\nThis matches the original number, 305 008, so the subtraction is confirmed correct. ✓', answer: '137 569 + 167 439 = 305 008' },

        // ── Block: Word Problems — Addition, Subtraction, or Both (14-16) ───
        { difficulty: 'Medium', checkMode: 'auto', question: 'A vegetable farm harvested 256 800 kg of maize in the first season and 193 450 kg in the second season. How much maize did the farm harvest altogether across both seasons?', correctAnswer: '450250', correctAnswers: ['450250', '450 250'], explanation: '"Altogether" tells us to add.\n256 800 + 193 450 = 450 250\n\nThe farm harvested 450 250 kg of maize altogether across both seasons.', answer: '450 250 kg' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A factory has a target of producing 613 400 bottles this month. So far it has produced 275 680 bottles. How many more bottles does the factory still need to produce to reach its target?', correctAnswer: '337720', correctAnswers: ['337720', '337 720'], explanation: '"How many more bottles are still needed" tells us to find the difference, so we subtract.\n613 400 − 275 680 = 337 720\n\nThe factory still needs to produce 337 720 more bottles to reach its target.', answer: '337 720 bottles' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Route A between two towns is 104 650 m long. Route B between the same two towns is 89 720 m long. Which route is shorter, and by how many metres?', answer: 'Route B is shorter.\n\nDifference: 104 650 − 89 720 = 14 930\n\nRoute B is 14 930 m shorter than Route A.' },

        // ── Block: Multi-Step Word Problems (17-19) ──────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'A community savings club has R156 000 in its account. It pays out R42 300 to members for a group project, then receives R18 900 in new member contributions. How much is in the account now?', correctAnswer: '132600', correctAnswers: ['132600', '132 600', 'r132600', 'R132 600'], explanation: 'Step 1 — Subtract the pay-out:\n156 000 − 42 300 = 113 700\n\nStep 2 — Add the new contributions:\n113 700 + 18 900 = 132 600\n\nThe account now has R132 600.', answer: 'R132 600' },
        { difficulty: 'Hard', question: 'A poultry farm produced 187 300 eggs in October and 164 950 eggs in November.\n\na) How many eggs were produced over the two months?\nb) In December, the farm produced 201 800 eggs. How many more eggs were produced in December than in November?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total eggs for October and November', correctAnswer: '352250', correctAnswers: ['352250', '352 250'], explanation: '187 300 + 164 950 = 352 250\n\nAdd right to left with carrying.\nAnswer: 352 250 eggs.' },
          { label: 'b) How many more eggs in December than November', correctAnswer: '36850', correctAnswers: ['36850', '36 850'], explanation: '201 800 − 164 950 = 36 850\n\nSubtract right to left with borrowing.\nCheck: 36 850 + 164 950 = 201 800 ✓\n\nAnswer: 36 850 more eggs in December than November.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner solves this problem: "A clinic had 96 400 vaccine doses in stock. It used 38 200 doses during a vaccination drive and then received a new delivery of 27 500 doses. How many doses are in stock now?" The learner calculates 96 400 + 27 500 = 123 900, then 123 900 − 38 200 = 85 700, and gives 85 700 as the final answer. Explain why this gives the correct total, or find any mistake, and confirm the correct answer.', answer: 'The correct answer is 85 700 doses, and the learner actually got the right final answer — but by coincidence of getting lucky with operation choice, not because their reasoning matches the story exactly. Using doses correctly means: stock decreases when doses are used (subtract) and increases when a new delivery arrives (add). Since addition and subtraction here do not depend on order (the two operations are independent adjustments to the same starting amount), doing them in either order gives the same result:\n\nCorrect working (in story order):\nStep 1 — Subtract doses used: 96 400 − 38 200 = 58 200\nStep 2 — Add the new delivery: 58 200 + 27 500 = 85 700\n\nBoth methods give 85 700 doses in stock now. However, learners should still work through problems in the order events happen in the story wherever possible, because not all multi-step problems allow reordering safely — for example, if a delivery had a discount that only applied to stock still remaining, the order would matter. In this case the final answer of 85 700 is correct either way.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with column addition, subtraction, estimating and checking answers with large numbers.' },
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
        // ── Block: Column Addition with Carrying (0-3) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n5 238 917 + 1 764 328', correctAnswer: '7003245', correctAnswers: ['7003245', '7 003 245'], explanation: '5 238 917 + 1 764 328 = 7 003 245\n\n• Units: 7 + 8 = 15 → write 5, carry 1\n• Tens: 1 + 2 + 1 (carried) = 4\n• Hundreds: 9 + 3 = 12 → write 2, carry 1\n• Thousands: 8 + 4 + 1 (carried) = 13 → write 3, carry 1\n• Ten thousands: 3 + 6 + 1 (carried) = 10 → write 0, carry 1\n• Hundred thousands: 2 + 7 + 1 (carried) = 10 → write 0, carry 1\n• Millions: 5 + 1 + 1 (carried) = 7\n\nAnswer: 7 003 245', answer: '7 003 245' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Find the sum of 4 287 635 and 3 196 748.', correctAnswer: '7484383', correctAnswers: ['7484383', '7 484 383'], explanation: '4 287 635 + 3 196 748 = 7 484 383\n\n• Units: 5 + 8 = 13 → write 3, carry 1\n• Tens: 3 + 4 + 1 (carried) = 8\n• Hundreds: 6 + 7 = 13 → write 3, carry 1\n• Thousands: 7 + 6 + 1 (carried) = 14 → write 4, carry 1\n• Ten thousands: 8 + 9 + 1 (carried) = 18 → write 8, carry 1\n• Hundred thousands: 2 + 1 + 1 (carried) = 4\n• Millions: 4 + 3 = 7\n\nAnswer: 7 484 383', answer: '7 484 383' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Add all three numbers, showing your column working:\n314 267 + 198 453 + 276 845', correctAnswer: '789565', correctAnswers: ['789565', '789 565'], explanation: '314 267 + 198 453 + 276 845 = 789 565\n\n• Units: 7 + 3 + 5 = 15 → write 5, carry 1\n• Tens: 6 + 5 + 4 + 1 (carried) = 16 → write 6, carry 1\n• Hundreds: 2 + 4 + 8 + 1 (carried) = 15 → write 5, carry 1\n• Thousands: 4 + 8 + 6 + 1 (carried) = 19 → write 9, carry 1\n• Ten thousands: 1 + 9 + 7 + 1 (carried) = 18 → write 8, carry 1\n• Hundred thousands: 3 + 1 + 2 + 1 (carried) = 7\n\nAnswer: 789 565', answer: '789 565' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner worked out 57 284 + 36 849 like this:\n\nTh H T U\n 5 7 2 8 4\n+3 6 8 4 9\n—————————\n 8 4 0 3 3\n\nThe learner wrote 84 033 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 57 284 + 36 849 = 94 133.\n\nWorking column by column:\n• Units: 4 + 9 = 13 → write 3, carry 1\n• Tens: 8 + 4 + 1 (carried) = 13 → write 3, carry 1\n• Hundreds: 2 + 8 + 1 (carried) = 11 → write 1, carry 1\n• Thousands: 7 + 6 + 1 (carried) = 14 → write 4, carry 1\n• Ten thousands: 5 + 3 + 1 (carried) = 9\n\nThe learner\'s mistake: in the thousands column, 7 + 6 + 1 (carried) = 14, which should give a carry of 1 into the ten thousands column, making it 5 + 3 + 1 = 9, not 8 as the learner wrote. They dropped the carry from the thousands column and also mis-added the hundreds column.\n\nCorrect answer: 94 133' },

        // ── Block: Column Subtraction with Borrowing, incl. across zeros (4-7) ──
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n7 134 586 − 2 957 648', correctAnswer: '4176938', correctAnswers: ['4176938', '4 176 938'], explanation: '7 134 586 − 2 957 648 = 4 176 938\n\n• Units: 6 − 8 → borrow. Tens 8 → 7, Units 16 − 8 = 8\n• Tens: 7 − 4 = 3\n• Hundreds: 5 − 6 → borrow. Thousands 4 → 3, Hundreds 15 − 6 = 9\n• Thousands: 3 − 7 → borrow. Ten thousands 3 → 2, Thousands 13 − 7 = 6\n• Ten thousands: 2 − 5 → borrow. Hundred thousands 1 → 0, Ten thousands 12 − 5 = 7\n• Hundred thousands: 0 − 9 → borrow. Millions 7 → 6, Hundred thousands 10 − 9 = 1\n• Millions: 6 − 2 = 4\n\nAnswer: 4 176 938', answer: '4 176 938' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate, showing your borrowing through the zeros:\n60 000 000 − 28 437 956', correctAnswer: '31562044', correctAnswers: ['31562044', '31 562 044'], explanation: '60 000 000 − 28 437 956 = 31 562 044\n\nThe top number has six zeros, so we borrow all the way from the ten millions column:\nTen millions 6 → 5, and every column from millions down to units becomes 9, except units which becomes 10.\n\n• Units: 10 − 6 = 4\n• Tens: 9 − 5 = 4\n• Hundreds: 9 − 9 = 0\n• Thousands: 9 − 7 = 2\n• Ten thousands: 9 − 3 = 6\n• Hundred thousands: 9 − 4 = 5\n• Millions: 9 − 8 = 1\n• Ten millions: 5 − 2 = 3\n\nAnswer: 31 562 044', answer: '31 562 044' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n7 000 000 − 3 489 265', correctAnswer: '3510735', correctAnswers: ['3510735', '3 510 735'], explanation: '7 000 000 − 3 489 265 = 3 510 735\n\nBorrow across the zeros: millions 7 → 6, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 5 = 5\n• Tens: 9 − 6 = 3\n• Hundreds: 9 − 2 = 7\n• Thousands: 9 − 9 = 0\n• Ten thousands: 9 − 8 = 1\n• Hundred thousands: 9 − 4 = 5\n• Millions: 6 − 3 = 3\n\nAnswer: 3 510 735', answer: '3 510 735' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner says: "4 000 000 − 1 876 543 = 2 223 457, because I borrowed across all the zeros." Calculate the exact answer using the column method, and explain whether the learner is correct.', answer: 'The correct answer is 4 000 000 − 1 876 543 = 2 123 457.\n\nBorrowing across the zeros: millions 4 → 3, and hundred thousands down to tens each become 9, units becomes 10.\n\n• Units: 10 − 3 = 7\n• Tens: 9 − 4 = 5\n• Hundreds: 9 − 5 = 4\n• Thousands: 9 − 6 = 3\n• Ten thousands: 9 − 7 = 2\n• Hundred thousands: 9 − 8 = 1\n• Millions: 3 − 1 = 2\n\nThe learner is NOT correct — their answer of 2 223 457 does not match 2 123 457. It looks like they made an error in the hundred thousands column of the borrowing chain. Always work column by column, right to left, checking that only the units digit becomes 10 — every zero digit in between should become 9.\n\nCorrect answer: 2 123 457' },

        // ── Block: Estimating by Rounding Before Calculating (8-10) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 74 582 + 26 317 by rounding each number to the nearest ten thousand.', correctAnswer: '100000', correctAnswers: ['100000', '100 000'], explanation: 'Round each number to the nearest ten thousand:\n74 582 ≈ 70 000\n26 317 ≈ 30 000\n\nEstimate: 70 000 + 30 000 = 100 000\n\n(The exact answer, 74 582 + 26 317 = 100 899, is very close to this estimate.)', answer: '100 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Two learners estimate 638 450 + 415 200. Karabo rounds both numbers to the nearest hundred thousand and gets an estimate of 1 000 000. Priya rounds both numbers to the nearest ten thousand and gets an estimate of 1 060 000. The exact answer is 1 053 650. Whose estimate is more reasonable, and why?', answer: 'The exact answer is 638 450 + 415 200 = 1 053 650.\n\nKarabo rounded to the nearest hundred thousand: 638 450 ≈ 600 000 and 415 200 ≈ 400 000, giving 600 000 + 400 000 = 1 000 000. This is 53 650 away from the exact answer.\n\nPriya rounded to the nearest ten thousand: 638 450 ≈ 640 000 and 415 200 ≈ 420 000, giving 640 000 + 420 000 = 1 060 000. This is only 6 350 away from the exact answer.\n\nPriya\'s estimate of 1 060 000 is more reasonable because rounding to a smaller place value (ten thousand instead of hundred thousand) keeps each number closer to its original value, so the estimate lands much closer to the exact answer.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A clerk estimates 528 417 − 289 654 by rounding both numbers to the nearest ten thousand first, getting an estimate of 240 000. She then calculates the exact answer as 238 763. Is her exact answer reasonable? Show the rounding and explain.', answer: '528 417 rounded to the nearest ten thousand is 530 000 (thousands digit is 8, round up).\n289 654 rounded to the nearest ten thousand is 290 000 (thousands digit is 9, round up).\n\nEstimate: 530 000 − 290 000 = 240 000\n\nThe exact answer of 238 763 is only 1 237 away from the estimate of 240 000 — a small difference compared to the size of the numbers involved. Yes, her exact answer is reasonable.' },

        // ── Block: Checking Answers with Inverse Operations (11-13) ─────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Check this calculation using the inverse operation:\n82 635 − 47 968 = 34 667\nWrite the addition you would use to check it, and give its answer to confirm the subtraction is correct.', correctAnswer: '82635', correctAnswers: ['82635', '82 635', '34667+47968=82635', '34 667 + 47 968 = 82 635'], explanation: 'To check a subtraction, add the answer back to the number that was subtracted:\n34 667 + 47 968 = 82 635\n\nThis matches the original number, 82 635, so the subtraction is confirmed correct. ✓', answer: '34 667 + 47 968 = 82 635' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner calculates 76 438 − 29 574 = 46 864. To check it, they add 46 864 + 29 574 and get 75 438, and conclude the subtraction must be wrong. Redo the CHECKING addition carefully. Was the learner\'s original subtraction actually correct, and where did the mistake happen?', answer: 'First, check the original subtraction 76 438 − 29 574:\n46 864 + 29 574 = 76 438 (done correctly this time)\n\nSince this matches the original number 76 438, the learner\'s original subtraction (46 864) was correct.\n\nThe mistake happened in the CHECKING calculation, not the original subtraction. The learner made an addition error when adding 46 864 + 29 574 — they got 75 438 instead of the correct 76 438, likely from a dropped carry. This shows why it is important to redo a check calculation carefully: a mistake in the check itself can make a correct answer look wrong.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A statement reads: "506 004 − 238 467 = 267 537." Write the correct inverse-check equation (an addition) that would confirm this subtraction, and give the total.', correctAnswer: '506004', correctAnswers: ['506004', '506 004', '267537+238467=506004', '267 537 + 238 467 = 506 004'], explanation: 'To check a subtraction, add the answer to the number that was subtracted:\n267 537 + 238 467 = 506 004\n\nThis matches the original number, 506 004, so the subtraction is confirmed correct. ✓', answer: '267 537 + 238 467 = 506 004' },

        // ── Block: Word Problems — Addition, Subtraction, or Both (14-16) ───
        { difficulty: 'Medium', checkMode: 'auto', question: 'A soccer stadium sold 387 500 tickets for the league season and 246 800 tickets for cup matches. How many tickets were sold in total across both competitions?', correctAnswer: '634300', correctAnswers: ['634300', '634 300'], explanation: '"In total" tells us to add.\n387 500 + 246 800 = 634 300\n\n634 300 tickets were sold in total across both competitions.', answer: '634 300 tickets' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A textile factory has 542 600 metres of fabric in stock. It uses 318 750 metres to fill an order. How many metres of fabric remain in stock?', correctAnswer: '223850', correctAnswers: ['223850', '223 850'], explanation: '"How many metres remain" tells us to subtract.\n542 600 − 318 750 = 223 850\n\n223 850 metres of fabric remain in stock.', answer: '223 850 metres' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Bus company A carried 97 430 passengers last month. Bus company B carried 83 160 passengers in the same month. Which company carried more passengers, and by how many?', answer: 'Bus company A carried more passengers.\n\nDifference: 97 430 − 83 160 = 14 270\n\nBus company A carried 14 270 more passengers than Bus company B.' },

        // ── Block: Multi-Step Word Problems (17-19) ──────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'A youth sports club has R138 000 in its bank account. It spends R47 250 on new equipment, then receives a sponsorship deposit of R21 600. How much is in the account now?', correctAnswer: '112350', correctAnswers: ['112350', '112 350', 'r112350', 'R112 350'], explanation: 'Step 1 — Subtract the amount spent:\n138 000 − 47 250 = 90 750\n\nStep 2 — Add the sponsorship deposit:\n90 750 + 21 600 = 112 350\n\nThe account now has R112 350.', answer: 'R112 350' },
        { difficulty: 'Hard', question: 'A bakery produced 162 400 loaves of bread in April and 178 650 loaves in May.\n\na) How many loaves were produced over the two months?\nb) In June, the bakery produced 195 300 loaves. How many more loaves were produced in June than in May?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total loaves for April and May', correctAnswer: '341050', correctAnswers: ['341050', '341 050'], explanation: '162 400 + 178 650 = 341 050\n\nAdd right to left with carrying.\nAnswer: 341 050 loaves.' },
          { label: 'b) How many more loaves in June than May', correctAnswer: '16650', correctAnswers: ['16650', '16 650'], explanation: '195 300 − 178 650 = 16 650\n\nSubtract right to left with borrowing.\nCheck: 16 650 + 178 650 = 195 300 ✓\n\nAnswer: 16 650 more loaves in June than May.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner solves this problem: "A library had 84 600 books on its shelves. It donated 26 400 books to a rural school and then received a new order of 19 800 books. How many books are on the shelves now?" The learner calculates 84 600 − 19 800 = 64 800, then 64 800 + 26 400 = 91 200, and gives 91 200 as the final answer. Explain the learner\'s mistake and give the correct answer.', answer: 'The correct answer is 78 000 books.\n\nThe learner used the wrong operation for each event: donating books means the library\'s stock decreases (subtract 26 400), and receiving a new order means it increases (add 19 800). The learner instead subtracted the new order and added the donation — the exact opposite of what should happen.\n\nCorrect working:\nStep 1 — Subtract the donated books: 84 600 − 26 400 = 58 200\nStep 2 — Add the new order: 58 200 + 19 800 = 78 000\n\nThe library now has 78 000 books, not 91 200. Always match each key word to the correct operation: "donated" or "gave away" means subtract, "received" or "new order" means add.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply column addition, subtraction, estimating and checking with large numbers to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
