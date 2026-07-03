import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   (#2563eb) → categories / first data set / degrees / mean
// orange (#ea580c) → frequency / percentages / mode
// green  (#16a34a) → totals / axis labels / median
// red    (#dc2626) → second data set
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Collecting and Organising Data',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">We collect data through <strong>surveys</strong>, <strong>observations</strong> or <strong>experiments</strong>. Raw data is organised into <strong>frequency tables</strong> to make it easier to read. A frequency table shows each ${bl('category')} and how many times it occurs — this count is called the ${or('frequency')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('categories')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frequency')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('totals')}</span>` +
        `</div>` +

        // ── Frequency table structure ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parts of a frequency table</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Category column</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Lists each group or option being counted — for example, different subjects or colours.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Frequency column</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Shows how many times each category occurs — this is the count for that group.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Total row</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The sum of all frequencies — it must match the total number of items counted.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your total</p>` +
        `<p style="margin:0;color:#1e3a8a;">After completing a frequency table, add all the frequencies. The ${gr('total')} must equal the number of items you started with — this is a built-in check that you have not missed or double-counted anything.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho surveys 20 classmates on their favourite subjects: Maths — 7, English — 5, Science — 8. Organise this data into a frequency table.',
          answer: `Frequency table: ${bl('Maths')} = ${or('7')}, ${bl('English')} = ${or('5')}, ${bl('Science')} = ${or('8')}. ${gr('Total = 20')} ✓`,
          steps: [
            `Set up a table with two columns: ${bl('Subject')} and ${or('Frequency')}.`,
            `List each ${bl('category')}: ${bl('Maths')}, ${bl('English')}, ${bl('Science')}.`,
            `Record the ${or('frequency')} next to each category: ${bl('Maths')} = ${or('7')}, ${bl('English')} = ${or('5')}, ${bl('Science')} = ${or('8')}.`,
            `Add a ${gr('Total')} row at the bottom: ${gr('7 + 5 + 8 = 20')}. This matches the 20 classmates surveyed. ✓`,
          ],
        },
        {
          question: 'Lerato counts the colours of cars passing by: red — 4, blue — 9, white — 7. Which colour was most common?',
          answer: `${bl('Blue')} was most common with a ${or('frequency of 9')}`,
          steps: [
            `Organise into a frequency table: ${bl('Red')} = ${or('4')}, ${bl('Blue')} = ${or('9')}, ${bl('White')} = ${or('7')}.`,
            `Compare the ${or('frequencies')}: ${or('4')}, ${or('9')}, ${or('7')}.`,
            `${bl('Blue')} has the highest ${or('frequency')} at ${or('9')} — it appeared most often.`,
            `<strong>Answer:</strong> ${bl('Blue')} was the most common car colour. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A completed frequency table with colour coded columns — categories in blue, frequency values in orange, total row in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to collect data using a survey and organise it into a frequency table with categories and frequencies" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BAR GRAPHS AND DOUBLE BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs-double-bar-graphs',
      title: 'Bar Graphs and Double Bar Graphs',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>bar graph</strong> displays data using bars where the height of each bar shows the ${bl('frequency')}. A <strong>double bar graph</strong> compares two sets of data side by side for each ${bl('category')}, using ${bl('one colour')} for the first data set and ${re('another colour')} for the second. Both types must have a title, ${gr('labelled axes')} and a clear key when two data sets are shown.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first data set')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('second data set')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('axis labels')}</span>` +
        `</div>` +

        // ── Features of a bar graph ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key features of bar graphs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Title</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Every graph must have a title describing what the data shows.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Labelled axes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The horizontal axis shows ${gr('categories')}; the vertical axis shows ${gr('frequency')}. Both must be labelled.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Key (double bar graph)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When comparing two data sets, a key shows which colour represents ${bl('each set')}.` +
        `</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Reading a double bar graph</p>` +
        `<p style="margin:0;color:#14532d;">For each ${bl('category')}, compare the height of the ${bl('first bar')} to the ${re('second bar')}. A taller ${re('second bar')} means the value increased; a shorter ${re('second bar')} means it decreased.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A double bar graph compares Term 1 and Term 2 test scores for 4 learners. How would you read who improved from Term 1 to Term 2?',
          answer: `Any learner whose ${re('Term 2 bar')} is taller than their ${bl('Term 1 bar')} showed improvement`,
          steps: [
            `Identify the two data sets on the key: ${bl('Term 1')} (first bar) and ${re('Term 2')} (second bar).`,
            `For each learner (${gr('category')}), compare the height of their ${bl('Term 1 bar')} to their ${re('Term 2 bar')}.`,
            `A taller ${re('Term 2 bar')} means that learner scored higher in Term 2 — they improved.`,
            `A shorter ${re('Term 2 bar')} means the learner scored lower in Term 2 — their mark dropped.`,
          ],
        },
        {
          question: 'A bar graph shows daily sales: Monday — 12, Tuesday — 18, Wednesday — 9. Which day had the most sales and what was the total?',
          answer: `${bl('Tuesday')} had the most sales (${or('18')}). ${gr('Total = 39')}`,
          steps: [
            `Read each bar height: ${bl('Monday')} = ${or('12')}, ${bl('Tuesday')} = ${or('18')}, ${bl('Wednesday')} = ${or('9')}.`,
            `Compare the heights: ${or('18')} is the tallest bar, so ${bl('Tuesday')} had the most sales.`,
            `Add all values for the ${gr('total')}: ${gr('12 + 18 + 9 = 39')}.`,
            `<strong>Answer:</strong> ${bl('Tuesday')} had the most sales with ${or('18')} items. The ${gr('total')} across all three days was ${gr('39')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A double bar graph comparing two data sets side by side, with the first data set in blue and the second in red, with green labelled axes and a clear key" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to read and draw bar graphs and double bar graphs, including how to label axes and add a key" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PIE CHARTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pie-charts',
      title: 'Pie Charts',
      icon: '🥧',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>pie chart</strong> shows data as slices of a circle, where each slice represents a proportion of the whole. The whole circle represents ${bl('360 degrees')} or <strong>100%</strong> of the data. Larger slices represent larger proportions of the data. Each slice can be described using either ${or('percentages')} or ${bl('degrees')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#16a34a;font-weight:700">· · ·</span> slices (different colours for each category)</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentages')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('degrees')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting between degrees and percentages</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Degrees → Percentage</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide ${bl('degrees')} by 360 then multiply by 100.<br><strong>Formula:</strong> ${bl('degrees')} ÷ 360 × 100 = ${or('%')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Percentage → Degrees</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide ${or('percentage')} by 100 then multiply by 360.<br><strong>Formula:</strong> ${or('%')} ÷ 100 × 360 = ${bl('degrees')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Percentage → Number of items</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the ${or('percentage')} (as a decimal) by the total.<br><strong>Formula:</strong> ${or('%')} ÷ 100 × total = count</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">All slices must add up to the whole</p>` +
        `<p style="margin:0;color:#9a3412;">All ${or('percentages')} must add up to <strong>100%</strong> and all ${bl('degrees')} must add up to <strong>360°</strong>. Use this as a check after reading any pie chart.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A pie chart shows 50% of learners walk to school, 30% take a bus and 20% are driven. If there are 200 learners, how many walk?',
          answer: `${or('50%')} of 200 = ${gr('100 learners')} walk`,
          steps: [
            `Identify the ${or('percentage')} for walking: ${or('50%')}.`,
            `Check the total: ${or('50% + 30% + 20% = 100%')} ✓ — all slices account for the whole.`,
            `Calculate: ${or('50%')} of 200 = ${or('50')} ÷ 100 × 200 = ${gr('100')}.`,
            `<strong>Answer:</strong> ${gr('100 learners')} walk to school. ✓`,
          ],
        },
        {
          question: "Amahle's pie chart shows a slice covering 90 degrees. What percentage of the data does this slice represent?",
          answer: `A slice of ${bl('90°')} represents ${or('25%')} of the data`,
          steps: [
            `Use the formula: ${bl('degrees')} ÷ 360 × 100 = ${or('percentage')}.`,
            `Substitute: ${bl('90')} ÷ 360 × 100.`,
            `Calculate: 90 ÷ 360 = 0.25 &nbsp;→&nbsp; 0.25 × 100 = ${or('25')}.`,
            `<strong>Answer:</strong> The slice represents ${or('25%')} of the data. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A pie chart divided into three slices each a different colour, with percentage labels in orange and degree measurements in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a pie chart by converting between degrees and percentages and calculating the number of items each slice represents" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MEAN, MEDIAN AND MODE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mean-median-mode',
      title: 'Mean, Median and Mode',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">These three measures describe the <strong>centre</strong> of a data set. The ${bl('mean')} is the average — add all values and divide by how many there are. The ${gr('median')} is the middle value when data is ordered from smallest to biggest. The ${or('mode')} is the value that appears most often.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mean')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mode')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mean (average)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add all the values together, then divide by how many values there are.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Median (middle)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Order the data from smallest to biggest, then find the middle value. With an even number of values, average the two middle values.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Mode (most frequent)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that appears most often in the data. There can be more than one mode, or no mode at all.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always order the data first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before finding the ${gr('median')} or ${or('mode')}, write the values in order from smallest to biggest. This makes the middle value and the most frequent value much easier to spot.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the mean of 4, 8, 6, 10, 2.',
          answer: `${bl('Mean')} = ${bl('6')}`,
          steps: [
            `Add all the values: 4 + 8 + 6 + 10 + 2 = ${bl('30')}.`,
            `Count how many values there are: <strong>5</strong> values.`,
            `${bl('Mean')} = total ÷ count = ${bl('30')} ÷ 5 = ${bl('6')}.`,
            `<strong>Answer:</strong> The ${bl('mean')} is ${bl('6')}. ✓`,
          ],
        },
        {
          question: 'Find the median and mode of 3, 7, 3, 9, 5, 3, 7.',
          answer: `${gr('Median')} = ${gr('5')} &nbsp;·&nbsp; ${or('Mode')} = ${or('3')}`,
          steps: [
            `Order the values from smallest to biggest: ${gr('3, 3, 3, 5, 7, 7, 9')}.`,
            `There are <strong>7</strong> values, so the middle value is the 4th one.`,
            `Count to the 4th value: 3, 3, 3, <strong style="color:#16a34a;">5</strong>, 7, 7, 9. The ${gr('median')} is ${gr('5')}.`,
            `Identify the most frequent value: ${or('3')} appears <strong>3 times</strong> — more than any other value. The ${or('mode')} is ${or('3')}.`,
            `<strong>Answer:</strong> ${gr('Median')} = ${gr('5')}, ${or('Mode')} = ${or('3')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A number line showing an ordered data set with the median highlighted in green, the mean marked in blue, and the mode value circled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the mean by adding and dividing, find the median by ordering values and locating the middle, and identify the mode" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! A perfect score — you have completely mastered Data Handling for Grade 6. Keep it up!' },
    { minScore: 12, message: 'Excellent work! You have a very strong grasp of data handling. Review any missed parts and you will have it perfect.' },
    { minScore: 8, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 4, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}

export const topicPractice = [
  // ── Q1 Easy — purpose of a frequency table ───────────────────────────────
  {
    difficulty: 'Easy',
    question: 'What is a frequency table used for?',
    answer: 'It organises raw data by showing how many times each category occurs, making it easier to read and analyse.',
    checkMode: 'self',
  },

  // ── Q2 Medium — reading a frequency table total ───────────────────────────
  {
    difficulty: 'Medium',
    question: 'Sipho surveys 30 learners about their favourite sport — football: 14, netball: 10, swimming: 6. How many learners chose football or netball?',
    answer: '24',
    checkMode: 'auto',
    correctAnswer: '24',
    explanation: 'Football + netball: 14 + 10 = 24 learners ✓\nCheck: 14 + 10 + 6 = 30 — total matches the number surveyed.',
  },

  // ── Q3 Hard — identifying an error in a frequency table ───────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato collects data from 25 people but when she adds up all the categories in her frequency table, the total is only 23. What might be wrong?',
    answer: 'She may have missed recording 2 responses or made a counting error — the total must equal the number surveyed.',
    checkMode: 'self',
  },

  // ── Q4 Easy — required features of a bar graph ────────────────────────────
  {
    difficulty: 'Easy',
    question: 'What must every bar graph have?',
    answer: 'A title, labelled axes and a consistent scale.',
    checkMode: 'self',
  },

  // ── Q5 Medium — reading a double bar graph ────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'A double bar graph compares boys and girls choosing sports. Football: boys 12, girls 5. Netball: boys 3, girls 14. Which sport do girls prefer more?',
    answer: 'netball',
    checkMode: 'auto',
    correctAnswer: 'netball',
    correctAnswers: ['netball', 'Netball'],
    explanation: 'For girls: Football = 5, Netball = 14. Since 14 > 5, girls prefer netball. ✓',
  },

  // ── Q6 Hard — bar graph totals and minimum ────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'A bar graph shows monthly rainfall — January: 30 mm, February: 45 mm, March: 20 mm.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'a) Find the total rainfall across all three months.',
        correctAnswer: '95mm',
        correctAnswers: ['95mm', '95 mm', '95'],
        explanation: 'Total rainfall: 30 + 45 + 20 = 95 mm ✓',
      },
      {
        label: 'b) Which month had the least rain?',
        correctAnswer: 'March',
        correctAnswers: ['March', 'march'],
        explanation: 'Comparing: January = 30 mm, February = 45 mm, March = 20 mm.\nMarch had the least rain with 20 mm. ✓',
      },
    ],
  },

  // ── Q7 Easy — percentage of voters from pie chart ────────────────────────
  {
    difficulty: 'Easy',
    question: 'A pie chart shows that 25% of votes went to Party A. If there are 80 voters in total, how many voted for Party A?',
    answer: '20',
    checkMode: 'auto',
    correctAnswer: '20',
    explanation: '25% of 80 = 25 ÷ 100 × 80 = 20 voters ✓',
  },

  // ── Q8 Medium — converting degrees to percentage ──────────────────────────
  {
    difficulty: 'Medium',
    question: 'A pie chart slice covers 180 degrees. What percentage of the data does this slice represent?',
    answer: '50%',
    checkMode: 'auto',
    correctAnswer: '50%',
    correctAnswers: ['50%', '50'],
    explanation: 'Degrees ÷ 360 × 100 = %\n180 ÷ 360 × 100 = 0.5 × 100 = 50% ✓\nA 180° slice is exactly half the pie.',
  },

  // ── Q9 Hard — calculating number of items from pie chart ─────────────────
  {
    difficulty: 'Hard',
    question: "Thabo's pie chart shows: Sport — 40%, Reading — 35%, Gaming — 25%. In a class of 40 learners, how many prefer gaming?",
    answer: '10',
    checkMode: 'auto',
    correctAnswer: '10',
    explanation: '25% of 40 = 25 ÷ 100 × 40 = 10 learners prefer gaming. ✓\nCheck: 40% of 40 = 16 (sport) + 35% of 40 = 14 (reading) + 25% of 40 = 10 (gaming) = 40 ✓',
  },

  // ── Q10 Easy — find the mean ──────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Find the mean of 5, 9, 7, 3, 6.',
    answer: '6',
    checkMode: 'auto',
    correctAnswer: '6',
    explanation: 'Add all values: 5 + 9 + 7 + 3 + 6 = 30.\nCount: 5 values.\nMean = 30 ÷ 5 = 6 ✓',
  },

  // ── Q11 Easy — find the median ────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Find the median of 8, 3, 12, 5, 9.',
    answer: '8',
    checkMode: 'auto',
    correctAnswer: '8',
    explanation: 'Order the values: 3, 5, 8, 9, 12.\nThere are 5 values, so the middle (3rd) value is the median.\nMedian = 8 ✓',
  },

  // ── Q12 Medium — find the mode ────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Find the mode of 4, 7, 4, 9, 4, 2.',
    answer: '4',
    checkMode: 'auto',
    correctAnswer: '4',
    explanation: 'Count how many times each value appears:\n4 appears 3 times, 7 appears 1 time, 9 appears 1 time, 2 appears 1 time.\n4 appears most often — mode = 4 ✓',
  },

  // ── Q13 Hard — mean and median of a data set ─────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle has the following test scores: 60, 75, 80, 55, 70, 90, 50.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'a) Find the mean (round to 2 decimal places).',
        correctAnswer: '68.57',
        correctAnswers: ['68.57', '68.571'],
        explanation: 'Add all scores: 60 + 75 + 80 + 55 + 70 + 90 + 50 = 480.\nCount: 7 scores.\nMean = 480 ÷ 7 = 68.571... ≈ 68.57 ✓',
      },
      {
        label: 'b) Find the median.',
        correctAnswer: '70',
        explanation: 'Order the scores: 50, 55, 60, 70, 75, 80, 90.\nThere are 7 values, so the middle (4th) value is the median.\nMedian = 70 ✓',
      },
    ],
  },

  // ── Q14 Medium — find the mean of ages ───────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Find the mean of these ages: 11, 12, 12, 13, 11, 12. Round your answer to 2 decimal places.',
    answer: '11.83',
    checkMode: 'auto',
    correctAnswer: '11.83',
    correctAnswers: ['11.83', '11.833'],
    explanation: 'Add all ages: 11 + 12 + 12 + 13 + 11 + 12 = 71.\nCount: 6 values.\nMean = 71 ÷ 6 = 11.833... ≈ 11.83 ✓',
  },

  // ── Q15 Hard — mode can have more than one value ─────────────────────────
  {
    difficulty: 'Hard',
    question: 'Sipho says the mode of a data set can have more than one value. Is he correct? Explain your answer.',
    answer: 'Yes — if two or more values appear with the same highest frequency, the data set has more than one mode.',
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 15,
  messages: [
    { minScore: 15, message: 'Outstanding! You have mastered data handling.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
