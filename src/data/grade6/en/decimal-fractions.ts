import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (place value roles) ───────────────────────────────────────
// units        → blue    (#2563eb)
// tenths       → green   (#16a34a)
// hundredths   → orange  (#ea580c)
// thousandths  → red     (#dc2626)
// carried digit→ purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Decimal Fractions',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PLACE VALUE OF DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-decimal-fractions',
      title: 'Place Value of Decimal Fractions',
      icon: '·',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 we work with decimal fractions up to <strong>3 decimal places</strong>. The digits after the decimal point represent <strong>tenths</strong>, <strong>hundredths</strong> and <strong>thousandths</strong>. The digit immediately after the decimal point is in the <strong>tenths</strong> place — it represents parts of 10. The second digit is in the <strong>hundredths</strong> place — it represents parts of 100. The third digit is in the <strong>thousandths</strong> place — it represents parts of 1 000. We can write decimal fractions in <strong>expanded notation</strong> just like whole numbers.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('units')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tenths')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hundredths')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('thousandths')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Place value positions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The whole number part — to the left of the decimal point. Each unit has a value of 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tenths</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The first digit after the decimal point. Each tenth has a value of 1/10 or 0.1.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Hundredths</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The second digit after the decimal point. Each hundredth has a value of 1/100 or 0.01.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Thousandths</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The third digit after the decimal point. Each thousandth has a value of 1/1 000 or 0.001.</p>` +
        `</div>` +

        `</div>` +

        // ── Place value table ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Place value table for 4.375</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:15px;text-align:center;">` +
        `<thead><tr>` +
        `<th style="padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;color:#2563eb;font-weight:700;">Units</th>` +
        `<th style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;color:#374151;font-weight:600;width:40px;"></th>` +
        `<th style="padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;color:#16a34a;font-weight:700;">Tenths</th>` +
        `<th style="padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;color:#ea580c;font-weight:700;">Hundredths</th>` +
        `<th style="padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;color:#dc2626;font-weight:700;">Thousandths</th>` +
        `</tr></thead>` +
        `<tbody><tr>` +
        `<td style="padding:12px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;font-size:1.5em;font-weight:700;color:#2563eb;">4</td>` +
        `<td style="padding:12px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;font-size:1.5em;font-weight:700;color:#374151;">.</td>` +
        `<td style="padding:12px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;font-size:1.5em;font-weight:700;color:#16a34a;">3</td>` +
        `<td style="padding:12px 14px;background:#fff7ed;border:1.5px solid #fed7aa;font-size:1.5em;font-weight:700;color:#ea580c;">7</td>` +
        `<td style="padding:12px 14px;background:#fef2f2;border:1.5px solid #fecaca;font-size:1.5em;font-weight:700;color:#dc2626;">5</td>` +
        `</tr></tbody>` +
        `</table>` +
        `</div>` +

        // ── Expanded notation ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Expanded notation</p>` +
        `<p style="margin-bottom:12px;">We can break a decimal fraction into the value of each digit — this is called <strong>expanded notation</strong>.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Fractions</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('4')} + ${gr('3/10')} + ${or('7/100')} + ${re('5/1 000')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Decimals</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('4')} + ${gr('0.3')} + ${or('0.07')} + ${re('0.005')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: zeros as placeholders</p>` +
        `<p style="margin:0;color:#1e3a8a;">A zero in a decimal fraction is a <strong>placeholder</strong> — it holds the place value position so the other digits are in the right place. In 3.069, the zero in the ${gr('tenths')} place means there are no tenths. Without it, 3.69 would be a completely different number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write the place value of each digit in 4.375.',
          answer: `${bl('4')} units · ${gr('3')} tenths · ${or('7')} hundredths · ${re('5')} thousandths`,
          steps: [
            `${bl('4')} is in the <strong>units place</strong> = ${bl('4')}`,
            `${gr('3')} is in the <strong>tenths place</strong> = ${gr('3/10')} or ${gr('0.3')}`,
            `${or('7')} is in the <strong>hundredths place</strong> = ${or('7/100')} or ${or('0.07')}`,
            `${re('5')} is in the <strong>thousandths place</strong> = ${re('5/1 000')} or ${re('0.005')}`,
          ],
        },
        {
          question: 'Write 12.408 in expanded notation.',
          answer: `10 + ${bl('2')} + ${gr('4/10')} + ${or('0/100')} + ${re('8/1 000')}`,
          steps: [
            `Identify each digit and its place value: <strong>1</strong> tens · ${bl('2')} units · ${gr('4')} tenths · ${or('0')} hundredths · ${re('8')} thousandths.`,
            `Write in expanded form using fractions: 10 + ${bl('2')} + ${gr('4/10')} + ${or('0/100')} + ${re('8/1 000')}`,
            `Or written as decimals: 10 + ${bl('2')} + ${gr('0.4')} + ${re('0.008')}`,
            `<strong>Note:</strong> The ${or('0')} in the hundredths place is a placeholder — we include it in the fraction form to show there are no hundredths, keeping ${re('8')} in the correct thousandths position.`,
          ],
        },
        {
          question: 'What is the value of the digit 6 in 3.069?',
          answer: `The value of ${or('6')} in 3.069 is ${or('6/100')} or ${or('0.06')}`,
          steps: [
            `Find the digit ${or('6')} in 3.069. Count the positions after the decimal point: the first digit (0) is in the ${gr('tenths')} place, the second digit (6) is in the ${or('hundredths')} place.`,
            `So ${or('6')} is in the <strong>hundredths place</strong>.`,
            `The value of ${or('6')} in 3.069 is ${or('6/100')} or ${or('0.06')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — place value name ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the place value of the digit 7 in 3.074?',
          answer: 'hundredths',
          checkMode: 'auto',
          correctAnswer: 'hundredths',
          explanation: 'In 3.074 the digits after the decimal point are: 0 (tenths), 7 (hundredths), 4 (thousandths). The digit 7 is in the hundredths place.',
        },

        // ── Q2 Easy — expanded notation ─────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 5.308 in expanded notation.',
          answer: '5 + 3/10 + 0/100 + 8/1 000\nor 5 + 0.3 + 0.008',
          checkMode: 'self',
        },

        // ── Q3 Medium — value of a digit ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'What is the value of the digit 4 in 12.043?',
          answer: '0.04',
          checkMode: 'auto',
          correctAnswer: '0.04',
          correctAnswers: ['0.04', '4/100'],
          explanation: 'In 12.043 the digits after the decimal point are: 0 (tenths), 4 (hundredths), 3 (thousandths). The digit 4 is in the hundredths place. Its value is 4/100 = 0.04.',
        },

        // ── Q4 Hard — same digit different value ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the digit 5 in 3.505 appears twice and both have the same value. Is he correct? Explain.',
          answer: 'No — the first 5 is in the tenths place with value 0.5 and the second 5 is in the thousandths place with value 0.005. They have different values because they occupy different place value positions.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining place value of decimal fractions to 3 decimal places with worked examples using tenths hundredths and thousandths" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Place value chart for decimal fractions showing units tenths hundredths and thousandths columns colour coded blue green orange red with example 4.375" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-decimal-fractions',
      title: 'Comparing and Ordering Decimal Fractions',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">To compare decimal fractions we compare digit by digit from left to right starting with the <strong>largest place value</strong>. If the whole number parts are equal we compare the ${gr('tenths')} digits, then the ${or('hundredths')} and then the ${re('thousandths')}. When ordering decimals it helps to write them with the same number of decimal places by adding zeros — this does not change the value. Remember that 0.5 and 0.500 are equal.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tenths')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hundredths')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('thousandths')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('key comparison digit')}</span>` +
        `</div>` +

        // ── How to compare ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to compare decimal fractions</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare whole number parts first.</strong> The larger whole number means the larger decimal. If equal, move to the next step.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the ${gr('tenths')} digits.</strong> The larger tenths digit means the larger decimal. If equal, move on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the ${or('hundredths')} digits.</strong> The larger hundredths digit means the larger decimal. If equal, move on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the ${re('thousandths')} digits.</strong> The larger thousandths digit means the larger decimal.</p>` +
        `</div>` +

        `</div>` +

        // ── Writing with same decimal places ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Writing decimals with the same number of places</p>` +
        `<p style="margin-bottom:12px;">When ordering several decimals it helps to <strong>write them all with the same number of decimal places</strong> by adding zeros. Adding zeros after the last decimal digit does <em>not</em> change the value.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Original</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">0.${gr('5')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Three places</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">0.${gr('5')}${or('0')}${re('0')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Equal values</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">0.5 = 0.500 ✓</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Common mistake: comparing digits as whole numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Never compare decimal digits as if they were whole numbers. 0.8 is <strong>greater</strong> than 0.75 because the ${gr('tenths')} digit 8 &gt; 7 — you do not compare 8 against 75. Always compare ${bl('one place value at a time')} from left to right.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Which is greater — 3.45 or 3.452?',
          answer: `3.${gr('4')}${or('5')}${bl('2')} &gt; 3.${gr('4')}${or('5')}`,
          steps: [
            `Compare whole numbers: both are <strong>3</strong> — equal. Move to ${gr('tenths')}.`,
            `Compare ${gr('tenths')}: both have ${gr('4')} — equal. Move to ${or('hundredths')}.`,
            `Compare ${or('hundredths')}: both have ${or('5')} — equal. Move to ${re('thousandths')}.`,
            `Compare ${re('thousandths')}: 3.45 has ${re('0')} thousandths and 3.452 has ${bl('2')} thousandths. Since ${bl('2')} &gt; ${re('0')}, we have <strong>3.452 &gt; 3.45</strong>.`,
          ],
        },
        {
          question: 'Order from smallest to biggest: 2.3,  2.034,  2.34,  2.304.',
          answer: `2.034 &lt; 2.3 &lt; 2.304 &lt; 2.34`,
          steps: [
            `Write each number with the same number of decimal places (3 places): 2.${gr('3')}${or('0')}${re('0')},  2.${gr('0')}${or('3')}${re('4')},  2.${gr('3')}${or('4')}${re('0')},  2.${gr('3')}${or('0')}${re('4')}.`,
            `All whole numbers are equal (all are 2). Compare ${gr('tenths')}: 2.${bl('0')}34 has the smallest tenths digit — <strong>2.034 is the smallest</strong>.`,
            `The remaining three all have ${gr('tenths')} digit 3. Compare ${or('hundredths')}: 2.3${bl('0')}0 and 2.3${bl('0')}4 have ${or('0')} hundredths; 2.3${or('4')}0 has ${or('4')} hundredths — so <strong>2.34 is the largest</strong>.`,
            `Between 2.300 and 2.304: compare ${re('thousandths')}: 2.30${re('0')} vs 2.30${bl('4')} — since ${bl('4')} &gt; ${re('0')}, we get 2.304 &gt; 2.3.`,
            `<strong>Ascending order: 2.034,  2.3,  2.304,  2.34.</strong>`,
          ],
        },
        {
          question: 'Sipho says 0.8 is less than 0.75 because 8 is less than 75. Is he correct?',
          answer: `Sipho is <strong>incorrect</strong> — 0.8 &gt; 0.75`,
          steps: [
            `Write both numbers with the same decimal places: 0.${gr('8')}${or('0')} and 0.${gr('7')}${or('5')}.`,
            `Compare ${gr('tenths')}: ${bl('8')} &gt; ${gr('7')}, so <strong>0.8 &gt; 0.75</strong>.`,
            `Sipho is <strong>incorrect</strong>. He compared the digits 8 and 75 as whole numbers — but 8 is in the ${gr('tenths')} place and 7 is in the ${gr('tenths')} place of 0.75. Comparing ${bl('one place value at a time')} from left to right gives the correct answer.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — which is greater ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which is greater — 4.5 or 4.49?',
          answer: '4.5',
          checkMode: 'auto',
          correctAnswer: '4.5',
          explanation: 'Write both with the same decimal places: 4.50 and 4.49. Compare tenths: 5 > 4, so 4.5 > 4.49.',
        },

        // ── Q6 Medium — ordering decimals ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Order from smallest to biggest — 1.2, 1.023, 1.302, 1.23.',
          answer: '1.023, 1.2, 1.23, 1.302',
          checkMode: 'self',
        },

        // ── Q7 Hard — trailing zero misconception ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says 0.750 is greater than 0.75 because it has more digits. Is she correct? Explain.',
          answer: 'No — 0.750 and 0.75 are equal. Adding a zero at the end of a decimal does not change its value. The trailing zero is a placeholder that does not affect the amount.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to compare and order decimal fractions by comparing digit by digit from left to right using place value" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Comparison chart showing 3.45 and 3.452 side by side with tenths green hundredths orange thousandths red and the key comparison digit blue highlighted" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING AND SUBTRACTING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-decimal-fractions',
      title: 'Adding and Subtracting Decimal Fractions',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">To add or subtract decimal fractions we <strong>line up the ${bl('decimal points')}</strong> and add ${or('zeros')} where needed so all numbers have the same number of decimal places. Then we add or subtract as we would with whole numbers, working from <strong>right to left</strong>. The ${bl('decimal point')} in the answer goes directly below the ${bl('decimal points')} in the question. Always <strong>estimate first</strong> to check your answer is reasonable.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal point')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('carried digit')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('zero added')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Estimate first</strong> — Round each number to the nearest whole number and add or subtract. This gives you a rough check for your answer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Line up the ${bl('decimal points')}</strong> — Write the numbers one below the other so that all ${bl('decimal points')} are in the same column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add ${or('zeros')}</strong> — Fill in ${or('zeros')} after the last decimal digit so all numbers have the same number of decimal places. Adding trailing zeros does not change the value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add or subtract right to left</strong> — Work column by column from the rightmost digit. When adding, ${pu('carry')} any tens to the next column. When subtracting, borrow from the next column when needed.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Write the ${bl('decimal point')}</strong> — Place the ${bl('decimal point')} in the ${gr('answer')} directly below the ${bl('decimal points')} in the question.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always estimate first</p>` +
        `<p style="margin:0;color:#1e3a8a;">If your ${gr('answer')} is very different from your estimate, go back and check. The most common mistakes are forgetting to line up the ${bl('decimal points')} and forgetting to add ${or('zeros')} so all numbers have the same number of decimal places.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: 3.45 + 2.368 = 5.818 ────────────────────────────────
        {
          question: 'Calculate 3.45 + 2.368.',
          answer: `${gr('5.818')}`,
          steps: [
            `<strong>Estimate:</strong> 3 + 2 = 5. Our answer should be close to 5.`,
            `<strong>Line up the ${bl('decimal points')}:</strong> Write 3.45 and 2.368 with their ${bl('decimal points')} aligned vertically.`,
            `<strong>Add an ${or('zero')}:</strong> Write 3.45 as 3.45${or('0')} so both numbers have 3 decimal places.`,
            `<strong>Thousandths:</strong> ${or('0')} + 8 = 8. Write 8.`,
            `<strong>Hundredths:</strong> 5 + 6 = 11 — write 1, ${pu('carry 1')}.`,
            `<strong>Tenths:</strong> 4 + 3 + ${pu('1')} (carried) = 8. Write 8.`,
            `<strong>Write the ${bl('decimal point')}.</strong> Then units: 3 + 2 = 5.`,
            `<strong>${gr('Answer: 3.450 + 2.368 = 5.818')}</strong> — close to our estimate of 5 ✓`,
          ],
        },

        // ── Example 8: 7.2 - 3.485 = 3.715 ─────────────────────────────────
        {
          question: 'Calculate 7.2 − 3.485.',
          answer: `${gr('3.715')}`,
          steps: [
            `<strong>Estimate:</strong> 7 − 3 = 4. Our answer should be close to 4.`,
            `<strong>Line up the ${bl('decimal points')}:</strong> Write 7.2 and 3.485 with their ${bl('decimal points')} aligned vertically.`,
            `<strong>Add ${or('zeros')}:</strong> Write 7.2 as 7.2${or('00')} so both numbers have 3 decimal places.`,
            `<strong>Thousandths:</strong> ${or('0')} − 5 — need to borrow. Since both the thousandths and hundredths digits are ${or('0')}, borrow a tenth: thousandths becomes 10, hundredths becomes 9. 10 − 5 = 5. Write 5.`,
            `<strong>Hundredths:</strong> 9 − 8 = 1. Write 1.`,
            `<strong>Tenths:</strong> 1 − 4 — need to borrow from units. Tenths becomes 11. 11 − 4 = 7. Write 7. (Units reduced to 6.)`,
            `<strong>Write the ${bl('decimal point')}.</strong> Then units: 6 − 3 = 3. Write 3.`,
            `<strong>${gr('Answer: 7.200 − 3.485 = 3.715')}</strong> — close to our estimate of 4 ✓`,
          ],
        },

        // ── Example 9: Lerato word problem ───────────────────────────────────
        {
          question: 'Lerato runs 4.75 km in the morning and 3.825 km in the afternoon. How far does she run in total?',
          answer: `${gr('8.575 km')}`,
          steps: [
            `<strong>Estimate:</strong> 5 + 4 = 9 km. Our answer should be close to 9.`,
            `<strong>Line up the ${bl('decimal points')}:</strong> Write 4.75 and 3.825 with their ${bl('decimal points')} aligned vertically.`,
            `<strong>Add an ${or('zero')}:</strong> Write 4.75 as 4.75${or('0')} so both numbers have 3 decimal places.`,
            `<strong>Thousandths:</strong> ${or('0')} + 5 = 5. Write 5.`,
            `<strong>Hundredths:</strong> 5 + 2 = 7. Write 7.`,
            `<strong>Tenths:</strong> 7 + 8 = 15 — write 5, ${pu('carry 1')}.`,
            `<strong>Write the ${bl('decimal point')}.</strong> Then units: 4 + 3 + ${pu('1')} (carried) = 8. Write 8.`,
            `<strong>${gr('Answer: Lerato runs 8.575 km in total.')}</strong> — close to our estimate of 9 km ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy — addition ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 3.45 + 2.3.',
          answer: '5.75',
          checkMode: 'auto',
          correctAnswer: '5.75',
          explanation: 'Line up decimal points. Write 2.3 as 2.30 so both numbers have 2 decimal places.\nHundredths: 5 + 0 = 5.\nTenths: 4 + 3 = 7.\nUnits: 3 + 2 = 5.\nAnswer: 5.75 ✓',
        },

        // ── Q9 Medium — subtraction ──────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 8.4 − 3.625.',
          answer: '4.775',
          checkMode: 'auto',
          correctAnswer: '4.775',
          explanation: 'Write 8.4 as 8.400 so both numbers have 3 decimal places.\nThousandths: 0 − 5 → borrow. Hundredths becomes 9, thousandths becomes 10. 10 − 5 = 5.\nHundredths: 9 − 2 = 7.\nTenths: 3 − 6 → borrow from units. Tenths becomes 13. 13 − 6 = 7. Units reduced to 7.\nUnits: 7 − 3 = 4.\nAnswer: 4.775 ✓',
        },

        // ── Q10 Hard — multi-step word problem ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle runs 3.475 km on Monday, 4.8 km on Wednesday and 2.925 km on Friday. How far does she run in total?',
          answer: '11.2',
          checkMode: 'auto',
          correctAnswer: '11.2',
          correctAnswers: ['11.2', '11.2km', '11.2 km', '11.200'],
          explanation: 'Write all distances with 3 decimal places: 3.475 + 4.800 + 2.925.\nThousandths: 5 + 0 + 5 = 10 → write 0, carry 1.\nHundredths: 7 + 0 + 2 + 1 (carried) = 10 → write 0, carry 1.\nTenths: 4 + 8 + 9 + 1 (carried) = 22 → write 2, carry 2.\nUnits: 3 + 4 + 2 + 2 (carried) = 11.\nAnswer: 11.200 = 11.2 km ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract decimal fractions by lining up decimal points and adding zeros to make equal decimal places" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column addition layout showing 3.450 plus 2.368 equals 5.818 with decimal point blue carried digit purple zero added orange and answer green colour coded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MULTIPLYING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-decimal-fractions',
      title: 'Multiplying Decimal Fractions',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">To multiply a decimal fraction by a whole number we multiply as if there is no decimal point and then count the total number of ${or('decimal places')} in the question. We place the ${bl('decimal point')} in the answer so that it has the same number of ${or('decimal places')}. To multiply a decimal by 10 we move the ${bl('decimal point')} one place to the right. To multiply by 100 we move it two places to the right. To multiply by 1 000 we move it three places to the right.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('decimal places counted')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal point position')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('answer')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multiplying by a whole number</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Multiply')} — Ignore the decimal point and ${gr('multiply')} the digits as if they were a whole number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Count decimal places')} — Count the total number of ${or('decimal places')} in the question. Only the decimal number counts — not the whole number multiplier.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Place the ${bl('decimal point')}</strong> — Count the same number of digits from the right of your product and place the ${bl('decimal point')} there. The ${re('answer')} will have the same number of ${or('decimal places')} as the question.</p>` +
        `</div>` +

        `</div>` +

        // ── Multiplying by 10, 100, 1 000 ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multiplying by 10, 100 and 1 000</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>1 place</strong> to the right.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2.${bl('3')}75 × 10 = ${re('23.75')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>2 places</strong> to the right.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2.3${bl('7')}5 × 100 = ${re('237.5')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 1 000</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>3 places</strong> to the right.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2.37${bl('5')} × 1 000 = ${re('2 375')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Count, then place</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Count')} the ${or('decimal places')} in the question <em>before</em> you calculate — then you know exactly where the ${bl('decimal point')} goes in the ${re('answer')}. Write the ${bl('decimal point')} before you write trailing zeros so you do not lose track of it.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 10: 3.45 × 6 = 20.7 ─────────────────────────────────────
        {
          question: 'Calculate 3.45 × 6.',
          answer: `3.45 × 6 = ${re('20.7')}`,
          steps: [
            `${gr('Multiply')} ignoring the decimal point: ${gr('345 × 6 = 2 070')}.`,
            `${or('Count decimal places')} in the question: 3.45 has ${or('2 decimal places')}. The whole number 6 has no decimal places.`,
            `Place the ${bl('decimal point')} ${bl('2 places from the right')} in the product 2 070 → 20.70.`,
            `<strong>${re('Answer: 20.70 = 20.7')}</strong> ✓`,
          ],
        },

        // ── Example 11: 2.375 × 100 = 237.5 ─────────────────────────────────
        {
          question: 'Calculate 2.375 × 100.',
          answer: `2.375 × 100 = ${re('237.5')}`,
          steps: [
            `Multiplying by 100 moves the ${bl('decimal point')} ${bl('2 places to the right')}.`,
            `${gr('2.375 × 100:')} move the ${bl('decimal point')} two places right → 237.5.`,
            `<strong>${re('Answer: 237.5')}</strong> ✓`,
          ],
        },

        // ── Example 12: Amahle — R12.75 × 4 = R51.00 ───────────────────────
        {
          question: 'Amahle buys 4 bottles of juice each costing R12.75. What is the total cost?',
          answer: `The total cost is ${re('R51.00')}`,
          steps: [
            `Write the number sentence: R12.75 × 4 = ?`,
            `${gr('Multiply')} ignoring the decimal point: ${gr('1 275 × 4 = 5 100')}.`,
            `${or('Count decimal places')} in the question: R12.75 has ${or('2 decimal places')}.`,
            `Place the ${bl('decimal point')} ${bl('2 places from the right')} in 5 100 → 51.00.`,
            `<strong>${re('Answer: The total cost is R51.00.')}</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Easy — multiply by 10 ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 4.35 × 10.',
          answer: '43.5',
          checkMode: 'auto',
          correctAnswer: '43.5',
          explanation: 'Multiplying by 10 moves the decimal point 1 place to the right.\n4.35 × 10 = 43.5 ✓',
        },

        // ── Q12 Medium — multiply by a whole number ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 3.25 × 8.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Multiply ignoring the decimal point: 325 × 8 = 2 600.\nCount decimal places in the question: 3.25 has 2 decimal places.\nPlace the decimal point 2 places from the right in 2 600 → 26.00 = 26.\nAnswer: 26 ✓',
        },

        // ── Q13 Hard — verify a multiplication result ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho multiplies 2.375 × 4 and gets 9.5. Is he correct? Show your working.',
          answer: 'Multiply ignoring the decimal point: 2 375 × 4 = 9 500.\n2.375 has 3 decimal places, so place the decimal point 3 places from the right in 9 500 → 9.500 = 9.5.\nYes, Sipho is correct.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply decimal fractions by a whole number and by 10 100 and 1000 with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 3.45 multiplied by 6 with decimal places counted orange decimal point position blue multiplication green and answer red colour coded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — DIVIDING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-decimal-fractions',
      title: 'Dividing Decimal Fractions',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">To divide a decimal fraction by a whole number we divide as normal and keep the ${bl('decimal point')} in the same position. To divide a decimal by 10 we move the ${bl('decimal point')} one place to the left. To divide by 100 we move it two places to the left. To divide by 1 000 we move it three places to the left. Always check your answer by multiplying — if you divide correctly, multiplying the answer by the divisor should give back the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal point movement')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('division steps')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('remainder')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('answer')}</span>` +
        `</div>` +

        // ── Dividing by a whole number ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dividing by a whole number</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Divide as normal')} — Divide digit by digit from left to right, exactly as you would with a whole number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Keep the ${bl('decimal point')}</strong> — When you reach the ${bl('decimal point')} in the dividend, write the ${bl('decimal point')} in the same column in the answer directly above it.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check the ${re('answer')}</strong> — Multiply the ${re('answer')} by the divisor. The result should equal the original dividend.</p>` +
        `</div>` +

        `</div>` +

        // ── Dividing by 10, 100, 1 000 ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dividing by 10, 100 and 1 000</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>1 place</strong> to the left.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">4${bl('7')}.5 ÷ 10 = ${re('4.75')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>2 places</strong> to the left.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('47')}.5 ÷ 100 = ${re('0.475')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 1 000</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Move the ${bl('decimal point')} <strong>3 places</strong> to the left.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('475')}.0 ÷ 1 000 = ${re('0.475')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check by multiplying</p>` +
        `<p style="margin:0;color:#1e3a8a;">After dividing, ${gr('multiply')} your ${re('answer')} by the divisor. The result should equal the original number. If it does not, check where you placed the ${bl('decimal point')} or whether you carried the ${or('remainder')} correctly.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 13: 8.46 ÷ 3 = 2.82 ─────────────────────────────────────
        {
          question: 'Calculate 8.46 ÷ 3.',
          answer: `8.46 ÷ 3 = ${re('2.82')}`,
          steps: [
            `${gr('Divide as normal:')} ${gr('8 ÷ 3 = 2')} remainder ${or('2')}. Write ${gr('2')} in the quotient.`,
            `${gr('Bring down 4')} to join the ${or('remainder')} 2 → we now have ${or('2')}4. ${gr('24 ÷ 3 = 8')}. Write ${gr('8')} in the quotient.`,
            `${gr('Bring down 6.')} ${gr('6 ÷ 3 = 2')}. Write ${gr('2')} in the quotient. No remainder.`,
            `<strong>Keep the ${bl('decimal point')} in the same position</strong> — the ${bl('decimal point')} in the answer sits directly above the ${bl('decimal point')} in 8.46.`,
            `<strong>${re('Answer: 2.82')}</strong>`,
            `<strong>Check:</strong> ${re('2.82')} × 3 = ${re('8.46')} ✓`,
          ],
        },

        // ── Example 14: 47.5 ÷ 100 = 0.475 ──────────────────────────────────
        {
          question: 'Calculate 47.5 ÷ 100.',
          answer: `47.5 ÷ 100 = ${re('0.475')}`,
          steps: [
            `Dividing by 100 moves the ${bl('decimal point')} ${bl('2 places to the left')}.`,
            `${bl('Move the decimal point:')} 47.5 → 4.75 → ${re('0.475')}.`,
            `<strong>${re('Answer: 0.475')}</strong>`,
          ],
        },

        // ── Example 15: R245.80 ÷ 4 = R61.45 ────────────────────────────────
        {
          question: 'Thabo divides R245.80 equally among 4 people. How much does each person get?',
          answer: `Each person gets ${re('R61.45')}`,
          steps: [
            `Write the number sentence: R245.80 ÷ 4 = ?`,
            `${gr('Divide:')} ${gr('24 ÷ 4 = 6')}. Write ${gr('6')} in the quotient.`,
            `${gr('Divide:')} ${gr('5 ÷ 4 = 1')} remainder ${or('1')}. Write ${gr('1')} in the quotient.`,
            `Keep the ${bl('decimal point')} — write the ${bl('decimal point')} in the answer above the ${bl('decimal point')} in 245.80.`,
            `${gr('Bring down 8')} to join the ${or('remainder')} 1 → we now have ${or('1')}8. ${gr('18 ÷ 4 = 4')} remainder ${or('2')}. Write ${gr('4')} in the quotient.`,
            `${gr('Bring down 0')} to join the ${or('remainder')} 2 → we now have ${or('2')}0. ${gr('20 ÷ 4 = 5')}. Write ${gr('5')} in the quotient. No remainder.`,
            `<strong>${re('Answer: Each person gets R61.45.')}</strong>`,
            `<strong>Check:</strong> ${re('61.45')} × 4 = ${re('245.80')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q14 Medium — divide by 100 ──────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 36.9 ÷ 100.',
          answer: '0.369',
          checkMode: 'auto',
          correctAnswer: '0.369',
          explanation: 'Dividing by 100 moves the decimal point 2 places to the left.\n36.9 → 3.69 → 0.369.\nAnswer: 0.369 ✓',
        },

        // ── Q15 Hard — sharing money word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato divides R184.50 equally among 6 people. How much does each person get?',
          answer: 'R30.75',
          checkMode: 'auto',
          correctAnswer: 'R30.75',
          correctAnswers: ['R30.75', '30.75', 'R30,75'],
          explanation: 'Divide R184.50 by 6:\n1 < 6 — take 18. 18 ÷ 6 = 3. 3 × 6 = 18. 18 − 18 = 0. Bring down 4 → 04.\n04 ÷ 6 = 0 remainder 4. Write 0. Keep the decimal point. Bring down 5 → 45.\n45 ÷ 6 = 7 remainder 3. 7 × 6 = 42. 45 − 42 = 3. Bring down 0 → 30.\n30 ÷ 6 = 5. 5 × 6 = 30. 30 − 30 = 0. No remainder.\nAnswer: R30.75. Check: 30.75 × 6 = 184.50 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide decimal fractions by a whole number by keeping the decimal point in position and how dividing by 10 100 and 1000 moves the decimal point to the left" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Division layout showing 8.46 divided by 3 equals 2.82 with division steps green remainder orange decimal point position blue and answer red colour coded alongside arrows showing decimal point moving left when dividing by 10 100 and 1000" />',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered decimal fractions.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of decimal fractions.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
