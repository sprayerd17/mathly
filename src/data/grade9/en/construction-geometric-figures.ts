import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// interior angles / diagonals / triangles formed → blue   (#2563eb)
// exterior angle / intersection point / vertex   → orange (#ea580c)
// remote angles / right angles / total angle sum → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Construction of Geometric Figures',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE EXTERIOR ANGLE THEOREM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exterior-angle-theorem',
      title: 'The Exterior Angle Theorem',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">By construction, we investigate the relationship between the exterior angle of a triangle and its interior angles. The <strong>Exterior Angle Theorem</strong> states that an exterior angle of a triangle equals the sum of the two interior angles that are not adjacent to it (the two 'remote' interior angles).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('interior angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exterior angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('remote angles')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key idea</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Interior angles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The three ${bl('angles inside')} the triangle. Two of them are the <em>remote</em> angles relative to any given exterior angle.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exterior angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Formed by extending one side of the triangle. It is ${or('outside')} the triangle, adjacent to one interior angle.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Remote interior angles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('two interior angles')} that are <em>not</em> adjacent to the exterior angle. Their sum always equals the exterior angle.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The theorem</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Exterior angle')} = ${gr('remote angle 1')} + ${gr('remote angle 2')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has interior angles of 50° and 65°. Find the exterior angle at the third vertex.',
          answer: `${or('Exterior angle')} = ${bl('50°')} + ${bl('65°')} = ${or('115°')}`,
          steps: [
            `The ${or('exterior angle')} equals the sum of the two ${gr('remote interior angles')}: ${bl('50')} + ${bl('65')} = ${or('115°')}.`,
            `See the diagram below showing this relationship.`,
          ],
        },
        {
          question: 'Sipho has a triangle where one exterior angle is 120°, and one of the remote interior angles is 45°. Find the other remote interior angle.',
          answer: `The other ${gr('remote interior angle')} = ${gr('75°')}`,
          steps: [
            `${or('120')} = ${gr('45')} + x.`,
            `x = ${gr('75°')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Exterior Angle Theorem and showing how an exterior angle of a triangle equals the sum of the two remote interior angles" />',

      diagramPlaceholder:
        'A triangle with one side extended beyond a vertex to form an exterior angle, with the two remote interior angles labelled a and b, and the exterior angle labelled a + b',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="150" y="158" font-size="12" fill="#374151" font-weight="600">B</text><text x="108" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="196" y="152" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#16a34a" stroke-width="2"/><text x="60" y="130" font-size="14" fill="#16a34a" font-weight="700">a</text><path d="M 102,58 A 18,18 0 0 1 124,58" fill="none" stroke="#16a34a" stroke-width="2"/><text x="113" y="78" font-size="14" fill="#16a34a" font-weight="700" text-anchor="middle">b</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="13" fill="#ea580c" font-weight="700">a + b</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING DIAGONALS IN QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'diagonals-in-quadrilaterals',
      title: 'Investigating Diagonals in Quadrilaterals',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">By construction, we investigate the diagonals of rectangles, squares, parallelograms, rhombi and kites — looking at whether diagonals are <strong>equal in length</strong>, whether they <strong>bisect each other</strong>, and whether they <strong>intersect at right angles</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('diagonals')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('intersection point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('right angles')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three questions to ask about any quadrilateral's diagonals</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Are the ${bl('diagonals equal in length')}? (e.g. rectangle: yes; rhombus: not always)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Do the ${bl('diagonals bisect each other')} at the ${or('intersection point')}? (e.g. parallelogram: yes; kite: one bisects the other)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Do the ${bl('diagonals')} meet at ${gr('right angles (90°)')}? (e.g. rhombus: yes; rectangle: no)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Construction tip</p>` +
        `<p style="margin:0;color:#14532d;">Draw each quadrilateral carefully with a ruler and compass. Then draw both ${bl('diagonals')} and measure with a ruler and protractor to check length equality, bisection, and the angle at the ${or('intersection point')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Investigate the diagonals of a rectangle by construction. What do you notice?',
          answer: `The ${bl('diagonals')} are equal in length and bisect each other, but do not meet at ${gr('right angles')}`,
          steps: [
            `Drawing both ${bl('diagonals')} of a rectangle shows they are equal in length and bisect each other (cross at their midpoints), but do not intersect at ${gr('right angles')} unless it's a square.`,
          ],
        },
        {
          question: 'Lerato constructs the diagonals of a rhombus. What does she observe?',
          answer: `The ${bl('diagonals')} bisect each other AND intersect at ${gr('right angles (90°)')}`,
          steps: [
            `The ${bl('diagonals')} of a rhombus bisect each other AND intersect at ${gr('right angles (90°)')}, though they are not necessarily equal in length unless it's a square.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video investigating the diagonals of rectangles, squares, parallelograms, rhombi and kites — comparing length, bisection and perpendicularity" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EXPLORING THE SUM OF INTERIOR ANGLES OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-interior-angles-polygons',
      title: 'Exploring the Sum of Interior Angles of Polygons by Construction',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">By construction (drawing ${bl('diagonals')} from one ${or('vertex')} to divide a polygon into ${bl('triangles')}), we explore and confirm the formula for the ${gr('sum of interior angles')} of any polygon: (number of sides − 2) × 180°.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('triangles formed')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertex point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('total angle sum')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Sum of interior angles')} = (n − 2) × 180°</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:6px;margin-bottom:0;">where <strong>n</strong> = number of sides, and (n − 2) = number of ${bl('triangles')} formed from one ${or('vertex')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Construction method — step by step</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Choose one ${or('vertex')} of the polygon as your starting point.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Draw ${bl('diagonals')} from that ${or('vertex')} to every non-adjacent vertex. This divides the polygon into ${bl('triangles')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Count the ${bl('triangles')} formed (always n − 2). Multiply by 180° to get the ${gr('total angle sum')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why does this work?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Every ${bl('triangle')} has an angle sum of exactly 180°. Because the ${bl('triangles')} perfectly fill the polygon with no gaps or overlaps, the ${gr('total angle sum')} of the polygon = (number of ${bl('triangles')}) × 180°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'By drawing diagonals from one vertex of a hexagon, how many triangles are formed, and what does this confirm about the angle sum?',
          answer: `${bl('4 triangles')} are formed; ${gr('total angle sum')} = ${gr('720°')}`,
          steps: [
            `A hexagon (6 sides) can be divided into ${bl('4 triangles')} from one ${or('vertex')}. Since each triangle has 180°, ${gr('total')} = ${bl('4')} × 180° = ${gr('720°')}, confirming the formula (6 − 2) × 180 = ${gr('720°')}.`,
          ],
        },
        {
          question: 'Thabo divides a heptagon (7 sides) into triangles from one vertex. How many triangles are formed, and what is the total angle sum?',
          answer: `${bl('5 triangles')} are formed; ${gr('total angle sum')} = ${gr('900°')}`,
          steps: [
            `A heptagon forms ${bl('5 triangles')} from one ${or('vertex')} (7 − 2 = 5). ${gr('Total')} = ${bl('5')} × 180° = ${gr('900°')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide polygons into triangles from one vertex and use this to confirm the interior angle sum formula" />',

      diagramPlaceholder:
        'A hexagon with diagonals drawn from one vertex, dividing it into 4 triangles, each triangle shaded a different colour',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="50,95 80,43.04 140,43.04" fill="#eff6ff" stroke="none"/><polygon points="50,95 140,43.04 170,95" fill="#fff7ed" stroke="none"/><polygon points="50,95 170,95 140,146.96" fill="#eff6ff" stroke="none"/><polygon points="50,95 140,146.96 80,146.96" fill="#fff7ed" stroke="none"/><polygon points="50,95 80,43.04 140,43.04 170,95 140,146.96 80,146.96" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="95" x2="140" y2="43.04" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="95" x2="140" y2="146.96" stroke="#2563eb" stroke-width="2"/><circle cx="50" cy="95" r="3.5" fill="#ea580c"/><text x="88" y="64" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="118" y="80" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">2</text><text x="118" y="116" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">3</text><text x="88" y="132" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">4</text><text x="110" y="178" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">4 × 180° = 720°</text></svg>',
    },
  ],

  topicPractice: [
    {
      difficulty: 'Easy',
      question: 'A triangle has interior angles of 40° and 75°. Find the exterior angle at the third vertex.',
      answer: '115°',
      checkMode: 'auto',
      correctAnswer: '115',
      correctAnswers: ['115', '115°'],
      explanation: 'The exterior angle equals the sum of the two remote interior angles: 40 + 75 = 115°.',
    },
    {
      difficulty: 'Medium',
      question: 'A triangle has an exterior angle of 130° and one remote interior angle of 55°. Find the other remote interior angle.',
      answer: '75°',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75°'],
      explanation: '130 = 55 + x, so x = 130 − 55 = 75°.',
    },
    {
      difficulty: 'Hard',
      question: 'Sipho says the exterior angle theorem only applies to right-angled triangles. Is he correct? Explain.',
      answer: 'No — the exterior angle theorem applies to all triangles, not just right-angled ones.',
      checkMode: 'self',
    },
    {
      difficulty: 'Easy',
      question: 'What do the diagonals of a rectangle do when constructed?',
      answer: 'They are equal in length and bisect each other (cross at their midpoints).',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'Lerato constructs a rhombus and draws its diagonals. What two properties do they show?',
      answer: 'They bisect each other and intersect at right angles.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Thabo says the diagonals of a parallelogram are always equal in length. Is he correct? Explain.',
      answer: 'No — the diagonals of a general parallelogram bisect each other but are not necessarily equal; only special parallelograms like rectangles have equal diagonals.',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'By drawing diagonals from one vertex of an octagon (8 sides), how many triangles are formed?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Number of triangles = number of sides − 2 = 8 − 2 = 6.',
    },
    {
      difficulty: 'Hard',
      question: 'Find the sum of interior angles of an octagon using the triangle method described in Q7.',
      answer: '6 triangles × 180° = 1080°, matching the formula (8−2)×180 = 1080°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: "A pentagon's diagonals from one vertex form how many triangles?",
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Number of triangles = number of sides − 2 = 5 − 2 = 3.',
    },
    {
      difficulty: 'Hard',
      question: "Amahle says a kite's diagonals are always equal in length. Is she correct? Explain.",
      answer: "No — a kite's diagonals are generally not equal; one diagonal (the axis of symmetry) bisects the other, but they are not equal lengths.",
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'A triangle has an exterior angle of 95°. If one remote interior angle is 38°, find the other.',
      answer: '57°',
      checkMode: 'auto',
      correctAnswer: '57',
      correctAnswers: ['57', '57°'],
      explanation: '95 = 38 + x, so x = 95 − 38 = 57°.',
    },
    {
      difficulty: 'Hard',
      question: 'Sipho draws diagonals from one vertex of a decagon (10 sides). How many triangles form, and what is the total angle sum?',
      answer: '8 triangles form (10−2=8). Total = 8×180 = 1440°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Lerato compares the diagonals of a square and a rhombus. What do they have in common, and what is different?',
      answer: "Both have diagonals that bisect each other at right angles. A square's diagonals are also equal in length, while a general rhombus's diagonals are not necessarily equal.",
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'A triangle has two remote interior angles in the ratio 2:3, with a combined exterior angle of 100°. Find both interior angles.',
      answer: 'Total parts = 5. One part = 100 ÷ 5 = 20. Angles: 40° and 60°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Thabo says you can find the sum of interior angles of any polygon by dividing it into triangles from one vertex, then multiplying the number of triangles by 180°. Is this always true? Explain.',
      answer: 'Yes — this method works for any convex polygon, since the number of triangles formed from one vertex is always (number of sides − 2).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Outstanding! You have mastered construction of geometric figures.' },
      { minScore: 11, message: 'Great work!' },
      { minScore: 8, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered construction of geometric figures.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Exterior angle theorem (calculation & algebraic reasoning) |
    // 4-6 Diagonal properties of quadrilaterals (comparison reasoning) |
    // 7-10 Polygon interior angle sum via triangulation (forward & reverse) |
    // 11-13 Congruency conditions applied formally (SSS/SAS/ASA/RHS proof-
    // style reasoning) | 14-16 Constructing figures from combined given
    // information | 17-19 Analysing an already-constructed figure
    // (diagram-aware)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has interior angles of 55° and 70°. Calculate the exterior angle at the third vertex.', answer: '125°', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125°'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles: 55° + 70° = 125°.' },
        { difficulty: 'Medium', question: 'An exterior angle of a triangle is 140°, and one of the remote interior angles is 65°. Find the size of the other remote interior angle.', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°'], explanation: '140° = 65° + x, so x = 140° − 65° = 75°.' },
        { difficulty: 'Medium', question: 'The two remote interior angles of a triangle are in the ratio 3:4, and the exterior angle at the third vertex is 105°. Calculate the size of each remote interior angle.', answer: '45° and 60°', checkMode: 'self', explanation: 'Total parts = 3 + 4 = 7. One part = 105° ÷ 7 = 15°. Angles: 3 × 15° = 45° and 4 × 15° = 60°. Check: 45° + 60° = 105°.' },
        { difficulty: 'Hard', question: 'Sipho claims that if you extend one side of a triangle at each of its three vertices in turn, the three exterior angles formed will always add up to 360°, no matter the triangle. Is he correct? Explain using the exterior angle theorem.', answer: 'Yes — each exterior angle equals 180° minus its adjacent interior angle, so the sum of all three exterior angles is 3×180° minus the sum of all three interior angles: 540° − 180° = 360°. This holds for every triangle, since interior angles always sum to 180°.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato constructs a rectangle and a rhombus and draws the diagonals of each. Compare what she should observe about equal length and perpendicularity for the two shapes.', answer: "The rectangle's diagonals are equal in length but do not meet at right angles (unless it is a square). The rhombus's diagonals meet at right angles but are not necessarily equal in length (unless it is a square). Both sets of diagonals bisect each other.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo says the diagonals of a kite always bisect each other. Is he correct? Explain what actually happens.', answer: 'No — in a kite, only one diagonal (the axis of symmetry) bisects the other; the other diagonal does not bisect the axis of symmetry unless the kite happens to be a rhombus.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle constructs a parallelogram that is not a rectangle. Explain which diagonal properties it shares with a rectangle, and which property distinguishes them.', answer: 'Both shapes have diagonals that bisect each other. However, a general parallelogram’s diagonals are not equal in length, while a rectangle’s diagonals are always equal — that unequal-length diagonal is what distinguishes a non-rectangular parallelogram from a rectangle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'By drawing diagonals from one vertex of a nonagon (9 sides), how many triangles are formed, and what is the total interior angle sum?', answer: '7 triangles; total angle sum = 1260°', checkMode: 'auto', correctAnswer: '1260', correctAnswers: ['1260', '1260°', '7 triangles, 1260°', '7, 1260'], explanation: 'Triangles formed = 9 − 2 = 7. Total angle sum = 7 × 180° = 1260°, matching the formula (9−2)×180 = 1260°.' },
        { difficulty: 'Hard', question: 'A polygon has an interior angle sum of 1800°. Use the triangulation formula to find the number of sides the polygon has.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 sides'], explanation: '(n − 2) × 180° = 1800°, so n − 2 = 1800° ÷ 180° = 10, giving n = 12.' },
        { difficulty: 'Hard', question: 'Diagonals drawn from one vertex of a polygon form 9 triangles. How many sides does the polygon have, and what is its interior angle sum?', answer: '11 sides; angle sum = 1620°', checkMode: 'self', explanation: 'Number of sides = number of triangles + 2 = 9 + 2 = 11. Angle sum = 9 × 180° = 1620°, which matches (11−2)×180 = 1620°.' },
        { difficulty: 'Hard', question: 'Sipho says the triangulation method (drawing diagonals from one vertex to form triangles) only works for regular polygons. Is he correct? Explain.', answer: 'No — the triangulation method works for any convex polygon, regular or irregular, because the number of triangles formed from one vertex always equals (number of sides − 2), regardless of whether the sides and angles are equal.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles have all three pairs of corresponding sides equal in length. Explain, using the SSS condition, why this alone is enough to prove the triangles are congruent.', answer: 'Once all three side lengths of a triangle are fixed, there is only one possible triangle shape that can be formed from them (the shape is rigid) — so if two triangles share all three corresponding side lengths, they must be identical in shape and size, meaning all corresponding angles are automatically equal too. No angles need to be measured or given.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles each have two pairs of corresponding sides equal, plus one pair of equal angles that is NOT the angle between those two sides (SSA). Lerato says this always proves congruency, just like SAS does. Is she correct? Explain with reasoning.', answer: 'No — SSA is not a reliable congruency condition. Unlike SAS (where the angle is included between the two known sides, fixing the triangle uniquely), with SSA the third side can sometimes be drawn from two different valid positions, producing two different triangles that both satisfy the same given measurements. Only SSS, SAS, ASA and RHS reliably guarantee congruency.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle is to be constructed and proven congruent to another right-angled triangle using RHS. Explain what three pieces of information must match, and why RHS is treated as a separate condition from SAS.', answer: 'The right angle, the hypotenuse length, and the length of one other side must all match between the two triangles. RHS is treated separately from SAS because the right angle is not the angle included between the hypotenuse and the given side — it is a non-included angle — yet the fixed right angle combined with Pythagoras’ theorem still guarantees the third side (and therefore the whole triangle) is uniquely determined.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral is being constructed with interior angles of 92°, 88°, 101°, and an unknown fourth angle. Calculate the fourth angle so the construction is geometrically valid.', answer: '79°', checkMode: 'auto', correctAnswer: '79', correctAnswers: ['79', '79°'], explanation: 'Interior angles of a quadrilateral sum to 360°: 360° − 92° − 88° − 101° = 79°.' },
        { difficulty: 'Medium', question: 'A triangle is being constructed by ASA with angle A = 48° and angle B = 77°, using the side AB between them as the base. Calculate angle C, and state the size of the exterior angle at C.', answer: 'Angle C = 55°; exterior angle at C = 125°', checkMode: 'self', explanation: 'Angle C = 180° − 48° − 77° = 55°. The exterior angle at C equals the sum of the remote interior angles: 48° + 77° = 125° (consistent, since it also equals 180° − 55°).' },
        { difficulty: 'Hard', question: 'A learner wants to construct a triangle with sides 6 cm, 8 cm and 13 cm using SSS. Determine whether this construction is possible, showing your reasoning.', answer: 'Possible — the two shorter sides, 6 cm + 8 cm = 14 cm, are greater than the longest side, 13 cm, so the compass arcs will cross and the triangle can be constructed.', checkMode: 'self', explanation: 'Triangle inequality check: 6 + 8 = 14 > 13, so a valid triangle exists.' },
        { difficulty: 'Medium', question: 'The right-angled triangle shown was constructed with the right angle at X, hypotenuse YZ = 17 cm, and side XY = 8 cm. State which congruency condition applies, and calculate the length of side XZ.', answer: 'RHS; XZ = 15 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '15', '15 cm', 'RHS, 15 cm'], explanation: 'This is the RHS condition. By Pythagoras: 8² + XZ² = 17², so XZ² = 289 − 64 = 225, giving XZ = 15 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,68 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="104" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">XY = 8 cm</text><text x="95" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">XZ = ?</text><text x="105" y="98" font-size="13" fill="#2563eb" font-weight="700">YZ = 17 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">X</text><text x="35" y="60" font-size="12" fill="#374151" text-anchor="middle">Y</text><text x="160" y="145" font-size="12" fill="#374151">Z</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the exterior angle at one vertex is labelled 118°, and one of the remote interior angles is labelled 65°. Calculate the size of the other remote interior angle.', answer: '53°', checkMode: 'auto', correctAnswer: '53', correctAnswers: ['53', '53°'], explanation: 'By the exterior angle theorem: 118° = 65° + x, so x = 118° − 65° = 53°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 102,58 A 18,18 0 0 1 124,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="113" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">65°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">118°</text></svg>' },
        { difficulty: 'Hard', question: 'The rectangle shown has both diagonals drawn and labelled, each measuring 13 cm, crossing at a marked intersection point. A learner claims this confirms the diagonals of a rectangle are always equal in length. Is the learner’s conclusion correct, and does this one construction prove it in general?', answer: "The learner's observation is consistent with the known property (rectangle diagonals are always equal in length), but a single construction only illustrates the property for one specific rectangle — it does not prove the property holds for every possible rectangle in general. The general proof relies on the fact that a rectangle's two diagonals are corresponding sides of two congruent right-angled triangles formed by the diagonal, proven congruent by RHS or SAS.", checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="40" x2="185" y2="130" stroke="#2563eb" stroke-width="2"/><line x1="35" y1="130" x2="185" y2="40" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/><text x="75" y="75" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="145" y="75" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered exterior angles, diagonal properties, polygon angle sums and formal congruency reasoning.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has interior angles of 48° and 82°. Calculate the exterior angle at the third vertex.', answer: '130°', checkMode: 'auto', correctAnswer: '130', correctAnswers: ['130', '130°'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles: 48° + 82° = 130°.' },
        { difficulty: 'Medium', question: 'An exterior angle of a triangle is 150°, and one of the remote interior angles is 85°. Find the size of the other remote interior angle.', answer: '65°', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: '150° = 85° + x, so x = 150° − 85° = 65°.' },
        { difficulty: 'Medium', question: 'The two remote interior angles of a triangle are in the ratio 2:5, and the exterior angle at the third vertex is 98°. Calculate the size of each remote interior angle.', answer: '28° and 70°', checkMode: 'self', explanation: 'Total parts = 2 + 5 = 7. One part = 98° ÷ 7 = 14°. Angles: 2 × 14° = 28° and 5 × 14° = 70°. Check: 28° + 70° = 98°.' },
        { difficulty: 'Hard', question: 'Lerato claims that if you extend one side of a triangle at each of its three vertices in turn, the three exterior angles formed will always add up to 360°, regardless of the triangle’s shape. Is she correct? Explain using the exterior angle theorem.', answer: 'Yes — each exterior angle equals 180° minus its adjacent interior angle, so the sum of all three exterior angles is 3×180° minus the sum of all three interior angles: 540° − 180° = 360°. This holds for every triangle, since interior angles always sum to 180°.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo constructs a square and a general parallelogram and draws the diagonals of each. Compare what he should observe about equal length and bisection for the two shapes.', answer: "The square's diagonals are equal in length, bisect each other, AND meet at right angles. The general parallelogram's diagonals bisect each other but are not equal in length and do not meet at right angles.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Amahle says the diagonals of a rhombus are always equal in length, just like a rectangle. Is she correct? Explain what actually happens.', answer: 'No — a rhombus’s diagonals bisect each other and meet at right angles, but they are not necessarily equal in length; only a rhombus that is also a square has equal diagonals.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho constructs a kite. Explain which diagonal property it shares with a rhombus, and which property distinguishes them.', answer: 'Both a kite and a rhombus have diagonals that intersect at right angles. However, a rhombus’s diagonals bisect each other completely, while in a kite only one diagonal (the axis of symmetry) bisects the other — the other diagonal is not bisected unless the kite is also a rhombus.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'By drawing diagonals from one vertex of a decagon (10 sides), how many triangles are formed, and what is the total interior angle sum?', answer: '8 triangles; total angle sum = 1440°', checkMode: 'auto', correctAnswer: '1440', correctAnswers: ['1440', '1440°', '8 triangles, 1440°', '8, 1440'], explanation: 'Triangles formed = 10 − 2 = 8. Total angle sum = 8 × 180° = 1440°, matching the formula (10−2)×180 = 1440°.' },
        { difficulty: 'Hard', question: 'A polygon has an interior angle sum of 2160°. Use the triangulation formula to find the number of sides the polygon has.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 sides'], explanation: '(n − 2) × 180° = 2160°, so n − 2 = 2160° ÷ 180° = 12, giving n = 14.' },
        { difficulty: 'Hard', question: 'Diagonals drawn from one vertex of a polygon form 11 triangles. How many sides does the polygon have, and what is its interior angle sum?', answer: '13 sides; angle sum = 1980°', checkMode: 'self', explanation: 'Number of sides = number of triangles + 2 = 11 + 2 = 13. Angle sum = 11 × 180° = 1980°, which matches (13−2)×180 = 1980°.' },
        { difficulty: 'Hard', question: 'Thabo says the triangulation method (drawing diagonals from one vertex to form triangles) only works for polygons with an even number of sides. Is he correct? Explain.', answer: 'No — the triangulation method works for any convex polygon, whether it has an odd or even number of sides, because the number of triangles formed from one vertex always equals (number of sides − 2).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles have two pairs of corresponding angles equal, along with the included side between those angles equal in length. Explain, using the ASA condition, why this alone is enough to prove the triangles are congruent.', answer: 'If two angles are fixed, the third angle is automatically determined because angles in a triangle sum to 180°. Combined with the fixed included side between the two known angles, there is only one possible triangle shape and size that can be formed — so the triangles must be identical, and all remaining sides and angles are automatically equal too.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles each have two pairs of corresponding sides equal, plus one pair of equal angles that is NOT the angle between those two sides (SSA). Thabo says this always proves congruency, just like SAS does. Is he correct? Explain with reasoning.', answer: 'No — SSA is not a reliable congruency condition. Unlike SAS (where the angle is included between the two known sides, fixing the triangle uniquely), with SSA the third side can sometimes be drawn from two different valid positions, producing two different triangles that both satisfy the same given measurements. Only SSS, SAS, ASA and RHS reliably guarantee congruency.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle is to be constructed and proven congruent to another right-angled triangle using RHS. Explain what three pieces of information must match, and why RHS is treated as a separate condition from SAS.', answer: 'The right angle, the hypotenuse length, and the length of one other side must all match between the two triangles. RHS is treated separately from SAS because the right angle is not the angle included between the hypotenuse and the given side — it is a non-included angle — yet the fixed right angle combined with Pythagoras’ theorem still guarantees the third side (and therefore the whole triangle) is uniquely determined.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral is being constructed with interior angles of 100°, 95°, 88°, and an unknown fourth angle. Calculate the fourth angle so the construction is geometrically valid.', answer: '77°', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77', '77°'], explanation: 'Interior angles of a quadrilateral sum to 360°: 360° − 100° − 95° − 88° = 77°.' },
        { difficulty: 'Medium', question: 'A triangle is being constructed by ASA with angle A = 55° and angle B = 63°, using the side AB between them as the base. Calculate angle C, and state the size of the exterior angle at C.', answer: 'Angle C = 62°; exterior angle at C = 118°', checkMode: 'self', explanation: 'Angle C = 180° − 55° − 63° = 62°. The exterior angle at C equals the sum of the remote interior angles: 55° + 63° = 118° (consistent, since it also equals 180° − 62°).' },
        { difficulty: 'Hard', question: 'A learner wants to construct a triangle with sides 5 cm, 9 cm and 12 cm using SSS. Determine whether this construction is possible, showing your reasoning.', answer: 'Possible — the two shorter sides, 5 cm + 9 cm = 14 cm, are greater than the longest side, 12 cm, so the compass arcs will cross and the triangle can be constructed.', checkMode: 'self', explanation: 'Triangle inequality check: 5 + 9 = 14 > 12, so a valid triangle exists.' },
        { difficulty: 'Medium', question: 'The right-angled triangle shown was constructed with the right angle at P, hypotenuse QR = 25 cm, and side PQ = 15 cm. State which congruency condition applies, and calculate the length of side PR.', answer: 'RHS; PR = 20 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '20', '20 cm', 'RHS, 20 cm'], explanation: 'This is the RHS condition. By Pythagoras: 15² + PR² = 25², so PR² = 625 − 225 = 400, giving PR = 20 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,60 175,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">PQ = 15 cm</text><text x="105" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">PR = ?</text><text x="115" y="92" font-size="13" fill="#2563eb" font-weight="700">QR = 25 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">P</text><text x="35" y="52" font-size="12" fill="#374151" text-anchor="middle">Q</text><text x="180" y="145" font-size="12" fill="#374151">R</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the exterior angle at one vertex is labelled 132°, and one of the remote interior angles is labelled 59°. Calculate the size of the other remote interior angle.', answer: '73°', checkMode: 'auto', correctAnswer: '73', correctAnswers: ['73', '73°'], explanation: 'By the exterior angle theorem: 132° = 59° + x, so x = 132° − 59° = 73°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 102,58 A 18,18 0 0 1 124,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="113" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">59°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">132°</text></svg>' },
        { difficulty: 'Hard', question: 'The rhombus shown has both diagonals drawn, clearly intersecting at a right angle marked at the intersection point. A learner claims this confirms the diagonals of a rhombus always meet at right angles. Is the learner’s conclusion correct, and does this one construction prove it in general?', answer: "The learner's observation is consistent with the known property (rhombus diagonals always meet at right angles), but a single construction only illustrates the property for one specific rhombus — it does not prove the property holds for every possible rhombus in general. The general proof relies on the fact that a rhombus's diagonals form two pairs of congruent triangles (proven by SSS, since all four sides are equal), and the equal adjacent angles at the intersection must each be 90° because they lie on a straight line and are equal.", checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 175,85 110,145 45,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="145" stroke="#2563eb" stroke-width="2"/><line x1="45" y1="85" x2="175" y2="85" stroke="#2563eb" stroke-width="2"/><rect x="100" y="75" width="10" height="10" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="80" font-size="13" fill="#ea580c" font-weight="700">90°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply exterior angles, diagonal properties, polygon angle sums and formal congruency reasoning.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A triangle has interior angles of 63° and 59°. Calculate the exterior angle at the third vertex.', answer: '122°', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles: 63° + 59° = 122°.' },
        { difficulty: 'Medium', question: 'An exterior angle of a triangle is 110°, and one of the remote interior angles is 42°. Find the size of the other remote interior angle.', answer: '68°', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68°'], explanation: '110° = 42° + x, so x = 110° − 42° = 68°.' },
        { difficulty: 'Medium', question: 'The two remote interior angles of a triangle are in the ratio 1:2, and the exterior angle at the third vertex is 90°. Calculate the size of each remote interior angle.', answer: '30° and 60°', checkMode: 'self', explanation: 'Total parts = 1 + 2 = 3. One part = 90° ÷ 3 = 30°. Angles: 1 × 30° = 30° and 2 × 30° = 60°. Check: 30° + 60° = 90°.' },
        { difficulty: 'Hard', question: 'Amahle claims that if you extend one side of a triangle at each of its three vertices in turn, the three exterior angles formed will always add up to 360°, no matter the triangle’s shape. Is she correct? Explain using the exterior angle theorem.', answer: 'Yes — each exterior angle equals 180° minus its adjacent interior angle, so the sum of all three exterior angles is 3×180° minus the sum of all three interior angles: 540° − 180° = 360°. This holds for every triangle, since interior angles always sum to 180°.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sipho constructs a rectangle and a kite and draws the diagonals of each. Compare what he should observe about equal length and bisection for the two shapes.', answer: "The rectangle's diagonals are equal in length and bisect each other (but do not meet at right angles). The kite's diagonals are generally not equal in length, and only one diagonal (the axis of symmetry) bisects the other — they do meet at right angles.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato says the diagonals of a parallelogram always meet at right angles, just like a rhombus. Is she correct? Explain what actually happens.', answer: 'No — a general parallelogram’s diagonals bisect each other but do not meet at right angles; only a parallelogram that is also a rhombus (or square) has diagonals meeting at right angles.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo constructs a square. Explain which diagonal properties it shares with both a rectangle and a rhombus.', answer: "A square's diagonals are equal in length (a property shared with rectangles) AND meet at right angles while bisecting each other (a property shared with rhombi). A square is the only quadrilateral of these three that has all of these diagonal properties simultaneously.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'By drawing diagonals from one vertex of an 11-sided polygon, how many triangles are formed, and what is the total interior angle sum?', answer: '9 triangles; total angle sum = 1620°', checkMode: 'auto', correctAnswer: '1620', correctAnswers: ['1620', '1620°', '9 triangles, 1620°', '9, 1620'], explanation: 'Triangles formed = 11 − 2 = 9. Total angle sum = 9 × 180° = 1620°, matching the formula (11−2)×180 = 1620°.' },
        { difficulty: 'Hard', question: 'A polygon has an interior angle sum of 1980°. Use the triangulation formula to find the number of sides the polygon has.', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 sides'], explanation: '(n − 2) × 180° = 1980°, so n − 2 = 1980° ÷ 180° = 11, giving n = 13.' },
        { difficulty: 'Hard', question: 'Diagonals drawn from one vertex of a polygon form 7 triangles. How many sides does the polygon have, and what is its interior angle sum?', answer: '9 sides; angle sum = 1260°', checkMode: 'self', explanation: 'Number of sides = number of triangles + 2 = 7 + 2 = 9. Angle sum = 7 × 180° = 1260°, which matches (9−2)×180 = 1260°.' },
        { difficulty: 'Hard', question: 'Amahle says the triangulation method (drawing diagonals from one vertex to form triangles) does not work for concave (non-convex) polygons. Is she correct? Explain.', answer: 'Yes — for a concave polygon, at least one interior angle is greater than 180°, which means diagonals drawn from a single vertex may pass outside the polygon rather than dividing it cleanly into triangles that fill it exactly. The simple (n − 2) triangulation from one vertex only reliably works for convex polygons.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles have all three pairs of corresponding sides equal in length. Explain, using the SSS condition, why this alone is enough to prove the triangles are congruent.', answer: 'Once all three side lengths of a triangle are fixed, there is only one possible triangle shape that can be formed from them (the shape is rigid) — so if two triangles share all three corresponding side lengths, they must be identical in shape and size, meaning all corresponding angles are automatically equal too. No angles need to be measured or given.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles have two pairs of corresponding sides equal, with the angle between those two sides also equal (SAS). Sipho says this alone proves congruency. Is he correct? Explain why the position of the angle matters.', answer: 'Yes — SAS is a reliable congruency condition because the included angle (the angle between the two known sides) fixes the triangle uniquely: once two sides and the angle between them are set, there is only one possible position for the third side, so only one triangle can be formed. This is different from SSA, where a non-included angle can sometimes allow two different triangles.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle is to be constructed and proven congruent to another right-angled triangle using RHS. Explain what three pieces of information must match, and why RHS is treated as a separate condition from SAS.', answer: 'The right angle, the hypotenuse length, and the length of one other side must all match between the two triangles. RHS is treated separately from SAS because the right angle is not the angle included between the hypotenuse and the given side — it is a non-included angle — yet the fixed right angle combined with Pythagoras’ theorem still guarantees the third side (and therefore the whole triangle) is uniquely determined.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral is being constructed with interior angles of 84°, 99°, 92°, and an unknown fourth angle. Calculate the fourth angle so the construction is geometrically valid.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Interior angles of a quadrilateral sum to 360°: 360° − 84° − 99° − 92° = 85°.' },
        { difficulty: 'Medium', question: 'A triangle is being constructed by ASA with angle A = 40° and angle B = 95°, using the side AB between them as the base. Calculate angle C, and state the size of the exterior angle at C.', answer: 'Angle C = 45°; exterior angle at C = 135°', checkMode: 'self', explanation: 'Angle C = 180° − 40° − 95° = 45°. The exterior angle at C equals the sum of the remote interior angles: 40° + 95° = 135° (consistent, since it also equals 180° − 45°).' },
        { difficulty: 'Hard', question: 'A learner wants to construct a triangle with sides 7 cm, 10 cm and 16 cm using SSS. Determine whether this construction is possible, showing your reasoning.', answer: 'Possible — the two shorter sides, 7 cm + 10 cm = 17 cm, are greater than the longest side, 16 cm, so the compass arcs will cross and the triangle can be constructed.', checkMode: 'self', explanation: 'Triangle inequality check: 7 + 10 = 17 > 16, so a valid triangle exists.' },
        { difficulty: 'Medium', question: 'The right-angled triangle shown was constructed with the right angle at L, hypotenuse MN = 20 cm, and side LM = 12 cm. State which congruency condition applies, and calculate the length of side LN.', answer: 'RHS; LN = 16 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '16', '16 cm', 'RHS, 16 cm'], explanation: 'This is the RHS condition. By Pythagoras: 12² + LN² = 20², so LN² = 400 − 144 = 256, giving LN = 16 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,64 160,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="102" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">LM = 12 cm</text><text x="97" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">LN = ?</text><text x="100" y="95" font-size="13" fill="#2563eb" font-weight="700">MN = 20 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">L</text><text x="35" y="56" font-size="12" fill="#374151" text-anchor="middle">M</text><text x="165" y="145" font-size="12" fill="#374151">N</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the exterior angle at one vertex is labelled 141°, and one of the remote interior angles is labelled 76°. Calculate the size of the other remote interior angle.', answer: '65°', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: 'By the exterior angle theorem: 141° = 76° + x, so x = 141° − 76° = 65°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 102,58 A 18,18 0 0 1 124,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="113" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">76°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">141°</text></svg>' },
        { difficulty: 'Hard', question: 'The square shown has both diagonals drawn, labelled equal in length and crossing at a marked right angle at the intersection point. A learner claims this confirms squares are the only quadrilateral with diagonals that are equal AND perpendicular. Is the learner’s conclusion correct, and does this one construction prove it in general?', answer: "The learner's conclusion is correct in principle — among the common quadrilaterals studied (rectangle, rhombus, parallelogram, kite, square), only the square combines equal-length diagonals with perpendicular diagonals. However, a single construction only illustrates this for one specific square — it does not, by itself, prove the general property. A full proof would need to show that a square satisfies both the rectangle's equal-diagonal property and the rhombus's perpendicular-diagonal property simultaneously, since a square is both a rectangle and a rhombus.", checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 175,90 110,155 45,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="155" stroke="#2563eb" stroke-width="2"/><line x1="45" y1="90" x2="175" y2="90" stroke="#2563eb" stroke-width="2"/><rect x="100" y="80" width="10" height="10" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="85" font-size="13" fill="#ea580c" font-weight="700">90°</text><text x="120" y="55" font-size="12" fill="#2563eb" font-weight="700">d</text><text x="145" y="82" font-size="12" fill="#2563eb" font-weight="700">d</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You have a strong command of exterior angles, diagonal properties, polygon angle sums and formal congruency reasoning.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
