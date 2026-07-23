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
        'Short video explaining what integers are, how they are placed on a number line, and real-life examples of negative numbers',

      diagramPlaceholder:
        'Number line from -10 to +10 with negative integers highlighted red, zero highlighted green, and positive integers highlighted blue',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 85" width="100%" style="max-width:480px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="80" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">negative integers</text>` +
        `<text x="260" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">positive integers</text>` +
        `<line x1="20" y1="50" x2="170" y2="50" stroke="#dc2626" stroke-width="3"/>` +
        `<line x1="170" y1="50" x2="320" y2="50" stroke="#2563eb" stroke-width="3"/>` +
        `<polygon points="12,50 22,45 22,55" fill="#dc2626"/>` +
        `<polygon points="328,50 318,45 318,55" fill="#2563eb"/>` +
        `<line x1="20" y1="44" x2="20" y2="56" stroke="#dc2626" stroke-width="2"/>` +
        `<line x1="95" y1="44" x2="95" y2="56" stroke="#dc2626" stroke-width="2"/>` +
        `<circle cx="170" cy="50" r="5" fill="#16a34a"/>` +
        `<line x1="245" y1="44" x2="245" y2="56" stroke="#2563eb" stroke-width="2"/>` +
        `<line x1="320" y1="44" x2="320" y2="56" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="20" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-10</text>` +
        `<text x="95" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-5</text>` +
        `<text x="170" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="245" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">5</text>` +
        `<text x="320" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">10</text>` +
        `</svg>`,
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
        'Short video showing how to order integers on a number line from smallest to biggest, including negative numbers',

      diagramPlaceholder:
        'Number line showing the set -12, -5, 0, 3, 7 placed in order with arrows indicating smallest on the left and largest on the right',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 95" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="55" x2="280" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,55 22,50 22,60" fill="#0f1f3d"/>` +
        `<polygon points="286,55 278,50 278,60" fill="#0f1f3d"/>` +
        `<circle cx="20" cy="55" r="5" fill="#dc2626"/>` +
        `<circle cx="116" cy="55" r="5" fill="#dc2626"/>` +
        `<circle cx="184" cy="55" r="5" fill="#16a34a"/>` +
        `<circle cx="225" cy="55" r="5" fill="#2563eb"/>` +
        `<circle cx="280" cy="55" r="5" fill="#2563eb"/>` +
        `<text x="20" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-12</text>` +
        `<text x="116" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-5</text>` +
        `<text x="184" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="225" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="280" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">7</text>` +
        `<line x1="40" y1="76" x2="256" y2="76" stroke="#16a34a" stroke-width="1.5"/>` +
        `<polygon points="262,76 254,72 254,80" fill="#16a34a"/>` +
        `<text x="20" y="88" text-anchor="middle" font-size="9" fill="#6b7280">smallest</text>` +
        `<text x="280" y="88" text-anchor="middle" font-size="9" fill="#6b7280">largest</text>` +
        `</svg>`,
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
        'Short video demonstrating adding and subtracting integers using a number line, covering same sign, different sign, and subtracting negatives',

      diagramPlaceholder:
        'Number line showing -7 + (-4) = -11 with arrows moving left from -7 by 4 more steps, colour coded same-sign operation in blue',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="60" x2="280" y2="60" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,60 22,55 22,65" fill="#0f1f3d"/>` +
        `<polygon points="286,60 278,55 278,65" fill="#0f1f3d"/>` +
        `<path d="M128,60 Q117,40 106,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M106,60 Q96,40 85,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M85,60 Q74,40 63,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M63,60 Q53,40 42,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="42,60 50,53 50,63" fill="#2563eb"/>` +
        `<circle cx="128" cy="60" r="5" fill="#dc2626"/>` +
        `<circle cx="42" cy="60" r="5" fill="#dc2626"/>` +
        `<circle cx="280" cy="60" r="4" fill="#6b7280"/>` +
        `<text x="128" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-7</text>` +
        `<text x="42" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-11</text>` +
        `<text x="280" y="80" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="85" y="30" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">4 steps of -1 (same sign)</text>` +
        `</svg>`,
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
        'Short video explaining the sign rules for multiplying and dividing integers with worked examples showing same sign and different sign calculations',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Addition/subtraction of integers | 5-8 Multiplication/division
    // (sign rules) | 9-12 Order of operations (BODMAS) with mixed integers |
    // 13-15 Ordering/comparing integers | 16-18 Real-world word problems
    // (temperature, altitude, bank balance) | 19-20 Multi-step/error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Calculate −12 + 8.', answer: '-4', checkMode: 'auto', correctAnswer: '-4', explanation: 'Different signs: subtract the smaller value from the larger. 12 − 8 = 4. Keep the sign of the larger value (−12), so the answer is negative. Answer: −4.' },
        { difficulty: 'Easy', question: 'Calculate 15 + (−23).', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Different signs: subtract the smaller value from the larger. 23 − 15 = 8. Keep the sign of the larger value (−23), so the answer is negative. Answer: −8.' },
        { difficulty: 'Medium', question: 'Calculate −9 − (−14).', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Subtracting a negative becomes adding a positive: −9 − (−14) = −9 + 14. Different signs: 14 − 9 = 5. Keep the sign of the larger value (14), so the answer is positive. Answer: 5.' },
        { difficulty: 'Medium', question: 'Thabo calculates −6 − 10 and says the answer is −4. Is he correct? Explain and give the correct answer.', answer: 'No — both numbers are negative (same sign), so we add the values and keep the negative sign: −6 − 10 = −16, not −4.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate −8 × 7.', answer: '-56', checkMode: 'auto', correctAnswer: '-56', explanation: 'Different signs (−8 and +7) give a negative answer. 8 × 7 = 56. Answer: −56.' },
        { difficulty: 'Easy', question: 'Calculate −63 ÷ (−9).', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Same signs (both negative) give a positive answer. 63 ÷ 9 = 7. Answer: 7.' },
        { difficulty: 'Medium', question: 'Calculate −5 × (−6).', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Same signs (both negative) give a positive answer. 5 × 6 = 30. Answer: 30.' },
        { difficulty: 'Medium', question: 'Calculate 42 ÷ (−6).', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Different signs (+42 and −6) give a negative answer. 42 ÷ 6 = 7. Answer: −7.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate −3 × 4 + 5.', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Multiplication before addition: −3 × 4 = −12. Then −12 + 5 = −7.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 20 − 3 × (−4).', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'Multiplication before subtraction: 3 × (−4) = −12. Then 20 − (−12) = 20 + 12 = 32.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate (−6 + 2) × (−3).', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Brackets first: −6 + 2 = −4. Then −4 × (−3) = 12 (same signs → positive).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate −10 + 6 × (−2) − 3.', answer: '-25', checkMode: 'auto', correctAnswer: '-25', explanation: 'Multiplication first: 6 × (−2) = −12. Then work left to right: −10 + (−12) = −22, and −22 − 3 = −25.' },
        { difficulty: 'Medium', question: 'Order these integers from smallest to biggest: −8, 3, −15, 0, −1.', answer: '−15, −8, −1, 0, 3', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: −17 or −21?', answer: '-17', checkMode: 'auto', correctAnswer: '-17', explanation: '−17 is closer to zero (further right) on the number line than −21, so −17 is the greater integer.' },
        { difficulty: 'Medium-Hard', question: 'Karabo says −40 is greater than −25 because 40 is greater than 25. Is he correct? Explain.', answer: 'No — on a number line, −40 is further left than −25, so −40 is actually smaller than −25. A bigger digit on a negative number makes it smaller, not greater.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'The temperature overnight was −4°C. By midday it had risen by 9°C. What was the midday temperature?', answer: '5°C', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5°c', '5c'], explanation: 'Start at −4°C and rise by 9°C: −4 + 9 = 5. The midday temperature was 5°C.' },
        { difficulty: 'Medium', question: 'A diver is swimming at a depth of 85 m below sea level, written as −85 m. She rises 32 m towards the surface. What is her new position, as an integer?', answer: '-53', checkMode: 'auto', correctAnswer: '-53', explanation: 'Rising towards the surface means adding to the depth: −85 + 32 = −53. Her new position is −53 m.' },
        { difficulty: 'Medium', question: 'Zanele\'s bank account is overdrawn by R450, written as −R450. She deposits R320. What is her new balance?', answer: '-R130', checkMode: 'auto', correctAnswer: '-130', correctAnswers: ['-130', '-r130'], explanation: 'Add the deposit to the balance: −450 + 320 = −130. Her new balance is −R130 (still overdrawn by R130).' },
        { difficulty: 'Hard', question: 'Calculate −5 × (−3 + 8) ÷ 5.', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Brackets first: −3 + 8 = 5. Then −5 × 5 = −25 (different signs → negative). Finally −25 ÷ 5 = −5.' },
        { difficulty: 'Hard', question: 'Zola calculates −2 × 5 − (−6) and says the answer is 16. Is she correct? Show the correct working.', answer: 'No — first −2 × 5 = −10 (different signs → negative). Then −10 − (−6) = −10 + 6 = −4, not 16.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered integer operations, order of operations, and real-world integer problems.' },
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
        { difficulty: 'Easy', question: 'Calculate −18 + 11.', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Different signs: subtract the smaller value from the larger. 18 − 11 = 7. Keep the sign of the larger value (−18), so the answer is negative. Answer: −7.' },
        { difficulty: 'Easy', question: 'Calculate 24 + (−37).', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Different signs: subtract the smaller value from the larger. 37 − 24 = 13. Keep the sign of the larger value (−37), so the answer is negative. Answer: −13.' },
        { difficulty: 'Medium', question: 'Calculate −13 − (−19).', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Subtracting a negative becomes adding a positive: −13 − (−19) = −13 + 19. Different signs: 19 − 13 = 6. Keep the sign of the larger value (19), so the answer is positive. Answer: 6.' },
        { difficulty: 'Medium', question: 'Naledi calculates −8 − 15 and says the answer is −7. Is she correct? Explain and give the correct answer.', answer: 'No — both numbers are negative (same sign), so we add the values and keep the negative sign: −8 − 15 = −23, not −7.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate −9 × 6.', answer: '-54', checkMode: 'auto', correctAnswer: '-54', explanation: 'Different signs (−9 and +6) give a negative answer. 9 × 6 = 54. Answer: −54.' },
        { difficulty: 'Easy', question: 'Calculate −72 ÷ (−8).', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Same signs (both negative) give a positive answer. 72 ÷ 8 = 9. Answer: 9.' },
        { difficulty: 'Medium', question: 'Calculate −7 × (−4).', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Same signs (both negative) give a positive answer. 7 × 4 = 28. Answer: 28.' },
        { difficulty: 'Medium', question: 'Calculate 54 ÷ (−9).', answer: '-6', checkMode: 'auto', correctAnswer: '-6', explanation: 'Different signs (+54 and −9) give a negative answer. 54 ÷ 9 = 6. Answer: −6.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate −4 × 5 + 6.', answer: '-14', checkMode: 'auto', correctAnswer: '-14', explanation: 'Multiplication before addition: −4 × 5 = −20. Then −20 + 6 = −14.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 18 − 4 × (−3).', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Multiplication before subtraction: 4 × (−3) = −12. Then 18 − (−12) = 18 + 12 = 30.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate (−8 + 3) × (−2).', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Brackets first: −8 + 3 = −5. Then −5 × (−2) = 10 (same signs → positive).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate −9 + 5 × (−3) − 4.', answer: '-28', checkMode: 'auto', correctAnswer: '-28', explanation: 'Multiplication first: 5 × (−3) = −15. Then work left to right: −9 + (−15) = −24, and −24 − 4 = −28.' },
        { difficulty: 'Medium', question: 'Order these integers from smallest to biggest: −6, 5, −19, 0, −2.', answer: '−19, −6, −2, 0, 5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: −23 or −14?', answer: '-14', checkMode: 'auto', correctAnswer: '-14', explanation: '−14 is closer to zero (further right) on the number line than −23, so −14 is the greater integer.' },
        { difficulty: 'Medium-Hard', question: 'Zanele says −55 is greater than −38 because 55 is greater than 38. Is she correct? Explain.', answer: 'No — on a number line, −55 is further left than −38, so −55 is actually smaller than −38. A bigger digit on a negative number makes it smaller, not greater.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'The temperature overnight was −6°C. By midday it had risen by 15°C. What was the midday temperature?', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°c', '9c'], explanation: 'Start at −6°C and rise by 15°C: −6 + 15 = 9. The midday temperature was 9°C.' },
        { difficulty: 'Medium', question: 'A submarine is cruising at a depth of 120 m below sea level, written as −120 m. It rises 45 m towards the surface. What is its new position, as an integer?', answer: '-75', checkMode: 'auto', correctAnswer: '-75', explanation: 'Rising towards the surface means adding to the depth: −120 + 45 = −75. Its new position is −75 m.' },
        { difficulty: 'Medium', question: 'Bongani\'s bank account is overdrawn by R600, written as −R600. He deposits R250. What is his new balance?', answer: '-R350', checkMode: 'auto', correctAnswer: '-350', correctAnswers: ['-350', '-r350'], explanation: 'Add the deposit to the balance: −600 + 250 = −350. His new balance is −R350 (still overdrawn by R350).' },
        { difficulty: 'Hard', question: 'Calculate −4 × (−2 + 9) ÷ 7.', answer: '-4', checkMode: 'auto', correctAnswer: '-4', explanation: 'Brackets first: −2 + 9 = 7. Then −4 × 7 = −28 (different signs → negative). Finally −28 ÷ 7 = −4.' },
        { difficulty: 'Hard', question: 'Bongi calculates −3 × 4 − (−8) and says the answer is −20. Is she correct? Show the correct working.', answer: 'No — first −3 × 4 = −12 (different signs → negative). Then −12 − (−8) = −12 + 8 = −4, not −20.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered integer operations, order of operations, and real-world integer problems.' },
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
        { difficulty: 'Easy', question: 'Calculate −25 + 17.', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Different signs: subtract the smaller value from the larger. 25 − 17 = 8. Keep the sign of the larger value (−25), so the answer is negative. Answer: −8.' },
        { difficulty: 'Easy', question: 'Calculate 19 + (−26).', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Different signs: subtract the smaller value from the larger. 26 − 19 = 7. Keep the sign of the larger value (−26), so the answer is negative. Answer: −7.' },
        { difficulty: 'Medium', question: 'Calculate −11 − (−20).', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Subtracting a negative becomes adding a positive: −11 − (−20) = −11 + 20. Different signs: 20 − 11 = 9. Keep the sign of the larger value (20), so the answer is positive. Answer: 9.' },
        { difficulty: 'Medium', question: 'Sipho calculates −7 − 12 and says the answer is −5. Is he correct? Explain and give the correct answer.', answer: 'No — both numbers are negative (same sign), so we add the values and keep the negative sign: −7 − 12 = −19, not −5.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate −11 × 5.', answer: '-55', checkMode: 'auto', correctAnswer: '-55', explanation: 'Different signs (−11 and +5) give a negative answer. 11 × 5 = 55. Answer: −55.' },
        { difficulty: 'Easy', question: 'Calculate −84 ÷ (−7).', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Same signs (both negative) give a positive answer. 84 ÷ 7 = 12. Answer: 12.' },
        { difficulty: 'Medium', question: 'Calculate −8 × (−9).', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Same signs (both negative) give a positive answer. 8 × 9 = 72. Answer: 72.' },
        { difficulty: 'Medium', question: 'Calculate 63 ÷ (−7).', answer: '-9', checkMode: 'auto', correctAnswer: '-9', explanation: 'Different signs (+63 and −7) give a negative answer. 63 ÷ 7 = 9. Answer: −9.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate −6 × 3 + 7.', answer: '-11', checkMode: 'auto', correctAnswer: '-11', explanation: 'Multiplication before addition: −6 × 3 = −18. Then −18 + 7 = −11.' },
        { difficulty: 'Medium', question: 'Use the correct order of operations to calculate 25 − 5 × (−2).', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Multiplication before subtraction: 5 × (−2) = −10. Then 25 − (−10) = 25 + 10 = 35.' },
        { difficulty: 'Medium-Hard', question: 'Use the correct order of operations to calculate (−9 + 4) × (−4).', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Brackets first: −9 + 4 = −5. Then −5 × (−4) = 20 (same signs → positive).' },
        { difficulty: 'Hard', question: 'Use the correct order of operations to calculate −8 + 7 × (−3) − 5.', answer: '-34', checkMode: 'auto', correctAnswer: '-34', explanation: 'Multiplication first: 7 × (−3) = −21. Then work left to right: −8 + (−21) = −29, and −29 − 5 = −34.' },
        { difficulty: 'Medium', question: 'Order these integers from smallest to biggest: −10, 2, −17, 0, −4.', answer: '−17, −10, −4, 0, 2', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: −31 or −12?', answer: '-12', checkMode: 'auto', correctAnswer: '-12', explanation: '−12 is closer to zero (further right) on the number line than −31, so −12 is the greater integer.' },
        { difficulty: 'Medium-Hard', question: 'Mpho says −62 is greater than −29 because 62 is greater than 29. Is he correct? Explain.', answer: 'No — on a number line, −62 is further left than −29, so −62 is actually smaller than −29. A bigger digit on a negative number makes it smaller, not greater.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'The temperature overnight was −8°C. By midday it had risen by 21°C. What was the midday temperature?', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°c', '13c'], explanation: 'Start at −8°C and rise by 21°C: −8 + 21 = 13. The midday temperature was 13°C.' },
        { difficulty: 'Medium', question: 'A diver is swimming at a depth of 60 m below sea level, written as −60 m. She descends a further 25 m. What is her new position, as an integer?', answer: '-85', checkMode: 'auto', correctAnswer: '-85', explanation: 'Descending further means subtracting from the depth: −60 − 25 = −85. Her new position is −85 m.' },
        { difficulty: 'Medium', question: 'Tumi\'s bank account is overdrawn by R310, written as −R310. He withdraws a further R140. What is his new balance?', answer: '-R450', checkMode: 'auto', correctAnswer: '-450', correctAnswers: ['-450', '-r450'], explanation: 'Subtract the further withdrawal from the balance: −310 − 140 = −450. His new balance is −R450 (overdrawn by R450).' },
        { difficulty: 'Hard', question: 'Calculate −6 × (−4 + 10) ÷ 4.', answer: '-9', checkMode: 'auto', correctAnswer: '-9', explanation: 'Brackets first: −4 + 10 = 6. Then −6 × 6 = −36 (different signs → negative). Finally −36 ÷ 4 = −9.' },
        { difficulty: 'Hard', question: 'Tumi calculates −5 × 6 − (−10) and says the answer is −40. Is he correct? Show the correct working.', answer: 'No — first −5 × 6 = −30 (different signs → negative). Then −30 − (−10) = −30 + 10 = −20, not −40.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered integer operations, order of operations, and real-world integer problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
