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

      diagramPlaceholder: 'Column chart comparing 3.450 and 3.452 digit by digit, with the thousandths digit — the first point of difference — highlighted in blue',
      diagramSvg: '<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="25" height="26" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><text x="27.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="46" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">.</text><rect x="52" y="15" width="25" height="26" fill="#f0fdf4" stroke="#0f1f3d" stroke-width="1.5"/><text x="64.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">4</text><rect x="77" y="15" width="25" height="26" fill="#fff7ed" stroke="#0f1f3d" stroke-width="1.5"/><text x="89.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">5</text><rect x="102" y="15" width="25" height="26" fill="#fef2f2" stroke="#2563eb" stroke-width="3"/><text x="114.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">0</text><rect x="15" y="48" width="25" height="26" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><text x="27.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="46" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">.</text><rect x="52" y="48" width="25" height="26" fill="#f0fdf4" stroke="#0f1f3d" stroke-width="1.5"/><text x="64.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">4</text><rect x="77" y="48" width="25" height="26" fill="#fff7ed" stroke="#0f1f3d" stroke-width="1.5"/><text x="89.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">5</text><rect x="102" y="48" width="25" height="26" fill="#fef2f2" stroke="#2563eb" stroke-width="3"/><text x="114.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">2</text><text x="100" y="90" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a"><tspan x="100">Thousandths: 0 &lt; 2,</tspan><tspan x="100" dy="14">so 3.452 &gt; 3.45</tspan></text></svg>',
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

      diagramPlaceholder: 'Column addition showing 3.450 + 2.368 = 5.818, with the carried digit from the hundredths column shown above the tenths column',
      diagramSvg: '<svg viewBox="0 0 210 140" xmlns="http://www.w3.org/2000/svg"><circle cx="64.5" cy="16" r="8" fill="#7c3aed"/><text x="64.5" y="20.5" font-weight="700" font-size="11" text-anchor="middle" fill="white">1</text><text x="27.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="52" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">.</text><text x="64.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="89.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">5</text><text x="114.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">0</text><text x="8" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">+</text><text x="27.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">2</text><text x="52" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">.</text><text x="64.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="89.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="114.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">8</text><line x1="10" y1="70" x2="130" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><text x="27.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">5</text><text x="52" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">.</text><text x="64.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">8</text><text x="89.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">1</text><text x="114.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">8</text><text x="105" y="118" font-size="11" text-anchor="middle" fill="#7c3aed">purple = carried digit</text><text x="105" y="132" font-size="11" text-anchor="middle" fill="#ea580c">orange = zero added</text></svg>',
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

      diagramPlaceholder: 'Diagram showing how counting 2 decimal places from the right in the product 2070 gives the correctly placed answer 20.7 for 3.45 × 6',
      diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><text x="110" y="18" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">345 × 6 = 2070</text><rect x="40" y="35" width="35" height="40" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="57.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#0f1f3d">2</text><rect x="75" y="35" width="35" height="40" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#0f1f3d">0</text><rect x="110" y="35" width="35" height="40" fill="#fef2f2" stroke="#2563eb" stroke-width="2.5"/><text x="127.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#dc2626">7</text><rect x="145" y="35" width="35" height="40" fill="#fef2f2" stroke="#2563eb" stroke-width="2.5"/><text x="162.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#dc2626">0</text><line x1="110" y1="28" x2="110" y2="82" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/><path d="M110 90 L110 98 L180 98 L180 90" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="112" font-weight="700" font-size="12" text-anchor="middle" fill="#ea580c">2 decimal places</text><text x="110" y="135" font-weight="700" font-size="14" text-anchor="middle" fill="#16a34a">Point goes here → 20.70 = 20.7</text></svg>',
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

      diagramPlaceholder: 'Long division bracket showing 8.46 divided by 3 = 2.82, with the decimal point kept in the same column in the quotient',
      diagramSvg: '<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg"><text x="50" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">2</text><text x="65" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#2563eb">.</text><text x="80" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">8</text><text x="95" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">2</text><line x1="40" y1="42" x2="112" y2="42" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="42" x2="40" y2="95" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">3</text><text x="50" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">8</text><text x="65" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#2563eb">.</text><text x="80" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">4</text><text x="95" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">6</text><line x1="65" y1="20" x2="65" y2="95" stroke="#2563eb" stroke-width="1" stroke-dasharray="2,2"/><text x="150" y="66" font-size="11" text-anchor="middle" fill="#2563eb">point stays</text><text x="150" y="79" font-size="11" text-anchor="middle" fill="#2563eb">in line</text><text x="100" y="115" font-weight="700" font-size="14" text-anchor="middle" fill="#dc2626">8.46 ÷ 3 = 2.82</text></svg>',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Block layout per set: 0-3 place value/expanded | 4-7 comparing/ordering |
  // 8-11 adding/subtracting | 12-15 multiplying | 16-19 dividing
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'What is the place value of the digit 8 in 5.284?', answer: 'hundredths', checkMode: 'auto', correctAnswer: 'hundredths', correctAnswers: ['hundredths'], explanation: 'In 5.284 the digits after the decimal point are 2 (tenths), 8 (hundredths), 4 (thousandths). The digit 8 is in the hundredths place.' },
        { difficulty: 'Easy', question: 'A recipe calls for 0.375 kg of butter. What is the value of the digit 5 in 0.375?', answer: '0.005', checkMode: 'auto', correctAnswer: '0.005', correctAnswers: ['0.005', '5/1000', '5/1 000'], explanation: 'The digit 5 is the third digit after the decimal point, so it is in the thousandths place. Its value is 5/1 000 = 0.005.' },
        { difficulty: 'Easy', question: 'Write 6.429 in expanded notation.', answer: '6 + 4/10 + 2/100 + 9/1 000\nor 6 + 0.4 + 0.02 + 0.009', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A runner\'s time is 14.637 seconds. What is the value of the digit 3 in 14.637?', answer: '0.03', checkMode: 'auto', correctAnswer: '0.03', correctAnswers: ['0.03', '3/100'], explanation: 'The digit 3 is the second digit after the decimal point, in the hundredths place. Its value is 3/100 = 0.03.' },
        { difficulty: 'Easy', question: 'Which is greater — 6.4 or 6.38?', answer: '6.4', checkMode: 'auto', correctAnswer: '6.4', correctAnswers: ['6.4'], explanation: 'Write both with the same decimal places: 6.40 and 6.38. Compare tenths: both have 4 — equal. Compare hundredths: 0 < 8, so 6.40 (which is 6.4) is greater than 6.38.' },
        { difficulty: 'Medium', question: 'Order these ribbon lengths from shortest to longest: 2.4 m, 2.045 m, 2.45 m, 2.405 m.', answer: '2.045 m, 2.4 m, 2.405 m, 2.45 m', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo says 0.6 is smaller than 0.45 because 6 tenths sounds like a small fraction while 45 hundredths sounds like a lot. Is he correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Write both with the same decimal places: 0.60 and 0.45. Compare tenths: 6 > 4, so 0.6 is greater than 0.45, not smaller. Thabo is incorrect.' },
        { difficulty: 'Medium', question: 'Zanele says 0.30 is greater than 0.3 because it has an extra digit. Is she correct? Explain.', answer: 'No — 0.30 and 0.3 are equal in value. Adding a trailing zero after the last decimal digit does not change the value, it is just a placeholder.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 4.65 + 3.28.', answer: '7.93', checkMode: 'auto', correctAnswer: '7.93', correctAnswers: ['7.93'], explanation: 'Line up decimal points.\nHundredths: 5 + 8 = 13 — write 3, carry 1.\nTenths: 6 + 2 + 1 (carried) = 9.\nUnits: 4 + 3 = 7.\nAnswer: 7.93 ✓' },
        { difficulty: 'Medium', question: 'Calculate 12.4 − 5.875.', answer: '6.525', checkMode: 'auto', correctAnswer: '6.525', correctAnswers: ['6.525'], explanation: 'Write 12.4 as 12.400 so both numbers have 3 decimal places.\nThousandths: 0 − 5 → borrow. Hundredths becomes 9, thousandths becomes 10. 10 − 5 = 5.\nHundredths: 9 − 7 = 2.\nTenths: 3 − 8 → borrow from units. Tenths becomes 13. 13 − 8 = 5. Units reduced to 11.\nUnits: 11 − 5 = 6.\nAnswer: 6.525 ✓' },
        { difficulty: 'Medium', question: 'Lindiwe jogs 5.4 km before breakfast and 3.75 km in the evening. Estimate her total distance first, then calculate the exact total.', answer: 'Estimate: 5 + 4 = 9 km. Exact: 5.4 + 3.75 = 9.15 km, close to the estimate.', checkMode: 'auto', correctAnswer: '9.15', correctAnswers: ['9.15', '9.15km', '9.15 km'], explanation: 'Estimate: 5 + 4 = 9 km.\nExact: write 5.4 as 5.40. Hundredths: 0 + 5 = 5. Tenths: 4 + 7 = 11 — write 1, carry 1. Units: 5 + 3 + 1 (carried) = 9.\nAnswer: 9.15 km, close to the estimate of 9 km ✓' },
        { difficulty: 'Medium', question: 'A shopper buys goods worth R12.50 and R18.75 and pays with a R50 note. How much change does she receive?', answer: 'R18.75', checkMode: 'auto', correctAnswer: 'R18.75', correctAnswers: ['R18.75', '18.75', 'R18,75'], explanation: 'Total spent: 12.50 + 18.75 = 31.25.\nChange: 50.00 − 31.25 = 18.75.\nAnswer: R18.75 ✓' },
        { difficulty: 'Medium', question: 'Sipho works out 6.4 + 2.35 by lining up the numbers like this and gets 6.75:\n6.4\n+2.35\n——\nWhat mistake did he make, and what is the correct answer?', answer: 'He did not line up the decimal points — he added the digits in the wrong columns. The correct answer is 8.75.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A tank holds 3.25 litres. Amahle adds 4.5 litres, then pours out 2.875 litres to water plants. How much liquid remains in the tank?', answer: '4.875', checkMode: 'auto', correctAnswer: '4.875', correctAnswers: ['4.875', '4.875L', '4.875 L', '4.875 litres', '4.875 liters'], explanation: '3.25 + 4.5 = 7.75. Then 7.75 − 2.875 = 4.875.\nAnswer: 4.875 litres ✓' },
        { difficulty: 'Easy', question: 'Calculate 3.15 × 10.', answer: '31.5', checkMode: 'auto', correctAnswer: '31.5', correctAnswers: ['31.5'], explanation: 'Multiplying by 10 moves the decimal point 1 place to the right.\n3.15 × 10 = 31.5 ✓' },
        { difficulty: 'Medium', question: 'Calculate 4.25 × 6.', answer: '25.5', checkMode: 'auto', correctAnswer: '25.5', correctAnswers: ['25.5'], explanation: 'Multiply ignoring the decimal point: 425 × 6 = 2 550.\nCount decimal places in the question: 4.25 has 2 decimal places.\nPlace the decimal point 2 places from the right in 2 550 → 25.50 = 25.5.\nAnswer: 25.5 ✓' },
        { difficulty: 'Medium', question: 'A market stall sells oranges at R6.75 per kg. What is the cost of 4 kg of oranges?', answer: 'R27', checkMode: 'auto', correctAnswer: 'R27', correctAnswers: ['R27', '27', 'R27.00'], explanation: 'Multiply ignoring the decimal point: 675 × 4 = 2 700.\nCount decimal places: 6.75 has 2 decimal places.\nPlace the decimal point 2 places from the right in 2 700 → 27.00 = R27.\nAnswer: R27 ✓' },
        { difficulty: 'Medium', question: 'Explain in your own words why multiplying 3.6 by 7 gives an answer with exactly 1 decimal place.', answer: '3.6 has 1 decimal place, and when multiplying a decimal by a whole number the answer has the same number of decimal places as the decimal number in the question, because the whole number does not add any extra decimal places.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Calculate 9.6 ÷ 4.', answer: '2.4', checkMode: 'auto', correctAnswer: '2.4', correctAnswers: ['2.4'], explanation: '9 ÷ 4 = 2 remainder 1. Bring down 6 to join the remainder → 16. 16 ÷ 4 = 4. Keep the decimal point in the same position.\nAnswer: 2.4 ✓' },
        { difficulty: 'Hard', question: 'Lerato shares R126 equally among 8 friends, then each friend spends R2.50 on a snack. How much does each friend have left?', answer: '13.25', checkMode: 'auto', correctAnswer: '13.25', correctAnswers: ['R13.25', '13.25', 'R13,25'], explanation: '126 ÷ 8 = 15.75. Each friend receives R15.75.\n15.75 − 2.50 = 13.25.\nAnswer: R13.25 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered decimal fractions.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'In the distance 8.417 km, which digit is in the thousandths place?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Counting from the decimal point: 4 (tenths), 1 (hundredths), 7 (thousandths). The digit 7 is in the thousandths place.' },
        { difficulty: 'Easy', question: 'What is the value of the digit 9 in 3.194?', answer: '0.09', checkMode: 'auto', correctAnswer: '0.09', correctAnswers: ['0.09', '9/100'], explanation: 'The digit 9 is the second digit after the decimal point, in the hundredths place. Its value is 9/100 = 0.09.' },
        { difficulty: 'Easy', question: 'A piece of wire is 8.026 m long. Write 8.026 in expanded notation.', answer: '8 + 0/10 + 2/100 + 6/1 000\nor 8 + 0.02 + 0.006', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Write the decimal fraction that is made up of 5 units, 0 tenths, 7 hundredths and 3 thousandths.', answer: '5.073', checkMode: 'auto', correctAnswer: '5.073', correctAnswers: ['5.073'], explanation: 'Place each digit in its column: 5 units, 0 tenths, 7 hundredths, 3 thousandths → 5.073.' },
        { difficulty: 'Medium', question: 'Kagiso says the two 4s in the number 6.454 have exactly the same value because they are both the digit 4. Is he correct? Explain.', answer: 'No — the first 4 is in the tenths place with value 0.4, and the second 4 is in the thousandths place with value 0.004. They have different values because they are in different place value positions.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Two athletes ran 100 m in 12.8 seconds and 12.79 seconds. Which time is faster (smaller)?', answer: '12.79 seconds', checkMode: 'auto', correctAnswer: '12.79', correctAnswers: ['12.79', '12.79 seconds', '12.79s'], explanation: 'Write both with the same decimal places: 12.80 and 12.79. Compare hundredths: 0 < 9 is false since we compare left to right — compare tenths first: both have 8 — equal. Compare hundredths: 0 < 9, so 12.79 < 12.80. The faster time is 12.79 seconds.' },
        { difficulty: 'Medium', question: 'Order these masses from lightest to heaviest: 0.6 kg, 0.55 kg, 0.605 kg, 0.65 kg.', answer: '0.55 kg, 0.6 kg, 0.605 kg, 0.65 kg', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner compares 0.9 and 0.89 by saying "0.89 must be bigger because 89 is bigger than 9." Is this correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Compare place value one digit at a time, not as whole numbers. Write both with 2 decimal places: 0.90 and 0.89. Compare tenths: 9 > 8, so 0.9 > 0.89. The learner is incorrect.' },
        { difficulty: 'Easy', question: 'Calculate 5.6 + 2.375.', answer: '7.975', checkMode: 'auto', correctAnswer: '7.975', correctAnswers: ['7.975'], explanation: 'Write 5.6 as 5.600 so both numbers have 3 decimal places.\nThousandths: 0 + 5 = 5.\nHundredths: 0 + 7 = 7.\nTenths: 6 + 3 = 9.\nUnits: 5 + 2 = 7.\nAnswer: 7.975 ✓' },
        { difficulty: 'Medium', question: 'Calculate 9.3 − 4.625.', answer: '4.675', checkMode: 'auto', correctAnswer: '4.675', correctAnswers: ['4.675'], explanation: 'Write 9.3 as 9.300 so both numbers have 3 decimal places.\nThousandths: 0 − 5 → borrow. Hundredths becomes 9, thousandths becomes 10. 10 − 5 = 5.\nHundredths: 9 − 2 = 7.\nTenths: 2 − 6 → borrow from units. Tenths becomes 12. 12 − 6 = 6. Units reduced to 8.\nUnits: 8 − 4 = 4.\nAnswer: 4.675 ✓' },
        { difficulty: 'Medium', question: 'A baker uses 2.75 kg of flour, 3.125 kg of sugar and 1.6 kg of butter for a big order. Estimate the total mass first, then calculate the exact total.', answer: 'Estimate: 3 + 3 + 2 = 8 kg. Exact: 2.75 + 3.125 + 1.6 = 7.475 kg, close to the estimate.', checkMode: 'auto', correctAnswer: '7.475', correctAnswers: ['7.475', '7.475kg', '7.475 kg'], explanation: 'Estimate: 3 + 3 + 2 = 8 kg.\nExact: write all with 3 decimal places: 2.750 + 3.125 + 1.600.\nThousandths: 0+5+0=5. Hundredths: 5+2+0=7. Tenths: 7+1+6=14 → write 4, carry 1. Units: 2+3+1+1(carried)=7.\nAnswer: 7.475 kg, close to the estimate of 8 kg ✓' },
        { difficulty: 'Medium', question: 'A family buys airtime worth R15.90 and a loaf of bread for R22.85. How much do they spend in total?', answer: 'R38.75', checkMode: 'auto', correctAnswer: 'R38.75', correctAnswers: ['R38.75', '38.75', 'R38,75'], explanation: '15.90 + 22.85 = 38.75.\nAnswer: R38.75 ✓' },
        { difficulty: 'Medium', question: 'Naledi calculates 8.3 − 2.45 by writing:\n8.3\n−2.45\n——\nand lining up the last digits on the right instead of the decimal points, getting an incorrect answer. What should she have done, and what is the correct answer?', answer: 'She should line up the decimal points, not the last digits, by writing 8.3 as 8.30. The correct answer is 5.85.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A water bottle contains 1.5 litres. Bongani drinks 0.375 litres in the morning and 0.6 litres in the afternoon. How much water is left in the bottle?', answer: '0.525', checkMode: 'auto', correctAnswer: '0.525', correctAnswers: ['0.525', '0.525L', '0.525 L', '0.525 litres', '0.525 liters'], explanation: 'Total drunk: 0.375 + 0.6 = 0.975. Remaining: 1.5 − 0.975 = 0.525.\nAnswer: 0.525 litres ✓' },
        { difficulty: 'Easy', question: 'Calculate 2.4 × 100.', answer: '240', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240'], explanation: 'Multiplying by 100 moves the decimal point 2 places to the right.\n2.4 × 100 = 240 ✓' },
        { difficulty: 'Medium', question: 'Calculate 6.75 × 4.', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Multiply ignoring the decimal point: 675 × 4 = 2 700.\nCount decimal places: 6.75 has 2 decimal places.\nPlace the decimal point 2 places from the right in 2 700 → 27.00 = 27.\nAnswer: 27 ✓' },
        { difficulty: 'Medium', question: 'A stationery shop sells pens at R12.50 each. What is the cost of 8 pens?', answer: 'R100', checkMode: 'auto', correctAnswer: 'R100', correctAnswers: ['R100', '100', 'R100.00'], explanation: 'Multiply ignoring the decimal point: 1 250 × 8 = 10 000.\nCount decimal places: 12.50 has 2 decimal places.\nPlace the decimal point 2 places from the right in 10 000 → 100.00 = R100.\nAnswer: R100 ✓' },
        { difficulty: 'Hard', question: 'Amahle multiplies 9.2 × 5 and gets 4.6. Is she correct? Show your working and explain any mistake.', answer: 'No, she is incorrect. Multiply ignoring the decimal point: 92 × 5 = 460. 9.2 has 1 decimal place, so place the decimal point 1 place from the right in 460 → 46.0 = 46. The correct answer is 46. Amahle likely divided instead of multiplied.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Calculate 45.6 ÷ 100.', answer: '0.456', checkMode: 'auto', correctAnswer: '0.456', correctAnswers: ['0.456'], explanation: 'Dividing by 100 moves the decimal point 2 places to the left.\n45.6 → 4.56 → 0.456.\nAnswer: 0.456 ✓' },
        { difficulty: 'Hard', question: 'A charity shares R184.80 equally among 8 volunteers for travel costs. Each volunteer then spends R2.50 on lunch. How much does each volunteer have left?', answer: '20.60', checkMode: 'auto', correctAnswer: '20.60', correctAnswers: ['R20.60', '20.60', 'R20,60', '20.6', 'R20.6'], explanation: '184.80 ÷ 8 = 23.10. Each volunteer receives R23.10.\n23.10 − 2.50 = 20.60.\nAnswer: R20.60 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with decimal fractions in real-world contexts.' },
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
        { difficulty: 'Easy', question: 'A parcel weighs 7.936 kg. Which digit is in the tenths place?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'The digit immediately after the decimal point is in the tenths place. In 7.936 that digit is 9.' },
        { difficulty: 'Easy', question: 'What is the value of the digit 2 in 0.128?', answer: '0.02', checkMode: 'auto', correctAnswer: '0.02', correctAnswers: ['0.02', '2/100'], explanation: 'The digit 2 is the second digit after the decimal point, in the hundredths place. Its value is 2/100 = 0.02.' },
        { difficulty: 'Easy', question: 'A road sign shows a distance of 25.308 km. Write 25.308 in expanded notation.', answer: '20 + 5 + 3/10 + 0/100 + 8/1 000\nor 20 + 5 + 0.3 + 0.008', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Write the decimal fraction made up of 12 units, 6 tenths, 0 hundredths and 4 thousandths.', answer: '12.604', checkMode: 'auto', correctAnswer: '12.604', correctAnswers: ['12.604'], explanation: 'Place each digit in its column: 12 units, 6 tenths, 0 hundredths, 4 thousandths → 12.604.' },
        { difficulty: 'Medium', question: 'A learner says that in 4.044 the two 4s must have the same value because "the number reads the same both times." Is this correct? Explain.', answer: 'No — the first 4 is in the units place with value 4, and the third 4 is in the thousandths place with value 0.004. Even though the digit looks the same, its value depends entirely on its place value position.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'A shop sells cooking oil in two sizes: 1.75 litres and 1.705 litres. Which bottle holds more oil?', answer: '1.75 litres', checkMode: 'auto', correctAnswer: '1.75', correctAnswers: ['1.75', '1.75 litres', '1.75L'], explanation: 'Write both with the same decimal places: 1.750 and 1.705. Compare hundredths: 5 > 0, so 1.75 > 1.705. The 1.75 litre bottle holds more.' },
        { difficulty: 'Medium', question: 'Order these race times from fastest to slowest: 15.3 s, 15.09 s, 15.36 s, 15.093 s.', answer: '15.09 s, 15.093 s, 15.3 s, 15.36 s', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner claims 0.05 is greater than 0.2 because 0.05 has more decimal places, so it looks like a "more precise, bigger" number. Is this correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The number of decimal places does not tell you the size. Write both with 2 decimal places: 0.05 and 0.20. Compare tenths: 0 < 2, so 0.05 < 0.2. The learner is incorrect.' },
        { difficulty: 'Easy', question: 'Calculate 6.8 + 3.45.', answer: '10.25', checkMode: 'auto', correctAnswer: '10.25', correctAnswers: ['10.25'], explanation: 'Write 6.8 as 6.80 so both numbers have 2 decimal places.\nHundredths: 0 + 5 = 5.\nTenths: 8 + 4 = 12 — write 2, carry 1.\nUnits: 6 + 3 + 1 (carried) = 10.\nAnswer: 10.25 ✓' },
        { difficulty: 'Medium', question: 'Calculate 20.5 − 13.275.', answer: '7.225', checkMode: 'auto', correctAnswer: '7.225', correctAnswers: ['7.225'], explanation: 'Write 20.5 as 20.500 so both numbers have 3 decimal places.\nThousandths: 0 − 5 → borrow. Hundredths becomes 9, thousandths becomes 10. 10 − 5 = 5.\nHundredths: 9 − 7 = 2.\nTenths: 4 − 2 = 2 (tenths reduced to 4 after the first borrow).\nUnits: 19 − 13 = 7 (units reduced to 19 after borrowing for the tenths column).\nAnswer: 7.225 ✓' },
        { difficulty: 'Medium', question: 'A hiking club walks 9.5 km in the morning and 14.25 km in the afternoon on a 40 km sponsored trail. Estimate the distance left first, then calculate the exact distance left.', answer: 'Estimate: 40 − (10 + 14) = 16 km. Exact: 40 − (9.5 + 14.25) = 16.25 km, close to the estimate.', checkMode: 'auto', correctAnswer: '16.25', correctAnswers: ['16.25', '16.25km', '16.25 km'], explanation: 'Estimate: 9.5 + 14.25 ≈ 10 + 14 = 24, so 40 − 24 = 16 km.\nExact: 9.5 + 14.25 = 23.75. Then 40 − 23.75 = 16.25.\nAnswer: 16.25 km, close to the estimate of 16 km ✓' },
        { difficulty: 'Medium', question: 'A gardener has 2.8 kg of seeds. She buys another 5.375 kg, then uses 3.6 kg for planting. How many kilograms of seeds does she have left?', answer: '4.575', checkMode: 'auto', correctAnswer: '4.575', correctAnswers: ['4.575', '4.575kg', '4.575 kg'], explanation: '2.8 + 5.375 = 8.175. Then 8.175 − 3.6 = 4.575.\nAnswer: 4.575 kg ✓' },
        { difficulty: 'Hard', question: 'Kagiso adds 0.5 + 0.75 + 0.25 by lining the numbers up with their rightmost digits matching (not the decimal points) and gets an answer of 0.6. What error did he make, and what is the correct total?', answer: 'He lined up the last digits instead of the decimal points, which put digits in the wrong place value columns. The correct total is 1.5.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 0.85 × 1 000.', answer: '850', checkMode: 'auto', correctAnswer: '850', correctAnswers: ['850'], explanation: 'Multiplying by 1 000 moves the decimal point 3 places to the right.\n0.85 × 1 000 = 850 ✓' },
        { difficulty: 'Medium', question: 'Calculate 12.5 × 8.', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: 'Multiply ignoring the decimal point: 125 × 8 = 1 000.\nCount decimal places: 12.5 has 1 decimal place.\nPlace the decimal point 1 place from the right in 1 000 → 100.0 = 100.\nAnswer: 100 ✓' },
        { difficulty: 'Medium', question: 'A fruit seller sells watermelons at R15.50 each. What is the cost of 6 watermelons?', answer: 'R93', checkMode: 'auto', correctAnswer: 'R93', correctAnswers: ['R93', '93', 'R93.00'], explanation: 'Multiply ignoring the decimal point: 1 550 × 6 = 9 300.\nCount decimal places: 15.50 has 2 decimal places.\nPlace the decimal point 2 places from the right in 9 300 → 93.00 = R93.\nAnswer: R93 ✓' },
        { difficulty: 'Medium', question: 'Explain why, when you multiply 4.125 by 4, you must count 3 decimal places in the answer even though 4 is a whole number.', answer: 'Only the decimal number in the question determines how many decimal places the answer has — 4.125 has 3 decimal places, and multiplying by a whole number does not add or remove any decimal places, so the answer must also have 3 decimal places (16.500 = 16.5).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Calculate 78.3 ÷ 10.', answer: '7.83', checkMode: 'auto', correctAnswer: '7.83', correctAnswers: ['7.83'], explanation: 'Dividing by 10 moves the decimal point 1 place to the left.\n78.3 → 7.83.\nAnswer: 7.83 ✓' },
        { difficulty: 'Hard', question: 'A school divides 15.75 kg of trail mix equally among 5 hiking groups. Check your answer by multiplying it back by 5 — does it equal 15.75 kg?', answer: '3.15 kg per group. Check: 3.15 × 5 = 15.75 kg, which matches, so the answer is correct.', checkMode: 'auto', correctAnswer: '3.15', correctAnswers: ['3.15', '3.15kg', '3.15 kg'], explanation: '15.75 ÷ 5 = 3.15. Check by multiplying: 3.15 × 5 = 15.75, which matches the original amount, confirming the division is correct.' },
        { difficulty: 'Hard', question: 'A learner calculates 4.5 ÷ 9 and gets 5, then calculates 45 ÷ 9 and also gets 5. Only one of these can be correct. Which calculation is actually equal to 5, and what is the correct answer to the other one?', answer: '45 ÷ 9 = 5 is correct. 4.5 ÷ 9 = 0.5, which is 10 times smaller because 4.5 is 10 times smaller than 45.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply decimal fractions confidently to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
