import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (angle roles) ────────────────────────────────────────────
// acute / vertex / known angles → blue   (#2563eb)
// right / baseline              → green  (#16a34a)
// obtuse / measurement / sum    → orange (#ea580c)
// reflex / unknown angle        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// CAPS Grade 6 names angle types (acute, right, obtuse, straight, reflex,
// revolution) and compares them informally to right angles and straight
// angles WITHOUT a protractor and WITHOUT measuring in degrees ("Learners...
// still do not work with protractors. Nor do they measure angles in
// degrees" — CAPS IP content clarification, Grade 6, Properties of 2D
// shapes). Protractor use and exact-degree arithmetic are Senior Phase
// (Grade 7+) content. We keep this material — clearly labelled — because it
// is well-built and many schools do introduce it early, but it goes beyond
// what CAPS examines in Grade 6.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Angles',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TYPES OF ANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'types-of-angles',
      title: 'Types of Angles',
      icon: '∠',
      explanation:
        lookingAhead(
          'exact degree values',
          'In Grade 6 you compare angles informally to a right angle and a straight angle — for example "smaller than a right angle" (acute) or "bigger than a straight angle but smaller than a full turn" (reflex). Writing each angle as an exact number of degrees (like "35°") and measuring with a protractor is Grade 7+ work. It is shown here so you can see where this topic is heading, and it can help build number sense — just know it will not be examined this way in Grade 6.'
        ) +
        `<p style="margin-bottom:16px;">An angle is formed where two lines meet at a point. We classify angles by comparing them to a ${gr('right angle')} (a quarter turn) and a straight angle (a half turn). An ${bl('acute')} angle is smaller than a right angle. A ${gr('right')} angle looks like the corner of a square page. An ${or('obtuse')} angle is bigger than a right angle but smaller than a straight angle. A straight angle forms a straight line (a half turn). A ${re('reflex')} angle is bigger than a straight angle but smaller than a full turn. A revolution is a full turn back to where you started. In degrees (Grade 7+ notation, shown here for context): acute &lt; 90°, right = 90°, obtuse is 90°–180°, straight = 180°, reflex is 180°–360°, revolution = 360°.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('acute')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('right')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('obtuse')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('reflex')}</span>` +
        `</div>` +

        // ── Angle types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Angle types</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Acute angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Greater than 0° and less than 90°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Right angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly 90° — marked with a small square.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Obtuse angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Greater than 90° and less than 180°.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reflex angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Greater than 180° and less than 360°.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Straight angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly 180° — forms a straight line.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Revolution</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A full turn of exactly 360°.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick check</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always compare the angle to <strong>90°</strong> first — is it smaller, equal, or larger? Then compare to <strong>180°</strong> to decide between obtuse, straight, and reflex.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Classify a 35° angle.',
          answer: `35° is an ${bl('acute')} angle`,
          steps: [
            `Compare to 90°: <strong>35 &lt; 90</strong>, so the angle is smaller than a right angle.`,
            `An angle that is greater than 0° and less than 90° is an ${bl('acute')} angle.`,
            `<strong>Answer:</strong> 35° is an ${bl('acute')} angle. ✓`,
          ],
        },
        {
          question: 'Classify a 210° angle.',
          answer: `210° is a ${re('reflex')} angle`,
          steps: [
            `Compare to 180°: <strong>210 &gt; 180</strong>, so the angle is larger than a straight angle.`,
            `Compare to 360°: <strong>210 &lt; 360</strong>, so it is not a full revolution.`,
            `An angle between 180° and 360° is a ${re('reflex')} angle.`,
            `<strong>Answer:</strong> 210° is a ${re('reflex')} angle. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — classify an acute angle ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Classify a 45° angle.',
          answer: 'acute',
          checkMode: 'auto',
          correctAnswer: 'acute',
          explanation: '45° is less than 90°, so it is an acute angle. An angle greater than 0° and less than 90° is acute.',
        },

        // ── Q2 Easy — classify an obtuse angle ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Classify a 95° angle.',
          answer: 'obtuse',
          checkMode: 'auto',
          correctAnswer: 'obtuse',
          explanation: '95° is greater than 90° and less than 180°, so it is an obtuse angle.',
        },

        // ── Q3 Medium — unknown angle on a straight line ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line are 65° and x. Find x.',
          answer: '115',
          checkMode: 'auto',
          correctAnswer: '115',
          explanation: 'Angles on a straight line add up to 180°.\nx = 180° − 65° = 115°',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify and classify acute right obtuse straight reflex angles and revolutions with examples" />',

      diagramPlaceholder:
        'The six angle types compared side by side by how wide they open — acute, right, obtuse, straight, reflex and revolution.',

      diagramSvg:
        '<svg viewBox="0 0 490 165" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="40" y1="95" x2="40" y2="45" stroke="#2563eb" stroke-width="2.5"/>' +
        '<line x1="40" y1="95" x2="78" y2="63" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="40" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Acute</text>' +
        '<line x1="120" y1="95" x2="120" y2="45" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="120" y1="95" x2="170" y2="95" stroke="#16a34a" stroke-width="2.5"/>' +
        '<path d="M120,80 L135,80 L135,95" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="120" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Right</text>' +
        '<line x1="200" y1="95" x2="200" y2="45" stroke="#ea580c" stroke-width="2.5"/>' +
        '<line x1="200" y1="95" x2="238" y2="127" stroke="#ea580c" stroke-width="2.5"/>' +
        '<text x="200" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Obtuse</text>' +
        '<line x1="230" y1="95" x2="330" y2="95" stroke="#374151" stroke-width="2.5"/>' +
        '<circle cx="280" cy="95" r="3" fill="#374151"/>' +
        '<text x="280" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Straight</text>' +
        '<line x1="360" y1="95" x2="360" y2="45" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="360" y1="95" x2="322" y2="70" stroke="#dc2626" stroke-width="2.5"/>' +
        '<path d="M360,77 A18,18 0 1 1 345,85.1" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/>' +
        '<text x="360" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Reflex</text>' +
        '<line x1="440" y1="95" x2="440" y2="45" stroke="#374151" stroke-width="2.5"/>' +
        '<circle cx="440" cy="95" r="30" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="4,3"/>' +
        '<polygon points="465,80 465,90 474,85" fill="#374151"/>' +
        '<text x="440" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Revolution</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MEASURING ANGLES WITH A PROTRACTOR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-angles-protractor',
      title: 'Measuring Angles with a Protractor',
      icon: '📐',
      explanation:
        lookingAhead(
          'protractors and degree measurement',
          'CAPS Grade 6 does not use protractors or measure angles in degrees — that starts in Grade 7. In Grade 6 you only need an informal angle checker (like the corner of a piece of paper) to see whether an angle is bigger or smaller than a right angle. This whole section is enrichment for learners who want a head start.'
        ) +
        `<p style="margin-bottom:16px;">We measure angles using a protractor in degrees. Place the ${bl('centre point')} of the protractor on the ${bl('vertex')} of the angle. Line up the ${gr('baseline')} of the protractor with one arm of the angle. Read the degree where the other arm crosses the scale — this is the ${or('measurement')}. Protractors have two scales — always check which one matches where you started counting from zero.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vertex')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('baseline')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('measurement')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to measure an angle</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Place the ${bl('centre point')} of the protractor exactly on the ${bl('vertex')} — the point where the two arms meet.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Line up the ${gr('baseline')} of the protractor with one arm of the angle. Note which scale starts at 0° on that arm.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Read the ${or('degree measurement')} where the other arm crosses the <em>same scale</em> you started from.</p>` +
        `</div>` +

        `</div>` +

        // ── Two-scale warning ─────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common mistake: using the wrong scale</p>` +
        `<p style="margin:0;color:#991b1b;">A protractor has an inner scale and an outer scale that add up to 180°. If you start from 0° on one scale, you must read the ${or('measurement')} from <strong>the same scale</strong> all the way to the other arm. Switching scales will give you the supplementary angle instead of the correct one.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'An angle is measured starting from 0° on the inner scale and the other arm crosses at 65°. What is the angle?',
          answer: `The angle is ${or('65°')}`,
          steps: [
            `The ${gr('baseline')} is aligned with one arm and the inner scale starts at 0° on that arm.`,
            `Read directly from the ${or('same scale')} — the scale you started from at 0°.`,
            `The other arm crosses the inner scale at <strong>65</strong>.`,
            `<strong>Answer:</strong> The angle is ${or('65°')}. ✓`,
          ],
        },
        {
          question: 'Sipho measures an angle and reads 130° on the outer scale but started from the inner scale at 0°. What went wrong?',
          answer: `Sipho read from the wrong scale — the correct reading is ${or('50°')}`,
          steps: [
            `Sipho aligned the ${gr('baseline')} correctly and started from 0° on the ${bl('inner scale')}.`,
            `He then read 130° from the outer scale — but this is the <em>supplementary</em> value (180° − 130° = 50°).`,
            `Using the wrong scale gives an incorrect reading. He must read from the same scale consistently from 0° to the other arm.`,
            `<strong>Correct answer:</strong> The angle is ${or('50°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Medium — unknown angle around a point ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Three angles around a point are 140°, 110° and y. Find y.',
          answer: '110',
          checkMode: 'auto',
          correctAnswer: '110',
          explanation: 'Angles around a point add up to 360°.\ny = 360° − 140° − 110°\ny = 360° − 250°\ny = 110°',
        },

        // ── Q5 Hard — Sipho misclassifies 180° ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a 180° angle is a reflex angle. Is he correct?',
          answer: 'No — 180° is a straight angle, not a reflex angle. Reflex angles are greater than 180° and less than 360°.',
          checkMode: 'self',
        },

        // ── Q6 Easy — degrees in a full revolution ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many degrees are in a full revolution?',
          answer: '360',
          checkMode: 'auto',
          correctAnswer: '360',
          explanation: 'A full revolution is a complete turn. It is exactly 360°.',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to place a protractor on a vertex align the baseline and read the correct scale to measure an angle" />',

      diagramPlaceholder:
        'A protractor with its centre point on the vertex, baseline aligned with one arm, and the other arm\'s reading of 65° highlighted in orange.',

      diagramSvg:
        '<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M30,120 A90,90 0 0 1 210,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="30" y1="120" x2="210" y2="120" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="210" y1="120" x2="200" y2="120" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="197.9" y1="75" x2="189.3" y2="80" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="165" y1="42.1" x2="160" y2="50.7" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="120" y1="30" x2="120" y2="40" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="75" y1="42.1" x2="80" y2="50.7" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="42.1" y1="75" x2="50.7" y2="80" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="30" y1="120" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<text x="212" y="135" font-size="9" fill="#0f1f3d">0°</text>' +
        '<text x="108" y="24" font-size="9" fill="#0f1f3d">90°</text>' +
        '<text x="14" y="135" font-size="9" fill="#0f1f3d">180°</text>' +
        '<line x1="120" y1="120" x2="158" y2="38.4" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M150,120 A30,30 0 0 0 132.7,92.8" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="150" y="103" font-size="12" font-weight="700" fill="#ea580c">65°</text>' +
        '<circle cx="120" cy="120" r="3" fill="#2563eb"/>' +
        '<text x="120" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">vertex</text>' +
        '<text x="70" y="112" font-size="10" font-weight="700" fill="#16a34a">baseline</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ANGLES ON A STRAIGHT LINE AND AT A POINT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-straight-line-point',
      title: 'Angles on a Straight Line and at a Point',
      icon: '↔',
      explanation:
        lookingAhead(
          'calculating unknown angles in degrees',
          'Finding a missing angle by adding and subtracting degree values (e.g. 180° − 65°) is Grade 7+ algebra-style reasoning. In Grade 6 the CAPS-aligned version of this idea is informal: knowing that angles along a straight line together make a straight angle, and angles that meet at a point together make a full revolution — without solving for an exact missing number of degrees.'
        ) +
        `<p style="margin-bottom:16px;">Angles on a straight line add up to ${or('180°')}. Angles around a point add up to ${or('360°')}. We use these facts to find ${re('unknown angles')} when some ${bl('known angles')} are already given.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known angles')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown angle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sum')}</span>` +
        `</div>` +

        // ── Two key facts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two key facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Angles on a straight line</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">All angles that lie on one side of a straight line share a ${or('sum of 180°')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">${bl('a')} + ${bl('b')} + ${re('x')} = ${or('180°')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Angles around a point</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">All angles that meet at one point form a full revolution — their ${or('sum is 360°')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">${bl('a')} + ${bl('b')} + ${bl('c')} + ${re('y')} = ${or('360°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify whether the angles are on a straight line (${or('sum = 180°')}) or around a point (${or('sum = 360°')}).<br><strong>Step 2</strong> — Add the ${bl('known angles')} together.<br><strong>Step 3</strong> — Subtract from the ${or('sum')} to find the ${re('unknown angle')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two angles on a straight line are 70° and x. Find x.',
          answer: `${re('x')} = ${re('110°')}`,
          steps: [
            `Angles on a straight line add up to ${or('180°')}.`,
            `Write the equation: ${bl('70°')} + ${re('x')} = ${or('180°')}`,
            `Subtract the ${bl('known angle')}: ${re('x')} = ${or('180°')} − ${bl('70°')}`,
            `<strong>Answer:</strong> ${re('x')} = ${re('110°')} ✓`,
          ],
        },
        {
          question: 'Three angles around a point are 120°, 95° and y. Find y.',
          answer: `${re('y')} = ${re('145°')}`,
          steps: [
            `Angles around a point add up to ${or('360°')}.`,
            `Write the equation: ${bl('120°')} + ${bl('95°')} + ${re('y')} = ${or('360°')}`,
            `Add the ${bl('known angles')}: ${bl('120 + 95')} = ${bl('215°')}`,
            `Subtract from ${or('360°')}: ${re('y')} = ${or('360°')} − ${bl('215°')}`,
            `<strong>Answer:</strong> ${re('y')} = ${re('145°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — equal angles on a straight line ───────────────────────
        {
          difficulty: 'Medium',
          question: 'An angle and its neighbour on a straight line are equal. What size is each angle?',
          answer: '90',
          checkMode: 'auto',
          correctAnswer: '90',
          explanation: 'Angles on a straight line add up to 180°. If both angles are equal:\neach angle = 180° ÷ 2 = 90°.\nBoth angles are right angles.',
        },

        // ── Q8 Hard — four angles at a point ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Four angles meet at a point — 80°, 90°, 70° and z. Find z.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Angles around a point add up to 360°.\nz = 360° − 80° − 90° − 70°\nz = 360° − 240°\nz = 120°',
        },

        // ── Q9 Hard — classify and explain a reflex angle ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato measures an angle as 200°. Classify it and explain.',
          answer: 'Reflex — it is between 180° and 360°. An angle greater than 180° and less than 360° is a reflex angle.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the angle sum on a straight line 180 degrees and around a point 360 degrees to find unknown angles" />',

      diagramPlaceholder:
        'Two diagrams side by side — angles a, b and x on a straight line summing to 180°, and angles a, b, c and y around a point summing to 360°, with known angles in blue and the unknown angle in red.',

      diagramSvg:
        '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="110" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Angles on a straight line</text>' +
        '<line x1="40" y1="110" x2="180" y2="110" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="110" y1="110" x2="65" y2="56.4" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="110" y1="110" x2="145" y2="49.4" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="110" cy="110" r="3" fill="#0f1f3d"/>' +
        '<text x="80" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">a</text>' +
        '<text x="107" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">b</text>' +
        '<text x="140" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">x</text>' +
        '<text x="110" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a + b + x = 180°</text>' +
        '<text x="320" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Angles around a point</text>' +
        '<line x1="320" y1="80" x2="320" y2="30" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="320" y1="80" x2="369.2" y2="71.3" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="320" y1="80" x2="320" y2="130" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="320" y1="80" x2="270" y2="80" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="320" cy="80" r="3" fill="#0f1f3d"/>' +
        '<text x="336" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">a</text>' +
        '<text x="339" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">b</text>' +
        '<text x="302" y="101" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">c</text>' +
        '<text x="302" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">y</text>' +
        '<text x="320" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a + b + c + y = 360°</text>' +
        '</svg>',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! You have mastered angles.' },
    { minScore: 7, message: 'Great work!' },
    { minScore: 5, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-4 Classifying angle types | 5-8 Protractor scales | 9-13
    // Angles on a straight line (180°) | 14-17 Angles around a point (360°) |
    // 18-19 Multi-step mixed review capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Classify a 72° angle.', checkMode: 'auto', correctAnswer: 'acute', correctAnswers: ['acute', 'acute angle'], explanation: '72° is greater than 0° and less than 90°, so it is an acute angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="102" y2="45" stroke="#0f1f3d" stroke-width="2"/><path d="M 80 140 A 40 40 0 0 0 62 105" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="118" font-size="14" font-weight="700" fill="#2563eb">72°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Thabo says a 130° angle is acute because "it still looks pointy". Is he correct?', checkMode: 'self', answer: 'No — 130° is greater than 90° and less than 180°, so it is an obtuse angle, not acute. Acute angles must be less than 90°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="8" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 80 140 A 40 40 0 0 0 28.8 101.6" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="105" font-size="14" font-weight="700" fill="#2563eb">130°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Put these three angles in order from smallest to largest: a right angle, a 60° angle, and an obtuse angle of 140°.', checkMode: 'auto', correctAnswer: '60,90,140', correctAnswers: ['60,90,140', '60°,90°,140°', '60, 90, 140'], explanation: 'The 60° angle is smallest, the right angle is exactly 90°, and 140° (obtuse) is the largest. Order: 60° < 90° < 140°.' },
        { difficulty: 'Easy-Medium', question: 'What is the smallest possible whole-degree measurement for an obtuse angle?', checkMode: 'auto', correctAnswer: '91', correctAnswers: ['91', '91°'], explanation: 'An obtuse angle must be greater than 90°. The smallest whole number greater than 90 is 91, so 91° is the smallest whole-degree obtuse angle.' },
        { difficulty: 'Easy-Medium', question: 'A door is opened so that it makes a 40° angle with the door frame. Classify this angle, then state how many more degrees it would need to become a right angle.', checkMode: 'auto', correctAnswer: 'acute,50', correctAnswers: ['acute,50', 'acute, 50°', 'acute50'], explanation: '40° is less than 90°, so it is acute. To reach a right angle (90°), it needs 90° − 40° = 50° more.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="140" x2="150" y2="17" stroke="#0f1f3d" stroke-width="2"/><path d="M 90 140 A 50 50 0 0 0 71 100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="98" y="118" font-size="14" font-weight="700" fill="#2563eb">40°</text><circle cx="40" cy="140" r="2.5" fill="#0f1f3d"/><text x="30" y="160" font-size="11" fill="#374151">door frame</text></svg>' },
        { difficulty: 'Medium', question: 'A protractor\'s baseline is lined up with one arm of an angle at 0° on the inner scale. The other arm crosses the inner scale at 72°. What is the angle?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72°'], explanation: 'Since the baseline started at 0° on the inner scale, read the measurement directly from the inner scale where the other arm crosses: 72°.' },
        { difficulty: 'Medium', question: 'Zanele lines up the baseline at 0° on the inner scale but then reads the outer scale, getting 105°. If the inner and outer scale readings for this angle add up to 180°, what is the correct angle?', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°'], explanation: 'The two scales are supplementary (they add up to 180°). Zanele read the wrong scale, so the correct angle is 180° − 105° = 75°.' },
        { difficulty: 'Medium', question: 'True or false: on a protractor, the reading on the inner scale and the reading on the outer scale for the same arm always add up to 180°.', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'This is true. The inner and outer scales run in opposite directions around the same semicircle, so their readings at any point always sum to 180°.' },
        { difficulty: 'Medium', question: 'Karabo measures the opening angle of a book by placing the protractor\'s centre on the spine. She reads 158° from the correct scale. What angle does the open book make?', checkMode: 'auto', correctAnswer: '158', correctAnswers: ['158', '158°'], explanation: 'Since Karabo read directly from the correct scale (the one that started at 0° on the baseline arm), the angle is simply the reading shown: 158°.' },
        { difficulty: 'Medium', question: 'Two angles lie on a straight line. One is 62°. Find the other angle.', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118', '118°'], explanation: 'Angles on a straight line add up to 180°. The other angle = 180° − 62° = 118°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="150" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 130 93" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="148" y="105" font-size="14" font-weight="700" fill="#2563eb">62°</text><path d="M 65 130 A 40 40 0 0 1 130 93" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Three angles on a straight line measure 40°, 55° and x. Find x.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Angles on a straight line add up to 180°. x = 180° − 40° − 55° = 180° − 95° = 85°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="163" y2="27" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="60" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 130 A 38 38 0 0 0 124 97" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="140" y="112" font-size="13" font-weight="700" fill="#2563eb">40°</text><path d="M 76 130 A 38 38 0 0 1 96 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="58" y="112" font-size="13" font-weight="700" fill="#2563eb">55°</text><path d="M 118 96 A 38 38 0 0 1 122 96" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="108" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A signpost has two angles that meet on a straight line and are equal to each other. What size is each angle?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Angles on a straight line add up to 180°. If the two angles are equal, each is 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'A wheelchair ramp meets the ground so that the angle between the ramp and the ground is 35°. What is the angle between the ramp and an imaginary straight line continuing along the ground on the other side?', checkMode: 'auto', correctAnswer: '145', correctAnswers: ['145', '145°'], explanation: 'The ramp and the ground line form angles on a straight line, which add up to 180°. The other angle = 180° − 35° = 145°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="150" y1="140" x2="30" y2="45" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118 140 A 32 32 0 0 0 128 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="120" y="128" font-size="13" font-weight="700" fill="#2563eb">35°</text><path d="M 200 140 A 50 50 0 0 0 110.8 109.0" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="165" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="150" cy="140" r="2.5" fill="#0f1f3d"/><text x="155" y="155" font-size="11" fill="#374151">ground</text></svg>' },
        { difficulty: 'Medium', question: 'Given angles on a straight line are 90° and x, Lindiwe writes 360° − 90° = 270° for x. Explain her mistake and give the correct value.', checkMode: 'self', answer: 'Lindiwe used the wrong total. Angles on a straight line add up to 180°, not 360° (that rule is for angles around a point). The correct value is x = 180° − 90° = 90°.' },
        { difficulty: 'Medium-Hard', question: 'Three angles around a point measure 120°, 95° and y. Find y.', checkMode: 'auto', correctAnswer: '145', correctAnswers: ['145', '145°'], explanation: 'Angles around a point add up to 360°. y = 360° − 120° − 95° = 360° − 215° = 145°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="195" y2="115" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="50" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 133 105" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="70" font-size="13" font-weight="700" fill="#2563eb">120°</text><path d="M 133 105 A 30 30 0 0 1 82.0 74.1" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="118" font-size="13" font-weight="700" fill="#2563eb">95°</text><path d="M 78 62 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="72" y="72" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Four angles meet at a point: 90°, 85°, 70° and z. Find z.', checkMode: 'auto', correctAnswer: '115', correctAnswers: ['115', '115°'], explanation: 'Angles around a point add up to 360°. z = 360° − 90° − 85° − 70° = 360° − 245° = 115°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="200" y2="85" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="30" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="45" y2="140" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 85 A 30 30 0 0 0 110 55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="122" y="72" font-size="12" font-weight="700" fill="#2563eb">90°</text><path d="M 110 55 A 30 30 0 0 0 57 68" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="70" y="55" font-size="12" font-weight="700" fill="#2563eb">85°</text><path d="M 57 68 A 30 30 0 0 0 68 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="95" font-size="12" font-weight="700" fill="#2563eb">70°</text><path d="M 87.1 104.4 A 30 30 0 0 0 140 85" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="95" y="118" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Four equal angles meet at a point. What size is each angle, and what type of angle is this?', checkMode: 'auto', correctAnswer: '90,right', correctAnswers: ['90,right', '90° right angle', '90right'], explanation: 'Angles around a point add up to 360°. Each angle = 360° ÷ 4 = 90°, which is a right angle.' },
        { difficulty: 'Medium-Hard', question: 'A bicycle wheel has 6 spokes spaced evenly, splitting the space around the centre into 6 equal angles. What is the size of each angle?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60°'], explanation: 'Angles around a point add up to 360°. With 6 equal angles, each is 360° ÷ 6 = 60°.' },
        { difficulty: 'Hard', question: 'Two angles on a straight line are 48° and x. Find x, then classify it.', checkMode: 'auto', correctAnswer: '132,obtuse', correctAnswers: ['132,obtuse', '132° obtuse', '132obtuse'], explanation: 'Angles on a straight line add up to 180°. x = 180° − 48° = 132°. Since 132° is between 90° and 180°, it is an obtuse angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="130" x2="205" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="150" y1="130" x2="115" y2="22" stroke="#0f1f3d" stroke-width="2"/><path d="M 118 130 A 32 32 0 0 0 129 100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="120" y="115" font-size="13" font-weight="700" fill="#2563eb">48°</text><path d="M 205 130 A 55 55 0 0 0 133.0 77.7" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="172" y="105" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="150" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Hard', question: 'A folding table leg forms two angles where it meets the tabletop: the angle on one side is 105°. Sindiso says the angle on the other side must also be 105° "because folding legs are symmetrical". Is Sindiso correct? Find the true angle and explain.', checkMode: 'self', answer: 'No — the two angles are on a straight line (the tabletop edge), so they add up to 180°, not stay equal. The other angle = 180° − 105° = 75°. Sindiso wrongly assumed symmetry instead of using the straight-line angle rule.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="210" y2="45" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="45" x2="150" y2="150" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 45 A 32 32 0 0 1 128 74" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="70" font-size="13" font-weight="700" fill="#2563eb">105°</text><path d="M 78 45 A 32 32 0 0 0 122 73" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="80" y="68" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="45" r="2.5" fill="#0f1f3d"/><text x="160" y="40" font-size="11" fill="#374151">tabletop</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered classifying angles, using a protractor, and applying the straight-line and point angle rules.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Classify a 168° angle.', checkMode: 'auto', correctAnswer: 'obtuse', correctAnswers: ['obtuse', 'obtuse angle'], explanation: '168° is greater than 90° and less than 180°, so it is an obtuse angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="130" x2="205" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="130" x2="45" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 100 130 A 70 70 0 0 0 40.9 60.8" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="98" font-size="14" font-weight="700" fill="#2563eb">168°</text><circle cx="30" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Amahle says a 360° angle is a reflex angle "because it is a really big turn". Is she correct?', checkMode: 'self', answer: 'No — 360° is a full revolution, not a reflex angle. Reflex angles are greater than 180° but less than 360°; 360° is its own category.' },
        { difficulty: 'Easy', question: 'Put these three angles in order from largest to smallest: an 88° angle, a straight angle, and a 250° angle.', checkMode: 'auto', correctAnswer: '250,180,88', correctAnswers: ['250,180,88', '250°,180°,88°', '250, 180, 88'], explanation: 'A straight angle is 180°. Ordering largest to smallest: 250° > 180° > 88°.' },
        { difficulty: 'Easy-Medium', question: 'What is the largest possible whole-degree measurement for an acute angle?', checkMode: 'auto', correctAnswer: '89', correctAnswers: ['89', '89°'], explanation: 'An acute angle must be less than 90°. The largest whole number less than 90 is 89, so 89° is the largest whole-degree acute angle.' },
        { difficulty: 'Easy-Medium', question: 'A pair of scissors is opened so the blades make a 110° angle. Classify this angle, then state how many more degrees it would need to become a straight angle.', checkMode: 'auto', correctAnswer: 'obtuse,70', correctAnswers: ['obtuse,70', 'obtuse, 70°', 'obtuse70'], explanation: '110° is between 90° and 180°, so it is obtuse. To reach a straight angle (180°), it needs 180° − 110° = 70° more.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="140" x2="120" y2="18" stroke="#0f1f3d" stroke-width="2"/><path d="M 95 140 A 65 65 0 0 0 68.6 87.7" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="72" y="105" font-size="14" font-weight="700" fill="#2563eb">110°</text><circle cx="30" cy="140" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A protractor\'s baseline is lined up with one arm of an angle at 0° on the outer scale. The other arm crosses the outer scale at 47°. What is the angle?', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47', '47°'], explanation: 'Since the baseline started at 0° on the outer scale, read the measurement directly from the outer scale where the other arm crosses: 47°.' },
        { difficulty: 'Medium', question: 'Bongani lines up the baseline at 0° on the outer scale but then reads the inner scale, getting 158°. If the inner and outer scale readings for this angle add up to 180°, what is the correct angle?', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22°'], explanation: 'The two scales are supplementary. Bongani read the wrong scale, so the correct angle is 180° − 158° = 22°.' },
        { difficulty: 'Medium', question: 'Why does a protractor need two number scales (an inner one and an outer one) instead of just one?', checkMode: 'self', answer: 'Because the baseline arm of an angle can point in either direction (left or right), the two scales let you start counting from 0° from whichever side the arm lies on, always reading the angle correctly without having to flip the protractor around.' },
        { difficulty: 'Medium', question: 'Sipho measures the opening angle of a laptop screen, placing the protractor\'s centre on the hinge. He reads 96° from the correct scale. What angle does the open laptop make?', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96°'], explanation: 'Since Sipho read directly from the correct scale, the angle is simply the reading shown: 96°.' },
        { difficulty: 'Medium', question: 'Two angles lie on a straight line. One is 48°. Find the other angle.', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132°'], explanation: 'Angles on a straight line add up to 180°. The other angle = 180° − 48° = 132°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="145" y2="25" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 133 94" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="148" y="108" font-size="14" font-weight="700" fill="#2563eb">48°</text><path d="M 65 130 A 40 40 0 0 1 133 94" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Three angles on a straight line measure 30°, 65° and x. Find x.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Angles on a straight line add up to 180°. x = 180° − 30° − 65° = 180° − 95° = 85°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="170" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="60" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 143 130 A 38 38 0 0 0 133 101" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="115" font-size="13" font-weight="700" fill="#2563eb">30°</text><path d="M 76 130 A 38 38 0 0 1 96 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="56" y="112" font-size="13" font-weight="700" fill="#2563eb">65°</text><path d="M 121 100 A 38 38 0 0 1 128 101" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="112" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A fence post meets the ground, forming two angles on a straight line that are equal to each other. What size is each angle?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Angles on a straight line add up to 180°. If the two angles are equal, each is 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'A skateboard ramp meets the flat ground so that the angle between the ramp and the ground is 128°. What is the angle between the ramp and an imaginary straight line continuing along the ground on the other side?', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°'], explanation: 'The ramp and the ground line form angles on a straight line, which add up to 180°. The other angle = 180° − 128° = 52°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="140" x2="185" y2="80" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 140 A 32 32 0 0 1 130 116" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="128" y="130" font-size="14" font-weight="700" fill="#ea580c">?</text><path d="M 78 140 A 32 32 0 0 0 122 116" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="80" y="128" font-size="13" font-weight="700" fill="#2563eb">128°</text><circle cx="110" cy="140" r="2.5" fill="#0f1f3d"/><text x="10" y="155" font-size="11" fill="#374151">ground</text></svg>' },
        { difficulty: 'Medium', question: 'Given angles on a straight line are 75° and x, Musa forgets to write down the 75° and just writes x = 180°. Explain his mistake and give the correct value.', checkMode: 'self', answer: 'Musa forgot to subtract the known angle before finding the unknown one — he treated x as if it were the only angle on the line. The correct method is x = 180° − 75° = 105°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="128" y2="20" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 130 A 40 40 0 0 0 133 92" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="140" y="105" font-size="14" font-weight="700" fill="#2563eb">75°</text><path d="M 60 130 A 40 40 0 0 1 130 91" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="65" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Three angles around a point measure 150°, 80° and y. Find y.', checkMode: 'auto', correctAnswer: '130', correctAnswers: ['130', '130°'], explanation: 'Angles around a point add up to 360°. y = 360° − 150° − 80° = 360° − 230° = 130°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="205" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="45" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 139 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="72" font-size="13" font-weight="700" fill="#2563eb">150°</text><path d="M 139 90 A 30 30 0 0 1 82.6 72.8" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="112" font-size="13" font-weight="700" fill="#2563eb">80°</text><path d="M 82 61 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="70" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Five angles meet at a point: 60°, 55°, 70°, 85° and w. Find w.', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Angles around a point add up to 360°. w = 360° − 60° − 55° − 70° − 85° = 360° − 270° = 90°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="90" x2="205" y2="90" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="180" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="35" y2="35" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="35" y2="120" stroke="#0f1f3d" stroke-width="2"/><path d="M 138 90 A 28 28 0 0 0 130 68" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="76" font-size="11" font-weight="700" fill="#2563eb">60°</text><path d="M 130 68 A 28 28 0 0 0 110 62" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="105" y="55" font-size="11" font-weight="700" fill="#2563eb">55°</text><path d="M 110 62 A 28 28 0 0 0 79 71" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="60" font-size="11" font-weight="700" fill="#2563eb">70°</text><path d="M 79 71 A 28 28 0 0 0 79 109" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="60" y="95" font-size="14" font-weight="700" fill="#ea580c">?</text><path d="M 84.0 100.4 A 28 28 0 0 0 138 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="95" y="120" font-size="11" font-weight="700" fill="#2563eb">85°</text><circle cx="110" cy="90" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Three equal angles meet at a point. What size is each angle?', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120°'], explanation: 'Angles around a point add up to 360°. Each angle = 360° ÷ 3 = 120°.' },
        { difficulty: 'Medium-Hard', question: 'A roundabout has 5 roads leading away from it, spaced evenly, splitting the space around its centre into 5 equal angles. What is the size of each angle?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72°'], explanation: 'Angles around a point add up to 360°. With 5 equal angles, each is 360° ÷ 5 = 72°.' },
        { difficulty: 'Hard', question: 'Compare these two situations: (a) two angles meeting on a straight line, and (b) three angles meeting at a single point with no straight line involved. Which sum rule applies to each?', checkMode: 'self', answer: '(a) Angles on a straight line always add up to 180°. (b) Angles meeting at a point (with no straight line) add up to 360°, since they form a complete turn around that point.' },
        { difficulty: 'Hard', question: 'Three angles on a straight line are 25°, 65° and x. Find x, then classify it.', checkMode: 'auto', correctAnswer: '90,right', correctAnswers: ['90,right', '90° right angle', '90right'], explanation: 'Angles on a straight line add up to 180°. x = 180° − 25° − 65° = 180° − 90° = 90°. This is exactly 90°, so it is a right angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="130" x2="210" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="178" y2="72" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="70" y2="27" stroke="#0f1f3d" stroke-width="2"/><path d="M 148 130 A 38 38 0 0 0 133 104" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">25°</text><path d="M 82 130 A 38 38 0 0 1 100 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="112" font-size="13" font-weight="700" fill="#2563eb">65°</text><path d="M 122 100 A 38 38 0 0 1 128 104" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="112" y="80" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently classify angles, read a protractor, and apply both angle sum rules.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Classify a 205° angle.', checkMode: 'auto', correctAnswer: 'reflex', correctAnswers: ['reflex', 'reflex angle'], explanation: '205° is greater than 180° and less than 360°, so it is a reflex angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="90" x2="200" y2="90" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="90" x2="75" y2="165" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 90 A 30 30 0 1 1 97.3 117.2" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="150" font-size="14" font-weight="700" fill="#2563eb">205°</text><circle cx="110" cy="90" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Easy', question: 'Palesa says a 90° angle "must be an acute angle because it\'s not that big". Is she correct?', checkMode: 'self', answer: 'No — 90° is exactly a right angle, not acute. An acute angle must be strictly less than 90°, so 90° itself does not count as acute.' },
        { difficulty: 'Easy', question: 'A clock hand sweep of 15°, a book opened flat at 180°, and a fan blade gap of 300° are three angles. Which one is a straight angle, and which one is reflex?', checkMode: 'auto', correctAnswer: '180straight,300reflex', correctAnswers: ['180straight,300reflex', '180° straight, 300° reflex', 'straight180reflex300'], explanation: 'The 180° book angle is a straight angle (exactly 180°). The 300° fan blade gap is a reflex angle (between 180° and 360°). The 15° clock sweep is acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="60" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="10" y1="45" x2="58" y2="35" stroke="#0f1f3d" stroke-width="2"/><text x="8" y="65" font-size="12" font-weight="700" fill="#2563eb">15°</text><line x1="90" y1="45" x2="150" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="90" y1="45" x2="30" y2="45" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="65" font-size="12" font-weight="700" fill="#2563eb">180°</text><line x1="175" y1="95" x2="215" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="95" x2="175" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 205 95 A 30 30 0 1 1 175 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="140" font-size="12" font-weight="700" fill="#2563eb">300°</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'What is the largest possible whole-degree measurement for a reflex angle?', checkMode: 'auto', correctAnswer: '359', correctAnswers: ['359', '359°'], explanation: 'A reflex angle must be less than 360°. The largest whole number less than 360 is 359, so 359° is the largest whole-degree reflex angle.' },
        { difficulty: 'Easy-Medium', question: 'A reclining chair is tilted back so the backrest makes a 158° angle with the seat. Classify this angle, then state how many more degrees it would need to become a straight angle.', checkMode: 'auto', correctAnswer: 'obtuse,22', correctAnswers: ['obtuse,22', 'obtuse, 22°', 'obtuse22'], explanation: '158° is between 90° and 180°, so it is obtuse. To reach a straight angle (180°), it needs 180° − 158° = 22° more.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="140" x2="52" y2="32" stroke="#0f1f3d" stroke-width="2"/><path d="M 100 140 A 70 70 0 0 0 44.0 71.4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="100" font-size="14" font-weight="700" fill="#2563eb">158°</text><circle cx="30" cy="140" r="2.5" fill="#0f1f3d"/><text x="120" y="155" font-size="11" fill="#374151">seat</text></svg>' },
        { difficulty: 'Medium', question: 'Nomvula lines up the baseline of a protractor with one arm at 0° on the inner scale, and the other arm crosses the inner scale at 38°. What is the angle she is measuring?', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°'], explanation: 'Since the baseline started at 0° on the inner scale, read the measurement directly from the inner scale where the other arm crosses: 38°.' },
        { difficulty: 'Medium', question: 'Tumi starts her baseline at 0° on the outer scale, but reads the angle off the inner scale by mistake, getting a value of 40°. If the two scale readings for this angle add up to 180°, what should the correct reading be?', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', '140°'], explanation: 'The two scales are supplementary. Tumi read the wrong scale, so the correct angle is 180° − 40° = 140°.' },
        { difficulty: 'Medium', question: 'A student says: "It does not matter which scale I read from, as long as I read a number." Explain why this is not good advice.', checkMode: 'self', answer: 'It matters a lot — you must read the angle from the same scale you started counting 0° from on the baseline arm. Reading from the other scale gives the supplementary angle (180° minus the true angle), which is usually the wrong answer.' },
        { difficulty: 'Medium', question: 'Aiden measures the angle a book is opened to, placing the protractor\'s centre on the spine. He reads 132° from the correct scale. What angle does the open book make?', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132°'], explanation: 'Since Aiden read directly from the correct scale, the angle is simply the reading shown: 132°.' },
        { difficulty: 'Medium', question: 'Two angles lie on a straight line. One is 97°. Find the other angle.', checkMode: 'auto', correctAnswer: '83', correctAnswers: ['83', '83°'], explanation: 'Angles on a straight line add up to 180°. The other angle = 180° − 97° = 83°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="105" y1="130" x2="97" y2="20" stroke="#0f1f3d" stroke-width="2"/><path d="M 145 130 A 40 40 0 0 0 106 90" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="118" y="105" font-size="14" font-weight="700" fill="#2563eb">97°</text><path d="M 65 130 A 40 40 0 0 1 104 90" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="72" y="100" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="105" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'Four angles on a straight line measure 20°, 40°, 55° and x. Find x.', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: 'Angles on a straight line add up to 180°. x = 180° − 20° − 40° − 55° = 180° − 115° = 65°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="130" x2="212" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="185" y2="112" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="168" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="130" x2="55" y2="35" stroke="#0f1f3d" stroke-width="2"/><path d="M 148 130 A 30 30 0 0 0 143 116" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="150" y="122" font-size="11" font-weight="700" fill="#2563eb">20°</text><path d="M 130 116 A 35 35 0 0 0 116 89" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="132" y="98" font-size="11" font-weight="700" fill="#2563eb">40°</text><path d="M 105 96 A 40 40 0 0 1 121 89" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="105" y="80" font-size="13" font-weight="700" fill="#ea580c">?</text><path d="M 75 129 A 45 45 0 0 1 100 92" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="60" y="105" font-size="11" font-weight="700" fill="#2563eb">55°</text><circle cx="100" cy="130" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'A ladder leans against a wall, forming two angles with the ground on a straight line that are equal to each other. What size is each angle?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°'], explanation: 'Angles on a straight line add up to 180°. If the two angles are equal, each is 180° ÷ 2 = 90°.' },
        { difficulty: 'Medium', question: 'A garden path meets a straight garden wall so that the angle between the path and the wall on one side is 112°. What is the angle on the other side of the path, along the same wall?', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68°'], explanation: 'The path and the wall form angles on a straight line, which add up to 180°. The other angle = 180° − 112° = 68°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="205" y2="140" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="140" x2="165" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 142 140 A 32 32 0 0 1 128 111" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="128" y="126" font-size="14" font-weight="700" fill="#ea580c">?</text><path d="M 78 140 A 32 32 0 0 0 122 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="82" y="124" font-size="13" font-weight="700" fill="#2563eb">112°</text><circle cx="110" cy="140" r="2.5" fill="#0f1f3d"/><text x="10" y="155" font-size="11" fill="#374151">wall</text></svg>' },
        { difficulty: 'Medium', question: 'Given angles on a straight line are 55°, 60° and x, Refilwe writes x = 360° − 55° − 60° = 245°. Explain her mistake and give the correct value.', checkMode: 'self', answer: 'Refilwe used the wrong total — she used 360°, which is the sum for angles around a point, not on a straight line. Angles on a straight line add up to 180°, so the correct value is x = 180° − 55° − 60° = 65°.' },
        { difficulty: 'Medium-Hard', question: 'Four angles meet at a point: 95°, 80°, 60° and t. Find t.', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125°'], explanation: 'Angles around a point add up to 360°. t = 360° − 95° − 80° − 60° = 360° − 235° = 125°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="200" y2="85" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="25" y2="55" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 85 A 30 30 0 0 0 110 55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="122" y="72" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 110 55 A 30 30 0 0 0 60 71" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="55" font-size="12" font-weight="700" fill="#2563eb">80°</text><path d="M 60 71 A 30 30 0 0 0 87 111" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="42" y="98" font-size="12" font-weight="700" fill="#2563eb">60°</text><path d="M 87 111 A 30 30 0 0 0 140 85" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="108" y="120" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Six angles meet at a point: 40°, 55°, 60°, 65°, 70° and p. Find p.', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70°'], explanation: 'Angles around a point add up to 360°. p = 360° − 40° − 55° − 60° − 65° − 70° = 360° − 290° = 70°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="88" x2="205" y2="88" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="188" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="140" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="55" y2="18" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="20" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="88" x2="30" y2="140" stroke="#0f1f3d" stroke-width="2"/><path d="M 135 88 A 25 25 0 0 0 129 70" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="128" y="76" font-size="10" font-weight="700" fill="#2563eb">40°</text><path d="M 129 70 A 25 25 0 0 0 116 65" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="58" font-size="10" font-weight="700" fill="#2563eb">55°</text><path d="M 116 65 A 25 25 0 0 0 91 69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="85" y="55" font-size="10" font-weight="700" fill="#2563eb">60°</text><path d="M 91 69 A 25 25 0 0 0 71 84" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="65" font-size="10" font-weight="700" fill="#2563eb">65°</text><path d="M 71 84 A 25 25 0 0 0 78 108" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="105" font-size="13" font-weight="700" fill="#ea580c">?</text><path d="M 89.0 101.6 A 25 25 0 0 0 135 88" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="120" font-size="10" font-weight="700" fill="#2563eb">70°</text><circle cx="110" cy="88" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Two equal angles meet at a point, together forming a full revolution. What size is each angle, and what type of angle is this?', checkMode: 'auto', correctAnswer: '180,straight', correctAnswers: ['180,straight', '180° straight angle', '180straight'], explanation: 'Angles around a point add up to 360°. Each angle = 360° ÷ 2 = 180°, which is a straight angle.' },
        { difficulty: 'Medium-Hard', question: 'A pie chart is split into 8 equal slices around its centre. What is the angle of each slice?', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45°'], explanation: 'Angles around a point add up to 360°. With 8 equal slices, each angle is 360° ÷ 8 = 45°.' },
        { difficulty: 'Hard', question: 'Compare these two situations: (a) three angles meeting at a point where none of them lie along a straight line, and (b) two angles that together form a straight line. Which sum rule applies to each, and why?', checkMode: 'self', answer: '(a) The three angles meeting at a point add up to 360°, because together they make one full turn. (b) The two angles on the straight line add up to 180°, because together they make a half turn along one side of the line.' },
        { difficulty: 'Hard', question: 'Three angles meet at a point around the base of a garden umbrella pole: 90°, 125° and the angle formed by the path, x. Find x, then classify it.', checkMode: 'auto', correctAnswer: '145,obtuse', correctAnswers: ['145,obtuse', '145° obtuse', '145obtuse'], explanation: 'Angles around a point add up to 360°. x = 360° − 90° − 125° = 360° − 215° = 145°. Since 145° is between 90° and 180°, it is an obtuse angle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="85" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="195" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="85" x2="20" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 110 55 A 30 30 0 0 1 137 96" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="72" font-size="13" font-weight="700" fill="#2563eb">90°</text><path d="M 137 96 A 30 30 0 0 1 81.5 75.5" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="115" font-size="13" font-weight="700" fill="#2563eb">125°</text><path d="M 81 65 A 30 30 0 0 1 110 55" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="75" y="70" font-size="14" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply angle classification, protractor reasoning, and both sum rules to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
