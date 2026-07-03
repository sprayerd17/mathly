import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (multiplication roles) ────────────────────────────────────
// units multiplication → blue    (#2563eb)
// tens multiplication  → green   (#16a34a)
// §1/3: placeholder zero → orange  (#ea580c)   §2: hundreds multiplication
// §1/3: final addition   → red     (#dc2626)   §2: placeholder zeros
// §2: final answer       → purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Multiplication',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING BY 2-DIGIT NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2-digit-numbers',
      title: 'Multiplying by 2-Digit Numbers',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 we multiply large numbers by <strong>2-digit numbers</strong>. We break the 2-digit number into <strong>tens</strong> and <strong>units</strong> and multiply separately, then add the results together. This is called the <strong>long multiplication method</strong>. Always multiply by the ${bl('units digit')} first, then by the ${gr('tens digit')} — remembering to add ${or('a zero as a placeholder')} when multiplying by the tens digit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('units multiplication')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tens multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('placeholder zero')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final addition')}</span>` +
        `</div>` +

        // ── Method steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The long multiplication method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply by the units digit')} — Multiply the large number by the units digit of the 2-digit number. Write the full result on the first line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Multiply by the tens digit')} — Multiply the large number by the tens digit. Write the result on the second line, starting with ${or('a zero placeholder')} in the units column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Place the zero')} — The ${or('zero placeholder')} shifts the second partial product one place to the left because the tens digit represents tens, not units. Never leave it out.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('Add the two partial products')} — Add the result from Step 1 and the result from Step 2. This sum is the final answer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why the placeholder zero matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you multiply by the <strong>tens digit</strong>, you are really multiplying by a multiple of ten (e.g. 20, 30, 50). The ${or('zero placeholder')} in the units column reflects this. Leaving it out would give an answer ten times too small — always write it before multiplying by the tens digit.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 3 456 × 24 = 82 944 ──────────────────────────────────
        {
          question: 'Calculate 3 456 × 24.',
          answer: `3 456 × 24 = ${re('82 944')}`,
          steps: [
            `${bl('Multiply by the units digit (4):')} 3 456 × ${bl('4')} = ${bl('13 824')}. Write ${bl('13 824')} on the first line.`,
            `${gr('Multiply by the tens digit (2):')} 3 456 × ${gr('2')} tens — first write ${or('0')} as a placeholder in the units column, then multiply: 3 456 × ${gr('20')} = ${gr('69 120')}. Write ${gr('69 12')}${or('0')} on the second line.`,
            `${re('Add the partial products:')} ${bl('13 824')} + ${gr('69 120')} = ${re('82 944')}.`,
            `<strong>Answer:</strong> 3 456 × 24 = ${re('82 944')} ✓`,
          ],
        },

        // ── Example 2: 12 345 × 36 = 444 420 ────────────────────────────────
        {
          question: 'Calculate 12 345 × 36.',
          answer: `12 345 × 36 = ${re('444 420')}`,
          steps: [
            `${bl('Multiply by the units digit (6):')} 12 345 × ${bl('6')} = ${bl('74 070')}. Write ${bl('74 070')} on the first line.`,
            `${gr('Multiply by the tens digit (3):')} 12 345 × ${gr('3')} tens — first write ${or('0')} as a placeholder in the units column, then multiply: 12 345 × ${gr('30')} = ${gr('370 350')}. Write ${gr('370 35')}${or('0')} on the second line.`,
            `${re('Add the partial products:')} ${bl('74 070')} + ${gr('370 350')} = ${re('444 420')}.`,
            `<strong>Answer:</strong> 12 345 × 36 = ${re('444 420')} ✓`,
          ],
        },

        // ── Example 3: Sipho word problem — 4 250 × 52 = 221 000 ─────────────
        {
          question: 'Sipho earns R4 250 per week. How much does he earn in 52 weeks?',
          answer: `Sipho earns ${re('R221 000')} in 52 weeks`,
          steps: [
            `Write the number sentence: 4 250 × 52 = ?`,
            `${bl('Multiply by the units digit (2):')} 4 250 × ${bl('2')} = ${bl('8 500')}. Write ${bl('8 500')} on the first line.`,
            `${gr('Multiply by the tens digit (5):')} 4 250 × ${gr('5')} tens — first write ${or('0')} as a placeholder in the units column, then multiply: 4 250 × ${gr('50')} = ${gr('212 500')}. Write ${gr('212 50')}${or('0')} on the second line.`,
            `${re('Add the partial products:')} ${bl('8 500')} + ${gr('212 500')} = ${re('221 000')}.`,
            `<strong>Answer:</strong> Sipho earns ${re('R221 000')} in 52 weeks. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 1 234 × 12.',
          answer: '14 808',
          checkMode: 'auto',
          correctAnswer: '14808',
          correctAnswers: ['14808', '14 808'],
          explanation: 'Step 1 — Multiply by units digit (2): 1 234 × 2 = 2 468.\nStep 2 — Multiply by tens digit (1): write 0 placeholder, then 1 234 × 10 = 12 340.\nStep 3 — Add partial products: 2 468 + 12 340 = 14 808 ✓',
        },

        // ── Q2 Easy ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 2 345 × 21.',
          answer: '49 245',
          checkMode: 'auto',
          correctAnswer: '49245',
          correctAnswers: ['49245', '49 245'],
          explanation: 'Step 1 — Multiply by units digit (1): 2 345 × 1 = 2 345.\nStep 2 — Multiply by tens digit (2): write 0 placeholder, then 2 345 × 20 = 46 900.\nStep 3 — Add partial products: 2 345 + 46 900 = 49 245 ✓',
        },

        // ── Q3 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 4 567 × 34.',
          answer: '155 278',
          checkMode: 'auto',
          correctAnswer: '155278',
          correctAnswers: ['155278', '155 278'],
          explanation: 'Step 1 — Multiply by units digit (4): 4 567 × 4 = 18 268.\nStep 2 — Multiply by tens digit (3): write 0 placeholder, then 4 567 × 30 = 137 010.\nStep 3 — Add partial products: 18 268 + 137 010 = 155 278 ✓',
        },

        // ── Q4 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 3 456 × 45.',
          answer: '155 520',
          checkMode: 'auto',
          correctAnswer: '155520',
          correctAnswers: ['155520', '155 520'],
          explanation: 'Step 1 — Multiply by units digit (5): 3 456 × 5 = 17 280.\nStep 2 — Multiply by tens digit (4): write 0 placeholder, then 3 456 × 40 = 138 240.\nStep 3 — Add partial products: 17 280 + 138 240 = 155 520 ✓',
        },

        // ── Q5 Hard ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 12 345 × 67.',
          answer: '827 115',
          checkMode: 'auto',
          correctAnswer: '827115',
          correctAnswers: ['827115', '827 115'],
          explanation: 'Step 1 — Multiply by units digit (7): 12 345 × 7 = 86 415.\nStep 2 — Multiply by tens digit (6): write 0 placeholder, then 12 345 × 60 = 740 700.\nStep 3 — Add partial products: 86 415 + 740 700 = 827 115 ✓',
        },

        // ── Q6 Hard ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says 3 456 × 24 = 82 904. Check his answer and explain if he is correct.',
          answer: '3 456 × 4 = 13 824. 3 456 × 20 = 69 120. 13 824 + 69 120 = 82 944. Sipho is incorrect — the correct answer is 82 944.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long multiplication layout showing 3 456 multiplied by 24 with the units row in blue showing 13 824 the tens row in green with orange placeholder zero showing 69 120 and the final addition in red giving 82 944" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a large number by a 2-digit number using long multiplication with colour coded steps for units blue tens green placeholder zero orange and final addition red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MULTIPLYING BY 3-DIGIT NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-3-digit-numbers',
      title: 'Multiplying by 3-Digit Numbers',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">When multiplying by a <strong>3-digit number</strong> we break it into <strong>hundreds</strong>, <strong>tens</strong> and <strong>units</strong> and multiply separately. We add ${re('one zero placeholder')} when multiplying by the ${gr('tens digit')} and ${re('two zero placeholders')} when multiplying by the ${or('hundreds digit')}. Then we add all three results together. This is an extension of the long multiplication method used for 2-digit numbers.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('units multiplication')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tens multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hundreds multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('placeholder zeros')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('final answer')}</span>` +
        `</div>` +

        // ── Method steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The long multiplication method for 3-digit numbers</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply by the units digit')} — Multiply the large number by the units digit. Write the full result on the first line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Multiply by the tens digit')} — Write ${re('one zero placeholder')} in the units column, then multiply by the tens digit. Write the result on the second line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiply by the hundreds digit')} — Write ${re('two zero placeholders')} in the units and tens columns, then multiply by the hundreds digit. Write the result on the third line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Add all three partial products')} — Add the results from Steps 1, 2 and 3 together. This sum is the ${pu('final answer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why placeholder zeros matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you multiply by the ${gr('tens digit')}, you are really multiplying by a multiple of ten — so you add ${re('one zero')}. When you multiply by the ${or('hundreds digit')}, you are multiplying by a multiple of 100 — so you add ${re('two zeros')}. These ${re('placeholder zeros')} shift each partial product into the correct column before adding. Leaving them out would give an answer that is too small.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 2 345 × 123 = 288 435 ────────────────────────────────
        {
          question: 'Calculate 2 345 × 123.',
          answer: `2 345 × 123 = ${pu('288 435')}`,
          steps: [
            `${bl('Multiply by the units digit (3):')} 2 345 × ${bl('3')} = ${bl('7 035')}. Write ${bl('7 035')} on the first line.`,
            `${gr('Multiply by the tens digit (2):')} 2 345 × ${gr('2')} tens — first write ${re('0')} as a placeholder in the units column, then multiply: 2 345 × ${gr('20')} = ${gr('46 90')}${re('0')}. Write ${gr('46 90')}${re('0')} on the second line.`,
            `${or('Multiply by the hundreds digit (1):')} 2 345 × ${or('1')} hundreds — first write ${re('00')} as two placeholder zeros in the units and tens columns, then multiply: 2 345 × ${or('100')} = ${or('234 5')}${re('00')}. Write ${or('234 5')}${re('00')} on the third line.`,
            `${pu('Add all three partial products:')} ${bl('7 035')} + ${gr('46 900')} + ${or('234 500')} = ${pu('288 435')}. <strong>Answer:</strong> 2 345 × 123 = ${pu('288 435')} ✓`,
          ],
        },

        // ── Example 2: 1 245 × 365 = 454 425 (factory word problem) ─────────
        {
          question: 'A factory makes 1 245 items per day. How many items does it make in 365 days?',
          answer: `The factory makes ${pu('454 425')} items in 365 days`,
          steps: [
            `Write the number sentence: 1 245 × 365 = ?`,
            `${bl('Multiply by the units digit (5):')} 1 245 × ${bl('5')} = ${bl('6 225')}. Write ${bl('6 225')} on the first line.`,
            `${gr('Multiply by the tens digit (6):')} 1 245 × ${gr('6')} tens — first write ${re('0')} as a placeholder in the units column, then multiply: 1 245 × ${gr('60')} = ${gr('74 70')}${re('0')}. Write ${gr('74 70')}${re('0')} on the second line.`,
            `${or('Multiply by the hundreds digit (3):')} 1 245 × ${or('3')} hundreds — first write ${re('00')} as two placeholder zeros in the units and tens columns, then multiply: 1 245 × ${or('300')} = ${or('373 5')}${re('00')}. Write ${or('373 5')}${re('00')} on the third line.`,
            `${pu('Add all three partial products:')} ${bl('6 225')} + ${gr('74 700')} + ${or('373 500')} = ${pu('454 425')} items. <strong>Answer:</strong> The factory makes ${pu('454 425')} items in 365 days. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Hard ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 2 345 × 123.',
          answer: '288 435',
          checkMode: 'auto',
          correctAnswer: '288435',
          correctAnswers: ['288435', '288 435'],
          explanation: 'Step 1 — Multiply by units digit (3): 2 345 × 3 = 7 035.\nStep 2 — Multiply by tens digit (2): write 0 placeholder, then 2 345 × 20 = 46 900.\nStep 3 — Multiply by hundreds digit (1): write 00 placeholders, then 2 345 × 100 = 234 500.\nStep 4 — Add all partial products: 7 035 + 46 900 + 234 500 = 288 435 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long multiplication layout showing 2 345 multiplied by 123 with the units row in blue showing 7 035 the tens row in green with one red placeholder zero showing 46 900 the hundreds row in orange with two red placeholder zeros showing 234 500 and the final addition in purple giving 288 435" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a large number by a 3-digit number using long multiplication with colour coded steps for units blue tens green hundreds orange placeholder zeros red and final answer purple" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MULTIPLES OF 10, 100 AND 1 000
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-of-10-100-1000',
      title: 'Multiples of 10, 100 and 1 000',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">There is a quick mental method for multiplying by 10, 100, 1 000, or any <strong>multiple of these</strong> (like 20, 30 or 400). When you multiply by 10 you ${or('add one zero')} to the end of the number. When you multiply by 100 you ${or('add two zeros')}. When you multiply by 1 000 you ${or('add three zeros')}. For multiples like 20, 30 or 400 you ${bl('multiply by the non-zero digit first')} and then ${or('add the zeros')}. This is a quick mental method that saves time.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('zeros added')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('non-zero digit multiplication')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The rules at a glance</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 10')} — ${or('Add one zero')} to the end of the number. e.g. 456 × 10 = 4 56${or('0')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 100')} — ${or('Add two zeros')} to the end of the number. e.g. 456 × 100 = 45 6${or('00')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('× 1 000')} — ${or('Add three zeros')} to the end of the number. e.g. 456 × 1 000 = 456 ${or('000')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('× multiples (20, 300, 4 000 …)')} — First ${bl('multiply by the non-zero digit')}, then count all the zeros in the multiple and ${or('add them')} to the end of the result.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Count the zeros in the multiplier</p>` +
        `<p style="margin:0;color:#1e3a8a;">When the multiplier ends in zeros (e.g. 200 has ${or('two zeros')}), ${bl('multiply by the non-zero part first')}, then ${or('attach all the zeros')} at the end. If the number being multiplied also ends in zeros, those zeros stay too — just count and attach all of them together.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 3 456 × 1 000 = 3 456 000 ────────────────────────────
        {
          question: 'Calculate 3 456 × 1 000.',
          answer: `3 456 × 1 000 = ${gr('3 456 000')}`,
          steps: [
            `Multiplying by 1 000 means ${or('adding three zeros')} to the end of the number.`,
            `3 456 × 1 000 = 3 456${or('000')}`,
            `<strong>Answer:</strong> 3 456 × 1 000 = ${gr('3 456 000')} ✓`,
          ],
        },

        // ── Example 2: 245 × 300 = 73 500 ───────────────────────────────────
        {
          question: 'Calculate 245 × 300.',
          answer: `245 × 300 = ${gr('73 500')}`,
          steps: [
            `Split 300 into ${bl('3')} × ${or('100')}.`,
            `${bl('Multiply 245 × 3')} = ${bl('735')}.`,
            `Then multiply by 100 — ${or('add two zeros')}: ${bl('735')} × ${or('100')} = ${bl('735')}${or('00')} = 73 500.`,
            `<strong>Answer:</strong> ${gr('73 500')} ✓`,
          ],
        },

        // ── Example 3: Lerato — 4 500 × 200 = 900 000 ───────────────────────
        {
          question: 'Lerato needs to calculate 4 500 × 200.',
          answer: `4 500 × 200 = ${gr('900 000')}`,
          steps: [
            `Split into 45 × ${or('100')} × ${or('200')}. Or think of it as ${bl('4 500 × 2')} × ${or('100')}.`,
            `${bl('4 500 × 2')} = ${bl('9 000')}.`,
            `${bl('9 000')} × ${or('100')} — ${or('add two zeros')}: ${bl('9 000')}${or('00')} = 900 000.`,
            `<strong>Answer:</strong> ${gr('900 000')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 345 × 100.',
          answer: '34 500',
          checkMode: 'auto',
          correctAnswer: '34500',
          correctAnswers: ['34500', '34 500'],
          explanation: 'Multiplying by 100 means adding two zeros to the end of the number.\n345 × 100 = 34 500 ✓',
        },

        // ── Q9 Medium ─────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 4 500 × 300.',
          answer: '1 350 000',
          checkMode: 'auto',
          correctAnswer: '1350000',
          correctAnswers: ['1350000', '1 350 000'],
          explanation: 'Split 300 into 3 × 100.\nStep 1 — Multiply by 3: 4 500 × 3 = 13 500.\nStep 2 — Multiply by 100 (add two zeros): 13 500 × 100 = 1 350 000 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three rows showing number times 10 with one orange zero appended, number times 100 with two orange zeros appended, and number times 1 000 with three orange zeros appended, plus a fourth row showing a multiple like 300 split into blue non-zero digit 3 times orange 100 with two zeros added" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply by 10 100 and 1 000 by adding orange zeros and how to multiply by multiples like 20 300 and 4 000 by first multiplying the blue non-zero digit then adding all orange zeros" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ESTIMATING AND PROBLEM SOLVING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-and-problem-solving',
      title: 'Estimating and Problem Solving',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">We can estimate multiplication answers by ${or('rounding numbers')} to the nearest suitable value before multiplying. This helps us check whether our ${gr('exact answer')} is reasonable. When solving multiplication word problems look for ${re('key words')} like ${re('each')}, ${re('per')}, ${re('every')}, ${re('times')} and ${re('groups of')}. These words tell us to multiply. Always write your final answer with the correct unit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rounded numbers')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('estimate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('exact answer')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('key words')}</span>` +
        `</div>` +

        // ── How to estimate ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to estimate a multiplication answer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Round')} — Round each number to the nearest 10, 100 or 1 000 to make the calculation easy.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Estimate')} — Multiply the ${or('rounded numbers')} together. This is your ${bl('estimate')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Check')} — Calculate the ${gr('exact answer')} and compare it to your ${bl('estimate')}. If they are close, your ${gr('exact answer')} is reasonable.</p>` +
        `</div>` +

        `</div>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key words for multiplication word problems</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        ['each', 'per', 'every', 'times', 'groups of'].map(w => `<span style="background:#fecaca;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#dc2626;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always include the unit in your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">After calculating, re-read the question and write your final answer with the correct unit — for example km, rand (R), or items. A number without a unit is an incomplete answer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Estimate 4 876 × 32 ───────────────────────────────────
        {
          question: 'Estimate 4 876 × 32.',
          answer: `${bl('Estimate:')} ${or('5 000')} × ${or('30')} = ${bl('150 000')}`,
          steps: [
            `${or('Round')} 4 876 to ${or('5 000')}.`,
            `${or('Round')} 32 to ${or('30')}.`,
            `${bl('Estimate:')} ${or('5 000')} × ${or('30')} = ${bl('150 000')}.`,
            `The ${gr('exact answer')} should be close to ${bl('150 000')}.`,
          ],
        },

        // ── Example 2: School buys 24 calculators at R345 each ───────────────
        {
          question: 'A school buys 24 calculators at R345 each. What is the total cost?',
          answer: `The total cost is ${gr('R8 280')}`,
          steps: [
            `${re('Key word:')} <em>"each"</em> — multiply 345 × 24.`,
            `345 × 4 = ${bl('1 380')}.`,
            `345 × 20 = ${bl('6 900')}.`,
            `Add: ${bl('1 380')} + ${bl('6 900')} = ${gr('8 280')}. The total cost is ${gr('R8 280')}.`,
            `${bl('Estimate check:')} ${or('300')} × ${or('25')} = ${bl('7 500')} — close to ${gr('R8 280')} so reasonable. ✓`,
          ],
        },

        // ── Example 3: Amahle drives 125 km every day for 365 days ───────────
        {
          question: 'Amahle drives 125 km every day for 365 days. How many kilometres does she drive in a year?',
          answer: `Amahle drives ${gr('45 625 km')} in a year`,
          steps: [
            `${re('Key word:')} <em>"every"</em> — multiply 125 × 365.`,
            `125 × 5 = ${bl('625')}.`,
            `125 × 60 = ${bl('7 500')}.`,
            `125 × 300 = ${bl('37 500')}.`,
            `Add: ${bl('625')} + ${bl('7 500')} + ${bl('37 500')} = ${gr('45 625')} km. Amahle drives ${gr('45 625 km')} in a year.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium ────────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Estimate 5 876 × 42 by rounding to the nearest thousand and ten.',
          answer: '240 000',
          checkMode: 'auto',
          correctAnswer: '240000',
          correctAnswers: ['240000', '240 000'],
          explanation: 'Round 5 876 to the nearest thousand: 6 000.\nRound 42 to the nearest ten: 40.\nEstimate: 6 000 × 40 = 240 000 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A factory produces 2 345 items per day. How many items does it produce in 28 days?',
          answer: '65 660',
          checkMode: 'auto',
          correctAnswer: '65660',
          correctAnswers: ['65660', '65 660'],
          explanation: 'Step 1 — Multiply by units digit (8): 2 345 × 8 = 18 760.\nStep 2 — Multiply by tens digit (2): write 0 placeholder, then 2 345 × 20 = 46 900.\nStep 3 — Add partial products: 18 760 + 46 900 = 65 660.\nThe factory produces 65 660 items in 28 days ✓',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato buys 365 boxes of juice. Each box contains 24 cartons and each carton costs R4. What is the total cost?',
          answer: 'First find total cartons: 365 × 24 = 8 760. Then find total cost: 8 760 × R4 = R35 040.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples side by side: first showing 4 876 rounded in orange to 5 000 and 32 rounded in orange to 30 with blue estimate of 150 000, second showing 345 times 24 with partial products 1 380 and 6 900 in blue adding to exact answer in green R8 280 and estimate check 300 times 25 equals 7 500 in blue, third showing 125 times 365 split into three rows with partial products in blue adding to exact answer in green 45 625 km" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to estimate a multiplication answer by rounding numbers in orange then multiplying to get the estimate in blue and comparing to the exact answer in green, followed by two word problems solved by identifying key words in red" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have mastered multiplication.' },
      { minScore: 9, message: 'Great work! You have a strong understanding of multiplication.' },
      { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
