import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (symmetry roles) ─────────────────────────────────────────
// line of symmetry → blue   (#2563eb)
// symmetrical      → green  (#16a34a)
// not symmetrical  → red    (#dc2626)
// number of lines  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Symmetry',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS SYMMETRY?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-symmetry',
      title: 'What is Symmetry?',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">A shape has symmetry when it can be folded exactly in half and both sides match perfectly. The fold line is called the ${bl('line of symmetry')}. If both sides are mirror images of each other the shape is ${gr('symmetrical')}. If the two sides do not match the shape is ${re('not symmetrical')}. Some shapes have more than one ${bl('line of symmetry')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('line of symmetry')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('symmetrical')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('not symmetrical')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Does a square have a line of symmetry?',
          answer: `Yes — a square has ${bl('4 lines of symmetry')}`,
          steps: [
            `Fold the square in half from left to right. Both sides match perfectly. This is a ${bl('line of symmetry')}.`,
            `A square actually has 4 ${bl('lines of symmetry')} — horizontal, vertical, and two diagonal.`,
          ],
        },
        {
          question: 'Does the letter A have a line of symmetry?',
          answer: `Yes — the letter A has ${bl('one line of symmetry')}`,
          steps: [
            `Draw a vertical line down the middle of the letter A. The left side and right side are mirror images.`,
            `Yes, the letter A has one ${bl('line of symmetry')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — yes/no line of symmetry ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Does a circle have a line of symmetry?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes'],
          explanation: 'A circle has infinitely many lines of symmetry — any straight line through its centre divides it into two matching halves.',
        },

        // ── Q2 Medium — count lines of symmetry in a square ─────────────────
        {
          difficulty: 'Medium',
          question: 'How many lines of symmetry does a square have?',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'A square has 4 lines of symmetry — one vertical, one horizontal, and two diagonal (corner to corner).',
        },

        // ── Q3 Hard — evaluate a misconception about a rectangle ─────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a rectangle has 4 lines of symmetry just like a square. Is he correct? Explain.',
          answer: 'No — a rectangle only has 2 lines of symmetry. The diagonal folds do not match because the sides are different lengths unlike a square.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagrams showing a square with all 4 lines of symmetry highlighted in blue and the letter A with its vertical line of symmetry highlighted in blue',
      diagramSvg:
        '<svg viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="80" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="16" x2="60" y2="104" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="16" y1="60" x2="104" y2="60" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="20" y1="20" x2="100" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="100" y1="20" x2="20" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="60" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Square — 4 lines</text><line x1="160" y1="100" x2="190" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="220" y1="100" x2="190" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="172" y1="70" x2="208" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="15" x2="190" y2="105" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="190" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Letter A — 1 line</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what symmetry is, how to identify a line of symmetry by folding, and examples of symmetrical and not symmetrical shapes" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINES OF SYMMETRY IN SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lines-of-symmetry-in-shapes',
      title: 'Lines of Symmetry in Shapes',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Different shapes have different numbers of ${bl('lines of symmetry')}. A ${bl('line of symmetry')} can be ${or('vertical')} (up and down), ${or('horizontal')} (left and right), or ${or('diagonal')} (corner to corner). To find all ${bl('lines of symmetry')} in a shape try folding it in every direction and count how many times both sides match perfectly.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('number of lines')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape name')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Types of lines ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of lines of symmetry</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Vertical')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Goes up and down through the middle of the shape.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Horizontal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Goes left and right across the middle of the shape.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Diagonal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Goes from corner to corner across the shape.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to count lines of symmetry</p>` +
        `<p style="margin:0;color:#1e3a8a;">Try folding the shape in <strong>every</strong> direction — vertical, horizontal, and diagonal. Each time both sides match perfectly, that counts as ${or('one line of symmetry')}. Keep going until you have tried all possible folds.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `How many lines of symmetry does a ${bl('rectangle')} have?`,
          answer: `A ${bl('rectangle')} has ${gr('2 lines of symmetry')}`,
          steps: [
            `Try a ${or('vertical')} fold down the middle of the ${bl('rectangle')} — both sides match. That is ${or('1')} line.`,
            `Try a ${or('horizontal')} fold across the middle — both sides match. That is ${or('2')} lines.`,
            `Try a ${or('diagonal')} fold from corner to corner — the sides do not match. Diagonal folds are not lines of symmetry for a ${bl('rectangle')}.`,
            `A ${bl('rectangle')} has ${gr('2 lines of symmetry')}.`,
          ],
        },
        {
          question: `How many lines of symmetry does an ${bl('equilateral triangle')} have?`,
          answer: `An ${bl('equilateral triangle')} has ${gr('3 lines of symmetry')}`,
          steps: [
            `An ${bl('equilateral triangle')} has ${or('3')} equal sides.`,
            `Fold from each corner to the middle of the opposite side. Each fold gives a perfect match.`,
            `There are ${or('3')} corners, so there are ${or('3')} folds that each give a perfect match.`,
            `An ${bl('equilateral triangle')} has ${gr('3 lines of symmetry')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — yes/no symmetry in a letter ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'Does the letter H have a line of symmetry?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes'],
          explanation: 'The letter H has 2 lines of symmetry — one horizontal and one vertical. Both halves match when folded along either line.',
        },

        // ── Q5 Medium — count lines in an equilateral triangle ───────────────
        {
          difficulty: 'Medium',
          question: 'How many lines of symmetry does an equilateral triangle have?',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'An equilateral triangle has 3 equal sides and 3 lines of symmetry — one from each corner to the midpoint of the opposite side.',
        },

        // ── Q6 Hard — count lines in a regular hexagon ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo draws a regular hexagon. How many lines of symmetry does it have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A regular hexagon has 6 lines of symmetry — 3 through opposite vertices and 3 through the midpoints of opposite sides.',
        },
      ],

      diagramPlaceholder:
        'Diagrams showing a rectangle with its 2 lines of symmetry highlighted in blue and an equilateral triangle with all 3 lines of symmetry highlighted in blue',
      diagramSvg:
        '<svg viewBox="0 0 280 135" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="35" width="110" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="30" x2="70" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="10" y1="65" x2="130" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="70" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Rectangle — 2 lines</text><polygon points="210,25 165,105 255,105" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="25" x2="210" y2="105" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="165" y1="105" x2="232.5" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="255" y1="105" x2="187.5" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="210" y="118" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Triangle — 3 lines</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find all lines of symmetry in different shapes by trying vertical horizontal and diagonal folds" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SYMMETRY IN REAL LIFE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry-in-real-life',
      title: 'Symmetry in Real Life',
      icon: '🦋',
      explanation:
        `<p style="margin-bottom:16px;">Symmetry appears all around us in everyday life. Butterflies, leaves, faces, and buildings often have ${bl('lines of symmetry')}. When something looks balanced and even on both sides it is likely ${gr('symmetrical')}. Recognising symmetry helps us in art, design, and nature.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('line of symmetry')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('symmetrical')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('not symmetrical')}</span>` +
        `</div>` +

        // ── Examples in nature and design ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Where do we see symmetry?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Nature')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Butterfly wings, leaves, and flowers are often ${gr('symmetrical')} with a ${bl('line of symmetry')} down the centre.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Buildings')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Many buildings and bridges are designed to be ${gr('symmetrical')} so they look balanced and are structurally sound.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Irregular shapes')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A crumpled piece of paper or an irregular rock is ${re('not symmetrical')} — no fold will give matching sides.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to check for symmetry in real life</p>` +
        `<p style="margin:0;color:#1e3a8a;">Imagine folding the object along an imaginary ${bl('line of symmetry')}. If both halves would lie exactly on top of each other the object is ${gr('symmetrical')}. If the halves do not match the object is ${re('not symmetrical')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato looks at a butterfly. Is it symmetrical?',
          answer: `Yes — a butterfly is ${gr('symmetrical')} with one ${bl('vertical line of symmetry')}`,
          steps: [
            `Draw an imaginary ${bl('line of symmetry')} down the middle of the butterfly from head to tail.`,
            `The left wing and right wing are mirror images of each other.`,
            `Yes, a butterfly is ${gr('symmetrical')} with one ${bl('vertical line of symmetry')}.`,
          ],
        },
        {
          question: 'Amahle draws a house shape — a square with a triangle roof. How many lines of symmetry does it have?',
          answer: `The house shape has ${bl('1 line of symmetry')}`,
          steps: [
            `Try a ${bl('vertical')} fold down the middle — both the left and right sides match perfectly. This is a ${bl('line of symmetry')}.`,
            `Try a horizontal fold — the top triangle and the bottom square do ${re('not')} match. This is ${re('not a line of symmetry')}.`,
            `The house shape has ${bl('1 line of symmetry')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — symmetry in nature ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is a butterfly symmetrical?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes'],
          explanation: 'Yes — a butterfly has one vertical line of symmetry down the middle of its body. The left and right wings are mirror images of each other.',
        },

        // ── Q8 Medium — name real-life symmetrical objects ──────────────────
        {
          difficulty: 'Medium',
          question: 'Name two objects from everyday life that have a line of symmetry.',
          answer: 'Any two correct examples such as a leaf, a face, a window, a door, a star.',
          checkMode: 'self',
        },

        // ── Q9 Hard — evaluate a misconception about a scalene triangle ──────
        {
          difficulty: 'Hard',
          question: 'Amahle says a scalene triangle has at least one line of symmetry. Is she correct? Explain.',
          answer: 'No — a scalene triangle has no lines of symmetry because all three sides are different lengths so no fold will produce two matching halves.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram showing a butterfly with its vertical line of symmetry highlighted in blue and a house shape with its single vertical line of symmetry highlighted in blue',
      diagramSvg:
        '<svg viewBox="0 0 300 135" xmlns="http://www.w3.org/2000/svg"><path d="M70,30 Q30,20 25,55 Q30,85 70,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,30 Q110,20 115,55 Q110,85 70,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,68 Q48,74 42,94 Q56,99 70,84 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,68 Q92,74 98,94 Q84,99 70,84 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="70" y1="25" x2="70" y2="95" stroke="#0f1f3d" stroke-width="3"/><circle cx="70" cy="22" r="4" fill="#0f1f3d"/><line x1="70" y1="10" x2="70" y2="108" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="70" y="122" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Butterfly — 1 line</text><polygon points="230,30 190,70 270,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="195" y="70" width="70" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="25" x2="230" y2="115" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="230" y="128" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">House shape — 1 line</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing examples of symmetry in everyday life including butterflies leaves buildings and how to identify the line of symmetry in each" />',
    },
  ],
  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Identify line symmetry yes/no | 4-7 Count lines in shapes |
    // 8-10 Classify type of line | 11-14 Real-world objects | 15-17 Error-spotting |
    // 18-19 Multi-step comparison
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Does a square have a line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'A square can be folded so both halves match exactly — for example straight down the middle. It has a line of symmetry (in fact it has 4).' },
        { difficulty: 'Easy', question: 'Look at the letter M. If you fold it exactly down the middle, do the two halves match?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Folding the letter M down the middle (vertically) produces two matching halves, so M has a line of symmetry.' },
        { difficulty: 'Easy', question: 'A circle is cut exactly through its centre. Will the two halves always match, no matter which direction the cut goes?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Every straight cut through the centre of a circle creates two identical halves, so a circle has a line of symmetry in every direction through its centre.' },
        { difficulty: 'Easy', question: 'Does the letter F have a line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No fold of the letter F produces two matching halves — the horizontal arms only stick out on one side, so F is not symmetrical.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does a square have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A square has 4 lines of symmetry: one vertical, one horizontal, and two diagonal (corner to corner).' },
        { difficulty: 'Easy-Medium', question: 'A rectangle is drawn that is clearly longer than it is wide (not a square). How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A non-square rectangle has 2 lines of symmetry: one vertical and one horizontal. The diagonals do not work because the sides are unequal lengths.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does an equilateral triangle (all 3 sides equal) have?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'An equilateral triangle has 3 lines of symmetry, one running from each corner to the midpoint of the opposite side.' },
        { difficulty: 'Medium', question: 'A regular hexagon has 6 equal sides and 6 equal angles. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry — 3 that pass through pairs of opposite corners, and 3 that pass through the midpoints of pairs of opposite sides.' },
        { difficulty: 'Medium', question: 'What type of line of symmetry does the letter T have — vertical, horizontal, or diagonal?', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical'], explanation: 'The letter T has one line of symmetry that runs straight up and down through the middle of the stem — this is a vertical line.' },
        { difficulty: 'Medium', question: 'Does a (non-square) rectangle have a diagonal line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No — folding a rectangle along a diagonal does not make the two triangular halves match, because the rectangle\'s sides are different lengths. Only its vertical and horizontal lines are lines of symmetry.' },
        { difficulty: 'Medium', question: 'The letter H has two lines of symmetry. What types are they?', checkMode: 'auto', correctAnswer: 'verticalandhorizontal', correctAnswers: ['verticalandhorizontal', 'vertical and horizontal', 'horizontal and vertical', 'horizontalandvertical'], explanation: 'The letter H can be folded top to bottom (a horizontal line) or left to right (a vertical line) and still match, so it has one vertical and one horizontal line of symmetry.' },
        { difficulty: 'Medium', question: 'A stop sign is shaped like a regular octagon (8 equal sides). Is a stop sign symmetrical?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a regular octagon has 8 lines of symmetry, so a stop sign is symmetrical no matter which of those 8 ways you fold it.' },
        { difficulty: 'Medium', question: 'Priya looks at a kite shape flying in the sky — a diamond-like shape that is symmetrical only along its long vertical diagonal. How many lines of symmetry does this kite shape have?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A typical kite shape has only 1 line of symmetry — the long diagonal from top to bottom. The short diagonal does not create matching halves because the top and bottom triangles are different sizes.' },
        { difficulty: 'Medium', question: 'A heart shape drawn for a card is perfectly even on both sides. Name two real-life objects, other than a heart, that also usually have a line of symmetry.', answer: 'Any two reasonable examples such as a butterfly, a leaf, a face, a window, a five-pointed star, or a stop sign.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele looks at a plain triangular road warning sign, which is an isosceles triangle pointing upward (two equal slanted sides, one flat base). Does it have a line of symmetry, and if so, what type?', checkMode: 'auto', correctAnswer: 'yesvertical', correctAnswers: ['yesvertical', 'yes, vertical', 'yes vertical'], explanation: 'Yes — an isosceles triangle has 1 line of symmetry: a vertical line from the top point straight down to the middle of the base.' },
        { difficulty: 'Hard', question: 'A student claims: "A rectangle has 4 lines of symmetry because it has 4 sides, just like a square." Is this correct? Explain the mistake.', answer: 'No, this is not correct. A rectangle (that is not a square) has only 2 lines of symmetry — the vertical and horizontal ones. The diagonal folds do not match because a rectangle\'s sides are not all the same length like a square\'s. Having 4 sides does not automatically mean 4 lines of symmetry; the shape\'s sides and angles must line up exactly when folded.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says: "A scalene triangle (all three sides different lengths) still has one line of symmetry, because every triangle has at least one." Show why Thabo is wrong.', answer: 'Thabo is wrong. A scalene triangle has 0 lines of symmetry. Since all three sides are different lengths, no fold can ever make two halves match — every possible fold line leaves mismatched sides or angles. Not every triangle has a line of symmetry; only equilateral (3 lines) and isosceles (1 line) triangles do.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle says a pinwheel shape with 4 identical blades arranged around a centre point, all pointing the same rotational direction, has 4 lines of symmetry "because it looks the same if you turn it." Is she correct about line symmetry? Explain.', answer: 'No, Amahle is confusing rotational symmetry with line symmetry. It is true the pinwheel looks the same after turning it (that is rotational symmetry), but that does not mean it has a line of symmetry. Because all the blades point the same rotational way (like a spinning fan), no straight fold line produces two matching mirror halves — folding it would flip the direction the blades point, so it actually has 0 lines of symmetry.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a regular hexagon and a non-square rectangle. Which shape has more lines of symmetry, and by how many?', checkMode: 'auto', correctAnswer: 'hexagonby4', correctAnswers: ['hexagonby4', 'hexagon by 4', 'the hexagon by 4', 'hexagon, 4 more'], explanation: 'A regular hexagon has 6 lines of symmetry, while a non-square rectangle has 2. The difference is 6 − 2 = 4, so the hexagon has 4 more lines of symmetry than the rectangle.' },
        { difficulty: 'Hard', question: 'A composite shape is made from a square with an equilateral triangle attached exactly centred on top (like a simple house drawing). Explain how many lines of symmetry this composite shape has and why a horizontal fold does not work even though both the square and triangle are individually symmetrical.', answer: 'The composite house shape has only 1 line of symmetry — a single vertical line straight down the centre, through the peak of the triangle and the middle of the square below it. A horizontal fold does not work because the triangle roof sits only on top and the square body sits only on the bottom — folding horizontally would try to match the pointed triangle shape against the flat square shape, and they are completely different shapes, so the top and bottom never line up. Even though the square alone has 4 lines of symmetry and the triangle alone has 3, combining them into one composite shape removes all but the one line they share in common — the vertical one.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect! You have a rock-solid understanding of line symmetry in shapes, letters, and real-world objects.' },
        { minScore: 15, message: 'Great work! You understand symmetry well — look back at any question you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on lines of symmetry and give this set another try.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A rectangle is drawn on the board. Does it have at least one line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a rectangle has 2 lines of symmetry, one vertical and one horizontal, even though it is not a square.' },
        { difficulty: 'Easy', question: 'Sipho folds the letter A exactly down the middle. Do the two halves match?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — folding the letter A vertically down the middle produces two matching halves, so A has a line of symmetry.' },
        { difficulty: 'Easy', question: 'Does the letter G have a line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No — the curl at the bottom of the letter G breaks any possible match, so no fold gives two identical halves.' },
        { difficulty: 'Easy', question: 'Look at a plain circle drawn on paper. Is it possible to fold it so the two halves do NOT match?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No — a circle always matches perfectly no matter where you fold it through the centre, so there is no way to fold it into two mismatched halves.' },
        { difficulty: 'Easy-Medium', question: 'A regular pentagon has 5 equal sides and 5 equal angles. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A regular pentagon has 5 lines of symmetry — one running from each corner to the midpoint of the opposite side.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does an equilateral triangle have?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'An equilateral triangle has 3 equal sides, giving it 3 lines of symmetry — one from each vertex to the midpoint of the opposite side.' },
        { difficulty: 'Medium', question: 'An isosceles triangle has two equal sides and one different side. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'An isosceles triangle has just 1 line of symmetry — the line from the top vertex (where the two equal sides meet) straight down to the midpoint of the base.' },
        { difficulty: 'Medium', question: 'A regular hexagon is compared to a square. How many lines of symmetry does the hexagon alone have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry, 3 through opposite corners and 3 through the midpoints of opposite sides.' },
        { difficulty: 'Medium', question: 'What type of line of symmetry does the letter B have — vertical, horizontal, or diagonal?', checkMode: 'auto', correctAnswer: 'horizontal', correctAnswers: ['horizontal'], explanation: 'The letter B folds neatly along a horizontal line through its middle, so its one line of symmetry is horizontal.' },
        { difficulty: 'Medium', question: 'Does a square have a diagonal line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a square has 2 diagonal lines of symmetry (corner to corner) in addition to its vertical and horizontal ones, giving it 4 lines of symmetry in total.' },
        { difficulty: 'Medium', question: 'The letter X is folded and matches along more than one type of line. Name the two types of lines of symmetry the letter X has.', checkMode: 'auto', correctAnswer: 'verticalandhorizontal', correctAnswers: ['verticalandhorizontal', 'vertical and horizontal', 'horizontal and vertical', 'horizontalandvertical'], explanation: 'The letter X has a vertical line of symmetry (top to bottom) and a horizontal line of symmetry (left to right), so it has 2 lines of symmetry in total.' },
        { difficulty: 'Medium', question: 'A five-pointed star decoration is hung on a classroom wall. Is a regular five-pointed star symmetrical?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a regular five-pointed star has 5 lines of symmetry, one running through each point and the midpoint of the side opposite it.' },
        { difficulty: 'Medium', question: 'A butterfly lands on a flower. Nomvula says the butterfly\'s wings are mirror images of each other. Along what type of line does the butterfly\'s symmetry lie?', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical'], explanation: 'A butterfly\'s line of symmetry runs down the centre of its body from head to tail — this is a vertical line, with the left wing mirroring the right wing.' },
        { difficulty: 'Medium', question: 'Look at a plain window made up of four equal panes arranged in a 2×2 grid with a cross-shaped frame in the middle. Explain in words why this window design is symmetrical, mentioning at least one line of symmetry.', answer: 'The window is symmetrical because it can be folded along a vertical line down the centre of the cross frame and the left and right panes match, and it can also be folded along a horizontal line across the centre of the cross frame and the top and bottom panes match. Since both the vertical and horizontal folds work, the window has at least 2 lines of symmetry.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A plus-sign shape (like a hospital cross, with four equal arms of the same width and length) is drawn on a card. How many lines of symmetry does this plus sign have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A symmetric plus sign with four equal arms has 4 lines of symmetry: one vertical, one horizontal, and two diagonal — the same count as a square, because the shape fits inside a square outline evenly.' },
        { difficulty: 'Hard', question: 'A student claims: "A regular hexagon has only 3 lines of symmetry, because it only has 3 pairs of opposite corners." Explain what the student is missing.', answer: 'The student is only counting the 3 lines that pass through pairs of opposite corners, but they are forgetting the other 3 lines that pass through the midpoints of pairs of opposite sides. A regular hexagon actually has 6 lines of symmetry in total — 3 through opposite corners plus 3 through opposite side midpoints — not just 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso claims: "A circle has exactly 4 lines of symmetry, the same as a square, since a circle looks a bit like a rounded square." Is Kagiso correct? Explain.', answer: 'No, Kagiso is not correct. A circle has infinitely many lines of symmetry, not just 4 — any straight line drawn through the centre of a circle, in any direction at all, creates two matching halves. A square only has 4 lines of symmetry because its straight sides and corners limit the folds that work, but a circle has no corners or straight sides to limit it, so every direction through the centre works.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lindiwe says: "A parallelogram (like a rectangle that has been slanted sideways, with no right angles) still has 2 lines of symmetry just like a rectangle, because it has 2 pairs of parallel sides." Is she correct? Explain.', answer: 'No, Lindiwe is not correct. A slanted parallelogram (one that is not a rectangle or rhombus) has 0 lines of symmetry. Even though it has 2 pairs of parallel sides, folding it vertically, horizontally, or along a diagonal never makes the two halves match exactly, because the slant means opposite corners are not mirror images of each other. Having parallel sides is not enough on its own to guarantee a line of symmetry.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a regular pentagon and a square. Which shape has more lines of symmetry, and by how many?', checkMode: 'auto', correctAnswer: 'pentagonby1', correctAnswers: ['pentagonby1', 'pentagon by 1', 'the pentagon by 1', 'pentagon, 1 more'], explanation: 'A regular pentagon has 5 lines of symmetry, and a square has 4. The difference is 5 − 4 = 1, so the pentagon has exactly 1 more line of symmetry than the square.' },
        { difficulty: 'Hard', question: 'A composite shape is made from a rectangle with a semicircle attached exactly centred on one short end (like a simple door with an arched top). Explain how many lines of symmetry this composite shape has and why the shape cannot have a horizontal line of symmetry even though the rectangle part alone does.', answer: 'The composite door shape has only 1 line of symmetry — a single vertical line down the centre, through the middle of the arch and the middle of the rectangle below it. It cannot have a horizontal line of symmetry because the semicircle is only attached to the top of the rectangle and not the bottom — folding horizontally would try to match the curved arch against a flat rectangle edge, and these are different shapes, so the top and bottom never match. Even though a plain rectangle alone has both a vertical and a horizontal line of symmetry, attaching the semicircle to only one end removes the horizontal line, leaving just the vertical line the two shapes share.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently identify, count, and classify lines of symmetry in shapes, letters, and objects.' },
        { minScore: 15, message: 'Great work! Look back at any question you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on symmetry and give this set another try.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more varied real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Look at a plain circle. Does it have a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a circle has infinitely many lines of symmetry, since any line through its centre divides it into two matching halves.' },
        { difficulty: 'Easy', question: 'Bongani folds the letter T exactly down the middle. Do the two halves match perfectly?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — the letter T folds neatly down the middle, with both sides of the top bar and the stem matching exactly.' },
        { difficulty: 'Easy', question: 'Does the letter N have a line of symmetry? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No — the diagonal stroke of the letter N runs from one corner to the opposite corner, so no vertical, horizontal, or diagonal fold produces two matching halves.' },
        { difficulty: 'Easy', question: 'A square is folded along one of its diagonals. Do the two triangular halves match?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — because all four sides of a square are equal, folding along either diagonal produces two identical triangular halves.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does a regular hexagon have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry — 3 through pairs of opposite corners and 3 through the midpoints of pairs of opposite sides.' },
        { difficulty: 'Easy-Medium', question: 'A rectangular gate is twice as long as it is tall. How many lines of symmetry does this rectangle have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'Any non-square rectangle, no matter its exact proportions, has 2 lines of symmetry — one vertical and one horizontal.' },
        { difficulty: 'Medium', question: 'A regular pentagon-shaped badge is designed for a school crest. How many lines of symmetry does a regular pentagon have?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A regular pentagon has 5 lines of symmetry, each running from a corner to the midpoint of the opposite side.' },
        { difficulty: 'Medium', question: 'A scalene triangle has three sides that are all different lengths. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A scalene triangle has 0 lines of symmetry, because with all three sides different lengths, no fold can ever produce two matching halves.' },
        { difficulty: 'Medium', question: 'What type of line of symmetry does the letter W have — vertical, horizontal, or diagonal?', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical'], explanation: 'The letter W folds neatly down the middle from top to bottom, so its single line of symmetry is vertical.' },
        { difficulty: 'Medium', question: 'Does an equilateral triangle have a horizontal line of symmetry when it is drawn with one flat side at the bottom and one point at the top? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'No — an equilateral triangle drawn point-up has 3 lines of symmetry, but each one runs from a corner to the opposite side\'s midpoint. With the flat side at the bottom, the vertical line through the top point is one of them, but the other two are diagonal, and none of the three is a purely horizontal line.' },
        { difficulty: 'Medium', question: 'The capital letter I (drawn as a plain vertical stroke with a top and bottom serif bar of equal width) has two lines of symmetry. Name both types.', checkMode: 'auto', correctAnswer: 'verticalandhorizontal', correctAnswers: ['verticalandhorizontal', 'vertical and horizontal', 'horizontal and vertical', 'horizontalandvertical'], explanation: 'This style of the letter I has a vertical line down the centre of the stroke and a horizontal line through the middle of the bar, so it has one vertical and one horizontal line of symmetry.' },
        { difficulty: 'Medium', question: 'A traditional South African beadwork pattern uses a diamond (rhombus) motif with two lines of symmetry along its diagonals. Is this diamond shape symmetrical?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — a rhombus (diamond shape) has 2 lines of symmetry, both running along its diagonals, because opposite sides are equal and opposite angles match.' },
        { difficulty: 'Medium', question: 'Musa looks at a leaf that has a clear central vein running down the middle, with the leaf edges curving evenly on either side. Along what type of line does this leaf show symmetry?', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical'], explanation: 'The leaf\'s line of symmetry runs along the central vein from the stem to the tip — this is typically drawn as a vertical line, with each side of the leaf mirroring the other.' },
        { difficulty: 'Medium', question: 'A traffic yield (give way) sign is shaped like a triangle pointing downward with two equal slanted sides. A driver claims it has no lines of symmetry because it points down instead of up. Explain whether the driver is correct.', answer: 'The driver is not correct. The direction the triangle points does not change whether it has symmetry — it is still an isosceles triangle with two equal sides, so it still has exactly 1 line of symmetry. That line simply runs vertically from the bottom point straight up to the midpoint of the top (flat) side, instead of top-to-bottom. Rotating or flipping a symmetrical shape does not remove its symmetry.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A simple paper snowflake is cut so that it has 6 identical repeating sections around its centre, like a regular hexagon\'s pattern. How many lines of symmetry would you expect this snowflake design to have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A design with 6 identical repeating sections arranged like a regular hexagon has 6 lines of symmetry, matching the hexagon\'s own count.' },
        { difficulty: 'Hard', question: 'A student claims: "An isosceles triangle has 2 lines of symmetry, one through each of its two equal sides." Explain why this is incorrect and state the correct number.', answer: 'This is incorrect. An isosceles triangle has only 1 line of symmetry, not 2. That single line runs from the vertex where the two equal sides meet, straight down to the midpoint of the third (unequal) side. The two equal sides themselves are not lines of symmetry — they are simply sides of the triangle, and folding along a side does not divide the triangle into two matching halves at all.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Palesa says: "A rectangle and a rhombus (diamond) both have exactly 2 lines of symmetry, so their lines of symmetry must be the same type." Is Palesa correct? Explain.', answer: 'Palesa is only half right. It is true that both a rectangle and a rhombus have exactly 2 lines of symmetry each, but the types of lines are different. A rectangle\'s 2 lines of symmetry are vertical and horizontal (through the midpoints of its sides), while a rhombus\'s 2 lines of symmetry are its two diagonals (corner to corner). Having the same number of lines of symmetry does not mean the lines are the same type.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Given a word written in capital letters, "TAM", a student claims the whole word has a line of symmetry "because each individual letter (T, A, M) has its own line of symmetry." Explain why this reasoning is flawed even though each letter is individually symmetrical.', answer: 'The reasoning is flawed because each letter having its own line of symmetry does not mean the whole word does. For the whole word "TAM" to have a line of symmetry, folding the entire word along one single line would need to make the left part of the word land exactly on the right part — but the letters T, A, and M are different shapes and sit side by side in a row, not mirrored around a shared centre point. So although T, A, and M are each individually symmetrical, the word "TAM" as a whole has 0 lines of symmetry.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a circle and a regular hexagon. Which has more lines of symmetry, and how would you describe the difference?', checkMode: 'auto', correctAnswer: 'circlemore', correctAnswers: ['circlemore', 'circle has more', 'the circle, infinite', 'circle, infinitely many more'], explanation: 'A circle has infinitely many lines of symmetry, while a regular hexagon has only 6. So the circle has more — in fact, since the circle\'s lines of symmetry never run out, it has infinitely many more than the hexagon\'s fixed 6.' },
        { difficulty: 'Hard', question: 'A composite logo is made from a regular hexagon with an equilateral triangle attached exactly centred on top of one of its sides (pointing outward, like a tip added to one edge). Explain how many lines of symmetry this composite shape has and why most of the hexagon\'s original 6 lines are lost.', answer: 'The composite logo has only 1 line of symmetry — the single vertical line that runs through the tip of the attached triangle, through the centre of the hexagon, and through the midpoint of the hexagon\'s opposite side. Most of the hexagon\'s original 6 lines of symmetry are lost because the triangle is only attached to one side, which breaks the even, balanced pattern the hexagon needed for its other 5 lines to work — for example, a line through a pair of hexagon corners not aligned with the triangle would now have the triangle\'s bump on one side of the fold but nothing matching it on the other side. Only the one line that happens to pass through both the triangle\'s tip and the opposite side\'s midpoint still produces two matching halves.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply everything you know about symmetry to shapes, letters, and real-world designs with confidence.' },
        { minScore: 15, message: 'Great work! Look back at any question you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on symmetry and give the word problems another try.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again and retry this set. You will get there!' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Perfect! You have mastered symmetry.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of symmetry.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
