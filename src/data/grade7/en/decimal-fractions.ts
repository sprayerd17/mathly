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

      diagramPlaceholder: 'Column layout showing decimal addition of 14.850 and 6.347 with decimal points aligned in blue and zeros added highlighted in orange',
      diagramSvg: '<svg viewBox="0 0 180 145" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="12" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="27" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">1</text><rect x="41" y="12" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="53" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><rect x="67" y="12" width="14" height="26" fill="white" stroke="#2563eb" stroke-width="2.5"/><text x="74" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">.</text><rect x="83" y="12" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">8</text><rect x="109" y="12" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="121" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">5</text><rect x="135" y="12" width="24" height="26" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><text x="147" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">0</text><text x="25" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">+</text><rect x="41" y="42" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="53" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><rect x="67" y="42" width="14" height="26" fill="white" stroke="#2563eb" stroke-width="2.5"/><text x="74" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">.</text><rect x="83" y="42" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><rect x="109" y="42" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="121" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><rect x="135" y="42" width="24" height="26" fill="white" stroke="#0f1f3d" stroke-width="1.5"/><text x="147" y="60" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">7</text><line x1="13" y1="72" x2="161" y2="72" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="76" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="27" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">2</text><rect x="41" y="76" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="53" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">1</text><rect x="67" y="76" width="14" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="74" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">.</text><rect x="83" y="76" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="95" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">1</text><rect x="109" y="76" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="121" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">9</text><rect x="135" y="76" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="147" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">7</text><text x="90" y="113" font-weight="700" font-size="11" text-anchor="middle" fill="#374151"><tspan x="90" dy="0">Decimal points aligned;</tspan><tspan x="90" dy="12">zero added to</tspan><tspan x="90" dy="12">line up places</tspan></text></svg>',

      videoPlaceholder:
        'Short video showing how to add subtract multiply and divide decimal fractions with colour coded decimal points carried digits and worked examples',
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

      diagramPlaceholder: 'Number line showing 7.6482 positioned between 7.64 and 7.65 with the deciding digit highlighted in orange and the rounded answer marked in green',
      diagramSvg: '<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="60" x2="200" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="53" x2="20" y2="67" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="55" x2="110" y2="65" stroke="#9ca3af" stroke-width="1.5"/><line x1="200" y1="53" x2="200" y2="67" stroke="#16a34a" stroke-width="2.5"/><text x="20" y="88" font-weight="700" font-size="13" text-anchor="middle" fill="#0f1f3d">7.64</text><text x="110" y="88" font-size="10" text-anchor="middle" fill="#9ca3af">7.645 (midpoint)</text><text x="200" y="88" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">7.65</text><circle cx="168" cy="60" r="5" fill="#ea580c"/><text x="168" y="38" font-weight="700" font-size="12" text-anchor="middle" fill="#ea580c">7.6482</text><text x="168" y="24" font-size="10" text-anchor="middle" fill="#ea580c">deciding digit: 8 &#8805; 5</text><circle cx="200" cy="60" r="5" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="140" y="112" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">7.6482 rounds up to 7.65</text></svg>',

      videoPlaceholder:
        'Short video showing how to round decimals to a given number of decimal places including rounding money to the nearest cent',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered decimal fractions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Addition & subtraction | 5-8 Multiplication | 9-11 Division
    // | 12-15 Converting decimals/fractions/percentages | 16-17 Rounding
    // | 18-20 Word problems, error-spotting & multi-step reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Addition & subtraction of decimals (1-4)
        { difficulty: 'Easy', question: 'Calculate 8.45 + 3.72.', answer: '12.17', checkMode: 'auto', correctAnswer: '12.17', explanation: 'Line up decimal points: 8.45 + 3.72.\n8.45 + 3.72 = 12.17 ✓' },
        { difficulty: 'Easy', question: 'Calculate 12.6 - 4.85.', answer: '7.75', checkMode: 'auto', correctAnswer: '7.75', explanation: 'Line up decimal points: 12.60 - 4.85 (add a zero so both have 2 decimal places).\n12.60 - 4.85 = 7.75 ✓' },
        { difficulty: 'Easy-Medium', question: 'A plank of wood is 23.75 m long. Another plank is 8.4 m long. What is the total length if the two planks are joined end to end?', answer: '32.15 m', checkMode: 'auto', correctAnswer: '32.15', correctAnswers: ['32.15', '32.15m', '32.15 m'], explanation: 'Line up decimal points: 23.75 + 8.40 (add a zero so both have 2 decimal places).\n23.75 + 8.40 = 32.15 m ✓' },
        { difficulty: 'Medium', question: 'Calculate 15.3 - 2.678.', answer: '12.622', checkMode: 'auto', correctAnswer: '12.622', explanation: 'Line up decimal points: 15.300 - 2.678 (add zeros so both have 3 decimal places).\n15.300 - 2.678 = 12.622 ✓' },

        // Block 2 — Multiplication of decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 4.6 × 3.2.', answer: '14.72', checkMode: 'auto', correctAnswer: '14.72', explanation: 'Ignore decimal points: 46 × 32 = 1 472.\nCount decimal places: 4.6 has 1, 3.2 has 1. Total = 2.\nPlace decimal point 2 places from the right in 1 472: 14.72 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.7 × 0.8.', answer: '0.56', checkMode: 'auto', correctAnswer: '0.56', explanation: 'Ignore decimal points: 7 × 8 = 56.\nCount decimal places: 0.7 has 1, 0.8 has 1. Total = 2.\nPlace decimal point 2 places from the right in 56: 0.56 ✓' },
        { difficulty: 'Easy-Medium', question: 'A ribbon costs R12.50 per metre. What is the cost of 4 metres of ribbon?', answer: 'R50.00', checkMode: 'auto', correctAnswer: 'R50.00', correctAnswers: ['R50.00', '50.00', 'R50', '50'], explanation: 'Multiply: R12.50 × 4.\nIgnore the decimal point: 1 250 × 4 = 5 000.\nDecimal places: 12.50 has 2. Place decimal point 2 places from the right: 50.00 = R50.00 ✓' },
        { difficulty: 'Medium', question: 'Calculate 2.34 × 1.5.', answer: '3.51', checkMode: 'auto', correctAnswer: '3.51', explanation: 'Ignore decimal points: 234 × 15 = 3 510.\nCount decimal places: 2.34 has 2, 1.5 has 1. Total = 3.\nPlace decimal point 3 places from the right in 3 510: 3.510 = 3.51 ✓' },

        // Block 3 — Division of decimals (9-11)
        { difficulty: 'Medium', question: 'Calculate 96.3 ÷ 3.', answer: '32.1', checkMode: 'auto', correctAnswer: '32.1', explanation: 'Divide, keeping the decimal point in position.\n96 ÷ 3 = 32. Bring down 3 → 3 ÷ 3 = 1.\nAnswer: 32.1. Check: 32.1 × 3 = 96.3 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.72 ÷ 8.', answer: '0.09', checkMode: 'auto', correctAnswer: '0.09', explanation: 'Divide, keeping the decimal point in position.\n0.72 ÷ 8: 72 ÷ 8 = 9, and 0.72 has 2 decimal places, so the answer has 2 decimal places.\nAnswer: 0.09. Check: 0.09 × 8 = 0.72 ✓' },
        { difficulty: 'Medium', question: 'Calculate 6.4 ÷ 100.', answer: '0.064', checkMode: 'auto', correctAnswer: '0.064', explanation: 'Dividing by 100 moves the decimal point 2 places to the left.\n6.4 ÷ 100: move the decimal point 2 places left → 0.064 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (12-15)
        { difficulty: 'Medium', question: 'Write 0.75 as a fraction in simplest form and as a percentage.', answer: '3/4 and 75%', checkMode: 'auto', correctAnswer: '3/475%', correctAnswers: ['3/475%', '3/4,75%', '3/4 75%'], explanation: '0.75 = 75/100. Simplify by dividing top and bottom by 25: 75/100 = 3/4.\nAs a percentage, multiply by 100: 0.75 × 100 = 75% ✓' },
        { difficulty: 'Medium', question: 'Write 3/5 as a decimal and as a percentage.', answer: '0.6 and 60%', checkMode: 'auto', correctAnswer: '0.660%', correctAnswers: ['0.660%', '0.6,60%', '0.6 60%'], explanation: 'Convert to tenths: 3/5 = 6/10 = 0.6.\nAs a percentage, multiply by 100: 0.6 × 100 = 60% ✓' },
        { difficulty: 'Medium', question: 'Write 42% as a decimal and as a fraction in simplest form.', answer: '0.42 and 21/50', checkMode: 'auto', correctAnswer: '0.4221/50', correctAnswers: ['0.4221/50', '0.42,21/50', '0.42 21/50'], explanation: 'To write a percentage as a decimal, divide by 100: 42% = 0.42.\nAs a fraction: 42/100. Simplify by dividing top and bottom by 2: 42/100 = 21/50 ✓' },
        { difficulty: 'Medium', question: 'Order these decimals from smallest to biggest: 0.6, 0.09, 0.45, 0.3', answer: '0.09, 0.3, 0.45, 0.6', checkMode: 'auto', correctAnswer: '0.09,0.3,0.45,0.6', correctAnswers: ['0.09,0.3,0.45,0.6', '0.09, 0.3, 0.45, 0.6'], explanation: 'Compare tenths first: 0.09 has 0 tenths (smallest). Then 0.3 (3 tenths), 0.45 (4 tenths), 0.6 (6 tenths).\nOrder: 0.09, 0.3, 0.45, 0.6 ✓' },

        // Block 5 — Rounding to a given number of decimal places (16-17)
        { difficulty: 'Medium', question: 'Round 5.678 to 2 decimal places.', answer: '5.68', checkMode: 'auto', correctAnswer: '5.68', explanation: 'Digit being rounded: 7 (hundredths).\nDeciding digit: 8 (thousandths). Since 8 ≥ 5, round up.\n7 becomes 8. Answer: 5.68 ✓' },
        { difficulty: 'Medium-Hard', question: 'Round 12.045 to 2 decimal places.', answer: '12.05', checkMode: 'auto', correctAnswer: '12.05', explanation: 'Digit being rounded: 4 (hundredths).\nDeciding digit: 5 (thousandths). Since 5 ≥ 5, round up.\n4 becomes 5. Answer: 12.05 ✓' },

        // Block 6 — Word problems, error-spotting & multi-step reasoning (18-20)
        { difficulty: 'Hard', question: 'Thabo buys 2.5 kg of apples at R18.60 per kg and 1.2 kg of bananas at R14.50 per kg. What is the total cost of the fruit?', answer: 'R63.90', checkMode: 'auto', correctAnswer: 'R63.90', correctAnswers: ['R63.90', '63.90', 'R63.9', '63.9'], explanation: 'Apples: 2.5 × R18.60 = R46.50.\nBananas: 1.2 × R14.50 = R17.40.\nTotal: R46.50 + R17.40 = R63.90 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 4.2 × 3 and writes the answer as 1.26. Explain the mistake and give the correct answer.', answer: 'The student placed the decimal point incorrectly. Ignoring the decimal point, 42 × 3 = 126. Since 4.2 has 1 decimal place and 3 has 0 decimal places, the total is 1 decimal place, so the decimal point goes 1 place from the right: 12.6, not 1.26.', checkMode: 'self', explanation: '42 × 3 = 126. Total decimal places = 1. Correct answer: 12.6.' },
        { difficulty: 'Hard', question: 'Naledi earns R450.80 doing weekend jobs. She spends a quarter of it on a gift and saves the rest. How much does she save?', answer: 'R338.10', checkMode: 'auto', correctAnswer: 'R338.10', correctAnswers: ['R338.10', '338.10', 'R338.1', '338.1'], explanation: 'A quarter of R450.80: R450.80 ÷ 4 = R112.70.\nAmount saved: R450.80 − R112.70 = R338.10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered all operations with decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the decimal point rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Addition & subtraction of decimals (1-4)
        { difficulty: 'Easy', question: 'Calculate 6.28 + 5.9.', answer: '12.18', checkMode: 'auto', correctAnswer: '12.18', explanation: 'Line up decimal points: 6.28 + 5.90 (add a zero so both have 2 decimal places).\n6.28 + 5.90 = 12.18 ✓' },
        { difficulty: 'Easy', question: 'Calculate 18.4 - 6.75.', answer: '11.65', checkMode: 'auto', correctAnswer: '11.65', explanation: 'Line up decimal points: 18.40 - 6.75 (add a zero so both have 2 decimal places).\n18.40 - 6.75 = 11.65 ✓' },
        { difficulty: 'Easy-Medium', question: 'A hiking trail has two sections: one is 14.6 km long and the other is 9.35 km long. What is the total length of the trail?', answer: '23.95 km', checkMode: 'auto', correctAnswer: '23.95', correctAnswers: ['23.95', '23.95km', '23.95 km'], explanation: 'Line up decimal points: 14.60 + 9.35 (add a zero so both have 2 decimal places).\n14.60 + 9.35 = 23.95 km ✓' },
        { difficulty: 'Medium', question: 'Calculate 20.5 - 8.436.', answer: '12.064', checkMode: 'auto', correctAnswer: '12.064', explanation: 'Line up decimal points: 20.500 - 8.436 (add zeros so both have 3 decimal places).\n20.500 - 8.436 = 12.064 ✓' },

        // Block 2 — Multiplication of decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 3.8 × 2.6.', answer: '9.88', checkMode: 'auto', correctAnswer: '9.88', explanation: 'Ignore decimal points: 38 × 26 = 988.\nCount decimal places: 3.8 has 1, 2.6 has 1. Total = 2.\nPlace decimal point 2 places from the right in 988: 9.88 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.6 × 0.9.', answer: '0.54', checkMode: 'auto', correctAnswer: '0.54', explanation: 'Ignore decimal points: 6 × 9 = 54.\nCount decimal places: 0.6 has 1, 0.9 has 1. Total = 2.\nPlace decimal point 2 places from the right in 54: 0.54 ✓' },
        { difficulty: 'Easy-Medium', question: 'A notebook costs R15.50. What is the cost of 3 notebooks?', answer: 'R46.50', checkMode: 'auto', correctAnswer: 'R46.50', correctAnswers: ['R46.50', '46.50', 'R46.5', '46.5'], explanation: 'Multiply: R15.50 × 3.\nIgnore the decimal point: 1 550 × 3 = 4 650.\nDecimal places: 15.50 has 2. Place decimal point 2 places from the right: 46.50 = R46.50 ✓' },
        { difficulty: 'Medium', question: 'Calculate 4.12 × 2.5.', answer: '10.3', checkMode: 'auto', correctAnswer: '10.3', correctAnswers: ['10.3', '10.30'], explanation: 'Ignore decimal points: 412 × 25 = 10 300.\nCount decimal places: 4.12 has 2, 2.5 has 1. Total = 3.\nPlace decimal point 3 places from the right in 10 300: 10.300 = 10.3 ✓' },

        // Block 3 — Division of decimals (9-11)
        { difficulty: 'Medium', question: 'Calculate 84.5 ÷ 5.', answer: '16.9', checkMode: 'auto', correctAnswer: '16.9', explanation: 'Divide, keeping the decimal point in position.\n84 ÷ 5 = 16 remainder 4. Bring down 5 → 45 ÷ 5 = 9.\nAnswer: 16.9. Check: 16.9 × 5 = 84.5 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.64 ÷ 8.', answer: '0.08', checkMode: 'auto', correctAnswer: '0.08', explanation: 'Divide, keeping the decimal point in position.\n0.64 ÷ 8: 64 ÷ 8 = 8, and 0.64 has 2 decimal places, so the answer has 2 decimal places.\nAnswer: 0.08. Check: 0.08 × 8 = 0.64 ✓' },
        { difficulty: 'Medium', question: 'Calculate 8.3 ÷ 1 000.', answer: '0.0083', checkMode: 'auto', correctAnswer: '0.0083', explanation: 'Dividing by 1 000 moves the decimal point 3 places to the left.\n8.3 ÷ 1 000: move the decimal point 3 places left → 0.0083 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (12-15)
        { difficulty: 'Medium', question: 'Write 0.25 as a fraction in simplest form and as a percentage.', answer: '1/4 and 25%', checkMode: 'auto', correctAnswer: '1/425%', correctAnswers: ['1/425%', '1/4,25%', '1/4 25%'], explanation: '0.25 = 25/100. Simplify by dividing top and bottom by 25: 25/100 = 1/4.\nAs a percentage, multiply by 100: 0.25 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'Write 7/10 as a decimal and as a percentage.', answer: '0.7 and 70%', checkMode: 'auto', correctAnswer: '0.770%', correctAnswers: ['0.770%', '0.7,70%', '0.7 70%'], explanation: '7/10 means 7 tenths, so 7/10 = 0.7.\nAs a percentage, multiply by 100: 0.7 × 100 = 70% ✓' },
        { difficulty: 'Medium', question: 'Write 65% as a decimal and as a fraction in simplest form.', answer: '0.65 and 13/20', checkMode: 'auto', correctAnswer: '0.6513/20', correctAnswers: ['0.6513/20', '0.65,13/20', '0.65 13/20'], explanation: 'To write a percentage as a decimal, divide by 100: 65% = 0.65.\nAs a fraction: 65/100. Simplify by dividing top and bottom by 5: 65/100 = 13/20 ✓' },
        { difficulty: 'Medium', question: 'Order these decimals from smallest to biggest: 0.8, 0.15, 0.55, 0.4', answer: '0.15, 0.4, 0.55, 0.8', checkMode: 'auto', correctAnswer: '0.15,0.4,0.55,0.8', correctAnswers: ['0.15,0.4,0.55,0.8', '0.15, 0.4, 0.55, 0.8'], explanation: 'Compare tenths first: 0.15 has 1 tenth (smallest). Then 0.4 (4 tenths), 0.55 (5 tenths), 0.8 (8 tenths).\nOrder: 0.15, 0.4, 0.55, 0.8 ✓' },

        // Block 5 — Rounding to a given number of decimal places (16-17)
        { difficulty: 'Medium', question: 'Round 6.783 to 2 decimal places.', answer: '6.78', checkMode: 'auto', correctAnswer: '6.78', explanation: 'Digit being rounded: 8 (hundredths).\nDeciding digit: 3 (thousandths). Since 3 ≤ 4, round down.\n8 stays as 8. Answer: 6.78 ✓' },
        { difficulty: 'Medium-Hard', question: 'Round 9.076 to 2 decimal places.', answer: '9.08', checkMode: 'auto', correctAnswer: '9.08', explanation: 'Digit being rounded: 7 (hundredths).\nDeciding digit: 6 (thousandths). Since 6 ≥ 5, round up.\n7 becomes 8. Answer: 9.08 ✓' },

        // Block 6 — Word problems, error-spotting & multi-step reasoning (18-20)
        { difficulty: 'Hard', question: 'Zanele buys 3.5 kg of oranges at R16.40 per kg and 0.8 kg of grapes at R32.50 per kg. What is the total cost of the fruit?', answer: 'R83.40', checkMode: 'auto', correctAnswer: 'R83.40', correctAnswers: ['R83.40', '83.40', 'R83.4', '83.4'], explanation: 'Oranges: 3.5 × R16.40 = R57.40.\nGrapes: 0.8 × R32.50 = R26.00.\nTotal: R57.40 + R26.00 = R83.40 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 5.3 × 4 and writes the answer as 2.12. Explain the mistake and give the correct answer.', answer: 'The student placed the decimal point incorrectly. Ignoring the decimal point, 53 × 4 = 212. Since 5.3 has 1 decimal place and 4 has 0 decimal places, the total is 1 decimal place, so the decimal point goes 1 place from the right: 21.2, not 2.12.', checkMode: 'self', explanation: '53 × 4 = 212. Total decimal places = 1. Correct answer: 21.2.' },
        { difficulty: 'Hard', question: 'Sipho earns R360.40 from a part-time job. He spends a fifth of it on data and saves the rest. How much does he save?', answer: 'R288.32', checkMode: 'auto', correctAnswer: 'R288.32', correctAnswers: ['R288.32', '288.32'], explanation: 'A fifth of R360.40: R360.40 ÷ 5 = R72.08.\nAmount saved: R360.40 − R72.08 = R288.32 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered all operations with decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the decimal point rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Addition & subtraction of decimals (1-4)
        { difficulty: 'Easy', question: 'Calculate 9.36 + 4.8.', answer: '14.16', checkMode: 'auto', correctAnswer: '14.16', explanation: 'Line up decimal points: 9.36 + 4.80 (add a zero so both have 2 decimal places).\n9.36 + 4.80 = 14.16 ✓' },
        { difficulty: 'Easy', question: 'Calculate 15.7 - 5.65.', answer: '10.05', checkMode: 'auto', correctAnswer: '10.05', explanation: 'Line up decimal points: 15.70 - 5.65 (add a zero so both have 2 decimal places).\n15.70 - 5.65 = 10.05 ✓' },
        { difficulty: 'Easy-Medium', question: 'A fence is built in two sections: one is 21.4 m long and the other is 6.85 m long. What is the total length of the fence?', answer: '28.25 m', checkMode: 'auto', correctAnswer: '28.25', correctAnswers: ['28.25', '28.25m', '28.25 m'], explanation: 'Line up decimal points: 21.40 + 6.85 (add a zero so both have 2 decimal places).\n21.40 + 6.85 = 28.25 m ✓' },
        { difficulty: 'Medium', question: 'Calculate 18.2 - 3.549.', answer: '14.651', checkMode: 'auto', correctAnswer: '14.651', explanation: 'Line up decimal points: 18.200 - 3.549 (add zeros so both have 3 decimal places).\n18.200 - 3.549 = 14.651 ✓' },

        // Block 2 — Multiplication of decimals (5-8)
        { difficulty: 'Medium', question: 'Calculate 5.4 × 3.3.', answer: '17.82', checkMode: 'auto', correctAnswer: '17.82', explanation: 'Ignore decimal points: 54 × 33 = 1 782.\nCount decimal places: 5.4 has 1, 3.3 has 1. Total = 2.\nPlace decimal point 2 places from the right in 1 782: 17.82 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.5 × 0.7.', answer: '0.35', checkMode: 'auto', correctAnswer: '0.35', explanation: 'Ignore decimal points: 5 × 7 = 35.\nCount decimal places: 0.5 has 1, 0.7 has 1. Total = 2.\nPlace decimal point 2 places from the right in 35: 0.35 ✓' },
        { difficulty: 'Easy-Medium', question: 'A metre of fabric costs R22.50. What is the cost of 4 metres of fabric?', answer: 'R90.00', checkMode: 'auto', correctAnswer: 'R90.00', correctAnswers: ['R90.00', '90.00', 'R90', '90'], explanation: 'Multiply: R22.50 × 4.\nIgnore the decimal point: 2 250 × 4 = 9 000.\nDecimal places: 22.50 has 2. Place decimal point 2 places from the right: 90.00 = R90.00 ✓' },
        { difficulty: 'Medium', question: 'Calculate 3.16 × 1.5.', answer: '4.74', checkMode: 'auto', correctAnswer: '4.74', correctAnswers: ['4.74', '4.740'], explanation: 'Ignore decimal points: 316 × 15 = 4 740.\nCount decimal places: 3.16 has 2, 1.5 has 1. Total = 3.\nPlace decimal point 3 places from the right in 4 740: 4.740 = 4.74 ✓' },

        // Block 3 — Division of decimals (9-11)
        { difficulty: 'Medium', question: 'Calculate 63.6 ÷ 4.', answer: '15.9', checkMode: 'auto', correctAnswer: '15.9', explanation: 'Divide, keeping the decimal point in position.\n63 ÷ 4 = 15 remainder 3. Bring down 6 → 36 ÷ 4 = 9.\nAnswer: 15.9. Check: 15.9 × 4 = 63.6 ✓' },
        { difficulty: 'Medium', question: 'Calculate 0.81 ÷ 9.', answer: '0.09', checkMode: 'auto', correctAnswer: '0.09', explanation: 'Divide, keeping the decimal point in position.\n0.81 ÷ 9: 81 ÷ 9 = 9, and 0.81 has 2 decimal places, so the answer has 2 decimal places.\nAnswer: 0.09. Check: 0.09 × 9 = 0.81 ✓' },
        { difficulty: 'Medium', question: 'Calculate 9.2 ÷ 100.', answer: '0.092', checkMode: 'auto', correctAnswer: '0.092', explanation: 'Dividing by 100 moves the decimal point 2 places to the left.\n9.2 ÷ 100: move the decimal point 2 places left → 0.092 ✓' },

        // Block 4 — Converting decimals, fractions & percentages (12-15)
        { difficulty: 'Medium', question: 'Write 0.6 as a fraction in simplest form and as a percentage.', answer: '3/5 and 60%', checkMode: 'auto', correctAnswer: '3/560%', correctAnswers: ['3/560%', '3/5,60%', '3/5 60%'], explanation: '0.6 = 6/10. Simplify by dividing top and bottom by 2: 6/10 = 3/5.\nAs a percentage, multiply by 100: 0.6 × 100 = 60% ✓' },
        { difficulty: 'Medium', question: 'Write 9/20 as a decimal and as a percentage.', answer: '0.45 and 45%', checkMode: 'auto', correctAnswer: '0.4545%', correctAnswers: ['0.4545%', '0.45,45%', '0.45 45%'], explanation: 'Convert to hundredths: 9/20 = 45/100 = 0.45.\nAs a percentage, multiply by 100: 0.45 × 100 = 45% ✓' },
        { difficulty: 'Medium', question: 'Write 8% as a decimal and as a fraction in simplest form.', answer: '0.08 and 2/25', checkMode: 'auto', correctAnswer: '0.082/25', correctAnswers: ['0.082/25', '0.08,2/25', '0.08 2/25'], explanation: 'To write a percentage as a decimal, divide by 100: 8% = 0.08.\nAs a fraction: 8/100. Simplify by dividing top and bottom by 4: 8/100 = 2/25 ✓' },
        { difficulty: 'Medium', question: 'Order these decimals from smallest to biggest: 0.72, 0.07, 0.5, 0.35', answer: '0.07, 0.35, 0.5, 0.72', checkMode: 'auto', correctAnswer: '0.07,0.35,0.5,0.72', correctAnswers: ['0.07,0.35,0.5,0.72', '0.07, 0.35, 0.5, 0.72'], explanation: 'Compare tenths first: 0.07 has 0 tenths (smallest). Then 0.35 (3 tenths), 0.5 (5 tenths), 0.72 (7 tenths).\nOrder: 0.07, 0.35, 0.5, 0.72 ✓' },

        // Block 5 — Rounding to a given number of decimal places (16-17)
        { difficulty: 'Medium', question: 'Round 8.347 to 2 decimal places.', answer: '8.35', checkMode: 'auto', correctAnswer: '8.35', explanation: 'Digit being rounded: 4 (hundredths).\nDeciding digit: 7 (thousandths). Since 7 ≥ 5, round up.\n4 becomes 5. Answer: 8.35 ✓' },
        { difficulty: 'Medium-Hard', question: 'Round 14.095 to 2 decimal places.', answer: '14.10', checkMode: 'auto', correctAnswer: '14.10', correctAnswers: ['14.10', '14.1'], explanation: 'Digit being rounded: 9 (hundredths).\nDeciding digit: 5 (thousandths). Since 5 ≥ 5, round up.\n9 + 1 = 10 — write 0, carry 1 to the tenths: 0 + 1 = 1.\nAnswer: 14.10 ✓' },

        // Block 6 — Word problems, error-spotting & multi-step reasoning (18-20)
        { difficulty: 'Hard', question: 'Bongani buys 4.5 kg of potatoes at R11.20 per kg and 1.5 kg of onions at R19.60 per kg. What is the total cost of the vegetables?', answer: 'R79.80', checkMode: 'auto', correctAnswer: 'R79.80', correctAnswers: ['R79.80', '79.80', 'R79.8', '79.8'], explanation: 'Potatoes: 4.5 × R11.20 = R50.40.\nOnions: 1.5 × R19.60 = R29.40.\nTotal: R50.40 + R29.40 = R79.80 ✓' },
        { difficulty: 'Hard', question: 'A student calculates 6.4 × 3 and writes the answer as 1.92. Explain the mistake and give the correct answer.', answer: 'The student placed the decimal point incorrectly. Ignoring the decimal point, 64 × 3 = 192. Since 6.4 has 1 decimal place and 3 has 0 decimal places, the total is 1 decimal place, so the decimal point goes 1 place from the right: 19.2, not 1.92.', checkMode: 'self', explanation: '64 × 3 = 192. Total decimal places = 1. Correct answer: 19.2.' },
        { difficulty: 'Hard', question: 'Amahle earns R520.50 from selling crafts. She spends a tenth of it on materials for the next batch and saves the rest. How much does she save?', answer: 'R468.45', checkMode: 'auto', correctAnswer: 'R468.45', correctAnswers: ['R468.45', '468.45'], explanation: 'A tenth of R520.50: R520.50 ÷ 10 = R52.05.\nAmount saved: R520.50 − R52.05 = R468.45 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered all operations with decimal fractions.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit the decimal point rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
