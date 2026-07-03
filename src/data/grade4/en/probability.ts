import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Probability',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE LANGUAGE OF PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'language-of-probability',
      title: 'The Language of Probability',
      icon: '🎲',
      explanation: `
<p style="margin-bottom:14px;"><strong>Probability</strong> tells us <strong>how likely something is to happen</strong>. Some things will definitely happen, some things can never happen, and some things are somewhere in between. We use special words to describe each of these possibilities.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">The probability scale</div>
  <p style="color:#1e3a8a;font-size:15px;margin-bottom:10px;">Imagine a number line that goes from <strong style="color:#dc2626;">impossible</strong> on the left to <strong style="color:#16a34a;">certain</strong> on the right. Every event falls somewhere on this scale.</p>
  <div style="display:flex;align-items:center;gap:0;margin-bottom:8px;">
    <span style="color:#dc2626;font-weight:700;font-size:13px;flex-shrink:0;">Impossible</span>
    <div style="flex:1;height:8px;background:linear-gradient(to right,#dc2626,#ea580c,#7c3aed,#1e40af,#16a34a);border-radius:4px;margin:0 10px;"></div>
    <span style="color:#16a34a;font-weight:700;font-size:13px;flex-shrink:0;">Certain</span>
  </div>
  <div style="display:flex;justify-content:space-between;font-size:12px;padding:0 4px;">
    <span style="color:#dc2626;font-weight:600;">0%</span>
    <span style="color:#ea580c;font-weight:600;">Unlikely</span>
    <span style="color:#7c3aed;font-weight:600;">Equally likely</span>
    <span style="color:#1e40af;font-weight:600;">Likely</span>
    <span style="color:#16a34a;font-weight:600;">100%</span>
  </div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">CERTAIN</span>
      <span style="color:#15803d;font-size:14px;font-weight:600;">will definitely happen — 100% sure</span>
    </div>
    <p style="color:#166534;font-size:15px;margin-bottom:4px;">An event is <strong style="color:#16a34a;">certain</strong> when it is <strong>impossible for it NOT to happen</strong>. There is no other possible outcome.</p>
    <div style="background:#dcfce7;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">☀️</span>
      <span style="color:#166534;font-size:14px;"><strong>Example:</strong> The sun will rise tomorrow morning. This is <strong style="color:#16a34a;">certain</strong> — it happens every single day without fail.</span>
    </div>
  </div>

  <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">IMPOSSIBLE</span>
      <span style="color:#dc2626;font-size:14px;font-weight:600;">cannot happen — 0% chance</span>
    </div>
    <p style="color:#7f1d1d;font-size:15px;margin-bottom:4px;">An event is <strong style="color:#dc2626;">impossible</strong> when there is <strong>absolutely no way it can happen</strong>. No matter what you do, it will not occur.</p>
    <div style="background:#fee2e2;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🏔️</span>
      <span style="color:#7f1d1d;font-size:14px;"><strong>Example:</strong> It will snow in the Sahara Desert today. This is <strong style="color:#dc2626;">impossible</strong> — the Sahara is one of the hottest places on Earth.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">LIKELY</span>
      <span style="color:#1e40af;font-size:14px;font-weight:600;">will probably happen — more likely than not</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:4px;">An event is <strong style="color:#1e40af;">likely</strong> when it will <strong>probably happen</strong>, but it is not 100% guaranteed. It happens more often than not.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🌤️</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Example:</strong> It will be warm in summer. This is <strong style="color:#1e40af;">likely</strong> — summer is usually warm, though not every summer day is the same.</span>
    </div>
  </div>

  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">UNLIKELY</span>
      <span style="color:#ea580c;font-size:14px;font-weight:600;">probably will not happen — but not impossible</span>
    </div>
    <p style="color:#7c2d12;font-size:15px;margin-bottom:4px;">An event is <strong style="color:#ea580c;">unlikely</strong> when it <strong>probably will not happen</strong>, but there is still a small chance it could. It is possible, just not very probable.</p>
    <div style="background:#ffedd5;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎲</span>
      <span style="color:#7c2d12;font-size:14px;"><strong>Example:</strong> You will roll a 6 on your very first try. This is <strong style="color:#ea580c;">unlikely</strong> — a die has 6 faces and only one of them is a 6.</span>
    </div>
  </div>

  <div style="background:#faf5ff;border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">EQUALLY LIKELY</span>
      <span style="color:#7c3aed;font-size:14px;font-weight:600;">two outcomes have exactly the same chance</span>
    </div>
    <p style="color:#4c1d95;font-size:15px;margin-bottom:4px;">Two events are <strong style="color:#7c3aed;">equally likely</strong> when they have <strong>exactly the same chance of happening</strong> — neither outcome is more probable than the other.</p>
    <div style="background:#ede9fe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🪙</span>
      <span style="color:#4c1d95;font-size:14px;"><strong>Example:</strong> Flipping a fair coin gives heads or tails. This is <strong style="color:#7c3aed;">equally likely</strong> — there is a 1 in 2 chance for each outcome.</span>
    </div>
  </div>

</div>

<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#0f1f3d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Quick summary</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#0f1f3d;">
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;border-radius:6px 0 0 0;">Word</th>
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;">Meaning</th>
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;border-radius:0 6px 0 0;">Real-life example</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f0fdf4;">
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">Certain</td>
          <td style="padding:8px 14px;color:#166534;">Will definitely happen</td>
          <td style="padding:8px 14px;color:#166534;">The sun will rise tomorrow</td>
        </tr>
        <tr style="background:#fef2f2;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">Impossible</td>
          <td style="padding:8px 14px;color:#7f1d1d;">Cannot happen</td>
          <td style="padding:8px 14px;color:#7f1d1d;">Snow in the Sahara Desert today</td>
        </tr>
        <tr style="background:#eff6ff;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">Likely</td>
          <td style="padding:8px 14px;color:#1e3a8a;">Will probably happen</td>
          <td style="padding:8px 14px;color:#1e3a8a;">It will be warm in summer</td>
        </tr>
        <tr style="background:#fff7ed;">
          <td style="padding:8px 14px;font-weight:700;color:#ea580c;">Unlikely</td>
          <td style="padding:8px 14px;color:#7c2d12;">Probably will not happen</td>
          <td style="padding:8px 14px;color:#7c2d12;">Rolling a 6 on your first try</td>
        </tr>
        <tr style="background:#faf5ff;">
          <td style="padding:8px 14px;font-weight:700;color:#7c3aed;border-radius:0 0 0 6px;">Equally likely</td>
          <td style="padding:8px 14px;color:#4c1d95;">Same chance for two outcomes</td>
          <td style="padding:8px 14px;color:#4c1d95;border-radius:0 0 6px 0;">Flipping a coin — heads or tails</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Classify each event as certain, impossible, likely, unlikely or equally likely:\na) Rolling a number less than 7 on a standard die\nb) Rolling a 7 on a standard die\nc) It will rain somewhere in South Africa today\nd) You will roll a 3 on your first roll\ne) Flipping a coin and getting heads',
          answer:
            'a) Certain  b) Impossible  c) Likely  d) Unlikely  e) Equally likely',
          steps: [
            '<strong>a) Rolling a number less than 7 on a standard die</strong> — <strong style="color:#16a34a;">Certain</strong>. A standard die has the numbers 1, 2, 3, 4, 5 and 6. Every single number on the die is less than 7, so this will always happen.',
            '<strong>b) Rolling a 7 on a standard die</strong> — <strong style="color:#dc2626;">Impossible</strong>. A standard die only has numbers 1 to 6. There is no 7 on the die, so this can never happen.',
            '<strong>c) It will rain somewhere in South Africa today</strong> — <strong style="color:#1e40af;">Likely</strong>. South Africa is a large country with many different weather regions. It almost always rains somewhere in the country on any given day, but it is not 100% guaranteed.',
            '<strong>d) You will roll a 3 on your first roll</strong> — <strong style="color:#ea580c;">Unlikely</strong>. There are 6 faces on a die and only one of them is a 3. The chance is small, but it is still possible.',
            '<strong>e) Flipping a coin and getting heads</strong> — <strong style="color:#7c3aed;">Equally likely</strong>. A fair coin has exactly two sides — heads and tails. Each has the same chance of landing face up, so the two outcomes are equally likely.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A probability scale from impossible on the left to certain on the right with equally likely in the middle and likely and unlikely marked between them',
      videoPlaceholder:
        'Short video explaining probability language using real life examples — certain impossible likely unlikely and equally likely',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LISTING OUTCOMES OF EXPERIMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Listing Outcomes of Experiments',
      icon: '📋',
      explanation: `
