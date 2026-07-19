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
        'Diagram of a bag with 4 red, 3 blue and 5 green balls, showing the probability formula P(blue) = 3 ÷ 12 = 1/4 applied step by step',

      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><path d="M40,45 Q40,18 70,18 Q100,18 100,45 L94,140 Q94,158 70,158 Q46,158 46,140 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M55,18 Q70,8 85,18" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="54" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="55" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="75" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="75" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="75" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="95" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="95" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="95" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="54" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="86" cy="115" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><text x="70" y="10" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">Bag: 12 balls</text><text x="145" y="55" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">4 red</text><text x="145" y="75" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">3 blue</text><text x="145" y="95" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">5 green</text><text x="70" y="172" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">P(blue) = 3 ÷ 12 = 1/4</text></svg>',
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
        'Bar chart comparing predicted (theoretical) frequency in blue with actual frequency in orange for a 100-flip coin experiment and a 60-roll dice experiment',

      diagramSvg:
        '<svg viewBox="0 0 220 175" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="middle">Predicted vs Actual Frequency</text><rect x="15" y="20" width="9" height="9" fill="#2563eb"/><text x="27" y="28" font-size="7.5" fill="#374151">Predicted</text><rect x="95" y="20" width="9" height="9" fill="#ea580c"/><text x="107" y="28" font-size="7.5" fill="#374151">Actual</text><line x1="25" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="25" y1="150" x2="25" y2="40" stroke="#0f1f3d" stroke-width="2"/><rect x="35" y="85" width="16" height="65" fill="#2563eb"/><text x="43" y="80" font-size="7.5" fill="#2563eb" font-weight="700" text-anchor="middle">0.50</text><rect x="55" y="89" width="16" height="61" fill="#ea580c"/><text x="63" y="84" font-size="7.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.47</text><text x="53" y="163" font-size="8" fill="#374151" text-anchor="middle">Coin (100 flips)</text><rect x="135" y="128" width="16" height="22" fill="#2563eb"/><text x="143" y="124" font-size="7.5" fill="#2563eb" font-weight="700" text-anchor="middle">0.17</text><rect x="155" y="120" width="16" height="30" fill="#ea580c"/><text x="163" y="116" font-size="7.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.23</text><text x="153" y="163" font-size="8" fill="#374151" text-anchor="middle">Dice (60 rolls)</text></svg>',
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
        'Tree diagram for flipping a coin and rolling a dice, showing the branch for heads and even highlighted in green with combined probability 1/2 × 1/2 = 1/4',

      diagramSvg:
        '<svg viewBox="0 0 240 205" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="100" r="4" fill="#374151"/><text x="20" y="90" font-size="8" fill="#374151" text-anchor="middle">Start</text><line x1="20" y1="100" x2="98" y2="50" stroke="#9ca3af" stroke-width="2"/><line x1="20" y1="100" x2="98" y2="150" stroke="#9ca3af" stroke-width="2"/><text x="50" y="68" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><text x="50" y="138" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><circle cx="100" cy="50" r="4" fill="#374151"/><text x="100" y="38" font-size="8" fill="#374151" font-weight="700" text-anchor="middle">Heads</text><circle cx="100" cy="150" r="4" fill="#374151"/><text x="100" y="168" font-size="8" fill="#374151" font-weight="700" text-anchor="middle">Tails</text><line x1="100" y1="50" x2="188" y2="25" stroke="#16a34a" stroke-width="2.5"/><line x1="100" y1="50" x2="188" y2="75" stroke="#9ca3af" stroke-width="2"/><line x1="100" y1="150" x2="188" y2="125" stroke="#9ca3af" stroke-width="2"/><line x1="100" y1="150" x2="188" y2="175" stroke="#9ca3af" stroke-width="2"/><text x="140" y="30" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">1/2</text><text x="140" y="68" font-size="8" fill="#374151" text-anchor="middle">1/2</text><text x="140" y="132" font-size="8" fill="#374151" text-anchor="middle">1/2</text><text x="140" y="172" font-size="8" fill="#374151" text-anchor="middle">1/2</text><circle cx="190" cy="25" r="4" fill="#16a34a"/><text x="196" y="22" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="start">H, Even</text><circle cx="190" cy="75" r="4" fill="#9ca3af"/><text x="196" y="78" font-size="8" fill="#6b7280" text-anchor="start">H, Odd</text><circle cx="190" cy="125" r="4" fill="#9ca3af"/><text x="196" y="122" font-size="8" fill="#6b7280" text-anchor="start">T, Even</text><circle cx="190" cy="175" r="4" fill="#9ca3af"/><text x="196" y="178" font-size="8" fill="#6b7280" text-anchor="start">T, Odd</text><text x="120" y="198" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">P(Heads and Even) = 1/2 × 1/2 = 1/4</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Probability Language/Scale as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A survey shows that the probability a shopper prefers tea over coffee is 1/8. Which word best describes this probability: certain, likely, unlikely or impossible?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: '1/8 = 0.125, which is much closer to 0 than to 1, so the event is unlikely (but not impossible, since it can still happen) ✓' },
        { difficulty: 'Easy', question: 'The probability that Kagiso answers a quiz question correctly is 5/8. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '62.5%', correctAnswers: ['62.5%', '62,5%', '62.5', '62,5'], explanation: '5/8 = 5 ÷ 8 = 0.625. As a percentage: 0.625 × 100 = 62.5% ✓' },
        { difficulty: 'Easy', question: 'A bus arrives late with a probability of 0,24. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '24/100'], explanation: '0.24 = 24/100, which simplifies to 6/25 (dividing top and bottom by 4) ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'A bag has 7 red counters, 5 blue counters and 8 green counters. Find the probability of picking a counter that is NOT red. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '13/20', correctAnswers: ['13/20'], explanation: 'Not red = 5 blue + 8 green = 13 counters.\nTotal outcomes = 7 + 5 + 8 = 20 counters.\nP(not red) = 13/20 (already in simplest form, since 13 is prime and does not divide 20) ✓' },
        { difficulty: 'Medium', question: 'A spinner has 10 equal sections, as shown: 4 maroon sections and 6 silver sections. Find the probability of landing on maroon, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.4', correctAnswers: ['0.4', '0,4', '2/5'], explanation: 'Favourable outcomes = 4 maroon sections.\nTotal outcomes = 10 sections.\nP(maroon) = 4/10 = 0.4 ✓', diagramSvg: '<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2"/><path d="M100,100 L100.00,20.00 A80,80 0 0,1 147.02,35.28 Z" fill="#7f1d1d" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,35.28 A80,80 0 0,1 176.09,75.28 Z" fill="#7f1d1d" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,75.28 A80,80 0 0,1 176.09,124.72 Z" fill="#7f1d1d" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,124.72 A80,80 0 0,1 147.02,164.72 Z" fill="#7f1d1d" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,164.72 A80,80 0 0,1 100.00,180.00 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L100.00,180.00 A80,80 0 0,1 52.98,164.72 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,164.72 A80,80 0 0,1 23.91,124.72 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,124.72 A80,80 0 0,1 23.91,75.28 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,75.28 A80,80 0 0,1 52.98,35.28 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,35.28 A80,80 0 0,1 100.00,20.00 Z" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><polygon points="100,25 93,108 107,108" fill="#0f1f3d"/><circle cx="100" cy="100" r="7" fill="#0f1f3d"/><rect x="30" y="200" width="12" height="12" fill="#7f1d1d" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="210" font-size="11" fill="#374151" font-weight="700">4 maroon</text><rect x="120" y="200" width="12" height="12" fill="#9ca3af" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="210" font-size="11" fill="#374151" font-weight="700">6 silver</text></svg>' },
        { difficulty: 'Medium', question: 'A bag has 15 counters in total, as shown: 9 are orange and the rest are purple. Find the probability of picking a purple counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Purple counters = 15 − 9 = 6.\nTotal outcomes = 15 counters.\nP(purple) = 6/15 = 2/5 = 40% ✓', diagramSvg: '<svg viewBox="0 0 200 235" xmlns="http://www.w3.org/2000/svg"><path d="M50,55 Q50,25 90,25 Q130,25 130,55 L122,175 Q122,195 90,195 Q58,195 58,175 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M70,25 Q90,12 110,25" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="64" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="120" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="73" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="91" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="109" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><rect x="30" y="205" width="12" height="12" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="215" font-size="11" fill="#374151" font-weight="700">9 orange</text><rect x="120" y="205" width="12" height="12" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="215" font-size="11" fill="#374151" font-weight="700">6 purple</text></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections split between three teams: Team A has 5 sections, Team B has 4 sections, and Team C has 3 sections. Find the probability of landing on Team A or Team C.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '8/12'], explanation: 'Favourable outcomes = Team A + Team C = 5 + 3 = 8 sections.\nTotal outcomes = 12 sections.\nP(A or C) = 8/12 = 2/3 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a spinner with 5 equal sections coloured red, blue, green, yellow and purple is spun together, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting tails and green.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Total outcomes = 2 coin outcomes × 5 spinner outcomes = 10.\nFavourable outcomes = 1 (tails and green).\nP(tails and green) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">G</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two normal dice are rolled together. Find the probability that the product of the two numbers rolled is 12.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs whose product is 12: (2,6), (3,4), (4,3), (6,2) — that is 4 favourable outcomes.\nP(product of 12) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'A café lets Thandeka choose 1 of 4 breads, 1 of 3 fillings and 1 of 2 sauces to build a sandwich. How many different sandwiches are possible, and what is the probability that Thandeka randomly ends up with one specific sandwich combination?', checkMode: 'auto', correctAnswer: '24 sandwiches, 1/24', correctAnswers: ['24 sandwiches, 1/24', '24, 1/24', '24 and 1/24'], explanation: 'Total sandwiches = 4 breads × 3 fillings × 2 sauces = 24.\nP(one specific sandwich) = 1/24, since there is only 1 favourable outcome out of 24 total ✓' },
        { difficulty: 'Hard', question: 'Explain why the sample space for rolling two dice together has 36 outcomes, and not 21 (the number of ways to choose two different or matching numbers from 1 to 6 without caring which dice they landed on).', checkMode: 'self', answer: 'Each dice can land on any of 6 numbers, and the two dice are rolled independently, so every outcome on the first dice can be paired with every outcome on the second dice, giving 6 × 6 = 36 outcomes in total. The 21 count is wrong because it treats outcomes like "a 2 and a 5" as a single result, ignoring which dice showed which number. But rolling a 2 on dice A and a 5 on dice B is a different outcome from rolling a 5 on dice A and a 2 on dice B — these are two separate, equally likely outcomes in the sample space, not one. Counting only 21 unordered combinations undercounts the true sample space and would make the probabilities incorrect.' },

        // Block 4 — Theoretical Probability Computation with Combined Conditions (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Raffle tickets are numbered 1 to 40. Find the probability that a randomly drawn ticket number is even AND a multiple of 5. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '4/40'], explanation: 'A number that is even AND a multiple of 5 must be a multiple of 10: 10, 20, 30, 40 — that is 4 favourable outcomes.\nTotal outcomes = 40.\nP(even and multiple of 5) = 4/40 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 20 equal sections numbered 1 to 20. Find the probability of landing on a prime number, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.4', correctAnswers: ['0.4', '0,4', '2/5'], explanation: 'Prime numbers from 1-20: 2, 3, 5, 7, 11, 13, 17, 19 — that is 8 favourable outcomes.\nTotal outcomes = 20.\nP(prime) = 8/20 = 2/5 = 0.4 ✓' },
        { difficulty: 'Medium-Hard', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing a face card (a jack, queen or king). Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/13', correctAnswers: ['3/13', '12/52'], explanation: 'Face cards = 4 suits × 3 face cards (jack, queen, king) = 12.\nTotal outcomes = 52 cards.\nP(face card) = 12/52 = 3/13 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A spinner has 5 equal sections. Zanele predicts that spinning it 200 times should give about 40 landings on red (since P(red) = 1/5). She actually records 52 landings on red. Find the difference between her actual and predicted frequency, as a percentage of the total trials.', checkMode: 'auto', correctAnswer: '6%', correctAnswers: ['6%', '6'], explanation: 'Predicted frequency = 200 × 1/5 = 40.\nDifference = 52 − 40 = 12.\nAs a percentage of trials: 12 ÷ 200 = 0.06 = 6% ✓' },
        { difficulty: 'Medium-Hard', question: 'A dice is rolled 180 times. The table below shows the results:\n1: 28, 2: 31, 3: 35, 4: 29, 5: 27, 6: 30.\nFind the relative frequency of rolling a number greater than 4, as a simplified fraction.', checkMode: 'auto', correctAnswer: '19/60', correctAnswers: ['19/60', '57/180'], explanation: 'Numbers greater than 4 are 5 and 6: 27 + 30 = 57 results.\nRelative frequency = 57 ÷ 180 = 57/180 = 19/60 ✓' },
        { difficulty: 'Hard', question: 'A factory tests 500 lightbulbs and finds that 15 are defective. Estimate the probability that a randomly selected lightbulb from this batch is defective, and explain whether this is a theoretical probability or an experimental (relative frequency) probability.', checkMode: 'self', answer: 'Estimated probability = number of defective bulbs ÷ total bulbs tested = 15/500 = 3/100 = 0.03 (3%). This is an experimental probability (a relative frequency), not a theoretical probability, because it is based on the actual results of testing real lightbulbs rather than on reasoning about equally likely outcomes before any testing took place. If a different batch of 500 bulbs were tested, the relative frequency could come out slightly different from 3%.' },

        // Block 6 — Combined Events: With vs Without Replacement (17-19, Hard)
        { difficulty: 'Hard', question: 'A bag has 4 red counters and 6 blue counters. Bongiwe picks a counter, does NOT replace it, then picks a second counter. Find the probability that both counters are red.', checkMode: 'auto', correctAnswer: '2/15', correctAnswers: ['2/15', '12/90'], explanation: 'P(red first) = 4/10 = 2/5.\nSince the counter is not replaced, only 9 counters remain and only 3 are red: P(red second) = 3/9 = 1/3.\nP(both red) = 2/5 × 1/3 = 2/15 ✓' },
        { difficulty: 'Hard', question: 'Using the same bag from the previous question (4 red counters and 6 blue counters), suppose Bongiwe instead replaces the first counter before picking again. Find the probability that both counters are red in this case.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25', '16/100'], explanation: 'Since the counter is replaced, the bag has the same 4 red out of 10 counters for both picks.\nP(red first) = 4/10 = 2/5. P(red second) = 4/10 = 2/5.\nP(both red) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'Compare your answers to the previous two questions. Why is the probability of picking two red counters lower when the first counter is NOT replaced than when it IS replaced? Use the words "independent" and "dependent" in your explanation.', checkMode: 'self', answer: 'Without replacement, the probability is 2/15 ≈ 0.133, which is lower than the with-replacement probability of 4/25 = 0.16. This is because when the counter is not replaced, the two picks are dependent events — removing a red counter on the first pick reduces both the number of red counters and the total number of counters left in the bag, making a second red pick less likely (3 red out of 9, instead of 4 red out of 10). When the counter is replaced, the two picks are independent events — the bag is restored to its original state before the second pick, so the probability of red stays at 4/10 = 2/5 both times, giving a higher combined probability.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability language, sample spaces, theoretical and experimental probability, and combined events with and without replacement.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 8 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sample spaces and combined events (with vs without replacement), then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Probability Language/Scale as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A weather forecaster gives a 7/8 chance of sunshine tomorrow. Which word best describes this probability: certain, likely, unlikely or impossible?', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: '7/8 = 0.875, which is much closer to 1 than to 0, so the event is likely (but not certain, since it could still not happen) ✓' },
        { difficulty: 'Easy', question: 'The probability that Palesa scores a goal from a penalty is 3/8. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '37.5%', correctAnswers: ['37.5%', '37,5%', '37.5', '37,5'], explanation: '3/8 = 3 ÷ 8 = 0.375. As a percentage: 0.375 × 100 = 37.5% ✓' },
        { difficulty: 'Easy', question: 'A train arrives late with a probability of 0,36. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '9/25', correctAnswers: ['9/25', '36/100'], explanation: '0.36 = 36/100, which simplifies to 9/25 (dividing top and bottom by 4) ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'A bag has 6 red counters, 9 blue counters and 5 green counters. Find the probability of picking a counter that is NOT red. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '14/20'], explanation: 'Not red = 9 blue + 5 green = 14 counters.\nTotal outcomes = 6 + 9 + 5 = 20 counters.\nP(not red) = 14/20 = 7/10 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 10 equal sections, as shown: 7 gold sections and 3 lime sections. Find the probability of landing on gold, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.7', correctAnswers: ['0.7', '0,7', '7/10'], explanation: 'Favourable outcomes = 7 gold sections.\nTotal outcomes = 10 sections.\nP(gold) = 7/10 = 0.7 ✓', diagramSvg: '<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2"/><path d="M100,100 L100.00,20.00 A80,80 0 0,1 147.02,35.28 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,35.28 A80,80 0 0,1 176.09,75.28 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,75.28 A80,80 0 0,1 176.09,124.72 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,124.72 A80,80 0 0,1 147.02,164.72 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,164.72 A80,80 0 0,1 100.00,180.00 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L100.00,180.00 A80,80 0 0,1 52.98,164.72 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,164.72 A80,80 0 0,1 23.91,124.72 Z" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,124.72 A80,80 0 0,1 23.91,75.28 Z" fill="#84cc16" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,75.28 A80,80 0 0,1 52.98,35.28 Z" fill="#84cc16" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,35.28 A80,80 0 0,1 100.00,20.00 Z" fill="#84cc16" stroke="#0f1f3d" stroke-width="1"/><polygon points="100,25 93,108 107,108" fill="#0f1f3d"/><circle cx="100" cy="100" r="7" fill="#0f1f3d"/><rect x="30" y="200" width="12" height="12" fill="#eab308" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="210" font-size="11" fill="#374151" font-weight="700">7 gold</text><rect x="120" y="200" width="12" height="12" fill="#84cc16" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="210" font-size="11" fill="#374151" font-weight="700">3 lime</text></svg>' },
        { difficulty: 'Medium', question: 'A bag has 15 counters in total, as shown: 6 are orange and the rest are purple. Find the probability of picking a purple counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '60%', correctAnswers: ['60%', '60'], explanation: 'Purple counters = 15 − 6 = 9.\nTotal outcomes = 15 counters.\nP(purple) = 9/15 = 3/5 = 60% ✓', diagramSvg: '<svg viewBox="0 0 200 235" xmlns="http://www.w3.org/2000/svg"><path d="M50,55 Q50,25 90,25 Q130,25 130,55 L122,175 Q122,195 90,195 Q58,195 58,175 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M70,25 Q90,12 110,25" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="64" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="96" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="96" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="120" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="73" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="91" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="109" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><rect x="30" y="205" width="12" height="12" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="215" font-size="11" fill="#374151" font-weight="700">6 orange</text><rect x="120" y="205" width="12" height="12" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="215" font-size="11" fill="#374151" font-weight="700">9 purple</text></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections split between three teams: Team A has 2 sections, Team B has 6 sections, and Team C has 4 sections. Find the probability of landing on Team B or Team C.', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6', '10/12'], explanation: 'Favourable outcomes = Team B + Team C = 6 + 4 = 10 sections.\nTotal outcomes = 12 sections.\nP(B or C) = 10/12 = 5/6 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a spinner with 5 equal sections coloured orange, white, grey, black and teal is spun together, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting heads and black.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Total outcomes = 2 coin outcomes × 5 spinner outcomes = 10.\nFavourable outcomes = 1 (heads and black).\nP(heads and black) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">O</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">W</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gy</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Bk</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two normal dice are rolled together. Find the probability that the product of the two numbers rolled is 8.', checkMode: 'auto', correctAnswer: '1/18', correctAnswers: ['1/18', '2/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs whose product is 8: (2,4), (4,2) — that is 2 favourable outcomes.\nP(product of 8) = 2/36 = 1/18 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pizza shop lets Sizwe choose 1 of 3 bases, 1 of 5 toppings and 1 of 2 cheeses to build a pizza. How many different pizzas are possible, and what is the probability that Sizwe randomly ends up with one specific pizza combination?', checkMode: 'auto', correctAnswer: '30 pizzas, 1/30', correctAnswers: ['30 pizzas, 1/30', '30, 1/30', '30 and 1/30'], explanation: 'Total pizzas = 3 bases × 5 toppings × 2 cheeses = 30.\nP(one specific pizza) = 1/30, since there is only 1 favourable outcome out of 30 total ✓' },
        { difficulty: 'Hard', question: 'Explain why the sample space for flipping three coins together has 8 outcomes, and not 4 (the number of possible totals of heads, from 0 heads to 3 heads).', checkMode: 'self', answer: 'Each coin can land on heads or tails independently, and there are 3 coins, so the sample space has 2 × 2 × 2 = 8 outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. Counting only 4 "totals" (0, 1, 2 or 3 heads) is wrong because it ignores which coins landed on heads. For example, getting exactly 1 head can happen in three different ways — HTT, THT or TTH — and these are three separate, equally likely outcomes, not one. Grouping them into a single "1 head" category would make each total appear equally likely, which is incorrect, since 1 head (3 ways) is actually three times more likely than 3 heads (1 way).' },

        // Block 4 — Theoretical Probability Computation with Combined Conditions (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Locker numbers run from 1 to 50. Find the probability that a randomly chosen locker number is even AND a multiple of 5. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '5/50'], explanation: 'A number that is even AND a multiple of 5 must be a multiple of 10: 10, 20, 30, 40, 50 — that is 5 favourable outcomes.\nTotal outcomes = 50.\nP(even and multiple of 5) = 5/50 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 24 equal sections numbered 1 to 24. Find the probability of landing on a prime number, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.375', correctAnswers: ['0.375', '0,375', '3/8'], explanation: 'Prime numbers from 1-24: 2, 3, 5, 7, 11, 13, 17, 19, 23 — that is 9 favourable outcomes.\nTotal outcomes = 24.\nP(prime) = 9/24 = 3/8 = 0.375 ✓' },
        { difficulty: 'Medium-Hard', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing a red face card (a jack, queen or king of hearts or diamonds). Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/26', correctAnswers: ['3/26', '6/52'], explanation: 'Red face cards = 2 red suits × 3 face cards (jack, queen, king) = 6.\nTotal outcomes = 52 cards.\nP(red face card) = 6/52 = 3/26 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A spinner has 4 equal sections. Bongani predicts that spinning it 240 times should give about 60 landings on blue (since P(blue) = 1/4). He actually records 45 landings on blue. Find the difference between his actual and predicted frequency, as a percentage of the total trials.', checkMode: 'auto', correctAnswer: '6.25%', correctAnswers: ['6.25%', '6,25%', '6.25', '6,25'], explanation: 'Predicted frequency = 240 × 1/4 = 60.\nDifference = 60 − 45 = 15.\nAs a percentage of trials: 15 ÷ 240 = 0.0625 = 6.25% ✓' },
        { difficulty: 'Medium-Hard', question: 'A dice is rolled 240 times. The table below shows the results:\n1: 38, 2: 42, 3: 37, 4: 41, 5: 39, 6: 43.\nFind the relative frequency of rolling a number greater than 4, as a simplified fraction.', checkMode: 'auto', correctAnswer: '41/120', correctAnswers: ['41/120', '82/240'], explanation: 'Numbers greater than 4 are 5 and 6: 39 + 43 = 82 results.\nRelative frequency = 82 ÷ 240 = 82/240 = 41/120 ✓' },
        { difficulty: 'Hard', question: 'A quality controller checks 400 phone screens and finds that 12 are scratched. Estimate the probability that a randomly selected screen from this batch is scratched, and explain whether this is a theoretical probability or an experimental (relative frequency) probability.', checkMode: 'self', answer: 'Estimated probability = number of scratched screens ÷ total screens checked = 12/400 = 3/100 = 0.03 (3%). This is an experimental probability (a relative frequency), not a theoretical probability, because it is based on the actual results of checking real phone screens rather than on reasoning about equally likely outcomes before any checking took place. If a different batch of 400 screens were checked, the relative frequency could come out slightly different from 3%.' },

        // Block 6 — Combined Events: With vs Without Replacement (17-19, Hard)
        { difficulty: 'Hard', question: 'A bag has 5 red counters and 5 blue counters. Karabo picks a counter, does NOT replace it, then picks a second counter. Find the probability that both counters are red.', checkMode: 'auto', correctAnswer: '2/9', correctAnswers: ['2/9', '20/90'], explanation: 'P(red first) = 5/10 = 1/2.\nSince the counter is not replaced, only 9 counters remain and only 4 are red: P(red second) = 4/9.\nP(both red) = 1/2 × 4/9 = 4/18 = 2/9 ✓' },
        { difficulty: 'Hard', question: 'Using the same bag from the previous question (5 red counters and 5 blue counters), suppose Karabo instead replaces the first counter before picking again. Find the probability that both counters are red in this case.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'Since the counter is replaced, the bag has the same 5 red out of 10 counters for both picks.\nP(red first) = 5/10 = 1/2. P(red second) = 5/10 = 1/2.\nP(both red) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'Compare your answers to the previous two questions. Why is the probability of picking two red counters lower when the first counter is NOT replaced than when it IS replaced? Use the words "independent" and "dependent" in your explanation.', checkMode: 'self', answer: 'Without replacement, the probability is 2/9 ≈ 0.222, which is lower than the with-replacement probability of 1/4 = 0.25. This is because when the counter is not replaced, the two picks are dependent events — removing a red counter on the first pick reduces both the number of red counters and the total number of counters left in the bag, making a second red pick less likely (4 red out of 9, instead of 5 red out of 10). When the counter is replaced, the two picks are independent events — the bag is restored to its original state before the second pick, so the probability of red stays at 5/10 = 1/2 both times, giving a higher combined probability.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability language, sample spaces, theoretical and experimental probability, and combined events with and without replacement.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 8 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sample spaces and combined events (with vs without replacement), then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Probability Language/Scale as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A vending machine jams with a probability of 1/10. Which word best describes this probability: certain, likely, unlikely or impossible?', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: '1/10 = 0.1, which is much closer to 0 than to 1, so the event is unlikely (but not impossible, since it can still happen) ✓' },
        { difficulty: 'Easy', question: 'The probability that Ayanda picks a winning ticket in a competition is 9/40. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '22.5%', correctAnswers: ['22.5%', '22,5%', '22.5', '22,5'], explanation: '9/40 = 9 ÷ 40 = 0.225. As a percentage: 0.225 × 100 = 22.5% ✓' },
        { difficulty: 'Easy', question: 'A printer jams with a probability of 0,44. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25', '44/100'], explanation: '0.44 = 44/100, which simplifies to 11/25 (dividing top and bottom by 4) ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Medium', question: 'A bag has 8 red counters, 7 blue counters and 5 green counters. Find the probability of picking a counter that is NOT red. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '12/20'], explanation: 'Not red = 7 blue + 5 green = 12 counters.\nTotal outcomes = 8 + 7 + 5 = 20 counters.\nP(not red) = 12/20 = 3/5 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 10 equal sections, as shown: 3 navy sections and 7 coral sections. Find the probability of landing on navy, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.3', correctAnswers: ['0.3', '0,3', '3/10'], explanation: 'Favourable outcomes = 3 navy sections.\nTotal outcomes = 10 sections.\nP(navy) = 3/10 = 0.3 ✓', diagramSvg: '<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2"/><path d="M100,100 L100.00,20.00 A80,80 0 0,1 147.02,35.28 Z" fill="#1e3a8a" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,35.28 A80,80 0 0,1 176.09,75.28 Z" fill="#1e3a8a" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,75.28 A80,80 0 0,1 176.09,124.72 Z" fill="#1e3a8a" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L176.09,124.72 A80,80 0 0,1 147.02,164.72 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L147.02,164.72 A80,80 0 0,1 100.00,180.00 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L100.00,180.00 A80,80 0 0,1 52.98,164.72 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,164.72 A80,80 0 0,1 23.91,124.72 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,124.72 A80,80 0 0,1 23.91,75.28 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L23.91,75.28 A80,80 0 0,1 52.98,35.28 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><path d="M100,100 L52.98,35.28 A80,80 0 0,1 100.00,20.00 Z" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><polygon points="100,25 93,108 107,108" fill="#0f1f3d"/><circle cx="100" cy="100" r="7" fill="#0f1f3d"/><rect x="30" y="200" width="12" height="12" fill="#1e3a8a" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="210" font-size="11" fill="#374151" font-weight="700">3 navy</text><rect x="120" y="200" width="12" height="12" fill="#f87171" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="210" font-size="11" fill="#374151" font-weight="700">7 coral</text></svg>' },
        { difficulty: 'Medium', question: 'A bag has 15 counters in total, as shown: 12 are orange and the rest are purple. Find the probability of picking a purple counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Purple counters = 15 − 12 = 3.\nTotal outcomes = 15 counters.\nP(purple) = 3/15 = 1/5 = 20% ✓', diagramSvg: '<svg viewBox="0 0 200 235" xmlns="http://www.w3.org/2000/svg"><path d="M50,55 Q50,25 90,25 Q130,25 130,55 L122,175 Q122,195 90,195 Q58,195 58,175 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M70,25 Q90,12 110,25" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="64" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="72" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="96" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="64" cy="120" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="120" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="100" cy="120" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="118" cy="120" r="8" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><circle cx="73" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="91" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><circle cx="109" cy="144" r="8" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><rect x="30" y="205" width="12" height="12" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="46" y="215" font-size="11" fill="#374151" font-weight="700">12 orange</text><rect x="120" y="205" width="12" height="12" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1"/><text x="136" y="215" font-size="11" fill="#374151" font-weight="700">3 purple</text></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections split between three teams: Team A has 7 sections, Team B has 2 sections, and Team C has 3 sections. Find the probability of landing on Team A or Team B.', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '9/12'], explanation: 'Favourable outcomes = Team A + Team B = 7 + 2 = 9 sections.\nTotal outcomes = 12 sections.\nP(A or B) = 9/12 = 3/4 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium-Hard) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a spinner with 5 equal sections numbered 1 to 5 is spun together, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting tails and 3.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Total outcomes = 2 coin outcomes × 5 spinner outcomes = 10.\nFavourable outcomes = 1 (tails and 3).\nP(tails and 3) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two normal dice are rolled together. Find the probability that the product of the two numbers rolled is 6.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs whose product is 6: (1,6), (2,3), (3,2), (6,1) — that is 4 favourable outcomes.\nP(product of 6) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'An ice-cream shop lets Nomvula choose 1 of 5 flavours, 1 of 3 cones and 1 of 2 toppings to build an order. How many different orders are possible, and what is the probability that Nomvula randomly ends up with one specific order combination?', checkMode: 'auto', correctAnswer: '30 orders, 1/30', correctAnswers: ['30 orders, 1/30', '30, 1/30', '30 and 1/30'], explanation: 'Total orders = 5 flavours × 3 cones × 2 toppings = 30.\nP(one specific order) = 1/30, since there is only 1 favourable outcome out of 30 total ✓' },
        { difficulty: 'Hard', question: 'Explain why the sample space for choosing one starter from 3 starters and one main course from 4 mains has 12 outcomes, and not 7 (the number of starters plus mains).', checkMode: 'self', answer: 'Choosing a starter and a main are two separate, independent choices that are made together, so every one of the 3 starters can be paired with every one of the 4 mains, giving 3 × 4 = 12 possible starter-and-main combinations. Adding 3 + 4 = 7 is incorrect because it only counts choosing a starter OR a main on its own, not both together. To list the full sample space of complete meal combinations, each starter must be matched with each possible main in turn, which is why multiplication (not addition) gives the correct number of outcomes.' },

        // Block 4 — Theoretical Probability Computation with Combined Conditions (11-13, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Lucky draw numbers run from 1 to 60. Find the probability that a randomly chosen number is even AND a multiple of 5. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '6/60'], explanation: 'A number that is even AND a multiple of 5 must be a multiple of 10: 10, 20, 30, 40, 50, 60 — that is 6 favourable outcomes.\nTotal outcomes = 60.\nP(even and multiple of 5) = 6/60 = 1/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 30 equal sections numbered 1 to 30. Find the probability of landing on a prime number, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.33', correctAnswers: ['0.33', '0,33', '1/3', '0.333', '0,333'], explanation: 'Prime numbers from 1-30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 — that is 10 favourable outcomes.\nTotal outcomes = 30.\nP(prime) = 10/30 = 1/3 ≈ 0.33 ✓' },
        { difficulty: 'Medium-Hard', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing a black face card (a jack, queen or king of clubs or spades). Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/26', correctAnswers: ['3/26', '6/52'], explanation: 'Black face cards = 2 black suits × 3 face cards (jack, queen, king) = 6.\nTotal outcomes = 52 cards.\nP(black face card) = 6/52 = 3/26 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A spinner has 8 equal sections. Naledi predicts that spinning it 320 times should give about 40 landings on white (since P(white) = 1/8). She actually records 56 landings on white. Find the difference between her actual and predicted frequency, as a percentage of the total trials.', checkMode: 'auto', correctAnswer: '5%', correctAnswers: ['5%', '5'], explanation: 'Predicted frequency = 320 × 1/8 = 40.\nDifference = 56 − 40 = 16.\nAs a percentage of trials: 16 ÷ 320 = 0.05 = 5% ✓' },
        { difficulty: 'Medium-Hard', question: 'A dice is rolled 300 times. The table below shows the results:\n1: 48, 2: 52, 3: 49, 4: 47, 5: 53, 6: 51.\nFind the relative frequency of rolling a number greater than 4, as a simplified fraction.', checkMode: 'auto', correctAnswer: '26/75', correctAnswers: ['26/75', '104/300'], explanation: 'Numbers greater than 4 are 5 and 6: 53 + 51 = 104 results.\nRelative frequency = 104 ÷ 300 = 104/300 = 26/75 ✓' },
        { difficulty: 'Hard', question: 'A nursery checks 250 seedlings and finds that 20 fail to sprout. Estimate the probability that a randomly selected seedling from this batch fails to sprout, and explain whether this is a theoretical probability or an experimental (relative frequency) probability.', checkMode: 'self', answer: 'Estimated probability = number of seedlings that failed to sprout ÷ total seedlings checked = 20/250 = 2/25 = 0.08 (8%). This is an experimental probability (a relative frequency), not a theoretical probability, because it is based on the actual results of checking real seedlings rather than on reasoning about equally likely outcomes before any checking took place. If a different batch of 250 seedlings were checked, the relative frequency could come out slightly different from 8%.' },

        // Block 6 — Combined Events: With vs Without Replacement (17-19, Hard)
        { difficulty: 'Hard', question: 'A bag has 3 red counters and 7 blue counters. Ntando picks a counter, does NOT replace it, then picks a second counter. Find the probability that both counters are red.', checkMode: 'auto', correctAnswer: '1/15', correctAnswers: ['1/15', '6/90'], explanation: 'P(red first) = 3/10.\nSince the counter is not replaced, only 9 counters remain and only 2 are red: P(red second) = 2/9.\nP(both red) = 3/10 × 2/9 = 6/90 = 1/15 ✓' },
        { difficulty: 'Hard', question: 'Using the same bag from the previous question (3 red counters and 7 blue counters), suppose Ntando instead replaces the first counter before picking again. Find the probability that both counters are red in this case.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'Since the counter is replaced, the bag has the same 3 red out of 10 counters for both picks.\nP(red first) = 3/10. P(red second) = 3/10.\nP(both red) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'Compare your answers to the previous two questions. Why is the probability of picking two red counters lower when the first counter is NOT replaced than when it IS replaced? Use the words "independent" and "dependent" in your explanation.', checkMode: 'self', answer: 'Without replacement, the probability is 1/15 ≈ 0.067, which is lower than the with-replacement probability of 9/100 = 0.09. This is because when the counter is not replaced, the two picks are dependent events — removing a red counter on the first pick reduces both the number of red counters and the total number of counters left in the bag, making a second red pick less likely (2 red out of 9, instead of 3 red out of 10). When the counter is replaced, the two picks are independent events — the bag is restored to its original state before the second pick, so the probability of red stays at 3/10 both times, giving a higher combined probability.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability language, sample spaces, theoretical and experimental probability, and combined events with and without replacement.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 8 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit sample spaces and combined events (with vs without replacement), then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
