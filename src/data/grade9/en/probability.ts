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
        'A two-way table with coin flip outcomes (heads/tails) as rows and dice outcomes (1-6) as columns, with all 12 combinations shown in the grid and the two favourable (heads, >4) cells highlighted',

      diagramSvg:
        '<svg viewBox="0 0 230 102" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Coin × dice: 2 rows × 6 columns = 12 outcomes</text><rect x="155" y="42" width="30" height="20" fill="#fff7ed"/><rect x="185" y="42" width="30" height="20" fill="#fff7ed"/><rect x="5" y="22" width="210" height="60" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="5" y1="42" x2="215" y2="42" stroke="#0f1f3d" stroke-width="1.2"/><line x1="5" y1="62" x2="215" y2="62" stroke="#0f1f3d" stroke-width="1.2"/><line x1="35" y1="22" x2="35" y2="82" stroke="#0f1f3d" stroke-width="1.5"/><line x1="65" y1="22" x2="65" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="22" x2="95" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="125" y1="22" x2="125" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="155" y1="22" x2="155" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="185" y1="22" x2="185" y2="82" stroke="#0f1f3d" stroke-width="1"/><rect x="155" y="42" width="30" height="20" fill="none" stroke="#ea580c" stroke-width="2"/><rect x="185" y="42" width="30" height="20" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">1</text><text x="80" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">2</text><text x="110" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">3</text><text x="140" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">4</text><text x="170" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">5</text><text x="200" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">6</text><text x="20" y="56" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">H</text><text x="20" y="76" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">T</text><text x="50" y="56" font-size="9" fill="#374151" text-anchor="middle">H,1</text><text x="80" y="56" font-size="9" fill="#374151" text-anchor="middle">H,2</text><text x="110" y="56" font-size="9" fill="#374151" text-anchor="middle">H,3</text><text x="140" y="56" font-size="9" fill="#374151" text-anchor="middle">H,4</text><text x="170" y="56" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">H,5</text><text x="200" y="56" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">H,6</text><text x="50" y="76" font-size="9" fill="#374151" text-anchor="middle">T,1</text><text x="80" y="76" font-size="9" fill="#374151" text-anchor="middle">T,2</text><text x="110" y="76" font-size="9" fill="#374151" text-anchor="middle">T,3</text><text x="140" y="76" font-size="9" fill="#374151" text-anchor="middle">T,4</text><text x="170" y="76" font-size="9" fill="#374151" text-anchor="middle">T,5</text><text x="200" y="76" font-size="9" fill="#374151" text-anchor="middle">T,6</text><text x="110" y="97" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">P(heads AND &gt;4) = 2 ÷ 12 = 1/6</text></svg>',
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
        'A tree diagram showing two coin flips, with branches for heads and tails at each stage, and probabilities labelled on each branch leading to four final outcomes each with combined probability 1/4',

      diagramSvg:
        '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg"><text x="130" y="12" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Two coin flips</text><line x1="20" y1="90" x2="100" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="90" x2="100" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="40" x2="190" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="40" x2="190" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="140" x2="190" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="140" x2="190" y2="160" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="90" r="3.5" fill="#0f1f3d"/><circle cx="100" cy="40" r="3.5" fill="#0f1f3d"/><circle cx="100" cy="140" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="20" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="60" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="120" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="160" r="3.5" fill="#0f1f3d"/><text x="52" y="58" font-size="9" font-weight="700" fill="#2563eb">H, 1/2</text><text x="52" y="122" font-size="9" font-weight="700" fill="#2563eb">T, 1/2</text><text x="140" y="24" font-size="9" font-weight="700" fill="#16a34a">H, 1/2</text><text x="140" y="58" font-size="9" font-weight="700" fill="#16a34a">T, 1/2</text><text x="140" y="118" font-size="9" font-weight="700" fill="#16a34a">H, 1/2</text><text x="140" y="152" font-size="9" font-weight="700" fill="#16a34a">T, 1/2</text><text x="196" y="17" font-size="10" font-weight="700" fill="#ea580c">HH = 1/4</text><text x="196" y="57" font-size="10" font-weight="700" fill="#ea580c">HT = 1/4</text><text x="196" y="117" font-size="10" font-weight="700" fill="#ea580c">TH = 1/4</text><text x="196" y="157" font-size="10" font-weight="700" fill="#ea580c">TT = 1/4</text></svg>',
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
        'A comparison showing predicted frequency versus actual frequency for a two-coin flip experiment (80 flips), plus a graph illustrating how the relative frequency converges toward the theoretical probability of 1/4 as the number of trials increases',

      diagramSvg:
        '<svg viewBox="0 0 270 125" xmlns="http://www.w3.org/2000/svg"><text x="62" y="12" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">80 coin flips (HH)</text><line x1="20" y1="100" x2="105" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="25" y1="44" x2="95" y2="44" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/><rect x="35" y="44" width="18" height="56" fill="#2563eb"/><rect x="65" y="36" width="18" height="64" fill="#ea580c"/><text x="44" y="112" font-size="7" fill="#2563eb" text-anchor="middle">Predicted</text><text x="44" y="121" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">20</text><text x="74" y="112" font-size="7" fill="#ea580c" text-anchor="middle">Actual</text><text x="74" y="121" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">23</text><text x="205" y="12" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">More trials → closer to 1/4</text><line x1="150" y1="100" x2="255" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="150" y1="100" x2="150" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><line x1="150" y1="60" x2="255" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><text x="258" y="63" font-size="8" font-weight="700" fill="#16a34a">1/4</text><polyline points="160,30 175,85 190,45 205,72 220,55 235,64 248,58" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="160" cy="30" r="2" fill="#ea580c"/><circle cx="175" cy="85" r="2" fill="#ea580c"/><circle cx="190" cy="45" r="2" fill="#ea580c"/><circle cx="205" cy="72" r="2" fill="#ea580c"/><circle cx="220" cy="55" r="2" fill="#ea580c"/><circle cx="235" cy="64" r="2" fill="#ea580c"/><circle cx="248" cy="58" r="2" fill="#ea580c"/><text x="202" y="112" font-size="7" fill="#6b7280" text-anchor="middle">trials →</text></svg>',
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

  // ─────────────────────────────────────────────────────────────────────────
  // PRACTICE SETS — 3 sets of 20 questions each (Phase 1: content only, no diagrams)
  // Block 1 (0-2):   Relative frequency — predicted vs actual, explain difference
  // Block 2 (3-5):   Single-event probability from a bag/spinner [DIAGRAM LATER]
  // Block 3 (6-9):   Complementary events P(not A) = 1 − P(A)
  // Block 4 (10-13): Sample space — two dice / coin+die grid [DIAGRAM LATER]
  // Block 5 (14-17): Venn diagram — two-set probability [DIAGRAM LATER]
  // Block 6 (18-19): Combined multi-step probability problem
  // ─────────────────────────────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Relative frequency (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 60 times. Based on theoretical probability, how many times would you predict the dice will show a 3?', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'P(3) = 1/6. Predicted frequency = 1/6 × 60 = 10.' },
        { difficulty: 'Easy', question: 'A coin is flipped 50 times and lands heads 28 times. Find the relative frequency of heads as a fraction.', checkMode: 'auto', correctAnswer: '14/25', correctAnswers: ['14/25', '28/50'], answer: '14/25', explanation: 'Relative frequency = number of heads ÷ total flips = 28/50 = 14/25.' },
        { difficulty: 'Easy', question: 'Zanele predicts that rolling a dice 120 times should give a 5 about 20 times (since P(5) = 1/6). She actually gets 24. Explain the difference.', answer: 'Expected = 120 × 1/6 = 20. Getting 24 is somewhat higher than expected, but with a limited number of trials this kind of variation happens naturally due to randomness. More rolls would likely bring the result closer to 20.', checkMode: 'self' },

        // Block 2 — Single-event probability from a bag/spinner (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A bag contains 5 red counters, 3 blue counters and 2 green counters. One counter is drawn at random. Find P(blue).', checkMode: 'auto', correctAnswer: '3/10', answer: '3/10', explanation: 'Total counters = 5 + 3 + 2 = 10. P(blue) = 3/10.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#2563eb" font-weight="700">5 red</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">3 blue</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#2563eb" font-weight="700">2 green</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A spinner is divided into 8 equal sectors: 4 yellow, 3 purple and 1 orange. The spinner is spun once. Find P(purple).', checkMode: 'auto', correctAnswer: '3/8', answer: '3/8', explanation: 'Total sectors = 8. Favourable (purple) = 3. P(purple) = 3/8.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 0 1 130.00,183.00 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 130.00,183.00 A 78,78 0 0 1 74.85,49.85 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 74.85,49.85 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="178.36" y="105.00" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">yellow (4)</text><text x="85.32" y="123.51" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">purple (3)</text><text x="111.49" y="60.32" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">orange (1)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A box contains 6 white balls, 4 black balls and 5 orange balls. One ball is drawn at random. Find P(white) as a percentage.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], answer: '40%', explanation: 'Total balls = 6 + 4 + 5 = 15. P(white) = 6/15 = 2/5 = 40%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#2563eb" font-weight="700">6 white</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#2563eb" font-weight="700">4 black</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#2563eb" font-weight="700">5 orange</text></svg>' },

        // Block 3 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(it rains tomorrow) = 0.35. Find P(it does not rain tomorrow).', checkMode: 'auto', correctAnswer: '0.65', answer: '0.65', explanation: 'Complementary events: P(not A) = 1 − P(A) = 1 − 0.35 = 0.65.' },
        { difficulty: 'Medium', question: 'A bag has 12 marbles, of which 5 are red. One marble is drawn at random. Find P(not red).', checkMode: 'auto', correctAnswer: '7/12', answer: '7/12', explanation: 'P(red) = 5/12. P(not red) = 1 − 5/12 = 7/12.' },
        { difficulty: 'Medium', question: 'The probability that Thabo passes his driving test on the first attempt is 3/8. Find the probability he does not pass on the first attempt.', checkMode: 'auto', correctAnswer: '5/8', answer: '5/8', explanation: 'P(not pass) = 1 − P(pass) = 1 − 3/8 = 5/8.' },
        { difficulty: 'Medium', question: 'Lindiwe says that if P(event A) = 0.4, then P(not A) must be 0.4 as well, "since they are opposites." Explain why she is wrong and give the correct value.', answer: 'She is wrong — complementary probabilities add to 1, they are not automatically equal. P(not A) = 1 − P(A) = 1 − 0.4 = 0.6, not 0.4.', checkMode: 'self' },

        // Block 4 — Sample space (two dice / coin+die grid) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a dice is rolled, and the sample space grid of 12 outcomes is shown. Find P(tails and a number greater than 3).', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], answer: '1/4', explanation: 'Total outcomes = 12. Numbers greater than 3 are 4, 5, 6, so favourable outcomes (tails, 4), (tails, 5), (tails, 6) = 3. P = 3/12 = 1/4.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">H</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">T</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(the sum is 8).', checkMode: 'auto', correctAnswer: '5/36', answer: '5/36', explanation: 'Total outcomes = 36. Pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 favourable outcomes. P = 5/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(both dice show the same number).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '6/36'], answer: '1/6', explanation: 'Total outcomes = 36. Matching pairs: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 favourable outcomes. P = 6/36 = 1/6.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Sipho uses a sample space grid for two dice rolls and predicts a sum of 8 should occur about 5/36 of the time over 180 rolls (25 times). He actually gets 30. Is this surprising? Explain.', answer: 'Expected = 180 × 5/36 = 25. Getting 30 is somewhat higher than expected, but with a limited number of trials this variation can occur naturally due to randomness. More rolls would likely bring the result closer to 25.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Block 5 — Venn diagram two-set probability (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'A Venn diagram shows 30 learners: 12 study only Maths, 8 study only Science, 6 study both Maths and Science, and 4 study neither. Find P(a learner studies both Maths and Science).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30'], answer: '1/5', explanation: 'Total learners = 30. Favourable (both) = 6. P(both) = 6/30 = 1/5.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 30 learners: 12 study only Maths, 8 study only Science, 6 study both, and 4 study neither. Find P(a learner studies Maths or Science, or both).', checkMode: 'auto', correctAnswer: '13/15', correctAnswers: ['13/15', '26/30'], answer: '13/15', explanation: 'Maths or Science (or both) = only Maths + only Science + both = 12 + 8 + 6 = 26. P = 26/30 = 13/15.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 40 people: 15 own only a car, 10 own only a bicycle, 9 own both, and 6 own neither. Find P(a person owns exactly one of the two, car or bicycle).', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '25/40'], answer: '5/8', explanation: 'Exactly one = only car + only bicycle = 15 + 10 = 25. P = 25/40 = 5/8.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: "Amahle's Venn diagram shows 50 shoppers: 20 buy only fruit, 14 buy only vegetables, 10 buy both, and 6 buy neither. She claims P(buys neither) = 6/44 because 44 shoppers bought something. Explain her error and give the correct probability.", answer: 'She used the wrong total. The probability must always be found using the total sample size (all 50 shoppers), not just those who bought something. P(buys neither) = 6/50 = 3/25, not 6/44.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A box has 8 pens: 5 blue and 3 black. Thabo picks a pen, keeps it, then picks a second pen. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '5/14', answer: '5/14', explanation: 'P(blue first) = 5/8. Without replacement, P(blue second) = 4/7. Combined: 5/8 × 4/7 = 20/56 = 5/14.' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 45 athletes: 18 play only soccer, 12 play only netball, 9 play both, and 6 play neither. If an athlete who plays soccer is chosen at random, find the probability that they also play netball.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '9/27'], answer: '1/3', explanation: 'Athletes who play soccer = only soccer + both = 18 + 9 = 27. Of these, 9 also play netball. P = 9/27 = 1/3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, single and compound event probability, and Venn diagrams.' },
        { minScore: 15, message: 'Great work! Review any missed questions on sample space grids or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on complementary events and two-way tables, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Relative frequency (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 90 times. Based on theoretical probability, how many times would you predict the dice will show a 6?', checkMode: 'auto', correctAnswer: '15', answer: '15', explanation: 'P(6) = 1/6. Predicted frequency = 1/6 × 90 = 15.' },
        { difficulty: 'Easy', question: 'A coin is flipped 80 times and lands heads 34 times. Find the relative frequency of heads as a fraction.', checkMode: 'auto', correctAnswer: '17/40', correctAnswers: ['17/40', '34/80'], answer: '17/40', explanation: 'Relative frequency = number of heads ÷ total flips = 34/80 = 17/40.' },
        { difficulty: 'Easy', question: 'Bongani predicts that rolling a dice 90 times should give a 2 about 15 times (since P(2) = 1/6). He actually gets 19. Explain the difference.', answer: 'Expected = 90 × 1/6 = 15. Getting 19 is somewhat higher than expected, but with a limited number of trials this kind of variation happens naturally due to randomness. More rolls would likely bring the result closer to 15.', checkMode: 'self' },

        // Block 2 — Single-event probability from a bag/spinner (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A bag contains 4 red counters, 6 blue counters and 2 green counters. One counter is drawn at random. Find P(green).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], answer: '1/6', explanation: 'Total counters = 4 + 6 + 2 = 12. P(green) = 2/12 = 1/6.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#2563eb" font-weight="700">4 red</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">6 blue</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#2563eb" font-weight="700">2 green</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A spinner is divided into 10 equal sectors: 6 yellow, 3 purple and 1 orange. The spinner is spun once. Find P(yellow).', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '6/10'], answer: '3/5', explanation: 'Total sectors = 10. Favourable (yellow) = 6. P(yellow) = 6/10 = 3/5.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 1 1 84.15,168.10 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 84.15,168.10 A 78,78 0 0 1 84.15,41.90 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 84.15,41.90 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="175.99" y="119.94" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">yellow (6)</text><text x="81.64" y="105.00" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">purple (3)</text><text x="115.06" y="59.01" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">orange (1)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A box contains 9 white balls, 3 black balls and 8 orange balls. One ball is drawn at random. Find P(black) as a percentage.', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], answer: '15%', explanation: 'Total balls = 9 + 3 + 8 = 20. P(black) = 3/20 = 15%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#2563eb" font-weight="700">9 white</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#2563eb" font-weight="700">3 black</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#2563eb" font-weight="700">8 orange</text></svg>' },

        // Block 3 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a bus arrives late) = 0.28. Find P(the bus does not arrive late).', checkMode: 'auto', correctAnswer: '0.72', answer: '0.72', explanation: 'Complementary events: P(not A) = 1 − P(A) = 1 − 0.28 = 0.72.' },
        { difficulty: 'Medium', question: 'A bag has 20 marbles, of which 7 are red. One marble is drawn at random. Find P(not red).', checkMode: 'auto', correctAnswer: '13/20', answer: '13/20', explanation: 'P(red) = 7/20. P(not red) = 1 − 7/20 = 13/20.' },
        { difficulty: 'Medium', question: 'The probability that Naledi wins a game of chess is 5/9. Find the probability she does not win.', checkMode: 'auto', correctAnswer: '4/9', answer: '4/9', explanation: 'P(not win) = 1 − P(win) = 1 − 5/9 = 4/9.' },
        { difficulty: 'Medium', question: 'Kagiso says that if P(event A) = 0.7, then P(not A) must also be 0.7, "since probabilities are symmetric." Explain why he is wrong and give the correct value.', answer: 'He is wrong — complementary probabilities add up to 1, they are not automatically equal. P(not A) = 1 − P(A) = 1 − 0.7 = 0.3, not 0.7.', checkMode: 'self' },

        // Block 4 — Sample space (two dice / coin+die grid) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a dice is rolled, and the sample space grid of 12 outcomes is shown. Find P(heads and a number less than 3).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], answer: '1/6', explanation: 'Total outcomes = 12. Numbers less than 3 are 1, 2, so favourable outcomes (heads, 1), (heads, 2) = 2. P = 2/12 = 1/6.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">H</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">T</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(the sum is 6).', checkMode: 'auto', correctAnswer: '5/36', answer: '5/36', explanation: 'Total outcomes = 36. Pairs summing to 6: (1,5), (2,4), (3,3), (4,2), (5,1) = 5 favourable outcomes. P = 5/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(the two dice differ by exactly 1).', checkMode: 'auto', correctAnswer: '5/18', correctAnswers: ['5/18', '10/36'], answer: '5/18', explanation: 'Total outcomes = 36. Pairs differing by 1: (1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(4,5),(5,4),(5,6),(6,5) = 10 favourable outcomes. P = 10/36 = 5/18.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Lerato uses a sample space grid for two dice rolls and predicts a sum of 6 should occur about 5/36 of the time over 144 rolls (20 times). She actually gets 24. Is this surprising? Explain.', answer: 'Expected = 144 × 5/36 = 20. Getting 24 is somewhat higher than expected, but with a limited number of trials this variation can occur naturally due to randomness. More rolls would likely bring the result closer to 20.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Block 5 — Venn diagram two-set probability (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'A Venn diagram shows 40 learners: 16 study only Maths, 10 study only Science, 8 study both Maths and Science, and 6 study neither. Find P(a learner studies both Maths and Science).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '8/40'], answer: '1/5', explanation: 'Total learners = 40. Favourable (both) = 8. P(both) = 8/40 = 1/5.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 40 learners: 16 study only Maths, 10 study only Science, 8 study both, and 6 study neither. Find P(a learner studies Maths or Science, or both).', checkMode: 'auto', correctAnswer: '17/20', correctAnswers: ['17/20', '34/40'], answer: '17/20', explanation: 'Maths or Science (or both) = only Maths + only Science + both = 16 + 10 + 8 = 34. P = 34/40 = 17/20.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 50 people: 18 own only a car, 14 own only a bicycle, 10 own both, and 8 own neither. Find P(a person owns exactly one of the two, car or bicycle).', checkMode: 'auto', correctAnswer: '16/25', correctAnswers: ['16/25', '32/50'], answer: '16/25', explanation: 'Exactly one = only car + only bicycle = 18 + 14 = 32. P = 32/50 = 16/25.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: "Sipho's Venn diagram shows 60 shoppers: 24 buy only fruit, 18 buy only vegetables, 12 buy both, and 6 buy neither. He claims P(buys neither) = 6/54 because 54 shoppers bought something. Explain his error and give the correct probability.", answer: 'He used the wrong total. The probability must always be found using the total sample size (all 60 shoppers), not just those who bought something. P(buys neither) = 6/60 = 1/10, not 6/54.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A box has 9 pens: 6 blue and 3 black. Lerato picks a pen, keeps it, then picks a second pen. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '5/12', answer: '5/12', explanation: 'P(blue first) = 6/9 = 2/3. Without replacement, P(blue second) = 5/8. Combined: 2/3 × 5/8 = 10/24 = 5/12.' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 50 athletes: 20 play only soccer, 14 play only netball, 10 play both, and 6 play neither. If an athlete who plays soccer is chosen at random, find the probability that they also play netball.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '10/30'], answer: '1/3', explanation: 'Athletes who play soccer = only soccer + both = 20 + 10 = 30. Of these, 10 also play netball. P = 10/30 = 1/3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, single and compound event probability, and Venn diagrams.' },
        { minScore: 15, message: 'Great work! Review any missed questions on sample space grids or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on complementary events and two-way tables, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Relative frequency (Easy)
        { difficulty: 'Easy', question: 'A dice is rolled 150 times. Based on theoretical probability, how many times would you predict the dice will show a 4?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: 'P(4) = 1/6. Predicted frequency = 1/6 × 150 = 25.' },
        { difficulty: 'Easy', question: 'A coin is flipped 40 times and lands heads 23 times. Find the relative frequency of heads as a fraction.', checkMode: 'auto', correctAnswer: '23/40', answer: '23/40', explanation: 'Relative frequency = number of heads ÷ total flips = 23/40.' },
        { difficulty: 'Easy', question: 'Amahle predicts that rolling a dice 72 times should give a 1 about 12 times (since P(1) = 1/6). She actually gets 15. Explain the difference.', answer: 'Expected = 72 × 1/6 = 12. Getting 15 is somewhat higher than expected, but with a limited number of trials this kind of variation happens naturally due to randomness. More rolls would likely bring the result closer to 12.', checkMode: 'self' },

        // Block 2 — Single-event probability from a bag/spinner (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'A bag contains 7 red counters, 2 blue counters and 3 green counters. One counter is drawn at random. Find P(red).', checkMode: 'auto', correctAnswer: '7/12', answer: '7/12', explanation: 'Total counters = 7 + 2 + 3 = 12. P(red) = 7/12.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#2563eb" font-weight="700">7 red</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">2 blue</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#2563eb" font-weight="700">3 green</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'A spinner is divided into 6 equal sectors: 1 yellow, 2 purple and 3 orange. The spinner is spun once. Find P(orange).', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], answer: '1/2', explanation: 'Total sectors = 6. Favourable (orange) = 3. P(orange) = 3/6 = 1/2.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 0 1 197.55,66.00 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 197.55,66.00 A 78,78 0 0 1 130.00,183.00 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 130.00,183.00 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="154.18" y="63.12" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">yellow (1)</text><text x="171.88" y="129.18" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">purple (2)</text><text x="81.64" y="105.00" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">orange (3)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A box contains 5 white balls, 10 black balls and 5 orange balls. One ball is drawn at random. Find P(orange) as a percentage.', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], answer: '25%', explanation: 'Total balls = 5 + 10 + 5 = 20. P(orange) = 5/20 = 1/4 = 25%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#2563eb" font-weight="700">5 white</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#2563eb" font-weight="700">10 black</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#2563eb" font-weight="700">5 orange</text></svg>' },

        // Block 3 — Complementary events (Medium)
        { difficulty: 'Medium', question: 'P(a shop is open on a public holiday) = 0.45. Find P(the shop is not open on a public holiday).', checkMode: 'auto', correctAnswer: '0.55', answer: '0.55', explanation: 'Complementary events: P(not A) = 1 − P(A) = 1 − 0.45 = 0.55.' },
        { difficulty: 'Medium', question: 'A bag has 15 marbles, of which 4 are red. One marble is drawn at random. Find P(not red).', checkMode: 'auto', correctAnswer: '11/15', answer: '11/15', explanation: 'P(red) = 4/15. P(not red) = 1 − 4/15 = 11/15.' },
        { difficulty: 'Medium', question: 'The probability that Zanele arrives at school before 7:30 is 7/10. Find the probability she does not arrive before 7:30.', checkMode: 'auto', correctAnswer: '3/10', answer: '3/10', explanation: 'P(not before 7:30) = 1 − P(before 7:30) = 1 − 7/10 = 3/10.' },
        { difficulty: 'Medium', question: 'Thabo says that if P(event A) = 0.15, then P(not A) must also be small, "since A itself is unlikely." Explain why this reasoning is wrong and give the correct value.', answer: 'He is wrong — a small P(A) means P(not A) is actually large, since the two must add to 1. P(not A) = 1 − 0.15 = 0.85, which is large, not small.', checkMode: 'self' },

        // Block 4 — Sample space (two dice / coin+die grid) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'A coin is flipped and a dice is rolled, and the sample space grid of 12 outcomes is shown. Find P(tails and an even number).', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], answer: '1/4', explanation: 'Total outcomes = 12. Even numbers are 2, 4, 6, so favourable outcomes (tails, 2), (tails, 4), (tails, 6) = 3. P = 3/12 = 1/4.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">H</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">T</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(the sum is 10).', checkMode: 'auto', correctAnswer: '1/12', correctAnswers: ['1/12', '3/36'], answer: '1/12', explanation: 'Total outcomes = 36. Pairs summing to 10: (4,6), (5,5), (6,4) = 3 favourable outcomes. P = 3/36 = 1/12.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two dice are rolled and the sample space grid of 36 outcomes is shown. Find P(at least one dice shows a 6).', checkMode: 'auto', correctAnswer: '11/36', answer: '11/36', explanation: 'Total outcomes = 36. Outcomes with at least one 6: all pairs (6, x) and (x, 6) for x = 1 to 6, minus the double-counted (6,6) = 6 + 6 − 1 = 11. P = 11/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Buhle uses a sample space grid for two dice rolls and predicts a sum of 10 should occur about 1/12 of the time over 96 rolls (8 times). She actually gets 11. Is this surprising? Explain.', answer: 'Expected = 96 × 1/12 = 8. Getting 11 is somewhat higher than expected, but with a limited number of trials this variation can occur naturally due to randomness. More rolls would likely bring the result closer to 8.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Block 5 — Venn diagram two-set probability (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'A Venn diagram shows 36 learners: 14 study only Maths, 9 study only Science, 7 study both Maths and Science, and 6 study neither. Find P(a learner studies both Maths and Science).', checkMode: 'auto', correctAnswer: '7/36', answer: '7/36', explanation: 'Total learners = 36. Favourable (both) = 7. P(both) = 7/36.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 36 learners: 14 study only Maths, 9 study only Science, 7 study both, and 6 study neither. Find P(a learner studies Maths or Science, or both).', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6', '30/36'], answer: '5/6', explanation: 'Maths or Science (or both) = only Maths + only Science + both = 14 + 9 + 7 = 30. P = 30/36 = 5/6.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 45 people: 16 own only a car, 13 own only a bicycle, 8 own both, and 8 own neither. Find P(a person owns exactly one of the two, car or bicycle).', checkMode: 'auto', correctAnswer: '29/45', answer: '29/45', explanation: 'Exactly one = only car + only bicycle = 16 + 13 = 29. P = 29/45.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: "Lindiwe's Venn diagram shows 55 shoppers: 22 buy only fruit, 17 buy only vegetables, 11 buy both, and 5 buy neither. She claims P(buys neither) = 5/50 because 50 shoppers bought something. Explain her error and give the correct probability.", answer: 'She used the wrong total. The probability must always be found using the total sample size (all 55 shoppers), not just those who bought something. P(buys neither) = 5/55 = 1/11, not 5/50.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Maths</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Science</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },

        // Block 6 — Combined multi-step probability (Hard)
        { difficulty: 'Hard', question: 'A box has 10 pens: 7 blue and 3 black. Sipho picks a pen, keeps it, then picks a second pen. Find P(both pens are blue).', checkMode: 'auto', correctAnswer: '7/15', answer: '7/15', explanation: 'P(blue first) = 7/10. Without replacement, P(blue second) = 6/9 = 2/3. Combined: 7/10 × 2/3 = 14/30 = 7/15.' },
        { difficulty: 'Hard', question: 'A Venn diagram shows 42 athletes: 15 play only soccer, 12 play only netball, 9 play both, and 6 play neither. If an athlete who plays soccer is chosen at random, find the probability that they also play netball.', checkMode: 'auto', correctAnswer: '3/8', answer: '3/8', explanation: 'Athletes who play soccer = only soccer + both = 15 + 9 = 24. Of these, 9 also play netball. P = 9/24 = 3/8.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered relative frequency, single and compound event probability, and Venn diagrams.' },
        { minScore: 15, message: 'Great work! Review any missed questions on sample space grids or Venn diagrams and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on complementary events and two-way tables, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