<p style="margin-bottom:14px;">When we do a probability experiment — like rolling a die or flipping a coin — we need to know <strong>all the things that could happen</strong>. Each possible result is called an <strong style="color:#1e40af;">outcome</strong>. Listing every outcome helps us work out probability.</p>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">EXPERIMENT</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">An <strong>experiment</strong> is an activity where we observe what happens and record the result. The result is not always the same every time.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎲</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Examples:</strong> rolling a die, flipping a coin, spinning a spinner, picking a marble from a bag.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">OUTCOME</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">An <strong style="color:#1e40af;">outcome</strong> is <strong>one possible result</strong> of an experiment. We list all outcomes so that nothing is left out.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🪙</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Example:</strong> When flipping a coin, the <strong style="color:#1e40af;">outcomes</strong> are <strong style="color:#1e40af;">Heads</strong> and <strong style="color:#1e40af;">Tails</strong>.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">EVENT</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">An <strong>event</strong> is <strong>one or more outcomes that we are interested in</strong>. It is the result we are asking about.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎯</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Example:</strong> When rolling a die, the event "rolling an even number" includes the outcomes 2, 4 and 6.</span>
    </div>
  </div>

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">FAVOURABLE OUTCOME</span>
    </div>
    <p style="color:#166534;font-size:15px;margin-bottom:6px;">A <strong style="color:#16a34a;">favourable outcome</strong> is <strong>the outcome we want to happen</strong>. We count how many favourable outcomes there are out of all the total outcomes.</p>
    <div style="background:#dcfce7;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🟢</span>
      <span style="color:#166534;font-size:14px;"><strong>Example:</strong> From a bag with red and blue marbles, if we want red, then red is the <strong style="color:#16a34a;">favourable outcome</strong>.</span>
    </div>
  </div>

