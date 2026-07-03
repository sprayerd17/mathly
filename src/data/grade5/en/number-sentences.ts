import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// numbers            → blue   (#2563eb)
// operation symbols  → red    (#dc2626)
// = < >              → green  (#16a34a)
// missing value □    → orange (#ea580c)
const nu = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const op = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const eq = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const mv = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Number Sentences',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — EQUATIONS AND INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equations-and-inequalities',
      title: 'Equations and Inequalities',
      icon: '=',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:16px;">A <strong>number sentence</strong> is a mathematical statement that uses ${nu('numbers')} and symbols to show a relationship. An <strong>equation</strong> uses ${eq('=')} and an <strong>inequality</strong> uses ${eq('&lt;')} or ${eq('&gt;')}. Number sentences can be <span style="color:#16a34a;font-weight:700">true</span> or <span style="color:#dc2626;font-weight:700">false</span> — you calculate both sides to find out which.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('operation symbols')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('= &lt; &gt;')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;color:#16a34a;font-weight:700;">true</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;color:#dc2626;font-weight:700;">false</span>` +
        `</div>` +

        // ── Two types heading ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two types of number sentence</p>` +

        // ── Equation and Inequality cards ─────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Equation</p>` +
        `<p style="font-size:20px;margin-bottom:10px;letter-spacing:2px;">${nu('4')} ${op('×')} ${nu('25')} ${eq('=')} ${nu('100')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Uses ${eq('=')} to show that <strong>both sides are equal</strong>. The left side and the right side balance exactly.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:10px;">Inequality</p>` +
        `<p style="font-size:20px;margin-bottom:10px;letter-spacing:2px;">${nu('3')} ${op('×')} ${nu('40')} ${eq('&gt;')} ${nu('100')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Uses ${eq('&gt;')} or ${eq('&lt;')} to show that <strong>one side is greater than the other</strong>. The sides do not balance.</p>` +
        `</div>` +

        `</div>` +

        // ── How to check heading ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to check if a number sentence is true or false</p>` +

        // ── 3 steps ───────────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Calculate both sides</strong> — work out the value on the left side of the symbol and the value on the right side separately.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the results</strong> — place the two values side by side and look at the symbol between them.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Decide if the symbol is correct</strong> — if the symbol matches the relationship between the two values, the sentence is <span style="color:#16a34a;font-weight:700">true</span>. If not, it is <span style="color:#dc2626;font-weight:700">false</span>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">What do the symbols mean?</p>` +
        `<p style="margin:0;color:#1e3a8a;">${eq('=')} — both sides have the <strong>same value</strong>. &nbsp; ${eq('&gt;')} — the left side is <strong>bigger</strong>. &nbsp; ${eq('&lt;')} — the left side is <strong>smaller</strong>. The pointed tip of ${eq('&lt;')} and ${eq('&gt;')} always faces the smaller number.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: equation — true or false? ──────────────────────────────
        {
          question: `Is ${nu('6')} ${op('×')} ${nu('35')} ${eq('=')} ${nu('7')} ${op('×')} ${nu('30')} true or false?`,
          answer: `<span style="color:#16a34a;font-weight:700">True</span> — ${nu('210')} ${eq('=')} ${nu('210')} ✓`,
          steps: [
            `<strong>Left side:</strong> ${nu('6')} ${op('×')} ${nu('35')} = ${nu('210')}`,
            `<strong>Right side:</strong> ${nu('7')} ${op('×')} ${nu('30')} = ${nu('210')}`,
            `<strong>Compare:</strong> Is ${nu('210')} ${eq('=')} ${nu('210')}? <span style="color:#16a34a;font-weight:700">Yes ✓</span> — both sides are equal.`,
            `<strong>Answer:</strong> <span style="color:#16a34a;font-weight:700">True.</span> The equation is correct.`,
          ],
        },

        // ── Example 2: inequality — true or false? ────────────────────────────
        {
          question: `Is ${nu('450')} ${op('÷')} ${nu('9')} ${eq('&gt;')} ${nu('4')} ${op('×')} ${nu('12')} true or false?`,
          answer: `<span style="color:#16a34a;font-weight:700">True</span> — ${nu('50')} ${eq('&gt;')} ${nu('48')} ✓`,
          steps: [
            `<strong>Left side:</strong> ${nu('450')} ${op('÷')} ${nu('9')} = ${nu('50')}`,
            `<strong>Right side:</strong> ${nu('4')} ${op('×')} ${nu('12')} = ${nu('48')}`,
            `<strong>Compare:</strong> Is ${nu('50')} ${eq('&gt;')} ${nu('48')}? <span style="color:#16a34a;font-weight:700">Yes ✓</span> — 50 is greater than 48.`,
            `<strong>Answer:</strong> <span style="color:#16a34a;font-weight:700">True.</span> The inequality is correct.`,
          ],
        },

        // ── Example 3: writing your own true number sentence ──────────────────
        {
          question: `Write your own true number sentence using ${op('×')} and ${eq('&gt;')}.`,
          answer: `${nu('8')} ${op('×')} ${nu('15')} ${eq('&gt;')} ${nu('100')} — because ${nu('120')} ${eq('&gt;')} ${nu('100')} ✓`,
          steps: [
            `<strong>Choose a multiplication you know:</strong> ${nu('8')} ${op('×')} ${nu('15')} = ${nu('120')}`,
            `<strong>Choose a number smaller than ${nu('120')} for the right side:</strong> for example, ${nu('100')}.`,
            `<strong>Write the number sentence:</strong> ${nu('8')} ${op('×')} ${nu('15')} ${eq('&gt;')} ${nu('100')}`,
            `<strong>Check:</strong> Calculate the left side — ${nu('8')} ${op('×')} ${nu('15')} = ${nu('120')}. Is ${nu('120')} ${eq('&gt;')} ${nu('100')}? <span style="color:#16a34a;font-weight:700">Yes ✓</span> — the number sentence is <span style="color:#16a34a;font-weight:700">true</span>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — true or false ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write true or false for each number sentence:\n\na) 8 × 25 = 200\nb) 450 ÷ 9 > 60\nc) 6 × 35 = 7 × 30',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × 25 = 200',
              correctAnswer: 'true',
              explanation: 'Calculate: 8 × 25 = 200.\nThe left side equals the right side, so the number sentence is true ✓',
            },
            {
              label: 'b) 450 ÷ 9 > 60',
              correctAnswer: 'false',
              explanation: 'Calculate: 450 ÷ 9 = 50.\nIs 50 > 60? No — 50 is less than 60.\nThe correct symbol is <, not >. The number sentence is false.',
            },
            {
              label: 'c) 6 × 35 = 7 × 30',
              correctAnswer: 'true',
              explanation: 'Left side: 6 × 35 = 210.\nRight side: 7 × 30 = 210.\nBoth sides equal 210, so the number sentence is true ✓',
            },
          ],
        },

        // ── Q2 Medium — write the correct symbol ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Write the correct symbol (=, < or >) to make each number sentence true:\n\na) 9 × 45 ___ 400\nb) 720 ÷ 8 ___ 9 × 10\nc) 7 × 84 ___ 6 × 98',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 9 × 45 ___ 400',
              correctAnswer: '>',
              explanation: 'Calculate the left side: 9 × 45 = 405.\nCompare: 405 > 400.\nThe correct symbol is >.',
            },
            {
              label: 'b) 720 ÷ 8 ___ 9 × 10',
              correctAnswer: '=',
              explanation: 'Left side: 720 ÷ 8 = 90.\nRight side: 9 × 10 = 90.\nBoth sides equal 90, so the correct symbol is =.',
            },
            {
              label: 'c) 7 × 84 ___ 6 × 98',
              correctAnswer: '=',
              explanation: 'Left side: 7 × 84 = 588.\nRight side: 6 × 98 = 588.\nBoth sides equal 588, so the correct symbol is =.',
            },
          ],
        },

        // ── Q3 Hard — reasoning: is Lerato correct? ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says 12 × 75 > 8 × 115 because 12 is bigger than 8. Is she correct? Show your working.',
          answer: 'Step 1: Calculate 12 × 75 = 900.\nStep 2: Calculate 8 × 115 = 920.\nStep 3: Compare: 900 < 920.\n\nLerato is incorrect. 12 × 75 = 900, which is less than 8 × 115 = 920.\nYou cannot compare number sentences by looking at just one number — you must calculate both sides first.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder: 'Short video showing how to check if a number sentence is true or false by calculating both sides and comparing',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — OPEN NUMBER SENTENCES AND MISSING VALUES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'open-number-sentences',
      title: 'Open Number Sentences and Missing Values',
      icon: '□',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">An <strong>open number sentence</strong> has a ${mv('missing value')} shown by a ${mv('□')} (box) or a letter. You need to find the number that makes the sentence true. In Grade 5 the missing values are larger and we use <strong>inverse operations</strong> with bigger numbers to find them.</p>` +

        `<p style="margin-bottom:20px;padding:12px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;font-size:15px;">` +
        `For example: &nbsp;${mv('□')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')} &nbsp; — find the value of ${mv('□')}.` +
        `</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${mv('missing value □')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('known numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('operation symbols')}</span>` +
        `</div>` +

        // ── Inverse operations heading ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:1.02em;">Inverse operations</p>` +
        `<p style="margin-bottom:12px;font-size:14px;color:#374151;">An inverse operation is the <strong>opposite</strong> of another — it undoes what the first operation did. We use the inverse to work backwards and find the ${mv('missing value')}.</p>` +

        // ── Inverse pairs cards ───────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:22px;margin-bottom:8px;letter-spacing:4px;">${op('+')} &nbsp;↔&nbsp; ${op('−')}</p>` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:14px;">Addition ↔ Subtraction</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">They undo each other. If a sentence uses ${op('+')}, find ${mv('□')} using ${op('−')}, and vice versa.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:22px;margin-bottom:8px;letter-spacing:4px;">${op('×')} &nbsp;↔&nbsp; ${op('÷')}</p>` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:14px;">Multiplication ↔ Division</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">They undo each other. If a sentence uses ${op('×')}, find ${mv('□')} using ${op('÷')}, and vice versa.</p>` +
        `</div>` +

        `</div>` +

        // ── Method heading ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to find the missing value</p>` +

        // ── 2 method steps ────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Use the inverse operation</strong> — look at the operation in the number sentence and apply its opposite to isolate the ${mv('□')} and calculate its value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check by substituting back</strong> — replace ${mv('□')} with your answer in the original number sentence. If both sides are equal, your answer is correct.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">After finding ${mv('□')}, put your answer back into the original number sentence. If both sides are equal, you are done. If not, go back and check your inverse calculation.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: addition → subtraction ────────────────────────────────
        {
          question: `Find the missing value: ${mv('□')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('4 544')}`,
          steps: [
            `<strong>Step 1 — Identify the inverse:</strong> The sentence uses ${op('+')}, so the inverse is ${op('−')}. Subtract the known number from the total to find ${mv('□')}.`,
            `<strong>Step 2 — Calculate:</strong> ${mv('□')} ${eq('=')} ${nu('8 000')} ${op('−')} ${nu('3 456')} ${eq('=')} ${nu('4 544')}`,
            `<strong>Check:</strong> ${nu('4 544')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')} <span style="color:#16a34a;font-weight:700">✓</span> — correct!`,
          ],
        },

        // ── Example 5: multiplication → division ─────────────────────────────
        {
          question: `Find the missing value: ${nu('7')} ${op('×')} ${mv('□')} ${eq('=')} ${nu('4 284')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('612')}`,
          steps: [
            `<strong>Step 1 — Identify the inverse:</strong> The sentence uses ${op('×')}, so the inverse is ${op('÷')}. Divide the product by the known factor to find ${mv('□')}.`,
            `<strong>Step 2 — Calculate:</strong> ${mv('□')} ${eq('=')} ${nu('4 284')} ${op('÷')} ${nu('7')} ${eq('=')} ${nu('612')}`,
            `<strong>Check:</strong> ${nu('7')} ${op('×')} ${nu('612')} ${eq('=')} ${nu('4 284')} <span style="color:#16a34a;font-weight:700">✓</span> — correct!`,
          ],
        },

        // ── Example 6: division → multiplication ─────────────────────────────
        {
          question: `Find the missing value: ${mv('□')} ${op('÷')} ${nu('12')} ${eq('=')} ${nu('144')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('1 728')}`,
          steps: [
            `<strong>Step 1 — Identify the inverse:</strong> The sentence uses ${op('÷')}, so the inverse is ${op('×')}. Multiply the quotient by the divisor to find ${mv('□')}.`,
            `<strong>Step 2 — Calculate:</strong> ${mv('□')} ${eq('=')} ${nu('144')} ${op('×')} ${nu('12')} ${eq('=')} ${nu('1 728')}`,
            `<strong>Check:</strong> ${nu('1 728')} ${op('÷')} ${nu('12')} ${eq('=')} ${nu('144')} <span style="color:#16a34a;font-weight:700">✓</span> — correct!`,
          ],
        },

        // ── Example 7: subtraction (□ is subtracted from total) ──────────────
        {
          question: `Find the missing value: ${nu('9 450')} ${op('−')} ${mv('□')} ${eq('=')} ${nu('3 867')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('5 583')}`,
          steps: [
            `<strong>Step 1 — Identify the inverse:</strong> ${mv('□')} is being subtracted from ${nu('9 450')}. To find ${mv('□')}, subtract the result from the total: ${nu('9 450')} ${op('−')} ${nu('3 867')}.`,
            `<strong>Step 2 — Calculate:</strong> ${mv('□')} ${eq('=')} ${nu('9 450')} ${op('−')} ${nu('3 867')} ${eq('=')} ${nu('5 583')}`,
            `<strong>Check:</strong> ${nu('9 450')} ${op('−')} ${nu('5 583')} ${eq('=')} ${nu('3 867')} <span style="color:#16a34a;font-weight:700">✓</span> — correct!`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — single missing value ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the missing value:\n□ + 2 347 = 6 000',
          answer: '3653',
          checkMode: 'auto',
          correctAnswer: '3653',
          explanation: 'Inverse operation: □ = 6 000 − 2 347 = 3 653.\nCheck: 3 653 + 2 347 = 6 000 ✓',
        },

        // ── Q5 Medium — three missing values ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the missing value in each number sentence.\n\na) 8 × □ = 3 456\nb) □ ÷ 11 = 132\nc) 7 500 − □ = 2 847',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × □ = 3 456',
              correctAnswer: '432',
              explanation: 'Inverse operation: □ = 3 456 ÷ 8 = 432.\nCheck: 8 × 432 = 3 456 ✓',
            },
            {
              label: 'b) □ ÷ 11 = 132',
              correctAnswer: '1452',
              explanation: 'Inverse operation: □ = 132 × 11 = 1 452.\nCheck: 1 452 ÷ 11 = 132 ✓',
            },
            {
              label: 'c) 7 500 − □ = 2 847',
              correctAnswer: '4653',
              explanation: 'Inverse operation: □ = 7 500 − 2 847 = 4 653.\nCheck: 7 500 − 4 653 = 2 847 ✓',
            },
          ],
        },

        // ── Q6 Hard — fact family reasoning ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'The answer to a multiplication is 4 368. One of the numbers is 12. Find the other number and write the full number sentence. Then write two division facts from the same fact family.',
          answer: 'Step 1: Find the other number using the inverse operation:\n  4 368 ÷ 12 = 364\n\nStep 2: Full number sentence:\n  12 × 364 = 4 368\n\nStep 3: Two division facts from the same fact family:\n  4 368 ÷ 12 = 364\n  4 368 ÷ 364 = 12\n\nThe other number is 364.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder: 'Short video showing how to find missing values in open number sentences using inverse operations with larger numbers',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — TRANSLATING WORD PROBLEMS INTO NUMBER SENTENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'word-problems-number-sentences',
      title: 'Translating Word Problems into Number Sentences',
      icon: '→',

      explanation:
        `<p style="margin-bottom:14px;">Any word problem can be turned into a <strong>number sentence</strong> before you solve it. Spotting the ${mv('key words')} tells you which operation to use, then you write the ${nu('number sentence')} with a box for the unknown, and finally solve to get the ${eq('solution')}. This makes even complex problems much easier to manage.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${mv('key words')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('number sentence')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('solution')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key words and the operations they suggest</p>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('+')} Addition</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('sum, total, altogether, more than, increased by, added to')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('−')} Subtraction</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('difference, left, remaining, less than, decreased by, after some left')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('×')} Multiplication</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('times, product, groups of, each, every, same amount each')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('÷')} Division</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('share equally, split, how many each, per, quotient')}</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Five-step method</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Read the problem carefully</strong> — understand what information you are given and what you need to find.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identify the ${mv('key words')}</strong> — underline the words that tell you which operation to use.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Write the ${nu('number sentence')}</strong> — replace the unknown with a box and write the full equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Solve using inverse operations</strong> — find the value of the box to get the ${eq('solution')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check the answer makes sense</strong> — substitute back into the number sentence and ask whether the answer is reasonable.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always write the full ${nu('number sentence')} before you start calculating. A clear number sentence keeps you organised and helps you avoid mistakes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `A school has ${nu('4 800')} learners. After ${mv('some learners left')} there are ${nu('3 654')} ${mv('remaining')}. How many learners left?`,
          answer: `${eq('1 146')} learners left`,
          steps: [
            `<strong>${mv('Key words')}:</strong> "${mv('after some learners left')}" and "${mv('remaining')}" — these suggest subtraction.`,
            `<strong>${nu('Number sentence')}:</strong> ${nu('4 800')} ${op('−')} ${mv('□')} ${eq('=')} ${nu('3 654')}`,
            `<strong>Inverse operation:</strong> ${mv('□')} ${eq('=')} ${nu('4 800')} ${op('−')} ${nu('3 654')} ${eq('=')} ${eq('1 146')}`,
            `<strong>Answer:</strong> ${eq('1 146')} learners left.`,
            `<strong>Check:</strong> ${nu('4 800')} ${op('−')} ${eq('1 146')} ${eq('=')} ${nu('3 654')} <span style="color:#16a34a;font-weight:700">✓</span> — the answer makes sense.`,
          ],
        },

        {
          question: `Thabo earns the ${mv('same amount each week')}. After ${nu('8')} weeks he has earned ${nu('R12 400')}. How much does he earn ${mv('per')} week?`,
          answer: `Thabo earns ${eq('R1 550')} per week`,
          steps: [
            `<strong>${mv('Key words')}:</strong> "${mv('same amount each week')}" and "${mv('per')}" — equal groups suggest multiplication. We need to find the amount per group, so we use division.`,
            `<strong>${nu('Number sentence')}:</strong> ${nu('8')} ${op('×')} ${mv('□')} ${eq('=')} ${nu('12 400')}`,
            `<strong>Inverse operation:</strong> ${mv('□')} ${eq('=')} ${nu('12 400')} ${op('÷')} ${nu('8')} ${eq('=')} ${eq('1 550')}`,
            `<strong>Answer:</strong> Thabo earns ${eq('R1 550')} per week.`,
            `<strong>Check:</strong> ${nu('8')} ${op('×')} ${eq('1 550')} ${eq('=')} ${nu('12 400')} <span style="color:#16a34a;font-weight:700">✓</span> — the answer makes sense.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A box has some books. After adding 234 more there are 891 books. How many books were there to start?\n\na) Write the number sentence.\nb) Solve it.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write the number sentence',
              checkMode: 'self',
              answer: '□ + 234 = 891',
            },
            {
              label: 'b) Solve',
              correctAnswer: '657',
              explanation: 'Inverse operation: □ = 891 − 234 = 657\nCheck: 657 + 234 = 891 ✓\nThere were 657 books to start.',
            },
          ],
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho earns the same amount each day. After 9 days he has earned R4 185. How much does he earn per day?\n\na) Write the number sentence.\nb) Solve using inverse operations.\nc) Check your answer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write the number sentence',
              checkMode: 'self',
              answer: '9 × □ = 4 185',
            },
            {
              label: 'b) Solve',
              correctAnswers: ['465', 'r465', '4185÷9=465'],
              explanation: 'Inverse operation: □ = 4 185 ÷ 9 = 465\nSipho earns R465 per day.',
            },
            {
              label: 'c) Check your answer',
              checkMode: 'self',
              answer: '9 × 465 = 4 185 ✓ — the answer is correct.',
            },
          ],
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A factory produces 8 400 items per week working 6 days. On a special week they work 7 days at the same daily rate.\n\na) Write a number sentence to find the daily production rate.\nb) Solve it.\nc) Write a number sentence for the total production in the special week.\nd) How many more items are produced in the special week?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Number sentence for daily rate',
              checkMode: 'self',
              answer: '6 × □ = 8 400',
            },
            {
              label: 'b) Daily production rate',
              correctAnswers: ['1400', '8400÷6=1400'],
              explanation: 'Inverse operation: □ = 8 400 ÷ 6 = 1 400 items per day.',
            },
            {
              label: 'c) Number sentence for special week',
              checkMode: 'self',
              answer: '7 × 1 400 = 9 800',
            },
            {
              label: 'd) Extra items produced',
              correctAnswers: ['1400', '9800-8400=1400'],
              explanation: 'Special week − normal week: 9 800 − 8 400 = 1 400 more items.',
            },
          ],
        },
      ],

      videoPlaceholder: '',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROPERTIES OF OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-operations',
      title: 'Properties of Operations',
      icon: '≡',

      explanation:
        `<p style="margin-bottom:14px;">Operations have special rules called <strong>properties</strong>. Knowing these properties helps you rearrange and simplify calculations so that you can solve problems more quickly. There are three main properties in Grade 5.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('Commutative')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('Associative')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('Distributive')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">${nu('Commutative Property')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">The order of numbers does not change the answer for ${op('+')} and ${op('×')}.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;"><em>a</em> ${op('+')} <em>b</em> ${eq('=')} <em>b</em> ${op('+')} <em>a</em> &nbsp;&nbsp; and &nbsp;&nbsp; <em>a</em> ${op('×')} <em>b</em> ${eq('=')} <em>b</em> ${op('×')} <em>a</em></p>` +
        `<p style="font-size:14px;margin-bottom:8px;">Example: &nbsp; ${nu('234')} ${op('+')} ${nu('567')} ${eq('=')} ${nu('567')} ${op('+')} ${nu('234')} &nbsp; and &nbsp; ${nu('25')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('8')} ${op('×')} ${nu('25')}</p>` +
        `<p style="font-size:13px;color:#dc2626;font-weight:600;margin:0;">⚠ This does NOT work for subtraction or division.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 18px;margin-bottom:14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:6px;">${eq('Associative Property')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">The grouping of numbers does not change the answer for ${op('+')} and ${op('×')}.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;">(<em>a</em> ${op('+')} <em>b</em>) ${op('+')} <em>c</em> ${eq('=')} <em>a</em> ${op('+')} (<em>b</em> ${op('+')} <em>c</em>) &nbsp;&nbsp; and &nbsp;&nbsp; (<em>a</em> ${op('×')} <em>b</em>) ${op('×')} <em>c</em> ${eq('=')} <em>a</em> ${op('×')} (<em>b</em> ${op('×')} <em>c</em>)</p>` +
        `<p style="font-size:14px;margin:0;">Example: &nbsp; (${nu('25')} ${op('×')} ${nu('4')}) ${op('×')} ${nu('3')} ${eq('=')} ${nu('25')} ${op('×')} (${nu('4')} ${op('×')} ${nu('3')}) ${eq('=')} ${nu('300')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;margin-bottom:20px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:6px;">${op('Distributive Property')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">Multiplying a number by a group of numbers added together gives the same result as multiplying each separately.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;"><em>a</em> ${op('×')} (<em>b</em> ${op('+')} <em>c</em>) ${eq('=')} (<em>a</em> ${op('×')} <em>b</em>) ${op('+')} (<em>a</em> ${op('×')} <em>c</em>)</p>` +
        `<p style="font-size:14px;margin:0;">Example: &nbsp; ${nu('6')} ${op('×')} (${nu('30')} ${op('+')} ${nu('4')}) ${eq('=')} ${nu('6')} ${op('×')} ${nu('30')} ${op('+')} ${nu('6')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('180')} ${op('+')} ${nu('24')} ${eq('=')} ${nu('204')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why do these properties matter?</p>` +
        `<p style="margin:0;color:#1e3a8a;">These properties let you <strong>rearrange and regroup numbers</strong> to make calculations easier. Look for groupings that give you friendly numbers like multiples of ${nu('10')} or ${nu('100')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Use the ${eq('associative property')} to calculate ${nu('25')} ${op('×')} ${nu('8')} ${op('×')} ${nu('4')} easily.`,
          answer: `${nu('800')}`,
          steps: [
            `<strong>Look for friendly groupings:</strong> ${nu('25')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('100')} — a nice round number. Group these two first.`,
            `<strong>Apply the ${eq('associative property')}:</strong> (${nu('25')} ${op('×')} ${nu('4')}) ${op('×')} ${nu('8')} ${eq('=')} ${nu('100')} ${op('×')} ${nu('8')}`,
            `<strong>Calculate:</strong> ${nu('100')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('800')}`,
            `<strong>Answer: ${nu('800')}</strong> — much easier than ${nu('25')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('200')}, then ${nu('200')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('800')}.`,
          ],
        },

        {
          question: `Use the ${op('distributive property')} to calculate ${nu('7')} ${op('×')} ${nu('98')}.`,
          answer: `${nu('686')}`,
          steps: [
            `<strong>Break the number into parts:</strong> ${nu('98')} ${eq('=')} ${nu('100')} ${op('−')} ${nu('2')} — easier numbers to work with.`,
            `<strong>Apply the ${op('distributive property')}:</strong> ${nu('7')} ${op('×')} ${nu('98')} ${eq('=')} ${nu('7')} ${op('×')} ${nu('100')} ${op('−')} ${nu('7')} ${op('×')} ${nu('2')}`,
            `<strong>Calculate each part:</strong> ${nu('7')} ${op('×')} ${nu('100')} ${eq('=')} ${nu('700')} &nbsp; and &nbsp; ${nu('7')} ${op('×')} ${nu('2')} ${eq('=')} ${nu('14')}`,
            `<strong>Combine:</strong> ${nu('700')} ${op('−')} ${nu('14')} ${eq('=')} ${nu('686')}`,
            `<strong>Answer: ${nu('686')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Use the commutative property to rewrite 47 × 25 and calculate the answer. Show that both orders give the same result.',
          answer: '1175',
          checkMode: 'auto',
          correctAnswers: ['1175', '25x47=1175', '47x25=1175'],
          explanation: 'Commutative property: a × b = b × a, so 47 × 25 = 25 × 47.\nCalculate: 25 × 47 = 25 × 40 + 25 × 7 = 1 000 + 175 = 1 175.\nBoth orders give the same answer: 1 175 ✓',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Use the associative property to make each calculation easier. Regroup the numbers before calculating.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 25 × 6 × 4',
              correctAnswer: '600',
              explanation: 'Regroup: (25 × 4) × 6 = 100 × 6 = 600\n25 × 4 gives the friendly number 100, making the rest easy.',
            },
            {
              label: 'b) (17 + 83) + 246',
              correctAnswer: '346',
              explanation: '17 + 83 = 100 (a friendly round number).\n100 + 246 = 346.',
            },
            {
              label: 'c) 5 × 8 × 20',
              correctAnswer: '800',
              explanation: 'Regroup: (5 × 20) × 8 = 100 × 8 = 800\n5 × 20 gives the friendly number 100.',
            },
          ],
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Use the distributive property to calculate each of the following. Show your working.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × 97',
              correctAnswers: ['776', '800-24=776', '8x100-8x3=800-24=776'],
              explanation: '8 × 97 = 8 × (100 − 3)\n= 8 × 100 − 8 × 3\n= 800 − 24\n= 776 ✓',
            },
            {
              label: 'b) 6 × 204',
              correctAnswers: ['1224', '1200+24=1224', '6x200+6x4=1200+24=1224'],
              explanation: '6 × 204 = 6 × (200 + 4)\n= 6 × 200 + 6 × 4\n= 1 200 + 24\n= 1 224 ✓',
            },
            {
              label: 'c) Why does the distributive property make these calculations easier?',
              checkMode: 'self',
              answer: 'The distributive property breaks a hard number into easy parts — multiples of 10 or 100 that are simple to multiply mentally. For example, 97 becomes 100 − 3, and 204 becomes 200 + 4.',
            },
          ],
        },
      ],

      videoPlaceholder: 'Short video explaining the commutative associative and distributive properties with examples showing how they make calculations easier',
    },
  ],

  scoreMessages: [
    { minScore: 28, message: 'Perfect score! You have mastered Number Sentences.' },
    { minScore: 21, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 14, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
