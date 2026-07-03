import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// smallest extreme  → blue   (#2563eb)
// largest extreme   → red    (#dc2626)
// range             → orange (#ea580c)
// connecting lines  → green  (#16a34a)
// bias factors      → red    (#dc2626)
// sample size       → orange (#ea580c)
// valid conclusions → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ORGANISING DATA AND MEASURES OF DISPERSION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'organising-data-measures-of-dispersion',
      title: 'Organising Data and Measures of Dispersion',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We revise organising data using tally marks, tables and stem-and-leaf displays, grouping data into intervals, and summarising using mean, median and mode. We extend this to <strong>measures of dispersion</strong>, including range and extremes (the smallest and largest values in a data set).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('smallest extreme')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('largest extreme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('range')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Smallest Extreme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('smallest value')} in a data set — also called the minimum.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Largest Extreme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('largest value')} in a data set — also called the maximum.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('difference')} between the largest and smallest values — it measures how spread out the data is.</p>` +
        `</div>` +

        `</div>` +

        // ── Range formula ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Range formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('Range')} = ${re('largest extreme')} − ${bl('smallest extreme')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why dispersion matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Two data sets can have the same mean but very different spreads. The ${or('range')} tells you how spread out the data is — a large range means the values vary widely, while a small range means they are clustered together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the range and extremes of the data set: 12, 45, 8, 33, 52, 19.',
          answer: `${bl('Smallest extreme')} = ${bl('8')}, ${re('Largest extreme')} = ${re('52')}, ${or('Range')} = ${or('44')}`,
          steps: [
            `Identify the ${bl('smallest value (extreme)')} by scanning all values: 12, 45, 8, 33, 52, 19. The ${bl('smallest extreme')} = ${bl('8')} (minimum).`,
            `Identify the ${re('largest value (extreme)')} in the data set. The ${re('largest extreme')} = ${re('52')} (maximum).`,
            `Calculate the ${or('range')}: ${or('Range')} = ${re('largest extreme')} − ${bl('smallest extreme')} = ${re('52')} − ${bl('8')} = ${or('44')}.`,
          ],
        },
        {
          question: 'Sipho groups test scores into intervals of 10 (0–9, 10–19, 20–29, …). Why might this be useful?',
          answer: 'Grouping data into intervals makes large data sets easier to summarise and represent visually, especially with many individual values.',
          steps: [
            'Grouping data into intervals makes large data sets easier to summarise and represent visually, especially when there are many individual values.',
            'Instead of listing every single score, intervals allow you to see how many scores fall within each range — revealing the overall shape and distribution of the data.',
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the range of the data set: 14, 22, 9, 31, 18.',
          answer: '22',
          checkMode: 'auto',
          correctAnswer: '22',
          explanation: 'Smallest value = 9. Largest value = 31.\nRange = 31 − 9 = 22 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the extremes of the data set: 45, 12, 67, 23, 8, 52.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Smallest extreme',
              correctAnswer: '8',
              explanation: 'Arrange the values in order: 8, 12, 23, 45, 52, 67. The smallest extreme = 8.',
            },
            {
              label: 'b) Largest extreme',
              correctAnswer: '67',
              explanation: 'Arrange the values in order: 8, 12, 23, 45, 52, 67. The largest extreme = 67.',
            },
          ],
        },

        // ── Q3 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says grouping data into intervals always loses important information. Is he correct? Explain.',
          answer: 'Partly — grouping makes data easier to summarise and visualise, but it does lose some individual detail, since exact values within each interval are not shown.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the range and extremes of a data set and why grouping data into intervals is useful" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a data set organised into a stem-and-leaf display and grouped intervals, with smallest extreme blue, largest extreme red and range orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — REPRESENTING DATA WITH HISTOGRAMS AND BROKEN-LINE GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'histograms-broken-line-graphs',
      title: 'Representing Data with Histograms and Broken-Line Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">We draw a variety of graphs including bar graphs, double bar graphs, histograms (with given and own intervals), pie charts, and now <strong>broken-line graphs</strong>, which show how data changes over time using connected straight line segments.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('data points')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('connecting lines')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('histogram bars')}</span>` +
        `</div>` +

        // ── Graph types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Graph types</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Histogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A bar graph for grouped (continuous) data. ${or('Bars must touch')} — no gaps between them. Each bar represents a class interval.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Broken-Line Graph</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Data points')} are plotted and connected by ${gr('straight lines')}. Ideal for showing how data <strong>changes over time</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Histogram rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for histograms</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Equal intervals')} — all class intervals must be the same width for the histogram to be meaningful.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bars touch')} — there are no gaps between bars because the data is continuous (one interval flows into the next).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Frequency on y-axis')} — the height of each bar shows how many values fall in that interval.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">When to use a broken-line graph</p>` +
        `<p style="margin:0;color:#166534;">Use a broken-line graph when the data is measured at regular time intervals (months, years, hours) and you want to show ${gr('trends and changes')} over that time period.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how a broken-line graph would show monthly rainfall changing over a year.',
          answer: `Each month's rainfall is plotted as a ${bl('data point')}, and the points are connected with ${gr('straight lines')}, showing increases and decreases over time.`,
          steps: [
            `Each month's rainfall value is plotted as a ${bl('data point')} on the graph, with the months along the x-axis and rainfall (in mm) along the y-axis.`,
            `The ${bl('data points')} are then connected with ${gr('straight line segments')}, creating a visual picture of how rainfall increases and decreases across the year.`,
            `Upward ${gr('connecting lines')} indicate rising rainfall, while downward lines show a decrease — making it easy to spot the wettest and driest months. See the diagram below.`,
          ],
        },
        {
          question: 'Lerato creates a histogram for test scores grouped into intervals of 10. What must she be careful about?',
          answer: `She must ensure intervals are equal in size and that ${or('histogram bars')} touch each other (no gaps), since histograms represent continuous data ranges.`,
          steps: [
            `She must ensure all intervals are <strong>equal in size</strong> (each spans exactly 10 marks: 0–9, 10–19, 20–29, etc.). Unequal intervals make the histogram misleading.`,
            `The ${or('histogram bars')} must <strong>touch each other with no gaps</strong> between them, because test scores form continuous data — each interval flows directly into the next.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What type of graph uses connected straight line segments to show change over time?',
          answer: 'broken-line graph',
          checkMode: 'auto',
          correctAnswer: 'broken-line graph',
          correctAnswers: ['broken-line graph', 'broken line graph', 'line graph'],
          explanation: 'A broken-line graph plots data points and connects them with straight line segments to show how values change over time.',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Why must histogram bars touch each other with no gaps?',
          answer: 'Because histograms represent continuous data, where each interval flows directly into the next without breaks.',
          checkMode: 'self',
        },

        // ── Q6 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato creates a histogram with intervals of different sizes (some intervals span 10 marks, others span 20 marks). Why is this a problem?',
          answer: 'Unequal interval sizes make the histogram misleading, since bar heights would not accurately represent frequency density across the data.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a histogram with equal intervals and a broken-line graph with data points connected by straight lines" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a broken-line graph showing monthly rainfall over 12 months, with points connected by straight lines" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INTERPRETING, ANALYSING AND REPORTING DATA CRITICALLY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-analysing-data',
      title: 'Interpreting, Analysing and Reporting Data Critically',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">We critically read and interpret data from various representations (including broken-line graphs), analyse data by considering categories, sources, central tendencies, scales, samples/populations, dispersion, and error/bias. We report findings in short paragraphs including conclusions, predictions and identifying bias.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('bias factors')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sample size')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('valid conclusions')}</span>` +
        `</div>` +

        // ── Critical analysis checklist ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Critical analysis checklist</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Bias')} — Is the data collection method fair? Could certain groups be over- or under-represented?</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Sample size')} — Is the ${or('sample')} large enough and representative of the population? A small or biased sample leads to unreliable conclusions.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Misleading scales')} — Does the graph axis start at zero? A scale that does not start at 0 can make differences appear much larger than they are.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Valid conclusions')} — Are the findings supported by the data? ${gr('Valid conclusions')} are based on evidence from the data, not assumptions.</p>` +
        `</div>` +

        `</div>` +

        // ── Sample vs population ─────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sample</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A smaller, selected subset of the population. The ${or('sample size')} must be large enough to represent the population reliably.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Population</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The entire group being studied. ${gr('Valid conclusions')} apply to the population — but only if the sample truly represents it.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always question the data</p>` +
        `<p style="margin:0;color:#991b1b;">When interpreting data, always ask: Who collected it? How was it collected? Is the ${or('sample')} representative? Could ${re('bias')} have affected the results? Only then can you draw ${gr('valid conclusions')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A survey of 10 friends shows 90% prefer a certain snack. Why might this conclusion be biased?',
          answer: `The ${or('sample size')} is very small and not randomly selected, so this is not representative of a larger population.`,
          steps: [
            `The ${or('sample size')} is very small — only 10 people. This is unlikely to represent the preferences of a large and diverse population.`,
            `The sample is also not randomly selected (friends may share similar tastes due to similar backgrounds and preferences), introducing ${re('bias')} into the data.`,
            `Therefore, the conclusion that 90% of people prefer this snack is ${re('biased')} and unreliable — it does not represent a broader population.`,
          ],
        },
        {
          question: "Thabo's data shows a graph with a scale that starts at 50 instead of 0. How might this be misleading?",
          answer: `Starting the scale above 0 can ${re('exaggerate differences')} between values, making changes look larger than they actually are.`,
          steps: [
            `When a graph scale starts at 50 instead of 0, the visual gap between bars or points appears much larger than it actually is.`,
            `This is a form of ${re('misleading scale')} — small differences are exaggerated, making changes look dramatic when they may be minor.`,
            `A viewer who does not read the axis carefully could draw incorrect ${re('biased')} conclusions from such a graph. Always check where the axis starts before interpreting a graph.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A survey of 8 people shows 75% prefer tea over coffee. Why might this be unreliable?',
          answer: 'The sample size of 8 is very small, so the result may not represent a larger population accurately.',
          checkMode: 'self',
        },

        // ── Q8 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo's graph has a y-axis scale starting at 80 instead of 0. Why could this be misleading?",
          answer: 'Starting the scale above 0 exaggerates small differences between values, making changes appear much larger than they actually are.',
          checkMode: 'self',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Distinguish between a sample and a population.',
          answer: 'A population is the entire group being studied, while a sample is a smaller, selected subset of that population.',
          checkMode: 'self',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle surveys only people leaving a gym about exercise habits. Why might this introduce bias?',
          answer: "People at a gym are more likely to be active, so this sample doesn't represent the general population's exercise habits fairly.",
          checkMode: 'self',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A data set has a mean of 50 but a range of 80. What does this tell you about the spread of the data?',
          answer: 'The large range suggests the data is widely spread out, with some values likely far from the mean.',
          checkMode: 'self',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says comparing two data sets only requires comparing their means. Is he correct? Explain.',
          answer: 'No — comparing data sets should also include considering measures of dispersion (like range) and possible outliers, not just the mean.',
          checkMode: 'self',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A broken-line graph shows temperature rising steadily then dropping suddenly. What might cause this pattern?',
          answer: 'A steady rise could be a warming trend during the day, with a sudden drop possibly caused by a cold front or sudden weather change.',
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato finds an extreme outlier in her data set (one value far higher than the rest). How might this affect the mean?',
          answer: 'An extreme outlier would significantly pull the mean higher, since the mean is sensitive to all values, unlike the median.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says a pie chart is the best way to show data changing over time. Is he correct? Explain.',
          answer: 'No — a pie chart shows proportions at a single point in time; a broken-line graph is better suited for showing changes over time.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to critically interpret data from graphs, identify bias and misleading scales, and write valid conclusions" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two graphs side by side: one with y-axis starting at 0 and one starting at 80, illustrating how misleading scales can exaggerate differences" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered data handling.' },
    { minScore: 12, message: 'Great work! You are on track — review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
