import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (ratio roles) ─────────────────────────────────────────
// first quantity   → blue   (#2563eb)
// second quantity  → red    (#dc2626)
// HCF              → orange (#ea580c)
// simplified ratio → green  (#16a34a)
// total            → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Ratio and Rate',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A RATIO?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-ratio',
      title: 'What is a Ratio?',
      icon: ':',
      explanation:
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>Looking ahead:</strong> a dedicated Ratio and Rate topic with formal notation (colon form, HCF-based simplification, unit rate) is Grade 7 content — CAPS Grade 6 only touches rate/ratio informally, inside real-life Measurement contexts (e.g. a recipe scaled up or down), without this formal apparatus. The whole topic below is included as enrichment for learners who want an early, thorough introduction.</p>` +
        `</div>` +
        `<p style="margin-bottom:16px;">A ratio <strong>compares two or more quantities of the same kind</strong>. We write a ratio using a colon — for example ${bl('3')}:${re('5')} means for every ${bl('3')} of one thing there are ${re('5')} of another. The <strong>order of a ratio matters</strong> — ${bl('3')}:${re('5')} is different from ${re('5')}:${bl('3')}. We can <strong>simplify</strong> a ratio by dividing all parts by their ${or('HCF')} just like simplifying a fraction. A ratio does not have units — we just write the numbers.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first quantity')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('second quantity')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('HCF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified ratio')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about ratios</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Written with a colon</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ratio is written as ${bl('a')}:${re('b')} — the colon separates the two quantities being compared.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Order matters</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('3')}:${re('5')} and ${re('5')}:${bl('3')} are <strong>different ratios</strong>. Always match the order to the question.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Simplify using the HCF</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide all parts of the ratio by their ${or('Highest Common Factor')} to write it in simplest form.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">No units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ratio compares quantities of the <strong>same kind</strong> — the units cancel and we just write the numbers.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to simplify a ratio</p>` +
        `<p style="margin:0;color:#1e3a8a;">Find the ${or('HCF')} of all the numbers in the ratio, then divide every part by it. The ${gr('simplified ratio')} shows the same relationship using the smallest possible whole numbers.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bag contains 12 red and 8 blue marbles. Write the ratio of red to blue in simplest form.',
          answer: `${gr('3:2')}`,
          steps: [
            `Write the ratio: ${bl('12')}:${re('8')}.`,
            `Find the ${or('HCF')} of ${bl('12')} and ${re('8')} — ${or('HCF = 4')}.`,
            `Divide both by ${or('4')}: ${bl('12')} ÷ ${or('4')} = ${bl('3')} and ${re('8')} ÷ ${or('4')} = ${re('2')}.`,
            `Simplified ratio = ${gr('3:2')}`,
          ],
        },
        {
          question: 'Simplify the ratio 45:30:15.',
          answer: `${gr('3:2:1')}`,
          steps: [
            `Find the ${or('HCF')} of ${bl('45')}, ${re('30')} and 15 — ${or('HCF = 15')}.`,
            `Divide all three by ${or('15')}: ${bl('45')} ÷ ${or('15')} = ${gr('3')}, ${re('30')} ÷ ${or('15')} = ${gr('2')}, 15 ÷ ${or('15')} = ${gr('1')}.`,
            `Simplified ratio = ${gr('3:2:1')}`,
          ],
        },
        {
          question: 'Sipho mixes cement and sand in the ratio 1:3. If he uses 5 bags of cement, how many bags of sand does he need?',
          answer: `Sipho needs ${re('15')} bags of sand`,
          steps: [
            `The ratio is ${bl('1')}:${re('3')} — for every ${bl('1')} bag of cement there are ${re('3')} bags of sand.`,
            `Sipho uses ${bl('5')} bags of cement, so multiply both parts by 5: ${bl('1')} × 5 = ${bl('5')} and ${re('3')} × 5 = ${re('15')}.`,
            `He needs ${re('15')} bags of sand.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Marbles grouped by the HCF of 4, showing 12 red marbles as 3 groups and 8 blue marbles as 2 groups, simplifying the ratio to 3:2',
      diagramSvg: '<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg"><text x="72" y="10" font-size="10" text-anchor="middle" fill="#ea580c">grouped by 4 (the HCF)</text><rect x="15" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="24" cy="24" r="4" fill="#dc2626"/><circle cx="40" cy="24" r="4" fill="#dc2626"/><circle cx="24" cy="40" r="4" fill="#dc2626"/><circle cx="40" cy="40" r="4" fill="#dc2626"/><rect x="55" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="64" cy="24" r="4" fill="#dc2626"/><circle cx="80" cy="24" r="4" fill="#dc2626"/><circle cx="64" cy="40" r="4" fill="#dc2626"/><circle cx="80" cy="40" r="4" fill="#dc2626"/><rect x="95" y="15" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="104" cy="24" r="4" fill="#dc2626"/><circle cx="120" cy="24" r="4" fill="#dc2626"/><circle cx="104" cy="40" r="4" fill="#dc2626"/><circle cx="120" cy="40" r="4" fill="#dc2626"/><text x="150" y="36" font-size="11" fill="#dc2626" font-weight="700">12 red</text><rect x="15" y="60" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="24" cy="69" r="4" fill="#2563eb"/><circle cx="40" cy="69" r="4" fill="#2563eb"/><circle cx="24" cy="85" r="4" fill="#2563eb"/><circle cx="40" cy="85" r="4" fill="#2563eb"/><rect x="55" y="60" width="34" height="34" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="64" cy="69" r="4" fill="#2563eb"/><circle cx="80" cy="69" r="4" fill="#2563eb"/><circle cx="64" cy="85" r="4" fill="#2563eb"/><circle cx="80" cy="85" r="4" fill="#2563eb"/><text x="150" y="81" font-size="11" fill="#2563eb" font-weight="700">8 blue</text><text x="110" y="112" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">3 groups : 2 groups = 3:2</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a ratio is, how to write it using a colon, and how to simplify a ratio by dividing by the HCF" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENT RATIOS AND DIVIDING IN A RATIO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-ratios-dividing',
      title: 'Equivalent Ratios and Dividing in a Ratio',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Equivalent ratios</strong> are ratios that have the same value — just like equivalent fractions. We make equivalent ratios by multiplying or dividing all parts by the same number. To <strong>divide an amount in a given ratio</strong> we (1) find the ${or('total number of parts')} by adding the ratio numbers, (2) find the ${bl('value of one part')} by dividing the total amount by the number of parts, and (3) multiply to find ${gr('each share')}. Always ${re('check')} your answer by adding all the shares — they must equal the original amount.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total parts')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('one part value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('each share')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equivalent ratios</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply or divide all parts by the same number to make an equivalent ratio — just like equivalent fractions.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1 — Total parts</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add all the numbers in the ratio to find the ${or('total number of parts')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 2 — One part</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide the total amount by the ${or('total parts')} to find the ${bl('value of one part')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Step 3 — Each share &amp; check</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the ${bl('one part value')} by each ratio number to get ${gr('each share')}, then ${re('check')} by adding all shares.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Quick method for dividing in a ratio</p>` +
        `<p style="margin:0;color:#14532d;">${or('Total parts')} = sum of ratio numbers → ${bl('one part')} = total amount ÷ ${or('total parts')} → ${gr('each share')} = ratio number × ${bl('one part')} → ${re('check')}: shares must add back to the original total.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Are 2:3 and 8:12 equivalent ratios?',
          answer: `Yes — ${gr('8:12 = 2:3')}`,
          steps: [
            `Multiply both parts of 2:3 by 4: 2 × 4 = ${bl('8')} and 3 × 4 = ${or('12')}.`,
            `So ${bl('8')}:${or('12')} = 2:3.`,
            `${re('Yes')}, they are equivalent ratios.`,
          ],
        },
        {
          question: 'Divide R240 in the ratio 3:5.',
          answer: `First share = ${gr('R90')}, second share = ${gr('R150')}`,
          steps: [
            `${or('Total parts')} = 3 + 5 = ${or('8 parts')}.`,
            `${bl('Value of one part')} = R240 ÷ ${or('8')} = ${bl('R30')}.`,
            `${gr('First share')} = 3 × ${bl('R30')} = ${gr('R90')}.`,
            `${gr('Second share')} = 5 × ${bl('R30')} = ${gr('R150')}.`,
            `${re('Check')}: ${re('R90 + R150 = R240')}. Correct ✓`,
          ],
        },
        {
          question: 'Lerato, Amahle and Sipho share prize money of R1 800 in the ratio 2:3:4. How much does each person get?',
          answer: `Lerato = ${gr('R400')}, Amahle = ${gr('R600')}, Sipho = ${gr('R800')}`,
          steps: [
            `${or('Total parts')} = 2 + 3 + 4 = ${or('9 parts')}.`,
            `${bl('One part')} = R1 800 ÷ ${or('9')} = ${bl('R200')}.`,
            `${gr('Lerato')}: 2 × ${bl('R200')} = ${gr('R400')}.`,
            `${gr('Amahle')}: 3 × ${bl('R200')} = ${gr('R600')}.`,
            `${gr('Sipho')}: 4 × ${bl('R200')} = ${gr('R800')}.`,
            `${re('Check')}: ${re('R400 + R600 + R800 = R1 800')}. Correct ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Bar model dividing R240 into 8 equal parts in the ratio 3:5, each part worth R30, with 3 parts shaded blue (R90) and 5 parts shaded red (R150)',
      diagramSvg: '<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg"><text x="95" y="15" font-size="11" text-anchor="middle" fill="#0f1f3d">Dividing R240 in the ratio 3:5</text><rect x="15" y="50" width="160" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="50" width="60" height="30" fill="#93c5fd"/><rect x="75" y="50" width="100" height="30" fill="#fca5a5"/><line x1="35" y1="50" x2="35" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="55" y1="50" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="75" y1="50" x2="75" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><line x1="95" y1="50" x2="95" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="115" y1="50" x2="115" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="50" x2="135" y2="80" stroke="#0f1f3d" stroke-width="1"/><line x1="155" y1="50" x2="155" y2="80" stroke="#0f1f3d" stroke-width="1"/><text x="45" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">R90 (3 parts)</text><text x="125" y="97" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">R150 (5 parts)</text><text x="95" y="117" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">Each part = R240 ÷ 8 = R30</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to check if two ratios are equivalent and how to divide an amount in a ratio using the total parts method with a worked R1 800 three-way split example" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — WHAT IS A RATE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-rate',
      title: 'What is a Rate?',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">A rate <strong>compares two quantities of different kinds</strong>. Unlike a ratio, a rate always has units. Common examples of rates are speed in ${bl('km')} ${or('per')} ${re('hour')}, price in ${bl('rands')} ${or('per')} ${re('kilogram')} and heartbeat in ${bl('beats')} ${or('per')} ${re('minute')}. The word ${or('per')} means <em>for every one</em> — so ${bl('60 km')} ${or('per')} ${re('hour')} means ${bl('60 km')} for every ${re('1 hour')}. A ${gr('unit rate')} is a rate where the ${re('second quantity')} is 1. To find a ${gr('unit rate')} we divide the ${bl('first quantity')} by the ${re('second')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first quantity')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('second quantity')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('per')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('unit rate')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">First quantity</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('first quantity')} is the amount being measured — like distance, rands, or beats.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Second quantity</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('second quantity')} is what the first quantity is measured against — like hours, kilograms, or minutes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Per</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Per')} means <em>for every one</em>. It links the two quantities in a rate — for example ${bl('60 km')} ${or('per')} ${re('hour')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Unit rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${gr('unit rate')} has ${re('1')} as the ${re('second quantity')}. Find it by dividing the ${bl('first quantity')} by the ${re('second quantity')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">How to find a unit rate</p>` +
        `<p style="margin:0;color:#14532d;">Divide the ${bl('first quantity')} by the ${re('second quantity')}: ${gr('unit rate')} = ${bl('first quantity')} ÷ ${re('second quantity')}. The answer always has units — write them in your final answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A car travels 240 km in 3 hours. What is its speed in km per hour?',
          answer: `The car travels at ${gr('80 km per hour')}`,
          steps: [
            `Speed is a rate — ${bl('km')} ${or('per')} ${re('hour')}.`,
            `Divide distance by time: ${bl('240')} ÷ ${re('3')} = ${gr('80')}.`,
            `The car travels at ${gr('80 km per hour')}.`,
          ],
        },
        {
          question: 'Sipho earns R1 350 for working 9 hours. What is his hourly rate?',
          answer: `Sipho earns ${gr('R150 per hour')}`,
          steps: [
            `Rate = ${bl('total earned')} ÷ ${re('hours worked')}.`,
            `${bl('1 350')} ÷ ${re('9')} = ${gr('R150')}.`,
            `Sipho earns ${gr('R150')} ${or('per')} ${re('hour')}.`,
          ],
        },
        {
          question: 'Apples cost R24.50 for 5 kg. What is the price per kilogram?',
          answer: `Apples cost ${gr('R4.90 per kilogram')}`,
          steps: [
            `Price ${or('per')} ${re('kg')} = ${bl('total cost')} ÷ ${re('kg')}.`,
            `${bl('24.50')} ÷ ${re('5')} = ${gr('R4.90')}.`,
            `Apples cost ${gr('R4.90')} ${or('per')} ${re('kilogram')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Timeline showing a car travelling 240 km over 3 hours in equal 80 km hourly steps, revealing the unit rate of 80 km per hour',
      diagramSvg: '<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="200" y2="50" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="44" x2="20" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="80" y1="44" x2="80" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="140" y1="44" x2="140" y2="56" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="44" x2="200" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">0h</text><text x="80" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">1h</text><text x="140" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">2h</text><text x="200" y="30" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">3h</text><text x="20" y="72" font-size="10" text-anchor="middle" fill="#374151">0 km</text><text x="80" y="72" font-size="10" text-anchor="middle" fill="#374151">80 km</text><text x="140" y="72" font-size="10" text-anchor="middle" fill="#374151">160 km</text><text x="200" y="72" font-size="10" text-anchor="middle" fill="#374151">240 km</text><text x="50" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="110" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="170" y="90" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">+80 km</text><text x="110" y="105" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">Unit rate = 80 km per hour</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a rate is, how it differs from a ratio, what per means, and how to calculate a unit rate by dividing the first quantity by the second" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING RATE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-rate-problems',
      title: 'Solving Rate Problems',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Once we know the ${bl('unit rate')} we can solve many different problems. To find the ${pu('total')} we ${gr('multiply')} the ${bl('unit rate')} by the ${or('quantity')}. To find the ${or('quantity')} we ${re('divide')} the ${pu('total')} by the ${bl('unit rate')}. Always read the problem carefully to identify what is given and what needs to be found. Write your answer with the correct units.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('unit rate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quantity')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiply')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('total')}</span>` +
        `</div>` +

        // ── Two key operations ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two key operations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Multiply')} — Find the total</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When you know the ${bl('unit rate')} and the ${or('quantity')}, ${gr('multiply')} to find the ${pu('total')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${pu('Total')} = ${bl('unit rate')} × ${or('quantity')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Divide')} — Find the quantity</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When you know the ${pu('total')} and the ${bl('unit rate')}, ${re('divide')} to find the ${or('quantity')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${or('Quantity')} = ${pu('total')} ÷ ${bl('unit rate')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Read the problem carefully to identify what is given and what needs to be found. Write your answer with the correct units — the ${bl('unit rate')} already tells you what units the answer should be in.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A tap drips at a rate of 3 litres per hour. How much water drips in 8 hours?',
          answer: `The tap drips ${pu('24 litres')} in 8 hours`,
          steps: [
            `We know the ${bl('unit rate')} (${bl('3 litres per hour')}) and the ${or('quantity')} (${or('8 hours')}). We need to find the ${pu('total')}.`,
            `${gr('Multiply')}: ${bl('3')} × ${or('8')} = ${pu('24')} litres.`,
            `The tap drips ${pu('24 litres')} in 8 hours.`,
          ],
        },
        {
          question: 'Lerato drives at 90 km per hour. How long will it take her to travel 360 km?',
          answer: `It will take Lerato ${or('4 hours')}`,
          steps: [
            `We know the ${bl('unit rate')} (${bl('90 km per hour')}) and the ${pu('total')} distance (${pu('360 km')}). We need to find the ${or('quantity')} (time).`,
            `${re('Divide')}: ${pu('360')} ÷ ${bl('90')} = ${or('4')} hours.`,
            `It will take Lerato ${or('4 hours')}.`,
          ],
        },
        {
          question: 'Thabo buys 7 kg of rice at R8.50 per kg. He also buys 3 kg of sugar at R12.40 per kg. What is the total cost?',
          answer: `The total cost is ${pu('R96.70')}`,
          steps: [
            `Cost of rice: ${gr('multiply')} ${or('7')} × ${bl('R8.50')} = R59.50.`,
            `Cost of sugar: ${gr('multiply')} ${or('3')} × ${bl('R12.40')} = R37.20.`,
            `${pu('Total')}: R59.50 + R37.20 = ${pu('R96.70')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve rate problems by identifying what is given and what is needed then choosing to multiply or divide using the unit rate" />',
    },
  ],
  topicPractice: [

    // ── Q1 Easy — simplify 6:9 ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Simplify the ratio 6:9.',
      correctAnswer: '2:3',
      explanation: 'HCF of 6 and 9 is 3.\n6 ÷ 3 = 2 and 9 ÷ 3 = 3.\nSimplified ratio = 2:3 ✓',
      answer: '2:3',
    },

    // ── Q2 Easy — simplify 20:12 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Simplify the ratio 20:12.',
      correctAnswer: '5:3',
      explanation: 'HCF of 20 and 12 is 4.\n20 ÷ 4 = 5 and 12 ÷ 4 = 3.\nSimplified ratio = 5:3 ✓',
      answer: '5:3',
    },

    // ── Q3 Medium — girls to boys ratio ──────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'A class has 18 girls and 12 boys. Write the ratio of girls to boys in simplest form.',
      correctAnswer: '3:2',
      explanation: 'HCF of 18 and 12 is 6.\n18 ÷ 6 = 3 and 12 ÷ 6 = 2.\nRatio of girls to boys = 3:2 ✓',
      answer: '3:2',
    },

    // ── Q4 Medium — equivalent ratios ────────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Are 3:4 and 15:20 equivalent ratios?',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes', 'YES'],
      explanation: 'Multiply both parts of 3:4 by 5: 3 × 5 = 15 and 4 × 5 = 20.\nSo 15:20 = 3:4.\nYes, they are equivalent ratios ✓',
      answer: 'yes',
    },

    // ── Q5 Hard — use a ratio to find a missing quantity ─────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Sipho mixes juice and water in the ratio 2:5. He uses 8 litres of juice. How many litres of water does he need?',
      correctAnswer: '20',
      correctAnswers: ['20', '20 litres', '20L', '20 liters'],
      explanation: 'Ratio juice:water = 2:5.\nScale factor = 8 ÷ 2 = 4.\nWater = 5 × 4 = 20 litres ✓',
      answer: '20',
    },

    // ── Q6 Medium — divide R360 in ratio 3:5 ─────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Divide R360 in the ratio 3:5.',
      answer: '',
      parts: [
        {
          label: 'a) First share',
          correctAnswer: 'R135',
          correctAnswers: ['R135', '135'],
          explanation: 'Total parts = 3 + 5 = 8.\nOne part = R360 ÷ 8 = R45.\nFirst share = 3 × R45 = R135 ✓',
        },
        {
          label: 'b) Second share',
          correctAnswer: 'R225',
          correctAnswers: ['R225', '225'],
          explanation: 'Total parts = 3 + 5 = 8.\nOne part = R360 ÷ 8 = R45.\nSecond share = 5 × R45 = R225 ✓\nCheck: R135 + R225 = R360 ✓',
        },
      ],
    },

    // ── Q7 Hard — three-way split R2 100 in ratio 2:3:2 ──────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Lerato, Amahle and Thabo share R2 100 in the ratio 2:3:2. How much does each person get?',
      answer: '',
      parts: [
        {
          label: "a) Lerato's share",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Total parts = 2 + 3 + 2 = 7.\nOne part = R2 100 ÷ 7 = R300.\nLerato = 2 × R300 = R600 ✓',
        },
        {
          label: "b) Amahle's share",
          correctAnswer: 'R900',
          correctAnswers: ['R900', '900'],
          explanation: 'Total parts = 2 + 3 + 2 = 7.\nOne part = R2 100 ÷ 7 = R300.\nAmahle = 3 × R300 = R900 ✓',
        },
        {
          label: "c) Thabo's share",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Total parts = 2 + 3 + 2 = 7.\nOne part = R2 100 ÷ 7 = R300.\nThabo = 2 × R300 = R600 ✓\nCheck: R600 + R900 + R600 = R2 100 ✓',
        },
      ],
    },

    // ── Q8 Easy — speed calculation ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'A car travels 150 km in 2 hours. What is its speed in km per hour?',
      correctAnswer: '75',
      correctAnswers: ['75', '75km/h', '75 km/h', '75km per hour', '75 km per hour'],
      explanation: 'Speed = distance ÷ time.\n150 ÷ 2 = 75 km/h ✓',
      answer: '75 km/h',
    },

    // ── Q9 Medium — price per kilogram ───────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bananas cost R18 for 3 kg. What is the price per kilogram?',
      correctAnswer: 'R6',
      correctAnswers: ['R6', '6', 'R6/kg', 'R6 per kg'],
      explanation: 'Price per kg = total cost ÷ kg.\nR18 ÷ 3 = R6 per kilogram ✓',
      answer: 'R6',
    },

    // ── Q10 Hard — compare hourly rates (self-check) ──────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Sipho earns R2 250 for working 15 hours. Lerato earns R1 960 for working 14 hours. Who has a better hourly rate?',
      answer: 'Sipho: 2 250 ÷ 15 = R150 per hour.\nLerato: 1 960 ÷ 14 = R140 per hour.\nSipho has the better hourly rate.',
    },

    // ── Q11 Medium — time to fill a tank ─────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'A tap fills a tank at 12 litres per minute. How long will it take to fill a 180 litre tank?',
      correctAnswer: '15',
      correctAnswers: ['15', '15 minutes', '15min', '15 min'],
      explanation: 'Time = total volume ÷ rate.\n180 ÷ 12 = 15 minutes ✓',
      answer: '15 minutes',
    },

    // ── Q12 Hard — total journey time ────────────────────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Amahle drives 270 km at 90 km per hour and then 120 km at 60 km per hour. What is the total time for her journey?',
      correctAnswer: '5',
      correctAnswers: ['5', '5 hours', '5h', '5 hrs'],
      explanation: 'Time for first part: 270 ÷ 90 = 3 hours.\nTime for second part: 120 ÷ 60 = 2 hours.\nTotal time = 3 + 2 = 5 hours ✓',
      answer: '5 hours',
    },

  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Writing and Simplifying Ratios (0-3, Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 48:36.', answer: '4:3', checkMode: 'auto', correctAnswer: '4:3', correctAnswers: ['4:3'], explanation: 'HCF of 48 and 36 is 12.\n48 ÷ 12 = 4 and 36 ÷ 12 = 3.\nSimplified ratio = 4:3 ✓' },
        { difficulty: 'Easy', question: 'A fruit bowl has 24 red apples and 16 green apples. Write the ratio of red apples to green apples in simplest form.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 24 and 16 is 8.\n24 ÷ 8 = 3 and 16 ÷ 8 = 2.\nRatio of red to green = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A choir has 15 sopranos, 10 altos and 5 tenors. Zinhle wants the ratio of sopranos to altos to tenors. Write this ratio in simplest form, and explain why the order she lists them in matters.', answer: 'Sopranos to altos to tenors = 15:10:5. HCF of 15, 10 and 5 is 5, so the simplified ratio is 3:2:1. The order matters because each position in the ratio stands for a specific group — writing it in a different order (like 10:15:5) would describe altos to sopranos to tenors instead, which is a different comparison.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'A learner simplifies 60:24 by dividing only the first number by 12, writing the answer as "5:24". Explain the mistake and give the correct simplified ratio.', answer: 'The learner only divided the first term by the HCF and left the second term unchanged. Both parts of a ratio must be divided by the same HCF. HCF of 60 and 24 is 12, so 60 ÷ 12 = 5 and 24 ÷ 12 = 2. The correct simplified ratio is 5:2, not 5:24.', checkMode: 'self' },

        // Block 2 — Equivalent Ratios (4-7, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Are 3:7 and 15:35 equivalent ratios?', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], explanation: 'Multiply both parts of 3:7 by 5: 3 × 5 = 15 and 7 × 5 = 35.\nSo 15:35 = 3:7.\nYes, they are equivalent ratios ✓' },
        { difficulty: 'Medium', question: 'A pancake recipe uses flour and milk in the ratio 4:9. If a bigger batch uses 36 cups of milk, how many cups of flour are needed?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 cups'], explanation: 'Ratio flour:milk = 4:9.\nScale factor = 36 ÷ 9 = 4.\nFlour = 4 × 4 = 16 cups ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 3:8 — 9:24 or 9:16?', answer: '9:24', checkMode: 'auto', correctAnswer: '9:24', correctAnswers: ['9:24', '9:24 only'], explanation: 'Test 9:24: 9 ÷ 3 = 3 and 24 ÷ 3 = 8, so 9:24 = 3:8 ✓\nTest 9:16: 9 ÷ 3 = 3 but 16 ÷ 3 is not a whole number, so 9:16 ≠ 3:8.\n9:24 is equivalent to 3:8 ✓' },
        { difficulty: 'Medium', question: 'A student checks if 5:9 and 8:12 are equivalent by adding 3 to both parts of 5:9 to get 8:12, and concludes they are equivalent. Is this reasoning correct? Explain.', answer: 'No, this reasoning is incorrect. Equivalent ratios are found by multiplying or dividing both parts by the same number, not by adding the same number to both parts. Testing properly: 5:9 would need to be multiplied by the same factor on both sides to equal 8:12, but 8 ÷ 5 = 1.6 while 12 ÷ 9 = 1.33, which are different, so 5:9 and 8:12 are not actually equivalent ratios.', checkMode: 'self' },

        // Block 3 — Dividing an Amount in a Given Ratio (8-11, Medium)
        { difficulty: 'Medium', question: 'Divide R560 in the ratio 3:4.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R240', correctAnswers: ['R240', '240'], explanation: 'Total parts = 3 + 4 = 7.\nOne part = R560 ÷ 7 = R80.\nFirst share = 3 × R80 = R240 ✓' },
          { label: 'b) Second share', correctAnswer: 'R320', correctAnswers: ['R320', '320'], explanation: 'Total parts = 3 + 4 = 7.\nOne part = R560 ÷ 7 = R80.\nSecond share = 4 × R80 = R320 ✓\nCheck: R240 + R320 = R560 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Nomvula, Karabo and Ayanda share 900 stickers in the ratio 1:2:3. How many stickers does each person get?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Nomvula's stickers", correctAnswer: '150', correctAnswers: ['150'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nNomvula = 1 × 150 = 150 ✓' },
          { label: "b) Karabo's stickers", correctAnswer: '300', correctAnswers: ['300'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nKarabo = 2 × 150 = 300 ✓' },
          { label: "c) Ayanda's stickers", correctAnswer: '450', correctAnswers: ['450'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nAyanda = 3 × 150 = 450 ✓\nCheck: 150 + 300 + 450 = 900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Two friends split a bag of marbles in the ratio 3:5. The friend with the smaller share receives 45 marbles. How many marbles were in the bag altogether?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: 'The smaller share corresponds to the "3" part of the ratio.\nOne part = 45 ÷ 3 = 15.\nTotal parts = 3 + 5 = 8.\nTotal marbles = 8 × 15 = 120 ✓' },
        { difficulty: 'Medium', question: 'A 250 m rope is cut into two pieces in the ratio 2:3. Palesa checks her answer by adding the two pieces back together. What should the two pieces measure, and does her check work?', answer: '100 m and 150 m. Check: 100 + 150 = 250 m, which matches the original length, so the check works.', checkMode: 'self' },

        // Block 4 — Rates and Unit Rates (12-15, Medium)
        { difficulty: 'Medium', question: 'A train travels 336 km in 4 hours. What is its speed in km per hour?', answer: '84 km/h', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84km/h', '84 km/h', '84km per hour', '84 km per hour'], explanation: 'Speed = distance ÷ time.\n336 ÷ 4 = 84 km/h ✓' },
        { difficulty: 'Medium', question: 'Explain the difference between a ratio and a rate, using an example of each.', answer: 'A ratio compares two quantities of the same kind and has no units, e.g. 3 boys to 5 girls is 3:5. A rate compares two quantities of different kinds and always has units, e.g. 84 km per hour compares distance (km) to time (hours).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A shop sells juice at R63 for 7 litres at one store, and R70 for 8 litres at another store. Which store has the cheaper price per litre?', answer: 'second store', checkMode: 'auto', correctAnswer: 'second store', correctAnswers: ['second store', 'the second store', 'second', 'store 2'], explanation: 'First store: R63 ÷ 7 = R9 per litre.\nSecond store: R70 ÷ 8 = R8.75 per litre.\nR8.75 is less than R9, so the second store has the cheaper price per litre ✓' },
        { difficulty: 'Medium', question: 'A learner calculates a unit rate for a car travelling 180 km in 4 hours by computing 4 ÷ 180 and getting 0.0222 hours per km. Explain what went wrong and give the correct unit rate in km per hour.', answer: 'The learner divided time by distance instead of distance by time, which gives hours per km instead of km per hour. The correct unit rate is distance ÷ time = 180 ÷ 4 = 45 km per hour.', checkMode: 'self' },

        // Block 5 — Solving Rate Problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A hosepipe fills a paddling pool at a rate of 9 litres per minute. How much water is in the pool after 6 minutes?', answer: '54 litres', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 litres', '54L', '54 liters'], explanation: 'We know the unit rate (9 litres per minute) and the quantity (6 minutes). We need the total, so multiply: 9 × 6 = 54 litres ✓' },
        { difficulty: 'Hard', question: 'Katlego earns money at a rate of R12 per hour. Before choosing to multiply or divide, identify what is given and what needs to be found if she wants to know how many hours she must work to earn R180.', answer: 'Given: the unit rate (R12 per hour) and the total amount to earn (R180). Needed: the number of hours (the quantity). Since the total and the rate are known, we divide: 180 ÷ 12 = 15 hours.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sizwe drives 100 km at 50 km per hour, then a further 80 km at 40 km per hour. What is the total time for his journey?', answer: '4 hours', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 hours', '4h', '4 hrs'], explanation: 'Time for first leg: 100 ÷ 50 = 2 hours.\nTime for second leg: 80 ÷ 40 = 2 hours.\nTotal time = 2 + 2 = 4 hours ✓' },
        { difficulty: 'Hard', question: 'A student earns R216 working at a rate of R18 per hour, and calculates the number of hours worked as 216 × 18 = 3 888 hours. Explain the mistake and give the correct number of hours.', answer: 'The student multiplied instead of dividing. When you know the total earned and the unit rate, you divide the total by the rate to find the quantity (hours), not multiply. The correct calculation is 216 ÷ 18 = 12 hours.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, dividing in a ratio and rate problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit simplifying ratios and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Writing and Simplifying Ratios (0-3, Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 32:24.', answer: '4:3', checkMode: 'auto', correctAnswer: '4:3', correctAnswers: ['4:3'], explanation: 'HCF of 32 and 24 is 8.\n32 ÷ 8 = 4 and 24 ÷ 8 = 3.\nSimplified ratio = 4:3 ✓' },
        { difficulty: 'Easy', question: 'A garden has 18 rose bushes and 30 lavender bushes. Write the ratio of rose bushes to lavender bushes in simplest form.', answer: '3:5', checkMode: 'auto', correctAnswer: '3:5', correctAnswers: ['3:5'], explanation: 'HCF of 18 and 30 is 6.\n18 ÷ 6 = 3 and 30 ÷ 6 = 5.\nRatio of rose to lavender = 3:5 ✓' },
        { difficulty: 'Easy', question: 'A fruit basket has 8 apples, 5 pears and 3 bananas. Write the ratio of bananas to apples to pears (in that order).', answer: '3:8:5', checkMode: 'auto', correctAnswer: '3:8:5', correctAnswers: ['3:8:5'], explanation: 'The order requested is bananas, then apples, then pears.\nBananas = 3, apples = 8, pears = 5.\nRatio = 3:8:5 ✓ (this cannot be simplified further since HCF of 3, 8 and 5 is 1)' },
        { difficulty: 'Easy', question: 'A learner simplifies 55:33 and says the HCF is 5, giving an answer of 11:6.6. Explain the mistake and give the correct simplified ratio.', answer: 'The learner used the wrong HCF. The HCF of 55 and 33 is actually 11, not 5. Dividing correctly: 55 ÷ 11 = 5 and 33 ÷ 11 = 3, giving the correct simplified ratio of 5:3.', checkMode: 'self' },

        // Block 2 — Equivalent Ratios (4-7, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Are 5:6 and 20:24 equivalent ratios?', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], explanation: 'Multiply both parts of 5:6 by 4: 5 × 4 = 20 and 6 × 4 = 24.\nSo 20:24 = 5:6.\nYes, they are equivalent ratios ✓' },
        { difficulty: 'Medium', question: 'A paint mixture uses blue and white paint in the ratio 4:7. If a larger batch uses 28 litres of white paint, how many litres of blue paint are needed?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 litres', '16L'], explanation: 'Ratio blue:white = 4:7.\nScale factor = 28 ÷ 7 = 4.\nBlue paint = 4 × 4 = 16 litres ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 12:18 — 2:3 or 3:4?', answer: '2:3', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2:3 only'], explanation: 'HCF of 12 and 18 is 6.\n12 ÷ 6 = 2 and 18 ÷ 6 = 3, so 12:18 simplifies to 2:3.\n2:3 is equivalent to 12:18 ✓' },
        { difficulty: 'Medium', question: 'A student checks if 4:5 and 7:8 are equivalent by adding 3 to both parts of 4:5 to get 7:8, and concludes they are equivalent. Is this correct? Explain.', answer: 'No, this is incorrect. Equivalent ratios must be formed by multiplying or dividing both parts by the same number, not adding the same number to each part. Testing properly, 7 ÷ 4 = 1.75 while 8 ÷ 5 = 1.6, which are not equal, so 4:5 and 7:8 are not equivalent ratios.', checkMode: 'self' },

        // Block 3 — Dividing an Amount in a Given Ratio (8-11, Medium)
        { difficulty: 'Medium', question: 'Divide R720 in the ratio 5:4.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R400', correctAnswers: ['R400', '400'], explanation: 'Total parts = 5 + 4 = 9.\nOne part = R720 ÷ 9 = R80.\nFirst share = 5 × R80 = R400 ✓' },
          { label: 'b) Second share', correctAnswer: 'R320', correctAnswers: ['R320', '320'], explanation: 'Total parts = 5 + 4 = 9.\nOne part = R720 ÷ 9 = R80.\nSecond share = 4 × R80 = R320 ✓\nCheck: R400 + R320 = R720 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Bongani, Thandiwe and Musa share 900 sweets in the ratio 1:2:3. How many sweets does each person get?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Bongani's sweets", correctAnswer: '150', correctAnswers: ['150'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nBongani = 1 × 150 = 150 ✓' },
          { label: "b) Thandiwe's sweets", correctAnswer: '300', correctAnswers: ['300'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nThandiwe = 2 × 150 = 300 ✓' },
          { label: "c) Musa's sweets", correctAnswer: '450', correctAnswers: ['450'], explanation: 'Total parts = 1 + 2 + 3 = 6.\nOne part = 900 ÷ 6 = 150.\nMusa = 3 × 150 = 450 ✓\nCheck: 150 + 300 + 450 = 900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Two cousins split a stack of trading cards in the ratio 5:3. The cousin with the smaller share receives 36 cards. How many cards were in the stack altogether?', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: 'The smaller share corresponds to the "3" part of the ratio.\nOne part = 36 ÷ 3 = 12.\nTotal parts = 5 + 3 = 8.\nTotal cards = 8 × 12 = 96 ✓' },
        { difficulty: 'Medium', question: 'A 250 m length of fencing wire is cut into two pieces in the ratio 2:3. Thabiso checks his answer by adding the two pieces back together. What should the two pieces measure, and does his check work?', answer: '100 m and 150 m. Check: 100 + 150 = 250 m, which matches the original length, so the check works.', checkMode: 'self' },

        // Block 4 — Rates and Unit Rates (12-15, Medium)
        { difficulty: 'Medium', question: 'A delivery van travels 420 km in 6 hours. What is its average speed in km per hour?', answer: '70 km/h', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70km/h', '70 km/h', '70km per hour', '70 km per hour'], explanation: 'Speed = distance ÷ time.\n420 ÷ 6 = 70 km/h ✓' },
        { difficulty: 'Medium', question: 'Explain, using an example, why a rate has units but a ratio does not.', answer: 'A ratio compares two quantities of the same kind, so the units are the same on both sides and cancel out — for example comparing 6 boys to 9 girls gives 6:9, with no units. A rate compares two quantities of different kinds, so the units cannot cancel — for example 70 km per hour compares kilometres to hours, so the answer must be written with units.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A shop sells cooking oil at R84 for a 4 litre bottle, and R150 for a 6 litre bottle. Which bottle offers the cheaper price per litre?', answer: 'first bottle', checkMode: 'auto', correctAnswer: 'first bottle', correctAnswers: ['first bottle', 'the first bottle', 'first', 'bottle 1', '4 litre bottle'], explanation: 'First bottle: R84 ÷ 4 = R21 per litre.\nSecond bottle: R150 ÷ 6 = R25 per litre.\nR21 is less than R25, so the 4 litre bottle has the cheaper price per litre ✓' },
        { difficulty: 'Medium', question: 'A learner calculates a unit rate for a runner covering 150 km in 2 hours (a training log distance) by computing 2 ÷ 150 and getting 0.0133 hours per km. Explain what went wrong and give the correct unit rate in km per hour.', answer: 'The learner divided time by distance instead of distance by time, which gives hours per km instead of km per hour. The correct unit rate is distance ÷ time = 150 ÷ 2 = 75 km per hour.', checkMode: 'self' },

        // Block 5 — Solving Rate Problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A garden sprinkler releases water at a rate of 9 litres per minute. How much water is released after 6 minutes?', answer: '54 litres', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 litres', '54L', '54 liters'], explanation: 'We know the unit rate (9 litres per minute) and the quantity (6 minutes). We need the total, so multiply: 9 × 6 = 54 litres ✓' },
        { difficulty: 'Hard', question: 'Nandi earns money at a rate of R10 per hour. Before choosing to multiply or divide, identify what is given and what needs to be found if she wants to know how many hours she must work to earn R150.', answer: 'Given: the unit rate (R10 per hour) and the total amount to earn (R150). Needed: the number of hours (the quantity). Since the total and the rate are known, we divide: 150 ÷ 10 = 15 hours.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Mpho drives 100 km at 50 km per hour, then a further 80 km at 40 km per hour on a different road. What is the total time for her journey?', answer: '4 hours', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 hours', '4h', '4 hrs'], explanation: 'Time for first leg: 100 ÷ 50 = 2 hours.\nTime for second leg: 80 ÷ 40 = 2 hours.\nTotal time = 2 + 2 = 4 hours ✓' },
        { difficulty: 'Hard', question: 'A student earns R180 working at a rate of R12 per hour, and calculates the number of hours worked as 180 × 12 = 2 160 hours. Explain the mistake and give the correct number of hours.', answer: 'The student multiplied instead of dividing. When you know the total earned and the unit rate, you divide the total by the rate to find the quantity (hours), not multiply. The correct calculation is 180 ÷ 12 = 15 hours.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, dividing in a ratio and rate problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit simplifying ratios and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Writing and Simplifying Ratios (0-3, Easy)
        { difficulty: 'Easy', question: 'Simplify the ratio 36:24.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 36 and 24 is 12.\n36 ÷ 12 = 3 and 24 ÷ 12 = 2.\nSimplified ratio = 3:2 ✓' },
        { difficulty: 'Easy', question: 'A parking lot has 21 small cars and 14 bakkies. Write the ratio of small cars to bakkies in simplest form.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'HCF of 21 and 14 is 7.\n21 ÷ 7 = 3 and 14 ÷ 7 = 2.\nRatio of small cars to bakkies = 3:2 ✓' },
        { difficulty: 'Easy', question: 'Simplify the ratio 72:48:24.', answer: '3:2:1', checkMode: 'auto', correctAnswer: '3:2:1', correctAnswers: ['3:2:1'], explanation: 'HCF of 72, 48 and 24 is 24.\n72 ÷ 24 = 3, 48 ÷ 24 = 2, 24 ÷ 24 = 1.\nSimplified ratio = 3:2:1 ✓' },
        { difficulty: 'Easy', question: 'A learner simplifies 40:16 by dividing only the first number by 8, writing the answer as "5:16". Explain the mistake and give the correct simplified ratio.', answer: 'The learner only divided the first term by the HCF and left the second term unchanged. Both parts of a ratio must be divided by the same HCF. HCF of 40 and 16 is 8, so 40 ÷ 8 = 5 and 16 ÷ 8 = 2. The correct simplified ratio is 5:2, not 5:16.', checkMode: 'self' },

        // Block 2 — Equivalent Ratios (4-7, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Are 2:9 and 6:27 equivalent ratios?', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], explanation: 'Multiply both parts of 2:9 by 3: 2 × 3 = 6 and 9 × 3 = 27.\nSo 6:27 = 2:9.\nYes, they are equivalent ratios ✓' },
        { difficulty: 'Medium', question: 'A lemonade recipe uses lemon juice and water in the ratio 3:5. If a bigger jug uses 45 cups of water, how many cups of lemon juice are needed?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 cups'], explanation: 'Ratio juice:water = 3:5.\nScale factor = 45 ÷ 5 = 9.\nLemon juice = 3 × 9 = 27 cups ✓' },
        { difficulty: 'Medium', question: 'Which of these ratios is equivalent to 16:20 — 4:5 or 5:6?', answer: '4:5', checkMode: 'auto', correctAnswer: '4:5', correctAnswers: ['4:5', '4:5 only'], explanation: 'HCF of 16 and 20 is 4.\n16 ÷ 4 = 4 and 20 ÷ 4 = 5, so 16:20 simplifies to 4:5.\n4:5 is equivalent to 16:20 ✓' },
        { difficulty: 'Medium', question: 'A student checks if 6:7 and 9:10 are equivalent by adding 3 to both parts of 6:7 to get 9:10, and concludes they are equivalent. Is this reasoning correct? Explain.', answer: 'No, this reasoning is incorrect. Equivalent ratios are found by multiplying or dividing both parts by the same number, not by adding the same number to both parts. Testing properly: 9 ÷ 6 = 1.5 while 10 ÷ 7 ≈ 1.43, which are different, so 6:7 and 9:10 are not actually equivalent ratios.', checkMode: 'self' },

        // Block 3 — Dividing an Amount in a Given Ratio (8-11, Medium)
        { difficulty: 'Medium', question: 'Divide R720 in the ratio 5:7.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) First share', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Total parts = 5 + 7 = 12.\nOne part = R720 ÷ 12 = R60.\nFirst share = 5 × R60 = R300 ✓' },
          { label: 'b) Second share', correctAnswer: 'R420', correctAnswers: ['R420', '420'], explanation: 'Total parts = 5 + 7 = 12.\nOne part = R720 ÷ 12 = R60.\nSecond share = 7 × R60 = R420 ✓\nCheck: R300 + R420 = R720 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe, Sipho and Refilwe share 1 200 airtime points in the ratio 2:3:5. How many points does each person get?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Lindiwe's points", correctAnswer: '240', correctAnswers: ['240'], explanation: 'Total parts = 2 + 3 + 5 = 10.\nOne part = 1 200 ÷ 10 = 120.\nLindiwe = 2 × 120 = 240 ✓' },
          { label: "b) Sipho's points", correctAnswer: '360', correctAnswers: ['360'], explanation: 'Total parts = 2 + 3 + 5 = 10.\nOne part = 1 200 ÷ 10 = 120.\nSipho = 3 × 120 = 360 ✓' },
          { label: "c) Refilwe's points", correctAnswer: '600', correctAnswers: ['600'], explanation: 'Total parts = 2 + 3 + 5 = 10.\nOne part = 1 200 ÷ 10 = 120.\nRefilwe = 5 × 120 = 600 ✓\nCheck: 240 + 360 + 600 = 1 200 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A box of pencils is divided between two classrooms in the ratio 2:7. The classroom with the larger share receives 84 pencils. How many pencils were in the box altogether?', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108'], explanation: 'The larger share corresponds to the "7" part of the ratio.\nOne part = 84 ÷ 7 = 12.\nTotal parts = 2 + 7 = 9.\nTotal pencils = 9 × 12 = 108 ✓' },
        { difficulty: 'Medium', question: 'A 480 cm ribbon is cut into two pieces in the ratio 3:5. Anele checks her answer by adding the two pieces back together. What should the two pieces measure, and does her check work?', answer: '180 cm and 300 cm. Check: 180 + 300 = 480 cm, which matches the original length, so the check works.', checkMode: 'self' },

        // Block 4 — Rates and Unit Rates (12-15, Medium)
        { difficulty: 'Medium', question: 'A bus travels 195 km in 3 hours. What is its speed in km per hour?', answer: '65 km/h', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65km/h', '65 km/h', '65km per hour', '65 km per hour'], explanation: 'Speed = distance ÷ time.\n195 ÷ 3 = 65 km/h ✓' },
        { difficulty: 'Medium', question: 'Explain the difference between a ratio and a rate, giving an original example of each from daily life.', answer: 'A ratio compares two quantities of the same kind and has no units — for example, in a class of 30 learners with 18 girls and 12 boys, the ratio of girls to boys is 18:12, which simplifies to 3:2. A rate compares two quantities of different kinds and has units — for example, a printer that prints 40 pages in 5 minutes has a rate of 8 pages per minute.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Mangoes cost R56 for 8 kg at one market stall, and R64 for 10 kg at another. Which stall has the cheaper price per kilogram?', answer: 'second stall', checkMode: 'auto', correctAnswer: 'second stall', correctAnswers: ['second stall', 'the second stall', 'second', 'stall 2'], explanation: 'First stall: R56 ÷ 8 = R7 per kg.\nSecond stall: R64 ÷ 10 = R6.40 per kg.\nR6.40 is less than R7, so the second stall has the cheaper price per kilogram ✓' },
        { difficulty: 'Medium', question: 'A learner calculates a unit rate for a cyclist covering 240 km in 5 hours by computing 5 ÷ 240 and getting 0.0208 hours per km. Explain what went wrong and give the correct unit rate in km per hour.', answer: 'The learner divided time by distance instead of distance by time, which gives hours per km instead of km per hour. The correct unit rate is distance ÷ time = 240 ÷ 5 = 48 km per hour.', checkMode: 'self' },

        // Block 5 — Solving Rate Problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A water pump fills a tank at a rate of 15 litres per minute. How much water is in the tank after 9 minutes?', answer: '135 litres', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 litres', '135L', '135 liters'], explanation: 'We know the unit rate (15 litres per minute) and the quantity (9 minutes). We need the total, so multiply: 15 × 9 = 135 litres ✓' },
        { difficulty: 'Hard', question: 'Tumelo earns money at a rate of R14 per hour. Before choosing to multiply or divide, identify what is given and what needs to be found if he wants to know how many hours he must work to earn R210.', answer: 'Given: the unit rate (R14 per hour) and the total amount to earn (R210). Needed: the number of hours (the quantity). Since the total and the rate are known, we divide: 210 ÷ 14 = 15 hours.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele drives 150 km at 75 km per hour, then a further 60 km at 30 km per hour on a gravel road. What is the total time for her journey?', answer: '4 hours', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 hours', '4h', '4 hrs'], explanation: 'Time for first leg: 150 ÷ 75 = 2 hours.\nTime for second leg: 60 ÷ 30 = 2 hours.\nTotal time = 2 + 2 = 4 hours ✓' },
        { difficulty: 'Hard', question: 'A student earns R150 working at a rate of R15 per hour, and calculates the number of hours worked as 150 × 15 = 2 250 hours. Explain the mistake and give the correct number of hours.', answer: 'The student multiplied instead of dividing. When you know the total earned and the unit rate, you divide the total by the rate to find the quantity (hours), not multiply. The correct calculation is 150 ÷ 15 = 10 hours.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered ratios, equivalent ratios, dividing in a ratio and rate problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit simplifying ratios and unit rates, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered ratio and rate.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of ratio and rate.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: "Keep going! Work through the study guide again and try once more." },
    ],
  },
}
