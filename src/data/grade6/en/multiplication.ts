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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-4 Multiplying by 2-digit numbers | 5-8 Multiplying by 3-digit
    // numbers | 9-12 Multiples of 10/100/1000 | 13-15 Estimating by rounding |
    // 16-19 Word problems with key words
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block: Multiplying by 2-digit numbers (0-4) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n2 143 × 13', correctAnswer: '27859', correctAnswers: ['27859', '27 859'], explanation: 'Step 1 — Multiply by units digit (3): 2 143 × 3 = 6 429.\nStep 2 — Multiply by tens digit (1): write 0 placeholder, then 2 143 × 10 = 21 430.\nStep 3 — Add partial products: 6 429 + 21 430 = 27 859 ✓', answer: '27 859' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Work out the product of 3 245 and 24, showing the units row and tens row separately.', correctAnswer: '77880', correctAnswers: ['77880', '77 880'], explanation: 'Step 1 — Multiply by units digit (4): 3 245 × 4 = 12 980.\nStep 2 — Multiply by tens digit (2): write 0 placeholder, then 3 245 × 20 = 64 900.\nStep 3 — Add partial products: 12 980 + 64 900 = 77 880 ✓', answer: '77 880' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Zanele earns R3 850 per week. How much does she earn in 24 weeks?', correctAnswer: '92400', correctAnswers: ['92400', '92 400', 'r92400', 'R92 400'], explanation: '"Per week" tells us to multiply: 3 850 × 24.\nUnits (4): 3 850 × 4 = 15 400.\nTens (2): write 0 placeholder, 3 850 × 20 = 77 000.\nAdd: 15 400 + 77 000 = 92 400.\nZanele earns R92 400 in 24 weeks.', answer: 'R92 400' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A delivery truck travels 245 km every day. How far does it travel in 36 days?', correctAnswer: '8820', correctAnswers: ['8820', '8 820'], explanation: '"Every day" tells us to multiply: 245 × 36.\nUnits (6): 245 × 6 = 1 470.\nTens (3): write 0 placeholder, 245 × 30 = 7 350.\nAdd: 1 470 + 7 350 = 8 820.\nThe truck travels 8 820 km in 36 days.', answer: '8 820 km' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner works out 4 256 × 23 like this:\n\n  4 256\n×    23\n———————\n 12 768   (4 256 × 3)\n  8 512   (4 256 × 2, no placeholder zero written)\n———————\n 21 280\n\nThe learner gives 21 280 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 4 256 × 23 = 97 888.\n\nStep 1 — Units digit (3): 4 256 × 3 = 12 768.\nStep 2 — Tens digit (2): this means 4 256 × 20, not 4 256 × 2. The learner forgot the placeholder zero, so their second row was ten times too small (8 512 instead of 85 120).\nCorrect Step 2: write a 0 placeholder in the units column, then 4 256 × 20 = 85 120.\nStep 3 — Add: 12 768 + 85 120 = 97 888.\n\nThe learner\'s mistake was leaving out the placeholder zero when multiplying by the tens digit, which made the whole tens row (and therefore the final answer) ten times too small.\n\nCorrect answer: 97 888' },

        // ── Block: Multiplying by 3-digit numbers (5-8) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n3 124 × 213', correctAnswer: '665412', correctAnswers: ['665412', '665 412'], explanation: 'Step 1 — Units digit (3): 3 124 × 3 = 9 372.\nStep 2 — Tens digit (1): write 0 placeholder, 3 124 × 10 = 31 240.\nStep 3 — Hundreds digit (2): write 00 placeholders, 3 124 × 200 = 624 800.\nStep 4 — Add: 9 372 + 31 240 + 624 800 = 665 412 ✓', answer: '665 412' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A factory produces 1 850 tins of paint every day. How many tins does it produce in a year of 365 days?', correctAnswer: '675250', correctAnswers: ['675250', '675 250'], explanation: '"Every day" for 365 days tells us to multiply: 1 850 × 365.\nUnits (5): 1 850 × 5 = 9 250.\nTens (6): write 0 placeholder, 1 850 × 60 = 111 000.\nHundreds (3): write 00 placeholders, 1 850 × 300 = 555 000.\nAdd: 9 250 + 111 000 + 555 000 = 675 250.\nThe factory produces 675 250 tins in a year.', answer: '675 250 tins' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A warehouse orders 245 crates every week for a 112-week school term. Each crate holds 6 tins of glue. How many tins of glue are ordered in total for the term?\n\nFirst find the total number of crates, then multiply by the tins per crate.', correctAnswer: '164640', correctAnswers: ['164640', '164 640'], explanation: 'Step 1 — Total crates: 245 × 112 = 27 440 crates.\nStep 2 — Total tins: 27 440 × 6 = 164 640 tins.\n\nWorking for Step 1 (245 × 112): units (2) 245×2=490, tens (1) 2 450, hundreds (1) 24 500. Add: 490 + 2 450 + 24 500 = 27 440.\n\nThe warehouse orders 164 640 tins of glue for the term.', answer: '164 640 tins' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Which gives the larger product: 3 245 × 124 or 3 198 × 128? Calculate both and say which is bigger, and by how much.', answer: '3 245 × 124 = 402 380\n(Units 4: 3 245×4=12 980. Tens 2: 3 245×20=64 900. Hundreds 1: 3 245×100=324 500. Add: 12 980+64 900+324 500=402 380.)\n\n3 198 × 128 = 409 344\n(Units 8: 3 198×8=25 584. Tens 2: 3 198×20=63 960. Hundreds 1: 3 198×100=319 800. Add: 25 584+63 960+319 800=409 344.)\n\n3 198 × 128 gives the larger product. It is bigger by 409 344 − 402 380 = 6 964.' },

        // ── Block: Multiples of 10, 100 and 1 000 (9-12) ─────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 456 × 10.', correctAnswer: '4560', correctAnswers: ['4560', '4 560'], explanation: 'Multiplying by 10 means adding one zero to the end of the number.\n456 × 10 = 4 560 ✓', answer: '4 560' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 782 × 100.', correctAnswer: '78200', correctAnswers: ['78200', '78 200'], explanation: 'Multiplying by 100 means adding two zeros to the end of the number.\n782 × 100 = 78 200 ✓', answer: '78 200' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate 645 × 1 000.', correctAnswer: '645000', correctAnswers: ['645000', '645 000'], explanation: 'Multiplying by 1 000 means adding three zeros to the end of the number.\n645 × 1 000 = 645 000 ✓', answer: '645 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A shop buys 45 boxes of stationery at R300 each. What is the total cost?', correctAnswer: '13500', correctAnswers: ['13500', '13 500', 'r13500', 'R13 500'], explanation: 'Split 300 into 3 × 100.\nStep 1 — Multiply by the non-zero digit: 45 × 3 = 135.\nStep 2 — Attach the two zeros from 100: 135 × 100 = 13 500.\nThe total cost is R13 500.', answer: 'R13 500' },

        // ── Block: Estimating by rounding (13-15) ─────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 4 876 × 38 by rounding 4 876 to the nearest thousand and 38 to the nearest ten.', correctAnswer: '200000', correctAnswers: ['200000', '200 000'], explanation: 'Round 4 876 to the nearest thousand: 5 000.\nRound 38 to the nearest ten: 40.\nEstimate: 5 000 × 40 = 200 000\n\n(The exact answer, 4 876 × 38 = 185 288, is reasonably close to this estimate.)', answer: '200 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner calculates 3 245 × 47 and gets 15 251. Use rounding to estimate the answer, and use your estimate to decide whether 15 251 is reasonable. If it is not, give the correct exact answer.', answer: 'Estimate: round 3 245 to 3 000 and 47 to 50.\n3 000 × 50 = 150 000\n\nThe learner\'s answer of 15 251 is about ten times too small compared to the estimate of 150 000 — it is not reasonable. It looks like the learner dropped a digit or misplaced the decimal/place value somewhere in their working.\n\nThe correct exact answer is 3 245 × 47 = 152 515 (Units 7: 3 245×7=22 715. Tens 4: 3 245×40=129 800. Add: 22 715+129 800=152 515), which is indeed close to the estimate of 150 000.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Before placing a stock order, a shop owner wants to check her budget. She needs 89 packets of light bulbs at about R312 each. She has budgeted R27 000. Estimate the total cost by rounding, and say whether her budget is likely enough. Then calculate the exact cost to confirm.', answer: 'Estimate: round 89 to 90 and 312 to 300.\n90 × 300 = 27 000\n\nThis estimate exactly matches her budget of R27 000, so it looks like it might just barely be enough — but it is worth calculating exactly to be sure, since the estimate is only approximate.\n\nExact cost: 89 × 312 = 27 768\n(Units 2: 89×2=178. Tens 1: 89×10=890. Hundreds 3: 89×300=26 700. Add: 178+890+26 700=27 768.)\n\nThe exact cost of R27 768 is R768 more than her budget of R27 000, so her budget is NOT quite enough — the estimate looked close, but rounding down on 312 to 300 hid the shortfall.' },

        // ── Block: Word problems with key words and units (16-19) ────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'A stationery shop sells 18 calculators at R67 each. What is the total amount of money earned?', correctAnswer: '1206', correctAnswers: ['1206', '1 206', 'r1206', 'R1 206'], explanation: '"Each" tells us to multiply: 67 × 18.\nUnits (8): 67 × 8 = 536.\nTens (1): write 0 placeholder, 67 × 10 = 670.\nAdd: 536 + 670 = 1 206.\nThe shop earns R1 206.', answer: 'R1 206' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Thabo earns R485 per week working part-time. He works for 26 weeks over the school holidays combined. How much does he earn in total?', correctAnswer: '12610', correctAnswers: ['12610', '12 610', 'r12610', 'R12 610'], explanation: '"Per week" for 26 weeks tells us to multiply: 485 × 26.\nUnits (6): 485 × 6 = 2 910.\nTens (2): write 0 placeholder, 485 × 20 = 9 700.\nAdd: 2 910 + 9 700 = 12 610.\nThabo earns R12 610 in total.', answer: 'R12 610' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A community hall can seat 213 people, and it is fully booked for 48 events this year. First estimate the total number of people who will attend by rounding, then calculate the exact total.', answer: 'Estimate: round 213 to 200 and 48 to 50.\n200 × 50 = 10 000 people (estimate).\n\nExact: 213 × 48 = 10 224\n(Units 8: 213×8=1 704. Tens 4: 213×40=8 520. Add: 1 704+8 520=10 224.)\n\nThe exact total is 10 224 people, which is close to the estimate of 10 000, so it is reasonable.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Two part-time jobs are available to Naledi for the school holidays. Job A pays R350 per week for 24 weeks. Job B pays R430 per week for 18 weeks. Which job pays more in total, and by how much?', answer: 'Job A: 350 × 24 = 8 400\n(Units 4: 350×4=1 400. Tens 2: 350×20=7 000. Add: 1 400+7 000=8 400.)\n\nJob B: 430 × 18 = 7 740\n(Units 8: 430×8=3 440. Tens 1: 430×10=4 300. Add: 3 440+4 300=7 740.)\n\nJob A pays more in total. It pays 8 400 − 7 740 = R660 more than Job B, even though Job B has a higher weekly rate — because Job A runs for more weeks.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multiplying by 2-digit and 3-digit numbers, mental strategies, estimating and word problems.' },
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
        // ── Block: Multiplying by 2-digit numbers (0-4) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n4 127 × 16', correctAnswer: '66032', correctAnswers: ['66032', '66 032'], explanation: 'Step 1 — Units digit (6): 4 127 × 6 = 24 762.\nStep 2 — Tens digit (1): write 0 placeholder, 4 127 × 10 = 41 270.\nStep 3 — Add: 24 762 + 41 270 = 66 032 ✓', answer: '66 032' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Find the product of 5 236 and 32, writing both partial products before adding.', correctAnswer: '167552', correctAnswers: ['167552', '167 552'], explanation: 'Step 1 — Units digit (2): 5 236 × 2 = 10 472.\nStep 2 — Tens digit (3): write 0 placeholder, 5 236 × 30 = 157 080.\nStep 3 — Add: 10 472 + 157 080 = 167 552 ✓', answer: '167 552' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bongani earns R2 650 per month. How much does he earn over 18 months?', correctAnswer: '47700', correctAnswers: ['47700', '47 700', 'r47700', 'R47 700'], explanation: '"Per month" tells us to multiply: 2 650 × 18.\nUnits (8): 2 650 × 8 = 21 200.\nTens (1): write 0 placeholder, 2 650 × 10 = 26 500.\nAdd: 21 200 + 26 500 = 47 700.\nBongani earns R47 700 over 18 months.', answer: 'R47 700' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A bakery produces 156 loaves of bread every day. How many loaves does it produce in 45 days?', correctAnswer: '7020', correctAnswers: ['7020', '7 020'], explanation: '"Every day" tells us to multiply: 156 × 45.\nUnits (5): 156 × 5 = 780.\nTens (4): write 0 placeholder, 156 × 40 = 6 240.\nAdd: 780 + 6 240 = 7 020.\nThe bakery produces 7 020 loaves in 45 days.', answer: '7 020 loaves' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner works out 3 187 × 29 like this:\n\n  3 187\n×    29\n———————\n 28 683   (3 187 × 9)\n  6 374   (3 187 × 2, no placeholder zero written)\n———————\n 35 057\n\nThe learner gives 35 057 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 3 187 × 29 = 92 423.\n\nStep 1 — Units digit (9): 3 187 × 9 = 28 683.\nStep 2 — Tens digit (2): this means 3 187 × 20, not 3 187 × 2. The learner forgot the placeholder zero, so their second row was ten times too small (6 374 instead of 63 740).\nCorrect Step 2: write a 0 placeholder in the units column, then 3 187 × 20 = 63 740.\nStep 3 — Add: 28 683 + 63 740 = 92 423.\n\nThe learner\'s mistake was leaving out the placeholder zero when multiplying by the tens digit.\n\nCorrect answer: 92 423' },

        // ── Block: Multiplying by 3-digit numbers (5-8) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n2 456 × 318', correctAnswer: '781008', correctAnswers: ['781008', '781 008'], explanation: 'Step 1 — Units digit (8): 2 456 × 8 = 19 648.\nStep 2 — Tens digit (1): write 0 placeholder, 2 456 × 10 = 24 560.\nStep 3 — Hundreds digit (3): write 00 placeholders, 2 456 × 300 = 736 800.\nStep 4 — Add: 19 648 + 24 560 + 736 800 = 781 008 ✓', answer: '781 008' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A factory produces 2 140 plastic bottles every day. How many bottles does it produce in a year of 365 days?', correctAnswer: '781100', correctAnswers: ['781100', '781 100'], explanation: '"Every day" for 365 days tells us to multiply: 2 140 × 365.\nUnits (5): 2 140 × 5 = 10 700.\nTens (6): write 0 placeholder, 2 140 × 60 = 128 400.\nHundreds (3): write 00 placeholders, 2 140 × 300 = 642 000.\nAdd: 10 700 + 128 400 + 642 000 = 781 100.\nThe factory produces 781 100 bottles in a year.', answer: '781 100 bottles' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A stationery supplier delivers 36 boxes of pens for a school term. Each box contains 24 cartons, and each carton costs R8. What is the total cost for the term?\n\nFirst find the total number of cartons, then multiply by the cost per carton.', correctAnswer: '6912', correctAnswers: ['6912', '6 912', 'r6912', 'R6 912'], explanation: 'Step 1 — Total cartons: 36 × 24 = 864 cartons.\nStep 2 — Total cost: 864 × 8 = 6 912.\n\nWorking for Step 1 (36 × 24): units (4) 36×4=144, tens (2) 720. Add: 144 + 720 = 864.\n\nThe total cost for the term is R6 912.', answer: 'R6 912' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Which gives the larger product: 4 123 × 216 or 4 056 × 219? Calculate both and say which is bigger, and by how much.', answer: '4 123 × 216 = 890 568\n(Units 6: 4 123×6=24 738. Tens 1: 4 123×10=41 230. Hundreds 2: 4 123×200=824 600. Add: 24 738+41 230+824 600=890 568.)\n\n4 056 × 219 = 888 264\n(Units 9: 4 056×9=36 504. Tens 1: 4 056×10=40 560. Hundreds 2: 4 056×200=811 200. Add: 36 504+40 560+811 200=888 264.)\n\n4 123 × 216 gives the larger product. It is bigger by 890 568 − 888 264 = 2 304.' },

        // ── Block: Multiples of 10, 100 and 1 000 (9-12) ─────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 389 × 10.', correctAnswer: '3890', correctAnswers: ['3890', '3 890'], explanation: 'Multiplying by 10 means adding one zero to the end of the number.\n389 × 10 = 3 890 ✓', answer: '3 890' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 214 × 100.', correctAnswer: '21400', correctAnswers: ['21400', '21 400'], explanation: 'Multiplying by 100 means adding two zeros to the end of the number.\n214 × 100 = 21 400 ✓', answer: '21 400' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner says 528 × 100 = 5 280. Is the learner correct? Explain, and give the correct answer.', answer: 'The learner is NOT correct.\n\nMultiplying by 100 means adding two zeros to the end of the number, not one. The learner only added one zero (getting 5 280), which is actually 528 × 10, not 528 × 100.\n\nCorrect answer: 528 × 100 = 52 800.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A charity repeats the same food parcel donation 28 times, and each round costs R4 000. What is the total amount donated?', correctAnswer: '112000', correctAnswers: ['112000', '112 000', 'r112000', 'R112 000'], explanation: 'Split 4 000 into 4 × 1 000.\nStep 1 — Multiply by the non-zero digit: 28 × 4 = 112.\nStep 2 — Attach the three zeros from 1 000: 112 × 1 000 = 112 000.\nThe total amount donated is R112 000.', answer: 'R112 000' },

        // ── Block: Estimating by rounding (13-15) ─────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 6 234 × 53 by rounding 6 234 to the nearest thousand and 53 to the nearest ten.', correctAnswer: '300000', correctAnswers: ['300000', '300 000'], explanation: 'Round 6 234 to the nearest thousand: 6 000.\nRound 53 to the nearest ten: 50.\nEstimate: 6 000 × 50 = 300 000\n\n(The exact answer, 6 234 × 53 = 330 402, is reasonably close to this estimate.)', answer: '300 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner calculates 2 876 × 34 and gets 9 778. Use rounding to estimate the answer, and use your estimate to decide whether 9 778 is reasonable. If it is not, give the correct exact answer.', answer: 'Estimate: round 2 876 to 3 000 and 34 to 30.\n3 000 × 30 = 90 000\n\nThe learner\'s answer of 9 778 is about ten times too small compared to the estimate of 90 000 — it is not reasonable. It looks like the learner dropped a digit somewhere, possibly forgetting the placeholder zero when multiplying by the tens digit.\n\nThe correct exact answer is 2 876 × 34 = 97 784 (Units 4: 2 876×4=11 504. Tens 3: 2 876×30=86 280. Add: 11 504+86 280=97 784), which is close to the estimate of 90 000.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Before placing a stock order, a shop owner wants to check her budget. She needs 412 packets of stationery at about R58 each. She has budgeted R23 200. Estimate the total cost by rounding, and say whether her budget is likely enough. Then calculate the exact cost to confirm.', answer: 'Estimate: round 412 to 400 and 58 to 60.\n400 × 60 = 24 000\n\nThis estimate is already above her budget of R23 200, so it looks like her budget might not be quite enough — but it is worth calculating exactly to be sure.\n\nExact cost: 412 × 58 = 23 896\n(Units 8: 412×8=3 296. Tens 5: 412×50=20 600. Add: 3 296+20 600=23 896.)\n\nThe exact cost of R23 896 is R696 more than her budget of R23 200, so her budget is NOT quite enough.' },

        // ── Block: Word problems with key words and units (16-19) ────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'A sports shop sells 34 rugby balls at R89 each. What is the total amount of money earned?', correctAnswer: '3026', correctAnswers: ['3026', '3 026', 'r3026', 'R3 026'], explanation: '"Each" tells us to multiply: 89 × 34.\nUnits (4): 89 × 4 = 356.\nTens (3): write 0 placeholder, 89 × 30 = 2 670.\nAdd: 356 + 2 670 = 3 026.\nThe shop earns R3 026.', answer: 'R3 026' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Palesa earns R625 per week working part-time. She works for 22 weeks during the year. How much does she earn in total?', correctAnswer: '13750', correctAnswers: ['13750', '13 750', 'r13750', 'R13 750'], explanation: '"Per week" for 22 weeks tells us to multiply: 625 × 22.\nUnits (2): 625 × 2 = 1 250.\nTens (2): write 0 placeholder, 625 × 20 = 12 500.\nAdd: 1 250 + 12 500 = 13 750.\nPalesa earns R13 750 in total.', answer: 'R13 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A minibus can carry 324 passengers over the course of a day, and it runs this same route for 56 days straight. First estimate the total number of passengers by rounding, then calculate the exact total.', answer: 'Estimate: round 324 to 300 and 56 to 60.\n300 × 60 = 18 000 passengers (estimate).\n\nExact: 324 × 56 = 18 144\n(Units 6: 324×6=1 944. Tens 5: 324×50=16 200. Add: 1 944+16 200=18 144.)\n\nThe exact total is 18 144 passengers, which is close to the estimate of 18 000, so it is reasonable.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Two part-time jobs are available to Kagiso for the school holidays. Job A pays R245 per week for 32 weeks. Job B pays R275 per week for 28 weeks. Which job pays more in total, and by how much?', answer: 'Job A: 245 × 32 = 7 840\n(Units 2: 245×2=490. Tens 3: 245×30=7 350. Add: 490+7 350=7 840.)\n\nJob B: 275 × 28 = 7 700\n(Units 8: 275×8=2 200. Tens 2: 275×20=5 500. Add: 2 200+5 500=7 700.)\n\nJob A pays more in total. It pays 7 840 − 7 700 = R140 more than Job B, because Job A runs for more weeks even though its weekly rate is slightly lower.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multiplying by 2-digit and 3-digit numbers, mental strategies, estimating and word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block: Multiplying by 2-digit numbers (0-4) ──────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate:\n1 256 × 17', correctAnswer: '21352', correctAnswers: ['21352', '21 352'], explanation: 'Step 1 — Units digit (7): 1 256 × 7 = 8 792.\nStep 2 — Tens digit (1): write 0 placeholder, 1 256 × 10 = 12 560.\nStep 3 — Add: 8 792 + 12 560 = 21 352 ✓', answer: '21 352' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Work out the product of 6 234 and 19, showing the units row and tens row separately.', correctAnswer: '118446', correctAnswers: ['118446', '118 446'], explanation: 'Step 1 — Units digit (9): 6 234 × 9 = 56 106.\nStep 2 — Tens digit (1): write 0 placeholder, 6 234 × 10 = 62 340.\nStep 3 — Add: 56 106 + 62 340 = 118 446 ✓', answer: '118 446' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Ayanda earns R4 125 per week. How much does she earn in 36 weeks?', correctAnswer: '148500', correctAnswers: ['148500', '148 500', 'r148500', 'R148 500'], explanation: '"Per week" tells us to multiply: 4 125 × 36.\nUnits (6): 4 125 × 6 = 24 750.\nTens (3): write 0 placeholder, 4 125 × 30 = 123 750.\nAdd: 24 750 + 123 750 = 148 500.\nAyanda earns R148 500 in 36 weeks.', answer: 'R148 500' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A furniture workshop produces 328 chairs every month. How many chairs does it produce in 67 months?', correctAnswer: '21976', correctAnswers: ['21976', '21 976'], explanation: '"Every month" tells us to multiply: 328 × 67.\nUnits (7): 328 × 7 = 2 296.\nTens (6): write 0 placeholder, 328 × 60 = 19 680.\nAdd: 2 296 + 19 680 = 21 976.\nThe workshop produces 21 976 chairs in 67 months.', answer: '21 976 chairs' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner works out 5 142 × 38 like this:\n\n  5 142\n×    38\n———————\n 41 136   (5 142 × 8)\n 15 426   (5 142 × 3, no placeholder zero written)\n———————\n 56 562\n\nThe learner gives 56 562 as the final answer, but this is incorrect. Find the mistake, explain what went wrong, and give the correct answer.', answer: 'The correct answer is 5 142 × 38 = 195 396.\n\nStep 1 — Units digit (8): 5 142 × 8 = 41 136.\nStep 2 — Tens digit (3): this means 5 142 × 30, not 5 142 × 3. The learner forgot the placeholder zero, so their second row was ten times too small (15 426 instead of 154 260).\nCorrect Step 2: write a 0 placeholder in the units column, then 5 142 × 30 = 154 260.\nStep 3 — Add: 41 136 + 154 260 = 195 396.\n\nThe learner\'s mistake was leaving out the placeholder zero when multiplying by the tens digit.\n\nCorrect answer: 195 396' },

        // ── Block: Multiplying by 3-digit numbers (5-8) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Calculate:\n1 832 × 145', correctAnswer: '265640', correctAnswers: ['265640', '265 640'], explanation: 'Step 1 — Units digit (5): 1 832 × 5 = 9 160.\nStep 2 — Tens digit (4): write 0 placeholder, 1 832 × 40 = 73 280.\nStep 3 — Hundreds digit (1): write 00 placeholders, 1 832 × 100 = 183 200.\nStep 4 — Add: 9 160 + 73 280 + 183 200 = 265 640 ✓', answer: '265 640' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A factory produces 3 260 face masks every day. How many face masks does it produce in a year of 365 days?', correctAnswer: '1189900', correctAnswers: ['1189900', '1 189 900'], explanation: '"Every day" for 365 days tells us to multiply: 3 260 × 365.\nUnits (5): 3 260 × 5 = 16 300.\nTens (6): write 0 placeholder, 3 260 × 60 = 195 600.\nHundreds (3): write 00 placeholders, 3 260 × 300 = 978 000.\nAdd: 16 300 + 195 600 + 978 000 = 1 189 900.\nThe factory produces 1 189 900 face masks in a year.', answer: '1 189 900 face masks' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'A tuck shop orders 42 crates of juice for a 26-week term. Each crate holds 15 cans. How many cans of juice are ordered in total for the term?\n\nFirst find the total number of crates, then multiply by the cans per crate.', correctAnswer: '16380', correctAnswers: ['16380', '16 380'], explanation: 'Step 1 — Total crates: 42 × 26 = 1 092 crates.\nStep 2 — Total cans: 1 092 × 15 = 16 380.\n\nWorking for Step 1 (42 × 26): units (6) 42×6=252, tens (2) 840. Add: 252 + 840 = 1 092.\n\nThe tuck shop orders 16 380 cans of juice for the term.', answer: '16 380 cans' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Which gives the larger product: 2 789 × 312 or 2 745 × 318? Calculate both and say which is bigger, and by how much.', answer: '2 789 × 312 = 870 168\n(Units 2: 2 789×2=5 578. Tens 1: 2 789×10=27 890. Hundreds 3: 2 789×300=836 700. Add: 5 578+27 890+836 700=870 168.)\n\n2 745 × 318 = 872 910\n(Units 8: 2 745×8=21 960. Tens 1: 2 745×10=27 450. Hundreds 3: 2 745×300=823 500. Add: 21 960+27 450+823 500=872 910.)\n\n2 745 × 318 gives the larger product. It is bigger by 872 910 − 870 168 = 2 742.' },

        // ── Block: Multiples of 10, 100 and 1 000 (9-12) ─────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 623 × 10.', correctAnswer: '6230', correctAnswers: ['6230', '6 230'], explanation: 'Multiplying by 10 means adding one zero to the end of the number.\n623 × 10 = 6 230 ✓', answer: '6 230' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Calculate 918 × 100.', correctAnswer: '91800', correctAnswers: ['91800', '91 800'], explanation: 'Multiplying by 100 means adding two zeros to the end of the number.\n918 × 100 = 91 800 ✓', answer: '91 800' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner says 734 × 1 000 = 73 400. Is the learner correct? Explain, and give the correct answer.', answer: 'The learner is NOT correct.\n\nMultiplying by 1 000 means adding three zeros to the end of the number, not two. The learner only added two zeros (getting 73 400), which is actually 734 × 100, not 734 × 1 000.\n\nCorrect answer: 734 × 1 000 = 734 000.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'True or False: 356 × 1 000 gives the same answer as 356 × 200 + 356 × 800. Explain your answer.', answer: 'True.\n\n356 × 1 000 = 356 000.\n\n356 × 200 = 71 200 and 356 × 800 = 284 800. Add: 71 200 + 284 800 = 356 000.\n\nBoth methods give 356 000, because 200 + 800 = 1 000, so splitting the multiplier into 200 and 800 and adding the two products is the same as multiplying by 1 000 directly.' },

        // ── Block: Estimating by rounding (13-15) ─────────────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Estimate 7 145 × 62 by rounding 7 145 to the nearest thousand and 62 to the nearest ten.', correctAnswer: '420000', correctAnswers: ['420000', '420 000'], explanation: 'Round 7 145 to the nearest thousand: 7 000.\nRound 62 to the nearest ten: 60.\nEstimate: 7 000 × 60 = 420 000\n\n(The exact answer, 7 145 × 62 = 442 990, is reasonably close to this estimate.)', answer: '420 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'A learner calculates 5 124 × 29 and gets 14 859. Use rounding to estimate the answer, and use your estimate to decide whether 14 859 is reasonable. If it is not, give the correct exact answer.', answer: 'Estimate: round 5 124 to 5 000 and 29 to 30.\n5 000 × 30 = 150 000\n\nThe learner\'s answer of 14 859 is about ten times too small compared to the estimate of 150 000 — it is not reasonable. It looks like the learner dropped a digit, possibly forgetting the placeholder zero when multiplying by the tens digit.\n\nThe correct exact answer is 5 124 × 29 = 148 596 (Units 9: 5 124×9=46 116. Tens 2: 5 124×20=102 480. Add: 46 116+102 480=148 596), which is close to the estimate of 150 000.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner is at school for roughly 24 hours a week over the course of the year, which spans 365 days. Estimate 24 × 365 by rounding 24 to the nearest ten and 365 to the nearest hundred, then explain if the exact value would be higher or lower than your estimate.', answer: 'Estimate: round 24 to 20 and 365 to 400.\n20 × 400 = 8 000\n\nThe exact value is 24 × 365 = 8 760 (Units 5: 24×5=120. Tens 6: 24×60=1 440. Hundreds 3: 24×300=7 200. Add: 120+1 440+7 200=8 760.)\n\nThe exact answer (8 760) is higher than the estimate (8 000). This makes sense because 24 was rounded down to 20 (a decrease), while 365 was rounded up to 400 (an increase) — the upward rounding on 365 added more than the downward rounding on 24 took away, so the exact answer comes out a bit higher than the estimate.' },

        // ── Block: Word problems with key words and units (16-19) ────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'A bookstore sells 27 novels at R58 each. What is the total amount of money earned?', correctAnswer: '1566', correctAnswers: ['1566', '1 566', 'r1566', 'R1 566'], explanation: '"Each" tells us to multiply: 58 × 27.\nUnits (7): 58 × 7 = 406.\nTens (2): write 0 placeholder, 58 × 20 = 1 160.\nAdd: 406 + 1 160 = 1 566.\nThe bookstore earns R1 566.', answer: 'R1 566' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Sibongile earns R715 per week working part-time. She works for 19 weeks during the year. How much does she earn in total?', correctAnswer: '13585', correctAnswers: ['13585', '13 585', 'r13585', 'R13 585'], explanation: '"Per week" for 19 weeks tells us to multiply: 715 × 19.\nUnits (9): 715 × 9 = 6 435.\nTens (1): write 0 placeholder, 715 × 10 = 7 150.\nAdd: 6 435 + 7 150 = 13 585.\nSibongile earns R13 585 in total.', answer: 'R13 585' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A taxi rank serves 178 commuters on an average day, and this pattern holds steady for 63 days straight. First estimate the total number of commuters by rounding, then calculate the exact total.', answer: 'Estimate: round 178 to 200 and 63 to 60.\n200 × 60 = 12 000 commuters (estimate).\n\nExact: 178 × 63 = 11 214\n(Units 3: 178×3=534. Tens 6: 178×60=10 680. Add: 534+10 680=11 214.)\n\nThe exact total is 11 214 commuters, which is reasonably close to the estimate of 12 000, so it is reasonable.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Two part-time jobs are available to Thandiwe for the school holidays. Job A pays R185 per week for 45 weeks. Job B pays R212 per week for 38 weeks. Which job pays more in total, and by how much?', answer: 'Job A: 185 × 45 = 8 325\n(Units 5: 185×5=925. Tens 4: 185×40=7 400. Add: 925+7 400=8 325.)\n\nJob B: 212 × 38 = 8 056\n(Units 8: 212×8=1 696. Tens 3: 212×30=6 360. Add: 1 696+6 360=8 056.)\n\nJob A pays more in total. It pays 8 325 − 8 056 = R269 more than Job B, because Job A runs for more weeks even though its weekly rate is lower.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered multiplying by 2-digit and 3-digit numbers, mental strategies, estimating and word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
