import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (statistics roles) ───────────────────────────────────────
// minimum / maximum    → blue   (#2563eb)
// quartiles            → orange (#ea580c)
// median / std dev     → green  (#16a34a)
// negative skew        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistics',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FIVE NUMBER SUMMARY AND BOX AND WHISKER DIAGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary',
      title: 'Five Number Summary and Box and Whisker Diagrams',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>five number summary</strong> consists of the ${bl('minimum')}, ${or('Q1')} (lower quartile), ${gr('median')} (Q2), ${or('Q3')} (upper quartile), and ${bl('maximum')} of a data set. A <strong>box and whisker diagram</strong> visually represents this summary — a box from ${or('Q1')} to ${or('Q3')} (with a line at the ${gr('median')}), and 'whiskers' extending to the ${bl('minimum')} and ${bl('maximum')} values, giving an instant visual sense of spread and skewness.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maximum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quartiles (Q1, Q3)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median (Q2)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The five values</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest value in the ordered data set.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q1 (Lower Quartile)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The median of the lower half of the data (below Q2).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Median (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The middle value of the ordered data set.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q3 (Upper Quartile)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The median of the upper half of the data (above Q2).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Maximum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest value in the ordered data set.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always order the data first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Arrange the data in <strong>ascending order</strong> before finding any of the five values. The ${gr('median')} splits the data in half; ${or('Q1')} is the median of the lower half and ${or('Q3')} is the median of the upper half. Do <em>not</em> include the median itself in either half when the data set has an odd number of values.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the five number summary of: 4, 7, 9, 12, 15, 18, 21, 25, 30.',
          answer: `${bl('Min = 4')} &nbsp;|&nbsp; ${or('Q1 = 8')} &nbsp;|&nbsp; ${gr('Median = 15')} &nbsp;|&nbsp; ${or('Q3 = 23')} &nbsp;|&nbsp; ${bl('Max = 30')}`,
          steps: [
            `The data is already in ascending order: 4, 7, 9, 12, 15, 18, 21, 25, 30. There are 9 values.`,
            `${bl('Minimum')} = ${bl('4')} (first value). &nbsp; ${bl('Maximum')} = ${bl('30')} (last value).`,
            `${gr('Median (Q2)')} = the middle (5th) value of 9 = ${gr('15')}.`,
            `${or('Lower half')} (values below the median): 4, 7, 9, 12. Q1 = median of this half = (7 + 9) ÷ 2 = ${or('8')}.`,
            `${or('Upper half')} (values above the median): 18, 21, 25, 30. Q3 = median of this half = (21 + 25) ÷ 2 = ${or('23')}.`,
            `<strong>Five number summary:</strong> ${bl('Min = 4')}, ${or('Q1 = 8')}, ${gr('Median = 15')}, ${or('Q3 = 23')}, ${bl('Max = 30')}`,
          ],
        },
        {
          question: 'Sipho draws a box and whisker diagram using the five number summary from Example 1. Describe what the diagram shows.',
          answer: 'The box spans Q1 to Q3 with a median line inside; whiskers extend to the minimum and maximum.',
          steps: [
            `The ${or('box')} stretches from ${or('Q1 = 8')} to ${or('Q3 = 23')}, with a vertical line at the ${gr('median = 15')} inside the box.`,
            `Whiskers extend from the box to the ${bl('minimum (4)')} on the left and the ${bl('maximum (30)')} on the right, showing the full spread of the data.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the five number summary and draw a box and whisker diagram for a data set" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — OGIVES (CUMULATIVE FREQUENCY CURVES)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ogives',
      title: 'Ogives (Cumulative Frequency Curves)',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>ogive</strong> plots ${bl('cumulative frequency')} against the ${or('upper boundary')} of each interval, creating a curve that always increases (since frequencies accumulate). Ogives are used to estimate the ${gr('median')}, ${gr('quartiles')} and ${gr('percentiles')} directly from the graph by reading across from the relevant cumulative frequency value.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cumulative frequency')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interval boundaries')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('estimated value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to construct an ogive</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Build a cumulative frequency table: add each interval's frequency to a running total, recording the result at the ${or('upper boundary')} of each interval.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Plot each point (${or('upper boundary')}, ${bl('cumulative frequency')}) on a set of axes. Also plot (lower boundary of first interval, 0) as the starting point.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Join the points with a smooth increasing curve. To read off ${gr('estimated values')}, draw a horizontal line from the y-axis to the curve, then read straight down to the x-axis.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading off percentiles</p>` +
        `<p style="margin:0;color:#1e3a8a;">For a total of <em>n</em> values: the ${gr('median')} is at cumulative frequency <strong>n/2</strong>, ${gr('Q1')} at <strong>n/4</strong>, and ${gr('Q3')} at <strong>3n/4</strong>. Read across from these y-values to the curve, then down to the x-axis to find your ${gr('estimates')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A data set has intervals 0–10 (frequency 5), 10–20 (frequency 8), 20–30 (frequency 12), 30–40 (frequency 5). Total = 30. Find the cumulative frequencies to plot an ogive.',
          answer: `${bl('Cumulative frequencies:')} up to 10 = 5 &nbsp;|&nbsp; up to 20 = 13 &nbsp;|&nbsp; up to 30 = 25 &nbsp;|&nbsp; up to 40 = 30`,
          steps: [
            `Set up a table with ${or('upper boundaries')} and a running ${bl('cumulative frequency')} total.`,
            `Up to ${or('10')}: cumulative frequency = ${bl('5')} (first interval only).`,
            `Up to ${or('20')}: cumulative frequency = 5 + 8 = ${bl('13')}.`,
            `Up to ${or('30')}: cumulative frequency = 13 + 12 = ${bl('25')}.`,
            `Up to ${or('40')}: cumulative frequency = 25 + 5 = ${bl('30')} (equals the total — a useful check ✓).`,
            `Plot the points (0, 0), (10, 5), (20, 13), (30, 25), (40, 30) and join them with a smooth increasing curve — this is the ogive.`,
          ],
        },
        {
          question: 'Using the ogive from Example 1 (total = 30), estimate the median.',
          answer: `${gr('Estimated median ≈ 21–22')}`,
          steps: [
            `The ${gr('median')} is at the <strong>15th value</strong> (half of 30 = 15).`,
            `On the ogive, draw a horizontal line from ${bl('cumulative frequency = 15')} on the y-axis across to the curve, then read straight down to the x-axis.`,
            `This falls within the ${or('20–30 interval')}, giving an ${gr('estimated median of approximately 21–22')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw an ogive from a frequency table and use it to estimate the median and quartiles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — VARIANCE AND STANDARD DEVIATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'variance-standard-deviation',
      title: 'Variance and Standard Deviation',
      icon: 'σ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Variance</strong> measures the average squared distance of each data point from the mean, while <strong>standard deviation</strong> (σ) is the square root of the variance — bringing the measure back to the same units as the original data. A small standard deviation means data is clustered close to the mean; a large standard deviation means data is more spread out. We calculate these manually for small data sets and use a calculator for larger ones.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deviations from mean')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('squared deviations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('standard deviation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to calculate variance and standard deviation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the mean</strong> (x̄) of the data set.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find each ${bl('deviation from the mean')}: subtract x̄ from each data value.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Square</strong> each ${bl('deviation')} to get the ${or('squared deviations')}. Sum all ${or('squared deviations')} and divide by <em>n</em> to get the <strong>variance</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Take the square root of the variance to get the ${gr('standard deviation')} σ.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Population standard deviation on your calculator</p>` +
        `<p style="margin:0;color:#1e3a8a;">In Grade 11, use the <strong>population standard deviation</strong> (σ<sub>n</sub>), which divides by <em>n</em>. On the Casio fx-82 series this is labelled <strong>xσn</strong>. The sample standard deviation (dividing by <em>n − 1</em>) is used in more advanced statistics courses.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the standard deviation of: 4, 8, 6, 10, 2 (mean = 6).',
          answer: `${gr('Standard deviation')} = √8 ≈ ${gr('2.83')}`,
          steps: [
            `The mean is given as 6. Find each ${bl('deviation from the mean')}: 4 − 6 = ${bl('−2')}, 8 − 6 = ${bl('2')}, 6 − 6 = ${bl('0')}, 10 − 6 = ${bl('4')}, 2 − 6 = ${bl('−4')}.`,
            `${or('Square each deviation')}: (−2)² = ${or('4')}, 2² = ${or('4')}, 0² = ${or('0')}, 4² = ${or('16')}, (−4)² = ${or('16')}.`,
            `Sum of ${or('squared deviations')} = 4 + 4 + 0 + 16 + 16 = ${or('40')}.`,
            `Variance = ${or('40')} ÷ 5 = 8.`,
            `${gr('Standard deviation')} = √8 ≈ ${gr('2.83')}.`,
          ],
        },
        {
          question: 'Lerato has two classes with the same mean score (65%) but different standard deviations: Class A has σ = 5, Class B has σ = 15. What does this tell us?',
          answer: 'Class A scores are tightly clustered near 65%; Class B scores are much more spread out.',
          steps: [
            `Class A (σ = ${gr('5')}): scores are ${gr('tightly clustered')} close to 65% — most learners scored between roughly 60% and 70%. There is low variation in this class.`,
            `Class B (σ = ${or('15')}): scores are ${or('much more spread out')}, with some learners scoring well above or below 65%. A larger standard deviation does not mean worse performance on average — the means are equal — but it does mean performance was far less consistent in Class B.`,
          ],
        },
        {
          question: 'Use a calculator (Casio fx-82 series) to find the standard deviation of: 12, 15, 18, 20, 25.',
          answer: `${gr('Standard deviation')} ≈ ${gr('4.45')}`,
          steps: [
            `Press <strong>[MODE]</strong> → select <strong>[STAT]</strong> → select <strong>[1-VAR]</strong> to enter single-variable statistics mode.`,
            `Enter each value followed by <strong>[=]</strong>: 12 [=], 15 [=], 18 [=], 20 [=], 25 [=].`,
            `Press <strong>[AC]</strong>, then <strong>[SHIFT][1]</strong> (STAT menu). Navigate to <strong>Var</strong> and select <strong>xσn</strong> for the population standard deviation. Press <strong>[=]</strong>.`,
            `The calculator displays ${gr('≈ 4.45')} — this is the ${gr('standard deviation')} of the data set.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate variance and standard deviation by hand and using a Casio fx-82 calculator" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SYMMETRIC AND SKEWED DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetric-skewed-data',
      title: 'Symmetric and Skewed Data',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Symmetric data</strong> has a roughly equal spread on both sides of the mean/median, producing a balanced box and whisker diagram or bell-shaped distribution. <strong>Skewed data</strong> is unevenly spread — ${or('positively skewed (right-skewed)')} data has a longer tail on the right (toward higher values), while ${re('negatively skewed (left-skewed)')} data has a longer tail on the left.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('symmetric spread')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positive skew (right tail)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative skew (left tail)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Identifying skewness</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Symmetric</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Whiskers are roughly equal in length; median line sits in the centre of the box.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mean ≈ Median ≈ Mode</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Positive (Right) Skew</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Longer tail/whisker on the right; median is closer to Q1 than Q3.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mean &gt; Median &gt; Mode</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Negative (Left) Skew</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Longer tail/whisker on the left; median is closer to Q3 than Q1.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mean &lt; Median &lt; Mode</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">The tail points in the direction of the skew</p>` +
        `<p style="margin:0;color:#78350f;">The name of the skew refers to the direction of the longer tail: ${or('right (positive)')} skew has the tail on the right, ${re('left (negative)')} skew has the tail on the left. Extreme values in the tail pull the <strong>mean</strong> in that direction, away from the median.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A box and whisker diagram shows: Q1 = 10, Median = 12, Q3 = 14, Minimum = 8, Maximum = 30. Describe the skewness.',
          answer: `The data is ${or('positively (right) skewed')}.`,
          steps: [
            `Compare distances on each side of the ${gr('median = 12')}: median to ${or('Q3')} = 14 − 12 = ${or('2')}; median to ${or('Q1')} = 12 − 10 = ${or('2')}. The box is symmetric.`,
            `Compare the whiskers: left whisker = Q1 − Min = 10 − 8 = ${bl('2')}; right whisker = Max − Q3 = 30 − 14 = ${or('16')}.`,
            `The right whisker (${or('16')}) is much longer than the left whisker (${bl('2')}), indicating ${or('positive (right) skewness')} — there are some unusually large values pulling the distribution to the right.`,
          ],
        },
        {
          question: 'Thabo says symmetric data always has the mean exactly equal to the median. Is this generally true?',
          answer: 'Yes — for perfectly symmetric data, mean and median coincide.',
          steps: [
            `Yes, for ${bl('perfectly symmetric data')}, the mean and median coincide — the distribution is balanced, so extreme values on both sides cancel each other out equally.`,
            `Significant differences between the mean and median typically indicate some degree of skewness: the <strong>mean is more sensitive to extreme values</strong>, so in an ${or('right-skewed')} distribution the mean is pulled toward the ${or('right tail')} and becomes greater than the median; in a ${re('left-skewed')} distribution the mean is pulled toward the ${re('left tail')} and becomes less than the median.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining symmetric positively skewed and negatively skewed data using box and whisker diagrams" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — BIVARIATE DATA AND SCATTER PLOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bivariate-scatter-plots',
      title: 'Bivariate Data and Scatter Plots',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Bivariate data</strong> involves two related variables measured together (e.g. hours studied and test score). A <strong>scatter plot</strong> displays each data pair as a ${bl('point')}, allowing us to visually assess whether a relationship exists, and if so, whether it appears ${gr('linear')}, ${or('quadratic')} or ${or('exponential')} in shape, by examining the overall pattern of points.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('data points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('linear trend')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('curved (non-linear) trend')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of relationships</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Linear</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Points follow an approximately straight-line pattern. The rate of change between the two variables is roughly constant.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Quadratic</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Points follow a curved (parabolic) pattern — the rate of change is not constant and the curve accelerates or turns.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Exponential</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Points follow a curve that grows or decays at an ever-increasing rate — the pattern curves steeply upward or downward.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#14532d;margin-bottom:6px;">Correlation is not causation</p>` +
        `<p style="margin:0;color:#166534;">A scatter plot shows <strong>correlation</strong> (a relationship between two variables) but does not prove <strong>causation</strong> (that one variable causes the other). Always consider the real-world context when interpreting a scatter plot.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A scatter plot of advertising spend vs sales shows points rising steadily in a roughly straight line. What model might fit this data?',
          answer: `A ${gr('linear model')} would likely fit best.`,
          steps: [
            `The ${bl('points')} rise steadily from left to right with no obvious curving — this pattern suggests a ${gr('linear relationship')}.`,
            `A ${gr('linear model')} would likely fit best, since the pattern shows a consistent, constant rate of increase rather than curving — indicating that higher advertising spend is associated with higher sales at a steady rate.`,
          ],
        },
        {
          question: "Amahle's scatter plot of speed vs braking distance shows points curving upward more steeply as speed increases. What model might fit this data better than a straight line?",
          answer: `A ${or('quadratic model')} would likely fit better.`,
          steps: [
            `The ${bl('points')} curve upward, rising more steeply as speed increases — this rules out a straight-line (linear) model since the rate of increase is not constant.`,
            `A ${or('quadratic model')} would likely fit better, since braking distance typically increases at an increasing rate relative to speed (consistent with real-world physics), producing a ${or('curved')} rather than straight-line pattern.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw and interpret scatter plots and identify linear quadratic and exponential trends in bivariate data" />',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — diagramSvg added for ogive (Q5-8) and histogram (Q9-11) blocks
  // Each set has 20 questions in 6 repeating skill blocks, Easy → Hard:
  //   Block 1 (Q1-4)   Variance / standard deviation from raw (ungrouped) data
  //   Block 2 (Q5-8)   Ogive (cumulative frequency curve) — estimating median, Q1, Q3
  //   Block 3 (Q9-12)  Histogram / frequency polygon interpretation (modal class, estimated mean)
  //   Block 4 (Q13-16) Symmetric vs skewed judgement from a stated five-number summary
  //   Block 5 (Q17-18) Variance / standard deviation comparison of two data sets
  //   Block 6 (Q19-20) Combined ogive + skewness reasoning
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1 — Variance / standard deviation from raw data (Q1-4) ────
        { difficulty: 'Easy', question: 'Find the standard deviation of: 4, 6, 8, 10, 12 (mean = 8).', answer: '2.83', checkMode: 'auto', correctAnswer: '2.83', explanation: 'Deviations: −4, −2, 0, 2, 4. Squared deviations: 16, 4, 0, 4, 16. Sum = 40. Variance = 40 ÷ 5 = 8. Standard deviation = √8 ≈ 2.83 ✓' },
        { difficulty: 'Easy', question: 'Find the variance of: 10, 12, 14, 16, 18, 20 (mean = 15).', answer: '11.67', checkMode: 'auto', correctAnswer: '11.67', correctAnswers: ['11.67', '11.7', '70/6', '11.666666666666666'], explanation: 'Deviations: −5, −3, −1, 1, 3, 5. Squared deviations: 25, 9, 1, 1, 9, 25. Sum = 70. Variance = 70 ÷ 6 ≈ 11.67 ✓' },
        { difficulty: 'Medium', question: 'Find the standard deviation of: 3, 7, 11, 15, 19 (mean = 11), showing your working.', answer: 'Deviations: −8, −4, 0, 4, 8. Squared deviations: 64, 16, 0, 16, 64. Sum = 160. Variance = 160 ÷ 5 = 32. Standard deviation = √32 ≈ 5.66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the standard deviation of: 12, 15, 18, 21, 24, 27, 30 (mean = 21), showing your full working.', answer: 'Deviations: −9, −6, −3, 0, 3, 6, 9. Squared deviations: 81, 36, 9, 0, 9, 36, 81. Sum = 252. Variance = 252 ÷ 7 = 36. Standard deviation = √36 = 6.', checkMode: 'self' },

        // ── Block 2 — Ogive: estimating median, Q1, Q3 (Q5-8) ───────────────
        { difficulty: 'Easy', question: 'A frequency table for exam scores (out of 50) has intervals 0–10 (frequency 4), 10–20 (frequency 8), 20–30 (frequency 16), 30–40 (frequency 8), 40–50 (frequency 4). Total = 40. Find the cumulative frequency up to 30.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Cumulative frequency up to 30 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Exam score (upper class boundary)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same exam score data (intervals 0–10 freq 4, 10–20 freq 8, 20–30 freq 16, 30–40 freq 8, 40–50 freq 4, total 40), the cumulative frequencies at the upper boundaries are: 4, 12, 28, 36, 40. Using an ogive drawn from these points, estimate the median score.', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 out of 50'], explanation: 'The median is at cumulative frequency n/2 = 20. This falls in the 20–30 interval (cumulative frequency rises from 12 to 28 there). Estimating by interpolation: 20 + ((20−12)/16)×10 = 20 + 5 = 25 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Exam score (upper class boundary)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same exam score ogive (intervals 0–10 freq 4, 10–20 freq 8, 20–30 freq 16, 30–40 freq 8, 40–50 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q1 (the score at the 25% mark) using interpolation.', answer: '17.5', checkMode: 'auto', correctAnswer: '17.5', explanation: 'Q1 is at cumulative frequency n/4 = 10. This falls in the 10–20 interval (cumulative frequency rises from 4 to 12 there). Estimating: 10 + ((10−4)/8)×10 = 10 + 7.5 = 17.5 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Exam score (upper class boundary)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same exam score ogive (intervals 0–10 freq 4, 10–20 freq 8, 20–30 freq 16, 30–40 freq 8, 40–50 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q3 (the score at the 75% mark) and hence find the interquartile range, given Q1 = 17.5.', answer: 'Q3 is at cumulative frequency 3n/4 = 30, which falls in the 30–40 interval (cumulative frequency rises from 28 to 36 there). Estimating: 30 + ((30−28)/8)×10 = 30 + 2.5 = 32.5. IQR = Q3 − Q1 = 32.5 − 17.5 = 15.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Exam score (upper class boundary)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },

        // ── Block 3 — Histogram / frequency polygon interpretation (Q9-12) ──
        { difficulty: 'Easy', question: 'A histogram for delivery times (minutes) has bars for intervals 0–10 (frequency 3), 10–20 (frequency 7), 20–30 (frequency 12), 30–40 (frequency 8). Identify the modal class.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 to 30'], explanation: 'The modal class is the interval with the highest frequency. 20–30 has frequency 12, the highest of the four intervals ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="191.25" width="75" height="53.75" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="183.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><rect x="130" y="119.58333333333333" width="75" height="125.41666666666667" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="111.58333333333333" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><rect x="280" y="101.66666666666669" width="75" height="143.33333333333331" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="93.66666666666669" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Delivery time (minutes)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same delivery time data (intervals 0–10 freq 3, 10–20 freq 7, 20–30 freq 12, 30–40 freq 8, total 30), estimate the mean delivery time using interval midpoints.', answer: '23.33', checkMode: 'auto', correctAnswer: '23.33', correctAnswers: ['23.33', '23.3'], explanation: 'Midpoints: 5, 15, 25, 35. Σ(midpoint × freq) = (5×3)+(15×7)+(25×12)+(35×8) = 15+105+300+280 = 700. Mean = 700 ÷ 30 ≈ 23.33 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="191.25" width="75" height="53.75" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="183.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><rect x="130" y="119.58333333333333" width="75" height="125.41666666666667" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="111.58333333333333" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><rect x="280" y="101.66666666666669" width="75" height="143.33333333333331" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="93.66666666666669" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Delivery time (minutes)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A frequency polygon is drawn from the same delivery time data (midpoints 5, 15, 25, 35 with frequencies 3, 7, 12, 8). Describe how the points of the frequency polygon are plotted and connected.', answer: 'Points are plotted at (midpoint, frequency): (5,3), (15,7), (25,12), (35,8), and connected in order with straight lines.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="191.25" width="75" height="53.75" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="183.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><rect x="130" y="119.58333333333333" width="75" height="125.41666666666667" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="111.58333333333333" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><rect x="280" y="101.66666666666669" width="75" height="143.33333333333331" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="93.66666666666669" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Delivery time (minutes)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Zanele says a frequency polygon and a histogram drawn from the same grouped data will always show the same modal class directly on the graph. Comment on whether this is true, referring to how each graph represents frequency.', answer: 'True for the histogram — the tallest bar directly shows the modal class. For the frequency polygon, the modal class is indicated by the highest point (peak) of the polygon, which sits at the midpoint of the modal interval, so the modal class can still be identified but is read from the position of the peak rather than a bar.', checkMode: 'self' },

        // ── Block 4 — Symmetric vs skewed judgement from five-number summary (Q13-16) ──
        { difficulty: 'Easy', question: 'A data set has minimum = 10, Q1 = 20, median = 30, Q3 = 40, maximum = 50. Is this data set symmetric, positively skewed, or negatively skewed?', answer: 'symmetric', checkMode: 'auto', correctAnswer: 'symmetric', correctAnswers: ['symmetric', 'Symmetric'], explanation: 'Median to Q3 = 10, median to Q1 = 10 (equal box halves). Q1 to minimum = 10, Q3 to maximum = 10 (equal whiskers). Both sides match exactly, so the data is symmetric ✓' },
        { difficulty: 'Medium', question: 'A data set has minimum = 5, Q1 = 15, median = 18, Q3 = 22, maximum = 60. Determine the type of skewness and justify your answer using the whisker lengths.', answer: 'Positively (right) skewed — the left whisker (Q1 − min = 15 − 5 = 10) is much shorter than the right whisker (max − Q3 = 60 − 22 = 38), showing the data has a long tail of high values on the right.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A data set has minimum = 2, Q1 = 25, median = 35, Q3 = 40, maximum = 48. Determine the type of skewness and justify your answer using both the box and the whiskers.', answer: 'Negatively (left) skewed — the lower box half (median − Q1 = 35 − 25 = 10) is larger than the upper box half (Q3 − median = 40 − 35 = 5), and the left whisker (Q1 − min = 25 − 2 = 23) is much longer than the right whisker (max − Q3 = 48 − 40 = 8), showing a long tail of low values on the left.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A data set has minimum = 10, Q1 = 18, median = 24, Q3 = 32, maximum = 45. Determine the type of skewness, using both the box halves and the whiskers to justify your answer.', answer: 'Positively (right) skewed — the upper box half (Q3 − median = 32 − 24 = 8) is larger than the lower box half (median − Q1 = 24 − 18 = 6), and the right whisker (max − Q3 = 45 − 32 = 13) is longer than the left whisker (Q1 − min = 18 − 10 = 8), both indicating a longer spread on the higher side.', checkMode: 'self' },

        // ── Block 5 — Variance / SD comparison of two data sets (Q17-18) ────
        { difficulty: 'Hard', question: 'Class A test scores: 50, 55, 60, 65, 70 (mean = 60). Class B test scores: 40, 55, 60, 65, 80 (mean = 60). Find the standard deviation of Class A, showing your working.', answer: 'Deviations: −10, −5, 0, 5, 10. Squared deviations: 100, 25, 0, 25, 100. Sum = 250. Variance = 250 ÷ 5 = 50. Standard deviation = √50 ≈ 7.07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Using the same two classes (Class A: 50, 55, 60, 65, 70, mean 60; Class B: 40, 55, 60, 65, 80, mean 60), find the standard deviation of Class B and state which class has more consistent scores.', answer: 'Deviations: −20, −5, 0, 5, 20. Squared deviations: 400, 25, 0, 25, 400. Sum = 850. Variance = 850 ÷ 5 = 170. Standard deviation = √170 ≈ 13.04. Since Class A has the smaller standard deviation (≈7.07 vs ≈13.04), Class A has more consistent scores, even though both classes have the same mean.', checkMode: 'self' },

        // ── Block 6 — Combined ogive + skewness reasoning (Q19-20) ──────────
        { difficulty: 'Hard', question: 'An ogive for the ages (in years) of 60 members at a gym passes through the points (10, 0), (30, 15), (50, 45), (70, 60). Using these plotted points, estimate the interquartile range of the ages.', answer: 'Q1 is at cumulative frequency n/4 = 15, which occurs exactly at the plotted point (30, 15), so Q1 = 30. Q3 is at cumulative frequency 3n/4 = 45, which occurs exactly at the plotted point (50, 45), so Q3 = 50. IQR = Q3 − Q1 = 50 − 30 = 20 years.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Given the estimated five-number summary from an ogive of learners' travel times (minutes) to school: minimum = 5, Q1 = 12, median = 16, Q3 = 20, maximum = 55. Determine the skewness of the distribution and explain what this suggests about the group of learners' travel times.", answer: 'Positively (right) skewed — the right whisker (max − Q3 = 55 − 20 = 35) is far longer than the left whisker (Q1 − min = 12 − 5 = 7), and the upper box half (Q3 − median = 4) is slightly larger than the lower box half (median − Q1 = 4, roughly equal). This suggests most learners have relatively short, similar travel times, but a small number travel much further, pulling the distribution\'s tail to the right.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered variance, standard deviation, ogives, histograms and skewness judgements.' },
        { minScore: 15, message: 'Great work! Review any missed questions on ogive interpolation or skewness, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on standard deviation and reading an ogive, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1 — Variance / standard deviation from raw data (Q1-4) ────
        { difficulty: 'Easy', question: 'Find the standard deviation of: 5, 7, 9, 11, 13 (mean = 9).', answer: '2.83', checkMode: 'auto', correctAnswer: '2.83', explanation: 'Deviations: −4, −2, 0, 2, 4. Squared deviations: 16, 4, 0, 4, 16. Sum = 40. Variance = 40 ÷ 5 = 8. Standard deviation = √8 ≈ 2.83 ✓' },
        { difficulty: 'Easy', question: 'Find the variance of: 11, 13, 15, 17, 19, 21 (mean = 16).', answer: '11.67', checkMode: 'auto', correctAnswer: '11.67', correctAnswers: ['11.67', '11.7', '70/6', '11.666666666666666'], explanation: 'Deviations: −5, −3, −1, 1, 3, 5. Squared deviations: 25, 9, 1, 1, 9, 25. Sum = 70. Variance = 70 ÷ 6 ≈ 11.67 ✓' },
        { difficulty: 'Medium', question: 'Find the standard deviation of: 4, 8, 12, 16, 20 (mean = 12), showing your working.', answer: 'Deviations: −8, −4, 0, 4, 8. Squared deviations: 64, 16, 0, 16, 64. Sum = 160. Variance = 160 ÷ 5 = 32. Standard deviation = √32 ≈ 5.66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the standard deviation of: 13, 17, 19, 22, 26, 28, 33 (mean = 22.57, rounded to 2 decimal places), showing your full working.', answer: 'Deviations (using mean ≈ 22.57): −9.57, −5.57, −3.57, −0.57, 3.43, 5.43, 10.43. Squared deviations ≈ 91.6, 31.0, 12.7, 0.3, 11.8, 29.5, 108.7. Sum ≈ 285.7. Variance ≈ 285.7 ÷ 7 ≈ 40.8. Standard deviation ≈ √40.8 ≈ 6.39.', checkMode: 'self' },

        // ── Block 2 — Ogive: estimating median, Q1, Q3 (Q5-8) ───────────────
        { difficulty: 'Easy', question: 'A frequency table for the heights (cm) of 40 seedlings has intervals 0–20 (frequency 4), 20–40 (frequency 8), 40–60 (frequency 16), 60–80 (frequency 8), 80–100 (frequency 4). Total = 40. Find the cumulative frequency up to 60.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Cumulative frequency up to 60 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Seedling height (upper boundary, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same seedling height data (intervals 0–20 freq 4, 20–40 freq 8, 40–60 freq 16, 60–80 freq 8, 80–100 freq 4, total 40), the cumulative frequencies at the upper boundaries are: 4, 12, 28, 36, 40. Using an ogive drawn from these points, estimate the median height.', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50cm', '50 cm'], explanation: 'The median is at cumulative frequency n/2 = 20. This falls in the 40–60 interval (cumulative frequency rises from 12 to 28 there). Estimating: 40 + ((20−12)/16)×20 = 40 + 10 = 50 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Seedling height (upper boundary, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same seedling height ogive (intervals 0–20 freq 4, 20–40 freq 8, 40–60 freq 16, 60–80 freq 8, 80–100 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q1 (the height at the 25% mark) using interpolation.', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35cm', '35 cm'], explanation: 'Q1 is at cumulative frequency n/4 = 10. This falls in the 20–40 interval (cumulative frequency rises from 4 to 12 there). Estimating: 20 + ((10−4)/8)×20 = 20 + 15 = 35 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Seedling height (upper boundary, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same seedling height ogive (intervals 0–20 freq 4, 20–40 freq 8, 40–60 freq 16, 60–80 freq 8, 80–100 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q3 (the height at the 75% mark) and hence find the interquartile range, given Q1 = 35.', answer: 'Q3 is at cumulative frequency 3n/4 = 30, which falls in the 60–80 interval (cumulative frequency rises from 28 to 36 there). Estimating: 60 + ((30−28)/8)×20 = 60 + 5 = 65. IQR = Q3 − Q1 = 65 − 35 = 30.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Seedling height (upper boundary, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },

        // ── Block 3 — Histogram / frequency polygon interpretation (Q9-12) ──
        { difficulty: 'Easy', question: 'A histogram for the ages (years) of 30 customers has bars for intervals 0–10 (frequency 5), 10–20 (frequency 9), 20–30 (frequency 10), 30–40 (frequency 6). Identify the modal class.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 to 30'], explanation: 'The modal class is the interval with the highest frequency. 20–30 has frequency 10, the highest of the four intervals ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="137.5" width="75" height="107.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="129.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><rect x="130" y="51.5" width="75" height="193.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="43.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><rect x="280" y="116" width="75" height="129" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Customer age (years)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same customer age data (intervals 0–10 freq 5, 10–20 freq 9, 20–30 freq 10, 30–40 freq 6, total 30), estimate the mean age using interval midpoints.', answer: '20.67', checkMode: 'auto', correctAnswer: '20.67', correctAnswers: ['20.67', '20.7'], explanation: 'Midpoints: 5, 15, 25, 35. Σ(midpoint × freq) = (5×5)+(15×9)+(25×10)+(35×6) = 25+135+250+210 = 620. Mean = 620 ÷ 30 ≈ 20.67 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="137.5" width="75" height="107.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="129.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><rect x="130" y="51.5" width="75" height="193.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="43.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><rect x="280" y="116" width="75" height="129" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Customer age (years)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A frequency polygon is drawn from the same customer age data (midpoints 5, 15, 25, 35 with frequencies 5, 9, 10, 6). Describe how the points of the frequency polygon are plotted and connected.', answer: 'Points are plotted at (midpoint, frequency): (5,5), (15,9), (25,10), (35,6), and connected in order with straight lines.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="137.5" width="75" height="107.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="129.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><rect x="130" y="51.5" width="75" height="193.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="43.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><rect x="280" y="116" width="75" height="129" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Customer age (years)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo says that adding an extra empty interval with frequency 0 at each end of a frequency polygon (before the first and after the last data interval) is good practice. Explain why this is done.', answer: 'Adding a zero-frequency interval at each end allows the polygon to be brought down to touch the x-axis at both ends, closing the shape properly so that it forms a complete, readable outline of the distribution rather than starting and ending abruptly in mid-air.', checkMode: 'self' },

        // ── Block 4 — Symmetric vs skewed judgement from five-number summary (Q13-16) ──
        { difficulty: 'Easy', question: 'A data set has minimum = 15, Q1 = 25, median = 35, Q3 = 45, maximum = 55. Is this data set symmetric, positively skewed, or negatively skewed?', answer: 'symmetric', checkMode: 'auto', correctAnswer: 'symmetric', correctAnswers: ['symmetric', 'Symmetric'], explanation: 'Median to Q3 = 10, median to Q1 = 10 (equal box halves). Q1 to minimum = 10, Q3 to maximum = 10 (equal whiskers). Both sides match exactly, so the data is symmetric ✓' },
        { difficulty: 'Medium', question: 'A data set has minimum = 8, Q1 = 18, median = 21, Q3 = 25, maximum = 65. Determine the type of skewness and justify your answer using the whisker lengths.', answer: 'Positively (right) skewed — the left whisker (Q1 − min = 18 − 8 = 10) is much shorter than the right whisker (max − Q3 = 65 − 25 = 40), showing the data has a long tail of high values on the right.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A data set has minimum = 4, Q1 = 28, median = 38, Q3 = 43, maximum = 50. Determine the type of skewness and justify your answer using both the box and the whiskers.', answer: 'Negatively (left) skewed — the lower box half (median − Q1 = 38 − 28 = 10) is larger than the upper box half (Q3 − median = 43 − 38 = 5), and the left whisker (Q1 − min = 28 − 4 = 24) is much longer than the right whisker (max − Q3 = 50 − 43 = 7), showing a long tail of low values on the left.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A data set has minimum = 12, Q1 = 20, median = 26, Q3 = 35, maximum = 48. Determine the type of skewness, using both the box halves and the whiskers to justify your answer.', answer: 'Positively (right) skewed — the upper box half (Q3 − median = 35 − 26 = 9) is larger than the lower box half (median − Q1 = 26 − 20 = 6), and the right whisker (max − Q3 = 48 − 35 = 13) is longer than the left whisker (Q1 − min = 20 − 12 = 8), both indicating a longer spread on the higher side.', checkMode: 'self' },

        // ── Block 5 — Variance / SD comparison of two data sets (Q17-18) ────
        { difficulty: 'Hard', question: 'Class A test scores: 45, 50, 55, 60, 65 (mean = 55). Class B test scores: 35, 50, 55, 60, 75 (mean = 55). Find the standard deviation of Class A, showing your working.', answer: 'Deviations: −10, −5, 0, 5, 10. Squared deviations: 100, 25, 0, 25, 100. Sum = 250. Variance = 250 ÷ 5 = 50. Standard deviation = √50 ≈ 7.07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Using the same two classes (Class A: 45, 50, 55, 60, 65, mean 55; Class B: 35, 50, 55, 60, 75, mean 55), find the standard deviation of Class B and state which class has more consistent scores.', answer: 'Deviations: −20, −5, 0, 5, 20. Squared deviations: 400, 25, 0, 25, 400. Sum = 850. Variance = 850 ÷ 5 = 170. Standard deviation = √170 ≈ 13.04. Since Class A has the smaller standard deviation (≈7.07 vs ≈13.04), Class A has more consistent scores, even though both classes have the same mean.', checkMode: 'self' },

        // ── Block 6 — Combined ogive + skewness reasoning (Q19-20) ──────────
        { difficulty: 'Hard', question: 'An ogive for the monthly data usage (in GB) of 60 learners passes through the points (0, 0), (10, 15), (20, 45), (30, 60). Using these plotted points, estimate the interquartile range of the data usage.', answer: 'Q1 is at cumulative frequency n/4 = 15, which occurs exactly at the plotted point (10, 15), so Q1 = 10GB. Q3 is at cumulative frequency 3n/4 = 45, which occurs exactly at the plotted point (20, 45), so Q3 = 20GB. IQR = Q3 − Q1 = 20 − 10 = 10GB.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Given the estimated five-number summary from an ogive of households' monthly electricity costs (rands): minimum = 200, Q1 = 450, median = 600, Q3 = 750, maximum = 2400. Determine the skewness of the distribution and explain what this suggests about the group of households' electricity costs.", answer: 'Positively (right) skewed — the right whisker (max − Q3 = 2400 − 750 = 1650) is far longer than the left whisker (Q1 − min = 450 − 200 = 250), and the box halves are roughly equal (median − Q1 = 150, Q3 − median = 150). This suggests most households have relatively similar, moderate electricity costs, but a small number of households have very high costs, pulling the distribution\'s tail sharply to the right.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered variance, standard deviation, ogives, histograms and skewness judgements.' },
        { minScore: 15, message: 'Great work! Review any missed questions on ogive interpolation or skewness, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on standard deviation and reading an ogive, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1 — Variance / standard deviation from raw data (Q1-4) ────
        { difficulty: 'Easy', question: 'Find the standard deviation of: 6, 8, 10, 12, 14 (mean = 10).', answer: '2.83', checkMode: 'auto', correctAnswer: '2.83', explanation: 'Deviations: −4, −2, 0, 2, 4. Squared deviations: 16, 4, 0, 4, 16. Sum = 40. Variance = 40 ÷ 5 = 8. Standard deviation = √8 ≈ 2.83 ✓' },
        { difficulty: 'Easy', question: 'Find the variance of: 9, 11, 13, 15, 17, 19 (mean = 14).', answer: '11.67', checkMode: 'auto', correctAnswer: '11.67', correctAnswers: ['11.67', '11.7', '70/6', '11.666666666666666'], explanation: 'Deviations: −5, −3, −1, 1, 3, 5. Squared deviations: 25, 9, 1, 1, 9, 25. Sum = 70. Variance = 70 ÷ 6 ≈ 11.67 ✓' },
        { difficulty: 'Medium', question: 'Find the standard deviation of: 2, 6, 10, 14, 18 (mean = 10), showing your working.', answer: 'Deviations: −8, −4, 0, 4, 8. Squared deviations: 64, 16, 0, 16, 64. Sum = 160. Variance = 160 ÷ 5 = 32. Standard deviation = √32 ≈ 5.66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the standard deviation of: 10, 14, 17, 20, 24, 27, 31 (mean = 20.43, rounded to 2 decimal places), showing your full working.', answer: 'Deviations (using mean ≈ 20.43): −10.43, −6.43, −3.43, −0.43, 3.57, 6.57, 10.57. Squared deviations ≈ 108.8, 41.3, 11.8, 0.2, 12.7, 43.2, 111.7. Sum ≈ 329.7. Variance ≈ 329.7 ÷ 7 ≈ 47.1. Standard deviation ≈ √47.1 ≈ 6.86.', checkMode: 'self' },

        // ── Block 2 — Ogive: estimating median, Q1, Q3 (Q5-8) ───────────────
        { difficulty: 'Easy', question: 'A frequency table for the time (minutes) spent by 40 customers in a queue has intervals 0–6 (frequency 4), 6–12 (frequency 8), 12–18 (frequency 16), 18–24 (frequency 8), 24–30 (frequency 4). Total = 40. Find the cumulative frequency up to 18.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Cumulative frequency up to 18 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Queue time (upper boundary, minutes)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same queue time data (intervals 0–6 freq 4, 6–12 freq 8, 12–18 freq 16, 18–24 freq 8, 24–30 freq 4, total 40), the cumulative frequencies at the upper boundaries are: 4, 12, 28, 36, 40. Using an ogive drawn from these points, estimate the median queue time.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 minutes', '15min'], explanation: 'The median is at cumulative frequency n/2 = 20. This falls in the 12–18 interval (cumulative frequency rises from 12 to 28 there). Estimating: 12 + ((20−12)/16)×6 = 12 + 3 = 15 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Queue time (upper boundary, minutes)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Using the same queue time ogive (intervals 0–6 freq 4, 6–12 freq 8, 12–18 freq 16, 18–24 freq 8, 24–30 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q1 (the queue time at the 25% mark) using interpolation.', answer: '10.5', checkMode: 'auto', correctAnswer: '10.5', correctAnswers: ['10.5', '10.5 minutes', '10.5min'], explanation: 'Q1 is at cumulative frequency n/4 = 10. This falls in the 6–12 interval (cumulative frequency rises from 4 to 12 there). Estimating: 6 + ((10−4)/8)×6 = 6 + 4.5 = 10.5 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Queue time (upper boundary, minutes)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same queue time ogive (intervals 0–6 freq 4, 6–12 freq 8, 12–18 freq 16, 18–24 freq 8, 24–30 freq 4, total 40, cumulative frequencies 4, 12, 28, 36, 40), estimate Q3 (the queue time at the 75% mark) and hence find the interquartile range, given Q1 = 10.5.', answer: 'Q3 is at cumulative frequency 3n/4 = 30, which falls in the 18–24 interval (cumulative frequency rises from 28 to 36 there). Estimating: 18 + ((30−28)/8)×6 = 18 + 1.5 = 19.5. IQR = Q3 − Q1 = 19.5 − 10.5 = 9.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Queue time (upper boundary, minutes)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Cumulative frequency</text></svg>' },

        // ── Block 3 — Histogram / frequency polygon interpretation (Q9-12) ──
        { difficulty: 'Easy', question: 'A histogram for the number of goals scored per match by 30 teams over a season has bars for intervals 0–10 (frequency 2), 10–20 (frequency 8), 20–30 (frequency 14), 30–40 (frequency 6). Identify the modal class.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 to 30'], explanation: 'The modal class is the interval with the highest frequency. 20–30 has frequency 14, the highest of the four intervals ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="214.28571428571428" width="75" height="30.714285714285722" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="206.28571428571428" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><rect x="130" y="122.14285714285715" width="75" height="122.85714285714285" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="114.14285714285715" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><rect x="280" y="152.85714285714286" width="75" height="92.14285714285714" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="144.85714285714286" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Goals scored per match</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same match data (intervals 0–10 freq 2, 10–20 freq 8, 20–30 freq 14, 30–40 freq 6, total 30), estimate the mean using interval midpoints.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Midpoints: 5, 15, 25, 35. Σ(midpoint × freq) = (5×2)+(15×8)+(25×14)+(35×6) = 10+120+350+210 = 690. Mean = 690 ÷ 30 = 23 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="214.28571428571428" width="75" height="30.714285714285722" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="206.28571428571428" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><rect x="130" y="122.14285714285715" width="75" height="122.85714285714285" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="114.14285714285715" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><rect x="280" y="152.85714285714286" width="75" height="92.14285714285714" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="144.85714285714286" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Goals scored per match</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'A frequency polygon is drawn from the same match data (midpoints 5, 15, 25, 35 with frequencies 2, 8, 14, 6). Describe how the points of the frequency polygon are plotted and connected.', answer: 'Points are plotted at (midpoint, frequency): (5,2), (15,8), (25,14), (35,6), and connected in order with straight lines.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="214.28571428571428" width="75" height="30.714285714285722" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="206.28571428571428" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><rect x="130" y="122.14285714285715" width="75" height="122.85714285714285" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="114.14285714285715" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><rect x="280" y="152.85714285714286" width="75" height="92.14285714285714" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="144.85714285714286" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Goals scored per match</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frequency</text></svg>' },
        { difficulty: 'Hard', question: 'Amahle wants to compare this season\'s match data with last season\'s on the same set of axes. Explain why a frequency polygon would be a better choice than a histogram for this comparison.', answer: 'Two frequency polygons can be drawn on the same axes as thin lines that remain distinguishable, allowing a direct visual comparison of the two seasons. Two histograms drawn on the same axes would use solid overlapping bars, which would obscure each other and make comparison much harder to read.', checkMode: 'self' },

        // ── Block 4 — Symmetric vs skewed judgement from five-number summary (Q13-16) ──
        { difficulty: 'Easy', question: 'A data set has minimum = 20, Q1 = 30, median = 40, Q3 = 50, maximum = 60. Is this data set symmetric, positively skewed, or negatively skewed?', answer: 'symmetric', checkMode: 'auto', correctAnswer: 'symmetric', correctAnswers: ['symmetric', 'Symmetric'], explanation: 'Median to Q3 = 10, median to Q1 = 10 (equal box halves). Q1 to minimum = 10, Q3 to maximum = 10 (equal whiskers). Both sides match exactly, so the data is symmetric ✓' },
        { difficulty: 'Medium', question: 'A data set has minimum = 6, Q1 = 16, median = 19, Q3 = 23, maximum = 62. Determine the type of skewness and justify your answer using the whisker lengths.', answer: 'Positively (right) skewed — the left whisker (Q1 − min = 16 − 6 = 10) is much shorter than the right whisker (max − Q3 = 62 − 23 = 39), showing the data has a long tail of high values on the right.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A data set has minimum = 3, Q1 = 26, median = 36, Q3 = 41, maximum = 47. Determine the type of skewness and justify your answer using both the box and the whiskers.', answer: 'Negatively (left) skewed — the lower box half (median − Q1 = 36 − 26 = 10) is larger than the upper box half (Q3 − median = 41 − 36 = 5), and the left whisker (Q1 − min = 26 − 3 = 23) is much longer than the right whisker (max − Q3 = 47 − 41 = 6), showing a long tail of low values on the left.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A data set has minimum = 14, Q1 = 22, median = 28, Q3 = 38, maximum = 50. Determine the type of skewness, using both the box halves and the whiskers to justify your answer.', answer: 'Positively (right) skewed — the upper box half (Q3 − median = 38 − 28 = 10) is larger than the lower box half (median − Q1 = 28 − 22 = 6), and the right whisker (max − Q3 = 50 − 38 = 12) is longer than the left whisker (Q1 − min = 22 − 14 = 8), both indicating a longer spread on the higher side.', checkMode: 'self' },

        // ── Block 5 — Variance / SD comparison of two data sets (Q17-18) ────
        { difficulty: 'Hard', question: 'Class A test scores: 55, 60, 65, 70, 75 (mean = 65). Class B test scores: 45, 60, 65, 70, 85 (mean = 65). Find the standard deviation of Class A, showing your working.', answer: 'Deviations: −10, −5, 0, 5, 10. Squared deviations: 100, 25, 0, 25, 100. Sum = 250. Variance = 250 ÷ 5 = 50. Standard deviation = √50 ≈ 7.07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Using the same two classes (Class A: 55, 60, 65, 70, 75, mean 65; Class B: 45, 60, 65, 70, 85, mean 65), find the standard deviation of Class B and state which class has more consistent scores.', answer: 'Deviations: −20, −5, 0, 5, 20. Squared deviations: 400, 25, 0, 25, 400. Sum = 850. Variance = 850 ÷ 5 = 170. Standard deviation = √170 ≈ 13.04. Since Class A has the smaller standard deviation (≈7.07 vs ≈13.04), Class A has more consistent scores, even though both classes have the same mean.', checkMode: 'self' },

        // ── Block 6 — Combined ogive + skewness reasoning (Q19-20) ──────────
        { difficulty: 'Hard', question: 'An ogive for the weekly distances (in km) run by 60 athletes passes through the points (0, 0), (20, 15), (40, 45), (60, 60). Using these plotted points, estimate the interquartile range of the weekly distances.', answer: 'Q1 is at cumulative frequency n/4 = 15, which occurs exactly at the plotted point (20, 15), so Q1 = 20km. Q3 is at cumulative frequency 3n/4 = 45, which occurs exactly at the plotted point (40, 45), so Q3 = 40km. IQR = Q3 − Q1 = 40 − 20 = 20km.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Given the estimated five-number summary from an ogive of a factory's daily output faults: minimum = 1, Q1 = 6, median = 9, Q3 = 12, maximum = 40. Determine the skewness of the distribution and explain what this suggests about the factory's daily fault counts.", answer: 'Positively (right) skewed — the right whisker (max − Q3 = 40 − 12 = 28) is far longer than the left whisker (Q1 − min = 6 − 1 = 5), and the box halves are roughly equal (median − Q1 = 3, Q3 − median = 3). This suggests most days have a similar, low number of faults, but a small number of days have unusually high fault counts, pulling the distribution\'s tail sharply to the right.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered variance, standard deviation, ogives, histograms and skewness judgements.' },
        { minScore: 15, message: 'Great work! Review any missed questions on ogive interpolation or skewness, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on standard deviation and reading an ogive, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 10, message: 'Outstanding! A perfect score — you have completely mastered Grade 11 Statistics. Keep it up!' },
    { minScore: 8, message: 'Excellent work! You have a very strong grasp of statistics. Review any missed parts and you will have it perfect.' },
    { minScore: 6, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}

export const topicPractice = [
  // Q1 — Easy ──────────────────────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Find the median of: 6, 9, 12, 15, 18, 21, 24.',
    answer: '15',
    checkMode: 'auto',
    correctAnswer: '15',
    explanation: 'The data is already ordered (7 values). The median is the 4th (middle) value = 15.',
  },

  // Q2 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Find Q1 and Q3 of: 3, 7, 11, 15, 19, 23, 27, 31.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Q1 =',
        correctAnswer: '9',
        explanation: 'Lower half (first 4 values): 3, 7, 11, 15. Q1 = median = (7 + 11) ÷ 2 = 9.',
      },
      {
        label: 'Q3 =',
        correctAnswer: '25',
        explanation: 'Upper half (last 4 values): 19, 23, 27, 31. Q3 = median = (23 + 27) ÷ 2 = 25.',
      },
    ],
  },

  // Q3 — Hard (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'A box and whisker diagram shows: minimum = 5, Q1 = 10, median = 14, Q3 = 20, maximum = 35.\nDescribe whether the data appears symmetric, positively skewed, or negatively skewed, and justify your answer.',
    answer: 'The distance from median to Q3 (6) and Q3 to maximum (15) is much larger than the corresponding lower distances (Q1 to median = 4, minimum to Q1 = 5), indicating positive (right) skewness.',
    checkMode: 'self',
    diagramPlaceholder: '<DiagramPlaceholder label="Box and whisker diagram showing minimum=5, Q1=10, median=14, Q3=20, maximum=35, drawn on a number line with the box from Q1 to Q3, a line at the median, and whiskers extending to min and max" />',
  },

  // Q4 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Using the diagram in Q3 (minimum = 5, Q1 = 10, median = 14, Q3 = 20, maximum = 35), find the interquartile range.',
    answer: '10',
    checkMode: 'auto',
    correctAnswer: '10',
    explanation: 'IQR = Q3 − Q1 = 20 − 10 = 10.',
  },

  // Q5 — Hard (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Using the diagram in Q3 (minimum = 5, Q1 = 10, median = 14, Q3 = 20, maximum = 35), find the range and compare it to the interquartile range, explaining what the difference suggests.',
    answer: 'Range = 35 − 5 = 30. IQR = 10. The much larger range compared to IQR suggests the data has values far from the central cluster, consistent with the skewness observed.',
    checkMode: 'self',
  },

  // Q6 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'A data set has intervals 0–10 (frequency 4), 10–20 (frequency 9), 20–30 (frequency 7), total 20. Find the cumulative frequencies.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Cumulative frequency up to 10:',
        correctAnswer: '4',
        explanation: 'Only the first interval contributes: cumulative frequency = 4.',
      },
      {
        label: 'Cumulative frequency up to 20:',
        correctAnswer: '13',
        explanation: '4 (from first interval) + 9 (second interval) = 13.',
      },
      {
        label: 'Cumulative frequency up to 30:',
        correctAnswer: '20',
        explanation: '13 + 7 = 20. This equals the total (20), confirming the table is correct.',
      },
    ],
  },

  // Q7 — Hard (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Using the cumulative frequencies from Q6 (0–10: cumulative 4, 10–20: cumulative 13, 20–30: cumulative 20, total 20), estimate which interval contains the median. Justify your answer.',
    answer: 'The median is at the 10th value. Since cumulative frequency reaches 13 within the 10–20 interval (having been only 4 before it), the median falls within 10–20.',
    checkMode: 'self',
  },

  // Q8 — Easy ───────────────────────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Find the standard deviation of: 2, 4, 6, 8, 10 (mean = 6).',
    answer: '2.83',
    checkMode: 'auto',
    correctAnswer: '2.83',
    explanation: 'Deviations: −4, −2, 0, 2, 4. Squared deviations: 16, 4, 0, 4, 16. Sum = 40. Variance = 40 ÷ 5 = 8. Standard deviation = √8 ≈ 2.83.',
  },

  // Q9 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Two classes have the same mean but Class X has SD = 3 and Class Y has SD = 12. Which class has more varied scores?',
    answer: 'Class Y',
    checkMode: 'auto',
    correctAnswer: 'Class Y',
    correctAnswers: ['Class Y', 'class Y', 'Y', 'class y'],
    explanation: 'A larger standard deviation means data is more spread out. SD = 12 > SD = 3, so Class Y has more varied (less consistent) scores.',
  },

  // Q10 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Find the variance of: 5, 8, 11, 14, 17 (mean = 11), showing your full working.',
    answer: 'Deviations: −6, −3, 0, 3, 6. Squared deviations: 36, 9, 0, 9, 36. Sum = 90. Variance = 90 ÷ 5 = 18.',
    checkMode: 'self',
  },

  // Q11 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Using your answer from Q10 (variance = 18), find the standard deviation.',
    answer: '√18 ≈ 4.24.',
    checkMode: 'self',
  },

  // Q12 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'A scatter plot shows points rising in a roughly straight line. What type of model likely fits this data?',
    answer: 'linear',
    checkMode: 'auto',
    correctAnswer: 'linear',
    correctAnswers: ['linear', 'Linear', 'linear model', 'Linear model', 'a linear model', 'A linear model'],
    explanation: 'A steady, straight-line rising pattern indicates a linear relationship. A linear model would best fit this data.',
  },

  // Q13 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Sipho's scatter plot shows points that rise, peak, then fall in a curved pattern. What type of model would likely fit better than linear? Justify your answer.",
    answer: 'A quadratic model would likely fit better, since the data shows a rise-then-fall pattern typical of a parabola, which a straight line cannot represent.',
    checkMode: 'self',
  },

  // Q14 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Describe what a box and whisker diagram with a long left whisker and short right whisker suggests about skewness.',
    answer: 'negatively (left) skewed',
    checkMode: 'auto',
    correctAnswer: 'negatively (left) skewed',
    correctAnswers: [
      'negatively (left) skewed',
      'negatively skewed',
      'negative skew',
      'left skewed',
      'left-skewed',
      'negative',
      'negatively skewed (left)',
    ],
    explanation: 'A long left whisker and short right whisker means the tail extends to the left — this indicates negative (left) skewness.',
  },

  // Q15 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato says positively skewed data always has the mean greater than the median. Is this generally true? Explain.',
    answer: 'Yes — in positively (right) skewed data, the longer tail of higher values pulls the mean upward more than the median, which is less affected by extreme values, typically making mean > median.',
    checkMode: 'self',
  },

  // Q16 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Find the five number summary of: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Minimum =',
        correctAnswer: '2',
        explanation: 'The smallest value in the ordered data set is 2.',
      },
      {
        label: 'Q1 =',
        correctAnswer: '6.5',
        explanation: 'n = 10. Q1 is at position n/4 = 2.5, so Q1 = average of 2nd and 3rd values = (5 + 8) ÷ 2 = 6.5.',
      },
      {
        label: 'Median =',
        correctAnswer: '15.5',
        explanation: 'n = 10 (even). Median = average of 5th and 6th values = (14 + 17) ÷ 2 = 15.5.',
      },
      {
        label: 'Q3 =',
        correctAnswer: '21.5',
        explanation: 'Q3 is at position 3n/4 = 7.5, so Q3 = average of 7th and 8th values = (20 + 23) ÷ 2 = 21.5.',
      },
      {
        label: 'Maximum =',
        correctAnswer: '29',
        explanation: 'The largest value in the ordered data set is 29.',
      },
    ],
  },

  // Q17 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'A data set has standard deviation 0. What does this tell you about the data?',
    answer: 'A standard deviation of 0 means every value in the data set is identical (no variation at all), since there are no deviations from the mean.',
    checkMode: 'self',
  },

  // Q18 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'An ogive (cumulative frequency curve) for exam scores rises from (0, 0) to approximately (100, 200). At score = 40, the cumulative frequency is 50; at score = 70, the cumulative frequency is 160. The total number of students is 200.\nUsing the ogive, estimate the percentage of students who scored below 40.',
    answer: 'Cumulative frequency at 40 = 50 out of 200 total. Percentage = 50 ÷ 200 × 100 = 25%.',
    checkMode: 'self',
    diagramPlaceholder: '<DiagramPlaceholder label="Ogive (cumulative frequency curve) for exam scores rising from (0,0) to approximately (100,200), with marked points showing cumulative frequency 50 at score 40 and cumulative frequency 160 at score 70" />',
  },

  // Q19 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Using the same ogive from Q18, estimate the interquartile range, given that Q1 ≈ 35 and Q3 ≈ 75 based on reading the curve at the 25% and 75% cumulative frequency marks.',
    answer: 'IQR = Q3 − Q1 = 75 − 35 = 40.',
    checkMode: 'self',
  },

  // Q20 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Amahle's scatter plot of plant height vs days shows a clear curved, accelerating pattern (slow growth initially, then rapid increase). Suggest a suitable model and explain your reasoning.",
    answer: 'An exponential model would likely suit this data best, since exponential growth characteristically starts slowly and then accelerates rapidly, matching the described pattern rather than a constant linear rate or a symmetric quadratic curve.',
    checkMode: 'self',
  },

  // Q21 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Thandi's five friends record how many minutes each spent on homework one evening: 25, 30, 32, 35 and 28. Thandi's own time, x, is unknown, but the mean for all six friends (including Thandi) is 33 minutes.\n(a) Determine x.\n(b) The five recorded values (excluding Thandi) have Q1 = 26.5 and Q3 = 33.5, so IQR = 7. Using the rule that a value below Q1 − 1.5×IQR or above Q3 + 1.5×IQR is considered an outlier, determine whether Thandi's homework time is an outlier among the six friends, and comment on what this suggests.",
    answer: "(a) Sum of the five known times = 25 + 30 + 32 + 35 + 28 = 150. Total for all six = 33 × 6 = 198, so x = 198 − 150 = 48 minutes.\n(b) Lower fence = Q1 − 1.5×IQR = 26.5 − 1.5(7) = 26.5 − 10.5 = 16. Upper fence = Q3 + 1.5×IQR = 33.5 + 10.5 = 44. Since x = 48 > 44, Thandi's time is an outlier — she spent unusually long on homework compared to her friends, well beyond what the spread of the other five values would predict.",
    checkMode: 'self',
  },

  // Q22 — Hard (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Two strikers each played 9 matches this season. Their goals per match were:\nPlayer A: 1, 2, 2, 3, 3, 3, 4, 4, 5\nPlayer B: 0, 0, 1, 2, 3, 4, 5, 6, 6\nBoth players have a mean of 3 goals per match.\n(a) Calculate the standard deviation of each player\'s goals, showing your working.\n(b) Using both the standard deviations AND the five-number summary (Q1, median, Q3) of each player, write a short justified conclusion about which player is the more consistent goal-scorer, and which player a coach chasing occasional big score-lines might prefer to pick.',
    answer: "(a) Player A: deviations −2, −1, −1, 0, 0, 0, 1, 1, 2; squared deviations 4, 1, 1, 0, 0, 0, 1, 1, 4; sum = 12; variance = 12 ÷ 9 ≈ 1.33; standard deviation ≈ 1.15.\nPlayer B: deviations −3, −3, −2, −1, 0, 1, 2, 3, 3; squared deviations 9, 9, 4, 1, 0, 1, 4, 9, 9; sum = 46; variance = 46 ÷ 9 ≈ 5.11; standard deviation ≈ 2.26.\n(b) Five-number summaries: Player A — Min 1, Q1 2, Median 3, Q3 4, Max 5 (IQR = 2). Player B — Min 0, Q1 0.5, Median 3, Q3 5.5, Max 6 (IQR = 5). Both players have the same mean and median (3), but Player A's much smaller standard deviation and IQR show his scoring is tightly clustered match to match — he is the more consistent scorer. Player B's larger spread means he is more likely to have both very low (even 0-goal) and very high-scoring games, so a coach wanting reliable, predictable output should pick Player A, while a coach gambling on occasional big score-lines might prefer Player B.",
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 22,
  messages: [
    { minScore: 20, message: 'Outstanding! You have completed all of Grade 11 and mastered statistics.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
