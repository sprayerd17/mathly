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
        'Step-by-step construction showing a line segment AB being bisected with compass arcs above and below, and the perpendicular bisector drawn through',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="40" y1="110" x2="180" y2="110" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="40" cy="110" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="180" cy="110" r="2.5" fill="#0f1f3d"/>' +
        '<text x="40" y="128" font-size="12" text-anchor="middle" fill="#0f1f3d">A</text>' +
        '<text x="180" y="128" font-size="12" text-anchor="middle" fill="#0f1f3d">B</text>' +
        '<path d="M 110,62 A 85,85 0 0 1 110,158" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 110,62 A 85,85 0 0 0 110,158" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="110" y1="50" x2="110" y2="170" stroke="#16a34a" stroke-width="2.5"/>' +
        '<rect x="103" y="103" width="7" height="7" fill="none" stroke="#ea580c" stroke-width="1.5"/>' +
        '<text x="55" y="80" font-size="11" font-weight="700" fill="#2563eb">Compass arcs</text>' +
        '<text x="110" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">Bisecting line</text>' +
        '</svg>',

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
        'Step-by-step construction of an equilateral triangle with compass arcs shown, and a separate construction of a 60° angle',

      diagramSvg:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(85,110)">' +
        '<path d="M -22,-20 Q -5,-52 8,-30" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 22,-20 Q 5,-52 -8,-30" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="-50,30 50,30 0,-56.6" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="-50" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="50" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="0" cy="-56.6" r="2.5" fill="#0f1f3d"/>' +
        '<text x="-50" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">A</text>' +
        '<text x="50" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">B</text>' +
        '<text x="0" y="-64" font-size="11" text-anchor="middle" fill="#0f1f3d">C</text>' +
        '<text x="0" y="60" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">Equilateral triangle</text>' +
        '</g>' +
        '<g transform="translate(255,110)">' +
        '<line x1="0" y1="30" x2="75" y2="30" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="0" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<path d="M 45,30 A 45,45 0 0 0 22.5,-9" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 8,14 A 45,45 0 0 1 24,-7" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="0" y1="30" x2="25" y2="-13" stroke="#16a34a" stroke-width="2.5"/>' +
        '<path d="M 15,30 A 15,15 0 0 0 7.5,17" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="20" y="26" font-size="11" font-weight="700" fill="#ea580c">60°</text>' +
        '<text x="0" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">V</text>' +
        '<text x="37" y="60" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">60° angle</text>' +
        '</g>' +
        '</svg>',

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
        'A triangle with all three angle bisectors drawn, meeting at a single labelled incentre point',

      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="20,150 190,150 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="20" y1="150" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="190" y1="150" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="90" y1="30" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="96.35" cy="106.13" r="4" fill="#ea580c"/>' +
        '<circle cx="20" cy="150" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="190" cy="150" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="90" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<path d="M 34,150 A 14,14 0 0 1 26.9,138.2" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<path d="M 176,150 A 14,14 0 0 0 182.4,138.9" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<path d="M 84,43.5 A 14,14 0 0 0 96.2,43.7" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<text x="14" y="168" font-size="11" fill="#0f1f3d">A</text>' +
        '<text x="192" y="168" font-size="11" fill="#0f1f3d">B</text>' +
        '<text x="90" y="20" font-size="11" text-anchor="middle" fill="#0f1f3d">C</text>' +
        '<text x="96.35" y="126" font-size="11" font-weight="700" text-anchor="middle" fill="#ea580c">Incentre</text>' +
        '</svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Constructing triangles given various information (SSS/SAS/
    // ASA/RHS scenarios) | 4-7 Constructing quadrilaterals | 8-11 Bisecting
    // lines/angles & constructing specific angles | 12-15 Congruency
    // conditions — vocabulary and reasoning | 16-19 Analysing an already-
    // constructed figure (diagram-aware)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 8 cm, 10 cm and 15 cm. Check whether these three lengths can actually form a triangle before starting.', answer: 'Yes — the two shorter sides, 8 cm + 10 cm = 18 cm, which is greater than the longest side, 15 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 8 + 10 = 18. Since 18 is greater than the longest side (15), the triangle is possible.' },
        { difficulty: 'Medium', question: 'A triangle must be constructed with AB = 8 cm, angle A = 50° and angle B = 60° (ASA). Explain the order of steps needed, and state the size of the third angle.', answer: 'Draw AB = 8 cm as the base with a ruler. Use a protractor to construct a 50° angle at A and a 60° angle at B, both measured from the base AB. Extend the two new arms until they meet — that intersection is the third vertex, C. The third angle is 180° − 50° − 60° = 70°.', checkMode: 'self', explanation: 'Angles in a triangle sum to 180°, so the third angle = 180° − 50° − 60° = 70°.' },
        { difficulty: 'Easy-Medium', question: 'A right-angled triangle must be constructed with the hypotenuse 13 cm and one other side 5 cm (RHS). Describe how the third side is found, and give its length.', answer: 'Draw the 5 cm side, then construct a 90° angle at one endpoint using a protractor. Set a compass to 13 cm, place the point on the opposite endpoint of the 5 cm side, and draw an arc crossing the perpendicular arm — this locates the third vertex. By Pythagoras, the third side is 12 cm, since 5² + 12² = 25 + 144 = 169 = 13².', checkMode: 'self', explanation: 'Using a² + b² = c²: 5² + b² = 13², so b² = 169 − 25 = 144, giving b = 12 cm.' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 5 cm, 7 cm and 13 cm. Show whether this is possible, and if not, explain exactly what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 5 cm + 7 cm = 12 cm, are less than the longest side, 13 cm. If attempted, an arc of radius 5 cm from one end of the 13 cm base and an arc of radius 7 cm from the other end would not be long enough to reach each other, so they would never cross and no third vertex could be found.', checkMode: 'self', explanation: '5 + 7 = 12, which is less than 13, so the two arcs cannot meet above the base — no valid triangle exists.' },
        { difficulty: 'Medium', question: 'A quadrilateral ABCD must be constructed by first splitting it into two triangles along diagonal AC. If AC = 9 cm, and triangle ABC has AB = 6 cm and BC = 7 cm, explain why triangle ABC can be constructed using SSS.', answer: 'All three sides of triangle ABC are known — AB = 6 cm, BC = 7 cm and AC = 9 cm — so the SSS method can be used directly: draw AC as a base, then swing a 6 cm arc from A and a 7 cm arc from C to locate B where they cross.', checkMode: 'self', explanation: 'Checking the triangle inequality: 6 + 7 = 13 > 9, so the triangle ABC is valid and constructible by SSS.' },
        { difficulty: 'Medium', question: 'Describe the general method for constructing a quadrilateral when all four sides and one diagonal are known.', answer: 'Draw the known diagonal first, since it splits the quadrilateral into two triangles that share that diagonal as a common side. Construct the first triangle using SSS with the diagonal and the two sides on that side of the figure. Then construct the second triangle on the other side of the same diagonal, using SSS with the diagonal and the remaining two sides. Joining all the vertices in order completes the quadrilateral.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral has interior angles of 100°, 80°, 95° and an unknown fourth angle. Calculate the size of the fourth angle so the quadrilateral can be constructed correctly.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 degrees'], explanation: 'The angles of a quadrilateral sum to 360°: 360° − 100° − 80° − 95° = 85°.' },
        { difficulty: 'Hard', question: 'A quadrilateral PQRS must be constructed with PQ = 6 cm, QR = 8 cm, angle Q = 90°, and diagonal PR = 10 cm. Explain how knowing PR in advance helps confirm the construction of triangle PQR before the rest of the quadrilateral is added.', answer: 'Triangle PQR can be constructed first using SAS (PQ = 6 cm, angle Q = 90°, QR = 8 cm), and then PR can be checked against Pythagoras as a verification: 6² + 8² = 36 + 64 = 100 = 10², which matches the given diagonal of 10 cm exactly — confirming the right angle at Q was constructed accurately before adding vertex S to complete the quadrilateral.', checkMode: 'self', explanation: 'Pythagoras confirms consistency: 6² + 8² = 10², so PR = 10 cm is correct for a right angle at Q.' },
        { difficulty: 'Medium', question: 'Describe, step by step, how to bisect an angle of 84° using only a compass and ruler, and state the size of each resulting half.', answer: 'Place the compass on the vertex and draw an arc crossing both arms of the 84° angle. From each of those two crossing points, draw arcs of equal radius that intersect inside the angle. Draw a line from the vertex through this intersection point — this bisects the angle into two equal halves of 42° each.', checkMode: 'self', explanation: 'Bisecting divides the angle into two equal parts: 84° ÷ 2 = 42°.' },
        { difficulty: 'Medium', question: 'Without using a protractor, describe how to construct a 15° angle using only a compass and ruler.', answer: 'First construct a 60° angle using the equilateral-triangle compass method. Bisect it to get a 30° angle. Bisect the 30° angle again to get a 15° angle.', checkMode: 'self', explanation: '60° ÷ 2 = 30°, then 30° ÷ 2 = 15° — two successive bisections of a constructed 60° angle.' },
        { difficulty: 'Easy', question: 'What is the correct term for a line that divides a line segment into two equal parts while also crossing it at exactly 90°?', answer: 'perpendicular bisector', checkMode: 'auto', correctAnswer: 'perpendicular bisector', correctAnswers: ['perpendicular bisector', 'the perpendicular bisector'], explanation: 'A perpendicular bisector cuts a segment exactly in half and meets it at a right angle at the same time.' },
        { difficulty: 'Hard', question: 'Explain how a 105° angle can be constructed without a protractor, using only compass constructions of 60° and 45°.', answer: 'Construct a 60° angle at the required vertex along a straight base line. Then, using the same vertex, construct a 45° angle (a 90° angle bisected) immediately adjacent to the 60° angle, sharing one arm. The two angles placed side by side combine to give a single 105° angle.', checkMode: 'self', explanation: '60° + 45° = 105°.' },
        { difficulty: 'Easy', question: 'Which congruency condition applies when a triangle is constructed using two given side lengths and the angle enclosed between them?', answer: 'SAS', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'side-angle-side'], explanation: 'SAS (side-angle-side) is used when two sides and the included angle between them are known.' },
        { difficulty: 'Medium', question: 'Two triangles each have all three corresponding side lengths equal. Explain which congruency condition proves they are congruent, and why no angles need to be measured.', answer: 'SSS (side-side-side) proves the triangles are congruent, because once all three side lengths of a triangle are fixed, its shape (and therefore all its angles) is completely determined — there is only one possible triangle with those three side lengths, so no angle measurements are needed.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two right-angled triangles both have the same hypotenuse length and the same length for one other corresponding side. State which congruency condition proves the triangles are congruent.', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'right angle-hypotenuse-side'], explanation: 'RHS (right angle-hypotenuse-side) applies specifically to right-angled triangles when the hypotenuse and one other side match.' },
        { difficulty: 'Hard', question: 'Sipho says that if two triangles have all three pairs of corresponding angles equal (AAA), they must be congruent. Is he correct? Explain, using an example.', answer: 'No — AAA only proves the triangles are similar (same shape), not congruent (same shape AND size). For example, a triangle with angles 60°, 60°, 60° and sides all 4 cm has exactly the same angles as one with sides all 8 cm, but the two triangles are clearly different sizes, so AAA alone cannot guarantee congruency.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In the triangle shown, all three sides were measured before construction: DE = 6 cm, EF = 9 cm and DF = 11 cm, with no angles given beforehand. State which construction/congruency condition applies to this triangle.', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle — this is the SSS (side-side-side) condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 128,150 67.6,110.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="53.8" y="125.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="97.8" y="125.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="84" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="128" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="67.6" cy="110.8" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">D</text><text x="131" y="163" font-size="12" fill="#0f1f3d">F</text><text x="67.6" y="100.8" font-size="12" fill="#0f1f3d" text-anchor="middle">E</text></svg>' },
        { difficulty: 'Medium', question: 'The triangle shown was constructed with GH = 7 cm, HI = 9 cm and the included angle H = 55°. State which construction/congruency condition applies.', answer: 'SAS (two sides and the included angle)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'two sides and the included angle'], explanation: 'Two side lengths (GH and HI) and the angle between them (angle H) are given — this is the SAS condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,150 130,150 78.4,76.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 116.2,130.3" fill="none" stroke="#2563eb" stroke-width="2"/><text x="111.1" y="137.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55°</text><text x="95" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="112.2" y="115.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><circle cx="60" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="78.4" cy="76.3" r="2.5" fill="#0f1f3d"/><text x="52" y="163" font-size="12" fill="#0f1f3d">G</text><text x="133" y="163" font-size="12" fill="#0f1f3d">H</text><text x="78.4" y="66.3" font-size="12" fill="#0f1f3d" text-anchor="middle">I</text></svg>' },
        { difficulty: 'Medium', question: 'A right-angled triangle shown has a right angle at J, hypotenuse KL = 13 cm, and side JK = 5 cm. State which construction/congruency condition applies, and calculate the length of side JL.', answer: 'RHS; JL = 12 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '12', '12 cm', 'RHS, 12 cm'], explanation: 'This is the RHS condition (right angle, hypotenuse, one side known). By Pythagoras: 5² + JL² = 13², so JL² = 169 − 25 = 144, giving JL = 12 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,160 90,160 40,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="65" y="178" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="75" y="96" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">13 cm</text><circle cx="40" cy="160" r="2.5" fill="#0f1f3d"/><circle cx="90" cy="160" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="40" r="2.5" fill="#0f1f3d"/><text x="26" y="164" font-size="12" fill="#0f1f3d">J</text><text x="95" y="176" font-size="12" fill="#0f1f3d">K</text><text x="26" y="42" font-size="12" fill="#0f1f3d">L</text></svg>' },
        { difficulty: 'Hard', question: 'A quadrilateral shown has interior angles of 75°, 105°, 80° and a fourth angle labelled 90°. A learner claims this is correctly constructed. Check the angle sum and state whether the learner is correct.', answer: 'No, the learner is incorrect — the four angles should sum to 360°, but 75° + 105° + 80° + 90° = 350°, which is 10° short of 360°. The construction (or the labelled angle) must contain an error.', checkMode: 'self', explanation: '75 + 105 + 80 + 90 = 350, not 360, so the quadrilateral as labelled is not geometrically valid.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">105°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">80°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered constructing triangles, quadrilaterals and applying congruency conditions.' },
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
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 9 cm, 11 cm and 17 cm. Check whether these three lengths can actually form a triangle before starting.', answer: 'Yes — the two shorter sides, 9 cm + 11 cm = 20 cm, which is greater than the longest side, 17 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 9 + 11 = 20. Since 20 is greater than the longest side (17), the triangle is possible.' },
        { difficulty: 'Medium', question: 'A triangle must be constructed with XY = 7 cm, angle X = 45° and angle Y = 65° (ASA). Explain the order of steps needed, and state the size of the third angle.', answer: 'Draw XY = 7 cm as the base with a ruler. Use a protractor to construct a 45° angle at X and a 65° angle at Y, both measured from the base XY. Extend the two new arms until they meet — that intersection is the third vertex, Z. The third angle is 180° − 45° − 65° = 70°.', checkMode: 'self', explanation: 'Angles in a triangle sum to 180°, so the third angle = 180° − 45° − 65° = 70°.' },
        { difficulty: 'Easy-Medium', question: 'A right-angled triangle must be constructed with the hypotenuse 10 cm and one other side 6 cm (RHS). Describe how the third side is found, and give its length.', answer: 'Draw the 6 cm side, then construct a 90° angle at one endpoint using a protractor. Set a compass to 10 cm, place the point on the opposite endpoint of the 6 cm side, and draw an arc crossing the perpendicular arm — this locates the third vertex. By Pythagoras, the third side is 8 cm, since 6² + 8² = 36 + 64 = 100 = 10².', checkMode: 'self', explanation: 'Using a² + b² = c²: 6² + b² = 10², so b² = 100 − 36 = 64, giving b = 8 cm.' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 4 cm, 5 cm and 11 cm. Show whether this is possible, and if not, explain exactly what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 4 cm + 5 cm = 9 cm, are less than the longest side, 11 cm. If attempted, an arc of radius 4 cm from one end of the 11 cm base and an arc of radius 5 cm from the other end would not be long enough to reach each other, so they would never cross and no third vertex could be found.', checkMode: 'self', explanation: '4 + 5 = 9, which is less than 11, so the two arcs cannot meet above the base — no valid triangle exists.' },
        { difficulty: 'Medium', question: 'A quadrilateral JKLM must be constructed by first splitting it into two triangles along diagonal JL. If JL = 8 cm, and triangle JKL has JK = 5 cm and KL = 6 cm, explain why triangle JKL can be constructed using SSS.', answer: 'All three sides of triangle JKL are known — JK = 5 cm, KL = 6 cm and JL = 8 cm — so the SSS method can be used directly: draw JL as a base, then swing a 5 cm arc from J and a 6 cm arc from L to locate K where they cross.', checkMode: 'self', explanation: 'Checking the triangle inequality: 5 + 6 = 11 > 8, so the triangle JKL is valid and constructible by SSS.' },
        { difficulty: 'Medium', question: 'Explain the general method for constructing a quadrilateral when all four sides and one diagonal are known, using your own words.', answer: 'Draw the known diagonal first, since it splits the quadrilateral into two triangles that share that diagonal as a common side. Construct the first triangle using SSS with the diagonal and the two sides on that side of the figure. Then construct the second triangle on the other side of the same diagonal, using SSS with the diagonal and the remaining two sides. Joining all the vertices in order completes the quadrilateral.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral has interior angles of 90°, 100°, 85° and an unknown fourth angle. Calculate the size of the fourth angle so the quadrilateral can be constructed correctly.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 degrees'], explanation: 'The angles of a quadrilateral sum to 360°: 360° − 90° − 100° − 85° = 85°.' },
        { difficulty: 'Hard', question: 'A quadrilateral WXYZ must be constructed with WX = 9 cm, XY = 12 cm, angle X = 90°, and diagonal WY = 15 cm. Explain how knowing WY in advance helps confirm the construction of triangle WXY before the rest of the quadrilateral is added.', answer: 'Triangle WXY can be constructed first using SAS (WX = 9 cm, angle X = 90°, XY = 12 cm), and then WY can be checked against Pythagoras as a verification: 9² + 12² = 81 + 144 = 225 = 15², which matches the given diagonal of 15 cm exactly — confirming the right angle at X was constructed accurately before adding vertex Z to complete the quadrilateral.', checkMode: 'self', explanation: 'Pythagoras confirms consistency: 9² + 12² = 15², so WY = 15 cm is correct for a right angle at X.' },
        { difficulty: 'Medium', question: 'Describe, step by step, how to bisect an angle of 96° using only a compass and ruler, and state the size of each resulting half.', answer: 'Place the compass on the vertex and draw an arc crossing both arms of the 96° angle. From each of those two crossing points, draw arcs of equal radius that intersect inside the angle. Draw a line from the vertex through this intersection point — this bisects the angle into two equal halves of 48° each.', checkMode: 'self', explanation: 'Bisecting divides the angle into two equal parts: 96° ÷ 2 = 48°.' },
        { difficulty: 'Medium', question: 'Without using a protractor, describe how to construct a 22,5° angle using only a compass and ruler.', answer: 'First construct a 90° angle (perpendicular line). Bisect it to get a 45° angle. Bisect the 45° angle again to get a 22,5° angle.', checkMode: 'self', explanation: '90° ÷ 2 = 45°, then 45° ÷ 2 = 22,5° — two successive bisections of a constructed 90° angle.' },
        { difficulty: 'Easy', question: 'What is the correct term for a ray from a vertex that divides an angle into two exactly equal parts?', answer: 'angle bisector', checkMode: 'auto', correctAnswer: 'angle bisector', correctAnswers: ['angle bisector', 'the angle bisector', 'bisector'], explanation: 'An angle bisector is a ray from the vertex that splits the angle into two exactly equal halves.' },
        { difficulty: 'Hard', question: 'Explain how a 135° angle can be constructed without a protractor, using only compass constructions of 90° and 45°.', answer: 'Construct a 90° angle at the required vertex along a straight base line. Then, using the same vertex, construct a 45° angle (a 90° angle bisected) immediately adjacent to the first 90° angle, sharing one arm. The two angles placed side by side combine to give a single 135° angle.', checkMode: 'self', explanation: '90° + 45° = 135°.' },
        { difficulty: 'Easy', question: 'Which congruency condition applies when a triangle is constructed using two given angles and the side enclosed between them?', answer: 'ASA', checkMode: 'auto', correctAnswer: 'ASA', correctAnswers: ['ASA', 'asa', 'angle-side-angle'], explanation: 'ASA (angle-side-angle) is used when two angles and the included side between them are known.' },
        { difficulty: 'Medium', question: 'Two triangles each have all three corresponding side lengths equal. Explain which congruency condition proves they are congruent, and why no angles need to be measured.', answer: 'SSS (side-side-side) proves the triangles are congruent, because once all three side lengths of a triangle are fixed, its shape (and therefore all its angles) is completely determined — there is only one possible triangle with those three side lengths, so no angle measurements are needed.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two right-angled triangles both have the same hypotenuse length and the same length for one other corresponding side. State which congruency condition proves the triangles are congruent.', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'right angle-hypotenuse-side'], explanation: 'RHS (right angle-hypotenuse-side) applies specifically to right-angled triangles when the hypotenuse and one other side match.' },
        { difficulty: 'Hard', question: 'Lerato says that if two triangles have two pairs of corresponding sides equal plus one pair of equal angles that is NOT between those sides (SSA), they must be congruent. Is she correct? Explain, using an example.', answer: 'No — SSA does not guarantee congruency, because with two given sides and a non-included angle, it is sometimes possible to swing the compass arc to two different valid positions for the third vertex, producing two different triangles that both satisfy the same SSA data. Unlike SAS, ASA and RHS, SSA is not a reliable congruency condition.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In the triangle shown, all three sides were measured before construction: PQ = 5 cm, QR = 6 cm and PR = 8 cm, with no angles given beforehand. State which construction/congruency condition applies to this triangle.', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle — this is the SSS (side-side-side) condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 136,150 79.8,105.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="59.9" y="123" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="107.9" y="123" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="88" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="136" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.8" cy="105.1" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">P</text><text x="139" y="163" font-size="12" fill="#0f1f3d">R</text><text x="79.8" y="95.1" font-size="12" fill="#0f1f3d" text-anchor="middle">Q</text></svg>' },
        { difficulty: 'Medium', question: 'The triangle shown was constructed with ST = 8 cm, TU = 7 cm and the included angle T = 70°. State which construction/congruency condition applies.', answer: 'SAS (two sides and the included angle)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'two sides and the included angle'], explanation: 'Two side lengths (ST and TU) and the angle between them (angle T) are given — this is the SAS condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 130,150 106.1,84.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 121.8,127.4" fill="none" stroke="#2563eb" stroke-width="2"/><text x="113.9" y="135.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="90" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="126.1" y="119.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text><circle cx="50" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="106.1" cy="84.2" r="2.5" fill="#0f1f3d"/><text x="42" y="163" font-size="12" fill="#0f1f3d">S</text><text x="133" y="163" font-size="12" fill="#0f1f3d">T</text><text x="106.1" y="74.2" font-size="12" fill="#0f1f3d" text-anchor="middle">U</text></svg>' },
        { difficulty: 'Medium', question: 'A right-angled triangle shown has a right angle at V, hypotenuse UW = 25 cm, and side UV = 7 cm. State which construction/congruency condition applies, and calculate the length of side VW.', answer: 'RHS; VW = 24 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '24', '24 cm', 'RHS, 24 cm'], explanation: 'This is the RHS condition (right angle, hypotenuse, one side known). By Pythagoras: 7² + VW² = 25², so VW² = 625 − 49 = 576, giving VW = 24 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,170 78.5,170 40,38" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="160" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.3" y="188" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="69.3" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">25 cm</text><circle cx="40" cy="170" r="2.5" fill="#0f1f3d"/><circle cx="78.5" cy="170" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="38" r="2.5" fill="#0f1f3d"/><text x="26" y="174" font-size="12" fill="#0f1f3d">V</text><text x="83.5" y="186" font-size="12" fill="#0f1f3d">U</text><text x="26" y="40" font-size="12" fill="#0f1f3d">W</text></svg>' },
        { difficulty: 'Hard', question: 'A quadrilateral shown has interior angles of 85°, 95°, 70° and a fourth angle labelled 120°. A learner claims this is correctly constructed. Check the angle sum and state whether the learner is correct.', answer: 'No, the learner is incorrect — the four angles should sum to 360°, but 85° + 95° + 70° + 120° = 370°, which is 10° more than 360°. The construction (or the labelled angle) must contain an error.', checkMode: 'self', explanation: '85 + 95 + 70 + 120 = 370, not 360, so the quadrilateral as labelled is not geometrically valid.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">85°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">95°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">120°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently construct triangles, quadrilaterals and apply congruency conditions.' },
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
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 7 cm, 9 cm and 14 cm. Check whether these three lengths can actually form a triangle before starting.', answer: 'Yes — the two shorter sides, 7 cm + 9 cm = 16 cm, which is greater than the longest side, 14 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 7 + 9 = 16. Since 16 is greater than the longest side (14), the triangle is possible.' },
        { difficulty: 'Medium', question: 'A triangle must be constructed with MN = 9 cm, angle M = 70° and angle N = 55° (ASA). Explain the order of steps needed, and state the size of the third angle.', answer: 'Draw MN = 9 cm as the base with a ruler. Use a protractor to construct a 70° angle at M and a 55° angle at N, both measured from the base MN. Extend the two new arms until they meet — that intersection is the third vertex, O. The third angle is 180° − 70° − 55° = 55°.', checkMode: 'self', explanation: 'Angles in a triangle sum to 180°, so the third angle = 180° − 70° − 55° = 55°.' },
        { difficulty: 'Easy-Medium', question: 'A right-angled triangle must be constructed with the hypotenuse 17 cm and one other side 8 cm (RHS). Describe how the third side is found, and give its length.', answer: 'Draw the 8 cm side, then construct a 90° angle at one endpoint using a protractor. Set a compass to 17 cm, place the point on the opposite endpoint of the 8 cm side, and draw an arc crossing the perpendicular arm — this locates the third vertex. By Pythagoras, the third side is 15 cm, since 8² + 15² = 64 + 225 = 289 = 17².', checkMode: 'self', explanation: 'Using a² + b² = c²: 8² + b² = 17², so b² = 289 − 64 = 225, giving b = 15 cm.' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 3 cm, 5 cm and 10 cm. Show whether this is possible, and if not, explain exactly what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 3 cm + 5 cm = 8 cm, are less than the longest side, 10 cm. If attempted, an arc of radius 3 cm from one end of the 10 cm base and an arc of radius 5 cm from the other end would not be long enough to reach each other, so they would never cross and no third vertex could be found.', checkMode: 'self', explanation: '3 + 5 = 8, which is less than 10, so the two arcs cannot meet above the base — no valid triangle exists.' },
        { difficulty: 'Medium', question: 'A quadrilateral EFGH must be constructed by first splitting it into two triangles along diagonal EG. If EG = 10 cm, and triangle EFG has EF = 7 cm and FG = 8 cm, explain why triangle EFG can be constructed using SSS.', answer: 'All three sides of triangle EFG are known — EF = 7 cm, FG = 8 cm and EG = 10 cm — so the SSS method can be used directly: draw EG as a base, then swing a 7 cm arc from E and an 8 cm arc from G to locate F where they cross.', checkMode: 'self', explanation: 'Checking the triangle inequality: 7 + 8 = 15 > 10, so the triangle EFG is valid and constructible by SSS.' },
        { difficulty: 'Medium', question: 'A builder needs to mark out a quadrilateral plot given all four boundary lengths and one diagonal. Explain, in your own words, the general method for constructing a quadrilateral from this information.', answer: 'Draw the known diagonal first, since it splits the quadrilateral into two triangles that share that diagonal as a common side. Construct the first triangle using SSS with the diagonal and the two sides on that side of the figure. Then construct the second triangle on the other side of the same diagonal, using SSS with the diagonal and the remaining two sides. Joining all the vertices in order completes the quadrilateral (plot boundary).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A quadrilateral has interior angles of 70°, 110°, 95° and an unknown fourth angle. Calculate the size of the fourth angle so the quadrilateral can be constructed correctly.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 degrees'], explanation: 'The angles of a quadrilateral sum to 360°: 360° − 70° − 110° − 95° = 85°.' },
        { difficulty: 'Hard', question: 'A quadrilateral RSTU must be constructed with RS = 10 cm, ST = 24 cm, angle S = 90°, and diagonal RT = 26 cm. Explain how knowing RT in advance helps confirm the construction of triangle RST before the rest of the quadrilateral is added.', answer: 'Triangle RST can be constructed first using SAS (RS = 10 cm, angle S = 90°, ST = 24 cm), and then RT can be checked against Pythagoras as a verification: 10² + 24² = 100 + 576 = 676 = 26², which matches the given diagonal of 26 cm exactly — confirming the right angle at S was constructed accurately before adding vertex U to complete the quadrilateral.', checkMode: 'self', explanation: 'Pythagoras confirms consistency: 10² + 24² = 26², so RT = 26 cm is correct for a right angle at S.' },
        { difficulty: 'Medium', question: 'Describe, step by step, how to bisect an angle of 72° using only a compass and ruler, and state the size of each resulting half.', answer: 'Place the compass on the vertex and draw an arc crossing both arms of the 72° angle. From each of those two crossing points, draw arcs of equal radius that intersect inside the angle. Draw a line from the vertex through this intersection point — this bisects the angle into two equal halves of 36° each.', checkMode: 'self', explanation: 'Bisecting divides the angle into two equal parts: 72° ÷ 2 = 36°.' },
        { difficulty: 'Medium', question: 'Without using a protractor, describe how to construct a 7,5° angle using only a compass and ruler.', answer: 'First construct a 60° angle using the equilateral-triangle compass method. Bisect it to get 30°, bisect that to get 15°, then bisect the 15° angle again to get a 7,5° angle.', checkMode: 'self', explanation: '60° ÷ 2 = 30°, 30° ÷ 2 = 15°, then 15° ÷ 2 = 7,5° — three successive bisections of a constructed 60° angle.' },
        { difficulty: 'Easy', question: 'What is the correct term for the point at which the three angle bisectors of a triangle meet?', answer: 'incentre', checkMode: 'auto', correctAnswer: 'incentre', explanation: 'The incentre is the single point inside a triangle where all three angle bisectors intersect.' },
        { difficulty: 'Hard', question: 'Explain how a 165° angle can be constructed without a protractor, using only compass constructions of 120° and 45°.', answer: 'Construct a 120° angle at the required vertex (two adjacent 60° angles placed side by side). Then, using the same vertex, construct a 45° angle (a 90° angle bisected) immediately adjacent to the 120° angle, sharing one arm. The two angles placed side by side combine to give a single 165° angle.', checkMode: 'self', explanation: '120° + 45° = 165°.' },
        { difficulty: 'Easy', question: 'Which congruency condition applies specifically and only to right-angled triangles, using the hypotenuse and one other side?', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'right angle-hypotenuse-side'], explanation: 'RHS (right angle-hypotenuse-side) is the condition reserved for right-angled triangles where the hypotenuse and one other side are known.' },
        { difficulty: 'Medium', question: 'Two triangles each have two pairs of corresponding angles equal and the side between those angles equal. Explain which congruency condition proves they are congruent.', answer: 'ASA (angle-side-angle) proves the triangles are congruent, because once two angles and the included side are fixed, the third angle is automatically determined (angles sum to 180°) and the remaining two sides are forced into a single possible triangle shape and size.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two triangles each have all three corresponding side lengths equal. State which congruency condition proves the triangles are congruent.', answer: 'SSS', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'side-side-side'], explanation: 'SSS (side-side-side) applies when all three corresponding sides of two triangles are equal.' },
        { difficulty: 'Hard', question: 'Thabo says that knowing two triangles have two pairs of equal sides and one pair of equal angles is always enough to prove congruency, regardless of where the equal angle is positioned. Is he correct? Explain.', answer: 'No — this is only reliably true when the equal angle is the INCLUDED angle between the two known sides (SAS). If the equal angle is not between the two known sides (SSA), the two triangles are not guaranteed to be congruent, since the third side can sometimes be drawn in two different valid positions.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In the triangle shown, all three sides were measured before construction: AB = 7 cm, BC = 8 cm and AC = 10 cm, with no angles given beforehand. State which construction/congruency condition applies to this triangle.', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle — this is the SSS (side-side-side) condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 140,150 82.5,94.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="61.3" y="117.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="111.3" y="117.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="90" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="140" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="82.5" cy="94.4" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">A</text><text x="143" y="163" font-size="12" fill="#0f1f3d">C</text><text x="82.5" y="84.4" font-size="12" fill="#0f1f3d" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'The triangle shown was constructed with CD = 10 cm, DE = 8 cm and the included angle D = 45°. State which construction/congruency condition applies.', answer: 'SAS (two sides and the included angle)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'two sides and the included angle'], explanation: 'Two side lengths (CD and DE) and the angle between them (angle D) are given — this is the SAS condition.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 130,150 79.1,99.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 113,133" fill="none" stroke="#2563eb" stroke-width="2"/><text x="109.5" y="138.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45°</text><text x="85" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="112.6" y="126.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.1" cy="99.1" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">C</text><text x="133" y="163" font-size="12" fill="#0f1f3d">D</text><text x="79.1" y="89.1" font-size="12" fill="#0f1f3d" text-anchor="middle">E</text></svg>' },
        { difficulty: 'Medium', question: 'A right-angled triangle shown has a right angle at F, hypotenuse EG = 15 cm, and side EF = 9 cm. State which construction/congruency condition applies, and calculate the length of side FG.', answer: 'RHS; FG = 12 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '12', '12 cm', 'RHS, 12 cm'], explanation: 'This is the RHS condition (right angle, hypotenuse, one side known). By Pythagoras: 9² + FG² = 15², so FG² = 225 − 81 = 144, giving FG = 12 cm.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,165 121,165 40,57" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="155" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="80.5" y="183" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="90.5" y="107" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><circle cx="40" cy="165" r="2.5" fill="#0f1f3d"/><circle cx="121" cy="165" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="57" r="2.5" fill="#0f1f3d"/><text x="26" y="169" font-size="12" fill="#0f1f3d">F</text><text x="126" y="181" font-size="12" fill="#0f1f3d">E</text><text x="26" y="59" font-size="12" fill="#0f1f3d">G</text></svg>' },
        { difficulty: 'Hard', question: 'A quadrilateral shown has interior angles of 60°, 120°, 65° and a fourth angle labelled 105°. A learner claims this is correctly constructed. Check the angle sum and state whether the learner is correct.', answer: 'No, the learner is incorrect — the four angles should sum to 360°, but 60° + 120° + 65° + 105° = 350°, which is 10° short of 360°. The construction (or the labelled angle) must contain an error.', checkMode: 'self', explanation: '60 + 120 + 65 + 105 = 350, not 360, so the quadrilateral as labelled is not geometrically valid.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">120°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">105°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">65°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You have a strong command of triangle and quadrilateral construction and congruency reasoning.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
