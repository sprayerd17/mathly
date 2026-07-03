import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// favourable outcomes / explanation of difference / combined probability → green  (#16a34a)
// total outcomes / predicted frequency / individual probabilities        → blue   (#2563eb)
// probability / actual frequency                                         → orange (#ea580c)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — LISTING OUTCOMES AND CALCULATING PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes-calculating-probability',
      title: 'Listing Outcomes and Calculating Probability',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">We consider simple situations with <strong>equally likely outcomes</strong>, listing all possible outcomes and determining the probability of each using the definition:</p>` +

        `<div style="text-align:center;font-size:1.1em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${or('Probability')} = ${gr('favourable outcomes')} ÷ ${bl('total outcomes')}</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('favourable outcomes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('total outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('probability')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Favourable outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The outcomes that match what we are looking for.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Total outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All possible results that could happen in the experiment.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number between 0 and 1 that describes how likely an outcome is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always list all outcomes first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before calculating probability, write out all possible outcomes. This prevents you from missing any and ensures your ${bl('total')} is correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bag has 4 red, 3 blue and 5 green balls. Find the probability of picking a blue ball.',
          answer: `${or('Probability')} = ${gr('3')} ÷ ${bl('12')} = ${or('1/4')}`,
          steps: [
            `${gr('Favourable outcomes:')} There are <strong>3</strong> blue balls — these are the ${gr('favourable outcomes')}.`,
            `${bl('Total outcomes:')} Total balls = 4 + 3 + 5 = ${bl('12')}.`,
            `${or('Probability:')} ${or('P(blue)')} = ${gr('3')} ÷ ${bl('12')} = ${or('1/4')}`,
          ],
        },
        {
          question: 'Sipho rolls a dice. List all outcomes and find the probability of rolling a number divisible by 3.',
          answer: `${or('Probability')} = ${gr('2')} ÷ ${bl('6')} = ${or('1/3')}`,
          steps: [
            `All possible outcomes: 1, 2, 3, 4, 5, 6 — there are ${bl('6')} outcomes in total.`,
            `${gr('Favourable outcomes:')} Numbers divisible by 3 are 3 and 6 — that is ${gr('2')} outcomes.`,
            `${or('Probability:')} ${or('P(divisible by 3)')} = ${gr('2')} ÷ ${bl('6')} = ${or('1/3')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all outcomes and calculate probability using favourable outcomes divided by total outcomes" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a bag of coloured balls with the probability formula applied step by step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PREDICTING AND COMPARING RELATIVE FREQUENCY WITH PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'predicting-comparing-relative-frequency',
      title: 'Predicting and Comparing Relative Frequency with Probability',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We <strong>predict</strong>, with reasons, the relative frequency of possible outcomes for a series of trials based on theoretical probability, then compare actual relative frequency with the predicted probability and explain possible differences.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('predicted frequency')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('actual frequency')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('explanation of difference')}</span>` +
        `</div>` +

        // ── Key ideas ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Predicted (theoretical) frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Expected number of times an outcome occurs = probability × number of trials.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Relative frequency (actual)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The observed frequency in an experiment = number of times outcome occurred ÷ total trials.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Why they differ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Random variation causes differences, especially with fewer trials. More trials → results get closer to theoretical probability.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The law of large numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">With more and more trials, ${or('actual frequency')} gets closer to the ${bl('predicted frequency')}. With only a small number of trials, larger differences are completely normal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato predicts that flipping a coin 100 times should give about 50 heads. She gets 47 heads. Explain the difference.',
          answer: `${gr('Normal variation')} — the actual result is close to the predicted value and the difference is due to randomness.`,
          steps: [
            `The theoretical probability of heads is 1/2, so the ${bl('predicted frequency')} for 100 flips is 100 × 1/2 = ${bl('50 heads')}.`,
            `Lerato's ${or('actual frequency')} was ${or('47 heads')}.`,
            `${gr('Explanation:')} Getting 47 is close but not exactly 50 — ${gr('this is normal variation due to randomness in a limited number of trials')}. It does not mean the coin is unfair.`,
          ],
        },
        {
          question: 'Thabo predicts rolling a dice 60 times should give about 10 sixes (since probability = 1/6). He rolls 14 sixes. Is this surprising?',
          answer: `${gr('Not surprising')} — the result is higher than expected but within the range of normal variation for 60 trials.`,
          steps: [
            `Theoretical probability of rolling a six = 1/6. ${bl('Predicted frequency')} = 60 × 1/6 = ${bl('10 sixes')}.`,
            `Thabo's ${or('actual frequency')} was ${or('14 sixes')}.`,
            `${gr('Explanation:')} Getting 14 is somewhat higher than the expected 10, but ${gr('with limited trials, this variation can occur naturally; more trials would likely bring the result closer to 10')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to predict relative frequency from theoretical probability and explain differences between predicted and actual results" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing predicted frequency and actual frequency from a coin-flipping experiment showing how results vary with the number of trials" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBABILITY PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-probability-problems-in-context',
      title: 'Solving Probability Problems in Context',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">We apply probability concepts to solve multi-step, real-life problems, combining <strong>listing outcomes</strong>, <strong>calculating probability</strong>, and reasoning about <strong>relative frequency versus theoretical probability</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individual probabilities')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined probability')}</span>` +
        `</div>` +

        // ── Combining events ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Combining independent events</p>` +
        `<p style="margin-bottom:16px;">When two events are <strong>independent</strong> (one does not affect the other), multiply their individual probabilities:</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('P(A and B)')} = ${bl('P(A)')} × ${bl('P(B)')}</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for multi-step problems</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — List all possible outcomes for each part.<br><strong>Step 2</strong> — Calculate ${bl('individual probabilities')}.<br><strong>Step 3</strong> — Combine them to find the ${gr('combined probability')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A spinner has 8 equal sections numbered 1–8. Find the probability of landing on a number greater than 5.',
          answer: `${gr('P(greater than 5)')} = ${gr('3/8')}`,
          steps: [
            `${bl('Favourable outcomes:')} Numbers greater than 5 are 6, 7 and 8 — that is ${bl('3')} favourable outcomes.`,
            `${bl('Total outcomes:')} The spinner has ${bl('8')} equal sections.`,
            `${gr('Probability:')} ${gr('P(greater than 5)')} = ${bl('3')} ÷ ${bl('8')} = ${gr('3/8')}`,
          ],
        },
        {
          question: 'Amahle flips a coin and rolls a dice together. Find the probability of getting heads and an even number.',
          answer: `${gr('P(heads and even)')} = ${gr('1/4')}`,
          steps: [
            `${bl('P(heads)')} = 1 ÷ 2 = ${bl('1/2')}`,
            `Even numbers on a dice: 2, 4, 6 — that is 3 out of 6. ${bl('P(even)')} = 3 ÷ 6 = ${bl('1/2')}`,
            `These events are independent, so multiply: ${gr('P(heads and even)')} = ${bl('1/2')} × ${bl('1/2')} = ${gr('1/4')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step probability problems in real-life contexts including listing outcomes and combining independent events" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a tree diagram for flipping a coin and rolling a dice to find combined probability of heads and an even number" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A bag has 5 red and 7 blue counters. Find the probability of picking a red counter.',
      answer: '5/12',
      checkMode: 'auto',
      correctAnswer: '5/12',
      explanation: 'Favourable outcomes: 5 red. Total outcomes: 5 + 7 = 12. Probability = 5/12.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A dice is rolled. Find the probability of rolling a number divisible by 2.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6', '0.5'],
      explanation: 'Numbers divisible by 2: 2, 4, 6 — 3 favourable outcomes. Total: 6. Probability = 3/6 = 1/2.',
    },

    // ── Q3 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says rolling a dice 30 times should give exactly 5 sixes. Is this guaranteed? Explain.',
      answer: 'No — 5 sixes is the expected (theoretical) value, but actual results can vary due to randomness; it is not guaranteed to be exactly 5.',
      checkMode: 'self',
    },

    // ── Q4 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato flips a coin 50 times and gets 23 heads. Find the relative frequency of heads.',
      answer: '23/50 or 0.46',
      checkMode: 'auto',
      correctAnswers: ['23/50', '0.46'],
      explanation: 'Relative frequency = number of heads ÷ total flips = 23 ÷ 50 = 23/50 = 0.46.',
    },

    // ── Q5 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Compare Lerato's relative frequency in Q4 to the theoretical probability of getting heads and explain any difference.",
      answer: 'Theoretical probability is 0.5 (50%). Her relative frequency of 0.46 is close but slightly lower, which is normal variation from a limited number of trials.',
      checkMode: 'self',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A spinner has 6 equal sections numbered 1–6. Find the probability of landing on a number less than 4.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6', '0.5'],
      explanation: 'Numbers less than 4: 1, 2, 3 — 3 favourable outcomes. Total: 6. Probability = 3/6 = 1/2.',
    },

    // ── Q7 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo predicts that rolling a dice 120 times should give about 20 fives. He gets 25. Is this surprising? Explain.',
      answer: 'Expected = 120 × 1/6 = 20. Getting 25 is somewhat higher, but this can happen naturally with limited trials; more rolls would likely bring it closer to 20.',
      checkMode: 'self',
    },

    // ── Q8 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A bag has 8 green and 12 yellow marbles. Find the probability of picking a green marble.',
      answer: '8/20 or 2/5',
      checkMode: 'auto',
      correctAnswers: ['8/20', '2/5', '0.4'],
      explanation: 'Favourable: 8 green. Total: 8 + 12 = 20. Probability = 8/20 = 2/5.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle flips a coin and rolls a dice. Find the probability of getting tails and a number greater than 4.',
      answer: '1/6',
      checkMode: 'auto',
      correctAnswer: '1/6',
      correctAnswers: ['1/6', '2/12'],
      explanation: 'P(tails) = 1/2. Numbers > 4: 5 and 6, so P(> 4) = 2/6 = 1/3. Combined: 1/2 × 1/3 = 1/6.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A spinner has 10 equal sections numbered 1–10. Find the probability of landing on a multiple of 3.',
      answer: '3/10',
      checkMode: 'auto',
      correctAnswer: '3/10',
      explanation: 'Multiples of 3 up to 10: 3, 6, 9 — 3 favourable outcomes. Total: 10. Probability = 3/10.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho rolls a dice 40 times and gets a 2 exactly 6 times. Find the relative frequency and compare to theoretical probability.',
      answer: 'Relative frequency = 6/40 = 0.15. Theoretical probability = 1/6 ≈ 0.167. The values are close, showing the experiment roughly matches expectations.',
      checkMode: 'self',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says with enough trials, relative frequency will eventually exactly match theoretical probability. Is she correct? Explain.',
      answer: 'Not exactly — relative frequency tends to get closer to theoretical probability with more trials, but due to randomness, it rarely matches exactly even with very large numbers of trials.',
      checkMode: 'self',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 6 red, 4 blue and 10 green balls. Find the probability of picking a ball that is not green.',
      answer: '10/20 or 1/2',
      checkMode: 'auto',
      correctAnswers: ['10/20', '1/2', '0.5'],
      explanation: 'Not green: 6 red + 4 blue = 10 balls. Total: 6 + 4 + 10 = 20. Probability = 10/20 = 1/2.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo flips two coins together. Find the probability of getting heads on both coins.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      correctAnswers: ['1/4', '0.25'],
      explanation: 'P(heads on first coin) = 1/2. P(heads on second coin) = 1/2. Independent events: P(heads and heads) = 1/2 × 1/2 = 1/4.',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle's spinner has 12 equal sections. She predicts landing on section 7 should happen about 8 times out of 96 spins. Is her prediction reasonable? Explain.",
      answer: 'Yes — theoretical probability = 1/12. Expected frequency = 96 × 1/12 = 8, so her prediction matches the theoretical expectation exactly.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have completed all of Grade 8 and mastered probability.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
