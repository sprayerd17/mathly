import type { TopicData } from './numbers-operations'

// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

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
      diagramSvg:
        '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg"><text x="66" y="20" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Die</text><rect x="20" y="44" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="32" cy="56" r="2.2" fill="#0f1f3d"/><rect x="54" y="44" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="59" cy="49" r="2.2" fill="#0f1f3d"/><circle cx="73" cy="63" r="2.2" fill="#0f1f3d"/><rect x="88" y="44" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="93" cy="49" r="2.2" fill="#0f1f3d"/><circle cx="100" cy="56" r="2.2" fill="#0f1f3d"/><circle cx="107" cy="63" r="2.2" fill="#0f1f3d"/><rect x="20" y="78" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="25" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="39" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="25" cy="97" r="2.2" fill="#0f1f3d"/><circle cx="39" cy="97" r="2.2" fill="#0f1f3d"/><rect x="54" y="78" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="59" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="73" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="59" cy="97" r="2.2" fill="#0f1f3d"/><circle cx="73" cy="97" r="2.2" fill="#0f1f3d"/><circle cx="66" cy="90" r="2.2" fill="#0f1f3d"/><rect x="88" y="78" width="24" height="24" rx="3" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="93" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="107" cy="83" r="2.2" fill="#0f1f3d"/><circle cx="93" cy="90" r="2.2" fill="#0f1f3d"/><circle cx="107" cy="90" r="2.2" fill="#0f1f3d"/><circle cx="93" cy="97" r="2.2" fill="#0f1f3d"/><circle cx="107" cy="97" r="2.2" fill="#0f1f3d"/><text x="66" y="118" font-size="10" fill="#64748b" text-anchor="middle">Outcomes: 1–6</text><text x="277" y="20" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Coin</text><circle cx="245" cy="70" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="245" y="77" font-size="20" font-weight="700" fill="#0f1f3d" text-anchor="middle">H</text><circle cx="310" cy="70" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="310" y="77" font-size="20" font-weight="700" fill="#0f1f3d" text-anchor="middle">T</text><text x="245" y="104" font-size="10" fill="#64748b" text-anchor="middle">Heads</text><text x="310" y="104" font-size="10" fill="#64748b" text-anchor="middle">Tails</text><text x="277" y="118" font-size="10" fill="#64748b" text-anchor="middle">Outcomes: 2</text><text x="470" y="20" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Spinner</text><circle cx="470" cy="70" r="42" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="470" y1="28" x2="470" y2="112" stroke="#0f1f3d" stroke-width="1.5"/><line x1="428" y1="70" x2="512" y2="70" stroke="#0f1f3d" stroke-width="1.5"/><text x="485" y="55" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="485" y="90" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="455" y="90" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="455" y="55" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><circle cx="470" cy="70" r="3" fill="#dc2626"/><text x="470" y="118" font-size="10" fill="#64748b" text-anchor="middle">Outcomes: 1–4</text></svg>',
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
      diagramSvg:
        '<svg viewBox="0 0 460 156" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="460" height="32" fill="#eff6ff"/><rect x="0" y="0" width="460" height="156" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="90" y1="0" x2="90" y2="156" stroke="#0f1f3d" stroke-width="1.5"/><line x1="170" y1="0" x2="170" y2="156" stroke="#0f1f3d" stroke-width="1.5"/><line x1="360" y1="0" x2="360" y2="156" stroke="#0f1f3d" stroke-width="1.5"/><line x1="0" y1="32" x2="460" y2="32" stroke="#0f1f3d" stroke-width="1.5"/><line x1="0" y1="76" x2="460" y2="76" stroke="#0f1f3d" stroke-width="1.5"/><line x1="0" y1="120" x2="460" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="45" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Outcome</text><text x="130" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Predicted</text><text x="265" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Tally</text><text x="410" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Actual</text><text x="45" y="58" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Heads</text><text x="130" y="58" font-size="14" font-weight="700" fill="#ea580c" text-anchor="middle">10</text><line x1="175" y1="44" x2="175" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="182" y1="44" x2="182" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="189" y1="44" x2="189" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="196" y1="44" x2="196" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="172" y1="64" x2="199" y2="44" stroke="#0f1f3d" stroke-width="1.6"/><line x1="215" y1="44" x2="215" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="222" y1="44" x2="222" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="229" y1="44" x2="229" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="236" y1="44" x2="236" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="212" y1="64" x2="239" y2="44" stroke="#0f1f3d" stroke-width="1.6"/><line x1="255" y1="44" x2="255" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><line x1="262" y1="44" x2="262" y2="64" stroke="#0f1f3d" stroke-width="1.6"/><text x="410" y="58" font-size="14" font-weight="700" fill="#1e40af" text-anchor="middle">12</text><text x="45" y="102" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Tails</text><text x="130" y="102" font-size="14" font-weight="700" fill="#ea580c" text-anchor="middle">10</text><line x1="175" y1="88" x2="175" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="182" y1="88" x2="182" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="189" y1="88" x2="189" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="196" y1="88" x2="196" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="172" y1="108" x2="199" y2="88" stroke="#0f1f3d" stroke-width="1.6"/><line x1="215" y1="88" x2="215" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="222" y1="88" x2="222" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><line x1="229" y1="88" x2="229" y2="108" stroke="#0f1f3d" stroke-width="1.6"/><text x="410" y="102" font-size="14" font-weight="700" fill="#1e40af" text-anchor="middle">8</text><text x="45" y="142" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Total</text><text x="130" y="142" font-size="14" font-weight="700" fill="#ea580c" text-anchor="middle">20</text><text x="410" y="142" font-size="14" font-weight="700" fill="#1e40af" text-anchor="middle">20</text></svg>',
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
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Classifying likelihood (0-3, Easy)
        { difficulty: 'Easy', question: 'The sun will rise tomorrow morning. Classify this event.', checkMode: 'auto', options: ['Certain', 'Likely', 'Unlikely', 'Impossible'], correctIndex: 0, explanation: 'This happens every single day without fail — it is certain, not just likely, because it is impossible for it not to happen.' },
        { difficulty: 'Easy', question: 'A fish will grow legs and walk on land. Classify this event.', checkMode: 'auto', options: ['Unlikely', 'Impossible', 'Certain', 'Equally likely'], correctIndex: 1, explanation: 'Fish cannot grow legs and walk on land — this can never happen under any circumstance, so it is impossible, not just unlikely.' },
        { difficulty: 'Easy', question: 'Classify the likelihood of picking a red marble from a bag of 9 blue marbles and 1 red marble.', checkMode: 'auto', options: ['Likely', 'Equally likely', 'Unlikely', 'Impossible'], correctIndex: 2, explanation: 'Only 1 out of 10 marbles is red, so picking it probably will not happen, but it is still possible — that makes it unlikely, not impossible.' },
        { difficulty: 'Easy', question: 'Rolling an odd number on a standard die (odd numbers: 1, 3, 5; even numbers: 2, 4, 6). Classify this event.', checkMode: 'auto', options: ['Likely', 'Unlikely', 'Certain', 'Equally likely'], correctIndex: 3, explanation: 'There are 3 odd numbers and 3 even numbers out of 6, so rolling odd or even has exactly the same chance — equally likely, not more likely either way.' },
        // Block 2 — Outcomes, favourable outcomes & totals (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Which list shows all the possible outcomes when flipping a coin?', checkMode: 'auto', options: ['Heads, Tails', 'Heads, Tails, Edge', 'Heads only', 'Heads, Heads'], correctIndex: 0, explanation: 'A coin has exactly two sides, so there are only two possible outcomes: Heads and Tails. It cannot land on its edge as a normal outcome.' },
        { difficulty: 'Easy-Medium', question: 'How many total outcomes are there when rolling a standard die?', checkMode: 'auto', options: ['5', '6', '12', '1'], correctIndex: 1, explanation: 'A standard die has 6 faces, numbered 1 to 6, so there are 6 total outcomes.' },
        { difficulty: 'Easy-Medium', question: 'A spinner has 5 equal sections numbered 1 to 5. Which of these lists the favourable outcomes for spinning an odd number?', checkMode: 'auto', options: ['2, 4', '1, 2, 3, 4, 5', '1, 3, 5', '1, 3'], correctIndex: 2, explanation: 'Odd numbers on the spinner are 1, 3 and 5 — these are the 3 favourable outcomes. Listing all 5 numbers, or leaving one odd number out, are common mistakes.' },
        { difficulty: 'Easy-Medium', question: 'A bag contains 2 red, 3 blue and 1 yellow marble. How many total marbles are in the bag, and how many of them are favourable outcomes for picking blue?', checkMode: 'auto', options: ['6 total, 2 favourable', '5 total, 3 favourable', '6 total, 1 favourable', '6 total, 3 favourable'], correctIndex: 3, explanation: '2 + 3 + 1 = 6 total marbles. There are 3 blue marbles, so there are 3 favourable outcomes for picking blue.' },
        // Block 3 — Word problems: predicting from ratios (8-12, Medium)
        { difficulty: 'Medium', question: 'A lucky-draw spinner at the school fete has 2 equal sections: "Win" and "Try Again". If 30 learners spin it, how many would you predict will land on "Win"?', checkMode: 'auto', options: ['15', '30', '10', '20'], correctIndex: 0, explanation: '"Win" is 1 out of 2 equal sections. Half of 30 is 15 — using the full 30, or an incorrect split, would overcount.' },
        { difficulty: 'Medium', question: 'A sweet jar for a class raffle contains 14 red sweets and 7 green sweets. What fraction of the sweets are green? Give your answer in simplest form.', checkMode: 'auto', options: [frac('7', '21'), frac('1', '3'), frac('2', '3'), frac('1', '2')], correctIndex: 1, explanation: `There are 14 + 7 = 21 sweets in total, and 7 are green, so the fraction is ${frac('7', '21')}. Dividing the top and bottom by 7 gives ${frac('1', '3')} — the simplest form. ${frac('2', '3')} is the fraction for red, not green.` },
        { difficulty: 'Medium', question: 'A weather-spinner game has 5 equal sections: 3 sunny and 2 rainy. It is spun 40 times to model a season. If 24 of those spins are predicted to be sunny, how many are predicted to be rainy?', checkMode: 'auto', options: ['20', '15', '16', '24'], correctIndex: 2, explanation: `Every spin is either sunny or rainy, so rainy spins = 40 − 24 = 16. This matches ${frac('2', '5')} × 40 = 16 worked out directly from the ratio.` },
        { difficulty: 'Medium', question: 'Team A draws jersey tags from a bag with 4 blue and 4 orange tags (8 total). Team B draws from a bag with 5 blue and 3 orange tags (8 total). Each team draws a tag 32 times, replacing it each time. Which team would you predict draws more blue tags, and by how many more?', checkMode: 'auto', options: ['Team A, by 4 more', 'Team B, by 8 more', 'Team A, by 20 more', 'Team B, by 4 more'], correctIndex: 3, explanation: `Team A: ${frac('4', '8')} × 32 = 16 blue tags. Team B: ${frac('5', '8')} × 32 = 20 blue tags. Team B draws 20 − 16 = 4 more blue tags than Team A.` },
        { difficulty: 'Medium', question: 'A lucky-dip prize bag has 3 small prizes and 5 big prizes in every group of 8. If 24 learners dip into the bag (replacing the prize each time), how many would you predict to get a big prize?', checkMode: 'auto', options: ['15', '9', '3', '21'], correctIndex: 0, explanation: `Big prize is 5 out of 8. ${frac('5', '8')} × 24 = 15 learners. Using ${frac('3', '8')} (the small-prize fraction) instead would incorrectly give 9.` },
        // Block 4 — Comparing predicted vs actual results (13-15, Medium)
        { difficulty: 'Medium', question: 'A coin is flipped 30 times. The prediction is 15 heads. The actual result is 18 heads. What is the difference between the actual and predicted results?', checkMode: 'auto', options: ['33', '3', '15', '18'], correctIndex: 1, explanation: '18 (actual) − 15 (predicted) = 3. Adding instead of subtracting, or repeating one of the given numbers, are common mistakes here.' },
        { difficulty: 'Medium', question: 'In the same coin experiment (predicted 15 heads, actual 18 heads out of 30 flips), which statement best explains whether this is a reasonable result?', checkMode: 'auto', options: ['No — actual results must always exactly equal the prediction.', 'No — the coin must be unfair because 18 is more than 15.', 'Yes — the difference is only 3, which is a small, normal variation for 30 flips.', 'Yes — but only because 18 is exactly double 9.'], correctIndex: 2, explanation: 'Actual results vary each time an experiment is done. A difference of 3 out of 30 flips is small and does not mean the coin is unfair.' },
        { difficulty: 'Medium', question: 'A student claims: "Since heads and tails are equally likely, if I flip a coin 10 times I will always get exactly 5 heads." Is the student correct?', checkMode: 'auto', options: ['Yes — equal probability guarantees an equal split every time.', 'No — because tails is actually more likely than heads.', 'Yes — but only for even numbers of flips.', 'No — equally likely outcomes tell us what to expect on average, not what must happen every single time.'], correctIndex: 3, explanation: 'Equally likely outcomes only tell us what to expect on average. In a small number of trials like 10 flips, the actual result can easily be 4, 6, 7 heads or another number.' },
        // Block 5 — Error-spotting & justify-your-reasoning (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Lerato says picking a yellow marble from a bag with 1 yellow marble and 19 red marbles is impossible. Amahle says it is unlikely. Who is correct, and why?', checkMode: 'auto', options: ['Amahle — it is unlikely, not impossible, because there is still 1 yellow marble that could be picked.', 'Lerato — it is impossible because there is only 1 yellow marble.', 'Both are correct — it is both impossible and unlikely.', 'Neither is correct — it is actually likely.'], correctIndex: 0, explanation: '"Impossible" would mean it can never happen, which is wrong here since the yellow marble genuinely could be picked. "Unlikely" correctly describes a small but real chance.' },
        { difficulty: 'Medium-Hard', question: 'Thabo says rolling an odd number on a die is certain. Sipho says rolling an odd number and rolling an even number are equally likely. Who is correct, and why?', checkMode: 'auto', options: ['Thabo — rolling an odd number is certain because there are more odd numbers than even ones.', 'Sipho — odd and even numbers each have 3 out of 6 outcomes, so they are equally likely.', 'Both are correct.', 'Neither — rolling an odd number is actually unlikely.'], correctIndex: 1, explanation: 'A die has 3 odd numbers (1, 3, 5) and 3 even numbers (2, 4, 6) out of 6, so odd and even each have exactly the same chance. "Certain" would mean odd numbers always come up, but sometimes an even number is rolled instead.' },
        // Block 6 — Multi-step reasoning & combined events (18-19, Hard)
        { difficulty: 'Hard', question: 'A spinner has 4 equal sections coloured red, blue, green and yellow. It is spun 40 times. How many times would you predict landing on blue or green combined?', checkMode: 'auto', options: ['10', '30', '20', '40'], correctIndex: 2, explanation: `Blue and green together are 2 out of 4 sections — ${frac('1', '2')} × 40 = 20. Using just one colour's fraction (${frac('1', '4')} × 40 = 10) misses that two colours are combined.` },
        { difficulty: 'Hard', question: 'Two friends each roll a die 30 times. Thabo predicts 15 even numbers and rolls 17. Sipho predicts 15 even numbers and rolls 9. Whose actual result is closer to the prediction, and by how much?', checkMode: 'auto', options: ['Sipho — his result is closer because 9 is a smaller number.', 'Thabo — but only by 2, not 4.', 'Both results are equally close to the prediction.', 'Thabo — his difference is 17 − 15 = 2, while Sipho\'s difference is 15 − 9 = 6, so Thabo is closer by 4.'], correctIndex: 3, explanation: 'Thabo\'s actual result is only 2 away from his prediction, while Sipho\'s is 6 away. Thabo\'s result is closer by 4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You know the language of probability inside and out.' },
        { minScore: 15, message: 'Great work! You can confidently classify events and predict outcomes — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Classifying likelihood (0-3, Easy)
        { difficulty: 'Easy', question: 'It will snow in the Sahara Desert today. Classify this event.', checkMode: 'auto', options: ['Impossible', 'Unlikely', 'Likely', 'Certain'], correctIndex: 0, explanation: 'The Sahara is one of the hottest places on Earth, so this can never happen — it is impossible, not just unlikely.' },
        { difficulty: 'Easy', question: 'It will be warm in summer in South Africa. Classify this event.', checkMode: 'auto', options: ['Certain', 'Likely', 'Unlikely', 'Equally likely'], correctIndex: 1, explanation: 'Summer is usually warm, though not every day is exactly the same, so this is likely, not certain, since it is not 100% guaranteed.' },
        { difficulty: 'Easy', question: 'Classify the likelihood of landing on green on a spinner with 10 equal sections where 1 is green and 9 are orange.', checkMode: 'auto', options: ['Impossible', 'Likely', 'Unlikely', 'Equally likely'], correctIndex: 2, explanation: 'Only 1 out of 10 sections is green, so landing on it is possible but probably will not happen — it is unlikely, not impossible.' },
        { difficulty: 'Easy', question: 'Spinning a spinner with 2 equal sections (red and blue) and landing on red. Classify this event.', checkMode: 'auto', options: ['Likely', 'Unlikely', 'Certain', 'Equally likely'], correctIndex: 3, explanation: 'The 2 sections are equal in size, so red and blue have exactly the same chance — equally likely, not more likely for either colour.' },
        // Block 2 — Outcomes, favourable outcomes & totals (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'How many total outcomes are there when flipping a coin?', checkMode: 'auto', options: ['2', '1', '4', '6'], correctIndex: 0, explanation: 'A coin has 2 sides, so there are 2 total outcomes.' },
        { difficulty: 'Easy-Medium', question: 'Which list shows all possible outcomes when rolling a standard die?', checkMode: 'auto', options: ['1, 2, 3', '1, 2, 3, 4, 5, 6', '0, 1, 2, 3, 4, 5', '2, 4, 6'], correctIndex: 1, explanation: 'A standard die has 6 faces numbered 1 to 6, so those are the 6 possible outcomes — not just half of them or shifted by one.' },
        { difficulty: 'Easy-Medium', question: 'A spinner has 4 equal sections numbered 1 to 4. Which of these lists the favourable outcomes for landing on an even number?', checkMode: 'auto', options: ['1, 3', '1, 2, 3, 4', '2, 4', '4'], correctIndex: 2, explanation: 'Even numbers on the spinner are 2 and 4, so those are the 2 favourable outcomes.' },
        { difficulty: 'Easy-Medium', question: 'A bag has 4 red marbles and 3 blue marbles. How many total marbles are in the bag, and how many favourable outcomes are there for picking red?', checkMode: 'auto', options: ['7 total, 3 favourable', '4 total, 4 favourable', '7 total, 7 favourable', '7 total, 4 favourable'], correctIndex: 3, explanation: '4 + 3 = 7 total marbles. There are 4 red marbles, so 4 favourable outcomes for picking red.' },
        // Block 3 — Word problems: predicting from ratios (8-12, Medium)
        { difficulty: 'Medium', question: 'A day-of-week picker has 7 equal cards, one for each day. If a day is picked 14 times (replacing the card each time), how many times would you predict picking a Saturday?', checkMode: 'auto', options: ['2', '7', '14', '1'], correctIndex: 0, explanation: 'Saturday is 1 out of 7 days. 14 ÷ 7 = 2 times.' },
        { difficulty: 'Medium', question: 'Over a 30-day March, a weather-tracking log recorded 20 dry days and 10 rainy days. What fraction of the days in the log were rainy? Give your answer in simplest form.', checkMode: 'auto', options: [frac('10', '30'), frac('1', '3'), frac('2', '3'), frac('1', '2')], correctIndex: 1, explanation: `10 out of 30 days were rainy, so the fraction is ${frac('10', '30')}. Dividing the top and bottom by 10 gives ${frac('1', '3')} — the simplest form. ${frac('2', '3')} is actually the fraction for dry days.` },
        { difficulty: 'Medium', question: 'A lucky-draw box at a school fete has 4 winning tickets and 1 losing ticket in every group of 5. If 45 learners draw a ticket (replacing it each time), and 36 of them are predicted to win, how many are predicted to lose?', checkMode: 'auto', options: ['45', '5', '9', '36'], correctIndex: 2, explanation: 'Every draw is either a win or a loss, so losses = 45 − 36 = 9.' },
        { difficulty: 'Medium', question: 'Coach Dlamini draws names from a hat with 3 goalkeeper cards and 2 field-player cards (5 total). Coach Nkosi draws from a hat with 2 goalkeeper cards and 3 field-player cards (5 total). If each coach makes 25 draws (replacing the card each time), which coach would you predict gets more goalkeeper draws, and by how many?', checkMode: 'auto', options: ['Coach Nkosi, by 5 more', 'Coach Dlamini, by 10 more', 'Coach Nkosi, by 10 more', 'Coach Dlamini, by 5 more'], correctIndex: 3, explanation: `Dlamini: ${frac('3', '5')} × 25 = 15 goalkeeper draws. Nkosi: ${frac('2', '5')} × 25 = 10 goalkeeper draws. Dlamini gets 15 − 10 = 5 more.` },
        { difficulty: 'Medium', question: 'A lucky-dip prize bag has 5 sticker prizes and 3 pencil prizes in every group of 8. If 40 learners dip into the bag (replacing the prize each time), how many would you predict to get a pencil?', checkMode: 'auto', options: ['15', '25', '8', '40'], correctIndex: 0, explanation: `Pencil is 3 out of 8. ${frac('3', '8')} × 40 = 15 learners. Using ${frac('5', '8')} (the sticker fraction) instead gives the wrong count of 25.` },
        // Block 4 — Comparing predicted vs actual results (13-15, Medium)
        { difficulty: 'Medium', question: 'A bag has 3 red and 1 blue marble. You pick a marble 20 times, replacing it each time. The prediction for red is 15. The actual result is 16. What is the difference between the actual and predicted results?', checkMode: 'auto', options: ['31', '1', '15', '16'], correctIndex: 1, explanation: '16 (actual) − 15 (predicted) = 1.' },
        { difficulty: 'Medium', question: 'Using the same marble experiment (predicted 15, actual 16 out of 20 picks), which statement best explains whether this is a reasonable result?', checkMode: 'auto', options: ['No — actual results must always exactly match the prediction.', 'No — the marbles must not be equally likely to be picked.', 'Yes — the difference is only 1, which is a very small and normal variation.', 'Yes — but only because 16 is an even number.'], correctIndex: 2, explanation: 'Actual results rarely match predictions exactly; a small variation like this is completely normal.' },
        { difficulty: 'Medium', question: 'A student claims: "If a spinner has 4 equal colours and I spin it 40 times, exactly 10 of each colour must come up." Is the student correct?', checkMode: 'auto', options: ['Yes — equal sections always guarantee an exactly equal split.', 'No — because some colours are naturally more likely than others.', 'Yes — but only if the spinner is spun exactly 40 times.', 'No — 10 of each is only the prediction; actual results like 8, 11, 9 and 12 are normal small variations.'], correctIndex: 3, explanation: '10 of each colour is only the prediction based on equal chances, not a guarantee. Small differences from 10 are completely normal, especially with a limited number of spins.' },
        // Block 5 — Error-spotting & justify-your-reasoning (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A bag has 5 red marbles and 0 blue marbles. Nomvula says picking a blue marble is unlikely. Zanele says it is impossible. Who is correct, and why?', checkMode: 'auto', options: ['Zanele — it is impossible, since there are no blue marbles in the bag at all.', 'Nomvula — it is unlikely, since a small chance always remains.', 'Both are correct — it is both unlikely and impossible.', 'Neither — picking blue is actually equally likely to picking red.'], correctIndex: 0, explanation: '"Unlikely" would mean there is still a small chance, but here there is no chance whatsoever, so it must be impossible.' },
        { difficulty: 'Medium-Hard', question: 'A spinner has 6 equal sections numbered 1 to 6. Karabo says landing on a number greater than 3 is more likely than landing on a number less than 4. Boitumelo says they are equally likely. Who is correct, and why?', checkMode: 'auto', options: ['Karabo — numbers greater than 3 include larger numbers, so they are more likely.', 'Boitumelo — both events have exactly 3 out of 6 favourable outcomes, so they are equally likely.', 'Both are correct.', 'Neither — landing on a number less than 4 is actually more likely.'], correctIndex: 1, explanation: 'Numbers greater than 3 are 4, 5, 6 and numbers less than 4 are 1, 2, 3 — both have exactly 3 out of 6 favourable outcomes, so they are equally likely.' },
        // Block 6 — Multi-step reasoning & combined events (18-19, Hard)
        { difficulty: 'Hard', question: 'A bag has 4 red, 2 blue and 2 yellow marbles (8 total). You pick a marble 32 times, replacing it each time. How many times would you predict picking red or yellow combined?', checkMode: 'auto', options: ['8', '16', '24', '32'], correctIndex: 2, explanation: `Red or yellow together are 4 + 2 = 6 out of 8 marbles. ${frac('6', '8')} × 32 = 24 times.` },
        { difficulty: 'Hard', question: 'A die is rolled 18 times and a 6 comes up 5 times. Compare the actual result to the prediction and decide whether this is reasonable.', checkMode: 'auto', options: ['No — getting a 6 five times means the die is unfair.', 'Yes — but only because 5 is an odd number.', 'No — the prediction should have been exactly 5.', 'Yes — the prediction is 3, so a difference of 2 is a small, normal variation for only 18 rolls.'], correctIndex: 3, explanation: `Predicted 6s = ${frac('1', '6')} × 18 = 3. Actual = 5. A difference of 2 is small for only 18 rolls, so this is a reasonable result even though it is a bit higher than predicted.` },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can classify events, list outcomes and predict results with confidence.' },
        { minScore: 15, message: 'Well done! You understand probability well — check over any mistakes.' },
        { minScore: 10, message: 'Good try! Go back over the worked examples and have another go.' },
        { minScore: 0, message: 'Keep practising — review the worked examples and try this set again.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Classifying likelihood (0-3, Easy)
        { difficulty: 'Easy', question: 'Every learner in a Grade 4 class is above the age of 100 years. Classify this event.', checkMode: 'auto', options: ['Impossible', 'Unlikely', 'Certain', 'Likely'], correctIndex: 0, explanation: 'Grade 4 learners are children, so none can be over 100 years old — this can never happen, so it is impossible, not merely unlikely.' },
        { difficulty: 'Easy', question: 'A baby will be born somewhere in South Africa today. Classify this event.', checkMode: 'auto', options: ['Certain', 'Likely', 'Equally likely', 'Unlikely'], correctIndex: 1, explanation: 'This is almost always true, but it is not a logical certainty like the sun rising, so it is Likely rather than Certain.' },
        { difficulty: 'Easy', question: 'Classify the likelihood of picking a blue marble from a bag of 9 blue marbles and 1 red marble.', checkMode: 'auto', options: ['Certain', 'Equally likely', 'Likely', 'Unlikely'], correctIndex: 2, explanation: '9 out of 10 marbles are blue, so picking blue will probably happen — it is likely, though not certain, since the 1 red marble could still be picked.' },
        { difficulty: 'Easy', question: 'Picking a red card from a standard deck of 52 playing cards (26 red, 26 black). Classify this event.', checkMode: 'auto', options: ['Likely', 'Unlikely', 'Certain', 'Equally likely'], correctIndex: 3, explanation: 'Exactly half the cards (26 out of 52) are red, giving the same chance as drawing a black card — this is equally likely, not more likely either way.' },
        // Block 2 — Outcomes, favourable outcomes & totals (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Which list shows all possible outcomes when spinning a spinner with 3 equal sections numbered 1, 2 and 3?', checkMode: 'auto', options: ['1, 2, 3', '1, 2, 3, 4', '0, 1, 2', '1, 3'], correctIndex: 0, explanation: 'The spinner has 3 sections, so the outcomes are 1, 2 and 3 — no more, no fewer.' },
        { difficulty: 'Easy-Medium', question: 'A die is rolled once. How many total outcomes are there, and how many of them are favourable outcomes for "rolling a number greater than 4"?', checkMode: 'auto', options: ['6 total, 1 favourable', '6 total, 2 favourable', '4 total, 2 favourable', '6 total, 4 favourable'], correctIndex: 1, explanation: 'A die has 6 total outcomes. Numbers greater than 4 are 5 and 6, so there are 2 favourable outcomes.' },
        { difficulty: 'Easy-Medium', question: 'A spinner has 8 equal sections numbered 1 to 8. Which of these lists the favourable outcomes for landing on a number less than 3?', checkMode: 'auto', options: ['3, 4', '1, 2, 3', '1, 2', '1'], correctIndex: 2, explanation: 'Numbers less than 3 on the spinner are 1 and 2 — 3 itself is not less than 3, so it should not be included.' },
        { difficulty: 'Easy-Medium', question: 'Two coins are flipped together, one after the other. Which list shows all 4 possible outcomes as pairs (H for heads, T for tails)?', checkMode: 'auto', options: ['HH, TT', 'HH, HT, TH', 'HH, HT, HT, TT', 'HH, HT, TH, TT'], correctIndex: 3, explanation: 'Each coin can land H or T. Listing every combination gives 4 outcomes: HH, HT, TH, TT — leaving one out, or repeating one, are common mistakes.' },
        // Block 3 — Word problems: predicting from ratios (8-12, Medium)
        { difficulty: 'Medium', question: 'A raffle at a school fete sells tickets in 2 equal colours: pink and yellow, and one colour is drawn as the winner. If 50 tickets are checked one at a time against the draw pattern, how many would you predict to match "pink"?', checkMode: 'auto', options: ['25', '50', '10', '2'], correctIndex: 0, explanation: 'Pink is 1 out of 2 colours. Half of 50 is 25.' },
        { difficulty: 'Medium', question: 'Over 28 days in a rainy month, a weather log recorded 21 ordinary rainy days and 7 thunderstorm days. What fraction of the 28 days were thunderstorm days? Give your answer in simplest form.', checkMode: 'auto', options: [frac('7', '28'), frac('1', '4'), frac('3', '4'), frac('1', '3')], correctIndex: 1, explanation: `7 out of 28 days were thunderstorm days, so the fraction is ${frac('7', '28')}. Dividing the top and bottom by 7 gives ${frac('1', '4')} — the simplest form. ${frac('3', '4')} is the fraction of ordinary rainy days instead.` },
        { difficulty: 'Medium', question: 'A jersey draw has 2 red jerseys and 3 white jerseys in every group of 5. Out of 35 players who each draw a jersey (replacing it each time), 21 are predicted to draw white. How many are predicted to draw red?', checkMode: 'auto', options: ['35', '5', '14', '21'], correctIndex: 2, explanation: 'Every draw is either red or white, so red draws = 35 − 21 = 14.' },
        { difficulty: 'Medium', question: 'A lucky-dip bag at a fete has 5 small toys and 3 large toys in every group of 8. A second bag at the same fete has 3 small toys and 5 large toys in every group of 8. If 56 children dip into each bag (replacing the toy each time), which bag would you predict gives out more large toys, and by how many?', checkMode: 'auto', options: ['The first bag, by 14 more', 'The second bag, by 8 more', 'The first bag, by 8 more', 'The second bag, by 14 more'], correctIndex: 3, explanation: `First bag: ${frac('3', '8')} × 56 = 21 large toys. Second bag: ${frac('5', '8')} × 56 = 35 large toys. The second bag gives 35 − 21 = 14 more.` },
        { difficulty: 'Medium', question: 'A day-of-week spinner is used to plan library visits, with a favourable outcome of Monday, Tuesday or Wednesday out of the 7 days. If the spinner is used 49 times, how many times would you predict landing on one of these 3 days?', checkMode: 'auto', options: ['21', '49', '7', '3'], correctIndex: 0, explanation: `Monday, Tuesday or Wednesday is 3 out of 7 days. ${frac('3', '7')} × 49 = 21 times.` },
        // Block 4 — Comparing predicted vs actual results (13-15, Medium)
        { difficulty: 'Medium', question: 'Amahle flips a coin 50 times and gets 28 heads and 22 tails. What was the predicted number of heads, and what is the difference between actual and predicted?', checkMode: 'auto', options: ['22 predicted, 6 more', '25 predicted, 3 more', '25 predicted, 3 fewer', '28 predicted, 0 more'], correctIndex: 1, explanation: 'Heads is 1 out of 2 outcomes. Half of 50 is 25 predicted. 28 (actual) − 25 (predicted) = 3 more.' },
        { difficulty: 'Medium', question: 'Using the same coin experiment (predicted 25 heads, actual 28 out of 50 flips), which statement best explains whether this is a reasonable result?', checkMode: 'auto', options: ['No — the coin must be biased toward heads.', 'No — actual results must always exactly equal 25.', 'Yes — the difference is only 3, which is a small and normal variation for 50 flips.', 'Yes — but only because 28 is close to 30.'], correctIndex: 2, explanation: 'Actual results vary each time an experiment is done, and a difference of 3 out of 50 flips is a normal amount of variation.' },
        { difficulty: 'Medium', question: 'A student claims: "If my prediction and actual result do not match exactly, my prediction must have been wrong." Is the student correct?', checkMode: 'auto', options: ['Yes — a correct prediction should always match the actual result exactly.', 'No — because predictions only apply to coins, not other experiments.', 'Yes — unless the difference is exactly zero, the prediction was wrong.', 'No — a prediction only tells us what to expect on average; small differences from the actual result are normal.'], correctIndex: 3, explanation: 'A prediction is based on equally likely outcomes and tells us what to expect on average, not a guarantee of the exact result.' },
        // Block 5 — Error-spotting & justify-your-reasoning (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A spinner has 10 equal sections: 1 green and 9 orange. Palesa says landing on green is impossible. Naledi says it is unlikely. Who is correct, and why?', checkMode: 'auto', options: ['Naledi — it is unlikely, not impossible, since the 1 green section could still come up.', 'Palesa — it is impossible because green is so rare.', 'Both are correct — impossible and unlikely mean the same thing here.', 'Neither — landing on green is actually equally likely to landing on orange.'], correctIndex: 0, explanation: '"Impossible" would mean it can never happen, which is false since green genuinely could come up. "Unlikely" correctly describes a small but real chance.' },
        { difficulty: 'Medium-Hard', question: 'A bag has 6 black socks and 6 white socks. Tumi says picking a black sock is likely. Refilwe says black and white are equally likely. Who is correct, and why?', checkMode: 'auto', options: ['Tumi — black is likely because there are 6 black socks.', 'Refilwe — black and white have exactly the same number of socks, so they are equally likely.', 'Both are correct.', 'Neither — picking a white sock is actually more likely.'], correctIndex: 1, explanation: 'There are 6 black and 6 white socks — exactly the same number of each — so both colours have exactly the same chance of being picked.' },
        // Block 6 — Multi-step reasoning & combined events (18-19, Hard)
        { difficulty: 'Hard', question: 'A bag has 5 red and 3 blue marbles (8 total). You pick a marble 40 times, replacing it each time. Find the fraction of picks you would predict to be blue, then how many times out of 40 you would predict picking blue.', checkMode: 'auto', options: [`${frac('5', '8')}, then 25 times`, `${frac('3', '8')}, then 12 times`, `${frac('3', '8')}, then 15 times`, `${frac('3', '5')}, then 24 times`], correctIndex: 2, explanation: `Blue is 3 out of 8 marbles, so the fraction is ${frac('3', '8')}. Then ${frac('3', '8')} × 40 = 15 times. Using ${frac('3', '5')} (blue compared to red only) instead of ${frac('3', '8')} (blue compared to the total) is a common mistake.` },
        { difficulty: 'Hard', question: 'What happens to actual results compared to the prediction as you do more and more trials of an experiment?', checkMode: 'auto', options: ['The more trials you do, the further the actual results drift from the prediction.', 'The number of trials has no effect on how close results are to the prediction.', 'Actual results only match the prediction exactly once you reach 100 trials.', 'The more trials you do, the closer the actual results get to the predicted probability.'], correctIndex: 3, explanation: 'With just a few trials the actual result can vary a lot from the prediction, but with many trials the proportion gets very close to the predicted fraction.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can predict outcomes and compare them to real results with confidence.' },
        { minScore: 15, message: 'Great job! You understand predictions and reasoning well — look over any missed questions.' },
        { minScore: 10, message: 'Good effort! Review how to calculate predictions and try again.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again before retrying.' },
      ],
    },
  ],
}
