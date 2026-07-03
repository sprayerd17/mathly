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
        '<DiagramPlaceholder label="Diagrams showing a square with all 4 lines of symmetry highlighted in blue and the letter A with its vertical line of symmetry highlighted in blue" />',

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
        '<DiagramPlaceholder label="Diagrams showing a rectangle with its 2 lines of symmetry highlighted in blue and an equilateral triangle with all 3 lines of symmetry highlighted in blue" />',

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
        '<DiagramPlaceholder label="Diagram showing a butterfly with its vertical line of symmetry highlighted in blue and a house shape with its single vertical line of symmetry highlighted in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing examples of symmetry in everyday life including butterflies leaves buildings and how to identify the line of symmetry in each" />',
    },
  ],
  topicPractice: [],
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
