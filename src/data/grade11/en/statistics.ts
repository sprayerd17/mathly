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
]

export const resultsConfig = {
  totalMarks: 20,
  messages: [
    { minScore: 20, message: 'Outstanding! You have completed all of Grade 11 and mastered statistics.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
