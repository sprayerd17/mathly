import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// [IMAGE: A 6x6 grid showing shape A — a small rectangle with corners at (1,1), (2,1), (2,2), (1,2). Shape B is the same rectangle translated to (4,3), (5,3), (5,4), (4,4). Shape C is shape A reflected over a vertical mirror line at x=4 giving corners at (6,1), (7,1), (7,2), (6,2).]

// ─── Colour helpers (transformation roles) ────────────────────────────────────
// object      → red     (#dc2626)
// translation → blue    (#2563eb)
// reflection  → green   (#16a34a)
// rotation    → orange  (#ea580c)
// image       → purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformations',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE TRANSFORMATIONS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-transformations',
      title: 'What are Transformations?',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>transformation</strong> is when we move or change a shape in a specific way. The original shape is called the ${re('object')} and the new shape after the transformation is called the ${pu('image')}. The ${pu('image')} is the same size and shape as the ${re('object')} unless we make it bigger or smaller. There are three main types of transformations — ${bl('translation')} (sliding), ${gr('reflection')} (flipping) and ${or('rotation')} (turning).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('object')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('translation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('reflection')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rotation')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('image')}</span>` +
        `</div>` +

        // ── Three types ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three types of transformations</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Translation (sliding)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The shape slides to a new position without turning or flipping. The ${re('object')} and ${pu('image')} look exactly the same — only the position changes.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reflection (flipping)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The shape is flipped over a <strong>mirror line</strong>. The ${pu('image')} is a mirror image of the ${re('object')} — the same size but facing the opposite direction.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rotation (turning)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The shape turns around a fixed point called the <strong>centre of rotation</strong>. The ${pu('image')} is the same size and shape but faces a different direction.</p>` +
        `</div>` +

        `</div>` +

        // ── Object and image tip ─────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Object and image</p>` +
        `<p style="margin:0;color:#991b1b;">Always identify the ${re('object')} (original shape) and the ${pu('image')} (new shape) before deciding which transformation was applied. In every transformation the ${pu('image')} is congruent to the ${re('object')} — it has the same size and shape unless a size change (enlargement or reduction) is applied.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho slides a triangle 3 blocks to the right. What type of transformation is this?',
          answer: `This is a ${bl('translation')} of 3 blocks to the right`,
          steps: [
            `Sliding a shape without turning or flipping it is called a ${bl('translation')}. The ${re('object')} moves to a new position but stays exactly the same size and shape.`,
            `The triangle has moved <strong>3 blocks to the right</strong> — it has not been flipped or turned. The ${pu('image')} looks identical to the ${re('object')}.`,
            `<strong>Answer:</strong> This is a ${bl('translation')} of 3 blocks to the right.`,
          ],
        },
        {
          question: 'Amahle flips a shape over a mirror line. What type of transformation is this?',
          answer: `This is a ${gr('reflection')}`,
          steps: [
            `Flipping a shape over a mirror line is called a ${gr('reflection')}. The mirror line is the line of ${gr('reflection')}.`,
            `The ${pu('image')} is a mirror image of the ${re('original')}. The shape stays the same size but faces the opposite direction.`,
            `<strong>Answer:</strong> This is a ${gr('reflection')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — type of transformation that slides ─────────────────────
        {
          difficulty: 'Easy',
          question: 'What type of transformation moves a shape without turning or flipping it?',
          answer: 'translation',
          checkMode: 'auto',
          correctAnswer: 'translation',
        },

        // ── Q2 Easy — name for the original shape ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What do we call the original shape before a transformation?',
          answer: 'object',
          checkMode: 'auto',
          correctAnswer: 'object',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three side-by-side diagrams showing the same triangle undergoing a translation (sliding right), a reflection (flipping over a vertical mirror line) and a rotation (turning 90 degrees), with the object in red and the image in purple" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the three types of transformations — translation, reflection and rotation — with simple shape examples showing the object in red and the image in purple" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translation',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>translation</strong> is when we slide a shape from one position to another without turning or flipping it. Every point on the shape moves the same distance in the same direction. We describe a translation by saying how far the shape moves left or right and how far it moves up or down. The shape and its ${pu('image')} are identical — same size, same shape, same orientation.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horizontal movement')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertical movement')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('starting position')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('ending position')}</span>` +
        `</div>` +

        // ── How to describe a translation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to describe a translation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horizontal movement (left or right)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Moving <strong>right</strong> means we <strong>add</strong> to the horizontal coordinate. Moving <strong>left</strong> means we <strong>subtract</strong> from the horizontal coordinate.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertical movement (up or down)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Moving <strong>up</strong> means we <strong>add</strong> to the vertical coordinate. Moving <strong>down</strong> means we <strong>subtract</strong> from the vertical coordinate.</p>` +
        `</div>` +

        `</div>` +

        // ── Key rule tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">In a translation, every point of the shape moves by <strong>exactly the same amount</strong> in the same direction. The ${pu('image')} is always congruent to the ${re('object')} — it has the same size, shape and orientation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A square has its bottom-left corner at (1, 1). It is translated 4 steps right and 2 steps up. Where is the bottom-left corner of the image?',
          answer: `The bottom-left corner of the image is at ${pu('(5, 3)')}`,
          steps: [
            `Start at ${or('(1, 1)')} — this is the starting position of the bottom-left corner.`,
            `${bl('Horizontal movement:')} Move 4 steps right — add 4 to the horizontal coordinate: ${bl('1 + 4 = 5')}.`,
            `${gr('Vertical movement:')} Move 2 steps up — add 2 to the vertical coordinate: ${gr('1 + 2 = 3')}.`,
            `<strong>Answer:</strong> The bottom-left corner of the image is at ${pu('(5, 3)')}. ✓`,
          ],
        },
        {
          question: 'Lerato translates a triangle 3 steps left and 1 step down. The top vertex of the triangle is at (5, 4). Where does the top vertex end up?',
          answer: `The top vertex of the image is at ${pu('(2, 3)')}`,
          steps: [
            `Start at ${or('(5, 4)')} — this is the starting position of the top vertex.`,
            `${bl('Horizontal movement:')} Move 3 steps left — subtract 3 from the horizontal coordinate: ${bl('5 − 3 = 2')}.`,
            `${gr('Vertical movement:')} Move 1 step down — subtract 1 from the vertical coordinate: ${gr('4 − 1 = 3')}.`,
            `<strong>Answer:</strong> The top vertex of the image is at ${pu('(2, 3)')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Medium — translate a single corner ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Shape A has its corner at (1,1). It is translated 3 steps right and 2 steps up. Where does that corner end up?',
          answer: '(4,3)',
          checkMode: 'auto',
          correctAnswer: '(4,3)',
          explanation: 'Horizontal: 1 + 3 = 4. Vertical: 1 + 2 = 3. The corner moves to (4,3). ✓',
        },

        // ── Q4 Medium — describe translation from grid ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Using the grid above, describe the translation from Shape A to Shape B.',
          answer: 'Shape A moves 3 steps right and 2 steps up to become Shape B.',
          checkMode: 'self',
        },

        // ── Q5 Hard — two translations in a row ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A point is at (2,4). It is translated 3 right and 2 down, then translated again 1 left and 3 up. Where does it end up?',
          answer: '(4,5)',
          checkMode: 'auto',
          correctAnswer: '(4,5)',
          explanation: 'First translation: (2+3, 4−2) = (5, 2). Second translation: (5−1, 2+3) = (4, 5). ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing a square translated 4 steps right and 2 steps up with the starting position marked in orange, horizontal movement indicated in blue, vertical movement in green, and the ending position in purple" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to translate a shape on a grid step by step, with horizontal movement in blue and vertical movement in green, starting position in orange and ending position in purple" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Reflection',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>reflection</strong> is when we flip a shape over a <strong>${re('mirror line')}</strong>. The ${re('mirror line')} can be ${re('vertical')} (up and down) or ${re('horizontal')} (left and right). Every point on the ${gr('image')} is the same distance from the ${re('mirror line')} as the matching point on the ${bl('object')} but on the opposite side. The ${gr('image')} is a mirror image of the original — like looking in a mirror. The size of the shape does not change.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('mirror line')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('object')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('image')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('distance from mirror line')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about reflection</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Mirror line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('mirror line')} is the line we flip the shape over. It can be vertical (up and down) or horizontal (left and right).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Object</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('object')} is the original shape before the reflection. Each point on the ${bl('object')} has a matching point on the ${gr('image')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Image</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('image')} is the new shape after reflecting. It is the same size as the ${bl('object')} — only the position and orientation change.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Distance from mirror line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Every point on the ${bl('object')} is the same ${or('distance')} from the ${re('mirror line')} as its matching point on the ${gr('image')}, but on the opposite side.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: the size never changes</p>` +
        `<p style="margin:0;color:#1e3a8a;">After a reflection, the ${gr('image')} is always the same size as the ${bl('object')}. Only the position changes — the ${gr('image')} is a mirror image, like your reflection in a mirror. The ${re('mirror line')} is exactly halfway between matching points on the ${bl('object')} and the ${gr('image')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point is at (2, 3). It is reflected over a vertical mirror line at x = 4. Where is the image point?',
          answer: `The ${gr('image')} point is at ${gr('(6, 3)')}`,
          steps: [
            `Identify the ${bl('object')} point: ${bl('(2, 3)')}. The ${re('mirror line')} is a vertical line at x = ${re('4')}.`,
            `Find the ${or('distance')} from the ${bl('object')} point to the ${re('mirror line')}: ${re('4')} − ${bl('2')} = ${or('2')} units. The ${bl('object')} is ${or('2')} units to the left of the ${re('mirror line')}.`,
            `The ${gr('image')} must be the same ${or('distance')} (${or('2')} units) on the opposite side — to the right of the ${re('mirror line')}: ${re('4')} + ${or('2')} = ${gr('6')}.`,
            `The vertical position does not change — the y-coordinate stays the same: ${gr('3')}.`,
            `<strong>Answer:</strong> The ${gr('image')} point is at ${gr('(6, 3)')} — same vertical position, mirrored horizontal position. ✓`,
          ],
        },
        {
          question: 'Thabo draws a flag shape and reflects it over a horizontal mirror line. What happens to the shape?',
          answer: `The ${gr('image')} is the same size as the ${bl('object')} but is flipped upside down`,
          steps: [
            `A ${re('horizontal mirror line')} runs left and right (side to side). Reflecting over it flips the shape <strong>up or down</strong>.`,
            `Every point on the ${bl('object')} moves to the opposite side of the ${re('mirror line')} — the same ${or('distance')} away but in the opposite vertical direction.`,
            `The top of the ${bl('object')} becomes the bottom of the ${gr('image')}. The bottom of the ${bl('object')} becomes the top of the ${gr('image')}.`,
            `The shape stays the same size — the ${gr('image')} is congruent to the ${bl('object')}. It is now upside down compared to the original.`,
            `<strong>Answer:</strong> The ${gr('image')} is a mirror image of the ${bl('object')} — same size, but flipped upside down over the ${re('horizontal mirror line')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — type of transformation that flips ──────────────────────
        {
          difficulty: 'Easy',
          question: 'What type of transformation flips a shape over a mirror line?',
          answer: 'reflection',
          checkMode: 'auto',
          correctAnswer: 'reflection',
        },

        // ── Q7 Medium — reflect over vertical mirror line ─────────────────────
        {
          difficulty: 'Medium',
          question: 'A point is at (1,3) and is reflected over a vertical mirror line at x=4. Where is the image point?',
          answer: '(7,3)',
          checkMode: 'auto',
          correctAnswer: '(7,3)',
          explanation: 'Distance from object to mirror line: 4 − 1 = 3 units to the left. Image is 3 units to the right of x=4: 4 + 3 = 7. y-coordinate stays the same. Image point: (7,3). ✓',
        },

        // ── Q8 Hard — reflection does not change size ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato reflects a triangle over a vertical mirror line. She says the image is a different size to the object. Is she correct? Explain.',
          answer: 'No — a reflection does not change the size of the shape. The image is always the same size as the object, it just faces the opposite direction.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grid showing a point at (2,3) reflected over a vertical mirror line at x=4 to give image at (6,3), with the mirror line in red, object in blue, image in green, and distance from mirror line marked in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect a shape over a vertical and a horizontal mirror line, with the mirror line in red, object in blue, image in green, and distance from mirror line in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotation',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>rotation</strong> is when we turn a shape around a fixed point called the ${or('centre of rotation')}. We describe a rotation by saying how far it turns and in which direction — ${bl('clockwise')} (the same direction as clock hands move) or ${re('anticlockwise')} (the opposite direction). We measure rotation in ${gr('degrees')}. A quarter turn is ${gr('90 degrees')}. A half turn is ${gr('180 degrees')}. A full turn is ${gr('360 degrees')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('clockwise')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('anticlockwise')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('centre of rotation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('degrees')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about rotation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Clockwise</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Clockwise')} rotation turns the shape in the same direction as clock hands move — to the right when looking at the top.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Anticlockwise</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Anticlockwise')} rotation turns the shape in the opposite direction to clock hands — to the left when looking at the top.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Centre of rotation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('centre of rotation')} is the fixed point the shape turns around. Every point on the shape stays the same distance from this fixed point.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Degrees</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">We measure the amount of turn in ${gr('degrees')}. A quarter turn = ${gr('90°')}, a half turn = ${gr('180°')}, a three-quarter turn = ${gr('270°')}, a full turn = ${gr('360°')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Special case: 180 degrees</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${gr('180-degree')} rotation gives the same result whether you turn ${bl('clockwise')} or ${re('anticlockwise')} — the image always ends up in the same position. It does not matter which direction you choose.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho rotates an arrow pointing North by a quarter turn clockwise. Which direction does it point now?',
          answer: `The arrow now points ${bl('East')}`,
          steps: [
            `The arrow starts pointing North.`,
            `A quarter turn ${bl('clockwise')} moves it to the right.`,
            `North rotated a quarter turn ${bl('clockwise')} points East.`,
            `<strong>Answer:</strong> The arrow now points ${bl('East')}. ✓`,
          ],
        },
        {
          question: 'Amahle rotates a shape 180 degrees. What do you notice about the image compared to the object?',
          answer: `A ${gr('180-degree')} rotation looks like the object has been flipped both horizontally and vertically at the same time`,
          steps: [
            `A ${gr('180-degree')} rotation is a half turn.`,
            `The shape turns upside down.`,
            `It does not matter if you rotate ${bl('clockwise')} or ${re('anticlockwise')} — ${gr('180 degrees')} gives the same result.`,
            `<strong>Answer:</strong> The image looks like the object has been flipped both horizontally and vertically at the same time. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — degrees in a quarter turn ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many degrees is a quarter turn?',
          answer: '90',
          checkMode: 'auto',
          correctAnswer: '90',
        },

        // ── Q10 Medium — rotate arrow anticlockwise ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho rotates an arrow pointing East a quarter turn anticlockwise. Which direction does it point now?',
          answer: 'North',
          checkMode: 'auto',
          correctAnswer: 'North',
          explanation: 'East rotated a quarter turn anticlockwise points North. ✓',
        },

        // ── Q11 Hard — rotate arrow 180 degrees ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'An arrow points South. Thabo rotates it 180 degrees clockwise. Which direction does it point now?',
          answer: 'North',
          checkMode: 'auto',
          correctAnswer: 'North',
          explanation: 'A 180-degree rotation reverses direction. South rotated 180 degrees points North. ✓',
        },

        // ── Q12 Hard — translation vs rotation compared ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says a translation and a rotation are the same because the shape does not change size. Is she correct? Explain.',
          answer: 'Not quite — both keep the same size but they are different transformations. A translation slides the shape without turning it. A rotation turns the shape around a fixed point. The orientation of the shape changes in a rotation but not in a translation.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing an arrow pointing North rotated 90 degrees clockwise to point East, and a shape rotated 180 degrees, with the centre of rotation marked in orange, clockwise direction in blue, anticlockwise in red, and degrees in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rotate a shape around a centre of rotation, demonstrating quarter turns clockwise and anticlockwise and a half turn of 180 degrees, with clockwise in blue, anticlockwise in red, centre of rotation in orange, and degrees in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 5, message: 'Outstanding! A perfect score — you have completely mastered transformations for Grade 5. Keep it up!' },
    { minScore: 4, message: 'Excellent work! You have a very strong grasp of transformations. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 2, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Excellent! You have mastered transformations.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of transformations.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
