import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// numerator      → blue   (#2563eb)
// denominator    → red    (#dc2626)
// fraction value → green  (#16a34a)
const nu = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const de = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const fv = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const cd = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const ef = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

// ─── Stacked fraction helper ──────────────────────────────────────────────────
// Renders a vertical fraction with blue numerator over red denominator
const fr = (n: string, d: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.15;gap:0;margin:0 2px;">` +
  `<span style="color:#2563eb;font-weight:700;border-bottom:1.5px solid #374151;padding:0 3px 1px;font-size:0.9em;">${n}</span>` +
  `<span style="color:#dc2626;font-weight:700;padding:1px 3px 0;font-size:0.9em;">${d}</span>` +
  `</span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FRACTIONS AS PARTS OF A WHOLE AND PARTS OF A GROUP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fractions-parts-whole-group',
      title: 'Fractions as Parts of a Whole and Parts of a Group',
      icon: '½',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">A <strong>fraction</strong> describes <strong>equal parts</strong>. It can describe equal parts of a <strong>whole</strong> (like a shape divided into equal sections) or equal parts of a <strong>group</strong> (like a collection of objects). In Grade 5 we extend our knowledge to include <strong>ninths, tenths, elevenths and twelfths</strong>.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('fraction value')}</span>` +
        `</div>` +

        // ── Key terms heading ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +

        // ── Numerator / Denominator cards ─────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Numerator</p>` +
        `<p style="font-size:28px;font-weight:700;color:#2563eb;margin-bottom:8px;line-height:1;">3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>${nu('top number')}</strong> — how many parts you <strong>have</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Denominator</p>` +
        `<p style="font-size:28px;font-weight:700;color:#dc2626;margin-bottom:8px;line-height:1;">8</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>${de('bottom number')}</strong> — how many equal parts the whole is divided <strong>into</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Fraction visual ────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;margin-bottom:20px;text-align:center;">` +
        `<p style="color:#374151;font-size:14px;margin:0;">For example: ${fr('3','8')} means you have <strong>${nu('3')}</strong> out of <strong>${de('8')}</strong> equal parts.</p>` +
        `</div>` +

        // ── New fractions heading ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">New fractions in Grade 5</p>` +

        // ── Four new fraction cards ────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','9')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Ninth</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','10')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Tenth</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','11')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Eleventh</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 12px;text-align:center;">` +
        `<div style="font-size:24px;line-height:1.4;margin-bottom:8px;">${fr('1','12')}</div>` +
        `<p style="font-weight:600;color:#0f1f3d;font-size:14px;margin:0;">Twelfth</p>` +
        `</div>` +

        `</div>` +

        // ── Fractions of a group heading ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:1.02em;">Finding a fraction of a group</p>` +
        `<p style="margin-bottom:12px;font-size:14px;color:#374151;">To find a fraction of a group, use a two-step method: first find <strong>one part</strong>, then multiply by the <strong>${nu('numerator')}</strong>.</p>` +

        // ── Two-step method ───────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Divide the total by the ${de('denominator')}</strong> — this gives you the value of one equal part of the group.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Multiply by the ${nu('numerator')}</strong> — this gives you the value of that fraction of the group.</p>` +
        `</div>` +

        `</div>` +

        // ── Example box ───────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:10px;font-size:14px;">Example: There are 24 learners and ${fr('3','8')} are girls. How many girls?</p>` +
        `<p style="font-size:14px;margin-bottom:5px;color:#374151;"><strong>Step 1 — Find ${fr('1','8')}:</strong> &nbsp; 24 ÷ ${de('8')} = ${fv('3')}</p>` +
        `<p style="font-size:14px;margin-bottom:8px;color:#374151;"><strong>Step 2 — Multiply by ${nu('3')}:</strong> &nbsp; ${fv('3')} × ${nu('3')} = ${fv('9')}</p>` +
        `<p style="font-size:15px;font-weight:700;color:#16a34a;margin:0;">${fv('9')} girls ✓</p>` +
        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">The group must always be divided into <strong>equal parts</strong>. The ${de('denominator')} tells you how many equal groups to make. The ${nu('numerator')} tells you how many of those groups to count.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: What fraction of 36 is 9? ─────────────────────────────
        {
          question: `What fraction of ${fv('36')} is ${fv('9')}?`,
          answer: `${fv('9')} is ${fr('1','4')} of ${fv('36')}`,
          steps: [
            `<strong>Write as a fraction:</strong> ${nu('9')} out of ${de('36')} equal parts = ${fr('9','36')}`,
            `<strong>Simplify — divide both numbers by ${fv('9')}:</strong> &nbsp; top: ${nu('9')} ÷ 9 = ${nu('1')} &nbsp;&nbsp; bottom: ${de('36')} ÷ 9 = ${de('4')}`,
            `<strong>Simplified:</strong> ${fr('9','36')} = ${fr('1','4')}`,
            `<strong>Answer:</strong> ${fv('9')} is ${fr('1','4')} of ${fv('36')} ✓`,
          ],
        },

        // ── Example 2: Find 5/9 of 63 ─────────────────────────────────────────
        {
          question: `Find ${fr('5','9')} of ${fv('63')}.`,
          answer: `${fr('5','9')} of ${fv('63')} = ${fv('35')}`,
          steps: [
            `<strong>Step 1 — Find ${fr('1','9')} of ${fv('63')}:</strong> &nbsp; Divide by the ${de('denominator')}: ${fv('63')} ÷ ${de('9')} = ${fv('7')}`,
            `<strong>Step 2 — Multiply by the ${nu('numerator')}:</strong> &nbsp; ${fv('7')} × ${nu('5')} = ${fv('35')}`,
            `<strong>Answer:</strong> ${fr('5','9')} of ${fv('63')} = ${fv('35')} ✓`,
          ],
        },

        // ── Example 3: 48 marbles — red and blue ─────────────────────────────
        {
          question: `A bag has ${fv('48')} marbles. ${fr('3','8')} are red and ${fr('1','4')} are blue. How many are red and how many are blue?`,
          answer: `Red: ${fv('18')} marbles. &nbsp; Blue: ${fv('12')} marbles.`,
          steps: [
            `<strong>Red marbles — find ${fr('3','8')} of ${fv('48')}:</strong>`,
            `Step 1: Find ${fr('1','8')}: &nbsp; ${fv('48')} ÷ ${de('8')} = ${fv('6')}`,
            `Step 2: Multiply by ${nu('3')}: &nbsp; ${fv('6')} × ${nu('3')} = ${fv('18')} red marbles`,
            `<strong>Blue marbles — find ${fr('1','4')} of ${fv('48')}:</strong>`,
            `Step 1: Find ${fr('1','4')}: &nbsp; ${fv('48')} ÷ ${de('4')} = ${fv('12')}`,
            `Step 2: Multiply by ${nu('1')}: &nbsp; ${fv('12')} × ${nu('1')} = ${fv('12')} blue marbles`,
            `<strong>Answer:</strong> There are ${fv('18')} red marbles and ${fv('12')} blue marbles ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q1 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Find ${fr('3','4')} of 48.`,
          answer: '36',
          checkMode: 'auto' as const,
          correctAnswer: '36',
        },

        // Q2 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Answer each part:</p>` +
            `<p style="margin-bottom:4px;">a) Find ${fr('5','9')} of 81</p>` +
            `<p style="margin-bottom:4px;">b) Find ${fr('7','8')} of 64</p>` +
            `<p style="margin-bottom:0;">c) What fraction of 45 is 15?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '45' },
            { label: 'b)', correctAnswer: '56' },
            { label: 'c)', correctAnswer: '1/3' },
          ],
        },

        // Q3 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">A bag has 56 marbles. ${fr('3','8')} are red, ${fr('1','4')} are blue and the rest are green.</p>` +
            `<p style="margin-bottom:4px;">a) How many are red?</p>` +
            `<p style="margin-bottom:4px;">b) How many are blue?</p>` +
            `<p style="margin-bottom:4px;">c) How many are green?</p>` +
            `<p style="margin-bottom:0;">d) What fraction are green?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '21' },
            { label: 'b)', correctAnswer: '14' },
            { label: 'c)', correctAnswer: '21' },
            { label: 'd)', correctAnswer: '3/8' },
          ],
        },
      ],

      diagramPlaceholder: 'Two diagrams side by side — left showing a rectangle divided into 9 equal parts with 5 shaded showing 5/9, right showing a group of 63 dots with 35 highlighted showing 5/9 of 63',

      videoPlaceholder: 'Short video explaining fractions as parts of a whole and parts of a group including ninths tenths elevenths and twelfths',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING FRACTIONS WITH DIFFERENT DENOMINATORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions-different-denominators',
      title: 'Comparing and Ordering Fractions with Different Denominators',
      icon: '<',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">To compare fractions with <strong>different denominators</strong>, first find the <strong>${cd('Lowest Common Denominator (LCD)')}</strong>. Convert both fractions to <strong>${ef('equivalent fractions')}</strong> with the LCD, then compare the numerators. A bigger numerator means a bigger fraction.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${cd('common denominator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${ef('equivalent fractions')}</span>` +
        `</div>` +

        // ── Steps heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to compare fractions</p>` +

        // ── Three steps ───────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the ${cd('LCD')}</strong> — the smallest number that both ${de('denominators')} divide into evenly.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Convert to ${ef('equivalent fractions')}</strong> — multiply the top and bottom of each fraction by whatever makes the ${de('denominator')} equal to the ${cd('LCD')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the ${nu('numerators')}</strong> — now that the ${de('denominators')} are the same, a bigger ${nu('numerator')} means a bigger fraction.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#166534;">The ${cd('LCD')} is the <strong>Lowest Common Multiple (LCM)</strong> of the two ${de('denominators')}. Once fractions share the same ${cd('denominator')}, comparing them is exactly like comparing whole numbers.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 2/3 vs 3/4 ────────────────────────────────────────────
        {
          question: `Which is bigger: ${fr('2','3')} or ${fr('3','4')}?`,
          answer: `${fr('3','4')} is bigger than ${fr('2','3')}`,
          steps: [
            `<strong>Step 1 — Find the ${cd('LCD')} of ${de('3')} and ${de('4')}:</strong> &nbsp; ${cd('LCD')} = ${cd('12')}`,
            `<strong>Step 2 — Convert to ${ef('equivalent fractions')} with ${cd('denominator 12')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('2','3')} = ${ef(fr('8','12'))} &nbsp;(multiply top and bottom by 4)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('3','4')} = ${ef(fr('9','12'))} &nbsp;(multiply top and bottom by 3)`,
            `<strong>Step 3 — Compare ${nu('numerators')}:</strong> &nbsp; ${nu('8')} < ${nu('9')}, &nbsp; so ${ef(fr('8','12'))} < ${ef(fr('9','12'))}`,
            `<strong>Answer:</strong> ${fr('3','4')} is bigger than ${fr('2','3')} ✓`,
          ],
        },

        // ── Example 2: Order 1/2, 2/5, 3/4 ──────────────────────────────────
        {
          question: `Order from smallest to biggest: ${fr('1','2')}, ${fr('2','5')}, ${fr('3','4')}`,
          answer: `${fr('2','5')}, ${fr('1','2')}, ${fr('3','4')}`,
          steps: [
            `<strong>Step 1 — Find the ${cd('LCD')} of ${de('2')}, ${de('5')} and ${de('4')}:</strong> &nbsp; ${cd('LCD')} = ${cd('20')}`,
            `<strong>Step 2 — Convert each fraction to ${ef('equivalent fractions')} with ${cd('denominator 20')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('1','2')} = ${ef(fr('10','20'))} &nbsp;(× 10)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('2','5')} = ${ef(fr('8','20'))} &nbsp;(× 4)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('3','4')} = ${ef(fr('15','20'))} &nbsp;(× 5)`,
            `<strong>Step 3 — Order by ${nu('numerator')}:</strong> &nbsp; ${nu('8')} < ${nu('10')} < ${nu('15')}`,
            `<strong>Answer:</strong> ${fr('2','5')}, ${fr('1','2')}, ${fr('3','4')} ✓`,
          ],
        },

        // ── Example 3: 5/6 vs 7/9 ────────────────────────────────────────────
        {
          question: `Compare ${fr('5','6')} and ${fr('7','9')}`,
          answer: `${fr('5','6')} is bigger than ${fr('7','9')}`,
          steps: [
            `<strong>Step 1 — Find the ${cd('LCD')} of ${de('6')} and ${de('9')}:</strong> &nbsp; ${cd('LCD')} = ${cd('18')}`,
            `<strong>Step 2 — Convert to ${ef('equivalent fractions')} with ${cd('denominator 18')}:</strong>` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('5','6')} = ${ef(fr('15','18'))} &nbsp;(× 3)` +
              `<br>&nbsp;&nbsp;&nbsp;${fr('7','9')} = ${ef(fr('14','18'))} &nbsp;(× 2)`,
            `<strong>Step 3 — Compare ${nu('numerators')}:</strong> &nbsp; ${nu('15')} > ${nu('14')}, &nbsp; so ${ef(fr('15','18'))} > ${ef(fr('14','18'))}`,
            `<strong>Answer:</strong> ${fr('5','6')} is bigger than ${fr('7','9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q4 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Which is bigger: ${fr('3','4')} or ${fr('5','6')}?`,
          answer: '5/6',
          checkMode: 'auto' as const,
          correctAnswer: '5/6',
        },

        // Q5 — Medium (2 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Answer each part:</p>` +
            `<p style="margin-bottom:4px;">a) Which is bigger: ${fr('4','5')} or ${fr('7','9')}?</p>` +
            `<p style="margin-bottom:0;">b) Order from smallest to biggest: ${fr('2','3')}, ${fr('3','4')}, ${fr('5','8')}</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '4/5' },
            { label: 'b)', correctAnswer: '5/8, 2/3, 3/4' },
          ],
        },

        // Q6 — Hard (self-mark — Thabo's misconception)
        {
          difficulty: 'Hard' as const,
          question: `Thabo says ${fr('5','6')} > ${fr('7','8')} because 6 is smaller than 8. Is he correct? Show your working using common denominators.`,
          answer: [
            `Step 1: LCD of 6 and 8 is 24`,
            `Step 2: ${fr('5','6')} = ${fr('20','24')} and ${fr('7','8')} = ${fr('21','24')}`,
            `Step 3: ${fr('20','24')} < ${fr('21','24')}`,
            `Answer: No, Thabo is incorrect. ${fr('7','8')} is bigger than ${fr('5','6')}. You cannot compare fractions by just looking at the denominators.`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Two fraction bars showing 2/3 and 3/4 with common denominator 12 used to compare them',

      videoPlaceholder: 'Short video showing how to compare fractions with different denominators using the lowest common denominator',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUIVALENT FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions',
      title: 'Equivalent Fractions',
      icon: '=',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;"><strong>Equivalent fractions</strong> are different fractions that represent the <strong>same amount</strong>. In Grade 5 we find equivalent fractions by <strong>multiplying or dividing</strong> both the numerator and denominator by the <strong>same number</strong>.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('original fraction')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('multiplier')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('equivalent fraction')}</span>` +
        `</div>` +

        // ── Rule box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">Multiply <strong>or</strong> divide <strong>both</strong> the ${nu('numerator')} and ${nu('denominator')} by the <strong>${de('same number')}</strong> to find an ${fv('equivalent fraction')}. The value of the fraction does not change.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find three fractions equivalent to 2/5 ────────────────
        {
          question: `Find three fractions equivalent to ${fr('2','5')}.`,
          answer: `${fv(fr('4','10'))}, ${fv(fr('6','15'))} and ${fv(fr('8','20'))} are all equivalent to ${nu(fr('2','5'))}`,
          steps: [
            `<strong>Step 1 — Multiply by ${de('2/2')}:</strong> &nbsp; ${nu('2')} × ${de('2')} ÷ (${nu('5')} × ${de('2')}) = ${fv(fr('4','10'))}`,
            `<strong>Step 2 — Multiply by ${de('3/3')}:</strong> &nbsp; ${nu('2')} × ${de('3')} ÷ (${nu('5')} × ${de('3')}) = ${fv(fr('6','15'))}`,
            `<strong>Step 3 — Multiply by ${de('4/4')}:</strong> &nbsp; ${nu('2')} × ${de('4')} ÷ (${nu('5')} × ${de('4')}) = ${fv(fr('8','20'))}`,
            `<strong>Answer:</strong> ${fv(fr('4','10'))}, ${fv(fr('6','15'))} and ${fv(fr('8','20'))} are all equivalent to ${nu(fr('2','5'))} ✓`,
          ],
        },

        // ── Example 2: Simplify 18/24 to its simplest form ───────────────────
        {
          question: `Simplify ${nu(fr('18','24'))} to its simplest form.`,
          answer: `${nu(fr('18','24'))} simplified is ${fv(fr('3','4'))}`,
          steps: [
            `<strong>Step 1 — Find the highest common factor of ${nu('18')} and ${nu('24')}:</strong> &nbsp; The highest common factor is ${de('6')}`,
            `<strong>Step 2 — Divide both by ${de('6')}:</strong> &nbsp; ${nu('18')} ÷ ${de('6')} = ${fv('3')} &nbsp;&nbsp; ${nu('24')} ÷ ${de('6')} = ${fv('4')}`,
            `<strong>Answer:</strong> ${nu(fr('18','24'))} simplified is ${fv(fr('3','4'))} ✓`,
          ],
        },

        // ── Example 3: Fill in the missing number: 3/7 = □/28 ────────────────
        {
          question: `Fill in the missing number: ${nu(fr('3','7'))} = ${fv('□')}${fv('/28')}`,
          answer: `${nu(fr('3','7'))} = ${fv(fr('12','28'))}`,
          steps: [
            `<strong>Step 1 — What did we multiply ${nu('7')} by to get ${fv('28')}?</strong> &nbsp; ${nu('7')} × ${de('4')} = ${fv('28')}`,
            `<strong>Step 2 — Multiply the ${nu('numerator')} by the same number:</strong> &nbsp; ${nu('3')} × ${de('4')} = ${fv('12')}`,
            `<strong>Answer:</strong> ${nu(fr('3','7'))} = ${fv(fr('12','28'))} ✓`,
          ],
        },

        // ── Example 4: Are 4/6 and 10/15 equivalent? ─────────────────────────
        {
          question: `Are ${nu(fr('4','6'))} and ${nu(fr('10','15'))} equivalent?`,
          answer: `Yes — both are equivalent to ${fv(fr('2','3'))}`,
          steps: [
            `<strong>Step 1 — Simplify ${nu(fr('4','6'))}:</strong> &nbsp; Divide both by ${de('2')}: ${nu('4')} ÷ ${de('2')} = ${fv('2')}, &nbsp; ${nu('6')} ÷ ${de('2')} = ${fv('3')} &nbsp;→&nbsp; ${fv(fr('2','3'))}`,
            `<strong>Step 2 — Simplify ${nu(fr('10','15'))}:</strong> &nbsp; Divide both by ${de('5')}: ${nu('10')} ÷ ${de('5')} = ${fv('2')}, &nbsp; ${nu('15')} ÷ ${de('5')} = ${fv('3')} &nbsp;→&nbsp; ${fv(fr('2','3'))}`,
            `<strong>Answer:</strong> Yes — ${nu(fr('4','6'))} and ${nu(fr('10','15'))} are both equivalent to ${fv(fr('2','3'))} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q7 — Easy (self-mark)
        {
          difficulty: 'Easy' as const,
          question: `Find two fractions equivalent to ${fr('3','5')}.`,
          answer: [
            `Multiply top and bottom by 2: ${nu('3')} × 2 = ${fv('6')}, ${de('5')} × 2 = ${fv('10')} → ${fv(fr('6','10'))}`,
            `Multiply top and bottom by 3: ${nu('3')} × 3 = ${fv('9')}, ${de('5')} × 3 = ${fv('15')} → ${fv(fr('9','15'))}`,
            `Answer: ${fv(fr('6','10'))} and ${fv(fr('9','15'))} are equivalent to ${fr('3','5')} (or any valid equivalent fractions) ✓`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },

        // Q8 — Medium (3 parts — a and b input boxes, c self-mark)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Answer each part:</p>` +
            `<p style="margin-bottom:4px;">a) Fill in the missing number: ${fr('4','7')} = ${fv('□')}/${fv('28')}</p>` +
            `<p style="margin-bottom:4px;">b) Simplify ${fr('24','36')} to its simplest form</p>` +
            `<p style="margin-bottom:0;">c) Are ${fr('6','8')} and ${fr('9','12')} equivalent? Show your working.</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '16' },
            { label: 'b)', correctAnswer: '2/3' },
            { label: 'c)', checkMode: 'self' as const, answer: 'Yes, both simplify to 3/4' },
          ],
        },

        // Q9 — Hard (self-mark)
        {
          difficulty: 'Hard' as const,
          question: `Lerato says ${fr('15','20')} and ${fr('21','28')} are equivalent. Is she correct? Show full working by simplifying both fractions.`,
          answer: [
            `Step 1: Simplify ${fr('15','20')} — divide by 5: ${nu('15')} ÷ 5 = ${fv('3')}, ${de('20')} ÷ 5 = ${fv('4')} → ${fv(fr('3','4'))}`,
            `Step 2: Simplify ${fr('21','28')} — divide by 7: ${nu('21')} ÷ 7 = ${fv('3')}, ${de('28')} ÷ 7 = ${fv('4')} → ${fv(fr('3','4'))}`,
            `Answer: Yes — both equal ${fv(fr('3','4'))} so they are equivalent ✓`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Three rectangles of equal size showing 2/5, 4/10 and 6/15 all shaded equally to prove they are equivalent',

      videoPlaceholder: 'Short video showing how to find equivalent fractions and simplify fractions using the highest common factor',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ADDING AND SUBTRACTING FRACTIONS WITH THE SAME DENOMINATOR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-fractions-same-denominator',
      title: 'Adding and Subtracting Fractions with the Same Denominator',
      icon: '+',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">When fractions have the <strong>same denominator</strong>, add or subtract the <strong>${nu('numerators')}</strong> and keep the <strong>${de('denominator')}</strong> the same. <strong>Never</strong> add or subtract the denominators.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('numerators')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('answer')}</span>` +
        `</div>` +

        // ── Rules heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules</p>` +

        // ── Addition and subtraction rule cards ───────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Addition</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin:0;">${nu('a')}/${de('c')} + ${nu('b')}/${de('c')} = ${fv('(a+b)')}/${de('c')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Subtraction</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin:0;">${nu('a')}/${de('c')} − ${nu('b')}/${de('c')} = ${fv('(a−b)')}/${de('c')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${de('denominator')} stays the same — only the ${nu('numerators')} are added or subtracted. Always simplify your answer if possible.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 3/8 + 4/8 ─────────────────────────────────────────────
        {
          question: `Calculate ${fr('3','8')} + ${fr('4','8')}`,
          answer: `${fv(fr('7','8'))}`,
          steps: [
            `<strong>Step 1 — Same denominator — keep ${de('8')}.</strong>`,
            `<strong>Step 2 — Add the ${nu('numerators')}: </strong> &nbsp; ${nu('3')} + ${nu('4')} = ${fv('7')}`,
            `<strong>Answer:</strong> ${fv(fr('7','8'))} ✓`,
          ],
        },

        // ── Example 2: 7/10 - 3/10 ───────────────────────────────────────────
        {
          question: `Calculate ${fr('7','10')} − ${fr('3','10')}`,
          answer: `${fv(fr('4','10'))} = ${fv(fr('2','5'))}`,
          steps: [
            `<strong>Step 1 — Same denominator — keep ${de('10')}.</strong>`,
            `<strong>Step 2 — Subtract the ${nu('numerators')}: </strong> &nbsp; ${nu('7')} − ${nu('3')} = ${fv('4')}`,
            `<strong>Step 3 — Simplify: </strong> &nbsp; ${fv(fr('4','10'))} ÷ ${de('2/2')} = ${fv(fr('2','5'))}`,
            `<strong>Answer:</strong> ${fv(fr('4','10'))} which simplifies to ${fv(fr('2','5'))} ✓`,
          ],
        },

        // ── Example 3: 2/9 + 4/9 + 1/9 ──────────────────────────────────────
        {
          question: `Calculate ${fr('2','9')} + ${fr('4','9')} + ${fr('1','9')}`,
          answer: `${fv(fr('7','9'))}`,
          steps: [
            `<strong>Step 1 — Same denominator — keep ${de('9')}.</strong>`,
            `<strong>Step 2 — Add all ${nu('numerators')}: </strong> &nbsp; ${nu('2')} + ${nu('4')} + ${nu('1')} = ${fv('7')}`,
            `<strong>Answer:</strong> ${fv(fr('7','9'))} ✓`,
          ],
        },

        // ── Example 4: Lerato pizza problem ──────────────────────────────────
        {
          question: `Lerato ate ${fr('3','12')} of a pizza for lunch and ${fr('5','12')} for dinner. a) What fraction did she eat altogether? b) What fraction is left?`,
          answer: `She ate ${fv(fr('2','3'))} of the pizza and ${fv(fr('1','3'))} is left.`,
          steps: [
            `<strong>Part a — Add what she ate: </strong> &nbsp; ${nu('3')} + ${nu('5')} = ${fv('8')}, &nbsp; so ${fr('3','12')} + ${fr('5','12')} = ${fv(fr('8','12'))}`,
            `<strong>Simplify: </strong> &nbsp; ${fv(fr('8','12'))} ÷ ${de('4/4')} = ${fv(fr('2','3'))}`,
            `<strong>Part b — Find what is left: </strong> &nbsp; ${fr('12','12')} − ${fr('8','12')} = ${fv(fr('4','12'))}`,
            `<strong>Simplify: </strong> &nbsp; ${fv(fr('4','12'))} ÷ ${de('4/4')} = ${fv(fr('1','3'))}`,
            `<strong>Answer:</strong> She ate ${fv(fr('2','3'))} of the pizza and ${fv(fr('1','3'))} is left ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q10 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Calculate ${fr('4','9')} + ${fr('3','9')}.`,
          answer: '7/9',
          checkMode: 'auto' as const,
          correctAnswer: '7/9',
        },

        // Q11 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Calculate each of the following:</p>` +
            `<p style="margin-bottom:4px;">a) ${fr('5','12')} + ${fr('4','12')} + ${fr('2','12')}</p>` +
            `<p style="margin-bottom:4px;">b) ${fr('9','10')} − ${fr('3','10')}</p>` +
            `<p style="margin-bottom:0;">c) ${fr('7','8')} − ${fr('2','8')} + ${fr('1','8')}</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '11/12' },
            { label: 'b)', correctAnswer: '3/5' },
            { label: 'c)', correctAnswer: '3/4' },
          ],
        },

        // Q12 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">A pizza is cut into 12 equal slices. Sipho ate ${fr('4','12')}, Thabo ate ${fr('3','12')} and Lerato ate ${fr('2','12')}.</p>` +
            `<p style="margin-bottom:4px;">a) What fraction did they eat altogether?</p>` +
            `<p style="margin-bottom:4px;">b) What fraction is left?</p>` +
            `<p style="margin-bottom:4px;">c) Simplify both answers to their simplest form.</p>` +
            `<p style="margin-bottom:0;">d) How many slices are left?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '9/12' },
            { label: 'b)', correctAnswer: '3/12' },
            { label: 'c)', correctAnswer: '3/4 and 1/4' },
            { label: 'd)', correctAnswer: '3' },
          ],
        },
      ],

      diagramPlaceholder: 'Bar model showing 3/8 plus 4/8 equals 7/8 with each part colour coded and labelled',

      videoPlaceholder: 'Short video showing how to add and subtract fractions with the same denominator using bar models',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — FINDING A FRACTION OF A WHOLE NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fraction-of-whole-number',
      title: 'Finding a Fraction of a Whole Number',
      icon: '×',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">To find a fraction of a whole number, <strong>divide by the ${de('denominator')}</strong> then <strong>multiply by the ${nu('numerator')}</strong>.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('denominator')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('numerator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('final answer')}</span>` +
        `</div>` +

        // ── Rule box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">fraction of a whole number = whole number ÷ ${de('denominator')} × ${nu('numerator')}</p>` +
        `</div>` +

        // ── Steps heading ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps</p>` +

        // ── Two steps ─────────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Divide the whole number by the ${de('denominator')}</strong> — this gives you the value of one equal part.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Multiply by the ${nu('numerator')}</strong> — this gives you the ${fv('final answer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#166534;"><strong>Divide</strong> by the ${de('denominator')} first, then <strong>multiply</strong> by the ${nu('numerator')}. The whole number must be exactly divisible by the ${de('denominator')} — check this before you start.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find 3/5 of 45 ────────────────────────────────────────
        {
          question: `Find ${fr('3','5')} of 45`,
          answer: `${fr('3','5')} of 45 = ${fv('27')}`,
          steps: [
            `<strong>Step 1 — Divide by the ${de('denominator')}: </strong> &nbsp; 45 ÷ ${de('5')} = 9`,
            `<strong>Step 2 — Multiply by the ${nu('numerator')}: </strong> &nbsp; 9 × ${nu('3')} = ${fv('27')}`,
            `<strong>Answer:</strong> ${fr('3','5')} of 45 = ${fv('27')} ✓`,
          ],
        },

        // ── Example 2: Find 7/9 of 63 ────────────────────────────────────────
        {
          question: `Find ${fr('7','9')} of 63`,
          answer: `${fr('7','9')} of 63 = ${fv('49')}`,
          steps: [
            `<strong>Step 1 — Divide by the ${de('denominator')}: </strong> &nbsp; 63 ÷ ${de('9')} = 7`,
            `<strong>Step 2 — Multiply by the ${nu('numerator')}: </strong> &nbsp; 7 × ${nu('7')} = ${fv('49')}`,
            `<strong>Answer:</strong> ${fr('7','9')} of 63 = ${fv('49')} ✓`,
          ],
        },

        // ── Example 3: School learners walking ───────────────────────────────
        {
          question: `A school has 360 learners. ${fr('5','8')} of them walk to school. How many learners walk?`,
          answer: `${fv('225')} learners walk to school`,
          steps: [
            `<strong>Step 1 — Find ${fr('5','8')} of 360.</strong>`,
            `<strong>Step 2 — Divide by the ${de('denominator')}: </strong> &nbsp; 360 ÷ ${de('8')} = 45`,
            `<strong>Step 3 — Multiply by the ${nu('numerator')}: </strong> &nbsp; 45 × ${nu('5')} = ${fv('225')}`,
            `<strong>Answer:</strong> ${fv('225')} learners walk to school ✓`,
          ],
        },

        // ── Example 4: Sipho salary savings ──────────────────────────────────
        {
          question: `Sipho earns R4 200 per month. He saves ${fr('2','7')} of his salary. How much does he save?`,
          answer: `Sipho saves ${fv('R1 200')} per month`,
          steps: [
            `<strong>Step 1 — Find ${fr('2','7')} of 4 200.</strong>`,
            `<strong>Step 2 — Divide by the ${de('denominator')}: </strong> &nbsp; 4 200 ÷ ${de('7')} = 600`,
            `<strong>Step 3 — Multiply by the ${nu('numerator')}: </strong> &nbsp; 600 × ${nu('2')} = ${fv('1 200')}`,
            `<strong>Answer:</strong> Sipho saves ${fv('R1 200')} per month ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q13 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Find ${fr('2','3')} of 36.`,
          answer: '24',
          checkMode: 'auto' as const,
          correctAnswer: '24',
        },

        // Q14 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Answer each part:</p>` +
            `<p style="margin-bottom:4px;">a) Find ${fr('4','7')} of 56</p>` +
            `<p style="margin-bottom:4px;">b) Find ${fr('5','6')} of 72</p>` +
            `<p style="margin-bottom:0;">c) Find ${fr('3','11')} of 99</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '32' },
            { label: 'b)', correctAnswer: '60' },
            { label: 'c)', correctAnswer: '27' },
          ],
        },

        // Q15 — Hard (4 parts, word problem)
        {
          difficulty: 'Hard' as const,
          question:
            `<p style="margin-bottom:8px;">A school has 420 learners. ${fr('3','7')} walk to school, ${fr('2','5')} come by car and the rest come by bus.</p>` +
            `<p style="margin-bottom:4px;">a) How many walk?</p>` +
            `<p style="margin-bottom:4px;">b) How many come by car?</p>` +
            `<p style="margin-bottom:4px;">c) How many come by bus?</p>` +
            `<p style="margin-bottom:0;">d) What fraction come by bus?</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '180' },
            { label: 'b)', correctAnswer: '168' },
            { label: 'c)', correctAnswer: '72' },
            { label: 'd)', correctAnswer: '6/35' },
          ],
        },
      ],

      videoPlaceholder: 'Short video showing how to find a fraction of a whole number using divide by denominator then multiply by numerator',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — MIXED NUMBERS AND IMPROPER FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Mixed Numbers and Improper Fractions',
      icon: '↔',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">A <strong>mixed number</strong> has a whole number part and a fraction part — for example ${nu('2')} ${de('3')}/${fv('4')}. An <strong>improper fraction</strong> has a numerator larger than its denominator — for example ${de('11')}/${fv('4')}. In Grade 5 we learn to convert between the two.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('whole number')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${de('numerator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${fv('denominator')}</span>` +
        `</div>` +

        // ── Key terms ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Mixed Number</p>` +
        `<p style="font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.3;">${nu('3')} ${de('1')}/${fv('2')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A <strong>${nu('whole number')}</strong> and a <strong>fraction</strong> together.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Improper Fraction</p>` +
        `<p style="font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.3;">${de('7')}/${fv('2')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>${de('numerator')}</strong> is larger than the <strong>${fv('denominator')}</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Converting mixed → improper ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting a mixed number to an improper fraction</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Multiply the ${nu('whole number')} by the ${fv('denominator')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add the ${de('numerator')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Keep the same ${fv('denominator')}</strong></p>` +
        `</div>` +

        `</div>` +

        // ── Converting improper → mixed ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting an improper fraction to a mixed number</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Divide ${de('numerator')} by ${fv('denominator')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>The quotient is the ${nu('whole number')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>The remainder is the new ${de('numerator')}</strong></p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Keep the same ${fv('denominator')}</strong></p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">Mixed → improper: <strong>(${nu('whole')} × ${fv('denominator')}) + ${de('numerator')}</strong>, keep the ${fv('denominator')}. &nbsp; Improper → mixed: divide ${de('numerator')} by ${fv('denominator')}, quotient is the ${nu('whole number')} and remainder is the new ${de('numerator')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Convert 2 3/4 to an improper fraction ─────────────────
        {
          question: `Convert ${nu('2')} ${de('3')}/${fv('4')} to an improper fraction`,
          answer: `${de('11')}/${fv('4')}`,
          steps: [
            `<strong>Step 1 — Multiply the ${nu('whole number')} by the ${fv('denominator')}:</strong> &nbsp; ${nu('2')} × ${fv('4')} = 8`,
            `<strong>Step 2 — Add the ${de('numerator')}:</strong> &nbsp; 8 + ${de('3')} = ${de('11')}`,
            `<strong>Step 3 — Keep the ${fv('denominator')}:</strong> &nbsp; ${fv('4')}`,
            `<strong>Answer:</strong> ${nu('2')} ${de('3')}/${fv('4')} = ${de('11')}/${fv('4')} ✓`,
          ],
        },

        // ── Example 2: Convert 3 2/5 to an improper fraction ─────────────────
        {
          question: `Convert ${nu('3')} ${de('2')}/${fv('5')} to an improper fraction`,
          answer: `${de('17')}/${fv('5')}`,
          steps: [
            `<strong>Step 1 — Multiply the ${nu('whole number')} by the ${fv('denominator')}:</strong> &nbsp; ${nu('3')} × ${fv('5')} = 15`,
            `<strong>Step 2 — Add the ${de('numerator')}:</strong> &nbsp; 15 + ${de('2')} = ${de('17')}`,
            `<strong>Step 3 — Keep the ${fv('denominator')}:</strong> &nbsp; ${fv('5')}`,
            `<strong>Answer:</strong> ${nu('3')} ${de('2')}/${fv('5')} = ${de('17')}/${fv('5')} ✓`,
          ],
        },

        // ── Example 3: Convert 13/4 to a mixed number ─────────────────────────
        {
          question: `Convert ${de('13')}/${fv('4')} to a mixed number`,
          answer: `${nu('3')} ${de('1')}/${fv('4')}`,
          steps: [
            `<strong>Step 1 — Divide ${de('numerator')} by ${fv('denominator')}:</strong> &nbsp; ${de('13')} ÷ ${fv('4')} = ${nu('3')} remainder ${de('1')}`,
            `<strong>Step 2 — The quotient is the ${nu('whole number')}:</strong> &nbsp; ${nu('3')}`,
            `<strong>Step 3 — The remainder is the new ${de('numerator')}:</strong> &nbsp; ${de('1')}`,
            `<strong>Answer:</strong> ${de('13')}/${fv('4')} = ${nu('3')} ${de('1')}/${fv('4')} ✓`,
          ],
        },

        // ── Example 4: Convert 22/6 to a mixed number and simplify ───────────
        {
          question: `Convert ${de('22')}/${fv('6')} to a mixed number and simplify`,
          answer: `${nu('3')} ${de('2')}/${fv('3')}`,
          steps: [
            `<strong>Step 1 — Divide ${de('numerator')} by ${fv('denominator')}:</strong> &nbsp; ${de('22')} ÷ ${fv('6')} = ${nu('3')} remainder ${de('4')}`,
            `<strong>Step 2 — Write as a mixed number:</strong> &nbsp; ${nu('3')} ${de('4')}/${fv('6')}`,
            `<strong>Step 3 — Simplify ${de('4')}/${fv('6')} by dividing by 2:</strong> &nbsp; ${de('4')} ÷ 2 = ${de('2')}, &nbsp; ${fv('6')} ÷ 2 = ${fv('3')}`,
            `<strong>Answer:</strong> ${de('22')}/${fv('6')} = ${nu('3')} ${de('2')}/${fv('3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // Q16 — Easy
        {
          difficulty: 'Easy' as const,
          question: `Convert ${nu('2')} ${de('3')}/${fv('5')} to an improper fraction.`,
          answer: '13/5',
          checkMode: 'auto' as const,
          correctAnswer: '13/5',
        },

        // Q17 — Medium (3 parts)
        {
          difficulty: 'Medium' as const,
          question:
            `<p style="margin-bottom:8px;">Answer each part:</p>` +
            `<p style="margin-bottom:4px;">a) Convert ${nu('3')} ${de('4')}/${fv('7')} to an improper fraction</p>` +
            `<p style="margin-bottom:4px;">b) Convert ${fr('19','4')} to a mixed number</p>` +
            `<p style="margin-bottom:0;">c) Convert ${fr('23','6')} to a mixed number and simplify</p>`,
          answer: '',
          checkMode: 'auto' as const,
          parts: [
            { label: 'a)', correctAnswer: '25/7' },
            { label: 'b)', correctAnswer: '4 3/4' },
            { label: 'c)', correctAnswer: '3 5/6' },
          ],
        },

        // Q18 — Hard (self-mark — Thabo's misconception)
        {
          difficulty: 'Hard' as const,
          question: `Thabo says ${nu('4')} ${de('2')}/${fv('3')} is the same as ${fr('15','3')}. Is he correct? Show your full working.`,
          answer: [
            `<strong>Step 1 — Convert ${nu('4')} ${de('2')}/${fv('3')} to an improper fraction:</strong> &nbsp; ${nu('4')} × ${fv('3')} + ${de('2')} = 12 + 2 = ${de('14')} &nbsp;→&nbsp; ${fr('14','3')}`,
            `<strong>Step 2 — Evaluate ${fr('15','3')}:</strong> &nbsp; ${fv('15')} ÷ ${fv('3')} = ${fv('5')} which is a whole number, not equal to ${nu('4')} ${de('2')}/${fv('3')}`,
            `<strong>Answer:</strong> No — Thabo is incorrect. ${nu('4')} ${de('2')}/${fv('3')} = ${fr('14','3')}, not ${fr('15','3')}.`,
          ].join('<br>'),
          checkMode: 'self' as const,
        },
      ],

      diagramPlaceholder: 'Number line showing mixed numbers and their equivalent improper fractions from 0 to 3 with marks at each half quarter and third',

      videoPlaceholder: 'Short video showing how to convert between mixed numbers and improper fractions with step by step worked examples',
    },
  ],

  resultsSummary: {
    totalMarks: 38,
    messages: [
      {
        upTo: 12,
        text: `Keep practising — fractions take time to master. Review the study guides, then hit Try Again. You've got this!`,
      },
      {
        upTo: 25,
        text: `Good effort! You're making real progress with fractions. Go back and review the sections you found tricky, then try again.`,
      },
      {
        upTo: 33,
        text: `Well done! You have a solid understanding of common fractions. A little more practice and you'll be at the top!`,
      },
      {
        upTo: 38,
        text: `Excellent! You've mastered common fractions. Outstanding work — keep it up!`,
      },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Fraction of a group/whole number | 4-7 Equivalent fractions
    // & simplifying | 8-11 Comparing/ordering | 12-14 Add/subtract same
    // denominator | 15-16 Mixed numbers & improper fractions |
    // 17-19 Multi-step word problems, error-spotting, capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Find 3/5 of 45.', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Divide by the denominator: 45 ÷ 5 = 9. Multiply by the numerator: 9 × 3 = 27.' },
        { difficulty: 'Easy', question: 'A shop has 72 loaves of bread. 5/9 of the loaves are brown bread. How many loaves are brown bread?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Divide by the denominator: 72 ÷ 9 = 8. Multiply by the numerator: 8 × 5 = 40.' },
        { difficulty: 'Easy', question: 'Answer each part.\na) Find 2/7 of 84\nb) Find 7/12 of 96', answer: 'a) 24  b) 56', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '24' }, { label: 'b)', correctAnswer: '56' } ] },
        { difficulty: 'Easy', question: 'A class has 88 stickers to share. 4/11 of the stickers are gold stars. How many stickers are gold stars?', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32'], explanation: 'Divide by the denominator: 88 ÷ 11 = 8. Multiply by the numerator: 8 × 4 = 32.' },
        { difficulty: 'Easy-Medium', question: 'Find an equivalent fraction to 2/3 by multiplying the numerator and denominator by 4.', answer: '8/12', checkMode: 'auto', correctAnswer: '8/12', correctAnswers: ['8/12'], explanation: 'Multiply both numbers by 4: 2 × 4 = 8, and 3 × 4 = 12, so 2/3 = 8/12.' },
        { difficulty: 'Easy-Medium', question: 'Fill in the missing numerator: 3/7 = ?/28', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: '7 × 4 = 28, so multiply the numerator by 4 too: 3 × 4 = 12.' },
        { difficulty: 'Medium', question: 'Simplify 16/24 to its lowest terms.', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3'], explanation: 'The highest common factor of 16 and 24 is 8. Divide both by 8: 16 ÷ 8 = 2, 24 ÷ 8 = 3, giving 2/3.' },
        { difficulty: 'Medium', question: 'Zinhle says 8/12 and 10/15 are equivalent fractions. Is she correct? Show your working by simplifying both fractions.', answer: 'Yes, both simplify to 2/3', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is bigger: 3/5 or 5/8?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'LCD of 5 and 8 is 40. 3/5 = 24/40 and 5/8 = 25/40. Since 25 > 24, 5/8 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 3/5, 7/10, 2/3', answer: '3/5, 2/3, 7/10', checkMode: 'auto', correctAnswer: '3/5,2/3,7/10', correctAnswers: ['3/5,2/3,7/10', '3/5, 2/3, 7/10'], explanation: 'LCD of 5, 10 and 3 is 30. 3/5 = 18/30, 7/10 = 21/30, 2/3 = 20/30. Ordering by numerator: 18 < 20 < 21, so 3/5, 2/3, 7/10.' },
        { difficulty: 'Medium', question: 'Compare 5/6 and 7/9. Which fraction is bigger?', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'LCD of 6 and 9 is 18. 5/6 = 15/18 and 7/9 = 14/18. Since 15 > 14, 5/6 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 5/9, 2/3, 7/12', answer: '5/9, 7/12, 2/3', checkMode: 'auto', correctAnswer: '5/9,7/12,2/3', correctAnswers: ['5/9,7/12,2/3', '5/9, 7/12, 2/3'], explanation: 'LCD of 9, 3 and 12 is 36. 5/9 = 20/36, 2/3 = 24/36, 7/12 = 21/36. Ordering by numerator: 20 < 21 < 24, so 5/9, 7/12, 2/3.' },
        { difficulty: 'Medium', question: 'Calculate 5/9 + 2/9.', answer: '7/9', checkMode: 'auto', correctAnswer: '7/9', correctAnswers: ['7/9'], explanation: 'Same denominator, so add the numerators: 5 + 2 = 7. Keep the denominator: 7/9.' },
        { difficulty: 'Medium', question: 'Calculate 7/8 − 3/8.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '4/8'], explanation: 'Same denominator, so subtract the numerators: 7 − 3 = 4, giving 4/8. Simplify by dividing by 4: 4/8 = 1/2.' },
        { difficulty: 'Medium', question: 'Calculate 5/12 − 2/12 + 4/12.', answer: '7/12', checkMode: 'auto', correctAnswer: '7/12', correctAnswers: ['7/12'], explanation: 'Work left to right with the numerators: 5 − 2 = 3, then 3 + 4 = 7. Keep the denominator: 7/12.' },
        { difficulty: 'Medium-Hard', question: 'Convert 3 2/5 to an improper fraction.', answer: '17/5', checkMode: 'auto', correctAnswer: '17/5', correctAnswers: ['17/5'], explanation: 'Multiply the whole number by the denominator: 3 × 5 = 15. Add the numerator: 15 + 2 = 17. Keep the denominator: 17/5.' },
        { difficulty: 'Medium-Hard', question: 'Convert 29/8 to a mixed number.', answer: '3 5/8', checkMode: 'auto', correctAnswer: '3 5/8', correctAnswers: ['3 5/8', '35/8', '3-5/8'], explanation: 'Divide the numerator by the denominator: 29 ÷ 8 = 3 remainder 5. The quotient 3 is the whole number, and the remainder 5 becomes the new numerator: 3 5/8.' },
        { difficulty: 'Hard', question: 'Sam has R360 in his wallet. He spends 2/5 of it on a book and 1/4 of it on a game. How much money does he have left?', answer: 'R126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', 'R126'], explanation: 'Book: 360 ÷ 5 × 2 = R144. Game: 360 ÷ 4 × 1 = R90. Total spent: 144 + 90 = R234. Left over: 360 − 234 = R126.' },
        { difficulty: 'Hard', question: 'A learner says 1/4 + 1/4 = 2/8, because "you add the tops and the bottoms." Is the learner correct? Explain the mistake and give the correct answer.', answer: 'No — when denominators are already the same, you only add the numerators and keep the denominator the same. 1/4 + 1/4 = 2/4 = 1/2, not 2/8. Adding the denominators as well double-counts how many parts the whole is split into.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A school has 40 learners in a class. 3/8 of them walk to school and 1/5 of them cycle. The rest come by bus.\na) How many learners walk?\nb) How many learners cycle?\nc) How many learners come by bus?\nd) What fraction of the class comes by bus?', answer: 'a) 15  b) 8  c) 17  d) 17/40', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '15' }, { label: 'b)', correctAnswer: '8' }, { label: 'c)', correctAnswer: '17' }, { label: 'd)', correctAnswer: '17/40' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered fractions of groups, equivalent fractions, comparing, adding, subtracting and mixed numbers.' },
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
        { difficulty: 'Easy', question: 'Find 4/9 of 54.', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Divide by the denominator: 54 ÷ 9 = 6. Multiply by the numerator: 6 × 4 = 24.' },
        { difficulty: 'Easy', question: 'A farmer has 90 chickens. 3/10 of them are roosters. How many roosters are there?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Divide by the denominator: 90 ÷ 10 = 9. Multiply by the numerator: 9 × 3 = 27.' },
        { difficulty: 'Easy', question: 'Answer each part.\na) Find 5/6 of 96\nb) Find 2/11 of 110', answer: 'a) 80  b) 20', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '80' }, { label: 'b)', correctAnswer: '20' } ] },
        { difficulty: 'Easy', question: 'A choir has 120 members. 7/12 of them are sopranos. How many sopranos are in the choir?', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70'], explanation: 'Divide by the denominator: 120 ÷ 12 = 10. Multiply by the numerator: 10 × 7 = 70.' },
        { difficulty: 'Easy-Medium', question: 'Find an equivalent fraction to 3/4 by multiplying the numerator and denominator by 5.', answer: '15/20', checkMode: 'auto', correctAnswer: '15/20', correctAnswers: ['15/20'], explanation: 'Multiply both numbers by 5: 3 × 5 = 15, and 4 × 5 = 20, so 3/4 = 15/20.' },
        { difficulty: 'Easy-Medium', question: 'Fill in the missing numerator: 5/6 = ?/42', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35'], explanation: '6 × 7 = 42, so multiply the numerator by 7 too: 5 × 7 = 35.' },
        { difficulty: 'Medium', question: 'Simplify 21/28 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: 'The highest common factor of 21 and 28 is 7. Divide both by 7: 21 ÷ 7 = 3, 28 ÷ 7 = 4, giving 3/4.' },
        { difficulty: 'Medium', question: 'Karabo says 15/18 and 20/24 are equivalent fractions. Is he correct? Show your working by simplifying both fractions.', answer: 'Yes, both simplify to 5/6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is bigger: 5/8 or 7/12?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'LCD of 8 and 12 is 24. 5/8 = 15/24 and 7/12 = 14/24. Since 15 > 14, 5/8 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 1/3, 5/12, 3/8', answer: '1/3, 3/8, 5/12', checkMode: 'auto', correctAnswer: '1/3,3/8,5/12', correctAnswers: ['1/3,3/8,5/12', '1/3, 3/8, 5/12'], explanation: 'LCD of 3, 12 and 8 is 24. 1/3 = 8/24, 5/12 = 10/24, 3/8 = 9/24. Ordering by numerator: 8 < 9 < 10, so 1/3, 3/8, 5/12.' },
        { difficulty: 'Medium', question: 'Compare 7/10 and 5/8. Which fraction is bigger?', answer: '7/10', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10'], explanation: 'LCD of 10 and 8 is 40. 7/10 = 28/40 and 5/8 = 25/40. Since 28 > 25, 7/10 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 3/4, 5/6, 7/12', answer: '7/12, 3/4, 5/6', checkMode: 'auto', correctAnswer: '7/12,3/4,5/6', correctAnswers: ['7/12,3/4,5/6', '7/12, 3/4, 5/6'], explanation: 'LCD of 4, 6 and 12 is 12. 3/4 = 9/12, 5/6 = 10/12, 7/12 stays 7/12. Ordering by numerator: 7 < 9 < 10, so 7/12, 3/4, 5/6.' },
        { difficulty: 'Medium', question: 'Calculate 3/7 + 2/7.', answer: '5/7', checkMode: 'auto', correctAnswer: '5/7', correctAnswers: ['5/7'], explanation: 'Same denominator, so add the numerators: 3 + 2 = 5. Keep the denominator: 5/7.' },
        { difficulty: 'Medium', question: 'Calculate 9/10 − 4/10.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '5/10'], explanation: 'Same denominator, so subtract the numerators: 9 − 4 = 5, giving 5/10. Simplify by dividing by 5: 5/10 = 1/2.' },
        { difficulty: 'Medium', question: 'Calculate 7/9 − 2/9 + 3/9.', answer: '8/9', checkMode: 'auto', correctAnswer: '8/9', correctAnswers: ['8/9'], explanation: 'Work left to right with the numerators: 7 − 2 = 5, then 5 + 3 = 8. Keep the denominator: 8/9.' },
        { difficulty: 'Medium-Hard', question: 'Convert 4 3/7 to an improper fraction.', answer: '31/7', checkMode: 'auto', correctAnswer: '31/7', correctAnswers: ['31/7'], explanation: 'Multiply the whole number by the denominator: 4 × 7 = 28. Add the numerator: 28 + 3 = 31. Keep the denominator: 31/7.' },
        { difficulty: 'Medium-Hard', question: 'Convert 35/6 to a mixed number.', answer: '5 5/6', checkMode: 'auto', correctAnswer: '5 5/6', correctAnswers: ['5 5/6', '55/6', '5-5/6'], explanation: 'Divide the numerator by the denominator: 35 ÷ 6 = 5 remainder 5. The quotient 5 is the whole number, and the remainder 5 becomes the new numerator: 5 5/6.' },
        { difficulty: 'Hard', question: 'Palesa has R450 saved. She spends 1/3 of it on shoes and 2/9 of it on food. How much money does she have left?', answer: 'R200', checkMode: 'auto', correctAnswer: '200', correctAnswers: ['200', 'R200'], explanation: 'Shoes: 450 ÷ 3 × 1 = R150. Food: 450 ÷ 9 × 2 = R100. Total spent: 150 + 100 = R250. Left over: 450 − 250 = R200.' },
        { difficulty: 'Hard', question: 'A learner subtracts 5/6 − 1/6 and writes the answer as 4/0, saying "the denominators cancel out when they are the same." Is this correct? Explain the mistake and give the correct answer.', answer: 'No — the denominator does not disappear or become zero. When denominators are the same, only the numerators are subtracted, and the denominator stays the same. 5/6 − 1/6 = 4/6, which simplifies to 2/3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 48 marbles. 1/3 of them are red and 1/4 of them are blue. The rest are green.\na) How many marbles are red?\nb) How many marbles are blue?\nc) How many marbles are green?\nd) What fraction of the marbles are green?', answer: 'a) 16  b) 12  c) 20  d) 5/12', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '16' }, { label: 'b)', correctAnswer: '12' }, { label: 'c)', correctAnswer: '20' }, { label: 'd)', correctAnswer: '5/12' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with fractions of groups, equivalent fractions, comparing, adding, subtracting and mixed numbers.' },
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
        { difficulty: 'Easy', question: 'Find 5/7 of 84.', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60'], explanation: 'Divide by the denominator: 84 ÷ 7 = 12. Multiply by the numerator: 12 × 5 = 60.' },
        { difficulty: 'Easy', question: 'A netball tournament has 110 players registered. 4/11 of them play as defenders. How many defenders are there?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Divide by the denominator: 110 ÷ 11 = 10. Multiply by the numerator: 10 × 4 = 40.' },
        { difficulty: 'Easy', question: 'Answer each part.\na) Find 3/8 of 144\nb) Find 7/9 of 108', answer: 'a) 54  b) 84', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '54' }, { label: 'b)', correctAnswer: '84' } ] },
        { difficulty: 'Easy', question: 'A vegetable garden has 132 plants. 5/12 of the plants are tomatoes. How many tomato plants are there?', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55'], explanation: 'Divide by the denominator: 132 ÷ 12 = 11. Multiply by the numerator: 11 × 5 = 55.' },
        { difficulty: 'Easy-Medium', question: 'Find an equivalent fraction to 4/5 by multiplying the numerator and denominator by 3.', answer: '12/15', checkMode: 'auto', correctAnswer: '12/15', correctAnswers: ['12/15'], explanation: 'Multiply both numbers by 3: 4 × 3 = 12, and 5 × 3 = 15, so 4/5 = 12/15.' },
        { difficulty: 'Easy-Medium', question: 'Fill in the missing numerator: 2/9 = ?/54', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: '9 × 6 = 54, so multiply the numerator by 6 too: 2 × 6 = 12.' },
        { difficulty: 'Medium', question: 'Simplify 18/45 to its lowest terms.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5'], explanation: 'The highest common factor of 18 and 45 is 9. Divide both by 9: 18 ÷ 9 = 2, 45 ÷ 9 = 5, giving 2/5.' },
        { difficulty: 'Medium', question: 'Boitumelo says 12/16 and 15/20 are equivalent fractions. Is she correct? Show your working by simplifying both fractions.', answer: 'Yes, both simplify to 3/4', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is bigger: 4/9 or 5/12?', answer: '4/9', checkMode: 'auto', correctAnswer: '4/9', correctAnswers: ['4/9'], explanation: 'LCD of 9 and 12 is 36. 4/9 = 16/36 and 5/12 = 15/36. Since 16 > 15, 4/9 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 2/5, 3/8, 7/10', answer: '3/8, 2/5, 7/10', checkMode: 'auto', correctAnswer: '3/8,2/5,7/10', correctAnswers: ['3/8,2/5,7/10', '3/8, 2/5, 7/10'], explanation: 'LCD of 5, 8 and 10 is 40. 2/5 = 16/40, 3/8 = 15/40, 7/10 = 28/40. Ordering by numerator: 15 < 16 < 28, so 3/8, 2/5, 7/10.' },
        { difficulty: 'Medium', question: 'Compare 7/9 and 5/6. Which fraction is bigger?', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'LCD of 9 and 6 is 18. 7/9 = 14/18 and 5/6 = 15/18. Since 15 > 14, 5/6 is bigger.' },
        { difficulty: 'Medium', question: 'Order these fractions from smallest to biggest: 3/4, 5/6, 2/3', answer: '2/3, 3/4, 5/6', checkMode: 'auto', correctAnswer: '2/3,3/4,5/6', correctAnswers: ['2/3,3/4,5/6', '2/3, 3/4, 5/6'], explanation: 'LCD of 4, 6 and 3 is 12. 3/4 = 9/12, 5/6 = 10/12, 2/3 = 8/12. Ordering by numerator: 8 < 9 < 10, so 2/3, 3/4, 5/6.' },
        { difficulty: 'Medium', question: 'Calculate 4/11 + 5/11.', answer: '9/11', checkMode: 'auto', correctAnswer: '9/11', correctAnswers: ['9/11'], explanation: 'Same denominator, so add the numerators: 4 + 5 = 9. Keep the denominator: 9/11.' },
        { difficulty: 'Medium', question: 'Calculate 11/12 − 5/12.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '6/12'], explanation: 'Same denominator, so subtract the numerators: 11 − 5 = 6, giving 6/12. Simplify by dividing by 6: 6/12 = 1/2.' },
        { difficulty: 'Medium', question: 'Calculate 6/10 − 2/10 + 5/10, and give your answer in simplest form.', answer: '9/10', checkMode: 'auto', correctAnswer: '9/10', correctAnswers: ['9/10'], explanation: 'Work left to right with the numerators: 6 − 2 = 4, then 4 + 5 = 9. Keep the denominator: 9/10, which is already in simplest form.' },
        { difficulty: 'Medium-Hard', question: 'Convert 5 2/3 to an improper fraction.', answer: '17/3', checkMode: 'auto', correctAnswer: '17/3', correctAnswers: ['17/3'], explanation: 'Multiply the whole number by the denominator: 5 × 3 = 15. Add the numerator: 15 + 2 = 17. Keep the denominator: 17/3.' },
        { difficulty: 'Medium-Hard', question: 'Convert 42/8 to a mixed number, and simplify the fraction part.', answer: '5 1/4', checkMode: 'auto', correctAnswer: '5 1/4', correctAnswers: ['5 1/4', '51/4', '5-1/4'], explanation: 'Divide the numerator by the denominator: 42 ÷ 8 = 5 remainder 2, giving 5 2/8. Simplify 2/8 by dividing by 2: 2 ÷ 2 = 1, 8 ÷ 2 = 4, so the final answer is 5 1/4.' },
        { difficulty: 'Hard', question: 'Ayanda has 96 sweets. She gives 3/8 of them to Amara and 1/6 of them to Zola. How many sweets does Ayanda keep for herself?', answer: '44', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44'], explanation: 'To Amara: 96 ÷ 8 × 3 = 36. To Zola: 96 ÷ 6 × 1 = 16. Total given away: 36 + 16 = 52. Kept: 96 − 52 = 44 sweets.' },
        { difficulty: 'Hard', question: 'A learner compares 2/3 and 3/5 and says "3/5 must be bigger because 3 is bigger than 2." Is this correct? Explain the mistake and give the correct comparison using a common denominator.', answer: 'No — you cannot compare fractions just by looking at the numerators when the denominators are different. LCD of 3 and 5 is 15: 2/3 = 10/15 and 3/5 = 9/15. Since 10 > 9, 2/3 is actually bigger than 3/5.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thandiwe gets a R600 monthly allowance. She spends 1/4 of it on airtime and 1/3 of it on data. She saves the rest.\na) How much does she spend on airtime?\nb) How much does she spend on data?\nc) How much does she save?\nd) What fraction of her allowance does she save, in simplest form?', answer: 'a) R150  b) R200  c) R250  d) 5/12', checkMode: 'auto', parts: [ { label: 'a)', correctAnswer: '150' }, { label: 'b)', correctAnswer: '200' }, { label: 'c)', correctAnswer: '250' }, { label: 'd)', correctAnswer: '5/12' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply fractions of groups, equivalent fractions, comparing, adding, subtracting and mixed numbers to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
