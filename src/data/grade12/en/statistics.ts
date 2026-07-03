import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: minimum/maximum → blue (#2563eb), quartiles → orange (#ea580c), median → green (#16a34a)
// Section 2: mean → blue (#2563eb), median → orange (#ea580c), skew direction → red (#dc2626)
// Section 3: mean centre → blue (#2563eb), 1 SD → green (#16a34a), 2 SD → orange (#ea580c), 3 SD → red (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistics',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: FIVE NUMBER SUMMARY, BOX AND WHISKER AND OGIVES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary-box-whisker-ogives',
      title: 'Revision — Five Number Summary, Box and Whisker and Ogives',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We revise key Grade 11 statistics. The <strong>five number summary</strong> consists of the ${bl('minimum')}, ${or('Q1')}, ${gr('median (Q2)')}, ${or('Q3')} and ${bl('maximum')}. A <strong>box and whisker diagram</strong> represents this visually — a box from Q1 to Q3 with a line at the median, and whiskers extending to the minimum and maximum. An <strong>ogive</strong> is a cumulative frequency curve plotted against upper class boundaries — used to estimate medians, quartiles and percentiles by reading across from the relevant cumulative frequency value. <strong>Standard deviation</strong> measures how spread out data is from the mean — a small standard deviation means data is tightly clustered, a large one means it is more spread out.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maximum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quartiles (Q1, Q3)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median (Q2)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Minimum &amp; Maximum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest and largest values in the data set — the endpoints of the whiskers.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q1 and Q3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The lower and upper quartiles — the medians of the lower and upper halves of the data.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Median (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The middle value of the data set — shown by the line inside the box.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Ogive</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A cumulative frequency curve — plot cumulative frequency against upper class boundaries and join with a smooth curve.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Box and whisker structure</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;align-items:center;gap:0;margin-bottom:12px;font-size:13px;font-weight:600;overflow-x:auto;">` +
        `<span style="color:#2563eb;white-space:nowrap;">Min</span>` +
        `<span style="flex:1;min-width:16px;height:2px;background:#2563eb;margin:0 4px;"></span>` +
        `<span style="border:2px solid #ea580c;padding:6px 16px;color:#ea580c;white-space:nowrap;">Q1</span>` +
        `<span style="border:2px solid #ea580c;border-left:none;background:#f0fdf4;padding:6px 20px;white-space:nowrap;"><span style="color:#16a34a;font-weight:700;">Median</span></span>` +
        `<span style="border:2px solid #ea580c;border-left:none;padding:6px 16px;color:#ea580c;white-space:nowrap;">Q3</span>` +
        `<span style="flex:1;min-width:16px;height:2px;background:#2563eb;margin:0 4px;"></span>` +
        `<span style="color:#2563eb;white-space:nowrap;">Max</span>` +
        `</div>` +
        `<p style="margin:0;font-size:13px;color:#6b7280;">The box spans from ${or('Q1')} to ${or('Q3')}. The line inside the box is the ${gr('median')}. The whiskers extend to the ${bl('minimum')} and ${bl('maximum')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading the ogive</p>` +
        `<p style="margin:0;color:#1e3a8a;">To estimate the median, read across from 50% of the total frequency to the curve, then read down to the horizontal axis. For quartiles, read across from 25% (Q1) and 75% (Q3) of the total. For percentiles, use the relevant percentage of the total frequency.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the five number summary of: 5, 9, 12, 15, 18, 22, 27, 31, 38.',
          answer: `${bl('Min = 5')}, ${or('Q1 = 10.5')}, ${gr('Median = 18')}, ${or('Q3 = 29')}, ${bl('Max = 38')}`,
          steps: [
            'Arrange in ascending order: 5, 9, 12, 15, 18, 22, 27, 31, 38 (already ordered). There are 9 values.',
            `${bl('Minimum')} = ${bl('5')} (the smallest value). ${bl('Maximum')} = ${bl('38')} (the largest value).`,
            `${gr('Median')} = ${gr('18')} — the 5th value in a set of 9 is the middle value.`,
            `Lower half (values below the median): 5, 9, 12, 15. ${or('Q1')} = median of lower half = (9 + 12) ÷ 2 = ${or('10.5')}.`,
            `Upper half (values above the median): 22, 27, 31, 38. ${or('Q3')} = median of upper half = (27 + 31) ÷ 2 = ${or('29')}.`,
            `<strong>Five number summary:</strong> ${bl('Min = 5')}, ${or('Q1 = 10.5')}, ${gr('Median = 18')}, ${or('Q3 = 29')}, ${bl('Max = 38')}.`,
          ],
        },
        {
          question: 'A data set has intervals 0–10 (freq 4), 10–20 (freq 8), 20–30 (freq 12), 30–40 (freq 6), total 30. Find the cumulative frequencies for the ogive.',
          answer: 'Up to 10: 4 | Up to 20: 12 | Up to 30: 24 | Up to 40: 30',
          steps: [
            'Cumulative frequency adds frequencies progressively from the lowest interval upwards.',
            'Up to 10 (upper boundary 10): frequency = 4. Cumulative frequency = <strong>4</strong>.',
            'Up to 20 (upper boundary 20): 4 + 8 = <strong>12</strong>.',
            'Up to 30 (upper boundary 30): 12 + 12 = <strong>24</strong>.',
            'Up to 40 (upper boundary 40): 24 + 6 = <strong>30</strong>. This equals the total — always check.',
            'Plot the ogive using points (10, 4), (20, 12), (30, 24), (40, 30) with upper class boundaries on the horizontal axis and cumulative frequency on the vertical axis.',
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the five number summary, box and whisker diagram and how to draw and read an ogive from a frequency table" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SYMMETRIC AND SKEWED DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetric-skewed-data',
      title: 'Symmetric and Skewed Data',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Symmetric data has equal spread on both sides of the ${bl('mean')} — the ${bl('mean')}, ${or('median')} and mode are approximately equal and the distribution is bell-shaped. <strong>Positively skewed</strong> (right-skewed) data has a longer tail to the right, pulling the ${bl('mean')} above the ${or('median')} (${bl('mean')} &gt; ${or('median')} &gt; mode). <strong>Negatively skewed</strong> (left-skewed) data has a longer tail to the left, pulling the ${bl('mean')} below the ${or('median')} (${bl('mean')} &lt; ${or('median')} &lt; mode). Box and whisker diagrams reveal skewness — if the ${or('median')} line sits closer to Q1 the data is positively skewed, if closer to Q3 it is negatively skewed.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mean')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('median')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('skew direction')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of distribution</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Symmetric</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Mean ≈ Median ≈ Mode. Bell-shaped — equal tails on both sides.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Median line sits in the centre of the box.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positively Skewed (Right)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Mean')} &gt; ${or('Median')} &gt; Mode. Longer tail to the ${re('right')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Median sits closer to Q1; right whisker is longer.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negatively Skewed (Left)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Mean')} &lt; ${or('Median')} &lt; Mode. Longer tail to the ${re('left')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Median sits closer to Q3; left whisker is longer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Memory aid</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('mean')} is always pulled towards the ${re('tail')} — it follows the direction of the skew. The ${or('median')} is more resistant to extreme values. Compare ${bl('mean')} and ${or('median')} to identify the direction of skewness.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A data set has mean = 65, median = 72, mode = 78. Describe the skewness.',
          answer: `The data is ${re('negatively (left) skewed')}`,
          steps: [
            `Identify the measures of central tendency: ${bl('mean')} = ${bl('65')}, ${or('median')} = ${or('72')}, mode = 78.`,
            `Compare: ${bl('mean')} &lt; ${or('median')} &lt; mode → 65 &lt; 72 &lt; 78.`,
            `Since ${bl('mean')} &lt; ${or('median')} &lt; mode, the data is ${re('negatively (left) skewed')}.`,
            `${re('Explanation:')} The ${bl('mean')} is being pulled down by a longer tail of lower values to the left — this is characteristic of negative skewness.`,
          ],
        },
        {
          question: 'Sipho has a box and whisker diagram where Q1 = 20, median = 22, Q3 = 35, minimum = 15, maximum = 50. Describe the skewness.',
          answer: `The data is ${re('positively (right) skewed')}`,
          steps: [
            `Examine the position of the ${or('median')} within the box: Q1 = 20, ${or('median')} = ${or('22')}, Q3 = 35.`,
            `Distance from Q1 to ${or('median')}: 22 − 20 = 2 (short). Distance from ${or('median')} to Q3: 35 − 22 = 13 (long).`,
            `Examine the whiskers: left whisker = 20 − 15 = 5 (short). Right whisker = 50 − 35 = 15 (long).`,
            `The ${or('median')} sits much closer to Q1 than to Q3, and the right whisker is much longer than the left whisker — this confirms ${re('positive (right) skewness')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining symmetric and skewed distributions with examples of positive and negative skewness using box and whisker diagrams" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE NORMAL DISTRIBUTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'normal-distribution',
      title: 'The Normal Distribution',
      icon: '🔔',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>normal distribution</strong> is a perfectly symmetric bell-shaped distribution where the ${bl('mean')}, ${or('median')} and mode are all equal and sit at the centre. It follows the <strong>68-95-99.7 rule</strong>: approximately ${gr('68%')} of data falls within ${gr('1 standard deviation')} of the mean (between μ − σ and μ + σ), ${or('95%')} within ${or('2 standard deviations')}, and ${re('99.7%')} within ${re('3 standard deviations')}. This rule allows us to calculate the percentage of data falling in any given interval around the mean.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mean centre (μ)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('1 standard deviation — 68%')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('2 standard deviations — 95%')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('3 standard deviations — 99.7%')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 68-95-99.7 rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('68%')} of data falls within ${gr('1 standard deviation')} of the mean: between ${bl('μ')} − ${gr('σ')} and ${bl('μ')} + ${gr('σ')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('95%')} of data falls within ${or('2 standard deviations')} of the mean: between ${bl('μ')} − ${or('2σ')} and ${bl('μ')} + ${or('2σ')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('99.7%')} of data falls within ${re('3 standard deviations')} of the mean: between ${bl('μ')} − ${re('3σ')} and ${bl('μ')} + ${re('3σ')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using symmetry to find outer percentages</p>` +
        `<p style="margin:0;color:#1e3a8a;">Since the normal distribution is symmetric around the ${bl('mean')}, the percentage outside a given band is split equally between the two tails. For example, 5% falls outside 2 standard deviations — so 2.5% falls above μ + 2σ and 2.5% falls below μ − 2σ.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The heights of Grade 12 learners are normally distributed with mean 165 cm and standard deviation 8 cm. Find the percentage of learners with height between 157 cm and 173 cm.',
          answer: `Approximately ${gr('68%')} of learners`,
          steps: [
            `Identify the boundaries: 157 = 165 − 8 = ${bl('μ')} − ${gr('σ')} and 173 = 165 + 8 = ${bl('μ')} + ${gr('σ')}.`,
            `These boundaries are exactly ${gr('1 standard deviation')} from the mean on each side.`,
            `By the 68-95-99.7 rule, approximately ${gr('68%')} of data falls within 1 standard deviation of the mean.`,
            `<strong>Answer:</strong> Approximately ${gr('68%')} of learners have a height between 157 cm and 173 cm.`,
          ],
        },
        {
          question: 'Using the same distribution (mean 165 cm, standard deviation 8 cm), find the percentage of learners taller than 181 cm.',
          answer: `Approximately ${or('2.5%')} of learners`,
          steps: [
            `Find how many standard deviations 181 cm is from the mean: 181 = 165 + 2 × 8 = ${bl('μ')} + ${or('2σ')}.`,
            `By the 68-95-99.7 rule, ${or('95%')} of data falls within ${or('2 standard deviations')} of the mean.`,
            `Therefore ${or('5%')} falls outside 2 standard deviations (in both tails combined).`,
            `Since the distribution is symmetric, 5% ÷ 2 = ${or('2.5%')} falls above ${bl('μ')} + ${or('2σ')}.`,
            `<strong>Answer:</strong> Approximately ${or('2.5%')} of learners are taller than 181 cm.`,
          ],
        },
        {
          question: 'Lerato says that in a normal distribution, virtually all data falls within 3 standard deviations of the mean. Is she correct?',
          answer: `Yes — Lerato is ${re('correct')}`,
          steps: [
            `By the 68-95-99.7 rule, ${re('99.7%')} of data falls within ${re('3 standard deviations')} of the mean (between ${bl('μ')} − ${re('3σ')} and ${bl('μ')} + ${re('3σ')}).`,
            `Only 0.3% of data falls outside 3 standard deviations — an extremely small proportion.`,
            `<strong>Answer:</strong> Yes — Lerato is correct. ${re('Virtually all')} data (99.7%) in a normal distribution falls within 3 standard deviations, making her statement effectively correct for practical purposes.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the normal distribution and the 68-95-99.7 rule with worked examples using standard deviation intervals" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SAMPLING AND BIAS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sampling-and-bias',
      title: 'Sampling and Bias',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('population')} is the entire group being studied. A ${or('sample')} is a smaller selected subset used to represent the ${bl('population')}. A <strong>representative sample</strong> accurately reflects the characteristics of the whole ${bl('population')}. ${re('Bias')} occurs when the ${or('sample')} is selected in a way that systematically favours certain outcomes — common sources of ${re('bias')} include convenience sampling (only sampling what is easy to access), voluntary response ${re('bias')} (only people with strong opinions respond), and leading questions. Larger ${or('samples')} are generally more reliable but still susceptible to systematic ${re('bias')} if the selection method is flawed.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('population')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sample')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('bias')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Population</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The complete group being investigated — every member we want to draw conclusions about.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sample</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A subset of the population selected for study. A representative sample mirrors the population's characteristics.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Bias</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Systematic error introduced by a flawed selection method — results in a sample that does not fairly represent the population.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Convenience sampling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Selecting whoever is easiest to reach — almost always introduces bias because accessibility is not random.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Important</p>` +
        `<p style="margin:0;color:#7f1d1d;">A larger ${or('sample')} reduces random error but does ${re('not')} fix systematic ${re('bias')}. If the selection method is flawed, collecting more data will simply reinforce the ${re('biased')} result. Always evaluate both the size and the selection method of a ${or('sample')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A school wants to know learners\' opinions on the tuck shop menu. The principal surveys only the Grade 8 learners. Identify the bias.',
          answer: `This is a ${re('biased')} sample — ${or('Grade 8 learners')} do not represent the whole ${bl('school population')}`,
          steps: [
            `Identify the ${bl('population')}: all learners at the school.`,
            `Identify the ${or('sample')}: only Grade 8 learners.`,
            `Assess representativeness: Grade 8 learners may have very different preferences to older learners — they are only a subset of one year group.`,
            `The ${or('sample')} is ${re('not representative')} of the whole ${bl('school population')} — this is a ${re('biased')} sample. The conclusions drawn from this survey cannot be generalised to the entire school.`,
          ],
        },
        {
          question: 'Sipho surveys people leaving a gym about exercise habits. He concludes that 90% of South Africans exercise regularly. Is his conclusion valid?',
          answer: `No — this is a heavily ${re('biased')} convenience ${or('sample')} that cannot be generalised to all South Africans`,
          steps: [
            `Identify the ${bl('population')} Sipho wants to generalise to: all South Africans.`,
            `Identify the ${or('sample')}: people leaving a gym.`,
            `Assess the ${re('bias')}: gym-goers are far more likely to exercise regularly than the general ${bl('population')} — they have self-selected into a group with strong exercise habits.`,
            `This is a heavily ${re('biased')} convenience ${or('sample')}. The 90% figure only reflects gym users, not the broader ${bl('population')}.`,
            `<strong>Conclusion:</strong> No — Sipho's conclusion is not valid. The ${or('sample')} is not representative of all South Africans, and the result cannot be generalised.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining population vs sample, representative samples, and common sources of bias including convenience sampling and voluntary response bias" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SCATTER PLOTS, LEAST SQUARES REGRESSION LINE AND CORRELATION COEFFICIENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scatter-plots-regression-correlation',
      title: 'Scatter Plots, Least Squares Regression Line and Correlation Coefficient',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>scatter plot</strong> displays bivariate data (two related variables) as dots, allowing us to visually identify trends. The <strong>least squares ${bl('regression line')}</strong> (line of best fit) has the equation y = a + bx, where ${bl('b')} = gradient and ${bl('a')} = y-intercept. This line minimises the sum of squared vertical distances from each point to the line. The <strong>correlation coefficient ${or('r')}</strong> measures the strength and direction of the linear relationship: ${or('r')} = 1 is perfect ${gr('positive correlation')}, ${or('r')} = −1 is perfect ${re('negative correlation')}, ${or('r')} = 0 means no linear correlation. Values between 0.75 and 1 (or −1 and −0.75) indicate strong correlation, 0.5 to 0.75 moderate correlation, and below 0.5 weak correlation. On the Casio fx-82 series: enter STAT mode, select A+BX (linear regression), enter x and y values, then access the regression menu to find ${bl('a')}, ${bl('b')} and ${or('r')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('positive correlation')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative correlation')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('regression line / a and b')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('r value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Interpreting r</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Positive r')} (0 to 1): as x increases, y tends to increase. ${or('r')} close to ${gr('1')} = strong ${gr('positive')} linear correlation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;">${re('Negative r')} (−1 to 0): as x increases, y tends to decrease. ${or('r')} close to ${re('−1')} = strong ${re('negative')} linear correlation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">0</span>` +
        `<p style="margin:0;font-size:14px;">${or('r')} near 0: no linear relationship between x and y — the scatter plot shows a cloud of points with no clear direction.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Casio fx-82 tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">MODE → STAT → A+BX. Enter all x values then y values. Press SHIFT + 1 (STAT) → Reg to access ${bl('a')}, ${bl('b')}, and ${or('r')}. Always check ${or('r')} before using the ${bl('regression line')} to make predictions — a weak ${or('r')} means the model is unreliable.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A scatter plot shows hours studied vs test scores rising in a roughly straight line with r = 0.89. Describe the relationship.',
          answer: `${or('r')} = 0.89 indicates a ${gr('strong positive linear correlation')}`,
          steps: [
            `Identify the ${or('r')} value: ${or('r')} = ${or('0.89')}.`,
            `Determine direction: ${or('r')} is ${gr('positive')} — as hours studied increases, test scores tend to increase.`,
            `Determine strength: ${or('r')} = 0.89 is between 0.75 and 1, indicating a ${gr('strong')} linear correlation.`,
            `<strong>Conclusion:</strong> ${or('r')} = 0.89 indicates a ${gr('strong positive linear correlation')} — as hours studied increases, test scores tend to increase at a consistent rate.`,
          ],
        },
        {
          question: 'Lerato has bivariate data and finds regression line y = 15 + 4.2x and correlation coefficient r = 0.93. Predict y when x = 10.',
          answer: `y = ${bl('57')}; prediction is reliable since ${or('r')} = 0.93 is close to 1`,
          steps: [
            `Write down the ${bl('regression line')}: y = ${bl('15')} + ${bl('4.2')}x.`,
            `Substitute x = 10: y = 15 + 4.2 × 10 = 15 + 42 = ${bl('57')}.`,
            `Check reliability using ${or('r')}: ${or('r')} = ${or('0.93')} is between 0.75 and 1 — this is a ${gr('strong positive')} correlation.`,
            `Since ${or('r')} is close to 1 and x = 10 is within the data range, this prediction is ${gr('reliable')}.`,
            `<strong>Answer:</strong> y = ${bl('57')}.`,
          ],
        },
        {
          question: 'Thabo calculates r = −0.3 for his data set. Describe what this means.',
          answer: `${or('r')} = −0.3 indicates a ${re('weak negative linear correlation')} — the linear model is a poor fit`,
          steps: [
            `Identify the ${or('r')} value: ${or('r')} = ${or('−0.3')}.`,
            `Determine direction: ${or('r')} is ${re('negative')} — there is a slight tendency for y to decrease as x increases.`,
            `Determine strength: |${or('r')}| = 0.3 is below 0.5, indicating a ${re('weak')} linear correlation.`,
            `<strong>Conclusion:</strong> ${or('r')} = −0.3 indicates a ${re('weak negative linear correlation')} — there is a slight tendency for y to decrease as x increases, but the relationship is very unreliable and the ${bl('regression line')} is a poor fit for this data.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining scatter plots, how to find and interpret the least squares regression line, and what the correlation coefficient r means with examples of strong, moderate, and weak correlation" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — interquartile range from box and whisker ───────────────────
    {
      difficulty: 'Easy',
      question: 'Using the diagram, find the interquartile range.\n[Diagram: box and whisker on a number line 0–80. Min=10, Q1=25, Median=35, Q3=55, Max=75.]',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'IQR = Q3 − Q1 = 55 − 25 = 30',
    },

    // ── Q2 Medium — range from box and whisker ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the diagram, find the range.\n[Diagram: box and whisker on a number line 0–80. Min=10, Q1=25, Median=35, Q3=55, Max=75.]',
      answer: '65',
      checkMode: 'auto',
      correctAnswer: '65',
      explanation: 'Range = Maximum − Minimum = 75 − 10 = 65',
    },

    // ── Q3 Hard — skewness from box and whisker ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the diagram, describe the skewness of the data and justify your answer.\n[Diagram: box and whisker on a number line 0–80. Min=10, Q1=25, Median=35, Q3=55, Max=75.]',
      answer: 'The median (35) sits closer to Q1 (25) than to Q3 (55), and the right whisker (20 units) is longer than the left whisker (15 units) — this indicates positive (right) skewness.',
      checkMode: 'self',
    },

    // ── Q4 Medium — percentage between Q1 and Q3 ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the diagram, what percentage of the data falls between Q1 and Q3?\n[Diagram: box and whisker on a number line 0–80. Min=10, Q1=25, Median=35, Q3=55, Max=75.]',
      answer: '50%',
      checkMode: 'auto',
      correctAnswer: '50%',
      correctAnswers: ['50%', '50'],
      explanation: 'By definition, the interquartile range (the box) always contains exactly 50% of the data — 25% below the median and 25% above it.',
    },

    // ── Q5 Hard — compare skewness of two datasets ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'A second data set has Q1=30, median=45, Q3=50. Compare its skewness to the diagram and state which is more symmetric.\n[Diagram: box and whisker on a number line 0–80. Min=10, Q1=25, Median=35, Q3=55, Max=75.]',
      answer: 'The second data set has median (45) closer to Q3 (50) than Q1 (30), indicating negative skewness. The original diagram is positively skewed. Neither is symmetric — but the second set\'s box is less extreme in its skew shape depending on whisker lengths.',
      checkMode: 'self',
    },

    // ── Q6 Easy — 68% rule from normal distribution ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Using the diagram, what percentage of data falls between 60 and 80?\n[Diagram: normal distribution bell curve. Mean μ=70, standard deviation σ=10. Vertical lines at 50, 60, 70, 80 and 90.]',
      answer: '68%',
      checkMode: 'auto',
      correctAnswer: '68%',
      correctAnswers: ['68%', '68'],
      explanation: '60 = μ − σ = 70 − 10 and 80 = μ + σ = 70 + 10. By the 68-95-99.7 rule, 68% of data falls within 1 standard deviation of the mean.',
    },

    // ── Q7 Medium — 95% rule from normal distribution ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the diagram, what percentage of data falls between 50 and 90?\n[Diagram: normal distribution bell curve. Mean μ=70, standard deviation σ=10. Vertical lines at 50, 60, 70, 80 and 90.]',
      answer: '95%',
      checkMode: 'auto',
      correctAnswer: '95%',
      correctAnswers: ['95%', '95'],
      explanation: '50 = μ − 2σ = 70 − 20 and 90 = μ + 2σ = 70 + 20. By the 68-95-99.7 rule, 95% of data falls within 2 standard deviations of the mean.',
    },

    // ── Q8 Hard — percentage above 2 SD ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the diagram, find the percentage of data that falls above 90.\n[Diagram: normal distribution bell curve. Mean μ=70, standard deviation σ=10. Vertical lines at 50, 60, 70, 80 and 90.]',
      answer: '95% falls within 2 standard deviations (50 to 90). 5% falls outside. By symmetry, 2.5% falls above 90.',
      checkMode: 'self',
    },

    // ── Q9 Hard — percentile from normal distribution ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the diagram, a learner scores 80. What percentage of learners scored below them?\n[Diagram: normal distribution bell curve. Mean μ=70, standard deviation σ=10. Vertical lines at 50, 60, 70, 80 and 90.]',
      answer: '80 = μ + σ. 68% falls between μ − σ and μ + σ. So 34% falls between μ and μ + σ. Plus 50% below the mean: 50 + 34 = 84% of learners scored below 80.',
      checkMode: 'self',
    },

    // ── Q10 Medium — skewness from mean and median ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'A data set has mean=45 and median=52. Describe the skewness.',
      answer: 'negatively (left) skewed since mean < median',
      checkMode: 'auto',
      correctAnswer: 'negatively skewed',
      correctAnswers: ['negatively skewed', 'negative skew', 'left skewed', 'negatively (left) skewed'],
      explanation: 'Since mean (45) < median (52), the data is negatively (left) skewed — the mean is pulled towards a longer left tail.',
    },

    // ── Q11 Easy — type of sampling bias ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho surveys only his friends about their favourite sport. What type of bias is this?',
      answer: 'convenience sampling bias',
      checkMode: 'auto',
      correctAnswer: 'convenience sampling bias',
      correctAnswers: ['convenience sampling bias', 'convenience bias', 'convenience sampling'],
      explanation: 'Surveying only his friends is convenience sampling — selecting whoever is easiest to reach — which introduces bias because his friends are not representative of the broader population.',
    },

    // ── Q12 Hard — validity of large voluntary response sample ───────────────
    {
      difficulty: 'Hard',
      question: 'Lerato conducts a voluntary online survey and gets 500 responses. She claims her sample is large enough to be representative. Is she correct? Explain.',
      answer: 'Not necessarily — voluntary response surveys attract people with strong opinions, which introduces systematic bias regardless of sample size; a large biased sample is still biased.',
      checkMode: 'self',
    },

    // ── Q13 Medium — describe correlation coefficient ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'A scatter plot shows r=0.92. Describe the correlation.',
      answer: 'strong positive linear correlation',
      checkMode: 'auto',
      correctAnswer: 'strong positive linear correlation',
      correctAnswers: ['strong positive linear correlation', 'strong positive correlation'],
      explanation: 'r = 0.92 is between 0.75 and 1, indicating strong positive linear correlation — as x increases, y tends to increase at a consistent rate.',
    },

    // ── Q14 Easy — predict y from regression line ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A regression line is y=8+3.5x. Find y when x=6.',
      answer: '29',
      checkMode: 'auto',
      correctAnswer: '29',
      explanation: 'y = 8 + 3.5(6) = 8 + 21 = 29',
    },

    // ── Q15 Hard — predict and comment on reliability ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo has a regression line y=50−2.3x and r=−0.88. Predict y when x=15 and comment on the reliability.',
      answer: 'y = 50 − 2.3(15) = 50 − 34.5 = 15.5. Since r = −0.88 indicates strong negative correlation, the prediction is reliable if x=15 is within the original data range.',
      checkMode: 'self',
    },

    // ── Q16 Hard — r=0 does not mean completely unrelated ────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says a correlation coefficient of r=0 means the two variables are completely unrelated. Is she fully correct? Explain.',
      answer: 'Not fully — r=0 means there is no LINEAR relationship, but a strong non-linear relationship (like quadratic or exponential) could still exist between the variables.',
      checkMode: 'self',
    },

    // ── Q17 Medium — estimate median from ogive ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A data set has cumulative frequencies: up to 20=8, up to 40=20, up to 60=32, up to 80=40 (total=40). Estimate the median from the ogive.',
      answer: 'Median is at the 20th value. Cumulative frequency reaches 20 at the upper boundary of 40. The median is approximately 40.',
      checkMode: 'self',
    },

    // ── Q18 Hard — estimate Q1 and Q3 from ogive ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same ogive (cumulative frequencies: up to 20=8, up to 40=20, up to 60=32, up to 80=40, total=40), estimate Q1 and Q3.',
      answer: 'Q1 is at 25% of 40 = 10th value. Cumulative frequency reaches 10 between the 0–20 interval (reaches 8) and 20–40 interval (reaches 20). Q1 ≈ 26. Q3 is at 75% of 40 = 30th value. Cumulative frequency reaches 30 in the 40–60 interval. Q3 ≈ 50.',
      checkMode: 'self',
    },

    // ── Q19 Hard — regression line passes through mean point ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says the regression line always passes through the mean point (x̄, ȳ). Is he correct? Explain.',
      answer: 'Yes — the least squares regression line always passes through the mean of x and mean of y. This is a mathematical property of how the line is calculated.',
      checkMode: 'self',
    },

    // ── Q20 Hard — normal distribution probability ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A data set has mean=78 and standard deviation=6, normally distributed. Find the probability that a randomly selected value lies between 66 and 90.',
      answer: '66 = 78 − 2(6) = μ − 2σ and 90 = 78 + 2(6) = μ + 2σ. By the 68-95-99.7 rule, 95% of data falls within 2 standard deviations. Probability ≈ 0.95.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered statistics.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
