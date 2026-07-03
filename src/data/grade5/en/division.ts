import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (division roles) ─────────────────────────────────────────
// dividend       → red     (#dc2626)
// divisor        → blue    (#2563eb)
// quotient       → green   (#16a34a)
// remainder      → orange  (#ea580c)
// estimated digit→ purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Division',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVISION AS THE INVERSE OF MULTIPLICATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-inverse-multiplication',
      title: 'Division as the Inverse of Multiplication',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Division and multiplication are <strong>inverse operations</strong> — they undo each other, just like addition and subtraction undo each other. In Grade 5 we use this relationship to divide larger numbers quickly by thinking of the matching multiplication fact.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('dividend')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('divisor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quotient')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('remainder')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Dividend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number being divided — it is the starting amount.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Divisor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number we divide by — how many equal groups we are making.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Quotient</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The answer to a division — how many are in each group.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Remainder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">What is left over after dividing as equally as possible.</p>` +
        `</div>` +

        `</div>` +

        // ── Fact family ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Fact families</p>` +
        `<p style="margin-bottom:12px;">One multiplication fact gives you <strong>two division facts</strong> for free. These three facts form a <strong>fact family</strong>:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Multiplication</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">8 × 9 = ${re('72')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Division fact 1</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('72')} ÷ ${bl('9')} = ${gr('8')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Division fact 2</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('72')} ÷ ${bl('8')} = ${gr('9')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why multiplication tables matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">Knowing your multiplication tables up to <strong>12 × 12</strong> means you can solve most division questions instantly — just think of the matching multiplication fact and the answer is already there.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Use the fact family for 11 × 12 = 132 to write two division facts.',
          answer: `${re('132')} ÷ ${bl('12')} = ${gr('11')} and ${re('132')} ÷ ${bl('11')} = ${gr('12')}`,
          steps: [
            `Start with the multiplication fact: <strong>11 × 12 = ${re('132')}</strong>. The product ${re('132')} becomes the ${re('dividend')} in both division facts.`,
            `<strong>Division fact 1:</strong> Swap the product and one of the factors. Use ${bl('12')} as the ${bl('divisor')}:<br>${re('132')} ÷ ${bl('12')} = ${gr('11')}`,
            `<strong>Division fact 2:</strong> Now use ${bl('11')} as the ${bl('divisor')}:<br>${re('132')} ÷ ${bl('11')} = ${gr('12')}`,
            `<strong>Check:</strong> Both answers work because 11 × 12 and 12 × 11 both equal 132. ✓`,
          ],
        },
        {
          question: 'Calculate 144 ÷ 12 using multiplication tables.',
          answer: `${re('144')} ÷ ${bl('12')} = ${gr('12')}`,
          steps: [
            `Write the division: ${re('144')} ÷ ${bl('12')} = ?`,
            `<strong>Think:</strong> What times ${bl('12')} equals ${re('144')}?<br>Ask yourself: "__ × 12 = 144"`,
            `Recall the 12 times table: ${bl('12')} × ${gr('12')} = ${re('144')}`,
            `So ${re('144')} ÷ ${bl('12')} = ${gr('12')} ✓`,
          ],
        },
        {
          question: 'Calculate 108 ÷ 9.',
          answer: `${re('108')} ÷ ${bl('9')} = ${gr('12')}`,
          steps: [
            `Write the division: ${re('108')} ÷ ${bl('9')} = ?`,
            `<strong>Think:</strong> What times ${bl('9')} equals ${re('108')}?<br>Ask yourself: "__ × 9 = 108"`,
            `Recall the 9 times table: ${bl('9')} × ${gr('12')} = ${re('108')}`,
            `So ${re('108')} ÷ ${bl('9')} = ${gr('12')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — two division facts from a fact family ──────────────────
        {
          difficulty: 'Easy',
          question: 'Use the fact family for 9 × 12 = 108 to write two division facts.',
          answer: '108 ÷ 12 = 9\n108 ÷ 9 = 12',
          checkMode: 'self',
        },

        // ── Q2 Medium — three multiplication-table divisions ─────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following using your multiplication tables.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 132 ÷ 11 =',
              correctAnswer: '12',
              explanation: 'Think: which number × 11 = 132?\n11 × 12 = 132, so 132 ÷ 11 = 12 ✓',
            },
            {
              label: 'b) 144 ÷ 12 =',
              correctAnswer: '12',
              explanation: 'Think: which number × 12 = 144?\n12 × 12 = 144, so 144 ÷ 12 = 12 ✓',
            },
            {
              label: 'c) 121 ÷ 11 =',
              correctAnswer: '11',
              explanation: 'Think: which number × 11 = 121?\n11 × 11 = 121, so 121 ÷ 11 = 11 ✓',
            },
          ],
        },

        // ── Q3 Hard — find the dividend and write full fact family ────────────
        {
          difficulty: 'Hard',
          question: 'The answer to a division is 11. The divisor is 12. What is the dividend? Write the full fact family for these three numbers.',
          answer: 'Step 1: Dividend = quotient × divisor = 11 × 12 = 132\n\nFull fact family:\n11 × 12 = 132\n12 × 11 = 132\n132 ÷ 12 = 11\n132 ÷ 11 = 12',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how multiplication fact families help solve division problems with larger numbers up to 12 x 12" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING A 4-DIGIT NUMBER BY A 1-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division-4-digit',
      title: 'Dividing a 4-Digit Number by a 1-Digit Number',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 5 we use <strong>long division</strong> to divide 4-digit numbers by a 1-digit number. The steps are the same ones you used in Grade 4 — we just apply them to bigger numbers. Work from <strong>left to right</strong>, one digit at a time.</p>` +

        // ── Colour key (long division step colours) ──────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiply')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('subtract')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bring down')}</span>` +
        `</div>` +

        // ── 5 steps reference ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 5 long division steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Divide')} — Look at the leftmost digit. If it is smaller than the divisor, include the next digit too, then divide.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply')} — Multiply the quotient digit you just wrote by the divisor. Write the result below.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Subtract')} — Subtract the product from the digits above it. Write the difference below the line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bring down')} — Bring the next digit of the dividend down and add it to the right of your subtraction result.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Repeat</strong> — Repeat steps 1–4 until all digits have been used. Whatever is left at the end is the remainder.</p>` +
        `</div>` +

        `</div>` +

        // ── Zero in quotient tip ─────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch out: zero in the quotient</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the number you are dividing is smaller than the divisor, write <strong>0</strong> in the quotient, ${bl('multiply')} (0 × divisor = 0), ${gr('subtract')} (nothing changes), then ${or('bring down')} the next digit. Never skip this zero — it is part of your answer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 2 436 ÷ 4 = 609 ──────────────────────────────────────
        {
          question: 'Calculate 2 436 ÷ 4.',
          answer: `${re('2 436')} ÷ ${bl('4')} = ${gr('609')}`,
          steps: [
            `${re('Divide:')} Look at the first digit — <strong>2</strong>. Since 2 &lt; 4 we cannot divide yet. Take the first two digits: <strong>24</strong>. 24 ÷ ${bl('4')} = ${gr('6')}. Write ${gr('6')} in the quotient above the 4.`,
            `${bl('Multiply:')} ${gr('6')} × ${bl('4')} = ${bl('24')}. Write ${bl('24')} below the 24 in the dividend.`,
            `${gr('Subtract:')} 24 − ${bl('24')} = ${gr('0')}. Write ${gr('0')} below the line.`,
            `${or('Bring down:')} Bring down the next digit <strong>3</strong> → we now have <strong>${or('03')}</strong>. ${re('Divide:')} 03 ÷ ${bl('4')} = ${gr('0')} remainder 3. Write ${gr('0')} in the quotient above the 3. ${bl('Multiply:')} ${gr('0')} × ${bl('4')} = ${bl('0')}. ${gr('Subtract:')} 03 − ${bl('0')} = ${gr('3')}.`,
            `${or('Bring down:')} Bring down the last digit <strong>6</strong> → we now have <strong>${or('36')}</strong>. ${re('Divide:')} 36 ÷ ${bl('4')} = ${gr('9')}. Write ${gr('9')} in the quotient above the 6.`,
            `${bl('Multiply:')} ${gr('9')} × ${bl('4')} = ${bl('36')}. Write ${bl('36')} below. ${gr('Subtract:')} 36 − ${bl('36')} = ${gr('0')}. No remainder.`,
            `<strong>Answer:</strong> ${re('2 436')} ÷ ${bl('4')} = ${gr('609')} ✓`,
          ],
        },

        // ── Example 5: 3 752 ÷ 8 = 469 ──────────────────────────────────────
        {
          question: 'Calculate 3 752 ÷ 8.',
          answer: `${re('3 752')} ÷ ${bl('8')} = ${gr('469')}`,
          steps: [
            `${re('Divide:')} 3 &lt; 8, so take the first two digits: <strong>37</strong>. 37 ÷ ${bl('8')} = ${gr('4')} remainder 5. Write ${gr('4')} in the quotient.`,
            `${bl('Multiply:')} ${gr('4')} × ${bl('8')} = ${bl('32')}. Write ${bl('32')} below 37. ${gr('Subtract:')} 37 − ${bl('32')} = ${gr('5')}.`,
            `${or('Bring down:')} Bring down <strong>5</strong> → we now have <strong>${or('55')}</strong>. ${re('Divide:')} 55 ÷ ${bl('8')} = ${gr('6')} remainder 7. Write ${gr('6')} in the quotient.`,
            `${bl('Multiply:')} ${gr('6')} × ${bl('8')} = ${bl('48')}. Write ${bl('48')} below 55. ${gr('Subtract:')} 55 − ${bl('48')} = ${gr('7')}.`,
            `${or('Bring down:')} Bring down <strong>2</strong> → we now have <strong>${or('72')}</strong>. ${re('Divide:')} 72 ÷ ${bl('8')} = ${gr('9')}. Write ${gr('9')} in the quotient.`,
            `${bl('Multiply:')} ${gr('9')} × ${bl('8')} = ${bl('72')}. Write ${bl('72')} below. ${gr('Subtract:')} 72 − ${bl('72')} = ${gr('0')}. No remainder.`,
            `<strong>Answer:</strong> ${re('3 752')} ÷ ${bl('8')} = ${gr('469')} ✓`,
          ],
        },

        // ── Example 6: 5 043 ÷ 7 = 720 r3, with inverse check ───────────────
        {
          question: 'Calculate 5 043 ÷ 7 and check your answer using the inverse operation.',
          answer: `${re('5 043')} ÷ ${bl('7')} = ${gr('720')} remainder ${or('3')}`,
          steps: [
            `${re('Divide:')} 5 &lt; 7, so take the first two digits: <strong>50</strong>. 50 ÷ ${bl('7')} = ${gr('7')} remainder 1. Write ${gr('7')} in the quotient.`,
            `${bl('Multiply:')} ${gr('7')} × ${bl('7')} = ${bl('49')}. Write ${bl('49')} below 50. ${gr('Subtract:')} 50 − ${bl('49')} = ${gr('1')}.`,
            `${or('Bring down:')} Bring down <strong>4</strong> → we now have <strong>${or('14')}</strong>. ${re('Divide:')} 14 ÷ ${bl('7')} = ${gr('2')}. Write ${gr('2')} in the quotient.`,
            `${bl('Multiply:')} ${gr('2')} × ${bl('7')} = ${bl('14')}. Write ${bl('14')} below. ${gr('Subtract:')} 14 − ${bl('14')} = ${gr('0')}.`,
            `${or('Bring down:')} Bring down <strong>3</strong> → we now have <strong>${or('03')}</strong>. ${re('Divide:')} 03 ÷ ${bl('7')} = ${gr('0')} remainder ${or('3')}. Write ${gr('0')} in the quotient. ${bl('Multiply:')} ${gr('0')} × ${bl('7')} = ${bl('0')}. ${gr('Subtract:')} 03 − ${bl('0')} = ${or('3')}. This is the remainder.`,
            `<strong>Quotient:</strong> ${gr('720')} &nbsp; <strong>Remainder:</strong> ${or('3')}`,
            `<strong>Check using inverse:</strong> (${gr('quotient')} × ${bl('divisor')}) + ${or('remainder')} = ${re('dividend')}<br>${gr('720')} × ${bl('7')} = 5 040 &nbsp;→&nbsp; 5 040 + ${or('3')} = ${re('5 043')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — single 4-digit ÷ 1-digit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 1 848 ÷ 4 using long division.',
          answer: '462',
          checkMode: 'auto',
          correctAnswer: '462',
          explanation: 'Step 1: 1 < 4 — take 18. 18 ÷ 4 = 4 rem 2. Write 4.\nStep 2: 4 × 4 = 16. 18 − 16 = 2. Bring down 4 → 24.\nStep 3: 24 ÷ 4 = 6. Write 6.\nStep 4: 6 × 4 = 24. 24 − 24 = 0. Bring down 8 → 8.\nStep 5: 8 ÷ 4 = 2. Write 2.\nStep 6: 2 × 4 = 8. 8 − 8 = 0. No remainder.\nAnswer: 1 848 ÷ 4 = 462 ✓',
        },

        // ── Q5 Medium — two 4-digit ÷ 1-digit calculations ───────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following using long division.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 3 276 ÷ 6 =',
              correctAnswer: '546',
              explanation: 'Step 1: 3 < 6 — take 32. 32 ÷ 6 = 5 rem 2. Write 5.\nStep 2: 5 × 6 = 30. 32 − 30 = 2. Bring down 7 → 27.\nStep 3: 27 ÷ 6 = 4 rem 3. Write 4.\nStep 4: 4 × 6 = 24. 27 − 24 = 3. Bring down 6 → 36.\nStep 5: 36 ÷ 6 = 6. Write 6.\nStep 6: 6 × 6 = 36. 36 − 36 = 0.\nAnswer: 546. Check: 546 × 6 = 3 276 ✓',
            },
            {
              label: 'b) 4 536 ÷ 9 =',
              correctAnswer: '504',
              explanation: 'Step 1: 4 < 9 — take 45. 45 ÷ 9 = 5. Write 5.\nStep 2: 5 × 9 = 45. 45 − 45 = 0. Bring down 3 → 03.\nStep 3: 03 ÷ 9 = 0 rem 3. Write 0.\nStep 4: 0 × 9 = 0. 03 − 0 = 3. Bring down 6 → 36.\nStep 5: 36 ÷ 9 = 4. Write 4.\nStep 6: 4 × 9 = 36. 36 − 36 = 0.\nAnswer: 504. Check: 504 × 9 = 4 536 ✓',
            },
          ],
        },

        // ── Q6 Hard — word problem with inverse check ────────────────────────
        {
          difficulty: 'Hard',
          question: 'A factory produces 5 824 items in 8 hours.\n\na) How many items does it produce per hour?\nb) Check your answer using the inverse operation.\nc) If the factory runs for 12 hours at the same rate, how many items will it produce?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Items per hour',
              correctAnswer: '728',
              explanation: 'Step 1: 5 < 8 — take 58. 58 ÷ 8 = 7 rem 2. Write 7.\nStep 2: 7 × 8 = 56. 58 − 56 = 2. Bring down 2 → 22.\nStep 3: 22 ÷ 8 = 2 rem 6. Write 2.\nStep 4: 2 × 8 = 16. 22 − 16 = 6. Bring down 4 → 64.\nStep 5: 64 ÷ 8 = 8. Write 8.\nStep 6: 8 × 8 = 64. 64 − 64 = 0.\nAnswer: 5 824 ÷ 8 = 728 items per hour ✓',
            },
            {
              label: 'b) Inverse check',
              correctAnswer: '728x8=5824',
              correctAnswers: ['728x8=5824', '5824'],
              explanation: 'Inverse check: quotient × divisor = dividend\n728 × 8 = 5 824 ✓\nThis confirms that 728 items per hour is correct.',
            },
            {
              label: 'c) Items in 12 hours',
              correctAnswer: '8736',
              correctAnswers: ['8736', '728x12=8736'],
              explanation: 'Rate × time = total items\n728 × 12 = 8 736\n(728 × 10 = 7 280) + (728 × 2 = 1 456) = 8 736 items ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long division layout showing 2 436 divided by 4 with each step colour coded — divide red multiply blue subtract green bring down orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step long division of a 4-digit number by a 1-digit number with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DIVIDING A 3-DIGIT NUMBER BY A 2-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division-3-digit-2-digit',
      title: 'Dividing a 3-Digit Number by a 2-Digit Number',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">When the divisor has <strong>two digits</strong>, you cannot look up the answer in a multiplication table directly. Instead, you use <strong>estimation</strong> to find each quotient digit. The long division steps are exactly the same — the only difference is that you now <em>estimate</em> the quotient digit first, then check and adjust if needed.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiply')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('subtract')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bring down')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('estimated digit')}</span>` +
        `</div>` +

        // ── Estimation strategy ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Estimation strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#7c3aed;">Round</strong> — Round the 2-digit divisor to the nearest 10. This gives you a simpler number to work with.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#7c3aed;">Estimate</strong> — Divide the partial dividend by the rounded divisor. This gives you your ${pu('estimated digit')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Try')} — ${bl('Multiply')} your ${pu('estimated digit')} by the <em>actual</em> divisor. Write the product below the partial dividend.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Check and adjust')} — ${gr('Subtract')} and check the result. Adjust your estimate up or down if needed (see rules below).</p>` +
        `</div>` +

        `</div>` +

        // ── Adjustment rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Adjusting your estimate</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Product is too big → reduce by 1</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">If ${pu('estimated digit')} × divisor <strong>&gt;</strong> partial dividend, your estimate is too high.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Lower the ${pu('digit')} by 1 and multiply again.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Remainder ≥ divisor → increase by 1</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">If the remainder after subtracting is <strong>≥</strong> the divisor, your estimate is too low.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Raise the ${pu('digit')} by 1 and try again.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Trial and adjustment is normal</p>` +
        `<p style="margin:0;color:#1e3a8a;">It is perfectly fine to try a digit, find it does not work, and adjust. Always ${bl('multiply')} back to check. When there is no remainder left, or the remainder is smaller than the divisor, your ${pu('estimate')} is correct.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: 756 ÷ 12 = 63 ────────────────────────────────────────
        {
          question: 'Calculate 756 ÷ 12.',
          answer: `${re('756')} ÷ ${bl('12')} = ${pu('63')}`,
          steps: [
            `${re('Divide:')} 7 &lt; 12, so take the first two digits: <strong>75</strong>. How many times does ${bl('12')} go into 75?`,
            `${pu('Estimate:')} Round ${bl('12')} to 10. 75 ÷ 10 = 7.5. Try ${pu('6')} (go slightly lower since 12 &gt; 10). ${bl('Multiply:')} ${pu('6')} × ${bl('12')} = ${bl('72')}. Check: ${bl('72')} ≤ 75 ✓. Write ${pu('6')} in the quotient.`,
            `${gr('Subtract:')} 75 − ${bl('72')} = ${gr('3')}.`,
            `${or('Bring down:')} Bring down <strong>6</strong> → we now have <strong>${or('36')}</strong>.`,
            `${re('Divide:')} 36 ÷ ${bl('12')} = ${pu('3')} exactly (think: 3 × 12 = 36). Write ${pu('3')} in the quotient. ${bl('Multiply:')} ${pu('3')} × ${bl('12')} = ${bl('36')}. ${gr('Subtract:')} 36 − ${bl('36')} = ${gr('0')}. No remainder.`,
            `<strong>Answer:</strong> ${re('756')} ÷ ${bl('12')} = ${pu('63')} ✓`,
          ],
        },

        // ── Example 8: 924 ÷ 11 = 84 ────────────────────────────────────────
        {
          question: 'Calculate 924 ÷ 11.',
          answer: `${re('924')} ÷ ${bl('11')} = ${pu('84')}`,
          steps: [
            `${re('Divide:')} 9 &lt; 11, so take the first two digits: <strong>92</strong>. How many times does ${bl('11')} go into 92?`,
            `${pu('Estimate:')} Round ${bl('11')} to 10. 92 ÷ 10 ≈ 9. Try ${pu('8')} (slightly lower since 11 &gt; 10). ${bl('Multiply:')} ${pu('8')} × ${bl('11')} = ${bl('88')}. Check: ${bl('88')} ≤ 92 ✓. Write ${pu('8')} in the quotient.`,
            `${gr('Subtract:')} 92 − ${bl('88')} = ${gr('4')}. Check: 4 &lt; 11 ✓ — the remainder is smaller than the divisor, so the estimate is correct.`,
            `${or('Bring down:')} Bring down <strong>4</strong> → we now have <strong>${or('44')}</strong>.`,
            `${re('Divide:')} 44 ÷ ${bl('11')} = ${pu('4')} exactly (think: 4 × 11 = 44). Write ${pu('4')} in the quotient. ${bl('Multiply:')} ${pu('4')} × ${bl('11')} = ${bl('44')}. ${gr('Subtract:')} 44 − ${bl('44')} = ${gr('0')}. No remainder.`,
            `<strong>Answer:</strong> ${re('924')} ÷ ${bl('11')} = ${pu('84')} ✓`,
          ],
        },

        // ── Example 9: 845 ÷ 13 = 65 ────────────────────────────────────────
        {
          question: 'Calculate 845 ÷ 13.',
          answer: `${re('845')} ÷ ${bl('13')} = ${pu('65')}`,
          steps: [
            `${re('Divide:')} 8 &lt; 13, so take the first two digits: <strong>84</strong>. How many times does ${bl('13')} go into 84?`,
            `${pu('Estimate:')} Round ${bl('13')} to 10. 84 ÷ 10 ≈ 8. Try ${pu('6')} (adjust down — 13 is notably larger than 10). ${bl('Multiply:')} ${pu('6')} × ${bl('13')} = ${bl('78')}. Check: ${bl('78')} ≤ 84 ✓. Also check: 7 × 13 = 91 &gt; 84 — so ${pu('6')} is the correct digit. Write ${pu('6')} in the quotient.`,
            `${gr('Subtract:')} 84 − ${bl('78')} = ${gr('6')}. Check: 6 &lt; 13 ✓ — the remainder is smaller than the divisor, so the estimate is correct.`,
            `${or('Bring down:')} Bring down <strong>5</strong> → we now have <strong>${or('65')}</strong>.`,
            `${re('Divide:')} 65 ÷ ${bl('13')} = ${pu('5')} exactly (think: 5 × 13 = 65). Write ${pu('5')} in the quotient. ${bl('Multiply:')} ${pu('5')} × ${bl('13')} = ${bl('65')}. ${gr('Subtract:')} 65 − ${bl('65')} = ${gr('0')}. No remainder.`,
            `<strong>Answer:</strong> ${re('845')} ÷ ${bl('13')} = ${pu('65')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — single 3-digit ÷ 2-digit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate using long division and show every step:\n624 ÷ 12',
          answer: '52',
          checkMode: 'auto',
          correctAnswer: '52',
          explanation: 'Step 1: 6 < 12 — take 62. Estimate: 62 ÷ 10 ≈ 6. Try 5: 5 × 12 = 60 ≤ 62 ✓.\nStep 2: 62 − 60 = 2. Bring down 4 → 24.\nStep 3: 24 ÷ 12 = 2 exactly (2 × 12 = 24). 24 − 24 = 0. No remainder.\nAnswer: 624 ÷ 12 = 52 ✓',
        },

        // ── Q8 Medium — two 3-digit ÷ 2-digit calculations ──────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate using long division and show every step.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 858 ÷ 11 =',
              correctAnswer: '78',
              explanation: 'Step 1: 8 < 11 — take 85. Estimate: 85 ÷ 10 ≈ 8. Try 7: 7 × 11 = 77 ≤ 85 ✓.\nStep 2: 85 − 77 = 8. Bring down 8 → 88.\nStep 3: 88 ÷ 11 = 8 exactly (8 × 11 = 88). 88 − 88 = 0. No remainder.\nAnswer: 858 ÷ 11 = 78 ✓',
            },
            {
              label: 'b) 884 ÷ 13 =',
              correctAnswer: '68',
              explanation: 'Step 1: 8 < 13 — take 88. Estimate: 88 ÷ 10 ≈ 8. Try 6: 6 × 13 = 78 ≤ 88 ✓. Check: 7 × 13 = 91 > 88 — so 6 is correct.\nStep 2: 88 − 78 = 10. Bring down 4 → 104.\nStep 3: 104 ÷ 13 = 8 exactly (8 × 13 = 104). 104 − 104 = 0. No remainder.\nAnswer: 884 ÷ 13 = 68 ✓',
            },
          ],
        },

        // ── Q9 Hard — word problem with inverse and reasoning ────────────────
        {
          difficulty: 'Hard',
          question: 'A school has 936 learners to be divided equally into classes of 12.\n\na) How many classes are there?\nb) Check your answer using the inverse operation.\nc) If 3 more learners join the school, can they be added to existing classes without creating a new class?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Number of classes',
              correctAnswer: '78',
              explanation: 'Step 1: 9 < 12 — take 93. Estimate: 93 ÷ 10 ≈ 9. Try 7: 7 × 12 = 84 ≤ 93 ✓. Check: 8 × 12 = 96 > 93 — so 7 is correct.\nStep 2: 93 − 84 = 9. Bring down 6 → 96.\nStep 3: 96 ÷ 12 = 8 exactly (8 × 12 = 96). 96 − 96 = 0. No remainder.\nAnswer: 936 ÷ 12 = 78 classes ✓',
            },
            {
              label: 'b) Inverse check (quotient × divisor)',
              correctAnswer: '936',
              correctAnswers: ['936', '78x12=936', '78×12=936', '78 x 12 = 936', '78 × 12 = 936'],
              explanation: 'Inverse check: quotient × divisor = dividend\n78 × 12 = 936 ✓\nThis confirms that 78 classes is correct.',
            },
            {
              label: 'c) Can 3 more learners join without a new class?',
              correctAnswer: 'Yes',
              checkMode: 'self',
              answer: 'Yes — there are 78 classes and only 3 extra learners, so each of 3 classes can absorb 1 extra learner. No new class is needed.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long division layout showing 756 divided by 12 with estimation shown for each step and colour coded working" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide a 3-digit number by a 2-digit number using estimation and long division" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — REMAINDERS AND WHAT THEY MEAN IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'remainders-in-context',
      title: 'Remainders and What They Mean in Context',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">When you divide and there is a ${or('remainder')}, you need to decide what to do with it. The right choice depends on what the question is asking — this is called reading the <span style="color:#dc2626;font-weight:700">context</span>. There are three ways to handle a ${or('remainder')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quotient')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('remainder')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('context decision')}</span>` +
        `</div>` +

        // ── Three types ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three types of remainder situations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">1. ${re('Round down')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Use the ${gr('quotient')} as your answer and ignore the ${or('remainder')}.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>When:</strong> you cannot use a broken or partial item.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: How many <strong>full boxes</strong> can you fill?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">2. ${re('Round up')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Add <strong>1</strong> to the ${gr('quotient')} because the ${or('remainder')} still needs to be included.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>When:</strong> everything must fit, even the leftover amount.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: How many <strong>buses are needed</strong>?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">3. ${re('Express as a fraction')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Write the ${or('remainder')} as a fraction of the divisor.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>When:</strong> you are sharing and each person gets part of what is left over.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: How much does <strong>each person get</strong>?</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always check the context</p>` +
        `<p style="margin:0;color:#991b1b;">Re-read the question carefully before writing your final answer. The ${re('context')} tells you whether to ${re('round down')}, ${re('round up')}, or ${re('express the remainder as a fraction')}.` +
        ` The ${or('remainder')} itself does not change — only what you do with it changes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '456 learners need to be seated in rows of 14. How many full rows are there and how many learners are left over?',
          answer: `${gr('32')} full rows with ${or('8')} learners left over — ${re('round down')} since we cannot have a partial row`,
          steps: [
            `Divide: ${re('456')} ÷ ${bl('14')} = ${gr('32')} remainder ${or('8')}`,
            `${re('Context decision:')} The question asks for <strong>full rows</strong>. You cannot seat ${or('8')} people in a row designed for 14, so the ${or('remainder')} is simply left over. ${re('Round down')} — the answer is ${gr('32')} full rows.`,
          ],
        },
        {
          question: '348 learners need to travel by bus. Each bus holds 45 learners. How many buses are needed?',
          answer: `${gr('8')} buses are needed — ${re('round up')} so everyone has a seat`,
          steps: [
            `Divide: ${re('348')} ÷ ${bl('45')} = ${gr('7')} remainder ${or('33')}`,
            `${re('Context decision:')} 7 buses carry 7 × 45 = 315 learners, but ${or('33')} learners still need transport. We need one more bus. ${re('Round up')} — the answer is ${gr('8')} buses.`,
          ],
        },
        {
          question: 'R875 is shared equally among 4 friends. How much does each friend get?',
          answer: `Each friend gets R${gr('218')}.${or('75')}`,
          steps: [
            `Divide: ${re('875')} ÷ ${bl('4')} = ${gr('218')} remainder ${or('3')}`,
            `${re('Context decision:')} Money can be split into smaller parts (cents). Express the ${or('remainder')} as a fraction: ${or('3')} ÷ ${bl('4')} = ${or('0.75')}. So each friend gets R${gr('218')} + R${or('0.75')} = <strong>R218.75</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — remainder calculation ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 275 ÷ 8 and write the remainder.',
          answer: '34 remainder 3',
          checkMode: 'auto',
          correctAnswer: '34 remainder 3',
          correctAnswers: ['34 remainder 3', '34 r 3', '34r3', '34r3', '34 rem 3'],
          explanation: 'Step 1: 2 < 8 — take 27. 27 ÷ 8 = 3 (3 × 8 = 24). 27 − 24 = 3. Bring down 5 → 35.\nStep 2: 35 ÷ 8 = 4 (4 × 8 = 32). 35 − 32 = 3. This is the remainder.\nAnswer: 275 ÷ 8 = 34 remainder 3 ✓',
        },

        // ── Q11 Medium — transport word problem with remainder ───────────────
        {
          difficulty: 'Medium',
          question: '247 learners need to travel by minibus. Each minibus holds 15 learners.\n\na) How many full minibuses are needed?\nb) How many learners are left over?\nc) How many minibuses in total are needed so that everyone has a seat?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Full minibuses',
              correctAnswer: '16',
              explanation: 'Step 1: 2 < 15 — take 24. 24 ÷ 15 = 1 (1 × 15 = 15). 24 − 15 = 9. Bring down 7 → 97.\nStep 2: 97 ÷ 15 = 6 (6 × 15 = 90). 97 − 90 = 7. Remainder is 7.\nAnswer: 16 full minibuses (carry 16 × 15 = 240 learners).',
            },
            {
              label: 'b) Learners left over',
              correctAnswer: '7',
              explanation: 'The remainder from 247 ÷ 15 = 16 remainder 7.\n7 learners are left over after filling 16 minibuses.',
            },
            {
              label: 'c) Total minibuses needed',
              correctAnswer: '17',
              explanation: 'Context decision: the 7 remaining learners still need seats. Round up — add 1 more minibus.\nTotal: 16 + 1 = 17 minibuses so that all 247 learners have a seat.',
            },
          ],
        },

        // ── Q12 Hard — sharing money with remainder as fraction ──────────────
        {
          difficulty: 'Hard',
          question: 'R1 250 is shared equally among 6 friends.\n\na) How much does each friend get as a whole number with remainder?\nb) Express the remainder as a fraction.\nc) How much does each friend get in rands and cents?\nd) How much money is left over if you only give whole rand amounts?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Whole number with remainder',
              correctAnswer: '208 remainder 2',
              correctAnswers: ['208 remainder 2', '208 r 2', '208r2', '208 rem 2'],
              explanation: 'Step 1: 1 < 6 — take 12. 12 ÷ 6 = 2. 12 − 12 = 0. Bring down 5 → 05.\nStep 2: 05 ÷ 6 = 0 (0 × 6 = 0). 05 − 0 = 5. Bring down 0 → 50.\nStep 3: 50 ÷ 6 = 8 (8 × 6 = 48). 50 − 48 = 2. Remainder is 2.\nAnswer: 1 250 ÷ 6 = 208 remainder 2 ✓',
            },
            {
              label: 'b) Remainder as a fraction',
              correctAnswer: '1/3',
              correctAnswers: ['1/3', '2/6'],
              explanation: 'Remainder is 2 out of 6 equal parts.\nAs a fraction: 2/6 = 1/3.\nEach friend gets an extra 1/3 of a rand on top of R208.',
            },
            {
              label: 'c) Amount in rands and cents',
              correctAnswer: 'R208.33',
              correctAnswers: ['R208.33', '208.33', 'R208,33'],
              explanation: 'Remainder fraction: 2 ÷ 6 = 0.333... ≈ 0.33 (to the nearest cent).\nEach friend gets R208 + R0.33 = R208.33.',
            },
            {
              label: 'd) Money left over (whole rands only)',
              correctAnswer: 'R2',
              correctAnswers: ['R2', '2', 'R 2'],
              explanation: 'If you give each friend R208 exactly: 6 × 208 = R1 248.\nMoney left over: R1 250 − R1 248 = R2.',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — DIVISION WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-word-problems',
      title: 'Division Word Problems',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Division word problems appear in everyday life. Before you calculate, identify whether the problem is <strong>sharing</strong> (splitting a total into equal groups) or <strong>grouping</strong> (finding how many groups of a given size fit into a total). Look for ${or('key words')} that tell you which type it is.</p>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key words to look for</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        [
          'share equally', 'divide', 'split', 'each', 'per',
          'how many groups', 'how many each', 'distribute',
        ].map(w => `<span style="background:#fed7aa;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#ea580c;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── Sharing vs Grouping ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sharing vs Grouping</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Sharing division</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You know the total and the number of groups. You are finding <strong>how many go into each group</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: R4 752 ${or('shared equally')} among 8 workers — how much ${or('each')}?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Grouping division</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You know the total and the size of each group. You are finding <strong>how many groups</strong> there are.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 3 648 oranges packed in boxes of 12 — ${or('how many groups')}?</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">3-step strategy for word problems</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Find the ${or('key word')} and decide: sharing or grouping.<br><strong>Step 2</strong> — Write the division number sentence.<br><strong>Step 3</strong> — Calculate and write your answer in a full sentence.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A farmer harvests 3 648 oranges and packs them into boxes of 12. How many boxes does he fill?',
          answer: `The farmer fills ${gr('304')} boxes`,
          steps: [
            `${or('Key word:')} <em>"packs into boxes of"</em> — this is <strong>grouping division</strong>. We know each group holds 12 and want to find how many groups.`,
            `Write the number sentence: ${re('3 648')} ÷ ${bl('12')} = ?`,
            `Calculate: ${re('3 648')} ÷ ${bl('12')} = ${gr('304')}`,
            `<strong>Answer:</strong> The farmer fills ${gr('304')} boxes.`,
          ],
        },
        {
          question: 'R4 752 is shared equally among 8 workers. How much does each worker receive?',
          answer: `Each worker receives R${gr('594')}`,
          steps: [
            `${or('Key word:')} <em>"shared equally"</em> — this is <strong>sharing division</strong>. We know the total (R4 752) and the number of groups (8 workers) and want to find how much each gets.`,
            `Write the number sentence: ${re('4 752')} ÷ ${bl('8')} = ?`,
            `Calculate: ${re('4 752')} ÷ ${bl('8')} = ${gr('594')}`,
            `<strong>Answer:</strong> Each worker receives R${gr('594')}.`,
          ],
        },
        {
          question: 'A school has 2 184 exercise books to distribute equally among 24 classrooms. How many books does each classroom get and how many are left over?',
          answer: `Each classroom gets ${gr('91')} books with none left over`,
          steps: [
            `${or('Key word:')} <em>"distribute equally"</em> — this is <strong>sharing division</strong>. We want to find how many books each classroom gets.`,
            `Write the number sentence: ${re('2 184')} ÷ ${bl('24')} = ?`,
            `Calculate: ${re('2 184')} ÷ ${bl('24')} = ${gr('91')}`,
            `<strong>Check:</strong> ${gr('91')} × ${bl('24')} = 2 184 ✓ — no remainder.`,
            `<strong>Answer:</strong> Each classroom gets ${gr('91')} books with none left over.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy — grouping word problem ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A farmer harvests 2 184 apples and packs them into bags of 8. How many full bags does he fill?',
          answer: '273',
          checkMode: 'auto',
          correctAnswer: '273',
          explanation: 'Key word: "packs into bags of" — grouping division.\n2 184 ÷ 8:\nStep 1: 2 < 8 — take 21. 21 ÷ 8 = 2 (2 × 8 = 16). 21 − 16 = 5. Bring down 8 → 58.\nStep 2: 58 ÷ 8 = 7 (7 × 8 = 56). 58 − 56 = 2. Bring down 4 → 24.\nStep 3: 24 ÷ 8 = 3 (3 × 8 = 24). 24 − 24 = 0. No remainder.\nAnswer: 273 full bags. Check: 273 × 8 = 2 184 ✓',
        },

        // ── Q14 Medium — sharing with changed conditions ──────────────────────
        {
          difficulty: 'Medium',
          question: 'R3 456 is shared equally among 12 workers.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How much does each worker receive?',
              correctAnswer: 'R288',
              correctAnswers: ['R288', '288'],
              explanation: '3 456 ÷ 12:\nStep 1: 3 < 12 — take 34. 34 ÷ 12 = 2 (2 × 12 = 24). 34 − 24 = 10. Bring down 5 → 105.\nStep 2: 105 ÷ 12 = 8 (8 × 12 = 96). 105 − 96 = 9. Bring down 6 → 96.\nStep 3: 96 ÷ 12 = 8 (8 × 12 = 96). 96 − 96 = 0. No remainder.\nAnswer: R288 per worker. Check: 288 × 12 = 3 456 ✓',
            },
            {
              label: 'b) If 2 workers are absent and the money is shared among the remaining workers, how much does each worker receive?',
              correctAnswer: 'R345.60',
              correctAnswers: ['R345.60', '345.60', 'R345,60', '345,60', 'R345.6', '345.6'],
              explanation: 'Remaining workers: 12 − 2 = 10.\n3 456 ÷ 10 = 345.6 → R345.60 (dividing by 10 moves the decimal one place).\nAnswer: R345.60 per worker ✓',
            },
            {
              label: 'c) How much more does each worker get in scenario b compared to scenario a?',
              correctAnswer: 'R57.60',
              correctAnswers: ['R57.60', '57.60', 'R57,60', '57,60', 'R57.6', '57.6'],
              explanation: 'Difference: R345.60 − R288.00 = R57.60.\nEach worker receives R57.60 more in scenario b ✓',
            },
          ],
        },

        // ── Q15 Hard — multi-step stationery problem ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'A school orders 2 496 exercise books to distribute equally among its 24 classrooms.\n\na) How many books does each classroom get?\nb) The school also has 384 pens to distribute equally among 16 classrooms. How many pens per classroom?\nc) What is the total number of stationery items (books and pens) each classroom receives if all classrooms get both?\nd) If books cost R8 each and pens cost R3 each, what is the total cost of stationery for one classroom?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Books per classroom',
              correctAnswer: '104',
              explanation: '2 496 ÷ 24:\nStep 1: 2 < 24 — take 24. 24 ÷ 24 = 1 (1 × 24 = 24). 24 − 24 = 0. Bring down 9 → 09.\nStep 2: 9 ÷ 24 = 0 (0 × 24 = 0). 9 − 0 = 9. Bring down 6 → 96.\nStep 3: 96 ÷ 24 = 4 (4 × 24 = 96). 96 − 96 = 0. No remainder.\nAnswer: 104 books per classroom. Check: 104 × 24 = 2 496 ✓',
            },
            {
              label: 'b) Pens per classroom',
              correctAnswer: '24',
              explanation: '384 ÷ 16:\nStep 1: 3 < 16 — take 38. 38 ÷ 16 = 2 (2 × 16 = 32). 38 − 32 = 6. Bring down 4 → 64.\nStep 2: 64 ÷ 16 = 4 (4 × 16 = 64). 64 − 64 = 0. No remainder.\nAnswer: 24 pens per classroom. Check: 24 × 16 = 384 ✓',
            },
            {
              label: 'c) Total stationery items per classroom',
              correctAnswer: '128',
              explanation: 'Total items: 104 books + 24 pens = 128 items per classroom ✓',
            },
            {
              label: 'd) Total cost for one classroom',
              checkMode: 'self',
              answer: 'Books: 104 × R8 = R832\nPens: 24 × R3 = R72\nTotal: R832 + R72 = R904 per classroom',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to interpret remainders in context and solve division word problems by identifying sharing and grouping situations" />',
    },
  ],
  scoreMessages: [
    { minScore: 33, message: 'Outstanding! A perfect score — you have completely mastered division for Grade 5. Keep it up!' },
    { minScore: 27, message: 'Excellent work! You have a very strong grasp of division. Review any missed parts and you will have it perfect.' },
    { minScore: 20, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 12, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
