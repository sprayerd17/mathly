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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 True/False | 4-6 Choose the symbol | 7-10 Missing value |
    // 11-14 Word problems | 15-17 Properties | 18-19 Error-spotting & multi-step
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is this number sentence true or false?\n6 × 120 = 720', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '6 × 120 = 720. The left side equals the right side, so the number sentence is true ✓', answer: 'True' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Write true or false: 450 − 180 = 260', correctAnswer: 'false', correctAnswers: ['false', 'False'], explanation: '450 − 180 = 270, not 260. Since 270 ≠ 260, the number sentence is false.', answer: 'False' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'A shop sign claims: "9 × 36 is more than 300." Is this true or false?', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '9 × 36 = 324. Is 324 > 300? Yes ✓ — the claim is true.', answer: 'True' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 840 ÷ 8 < 11 × 9 true or false?', correctAnswer: 'false', correctAnswers: ['false', 'False'], explanation: 'Left side: 840 ÷ 8 = 105. Right side: 11 × 9 = 99. Is 105 < 99? No — 105 is greater than 99, so the number sentence is false.', answer: 'False' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Write the correct symbol (=, < or >): 18 × 17 ___ 64 × 2 + 200', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 18 × 17 = 306. Right side: 64 × 2 + 200 = 128 + 200 = 328. Is 306 < 328? Yes ✓ — the correct symbol is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Insert =, < or > to make this true: 7 × 89 ___ 6 × 98', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 7 × 89 = 623. Right side: 6 × 98 = 588. Is 623 < 588? No — 623 is actually greater than 588, so the correct symbol is >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A teacher writes 612 ÷ 9 ___ 13 × 34 on the board and asks the class to fill in the missing symbol. What goes in the blank?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 612 ÷ 9 = 68. Right side: 13 × 34 = 442. Since 68 < 442, the correct symbol is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Find the missing value:\n□ ÷ 5 = 483', correctAnswer: '2415', correctAnswers: ['2415', '2 415'], explanation: 'The inverse of ÷ is ×. □ = 483 × 5 = 2 415.\nCheck: 2 415 ÷ 5 = 483 ✓', answer: '2 415' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Solve for the missing value:\n8 × □ = 4 800', correctAnswer: '600', correctAnswers: ['600'], explanation: 'The inverse of × is ÷. □ = 4 800 ÷ 8 = 600.\nCheck: 8 × 600 = 4 800 ✓', answer: '600' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'The box sits at the start this time:\n□ − 340 = 125', correctAnswer: '465', correctAnswers: ['465'], explanation: 'The inverse of subtracting 340 is adding 340 back. □ = 125 + 340 = 465.\nCheck: 465 − 340 = 125 ✓', answer: '465' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'One number sentence in a fact family is 63 × 8 = 504. Write a division fact from the same fact family that has 63 as the answer.', correctAnswer: '504÷8=63', correctAnswers: ['504÷8=63', '504/8=63', '504÷8'], explanation: 'A fact family shares the same three numbers: 63, 8 and 504. Since 63 × 8 = 504, one matching division fact is 504 ÷ 8 = 63.', answer: '504 ÷ 8 = 63' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Naledi buys a school bag for R340 and a pencil case. Altogether she spends R465. Write a number sentence with a box for the price of the pencil case, then solve it.', correctAnswer: '125', correctAnswers: ['125', 'r125', '340+□=465'], explanation: 'Number sentence: 340 + □ = 465.\nInverse operation: □ = 465 − 340 = 125.\nThe pencil case costs R125.', answer: 'R125' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A crate holds the same number of oranges in each layer. There are 6 layers and 750 oranges altogether. How many oranges are in one layer?', correctAnswer: '125', correctAnswers: ['125', '6×□=750'], explanation: 'Number sentence: 6 × □ = 750.\n"Same number...in each layer" signals equal groups, so we divide to undo the multiplication: □ = 750 ÷ 6 = 125.\nEach layer has 125 oranges.', answer: '125 oranges' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A bus travels the same distance every day. After 18 days it has covered 720 km. How far does it travel per day?', correctAnswer: '40', correctAnswers: ['40', '18×□=720'], explanation: 'Number sentence: 18 × □ = 720.\n"Same distance...per day" tells us to find the value of one group, so we divide: □ = 720 ÷ 18 = 40.\nThe bus travels 40 km per day.', answer: '40 km' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Zanele saves the same amount each week. After 6 weeks she has R450, and after 9 weeks she expects to have R675 if she keeps saving at the same rate. How much does she save each week, and does R675 match that rate?', correctAnswer: '75', correctAnswers: ['75', 'r75', 'yes'], explanation: 'Weekly rate: 450 ÷ 6 = R75 per week.\nCheck for 9 weeks: 9 × 75 = 675.\nYes, R675 matches the rate of R75 per week.', answer: 'R75 per week; yes, R675 matches' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the commutative property to calculate 25 × 18 by swapping the order. What is the answer?', correctAnswer: '450', correctAnswers: ['450'], explanation: 'Commutative property: a × b = b × a, so 25 × 18 = 18 × 25.\n18 × 25 = 18 × 20 + 18 × 5 = 360 + 90 = 450.\nBoth orders give 450.', answer: '450' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the distributive property to calculate 47 × 99. Show the friendly-number breakdown.', correctAnswer: '4653', correctAnswers: ['4653'], explanation: '47 × 99 = 47 × (100 − 1) = 47 × 100 − 47 × 1 = 4 700 − 47 = 4 653.', answer: '4 653' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'A learner wants to calculate 6 × 25 × 4 quickly. Which two numbers should be grouped first using the associative property, and why does this make the calculation easier? Give the final answer too.', answer: 'Group 25 and 4 first: 25 × 4 = 100, a friendly round number.\nThen (25 × 4) × 6 = 100 × 6 = 600.\nGrouping 25 and 4 first is easier because their product is a multiple of 100, which is simple to multiply by any other number. The final answer is 600.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A student claims: "In 15 × 22, since 15 < 18, then 15 × 22 must be less than 18 × 22 — and I don\'t even need to calculate anything." Evaluate whether this reasoning is valid, and if it is, explain why it works without a full calculation.', answer: 'The reasoning is actually valid here, but the student should still understand why. When multiplying two positive numbers by the same positive factor (22 in this case), the inequality between the other factors is preserved: since 15 < 18, it follows that 15 × 22 < 18 × 22. This works because multiplying both sides of an inequality by the same positive number does not change the direction of the inequality.\n\nHowever, this reasoning only works when comparing products that share a common factor multiplied by the same amount. It would NOT work for something like comparing 15 × 22 to 18 × 15, because the numbers being multiplied are different on each side — you would need to calculate both sides to be sure. In this specific case, checking: 15 × 22 = 330 and 18 × 22 = 396, and indeed 330 < 396, confirming the claim is correct — but only because the same factor (22) appears on both sides.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A community hall charges the same hire fee for every event. In one month, 8 events were held and the hall earned R4 800 altogether. In a busier month, the hall hosted events and earned R6 000. Write a number sentence to find the fee per event, solve it, then use that fee (applying a property of operations to simplify the working) to find how many events were held in the busier month. Finally, explain why your answer is reasonable.', answer: 'Step 1 — Find the fee per event using the first month\'s data:\nNumber sentence: 8 × □ = 4 800\n□ = 4 800 ÷ 8 = 600\nThe fee per event is R600.\n\nStep 2 — Find the number of events in the busier month:\nNumber sentence: 600 × □ = 6 000\nUsing the distributive property to simplify: 600 × 10 = 6 000, so □ = 10.\nCheck by substitution: 600 × 10 = 6 000 ✓\n\nStep 3 — Reasonableness:\n10 events is more than the 8 events in the first month, which makes sense because the problem says this was a "busier month" and it earned more money (R6 000 compared to R4 800) at the same fee per event. The answer fits the context of the problem.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered true/false number sentences, symbols, missing values, word problems and properties of operations.' },
        { minScore: 15, message: 'Great work! Review any questions you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // Blocks: 0-3 True/False | 4-6 Choose the symbol | 7-10 Missing value |
    // 11-14 Word problems | 15-17 Properties | 18-19 Error-spotting & multi-step
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Write true or false: 8 × 45 = 360', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '8 × 45 = 360. The left side equals the right side, so the number sentence is true ✓', answer: 'True' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is this number sentence true or false?\n630 ÷ 9 = 68', correctAnswer: 'false', correctAnswers: ['false', 'False'], explanation: '630 ÷ 9 = 70, not 68. Since 70 ≠ 68, the number sentence is false.', answer: 'False' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Sipho says: "12 × 14 is less than 170." Is he correct?', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '12 × 14 = 168. Is 168 < 170? Yes ✓ — Sipho is correct.', answer: 'True' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 930 − 540 > 15 × 16 true or false?', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: 'Left side: 930 − 540 = 390. Right side: 15 × 16 = 240. Is 390 > 240? Yes ✓ — the number sentence is true.', answer: 'True' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Write the correct symbol (=, < or >): 13 × 19 ___ 450 ÷ 6', correctAnswer: '>', correctAnswers: ['>'], explanation: 'Left side: 13 × 19 = 247. Right side: 450 ÷ 6 = 75. Is 247 > 75? Yes ✓ — the correct symbol is >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Insert =, < or > to make this true: 9 × 63 ___ 7 × 81', correctAnswer: '=', correctAnswers: ['='], explanation: 'Left side: 9 × 63 = 567. Right side: 7 × 81 = 567. Both sides equal 567, so the correct symbol is =.', answer: '=' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A quiz question reads: 144 ÷ 12 ___ 21 × 7. Which symbol belongs in the gap?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 144 ÷ 12 = 12. Right side: 21 × 7 = 147. Since 12 < 147, the correct symbol is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Find the missing value:\n□ ÷ 9 = 35', correctAnswer: '315', correctAnswers: ['315'], explanation: 'The inverse of ÷ is ×. □ = 35 × 9 = 315.\nCheck: 315 ÷ 9 = 35 ✓', answer: '315' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Solve for the missing value:\n17 × □ = 391', correctAnswer: '23', correctAnswers: ['23'], explanation: 'The inverse of × is ÷. □ = 391 ÷ 17 = 23.\nCheck: 17 × 23 = 391 ✓', answer: '23' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'What value of □ makes 225 − □ = 87 true?', correctAnswer: '138', correctAnswers: ['138'], explanation: 'Here □ is subtracted from 225. To find □, subtract the result from the starting total: □ = 225 − 87 = 138.\nCheck: 225 − 138 = 87 ✓', answer: '138' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'One number sentence in a fact family is 9 × 400 = 3 600. Write a division fact from the same fact family that has 400 as the answer.', correctAnswer: '3600÷9=400', correctAnswers: ['3600÷9=400', '3600/9=400', '3600÷9'], explanation: 'The fact family shares the numbers 9, 400 and 3 600. Since 9 × 400 = 3 600, the matching division fact is 3 600 ÷ 9 = 400.', answer: '3 600 ÷ 9 = 400' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A bakery had some loaves of bread. After selling 225 loaves, 87 loaves remained. Write a number sentence with a box for the number of loaves at the start, then solve it.', correctAnswer: '312', correctAnswers: ['312', '□-225=87'], explanation: 'Number sentence: □ − 225 = 87.\nInverse operation: □ = 87 + 225 = 312.\nThere were 312 loaves at the start.', answer: '312 loaves' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A vegetable garden is divided into 6 equal plots. Together the plots use 612 metres of fencing. How many metres of fencing does one plot use?', correctAnswer: '102', correctAnswers: ['102', '6×□=612'], explanation: 'Number sentence: 6 × □ = 612.\n"Equal plots" signals equal groups; to find one group we divide: □ = 612 ÷ 6 = 102.\nEach plot uses 102 metres of fencing.', answer: '102 metres' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A tank fills at a steady rate. After 9 hours it holds 3 600 litres, calculated from a rate of 400 litres per hour. If it kept filling at that rate for 2 more hours, how many litres would it hold in total?', correctAnswer: '4400', correctAnswers: ['4400', '3600+800=4400'], explanation: 'Rate check: 3 600 ÷ 9 = 400 litres per hour ✓ (matches given rate).\n2 more hours: 2 × 400 = 800 litres.\nTotal: 3 600 + 800 = 4 400 litres.', answer: '4 400 litres' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A stationery shop sells pens in packs. 12 packs cost R168 in total, and a school orders enough packs to spend exactly R252 at the same price per pack. How many packs did the school order?', correctAnswer: '18', correctAnswers: ['18', '252÷14=18'], explanation: 'Price per pack: 168 ÷ 12 = R14.\nNumber of packs ordered: 252 ÷ 14 = 18.\nThe school ordered 18 packs.', answer: '18 packs' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the associative property to make 36 × 25 easier. Regroup 36 as (4 × 9) so you can pair the 4 with the 25 first. What is the answer?', correctAnswer: '900', correctAnswers: ['900'], explanation: '36 × 25 = (4 × 9) × 25 = 9 × (4 × 25) = 9 × 100 = 900.\nPairing 4 with 25 gives the friendly number 100.', answer: '900' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the distributive property to calculate 14 × 99. Show the friendly-number breakdown.', correctAnswer: '1386', correctAnswers: ['1386'], explanation: '14 × 99 = 14 × (100 − 1) = 14 × 100 − 14 × 1 = 1 400 − 14 = 1 386.', answer: '1 386' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'To calculate 4 × 50 × 5 mentally, which two factors would you multiply first, and what property allows you to choose the order of grouping? Give the final answer.', answer: 'Multiply 4 and 5 first (or 50 and either 4 or 5, but 4 × 5 = 20 is the friendliest pairing here since 20 × 50 is easy).\nUsing the associative property, the grouping of factors can be changed without changing the answer: (4 × 5) × 50 = 20 × 50 = 1 000.\nThe final answer is 1 000.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A learner solving 225 − □ = 87 wrote: "□ = 225 + 87 = 312, because to undo subtraction you always add." Is this working correct for this particular number sentence? Find the error (if any) and give the correct value of □.', answer: 'This working is incorrect for this number sentence. The mistake is that the learner treated 225 − □ = 87 the same as □ − 225 = 87, but they are different! Here, the box is being subtracted FROM 225, not the other way around.\n\nTo find □ in 225 − □ = 87, subtract the result from the starting number: □ = 225 − 87 = 138.\n\nCheck: 225 − 138 = 87 ✓ — this confirms 138 is correct, not 312.\n\nThe learner\'s rule "always add to undo subtraction" only works when the box is the first number in the sentence (like □ − 225 = 87, which does give □ = 87 + 225 = 312). When the box is being subtracted from a total, you must subtract the answer from the total instead.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A farmer sells 12 crates of apples for a total of R168, all at the same price per crate. The next week, the farmer raises the price so that 17 crates now sell for a total that keeps the SAME price-to-crates ratio scaled up, and applies the distributive property by writing the new price as 14 × (100 − 1) = R1 386 for a large 99-crate wholesale order at the new per-crate rate. Work out the original price per crate, confirm the new price per crate is R14, and explain whether R1 386 for 99 crates at R14 each is reasonable.', answer: 'Step 1 — Original price per crate:\n168 ÷ 12 = R14 per crate.\n\nStep 2 — Confirm new price:\nThe problem states the new price per crate is also R14 (the rate stayed the same in this case), matching our calculation.\n\nStep 3 — Check the 99-crate order using the distributive property:\n14 × 99 = 14 × (100 − 1) = 14 × 100 − 14 × 1 = 1 400 − 14 = 1 386.\n\nStep 4 — Reasonableness:\nR1 386 for 99 crates at R14 each is reasonable because 99 is very close to 100, and 100 crates at R14 would cost R1 400. Since we are buying one crate fewer than 100, the total should be R14 less than R1 400, which gives exactly R1 386. The answer fits the pattern and the size of the numbers involved.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered true/false number sentences, symbols, missing values, word problems and properties of operations.' },
        { minScore: 15, message: 'Great work! Review any questions you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // Blocks: 0-3 True/False | 4-6 Choose the symbol | 7-10 Missing value |
    // 11-14 Word problems | 15-17 Properties | 18-19 Error-spotting & multi-step
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Write true or false: 7 × 60 = 420', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '7 × 60 = 420. The left side equals the right side, so the number sentence is true ✓', answer: 'True' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is this number sentence true or false?\n560 ÷ 8 = 65', correctAnswer: 'false', correctAnswers: ['false', 'False'], explanation: '560 ÷ 8 = 70, not 65. Since 70 ≠ 65, the number sentence is false.', answer: 'False' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'A poster claims: "13 × 13 is greater than 150." Check this claim — is it true or false?', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: '13 × 13 = 169. Is 169 > 150? Yes ✓ — the claim is true.', answer: 'True' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 720 − 260 < 21 × 11 true or false?', correctAnswer: 'false', correctAnswers: ['false', 'False'], explanation: 'Left side: 720 − 260 = 460. Right side: 21 × 11 = 231. Is 460 < 231? No — 460 is greater than 231, so the number sentence is false.', answer: 'False' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Write the correct symbol (=, < or >): 14 × 17 ___ 532 ÷ 7', correctAnswer: '>', correctAnswers: ['>'], explanation: 'Left side: 14 × 17 = 238. Right side: 532 ÷ 7 = 76. Is 238 > 76? Yes ✓ — the correct symbol is >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Insert =, < or > to make this true: 11 × 11 ___ 144 × 2', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 11 × 11 = 121. Right side: 144 × 2 = 288. Is 121 < 288? Yes ✓ — the correct symbol is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A worksheet asks for the missing symbol in 6 × 76 ___ 9 × 84. What goes in the gap?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Left side: 6 × 76 = 456. Right side: 9 × 84 = 756. Since 456 < 756, the correct symbol is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Find the missing value:\n□ ÷ 12 = 72', correctAnswer: '864', correctAnswers: ['864'], explanation: 'The inverse of ÷ is ×. □ = 72 × 12 = 864.\nCheck: 864 ÷ 12 = 72 ✓', answer: '864' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Solve for the missing value:\n15 × □ = 435', correctAnswer: '29', correctAnswers: ['29'], explanation: 'The inverse of × is ÷. □ = 435 ÷ 15 = 29.\nCheck: 15 × 29 = 435 ✓', answer: '29' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'What value of □ makes 196 − □ = 58 true?', correctAnswer: '138', correctAnswers: ['138'], explanation: 'To find □, subtract the result from the starting total: □ = 196 − 58 = 138.\nCheck: 196 − 138 = 58 ✓', answer: '138' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'One number sentence in a fact family is 1 080 ÷ 9 = 120. Write a multiplication fact from the same fact family that has 1 080 as the answer.', correctAnswer: '9×120=1080', correctAnswers: ['9×120=1080', '9x120=1080', '120×9=1080', '120x9=1080'], explanation: 'The fact family shares the numbers 9, 120 and 1 080. Since 1 080 ÷ 9 = 120, the matching multiplication fact is 9 × 120 = 1 080 (or equivalently 120 × 9 = 1 080).', answer: '9 × 120 = 1 080' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A caterer had a box of napkins. After using 196 napkins at an event, 58 napkins were left. Write a number sentence with a box for the starting number of napkins, then solve it.', correctAnswer: '254', correctAnswers: ['254', '□-196=58'], explanation: 'Number sentence: □ − 196 = 58.\nInverse operation: □ = 58 + 196 = 254.\nThere were 254 napkins at the start.', answer: '254 napkins' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A charity packs food parcels equally into 12 boxes. Altogether the boxes hold 864 parcels. How many parcels are in one box?', correctAnswer: '72', correctAnswers: ['72', '12×□=864'], explanation: 'Number sentence: 12 × □ = 864.\n"Equally into boxes" signals equal groups, so we divide: □ = 864 ÷ 12 = 72.\nEach box holds 72 parcels.', answer: '72 parcels' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A cyclist rides the same distance every day for a week (7 days) and covers 735 km in total. If she rides for 11 days at the same daily distance the following fortnight, how far will she travel in those 11 days?', correctAnswer: '1155', correctAnswers: ['1155', '105×11=1155'], explanation: 'Daily distance: 735 ÷ 7 = 105 km per day.\nDistance over 11 days: 105 × 11 = 1 155 km.', answer: '1 155 km' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'A printing company charges the same rate per poster. Printing 15 posters costs R435, and a school orders enough posters to spend R1 015 at the same rate. How many posters did the school order?', correctAnswer: '35', correctAnswers: ['35', '1015÷29=35'], explanation: 'Price per poster: 435 ÷ 15 = R29.\nNumber of posters ordered: 1 015 ÷ 29 = 35.\nThe school ordered 35 posters.', answer: '35 posters' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the associative property to make 11 × 300 easier by regrouping 300 as (3 × 100). What is the answer?', correctAnswer: '3300', correctAnswers: ['3300', '3 300'], explanation: '11 × 300 = 11 × (3 × 100) = (11 × 3) × 100 = 33 × 100 = 3 300.', answer: '3 300' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Use the distributive property to calculate 32 × 99. Show the friendly-number breakdown.', correctAnswer: '3168', correctAnswers: ['3168'], explanation: '32 × 99 = 32 × (100 − 1) = 32 × 100 − 32 × 1 = 3 200 − 32 = 3 168.', answer: '3 168' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'To calculate 25 × 4 × 17 mentally, which two factors should be grouped first, and what property justifies changing the grouping? Give the final answer.', answer: 'Group 25 and 4 first, since 25 × 4 = 100, a friendly round number.\nThe associative property allows the grouping of factors to change without affecting the answer: (25 × 4) × 17 = 100 × 17 = 1 700.\nThe final answer is 1 700.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A student claims: "Since 6 × 76 = 456 and 9 × 84 = 756, and 456 < 756, this proves that whenever the first factor is smaller AND the second factor is smaller, the product will always be smaller." Evaluate this general claim — is it always true? Justify your answer with reasoning or a counter-example.', answer: 'The claim happens to hold in this specific example, but it is NOT always true as a general rule for all numbers.\n\nWhen comparing two products where BOTH factors on one side are smaller than or equal to the corresponding factors on the other side (and all numbers are positive), the product with smaller factors will indeed be smaller or equal — this part is actually a true mathematical rule, similar to the reasoning that smaller × smaller ≤ bigger × bigger when comparing corresponding positive factors.\n\nHowever, the student\'s claim is stated too loosely as "the first factor is smaller AND the second factor is smaller" without specifying that this must hold for BOTH factors compared to the corresponding factors on the other side, in the same direction. If a student misapplies this to compare unrelated pairs (for example, comparing 6 × 84 to 9 × 76, where 6 < 9 but 84 > 76), the outcome could go either way and must be calculated: 6 × 84 = 504 and 9 × 76 = 684, so 504 < 684 still holds here, but this needs to be checked, not assumed, whenever the two products don\'t share a clear "both smaller" or "both bigger" pattern. In short: always calculate to be sure, rather than relying on a shortcut that is easy to misapply.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'A school hall can be hired for R120 per hour. Last month it was hired for 9 hours in total, earning R1 080. This month the hall earns R3 240 from bookings at the same hourly rate. Work out how many hours the hall was hired for this month, use the distributive property to double-check your answer (by breaking the number of hours into 30 − 3), and explain whether this month\'s total is reasonable compared to last month.', answer: 'Step 1 — Confirm last month\'s hourly rate:\n1 080 ÷ 9 = R120 per hour ✓ (matches the given rate).\n\nStep 2 — Find this month\'s number of hours using the same rate:\n3 240 ÷ 120 = 27 hours.\n\nStep 3 — Double-check with the distributive property:\n120 × 27 = 120 × (30 − 3) = 120 × 30 − 120 × 3 = 3 600 − 360 = 3 240 ✓ — this matches the amount earned, confirming 27 hours is correct.\n\nStep 4 — Reasonableness:\n27 hours is exactly 3 times last month\'s 9 hours, and the earnings (R3 240) are also exactly 3 times last month\'s R1 080. This makes sense together — if the hall was booked 3 times as often at the same rate, it should earn 3 times as much money. The answer is reasonable.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered true/false number sentences, symbols, missing values, word problems and properties of operations.' },
        { minScore: 15, message: 'Great work! Review any questions you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 28, message: 'Perfect score! You have mastered Number Sentences.' },
    { minScore: 21, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 14, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
