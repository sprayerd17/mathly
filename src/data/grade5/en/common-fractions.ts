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
}
