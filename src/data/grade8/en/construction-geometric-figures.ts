import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// compass arcs       → blue   (#2563eb)
// bisecting line     → green  (#16a34a)
// perpendicular line / angle markings / incentre → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Construction of Geometric Figures',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CONSTRUCTING BISECTORS AND PERPENDICULAR LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bisectors-perpendicular-lines',
      title: 'Constructing Bisectors and Perpendicular Lines',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We use a compass, ruler and protractor to <strong>bisect</strong> lines and angles (divide them exactly in half), and to construct <strong>perpendicular lines</strong> at a given point or from a given point. Bisecting a line segment means finding its exact midpoint and drawing a line at 90° through it.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('compass arcs')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bisecting line')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perpendicular line')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Bisect</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">To divide exactly in half — a bisector cuts a line segment or angle into two equal parts.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Perpendicular Bisector</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line that crosses another line segment at exactly 90° through its midpoint.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Perpendicular Line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line that meets another line at exactly 90°. It can be constructed from a point on or off the line.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why use a compass and ruler?</p>` +
        `<p style="margin:0;color:#1e3a8a;">A compass and ruler allow us to make <strong>exact</strong> geometric constructions without measuring angles with a protractor. The ${bl('compass arcs')} are drawn using a fixed width, ensuring all distances are equal. The ${gr('bisecting line')} drawn through the arc intersections is guaranteed to pass through the midpoint at exactly 90°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how to bisect a line segment AB using a compass.',
          answer: `The ${bl('compass arcs')} from A and B intersect above and below the line, and the ${gr('bisecting line')} through these intersections crosses AB at exactly 90° at its midpoint.`,
          steps: [
            `Place the ${bl('compass')} point on <strong>A</strong> and draw an ${bl('arc')} above and below the line.`,
            `Without changing the compass width, repeat from <strong>B</strong> — draw a second ${bl('arc')} above and below the line. The two sets of arcs cross at two points.`,
            `Draw a ${gr('line')} through the two points where the arcs cross — this ${gr('bisecting line')} bisects AB at 90°. See the diagram below.`,
          ],
        },
        {
          question: 'Sipho needs to construct a perpendicular line from a point not on the line. Describe the method.',
          answer: `The ${or('perpendicular line')} is drawn from the external point through the intersection of the ${bl('arcs')}, meeting the original line at exactly 90°.`,
          steps: [
            `Place the ${bl('compass')} on the external point and draw an ${bl('arc')} crossing the line at two points.`,
            `From each of those two crossing points, draw ${bl('arcs')} that intersect each other.`,
            `Draw a ${or('line')} from the original point through the intersection of these arcs — this is the ${or('perpendicular line')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step construction showing a line segment AB being bisected with compass arcs above and below, and the perpendicular bisector drawn through" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to bisect a line segment and construct a perpendicular line using compass and ruler, with compass arcs in blue, bisecting line in green and perpendicular line in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONSTRUCTING TRIANGLES AND QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles-quadrilaterals',
      title: 'Constructing Triangles and Quadrilaterals',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We construct triangles and quadrilaterals accurately using a compass, ruler and protractor, given specific side lengths and/or angles. We also construct angles of <strong>30°, 45°, 60°</strong> and their multiples without using a protractor, using compass-based methods derived from equilateral triangles and bisection.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('compass arcs')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('constructed shape')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angle markings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key angles from compass constructions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${or('60°')} angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Constructed using an equilateral triangle — all sides equal means all angles are 60°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${or('30°')} angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Constructed by bisecting a 60° angle.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('45°')} angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Constructed by bisecting a 90° angle (perpendicular line).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why can we construct exact angles without a protractor?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because an equilateral triangle has all sides equal and all angles equal to ${or('60°')}, constructing one with a compass automatically produces this angle exactly. Bisecting then halves it precisely — no measurement needed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Construct an equilateral triangle with sides of 5 cm using only a compass and ruler.',
          answer: `The three ${bl('compass arcs')} intersect to give the third vertex, and connecting the three points gives the ${gr('equilateral triangle')}.`,
          steps: [
            `Draw a ${gr('5 cm line segment')} AB using a ruler.`,
            `Place the ${bl('compass')} on endpoint A with the width set to 5 cm and draw an ${bl('arc')} above the line.`,
            `Without changing the compass width, repeat from endpoint B — draw a second ${bl('arc')} crossing the first. The intersection is the third vertex C.`,
            `Connect A to C and B to C using a ruler to complete the ${gr('equilateral triangle')}. See the diagram below.`,
          ],
        },
        {
          question: 'Lerato wants to construct a 60° angle without a protractor. Describe the method.',
          answer: `The ${or('60°')} angle is created because the compass construction replicates the properties of an equilateral triangle — all three ${or('angles')} are exactly 60°.`,
          steps: [
            `Draw a line segment and mark one endpoint as the vertex of the angle.`,
            `Place the ${bl('compass')} on the endpoint and draw an ${bl('arc')} crossing the line.`,
            `Without changing the compass width, place the compass where the ${bl('arc')} crosses the line and mark a new ${bl('arc')} crossing the first.`,
            `Draw a ${gr('line')} from the endpoint through this new crossing point — this creates a ${or('60°')} angle, since it forms part of an equilateral triangle.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step construction of an equilateral triangle with compass arcs shown; separate diagram showing construction of a 60° angle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to construct an equilateral triangle and a 60° angle using only compass and ruler, with compass arcs in blue, constructed shape in green and angle markings in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — BISECTING ANGLES OF A TRIANGLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bisecting-angles-triangle',
      title: 'Bisecting Angles of a Triangle',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We construct the bisector of each angle in a triangle using a compass and ruler. An <strong>angle bisector</strong> divides an angle into two exactly equal parts. The three angle bisectors of a triangle always meet at a single point called the <strong>incentre</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bisector line')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('incentre')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angle Bisector</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A line drawn from a vertex that divides the ${bl('original angle')} into two equal halves.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Bisector Line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('line drawn from the vertex')} through the arc intersection — it splits the angle exactly in half.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Incentre</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('point where all three angle bisectors meet')} inside a triangle. It is always inside the triangle.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The incentre is always inside the triangle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Unlike the circumcentre (where perpendicular bisectors of sides meet), the ${or('incentre')} is always located inside the triangle regardless of whether the triangle is acute, right-angled or obtuse.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how to bisect a single angle in a triangle.',
          answer: `The ${gr('bisector line')} drawn from the vertex through the arc intersection divides the ${bl('original angle')} into two equal halves.`,
          steps: [
            `Place the compass on the <strong>vertex</strong> of the ${bl('original angle')} and draw an arc crossing both arms of the angle.`,
            `From each of the two crossing points on the arms, draw arcs that intersect inside the angle.`,
            `Draw a ${gr('line')} from the vertex through this intersection — this ${gr('bisector line')} divides the angle exactly in half.`,
          ],
        },
        {
          question: 'Thabo bisects all three angles of a triangle. What does he notice about where the three bisector lines meet?',
          answer: `All three ${gr('angle bisectors')} meet at a single point inside the triangle — the ${or('incentre')}.`,
          steps: [
            `Construct the ${gr('angle bisector')} of each of the three angles of the triangle using the compass method.`,
            `All three ${gr('bisector lines')} meet at a single point inside the triangle, called the ${or('incentre')}. See the diagram below showing this.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A triangle with all three angle bisectors drawn, meeting at a single labelled incentre point" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to bisect all three angles of a triangle using a compass, with original angle in blue, bisector line in green and incentre in orange" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What does bisecting a line segment mean?',
      answer: 'It means dividing the line segment exactly in half, finding its precise midpoint.',
      checkMode: 'self',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the first step in bisecting a line segment AB using a compass.',
      answer: 'Place the compass point on A and draw an arc above and below the line segment.',
      checkMode: 'self',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a perpendicular bisector always crosses the original line at exactly 90°. Is he correct? Explain.',
      answer: 'Yes — by definition, a perpendicular bisector crosses the line segment at its midpoint at exactly 90°.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What tool, along with a compass and ruler, is needed to construct angles to one degree of accuracy?',
      answer: 'protractor',
      checkMode: 'auto',
      correctAnswer: 'protractor',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe how an equilateral triangle can be constructed using only a compass and ruler.',
      answer: 'Draw a line segment of the required length, then draw arcs of the same length from each endpoint; where the arcs cross is the third vertex.',
      checkMode: 'self',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato says a 60° angle can be constructed without a protractor by using an equilateral triangle's properties. Is she correct? Explain.",
      answer: 'Yes — since all angles in an equilateral triangle are 60°, constructing such a triangle gives a 60° angle without measuring with a protractor.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'How could you construct a 30° angle without a protractor?',
      answer: 'Construct a 60° angle first, then bisect it to get two 30° angles.',
      checkMode: 'self',
    },

    // ── Q8 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo wants to construct a 45° angle without a protractor. Suggest a method.',
      answer: 'Construct a 90° angle (perpendicular line), then bisect it to get two 45° angles.',
      checkMode: 'self',
    },

    // ── Q9 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the term for the point where all three angle bisectors of a triangle meet?',
      answer: 'incentre',
      checkMode: 'auto',
      correctAnswer: 'incentre',
    },

    // ── Q10 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe how to bisect an angle in a triangle using a compass.',
      answer: 'Place the compass on the vertex and draw an arc crossing both arms; from those crossing points draw intersecting arcs; draw a line from the vertex through this intersection.',
      checkMode: 'self',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says the incentre of a triangle is always inside the triangle, regardless of its shape. Is she correct? Explain.',
      answer: 'Yes — unlike some other triangle centres, the incentre is always located inside the triangle for any triangle shape.',
      checkMode: 'self',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho constructs all three perpendicular bisectors of a triangle's sides instead of its angle bisectors. Would these meet at the same point as the angle bisectors? Explain.",
      answer: 'No — perpendicular bisectors of the sides meet at a different point called the circumcentre, which is generally not the same as the incentre formed by angle bisectors.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered construction of geometric figures.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
