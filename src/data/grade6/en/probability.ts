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
    // SECTION 2 — PROBABILITY AS A FRACTION
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
    // SECTION 3 — LISTING OUTCOMES
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
