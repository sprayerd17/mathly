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
        'Probability scale from 0 to 1 showing impossible at 0, even chance at half, and certain at 1 with colour coded labels',

      diagramSvg:
        '<svg viewBox="0 0 290 140" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="60" x2="265" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="25" cy="60" r="5" fill="#dc2626"/><circle cx="85" cy="60" r="5" fill="#ea580c"/><circle cx="145" cy="60" r="5" fill="#374151"/><circle cx="205" cy="60" r="5" fill="#2563eb"/><circle cx="265" cy="60" r="5" fill="#16a34a"/><text x="25" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">0</text><text x="145" y="45" font-size="11" fill="#374151" font-weight="700" text-anchor="middle">½</text><text x="265" y="45" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="25" y="82" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">Impossible</text><text x="85" y="82" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">Unlikely</text><text x="145" y="82" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Even chance</text><text x="205" y="82" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">Likely</text><text x="265" y="82" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">Certain</text></svg>',
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
        'Diagram of a bag with 5 red and 3 blue marbles showing favourable outcomes highlighted in green and total outcomes in blue',

      diagramSvg:
        '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><path d="M40,45 Q40,18 70,18 Q100,18 100,45 L94,120 Q94,142 70,142 Q46,142 46,120 Z" fill="#f3f4f6" stroke="#0f1f3d" stroke-width="2.5"/><path d="M55,18 Q70,8 85,18" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="50" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="50" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="48" cy="70" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="70" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="92" cy="70" r="7" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><ellipse cx="70" cy="104" rx="26" ry="22" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/><circle cx="58" cy="100" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="82" cy="100" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="70" cy="118" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="70" y="10" font-size="10" fill="#374151" font-weight="700" text-anchor="middle">Bag: 8 marbles</text><text x="165" y="60" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">total = 8</text><text x="165" y="105" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">favourable</text><text x="165" y="118" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">(blue) = 3</text></svg>',
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
        'Table comparing relative frequency and theoretical probability for a coin flip experiment across 10 50 and 200 trials showing convergence',

      diagramSvg:
        '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><line x1="35" y1="20" x2="35" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="35" y1="140" x2="210" y2="140" stroke="#0f1f3d" stroke-width="2"/><text x="28" y="24" font-size="9" fill="#374151" text-anchor="end">1</text><text x="28" y="144" font-size="9" fill="#374151" text-anchor="end">0</text><line x1="35" y1="80" x2="210" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/><text x="205" y="76" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="end">theoretical P = 0.5</text><polyline points="50,56 120,70.4 190,77.6" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="50" cy="56" r="4" fill="#ea580c"/><circle cx="120" cy="70.4" r="4" fill="#ea580c"/><circle cx="190" cy="77.6" r="4" fill="#ea580c"/><text x="50" y="48" font-size="8.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.70</text><text x="120" y="63" font-size="8.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.58</text><text x="190" y="70" font-size="8.5" fill="#ea580c" font-weight="700" text-anchor="middle">0.52</text><text x="50" y="152" font-size="8.5" fill="#374151" text-anchor="middle">10 trials</text><text x="120" y="152" font-size="8.5" fill="#374151" text-anchor="middle">50 trials</text><text x="190" y="152" font-size="8.5" fill="#374151" text-anchor="middle">200 trials</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Probability Scale/Language as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A weather app shows a 0% chance of rain today. Which word from the probability scale best describes this?', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'A probability of 0% (0) means the event cannot happen at all — this is impossible ✓' },
        { difficulty: 'Easy', question: 'The probability that Naledi picks a red card from a set is 3/4. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: '3/4 = 3 ÷ 4 = 0.75. As a percentage: 0.75 × 100 = 75% ✓' },
        { difficulty: 'Easy', question: 'A spinner has a probability of 0,2 of landing on green. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '2/10'], explanation: '0.2 = 2/10, which simplifies to 1/5 ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'A bag contains 6 red counters, 9 blue counters and 5 green counters. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '6/20'], explanation: 'Favourable outcomes = 6 red counters.\nTotal outcomes = 6 + 9 + 5 = 20 counters.\nP(red) = 6/20 = 3/10 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections, as shown: 3 orange sections and 5 teal sections. Find the probability of landing on orange, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.375', correctAnswers: ['0.375', '0,375', '3/8'], explanation: 'Favourable outcomes = 3 orange sections.\nTotal outcomes = 8 sections.\nP(orange) = 3/8 = 0.375 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'A bag has 10 counters in total, as shown: 3 are black and the rest are white. Find the probability of picking a black counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '30%', correctAnswers: ['30%', '30'], explanation: 'Favourable outcomes = 3 black counters.\nTotal outcomes = 10 counters.\nP(black) = 3/10 = 0.3 = 30% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="58" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="84" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections split between three teams: Team A has 4 sections, Team B has 3 sections, and Team C has 1 section. Find the probability of landing on Team B or Team C.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '4/8'], explanation: 'Favourable outcomes = Team B + Team C = 3 + 1 = 4 sections.\nTotal outcomes = 8 sections.\nP(B or C) = 4/8 = 1/2 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'A coin is flipped and a spinner with 4 equal sections coloured red, green, blue and yellow is spun, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting heads and red.', checkMode: 'auto', correctAnswer: '1/8', correctAnswers: ['1/8'], explanation: 'Total outcomes = 2 coin outcomes × 4 spinner outcomes = 8.\nFavourable outcomes = 1 (heads and red).\nP(heads and red) = 1/8 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="89.5" y1="82" x2="89.5" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127.0" y1="82" x2="127.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="164.5" y1="82" x2="164.5" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="70.8" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="108.2" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">G</text><text x="145.8" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><text x="183.2" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 7.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '6/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — that is 6 favourable outcomes.\nP(sum of 7) = 6/36 = 1/6 ✓' },
        { difficulty: 'Medium', question: 'A clothing shop lets Zinhle choose 1 of 3 t-shirt colours and 1 of 4 shorts colours to make an outfit. How many different outfits are possible, and what is the probability that Zinhle randomly ends up with one specific outfit combination?', checkMode: 'auto', correctAnswer: '12 outfits, 1/12', correctAnswers: ['12 outfits, 1/12', '12, 1/12', '12 and 1/12'], explanation: 'Total outfits = 3 t-shirt colours × 4 shorts colours = 12.\nP(one specific outfit) = 1/12, since there is only 1 favourable outcome out of 12 total ✓' },
        { difficulty: 'Medium', question: 'A student lists the sample space for flipping a coin twice as: HH, HT, TT. Explain what is wrong with this list, and give the correct total number of outcomes.', checkMode: 'self', answer: 'The student is missing the outcome TH (tails then heads). Since the order matters, HT and TH are different outcomes and must both be listed. The correct sample space is HH, HT, TH, TT — that is 4 outcomes, not 3.' },

        // Block 4 — Theoretical Probability Computation (11-13, Medium)
        { difficulty: 'Medium', question: 'Cards numbered 1 to 20 are placed in a box. Find the probability of picking a prime number. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '8/20'], explanation: 'Prime numbers from 1-20: 2, 3, 5, 7, 11, 13, 17, 19 — that is 8 favourable outcomes.\nTotal outcomes = 20.\nP(prime) = 8/20 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 12 equal sections numbered 1 to 12. Find the probability of landing on a multiple of 3, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.333', correctAnswers: ['0.333', '0,333', '1/3', '0.33', '0,33'], explanation: 'Multiples of 3 from 1-12: 3, 6, 9, 12 — that is 4 favourable outcomes.\nTotal outcomes = 12.\nP(multiple of 3) = 4/12 = 1/3 ≈ 0.33 ✓' },
        { difficulty: 'Medium', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing the ace of spades (one specific card).', checkMode: 'auto', correctAnswer: '1/52', correctAnswers: ['1/52'], explanation: 'Favourable outcomes = 1 (only one ace of spades in the deck).\nTotal outcomes = 52 cards.\nP(ace of spades) = 1/52 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency from Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Kagiso flips a coin 200 times and records heads 112 times. Find the relative frequency of heads as a percentage.', checkMode: 'auto', correctAnswer: '56%', correctAnswers: ['56%', '56'], explanation: 'Relative frequency = number of heads ÷ total trials = 112 ÷ 200 = 0.56 = 56% ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner with 4 equal colour sections is spun 150 times. The table below shows the results:\nRed: 45, Blue: 38, Green: 34, Yellow: 33.\nFind the relative frequency of landing on red, as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '45/150'], explanation: 'Relative frequency = number of red results ÷ total trials = 45 ÷ 150 = 3/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'Ayanda says that relative frequency and theoretical probability are calculated the same way, so they will always give the exact same value. Is Ayanda correct? Explain the difference between the two.', checkMode: 'self', answer: 'No, Ayanda is not correct. Theoretical probability is calculated from reasoning about equally likely outcomes (favourable outcomes ÷ total outcomes) before any experiment takes place. Relative frequency is calculated from actual experimental results (number of times an event occurred ÷ total number of trials). They are calculated using a similar structure, but relative frequency depends on what actually happened in an experiment, so it can vary and is usually close to, but not exactly equal to, the theoretical probability.' },

        // Block 6 — Multi-Step / Comparison Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Two learners each roll a dice and record how often they get a six. Learner A rolls 60 times and gets a six 8 times. Learner B rolls 90 times and gets a six 20 times. Whose relative frequency is closer to the theoretical probability of rolling a six? Show your working.', checkMode: 'self', answer: 'Theoretical probability of rolling a six = 1/6 ≈ 0.1667 (16.67%). Learner A: relative frequency = 8/60 = 2/15 ≈ 0.1333 (13.33%), a difference of about 3.34 percentage points from the theoretical value. Learner B: relative frequency = 20/90 = 2/9 ≈ 0.2222 (22.22%), a difference of about 5.55 percentage points. Since 3.34 < 5.55, Learner A\'s relative frequency is closer to the theoretical probability.' },
        { difficulty: 'Hard', question: 'A bag has 3 red counters and 7 blue counters. Thandiwe picks a counter, records its colour, replaces it, and picks again. Find the probability that she picks a red counter both times.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'P(red) each time = 3/10, since the counter is replaced (independent events).\nP(red both times) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'A raffle has 250 tickets, and Bandile buys 5 of them. Only 1 ticket wins the main prize, and a second, different ticket wins a smaller prize. Find the probability that Bandile wins the main prize AND the probability that a ticket he does NOT own wins the smaller prize, then explain which probability is greater.', checkMode: 'self', answer: 'P(Bandile wins main prize) = 5/250 = 1/50 = 0.02, since he holds 5 of the 250 tickets and only 1 ticket wins. P(a ticket Bandile does not own wins the smaller prize) = 245/250 = 49/50 = 0.98, since 245 of the 250 tickets are not his. The second probability (0.98) is far greater than the first (0.02), because Bandile owns only a small share of the total tickets, so it is much more likely that someone else\'s ticket is drawn.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability as fractions, decimals and percentages, sample spaces, and relative frequency.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 7 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability formula and relative frequency sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Probability Scale/Language as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A raffle guarantees that every single ticket sold will win a prize. Which word from the probability scale best describes the chance of winning a prize?', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Since every ticket wins a prize, the event will always happen — this is certain ✓' },
        { difficulty: 'Easy', question: 'The probability that Thabo picks a vowel card from a set is 2/5. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: '2/5 = 2 ÷ 5 = 0.4. As a percentage: 0.4 × 100 = 40% ✓' },
        { difficulty: 'Easy', question: 'A spinner has a probability of 0,35 of landing on purple. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '35/100'], explanation: '0.35 = 35/100, which simplifies to 7/20 ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'A bag contains 7 red counters and 13 blue counters. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20'], explanation: 'Favourable outcomes = 7 red counters.\nTotal outcomes = 7 + 13 = 20 counters.\nP(red) = 7/20 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections, as shown: 6 yellow sections and 2 pink sections. Find the probability of landing on yellow, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.75', correctAnswers: ['0.75', '0,75', '3/4'], explanation: 'Favourable outcomes = 6 yellow sections.\nTotal outcomes = 8 sections.\nP(yellow) = 6/8 = 3/4 = 0.75 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#db2777" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#db2777" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'A bag has 10 counters in total, as shown: 4 are black and the rest are white. Find the probability of picking a black counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Favourable outcomes = 4 black counters.\nTotal outcomes = 10 counters.\nP(black) = 4/10 = 0.4 = 40% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="58" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="84" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections split between three teams: Team A has 1 section, Team B has 4 sections, and Team C has 3 sections. Find the probability of landing on Team B or Team C.', checkMode: 'auto', correctAnswer: '7/8', correctAnswers: ['7/8'], explanation: 'Favourable outcomes = Team B + Team C = 4 + 3 = 7 sections.\nTotal outcomes = 8 sections.\nP(B or C) = 7/8 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'A coin is flipped and a spinner with 3 equal sections coloured orange, white and grey is spun, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting tails and grey.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Total outcomes = 2 coin outcomes × 3 spinner outcomes = 6.\nFavourable outcomes = 1 (tails and grey).\nP(tails and grey) = 1/6 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="102.0" y1="82" x2="102.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="152.0" y1="82" x2="152.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="77.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">O</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">W</text><text x="177.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gy</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 6.', checkMode: 'auto', correctAnswer: '5/36', correctAnswers: ['5/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 6: (1,5), (2,4), (3,3), (4,2), (5,1) — that is 5 favourable outcomes.\nP(sum of 6) = 5/36 ✓' },
        { difficulty: 'Medium', question: 'A stationery shop lets Sipho choose 1 of 3 pen colours and 1 of 5 notebook covers to make a set. How many different sets are possible, and what is the probability that Sipho randomly ends up with one specific set combination?', checkMode: 'auto', correctAnswer: '15 sets, 1/15', correctAnswers: ['15 sets, 1/15', '15, 1/15', '15 and 1/15'], explanation: 'Total sets = 3 pen colours × 5 notebook covers = 15.\nP(one specific set) = 1/15, since there is only 1 favourable outcome out of 15 total ✓' },
        { difficulty: 'Medium', question: 'A student lists the sample space for rolling a dice and flipping a coin as: 1H, 2H, 3H, 4H, 5H, 6H. Explain what is wrong with this list, and give the correct total number of outcomes.', checkMode: 'self', answer: 'The student is missing all the outcomes where the coin lands on tails: 1T, 2T, 3T, 4T, 5T, 6T. The correct sample space must pair every dice number with both coin outcomes, giving 1H, 2H, 3H, 4H, 5H, 6H, 1T, 2T, 3T, 4T, 5T, 6T — that is 12 outcomes (6 × 2 = 12), not 6.' },

        // Block 4 — Theoretical Probability Computation (11-13, Medium)
        { difficulty: 'Medium', question: 'Cards numbered 1 to 25 are placed in a box. Find the probability of picking a perfect square number. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '5/25'], explanation: 'Perfect squares from 1-25: 1, 4, 9, 16, 25 — that is 5 favourable outcomes.\nTotal outcomes = 25.\nP(perfect square) = 5/25 = 1/5 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 16 equal sections numbered 1 to 16. Find the probability of landing on a multiple of 4, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.25', correctAnswers: ['0.25', '0,25', '1/4'], explanation: 'Multiples of 4 from 1-16: 4, 8, 12, 16 — that is 4 favourable outcomes.\nTotal outcomes = 16.\nP(multiple of 4) = 4/16 = 1/4 = 0.25 ✓' },
        { difficulty: 'Medium', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing any king (there are 4 kings in the deck). Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/13', correctAnswers: ['1/13', '4/52'], explanation: 'Favourable outcomes = 4 kings.\nTotal outcomes = 52 cards.\nP(king) = 4/52 = 1/13 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency from Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Palesa flips a coin 250 times and records heads 145 times. Find the relative frequency of heads as a percentage.', checkMode: 'auto', correctAnswer: '58%', correctAnswers: ['58%', '58'], explanation: 'Relative frequency = number of heads ÷ total trials = 145 ÷ 250 = 0.58 = 58% ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner with 4 equal colour sections is spun 150 times. The table below shows the results:\nRed: 42, Blue: 60, Green: 25, Yellow: 23.\nFind the relative frequency of landing on blue, as a simplified fraction.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '60/150'], explanation: 'Relative frequency = number of blue results ÷ total trials = 60 ÷ 150 = 2/5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Sibusiso says that relative frequency and theoretical probability are calculated the same way, so they will always give the exact same value. Is Sibusiso correct? Explain the difference between the two.', checkMode: 'self', answer: 'No, Sibusiso is not correct. Theoretical probability is calculated from reasoning about equally likely outcomes (favourable outcomes ÷ total outcomes) before any experiment takes place. Relative frequency is calculated from actual experimental results (number of times an event occurred ÷ total number of trials). They are calculated using a similar structure, but relative frequency depends on what actually happened in an experiment, so it can vary and is usually close to, but not exactly equal to, the theoretical probability.' },

        // Block 6 — Multi-Step / Comparison Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Two learners each flip a coin and record how often they get heads. Learner A flips 80 times and gets heads 38 times. Learner B flips 120 times and gets heads 68 times. Whose relative frequency is closer to the theoretical probability of getting heads? Show your working.', checkMode: 'self', answer: 'Theoretical probability of getting heads = 1/2 = 0.5 (50%). Learner A: relative frequency = 38/80 = 19/40 = 0.475 (47.5%), a difference of 2.5 percentage points from the theoretical value. Learner B: relative frequency = 68/120 = 17/30 ≈ 0.5667 (56.67%), a difference of about 6.67 percentage points. Since 2.5 < 6.67, Learner A\'s relative frequency is closer to the theoretical probability.' },
        { difficulty: 'Hard', question: 'A bag has 4 red counters and 6 blue counters. Karabo picks a counter, records its colour, replaces it, and picks again. Find the probability that she picks a red counter both times.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25'], explanation: 'P(red) each time = 4/10 = 2/5, since the counter is replaced (independent events).\nP(red both times) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'A raffle has 300 tickets, and Nomvula buys 6 of them. Only 1 ticket wins the main prize, and a second, different ticket wins a smaller prize. Find the probability that Nomvula wins the main prize AND the probability that a ticket she does NOT own wins the smaller prize, then explain which probability is greater.', checkMode: 'self', answer: 'P(Nomvula wins main prize) = 6/300 = 1/50 = 0.02, since she holds 6 of the 300 tickets and only 1 ticket wins. P(a ticket Nomvula does not own wins the smaller prize) = 294/300 = 49/50 = 0.98, since 294 of the 300 tickets are not hers. The second probability (0.98) is far greater than the first (0.02), because Nomvula owns only a small share of the total tickets, so it is much more likely that someone else\'s ticket is drawn.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability as fractions, decimals and percentages, sample spaces, and relative frequency.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 7 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability formula and relative frequency sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Probability Scale/Language as Fraction, Decimal, Percentage (0-2, Easy)
        { difficulty: 'Easy', question: 'A box contains only yellow marbles. Which word from the probability scale best describes the chance of picking a marble that is NOT yellow?', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'Since every marble is yellow, picking a marble that is not yellow can never happen — this is impossible ✓' },
        { difficulty: 'Easy', question: 'The probability that Lindiwe picks a consonant card from a set is 5/8. Write this probability as a percentage.', checkMode: 'auto', correctAnswer: '62.5%', correctAnswers: ['62.5%', '62,5%', '62.5', '62,5'], explanation: '5/8 = 5 ÷ 8 = 0.625. As a percentage: 0.625 × 100 = 62.5% ✓' },
        { difficulty: 'Easy', question: 'A spinner has a probability of 0,75 of landing on white. Write this probability as a simplified fraction.', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '75/100'], explanation: '0.75 = 75/100, which simplifies to 3/4 ✓' },

        // Block 2 — Probability from a Spinner/Bag of Counters (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'A bag contains 9 red counters and 11 blue counters. Find the probability of picking a red counter. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '9/20', correctAnswers: ['9/20'], explanation: 'Favourable outcomes = 9 red counters.\nTotal outcomes = 9 + 11 = 20 counters.\nP(red) = 9/20 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections, as shown: 5 purple sections and 3 white sections. Find the probability of landing on purple, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.625', correctAnswers: ['0.625', '0,625', '5/8'], explanation: 'Favourable outcomes = 5 purple sections.\nTotal outcomes = 8 sections.\nP(purple) = 5/8 = 0.625 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'A bag has 10 counters in total, as shown: 7 are black and the rest are white. Find the probability of picking a black counter, and give your answer as a percentage.', checkMode: 'auto', correctAnswer: '70%', correctAnswers: ['70%', '70'], explanation: 'Favourable outcomes = 7 black counters.\nTotal outcomes = 10 counters.\nP(black) = 7/10 = 0.7 = 70% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="115" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="115" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections split between three teams: Team A has 2 sections, Team B has 1 section, and Team C has 5 sections. Find the probability of landing on Team A or Team B.', checkMode: 'auto', correctAnswer: '3/8', correctAnswers: ['3/8'], explanation: 'Favourable outcomes = Team A + Team B = 2 + 1 = 3 sections.\nTotal outcomes = 8 sections.\nP(A or B) = 3/8 ✓' },

        // Block 3 — Listing Sample Spaces for Combined Events (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'A coin is flipped and a spinner with 5 equal sections numbered 1 to 5 is spun, as shown. Use the empty grid, with coin outcomes down the side and spinner outcomes across the top, to help you find the probability of getting heads and 5.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Total outcomes = 2 coin outcomes × 5 spinner outcomes = 10.\nFavourable outcomes = 1 (heads and 5).\nP(heads and 5) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text></svg>' },
        { difficulty: 'Medium', question: 'Two normal dice are rolled together. Find the probability that the two dice show numbers that add up to 5.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Total outcomes = 6 × 6 = 36.\nPairs that add to 5: (1,4), (2,3), (3,2), (4,1) — that is 4 favourable outcomes.\nP(sum of 5) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium', question: 'A fast food shop lets Ntando choose 1 of 4 burger types and 1 of 6 drink flavours to make a meal. How many different meals are possible, and what is the probability that Ntando randomly ends up with one specific meal combination?', checkMode: 'auto', correctAnswer: '24 meals, 1/24', correctAnswers: ['24 meals, 1/24', '24, 1/24', '24 and 1/24'], explanation: 'Total meals = 4 burger types × 6 drink flavours = 24.\nP(one specific meal) = 1/24, since there is only 1 favourable outcome out of 24 total ✓' },
        { difficulty: 'Medium', question: 'A student lists the sample space for rolling two dice and only records the totals 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 as the "possible outcomes", each counted once. Explain what is wrong with this approach, and state the correct total number of outcomes.', checkMode: 'self', answer: 'The student has listed only the possible totals, not the actual outcomes of the two dice. Each total is not equally likely — for example, a total of 7 can happen in 6 different ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), while a total of 2 can only happen in 1 way (1+1). To correctly list the sample space, every ordered pair of dice results must be counted, giving 6 × 6 = 36 total outcomes, not 11.' },

        // Block 4 — Theoretical Probability Computation (11-13, Medium)
        { difficulty: 'Medium', question: 'Cards numbered 1 to 30 are placed in a box. Find the probability of picking a multiple of 5. Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30'], explanation: 'Multiples of 5 from 1-30: 5, 10, 15, 20, 25, 30 — that is 6 favourable outcomes.\nTotal outcomes = 30.\nP(multiple of 5) = 6/30 = 1/5 ✓' },
        { difficulty: 'Medium', question: 'A spinner has 18 equal sections numbered 1 to 18. Find the probability of landing on a multiple of 6, and give your answer as a decimal.', checkMode: 'auto', correctAnswer: '0.167', correctAnswers: ['0.167', '0,167', '1/6', '0.17', '0,17'], explanation: 'Multiples of 6 from 1-18: 6, 12, 18 — that is 3 favourable outcomes.\nTotal outcomes = 18.\nP(multiple of 6) = 3/18 = 1/6 ≈ 0.17 ✓' },
        { difficulty: 'Medium', question: 'A standard deck of 52 playing cards is shuffled. Find the probability of drawing any heart (there are 13 hearts in the deck). Give your answer as a simplified fraction.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '13/52'], explanation: 'Favourable outcomes = 13 hearts.\nTotal outcomes = 52 cards.\nP(heart) = 13/52 = 1/4 ✓' },

        // Block 5 — Experimental Probability / Relative Frequency from Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Zamani flips a coin 400 times and records heads 210 times. Find the relative frequency of heads as a percentage.', checkMode: 'auto', correctAnswer: '52.5%', correctAnswers: ['52.5%', '52,5%', '52.5', '52,5'], explanation: 'Relative frequency = number of heads ÷ total trials = 210 ÷ 400 = 0.525 = 52.5% ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner with 4 equal colour sections is spun 150 times. The table below shows the results:\nRed: 36, Blue: 40, Green: 39, Yellow: 35.\nFind the relative frequency of landing on red, as a simplified fraction.', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '36/150'], explanation: 'Relative frequency = number of red results ÷ total trials = 36 ÷ 150 = 6/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Buhle says that relative frequency and theoretical probability are calculated the same way, so they will always give the exact same value. Is Buhle correct? Explain the difference between the two.', checkMode: 'self', answer: 'No, Buhle is not correct. Theoretical probability is calculated from reasoning about equally likely outcomes (favourable outcomes ÷ total outcomes) before any experiment takes place. Relative frequency is calculated from actual experimental results (number of times an event occurred ÷ total number of trials). They are calculated using a similar structure, but relative frequency depends on what actually happened in an experiment, so it can vary and is usually close to, but not exactly equal to, the theoretical probability.' },

        // Block 6 — Multi-Step / Comparison Reasoning (17-19, Hard)
        { difficulty: 'Hard', question: 'Two learners each spin a 5-section spinner and record how often they land on red. Learner A spins 50 times and lands on red 8 times. Learner B spins 100 times and lands on red 22 times. Whose relative frequency is closer to the theoretical probability of landing on red? Show your working.', checkMode: 'self', answer: 'Theoretical probability of landing on red = 1/5 = 0.2 (20%), since red is 1 of the 5 equal sections. Learner A: relative frequency = 8/50 = 4/25 = 0.16 (16%), a difference of 4 percentage points from the theoretical value. Learner B: relative frequency = 22/100 = 11/50 = 0.22 (22%), a difference of 2 percentage points. Since 2 < 4, Learner B\'s relative frequency is closer to the theoretical probability.' },
        { difficulty: 'Hard', question: 'A bag has 5 red counters and 5 blue counters. Amahle picks a counter, records its colour, replaces it, and picks again. Find the probability that she picks a red counter both times.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'P(red) each time = 5/10 = 1/2, since the counter is replaced (independent events).\nP(red both times) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'A raffle has 400 tickets, and Mpho buys 8 of them. Only 1 ticket wins the main prize, and a second, different ticket wins a smaller prize. Find the probability that Mpho wins the main prize AND the probability that a ticket he does NOT own wins the smaller prize, then explain which probability is greater.', checkMode: 'self', answer: 'P(Mpho wins main prize) = 8/400 = 1/50 = 0.02, since he holds 8 of the 400 tickets and only 1 ticket wins. P(a ticket Mpho does not own wins the smaller prize) = 392/400 = 49/50 = 0.98, since 392 of the 400 tickets are not his. The second probability (0.98) is far greater than the first (0.02), because Mpho owns only a small share of the total tickets, so it is much more likely that someone else\'s ticket is drawn.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered probability as fractions, decimals and percentages, sample spaces, and relative frequency.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of Grade 7 probability — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the probability formula and relative frequency sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
