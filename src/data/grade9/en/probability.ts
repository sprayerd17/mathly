import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ───────────────────────────────────────
// rows / first branch / predicted frequency → blue   (#2563eb)
// columns / second branch / explanation     → green  (#16a34a)
// favourable outcomes / combined prob / actual frequency → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TWO-WAY TABLES FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'two-way-tables-compound-events',
      title: 'Two-Way Tables for Compound Events',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>compound event</strong> involves two or more events happening together. A <strong>two-way table</strong> organises outcomes of two events into ${bl('rows')} and ${gr('columns')}, making it easy to count ${or('favourable outcomes')} and calculate probability for combined events.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rows')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('columns')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('favourable outcomes')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to use a two-way table</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Label the rows')} with the outcomes of the first event and ${gr('label the columns')} with the outcomes of the second event.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Fill in each cell')} with the combined outcome. The total number of cells is the total number of outcomes in the sample space.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Count the favourable outcomes')} — the cells that match the event you want — and divide by the total number of outcomes.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Probability formula</p>` +
        `<p style="margin:0;color:#1e3a8a;">P(event) = ${or('number of favourable outcomes')} ÷ total number of outcomes. The two-way table makes both of these easy to read directly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho flips a coin and rolls a dice. Use a two-way table to find the probability of getting heads AND a number greater than 4.',
          answer: `P(heads AND >4) = ${or('2')} ÷ 12 = ${or('1/6')}`,
          steps: [
            `Set up the two-way table with ${bl('2 rows')} (heads, tails) and ${gr('6 columns')} (1, 2, 3, 4, 5, 6). This gives a total of 2 × 6 = <strong>12 outcomes</strong> in the sample space.`,
            `${or('Favourable outcomes')} are the cells where heads appears AND the dice shows a number greater than 4. The numbers greater than 4 are 5 and 6, so the favourable cells are (heads, 5) and (heads, 6). That gives ${or('2 favourable outcomes')}.`,
            `P(heads AND >4) = ${or('2')} ÷ 12 = <strong>1/6</strong>.`,
            `See the diagram below showing this two-way table.`,
          ],
        },
        {
          question: 'A two-way table shows 30 students by gender (male/female) and favourite subject (Maths/English). 12 males prefer Maths, 8 males prefer English, 6 females prefer Maths, 4 females prefer English. Find the probability that a randomly selected student is female AND prefers Maths.',
          answer: `P(female AND Maths) = ${or('6')} ÷ 30 = ${or('1/5')}`,
          steps: [
            `Read the total from the table: ${bl('rows')} are male and female, ${gr('columns')} are Maths and English. Total students = 12 + 8 + 6 + 4 = <strong>30</strong>.`,
            `${or('Favourable outcomes')} = the cell for female AND Maths = <strong>6</strong> students.`,
            `P(female AND Maths) = ${or('6')} ÷ 30 = <strong>1/5</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and use a two-way table to list all outcomes of a compound event and calculate probability" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a two-way table with coin flip outcomes (heads/tails) as rows and dice outcomes (1-6) as columns, with all 12 combinations shown in the grid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TREE DIAGRAMS FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tree-diagrams-compound-events',
      title: 'Tree Diagrams for Compound Events',
      icon: '🌳',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>tree diagram</strong> visually represents all possible outcomes of two or more events using branching paths. Each ${bl('branch')} represents a possible outcome, and we multiply probabilities along each branch path to find the probability of a specific combined outcome.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first branch')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('second branch')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('combined probability')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to draw and use a tree diagram</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Draw the first set of branches')} — one branch for each possible outcome of the first event. Write the probability on each branch.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Draw the second set of branches')} from the end of each first branch — one for each possible outcome of the second event. Write the probability on each branch.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiply along the path')} — to find the probability of a specific combined outcome, multiply the probabilities on each branch along that path.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key rule: multiply along branches, add across paths</p>` +
        `<p style="margin:0;color:#1e3a8a;">Multiply probabilities ${bl('along')} a single path to get the probability of that combined outcome. If the event can happen by more than one path, ${or('add')} the probabilities of those paths together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato flips a coin twice. Use a tree diagram to find the probability of getting heads both times.',
          answer: `P(heads both times) = ${or('1/2 × 1/2')} = ${or('1/4')}`,
          steps: [
            `${bl('First branch:')} The coin can land heads (H) or tails (T), each with probability ${bl('1/2')}.`,
            `${gr('Second branch:')} From each first outcome, the coin can again land heads or tails, each with probability ${gr('1/2')}.`,
            `Follow the heads-then-heads path: ${or('1/2 × 1/2')} = ${or('1/4')}.`,
            `There are 4 final outcomes (HH, HT, TH, TT), each with probability 1/4, which confirms our answer.`,
            `See the diagram below showing this tree diagram.`,
          ],
        },
        {
          question: 'A bag has 3 red and 2 blue balls. Thabo picks one ball, replaces it, then picks again. Use a tree diagram approach to find the probability of picking red both times.',
          answer: `P(red both times) = ${or('3/5 × 3/5')} = ${or('9/25')}`,
          steps: [
            `${bl('First branch:')} P(red) = ${bl('3/5')}, P(blue) = ${bl('2/5')}. (3 red out of 5 total.)`,
            `${gr('Second branch:')} Since the ball is replaced, the probabilities are the same as before. P(red) = ${gr('3/5')}, P(blue) = ${gr('2/5')}.`,
            `Follow the red-then-red path: ${or('3/5 × 3/5')} = ${or('9/25')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a tree diagram for a compound event and multiply probabilities along branch paths" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a tree diagram showing two coin flips, with branches for heads and tails at each stage, and probabilities labelled on each branch leading to four final outcomes" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PREDICTING RELATIVE FREQUENCY AND COMPARING WITH THEORETICAL
    //             PROBABILITY FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'predicting-relative-frequency',
      title: 'Predicting Relative Frequency and Comparing with Theoretical Probability for Compound Events',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">We determine the probabilities for outcomes of compound events and <strong>predict their relative frequency</strong> in simple experiments, then compare the ${bl('relative frequency')} with the calculated ${or('theoretical probability')} and ${gr('explain any possible differences')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('predicted frequency')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('actual frequency')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('explanation')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Predicted (expected) frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Theoretical probability × number of trials. This is the number of times we <em>expect</em> an outcome to occur.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Actual (relative) frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number of times the outcome <em>actually</em> occurred in the experiment. This may differ from the predicted frequency.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Why they differ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Random variation in a limited number of trials means actual results rarely match predictions exactly. With more trials, results tend to get closer to the theoretical value.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The law of large numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">The more trials you conduct, the closer the ${or('actual frequency')} will be to the ${bl('predicted frequency')}. Small differences are expected and normal — they do not mean the theoretical probability is wrong.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle predicts that flipping two coins 80 times should give heads-heads about 20 times (since probability = 1/4). She gets 23. Explain the difference.',
          answer: `${bl('Expected: 20')}. ${or('Actual: 23')}. ${gr('Small variation is normal due to randomness over a limited number of trials.')}`,
          steps: [
            `Calculate the ${bl('predicted frequency')}: 80 × 1/4 = ${bl('20')}. We expect heads-heads about 20 times.`,
            `${or('Actual frequency')}: Amahle got ${or('23')} heads-heads results.`,
            `${gr('Explain the difference')}: ${gr('Getting 23 is close to the expected 20 but not exact — this small variation is normal due to randomness over a limited number of trials.')} With more flips, the result would likely move closer to 20.`,
          ],
        },
        {
          question: 'Sipho uses a two-way table for rolling two dice, predicting that getting a sum of 7 should happen about 1/6 of the time over 180 rolls (30 times). He gets 35. Is this surprising?',
          answer: `${bl('Expected: 30')}. ${or('Actual: 35')}. ${gr('Not surprising — natural variation can occur with limited trials.')}`,
          steps: [
            `Calculate the ${bl('predicted frequency')}: 180 × 1/6 = ${bl('30')}. We expect a sum of 7 about 30 times.`,
            `${or('Actual frequency')}: Sipho got a sum of 7 on ${or('35')} rolls.`,
            `${gr('Is this surprising?')} ${gr('Getting 35 is somewhat higher than expected, but with a limited number of trials, this kind of variation can occur naturally. More rolls would likely bring the result closer to 30.')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to predict relative frequency for compound events and compare with theoretical probability, explaining natural variation" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a comparison showing predicted frequency versus actual frequency for a two-coin flip experiment over multiple trials, illustrating how results converge with more trials" />',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // TOPIC PRACTICE — Q1 through Q15
  // ─────────────────────────────────────────────────────────────────────────
  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A coin is flipped and a dice is rolled. How many total outcomes are there?',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'A coin has 2 outcomes (heads, tails) and a dice has 6 outcomes (1–6). Total outcomes = 2 × 6 = 12.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using a two-way table for a coin flip and dice roll, find the probability of getting tails AND an even number.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'Total outcomes = 12. Even numbers on a dice are 2, 4, 6. Favourable outcomes (tails AND even) = 3. P = 3/12 = 1/4.',
    },

    // ── Q3 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho's two-way table shows 40 students: 15 boys like sport, 5 boys like art, 12 girls like sport, 8 girls like art. Find the probability that a student is a boy who likes art.",
      answer: 'Total = 40. Favourable (boy and art) = 5. Probability = 5/40 = 1/8.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A coin is flipped twice. Use a tree diagram approach to find the probability of getting tails both times.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'P(tails first) = 1/2. P(tails second) = 1/2. Combined: 1/2 × 1/2 = 1/4.',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 4 red and 6 blue balls. Lerato picks one, replaces it, then picks again. Find the probability of picking blue both times.',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: 'P(blue) = 6/10 = 3/5. Since replaced, P(blue again) = 3/5. Combined: 3/5 × 3/5 = 9/25.',
    },

    // ── Q6 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says a tree diagram for 3 coin flips would have 8 final branches. Is he correct? Explain.',
      answer: 'Yes — each flip doubles the number of branches (2 × 2 × 2 = 8), since each flip has 2 possible outcomes.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A spinner has 4 equal sections (1, 2, 3, 4) and is spun twice. Find the probability of getting a 2 both times using a tree diagram approach.',
      answer: '1/16',
      checkMode: 'auto',
      correctAnswer: '1/16',
      explanation: 'P(2 on first spin) = 1/4. P(2 on second spin) = 1/4. Combined: 1/4 × 1/4 = 1/16.',
    },

    // ── Q8 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle's two-way table shows 50 people: 18 men prefer tea, 12 men prefer coffee, 14 women prefer tea, 6 women prefer coffee. Find the probability that someone is a woman who prefers coffee.",
      answer: 'Total = 50. Favourable = 6. Probability = 6/50 = 3/25.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two dice are rolled. Using a two-way table approach, find the probability of getting a sum of 9.',
      answer: '1/9',
      checkMode: 'auto',
      correctAnswer: '1/9',
      correctAnswers: ['1/9', '4/36'],
      explanation: 'Total outcomes = 36. Pairs that sum to 9: (3,6), (4,5), (5,4), (6,3) = 4 favourable outcomes. P = 4/36 = 1/9.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho predicts flipping two coins 60 times should give heads-tails (in either order) about 30 times. He gets 27. Is this reasonable? Explain.',
      answer: 'Expected = 60 × 1/2 = 30 (since P(heads-tails or tails-heads) = 1/2). Getting 27 is close, showing normal variation from limited trials.',
      checkMode: 'self',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 5 green and 3 yellow marbles. Lerato picks one, replaces it, then picks again. Find the probability of picking one green and one yellow (in either order).',
      answer: '15/32',
      checkMode: 'auto',
      correctAnswer: '15/32',
      explanation: 'P(green then yellow) = 5/8 × 3/8 = 15/64. P(yellow then green) = 3/8 × 5/8 = 15/64. Combined (either order) = 15/64 + 15/64 = 30/64 = 15/32.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo uses a tree diagram for picking 2 balls (without replacement) from a bag of 3 red and 2 blue. Find the probability of picking red both times.',
      answer: 'P(red first) = 3/5. P(red second, without replacement) = 2/4 = 1/2. Combined: 3/5 × 1/2 = 3/10.',
      checkMode: 'self',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle's two-way table for 2 dice rolls predicts a sum of 7 about 1/6 of the time over 120 rolls (20 times). She gets 24. Is this surprising? Explain.",
      answer: 'Expected = 120 × 1/6 = 20. Getting 24 is somewhat higher but plausible with natural variation; more rolls would likely bring results closer to 20.',
      checkMode: 'self',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says using a two-way table and a tree diagram for the same compound event will always give the same probability answer. Is he correct? Explain.',
      answer: 'Yes — both methods organise the same underlying sample space and probabilities, just in different visual formats, so they should always produce consistent results.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A bag has 4 red and 6 blue balls. Two balls are picked without replacement. Use a tree diagram approach to find the probability of getting one red and one blue (in either order).',
      answer: 'P(red then blue) = 4/10 × 6/9 = 24/90. P(blue then red) = 6/10 × 4/9 = 24/90. Combined (either order) = 24/90 + 24/90 = 48/90 = 8/15.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have completed all of Grade 9 and mastered probability.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
