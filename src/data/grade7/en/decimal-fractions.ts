import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// decimal point   → blue    (#2563eb)
// carried digits  → purple  (#7c3aed)
// zeros added     → orange  (#ea580c)
// answer          → green   (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Decimal Fractions',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ALL OPERATIONS WITH DECIMALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'all-operations-with-decimals',
      title: 'All Operations with Decimals',
      icon: '·',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 7 we add, subtract, multiply and divide decimal fractions with confidence. To add or subtract we line up decimal points and add zeros where needed. To multiply we ignore the decimal point, multiply as whole numbers, then count total decimal places to place the point correctly. To divide we keep the decimal point in the same position when dividing by a whole number, or move it when dividing by powers of 10.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal point')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('carried digits')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('zeros added')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Adding and Subtracting ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Adding and Subtracting Decimals</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Line up the ${bl('decimal points')} vertically so that tenths are under tenths, hundredths under hundredths, and so on.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Add ${or('zeros')} at the end of shorter decimals so every number has the same number of decimal places.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Add or subtract column by column from right to left, carrying or borrowing ${pu('digits')} exactly as with whole numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Place the ${bl('decimal point')} in the ${gr('answer')} directly below the other decimal points.</p>` +
        `</div>` +

        `</div>` +

        // ── Multiplying ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multiplying Decimals</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Ignore the ${bl('decimal points')} completely and multiply the numbers as whole numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Count the <strong>total</strong> number of decimal places in both numbers combined.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Place the ${bl('decimal point')} in the ${gr('answer')} so there are exactly that many decimal places from the right.</p>` +
        `</div>` +

        `</div>` +

        // ── Dividing ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dividing Decimals</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Dividing by a whole number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Keep the ${bl('decimal point')} in the same position in the ${gr('answer')} as it is in the dividend. Divide as normal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Dividing by a power of 10</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Move the ${bl('decimal point')} one place to the left for each zero in the power of 10 (e.g. ÷ 100 moves it two places left).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always estimate first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before calculating, round each number to the nearest whole number and estimate the ${gr('answer')}. This helps you check that the ${bl('decimal point')} is in the right place.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 14.85 + 6.347.',
          answer: `14${bl('.')}${or('850')} + 6${bl('.')}347 = ${gr('21.197')}`,
          steps: [
            `Line up the ${bl('decimal points')} vertically: 14${bl('.')}85 and 6${bl('.')}347.`,
            `Add a ${or('zero')} to 14${bl('.')}85 to make 14${bl('.')}${or('850')} so both numbers have 3 decimal places.`,
            `Add: 14${bl('.')}${or('850')} + 6${bl('.')}347 = ${gr('21.197')}.`,
          ],
        },
        {
          question: 'Calculate 5.6 × 3.4.',
          answer: `5${bl('.')}6 × 3${bl('.')}4 = ${gr('19.04')}`,
          steps: [
            `Multiply ignoring the ${bl('decimal points')}: 56 × 34 = ${pu('1 904')}.`,
            `Count decimal places: 5${bl('.')}6 has 1 decimal place, 3${bl('.')}4 has 1 decimal place. Total = 1 + 1 = 2 decimal places.`,
            `Place the ${bl('decimal point')} 2 places from the right in ${pu('1 904')}: ${gr('19.04')}.`,
          ],
        },
        {
          question: 'Calculate 78.4 ÷ 8.',
          answer: `78${bl('.')}4 ÷ 8 = ${gr('9.8')}`,
          steps: [
            `Divide as normal, keeping the ${bl('decimal point')} in the same position in the ${gr('answer')}.`,
            `78 ÷ 8 = 9 remainder 6. Bring down 4 → 64. 64 ÷ 8 = 8.`,
            `Place the ${bl('decimal point')} in the ${gr('answer')} directly above the ${bl('decimal point')} in the dividend: ${gr('9.8')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — decimal addition ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 4.35 + 2.8.',
          answer: '7.15',
          checkMode: 'auto',
          correctAnswer: '7.15',
          explanation: 'Line up decimal points: 4.35 + 2.80 (add a zero so both have 2 decimal places).\n4.35 + 2.80 = 7.15 ✓',
        },

        // ── Q2 Easy — decimal subtraction ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 9.6 - 3.45.',
          answer: '6.15',
          checkMode: 'auto',
          correctAnswer: '6.15',
          explanation: 'Line up decimal points: 9.60 - 3.45 (add a zero so both have 2 decimal places).\n9.60 - 3.45 = 6.15 ✓',
        },

        // ── Q3 Medium — decimal multiplication ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 6.7 × 2.3.',
          answer: '15.41',
          checkMode: 'auto',
          correctAnswer: '15.41',
          explanation: 'Ignore decimal points: 67 × 23 = 1 541.\nCount decimal places: 6.7 has 1, 2.3 has 1. Total = 2.\nPlace decimal point 2 places from the right in 1 541: 15.41 ✓',
        },

        // ── Q4 Medium — decimal division by whole number ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 84.6 ÷ 6.',
          answer: '14.1',
          checkMode: 'auto',
          correctAnswer: '14.1',
          explanation: 'Divide, keeping the decimal point in position.\n84 ÷ 6 = 14. Bring down 6 → 6 ÷ 6 = 1.\nPlace decimal point directly above: 14.1. Check: 14.1 × 6 = 84.6 ✓',
        },

        // ── Q5 Hard — check and explain decimal multiplication ────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates 3.45 × 2 and gets 6.9. Check his answer and explain whether he is correct.',
          answer: 'Correct — ignore the decimal point: 345 × 2 = 690. Count decimal places: 3.45 has 2. Place decimal point 2 places from the right: 6.90 = 6.9. Sipho is correct.',
          checkMode: 'self',
        },

        // ── Q6 Hard — multi-step money word problem ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has R250.75. She spends R86.40 and then earns R34.65. How much money does she have now?',
          answer: 'R199.00',
          checkMode: 'auto',
          correctAnswer: 'R199.00',
          correctAnswers: ['R199.00', '199.00', 'R199', '199'],
          explanation: 'Step 1: R250.75 − R86.40 = R164.35\nStep 2: R164.35 + R34.65 = R199.00 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column layout showing decimal addition of 14.850 and 6.347 with decimal points aligned in blue and zeros added highlighted in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add subtract multiply and divide decimal fractions with colour coded decimal points carried digits and worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ROUNDING DECIMALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-decimals',
      title: 'Rounding Decimals',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">We round decimals to a required number of decimal places by looking at the digit immediately after the place we are rounding to. If that digit is 5 or more we round up. If it is 4 or less we round down. Rounding to 2 decimal places is common when dealing with money.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('digit being rounded')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('deciding digit')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rounded answer')}</span>` +
        `</div>` +

        // ── Rounding rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The rounding rule</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Deciding digit is 5 or more → round up</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The ${or('deciding digit')} is the digit immediately after the ${bl('digit being rounded')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">If ${or('deciding digit')} ≥ 5: add 1 to the ${bl('digit being rounded')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Deciding digit is 4 or less → round down</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The ${or('deciding digit')} is still the digit immediately after the ${bl('digit being rounded')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">If ${or('deciding digit')} ≤ 4: leave the ${bl('digit being rounded')} unchanged.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to round step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${bl('digit being rounded')} — the digit in the place you are rounding to.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Look at the ${or('deciding digit')} — the very next digit to the right.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Apply the rule and write the ${gr('rounded answer')}, dropping all digits after the rounded place.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rounding money</p>` +
        `<p style="margin:0;color:#1e3a8a;">When rounding to the nearest cent we always round to <strong>2 decimal places</strong>. The ${or('deciding digit')} is the third decimal digit (thousandths). Apply the same rule: 5 or more → round up; 4 or less → round down.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Round 7.6482 to 2 decimal places.',
          answer: `7.6${bl('4')}82 → ${gr('7.65')}`,
          steps: [
            `Identify the ${bl('digit being rounded')}: the second decimal digit is ${bl('4')} (hundredths).`,
            `Look at the ${or('deciding digit')}: the third decimal digit is ${or('8')}. Since ${or('8')} ≥ 5, round up.`,
            `Add 1 to the ${bl('4')}: it becomes 5. Drop all digits after. ${gr('Answer: 7.65')}.`,
          ],
        },
        {
          question: 'Round R45.567 to the nearest cent (2 decimal places).',
          answer: `R45.5${bl('6')}7 → ${gr('R45.57')}`,
          steps: [
            `Identify the ${bl('digit being rounded')}: the second decimal digit is ${bl('6')} (hundredths / cents).`,
            `Look at the ${or('deciding digit')}: the third decimal digit is ${or('7')}. Since ${or('7')} ≥ 5, round up.`,
            `Add 1 to the ${bl('6')}: it becomes 7. Drop all digits after. ${gr('Answer: R45.57')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — round to 2 decimal places ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Round 3.456 to 2 decimal places.',
          answer: '3.46',
          checkMode: 'auto',
          correctAnswer: '3.46',
          explanation: 'Digit being rounded: 5 (hundredths).\nDeciding digit: 6 (thousandths). Since 6 ≥ 5, round up.\n5 becomes 6. Answer: 3.46 ✓',
        },

        // ── Q8 Easy — round to 1 decimal place ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Round 8.234 to 1 decimal place.',
          answer: '8.2',
          checkMode: 'auto',
          correctAnswer: '8.2',
          explanation: 'Digit being rounded: 2 (tenths).\nDeciding digit: 3 (hundredths). Since 3 ≤ 4, round down.\n2 stays as 2. Answer: 8.2 ✓',
        },

        // ── Q9 Medium — round money to the nearest cent ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Round R67.895 to the nearest cent.',
          answer: 'R67.90',
          checkMode: 'auto',
          correctAnswer: 'R67.90',
          correctAnswers: ['R67.90', '67.90', 'R67.9', '67.9'],
          explanation: 'Rounding to 2 decimal places (nearest cent).\nDigit being rounded: 9 (hundredths).\nDeciding digit: 5 (thousandths). Since 5 ≥ 5, round up.\n9 + 1 = 10 — write 0, carry 1 to tenths: 8 + 1 = 9.\nAnswer: R67.90 ✓',
        },

        // ── Q10 Hard — check and explain rounding ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo rounds 12.345 to 2 decimal places and gets 12.35. Is he correct? Explain your reasoning.',
          answer: 'Yes — the digit being rounded is 4 (hundredths). The deciding digit is 5 (thousandths). Since 5 ≥ 5 we round up: 4 becomes 5, giving 12.35. Thabo is correct.',
          checkMode: 'self',
        },

        // ── Q11 Medium — divide by a power of 10 ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 15.8 ÷ 100.',
          answer: '0.158',
          checkMode: 'auto',
          correctAnswer: '0.158',
          explanation: 'Dividing by 100 moves the decimal point 2 places to the left.\n15.8 ÷ 100: move the decimal point 2 places left → 0.158 ✓',
        },

        // ── Q12 Hard — multiply then round to nearest cent ───────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle buys 3.5 kg of fruit at R12.80 per kg. How much does she pay, rounded to the nearest cent?',
          answer: 'R44.80',
          checkMode: 'auto',
          correctAnswer: 'R44.80',
          correctAnswers: ['R44.80', '44.80', 'R44.8', '44.8'],
          explanation: 'Multiply: 3.5 × R12.80.\nIgnore decimal points: 35 × 1 280 = 44 800.\nDecimal places: 3.5 has 1, 12.80 has 2. Total = 3.\nPlace decimal point 3 places from the right: 44.800 = R44.80.\nRounded to the nearest cent: R44.80 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing 7.6482 positioned between 7.64 and 7.65 with the deciding digit highlighted in orange and the rounded answer marked in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to round decimals to a given number of decimal places including rounding money to the nearest cent" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
