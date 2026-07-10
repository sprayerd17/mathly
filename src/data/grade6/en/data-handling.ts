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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Collecting & organising data (0-3, Easy)
        { difficulty: 'Easy', question: 'A vet surveys 32 pet owners about which pet they keep: Dog — 10, Cat — 8, Fish — 6, Bird — 8. Organise this into a frequency table, then write the total.', answer: 'Dog = 10, Cat = 8, Fish = 6, Bird = 8. Total = 32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', 'dog10cat8fish6bird8total32'], explanation: 'List each category with its frequency: Dog = 10, Cat = 8, Fish = 6, Bird = 8.\nAdd the frequencies for the total: 10 + 8 + 6 + 8 = 32, which matches the 32 pet owners surveyed ✓' },
        { difficulty: 'Easy', question: 'Using the pet-owner frequency table above (Dog — 10, Cat — 8, Fish — 6, Bird — 8), how many people keep a dog or a fish?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Dog + Fish = 10 + 6 = 16 people ✓' },
        { difficulty: 'Easy', question: "Karabo says she asked 27 classmates about their favourite ice cream flavour, and her frequency table shows: Chocolate — 8, Vanilla — 7, Strawberry — 6, Mint — 5. Is her table correct? Explain.", answer: 'No — the frequencies add up to 8 + 7 + 6 + 5 = 26, not 27. Her table has an error — she likely missed recording 1 response.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Naledi says that once she has drawn up a frequency table, she no longer needs the original raw survey answers. Is she correct? Explain your reasoning.', answer: 'Generally yes, for most purposes — a correctly built frequency table already summarises how many times each category occurred, so it can answer most questions the raw data could. However, keeping the raw data is still useful in case an error is later found in the table and it needs to be checked or corrected.', checkMode: 'self' },

        // Block 2 — Bar graphs & double bar graphs (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'A bar graph shows ice-cream stand sales for Monday to Friday: Monday — 16, Tuesday — 24, Wednesday — 11, Thursday — 19, Friday — 28. Which day had the highest sales, and which had the lowest?', answer: 'Highest: Friday (28). Lowest: Wednesday (11)', checkMode: 'auto', correctAnswer: 'Friday, Wednesday', correctAnswers: ['Friday, Wednesday', 'Friday and Wednesday', 'friday,wednesday'], explanation: 'Comparing all five bars: 16, 24, 11, 19, 28.\nThe tallest bar is Friday at 28 — the highest.\nThe shortest bar is Wednesday at 11 — the lowest ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ice-Cream Stand Sales</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="136.3" x2="210" y2="136.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="117.6" x2="210" y2="117.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="98.9" x2="210" y2="98.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="80.1" x2="210" y2="80.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="61.4" x2="210" y2="61.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="42.7" x2="210" y2="42.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">35</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="95.1" width="25.6" height="59.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="91.1" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Mon</text><rect x="75.6" y="65.2" width="25.6" height="89.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="61.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Tue</text><rect x="109.2" y="113.8" width="25.6" height="41.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="109.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">11</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wed</text><rect x="142.8" y="83.9" width="25.6" height="71.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="79.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">19</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Thu</text><rect x="176.4" y="50.2" width="25.6" height="104.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="46.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Fri</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same ice-cream stand sales — Monday 16, Tuesday 24, Wednesday 11, Thursday 19, Friday 28 — find the total sales for the whole week and the difference between the busiest and quietest day.', answer: 'Total = 98, Difference = 17', checkMode: 'auto', correctAnswer: '98,17', correctAnswers: ['98,17', '98, 17'], explanation: 'Total: 16 + 24 + 11 + 19 + 28 = 98.\nBusiest day = 28 (Friday), quietest day = 11 (Wednesday).\nDifference: 28 − 11 = 17 ✓' },
        { difficulty: 'Medium', question: 'A double bar graph compares the number of books read by boys and girls over 4 weeks: Week 1 — boys 5, girls 8. Week 2 — boys 7, girls 6. Week 3 — boys 6, girls 10. Week 4 — boys 9, girls 7. In which week did girls read the most more books than boys, and by how many?', answer: 'Week 3, by 4 more', checkMode: 'auto', correctAnswer: 'Week 3, 4', correctAnswers: ['Week 3, 4', 'week3,4', 'Week 3 by 4'], explanation: 'Compare girls minus boys for each week: Week 1: 8 − 5 = 3. Week 2: 6 − 7 = −1. Week 3: 10 − 6 = 4. Week 4: 7 − 9 = −2.\nThe biggest girls-over-boys gap is Week 3, by 4 more books ✓' },
        { difficulty: 'Medium', question: 'A bar graph records the number of visitors to a library each day for a working week: Monday — 40, Tuesday — 55, Wednesday — 38, Thursday — 62, Friday — 45. Find the total number of visitors for the week.', answer: '240', checkMode: 'auto', correctAnswer: '240', explanation: '40 + 55 + 38 + 62 + 45 = 240 visitors ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Library Visitors This Week</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="138.6" x2="34" y2="138.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="141.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="138.6" x2="210" y2="138.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="122.3" x2="34" y2="122.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="125.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="122.3" x2="210" y2="122.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="105.9" x2="34" y2="105.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="108.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="105.9" x2="210" y2="105.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">40</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="73.1" x2="34" y2="73.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="76.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">50</text><line x1="34" y1="73.1" x2="210" y2="73.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="56.8" x2="34" y2="56.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="59.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">60</text><line x1="34" y1="56.8" x2="210" y2="56.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="40.4" x2="34" y2="40.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="43.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">70</text><line x1="34" y1="40.4" x2="210" y2="40.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">80</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="89.5" width="25.6" height="65.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="85.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Mon</text><rect x="75.6" y="64.9" width="25.6" height="90.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="60.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">55</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Tue</text><rect x="109.2" y="92.8" width="25.6" height="62.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="88.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">38</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wed</text><rect x="142.8" y="53.5" width="25.6" height="101.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="49.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">62</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Thu</text><rect x="176.4" y="81.3" width="25.6" height="73.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="77.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Fri</text></svg>' },
        { difficulty: 'Medium', question: 'Thandiwe draws a double bar graph comparing rainfall in Cape Town and Durban for 6 months, but uses the same colour for both cities\' bars. Why does this make the graph impossible to read correctly?', answer: 'Without two different colours (and a key showing which colour is which city), a reader cannot tell the Cape Town bar apart from the Durban bar for any month, so no reliable comparison between the two cities can be made.', checkMode: 'self' },

        // Block 3 — Pie charts (9-12, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'A pie chart slice covers 63 degrees. What percentage of the data does this slice represent?', answer: '17.5%', checkMode: 'auto', correctAnswer: '17.5%', correctAnswers: ['17.5%', '17.5', '17,5%', '17,5'], explanation: 'Degrees ÷ 360 × 100 = %\n63 ÷ 360 × 100 = 0.175 × 100 = 17.5% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Survey Results</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 145.2,76.9 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 145.2,76.9 A 62,62 0 0 1 65.8,162.1 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 65.8,162.1 A 62,62 0 0 1 36.3,74.0 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 36.3,74.0 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="129.7" y="40.2" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">63°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Slice A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'A pie chart shows that 15% of 220 shoppers at a mall bought shoes. How many shoppers bought shoes?', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: '15% of 220 = 15 ÷ 100 × 220 = 33 shoppers ✓' },
        { difficulty: 'Medium', question: 'In a survey of 200 learners, 34 said their favourite subject is Art. What percentage of the group chose Art?', answer: '17%', checkMode: 'auto', correctAnswer: '17%', correctAnswers: ['17%', '17'], explanation: 'Percentage = (part ÷ total) × 100 = (34 ÷ 200) × 100 = 0.17 × 100 = 17% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Subject Survey (200 learners)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 144.3,75.1 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 144.3,75.1 A 62,62 0 0 1 101.6,165.9 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="124.8" y="121.4" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">30%</text><path d="M 90,105 L 101.6,165.9 A 62,62 0 0 1 28.0,105.0 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="65.5" y="134.6" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">28%</text><path d="M 90,105 L 28.0,105.0 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="62.8" y="77.8" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Art: 34 learners</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Maths: 30%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Science: 28%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">English: 25%</text></svg>' },
        { difficulty: 'Medium-Hard', question: "A pie chart splits a survey of favourite school subjects into four slices: Maths — 28%, Science — 33%, English — 19%, and Life Skills — the missing slice. What percentage does the Life Skills slice represent?", answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'All slices must add up to 100%.\n28% + 33% + 19% = 80%.\nMissing slice: 100% − 80% = 20% ✓' },

        // Block 4 — Mean and median (13-16, Medium-Hard)
        { difficulty: 'Medium', question: 'A cyclist records these distances (in km) for 6 training rides: 64, 72, 88, 68, 80, 84. Find the mean and the median of these distances.', answer: 'Mean = 76 km, Median = 76 km', checkMode: 'auto', correctAnswer: '76,76', correctAnswers: ['76,76', 'mean76median76', '76, 76'], explanation: 'Mean: 64 + 72 + 88 + 68 + 80 + 84 = 456. 456 ÷ 6 = 76.\nMedian: order the values: 64, 68, 72, 80, 84, 88. There are 6 values (even), so average the two middle values (3rd and 4th): (72 + 80) ÷ 2 = 76.\nMean = 76 km, Median = 76 km ✓' },
        { difficulty: 'Medium-Hard', question: 'The temperature (°C) is recorded at noon for 7 days: 24.6, 26.1, 22.8, 25.3, 23.9, 27.2, 21.5. Find the mean temperature, rounded to 2 decimal places.', answer: '24.49°C', checkMode: 'auto', correctAnswer: '24.49', correctAnswers: ['24.49', '24.49°C', '24.49 °C', '24.49c'], explanation: 'Add all values: 24.6 + 26.1 + 22.8 + 25.3 + 23.9 + 27.2 + 21.5 = 171.4.\nCount: 7 values.\nMean = 171.4 ÷ 7 = 24.485... ≈ 24.49°C ✓' },
        { difficulty: 'Hard', question: "Lindiwe's weekly pocket money over 9 weeks (in rand) was: 30, 45, 35, 50, 40, 55, 35, 45, 60. Find the mean (rounded to 2 decimal places) and the median.", answer: 'Mean = R43.89, Median = R45', checkMode: 'auto', correctAnswer: '43.89,45', correctAnswers: ['43.89,45', 'mean43.89median45', '43.89, 45'], explanation: 'Mean: 30 + 45 + 35 + 50 + 40 + 55 + 35 + 45 + 60 = 395. 395 ÷ 9 = 43.888... ≈ 43.89.\nMedian: order the values: 30, 35, 35, 40, 45, 45, 50, 55, 60. There are 9 values (odd), so the middle (5th) value is the median: 45.\nMean = R43.89, Median = R45 ✓' },
        { difficulty: 'Hard', question: 'A student finds the mean of 12, 18, 15, 21, 9, 13 by adding them to get 88, then dividing by 5 to get 17.6. Is this correct? Explain the mistake and give the correct mean.', answer: 'No — there are 6 values, not 5, so the student must divide by 6, not 5. Also, 12 + 18 + 15 + 21 + 9 + 13 = 88 is correct, but the correct mean is 88 ÷ 6 = 14.67 (rounded to 2 decimal places), not 17.6.', checkMode: 'self' },

        // Block 5 — Mode and mixed reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Find the mode of this data set: 8, 3, 8, 5, 3, 8, 9.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Count how many times each value appears: 8 appears 3 times, 3 appears 2 times, 5 appears 1 time, 9 appears 1 time.\n8 appears most often — mode = 8 ✓' },
        { difficulty: 'Hard', question: 'Two classes record how many minutes each learner spent on homework: Class A: 6, 6, 9, 4, 6, 2. Class B: 3, 5, 3, 7, 3, 9. Compare the modes of Class A and Class B — which class has a higher mode?', answer: 'Class A has a higher mode (6) compared to Class B (3)', checkMode: 'auto', correctAnswer: 'Class A, 6', correctAnswers: ['Class A, 6', 'classa,6', 'Class A'], explanation: 'Class A: 2 appears 1 time, 4 appears 1 time, 6 appears 3 times, 9 appears 1 time. Mode of A = 6.\nClass B: 3 appears 3 times, 5 appears 1 time, 7 appears 1 time, 9 appears 1 time. Mode of B = 3.\nSince 6 > 3, Class A has the higher mode ✓' },
        { difficulty: 'Hard', question: 'A survey of 45 learners about favourite break-time activities is shown on a pie chart: Reading — 40%, Sport — 20%, Art — the missing slice. Find the number of learners for each activity, then find the mode of these three counts.', answer: 'Reading = 18, Sport = 9, Art = 18. Mode = 18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'mode18'], explanation: 'Reading: 40% of 45 = 18. Sport: 20% of 45 = 9. Art (missing slice): 100% − 40% − 20% = 40%, so 40% of 45 = 18.\nCheck: 18 + 9 + 18 = 45 ✓\nThe counts are 18, 9, 18 — the value 18 appears twice, more than any other count. Mode = 18 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered frequency tables, bar graphs, pie charts, and mean, median and mode.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on graphs and central values, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Collecting & organising data (0-3, Easy)
        { difficulty: 'Easy', question: 'A survey of 36 learners asks how they get to school: Car — 9, Taxi — 14, Bus — 8, Bicycle — 5. Organise this into a frequency table, then write the total.', answer: 'Car = 9, Taxi = 14, Bus = 8, Bicycle = 5. Total = 36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', 'car9taxi14bus8bicycle5total36'], explanation: 'List each category with its frequency: Car = 9, Taxi = 14, Bus = 8, Bicycle = 5.\nAdd the frequencies: 9 + 14 + 8 + 5 = 36, which matches the 36 learners surveyed ✓' },
        { difficulty: 'Easy', question: 'Using the school-transport frequency table above (Car — 9, Taxi — 14, Bus — 8, Bicycle — 5), how many learners travel by taxi or bus?', answer: '22', checkMode: 'auto', correctAnswer: '22', explanation: 'Taxi + Bus = 14 + 8 = 22 learners ✓' },
        { difficulty: 'Easy', question: 'Bafana claims he surveyed 30 people about their favourite takeaway food, but his frequency table shows: Pizza — 9, Burgers — 8, Chips — 7, Chicken — 7. Does his table match his claim? Explain.', answer: 'No — the frequencies add up to 9 + 8 + 7 + 7 = 31, not 30. He likely double-counted one response or made a counting error.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Refilwe says a frequency table can only be used for counting things people say in a survey, not things you observe directly. Is she correct? Explain.', answer: 'No — a frequency table can organise any collected data, including direct observations (like counting car colours passing by) or experiment results, not only survey responses.', checkMode: 'self' },

        // Block 2 — Bar graphs & double bar graphs (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'A bar graph shows sweets sold at a school tuck shop for Monday to Friday: Monday — 21, Tuesday — 17, Wednesday — 26, Thursday — 14, Friday — 23. Which day had the highest sales, and which had the lowest?', answer: 'Highest: Wednesday (26). Lowest: Thursday (14)', checkMode: 'auto', correctAnswer: 'Wednesday, Thursday', correctAnswers: ['Wednesday, Thursday', 'Wednesday and Thursday', 'wednesday,thursday'], explanation: 'Comparing all five bars: 21, 17, 26, 14, 23.\nThe tallest bar is Wednesday at 26 — the highest.\nThe shortest bar is Thursday at 14 — the lowest ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Tuck Shop Sweets Sold</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="136.3" x2="210" y2="136.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="117.6" x2="210" y2="117.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="98.9" x2="210" y2="98.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="80.1" x2="210" y2="80.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="61.4" x2="210" y2="61.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="42.7" x2="210" y2="42.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">35</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="76.4" width="25.6" height="78.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="72.4" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">21</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Mon</text><rect x="75.6" y="91.4" width="25.6" height="63.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="87.4" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Tue</text><rect x="109.2" y="57.7" width="25.6" height="97.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="53.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">26</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wed</text><rect x="142.8" y="102.6" width="25.6" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="98.6" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Thu</text><rect x="176.4" y="68.9" width="25.6" height="86.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="64.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Fri</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same tuck shop sweet sales — Monday 21, Tuesday 17, Wednesday 26, Thursday 14, Friday 23 — find the total sales for the whole week and the difference between the busiest and quietest day.', answer: 'Total = 101, Difference = 12', checkMode: 'auto', correctAnswer: '101,12', correctAnswers: ['101,12', '101, 12'], explanation: 'Total: 21 + 17 + 26 + 14 + 23 = 101.\nBusiest day = 26 (Wednesday), quietest day = 14 (Thursday).\nDifference: 26 − 14 = 12 ✓' },
        { difficulty: 'Medium', question: 'A double bar graph compares votes for class president from boys and girls across 4 candidates: Candidate A — boys 11, girls 9. Candidate B — boys 7, girls 12. Candidate C — boys 13, girls 6. Candidate D — boys 5, girls 14. Which candidate got more total votes than any other, and how many total votes did they get?', answer: 'Candidate A, with 20 total votes', checkMode: 'auto', correctAnswer: 'Candidate A, 20', correctAnswers: ['Candidate A, 20', 'candidatea,20', 'Candidate A'], explanation: 'Totals: A = 11 + 9 = 20. B = 7 + 12 = 19. C = 13 + 6 = 19. D = 5 + 14 = 19.\nCandidate A has the highest total with 20 votes — more than B, C or D (each with 19) ✓' },
        { difficulty: 'Medium', question: 'A bar graph tracks the number of visitors to a school science exhibition over 4 days: Thursday — 52, Friday — 68, Saturday — 91, Sunday — 74. Find the total number of visitors across all four days.', answer: '285', checkMode: 'auto', correctAnswer: '285', explanation: '52 + 68 + 91 + 74 = 285 visitors ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science Exhibition Visitors</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">40</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">60</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">80</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">100</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">120</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="98.2" width="34.0" height="56.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.0" y="94.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">52</text><text x="59.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Thu</text><rect x="84.0" y="80.8" width="34.0" height="74.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.0" y="76.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">68</text><text x="101.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Fri</text><rect x="126.0" y="55.7" width="34.0" height="99.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="143.0" y="51.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">91</text><text x="143.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Sat</text><rect x="168.0" y="74.2" width="34.0" height="80.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="185.0" y="70.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">74</text><text x="185.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Sun</text></svg>' },
        { difficulty: 'Medium', question: 'Zolani looks at a bar graph of monthly sales and says December must be the best month because its bar is drawn in a bright red colour while the others are grey. Explain why bar colour alone tells you nothing about the value of a bar.', answer: "Colour is just a visual style choice — it does not represent any data value. Only the bar's height, measured against the scale on the axis, tells you the actual value. A brightly coloured bar could easily be shorter than a plain grey one.", checkMode: 'self' },

        // Block 3 — Pie charts (9-12, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'A pie chart slice covers 126 degrees. What percentage of the data does this slice represent?', answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Degrees ÷ 360 × 100 = %\n126 ÷ 360 × 100 = 0.35 × 100 = 35% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Survey Results</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 140.2,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 140.2,141.4 A 62,62 0 0 1 45.4,148.1 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 45.4,148.1 A 62,62 0 0 1 39.8,68.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 39.8,68.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="157.7" y="70.5" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">126°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Slice A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'A pie chart shows that 18% of 250 visitors to a fair bought a ride ticket. How many visitors bought a ride ticket?', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: '18% of 250 = 18 ÷ 100 × 250 = 45 visitors ✓' },
        { difficulty: 'Medium', question: 'In a survey of 60 people, 21 said their favourite fruit is banana. What percentage of the group chose banana?', answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Percentage = (part ÷ total) × 100 = (21 ÷ 60) × 100 = 0.35 × 100 = 35% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Fruit Survey (60 people)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 140.2,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 140.2,141.4 A 62,62 0 0 1 53.6,155.2 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="96.0" y="143.0" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><path d="M 90,105 L 53.6,155.2 A 62,62 0 0 1 33.9,78.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="52.8" y="114.6" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">22%</text><path d="M 90,105 L 33.9,78.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="69.4" y="72.5" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">18%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Banana: 21 people</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Apple: 25%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Orange: 22%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">Grape: 18%</text></svg>' },
        { difficulty: 'Medium-Hard', question: "A pie chart splits a survey of household pets into four slices: Dogs — 32%, Cats — 41%, Fish — 15%, and Birds — the missing slice. What percentage does the Birds slice represent?", answer: '12%', checkMode: 'auto', correctAnswer: '12%', correctAnswers: ['12%', '12'], explanation: 'All slices must add up to 100%.\n32% + 41% + 15% = 88%.\nMissing slice: 100% − 88% = 12% ✓' },

        // Block 4 — Mean and median (13-16, Medium-Hard)
        { difficulty: 'Medium', question: 'A runner records these times (in minutes) for 6 training runs: 50, 58, 66, 54, 62, 70. Find the mean and the median of these times.', answer: 'Mean = 60 minutes, Median = 60 minutes', checkMode: 'auto', correctAnswer: '60,60', correctAnswers: ['60,60', 'mean60median60', '60, 60'], explanation: 'Mean: 50 + 58 + 66 + 54 + 62 + 70 = 360. 360 ÷ 6 = 60.\nMedian: order the values: 50, 54, 58, 62, 66, 70. There are 6 values (even), so average the two middle values (3rd and 4th): (58 + 62) ÷ 2 = 60.\nMean = 60 minutes, Median = 60 minutes ✓' },
        { difficulty: 'Medium-Hard', question: 'The mass (in kg) of 8 parcels at a delivery depot is recorded: 16.4, 18.2, 15.9, 17.6, 19.1, 14.8, 18.5, 16.0. Find the mean mass, rounded to 2 decimal places.', answer: '17.06 kg', checkMode: 'auto', correctAnswer: '17.06', correctAnswers: ['17.06', '17.06kg', '17.06 kg'], explanation: 'Add all values: 16.4 + 18.2 + 15.9 + 17.6 + 19.1 + 14.8 + 18.5 + 16.0 = 136.5.\nCount: 8 values.\nMean = 136.5 ÷ 8 = 17.0625 ≈ 17.06 kg ✓' },
        { difficulty: 'Hard', question: "Ayanda's weekly pocket money over 7 weeks (in rand) was: 25, 40, 30, 50, 35, 45, 30. Find the mean (rounded to 2 decimal places) and the median.", answer: 'Mean = R36.43, Median = R35', checkMode: 'auto', correctAnswer: '36.43,35', correctAnswers: ['36.43,35', 'mean36.43median35', '36.43, 35'], explanation: 'Mean: 25 + 40 + 30 + 50 + 35 + 45 + 30 = 255. 255 ÷ 7 = 36.428... ≈ 36.43.\nMedian: order the values: 25, 30, 30, 35, 40, 45, 50. There are 7 values (odd), so the middle (4th) value is the median: 35.\nMean = R36.43, Median = R35 ✓' },
        { difficulty: 'Hard', question: 'A student finds the median of 14, 6, 22, 10, 18, 8 by picking the middle number in the order it was given without sorting first. Explain why this approach is wrong and find the correct median.', answer: 'The values must be sorted from smallest to biggest before finding the median. Ordered: 6, 8, 10, 14, 18, 22. There are 6 values (even), so average the two middle values (3rd and 4th): (10 + 14) ÷ 2 = 12.', checkMode: 'self' },

        // Block 5 — Mode and mixed reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Find the mode of this data set: 7, 2, 7, 9, 2, 7, 5.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Count how many times each value appears: 7 appears 3 times, 2 appears 2 times, 9 appears 1 time, 5 appears 1 time.\n7 appears most often — mode = 7 ✓' },
        { difficulty: 'Hard', question: 'Sibusiso says a mode must always be one of the smaller values in a data set. Use the data set 4, 7, 4, 4, 9, 2 to check whether he is correct.', answer: "No — the mode is simply the value that occurs most often; it can be a small, middle, or large value in the set. In 4, 7, 4, 4, 9, 2, the value 4 occurs 3 times (more than any other), so the mode is 4 — but this has nothing to do with 4 being small or large, only with how often it appears.", checkMode: 'self' },
        { difficulty: 'Hard', question: 'A survey of 50 learners about favourite music genres is shown on a pie chart: Pop — 34%, Hip-hop — 26%, Gospel — the missing slice. Find the number of learners for each genre, then find the mean of these three counts.', answer: 'Pop = 17, Hip-hop = 13, Gospel = 20. Mean = 16.67', checkMode: 'auto', correctAnswer: '16.67', correctAnswers: ['16.67', '16.7'], explanation: 'Pop: 34% of 50 = 17. Hip-hop: 26% of 50 = 13. Gospel (missing slice): 100% − 34% − 26% = 40%, so 40% of 50 = 20.\nCheck: 17 + 13 + 20 = 50 ✓\nMean of counts: (17 + 13 + 20) ÷ 3 = 50 ÷ 3 = 16.666... ≈ 16.67 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered frequency tables, bar graphs, pie charts, and mean, median and mode.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on graphs and central values, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Collecting & organising data (0-3, Easy)
        { difficulty: 'Easy', question: 'A survey of 35 learners asks about their favourite break-time activity: Reading — 9, Sport — 15, Art — 6, Music — 5. Organise this into a frequency table, then write the total.', answer: 'Reading = 9, Sport = 15, Art = 6, Music = 5. Total = 35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', 'reading9sport15art6music5total35'], explanation: 'List each category with its frequency: Reading = 9, Sport = 15, Art = 6, Music = 5.\nAdd the frequencies: 9 + 15 + 6 + 5 = 35, which matches the 35 learners surveyed ✓' },
        { difficulty: 'Easy', question: 'Using the break-time activity frequency table above (Reading — 9, Sport — 15, Art — 6, Music — 5), how many learners chose sport or art?', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Sport + Art = 15 + 6 = 21 learners ✓' },
        { difficulty: 'Easy', question: 'Tumi says he collected data from 24 people about their favourite board game, and his frequency table shows: Chess — 7, Checkers — 6, Snakes and Ladders — 5, Monopoly — 7. Is his table correct? Explain.', answer: 'No — the frequencies add up to 7 + 6 + 5 + 7 = 25, not 24. His table has an error — he likely double-counted one response.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Ntombi says that when two categories in a frequency table have the same frequency, one of them must be a mistake. Is she correct? Explain.', answer: 'No — it is completely normal and valid for two or more categories to have the same frequency. This simply means those categories occurred the same number of times in the data; it is not automatically an error.', checkMode: 'self' },

        // Block 2 — Bar graphs & double bar graphs (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'A bar graph shows cupcakes sold at a school bake sale for Monday to Friday: Monday — 13, Tuesday — 19, Wednesday — 24, Thursday — 10, Friday — 17. Which day had the highest sales, and which had the lowest?', answer: 'Highest: Wednesday (24). Lowest: Thursday (10)', checkMode: 'auto', correctAnswer: 'Wednesday, Thursday', correctAnswers: ['Wednesday, Thursday', 'Wednesday and Thursday', 'wednesday,thursday'], explanation: 'Comparing all five bars: 13, 19, 24, 10, 17.\nThe tallest bar is Wednesday at 24 — the highest.\nThe shortest bar is Thursday at 10 — the lowest ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Bake Sale Cupcakes Sold</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="98.2" width="25.6" height="56.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="94.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Mon</text><rect x="75.6" y="72.0" width="25.6" height="83.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="68.0" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">19</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Tue</text><rect x="109.2" y="50.2" width="25.6" height="104.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="46.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wed</text><rect x="142.8" y="111.3" width="25.6" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="107.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Thu</text><rect x="176.4" y="80.8" width="25.6" height="74.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="76.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Fri</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same bake sale cupcake numbers — Monday 13, Tuesday 19, Wednesday 24, Thursday 10, Friday 17 — find the total cupcakes sold for the whole week and the difference between the busiest and quietest day.', answer: 'Total = 83, Difference = 14', checkMode: 'auto', correctAnswer: '83,14', correctAnswers: ['83,14', '83, 14'], explanation: 'Total: 13 + 19 + 24 + 10 + 17 = 83.\nBusiest day = 24 (Wednesday), quietest day = 10 (Thursday).\nDifference: 24 − 10 = 14 ✓' },
        { difficulty: 'Medium', question: 'A double bar graph compares library visits between Grade 5 and Grade 6 learners over 4 terms: Term 1 — Grade 5: 10, Grade 6: 14. Term 2 — Grade 5: 15, Grade 6: 9. Term 3 — Grade 5: 7, Grade 6: 13. Term 4 — Grade 5: 12, Grade 6: 8. In which term did Grade 6 have the most more visits than Grade 5, and by how many?', answer: 'Term 3, by 6 more', checkMode: 'auto', correctAnswer: 'Term 3, 6', correctAnswers: ['Term 3, 6', 'term3,6', 'Term 3 by 6'], explanation: 'Compare Grade 6 minus Grade 5 for each term: Term 1: 14 − 10 = 4. Term 2: 9 − 15 = −6. Term 3: 13 − 7 = 6. Term 4: 8 − 12 = −4.\nThe biggest Grade-6-over-Grade-5 gap is Term 3, by 6 more visits ✓' },
        { difficulty: 'Medium', question: 'A bar graph records the number of goals scored by a soccer team over 5 matches: 2, 4, 1, 3, 5. Find the total number of goals scored across all 5 matches and the difference between the highest-scoring and lowest-scoring match.', answer: 'Total = 15, Difference = 4', checkMode: 'auto', correctAnswer: '15,4', correctAnswers: ['15,4', '15, 4'], explanation: 'Total: 2 + 4 + 1 + 3 + 5 = 15 goals.\nHighest-scoring match = 5 goals, lowest-scoring match = 1 goal.\nDifference: 5 − 1 = 4 ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Goals Scored Over 5 Matches</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">1</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">2</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">3</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">4</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">6</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="111.3" width="25.6" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="107.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">M1</text><rect x="75.6" y="67.7" width="25.6" height="87.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="63.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">M2</text><rect x="109.2" y="133.2" width="25.6" height="21.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="129.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">M3</text><rect x="142.8" y="89.5" width="25.6" height="65.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="85.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">M4</text><rect x="176.4" y="45.8" width="25.6" height="109.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="41.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">M5</text></svg>' },
        { difficulty: 'Medium', question: "Mpho sees a bar graph where the bars are drawn with 3D shading and slightly tilted. He says the graph looks more 'professional' this way. Explain why 3D or tilted bar effects can actually make a graph harder to read accurately.", answer: "3D and tilted effects can distort how tall a bar appears, making it harder to line the top of the bar up accurately with the scale on the axis. A plain, flat bar with a clear top edge is easier and more accurate to read, even if it looks less decorative.", checkMode: 'self' },

        // Block 3 — Pie charts (9-12, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'A pie chart slice covers 234 degrees. What percentage of the data does this slice represent?', answer: '65%', checkMode: 'auto', correctAnswer: '65%', correctAnswers: ['65%', '65'], explanation: 'Degrees ÷ 360 × 100 = %\n234 ÷ 360 × 100 = 0.65 × 100 = 65% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Survey Results</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 1 1 39.8,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 39.8,141.4 A 62,62 0 0 1 29.8,90.0 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 29.8,90.0 A 62,62 0 0 1 57.1,52.4 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 57.1,52.4 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="157.7" y="139.5" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">234°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Slice A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'A pie chart shows that 55% of 180 people at a stadium support the home team. How many people support the home team?', answer: '99', checkMode: 'auto', correctAnswer: '99', explanation: '55% of 180 = 55 ÷ 100 × 180 = 99 people ✓' },
        { difficulty: 'Medium', question: 'In a survey of 48 people, 12 said their favourite drink is iced tea. What percentage of the group chose iced tea?', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Percentage = (part ÷ total) × 100 = (12 ÷ 48) × 100 = 0.25 × 100 = 25% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Drink Survey (48 people)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 152.0,105.0 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 152.0,105.0 A 62,62 0 0 1 53.6,155.2 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="107.5" y="139.3" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">35%</text><path d="M 90,105 L 53.6,155.2 A 62,62 0 0 1 39.8,68.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="52.0" y="111.0" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><path d="M 90,105 L 39.8,68.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="72.5" y="70.7" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">15%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Iced Tea: 12 people</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Coffee: 35%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Juice: 25%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">Water: 15%</text></svg>' },
        { difficulty: 'Medium-Hard', question: "A pie chart splits a survey of favourite social media apps into four slices: App A — 18%, App B — 47%, App C — 21%, and App D — the missing slice. What percentage does the App D slice represent?", answer: '14%', checkMode: 'auto', correctAnswer: '14%', correctAnswers: ['14%', '14'], explanation: 'All slices must add up to 100%.\n18% + 47% + 21% = 86%.\nMissing slice: 100% − 86% = 14% ✓' },

        // Block 4 — Mean and median (13-16, Medium-Hard)
        { difficulty: 'Medium', question: 'A learner records their spelling test scores (out of 60) for 7 tests: 45, 52, 38, 60, 49, 55, 41. Find the mean (rounded to 2 decimal places) and the median of these scores.', answer: 'Mean = 48.57, Median = 49', checkMode: 'auto', correctAnswer: '48.57,49', correctAnswers: ['48.57,49', 'mean48.57median49', '48.57, 49'], explanation: 'Mean: 45 + 52 + 38 + 60 + 49 + 55 + 41 = 340. 340 ÷ 7 = 48.571... ≈ 48.57.\nMedian: order the values: 38, 41, 45, 49, 52, 55, 60. There are 7 values (odd), so the middle (4th) value is the median: 49.\nMean = 48.57, Median = 49 ✓' },
        { difficulty: 'Medium-Hard', question: 'The height (in cm) of 9 seedlings is measured: 8.4, 9.1, 7.6, 8.9, 9.5, 7.2, 8.0, 9.3, 8.6. Find the mean height, rounded to 2 decimal places.', answer: '8.51 cm', checkMode: 'auto', correctAnswer: '8.51', correctAnswers: ['8.51', '8.51cm', '8.51 cm'], explanation: 'Add all values: 8.4 + 9.1 + 7.6 + 8.9 + 9.5 + 7.2 + 8.0 + 9.3 + 8.6 = 76.6.\nCount: 9 values.\nMean = 76.6 ÷ 9 = 8.5111... ≈ 8.51 cm ✓' },
        { difficulty: 'Hard', question: "Boitumelo's weekly pocket money over 6 weeks (in rand) was: 30, 40, 50, 35, 45, 40. Find the mean and the median.", answer: 'Mean = R40, Median = R40', checkMode: 'auto', correctAnswer: '40,40', correctAnswers: ['40,40', 'mean40median40', '40, 40'], explanation: 'Mean: 30 + 40 + 50 + 35 + 45 + 40 = 240. 240 ÷ 6 = 40.\nMedian: order the values: 30, 35, 40, 40, 45, 50. There are 6 values (even), so average the two middle values (3rd and 4th): (40 + 40) ÷ 2 = 40.\nMean = R40, Median = R40 ✓' },
        { difficulty: 'Hard', question: 'A student calculates the mean of 20, 35, 25, 40, 30 by adding to get 150, then dividing by 6 to get 25. Is this correct? Explain the mistake and give the correct mean.', answer: 'No — there are 5 values, not 6, so the student must divide by 5, not 6. Also, 20 + 35 + 25 + 40 + 30 = 150 is correct, but the correct mean is 150 ÷ 5 = 30, not 25.', checkMode: 'self' },

        // Block 5 — Mode and mixed reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Find the mode of this data set: 5, 8, 5, 3, 8, 5, 1.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Count how many times each value appears: 5 appears 3 times, 8 appears 2 times, 3 appears 1 time, 1 appears 1 time.\n5 appears most often — mode = 5 ✓' },
        { difficulty: 'Hard', question: 'Two teams record the number of push-ups each player did in one minute: Team A: 9, 3, 9, 6, 3, 9. Team B: 4, 7, 4, 4, 2, 7. Compare the modes of Team A and Team B — which team has a higher mode?', answer: 'Team A has a higher mode (9) compared to Team B (4)', checkMode: 'auto', correctAnswer: 'Team A, 9', correctAnswers: ['Team A, 9', 'teama,9', 'Team A'], explanation: 'Team A: 3 appears 2 times, 6 appears 1 time, 9 appears 3 times. Mode of A = 9.\nTeam B: 2 appears 1 time, 4 appears 3 times, 7 appears 2 times. Mode of B = 4.\nSince 9 > 4, Team A has the higher mode ✓' },
        { difficulty: 'Hard', question: 'A survey of 60 learners about favourite weekend activities is shown on a pie chart: Sport — 35%, Reading — 25%, Screen time — the missing slice. Find the number of learners for each activity, then find the mode of these three counts.', answer: 'Sport = 21, Reading = 15, Screen time = 24. No mode (all three counts are different)', checkMode: 'auto', correctAnswer: 'No mode', correctAnswers: ['No mode', 'nomode', 'no mode'], explanation: 'Sport: 35% of 60 = 21. Reading: 25% of 60 = 15. Screen time (missing slice): 100% − 35% − 25% = 40%, so 40% of 60 = 24.\nCheck: 21 + 15 + 24 = 60 ✓\nThe three counts (21, 15, 24) are all different, so there is no mode ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered frequency tables, bar graphs, pie charts, and mean, median and mode.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on graphs and central values, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
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
