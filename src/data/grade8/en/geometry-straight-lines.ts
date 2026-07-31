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
        'Two intersecting lines forming four angles, with one labelled 110° and the others calculated',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="30" y1="60" x2="190" y2="120" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="30" y1="120" x2="190" y2="60" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M 95,75 Q 110,68 125,75" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 95,105 Q 110,112 125,105" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M 90,80 Q 82,90 90,100" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M 130,80 Q 138,90 130,100" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="110" y="52" font-size="13" font-weight="700" text-anchor="middle" fill="#2563eb">110°</text>' +
        '<text x="110" y="145" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">110°</text>' +
        '<text x="50" y="94" font-size="13" font-weight="700" fill="#ea580c">70°</text>' +
        '<text x="150" y="94" font-size="13" font-weight="700" fill="#ea580c">70°</text>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing angle relationships formed when two lines intersect, including vertically opposite and adjacent supplementary angles',
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
        'Two parallel lines cut by a transversal, labelling corresponding, alternate, and co-interior angle pairs',

      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="20" y1="50" x2="200" y2="50" stroke="#2563eb" stroke-width="2.5"/>' +
        '<line x1="20" y1="130" x2="200" y2="130" stroke="#2563eb" stroke-width="2.5"/>' +
        '<polyline points="166,46 172,50 166,54" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<polyline points="166,126 172,130 166,134" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="30" y1="20" x2="190" y2="160" stroke="#dc2626" stroke-width="2.5"/>' +
        '<circle cx="64.3" cy="50" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="155.7" cy="130" r="2.5" fill="#0f1f3d"/>' +
        '<text x="64.3" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">a</text>' +
        '<text x="98" y="63" font-size="13" font-weight="700" fill="#2563eb">b</text>' +
        '<text x="42" y="78" font-size="13" font-weight="700" fill="#ea580c">c</text>' +
        '<text x="155.7" y="104" font-size="13" font-weight="700" text-anchor="middle" fill="#16a34a">a</text>' +
        '<text x="118" y="122" font-size="13" font-weight="700" fill="#2563eb">b</text>' +
        '<text x="118" y="145" font-size="13" font-weight="700" fill="#ea580c">c</text>' +
        '<text x="110" y="180" font-size="10" text-anchor="middle" fill="#6b7280">a = corresponding · b = alternate · c = co-interior</text>' +
        '</svg>',

      videoPlaceholder:
        'Short video explaining corresponding, alternate and co-interior angles formed when a transversal cuts two parallel lines',
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
        'Two parallel lines cut by a transversal showing angles x and y, with a given angle marked',

      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="20" y1="50" x2="200" y2="50" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="20" y1="130" x2="200" y2="130" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="30" y1="20" x2="190" y2="160" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="64.3" cy="50" r="2.5" fill="#374151"/>' +
        '<circle cx="155.7" cy="130" r="2.5" fill="#374151"/>' +
        '<text x="64.3" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">75°</text>' +
        '<text x="98" y="63" font-size="14" font-weight="700" fill="#dc2626">y</text>' +
        '<text x="155.7" y="106" font-size="14" font-weight="700" text-anchor="middle" fill="#dc2626">x</text>' +
        '<text x="110" y="180" font-size="10" text-anchor="middle" fill="#6b7280">x corresponds to 75° · y is co-interior with x</text>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing multi-step geometric problem solving using corresponding, alternate and co-interior angle relationships',
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

  // ═══════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 parallel forms, 20 Qs each (content only — no diagramSvg
  // in this pass; diagrams are added in a later pass by a different agent)
  // Block layout (same relative position in every set):
  //   0-2   Angles on a line / around a point / vertically opposite [diagram-aware]
  //   3-6   Corresponding & alternate angles with parallel lines [diagram-aware]
  //   7-9   Co-interior angles with parallel lines [diagram-aware]
  //   10-13 Algebraic "solve for x" using these relationships [diagram-aware]
  //   14-17 Multi-step chains combining 2-3 angle relationships [diagram-aware]
  //   18-19 Error-spotting / reasoning (self-check)
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Line / point / vertically opposite (0-2) ─────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, two angles lie on a straight line, as shown. One angle is 118°. Find the size of the other angle.',
          checkMode: 'auto',
          options: ['62°', '118°', '52°', '72°'],
          correctIndex: 0,
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nOther angle = 180° − 118° = 62°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">118°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. Three of them are 95°, 110° and 86°. Find the size of the fourth angle, x.',
          checkMode: 'auto',
          options: ['155°', '59°', '69°', '79°'],
          correctIndex: 2,
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 95° − 110° − 86° = 360° − 291° = 69°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="102.6" y2="10.3" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="33" y2="130.9" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="140.5" y2="174.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 107.4 65.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">95°</text><path d="M 107.4 65.1 A 30 30 0 0 0 82.8 107.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">110°</text><path d="M 82.8 107.7 A 30 30 0 0 0 120.8 123" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">86°</text><path d="M 120.8 123 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 74°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the angle vertically opposite to 74°.',
              correctAnswer: '74',
              correctAnswers: ['74', '74°'],
              explanation: 'Vertically opposite angles are always equal: 74°.',
            },
            {
              label: 'b) Find the size of each adjacent angle on the straight line.',
              correctAnswer: '106',
              correctAnswers: ['106', '106°'],
              explanation: 'Adjacent angles on a straight line are supplementary: 180° − 74° = 106°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="154.6" y1="14.6" x2="65.4" y2="175.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 129.4 60" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">74°</text><path d="M 138.3 123.3 A 40 40 0 0 1 90.6 130" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 81.7 66.7 A 40 40 0 0 0 90.6 130" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 2: Corresponding & alternate angles (3-6) ────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 82°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          options: ['98°', '82°', '72°', '92°'],
          correctIndex: 1,
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 82°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">82°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 47°. Find the size of its alternate angle.',
          checkMode: 'auto',
          options: ['133°', '37°', '57°', '47°'],
          correctIndex: 3,
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 47°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">47°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 3x and the other corresponding angle is 99°. Find the value of x.',
          checkMode: 'auto',
          options: ['99', '96', '102', '33'],
          correctIndex: 3,
          explanation: 'Corresponding angles are equal: 3x = 99°.\nx = 99° ÷ 3 = 33°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">3x°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">99°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One alternate angle is (2x + 5)° and the other alternate angle is 65°. Find the value of x.',
          checkMode: 'auto',
          options: ['65', '30', '60', '35'],
          correctIndex: 1,
          explanation: 'Alternate angles are equal: 2x + 5 = 65°.\n2x = 60° → x = 30°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 5)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">65°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 3: Co-interior angles (7-9) ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 113°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['113°', '57°', '67°', '77°'],
          correctIndex: 2,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 113° = 67°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">113°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 128°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['52°', '128°', '42°', '62°'],
          correctIndex: 0,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 128° = 52°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">128°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A carport roof has two parallel support beams crossed by a diagonal brace acting as a transversal, as shown. The co-interior angle on one side is 75°. Find the co-interior angle on the same side between the other pair of beams.',
          checkMode: 'auto',
          options: ['75°', '105°', '95°', '115°'],
          correctIndex: 1,
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 75° = 105°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">75°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 4: Algebraic "solve for x" (10-13) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line, as shown, are 3x and (x + 40)°. Find the value of x.',
          checkMode: 'auto',
          options: ['180', '25', '45', '35'],
          correctIndex: 3,
          explanation: 'Angles on a straight line are supplementary: 3x + (x + 40) = 180.\n4x + 40 = 180 → 4x = 140 → x = 35.\nCheck: 3(35) = 105° and 35 + 40 = 75°; 105° + 75° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">3x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="145" y="128" font-size="14" font-weight="700" fill="#2563eb">(x + 40)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect, as shown. One pair of vertically opposite angles is (2x + 10)° and 70°. Find the value of x.',
          checkMode: 'auto',
          options: ['30', '70', '60', '80'],
          correctIndex: 0,
          explanation: 'Vertically opposite angles are equal: 2x + 10 = 70.\n2x = 60 → x = 30.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="148.8" y1="11.7" x2="71.2" y2="178.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 126.9 58.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(2x + 10)°</text><path d="M 138.3 123.3 A 40 40 0 0 1 93.1 131.3" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">70°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One alternate angle is (4x − 5)° and the other alternate angle is 75°. Find the value of x.',
          checkMode: 'auto',
          options: ['75', '80', '20', '30'],
          correctIndex: 2,
          explanation: 'Alternate angles are equal: 4x − 5 = 75.\n4x = 80 → x = 20.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(4x − 5)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">75°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is (2x + 15)° and the other is (x + 30)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '2x+15+x+30=180',
              correctAnswers: ['2x+15+x+30=180', '3x+45=180', '(2x+15)+(x+30)=180'],
              explanation: 'Co-interior angles are supplementary: (2x + 15) + (x + 30) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '45',
              explanation: '3x + 45 = 180 → 3x = 135 → x = 45.',
            },
            {
              label: 'c) Each angle',
              correctAnswer: '105 and 75',
              correctAnswers: ['105 and 75', '105° and 75°', '75 and 105'],
              explanation: '2(45) + 15 = 105°; 45 + 30 = 75°. Check: 105° + 75° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 15)°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="138" y="130" font-size="14" font-weight="700" fill="#2563eb">(x + 30)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 5: Multi-step chains (14-17) ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed where the transversal meets the first line is 124°. Find the co-interior angle on the second line, then find the angle vertically opposite to that co-interior angle.',
          checkMode: 'auto',
          options: ['124°', '46°', '56°', '66°'],
          correctIndex: 2,
          explanation: 'Step 1: The co-interior angle is supplementary to 124°: 180° − 124° = 56°.\nStep 2: The angle vertically opposite to this 56° angle is equal to it: 56°.\nFinal answer: 56°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">124°</text><path d="M 115 145 A 26 26 0 0 0 154.6 167.2" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect, as shown, forming an angle of 96°. The angle adjacent to it on the straight line is corresponding to angle y on a pair of parallel lines cut by a transversal. Find the size of angle y.',
          checkMode: 'auto',
          options: ['84°', '96°', '74°', '94°'],
          correctIndex: 0,
          explanation: 'Step 1: The adjacent angle on the straight line is supplementary to 96°: 180° − 96° = 84°.\nStep 2: y is corresponding to this 84° angle, so corresponding angles are equal: y = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="181.4" y1="37.2" x2="38.6" y2="152.8" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 141.1 69.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">96°</text><path d="M 138.3 123.3 A 40 40 0 0 1 78.9 120.2" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. An angle of 58° is alternate to angle p. Angle p and angle q are co-interior. Find the size of angle q.',
          checkMode: 'auto',
          options: ['58°', '112°', '132°', '122°'],
          correctIndex: 3,
          explanation: 'Step 1: Alternate angles are equal, so p = 58°.\nStep 2: p and q are co-interior, so they are supplementary: q = 180° − 58° = 122°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">58°</text><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="122" y="62" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at 111°, as shown. This angle\'s vertically opposite angle is corresponding to angle m on a pair of parallel lines cut by a transversal. Angle m is co-interior with angle n. Find the size of angle n.',
          checkMode: 'auto',
          options: ['111°', '69°', '59°', '79°'],
          correctIndex: 1,
          explanation: 'Step 1: The vertically opposite angle equals 111° (vertically opposite angles are equal).\nStep 2: m is corresponding to this 111° angle, so m = 111° (corresponding angles are equal).\nStep 3: m and n are co-interior, so they are supplementary: n = 180° − 111° = 69°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="194" y1="57.6" x2="26" y2="132.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 146.5 78.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">111°</text><path d="M 138.3 123.3 A 40 40 0 0 1 73.5 111.3" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 6: Error-spotting / reasoning (18-19) ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Zanele says: "Vertically opposite angles and co-interior angles both add up to 180°, so they are the same relationship." Is she correct? Explain, using a 65° angle as an example.',
          answer: 'No — Zanele is incorrect. Vertically opposite angles are always equal, not supplementary. If one angle is 65°, its vertically opposite angle is also 65° (not 115°). Co-interior angles are the ones that are supplementary — if one co-interior angle is 65°, the other is 180° − 65° = 115°. These are two different relationships that apply to different angle pairs.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A transversal cuts two lines that are NOT parallel. Mpho says the corresponding angles must still be equal, because "corresponding angles are always equal." Is Mpho correct? Explain why the lines being parallel matters.',
          answer: 'No — Mpho is incorrect. The corresponding angles rule (and the alternate and co-interior angle rules) only holds when the two lines cut by the transversal are parallel. If the lines are not parallel, the angles in corresponding positions will generally be different sizes, because there is no consistent relationship forcing them to match. Parallel lines are the key condition that makes these angle relationships true.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered angles on a line, around a point, and with parallel lines cut by a transversal, including algebraic and multi-step problems.' },
        { minScore: 14, message: 'Excellent work! You have a strong grasp of these angle relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples, especially the algebraic and multi-step questions, and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, focusing on each angle relationship one at a time, then retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Line / point / vertically opposite (0-2) ─────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, two angles lie on a straight line, as shown. One angle is 137°. Find the size of the other angle.',
          checkMode: 'auto',
          options: ['43°', '137°', '33°', '53°'],
          correctIndex: 0,
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nOther angle = 180° − 137° = 43°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">137°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. Three of them are 80°, 124° and 71°. Find the size of the fourth angle, x.',
          checkMode: 'auto',
          options: ['156°', '75°', '85°', '95°'],
          correctIndex: 2,
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 80° − 124° − 71° = 360° − 275° = 85°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="124.8" y2="11.3" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="32.3" y2="129.6" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="117.4" y2="179.7" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 115.2 65.5" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">80°</text><path d="M 115.2 65.5 A 30 30 0 0 0 82.6 107.2" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">124°</text><path d="M 82.6 107.2 A 30 30 0 0 0 112.6 124.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">71°</text><path d="M 112.6 124.9 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 63°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the angle vertically opposite to 63°.',
              correctAnswer: '63',
              correctAnswers: ['63', '63°'],
              explanation: 'Vertically opposite angles are always equal: 63°.',
            },
            {
              label: 'b) Find the size of each adjacent angle on the straight line.',
              correctAnswer: '117',
              correctAnswers: ['117', '117°'],
              explanation: 'Adjacent angles on a straight line are supplementary: 180° − 63° = 117°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="138.4" y1="7.6" x2="81.6" y2="182.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 122.4 57" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">63°</text><path d="M 138.3 123.3 A 40 40 0 0 1 97.6 133" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 81.7 66.7 A 40 40 0 0 0 97.6 133" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 2: Corresponding & alternate angles (3-6) ────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 76°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          options: ['104°', '76°', '66°', '86°'],
          correctIndex: 1,
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 76°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">76°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 132°. Find the size of its alternate angle.',
          checkMode: 'auto',
          options: ['48°', '122°', '142°', '132°'],
          correctIndex: 3,
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 132°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">132°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 4x and the other corresponding angle is 108°. Find the value of x.',
          checkMode: 'auto',
          options: ['108', '104', '112', '27'],
          correctIndex: 3,
          explanation: 'Corresponding angles are equal: 4x = 108°.\nx = 108° ÷ 4 = 27°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">4x°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">108°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One alternate angle is (3x − 10)° and the other alternate angle is 95°. Find the value of x.',
          checkMode: 'auto',
          options: ['95', '35', '40', '30'],
          correctIndex: 1,
          explanation: 'Alternate angles are equal: 3x − 10 = 95°.\n3x = 105° → x = 35°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x − 10)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">95°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 3: Co-interior angles (7-9) ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 122°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['122°', '48°', '58°', '68°'],
          correctIndex: 2,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 122° = 58°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">122°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 149°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['31°', '149°', '21°', '41°'],
          correctIndex: 0,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 149° = 31°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">149°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A vineyard has two parallel rows of trellis wire crossed by a diagonal support wire acting as a transversal, as shown. The co-interior angle on one side is 84°. Find the co-interior angle on the same side between the other pair of wires.',
          checkMode: 'auto',
          options: ['84°', '96°', '86°', '106°'],
          correctIndex: 1,
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 84° = 96°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">84°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 4: Algebraic "solve for x" (10-13) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line, as shown, are 2x and (x + 30)°. Find the value of x.',
          checkMode: 'auto',
          options: ['180', '40', '60', '50'],
          correctIndex: 3,
          explanation: 'Angles on a straight line are supplementary: 2x + (x + 30) = 180.\n3x + 30 = 180 → 3x = 150 → x = 50.\nCheck: 2(50) = 100° and 50 + 30 = 80°; 100° + 80° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">2x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="145" y="128" font-size="14" font-weight="700" fill="#2563eb">(x + 30)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect, as shown. One pair of vertically opposite angles is (3x − 15)° and 90°. Find the value of x.',
          checkMode: 'auto',
          options: ['35', '90', '30', '40'],
          correctIndex: 0,
          explanation: 'Vertically opposite angles are equal: 3x − 15 = 90.\n3x = 105 → x = 35.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="175" y1="30" x2="45" y2="160" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 138.3 66.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(3x − 15)°</text><path d="M 138.3 123.3 A 40 40 0 0 1 81.7 123.3" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">90°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One alternate angle is (5x − 10)° and the other alternate angle is 105°. Find the value of x.',
          checkMode: 'auto',
          options: ['105', '28', '23', '18'],
          correctIndex: 2,
          explanation: 'Alternate angles are equal: 5x − 10 = 105.\n5x = 115 → x = 23.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(5x − 10)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">105°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is (3x + 5)° and the other is (x + 15)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '3x+5+x+15=180',
              correctAnswers: ['3x+5+x+15=180', '4x+20=180', '(3x+5)+(x+15)=180'],
              explanation: 'Co-interior angles are supplementary: (3x + 5) + (x + 15) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '40',
              explanation: '4x + 20 = 180 → 4x = 160 → x = 40.',
            },
            {
              label: 'c) Each angle',
              correctAnswer: '125 and 55',
              correctAnswers: ['125 and 55', '125° and 55°', '55 and 125'],
              explanation: '3(40) + 5 = 125°; 40 + 15 = 55°. Check: 125° + 55° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x + 5)°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="138" y="130" font-size="14" font-weight="700" fill="#2563eb">(x + 15)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 5: Multi-step chains (14-17) ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed where the transversal meets the first line is 97°. Find the co-interior angle on the second line, then find the angle vertically opposite to that co-interior angle.',
          checkMode: 'auto',
          options: ['97°', '73°', '83°', '93°'],
          correctIndex: 2,
          explanation: 'Step 1: The co-interior angle is supplementary to 97°: 180° − 97° = 83°.\nStep 2: The angle vertically opposite to this 83° angle is equal to it: 83°.\nFinal answer: 83°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">97°</text><path d="M 115 145 A 26 26 0 0 0 154.6 167.2" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect, as shown, forming an angle of 68°. The angle adjacent to it on the straight line is corresponding to angle y on a pair of parallel lines cut by a transversal. Find the size of angle y.',
          checkMode: 'auto',
          options: ['112°', '68°', '102°', '122°'],
          correctIndex: 0,
          explanation: 'Step 1: The adjacent angle on the straight line is supplementary to 68°: 180° − 68° = 112°.\nStep 2: y is corresponding to this 112° angle, so corresponding angles are equal: y = 112°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="145.9" y1="10.4" x2="74.1" y2="179.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 125.6 58.2" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">68°</text><path d="M 138.3 123.3 A 40 40 0 0 1 94.4 131.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. An angle of 73° is alternate to angle p. Angle p and angle q are co-interior. Find the size of angle q.',
          checkMode: 'auto',
          options: ['73°', '97°', '117°', '107°'],
          correctIndex: 3,
          explanation: 'Step 1: Alternate angles are equal, so p = 73°.\nStep 2: p and q are co-interior, so they are supplementary: q = 180° − 73° = 107°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">73°</text><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="122" y="62" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at 132°, as shown. This angle\'s vertically opposite angle is corresponding to angle m on a pair of parallel lines cut by a transversal. Angle m is co-interior with angle n. Find the size of angle n.',
          checkMode: 'auto',
          options: ['132°', '48°', '38°', '58°'],
          correctIndex: 1,
          explanation: 'Step 1: The vertically opposite angle equals 132° (vertically opposite angles are equal).\nStep 2: m is corresponding to this 132° angle, so m = 132° (corresponding angles are equal).\nStep 3: m and n are co-interior, so they are supplementary: n = 180° − 132° = 48°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="201.8" y1="90.2" x2="18.2" y2="99.8" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 149.9 92.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">132°</text><path d="M 138.3 123.3 A 40 40 0 0 1 70.1 97.1" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 6: Error-spotting / reasoning (18-19) ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Kabelo says: "Vertically opposite angles and co-interior angles both add up to 180°, so they are the same relationship." Is he correct? Explain, using a 72° angle as an example.',
          answer: 'No — Kabelo is incorrect. Vertically opposite angles are always equal, not supplementary. If one angle is 72°, its vertically opposite angle is also 72° (not 108°). Co-interior angles are the ones that are supplementary — if one co-interior angle is 72°, the other is 180° − 72° = 108°. These are two different relationships that apply to different angle pairs.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A transversal cuts two lines that are NOT parallel. Naledi says the alternate angles must still be equal, because "alternate angles are always equal." Is Naledi correct? Explain why the lines being parallel matters.',
          answer: 'No — Naledi is incorrect. The alternate angles rule (and the corresponding and co-interior angle rules) only holds when the two lines cut by the transversal are parallel. If the lines are not parallel, the angles in alternate positions will generally be different sizes, because there is no consistent relationship forcing them to match. Parallel lines are the key condition that makes these angle relationships true.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered angles on a line, around a point, and with parallel lines cut by a transversal, including algebraic and multi-step problems.' },
        { minScore: 14, message: 'Excellent work! You have a strong grasp of these angle relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples, especially the algebraic and multi-step questions, and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, focusing on each angle relationship one at a time, then retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Line / point / vertically opposite (0-2) ─────────────
        {
          difficulty: 'Easy',
          question: 'In the diagram, two angles lie on a straight line, as shown. One angle is 96°. Find the size of the other angle.',
          checkMode: 'auto',
          options: ['84°', '96°', '74°', '94°'],
          correctIndex: 0,
          explanation: 'Angles on a straight line are supplementary — they add up to 180°.\nOther angle = 180° − 96° = 84°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">96°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Four angles meet at a point, as shown. Three of them are 102°, 58° and 140°. Find the size of the fourth angle, x.',
          checkMode: 'auto',
          options: ['200°', '50°', '60°', '70°'],
          correctIndex: 2,
          explanation: 'Angles around a point add up to 360°.\nx = 360° − 102° − 58° − 140° = 360° − 300° = 60°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="95" x2="200" y2="95" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="92.3" y2="11.9" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="30.1" y2="65.9" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="95" x2="152.5" y2="168.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 140 95 A 30 30 0 0 0 103.8 65.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="122" y="80" font-size="12" font-weight="700" fill="#2563eb">102°</text><path d="M 103.8 65.7 A 30 30 0 0 0 81.8 84.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="60" y="58" font-size="12" font-weight="700" fill="#2563eb">58°</text><path d="M 81.8 84.7 A 30 30 0 0 0 125 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="32" y="100" font-size="12" font-weight="700" fill="#2563eb">140°</text><path d="M 125 121 A 30 30 0 0 0 140 95" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="98" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect at a point, as shown. One of the angles formed is 51°.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the angle vertically opposite to 51°.',
              correctAnswer: '51',
              correctAnswers: ['51', '51°'],
              explanation: 'Vertically opposite angles are always equal: 51°.',
            },
            {
              label: 'b) Find the size of each adjacent angle on the straight line.',
              correctAnswer: '129',
              correctAnswers: ['129', '129°'],
              explanation: 'Adjacent angles on a straight line are supplementary: 180° − 51° = 129°.',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="119.6" y1="3.6" x2="100.4" y2="186.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 114.2 55.2" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">51°</text><path d="M 138.3 123.3 A 40 40 0 0 1 105.8 134.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><path d="M 81.7 66.7 A 40 40 0 0 0 105.8 134.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="55" y="65" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 2: Corresponding & alternate angles (3-6) ────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 68°. Find the size of its corresponding angle.',
          checkMode: 'auto',
          options: ['112°', '68°', '58°', '78°'],
          correctIndex: 1,
          explanation: 'Corresponding angles formed by a transversal cutting parallel lines are equal.\nCorresponding angle = 68°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">68°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed is 101°. Find the size of its alternate angle.',
          checkMode: 'auto',
          options: ['79°', '91°', '111°', '101°'],
          correctIndex: 3,
          explanation: 'Alternate angles formed by a transversal cutting parallel lines are equal.\nAlternate angle = 101°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">101°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="118" y="128" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is 5x and the other corresponding angle is 115°. Find the value of x.',
          checkMode: 'auto',
          options: ['115', '110', '120', '23'],
          correctIndex: 3,
          explanation: 'Corresponding angles are equal: 5x = 115°.\nx = 115° ÷ 5 = 23°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 113 55 A 26 26 0 0 0 73.4 32.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="98" y="40" font-size="14" font-weight="700" fill="#2563eb">5x°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="155" y="130" font-size="14" font-weight="700" fill="#2563eb">115°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One alternate angle is (2x + 8)° and the other alternate angle is 90°. Find the value of x.',
          checkMode: 'auto',
          options: ['90', '41', '45', '36'],
          correctIndex: 1,
          explanation: 'Alternate angles are equal: 2x + 8 = 90°.\n2x = 82° → x = 41°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(2x + 8)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">90°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 3: Co-interior angles (7-9) ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 107°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['107°', '63°', '73°', '83°'],
          correctIndex: 2,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 107° = 73°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">107°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is 136°. Find the size of the other co-interior angle.',
          checkMode: 'auto',
          options: ['44°', '136°', '34°', '54°'],
          correctIndex: 0,
          explanation: 'Co-interior angles are supplementary — they add up to 180°.\nOther angle = 180° − 136° = 44°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">136°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'A staircase has two parallel handrails crossed by a diagonal support strut acting as a transversal, as shown. The co-interior angle on one side is 69°. Find the co-interior angle on the same side between the other pair of handrails.',
          checkMode: 'auto',
          options: ['69°', '111°', '101°', '121°'],
          correctIndex: 1,
          explanation: 'Co-interior angles between parallel lines are supplementary.\nOther angle = 180° − 69° = 111°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">69°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="155" y="130" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 4: Algebraic "solve for x" (10-13) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Two angles on a straight line, as shown, are 4x and (2x + 30)°. Find the value of x.',
          checkMode: 'auto',
          options: ['180', '15', '35', '25'],
          correctIndex: 3,
          explanation: 'Angles on a straight line are supplementary: 4x + (2x + 30) = 180.\n6x + 30 = 180 → 6x = 150 → x = 25.\nCheck: 4(25) = 100° and 2(25) + 30 = 80°; 100° + 80° = 180° ✓',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="150" x2="150" y2="30" stroke="#0f1f3d" stroke-width="2"/><path d="M 60 150 A 55 55 0 0 1 129 100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="105" font-size="15" font-weight="700" fill="#2563eb">4x°</text><path d="M 145 150 A 32 32 0 0 0 132 121" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="140" y="128" font-size="14" font-weight="700" fill="#2563eb">(2x + 30)°</text><circle cx="110" cy="150" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Two straight lines intersect, as shown. One pair of vertically opposite angles is (2x + 20)° and 84°. Find the value of x.',
          checkMode: 'auto',
          options: ['32', '84', '22', '42'],
          correctIndex: 0,
          explanation: 'Vertically opposite angles are equal: 2x + 20 = 84.\n2x = 64 → x = 32.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="167.8" y1="23.6" x2="52.2" y2="166.4" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 135.2 63.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">(2x + 20)°</text><path d="M 138.3 123.3 A 40 40 0 0 1 84.8 126.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="88" y="152" font-size="14" font-weight="700" fill="#2563eb">84°</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One corresponding angle is (3x + 9)° and the other corresponding angle is 96°. Find the value of x.',
          checkMode: 'auto',
          options: ['96', '19', '29', '39'],
          correctIndex: 2,
          explanation: 'Corresponding angles are equal: 3x + 9 = 96.\n3x = 87 → x = 29.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(3x + 9)°</text><path d="M 169 145 A 28 28 0 0 0 126.4 121.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="118" y="128" font-size="14" font-weight="700" fill="#2563eb">96°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One co-interior angle is (4x − 10)° and the other is (2x + 40)°.\na) Write an equation using the co-interior angle property.\nb) Solve for x.\nc) Find the size of each angle.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Equation',
              correctAnswer: '4x-10+2x+40=180',
              correctAnswers: ['4x-10+2x+40=180', '6x+30=180', '(4x-10)+(2x+40)=180'],
              explanation: 'Co-interior angles are supplementary: (4x − 10) + (2x + 40) = 180.',
            },
            {
              label: 'b) Value of x',
              correctAnswer: '25',
              explanation: '6x + 30 = 180 → 6x = 150 → x = 25.',
            },
            {
              label: 'c) Each angle',
              correctAnswer: '90 and 90',
              correctAnswers: ['90 and 90', '90° and 90°'],
              explanation: '4(25) − 10 = 90°; 2(25) + 40 = 90°. Check: 90° + 90° = 180° ✓',
            },
          ],
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">(4x − 10)°</text><path d="M 167 145 A 26 26 0 0 0 127.4 122.8" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="135" y="130" font-size="14" font-weight="700" fill="#2563eb">(2x + 40)°</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 5: Multi-step chains (14-17) ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. One angle formed where the transversal meets the first line is 85°. Find the co-interior angle on the second line, then find the angle vertically opposite to that co-interior angle.',
          checkMode: 'auto',
          options: ['85°', '105°', '95°', '90°'],
          correctIndex: 2,
          explanation: 'Step 1: The co-interior angle is supplementary to 85°: 180° − 85° = 95°.\nStep 2: The angle vertically opposite to this 95° angle is equal to it: 95°.\nFinal answer: 95°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">85°</text><path d="M 115 145 A 26 26 0 0 0 154.6 167.2" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="100" y="178" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect, as shown, forming an angle of 54°. The angle adjacent to it on the straight line is corresponding to angle y on a pair of parallel lines cut by a transversal. Find the size of angle y.',
          checkMode: 'auto',
          options: ['126°', '54°', '116°', '136°'],
          correctIndex: 0,
          explanation: 'Step 1: The adjacent angle on the straight line is supplementary to 54°: 180° − 54° = 126°.\nStep 2: y is corresponding to this 126° angle, so corresponding angles are equal: y = 126°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="124.4" y1="4.2" x2="95.6" y2="185.8" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 116.3 55.5" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">54°</text><path d="M 138.3 123.3 A 40 40 0 0 1 103.7 134.5" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal, as shown. An angle of 88° is alternate to angle p. Angle p and angle q are co-interior. Find the size of angle q.',
          checkMode: 'auto',
          options: ['88°', '82°', '102°', '92°'],
          correctIndex: 3,
          explanation: 'Step 1: Alternate angles are equal, so p = 88°.\nStep 2: p and q are co-interior, so they are supplementary: q = 180° − 88° = 92°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 51 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="15" y1="145" x2="205" y2="145" stroke="#0f1f3d" stroke-width="2"/><path d="M 178 141 l 8 4 l -8 4" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="55" y1="10" x2="165" y2="190" stroke="#0f1f3d" stroke-width="2"/><path d="M 59 55 A 28 28 0 0 0 101.7 78.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="92" y="75" font-size="14" font-weight="700" fill="#2563eb">88°</text><path d="M 115 55 A 28 28 0 0 1 101.7 78.9" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="122" y="62" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="87" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="141" cy="145" r="2.5" fill="#0f1f3d"/></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Two straight lines intersect at 77°, as shown. This angle\'s vertically opposite angle is corresponding to angle m on a pair of parallel lines cut by a transversal. Angle m is co-interior with angle n. Find the size of angle n.',
          checkMode: 'auto',
          options: ['77°', '103°', '93°', '113°'],
          correctIndex: 1,
          explanation: 'Step 1: The vertically opposite angle equals 77° (vertically opposite angles are equal).\nStep 2: m is corresponding to this 77° angle, so m = 77° (corresponding angles are equal).\nStep 3: m and n are co-interior, so they are supplementary: n = 180° − 77° = 103°.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="45" y1="30" x2="175" y2="160" stroke="#0f1f3d" stroke-width="2"/><line x1="158.7" y1="17" x2="61.3" y2="173" stroke="#0f1f3d" stroke-width="2"/><path d="M 81.7 66.7 A 40 40 0 0 1 131.2 61.1" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="48" font-size="14" font-weight="700" fill="#2563eb">77°</text><path d="M 138.3 123.3 A 40 40 0 0 1 88.8 128.9" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="88" y="152" font-size="15" font-weight="700" fill="#ea580c">?</text><circle cx="110" cy="95" r="2.5" fill="#0f1f3d"/></svg>',
        },

        // ── Block 6: Error-spotting / reasoning (18-19) ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Karabo says: "Vertically opposite angles and co-interior angles both add up to 180°, so they are the same relationship." Is he correct? Explain, using an 80° angle as an example.',
          answer: 'No — Karabo is incorrect. Vertically opposite angles are always equal, not supplementary. If one angle is 80°, its vertically opposite angle is also 80° (not 100°). Co-interior angles are the ones that are supplementary — if one co-interior angle is 80°, the other is 180° − 80° = 100°. These are two different relationships that apply to different angle pairs.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A transversal cuts two lines that are NOT parallel. Thandiwe says the co-interior angles must still add up to 180°, because "co-interior angles are always supplementary." Is Thandiwe correct? Explain why the lines being parallel matters.',
          answer: 'No — Thandiwe is incorrect. The co-interior angle rule (and the corresponding and alternate angle rules) only holds when the two lines cut by the transversal are parallel. If the lines are not parallel, the co-interior angles will generally not add up to exactly 180°, because there is no consistent relationship forcing them to be supplementary. Parallel lines are the key condition that makes these angle relationships true.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered angles on a line, around a point, and with parallel lines cut by a transversal, including algebraic and multi-step problems.' },
        { minScore: 14, message: 'Excellent work! You have a strong grasp of these angle relationships. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples, especially the algebraic and multi-step questions, and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, focusing on each angle relationship one at a time, then retry this set.' },
      ],
    },
  ],
}
