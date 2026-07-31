import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// theoretical probability → blue   (#2563eb)
// relative frequency      → orange (#ea580c)
// comparison / sum = 1    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation (proof-of-concept) instead
// of a plain "n/d" slash — renders as an actual fraction bar via the
// site's existing whitelisted-HTML pipeline (no math library needed).
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

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
        'Short video explaining the difference between theoretical probability and relative frequency, showing how relative frequency approaches theoretical probability as trials increase',
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
          answer: `P(Maths only) = ${gr(frac('1', '3'))}`,
          steps: [
            `${bl('Maths only')} = ${bl('18')} − ${gr('8')} = ${bl('10')}`,
            `P(Maths only) = ${bl('10')} ÷ 30 = ${gr(frac('1', '3'))}`,
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
        'Short video showing how to draw and use a Venn diagram to find probabilities of compound events including intersection, union, and complement',
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
            `Together they cover every possible outcome on the dice (1–6) — so they are also ${or('complementary')}: P(even) + P(odd) = ${frac('3', '6')} + ${frac('3', '6')} = ${gr('1')}.`,
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
        'Short video explaining mutually exclusive and complementary events with dice and everyday examples, and showing how to use the complementary rule',
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
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#7c3aed;font-weight:700">pairwise overlap</span></span>` +
        `<span style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#0f1f3d;font-weight:700">all three overlap</span></span>` +
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
        'Short video deriving and applying the general addition rule for probability, with examples involving two events and a three-circle Venn diagram',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho rolls a dice 60 times and gets a 6 exactly 8 times. Find the relative frequency of rolling a 6.',
      checkMode: 'auto',
      options: [frac('2', '15'), frac('1', '6'), frac('8', '52'), frac('60', '8')],
      correctIndex: 0,
      explanation: `Relative frequency = number of times event occurred ÷ total trials = 8 ÷ 60 = ${frac('8', '60')} = ${frac('2', '15')}. ${frac('1', '6')} is the theoretical probability of rolling a 6 (a mix-up with the observed frequency), ${frac('8', '52')} uses the wrong total, and ${frac('60', '8')} inverts the fraction.`,
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Compare the relative frequency in Q1 to the theoretical probability of rolling a 6.',
      checkMode: 'auto',
      options: [
        'Theoretical probability = 1/2; much higher than the relative frequency, showing a big discrepancy.',
        `Theoretical probability = ${frac('1', '6')} ≈ 0.167; fairly close to the relative frequency of ≈ 0.133, as expected with a moderate number of trials.`,
        'Theoretical probability = 1/8; noticeably lower than the relative frequency.',
        'Theoretical probability = 1/60; far lower than the relative frequency, showing a big discrepancy.',
      ],
      correctIndex: 1,
      explanation: `Theoretical probability of rolling a 6 = 1 ÷ 6 = ${frac('1', '6')} ≈ 0.167. Relative frequency from Q1 = 8 ÷ 60 ≈ 0.133. These are fairly close — the small difference is expected with only 60 trials. 1/2 confuses this with a coin flip, 1/8 assumes an 8-sided die, and 1/60 divides by the number of trials instead of the number of outcomes.`,
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 500 times and gets heads 245 times. Is this relative frequency reasonably close to the theoretical probability? Explain.',
      checkMode: 'auto',
      options: [
        'No — 245/500 = 0.49 is far from 0.5, showing the coin is unfair.',
        'No — the relative frequency should exactly equal 0.5 for a fair coin, so any difference means an error occurred.',
        'Yes — 245/500 = 0.49, which is very close to the theoretical probability of 0.5, showing the expected pattern of large trial numbers approaching the theoretical value.',
        'Yes — the theoretical probability of heads is always exactly equal to whatever relative frequency is recorded.',
      ],
      correctIndex: 2,
      explanation: 'Relative frequency = 245 ÷ 500 = 0.49, close to the theoretical probability of 0.5, illustrating that large trial counts bring relative frequency near the theoretical value (though it need not match exactly). Claiming the coin is unfair or that the two values must match exactly misunderstands random variation.',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a class of 25, 15 play soccer, 10 play netball, and 5 play both. How many play neither?',
      checkMode: 'auto',
      options: ['15', '20', '0', '5'],
      correctIndex: 3,
      explanation: 'At least one = 15 + 10 − 5 = 20. Neither = 25 − 20 = 5. 15 is just the soccer total, 20 is "at least one" (not "neither"), and 0 wrongly assumes everyone plays at least one sport.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Using the data from Q4 (class of 25: 15 play soccer, 10 play netball, 5 play both), find the probability that a randomly selected student plays soccer only.',
      checkMode: 'auto',
      options: [frac('10', '25'), frac('15', '25'), frac('5', '25'), frac('20', '25')],
      correctIndex: 0,
      explanation: `Soccer only = 15 − 5 = 10. P(soccer only) = 10 ÷ 25 = ${frac('10', '25')} (= ${frac('2', '5')}). ${frac('15', '25')} uses the full soccer total without subtracting the overlap, ${frac('5', '25')} uses only the intersection, and ${frac('20', '25')} uses "at least one" instead of "soccer only".`,
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A survey of 40 people shows 22 like pizza, 18 like burgers, and 10 like both. Draw the Venn diagram regions and find how many like neither.',
      checkMode: 'auto',
      options: ['8', '10', '30', '12'],
      correctIndex: 1,
      explanation: 'At least one = 22 + 18 − 10 = 30. Neither = 40 − 30 = 10. 30 is the "at least one" total (not neither), and 8 and 12 come from simple arithmetic slips when subtracting.',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Are 'drawing a heart' and 'drawing a spade' from a deck of cards mutually exclusive?",
      checkMode: 'auto',
      options: [
        'No — some cards are both hearts and spades.',
        'No — mutual exclusivity only applies to numerical outcomes, not card suits.',
        'Yes — a card cannot be both a heart and a spade at the same time, since these are different suits with no overlap, so the events are mutually exclusive.',
        'Yes, but only if the deck has no jokers.',
      ],
      correctIndex: 2,
      explanation: 'A card cannot be both a heart and a spade at the same time — these are different suits with no overlap, so the events are mutually exclusive. The other options invent conditions or reasons that do not apply here.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo says 'rolling a number less than 4' and 'rolling a number greater than 2' on a dice are mutually exclusive. Is he correct? Explain.",
      checkMode: 'auto',
      options: [
        'Yes — the two events describe completely different ranges of numbers.',
        'Yes — since 4 and 2 do not appear in both descriptions, there is no overlap.',
        'No — neither event can actually occur on a standard dice.',
        'No — both events include the number 3, so they CAN happen at the same time, meaning they are not mutually exclusive.',
      ],
      correctIndex: 3,
      explanation: 'Both events include the number 3 (3 < 4 and 3 > 2), so they CAN happen at the same time, meaning they are not mutually exclusive. Claiming the ranges never overlap or that neither can occur ignores that 3 satisfies both conditions.',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'If P(rain) = 0.35, find P(no rain).',
      checkMode: 'auto',
      options: ['0.65', '0.35', '1.35', '0.5'],
      correctIndex: 0,
      explanation: 'Using the complementary rule: P(no rain) = 1 − P(rain) = 1 − 0.35 = 0.65. 0.35 repeats the given value instead of complementing it, 1.35 adds instead of subtracting, and 0.5 is unrelated to the given probability.',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says complementary events are always mutually exclusive, but mutually exclusive events are not always complementary. Is she correct? Explain.',
      checkMode: 'auto',
      options: [
        'No — complementary and mutually exclusive mean exactly the same thing.',
        'Yes — complementary events must be mutually exclusive (cannot overlap) AND must cover all outcomes, while mutually exclusive events only require no overlap, without necessarily covering every possible outcome.',
        'No — mutually exclusive events always cover the full sample space, just like complementary events.',
        'Yes, but only for events involving dice.',
      ],
      correctIndex: 1,
      explanation: 'Complementary events must be mutually exclusive AND cover all outcomes (P(A) + P(B) = 1), while mutually exclusive events only need no overlap. So Amahle is correct — every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.1. Find P(A or B).',
      checkMode: 'auto',
      options: ['0.7', '0.5', '0.6', '0.8'],
      correctIndex: 2,
      explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.3 − 0.1 = 0.6. 0.7 forgets to subtract the overlap (just adds P(A)+P(B)), 0.5 subtracts the overlap twice, and 0.8 adds the overlap instead of subtracting it.',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'P(A) = 0.5, P(B) = 0.45, and A and B are mutually exclusive. Find P(A or B).',
      checkMode: 'auto',
      options: ['0.05', '0.225', '1.0', '0.95'],
      correctIndex: 3,
      explanation: 'Since mutually exclusive, P(A and B) = 0, so P(A or B) = 0.5 + 0.45 − 0 = 0.95. 0.05 mistakenly subtracts the probabilities, 0.225 multiplies them (confusing with the intersection of independent events), and 1.0 rounds up incorrectly.',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says P(A or B) can never exceed 1. Is he correct? Explain why this makes mathematical sense.',
      checkMode: 'auto',
      options: [
        'Yes — probability values are always between 0 and 1, representing the entire possible sample space, so no combined probability calculation can logically exceed this range.',
        'No — P(A or B) can exceed 1 whenever A and B are not mutually exclusive.',
        'No — P(A or B) can reach up to 2 since it is the sum of two separate probabilities.',
        'Yes, but only when A and B are mutually exclusive events.',
      ],
      correctIndex: 0,
      explanation: 'Probability values always lie between 0 and 1, representing the entire sample space, so a valid combined probability calculation can never logically exceed this range — this holds whether or not A and B are mutually exclusive.',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In a group, P(likes football) = 0.55, P(likes rugby) = 0.4, P(likes both) = 0.2. Find P(likes football or rugby).',
      checkMode: 'auto',
      options: ['0.95', '0.75', '0.55', '0.15'],
      correctIndex: 1,
      explanation: 'P(football or rugby) = P(football) + P(rugby) − P(both) = 0.55 + 0.4 − 0.2 = 0.75. 0.95 forgets to subtract the overlap, 0.55 uses only P(football), and 0.15 subtracts P(rugby) from P(both) incorrectly.',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A study of 100 patients found 60 responded to drug X, 45 to drug Y, and 25 to both. Find how many responded to neither.',
      checkMode: 'auto',
      options: ['80', '15', '20', '5'],
      correctIndex: 2,
      explanation: 'At least one = 60 + 45 − 25 = 80. Neither = 100 − 80 = 20. 80 is "at least one" (not "neither"), and 15 and 5 come from subtraction slips.',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says if P(A and B) = 0, then A and B must be complementary. Is this always true? Explain.',
      checkMode: 'auto',
      options: [
        'Yes — P(A and B) = 0 is the definition of complementary events.',
        'Yes, as long as A and B are numeric events.',
        'No — mutually exclusive events never occur in real life, so the claim is meaningless.',
        'No — P(A and B) = 0 only confirms the events are mutually exclusive; for them to also be complementary, they must additionally cover the entire sample space (P(A) + P(B) = 1).',
      ],
      correctIndex: 3,
      explanation: 'P(A and B) = 0 only confirms the events are mutually exclusive. For them to also be complementary, they must additionally cover the entire sample space, i.e. P(A) + P(B) = 1 — so the claim is not always true.',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A class of 35 has 20 studying French, 18 studying Spanish, and an unknown number studying both. If 5 study neither, find how many study both.',
      checkMode: 'auto',
      options: ['8', '30', '3', '13'],
      correctIndex: 0,
      explanation: 'At least one = 35 − 5 = 30. Using the addition rule: 30 = 20 + 18 − both, so both = 38 − 30 = 8. 30 is "at least one" (not "both"), 3 comes from naively computing 20 + 18 − 35, and 13 is an arithmetic slip.',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find P(A or B) if P(A) = 0.7, P(B) = 0.6, and P(A and B) = 0.5, explaining why this scenario is valid despite high individual probabilities.',
      checkMode: 'auto',
      options: [
        'P(A or B) = 1.3, which is invalid since probabilities cannot exceed 1.',
        'P(A or B) = 0.7 + 0.6 − 0.5 = 0.8. This is valid since 0.8 ≤ 1, and the large overlap (0.5) accounts for why the combined probability is not simply the sum of the two high individual probabilities.',
        'P(A or B) = 0.7 + 0.6 + 0.5 = 1.8, showing the scenario must contain an error in the given values.',
        'P(A or B) = 0.6, using only the larger of the two probabilities.',
      ],
      correctIndex: 1,
      explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.7 + 0.6 − 0.5 = 0.8, which is valid since it lies between 0 and 1 — the large overlap accounts for why the combined value is not simply the sum of the two high individual probabilities.',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo flips a coin and rolls a dice. He claims getting 'heads' and rolling 'an even number' are mutually exclusive since they're different types of events. Is his reasoning correct? Explain.",
      checkMode: 'auto',
      options: [
        'Yes — since a coin and a dice are different objects, their outcomes are always mutually exclusive.',
        'Yes — mutual exclusivity applies to any two events regardless of context.',
        "No — mutually exclusive specifically means the events cannot occur together in the SAME trial of the SAME type of event; since flipping a coin and rolling a dice are independent actions happening simultaneously, both outcomes (heads AND an even number) can occur together, so this isn't really a question of mutual exclusivity in the traditional single-event sense.",
        'No — coins and dice can never produce simultaneous outcomes.',
      ],
      correctIndex: 2,
      explanation: 'Mutually exclusive specifically means the events cannot occur together in the same trial of the same type of event. Since the coin flip and dice roll are independent actions happening simultaneously, both outcomes can occur together, so this is not really a mutual-exclusivity question in the traditional sense.',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A survey of 90 people about drink preferences finds 50 like tea, 40 like coffee, 35 like juice, 20 like tea and coffee, 15 like coffee and juice, 18 like tea and juice, and 8 like all three. Find how many like at least one drink.',
      checkMode: 'auto',
      options: ['90', '65', '100', '80'],
      correctIndex: 3,
      explanation: 'Using the general formula for three sets: At least one = 50 + 40 + 35 − 20 − 15 − 18 + 8 = 80. 90 assumes everyone likes at least one drink; 100 adds all values without subtracting overlaps; 65 comes from an arithmetic slip in the calculation.',
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
        { difficulty: 'Easy', question: 'A dice is rolled 80 times and shows a 6 exactly 15 times. Find the relative frequency of rolling a 6 as a fraction.', checkMode: 'auto', options: [frac('3', '16'), frac('1', '6'), frac('15', '65'), frac('80', '15')], correctIndex: 0, explanation: `Relative frequency = number of times event occurred ÷ total trials = 15 ÷ 80 = 15/80 = ${frac('3', '16')}. ${frac('1', '6')} is the theoretical probability (not the observed frequency), ${frac('15', '65')} uses the wrong total, and ${frac('80', '15')} inverts the fraction.` },
        { difficulty: 'Easy', question: 'A coin is flipped 150 times and lands heads 68 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', checkMode: 'auto', options: ['Relative frequency ≈ 0.547 (using 82 tails), which is far from the theoretical probability of 0.5.', 'Relative frequency ≈ 0.453 and theoretical probability = 0.5 — these are reasonably close, with the small difference expected due to a limited number of trials.', 'Relative frequency = 0.5 exactly, matching the theoretical probability perfectly.', 'Relative frequency ≈ 0.453 and theoretical probability = 0.5 — these are far apart, suggesting the coin is heavily biased.'], correctIndex: 1, explanation: 'Relative frequency = 68/150 = 34/75 ≈ 0.453. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials — not "far apart" and not an exact match.' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 40 learners: 22 study Maths, 19 study Science, and 9 study both. Find how many study neither subject.', checkMode: 'auto', options: ['32', '9', '8', '22'], correctIndex: 2, explanation: 'At least one = 22 + 19 − 9 = 32. Neither = 40 − 32 = 8. 32 is "at least one" (not "neither"), 9 is just the overlap, and 22 is just the Maths total.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 40 (22 study Maths, 19 study Science, 9 study both), find P(a learner studies Maths only, not Science).', checkMode: 'auto', options: [frac('22', '40'), frac('9', '40'), frac('8', '40'), frac('13', '40')], correctIndex: 3, explanation: `Maths only = 22 − 9 = 13. P(Maths only) = ${frac('13', '40')}. ${frac('22', '40')} forgets to subtract the overlap, ${frac('9', '40')} uses just the intersection, and ${frac('8', '40')} uses the "neither" count instead.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 40 (22 study Maths, 19 study Science, 9 study both), find P(a learner studies neither subject).', checkMode: 'auto', options: [frac('1', '5'), frac('32', '40'), frac('9', '40'), frac('22', '40')], correctIndex: 0, explanation: `Neither = 40 − 32 = 8 (from the earlier question). P(neither) = 8/40 = ${frac('1', '5')}. ${frac('32', '40')} is "at least one" (the opposite region), ${frac('9', '40')} is just the overlap, and ${frac('22', '40')} is just the Maths total.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Zanele draws a Venn diagram for a survey of 40 learners: 22 study Maths, 19 study Science, 9 study both, 8 study neither. She claims P(studies at least one of the two subjects) = 22/40 because that is the Maths total. Explain her error and give the correct probability.', checkMode: 'auto', options: ['She is correct — P(at least one) is indeed 22/40 since that already includes overlapping students.', 'She used only the Maths total instead of the region covering at least one subject. "At least one" means Maths only, Science only, and both combined: 13 + 10 + 9 = 32 (or equivalently 40 − 8 = 32). The correct probability is 32/40 = 4/5, not 22/40.', 'She is correct, but should have used 19/40 (the Science total) instead.', 'She made an error — the correct probability of studying at least one subject is 9/40, the overlap only.'], correctIndex: 1, explanation: 'Zanele used only the Maths total instead of the region covering at least one subject. "At least one" combines Maths only, Science only, and both: 13 + 10 + 9 = 32, so the correct probability is 32/40 = 4/5, not 22/40.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'drawing a diamond' and 'drawing a club' from a standard deck of cards mutually exclusive? Explain.", checkMode: 'auto', options: ['No — some cards are both diamonds and clubs.', 'No — mutual exclusivity does not apply to card suits.', 'Yes — a card cannot be both a diamond and a club at the same time, since these are different suits with no overlap, so the events are mutually exclusive.', 'Yes, but only for face cards.'], correctIndex: 2, explanation: 'A card cannot be both a diamond and a club at the same time, since these are different suits with no overlap, so the events are mutually exclusive.' },
        { difficulty: 'Medium', question: "Thabo says 'rolling a multiple of 3' and 'rolling an even number' on a dice are mutually exclusive. Is he correct? Explain.", checkMode: 'auto', options: ['Yes — multiples of 3 and even numbers never share a value on a standard dice.', 'Yes — 3 and 2 are different numbers, so the categories cannot overlap.', 'No — none of the numbers on a dice are both a multiple of 3 and even.', 'No — the number 6 is both a multiple of 3 and an even number, so both events CAN happen at the same time, meaning they are not mutually exclusive.'], correctIndex: 3, explanation: 'The number 6 is both a multiple of 3 and an even number, so both events CAN happen at the same time, meaning they are not mutually exclusive.' },
        { difficulty: 'Medium-Hard', question: 'A bag contains coloured counters. P(drawing red) = 0.3 and P(drawing blue) = 0.45, and drawing red and drawing blue are mutually exclusive events. Find P(drawing red or blue).', checkMode: 'auto', options: ['0.75', '0.135', '0.15', '0.3'], correctIndex: 0, explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(red or blue) = P(red) + P(blue) = 0.3 + 0.45 = 0.75. 0.135 wrongly multiplies as if finding an intersection, 0.15 subtracts instead of adding, and 0.3 uses only P(red).' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a delivery arrives late) = 0.24. Find P(the delivery does not arrive late).', checkMode: 'auto', options: ['0.24', '0.76', '1.24', '0.5'], correctIndex: 1, explanation: 'Using the complementary rule: P(not late) = 1 − P(late) = 1 − 0.24 = 0.76. 0.24 repeats the given value, 1.24 adds instead of subtracting, and 0.5 is unrelated to the given probability.' },
        { difficulty: 'Medium', question: 'A bag has 16 marbles, of which 6 are green. One marble is drawn at random. Find P(not green).', checkMode: 'auto', options: [frac('6', '16'), frac('16', '6'), frac('5', '8'), frac('6', '10')], correctIndex: 2, explanation: `P(green) = 6/16 = 3/8. P(not green) = 1 − 3/8 = ${frac('5', '8')} (= 10/16). ${frac('6', '16')} is P(green) itself, ${frac('16', '6')} inverts the fraction, and ${frac('6', '10')} confuses the numerator and denominator of the complement.` },
        { difficulty: 'Medium-Hard', question: "Lindiwe says complementary events and mutually exclusive events mean exactly the same thing. Is she correct? Explain using the definitions of each.", checkMode: 'auto', options: ['Yes — both terms describe events that cannot happen at the same time, with no further conditions.', 'Yes — complementary is just another name mathematicians use for mutually exclusive.', 'No — complementary events never overlap with mutually exclusive events at all.', 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.'], correctIndex: 3, explanation: 'Mutually exclusive only requires that the events cannot occur together. Complementary events must be mutually exclusive AND together cover the entire sample space — so Lindiwe is incorrect to treat the two terms as identical.' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.5, P(B) = 0.35, and P(A and B) = 0.15. Find P(A or B).', checkMode: 'auto', options: ['0.7', '0.85', '1.0', '0.5'], correctIndex: 0, explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.5 + 0.35 − 0.15 = 0.7. 0.85 forgets to subtract the overlap, 1.0 adds all three values, and 0.5 uses only P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.4, P(B) = 0.45, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', options: ['0.18', '0.85', '0.05', '1.0'], correctIndex: 1, explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.4 + 0.45 − 0 = 0.85. 0.18 wrongly multiplies the probabilities, 0.05 subtracts instead of adding, and 1.0 rounds up incorrectly.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays chess) = 0.6, P(plays checkers) = 0.5, and P(plays both) = 0.25. Find P(plays chess or checkers).', checkMode: 'auto', options: ['1.1', '0.35', '0.85', '0.6'], correctIndex: 2, explanation: 'P(chess or checkers) = P(chess) + P(checkers) − P(both) = 0.6 + 0.5 − 0.25 = 0.85. 1.1 forgets to subtract the overlap, 0.35 subtracts the overlap twice, and 0.6 uses only P(chess).' },
        { difficulty: 'Hard', question: 'Sipho calculates P(A) = 0.65, P(B) = 0.55, P(A and B) = 0.4, and gets P(A or B) = 1.2. Explain why this result must be wrong and find the correct value.', checkMode: 'auto', options: ['His answer is correct — probabilities of combined events can exceed 1 when both individual probabilities are high.', 'His error was in the individual probabilities, not the formula; the correct value is P(A or B) = 1.2 with adjusted inputs.', 'He should have added all three values together to get P(A or B) = 1.6.', 'A probability can never exceed 1, since it represents a proportion of the entire sample space. His error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.65 + 0.55 − 0.4 = 0.8, which is valid since it lies between 0 and 1.'], correctIndex: 3, explanation: 'A probability can never exceed 1. Sipho likely forgot to subtract the overlap or added incorrectly — the correct value is P(A or B) = 0.65 + 0.55 − 0.4 = 0.8.' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 38 athletes in total: 5 play neither soccer nor netball, 21 play soccer, and 19 play netball. Find how many athletes play both sports.', checkMode: 'auto', options: ['7', '33', '2', '12'], correctIndex: 0, explanation: 'At least one = 38 − 5 = 33. Using the addition rule: 33 = 21 + 19 − both, so both = 40 − 33 = 7. 33 is "at least one" (not "both"), and 2 and 12 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 45 own a dog, 38 own a cat, 30 own a fish, 18 own a dog and cat, 15 own a cat and fish, 12 own a dog and fish, and 6 own all three. Find how many people own none of the three pets.', checkMode: 'auto', options: ['74', '26', '20', '32'], correctIndex: 1, explanation: 'At least one pet = 45 + 38 + 30 − 18 − 15 − 12 + 6 = 74. None = 100 − 74 = 26. 74 is "at least one" (not "none"), and 20 and 32 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A box has 10 pens: 6 blue and 4 black. Lerato picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', options: [frac('9', '25'), frac('3', '5'), frac('1', '3'), frac('5', '9')], correctIndex: 2, explanation: `P(blue first) = 6/10 = 3/5. Without replacement, P(blue second) = 5/9. Combined: 3/5 × 5/9 = 15/45 = ${frac('1', '3')}. ${frac('9', '25')} wrongly assumes replacement (using 6/10 twice), ${frac('3', '5')} only accounts for the first draw, and ${frac('5', '9')} only accounts for the second draw.` },
        { difficulty: 'Hard', question: 'Amahle says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', checkMode: 'auto', options: ['She is correct — the addition rule always simplifies to P(A) + P(B) regardless of overlap.', 'She is correct only when P(A) and P(B) are both greater than 0.5.', 'She is incorrect because P(A or B) is always less than P(A) + P(B), no matter the overlap.', 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).'], correctIndex: 3, explanation: 'This is only true when A and B are mutually exclusive (P(A and B) = 0). If the events overlap, the intersection must be subtracted to avoid double-counting.' },
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
        { difficulty: 'Easy', question: 'A dice is rolled 120 times and shows a 4 exactly 22 times. Find the relative frequency of rolling a 4 as a fraction.', checkMode: 'auto', options: [frac('11', '60'), frac('1', '6'), frac('22', '98'), frac('120', '22')], correctIndex: 0, explanation: `Relative frequency = number of times event occurred ÷ total trials = 22 ÷ 120 = 22/120 = ${frac('11', '60')}. ${frac('1', '6')} is the theoretical probability (not the observed frequency), ${frac('22', '98')} uses the wrong total, and ${frac('120', '22')} inverts the fraction.` },
        { difficulty: 'Easy', question: 'A coin is flipped 250 times and lands heads 132 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', checkMode: 'auto', options: ['Relative frequency ≈ 0.472 (using 118 tails), far from the theoretical probability of 0.5.', 'Relative frequency ≈ 0.528 and theoretical probability = 0.5 — these are reasonably close, with the small difference expected due to a limited number of trials.', 'Relative frequency = 0.5 exactly, matching theoretical probability perfectly.', 'Relative frequency ≈ 0.528 and theoretical probability = 0.5 — these are far apart, suggesting bias.'], correctIndex: 1, explanation: 'Relative frequency = 132/250 = 66/125 = 0.528. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials — not "far apart" and not an exact match.' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 50 learners: 28 study Art, 20 study Drama, and 10 study both. Find how many study neither subject.', checkMode: 'auto', options: ['38', '10', '12', '28'], correctIndex: 2, explanation: 'At least one = 28 + 20 − 10 = 38. Neither = 50 − 38 = 12. 38 is "at least one" (not "neither"), 10 is just the overlap, and 28 is just the Art total.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 50 (28 study Art, 20 study Drama, 10 study both), find P(a learner studies Art only, not Drama).', checkMode: 'auto', options: [frac('28', '50'), frac('10', '50'), frac('12', '50'), frac('9', '25')], correctIndex: 3, explanation: `Art only = 28 − 10 = 18. P(Art only) = 18/50 = ${frac('9', '25')}. ${frac('28', '50')} forgets to subtract the overlap, ${frac('10', '50')} uses just the intersection, and ${frac('12', '50')} uses the "neither" count instead.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 50 (28 study Art, 20 study Drama, 10 study both), find P(a learner studies neither subject).', checkMode: 'auto', options: [frac('6', '25'), frac('38', '50'), frac('10', '50'), frac('28', '50')], correctIndex: 0, explanation: `Neither = 50 − 38 = 12 (from the earlier question). P(neither) = 12/50 = ${frac('6', '25')}. ${frac('38', '50')} is "at least one" (the opposite region), ${frac('10', '50')} is just the overlap, and ${frac('28', '50')} is just the Art total.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Bongani draws a Venn diagram for a survey of 50 learners: 28 study Art, 20 study Drama, 10 study both, 12 study neither. He claims P(studies at least one of the two subjects) = 28/50 because that is the Art total. Explain his error and give the correct probability.', checkMode: 'auto', options: ['He is correct — P(at least one) = 28/50 already accounts for every learner studying a subject.', 'He used only the Art total instead of the region covering at least one subject. "At least one" means Art only, Drama only, and both combined: 18 + 10 + 10 = 38 (or equivalently 50 − 12 = 38). The correct probability is 38/50 = 19/25, not 28/50.', 'He is correct, but should have used 20/50 (the Drama total) instead.', 'He made an error — the correct probability is 10/50, the overlap only.'], correctIndex: 1, explanation: 'Bongani used only the Art total instead of the region covering at least one subject. "At least one" combines Art only, Drama only, and both: 18 + 10 + 10 = 38, so the correct probability is 38/50 = 19/25, not 28/50.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Art</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Drama</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'drawing a King' and 'drawing a Queen' from a standard deck of cards mutually exclusive? Explain.", checkMode: 'auto', options: ['No — some cards are both a King and a Queen.', 'No — mutual exclusivity does not apply to card ranks.', 'Yes — a card cannot be both a King and a Queen at the same time, since these are different ranks with no overlap, so the events are mutually exclusive.', 'Yes, but only for red cards.'], correctIndex: 2, explanation: 'A card cannot be both a King and a Queen at the same time, since these are different ranks with no overlap, so the events are mutually exclusive.' },
        { difficulty: 'Medium', question: "Naledi says 'rolling a number less than 5' and 'rolling a number greater than 3' on a dice are mutually exclusive. Is she correct? Explain.", checkMode: 'auto', options: ['Yes — 5 and 3 never appear together on a dice.', 'Yes — the ranges do not share any boundary numbers.', 'No — none of the numbers on a dice satisfy both conditions.', 'No — the number 4 is both less than 5 and greater than 3, so both events CAN happen at the same time, meaning they are not mutually exclusive.'], correctIndex: 3, explanation: 'The number 4 is both less than 5 and greater than 3, so both events CAN happen at the same time, meaning they are not mutually exclusive.' },
        { difficulty: 'Medium-Hard', question: 'A spinner lands on coloured sections. P(landing on yellow) = 0.35 and P(landing on green) = 0.4, and landing on yellow and landing on green are mutually exclusive events. Find P(landing on yellow or green).', checkMode: 'auto', options: ['0.75', '0.14', '0.05', '0.4'], correctIndex: 0, explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(yellow or green) = P(yellow) + P(green) = 0.35 + 0.4 = 0.75. 0.14 wrongly multiplies the probabilities, 0.05 subtracts instead of adding, and 0.4 uses only P(green).' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a flight departs on time) = 0.42. Find P(the flight does not depart on time).', checkMode: 'auto', options: ['0.42', '0.58', '1.42', '0.5'], correctIndex: 1, explanation: 'Using the complementary rule: P(not on time) = 1 − P(on time) = 1 − 0.42 = 0.58. 0.42 repeats the given value, 1.42 adds instead of subtracting, and 0.5 is unrelated to the given probability.' },
        { difficulty: 'Medium', question: 'A bag has 18 marbles, of which 7 are yellow. One marble is drawn at random. Find P(not yellow).', checkMode: 'auto', options: [frac('7', '18'), frac('18', '7'), frac('11', '18'), frac('7', '11')], correctIndex: 2, explanation: `P(yellow) = 7/18. P(not yellow) = 1 − 7/18 = ${frac('11', '18')}. ${frac('7', '18')} is P(yellow) itself, ${frac('18', '7')} inverts the fraction, and ${frac('7', '11')} confuses the numerator and denominator of the complement.` },
        { difficulty: 'Medium-Hard', question: "Kagiso says complementary events and mutually exclusive events mean exactly the same thing. Is he correct? Explain using the definitions of each.", checkMode: 'auto', options: ['Yes — both describe events with no overlap, and nothing more.', 'Yes — complementary is another term mathematicians use for mutually exclusive.', 'No — complementary events can never be mutually exclusive.', 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.'], correctIndex: 3, explanation: 'Mutually exclusive only requires that the events cannot occur together. Complementary events must be mutually exclusive AND together cover the entire sample space — so Kagiso is incorrect to treat the two terms as identical.' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.45, P(B) = 0.3, and P(A and B) = 0.1. Find P(A or B).', checkMode: 'auto', options: ['0.65', '0.75', '0.85', '0.45'], correctIndex: 0, explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.45 + 0.3 − 0.1 = 0.65. 0.75 forgets to subtract the overlap, 0.85 adds the overlap instead of subtracting it, and 0.45 uses only P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.35, P(B) = 0.55, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', options: ['0.1925', '0.9', '0.2', '1.0'], correctIndex: 1, explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.35 + 0.55 − 0 = 0.9. 0.1925 wrongly multiplies the probabilities, 0.2 subtracts instead of adding, and 1.0 rounds up incorrectly.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays hockey) = 0.7, P(plays tennis) = 0.4, and P(plays both) = 0.3. Find P(plays hockey or tennis).', checkMode: 'auto', options: ['1.1', '0.3', '0.8', '0.7'], correctIndex: 2, explanation: 'P(hockey or tennis) = P(hockey) + P(tennis) − P(both) = 0.7 + 0.4 − 0.3 = 0.8. 1.1 forgets to subtract the overlap, 0.3 uses only P(both), and 0.7 uses only P(hockey).' },
        { difficulty: 'Hard', question: 'Lerato calculates P(A) = 0.55, P(B) = 0.5, P(A and B) = 0.3, and gets P(A or B) = 1.05. Explain why this result must be wrong and find the correct value.', checkMode: 'auto', options: ['Her answer is correct — probabilities can exceed 1 when both individual values are high.', 'Her error was in the given probabilities, not the calculation; 1.05 is acceptable.', 'She should have added all three numbers to get P(A or B) = 1.35.', 'A probability can never exceed 1, since it represents a proportion of the entire sample space. Her error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.55 + 0.5 − 0.3 = 0.75, which is valid since it lies between 0 and 1.'], correctIndex: 3, explanation: 'A probability can never exceed 1. Lerato likely forgot to subtract the overlap or added incorrectly — the correct value is P(A or B) = 0.55 + 0.5 − 0.3 = 0.75.' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 42 athletes in total: 6 play neither soccer nor netball, 24 play soccer, and 20 play netball. Find how many athletes play both sports.', checkMode: 'auto', options: ['8', '36', '4', '14'], correctIndex: 0, explanation: 'At least one = 42 − 6 = 36. Using the addition rule: 36 = 24 + 20 − both, so both = 44 − 36 = 8. 36 is "at least one" (not "both"), and 4 and 14 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 50 own a dog, 42 own a cat, 35 own a fish, 20 own a dog and cat, 16 own a cat and fish, 14 own a dog and fish, and 7 own all three. Find how many people own none of the three pets.', checkMode: 'auto', options: ['84', '16', '10', '24'], correctIndex: 1, explanation: 'At least one pet = 50 + 42 + 35 − 20 − 16 − 14 + 7 = 84. None = 100 − 84 = 16. 84 is "at least one" (not "none"), and 10 and 24 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A box has 12 pens: 7 blue and 5 black. Thabo picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', options: [frac('49', '144'), frac('7', '12'), frac('7', '22'), frac('6', '11')], correctIndex: 2, explanation: `P(blue first) = 7/12. Without replacement, P(blue second) = 6/11. Combined: 7/12 × 6/11 = 42/132 = ${frac('7', '22')}. ${frac('49', '144')} wrongly assumes replacement (using 7/12 twice), ${frac('7', '12')} only accounts for the first draw, and ${frac('6', '11')} only accounts for the second draw.` },
        { difficulty: 'Hard', question: 'Sipho says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', checkMode: 'auto', options: ['He is correct — the addition rule always simplifies to P(A) + P(B) regardless of overlap.', 'He is correct only when P(A) and P(B) are both greater than 0.5.', 'He is incorrect because P(A or B) is always less than P(A) + P(B), no matter the overlap.', 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).'], correctIndex: 3, explanation: 'This is only true when A and B are mutually exclusive (P(A and B) = 0). If the events overlap, the intersection must be subtracted to avoid double-counting.' },
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
        { difficulty: 'Easy', question: 'A dice is rolled 90 times and shows a 2 exactly 17 times. Find the relative frequency of rolling a 2 as a fraction.', checkMode: 'auto', options: [frac('17', '90'), frac('1', '6'), frac('17', '73'), frac('90', '17')], correctIndex: 0, explanation: `Relative frequency = number of times event occurred ÷ total trials = 17 ÷ 90 = ${frac('17', '90')}. ${frac('1', '6')} is the theoretical probability (not the observed frequency), ${frac('17', '73')} uses the wrong total, and ${frac('90', '17')} inverts the fraction.` },
        { difficulty: 'Easy', question: 'A coin is flipped 400 times and lands heads 189 times. Compare this relative frequency to the theoretical probability of heads, and state whether they are close.', checkMode: 'auto', options: ['Relative frequency ≈ 0.4725, far from the theoretical probability of 0.5, suggesting bias.', 'Relative frequency ≈ 0.4725 and theoretical probability = 0.5 — these are reasonably close, with the small difference expected due to a limited number of trials.', 'Relative frequency = 0.5 exactly, matching theoretical probability perfectly.', 'Relative frequency ≈ 0.5275 (using 211 tails), far from the theoretical probability of 0.5.'], correctIndex: 1, explanation: 'Relative frequency = 189/400 = 0.4725. Theoretical probability = 1/2 = 0.5. These are reasonably close, with the small difference expected due to a limited number of trials — not "far apart" and not an exact match.' },

        // Block 2 — Venn diagram two-set probability (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A Venn diagram shows a class of 45 learners: 25 study Chess Club, 16 study Debate Club, and 8 study both. Find how many study neither activity.', checkMode: 'auto', options: ['33', '8', '12', '25'], correctIndex: 2, explanation: 'At least one = 25 + 16 − 8 = 33. Neither = 45 − 33 = 12. 33 is "at least one" (not "neither"), 8 is just the overlap, and 25 is just the Chess Club total.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Using the same class of 45 (25 study Chess Club, 16 study Debate Club, 8 study both), find P(a learner studies Chess Club only, not Debate Club).', checkMode: 'auto', options: [frac('25', '45'), frac('8', '45'), frac('12', '45'), frac('17', '45')], correctIndex: 3, explanation: `Chess Club only = 25 − 8 = 17. P(Chess only) = ${frac('17', '45')}. ${frac('25', '45')} forgets to subtract the overlap, ${frac('8', '45')} uses just the intersection, and ${frac('12', '45')} uses the "neither" count instead.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same class of 45 (25 study Chess Club, 16 study Debate Club, 8 study both), find P(a learner studies neither activity).', checkMode: 'auto', options: [frac('4', '15'), frac('33', '45'), frac('8', '45'), frac('25', '45')], correctIndex: 0, explanation: `Neither = 45 − 33 = 12 (from the earlier question). P(neither) = 12/45 = ${frac('4', '15')}. ${frac('33', '45')} is "at least one" (the opposite region), ${frac('8', '45')} is just the overlap, and ${frac('25', '45')} is just the Chess Club total.`, diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Amahle draws a Venn diagram for a survey of 45 learners: 25 study Chess Club, 16 study Debate Club, 8 study both, 12 study neither. She claims P(studies at least one of the two activities) = 25/45 because that is the Chess Club total. Explain her error and give the correct probability.', checkMode: 'auto', options: ['She is correct — P(at least one) = 25/45 already accounts for every learner doing an activity.', 'She used only the Chess Club total instead of the region covering at least one activity. "At least one" means Chess only, Debate only, and both combined: 17 + 8 + 8 = 33 (or equivalently 45 − 12 = 33). The correct probability is 33/45 = 11/15, not 25/45.', 'She is correct, but should have used 16/45 (the Debate total) instead.', 'She made an error — the correct probability is 8/45, the overlap only.'], correctIndex: 1, explanation: 'Amahle used only the Chess Club total instead of the region covering at least one activity. "At least one" combines Chess only, Debate only, and both: 17 + 8 + 8 = 33, so the correct probability is 33/45 = 11/15, not 25/45.', diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Chess Club</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Debate Club</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Block 3 — Mutually exclusive events (Medium)
        { difficulty: 'Medium', question: "Are 'rolling a 1' and 'rolling a 6' on a single dice roll mutually exclusive? Explain.", checkMode: 'auto', options: ['No — a dice can sometimes show two numbers at once.', 'No — mutual exclusivity does not apply to single dice rolls.', 'Yes — a single dice roll can only show one number at a time, so getting a 1 and getting a 6 cannot happen together, meaning the events are mutually exclusive.', 'Yes, but only on a six-sided dice.'], correctIndex: 2, explanation: 'A single dice roll can only show one number at a time, so getting a 1 and getting a 6 cannot happen together, meaning the events are mutually exclusive.' },
        { difficulty: 'Medium', question: "Sipho says 'drawing a red card' and 'drawing a face card (Jack, Queen, King)' from a deck are mutually exclusive. Is he correct? Explain.", checkMode: 'auto', options: ['Yes — red cards and face cards belong to entirely separate decks.', 'Yes — none of the face cards are ever red.', 'No — none of the cards in a deck can be both red and a face card.', 'No — a red face card (such as the Queen of Hearts) is both red AND a face card, so both events CAN happen at the same time, meaning they are not mutually exclusive.'], correctIndex: 3, explanation: 'A red face card (such as the Queen of Hearts) is both red AND a face card, so both events CAN happen at the same time, meaning they are not mutually exclusive.' },
        { difficulty: 'Medium-Hard', question: 'A survey category is assigned to each shopper. P(prefers online shopping) = 0.4 and P(prefers in-store shopping) = 0.5, and these are mutually exclusive events. Find P(prefers online or in-store shopping).', checkMode: 'auto', options: ['0.9', '0.2', '0.1', '0.5'], correctIndex: 0, explanation: 'Since the events are mutually exclusive, P(A and B) = 0, so P(online or in-store) = P(online) + P(in-store) = 0.4 + 0.5 = 0.9. 0.2 wrongly multiplies the probabilities, 0.1 subtracts instead of adding, and 0.5 uses only P(in-store).' },

        // Block 4 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a printer jams during a print job) = 0.18. Find P(the printer does not jam).', checkMode: 'auto', options: ['0.18', '0.82', '1.18', '0.5'], correctIndex: 1, explanation: 'Using the complementary rule: P(not jam) = 1 − P(jam) = 1 − 0.18 = 0.82. 0.18 repeats the given value, 1.18 adds instead of subtracting, and 0.5 is unrelated to the given probability.' },
        { difficulty: 'Medium', question: 'A bag has 20 marbles, of which 9 are purple. One marble is drawn at random. Find P(not purple).', checkMode: 'auto', options: [frac('9', '20'), frac('20', '9'), frac('11', '20'), frac('9', '11')], correctIndex: 2, explanation: `P(purple) = 9/20. P(not purple) = 1 − 9/20 = ${frac('11', '20')}. ${frac('9', '20')} is P(purple) itself, ${frac('20', '9')} inverts the fraction, and ${frac('9', '11')} confuses the numerator and denominator of the complement.` },
        { difficulty: 'Medium-Hard', question: "Thabo says complementary events and mutually exclusive events mean exactly the same thing. Is he correct? Explain using the definitions of each.", checkMode: 'auto', options: ['Yes — both describe events with no overlap, and nothing more.', 'Yes — complementary is another term mathematicians use for mutually exclusive.', 'No — complementary events can never be mutually exclusive.', 'No — mutually exclusive only requires that the events cannot occur together (P(A and B) = 0). Complementary events must be mutually exclusive AND must together cover the entire sample space (P(A) + P(B) = 1). Every complementary pair is mutually exclusive, but not every mutually exclusive pair is complementary.'], correctIndex: 3, explanation: 'Mutually exclusive only requires that the events cannot occur together. Complementary events must be mutually exclusive AND together cover the entire sample space — so Thabo is incorrect to treat the two terms as identical.' },

        // Block 5 — General addition rule (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.55, P(B) = 0.3, and P(A and B) = 0.2. Find P(A or B).', checkMode: 'auto', options: ['0.65', '0.85', '1.05', '0.55'], correctIndex: 0, explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.55 + 0.3 − 0.2 = 0.65. 0.85 forgets to subtract the overlap, 1.05 adds the overlap instead of subtracting it, and 0.55 uses only P(A).' },
        { difficulty: 'Medium-Hard', question: 'P(A) = 0.3, P(B) = 0.6, and A and B are mutually exclusive. Find P(A or B).', checkMode: 'auto', options: ['0.18', '0.9', '0.3', '1.0'], correctIndex: 1, explanation: 'Since mutually exclusive, P(A and B) = 0. P(A or B) = 0.3 + 0.6 − 0 = 0.9. 0.18 wrongly multiplies the probabilities, 0.3 subtracts instead of adding, and 1.0 rounds up incorrectly.' },
        { difficulty: 'Hard', question: 'In a group of learners, P(plays basketball) = 0.65, P(plays volleyball) = 0.45, and P(plays both) = 0.35. Find P(plays basketball or volleyball).', checkMode: 'auto', options: ['1.1', '0.35', '0.75', '0.65'], correctIndex: 2, explanation: 'P(basketball or volleyball) = P(basketball) + P(volleyball) − P(both) = 0.65 + 0.45 − 0.35 = 0.75. 1.1 forgets to subtract the overlap, 0.35 uses only P(both), and 0.65 uses only P(basketball).' },
        { difficulty: 'Hard', question: 'Zanele calculates P(A) = 0.6, P(B) = 0.5, P(A and B) = 0.35, and gets P(A or B) = 1.1. Explain why this result must be wrong and find the correct value.', checkMode: 'auto', options: ['Her answer is correct — probabilities can exceed 1 when both individual values are high.', 'Her error was in the given probabilities, not the calculation; 1.1 is acceptable.', 'She should have added all three numbers to get P(A or B) = 1.45.', 'A probability can never exceed 1, since it represents a proportion of the entire sample space. Her error was likely forgetting to subtract the overlap or adding incorrectly. The correct value is P(A or B) = 0.6 + 0.5 − 0.35 = 0.75, which is valid since it lies between 0 and 1.'], correctIndex: 3, explanation: 'A probability can never exceed 1. Zanele likely forgot to subtract the overlap or added incorrectly — the correct value is P(A or B) = 0.6 + 0.5 − 0.35 = 0.75.' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A Venn diagram shows 36 athletes in total: 4 play neither soccer nor netball, 20 play soccer, and 18 play netball. Find how many athletes play both sports.', checkMode: 'auto', options: ['6', '32', '2', '10'], correctIndex: 0, explanation: 'At least one = 36 − 4 = 32. Using the addition rule: 32 = 20 + 18 − both, so both = 38 − 32 = 6. 32 is "at least one" (not "both"), and 2 and 10 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A survey of 100 people about pets finds 48 own a dog, 40 own a cat, 32 own a fish, 19 own a dog and cat, 17 own a cat and fish, 13 own a dog and fish, and 6 own all three. Find how many people own none of the three pets.', checkMode: 'auto', options: ['77', '23', '17', '29'], correctIndex: 1, explanation: 'At least one pet = 48 + 40 + 32 − 19 − 17 − 13 + 6 = 77. None = 100 − 77 = 23. 77 is "at least one" (not "none"), and 17 and 29 come from arithmetic slips.' },
        { difficulty: 'Hard', question: 'A box has 9 pens: 5 blue and 4 black. Naledi picks a pen, keeps it, then picks a second pen without replacement. Find P(both pens are blue).', checkMode: 'auto', options: [frac('25', '81'), frac('5', '9'), frac('5', '18'), frac('1', '2')], correctIndex: 2, explanation: `P(blue first) = 5/9. Without replacement, P(blue second) = 4/8 = 1/2. Combined: 5/9 × 1/2 = ${frac('5', '18')}. ${frac('25', '81')} wrongly assumes replacement (using 5/9 twice), ${frac('5', '9')} only accounts for the first draw, and ${frac('1', '2')} only accounts for the second draw.` },
        { difficulty: 'Hard', question: 'Bongani says that for any two events A and B, P(A or B) is always equal to P(A) + P(B), regardless of whether the events overlap. Explain why this is only true in certain cases, referring to both the addition rule and mutually exclusive events.', checkMode: 'auto', options: ['He is correct — the addition rule always simplifies to P(A) + P(B) regardless of overlap.', 'He is correct only when P(A) and P(B) are both greater than 0.5.', 'He is incorrect because P(A or B) is always less than P(A) + P(B), no matter the overlap.', 'This is only true when A and B are mutually exclusive, meaning P(A and B) = 0, so the general addition rule P(A or B) = P(A) + P(B) − P(A and B) simplifies to P(A or B) = P(A) + P(B). If the events overlap (are not mutually exclusive), the intersection must be subtracted to avoid double-counting outcomes that belong to both events, so P(A or B) = P(A) + P(B) − P(A and B) with a nonzero P(A and B).'], correctIndex: 3, explanation: 'This is only true when A and B are mutually exclusive (P(A and B) = 0). If the events overlap, the intersection must be subtracted to avoid double-counting.' },
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
