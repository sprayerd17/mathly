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
      title: 'Mode (Plus a Look at Median and Mean)',
      icon: '📊',
      explanation:
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>CAPS Grade 5 focus:</strong> the ${bl('mode')} — the most frequently occurring value — is the only measure of central tendency required in Grade 5. The ${gr('median')} is introduced in <strong>Grade 6</strong>, and the ${or('mean')} (average) comes later still. Median and mean are included below as enrichment, since they build naturally on mode.</p>` +
        `</div>` +
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Collecting & Organising Data (0-3) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Nomvula asks 12 learners how they travel to school. She records: walk, taxi, walk, car, walk, taxi, car, walk, taxi, walk, car, walk. How many learners said they walk to school?',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'Count each time "walk" appears in the list: walk, walk, walk, walk, walk, walk = 6 learners walk to school.',
        },
        {
          difficulty: 'Easy',
          question: 'A tally table shows the number of learners who chose each pet: Dog = ⁙| (6), Cat = |||| (4), Bird = ||| (3). What is the total number of learners who were asked?',
          checkMode: 'auto',
          correctAnswer: '13',
          correctAnswers: ['13'],
          explanation: 'Add the frequencies: 6 + 4 + 3 = 13 learners were asked.',
        },
        {
          difficulty: 'Easy',
          question: 'In a tally table, one group of 5 tally marks plus 2 more single marks are drawn next to "Grapes". What frequency should be written for grapes?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'A full group of 5 tally marks equals 5. Adding 2 more single marks gives 5 + 2 = 7.',
        },
        {
          difficulty: 'Easy',
          question: 'Explain why every fifth tally mark is drawn crossing through the previous four marks instead of just being another straight line.',
          answer: 'Drawing the fifth mark as a diagonal line across the other four groups the tallies into sets of 5. This makes it much faster to count a large number of tally marks at the end — you can count in 5s and then add any extra single marks, instead of counting every single mark one by one.',
          checkMode: 'self',
        },

        // ── Bar Graphs (4-7) — DIAGRAM BLOCK ────────────────────────────────
        // Shared bar graph: "Favourite Pets of Grade 5 Learners"
        // Categories (x-axis): Dogs, Cats, Fish, Birds
        // Values (y-axis, Number of Learners): Dogs = 12, Cats = 9, Fish = 4, Birds = 7
        // Scale: counts in 2s from 0 to 12
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above titled "Favourite Pets of Grade 5 Learners", which shows Dogs = 12, Cats = 9, Fish = 4 and Birds = 7 learners, how many learners chose Fish as their favourite pet?',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'Reading the height of the Fish bar on the graph, it reaches 4 on the scale. So 4 learners chose Fish.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Pets — Grade 5</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Dogs</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Cats</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Fish</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Birds</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above, which pet was chosen by more learners: Cats or Birds?',
          checkMode: 'auto',
          correctAnswer: 'Cats',
          correctAnswers: ['Cats', 'cats'],
          explanation: 'Cats = 9 learners and Birds = 7 learners. Since 9 is greater than 7, Cats was chosen by more learners.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Pets — Grade 5</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Dogs</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Cats</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Fish</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Birds</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many more learners chose Dogs than chose Fish?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Dogs = 12 and Fish = 4. The difference is 12 − 4 = 8 more learners chose Dogs than Fish.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Pets — Grade 5</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Dogs</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Cats</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Fish</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Birds</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many learners in total chose Cats or Birds as their favourite pet?',
          checkMode: 'auto',
          correctAnswer: '16',
          correctAnswers: ['16'],
          explanation: 'Cats = 9 and Birds = 7. Adding these together: 9 + 7 = 16 learners chose Cats or Birds.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Pets — Grade 5</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Dogs</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Cats</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Fish</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Birds</text></svg>',
        },

        // ── Pictographs (8-11) — DIAGRAM BLOCK ──────────────────────────────
        // Shared pictograph: "Books Read During the Week"
        // Key: 1 book symbol = 2 books
        // Rows: Monday = 5 symbols (10 books), Tuesday = 3 symbols (6 books),
        //       Wednesday = 2 and a half symbols (5 books), Thursday = 4 symbols (8 books)
        {
          difficulty: 'Medium',
          question: 'The pictograph above, "Books Read During the Week", has a key where 1 book symbol = 2 books. Monday shows 5 symbols. How many books were read on Monday?',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10'],
          explanation: 'Each symbol represents 2 books. Monday has 5 symbols, so 5 × 2 = 10 books were read on Monday.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Books Read During the Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 books</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Monday</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Tuesday</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Wednesday</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Thursday</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Wednesday shows 2 full symbols and 1 half symbol. How many books were read on Wednesday?',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: '2 full symbols = 2 × 2 = 4 books. A half symbol = half of 2 = 1 book. Total: 4 + 1 = 5 books were read on Wednesday.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Books Read During the Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 books</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Monday</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Tuesday</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Wednesday</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Thursday</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Tuesday shows 3 symbols and Thursday shows 4 symbols. How many more books were read on Thursday than on Tuesday?',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2'],
          explanation: 'Tuesday: 3 × 2 = 6 books. Thursday: 4 × 2 = 8 books. Difference: 8 − 6 = 2 more books were read on Thursday.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Books Read During the Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 books</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Monday</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Tuesday</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Wednesday</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Thursday</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, how many books were read in total on Monday and Thursday combined?',
          checkMode: 'auto',
          correctAnswer: '18',
          correctAnswers: ['18'],
          explanation: 'Monday = 5 × 2 = 10 books. Thursday = 4 × 2 = 8 books. Total: 10 + 8 = 18 books.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Books Read During the Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 books</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Monday</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Tuesday</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Wednesday</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Thursday</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },

        // ── Mean, Median and Mode (12-15) ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the mode of this data set: 4, 7, 4, 9, 4, 2.',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'Count how often each value appears: 4 appears 3 times, 7 appears once, 9 appears once, 2 appears once. Since 4 appears most often, the mode is 4.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the median of this data set: 11, 4, 8, 15, 6.',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'First arrange the values from smallest to biggest: 4, 6, 8, 11, 15. There are 5 values, so the middle (3rd) value is the median: 8.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the mean of this data set: 9, 14, 7, 10.',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10'],
          explanation: 'Add all the values: 9 + 14 + 7 + 10 = 40. There are 4 values, so the mean is 40 ÷ 4 = 10.',
        },
        {
          difficulty: 'Medium',
          question: 'A data set is: 3, 8, 5, 12. Does this data set have a mode? Explain your answer.',
          answer: 'No, this data set does not have a mode. Every value (3, 8, 5, and 12) appears exactly once, so no value occurs more often than any other. There is no single value that appears "most often", so there is no mode for this data set.',
          checkMode: 'self',
        },

        // ── Interpreting Data — single-step reasoning (16-17) ───────────────
        {
          difficulty: 'Medium',
          question: 'A survey of favourite ice-cream flavours gives these results: Vanilla appears 9 times, Chocolate appears 6 times, Strawberry appears 9 times. Zanele says the mode is 9. Explain what is wrong with Zanele\'s statement and give the correct mode(s).',
          answer: 'Zanele is wrong. The mode must be the data value that appears most often — in this case a flavour name, not a frequency. Vanilla and Strawberry both appear 9 times, which is the highest frequency, so both are modes. The correct answer is that this data set has two modes: Vanilla and Strawberry (it is bimodal). The number 9 is the frequency, not the mode itself.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Class A recorded a mean test score of 68 and Class B recorded a mean test score of 74. What does comparing these two means tell us about the two classes\' performance?',
          checkMode: 'auto',
          correctAnswer: 'Class B performed better on average than Class A',
          correctAnswers: ['Class B performed better on average than Class A', 'Class B did better on average', 'Class B had a higher average'],
          explanation: 'The mean gives the average score for each class. Since 74 is greater than 68, Class B\'s average score was higher, so on average Class B performed better than Class A on this test.',
        },

        // ── Interpreting Data — multi-step application & fractions (18-19) ──
        {
          difficulty: 'Hard',
          question: 'Nomvula surveys 20 learners about their favourite school subject. 8 choose Soccer Club, 5 choose Chess Club, and the rest choose Reading Club. How many learners chose Reading Club, and what fraction of the whole group is this?',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many learners chose Reading Club?',
              correctAnswer: '7',
              correctAnswers: ['7'],
              explanation: '20 − 8 − 5 = 7 learners chose Reading Club.',
            },
            {
              label: 'b) What fraction of the 20 learners chose Reading Club?',
              correctAnswer: '7/20',
              correctAnswers: ['7/20'],
              explanation: '7 out of 20 learners chose Reading Club, giving the fraction 7/20. This fraction cannot be simplified further since 7 and 20 share no common factors other than 1.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A learner records the number of stickers collected each day from Monday to Friday: 6, 9, 4, 7, 9. She calculates the mean by adding all five numbers and dividing by 4, getting an answer of 8.75. Is her calculation correct? If not, find the correct mean.',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'Her calculation is incorrect — she divided by 4 instead of 5, since there are 5 data values (Monday to Friday), not 4. The correct total is 6 + 9 + 4 + 7 + 9 = 35. The correct mean is 35 ÷ 5 = 7, not 8.75.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score on Set 1 — you have completely mastered tally tables, bar graphs, pictographs and mean, median and mode. Superb work!' },
        { minScore: 15, message: 'Great work on Set 1! You have a strong grasp of data handling. Look back at any questions you missed to make it perfect.' },
        { minScore: 10, message: 'Good effort on Set 1! You understand a lot of this section. Revisit the worked examples for the parts that gave you trouble.' },
        { minScore: 0, message: "Keep practising Set 1 — data handling takes practice to master. Go back through the explanations and worked examples, then try again." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Collecting & Organising Data (0-3) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo asks 14 classmates what their favourite season is. He records: summer, winter, summer, spring, summer, winter, summer, spring, winter, summer, spring, summer, winter, summer. How many classmates chose summer?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'Count each time "summer" appears: summer, summer, summer, summer, summer, summer, summer = 7 classmates chose summer.',
        },
        {
          difficulty: 'Easy',
          question: 'A tally table shows the number of learners who chose each drink: Juice = ⁙||| (8), Water = ⁙ (5), Milk = || (2). What is the total number of learners who were asked?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Add the frequencies: 8 + 5 + 2 = 15 learners were asked.',
        },
        {
          difficulty: 'Easy',
          question: 'In a tally table, two full groups of 5 tally marks plus 1 more single mark are drawn next to "Oranges". What frequency should be written for oranges?',
          checkMode: 'auto',
          correctAnswer: '11',
          correctAnswers: ['11'],
          explanation: 'Two full groups of 5 tally marks equal 5 + 5 = 10. Adding 1 more single mark gives 10 + 1 = 11.',
        },
        {
          difficulty: 'Easy',
          question: 'A learner has completed a tally table and the frequencies add up to 27, but she surveyed 30 people. What should she do, and why?',
          answer: 'She should go back and recount her tally marks and frequencies, because the total frequency must always match the total number of people surveyed. Since 27 does not equal 30, she has made a mistake somewhere — either she miscounted some tally marks, wrote down a wrong frequency, or missed recording 3 of the responses. Recounting carefully will help her find and fix the error so the total matches 30.',
          checkMode: 'self',
        },

        // ── Bar Graphs (4-7) — DIAGRAM BLOCK ────────────────────────────────
        // Shared bar graph: "Favourite Juice Flavours"
        // Categories (x-axis): Orange, Apple, Grape, Mango
        // Values (y-axis, Number of Learners): Orange = 14, Apple = 10, Grape = 6, Mango = 8
        // Scale: counts in 2s from 0 to 14
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above titled "Favourite Juice Flavours", which shows Orange = 14, Apple = 10, Grape = 6 and Mango = 8 learners, how many learners chose Grape as their favourite juice flavour?',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'Reading the height of the Grape bar on the graph, it reaches 6 on the scale. So 6 learners chose Grape.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Juice Flavours</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Orange</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Apple</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Grape</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above, which flavour was chosen by fewer learners: Apple or Mango?',
          checkMode: 'auto',
          correctAnswer: 'Mango',
          correctAnswers: ['Mango', 'mango'],
          explanation: 'Apple = 10 learners and Mango = 8 learners. Since 8 is less than 10, Mango was chosen by fewer learners.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Juice Flavours</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Orange</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Apple</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Grape</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many more learners chose Orange than chose Grape?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Orange = 14 and Grape = 6. The difference is 14 − 6 = 8 more learners chose Orange than Grape.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Juice Flavours</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Orange</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Apple</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Grape</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many learners in total chose Apple or Mango as their favourite juice flavour?',
          checkMode: 'auto',
          correctAnswer: '18',
          correctAnswers: ['18'],
          explanation: 'Apple = 10 and Mango = 8. Adding these together: 10 + 8 = 18 learners chose Apple or Mango.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite Juice Flavours</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Orange</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Apple</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Grape</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },

        // ── Pictographs (8-11) — DIAGRAM BLOCK ──────────────────────────────
        // Shared pictograph: "Stickers Collected This Term"
        // Key: 1 star symbol = 4 stickers
        // Rows: Ayanda = 5 symbols (20 stickers), Zanele = 3 symbols (12 stickers),
        //       Kabelo = 2 and a half symbols (10 stickers), Naledi = 4 symbols (16 stickers)
        {
          difficulty: 'Medium',
          question: 'The pictograph above, "Stickers Collected This Term", has a key where 1 star symbol = 4 stickers. Ayanda shows 5 symbols. How many stickers did Ayanda collect?',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20'],
          explanation: 'Each symbol represents 4 stickers. Ayanda has 5 symbols, so 5 × 4 = 20 stickers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stickers Collected This Term</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 stickers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Kabelo shows 2 full symbols and 1 half symbol. How many stickers did Kabelo collect?',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10'],
          explanation: '2 full symbols = 2 × 4 = 8 stickers. A half symbol = half of 4 = 2 stickers. Total: 8 + 2 = 10 stickers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stickers Collected This Term</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 stickers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Zanele shows 3 symbols and Naledi shows 4 symbols. How many more stickers did Naledi collect than Zanele?',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'Zanele: 3 × 4 = 12 stickers. Naledi: 4 × 4 = 16 stickers. Difference: 16 − 12 = 4 more stickers collected by Naledi.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stickers Collected This Term</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 stickers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, how many stickers were collected in total by Ayanda and Naledi combined?',
          checkMode: 'auto',
          correctAnswer: '36',
          correctAnswers: ['36'],
          explanation: 'Ayanda = 5 × 4 = 20 stickers. Naledi = 4 × 4 = 16 stickers. Total: 20 + 16 = 36 stickers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stickers Collected This Term</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 stickers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },

        // ── Mean, Median and Mode (12-15) ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the mode of this data set: 5, 3, 5, 8, 5, 1.',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: 'Count how often each value appears: 5 appears 3 times, 3 appears once, 8 appears once, 1 appears once. Since 5 appears most often, the mode is 5.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the median of this data set: 22, 9, 14, 17, 3.',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14'],
          explanation: 'First arrange the values from smallest to biggest: 3, 9, 14, 17, 22. There are 5 values, so the middle (3rd) value is the median: 14.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the mean of this data set: 12, 18, 15, 9, 6.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12'],
          explanation: 'Add all the values: 12 + 18 + 15 + 9 + 6 = 60. There are 5 values, so the mean is 60 ÷ 5 = 12.',
        },
        {
          difficulty: 'Medium',
          question: 'A data set is: 7, 2, 9, 4. Does this data set have a mode? Explain your answer.',
          answer: 'No, this data set does not have a mode. Every value (7, 2, 9, and 4) appears exactly once, so no value occurs more often than any other. Since no single value appears more frequently than the rest, this data set has no mode.',
          checkMode: 'self',
        },

        // ── Interpreting Data — single-step reasoning (16-17) ───────────────
        {
          difficulty: 'Medium',
          question: 'A survey of favourite fruit gives these results: Apple appears 8 times, Banana appears 5 times, Naartjie appears 8 times. Kagiso says the mode of this data set is a single value. Explain what is wrong with Kagiso\'s statement and give the correct mode(s).',
          answer: 'Kagiso is wrong. Apple and Naartjie both appear 8 times, which is the highest frequency in the data set, so both fruits are modes — not just one. This data set is bimodal, meaning it has two modes: Apple and Naartjie. A data set can have more than one mode when two or more values tie for the highest frequency.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Team X recorded a mean of 6 goals per match and Team Y recorded a mean of 4 goals per match over a season. What does comparing these two means tell us about the two teams\' scoring?',
          checkMode: 'auto',
          correctAnswer: 'Team X scored more goals on average than Team Y',
          correctAnswers: ['Team X scored more goals on average than Team Y', 'Team X scored more on average', 'Team X had a higher average'],
          explanation: 'The mean gives the average number of goals per match for each team. Since 6 is greater than 4, Team X\'s average was higher, so on average Team X scored more goals per match than Team Y this season.',
        },

        // ── Interpreting Data — multi-step application & fractions (18-19) ──
        {
          difficulty: 'Hard',
          question: 'Thabo surveys 25 learners about their favourite sport to play. 10 choose Cricket, 8 choose Soccer, and the rest choose Tennis. How many learners chose Tennis, and what fraction of the whole group is this?',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many learners chose Tennis?',
              correctAnswer: '7',
              correctAnswers: ['7'],
              explanation: '25 − 10 − 8 = 7 learners chose Tennis.',
            },
            {
              label: 'b) What fraction of the 25 learners chose Tennis?',
              correctAnswer: '7/25',
              correctAnswers: ['7/25'],
              explanation: '7 out of 25 learners chose Tennis, giving the fraction 7/25. This fraction cannot be simplified further since 7 and 25 share no common factors other than 1.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A shop records the number of loaves of bread sold each day from Monday to Friday: 12, 15, 9, 18, 6. The median is found by a learner who says it is 9, because 9 is written third in the original list. Is the learner correct? If not, find the correct median.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12'],
          explanation: 'The learner is incorrect. To find the median, the values must first be arranged from smallest to biggest: 6, 9, 12, 15, 18. Only then is the middle value found — the 3rd value in this ordered list is 12, not 9. The learner made the mistake of using the original, unordered position instead of sorting first.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score on Set 2 — you have completely mastered tally tables, bar graphs, pictographs and mean, median and mode. Superb work!' },
        { minScore: 15, message: 'Great work on Set 2! You have a strong grasp of data handling. Look back at any questions you missed to make it perfect.' },
        { minScore: 10, message: 'Good effort on Set 2! You understand a lot of this section. Revisit the worked examples for the parts that gave you trouble.' },
        { minScore: 0, message: "Keep practising Set 2 — data handling takes practice to master. Go back through the explanations and worked examples, then try again." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Collecting & Organising Data (0-3) ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Amahle asks 15 classmates what their favourite hobby is. She records: reading, drawing, reading, gaming, reading, drawing, gaming, reading, drawing, reading, gaming, reading, drawing, reading, gaming. How many classmates chose reading?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'Count each time "reading" appears: reading, reading, reading, reading, reading, reading, reading = 7 classmates chose reading.',
        },
        {
          difficulty: 'Easy',
          question: 'A tally table shows the number of learners who chose each transport method: Bus = ⁙|| (7), Taxi = ⁙ (5), Bicycle = ||| (3). What is the total number of learners who were asked?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Add the frequencies: 7 + 5 + 3 = 15 learners were asked.',
        },
        {
          difficulty: 'Easy',
          question: 'In a tally table, three full groups of 5 tally marks are drawn next to "Yellow". What frequency should be written for yellow?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Three full groups of 5 tally marks equal 5 + 5 + 5 = 15. Since there are no extra single marks, the frequency is 15.',
        },
        {
          difficulty: 'Easy',
          question: 'A learner wants to record the eye colour of everyone in her class using tally marks. Describe the steps she should follow to build a complete tally and frequency table.',
          answer: 'First, she should list all the different eye colours that appear in the class as row headings (for example, brown, blue, green). Then she should go through the class one learner at a time and make one tally mark in the correct row for each learner\'s eye colour, remembering to cross the fifth mark through the previous four in each group. Once everyone has been recorded, she should count the tally marks in each row and write the frequency (the total count) next to each colour. Finally, she should add up all the frequencies and check that the total matches the number of learners in the class.',
          checkMode: 'self',
        },

        // ── Bar Graphs (4-7) — DIAGRAM BLOCK ────────────────────────────────
        // Shared bar graph: "Favourite School Subjects"
        // Categories (x-axis): Maths, English, Science, Art
        // Values (y-axis, Number of Learners): Maths = 15, English = 11, Science = 8, Art = 6
        // Scale: counts in 3s from 0 to 15
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above titled "Favourite School Subjects", which shows Maths = 15, English = 11, Science = 8 and Art = 6 learners, how many learners chose Science as their favourite subject?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Reading the height of the Science bar on the graph, it reaches 8 on the scale. So 8 learners chose Science.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite School Subjects</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Maths</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">English</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Science</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Art</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Using the bar graph above, which subject was chosen by more learners: English or Art?',
          checkMode: 'auto',
          correctAnswer: 'English',
          correctAnswers: ['English', 'english'],
          explanation: 'English = 11 learners and Art = 6 learners. Since 11 is greater than 6, English was chosen by more learners.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite School Subjects</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Maths</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">English</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Science</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Art</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many more learners chose Maths than chose Art?',
          checkMode: 'auto',
          correctAnswer: '9',
          correctAnswers: ['9'],
          explanation: 'Maths = 15 and Art = 6. The difference is 15 − 6 = 9 more learners chose Maths than Art.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite School Subjects</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Maths</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">English</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Science</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Art</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the bar graph above, how many learners in total chose English or Science as their favourite subject?',
          checkMode: 'auto',
          correctAnswer: '19',
          correctAnswers: ['19'],
          explanation: 'English = 11 and Science = 8. Adding these together: 11 + 8 = 19 learners chose English or Science.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Favourite School Subjects</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Maths</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">English</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Science</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Art</text></svg>',
        },

        // ── Pictographs (8-11) — DIAGRAM BLOCK ──────────────────────────────
        // Shared pictograph: "Votes for Class Sports Day Team Names"
        // Key: 1 trophy symbol = 10 votes
        // Rows: Team A = 3 and a half symbols (35 votes), Team B = 2 symbols (20 votes),
        //       Team C = 4 symbols (40 votes), Team D = 1 and a half symbols (15 votes)
        {
          difficulty: 'Medium',
          question: 'The pictograph above, "Votes for Class Sports Day Team Names", has a key where 1 trophy symbol = 10 votes. Team C shows 4 symbols. How many votes did Team C receive?',
          checkMode: 'auto',
          correctAnswer: '40',
          correctAnswers: ['40'],
          explanation: 'Each symbol represents 10 votes. Team C has 4 symbols, so 4 × 10 = 40 votes.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Votes for Sports Day Team Names</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 votes</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Team A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 120,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Team B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Team C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Team D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 88,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Team A shows 3 full symbols and 1 half symbol. How many votes did Team A receive?',
          checkMode: 'auto',
          correctAnswer: '35',
          correctAnswers: ['35'],
          explanation: '3 full symbols = 3 × 10 = 30 votes. A half symbol = half of 10 = 5 votes. Total: 30 + 5 = 35 votes.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Votes for Sports Day Team Names</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 votes</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Team A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 120,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Team B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Team C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Team D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 88,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, Team B shows 2 symbols and Team D shows 1 and a half symbols. How many more votes did Team B receive than Team D?',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: 'Team B: 2 × 10 = 20 votes. Team D: 1 full symbol (10) + half symbol (5) = 15 votes. Difference: 20 − 15 = 5 more votes for Team B.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Votes for Sports Day Team Names</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 votes</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Team A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 120,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Team B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Team C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Team D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 88,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the pictograph above, how many votes were cast in total for Team A and Team C combined?',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75'],
          explanation: 'Team A = 35 votes. Team C = 4 × 10 = 40 votes. Total: 35 + 40 = 75 votes.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Votes for Sports Day Team Names</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Key:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 votes</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Team A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 120,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Team B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Team C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Team D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 88,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },

        // ── Mean, Median and Mode (12-15) ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the mode of this data set: 6, 2, 6, 10, 6, 4.',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'Count how often each value appears: 6 appears 3 times, 2 appears once, 10 appears once, 4 appears once. Since 6 appears most often, the mode is 6.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the median of this data set: 19, 7, 12, 25, 4.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12'],
          explanation: 'First arrange the values from smallest to biggest: 4, 7, 12, 19, 25. There are 5 values, so the middle (3rd) value is the median: 12.',
        },
        {
          difficulty: 'Medium',
          question: 'Find the mean of this data set: 8, 13, 6, 9.',
          checkMode: 'auto',
          correctAnswer: '9',
          correctAnswers: ['9'],
          explanation: 'Add all the values: 8 + 13 + 6 + 9 = 36. There are 4 values, so the mean is 36 ÷ 4 = 9.',
        },
        {
          difficulty: 'Medium',
          question: 'A data set is: 5, 11, 3, 9. Does this data set have a mode? Explain your answer.',
          answer: 'No, this data set does not have a mode. Every value (5, 11, 3, and 9) appears exactly once, so no value occurs more often than any other. Because no single value repeats more than the others, this data set has no mode.',
          checkMode: 'self',
        },

        // ── Interpreting Data — single-step reasoning (16-17) ───────────────
        {
          difficulty: 'Medium',
          question: 'A survey of favourite colours gives these results: Blue appears 10 times, Red appears 6 times, Green appears 10 times. Sipho says the mode is Red, because Red was the second colour listed in the results. Explain what is wrong with Sipho\'s statement and give the correct mode(s).',
          answer: 'Sipho is wrong. The mode is found by looking at which value has the highest frequency, not by the order in which values were listed. Red only appears 6 times, which is the lowest frequency here, so it cannot be the mode. Blue and Green both appear 10 times, which is the highest frequency, so both are modes. This data set is bimodal, with modes Blue and Green.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bakery A recorded a mean of 42 loaves sold per day and Bakery B recorded a mean of 50 loaves sold per day over a month. What does comparing these two means tell us about the two bakeries\' sales?',
          checkMode: 'auto',
          correctAnswer: 'Bakery B sold more loaves on average than Bakery A',
          correctAnswers: ['Bakery B sold more loaves on average than Bakery A', 'Bakery B sold more on average', 'Bakery B had a higher average'],
          explanation: 'The mean gives the average number of loaves sold per day for each bakery. Since 50 is greater than 42, Bakery B\'s average was higher, so on average Bakery B sold more loaves per day than Bakery A that month.',
        },

        // ── Interpreting Data — multi-step application & fractions (18-19) ──
        {
          difficulty: 'Hard',
          question: 'Amahle surveys 32 learners about their favourite pet. 14 choose Dogs, 10 choose Cats, and the rest choose Birds. How many learners chose Birds, and what fraction of the whole group is this? Give the fraction in its simplest form.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many learners chose Birds?',
              correctAnswer: '8',
              correctAnswers: ['8'],
              explanation: '32 − 14 − 10 = 8 learners chose Birds.',
            },
            {
              label: 'b) What fraction of the 32 learners chose Birds, in simplest form?',
              correctAnswer: '1/4',
              correctAnswers: ['1/4', '8/32'],
              explanation: '8 out of 32 learners chose Birds, giving the fraction 8/32. Dividing both the numerator and denominator by 8: 8 ÷ 8 = 1 and 32 ÷ 8 = 4, so the simplest form is 1/4.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A tuck shop records the number of pies sold each day from Monday to Friday: 10, 14, 8, 16, 7. A learner calculates the mean as (10 + 14 + 8 + 16 + 7) ÷ 6 and gets an answer that is not a whole number. Explain the mistake and find the correct mean.',
          checkMode: 'auto',
          correctAnswer: '11',
          correctAnswers: ['11'],
          explanation: 'The mistake is dividing by 6 instead of 5 — there are only 5 data values (Monday to Friday). The correct total is 10 + 14 + 8 + 16 + 7 = 55. The correct mean is 55 ÷ 5 = 11.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score on Set 3 — you have completely mastered tally tables, bar graphs, pictographs and mean, median and mode. Superb work!' },
        { minScore: 15, message: 'Great work on Set 3! You have a strong grasp of data handling. Look back at any questions you missed to make it perfect.' },
        { minScore: 10, message: 'Good effort on Set 3! You understand a lot of this section. Revisit the worked examples for the parts that gave you trouble.' },
        { minScore: 0, message: "Keep practising Set 3 — data handling takes practice to master. Go back through the explanations and worked examples, then try again." },
      ],
    },
  ],

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