</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Key words at a glance</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Experiment</span>
      <span style="color:#1e3a8a;font-size:14px;">The activity we carry out — e.g. rolling a die.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Outcome</span>
      <span style="color:#1e3a8a;font-size:14px;">One possible result — e.g. rolling a 4.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Event</span>
      <span style="color:#1e3a8a;font-size:14px;">The result we are asking about — e.g. rolling an even number.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Favourable</span>
      <span style="color:#1e3a8a;font-size:14px;">The outcome(s) we want — counted against the <strong style="color:#dc2626;">total outcomes</strong>.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'List all possible outcomes when rolling a standard die.',
          answer: 'Outcomes: 1, 2, 3, 4, 5, 6 — Total outcomes: 6',
          steps: [
            'A standard die is a cube with <strong>6 faces</strong>. Each face shows a different number.',
            'We list every number that could land face up: <strong style="color:#1e40af;">1, 2, 3, 4, 5, 6</strong>.',
            'Count them up: there are <strong style="color:#dc2626;">6 total outcomes</strong>.',
            'Every roll must give one of these six results — no other outcome is possible.',
          ],
        },
        {
          question: 'List all possible outcomes when flipping a coin.',
          answer: 'Outcomes: Heads, Tails — Total outcomes: 2',
          steps: [
            'A fair coin has exactly <strong>2 sides</strong> — a heads side and a tails side.',
            'When you flip it, only one side can land face up.',
            'So the outcomes are: <strong style="color:#1e40af;">Heads</strong> and <strong style="color:#1e40af;">Tails</strong>.',
            'There are <strong style="color:#dc2626;">2 total outcomes</strong>.',
          ],
        },
        {
          question:
            'A bag has 3 red marbles and 2 blue marbles. List all possible outcomes when picking one marble.',
          answer:
            'Outcomes: Red, Blue — Favourable outcomes for red: 3 out of 5 — Favourable outcomes for blue: 2 out of 5',
          steps: [
            'When you reach into the bag and pick one marble, it will be either red or blue — those are the only two colours.',
            'So the outcomes are: <strong style="color:#1e40af;">Red</strong> and <strong style="color:#1e40af;">Blue</strong>.',
            'Total number of marbles in the bag: 3 + 2 = <strong style="color:#dc2626;">5 total outcomes</strong>.',
            'If we want a red marble: there are <strong style="color:#16a34a;">3 favourable outcomes</strong> (3 red marbles) out of 5.',
            'If we want a blue marble: there are <strong style="color:#16a34a;">2 favourable outcomes</strong> (2 blue marbles) out of 5.',
          ],
        },
        {
          question:
            'List all possible outcomes when spinning a spinner with sections numbered 1 to 4.',
          answer:
            'Outcomes: 1, 2, 3, 4 — Total outcomes: 4 — Favourable outcomes for an even number: 2 out of 4',
          steps: [
            'The spinner has <strong>4 equal sections</strong> numbered 1, 2, 3 and 4.',
            'When you spin it, the arrow will land on one of these four sections.',
            'So the outcomes are: <strong style="color:#1e40af;">1, 2, 3, 4</strong> — there are <strong style="color:#dc2626;">4 total outcomes</strong>.',
            'The event "landing on an even number" means we want 2 or 4.',
            'Even numbers on the spinner: <strong style="color:#16a34a;">2</strong> and <strong style="color:#16a34a;">4</strong> — so there are <strong style="color:#16a34a;">2 favourable outcomes</strong> out of 4.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Three experiment diagrams side by side — a die showing faces 1 to 6, a coin showing heads and tails, and a spinner divided into 4 equal sections numbered 1 to 4',
      videoPlaceholder:
        'Short video showing how to list all possible outcomes for simple probability experiments like rolling a die flipping a coin and spinning a spinner',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLE PROBABILITY EXPERIMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-probability-experiments',
      title: 'Simple Probability Experiments',
      icon: '🧪',
      explanation: `
<p style="margin-bottom:14px;">We can actually <strong>do</strong> probability experiments to test our predictions. Before we start we make a <strong style="color:#ea580c;">prediction</strong> — a guess about what we think will happen. After the experiment we look at the <strong style="color:#1e40af;">actual results</strong> and compare them. The two do not always match exactly, and that is perfectly normal!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to conduct a probability experiment</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <div style="padding-top:2px;">
        <strong style="color:#ea580c;">Decide on the experiment</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Choose what you will do — for example, flip a coin or roll a die.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <div style="padding-top:2px;">
        <strong style="color:#ea580c;">Make a prediction</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Before you start, write down what you <strong style="color:#ea580c;">predict</strong> (expect) will happen based on equal chances.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <div style="padding-top:2px;">
        <strong style="color:#1e40af;">Do the experiment and record results</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Carry out the experiment and use <strong>tally marks</strong> to record each <strong style="color:#1e40af;">actual result</strong> as it happens.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <div style="padding-top:2px;">
        <strong style="color:#1e40af;">Count the results</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Count up your tally marks to find the total <strong style="color:#1e40af;">actual results</strong> for each outcome.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <div style="padding-top:2px;">
        <strong style="color:#dc2626;">Compare predicted and actual results</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Look at the <strong style="color:#dc2626;">difference</strong> between your <strong style="color:#ea580c;">prediction</strong> and the <strong style="color:#1e40af;">actual result</strong>. Are they close?</p>
      </div>
    </div>

  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Important to remember</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#ea580c;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;">Predictions are based on equal chances — they tell us what we <em>expect</em>, not what will <em>definitely</em> happen.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#1e40af;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;"><strong style="color:#1e40af;">Actual results</strong> may be different from the prediction each time the experiment is done.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#dc2626;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;">The <strong style="color:#dc2626;">more trials</strong> you do, the closer your actual results will get to the prediction.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A coin is flipped 20 times. Before flipping, predict how many heads and tails you expect. Then compare with a possible actual result.',
          answer:
            'Prediction: 10 heads and 10 tails — Possible actual result: Heads 12, Tails 8',
          steps: [
            '<strong>Step 1 — Decide on the experiment:</strong> Flip a coin 20 times and record whether each flip lands on Heads or Tails.',
            '<strong>Step 2 — Make a prediction:</strong> A coin has 2 equally likely outcomes. Half of 20 = 10. <strong style="color:#ea580c;">Prediction: 10 Heads and 10 Tails.</strong>',
            '<strong>Step 3 — Record results using tally marks:</strong> Each time the coin lands on Heads, add a tally mark under Heads. Each time it lands on Tails, add one under Tails.',
            '<strong>Step 4 — Count the results:</strong> After 20 flips, suppose the tallies show <strong style="color:#1e40af;">Heads: 12, Tails: 8</strong>.',
            '<strong>Step 5 — Compare:</strong> <strong style="color:#ea580c;">Predicted</strong> Heads = 10, <strong style="color:#1e40af;">Actual</strong> Heads = 12 — <strong style="color:#dc2626;">difference of 2</strong>. This is normal! The actual results do not always match the prediction exactly. The more times you flip the coin, the closer the results get to 10 and 10.',
          ],
        },
        {
          question:
            'A die is rolled 12 times. How many times would you predict rolling a 3?',
          answer: 'Prediction: Rolling a 3 about 2 times out of 12 rolls',
          steps: [
            '<strong>Step 1 — List outcomes:</strong> A standard die has 6 possible outcomes: 1, 2, 3, 4, 5, 6.',
            '<strong>Step 2 — Identify the favourable outcome:</strong> We want to roll a 3. That is <strong>1 out of 6</strong> outcomes.',
            '<strong>Step 3 — Calculate the prediction:</strong> If we roll 12 times, we divide equally: 12 ÷ 6 = <strong style="color:#ea580c;">2 times</strong>.',
            '<strong style="color:#ea580c;">Prediction: Rolling a 3 about 2 times out of 12 rolls.</strong> Remember — this is what we expect. The actual result could be 1 time, 3 times, or even 0 times.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A results table showing a coin flip experiment with 20 trials columns for heads and tails tally marks and totals comparing prediction of 10 each with actual results',
      videoPlaceholder:
        'Short video showing how to conduct a simple probability experiment record results and compare predicted outcomes with actual outcomes',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — COMPARING PREDICTED AND ACTUAL OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-predicted-actual',
      title: 'Comparing Predicted and Actual Outcomes',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;">A <strong style="color:#ea580c;">prediction</strong> is based on equally likely outcomes — it is a reasonable estimate of what <em>should</em> happen. But the <strong style="color:#1e40af;">actual results</strong> of an experiment can be different every time. This does not mean your prediction was wrong — it simply means that chance does not always follow a perfect pattern in a small number of trials.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">The key ideas</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">PREDICTION</span>
      <span style="color:#1e3a8a;font-size:14px;">Based on equally likely outcomes. It is what we <em>expect</em> to happen if every outcome has a fair chance.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">ACTUAL RESULT</span>
      <span style="color:#1e3a8a;font-size:14px;">What really happened during the experiment. This can be different each time.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">DIFFERENCE</span>
      <span style="color:#1e3a8a;font-size:14px;">How far apart the prediction and actual result are. A small difference means the experiment matched expectations closely.</span>
    </div>
    <div style="background:#dbeafe;border-radius:8px;padding:10px 14px;margin-top:4px;display:flex;align-items:flex-start;gap:8px;">
      <span style="font-size:16px;flex-shrink:0;">💡</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>The more trials you do, the closer the actual results get to the prediction.</strong> This is one of the most important ideas in probability.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Thabo predicts he will roll an even number 15 times out of 30 rolls of a die. He actually rolls an even number 17 times.\na) Was his prediction reasonable?\nb) Is 17 close to 15?\nc) Would the results be exactly 15 every time?',
          answer: 'a) Yes  b) Yes — only 2 more than predicted  c) No',
          steps: [
            '<strong>a) Was his prediction reasonable?</strong> Even numbers on a die are 2, 4 and 6 — that is <strong>3 out of 6</strong> outcomes, which is exactly half. Half of 30 rolls = <strong style="color:#ea580c;">15</strong>. So yes, <strong style="color:#ea580c;">15 is a very reasonable prediction</strong>.',
            '<strong>b) Is 17 close to 15?</strong> The <strong style="color:#dc2626;">difference</strong> is 17 − 15 = <strong style="color:#dc2626;">2</strong>. That is small compared to 30 rolls. The <strong style="color:#1e40af;">actual result of 17</strong> is close to the prediction — this is a normal variation.',
            '<strong>c) Would the results be exactly 15 every time?</strong> No. Each time Thabo repeats the experiment, the actual result will vary. He might get 14, 16, 17 or even 12. The result is <em>never guaranteed</em> to be exactly 15, but it should be <em>close</em> to 15 most of the time.',
          ],
        },
        {
          question:
            'A bag has 4 red marbles and 1 blue marble. You pick a marble 20 times, replacing it each time. How many times would you predict picking red?',
          answer: 'Prediction: Red picked about 16 times out of 20',
          steps: [
            '<strong>Step 1 — Count the marbles:</strong> Red = 4, Blue = 1. Total = <strong style="color:#dc2626;">5 marbles</strong>.',
            '<strong>Step 2 — Find the fraction for red:</strong> Red is <strong style="color:#16a34a;">4 out of 5</strong> marbles.',
            '<strong>Step 3 — Apply to 20 trials:</strong> Multiply the fraction by the number of trials: 4/5 × 20 = <strong style="color:#ea580c;">16</strong>.',
            '<strong style="color:#ea580c;">Prediction: Red will be picked about 16 times out of 20.</strong> Blue is expected about 4 times. Because red is so much more common, picking red is <strong style="color:#1e40af;">likely</strong> on almost every pick.',
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to conduct a simple probability experiment record results and compare predicted outcomes with actual outcomes',
    },
  ],
  topicPractice: [
    {
      difficulty: 'Easy',
      question:
        'Classify each event using one of these words: certain, impossible, likely, unlikely, or equally likely.',
      answer: 'a) Certain  b) Unlikely  c) Equally likely',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Rolling a number between 1 and 6 on a standard die',
          correctAnswer: 'certain',
          explanation:
            'A standard die has numbers 1, 2, 3, 4, 5 and 6. Every single number on the die is between 1 and 6, so this will always happen — it is <strong style="color:#16a34a;">certain</strong>.',
        },
        {
          label: 'b) It will snow in Cape Town in July',
          correctAnswer: 'unlikely',
          explanation:
            'Cape Town is cold and rainy in July but snow is very rare. It is possible but does not usually happen — it is <strong style="color:#ea580c;">unlikely</strong>.',
        },
        {
          label: 'c) Flipping a coin and getting tails',
          correctAnswer: 'equally likely',
          explanation:
            'A fair coin has two sides — heads and tails. Each has exactly the same chance of landing face up — this is <strong style="color:#7c3aed;">equally likely</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question:
        'Classify each event and explain your reasoning.\na) A baby will be born somewhere in South Africa today\nb) You will roll a 6 on your first roll of a die\nc) Picking a red card from a standard deck of cards',
      answer:
        'a) Certain — babies are born every day across South Africa without fail, so this is guaranteed to happen.\nb) Unlikely — a die has 6 possible outcomes and only one of them is 6, so the chance is small but not impossible.\nc) Equally likely — exactly half the cards in a standard deck (26 out of 52) are red, giving the same chance as drawing a non-red card.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question:
        'Thabo says rolling an odd number on a die is certain. Lerato says it is equally likely. Who is correct and why?',
      answer:
        'Lerato is correct. A standard die has 6 numbers: 1, 2, 3, 4, 5, 6. There are 3 odd numbers (1, 3, 5) and 3 even numbers (2, 4, 6). Rolling odd or even each has 3 chances out of 6, so the two outcomes are equally likely. "Certain" means the event will always happen — rolling an odd number does not always happen, so it cannot be certain.',
      checkMode: 'self',
    },
    {
      difficulty: 'Easy',
      question: 'List all possible outcomes when flipping a coin.',
      answer: 'Heads and Tails',
      checkMode: 'auto',
      correctAnswer: 'headstails',
      correctAnswers: ['headstails', 'headsandtails'],
      explanation:
        'A coin has exactly two sides. The two possible outcomes are <strong style="color:#1e40af;">Heads</strong> and <strong style="color:#1e40af;">Tails</strong> — there are no other results.',
    },
    {
      difficulty: 'Medium',
      question: 'A spinner has 5 equal sections numbered 1 to 5.',
      answer: 'a) 1, 2, 3, 4, 5  b) 5  c) 1, 3, 5',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) List all possible outcomes.',
          correctAnswer: '12345',
          explanation:
            'The spinner has 5 sections. The possible outcomes are <strong style="color:#1e40af;">1, 2, 3, 4, 5</strong>.',
        },
        {
          label: 'b) How many total outcomes are there?',
          correctAnswer: '5',
          explanation:
            'There are 5 sections on the spinner, so there are <strong style="color:#dc2626;">5 total outcomes</strong>.',
        },
        {
          label: 'c) List the favourable outcomes for spinning an odd number.',
          correctAnswer: '135',
          explanation:
            'Odd numbers on the spinner are <strong style="color:#16a34a;">1, 3 and 5</strong> — these are the 3 favourable outcomes.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'A bag contains 2 red, 3 blue and 1 yellow marble.',
      answer: 'a) Red, Blue, Yellow  b) 6  c) 3',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) List all possible colour outcomes when picking one marble.',
          correctAnswer: 'redblueyellow',
          correctAnswers: [
            'redblueyellow',
            'blueredyellow',
            'redyellowblue',
            'yellowredblue',
            'blueyellowred',
            'yellowbluered',
          ],
          explanation:
            'The bag has three colours of marble. The possible outcomes are <strong style="color:#1e40af;">Red, Blue and Yellow</strong>.',
        },
        {
          label: 'b) How many total marbles are in the bag?',
          correctAnswer: '6',
          explanation:
            '2 red + 3 blue + 1 yellow = <strong style="color:#dc2626;">6 total marbles</strong>.',
        },
        {
          label: 'c) How many favourable outcomes are there for picking blue?',
          correctAnswer: '3',
          explanation:
            'There are <strong style="color:#16a34a;">3 blue marbles</strong> in the bag, so there are 3 favourable outcomes for picking blue.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'A bag contains 2 red, 3 blue and 1 yellow marble.',
      answer:
        'More likely — there are 3 blue marbles but only 2 red marbles. Blue has 3 chances out of 6 while red has only 2 chances out of 6, so picking blue is more likely than picking red.',
      checkMode: 'self',
      parts: [
        {
          label: 'd) Is picking blue more or less likely than picking red? Explain your answer.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Easy',
      question: 'A die is rolled 12 times. How many times would you predict rolling a 2?',
      answer: '2 times',
      checkMode: 'auto',
      correctAnswer: '2',
      correctAnswers: ['2', '2times'],
      explanation:
        'A die has 6 equal outcomes. Rolling a 2 is <strong>1 out of 6</strong>. 12 ÷ 6 = <strong style="color:#ea580c;">2 times</strong>.',
    },
    {
      difficulty: 'Medium',
      question: 'A coin is flipped 30 times.',
      answer: 'a) 15 times  b) 15 times',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) How many times would you predict getting heads?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            'Heads is 1 out of 2 outcomes. Half of 30 = <strong style="color:#ea580c;">15 times</strong>.',
        },
        {
          label: 'b) How many times would you predict getting tails?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            'Tails is equally likely to heads. Half of 30 = <strong style="color:#ea580c;">15 times</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'A coin is flipped 30 times.',
      answer:
        'Yes — 18 is reasonably close to the prediction of 15. The difference is only 3, which is small compared to 30 flips. Actual results vary each time an experiment is done.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) If you actually get 18 heads, is that a reasonable result? Explain.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'A bag has 3 red and 1 blue marble. You pick a marble 20 times, replacing it each time.',
      answer: 'a) 3/4  b) 15 times',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) What fraction of picks would you predict to be red?',
          correctAnswer: '3/4',
          explanation:
            'There are 3 red out of 4 total marbles. The fraction for red is <strong style="color:#16a34a;">3/4</strong>.',
        },
        {
          label: 'b) How many times out of 20 would you predict picking red?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            '3/4 × 20 = <strong style="color:#ea580c;">15 times</strong>.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'A bag has 3 red and 1 blue marble. You pick a marble 20 times, replacing it each time.',
      answer:
        'Yes — 16 is very close to the prediction of 15. The difference is only 1, which is small. Actual results rarely match predictions exactly; a small variation like this is completely normal.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) You actually pick red 16 times. Is this close to your prediction? Explain.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'A bag has 3 red and 1 blue marble. You pick a marble 20 times, replacing it each time.',
      answer: '75 times',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75times'],
      explanation:
        '3/4 × 100 = <strong style="color:#ea580c;">75 times</strong>. The same fraction applies — 3 out of every 4 picks should be red.',
    },
    {
      difficulty: 'Easy',
      question:
        'Sipho predicts he will roll an even number 10 times out of 20 rolls. He actually rolls an even number 12 times. How many more even numbers did he roll than predicted?',
      answer: '2 more',
      checkMode: 'auto',
      correctAnswer: '2',
      correctAnswers: ['2', '2more'],
      explanation:
        '12 (actual) − 10 (predicted) = <strong style="color:#dc2626;">2 more</strong> than predicted.',
    },
    {
      difficulty: 'Medium',
      question:
        'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 40 times.',
      answer: 'a) 10 times  b) 20 times',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) How many times would you predict landing on red?',
          correctAnswer: '10',
          correctAnswers: ['10', '10times'],
          explanation:
            'Red is 1 out of 4 sections. 1/4 × 40 = <strong style="color:#ea580c;">10 times</strong>.',
        },
        {
          label: 'b) How many times would you predict landing on blue or green?',
          correctAnswer: '20',
          correctAnswers: ['20', '20times'],
          explanation:
            'Blue and green together are 2 out of 4 sections (half). 1/2 × 40 = <strong style="color:#ea580c;">20 times</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question:
        'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 40 times.',
      answer:
        'Yes — 13 is reasonably close to the prediction of 10. The difference is 3, which is small compared to 40 spins. Actual results do not always match the prediction exactly.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) If red comes up 13 times, is this a reasonable result? Explain.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 50 times and gets 28 heads and 22 tails.',
      answer: 'a) 25  b) 3 more',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) What was the predicted number of heads?',
          correctAnswer: '25',
          correctAnswers: ['25', '25times'],
          explanation:
            'Heads is 1 out of 2 outcomes. Half of 50 = <strong style="color:#ea580c;">25 heads</strong>.',
        },
        {
          label: 'b) How many more heads than predicted did she get?',
          correctAnswer: '3',
          correctAnswers: ['3', '3more'],
          explanation:
            '28 (actual) − 25 (predicted) = <strong style="color:#dc2626;">3 more</strong> heads than predicted.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato flips a coin 50 times and gets 28 heads and 22 tails.',
      answer:
        'c) No — actual results vary every time you repeat an experiment. Lerato might get 23, 26, or 28 heads on the next 50 flips. There is no guarantee of exactly 25.\nd) The more trials you do, the closer the actual results get to the predicted probability. With thousands of flips, the proportion of heads would get very close to 1/2.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) If she flips the coin 50 more times, would you expect exactly 25 heads again? Explain.',
          correctAnswer: '',
          explanation: '',
        },
        {
          label: 'd) What happens to probability results as you do more and more trials?',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
  ],
}
