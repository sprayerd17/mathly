import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

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
        'Point (3, 5) reflected over the mirror line x = 7 to image point (11, 5), with the equal 4-unit distances from the mirror line labelled on each side.',

      diagramSvg:
        '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="10" y1="130" x2="215" y2="130" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="20" y1="130" x2="20" y2="20" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="118" y1="20" x2="118" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>' +
        '<text x="118" y="14" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">x = 7</text>' +
        '<line x1="62" y1="60" x2="174" y2="60" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,3"/>' +
        '<line x1="62" y1="54" x2="62" y2="66" stroke="#9ca3af" stroke-width="1"/>' +
        '<line x1="118" y1="54" x2="118" y2="66" stroke="#9ca3af" stroke-width="1"/>' +
        '<line x1="174" y1="54" x2="174" y2="66" stroke="#9ca3af" stroke-width="1"/>' +
        '<text x="90" y="50" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">4</text>' +
        '<text x="146" y="50" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">4</text>' +
        '<circle cx="62" cy="60" r="4" fill="#2563eb"/>' +
        '<text x="62" y="42" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">(3, 5)</text>' +
        '<circle cx="174" cy="60" r="4" fill="#16a34a"/>' +
        '<text x="174" y="42" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">(11, 5)</text>' +
        '<line x1="62" y1="126" x2="62" y2="134" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="62" y="146" font-size="10" fill="#374151" text-anchor="middle">3</text>' +
        '<line x1="174" y1="126" x2="174" y2="134" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="174" y="146" font-size="10" fill="#374151" text-anchor="middle">11</text>' +
        '<text x="120" y="164" font-size="11" fill="#0f1f3d" text-anchor="middle" font-weight="700">Reflection over x = 7</text>' +
        '</svg>',
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
        'The original point (4, 6) translated by (3, −2), showing the horizontal shift and vertical shift separately to reach the image point (7, 4).',

      diagramSvg:
        '<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="15" y1="140" x2="165" y2="140" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="25" y1="140" x2="25" y2="20" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="89" y1="136" x2="89" y2="144" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="89" y="155" font-size="10" fill="#374151" text-anchor="middle">4</text>' +
        '<line x1="137" y1="136" x2="137" y2="144" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="137" y="155" font-size="10" fill="#374151" text-anchor="middle">7</text>' +
        '<line x1="21" y1="44" x2="29" y2="44" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="14" y="48" font-size="10" fill="#374151" text-anchor="end">6</text>' +
        '<line x1="21" y1="76" x2="29" y2="76" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="14" y="80" font-size="10" fill="#374151" text-anchor="end">4</text>' +
        '<line x1="89" y1="44" x2="132" y2="44" stroke="#2563eb" stroke-width="2.5"/>' +
        '<polygon points="137,44 129,39 129,49" fill="#2563eb"/>' +
        '<text x="113" y="36" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">+3</text>' +
        '<line x1="137" y1="44" x2="137" y2="71" stroke="#16a34a" stroke-width="2.5"/>' +
        '<polygon points="137,76 132,68 142,68" fill="#16a34a"/>' +
        '<text x="152" y="62" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">−2</text>' +
        '<circle cx="89" cy="44" r="4" fill="#ea580c"/>' +
        '<text x="89" y="30" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">(4, 6)</text>' +
        '<circle cx="137" cy="76" r="4" fill="#7c3aed"/>' +
        '<text x="137" y="94" font-size="12" font-weight="700" fill="#7c3aed" text-anchor="middle">(7, 4)</text>' +
        '<text x="100" y="166" font-size="11" fill="#0f1f3d" text-anchor="middle" font-weight="700">Translation by (3, −2)</text>' +
        '</svg>',
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
        'The original point (3, 2) rotated 90° clockwise about the origin to the image point (2, −3), with the arc of rotation marked.',

      diagramSvg:
        '<svg viewBox="0 0 190 190" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="20" y1="90" x2="160" y2="90" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="70" y1="15" x2="70" y2="175" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="70" y1="90" x2="124" y2="54" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="70" y1="90" x2="106" y2="144" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<path d="M 90,76.7 A 24,24 0 0 1 83.3,110" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="83.3,110 76,104 89,104" fill="#ea580c"/>' +
        '<text x="103" y="98" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">90°</text>' +
        '<circle cx="70" cy="90" r="4" fill="#ea580c"/>' +
        '<text x="60" y="86" font-size="11" font-weight="700" fill="#ea580c" text-anchor="end">O</text>' +
        '<circle cx="124" cy="54" r="4" fill="#2563eb"/>' +
        '<text x="130" y="48" font-size="12" font-weight="700" fill="#2563eb">(3, 2)</text>' +
        '<circle cx="106" cy="144" r="4" fill="#16a34a"/>' +
        '<text x="112" y="150" font-size="12" font-weight="700" fill="#16a34a">(2, −3)</text>' +
        '<line x1="124" y1="86" x2="124" y2="94" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="124" y="105" font-size="10" fill="#374151" text-anchor="middle">3</text>' +
        '<line x1="106" y1="86" x2="106" y2="94" stroke="#374151" stroke-width="1.5"/>' +
        '<text x="106" y="105" font-size="10" fill="#374151" text-anchor="middle">2</text>' +
        '<text x="95" y="185" font-size="11" fill="#0f1f3d" text-anchor="middle" font-weight="700">90° clockwise rotation about the origin</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry',
      title: 'Symmetry',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>line of symmetry</strong> divides a 2D figure into two halves that are exact mirror images of each other — fold the figure along that line and the two halves land perfectly on top of one another. You already know how to test a single line using the fold test. In Grade 7, you must be able to find and draw <strong>every</strong> line of symmetry a figure has, including figures with several lines of symmetry and figures with none at all.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('line of symmetry')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('figure')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('matching halves')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Lines of symmetry in different figures</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Regular polygons</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A regular polygon with n equal sides always has exactly n lines of symmetry — for example, a regular pentagon (5 sides) has 5, and a regular octagon (8 sides) has 8.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Multiple lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Some figures have several lines of symmetry running in different directions — vertical, horizontal, and diagonal — all at once.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">No lines of symmetry</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Many figures — scalene triangles, irregular shapes, and most letters of the alphabet — have zero lines of symmetry.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find and draw all lines of symmetry ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to find and draw all the lines of symmetry in a figure</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Look for candidate lines')} — vertical, horizontal, and diagonal lines through vertices, corners, or the midpoints of sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Apply the fold test')} to each candidate — check whether every point on one side has a matching point the same distance away on the other side.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Draw and count')} — draw each confirmed line of symmetry with a ruler through the figure, and count them to state the total.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The regular polygon rule — and its exceptions</p>` +
        `<p style="margin:0;color:#1e3a8a;">For a <strong>regular</strong> polygon (all sides and all angles equal) with n sides, the number of lines of symmetry is always n — a circle, with infinitely many "sides", has infinitely many lines of symmetry. But the rule needs regularity: a scalene triangle still has 3 sides, yet 0 lines of symmetry, because its sides are not equal. Many letters — F, G, J, L, N, P, Q, R, S and Z — also have 0 lines of symmetry, even though some of them (like N, S and Z) have rotational symmetry instead.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A regular octagon (8 equal sides and 8 equal angles) has all of its lines of symmetry drawn in. How many lines of symmetry does it have, and what two types of lines are they?',
          answer: `${or('8 lines of symmetry')}: 4 through pairs of opposite vertices, and 4 through the midpoints of pairs of opposite sides`,
          steps: [
            `A regular polygon with n equal sides has n lines of symmetry — for an octagon, n = 8.`,
            `Because 8 is an even number, the lines split evenly into two groups: half pass through two opposite vertices, and half pass through the midpoints of two opposite sides.`,
            `8 ÷ 2 = 4, so there are 4 vertex-to-vertex lines and 4 midpoint-to-midpoint lines.`,
            `<strong>Answer:</strong> ${or('8 lines of symmetry')} in total ✓`,
          ],
        },
        {
          question: 'The capital letters N and A are drawn in their standard block form. Does either letter have a line of symmetry?',
          answer: `N has ${re('0 lines of symmetry')}; A has ${gr('1 line of symmetry')} (vertical)`,
          steps: [
            `Try folding N vertically, horizontally, and diagonally — in every case, the diagonal stroke and the two uprights fail to land on top of each other.`,
            `N has ${re('0 lines of symmetry')} — even though turning it 180° maps it onto itself, that is rotational symmetry, not line symmetry.`,
            `Try folding A vertically down the middle — the two slanted strokes and the crossbar match exactly.`,
            `<strong>Answer:</strong> A has ${gr('1 line of symmetry')}: a single vertical line down the centre ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — regular polygon rule ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A regular pentagon has 5 equal sides and 5 equal angles. How many lines of symmetry does it have?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5', 'five'],
          explanation: 'A regular polygon with n equal sides has n lines of symmetry. A pentagon has 5 sides, so it has 5 lines of symmetry — each running from one vertex through the centre to the midpoint of the opposite side.',
        },

        // ── Q2 Medium — letters H and T ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Consider the capital block letters H and T.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many lines of symmetry does the letter H have?',
              correctAnswer: '2',
              correctAnswers: ['2', 'two'],
              explanation: 'H has both a vertical line of symmetry (down the middle of the two uprights) and a horizontal line of symmetry (through the middle of the crossbar) — 2 lines in total.',
            },
            {
              label: 'b) How many lines of symmetry does the letter T have?',
              correctAnswer: '1',
              correctAnswers: ['1', 'one'],
              explanation: 'T has only 1 line of symmetry — a single vertical line down the centre of the upright and the middle of the top bar.',
            },
          ],
        },

        // ── Q3 Hard — why the polygon rule needs regularity ────────────────────
        {
          difficulty: 'Hard',
          question: 'A regular hexagon has 6 lines of symmetry and a regular nonagon (9 sides) has 9 lines of symmetry, but a scalene triangle (3 unequal sides) has 0 lines of symmetry, even though it also has 3 sides. Explain why the "n sides = n lines of symmetry" rule works for regular polygons but not for the scalene triangle.',
          answer: 'The rule "n sides = n lines of symmetry" only applies to regular polygons, where all sides and all angles are equal. This equality is exactly what makes every candidate fold line produce two matching mirror-image halves. A scalene triangle has 3 sides, like an equilateral triangle, but its three sides are all different lengths, so no fold line — vertical, horizontal, or otherwise — can ever produce two halves that are true mirror images of each other. Counting the number of sides alone is not enough; the sides (and angles) must actually be equal for the polygon rule to apply.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to find and draw all the lines of symmetry in regular polygons and letters of the alphabet, including examples with several lines of symmetry and examples with none" />',

      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="110,30 176.6,78.4 151.2,156.6 68.8,156.6 43.4,78.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="110" y1="30" x2="110" y2="156.6" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="176.6" y1="78.4" x2="56.1" y2="117.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="151.2" y1="156.6" x2="76.7" y2="54.2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="68.8" y1="156.6" x2="143.3" y2="54.2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="43.4" y1="78.4" x2="163.9" y2="117.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<text x="110" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Regular pentagon</text>' +
        '<text x="110" y="188" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">5 lines of symmetry</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — ENLARGEMENTS AND REDUCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargement-reduction',
      title: 'Enlargements and Reductions',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>enlargement</strong> changes the size of a shape using a <strong>scale factor</strong>, without changing its shape. If the scale factor is greater than 1, the shape gets bigger; if it is between 0 and 1, the shape gets smaller — this is often called a <strong>reduction</strong>, though it is still classified as a type of enlargement. The image is <strong>similar</strong> to the object: corresponding angles stay exactly equal, and corresponding sides are all in the same ratio, the scale factor.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('image')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('centre of enlargement')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('scale factor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Shape is preserved</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('image')} is similar to the ${bl('object')} — every angle stays exactly the same. Only the size changes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Centre of enlargement</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed ${or('point')} that every image point lies on a straight ray from, through the matching object point.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Scale factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${pu('Scale factor')} = image length ÷ corresponding object length — the same ratio applies to every pair of corresponding sides.</p>` +
        `</div>` +

        `</div>` +

        // ── How to draw an enlargement/reduction on a grid ─────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to draw an enlargement or reduction on a grid</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Mark the centre of enlargement')} — this is the fixed point the shape is enlarged or reduced from.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Draw a ray')} from the centre through each vertex of the ${bl('object')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Mark and join the image points')} — along each ray, multiply the distance from the centre to the object vertex by the ${pu('scale factor')}, mark the new point that distance from the centre, then join the image vertices in the same order.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Coordinate rules</p>` +
        `<p style="margin:0;color:#1e3a8a;">From the <strong>origin</strong> with scale factor k: (x, y) → (kx, ky). From a <strong>general centre</strong> (a, b) with scale factor k: (x, y) → (a + k(x − a), b + k(y − b)). If k &gt; 1, the shape is enlarged (bigger). If 0 &lt; k &lt; 1, the shape is reduced (smaller). Either way, the object and image are similar, not congruent, unless k = 1.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Triangle ABC has vertices A(1, 1), B(1, 3) and C(3, 1). It is enlarged by scale factor 2 from the origin. Find the image coordinates and describe how to draw it on a grid.',
          answer: `A'(2, 2), B'(2, 6), C'(6, 2)`,
          steps: [
            `The ${or('centre of enlargement')} is the origin (0, 0), and the scale factor is 2, so use the rule (x, y) → (2x, 2y).`,
            `A(1, 1) → A'(2, 2). B(1, 3) → B'(2, 6). C(3, 1) → C'(6, 2).`,
            `To draw it: from the origin, draw a ray through each ${bl('object')} vertex. Because the scale factor is 2, each ${gr('image')} vertex lies exactly twice as far from the origin as the matching object vertex, on the same ray.`,
            `<strong>Answer:</strong> Image vertices = A'(2, 2), B'(2, 6), C'(6, 2) — the image is similar to the object, with every side twice as long ✓`,
          ],
        },
        {
          question: 'A model car is an enlargement of a real car. A door on the real car is 90 cm tall, and the corresponding door on the model is 15 cm tall. Find the scale factor, then use it to find the length of a bonnet that measures 150 cm on the real car.',
          answer: `Scale factor = ${pu('1/6')}; model bonnet = 25 cm`,
          steps: [
            `${pu('Scale factor')} = image length ÷ object length = 15 ÷ 90 = 1/6.`,
            `Because the model is smaller than the real car, this is a reduction (the scale factor is between 0 and 1).`,
            `Model bonnet = real bonnet × scale factor = 150 × 1/6 = 25 cm.`,
            `<strong>Answer:</strong> Scale factor = ${pu('1/6')}; model bonnet = ${gr('25 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — enlarge a point from the origin ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Point M is at (4, 2). It is enlarged by scale factor 3 from the origin. Find the coordinates of the image M′.',
          answer: '(12, 6)',
          checkMode: 'auto',
          correctAnswer: '(12, 6)',
          correctAnswers: ['(12, 6)', '(12,6)'],
          explanation: 'Enlargement from the origin by scale factor 3: (x, y) → (3x, 3y).\nM(4, 2) → M\'(3×4, 3×2) = (12, 6) ✓',
        },

        // ── Q2 Medium — scale factor as a ratio of corresponding sides ────────
        {
          difficulty: 'Medium',
          question: 'A triangle is enlarged. A side on the object measures 5 cm, and the corresponding side on the image measures 20 cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) What is the scale factor of the enlargement?',
              correctAnswer: '4',
              correctAnswers: ['4', 'x4', 'scale factor 4'],
              explanation: 'Scale factor = image length ÷ object length = 20 ÷ 5 = 4.',
            },
            {
              label: 'b) Another side on the object measures 3 cm. What is the length of the corresponding side on the image?',
              correctAnswer: '12',
              correctAnswers: ['12', '12cm', '12 cm'],
              explanation: 'Image length = object length × scale factor = 3 × 4 = 12 cm.',
            },
          ],
        },

        // ── Q3 Hard — congruent vs similar after a reduction ──────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangle is reduced by a scale factor of 1/4 to create a smaller rectangle. Explain whether the object and image are congruent or similar, and describe what happens to the angles and the side lengths.',
          answer: 'The object and image are similar, not congruent (unless the scale factor is exactly 1). A reduction by scale factor 1/4 keeps the same shape: all the angles stay exactly the same size (a rectangle\'s angles are still all 90°), but every side length is multiplied by 1/4, so the image is a quarter of the size of the object in every direction. Because the size has changed, the two rectangles are not congruent — but because the shape (and all angles) is preserved, they are similar.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to enlarge and reduce a shape on a grid using rays from a centre of enlargement, applying a scale factor, and comparing corresponding sides and angles between the object and the image" />',

      diagramSvg:
        '<svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="30" y1="190" x2="30" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="50" y1="190" x2="50" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="70" y1="190" x2="70" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="90" y1="190" x2="90" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="110" y1="190" x2="110" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="130" y1="190" x2="130" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="150" y1="190" x2="150" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="170" y1="190" x2="170" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="190" y1="190" x2="190" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="190" x2="190" y2="190" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="170" x2="190" y2="170" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="150" x2="190" y2="150" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="130" x2="190" y2="130" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="110" x2="190" y2="110" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="90" x2="190" y2="90" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="70" x2="190" y2="70" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="50" x2="190" y2="50" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="30" x2="190" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="190" x2="190" y2="190" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="30" y1="190" x2="30" y2="30" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="30" y1="190" x2="70" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="30" y1="190" x2="70" y2="70" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="30" y1="190" x2="150" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<polygon points="50,170 50,130 90,170" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
        '<polygon points="70,150 70,70 150,150" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="30" cy="190" r="4" fill="#ea580c"/>' +
        '<text x="8" y="184" font-size="11" font-weight="700" fill="#ea580c">O</text>' +
        '<text x="54" y="166" font-size="10" font-weight="700" fill="#2563eb">A(1,1)</text>' +
        '<text x="54" y="126" font-size="10" font-weight="700" fill="#2563eb">B(1,3)</text>' +
        '<text x="94" y="166" font-size="10" font-weight="700" fill="#2563eb">C(3,1)</text>' +
        '<text x="74" y="146" font-size="10" font-weight="700" fill="#16a34a">A\'(2,2)</text>' +
        '<text x="74" y="66" font-size="10" font-weight="700" fill="#16a34a">B\'(2,6)</text>' +
        '<text x="154" y="146" font-size="10" font-weight="700" fill="#16a34a">C\'(6,2)</text>' +
        '<text x="110" y="16" font-size="12" font-weight="700" fill="#7c3aed" text-anchor="middle">Scale factor k = 2</text>' +
        '</svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — reflection over a vertical line ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A point at (2, 4) is reflected over the line x = 6. Find the image.',
      checkMode: 'auto',
      correctAnswer: '(10, 4)',
      correctAnswers: ['(10, 4)', '(10,4)'],
      explanation: 'Mirror line: x = 6 (vertical — only x changes).\nDistance from object to mirror: 6 − 2 = 4 units.\nImage is 4 units on the other side: 6 + 4 = 10.\ny stays the same: 4.\nImage = (10, 4) ✓',
    },

    // ── Q2 Medium — reflection over a horizontal line ────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (5, 9) is reflected over the line y = 4. Find the image.',
      checkMode: 'auto',
      correctAnswer: '(5, -1)',
      correctAnswers: ['(5, -1)', '(5,-1)', '(5, −1)', '(5,−1)'],
      explanation: 'Mirror line: y = 4 (horizontal — only y changes).\nDistance from object to mirror: 9 − 4 = 5 units.\nImage is 5 units on the other side: 4 − 5 = −1.\nx stays the same: 5.\nImage = (5, −1) ✓',
    },

    // ── Q3 Hard — evaluate a claim about reflection ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says reflecting a point changes its distance from the mirror line. Is he correct? Explain.',
      checkMode: 'self',
      answer: 'No — the image is always the same perpendicular distance from the mirror line as the original point.',
    },

    // ── Q4 Easy — basic translation ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A point at (3, 5) is translated by (2, 4). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(5, 9)',
      correctAnswers: ['(5, 9)', '(5,9)'],
      explanation: 'New x: 3 + 2 = 5.\nNew y: 5 + 4 = 9.\nNew position = (5, 9) ✓',
    },

    // ── Q5 Medium — translation with negative components ─────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (−3, 6) is translated by (5, −2). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(2, 4)',
      correctAnswers: ['(2, 4)', '(2,4)'],
      explanation: 'New x: −3 + 5 = 2.\nNew y: 6 + (−2) = 4.\nNew position = (2, 4) ✓',
    },

    // ── Q6 Hard — combining two translations ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato translates a shape by (4, −3) then again by (−1, 5). What is the net translation?',
      checkMode: 'self',
      answer: 'Add the translations: (4 + (−1), −3 + 5) = (3, 2). The net translation is (3, 2).',
    },

    // ── Q7 Easy — quarter turn ────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many degrees is a quarter turn?',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 degrees'],
      explanation: 'A quarter turn = 90°. A half turn = 180°. A full turn = 360°.',
    },

    // ── Q8 Medium — 90° clockwise rotation ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (4, 1) is rotated 90° clockwise around the origin using (x, y) → (y, −x). Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(1, -4)',
      correctAnswers: ['(1, -4)', '(1,-4)', '(1, −4)', '(1,−4)'],
      explanation: 'Rule: (x, y) → (y, −x).\nNew x = y = 1.\nNew y = −x = −4.\nNew point = (1, −4) ✓',
    },

    // ── Q9 Hard — 180° rotation with explanation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo rotates a point at (−2, 3) by 180° around the origin. Find the new position and explain the rule used.',
      checkMode: 'self',
      answer: 'New position = (2, −3), using the rule (x, y) → (−x, −y) for a 180° rotation.',
    },

    // ── Q10 Medium — 180° rotation ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point at (6, −4) is rotated 180° around the origin. Find the new position.',
      checkMode: 'auto',
      correctAnswer: '(-6, 4)',
      correctAnswers: ['(-6, 4)', '(-6,4)', '(−6, 4)', '(−6,4)'],
      explanation: 'Rule: (x, y) → (−x, −y).\nNew x = −6.\nNew y = −(−4) = 4.\nNew point = (−6, 4) ✓',
    },

    // ── Q11 Hard — evaluate a claim about rotation ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says rotation always changes the size of a shape. Is she correct? Explain.',
      checkMode: 'self',
      answer: 'No — rotation keeps the shape congruent (same size), only changing its orientation.',
    },

    // ── Q12 Hard — combined translation and reflection ────────────────────────
    {
      difficulty: 'Hard',
      question: "A triangle's vertex at (1, 2) is translated by (3, 1) then reflected over the line x = 8. Find the final position.",
      checkMode: 'self',
      answer: 'After translation: (1 + 3, 2 + 1) = (4, 3). Distance from mirror line x = 8: 8 − 4 = 4 units. Reflected position: 8 + 4 = 12. Final position = (12, 3).',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS
  // Skill blocks (same relative position in every set):
  //   Block A (Q1-3)   Naming/identifying transformation type, describing a
  //                     mapping, congruency vs similarity concept
  //   Block B (Q4-7)   Reflection with coordinates (x-axis, y-axis, given line)
  //   Block C (Q8-10)  Translation with coordinates
  //   Block D (Q11-14) Rotation (90°/180°/270°) about the origin
  //   Block E (Q15-17) Enlargement/reduction with a scale factor
  //   Block F (Q18-20) Multi-step combinations / congruency vs similarity reasoning
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block A — Naming/identifying transformation type (Q1-3) ──────────
        {
          difficulty: 'Easy',
          question: 'A shape is turned around a fixed centre point by a given angle, without changing its size. What type of transformation is this?',
          answer: 'rotation',
          checkMode: 'auto',
          correctAnswer: 'rotation',
          correctAnswers: ['rotation', 'a rotation'],
          explanation: 'Turning a shape around a fixed centre point through an angle is called a rotation.',
        },
        {
          difficulty: 'Easy',
          question: 'A shape is made bigger or smaller using a scale factor, keeping the same shape. What type of transformation is this?',
          answer: 'enlargement',
          checkMode: 'auto',
          correctAnswer: 'enlargement',
          correctAnswers: ['enlargement', 'an enlargement', 'enlargement/reduction'],
          explanation: 'Changing the size of a shape by a scale factor (making it bigger or smaller while keeping the same shape) is called an enlargement. If the scale factor is less than 1, it is sometimes called a reduction, but it is still classified as an enlargement.',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle A has vertices (1, 1), (4, 1), (1, 5). Triangle B has vertices (2, 1), (5, 1), (2, 5). Describe the single transformation that maps triangle A onto triangle B.',
          answer: 'Translation by (1, 0)',
          checkMode: 'auto',
          correctAnswer: 'Translation by (1, 0)',
          correctAnswers: ['Translation by (1, 0)', 'translation (1,0)', 'translation of (1,0)', 'translate by (1,0)', '(1, 0)', '(1,0)'],
          explanation: 'Compare matching vertices: (1,1) → (2,1) is +1 in x, 0 in y. (4,1) → (5,1) is the same shift. (1,5) → (2,5) is the same shift again.\nEvery point moves by the same amount in the same direction, and the shape does not flip or turn, so this is a translation by (1, 0) ✓',
        },

        // ── Block B — Reflection with coordinates (Q4-7) ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Point P is at (4, 7). It is reflected in the x-axis, as shown. Find the coordinates of the image P\'.',
          answer: '(4, -7)',
          checkMode: 'auto',
          correctAnswer: '(4, -7)',
          correctAnswers: ['(4, -7)', '(4,-7)', '(4, −7)', '(4,−7)'],
          explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nP(4, 7) → P\'(4, −7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="160.7" font-size="11" fill="#374151">x</text><text x="32.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="26.0" y="65.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="26.0" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="152.7" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="47.3" r="4" fill="#2563eb"/><text x="126.0" y="41.3" font-size="12" font-weight="700" fill="#2563eb">P(4, 7)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Point Q is at (3, 5). It is reflected in the y-axis, as shown. Find the coordinates of the image Q\'.',
          answer: '(-3, 5)',
          checkMode: 'auto',
          correctAnswer: '(-3, 5)',
          correctAnswers: ['(-3, 5)', '(-3,5)', '(−3, 5)', '(−3,5)'],
          explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nQ(3, 5) → Q\'(−3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#374151" stroke-width="1.5"/><text x="73.7" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="131.4" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="181.1" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="75.7" y="148.0" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="75.7" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="85.7" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="156.3" cy="102.0" r="4" fill="#2563eb"/><text x="163.3" y="96.0" font-size="12" font-weight="700" fill="#2563eb">Q(3, 5)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point R is at (2, 6). It is reflected over the vertical line x = 5, as shown. Find the coordinates of the image R\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Mirror line x = 5. Distance from R to the line: 5 − 2 = 3 units.\nImage is 3 units on the other side: 5 + 3 = 8.\nThe y-coordinate stays the same.\nR\' = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="61.3" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="94.1" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="143.9" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="168.7" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="193.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="63.3" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="63.3" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="63.3" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="63.3" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="63.3" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="63.3" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="135.4" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 5</text><circle cx="94.1" cy="68.9" r="4" fill="#2563eb"/><text x="101.1" y="62.9" font-size="12" font-weight="700" fill="#2563eb">R(2, 6)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Triangle ABC has vertices A(2, 3), B(5, 3), C(5, 6), as shown. It is reflected in the x-axis. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(2,-3) B'(5,-3) C'(5,-6)",
          checkMode: 'auto',
          correctAnswer: "A'(2,-3) B'(5,-3) C'(5,-6)",
          correctAnswers: ["A'(2,-3) B'(5,-3) C'(5,-6)", "A'(2, -3) B'(5, -3) C'(5, -6)", "A'(2,−3) B'(5,−3) C'(5,−6)"],
          explanation: "Reflecting in the x-axis: (x, y) → (x, −y).\nA(2, 3) → A'(2, −3).\nB(5, 3) → B'(5, −3).\nC(5, 6) → C'(5, −6). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="69.5" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="141.0" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><polygon points="104.5,102.0 148.0,102.0 148.0,59.0" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="104.5" cy="102.0" r="4" fill="#2563eb"/><circle cx="148.0" cy="102.0" r="4" fill="#2563eb"/><circle cx="148.0" cy="59.0" r="4" fill="#2563eb"/><text x="111.5" y="96.0" font-size="12" font-weight="700" fill="#2563eb">A(2, 3)</text><text x="155.0" y="96.0" font-size="12" font-weight="700" fill="#2563eb">B(5, 3)</text><text x="155.0" y="53.0" font-size="12" font-weight="700" fill="#2563eb">C(5, 6)</text></svg>',
        },

        // ── Block C — Translation with coordinates (Q8-10) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (3, 4). It is translated 5 units right and 2 units up, as shown. Find the new coordinates of A\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Translation of (5, 2): (x, y) → (x + 5, y + 2).\nA(3, 4) → A\'(3 + 5, 4 + 2) = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="43.6" y1="188.0" x2="43.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="55.2" y1="188.0" x2="55.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="78.4" y1="188.0" x2="78.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.2" y1="188.0" x2="113.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.8" y1="188.0" x2="124.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="188.0" x2="159.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="182.8" y1="188.0" x2="182.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="194.4" y1="188.0" x2="194.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="43.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="90.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="113.2" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="136.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="159.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="182.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="206.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="60.8" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="60.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="101.6" cy="95.4" r="4" fill="#2563eb"/><line x1="101.6" y1="95.4" x2="136.2" y2="79.6" stroke="#ea580c" stroke-width="2.5"/><polygon points="136.2,79.6 132.3,84.2 130.2,79.5" fill="#ea580c"/><text x="122.3" y="95.1" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">5 right, 2 up</text><text x="108.6" y="89.4" font-size="12" font-weight="700" fill="#2563eb">A(3, 4)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle ABC has vertices A(1, 1), B(3, 1), C(1, 4), as shown. It is translated by (−2, 3). Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(-1,4) B'(1,4) C'(-1,7)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,4) B'(1,4) C'(-1,7)",
          correctAnswers: ["A'(-1,4) B'(1,4) C'(-1,7)", "A'(-1, 4) B'(1, 4) C'(-1, 7)", "A'(−1,4) B'(1,4) C'(−1,7)"],
          explanation: "Translation of (−2, 3): (x, y) → (x − 2, y + 3).\nA(1, 1) → A'(−1, 4).\nB(3, 1) → B'(1, 4).\nC(1, 4) → C'(−1, 7). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="96.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="75.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="133.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="162.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="191.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="98.5" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="98.5" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="98.5" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="98.5" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="98.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><polygon points="119.0,125.5 148.0,125.5 119.0,78.5" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="119.0" cy="125.5" r="4" fill="#2563eb"/><circle cx="148.0" cy="125.5" r="4" fill="#2563eb"/><circle cx="119.0" cy="78.5" r="4" fill="#2563eb"/><line x1="119.0" y1="125.5" x2="99.0" y2="93.1" stroke="#ea580c" stroke-width="2.5"/><polygon points="99.0,93.1 104.1,96.4 99.7,99.1" fill="#ea580c"/><text x="117.2" y="104.2" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (-2, 3)</text><text x="126.0" y="119.5" font-size="12" font-weight="700" fill="#2563eb">A(1, 1)</text><text x="155.0" y="119.5" font-size="12" font-weight="700" fill="#2563eb">B(3, 1)</text><text x="126.0" y="72.5" font-size="12" font-weight="700" fill="#2563eb">C(1, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A student translates the point (5, −2) by (−3, 4) and writes the image as (8, 2). Is this correct? If not, find the correct image.',
          answer: 'No, the correct image is (2, 2).',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)', 'No, (2,2)', 'No, the correct image is (2, 2).'],
          explanation: 'Correct rule: (x, y) → (x + (−3), y + 4).\n(5, −2) → (5 − 3, −2 + 4) = (2, 2).\nThe student added 3 instead of subtracting it for the x-coordinate, giving 8 instead of 2. The correct image is (2, 2) ✓',
        },

        // ── Block D — Rotation about the origin (Q11-14) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (4, 2). It is rotated 90° clockwise about the origin, as shown. Use the rule (x, y) → (y, −x) to find the image A\'.',
          answer: '(2, -4)',
          checkMode: 'auto',
          correctAnswer: '(2, -4)',
          correctAnswers: ['(2, -4)', '(2,-4)', '(2, −4)', '(2,−4)'],
          explanation: 'Rule: (x, y) → (y, −x).\nA(4, 2) → A\'(2, −4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="79.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="67.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="142.7" cy="92.4" r="4" fill="#2563eb"/><text x="149.7" y="86.4" font-size="12" font-weight="700" fill="#2563eb">A(4, 2)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point B is at (3, −5). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.',
          answer: '(-3, 5)',
          checkMode: 'auto',
          correctAnswer: '(-3, 5)',
          correctAnswers: ['(-3, 5)', '(-3,5)', '(−3, 5)', '(−3,5)'],
          explanation: 'Rule: (x, y) → (−x, −y).\nB(3, −5) → B\'(−3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="66.9" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-8</text><text x="78.2" y="159.7" font-size="8" fill="#9ca3af" text-anchor="end">-6</text><text x="78.2" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="78.2" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">2</text><circle cx="84.2" cy="62.9" r="3.5" fill="#ea580c"/><text x="72.2" y="76.9" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="136.4" cy="141.1" r="4" fill="#2563eb"/><text x="143.4" y="135.1" font-size="12" font-weight="700" fill="#2563eb">B(3, -5)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point C is at (2, 6). It is rotated 270° clockwise about the origin, as shown. Find the image C\' (270° clockwise gives the same image as 90° anticlockwise: (x, y) → (−y, x)).',
          answer: '(-6, 2)',
          checkMode: 'auto',
          correctAnswer: '(-6, 2)',
          correctAnswers: ['(-6, 2)', '(-6,2)', '(−6, 2)', '(−6,2)'],
          explanation: 'A 270° clockwise rotation is the same as a 90° anticlockwise rotation: (x, y) → (−y, x).\nC(2, 6) → C\'(−6, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="90.0" cy="145.0" r="3.5" fill="#ea580c"/><text x="78.0" y="159.0" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="128.7" cy="59.0" r="4" fill="#2563eb"/><text x="135.7" y="53.0" font-size="12" font-weight="700" fill="#2563eb">C(2, 6)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(4, 5), as shown. It is rotated 90° clockwise about the origin. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(2,-1) B'(2,-4) C'(5,-4)",
          checkMode: 'auto',
          correctAnswer: "A'(2,-1) B'(2,-4) C'(5,-4)",
          correctAnswers: ["A'(2,-1) B'(2,-4) C'(5,-4)", "A'(2, -1) B'(2, -4) C'(5, -4)", "A'(2,−1) B'(2,−4) C'(5,−4)"],
          explanation: "Rule for 90° clockwise: (x, y) → (y, −x).\nA(1, 2) → A'(2, −1).\nB(4, 2) → B'(2, −4).\nC(4, 5) → C'(5, −4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="84.2" cy="141.1" r="3.5" fill="#ea580c"/><text x="72.2" y="155.1" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="101.6,109.8 153.8,109.8 153.8,62.9" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="109.8" r="4" fill="#2563eb"/><circle cx="153.8" cy="109.8" r="4" fill="#2563eb"/><circle cx="153.8" cy="62.9" r="4" fill="#2563eb"/><text x="108.6" y="103.8" font-size="12" font-weight="700" fill="#2563eb">A(1, 2)</text><text x="160.8" y="103.8" font-size="12" font-weight="700" fill="#2563eb">B(4, 2)</text><text x="160.8" y="56.9" font-size="12" font-weight="700" fill="#2563eb">C(4, 5)</text></svg>',
        },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ────────
        {
          difficulty: 'Easy-Medium',
          question: 'Point P is at (2, 3). It is enlarged by scale factor 2 from the origin, as shown. Find the coordinates of the image P\'.',
          answer: '(4, 6)',
          checkMode: 'auto',
          correctAnswer: '(4, 6)',
          correctAnswers: ['(4, 6)', '(4,6)'],
          explanation: 'Enlargement from the origin by scale factor 2: (x, y) → (2x, 2y).\nP(2, 3) → P\'(2×2, 2×3) = (4, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="90.0" y1="136.4" x2="140.3" y2="69.3" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="90.0" cy="136.4" r="3.5" fill="#ea580c"/><text x="78.0" y="150.4" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="128.7" cy="84.8" r="4" fill="#2563eb"/><text x="135.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">P(2, 3)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point Q is at (4, 3). It is enlarged by scale factor 3 from the centre (1, 1), as shown. Find the coordinates of the image Q\'.',
          answer: '(10, 7)',
          checkMode: 'auto',
          correctAnswer: '(10, 7)',
          correctAnswers: ['(10, 7)', '(10,7)'],
          explanation: 'Enlargement from centre (1, 1) by scale factor 3: (x, y) → (1 + 3(x − 1), 1 + 3(y − 1)).\nQ(4, 3): new x = 1 + 3(4 − 1) = 1 + 9 = 10. new y = 1 + 3(3 − 1) = 1 + 6 = 7.\nQ\' = (10, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="95.3" y1="119.2" x2="157.0" y2="74.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="119.2" r="3.5" fill="#ea580c"/><text x="101.3" y="113.2" font-size="11" font-weight="700" fill="#ea580c">centre (1, 1)</text><circle cx="142.7" cy="84.8" r="4" fill="#2563eb"/><text x="149.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">Q(4, 3)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Point R is at (8, 6). It is reduced by scale factor 0.5 from the origin, as shown. Find the coordinates of the image R\'.',
          answer: '(4, 3)',
          checkMode: 'auto',
          correctAnswer: '(4, 3)',
          correctAnswers: ['(4, 3)', '(4,3)'],
          explanation: 'Reduction from the origin by scale factor 0.5: (x, y) → (0.5x, 0.5y).\nR(8, 6) → R\'(0.5×8, 0.5×6) = (4, 3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="61.3" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="94.1" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="143.9" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="168.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="193.6" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="63.3" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="63.3" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="63.3" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="63.3" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="63.3" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="69.3" y1="145.0" x2="198.5" y2="33.2" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="69.3" cy="145.0" r="3.5" fill="#ea580c"/><text x="57.3" y="159.0" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="168.7" cy="59.0" r="4" fill="#2563eb"/><text x="175.7" y="53.0" font-size="12" font-weight="700" fill="#2563eb">R(8, 6)</text></svg>',
        },

        // ── Block F — Multi-step / congruency vs similarity (Q18-20) ─────────
        {
          difficulty: 'Hard',
          question: 'A point starts at (1, 3). It is translated by (4, −1), then the result is reflected in the x-axis. Find the final position.',
          answer: '(5, -2)',
          checkMode: 'auto',
          correctAnswer: '(5, -2)',
          correctAnswers: ['(5, -2)', '(5,-2)', '(5, −2)', '(5,−2)'],
          explanation: 'Step 1 — translate by (4, −1): (1 + 4, 3 − 1) = (5, 2).\nStep 2 — reflect in the x-axis: (5, 2) → (5, −2).\nFinal position = (5, −2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A point starts at (2, 5). It is rotated 90° clockwise about the origin, then the result is translated by (−3, 4). Find the final position.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)'],
          explanation: 'Step 1 — rotate 90° clockwise: (x, y) → (y, −x). (2, 5) → (5, −2).\nStep 2 — translate by (−3, 4): (5 − 3, −2 + 4) = (2, 2).\nFinal position = (2, 2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A shape is enlarged by scale factor 3. Its image is then compared to the original shape. Are the two shapes congruent, similar, or neither? Explain your answer.',
          checkMode: 'self',
          answer: 'Similar, not congruent. An enlargement changes the size of a shape (all sides are multiplied by the scale factor) but keeps the same shape and equal angles, so the object and image are similar but not congruent — congruent shapes must be exactly the same size, which is only true when the scale factor is 1 or −1.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered naming transformations, reflecting, translating, rotating and enlarging shapes on the coordinate plane.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the coordinate rules for reflection, rotation and enlargement, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block A — Naming/identifying transformation type (Q1-3) ──────────
        {
          difficulty: 'Easy',
          question: 'A shape slides to a new position without turning or flipping, with every point moving the same distance in the same direction. What type of transformation is this?',
          answer: 'translation',
          checkMode: 'auto',
          correctAnswer: 'translation',
          correctAnswers: ['translation', 'a translation'],
          explanation: 'Sliding a shape without turning or flipping it, so every point moves the same distance in the same direction, is called a translation.',
        },
        {
          difficulty: 'Easy',
          question: 'A shape is flipped over a line so that the image is a mirror image of the object. What type of transformation is this?',
          answer: 'reflection',
          checkMode: 'auto',
          correctAnswer: 'reflection',
          correctAnswers: ['reflection', 'a reflection'],
          explanation: 'Flipping a shape over a line to produce a mirror image is called a reflection.',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle A has vertices (1, 1), (4, 1), (1, 3). Triangle B has vertices (1, −1), (4, −1), (1, −3). Describe the single transformation that maps triangle A onto triangle B.',
          answer: 'Reflection in the x-axis',
          checkMode: 'auto',
          correctAnswer: 'Reflection in the x-axis',
          correctAnswers: ['Reflection in the x-axis', 'reflection in x-axis', 'reflected in the x-axis', 'reflection over the x-axis'],
          explanation: 'Compare matching vertices: (1,1) → (1,−1), (4,1) → (4,−1), (1,3) → (1,−3).\nEach y-coordinate has changed sign while each x-coordinate stayed the same — this is the rule for reflecting in the x-axis: (x, y) → (x, −y) ✓',
        },

        // ── Block B — Reflection with coordinates (Q4-7) ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Point P is at (6, 2). It is reflected in the y-axis, as shown. Find the coordinates of the image P\'.',
          answer: '(-6, 2)',
          checkMode: 'auto',
          correctAnswer: '(-6, 2)',
          correctAnswers: ['(-6, 2)', '(-6,2)', '(−6, 2)', '(−6,2)'],
          explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nP(6, 2) → P\'(−6, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="41.7" y1="188.0" x2="41.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="80.3" y1="188.0" x2="80.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="99.7" y1="188.0" x2="99.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="138.3" y1="188.0" x2="138.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="157.7" y1="188.0" x2="157.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="196.3" y1="188.0" x2="196.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="127.5" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="41.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-8</text><text x="61.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="80.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="99.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="138.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="157.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="177.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="196.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="113.0" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="83.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="123.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="177.0" cy="80.5" r="4" fill="#2563eb"/><text x="184.0" y="74.5" font-size="12" font-weight="700" fill="#2563eb">P(6, 2)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Point Q is at (5, 9). It is reflected in the x-axis, as shown. Find the coordinates of the image Q\'.',
          answer: '(5, -9)',
          checkMode: 'auto',
          correctAnswer: '(5, -9)',
          correctAnswers: ['(5, -9)', '(5,-9)', '(5, −9)', '(5,−9)'],
          explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nQ(5, 9) → Q\'(5, −9) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="165.5" font-size="11" fill="#374151">x</text><text x="75.5" y="173.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="173.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="138.1" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="111.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="26.0" y="85.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="26.0" y="58.7" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="26.0" y="32.2" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="157.5" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="42.5" r="4" fill="#2563eb"/><text x="126.0" y="36.5" font-size="12" font-weight="700" fill="#2563eb">Q(5, 9)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point R is at (3, 1). It is reflected over the horizontal line y = 4, as shown. Find the coordinates of the image R\'.',
          answer: '(3, 7)',
          checkMode: 'auto',
          correctAnswer: '(3, 7)',
          correctAnswers: ['(3, 7)', '(3,7)'],
          explanation: 'Mirror line y = 4. Distance from R to the line: 4 − 1 = 3 units.\nImage is 3 units on the other side: 4 + 3 = 7.\nThe x-coordinate stays the same.\nR\' = (3, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="91.4" font-size="11" font-weight="700" fill="#dc2626">y = 4</text><circle cx="136.4" cy="135.1" r="4" fill="#2563eb"/><text x="143.4" y="129.1" font-size="12" font-weight="700" fill="#2563eb">R(3, 1)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(4, 5), as shown. It is reflected in the y-axis. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(-1,2) B'(-4,2) C'(-4,5)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,2) B'(-4,2) C'(-4,5)",
          correctAnswers: ["A'(-1,2) B'(-4,2) C'(-4,5)", "A'(-1, 2) B'(-4, 2) C'(-4, 5)", "A'(−1,2) B'(−4,2) C'(−4,5)"],
          explanation: "Reflecting in the y-axis: (x, y) → (−x, y).\nA(1, 2) → A'(−1, 2).\nB(4, 2) → B'(−4, 2).\nC(4, 5) → C'(−4, 5). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="69.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="94.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="143.9" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="168.7" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="193.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="113.0" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="113.0" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="113.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="123.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><polygon points="131.4,109.8 168.7,109.8 168.7,62.9" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="131.4" cy="109.8" r="4" fill="#2563eb"/><circle cx="168.7" cy="109.8" r="4" fill="#2563eb"/><circle cx="168.7" cy="62.9" r="4" fill="#2563eb"/><text x="138.4" y="103.8" font-size="12" font-weight="700" fill="#2563eb">A(1, 2)</text><text x="175.7" y="103.8" font-size="12" font-weight="700" fill="#2563eb">B(4, 2)</text><text x="175.7" y="56.9" font-size="12" font-weight="700" fill="#2563eb">C(4, 5)</text></svg>',
        },

        // ── Block C — Translation with coordinates (Q8-10) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (−2, 6). It is translated 4 units right and 5 units down, as shown. Find the new coordinates of A\'.',
          answer: '(2, 1)',
          checkMode: 'auto',
          correctAnswer: '(2, 1)',
          correctAnswers: ['(2, 1)', '(2,1)'],
          explanation: 'Translation of (4, −5): (x, y) → (x + 4, y − 5).\nA(−2, 6) → A\'(−2 + 4, 6 − 5) = (2, 1) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="160.7" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="84.2" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="153.8" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="188.6" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="113.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="113.0" y="65.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="113.0" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="84.2" cy="62.9" r="4" fill="#2563eb"/><line x1="84.2" y1="62.9" x2="109.5" y2="91.3" stroke="#ea580c" stroke-width="2.5"/><polygon points="109.5,91.3 103.9,88.9 107.8,85.5" fill="#ea580c"/><text x="93.0" y="80.5" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">4 right, 5 down</text><text x="91.2" y="56.9" font-size="12" font-weight="700" fill="#2563eb">A(-2, 6)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle ABC has vertices A(2, 2), B(5, 2), C(2, 5), as shown. It is translated by (3, −4). Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(5,-2) B'(8,-2) C'(5,1)",
          checkMode: 'auto',
          correctAnswer: "A'(5,-2) B'(8,-2) C'(5,1)",
          correctAnswers: ["A'(5,-2) B'(8,-2) C'(5,1)", "A'(5, -2) B'(8, -2) C'(5, 1)", "A'(5,−2) B'(8,−2) C'(5,1)"],
          explanation: "Translation of (3, −4): (x, y) → (x + 3, y − 4).\nA(2, 2) → A'(5, −2).\nB(5, 2) → B'(8, −2).\nC(2, 5) → C'(5, 1). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="157.6" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="101.6" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="136.4" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="171.2" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="60.8" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="122.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="87.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="53.4" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><polygon points="101.6,119.2 153.8,119.2 101.6,67.6" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="119.2" r="4" fill="#2563eb"/><circle cx="153.8" cy="119.2" r="4" fill="#2563eb"/><circle cx="101.6" cy="67.6" r="4" fill="#2563eb"/><line x1="101.6" y1="119.2" x2="124.6" y2="149.5" stroke="#ea580c" stroke-width="2.5"/><polygon points="124.6,149.5 119.2,146.7 123.3,143.6" fill="#ea580c"/><text x="108.2" y="138.1" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (3, -4)</text><text x="108.6" y="113.2" font-size="12" font-weight="700" fill="#2563eb">A(2, 2)</text><text x="160.8" y="113.2" font-size="12" font-weight="700" fill="#2563eb">B(5, 2)</text><text x="108.6" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(2, 5)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A student translates the point (4, 3) by (−6, −1) and writes the image as (10, 2). Is this correct? If not, find the correct image.',
          answer: 'No, the correct image is (-2, 2).',
          checkMode: 'auto',
          correctAnswer: '(-2, 2)',
          correctAnswers: ['(-2, 2)', '(-2,2)', '(−2, 2)', '(−2,2)', 'No, (-2,2)', 'No, the correct image is (-2, 2).'],
          explanation: 'Correct rule: (x, y) → (x + (−6), y + (−1)).\n(4, 3) → (4 − 6, 3 − 1) = (−2, 2).\nThe student subtracted instead of adding the shift to the x-coordinate, giving 10 instead of −2. The correct image is (−2, 2) ✓',
        },

        // ── Block D — Rotation about the origin (Q11-14) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (5, 1). It is rotated 90° anticlockwise about the origin, as shown. Use the rule (x, y) → (−y, x) to find the image A\'.',
          answer: '(-1, 5)',
          checkMode: 'auto',
          correctAnswer: '(-1, 5)',
          correctAnswers: ['(-1, 5)', '(-1,5)', '(−1, 5)', '(−1,5)'],
          explanation: 'Rule: (x, y) → (−y, x).\nA(5, 1) → A\'(−1, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="127.5" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="61.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="148.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="177.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="84.0" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="83.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><circle cx="90.0" cy="123.5" r="3.5" fill="#ea580c"/><text x="78.0" y="137.5" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="102.0" r="4" fill="#2563eb"/><text x="169.5" y="96.0" font-size="12" font-weight="700" fill="#2563eb">A(5, 1)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point B is at (−4, 7). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.',
          answer: '(4, -7)',
          checkMode: 'auto',
          correctAnswer: '(4, -7)',
          correctAnswers: ['(4, -7)', '(4,-7)', '(4, −7)', '(4,−7)'],
          explanation: 'Rule: (x, y) → (−x, −y).\nB(−4, 7) → B\'(4, −7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="145.8" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="84.2" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="147.8" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="147.8" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="147.8" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="147.8" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="147.8" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="147.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="153.8" cy="148.3" r="3.5" fill="#ea580c"/><text x="141.8" y="162.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="84.2" cy="55.7" r="4" fill="#2563eb"/><text x="91.2" y="49.7" font-size="12" font-weight="700" fill="#2563eb">B(-4, 7)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point C is at (3, 4). It is rotated 270° anticlockwise about the origin, as shown. Find the image C\' (270° anticlockwise gives the same image as 90° clockwise: (x, y) → (y, −x)).',
          answer: '(4, -3)',
          checkMode: 'auto',
          correctAnswer: '(4, -3)',
          correctAnswers: ['(4, -3)', '(4,-3)', '(4, −3)', '(4,−3)'],
          explanation: 'A 270° anticlockwise rotation is the same as a 90° clockwise rotation: (x, y) → (y, −x).\nC(3, 4) → C\'(4, −3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="84.2" cy="136.4" r="3.5" fill="#ea580c"/><text x="72.2" y="150.4" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="136.4" cy="67.6" r="4" fill="#2563eb"/><text x="143.4" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(3, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Triangle ABC has vertices A(2, 1), B(5, 1), C(5, 3), as shown. It is rotated 180° about the origin. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(-2,-1) B'(-5,-1) C'(-5,-3)",
          checkMode: 'auto',
          correctAnswer: "A'(-2,-1) B'(-5,-1) C'(-5,-3)",
          correctAnswers: ["A'(-2,-1) B'(-5,-1) C'(-5,-3)", "A'(-2, -1) B'(-5, -1) C'(-5, -3)", "A'(−2,−1) B'(−5,−1) C'(−5,−3)"],
          explanation: "Rule for 180°: (x, y) → (−x, −y).\nA(2, 1) → A'(−2, −1).\nB(5, 1) → B'(−5, −1).\nC(5, 3) → C'(−5, −3). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="79.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="67.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="111.1,111.6 158.5,111.6 158.5,73.3" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="111.1" cy="111.6" r="4" fill="#2563eb"/><circle cx="158.5" cy="111.6" r="4" fill="#2563eb"/><circle cx="158.5" cy="73.3" r="4" fill="#2563eb"/><text x="118.1" y="105.6" font-size="12" font-weight="700" fill="#2563eb">A(2, 1)</text><text x="165.5" y="105.6" font-size="12" font-weight="700" fill="#2563eb">B(5, 1)</text><text x="165.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">C(5, 3)</text></svg>',
        },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ────────
        {
          difficulty: 'Easy-Medium',
          question: 'Point P is at (1, 2). It is enlarged by scale factor 3 from the origin, as shown. Find the coordinates of the image P\'.',
          answer: '(3, 6)',
          checkMode: 'auto',
          correctAnswer: '(3, 6)',
          correctAnswers: ['(3, 6)', '(3,6)'],
          explanation: 'Enlargement from the origin by scale factor 3: (x, y) → (3x, 3y).\nP(1, 2) → P\'(3×1, 3×2) = (3, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="53.8" y1="188.0" x2="53.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="97.2" y1="188.0" x2="97.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="140.8" y1="188.0" x2="140.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="184.2" y1="188.0" x2="184.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="97.2" y1="188.0" x2="97.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="89.2" y="184.0" font-size="11" fill="#374151">y</text><text x="53.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="140.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="184.2" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="91.2" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="91.2" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="91.2" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="91.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="97.2" y1="130.7" x2="125.5" y2="81.0" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="97.2" cy="130.7" r="3.5" fill="#ea580c"/><text x="85.2" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="119.0" cy="92.4" r="4" fill="#2563eb"/><text x="126.0" y="86.4" font-size="12" font-weight="700" fill="#2563eb">P(1, 2)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point Q is at (5, 4). It is enlarged by scale factor 2 from the centre (2, 2), as shown. Find the coordinates of the image Q\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Enlargement from centre (2, 2) by scale factor 2: (x, y) → (2 + 2(x − 2), 2 + 2(y − 2)).\nQ(5, 4): new x = 2 + 2(5 − 2) = 2 + 6 = 8. new y = 2 + 2(4 − 2) = 2 + 4 = 6.\nQ\' = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="157.6" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="57.6" y="122.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="87.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="53.4" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="57.6" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="95.3" y1="119.2" x2="157.0" y2="74.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="119.2" r="3.5" fill="#ea580c"/><text x="101.3" y="113.2" font-size="11" font-weight="700" fill="#ea580c">centre (2, 2)</text><circle cx="142.7" cy="84.8" r="4" fill="#2563eb"/><text x="149.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">Q(5, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Point R is at (6, 10). It is reduced by scale factor 0.5 from the origin, as shown. Find the coordinates of the image R\'.',
          answer: '(3, 5)',
          checkMode: 'auto',
          correctAnswer: '(3, 5)',
          correctAnswers: ['(3, 5)', '(3,5)'],
          explanation: 'Reduction from the origin by scale factor 0.5: (x, y) → (0.5x, 0.5y).\nR(6, 10) → R\'(0.5×6, 0.5×10) = (3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="177.2" x2="206.0" y2="177.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="155.8" x2="206.0" y2="155.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="134.2" x2="206.0" y2="134.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="112.8" x2="206.0" y2="112.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="91.2" x2="206.0" y2="91.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="69.8" x2="206.0" y2="69.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="48.2" x2="206.0" y2="48.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="26.8" x2="206.0" y2="26.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="155.8" x2="206.0" y2="155.8" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="159.8" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="180.2" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="137.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="115.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="94.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="69.5" y="72.8" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="69.5" y="51.2" font-size="8" fill="#9ca3af" text-anchor="end">10</text><text x="69.5" y="29.8" font-size="8" fill="#9ca3af" text-anchor="end">12</text><line x1="75.5" y1="155.8" x2="188.6" y2="16.0" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="75.5" cy="155.8" r="3.5" fill="#ea580c"/><text x="63.5" y="169.8" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="48.2" r="4" fill="#2563eb"/><text x="169.5" y="42.2" font-size="12" font-weight="700" fill="#2563eb">R(6, 10)</text></svg>',
        },

        // ── Block F — Multi-step / congruency vs similarity (Q18-20) ─────────
        {
          difficulty: 'Hard',
          question: 'A point starts at (3, 4). It is reflected in the y-axis, then the result is translated by (5, −2). Find the final position.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)'],
          explanation: 'Step 1 — reflect in the y-axis: (3, 4) → (−3, 4).\nStep 2 — translate by (5, −2): (−3 + 5, 4 − 2) = (2, 2).\nFinal position = (2, 2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A point starts at (2, 1). It is enlarged by scale factor 3 from the origin, then the result is reflected in the x-axis. Find the final position.',
          answer: '(6, -3)',
          checkMode: 'auto',
          correctAnswer: '(6, -3)',
          correctAnswers: ['(6, -3)', '(6,-3)', '(6, −3)', '(6,−3)'],
          explanation: 'Step 1 — enlarge by scale factor 3 from the origin: (2, 1) → (6, 3).\nStep 2 — reflect in the x-axis: (6, 3) → (6, −3).\nFinal position = (6, −3) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A shape is reflected and then translated. Its final image is compared to the original shape. Are the two shapes congruent, similar, or neither? Explain your answer.',
          checkMode: 'self',
          answer: 'Congruent (and therefore also similar). Reflection and translation are both transformations that preserve size and shape — no lengths or angles change. Since the image is exactly the same size and shape as the object, the two shapes are congruent.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered naming transformations, reflecting, translating, rotating and enlarging shapes on the coordinate plane.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the coordinate rules for reflection, rotation and enlargement, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block A — Naming/identifying transformation type (Q1-3) ──────────
        {
          difficulty: 'Easy',
          question: 'A shape is made smaller using a scale factor between 0 and 1, keeping the same shape. What is this type of transformation usually called?',
          answer: 'reduction',
          checkMode: 'auto',
          correctAnswer: 'reduction',
          correctAnswers: ['reduction', 'a reduction', 'enlargement', 'an enlargement'],
          explanation: 'Making a shape smaller using a scale factor between 0 and 1 is usually called a reduction. It is still a type of enlargement — an enlargement with a scale factor less than 1.',
        },
        {
          difficulty: 'Easy',
          question: 'In a rotation, what do we call the fixed point that the shape turns around?',
          answer: 'centre of rotation',
          checkMode: 'auto',
          correctAnswer: 'centre of rotation',
          correctAnswers: ['centre of rotation', 'center of rotation', 'the centre of rotation', 'centre'],
          explanation: 'The fixed point that a shape turns around in a rotation is called the centre of rotation. Every point on the shape stays the same distance from this centre.',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle A has vertices (1, 1), (4, 1), (1, 3). Triangle B has vertices (2, 2), (8, 2), (2, 6). Describe the single transformation that maps triangle A onto triangle B.',
          answer: 'Enlargement by scale factor 2 from the origin',
          checkMode: 'auto',
          correctAnswer: 'Enlargement by scale factor 2 from the origin',
          correctAnswers: ['Enlargement by scale factor 2 from the origin', 'enlargement scale factor 2', 'enlargement of scale factor 2 from the origin', 'scale factor 2 enlargement'],
          explanation: 'Compare matching vertices: (1,1) → (2,2), (4,1) → (8,2), (1,3) → (2,6).\nEach coordinate has been multiplied by 2, and the origin (0,0) would map to itself, so this is an enlargement by scale factor 2 from the origin ✓',
        },

        // ── Block B — Reflection with coordinates (Q4-7) ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Point P is at (7, 3). It is reflected in the x-axis, as shown. Find the coordinates of the image P\'.',
          answer: '(7, -3)',
          checkMode: 'auto',
          correctAnswer: '(7, -3)',
          correctAnswers: ['(7, -3)', '(7,-3)', '(7, −3)', '(7,−3)'],
          explanation: 'Reflecting in the x-axis: (x, y) → (x, −y).\nP(7, 3) → P\'(7, −3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="163.4" x2="206.0" y2="163.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="114.3" x2="206.0" y2="114.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="89.7" x2="206.0" y2="89.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="65.1" x2="206.0" y2="65.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="40.6" x2="206.0" y2="40.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="142.9" font-size="11" fill="#374151">x</text><text x="75.5" y="150.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="162.5" y="150.9" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="92.7" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="43.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="134.9" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="65.1" r="4" fill="#2563eb"/><text x="126.0" y="59.1" font-size="12" font-weight="700" fill="#2563eb">P(7, 3)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Point Q is at (2, 8). It is reflected in the y-axis, as shown. Find the coordinates of the image Q\'.',
          answer: '(-2, 8)',
          checkMode: 'auto',
          correctAnswer: '(-2, 8)',
          correctAnswers: ['(-2, 8)', '(-2,8)', '(−2, 8)', '(−2,8)'],
          explanation: 'Reflecting in the y-axis: (x, y) → (−x, y).\nQ(2, 8) → Q\'(−2, 8) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="148.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="206.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="84.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="94.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="148.0" cy="102.0" r="4" fill="#2563eb"/><text x="155.0" y="96.0" font-size="12" font-weight="700" fill="#2563eb">Q(2, 8)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point R is at (1, 4). It is reflected over the vertical line x = 6, as shown. Find the coordinates of the image R\'.',
          answer: '(11, 4)',
          checkMode: 'auto',
          correctAnswer: '(11, 4)',
          correctAnswers: ['(11, 4)', '(11,4)'],
          explanation: 'Mirror line x = 6. Distance from R to the line: 6 − 1 = 5 units.\nImage is 5 units on the other side: 6 + 5 = 11.\nThe y-coordinate stays the same.\nR\' = (11, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="42.2" y1="188.0" x2="42.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="52.5" y1="188.0" x2="52.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="62.7" y1="188.0" x2="62.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.9" y1="188.0" x2="72.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="83.2" y1="188.0" x2="83.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="93.4" y1="188.0" x2="93.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="103.6" y1="188.0" x2="103.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.9" y1="188.0" x2="113.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.1" y1="188.0" x2="124.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="134.4" y1="188.0" x2="134.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="144.6" y1="188.0" x2="144.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="154.8" y1="188.0" x2="154.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="165.1" y1="188.0" x2="165.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="175.3" y1="188.0" x2="175.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="185.5" y1="188.0" x2="185.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="195.8" y1="188.0" x2="195.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="62.7" y1="188.0" x2="62.7" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="54.7" y="184.0" font-size="11" fill="#374151">y</text><text x="42.2" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="83.2" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="103.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="124.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="144.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="165.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="185.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="206.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">14</text><text x="56.7" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="56.7" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="56.7" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="56.7" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="56.7" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="124.1" y1="188.0" x2="124.1" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="128.1" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 6</text><circle cx="72.9" cy="78.5" r="4" fill="#2563eb"/><text x="79.9" y="72.5" font-size="12" font-weight="700" fill="#2563eb">R(1, 4)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Triangle ABC has vertices A(3, 1), B(6, 1), C(6, 4), as shown. It is reflected in the x-axis. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(3,-1) B'(6,-1) C'(6,-4)",
          checkMode: 'auto',
          correctAnswer: "A'(3,-1) B'(6,-1) C'(6,-4)",
          correctAnswers: ["A'(3,-1) B'(6,-1) C'(6,-4)", "A'(3, -1) B'(6, -1) C'(6, -4)", "A'(3,−1) B'(6,−1) C'(6,−4)"],
          explanation: "Reflecting in the x-axis: (x, y) → (x, −y).\nA(3, 1) → A'(3, −1).\nB(6, 1) → B'(6, −1).\nC(6, 4) → C'(6, −4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="45.4" y1="188.0" x2="45.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="58.8" y1="188.0" x2="58.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.2" y1="188.0" x2="72.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="85.5" y1="188.0" x2="85.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="98.9" y1="188.0" x2="98.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="112.3" y1="188.0" x2="112.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="125.7" y1="188.0" x2="125.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="139.1" y1="188.0" x2="139.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="152.5" y1="188.0" x2="152.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="165.8" y1="188.0" x2="165.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="179.2" y1="188.0" x2="179.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="192.6" y1="188.0" x2="192.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.2" y1="188.0" x2="72.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="64.2" y="184.0" font-size="11" fill="#374151">y</text><text x="45.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="98.9" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="125.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="152.5" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="179.2" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="66.2" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="66.2" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="66.2" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="66.2" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="132.4" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><polygon points="112.3,119.2 152.5,119.2 152.5,67.6" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="112.3" cy="119.2" r="4" fill="#2563eb"/><circle cx="152.5" cy="119.2" r="4" fill="#2563eb"/><circle cx="152.5" cy="67.6" r="4" fill="#2563eb"/><text x="119.3" y="113.2" font-size="12" font-weight="700" fill="#2563eb">A(3, 1)</text><text x="159.5" y="113.2" font-size="12" font-weight="700" fill="#2563eb">B(6, 1)</text><text x="159.5" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(6, 4)</text></svg>',
        },

        // ── Block C — Translation with coordinates (Q8-10) ───────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (6, −3). It is translated 4 units left and 7 units up, as shown. Find the new coordinates of A\'.',
          answer: '(2, 4)',
          checkMode: 'auto',
          correctAnswer: '(2, 4)',
          correctAnswers: ['(2, 4)', '(2,4)'],
          explanation: 'Translation of (−4, 7): (x, y) → (x − 4, y + 7).\nA(6, −3) → A\'(6 − 4, −3 + 7) = (2, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="112.6" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-6</text><text x="57.6" y="164.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="57.6" y="138.1" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="57.6" y="85.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="58.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="32.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="158.5" cy="148.3" r="4" fill="#2563eb"/><line x1="158.5" y1="148.3" x2="137.1" y2="116.9" stroke="#ea580c" stroke-width="2.5"/><polygon points="137.1,116.9 142.3,120.0 138.1,122.9" fill="#ea580c"/><text x="151.7" y="129.9" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">4 left, 7 up</text><text x="165.5" y="142.3" font-size="12" font-weight="700" fill="#2563eb">A(6, -3)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Triangle ABC has vertices A(0, 1), B(3, 1), C(0, 3), as shown. It is translated by (2, 2). Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(2,3) B'(5,3) C'(2,5)",
          checkMode: 'auto',
          correctAnswer: "A'(2,3) B'(5,3) C'(2,5)",
          correctAnswers: ["A'(2,3) B'(5,3) C'(2,5)", "A'(2, 3) B'(5, 3) C'(2, 5)"],
          explanation: "Translation of (2, 2): (x, y) → (x + 2, y + 2).\nA(0, 1) → A'(2, 3).\nB(3, 1) → B'(5, 3).\nC(0, 3) → C'(2, 5). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><polygon points="90.0,123.5 148.0,123.5 90.0,80.5" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="90.0" cy="123.5" r="4" fill="#2563eb"/><circle cx="148.0" cy="123.5" r="4" fill="#2563eb"/><circle cx="90.0" cy="80.5" r="4" fill="#2563eb"/><line x1="90.0" y1="123.5" x2="115.4" y2="95.2" stroke="#ea580c" stroke-width="2.5"/><polygon points="115.4,95.2 113.7,101.0 109.9,97.6" fill="#ea580c"/><text x="109.5" y="115.5" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (2, 2)</text><text x="97.0" y="117.5" font-size="12" font-weight="700" fill="#2563eb">A(0, 1)</text><text x="155.0" y="117.5" font-size="12" font-weight="700" fill="#2563eb">B(3, 1)</text><text x="97.0" y="74.5" font-size="12" font-weight="700" fill="#2563eb">C(0, 3)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'A student translates the point (1, 5) by (3, −6) and writes the image as (−2, 11). Is this correct? If not, find the correct image.',
          answer: 'No, the correct image is (4, -1).',
          checkMode: 'auto',
          correctAnswer: '(4, -1)',
          correctAnswers: ['(4, -1)', '(4,-1)', '(4, −1)', '(4,−1)', 'No, (4,-1)', 'No, the correct image is (4, -1).'],
          explanation: 'Correct rule: (x, y) → (x + 3, y + (−6)).\n(1, 5) → (1 + 3, 5 − 6) = (4, −1).\nThe student swapped the signs of the shifts (used −3 for x and +6 for y instead of +3 and −6), giving (−2, 11) instead. The correct image is (4, −1) ✓',
        },

        // ── Block D — Rotation about the origin (Q11-14) ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Point A is at (6, 3). It is rotated 90° clockwise about the origin, as shown. Use the rule (x, y) → (y, −x) to find the image A\'.',
          answer: '(3, -6)',
          checkMode: 'auto',
          correctAnswer: '(3, -6)',
          correctAnswers: ['(3, -6)', '(3,-6)', '(3, −6)', '(3,−6)'],
          explanation: 'Rule: (x, y) → (y, −x).\nA(6, 3) → A\'(3, −6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="75.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="63.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="73.3" r="4" fill="#2563eb"/><text x="169.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">A(6, 3)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Point B is at (5, −2). It is rotated 180° about the origin, as shown. Use the rule (x, y) → (−x, −y) to find the image B\'.',
          answer: '(-5, 2)',
          checkMode: 'auto',
          correctAnswer: '(-5, 2)',
          correctAnswers: ['(-5, 2)', '(-5,2)', '(−5, 2)', '(−5,2)'],
          explanation: 'Rule: (x, y) → (−x, −y).\nB(5, −2) → B\'(−5, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="84.5" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="73.5" y="126.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><circle cx="79.5" cy="80.5" r="3.5" fill="#ea580c"/><text x="67.5" y="94.5" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="158.5" cy="123.5" r="4" fill="#2563eb"/><text x="165.5" y="117.5" font-size="12" font-weight="700" fill="#2563eb">B(5, -2)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point C is at (4, 7). It is rotated 90° anticlockwise about the origin, as shown. Use the rule (x, y) → (−y, x) to find the image C\'.',
          answer: '(-7, 4)',
          checkMode: 'auto',
          correctAnswer: '(-7, 4)',
          correctAnswers: ['(-7, 4)', '(-7,4)', '(−7, 4)', '(−7,4)'],
          explanation: 'Rule: (x, y) → (−y, x).\nC(4, 7) → C\'(−7, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="84.2" cy="148.3" r="3.5" fill="#ea580c"/><text x="72.2" y="162.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="153.8" cy="55.7" r="4" fill="#2563eb"/><text x="160.8" y="49.7" font-size="12" font-weight="700" fill="#2563eb">C(4, 7)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Triangle ABC has vertices A(1, 1), B(4, 1), C(4, 3), as shown. It is rotated 90° anticlockwise about the origin. Find the coordinates of the image A\'B\'C\'.',
          answer: "A'(-1,1) B'(-1,4) C'(-3,4)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,1) B'(-1,4) C'(-3,4)",
          correctAnswers: ["A'(-1,1) B'(-1,4) C'(-3,4)", "A'(-1, 1) B'(-1, 4) C'(-3, 4)", "A'(−1,1) B'(−1,4) C'(−3,4)"],
          explanation: "Rule for 90° anticlockwise: (x, y) → (−y, x).\nA(1, 1) → A'(−1, 1).\nB(4, 1) → B'(−1, 4).\nC(4, 3) → C'(−3, 4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="84.2" cy="130.7" r="3.5" fill="#ea580c"/><text x="72.2" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="101.6,111.6 153.8,111.6 153.8,73.3" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="111.6" r="4" fill="#2563eb"/><circle cx="153.8" cy="111.6" r="4" fill="#2563eb"/><circle cx="153.8" cy="73.3" r="4" fill="#2563eb"/><text x="108.6" y="105.6" font-size="12" font-weight="700" fill="#2563eb">A(1, 1)</text><text x="160.8" y="105.6" font-size="12" font-weight="700" fill="#2563eb">B(4, 1)</text><text x="160.8" y="67.3" font-size="12" font-weight="700" fill="#2563eb">C(4, 3)</text></svg>',
        },

        // ── Block E — Enlargement/reduction with scale factor (Q15-17) ────────
        {
          difficulty: 'Easy-Medium',
          question: 'Point P is at (3, 5). It is enlarged by scale factor 2 from the origin, as shown. Find the coordinates of the image P\'.',
          answer: '(6, 10)',
          checkMode: 'auto',
          correctAnswer: '(6, 10)',
          correctAnswers: ['(6, 10)', '(6,10)'],
          explanation: 'Enlargement from the origin by scale factor 2: (x, y) → (2x, 2y).\nP(3, 5) → P\'(2×3, 2×5) = (6, 10) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="90.0" y1="141.1" x2="165.4" y2="39.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="90.0" cy="141.1" r="3.5" fill="#ea580c"/><text x="78.0" y="155.1" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="148.0" cy="62.9" r="4" fill="#2563eb"/><text x="155.0" y="56.9" font-size="12" font-weight="700" fill="#2563eb">P(3, 5)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Point Q is at (6, 5). It is enlarged by scale factor 2 from the centre (2, 3), as shown. Find the coordinates of the image Q\'.',
          answer: '(10, 7)',
          checkMode: 'auto',
          correctAnswer: '(10, 7)',
          correctAnswers: ['(10, 7)', '(10,7)'],
          explanation: 'Enlargement from centre (2, 3) by scale factor 2: (x, y) → (2 + 2(x − 2), 3 + 2(y − 3)).\nQ(6, 5): new x = 2 + 2(6 − 2) = 2 + 8 = 10. new y = 3 + 2(5 − 3) = 3 + 4 = 7.\nQ\' = (10, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="172.9" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="133.7" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="57.6" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="95.3" y1="111.6" x2="177.5" y2="61.9" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="111.6" r="3.5" fill="#ea580c"/><text x="101.3" y="105.6" font-size="11" font-weight="700" fill="#ea580c">centre (2, 3)</text><circle cx="158.5" cy="73.3" r="4" fill="#2563eb"/><text x="165.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">Q(6, 5)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Point R is at (9, 12). It is reduced by scale factor 1/3 from the origin, as shown. Find the coordinates of the image R\'.',
          answer: '(3, 4)',
          checkMode: 'auto',
          correctAnswer: '(3, 4)',
          correctAnswers: ['(3, 4)', '(3,4)'],
          explanation: 'Reduction from the origin by scale factor 1/3: (x, y) → (x/3, y/3).\nR(9, 12) → R\'(9÷3, 12÷3) = (3, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="43.6" y1="188.0" x2="43.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="55.2" y1="188.0" x2="55.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="78.4" y1="188.0" x2="78.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.2" y1="188.0" x2="113.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.8" y1="188.0" x2="124.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="188.0" x2="159.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="182.8" y1="188.0" x2="182.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="194.4" y1="188.0" x2="194.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="178.4" x2="206.0" y2="178.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="140.2" x2="206.0" y2="140.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.1" x2="206.0" y2="121.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.9" x2="206.0" y2="82.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="63.8" x2="206.0" y2="63.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="25.6" x2="206.0" y2="25.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="163.3" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="43.6" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="90.0" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="113.2" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="136.4" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="159.6" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="182.8" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="206.0" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="60.8" y="181.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="143.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="124.1" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="85.9" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="60.8" y="66.8" font-size="8" fill="#9ca3af" text-anchor="end">10</text><text x="60.8" y="47.7" font-size="8" fill="#9ca3af" text-anchor="end">12</text><text x="60.8" y="28.6" font-size="8" fill="#9ca3af" text-anchor="end">14</text><line x1="66.8" y1="159.3" x2="202.5" y2="10.3" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="66.8" cy="159.3" r="3.5" fill="#ea580c"/><text x="54.8" y="173.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="171.2" cy="44.7" r="4" fill="#2563eb"/><text x="178.2" y="38.7" font-size="12" font-weight="700" fill="#2563eb">R(9, 12)</text></svg>',
        },

        // ── Block F — Multi-step / congruency vs similarity (Q18-20) ─────────
        {
          difficulty: 'Hard',
          question: 'A point starts at (−1, 2). It is translated by (5, 1), then the result is rotated 180° about the origin. Find the final position.',
          answer: '(-4, -3)',
          checkMode: 'auto',
          correctAnswer: '(-4, -3)',
          correctAnswers: ['(-4, -3)', '(-4,-3)', '(−4, −3)', '(−4,−3)'],
          explanation: 'Step 1 — translate by (5, 1): (−1 + 5, 2 + 1) = (4, 3).\nStep 2 — rotate 180° about the origin: (4, 3) → (−4, −3).\nFinal position = (−4, −3) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A point starts at (2, 3). It is reflected in the y-axis, then the result is enlarged by scale factor 2 from the origin. Find the final position.',
          answer: '(-4, 6)',
          checkMode: 'auto',
          correctAnswer: '(-4, 6)',
          correctAnswers: ['(-4, 6)', '(-4,6)', '(−4, 6)', '(−4,6)'],
          explanation: 'Step 1 — reflect in the y-axis: (2, 3) → (−2, 3).\nStep 2 — enlarge by scale factor 2 from the origin: (−2, 3) → (−4, 6).\nFinal position = (−4, 6) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A shape is rotated 90° about the origin. Its image is then compared to the original shape. Are the two shapes congruent, similar, or neither? Explain your answer.',
          checkMode: 'self',
          answer: 'Congruent (and therefore also similar). A rotation preserves size and shape — every point stays the same distance from the centre of rotation, and no lengths or angles change, only the orientation. Since the image is exactly the same size and shape as the object, the two shapes are congruent.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered naming transformations, reflecting, translating, rotating and enlarging shapes on the coordinate plane.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the coordinate rules for reflection, rotation and enlargement, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ] satisfies PracticeSet[],

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
