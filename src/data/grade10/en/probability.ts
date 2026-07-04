import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// theoretical probability → blue   (#2563eb)
// relative frequency      → orange (#ea580c)
// comparison / sum = 1    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — RELATIVE FREQUENCY VS THEORETICAL PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relative-frequency-vs-theoretical',
      title: 'Relative Frequency vs Theoretical Probability',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Theoretical probability</strong> is calculated using the formula ${bl('favourable outcomes / total outcomes')}, assuming all outcomes are equally likely. <strong>Relative frequency</strong> is found by actually performing an experiment and recording results. With a large number of trials, ${or('relative frequency')} tends to approach the ${bl('theoretical probability')}, but exact matching is rarely achieved due to natural randomness.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('theoretical probability')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('relative frequency')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('comparison')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Theoretical Probability</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">P(event) = favourable outcomes ÷ total outcomes</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Relative Frequency</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Relative frequency = number of times event occurred ÷ total number of trials</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">The Law of Large Numbers</p>` +
        `<p style="margin:0;color:#14532d;">As the number of trials ${gr('increases')}, the ${or('relative frequency')} gets ${gr('closer to')} the ${bl('theoretical probability')}. With small numbers of trials, random variation means the two values can differ noticeably.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho flips a coin 200 times and gets heads 96 times. Compare the relative frequency to the theoretical probability.',
          answer: `${or('Relative frequency')} = 0.48; ${bl('Theoretical probability')} = 0.5 — ${gr('close but not equal')}`,
          steps: [
            `${or('Relative frequency')} = 96 ÷ 200 = ${or('0.48')}`,
            `${bl('Theoretical probability')} of heads = 1 ÷ 2 = ${bl('0.5')}`,
            `${gr('Comparison:')} The relative frequency (${or('0.48')}) is close to but not exactly equal to the theoretical value (${bl('0.5')}), which is expected with a finite number of trials.`,
          ],
        },
        {
          question: 'Lerato notes it generally takes a very large number of trials before relative frequency approaches 0.5 for a fair coin. Why might this be?',
          answer: `${gr('Random variation averages out over many trials')}`,
          steps: [
            `With small numbers of trials, ${or('random variation')} has a larger relative impact on the proportion of results.`,
            `As the number of trials ${gr('increases')}, this random variation "averages out", bringing the ${or('relative frequency')} closer to the true ${bl('theoretical probability')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between theoretical probability and relative frequency, showing how relative frequency approaches theoretical probability as trials increase" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VENN DIAGRAMS FOR SOLVING PROBABILITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'venn-diagrams-probability',
      title: 'Venn Diagrams for Solving Probability Problems',
      icon: '⭕',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>Venn diagram</strong> visually represents the relationships between two or more events using overlapping circles, making it easier to calculate probabilities involving ${bl('"and"')}, ${or('"or"')}, and ${gr('"not"')} for compound events.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('set A')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('set B')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('overlap (intersection)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formula for Venn diagrams</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">n(${bl('A')} ∪ ${or('B')}) = n(${bl('A')}) + n(${or('B')}) − n(${gr('A ∩ B')})</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Subtract the ${gr('intersection')} to avoid double-counting elements that belong to both sets.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for Venn diagram problems</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Fill in the ${gr('intersection')} first.<br><strong>Step 2</strong> — Subtract to find ${bl('A only')} and ${or('B only')} regions.<br><strong>Step 3</strong> — Use the total to find the "neither" region.<br><strong>Step 4</strong> — Read off probabilities from the completed diagram.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a class of 30, 18 study Maths, 15 study Science, and 8 study both. Use a Venn diagram approach to find how many study neither.',
          answer: `${gr('5')} students study neither subject`,
          steps: [
            `Students studying at least one subject = ${bl('18')} + ${or('15')} − ${gr('8')} = ${gr('25')} (using the overlap to avoid double-counting).`,
            `Students studying neither = 30 − ${gr('25')} = ${gr('5')}.`,
            `[Diagram needed: a Venn diagram with two overlapping circles labelled ${bl('Maths')} and ${or('Science')}, showing ${bl('10')} in Maths only, ${or('7')} in Science only, ${gr('8')} in the overlap, and 5 outside both circles]`,
          ],
        },
        {
          question: 'Using the same data (class of 30, 18 Maths, 15 Science, 8 both), find the probability a randomly selected student studies Maths only (not Science).',
          answer: `P(Maths only) = ${gr('1/3')}`,
          steps: [
            `${bl('Maths only')} = ${bl('18')} − ${gr('8')} = ${bl('10')}`,
            `P(Maths only) = ${bl('10')} ÷ 30 = ${gr('1/3')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Venn diagram with two overlapping circles labelled Maths and Science, showing 10 in Maths only, 7 in Science only, 8 in the overlap, and 5 outside both circles" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw and use a Venn diagram to find probabilities of compound events including intersection, union, and complement" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MUTUALLY EXCLUSIVE AND COMPLEMENTARY EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mutually-exclusive-complementary',
      title: 'Mutually Exclusive and Complementary Events',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">Two events are <strong>mutually exclusive</strong> if they cannot happen at the same time (${bl('P(A and B) = 0')}) — for example rolling a 2 and rolling a 5 on a single dice roll. Two events are <strong>complementary</strong> if they are mutually exclusive AND together cover all possible outcomes — meaning ${or('P(A) + P(B) = 1')}, so ${gr('P(not A) = 1 − P(A)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('event A')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('complementary event (not A)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sum equals 1')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing the two types</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mutually Exclusive</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${bl('P(A and B) = 0')} — cannot occur simultaneously.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Does NOT require P(A) + P(B) = 1.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Complementary</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">${or('P(A) + P(not A) = 1')} — mutually exclusive AND exhaustive.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Every complementary pair is mutually exclusive, but not vice versa.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Complementary rule</p>` +
        `<p style="margin:0;color:#14532d;">${gr('P(not A) = 1 − P(A)')} — if you know the probability of an event happening, subtract from 1 to get the probability it does NOT happen.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Are 'rolling an even number' and 'rolling an odd number' on a dice mutually exclusive, complementary, or both?",
          answer: `${gr('Both mutually exclusive AND complementary')}`,
          steps: [
            `They cannot both happen at once — ${bl('mutually exclusive')} (P(even AND odd) = 0).`,
            `Together they cover every possible outcome on the dice (1–6) — so they are also ${or('complementary')}: P(even) + P(odd) = 3/6 + 3/6 = ${gr('1')}.`,
          ],
        },
        {
          question: "Thabo says the probability of rain tomorrow is 0.3. Find the probability it does NOT rain.",
          answer: `P(not rain) = ${gr('0.7')}`,
          steps: [
            `Using the ${or('complementary rule')}: P(not rain) = 1 − P(rain)`,
            `P(not rain) = 1 − ${bl('0.3')} = ${gr('0.7')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two non-overlapping regions labelled event A (blue) and not A (orange) within a sample space rectangle, with P(A) + P(not A) = 1 highlighted in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining mutually exclusive and complementary events with dice and everyday examples, and showing how to use the complementary rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THE GENERAL ADDITION RULE FOR PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'general-addition-rule',
      title: 'The General Addition Rule for Probability',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:16px;">For any two events A and B, the <strong>general addition rule</strong> states: ${bl('P(A or B) = P(A) + P(B) − P(A and B)')}. This accounts for any overlap between the events (if A and B can happen together) — when events are mutually exclusive, ${or('P(A and B) = 0')}, simplifying the rule to ${gr('P(A or B) = P(A) + P(B)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individual probabilities')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('overlap subtracted')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final combined probability')}</span>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">General Addition Rule</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('P(A)')} + ${bl('P(B)')} − ${or('P(A and B)')} = ${gr('P(A or B)')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why subtract the intersection?</p>` +
        `<p style="margin:0;color:#1e3a8a;">When we add P(A) and P(B), outcomes in ${or('both A and B')} are counted twice. Subtracting ${or('P(A and B)')} corrects this double-counting. For mutually exclusive events, there is no overlap, so nothing needs to be subtracted.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In a group, P(likes tea) = 0.6, P(likes coffee) = 0.5, and P(likes both) = 0.3. Find P(likes tea or coffee).',
          answer: `P(tea or coffee) = ${gr('0.8')}`,
          steps: [
            `P(A or B) = ${bl('P(A)')} + ${bl('P(B)')} − ${or('P(A and B)')}`,
            `P(tea or coffee) = ${bl('0.6')} + ${bl('0.5')} − ${or('0.3')} = ${gr('0.8')}`,
          ],
        },
        {
          question: 'A study tested headache drugs A, B and C on 80 patients: 40 reported relief from A, 35 from B, 40 from C, 21 from A and C, 18 from B and C, 68 from at least one drug, 7 from all three. Find how many got relief from none of the drugs.',
          answer: `${gr('12')} patients got relief from none of the drugs`,
          steps: [
            `Patients getting relief from at least one drug = ${bl('68')} (given directly).`,
            `Total patients = 80.`,
            `Patients getting relief from none = 80 − ${bl('68')} = ${gr('12')}.`,
          ],
        },
        {
          question: 'Using the same study (80 patients, A=40, B=35, C=40, A∩C=21, B∩C=18, all three=7, at least one=68), find how many got relief from drugs A and B but not C.',
          answer: `${gr('A and B only')} requires working through the full Venn diagram`,
          steps: [
            `This requires working through the full Venn diagram with all given overlaps to isolate the specific ${or('"A and B only"')} region.`,
            `Using the given totals systematically to deduce this specific intersection, which works out to require ${or('subtracting known overlapping regions')} from the totals for A and B.`,
            `Start by placing ${gr('7')} in the centre (all three). Then: A∩C only = 21 − 7 = 14; B∩C only = 18 − 7 = 11. Use the totals for A, B, and C to find A∩B = 68 − (A only) − (B only) − (C only) − (A∩C only) − (B∩C only) − 7 through systematic subtraction.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three-circle Venn diagram for drugs A, B, and C study showing all intersection regions labelled with their values, demonstrating the general addition rule for three events" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving and applying the general addition rule for probability, with examples involving two events and a three-circle Venn diagram" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho rolls a dice 60 times and gets a 6 exactly 8 times. Find the relative frequency of rolling a 6.',
      answer: '8/60 or 2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      correctAnswers: ['2/15', '8/60'],
      explanation: 'Relative frequency = number of times event occurred ÷ total trials = 8 ÷ 60 = 8/60 = 2/15 ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Compare the relative frequency in Q1 to the theoretical probability of rolling a 6.',
      answer: 'Theoretical probability = 1/6 ≈ 0.167; relative frequency ≈ 0.133; fairly close',
      checkMode: 'auto',
      correctAnswer: '1/6',
      correctAnswers: ['1/6', '0.167', '0.1667'],
      explanation: 'Theoretical probability of rolling a 6 = 1 ÷ 6 = 1/6 ≈ 0.167. Relative frequency from Q1 = 8 ÷ 60 ≈ 0.133. These are fairly close — the small difference is expected with only 60 trials. ✓',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 500 times and gets heads 245 times. Is this relative frequency reasonably close to the theoretical probability? Explain.',
      answer: 'Relative frequency = 245/500 = 0.49, which is very close to the theoretical probability of 0.5, showing the expected pattern of large trial numbers approaching the theoretical value.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a class of 25, 15 play soccer, 10 play netball, and 5 play both. How many play neither?',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'At least one = 15 + 10 − 5 = 20. Neither = 25 − 20 = 5. ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the data from Q4 (class of 25: 15 play soccer, 10 play netball, 5 play both), find the probability that a randomly selected student plays soccer only.',
      answer: '10/25 or 2/5',
      checkMode: 'auto',
      correctAnswer: '2/5',
      correctAnswers: ['2/5', '10/25'],
      explanation: 'Soccer only = 15 − 5 = 10. P(soccer only) = 10 ÷ 25 = 10/25 = 2/5 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A survey of 40 people shows 22 like pizza, 18 like burgers, and 10 like both. Draw the Venn diagram regions and find how many like neither.',
      answer: 'At least one = 22 + 18 − 10 = 30. Neither = 40 − 30 = 10.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Are 'drawing a heart' and 'drawing a spade' from a deck of cards mutually exclusive?",
      answer: 'Yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes', 'YES'],
      explanation: 'A card cannot be both a heart and a spade at the same time — these are different suits with no overlap, so the events are mutually exclusive. ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo says 'rolling a number less than 4' and 'rolling a number greater than 2' on a dice are mutually exclusive. Is he correct? Explain.",
      answer: "No — both events include the number 3, so they CAN happen at the same time, meaning they are not mutually exclusive.",
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'If P(rain) = 0.35, find P(no rain).',
      answer: '0.65',
      checkMode: 'auto',
      correctAnswer: '0.65',
      explanation: 'Using the complementary rule: P(no rain) = 1 − P(rain) = 1 − 0.35 = 0.65 ✓',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says complementary events are always mutually exclusive, but mutually exclusive events are not always complementary. Is she correct? Explain.',
      answer: 'Yes — complementary events must be mutually exclusive (cannot overlap) AND must cover all outcomes, while mutually exclusive events only require no overlap, without necessarily covering every possible outcome.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.1. Find P(A or B).',
      answer: '0.6',
      checkMode: 'auto',
      correctAnswer: '0.6',
      explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.3 − 0.1 = 0.6 ✓',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'P(A) = 0.5, P(B) = 0.45, and A and B are mutually exclusive. Find P(A or B).',
      answer: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.5 + 0.45 − 0 = 0.95.',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says P(A or B) can never exceed 1. Is he correct? Explain why this makes mathematical sense.',
      answer: 'Yes — probability values are always between 0 and 1, representing the entire possible sample space, so no combined probability calculation can logically exceed this range.',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In a group, P(likes football) = 0.55, P(likes rugby) = 0.4, P(likes both) = 0.2. Find P(likes football or rugby).',
      answer: '0.75',
      checkMode: 'auto',
      correctAnswer: '0.75',
      explanation: 'P(football or rugby) = P(football) + P(rugby) − P(both) = 0.55 + 0.4 − 0.2 = 0.75 ✓',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A study of 100 patients found 60 responded to drug X, 45 to drug Y, and 25 to both. Find how many responded to neither.',
      answer: 'At least one = 60 + 45 − 25 = 80. Neither = 100 − 80 = 20.',
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says if P(A and B) = 0, then A and B must be complementary. Is this always true? Explain.',
      answer: 'No — P(A and B) = 0 only confirms the events are mutually exclusive; for them to also be complementary, they must additionally cover the entire sample space (P(A) + P(B) = 1).',
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A class of 35 has 20 studying French, 18 studying Spanish, and an unknown number studying both. If 5 study neither, find how many study both.',
      answer: 'At least one = 35 − 5 = 30. Using addition rule: 30 = 20 + 18 − both. both = 38 − 30 = 8.',
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find P(A or B) if P(A) = 0.7, P(B) = 0.6, and P(A and B) = 0.5, explaining why this scenario is valid despite high individual probabilities.',
      answer: 'P(A or B) = 0.7 + 0.6 − 0.5 = 0.8. This is valid since 0.8 ≤ 1, and the large overlap (0.5) accounts for why the combined probability is not simply the sum of the two high individual probabilities.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo flips a coin and rolls a dice. He claims getting 'heads' and rolling 'an even number' are mutually exclusive since they're different types of events. Is his reasoning correct? Explain.",
      answer: "No — mutually exclusive specifically means the events cannot occur together in the SAME trial of the SAME type of event; since flipping a coin and rolling a dice are independent actions happening simultaneously, both outcomes (heads AND an even number) can occur together, so this isn't really a question of mutual exclusivity in the traditional single-event sense.",
      checkMode: 'self',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A survey of 90 people about drink preferences finds 50 like tea, 40 like coffee, 35 like juice, 20 like tea and coffee, 15 like coffee and juice, 18 like tea and juice, and 8 like all three. Find how many like at least one drink.',
      answer: 'Using the general formula for three sets: At least one = 50 + 40 + 35 − 20 − 15 − 18 + 8 = 80.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have completed all of Grade 10 and mastered probability.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have completed all of Grade 10 and mastered probability.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
