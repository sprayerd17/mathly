import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (statistics roles) ───────────────────────────────────────
// blue   (#2563eb) → intervals / calculator buttons / midpoints / quartile positions
// orange (#ea580c) → midpoints / menu options / frequency height / interquartile range
// green  (#16a34a) → frequencies / displayed result / polygon lines / range
// red    (#dc2626) → outlier
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistics',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MEASURES OF CENTRAL TENDENCY FOR GROUPED DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measures-central-tendency-grouped',
      title: 'Measures of Central Tendency for Grouped Data',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">For <strong>grouped data</strong> (data organised into intervals), we cannot find the exact mean since we don't know individual values — instead we calculate an <strong>approximate mean</strong> using the midpoint of each interval multiplied by its frequency. We also identify the <strong>modal interval</strong> (the interval with the highest frequency) and the <strong>interval in which the median lies</strong> (found by locating the middle position among the cumulative frequencies).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('intervals')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('midpoints')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('frequencies')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Modal Interval</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('interval')} with the highest ${gr('frequency')} — it is the mode class for grouped data.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Midpoint</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('midpoint')} of an ${bl('interval')} is found by averaging the lower and upper bounds: (lower + upper) ÷ 2.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Approximate Mean</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Calculated as: Σ(${or('midpoint')} × ${gr('frequency')}) ÷ Σ${gr('frequency')}. It is approximate because individual data values are unknown.</p>` +
        `</div>` +

        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Approximate mean formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">Approximate mean = Σ(${or('midpoint')} × ${gr('frequency')}) ÷ Σ${gr('frequency')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why midpoints?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because we do not know the individual values inside each ${bl('interval')}, we assume they are all equal to the ${or('midpoint')} of that ${bl('interval')}. This gives the best single estimate for each group.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A data set has intervals 0≤x<10 (frequency 4), 10≤x<20 (frequency 8), 20≤x<30 (frequency 6). Find the modal interval.',
          answer: `The ${bl('10≤x<20')} interval is the modal interval`,
          steps: [
            `List each ${bl('interval')} with its ${gr('frequency')}: ${bl('0≤x<10')} → ${gr('4')}, ${bl('10≤x<20')} → ${gr('8')}, ${bl('20≤x<30')} → ${gr('6')}.`,
            `The ${bl('interval')} ${bl('10≤x<20')} has the highest ${gr('frequency')} (${gr('8')}), so it is the <strong>modal interval</strong>.`,
          ],
        },
        {
          question: 'Using the same data (0≤x<10 freq 4, 10≤x<20 freq 8, 20≤x<30 freq 6), find the approximate mean.',
          answer: `Approximate mean ≈ ${or('16.11')}`,
          steps: [
            `Find the ${or('midpoint')} of each ${bl('interval')}: ${bl('0≤x<10')} → ${or('5')}, ${bl('10≤x<20')} → ${or('15')}, ${bl('20≤x<30')} → ${or('25')}.`,
            `Calculate ${or('midpoint')} × ${gr('frequency')} for each ${bl('interval')}: (${or('5')} × ${gr('4')}) + (${or('15')} × ${gr('8')}) + (${or('25')} × ${gr('6')}) = 20 + 120 + 150 = <strong>290</strong>.`,
            `Find the total ${gr('frequency')}: ${gr('4')} + ${gr('8')} + ${gr('6')} = ${gr('18')}.`,
            `<strong>Approximate mean</strong> = 290 ÷ ${gr('18')} ≈ ${or('16.11')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the modal interval and approximate mean from a grouped frequency table using midpoints and frequencies" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATOR SKILLS FOR STATISTICS (CASIO fx-82 SERIES)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculator-skills-statistics',
      title: 'Calculator Skills for Statistics (Casio fx-82 Series)',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Most Casio fx-82 series calculators (the standard model used in South African schools) can calculate the mean and other statistics automatically once data is entered correctly, saving significant calculation time and reducing errors on grouped data problems.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('calculator buttons')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('menu options')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('displayed result')}</span>` +
        `</div>` +

        // ── Overview ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General workflow</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Enter STAT mode')}</strong> — Press ${bl('[MENU]')} or ${bl('[MODE]')} and select ${or('STAT')} (usually option 2).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Select 1-VAR')}</strong> — Choose ${or('1-VAR')} for single-variable data. A table with columns <strong>x</strong> and <strong>FREQ</strong> appears.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Enter data')}</strong> — Type each midpoint into the <strong>x</strong> column and its frequency into the <strong>FREQ</strong> column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Read results')}</strong> — Press ${bl('[AC]')} then ${bl('[SHIFT][1]')} (STAT), select ${or('Var')}, and choose ${gr('x̄')} for the mean.</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ──────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always clear previous data</p>` +
        `<p style="margin:0;color:#991b1b;">Before starting a new calculation, clear the previous statistical data — usually via ${bl('[SHIFT][CLR]')} or through the ${or('STAT menu → Edit → Delete All')}. Exact button labels and menu steps can vary slightly between Casio fx-82 model variants (MS, ES PLUS, ZA PLUS).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Access Statistics Mode on a Casio fx-82ZA PLUS (or similar ES PLUS series).',
          answer: `The ${or('STAT')} data-entry table appears with columns <strong>x</strong> and <strong>FREQ</strong>`,
          steps: [
            `Press ${bl('[MENU]')} or ${bl('[MODE]')}, then select ${or('STAT')} (often option 2 or found via SETUP).`,
            `Choose ${or('1-VAR')} for single-variable data (like ungrouped or grouped frequency data).`,
            `A data entry table appears with columns for <strong>x</strong> (value/midpoint) and <strong>FREQ</strong> (frequency).`,
          ],
        },
        {
          question: 'Enter the grouped data from Section 1 (midpoints 5, 15, 25 with frequencies 4, 8, 6) and find the mean.',
          answer: `The calculator displays ${gr('≈ 16.11')}, confirming the manual calculation`,
          steps: [
            `Enter x-values as midpoints in the <strong>x</strong> column: 5, 15, 25.`,
            `Enter corresponding frequencies in the <strong>FREQ</strong> column: ${gr('4')}, ${gr('8')}, ${gr('6')}.`,
            `Press ${bl('[AC]')} then ${bl('[SHIFT][1]')} (STAT) to access statistical results, then select ${or('Var')} (variables) and choose ${gr('x̄')} (x-bar) for the mean.`,
            `The calculator displays ${gr('≈ 16.11')}, confirming the manual calculation ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Screen-by-screen diagram of a calculator showing the MODE menu with STAT selected, a 1-VAR data entry table with x and FREQ columns filled in, and the final STAT results screen displaying x-bar',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="6" width="190" height="28" rx="4" fill="#0f1f3d"/><text x="110" y="17" font-size="8.5" fill="#93c5fd" text-anchor="middle" font-weight="700">MODE</text><text x="46" y="29" font-size="8.5" fill="#e5e7eb" text-anchor="middle">1:COMP</text><text x="110" y="29" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">2:STAT</text><text x="172" y="29" font-size="8.5" fill="#e5e7eb" text-anchor="middle">3:TABLE</text><line x1="110" y1="34" x2="110" y2="46" stroke="#374151" stroke-width="1.5"/><polygon points="110,50 105,42 115,42" fill="#374151"/><rect x="15" y="52" width="190" height="52" rx="4" fill="#0f1f3d"/><text x="110" y="63" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">1-VAR:  x    FREQ</text><text x="70" y="77" font-size="8.5" fill="#ffffff" text-anchor="middle">5</text><text x="150" y="77" font-size="8.5" fill="#ffffff" text-anchor="middle">4</text><text x="70" y="89" font-size="8.5" fill="#ffffff" text-anchor="middle">15</text><text x="150" y="89" font-size="8.5" fill="#ffffff" text-anchor="middle">8</text><text x="70" y="101" font-size="8.5" fill="#ffffff" text-anchor="middle">25</text><text x="150" y="101" font-size="8.5" fill="#ffffff" text-anchor="middle">6</text><line x1="110" y1="112" x2="110" y2="124" stroke="#374151" stroke-width="1.5"/><polygon points="110,128 105,120 115,120" fill="#374151"/><rect x="15" y="130" width="190" height="30" rx="4" fill="#0f1f3d"/><text x="110" y="142" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">STAT → Var</text><text x="110" y="155" font-size="13" fill="#4ade80" text-anchor="middle" font-weight="700">x̄ = 16.11</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to enter grouped frequency data into a Casio fx-82 series calculator in STAT 1-VAR mode and read off the mean" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — IDENTIFICATION OF OUTLIERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identification-outliers',
      title: 'Identification of Outliers',
      icon: '⚠',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>outlier</strong> is a data value that is significantly higher or lower than most other values in the data set, standing apart from the general pattern. Outliers can indicate errors in data collection, or genuinely unusual but valid results, and they can significantly affect the mean if not handled carefully.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('typical data values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('outlier')}</span>` +
        `</div>` +

        // ── What to look for ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to identify an outlier</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Visual inspection</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Order the data and look for a value that sits far away from the ${bl('cluster of typical values')} — a large gap on either side signals a potential ${re('outlier')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Effect on the mean</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A single ${re('outlier')} can pull the mean significantly higher or lower, making it a poor representation of the ${bl('typical values')} in the data set.</p>` +
        `</div>` +

        `</div>` +

        // ── Two causes ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two possible causes of an outlier</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Data error')}</strong> — a mistake in recording, measuring, or capturing the data. These should be corrected or removed before analysis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Genuine extreme value')}</strong> — a real result that is simply much higher or lower than the rest. These should be retained with a note about their unusual nature.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Context matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always consider the context before deciding whether to exclude an ${re('outlier')}. Ask whether the value is plausible given the situation, and whether there is evidence of a recording error before removing it from your calculations.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Identify any outlier in this data set: 22, 25, 24, 23, 99, 21.',
          answer: `${re('99')} is a clear outlier`,
          steps: [
            `Order the data: ${bl('21')}, ${bl('22')}, ${bl('23')}, ${bl('24')}, ${bl('25')}, ${re('99')}.`,
            `Most values cluster between ${bl('21–25')}, but ${re('99')} is far higher than the rest — there is a large gap between 25 and 99.`,
            `<strong>Conclusion:</strong> ${re('99')} is a clear outlier, standing apart from the general pattern of the data.`,
          ],
        },
        {
          question: 'Sipho has exam scores: 65, 70, 68, 72, 15, 69. Should the 15 be considered an outlier or a genuine low score?',
          answer: `${re('15')} is flagged as a potential outlier requiring further investigation`,
          steps: [
            `Order the data: ${re('15')}, ${bl('65')}, ${bl('68')}, ${bl('69')}, ${bl('70')}, ${bl('72')}.`,
            `Most values cluster between ${bl('65–72')}, but ${re('15')} is far lower — a gap of 50 marks separates it from the next lowest value.`,
            `This requires investigation — it could be a data entry error (perhaps meant to be 75 or similar), or it could represent a learner who genuinely struggled or was absent for part of the assessment.`,
            `<strong>Conclusion:</strong> Without more context, ${re('15')} is flagged as a potential outlier requiring further investigation before deciding whether to include it in calculations.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Number line showing data values 21 to 25 clustered together in blue and 99 isolated far to the right in red, with an axis break illustrating a clear outlier',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="100" x2="115" y2="100" stroke="#374151" stroke-width="1.8"/><line x1="131" y1="100" x2="200" y2="100" stroke="#374151" stroke-width="1.8"/><polygon points="200,100 192,96 192,104" fill="#374151"/><line x1="118" y1="94" x2="124" y2="106" stroke="#374151" stroke-width="1.5"/><line x1="123" y1="94" x2="129" y2="106" stroke="#374151" stroke-width="1.5"/><circle cx="30" cy="86" r="4.5" fill="#2563eb"/><circle cx="51" cy="86" r="4.5" fill="#2563eb"/><circle cx="72" cy="86" r="4.5" fill="#2563eb"/><circle cx="93" cy="86" r="4.5" fill="#2563eb"/><circle cx="114" cy="86" r="4.5" fill="#2563eb"/><text x="30" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">21</text><text x="51" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="72" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="93" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="114" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><circle cx="180" cy="86" r="5.5" fill="#dc2626" stroke="#0f1f3d" stroke-width="1.5"/><text x="180" y="114" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">99</text><path d="M114,72 C140,55 160,55 178,74" fill="none" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,2"/><text x="150" y="52" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">large gap → outlier</text><text x="70" y="140" font-size="9" fill="#374151" text-anchor="middle">clustered typical values</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what an outlier is, how to spot one visually on a number line, and how to decide whether it is a data error or a genuine extreme value" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — HISTOGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'histograms',
      title: 'Histograms',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>histogram</strong> is a bar graph used to display <strong>grouped continuous data</strong> with equal class intervals. Unlike an ordinary bar graph, the bars of a histogram are drawn <strong>with no gaps between them</strong>, because the data is continuous — each interval flows directly into the next along the number line. The height of each bar shows the <strong>frequency</strong> of that class interval, and the interval with the tallest bar is called the <strong>modal class</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('class intervals')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bar height / frequency')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('modal class')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Class Interval</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Each ${bl('bar')} represents one ${bl('class interval')} of continuous data (for example 10≤x<20). The width of every bar is the same when intervals are equal.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Bar Height = Frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('height')} of each bar shows how many data values fall inside that ${bl('interval')} — read it straight off the y-axis.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Modal Class</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('class interval')} with the ${or('tallest bar')} (highest ${gr('frequency')}) — this is the modal class of the histogram.</p>` +
        `</div>` +

        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a histogram</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Draw the axes')}</strong> — Label the x-axis with the ${bl('class intervals')} (in order, with equal width) and the y-axis with ${gr('frequency')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Draw each bar')}</strong> — For every ${bl('interval')}, draw a bar whose ${gr('height')} equals its ${gr('frequency')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Leave no gaps')}</strong> — Because the data is continuous, each bar must touch the next — there is no space between consecutive bars, unlike an ordinary bar graph for categorical data.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Histograms and frequency polygons</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${gr('frequency polygon')} (see the next section) is usually drawn by joining the ${bl('midpoints')} of the tops of the histogram's bars with straight lines. The two representations use the <strong>same data</strong> — the histogram shows it as solid ${bl('bars')}, the polygon shows it as connected points.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A histogram has bars for the intervals 0≤x<10 (frequency 4), 10≤x<20 (frequency 8), 20≤x<30 (frequency 6), 30≤x<40 (frequency 2). Describe how the histogram should be drawn and state the modal class.',
          answer: `Four touching bars of heights ${gr('4, 8, 6, 2')}; the modal class is ${or('10≤x<20')}`,
          steps: [
            `Draw the x-axis showing the ${bl('class intervals')} in order: ${bl('0≤x<10')}, ${bl('10≤x<20')}, ${bl('20≤x<30')}, ${bl('30≤x<40')}, each with equal width.`,
            `Draw the y-axis showing ${gr('frequency')}.`,
            `Draw four bars with heights ${gr('4')}, ${gr('8')}, ${gr('6')}, ${gr('2')} respectively, with <strong>no gaps</strong> between consecutive bars since the data is continuous.`,
            `The tallest bar is ${bl('10≤x<20')} with ${gr('frequency')} ${gr('8')}, so the <strong>modal class</strong> is ${or('10≤x<20')}.`,
          ],
        },
        {
          question: 'A histogram shows four bars with heights 5, 9, 11 and 3 for four equal intervals. How many data values does the histogram represent in total?',
          answer: `${gr('28')} data values`,
          steps: [
            `The total number of data values equals the sum of all bar heights (frequencies).`,
            `Total = ${gr('5')} + ${gr('9')} + ${gr('11')} + ${gr('3')} = ${gr('28')}.`,
          ],
        },
        {
          question: 'Explain why a histogram cannot have gaps between its bars, while a bar graph of favourite sports (soccer, netball, rugby) can.',
          answer: 'A histogram displays continuous data, where each interval joins seamlessly onto the next, so gaps would misrepresent the data as separate, unrelated categories.',
          steps: [
            `A histogram represents ${bl('continuous numerical data')} grouped into intervals — the end of one interval is exactly where the next interval begins (e.g. 10≤x<20 is immediately followed by 20≤x<30).`,
            `Because there is no true "gap" in the underlying number line between intervals, the bars must touch to correctly reflect this continuity.`,
            `A bar graph of favourite sports displays ${bl('discrete, unrelated categories')} (soccer, netball, rugby) that have no numerical order or continuity, so gaps between bars correctly show that the categories are separate.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Histogram with four touching bars for equal class intervals labelled on the x-axis, bar heights of 4, 8, 6, 2 as frequency, with the tallest bar highlighted in orange as the modal class, and no gaps between any of the bars',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="140" x2="200" y2="140" stroke="#374151" stroke-width="1.5"/><polygon points="200,140 192,136 192,144" fill="#374151"/><line x1="30" y1="140" x2="30" y2="20" stroke="#374151" stroke-width="1.5"/><polygon points="30,20 26,28 34,28" fill="#374151"/><text x="18" y="18" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">f</text><rect x="30" y="90" width="40" height="50" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><rect x="70" y="40" width="40" height="100" fill="#ea580c" fill-opacity="0.85" stroke="#0f1f3d" stroke-width="1.5"/><rect x="110" y="65" width="40" height="75" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><rect x="150" y="115" width="40" height="25" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><text x="30" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">0</text><text x="70" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="110" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="150" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><text x="190" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="90" y="32" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">modal class</text><text x="115" y="165" font-size="9" fill="#374151" text-anchor="middle">bars touch — continuous data</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a histogram from a grouped frequency table with equal class intervals, why the bars must touch with no gaps, and how to identify the modal class from the tallest bar" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — FREQUENCY POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'frequency-polygons',
      title: 'Frequency Polygons',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>frequency polygon</strong> is a line graph showing the frequency of data within each interval, created by plotting a point at the <strong>midpoint</strong> of each interval (at the height of its frequency) and connecting consecutive points with straight lines. A frequency polygon is often drawn directly from a histogram — by joining the midpoints of the tops of the histogram's bars — but it can also be drawn straight from a grouped frequency table. It is useful for comparing the shape and spread of grouped data, especially when comparing two data sets on the same axes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('midpoints')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frequency height')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('polygon lines')}</span>` +
        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a frequency polygon</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Find midpoints')}</strong> — Calculate the ${bl('midpoint')} of each interval. These become your x-coordinates.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Plot points')}</strong> — Plot each point at (${bl('midpoint')}, ${or('frequency')}). The ${or('frequency')} is the height of the point.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Connect points')}</strong> — Join consecutive points with straight ${gr('lines')} to form the polygon.</p>` +
        `</div>` +

        `</div>` +

        // ── Advantage ────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Advantage over a histogram</p>` +
        `<p style="margin:0;color:#1e3a8a;">Two frequency polygons can be drawn on the same axes in different colours, making it easy to compare two data sets directly. Histograms (see the previous section) overlap and become difficult to read when superimposed, since they are made of solid bars rather than thin lines.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how to construct a frequency polygon from the data: 0≤x<10 (freq 4), 10≤x<20 (freq 8), 20≤x<30 (freq 6).',
          answer: `Points at (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) connected by ${gr('straight lines')}`,
          steps: [
            `Find the ${bl('midpoint')} of each interval: ${bl('0≤x<10')} → ${bl('5')}, ${bl('10≤x<20')} → ${bl('15')}, ${bl('20≤x<30')} → ${bl('25')}.`,
            `Plot points at each (${bl('midpoint')}, ${or('frequency')}): (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}).`,
            `Connect these points with ${gr('straight lines')} to form the polygon — see the diagram below.`,
          ],
        },
        {
          question: 'Lerato wants to compare Term 1 and Term 2 test score distributions. How would a frequency polygon help?',
          answer: 'Two frequency polygons on the same axes allow direct visual comparison of both terms',
          steps: [
            `Construct a frequency polygon for Term 1 data by plotting points at each (${bl('midpoint')}, ${or('frequency')}) and connecting them with ${gr('lines')}.`,
            `On the <strong>same axes</strong>, construct a second frequency polygon for Term 2 data using a different colour.`,
            `Plotting both data sets as separate frequency polygons on the same axes allows direct visual comparison of which term had higher/lower performance and how the spread of scores differed.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Frequency polygon with x-axis labelled as interval midpoints 5, 15, 25 and points at frequency heights 4, 8, 6 connected by straight lines',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="140" x2="200" y2="140" stroke="#374151" stroke-width="1.5"/><polygon points="200,140 192,136 192,144" fill="#374151"/><line x1="30" y1="140" x2="30" y2="20" stroke="#374151" stroke-width="1.5"/><polygon points="30,20 26,28 34,28" fill="#374151"/><text x="18" y="18" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">f</text><path d="M50,90 L110,40 L170,65" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="50" cy="90" r="4.5" fill="#ea580c"/><circle cx="110" cy="40" r="4.5" fill="#ea580c"/><circle cx="170" cy="65" r="4.5" fill="#ea580c"/><text x="50" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="110" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="170" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="58" y="86" font-size="8.5" fill="#ea580c" font-weight="700">4</text><text x="118" y="36" font-size="8.5" fill="#ea580c" font-weight="700">8</text><text x="178" y="61" font-size="8.5" fill="#ea580c" font-weight="700">6</text><text x="115" y="165" font-size="9" fill="#374151" text-anchor="middle">midpoints plotted at frequency height, joined by straight lines</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a frequency polygon from a grouped frequency table by plotting midpoint-frequency pairs and joining them with straight lines" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — STEM-AND-LEAF DISPLAYS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'stem-and-leaf-displays',
      title: 'Stem-and-Leaf Displays',
      icon: '🌿',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>stem-and-leaf display</strong> (or stem-and-leaf plot) is a way of organising numerical data that keeps every original data value visible while also showing the overall shape of the distribution. Each data value is split into a <strong>stem</strong> (the leading digit or digits) and a <strong>leaf</strong> (the last digit). The stems are written once in an ordered column, and the leaves belonging to each stem are written alongside it, ordered from smallest to largest.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stem')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('leaf')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stem</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The leading digit(s) of a data value. For the value 47, the ${bl('stem')} is ${bl('4')} (representing the tens digit).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Leaf</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The last digit of a data value. For the value 47, the ${gr('leaf')} is ${gr('7')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Key/Legend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Every stem-and-leaf plot needs a key, e.g. "${bl('4')} | ${gr('7')} = 47", so readers know how to reconstruct the original values.</p>` +
        `</div>` +

        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a stem-and-leaf plot</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('List the stems')}</strong> — Write every possible ${bl('stem')} once, in ascending order, in a vertical column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Attach the leaves')}</strong> — For each data value, write its ${gr('leaf')} digit next to its matching ${bl('stem')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Order the leaves')}</strong> — Rewrite the ${gr('leaves')} for each ${bl('stem')} in ascending order, smallest to largest.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#64748b;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add a key</strong> — Include a key such as "${bl('4')} | ${gr('7')} = 47" so the plot can be read correctly.</p>` +
        `</div>` +

        `</div>` +

        // ── Reading measures ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reading the mode, range and median from a stem-and-leaf plot</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;color:#374151;">` +
        `<li><strong>Mode</strong> — the value (or values) that appear most often as a leaf against the same stem.</li>` +
        `<li><strong>Range</strong> — reconstruct the smallest value (first stem, first leaf) and the largest value (last stem, last leaf), then subtract.</li>` +
        `<li><strong>Median</strong> — since the leaves are already ordered, count inwards from both ends along the plot (row by row) to find the middle value (or average the two middle values).</li>` +
        `</ul>` +
        `</div>` +

        // ── Back-to-back explanation ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Back-to-back stem-and-leaf plots</p>` +
        `<p style="margin-bottom:16px;">A <strong>back-to-back stem-and-leaf plot</strong> compares two data sets using a single, shared column of ${bl('stems')} in the middle. The ${gr('leaves')} for one data set are written to the <strong>left</strong> of the stems (read from right to left, increasing towards the stem), and the ${gr('leaves')} for the other data set are written to the <strong>right</strong> (read left to right, increasing away from the stem). This makes it easy to compare the spread and shape of two data sets side by side.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Advantage over grouped data</p>` +
        `<p style="margin:0;color:#1e3a8a;">Unlike a histogram or frequency polygon, which group data into intervals, a stem-and-leaf plot keeps every original data value visible. This means you can read off an exact mode, median and range instead of only an approximate modal class or median interval.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Construct a stem-and-leaf plot for the data set: 23, 31, 27, 22, 35, 29, 31, 24.',
          answer: `Stems ${bl('2')} and ${bl('3')} with ordered ${gr('leaves')} — key: ${bl('2')} | ${gr('3')} = 23`,
          steps: [
            `Split each value into a ${bl('stem')} (tens digit) and ${gr('leaf')} (units digit): 23 → ${bl('2')}|${gr('3')}, 31 → ${bl('3')}|${gr('1')}, 27 → ${bl('2')}|${gr('7')}, 22 → ${bl('2')}|${gr('2')}, 35 → ${bl('3')}|${gr('5')}, 29 → ${bl('2')}|${gr('9')}, 31 → ${bl('3')}|${gr('1')}, 24 → ${bl('2')}|${gr('4')}.`,
            `List the stems in order: ${bl('2')}, ${bl('3')}.`,
            `Attach the leaves to each stem: ${bl('2')} | 3, 7, 2, 9, 4 and ${bl('3')} | 1, 5, 1.`,
            `Order the leaves for each stem: ${bl('2')} | ${gr('2, 3, 4, 7, 9')} and ${bl('3')} | ${gr('1, 1, 5')}.`,
            `Add a key: ${bl('2')} | ${gr('3')} = 23.`,
          ],
        },
        {
          question: 'Using the stem-and-leaf plot from Example 1 (2 | 2,3,4,7,9 and 3 | 1,1,5; key 2|3 = 23), find the mode, range and median.',
          answer: `Mode = ${gr('31')}, Range = ${gr('13')}, Median = ${gr('28')}`,
          steps: [
            `<strong>Mode:</strong> Reading the leaves, ${gr('1')} appears twice against stem ${bl('3')} (giving 31 twice) while every other value appears only once, so the <strong>mode is 31</strong>.`,
            `<strong>Range:</strong> The smallest value is ${bl('2')} | ${gr('2')} = 22, and the largest value is ${bl('3')} | ${gr('5')} = 35. Range = 35 − 22 = ${gr('13')}.`,
            `<strong>Median:</strong> There are 8 values in total. Written in order using the plot: 22, 23, 24, 27, 29, 31, 31, 35. With an even count, the median is the average of the 4th and 5th values: (27 + 29) ÷ 2 = <strong>28</strong>.`,
          ],
        },
        {
          question: "Two classes wrote the same test. Class A: 12, 15, 18, 21, 23, 27. Class B: 14, 16, 19, 20, 22, 22, 28. Construct a back-to-back stem-and-leaf plot comparing them, using a shared stem column of tens digits.",
          answer: 'A back-to-back plot with Class A leaves on the left and Class B leaves on the right of shared stems 1 and 2',
          steps: [
            `Split each Class A value into stem and leaf: 12 → ${bl('1')}|2, 15 → ${bl('1')}|5, 18 → ${bl('1')}|8, 21 → ${bl('2')}|1, 23 → ${bl('2')}|3, 27 → ${bl('2')}|7.`,
            `Split each Class B value into stem and leaf: 14 → ${bl('1')}|4, 16 → ${bl('1')}|6, 19 → ${bl('1')}|9, 20 → ${bl('2')}|0, 22 → ${bl('2')}|2, 22 → ${bl('2')}|2, 28 → ${bl('2')}|8.`,
            `Draw one shared, ordered stem column in the middle: ${bl('1')}, ${bl('2')}.`,
            `Write Class A's leaves to the <strong>left</strong> of each stem, ordered so they increase towards the stem: stem ${bl('1')} → 8, 5, 2 | stem ${bl('2')} → 7, 3, 1.`,
            `Write Class B's leaves to the <strong>right</strong> of each stem, ordered so they increase away from the stem: stem ${bl('1')} → 4, 6, 9 | stem ${bl('2')} → 0, 2, 2, 8.`,
            `Full plot — Class A | Stem | Class B: "8,5,2 | ${bl('1')} | 4,6,9" and "7,3,1 | ${bl('2')} | 0,2,2,8". Key: 2|${bl('1')}|4 means Class A = 12 and Class B = 14.`,
            `Comparing rows shows Class B has one more result (7 vs 6) and its scores are generally slightly higher and more spread out on the upper end (28 vs 27), while Class A's scores cluster a little lower.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Back-to-back stem-and-leaf plot with a shared central stem column, Class A leaves on the left and Class B leaves on the right, plus a key showing how to read a value',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="60" y="18" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Class A</text><text x="110" y="18" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Stem</text><text x="160" y="18" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Class B</text><line x1="95" y1="26" x2="95" y2="100" stroke="#d1d5db" stroke-width="1"/><line x1="125" y1="26" x2="125" y2="100" stroke="#d1d5db" stroke-width="1"/><rect x="100" y="34" width="20" height="22" fill="#2563eb"/><text x="110" y="49" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">1</text><rect x="100" y="64" width="20" height="22" fill="#2563eb"/><text x="110" y="79" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><text x="92" y="49" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="end">8  5  2</text><text x="128" y="49" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="start">4  6  9</text><text x="92" y="79" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="end">7  3  1</text><text x="128" y="79" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="start">0  2  2  8</text><text x="110" y="105" font-size="8" fill="#6b7280" text-anchor="middle">(leaves nearest the stem = smallest)</text><text x="110" y="130" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Key: 2 | 1 | 4</text><text x="110" y="144" font-size="8.5" fill="#374151" text-anchor="middle">Class A = 12,  Class B = 14</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to split data values into stems and leaves, build an ordered stem-and-leaf plot with a key, read off the mode range and median from it, and construct a back-to-back stem-and-leaf plot comparing two data sets" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — RANGE, PERCENTILES, QUARTILES AND INTERQUARTILE RANGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'range-percentiles-quartiles-iqr',
      title: 'Range, Percentiles, Quartiles and Interquartile Range',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">We revise <strong>range</strong> (largest minus smallest value) and extend to <strong>percentiles</strong> (the value below which a certain percentage of data falls), <strong>quartiles</strong> (which divide data into four equal parts — Q1 at 25%, Q2/median at 50%, Q3 at 75%), and the <strong>interquartile range</strong> (IQR = Q3 − Q1, which measures the spread of the middle 50% of data, useful for reducing the influence of outliers).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('quartile positions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interquartile range')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('range')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key measures of spread</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Range')} = largest value − smallest value. Measures the total spread but is heavily influenced by outliers.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Quartiles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Q1')} (25%), ${bl('Q2')} (50% = median), ${bl('Q3')} (75%). Each ${bl('quartile')} divides ordered data into four equal parts.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Interquartile Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('IQR')} = ${bl('Q3')} − ${bl('Q1')}. Measures the spread of the middle 50% of data, unaffected by outliers.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Percentiles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The p-th percentile is the value below which p% of the data falls. ${bl('Q1')} = 25th percentile, ${bl('Q2')} = 50th, ${bl('Q3')} = 75th.</p>` +
        `</div>` +

        `</div>` +

        // ── Finding quartiles ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding quartiles from ordered data</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;color:#374151;">` +
        `<li>Order the data from smallest to largest.</li>` +
        `<li>Find ${bl('Q2')} (median) — the middle value (or average of the two middle values for an even count).</li>` +
        `<li>Find ${bl('Q1')} — the median of the <strong>lower half</strong> of the data (values below ${bl('Q2')}).</li>` +
        `<li>Find ${bl('Q3')} — the median of the <strong>upper half</strong> of the data (values above ${bl('Q2')}).</li>` +
        `<li>Calculate ${or('IQR')} = ${bl('Q3')} − ${bl('Q1')}.</li>` +
        `</ol>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">IQR vs Range</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${gr('range')} uses only the two extreme values and can be distorted by a single outlier. The ${or('IQR')} focuses on the middle 50% of the data and is therefore a more robust measure of spread when outliers are present.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the range of the data set: 12, 45, 18, 90, 22, 15.',
          answer: `${gr('Range')} = ${gr('78')}`,
          steps: [
            `Order the data: 12, 15, 18, 22, 45, 90.`,
            `${gr('Range')} = largest − smallest = 90 − 12 = ${gr('78')}.`,
          ],
        },
        {
          question: 'Find Q1, Q2 and Q3 of the ordered data set: 4, 8, 10, 14, 18, 22, 25, 30.',
          answer: `${bl('Q1')} = ${bl('9')}, ${bl('Q2')} = ${bl('16')}, ${bl('Q3')} = ${bl('23.5')}`,
          steps: [
            `The data is already ordered: 4, 8, 10, 14, 18, 22, 25, 30. There are 8 values.`,
            `${bl('Q2')} (median) = average of the 4th and 5th values = (14 + 18) ÷ 2 = ${bl('16')}.`,
            `Lower half (values below Q2): 4, 8, 10, 14. ${bl('Q1')} = average of 2nd and 3rd values = (8 + 10) ÷ 2 = ${bl('9')}.`,
            `Upper half (values above Q2): 18, 22, 25, 30. ${bl('Q3')} = average of 2nd and 3rd values = (22 + 25) ÷ 2 = ${bl('23.5')}.`,
          ],
        },
        {
          question: 'Using Q1 = 9 and Q3 = 23.5 from Example 2, find the interquartile range.',
          answer: `${or('IQR')} = ${or('14.5')}`,
          steps: [
            `${or('IQR')} = ${bl('Q3')} − ${bl('Q1')} = ${bl('23.5')} − ${bl('9')} = ${or('14.5')}.`,
            `This represents the spread of the middle 50% of the data, unaffected by any extreme outliers.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Number line showing ordered data with Q1, Q2 and Q3 positions marked, the interquartile range bracketed in orange between Q1 and Q3, and the full range bracketed in green from smallest to largest value',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="110" x2="205" y2="110" stroke="#374151" stroke-width="1.5"/><polygon points="205,110 197,106 197,114" fill="#374151"/><circle cx="51" cy="110" r="4" fill="#2563eb"/><circle cx="78" cy="110" r="4" fill="#2563eb"/><circle cx="115" cy="110" r="4.5" fill="#16a34a"/><circle cx="155" cy="110" r="4" fill="#2563eb"/><circle cx="189" cy="110" r="4" fill="#2563eb"/><text x="51" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="78" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">Q1=9</text><text x="115" y="128" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="middle">Q2=16</text><text x="155" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">Q3=23.5</text><text x="189" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><path d="M78,88 L78,80 L155,80 L155,88" fill="none" stroke="#ea580c" stroke-width="1.6"/><text x="116" y="72" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">IQR</text><path d="M51,142 L51,150 L189,150 L189,142" fill="none" stroke="#16a34a" stroke-width="1.6"/><text x="120" y="163" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">range</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the range, Q1, Q2, Q3 and interquartile range from an ordered data set, and explaining the difference between range and IQR" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8 — FIVE NUMBER SUMMARY AND BOX-AND-WHISKER DIAGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary-box-whisker',
      title: 'Five Number Summary and Box-and-Whisker Diagrams',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">In the previous section we learnt how to find ${bl('Q1')}, the median and ${bl('Q3')} from ordered data. Put together with the ${bl('minimum')} and ${bl('maximum')}, these five values form the <strong>five number summary</strong>. A <strong>box-and-whisker diagram</strong> is a way of drawing this summary on a scale, so the spread and position of the data can be seen at a glance — a box from ${or('Q1')} to ${or('Q3')} with a line at the ${gr('median')}, and 'whiskers' stretching out to the ${bl('minimum')} and ${bl('maximum')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maximum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Q1 / Q3 (the box)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median')}</span>` +
        `</div>` +

        // ── The five values ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The five number summary</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">1. Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest value once the data is ordered.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">2. Q1 (Lower Quartile)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The median of the lower half of the data (values below the median).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">3. Median (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The middle value of the whole ordered data set.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">4. Q3 (Upper Quartile)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The median of the upper half of the data (values above the median).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">5. Maximum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest value once the data is ordered.</p>` +
        `</div>` +

        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to draw a box-and-whisker diagram</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the five number summary</strong> — order the data, then find the ${bl('minimum')}, ${or('Q1')}, ${gr('median')}, ${or('Q3')} and ${bl('maximum')} using the method from the previous section.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Draw a scale</strong> — draw a number line (horizontal or vertical) that covers the full range of the data, from at or below the ${bl('minimum')} to at or above the ${bl('maximum')}, with evenly spaced markings.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Draw the box</strong> — draw a rectangle (the box) from ${or('Q1')} to ${or('Q3')} above the scale. The width of this box is the interquartile range.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Mark the median</strong> — draw a vertical line inside the box at the ${gr('median')}, splitting the box in two.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Draw the whiskers</strong> — draw a straight line from each side of the box out to the ${bl('minimum')} and ${bl('maximum')}. These lines are the whiskers.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The box width is the IQR</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because the box stretches from ${or('Q1')} to ${or('Q3')}, its width on the scale is exactly the interquartile range (IQR) from the previous section. A wide box means the middle 50% of the data is spread out; a narrow box means it is tightly clustered.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Nine learners score the following marks out of 40 in a class quiz: 10, 14, 16, 18, 22, 24, 26, 30, 34. Find the five number summary.',
          answer: `${bl('Min = 10')} &nbsp;|&nbsp; ${or('Q1 = 15')} &nbsp;|&nbsp; ${gr('Median = 22')} &nbsp;|&nbsp; ${or('Q3 = 28')} &nbsp;|&nbsp; ${bl('Max = 34')}`,
          steps: [
            `The data is already in ascending order: 10, 14, 16, 18, 22, 24, 26, 30, 34. There are 9 values.`,
            `${bl('Minimum')} = ${bl('10')} (first value). &nbsp; ${bl('Maximum')} = ${bl('34')} (last value).`,
            `${gr('Median (Q2)')} = the middle (5th) value of 9 = ${gr('22')}.`,
            `${or('Lower half')} (values below the median): 10, 14, 16, 18. Q1 = median of this half = (14 + 16) ÷ 2 = ${or('15')}.`,
            `${or('Upper half')} (values above the median): 24, 26, 30, 34. Q3 = median of this half = (26 + 30) ÷ 2 = ${or('28')}.`,
            `<strong>Five number summary:</strong> ${bl('Min = 10')}, ${or('Q1 = 15')}, ${gr('Median = 22')}, ${or('Q3 = 28')}, ${bl('Max = 34')}`,
          ],
        },
        {
          question: 'Use the five number summary from Example 1 (Min = 10, Q1 = 15, Median = 22, Q3 = 28, Max = 34) to construct a box-and-whisker diagram, step by step.',
          answer: 'The box runs from 15 to 28 with a median line at 22, and whiskers stretch from 15 down to 10 and from 28 up to 34 — see the diagram below.',
          steps: [
            `<strong>Step 1 — draw a scale:</strong> draw a number line from below the ${bl('minimum')} to above the ${bl('maximum')}, for example 0 to 40, with even spacing.`,
            `<strong>Step 2 — mark the five values:</strong> locate ${bl('10')}, ${or('15')}, ${gr('22')}, ${or('28')} and ${bl('34')} on the scale.`,
            `<strong>Step 3 — draw the box:</strong> draw a rectangle from ${or('Q1 = 15')} to ${or('Q3 = 28')} above the scale — this box shows the middle 50% of the marks.`,
            `<strong>Step 4 — mark the median:</strong> draw a vertical line inside the box at the ${gr('median = 22')}.`,
            `<strong>Step 5 — draw the whiskers:</strong> draw a line from the left of the box (${or('15')}) to the ${bl('minimum (10)')}, and a line from the right of the box (${or('28')}) to the ${bl('maximum (34)')}.`,
            `<strong>Completed diagram:</strong> the box-and-whisker diagram below shows all five values in their correct positions ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A data set has five number summary Min = 2, Q1 = 6, Median = 9, Q3 = 13, Max = 18. What is the interquartile range shown by the width of the box?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7', 'IQR = 7'],
          explanation: 'IQR = Q3 − Q1 = 13 − 6 = 7 ✓',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Find the five number summary of this ordered data set, then sketch a box-and-whisker diagram from it: 6, 9, 11, 14, 17, 20, 23, 26, 29.',
          checkMode: 'self',
          answer: 'Min = 6, Q1 = 10, Median = 17, Q3 = 24.5, Max = 29. The box runs from 10 to 24.5 with a median line at 17, and whiskers extend from 10 down to 6 and from 24.5 up to 29.',
        },
        {
          difficulty: 'Medium',
          question: 'This data set is not yet in order: 18, 7, 12, 25, 9, 30, 15, 21, 4. Order it, find the five number summary, and describe how you would draw the box-and-whisker diagram.',
          checkMode: 'self',
          answer: 'Ordered: 4, 7, 9, 12, 15, 18, 21, 25, 30. Min = 4, Q1 = 8, Median = 15, Q3 = 23, Max = 30. Draw a scale from below 4 to above 30, draw a box from 8 to 23 with a line at 15, then whiskers from 8 down to 4 and from 23 up to 30.',
        },
        {
          difficulty: 'Medium',
          question: 'The box-and-whisker diagram below shows the times (in minutes) taken by 9 runners to finish a fun run. Read off the median time.',
          checkMode: 'auto',
          correctAnswer: '27',
          correctAnswers: ['27', '27 minutes'],
          explanation: 'The line inside the box is drawn at the median, which is at 27 on the scale ✓',
          diagramSvg:
            '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Box-and-Whisker Diagram: Race Times (minutes)</text><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="287" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="152" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="211" y1="43" x2="211" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="211" y1="110" x2="211" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="287" y1="110" x2="287" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="211" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="287" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">31</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same box-and-whisker diagram of race times, what is the interquartile range (IQR)?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8 minutes'],
          explanation: 'IQR = Q3 − Q1 = 31 − 23 = 8 minutes ✓',
          diagramSvg:
            '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Box-and-Whisker Diagram: Race Times (minutes)</text><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="287" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="152" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="211" y1="43" x2="211" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="211" y1="110" x2="211" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="287" y1="110" x2="287" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="211" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="287" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">31</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A shop manager records the number of items sold by 9 sales assistants in a day: 14, 8, 22, 11, 19, 25, 9, 17, 30. Find the five number summary and describe the box-and-whisker diagram you would draw, marking Q1, the median and Q3 clearly.',
          checkMode: 'self',
          answer: 'Ordered: 8, 9, 11, 14, 17, 19, 22, 25, 30. Min = 8, Q1 = 10, Median = 17, Q3 = 23.5, Max = 30. Draw a scale from below 8 to above 30, a box from 10 to 23.5 with a median line at 17, and whiskers from 10 down to 8 and from 23.5 up to 30.',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 460 155" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Box-and-Whisker Diagram: Quiz Marks (out of 40)</text><text x="40" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Min</text><text x="119.17" y="33" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Q1</text><text x="230" y="33" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Median</text><text x="325" y="33" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Q3</text><text x="420" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Max</text><line x1="40" y1="60" x2="119.17" y2="60" stroke="#2563eb" stroke-width="2.5"/><line x1="325" y1="60" x2="420" y2="60" stroke="#2563eb" stroke-width="2.5"/><line x1="40" y1="43" x2="40" y2="77" stroke="#2563eb" stroke-width="2.5"/><line x1="420" y1="43" x2="420" y2="77" stroke="#2563eb" stroke-width="2.5"/><rect x="119.17" y="43" width="205.83" height="34" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><line x1="230" y1="43" x2="230" y2="77" stroke="#16a34a" stroke-width="3"/><line x1="30" y1="115" x2="430" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="119.17" y1="110" x2="119.17" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="230" y1="110" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="325" y1="110" x2="325" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="138" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">10</text><text x="119.17" y="138" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><text x="230" y="138" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">22</text><text x="325" y="138" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">28</text><text x="420" y="138" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">34</text><text x="230" y="151" font-size="10" fill="#64748b" text-anchor="middle">Marks out of 40</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the five number summary and draw a box-and-whisker diagram step by step from a small data set" />',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — Phase 1 (content only, no diagramSvg yet)
  // Each set has 20 questions in 6 repeating skill blocks, Easy → Medium → Hard:
  //   Block 1 (Q1-4)   Mean/median/mode/range from raw data
  //   Block 2 (Q5-8)   Five-number summary and IQR from ordered data
  //   Block 3 (Q9-12)  Box-and-whisker plot interpretation (5-number summary stated in text)
  //   Block 4 (Q13-16) Scatter plot / correlation interpretation (coordinates stated in text)
  //   Block 5 (Q17-18) Outlier effects on mean vs median
  //   Block 6 (Q19-20) Combined comparison of two data sets
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1 — Mean/median/mode/range from raw data (Q1-4) ──────────
        { difficulty: 'Easy', question: 'A netball team scored these points in 6 matches: 12, 15, 12, 18, 20, 24. Find the mean score.', answer: '16.83', checkMode: 'auto', correctAnswer: '16.83', correctAnswers: ['16.83', '16.8', '101/6'], explanation: 'Sum = 12+15+12+18+20+24 = 101. Mean = 101 ÷ 6 ≈ 16.83 ✓' },
        { difficulty: 'Easy', question: 'Seven learners recorded the number of siblings they have: 14, 18, 14, 22, 16, 20, 14. Find the mode of this data set.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Ordered: 14, 14, 14, 16, 18, 20, 22. The value 14 appears three times, more than any other value, so the mode is 14 ✓' },
        { difficulty: 'Medium', question: 'A data set of test marks (out of 50) is: 23, 19, 27, 31, 25, 29, 21, 33. Find the median.', answer: '26', checkMode: 'auto', correctAnswer: '26', explanation: 'Ordered: 19, 21, 23, 25, 27, 29, 31, 33 (8 values). Median = average of 4th and 5th values = (25 + 27) ÷ 2 = 26 ✓' },
        { difficulty: 'Medium-Hard', question: 'A set of plant heights (in cm) is: 4.5, 5.2, 4.8, 5.2, 6.1, 4.5. Find the range of this data set.', answer: '1.6', checkMode: 'auto', correctAnswer: '1.6', correctAnswers: ['1.6', '1.6cm', '1.6 cm'], explanation: 'Ordered: 4.5, 4.5, 4.8, 5.2, 5.2, 6.1. Range = largest − smallest = 6.1 − 4.5 = 1.6 cm ✓' },

        // ── Block 2 — Five-number summary and IQR from ordered data (Q5-8) ──
        { difficulty: 'Easy', question: 'An ordered data set is: 8, 11, 14, 17, 20, 23, 26, 29. Find Q1 and Q3.', answer: 'Q1 = 12.5, Q3 = 24.5', checkMode: 'auto', correctAnswer: 'Q1 = 12.5, Q3 = 24.5', correctAnswers: ['Q1 = 12.5, Q3 = 24.5', 'Q1=12.5, Q3=24.5', '12.5, 24.5'], explanation: 'Lower half: 8,11,14,17 → Q1 = (11+14)÷2 = 12.5. Upper half: 20,23,26,29 → Q3 = (23+26)÷2 = 24.5 ✓' },
        { difficulty: 'Medium', question: 'An ordered data set is: 5, 9, 13, 15, 18, 22, 27, 31, 35. Find the interquartile range (IQR).', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'n=9 (odd), median (Q2) = 18. Lower half (below median): 5,9,13,15 → Q1 = (9+13)÷2 = 11. Upper half (above median): 22,27,31,35 → Q3 = (27+31)÷2 = 29. IQR = Q3 − Q1 = 29 − 11 = 18 ✓' },
        { difficulty: 'Medium-Hard', question: 'An ordered data set is: 10, 12, 15, 18, 21, 24, 28, 33, 37, 42. Find the median and the IQR.', answer: 'Median = 22.5, IQR = 18', checkMode: 'auto', correctAnswer: 'Median = 22.5, IQR = 18', correctAnswers: ['Median = 22.5, IQR = 18', 'median=22.5, iqr=18', '22.5, 18'], explanation: 'n=10 (even), median = (21+24)÷2 = 22.5. Lower half: 10,12,15,18,21 → Q1 = 15. Upper half: 24,28,33,37,42 → Q3 = 33. IQR = 33 − 15 = 18 ✓' },
        { difficulty: 'Hard', question: 'An ordered data set is: 2, 6, 9, 13, 16, 19, 24, 28. This data set has a five-number summary with Q1 = 7.5 and Q3 = 21.5. A second data set has the same minimum and maximum but Q1 = 4 and Q3 = 25. Which data set has its middle 50% more tightly clustered?', answer: 'the first data set (Q1=7.5, Q3=21.5)', checkMode: 'auto', correctAnswer: 'the first data set (Q1=7.5, Q3=21.5)', correctAnswers: ['the first data set (Q1=7.5, Q3=21.5)', 'first data set', 'the first one', 'data set 1'], explanation: 'IQR of first set = 21.5 − 7.5 = 14. IQR of second set = 25 − 4 = 21. The smaller IQR (14) means the middle 50% of the first data set is more tightly clustered ✓' },

        // ── Block 3 — Box-and-whisker plot interpretation (Q9-12) ──────────
        { difficulty: 'Easy', question: 'A box-and-whisker plot for a set of delivery times (in minutes) has minimum = 5, Q1 = 12, median = 18, Q3 = 25, maximum = 40. Find the interquartile range shown by the box.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'IQR = Q3 − Q1 = 25 − 12 = 13 minutes ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="116" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="257.1428571428571" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="116" y="43" width="141.1428571428571" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="181.14285714285714" y1="43" x2="181.14285714285714" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="116" y1="110" x2="116" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="181.14285714285714" y1="110" x2="181.14285714285714" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="257.1428571428571" y1="110" x2="257.1428571428571" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="116" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="181.14285714285714" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="257.1428571428571" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40</text></svg>' },
        { difficulty: 'Medium', question: 'A box-and-whisker plot for a set of race times has minimum = 10, Q1 = 22, median = 28, Q3 = 34, maximum = 60. Compare the range and the IQR, and state which is more affected by extreme values.', answer: 'Range = 50, IQR = 12; the range is more affected by extreme values, since it depends only on the minimum and maximum, while the IQR is based on the middle 50% and ignores extreme values.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="131.2" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="222.4" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="131.2" y="43" width="91.20000000000002" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="176.79999999999998" y1="43" x2="176.79999999999998" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="131.2" y1="110" x2="131.2" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="176.79999999999998" y1="110" x2="176.79999999999998" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="222.4" y1="110" x2="222.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="131.2" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="176.79999999999998" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="222.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A box-and-whisker plot for a set of salaries has minimum = 20, Q1 = 23, median = 25, Q3 = 38, maximum = 42. The right whisker and the upper part of the box are both much longer than the left whisker and lower part of the box. What does this suggest about the shape of the distribution?', answer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', checkMode: 'auto', correctAnswer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', correctAnswers: ['skewed to the right', 'positively skewed', 'right-skewed', 'the data is skewed right', 'skewed right'], explanation: 'A long right whisker/box and a short left whisker/box mean the higher values are more spread out — this is a right (positive) skew ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="91.81818181818181" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="350.90909090909093" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="91.81818181818181" y="43" width="259.0909090909091" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="126.36363636363636" y1="43" x2="126.36363636363636" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91.81818181818181" y1="110" x2="91.81818181818181" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="126.36363636363636" y1="110" x2="126.36363636363636" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="350.90909090909093" y1="110" x2="350.90909090909093" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="91.81818181818181" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="126.36363636363636" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="350.90909090909093" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">42</text></svg>' },
        { difficulty: 'Hard', question: "Two classes' test results are shown as box-and-whisker plots. Class A: minimum = 40, Q1 = 55, median = 62, Q3 = 70, maximum = 85. Class B: minimum = 35, Q1 = 50, median = 62, Q3 = 78, maximum = 95. Both classes have the same median. Compare which class had more consistent (less spread out) results, using the IQR.", answer: "Class A's IQR = 70 − 55 = 15. Class B's IQR = 78 − 50 = 28. Class A has the smaller IQR, so Class A's results were more consistent (less spread out) than Class B's, even though both classes had the same median score.", checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class A</text><line x1="81.66666666666666" y1="45" x2="176.66666666666666" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="271.6666666666667" y1="45" x2="366.6666666666667" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="81.66666666666666" y1="31" x2="81.66666666666666" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="366.6666666666667" y1="31" x2="366.6666666666667" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="176.66666666666666" y="31" width="95.00000000000003" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="221" y1="31" x2="221" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class B</text><line x1="50" y1="105" x2="145" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="322.3333333333333" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="145" y="91" width="177.33333333333331" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="221" y1="91" x2="221" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><line x1="81.66666666666666" y1="160" x2="81.66666666666666" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="81.66666666666666" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><line x1="145" y1="160" x2="145" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><line x1="176.66666666666666" y1="160" x2="176.66666666666666" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="176.66666666666666" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">55</text><line x1="221" y1="160" x2="221" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="221" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">62</text><line x1="271.6666666666667" y1="160" x2="271.6666666666667" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="271.6666666666667" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70</text><line x1="322.3333333333333" y1="160" x2="322.3333333333333" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="322.3333333333333" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">78</text><line x1="366.6666666666667" y1="160" x2="366.6666666666667" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="366.6666666666667" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">85</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">95</text></svg>' },

        // ── Block 4 — Scatter plot / correlation interpretation (Q13-16) ────
        { difficulty: 'Easy', question: 'A scatter plot compares hours studied and test score for 7 learners: (2,20), (4,35), (5,45), (7,60), (8,68), (10,85), (12,95). As hours studied increases, test score consistently increases too. What type of correlation does this show?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive', 'positive correlation'], explanation: 'Both variables increase together — this is a positive correlation ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test score</text><circle cx="85.71428571428572" cy="191.8181818181818" r="4.5" fill="#2563eb"/><circle cx="121.42857142857143" cy="163.1818181818182" r="4.5" fill="#2563eb"/><circle cx="139.28571428571428" cy="144.09090909090907" r="4.5" fill="#2563eb"/><circle cx="175" cy="115.45454545454547" r="4.5" fill="#2563eb"/><circle cx="192.85714285714286" cy="100.18181818181819" r="4.5" fill="#2563eb"/><circle cx="228.57142857142858" cy="67.72727272727272" r="4.5" fill="#2563eb"/><circle cx="264.2857142857143" cy="48.636363636363626" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'A scatter plot compares driving speed (km/h) and number of defects found in a factory inspection for 7 machines: (1,50), (3,42), (5,33), (6,28), (8,20), (9,15), (11,8). As speed increases, the number of defects found consistently decreases. Describe the type of correlation and explain what it suggests.', answer: 'This is a negative correlation — as one variable (speed) increases, the other (defects found) decreases, suggesting that faster inspection speed is associated with fewer defects being found.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Speed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defects found</text><circle cx="69.23076923076923" cy="48.96551724137933" r="4.5" fill="#2563eb"/><circle cx="107.6923076923077" cy="77.93103448275863" r="4.5" fill="#2563eb"/><circle cx="146.15384615384616" cy="110.51724137931033" r="4.5" fill="#2563eb"/><circle cx="165.3846153846154" cy="128.6206896551724" r="4.5" fill="#2563eb"/><circle cx="203.84615384615387" cy="157.58620689655172" r="4.5" fill="#2563eb"/><circle cx="223.07692307692307" cy="175.68965517241378" r="4.5" fill="#2563eb"/><circle cx="261.53846153846155" cy="201.0344827586207" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A scatter plot compares 7 learners’ shoe sizes and their test marks: (20,5), (35,9), (15,3), (50,7), (28,6), (42,4), (18,8). The points are spread out with no rising or falling pattern. What can be concluded about the relationship between shoe size and test marks?', answer: 'no correlation', checkMode: 'auto', correctAnswer: 'no correlation', correctAnswers: ['no correlation', 'none', 'no relationship', 'there is no correlation'], explanation: 'The points show no consistent upward or downward pattern, so there is no correlation between shoe size and test marks ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Shoe size</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test mark</text><circle cx="136.20689655172413" cy="134.54545454545456" r="4.5" fill="#2563eb"/><circle cx="200.86206896551724" cy="58.18181818181816" r="4.5" fill="#2563eb"/><circle cx="114.65517241379311" cy="172.72727272727275" r="4.5" fill="#2563eb"/><circle cx="265.51724137931035" cy="96.36363636363637" r="4.5" fill="#2563eb"/><circle cx="170.68965517241378" cy="115.45454545454547" r="4.5" fill="#2563eb"/><circle cx="231.0344827586207" cy="153.63636363636363" r="4.5" fill="#2563eb"/><circle cx="127.58620689655173" cy="77.27272727272728" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'A scatter plot shows a strong positive correlation between the number of hours of sunshine and cold-drink sales at a shop, based on 10 clearly upward-trending data points. Zanele concludes "sunshine directly causes people to buy more cold drinks." Explain why a strong positive correlation on a scatter plot does not, by itself, prove causation.', answer: 'A scatter plot only shows that two variables tend to change together, not that one directly causes the other. There could be another factor involved (for example, warmer temperature on sunny days making people thirstier) or the relationship could be coincidental. Correlation shows a pattern, but proving causation requires further investigation beyond the graph.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours of sunshine</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Cold-drink sales</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Block 5 — Outlier effects on mean vs median (Q17-18) ────────────
        { difficulty: 'Medium', question: 'A set of runners’ times (in seconds) is: 52, 55, 58, 54, 56, 110, 53. Find the mean of this data set, including the outlier, rounded to 2 decimal places.', answer: '62.57', checkMode: 'auto', correctAnswer: '62.57', explanation: 'Sum = 52+55+58+54+56+110+53 = 438. Mean = 438 ÷ 7 ≈ 62.57 ✓' },
        { difficulty: 'Hard', question: 'Using the same data set (52, 55, 58, 54, 56, 110, 53), find the median with the outlier (110) included, and the median with it excluded. Explain what this comparison shows about the effect of an outlier on the median.', answer: 'Median with outlier included = 55 (ordered: 52,53,54,55,56,58,110). Median with outlier excluded = 54.5 (ordered: 52,53,54,55,56,58). The two medians are very close, showing that the median is much less affected by an extreme outlier than the mean would be, since it depends on position rather than magnitude.', checkMode: 'self' },

        // ── Block 6 — Combined comparison of two data sets (Q19-20) ─────────
        { difficulty: 'Hard', question: "Two branches of a store record their daily sales (in thousands of rand) for a month. Branch X: mean = R45 000, IQR = R8 000. Branch Y: mean = R45 000, IQR = R22 000. Both branches have the same mean daily sales. Explain which branch has more consistent daily sales, and why the mean alone would not reveal this.", answer: "Branch X has more consistent daily sales, since its IQR (R8 000) is much smaller than Branch Y's IQR (R22 000), meaning its middle 50% of sales values are far less spread out. The mean alone only shows the average — it says nothing about how spread out or consistent the individual values are, so two data sets can share the same mean while having very different levels of variability.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Two farms' weekly egg yields (in dozens) are compared using box-and-whisker plots. Farm P: minimum = 30, Q1 = 42, median = 50, Q3 = 58, maximum = 70. Farm Q: minimum = 20, Q1 = 44, median = 50, Q3 = 56, maximum = 85. Both farms have the same median yield. Using the range and IQR, explain which farm's weekly yields are more predictable.", answer: "Farm P's range = 70 − 30 = 40 and IQR = 58 − 42 = 16. Farm Q's range = 85 − 20 = 65 and IQR = 56 − 44 = 12. Farm Q actually has the smaller IQR (12 vs 16), meaning its middle 50% of yields are slightly more tightly clustered, but Farm Q has a much larger range (65 vs 40), showing it has more extreme high and low weeks. Overall, Farm P's yields are more predictable week-to-week since it has no such extreme outlying weeks, even though its middle-50% spread is marginally wider.", checkMode: 'self' },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mean, median, mode, range, IQR and interpreting box-and-whisker/scatter plots.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the five-number summary or correlation, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on IQR and outlier effects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
},

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1 — Mean/median/mode/range from raw data (Q1-4) ──────────
        { difficulty: 'Easy', question: 'A hockey team scored these goals in 7 matches: 13, 17, 13, 19, 15, 21, 13. Find the mean score, rounded to 2 decimal places.', answer: '15.86', checkMode: 'auto', correctAnswer: '15.86', explanation: 'Sum = 13+17+13+19+15+21+13 = 111. Mean = 111 ÷ 7 ≈ 15.86 ✓' },
        { difficulty: 'Easy', question: 'Seven learners recorded the number of books they read this term: 24, 20, 16, 24, 18, 22, 24. Find the mode of this data set.', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Ordered: 16, 18, 20, 22, 24, 24, 24. The value 24 appears three times, more than any other value, so the mode is 24 ✓' },
        { difficulty: 'Medium', question: 'A data set of test marks (out of 50) is: 35, 28, 41, 22, 38, 31, 25, 44. Find the median.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Ordered: 22, 25, 28, 31, 35, 38, 41, 44 (8 values). Median = average of 4th and 5th values = (31 + 35) ÷ 2 = 33 ✓' },
        { difficulty: 'Medium-Hard', question: 'A set of plant heights (in cm) is: 3.2, 4.1, 3.8, 4.1, 5.0, 3.2. Find the range of this data set.', answer: '1.8', checkMode: 'auto', correctAnswer: '1.8', correctAnswers: ['1.8', '1.8cm', '1.8 cm'], explanation: 'Ordered: 3.2, 3.2, 3.8, 4.1, 4.1, 5.0. Range = largest − smallest = 5.0 − 3.2 = 1.8 cm ✓' },

        // ── Block 2 — Five-number summary and IQR from ordered data (Q5-8) ──
        { difficulty: 'Easy', question: 'An ordered data set is: 6, 10, 14, 18, 22, 26, 30, 34. Find Q1 and Q3.', answer: 'Q1 = 12, Q3 = 28', checkMode: 'auto', correctAnswer: 'Q1 = 12, Q3 = 28', correctAnswers: ['Q1 = 12, Q3 = 28', 'Q1=12, Q3=28', '12, 28'], explanation: 'Lower half: 6,10,14,18 → Q1 = (10+14)÷2 = 12. Upper half: 22,26,30,34 → Q3 = (26+30)÷2 = 28 ✓' },
        { difficulty: 'Medium', question: 'An ordered data set is: 4, 8, 12, 15, 19, 23, 27, 31, 36. Find the interquartile range (IQR).', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'n=9 (odd), median (Q2) = 19. Lower half: 4,8,12,15 → Q1 = (8+12)÷2 = 10. Upper half: 23,27,31,36 → Q3 = (27+31)÷2 = 29. IQR = Q3 − Q1 = 29 − 10 = 19 ✓' },
        { difficulty: 'Medium-Hard', question: 'An ordered data set is: 9, 13, 16, 20, 24, 27, 31, 35, 40, 45. Find the median and the IQR.', answer: 'Median = 25.5, IQR = 19', checkMode: 'auto', correctAnswer: 'Median = 25.5, IQR = 19', correctAnswers: ['Median = 25.5, IQR = 19', 'median=25.5, iqr=19', '25.5, 19'], explanation: 'n=10 (even), median = (24+27)÷2 = 25.5. Lower half: 9,13,16,20,24 → Q1 = 16. Upper half: 27,31,35,40,45 → Q3 = 35. IQR = 35 − 16 = 19 ✓' },
        { difficulty: 'Hard', question: 'An ordered data set is: 3, 7, 11, 14, 17, 21, 25, 29. This data set has a five-number summary with Q1 = 9 and Q3 = 23. A second data set has the same minimum and maximum but Q1 = 5 and Q3 = 27. Which data set has its middle 50% more tightly clustered?', answer: 'the first data set (Q1=9, Q3=23)', checkMode: 'auto', correctAnswer: 'the first data set (Q1=9, Q3=23)', correctAnswers: ['the first data set (Q1=9, Q3=23)', 'first data set', 'the first one', 'data set 1'], explanation: 'IQR of first set = 23 − 9 = 14. IQR of second set = 27 − 5 = 22. The smaller IQR (14) means the middle 50% of the first data set is more tightly clustered ✓' },

        // ── Block 3 — Box-and-whisker plot interpretation (Q9-12) ──────────
        { difficulty: 'Easy', question: 'A box-and-whisker plot for a set of delivery times (in minutes) has minimum = 8, Q1 = 16, median = 22, Q3 = 29, maximum = 45. Find the interquartile range shown by the box.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'IQR = Q3 − Q1 = 29 − 16 = 13 minutes ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="122.16216216216216" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="255.67567567567568" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="122.16216216216216" y="43" width="133.51351351351352" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.7837837837838" y1="43" x2="183.7837837837838" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="122.16216216216216" y1="110" x2="122.16216216216216" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="183.7837837837838" y1="110" x2="183.7837837837838" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="255.67567567567568" y1="110" x2="255.67567567567568" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="122.16216216216216" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="183.7837837837838" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="255.67567567567568" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">29</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45</text></svg>' },
        { difficulty: 'Medium', question: 'A box-and-whisker plot for a set of race times has minimum = 15, Q1 = 28, median = 35, Q3 = 42, maximum = 68. Compare the range and the IQR, and state which is more affected by extreme values.', answer: 'Range = 53, IQR = 14; the range is more affected by extreme values, since it depends only on the minimum and maximum, while the IQR is based on the middle 50% and ignores extreme values.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="133.20754716981133" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="233.58490566037736" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="133.20754716981133" y="43" width="100.37735849056602" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.39622641509436" y1="43" x2="183.39622641509436" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="133.20754716981133" y1="110" x2="133.20754716981133" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="183.39622641509436" y1="110" x2="183.39622641509436" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="233.58490566037736" y1="110" x2="233.58490566037736" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="133.20754716981133" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="183.39622641509436" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><text x="233.58490566037736" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">42</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">68</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A box-and-whisker plot for a set of salaries has minimum = 25, Q1 = 29, median = 32, Q3 = 44, maximum = 50. The right whisker and the upper part of the box are both much longer than the left whisker and lower part of the box. What does this suggest about the shape of the distribution?', answer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', checkMode: 'auto', correctAnswer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', correctAnswers: ['skewed to the right', 'positively skewed', 'right-skewed', 'the data is skewed right', 'skewed right'], explanation: 'A long right whisker/box and a short left whisker/box mean the higher values are more spread out — this is a right (positive) skew ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="100.80000000000001" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="328.8" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="100.80000000000001" y="43" width="228" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="146.4" y1="43" x2="146.4" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100.80000000000001" y1="110" x2="100.80000000000001" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="146.4" y1="110" x2="146.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="328.8" y1="110" x2="328.8" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="100.80000000000001" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">29</text><text x="146.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">32</text><text x="328.8" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">44</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text></svg>' },
        { difficulty: 'Hard', question: "Two classes' test results are shown as box-and-whisker plots. Class A: minimum = 45, Q1 = 58, median = 65, Q3 = 73, maximum = 88. Class B: minimum = 40, Q1 = 53, median = 65, Q3 = 81, maximum = 98. Both classes have the same median. Compare which class had more consistent (less spread out) results, using the IQR.", answer: "Class A's IQR = 73 − 58 = 15. Class B's IQR = 81 − 53 = 28. Class A has the smaller IQR, so Class A's results were more consistent (less spread out) than Class B's, even though both classes had the same median score.", checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class A</text><line x1="82.75862068965517" y1="45" x2="167.9310344827586" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="266.2068965517242" y1="45" x2="364.48275862068965" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="82.75862068965517" y1="31" x2="82.75862068965517" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="364.48275862068965" y1="31" x2="364.48275862068965" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="167.9310344827586" y="31" width="98.27586206896558" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="31" x2="213.79310344827584" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class B</text><line x1="50" y1="105" x2="135.17241379310343" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="318.6206896551724" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="135.17241379310343" y="91" width="183.44827586206895" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="91" x2="213.79310344827584" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><line x1="82.75862068965517" y1="160" x2="82.75862068965517" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="82.75862068965517" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><line x1="135.17241379310343" y1="160" x2="135.17241379310343" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="135.17241379310343" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">53</text><line x1="167.9310344827586" y1="160" x2="167.9310344827586" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="167.9310344827586" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">58</text><line x1="213.79310344827584" y1="160" x2="213.79310344827584" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="213.79310344827584" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">65</text><line x1="266.2068965517242" y1="160" x2="266.2068965517242" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="266.2068965517242" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">73</text><line x1="318.6206896551724" y1="160" x2="318.6206896551724" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="318.6206896551724" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">81</text><line x1="364.48275862068965" y1="160" x2="364.48275862068965" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="364.48275862068965" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">88</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">98</text></svg>' },

        // ── Block 4 — Scatter plot / correlation interpretation (Q13-16) ────
        { difficulty: 'Easy', question: 'A scatter plot compares hours studied and test score for 7 learners: (3,25), (5,38), (6,48), (8,62), (9,70), (11,88), (13,98). As hours studied increases, test score consistently increases too. What type of correlation does this show?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive', 'positive correlation'], explanation: 'Both variables increase together — this is a positive correlation ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test score</text><circle cx="100" cy="183.53982300884957" r="4.5" fill="#2563eb"/><circle cx="133.33333333333331" cy="159.38053097345133" r="4.5" fill="#2563eb"/><circle cx="150" cy="140.79646017699116" r="4.5" fill="#2563eb"/><circle cx="183.33333333333334" cy="114.77876106194691" r="4.5" fill="#2563eb"/><circle cx="200" cy="99.91150442477877" r="4.5" fill="#2563eb"/><circle cx="233.33333333333331" cy="66.46017699115043" r="4.5" fill="#2563eb"/><circle cx="266.6666666666667" cy="47.876106194690266" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'A scatter plot compares driving speed (km/h) and number of defects found in a factory inspection for 7 machines: (2,55), (4,47), (6,38), (7,33), (9,25), (10,20), (12,13). As speed increases, the number of defects found consistently decreases. Describe the type of correlation and explain what it suggests.', answer: 'This is a negative correlation — as one variable (speed) increases, the other (defects found) decreases, suggesting that faster inspection speed is associated with fewer defects being found.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Speed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defects found</text><circle cx="85.71428571428572" cy="49.53125" r="4.5" fill="#2563eb"/><circle cx="121.42857142857143" cy="75.78125" r="4.5" fill="#2563eb"/><circle cx="157.14285714285714" cy="105.3125" r="4.5" fill="#2563eb"/><circle cx="175" cy="121.71875" r="4.5" fill="#2563eb"/><circle cx="210.71428571428572" cy="147.96875" r="4.5" fill="#2563eb"/><circle cx="228.57142857142858" cy="164.375" r="4.5" fill="#2563eb"/><circle cx="264.2857142857143" cy="187.34375" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A scatter plot compares 7 learners’ shoe sizes and their test marks: (22,6), (38,10), (17,4), (53,8), (30,7), (45,5), (20,9). The points are spread out with no rising or falling pattern. What can be concluded about the relationship between shoe size and test marks?', answer: 'no correlation', checkMode: 'auto', correctAnswer: 'no correlation', correctAnswers: ['no correlation', 'none', 'no relationship', 'there is no correlation'], explanation: 'The points show no consistent upward or downward pattern, so there is no correlation between shoe size and test marks ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Shoe size</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test mark</text><circle cx="140.1639344262295" cy="125" r="4.5" fill="#2563eb"/><circle cx="205.7377049180328" cy="55" r="4.5" fill="#2563eb"/><circle cx="119.67213114754098" cy="160" r="4.5" fill="#2563eb"/><circle cx="267.21311475409834" cy="90" r="4.5" fill="#2563eb"/><circle cx="172.95081967213116" cy="107.49999999999999" r="4.5" fill="#2563eb"/><circle cx="234.42622950819674" cy="142.5" r="4.5" fill="#2563eb"/><circle cx="131.9672131147541" cy="72.5" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'A scatter plot shows a strong positive correlation between the number of hours of sunshine and cold-drink sales at a shop, based on 10 clearly upward-trending data points. Kagiso concludes "sunshine directly causes people to buy more cold drinks." Explain why a strong positive correlation on a scatter plot does not, by itself, prove causation.', answer: 'A scatter plot only shows that two variables tend to change together, not that one directly causes the other. There could be another factor involved (for example, warmer temperature on sunny days making people thirstier) or the relationship could be coincidental. Correlation shows a pattern, but proving causation requires further investigation beyond the graph.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours of sunshine</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Cold-drink sales</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Block 5 — Outlier effects on mean vs median (Q17-18) ────────────
        { difficulty: 'Medium', question: 'A set of runners’ times (in seconds) is: 61, 64, 67, 63, 65, 125, 62. Find the mean of this data set, including the outlier, rounded to 2 decimal places.', answer: '72.43', checkMode: 'auto', correctAnswer: '72.43', explanation: 'Sum = 61+64+67+63+65+125+62 = 507. Mean = 507 ÷ 7 ≈ 72.43 ✓' },
        { difficulty: 'Hard', question: 'Using the same data set (61, 64, 67, 63, 65, 125, 62), find the median with the outlier (125) included, and the median with it excluded. Explain what this comparison shows about the effect of an outlier on the median.', answer: 'Median with outlier included = 64 (ordered: 61,62,63,64,65,67,125). Median with outlier excluded = 63.5 (ordered: 61,62,63,64,65,67). The two medians are very close, showing that the median is much less affected by an extreme outlier than the mean would be, since it depends on position rather than magnitude.', checkMode: 'self' },

        // ── Block 6 — Combined comparison of two data sets (Q19-20) ─────────
        { difficulty: 'Hard', question: "Two branches of a store record their daily sales (in thousands of rand) for a month. Branch X: mean = R52 000, IQR = R9 000. Branch Y: mean = R52 000, IQR = R24 000. Both branches have the same mean daily sales. Explain which branch has more consistent daily sales, and why the mean alone would not reveal this.", answer: "Branch X has more consistent daily sales, since its IQR (R9 000) is much smaller than Branch Y's IQR (R24 000), meaning its middle 50% of sales values are far less spread out. The mean alone only shows the average — it says nothing about how spread out or consistent the individual values are, so two data sets can share the same mean while having very different levels of variability.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Two farms' weekly egg yields (in dozens) are compared using box-and-whisker plots. Farm P: minimum = 34, Q1 = 46, median = 54, Q3 = 62, maximum = 74. Farm Q: minimum = 24, Q1 = 48, median = 54, Q3 = 60, maximum = 90. Both farms have the same median yield. Using the range and IQR, explain which farm's weekly yields are more predictable.", answer: "Farm P's range = 74 − 34 = 40 and IQR = 62 − 46 = 16. Farm Q's range = 90 − 24 = 66 and IQR = 60 − 48 = 12. Farm Q actually has the smaller IQR (12 vs 16), meaning its middle 50% of yields are slightly more tightly clustered, but Farm Q has a much larger range (66 vs 40), showing it has more extreme high and low weeks. Overall, Farm P's yields are more predictable week-to-week since it has no such extreme outlying weeks, even though its middle-50% spread is marginally wider.", checkMode: 'self' },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mean, median, mode, range, IQR and interpreting box-and-whisker/scatter plots.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the five-number summary or correlation, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on IQR and outlier effects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
},

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1 — Mean/median/mode/range from raw data (Q1-4) ──────────
        { difficulty: 'Easy', question: 'A basketball team scored these points in 7 matches: 16, 20, 16, 24, 18, 26, 16. Find the mean score, rounded to 2 decimal places.', answer: '19.43', checkMode: 'auto', correctAnswer: '19.43', explanation: 'Sum = 16+20+16+24+18+26+16 = 136. Mean = 136 ÷ 7 ≈ 19.43 ✓' },
        { difficulty: 'Easy', question: 'Seven learners recorded the number of movies they watched this month: 30, 26, 22, 30, 24, 28, 30. Find the mode of this data set.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Ordered: 22, 24, 26, 28, 30, 30, 30. The value 30 appears three times, more than any other value, so the mode is 30 ✓' },
        { difficulty: 'Medium', question: 'A data set of test marks (out of 60) is: 42, 35, 48, 29, 45, 38, 32, 51. Find the median.', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Ordered: 29, 32, 35, 38, 42, 45, 48, 51 (8 values). Median = average of 4th and 5th values = (38 + 42) ÷ 2 = 40 ✓' },
        { difficulty: 'Medium-Hard', question: 'A set of plant heights (in cm) is: 6.5, 7.4, 7.1, 7.4, 8.3, 6.5. Find the range of this data set.', answer: '1.8', checkMode: 'auto', correctAnswer: '1.8', correctAnswers: ['1.8', '1.8cm', '1.8 cm'], explanation: 'Ordered: 6.5, 6.5, 7.1, 7.4, 7.4, 8.3. Range = largest − smallest = 8.3 − 6.5 = 1.8 cm ✓' },

        // ── Block 2 — Five-number summary and IQR from ordered data (Q5-8) ──
        { difficulty: 'Easy', question: 'An ordered data set is: 9, 13, 17, 21, 25, 29, 33, 37. Find Q1 and Q3.', answer: 'Q1 = 15, Q3 = 31', checkMode: 'auto', correctAnswer: 'Q1 = 15, Q3 = 31', correctAnswers: ['Q1 = 15, Q3 = 31', 'Q1=15, Q3=31', '15, 31'], explanation: 'Lower half: 9,13,17,21 → Q1 = (13+17)÷2 = 15. Upper half: 25,29,33,37 → Q3 = (29+33)÷2 = 31 ✓' },
        { difficulty: 'Medium', question: 'An ordered data set is: 7, 11, 15, 18, 22, 26, 30, 34, 39. Find the interquartile range (IQR).', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'n=9 (odd), median (Q2) = 22. Lower half: 7,11,15,18 → Q1 = (11+15)÷2 = 13. Upper half: 26,30,34,39 → Q3 = (30+34)÷2 = 32. IQR = Q3 − Q1 = 32 − 13 = 19 ✓' },
        { difficulty: 'Medium-Hard', question: 'An ordered data set is: 12, 16, 19, 23, 27, 30, 34, 38, 43, 48. Find the median and the IQR.', answer: 'Median = 28.5, IQR = 19', checkMode: 'auto', correctAnswer: 'Median = 28.5, IQR = 19', correctAnswers: ['Median = 28.5, IQR = 19', 'median=28.5, iqr=19', '28.5, 19'], explanation: 'n=10 (even), median = (27+30)÷2 = 28.5. Lower half: 12,16,19,23,27 → Q1 = 19. Upper half: 30,34,38,43,48 → Q3 = 38. IQR = 38 − 19 = 19 ✓' },
        { difficulty: 'Hard', question: 'An ordered data set is: 5, 9, 13, 16, 19, 23, 27, 31. This data set has a five-number summary with Q1 = 11 and Q3 = 25. A second data set has the same minimum and maximum but Q1 = 7 and Q3 = 29. Which data set has its middle 50% more tightly clustered?', answer: 'the first data set (Q1=11, Q3=25)', checkMode: 'auto', correctAnswer: 'the first data set (Q1=11, Q3=25)', correctAnswers: ['the first data set (Q1=11, Q3=25)', 'first data set', 'the first one', 'data set 1'], explanation: 'IQR of first set = 25 − 11 = 14. IQR of second set = 29 − 7 = 22. The smaller IQR (14) means the middle 50% of the first data set is more tightly clustered ✓' },

        // ── Block 3 — Box-and-whisker plot interpretation (Q9-12) ──────────
        { difficulty: 'Easy', question: 'A box-and-whisker plot for a set of delivery times (in minutes) has minimum = 12, Q1 = 20, median = 27, Q3 = 34, maximum = 50. Find the interquartile range shown by the box.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'IQR = Q3 − Q1 = 34 − 20 = 14 minutes ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="120" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="260" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="120" y="43" width="140" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="43" x2="190" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="120" y1="110" x2="120" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="190" y1="110" x2="190" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="260" y1="110" x2="260" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="120" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="190" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="260" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text></svg>' },
        { difficulty: 'Medium', question: 'A box-and-whisker plot for a set of race times has minimum = 20, Q1 = 33, median = 40, Q3 = 47, maximum = 72. Compare the range and the IQR, and state which is more affected by extreme values.', answer: 'Range = 52, IQR = 14; the range is more affected by extreme values, since it depends only on the minimum and maximum, while the IQR is based on the middle 50% and ignores extreme values.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="237.30769230769232" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="102.30769230769232" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="186.15384615384616" y1="43" x2="186.15384615384616" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="186.15384615384616" y1="110" x2="186.15384615384616" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="237.30769230769232" y1="110" x2="237.30769230769232" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">33</text><text x="186.15384615384616" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="237.30769230769232" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">47</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">72</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A box-and-whisker plot for a set of salaries has minimum = 30, Q1 = 34, median = 37, Q3 = 50, maximum = 55. The right whisker and the upper part of the box are both much longer than the left whisker and lower part of the box. What does this suggest about the shape of the distribution?', answer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', checkMode: 'auto', correctAnswer: 'The data is skewed to the right (positively skewed), since the values above the median are far more spread out than the values below it.', correctAnswers: ['skewed to the right', 'positively skewed', 'right-skewed', 'the data is skewed right', 'skewed right'], explanation: 'A long right whisker/box and a short left whisker/box mean the higher values are more spread out — this is a right (positive) skew ✓' , diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="100.80000000000001" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="344" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="100.80000000000001" y="43" width="243.2" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="146.4" y1="43" x2="146.4" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100.80000000000001" y1="110" x2="100.80000000000001" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="146.4" y1="110" x2="146.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="344" y1="110" x2="344" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><text x="100.80000000000001" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="146.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">37</text><text x="344" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55</text></svg>' },
        { difficulty: 'Hard', question: "Two classes' test results are shown as box-and-whisker plots. Class A: minimum = 50, Q1 = 63, median = 70, Q3 = 78, maximum = 93. Class B: minimum = 45, Q1 = 58, median = 70, Q3 = 86, maximum = 103. Both classes have the same median. Compare which class had more consistent (less spread out) results, using the IQR.", answer: "Class A's IQR = 78 − 63 = 15. Class B's IQR = 86 − 58 = 28. Class A has the smaller IQR, so Class A's results were more consistent (less spread out) than Class B's, even though both classes had the same median score.", checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class A</text><line x1="82.75862068965517" y1="45" x2="167.9310344827586" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="266.2068965517242" y1="45" x2="364.48275862068965" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="82.75862068965517" y1="31" x2="82.75862068965517" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="364.48275862068965" y1="31" x2="364.48275862068965" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="167.9310344827586" y="31" width="98.27586206896558" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="31" x2="213.79310344827584" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Class B</text><line x1="50" y1="105" x2="135.17241379310343" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="318.6206896551724" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="135.17241379310343" y="91" width="183.44827586206895" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="91" x2="213.79310344827584" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><line x1="82.75862068965517" y1="160" x2="82.75862068965517" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="82.75862068965517" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><line x1="135.17241379310343" y1="160" x2="135.17241379310343" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="135.17241379310343" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">58</text><line x1="167.9310344827586" y1="160" x2="167.9310344827586" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="167.9310344827586" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">63</text><line x1="213.79310344827584" y1="160" x2="213.79310344827584" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="213.79310344827584" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70</text><line x1="266.2068965517242" y1="160" x2="266.2068965517242" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="266.2068965517242" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">78</text><line x1="318.6206896551724" y1="160" x2="318.6206896551724" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="318.6206896551724" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">86</text><line x1="364.48275862068965" y1="160" x2="364.48275862068965" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="364.48275862068965" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">93</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">103</text></svg>' },

        // ── Block 4 — Scatter plot / correlation interpretation (Q13-16) ────
        { difficulty: 'Easy', question: 'A scatter plot compares hours studied and test score for 7 learners: (4,30), (6,44), (7,54), (9,68), (10,76), (12,94), (14,104). As hours studied increases, test score consistently increases too. What type of correlation does this show?', answer: 'positive', checkMode: 'auto', correctAnswer: 'positive', correctAnswers: ['positive', 'positive correlation'], explanation: 'Both variables increase together — this is a positive correlation ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test score</text><circle cx="108.8235294117647" cy="177.5" r="4.5" fill="#2563eb"/><circle cx="138.23529411764707" cy="153" r="4.5" fill="#2563eb"/><circle cx="152.94117647058823" cy="135.5" r="4.5" fill="#2563eb"/><circle cx="182.35294117647058" cy="111" r="4.5" fill="#2563eb"/><circle cx="197.05882352941177" cy="97" r="4.5" fill="#2563eb"/><circle cx="226.47058823529412" cy="65.5" r="4.5" fill="#2563eb"/><circle cx="255.88235294117646" cy="48" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'A scatter plot compares driving speed (km/h) and number of defects found in a factory inspection for 7 machines: (3,60), (5,52), (7,43), (8,38), (10,30), (11,25), (13,18). As speed increases, the number of defects found consistently decreases. Describe the type of correlation and explain what it suggests.', answer: 'This is a negative correlation — as one variable (speed) increases, the other (defects found) decreases, suggesting that faster inspection speed is associated with fewer defects being found.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Speed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defects found</text><circle cx="100" cy="47.39130434782609" r="4.5" fill="#2563eb"/><circle cx="133.33333333333331" cy="71.7391304347826" r="4.5" fill="#2563eb"/><circle cx="166.66666666666669" cy="99.13043478260869" r="4.5" fill="#2563eb"/><circle cx="183.33333333333334" cy="114.34782608695652" r="4.5" fill="#2563eb"/><circle cx="216.66666666666666" cy="138.69565217391306" r="4.5" fill="#2563eb"/><circle cx="233.33333333333331" cy="153.91304347826087" r="4.5" fill="#2563eb"/><circle cx="266.6666666666667" cy="175.2173913043478" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A scatter plot compares 7 learners’ shoe sizes and their test marks: (24,7), (40,11), (19,5), (56,9), (32,8), (48,6), (22,10). The points are spread out with no rising or falling pattern. What can be concluded about the relationship between shoe size and test marks?', answer: 'no correlation', checkMode: 'auto', correctAnswer: 'no correlation', correctAnswers: ['no correlation', 'none', 'no relationship', 'there is no correlation'], explanation: 'The points show no consistent upward or downward pattern, so there is no correlation between shoe size and test marks ✓' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Shoe size</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Test mark</text><circle cx="142.30769230769232" cy="116.92307692307693" r="4.5" fill="#2563eb"/><circle cx="203.84615384615387" cy="52.30769230769232" r="4.5" fill="#2563eb"/><circle cx="123.07692307692308" cy="149.23076923076923" r="4.5" fill="#2563eb"/><circle cx="265.38461538461536" cy="84.61538461538461" r="4.5" fill="#2563eb"/><circle cx="173.0769230769231" cy="100.76923076923077" r="4.5" fill="#2563eb"/><circle cx="234.6153846153846" cy="133.07692307692307" r="4.5" fill="#2563eb"/><circle cx="134.6153846153846" cy="68.46153846153845" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'A scatter plot shows a strong positive correlation between the number of hours of sunshine and cold-drink sales at a shop, based on 10 clearly upward-trending data points. Amahle concludes "sunshine directly causes people to buy more cold drinks." Explain why a strong positive correlation on a scatter plot does not, by itself, prove causation.', answer: 'A scatter plot only shows that two variables tend to change together, not that one directly causes the other. There could be another factor involved (for example, warmer temperature on sunny days making people thirstier) or the relationship could be coincidental. Correlation shows a pattern, but proving causation requires further investigation beyond the graph.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours of sunshine</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Cold-drink sales</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Block 5 — Outlier effects on mean vs median (Q17-18) ────────────
        { difficulty: 'Medium', question: 'A set of runners’ times (in seconds) is: 71, 74, 77, 73, 75, 140, 72. Find the mean of this data set, including the outlier, rounded to 2 decimal places.', answer: '83.14', checkMode: 'auto', correctAnswer: '83.14', explanation: 'Sum = 71+74+77+73+75+140+72 = 582. Mean = 582 ÷ 7 ≈ 83.14 ✓' },
        { difficulty: 'Hard', question: 'Using the same data set (71, 74, 77, 73, 75, 140, 72), find the median with the outlier (140) included, and the median with it excluded. Explain what this comparison shows about the effect of an outlier on the median.', answer: 'Median with outlier included = 74 (ordered: 71,72,73,74,75,77,140). Median with outlier excluded = 73.5 (ordered: 71,72,73,74,75,77). The two medians are very close, showing that the median is much less affected by an extreme outlier than the mean would be, since it depends on position rather than magnitude.', checkMode: 'self' },

        // ── Block 6 — Combined comparison of two data sets (Q19-20) ─────────
        { difficulty: 'Hard', question: "Two branches of a store record their daily sales (in thousands of rand) for a month. Branch X: mean = R60 000, IQR = R10 000. Branch Y: mean = R60 000, IQR = R26 000. Both branches have the same mean daily sales. Explain which branch has more consistent daily sales, and why the mean alone would not reveal this.", answer: "Branch X has more consistent daily sales, since its IQR (R10 000) is much smaller than Branch Y's IQR (R26 000), meaning its middle 50% of sales values are far less spread out. The mean alone only shows the average — it says nothing about how spread out or consistent the individual values are, so two data sets can share the same mean while having very different levels of variability.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Two farms' weekly egg yields (in dozens) are compared using box-and-whisker plots. Farm P: minimum = 38, Q1 = 50, median = 58, Q3 = 66, maximum = 78. Farm Q: minimum = 28, Q1 = 52, median = 58, Q3 = 64, maximum = 94. Both farms have the same median yield. Using the range and IQR, explain which farm's weekly yields are more predictable.", answer: "Farm P's range = 78 − 38 = 40 and IQR = 66 − 50 = 16. Farm Q's range = 94 − 28 = 66 and IQR = 64 − 52 = 12. Farm Q actually has the smaller IQR (12 vs 16), meaning its middle 50% of yields are slightly more tightly clustered, but Farm Q has a much larger range (66 vs 40), showing it has more extreme high and low weeks. Overall, Farm P's yields are more predictable week-to-week since it has no such extreme outlying weeks, even though its middle-50% spread is marginally wider.", checkMode: 'self' },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mean, median, mode, range, IQR and interpreting box-and-whisker/scatter plots.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the five-number summary or correlation, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on IQR and outlier effects, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
},
  ],

  topicPractice: [
    // ── Q1 Easy — modal interval ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Data has intervals 0≤x<5 (freq 3), 5≤x<10 (freq 7), 10≤x<15 (freq 2). Identify the modal interval.',
      answer: '5≤x<10',
      checkMode: 'auto',
      correctAnswer: '5≤x<10',
      explanation: 'The modal interval is the one with the highest frequency. 5≤x<10 has frequency 7, which is the highest of the three intervals.',
    },

    // ── Q2 Medium — approximate mean ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the data from Q1 (intervals 0≤x<5 freq 3, 5≤x<10 freq 7, 10≤x<15 freq 2), find the approximate mean.',
      answer: '6.92',
      checkMode: 'auto',
      correctAnswer: '6.92',
      explanation: 'Midpoints: 2.5, 7.5, 12.5. Σ(midpoint × freq) = (2.5×3)+(7.5×7)+(12.5×2) = 7.5+52.5+25 = 85. Total freq = 12. Mean = 85÷12 ≈ 6.92.',
    },

    // ── Q3 Hard — endpoints vs midpoints ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho calculates the approximate mean of grouped data using endpoints instead of midpoints. Explain why this is incorrect.',
      answer: 'Using endpoints does not represent the typical value within each interval; midpoints give a fair estimate of where most data points likely fall within that range, making the mean calculation more accurate.',
      checkMode: 'self',
    },

    // ── Q4 Easy — STAT mode ──────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'On a Casio fx-82 calculator, which mode must you select to perform statistical calculations?',
      answer: 'STAT (statistics) mode',
      checkMode: 'auto',
      correctAnswer: 'STAT (statistics) mode',
      correctAnswers: ['STAT (statistics) mode', 'STAT mode', 'statistics mode', 'STAT'],
      explanation: 'You must select STAT (statistics) mode, usually accessed by pressing MODE or MENU and selecting the STAT option.',
    },

    // ── Q5 Medium — clearing previous data ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Lerato enters data into her calculator's STAT mode but forgets to clear previous data first. What problem could this cause?",
      answer: 'it could mix old and new data together, giving an incorrect result',
      checkMode: 'auto',
      correctAnswer: 'it could mix old and new data together, giving an incorrect result',
      explanation: 'Old data remains stored in memory and is combined with the new entries, making all statistical results such as the mean incorrect.',
    },

    // ── Q6 Hard — calculator steps for mean ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Describe the general calculator steps to find the mean of grouped data entered with midpoints and frequencies.',
      answer: 'Enter STAT mode, select 1-VAR, input midpoints in the x column and frequencies in the FREQ column, then access the Var menu (often via SHIFT+1) and select x̄ for the mean.',
      checkMode: 'self',
    },

    // ── Q7 Easy — identify outlier ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identify the outlier in the data set: 30, 32, 29, 31, 85, 28.',
      answer: '85',
      checkMode: 'auto',
      correctAnswer: '85',
      explanation: 'Most values cluster between 28 and 32. The value 85 is far above the rest and is clearly the outlier.',
    },

    // ── Q8 Medium — outlier decision ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo has the data set 15, 16, 14, 17, 3, 15. Should 3 be treated as a definite error or investigated further?',
      answer: 'investigated further',
      checkMode: 'auto',
      correctAnswer: 'investigated further',
      explanation: 'While 3 is much lower than the other values, it could be a genuine extreme value or a data error. It must be investigated in context before deciding whether to remove it.',
    },

    // ── Q9 Hard — outlier removal critique ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says removing an outlier always makes a data set more "correct". Is this always true? Explain.',
      answer: 'No — outliers should be investigated before removal; some outliers represent genuine, important values, and removing them without justification could bias the analysis and hide real information.',
      checkMode: 'self',
    },

    // ── Q10 Easy — modal class from histogram ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A histogram has bars for the intervals 0≤x<10 (frequency 4), 10≤x<20 (frequency 9), 20≤x<30 (frequency 5). Identify the modal class.',
      answer: '10≤x<20',
      checkMode: 'auto',
      correctAnswer: '10≤x<20',
      explanation: 'The modal class is the class interval with the tallest bar (highest frequency). 10≤x<20 has frequency 9, the highest of the three, so it is the modal class.',
    },

    // ── Q11 Medium — total frequency from histogram bars ─────────────────────
    {
      difficulty: 'Medium',
      question: 'A histogram has four bars with heights (frequencies) 6, 10, 8 and 4 for four equal class intervals. How many data values does the histogram represent in total?',
      answer: '28',
      checkMode: 'auto',
      correctAnswer: '28',
      explanation: 'The total number of data values equals the sum of all bar heights: 6 + 10 + 8 + 4 = 28.',
    },

    // ── Q12 Hard — why histogram bars have no gaps ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo draws a histogram for continuous test-mark data but leaves small gaps between the bars, like an ordinary bar graph. Explain why this is incorrect.',
      answer: 'A histogram represents continuous data where each class interval joins directly onto the next, so the bars must touch with no gaps; leaving gaps incorrectly suggests the intervals are separate, unrelated categories, as in a bar graph of discrete categories.',
      checkMode: 'self',
    },

    // ── Q13 Medium — frequency polygon point ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe how to plot a frequency polygon point for the interval 20≤x<30 with frequency 12.',
      answer: 'plot the point at (25,12), using the midpoint (25) and frequency (12)',
      checkMode: 'auto',
      correctAnswer: 'plot the point at (25,12), using the midpoint (25) and frequency (12)',
      explanation: 'The midpoint of 20≤x<30 is (20+30)÷2 = 25. The frequency is 12. Plot the point at coordinates (25, 12) on the graph.',
    },

    // ── Q14 Hard — comparing frequency polygons ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho's frequency polygon for one data set peaks higher than Lerato's polygon for a different data set, both plotted on the same axes. What does this likely indicate?",
      answer: "It suggests Sipho's data set has a higher concentration of values around that particular interval compared to Lerato's data set.",
      checkMode: 'self',
    },

    // ── Q15 Easy — reading stems and leaves ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a stem-and-leaf plot, stem 3 has leaves 1, 1, 4, 8, 9 (key: 3|1 = 31). List the actual data values for this stem.',
      answer: '31, 31, 34, 38, 39',
      checkMode: 'auto',
      correctAnswer: '31, 31, 34, 38, 39',
      correctAnswers: ['31, 31, 34, 38, 39', '31,31,34,38,39', '31 31 34 38 39'],
      explanation: 'Each leaf is attached to the stem 3 (tens digit): 3|1=31, 3|1=31, 3|4=34, 3|8=38, 3|9=39.',
    },

    // ── Q16 Medium — mode, range, median from a stem-and-leaf plot ───────────
    {
      difficulty: 'Medium',
      question: 'A stem-and-leaf plot shows: 5 | 1, 4, 4, 8 and 6 | 2, 5, 7, 9 (key: 5|1 = 51). Find the mode, range and median of this data set.',
      answer: 'Mode = 54, Range = 18, Median = 60',
      checkMode: 'auto',
      correctAnswer: 'Mode = 54, Range = 18, Median = 60',
      correctAnswers: ['Mode = 54, Range = 18, Median = 60', 'mode=54, range=18, median=60', '54, 18, 60'],
      explanation: 'Data in order: 51, 54, 54, 58, 62, 65, 67, 69 (8 values). Mode = 54 (appears twice). Range = 69 − 51 = 18. Median = average of 4th and 5th values = (58 + 62) ÷ 2 = 60.',
    },

    // ── Q17 Hard — back-to-back stem-and-leaf comparison ─────────────────────
    {
      difficulty: 'Hard',
      question: "A back-to-back stem-and-leaf plot compares Class A and Class B test scores using shared stems 4 and 5: Class A '8,5,2 | 4 | 0,4,6' and '7,3,1 | 5 | 2,5,5,9' for Class B (key: 2|4|0 means Class A=42, Class B=40). Compare the two classes' performance.",
      answer: 'Class A has 6 scores (42,45,48,51,53,57) and Class B has 7 scores (40,44,46,52,55,55,59); Class B has a slightly higher maximum (59 vs 57) and more scores in the 50s, suggesting Class B performed marginally better overall, though both classes cover a similar range.',
      checkMode: 'self',
    },

    // ── Q18 Easy — range ─────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the range of the data set 22, 8, 45, 30, 12.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Range = largest − smallest = 45 − 8 = 37.',
    },

    // ── Q19 Medium — quartiles ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find Q1, Q2 and Q3 of the ordered data: 5, 9, 13, 17, 21, 25, 29, 33.',
      answer: 'Q1=11, Q2=19, Q3=27',
      checkMode: 'auto',
      correctAnswer: 'Q1=11, Q2=19, Q3=27',
      correctAnswers: ['Q1=11, Q2=19, Q3=27', 'Q1 = 11, Q2 = 19, Q3 = 27', '11, 19, 27'],
      explanation: 'Q2 (median) = (17+21)÷2 = 19. Lower half 5,9,13,17 → Q1 = (9+13)÷2 = 11. Upper half 21,25,29,33 → Q3 = (25+29)÷2 = 27.',
    },

    // ── Q20 Hard — IQR and what it represents ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the quartiles from Q13, find the interquartile range and explain what it represents.',
      answer: 'IQR=27-11=16. This represents the spread of the middle 50% of the data, providing a measure of spread that is less affected by extreme values than the full range.',
      checkMode: 'self',
    },

    // ── Q21 Hard — median equals Q2 ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the median always equals Q2. Is he correct? Explain.',
      answer: 'Yes — by definition, Q2 (the second quartile) is the same as the median, since both represent the middle value (50th percentile) of an ordered data set.',
      checkMode: 'self',
    },

    // ── Q22 Hard — small IQR relative to range ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A data set has Q1=20 and Q3=50. Find the interquartile range, then explain what a small IQR compared to the full range would suggest about the data.',
      answer: 'IQR=50-20=30. A small IQR relative to the full range suggests the middle 50% of data is tightly clustered, with possibly more extreme values pulling the full range wider, hinting at potential outliers or a skewed distribution.',
      checkMode: 'self',
    },

    // ── Q23 Hard — approximate mean from grouped data ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the approximate mean of grouped data with intervals 10≤x<20 (freq 5), 20≤x<30 (freq 9), 30≤x<40 (freq 6), using midpoints.',
      answer: 'Midpoints: 15,25,35. Sum=(15×5)+(25×9)+(35×6)=75+225+210=510. Total frequency=20. Mean=510÷20=25.5.',
      checkMode: 'self',
    },

    // ── Q24 Hard — calculator mean accuracy for grouped data ─────────────────
    {
      difficulty: 'Hard',
      question: "Lerato says a calculator's mean function gives the exact mean for grouped data. Is this always accurate? Explain.",
      answer: 'No — for grouped data, even the calculator only provides an approximate mean based on the midpoints you input, since the exact individual values within each interval are unknown.',
      checkMode: 'self',
    },

    // ── Q25 Hard — 40th percentile in context ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle finds the 40th percentile of a data set falls in the interval 25≤x<35. Explain what this means in context.',
      answer: 'It means approximately 40% of the data values fall below the range 25≤x<35, placing this interval as the location where the 40th percentile value lies.',
      checkMode: 'self',
    },

    // ── Q26 Hard — range vs IQR outlier reasoning ────────────────────────────
    {
      difficulty: 'Hard',
      question: "A data set's range is 60, but its interquartile range is only 12. Sipho concludes there must be at least one outlier. Is his reasoning sound? Explain.",
      answer: 'His reasoning is reasonable but not absolutely certain — a large gap between range and IQR often suggests outliers pulling the range wider than the tightly clustered middle 50%, but this should still be investigated by examining the actual data values rather than assumed automatically.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 26,
    messages: [
      { minScore: 26, message: 'Outstanding! You have mastered statistics.' },
      { minScore: 20, message: 'Great work!' },
      { minScore: 13, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
