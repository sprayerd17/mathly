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

      diagramPlaceholder: 'Long division layout showing 2 436 divided by 4 with each step colour coded — divide red multiply blue subtract green bring down orange',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="71" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">6</text><text x="97" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">0</text><text x="123" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">9</text><line x1="32" y1="20" x2="140" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="32" y1="20" x2="32" y2="100" stroke="#0f1f3d" stroke-width="2"/><text x="18" y="40" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="45" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">2</text><text x="71" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="97" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="123" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="38" y="50" font-weight="700" font-size="13" fill="#2563eb">− 24</text><line x1="38" y1="55" x2="84" y2="55" stroke="#0f1f3d" stroke-width="1.5"/><text x="71" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="97" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">3</text><text x="84" y="82" font-weight="700" font-size="13" fill="#2563eb">− 0</text><line x1="84" y1="87" x2="110" y2="87" stroke="#0f1f3d" stroke-width="1.5"/><text x="97" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">3</text><text x="123" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">6</text><text x="84" y="114" font-weight="700" font-size="13" fill="#2563eb">− 36</text><line x1="84" y1="119" x2="136" y2="119" stroke="#0f1f3d" stroke-width="1.5"/><text x="123" y="132" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="110" y="155" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">2 436 ÷ 4 = 609</text></svg>',

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

      diagramPlaceholder: 'Long division layout showing 756 divided by 12 with estimation shown for each step and colour coded working',
      diagramSvg: '<svg viewBox="0 0 220 175" xmlns="http://www.w3.org/2000/svg"><text x="85" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#7c3aed">6</text><text x="115" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#7c3aed">3</text><line x1="40" y1="20" x2="150" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="95" stroke="#0f1f3d" stroke-width="2"/><text x="18" y="40" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">12</text><text x="55" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">7</text><text x="85" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">5</text><text x="115" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="45" y="50" font-weight="700" font-size="13" fill="#2563eb">− 72</text><line x1="45" y1="55" x2="100" y2="55" stroke="#0f1f3d" stroke-width="1.5"/><text x="85" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">3</text><text x="115" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">6</text><text x="78" y="82" font-weight="700" font-size="13" fill="#2563eb">− 36</text><line x1="78" y1="87" x2="130" y2="87" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="95" y="122" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">756 ÷ 12 = 63</text><text x="95" y="140" font-size="10" text-anchor="middle" fill="#6b7280"><tspan x="95" dy="0">Estimate: round 12 to 10,</tspan><tspan x="95" dy="13">then try and adjust</tspan></text></svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Fact families | 3-6 Long division 4-digit÷1-digit |
    // 7-10 Long division 3-digit÷2-digit (estimation) | 11-14 Remainders in context |
    // 15-17 Word problems: sharing vs grouping | 18-19 Multi-step mixed
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Use the fact family for 7 × 8 = 56 to write two division facts.', answer: '56 ÷ 8 = 7\n56 ÷ 7 = 8', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 132 ÷ 11 using your multiplication tables.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Think: which number × 11 = 132? 11 × 12 = 132, so 132 ÷ 11 = 12.' },
        { difficulty: 'Easy', question: 'The quotient of a division is 9 and the divisor is 12. What is the dividend? Write the multiplication fact you used.', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '9x12=108', '9×12=108', '12x9=108'], explanation: 'Dividend = quotient × divisor = 9 × 12 = 108. Check: 108 ÷ 12 = 9 ✓' },
        { difficulty: 'Easy', question: 'Calculate 2 952 ÷ 4 using long division.', answer: '738', checkMode: 'auto', correctAnswer: '738', correctAnswers: ['738'], explanation: 'Step 1: 2 < 4 — take 29. 29 ÷ 4 = 7 rem 1. Write 7.\nStep 2: 7 × 4 = 28. 29 − 28 = 1. Bring down 5 → 15.\nStep 3: 15 ÷ 4 = 3 rem 3. Write 3.\nStep 4: 3 × 4 = 12. 15 − 12 = 3. Bring down 2 → 32.\nStep 5: 32 ÷ 4 = 8. Write 8.\nStep 6: 8 × 4 = 32. 32 − 32 = 0. No remainder.\nAnswer: 2 952 ÷ 4 = 738 ✓' },
        { difficulty: 'Easy', question: 'Calculate each of the following using long division, showing the zero placeholder where needed.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 4 005 ÷ 5 =', correctAnswer: '801', explanation: 'Step 1: 4 < 5 — take 40. 40 ÷ 5 = 8. Write 8.\nStep 2: 8 × 5 = 40. 40 − 40 = 0. Bring down 0 → 00.\nStep 3: 00 ÷ 5 = 0. Write 0 (zero placeholder).\nStep 4: 0 × 5 = 0. 00 − 0 = 0. Bring down 5 → 05.\nStep 5: 05 ÷ 5 = 1. Write 1.\nStep 6: 1 × 5 = 5. 05 − 5 = 0. No remainder.\nAnswer: 4 005 ÷ 5 = 801 ✓' },
          { label: 'b) 6 318 ÷ 9 =', correctAnswer: '702', explanation: 'Step 1: 6 < 9 — take 63. 63 ÷ 9 = 7. Write 7.\nStep 2: 7 × 9 = 63. 63 − 63 = 0. Bring down 1 → 01.\nStep 3: 01 ÷ 9 = 0 rem 1. Write 0 (zero placeholder).\nStep 4: 0 × 9 = 0. 01 − 0 = 1. Bring down 8 → 18.\nStep 5: 18 ÷ 9 = 2. Write 2.\nStep 6: 2 × 9 = 18. 18 − 18 = 0. No remainder.\nAnswer: 6 318 ÷ 9 = 702 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Calculate 4 832 ÷ 7 using long division and then check your answer using the inverse operation.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient and remainder', correctAnswer: '690 remainder 2', correctAnswers: ['690 remainder 2', '690 r 2', '690r2', '690 rem 2'], explanation: 'Step 1: 4 < 7 — take 48. 48 ÷ 7 = 6 rem 6. Write 6.\nStep 2: 6 × 7 = 42. 48 − 42 = 6. Bring down 3 → 63.\nStep 3: 63 ÷ 7 = 9. Write 9.\nStep 4: 9 × 7 = 63. 63 − 63 = 0. Bring down 2 → 02.\nStep 5: 02 ÷ 7 = 0 rem 2. Write 0 (zero placeholder).\nAnswer: 4 832 ÷ 7 = 690 remainder 2 ✓' },
          { label: 'b) Inverse check', correctAnswer: '690x7+2=4832', correctAnswers: ['690x7+2=4832', '4832', '690×7+2=4832'], explanation: 'Inverse check: (quotient × divisor) + remainder = dividend\n690 × 7 = 4 830, and 4 830 + 2 = 4 832 ✓' },
        ] },
        { difficulty: 'Easy', question: 'A packing company splits 4 816 tins equally among 8 delivery trucks. How many tins does each truck carry?', answer: '602', checkMode: 'auto', correctAnswer: '602', correctAnswers: ['602'], explanation: '4 816 ÷ 8: Step 1: 4 < 8 — take 48. 48 ÷ 8 = 6. Write 6.\nStep 2: 6 × 8 = 48. 48 − 48 = 0. Bring down 1 → 01.\nStep 3: 01 ÷ 8 = 0 rem 1. Write 0 (zero placeholder).\nStep 4: 0 × 8 = 0. 01 − 0 = 1. Bring down 6 → 16.\nStep 5: 16 ÷ 8 = 2. Write 2.\nStep 6: 2 × 8 = 16. 16 − 16 = 0. No remainder.\nAnswer: 4 816 ÷ 8 = 602 tins per truck ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step:\n728 ÷ 13', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: 'Step 1: 7 < 13 — take 72. Estimate: 72 ÷ 10 ≈ 7. Try 5: 5 × 13 = 65 ≤ 72 ✓. Check: 6 × 13 = 78 > 72 — so 5 is correct.\nStep 2: 72 − 65 = 7. Bring down 8 → 78.\nStep 3: 78 ÷ 13 = 6 exactly (6 × 13 = 78). 78 − 78 = 0. No remainder.\nAnswer: 728 ÷ 13 = 56 ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 702 ÷ 26 =', correctAnswer: '27', explanation: 'Step 1: 7 < 26 — take 70. Estimate: 70 ÷ 30 ≈ 2. Try 2: 2 × 26 = 52 ≤ 70 ✓. Check: 3 × 26 = 78 > 70 — so 2 is correct.\nStep 2: 70 − 52 = 18. Bring down 2 → 182.\nStep 3: 182 ÷ 26 = 7 exactly (7 × 26 = 182). 182 − 182 = 0. No remainder.\nAnswer: 702 ÷ 26 = 27 ✓' },
          { label: 'b) 874 ÷ 34 =', correctAnswer: '25 remainder 24', correctAnswers: ['25 remainder 24', '25 r 24', '25r24', '25 rem 24'], explanation: 'Step 1: 8 < 34 — take 87. Estimate: 87 ÷ 30 ≈ 2. Try 2: 2 × 34 = 68 ≤ 87 ✓. Check: 3 × 34 = 102 > 87 — so 2 is correct.\nStep 2: 87 − 68 = 19. Bring down 4 → 194.\nStep 3: 194 ÷ 34 — estimate 194 ÷ 30 ≈ 6. Try 5: 5 × 34 = 170 ≤ 194 ✓. Check: 6 × 34 = 204 > 194 — so 5 is correct.\nStep 4: 194 − 170 = 24. Since 24 < 34, this is the final remainder.\nAnswer: 874 ÷ 34 = 25 remainder 24 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A student divides 936 ÷ 18 and estimates the first quotient digit as 6, writing "6 × 18 = 108, but 108 > 93, so this can\'t be right." Find the correct first digit, then finish the division to find 936 ÷ 18.', answer: '936 ÷ 18 = 52', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52'], explanation: 'The student is correct that 6 is too high, since we only take "93" as the first partial dividend (9 < 18, so use two digits 93), and 6 × 18 = 108 > 93. Try 5: 5 × 18 = 90 ≤ 93 ✓.\nStep 1: 93 − 90 = 3. Bring down 6 → 36.\nStep 2: 36 ÷ 18 = 2 exactly (2 × 18 = 36). 36 − 36 = 0. No remainder.\nAnswer: 936 ÷ 18 = 52 ✓' },
        { difficulty: 'Medium', question: 'Calculate 275 ÷ 13 and write the remainder.', answer: '21 remainder 2', checkMode: 'auto', correctAnswer: '21 remainder 2', correctAnswers: ['21 remainder 2', '21 r 2', '21r2', '21 rem 2'], explanation: 'Step 1: 2 < 13 — take 27. Estimate: 27 ÷ 10 ≈ 2. Try 2: 2 × 13 = 26 ≤ 27 ✓.\nStep 2: 27 − 26 = 1. Bring down 5 → 15.\nStep 3: 15 ÷ 13 = 1 rem 2. Try 1: 1 × 13 = 13 ≤ 15 ✓.\nStep 4: 15 − 13 = 2. Since 2 < 13, this is the final remainder.\nAnswer: 275 ÷ 13 = 21 remainder 2 ✓' },
        { difficulty: 'Medium', question: '437 learners need to travel by minibus for a school trip. Each minibus holds 15 learners.\n\na) How many full minibuses are needed?\nb) How many learners are left over?\nc) How many minibuses in total are needed so that everyone has a seat?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full minibuses', correctAnswer: '29', explanation: '437 ÷ 15: Step 1: 4 < 15 — take 43. Estimate 43 ÷ 10 ≈ 4. Try 2: 2 × 15 = 30 ≤ 43 ✓. Check: 3 × 15 = 45 > 43 — so 2 is correct.\nStep 2: 43 − 30 = 13. Bring down 7 → 137.\nStep 3: 137 ÷ 15 — estimate ≈ 13. Try 9: 9 × 15 = 135 ≤ 137 ✓. Remainder 2 < 15, correct.\nAnswer: 29 full minibuses (carry 29 × 15 = 435 learners).' },
          { label: 'b) Learners left over', correctAnswer: '2', explanation: 'The remainder from 437 ÷ 15 = 29 remainder 2.\n2 learners are left over after filling 29 minibuses.' },
          { label: 'c) Total minibuses needed', correctAnswer: '30', explanation: 'Context decision: the 2 remaining learners still need seats, so round up. Total: 29 + 1 = 30 minibuses so that all 437 learners have a seat.' },
        ] },
        { difficulty: 'Medium', question: 'A farmer picks 250 apples and wants to pack them into crates that hold 9 apples each. Explain, in your own words, why the number of full crates is not simply 250 ÷ 9 rounded to the nearest whole number, and state how many full crates he can pack.', answer: '250 ÷ 9 = 27 remainder 7. He can only pack 27 full crates, because the 7 leftover apples are not enough to fill another crate. Rounding to the nearest whole number would give 28 (since 27.78 rounds up), but that would be wrong — you cannot count a crate as full when it only has 7 out of 9 apples.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A charity collected R950 to be shared equally among 8 volunteers.\n\na) How much does each volunteer get as a whole rand amount, and what is the remainder?\nb) Express the remainder as a fraction of R8.\nc) How much does each volunteer receive in rands and cents?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole rand amount with remainder', correctAnswer: '118 remainder 6', correctAnswers: ['118 remainder 6', '118 r 6', '118r6', '118 rem 6'], explanation: '950 ÷ 8: Step 1: 9 < 8? No, 9 ≥ 8, so 9 ÷ 8 = 1 rem 1. Bring down 5 → 15. Step 2: 15 ÷ 8 = 1 rem 7. Bring down 0 → 70. Step 3: 70 ÷ 8 = 8 rem 6.\nAnswer: 950 ÷ 8 = 118 remainder 6.' },
          { label: 'b) Remainder as a fraction', correctAnswer: '6/8', correctAnswers: ['6/8', '3/4'], explanation: 'Remainder is 6 out of 8 equal parts: 6/8 = 3/4.' },
          { label: 'c) Amount in rands and cents', correctAnswer: 'R118.75', correctAnswers: ['R118.75', '118.75', 'R118,75'], explanation: 'Remainder fraction: 6 ÷ 8 = 0.75. Each volunteer gets R118 + R0.75 = R118.75.' },
        ] },
        { difficulty: 'Medium', question: 'A hall has 365 chairs to arrange in rows.\n\nScenario A: rows of 14 chairs.\nScenario B: rows of 20 chairs.\n\na) How many full rows and how many leftover chairs in Scenario A?\nb) How many full rows and how many leftover chairs in Scenario B?\nc) Which scenario wastes fewer chairs as leftovers?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rows of 14)', correctAnswer: '26 remainder 1', correctAnswers: ['26 remainder 1', '26 r 1', '26r1', '26 rem 1'], explanation: '365 ÷ 14: Step 1: 3 < 14 — take 36. Estimate 36 ÷ 10 ≈ 3. Try 2: 2 × 14 = 28 ≤ 36 ✓. Check 3 × 14 = 42 > 36 — so 2 is correct. Step 2: 36 − 28 = 8. Bring down 5 → 85. Step 3: 85 ÷ 14 — try 6: 6 × 14 = 84 ≤ 85 ✓. Remainder: 85 − 84 = 1.\nAnswer: 365 ÷ 14 = 26 remainder 1.' },
          { label: 'b) Scenario B (rows of 20)', correctAnswer: '18 remainder 5', correctAnswers: ['18 remainder 5', '18 r 5', '18r5', '18 rem 5'], explanation: '365 ÷ 20: Step 1: 36 ÷ 20 = 1 rem 16. Bring down 5 → 165. Step 2: 165 ÷ 20 = 8 rem 5.\nAnswer: 365 ÷ 20 = 18 remainder 5.' },
          { label: 'c) Which wastes fewer chairs', correctAnswer: 'Scenario A', correctAnswers: ['Scenario A', 'A', 'scenario a'], explanation: 'Scenario A leaves only 1 chair unused, while Scenario B leaves 5 chairs unused. Scenario A wastes fewer chairs as leftovers.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A baker has 195 muffins and wants to know how many boxes of 6 she can fill. Is this a sharing situation or a grouping situation? Write the number sentence and solve, stating how many full boxes and how many muffins are left over.', answer: 'This is a grouping situation — we know the size of each group (6) and want to find how many groups. Number sentence: 195 ÷ 6 = ?\n195 ÷ 6 = 32 remainder 3.\nShe can fill 32 full boxes, with 3 muffins left over.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A poultry farmer collects 621 eggs and packs them into trays of 6 eggs each.\n\na) Is this sharing or grouping? Write one word.\nb) Write the number sentence and calculate how many full trays are packed.\nc) How many eggs are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sharing or grouping', correctAnswer: 'grouping', correctAnswers: ['grouping', 'Grouping'], explanation: 'We know the size of each group (6 eggs per tray) and want to find the number of groups (trays) — this is grouping.' },
          { label: 'b) Full trays', correctAnswer: '103', explanation: '621 ÷ 6: Step 1: 6 ÷ 6 = 1. Bring down 2 → 02. Step 2: 02 ÷ 6 = 0 rem 2. Bring down 1 → 21. Step 3: 21 ÷ 6 = 3 rem 3.\nAnswer: 621 ÷ 6 = 103 remainder 3, so 103 full trays.' },
          { label: 'c) Eggs left over', correctAnswer: '3', explanation: 'The remainder from 621 ÷ 6 = 103 remainder 3, so 3 eggs are left over.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A school has 480 sweets for a fundraiser.\n\nScenario A: The sweets are shared equally among 8 classes. How many sweets does each class get?\nScenario B: The sweets are packed into bags of 16 to sell. How many bags are made?\n\na) Answer for Scenario A.\nb) Answer for Scenario B.\nc) Which scenario is a sharing situation and which is a grouping situation?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '480 ÷ 8 = 60 sweets per class (sharing: we know the number of groups, 8 classes, and find the amount per group).' },
          { label: 'b) Scenario B', correctAnswer: '30', explanation: '480 ÷ 16 = 30 bags (grouping: we know the size of each group, 16 sweets per bag, and find the number of groups).' },
          { label: 'c) Sharing vs grouping', checkMode: 'self', answer: 'Scenario A is sharing — the total (480) is split equally among a known number of classes (8), and we find how many sweets each class gets.\nScenario B is grouping — we know the size of each bag (16) and find how many bags (groups) can be made from the total.' },
        ] },
        { difficulty: 'Hard', question: 'A hall has 840 chairs to be arranged in rows of 23 chairs each for a graduation ceremony.\n\na) How many full rows can be made?\nb) How many chairs are left over?\nc) The organiser wants NO leftover chairs left standing around — she plans to add extra chairs to make one more complete row. How many extra chairs must she borrow, and how many rows will there be in total?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full rows', correctAnswer: '36', explanation: '840 ÷ 23: Step 1: 8 < 23 — take 84. Estimate 84 ÷ 20 ≈ 4. Try 3: 3 × 23 = 69 ≤ 84 ✓. Check 4 × 23 = 92 > 84 — so 3 is correct. Step 2: 84 − 69 = 15. Bring down 0 → 150. Step 3: 150 ÷ 23 — estimate ≈ 7. Try 6: 6 × 23 = 138 ≤ 150 ✓. Check 7 × 23 = 161 > 150 — so 6 is correct. Remainder: 150 − 138 = 12.\nAnswer: 840 ÷ 23 = 36 remainder 12, so 36 full rows.' },
          { label: 'b) Chairs left over', correctAnswer: '12', explanation: 'The remainder from 840 ÷ 23 = 36 remainder 12, so 12 chairs are left over.' },
          { label: 'c) Extra chairs needed and total rows', correctAnswer: '11 extra chairs, 37 rows', correctAnswers: ['11 extra chairs, 37 rows', '11 and 37', '11,37'], explanation: 'A full row needs 23 chairs. She already has 12 leftover chairs, so she needs 23 − 12 = 11 more chairs to complete one extra row. Total rows: 36 + 1 = 37 rows.' },
        ] },
        { difficulty: 'Hard', question: 'A stadium orders 1 043 extra seats to add to existing rows of 24 seats each, and each new seat costs R25 to install.\n\na) How many full new rows of 24 can be made from the 1 043 seats?\nb) How many seats are left over after the full rows are made?\nc) If those leftover seats are also installed (not wasted), what is the total installation cost for all 1 043 seats?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full new rows', correctAnswer: '43', explanation: '1 043 ÷ 24: Step 1: 10 < 24 — take 104. Estimate 104 ÷ 20 ≈ 5. Try 4: 4 × 24 = 96 ≤ 104 ✓. Check 5 × 24 = 120 > 104 — so 4 is correct. Step 2: 104 − 96 = 8. Bring down 3 → 83. Step 3: 83 ÷ 24 — estimate ≈ 4. Try 3: 3 × 24 = 72 ≤ 83 ✓. Check 4 × 24 = 96 > 83 — so 3 is correct. Remainder: 83 − 72 = 11.\nAnswer: 1 043 ÷ 24 = 43 remainder 11, so 43 full rows.' },
          { label: 'b) Seats left over', correctAnswer: '11', explanation: 'The remainder from 1 043 ÷ 24 = 43 remainder 11, so 11 seats are left over.' },
          { label: 'c) Total installation cost', correctAnswer: 'R26075', correctAnswers: ['R26075', '26075', 'R26 075', '26 075'], explanation: 'All 1 043 seats get installed (whether in full rows or not), so the cost is simply 1 043 × R25 = R26 075. (Check: 1 000 × 25 = 25 000, plus 43 × 25 = 1 075, giving 25 000 + 1 075 = 26 075.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered fact families, long division, remainders in context, and division word problems.' },
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
        { difficulty: 'Easy', question: 'Use the fact family for 9 × 8 = 72 to write two division facts.', answer: '72 ÷ 8 = 9\n72 ÷ 9 = 8', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 121 ÷ 11 using your multiplication tables.', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Think: which number × 11 = 121? 11 × 11 = 121, so 121 ÷ 11 = 11.' },
        { difficulty: 'Easy', question: 'The quotient of a division is 7 and the divisor is 11. What is the dividend? Write the multiplication fact you used.', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77', '7x11=77', '7×11=77', '11x7=77'], explanation: 'Dividend = quotient × divisor = 7 × 11 = 77. Check: 77 ÷ 11 = 7 ✓' },
        { difficulty: 'Easy', question: 'Calculate 5 184 ÷ 6 using long division.', answer: '864', checkMode: 'auto', correctAnswer: '864', correctAnswers: ['864'], explanation: 'Step 1: 5 < 6 — take 51. 51 ÷ 6 = 8 rem 3. Write 8.\nStep 2: 8 × 6 = 48. 51 − 48 = 3. Bring down 8 → 38.\nStep 3: 38 ÷ 6 = 6 rem 2. Write 6.\nStep 4: 6 × 6 = 36. 38 − 36 = 2. Bring down 4 → 24.\nStep 5: 24 ÷ 6 = 4. Write 4.\nStep 6: 4 × 6 = 24. 24 − 24 = 0. No remainder.\nAnswer: 5 184 ÷ 6 = 864 ✓' },
        { difficulty: 'Easy', question: 'Calculate each of the following using long division, showing the zero placeholder where needed.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 3 608 ÷ 4 =', correctAnswer: '902', explanation: 'Step 1: 3 < 4 — take 36. 36 ÷ 4 = 9. Write 9.\nStep 2: 9 × 4 = 36. 36 − 36 = 0. Bring down 0 → 00.\nStep 3: 00 ÷ 4 = 0. Write 0 (zero placeholder).\nStep 4: 0 × 4 = 0. 00 − 0 = 0. Bring down 8 → 08.\nStep 5: 08 ÷ 4 = 2. Write 2.\nStep 6: 2 × 4 = 8. 08 − 8 = 0. No remainder.\nAnswer: 3 608 ÷ 4 = 902 ✓' },
          { label: 'b) 4 536 ÷ 8 =', correctAnswer: '567', explanation: 'Step 1: 4 < 8 — take 45. 45 ÷ 8 = 5 rem 5. Write 5.\nStep 2: 5 × 8 = 40. 45 − 40 = 5. Bring down 3 → 53.\nStep 3: 53 ÷ 8 = 6 rem 5. Write 6.\nStep 4: 6 × 8 = 48. 53 − 48 = 5. Bring down 6 → 56.\nStep 5: 56 ÷ 8 = 7. Write 7.\nStep 6: 7 × 8 = 56. 56 − 56 = 0. No remainder.\nAnswer: 4 536 ÷ 8 = 567 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Calculate 6 027 ÷ 9 using long division and then check your answer using the inverse operation.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient and remainder', correctAnswer: '669 remainder 6', correctAnswers: ['669 remainder 6', '669 r 6', '669r6', '669 rem 6'], explanation: 'Step 1: 6 ÷ 9 — 6 < 9, take 60. 60 ÷ 9 = 6 rem 6. Write 6.\nStep 2: 6 × 9 = 54. 60 − 54 = 6. Bring down 2 → 62.\nStep 3: 62 ÷ 9 = 6 rem 8. Write 6.\nStep 4: 6 × 9 = 54. 62 − 54 = 8. Bring down 7 → 87.\nStep 5: 87 ÷ 9 = 9 rem 6. Write 9.\nAnswer: 6 027 ÷ 9 = 669 remainder 6 ✓' },
          { label: 'b) Inverse check', correctAnswer: '669x9+6=6027', correctAnswers: ['669x9+6=6027', '6027', '669×9+6=6027'], explanation: 'Inverse check: (quotient × divisor) + remainder = dividend\n669 × 9 = 6 021, and 6 021 + 6 = 6 027 ✓' },
        ] },
        { difficulty: 'Easy', question: 'A bottling plant shares 3 612 bottles equally among 6 delivery crates. How many bottles go into each crate?', answer: '602', checkMode: 'auto', correctAnswer: '602', correctAnswers: ['602'], explanation: '3 612 ÷ 6: Step 1: 3 < 6 — take 36. 36 ÷ 6 = 6. Write 6.\nStep 2: 6 × 6 = 36. 36 − 36 = 0. Bring down 1 → 01.\nStep 3: 01 ÷ 6 = 0 rem 1. Write 0 (zero placeholder).\nStep 4: 0 × 6 = 0. 01 − 0 = 1. Bring down 2 → 12.\nStep 5: 12 ÷ 6 = 2. Write 2.\nStep 6: 2 × 6 = 12. 12 − 12 = 0. No remainder.\nAnswer: 3 612 ÷ 6 = 602 bottles per crate ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step:\n975 ÷ 15', answer: '65', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65'], explanation: 'Step 1: 9 < 15 — take 97. Estimate: 97 ÷ 10 ≈ 9. Try 6: 6 × 15 = 90 ≤ 97 ✓. Check: 7 × 15 = 105 > 97 — so 6 is correct.\nStep 2: 97 − 90 = 7. Bring down 5 → 75.\nStep 3: 75 ÷ 15 = 5 exactly (5 × 15 = 75). 75 − 75 = 0. No remainder.\nAnswer: 975 ÷ 15 = 65 ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 598 ÷ 26 =', correctAnswer: '23', explanation: 'Step 1: 5 < 26 — take 59. Estimate: 59 ÷ 30 ≈ 2. Try 2: 2 × 26 = 52 ≤ 59 ✓. Check: 3 × 26 = 78 > 59 — so 2 is correct.\nStep 2: 59 − 52 = 7. Bring down 8 → 78.\nStep 3: 78 ÷ 26 = 3 exactly (3 × 26 = 78). 78 − 78 = 0. No remainder.\nAnswer: 598 ÷ 26 = 23 ✓' },
          { label: 'b) 713 ÷ 23 =', correctAnswer: '31', explanation: 'Step 1: 7 < 23 — take 71. Estimate: 71 ÷ 20 ≈ 3. Try 3: 3 × 23 = 69 ≤ 71 ✓. Check: 4 × 23 = 92 > 71 — so 3 is correct.\nStep 2: 71 − 69 = 2. Bring down 3 → 23.\nStep 3: 23 ÷ 23 = 1 exactly (1 × 23 = 23). 23 − 23 = 0. No remainder.\nAnswer: 713 ÷ 23 = 31 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A student divides 816 ÷ 24 and estimates the first quotient digit as 4, writing "4 × 24 = 96, but 96 > 81, so this can\'t be right." Find the correct first digit, then finish the division to find 816 ÷ 24.', answer: '816 ÷ 24 = 34', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34'], explanation: 'The student is correct that 4 is too high, since we take "81" as the first partial dividend (8 < 24, so use two digits 81), and 4 × 24 = 96 > 81. Try 3: 3 × 24 = 72 ≤ 81 ✓.\nStep 1: 81 − 72 = 9. Bring down 6 → 96.\nStep 2: 96 ÷ 24 = 4 exactly (4 × 24 = 96). 96 − 96 = 0. No remainder.\nAnswer: 816 ÷ 24 = 34 ✓' },
        { difficulty: 'Medium', question: 'Calculate 346 ÷ 11 and write the remainder.', answer: '31 remainder 5', checkMode: 'auto', correctAnswer: '31 remainder 5', correctAnswers: ['31 remainder 5', '31 r 5', '31r5', '31 rem 5'], explanation: 'Step 1: 3 < 11 — take 34. Estimate: 34 ÷ 10 ≈ 3. Try 3: 3 × 11 = 33 ≤ 34 ✓.\nStep 2: 34 − 33 = 1. Bring down 6 → 16.\nStep 3: 16 ÷ 11 = 1 rem 5. Try 1: 1 × 11 = 11 ≤ 16 ✓.\nStep 4: 16 − 11 = 5. Since 5 < 11, this is the final remainder.\nAnswer: 346 ÷ 11 = 31 remainder 5 ✓' },
        { difficulty: 'Medium', question: '528 tourists need to travel by coach for a day trip. Each coach holds 17 tourists.\n\na) How many full coaches are needed?\nb) How many tourists are left over?\nc) How many coaches in total are needed so that everyone has a seat?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full coaches', correctAnswer: '31', explanation: '528 ÷ 17: Step 1: 5 < 17 — take 52. Estimate 52 ÷ 20 ≈ 2. Try 3: 3 × 17 = 51 ≤ 52 ✓. Check: 4 × 17 = 68 > 52 — so 3 is correct.\nStep 2: 52 − 51 = 1. Bring down 8 → 18.\nStep 3: 18 ÷ 17 — try 1: 1 × 17 = 17 ≤ 18 ✓. Remainder 1 < 17, correct.\nAnswer: 31 full coaches (carry 31 × 17 = 527 tourists).' },
          { label: 'b) Tourists left over', correctAnswer: '1', explanation: 'The remainder from 528 ÷ 17 = 31 remainder 1.\n1 tourist is left over after filling 31 coaches.' },
          { label: 'c) Total coaches needed', correctAnswer: '32', explanation: 'Context decision: the 1 remaining tourist still needs a seat, so round up. Total: 31 + 1 = 32 coaches so that all 528 tourists have a seat.' },
        ] },
        { difficulty: 'Medium', question: 'A shopkeeper has 256 sweets and wants to pack them into jars that hold 9 sweets each. Explain, in your own words, why the number of full jars is not simply 256 ÷ 9 rounded to the nearest whole number, and state how many full jars he can pack.', answer: '256 ÷ 9 = 28 remainder 4. He can only pack 28 full jars, because the 4 leftover sweets are not enough to fill another jar. Rounding to the nearest whole number would give 28 as well here (28.44 rounds down), but the reasoning still matters — you cannot count a jar as full when it only has 4 out of 9 sweets, regardless of how the decimal rounds.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A community group collected R930 to be shared equally among 8 helpers.\n\na) How much does each helper get as a whole rand amount, and what is the remainder?\nb) Express the remainder as a fraction of R8.\nc) How much does each helper receive in rands and cents?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole rand amount with remainder', correctAnswer: '116 remainder 2', correctAnswers: ['116 remainder 2', '116 r 2', '116r2', '116 rem 2'], explanation: '930 ÷ 8: Step 1: 9 ÷ 8 = 1 rem 1. Bring down 3 → 13. Step 2: 13 ÷ 8 = 1 rem 5. Bring down 0 → 50. Step 3: 50 ÷ 8 = 6 rem 2.\nAnswer: 930 ÷ 8 = 116 remainder 2.' },
          { label: 'b) Remainder as a fraction', correctAnswer: '2/8', correctAnswers: ['2/8', '1/4'], explanation: 'Remainder is 2 out of 8 equal parts: 2/8 = 1/4.' },
          { label: 'c) Amount in rands and cents', correctAnswer: 'R116.25', correctAnswers: ['R116.25', '116.25', 'R116,25'], explanation: 'Remainder fraction: 2 ÷ 8 = 0.25. Each helper gets R116 + R0.25 = R116.25.' },
        ] },
        { difficulty: 'Medium', question: 'A cinema has 482 tickets to sell for two different showings, seated in rows.\n\nScenario A: rows of 15 seats.\nScenario B: rows of 20 seats.\n\na) How many full rows and how many leftover seats in Scenario A?\nb) How many full rows and how many leftover seats in Scenario B?\nc) Which scenario wastes fewer seats as leftovers?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rows of 15)', correctAnswer: '32 remainder 2', correctAnswers: ['32 remainder 2', '32 r 2', '32r2', '32 rem 2'], explanation: '482 ÷ 15: Step 1: 48 ÷ 15 = 3 rem 3. Bring down 2 → 32. Step 2: 32 ÷ 15 = 2 rem 2.\nAnswer: 482 ÷ 15 = 32 remainder 2.' },
          { label: 'b) Scenario B (rows of 20)', correctAnswer: '24 remainder 2', correctAnswers: ['24 remainder 2', '24 r 2', '24r2', '24 rem 2'], explanation: '482 ÷ 20: Step 1: 48 ÷ 20 = 2 rem 8. Bring down 2 → 82. Step 2: 82 ÷ 20 = 4 rem 2.\nAnswer: 482 ÷ 20 = 24 remainder 2.' },
          { label: 'c) Which wastes fewer seats', correctAnswer: 'equal', correctAnswers: ['equal', 'both the same', 'neither', 'same'], explanation: 'Both scenarios leave exactly 2 seats unused, so neither wastes fewer seats than the other — they are equally efficient.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A caterer has 256 cupcakes and wants to know how many boxes of 9 she can fill. Is this a sharing situation or a grouping situation? Write the number sentence and solve, stating how many full boxes and how many cupcakes are left over.', answer: 'This is a grouping situation — we know the size of each group (9) and want to find how many groups. Number sentence: 256 ÷ 9 = ?\n256 ÷ 9 = 28 remainder 4.\nShe can fill 28 full boxes, with 4 cupcakes left over.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A dairy collects 615 litres of milk and pours it into containers that hold 18 litres each.\n\na) Is this sharing or grouping? Write one word.\nb) Write the number sentence and calculate how many full containers are filled.\nc) How many litres are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sharing or grouping', correctAnswer: 'grouping', correctAnswers: ['grouping', 'Grouping'], explanation: 'We know the size of each group (18 litres per container) and want to find the number of groups (containers) — this is grouping.' },
          { label: 'b) Full containers', correctAnswer: '34', explanation: '615 ÷ 18: Step 1: 6 < 18 — take 61. Estimate 61 ÷ 20 ≈ 3. Try 3: 3 × 18 = 54 ≤ 61 ✓. Step 2: 61 − 54 = 7. Bring down 5 → 75. Step 3: 75 ÷ 18 — estimate ≈ 3. Try 4: 4 × 18 = 72 ≤ 75 ✓. Check 5 × 18 = 90 > 75 — so 4 is correct.\nAnswer: 615 ÷ 18 = 34 remainder 3, so 34 full containers.' },
          { label: 'c) Litres left over', correctAnswer: '3', explanation: 'The remainder from 615 ÷ 18 = 34 remainder 3, so 3 litres are left over.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A school has 540 pencils for a stationery drive.\n\nScenario A: The pencils are shared equally among 9 classes. How many pencils does each class get?\nScenario B: The pencils are packed into packets of 15 to sell. How many packets are made?\n\na) Answer for Scenario A.\nb) Answer for Scenario B.\nc) Which scenario is a sharing situation and which is a grouping situation?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '540 ÷ 9 = 60 pencils per class (sharing: we know the number of groups, 9 classes, and find the amount per group).' },
          { label: 'b) Scenario B', correctAnswer: '36', explanation: '540 ÷ 15 = 36 packets (grouping: we know the size of each group, 15 pencils per packet, and find the number of groups).' },
          { label: 'c) Sharing vs grouping', checkMode: 'self', answer: 'Scenario A is sharing — the total (540) is split equally among a known number of classes (9), and we find how many pencils each class gets.\nScenario B is grouping — we know the size of each packet (15) and find how many packets (groups) can be made from the total.' },
        ] },
        { difficulty: 'Hard', question: 'A theatre has 975 seats to be arranged in rows of 15 seats each for a concert, but the venue actually receives a delivery of 1 043 extra chairs to add to existing rows of 24 seats each in a different hall (each new seat costs R18 to install).\n\nUsing the 1 043 chairs and rows of 24:\na) How many full new rows of 24 can be made?\nb) How many chairs are left over after the full rows are made?\nc) If those leftover chairs are also installed, what is the total installation cost for all 1 043 chairs?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full new rows', correctAnswer: '43', explanation: '1 043 ÷ 24: Step 1: 10 < 24 — take 104. Estimate 104 ÷ 20 ≈ 5. Try 4: 4 × 24 = 96 ≤ 104 ✓. Check 5 × 24 = 120 > 104 — so 4 is correct. Step 2: 104 − 96 = 8. Bring down 3 → 83. Step 3: 83 ÷ 24 — try 3: 3 × 24 = 72 ≤ 83 ✓. Check 4 × 24 = 96 > 83 — so 3 is correct. Remainder: 83 − 72 = 11.\nAnswer: 1 043 ÷ 24 = 43 remainder 11, so 43 full rows.' },
          { label: 'b) Chairs left over', correctAnswer: '11', explanation: 'The remainder from 1 043 ÷ 24 = 43 remainder 11, so 11 chairs are left over.' },
          { label: 'c) Total installation cost', correctAnswer: 'R18774', correctAnswers: ['R18774', '18774', 'R18 774', '18 774'], explanation: 'All 1 043 chairs get installed, so the cost is 1 043 × R18 = R18 774. (Check: 1 000 × 18 = 18 000, plus 43 × 18 = 774, giving 18 000 + 774 = 18 774.)' },
        ] },
        { difficulty: 'Hard', question: 'A stationery supplier has 1 310 pencils to pack into boxes of 25 pencils each, and each full box sells for R18.\n\na) How many full boxes of 25 can be packed?\nb) How many pencils are left over?\nc) What is the total money made from selling only the full boxes?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full boxes', correctAnswer: '52', explanation: '1 310 ÷ 25: Step 1: 13 < 25 — take 131. Estimate 131 ÷ 25 ≈ 5. Try 5: 5 × 25 = 125 ≤ 131 ✓. Step 2: 131 − 125 = 6. Bring down 0 → 60. Step 3: 60 ÷ 25 — try 2: 2 × 25 = 50 ≤ 60 ✓. Check 3 × 25 = 75 > 60 — so 2 is correct. Remainder: 60 − 50 = 10.\nAnswer: 1 310 ÷ 25 = 52 remainder 10, so 52 full boxes.' },
          { label: 'b) Pencils left over', correctAnswer: '10', explanation: 'The remainder from 1 310 ÷ 25 = 52 remainder 10, so 10 pencils are left over.' },
          { label: 'c) Money from full boxes', correctAnswer: 'R936', correctAnswers: ['R936', '936'], explanation: 'Only full boxes are sold: 52 × R18 = R936. (Check: 50 × 18 = 900, plus 2 × 18 = 36, giving 900 + 36 = 936.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently apply long division, remainders in context, and division word problems.' },
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
        { difficulty: 'Easy', question: 'Use the fact family for 6 × 9 = 54 to write two division facts.', answer: '54 ÷ 9 = 6\n54 ÷ 6 = 9', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 108 ÷ 12 using your multiplication tables.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Think: which number × 12 = 108? 12 × 9 = 108, so 108 ÷ 12 = 9.' },
        { difficulty: 'Easy', question: 'The quotient of a division is 8 and the divisor is 9. What is the dividend? Write the multiplication fact you used.', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '8x9=72', '8×9=72', '9x8=72'], explanation: 'Dividend = quotient × divisor = 8 × 9 = 72. Check: 72 ÷ 9 = 8 ✓' },
        { difficulty: 'Easy', question: 'Calculate 4 025 ÷ 5 using long division.', answer: '805', checkMode: 'auto', correctAnswer: '805', correctAnswers: ['805'], explanation: 'Step 1: 4 < 5 — take 40. 40 ÷ 5 = 8. Write 8.\nStep 2: 8 × 5 = 40. 40 − 40 = 0. Bring down 2 → 02.\nStep 3: 02 ÷ 5 = 0 rem 2. Write 0 (zero placeholder).\nStep 4: 0 × 5 = 0. 02 − 0 = 2. Bring down 5 → 25.\nStep 5: 25 ÷ 5 = 5. Write 5.\nStep 6: 5 × 5 = 25. 25 − 25 = 0. No remainder.\nAnswer: 4 025 ÷ 5 = 805 ✓' },
        { difficulty: 'Easy', question: 'Calculate each of the following using long division, showing the zero placeholder where needed.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 7 236 ÷ 9 =', correctAnswer: '804', explanation: 'Step 1: 7 < 9 — take 72. 72 ÷ 9 = 8. Write 8.\nStep 2: 8 × 9 = 72. 72 − 72 = 0. Bring down 3 → 03.\nStep 3: 03 ÷ 9 = 0 rem 3. Write 0 (zero placeholder).\nStep 4: 0 × 9 = 0. 03 − 0 = 3. Bring down 6 → 36.\nStep 5: 36 ÷ 9 = 4. Write 4.\nStep 6: 4 × 9 = 36. 36 − 36 = 0. No remainder.\nAnswer: 7 236 ÷ 9 = 804 ✓' },
          { label: 'b) 5 544 ÷ 7 =', correctAnswer: '792', explanation: 'Step 1: 5 < 7 — take 55. 55 ÷ 7 = 7 rem 6. Write 7.\nStep 2: 7 × 7 = 49. 55 − 49 = 6. Bring down 4 → 64.\nStep 3: 64 ÷ 7 = 9 rem 1. Write 9.\nStep 4: 9 × 7 = 63. 64 − 63 = 1. Bring down 4 → 14.\nStep 5: 14 ÷ 7 = 2. Write 2.\nStep 6: 2 × 7 = 14. 14 − 14 = 0. No remainder.\nAnswer: 5 544 ÷ 7 = 792 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Calculate 3 417 ÷ 6 using long division and then check your answer using the inverse operation.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Quotient and remainder', correctAnswer: '569 remainder 3', correctAnswers: ['569 remainder 3', '569 r 3', '569r3', '569 rem 3'], explanation: 'Step 1: 3 < 6 — take 34. 34 ÷ 6 = 5 rem 4. Write 5.\nStep 2: 5 × 6 = 30. 34 − 30 = 4. Bring down 1 → 41.\nStep 3: 41 ÷ 6 = 6 rem 5. Write 6.\nStep 4: 6 × 6 = 36. 41 − 36 = 5. Bring down 7 → 57.\nStep 5: 57 ÷ 6 = 9 rem 3. Write 9.\nAnswer: 3 417 ÷ 6 = 569 remainder 3 ✓' },
          { label: 'b) Inverse check', correctAnswer: '569x6+3=3417', correctAnswers: ['569x6+3=3417', '3417', '569×6+3=3417'], explanation: 'Inverse check: (quotient × divisor) + remainder = dividend\n569 × 6 = 3 414, and 3 414 + 3 = 3 417 ✓' },
        ] },
        { difficulty: 'Easy', question: 'A warehouse shares 2 415 tins equally among 7 storage shelves. How many tins go on each shelf?', answer: '345', checkMode: 'auto', correctAnswer: '345', correctAnswers: ['345'], explanation: '2 415 ÷ 7: Step 1: 2 < 7 — take 24. 24 ÷ 7 = 3 rem 3. Write 3.\nStep 2: 3 × 7 = 21. 24 − 21 = 3. Bring down 1 → 31.\nStep 3: 31 ÷ 7 = 4 rem 3. Write 4.\nStep 4: 4 × 7 = 28. 31 − 28 = 3. Bring down 5 → 35.\nStep 5: 35 ÷ 7 = 5. Write 5.\nStep 6: 5 × 7 = 35. 35 − 35 = 0. No remainder.\nAnswer: 2 415 ÷ 7 = 345 tins per shelf ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step:\n884 ÷ 17', answer: '52', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52'], explanation: 'Step 1: 8 < 17 — take 88. Estimate: 88 ÷ 20 ≈ 4. Try 5: 5 × 17 = 85 ≤ 88 ✓. Check: 6 × 17 = 102 > 88 — so 5 is correct.\nStep 2: 88 − 85 = 3. Bring down 4 → 34.\nStep 3: 34 ÷ 17 = 2 exactly (2 × 17 = 34). 34 − 34 = 0. No remainder.\nAnswer: 884 ÷ 17 = 52 ✓' },
        { difficulty: 'Medium', question: 'Calculate using long division and show every step.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 546 ÷ 21 =', correctAnswer: '26', explanation: 'Step 1: 5 < 21 — take 54. Estimate: 54 ÷ 20 ≈ 2. Try 2: 2 × 21 = 42 ≤ 54 ✓. Check: 3 × 21 = 63 > 54 — so 2 is correct.\nStep 2: 54 − 42 = 12. Bring down 6 → 126.\nStep 3: 126 ÷ 21 = 6 exactly (6 × 21 = 126). 126 − 126 = 0. No remainder.\nAnswer: 546 ÷ 21 = 26 ✓' },
          { label: 'b) 912 ÷ 19 =', correctAnswer: '48', explanation: 'Step 1: 9 < 19 — take 91. Estimate: 91 ÷ 20 ≈ 4. Try 4: 4 × 19 = 76 ≤ 91 ✓. Check: 5 × 19 = 95 > 91 — so 4 is correct.\nStep 2: 91 − 76 = 15. Bring down 2 → 152.\nStep 3: 152 ÷ 19 = 8 exactly (8 × 19 = 152). 152 − 152 = 0. No remainder.\nAnswer: 912 ÷ 19 = 48 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A student divides 759 ÷ 12 and estimates the first quotient digit as 7, writing "7 × 12 = 84, but 84 > 75, so this can\'t be right." Find the correct first digit, then finish the division to find 759 ÷ 12.', answer: '759 ÷ 12 = 63 remainder 3', checkMode: 'auto', correctAnswer: '63 remainder 3', correctAnswers: ['63 remainder 3', '63 r 3', '63r3', '63 rem 3'], explanation: 'The student is correct that 7 is too high, since we take "75" as the first partial dividend (7 < 12, so use two digits 75), and 7 × 12 = 84 > 75. Try 6: 6 × 12 = 72 ≤ 75 ✓.\nStep 1: 75 − 72 = 3. Bring down 9 → 39.\nStep 2: 39 ÷ 12 — try 3: 3 × 12 = 36 ≤ 39 ✓. Check 4 × 12 = 48 > 39 — so 3 is correct. Remainder: 39 − 36 = 3.\nAnswer: 759 ÷ 12 = 63 remainder 3 ✓' },
        { difficulty: 'Medium', question: 'Calculate 413 ÷ 17 and write the remainder.', answer: '24 remainder 5', checkMode: 'auto', correctAnswer: '24 remainder 5', correctAnswers: ['24 remainder 5', '24 r 5', '24r5', '24 rem 5'], explanation: 'Step 1: 4 < 17 — take 41. Estimate: 41 ÷ 20 ≈ 2. Try 2: 2 × 17 = 34 ≤ 41 ✓.\nStep 2: 41 − 34 = 7. Bring down 3 → 73.\nStep 3: 73 ÷ 17 = 4 rem 5. Try 4: 4 × 17 = 68 ≤ 73 ✓.\nStep 4: 73 − 68 = 5. Since 5 < 17, this is the final remainder.\nAnswer: 413 ÷ 17 = 24 remainder 5 ✓' },
        { difficulty: 'Medium', question: '364 workers need to travel by shuttle bus to a mine site. Each shuttle holds 13 workers.\n\na) How many full shuttles are needed?\nb) How many workers are left over?\nc) How many shuttles in total are needed so that everyone has a seat?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full shuttles', correctAnswer: '28', explanation: '364 ÷ 13: Step 1: 3 < 13 — take 36. Estimate 36 ÷ 10 ≈ 3. Try 2: 2 × 13 = 26 ≤ 36 ✓. Check: 3 × 13 = 39 > 36 — so 2 is correct.\nStep 2: 36 − 26 = 10. Bring down 4 → 104.\nStep 3: 104 ÷ 13 = 8 exactly (8 × 13 = 104). 104 − 104 = 0. No remainder.\nAnswer: 28 full shuttles (carry 28 × 13 = 364 workers exactly).' },
          { label: 'b) Workers left over', correctAnswer: '0', explanation: 'The remainder from 364 ÷ 13 = 28 remainder 0.\nNo workers are left over — 28 shuttles fit everyone exactly.' },
          { label: 'c) Total shuttles needed', correctAnswer: '28', explanation: 'Context decision: since there is no remainder, no extra shuttle is needed. Total: 28 shuttles for all 364 workers.' },
        ] },
        { difficulty: 'Medium', question: 'A librarian has 287 books and wants to know how many crates that each hold 8 books she needs. Explain, in your own words, why the number of crates needed is not simply 287 ÷ 8 rounded to the nearest whole number, and state how many crates she needs so that every book fits somewhere.', answer: '287 ÷ 8 = 35 remainder 7. If she only used 35 crates, 7 books would not fit anywhere. Since every book must be packed (none can be left out), she must round UP and use 36 crates — even though 35.875 would round to 36 anyway here by normal rounding, the real reason is that a partly-filled crate is still needed, not because of decimal rounding rules.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A stokvel collected R1 100 to be shared equally among 8 members.\n\na) How much does each member get as a whole rand amount, and what is the remainder?\nb) Express the remainder as a fraction of R8.\nc) How much does each member receive in rands and cents?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole rand amount with remainder', correctAnswer: '137 remainder 4', correctAnswers: ['137 remainder 4', '137 r 4', '137r4', '137 rem 4'], explanation: '1 100 ÷ 8: Step 1: 11 ÷ 8 = 1 rem 3. Bring down 0 → 30. Step 2: 30 ÷ 8 = 3 rem 6. Bring down 0 → 60. Step 3: 60 ÷ 8 = 7 rem 4.\nAnswer: 1 100 ÷ 8 = 137 remainder 4.' },
          { label: 'b) Remainder as a fraction', correctAnswer: '4/8', correctAnswers: ['4/8', '1/2'], explanation: 'Remainder is 4 out of 8 equal parts: 4/8 = 1/2.' },
          { label: 'c) Amount in rands and cents', correctAnswer: 'R137.50', correctAnswers: ['R137.50', '137.50', 'R137,50', 'R137.5', '137.5'], explanation: 'Remainder fraction: 4 ÷ 8 = 0.5. Each member gets R137 + R0.50 = R137.50.' },
        ] },
        { difficulty: 'Medium', question: 'A wedding venue has 517 guests to seat in rows.\n\nScenario A: rows of 16 seats.\nScenario B: rows of 25 seats.\n\na) How many full rows and how many leftover guests in Scenario A?\nb) How many full rows and how many leftover guests in Scenario B?\nc) Which scenario needs an extra partly-filled row for fewer leftover guests?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rows of 16)', correctAnswer: '32 remainder 5', correctAnswers: ['32 remainder 5', '32 r 5', '32r5', '32 rem 5'], explanation: '517 ÷ 16: Step 1: 51 ÷ 16 = 3 rem 3. Bring down 7 → 37. Step 2: 37 ÷ 16 = 2 rem 5.\nAnswer: 517 ÷ 16 = 32 remainder 5.' },
          { label: 'b) Scenario B (rows of 25)', correctAnswer: '20 remainder 17', correctAnswers: ['20 remainder 17', '20 r 17', '20r17', '20 rem 17'], explanation: '517 ÷ 25: Step 1: 51 ÷ 25 = 2 rem 1. Bring down 7 → 17. Step 2: 17 ÷ 25 = 0 rem 17.\nAnswer: 517 ÷ 25 = 20 remainder 17.' },
          { label: 'c) Which scenario has fewer leftover guests', correctAnswer: 'Scenario A', correctAnswers: ['Scenario A', 'A', 'scenario a'], explanation: 'Scenario A leaves only 5 guests unseated in a partly-filled row, while Scenario B leaves 17. Scenario A has fewer leftover guests.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A florist has 287 flowers and wants to know how many bunches of 8 she can make. Is this a sharing situation or a grouping situation? Write the number sentence and solve, stating how many full bunches and how many flowers are left over.', answer: 'This is a grouping situation — we know the size of each group (8) and want to find how many groups. Number sentence: 287 ÷ 8 = ?\n287 ÷ 8 = 35 remainder 7.\nShe can make 35 full bunches, with 7 flowers left over.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A warehouse has 925 tins of paint and packs them onto pallets that hold 27 tins each.\n\na) Is this sharing or grouping? Write one word.\nb) Write the number sentence and calculate how many full pallets are packed.\nc) How many tins are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sharing or grouping', correctAnswer: 'grouping', correctAnswers: ['grouping', 'Grouping'], explanation: 'We know the size of each group (27 tins per pallet) and want to find the number of groups (pallets) — this is grouping.' },
          { label: 'b) Full pallets', correctAnswer: '34', explanation: '925 ÷ 27: Step 1: 9 < 27 — take 92. Estimate 92 ÷ 30 ≈ 3. Try 3: 3 × 27 = 81 ≤ 92 ✓. Step 2: 92 − 81 = 11. Bring down 5 → 115. Step 3: 115 ÷ 27 — estimate ≈ 4. Try 4: 4 × 27 = 108 ≤ 115 ✓. Check 5 × 27 = 135 > 115 — so 4 is correct.\nAnswer: 925 ÷ 27 = 34 remainder 7, so 34 full pallets.' },
          { label: 'c) Tins left over', correctAnswer: '7', explanation: 'The remainder from 925 ÷ 27 = 34 remainder 7, so 7 tins are left over.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A church has 360 hymn books for a special service.\n\nScenario A: The hymn books are shared equally among 6 sections of the church. How many books does each section get?\nScenario B: The hymn books are packed into boxes of 12 for storage. How many boxes are made?\n\na) Answer for Scenario A.\nb) Answer for Scenario B.\nc) Which scenario is a sharing situation and which is a grouping situation?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '360 ÷ 6 = 60 hymn books per section (sharing: we know the number of groups, 6 sections, and find the amount per group).' },
          { label: 'b) Scenario B', correctAnswer: '30', explanation: '360 ÷ 12 = 30 boxes (grouping: we know the size of each group, 12 books per box, and find the number of groups).' },
          { label: 'c) Sharing vs grouping', checkMode: 'self', answer: 'Scenario A is sharing — the total (360) is split equally among a known number of sections (6), and we find how many hymn books each section gets.\nScenario B is grouping — we know the size of each box (12) and find how many boxes (groups) can be made from the total.' },
        ] },
        { difficulty: 'Hard', question: 'A conference centre has 759 chairs to be arranged in rows of 12 chairs each, and separately receives a delivery of 2 295 extra chairs to add to rows of 40 seats each in the main hall (each new seat costs R14 to install).\n\nUsing the 2 295 chairs and rows of 40:\na) How many full new rows of 40 can be made?\nb) How many chairs are left over after the full rows are made?\nc) If those leftover chairs are also installed, what is the total installation cost for all 2 295 chairs?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full new rows', correctAnswer: '57', explanation: '2 295 ÷ 40: Step 1: 22 < 40 — take 229. Estimate 229 ÷ 40 ≈ 5. Try 5: 5 × 40 = 200 ≤ 229 ✓. Step 2: 229 − 200 = 29. Bring down 5 → 295. Step 3: 295 ÷ 40 — try 7: 7 × 40 = 280 ≤ 295 ✓. Check 8 × 40 = 320 > 295 — so 7 is correct. Remainder: 295 − 280 = 15.\nAnswer: 2 295 ÷ 40 = 57 remainder 15, so 57 full rows.' },
          { label: 'b) Chairs left over', correctAnswer: '15', explanation: 'The remainder from 2 295 ÷ 40 = 57 remainder 15, so 15 chairs are left over.' },
          { label: 'c) Total installation cost', correctAnswer: 'R32130', correctAnswers: ['R32130', '32130', 'R32 130', '32 130'], explanation: 'All 2 295 chairs get installed, so the cost is 2 295 × R14 = R32 130. (Check: 2 000 × 14 = 28 000, plus 295 × 14 = 4 130, giving 28 000 + 4 130 = 32 130.)' },
        ] },
        { difficulty: 'Hard', question: 'A fruit exporter has 2 295 mangoes to pack into crates of 40 mangoes each, and each full crate is sold for R150.\n\na) How many full crates of 40 can be packed?\nb) How many mangoes are left over?\nc) What is the total money made from selling only the full crates?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full crates', correctAnswer: '57', explanation: '2 295 ÷ 40: Step 1: 22 < 40 — take 229. Estimate ≈ 5. Try 5: 5 × 40 = 200 ≤ 229 ✓. Step 2: 229 − 200 = 29. Bring down 5 → 295. Step 3: 295 ÷ 40 — try 7: 7 × 40 = 280 ≤ 295 ✓. Check 8 × 40 = 320 > 295 — so 7 is correct. Remainder: 295 − 280 = 15.\nAnswer: 2 295 ÷ 40 = 57 remainder 15, so 57 full crates.' },
          { label: 'b) Mangoes left over', correctAnswer: '15', explanation: 'The remainder from 2 295 ÷ 40 = 57 remainder 15, so 15 mangoes are left over.' },
          { label: 'c) Money from full crates', correctAnswer: 'R8550', correctAnswers: ['R8550', '8550', 'R8 550', '8 550'], explanation: 'Only full crates are sold: 57 × R150 = R8 550. (Check: 50 × 150 = 7 500, plus 7 × 150 = 1 050, giving 7 500 + 1 050 = 8 550.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply long division, remainders in context, and division word problems to real-world situations.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
