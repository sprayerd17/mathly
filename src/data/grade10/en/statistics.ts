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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Frequency table showing three intervals with midpoints and frequencies, and working for approximate mean calculation with colour coded columns for intervals blue midpoints orange frequencies green" />',

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
        '<DiagramPlaceholder label="Screen-by-screen diagram of a Casio fx-82ZA PLUS showing MODE menu, 1-VAR selection, data entry table with x and FREQ columns filled in, and the STAT results screen displaying x-bar with colour coded buttons blue menu options orange displayed result green" />',

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
        '<DiagramPlaceholder label="Number line showing data values 21 22 23 24 25 clustered together in blue and 99 isolated far to the right in red illustrating a clear outlier" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what an outlier is, how to spot one visually on a number line, and how to decide whether it is a data error or a genuine extreme value" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FREQUENCY POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'frequency-polygons',
      title: 'Frequency Polygons',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>frequency polygon</strong> is a line graph showing the frequency of data within each interval, created by plotting a point at the <strong>midpoint</strong> of each interval (at the height of its frequency) and connecting consecutive points with straight lines. It is useful for comparing the shape and spread of grouped data, especially when comparing two data sets on the same axes.</p>` +

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
        `<p style="margin:0;color:#1e3a8a;">Two frequency polygons can be drawn on the same axes in different colours, making it easy to compare two data sets directly. Histograms overlap and become difficult to read when superimposed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how to construct a frequency polygon from the data: 0≤x<10 (freq 4), 10≤x<20 (freq 8), 20≤x<30 (freq 6).',
          answer: `Points at (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) connected by ${gr('straight lines')}`,
          steps: [
            `Find the ${bl('midpoint')} of each interval: ${bl('0≤x<10')} → ${bl('5')}, ${bl('10≤x<20')} → ${bl('15')}, ${bl('20≤x<30')} → ${bl('25')}.`,
            `Plot points at each (${bl('midpoint')}, ${or('frequency')}): (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}).`,
            `Connect these points with ${gr('straight lines')} to form the polygon.`,
            `<em>[Diagram needed: a frequency polygon showing points (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) connected by straight lines, with the x-axis labelled as interval midpoints and y-axis labelled as frequency]</em>`,
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
        '<DiagramPlaceholder label="Frequency polygon with x-axis labelled as interval midpoints showing 5 15 25 in blue and y-axis labelled as frequency showing points at heights 4 8 6 in orange connected by straight green lines" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a frequency polygon from a grouped frequency table by plotting midpoint-frequency pairs and joining them with straight lines" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — RANGE, PERCENTILES, QUARTILES AND INTERQUARTILE RANGE
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
        '<DiagramPlaceholder label="Number line showing ordered data with Q1 Q2 and Q3 positions marked in blue, the interquartile range bracketed in orange between Q1 and Q3, and the full range bracketed in green from smallest to largest value" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the range, Q1, Q2, Q3 and interquartile range from an ordered data set, and explaining the difference between range and IQR" />',
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

    // ── Q10 Medium — frequency polygon point ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe how to plot a frequency polygon point for the interval 20≤x<30 with frequency 12.',
      answer: 'plot the point at (25,12), using the midpoint (25) and frequency (12)',
      checkMode: 'auto',
      correctAnswer: 'plot the point at (25,12), using the midpoint (25) and frequency (12)',
      explanation: 'The midpoint of 20≤x<30 is (20+30)÷2 = 25. The frequency is 12. Plot the point at coordinates (25, 12) on the graph.',
    },

    // ── Q11 Hard — comparing frequency polygons ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho's frequency polygon for one data set peaks higher than Lerato's polygon for a different data set, both plotted on the same axes. What does this likely indicate?",
      answer: "It suggests Sipho's data set has a higher concentration of values around that particular interval compared to Lerato's data set.",
      checkMode: 'self',
    },

    // ── Q12 Easy — range ─────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the range of the data set 22, 8, 45, 30, 12.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Range = largest − smallest = 45 − 8 = 37.',
    },

    // ── Q13 Medium — quartiles ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find Q1, Q2 and Q3 of the ordered data: 5, 9, 13, 17, 21, 25, 29, 33.',
      answer: 'Q1=11, Q2=19, Q3=27',
      checkMode: 'auto',
      correctAnswer: 'Q1=11, Q2=19, Q3=27',
      correctAnswers: ['Q1=11, Q2=19, Q3=27', 'Q1 = 11, Q2 = 19, Q3 = 27', '11, 19, 27'],
      explanation: 'Q2 (median) = (17+21)÷2 = 19. Lower half 5,9,13,17 → Q1 = (9+13)÷2 = 11. Upper half 21,25,29,33 → Q3 = (25+29)÷2 = 27.',
    },

    // ── Q14 Hard — IQR and what it represents ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the quartiles from Q13, find the interquartile range and explain what it represents.',
      answer: 'IQR=27-11=16. This represents the spread of the middle 50% of the data, providing a measure of spread that is less affected by extreme values than the full range.',
      checkMode: 'self',
    },

    // ── Q15 Hard — median equals Q2 ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the median always equals Q2. Is he correct? Explain.',
      answer: 'Yes — by definition, Q2 (the second quartile) is the same as the median, since both represent the middle value (50th percentile) of an ordered data set.',
      checkMode: 'self',
    },

    // ── Q16 Hard — small IQR relative to range ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A data set has Q1=20 and Q3=50. Find the interquartile range, then explain what a small IQR compared to the full range would suggest about the data.',
      answer: 'IQR=50-20=30. A small IQR relative to the full range suggests the middle 50% of data is tightly clustered, with possibly more extreme values pulling the full range wider, hinting at potential outliers or a skewed distribution.',
      checkMode: 'self',
    },

    // ── Q17 Hard — approximate mean from grouped data ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the approximate mean of grouped data with intervals 10≤x<20 (freq 5), 20≤x<30 (freq 9), 30≤x<40 (freq 6), using midpoints.',
      answer: 'Midpoints: 15,25,35. Sum=(15×5)+(25×9)+(35×6)=75+225+210=510. Total frequency=20. Mean=510÷20=25.5.',
      checkMode: 'self',
    },

    // ── Q18 Hard — calculator mean accuracy for grouped data ─────────────────
    {
      difficulty: 'Hard',
      question: "Lerato says a calculator's mean function gives the exact mean for grouped data. Is this always accurate? Explain.",
      answer: 'No — for grouped data, even the calculator only provides an approximate mean based on the midpoints you input, since the exact individual values within each interval are unknown.',
      checkMode: 'self',
    },

    // ── Q19 Hard — 40th percentile in context ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle finds the 40th percentile of a data set falls in the interval 25≤x<35. Explain what this means in context.',
      answer: 'It means approximately 40% of the data values fall below the range 25≤x<35, placing this interval as the location where the 40th percentile value lies.',
      checkMode: 'self',
    },

    // ── Q20 Hard — range vs IQR outlier reasoning ────────────────────────────
    {
      difficulty: 'Hard',
      question: "A data set's range is 60, but its interquartile range is only 12. Sipho concludes there must be at least one outlier. Is his reasoning sound? Explain.",
      answer: 'His reasoning is reasonable but not absolutely certain — a large gap between range and IQR often suggests outliers pulling the range wider than the tightly clustered middle 50%, but this should still be investigated by examining the actual data values rather than assumed automatically.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered statistics.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
