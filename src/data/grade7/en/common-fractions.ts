import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// whole number   → blue   (#2563eb)
// numerator      → orange (#ea580c)
// denominator    → red    (#dc2626)
// improper frac  → green  (#16a34a)
// common denom   → orange (#ea580c)
// final answer   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MIXED NUMBERS AND IMPROPER FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Mixed Numbers and Improper Fractions',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>mixed number</strong> has a ${bl('whole number')} part and a fraction part. An <strong>improper fraction</strong> has a ${or('numerator')} that is bigger than the ${re('denominator')}. We can convert between these two forms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('whole number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('improper fraction')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mixed Number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with a ${bl('whole number')} part and a proper fraction part, e.g. ${bl('4')}${or('2')}/${re('5')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Improper Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fraction where the ${or('numerator')} is greater than or equal to the ${re('denominator')}, e.g. ${gr('22/5')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Numerator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('top number')} of a fraction — how many parts we have.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Denominator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('bottom number')} of a fraction — how many equal parts the whole is divided into.</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Mixed number → Improper fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Multiply the ${bl('whole number')} by the ${re('denominator')}, then add the ${or('numerator')}. Keep the same ${re('denominator')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formula: (${bl('whole')} × ${re('denom')} + ${or('num')}) / ${re('denom')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Improper fraction → Mixed number</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Divide the ${or('numerator')} by the ${re('denominator')}. The quotient is the ${bl('whole number')} and the remainder becomes the new ${or('numerator')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Formula: ${or('num')} ÷ ${re('denom')} = ${bl('whole')} remainder ${or('new num')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why both forms are useful</p>` +
        `<p style="margin:0;color:#1e3a8a;">Mixed numbers are easier to read and compare. Improper fractions are easier to use when <strong>multiplying or dividing</strong> fractions. You will often need to convert before calculating.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 4 and 2/5 to an improper fraction.',
          answer: `${gr('22/5')}`,
          steps: [
            `Multiply the ${bl('whole number')} by the ${re('denominator')}: ${bl('4')} × ${re('5')} = ${bl('20')}`,
            `Add the ${or('numerator')}: ${bl('20')} + ${or('2')} = ${or('22')}`,
            `<strong>Answer:</strong> ${gr('22/5')} — keep the same ${re('denominator')} (5) ✓`,
          ],
        },
        {
          question: 'Convert 37/6 to a mixed number.',
          answer: `${bl('6')} and ${or('1')}/${re('6')}`,
          steps: [
            `Divide the ${or('numerator')} by the ${re('denominator')}: ${or('37')} ÷ ${re('6')} = ${bl('6')} remainder ${or('1')}`,
            `The quotient ${bl('6')} is the ${bl('whole number')} and the remainder ${or('1')} becomes the new ${or('numerator')}`,
            `<strong>Answer:</strong> ${bl('6')} and ${or('1')}/${re('6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — convert mixed number to improper fraction ──────────────
        {
          difficulty: 'Easy',
          question: 'Convert 3 and 1/4 to an improper fraction.',
          answer: '13/4',
          checkMode: 'auto',
          correctAnswer: '13/4',
          explanation: 'Step 1: Multiply the whole number by the denominator: 3 × 4 = 12.\nStep 2: Add the numerator: 12 + 1 = 13.\nAnswer: 13/4 ✓',
        },

        // ── Q2 Easy — convert improper fraction to mixed number ──────────────
        {
          difficulty: 'Easy',
          question: 'Convert 29/5 to a mixed number.',
          answer: '5 and 4/5',
          checkMode: 'auto',
          correctAnswer: '5 and 4/5',
          correctAnswers: ['5 and 4/5', '5 4/5'],
          explanation: 'Step 1: Divide the numerator by the denominator: 29 ÷ 5 = 5 remainder 4.\nStep 2: The quotient 5 is the whole number and the remainder 4 becomes the new numerator.\nAnswer: 5 and 4/5 ✓',
        },
      ],

      videoPlaceholder:
        'Short video showing how to convert between mixed numbers and improper fractions with colour coded steps',

      diagramPlaceholder: 'Visual diagram showing a mixed number and its equivalent improper fraction with whole number in blue, numerator in orange, and denominator in red',
      diagramSvg: '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="35" height="90" fill="#93c5fd"/><rect x="15" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="15" y1="33" x2="50" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="51" x2="50" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="69" x2="50" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="87" x2="50" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="55" y="15" width="35" height="90" fill="#93c5fd"/><rect x="55" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="33" x2="90" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="51" x2="90" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="69" x2="90" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="87" x2="90" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="95" y="15" width="35" height="90" fill="#93c5fd"/><rect x="95" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="33" x2="130" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="51" x2="130" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="69" x2="130" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="87" x2="130" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="135" y="15" width="35" height="90" fill="#93c5fd"/><rect x="135" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="135" y1="33" x2="170" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="51" x2="170" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="69" x2="170" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="87" x2="170" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="175" y="69" width="35" height="36" fill="#fdba74"/><rect x="175" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="175" y1="33" x2="210" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="51" x2="210" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="69" x2="210" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="175" y1="87" x2="210" y2="87" stroke="#0f1f3d" stroke-width="1"/><text x="32.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="72.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="112.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="152.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">5/5</text><text x="192.5" y="118" font-size="11" text-anchor="middle" fill="#ea580c" font-weight="700">2/5</text><text x="130" y="138" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">4 and 2/5 = 20/5 + 2/5 = 22/5</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ALL OPERATIONS WITH FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-with-fractions',
      title: 'All Operations with Fractions',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">We can <strong>add, subtract, multiply, and divide</strong> fractions. Each operation has its own method. Always simplify your answer to its lowest terms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerators')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominators')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Four operations ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four operations</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Addition</strong> — Find a ${or('common denominator')} (LCM of the ${re('denominators')}), convert each fraction, then add the ${bl('numerators')}. Keep the ${or('common denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Subtraction</strong> — Find a ${or('common denominator')}, convert each fraction, then subtract the ${bl('numerators')}. Keep the ${or('common denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Multiplication</strong> — Multiply the ${bl('numerators')} together and the ${re('denominators')} together. No common denominator needed. Then simplify.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Division</strong> — Multiply by the <strong>reciprocal</strong> of the second fraction. Flip the second fraction and then multiply.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always simplify your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">After any fraction calculation, check whether your answer can be simplified. Divide both the ${bl('numerator')} and ${re('denominator')} by their highest common factor (HCF). If the ${gr('answer')} is an improper fraction, convert it to a mixed number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 2/3 + 3/4.',
          answer: `${gr('1 and 5/12')}`,
          steps: [
            `Find the LCM of ${re('3')} and ${re('4')}: LCM = ${or('12')}`,
            `Convert: ${bl('2')}/${re('3')} = ${bl('8')}/${or('12')} &nbsp; (multiply top and bottom by 4)`,
            `Convert: ${bl('3')}/${re('4')} = ${bl('9')}/${or('12')} &nbsp; (multiply top and bottom by 3)`,
            `Add the ${bl('numerators')}: ${bl('8')} + ${bl('9')} = ${bl('17')}/${or('12')}`,
            `Convert to a mixed number: ${bl('17')} ÷ ${or('12')} = 1 remainder 5`,
            `<strong>Answer:</strong> ${gr('1 and 5/12')} ✓`,
          ],
        },
        {
          question: 'Calculate 5/6 − 1/3.',
          answer: `${gr('1/2')}`,
          steps: [
            `Find the LCM of ${re('6')} and ${re('3')}: LCM = ${or('6')}`,
            `Convert: ${bl('1')}/${re('3')} = ${bl('2')}/${or('6')} &nbsp; (multiply top and bottom by 2)`,
            `Subtract the ${bl('numerators')}: ${bl('5')} − ${bl('2')} = ${bl('3')}/${or('6')}`,
            `Simplify: ${bl('3')}/${or('6')} = ${gr('1/2')} &nbsp; (divide both by 3)`,
            `<strong>Answer:</strong> ${gr('1/2')} ✓`,
          ],
        },
        {
          question: 'Calculate 2/3 × 3/5.',
          answer: `${gr('2/5')}`,
          steps: [
            `Multiply the ${bl('numerators')}: ${bl('2')} × ${bl('3')} = ${bl('6')}`,
            `Multiply the ${re('denominators')}: ${re('3')} × ${re('5')} = ${re('15')}`,
            `Result: ${bl('6')}/${re('15')}`,
            `Simplify by dividing both by 3: ${bl('6')} ÷ 3 = ${bl('2')} and ${re('15')} ÷ 3 = ${re('5')}`,
            `<strong>Answer:</strong> ${gr('2/5')} ✓`,
          ],
        },
        {
          question: 'Calculate 3/4 ÷ 2/5.',
          answer: `${gr('1 and 7/8')}`,
          steps: [
            `To divide by a fraction, multiply by its <strong>reciprocal</strong> — flip the second fraction`,
            `${bl('3')}/${re('4')} ÷ ${bl('2')}/${re('5')} = ${bl('3')}/${re('4')} × ${bl('5')}/${re('2')}`,
            `Multiply the ${bl('numerators')}: ${bl('3')} × ${bl('5')} = ${bl('15')}`,
            `Multiply the ${re('denominators')}: ${re('4')} × ${re('2')} = ${re('8')}`,
            `Result: ${bl('15')}/${re('8')} — this is an improper fraction`,
            `Convert to a mixed number: ${bl('15')} ÷ ${re('8')} = 1 remainder 7`,
            `<strong>Answer:</strong> ${gr('1 and 7/8')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Medium — addition with unlike denominators ────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 1/3 + 1/4.',
          answer: '7/12',
          checkMode: 'auto',
          correctAnswer: '7/12',
          explanation: 'Step 1: Find the LCM of 3 and 4: LCM = 12.\nStep 2: Convert: 1/3 = 4/12, 1/4 = 3/12.\nStep 3: Add the numerators: 4 + 3 = 7.\nAnswer: 7/12 ✓',
        },

        // ── Q4 Medium — subtraction with unlike denominators ─────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 5/8 − 1/4.',
          answer: '3/8',
          checkMode: 'auto',
          correctAnswer: '3/8',
          explanation: 'Step 1: Find the LCM of 8 and 4: LCM = 8.\nStep 2: Convert: 1/4 = 2/8.\nStep 3: Subtract the numerators: 5 − 2 = 3.\nAnswer: 3/8 ✓',
        },

        // ── Q5 Hard — identify addition error and explain ────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho calculates 2/5 + 1/3 and gets 3/8. Is he correct? Explain.',
          answer: 'No — he added numerators and denominators directly. The LCM of 5 and 3 is 15, so 2/5 = 6/15 and 1/3 = 5/15. Sum = 11/15.',
          checkMode: 'self',
        },

        // ── Q6 Easy — multiply two proper fractions ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 2/3 × 1/4.',
          answer: '1/6',
          checkMode: 'auto',
          correctAnswer: '1/6',
          explanation: 'Step 1: Multiply the numerators: 2 × 1 = 2.\nStep 2: Multiply the denominators: 3 × 4 = 12.\nStep 3: Result: 2/12. Simplify by dividing both by 2: 1/6.\nAnswer: 1/6 ✓',
        },

        // ── Q7 Medium — multiply two proper fractions and simplify ───────────
        {
          difficulty: 'Medium',
          question: 'Calculate 3/5 × 2/3.',
          answer: '2/5',
          checkMode: 'auto',
          correctAnswer: '2/5',
          explanation: 'Step 1: Multiply the numerators: 3 × 2 = 6.\nStep 2: Multiply the denominators: 5 × 3 = 15.\nStep 3: Result: 6/15. Simplify by dividing both by 3: 2/5.\nAnswer: 2/5 ✓',
        },

        // ── Q8 Hard — challenge multiplication misconception ─────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says multiplying fractions always gives a bigger answer. Is she correct? Explain.',
          answer: 'No — multiplying two fractions less than 1 gives a smaller answer, since you are finding a fraction of a fraction.',
          checkMode: 'self',
        },

        // ── Q9 Easy — divide a fraction by a unit fraction ───────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 1/2 ÷ 1/4.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Step 1: To divide by a fraction, multiply by its reciprocal. Flip 1/4 to get 4/1.\nStep 2: 1/2 × 4/1 = 4/2 = 2.\nAnswer: 2 ✓',
        },

        // ── Q10 Medium — divide two fractions ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 2/3 ÷ 3/5.',
          answer: '10/9',
          checkMode: 'auto',
          correctAnswer: '10/9',
          correctAnswers: ['10/9', '1 and 1/9', '1 1/9'],
          explanation: 'Step 1: Flip the second fraction to get its reciprocal: 5/3.\nStep 2: 2/3 × 5/3.\nStep 3: Multiply the numerators: 2 × 5 = 10.\nStep 4: Multiply the denominators: 3 × 3 = 9.\nResult: 10/9 = 1 and 1/9 ✓',
        },

        // ── Q11 Hard — explain dividing by 1/2 ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says dividing by 1/2 is the same as multiplying by 2. Is he correct? Explain.',
          answer: 'Yes — dividing by a fraction means multiplying by its reciprocal, and the reciprocal of 1/2 is 2.',
          checkMode: 'self',
        },

        // ── Q12 Hard — add two mixed numbers ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 1 and 1/2 + 2 and 2/3.',
          answer: '4 and 1/6',
          checkMode: 'auto',
          correctAnswer: '4 and 1/6',
          correctAnswers: ['4 and 1/6', '4 1/6', '25/6'],
          explanation: 'Step 1: Convert to improper fractions: 1 and 1/2 = 3/2, 2 and 2/3 = 8/3.\nStep 2: Find the LCM of 2 and 3: LCM = 6.\nStep 3: Convert: 3/2 = 9/6, 8/3 = 16/6.\nStep 4: Add the numerators: 9 + 16 = 25. Result: 25/6.\nStep 5: Convert to a mixed number: 25 ÷ 6 = 4 remainder 1.\nAnswer: 4 and 1/6 ✓',
        },
      ],

      videoPlaceholder:
        'Short video showing how to add subtract multiply and divide fractions with colour coded numerators and denominators',

    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered common fractions.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Block layout per set: 0-3 equivalence/simplifying/ordering fractions (Easy) |
  // 4-8 addition & subtraction with different denominators incl. mixed numbers
  // (Easy-Medium/Medium) | 9-12 multiplication of fractions & mixed numbers
  // (Medium) | 13-15 division of fractions & mixed numbers (Medium-Hard) |
  // 16-17 mixed operations / order of operations with fractions (Hard) |
  // 18-19 fraction word problems (Hard)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1: equivalence / simplifying / ordering (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 18/24 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Step 1: Find the HCF of 18 and 24. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. HCF = 6.\nStep 2: Divide both by 6: 18 ÷ 6 = 3, 24 ÷ 6 = 4.\nAnswer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Find the missing numerator: 4/7 = x/28.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', 'x = 16'], explanation: 'Step 1: Work out what 7 was multiplied by to get 28: 28 ÷ 7 = 4.\nStep 2: Multiply the numerator by the same number: 4 × 4 = 16.\nAnswer: x = 16 ✓' },
        { difficulty: 'Medium', question: 'Which is bigger: 5/6 or 7/9? Show your working.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'Step 1: Find the LCM of 6 and 9: LCM = 18.\nStep 2: Convert: 5/6 = 15/18, 7/9 = 14/18.\nStep 3: Compare numerators: 15/18 > 14/18.\nAnswer: 5/6 is bigger ✓' },
        { difficulty: 'Medium', question: 'Arrange 7/10, 3/5 and 13/20 from smallest to largest.', answer: '3/5, 13/20, 7/10', checkMode: 'auto', correctAnswer: '3/5, 13/20, 7/10', correctAnswers: ['3/5, 13/20, 7/10', '3/5; 13/20; 7/10'], explanation: 'Step 1: Find the LCM of 10, 5 and 20: LCM = 20.\nStep 2: Convert: 7/10 = 14/20, 3/5 = 12/20, 13/20 stays as 13/20.\nStep 3: Order the numerators: 12 < 13 < 14, so 3/5 < 13/20 < 7/10.\nAnswer: 3/5, 13/20, 7/10 ✓' },

        // Block 2: addition & subtraction with unlike denominators, incl. mixed numbers (Q5-9)
        { difficulty: 'Easy-Medium', question: 'Calculate 2/5 + 1/4.', answer: '13/20', checkMode: 'auto', correctAnswer: '13/20', correctAnswers: ['13/20'], explanation: 'Step 1: Find the LCM of 5 and 4: LCM = 20.\nStep 2: Convert: 2/5 = 8/20, 1/4 = 5/20.\nStep 3: Add the numerators: 8 + 5 = 13.\nAnswer: 13/20 ✓' },
        { difficulty: 'Medium', question: 'Calculate 7/8 − 1/3.', answer: '13/24', checkMode: 'auto', correctAnswer: '13/24', correctAnswers: ['13/24'], explanation: 'Step 1: Find the LCM of 8 and 3: LCM = 24.\nStep 2: Convert: 7/8 = 21/24, 1/3 = 8/24.\nStep 3: Subtract the numerators: 21 − 8 = 13.\nAnswer: 13/24 ✓' },
        { difficulty: 'Medium', question: 'Calculate 1 and 3/4 + 2 and 1/3.', answer: '4 and 1/12', checkMode: 'auto', correctAnswer: '4 and 1/12', correctAnswers: ['4 and 1/12', '4 1/12', '49/12'], explanation: 'Step 1: Convert to improper fractions: 1 and 3/4 = 7/4, 2 and 1/3 = 7/3.\nStep 2: Find the LCM of 4 and 3: LCM = 12.\nStep 3: Convert: 7/4 = 21/12, 7/3 = 28/12.\nStep 4: Add the numerators: 21 + 28 = 49. Result: 49/12.\nStep 5: Convert to a mixed number: 49 ÷ 12 = 4 remainder 1.\nAnswer: 4 and 1/12 ✓' },
        { difficulty: 'Hard', question: 'Zanele calculates 3/5 + 1/4 by writing (3+1)/(5+4) = 4/9. Is she correct? Explain and give the correct answer.', answer: 'No — Zanele added the numerators and denominators directly, which is not how fraction addition works. She must first find a common denominator. The LCM of 5 and 4 is 20, so 3/5 = 12/20 and 1/4 = 5/20. Adding gives 12/20 + 5/20 = 17/20, not 4/9.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 4 and 1/6 − 1 and 2/3.', answer: '2 and 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 1/2', '5/2'], explanation: 'Step 1: Convert to improper fractions: 4 and 1/6 = 25/6, 1 and 2/3 = 5/3.\nStep 2: Find the LCM of 6 and 3: LCM = 6.\nStep 3: Convert: 5/3 = 10/6.\nStep 4: Subtract the numerators: 25 − 10 = 15. Result: 15/6.\nStep 5: Simplify: 15/6 = 5/2. Convert to a mixed number: 5 ÷ 2 = 2 remainder 1.\nAnswer: 2 and 1/2 ✓' },

        // Block 3: multiplication of fractions & mixed numbers (Q10-13)
        { difficulty: 'Easy-Medium', question: 'Calculate 3/4 × 2/9.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Step 1: Multiply the numerators: 3 × 2 = 6.\nStep 2: Multiply the denominators: 4 × 9 = 36.\nStep 3: Result: 6/36. Simplify by dividing both by 6: 1/6.\nAnswer: 1/6 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/6 × 3/10.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: 'Step 1: Multiply the numerators: 5 × 3 = 15.\nStep 2: Multiply the denominators: 6 × 10 = 60.\nStep 3: Result: 15/60. Simplify by dividing both by 15: 1/4.\nAnswer: 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 2 and 1/2 × 1 and 1/3.', answer: '3 and 1/3', checkMode: 'auto', correctAnswer: '3 and 1/3', correctAnswers: ['3 and 1/3', '3 1/3', '10/3'], explanation: 'Step 1: Convert to improper fractions: 2 and 1/2 = 5/2, 1 and 1/3 = 4/3.\nStep 2: Multiply the numerators: 5 × 4 = 20.\nStep 3: Multiply the denominators: 2 × 3 = 6.\nStep 4: Result: 20/6. Simplify by dividing both by 2: 10/3.\nStep 5: Convert to a mixed number: 10 ÷ 3 = 3 remainder 1.\nAnswer: 3 and 1/3 ✓' },
        { difficulty: 'Hard', question: 'Karabo says 2/3 × 3/4 must be bigger than both 2/3 and 3/4, because multiplication always makes numbers bigger. Is he correct? Explain and give the correct product.', answer: 'No — multiplying two proper fractions (both less than 1) gives a smaller answer, because you are finding a fraction of a fraction. 2/3 × 3/4 = 6/12 = 1/2, which is smaller than both 2/3 and 3/4.', checkMode: 'self' },

        // Block 4: division of fractions & mixed numbers (Q14-16)
        { difficulty: 'Medium', question: 'Calculate 3/8 ÷ 1/4.', answer: '1 and 1/2', checkMode: 'auto', correctAnswer: '1 and 1/2', correctAnswers: ['1 and 1/2', '1 1/2', '3/2'], explanation: 'Step 1: To divide by a fraction, multiply by its reciprocal. Flip 1/4 to get 4/1.\nStep 2: 3/8 × 4/1.\nStep 3: Multiply the numerators: 3 × 4 = 12. Multiply the denominators: 8 × 1 = 8.\nStep 4: Result: 12/8. Simplify by dividing both by 4: 3/2.\nAnswer: 1 and 1/2 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/6 ÷ 2/3.', answer: '1 and 1/4', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 1/4', '5/4'], explanation: 'Step 1: Flip the second fraction to get its reciprocal: 3/2.\nStep 2: 5/6 × 3/2.\nStep 3: Multiply the numerators: 5 × 3 = 15. Multiply the denominators: 6 × 2 = 12.\nStep 4: Result: 15/12. Simplify by dividing both by 3: 5/4.\nAnswer: 1 and 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 3 and 1/3 ÷ 1 and 2/3.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Step 1: Convert to improper fractions: 3 and 1/3 = 10/3, 1 and 2/3 = 5/3.\nStep 2: Flip the second fraction: 3/5.\nStep 3: 10/3 × 3/5.\nStep 4: Multiply the numerators: 10 × 3 = 30. Multiply the denominators: 3 × 5 = 15.\nStep 5: Result: 30/15 = 2.\nAnswer: 2 ✓' },

        // Block 5: mixed operations / order of operations with fractions (Q17-18)
        { difficulty: 'Hard', question: 'Calculate 1/2 + 1/3 × 3/4, using the correct order of operations.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Step 1: Multiplication before addition: 1/3 × 3/4 = 3/12 = 1/4.\nStep 2: Now add: 1/2 + 1/4. Find the LCM of 2 and 4: LCM = 4. Convert: 1/2 = 2/4.\nStep 3: Add the numerators: 2 + 1 = 3.\nAnswer: 3/4 ✓' },
        { difficulty: 'Hard', question: 'Calculate (2/3 + 1/6) ÷ 5/6.', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'Step 1: Work out the bracket first: 2/3 + 1/6. Find the LCM of 3 and 6: LCM = 6. Convert: 2/3 = 4/6.\nStep 2: Add: 4/6 + 1/6 = 5/6.\nStep 3: Divide: 5/6 ÷ 5/6 = 5/6 × 6/5 = 30/30 = 1.\nAnswer: 1 ✓' },

        // Block 6: fraction word problems (Q19-20)
        { difficulty: 'Hard', question: 'A recipe needs 3/4 cup of flour for one batch of muffins. Thandiwe only wants to make 2/3 of a batch. How much flour does she need?', answer: '1/2 cup', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '1/2 cup'], explanation: 'Step 1: To find a fraction of an amount, multiply: 3/4 × 2/3.\nStep 2: Multiply the numerators: 3 × 2 = 6. Multiply the denominators: 4 × 3 = 12.\nStep 3: Result: 6/12. Simplify by dividing both by 6: 1/2.\nAnswer: 1/2 cup ✓' },
        { difficulty: 'Hard', question: 'After a party, 5/8 of a pizza is left over. Sipho eats 1/4 of what is left. What fraction of the whole pizza does Sipho eat?', answer: '5/32', checkMode: 'auto', correctAnswer: '5/32', correctAnswers: ['5/32'], explanation: 'Step 1: "1/4 of what is left" means 1/4 of 5/8, so multiply: 5/8 × 1/4.\nStep 2: Multiply the numerators: 5 × 1 = 5. Multiply the denominators: 8 × 4 = 32.\nStep 3: Result: 5/32 (already in lowest terms).\nAnswer: 5/32 of the whole pizza ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1: equivalence / simplifying / ordering (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 24/36 to its lowest terms.', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3'], explanation: 'Step 1: Find the HCF of 24 and 36. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. HCF = 12.\nStep 2: Divide both by 12: 24 ÷ 12 = 2, 36 ÷ 12 = 3.\nAnswer: 2/3 ✓' },
        { difficulty: 'Easy', question: 'Find the missing numerator: 5/9 = x/45.', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', 'x = 25'], explanation: 'Step 1: Work out what 9 was multiplied by to get 45: 45 ÷ 9 = 5.\nStep 2: Multiply the numerator by the same number: 5 × 5 = 25.\nAnswer: x = 25 ✓' },
        { difficulty: 'Medium', question: 'Which is bigger: 4/5 or 11/15? Show your working.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5'], explanation: 'Step 1: Find the LCM of 5 and 15: LCM = 15.\nStep 2: Convert: 4/5 = 12/15, 11/15 stays as 11/15.\nStep 3: Compare numerators: 12/15 > 11/15.\nAnswer: 4/5 is bigger ✓' },
        { difficulty: 'Medium', question: 'Arrange 5/12, 7/18 and 1/2 from smallest to largest.', answer: '7/18, 5/12, 1/2', checkMode: 'auto', correctAnswer: '7/18, 5/12, 1/2', correctAnswers: ['7/18, 5/12, 1/2', '7/18; 5/12; 1/2'], explanation: 'Step 1: Find the LCM of 12, 18 and 2: LCM = 36.\nStep 2: Convert: 5/12 = 15/36, 7/18 = 14/36, 1/2 = 18/36.\nStep 3: Order the numerators: 14 < 15 < 18, so 7/18 < 5/12 < 1/2.\nAnswer: 7/18, 5/12, 1/2 ✓' },

        // Block 2: addition & subtraction with unlike denominators, incl. mixed numbers (Q5-9)
        { difficulty: 'Easy-Medium', question: 'Calculate 3/8 + 1/6.', answer: '13/24', checkMode: 'auto', correctAnswer: '13/24', correctAnswers: ['13/24'], explanation: 'Step 1: Find the LCM of 8 and 6: LCM = 24.\nStep 2: Convert: 3/8 = 9/24, 1/6 = 4/24.\nStep 3: Add the numerators: 9 + 4 = 13.\nAnswer: 13/24 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/6 − 3/10.', answer: '8/15', checkMode: 'auto', correctAnswer: '8/15', correctAnswers: ['8/15'], explanation: 'Step 1: Find the LCM of 6 and 10: LCM = 30.\nStep 2: Convert: 5/6 = 25/30, 3/10 = 9/30.\nStep 3: Subtract the numerators: 25 − 9 = 16. Result: 16/30.\nStep 4: Simplify by dividing both by 2: 8/15.\nAnswer: 8/15 ✓' },
        { difficulty: 'Medium', question: 'Calculate 2 and 2/5 + 1 and 1/2.', answer: '3 and 9/10', checkMode: 'auto', correctAnswer: '3 and 9/10', correctAnswers: ['3 and 9/10', '3 9/10', '39/10'], explanation: 'Step 1: Convert to improper fractions: 2 and 2/5 = 12/5, 1 and 1/2 = 3/2.\nStep 2: Find the LCM of 5 and 2: LCM = 10.\nStep 3: Convert: 12/5 = 24/10, 3/2 = 15/10.\nStep 4: Add the numerators: 24 + 15 = 39. Result: 39/10.\nStep 5: Convert to a mixed number: 39 ÷ 10 = 3 remainder 9.\nAnswer: 3 and 9/10 ✓' },
        { difficulty: 'Hard', question: 'Mpho calculates 2/3 + 3/8 by writing (2+3)/(3+8) = 5/11. Is he correct? Explain and give the correct answer.', answer: 'No — Mpho added the numerators and denominators directly, which is not how fraction addition works. He must first find a common denominator. The LCM of 3 and 8 is 24, so 2/3 = 16/24 and 3/8 = 9/24. Adding gives 16/24 + 9/24 = 25/24 = 1 and 1/24, not 5/11.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 5 and 1/4 − 2 and 5/6.', answer: '2 and 5/12', checkMode: 'auto', correctAnswer: '2 and 5/12', correctAnswers: ['2 and 5/12', '2 5/12', '29/12'], explanation: 'Step 1: Convert to improper fractions: 5 and 1/4 = 21/4, 2 and 5/6 = 17/6.\nStep 2: Find the LCM of 4 and 6: LCM = 12.\nStep 3: Convert: 21/4 = 63/12, 17/6 = 34/12.\nStep 4: Subtract the numerators: 63 − 34 = 29. Result: 29/12.\nStep 5: Convert to a mixed number: 29 ÷ 12 = 2 remainder 5.\nAnswer: 2 and 5/12 ✓' },

        // Block 3: multiplication of fractions & mixed numbers (Q10-13)
        { difficulty: 'Easy-Medium', question: 'Calculate 3/5 × 5/9.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Step 1: Multiply the numerators: 3 × 5 = 15.\nStep 2: Multiply the denominators: 5 × 9 = 45.\nStep 3: Result: 15/45. Simplify by dividing both by 15: 1/3.\nAnswer: 1/3 ✓' },
        { difficulty: 'Medium', question: 'Calculate 4/9 × 3/8.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Step 1: Multiply the numerators: 4 × 3 = 12.\nStep 2: Multiply the denominators: 9 × 8 = 72.\nStep 3: Result: 12/72. Simplify by dividing both by 12: 1/6.\nAnswer: 1/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 1 and 3/5 × 2 and 1/2.', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Step 1: Convert to improper fractions: 1 and 3/5 = 8/5, 2 and 1/2 = 5/2.\nStep 2: Multiply the numerators: 8 × 5 = 40.\nStep 3: Multiply the denominators: 5 × 2 = 10.\nStep 4: Result: 40/10 = 4.\nAnswer: 4 ✓' },
        { difficulty: 'Hard', question: 'Naledi says 3/4 × 4/5 must be bigger than both 3/4 and 4/5, because multiplication always makes numbers bigger. Is she correct? Explain and give the correct product.', answer: 'No — multiplying two proper fractions (both less than 1) gives a smaller answer, because you are finding a fraction of a fraction. 3/4 × 4/5 = 12/20 = 3/5, which is smaller than both 3/4 and 4/5.', checkMode: 'self' },

        // Block 4: division of fractions & mixed numbers (Q14-16)
        { difficulty: 'Medium', question: 'Calculate 5/9 ÷ 2/3.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'Step 1: Flip the second fraction to get its reciprocal: 3/2.\nStep 2: 5/9 × 3/2.\nStep 3: Multiply the numerators: 5 × 3 = 15. Multiply the denominators: 9 × 2 = 18.\nStep 4: Result: 15/18. Simplify by dividing both by 3: 5/6.\nAnswer: 5/6 ✓' },
        { difficulty: 'Medium', question: 'Calculate 7/8 ÷ 5/6.', answer: '1 and 1/20', checkMode: 'auto', correctAnswer: '1 and 1/20', correctAnswers: ['1 and 1/20', '1 1/20', '21/20'], explanation: 'Step 1: Flip the second fraction to get its reciprocal: 6/5.\nStep 2: 7/8 × 6/5.\nStep 3: Multiply the numerators: 7 × 6 = 42. Multiply the denominators: 8 × 5 = 40.\nStep 4: Result: 42/40. Simplify by dividing both by 2: 21/20.\nStep 5: Convert to a mixed number: 21 ÷ 20 = 1 remainder 1.\nAnswer: 1 and 1/20 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 4 and 2/3 ÷ 1 and 1/9.', answer: '4 and 1/5', checkMode: 'auto', correctAnswer: '4 and 1/5', correctAnswers: ['4 and 1/5', '4 1/5', '21/5'], explanation: 'Step 1: Convert to improper fractions: 4 and 2/3 = 14/3, 1 and 1/9 = 10/9.\nStep 2: Flip the second fraction: 9/10.\nStep 3: 14/3 × 9/10.\nStep 4: Multiply the numerators: 14 × 9 = 126. Multiply the denominators: 3 × 10 = 30.\nStep 5: Result: 126/30. Simplify by dividing both by 6: 21/5.\nStep 6: Convert to a mixed number: 21 ÷ 5 = 4 remainder 1.\nAnswer: 4 and 1/5 ✓' },

        // Block 5: mixed operations / order of operations with fractions (Q17-18)
        { difficulty: 'Hard', question: 'Calculate 2/3 − 1/4 × 2/5, using the correct order of operations.', answer: '17/30', checkMode: 'auto', correctAnswer: '17/30', correctAnswers: ['17/30'], explanation: 'Step 1: Multiplication before subtraction: 1/4 × 2/5 = 2/20 = 1/10.\nStep 2: Now subtract: 2/3 − 1/10. Find the LCM of 3 and 10: LCM = 30. Convert: 2/3 = 20/30, 1/10 = 3/30.\nStep 3: Subtract the numerators: 20 − 3 = 17.\nAnswer: 17/30 ✓' },
        { difficulty: 'Hard', question: 'Calculate (3/4 − 1/3) ÷ 5/12.', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'Step 1: Work out the bracket first: 3/4 − 1/3. Find the LCM of 4 and 3: LCM = 12. Convert: 3/4 = 9/12, 1/3 = 4/12.\nStep 2: Subtract: 9/12 − 4/12 = 5/12.\nStep 3: Divide: 5/12 ÷ 5/12 = 5/12 × 12/5 = 60/60 = 1.\nAnswer: 1 ✓' },

        // Block 6: fraction word problems (Q19-20)
        { difficulty: 'Hard', question: 'A water tank is 2/3 full. During a hot week, 3/5 of the water in the tank is used. What fraction of the whole tank is used?', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5'], explanation: 'Step 1: To find a fraction of an amount, multiply: 2/3 × 3/5.\nStep 2: Multiply the numerators: 2 × 3 = 6. Multiply the denominators: 3 × 5 = 15.\nStep 3: Result: 6/15. Simplify by dividing both by 3: 2/5.\nAnswer: 2/5 of the whole tank ✓' },
        { difficulty: 'Hard', question: 'A tin of paint has 3/5 of its contents remaining. Zola gives away 1/3 of what remains to a neighbour. What fraction of the whole tin does Zola give away?', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Step 1: "1/3 of what remains" means 1/3 of 3/5, so multiply: 3/5 × 1/3.\nStep 2: Multiply the numerators: 3 × 1 = 3. Multiply the denominators: 5 × 3 = 15.\nStep 3: Result: 3/15. Simplify by dividing both by 3: 1/5.\nAnswer: 1/5 of the whole tin ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently work with all four fraction operations.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1: equivalence / simplifying / ordering (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 21/28 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'Step 1: Find the HCF of 21 and 28. Factors of 21: 1, 3, 7, 21. Factors of 28: 1, 2, 4, 7, 14, 28. HCF = 7.\nStep 2: Divide both by 7: 21 ÷ 7 = 3, 28 ÷ 7 = 4.\nAnswer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Find the missing numerator: 3/8 = x/40.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'x = 15'], explanation: 'Step 1: Work out what 8 was multiplied by to get 40: 40 ÷ 8 = 5.\nStep 2: Multiply the numerator by the same number: 3 × 5 = 15.\nAnswer: x = 15 ✓' },
        { difficulty: 'Medium', question: 'Which is bigger: 7/8 or 5/6? Show your working.', answer: '7/8', checkMode: 'auto', correctAnswer: '7/8', correctAnswers: ['7/8'], explanation: 'Step 1: Find the LCM of 8 and 6: LCM = 24.\nStep 2: Convert: 7/8 = 21/24, 5/6 = 20/24.\nStep 3: Compare numerators: 21/24 > 20/24.\nAnswer: 7/8 is bigger ✓' },
        { difficulty: 'Medium', question: 'Arrange 4/9, 5/12 and 1/3 from smallest to largest.', answer: '1/3, 5/12, 4/9', checkMode: 'auto', correctAnswer: '1/3, 5/12, 4/9', correctAnswers: ['1/3, 5/12, 4/9', '1/3; 5/12; 4/9'], explanation: 'Step 1: Find the LCM of 9, 12 and 3: LCM = 36.\nStep 2: Convert: 4/9 = 16/36, 5/12 = 15/36, 1/3 = 12/36.\nStep 3: Order the numerators: 12 < 15 < 16, so 1/3 < 5/12 < 4/9.\nAnswer: 1/3, 5/12, 4/9 ✓' },

        // Block 2: addition & subtraction with unlike denominators, incl. mixed numbers (Q5-9)
        { difficulty: 'Easy-Medium', question: 'Calculate 5/6 + 3/8.', answer: '1 and 5/24', checkMode: 'auto', correctAnswer: '1 and 5/24', correctAnswers: ['1 and 5/24', '1 5/24', '29/24'], explanation: 'Step 1: Find the LCM of 6 and 8: LCM = 24.\nStep 2: Convert: 5/6 = 20/24, 3/8 = 9/24.\nStep 3: Add the numerators: 20 + 9 = 29. Result: 29/24.\nStep 4: Convert to a mixed number: 29 ÷ 24 = 1 remainder 5.\nAnswer: 1 and 5/24 ✓' },
        { difficulty: 'Medium', question: 'Calculate 4/5 − 3/10.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Find the LCM of 5 and 10: LCM = 10.\nStep 2: Convert: 4/5 = 8/10.\nStep 3: Subtract the numerators: 8 − 3 = 5. Result: 5/10.\nStep 4: Simplify by dividing both by 5: 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Medium', question: 'Calculate 3 and 1/6 + 1 and 3/4.', answer: '4 and 11/12', checkMode: 'auto', correctAnswer: '4 and 11/12', correctAnswers: ['4 and 11/12', '4 11/12', '59/12'], explanation: 'Step 1: Convert to improper fractions: 3 and 1/6 = 19/6, 1 and 3/4 = 7/4.\nStep 2: Find the LCM of 6 and 4: LCM = 12.\nStep 3: Convert: 19/6 = 38/12, 7/4 = 21/12.\nStep 4: Add the numerators: 38 + 21 = 59. Result: 59/12.\nStep 5: Convert to a mixed number: 59 ÷ 12 = 4 remainder 11.\nAnswer: 4 and 11/12 ✓' },
        { difficulty: 'Hard', question: 'Bandile calculates 1/2 + 2/5 by writing (1+2)/(2+5) = 3/7. Is he correct? Explain and give the correct answer.', answer: 'No — Bandile added the numerators and denominators directly, which is not how fraction addition works. He must first find a common denominator. The LCM of 2 and 5 is 10, so 1/2 = 5/10 and 2/5 = 4/10. Adding gives 5/10 + 4/10 = 9/10, not 3/7.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 6 and 1/5 − 2 and 1/2.', answer: '3 and 7/10', checkMode: 'auto', correctAnswer: '3 and 7/10', correctAnswers: ['3 and 7/10', '3 7/10', '37/10'], explanation: 'Step 1: Convert to improper fractions: 6 and 1/5 = 31/5, 2 and 1/2 = 5/2.\nStep 2: Find the LCM of 5 and 2: LCM = 10.\nStep 3: Convert: 31/5 = 62/10, 5/2 = 25/10.\nStep 4: Subtract the numerators: 62 − 25 = 37. Result: 37/10.\nStep 5: Convert to a mixed number: 37 ÷ 10 = 3 remainder 7.\nAnswer: 3 and 7/10 ✓' },

        // Block 3: multiplication of fractions & mixed numbers (Q10-13)
        { difficulty: 'Easy-Medium', question: 'Calculate 2/5 × 5/8.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: 'Step 1: Multiply the numerators: 2 × 5 = 10.\nStep 2: Multiply the denominators: 5 × 8 = 40.\nStep 3: Result: 10/40. Simplify by dividing both by 10: 1/4.\nAnswer: 1/4 ✓' },
        { difficulty: 'Medium', question: 'Calculate 7/12 × 4/7.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Step 1: Multiply the numerators: 7 × 4 = 28.\nStep 2: Multiply the denominators: 12 × 7 = 84.\nStep 3: Result: 28/84. Simplify by dividing both by 28: 1/3.\nAnswer: 1/3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 3 and 1/3 × 1 and 4/5.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Step 1: Convert to improper fractions: 3 and 1/3 = 10/3, 1 and 4/5 = 9/5.\nStep 2: Multiply the numerators: 10 × 9 = 90.\nStep 3: Multiply the denominators: 3 × 5 = 15.\nStep 4: Result: 90/15 = 6.\nAnswer: 6 ✓' },
        { difficulty: 'Hard', question: 'Palesa says 5/6 × 2/3 must be bigger than both 5/6 and 2/3, because multiplication always makes numbers bigger. Is she correct? Explain and give the correct product.', answer: 'No — multiplying two proper fractions (both less than 1) gives a smaller answer, because you are finding a fraction of a fraction. 5/6 × 2/3 = 10/18 = 5/9, which is smaller than both 5/6 and 2/3.', checkMode: 'self' },

        // Block 4: division of fractions & mixed numbers (Q14-16)
        { difficulty: 'Medium', question: 'Calculate 7/10 ÷ 3/5.', answer: '1 and 1/6', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 1/6', '7/6'], explanation: 'Step 1: Flip the second fraction to get its reciprocal: 5/3.\nStep 2: 7/10 × 5/3.\nStep 3: Multiply the numerators: 7 × 5 = 35. Multiply the denominators: 10 × 3 = 30.\nStep 4: Result: 35/30. Simplify by dividing both by 5: 7/6.\nStep 5: Convert to a mixed number: 7 ÷ 6 = 1 remainder 1.\nAnswer: 1 and 1/6 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/12 ÷ 5/6.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Flip the second fraction to get its reciprocal: 6/5.\nStep 2: 5/12 × 6/5.\nStep 3: Multiply the numerators: 5 × 6 = 30. Multiply the denominators: 12 × 5 = 60.\nStep 4: Result: 30/60. Simplify by dividing both by 30: 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 5 and 1/4 ÷ 1 and 3/4.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Step 1: Convert to improper fractions: 5 and 1/4 = 21/4, 1 and 3/4 = 7/4.\nStep 2: Flip the second fraction: 4/7.\nStep 3: 21/4 × 4/7.\nStep 4: Multiply the numerators: 21 × 4 = 84. Multiply the denominators: 4 × 7 = 28.\nStep 5: Result: 84/28 = 3.\nAnswer: 3 ✓' },

        // Block 5: mixed operations / order of operations with fractions (Q17-18)
        { difficulty: 'Hard', question: 'Calculate 3/5 + 1/3 × 3/10, using the correct order of operations.', answer: '7/10', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10'], explanation: 'Step 1: Multiplication before addition: 1/3 × 3/10 = 3/30 = 1/10.\nStep 2: Now add: 3/5 + 1/10. Find the LCM of 5 and 10: LCM = 10. Convert: 3/5 = 6/10.\nStep 3: Add the numerators: 6 + 1 = 7.\nAnswer: 7/10 ✓' },
        { difficulty: 'Hard', question: 'Calculate (5/6 + 1/4) ÷ 7/12.', answer: '1 and 6/7', checkMode: 'auto', correctAnswer: '1 and 6/7', correctAnswers: ['1 and 6/7', '1 6/7', '13/7'], explanation: 'Step 1: Work out the bracket first: 5/6 + 1/4. Find the LCM of 6 and 4: LCM = 12. Convert: 5/6 = 10/12, 1/4 = 3/12.\nStep 2: Add: 10/12 + 3/12 = 13/12.\nStep 3: Divide: 13/12 ÷ 7/12 = 13/12 × 12/7 = 156/84 = 13/7.\nStep 4: Convert to a mixed number: 13 ÷ 7 = 1 remainder 6.\nAnswer: 1 and 6/7 ✓' },

        // Block 6: fraction word problems (Q19-20)
        { difficulty: 'Hard', question: 'A builder has painted 5/6 of a wall. Of the painted section, 2/5 is a bright blue colour and the rest is white. What fraction of the whole wall is bright blue?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Step 1: To find a fraction of an amount, multiply: 5/6 × 2/5.\nStep 2: Multiply the numerators: 5 × 2 = 10. Multiply the denominators: 6 × 5 = 30.\nStep 3: Result: 10/30. Simplify by dividing both by 10: 1/3.\nAnswer: 1/3 of the whole wall ✓' },
        { difficulty: 'Hard', question: 'A jug contains 7/10 of a litre of juice. Aviwe pours out 2/7 of the juice in the jug for a friend. What fraction of a litre does she pour out?', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Step 1: "2/7 of the juice in the jug" means 2/7 of 7/10, so multiply: 7/10 × 2/7.\nStep 2: Multiply the numerators: 7 × 2 = 14. Multiply the denominators: 10 × 7 = 70.\nStep 3: Result: 14/70. Simplify by dividing both by 14: 1/5.\nAnswer: 1/5 of a litre ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have fully mastered operations with common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
