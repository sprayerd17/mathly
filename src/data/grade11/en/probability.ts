import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → independent events / first event / individual probabilities (#2563eb)
// orange → dependent events / second event / combined rule applied     (#ea580c)
// green  → product rule / combined probability / final answer          (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DEPENDENT AND INDEPENDENT EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dependent-independent-events',
      title: 'Dependent and Independent Events',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Two events are ${bl('independent')} if the outcome of one does <strong>not</strong> affect the probability of the other (e.g. flipping a coin twice). Two events are ${or('dependent')} if the outcome of one <strong>does</strong> affect the probability of the other (e.g. drawing cards without replacement). The ${gr('product rule')} for independent events states ${gr('P(A and B) = P(A) × P(B)')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('independent events')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('dependent events')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('product rule')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Independent Events</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of the first event has <strong>no effect</strong> on the probability of the second event. Knowing one happened tells you nothing extra about the other.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dependent Events</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of the first event <strong>changes</strong> the probability of the second event — usually because the sample space is reduced (e.g. no replacement).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Product Rule (independent events only)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If A and B are independent: ${gr('P(A and B) = P(A) × P(B)')}. This rule does <strong>not</strong> apply to dependent events.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to decide: independent or dependent?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Ask yourself: <em>"Does the outcome of the first trial change what is available or possible for the second trial?"</em> If yes → ${or('dependent')}. If no → ${bl('independent')}. The key phrase that signals dependent events is <strong>"without replacement"</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A coin is flipped and a dice is rolled. Are these independent events? Find P(heads and rolling a 6).',
          answer: `${bl('Independent')} events — ${gr('P(heads and 6) = 1/12')}`,
          steps: [
            `<strong>Are these independent?</strong> Yes — the coin flip does not affect the dice roll, and the dice roll does not affect the coin flip. The two trials are completely separate. These are ${bl('independent events')}.`,
            `Find the individual probabilities: ${bl('P(heads) = 1/2')} and ${bl('P(6) = 1/6')}.`,
            `Apply the ${gr('product rule')} for independent events: ${gr('P(heads and 6) = P(heads) × P(6) = 1/2 × 1/6 = 1/12')}.`,
            `<strong>Answer:</strong> The events are ${bl('independent')} and ${gr('P(heads and 6) = 1/12')}.`,
          ],
        },
        {
          question: 'A bag has 5 red and 3 blue balls. Sipho picks one ball, does NOT replace it, then picks again. Are these events independent?',
          answer: `${or('Dependent')} events — removing the first ball changes the probabilities for the second pick`,
          steps: [
            `<strong>Are these independent?</strong> No — these are ${or('dependent events')}. When Sipho removes the first ball without replacing it, the total number of balls in the bag decreases from 8 to 7.`,
            `The probability for the second pick changes depending on what was drawn first. For example, if the first ball was red, there are now only 4 red balls out of 7 remaining (not 5 out of 8).`,
            `Because the outcome of the first pick <strong>directly changes</strong> the sample space for the second pick, we cannot use the simple product rule — we must account for the ${or('dependency')}.`,
            `<strong>Answer:</strong> The events are ${or('dependent')}. The ${gr('product rule P(A and B) = P(A) × P(B)')} does <strong>not</strong> apply here.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between dependent and independent events with coin, dice and ball-drawing examples, and demonstrating the product rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VENN DIAGRAMS, CONTINGENCY TABLES AND TREE DIAGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'venn-contingency-tree',
      title: 'Venn Diagrams, Contingency Tables and Tree Diagrams for Events That Are Not Necessarily Independent',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We extend our use of <strong>Venn diagrams</strong>, <strong>contingency tables</strong> (two-way tables) and <strong>tree diagrams</strong> to solve probability problems where events may or may not be independent. These visual tools are essential for organising compound event information clearly before calculating.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first event')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second event')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined probability')}</span>` +
        `</div>` +

        // ── Three tools overview ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three organisational tools</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Venn Diagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Shows overlapping sets. The <strong>overlap</strong> is P(A and B). Use the formula: P(A or B) = P(A) + P(B) − P(A and B) to avoid double-counting.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Contingency Table</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A two-way table that organises outcomes by two categories. Row and column totals help you read off probabilities and test for independence quickly.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tree Diagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Shows sequential trials as branches. Multiply along branches to get ${gr('joint probabilities')}. Particularly useful when probabilities change between trials (dependent events).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Always organise before you calculate</p>` +
        `<p style="margin:0;color:#14532d;">Draw the diagram or fill the table <em>before</em> writing any probability. Mistakes almost always happen when students try to calculate without first seeing the complete picture.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '[DIAGRAM: Venn diagram with two overlapping circles labelled "Plays Sport" and "Plays Music", showing 15 in Sport only, 10 in Music only, 8 in the overlap, and 7 outside both, total 40 students] In a class of 40 students, 23 play sport, 18 play music, and 8 play both. Use a Venn diagram to find how many play neither.',
          answer: `${gr('7 students')} play neither sport nor music`,
          steps: [
            `Set up the ${bl('Venn diagram')} with two overlapping circles: ${bl('"Plays Sport"')} and ${or('"Plays Music"')}.`,
            `Place the ${bl('overlap')} first: 8 students play both sport and music. Write 8 in the intersection.`,
            `Sport only (not music): 23 − 8 = ${bl('15')}. Music only (not sport): 18 − 8 = ${or('10')}.`,
            `Count everyone in at least one circle: ${bl('15')} + 8 + ${or('10')} = 33 students.`,
            `Neither = Total − At least one = 40 − 33 = ${gr('7')}.`,
            `<strong>Answer:</strong> ${gr('7 students')} play neither sport nor music.`,
          ],
        },
        {
          question: '[DIAGRAM: A tree diagram showing two draws from a bag of 5 red and 3 blue balls without replacement, with branches for Red/Blue on the first draw and the adjusted probabilities for Red/Blue on the second draw] A bag has 5 red and 3 blue balls. Lerato draws two balls without replacement. Find P(both red) using a tree diagram approach.',
          answer: `${gr('P(both red) = 5/14')}`,
          steps: [
            `Draw the ${bl('first branch')}: ${bl('P(red first) = 5/8')} and P(blue first) = 3/8.`,
            `After drawing a red ball without replacement, 4 red and 3 blue balls remain (7 total). Draw the ${or('second branch')} from "red first": ${or('P(red second | red first) = 4/7')}.`,
            `Multiply along the "red then red" path to get the ${gr('combined probability')}: ${gr('P(both red) = 5/8 × 4/7 = 20/56 = 5/14')}.`,
            `<strong>Answer:</strong> ${gr('P(both red) = 5/14')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Venn diagram with two overlapping circles (Plays Sport 15, overlap 8, Plays Music 10, neither 7) and a tree diagram showing two draws without replacement from a bag of 5 red and 3 blue balls with adjusted second-branch probabilities" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to use a Venn diagram and a tree diagram to organise and solve probability problems involving dependent events" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE PRODUCT RULE FOR INDEPENDENT EVENTS AND COMBINING WITH OTHER RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-rule-combined',
      title: 'The Product Rule for Independent Events and Combining with Other Rules',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">We combine the ${bl('product rule')} for independent events (${bl('P(A and B) = P(A) × P(B)')}) with the ${or('addition rule')} (${or('P(A or B) = P(A) + P(B) − P(A and B)')}) and the ${or('complementary rule')} (${or('P(not A) = 1 − P(A)')}) to solve more complex, multi-step probability problems.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individual probabilities')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('combined rule applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── The three rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Product Rule')} (independent events): ${bl('P(A and B) = P(A) × P(B)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Addition Rule')}: ${or('P(A or B) = P(A) + P(B) − P(A and B)')}. Subtract the overlap to avoid double-counting.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Complementary Rule')}: ${or('P(not A) = 1 − P(A)')}. Useful when it is easier to find the probability that an event does <em>not</em> happen.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Strategy: complement is often easier</p>` +
        `<p style="margin:0;color:#14532d;">When a question asks for "at least one", it is almost always simpler to use the ${or('complementary rule')}: find the probability that <strong>none</strong> of the event occurs, then subtract from 1. This avoids listing many separate cases.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'P(A) = 0.4, P(B) = 0.5, and A and B are independent. Find P(A and B), then P(A or B).',
          answer: `${gr('P(A and B) = 0.2')} and ${gr('P(A or B) = 0.7')}`,
          steps: [
            `Identify the ${bl('individual probabilities')}: ${bl('P(A) = 0.4')} and ${bl('P(B) = 0.5')}.`,
            `Since A and B are ${bl('independent')}, apply the ${bl('product rule')}: ${or('P(A and B) = P(A) × P(B) = 0.4 × 0.5 = 0.2')}.`,
            `Apply the ${or('addition rule')}: ${or('P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.5 − 0.2 = 0.7')}.`,
            `<strong>Answers:</strong> ${gr('P(A and B) = 0.2')} and ${gr('P(A or B) = 0.7')}.`,
          ],
        },
        {
          question: 'Thabo flips a coin 3 times. Find the probability of getting at least one head.',
          answer: `${gr('P(at least one head) = 7/8')}`,
          steps: [
            `${or('Strategy — use the complement:')} "At least one head" includes many outcomes (H, HH, HHH, etc.). It is easier to find P(no heads at all) and subtract from 1.`,
            `${bl('P(tail on one flip) = 1/2')}. The three flips are ${bl('independent')}, so ${or('P(TTT) = 1/2 × 1/2 × 1/2 = 1/8')}.`,
            `Apply the ${or('complementary rule')}: ${or('P(at least one head) = 1 − P(no heads) = 1 − 1/8 = 7/8')}.`,
            `<strong>Answer:</strong> ${gr('P(at least one head) = 7/8')}.`,
          ],
        },
        {
          question: '[DIAGRAM: A two-way contingency table showing gender (male/female) against pass/fail status for 100 students, with totals: 40 males (30 passed, 10 failed) and 60 females (39 passed, 21 failed)] Using the contingency table, find P(passed | male) and P(passed | female), then determine if pass status is independent of gender.',
          answer: `Pass status is ${gr('NOT independent')} of gender`,
          steps: [
            `Read the ${bl('individual probabilities')} from the table: 30 out of 40 males passed, and 39 out of 60 females passed.`,
            `Compute conditional probabilities: ${bl('P(passed | male) = 30/40 = 0.75')} and ${bl('P(passed | female) = 39/60 = 0.65')}.`,
            `${or('Test for independence:')} If pass status were independent of gender, P(passed | male) would equal P(passed | female). Here ${or('0.75 ≠ 0.65')}, so the conditional probabilities differ.`,
            `<strong>Answer:</strong> Since the conditional probabilities are different, pass status is ${gr('NOT independent')} of gender.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two-way contingency table: rows are Male (30 passed, 10 failed, total 40) and Female (39 passed, 21 failed, total 60), columns are Passed and Failed, with grand total 100" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine the product rule, addition rule and complementary rule to solve multi-step probability problems, including reading a contingency table to test for independence" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — coin and dice: independent? ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A coin is flipped and a dice is rolled. Are these independent events?',
      answer: 'yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes'],
      explanation: 'The outcome of the coin flip has no effect on the dice roll — they are completely separate trials. These are independent events.',
    },

    // ── Q2 Medium — drawing without replacement: dependent? ──────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 6 red and 4 blue balls. Two are drawn without replacement. Are the draws independent?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
      correctAnswers: ['no', 'No'],
      explanation: 'Drawing without replacement reduces the total number of balls, so the probability of the second draw depends on what was drawn first — the events are dependent.',
    },

    // ── Q3 Hard — concept: two actions do not guarantee independence ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all probability events involving two actions are automatically independent. Is he correct? Explain.',
      answer: 'No — independence depends on whether the outcome of one event affects the other\'s probability, not simply on whether two actions occur; drawing without replacement is a clear example of dependent events.',
      checkMode: 'self',
    },

    // ── Q4 Easy — product rule for independent events ────────────────────────
    {
      difficulty: 'Easy',
      question: 'P(A) = 0.3, P(B) = 0.4, and A and B are independent. Find P(A and B).',
      answer: '0.12',
      checkMode: 'auto',
      correctAnswer: '0.12',
      explanation: 'Apply the product rule for independent events: P(A and B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.',
    },

    // ── Q5 Easy — Venn diagram: how many like neither ────────────────────────
    {
      difficulty: 'Easy',
      question: '[DIAGRAM: Venn diagram with two overlapping circles labelled \'Tea\' and \'Coffee\', showing 12 in Tea only, 9 in Coffee only, 6 in the overlap, and an unlabelled region outside both, total 35 surveyed] Using the diagram, find how many like neither tea nor coffee.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Total in at least one circle: 12 + 6 + 9 = 27. Neither = 35 − 27 = 8.',
    },

    // ── Q6 Medium — Venn diagram: P(tea only) ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the same diagram (Tea 12 only, Coffee 9 only, overlap 6, total 35 surveyed), find P(likes tea only).',
      answer: '12/35',
      checkMode: 'auto',
      correctAnswer: '12/35',
      explanation: 'Tea only means in the Tea circle but not the overlap: 12 people. P(tea only) = 12/35.',
    },

    // ── Q7 Hard — Venn diagram: P(tea or coffee) ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same diagram (Tea 12 only, Coffee 9 only, overlap 6, total 35 surveyed), find P(likes tea or coffee).',
      answer: '(12+9+6)/35 = 27/35.',
      checkMode: 'self',
    },

    // ── Q8 Hard — Venn diagram: test independence ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same diagram (Tea 12 only, Coffee 9 only, overlap 6, total 35 surveyed), determine whether liking tea and liking coffee are independent events, showing your reasoning.',
      answer: 'P(tea) = 18/35. P(coffee) = 15/35. P(tea) × P(coffee) = 18/35 × 15/35 ≈ 0.220. P(tea and coffee) = 6/35 ≈ 0.171. Since these are not equal, the events are not independent.',
      checkMode: 'self',
    },

    // ── Q9 Medium — tree diagram: P(at least one head) ───────────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: A tree diagram for two coin flips, showing all four branch outcomes HH, HT, TH, TT with probability 1/2 labelled on each branch] Using the tree diagram, find P(at least one head) in two coin flips.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'Outcomes with at least one head: HH, HT, TH — that is 3 out of 4 equally likely outcomes. P(at least one head) = 3/4. Alternatively, P(TT) = 1/4, so P(at least one head) = 1 − 1/4 = 3/4.',
    },

    // ── Q10 Hard — tree diagram: P(exactly one head) ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same tree diagram (two coin flips; outcomes HH, HT, TH, TT each with probability 1/4), find P(exactly one head).',
      answer: 'HT and TH both give exactly one head: 1/4 + 1/4 = 1/2.',
      checkMode: 'self',
    },

    // ── Q11 Medium — without replacement: P(both white) ──────────────────────
    {
      difficulty: 'Medium',
      question: 'A bag has 4 white and 6 black balls. Two are drawn without replacement. Find P(both white).',
      answer: '2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      explanation: 'P(white first) = 4/10. P(white second | white first) = 3/9. Combined = 4/10 × 3/9 = 12/90 = 2/15.',
    },

    // ── Q12 Hard — without replacement: P(both black) ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same bag (4 white, 6 black, drawn without replacement), find P(both black).',
      answer: 'P(black first) = 6/10. P(black second) = 5/9. Combined = 6/10 × 5/9 = 30/90 = 1/3.',
      checkMode: 'self',
    },

    // ── Q13 Medium — addition rule ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'P(A) = 0.5, P(B) = 0.3, P(A and B) = 0.15. Find P(A or B).',
      answer: '0.65',
      checkMode: 'auto',
      correctAnswer: '0.65',
      explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.5 + 0.3 − 0.15 = 0.65.',
    },

    // ── Q14 Hard — complementary rule: at least one head in 4 flips ──────────
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 4 times. Find the probability of getting at least one head, using the complementary rule.',
      answer: 'P(no heads) = (1/2)⁴ = 1/16. P(at least one head) = 1 − 1/16 = 15/16.',
      checkMode: 'self',
    },

    // ── Q15 Medium — contingency table: P(Maths | male) ──────────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: A two-way contingency table for 80 students showing gender against subject preference — 45 males with 28 preferring Maths and 17 preferring Science; 35 females with 15 preferring Maths and 20 preferring Science] Using the table, find P(prefers Maths | male).',
      answer: '28/45',
      checkMode: 'auto',
      correctAnswer: '28/45',
      explanation: 'P(prefers Maths | male) = 28/45. There are 28 males who prefer Maths out of 45 males in total.',
    },

    // ── Q16 Hard — contingency table: P(Maths | female) ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same table (45 males: 28 Maths, 17 Science; 35 females: 15 Maths, 20 Science), find P(prefers Maths | female).',
      answer: '15/35 = 3/7.',
      checkMode: 'self',
    },

    // ── Q17 Hard — contingency table: test independence ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same table (45 males: 28 Maths, 17 Science; 35 females: 15 Maths, 20 Science), determine whether subject preference is independent of gender, showing your reasoning.',
      answer: 'P(Maths|male) = 28/45 ≈ 0.622. P(Maths|female) = 15/35 ≈ 0.429. Since these differ significantly, subject preference is not independent of gender.',
      checkMode: 'self',
    },

    // ── Q18 Hard — at least one defective: complement ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'A box has 3 defective and 7 working items. Two items are selected without replacement. Find P(at least one defective).',
      answer: 'P(no defective) = 7/10 × 6/9 = 42/90 = 7/15. P(at least one defective) = 1 − 7/15 = 8/15.',
      checkMode: 'self',
    },

    // ── Q19 Hard — combined rules: mutually exclusive vs independent ──────────
    {
      difficulty: 'Hard',
      question: 'Amahle has events A and B where P(A) = 0.45, P(B) = 0.35, and P(A or B) = 0.7. Determine if A and B are independent, mutually exclusive, or neither.',
      answer: 'P(A and B) = P(A) + P(B) − P(A or B) = 0.45 + 0.35 − 0.7 = 0.1. Since P(A and B) ≠ 0, they are not mutually exclusive. Check independence: P(A) × P(B) = 0.45 × 0.35 = 0.1575 ≠ 0.1, so they are not independent either — the events are neither mutually exclusive nor independent.',
      checkMode: 'self',
    },

    // ── Q20 Hard — without replacement: two hearts from a standard deck ───────
    {
      difficulty: 'Hard',
      question: 'Thabo draws 2 cards from a standard deck without replacement. Find P(both are hearts).',
      answer: 'P(heart first) = 13/52. P(heart second) = 12/51. Combined = 13/52 × 12/51 = 156/2652 = 1/17.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered probability.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
