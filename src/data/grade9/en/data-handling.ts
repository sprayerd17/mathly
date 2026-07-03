import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (data handling roles) ─────────────────────────────────────
// criteria one / data set one → blue   (#2563eb)
// criteria two / data set two → orange (#ea580c)
// outlier / negative trend    → red    (#dc2626)
// positive trend / conclusion → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ORGANISING DATA BY MULTIPLE CRITERIA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'organising-data-multiple-criteria',
      title: 'Organising Data by Multiple Criteria',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We organise numerical data in different ways to summarise it, determining <strong>measures of central tendency</strong> (mean, median, mode) and <strong>measures of dispersion</strong> (range, extremes, outliers), and organise data according to more than one criterion at once (e.g. grouping by both ${bl('gender')} and ${or('age range')}).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('criteria one')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('criteria two')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('outlier')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Measures of central tendency</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Mean</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The sum of all values divided by the number of values — the arithmetic average. Sensitive to outliers.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Median</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The middle value when data is arranged in order. Not affected by extreme values.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Mode</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that appears most often. A data set can have more than one mode.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Measures of dispersion</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Outlier</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A value far from the rest of the data. It can disproportionately affect the mean but has little effect on the median.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Highest value minus lowest value. Shows how spread out the data is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why use multiple criteria?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Grouping by ${bl('one criterion')} gives an overview, but grouping by ${bl('two criteria')} simultaneously — such as ${bl('gender')} and ${or('age range')} — allows you to find patterns within subgroups that a single criterion would mask.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "A class's test scores are grouped by both gender and pass/fail status. Why might this dual-criteria organisation be useful?",
          answer: `Organising by ${bl('two criteria')} at once allows comparisons within and between groups`,
          steps: [
            `When data is grouped by only ${bl('one criterion')} (e.g. gender alone), you see overall differences between groups but miss patterns inside them.`,
            `Organising by ${bl('two criteria')} at once — such as both ${bl('gender')} and ${or('pass/fail status')} — allows comparisons within and between groups.`,
            `For example, comparing pass rates between ${bl('boys')} and ${or('girls')} separately can reveal patterns a single criterion might hide.`,
          ],
        },
        {
          question: 'Sipho has data: 12, 45, 18, 90, 22, 15. Identify any potential outlier and explain why.',
          answer: `${re('90')} is a likely outlier — it is far higher than the rest of the data`,
          steps: [
            `Arrange the values in order: 12, 15, 18, 22, 45, ${re('90')}.`,
            `Most values cluster between 12 and 45, but ${re('90')} is far higher than the rest.`,
            `${re('90')} is a likely ${re('outlier')} that could disproportionately affect the mean.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Identify the outlier in this data set: 8, 12, 15, 9, 11, 85.',
          answer: '85',
          checkMode: 'auto',
          correctAnswer: '85',
          explanation: 'Most values cluster between 8 and 15, but 85 is far higher than the rest, making it a clear outlier.\nAnswer: 85 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Why might grouping data by two criteria reveal patterns a single criterion misses?',
          answer: 'It allows comparisons within and between subgroups, which can reveal relationships hidden when looking at only one factor at a time.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho has a data set with an extreme outlier. How would removing it likely affect the mean and median differently?',
          answer: "Removing the outlier would likely change the mean significantly (since it's sensitive to all values), but have little to no effect on the median (since it's based on position, not magnitude).",
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says outliers should always be removed from a data set before analysis. Is she correct? Explain.',
          answer: 'Not necessarily — outliers should be investigated first, since they might represent genuine, important information rather than errors; removing them without good reason could bias the analysis.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato has data grouped by both age group and exercise frequency. Suggest one insight this dual-criteria grouping could reveal that single-criteria grouping might miss.',
          answer: 'It could reveal whether exercise frequency differs specifically within certain age groups, rather than just an overall average across all ages.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "Thabo's data set is 22, 25, 24, 23, 99, 21. Identify the likely outlier and explain how it might affect his calculated mean.",
          answer: "99 is the likely outlier, as it's far higher than the other closely clustered values. Including it would significantly inflate the mean compared to the true central tendency of the rest of the data.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to identify outliers and organise data by multiple criteria to reveal hidden patterns in data sets" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a two-way table grouping data by two criteria simultaneously — for example gender across rows and pass/fail status across columns with counts in each cell" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SCATTER PLOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scatter-plots',
      title: 'Scatter Plots',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A scatter plot shows the relationship between two numerical variables, with each ${bl('data point')} plotted as a dot based on its two values. Scatter plots help us identify trends — ${gr('positive correlation')} (both increase together), ${re('negative correlation')} (one increases as the other decreases), or no correlation (no clear pattern).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('data points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('positive trend')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negative trend')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of correlation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Positive correlation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As one variable increases, the other also increases. Points rise from ${gr('bottom-left to top-right')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negative correlation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As one variable increases, the other decreases. Points fall from ${re('top-left to bottom-right')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">No correlation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Points are scattered randomly with no clear direction — the two variables appear unrelated.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading a scatter plot</p>` +
        `<p style="margin:0;color:#1e3a8a;">Each ${bl('data point')} represents one observation. Look at the overall direction of the ${bl('points')}: a clear ${gr('upward trend')} suggests positive correlation; a clear ${re('downward trend')} suggests negative correlation; a random scatter suggests no correlation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A scatter plot shows hours studied vs test scores, with points generally rising from bottom-left to top-right. What does this suggest?',
          answer: `This suggests a ${gr('positive correlation')} — as hours studied increases, test scores tend to increase too`,
          steps: [
            `The ${bl('data points')} rise from bottom-left to top-right, forming an upward pattern.`,
            `This suggests a ${gr('positive correlation')} — as hours studied increases, test scores tend to increase too. See the diagram below showing this trend.`,
          ],
        },
        {
          question: "Lerato's scatter plot shows car age vs car value, with points falling from top-left to bottom-right. What correlation does this show?",
          answer: `This shows a ${re('negative correlation')} — as car age increases, car value tends to decrease`,
          steps: [
            `The ${bl('data points')} fall from top-left to bottom-right, forming a downward pattern.`,
            `This shows a ${re('negative correlation')} — as car age increases, car value tends to decrease.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A scatter plot shows points rising from bottom-left to top-right. What type of correlation is this?',
          answer: 'positive',
          checkMode: 'auto',
          correctAnswer: 'positive',
          correctAnswers: ['positive', 'positive correlation'],
          explanation: 'Points rising from bottom-left to top-right indicate a positive correlation — as one variable increases, so does the other.\nAnswer: positive correlation ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A scatter plot shows points falling from top-left to bottom-right. What type of correlation is this?',
          answer: 'negative',
          checkMode: 'auto',
          correctAnswer: 'negative',
          correctAnswers: ['negative', 'negative correlation'],
          explanation: 'Points falling from top-left to bottom-right indicate a negative correlation — as one variable increases, the other decreases.\nAnswer: negative correlation ✓',
        },
        {
          difficulty: 'Hard',
          question: "Lerato's scatter plot shows points scattered randomly with no clear pattern. What does this suggest about the relationship between the two variables?",
          answer: "It suggests there is no correlation between the two variables — they don't appear to be related in any consistent way.",
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'A scatter plot of ice cream sales vs temperature shows a positive correlation. What does this suggest?',
          answer: 'as temperature increases, ice cream sales tend to increase too',
          checkMode: 'auto',
          correctAnswer: 'as temperature increases ice cream sales tend to increase too',
          correctAnswers: [
            'as temperature increases ice cream sales tend to increase too',
            'as temperature increases, ice cream sales tend to increase too',
            'positive',
            'positive correlation',
            'ice cream sales increase as temperature increases',
          ],
          explanation: 'A positive correlation means both variables increase together — as temperature rises, ice cream sales also tend to rise.\nAnswer: as temperature increases, ice cream sales tend to increase too ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Identify the type of correlation if a scatter plot shows car speed vs travel time for a fixed distance.',
          answer: 'negative',
          checkMode: 'auto',
          correctAnswer: 'negative',
          correctAnswers: ['negative', 'negative correlation'],
          explanation: 'For a fixed distance, as speed increases, travel time decreases — this is a negative correlation.\nAnswer: negative correlation ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A scatter plot shows no clear pattern between shoe size and test scores. What can be concluded?',
          answer: 'There is no meaningful correlation between shoe size and test scores; the two variables appear unrelated.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw and interpret scatter plots and identify positive, negative and no correlation from the pattern of data points" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two scatter plots side by side — one showing positive correlation (points rising left to right) and one showing negative correlation (points falling left to right), each with a clear trend line" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING TWO SETS OF DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-two-sets-of-data',
      title: 'Comparing Two Sets of Data',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We critically compare two sets of data related to the same issue, analysing differences in central tendency, spread, and identifying sources of error or bias, then reporting comparisons in short paragraphs with conclusions and predictions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('data set one')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('data set two')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('comparison conclusion')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">What to compare</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Central tendency</strong> — Compare the mean, median or mode of each data set. Are the averages similar or different?</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Spread</strong> — Compare the range of each data set. A larger range means more variability between values.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Conclusion')} — Write a short paragraph summarising the similarities and differences, and make a prediction where appropriate.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same mean ≠ same data set</p>` +
        `<p style="margin:0;color:#1e3a8a;">Two data sets can have the same ${bl('mean')} but very different ${or('ranges')}. Always compare both central tendency and spread before drawing a ${gr('conclusion')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Class A's test scores have a mean of 65% with a range of 20%. Class B's scores have a mean of 65% with a range of 50%. Compare them.",
          answer: `Both classes have the same ${bl('mean')} (65%), but ${or('Class B')} has much more varied individual performance`,
          steps: [
            `Compare central tendency: ${bl('Class A')} mean = 65%, ${or('Class B')} mean = 65%. Both classes have the same average performance (mean).`,
            `Compare spread: ${bl('Class A')} range = 20%, ${or('Class B')} range = 50%. ${or('Class B')}'s scores are much more spread out (larger range).`,
            `${gr('Conclusion:')} Both classes have the same average performance (mean), but ${or('Class B')}'s scores are much more spread out (larger range), suggesting more variation in individual performance within ${or('Class B')}.`,
          ],
        },
        {
          question: "Thabo compares rainfall data from two cities over a year, noticing City A has consistently lower values with less variation, while City B has higher but more erratic values. What might this suggest?",
          answer: `${bl('City A')} likely has a more stable, predictable climate while ${or('City B')} may experience more extreme or seasonal weather variation`,
          steps: [
            `${bl('City A')} has consistently lower values with less variation — small range, stable and predictable data.`,
            `${or('City B')} has higher but more erratic values — large range, less predictable data.`,
            `${gr('Conclusion:')} City A likely has a more stable, predictable climate, while City B may experience more extreme or seasonal weather variation.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: "Class A has a mean test score of 70% with a range of 15%. Class B has a mean of 70% with a range of 40%. Which class has more varied performance?",
          answer: 'Class B',
          checkMode: 'auto',
          correctAnswer: 'Class B',
          correctAnswers: ['Class B', 'class b', 'B', 'b'],
          explanation: 'Both classes have the same mean (70%), but Class B has a larger range (40% vs 15%), indicating more varied individual performance.\nAnswer: Class B ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo compares two data sets with the same mean but different ranges. Why is the range alone not enough to fully describe a data set?',
          answer: 'Range only shows the spread between extremes, not how the rest of the data is distributed; two data sets could have the same range but very different overall patterns.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho compares rainfall in two towns: Town A (mean = 50 mm, range = 10 mm) and Town B (mean = 50 mm, range = 60 mm). Write a short comparison conclusion.',
          answer: 'Both towns have the same average rainfall, but Town B experiences much more variable rainfall patterns than the consistently steady rainfall in Town A.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to compare two data sets using mean and range and how to write a short comparison paragraph with a conclusion" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two side-by-side bar graphs representing two different data sets with the same mean but different ranges, for visual comparison of spread" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered data handling.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
