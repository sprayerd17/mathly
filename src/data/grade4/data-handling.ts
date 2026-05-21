import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Data Handling',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Collecting and Organising Data',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;"><strong>Data</strong> is <strong>information we collect to answer a question</strong>. Before collecting data, we always start with a question we want to answer. The data we gather is then organised so we can read and understand it easily.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Real-life examples of data questions</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">⚽</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>What is the most popular sport in our class?</strong> — collect data by asking each learner which sport they enjoy most.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🚶</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>How many learners walk to school?</strong> — collect data by recording how each learner travels to school.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🎨</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>What is the favourite colour of Grade 4 learners?</strong> — collect data by asking each learner to choose their favourite colour.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The data collection process</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Pose a question</strong> you want to answer — this focuses your data collection.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Decide what data to collect</strong> — choose the categories or options you will record.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Collect the data</strong> using <strong style="color:#1e40af;">tally marks</strong> — one mark per response as you record each answer.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count the tallies</strong> and record the <strong style="color:#dc2626;">frequency</strong> — frequency is the total number of times each category was chosen.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Organise the data</strong> in a table — a <strong>frequency table</strong> shows all categories and their totals neatly in rows.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Tally marks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">A <strong style="color:#1e40af;">tally mark</strong> is a vertical line used to count responses one at a time. Every fifth mark is drawn diagonally across the previous four to make a <strong>group of 5</strong> — this makes counting faster and easier.</p>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;letter-spacing:3px;">||||</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">4</strong> — four separate vertical marks</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;">𝄌</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">5</strong> — four vertical marks crossed by a diagonal fifth mark</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;">𝄌 |||</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">8</strong> — one group of 5 plus 3 extra marks</span>
    </div>

  </div>
  <div style="margin-top:12px;font-size:14px;color:#1e3a8a;background:#dbeafe;border-radius:8px;padding:10px 14px;">
    <strong>Rule:</strong> Each tally mark represents <strong style="color:#1e40af;">1</strong>. Every <strong>5th mark</strong> crosses the previous 4. Count tallies in <strong style="color:#16a34a;">groups of 5</strong> then add any remaining marks.
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Structure of a frequency table</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Category</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Tally marks</th>
          <th style="padding:8px 14px;text-align:left;color:#dc2626;font-weight:700;">Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;color:#475569;">Category A</td>
          <td style="padding:8px 14px;color:#1e40af;font-weight:600;">𝄌 |</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">6</td>
        </tr>
        <tr style="background:#f8fafc;border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;color:#475569;">Category B</td>
          <td style="padding:8px 14px;color:#1e40af;font-weight:600;">𝄌 𝄌</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">10</td>
        </tr>
        <tr>
          <td style="padding:8px 14px;font-weight:700;color:#475569;">Total</td>
          <td style="padding:8px 14px;"></td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">16</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A class was asked their favourite fruit. Results: Apple — 8, Banana — 5, Orange — 7, Mango — 4. Show how to record this using tally marks and a frequency table.',
          steps: [
            'Set up a table with three columns: <strong>Fruit</strong>, <strong style="color:#1e40af;">Tally marks</strong>, and <strong style="color:#dc2626;">Frequency</strong>.',
            'Draw <strong style="color:#1e40af;">tally marks</strong> for each fruit: Apple = 𝄌 ||| (8), Banana = 𝄌 (5), Orange = 𝄌 || (7), Mango = |||| (4).',
            'Count the tallies and write the <strong style="color:#dc2626;">frequency</strong>: Apple = 8, Banana = 5, Orange = 7, Mango = 4.',
            'Add up all frequencies for the <strong style="color:#16a34a;">total</strong>: 8 + 5 + 7 + 4 = <strong style="color:#16a34a;">24 learners</strong>.',
          ],
          answer: 'The frequency table shows Apple: 8, Banana: 5, Orange: 7, Mango: 4. Total: 24 learners.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A frequency table showing favourite fruit with columns for fruit name tally marks and frequency — apple 8 banana 5 orange 7 mango 4',
      videoPlaceholder:
        'Short video showing how to collect data using tally marks and organise it into a frequency table',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PICTOGRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pictographs',
      title: 'Pictographs',
      icon: '🖼️',
      explanation: `
<p style="margin-bottom:14px;">A <strong>pictograph</strong> uses pictures or symbols to represent data. Each symbol stands for a fixed number of items — this number is shown in the <strong style="color:#1e40af;">key</strong>. Pictographs make it easy to compare categories at a glance.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Parts of a pictograph</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Title</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Describes <strong>what the graph is about</strong>. Always read the title first so you know what the data shows.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Key</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Shows <strong>what each symbol represents</strong> — for example, ★ = 2 learners. The key is essential for calculating the actual totals.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Symbols</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">The <strong>pictures or icons</strong> drawn for each category. Count the symbols, then multiply by the key value to get the total. A <strong>half symbol</strong> represents half the key value.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Categories</span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;">The <strong>items being compared</strong> — each category gets its own row of symbols.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to read a pictograph</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Read the <strong style="color:#dc2626;">title</strong> to understand what the graph shows.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Read the <strong style="color:#1e40af;">key</strong> to find out what each symbol is worth.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count the <span style="color:#16a34a;">symbols</span></strong> for the category you are reading.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Multiply</strong> the number of symbols by the <strong style="color:#1e40af;">key value</strong> to find the total for that category.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Half symbols 💡</span>
  <p style="margin-top:8px;font-size:14px;color:#78350f;">When a value is not exactly divisible by the key value, draw a <strong>half symbol</strong>. A half symbol is worth <strong>half the key value</strong>. For example, if the key is 2 and you need to show 7: draw 3 full symbols (= 6) and 1 half symbol (= 1), giving 6 + 1 = 7.</p>
</div>
`,
      workedExamples: [
        {
          question:
            'A pictograph shows favourite sports. Each symbol (★) represents 2 learners. Football: 4 symbols, Cricket: 3 symbols, Swimming: 5 symbols, Tennis: 2 symbols. Answer the questions.',
          steps: [
            '<strong style="color:#1e40af;">Key:</strong> each <strong style="color:#16a34a;">★</strong> = 2 learners.',
            'Football: <strong style="color:#16a34a;">4</strong> symbols × <strong style="color:#1e40af;">2</strong> = <strong>8 learners</strong>.',
            'Cricket: <strong style="color:#16a34a;">3</strong> × <strong style="color:#1e40af;">2</strong> = <strong>6 learners</strong>. &nbsp; Swimming: <strong style="color:#16a34a;">5</strong> × <strong style="color:#1e40af;">2</strong> = <strong>10 learners</strong>. &nbsp; Tennis: <strong style="color:#16a34a;">2</strong> × <strong style="color:#1e40af;">2</strong> = <strong>4 learners</strong>.',
            'Most popular: <strong>Swimming</strong> with the most symbols (<strong style="color:#16a34a;">5</strong>) = <strong>10 learners</strong>.',
            'Total surveyed: 8 + 6 + 10 + 4 = <strong>28 learners</strong>.',
          ],
          answer: 'Football: 8, Cricket: 6, Swimming: 10 (most popular), Tennis: 4. Total: 28 learners.',
        },
        {
          question:
            'How would you show 7 learners in a pictograph where each symbol represents 2 learners?',
          steps: [
            'Divide by the key value: <strong>7 ÷ 2 = 3.5</strong>.',
            '3.5 symbols means <strong>3 full symbols</strong> (= 6 learners) and <strong>1 half symbol</strong> (= 1 learner).',
          ],
          answer: 'Draw 3 full symbols and 1 half symbol.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A pictograph showing favourite sports with football 4 symbols cricket 3 symbols swimming 5 symbols tennis 2 symbols each symbol representing 2 learners with a clear key',
      videoPlaceholder:
        'Short video showing how to read and interpret a pictograph including how to use the key to calculate totals',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs',
      title: 'Bar Graphs',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;">A <strong>bar graph</strong> uses rectangular <strong style="color:#1e40af;">bars</strong> to represent data. The <strong>height</strong> (or length) of each bar shows the value for that category. Bar graphs make it easy to compare categories and spot the highest or lowest values quickly.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Parts of a bar graph</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Title</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Describes <strong>what the graph is about</strong>. Always read this first.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Horizontal axis</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">The <strong>x-axis</strong> runs left to right and shows the <strong>categories</strong> being compared.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Vertical axis</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">The <strong>y-axis</strong> runs bottom to top and shows the <strong>values or frequency</strong>. The scale on this axis lets you read the height of each bar.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Bars</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong>rectangles</strong> drawn for each category. The <strong>height</strong> of each bar shows the data value for that category.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Scale</span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;">The <strong>numbered intervals</strong> on the vertical axis. Choose a scale that fits all your values neatly — for example, 0, 2, 4, 6, 8, 10.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to read a bar graph</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Read the <strong style="color:#16a34a;">title</strong> to understand what the graph is about.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Look at the <strong style="color:#dc2626;">scale</strong> on the vertical axis to understand the value of each interval.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Find the <strong>category</strong> you want on the <strong style="color:#dc2626;">horizontal axis</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Read <strong>across from the top of the <span style="color:#1e40af;">bar</span></strong> to the <strong style="color:#dc2626;">vertical axis</strong> to find the value.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A bar graph shows the number of books read in a month. Thabo: 6, Lerato: 9, Sipho: 4, Amahle: 7. Answer the questions.',
          steps: [
            'Tallest <strong style="color:#1e40af;">bar</strong>: <strong>Lerato</strong> at <strong>9 books</strong> — most books read.',
            'Shortest <strong style="color:#1e40af;">bar</strong>: <strong>Sipho</strong> at <strong>4 books</strong> — fewest books read.',
            'Total: <strong>6 + 9 + 4 + 7</strong> = <strong style="color:#dc2626;">26 books</strong> read altogether.',
            'Difference between most and fewest: <strong>9 − 4</strong> = <strong>5 more books</strong> read by Lerato than Sipho.',
          ],
          answer: 'Most: Lerato (9). Fewest: Sipho (4). Total: 26 books. Lerato read 5 more books than Sipho.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A bar graph showing books read by four learners — Thabo 6 Lerato 9 Sipho 4 Amahle 7 — with a vertical axis scaled from 0 to 10 and each bar a different colour',
      videoPlaceholder:
        'Short video showing how to read and analyse a bar graph and write sentences describing what the data shows',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ANALYSING AND INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'analysing-interpreting-data',
      title: 'Analysing and Interpreting Data',
      icon: '🔎',
      explanation: `
<p style="margin-bottom:14px;"><strong>Analysing data</strong> means looking at the results carefully to find <strong style="color:#16a34a;">patterns</strong>, make <strong style="color:#1e40af;">comparisons</strong>, and draw <strong style="color:#16a34a;">conclusions</strong>. After reading a graph or table, we write sentences that explain what the data tells us.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key analysis questions to ask</div>
  <div style="display:flex;flex-direction:column;gap:8px;font-size:15px;color:#1e3a8a;">
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Which category has the most?</strong> — this is called the <strong style="color:#16a34a;">mode</strong>.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Which category has the least?</strong></span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#dc2626;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>What is the total?</strong> — add all the values together.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#1e40af;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>What is the difference</strong> between the most and the least?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>What conclusions can we draw?</strong> — what does the data tell us about the group?</span>
    </div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Writing conclusions 📝</div>
  <div style="color:#14532d;font-size:15px;">A good conclusion sentence answers a question about the data using <strong>specific numbers</strong>. For example: <em>"Lerato read the most books with 9 in total"</em> is better than just <em>"Lerato read a lot."</em></div>
</div>
`,
      workedExamples: [
        {
          question:
            'Using the book data from Worked Example 4 (Thabo: 6, Lerato: 9, Sipho: 4, Amahle: 7), write three sentences describing what the data shows.',
          steps: [
            '<strong style="color:#16a34a;">Most:</strong> Lerato read the most books with <strong>9</strong> in total.',
            '<strong style="color:#16a34a;">Least:</strong> Sipho read the fewest books with only <strong>4</strong>.',
            '<strong style="color:#1e40af;">Average:</strong> Total = 6 + 9 + 4 + 7 = 26. Average = 26 ÷ 4 = <strong>6.5 books</strong> per learner.',
          ],
          answer: 'Lerato read the most (9). Sipho read the fewest (4). On average, learners read 6.5 books each.',
        },
        {
          question:
            'A survey asked 30 learners how they get to school. Walk: 12, Car: 8, Bus: 7, Bicycle: 3. What fraction of learners walk to school?',
          steps: [
            '<strong style="color:#dc2626;">12</strong> out of <strong style="color:#dc2626;">30</strong> learners walk to school.',
            'Write as a fraction: <strong>12/30</strong>.',
            'Simplify: 12 and 30 are both divisible by 6. <strong>12 ÷ 6 = 2</strong> and <strong>30 ÷ 6 = 5</strong>.',
            'Simplified fraction: <strong style="color:#16a34a;">2/5</strong>.',
          ],
          answer: '2/5 of learners walk to school.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to read and analyse a bar graph and write sentences describing what the data shows',
    },
  ],
  topicPractice: [
    {
      question:
        'A class survey recorded the favourite fruits of learners. Apple: 6, Banana: 9, Mango: 4, Orange: 5. How many learners were surveyed in total?',
      checkMode: 'auto',
      marks: 2,
      parts: [
        {
          label: 'Total number of learners surveyed',
          correctAnswer: '24',
          explanation:
            'Add all the values: 6 + 9 + 4 + 5 = <strong style="color:#16a34a;">24</strong> learners were surveyed.',
        },
      ],
    },
    {
      question:
        'A class voted for their favourite subjects. Maths: 7, English: 8, Science: 5, Art: 4.',
      checkMode: 'auto',
      marks: 6,
      parts: [
        {
          label: 'a) Which subject was most popular?',
          correctAnswer: 'english',
          explanation:
            'English had the highest count: <strong style="color:#16a34a;">8 votes</strong>.',
        },
        {
          label: 'b) Which subject was least popular?',
          correctAnswer: 'art',
          explanation:
            'Art had the lowest count: <strong style="color:#16a34a;">4 votes</strong>.',
        },
        {
          label: 'c) How many more learners chose Maths than Science?',
          correctAnswer: '2',
          explanation:
            'Maths (7) − Science (5) = <strong style="color:#16a34a;">2</strong> more learners.',
        },
      ],
    },
    {
      question:
        'A survey of 30 learners asked how they get to school. Walk: 12, Car: 8, Bus: 5, Bicycle: 5. There are 33 learners in a different class; 15 of them walk to school.',
      checkMode: 'auto',
      marks: 9,
      parts: [
        {
          label: 'a) What fraction of the first class (30 learners) walk to school? Simplify if possible.',
          correctAnswer: '2/5',
          correctAnswers: ['2/5', '12/30'],
          explanation:
            '12 out of 30 walk. <strong>12/30</strong> — divide both by 6 → <strong style="color:#16a34a;">2/5</strong>.',
        },
        {
          label: 'b) How many learners in the first class do NOT walk to school?',
          correctAnswer: '13',
          explanation:
            'Car (8) + Bus (5) = <strong style="color:#16a34a;">13</strong> learners do not walk.',
        },
        {
          label: 'c) What fraction of the second class (33 learners) walk to school? Simplify if possible.',
          correctAnswer: '5/11',
          correctAnswers: ['5/11', '15/33'],
          explanation:
            '15 out of 33 walk. <strong>15/33</strong> — divide both by 3 → <strong style="color:#16a34a;">5/11</strong>.',
        },
      ],
    },
    {
      question:
        'A pictograph shows learners\' favourite sports. Each symbol (★) = 3 learners. Football: ★★★★, Cricket: ★★, Rugby: ★★★, Swimming: ★★★★★. How many learners chose Football?',
      checkMode: 'auto',
      marks: 2,
      parts: [
        {
          label: 'Number of learners who chose Football',
          correctAnswer: '12',
          explanation:
            'Football has 4 symbols. <strong>4 × 3 = <span style="color:#16a34a;">12</span></strong> learners.',
        },
      ],
    },
    {
      question:
        'A pictograph shows books read last month. Each symbol (📚) = 4 books. Grade 3: 📚📚📚📚📚, Grade 4: 📚📚📚, Grade 5: 📚📚📚📚, Grade 6: 📚📚.',
      checkMode: 'auto',
      marks: 6,
      parts: [
        {
          label: 'a) How many books did Grade 3 read?',
          correctAnswer: '20',
          explanation:
            'Grade 3 has 5 symbols. <strong>5 × 4 = <span style="color:#16a34a;">20</span></strong> books.',
        },
        {
          label: 'b) How many books did Grade 4 read?',
          correctAnswer: '12',
          explanation:
            'Grade 4 has 3 symbols. <strong>3 × 4 = <span style="color:#16a34a;">12</span></strong> books.',
        },
        {
          label: 'c) How many books were read altogether by all four grades?',
          correctAnswer: '56',
          explanation:
            'Total symbols: 5 + 3 + 4 + 2 = 14. <strong>14 × 4 = <span style="color:#16a34a;">56</span></strong> books.',
        },
      ],
    },
    {
      question:
        'A pictograph shows books borrowed from the library. Each symbol (📖) = 2 books. Grade 4: 📖📖📖📖 and a half, Grade 5: 📖📖📖📖📖📖.',
      checkMode: 'auto',
      marks: 6,
      parts: [
        {
          label: 'a) How many books did Grade 4 borrow? (Each full symbol = 2 books; half symbol = 1 book)',
          correctAnswer: '9',
          correctAnswers: ['9books', '9', '9 books'],
          explanation:
            'Grade 4 has 4 full symbols + 1 half symbol. <strong>4 × 2 + 1 = <span style="color:#16a34a;">9 books</span></strong>.',
        },
        {
          label: 'b) Grade 5 borrowed 11 books. How many symbols would represent this? Write your answer in words.',
          correctAnswer: '5andahalfsymbols',
          correctAnswers: ['5andahalfsymbols', '5andahalf', '5 and a half', '5½', '5.5symbols', '5.5'],
          explanation:
            '11 ÷ 2 = <strong style="color:#16a34a;">5 and a half symbols</strong> (5 full symbols and 1 half symbol).',
        },
        {
          label: 'c) Which grade borrowed more books, and by how many?',
          correctAnswer: 'grade5read3more',
          correctAnswers: ['grade5read3more', 'grade5readmore', 'grade5', '3more', 'grade5by3'],
          explanation:
            'Grade 5 has 6 symbols → 6 × 2 = 12 books. Grade 4 = 9 books. 12 − 9 = <strong style="color:#16a34a;">Grade 5 borrowed 3 more books</strong>.',
        },
      ],
    },
    {
      question:
        'A bar graph shows rainfall in mm for four months. January: 40mm, February: 60mm, March: 30mm, April: 50mm. Which month had the most rainfall?',
      checkMode: 'auto',
      marks: 2,
      parts: [
        {
          label: 'Month with the most rainfall',
          correctAnswer: 'february',
          explanation:
            'February had <strong style="color:#16a34a;">60mm</strong>, which is the highest value on the bar graph.',
        },
      ],
    },
    {
      question:
        'Using the same rainfall data — January: 40mm, February: 60mm, March: 30mm, April: 50mm.',
      checkMode: 'auto',
      marks: 8,
      parts: [
        {
          label: 'a) Which month had the least rainfall?',
          correctAnswer: 'march',
          explanation:
            'March had <strong style="color:#16a34a;">30mm</strong>, the lowest bar on the graph.',
        },
        {
          label: 'b) What was the total rainfall over the four months?',
          correctAnswer: '180mm',
          correctAnswers: ['180mm', '180'],
          explanation:
            '40 + 60 + 30 + 50 = <strong style="color:#16a34a;">180mm</strong>.',
        },
        {
          label: 'c) How much more rain fell in February than in March?',
          correctAnswer: '30mm',
          correctAnswers: ['30mm', '30'],
          explanation:
            '60 − 30 = <strong style="color:#16a34a;">30mm</strong> more in February.',
        },
        {
          label: 'd) What was the average monthly rainfall?',
          correctAnswer: '45mm',
          correctAnswers: ['45mm', '45'],
          explanation:
            'Total ÷ number of months = 180 ÷ 4 = <strong style="color:#16a34a;">45mm</strong>.',
        },
      ],
    },
    {
      question:
        'A bar graph shows goals scored in a season. Thabo: 8, Sipho: 12, Lerato: 6, Amahle: 10, Bongani: 9.',
      checkMode: 'auto',
      marks: 8,
      parts: [
        {
          label: 'a) Who scored the most goals?',
          correctAnswer: 'sipho',
          explanation:
            'Sipho scored <strong style="color:#16a34a;">12 goals</strong>, the tallest bar.',
        },
        {
          label: 'b) What is the total number of goals scored?',
          correctAnswer: '45',
          explanation:
            '8 + 12 + 6 + 10 + 9 = <strong style="color:#16a34a;">45</strong> goals.',
        },
        {
          label: 'c) What is the difference between the highest and lowest scorer?',
          correctAnswer: '6',
          explanation:
            'Highest: Sipho (12). Lowest: Lerato (6). 12 − 6 = <strong style="color:#16a34a;">6</strong>.',
        },
        {
          label: 'd) The vertical axis goes from 0 to 15 in intervals of 3. What value does each interval represent?',
          correctAnswer: '3',
          explanation:
            'Each interval step on the axis represents <strong style="color:#16a34a;">3</strong>.',
        },
      ],
    },
    {
      question:
        'A survey shows 20 learners prefer summer and 12 prefer winter. How many more learners prefer summer?',
      checkMode: 'auto',
      marks: 2,
      parts: [
        {
          label: 'How many more learners prefer summer',
          correctAnswer: '8',
          explanation:
            '20 − 12 = <strong style="color:#16a34a;">8</strong> more learners prefer summer.',
        },
      ],
    },
    {
      question:
        'A class survey on favourite subjects: Maths 10, Science 6, English 8, Art 4, PE 12.',
      checkMode: 'auto',
      marks: 4,
      parts: [
        {
          label: 'a) Which subject is most popular?',
          correctAnswer: 'pe',
          explanation:
            'PE has <strong style="color:#16a34a;">12 votes</strong>, the highest count.',
        },
        {
          label: 'b) What fraction of learners chose Maths? Simplify if possible.',
          correctAnswer: '1/4',
          correctAnswers: ['1/4', '10/40'],
          explanation:
            'Total learners: 10 + 6 + 8 + 4 + 12 = 40. Maths: 10/40 — divide both by 10 → <strong style="color:#16a34a;">1/4</strong>.',
        },
      ],
    },
    {
      question:
        'A class survey on favourite subjects: Maths 10, Science 6, English 8, Art 4, PE 12.',
      checkMode: 'self',
      marks: 2,
      parts: [
        {
          label: 'c) Write one sentence describing what the data shows.',
          correctAnswer: '',
          modelAnswer:
            'Any valid sentence is acceptable. For example: "PE is the most popular subject with 12 votes, while Art is the least popular with only 4 votes."',
        },
      ],
    },
    {
      question:
        'A survey of 40 learners about transport to school: Walk 16, Car 10, Bus 8, Bicycle 6.',
      checkMode: 'auto',
      marks: 6,
      parts: [
        {
          label: 'a) What fraction walk to school? Simplify if possible.',
          correctAnswer: '2/5',
          correctAnswers: ['2/5', '16/40'],
          explanation:
            '16 out of 40 walk. 16/40 — divide both by 8 → <strong style="color:#16a34a;">2/5</strong>.',
        },
        {
          label: 'b) What percentage take a car?',
          correctAnswer: '25%',
          correctAnswers: ['25%', '25'],
          explanation:
            '10 ÷ 40 × 100 = <strong style="color:#16a34a;">25%</strong> take a car.',
        },
        {
          label: 'c) If 10 new learners join and 6 of them walk, what is the new fraction who walk? Simplify if possible.',
          correctAnswer: '11/25',
          correctAnswers: ['11/25', '22/50'],
          explanation:
            'New walkers: 16 + 6 = 22. New total: 40 + 10 = 50. 22/50 — divide both by 2 → <strong style="color:#16a34a;">11/25</strong>.',
        },
      ],
    },
    {
      question:
        'A survey of 40 learners about transport to school: Walk 16, Car 10, Bus 8, Bicycle 6.',
      checkMode: 'self',
      marks: 2,
      parts: [
        {
          label: 'd) Write two sentences analysing the transport data.',
          correctAnswer: '',
          modelAnswer:
            'Any two valid analytical sentences are acceptable. For example: "Walking is the most common way to get to school, with 16 out of 40 learners (40%) choosing to walk. Cycling is the least common, with only 6 learners (15%) travelling by bicycle."',
        },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 31, message: 'Perfect score! You have mastered Data Handling.' },
    { minScore: 24, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 16, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
