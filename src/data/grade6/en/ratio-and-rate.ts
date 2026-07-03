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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing a ratio of red to blue marbles with the HCF highlighted and the step by step simplification from 12:8 to 3:2" />',

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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing equivalent ratios as scaled rows (2:3 and 8:12) alongside a bar model for dividing R240 in the ratio 3:5 with each part labelled R30" />',

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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing a rate as two quantities of different kinds — for example a car travelling 240 km in 3 hours with arrows pointing to the unit rate of 80 km per hour" />',

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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing two rate problems side by side — one multiplying unit rate by quantity to get the total and one dividing the total by the unit rate to get the quantity" />',

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
