import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Pythagoras roles) ───────────────────────────────────────
// known legs       → blue   (#2563eb)
// hypotenuse       → red    (#dc2626)
// height / diagonal→ orange (#ea580c)
// final comparison → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'The Theorem of Pythagoras',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — APPLYING PYTHAGORAS TO SOLVE PROBLEMS INVOLVING GEOMETRIC FIGURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-geometric-figures',
      title: 'Applying Pythagoras to Solve Problems Involving Geometric Figures',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We use the <strong>Theorem of Pythagoras</strong> (${re('a')}² + ${bl('b')}² = ${or('c')}²) to solve problems involving unknown lengths in geometric figures that contain right-angled triangles, including more complex figures where the right-angled triangle must first be identified within a larger shape.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known legs')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hypotenuse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('height / diagonal')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The theorem</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#0f1f3d;margin:0;">${re('a')}² + ${bl('b')}² = ${or('c')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:8px;margin-bottom:0;">where ${or('c')} is the <strong>hypotenuse</strong> — the side opposite the right angle and always the longest side</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two cases</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Finding the hypotenuse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">When both ${bl('legs')} are known:<br>${or('c')} = √(${re('a')}² + ${bl('b')}²)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Example: diagonal of a rectangle</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Finding a leg</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">When the ${re('hypotenuse')} and one ${bl('leg')} are known:<br>${bl('b')} = √(${re('c')}² − ${bl('a')}²)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Example: height of an isosceles triangle</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Identify the right-angled triangle first</p>` +
        `<p style="margin:0;color:#1e3a8a;">In complex figures, look for the hidden right-angled triangle. In a rectangle, the diagonal creates one. In an isosceles triangle, the height from the apex to the base creates two. Once you find it, label the sides and apply the theorem.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle has length 12 cm and width 5 cm. Find the length of its diagonal.',
          answer: `The diagonal = ${or('13 cm')}`,
          steps: [
            `The diagonal forms the ${or('hypotenuse')} of a right-angled triangle with the length and width as the two ${bl('known legs')}.`,
            `Apply the theorem: ${or('c')}² = ${bl('12')}² + ${bl('5')}² = ${bl('144')} + ${bl('25')} = 169`,
            `${or('c')} = √169 = ${or('13')} cm. See the diagram below.`,
          ],
        },
        {
          question: 'Sipho has an isosceles triangle with base 10 cm and equal sides of 13 cm. Find the height.',
          answer: `The height = ${or('12 cm')}`,
          steps: [
            `The ${or('height')} splits the base in half (${bl('5')} cm each side) and forms a right angle. This creates a right-angled triangle with ${bl('half-base')} = 5 cm as one leg and ${re('equal side')} = 13 cm as the hypotenuse.`,
            `Apply the theorem: ${or('height')}² = ${re('13')}² − ${bl('5')}² = ${re('169')} − ${bl('25')} = 144`,
            `${or('height')} = √144 = ${or('12')} cm`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a rectangle with its diagonal drawn, forming a right-angled triangle with the length, width and diagonal labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify the right-angled triangle inside a geometric figure and apply the Theorem of Pythagoras to find unknown lengths" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING MULTI-STEP PROBLEMS IN REAL-LIFE AND COMBINED SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-multi-step-problems',
      title: 'Solving Multi-Step Problems in Real-Life and Combined Shapes',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We apply the Theorem of Pythagoras within <strong>multi-step problems</strong>, often requiring us to first find one unknown length before using it to find another, especially in combined or compound shapes.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first unknown found')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second unknown')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final comparison')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multi-step strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Draw or label the figure. Find the right-angled triangle(s) and decide which unknown to find first.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('First step')} — Apply Pythagoras to find the first unknown. This result feeds into the next step.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Compare or complete')} — Use the result to answer the full question — compare distances, calculate totals, or interpret the context.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algebraic multi-step tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">When an unknown side is expressed in terms of a variable (e.g. hypotenuse = x + 3), expand both sides and apply the theorem. The x² terms will cancel, leaving a linear equation to solve.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A ladder is 8.5 m long and reaches a window 7.5 m up a wall. Find the distance from the base of the ladder to the wall.',
          answer: `The base distance = ${bl('4 m')}`,
          steps: [
            `The ladder is the ${re('hypotenuse')} (8.5 m). The wall height is a ${bl('known leg')} (7.5 m). The ${bl('base distance')} is the unknown leg.`,
            `Apply the theorem: ${bl('base')}² = ${re('8.5')}² − ${bl('7.5')}² = ${re('72.25')} − ${bl('56.25')} = 16`,
            `${bl('base')} = √16 = ${bl('4')} m`,
          ],
        },
        {
          question: 'Lerato has a right-angled triangle with one leg of 9 cm and a hypotenuse 3 cm longer than the other leg. Find both unknown lengths.',
          answer: `Other leg = ${bl('12 cm')}, hypotenuse = ${or('15 cm')}`,
          steps: [
            `Let the ${bl('other leg')} = x. Then the ${or('hypotenuse')} = x + 3.`,
            `Apply the theorem: ${bl('9')}² + ${bl('x')}² = (${or('x + 3')})²`,
            `81 + x² = x² + 6x + 9. The x² terms cancel: 81 = 6x + 9`,
            `72 = 6x, so ${bl('x')} = 12 cm (other leg). ${or('Hypotenuse')} = 12 + 3 = ${or('15')} cm`,
          ],
        },
        {
          question: "Thabo's rectangular field is 24 m by 18 m. He wants to walk diagonally across it instead of around two sides. Find how much shorter the diagonal path is.",
          answer: `The diagonal path is ${gr('12 m')} shorter`,
          steps: [
            `Find the ${bl('diagonal')}: ${bl('diagonal')}² = 24² + 18² = 576 + 324 = 900. ${bl('Diagonal')} = √900 = ${bl('30')} m`,
            `Find the ${or('two-side route')}: 24 + 18 = ${or('42')} m`,
            `${gr('Difference')}: ${or('42')} − ${bl('30')} = ${gr('12')} m shorter`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a rectangular field with diagonal path shown alongside the two-side route, with measurements labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step Pythagoras problems in real-life contexts and combined shapes, including the algebraic approach for an unknown hypotenuse" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A rectangle has length 8 cm and width 6 cm. Find the diagonal.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      correctAnswers: ['10', '10cm', '10 cm'],
      explanation: 'c² = 8² + 6² = 64 + 36 = 100. c = √100 = 10 cm ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'An isosceles triangle has base 12 cm and equal sides of 10 cm. Find the height.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      correctAnswers: ['8', '8cm', '8 cm'],
      explanation: 'The height splits the base into 6 cm each side.\nheight² = 10² − 6² = 100 − 36 = 64. height = √64 = 8 cm ✓',
    },

    // ── Q3 Hard (self) ────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a square with side 5 cm has a diagonal of 5 cm too. Is he correct? Explain.',
      answer: 'No — the diagonal of a square forms the hypotenuse of a right-angled triangle with both legs equal to 5 cm. Diagonal = √(5² + 5²) = √50 ≈ 7.07 cm, not 5 cm.',
      checkMode: 'self',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A ladder is 10 m long and reaches a window 8 m up a wall. Find the distance from the base to the wall.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      correctAnswers: ['6', '6m', '6 m'],
      explanation: 'base² = 10² − 8² = 100 − 64 = 36. base = √36 = 6 m ✓',
    },

    // ── Q5 Hard (self) ────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has a right-angled triangle with one leg of 6 cm and a hypotenuse 2 cm longer than the other leg. Find both unknown lengths.',
      answer: 'Let other leg = x, hypotenuse = x + 2.\n36 + x² = (x + 2)².\n36 + x² = x² + 4x + 4.\n32 = 4x.\nx = 8 cm (other leg). Hypotenuse = 10 cm.',
      checkMode: 'self',
    },

    // ── Q6 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A rectangular field is 30 m by 40 m. Find the length of its diagonal.',
      answer: '50',
      checkMode: 'auto',
      correctAnswer: '50',
      correctAnswers: ['50', '50m', '50 m'],
      explanation: 'diagonal² = 30² + 40² = 900 + 1 600 = 2 500. diagonal = √2 500 = 50 m ✓',
    },

    // ── Q7 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo's field is 21 m by 20 m. He walks diagonally instead of around two sides. Find how much shorter the diagonal path is.",
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      correctAnswers: ['12', '12m', '12 m'],
      explanation: 'diagonal² = 21² + 20² = 441 + 400 = 841. diagonal = √841 = 29 m.\nTwo sides = 21 + 20 = 41 m.\nDifference = 41 − 29 = 12 m shorter ✓',
    },

    // ── Q8 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A right-angled triangle has legs 5 cm and 12 cm. Find the hypotenuse.',
      answer: '13',
      checkMode: 'auto',
      correctAnswer: '13',
      correctAnswers: ['13', '13cm', '13 cm'],
      explanation: 'c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13 cm ✓',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A right-angled triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      correctAnswers: ['15', '15cm', '15 cm'],
      explanation: 'other leg² = 17² − 8² = 289 − 64 = 225. other leg = √225 = 15 cm ✓',
    },

    // ── Q10 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle has an isosceles triangle with base 16 cm and height 6 cm. Find the length of each equal side.',
      answer: 'Half the base = 8 cm.\nSide² = 8² + 6² = 64 + 36 = 100.\nSide = √100 = 10 cm.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "A TV screen's diagonal is 50 cm. If its height is 30 cm, find its width.",
      answer: '40',
      checkMode: 'auto',
      correctAnswer: '40',
      correctAnswers: ['40', '40cm', '40 cm'],
      explanation: 'width² = 50² − 30² = 2 500 − 900 = 1 600. width = √1 600 = 40 cm ✓',
    },

    // ── Q12 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says you can use Pythagoras to find the diagonal of any rectangle, regardless of its dimensions. Is he correct? Explain.',
      answer: 'Yes — the diagonal of any rectangle always forms the hypotenuse of a right-angled triangle with the length and width as the two legs, so Pythagoras always applies.',
      checkMode: 'self',
    },

    // ── Q13 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A right-angled triangle has a hypotenuse 5 cm longer than one leg, and the other leg is 12 cm. Find all three sides.',
      answer: 'Let leg = x, hypotenuse = x + 5.\n144 + x² = (x + 5)².\n144 + x² = x² + 10x + 25.\n119 = 10x.\nx = 11.9 cm. Hypotenuse = 16.9 cm.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A ladder leans against a wall, reaching 6 m up, with its base 4.5 m from the wall. Find the length of the ladder to 2 decimal places.',
      answer: '7.5',
      checkMode: 'auto',
      correctAnswer: '7.5',
      correctAnswers: ['7.5', '7.50', '7.5m', '7.50m', '7.5 m', '7.50 m'],
      explanation: 'ladder² = 6² + 4.5² = 36 + 20.25 = 56.25. ladder = √56.25 = 7.5 m ✓',
    },

    // ── Q15 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato's rectangular garden is 18 m by 24 m. She wants to add a diagonal path. Find its length, then find the total fencing needed if she fences around the garden's perimeter plus the diagonal path.",
      answer: 'Diagonal = √(18² + 24²) = √(324 + 576) = √900 = 30 m.\nPerimeter = 2(18 + 24) = 84 m.\nTotal fencing = 84 + 30 = 114 m.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered the Theorem of Pythagoras.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
