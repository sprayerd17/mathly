import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Section 1 — Reflection) ─────────────────────────────────
// mirror line  → red     (#dc2626)
// object       → blue    (#2563eb)
// image        → green   (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

// ─── Colour helpers (Section 2 — Translation) ────────────────────────────────
// horizontal movement → blue    (#2563eb)   (reuses bl)
// vertical movement   → green   (#16a34a)   (reuses gr)
// original            → orange  (#ea580c)
// image               → purple  (#7c3aed)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Colour helpers (Section 3 — Rotation) ───────────────────────────────────
// clockwise            → blue    (#2563eb)   (reuses bl)
// anticlockwise        → red     (#dc2626)   (reuses re)
// centre of rotation   → orange  (#ea580c)   (reuses or)
// degrees              → green   (#16a34a)   (reuses gr)

export const topicData: TopicData = {
  title: 'Transformations',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Reflection',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>reflection</strong> flips a shape over a <strong>mirror line</strong>. The image is the same size as the object but faces the opposite direction. Every point on the image is the same distance from the mirror line as the matching point on the object. Mirror lines can be vertical, horizontal or diagonal.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('mirror line')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('image')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key properties of reflections</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Mirror line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The line of symmetry over which the shape is flipped. Every point on the image is the same distance from the ${re('mirror line')} as the matching point on the ${bl('object')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Object</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The original shape before the transformation is applied.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Image</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The new shape after the transformation. Same size as the object but in the flipped position.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Equal distances from the mirror line</p>` +
        `<p style="margin:0;color:#1e3a8a;">To find the ${gr('image')} of any point, measure the <strong>perpendicular distance</strong> from the point to the ${re('mirror line')}, then place the image the same distance on the other side. The ${re('mirror line')} sits exactly halfway between ${bl('object')} and ${gr('image')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point at (2, 3) is reflected over a vertical mirror line at x = 5. Find the image point.',
          answer: `${gr('Image point is (8, 3)')}`,
          steps: [
            `Identify the ${re('mirror line')}: x = 5 (a vertical line).`,
            `Find the distance from the ${bl('object')} point to the ${re('mirror line')}: 5 − 2 = <strong>3 units</strong>.`,
            `The ${gr('image')} is 3 units on the other side of the ${re('mirror line')}: 5 + 3 = <strong>8</strong>.`,
            `The y-coordinate stays the same in a vertical reflection.`,
            `<strong>Answer:</strong> ${gr('Image point is (8, 3)')} ✓`,
          ],
        },
        {
          question: 'Sipho reflects a triangle over a horizontal mirror line. What happens to the shape?',
          answer: `${gr('The shape flips upside down — same size, orientation mirrored vertically')}`,
          steps: [
            `A horizontal ${re('mirror line')} runs left-to-right, so the flip is in the vertical direction.`,
            `The ${gr('image')} flips upside down — what was at the top of the ${bl('object')} is now at the bottom of the ${gr('image')}.`,
            `<strong>Size stays the same</strong> — a reflection does not stretch or shrink the shape.`,
            `<strong>Answer:</strong> ${gr('The shape flips upside down. Size stays the same but orientation is mirrored vertically.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Coordinate grid showing a point object in blue reflected over a vertical mirror line in red to produce an image point in green, with equal distances marked on both sides" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect a shape over vertical, horizontal and diagonal mirror lines on a coordinate grid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translation',
      icon: '➡️',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>translation</strong> slides a shape to a new position without turning or flipping it. Every point moves the same distance in the same direction. We describe a translation using how far <strong>left/right</strong> and <strong>up/down</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horizontal movement')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertical movement')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('original')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('image')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key properties of translations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Left / Right</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${bl('Right')}</strong> → add to the x-coordinate. <strong>${bl('Left')}</strong> → subtract from the x-coordinate.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Up / Down</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Up')}</strong> → add to the y-coordinate. <strong>${gr('Down')}</strong> → subtract from the y-coordinate.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Shape unchanged</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${pu('image')} is the same size and orientation as the ${or('original')} — only the position changes.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#5b21b6;margin-bottom:6px;">Every point moves the same way</p>` +
        `<p style="margin:0;color:#4c1d95;">To translate a shape, apply the <strong>same</strong> ${bl('left/right')} and ${gr('up/down')} movement to <em>every</em> point. The shape does not rotate or flip — it slides as one unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "A shape's corner at (2, 3) is translated 4 right and 3 up. Find the new position.",
          answer: `${pu('New position is (6, 6)')}`,
          steps: [
            `Start with the ${or('original')} corner at (2, 3).`,
            `Apply the ${bl('horizontal movement')}: 2 + 4 = <strong>6</strong> (moving right adds to x).`,
            `Apply the ${gr('vertical movement')}: 3 + 3 = <strong>6</strong> (moving up adds to y).`,
            `<strong>Answer:</strong> ${pu('New position is (6, 6)')} ✓`,
          ],
        },
        {
          question: 'Lerato translates a point at (7, 5) by 2 left and 4 down. Find the new position.',
          answer: `${pu('New position is (5, 1)')}`,
          steps: [
            `Start with the ${or('original')} point at (7, 5).`,
            `Apply the ${bl('horizontal movement')}: 7 − 2 = <strong>5</strong> (moving left subtracts from x).`,
            `Apply the ${gr('vertical movement')}: 5 − 4 = <strong>1</strong> (moving down subtracts from y).`,
            `<strong>Answer:</strong> ${pu('New position is (5, 1)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Coordinate grid showing an original shape in orange sliding to a new position as a purple image, with horizontal movement shown in blue and vertical movement shown in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to translate a shape on a coordinate grid by moving it a given number of units right or left and up or down" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotation',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>rotation</strong> turns a shape around a fixed <strong>centre point</strong>. We describe rotation by the <strong>angle turned</strong> and the <strong>direction</strong> — clockwise or anticlockwise. A quarter turn is ${gr('90°')}, a half turn is ${gr('180°')}, and a full turn is ${gr('360°')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('clockwise')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('anticlockwise')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('centre of rotation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('degrees')}</span>` +
        `</div>` +

        // ── Quarter-turn compass reference ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Compass direction reference (${bl('clockwise')} turns)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Clockwise')} from North</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">North → East → South → West → North<br>Each step = ${gr('90°')} ${bl('clockwise')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Anticlockwise')} from North</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">North → West → South → East → North<br>Each step = ${gr('90°')} ${re('anticlockwise')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Half turn — ${gr('180°')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${gr('180°')} turn lands in the <strong>opposite direction</strong> regardless of ${bl('clockwise')} or ${re('anticlockwise')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">The centre of rotation stays fixed</p>` +
        `<p style="margin:0;color:#78350f;">Every point in the shape rotates around the same ${or('centre of rotation')} by exactly the same angle. The distance from each point to the ${or('centre')} does not change — only the direction changes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'An arrow points East. Rotate it 90° clockwise. What direction does it point now?',
          answer: `${bl('The arrow points South')}`,
          steps: [
            `Start: the arrow points <strong>East</strong>.`,
            `A ${gr('90°')} ${bl('clockwise')} turn moves one step ${bl('clockwise')} around the compass: East → South.`,
            `<strong>Answer:</strong> ${bl('The arrow points South')} ✓`,
          ],
        },
        {
          question: 'Amahle rotates a shape 180°. What happens to the image?',
          answer: `${gr('The shape turns upside down — the result is the same whether clockwise or anticlockwise')}`,
          steps: [
            `A ${gr('180°')} rotation is a <strong>half turn</strong>.`,
            `The shape turns upside down — every point ends up in the position directly opposite the ${or('centre of rotation')}.`,
            `A ${gr('180°')} turn ${bl('clockwise')} and a ${gr('180°')} turn ${re('anticlockwise')} give exactly the <strong>same result</strong> because both are half turns.`,
            `<strong>Answer:</strong> ${gr('The shape turns upside down regardless of clockwise or anticlockwise direction, since both give the same result at 180°.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing an arrow being rotated 90 degrees clockwise around a centre of rotation in orange, with clockwise direction shown in blue and the angle labelled in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rotate a shape 90 and 180 degrees clockwise and anticlockwise around a fixed centre of rotation" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What type of transformation flips a shape over a mirror line?',
      answer: 'reflection',
      checkMode: 'auto',
      correctAnswer: 'reflection',
      explanation: 'A reflection flips a shape over a mirror line. The image is the same size and shape but faces the opposite direction.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What type of transformation slides a shape without turning it?',
      answer: 'translation',
      checkMode: 'auto',
      correctAnswer: 'translation',
      explanation: 'A translation slides a shape to a new position without rotating or flipping it. Every point moves the same distance in the same direction.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (3, 4) is reflected over a vertical mirror line at x = 6. Find the image point.',
      answer: '(9, 4)',
      checkMode: 'auto',
      correctAnswer: '(9, 4)',
      correctAnswers: ['(9, 4)', '(9,4)', '9, 4', '9,4'],
      explanation: 'Distance from x = 3 to mirror line x = 6: 6 − 3 = 3 units.\nImage is 3 units on the other side: 6 + 3 = 9.\nThe y-coordinate stays the same in a vertical reflection.\nAnswer: (9, 4) ✓',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (5, 2) is translated 3 right and 2 up. Find the new position.',
      answer: '(8, 4)',
      checkMode: 'auto',
      correctAnswer: '(8, 4)',
      correctAnswers: ['(8, 4)', '(8,4)', '8, 4', '8,4'],
      explanation: 'Horizontal movement (right): 5 + 3 = 8.\nVertical movement (up): 2 + 2 = 4.\nAnswer: (8, 4) ✓',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says reflecting a shape changes its size. Is he correct? Explain.',
      answer: 'No — reflection keeps the same size, only the orientation changes to a mirror image.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many degrees is a half turn?',
      answer: '180',
      checkMode: 'auto',
      correctAnswer: '180',
      correctAnswers: ['180', '180°', '180 degrees'],
      explanation: 'A half turn is 180°. It is exactly half of a full turn (360°).',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'An arrow points North. Rotate it 90 degrees anticlockwise. Which direction does it point?',
      answer: 'West',
      checkMode: 'auto',
      correctAnswer: 'West',
      correctAnswers: ['West', 'west'],
      explanation: 'Anticlockwise from North: North → West → South → East.\nOne step anticlockwise (90°) from North lands on West.\nAnswer: West ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A shape is rotated 270 degrees clockwise. Lerato says this is the same as rotating 90 degrees anticlockwise. Is she correct? Explain.',
      answer: 'Yes — 270 clockwise and 90 anticlockwise both end at the same position since 360 − 270 = 90.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo translates a point at (4, 6) by 5 left and 3 down, then translates again by 2 right and 1 up. Find the final position.',
      answer: '(1, 4)',
      checkMode: 'auto',
      correctAnswer: '(1, 4)',
      correctAnswers: ['(1, 4)', '(1,4)', '1, 4', '1,4'],
      explanation: 'First translation — 5 left and 3 down:\n(4 − 5, 6 − 3) = (−1, 3)\nSecond translation — 2 right and 1 up:\n(−1 + 2, 3 + 1) = (1, 4)\nAnswer: (1, 4) ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered transformations.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
