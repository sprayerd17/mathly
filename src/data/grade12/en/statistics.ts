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

    // ── Q21 Hard — working backwards to a constraint on σ ─────────────────────
    {
      difficulty: 'Hard',
      question: 'A factory fills bottles with a mean volume of 500 mL. Volumes are normally distributed with standard deviation σ mL. Quality control rejects a bottle only if its volume lies more than 2 standard deviations from the mean. A bottle containing 485 mL is NOT rejected.\n(a) Write an inequality in σ that must hold for this bottle to pass inspection.\n(b) Hence determine the smallest possible whole-number value of σ consistent with this information.',
      answer: '(a) For the bottle to pass, it must lie within 2 standard deviations of the mean: |500 − 485| ≤ 2σ, i.e. 15 ≤ 2σ, so σ ≥ 7.5.\n(b) The smallest whole-number value of σ satisfying σ ≥ 7.5 is σ = 8 mL.',
      checkMode: 'self',
    },

    // ── Q22 Hard — outlier decision + mean vs median recommendation ───────────
    {
      difficulty: 'Hard',
      question: "A quality inspector records the diameters (in mm) of 9 ball bearings from a machine: 20, 21, 21, 22, 22, 22, 23, 23, 46. The 46 mm reading is suspected to be a measurement error.\n(a) Find the five-number summary of all 9 values as recorded, and use the rule that a value below Q1 − 1.5×IQR or above Q3 + 1.5×IQR is an outlier to test whether 46 mm should be classified as an outlier.\n(b) The inspector must report a single 'typical' diameter to the production manager. Using your answer to (a) and how the mean and median respond differently to extreme values, explain which measure of central tendency is more appropriate here, and why.",
      answer: "(a) Sorted: 20, 21, 21, 22, 22, 22, 23, 23, 46. Median = 22 (5th value). Lower half (20, 21, 21, 22): Q1 = (21+21)÷2 = 21. Upper half (22, 23, 23, 46): Q3 = (23+23)÷2 = 23. IQR = 23 − 21 = 2. Upper fence = Q3 + 1.5×IQR = 23 + 3 = 26. Since 46 > 26, it IS an outlier.\n(b) Mean (including 46) = 220 ÷ 9 ≈ 24.44, noticeably pulled upward by the single 46 mm reading, while the median (22) is unaffected by it since it depends only on the middle position. Because 46 mm has already been identified as an outlier in (a), the median is the more appropriate 'typical' value to report — the mean is distorted by the one extreme (likely erroneous) reading, while the median reflects the true centre of the other eight consistent measurements.",
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered statistics.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  // ═════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — bivariate data: scatter plots, least squares regression
  // line (y = a + bx), correlation coefficient r, residuals.
  // Phase 1 (content only): questions that will eventually carry a scatter
  // plot diagram are phrased self-contained — every coordinate pair or
  // regression detail needed is stated in the question text itself. No
  // diagramSvg fields are added in this phase.
  //
  // Skill block layout (repeats in each of the 3 sets, Easy → Hard):
  //   Block A (Q1–3)   Reading/plotting scatter plot points, identifying
  //                     independent/dependent variable
  //   Block B (Q4–7)   Interpreting correlation strength/direction from r
  //   Block C (Q8–10)  Using a given regression line to predict y from x
  //   Block D (Q11–13) Residuals (actual y − predicted y)
  //   Block E (Q14–16) Combined prediction + reliability judgement using r
  //   Block F (Q17–20) Regression line properties, extrapolation danger,
  //                     comparing correlations, correlation vs causation
  // ═════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block A: reading scatter plot points / variables (Q1–3) ────────
        {
          difficulty: 'Easy',
          question: 'A scatter plot compares the number of hours a learner studies (x) and their test mark out of 100 (y). Which variable is the independent variable?',
          answer: 'Hours studied (x)',
          checkMode: 'auto',
          correctAnswer: 'hoursstudied',
          correctAnswers: ['hours studied', 'hours studied (x)', 'x', 'hours'],
          explanation: 'The independent variable is the one we control or choose — hours studied — plotted on the x-axis. The test mark depends on it, so it is the dependent variable (y).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="115" cy="201" r="4" fill="#2563eb"/><circle cx="145" cy="168" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="235" cy="108.6" r="4" fill="#2563eb"/><circle cx="295" cy="66.8" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Test mark (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two data points on a scatter plot of hours studied (x) vs test mark (y) are plotted at (4, 68) and (7, 74). Which learner studied for more hours, and by how many more hours?',
          answer: 'The learner at (7, 74) studied more, by 3 hours',
          checkMode: 'auto',
          correctAnswer: '3',
          correctAnswers: ['3', '3 hours', '(7,74) by 3 hours'],
          explanation: 'The x-values (hours studied) are 4 and 7. The learner at (7, 74) studied more, and the difference is 7 − 4 = 3 hours.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="175" cy="95.4" r="4" fill="#2563eb"/><circle cx="265" cy="82.2" r="4" fill="#2563eb"/><text x="175" y="83.4" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4, 68)</text><text x="265" y="70.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(7, 74)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Test mark (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A scatter plot shows the points (2, 20), (3, 35), (5, 55), (6, 62), (8, 81) for hours studied (x) vs test mark (y). As x increases across these points, what happens to y?',
          answer: 'y increases as x increases',
          checkMode: 'auto',
          correctAnswer: 'yincreases',
          correctAnswers: ['y increases', 'increases', 'y increases as x increases'],
          explanation: 'Reading the points in order of increasing x (2, 3, 5, 6, 8), the y-values also increase (20, 35, 55, 62, 81) — the points trend upward, suggesting a positive relationship.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="115" cy="201" r="4" fill="#2563eb"/><circle cx="145" cy="168" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="235" cy="108.6" r="4" fill="#2563eb"/><circle cx="295" cy="66.8" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Hours studied (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Test mark (y)</text></svg>',
        },

        // ── Block B: interpreting r (Q4–7) ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A data set has correlation coefficient r = 0.95. Is this a positive or negative correlation?',
          answer: 'Positive',
          checkMode: 'auto',
          correctAnswer: 'positive',
          correctAnswers: ['positive', 'positive correlation'],
          explanation: 'Since r = 0.95 is greater than 0, the correlation is positive — as x increases, y tends to increase.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A data set has correlation coefficient r = 0.82. Describe the strength of this correlation.',
          answer: 'Strong (positive) correlation',
          checkMode: 'auto',
          correctAnswer: 'strong',
          correctAnswers: ['strong', 'strong correlation', 'strong positive correlation'],
          explanation: 'r = 0.82 lies between 0.75 and 1, which indicates a strong linear correlation.',
        },
        {
          difficulty: 'Medium',
          question: 'Two data sets have correlation coefficients r = 0.4 and r = −0.9. Which one shows the stronger linear relationship?',
          answer: 'The data set with r = −0.9',
          checkMode: 'auto',
          correctAnswer: 'r=-0.9',
          correctAnswers: ['r = -0.9', '-0.9', 'the one with r=-0.9', 'r=-0.9'],
          explanation: 'Strength is measured by the size of r regardless of sign. |−0.9| = 0.9 is greater than |0.4| = 0.4, so r = −0.9 shows the stronger (negative) linear relationship.',
        },
        {
          difficulty: 'Medium',
          question: 'A scatter plot of ice cream sales (x) vs daily temperature (y) has r = 0.05. What does this suggest about the linear relationship between the variables?',
          answer: 'There is little to no linear correlation between the variables',
          checkMode: 'auto',
          correctAnswer: 'nolinearcorrelation',
          correctAnswers: ['no linear correlation', 'little to no correlation', 'no correlation', 'very weak correlation'],
          explanation: 'r = 0.05 is very close to 0, indicating almost no linear relationship between the two variables.',
        },

        // ── Block C: regression line prediction (Q8–10) ─────────────────────
        {
          difficulty: 'Medium',
          question: 'The least squares regression line for hours studied (x) vs test mark (y) is y = 12 + 2.5x. Predict the test mark for a learner who studies for 8 hours.',
          answer: '32',
          checkMode: 'auto',
          correctAnswer: '32',
          explanation: 'y = 12 + 2.5(8) = 12 + 20 = 32.',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same regression line y = 12 + 2.5x, a learner who actually studied for 8 hours scored 35 in the test. Find the residual (actual y − predicted y) for this learner.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Predicted y = 12 + 2.5(8) = 32. Residual = actual − predicted = 35 − 32 = 3.',
        },
        {
          difficulty: 'Medium',
          question: 'A regression line for distance travelled (x, in km) vs fuel used (y, in litres) is y = 1.5 + 0.08x. Predict the fuel used for a trip of 200 km.',
          answer: '17.5 litres',
          checkMode: 'auto',
          correctAnswer: '17.5',
          correctAnswers: ['17.5', '17.5 litres', '17,5'],
          explanation: 'y = 1.5 + 0.08(200) = 1.5 + 16 = 17.5 litres.',
        },

        // ── Block D: residuals (Q11–13) ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A regression line is y = 5 + 3x. For x = 6, the actual observed value is y = 27. Calculate the residual.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Predicted y = 5 + 3(6) = 5 + 18 = 23. Residual = actual − predicted = 27 − 23 = 4.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'A regression line is y = 40 − 1.5x. For x = 10, the actual observed value is y = 22. Calculate the residual and state whether the actual point lies above or below the regression line.',
          answer: 'Residual = −3; the point lies below the regression line',
          checkMode: 'auto',
          correctAnswer: '-3below',
          correctAnswers: ['-3, below', '-3 below', 'residual -3 below the line'],
          explanation: 'Predicted y = 40 − 1.5(10) = 40 − 15 = 25. Residual = actual − predicted = 22 − 25 = −3. A negative residual means the actual point lies below the regression line.',
        },
        {
          difficulty: 'Hard',
          question: 'Zanele says that a residual of 0 means the regression line is a perfect fit for the entire data set. Is she correct? Explain.',
          answer: 'No — a residual of 0 only means that one particular point lies exactly on the line. Other points in the data set can still have large residuals, so the overall fit must be judged using all residuals (or r), not a single point.',
          checkMode: 'self',
        },

        // ── Block E: combined prediction + reliability (Q14–16) ─────────────
        {
          difficulty: 'Medium',
          question: 'A regression line for hours of extra tutoring (x) vs improvement in test mark (y, out of 100) is y = 20 + 1.8x, with correlation coefficient r = 0.93. Predict the improvement in test mark for a learner who receives 15 hours of tutoring.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'y = 20 + 1.8(15) = 20 + 27 = 47.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Using the regression line y = 20 + 1.8x and correlation coefficient r = 0.93, a data point at x = 15 has an actual y-value of 50. Calculate the residual and comment on whether r = 0.93 suggests this regression line is generally reliable for prediction.',
          answer: 'Residual = 3. Since r = 0.93 is close to 1, this indicates a strong positive correlation, so the regression line is generally a reliable model for prediction.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A second data set has regression line y = 20 + 1.8x but correlation coefficient r = 0.21. Sipho uses this line to predict y when x = 15, getting y = 47, and claims this prediction is just as trustworthy as one from a data set with r = 0.93. Is he correct? Explain.',
          answer: 'No — even though the calculation y = 47 is arithmetically correct, r = 0.21 indicates a very weak linear correlation, meaning the data points are widely scattered around the line. The prediction is far less reliable than one made using a data set with r = 0.93, which shows a strong linear pattern.',
          checkMode: 'self',
        },

        // ── Block F: regression line properties / extrapolation / causation (Q17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'A data set of hours studied (x) has x-values ranging from 1 to 10. The regression line is y = 12 + 2.5x. Thabo wants to use this line to predict the test mark for a learner who studied for 40 hours. Explain why this prediction would be unreliable.',
          answer: 'x = 40 is far outside the original data range (1 to 10). Using the regression line to predict values far beyond the range of the original data is called extrapolation, and it is unreliable because there is no evidence the linear trend continues beyond the observed data.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A data set of hours studied (x) vs test mark (y) has mean x̄ = 5.5 hours and mean ȳ = 51.75 marks. Lerato says the least squares regression line for this data must pass through the point (5.5, 51.75). Is she correct? Explain.',
          answer: 'Yes — the least squares regression line always passes through the mean point (x̄, ȳ) of the data. This is a mathematical property of how the line is calculated.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A researcher finds a strong positive correlation (r = 0.88) between the number of fire engines sent to a fire and the amount of damage caused. She concludes that fire engines cause more damage. Explain the flaw in her reasoning.',
          answer: 'Correlation does not imply causation. A likely explanation is a third (confounding) variable — the size of the fire. Bigger fires cause more damage AND require more fire engines to be sent, which creates the correlation without the fire engines causing the damage.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A scatter plot of x vs y shows the points (1, 2), (2, 8), (3, 18), (4, 32), (5, 50) forming a clear curved (U-shaped) pattern, not a straight line. The correlation coefficient is calculated as r = 0.98. Amahle says this high r value proves a straight line is the best model for this data. Is she correct? Explain.',
          answer: 'No — r measures only the strength of a LINEAR relationship. Even though r = 0.98 is close to 1, the scatter plot clearly shows a curved (non-linear) pattern. A straight line would not be an appropriate model here despite the high r value; always check the scatter plot shape, not just r.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered scatter plots, regression lines and correlation.' },
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
        // ── Block A: reading scatter plot points / variables (Q1–3) ────────
        {
          difficulty: 'Easy',
          question: 'A scatter plot compares the number of adverts a shop runs per week (x) and its weekly sales in rand (y). Which variable is the dependent variable?',
          answer: 'Weekly sales (y)',
          checkMode: 'auto',
          correctAnswer: 'weeklysales',
          correctAnswers: ['weekly sales', 'weekly sales (y)', 'y', 'sales'],
          explanation: 'The dependent variable is the one that responds to changes in the other variable — weekly sales depends on the number of adverts run, so it is plotted on the y-axis.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="92.5" cy="190" r="4" fill="#2563eb"/><circle cx="130" cy="162.5" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="242.5" cy="96.5" r="4" fill="#2563eb"/><circle cx="317.5" cy="58" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Adverts run per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weekly sales (R) (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two data points on a scatter plot of adverts run (x) vs weekly sales in rand (y) are plotted at (6, 14 200) and (6, 15 900). These two shops ran the same number of adverts — what is the difference in their weekly sales?',
          answer: 'R1 700',
          checkMode: 'auto',
          correctAnswer: '1700',
          correctAnswers: ['1700', 'R1700', 'R1 700'],
          explanation: 'Both points have x = 6 adverts. The difference in the y-values (sales) is 15 900 − 14 200 = R1 700.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="280" cy="88.8" r="4" fill="#2563eb"/><circle cx="280" cy="70.1" r="4" fill="#2563eb"/><text x="280" y="104.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 14 200)</text><text x="280" y="58.1" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 15 900)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Adverts run per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weekly sales (R) (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A scatter plot shows the points (1, 5 000), (2, 7 500), (4, 11 000), (5, 13 500), (7, 17 000) for adverts run (x) vs weekly sales (y). As x increases across these points, what happens to y?',
          answer: 'y increases as x increases',
          checkMode: 'auto',
          correctAnswer: 'yincreases',
          correctAnswers: ['y increases', 'increases', 'y increases as x increases'],
          explanation: 'Reading the points in order of increasing x (1, 2, 4, 5, 7), the y-values also increase (5000, 7500, 11000, 13500, 17000) — the points trend upward, suggesting a positive relationship.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="92.5" cy="190" r="4" fill="#2563eb"/><circle cx="130" cy="162.5" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="242.5" cy="96.5" r="4" fill="#2563eb"/><circle cx="317.5" cy="58" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Adverts run per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weekly sales (R) (y)</text></svg>',
        },

        // ── Block B: interpreting r (Q4–7) ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A data set has correlation coefficient r = −0.78. Is this a positive or negative correlation?',
          answer: 'Negative',
          checkMode: 'auto',
          correctAnswer: 'negative',
          correctAnswers: ['negative', 'negative correlation'],
          explanation: 'Since r = −0.78 is less than 0, the correlation is negative — as x increases, y tends to decrease.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A data set has correlation coefficient r = −0.6. Describe the strength of this correlation.',
          answer: 'Moderate (negative) correlation',
          checkMode: 'auto',
          correctAnswer: 'moderate',
          correctAnswers: ['moderate', 'moderate correlation', 'moderate negative correlation'],
          explanation: '|r| = 0.6 lies between 0.5 and 0.75, which indicates a moderate linear correlation.',
        },
        {
          difficulty: 'Medium',
          question: 'Two data sets have correlation coefficients r = −0.85 and r = 0.3. Which one shows the stronger linear relationship?',
          answer: 'The data set with r = −0.85',
          checkMode: 'auto',
          correctAnswer: 'r=-0.85',
          correctAnswers: ['r = -0.85', '-0.85', 'the one with r=-0.85', 'r=-0.85'],
          explanation: 'Strength is measured by the size of r regardless of sign. |−0.85| = 0.85 is greater than |0.3| = 0.3, so r = −0.85 shows the stronger (negative) linear relationship.',
        },
        {
          difficulty: 'Medium',
          question: 'A scatter plot of shoe size (x) vs monthly income (y) has r = 0.02. What does this suggest about the linear relationship between the variables?',
          answer: 'There is little to no linear correlation between the variables',
          checkMode: 'auto',
          correctAnswer: 'nolinearcorrelation',
          correctAnswers: ['no linear correlation', 'little to no correlation', 'no correlation', 'very weak correlation'],
          explanation: 'r = 0.02 is very close to 0, indicating almost no linear relationship between the two variables.',
        },

        // ── Block C: regression line prediction (Q8–10) ─────────────────────
        {
          difficulty: 'Medium',
          question: 'The least squares regression line for adverts run (x) vs weekly sales in hundreds of rand (y) is y = 8 + 3.2x. Predict the weekly sales (in hundreds of rand) when 9 adverts are run.',
          answer: '36.8',
          checkMode: 'auto',
          correctAnswer: '36.8',
          correctAnswers: ['36.8', '36,8'],
          explanation: 'y = 8 + 3.2(9) = 8 + 28.8 = 36.8 (hundreds of rand).',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same regression line y = 8 + 3.2x, a shop that actually ran 9 adverts had weekly sales of 40 (hundreds of rand). Find the residual (actual y − predicted y) for this shop.',
          answer: '3.2',
          checkMode: 'auto',
          correctAnswer: '3.2',
          correctAnswers: ['3.2', '3,2'],
          explanation: 'Predicted y = 8 + 3.2(9) = 36.8. Residual = actual − predicted = 40 − 36.8 = 3.2.',
        },
        {
          difficulty: 'Medium',
          question: 'A regression line for plot size in m² (x) vs house price in thousands of rand (y) is y = 300 + 0.6x. Predict the house price for a plot of 250 m².',
          answer: '450 (thousand rand)',
          checkMode: 'auto',
          correctAnswer: '450',
          explanation: 'y = 300 + 0.6(250) = 300 + 150 = 450 (thousand rand).',
        },

        // ── Block D: residuals (Q11–13) ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A regression line is y = 10 + 4x. For x = 5, the actual observed value is y = 33. Calculate the residual.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Predicted y = 10 + 4(5) = 10 + 20 = 30. Residual = actual − predicted = 33 − 30 = 3.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'A regression line is y = 60 − 2x. For x = 12, the actual observed value is y = 33. Calculate the residual and state whether the actual point lies above or below the regression line.',
          answer: 'Residual = −3; the point lies below the regression line',
          checkMode: 'auto',
          correctAnswer: '-3below',
          correctAnswers: ['-3, below', '-3 below', 'residual -3 below the line'],
          explanation: 'Predicted y = 60 − 2(12) = 60 − 24 = 36. Residual = actual − predicted = 33 − 36 = −3. A negative residual means the actual point lies below the regression line.',
        },
        {
          difficulty: 'Hard',
          question: 'Bongani says that if most residuals in a data set are close to zero, the regression line must have r close to 1. Is he correct? Explain.',
          answer: 'Yes, broadly correct — small residuals mean the observed points lie close to the regression line, which is exactly what a strong correlation (|r| close to 1) describes. Large, scattered residuals would instead indicate a weak correlation (|r| close to 0).',
          checkMode: 'self',
        },

        // ── Block E: combined prediction + reliability (Q14–16) ─────────────
        {
          difficulty: 'Medium',
          question: 'A regression line for number of employees trained (x) vs monthly output increase (y, in units) is y = 100 + 4x, with correlation coefficient r = 0.89. Predict the output increase when 6 employees are trained.',
          answer: '124',
          checkMode: 'auto',
          correctAnswer: '124',
          explanation: 'y = 100 + 4(6) = 100 + 24 = 124.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Using the regression line y = 100 + 4x and correlation coefficient r = 0.89, a data point at x = 6 has an actual y-value of 130. Calculate the residual and comment on whether r = 0.89 suggests this regression line is generally reliable for prediction.',
          answer: 'Residual = 6. Since r = 0.89 is close to 1, this indicates a strong positive correlation, so the regression line is generally a reliable model for prediction.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A second data set has regression line y = 100 + 4x but correlation coefficient r = 0.15. Nomvula uses this line to predict y when x = 6, getting y = 124, and claims this prediction is just as trustworthy as one from a data set with r = 0.89. Is she correct? Explain.',
          answer: 'No — even though the calculation y = 124 is arithmetically correct, r = 0.15 indicates a very weak linear correlation, meaning the data points are widely scattered around the line. The prediction is far less reliable than one made using a data set with r = 0.89, which shows a strong linear pattern.',
          checkMode: 'self',
        },

        // ── Block F: regression line properties / extrapolation / causation (Q17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'A data set of adverts run (x) has x-values ranging from 1 to 10. The regression line is y = 8 + 3.2x. Kabelo wants to use this line to predict weekly sales for a shop that runs 60 adverts. Explain why this prediction would be unreliable.',
          answer: 'x = 60 is far outside the original data range (1 to 10). Using the regression line to predict values far beyond the range of the original data is called extrapolation, and it is unreliable because there is no evidence the linear trend continues beyond the observed data.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A data set of adverts run (x) vs weekly sales (y) has mean x̄ = 4 adverts and mean ȳ = 20.8 (hundreds of rand). Aisha says the least squares regression line for this data must pass through the point (4, 20.8). Is she correct? Explain.',
          answer: 'Yes — the least squares regression line always passes through the mean point (x̄, ȳ) of the data. This is a mathematical property of how the line is calculated.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A researcher finds a strong positive correlation (r = 0.91) between monthly ice cream sales and the number of drowning incidents at beaches. He concludes that ice cream causes drowning. Explain the flaw in his reasoning.',
          answer: 'Correlation does not imply causation. A likely explanation is a third (confounding) variable — hot weather. Hot weather increases both ice cream sales AND the number of people swimming (and therefore drowning risk), which creates the correlation without ice cream causing drowning.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A scatter plot of x vs y shows the points (1, 3), (2, 10), (3, 21), (4, 36), (5, 55) forming a clear curved (U-shaped) pattern, not a straight line. The correlation coefficient is calculated as r = 0.97. Kagiso says this high r value proves a straight line is the best model for this data. Is he correct? Explain.',
          answer: 'No — r measures only the strength of a LINEAR relationship. Even though r = 0.97 is close to 1, the scatter plot clearly shows a curved (non-linear) pattern. A straight line would not be an appropriate model here despite the high r value; always check the scatter plot shape, not just r.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently interpret scatter plots, regression lines and correlation.' },
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
        // ── Block A: reading scatter plot points / variables (Q1–3) ────────
        {
          difficulty: 'Easy',
          question: 'A scatter plot compares a car\'s age in years (x) and its resale value in thousands of rand (y). Which variable is the independent variable?',
          answer: 'Age of the car (x)',
          checkMode: 'auto',
          correctAnswer: 'age',
          correctAnswers: ['age', 'age of the car', 'age of the car (x)', 'x'],
          explanation: 'The independent variable is the one we control or choose — the car\'s age — plotted on the x-axis. The resale value depends on it, so it is the dependent variable (y).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="85" cy="51.4" r="4" fill="#2563eb"/><circle cx="115" cy="69" r="4" fill="#2563eb"/><circle cx="175" cy="99.8" r="4" fill="#2563eb"/><circle cx="235" cy="130.6" r="4" fill="#2563eb"/><circle cx="295" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Car age (years) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Resale value (R\'000) (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two data points on a scatter plot of car age in years (x) vs resale value in thousands of rand (y) are plotted at (5, 140) and (9, 95). Which car has the higher resale value, and by how much (in thousands of rand)?',
          answer: 'The 5-year-old car, by 45 (thousand rand)',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '5 year old car by 45', 'the car at (5,140) by 45'],
          explanation: 'The y-values (resale value) are 140 and 95. The car at (5, 140) has the higher resale value, and the difference is 140 − 95 = 45 (thousand rand).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="205" cy="121.8" r="4" fill="#2563eb"/><circle cx="325" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="109.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5, 140)</text><text x="325" y="149.4" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(9, 95)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Car age (years) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Resale value (R\'000) (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A scatter plot shows the points (1, 220), (2, 200), (4, 165), (6, 130), (8, 95) for car age in years (x) vs resale value in thousands of rand (y). As x increases across these points, what happens to y?',
          answer: 'y decreases as x increases',
          checkMode: 'auto',
          correctAnswer: 'ydecreases',
          correctAnswers: ['y decreases', 'decreases', 'y decreases as x increases'],
          explanation: 'Reading the points in order of increasing x (1, 2, 4, 6, 8), the y-values decrease (220, 200, 165, 130, 95) — the points trend downward, suggesting a negative relationship.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="85" cy="51.4" r="4" fill="#2563eb"/><circle cx="115" cy="69" r="4" fill="#2563eb"/><circle cx="175" cy="99.8" r="4" fill="#2563eb"/><circle cx="235" cy="130.6" r="4" fill="#2563eb"/><circle cx="295" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Car age (years) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Resale value (R\'000) (y)</text></svg>',
        },

        // ── Block B: interpreting r (Q4–7) ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A data set has correlation coefficient r = −0.97. Is this a positive or negative correlation?',
          answer: 'Negative',
          checkMode: 'auto',
          correctAnswer: 'negative',
          correctAnswers: ['negative', 'negative correlation'],
          explanation: 'Since r = −0.97 is less than 0, the correlation is negative — as x increases, y tends to decrease.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'A data set has correlation coefficient r = 0.68. Describe the strength of this correlation.',
          answer: 'Moderate (positive) correlation',
          checkMode: 'auto',
          correctAnswer: 'moderate',
          correctAnswers: ['moderate', 'moderate correlation', 'moderate positive correlation'],
          explanation: 'r = 0.68 lies between 0.5 and 0.75, which indicates a moderate linear correlation.',
        },
        {
          difficulty: 'Medium',
          question: 'Two data sets have correlation coefficients r = 0.55 and r = −0.97. Which one shows the stronger linear relationship?',
          answer: 'The data set with r = −0.97',
          checkMode: 'auto',
          correctAnswer: 'r=-0.97',
          correctAnswers: ['r = -0.97', '-0.97', 'the one with r=-0.97', 'r=-0.97'],
          explanation: 'Strength is measured by the size of r regardless of sign. |−0.97| = 0.97 is greater than |0.55| = 0.55, so r = −0.97 shows the stronger (negative) linear relationship.',
        },
        {
          difficulty: 'Medium',
          question: 'A scatter plot of a person\'s birth month (x) vs their height (y) has r = −0.03. What does this suggest about the linear relationship between the variables?',
          answer: 'There is little to no linear correlation between the variables',
          checkMode: 'auto',
          correctAnswer: 'nolinearcorrelation',
          correctAnswers: ['no linear correlation', 'little to no correlation', 'no correlation', 'very weak correlation'],
          explanation: 'r = −0.03 is very close to 0, indicating almost no linear relationship between the two variables.',
        },

        // ── Block C: regression line prediction (Q8–10) ─────────────────────
        {
          difficulty: 'Medium',
          question: 'The least squares regression line for practice hours per week (x) vs competition score out of 100 (y) is y = 15 + 1.6x. Predict the competition score for an athlete who practises 20 hours per week.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'y = 15 + 1.6(20) = 15 + 32 = 47.',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same regression line y = 15 + 1.6x, an athlete who actually practised 20 hours scored 52 in competition. Find the residual (actual y − predicted y) for this athlete.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Predicted y = 15 + 1.6(20) = 47. Residual = actual − predicted = 52 − 47 = 5.',
        },
        {
          difficulty: 'Medium',
          question: 'A regression line for temperature in °C (x) vs cold drink sales in litres (y) is y = 40 + 5.5x. Predict the cold drink sales when the temperature is 28°C.',
          answer: '194 litres',
          checkMode: 'auto',
          correctAnswer: '194',
          explanation: 'y = 40 + 5.5(28) = 40 + 154 = 194 litres.',
        },

        // ── Block D: residuals (Q11–13) ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A regression line is y = 8 + 6x. For x = 4, the actual observed value is y = 35. Calculate the residual.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Predicted y = 8 + 6(4) = 8 + 24 = 32. Residual = actual − predicted = 35 − 32 = 3.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'A regression line is y = 220 − 8x. For x = 15, the actual observed value is y = 92. Calculate the residual and state whether the actual point lies above or below the regression line.',
          answer: 'Residual = −8; the point lies below the regression line',
          checkMode: 'auto',
          correctAnswer: '-8below',
          correctAnswers: ['-8, below', '-8 below', 'residual -8 below the line'],
          explanation: 'Predicted y = 220 − 8(15) = 220 − 120 = 100. Residual = actual − predicted = 92 − 100 = −8. A negative residual means the actual point lies below the regression line.',
        },
        {
          difficulty: 'Hard',
          question: 'Precious says that residuals can never be negative, since a residual just measures a "distance" from the line. Is she correct? Explain.',
          answer: 'No — a residual is calculated as actual y minus predicted y, so it can be positive (point above the line), negative (point below the line), or zero (point exactly on the line). Only the size (absolute value) of the residual represents a distance; the sign tells you the direction.',
          checkMode: 'self',
        },

        // ── Block E: combined prediction + reliability (Q14–16) ─────────────
        {
          difficulty: 'Medium',
          question: 'A regression line for hours of sunlight per day (x) vs plant growth in mm (y) is y = 50 + 6x, with correlation coefficient r = 0.87. Predict the plant growth for 7 hours of sunlight per day.',
          answer: '92',
          checkMode: 'auto',
          correctAnswer: '92',
          explanation: 'y = 50 + 6(7) = 50 + 42 = 92.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Using the regression line y = 50 + 6x and correlation coefficient r = 0.87, a data point at x = 7 has an actual y-value of 85. Calculate the residual and comment on whether r = 0.87 suggests this regression line is generally reliable for prediction.',
          answer: 'Residual = −7. Since r = 0.87 is close to 1, this indicates a strong positive correlation, so the regression line is generally a reliable model for prediction.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A second data set has regression line y = 50 + 6x but correlation coefficient r = 0.18. Thandiwe uses this line to predict y when x = 7, getting y = 92, and claims this prediction is just as trustworthy as one from a data set with r = 0.87. Is she correct? Explain.',
          answer: 'No — even though the calculation y = 92 is arithmetically correct, r = 0.18 indicates a very weak linear correlation, meaning the data points are widely scattered around the line. The prediction is far less reliable than one made using a data set with r = 0.87, which shows a strong linear pattern.',
          checkMode: 'self',
        },

        // ── Block F: regression line properties / extrapolation / causation (Q17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'A data set of car age in years (x) has x-values ranging from 1 to 10. The regression line is y = 220 − 8x. Given that resale value cannot be negative, explain why using this line to predict resale value for a 40-year-old car would be unreliable.',
          answer: 'x = 40 is far outside the original data range (1 to 10). Using the regression line to predict values far beyond the range of the original data is called extrapolation, and it is unreliable — indeed, y = 220 − 8(40) = −100, a negative resale value, which is impossible and shows the linear trend cannot continue indefinitely.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A data set of practice hours (x) vs competition score (y) has mean x̄ = 11 hours and mean ȳ = 32.6. Karabo says the least squares regression line for this data must pass through the point (11, 32.6). Is he correct? Explain.',
          answer: 'Yes — the least squares regression line always passes through the mean point (x̄, ȳ) of the data. This is a mathematical property of how the line is calculated.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A researcher finds a strong positive correlation (r = 0.94) between the number of firefighters at a scene and the amount of smoke visible. She concludes that having more firefighters causes more smoke. Explain the flaw in her reasoning.',
          answer: 'Correlation does not imply causation. A likely explanation is a third (confounding) variable — the size/intensity of the fire. A bigger, more intense fire produces more smoke AND requires more firefighters to be sent, which creates the correlation without the firefighters causing the smoke.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A scatter plot of x vs y shows the points (1, 4), (2, 15), (3, 32), (4, 55), (5, 84) forming a clear curved pattern, not a straight line. The correlation coefficient is calculated as r = 0.96. Boitumelo says this high r value proves a straight line is the best model for this data. Is she correct? Explain.',
          answer: 'No — r measures only the strength of a LINEAR relationship. Even though r = 0.96 is close to 1, the scatter plot clearly shows a curved (non-linear) pattern. A straight line would not be an appropriate model here despite the high r value; always check the scatter plot shape, not just r.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply scatter plots, regression lines and correlation to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
