import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal place value roles) ───────────────────────────────
// units       → blue    (#2563eb)
// tenths      → green   (#16a34a)
// hundredths  → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// CAPS Intermediate Phase Grade 5 does not include percentages. The Grade 6
// clarification notes state plainly: "Percentages is a new topic for Grade
// 6 learners." Grade 5's own fractions clarification notes likewise say
// "Because learners will only work with decimal fractions in Grade 6...",
// and the Grade 5 time-allocation table has no "Percentages" (or even
// "Decimal fractions") topic line at all, unlike Grade 6's table which
// lists both separately. Kept here as clearly labelled enrichment because
// it is accurate, well-built content.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Decimal Fractions',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-decimal-fractions',
      title: 'Understanding Decimal Fractions',
      icon: '.',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>decimal fraction</strong> is a way of writing a number that includes a part smaller than one whole. The <strong>decimal point</strong> separates the whole number part (on the left) from the fraction part (on the right). Decimal fractions are simply another way of writing common fractions whose denominators are 10, 100, or 1 000 — they all mean the same amount.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('units')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tenths')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hundredths')}</span>` +
        `</div>` +

        // ── Place value table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Place value chart</p>` +
        `<p style="margin-bottom:12px;">Each digit in a decimal fraction sits in a specific <strong>place</strong>, and that place tells you its value. Study the number <strong>3.47</strong> in the chart below:</p>` +

        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;min-width:280px;">` +
        `<thead><tr>` +
        `<th style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;border-radius:8px 0 0 0;">Units</th>` +
        `<th style="background:#f8fafc;color:#374151;border:2px solid #e2e8f0;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;">.</th>` +
        `<th style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;">Tenths</th>` +
        `<th style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:10px 16px;text-align:center;font-size:14px;font-weight:700;border-radius:0 8px 0 0;">Hundredths</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">3</td>` +
        `<td style="background:#f8fafc;color:#374151;border:2px solid #e2e8f0;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">.</td>` +
        `<td style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">4</td>` +
        `<td style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:12px 16px;text-align:center;font-size:1.5em;font-weight:700;">7</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="background:#eff6ff;color:#2563eb;border:2px solid #bfdbfe;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;border-radius:0 0 0 8px;">3 ones</td>` +
        `<td style="background:#f8fafc;border:2px solid #e2e8f0;padding:8px 16px;"></td>` +
        `<td style="background:#f0fdf4;color:#16a34a;border:2px solid #bbf7d0;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;">4 tenths = 4/10</td>` +
        `<td style="background:#fef2f2;color:#dc2626;border:2px solid #fecaca;padding:8px 16px;text-align:center;font-size:12px;font-weight:600;border-radius:0 0 8px 0;">7 hundredths = 7/100</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Key terms ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Units</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The whole-number part — the digit to the <strong>left</strong> of the decimal point. In ${bl('3')}.47, the units digit is <strong>${bl('3')}</strong>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tenths</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>first</strong> digit after the decimal point. One tenth = 1/10 = 0.1. In 3.${gr('4')}7, the tenths digit is <strong>${gr('4')}</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hundredths</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>second</strong> digit after the decimal point. One hundredth = 1/100 = 0.01. In 3.4${re('7')}, the hundredths digit is <strong>${re('7')}</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── How to read decimal fractions ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to read decimal fractions aloud</p>` +
        `<p style="margin-bottom:12px;">Say the whole number part first, then <strong>"and"</strong>, then read the digits after the decimal point as a whole number followed by the place name of the <em>last</em> digit.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('3')}.${gr('4')}${re('7')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${bl('three')}</strong> and <strong>${re('forty-seven hundredths')}</strong>"</span>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('0')}.${gr('6')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${gr('six tenths')}</strong>" — no units, so we say zero or simply name the tenths</span>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="font-size:1.15em;font-weight:700;color:#374151;min-width:60px;">${bl('1')}.${gr('0')}${re('5')}</span>` +
        `<span style="color:#9ca3af;font-size:1.2em;">→</span>` +
        `<span style="color:#374151;font-size:14px;">"<strong>${bl('one')}</strong> and <strong>${re('five hundredths')}</strong>" — the ${gr('0')} is a <em>placeholder</em> in the tenths position</span>` +
        `</div>` +

        `</div>` +

        // ── Decimal ↔ common fraction connection ─────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Decimal fractions and common fractions</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Tenths → 1 decimal place</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${gr('7')}/10 = ${bl('0')}.${gr('7')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Hundredths → 2 decimal places</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${re('47')}/100 = ${bl('0')}.${gr('4')}${re('7')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:160px;text-align:center;flex:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Mixed number</p>` +
        `<p style="font-size:1.2em;font-weight:700;margin:0;color:#374151;">${bl('3')} ${re('8')}/100 = ${bl('3')}.${gr('0')}${re('8')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Watch out: the placeholder zero</p>` +
        `<p style="margin:0;color:#78350f;">When there are no ${gr('tenths')} but there <em>are</em> ${re('hundredths')}, you <strong>must</strong> write a <strong>0</strong> in the tenths position. Five and eight hundredths is ${bl('5')}.${gr('0')}${re('8')} — <em>not</em> 5.8, which would mean five and eight <em>tenths</em>.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Identify place value in 2.46 ──────────────────────────
        {
          question: 'Write the decimal fraction 2.46 in words and state the value of each digit.',
          answer: `"${bl('Two')} and ${re('forty-six hundredths')}". ${bl('Units')}: ${bl('2')}, ${gr('Tenths')}: ${gr('4')}, ${re('Hundredths')}: ${re('6')}`,
          steps: [
            `Identify the ${bl('units')} digit: <strong>${bl('2')}</strong> is to the left of the decimal point. Its value is <strong>${bl('2')}</strong> (two wholes).`,
            `Identify the ${gr('tenths')} digit: <strong>${gr('4')}</strong> is the first digit after the decimal point. Its value is <strong>${gr('4')}/10 = ${gr('0.4')}</strong> (four tenths).`,
            `Identify the ${re('hundredths')} digit: <strong>${re('6')}</strong> is the second digit after the decimal point. Its value is <strong>${re('6')}/100 = ${re('0.06')}</strong> (six hundredths).`,
            `Read the whole number part first: "${bl('two')}", then say "and", then read the decimal digits as a whole number with the place name of the last digit: "${re('forty-six hundredths')}".`,
            `<strong>Answer in words:</strong> "${bl('two')} and ${re('forty-six hundredths')}" ✓`,
          ],
        },

        // ── Example 2: Convert common fractions to decimal fractions ──────────
        {
          question: 'Write each of the following as a decimal fraction:  a) 7/10 &nbsp; b) 53/100 &nbsp; c) 4 9/100',
          answer: `a) ${bl('0')}.${gr('7')} &nbsp;&nbsp; b) ${bl('0')}.${gr('5')}${re('3')} &nbsp;&nbsp; c) ${bl('4')}.${gr('0')}${re('9')}`,
          steps: [
            `<strong>a) 7/10 — tenths → 1 decimal place.</strong> Write ${bl('0')} in the units place and ${gr('7')} in the tenths place: ${bl('0')}.${gr('7')}`,
            `<strong>b) 53/100 — hundredths → 2 decimal places.</strong> 53 hundredths = 5 tenths and 3 hundredths. Write ${bl('0')} in units, ${gr('5')} in tenths, ${re('3')} in hundredths: ${bl('0')}.${gr('5')}${re('3')}`,
            `<strong>c) 4 9/100 — mixed number.</strong> The whole number part is ${bl('4')}. 9 hundredths needs 2 decimal places but there are <em>no tenths</em> — write ${gr('0')} as a placeholder in the tenths position: ${bl('4')}.${gr('0')}${re('9')}`,
            `<strong>Check:</strong> ${bl('0')}.${gr('7')} → 7 tenths ✓ &nbsp; ${bl('0')}.${gr('5')}${re('3')} → 53 hundredths ✓ &nbsp; ${bl('4')}.${gr('0')}${re('9')} → 4 and 9 hundredths ✓`,
          ],
        },

        // ── Example 3: Words → decimal fraction and common fraction ───────────
        {
          question: 'Write "six and three hundredths" as a decimal fraction and as a mixed fraction.',
          answer: `Decimal: ${bl('6')}.${gr('0')}${re('3')} &nbsp;&nbsp; Mixed fraction: ${bl('6')} ${re('3')}/100`,
          steps: [
            `Identify the whole number part: "six" → write ${bl('6')} in the units place.`,
            `Identify the fraction part: "three hundredths" → ${re('3')}/100. Hundredths always require <strong>2 decimal places</strong>.`,
            `We have 3 hundredths but <em>no tenths</em>. We must place a <strong>${gr('0')} as a placeholder</strong> in the tenths position so the digit 3 lands in the hundredths column: ${bl('6')}.${gr('0')}${re('3')}`,
            `Write as a mixed fraction: whole number part + fraction part = ${bl('6')} ${re('3')}/100`,
            `<strong>Check:</strong> ${bl('6')}.${gr('0')}${re('3')} → 6 units, 0 tenths, 3 hundredths = "six and three hundredths" ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 9/10 as a decimal fraction.',
          answer: '0.9',
          checkMode: 'auto',
          correctAnswer: '0.9',
          explanation: '9/10 means 9 tenths. Tenths → 1 decimal place.\nWrite 0 in the units place and 9 in the tenths place: 0.9 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write 0.5 as a common fraction in simplest form.',
              correctAnswer: '1/2',
              correctAnswers: ['1/2', '5/10'],
              explanation: '0.5 means 5 tenths = 5/10.\nSimplify: 5/10 = 1/2 ✓',
            },
            {
              label: 'b) Write "eight hundredths" as a decimal fraction.',
              correctAnswer: '0.08',
              explanation: '8 hundredths → 2 decimal places. No tenths, so place a 0 in the tenths position as a placeholder.\nAnswer: 0.08 ✓',
            },
            {
              label: 'c) What is the value of the digit 7 in the decimal fraction 3.07?',
              correctAnswer: '7 hundredths',
              correctAnswers: ['7 hundredths', '7/100', '0.07'],
              explanation: 'In 3.07:\n• 3 is in the units place\n• 0 is in the tenths place (placeholder)\n• 7 is in the hundredths place\nValue of 7 = 7 hundredths = 7/100 = 0.07 ✓',
            },
          ],
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A piece of ribbon is 2.45 metres long.\n\na) Write 2.45 as a mixed fraction.\nb) What is the value of the digit 4?\nc) What is the value of the digit 5?\nd) A second piece of ribbon is described as "two and three tenths metres". Write this length as a decimal fraction.',
          answer: 'a) 2 45/100 (simplified: 2 9/20)\nb) 4 tenths = 4/10 = 0.4 m\nc) 5 hundredths = 5/100 = 0.05 m\nd) 2.3',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining decimal fractions including place value of tenths and hundredths how to read and write decimals and how decimals relate to common fractions with denominators 10 and 100" />',

      diagramPlaceholder: 'Place value chart showing units in blue tenths in green and hundredths in red with the example number 3.47 colour coded in each column and the fraction equivalent shown below each digit',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="25" width="55" height="50" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><rect x="73" y="25" width="20" height="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/><rect x="98" y="25" width="55" height="50" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><rect x="158" y="25" width="55" height="50" fill="#fef2f2" stroke="#dc2626" stroke-width="2.5"/><text x="42" y="18" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">UNITS</text><text x="125" y="18" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">TENTHS</text><text x="185" y="18" font-weight="700" font-size="8" text-anchor="middle" fill="#dc2626">HUNDREDTHS</text><text x="42" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">3</text><text x="83" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#374151">.</text><text x="125" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="185" y="58" font-weight="700" font-size="26" text-anchor="middle" fill="#dc2626">7</text><text x="42" y="90" font-size="11" text-anchor="middle" fill="#374151">3 ones</text><text x="125" y="90" font-size="11" text-anchor="middle" fill="#374151">4/10</text><text x="185" y="90" font-size="11" text-anchor="middle" fill="#374151">7/100</text><text x="110" y="120" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">3.47 = 3 + 4/10 + 7/100</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-decimals',
      title: 'Comparing and Ordering Decimal Fractions',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">To compare decimal fractions we use <strong>place value</strong> — exactly the same approach as comparing whole numbers. Always start at the <strong>largest place value</strong> (units) and move right one column at a time until you find two digits that are different.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('units')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tenths')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hundredths')}</span>` +
        `</div>` +

        // ── Comparison steps ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing two decimal fractions: step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Line up</strong> the decimal points. Add trailing zeros if needed so both numbers have the same number of decimal places. (Trailing zeros do not change the value — 0.7 = 0.70.)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare ${bl('units')}.</strong> The larger units digit means the larger number. If they differ — stop here, you have your answer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare ${gr('tenths')}.</strong> If units are equal, the larger tenths digit means the larger number. If they differ — stop here.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare ${re('hundredths')}.</strong> If both units and tenths are equal, compare the hundredths digits.</p>` +
        `</div>` +

        `</div>` +

        // ── Symbols ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparison symbols</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#16a34a;margin-bottom:4px;">&gt;</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Greater than</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0.8 &gt; 0.5</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#dc2626;margin-bottom:4px;">&lt;</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Less than</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0.3 &lt; 0.9</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 18px;text-align:center;min-width:120px;flex:1;">` +
        `<p style="font-size:1.8em;font-weight:700;color:#2563eb;margin-bottom:4px;">=</p>` +
        `<p style="font-size:13px;color:#374151;font-weight:600;margin-bottom:2px;">Equal to</p>` +
        `<p style="font-size:12px;color:#6b7280;margin:0;">0.5 = 0.50</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Common mistake: more digits does NOT mean a bigger number</p>` +
        `<p style="margin:0;color:#78350f;">Many learners think <strong>0.65 &gt; 0.7</strong> because 65 looks bigger than 7. This is <strong>wrong.</strong> Always compare place by place from the left. In 0.7, the ${gr('tenths')} digit is <strong>${gr('7')}</strong>. In 0.65, the ${gr('tenths')} digit is only <strong>${gr('6')}</strong>. Since ${gr('7')} &gt; ${gr('6')}, we have <strong>0.7 &gt; 0.65</strong> ✓</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: Compare 0.7 and 0.65 ──────────────────────────────────
        {
          question: 'Use > or < to compare 0.7 and 0.65.',
          answer: `${bl('0')}.${gr('7')}${re('0')} &gt; ${bl('0')}.${gr('6')}${re('5')}`,
          steps: [
            `Write both numbers with 2 decimal places so they are easy to compare column by column:<br>${bl('0')}.${gr('7')}${re('0')} &nbsp; and &nbsp; ${bl('0')}.${gr('6')}${re('5')}`,
            `<strong>Compare ${bl('units')}:</strong> both numbers have ${bl('0')} units. Equal — move to tenths.`,
            `<strong>Compare ${gr('tenths')}:</strong> first number has ${gr('7')} tenths; second number has ${gr('6')} tenths. Since ${gr('7')} &gt; ${gr('6')}, the <strong>first number is larger</strong>. We can stop here.`,
            `We do not need to compare ${re('hundredths')} because the ${gr('tenths')} digits are already different.`,
            `<strong>Answer:</strong> ${bl('0')}.${gr('7')} &gt; ${bl('0')}.${gr('6')}${re('5')} ✓ (Despite 0.65 having two decimal digits, its tenths digit is smaller.)`,
          ],
        },

        // ── Example 5: Order 4 decimals from smallest to largest ──────────────
        {
          question: 'Order from smallest to largest: 0.8, 1.3, 0.35, 1.03',
          answer: `${bl('0')}.${gr('3')}${re('5')} &lt; ${bl('0')}.${gr('8')}${re('0')} &lt; ${bl('1')}.${gr('0')}${re('3')} &lt; ${bl('1')}.${gr('3')}${re('0')}`,
          steps: [
            `Write all numbers with 2 decimal places so each column lines up:<br>${bl('0')}.${gr('8')}${re('0')} &nbsp;|&nbsp; ${bl('1')}.${gr('3')}${re('0')} &nbsp;|&nbsp; ${bl('0')}.${gr('3')}${re('5')} &nbsp;|&nbsp; ${bl('1')}.${gr('0')}${re('3')}`,
            `<strong>Compare ${bl('units')} first.</strong> Numbers with ${bl('0')} units: 0.80 and 0.35. Numbers with ${bl('1')} unit: 1.30 and 1.03. The group with 0 units is smaller, so those two come first.`,
            `<strong>Compare the two numbers with ${bl('0')} units</strong> — look at ${gr('tenths')}: 0.${gr('8')}0 has ${gr('8')} tenths; 0.${gr('3')}5 has ${gr('3')} tenths. ${gr('3')} &lt; ${gr('8')}, so 0.35 &lt; 0.80.`,
            `<strong>Compare the two numbers with ${bl('1')} unit</strong> — look at ${gr('tenths')}: 1.${gr('3')}0 has ${gr('3')} tenths; 1.${gr('0')}3 has ${gr('0')} tenths. ${gr('0')} &lt; ${gr('3')}, so 1.03 &lt; 1.30.`,
            `<strong>Order from smallest to largest:</strong> 0.35 &lt; 0.80 &lt; 1.03 &lt; 1.30<br>Written without trailing zeros: <strong>0.35, 0.8, 1.03, 1.3</strong> ✓`,
          ],
        },

        // ── Example 6: Order 4 decimals from largest to smallest ─────────────
        {
          question: 'Order from largest to smallest: 2.5, 2.05, 0.52, 5.2',
          answer: `${bl('5')}.${gr('2')}${re('0')} &gt; ${bl('2')}.${gr('5')}${re('0')} &gt; ${bl('2')}.${gr('0')}${re('5')} &gt; ${bl('0')}.${gr('5')}${re('2')}`,
          steps: [
            `Write all numbers with 2 decimal places:<br>${bl('2')}.${gr('5')}${re('0')} &nbsp;|&nbsp; ${bl('2')}.${gr('0')}${re('5')} &nbsp;|&nbsp; ${bl('0')}.${gr('5')}${re('2')} &nbsp;|&nbsp; ${bl('5')}.${gr('2')}${re('0')}`,
            `<strong>Compare ${bl('units')} first.</strong> ${bl('5')}.20 has the largest units digit (${bl('5')}) → it goes first. ${bl('0')}.52 has the smallest units digit (${bl('0')}) → it goes last.`,
            `<strong>Compare the two remaining numbers</strong> that both have ${bl('2')} units — look at ${gr('tenths')}: ${bl('2')}.${gr('5')}0 has ${gr('5')} tenths; ${bl('2')}.${gr('0')}5 has ${gr('0')} tenths. ${gr('5')} &gt; ${gr('0')}, so 2.50 &gt; 2.05.`,
            `Order from largest to smallest: 5.20 &gt; 2.50 &gt; 2.05 &gt; 0.52`,
            `<strong>Answer:</strong> 5.2, 2.5, 2.05, 0.52 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which is bigger: 0.9 or 0.85?',
          answer: '0.9',
          checkMode: 'auto',
          correctAnswer: '0.9',
          explanation: 'Write with 2 decimal places: 0.90 and 0.85.\nCompare units: both 0 — equal.\nCompare tenths: 9 vs 8. Since 9 > 8, we get 0.9 > 0.85 ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write > , < or = :  1.4 __ 1.40',
              correctAnswer: '=',
              explanation: '1.40 has a trailing zero that does not change the value.\n1.4 means 1 unit and 4 tenths. 1.40 also means 1 unit and 4 tenths (plus 0 hundredths).\nThey are equal: 1.4 = 1.40 ✓',
            },
            {
              label: 'b) Write > , < or = :  0.63 __ 0.7',
              correctAnswer: '<',
              explanation: 'Write with 2 decimal places: 0.63 and 0.70.\nCompare units: both 0 — equal.\nCompare tenths: 6 vs 7. Since 6 < 7, we get 0.63 < 0.7 ✓',
            },
            {
              label: 'c) Order from smallest to largest: 0.45, 0.5, 0.4, 0.54',
              correctAnswer: '0.4, 0.45, 0.5, 0.54',
              correctAnswers: ['0.4, 0.45, 0.5, 0.54', '0.4 0.45 0.5 0.54', '0.40, 0.45, 0.50, 0.54'],
              explanation: 'Write with 2 decimal places: 0.40, 0.45, 0.50, 0.54.\nAll have 0 units.\nCompare tenths: 0.40 and 0.45 have 4 tenths (smaller group); 0.50 and 0.54 have 5 tenths (larger group).\nWithin the 4-tenths group: 0.40 < 0.45 (hundredths: 0 < 5).\nWithin the 5-tenths group: 0.50 < 0.54 (hundredths: 0 < 4).\nFinal order: 0.4 < 0.45 < 0.5 < 0.54 ✓',
            },
          ],
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Four friends each pour a different amount of juice. Their amounts in litres are: 1.25, 0.9, 1.2, 0.95.\n\na) Order all four amounts from least to greatest.\nb) Which friend poured the most juice?\nc) How much more did the person who poured the most pour compared to the person who poured the least? Show your working.',
          answer: 'a) 0.9 L, 0.95 L, 1.2 L, 1.25 L\nb) The friend who poured 1.25 litres poured the most.\nc) 1.25 − 0.9 = 0.35 litres more\n\nWorking for part c:\n  1.25\n− 0.90\n  0.35',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to compare and order decimal fractions by lining up decimal points and comparing place by place from units to tenths to hundredths including a worked example of the common misconception that more digits means a bigger number" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING AND SUBTRACTING DECIMAL FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-decimals',
      title: 'Adding and Subtracting Decimal Fractions',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">Adding and subtracting decimal fractions works <strong>exactly like adding and subtracting whole numbers</strong> — as long as you follow one golden rule: <strong>always line up the decimal points</strong> before you start. Once the decimal points are aligned, every digit falls into its correct column and you can add or subtract just as you would with whole numbers, carrying or borrowing when needed.</p>` +

        // ── Colour key (section-specific) ─────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('decimal point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tenths')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hundredths')}</span>` +
        `</div>` +

        // ── The golden rule ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The golden rule: line up the decimal points</p>` +
        `<p style="margin-bottom:12px;">Write your numbers one below the other so that every decimal point is in the same column. Add trailing zeros to fill empty places so both numbers have the same number of decimal places. Then bring the decimal point straight down into your answer.</p>` +

        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;margin:0 auto;min-width:240px;">` +
        `<thead><tr>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#6b7280;border-bottom:1px solid #e2e8f0;">Units</th>` +
        `<th style="padding:6px 12px;text-align:center;font-size:13px;font-weight:700;color:#dc2626;border-bottom:1px solid #e2e8f0;">Decimal point</th>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#16a34a;border-bottom:1px solid #e2e8f0;">Tenths</th>` +
        `<th style="padding:6px 20px;text-align:center;font-size:13px;font-weight:700;color:#2563eb;border-bottom:1px solid #e2e8f0;">Hundredths</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#374151;">2</td>` +
        `<td style="padding:8px 12px;text-align:center;font-size:1.5em;font-weight:700;color:#dc2626;">.</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#16a34a;">4</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#2563eb;">7</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#374151;">1</td>` +
        `<td style="padding:8px 12px;text-align:center;font-size:1.5em;font-weight:700;color:#dc2626;">.</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#16a34a;">8</td>` +
        `<td style="padding:8px 20px;text-align:center;font-size:1.5em;font-weight:700;color:#2563eb;">5</td>` +
        `</tr>` +
        `<tr style="border-top:2px solid #374151;">` +
        `<td colspan="4" style="padding:6px 20px;text-align:center;font-size:12px;color:#6b7280;">↑ Decimal points line up in one column — bring the point straight down into the answer.</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Adding with carrying ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Adding decimal fractions (with carrying)</p>` +
        `<p style="margin-bottom:12px;">After lining up the decimal points, add from <strong>right to left</strong> — ${bl('hundredths')} first, then ${gr('tenths')}, then units. If any column totals 10 or more, write the ones digit of the total and <strong>carry 1</strong> to the next column on the left.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add the ${bl('hundredths')} column.</strong> If the total ≥ 10, write the ones digit and carry 1 to the ${gr('tenths')} column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add the ${gr('tenths')} column</strong> (plus any carry). If the total ≥ 10, write the ones digit and carry 1 to the units column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add the units column</strong> (plus any carry) and write the result.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bring the ${re('decimal point')} straight down</strong> into the answer — it stays in the same column throughout.</p>` +
        `</div>` +

        `</div>` +

        // ── Subtracting with borrowing ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Subtracting decimal fractions (with borrowing)</p>` +
        `<p style="margin-bottom:12px;">Subtraction also works from <strong>right to left</strong>. If a top digit is <strong>smaller</strong> than the digit below it, <strong>borrow 1</strong> from the column on the left: reduce that digit by 1 and add 10 to the current column.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Subtract the ${bl('hundredths')} column.</strong> If the top digit is smaller, borrow 1 from the ${gr('tenths')} column: reduce the tenths digit by 1 and add 10 to the hundredths digit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Subtract the ${gr('tenths')} column</strong> (using the reduced digit if you borrowed). If still too small, borrow from the units column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Subtract the units column</strong> (using the reduced digit if you borrowed).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bring the ${re('decimal point')} straight down</strong> into the answer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Watch out: different numbers of decimal places</p>` +
        `<p style="margin:0;color:#78350f;">When one number has more decimal places than the other, add <strong>trailing zeros</strong> before you start. For example, 3.5 + 1.27 → rewrite 3.5 as 3.${gr('5')}${bl('0')} so both have two decimal places. This puts a digit in every column and prevents mistakes.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Simple addition, no carrying ──────────────────────────
        {
          question: 'Calculate 0.3 + 0.5.',
          answer: `0${re('.')}${gr('8')}`,
          steps: [
            `Line up the ${re('decimal points')} and add from right to left:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re('.')}${gr('3')}<br>` +
            `+ 0${re('.')}${gr('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tenths')} column:</strong> ${gr('3')} + ${gr('5')} = ${gr('8')}. The total is less than 10, so no carrying needed.`,
            `Bring the ${re('decimal point')} straight down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re('.')}${gr('3')}<br>` +
            `+ 0${re('.')}${gr('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re('.')}${gr('8')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 0${re('.')}${gr('3')} + 0${re('.')}${gr('5')} = 0${re('.')}${gr('8')} ✓`,
          ],
        },

        // ── Example 8: Addition with carrying in both columns ────────────────
        {
          question: 'Calculate 2.47 + 1.85.',
          answer: `4${re('.')}${gr('3')}${bl('2')}`,
          steps: [
            `Line up the ${re('decimal points')}:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;2${re('.')}${gr('4')}${bl('7')}<br>` +
            `+ 1${re('.')}${gr('8')}${bl('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Hundredths')} column:</strong> ${bl('7')} + ${bl('5')} = 12. Write ${bl('2')} in the hundredths place and <strong>carry 1</strong> to the ${gr('tenths')} column.`,
            `<strong>${gr('Tenths')} column:</strong> ${gr('4')} + ${gr('8')} + 1 (carry) = 13. Write ${gr('3')} in the tenths place and <strong>carry 1</strong> to the units column.`,
            `<strong>Units column:</strong> 2 + 1 + 1 (carry) = 4. Write 4 in the units place.`,
            `Bring the ${re('decimal point')} straight down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;&nbsp;&nbsp;¹&thinsp;¹</span><br>` +
            `&nbsp;&nbsp;2${re('.')}${gr('4')}${bl('7')}<br>` +
            `+ 1${re('.')}${gr('8')}${bl('5')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;4${re('.')}${gr('3')}${bl('2')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 2${re('.')}${gr('4')}${bl('7')} + 1${re('.')}${gr('8')}${bl('5')} = 4${re('.')}${gr('3')}${bl('2')} ✓`,
          ],
        },

        // ── Example 9: Addition with a trailing zero ─────────────────────────
        {
          question: 'Calculate 3.6 + 1.27.',
          answer: `4${re('.')}${gr('8')}${bl('7')}`,
          steps: [
            `The numbers have different numbers of decimal places (one vs two). Add a trailing zero: rewrite 3.${gr('6')} as 3.${gr('6')}${bl('0')} so both numbers have two decimal places.`,
            `Line up the ${re('decimal points')}:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re('.')}${gr('6')}${bl('0')}<br>` +
            `+ 1${re('.')}${gr('2')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Hundredths')} column:</strong> ${bl('0')} + ${bl('7')} = ${bl('7')}. No carrying needed.`,
            `<strong>${gr('Tenths')} column:</strong> ${gr('6')} + ${gr('2')} = ${gr('8')}. No carrying needed.`,
            `<strong>Units column:</strong> 3 + 1 = 4. Bring the ${re('decimal point')} down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re('.')}${gr('6')}${bl('0')}<br>` +
            `+ 1${re('.')}${gr('2')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;4${re('.')}${gr('8')}${bl('7')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 3${re('.')}${gr('6')} + 1${re('.')}${gr('2')}${bl('7')} = 4${re('.')}${gr('8')}${bl('7')} ✓`,
          ],
        },

        // ── Example 10: Simple subtraction, no borrowing ─────────────────────
        {
          question: 'Calculate 0.9 − 0.4.',
          answer: `0${re('.')}${gr('5')}`,
          steps: [
            `Line up the ${re('decimal points')} and subtract from right to left:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re('.')}${gr('9')}<br>` +
            `− 0${re('.')}${gr('4')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tenths')} column:</strong> ${gr('9')} − ${gr('4')} = ${gr('5')}. The top digit is larger, so no borrowing needed.`,
            `Bring the ${re('decimal point')} straight down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;0${re('.')}${gr('9')}<br>` +
            `− 0${re('.')}${gr('4')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re('.')}${gr('5')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 0${re('.')}${gr('9')} − 0${re('.')}${gr('4')} = 0${re('.')}${gr('5')} ✓`,
          ],
        },

        // ── Example 11: Subtraction with borrowing from units ────────────────
        {
          question: 'Calculate 1.3 − 0.7.',
          answer: `0${re('.')}${gr('6')}`,
          steps: [
            `Line up the ${re('decimal points')}:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;1${re('.')}${gr('3')}<br>` +
            `− 0${re('.')}${gr('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${gr('Tenths')} column:</strong> ${gr('3')} − ${gr('7')}: the top digit (${gr('3')}) is <em>smaller</em> than the bottom digit (${gr('7')}). We must <strong>borrow 1 from the units column</strong>. The units digit changes from 1 to 0, and the tenths digit becomes ${gr('3')} + 10 = ${gr('13')}.`,
            `Now subtract the ${gr('tenths')}: ${gr('13')} − ${gr('7')} = ${gr('6')}.`,
            `<strong>Units column</strong> (now 0 after borrowing): 0 − 0 = 0. Bring the ${re('decimal point')} down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;⁰&thinsp;¹³</span><br>` +
            `&nbsp;&nbsp;1${re('.')}${gr('3')}<br>` +
            `− 0${re('.')}${gr('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;0${re('.')}${gr('6')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 1${re('.')}${gr('3')} − 0${re('.')}${gr('7')} = 0${re('.')}${gr('6')} ✓`,
          ],
        },

        // ── Example 12: Subtraction with borrowing in both columns ───────────
        {
          question: 'Calculate 3.24 − 1.57.',
          answer: `1${re('.')}${gr('6')}${bl('7')}`,
          steps: [
            `Line up the ${re('decimal points')}:<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `&nbsp;&nbsp;3${re('.')}${gr('2')}${bl('4')}<br>` +
            `− 1${re('.')}${gr('5')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;</span>` +
            `</div>`,
            `<strong>${bl('Hundredths')} column:</strong> ${bl('4')} − ${bl('7')}: top digit smaller. <strong>Borrow 1 from the ${gr('tenths')} column</strong>. The tenths digit decreases from ${gr('2')} to ${gr('1')}, and the hundredths digit becomes ${bl('4')} + 10 = ${bl('14')}. Now subtract: ${bl('14')} − ${bl('7')} = ${bl('7')}.`,
            `<strong>${gr('Tenths')} column</strong> (now ${gr('1')} after borrowing): ${gr('1')} − ${gr('5')}: still too small. <strong>Borrow 1 from the units column</strong>. The units digit decreases from 3 to 2, and the tenths digit becomes ${gr('1')} + 10 = ${gr('11')}. Now subtract: ${gr('11')} − ${gr('5')} = ${gr('6')}.`,
            `<strong>Units column</strong> (now 2 after borrowing): 2 − 1 = 1.`,
            `Bring the ${re('decimal point')} down.<br>` +
            `<div style="display:inline-block;margin:8px 0;padding:12px 20px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;font-size:1.2em;font-weight:700;line-height:2.2;font-family:'Courier New',monospace;">` +
            `<span style="font-size:0.7em;color:#dc2626;">&nbsp;²&thinsp;¹¹&thinsp;¹⁴</span><br>` +
            `&nbsp;&nbsp;3${re('.')}${gr('2')}${bl('4')}<br>` +
            `− 1${re('.')}${gr('5')}${bl('7')}<br>` +
            `<span style="display:block;border-top:2px solid #374151;margin-top:2px;">&nbsp;&nbsp;1${re('.')}${gr('6')}${bl('7')}</span>` +
            `</div>`,
            `<strong>Answer:</strong> 3${re('.')}${gr('2')}${bl('4')} − 1${re('.')}${gr('5')}${bl('7')} = 1${re('.')}${gr('6')}${bl('7')} ✓ &nbsp;&nbsp; <em>Check: 1.67 + 1.57 = 3.24 ✓</em>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 0.4 + 0.3.',
          answer: '0.7',
          checkMode: 'auto',
          correctAnswer: '0.7',
          explanation: 'Line up the decimal points.\nTenths: 4 + 3 = 7. No carrying needed.\nAnswer: 0.7 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate 1.65 + 2.78.',
              correctAnswer: '4.43',
              explanation: 'Line up decimal points: 1.65 + 2.78\nHundredths: 5 + 8 = 13. Write 3, carry 1.\nTenths: 6 + 7 + 1 = 14. Write 4, carry 1.\nUnits: 1 + 2 + 1 = 4.\nAnswer: 4.43 ✓',
            },
            {
              label: 'b) Calculate 5.3 − 2.8.',
              correctAnswer: '2.5',
              explanation: 'Line up decimal points: 5.3 − 2.8\nTenths: 3 − 8 — too small, borrow from units. Units becomes 4, tenths becomes 13.\n13 − 8 = 5.\nUnits: 4 − 2 = 2.\nAnswer: 2.5 ✓',
            },
            {
              label: 'c) Calculate 4.5 + 1.73.',
              correctAnswer: '6.23',
              explanation: 'Rewrite 4.5 as 4.50 so both numbers have 2 decimal places.\nHundredths: 0 + 3 = 3. No carry.\nTenths: 5 + 7 = 12. Write 2, carry 1.\nUnits: 4 + 1 + 1 = 6.\nAnswer: 6.23 ✓',
            },
          ],
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A carpenter cuts two pieces of wood from a plank that is 5 metres long.\n\na) The first piece is 1.85 m and the second piece is 2.47 m long. What is the total length of wood cut off?\nb) How much of the plank is left over?\nc) If the leftover piece is cut exactly in half, how long is each half?',
          answer: 'a) 1.85 + 2.47 = 4.32 m\nb) 5.00 − 4.32 = 0.68 m\nc) 0.68 ÷ 2 = 0.34 m each\n\nWorking for part a:\n  1.85\n+ 2.47\n  4.32\n\nWorking for part b:\n  5.00\n− 4.32\n  0.68',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to add and subtract decimal fractions using the column method by lining up decimal points then adding or subtracting digit by digit from right to left with carrying when totals reach 10 or more and borrowing when top digits are too small" />',

      diagramPlaceholder: 'Column arithmetic diagrams showing 2.47 plus 1.85 equals 4.32 with carry arrows and 3.24 minus 1.57 equals 1.67 with borrow arrows decimal point highlighted in red tenths in green and hundredths in blue',
      diagramSvg: '<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><text x="52" y="10" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">2.47 + 1.85</text><text x="35" y="20" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">1</text><text x="65" y="20" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">1</text><text x="35" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">2</text><text x="50" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">.</text><text x="65" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">4</text><text x="80" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">7</text><text x="15" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">+</text><text x="35" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1</text><text x="50" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">.</text><text x="65" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">8</text><text x="80" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">5</text><line x1="15" y1="56" x2="90" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="50" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">.</text><text x="65" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">3</text><text x="80" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">2</text><text x="167" y="10" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">3.24 − 1.57</text><text x="150" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">2</text><text x="180" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">11</text><text x="195" y="20" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">14</text><text x="150" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">3</text><text x="165" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">.</text><text x="180" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">2</text><text x="195" y="34" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">4</text><text x="130" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">−</text><text x="150" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1</text><text x="165" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">.</text><text x="180" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">5</text><text x="195" y="50" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">7</text><line x1="130" y1="56" x2="205" y2="56" stroke="#0f1f3d" stroke-width="2"/><text x="150" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">1</text><text x="165" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">.</text><text x="180" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">6</text><text x="195" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">7</text><text x="110" y="95" font-size="10" text-anchor="middle" fill="#6b7280">red = decimal point · green = tenths · blue = hundredths</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CONVERTING BETWEEN FRACTIONS, DECIMALS AND PERCENTAGES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-fractions-decimals-percentages',
      title: 'Converting Between Fractions, Decimals and Percentages',
      icon: '%',
      explanation:
        lookingAhead(
          'percentages',
          'CAPS Grade 5 does not include percentages at all — learners only work with common fractions and decimal fractions (tenths and hundredths). The Grade 6 curriculum clarification notes state plainly: "Percentages is a new topic for Grade 6 learners." This whole section is accurate and useful, but it is Grade 6 content — kept here as clearly labelled enrichment.'
        ) +
        `<p style="margin-bottom:16px;">Fractions, decimals and percentages are <strong>three different ways of expressing the same value</strong>. Being able to convert between them is a useful skill. Once you understand the connection, you can choose whichever form is most useful for a given problem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('decimal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('percentage')}</span>` +
        `</div>` +

        // ── Three representations ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three ways to say the same thing</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;justify-content:center;align-items:center;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Fraction</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#2563eb;margin:0;">${bl('1/2')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Decimal</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#16a34a;margin:0;">${gr('0.5')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Percentage</p>` +
        `<p style="font-size:1.5em;font-weight:700;color:#dc2626;margin:0;">${re('50%')}</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Fraction')} → ${gr('Decimal')}: <strong>divide the numerator by the denominator</strong>. E.g. 3 ÷ 10 = ${gr('0.3')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Decimal')} → ${re('Percentage')}: <strong>multiply by 100</strong>. E.g. ${gr('0.3')} × 100 = ${re('30%')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Percentage')} → ${gr('Decimal')}: <strong>divide by 100</strong>. E.g. ${re('75%')} ÷ 100 = ${gr('0.75')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Fraction')} → ${re('Percentage')}: <strong>convert to decimal first, then multiply by 100</strong>. E.g. ${bl('3/10')} → ${gr('0.3')} → ${re('30%')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Handy shortcut for tenths and hundredths</p>` +
        `<p style="margin:0;color:#78350f;">If the ${bl('fraction')} already has a denominator of 10 or 100, you can read off the ${gr('decimal')} directly: ${bl('7/10')} = ${gr('0.7')} and ${bl('45/100')} = ${gr('0.45')}. Then multiply by 100 to get the ${re('percentage')}: ${gr('0.7')} × 100 = ${re('70%')} and ${gr('0.45')} × 100 = ${re('45%')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Fraction to decimal and percentage ────────────────────
        {
          question: 'Convert 3/10 to a decimal and a percentage.',
          answer: `${bl('3/10')} = ${gr('0.3')} = ${re('30%')}`,
          steps: [
            `<strong>Step 1 — ${bl('Fraction')} to ${gr('Decimal')}:</strong> Divide the numerator by the denominator: 3 ÷ 10 = ${gr('0.3')}`,
            `<strong>Step 2 — ${gr('Decimal')} to ${re('Percentage')}:</strong> Multiply the decimal by 100: ${gr('0.3')} × 100 = ${re('30')}. Write the % sign: ${re('30%')}`,
            `<strong>Answer:</strong> ${bl('3/10')} = ${gr('0.3')} = ${re('30%')} ✓`,
          ],
        },

        // ── Example 2: Decimal to fraction and percentage ────────────────────
        {
          question: 'Convert 0.45 to a fraction and a percentage.',
          answer: `${gr('0.45')} = ${bl('45/100')} = ${re('45%')}`,
          steps: [
            `<strong>Step 1 — ${gr('Decimal')} to ${bl('Fraction')}:</strong> 0.45 has two decimal places (hundredths), so write it as a fraction with denominator 100: ${gr('0.45')} = ${bl('45/100')}`,
            `<strong>Step 2 — ${gr('Decimal')} to ${re('Percentage')}:</strong> Multiply by 100: ${gr('0.45')} × 100 = ${re('45')}. Write the % sign: ${re('45%')}`,
            `<strong>Answer:</strong> ${gr('0.45')} = ${bl('45/100')} = ${re('45%')} ✓`,
          ],
        },

        // ── Example 3: Percentage to decimal and fraction ────────────────────
        {
          question: 'Convert 75% to a decimal and a fraction.',
          answer: `${re('75%')} = ${gr('0.75')} = ${bl('3/4')}`,
          steps: [
            `<strong>Step 1 — ${re('Percentage')} to ${gr('Decimal')}:</strong> Divide by 100: ${re('75')} ÷ 100 = ${gr('0.75')}`,
            `<strong>Step 2 — ${gr('Decimal')} to ${bl('Fraction')}:</strong> 0.75 has two decimal places, so write as a fraction with denominator 100: ${gr('0.75')} = ${bl('75/100')}. Simplify by dividing numerator and denominator by 25: ${bl('75/100')} = ${bl('3/4')}`,
            `<strong>Answer:</strong> ${re('75%')} = ${gr('0.75')} = ${bl('3/4')} ✓`,
          ],
        },

        // ── Example 4: Score as decimal and percentage ───────────────────────
        {
          question: 'Amahle scores 18 out of 25. Write her score as a decimal and as a percentage.',
          answer: `${bl('18/25')} = ${gr('0.72')} = ${re('72%')}`,
          steps: [
            `Write the score as a ${bl('fraction')}: Amahle scored ${bl('18/25')}.`,
            `<strong>Step 1 — ${bl('Fraction')} to ${gr('Decimal')}:</strong> Convert to an equivalent fraction with denominator 100 by multiplying numerator and denominator by 4: ${bl('18/25')} = ${bl('72/100')} = ${gr('0.72')}`,
            `<strong>Step 2 — ${gr('Decimal')} to ${re('Percentage')}:</strong> Multiply by 100: ${gr('0.72')} × 100 = ${re('72%')}`,
            `<strong>Answer:</strong> ${bl('18/25')} = ${gr('0.72')} = ${re('72%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — fraction to decimal and percentage ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 1/5 to a decimal and a percentage.',
          answer: '0.2 and 20%',
          checkMode: 'auto',
          correctAnswer: '0.2 and 20%',
          correctAnswers: ['0.2 and 20%', '0.2, 20%', '0.20 and 20%'],
          explanation: 'Step 1: Fraction to decimal — convert 1/5 to an equivalent fraction with denominator 10 by multiplying numerator and denominator by 2: 1/5 = 2/10 = 0.2\nStep 2: Decimal to percentage — 0.2 × 100 = 20%\nAnswer: 1/5 = 0.2 = 20% ✓',
        },

        // ── Q11 Medium — converting across all three forms ───────────────────
        {
          difficulty: 'Medium',
          question: 'Convert each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write 0.6 as a fraction and as a percentage.',
              correctAnswer: '6/10 and 60%',
              correctAnswers: ['6/10 and 60%', '3/5 and 60%', '6/10, 60%', '3/5, 60%'],
              explanation: 'Decimal to fraction: 0.6 has one decimal place (tenths), so 0.6 = 6/10.\nDecimal to percentage: 0.6 × 100 = 60%.\nAnswer: 0.6 = 6/10 = 60% ✓',
            },
            {
              label: 'b) Write 25% as a decimal and as a fraction in simplest form.',
              correctAnswer: '0.25 and 1/4',
              correctAnswers: ['0.25 and 1/4', '0.25, 1/4'],
              explanation: 'Percentage to decimal: 25 ÷ 100 = 0.25.\nDecimal to fraction: 0.25 = 25/100. Simplify by dividing by 25: 25/100 = 1/4.\nAnswer: 25% = 0.25 = 1/4 ✓',
            },
            {
              label: 'c) Write 3/4 as a decimal and as a percentage.',
              correctAnswer: '0.75 and 75%',
              correctAnswers: ['0.75 and 75%', '0.75, 75%'],
              explanation: 'Fraction to decimal: multiply numerator and denominator by 25 to get denominator 100: 3/4 = 75/100 = 0.75.\nDecimal to percentage: 0.75 × 100 = 75%.\nAnswer: 3/4 = 0.75 = 75% ✓',
            },
          ],
        },

        // ── Q12 Hard — word problem comparing scores ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'In a class test, Sipho answered 16 out of 20 questions correctly.\n\na) Write his score as a fraction.\nb) Convert the fraction to a decimal.\nc) Write his score as a percentage.\nd) Thabo scored 85%. Who scored higher and by how many percentage points?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Score as a fraction',
              correctAnswer: '16/20',
              correctAnswers: ['16/20', '4/5'],
              explanation: 'Sipho answered 16 out of 20 correctly, so his score as a fraction is 16/20 (which simplifies to 4/5) ✓',
            },
            {
              label: 'b) Score as a decimal',
              correctAnswer: '0.8',
              correctAnswers: ['0.8', '0.80'],
              explanation: 'Convert 16/20 to a fraction with denominator 100: multiply numerator and denominator by 5 → 16/20 = 80/100 = 0.80 = 0.8 ✓',
            },
            {
              label: 'c) Score as a percentage',
              correctAnswer: '80%',
              explanation: 'Multiply the decimal by 100: 0.8 × 100 = 80%.\nSipho scored 80% ✓',
            },
            {
              label: 'd) Who scored higher and by how many percentage points?',
              correctAnswer: 'Thabo by 5',
              correctAnswers: ['Thabo by 5', 'Thabo by 5%', 'Thabo, 5 percentage points', 'Thabo'],
              explanation: 'Sipho scored 80% and Thabo scored 85%.\n85% > 80%, so Thabo scored higher.\nDifference: 85% − 80% = 5 percentage points ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between fractions decimals and percentages with colour coded examples fractions in blue decimals in green and percentages in red" />',
    },
  ],

  // ─── TOPIC PRACTICE ──────────────────────────────────────────────────────────
  topicPractice: [

    // ── Section 1: Understanding Decimal Fractions ────────────────────────────

    // ── Q1 Easy — decimal to fraction ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 0.7 as a fraction.',
      answer: '7/10',
      checkMode: 'auto',
      correctAnswer: '7/10',
      explanation: '0.7 means 7 tenths. Write it as a fraction with denominator 10: 0.7 = 7/10 ✓',
    },

    // ── Q2 Medium — common fractions to decimals ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write each of the following as a decimal.',
      answer: 'a) 0.3\nb) 0.45\nc) 0.09',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 3/10 =',
          correctAnswer: '0.3',
          explanation: '3/10 means 3 tenths. Tenths → 1 decimal place: 3/10 = 0.3 ✓',
        },
        {
          label: 'b) 45/100 =',
          correctAnswer: '0.45',
          explanation: '45/100 means 45 hundredths. Hundredths → 2 decimal places: 45/100 = 0.45 ✓',
        },
        {
          label: 'c) 9/100 =',
          correctAnswer: '0.09',
          explanation: '9/100 means 9 hundredths. Hundredths → 2 decimal places. There are no tenths, so write 0 as a placeholder: 9/100 = 0.09 ✓',
        },
      ],
    },

    // ── Q3 Hard — place value of digit 4 ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'What is the value of the digit 4 in each of the following?',
      answer: 'a) 4 tenths\nb) 4 hundredths\nc) 4 units',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 3.45',
          correctAnswer: '4 tenths',
          correctAnswers: ['4 tenths', '0.4', '4/10'],
          explanation: 'In 3.45: the digit 4 is in the tenths position (first place after the decimal point). Value = 4 tenths = 0.4 ✓',
        },
        {
          label: 'b) 0.04',
          correctAnswer: '4 hundredths',
          correctAnswers: ['4 hundredths', '0.04', '4/100'],
          explanation: 'In 0.04: the digit 4 is in the hundredths position (second place after the decimal point). Value = 4 hundredths = 0.04 ✓',
        },
        {
          label: 'c) 14.2',
          correctAnswer: '4 units',
          correctAnswers: ['4 units', '4', '4 ones'],
          explanation: 'In 14.2: the digit 4 is in the units position (to the left of the decimal point). Value = 4 units = 4 ✓',
        },
      ],
    },

    // ── Section 2: Comparing and Ordering Decimal Fractions ──────────────────

    // ── Q4 Easy — compare two decimals ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Which is bigger: 0.6 or 0.59?',
      answer: '0.6',
      checkMode: 'auto',
      correctAnswer: '0.6',
      explanation: 'Write with 2 decimal places: 0.60 and 0.59.\nCompare units: both 0 — equal.\nCompare tenths: 6 vs 5. Since 6 > 5, we get 0.6 > 0.59 ✓',
    },

    // ── Q5 Medium — order four decimals ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Order from smallest to biggest: 0.45, 0.5, 0.09, 0.4',
      answer: '0.09, 0.4, 0.45, 0.5',
      checkMode: 'auto',
      correctAnswer: '0.09, 0.4, 0.45, 0.5',
      correctAnswers: ['0.09, 0.4, 0.45, 0.5', '0.09, 0.40, 0.45, 0.50'],
      explanation: 'Write with 2 decimal places: 0.09, 0.40, 0.45, 0.50.\nAll have 0 units.\nCompare tenths: 0.09 has 0 tenths (smallest). Remaining: 0.40 and 0.45 have 4 tenths; 0.50 has 5 tenths.\nWithin the 4-tenths group: 0.40 < 0.45 (hundredths: 0 < 5).\nFinal order: 0.09 < 0.4 < 0.45 < 0.5 ✓',
    },

    // ── Q6 Hard — trailing zeros conceptual question ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says 0.30 is bigger than 0.3 because 30 is bigger than 3. Is he correct? Explain your answer.',
      answer: 'No, they are equal. The zero after the 3 does not change the value — 0.30 and 0.3 both mean 3 tenths. Trailing zeros after the last non-zero decimal digit do not change the value of the number.',
      checkMode: 'self',
    },

    // ── Section 3: Adding and Subtracting Decimal Fractions ──────────────────

    // ── Q7 Easy — simple addition ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 0.4 + 0.3.',
      answer: '0.7',
      checkMode: 'auto',
      correctAnswer: '0.7',
      explanation: 'Line up the decimal points.\nTenths: 4 + 3 = 7. No carrying needed.\nAnswer: 0.7 ✓',
    },

    // ── Q8 Medium — addition and subtraction ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate each of the following.',
      answer: 'a) 1.85\nb) 2.05',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 1.25 + 0.6 =',
          correctAnswer: '1.85',
          explanation: 'Rewrite 0.6 as 0.60 so both numbers have 2 decimal places.\nHundredths: 5 + 0 = 5.\nTenths: 2 + 6 = 8.\nUnits: 1 + 0 = 1.\nAnswer: 1.85 ✓',
        },
        {
          label: 'b) 2.4 − 0.35 =',
          correctAnswer: '2.05',
          explanation: 'Rewrite 2.4 as 2.40 so both numbers have 2 decimal places.\nHundredths: 0 − 5 — too small, borrow from tenths. Tenths becomes 3, hundredths becomes 10. 10 − 5 = 5.\nTenths: 3 − 3 = 0.\nUnits: 2 − 0 = 2.\nAnswer: 2.05 ✓',
        },
      ],
    },

    // ── Q9 Hard — money word problem ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato buys a pen for R3.75 and a ruler for R1.50. She pays with a R10 note. How much change does she get?',
      answer: 'R4.75',
      checkMode: 'auto',
      correctAnswer: 'R4.75',
      correctAnswers: ['R4.75', '4.75'],
      explanation: 'Step 1 — Total cost: R3.75 + R1.50\nHundredths: 5 + 0 = 5.\nTenths: 7 + 5 = 12. Write 2, carry 1.\nUnits: 3 + 1 + 1 = 5.\nTotal: R5.25\n\nStep 2 — Change: R10.00 − R5.25\nHundredths: 0 − 5 — borrow (cascades through tenths). Result: 10 − 5 = 5.\nTenths: 9 − 2 = 7.\nUnits: 9 − 5 = 4.\nChange: R4.75 ✓',
    },

    // ── Section 4: More Fraction ⇔ Decimal Conversion Practice ───────────────
    // (percentage content moved out — see the "Looking ahead" enrichment
    // banner in the converting-fractions-decimals-percentages section)

    // ── Q10 Easy — decimal to fraction ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 0.5 as a common fraction in simplest form.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '5/10'],
      explanation: '0.5 means 5 tenths = 5/10. Simplify by dividing numerator and denominator by 5: 5/10 = 1/2 ✓',
    },

    // ── Q11 Medium — converting fractions and decimals ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Convert each of the following.',
      answer: 'a) 3/5\nb) 0.25\nc) 0.75',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Write 0.6 as a fraction in simplest form.',
          correctAnswer: '3/5',
          correctAnswers: ['3/5', '6/10'],
          explanation: 'Decimal to fraction: 0.6 has one decimal place (tenths), so 0.6 = 6/10. Simplify by dividing numerator and denominator by 2: 6/10 = 3/5 ✓',
        },
        {
          label: 'b) Write 1/4 as a decimal.',
          correctAnswer: '0.25',
          explanation: 'Fraction to decimal: multiply numerator and denominator by 25 to get denominator 100: 1/4 = 25/100 = 0.25 ✓',
        },
        {
          label: 'c) Write 3/4 as a decimal.',
          correctAnswer: '0.75',
          explanation: 'Fraction to decimal: multiply numerator and denominator by 25 to get denominator 100: 3/4 = 75/100 = 0.75 ✓',
        },
      ],
    },

    // ── Q12 Hard — score as a decimal, then rounded ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo scores 17 out of 20. Write his score as a decimal, then round the decimal to one decimal place.',
      answer: 'a) 0.85\nb) 0.9',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Write the score as a decimal.',
          correctAnswer: '0.85',
          explanation: 'Write the score as a fraction: 17/20.\nConvert to a fraction with denominator 100 by multiplying numerator and denominator by 5: 17/20 = 85/100 = 0.85 ✓',
        },
        {
          label: 'b) Round the score to one decimal place.',
          correctAnswer: '0.9',
          explanation: 'Look at the hundredths digit of 0.85, which is 5. Since 5 rounds up, the tenths digit goes from 8 to 9: 0.85 ≈ 0.9 ✓',
        },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 10, message: 'Outstanding! A perfect score — you have completely mastered decimal fractions for Grade 5. Keep it up!' },
    { minScore: 8, message: 'Excellent work! You have a very strong grasp of decimal fractions. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions, chapter-review style
  // Blocks: 0-3 Place value & reading/writing | 4-7 Comparing & ordering |
  // 8-11 Add/subtract column method | 12-15 Word problems | 16-17 Converting
  // fractions/decimals | 18-19 Multi-step & error-spotting
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'What is the value of the digit 6 in the decimal fraction 4.68?', answer: '6 tenths', checkMode: 'auto', correctAnswer: '6 tenths', correctAnswers: ['6 tenths', '6/10', '0.6'], explanation: 'In 4.68, the digit 6 is the first digit after the decimal point, so it is in the tenths position. Value = 6 tenths = 6/10 = 0.6 ✓' },
        { difficulty: 'Easy', question: 'Write each common fraction as a decimal fraction.', answer: 'a) 0.3\nb) 0.29', checkMode: 'auto', parts: [
          { label: 'a) 3/10', correctAnswer: '0.3', correctAnswers: ['0.3', '0.30'], explanation: '3/10 means 3 tenths. Tenths need 1 decimal place. Write 0 in the units place and 3 in the tenths place: 0.3 ✓' },
          { label: 'b) 29/100', correctAnswer: '0.29', explanation: '29/100 means 29 hundredths. Hundredths need 2 decimal places: 2 tenths and 9 hundredths → 0.29 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Write the mixed number 5 4/100 as a decimal fraction.', answer: '5.04', checkMode: 'auto', correctAnswer: '5.04', explanation: 'The whole number part is 5. 4 hundredths needs 2 decimal places, but there are no tenths — write 0 as a placeholder: 5.04 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write "two and seven hundredths" as a decimal fraction.', answer: '2.07', checkMode: 'auto', correctAnswer: '2.07', explanation: 'The whole number part is 2. "Seven hundredths" needs 2 decimal places, but there are no tenths, so a 0 placeholder is needed in the tenths spot: 2.07 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write 0.9 as a common fraction in simplest form.', answer: '9/10', checkMode: 'auto', correctAnswer: '9/10', explanation: '0.9 means 9 tenths = 9/10. This fraction is already in simplest form since 9 and 10 share no common factor other than 1 ✓' },
        { difficulty: 'Medium', question: 'A ruler shows a length of "six and eight hundredths centimetres". Write this length as a decimal fraction, then say why a placeholder zero is needed.', answer: '6.08 cm — a zero placeholder is needed in the tenths position because there are no tenths, only hundredths', checkMode: 'auto', correctAnswer: '6.08', correctAnswers: ['6.08', '6.08 cm'], explanation: 'Whole number part = 6. "Eight hundredths" needs 2 decimal places. Since there are no tenths, we must write 0 in the tenths position so the 8 lands correctly in the hundredths column: 6.08 ✓' },
        { difficulty: 'Medium', question: 'A student writes 3 5/100 as 3.5. Is this correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'No — 3.5 means 3 and 5 tenths, not 3 and 5 hundredths. 5/100 needs 2 decimal places with a placeholder zero in the tenths spot: the correct decimal is 3.05.' },
        { difficulty: 'Easy', question: 'Which is bigger: 0.8 or 0.62?', answer: '0.8', checkMode: 'auto', correctAnswer: '0.8', explanation: 'Write with 2 decimal places: 0.80 and 0.62. Compare units: both 0. Compare tenths: 8 vs 6. Since 8 > 6, 0.8 > 0.62 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write > , < or = for: 2.5 __ 2.50', answer: '=', checkMode: 'auto', correctAnswer: '=', explanation: 'A trailing zero does not change the value. 2.5 and 2.50 both mean 2 units and 5 tenths, so they are equal: 2.5 = 2.50 ✓' },
        { difficulty: 'Medium', question: 'Order from smallest to largest: 0.6, 0.16, 0.61, 0.1', answer: '0.1, 0.16, 0.6, 0.61', checkMode: 'auto', correctAnswer: '0.1, 0.16, 0.6, 0.61', correctAnswers: ['0.1, 0.16, 0.6, 0.61', '0.10, 0.16, 0.60, 0.61'], explanation: 'Write with 2 decimal places: 0.60, 0.16, 0.61, 0.10. Compare tenths first: 0.10 and 0.16 have 1 tenth (smallest group); 0.60 and 0.61 have 6 tenths (larger group). Within each group compare hundredths: 0.10 < 0.16 and 0.60 < 0.61. Order: 0.1, 0.16, 0.6, 0.61 ✓' },
        { difficulty: 'Medium', question: 'A learner says 0.65 > 0.7 because 65 is bigger than 7. Is this correct? Explain your answer.', answer: 'No, 0.7 > 0.65. You must compare place by place: the tenths digit of 0.7 is 7, but the tenths digit of 0.65 is only 6. Since 7 > 6, 0.7 is bigger, even though 0.65 has more decimal digits.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 0.5 + 0.4.', answer: '0.9', checkMode: 'auto', correctAnswer: '0.9', explanation: 'Line up decimal points. Tenths: 5 + 4 = 9. No carrying needed. Answer: 0.9 ✓' },
        { difficulty: 'Medium', question: 'A baker uses 3.46 kg of flour for one batch of bread and 2.78 kg for a second batch. What is the total mass of flour used?', answer: '6.24 kg', checkMode: 'auto', correctAnswer: '6.24', correctAnswers: ['6.24', '6.24 kg'], explanation: 'Hundredths: 6 + 8 = 14. Write 4, carry 1. Tenths: 4 + 7 + 1 = 12. Write 2, carry 1. Units: 3 + 2 + 1 = 6. Answer: 6.24 kg ✓' },
        { difficulty: 'Medium', question: 'Find the difference between 5.3 and 1.68.', answer: '3.62', checkMode: 'auto', correctAnswer: '3.62', explanation: 'Rewrite 5.3 as 5.30. Hundredths: 0 − 8 — borrow from tenths. Tenths becomes 2, hundredths becomes 10. 10 − 8 = 2. Tenths: 2 − 6 — still too small, borrow from units. Units becomes 4, tenths becomes 12. 12 − 6 = 6. Units: 4 − 1 = 3. Answer: 3.62 ✓' },
        { difficulty: 'Medium', question: 'A jug contains 8.05 litres of water. If 3.6 litres are poured out, how much water is left?', answer: '4.45 L', checkMode: 'auto', correctAnswer: '4.45', correctAnswers: ['4.45', '4.45 L'], explanation: 'Rewrite 3.6 as 3.60. Hundredths: 5 − 0 = 5. Tenths: 0 − 6 — borrow from units. Units becomes 7, tenths becomes 10. 10 − 6 = 4. Units: 7 − 3 = 4. Answer: 4.45 L ✓' },
        { difficulty: 'Medium', question: 'Zinhle buys bread for R18.65 and milk for R14.90. How much does she spend in total?', answer: 'R33.55', checkMode: 'auto', correctAnswer: 'R33.55', correctAnswers: ['R33.55', '33.55'], explanation: 'Hundredths: 5 + 0 = 5. Tenths: 6 + 9 = 15. Write 5, carry 1. Units: 8 + 4 + 1 = 13. Write 3, carry 1. Tens: 1 + 1 + 1 = 3. Total: R33.55 ✓' },
        { difficulty: 'Medium', question: 'A piece of rope is 4.35 m long. A second piece is 2.8 m long. What is the combined length of both pieces of rope?', answer: '7.15 m', checkMode: 'auto', correctAnswer: '7.15', correctAnswers: ['7.15', '7.15 m'], explanation: 'Rewrite 2.8 as 2.80. Hundredths: 5 + 0 = 5. Tenths: 3 + 8 = 11. Write 1, carry 1. Units: 4 + 2 + 1 = 7. Answer: 7.15 m ✓' },
        { difficulty: 'Medium-Hard', question: 'Priya scored 23/25 on a spelling test. Write her score as a decimal fraction.', answer: '0.92', checkMode: 'auto', correctAnswer: '0.92', correctAnswers: ['0.92', '0.920'], explanation: 'Convert 23/25 to a fraction with denominator 100 by multiplying numerator and denominator by 4: 23/25 = 92/100 = 0.92 ✓' },
        { difficulty: 'Hard', question: 'Three friends have these amounts of savings: Neo has R24.60, Aisha has R24.06, and Kabelo has R24.65.\n\na) Order the three amounts from least to greatest.\nb) Find the difference between the greatest and least amount.\nc) Write the difference as a fraction of R1, then simplify it.', answer: 'a) R24.06, R24.60, R24.65\nb) R24.65 − R24.06 = R0.59\nc) 59/100 (already in simplest form since 59 is prime)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student is subtracting 6.02 − 3.47 and writes: "0 − 7 in the hundredths column, so I just write 7 and move on." Explain what is wrong with this reasoning and give the correct answer.', answer: 'The student cannot simply subtract a bigger digit from a smaller one and write the difference — they must borrow. Since 2 (hundredths) − 7 is not possible, borrow 1 from the tenths column: tenths becomes -1 which is also not enough, so borrow from units too. Working it through correctly: 6.02 − 3.47 = 2.55.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered decimal place value, comparing, adding, subtracting and converting decimals. Well done!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of decimal fractions. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on place value and column addition/subtraction, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, paying close attention to placeholder zeros and borrowing, then retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'What is the value of the digit 3 in the decimal fraction 7.53?', answer: '3 hundredths', checkMode: 'auto', correctAnswer: '3 hundredths', correctAnswers: ['3 hundredths', '3/100', '0.03'], explanation: 'In 7.53, the digit 3 is the second digit after the decimal point, so it is in the hundredths position. Value = 3 hundredths = 3/100 = 0.03 ✓' },
        { difficulty: 'Easy', question: 'Write each common fraction as a decimal fraction.', answer: 'a) 0.7\nb) 0.84', checkMode: 'auto', parts: [
          { label: 'a) 7/10', correctAnswer: '0.7', correctAnswers: ['0.7', '0.70'], explanation: '7/10 means 7 tenths. Tenths need 1 decimal place. Write 0 in the units place and 7 in the tenths place: 0.7 ✓' },
          { label: 'b) 84/100', correctAnswer: '0.84', explanation: '84/100 means 84 hundredths. Hundredths need 2 decimal places: 8 tenths and 4 hundredths → 0.84 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Write the mixed number 3 9/100 as a decimal fraction.', answer: '3.09', checkMode: 'auto', correctAnswer: '3.09', explanation: 'The whole number part is 3. 9 hundredths needs 2 decimal places, but there are no tenths — write 0 as a placeholder: 3.09 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write "four and one hundredth" as a decimal fraction.', answer: '4.01', checkMode: 'auto', correctAnswer: '4.01', explanation: 'The whole number part is 4. "One hundredth" needs 2 decimal places, but there are no tenths, so a 0 placeholder is needed in the tenths spot: 4.01 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write 0.4 as a common fraction in simplest form.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: '0.4 means 4 tenths = 4/10. Simplify by dividing numerator and denominator by 2: 4/10 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'A recipe calls for "one and six hundredths litres" of oil. Write this amount as a decimal fraction, then say why a placeholder zero is needed.', answer: '1.06 L — a zero placeholder is needed in the tenths position because there are no tenths, only hundredths', checkMode: 'auto', correctAnswer: '1.06', correctAnswers: ['1.06', '1.06 L'], explanation: 'Whole number part = 1. "Six hundredths" needs 2 decimal places. Since there are no tenths, we must write 0 in the tenths position so the 6 lands correctly in the hundredths column: 1.06 ✓' },
        { difficulty: 'Medium', question: 'A student writes 2 3/100 as 2.3. Is this correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'No — 2.3 means 2 and 3 tenths, not 2 and 3 hundredths. 3/100 needs 2 decimal places with a placeholder zero in the tenths spot: the correct decimal is 2.03.' },
        { difficulty: 'Easy', question: 'Which is smaller: 0.45 or 0.5?', answer: '0.45', checkMode: 'auto', correctAnswer: '0.45', explanation: 'Write with 2 decimal places: 0.45 and 0.50. Compare units: both 0. Compare tenths: 4 vs 5. Since 4 < 5, 0.45 < 0.5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write > , < or = for: 6.80 __ 6.8', answer: '=', checkMode: 'auto', correctAnswer: '=', explanation: 'A trailing zero does not change the value. 6.80 and 6.8 both mean 6 units and 8 tenths, so they are equal: 6.80 = 6.8 ✓' },
        { difficulty: 'Medium', question: 'Order from largest to smallest: 0.3, 0.03, 0.33, 0.3', answer: '0.33, 0.3, 0.3, 0.03', checkMode: 'auto', correctAnswer: '0.33, 0.3, 0.3, 0.03', correctAnswers: ['0.33, 0.3, 0.3, 0.03', '0.33, 0.30, 0.30, 0.03'], explanation: 'Write with 2 decimal places: 0.30, 0.03, 0.33, 0.30. Compare tenths: 0.03 has 0 tenths (smallest); the rest have 3 tenths. Among the 3-tenths group, compare hundredths: 0.33 has 3 hundredths (largest); the two 0.30s are equal. Order from largest to smallest: 0.33, 0.3, 0.3, 0.03 ✓' },
        { difficulty: 'Medium', question: 'A learner says 0.8 < 0.75 because "0.75 has more digits so it must be a bigger, more precise number." Is this correct? Explain your answer.', answer: 'No, 0.8 > 0.75. Number of decimal digits has nothing to do with size. Comparing place by place: tenths digit of 0.8 is 8, tenths digit of 0.75 is 7. Since 8 > 7, 0.8 is the bigger number.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 0.6 + 0.7.', answer: '1.3', checkMode: 'auto', correctAnswer: '1.3', explanation: 'Line up decimal points. Tenths: 6 + 7 = 13. Write 3, carry 1 to the units column. Units: 0 + 0 + 1 = 1. Answer: 1.3 ✓' },
        { difficulty: 'Medium', question: 'A farmer harvests 4.57 kg of tomatoes in the morning and 3.68 kg in the afternoon. What is the total mass harvested?', answer: '8.25 kg', checkMode: 'auto', correctAnswer: '8.25', correctAnswers: ['8.25', '8.25 kg'], explanation: 'Hundredths: 7 + 8 = 15. Write 5, carry 1. Tenths: 5 + 6 + 1 = 12. Write 2, carry 1. Units: 4 + 3 + 1 = 8. Answer: 8.25 kg ✓' },
        { difficulty: 'Medium', question: 'What is 7.2 take away 4.85?', answer: '2.35', checkMode: 'auto', correctAnswer: '2.35', explanation: 'Rewrite 7.2 as 7.20. Hundredths: 0 − 5 — borrow from tenths. Tenths becomes 1, hundredths becomes 10. 10 − 5 = 5. Tenths: 1 − 8 — still too small, borrow from units. Units becomes 6, tenths becomes 11. 11 − 8 = 3. Units: 6 − 4 = 2. Answer: 2.35 ✓' },
        { difficulty: 'Medium', question: 'A roll of ribbon is 9.03 m long. If 5.4 m is cut off, how much ribbon remains?', answer: '3.63 m', checkMode: 'auto', correctAnswer: '3.63', correctAnswers: ['3.63', '3.63 m'], explanation: 'Rewrite 5.4 as 5.40. Hundredths: 3 − 0 = 3. Tenths: 0 − 4 — borrow from units. Units becomes 8, tenths becomes 10. 10 − 4 = 6. Units: 8 − 5 = 3. Answer: 3.63 m ✓' },
        { difficulty: 'Medium', question: 'Tumi buys a notebook for R22.75 and a pen for R9.50. How much does he spend in total?', answer: 'R32.25', checkMode: 'auto', correctAnswer: 'R32.25', correctAnswers: ['R32.25', '32.25'], explanation: 'Hundredths: 5 + 0 = 5. Tenths: 7 + 5 = 12. Write 2, carry 1. Units: 2 + 9 + 1 = 12. Write 2, carry 1. Tens: 2 + 0 + 1 = 3. Total: R32.25 ✓' },
        { difficulty: 'Medium', question: 'A jug holds 3.6 litres of juice. Zoe pours out 1.85 litres into cups. How much juice is left in the jug?', answer: '1.75 L', checkMode: 'auto', correctAnswer: '1.75', correctAnswers: ['1.75', '1.75 L'], explanation: 'Rewrite 3.6 as 3.60. Hundredths: 0 − 5 — borrow from tenths. Tenths becomes 5, hundredths becomes 10. 10 − 5 = 5. Tenths: 5 − 8 — still too small, borrow from units. Units becomes 2, tenths becomes 15. 15 − 8 = 7. Units: 2 − 1 = 1. Answer: 1.75 L ✓' },
        { difficulty: 'Medium-Hard', question: 'Karabo scored 9/20 on a quiz. Write her score as a decimal fraction.', answer: '0.45', checkMode: 'auto', correctAnswer: '0.45', correctAnswers: ['0.45', '0.450'], explanation: 'Convert 9/20 to a fraction with denominator 100 by multiplying numerator and denominator by 5: 9/20 = 45/100 = 0.45 ✓' },
        { difficulty: 'Hard', question: 'Three runners recorded these distances in a training session: Bongi ran 5.42 km, Ruan ran 5.4 km, and Dineo ran 5.24 km.\n\na) Order the three distances from least to greatest.\nb) Find the difference between the greatest and least distance.\nc) Write the difference as a fraction of 1 km, then simplify it.', answer: 'a) 5.24 km, 5.4 km, 5.42 km\nb) 5.42 − 5.24 = 0.18 km\nc) 18/100 = 9/50 (simplified by dividing by 2)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student is adding 3.7 + 2.68 and writes: "7 + 68 = 75, so the answer is 3.75." Explain what is wrong with this reasoning and give the correct answer.', answer: 'The student added the tenths and hundredths digits together as if they were whole numbers instead of lining up decimal places correctly. 3.7 must be rewritten as 3.70 first. Then: hundredths 0 + 8 = 8, tenths 7 + 6 = 13 (write 3, carry 1), units 3 + 2 + 1 = 6. The correct answer is 3.7 + 2.68 = 6.38.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with decimal place value, comparing, adding, subtracting and converting decimals.' },
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
        { difficulty: 'Easy', question: 'A cricket scoreboard shows the number 9.14. What is the value of the digit 1?', answer: '1 tenth', checkMode: 'auto', correctAnswer: '1 tenth', correctAnswers: ['1 tenth', '1/10', '0.1'], explanation: 'In 9.14, the digit 1 is the first digit after the decimal point, so it is in the tenths position. Value = 1 tenth = 1/10 = 0.1 ✓' },
        { difficulty: 'Easy', question: 'Write each common fraction as a decimal fraction.', answer: 'a) 0.1\nb) 0.63', checkMode: 'auto', parts: [
          { label: 'a) 1/10', correctAnswer: '0.1', correctAnswers: ['0.1', '0.10'], explanation: '1/10 means 1 tenth. Tenths need 1 decimal place. Write 0 in the units place and 1 in the tenths place: 0.1 ✓' },
          { label: 'b) 63/100', correctAnswer: '0.63', explanation: '63/100 means 63 hundredths. Hundredths need 2 decimal places: 6 tenths and 3 hundredths → 0.63 ✓' },
        ] },
        { difficulty: 'Easy', question: 'A jar has a mass label reading "seven and two hundredths kilograms". Write this as a decimal fraction.', answer: '7.02 kg', checkMode: 'auto', correctAnswer: '7.02', correctAnswers: ['7.02', '7.02 kg'], explanation: 'The whole number part is 7. "Two hundredths" needs 2 decimal places, but there are no tenths — write 0 as a placeholder: 7.02 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write "eight and three hundredths" as a decimal fraction.', answer: '8.03', checkMode: 'auto', correctAnswer: '8.03', explanation: 'The whole number part is 8. "Three hundredths" needs 2 decimal places, but there are no tenths, so a 0 placeholder is needed in the tenths spot: 8.03 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write 0.25 as a common fraction in simplest form.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: '0.25 means 25 hundredths = 25/100. Simplify by dividing numerator and denominator by 25: 25/100 = 1/4 ✓' },
        { difficulty: 'Medium', question: 'A stopwatch reads "twelve and four hundredths seconds". Write this as a decimal fraction, then say why a placeholder zero is needed.', answer: '12.04 s — a zero placeholder is needed in the tenths position because there are no tenths, only hundredths', checkMode: 'auto', correctAnswer: '12.04', correctAnswers: ['12.04', '12.04 s'], explanation: 'Whole number part = 12. "Four hundredths" needs 2 decimal places. Since there are no tenths, we must write 0 in the tenths position so the 4 lands correctly in the hundredths column: 12.04 ✓' },
        { difficulty: 'Medium', question: 'A student writes 5 7/100 as 5.7. Is this correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'No — 5.7 means 5 and 7 tenths, not 5 and 7 hundredths. 7/100 needs 2 decimal places with a placeholder zero in the tenths spot: the correct decimal is 5.07.' },
        { difficulty: 'Easy', question: 'A shopkeeper compares two prices: R0.75 and R0.7. Which is more expensive?', answer: 'R0.75', checkMode: 'auto', correctAnswer: 'R0.75', correctAnswers: ['R0.75', '0.75'], explanation: 'Write with 2 decimal places: 0.75 and 0.70. Compare units: both 0. Compare tenths: 7 vs 7, equal. Compare hundredths: 5 vs 0. Since 5 > 0, R0.75 > R0.70 ✓' },
        { difficulty: 'Easy-Medium', question: 'Write > , < or = for: 0.09 __ 0.9', answer: '<', checkMode: 'auto', correctAnswer: '<', explanation: 'Write with 2 decimal places: 0.09 and 0.90. Compare tenths: 0 vs 9. Since 0 < 9, 0.09 < 0.9 ✓' },
        { difficulty: 'Medium', question: 'Four athletes\' jump distances are recorded as: 2.15 m, 2.5 m, 2.05 m, 2.51 m. Order these distances from smallest to largest.', answer: '2.05 m, 2.15 m, 2.5 m, 2.51 m', checkMode: 'auto', correctAnswer: '2.05, 2.15, 2.5, 2.51', correctAnswers: ['2.05, 2.15, 2.5, 2.51', '2.05, 2.15, 2.50, 2.51'], explanation: 'Write with 2 decimal places: 2.15, 2.50, 2.05, 2.51. Compare tenths: 2.05 has 0 tenths (smallest); 2.15 has 1 tenth; 2.50 and 2.51 have 5 tenths. Compare the last two by hundredths: 2.50 < 2.51. Order: 2.05, 2.15, 2.5, 2.51 ✓' },
        { difficulty: 'Medium', question: 'A learner claims that 4.08 is bigger than 4.3 because "8 is bigger than 3." Is this correct? Explain your answer using place value.', answer: 'No, 4.3 > 4.08. The digit 8 in 4.08 is in the hundredths place, while the digit 3 in 4.3 is in the tenths place — a completely different, larger column. Comparing tenths first: 4.3 has 3 tenths, 4.08 has 0 tenths. Since 3 > 0, 4.3 is bigger.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Calculate 0.8 + 0.5.', answer: '1.3', checkMode: 'auto', correctAnswer: '1.3', explanation: 'Line up decimal points. Tenths: 8 + 5 = 13. Write 3, carry 1 to the units column. Units: 0 + 0 + 1 = 1. Answer: 1.3 ✓' },
        { difficulty: 'Medium', question: 'A cyclist rides 6.39 km before breakfast and 2.84 km after breakfast. What total distance did she ride?', answer: '9.23 km', checkMode: 'auto', correctAnswer: '9.23', correctAnswers: ['9.23', '9.23 km'], explanation: 'Hundredths: 9 + 4 = 13. Write 3, carry 1. Tenths: 3 + 8 + 1 = 12. Write 2, carry 1. Units: 6 + 2 + 1 = 9. Answer: 9.23 km ✓' },
        { difficulty: 'Medium', question: 'Subtract 4.35 from 10.', answer: '5.65', checkMode: 'auto', correctAnswer: '5.65', explanation: 'Rewrite 10 as 10.00. Hundredths: 0 − 5 — borrow from tenths. Tenths becomes -1, so borrow from units too, cascading: units becomes 9, tenths becomes 9, hundredths becomes 10. 10 − 5 = 5. Tenths: 9 − 3 = 6. Units: 9 − 4 = 5. Answer: 5.65 ✓' },
        { difficulty: 'Medium', question: 'A water tank holds 7.04 kL. If 2.6 kL is used, how much water is left in the tank?', answer: '4.44 kL', checkMode: 'auto', correctAnswer: '4.44', correctAnswers: ['4.44', '4.44 kL'], explanation: 'Rewrite 2.6 as 2.60. Hundredths: 4 − 0 = 4. Tenths: 0 − 6 — borrow from units. Units becomes 6, tenths becomes 10. 10 − 6 = 4. Units: 6 − 2 = 4. Answer: 4.44 kL ✓' },
        { difficulty: 'Medium', question: 'A school tuck shop sells a sandwich for R16.80 and a juice for R8.45. What is the total cost of both items?', answer: 'R25.25', checkMode: 'auto', correctAnswer: 'R25.25', correctAnswers: ['R25.25', '25.25'], explanation: 'Hundredths: 0 + 5 = 5. Tenths: 8 + 4 = 12. Write 2, carry 1. Units: 6 + 8 + 1 = 15. Write 5, carry 1. Tens: 1 + 0 + 1 = 2. Total: R25.25 ✓' },
        { difficulty: 'Medium', question: 'Two hiking trails measure 3.75 km and 2.9 km. What is the combined distance of both trails?', answer: '6.65 km', checkMode: 'auto', correctAnswer: '6.65', correctAnswers: ['6.65', '6.65 km'], explanation: 'Rewrite 2.9 as 2.90. Hundredths: 5 + 0 = 5. Tenths: 7 + 9 = 16. Write 6, carry 1. Units: 3 + 2 + 1 = 6. Answer: 6.65 km ✓' },
        { difficulty: 'Medium-Hard', question: 'Lindiwe scored 7/8 in a practical test. Write her score as a decimal fraction.', answer: '0.875', checkMode: 'auto', correctAnswer: '0.875', explanation: '7/8 needs to be converted using division since 8 is not a direct factor of 10 or 100: 7 ÷ 8 = 0.875 ✓' },
        { difficulty: 'Hard', question: 'A shop tracks three days of takings: Monday R156.40, Tuesday R156.04, Wednesday R156.45.\n\na) Order the three amounts from least to greatest.\nb) Find the difference between the greatest and least amount.\nc) The shop\'s target for Wednesday was R200. Write the shortfall (target minus Wednesday\'s takings) as a decimal amount in rand.', answer: 'a) R156.04, R156.40, R156.45\nb) R156.45 − R156.04 = R0.41\nc) R200.00 − R156.45 = R43.55', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student is subtracting 5.2 − 1.65 and writes: "0.2 minus 0.65 is impossible, so the answer must be negative — 5.2 − 1.65 cannot be worked out with borrowing." Explain what is wrong with this reasoning and give the correct answer.', answer: 'The student is wrong — decimal subtraction with borrowing works exactly like whole number subtraction; it does not become impossible or negative just because a column looks too small on its own. Rewrite 5.2 as 5.20. Hundredths: 0 − 5, borrow from tenths (tenths becomes 1, hundredths becomes 10): 10 − 5 = 5. Tenths: 1 − 6, borrow from units (units becomes 4, tenths becomes 11): 11 − 6 = 5. Units: 4 − 1 = 3. The correct answer is 5.2 − 1.65 = 3.55.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply decimal place value, comparing, adding, subtracting and converting to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
