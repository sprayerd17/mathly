import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// impossible         → red    (#dc2626)
// unlikely           → orange (#ea580c)
// equally likely     → yellow (#ca8a04)
// likely             → blue   (#2563eb)
// certain            → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROBABILITY SCALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-scale',
      title: 'Probability Scale',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Probability describes how likely an event is to happen. We use words like ${re('impossible')}, ${or('unlikely')}, ${ye('equally likely')}, ${bl('likely')} and ${gr('certain')}. On a scale from 0 to 1, <strong>0</strong> means impossible and <strong>1</strong> means certain. Events can be placed anywhere on this scale depending on how likely they are.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('impossible')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('unlikely')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('equally likely')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('likely')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('certain')}</span>` +
        `</div>` +

        // ── Probability scale visual ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability scale</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">` +
        `<span style="font-size:13px;font-weight:700;color:#dc2626;">0</span>` +
        `<span style="font-size:13px;font-weight:700;color:#ca8a04;">0.5</span>` +
        `<span style="font-size:13px;font-weight:700;color:#16a34a;">1</span>` +
        `</div>` +
        `<div style="height:12px;border-radius:6px;background:linear-gradient(to right,#dc2626,#ea580c,#ca8a04,#2563eb,#16a34a);margin-bottom:10px;"></div>` +
        `<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#dc2626;">Impossible</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ea580c;">Unlikely</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ca8a04;">Equally likely</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#2563eb;">Likely</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#16a34a;">Certain</span>` +
        `</div>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Impossible</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event can never happen. Probability = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Unlikely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event could happen but probably will not.</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fef08a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">Equally likely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event has the same chance of happening as not happening. Probability = 0.5.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Likely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event will probably happen but is not guaranteed.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Certain</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event will always happen. Probability = 1.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Sipho picks a card from a deck where every card is a heart. What is the probability of picking a heart?',
          answer: `This is ${gr('certain')} — probability = ${gr('1')}`,
          steps: [
            `Every card is a heart so it will always happen.`,
            `This is ${gr('certain')}, probability = ${gr('1')}.`,
          ],
        },
        {
          question: 'Lerato rolls a normal dice. What is the probability of rolling an 8?',
          answer: `This is ${re('impossible')} — probability = ${re('0')}`,
          steps: [
            `A dice only has 1 to 6, so rolling an 8 can never happen.`,
            `This is ${re('impossible')}, probability = ${re('0')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the probability scale from 0 to 1 with everyday examples of impossible unlikely equally likely likely and certain events" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Probability scale from 0 to 1 showing impossible red unlikely orange equally likely yellow likely blue and certain green positions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EXPERIMENTAL PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'experimental-probability',
      title: 'Experimental Probability',
      icon: '🪙',
      explanation:
        `<p style="margin-bottom:16px;">Another way to explore probability is to actually carry out an experiment — like flipping a coin, rolling a dice, or spinning a spinner — many times, and see what really happens. This is called ${gr('experimental probability')}. We record the result of every ${bl('trial')} using a ${or('tally')}, then count the ${or('tally')} marks to find the ${gr('frequency')} of each outcome.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('trials')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tally')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('frequency')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('experimental probability')}</span>` +
        `</div>` +

        // ── Steps of an experiment ───────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Carrying out a probability experiment</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1: List the outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Decide on the experiment and list the possible outcomes, e.g. Heads/Tails for a coin, or 1–6 for a dice.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Step 2: Repeat the trials</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Carry out repeated ${bl('trials')} — CAPS Grade 6 experiments usually use up to 50 — and record each result with a ${or('tally')} mark.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 3: Count the frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Count the ${or('tally')} marks for each outcome to find its ${gr('frequency')} — how many times it actually happened.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Step 4: Write the probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Experimental probability')} = ${gr('frequency')} of that outcome ÷ total number of ${bl('trials')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Worked demo tally/frequency table ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Recording trials with a tally</p>` +
        `<p style="margin-bottom:10px;color:#374151;font-size:14px;">Katlego flips a coin ${bl('20')} times and records every result as a ${or('tally')} mark:</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:13px;">` +
        `<thead><tr style="background:#f8fafc;">` +
        `<th style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;color:#0f1f3d;">Outcome</th>` +
        `<th style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;color:#0f1f3d;">Tally</th>` +
        `<th style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;color:#0f1f3d;">Frequency</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Heads</td><td style="border:1px solid #e2e8f0;padding:6px 10px;font-family:monospace;color:#ea580c;">${'∣∣∣∣ ∣∣∣∣ ∣∣'}</td><td style="border:1px solid #e2e8f0;padding:6px 10px;color:#16a34a;font-weight:700;">12</td></tr>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Tails</td><td style="border:1px solid #e2e8f0;padding:6px 10px;font-family:monospace;color:#ea580c;">${'∣∣∣∣ ∣∣∣'}</td><td style="border:1px solid #e2e8f0;padding:6px 10px;color:#16a34a;font-weight:700;">8</td></tr>` +
        `<tr style="background:#f8fafc;font-weight:700;"><td style="border:1px solid #e2e8f0;padding:6px 10px;">Total</td><td style="border:1px solid #e2e8f0;padding:6px 10px;"></td><td style="border:1px solid #e2e8f0;padding:6px 10px;color:#dc2626;">20</td></tr>` +
        `</tbody></table></div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">More trials tend to give more reliable results</p>` +
        `<p style="margin:0;color:#1e3a8a;">With only a few ${bl('trials')}, results can look quite different from what you might expect — that is normal. The more ${bl('trials')} you carry out, the more the ${re('experimental probability')} tends to settle down and give a more dependable picture of what actually happens.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Katlego flips a coin 20 times and records the results in the table above: Heads = 12, Tails = 8. Find the experimental probability of flipping heads.',
          answer: `P(heads) = ${re('12/20 = 3/5')}`,
          steps: [
            `Total number of ${bl('trials')} = ${bl('20')} flips.`,
            `${gr('Frequency')} of heads = ${or('12')}.`,
            `Experimental probability = ${gr('frequency')} ÷ ${bl('total trials')} = ${or('12')} ÷ ${bl('20')} = ${re('12/20')}.`,
            `Simplify: ${re('12/20 = 3/5')}.`,
            `<strong>Answer:</strong> P(heads) = ${re('3/5')}. ✓`,
          ],
        },
        {
          question: 'A group of learners rolls a dice and tallies how many times a 6 comes up. After 10 rolls, they have three 6s. After 50 rolls, they have nine 6s. Find the experimental probability of rolling a 6 after 10 rolls and after 50 rolls, and explain which result is more reliable.',
          answer: `After 10 rolls: ${re('3/10 = 0.3')}. After 50 rolls: ${re('9/50 = 0.18')}. The 50-roll result is more reliable.`,
          steps: [
            `After ${bl('10')} rolls: experimental probability = ${gr('frequency')} ÷ ${bl('trials')} = 3 ÷ 10 = ${re('3/10')} = 0.3.`,
            `After ${bl('50')} rolls: experimental probability = 9 ÷ 50 = ${re('9/50')} = 0.18.`,
            `With only ${bl('10')} trials, a few unusual results can swing the fraction a lot — 0.3 looks quite high for a dice.`,
            `With ${bl('50')} trials, there is more data, so the result tends to settle down and give a more dependable picture of what actually happens.`,
            `<strong>Answer:</strong> The experimental probability after 50 rolls (${re('9/50')} = 0.18) is the more reliable estimate, since it is based on more trials. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to carry out repeated trials of a coin, dice or spinner experiment, record results with a tally, calculate experimental frequency, and compare results from a small number of trials to a larger number of trials" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="A tally and frequency table for 20 coin flips showing heads and tails tally marks, their frequencies, and the total, alongside a comparison of experimental probability after 10 trials versus 50 trials" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-fraction',
      title: 'Probability as a Fraction',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">We write probability as a fraction — ${gr('favourable outcomes')} over ${bl('total outcomes')}. Probability = ${gr('number of ways the event can happen')} divided by ${bl('total number of possible outcomes')}. The probability is always between 0 and 1.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('favourable outcomes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('total outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('probability fraction')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('P(event)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;margin-left:8px;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:3px;">${gr('number of favourable outcomes')}</span><span style="display:block;padding-top:3px;">${bl('total number of possible outcomes')}</span></span></p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always simplify your fraction</p>` +
        `<p style="margin:0;color:#1e3a8a;">Once you have found the ${or('probability fraction')}, simplify it to its lowest terms using the HCF — just like simplifying any common fraction.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bag has 4 red balls and 6 blue balls. Find the probability of picking a red ball.',
          answer: `P(red) = ${or('2/5')}`,
          steps: [
            `${gr('Favourable outcomes')} = ${gr('4')} red balls.`,
            `${bl('Total outcomes')} = ${bl('10')} balls (4 red + 6 blue).`,
            `${or('Probability')} = ${gr('4')} ÷ ${bl('10')} = ${or('4/10')} = ${or('2/5')}.`,
          ],
        },
        {
          question: 'Amahle rolls a dice. Find the probability of rolling a number greater than 4.',
          answer: `P(greater than 4) = ${or('1/3')}`,
          steps: [
            `${gr('Favourable outcomes')}: numbers greater than 4 are 5 and 6 — that is ${gr('2')} outcomes.`,
            `${bl('Total outcomes')}: a dice has ${bl('6')} faces.`,
            `${or('Probability')} = ${gr('2')} ÷ ${bl('6')} = ${or('2/6')} = ${or('1/3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to write probability as a fraction using favourable outcomes over total outcomes with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a bag with 4 red and 6 blue balls labelling favourable outcomes green and total outcomes blue with the probability fraction orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Listing Outcomes',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">An ${bl('outcome')} is a possible result of an experiment. We list all possible ${bl('outcomes')} before calculating probability to avoid missing any. For combined events, like flipping a coin and rolling a dice, we multiply the number of ${bl('outcomes')} for each event to find the ${or('total')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('outcomes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('favourable outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total')}</span>` +
        `</div>` +

        // ── Combined events rule ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Combined events</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">${or('Total outcomes')} = number of ${bl('outcomes')} for Event 1 <strong>×</strong> number of ${bl('outcomes')} for Event 2.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always list outcomes first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Writing out all possible ${bl('outcomes')} helps you count the ${or('total')} accurately and spot which ones are ${gr('favourable')}. Never guess the total — always list or calculate it.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo flips a coin and rolls a dice. How many total outcomes are there?',
          answer: `${or('Total outcomes')} = ${or('12')}`,
          steps: [
            `${bl('Coin outcomes')}: heads or tails = ${bl('2')} outcomes.`,
            `${bl('Dice outcomes')}: 1, 2, 3, 4, 5, 6 = ${bl('6')} outcomes.`,
            `${or('Total outcomes')} = ${bl('2')} × ${bl('6')} = ${or('12')}.`,
          ],
        },
        {
          question: 'A spinner has 4 equal sections — red, blue, green, yellow. Find the probability of landing on red or yellow.',
          answer: `P(red or yellow) = ${or('1/2')}`,
          steps: [
            `List ${bl('outcomes')}: red, blue, green, yellow = ${or('4')} total.`,
            `${gr('Favourable outcomes')}: red or yellow = ${gr('2')}.`,
            `Probability = ${gr('2')} ÷ ${or('4')} = ${or('2/4')} = ${or('1/2')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all outcomes for single and combined events and use them to calculate probability" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a sample space table for flipping a coin and rolling a dice with all 12 outcomes listed outcomes blue favourable outcomes green total orange" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Probability Scale & Language (0-3, Easy) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'Which word describes an event that is not certain but has a good chance of happening?', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: 'An event that has a good chance of happening, but is not guaranteed, is described as likely ✓' },
        { difficulty: 'Easy', question: 'Zanele buys a ticket in a raffle where 999 out of 1 000 tickets are losing tickets. Using the probability scale shown, which word best describes her chance of winning?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Only 1 out of 1 000 tickets wins, which is a very small chance. This is unlikely (it could happen, but almost certainly will not) ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Order these events from least likely to most likely: (A) rolling a 1 on a normal dice, (B) flipping heads on a coin, (C) picking a red ball from a bag of 8 red balls and 2 blue balls.', checkMode: 'auto', correctAnswer: 'A, B, C', correctAnswers: ['A, B, C', 'A,B,C', 'ABC'], explanation: 'A: 1/6 ≈ 0.17.\nB: 1/2 = 0.5.\nC: 8/10 = 0.8.\nOrder from least to most likely: A, B, C ✓' },
        { difficulty: 'Easy', question: 'A spinner is divided into 6 equal sections. 1 section is blue and 5 sections are white. Using the probability scale shown, where would landing on blue fall (impossible, unlikely, equally likely, likely, certain)?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Only 1 out of 6 sections is blue, a small fraction of the spinner (1/6 ≈ 0.17). This is unlikely ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Block 2 — Probability as a Fraction — Single Events (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy-Medium', question: 'A bag contains 7 red counters, 5 blue counters and 8 green counters, as shown. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20'], explanation: 'Favourable outcomes = 7 red counters.\nTotal outcomes = 7 + 5 + 8 = 20 counters.\nP(red) = 7/20 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="94" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="94" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="116" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="116" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'A normal dice numbered 1 to 6 is rolled. Find the probability of rolling an even number.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'Even numbers from 1-6: 2, 4, 6 — that is 3 favourable outcomes.\nTotal outcomes on a dice = 6.\nP(even) = 3/6 = 1/2 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections numbered 1 to 12. Find the probability of landing on a multiple of 5.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], explanation: 'Multiples of 5 from 1-12: 5, 10 — that is 2 favourable outcomes.\nTotal sections = 12.\nP(multiple of 5) = 2/12 = 1/6 ✓' },
        { difficulty: 'Medium', question: 'A school raffle sells 180 tickets. Zola buys 3 of the tickets, and only 1 ticket in total will win the main prize. Find the probability that Zola wins the main prize.', checkMode: 'auto', correctAnswer: '1/60', correctAnswers: ['1/60', '3/180'], explanation: 'Favourable outcomes = 3 tickets that Zola holds.\nTotal outcomes = 180 tickets.\nP(Zola wins) = 3/180 = 1/60 ✓' },
        { difficulty: 'Medium', question: 'A jar has 24 sweets in total, and 9 of them are NOT lemon flavoured (the rest are lemon). Palesa picks one sweet without looking. Find the probability that she picks a lemon flavoured sweet.', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '15/24'], explanation: 'Lemon sweets = 24 − 9 = 15.\nFavourable outcomes = 15 lemon sweets.\nP(lemon) = 15/24 = 5/8 ✓' },

        // Block 3 — Listing Outcomes & Sample Spaces (9-13, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'List all the possible outcomes when a coin is flipped and a spinner with 5 equal sections labelled P, Q, R, S, T is spun. The empty grid shown has coin outcomes down the side and spinner outcomes across the top — use it to help you list every pair.', checkMode: 'auto', correctAnswer: 'HP, HQ, HR, HS, HT, TP, TQ, TR, TS, TT', correctAnswers: ['HP, HQ, HR, HS, HT, TP, TQ, TR, TS, TT', 'HP,HQ,HR,HS,HT,TP,TQ,TR,TS,TT', 'HP HQ HR HS HT TP TQ TR TS TT'], explanation: 'Coin outcomes: H (heads), T (tails).\nSpinner outcomes: P, Q, R, S, T.\nPair each coin outcome with each spinner outcome: HP, HQ, HR, HS, HT, TP, TQ, TR, TS, TT — that is 10 outcomes ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82" y1="82" x2="82" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112" y1="82" x2="112" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142" y1="82" x2="142" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172" y1="82" x2="172" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><text x="97" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Q</text><text x="127" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="157" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text><text x="187" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text><text x="35" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'A takeaway shop offers 3 different starters and 5 different main meals. If Musa picks one starter and one main meal, how many different combinations are possible?', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Starter outcomes = 3.\nMain meal outcomes = 5.\nTotal combinations = 3 × 5 = 15 ✓' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 9.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 9: (3,6), (4,5), (5,4), (6,3) — that is 4 favourable outcomes.\nP(sum of 9) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium', question: 'A student lists the outcomes for picking a T-shirt colour (red, blue or green) and a size (small or medium) as: red-small, red-medium, blue-small, blue-medium. Explain what is missing from this list, and give the total number of correct outcomes.', checkMode: 'self', answer: 'The student is missing the two combinations with green: green-small and green-medium. The full list should be red-small, red-medium, blue-small, blue-medium, green-small, green-medium — that is 6 outcomes (3 colours × 2 sizes = 6), not 4.' },
        { difficulty: 'Medium', question: 'Vusi flips a coin twice and claims that getting "tails then heads" (TH) is the same outcome as "heads then tails" (HT), so only one of them needs to appear in the sample space. Is Vusi correct? Explain.', checkMode: 'self', answer: 'No, Vusi is not correct. The order in which the coin lands matters, so TH and HT are two different, distinct outcomes. Both must be listed separately in the sample space, giving 4 total outcomes: HH, HT, TH, TT — not 3.' },

        // Block 4 — Comparing, Justifying & Multi-Step Probability (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A box of pens contains 12 pens: 4 are blue, 4 are black, and 4 are red. Themba picks one pen at random. Find the probability that it is NOT blue, and state where this falls on the probability scale.', checkMode: 'auto', correctAnswer: '2/3, likely', correctAnswers: ['2/3, likely', '2/3 likely', 'likely, 2/3', '8/12, likely'], explanation: 'Not blue = black or red = 4 + 4 = 8 favourable outcomes.\nTotal pens = 12.\nP(not blue) = 8/12 = 2/3.\nSince 2/3 is closer to 1 (certain) than to 0.5 (equally likely), this is likely ✓' },
        { difficulty: 'Medium-Hard', question: 'Class A has 16 learners out of 25 who wear a watch. Class B has 15 learners out of 24 who wear a watch. Which class has a greater proportion of learners who wear a watch? Show your working for both classes and justify your answer.', checkMode: 'self', answer: 'Class A: P(wears a watch) = 16/25 = 0.64. Class B: P(wears a watch) = 15/24 = 5/8 = 0.625. Since 0.64 is greater than 0.625, Class A has a greater proportion of learners who wear a watch.' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 8 equal sections, and 1 section is described as "unlikely" to be landed on by a class discussing the probability scale. If only 1 section out of the 8 fits this description, write the probability of landing on that section as a fraction, and explain why "unlikely" is an appropriate word for it.', checkMode: 'self', answer: 'The probability is 1/8 = 0.125. This is appropriate to describe as unlikely because 1/8 is a small fraction, much closer to 0 (impossible) than to 0.5 (equally likely) — the event could happen, but it probably will not, which matches the meaning of "unlikely".' },

        // Block 5 — Experimental vs Theoretical Probability & Independent Events (17-19, Hard)
        { difficulty: 'Hard', question: 'A dice is suspected of being unfair. Bongiwe rolls it 60 times and records a 6 on 18 of those rolls. A classmate says this proves the theoretical probability of rolling a 6 with this dice is exactly 18/60. Is the classmate correct? Explain the difference between experimental and theoretical probability.', checkMode: 'self', answer: 'No, the classmate is not correct. 18/60 = 3/10 is the experimental probability — it describes only what happened in this particular set of 60 rolls. The theoretical probability of rolling a 6 on a normal, fair dice is always 1/6, based on there being 6 equally likely outcomes. A result like 18/60 being higher than the expected 1/6 (which would be 10/60) might suggest the dice could be unfair, but a single experiment cannot prove this for certain — more trials would be needed to investigate further.' },
        { difficulty: 'Hard', question: 'A bag has 3 red counters and 7 blue counters. Kabelo picks a counter, records its colour, puts it back in the bag, and picks again. Find the probability that he picks a red counter both times.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'P(red) each time = 3/10, since the counter is replaced (independent events).\nP(red both times) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'A carnival spinner has 8 equal sections: 1 "win a prize" section and 7 "no prize" sections. Aviwe spins it 80 times and lands on the "win a prize" section 9 times. First find her experimental probability of winning a prize and the theoretical probability, then find the probability that if she were to spin twice more (with the spinner unchanged), she wins a prize both times.', checkMode: 'self', answer: 'Experimental probability = 9/80 = 0.1125. Theoretical probability = 1/8 = 0.125 (since 1 out of 8 equal sections wins a prize) — the experimental result (0.1125) is close to the theoretical result (0.125), showing that with enough trials, experimental probability tends to get close to theoretical probability. For two more spins (independent events, since the spinner is unchanged each time), use the theoretical probability: 1/8 × 1/8 = 1/64.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the probability scale, fractions, sample spaces and experimental probability.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability scale and fraction formula, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Probability Scale & Language (0-3, Easy) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'Which word describes an event that could happen but probably will not?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'An event that could happen but probably will not is described as unlikely ✓' },
        { difficulty: 'Easy', question: 'A vending machine has 1 broken button out of 20 buttons that all look identical. Sibongile presses a random button. Using the probability scale shown, which word best describes her chance of pressing the broken one?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Only 1 out of 20 buttons is broken, a small chance (1/20 = 0.05). This is unlikely ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Order these events from least likely to most likely: (A) rolling a number less than 3 on a normal dice, (B) flipping tails on a coin, (C) picking a red ball from a bag of 1 red ball and 19 blue balls.', checkMode: 'auto', correctAnswer: 'C, A, B', correctAnswers: ['C, A, B', 'C,A,B', 'CAB'], explanation: 'C: 1/20 = 0.05.\nA: 2/6 = 1/3 ≈ 0.33.\nB: 1/2 = 0.5.\nOrder from least to most likely: C, A, B ✓' },
        { difficulty: 'Easy', question: 'A spinner is divided into 4 equal sections. 3 sections are orange and 1 section is grey. Using the probability scale shown, where would landing on orange fall (impossible, unlikely, equally likely, likely, certain)?', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: '3 out of 4 sections are orange (3/4 = 0.75), more than half but not all of the spinner. This is likely ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Block 2 — Probability as a Fraction — Single Events (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy-Medium', question: 'A bag contains 9 red counters and 6 blue counters, as shown. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '9/15'], explanation: 'Favourable outcomes = 9 red counters.\nTotal outcomes = 9 + 6 = 15 counters.\nP(red) = 9/15 = 3/5 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'A normal dice numbered 1 to 6 is rolled. Find the probability of rolling an odd number.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'Odd numbers from 1-6: 1, 3, 5 — that is 3 favourable outcomes.\nTotal outcomes on a dice = 6.\nP(odd) = 3/6 = 1/2 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 10 equal sections numbered 1 to 10. Find the probability of landing on a factor of 10.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: 'Factors of 10 from 1-10: 1, 2, 5, 10 — that is 4 favourable outcomes.\nTotal sections = 10.\nP(factor of 10) = 4/10 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'A school raffle sells 300 tickets. Palesa buys 5 of the tickets, and only 1 ticket in total will win the main prize. Find the probability that Palesa wins the main prize.', checkMode: 'auto', correctAnswer: '1/60', correctAnswers: ['1/60', '5/300'], explanation: 'Favourable outcomes = 5 tickets that Palesa holds.\nTotal outcomes = 300 tickets.\nP(Palesa wins) = 5/300 = 1/60 ✓' },
        { difficulty: 'Medium', question: 'A jar has 30 sweets in total, and 11 of them are mint flavoured. Andile picks one sweet without looking. Find the probability that he picks a mint flavoured sweet.', checkMode: 'auto', correctAnswer: '11/30', correctAnswers: ['11/30'], explanation: 'Favourable outcomes = 11 mint sweets.\nTotal outcomes = 30 sweets.\nP(mint) = 11/30 ✓' },

        // Block 3 — Listing Outcomes & Sample Spaces (9-13, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'List all the possible outcomes when a coin is flipped and a normal dice numbered 1 to 6 is rolled. The empty grid shown has coin outcomes down the side and dice outcomes across the top — use it to help you list every pair.', checkMode: 'auto', correctAnswer: 'H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6', correctAnswers: ['H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6', 'H1,H2,H3,H4,H5,H6,T1,T2,T3,T4,T5,T6', 'H1 H2 H3 H4 H5 H6 T1 T2 T3 T4 T5 T6'], explanation: 'Coin outcomes: H (heads), T (tails).\nDice outcomes: 1, 2, 3, 4, 5, 6.\nPair each coin outcome with each dice outcome: H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6 — that is 12 outcomes ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="48" width="200" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="10" y1="82" x2="210" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="44" y1="48" x2="44" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="72" y1="82" x2="72" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="99" y1="82" x2="99" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127" y1="82" x2="127" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="82" x2="155" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="182" y1="82" x2="182" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="10" y1="112" x2="210" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="58" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="86" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="113" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="141" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="169" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="196" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6</text><text x="27" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="27" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'A café offers 4 different drinks and 3 different cup sizes. If Owami picks one drink and one cup size, how many different combinations are possible?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Drink outcomes = 4.\nCup size outcomes = 3.\nTotal combinations = 4 × 3 = 12 ✓' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 8.', checkMode: 'auto', correctAnswer: '5/36', correctAnswers: ['5/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 8: (2,6), (3,5), (4,4), (5,3), (6,2) — that is 5 favourable outcomes.\nP(sum of 8) = 5/36 ✓' },
        { difficulty: 'Medium', question: 'A student lists the outcomes for picking a topping (cheese or ham) and a bread type (white, brown or rye) as: cheese-white, cheese-brown, ham-white, ham-brown. Explain what is missing from this list, and give the total number of correct outcomes.', checkMode: 'self', answer: 'The student is missing the two combinations with rye: cheese-rye and ham-rye. The full list should be cheese-white, cheese-brown, cheese-rye, ham-white, ham-brown, ham-rye — that is 6 outcomes (2 toppings × 3 bread types = 6), not 4.' },
        { difficulty: 'Medium', question: 'Lindiwe rolls a dice twice and claims that getting "a 3 then a 5" is the same outcome as "a 5 then a 3", so only one of them needs to appear in the sample space. Is Lindiwe correct? Explain.', checkMode: 'self', answer: 'No, Lindiwe is not correct. The order in which the numbers are rolled matters, so "3 then 5" and "5 then 3" are two different, distinct outcomes. Treating them as the same outcome would undercount the sample space — for two dice rolls there are 6 × 6 = 36 total ordered outcomes, and each combination of different numbers appears twice (once in each order).' },

        // Block 4 — Comparing, Justifying & Multi-Step Probability (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A box of badges contains 16 badges: 6 are star-shaped, 6 are heart-shaped, and 4 are circle-shaped. Anele picks one badge at random. Find the probability that it is NOT star-shaped, and state where this falls on the probability scale.', checkMode: 'auto', correctAnswer: '5/8, likely', correctAnswers: ['5/8, likely', '5/8 likely', 'likely, 5/8', '10/16, likely'], explanation: 'Not star = heart or circle = 6 + 4 = 10 favourable outcomes.\nTotal badges = 16.\nP(not star) = 10/16 = 5/8.\nSince 5/8 = 0.625 is closer to 1 (certain) than to 0.5 (equally likely), this is likely ✓' },
        { difficulty: 'Medium-Hard', question: 'A bag has 6 yellow counters and 2 purple counters. Zola says "there are only two possible colours, so picking purple must have a probability of 1/2." Is Zola\'s reasoning correct? Explain using this bag as an example.', checkMode: 'self', answer: 'No, Zola\'s reasoning is incorrect. Having only two possible outcomes does not mean they are equally likely. In this bag, there are 6 yellow counters and 2 purple counters out of 8 total, so P(purple) = 2/8 = 1/4, not 1/2. The probability depends on how many of each colour are actually in the bag, not just on how many different colours exist.' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 6 equal sections, and 5 of them are described as "likely" to be landed on by a class discussing the probability scale. Write the probability of landing on one of those 5 sections as a fraction, and explain why "likely" is an appropriate word for it.', checkMode: 'self', answer: 'The probability is 5/6 ≈ 0.83. This is appropriate to describe as likely because 5/6 is a large fraction, much closer to 1 (certain) than to 0.5 (equally likely) — the event will probably happen, but it is not guaranteed since 1 section is not part of the favourable group, which matches the meaning of "likely".' },

        // Block 5 — Experimental vs Theoretical Probability & Independent Events (17-19, Hard)
        { difficulty: 'Hard', question: 'A coin is suspected of being unfair. Thabang flips it 50 times and records heads on 32 of those flips. A classmate says this proves the theoretical probability of flipping heads with this coin is exactly 32/50. Is the classmate correct? Explain the difference between experimental and theoretical probability.', checkMode: 'self', answer: 'No, the classmate is not correct. 32/50 = 16/25 is the experimental probability — it describes only what happened in this particular set of 50 flips. The theoretical probability of flipping heads on a normal, fair coin is always 1/2, based on there being 2 equally likely outcomes. A result like 32/50 being higher than the expected 1/2 (which would be 25/50) might suggest the coin could be unfair, but a single experiment cannot prove this for certain — more trials would be needed to investigate further.' },
        { difficulty: 'Hard', question: 'A bag has 4 red counters and 6 blue counters. Karabo picks a counter, records its colour, puts it back in the bag, and picks again. Find the probability that she picks a red counter both times.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25'], explanation: 'P(red) each time = 4/10 = 2/5, since the counter is replaced (independent events).\nP(red both times) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'A carnival spinner has 10 equal sections: 1 "win a prize" section and 9 "no prize" sections. Nomsa spins it 100 times and lands on the "win a prize" section 14 times. First find her experimental probability of winning a prize and the theoretical probability, then find the probability that if she were to spin twice more (with the spinner unchanged), she wins a prize both times.', checkMode: 'self', answer: 'Experimental probability = 14/100 = 0.14. Theoretical probability = 1/10 = 0.1 (since 1 out of 10 equal sections wins a prize) — the experimental result (0.14) is reasonably close to the theoretical result (0.1). For two more spins (independent events, since the spinner is unchanged each time), use the theoretical probability: 1/10 × 1/10 = 1/100.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the probability scale, fractions, sample spaces and experimental probability.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability scale and fraction formula, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Probability Scale & Language (0-3, Easy) — DIAGRAM-FLAGGED
        { difficulty: 'Easy', question: 'Which word describes an event that has a very good chance of happening, but is not 100% guaranteed?', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: 'An event that has a very good chance of happening, but is not fully guaranteed, is described as likely ✓' },
        { difficulty: 'Easy', question: 'A number cube is labelled with the number 4 on all 6 faces. Delani rolls it once. Using the probability scale shown, which word describes the probability that he rolls a 4?', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Since every face shows a 4, rolling a 4 will always happen. This is certain ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Order these events from least likely to most likely: (A) picking a blue ball from a bag of 15 red balls and 1 blue ball, (B) rolling a 6 on a normal dice, (C) flipping heads on a coin.', checkMode: 'auto', correctAnswer: 'A, B, C', correctAnswers: ['A, B, C', 'A,B,C', 'ABC'], explanation: 'A: 1/16 = 0.0625.\nB: 1/6 ≈ 0.167.\nC: 1/2 = 0.5.\nOrder from least to most likely: A, B, C ✓' },
        { difficulty: 'Easy', question: 'A spinner is divided into 5 equal sections, and all 5 sections are coloured blue. Using the probability scale shown, where would landing on red fall (impossible, unlikely, equally likely, likely, certain)?', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'None of the 5 sections are red, so landing on red can never happen. This is impossible ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0.5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Impossible</text><text x="65" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Unlikely</text><text x="110" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Equally</text><text x="110" y="43" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">likely</text><text x="155" y="45" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Likely</text><text x="200" y="30" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Certain</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Block 2 — Probability as a Fraction — Single Events (4-8, Easy-Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Easy-Medium', question: 'A bag contains 3 red counters and 9 blue counters, as shown. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], explanation: 'Favourable outcomes = 3 red counters.\nTotal outcomes = 3 + 9 = 12 counters.\nP(red) = 3/12 = 1/4 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="83" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="83" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="97" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="123" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'A normal dice numbered 1 to 6 is rolled. Find the probability of rolling a number greater than 2.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '4/6'], explanation: 'Numbers greater than 2 from 1-6: 3, 4, 5, 6 — that is 4 favourable outcomes.\nTotal outcomes on a dice = 6.\nP(greater than 2) = 4/6 = 2/3 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 20 equal sections numbered 1 to 20. Find the probability of landing on a multiple of 4.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '5/20'], explanation: 'Multiples of 4 from 1-20: 4, 8, 12, 16, 20 — that is 5 favourable outcomes.\nTotal sections = 20.\nP(multiple of 4) = 5/20 = 1/4 ✓' },
        { difficulty: 'Medium', question: 'A school raffle sells 400 tickets. Kagiso buys 8 of the tickets, and only 1 ticket in total will win the main prize. Find the probability that Kagiso wins the main prize.', checkMode: 'auto', correctAnswer: '1/50', correctAnswers: ['1/50', '8/400'], explanation: 'Favourable outcomes = 8 tickets that Kagiso holds.\nTotal outcomes = 400 tickets.\nP(Kagiso wins) = 8/400 = 1/50 ✓' },
        { difficulty: 'Medium', question: 'A jar has 40 sweets in total, and 14 of them are toffee flavoured. Nomvula picks one sweet without looking. Find the probability that she picks a toffee flavoured sweet.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '14/40'], explanation: 'Favourable outcomes = 14 toffee sweets.\nTotal outcomes = 40 sweets.\nP(toffee) = 14/40 = 7/20 ✓' },

        // Block 3 — Listing Outcomes & Sample Spaces (9-13, Medium) — DIAGRAM-FLAGGED
        { difficulty: 'Medium', question: 'List all the possible outcomes when a coin is flipped and a spinner with 4 equal sections labelled red, blue, green, yellow is spun. The empty grid shown has coin outcomes down the side and spinner outcomes (R=red, B=blue, G=green, Y=yellow) across the top — use it to help you list every pair.', checkMode: 'auto', correctAnswer: 'H-red, H-blue, H-green, H-yellow, T-red, T-blue, T-green, T-yellow', correctAnswers: ['H-red, H-blue, H-green, H-yellow, T-red, T-blue, T-green, T-yellow', 'Hred,Hblue,Hgreen,Hyellow,Tred,Tblue,Tgreen,Tyellow', 'H-red H-blue H-green H-yellow T-red T-blue T-green T-yellow'], explanation: 'Coin outcomes: H (heads), T (tails).\nSpinner outcomes: red, blue, green, yellow.\nPair each coin outcome with each spinner outcome: H-red, H-blue, H-green, H-yellow, T-red, T-blue, T-green, T-yellow — that is 8 outcomes ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="33" y="48" width="154" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="33" y1="82" x2="187" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="67" y1="48" x2="67" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="97" y1="82" x2="97" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127" y1="82" x2="127" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="157" y1="82" x2="157" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="33" y1="112" x2="187" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="82" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="112" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><text x="142" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">G</text><text x="172" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><text x="50" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="50" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'A pasta restaurant offers 5 different sauces and 2 different pasta shapes. If Zinhle picks one sauce and one pasta shape, how many different combinations are possible?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'Sauce outcomes = 5.\nPasta shape outcomes = 2.\nTotal combinations = 5 × 2 = 10 ✓' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 10.', checkMode: 'auto', correctAnswer: '1/12', correctAnswers: ['1/12', '3/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 10: (4,6), (5,5), (6,4) — that is 3 favourable outcomes.\nP(sum of 10) = 3/36 = 1/12 ✓' },
        { difficulty: 'Medium', question: 'A student lists the outcomes for picking a size (small, medium or large) and a colour (red or blue) as: small-red, small-blue, medium-red, medium-blue, large-red. Explain what is missing from this list, and give the total number of correct outcomes.', checkMode: 'self', answer: 'The student is missing the combination large-blue. The full list should be small-red, small-blue, medium-red, medium-blue, large-red, large-blue — that is 6 outcomes (3 sizes × 2 colours = 6), not 5.' },
        { difficulty: 'Medium', question: 'Sipho spins a spinner labelled A, B, C twice and claims that "A then B" is the same outcome as "B then A", so only one of them needs to appear in the sample space. Is Sipho correct? Explain.', checkMode: 'self', answer: 'No, Sipho is not correct. The order in which the spinner lands on each spin matters, so "A then B" and "B then A" are two different, distinct outcomes. Every different order must be listed separately in the sample space — for 2 spins of a 3-section spinner there are 3 × 3 = 9 total outcomes, and treating "A then B" the same as "B then A" would undercount them.' },

        // Block 4 — Comparing, Justifying & Multi-Step Probability (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A packet of stickers contains 18 stickers: 6 are star-shaped, 6 are moon-shaped, and 6 are sun-shaped. Ntando picks one sticker at random. Find the probability that it is NOT star-shaped, and state where this falls on the probability scale.', checkMode: 'auto', correctAnswer: '2/3, likely', correctAnswers: ['2/3, likely', '2/3 likely', 'likely, 2/3', '12/18, likely'], explanation: 'Not star = moon or sun = 6 + 6 = 12 favourable outcomes.\nTotal stickers = 18.\nP(not star) = 12/18 = 2/3.\nSince 2/3 is closer to 1 (certain) than to 0.5 (equally likely), this is likely ✓' },
        { difficulty: 'Medium-Hard', question: 'Class A has 9 learners out of 30 who play a musical instrument. Class B has 14 learners out of 40 who play a musical instrument. Which class has a greater proportion of learners who play a musical instrument? Show your working for both classes and justify your answer.', checkMode: 'self', answer: 'Class A: P(plays an instrument) = 9/30 = 3/10 = 0.3. Class B: P(plays an instrument) = 14/40 = 7/20 = 0.35. Since 0.35 is greater than 0.3, Class B has a greater proportion of learners who play a musical instrument.' },
        { difficulty: 'Medium-Hard', question: 'A bag contains only green counters — every single counter inside it is green. Write the probability of picking a green counter as a fraction, and explain why "certain" is the appropriate word for this event.', checkMode: 'self', answer: 'The probability is 1 (it can be written as a fraction such as 10/10 if there are 10 counters, but it always simplifies to 1). This is appropriate to describe as certain because every possible outcome (every counter in the bag) is green, so picking a green counter must happen every time — there is no other possible result, and a probability of 1 always means certain.' },

        // Block 5 — Experimental vs Theoretical Probability & Independent Events (17-19, Hard)
        { difficulty: 'Hard', question: 'A spinner is suspected of being unfair. Refilwe spins it 40 times and records landing on "red" 18 times, out of the spinner\'s 4 equal sections. A classmate says this proves the theoretical probability of landing on red with this spinner is exactly 18/40. Is the classmate correct? Explain the difference between experimental and theoretical probability.', checkMode: 'self', answer: 'No, the classmate is not correct. 18/40 = 9/20 is the experimental probability — it describes only what happened in this particular set of 40 spins. The theoretical probability of landing on red on a fair spinner with 4 equal sections is always 1/4, based on there being 4 equally likely outcomes. A result like 18/40 = 0.45 being much higher than the expected 1/4 = 0.25 might suggest the spinner could be unfair, but a single experiment cannot prove this for certain — more trials would be needed to investigate further.' },
        { difficulty: 'Hard', question: 'A bag has 5 red counters and 5 blue counters. Lerato picks a counter, records its colour, puts it back in the bag, and picks again. Find the probability that she picks a blue counter both times.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'P(blue) each time = 5/10 = 1/2, since the counter is replaced (independent events).\nP(blue both times) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'A carnival spinner has 6 equal sections: 1 "win a prize" section and 5 "no prize" sections. Sindisiwe spins it 90 times and lands on the "win a prize" section 14 times. First find her experimental probability of winning a prize and the theoretical probability, then find the probability that if she were to spin twice more (with the spinner unchanged), she wins a prize both times.', checkMode: 'self', answer: 'Experimental probability = 14/90 = 7/45 ≈ 0.156. Theoretical probability = 1/6 ≈ 0.167 (since 1 out of 6 equal sections wins a prize) — the experimental result (about 0.156) is reasonably close to the theoretical result (about 0.167). For two more spins (independent events, since the spinner is unchanged each time), use the theoretical probability: 1/6 × 1/6 = 1/36.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the probability scale, fractions, sample spaces and experimental probability.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability scale and fraction formula, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What word describes an event that will never happen?',
      answer: 'impossible',
      checkMode: 'auto',
      correctAnswer: 'impossible',
      explanation: 'An event that will never happen has a probability of 0 and is described as impossible.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What word describes an event that will always happen?',
      answer: 'certain',
      checkMode: 'auto',
      correctAnswer: 'certain',
      explanation: 'An event that will always happen has a probability of 1 and is described as certain.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho rolls a dice. Place rolling an even number on the probability scale.',
      answer: 'Equally likely — 3 out of 6 outcomes are even, which is exactly half.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A bag has 3 red and 7 blue balls. Find the probability of picking red.',
      answer: '3/10',
      checkMode: 'auto',
      correctAnswer: '3/10',
      explanation: 'Favourable outcomes = 3 red balls.\nTotal outcomes = 3 + 7 = 10 balls.\nP(red) = 3/10 ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A dice is rolled. Find the probability of rolling a number less than 3.',
      answer: '1/3',
      checkMode: 'auto',
      correctAnswer: '1/3',
      correctAnswers: ['1/3', '2/6'],
      explanation: 'Numbers less than 3: 1 and 2 — that is 2 favourable outcomes.\nTotal outcomes on a dice = 6.\nP(less than 3) = 2/6 = 1/3 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says the probability of flipping heads on a coin is 1/3. Is she correct? Explain.',
      answer: 'No — a coin has only 2 outcomes (heads or tails), so the probability of heads is 1/2 not 1/3.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A spinner has 5 equal sections numbered 1 to 5. Find the probability of landing on an odd number.',
      answer: '3/5',
      checkMode: 'auto',
      correctAnswer: '3/5',
      explanation: 'Odd numbers from 1 to 5: 1, 3, 5 — that is 3 favourable outcomes.\nTotal sections = 5.\nP(odd) = 3/5 ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle flips a coin and spins a 3-section spinner. How many total outcomes are there?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Coin outcomes: heads or tails = 2.\nSpinner outcomes = 3.\nTotal outcomes = 2 × 3 = 6 ✓',
    },

    // ── Q9 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'List all possible outcomes when rolling a normal dice.',
      answer: '1,2,3,4,5,6',
      checkMode: 'auto',
      correctAnswer: '1,2,3,4,5,6',
      correctAnswers: ['1,2,3,4,5,6', '1, 2, 3, 4, 5, 6', '1 2 3 4 5 6'],
      explanation: 'A normal dice has 6 faces numbered 1 to 6.\nAll possible outcomes: 1, 2, 3, 4, 5, 6 ✓',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 5 green, 3 yellow and 2 red counters. Find the probability of picking a counter that is not red.',
      answer: '4/5',
      checkMode: 'auto',
      correctAnswer: '4/5',
      correctAnswers: ['4/5', '8/10'],
      explanation: 'Not red = green or yellow = 5 + 3 = 8 favourable outcomes.\nTotal counters = 5 + 3 + 2 = 10.\nP(not red) = 8/10 = 4/5 ✓',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo flips a coin 20 times and gets heads 8 times. What is the experimental probability of heads, and how does it compare to the theoretical probability?',
      answer: 'Experimental = 8/20 = 2/5. Theoretical = 1/2. The experimental result is lower than expected but this can happen with a small number of trials.',
      checkMode: 'self',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A bag has 6 red and 4 blue marbles. If Sipho picks one, replaces it, and picks again, what is the probability he picks red both times?',
      answer: 'Probability of red each time = 6/10 = 3/5. Since he replaces it, multiply: 3/5 × 3/5 = 9/25.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have completed all of Grade 6 and mastered probability.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
