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
            `The completed Venn diagram shows ${bl('10')} in Maths only, ${or('7')} in Science only, ${gr('8')} in the overlap, and 5 outside both circles.`,
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
        'Venn diagram with two overlapping circles labelled Maths and Science, showing 10 in Maths only, 7 in Science only, 8 in the overlap, and 5 outside both circles',
      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="150" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><circle cx="85" cy="85" r="55" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.5"/><circle cx="135" cy="85" r="55" fill="#fff7ed" fill-opacity="0.6" stroke="#ea580c" stroke-width="2.5"/><text x="55" y="35" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Maths</text><text x="165" y="35" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">Science</text><text x="65" y="90" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="155" y="90" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">7</text><text x="110" y="90" font-size="16" fill="#16a34a" font-weight="700" text-anchor="middle">8</text><text x="20" y="148" font-size="12" fill="#374151" font-weight="700">5 (neither)</text></svg>',

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
        'Diagram showing two non-overlapping regions labelled event A and not A within a sample space rectangle, with P(A) + P(not A) = 1 highlighted',
      diagramSvg:
        '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="90" height="90" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><rect x="100" y="20" width="110" height="90" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="10" y="20" width="200" height="90" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="12" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">Sample space S</text><text x="55" y="70" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="155" y="70" font-size="16" fill="#ea580c" font-weight="700" text-anchor="middle">not A</text><text x="110" y="130" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">P(A) + P(not A) = 1</text></svg>',

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
          answer: `${gr('8')} patients got relief from A and B but not C`,
          steps: [
            `Start by placing ${gr('7')} in the centre (all three). Then: A∩C only = 21 − 7 = 14; B∩C only = 18 − 7 = 11.`,
            `Use the general addition rule for three events to find the full A∩B (including the centre): 68 = 40 + 35 + 40 − ${bl('A∩B')} − 21 − 18 + 7, so ${bl('A∩B')} = 15.`,
            `${or('A and B only')} (excluding the centre) = A∩B − 7 = 15 − 7 = ${gr('8')}.`,
            `<strong>Answer:</strong> ${gr('8')} patients got relief from drugs A and B but not C.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Three-circle Venn diagram for the drugs A, B, and C study showing all intersection regions labelled with their values, demonstrating the general addition rule for three events',
      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="85" r="55" fill="#eff6ff" fill-opacity="0.55" stroke="#2563eb" stroke-width="2.5"/><circle cx="130" cy="85" r="55" fill="#fff7ed" fill-opacity="0.55" stroke="#ea580c" stroke-width="2.5"/><circle cx="110" cy="125" r="55" fill="#f0fdf4" fill-opacity="0.55" stroke="#16a34a" stroke-width="2.5"/><text x="50" y="18" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">A</text><text x="170" y="18" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">B</text><text x="110" y="196" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">C</text><text x="58" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11</text><text x="165" y="55" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">9</text><text x="110" y="168" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">8</text><text x="110" y="55" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">8</text><text x="70" y="118" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">14</text><text x="150" y="118" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="middle">11</text><text x="110" y="98" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">7</text><text x="8" y="196" font-size="10" fill="#374151" font-weight="700">none = 12</text></svg>',

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

  // ─────────────────────────────────────────────────────────────────────────
  // PRACTICE SETS — 3 sets of 20 questions each (Phase 1: content only, no diagrams)
  // Block 1 (0-1):   Relative frequency vs theoretical probability
  // Block 2 (2-5):   Venn diagram two-set probability (only/neither/at least one) [DIAGRAM LATER]
  // Block 3 (6-8):   Mutually exclusive events
  // Block 4 (9-11):  Complementary events P(not A) = 1 − P(A)
  // Block 5 (12-15): General addition rule P(A or B) = P(A) + P(B) − P(A and B)
  // Block 6 (16-19): Combined multi-step probability problems
  // ─────────────────────────────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Relative frequency vs theoretical probability (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 80 times and shows a 6 exactly 15 times. Find the relative frequency of rolling a 6 as a fraction.', checkMode: 'auto', correctAnswer: '3/16', correctAnswers: ['3/16', '15/80'], answer: '3/16', explanation: 'Relative frequency = number of times event occurred ÷ total trials = 15 ÷ 80 = 15/80 = 3/16.' },
        { difficulty: 'Easy', question: 'A coin is flipped 150 times and lands heads 68 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', answer: 'Relative frequency = 68/150 = 34/75 ≈ 0.453. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials.', checkMode: 'self' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 40 learners: 22 study Maths, 19 study Science, and 9 study both. Find how many study neither subject.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'At least one = 22 + 19 − 9 = 32. Neither = 40 − 32 = 8.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 40 (22 study Maths, 19 study Science, 9 study both), find P(a learner studies Maths only, not Science).', checkMode: 'auto', correctAnswer: '13/40', answer: '13/40', explanation: 'Maths only = 22 − 9 = 13. P(Maths only) = 13/40.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 40 (22 study Maths, 19 study Science, 9 study both), find P(a learner studies neither subject).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '8/40'], answer: '1/5', explanation: 'Neither = 40 − 32 = 8 (from the earlier question). P(neither) = 8/40 = 1/5.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Medium', question: 'Zanele draws a Venn diagram for a survey of 40 learners: 22 study Maths, 19 study Science, 9 study both, 8 study neither. She claims P(studies at least one of the two subjects) = 22/40 because that is the Maths total. Explain her error and give the correct probability.', answer: 'She used only the Maths total instead of the region covering at least one subject. "At least one" means Maths only, Science only, and both combined: 13 + 10 + 9 = 32 (or equivalently 40 − 8 = 32). The correct probability is 32/40 = 4/5, not 22/40.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'drawing a diamond' and 'drawing a club' from a standard deck of cards mutually exclusive? Explain.", answer: 'Yes — a card cannot be both a diamond and a club at the same time, since these are different suits with no overlap, so the events are mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Thabo says 'rolling a multiple of 3' and 'rolling an even number' on a dice are mutually exclusive. Is he correct? Explain.", answer: 'No — the number 6 is both a multiple of 3 and an even number, so both events CAN happen at the same time, meaning they are not mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A bag contains coloured counters. P(drawing red) = 0.3 and P(drawing blue) = 0.45, and drawing red and drawing blue are mutually exclusive events. Find P(drawing red or blue).', checkMode: 'auto', correctAnswer: '0.75', answer: '0.75', explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(red or blue) = P(red) + P(blue) = 0.3 + 0.45 = 0.75.' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a delivery arrives late) = 0.24. Find P(the delivery does not arrive late).', checkMode: 'auto', correctAnswer: '0.76', answer: '0.76', explanation: 'Using the complementary rule: P(not late) = 1 − P(late) = 1 − 0.24 = 0.76.' },
        { difficulty: 'Medium', question: 'A bag has 16 marbles, of which 6 are green. One marble is drawn at random. Find P(not green).', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '10/16'], answer: '5/8', explanation: 'P(green) = 6/16 = 3/8. P(not green) = 1 − 3/8 = 5/8.' },
        { difficulty: 'Medium-Hard', question: "Lindiwe says complementary events and mutually exclusive events mean exactly the same thing. Is she correct? Explain using the definitions of each.", answer: 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.', checkMode: 'self' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.5, P(B) = 0.35, and P(A and B) = 0.15. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.7', answer: '0.7', explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.5 + 0.35 − 0.15 = 0.7.' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.4, P(B) = 0.45, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.85', answer: '0.85', explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.4 + 0.45 − 0 = 0.85.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays chess) = 0.6, P(plays checkers) = 0.5, and P(plays both) = 0.25. Find P(plays chess or checkers).', checkMode: 'auto', correctAnswer: '0.85', answer: '0.85', explanation: 'P(chess or checkers) = P(chess) + P(checkers) − P(both) = 0.6 + 0.5 − 0.25 = 0.85.' },
        { difficulty: 'Hard', question: 'Sipho calculates P(A) = 0.65, P(B) = 0.55, P(A and B) = 0.4, and gets P(A or B) = 1.2. Explain why this result must be wrong and find the correct value.', answer: 'A probability can never exceed 1, since it represents a proportion of the entire sample space. His error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.65 + 0.55 − 0.4 = 0.8, which is valid since it lies between 0 and 1.', checkMode: 'self' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 38 athletes in total: 5 play neither soccer nor netball, 21 play soccer, and 19 play netball. Find how many athletes play both sports.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'At least one = 38 − 5 = 33. Using the addition rule: 33 = 21 + 19 − both, so both = 40 − 33 = 7.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 45 own a dog, 38 own a cat, 30 own a fish, 18 own a dog and cat, 15 own a cat and fish, 12 own a dog and fish, and 6 own all three. Find how many people own none of the three pets.', checkMode: 'auto', correctAnswer: '26', answer: '26', explanation: 'At least one pet = 45 + 38 + 30 − 18 − 15 − 12 + 6 = 74. None = 100 − 74 = 26.' },
        { difficulty: 'Hard', question: 'A box has 10 pens: 6 blue and 4 black. Lerato picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '30/90'], answer: '1/3', explanation: 'P(blue first) = 6/10 = 3/5. Without replacement, P(blue second) = 5/9. Combined: 3/5 × 5/9 = 15/45 = 1/3.' },
        { difficulty: 'Hard', question: 'Amahle says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', answer: 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, Venn diagrams, mutually exclusive and complementary events, and the addition rule.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the general addition rule or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on mutually exclusive and complementary events, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Relative frequency vs theoretical probability (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 120 times and shows a 4 exactly 22 times. Find the relative frequency of rolling a 4 as a fraction.', checkMode: 'auto', correctAnswer: '11/60', correctAnswers: ['11/60', '22/120'], answer: '11/60', explanation: 'Relative frequency = number of times event occurred ÷ total trials = 22 ÷ 120 = 22/120 = 11/60.' },
        { difficulty: 'Easy', question: 'A coin is flipped 250 times and lands heads 132 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', answer: 'Relative frequency = 132/250 = 66/125 = 0.528. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials.', checkMode: 'self' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 50 learners: 28 study Art, 20 study Drama, and 10 study both. Find how many study neither subject.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'At least one = 28 + 20 − 10 = 38. Neither = 50 − 38 = 12.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 50 (28 study Art, 20 study Drama, 10 study both), find P(a learner studies Art only, not Drama).', checkMode: 'auto', correctAnswer: '9/25', correctAnswers: ['9/25', '18/50'], answer: '9/25', explanation: 'Art only = 28 − 10 = 18. P(Art only) = 18/50 = 9/25.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 50 (28 study Art, 20 study Drama, 10 study both), find P(a learner studies neither subject).', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '12/50'], answer: '6/25', explanation: 'Neither = 50 − 38 = 12 (from the earlier question). P(neither) = 12/50 = 6/25.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Bongani draws a Venn diagram for a survey of 50 learners: 28 study Art, 20 study Drama, 10 study both, 12 study neither. He claims P(studies at least one of the two subjects) = 28/50 because that is the Art total. Explain his error and give the correct probability.', answer: 'He used only the Art total instead of the region covering at least one subject. "At least one" means Art only, Drama only, and both combined: 18 + 10 + 10 = 38 (or equivalently 50 − 12 = 38). The correct probability is 38/50 = 19/25, not 28/50.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'drawing a King' and 'drawing a Queen' from a standard deck of cards mutually exclusive? Explain.", answer: 'Yes — a card cannot be both a King and a Queen at the same time, since these are different ranks with no overlap, so the events are mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Naledi says 'rolling a number less than 5' and 'rolling a number greater than 3' on a dice are mutually exclusive. Is she correct? Explain.", answer: 'No — the number 4 is both less than 5 and greater than 3, so both events CAN happen at the same time, meaning they are not mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A spinner lands on coloured sections. P(landing on yellow) = 0.35 and P(landing on green) = 0.4, and landing on yellow and landing on green are mutually exclusive events. Find P(landing on yellow or green).', checkMode: 'auto', correctAnswer: '0.75', answer: '0.75', explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(yellow or green) = P(yellow) + P(green) = 0.35 + 0.4 = 0.75.' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a flight departs on time) = 0.42. Find P(the flight does not depart on time).', checkMode: 'auto', correctAnswer: '0.58', answer: '0.58', explanation: 'Using the complementary rule: P(not on time) = 1 − P(on time) = 1 − 0.42 = 0.58.' },
        { difficulty: 'Medium', question: 'A bag has 18 marbles, of which 7 are yellow. One marble is drawn at random. Find P(not yellow).', checkMode: 'auto', correctAnswer: '11/18', answer: '11/18', explanation: 'P(yellow) = 7/18. P(not yellow) = 1 − 7/18 = 11/18.' },
        { difficulty: 'Medium-Hard', question: "Kagiso says complementary events and mutually exclusive events mean exactly the same thing. Is he correct? Explain using the definitions of each.", answer: 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.', checkMode: 'self' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.45, P(B) = 0.3, and P(A and B) = 0.1. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.65', answer: '0.65', explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.45 + 0.3 − 0.1 = 0.65.' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.35, P(B) = 0.55, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.9', answer: '0.9', explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.35 + 0.55 − 0 = 0.9.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays hockey) = 0.7, P(plays tennis) = 0.4, and P(plays both) = 0.3. Find P(plays hockey or tennis).', checkMode: 'auto', correctAnswer: '0.8', answer: '0.8', explanation: 'P(hockey or tennis) = P(hockey) + P(tennis) − P(both) = 0.7 + 0.4 − 0.3 = 0.8.' },
        { difficulty: 'Hard', question: 'Lerato calculates P(A) = 0.55, P(B) = 0.5, P(A and B) = 0.3, and gets P(A or B) = 1.05. Explain why this result must be wrong and find the correct value.', answer: 'A probability can never exceed 1, since it represents a proportion of the entire sample space. Her error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.55 + 0.5 − 0.3 = 0.75, which is valid since it lies between 0 and 1.', checkMode: 'self' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 42 athletes in total: 6 play neither soccer nor netball, 24 play soccer, and 20 play netball. Find how many athletes play both sports.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'At least one = 42 − 6 = 36. Using the addition rule: 36 = 24 + 20 − both, so both = 44 − 36 = 8.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 50 own a dog, 42 own a cat, 35 own a fish, 20 own a dog and cat, 16 own a cat and fish, 14 own a dog and fish, and 7 own all three. Find how many people own none of the three pets.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'At least one pet = 50 + 42 + 35 − 20 − 16 − 14 + 7 = 84. None = 100 − 84 = 16.' },
        { difficulty: 'Hard', question: 'A box has 12 pens: 7 blue and 5 black. Thabo picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '7/22', answer: '7/22', explanation: 'P(blue first) = 7/12. Without replacement, P(blue second) = 6/11. Combined: 7/12 × 6/11 = 42/132 = 7/22.' },
        { difficulty: 'Hard', question: 'Sipho says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', answer: 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, Venn diagrams, mutually exclusive and complementary events, and the addition rule.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the general addition rule or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on mutually exclusive and complementary events, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Relative frequency vs theoretical probability (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 90 times and shows a 2 exactly 17 times. Find the relative frequency of rolling a 2 as a fraction.', checkMode: 'auto', correctAnswer: '17/90', answer: '17/90', explanation: 'Relative frequency = number of times event occurred ÷ total trials = 17 ÷ 90 = 17/90.' },
        { difficulty: 'Easy', question: 'A coin is flipped 400 times and lands heads 189 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', answer: 'Relative frequency = 189/400 = 0.4725. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials.', checkMode: 'self' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 45 learners: 25 study Chess Club, 16 study Debate Club, and 8 study both. Find how many study neither activity.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'At least one = 25 + 16 − 8 = 33. Neither = 45 − 33 = 12.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 45 (25 study Chess Club, 16 study Debate Club, 8 study both), find P(a learner studies Chess Club only, not Debate Club).', checkMode: 'auto', correctAnswer: '17/45', answer: '17/45', explanation: 'Chess Club only = 25 − 8 = 17. P(Chess only) = 17/45.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 45 (25 study Chess Club, 16 study Debate Club, 8 study both), find P(a learner studies neither activity).', checkMode: 'auto', correctAnswer: '4/15', correctAnswers: ['4/15', '12/45'], answer: '4/15', explanation: 'Neither = 45 − 33 = 12 (from the earlier question). P(neither) = 12/45 = 4/15.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },
        { difficulty: 'Medium', question: 'Amahle draws a Venn diagram for a survey of 45 learners: 25 study Chess Club, 16 study Debate Club, 8 study both, 12 study neither. She claims P(studies at least one of the two activities) = 25/45 because that is the Chess Club total. Explain her error and give the correct probability.', answer: 'She used only the Chess Club total instead of the region covering at least one activity. "At least one" means Chess only, Debate only, and both combined: 17 + 8 + 8 = 33 (or equivalently 45 − 12 = 33). The correct probability is 33/45 = 11/15, not 25/45.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'rolling a 1' and 'rolling a 6' on a single dice roll mutually exclusive? Explain.", answer: 'Yes — a single dice roll can only show one number at a time, so getting a 1 and getting a 6 cannot happen together, meaning the events are mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium', question: "Sipho says 'drawing a red card' and 'drawing a face card (Jack, Queen, King)' from a deck are mutually exclusive. Is he correct? Explain.", answer: 'No — a red face card (such as the Queen of Hearts) is both red AND a face card, so both events CAN happen at the same time, meaning they are not mutually exclusive.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A survey category is assigned to each shopper. P(prefers online shopping) = 0.4 and P(prefers in-store shopping) = 0.5, and these are mutually exclusive events. Find P(prefers online or in-store shopping).', checkMode: 'auto', correctAnswer: '0.9', answer: '0.9', explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(online or in-store) = P(online) + P(in-store) = 0.4 + 0.5 = 0.9.' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a printer jams during a print job) = 0.18. Find P(the printer does not jam).', checkMode: 'auto', correctAnswer: '0.82', answer: '0.82', explanation: 'Using the complementary rule: P(not jam) = 1 − P(jam) = 1 − 0.18 = 0.82.' },
        { difficulty: 'Medium', question: 'A bag has 20 marbles, of which 9 are purple. One marble is drawn at random. Find P(not purple).', checkMode: 'auto', correctAnswer: '11/20', answer: '11/20', explanation: 'P(purple) = 9/20. P(not purple) = 1 − 9/20 = 11/20.' },
        { difficulty: 'Medium-Hard', question: "Thabo says complementary events and mutually exclusive events mean exactly the same thing. Is he correct? Explain using the definitions of each.", answer: 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.', checkMode: 'self' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.55, P(B) = 0.3, and P(A and B) = 0.2. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.65', answer: '0.65', explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.55 + 0.3 − 0.2 = 0.65.' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.3, P(B) = 0.6, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', correctAnswer: '0.9', answer: '0.9', explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.3 + 0.6 − 0 = 0.9.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays basketball) = 0.65, P(plays volleyball) = 0.45, and P(plays both) = 0.35. Find P(plays basketball or volleyball).', checkMode: 'auto', correctAnswer: '0.75', answer: '0.75', explanation: 'P(basketball or volleyball) = P(basketball) + P(volleyball) − P(both) = 0.65 + 0.45 − 0.35 = 0.75.' },
        { difficulty: 'Hard', question: 'Zanele calculates P(A) = 0.6, P(B) = 0.5, P(A and B) = 0.35, and gets P(A or B) = 1.1. Explain why this result must be wrong and find the correct value.', answer: 'A probability can never exceed 1, since it represents a proportion of the entire sample space. Her error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.6 + 0.5 − 0.35 = 0.75, which is valid since it lies between 0 and 1.', checkMode: 'self' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 36 athletes in total: 4 play neither soccer nor netball, 20 play soccer, and 18 play netball. Find how many athletes play both sports.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'At least one = 36 − 4 = 32. Using the addition rule: 32 = 20 + 18 − both, so both = 38 − 32 = 6.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 48 own a dog, 40 own a cat, 32 own a fish, 19 own a dog and cat, 17 own a cat and fish, 13 own a dog and fish, and 6 own all three. Find how many people own none of the three pets.', checkMode: 'auto', correctAnswer: '23', answer: '23', explanation: 'At least one pet = 48 + 40 + 32 − 19 − 17 − 13 + 6 = 77. None = 100 − 77 = 23.' },
        { difficulty: 'Hard', question: 'A box has 9 pens: 5 blue and 4 black. Naledi picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '5/18', answer: '5/18', explanation: 'P(blue first) = 5/9. Without replacement, P(blue second) = 4/8 = 1/2. Combined: 5/9 × 1/2 = 5/18.' },
        { difficulty: 'Hard', question: 'Bongani says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', answer: 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, Venn diagrams, mutually exclusive and complementary events, and the addition rule.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the general addition rule or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on mutually exclusive and complementary events, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
