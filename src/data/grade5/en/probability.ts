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
        'Fraction diagram showing the probability formula with favourable outcomes in green on top and total outcomes in blue on the bottom illustrated with a bag of coloured balls',
      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="65" y="18" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Bag of balls</text><path d="M40 42 L30 128 Q30 140 42 140 L88 140 Q100 140 100 128 L90 42 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50 42 Q50 30 65 30 Q80 30 80 42" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="50" cy="68" r="9" fill="#16a34a"/><circle cx="72" cy="62" r="9" fill="#16a34a"/><circle cx="60" cy="90" r="9" fill="#16a34a"/><circle cx="80" cy="84" r="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="46" cy="108" r="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="65" y="156" font-size="9.5" fill="#374151" text-anchor="middle" font-weight="700">3 green, 2 blue — 5 total</text><text x="170" y="18" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Probability</text><line x1="145" y1="52" x2="195" y2="52" stroke="#0f1f3d" stroke-width="2.5"/><text x="170" y="45" font-size="22" font-weight="700" fill="#16a34a" text-anchor="middle">3</text><text x="170" y="76" font-size="22" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="170" y="94" font-size="9.5" fill="#16a34a" text-anchor="middle" font-weight="700">favourable</text><text x="170" y="107" font-size="9.5" fill="#2563eb" text-anchor="middle" font-weight="700">total outcomes</text><text x="170" y="132" font-size="14" font-weight="700" fill="#ea580c" text-anchor="middle">= 3/5</text></svg>',

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
        'Grid diagram showing all 12 outcomes when flipping a coin and rolling a dice — heads row and tails row each with 6 dice outcomes, all outcomes highlighted in blue',
      diagramSvg:
        '<svg viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg"><text x="15" y="35" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">Heads</text><text x="15" y="70" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">Tails</text><rect x="70" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="88" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">1</text><rect x="114" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="132" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">2</text><rect x="158" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="176" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">3</text><rect x="202" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="220" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">4</text><rect x="246" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="264" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">5</text><rect x="290" y="15" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="308" y="34" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">6</text><rect x="70" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="88" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">1</text><rect x="114" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="132" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">2</text><rect x="158" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="176" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">3</text><rect x="202" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="220" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">4</text><rect x="246" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="264" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">5</text><rect x="290" y="50" width="36" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="308" y="69" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">6</text><text x="170" y="95" font-size="10" fill="#64748b" text-anchor="middle">12 total outcomes (2 × 6)</text></svg>',

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
        'Bar chart comparing experimental probability results for 10 and 30 trials against the theoretical probability line — orange bars for experimental results and blue line for theoretical probability',
      diagramSvg:
        '<svg viewBox="0 0 230 160" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="20" x2="30" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><text x="24" y="24" font-size="9" fill="#64748b" text-anchor="end">1</text><text x="24" y="133" font-size="9" fill="#64748b" text-anchor="end">0</text><line x1="30" y1="75" x2="200" y2="75" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/><text x="204" y="78" font-size="9" font-weight="700" fill="#2563eb" text-anchor="start">0.5</text><rect x="55" y="53" width="40" height="77" fill="#ea580c"/><text x="75" y="47" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">0.7</text><text x="75" y="145" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">10 trials</text><rect x="135" y="72" width="40" height="58" fill="#ea580c"/><text x="155" y="66" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">0.53</text><text x="155" y="145" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">30 trials</text><text x="115" y="158" font-size="9.5" fill="#64748b" text-anchor="middle">Experimental probability of heads</text></svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 vocabulary & 0-1 scale | 4-8 probability as a fraction |
    // 9-12 listing outcomes | 13-15 comparing & reasoning |
    // 16-17 error-spotting | 18-19 experimental vs theoretical
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Sipho asks his teacher if it will snow at school tomorrow in Johannesburg in summer. What single word describes the probability of this happening?', answer: 'impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'Snow in Johannesburg in summer essentially never happens, so this event is impossible — probability 0.' },
        { difficulty: 'Easy', question: 'What word describes the probability that the sun will rise tomorrow morning?', answer: 'certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'The sun rising every morning always happens, so this event is certain — probability 1.' },
        { difficulty: 'Easy', question: 'A coin is flipped once. Which word best describes the chance of it landing on heads — impossible, unlikely, equally likely, likely, or certain?', answer: 'equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely', 'equally likely'], explanation: 'A fair coin has the same chance of landing on heads as on tails, so this is equally likely — probability 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Place these three events in order from LEAST likely to MOST likely: (A) picking a red ball from a bag of 9 red and 1 blue ball, (B) picking a blue ball from that same bag, (C) picking any coloured ball from that bag.', answer: 'B, A, C', checkMode: 'auto', correctAnswer: 'BAC', correctAnswers: ['BAC', 'B, A, C'], explanation: 'B (blue) has only 1 out of 10 chances — least likely. A (red) has 9 out of 10 chances — very likely. C (any colour) always happens since the bag only has red and blue balls — certain, so most likely. Order: B, A, C.' },
        { difficulty: 'Easy-Medium', question: 'A bag contains 5 orange counters and 3 purple counters. What is the probability of picking an orange counter?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'Favourable outcomes = 5 orange counters. Total outcomes = 5 + 3 = 8. Probability = 5/8.' },
        { difficulty: 'Easy-Medium', question: 'A spinner has 6 equal sections numbered 1 to 6. Zanele spins it once — what are the chances, written as a fraction, that it lands on a number greater than 4?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Numbers greater than 4 on the spinner are 5 and 6 — that is 2 favourable outcomes. Total outcomes = 6. Probability = 2/6 = 1/3.' },
        { difficulty: 'Medium', question: 'A raffle sells 80 tickets in total. Aisha buys 4 of the tickets. What is the probability that Aisha\'s ticket is the one drawn as the winner?', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20', '4/80'], explanation: 'Favourable outcomes = 4 tickets belonging to Aisha. Total outcomes = 80 tickets. Probability = 4/80, which simplifies to 1/20.' },
        { difficulty: 'Medium', question: 'A jar of sweets has 10 toffees and 15 mints, making 25 sweets in total. Write the probability of picking a toffee as a fraction in its simplest form.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '10/25'], explanation: 'Probability = 10/25. Dividing the top and bottom by 5 gives 2/5, which cannot be simplified further.' },
        { difficulty: 'Medium', question: 'A box holds 15 marbles: 6 red and 9 blue. What is the probability of picking a marble that is NOT red?', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '9/15'], explanation: 'Marbles that are not red = 9 blue marbles. Total = 15. Probability = 9/15 = 3/5. (This matches picking a blue marble directly.)' },
        { difficulty: 'Medium', question: 'Thabo flips a coin and rolls a 6-sided dice at the same time. List all the possible outcomes, then say how many there are in total.', answer: 'Heads-1, Heads-2, Heads-3, Heads-4, Heads-5, Heads-6, Tails-1, Tails-2, Tails-3, Tails-4, Tails-5, Tails-6 — 12 outcomes in total', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'The coin has 2 outcomes (heads, tails) and the dice has 6 outcomes (1-6). Using the counting principle: total outcomes = 2 × 6 = 12.' },
        { difficulty: 'Medium', question: 'A spinner is split into 4 equal sections coloured red, blue, green and yellow, and is spun at the same time as a coin is flipped. How many possible outcomes are there altogether?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'The spinner has 4 outcomes and the coin has 2 outcomes. Total outcomes = 4 × 2 = 8.' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections numbered 1 to 8. Zanele wants the probability of landing on a multiple of 3. List the favourable outcomes first, then give the probability.', answer: 'Favourable outcomes are 3 and 6, so probability = 2/8 = 1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '2/8'], explanation: 'Listing carefully, the multiples of 3 from 1 to 8 are only 3 and 6 — that is 2 favourable outcomes (9 is not on the spinner). Total outcomes = 8. Probability = 2/8 = 1/4. A common mistake is forgetting to check which multiples actually fall in the 1-8 range.' },
        { difficulty: 'Medium', question: 'A bag has 3 green counters and 3 white counters. List every possible outcome when you pick one counter, then say how many outcomes there are.', answer: 'The outcomes are: green, green, green, white, white, white — but since we describe outcomes by colour there are 2 distinct outcomes (green or white), though 6 individual counters', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bag A has 4 red counters out of 10 counters in total. Bag B has 6 red counters out of 15 counters in total. Which bag gives a better chance of picking a red counter, or are they the same?', answer: 'They give the same chance', checkMode: 'auto', correctAnswer: 'same', correctAnswers: ['same', 'equal', 'theyarethesame'], explanation: 'Bag A: probability = 4/10 = 2/5. Bag B: probability = 6/15 = 2/5. Both fractions simplify to 2/5, so the two bags give exactly the same chance of picking red.' },
        { difficulty: 'Medium', question: 'Compare these two spinners: Spinner X has 4 equal sections with 1 coloured red. Spinner Y has 8 equal sections with 3 coloured red. Which spinner gives a better chance of landing on red? Explain your reasoning using fractions.', answer: 'Spinner Y gives a better chance. Spinner X: probability of red = 1/4 = 2/8. Spinner Y: probability of red = 3/8. Since 3/8 is greater than 2/8, Spinner Y has the better chance of landing on red.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A weather report says there is a "high chance" of rain tomorrow and a "very low chance" of hail. Explain in your own words what these two probability descriptions tell us about how likely each event is, and place them roughly on the 0 to 1 scale.', answer: 'A "high chance" of rain means rain is likely to happen, so its probability is closer to 1 (maybe around 0.7 to 0.9). A "very low chance" of hail means hail is unlikely to happen, so its probability is closer to 0 (maybe around 0.05 to 0.1). Both events are possible, just not equally likely.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato has a bag with 4 yellow and 2 pink counters, 6 in total. She says: "The probability of picking pink is 2, because there are 2 pink counters." Explain what Lerato did wrong and give the correct probability.', answer: 'Lerato wrote only the number of favourable outcomes and forgot to divide by the total. The correct probability is 2/6 = 1/3, not 2.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Probability must always be favourable outcomes ÷ total outcomes, and it must be between 0 and 1. Lerato only stated the favourable outcomes (2) without dividing by the total (6). Correct probability = 2/6 = 1/3.' },
        { difficulty: 'Hard', question: 'A dice numbered 1 to 6 is rolled once. Kagiso claims: "There are 6 numbers on the dice, and 2 of them are even, so the probability of rolling an even number is 2/6." Is Kagiso\'s final answer correct even though his method sounds reasonable? Explain and give the correct probability.', answer: 'Kagiso miscounted the even numbers. The correct probability is 1/2, not 2/6.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'The even numbers on a dice numbered 1 to 6 are 2, 4 and 6 — that is 3 favourable outcomes, not 2. Probability = 3/6 = 1/2. Kagiso undercounted the favourable outcomes.' },
        { difficulty: 'Hard', question: 'Sipho rolls a dice 24 times and records a 6 exactly 3 times. What is the experimental probability of rolling a 6, and what is the theoretical probability? Are they the same?', answer: 'Experimental probability = 1/8. Theoretical probability = 1/6. They are close but not the same, mainly because 24 rolls is a fairly small number of trials.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle flips a coin 50 times and gets heads 32 times. Calculate the experimental probability of heads and the theoretical probability of heads, then explain in one or two sentences why they are different.', answer: 'Experimental probability = 32/50 = 16/25. Theoretical probability = 1/2 (25/50). These differ because 50 flips is not a huge number of trials, so random variation can push the results away from the expected 1/2. With many more flips the experimental result would likely move closer to 1/2.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You understand probability words, fractions and experiments really well.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Is it impossible, unlikely, equally likely, likely, or certain that a normal dice numbered 1 to 6 will show the number 9 when rolled?', answer: 'impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'The number 9 does not appear on a dice numbered 1 to 6, so rolling a 9 is impossible — probability 0.' },
        { difficulty: 'Easy', question: 'A bag contains only green counters. Lindiwe reaches in and picks one counter. What word describes the probability that she picks a green counter?', answer: 'certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Every counter in the bag is green, so picking a green counter will always happen — this is certain, probability 1.' },
        { difficulty: 'Easy', question: 'A spinner has 2 equal sections, one black and one white. What word best describes the chance of the spinner landing on black?', answer: 'equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely', 'equally likely'], explanation: 'With 2 equal sections, black and white each have the same chance of being landed on, so this is equally likely — probability 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Order these three events from MOST likely to LEAST likely: (A) rolling a number less than 7 on a normal dice, (B) rolling the number 6 on a normal dice, (C) rolling the number 8 on a normal dice.', answer: 'A, B, C', checkMode: 'auto', correctAnswer: 'ABC', correctAnswers: ['ABC', 'A, B, C'], explanation: 'A dice numbered 1 to 6 always shows a number less than 7, so A is certain — most likely. B (rolling a 6) has a 1 in 6 chance — possible but not likely. C (rolling an 8) is impossible since 8 is not on the dice — least likely. Order: A, B, C.' },
        { difficulty: 'Easy-Medium', question: 'A spinner has 6 equal sections: 2 are pink and 4 are grey. What is the probability of the spinner landing on pink?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Favourable outcomes = 2 pink sections. Total outcomes = 6 sections. Probability = 2/6 = 1/3.' },
        { difficulty: 'Easy-Medium', question: 'Kagiso rolls a dice numbered 1 to 6 once. Write, as a fraction, his chance of rolling a number less than 3.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Numbers less than 3 on the dice are 1 and 2 — that is 2 favourable outcomes. Total outcomes = 6. Probability = 2/6 = 1/3.' },
        { difficulty: 'Medium', question: 'A raffle at a school fete sells 60 tickets. Lindiwe buys 3 of them. What is the probability that one of Lindiwe\'s tickets wins the prize?', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20', '3/60'], explanation: 'Favourable outcomes = 3 tickets belonging to Lindiwe. Total outcomes = 60 tickets. Probability = 3/60, which simplifies to 1/20.' },
        { difficulty: 'Medium', question: 'A sweet jar has 8 lemon sweets and 12 lime sweets, 20 sweets altogether. Write the probability of picking a lemon sweet in its simplest form.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '8/20'], explanation: 'Probability = 8/20. Dividing the top and bottom by 4 gives 2/5, which cannot be simplified further.' },
        { difficulty: 'Medium', question: 'A crate has 14 apples, of which 6 are green and the rest are red. What is the probability of choosing an apple that is NOT green?', answer: '4/7', checkMode: 'auto', correctAnswer: '4/7', correctAnswers: ['4/7', '8/14'], explanation: 'Apples that are not green = 14 − 6 = 8 red apples. Total = 14. Probability = 8/14 = 4/7.' },
        { difficulty: 'Medium', question: 'A spinner numbered 1, 2, 3 is spun at the same time as a coin is flipped. List every possible outcome, then say how many there are in total.', answer: '1-Heads, 2-Heads, 3-Heads, 1-Tails, 2-Tails, 3-Tails — 6 outcomes in total', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'The spinner has 3 outcomes and the coin has 2 outcomes. Using the counting principle: total outcomes = 3 × 2 = 6.' },
        { difficulty: 'Medium', question: 'Two ordinary 6-sided dice are rolled together — one red dice and one blue dice. How many possible outcome pairs are there in total?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Each dice has 6 outcomes. Using the counting principle: total outcomes = 6 × 6 = 36.' },
        { difficulty: 'Medium', question: 'A spinner has 10 equal sections numbered 1 to 10. Find the probability of landing on a multiple of 4 by first listing the favourable outcomes.', answer: 'Favourable outcomes are 4 and 8, so probability = 2/10 = 1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '2/10'], explanation: 'Listing carefully, the multiples of 4 from 1 to 10 are 4 and 8 — that is 2 favourable outcomes (12 is not on the spinner). Total outcomes = 10. Probability = 2/10 = 1/5. It is easy to accidentally include a multiple like 12 that is outside the spinner\'s range, so listing first avoids that trap.' },
        { difficulty: 'Medium', question: 'A box has 2 blue pens and 2 black pens. List every possible outcome when you pick one pen, describing outcomes by colour, and say how many distinct colour outcomes there are.', answer: 'The distinct colour outcomes are blue and black, so there are 2 distinct outcomes, even though there are 4 individual pens', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bag A has 3 yellow counters out of 8 counters in total. Bag B has 5 yellow counters out of 12 counters in total. Which bag gives the better chance of picking yellow?', answer: 'Bag B', checkMode: 'auto', correctAnswer: 'BagB', correctAnswers: ['bagB', 'bag b', 'b'], explanation: 'Bag A: probability = 3/8 = 0.375. Bag B: probability = 5/12 ≈ 0.417. Comparing as equivalent fractions with denominator 24: 3/8 = 9/24 and 5/12 = 10/24. Since 10/24 > 9/24, Bag B gives the better chance of picking yellow.' },
        { difficulty: 'Medium', question: 'Two spinners are compared: Spinner P has 6 equal sections with 2 coloured orange. Spinner Q has 9 equal sections with 4 coloured orange. Which spinner gives a better chance of landing on orange? Show your working using fractions.', answer: 'Spinner Q gives a better chance. Spinner P: probability of orange = 2/6 = 1/3. Spinner Q: probability of orange = 4/9. Comparing as equivalent fractions with denominator 18: 1/3 = 6/18 and 4/9 = 8/18. Since 8/18 > 6/18, Spinner Q gives the better chance of landing on orange.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A friend tells you an event is "almost certain" to happen, while another event is "fifty-fifty". Explain what these two phrases mean in terms of probability, and roughly where you would place each one on the 0 to 1 scale.', answer: '"Almost certain" means the event will very probably happen, so its probability is close to 1 (maybe around 0.9 to 0.99), but not exactly 1 because it is not guaranteed. "Fifty-fifty" means the event is equally likely to happen or not happen, so its probability is exactly 1/2 (0.5), right in the middle of the scale.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 5 orange and 3 white counters, 8 in total. Bongani says: "The probability of picking white is 3, because there are 3 white counters." What mistake did Bongani make, and what is the correct probability?', answer: 'Bongani gave only the count of favourable outcomes and did not divide by the total. The correct probability is 3/8, not 3.', checkMode: 'auto', correctAnswer: '3/8', correctAnswers: ['3/8'], explanation: 'Probability must always be favourable outcomes ÷ total outcomes and must lie between 0 and 1. Bongani only wrote the favourable outcomes (3) instead of dividing by the total (8). Correct probability = 3/8.' },
        { difficulty: 'Hard', question: 'A dice numbered 1 to 6 is rolled once. Naledi says: "The numbers greater than 3 are 4, 5 and 6, but I\'ll also count 3 itself since it\'s close, so the probability is 4/6." Is Naledi\'s reasoning correct? Explain and give the correct probability.', answer: 'Naledi is incorrect to include 3, since 3 is not greater than 3. The correct probability is 3/6 = 1/2, not 4/6.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: '"Greater than 3" means strictly more than 3, so only 4, 5 and 6 count — that is 3 favourable outcomes, not 4. Probability = 3/6 = 1/2. Naledi incorrectly included the number 3 itself.' },
        { difficulty: 'Hard', question: 'Lerato spins a 4-colour spinner (red, blue, green, yellow, all equal sections) 40 times and lands on red 15 times. Find the experimental probability of red and the theoretical probability of red, and say whether they match closely.', answer: 'Experimental probability = 15/40 = 3/8. Theoretical probability = 1/4 (10/40). These are somewhat different — 3/8 is noticeably higher than 1/4 — which can happen with only 40 spins. More spins would likely bring the experimental result closer to 1/4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo picks a card from a bag of 20 cards (10 numbered cards and 10 letter cards), records whether it is a number or letter, and replaces it. He does this 45 times and gets a number card 21 times. Calculate the experimental probability of a number card and the theoretical probability, then explain why they might differ.', answer: 'Experimental probability = 21/45 = 7/15. Theoretical probability = 10/20 = 1/2. These are close but not identical — 7/15 is slightly less than 1/2 — which is normal with a moderate number of trials like 45. With many more trials the experimental probability would be expected to settle closer to 1/2.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with probability words, fractions, outcomes and experiments.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A spinner has 5 equal sections, all coloured blue. What word describes the probability of landing on red?', answer: 'impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'There is no red section on the spinner, so landing on red can never happen — this is impossible, probability 0.' },
        { difficulty: 'Easy', question: 'A box contains 12 pencils and nothing else. Zinhle reaches in without looking and pulls something out. What word describes the probability that she pulls out a pencil?', answer: 'certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Since the box only contains pencils, whatever she pulls out will always be a pencil — this is certain, probability 1.' },
        { difficulty: 'Easy', question: 'A bag has 4 white balls and 4 black balls. What word best describes the chance of picking a white ball?', answer: 'equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely', 'equally likely'], explanation: 'With equal numbers of white and black balls, picking white has the same chance as picking black — this is equally likely, probability 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Order these events from LEAST likely to MOST likely: (A) picking a striped sock from a drawer of 1 striped sock and 19 plain socks, (B) picking any sock at all from that drawer, (C) picking a plain sock from that drawer.', answer: 'A, C, B', checkMode: 'auto', correctAnswer: 'ACB', correctAnswers: ['ACB', 'A, C, B'], explanation: 'A (striped) has only 1 out of 20 chances — least likely. C (plain) has 19 out of 20 chances — very likely. B (any sock) always happens since the drawer only has socks — certain, most likely. Order: A, C, B.' },
        { difficulty: 'Easy-Medium', question: 'A bag has 7 silver beads and 5 gold beads. What is the probability of picking a gold bead?', answer: '5/12', checkMode: 'auto', correctAnswer: '5/12', correctAnswers: ['5/12'], explanation: 'Favourable outcomes = 5 gold beads. Total outcomes = 7 + 5 = 12. Probability = 5/12.' },
        { difficulty: 'Easy-Medium', question: 'Musa spins a spinner with 9 equal sections numbered 1 to 9. Give, as a fraction, the chance that it lands on a number greater than 6.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '3/9'], explanation: 'Numbers greater than 6 on the spinner are 7, 8 and 9 — that is 3 favourable outcomes. Total outcomes = 9. Probability = 3/9 = 1/3.' },
        { difficulty: 'Medium', question: 'A school raffle prints 500 tickets. Musa\'s class buys 20 of them together. What is the probability that the winning ticket belongs to Musa\'s class?', answer: '1/25', checkMode: 'auto', correctAnswer: '1/25', correctAnswers: ['1/25', '20/500'], explanation: 'Favourable outcomes = 20 tickets bought by Musa\'s class. Total outcomes = 500 tickets. Probability = 20/500, which simplifies to 1/25.' },
        { difficulty: 'Medium', question: 'A packet has 9 chocolate biscuits and 12 plain biscuits, 21 biscuits in total. Write the probability of picking a chocolate biscuit in its simplest form.', answer: '3/7', checkMode: 'auto', correctAnswer: '3/7', correctAnswers: ['3/7', '9/21'], explanation: 'Probability = 9/21. Dividing the top and bottom by 3 gives 3/7, which cannot be simplified further.' },
        { difficulty: 'Medium', question: 'A jar has 18 buttons, of which 5 are yellow and the rest are a mix of other colours. What is the probability of choosing a button that is NOT yellow?', answer: '13/18', checkMode: 'auto', correctAnswer: '13/18', correctAnswers: ['13/18'], explanation: 'Buttons that are not yellow = 18 − 5 = 13. Total = 18. Probability = 13/18.' },
        { difficulty: 'Medium', question: 'A coin is flipped twice in a row. List all the possible outcomes for the two flips, then say how many there are.', answer: 'Heads-Heads, Heads-Tails, Tails-Heads, Tails-Tails — 4 outcomes in total', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'The first flip has 2 outcomes and the second flip has 2 outcomes. Using the counting principle: total outcomes = 2 × 2 = 4.' },
        { difficulty: 'Medium', question: 'A coin is flipped and a spinner with 3 equal sections (labelled A, B, C) is spun at the same time. How many possible outcome pairs are there in total?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'The coin has 2 outcomes and the spinner has 3 outcomes. Using the counting principle: total outcomes = 2 × 3 = 6.' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections numbered 1 to 12. Find the probability of landing on a multiple of 5 by first listing the favourable outcomes.', answer: 'Favourable outcomes are 5 and 10, so probability = 2/12 = 1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], explanation: 'Listing carefully, the multiples of 5 from 1 to 12 are 5 and 10 — that is 2 favourable outcomes (15 is not on the spinner). Total outcomes = 12. Probability = 2/12 = 1/6. Listing first prevents accidentally counting 15, which is outside the spinner\'s range.' },
        { difficulty: 'Medium', question: 'A bowl has 3 red apples and 2 green apples. List every possible outcome when you pick one apple, describing outcomes by colour, and say how many distinct colour outcomes there are.', answer: 'The distinct colour outcomes are red and green, so there are 2 distinct outcomes, even though there are 5 individual apples', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bag A has 2 blue counters out of 6 counters in total. Bag B has 3 blue counters out of 9 counters in total. Which bag gives a better chance of picking blue, or are they the same?', answer: 'They give the same chance', checkMode: 'auto', correctAnswer: 'same', correctAnswers: ['same', 'equal', 'theyarethesame'], explanation: 'Bag A: probability = 2/6 = 1/3. Bag B: probability = 3/9 = 1/3. Both fractions simplify to 1/3, so the two bags give exactly the same chance of picking blue.' },
        { difficulty: 'Medium', question: 'Two spinners are compared for the chance of landing on green: Spinner M has 5 equal sections with 1 coloured green. Spinner N has 10 equal sections with 3 coloured green. Which spinner gives a better chance? Explain your reasoning using fractions.', answer: 'Spinner N gives a better chance. Spinner M: probability of green = 1/5 = 2/10. Spinner N: probability of green = 3/10. Since 3/10 is greater than 2/10, Spinner N has the better chance of landing on green.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A sports commentator says a team has "very little chance" of winning, while the other team is "almost sure to win". Explain what these phrases tell us about the probability of each team winning, and roughly where each would sit on the 0 to 1 scale.', answer: '"Very little chance" means winning is unlikely for that team, so its probability is close to 0 (maybe around 0.05 to 0.15). "Almost sure to win" means the other team is very likely to win, so its probability is close to 1 (maybe around 0.85 to 0.95). Together the two probabilities should add up to close to 1, since one team (or a draw) must happen.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 6 blue and 4 red counters, 10 in total. Palesa says: "The probability of picking red is 4, because there are 4 red counters." Identify Palesa\'s mistake and state the correct probability.', answer: 'Palesa only wrote the count of favourable outcomes and forgot to divide by the total. The correct probability is 4/10 = 2/5, not 4.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: 'Probability must always be favourable outcomes ÷ total outcomes and must be between 0 and 1. Palesa only stated the favourable outcomes (4) without dividing by the total (10). Correct probability = 4/10 = 2/5.' },
        { difficulty: 'Hard', question: 'A dice numbered 1 to 6 is rolled once. Tumi says: "The numbers less than 5 are 1, 2, 3 and 4, but I\'ll also count 5 since it\'s close, so the probability is 5/6." Is Tumi\'s reasoning correct? Explain and give the correct probability.', answer: 'Tumi is incorrect to include 5, since 5 is not less than 5. The correct probability is 4/6 = 2/3, not 5/6.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '4/6'], explanation: '"Less than 5" means strictly below 5, so only 1, 2, 3 and 4 count — that is 4 favourable outcomes, not 5. Probability = 4/6 = 2/3. Tumi incorrectly included the number 5 itself.' },
        { difficulty: 'Hard', question: 'Amahle rolls a dice 60 times and records a 1 exactly 8 times. Find the experimental probability of rolling a 1 and the theoretical probability, and say whether they are close.', answer: 'Experimental probability = 8/60 = 2/15. Theoretical probability = 1/6 (10/60). These are fairly close — 2/15 is a little lower than 1/6 — which is normal with 60 rolls. With even more rolls the experimental result would be expected to get closer to 1/6.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho draws a marble from a bag of 12 marbles (4 red, 4 blue, 4 green), records the colour, and puts it back. He does this 36 times and draws red 15 times. Calculate the experimental probability of red and the theoretical probability, then explain why the results might not match exactly.', answer: 'Experimental probability = 15/36 = 5/12. Theoretical probability = 4/12 = 1/3 (12/36). The experimental result (5/12) is a bit higher than the theoretical result (1/3), which can happen with a moderate number of trials like 36. With many more trials the experimental probability would be expected to settle closer to 1/3.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply probability words, fractions, outcomes and experiments to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
