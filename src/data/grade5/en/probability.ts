import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability likelihood levels) ───────────────────────────
// impossible     → red    (#dc2626)
// unlikely       → orange (#ea580c)
// equally likely → yellow (#ca8a04)
// likely         → blue   (#2563eb)
// certain        → green  (#16a34a)
const im = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const un = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const eq = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const li = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const ce = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-probability',
      title: 'Understanding Probability',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Probability tells us <strong>how likely it is that something will happen</strong>. We describe probability using words — ${im('impossible')}, ${un('unlikely')}, ${eq('equally likely')}, ${li('likely')} and ${ce('certain')}. Something is ${im('impossible')} if it can never happen. Something is ${ce('certain')} if it will always happen. Something is ${eq('equally likely')} if it has the same chance of happening as not happening. We can show probability on a <strong>scale from 0 to 1</strong> where 0 means impossible and 1 means certain.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${im('impossible')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('unlikely')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fde047;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('equally likely')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('likely')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('certain')}</span>` +
        `</div>` +

        // ── Probability scale ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability scale</p>` +
        `<div style="margin-bottom:20px;padding:16px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;">` +
        `<div style="display:flex;align-items:center;margin-bottom:10px;">` +
        `<div style="flex:1;height:16px;background:linear-gradient(to right,#dc2626,#ea580c,#ca8a04,#2563eb,#16a34a);border-radius:8px;"></div>` +
        `</div>` +
        `<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;">` +
        `<span style="color:#dc2626;">0<br>${im('impossible')}</span>` +
        `<span style="color:#ea580c;text-align:center;">${un('unlikely')}</span>` +
        `<span style="color:#ca8a04;text-align:center;">½<br>${eq('equally likely')}</span>` +
        `<span style="color:#2563eb;text-align:center;">${li('likely')}</span>` +
        `<span style="color:#16a34a;text-align:right;">1<br>${ce('certain')}</span>` +
        `</div>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Impossible</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Something that can <strong>never</strong> happen. Probability = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Unlikely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Something that <strong>could</strong> happen but probably will not. Probability is between 0 and ½.</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde047;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">Equally likely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The same chance of happening as <strong>not</strong> happening. Probability = ½.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Likely</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Something that will <strong>probably</strong> happen. Probability is between ½ and 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Certain</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Something that will <strong>always</strong> happen. Probability = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember the scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">${im('Impossible')} events have a probability of <strong>0</strong>. ${ce('Certain')} events have a probability of <strong>1</strong>. Everything else falls somewhere in between — the closer to 1, the more likely it is to happen.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho rolls a normal dice with numbers 1 to 6. Describe the probability of rolling a 7.',
          answer: `Rolling a 7 is ${im('impossible')} — the probability is 0`,
          steps: [
            `A normal dice only has the numbers 1 to 6.`,
            `The number 7 does not appear on the dice.`,
            `It is ${im('impossible')} to roll a 7.`,
            `The probability is <strong>0</strong>.`,
          ],
        },
        {
          question: 'Lerato picks a card from a bag containing only red cards. Describe the probability of picking a red card.',
          answer: `Picking a red card is ${ce('certain')} — the probability is 1`,
          steps: [
            `Every card in the bag is red.`,
            `No matter which card she picks it will always be red.`,
            `It is ${ce('certain')} she will pick a red card.`,
            `The probability is <strong>1</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — impossible ─────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What word describes the probability of something that will never happen?',
          answer: 'impossible',
          checkMode: 'auto',
          correctAnswer: 'impossible',
          explanation: 'Something that will never happen has a probability of 0. We describe this as impossible.',
        },

        // ── Q2 Easy — certain ────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What word describes the probability of something that will always happen?',
          answer: 'certain',
          checkMode: 'auto',
          correctAnswer: 'certain',
          explanation: 'Something that will always happen has a probability of 1. We describe this as certain.',
        },

        // ── Q3 Medium — probability scale ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Place these events on a probability scale from impossible to certain — rolling a number less than 10 on a normal dice, rolling a 7 on a normal dice, rolling an even number on a normal dice.',
          answer: 'Rolling a 7 is impossible. Rolling an even number is equally likely. Rolling a number less than 10 is certain.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Probability scale from 0 to 1 colour coded — impossible in red at 0, unlikely in orange, equally likely in yellow at the halfway point, likely in blue, certain in green at 1" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining probability using everyday examples and showing how to place events on the probability scale from 0 to 1" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-fraction',
      title: 'Probability as a Fraction',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">We can write probability as a fraction. The number of ways the event can happen goes on top — this is called the ${ce('favourable outcomes')}. The total number of possible outcomes goes on the bottom — these are the ${li('total outcomes')}. Probability = number of ${ce('favourable outcomes')} divided by ${li('total number of outcomes')}. The ${un('probability')} of an event always falls between 0 and 1. The higher the fraction the more likely the event is to happen.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('favourable outcomes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('total outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('probability fraction')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${un('Probability')} = <span style="display:inline-block;text-align:center;vertical-align:middle;line-height:1.6;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">${ce('number of favourable outcomes')}</span><span style="display:block;padding-top:2px;">${li('total number of outcomes')}</span></span></p>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Favourable outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number of ways the event you want <strong>can happen</strong>. This goes on top of the fraction.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Total outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All the possible things that <strong>could happen</strong>. This goes on the bottom of the fraction.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Probability fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Always between <strong>0</strong> (impossible) and <strong>1</strong> (certain). The higher the fraction, the more likely.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always count carefully</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before writing the fraction, count all outcomes clearly. The ${ce('favourable outcomes')} must be included in the count for ${li('total outcomes')} — never count them separately.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bag contains 3 red balls and 2 blue balls. What is the probability of picking a red ball?',
          answer: `The probability of picking a red ball is ${un('3/5')}`,
          steps: [
            `Count the ${ce('favourable outcomes')} — there are ${ce('3')} red balls.`,
            `Count the ${li('total outcomes')} — there are 3 + 2 = ${li('5')} balls in total.`,
            `${un('Probability')} = ${ce('3')} ÷ ${li('5')} = ${un('3/5')}`,
            `The probability of picking a red ball is ${un('3/5')}.`,
          ],
        },
        {
          question: 'Sipho rolls a dice numbered 1 to 6. What is the probability of rolling an even number?',
          answer: `The probability of rolling an even number is ${un('3/6')} = ${un('1/2')}`,
          steps: [
            `List the even numbers on a dice — 2, 4, 6. That is ${ce('3')} favourable outcomes.`,
            `${li('Total outcomes')} = ${li('6')} (any number from 1 to 6 can be rolled).`,
            `${un('Probability')} = ${ce('3')} ÷ ${li('6')} = ${un('3/6')} = ${un('1/2')}`,
            `The probability of rolling an even number is ${un('1/2')}.`,
          ],
        },
        {
          question: 'Amahle has 5 green counters, 3 yellow counters and 2 blue counters in a bag. What is the probability of picking a yellow counter?',
          answer: `The probability of picking a yellow counter is ${un('3/10')}`,
          steps: [
            `${ce('Favourable outcomes')} = ${ce('3')} yellow counters.`,
            `${li('Total outcomes')} = 5 + 3 + 2 = ${li('10')}.`,
            `${un('Probability')} = ${ce('3')} ÷ ${li('10')} = ${un('3/10')}`,
            `The probability of picking a yellow counter is ${un('3/10')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — bag probability fraction ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A bag has 2 red balls and 2 blue balls. What is the probability of picking a red ball?',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          correctAnswers: ['1/2', '2/4'],
          explanation: 'Favourable outcomes = 2 red balls. Total outcomes = 2 + 2 = 4 balls.\nProbability = 2/4 = 1/2.',
        },

        // ── Q5 Medium — dice greater than 4 ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A dice numbered 1 to 6 is rolled. What is the probability of rolling a number greater than 4?',
          answer: '1/3',
          checkMode: 'auto',
          correctAnswer: '1/3',
          correctAnswers: ['1/3', '2/6'],
          explanation: 'Numbers greater than 4 on a dice are 5 and 6 — that is 2 favourable outcomes.\nTotal outcomes = 6.\nProbability = 2/6 = 1/3.',
        },

        // ── Q6 Hard — not red counter ────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A bag contains 4 green, 3 yellow and 1 red counter. What is the probability of picking a counter that is not red?',
          answer: '7/8',
          checkMode: 'auto',
          correctAnswer: '7/8',
          explanation: 'Total counters = 4 + 3 + 1 = 8.\nCounters that are not red = 4 green + 3 yellow = 7.\nProbability = 7/8.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Fraction diagram showing the probability formula with favourable outcomes in green on top and total outcomes in blue on the bottom illustrated with a bag of coloured balls" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to write probability as a fraction using bags of coloured balls and a dice with step by step working" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Listing Outcomes',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">An ${li('outcome')} is a possible result of an experiment. Listing all possible ${li('outcomes')} helps us calculate ${im('probability')} correctly. When we flip a coin there are ${un('2')} possible ${li('outcomes')} — heads or tails. When we roll a dice there are ${un('6')} possible ${li('outcomes')} — 1, 2, 3, 4, 5 or 6. Always list all possible ${li('outcomes')} before calculating ${im('probability')} to make sure you do not miss any.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('outcomes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('favourable outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('total outcomes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${im('probability')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Outcome</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">One possible result of an experiment. When flipping a coin the ${li('outcomes')} are <strong>heads</strong> or <strong>tails</strong>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Favourable outcome</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An ${li('outcome')} that matches what you are looking for. If you want heads then ${ce('heads')} is a ${ce('favourable outcome')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Total outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The count of <strong>all</strong> possible ${li('outcomes')} listed. For a dice the ${un('total')} is ${un('6')}. For a coin the ${un('total')} is ${un('2')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${im('Probability')} = ${ce('favourable outcomes')} ÷ ${un('total outcomes')}. Always list all ${li('outcomes')} first so the ${un('total')} is correct.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">List before you calculate</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always write out all possible ${li('outcomes')} <strong>before</strong> you calculate ${im('probability')}. This way you will never miss an ${li('outcome')} and your ${un('total outcomes')} will always be correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo flips a coin and rolls a dice at the same time. List all possible outcomes.',
          answer: `There are ${un('12')} possible ${li('outcomes')}: ${li('Heads-1, Heads-2, Heads-3, Heads-4, Heads-5, Heads-6, Tails-1, Tails-2, Tails-3, Tails-4, Tails-5, Tails-6')}`,
          steps: [
            `The coin can land on heads or tails — ${un('2')} ${li('options')}.`,
            `The dice can show 1, 2, 3, 4, 5 or 6 — ${un('6')} ${li('options')}.`,
            `${un('Total outcomes')} = 2 × 6 = ${un('12')}.`,
            `List them: ${li('Heads-1, Heads-2, Heads-3, Heads-4, Heads-5, Heads-6, Tails-1, Tails-2, Tails-3, Tails-4, Tails-5, Tails-6')}.`,
          ],
        },
        {
          question: 'A spinner has 4 equal sections coloured red, blue, green and yellow. Lerato spins it once. What is the probability of landing on blue or green?',
          answer: `The ${im('probability')} of landing on blue or green is ${im('2/4')} = ${im('1/2')}`,
          steps: [
            `List all ${li('outcomes')} — ${li('red, blue, green, yellow')}.`,
            `${un('Total outcomes')} = ${un('4')}.`,
            `${ce('Favourable outcomes')} = ${ce('blue or green')} = ${ce('2')}.`,
            `${im('Probability')} = ${ce('2')} ÷ ${un('4')} = ${im('2/4')} = ${im('1/2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — list dice outcomes ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho rolls a dice numbered 1 to 6. List all the possible outcomes.',
          answer: 'The possible outcomes are 1, 2, 3, 4, 5 and 6. There are 6 possible outcomes in total.',
          checkMode: 'self',
        },

        // ── Q8 Medium — spinner red or blue ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A spinner has 5 equal sections — 2 red, 1 blue, 1 green and 1 yellow. What is the probability of landing on red or blue?',
          answer: '3/5',
          checkMode: 'auto',
          correctAnswer: '3/5',
          explanation: 'Favourable outcomes = 2 red + 1 blue = 3.\nTotal outcomes = 5.\nProbability = 3/5.',
        },

        // ── Q9 Hard — combined outcomes ──────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato flips a coin and spins a spinner with 3 equal sections numbered 1, 2 and 3. How many possible outcomes are there in total?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'The coin has 2 outcomes (heads, tails). The spinner has 3 outcomes (1, 2, 3).\nTotal outcomes = 2 × 3 = 6.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid diagram showing all 12 outcomes when flipping a coin and rolling a dice — heads row and tails row each with 6 dice outcomes, all outcomes highlighted in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all possible outcomes for a coin and dice experiment using a table and how to use the list to calculate probability" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBABILITY EXPERIMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-experiments',
      title: 'Probability Experiments',
      icon: '🧪',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>probability experiment</strong> is when we actually carry out an activity and record the results. The results we get from doing the experiment are called ${un('experimental probability')}. The probability we calculate using fractions is called ${li('theoretical probability')}. When we do an experiment many times the ${un('experimental')} results get closer to the ${li('theoretical probability')}. This is why a larger ${ce('number of trials')} gives us more reliable results.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('experimental probability')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('theoretical probability')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('number of trials')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Experimental probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The probability we get by <strong>actually doing</strong> the experiment and recording what happens. It is the number of times the event occurs divided by the total number of trials.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Theoretical probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The probability we <strong>calculate</strong> using the formula — favourable outcomes ÷ total outcomes. This is the expected result if everything is perfectly fair.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Number of trials</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">How many times the experiment is carried out. The more ${ce('trials')} we do, the closer the ${un('experimental probability')} gets to the ${li('theoretical probability')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">More trials — more reliable</p>` +
        `<p style="margin:0;color:#1e3a8a;">With only a few ${ce('trials')} the ${un('experimental probability')} can be very different from the ${li('theoretical probability')}. As the ${ce('number of trials')} increases the two values get closer and closer together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho flips a coin 10 times and gets heads 7 times and tails 3 times. What is the experimental probability of getting heads? How does this compare to the theoretical probability?',
          answer: `${un('Experimental probability')} of heads = ${un('7/10')} — higher than the ${li('theoretical probability')} of ${li('1/2')} because of the small ${ce('number of trials')}`,
          steps: [
            `${un('Experimental probability')} of heads = number of heads ÷ ${ce('total number of flips')} = ${un('7')} ÷ ${ce('10')} = ${un('7/10')}.`,
            `${li('Theoretical probability')} of heads = ${li('1')} ÷ ${li('2')} = ${li('1/2')} = ${li('5/10')}.`,
            `The ${un('experimental result')} of ${un('7/10')} is higher than the ${li('theoretical')} ${li('5/10')}.`,
            `This can happen with only ${ce('10 flips')} — with more ${ce('flips')} the results would get closer to ${li('1/2')}.`,
          ],
        },
        {
          question: 'Amahle rolls a dice 30 times. She gets a 6 exactly 4 times. What is the experimental probability of rolling a 6 and what is the theoretical probability?',
          answer: `${un('Experimental probability')} = ${un('4/30')} = ${un('2/15')} — close to the ${li('theoretical probability')} of ${li('1/6')} but not exactly the same`,
          steps: [
            `${un('Experimental probability')} = number of 6s ÷ ${ce('total number of rolls')} = ${un('4')} ÷ ${ce('30')} = ${un('4/30')} = ${un('2/15')}.`,
            `${li('Theoretical probability')} = ${li('1')} ÷ ${li('6')} = ${li('1/6')}.`,
            `These are close but not exactly the same because of the small ${ce('number of trials')}.`,
            `With ${ce('600 rolls')} the results would be much closer to ${li('1/6')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — experimental probability ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo flips a coin 20 times and gets heads 9 times. What is the experimental probability of getting heads?',
          answer: '9/20',
          checkMode: 'auto',
          correctAnswer: '9/20',
          explanation: 'Experimental probability = number of heads ÷ total flips = 9 ÷ 20 = 9/20.',
        },

        // ── Q11 Medium — is 1 three in 12 rolls unusual ──────────────────────
        {
          difficulty: 'Medium',
          question: 'The theoretical probability of rolling a 3 on a dice is 1/6. Amahle rolls the dice 12 times and gets a 3 only once. Is this unusual? Explain.',
          answer: 'Not necessarily — with only 12 rolls the results can vary quite a bit. The theoretical probability of 1/6 means we expect about 2 threes in 12 rolls but getting only 1 is not unusual. More rolls would give results closer to 1/6.',
          checkMode: 'self',
        },

        // ── Q12 Hard — experimental vs theoretical ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'A bag has 5 red and 5 blue counters. Sipho picks a counter, notes the colour and puts it back. He does this 20 times and gets red 13 times. What is the experimental probability of red and how does it compare to the theoretical probability?',
          answer: 'Experimental probability = 13/20. Theoretical probability = 5/10 = 1/2 = 10/20. The experimental result is higher than expected but this can happen with only 20 trials. More trials would bring the result closer to 1/2.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Bar chart comparing experimental probability results for 10 and 30 trials against the theoretical probability line — orange bars for experimental results and blue line for theoretical probability" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a probability experiment with a coin and dice comparing experimental results to theoretical probability and explaining why more trials give results closer to the theoretical value" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have completed all of Grade 5 and mastered probability.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of probability.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
