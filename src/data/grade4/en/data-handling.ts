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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — TALLY MARKS: READING AND COUNTING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Tally Marks',
      questions: [
        { difficulty: 'Easy', question: 'How many does ||| (three tally marks) represent?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'Each tally mark = 1. ||| = 3 ✓' },
        { difficulty: 'Easy', question: 'How many does 𝄌 (one full group of 5) represent?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A full group has 4 vertical lines crossed by a diagonal 5th line = 5 ✓' },
        { difficulty: 'Easy', question: 'How many does 𝄌 || (one group of 5 plus 2 more) represent?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'seven'], explanation: '5 + 2 = 7 ✓' },
        { difficulty: 'Easy', question: 'How many does 𝄌 |||| (one group of 5 plus 4 more) represent?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: '5 + 4 = 9 ✓' },
        { difficulty: 'Easy', question: 'How many does 𝄌 𝄌 (two full groups of 5) represent?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'ten'], explanation: '5 + 5 = 10 ✓' },
        { difficulty: 'Easy', question: 'How many does 𝄌 𝄌 || (two groups of 5 plus 2 more) represent?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: '5 + 5 + 2 = 12 ✓' },
        { difficulty: 'Medium', question: 'How many does 𝄌 𝄌 |||| (two groups of 5 plus 4 more) represent?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'fourteen'], explanation: '5 + 5 + 4 = 14 ✓' },
        { difficulty: 'Medium', question: 'How many does 𝄌 𝄌 𝄌 (three full groups of 5) represent?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'fifteen'], explanation: '5 + 5 + 5 = 15 ✓' },
        { difficulty: 'Medium', question: 'How many does 𝄌 𝄌 𝄌 ||| (three groups of 5 plus 3 more) represent?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'eighteen'], explanation: '5 + 5 + 5 + 3 = 18 ✓' },
        { difficulty: 'Easy', question: 'How many does |||| (four tally marks, no group of 5 yet) represent?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'Four separate marks with no diagonal 5th line yet = 4 ✓' },
        { difficulty: 'Easy', question: 'A tally count has 3 full groups of 5 and 2 extra marks. What is the total?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', 'seventeen'], explanation: '3 × 5 = 15, plus 2 extra = 15 + 2 = 17 ✓' },
        { difficulty: 'Medium', question: 'A tally count has 4 full groups of 5 and 1 extra mark. What is the total?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', 'twenty one', 'twenty-one'], explanation: '4 × 5 = 20, plus 1 extra = 20 + 1 = 21 ✓' },
        { difficulty: 'Easy', question: 'A tally count has 2 full groups of 5 and 4 extra marks. What is the total?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'fourteen'], explanation: '2 × 5 = 10, plus 4 extra = 10 + 4 = 14 ✓' },
        { difficulty: 'Medium', question: 'A tally count has 6 full groups of 5 and 0 extra marks. What is the total?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'thirty'], explanation: '6 × 5 = 30 ✓' },
        { difficulty: 'Medium', question: 'A class recorded favourite pets using tally marks: Dogs — 𝄌 |||, Cats — 𝄌 |, Fish — ||||, Birds — 𝄌 𝄌 ||. How many learners chose Dogs?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'Dogs = 𝄌 ||| = 5 + 3 = 8 ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dogs — 𝄌 |||, Cats — 𝄌 |, Fish — ||||, Birds — 𝄌 𝄌 ||), how many learners chose Birds?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'Birds = 𝄌 𝄌 || = 5 + 5 + 2 = 12 ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dogs — 8, Cats — 6, Fish — 4, Birds — 12), how many learners were surveyed in total?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'thirty'], explanation: '8 + 6 + 4 + 12 = 30 ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dogs — 8, Cats — 6, Fish — 4, Birds — 12), which pet is the mode (chosen most often)?', answer: 'Birds', checkMode: 'auto', correctAnswer: 'Birds', correctAnswers: ['Birds', 'birds'], explanation: 'Birds has the highest frequency, 12, so Birds is the mode ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dogs — 8, Cats — 6, Fish — 4, Birds — 12), which pet was chosen the least?', answer: 'Fish', checkMode: 'auto', correctAnswer: 'Fish', correctAnswers: ['Fish', 'fish'], explanation: 'Fish has the lowest frequency, 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the pet data (Dogs — 8, Cats — 6, Fish — 4, Birds — 12), what is the difference between the most popular and least popular pet?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'Most: Birds (12). Least: Fish (4). 12 − 4 = 8 ✓' },
        { difficulty: 'Medium', question: 'A class recorded favourite colours using tally marks: Blue — 𝄌 ||, Red — 𝄌, Green — 𝄌 𝄌 |||, Yellow — ||||. How many learners chose Green?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', 'thirteen'], explanation: 'Green = 𝄌 𝄌 ||| = 5 + 5 + 3 = 13 ✓' },
        { difficulty: 'Medium', question: 'Using the colour data (Blue — 7, Red — 5, Green — 13, Yellow — 4), how many learners were surveyed in total?', answer: '29', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', 'twenty nine', 'twenty-nine'], explanation: '7 + 5 + 13 + 4 = 29 ✓' },
        { difficulty: 'Medium', question: 'Using the colour data (Blue — 7, Red — 5, Green — 13, Yellow — 4), which colour is the mode?', answer: 'Green', checkMode: 'auto', correctAnswer: 'Green', correctAnswers: ['Green', 'green'], explanation: 'Green has the highest frequency, 13, so it is the mode ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the colour data (Blue — 7, Red — 5, Green — 13, Yellow — 4), what is the difference between the most popular and least popular colour?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: 'Most: Green (13). Least: Yellow (4). 13 − 4 = 9 ✓' },
        { difficulty: 'Hard', question: 'Explain in your own words why tally marks are grouped in 5s instead of just being drawn as single lines.', answer: 'Grouping tally marks in 5s makes them much faster and easier to count — instead of counting every single mark one at a time, you can count in 5s (5, 10, 15 …) and then add any extra marks at the end. This reduces mistakes when there are many responses to count.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can read and count tally marks with confidence.' },
        { minScore: 19, message: 'Great work! Review any missed questions on grouping tallies in 5s.' },
        { minScore: 13, message: 'Good effort! Go back to the tally marks section and try again.' },
        { minScore: 0, message: 'Keep going — read through the tally marks explanation again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — PICTOGRAPHS: READING WITH A KEY (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Pictographs',
      questions: [
        { difficulty: 'Easy', question: 'A pictograph shows favourite sports. Each symbol (★) = 2 learners. Football has 4 symbols. How many learners chose Football?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 learners'], explanation: '4 × 2 = 8 learners ✓' },
        { difficulty: 'Easy', question: 'Using the same key (★ = 2 learners), Cricket has 3 symbols. How many learners chose Cricket?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 learners'], explanation: '3 × 2 = 6 learners ✓' },
        { difficulty: 'Easy', question: 'Using the same key (★ = 2 learners), Swimming has 5 symbols. How many learners chose Swimming?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 learners'], explanation: '5 × 2 = 10 learners ✓' },
        { difficulty: 'Easy', question: 'Using the same key (★ = 2 learners), Tennis has 2 symbols. How many learners chose Tennis?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 learners'], explanation: '2 × 2 = 4 learners ✓' },
        { difficulty: 'Medium', question: 'Using the sports data (Football 8, Cricket 6, Swimming 10, Tennis 4), how many learners were surveyed in total?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 learners'], explanation: '8 + 6 + 10 + 4 = 28 learners ✓' },
        { difficulty: 'Medium', question: 'Using the sports data (Football 8, Cricket 6, Swimming 10, Tennis 4), which sport is the mode (most popular)?', answer: 'Swimming', checkMode: 'auto', correctAnswer: 'Swimming', correctAnswers: ['Swimming', 'swimming'], explanation: 'Swimming has the most symbols (5) and the highest total (10) ✓' },
        { difficulty: 'Easy', question: 'A pictograph shows favourite pets. Each symbol (🐾) = 5 learners. Dogs has 3 symbols. How many learners chose Dogs?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 learners'], explanation: '3 × 5 = 15 learners ✓' },
        { difficulty: 'Easy', question: 'Using the same key (🐾 = 5 learners), Cats has 5 symbols. How many learners chose Cats?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 learners'], explanation: '5 × 5 = 25 learners ✓' },
        { difficulty: 'Medium', question: 'Using the same key (🐾 = 5 learners), Fish has 2 symbols. How many learners chose Fish?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 learners'], explanation: '2 × 5 = 10 learners ✓' },
        { difficulty: 'Medium', question: 'Using the same key (🐾 = 5 learners), Birds has 4 symbols. How many learners chose Birds?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 learners'], explanation: '4 × 5 = 20 learners ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dogs 15, Cats 25, Fish 10, Birds 20), what is the total number of learners surveyed?', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70 learners'], explanation: '15 + 25 + 10 + 20 = 70 learners ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the pet data (Dogs 15, Cats 25, Fish 10, Birds 20), what is the difference between the most and least popular pets?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Most: Cats (25). Least: Fish (10). 25 − 10 = 15 ✓' },
        { difficulty: 'Easy', question: 'A pictograph shows cars sold each month. Each symbol (🚗) = 10 cars. January has 5 symbols. How many cars were sold in January?', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 cars'], explanation: '5 × 10 = 50 cars ✓' },
        { difficulty: 'Medium', question: 'Using the same key (🚗 = 10 cars), March has 6 symbols. How many cars were sold in March?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 cars'], explanation: '6 × 10 = 60 cars ✓' },
        { difficulty: 'Medium', question: 'Using the car data (January 50, February 30, March 60, April 40), what is the total number of cars sold over the four months?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 cars'], explanation: '50 + 30 + 60 + 40 = 180 cars ✓' },
        { difficulty: 'Medium', question: 'Using the car data (January 50, February 30, March 60, April 40), which month had the mode (highest sales)?', answer: 'March', checkMode: 'auto', correctAnswer: 'March', correctAnswers: ['March', 'march'], explanation: 'March had the most symbols (6) and the highest total (60 cars) ✓' },
        { difficulty: 'Easy', question: 'A pictograph shows a symbol worth 4 books. If 2 full symbols and 1 half symbol are drawn, how many books does this represent?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 books'], explanation: '2 full symbols = 2 × 4 = 8. A half symbol = half of 4 = 2. 8 + 2 = 10 books ✓' },
        { difficulty: 'Medium', question: 'A pictograph shows a symbol worth 6 books. If 2 full symbols and 1 half symbol are drawn, how many books does this represent?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 books'], explanation: '2 full symbols = 2 × 6 = 12. A half symbol = half of 6 = 3. 12 + 3 = 15 books ✓' },
        { difficulty: 'Medium', question: 'A pictograph shows a symbol worth 8 books. If 2 full symbols and 1 half symbol are drawn, how many books does this represent?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 books'], explanation: '2 full symbols = 2 × 8 = 16. A half symbol = half of 8 = 4. 16 + 4 = 20 books ✓' },
        { difficulty: 'Medium', question: 'A pictograph key is ★ = 2 learners. A category has 9 learners. How many symbols should be drawn (write as a number of full symbols and a half, e.g. "4 and a half")?', answer: '4 and a half', checkMode: 'auto', correctAnswer: '4 and a half', correctAnswers: ['4 and a half', '4.5', '4½', '4 and a half symbols'], explanation: '9 ÷ 2 = 4.5, so draw 4 full symbols (= 8 learners) and 1 half symbol (= 1 learner): 8 + 1 = 9 ✓' },
        { difficulty: 'Easy', question: 'A pictograph key is ★ = 3 learners. A category has exactly 9 learners. How many whole symbols should be drawn?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 symbols'], explanation: '9 ÷ 3 = 3 whole symbols exactly, no half symbol needed ✓' },
        { difficulty: 'Medium', question: 'A pictograph shows books read by grade. Each symbol (📚) = 4 books. Grade 3: 6 symbols, Grade 4: 4 symbols, Grade 5: 7 symbols, Grade 6: 3 symbols. How many books did Grade 5 read?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 books'], explanation: '7 × 4 = 28 books ✓' },
        { difficulty: 'Medium', question: 'Using the books-by-grade data (Grade 3: 24, Grade 4: 16, Grade 5: 28, Grade 6: 12), what is the total number of books read by all four grades?', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80 books'], explanation: '24 + 16 + 28 + 12 = 80 books ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the books-by-grade data (Grade 3: 24, Grade 4: 16, Grade 5: 28, Grade 6: 12), how many more books did Grade 5 read than Grade 6?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 books'], explanation: 'Grade 5 (28) − Grade 6 (12) = 16 more books ✓' },
        { difficulty: 'Hard', question: 'Explain why a pictograph key (like ★ = 2 learners) is essential for reading the graph correctly, and what could go wrong if you ignored it.', answer: 'The key tells you what one symbol is actually worth. Without checking the key, you might assume each symbol equals 1, which would give you completely wrong totals — for example, counting 5 symbols as "5 learners" instead of correctly calculating 5 × 2 = 10 learners if the key says each symbol is worth 2. Always read the key before calculating any totals from a pictograph.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can read pictographs and use the key to calculate totals confidently.' },
        { minScore: 19, message: 'Great work! Review any missed questions on using the key and half symbols.' },
        { minScore: 13, message: 'Good effort! Revisit the pictographs section and try again.' },
        { minScore: 0, message: 'Keep going — read through the pictographs explanation again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — BAR GRAPHS: READING, INTERPRETING AND WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Bar Graphs',
      questions: [
        { difficulty: 'Easy', question: 'A bar graph shows a pet survey: Dogs 14, Cats 10, Fish 6, Birds 8. Which pet has the tallest bar?', answer: 'Dogs', checkMode: 'auto', correctAnswer: 'Dogs', correctAnswers: ['Dogs', 'dogs'], explanation: 'Dogs has the highest value, 14, so it has the tallest bar ✓' },
        { difficulty: 'Easy', question: 'Using the pet survey (Dogs 14, Cats 10, Fish 6, Birds 8), which pet has the shortest bar?', answer: 'Fish', checkMode: 'auto', correctAnswer: 'Fish', correctAnswers: ['Fish', 'fish'], explanation: 'Fish has the lowest value, 6, so it has the shortest bar ✓' },
        { difficulty: 'Medium', question: 'Using the pet survey (Dogs 14, Cats 10, Fish 6, Birds 8), what is the total number of learners surveyed?', answer: '38', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38 learners'], explanation: '14 + 10 + 6 + 8 = 38 learners ✓' },
        { difficulty: 'Medium', question: 'Using the pet survey (Dogs 14, Cats 10, Fish 6, Birds 8), what is the difference between the tallest and shortest bar?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Dogs (14) − Fish (6) = 8 ✓' },
        { difficulty: 'Medium', question: 'A bar graph shows daily temperatures: Monday 22°C, Tuesday 25°C, Wednesday 19°C, Thursday 28°C, Friday 24°C. Which day was the hottest?', answer: 'Thursday', checkMode: 'auto', correctAnswer: 'Thursday', correctAnswers: ['Thursday', 'thursday'], explanation: 'Thursday had the highest temperature, 28°C ✓' },
        { difficulty: 'Medium', question: 'Using the temperature data (Monday 22, Tuesday 25, Wednesday 19, Thursday 28, Friday 24), which day was the coolest?', answer: 'Wednesday', checkMode: 'auto', correctAnswer: 'Wednesday', correctAnswers: ['Wednesday', 'wednesday'], explanation: 'Wednesday had the lowest temperature, 19°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the temperature data (22, 25, 19, 28, 24), what is the range (difference between the highest and lowest temperature)?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 degrees'], explanation: 'Highest (28) − Lowest (19) = 9°C ✓' },
        { difficulty: 'Medium', question: 'Using the temperature data (22, 25, 19, 28, 24), what is the total of all five temperatures?', answer: '118', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118'], explanation: '22 + 25 + 19 + 28 + 24 = 118 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the temperature data (Monday 22°C, Thursday 28°C), how many degrees warmer was Thursday than Monday?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 degrees'], explanation: '28 − 22 = 6°C ✓' },
        { difficulty: 'Easy', question: 'A bar graph shows money raised by four classes: 4A raised R450, 4B raised R620, 4C raised R380, 4D raised R550. Which class raised the most?', answer: '4B', checkMode: 'auto', correctAnswer: '4B', correctAnswers: ['4B', '4b'], explanation: '4B raised the most, R620 ✓' },
        { difficulty: 'Easy', question: 'Using the fundraising data (4A R450, 4B R620, 4C R380, 4D R550), which class raised the least?', answer: '4C', checkMode: 'auto', correctAnswer: '4C', correctAnswers: ['4C', '4c'], explanation: '4C raised the least, R380 ✓' },
        { difficulty: 'Medium', question: 'Using the fundraising data (4A R450, 4B R620, 4C R380, 4D R550), what was the total amount raised by all four classes?', answer: 'R2 000', checkMode: 'auto', correctAnswer: 'R2000', correctAnswers: ['R2000', 'R2 000', '2000', '2 000'], explanation: '450 + 620 + 380 + 550 = R2 000 ✓' },
        { difficulty: 'Medium', question: 'Using the fundraising data (4B R620, 4C R380), what is the difference between the amounts raised by 4B and 4C?', answer: 'R240', checkMode: 'auto', correctAnswer: 'R240', correctAnswers: ['R240', '240'], explanation: '620 − 380 = R240 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the fundraising data (total R2 000 raised by 4 classes), what was the average amount raised per class?', answer: 'R500', checkMode: 'auto', correctAnswer: 'R500', correctAnswers: ['R500', '500'], explanation: '2 000 ÷ 4 = R500 ✓' },
        { difficulty: 'Medium', question: 'A bar graph shows goals scored in a season: Thabo 8, Sipho 12, Lerato 6, Amahle 10, Bongani 9. Who scored the most goals?', answer: 'Sipho', checkMode: 'auto', correctAnswer: 'Sipho', correctAnswers: ['Sipho', 'sipho'], explanation: 'Sipho scored the most, 12 goals ✓' },
        { difficulty: 'Medium', question: 'Using the goals data (Thabo 8, Sipho 12, Lerato 6, Amahle 10, Bongani 9), what is the total number of goals scored?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 goals'], explanation: '8 + 12 + 6 + 10 + 9 = 45 goals ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the goals data (Sipho 12, Lerato 6), what is the difference between the highest and lowest scorer?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Highest: Sipho (12). Lowest: Lerato (6). 12 − 6 = 6 ✓' },
        { difficulty: 'Medium', question: 'A bar graph vertical axis goes from 0 to 15 in intervals of 3 (0, 3, 6, 9, 12, 15). What value does each interval step represent?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Each step from one number to the next is 3, so each interval represents 3 ✓' },
        { difficulty: 'Easy', question: 'A bar graph vertical axis is scaled 0, 2, 4, 6, 8, 10. What value does each interval represent?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'The scale increases by 2 each time, so each interval represents 2 ✓' },
        { difficulty: 'Medium', question: 'A bar graph shows ice creams sold: Vanilla 18, Chocolate 24, Strawberry 12. Which flavour is the mode (most sold)?', answer: 'Chocolate', checkMode: 'auto', correctAnswer: 'Chocolate', correctAnswers: ['Chocolate', 'chocolate'], explanation: 'Chocolate has the highest bar, 24 ✓' },
        { difficulty: 'Medium', question: 'Using the ice cream data (Vanilla 18, Chocolate 24, Strawberry 12), what is the total number of ice creams sold?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54'], explanation: '18 + 24 + 12 = 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the ice cream data (Chocolate 24, Strawberry 12), how many more chocolate ice creams were sold than strawberry?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: '24 − 12 = 12 more chocolate ice creams ✓' },
        { difficulty: 'Medium', question: 'A bar graph shows learners\' shoe sizes: Size 3 has 5 learners, Size 4 has 9 learners, Size 5 has 6 learners. What is the mode shoe size?', answer: 'Size 4', checkMode: 'auto', correctAnswer: 'Size 4', correctAnswers: ['Size 4', 'size4', '4'], explanation: 'Size 4 has the most learners (9), so it is the mode ✓' },
        { difficulty: 'Medium', question: 'Using the shoe size data (Size 3: 5, Size 4: 9, Size 5: 6), how many learners were surveyed in total?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 learners'], explanation: '5 + 9 + 6 = 20 learners ✓' },
        { difficulty: 'Hard', question: 'Explain why the scale chosen for the vertical axis of a bar graph matters, using an example of a scale that would be a poor choice for data ranging from 0 to 30.', answer: 'The scale must fit all the values neatly without the graph being too tall or too hard to read. For data from 0 to 30, a scale that counts up in 1s (0, 1, 2, 3 …) would need 30 tiny intervals, making the bars hard to compare and the graph very tall. A better scale would count up in 5s or 10s (e.g. 0, 5, 10, 15, 20, 25, 30), which fits the data neatly and makes the bars easy to read and compare.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can read and interpret bar graphs with confidence.' },
        { minScore: 19, message: 'Great work! Review any missed questions on comparing and calculating from bar graphs.' },
        { minScore: 13, message: 'Good effort! Revisit the bar graphs section and try again.' },
        { minScore: 0, message: 'Keep going — read through the bar graphs explanation again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP ANALYSIS AND REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Analysis and Reasoning',
      questions: [
        { difficulty: 'Medium', question: 'A survey of 50 learners asked their favourite pet: Dog 20, Cat 15, Fish 10, Bird 5. What fraction of learners chose Dog? Simplify if possible.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '20/50'], explanation: '20 out of 50 chose Dog. 20/50 — divide both by 10 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dog 20, Cat 15, Fish 10, Bird 5, total 50), what fraction of learners chose Cat? Simplify if possible.', answer: '3/10', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '15/50'], explanation: '15 out of 50 chose Cat. 15/50 — divide both by 5 → 3/10 ✓' },
        { difficulty: 'Medium', question: 'Using the pet data (Dog 20, Bird 5), what is the difference between the number who chose Dog and the number who chose Bird?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: '20 − 5 = 15 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the pet data (Dog 20, Cat 15, Fish 10, Bird 5, total 50), what fraction of learners did NOT choose Dog? Simplify if possible.', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '30/50'], explanation: 'Not Dog = Cat + Fish + Bird = 15 + 10 + 5 = 30. 30/50 — divide both by 10 → 3/5 ✓' },
        { difficulty: 'Medium', question: 'A survey of 40 learners asked how they travel to school: Walk 16, Car 10, Bus 8, Bicycle 6. What fraction walk to school? Simplify if possible.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '16/40'], explanation: '16 out of 40 walk. 16/40 — divide both by 8 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Using the transport data (Walk 16, Car 10, Bus 8, Bicycle 6, total 40), what fraction travel by car? Simplify if possible.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '10/40'], explanation: '10 out of 40 travel by car. 10/40 — divide both by 10 → 1/4 ✓' },
        { difficulty: 'Hard', question: 'Using the transport data (Walk 16, total 40), if 10 new learners join the class and 6 of them walk to school, what is the new fraction of learners who walk? Simplify if possible.', answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25', '22/50'], explanation: 'New walkers: 16 + 6 = 22. New total: 40 + 10 = 50. 22/50 — divide both by 2 → 11/25 ✓' },
        { difficulty: 'Medium', question: 'A class test was written by 40 learners: 28 passed and 12 failed. What fraction of learners passed? Simplify if possible.', answer: '7/10', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '28/40'], explanation: '28 out of 40 passed. 28/40 — divide both by 4 → 7/10 ✓' },
        { difficulty: 'Medium', question: 'Using the test data (28 passed, 12 failed, total 40), what fraction of learners failed? Simplify if possible.', answer: '3/10', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '12/40'], explanation: '12 out of 40 failed. 12/40 — divide both by 4 → 3/10 ✓' },
        { difficulty: 'Medium', question: 'A pictograph and a bar graph both show the same data: books read by Grade 4 learners. Which type of graph would be better for showing exact values without any half symbols?', answer: 'Bar graph', checkMode: 'auto', correctAnswer: 'Bar graph', correctAnswers: ['Bar graph', 'bar graph', 'bargraph'], explanation: 'A bar graph shows an exact height for any value, while a pictograph can only show values that are multiples of the key (needing half symbols otherwise) ✓' },
        { difficulty: 'Medium', question: 'A frequency table shows: Red 9, Blue 14, Green 7. What is the mode colour?', answer: 'Blue', checkMode: 'auto', correctAnswer: 'Blue', correctAnswers: ['Blue', 'blue'], explanation: 'Blue has the highest frequency, 14, so it is the mode ✓' },
        { difficulty: 'Medium', question: 'Using the colour data (Red 9, Blue 14, Green 7), what is the total number of learners surveyed?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: '9 + 14 + 7 = 30 ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the colour data (Red 9, Blue 14, Green 7, total 30), what fraction of learners chose Green? Simplify if possible.', answer: '7/30', checkMode: 'auto', correctAnswer: '7/30', correctAnswers: ['7/30'], explanation: '7 out of 30 chose Green. 7 and 30 share no common factor other than 1, so 7/30 is already simplified ✓' },
        { difficulty: 'Medium', question: 'A survey of 60 learners about favourite drinks: Juice 24, Water 20, Milk 16. What fraction chose Juice? Simplify if possible.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '24/60'], explanation: '24 out of 60 chose Juice. 24/60 — divide both by 12 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Using the drinks data (Juice 24, Water 20, Milk 16, total 60), what is the difference between the most and least popular drink?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Most: Juice (24). Least: Milk (16). 24 − 16 = 8 ✓' },
        { difficulty: 'Hard', question: 'A pictograph key is ★ = 5 learners and a bar graph shows the same data with an axis scaled in 1s. A category has 17 learners. Explain which graph would represent this value more clearly and why.', answer: 'The bar graph would represent 17 more clearly, because its axis is scaled in units of 1, so the bar can be drawn at exactly 17. On the pictograph, since each symbol equals 5, 17 would need 3 full symbols (15) plus 2 more, which is not a clean half symbol (a half symbol would only represent 2.5) — this makes it awkward to show an exact value like 17 using whole or half symbols.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A class collected data on the number of siblings each learner has: 0 siblings — 6 learners, 1 sibling — 12 learners, 2 siblings — 8 learners, 3 siblings — 4 learners. How many learners were surveyed in total?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: '6 + 12 + 8 + 4 = 30 ✓' },
        { difficulty: 'Medium', question: 'Using the siblings data (0: 6, 1: 12, 2: 8, 3: 4), what is the mode number of siblings?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 sibling'], explanation: '12 learners have 1 sibling — this is the highest frequency, so 1 sibling is the mode ✓' },
        { difficulty: 'Medium-Hard', question: 'Using the siblings data (0: 6, 1: 12, 2: 8, 3: 4, total 30), what fraction of learners have 2 or more siblings? Simplify if possible.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '12/30'], explanation: '2 siblings (8) + 3 siblings (4) = 12. 12/30 — divide both by 6 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'A pictograph shows a key of ⚽ = 4 goals. A team scored 22 goals. How many full symbols and half symbols should be drawn?', answer: '5 full symbols and a half symbol', checkMode: 'auto', correctAnswer: '5 full symbols and a half symbol', correctAnswers: ['5 full symbols and a half symbol', '5 and a half', '5.5', '5½'], explanation: '22 ÷ 4 = 5.5, so draw 5 full symbols (= 20 goals) and 1 half symbol (= 2 goals): 20 + 2 = 22 ✓' },
        { difficulty: 'Medium', question: 'A bar graph compares rainfall in two towns for one month: Town A 85mm, Town B 63mm. What is the difference in rainfall between the two towns?', answer: '22mm', checkMode: 'auto', correctAnswer: '22mm', correctAnswers: ['22mm', '22'], explanation: '85 − 63 = 22mm ✓' },
        { difficulty: 'Medium', question: 'Using the rainfall data (Town A 85mm, Town B 63mm), what is the combined total rainfall for both towns?', answer: '148mm', checkMode: 'auto', correctAnswer: '148mm', correctAnswers: ['148mm', '148'], explanation: '85 + 63 = 148mm ✓' },
        { difficulty: 'Medium-Hard', question: 'A survey of 45 learners shows 27 have a cellphone and the rest do not. What fraction do NOT have a cellphone? Simplify if possible.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '18/45'], explanation: 'Without a cellphone: 45 − 27 = 18. 18/45 — divide both by 9 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Using the cellphone data (27 have, 18 do not, total 45), what fraction of learners have a cellphone? Simplify if possible.', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '27/45'], explanation: '27 out of 45 have a cellphone. 27/45 — divide both by 9 → 3/5 ✓' },
        { difficulty: 'Hard', question: 'Look back at any set of data you have analysed in this topic. Write two full sentences that describe conclusions from that data, using specific numbers (not vague words like "a lot" or "not many").', answer: 'Answers will vary depending on the data chosen. A strong answer names the specific categories and numbers involved and makes a clear comparison — for example: "Blue was the most popular colour with 14 out of 30 learners choosing it. Green was the least popular, chosen by only 7 learners, which is 7 fewer than Blue." Check that your sentences use real numbers from the data and make a clear point.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can combine data-handling skills and reason clearly about results.' },
        { minScore: 19, message: 'Great work! Review any missed questions on fractions and comparisons.' },
        { minScore: 13, message: 'Good effort! Revisit the analysing and interpreting data section and try again.' },
        { minScore: 0, message: 'Keep going — read through the whole study guide again and retry this set.' },
      ],
    },
  ],
}
