import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation roles) ────────────────────────────────────
// mirror line / red axis  → red     (#dc2626)
// object / original (S3) → blue    (#2563eb)
// image (S1 & S3)        → green   (#16a34a)
// original (S2) / centre → orange  (#ea580c)
// image (S2)             → purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformations',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Reflection',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>reflection</strong> flips a shape over a mirror line, called the <strong>line of reflection</strong>. The image is <strong>congruent</strong> to (exactly the same size and shape as) the object, but reversed. Every point on the image is the same perpendicular distance from the mirror line as its matching point on the object.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('mirror line')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('image')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key properties of a reflection</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Mirror line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed line over which the shape is flipped. Common mirror lines are x = k and y = k.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equal distance</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The object and image are the same perpendicular distance from the mirror line, on opposite sides.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Congruent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The image is the same size and shape as the object — only its orientation (which way it faces) changes.</p>` +
        `</div>` +

        `</div>` +

        // ── How to reflect over a vertical or horizontal line ─────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to reflect a point</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Identify the mirror line')} — note whether it is vertical (x = k) or horizontal (y = k).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Find the perpendicular distance')} — measure how far the ${bl('object')} point is from the ${re('mirror line')}. Only the coordinate that is perpendicular to the line changes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Place the image')} — go the same distance on the opposite side of the ${re('mirror line')}. The other coordinate stays the same.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">Reflecting over the line <strong>x = k</strong> only changes the x-coordinate: new x = 2k − (old x). Reflecting over <strong>y = k</strong> only changes the y-coordinate: new y = 2k − (old y). The other coordinate stays the same.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point at (3, 5) is reflected over the line x = 7. Find the image.',
          answer: `Image point = ${gr('(11, 5)')}`,
          steps: [
            `Identify the ${re('mirror line')}: <strong>x = 7</strong> — this is a vertical line, so only the x-coordinate changes.`,
            `Find the perpendicular distance from the ${bl('object')} to the ${re('mirror line')}: distance = 7 − ${bl('3')} = <strong>4 units</strong>.`,
            `The ${gr('image')} is 4 units on the other side of the mirror: 7 + 4 = ${gr('11')}.`,
            `The y-coordinate stays the same: <strong>5</strong>.`,
            `<strong>Answer:</strong> ${gr('Image point = (11, 5)')} ✓`,
          ],
        },
        {
          question: 'A point at (2, 8) is reflected over the line y = 3. Find the image.',
          answer: `Image point = ${gr('(2, −2)')}`,
          steps: [
            `Identify the ${re('mirror line')}: <strong>y = 3</strong> — this is a horizontal line, so only the y-coordinate changes.`,
            `Find the perpendicular distance from the ${bl('object')} to the ${re('mirror line')}: distance = ${bl('8')} − 3 = <strong>5 units</strong>.`,
            `The ${gr('image')} is 5 units below the mirror line: 3 − 5 = ${gr('−2')}.`,
            `The x-coordinate stays the same: <strong>2</strong>.`,
            `<strong>Answer:</strong> ${gr('Image point = (2, −2)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — reflect a point over a vertical line ───────────────────
        {
          difficulty: 'Easy',
          question: 'A point at (6, 4) is reflected over the line x = 2. Find the image point.',
          answer: '(-2, 4)',
          checkMode: 'auto',
          correctAnswer: '(-2, 4)',
          correctAnswers: ['(-2, 4)', '(-2,4)', '(−2, 4)', '(−2,4)'],
          explanation: 'Mirror line: x = 2 (vertical — only x changes).\nDistance from object to mirror: 6 − 2 = 4 units.\nImage is 4 units on the other side: 2 − 4 = −2.\ny stays the same: 4.\nImage point = (−2, 4) ✓',
        },

        // ── Q2 Medium — reflect two points over different mirror lines ────────
        {
          difficulty: 'Medium',
          question: 'Reflect each point over the given mirror line.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Point (1, 5) reflected over x = 4',
              correctAnswer: '(7, 5)',
              correctAnswers: ['(7, 5)', '(7,5)'],
              explanation: 'Mirror line: x = 4 (vertical).\nDistance: 4 − 1 = 3 units.\nImage x: 4 + 3 = 7.\ny stays the same: 5.\nImage = (7, 5) ✓',
            },
            {
              label: 'b) Point (3, 10) reflected over y = 6',
              correctAnswer: '(3, 2)',
              correctAnswers: ['(3, 2)', '(3,2)'],
              explanation: 'Mirror line: y = 6 (horizontal).\nDistance: 10 − 6 = 4 units.\nImage y: 6 − 4 = 2.\nx stays the same: 3.\nImage = (3, 2) ✓',
            },
          ],
        },

        // ── Q3 Hard — reflect a triangle and explain properties ───────────────
        {
          difficulty: 'Hard',
          question: 'A triangle has vertices at A(1, 2), B(4, 2) and C(4, 6).\n\na) Reflect the triangle over the line x = 5 and write the image coordinates.\nb) What stays the same and what changes after a reflection?\nc) Is the image congruent to the object? Explain.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Image coordinates A', B', C'",
              correctAnswer: "A'(9,2) B'(6,2) C'(6,6)",
              correctAnswers: ["A'(9,2) B'(6,2) C'(6,6)", "A'(9, 2) B'(6, 2) C'(6, 6)", "(9,2)(6,2)(6,6)"],
              explanation: "Mirror line: x = 5 (vertical).\nA(1, 2): distance = 5 − 1 = 4. Image x = 5 + 4 = 9. A'(9, 2).\nB(4, 2): distance = 5 − 4 = 1. Image x = 5 + 1 = 6. B'(6, 2).\nC(4, 6): distance = 5 − 4 = 1. Image x = 5 + 1 = 6. C'(6, 6). ✓",
            },
            {
              label: 'b) What stays the same and what changes?',
              checkMode: 'self',
              answer: 'The y-coordinates (perpendicular to mirror) and the distances stay the same. The x-coordinates change — each point moves to the opposite side of the mirror line at the same distance.',
            },
            {
              label: 'c) Is the image congruent to the object?',
              checkMode: 'self',
              answer: 'Yes — reflection preserves size and shape. The image is congruent to the object; only its orientation is reversed (it is a mirror image).',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect a point and a shape over a vertical or horizontal mirror line on a coordinate grid" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Coordinate grid showing point (3,5) reflected over the mirror line x=7 (red) to image point (11,5) (green), with the object in blue and the equal distances labelled" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translation',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>translation</strong> slides a shape to a new position without rotating or flipping it. We describe a translation using a <strong>horizontal shift</strong> and a <strong>vertical shift</strong>, often written as an ordered pair or vector.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horizontal shift')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertical shift')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('original')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('image')}</span>` +
        `</div>` +

        // ── Key ideas ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horizontal shift</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add the ${bl('horizontal shift')} to the x-coordinate. Positive moves right; negative moves left.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertical shift</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add the ${gr('vertical shift')} to the y-coordinate. Positive moves up; negative moves down.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Shape is unchanged</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${pu('image')} is congruent to the ${or('original')} — size, shape, and orientation are all preserved.</p>` +
        `</div>` +

        `</div>` +

        // ── How to translate a point ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to translate a point by (a, b)</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">(x, y) → (x + ${bl('a')}, y + ${gr('b')})</p>` +
        `</div>` +

        // ── Sign reminder ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sign reminder</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the ${bl('horizontal shift')} is <strong>negative</strong>, the shape moves <strong>left</strong>. If the ${gr('vertical shift')} is <strong>negative</strong>, the shape moves <strong>down</strong>. Always add (even if the value is negative).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point at (4, 6) is translated by (3, −2). Find the new position.',
          answer: `New position = ${pu('(7, 4)')}`,
          steps: [
            `Write the translation: ${or('(4, 6)')} translated by (${bl('3')}, ${gr('−2')}).`,
            `New x: ${or('4')} + ${bl('3')} = ${pu('7')}.`,
            `New y: ${or('6')} + ${gr('(−2)')} = ${pu('4')}.`,
            `<strong>Answer:</strong> New position = ${pu('(7, 4)')} ✓`,
          ],
        },
        {
          question: 'Sipho translates a shape with one vertex at (−2, 5) by (5, 3). Find the new vertex position.',
          answer: `New position = ${pu('(3, 8)')}`,
          steps: [
            `Write the translation: ${or('(−2, 5)')} translated by (${bl('5')}, ${gr('3')}).`,
            `New x: ${or('−2')} + ${bl('5')} = ${pu('3')}.`,
            `New y: ${or('5')} + ${gr('3')} = ${pu('8')}.`,
            `<strong>Answer:</strong> New vertex position = ${pu('(3, 8)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — translate a single point ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A point at (7, 3) is translated by (−4, 5). Find the new position.',
          answer: '(3, 8)',
          checkMode: 'auto',
          correctAnswer: '(3, 8)',
          correctAnswers: ['(3, 8)', '(3,8)'],
          explanation: 'New x: 7 + (−4) = 3.\nNew y: 3 + 5 = 8.\nNew position = (3, 8) ✓',
        },

        // ── Q5 Medium — two translations ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Apply each translation.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Point (−3, 4) translated by (6, −7)',
              correctAnswer: '(3, -3)',
              correctAnswers: ['(3, -3)', '(3,-3)', '(3, −3)', '(3,−3)'],
              explanation: 'New x: −3 + 6 = 3.\nNew y: 4 + (−7) = −3.\nNew position = (3, −3) ✓',
            },
            {
              label: 'b) Point (5, −2) translated by (−5, 2)',
              correctAnswer: '(0, 0)',
              correctAnswers: ['(0, 0)', '(0,0)', 'origin'],
              explanation: 'New x: 5 + (−5) = 0.\nNew y: −2 + 2 = 0.\nNew position = (0, 0) — the origin ✓',
            },
          ],
        },

        // ── Q6 Hard — translate a quadrilateral and reason about properties ───
        {
          difficulty: 'Hard',
          question: 'A quadrilateral has vertices at P(1, 1), Q(4, 1), R(4, 3) and S(1, 3).\n\na) Translate the quadrilateral by (−3, 4) and write all image vertices.\nb) What are the lengths of PQ and P\'Q\'? What does this tell you?\nc) Describe the translation that would move the image back to the original position.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Image vertices P', Q', R', S'",
              correctAnswer: "P'(-2,5) Q'(1,5) R'(1,7) S'(-2,7)",
              correctAnswers: ["P'(-2,5) Q'(1,5) R'(1,7) S'(-2,7)", "P'(−2,5) Q'(1,5) R'(1,7) S'(−2,7)"],
              explanation: "Translation: (−3, 4).\nP(1,1): (1−3, 1+4) = P'(−2, 5).\nQ(4,1): (4−3, 1+4) = Q'(1, 5).\nR(4,3): (4−3, 3+4) = R'(1, 7).\nS(1,3): (1−3, 3+4) = S'(−2, 7). ✓",
            },
            {
              label: 'b) Length of PQ and length of P\'Q\'',
              correctAnswer: '3',
              correctAnswers: ['3', '3 units', 'both 3', 'both 3 units'],
              explanation: "PQ: from (1,1) to (4,1) → length = 4 − 1 = 3 units.\nP'Q': from (−2,5) to (1,5) → length = 1 − (−2) = 3 units.\nBoth are 3 units — translation preserves length (the image is congruent to the object). ✓",
            },
            {
              label: 'c) Reverse translation',
              checkMode: 'self',
              answer: 'Translate by (3, −4) — the opposite of each component. This undoes the original translation and returns every point to its starting position.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to translate a point and a shape on a coordinate grid using a horizontal and vertical shift" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Coordinate grid showing the original point (4,6) in orange translated by (3,−2) with the horizontal shift in blue and vertical shift in green to the image point (7,4) in purple" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotation',
      icon: '↺',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>rotation</strong> turns a shape around a fixed <strong>centre point</strong> by a given angle, in a clockwise or anticlockwise direction. Common rotations are 90°, 180° and 270°. The shape and image are <strong>congruent</strong> — only the orientation changes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('centre of rotation')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rotated image')}</span>` +
        `</div>` +

        // ── Rotation rules about the origin ──────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rotation rules about the origin (0, 0)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#2563eb;">90° clockwise</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (y, −x)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#2563eb;">90° anticlockwise</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−y, x)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#dc2626;">180°</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−x, −y)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#16a34a;">270° clockwise</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−y, x) &nbsp;[same as 90° anticlockwise]</p>` +
        `</div>` +

        `</div>` +

        // ── Properties ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Properties of rotation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Centre of rotation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed ${or('point')} around which the shape turns. The most common centre is the origin (0, 0).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Angle and direction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Always state the angle (e.g. 90°) and the direction (clockwise or anticlockwise).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Congruent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('image')} is the same size and shape as the ${bl('original')} — only its orientation changes.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Clockwise vs anticlockwise</p>` +
        `<p style="margin:0;color:#1e3a8a;">Clockwise is the same direction as clock hands turn. Anticlockwise is the opposite. A <strong>90° clockwise</strong> rotation is the same as a <strong>270° anticlockwise</strong> rotation — they land on the same image.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point at (3, 2) is rotated 90° clockwise around the origin. Find the new position using the rule (x, y) → (y, −x).',
          answer: `${gr('New point = (2, −3)')}`,
          steps: [
            `${bl('Original point:')} (${bl('3')}, ${bl('2')}).`,
            `Apply the 90° clockwise rule: (x, y) → (y, −x).`,
            `New x = ${bl('y')} = ${gr('2')}.`,
            `New y = −${bl('x')} = −${bl('3')} = ${gr('−3')}.`,
            `<strong>Answer:</strong> ${gr('New point = (2, −3)')} ✓`,
          ],
        },
        {
          question: 'Lerato rotates a shape 180° around the origin. A point starts at (4, −5). Find its new position using the rule (x, y) → (−x, −y).',
          answer: `${gr('New point = (−4, 5)')}`,
          steps: [
            `${bl('Original point:')} (${bl('4')}, ${bl('−5')}).`,
            `Apply the 180° rotation rule: (x, y) → (−x, −y).`,
            `New x = −${bl('4')} = ${gr('−4')}.`,
            `New y = −(${bl('−5')}) = ${gr('5')}.`,
            `<strong>Answer:</strong> ${gr('New point = (−4, 5)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — 90° clockwise rotation ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A point at (5, 3) is rotated 90° clockwise around the origin. Use the rule (x, y) → (y, −x) to find the new position.',
          answer: '(3, -5)',
          checkMode: 'auto',
          correctAnswer: '(3, -5)',
          correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'],
          explanation: 'Rule: (x, y) → (y, −x).\nNew x = y = 3.\nNew y = −x = −5.\nNew point = (3, −5) ✓',
        },

        // ── Q8 Medium — two rotations about the origin ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Apply each rotation about the origin.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Point (4, 7) rotated 90° anticlockwise — rule (x, y) → (−y, x)',
              correctAnswer: '(-7, 4)',
              correctAnswers: ['(-7, 4)', '(-7,4)', '(−7, 4)', '(−7,4)'],
              explanation: 'Rule: (x, y) → (−y, x).\nNew x = −y = −7.\nNew y = x = 4.\nNew point = (−7, 4) ✓',
            },
            {
              label: 'b) Point (−3, 6) rotated 180° — rule (x, y) → (−x, −y)',
              correctAnswer: '(3, -6)',
              correctAnswers: ['(3, -6)', '(3,-6)', '(3, −6)', '(3,−6)'],
              explanation: 'Rule: (x, y) → (−x, −y).\nNew x = −(−3) = 3.\nNew y = −6.\nNew point = (3, −6) ✓',
            },
          ],
        },

        // ── Q9 Hard — rotate a triangle by 90° and 180° ───────────────────────
        {
          difficulty: 'Hard',
          question: 'A triangle has vertices at A(2, 1), B(5, 1) and C(5, 4).\n\na) Rotate the triangle 90° clockwise about the origin. Write all image vertices.\nb) Rotate the original triangle 180° about the origin. Write all image vertices.\nc) What rotation would map the 90° clockwise image back to the original?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) 90° clockwise image vertices A', B', C'",
              correctAnswer: "A'(1,-2) B'(1,-5) C'(4,-5)",
              correctAnswers: ["A'(1,-2) B'(1,-5) C'(4,-5)", "A'(1,−2) B'(1,−5) C'(4,−5)"],
              explanation: "Rule: (x, y) → (y, −x).\nA(2,1) → A'(1, −2).\nB(5,1) → B'(1, −5).\nC(5,4) → C'(4, −5). ✓",
            },
            {
              label: "b) 180° image vertices A'', B'', C''",
              correctAnswer: "A''(-2,-1) B''(-5,-1) C''(-5,-4)",
              correctAnswers: ["A''(-2,-1) B''(-5,-1) C''(-5,-4)", "A''(−2,−1) B''(−5,−1) C''(−5,−4)"],
              explanation: "Rule: (x, y) → (−x, −y).\nA(2,1) → A''(−2, −1).\nB(5,1) → B''(−5, −1).\nC(5,4) → C''(−5, −4). ✓",
            },
            {
              label: "c) Rotation to map 90° clockwise image back to original",
              checkMode: 'self',
              answer: "A 90° anticlockwise rotation (or equivalently 270° clockwise) about the origin maps the image back to the original position, because it undoes the 90° clockwise rotation.",
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rotate a point and a shape about the origin by 90° and 180° using coordinate rules, with clockwise and anticlockwise examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Coordinate grid showing the original point (3,2) in blue rotated 90° clockwise about the origin (orange) to the image point (2,−3) in green, with the arc of rotation marked" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — reflection over a vertical line ────────────────────────────
    {
      number: 1,
      difficulty: 'Easy',
      question: 'A point at (2, 4) is reflected over the line x = 6. Find the image.',
      checkMode: 'auto',
      correctAnswer: '(10, 4)',
      correctAnswers: ['(10, 4)', '(10,4)'],
      explanation: 'Mirror line: x = 6 (vertical — only x changes).\nDistance from object to mirror: 6 − 2 = 4 units.\nImage is 4 units on the other side: 6 + 4 = 10.\ny stays the same: 4.\nImage = (10, 4) ✓',
    },

    // ── Q2 Medium — reflection over a horizontal line ────────────────────────
    {
      number: 2,
      difficulty: 'Medium',
      question: 'A point at (5, 9) is reflected over the line y = 4. Find the image.',
      checkMode: 'auto',
      correctAnswer: '(5, -1)',
      correctAnswers: ['(5, -1)', '(5,-1)', '(5, −1)', '(5,−1)'],
      explanation: 'Mirror line: y = 4 (horizontal — only y changes).\nDistance from object to mirror: 9 − 4 = 5 units.\nImage is 5 units on the other side: 4 − 5 = −1.\nx stays the same: 5.\nImage = (5, −1) ✓',
    },

    // ── Q3 Hard — evaluate a claim about reflection ───────────────────────────
    {
      number: 3,
      difficulty: 'Hard',
      question: 'Sipho says reflecting a point changes its distance from the mirror line. Is he correct? Explain.',
      checkMode: 'self',
      answer: 'No — the image is always the same perpendicular distance from the mirror line as the original point.',
    },

    // ── Q4 Easy — basic translation ───────────────────────────────────────────
    {
      number: 4,
      difficulty: 'Easy',
      question: 'A point at (3, 5) is translated by (2, 4). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(5, 9)',
      correctAnswers: ['(5, 9)', '(5,9)'],
      explanation: 'New x: 3 + 2 = 5.\nNew y: 5 + 4 = 9.\nNew position = (5, 9) ✓',
    },

    // ── Q5 Medium — translation with negative components ─────────────────────
    {
      number: 5,
      difficulty: 'Medium',
      question: 'A point at (−3, 6) is translated by (5, −2). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(2, 4)',
      correctAnswers: ['(2, 4)', '(2,4)'],
      explanation: 'New x: −3 + 5 = 2.\nNew y: 6 + (−2) = 4.\nNew position = (2, 4) ✓',
    },

    // ── Q6 Hard — combining two translations ──────────────────────────────────
    {
      number: 6,
      difficulty: 'Hard',
      question: 'Lerato translates a shape by (4, −3) then again by (−1, 5). What is the net translation?',
      checkMode: 'self',
      answer: 'Add the translations: (4 + (−1), −3 + 5) = (3, 2). The net translation is (3, 2).',
    },

    // ── Q7 Easy — quarter turn ────────────────────────────────────────────────
    {
      number: 7,
      difficulty: 'Easy',
      question: 'How many degrees is a quarter turn?',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 degrees'],
      explanation: 'A quarter turn = 90°. A half turn = 180°. A full turn = 360°.',
    },

    // ── Q8 Medium — 90° clockwise rotation ────────────────────────────────────
    {
      number: 8,
      difficulty: 'Medium',
      question: 'A point at (4, 1) is rotated 90° clockwise around the origin using (x, y) → (y, −x). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(1, -4)',
      correctAnswers: ['(1, -4)', '(1,-4)', '(1, −4)', '(1,−4)'],
      explanation: 'Rule: (x, y) → (y, −x).\nNew x = y = 1.\nNew y = −x = −4.\nNew point = (1, −4) ✓',
    },

    // ── Q9 Hard — 180° rotation with explanation ──────────────────────────────
    {
      number: 9,
      difficulty: 'Hard',
      question: 'Thabo rotates a point at (−2, 3) by 180° around the origin. Find the new position and explain the rule used.',
      checkMode: 'self',
      answer: 'New position = (2, −3), using the rule (x, y) → (−x, −y) for a 180° rotation.',
    },

    // ── Q10 Medium — 180° rotation ────────────────────────────────────────────
    {
      number: 10,
      difficulty: 'Medium',
      question: 'A point at (6, −4) is rotated 180° around the origin. Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(-6, 4)',
      correctAnswers: ['(-6, 4)', '(-6,4)', '(−6, 4)', '(−6,4)'],
      explanation: 'Rule: (x, y) → (−x, −y).\nNew x = −6.\nNew y = −(−4) = 4.\nNew point = (−6, 4) ✓',
    },

    // ── Q11 Hard — evaluate a claim about rotation ────────────────────────────
    {
      number: 11,
      difficulty: 'Hard',
      question: 'Amahle says rotation always changes the size of a shape. Is she correct? Explain.',
      checkMode: 'self',
      answer: 'No — rotation keeps the shape congruent (same size), only changing its orientation.',
    },

    // ── Q12 Hard — combined translation and reflection ────────────────────────
    {
      number: 12,
      difficulty: 'Hard',
      question: "A triangle's vertex at (1, 2) is translated by (3, 1) then reflected over the line x = 8. Find the final position.",
      checkMode: 'self',
      answer: 'After translation: (1 + 3, 2 + 1) = (4, 3). Distance from mirror line x = 8: 8 − 4 = 4 units. Reflected position: 8 + 4 = 12. Final position = (12, 3).',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered transformations.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 21, message: 'Outstanding! A perfect score — you have completely mastered transformations for Grade 7. Keep it up!' },
    { minScore: 17, message: 'Excellent work! You have a very strong grasp of transformations. Review any missed parts and you will have it perfect.' },
    { minScore: 12, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 7, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
