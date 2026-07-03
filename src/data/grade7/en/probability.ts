import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// impossible / red keyword    → red    (#dc2626)
// certain / favourable / trials → green (#16a34a)
// outcomes / total / theoretical → blue (#2563eb)
// relative frequency / fraction  → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROBABILITY SCALE AND LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-scale-listing-outcomes',
      title: 'Probability Scale and Listing Outcomes',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Probability describes how likely an event is, on a scale from ${re('0')} (${re('impossible')}) to ${gr('1')} (${gr('certain')}). For experiments with equally likely outcomes, we list all possible ${bl('outcomes')} before calculating probability.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('impossible')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('certain')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('outcomes')}</span>` +
        `</div>` +

        // ── The probability scale ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability scale</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Impossible — 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event can never happen. Probability = ${re('0')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Unlikely — closer to 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event could happen but probably will not.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Even chance — ½</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event is as likely to happen as not. Probability = ½.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Likely — closer to 1</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event will probably happen.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Certain — 1</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The event will always happen. Probability = ${gr('1')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Listing outcomes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Listing all possible outcomes</p>` +
        `<p style="margin-bottom:12px;">Before calculating any probability, always list every possible ${bl('outcome')} of the experiment. This complete list is called the <strong>sample space</strong>.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Equally likely outcomes</p>` +
        `<p style="margin:0;color:#1e3a8a;">Outcomes are <strong>equally likely</strong> when each one has the same chance of occurring — for example, each face of a fair dice. Only when outcomes are equally likely can we use the fraction formula in the next section.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho rolls a normal dice. List all possible outcomes.',
          answer: `Possible ${bl('outcomes')}: ${bl('1, 2, 3, 4, 5, 6')}`,
          steps: [
            `A dice has 6 faces numbered 1 to 6.`,
            `Each face is a possible ${bl('outcome')}: <strong>${bl('1')}, ${bl('2')}, ${bl('3')}, ${bl('4')}, ${bl('5')}, ${bl('6')}</strong>.`,
            `<strong>Answer:</strong> The possible ${bl('outcomes')} are ${bl('1, 2, 3, 4, 5, 6')} — there are 6 equally likely outcomes in total.`,
          ],
        },
        {
          question: 'A bag has only blue balls. What is the probability of picking a blue ball?',
          answer: `Probability = ${gr('1')} — this is ${gr('certain')}`,
          steps: [
            `Every ball in the bag is blue.`,
            `This event will <strong>always</strong> happen — it is ${gr('certain')}.`,
            `<strong>Answer:</strong> Probability = ${gr('1')}. An event that always happens has a probability of ${gr('1')} on the probability scale.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the probability scale from 0 to 1 and how to list all possible outcomes of an experiment" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Probability scale from 0 to 1 showing impossible at 0, even chance at half, and certain at 1 with colour coded labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-a-fraction',
      title: 'Probability as a Fraction',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Probability = ${gr('favourable outcomes')} ÷ ${bl('total outcomes')}. We use this definition to calculate the ${or('probability')} of single events using equally likely outcomes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('favourable outcomes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('total outcomes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('probability fraction')}</span>` +
        `</div>` +

        // ── Formula ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The probability formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${or('P(event)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">${gr('number of favourable outcomes')}</span><span style="display:block;padding-top:2px;">${bl('total number of outcomes')}</span></span></p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Favourable outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The outcomes that match the event you are finding the probability of.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Total outcomes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All possible outcomes in the sample space — found by listing them first.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Probability fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fraction that represents the probability — always between 0 and 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always simplify your fraction</p>` +
        `<p style="margin:0;color:#1e3a8a;">After calculating the ${or('probability fraction')}, simplify it to its lowest terms where possible — for example, 4/6 = 2/3. Both forms are correct, but simplified fractions are preferred.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bag has 5 red and 3 blue marbles. Find the probability of picking a blue marble.',
          answer: `${or('P(blue)')} = ${or('3/8')}`,
          steps: [
            `Count the ${gr('favourable outcomes')}: there are ${gr('3')} blue marbles.`,
            `Count the ${bl('total outcomes')}: 5 red + 3 blue = ${bl('8')} marbles in total.`,
            `Apply the formula: ${or('P(blue)')} = ${gr('3')} ÷ ${bl('8')} = ${or('3/8')}.`,
            `<strong>Answer:</strong> ${or('P(blue)')} = ${or('3/8')}. The fraction is already in its simplest form.`,
          ],
        },
        {
          question: 'Lerato rolls a dice. Find the probability of rolling a number greater than 2.',
          answer: `${or('P(greater than 2)')} = ${or('4/6')} = ${or('2/3')}`,
          steps: [
            `List all ${bl('total outcomes')}: 1, 2, 3, 4, 5, 6 → ${bl('6')} outcomes.`,
            `Identify the ${gr('favourable outcomes')} (greater than 2): 3, 4, 5, 6 → ${gr('4')} outcomes.`,
            `Apply the formula: ${or('P(> 2)')} = ${gr('4')} ÷ ${bl('6')} = ${or('4/6')}.`,
            `Simplify: ${or('4/6')} = ${or('2/3')}.`,
            `<strong>Answer:</strong> ${or('P(> 2)')} = ${or('2/3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate probability as a fraction using favourable outcomes over total outcomes with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a bag with 5 red and 3 blue marbles showing favourable outcomes highlighted in green and total outcomes in blue" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — RELATIVE FREQUENCY AND COMPARING WITH PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relative-frequency',
      title: 'Relative Frequency and Comparing with Probability',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">${or('Relative frequency')} is the result of actually performing an experiment, calculated as the number of times an event occurs divided by the ${gr('total number of trials')}. We compare ${or('relative frequency')} to ${bl('theoretical probability')}, recognising that with more ${gr('trials')} the ${or('relative frequency')} tends to get closer to the ${bl('theoretical probability')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('relative frequency')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('theoretical probability')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('number of trials')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">${or('Relative Frequency')} (from experiment)</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('RF')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">number of times event occurred</span><span style="display:block;padding-top:2px;">${gr('total number of trials')}</span></span></p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:8px;">${bl('Theoretical Probability')} (from theory)</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${bl('P(event)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">favourable outcomes</span><span style="display:block;padding-top:2px;">total outcomes</span></span></p>` +
        `</div>` +

        `</div>` +

        // ── Key insight ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">What the comparison tells us</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">The ${or('relative frequency')} and ${bl('theoretical probability')} are rarely identical — small differences are expected.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">With more ${gr('trials')}, the ${or('relative frequency')} gets closer to the ${bl('theoretical probability')} — this is the <strong>Law of Large Numbers</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">If the ${or('relative frequency')} is very far from the ${bl('theoretical probability')}, the experiment may not be fair or the ${gr('number of trials')} may be too small.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Theory vs experiment</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Theoretical probability')} is what we <em>expect</em> based on mathematics. ${or('Relative frequency')} is what <em>actually happened</em> in an experiment. Neither is wrong — they are two different ways of measuring probability.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo flips a coin 50 times and gets heads 28 times. Find the relative frequency of heads and compare it to the theoretical probability.',
          answer: `${or('Relative frequency')} = ${or('0.56')}; ${bl('Theoretical probability')} = ${bl('0.5')} — close but not equal`,
          steps: [
            `Calculate the ${or('relative frequency')}: number of heads ÷ ${gr('total trials')} = 28 ÷ ${gr('50')} = ${or('0.56')}.`,
            `Calculate the ${bl('theoretical probability')}: a fair coin has 1 favourable outcome (heads) out of 2 total outcomes → ${bl('P(heads)')} = 1 ÷ 2 = ${bl('0.5')}.`,
            `Compare: ${or('0.56')} vs ${bl('0.5')}. The ${or('relative frequency')} is close to but not exactly equal to the ${bl('theoretical probability')}.`,
            `<strong>Answer:</strong> This is expected with a limited ${gr('number of trials')} (${gr('50')}). With many more flips, the ${or('relative frequency')} would move closer to ${bl('0.5')}.`,
          ],
        },
        {
          question: 'Amahle rolls a dice 60 times and gets a 6 exactly 8 times. Find the relative frequency and compare to the theoretical probability.',
          answer: `${or('Relative frequency')} = ${or('2/15 ≈ 0.133')}; ${bl('Theoretical probability')} = ${bl('1/6 ≈ 0.167')} — values are close`,
          steps: [
            `Calculate the ${or('relative frequency')}: 8 ÷ ${gr('60')} = ${or('2/15')} ≈ ${or('0.133')}.`,
            `Calculate the ${bl('theoretical probability')}: 1 favourable outcome (rolling a 6) out of 6 total outcomes → ${bl('P(6)')} = ${bl('1/6')} ≈ ${bl('0.167')}.`,
            `Compare: ${or('0.133')} vs ${bl('0.167')}. The values are close, showing the experiment roughly matches the expected probability.`,
            `<strong>Answer:</strong> The small difference is normal for ${gr('60')} trials. The ${or('relative frequency')} of ${or('2/15')} is reasonably close to the ${bl('theoretical probability')} of ${bl('1/6')}, confirming the dice appears to be fair.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing relative frequency from an experiment to theoretical probability and showing how more trials brings the two values closer together" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table comparing relative frequency and theoretical probability for a coin flip experiment across 10 50 and 200 trials showing convergence" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — listing outcomes ────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'List all possible outcomes when flipping a coin.',
      answer: 'heads, tails',
      checkMode: 'auto',
      correctAnswer: 'heads, tails',
      correctAnswers: ['heads, tails', 'heads and tails', 'tails, heads', 'tails and heads'],
      explanation: 'A coin has two sides: heads and tails. There are 2 possible outcomes in total.',
    },

    // ── Q2 Easy — certain event ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A bag has only green balls. What is the probability of picking a green ball?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'All balls are green, so the event is certain — P(green) = 1.',
    },

    // ── Q3 Medium — probability as a fraction ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 4 red and 6 yellow counters. Find the probability of picking a red counter.',
      answer: '2/5',
      checkMode: 'auto',
      correctAnswer: '2/5',
      correctAnswers: ['2/5', '4/10'],
      explanation: 'Favourable outcomes: 4 red. Total outcomes: 4 + 6 = 10. P(red) = 4/10 = 2/5.',
    },

    // ── Q4 Medium — probability of odd number ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A dice is rolled. Find the probability of rolling an odd number.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6'],
      explanation: 'Odd numbers on a dice: 1, 3, 5 — 3 favourable outcomes out of 6 total. P(odd) = 3/6 = 1/2.',
    },

    // ── Q5 Hard — probability scale reasoning ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says the probability of an event can be greater than 1. Is he correct? Explain.',
      answer: 'No — probability is always between 0 and 1, since you cannot have more favourable outcomes than total outcomes.',
      checkMode: 'self',
    },

    // ── Q6 Easy — spinner probability ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A spinner has 5 equal sections numbered 1–5. Find the probability of landing on 3.',
      answer: '1/5',
      checkMode: 'auto',
      correctAnswer: '1/5',
      explanation: '1 favourable outcome (landing on 3) out of 5 equally likely outcomes. P(3) = 1/5.',
    },

    // ── Q7 Medium — complement probability ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 2 red, 3 blue and 5 green marbles. Find the probability of picking a marble that is not green.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '5/10'],
      explanation: 'Not green: 2 red + 3 blue = 5. Total: 2 + 3 + 5 = 10. P(not green) = 5/10 = 1/2.',
    },

    // ── Q8 Hard — relative frequency vs theoretical ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 40 times and gets heads 24 times. Find the relative frequency of heads and compare it to the theoretical probability.',
      answer: 'Relative frequency = 24/40 = 0.6. Theoretical probability = 0.5. The result is higher than expected but plausible with limited trials.',
      checkMode: 'self',
    },

    // ── Q9 Medium — relative frequency calculation ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo rolls a dice 30 times and gets a 5 exactly 4 times. Find the relative frequency of rolling a 5.',
      answer: '2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      correctAnswers: ['2/15', '4/30'],
      explanation: 'Relative frequency = times event occurred ÷ total trials = 4 ÷ 30 = 2/15.',
    },

    // ── Q10 Hard — law of large numbers reasoning ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says with more trials, relative frequency always exactly equals theoretical probability. Is she correct? Explain.',
      answer: 'No — relative frequency tends to get closer to theoretical probability with more trials, but it rarely matches it exactly due to natural variation.',
      checkMode: 'self',
    },

    // ── Q11 Medium — probability with replacement ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 6 white and 4 black balls. If Sipho picks one, replaces it, and picks again, find the probability he picks white both times.',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: 'P(white) = 6/10 = 3/5. With replacement: P(white and white) = 3/5 × 3/5 = 9/25.',
    },

    // ── Q12 Hard — compound condition probability ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A box has 8 cards numbered 1 to 8. Find the probability of picking a number that is both even and greater than 4.',
      answer: 'Even numbers greater than 4 are 6 and 8 — 2 favourable outcomes. Total = 8. Probability = 2/8 = 1/4.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have completed all of Grade 7 and mastered probability.' },
      { minScore: 9, message: 'Great work!' },
      { minScore: 6, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
