import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer roles) ──────────────────────────────────────────
// positive integer      → blue    (#2563eb)
// negative integer      → red     (#dc2626)
// zero / sign change    → green   (#16a34a)
// different-sign ops    → orange  (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Integers',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE INTEGERS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-integers',
      title: 'What are Integers?',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Integers are <strong>all whole numbers</strong> including ${bl('positive numbers')}, ${re('negative numbers')} and ${gr('zero')}. ${re('Negative numbers')} are numbers less than zero, written with a minus sign — for example ${re('-5')}. Integers are used to represent things like temperature below zero, debt, or positions below sea level. The further left a number is on a number line, the smaller its value.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('positive integers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative integers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('zero')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positive integers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Whole numbers greater than zero. Written without a sign: ${bl('1')}, ${bl('2')}, ${bl('3')}, …</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negative integers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Whole numbers less than zero. Written with a minus sign: ${re('-1')}, ${re('-2')}, ${re('-3')}, …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Zero</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Zero')} is neither positive nor negative. It sits at the centre of the number line.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Number line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line showing integers in order. Moving ${re('left')} = getting smaller. Moving ${bl('right')} = getting larger.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember the number line direction</p>` +
        `<p style="margin:0;color:#1e3a8a;">Numbers increase as you move <strong>right</strong> and decrease as you move <strong>left</strong>. So ${re('-10')} is always smaller than ${re('-1')}, and ${re('-1')} is always smaller than ${bl('+1')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is −8 greater or smaller than −3?',
          answer: `${re('-8')} is smaller than ${re('-3')}`,
          steps: [
            `Place both numbers on a number line.`,
            `${re('-8')} is further to the left than ${re('-3')} on the number line.`,
            `The further left a number is, the smaller its value.`,
            `<strong>Answer:</strong> ${re('-8')} is smaller than ${re('-3')} ✓`,
          ],
        },
        {
          question: 'Sipho owes R150. Write this as an integer.',
          answer: `${re('-150')}`,
          steps: [
            `Owing money means Sipho has less than zero — it is represented by a ${re('negative')} integer.`,
            `${re('Negative')} numbers are written with a minus sign.`,
            `<strong>Answer:</strong> Sipho's balance is ${re('-R150')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what integers are, how they are placed on a number line, and real-life examples of negative numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line from -10 to +10 with negative integers highlighted red, zero highlighted green, and positive integers highlighted blue" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ORDERING INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ordering-integers',
      title: 'Ordering Integers',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">To order integers we place them on a number line from smallest to biggest, moving left to right. ${re('Negative numbers')} are always smaller than ${bl('positive numbers')}. Among ${re('negative numbers')}, the one further from zero is actually smaller — for example ${re('-10')} is smaller than ${re('-2')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('zero')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('positive numbers')}</span>` +
        `</div>` +

        // ── Ordering rules ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for ordering integers</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Negative numbers')} are always less than ${gr('zero')} and less than ${bl('positive numbers')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Zero')} is greater than all ${re('negative numbers')} and less than all ${bl('positive numbers')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Among ${re('negative numbers')}, the one with the larger digit is actually the <strong>smaller</strong> integer (it is further from zero on the left side).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Watch out for negative numbers</p>` +
        `<p style="margin:0;color:#991b1b;">With ${re('negative numbers')}, the larger the digit, the <strong>smaller</strong> the integer. ${re('-100')} &lt; ${re('-10')} &lt; ${re('-1')}. Always use a number line to check if you are unsure.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Order from smallest to biggest: −5, 3, −12, 0, 7.',
          answer: `${re('-12')}, ${re('-5')}, ${gr('0')}, ${bl('3')}, ${bl('7')}`,
          steps: [
            `Place all numbers on a number line.`,
            `Start with the most negative (furthest left): ${re('-12')}`,
            `Next: ${re('-5')} — less negative, closer to zero than ${re('-12')}`,
            `Then: ${gr('0')} — separates negatives from positives`,
            `Then positives in increasing order: ${bl('3')}, ${bl('7')}`,
            `<strong>Order:</strong> ${re('-12')}, ${re('-5')}, ${gr('0')}, ${bl('3')}, ${bl('7')} ✓`,
          ],
        },
        {
          question: 'Lerato says −20 is greater than −5 because 20 is greater than 5. Is she correct?',
          answer: `Lerato is incorrect. ${re('-20')} is smaller than ${re('-5')}`,
          steps: [
            `On a number line, ${re('-20')} is further to the left than ${re('-5')}.`,
            `The further left a number is, the smaller its value.`,
            `Even though 20 &gt; 5 as positive numbers, the ${re('negative')} sign flips the order.`,
            `${re('-20')} is actually smaller than ${re('-5')}.`,
            `<strong>Answer:</strong> Lerato is incorrect. ${re('-20')} &lt; ${re('-5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to order integers on a number line from smallest to biggest, including negative numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing the set -12, -5, 0, 3, 7 placed in order with arrows indicating smallest on the left and largest on the right" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING AND SUBTRACTING INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-integers',
      title: 'Adding and Subtracting Integers',
      icon: '+−',
      explanation:
        `<p style="margin-bottom:16px;">When adding integers, if both numbers have the <strong>same sign</strong> we add their values and keep the sign. If they have <strong>different signs</strong> we subtract the smaller value from the larger and keep the sign of the larger. Subtracting an integer is the same as adding its opposite — for example ${bl('5')} − (${re('-3')}) becomes ${bl('5')} + ${bl('3')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('same sign — add values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('different signs — subtract values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sign change — subtract becomes add')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Addition and subtraction rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Same signs → add</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Add')} the values and keep the common sign.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Examples: ${re('-3')} + (${re('-4')}) = ${re('-7')}&nbsp;&nbsp; ${bl('+3')} + ${bl('+4')} = ${bl('+7')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Different signs → subtract</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${or('Subtract')} the smaller value from the larger. Keep the sign of the number with the larger value.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: ${bl('+9')} + (${re('-15')}) → 15 − 9 = 6 → ${re('-6')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Subtracting a negative</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Subtracting a negative')} is the same as adding a positive.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: ${re('-8')} − (${re('-3')}) → ${re('-8')} + ${bl('+3')} = ${re('-5')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Two minuses make a plus</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you see two minus signs next to each other (like − −), they ${gr('cancel out')} and become a plus sign. Always rewrite the sum first so there is only one operation sign before each number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate −7 + (−4).',
          answer: `${re('-11')}`,
          steps: [
            `Both numbers are ${re('negative')} — they have the ${bl('same sign')}.`,
            `${bl('Same signs:')} add the values — 7 + 4 = 11`,
            `Keep the ${re('negative')} sign.`,
            `<strong>Answer:</strong> ${re('-7')} + (${re('-4')}) = ${re('-11')} ✓`,
          ],
        },
        {
          question: 'Calculate 9 + (−15).',
          answer: `${re('-6')}`,
          steps: [
            `${or('Different signs:')} ${bl('+9')} and ${re('-15')}.`,
            `${or('Subtract')} the smaller value from the larger: 15 − 9 = 6`,
            `Keep the sign of the number with the larger value — ${re('-15')} has the larger value, so the answer is ${re('negative')}.`,
            `<strong>Answer:</strong> ${bl('9')} + (${re('-15')}) = ${re('-6')} ✓`,
          ],
        },
        {
          question: 'Calculate −8 − (−3).',
          answer: `${re('-5')}`,
          steps: [
            `${gr('Subtracting a negative')} is the same as adding a positive.`,
            `Rewrite: ${re('-8')} − (${re('-3')}) becomes ${re('-8')} + ${bl('3')}`,
            `Now we have ${or('different signs')}: ${or('subtract')} smaller from larger — 8 − 3 = 5`,
            `Keep the sign of ${re('-8')} (the number with the larger value): the answer is ${re('negative')}.`,
            `<strong>Answer:</strong> ${re('-8')} − (${re('-3')}) = ${re('-5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating adding and subtracting integers using a number line, covering same sign, different sign, and subtracting negatives" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing -7 + (-4) = -11 with arrows moving left from -7 by 4 more steps, colour coded same-sign operation in blue" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MULTIPLYING AND DIVIDING INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-dividing-integers',
      title: 'Multiplying and Dividing Integers',
      icon: '×÷',
      explanation:
        `<p style="margin-bottom:16px;">When multiplying or dividing two integers with the <strong>same sign</strong> the answer is ${gr('positive')}. When the signs are <strong>different</strong> the answer is ${re('negative')}. This rule applies whether multiplying or dividing.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('same sign → positive answer')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('different signs → negative answer')}</span>` +
        `</div>` +

        // ── Sign rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sign rules for multiplication and division</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin-bottom:4px;">${bl('+')} × ${bl('+')} = ${gr('+')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">positive × positive = ${gr('positive')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin-bottom:4px;">${re('-')} × ${re('-')} = ${gr('+')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">negative × negative = ${gr('positive')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#dc2626;margin-bottom:4px;">${bl('+')} × ${re('-')} = ${re('-')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">positive × negative = ${re('negative')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#dc2626;margin-bottom:4px;">${re('-')} × ${bl('+')} = ${re('-')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">negative × positive = ${re('negative')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same rules for division</p>` +
        `<p style="margin:0;color:#1e3a8a;">The sign rules above apply to <strong>both multiplication and division</strong>. Determine the sign of the answer first, then calculate the value using the digits only.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate −6 × −4.',
          answer: `${gr('24')}`,
          steps: [
            `Both numbers have the ${gr('same sign')} (both ${re('negative')}).`,
            `Same signs → ${gr('positive')} answer.`,
            `Multiply the values: 6 × 4 = 24`,
            `<strong>Answer:</strong> ${re('-6')} × ${re('-4')} = ${gr('24')} ✓`,
          ],
        },
        {
          question: 'Calculate −36 ÷ 9.',
          answer: `${re('-4')}`,
          steps: [
            `${re('Different signs:')} ${re('-36')} and ${bl('+9')}.`,
            `Different signs → ${re('negative')} answer.`,
            `Divide the values: 36 ÷ 9 = 4`,
            `<strong>Answer:</strong> ${re('-36')} ÷ ${bl('9')} = ${re('-4')} ✓`,
          ],
        },
        {
          question: 'Calculate 8 × −5.',
          answer: `${re('-40')}`,
          steps: [
            `${re('Different signs:')} ${bl('+8')} and ${re('-5')}.`,
            `Different signs → ${re('negative')} answer.`,
            `Multiply the values: 8 × 5 = 40`,
            `<strong>Answer:</strong> ${bl('8')} × ${re('-5')} = ${re('-40')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sign rules for multiplying and dividing integers with worked examples showing same sign and different sign calculations" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Sign rules table for multiplication and division showing all four combinations: positive x positive, negative x negative, positive x negative, negative x positive" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — comparing negative integers ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is −9 greater or smaller than −2?',
      answer: 'smaller',
      checkMode: 'auto',
      correctAnswer: 'smaller',
      explanation: '−9 is further left on the number line than −2, so −9 is smaller than −2.',
    },

    // ── Q2 Easy — writing a real-life situation as a negative integer ──────────
    {
      difficulty: 'Easy',
      question: 'Write owing R85 as an integer.',
      answer: '-85',
      checkMode: 'auto',
      correctAnswer: '-85',
      explanation: 'Owing money means the value is less than zero — it is a negative integer. Owing R85 is written as −85.',
    },

    // ── Q3 Medium — ordering integers ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Order from smallest to biggest: −8, 4, −15, 0, 6.',
      answer: '−15, −8, 0, 4, 6',
      checkMode: 'self',
    },

    // ── Q4 Hard — correcting a misconception about negative integers ───────────
    {
      difficulty: 'Hard',
      question: 'Sipho says −30 is greater than −10. Is he correct? Explain.',
      answer: 'No — −30 is further left on the number line than −10, so −30 is actually smaller than −10.',
      checkMode: 'self',
    },

    // ── Q5 Easy — adding two negative integers ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate −5 + (−9).',
      answer: '-14',
      checkMode: 'auto',
      correctAnswer: '-14',
      explanation: 'Both numbers are negative (same sign). Add the values: 5 + 9 = 14. Keep the negative sign. Answer: −14.',
    },

    // ── Q6 Easy — adding integers with different signs ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 12 + (−7).',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'Different signs: subtract the smaller value from the larger. 12 − 7 = 5. Keep the positive sign (12 has the larger value). Answer: 5.',
    },

    // ── Q7 Medium — subtracting a negative integer ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate −8 − (−6).',
      answer: '-2',
      checkMode: 'auto',
      correctAnswer: '-2',
      explanation: 'Subtracting a negative becomes adding a positive: −8 − (−6) = −8 + 6. Different signs: 8 − 6 = 2. Keep the negative sign (−8 has the larger value). Answer: −2.',
    },

    // ── Q8 Medium — adding a negative to a negative ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate −14 + 9.',
      answer: '-5',
      checkMode: 'auto',
      correctAnswer: '-5',
      explanation: 'Different signs: subtract the smaller value from the larger. 14 − 9 = 5. Keep the negative sign (−14 has the larger value). Answer: −5.',
    },

    // ── Q9 Hard — correcting a subtraction error ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato calculates −10 − (−15) and gets −25. Is she correct? Explain.',
      answer: 'No — subtracting a negative becomes adding a positive: −10 − (−15) = −10 + 15 = 5, not −25.',
      checkMode: 'self',
    },

    // ── Q10 Easy — multiplying two negative integers ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate −7 × −3.',
      answer: '21',
      checkMode: 'auto',
      correctAnswer: '21',
      explanation: 'Both numbers are negative (same sign). Same signs give a positive answer. 7 × 3 = 21. Answer: 21.',
    },

    // ── Q11 Easy — dividing with different signs ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate −36 ÷ 6.',
      answer: '-6',
      checkMode: 'auto',
      correctAnswer: '-6',
      explanation: 'Different signs (−36 and +6). Different signs give a negative answer. 36 ÷ 6 = 6. Answer: −6.',
    },

    // ── Q12 Medium — multiplying with different signs ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 8 × −9.',
      answer: '-72',
      checkMode: 'auto',
      correctAnswer: '-72',
      explanation: 'Different signs (+8 and −9). Different signs give a negative answer. 8 × 9 = 72. Answer: −72.',
    },

    // ── Q13 Medium — dividing two negative integers ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate −48 ÷ −8.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Both numbers are negative (same sign). Same signs give a positive answer. 48 ÷ 8 = 6. Answer: 6.',
    },

    // ── Q14 Hard — correcting a misconception about sign rules ────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says multiplying two negative numbers always gives a negative answer. Is he correct? Explain.',
      answer: 'No — multiplying two negatives gives a positive answer because the signs are the same. Same signs always give a positive result.',
      checkMode: 'self',
    },

    // ── Q15 Hard — combined multiplication and division ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate −6 × 4 ÷ −2.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Work left to right. First: −6 × 4 = −24 (different signs → negative). Then: −24 ÷ −2 = 12 (same signs → positive). Answer: 12.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered integers.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
