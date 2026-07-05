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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to conduct a simple probability experiment record results and compare predicted outcomes with actual outcomes',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: CERTAIN / IMPOSSIBLE / LIKELY / UNLIKELY (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: The Language of Probability',
      questions: [
        { difficulty: 'Easy', question: 'The sun will rise tomorrow morning. Classify this event.', answer: 'Certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'This happens every single day without fail, so it is certain.' },
        { difficulty: 'Easy', question: 'It will snow in the Sahara Desert today. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'The Sahara is one of the hottest places on Earth, so this can never happen.' },
        { difficulty: 'Easy', question: 'Rolling a number less than 7 on a standard die. Classify this event.', answer: 'Certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'A die only has 1 to 6, and every one of those numbers is less than 7, so this will always happen.' },
        { difficulty: 'Easy', question: 'Rolling a 7 on a standard die. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'A standard die only has the numbers 1 to 6, so rolling a 7 can never happen.' },
        { difficulty: 'Easy', question: 'Flipping a fair coin and getting heads or tails. Classify this event.', answer: 'Certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'A coin only has two sides. It must land on one of them, so getting heads or tails is certain.' },
        { difficulty: 'Easy', question: 'A fish will grow legs and walk on land. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'Fish cannot grow legs and walk on land — this can never happen, so it is impossible.' },
        { difficulty: 'Easy', question: 'You will roll a 6 on your very first roll of a die. Classify this event.', answer: 'Unlikely', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'A die has 6 faces and only one is a 6, so the chance is small but still possible — this is unlikely.' },
        { difficulty: 'Easy', question: 'It will be warm in summer in South Africa. Classify this event.', answer: 'Likely', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: 'Summer is usually warm, though not every day is exactly the same, so this is likely.' },
        { difficulty: 'Easy', question: 'Flipping a fair coin and getting tails. Classify this event.', answer: 'Equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely'], explanation: 'A coin has two sides with exactly the same chance of landing face up, so heads and tails are equally likely.' },
        { difficulty: 'Easy', question: 'It will snow in Cape Town in July. Classify this event.', answer: 'Unlikely', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Cape Town is cold and rainy in July but snow is very rare — it is possible but does not usually happen, so it is unlikely.' },
        { difficulty: 'Medium', question: 'A baby will be born somewhere in South Africa today. Classify this event.', answer: 'Certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Babies are born every day across South Africa without fail, so this is guaranteed to happen — it is certain.' },
        { difficulty: 'Medium', question: 'Picking a red card from a standard deck of 52 playing cards (26 red, 26 black). Classify this event.', answer: 'Equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely'], explanation: 'Exactly half the cards (26 out of 52) are red, giving the same chance as drawing a non-red card — this is equally likely.' },
        { difficulty: 'Medium', question: 'Rolling an odd number on a standard die (odd numbers: 1, 3, 5; even numbers: 2, 4, 6). Classify this event.', answer: 'Equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely'], explanation: 'There are 3 odd numbers and 3 even numbers out of 6, so rolling odd or even has exactly the same chance — equally likely.' },
        { difficulty: 'Medium', question: 'A coin will land on its edge and balance there. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'A flipped coin cannot balance perfectly on its edge — for this experiment we treat it as something that cannot happen, so it is impossible.' },
        { difficulty: 'Medium', question: 'Picking a blue marble from a bag containing 9 blue marbles and 1 red marble. Classify this event.', answer: 'Likely', checkMode: 'auto', correctAnswer: 'likely', correctAnswers: ['likely'], explanation: '9 out of 10 marbles are blue, so picking blue will probably happen — it is likely, though not 100% certain.' },
        { difficulty: 'Medium', question: 'Picking a red marble from a bag containing 9 blue marbles and 1 red marble. Classify this event.', answer: 'Unlikely', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Only 1 out of 10 marbles is red, so picking red probably will not happen, but it is still possible — it is unlikely.' },
        { difficulty: 'Medium', question: 'Every learner in a Grade 4 class is above the age of 100 years. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'Grade 4 learners are children, so none can be over 100 years old — this can never happen.' },
        { difficulty: 'Medium', question: 'Spinning a spinner with 2 equal sections (red and blue) and landing on red. Classify this event.', answer: 'Equally likely', checkMode: 'auto', correctAnswer: 'equallylikely', correctAnswers: ['equallylikely'], explanation: 'The 2 sections are equal in size, so red and blue have exactly the same chance — equally likely.' },
        { difficulty: 'Medium', question: 'Rolling a number greater than 10 on a standard die. Classify this event.', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'A standard die only goes up to 6, so no number greater than 10 can ever be rolled.' },
        { difficulty: 'Hard', question: 'Lerato says picking a yellow marble from a bag with 1 yellow marble and 19 red marbles is impossible. Amahle says it is unlikely. Who is correct?', answer: 'Amahle', checkMode: 'auto', correctAnswer: 'amahle', correctAnswers: ['amahle'], explanation: 'There is 1 yellow marble in the bag, so picking it is possible, just not very probable. "Impossible" means it can never happen, which is wrong here — Amahle is correct that it is unlikely.' },
        { difficulty: 'Hard', question: 'Thabo says rolling an odd number on a die is certain. Sipho says it is equally likely (compared with rolling an even number). Who is correct?', answer: 'Sipho', checkMode: 'auto', correctAnswer: 'sipho', correctAnswers: ['sipho'], explanation: 'A die has 3 odd numbers and 3 even numbers out of 6, so odd and even are equally likely. "Certain" would mean it always happens, but sometimes you roll an even number instead, so Sipho is correct.' },
        { difficulty: 'Hard', question: 'A bag has 5 red marbles and 0 blue marbles. Is picking a blue marble certain, impossible, likely or unlikely?', answer: 'Impossible', checkMode: 'auto', correctAnswer: 'impossible', correctAnswers: ['impossible'], explanation: 'There are no blue marbles in the bag at all, so it can never be picked — this is impossible.' },
        { difficulty: 'Hard', question: 'A bag has 0 red marbles and 8 blue marbles. Is picking a blue marble certain, impossible, likely or unlikely?', answer: 'Certain', checkMode: 'auto', correctAnswer: 'certain', correctAnswers: ['certain'], explanation: 'Every single marble in the bag is blue, so picking blue is guaranteed — this is certain.' },
        { difficulty: 'Hard', question: 'A spinner has 10 equal sections: 1 is green and 9 are orange. Is landing on green certain, impossible, likely or unlikely?', answer: 'Unlikely', checkMode: 'auto', correctAnswer: 'unlikely', correctAnswers: ['unlikely'], explanation: 'Only 1 out of 10 sections is green, so landing on it is possible but probably will not happen — it is unlikely.' },
        { difficulty: 'Hard', question: 'Classify each of these using certain, impossible, likely, unlikely or equally likely, then join your three answers with commas in this order: (1) touching the sky by jumping, (2) a school day tomorrow being a Tuesday or a Wednesday if today is Monday, (3) picking a black sock from a drawer with 6 black socks and 6 white socks.', answer: 'Impossible, Certain, Equally likely', checkMode: 'auto', correctAnswer: 'impossiblecertainequallylikely', correctAnswers: ['impossiblecertainequallylikely'], explanation: '(1) You cannot touch the sky by jumping — impossible. (2) If today is Monday, tomorrow must be Tuesday, so "Tuesday or Wednesday" is guaranteed — certain. (3) 6 black and 6 white socks give the exact same chance for each colour — equally likely.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You know the language of probability inside and out.' },
        { minScore: 19, message: 'Great work! You can confidently classify events — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — LISTING OUTCOMES OF SIMPLE EXPERIMENTS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Listing Outcomes',
      questions: [
        { difficulty: 'Easy', question: 'List all possible outcomes when flipping a coin.', answer: 'Heads, Tails', checkMode: 'auto', correctAnswer: 'headstails', correctAnswers: ['headstails', 'headsandtails'], explanation: 'A coin has exactly two sides. The two possible outcomes are Heads and Tails — there are no other results.' },
        { difficulty: 'Easy', question: 'How many total outcomes are there when flipping a coin?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'A coin has 2 sides, so there are 2 total outcomes.' },
        { difficulty: 'Easy', question: 'List all possible outcomes when rolling a standard die.', answer: '1, 2, 3, 4, 5, 6', checkMode: 'auto', correctAnswer: '123456', correctAnswers: ['123456'], explanation: 'A standard die has 6 faces numbered 1 to 6, so those are the 6 possible outcomes.' },
        { difficulty: 'Easy', question: 'How many total outcomes are there when rolling a standard die?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A standard die has 6 faces, so there are 6 total outcomes.' },
        { difficulty: 'Easy', question: 'A spinner has 3 equal sections numbered 1, 2 and 3. List all possible outcomes.', answer: '1, 2, 3', checkMode: 'auto', correctAnswer: '123', correctAnswers: ['123'], explanation: 'The spinner has 3 sections, so the outcomes are 1, 2 and 3.' },
        { difficulty: 'Easy', question: 'A spinner has 3 equal sections numbered 1, 2 and 3. How many total outcomes are there?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'There are 3 sections on the spinner, so there are 3 total outcomes.' },
        { difficulty: 'Easy', question: 'A bag has 4 red marbles and 3 blue marbles. List all possible colour outcomes when picking one marble.', answer: 'Red, Blue', checkMode: 'auto', correctAnswer: 'redblue', correctAnswers: ['redblue', 'blueRed', 'bluered'], explanation: 'The bag has two colours of marble, so the outcomes are Red and Blue.' },
        { difficulty: 'Easy', question: 'A bag has 4 red marbles and 3 blue marbles. How many total marbles are in the bag?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: '4 red + 3 blue = 7 total marbles.' },
        { difficulty: 'Medium', question: 'A spinner has 4 equal sections numbered 1 to 4. List the favourable outcomes for landing on an even number.', answer: '2, 4', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Even numbers on the spinner are 2 and 4, so those are the 2 favourable outcomes.' },
        { difficulty: 'Medium', question: 'A spinner has 4 equal sections numbered 1 to 4. List the favourable outcomes for landing on an odd number.', answer: '1, 3', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13'], explanation: 'Odd numbers on the spinner are 1 and 3, so those are the 2 favourable outcomes.' },
        { difficulty: 'Medium', question: 'A spinner has 5 equal sections numbered 1 to 5. List all possible outcomes.', answer: '1, 2, 3, 4, 5', checkMode: 'auto', correctAnswer: '12345', correctAnswers: ['12345'], explanation: 'The spinner has 5 sections, so the outcomes are 1, 2, 3, 4 and 5.' },
        { difficulty: 'Medium', question: 'A spinner has 5 equal sections numbered 1 to 5. List the favourable outcomes for spinning an odd number.', answer: '1, 3, 5', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135'], explanation: 'Odd numbers on the spinner are 1, 3 and 5 — these are the 3 favourable outcomes.' },
        { difficulty: 'Medium', question: 'A bag contains 2 red, 3 blue and 1 yellow marble. List all possible colour outcomes when picking one marble.', answer: 'Red, Blue, Yellow', checkMode: 'auto', correctAnswer: 'redblueyellow', correctAnswers: ['redblueyellow', 'blueredyellow', 'redyellowblue', 'yellowredblue', 'blueyellowred', 'yellowbluered'], explanation: 'The bag has three colours of marble, so the outcomes are Red, Blue and Yellow.' },
        { difficulty: 'Medium', question: 'A bag contains 2 red, 3 blue and 1 yellow marble. How many total marbles are in the bag?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: '2 red + 3 blue + 1 yellow = 6 total marbles.' },
        { difficulty: 'Medium', question: 'A bag contains 2 red, 3 blue and 1 yellow marble. How many favourable outcomes are there for picking blue?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'There are 3 blue marbles in the bag, so there are 3 favourable outcomes for picking blue.' },
        { difficulty: 'Medium', question: 'A bag contains 2 red, 3 blue and 1 yellow marble. How many favourable outcomes are there for picking red?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'There are 2 red marbles in the bag, so there are 2 favourable outcomes for picking red.' },
        { difficulty: 'Medium', question: 'A die is rolled once. List the favourable outcomes for the event "rolling a number greater than 4".', answer: '5, 6', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: 'Numbers greater than 4 on a die are 5 and 6 — these are the 2 favourable outcomes.' },
        { difficulty: 'Medium', question: 'A die is rolled once. List the favourable outcomes for the event "rolling a multiple of 3".', answer: '3, 6', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Multiples of 3 on a die (from 1 to 6) are 3 and 6 — these are the 2 favourable outcomes.' },
        { difficulty: 'Medium', question: 'A spinner has 6 equal sections numbered 1 to 6. How many total outcomes are there?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'There are 6 sections on the spinner, so there are 6 total outcomes.' },
        { difficulty: 'Medium', question: 'A spinner is coloured with 4 equal sections: red, blue, green and yellow. List all possible outcomes.', answer: 'Red, Blue, Green, Yellow', checkMode: 'auto', correctAnswer: 'redbluegreenyellow', correctAnswers: ['redbluegreenyellow'], explanation: 'The spinner has 4 different coloured sections, so the outcomes are Red, Blue, Green and Yellow.' },
        { difficulty: 'Hard', question: 'A bag has 6 marbles: 2 red and 4 blue. List the favourable outcomes (by colour and count) for picking red, written as "colour: count".', answer: 'red: 2', checkMode: 'auto', correctAnswer: 'red:2', correctAnswers: ['red:2', 'red2'], explanation: 'There are 2 red marbles out of the 6 total, so the favourable outcome for red is "red: 2".' },
        { difficulty: 'Hard', question: 'A spinner has 8 equal sections numbered 1 to 8. List the favourable outcomes for landing on a number less than 3.', answer: '1, 2', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Numbers less than 3 on the spinner are 1 and 2 — these are the 2 favourable outcomes.' },
        { difficulty: 'Hard', question: 'A spinner has 8 equal sections numbered 1 to 8. How many favourable outcomes are there for landing on an even number?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Even numbers from 1 to 8 are 2, 4, 6, 8 — that is 4 favourable outcomes.' },
        { difficulty: 'Hard', question: 'Two coins are flipped together, one after the other. List all 4 possible outcomes as pairs (use H for heads and T for tails), separated by commas.', answer: 'HH, HT, TH, TT', checkMode: 'auto', correctAnswer: 'hhhtthtt', correctAnswers: ['hhhtthtt'], explanation: 'Each coin can be H or T. The first coin can be H or T, and for each of those the second coin can also be H or T, giving 4 combinations: HH, HT, TH, TT.' },
        { difficulty: 'Hard', question: 'A bag has 10 marbles in total: some red and some blue. If there are 6 favourable outcomes for picking red, how many blue marbles are in the bag?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Total marbles = 10. Red marbles = 6. Blue marbles = 10 − 6 = 4.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Excellent! You can list outcomes and favourable outcomes with confidence.' },
        { minScore: 19, message: 'Well done! You understand outcomes well — check over any mistakes.' },
        { minScore: 13, message: 'Good try! Go back over listing outcomes and have another go.' },
        { minScore: 0, message: 'Keep practising — review the worked examples and try this set again.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD PROBABILITY WORD PROBLEMS / PREDICTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Predictions and Real-World Problems',
      questions: [
        { difficulty: 'Easy', question: 'A die is rolled 12 times. How many times would you predict rolling a 2?', answer: '2 times', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2times'], explanation: 'A die has 6 equal outcomes. Rolling a 2 is 1 out of 6. 12 ÷ 6 = 2 times.' },
        { difficulty: 'Easy', question: 'A die is rolled 18 times. How many times would you predict rolling a 3?', answer: '3 times', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3times'], explanation: 'A die has 6 equal outcomes. Rolling a 3 is 1 out of 6. 18 ÷ 6 = 3 times.' },
        { difficulty: 'Easy', question: 'A coin is flipped 40 times. How many times would you predict getting heads?', answer: '20 times', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20times'], explanation: 'Heads is 1 out of 2 outcomes. Half of 40 = 20 times.' },
        { difficulty: 'Easy', question: 'A coin is flipped 60 times. How many times would you predict getting tails?', answer: '30 times', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30times'], explanation: 'Tails is 1 out of 2 outcomes. Half of 60 = 30 times.' },
        { difficulty: 'Easy', question: 'A coin is flipped 16 times. How many times would you predict getting heads?', answer: '8 times', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8times'], explanation: 'Heads is 1 out of 2 outcomes. Half of 16 = 8 times.' },
        { difficulty: 'Medium', question: 'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 24 times. How many times would you predict landing on red?', answer: '6 times', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6times'], explanation: 'Red is 1 out of 4 sections. 24 ÷ 4 = 6 times.' },
        { difficulty: 'Medium', question: 'A spinner has 6 equal sections numbered 1 to 6. It is spun 30 times. How many times would you predict landing on the number 4?', answer: '5 times', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5times'], explanation: 'Landing on 4 is 1 out of 6 sections. 30 ÷ 6 = 5 times.' },
        { difficulty: 'Medium', question: 'A spinner has 3 equal sections coloured red, blue and green. It is spun 27 times. How many times would you predict landing on blue?', answer: '9 times', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9times'], explanation: 'Blue is 1 out of 3 sections. 27 ÷ 3 = 9 times.' },
        { difficulty: 'Medium', question: 'A bag has 3 red marbles and 2 blue marbles. You pick a marble 25 times, replacing it each time. How many times would you predict picking red?', answer: '15 times', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15times'], explanation: 'Red is 3 out of 5 marbles. 3/5 × 25 = 15 times.' },
        { difficulty: 'Medium', question: 'A bag has 3 red marbles and 2 blue marbles. You pick a marble 25 times, replacing it each time. How many times would you predict picking blue?', answer: '10 times', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10times'], explanation: 'Blue is 2 out of 5 marbles. 2/5 × 25 = 10 times.' },
        { difficulty: 'Medium', question: 'A bag has 4 red marbles and 1 blue marble. You pick a marble 40 times, replacing it each time. How many times would you predict picking red?', answer: '32 times', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32times'], explanation: 'Red is 4 out of 5 marbles. 4/5 × 40 = 32 times.' },
        { difficulty: 'Medium', question: 'A bag has 2 red marbles and 3 blue marbles. You pick a marble 30 times, replacing it each time. How many times would you predict picking blue?', answer: '18 times', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18times'], explanation: 'Blue is 3 out of 5 marbles. 3/5 × 30 = 18 times.' },
        { difficulty: 'Medium', question: 'A bag has 2 red marbles and 3 blue marbles. You pick a marble 30 times, replacing it each time. How many times would you predict picking red?', answer: '12 times', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12times'], explanation: 'Red is 2 out of 5 marbles. 2/5 × 30 = 12 times.' },
        { difficulty: 'Medium', question: 'A die is rolled 24 times. How many times would you predict rolling an even number (2, 4 or 6)?', answer: '12 times', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12times'], explanation: 'Even numbers are 3 out of 6 outcomes (half). Half of 24 = 12 times.' },
        { difficulty: 'Medium', question: 'A die is rolled 36 times. How many times would you predict rolling an odd number (1, 3 or 5)?', answer: '18 times', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18times'], explanation: 'Odd numbers are 3 out of 6 outcomes (half). Half of 36 = 18 times.' },
        { difficulty: 'Medium', question: 'Sipho predicts he will roll an even number 10 times out of 20 rolls. He actually rolls an even number 12 times. How many more even numbers did he roll than predicted?', answer: '2 more', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2more'], explanation: '12 (actual) − 10 (predicted) = 2 more than predicted.' },
        { difficulty: 'Medium', question: 'Lerato predicts she will flip heads 20 times out of 40 flips. She actually flips heads 22 times. How many more heads did she get than predicted?', answer: '2 more', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2more'], explanation: '22 (actual) − 20 (predicted) = 2 more than predicted.' },
        { difficulty: 'Hard', question: 'A spinner has 5 equal sections numbered 1 to 5. It is spun 45 times. How many times would you predict landing on an odd number (1, 3 or 5)?', answer: '27 times', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27times'], explanation: 'Odd numbers are 3 out of 5 sections. 3/5 × 45 = 27 times.' },
        { difficulty: 'Hard', question: 'A spinner has 5 equal sections numbered 1 to 5. It is spun 45 times. How many times would you predict landing on an even number (2 or 4)?', answer: '18 times', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18times'], explanation: 'Even numbers are 2 out of 5 sections. 2/5 × 45 = 18 times.' },
        { difficulty: 'Hard', question: 'A die is rolled 30 times. How many times would you predict rolling a number less than 3 (that is, 1 or 2)?', answer: '10 times', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10times'], explanation: 'Numbers less than 3 are 2 out of 6 outcomes. 2/6 × 30 = 10 times.' },
        { difficulty: 'Hard', question: 'A die is rolled 42 times. How many times would you predict rolling a number greater than 4 (that is, 5 or 6)?', answer: '14 times', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14times'], explanation: 'Numbers greater than 4 are 2 out of 6 outcomes. 2/6 × 42 = 14 times.' },
        { difficulty: 'Hard', question: 'Amahle flips a coin 50 times and gets 28 heads and 22 tails. What was the predicted number of heads?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25times'], explanation: 'Heads is 1 out of 2 outcomes. Half of 50 = 25 heads.' },
        { difficulty: 'Hard', question: 'Amahle flips a coin 50 times and gets 28 heads and 22 tails. How many more heads than predicted did she get?', answer: '3 more', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3more'], explanation: '28 (actual) − 25 (predicted) = 3 more heads than predicted.' },
        { difficulty: 'Hard', question: 'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 40 times. If red comes up 13 times, what is the difference between the actual and predicted number of reds?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Predicted red = 1/4 × 40 = 10. Actual = 13. Difference = 13 − 10 = 3.' },
        { difficulty: 'Hard', question: 'A bag has 3 red marbles and 1 blue marble. If you picked a marble 100 times (replacing it each time), how many times would you predict picking red?', answer: '75 times', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75times'], explanation: 'Red is 3 out of 4 marbles. 3/4 × 100 = 75 times.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantastic! You can predict outcomes and compare them to real results with confidence.' },
        { minScore: 19, message: 'Great job! You understand predictions well — look over any missed questions.' },
        { minScore: 13, message: 'Good effort! Review how to calculate predictions and try again.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again before retrying.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP / COMBINED + SELF-CHECK REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step Problems and Reasoning',
      questions: [
        { difficulty: 'Easy', question: 'Classify this event and explain your reasoning: "Picking a black sock from a drawer with 10 black socks and 0 white socks."', answer: 'Certain — every sock in the drawer is black, so picking a black sock is guaranteed to happen every single time.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Classify this event and explain your reasoning: "Rolling a number between 1 and 6 (inclusive) on a standard die."', answer: 'Certain — a standard die only has the numbers 1 to 6, so every possible roll is between 1 and 6.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A die is rolled 60 times. How many times would you predict rolling a specific number, for example a 5?', answer: '10 times', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10times'], explanation: 'Rolling a specific number is 1 out of 6 outcomes. 60 ÷ 6 = 10 times.' },
        { difficulty: 'Medium', question: 'A die is rolled 48 times. How many times would you predict rolling a multiple of 3 (that is, 3 or 6)?', answer: '16 times', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16times'], explanation: 'Multiples of 3 are 2 out of 6 outcomes. 2/6 × 48 = 16 times.' },
        { difficulty: 'Medium', question: 'A spinner has 8 equal sections numbered 1 to 8. It is spun 56 times. How many times would you predict landing on a specific number, for example a 6?', answer: '7 times', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7times'], explanation: 'Landing on a specific number is 1 out of 8 outcomes. 56 ÷ 8 = 7 times.' },
        { difficulty: 'Medium', question: 'A bag has 2 red and 4 blue marbles (6 total). You pick a marble 45 times, replacing it each time. How many times would you predict picking blue?', answer: '30 times', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30times'], explanation: 'Blue is 4 out of 6 marbles. 4/6 × 45 = 30 times.' },
        { difficulty: 'Medium', question: 'A bag has 2 red and 4 blue marbles (6 total). You pick a marble 45 times, replacing it each time. How many times would you predict picking red?', answer: '15 times', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15times'], explanation: 'Red is 2 out of 6 marbles. 2/6 × 45 = 15 times.' },
        { difficulty: 'Medium', question: 'A bag has 5 red, 3 blue and 2 yellow marbles (10 total). You pick a marble 20 times, replacing it each time. How many times would you predict picking yellow?', answer: '4 times', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4times'], explanation: 'Yellow is 2 out of 10 marbles. 2/10 × 20 = 4 times.' },
        { difficulty: 'Medium', question: 'If you actually get 18 heads after 30 coin flips (predicted 15), is that a reasonable result? Explain your answer.', answer: 'Yes — 18 is reasonably close to the prediction of 15. The difference is only 3, which is small compared to 30 flips. Actual results vary each time an experiment is done.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'You pick red 16 times out of 20 picks from a bag with 3 red and 1 blue marble (predicted 15). Is this close to your prediction? Explain your answer.', answer: 'Yes — 16 is very close to the prediction of 15. The difference is only 1, which is small. Actual results rarely match predictions exactly; a small variation like this is completely normal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 5 red and 3 blue marbles (8 total). You pick a marble 40 times, replacing it each time. First find the fraction of picks you would predict to be blue, then how many times out of 40 you would predict picking blue.', answer: '3/8, then 15 times', checkMode: 'auto', correctAnswer: '3/815', correctAnswers: ['3/815'], explanation: 'Blue is 3 out of 8 marbles, so the fraction is 3/8. Then 3/8 × 40 = 15 times.' },
        { difficulty: 'Hard', question: 'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 40 times. How many times would you predict landing on blue or green combined?', answer: '20 times', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20times'], explanation: 'Blue and green together are 2 out of 4 sections (half). 1/2 × 40 = 20 times.' },
        { difficulty: 'Hard', question: 'Lerato flips a coin 50 times and gets 28 heads and 22 tails. If she flips the coin 50 more times, would you expect exactly 25 heads again? Explain your answer.', answer: 'No — actual results vary every time you repeat an experiment. Lerato might get 23, 26, or 28 heads on the next 50 flips. There is no guarantee of exactly 25.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'What happens to probability results as you do more and more trials? Explain your answer.', answer: 'The more trials you do, the closer the actual results get to the predicted probability. With thousands of flips, the proportion of heads would get very close to 1/2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 2 red and 3 blue marbles (5 total). You pick a marble 30 times, replacing it each time, and get 19 blue picks. What was the predicted number of blue picks, and what is the difference between actual and predicted?', answer: '18 predicted, difference of 1', checkMode: 'auto', correctAnswer: '181', correctAnswers: ['181'], explanation: 'Predicted blue = 3/5 × 30 = 18. Actual = 19. Difference = 19 − 18 = 1.' },
        { difficulty: 'Hard', question: 'A die is rolled 20 times. Would you predict rolling an odd number (1, 3 or 5) about 10 times? Explain your reasoning using fractions.', answer: 'Yes — odd numbers are 3 out of 6 outcomes on a die, which is exactly half. Half of 20 rolls = 10, so predicting 10 odd numbers is reasonable.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A spinner has 6 equal sections coloured 2 red, 2 blue and 2 green. It is spun 54 times. How many times would you predict landing on green?', answer: '18 times', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18times'], explanation: 'Green is 2 out of 6 sections. 2/6 × 54 = 18 times.' },
        { difficulty: 'Hard', question: 'A die is rolled 54 times. How many times would you predict rolling an even number, and how does this compare to rolling an odd number?', answer: '27 times for even, and the same 27 times for odd, since even and odd numbers are equally likely on a die.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'You spin a spinner with 4 equal sections (red, blue, green, yellow) 40 times and land on red 6 times. Was your result close to the prediction? Give the predicted value, the actual value, and the difference, separated by commas.', answer: '10, 6, 4', checkMode: 'auto', correctAnswer: '1064', correctAnswers: ['1064'], explanation: 'Predicted red = 1/4 × 40 = 10. Actual = 6. Difference = 10 − 6 = 4.' },
        { difficulty: 'Hard', question: 'A bag has 1 red and 9 blue marbles (10 total). You pick a marble 50 times, replacing it each time. Is picking red likely or unlikely, and how many times out of 50 would you predict picking red?', answer: 'Unlikely; 5 times', checkMode: 'auto', correctAnswer: 'unlikely5', correctAnswers: ['unlikely5'], explanation: 'Only 1 out of 10 marbles is red, so it is unlikely. Predicted red = 1/10 × 50 = 5 times.' },
        { difficulty: 'Hard', question: 'A die is rolled 18 times and a 6 is rolled 5 times. Compare the actual result to the prediction and explain whether this is reasonable.', answer: 'Predicted 6s = 1/6 × 18 = 3. Actual = 5. The difference is 2, which is a small variation for only 18 rolls, so this is a reasonable result even though it is a bit higher than predicted.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A spinner has 5 equal sections numbered 1 to 5. It is spun 100 times. How many times would you predict landing on the number 3?', answer: '20 times', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20times'], explanation: 'Landing on a specific number is 1 out of 5 outcomes. 1/5 × 100 = 20 times.' },
        { difficulty: 'Hard', question: 'Two friends each roll a die 30 times. Thabo predicts 15 even numbers and rolls 17. Sipho predicts 15 even numbers and rolls 9. Whose actual result is closer to the prediction, and by how much?', answer: 'Thabo — his difference is 17 − 15 = 2, while Sipho\'s difference is 15 − 9 = 6. Thabo\'s result is closer by 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 3 red, 3 blue and 4 yellow marbles (10 total). Explain which colour is most likely to be picked and which is least likely, giving the number of favourable outcomes for each colour.', answer: 'Yellow is most likely with 4 favourable outcomes out of 10. Red and blue are equally likely to each other, each with 3 favourable outcomes out of 10, making them less likely than yellow.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bag has 4 red, 2 blue and 2 yellow marbles (8 total). You pick a marble 32 times, replacing it each time. How many times would you predict picking red or yellow combined?', answer: '24 times', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24times'], explanation: 'Red or yellow together are 4 + 2 = 6 out of 8 marbles. 6/8 × 32 = 24 times.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Superb! You can tackle multi-step probability problems and explain your reasoning clearly.' },
        { minScore: 19, message: 'Well done! You have a strong grasp of combined probability problems — review any missed ones.' },
        { minScore: 13, message: 'Good effort! Go back over the multi-step examples and try this set again.' },
        { minScore: 0, message: 'Keep practising — revisit all four sets and the worked examples before trying again.' },
      ],
    },
  ],
}
