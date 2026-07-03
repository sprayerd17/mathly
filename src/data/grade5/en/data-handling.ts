import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (data handling roles) ────────────────────────────────────
// tally marks     → blue   (#2563eb)
// frequency nums  → orange (#ea580c)
// most common     → green  (#16a34a)
// least common    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Tally mark renderers ─────────────────────────────────────────────────────
const t5 = () =>
  `<span style="display:inline-flex;align-items:center;position:relative;gap:0;">` +
  `<span style="color:#2563eb;font-weight:700;font-family:monospace;letter-spacing:2px">||||</span>` +
  `<span style="display:inline-block;color:#2563eb;font-weight:700;font-family:monospace;transform:skewX(-20deg) scaleY(1.1);margin-left:-1px">|</span>` +
  `</span>`
const t3 = () => bl('|||')
const t2 = () => bl('||')

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Collecting and Organising Data',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Data is information we collect about the world around us. We collect data by <strong>asking questions</strong>, doing <strong>surveys</strong>, or <strong>counting things</strong>. Raw data is data that has not been organised yet — it is just a list of answers or counts. To make data easier to work with, we organise it into a <strong>tally table</strong> or a <strong>frequency table</strong>.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tally marks')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frequency numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('most common')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('least common')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Raw data</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Unorganised information — the original answers or counts before any sorting or grouping.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Tally mark</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A mark (|) we make each time we count one item. Every fifth tally crosses through the previous four, making groups of 5 easy to count.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">How many times each item occurs. The frequency is the number you write after counting all the tally marks in a group.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Frequency table</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A table that lists each item together with its tally marks and frequency. It gives a clear, organised summary of the data.</p>` +
        `</div>` +

        `</div>` +

        // ── How tally marks work ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How tally marks work</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:12px;color:#1e3a8a;">Make one mark for each item. When you reach the <strong>fifth</strong> item, draw a diagonal line crossing through the four marks before it. Count groups of 5 quickly at the end.</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">1 item</p>` +
        `<p style="font-size:1.3em;margin:0;font-family:monospace;">${bl('|')}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">3 items</p>` +
        `<p style="font-size:1.3em;margin:0;font-family:monospace;">${bl('|||')}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">5 items</p>` +
        `<p style="font-size:1.3em;margin:0;">${t5()}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">8 items</p>` +
        `<p style="font-size:1.3em;margin:0;">${t5()} ${bl('|||')}</p>` +
        `</div>` +

        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Always check your total</p>` +
        `<p style="margin:0;color:#166534;">After filling in your tally table, add up all the ${or('frequencies')}. The sum must equal the total number of items you started with. If it does not, go back and recount.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Sipho's fruit survey ──────────────────────────────────
        {
          question: 'Sipho asks 10 classmates what their favourite fruit is. The answers are: apple, banana, apple, mango, banana, apple, mango, apple, banana, apple. Organise this data into a tally table.',
          answer: 'Apple: 5 &nbsp; Banana: 3 &nbsp; Mango: 2 &nbsp; Total: 10',
          steps: [
            `List each <strong>different fruit</strong> that appears in the answers. We have three fruits: apple, banana, and mango. Draw a table with three columns — Fruit, Tally, Frequency.`,
            `Go through the answers <strong>one by one</strong> and make a ${bl('tally mark')} for each answer in the correct row. Work through the list in order: apple → apple → banana → apple → mango → banana → apple → mango → apple → banana.`,
            `<strong>Apple</strong> appears <strong>5</strong> times. The fifth mark crosses through the four before it — ${bl('tally')}: ${t5()} &nbsp; ${or('Frequency')}: ${or('5')}`,
            `<strong>Banana</strong> appears <strong>3</strong> times — ${bl('tally')}: ${t3()} &nbsp; ${or('Frequency')}: ${or('3')}`,
            `<strong>Mango</strong> appears <strong>2</strong> times — ${bl('tally')}: ${t2()} &nbsp; ${or('Frequency')}: ${or('2')}`,
            `<strong>Check the total:</strong> ${or('5')} + ${or('3')} + ${or('2')} = ${or('10')}. This matches the number of classmates Sipho asked. ✓` +
            `<br><br>` +
            `<table style="border-collapse:collapse;width:100%;max-width:400px;font-size:14px;">` +
            `<thead><tr style="background:#eff6ff;">` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:left;color:#1e40af;">Fruit</th>` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Tally</th>` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Frequency</th>` +
            `</tr></thead><tbody>` +
            `<tr><td style="border:1px solid #e2e8f0;padding:8px 12px;">Apple</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t5()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('5')}</td></tr>` +
            `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:8px 12px;">Banana</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t3()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('3')}</td></tr>` +
            `<tr><td style="border:1px solid #e2e8f0;padding:8px 12px;">Mango</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t2()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('2')}</td></tr>` +
            `<tr style="background:#f0fdf4;font-weight:700;"><td style="border:1.5px solid #bbf7d0;padding:8px 12px;">Total</td><td style="border:1.5px solid #bbf7d0;padding:8px 12px;text-align:center;"></td><td style="border:1.5px solid #bbf7d0;padding:8px 12px;text-align:center;color:#ea580c;">${or('10')}</td></tr>` +
            `</tbody></table>`,
          ],
        },

        // ── Example 2: Lerato's car colours ──────────────────────────────────
        {
          question: 'Lerato counts the colours of cars passing her house — red: 8, blue: 5, white: 12, silver: 6. Which colour appeared most often and which appeared least?',
          answer: `${gr('White')} appeared most often (${gr('12')}) and ${re('blue')} appeared least often (${re('5')})`,
          steps: [
            `Look at the ${or('frequencies')} for each colour: red = ${or('8')}, blue = ${or('5')}, white = ${or('12')}, silver = ${or('6')}.`,
            `To find the <strong>most common</strong>: compare all the frequencies and find the <strong>highest</strong> number. ${or('12')} is the highest frequency. The colour with frequency ${or('12')} is <strong>white</strong>. ${gr('White')} is the ${gr('most common')} colour — it appeared ${gr('12')} times.`,
            `To find the <strong>least common</strong>: compare all the frequencies and find the <strong>lowest</strong> number. ${or('5')} is the lowest frequency. The colour with frequency ${or('5')} is <strong>blue</strong>. ${re('Blue')} is the ${re('least common')} colour — it appeared ${re('5')} times.`,
            `<strong>Answer:</strong> ${gr('White')} appeared <strong>most often</strong> (${gr('12')} times) and ${re('blue')} appeared <strong>least often</strong> (${re('5')} times). ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — tally marks (self) ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is a tally mark used for?',
          answer: 'A tally mark is used to count data — we make a mark for each item and every fifth mark crosses through the previous four to make counting easier.',
          checkMode: 'self',
        },

        // ── Q2 Easy — total cars ─────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Sipho counts 20 cars in total. Red: 8, Blue: 5, White: 7. How many cars were a colour other than these three?',
          answer: '0',
          checkMode: 'auto',
          correctAnswer: '0',
          explanation: 'Red + Blue + White = 8 + 5 + 7 = 20. Total cars = 20. 20 − 20 = 0 cars were a colour other than these three.',
        },

        // ── Q3 Medium — total surveyed ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato collects data on favourite colours — red: 6, blue: 9, green: 4, yellow: 5. How many learners were surveyed in total?',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: '6 + 9 + 4 + 5 = 24 learners were surveyed in total.',
        },

        // ── Q4 Hard — swimming count and fraction ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle collects data from 30 learners. 12 chose soccer, 8 chose netball and the rest chose swimming. How many chose swimming and what fraction of the total is this?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many learners chose swimming?',
              correctAnswer: '10',
              explanation: '30 − 12 − 8 = 10 learners chose swimming.',
            },
            {
              label: 'b) What fraction of the total chose swimming?',
              correctAnswer: '1/3',
              correctAnswers: ['1/3', '10/30'],
              explanation: '10 out of 30 learners chose swimming. 10/30 = 1/3.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tally table showing Sipho fruit survey with apple 5 banana 3 mango 2 tally marks in blue and frequency numbers in orange totalling 10" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to collect raw data and organise it step by step into a tally table and frequency table" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs',
      title: 'Bar Graphs',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>bar graph</strong> uses bars to display data. Each bar represents a category and the <strong>height</strong> of the bar shows the ${or('frequency')}. A bar graph must have a title, labelled axes, and a ${or('scale')} on the vertical axis.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horizontal axis')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertical axis')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bars')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('scale')}</span>` +
        `</div>` +

        // ── Parts of a bar graph ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parts of a bar graph</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Horizontal axis')} — Shows the <strong>categories</strong>. Label it with the name of the category (for example: Sports, Days of the Week). Each category gets its own bar.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Vertical axis')} — Shows the <strong>frequency</strong>. Label it with what is being counted (for example: Number of Learners). The height of each bar is read from this axis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Scale')} — Numbers written on the ${re('vertical axis')}. The ${or('scale')} must be <strong>consistent</strong> — the gaps between numbers must be equal (for example: count up in 2s: 0, 2, 4, 6, 8, 10).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Bars')} — Each ${gr('bar')} must be the <strong>same width</strong> and bars must <strong>not touch</strong> each other. The height of each bar shows the frequency for that category.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Title</strong> — Every bar graph must have a title that describes what the graph is showing.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Choosing a scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">Look at the <strong>highest frequency</strong> in your data. Choose a ${or('scale')} that goes up to at least that number, counting in equal steps (2s, 5s, or 10s). Make sure every bar height can be read clearly from the ${or('scale')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle surveys her class about their favourite sports. The results are: football: 10, netball: 8, cricket: 5, swimming: 7. Describe how she should draw a bar graph.',
          answer: 'A bar graph with title "Favourite Sports in Grade 5", horizontal axis labelled Sports, vertical axis labelled Number of Learners, scale counting in 2s from 0 to 10, and one bar for each sport at the correct height.',
          steps: [
            `Draw a ${bl('horizontal axis')} and label it <strong>Sports</strong>. Mark four equally spaced positions along it — one for each sport: Football, Netball, Cricket, Swimming.`,
            `Draw a ${re('vertical axis')} and label it <strong>Number of Learners</strong>. This axis will show the ${or('frequency')} (how many learners chose each sport).`,
            `Choose a ${or('scale')} — the highest frequency is 10. Count up in <strong>2s</strong> from 0 to 10: 0, 2, 4, 6, 8, 10. Mark these numbers evenly on the ${re('vertical axis')}.`,
            `Draw a ${gr('bar')} for each sport at the correct height. Football → ${gr('10')}, Netball → ${gr('8')}, Cricket → ${gr('5')}, Swimming → ${gr('7')}. All bars must be the same width and must not touch each other.`,
            `Give the graph a <strong>title</strong>: <em>Favourite Sports in Grade 5</em>. The graph is now complete.`,
          ],
        },
        {
          question: 'A bar graph shows the number of items recorded each day — Monday: 6, Tuesday: 9, Wednesday: 4, Thursday: 7, Friday: 8. What was the total number recorded across all five days?',
          answer: `The total across all five days is ${gr('34')}`,
          steps: [
            `Read the height of each ${gr('bar')} from the ${or('scale')} on the ${re('vertical axis')}: Monday = ${or('6')}, Tuesday = ${or('9')}, Wednesday = ${or('4')}, Thursday = ${or('7')}, Friday = ${or('8')}.`,
            `Add all the values together: ${or('6')} + ${or('9')} + ${or('4')} + ${or('7')} + ${or('8')} = ${gr('34')}.`,
            `<strong>Answer:</strong> The total number recorded across all five days is ${gr('34')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — bar graph requirements (self) ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'What must a bar graph always have?',
          answer: 'A bar graph must have a title, labelled axes and a consistent scale on the vertical axis.',
          checkMode: 'self',
        },

        // ── Q6 Medium — difference from bar graph ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'A bar graph shows — Cats: 8, Dogs: 14, Fish: 6, Birds: 4. How many more people chose dogs than cats?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: '14 − 8 = 6 more people chose dogs than cats.',
        },

        // ── Q7 Hard — reading between scale intervals ────────────────────────
        {
          difficulty: 'Hard',
          question: 'A bar graph has a scale going up in 5s. The bar for Monday reaches halfway between 15 and 20. What value does the Monday bar show?',
          answer: '17.5',
          checkMode: 'auto',
          correctAnswer: '17.5',
          explanation: 'Halfway between 15 and 20: (15 + 20) ÷ 2 = 35 ÷ 2 = 17.5.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Bar graph showing Amahle favourite sports survey with horizontal axis labelled Sports in blue vertical axis labelled Number of Learners in red scale in orange counting in 2s from 0 to 10 and green bars for football 10 netball 8 cricket 5 swimming 7" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step how to draw a bar graph with a labelled horizontal axis vertical axis consistent scale and correctly spaced bars" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PICTOGRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pictographs',
      title: 'Pictographs',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>pictograph</strong> uses pictures or symbols to represent data. Each symbol represents a certain number of items — this is called the ${bl('key')}. Always check the ${bl('key')} before reading a pictograph because one symbol might represent 2, 5, or 10 items. If a symbol is only half drawn it represents half the ${bl('key')} value. Pictographs must have a <strong>title</strong>, <strong>labels</strong>, and a <strong>${bl('key')}</strong>.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('key value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('full symbols')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('half symbols')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('total')}</span>` +
        `</div>` +

        // ── Parts of a pictograph ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parts of a pictograph</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Title</strong> — Describes what the pictograph is showing. Every pictograph must have one.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Labels</strong> — Name each row or column so the reader knows which category each row of symbols belongs to.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Key')} — Shows the value of one symbol. Always read the ${bl('key')} first. One symbol could represent 2, 5, 10, or any other number of items.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Half symbol')} — A symbol that is only half drawn represents <strong>half</strong> the ${bl('key')} value. For example, if the key is 2, then a half symbol = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── How to read a pictograph ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to read a pictograph</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1: Find the key</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Identify the ${bl('key value')} — how many items one symbol represents.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 2: Count full symbols</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Count the ${gr('full symbols')} in a row. Multiply by the ${bl('key value')} to get their total.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Step 3: Handle half symbols</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If there is an ${or('half symbol')}, add half of the ${bl('key value')} to your total.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Step 4: Write the total</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('total')} for a row = (${gr('full symbols')} × ${bl('key value')}) + any ${or('half symbol')} value.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check the key first</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('key')} is the most important part of a pictograph. Without it, the symbols mean nothing. Check the ${bl('key value')} before you count any symbols.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: books read ─────────────────────────────────────────────
        {
          question: 'A pictograph shows books read by learners. The key shows that one book symbol = 2 books. Sipho has 4 book symbols and Lerato has 3 and a half symbols. How many books did each learner read?',
          answer: `Sipho read ${re('8')} books. Lerato read ${re('7')} books.`,
          steps: [
            `<strong>Check the ${bl('key')}:</strong> one symbol = ${bl('2')} books. This is the ${bl('key value')} — it tells us how much each symbol is worth.`,
            `<strong>Sipho — count ${gr('full symbols')}:</strong> Sipho has ${gr('4')} full book symbols. Multiply by the ${bl('key value')}: ${gr('4')} × ${bl('2')} = ${re('8')} books.`,
            `<strong>Lerato — count ${gr('full symbols')}:</strong> Lerato has ${gr('3')} full book symbols. ${gr('3')} × ${bl('2')} = 6 books.`,
            `<strong>Lerato — handle the ${or('half symbol')}:</strong> Lerato also has ${or('half a symbol')}. Half of the ${bl('key value')} = ${bl('2')} ÷ 2 = ${or('1')} book.`,
            `<strong>Lerato's ${re('total')}:</strong> 6 books + ${or('1')} book = ${re('7')} books.`,
            `<strong>Answer:</strong> Sipho read ${re('8')} books. Lerato read ${re('7')} books. ✓`,
          ],
        },

        // ── Example 2: drawing symbols ────────────────────────────────────────
        {
          question: 'Thabo wants to show that 15 learners chose pizza in a pictograph where each symbol represents 5 learners. How many symbols should he draw?',
          answer: `Thabo should draw ${gr('3')} full symbols for pizza.`,
          steps: [
            `<strong>Identify the ${bl('key value')}:</strong> each symbol = ${bl('5')} learners.`,
            `<strong>Divide</strong> the number of learners by the ${bl('key value')}: ${re('15')} ÷ ${bl('5')} = ${gr('3')}.`,
            `<strong>Check:</strong> ${gr('3')} × ${bl('5')} = ${re('15')} ✓ — no half symbol needed because 15 divides evenly.`,
            `<strong>Answer:</strong> Thabo should draw ${gr('3')} ${gr('full symbols')} for pizza. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy — pictograph symbols ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'In a pictograph each symbol represents 5 learners. Thabo has 3 symbols next to his name. How many learners does this represent?',
          answer: '15',
          checkMode: 'auto',
          correctAnswer: '15',
          explanation: '3 symbols × 5 learners per symbol = 15 learners.',
        },

        // ── Q9 Medium — half symbol in pictograph ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'A pictograph shows — Sipho: 4 symbols, Lerato: 2 and a half symbols, Amahle: 3 symbols. The key shows each symbol = 4 books. How many books did Lerato read?',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Lerato has 2 full symbols and a half symbol.\n2 full symbols: 2 × 4 = 8 books.\nHalf symbol: 4 ÷ 2 = 2 books.\nTotal: 8 + 2 = 10 books.',
        },

        // ── Q10 Hard — drawing pictograph with remainder (self) ──────────────
        {
          difficulty: 'Hard',
          question: 'Thabo wants to show 22 learners in a pictograph where each symbol = 5 learners. How many symbols should he draw and will there be a half symbol?',
          answer: '22 divided by 5 = 4 remainder 2. He draws 4 full symbols and a half symbol since 2 is close to half of 5. He shows 4 and a half symbols.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Pictograph showing books read by Sipho 4 full symbols and Lerato 3 and a half symbols with key value 2 in blue full symbols in green half symbol in orange and totals in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a pictograph by checking the key value counting full symbols and handling half symbols to find totals" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MEAN, MEDIAN AND MODE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mean-median-mode',
      title: 'Mean, Median and Mode',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">The ${bl('mode')}, ${gr('median')}, and ${or('mean')} are three ways to describe the middle or most typical value in a set of data. These are called <strong>measures of central tendency</strong> because they tell us about the centre of the data.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mode')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('median')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mean')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('data values')}</span>` +
        `</div>` +

        // ── Three measures ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three measures</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mode</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that appears <strong>most often</strong> in the data set. There can be more than one mode if two or more values tie for the highest count.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Median</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>middle value</strong> when all values are arranged from smallest to biggest. If there is an even number of values, the median is the average of the two middle values.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Mean</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The <strong>average</strong> — add all the values together and divide by how many values there are. The mean gives a fair share if all values were equal.</p>` +
        `</div>` +

        `</div>` +

        // ── How to calculate each ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to calculate each measure</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Mode')} — Count how many times each value appears. The value that appears most often is the ${bl('mode')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Median')} — Arrange all values from smallest to biggest. Find the middle value. If there are two middle values, add them and divide by 2.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${or('Mean')} — Add all the values together to get a total. Divide the total by how many values there are.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: Mode, Median, Mean</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('mode')} is the most <strong>popular</strong> value. The ${gr('median')} is the <strong>middle</strong> value after sorting. The ${or('mean')} is the <strong>average</strong> — add then divide. All three are called measures of central tendency.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Find the ${bl('mode')} of this data set: ${re('3')}, ${re('7')}, ${re('5')}, ${re('3')}, ${re('9')}, ${re('3')}, ${re('7')}.`,
          answer: `The ${bl('mode')} is ${bl('3')}`,
          steps: [
            `Count how many times each number appears in the data set: ${re('3')}, ${re('7')}, ${re('5')}, ${re('3')}, ${re('9')}, ${re('3')}, ${re('7')}.`,
            `${re('3')} appears <strong>3 times</strong>. ${re('7')} appears <strong>2 times</strong>. ${re('5')} appears <strong>1 time</strong>. ${re('9')} appears <strong>1 time</strong>.`,
            `The ${bl('mode')} is the value that appears most often. ${re('3')} has the highest count (3 times).`,
            `<strong>Answer:</strong> The ${bl('mode')} is ${bl('3')} because it appears most often. ✓`,
          ],
        },
        {
          question: `Find the ${gr('median')} of this data set: ${re('8')}, ${re('3')}, ${re('6')}, ${re('1')}, ${re('9')}.`,
          answer: `The ${gr('median')} is ${gr('6')}`,
          steps: [
            `Arrange the values from smallest to biggest: ${re('1')}, ${re('3')}, ${re('6')}, ${re('8')}, ${re('9')}.`,
            `Count how many values there are — there are <strong>5</strong> values, so the middle is the <strong>3rd value</strong>.`,
            `The 3rd value in the ordered list is ${re('6')}.`,
            `<strong>Answer:</strong> The ${gr('median')} is ${gr('6')}. ✓`,
          ],
        },
        {
          question: `Find the ${or('mean')} of this data set: ${re('4')}, ${re('8')}, ${re('6')}, ${re('10')}, ${re('2')}.`,
          answer: `The ${or('mean')} is ${or('6')}`,
          steps: [
            `Add all the values: ${re('4')} + ${re('8')} + ${re('6')} + ${re('10')} + ${re('2')} = <strong>30</strong>.`,
            `Count how many values there are — there are <strong>5</strong> values.`,
            `Divide: <strong>30</strong> ÷ 5 = ${or('6')}.`,
            `<strong>Answer:</strong> The ${or('mean')} is ${or('6')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Easy — mode ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the mode of this data set: 2, 5, 3, 5, 7, 5, 2.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Count how many times each value appears:\n2 appears 2 times, 3 appears 1 time, 5 appears 3 times, 7 appears 1 time.\n5 appears most often so the mode is 5.',
        },

        // ── Q12 Medium — median ──────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the median of this data set: 12, 7, 3, 9, 15.',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Arrange from smallest to biggest: 3, 7, 9, 12, 15.\nThere are 5 values so the middle (3rd) value is 9.\nThe median is 9.',
        },

        // ── Q13 Hard — mean ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the mean of these test scores: 60, 75, 80, 55, 70, 90, 50.',
          answer: '70',
          checkMode: 'auto',
          correctAnswer: '70',
          explanation: 'Add all scores: 60 + 75 + 80 + 55 + 70 + 90 + 50 = 480.\nCount: 7 scores.\nMean = 480 ÷ 7 = 70.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three panels showing mode in blue with 3 as the most frequent value median in green with ordered data set and middle value highlighted and mean in orange showing the addition and division steps" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining mode median and mean with worked examples showing how to find the most frequent value the middle value and the average of a data set" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-data',
      title: 'Interpreting Data',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Interpreting data means reading a graph or table and using the information to answer questions and draw conclusions. When interpreting data always read the title, labels and scale carefully before answering questions. Look for patterns — which category is ${gr('highest')} or ${re('lowest')}, are values increasing or decreasing, what does the data tell us overall. Always give your answer in the context of the question.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('highest value')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('lowest value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totals')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fractions')}</span>` +
        `</div>` +

        // ── Steps for interpreting data ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for interpreting data</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Read the title, labels and scale</strong> — Before answering any question, identify what the graph or table is about and what each axis or column represents.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Find the highest value')} — Look for the tallest bar, the largest number, or the category with the most. This is the ${gr('maximum')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Find the lowest value')} — Look for the shortest bar, the smallest number, or the category with the least. This is the ${re('minimum')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Calculate totals')} — Add all the values together to find the ${or('total')}. Check your addition carefully.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Express as a fraction')} — When asked what fraction a category is of the whole, write the category value over the ${or('total')}: part ÷ ${or('total')} = ${bl('fraction')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Always answer in context</p>` +
        `<p style="margin:0;color:#166534;">Always give your answer in the context of the question. Do not just write a number — write a sentence that includes the category name and what the number means. For example, write "Friday had the most absences with 8" rather than just "8".</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bar graph shows the number of learners absent each day — Monday: 3, Tuesday: 7, Wednesday: 2, Thursday: 5, Friday: 8. On which day were most learners absent and what was the total absences for the week?',
          answer: `${gr('Friday')} had the most absences with ${gr('8')} learners. The total absences for the week were ${or('25')}.`,
          steps: [
            `Read the data from the bar graph: Monday = 3, Tuesday = 7, Wednesday = ${re('2')}, Thursday = 5, Friday = ${gr('8')}.`,
            `${gr('Look for the highest bar')} — compare all values: 3, 7, ${re('2')}, 5, ${gr('8')}. The ${gr('highest')} value is ${gr('8')}, which belongs to Friday. Friday had the ${gr('most absences')}.`,
            `Add all values to find the ${or('total')}: 3 + 7 + ${re('2')} + 5 + ${gr('8')} = ${or('25')} absences for the week.`,
            `<strong>Answer:</strong> ${gr('Friday')} had the most absences with ${gr('8')} learners. The total absences for the week were ${or('25')}.`,
          ],
        },
        {
          question: 'A survey shows that 30 learners prefer summer, 12 prefer winter and 18 prefer spring. What fraction of learners prefer winter?',
          answer: `${bl('1/5')} of the learners prefer winter.`,
          steps: [
            `Find the ${or('total')} number of learners: 30 + ${re('12')} + 18 = ${or('60')} learners in total.`,
            `Identify the number who prefer winter: ${re('12')} learners prefer winter.`,
            `Write the ${bl('fraction')}: winter ÷ total = ${re('12')} ÷ ${or('60')} = ${bl('12/60')}.`,
            `Simplify the ${bl('fraction')}: ${bl('12/60')} = ${bl('1/5')}. (Divide both by 12: 12 ÷ 12 = 1, 60 ÷ 12 = 5.)`,
            `<strong>Answer:</strong> ${bl('1/5')} of the learners prefer winter. One fifth of the learners prefer winter. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q14 Medium — most and least rainfall ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A graph shows rainfall in mm — Jan: 40, Feb: 25, Mar: 60, Apr: 35. Which month had the most rain and which had the least?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Which month had the most rain?',
              correctAnswer: 'March',
              correctAnswers: ['March', 'Mar'],
              explanation: 'The highest value is 60 mm, which belongs to March. March had the most rain.',
            },
            {
              label: 'b) Which month had the least rain?',
              correctAnswer: 'February',
              correctAnswers: ['February', 'Feb'],
              explanation: 'The lowest value is 25 mm, which belongs to February. February had the least rain.',
            },
          ],
        },

        // ── Q15 Hard — fraction and percentage from survey ───────────────────
        {
          difficulty: 'Hard',
          question: 'A survey of 40 learners shows 15 prefer reading, 10 prefer sport and the rest prefer art. What fraction prefer art and what percentage prefer reading?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) What fraction of learners prefer art?',
              correctAnswer: '3/8',
              correctAnswers: ['3/8', '15/40'],
              explanation: 'Learners who prefer art: 40 − 15 − 10 = 15.\nFraction = 15/40 = 3/8.',
            },
            {
              label: 'b) What percentage prefer reading?',
              correctAnswer: '37.5%',
              correctAnswers: ['37.5%', '37.5'],
              explanation: '15 out of 40 prefer reading.\nPercentage = (15 ÷ 40) × 100 = 37.5%.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Bar graph showing learner absences per day Monday 3 Tuesday 7 Wednesday 2 in red Thursday 5 Friday 8 in green with total 25 in orange and fraction panel showing 12 out of 60 equals 1/5 in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to interpret a bar graph and data table by reading the title labels and scale identifying the highest and lowest values calculating totals and expressing values as fractions" />',
    },
  ],

  topicPractice: [],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered data handling.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of data handling.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! A perfect score — you have completely mastered data handling for Grade 5. Keep it up!' },
    { minScore: 12, message: 'Excellent work! You have a very strong grasp of data handling. Review any missed parts and you will have it perfect.' },
    { minScore: 9, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 5, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
