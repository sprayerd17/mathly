import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of straight lines roles) ───────────────────────
// given angle      → blue   (#2563eb)
// unknown angle    → red    (#dc2626)
// vertically opp.  → green  (#16a34a)
// adjacent angles  → orange (#ea580c)
// angle rel.       → green  (#16a34a)
// parallel lines   → blue   (#2563eb)
// transversal      → red    (#dc2626)
// corresponding    → green  (#16a34a)
// co-interior      → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of Straight Lines',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — ANGLES FORMED BY PERPENDICULAR AND INTERSECTING LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-perpendicular-intersecting',
      title: 'Angles Formed by Perpendicular and Intersecting Lines',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">We revise and write clear descriptions of the relationships between angles formed when two lines intersect. <strong>Vertically opposite angles</strong> are equal. <strong>Adjacent angles on a straight line</strong> are supplementary (add to 180°). <strong>Perpendicular lines</strong> form four 90° angles.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertically opposite')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('adjacent angles')}</span>` +
        `</div>` +

        // ── Key relationships ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key angle relationships</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vertically opposite angles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When two lines intersect, the angles directly across from each other are equal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Adjacent angles on a straight line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Angles that share a common side and lie on a straight line are supplementary — they add up to 180°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Perpendicular lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two lines are perpendicular if they meet at right angles. They form four equal angles of 90°.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">When two lines intersect they form <strong>four angles</strong>. These four angles always come in two pairs: two pairs of vertically opposite angles. The angles in each pair are equal, and any two adjacent angles are supplementary.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two lines intersect, forming an angle of 110°. Find the vertically opposite angle and the two adjacent angles.',
          answer: `Vertically opposite angle: ${gr('110°')}. Adjacent angles: ${or('70°')} each.`,
          steps: [
            `The ${bl('given angle')} is ${bl('110°')}.`,
            `${gr('Vertically opposite angle')} = ${bl('110°')} (vertically opposite angles are equal).`,
            `${or('Adjacent angles')} = 180° − ${bl('110°')} = ${or('70°')} each (adjacent angles on a straight line are supplementary).`,
            `<strong>Check:</strong> 110° + 70° = 180° ✓ &nbsp; and &nbsp; 110° + 70° + 110° + 70° = 360° ✓`,
            `<em>See the diagram below showing this intersection.</em>`,
          ],
        },
        {
          question: 'Sipho says perpendicular lines always form four equal angles. Is he correct?',
          answer: `Yes — perpendicular lines always form four equal ${gr('90°')} angles.`,
          steps: [
            `Perpendicular lines meet at right angles.`,
            `A right angle = ${gr('90°')}.`,
            `Four 90° angles are formed at the point of intersection, and they are all equal.`,
            `<strong>Conclusion:</strong> Sipho is correct — perpendicular lines always form four equal 90° angles. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two intersecting lines forming four angles, with one labelled 110° and the others to be calculated" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing angle relationships formed when two lines intersect, including vertically opposite and adjacent supplementary angles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ANGLES FORMED BY PARALLEL LINES CUT BY A TRANSVERSAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-parallel-lines-transversal',
      title: 'Angles Formed by Parallel Lines Cut by a Transversal',
      icon: '∥',
      explanation:
        `<p style="margin-bottom:16px;">We write clear descriptions of the angle relationships formed when a transversal cuts two parallel lines: <strong>corresponding angles</strong> are equal, <strong>alternate angles</strong> are equal, and <strong>co-interior angles</strong> are supplementary.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('parallel lines')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('transversal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('corresponding angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('co-interior angles')}</span>` +
        `</div>` +

        // ── Three angle relationships ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three angle relationships with parallel lines</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Corresponding angles (F-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Angles that are in the same position at each intersection where the transversal crosses the parallel lines. They are <strong>equal</strong>.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Alternate angles (Z-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Angles on opposite sides of the transversal, between the parallel lines. They are <strong>equal</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Co-interior angles (C-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Angles on the same side of the transversal, between the parallel lines. They are <strong>supplementary</strong> (add to 180°).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Memory tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">Look for the letter shapes: <strong>F</strong> for corresponding (equal), <strong>Z</strong> for alternate (equal), <strong>C</strong> or <strong>U</strong> for co-interior (supplementary — add to 180°).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two parallel lines are cut by a transversal. One alternate angle is 65°. Find the other alternate angle.',
          answer: `The other alternate angle is ${gr('65°')}.`,
          steps: [
            `Identify the relationship: the two angles are ${gr('alternate angles')} (Z-shape, between the parallel lines on opposite sides of the transversal).`,
            `Alternate angles are equal when lines are parallel.`,
            `Other alternate angle = ${gr('65°')}. ✓`,
            `<em>See the diagram below illustrating the transversal and parallel lines.</em>`,
          ],
        },
        {
          question: 'Lerato finds a co-interior angle of 100°. Find the other co-interior angle.',
          answer: `The other co-interior angle is ${or('80°')}.`,
          steps: [
            `Identify the relationship: the two angles are ${or('co-interior angles')} (C-shape, on the same side of the transversal between the parallel lines).`,
            `Co-interior angles are supplementary: they add up to 180°.`,
            `Other co-interior angle = 180° − ${or('100°')} = ${or('80°')}. ✓`,
            `<strong>Check:</strong> 100° + 80° = 180° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two parallel lines cut by a transversal, labelling corresponding, alternate, and co-interior angle pairs" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining corresponding, alternate and co-interior angles formed when a transversal cuts two parallel lines" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING GEOMETRIC PROBLEMS USING ANGLE RELATIONSHIPS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-geometric-problems-angle-relationships',
      title: 'Solving Geometric Problems Using Angle Relationships',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We solve geometric problems using the angle relationships from perpendicular lines, intersecting lines, and parallel lines cut by a transversal, often requiring multiple steps to find unknown angles.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given angles')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('angle relationships')}</span>` +
        `</div>` +

        // ── Problem-solving strategy ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Problem-solving strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Look at the diagram and identify what type of lines are present (parallel, intersecting, or perpendicular).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Name the relationship')} — State the angle relationship you will use (e.g. corresponding angles, co-interior angles).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Calculate')} — Set up and solve the equation to find the unknown angle.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always give a reason</p>` +
        `<p style="margin:0;color:#1e3a8a;">In formal geometry, always state the reason for each step in brackets. For example: x = 75° (corresponding angles; AB ∥ CD). This shows your understanding of which property you applied.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two parallel lines are cut by a transversal. One angle is 75° and is corresponding to angle x, while angle y is co-interior with x. Find x and y.',
          answer: `${re('x')} = ${bl('75°')}, &nbsp; ${re('y')} = ${or('105°')}`,
          steps: [
            `Find ${re('x')}: ${re('x')} and the ${bl('given 75°')} angle are ${gr('corresponding angles')}.`,
            `${gr('Corresponding angles are equal')} (parallel lines cut by a transversal).`,
            `∴ ${re('x')} = ${bl('75°')}`,
            `Find ${re('y')}: ${re('y')} and ${re('x')} are ${or('co-interior angles')}.`,
            `${or('Co-interior angles are supplementary')}: ${re('y')} + ${re('x')} = 180°`,
            `${re('y')} = 180° − ${bl('75°')} = ${or('105°')} ✓`,
          ],
        },
        {
          question: 'Thabo has two intersecting lines forming an angle of 48°. Find all four angles formed.',
          answer: `The four angles are ${bl('48°')}, ${or('132°')}, ${bl('48°')}, ${or('132°')}.`,
          steps: [
            `${bl('Given angle')} = ${bl('48°')}.`,
            `${bl('Vertically opposite angle')} = ${bl('48°')} (vertically opposite angles are equal).`,
            `${or('Adjacent angles')} = 180° − ${bl('48°')} = ${or('132°')} each (adjacent angles on a straight line are supplementary).`,
            `<strong>The four angles are:</strong> ${bl('48°')}, ${or('132°')}, ${bl('48°')}, ${or('132°')}.`,
            `<strong>Check:</strong> 48° + 132° + 48° + 132° = 360° ✓`,
          ],
        },
        {
          question: 'A transversal cuts two parallel lines. The alternate angle to x is 110°, and y is supplementary to x. Find x and y.',
          answer: `${re('x')} = ${bl('110°')}, &nbsp; ${re('y')} = ${or('70°')}`,
          steps: [
            `Find ${re('x')}: ${re('x')} and the ${bl('given 110°')} angle are ${gr('alternate angles')}.`,
            `${gr('Alternate angles are equal')} (parallel lines cut by a transversal).`,
            `∴ ${re('x')} = ${bl('110°')}`,
            `Find ${re('y')}: ${re('y')} and ${re('x')} are ${or('supplementary')}.`,
            `${re('y')} = 180° − ${re('x')} = 180° − ${bl('110°')} = ${or('70°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two parallel lines cut by a transversal showing angles x and y labelled, with given angles marked" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing multi-step geometric problem solving using corresponding, alternate and co-interior angle relationships" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two lines intersect forming an angle of 65°. Find the vertically opposite angle.',
      answer: '65°',
      checkMode: 'auto',
      correctAnswer: '65',
      correctAnswers: ['65', '65°'],
      explanation: 'Vertically opposite angles are equal. The vertically opposite angle is also 65°.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the two adjacent angles to a 65° angle on a straight line.',
      answer: '115°',
      checkMode: 'auto',
      correctAnswer: '115',
      correctAnswers: ['115', '115°'],
      explanation: 'Adjacent angles on a straight line are supplementary: 180° − 65° = 115°. Both adjacent angles are 115°.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says perpendicular lines form angles of different sizes. Is he correct? Explain.',
      answer: 'No — perpendicular lines always form four equal 90° angles.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two parallel lines are cut by a transversal. One corresponding angle is 80°. Find the other.',
      answer: '80°',
      checkMode: 'auto',
      correctAnswer: '80',
      correctAnswers: ['80', '80°'],
      explanation: 'Corresponding angles are equal when lines are parallel. The other corresponding angle is also 80°.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'An alternate angle is 55°. Find the other alternate angle.',
      answer: '55°',
      checkMode: 'auto',
      correctAnswer: '55',
      correctAnswers: ['55', '55°'],
      explanation: 'Alternate angles are equal when lines are parallel. The other alternate angle is also 55°.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato finds a co-interior angle of 95°. Find the other co-interior angle and explain the relationship used.',
      answer: '180° − 95° = 85°. Co-interior angles are supplementary, meaning they add up to 180°.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two intersecting lines form an angle of 38°. Find all four angles formed.',
      answer: '38°, 142°, 38°, 142°',
      checkMode: 'auto',
      correctAnswer: '38,142,38,142',
      correctAnswers: ['38°,142°,38°,142°', '38, 142, 38, 142', '38°, 142°, 38°, 142°', '38,142,38,142'],
      explanation: 'Vertically opposite angle = 38°. Adjacent angles = 180° − 38° = 142° each. The four angles are 38°, 142°, 38°, 142°.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A transversal cuts two parallel lines. One angle is 72° corresponding to angle x, and y is co-interior with x. Find x and y.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x =',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Corresponding angles are equal. x = 72°.',
        },
        {
          label: 'b) y =',
          correctAnswer: '108',
          correctAnswers: ['108', '108°'],
          explanation: 'Co-interior angles are supplementary: y = 180° − 72° = 108°.',
        },
      ],
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo says vertically opposite angles are always supplementary. Is he correct? Explain.',
      answer: 'No — vertically opposite angles are always equal, not supplementary.',
      checkMode: 'self',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two parallel lines are cut by a transversal. The alternate angle to x is 98°, and y is supplementary to x. Find x and y.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x =',
          correctAnswer: '98',
          correctAnswers: ['98', '98°'],
          explanation: 'Alternate angles are equal. x = 98°.',
        },
        {
          label: 'b) y =',
          correctAnswer: '82',
          correctAnswers: ['82', '82°'],
          explanation: 'Supplementary angles add to 180°: y = 180° − 98° = 82°.',
        },
      ],
    },

    // ── Q11 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Define corresponding angles.',
      answer: 'Angles that are in the same relative position at each intersection where a transversal crosses two parallel lines, and which are equal.',
      checkMode: 'self',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle has two intersecting lines forming a 105° angle. Find the smallest angle formed.',
      answer: '75°',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75°'],
      explanation: 'Adjacent angle = 180° − 105° = 75°. The smallest angle formed is 75°.',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A transversal creates a co-interior angle pair where one angle is three times the other. Find both angles.',
      answer: 'Let smaller angle = x, larger = 3x. x + 3x = 180. 4x = 180. x = 45°. Angles are 45° and 135°.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says alternate angles and co-interior angles are the same thing. Is he correct? Explain.',
      answer: 'No — alternate angles are equal to each other, while co-interior angles are supplementary (add to 180°). They are different relationships.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two parallel lines are cut by a transversal. Find all 8 angles formed if one angle is 63°.',
      answer: 'Angles alternate between 63° and 117° at each intersection following corresponding, alternate and co-interior angle rules — four angles of 63° and four angles of 117°.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered geometry of straight lines.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of angle relationships.' },
      { minPercent: 50, message: 'Good effort, review the angle relationships and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again and focus on the angle relationships.' },
    ],
  },
}
