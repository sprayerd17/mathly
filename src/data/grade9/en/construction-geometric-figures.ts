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
        '<DiagramPlaceholder label="Diagram needed: a triangle with one side extended to show an exterior angle, with the two remote interior angles clearly labelled and the exterior angle marked" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: side-by-side constructions of a rectangle and a rhombus, each with both diagonals drawn, labelling whether they are equal, bisecting, or perpendicular" />',
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
        '<DiagramPlaceholder label="Diagram needed: a hexagon with diagonals drawn from one vertex, dividing it into 4 triangles, each triangle shaded a different colour" />',
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
}
