import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: stem → blue, leaf → green, sample → orange, population → red
// Section 2: mean → blue, median → green, mode → orange, range → red
// Section 3: bars/slices use all colours; percentages → orange
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Collecting and Organising Data',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 7 we pose questions, select appropriate data sources, and organise data using tally marks, tables and <strong>stem-and-leaf displays</strong>. We distinguish between a ${or('sample')} (a smaller group) and a ${re('population')} (the entire group being studied).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stems')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('leaves')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sample')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('population')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Population</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The entire group being studied — every member is included.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sample</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A smaller group selected from the population to represent the whole.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stem</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The leading digit(s) of a value — usually the tens digit in a stem-and-leaf display.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Leaf</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The final digit of a value — usually the units digit in a stem-and-leaf display.</p>` +
        `</div>` +

        `</div>` +

        // ── Stem-and-leaf guide ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to build a stem-and-leaf display</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">List all the ${bl('stems')} (tens digits) in order from smallest to largest down the left column.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">For each value, write its ${gr('leaf')} (units digit) to the right of its matching ${bl('stem')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Add a key, e.g. <strong>${bl('4')} | ${gr('5')} = 45</strong>, so readers know what ${bl('stem')} and ${gr('leaf')} mean.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Representative samples</p>` +
        `<p style="margin:0;color:#7c2d12;">A ${or('sample')} is only useful if it represents the ${re('population')} well. Selecting from only one sub-group (e.g. one classroom) can introduce <strong>bias</strong> and lead to misleading conclusions.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wants to know the favourite sport of his school. Should he ask 20 learners from one class or 20 learners from across all grades?',
          answer: `Ask 20 learners from across all grades — this gives a more ${or('representative sample')} of the whole school ${re('population')}`,
          steps: [
            `Asking learners from across all grades gives a more ${or('representative sample')} of the whole school ${re('population')} than just one class.`,
          ],
        },
        {
          question: 'Organise this data into a stem-and-leaf display — test scores: 45, 52, 48, 61, 57, 63, 49.',
          answer: `${bl('4')} | ${gr('5 8 9')} &nbsp; ${bl('5')} | ${gr('2 7')} &nbsp; ${bl('6')} | ${gr('1 3')}`,
          steps: [
            `Identify the ${bl('stems')} (tens digits): the values range from 45 to 63, so the stems are ${bl('4')}, ${bl('5')}, and ${bl('6')}.`,
            `List the ${gr('leaves')} (units digits) for each stem:<br>
            ${bl('4')} | ${gr('5, 8, 9')} &nbsp; (from 45, 48, 49)<br>
            ${bl('5')} | ${gr('2, 7')} &nbsp;&nbsp;&nbsp;&nbsp; (from 52, 57)<br>
            ${bl('6')} | ${gr('1, 3')} &nbsp;&nbsp;&nbsp;&nbsp; (from 61, 63)`,
            `Add a key: ${bl('4')} | ${gr('5')} = 45`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A researcher wants to find the average height of Grade 7 learners in South Africa. She measures 50 learners from one school in Cape Town.\n\na) What is the population in this study?\nb) What is the sample?',
          answer: 'a) All Grade 7 learners in South Africa\nb) The 50 learners measured from one school in Cape Town',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Create a stem-and-leaf display for the following data:\n\n23, 31, 27, 35, 22, 38, 29, 34, 21, 36',
          answer: '2 | 1 2 3 7 9\n3 | 1 4 5 6 8\nKey: 2 | 1 = 21',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A Grade 7 class scored the following marks in a test:\n58, 72, 65, 81, 74, 63, 79, 68, 55, 77, 82, 60\n\na) Organise the data in a stem-and-leaf display.\nb) How many learners scored in the 70s?\nc) Was this class the entire Grade 7 population or a sample? Explain.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Stem-and-leaf display (write stems and leaves)',
              correctAnswer: '5|58 6|0358 7|2479 8|12',
              correctAnswers: [
                '5|5 8\n6|0 3 5 8\n7|2 4 7 9\n8|1 2',
                '5|58\n6|0358\n7|2479\n8|12',
                '5|5,8\n6|0,3,5,8\n7|2,4,7,9\n8|1,2',
              ],
              explanation: 'Stems: 5, 6, 7, 8\n5 | 5 8    (55, 58)\n6 | 0 3 5 8   (60, 63, 65, 68)\n7 | 2 4 7 9   (72, 74, 77, 79)\n8 | 1 2    (81, 82)\nKey: 5 | 5 = 55',
            },
            {
              label: 'b) How many learners scored in the 70s?',
              correctAnswer: '4',
              explanation: 'The leaves on the stem 7 are 2, 4, 7, 9 — that is 4 learners who scored in the 70s.',
            },
            {
              label: 'c) Population or sample? (type "sample" or "population")',
              correctAnswer: 'sample',
              explanation: 'This class is a sample — it is only one class, not every Grade 7 learner in the school or country.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to build a stem-and-leaf display step by step and how to choose a representative sample" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stem-and-leaf display for test scores 45 52 48 61 57 63 49 with stems in blue and leaves in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MEASURES OF CENTRAL TENDENCY AND RANGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'central-tendency-range',
      title: 'Measures of Central Tendency and Range',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We summarise numerical data using ${bl('mean')} (average), ${gr('median')} (middle value) and ${or('mode')} (most frequent value). The ${re('range')} is the difference between the largest and smallest values, showing the <strong>spread</strong> of the data.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mean')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mode')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('range')}</span>` +
        `</div>` +

        // ── Definitions ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mean</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add all values, then divide by the number of values.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Median</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Order the data; the middle value is the median. For an even number of values, average the two middle values.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Mode</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that appears most often. A data set can have more than one mode or no mode.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Largest value minus smallest value — shows how spread out the data is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always order the data first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before finding the ${gr('median')} or ${or('mode')}, arrange the data from smallest to largest. This makes it much easier to identify the middle value and repeated values.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the mean of 14, 8, 19, 11, 13.',
          answer: `${bl('Mean')} = ${bl('13')}`,
          steps: [
            `Add all the values: 14 + 8 + 19 + 11 + 13 = ${bl('65')}`,
            `Count the values: there are <strong>5</strong> values.`,
            `Divide the sum by the count: ${bl('65')} ÷ 5 = ${bl('13')}`,
            `<strong>Answer:</strong> ${bl('Mean')} = ${bl('13')} ✓`,
          ],
        },
        {
          question: 'Find the median of 22, 15, 30, 18, 25.',
          answer: `${gr('Median')} = ${gr('22')}`,
          steps: [
            `Order the values from smallest to largest: 15, 18, ${gr('22')}, 25, 30`,
            `There are <strong>5</strong> values, so the middle value is the 3rd one.`,
            `The 3rd value is ${gr('22')}.`,
            `<strong>Answer:</strong> ${gr('Median')} = ${gr('22')} ✓`,
          ],
        },
        {
          question: 'Find the range of 45, 12, 38, 29, 52.',
          answer: `${re('Range')} = ${re('40')}`,
          steps: [
            `Identify the largest value: <strong>52</strong>`,
            `Identify the smallest value: <strong>12</strong>`,
            `Subtract: ${re('Range')} = 52 − 12 = ${re('40')}`,
            `<strong>Answer:</strong> ${re('Range')} = ${re('40')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Find the mean of the following values:\n\n6, 14, 9, 11, 10',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Sum: 6 + 14 + 9 + 11 + 10 = 50\nNumber of values: 5\nMean: 50 ÷ 5 = 10 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'For the data set 3, 7, 7, 8, 12, 15, 15, 15, 20, find:',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Mean',
              correctAnswer: '11.33',
              correctAnswers: ['11.33', '11⅓', '102/9', '34/3'],
              explanation: 'Sum: 3+7+7+8+12+15+15+15+20 = 102\nNumber of values: 9\nMean: 102 ÷ 9 ≈ 11.33 ✓',
            },
            {
              label: 'b) Median',
              correctAnswer: '12',
              explanation: 'Data is already ordered: 3, 7, 7, 8, 12, 15, 15, 15, 20\n9 values → middle is the 5th value = 12 ✓',
            },
            {
              label: 'c) Mode',
              correctAnswer: '15',
              explanation: '15 appears three times — more than any other value.\nMode = 15 ✓',
            },
            {
              label: 'd) Range',
              correctAnswer: '17',
              explanation: 'Largest: 20, smallest: 3\nRange: 20 − 3 = 17 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'The ages of players in a football team are: 16, 17, 15, 18, 17, 16, 19, 17, 15, 16.\n\na) Find the mean, median and mode.\nb) Which measure best represents the typical age? Explain.\nc) A new player aged 30 joins. Recalculate the mean. What do you notice?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Mean',
              correctAnswer: '16.6',
              correctAnswers: ['16.6', '16.60'],
              explanation: 'Sum: 16+17+15+18+17+16+19+17+15+16 = 166\nMean: 166 ÷ 10 = 16.6 ✓',
            },
            {
              label: 'a) Median',
              correctAnswer: '16.5',
              correctAnswers: ['16.5'],
              explanation: 'Ordered: 15, 15, 16, 16, 16, 17, 17, 17, 18, 19\n10 values → average of 5th and 6th: (16+17)÷2 = 16.5 ✓',
            },
            {
              label: 'a) Mode',
              correctAnswer: '16 and 17',
              correctAnswers: ['16 and 17', '16, 17', '17 and 16'],
              explanation: '16 appears 3 times; 17 appears 3 times. Both are modes (bimodal). ✓',
            },
            {
              label: 'c) New mean after player aged 30 joins',
              correctAnswer: '17.8',
              correctAnswers: ['17.8'],
              explanation: 'New sum: 166 + 30 = 196\nNew number of values: 11\nNew mean: 196 ÷ 11 ≈ 17.8\nThe mean increased noticeably because 30 is an outlier — much larger than all other values. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate mean median mode and range with step by step worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing a data set with the mean marked in blue median in green mode in orange and range shown as a red double-headed arrow" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REPRESENTING AND INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'representing-interpreting-data',
      title: 'Representing and Interpreting Data',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">We represent data using bar graphs, double bar graphs, histograms and pie charts. When interpreting data we read titles, axes and scales carefully, then analyse trends, central tendencies and look for possible bias or error in the data.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('group A / category 1')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('group B / category 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentages / labels')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('category 3')}</span>` +
        `</div>` +

        // ── Graph types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of graphs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Bar graph</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Compares categories using bars of equal width. Each bar represents one category.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Double bar graph</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Compares two groups side by side for the same categories. Uses a colour key.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Histogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Like a bar graph but for grouped numerical data — bars touch each other because data is continuous.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Pie chart</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Shows how a whole is divided into parts. Each slice is a percentage or fraction of 360°.</p>` +
        `</div>` +

        `</div>` +

        // ── Interpretation checklist ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Interpretation checklist</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Read the title</strong> — understand what the graph is about and what group was studied.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Read the axes and scale</strong> — check what each axis measures and what each unit or interval represents.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identify trends</strong> — look for which category is highest/lowest, patterns, and differences between groups.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check for bias</strong> — consider whether the sample was representative and whether the scale could be misleading.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Pie chart calculation</p>` +
        `<p style="margin:0;color:#1e3a8a;">To find a number from a pie chart percentage: multiply the ${or('percentage')} (as a decimal) by the total. For example, ${or('35%')} of 80 = 0.35 × 80 = 28.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A double bar graph compares boys\' and girls\' test scores across 4 subjects. How would you identify which group performed better overall?',
          answer: `Compare bar heights per subject; the group with more subjects where the ${bl('bar')} is taller performed better overall`,
          steps: [
            `Compare the height of each pair of bars per subject — the taller bar in each pair shows which group scored higher in that subject.`,
            `Count how many subjects each group leads in — the group with more wins performed better in most subjects.`,
            `For overall trend, sum the differences: if ${bl('boys\'s bars')} are consistently taller, boys performed better overall; if ${gr('girls\' bars')} are consistently taller, girls performed better overall.`,
          ],
        },
        {
          question: 'Lerato\'s pie chart shows 40% prefer football, 35% prefer netball and 25% prefer swimming in a survey of 80 learners. How many prefer netball?',
          answer: `${or('35%')} of 80 = ${gr('28')} learners prefer netball`,
          steps: [
            `Identify the percentage for netball: ${or('35%')}`,
            `Convert the percentage to a decimal: ${or('35%')} = ${or('0.35')}`,
            `Multiply by the total number of learners: ${or('0.35')} × 80 = ${gr('28')}`,
            `<strong>Answer:</strong> ${gr('28')} learners prefer netball ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A pie chart shows that 60% of learners prefer Mathematics and 40% prefer English. If 50 learners were surveyed, how many prefer Mathematics?',
          answer: '30',
          checkMode: 'auto',
          correctAnswer: '30',
          explanation: '60% of 50 = 0.60 × 50 = 30 learners prefer Mathematics ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A double bar graph shows the following number of books read per month by boys and girls:\n\nJanuary: Boys 12, Girls 15\nFebruary: Boys 18, Girls 14\nMarch: Boys 16, Girls 20\nApril: Boys 11, Girls 13',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) In which month did boys read the most?',
              correctAnswer: 'February',
              explanation: 'Boys: Jan 12, Feb 18, Mar 16, Apr 11. The highest value is 18 in February. ✓',
            },
            {
              label: 'b) Total books read by girls over 4 months',
              correctAnswer: '62',
              explanation: 'Girls total: 15 + 14 + 20 + 13 = 62 books ✓',
            },
            {
              label: 'c) Which group read more books overall? (type "boys" or "girls")',
              correctAnswer: 'girls',
              explanation: 'Boys total: 12+18+16+11 = 57\nGirls total: 15+14+20+13 = 62\nGirls read more books overall (62 > 57). ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A survey of 200 Grade 7 learners asked about their favourite subject. The results were:\n\nMathematics: 70 learners\nScience: 50 learners\nEnglish: 40 learners\nHistory: 24 learners\nArt: 16 learners\n\na) Express each subject as a percentage of the total.\nb) Which subject would have the largest slice in a pie chart?\nc) What angle (in degrees) would the Mathematics slice have in a pie chart?\nd) A newspaper headline says "70% of learners love Maths." Is this accurate? Explain.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Percentage for Mathematics',
              correctAnswer: '35%',
              correctAnswers: ['35%', '35'],
              explanation: '70 ÷ 200 × 100 = 35% ✓',
            },
            {
              label: 'a) Percentage for Science',
              correctAnswer: '25%',
              correctAnswers: ['25%', '25'],
              explanation: '50 ÷ 200 × 100 = 25% ✓',
            },
            {
              label: 'b) Which subject has the largest slice?',
              correctAnswer: 'Mathematics',
              explanation: 'Mathematics has 70 learners (35%) — the highest count, so it has the largest slice. ✓',
            },
            {
              label: 'c) Angle for Mathematics slice (in degrees)',
              correctAnswer: '126',
              correctAnswers: ['126', '126°'],
              explanation: 'Angle = percentage × 360° = 0.35 × 360° = 126° ✓',
            },
            {
              label: 'd) Is the headline accurate? (type "yes" or "no")',
              correctAnswer: 'no',
              explanation: 'No — only 35% (70 out of 200) prefer Maths, not 70%. The headline is inaccurate and misleading. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read bar graphs double bar graphs and pie charts and how to calculate values from percentages" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side: double bar graph with blue and green bars for two groups across four categories, and a pie chart with coloured slices and orange percentage labels" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — sample vs population ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the difference between a sample and a population?',
      answer: 'A population is the entire group being studied, while a sample is a smaller group selected from the population.',
      checkMode: 'self',
    },

    // ── Q2 Medium — stem-and-leaf display ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Organise into a stem-and-leaf display: 34, 28, 41, 37, 25, 46.',
      answer: '2 | 5 8\n3 | 4 7\n4 | 1 6',
      checkMode: 'self',
    },

    // ── Q3 Hard — sampling bias ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho surveys only his friends about favourite ice cream flavour. Why might this introduce bias?',
      answer: 'His friends may share similar tastes, so the sample doesn\'t represent the wider population fairly.',
      checkMode: 'self',
    },

    // ── Q4 Easy — mean ──────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the mean of 6, 10, 8, 12, 14.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'Sum: 6 + 10 + 8 + 12 + 14 = 50\nNumber of values: 5\nMean: 50 ÷ 5 = 10 ✓',
    },

    // ── Q5 Easy — median ────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the median of 9, 15, 7, 20, 12.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Order: 7, 9, 12, 15, 20\n5 values → middle is the 3rd value = 12 ✓',
    },

    // ── Q6 Medium — mode ────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the mode of 5, 8, 5, 9, 5, 3.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: '5 appears three times — more than any other value.\nMode = 5 ✓',
    },

    // ── Q7 Medium — range ───────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the range of 18, 42, 9, 35, 27.',
      answer: '33',
      checkMode: 'auto',
      correctAnswer: '33',
      explanation: 'Largest: 42, smallest: 9\nRange: 42 − 9 = 33 ✓',
    },

    // ── Q8 Hard — mean vs median ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says the median is always the same as the mean. Is she correct? Explain with an example.',
      answer: 'No — for data 1, 2, 3, 4, 100: mean = 22, median = 3. They are usually different unless data is evenly distributed.',
      checkMode: 'self',
    },

    // ── Q9 Easy — bar graph requirements ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A bar graph shows sales for 4 days. What must every bar graph have?',
      answer: 'A title, labelled axes and a consistent scale.',
      checkMode: 'self',
    },

    // ── Q10 Medium — pie chart calculation ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A pie chart shows 60% prefer tea, 25% prefer coffee and 15% prefer juice, from 120 people surveyed. How many prefer coffee?',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: '25% of 120 = 0.25 × 120 = 30 ✓',
    },

    // ── Q11 Hard — double bar graph interpretation ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo\'s double bar graph compares Term 1 and Term 2 scores for 5 learners. Three learners show taller Term 2 bars. What does this suggest?',
      answer: 'It suggests those three learners improved between Term 1 and Term 2.',
      checkMode: 'self',
    },

    // ── Q12 Medium — mean and range (multi-part) ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A data set is 12, 15, 18, 21, 24. Find the mean and the range.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Mean',
          correctAnswer: '18',
          explanation: 'Sum: 12 + 15 + 18 + 21 + 24 = 90\nNumber of values: 5\nMean: 90 ÷ 5 = 18 ✓',
        },
        {
          label: 'b) Range',
          correctAnswer: '12',
          explanation: 'Largest: 24, smallest: 12\nRange: 24 − 12 = 12 ✓',
        },
      ],
    },

    // ── Q13 Hard — mode in stem-and-leaf ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says a stem-and-leaf display can show the mode easily. Is she correct? Explain.',
      answer: 'Yes — the mode is the most frequently repeated leaf value, which is easy to spot since the data is already ordered.',
      checkMode: 'self',
    },

    // ── Q14 Hard — mean and spread ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A class of 30 learners has test scores with a mean of 65%. If 5 learners scored 100% and the rest averaged lower, what might this suggest about the spread of scores?',
      answer: 'It suggests a wide range or possible outliers, since high scores from a few learners could pull the mean up despite most learners scoring lower.',
      checkMode: 'self',
    },

    // ── Q15 Hard — graph interpretation ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says reading a graph means just looking at the highest bar. Why is this an incomplete approach?',
      answer: 'Reading a graph properly requires checking the title, axes, scale and overall trend, not just identifying the highest single value.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered data handling.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 33, message: 'Outstanding! A perfect score — you have completely mastered Data Handling for Grade 7. Keep it up!' },
    { minScore: 27, message: 'Excellent work! You have a very strong grasp of data handling. Review any missed parts and you will have it perfect.' },
    { minScore: 20, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 12, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
