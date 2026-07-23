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
        'Three side-by-side diagrams showing the same triangle undergoing a translation (sliding right), a reflection (flipping over a vertical mirror line) and a rotation (turning 90 degrees), with the object in red and the image in purple',
      diagramSvg:
        '<svg viewBox="0 0 400 145" xmlns="http://www.w3.org/2000/svg"><polygon points="20,90 50,90 35,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="75,90 105,90 90,55" fill="none" stroke="#7c3aed" stroke-width="2.5"/><path d="M 52 72 L 73 72 M 68 68 L 73 72 L 68 76" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="65" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Translation</text><line x1="195" y1="40" x2="195" y2="100" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="150,90 180,90 165,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="240,90 210,90 225,55" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="195" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Reflection</text><polygon points="290,90 320,90 305,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="305,75 305,105 340,90" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="305" cy="90" r="3" fill="#ea580c"/><text x="310" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Rotation</text><rect x="140" y="128" width="10" height="10" fill="#dc2626"/><text x="155" y="137" font-size="11" fill="#0f1f3d">Object</text><rect x="210" y="128" width="10" height="10" fill="#7c3aed"/><text x="225" y="137" font-size="11" fill="#0f1f3d">Image</text></svg>',

      videoPlaceholder:
        'Short video introducing the three types of transformations — translation, reflection and rotation — with simple shape examples showing the object in red and the image in purple',
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
        'Grid showing a square translated 4 steps right and 2 steps up with the starting position marked in orange, horizontal movement indicated in blue, vertical movement in green, and the ending position in purple',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="20" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="40" y1="50" x2="40" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="50" x2="60" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="80" y1="50" x2="80" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="50" x2="100" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="50" x2="120" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="50" x2="140" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="160" y1="50" x2="160" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="50" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="50" x2="180" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="90" x2="180" y2="90" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="130" x2="180" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="150" x2="180" y2="150" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="170" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><rect x="40" y="130" width="20" height="20" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="120" y="90" width="20" height="20" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5"/><line x1="60" y1="140" x2="134" y2="140" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><path d="M 128 136 L 136 140 L 128 144" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="140" x2="140" y2="106" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/><path d="M 136 112 L 140 104 L 144 112" fill="none" stroke="#16a34a" stroke-width="2"/><text x="50" y="122" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Start</text><text x="95" y="132" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">+4 right</text><text x="156" y="126" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">+2 up</text><text x="130" y="82" font-weight="700" font-size="11" text-anchor="middle" fill="#7c3aed">End</text></svg>',

      videoPlaceholder:
        'Short video showing how to translate a shape on a grid step by step, with horizontal movement in blue and vertical movement in green, starting position in orange and ending position in purple',
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
        'Grid showing a point at (2,3) reflected over a vertical mirror line at x=4 to give image at (6,3), with the mirror line in red, object in blue, image in green, and distance from mirror line marked in orange',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="20" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="40" y1="50" x2="40" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="50" x2="60" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="80" y1="50" x2="80" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="50" x2="100" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="50" x2="120" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="50" x2="140" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="160" y1="50" x2="160" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="50" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="50" x2="180" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="90" x2="180" y2="90" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="130" x2="180" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="150" x2="180" y2="150" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="170" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="45" x2="100" y2="175" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/><line x1="60" y1="110" x2="140" y2="110" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="60" y1="105" x2="60" y2="115" stroke="#ea580c" stroke-width="1.5"/><line x1="100" y1="105" x2="100" y2="115" stroke="#ea580c" stroke-width="1.5"/><line x1="140" y1="105" x2="140" y2="115" stroke="#ea580c" stroke-width="1.5"/><text x="80" y="102" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">2</text><text x="120" y="102" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">2</text><circle cx="60" cy="110" r="5" fill="#2563eb"/><circle cx="140" cy="110" r="5" fill="#16a34a"/><text x="60" y="128" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">Object (2,3)</text><text x="140" y="128" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">Image (6,3)</text><text x="100" y="40" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">Mirror line x=4</text></svg>',

      videoPlaceholder:
        'Short video showing how to reflect a shape over a vertical and a horizontal mirror line, with the mirror line in red, object in blue, image in green, and distance from mirror line in orange',
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
        'Diagram showing an arrow pointing North rotated 90 degrees clockwise to point East, and a shape rotated 180 degrees, with the centre of rotation marked in orange, clockwise direction in blue, anticlockwise in red, and degrees in green',
      diagramSvg:
        '<svg viewBox="0 0 300 145" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="90" r="4" fill="#ea580c"/><line x1="70" y1="90" x2="70" y2="52" stroke="#dc2626" stroke-width="3"/><path d="M 64 60 L 70 48 L 76 60" fill="none" stroke="#dc2626" stroke-width="3"/><line x1="70" y1="90" x2="108" y2="90" stroke="#7c3aed" stroke-width="3"/><path d="M 100 84 L 112 90 L 100 96" fill="none" stroke="#7c3aed" stroke-width="3"/><path d="M 70 60 A 30 30 0 0 1 100 90" fill="none" stroke="#2563eb" stroke-width="1.8"/><text x="98" y="63" font-weight="700" font-size="11" fill="#16a34a">90°</text><text x="70" y="135" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Arrow — 90° clockwise</text><circle cx="220" cy="90" r="4" fill="#ea580c"/><polygon points="220,55 210,75 230,75" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="220,125 230,105 210,105" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="248" y="94" font-weight="700" font-size="11" fill="#16a34a">180°</text><text x="220" y="135" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Shape — 180° turn</text></svg>',

      videoPlaceholder:
        'Short video showing how to rotate a shape around a centre of rotation, demonstrating quarter turns clockwise and anticlockwise and a half turn of 180 degrees, with clockwise in blue, anticlockwise in red, centre of rotation in orange, and degrees in green',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Identify transformation & vocabulary | 4-7 Translate a point/shape |
    // 8-11 Reflect over a mirror line | 12-15 Rotate about a centre |
    // 16-19 Compare, justify and spot the error
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A triangle slides 5 blocks to the left without turning or flipping. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'translation', correctAnswers: ['translation'], explanation: 'Sliding a shape without turning or flipping it is always a translation.' },
        { difficulty: 'Easy', question: 'A flag shape is flipped over a line so it faces the opposite way, like a mirror image. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'reflection', correctAnswers: ['reflection'], explanation: 'Flipping a shape over a line to create a mirror image is a reflection.' },
        { difficulty: 'Easy', question: 'What do we call the fixed point that a shape turns around during a rotation?', checkMode: 'auto', correctAnswer: 'centre of rotation', correctAnswers: ['centre of rotation', 'center of rotation', 'centreofrotation', 'centerofrotation'], explanation: 'The fixed point a shape turns around is called the centre of rotation. Every point on the shape stays the same distance from it.' },
        { difficulty: 'Easy', question: 'In a reflection, what do we call the line that a shape is flipped over?', checkMode: 'auto', correctAnswer: 'mirror line', correctAnswers: ['mirror line', 'mirrorline'], explanation: 'The line a shape is flipped over in a reflection is called the mirror line (or line of reflection).' },
        { difficulty: 'Easy-Medium', question: 'A point is at (3,2). It is translated 5 steps to the right. Where does it end up?', checkMode: 'auto', correctAnswer: '(8,2)', correctAnswers: ['(8,2)', '8,2'], explanation: 'Moving right means adding to the horizontal coordinate: 3 + 5 = 8. The vertical coordinate stays the same. New point: (8,2). ✓' },
        { difficulty: 'Easy-Medium', question: 'A point is at (4,1). It is translated 6 steps up. Where does it end up?', checkMode: 'auto', correctAnswer: '(4,7)', correctAnswers: ['(4,7)', '4,7'], explanation: 'Moving up means adding to the vertical coordinate: 1 + 6 = 7. The horizontal coordinate stays the same. New point: (4,7). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner starts at (2,7). It is translated 4 steps right and 3 steps down. Where does the corner end up?', checkMode: 'auto', correctAnswer: '(6,4)', correctAnswers: ['(6,4)', '6,4'], explanation: 'Horizontal: right means add, so 2 + 4 = 6. Vertical: down means subtract, so 7 − 3 = 4. New point: (6,4). ✓' },
        { difficulty: 'Medium', question: 'A robot on a grid game starts at square (1,1). It receives the instruction "6 right, 2 up" from the controller. Which square does it land on?', checkMode: 'auto', correctAnswer: '(7,3)', correctAnswers: ['(7,3)', '7,3'], explanation: 'Right adds to the horizontal coordinate: 1 + 6 = 7. Up adds to the vertical coordinate: 1 + 2 = 3. The robot lands on (7,3). ✓' },
        { difficulty: 'Medium', question: 'A point is at (1,2). It is reflected over a vertical mirror line at x = 3. Where is the image point?', checkMode: 'auto', correctAnswer: '(5,2)', correctAnswers: ['(5,2)', '5,2'], explanation: 'Distance from the point to the mirror line: 3 − 1 = 2 units to the left of the line. The image must be 2 units on the opposite side: 3 + 2 = 5. The y-coordinate is unchanged. Image point: (5,2). ✓' },
        { difficulty: 'Medium', question: 'A point is at (3,2). It is reflected over a horizontal mirror line at y = 5. Where is the image point?', checkMode: 'auto', correctAnswer: '(3,8)', correctAnswers: ['(3,8)', '3,8'], explanation: 'Distance from the point to the mirror line: 5 − 2 = 3 units below the line. The image must be 3 units on the opposite side: 5 + 3 = 8. The x-coordinate is unchanged. Image point: (3,8). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner is at (2,4). The mirror line for this reflection is a vertical line at x = 6, well away from the corner. Where does the corner\'s image land?', checkMode: 'auto', correctAnswer: '(10,4)', correctAnswers: ['(10,4)', '10,4'], explanation: 'Distance from the corner to the mirror line: 6 − 2 = 4 units to the left of the line. The image is 4 units on the opposite side: 6 + 4 = 10. The y-coordinate stays the same. Image point: (10,4). ✓' },
        { difficulty: 'Medium', question: 'An artist is designing a symmetric logo. One point of the pattern is at (5,2), and the artist reflects it over a horizontal mirror line at y = 6 to complete the matching half. Where does the reflected point land?', checkMode: 'auto', correctAnswer: '(5,10)', correctAnswers: ['(5,10)', '5,10'], explanation: 'Distance from the point to the mirror line: 6 − 2 = 4 units below the line. The image is 4 units on the opposite side: 6 + 4 = 10. The x-coordinate stays the same. Image point: (5,10). ✓' },
        { difficulty: 'Medium-Hard', question: 'An arrow points East. It is rotated a quarter turn clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'A quarter turn clockwise moves the direction one step around the compass in the clockwise direction: East → South. ✓' },
        { difficulty: 'Medium-Hard', question: 'A weather vane points West. It turns a quarter turn anticlockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'A quarter turn anticlockwise moves the direction one step around the compass against the clock direction: West → South. ✓' },
        { difficulty: 'Medium-Hard', question: 'A shape faces North. It is rotated 180 degrees. Which direction does it face now — and would the answer change if the rotation were anticlockwise instead of clockwise?', checkMode: 'auto', correctAnswer: 'South, no', correctAnswers: ['South, no', 'south no', 'southno', 'south, it would not change', 'South it would not change'], explanation: 'A 180-degree rotation always reverses the direction: North → South. A 180-degree turn lands in the same place whether you go clockwise or anticlockwise, so the direction would not change. ✓' },
        { difficulty: 'Medium-Hard', question: 'A spinner arrow starts pointing South and is rotated three-quarter turn (270 degrees) clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'A three-quarter turn clockwise moves the direction three steps around the compass clockwise: South → West → North → East. ✓' },
        { difficulty: 'Hard', question: 'Kagiso says: "A translation and a rotation must be the same transformation because both keep the object congruent to the image." Is Kagiso correct? Explain your reasoning.', checkMode: 'self', answer: 'No, Kagiso is not correct. It is true that both a translation and a rotation keep the image congruent to the object (same size and shape). But they are different transformations: a translation slides the shape in a straight line without changing which way it faces, while a rotation turns the shape around a fixed centre point, which does change its orientation (the direction it faces). Congruence being preserved does not make two transformations the same — you also need to look at what happens to the orientation of the shape.' },
        { difficulty: 'Hard', question: 'A point starts at (2,3). It is first translated 3 steps right and 1 step up, and then the resulting point is reflected over a vertical mirror line at x = 7. What is the final position of the point? Show both steps.', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '9,4'], explanation: 'Step 1 — translation: (2 + 3, 3 + 1) = (5,4). Step 2 — reflection over x = 7: distance from (5,4) to the mirror line is 7 − 5 = 2, so the image is 2 units on the other side: 7 + 2 = 9. Final point: (9,4). ✓' },
        { difficulty: 'Hard', question: 'Thandeka reflects a rectangle over a mirror line and says, "The image is a different shape now, even though it\'s still a rectangle, because it faces the other way." Is she describing a change in size, shape, or orientation? Explain why the rectangle is still congruent to the original.', checkMode: 'self', answer: 'Thandeka is describing a change in orientation, not size or shape. A reflection flips a shape so it faces the opposite direction (like a mirror image), but it does not change how big the shape is or what shape it is — a rectangle stays a rectangle with the exact same side lengths and angles. Because the size and shape are unchanged, the image is still congruent to the object; only its position and the direction it faces have changed.' },
        { difficulty: 'Hard', question: 'Compare a reflection and a rotation. Both keep the shape congruent, but explain one clear way you could tell, just by looking at the object and image, whether a reflection or a rotation was used. Then justify why the image is congruent to the object in both cases.', checkMode: 'self', answer: 'One clear way to tell is to check whether the shape has been "flipped" (mirror-imaged) or simply "turned". In a reflection, the image looks like a mirror image of the object — for example, if the object has a label facing right, the reflected image often looks back-to-front along the mirror line, and there is a straight mirror line exactly halfway between matching points on the object and image. In a rotation, the image looks like the object has simply been spun around a fixed centre point — it is not mirror-imaged, just turned to face a new direction. In both cases the image is congruent to the object because neither transformation makes the shape bigger, smaller, or a different shape — only the orientation changes.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can confidently identify, translate, reflect and rotate shapes, and explain your reasoning like a pro.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of transformations. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for translation, reflection and rotation, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, section by section, and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A rectangle turns around a fixed point until it faces a new direction, without changing size. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'rotation', correctAnswers: ['rotation'], explanation: 'Turning a shape around a fixed point is always a rotation.' },
        { difficulty: 'Easy', question: 'In a transformation, what do we call the new shape that results after the transformation has been applied?', checkMode: 'auto', correctAnswer: 'image', correctAnswers: ['image'], explanation: 'The new shape after a transformation is called the image. It is congruent to the original object.' },
        { difficulty: 'Easy', question: 'A star shape is moved 4 blocks down and 2 blocks right, without turning or flipping. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'translation', correctAnswers: ['translation'], explanation: 'Moving a shape in a straight direction without turning or flipping it is a translation.' },
        { difficulty: 'Easy', question: 'What do we call the original shape before any transformation is applied to it?', checkMode: 'auto', correctAnswer: 'object', correctAnswers: ['object'], explanation: 'The starting shape, before the transformation happens, is called the object.' },
        { difficulty: 'Easy-Medium', question: 'A point is at (2,6). It is translated 4 steps to the right. Where does it end up?', checkMode: 'auto', correctAnswer: '(6,6)', correctAnswers: ['(6,6)', '6,6'], explanation: 'Moving right means adding to the horizontal coordinate: 2 + 4 = 6. The vertical coordinate stays the same. New point: (6,6). ✓' },
        { difficulty: 'Easy-Medium', question: 'A point is at (5,3). It is translated 3 steps up. Where does it end up?', checkMode: 'auto', correctAnswer: '(5,6)', correctAnswers: ['(5,6)', '5,6'], explanation: 'Moving up means adding to the vertical coordinate: 3 + 3 = 6. The horizontal coordinate stays the same. New point: (5,6). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner starts at (8,9). It is translated 5 steps left and 2 steps down. Where does the corner end up?', checkMode: 'auto', correctAnswer: '(3,7)', correctAnswers: ['(3,7)', '3,7'], explanation: 'Horizontal: left means subtract, so 8 − 5 = 3. Vertical: down means subtract, so 9 − 2 = 7. New point: (3,7). ✓' },
        { difficulty: 'Medium', question: 'In a video game, a character piece starts on square (2,2). The player presses instructions for "3 right, 5 up". Which square does the character end up on?', checkMode: 'auto', correctAnswer: '(5,7)', correctAnswers: ['(5,7)', '5,7'], explanation: 'Right adds to the horizontal coordinate: 2 + 3 = 5. Up adds to the vertical coordinate: 2 + 5 = 7. The character ends up on (5,7). ✓' },
        { difficulty: 'Medium', question: 'A point is at (2,3). It is reflected over a vertical mirror line at x = 5. Where is the image point?', checkMode: 'auto', correctAnswer: '(8,3)', correctAnswers: ['(8,3)', '8,3'], explanation: 'Distance from the point to the mirror line: 5 − 2 = 3 units to the left of the line. The image is 3 units on the opposite side: 5 + 3 = 8. The y-coordinate is unchanged. Image point: (8,3). ✓' },
        { difficulty: 'Medium', question: 'A point is at (1,1). It is reflected over a horizontal mirror line at y = 4. Where is the image point?', checkMode: 'auto', correctAnswer: '(1,7)', correctAnswers: ['(1,7)', '1,7'], explanation: 'Distance from the point to the mirror line: 4 − 1 = 3 units below the line. The image is 3 units on the opposite side: 4 + 3 = 7. The x-coordinate is unchanged. Image point: (1,7). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner is at (3,5). The mirror line for this reflection is a vertical line at x = 8, well away from the corner. Where does the corner\'s image land?', checkMode: 'auto', correctAnswer: '(13,5)', correctAnswers: ['(13,5)', '13,5'], explanation: 'Distance from the corner to the mirror line: 8 − 3 = 5 units to the left of the line. The image is 5 units on the opposite side: 8 + 5 = 13. The y-coordinate stays the same. Image point: (13,5). ✓' },
        { difficulty: 'Medium', question: 'A tile-maker is designing a symmetric pattern for a bathroom floor. One point on the tile is at (4,3), and it is reflected over a horizontal mirror line at y = 7 to draw the matching half. Where does the reflected point land?', checkMode: 'auto', correctAnswer: '(4,11)', correctAnswers: ['(4,11)', '4,11'], explanation: 'Distance from the point to the mirror line: 7 − 3 = 4 units below the line. The image is 4 units on the opposite side: 7 + 4 = 11. The x-coordinate stays the same. Image point: (4,11). ✓' },
        { difficulty: 'Medium-Hard', question: 'An arrow points North. It is rotated a quarter turn clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'A quarter turn clockwise moves the direction one step around the compass in the clockwise direction: North → East. ✓' },
        { difficulty: 'Medium-Hard', question: 'A ceiling fan blade points South. It turns a quarter turn anticlockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'East', correctAnswers: ['East', 'east'], explanation: 'A quarter turn anticlockwise moves the direction one step around the compass against the clock direction: South → East. ✓' },
        { difficulty: 'Medium-Hard', question: 'A flag faces East. It is rotated 180 degrees. Which direction does it face now — and would the answer change if the rotation were anticlockwise instead of clockwise?', checkMode: 'auto', correctAnswer: 'West, no', correctAnswers: ['West, no', 'west no', 'westno', 'west, it would not change', 'West it would not change'], explanation: 'A 180-degree rotation always reverses the direction: East → West. A 180-degree turn lands in the same place whether you go clockwise or anticlockwise, so the direction would not change. ✓' },
        { difficulty: 'Medium-Hard', question: 'A compass needle starts pointing West and is rotated three-quarter turn (270 degrees) clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'South', correctAnswers: ['South', 'south'], explanation: 'A three-quarter turn clockwise moves the direction three steps around the compass clockwise: West → North → East → South. ✓' },
        { difficulty: 'Hard', question: 'Zanele says: "A reflection and a rotation must be the same transformation because in both, the image is the same size as the object." Is Zanele correct? Explain your reasoning.', checkMode: 'self', answer: 'No, Zanele is not correct. It is true that both a reflection and a rotation keep the image the same size as the object. But they work differently: a reflection flips the shape over a mirror line to create a mirror image, while a rotation turns the shape around a fixed centre point without flipping it. The way the orientation changes is different in each case, so same size does not mean same transformation — you also need to look at whether the shape has been flipped or simply turned.' },
        { difficulty: 'Hard', question: 'A point starts at (1,2). It is first translated 4 steps right and 3 steps up, and then the resulting point is reflected over a vertical mirror line at x = 9. What is the final position of the point? Show both steps.', checkMode: 'auto', correctAnswer: '(13,5)', correctAnswers: ['(13,5)', '13,5'], explanation: 'Step 1 — translation: (1 + 4, 2 + 3) = (5,5). Step 2 — reflection over x = 9: distance from (5,5) to the mirror line is 9 − 5 = 4, so the image is 4 units on the other side: 9 + 4 = 13. Final point: (13,5). ✓' },
        { difficulty: 'Hard', question: 'Bongani translates a triangle and says, "The image is a totally different triangle now, since it\'s in a new spot." Is he describing a change in size, shape, or position? Explain why the triangle is still congruent to the original.', checkMode: 'self', answer: 'Bongani is describing a change in position, not size or shape. A translation slides a shape to a new spot on the grid without turning or flipping it, so the size, shape and orientation all stay exactly the same — only the position changes. Because nothing about the size or shape has changed, the image is still congruent to (an exact identical copy of) the object; it has simply moved to a new location.' },
        { difficulty: 'Hard', question: 'Compare a translation and a rotation. Both keep the shape congruent, but explain one clear way you could tell, just by looking at the object and image, whether a translation or a rotation was used. Then justify why the image is congruent to the object in both cases.', checkMode: 'self', answer: 'One clear way to tell is to check whether the shape is still facing the same direction. In a translation, the object and image face exactly the same way — every part of the shape has simply slid the same distance in the same direction, so lines that were horizontal stay horizontal. In a rotation, the shape\'s orientation changes — it is turned to face a new direction around a fixed centre point, so lines that were horizontal in the object may now be vertical or slanted in the image. In both cases the image is congruent to the object because neither transformation makes the shape bigger, smaller, or a different shape — only the position and/or orientation change.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently identify, translate, reflect and rotate shapes, and explain your reasoning like a pro.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of transformations. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for translation, reflection and rotation, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, section by section, and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A leaf pattern is flipped over a straight line so its mirror image appears on the other side. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'reflection', correctAnswers: ['reflection'], explanation: 'Flipping a shape over a line to create its mirror image is a reflection.' },
        { difficulty: 'Easy', question: 'A wheel turns a quarter turn clockwise around its centre bolt. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'rotation', correctAnswers: ['rotation'], explanation: 'Turning a shape around a fixed point is a rotation.' },
        { difficulty: 'Easy', question: 'A pawn on a chessboard slides 2 squares forward without turning. What type of transformation is this?', checkMode: 'auto', correctAnswer: 'translation', correctAnswers: ['translation'], explanation: 'Sliding a piece in a straight direction without turning or flipping it is a translation.' },
        { difficulty: 'Easy', question: 'True or false: in every transformation covered in Grade 5 (translation, reflection, rotation), the image is always congruent to the object unless the shape is deliberately made bigger or smaller.', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'True'], explanation: 'True — translations, reflections and rotations all preserve the size and shape of the object. The image is congruent to the object; only its position and/or orientation change.' },
        { difficulty: 'Easy-Medium', question: 'A point is at (3,4). It is translated 6 steps to the right. Where does it end up?', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '9,4'], explanation: 'Moving right means adding to the horizontal coordinate: 3 + 6 = 9. The vertical coordinate stays the same. New point: (9,4). ✓' },
        { difficulty: 'Easy-Medium', question: 'A point is at (7,8). It is translated 4 steps down. Where does it end up?', checkMode: 'auto', correctAnswer: '(7,4)', correctAnswers: ['(7,4)', '7,4'], explanation: 'Moving down means subtracting from the vertical coordinate: 8 − 4 = 4. The horizontal coordinate stays the same. New point: (7,4). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner starts at (1,3). It is translated 5 steps right and 4 steps up. Where does the corner end up?', checkMode: 'auto', correctAnswer: '(6,7)', correctAnswers: ['(6,7)', '6,7'], explanation: 'Horizontal: right means add, so 1 + 5 = 6. Vertical: up means add, so 3 + 4 = 7. New point: (6,7). ✓' },
        { difficulty: 'Medium', question: 'A delivery robot on a warehouse grid starts at square (3,5). It follows the instruction "2 left, 4 down" to reach a shelf. Which square does it end up on?', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1'], explanation: 'Left subtracts from the horizontal coordinate: 3 − 2 = 1. Down subtracts from the vertical coordinate: 5 − 4 = 1. The robot ends up on (1,1). ✓' },
        { difficulty: 'Medium', question: 'A point is at (4,5). It is reflected over a vertical mirror line at x = 6. Where is the image point?', checkMode: 'auto', correctAnswer: '(8,5)', correctAnswers: ['(8,5)', '8,5'], explanation: 'Distance from the point to the mirror line: 6 − 4 = 2 units to the left of the line. The image is 2 units on the opposite side: 6 + 2 = 8. The y-coordinate is unchanged. Image point: (8,5). ✓' },
        { difficulty: 'Medium', question: 'A point is at (2,3). It is reflected over a horizontal mirror line at y = 8. Where is the image point?', checkMode: 'auto', correctAnswer: '(2,13)', correctAnswers: ['(2,13)', '2,13'], explanation: 'Distance from the point to the mirror line: 8 − 3 = 5 units below the line. The image is 5 units on the opposite side: 8 + 5 = 13. The x-coordinate is unchanged. Image point: (2,13). ✓' },
        { difficulty: 'Medium', question: 'A shape\'s corner is at (6,2). The mirror line for this reflection is a vertical line at x = 10, well away from the corner. Where does the corner\'s image land?', checkMode: 'auto', correctAnswer: '(14,2)', correctAnswers: ['(14,2)', '14,2'], explanation: 'Distance from the corner to the mirror line: 10 − 6 = 4 units to the left of the line. The image is 4 units on the opposite side: 10 + 4 = 14. The y-coordinate stays the same. Image point: (14,2). ✓' },
        { difficulty: 'Medium', question: 'A mirror in a bathroom hangs so its bottom edge acts as a horizontal mirror line at y = 9. A toothbrush holder point sits at (3,4), and its reflection appears in the mirror. Where does the reflected point land?', checkMode: 'auto', correctAnswer: '(3,14)', correctAnswers: ['(3,14)', '3,14'], explanation: 'Distance from the point to the mirror line: 9 − 4 = 5 units below the line. The image is 5 units on the opposite side: 9 + 5 = 14. The x-coordinate stays the same. Image point: (3,14). ✓' },
        { difficulty: 'Medium-Hard', question: 'A signpost arrow points South. It is rotated a quarter turn clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'A quarter turn clockwise moves the direction one step around the compass in the clockwise direction: South → West. ✓' },
        { difficulty: 'Medium-Hard', question: 'A wind vane points East. It turns a quarter turn anticlockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'North', correctAnswers: ['North', 'north'], explanation: 'A quarter turn anticlockwise moves the direction one step around the compass against the clock direction: East → North. ✓' },
        { difficulty: 'Medium-Hard', question: 'A car on a toy track faces West. It is rotated 180 degrees. Which direction does it face now — and would the answer change if the rotation were anticlockwise instead of clockwise?', checkMode: 'auto', correctAnswer: 'East, no', correctAnswers: ['East, no', 'east no', 'eastno', 'east, it would not change', 'East it would not change'], explanation: 'A 180-degree rotation always reverses the direction: West → East. A 180-degree turn lands in the same place whether you go clockwise or anticlockwise, so the direction would not change. ✓' },
        { difficulty: 'Medium-Hard', question: 'A propeller blade starts pointing North and is rotated three-quarter turn (270 degrees) clockwise. Which direction does it point now?', checkMode: 'auto', correctAnswer: 'West', correctAnswers: ['West', 'west'], explanation: 'A three-quarter turn clockwise moves the direction three steps around the compass clockwise: North → East → South → West. ✓' },
        { difficulty: 'Hard', question: 'Sipho says: "A translation and a reflection must be the same transformation because in both, the object and image are exactly the same size." Is Sipho correct? Explain your reasoning.', checkMode: 'self', answer: 'No, Sipho is not correct. It is true that both a translation and a reflection keep the object and image the same size. But they are different: a translation slides the shape without changing which direction it faces, while a reflection flips the shape over a mirror line so it becomes a mirror image, reversing its orientation. Same size does not mean the same transformation — you also need to check whether the shape has been flipped or has simply slid to a new position.' },
        { difficulty: 'Hard', question: 'A point starts at (3,4). It is first translated 2 steps right and 1 step down, and then the resulting point is reflected over a vertical mirror line at x = 10. What is the final position of the point? Show both steps.', checkMode: 'auto', correctAnswer: '(15,3)', correctAnswers: ['(15,3)', '15,3'], explanation: 'Step 1 — translation: (3 + 2, 4 − 1) = (5,3). Step 2 — reflection over x = 10: distance from (5,3) to the mirror line is 10 − 5 = 5, so the image is 5 units on the other side: 10 + 5 = 15. Final point: (15,3). ✓' },
        { difficulty: 'Hard', question: 'Amahle rotates a square 90 degrees and says, "It\'s not a square anymore because it\'s pointing a different way." Is she describing a change in size, shape, or orientation? Explain why the square is still congruent to the original.', checkMode: 'self', answer: 'Amahle is describing a change in orientation, not size or shape. A rotation turns a shape around a fixed centre point, which changes the direction it faces, but it does not change how big the shape is or what shape it is — a square stays a square with the exact same side lengths and angles. Because the size and shape are unchanged, the image is still congruent to the object; it has simply been turned to face a new direction.' },
        { difficulty: 'Hard', question: 'Compare a reflection and a translation using a specific example: a flag shape with an arrow printed on it pointing right. Explain what would happen to the direction the arrow points in each transformation, and why this helps you tell the two transformations apart.', checkMode: 'self', answer: 'If the flag is translated, the arrow keeps pointing exactly the same way (right) — only its position on the grid changes, because a translation just slides the shape without turning or flipping it. If the flag is reflected over a mirror line, the arrow\'s direction is mirrored — for example, an arrow pointing right could end up pointing left in the image, because a reflection flips the whole shape into a mirror image of itself. Checking whether a directional detail like an arrow keeps pointing the same way or gets flipped is a reliable way to tell a translation from a reflection. In both cases the flag stays congruent to the original because neither transformation changes its size.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply translation, reflection and rotation to real-world problems and justify your reasoning with confidence.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of transformations. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples for translation, reflection and rotation, then try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again, section by section, and retry this set.' },
      ],
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
