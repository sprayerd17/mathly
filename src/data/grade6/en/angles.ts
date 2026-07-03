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
        `<p style="margin-bottom:16px;">An angle is formed where two lines meet at a point. We classify angles by their size. An ${bl('acute')} angle is less than 90°. A ${gr('right')} angle is exactly 90°. An ${or('obtuse')} angle is between 90° and 180°. A straight angle is exactly 180°. A ${re('reflex')} angle is between 180° and 360°. A revolution is a full turn of 360°.</p>` +

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
        '<DiagramPlaceholder label="Diagram showing all six angle types side by side with their degree ranges and colour coded labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MEASURING ANGLES WITH A PROTRACTOR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-angles-protractor',
      title: 'Measuring Angles with a Protractor',
      icon: '📐',
      explanation:
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
        '<DiagramPlaceholder label="Diagram of a protractor showing the vertex centre point the baseline and the two scales with the correct reading highlighted in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ANGLES ON A STRAIGHT LINE AND AT A POINT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-straight-line-point',
      title: 'Angles on a Straight Line and at a Point',
      icon: '↔',
      explanation:
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
        '<DiagramPlaceholder label="Two diagrams side by side showing angles on a straight line summing to 180 degrees and angles around a point summing to 360 degrees with known angles blue and unknown angle red" />',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! You have mastered angles.' },
    { minScore: 7, message: 'Great work!' },
    { minScore: 5, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
