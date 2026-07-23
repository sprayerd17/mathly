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

      videoPlaceholder:
        'Short video showing how to identify the right-angled triangle inside a geometric figure and apply the Theorem of Pythagoras to find unknown lengths',
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

      videoPlaceholder:
        'Short video showing how to solve multi-step Pythagoras problems in real-life contexts and combined shapes, including the algebraic approach for an unknown hypotenuse',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — diagrams referenced in text but no diagramSvg yet (Phase 1)
    // Block 1 (0-1):   Find the hypotenuse (two legs given)
    // Block 2 (2-3):   Find a missing leg (hypotenuse + one leg given)
    // Block 3 (4-6):   Verify whether a triangle is right-angled (converse)
    // Block 4 (7-8):   Real life — ladder against a wall
    // Block 5 (9-11):  Real life — diagonal of a rectangle / distance between two points
    // Block 6 (12-19): Combined / multi-step problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Find the hypotenuse (Easy)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two shorter sides (legs) are 6 cm and 8 cm, meeting at the right angle. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'c² = 6² + 8² = 36 + 64 = 100.\nc = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 9 cm and 12 cm. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'c² = 9² + 12² = 81 + 144 = 225.\nc = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 10 cm and one leg (adjacent to the right angle) is 6 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'other leg² = 10² − 6² = 100 − 36 = 64.\nother leg = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 17 cm and one leg is 8 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'other leg² = 17² − 8² = 289 − 64 = 225.\nother leg = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'A triangle has sides 9 cm, 12 cm and 15 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n9² + 12² = 81 + 144 = 225.\n15² = 225.\nSince 225 = 225, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">15 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 7 cm, 10 cm and 12 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'NO'], answer: 'No', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n7² + 10² = 49 + 100 = 149.\n12² = 144.\nSince 149 ≠ 144, the triangle is not right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">12 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 20 cm, 21 cm and 29 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n20² + 21² = 400 + 441 = 841.\n29² = 841.\nSince 841 = 841, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">21 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">29 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 10 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 6 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8m', '8 m'], answer: '8 m', explanation: 'The ladder is the hypotenuse (10 m). The distance from the wall is one leg (6 m).\nheight² = 10² − 6² = 100 − 36 = 64.\nheight = √64 = 8 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">10 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 12 m up the wall. The foot of the ladder is 5 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], answer: '13 m', explanation: 'The wall height (12 m) and base distance (5 m) are the two legs. The ladder is the hypotenuse.\nladder² = 12² + 5² = 144 + 25 = 169.\nladder = √169 = 13 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Thabo's rectangular field is 24 m long and 18 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30m', '30 m'], answer: '30 m', explanation: 'The diagonal is the hypotenuse of a right-angled triangle with the length and width as the two legs.\ndiagonal² = 24² + 18² = 576 + 324 = 900.\ndiagonal = √900 = 30 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Naledi walks 11 km along one road, then 60 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61km', '61 km'], answer: '61 km', explanation: 'The two roads are the two legs of a right-angled triangle, and the straight-line distance is the hypotenuse.\ndistance² = 11² + 60² = 121 + 3 600 = 3 721.\ndistance = √3 721 = 61 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 7 m wide and 5.5 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '8.9', correctAnswers: ['8.9', '8.90', '8.9m', '8.90m', '8.9 m', '8.90 m', '8.9022', '8.9022m', '8.9022 m'], answer: '8.90 m', explanation: 'brace² = 7² + 5.5² = 49 + 30.25 = 79.25.\nbrace = √79.25 ≈ 8.90 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5.5 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: "A rectangular sports field is 16 m by 12 m. Zanele can either walk around two sides of the field or walk directly across the diagonal. Find the diagonal distance, then find how much shorter walking the diagonal is than walking around two sides.", answer: 'Diagonal = √(16² + 12²) = √(256 + 144) = √400 = 20 m.\nTwo-side route = 16 + 12 = 28 m.\nDifference = 28 − 20 = 8 m shorter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 26 cm and a width of 24 cm. Find the height of the screen.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'height² = 26² − 24² = 676 − 576 = 100.\nheight = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 8 units to the left and 6 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 units'], answer: '10 units', explanation: 'distance² = 8² + 6² = 64 + 36 = 100.\ndistance = √100 = 10 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 8 cm and a hypotenuse that is 4 cm longer than the other leg. Find both unknown lengths.', answer: 'Let the other leg = x. Then the hypotenuse = x + 4.\n8² + x² = (x + 4)².\n64 + x² = x² + 8x + 16. The x² terms cancel: 64 = 8x + 16.\n48 = 8x, so x = 6 cm (other leg). Hypotenuse = 6 + 4 = 10 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 16 cm and equal sides of 10 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'The height splits the base into two equal parts of 8 cm each, forming a right-angled triangle with the equal side (10 cm) as the hypotenuse.\nheight² = 10² − 8² = 100 − 64 = 36.\nheight = √36 = 6 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Kagiso says that in a right-angled triangle with legs 9 cm and 12 cm, the hypotenuse must be 20 cm because 9 + 12 − 1 = 20. Explain why he is wrong and find the correct hypotenuse.', answer: "Kagiso is wrong — the hypotenuse is not found by adding the legs, it must be calculated using the Theorem of Pythagoras. c² = 9² + 12² = 81 + 144 = 225, so c = √225 = 15 cm, not 20 cm.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A rectangular plot of land is 20 m by 15 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the length of the diagonal path, then find the total length of fencing and path material needed.", answer: 'Diagonal = √(20² + 15²) = √(400 + 225) = √625 = 25 m.\nPerimeter = 2(20 + 15) = 70 m.\nTotal length = 70 + 25 = 95 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 13 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 5 m from the wall, and the second has its foot 12 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', answer: 'First ladder: height² = 13² − 5² = 169 − 25 = 144, so height = 12 m.\nSecond ladder: height² = 13² − 12² = 169 − 144 = 25, so height = 5 m.\nDifference = 12 − 5 = 7 m higher.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Theorem of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the converse or multi-step problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the hypotenuse and a missing leg, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Find the hypotenuse (Easy)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 8 cm and 15 cm. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], answer: '17 cm', explanation: 'c² = 8² + 15² = 64 + 225 = 289.\nc = √289 = 17 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 12 cm and 16 cm. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], answer: '20 cm', explanation: 'c² = 12² + 16² = 144 + 256 = 400.\nc = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 13 cm and one leg (adjacent to the right angle) is 5 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'other leg² = 13² − 5² = 169 − 25 = 144.\nother leg = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 25 cm and one leg is 7 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'other leg² = 25² − 7² = 625 − 49 = 576.\nother leg = √576 = 24 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'A triangle has sides 8 cm, 15 cm and 17 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n8² + 15² = 64 + 225 = 289.\n17² = 289.\nSince 289 = 289, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">15 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 6 cm, 9 cm and 11 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'NO'], answer: 'No', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n6² + 9² = 36 + 81 = 117.\n11² = 121.\nSince 117 ≠ 121, the triangle is not right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">9 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">11 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 10 cm, 24 cm and 26 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n10² + 24² = 100 + 576 = 676.\n26² = 676.\nSince 676 = 676, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">26 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 13 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 12 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5m', '5 m'], answer: '5 m', explanation: 'The ladder is the hypotenuse (13 m). The distance from the wall is one leg (12 m).\nheight² = 13² − 12² = 169 − 144 = 25.\nheight = √25 = 5 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">13 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 9 m up the wall. The foot of the ladder is 12 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], answer: '15 m', explanation: 'The wall height (9 m) and base distance (12 m) are the two legs. The ladder is the hypotenuse.\nladder² = 9² + 12² = 81 + 144 = 225.\nladder = √225 = 15 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Sipho's rectangular field is 30 m long and 16 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34m', '34 m'], answer: '34 m', explanation: 'The diagonal is the hypotenuse of a right-angled triangle with the length and width as the two legs.\ndiagonal² = 30² + 16² = 900 + 256 = 1 156.\ndiagonal = √1 156 = 34 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Amahle walks 12 km along one road, then 35 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37km', '37 km'], answer: '37 km', explanation: 'The two roads are the two legs of a right-angled triangle, and the straight-line distance is the hypotenuse.\ndistance² = 12² + 35² = 144 + 1 225 = 1 369.\ndistance = √1 369 = 37 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 9 m wide and 6 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '10.82', correctAnswers: ['10.82', '10.82m', '10.82 m', '10.8167', '10.8167m', '10.8167 m'], answer: '10.82 m', explanation: 'brace² = 9² + 6² = 81 + 36 = 117.\nbrace = √117 ≈ 10.82 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: "A rectangular sports field is 20 m by 15 m. Lerato can either walk around two sides of the field or walk directly across the diagonal. Find the diagonal distance, then find how much shorter walking the diagonal is than walking around two sides.", answer: 'Diagonal = √(20² + 15²) = √(400 + 225) = √625 = 25 m.\nTwo-side route = 20 + 15 = 35 m.\nDifference = 35 − 25 = 10 m shorter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 20 cm and a width of 16 cm. Find the height of the screen.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'height² = 20² − 16² = 400 − 256 = 144.\nheight = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 5 units to the left and 12 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 units'], answer: '13 units', explanation: 'distance² = 5² + 12² = 25 + 144 = 169.\ndistance = √169 = 13 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 12 cm and a hypotenuse that is 6 cm longer than the other leg. Find both unknown lengths.', answer: 'Let the other leg = x. Then the hypotenuse = x + 6.\n12² + x² = (x + 6)².\n144 + x² = x² + 12x + 36. The x² terms cancel: 144 = 12x + 36.\n108 = 12x, so x = 9 cm (other leg). Hypotenuse = 9 + 6 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 12 cm and equal sides of 10 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'The height splits the base into two equal parts of 6 cm each, forming a right-angled triangle with the equal side (10 cm) as the hypotenuse.\nheight² = 10² − 6² = 100 − 36 = 64.\nheight = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Buhle says that in a right-angled triangle with legs 12 cm and 16 cm, the hypotenuse must be 27 cm because 12 + 16 − 1 = 27. Explain why she is wrong and find the correct hypotenuse.', answer: "Buhle is wrong — the hypotenuse is not found by adding the legs, it must be calculated using the Theorem of Pythagoras. c² = 12² + 16² = 144 + 256 = 400, so c = √400 = 20 cm, not 27 cm.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A rectangular plot of land is 16 m by 12 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the length of the diagonal path, then find the total length of fencing and path material needed.", answer: 'Diagonal = √(16² + 12²) = √(256 + 144) = √400 = 20 m.\nPerimeter = 2(16 + 12) = 56 m.\nTotal length = 56 + 20 = 76 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 10 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 6 m from the wall, and the second has its foot 8 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', answer: 'First ladder: height² = 10² − 6² = 100 − 36 = 64, so height = 8 m.\nSecond ladder: height² = 10² − 8² = 100 − 64 = 36, so height = 6 m.\nDifference = 8 − 6 = 2 m higher.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Theorem of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the converse or multi-step problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the hypotenuse and a missing leg, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Find the hypotenuse (Easy)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 20 cm and 21 cm. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], answer: '29 cm', explanation: 'c² = 20² + 21² = 400 + 441 = 841.\nc = √841 = 29 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 15 cm and 20 cm. Find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], answer: '25 cm', explanation: 'c² = 15² + 20² = 225 + 400 = 625.\nc = √625 = 25 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 17 cm and one leg (adjacent to the right angle) is 15 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'other leg² = 17² − 15² = 289 − 225 = 64.\nother leg = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 41 cm and one leg is 9 cm. Find the length of the other leg.', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40cm', '40 cm'], answer: '40 cm', explanation: 'other leg² = 41² − 9² = 1 681 − 81 = 1 600.\nother leg = √1 600 = 40 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'A triangle has sides 5 cm, 12 cm and 13 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n5² + 12² = 25 + 144 = 169.\n13² = 169.\nSince 169 = 169, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 9 cm, 10 cm and 14 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No', 'NO'], answer: 'No', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n9² + 10² = 81 + 100 = 181.\n14² = 196.\nSince 181 ≠ 196, the triangle is not right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">14 cm</text></svg>" },
        { difficulty: 'Medium', question: 'A triangle has sides 18 cm, 24 cm and 30 cm. Use the converse of the Theorem of Pythagoras to determine whether it is right-angled. Answer "yes" or "no".', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes', 'YES'], answer: 'Yes', explanation: 'Check if the sum of the squares of the two shorter sides equals the square of the longest side:\n18² + 24² = 324 + 576 = 900.\n30² = 900.\nSince 900 = 900, the triangle is right-angled ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">30 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 15 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 9 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12m', '12 m'], answer: '12 m', explanation: 'The ladder is the hypotenuse (15 m). The distance from the wall is one leg (9 m).\nheight² = 15² − 9² = 225 − 81 = 144.\nheight = √144 = 12 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">15 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 8 m up the wall. The foot of the ladder is 15 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17m', '17 m'], answer: '17 m', explanation: 'The wall height (8 m) and base distance (15 m) are the two legs. The ladder is the hypotenuse.\nladder² = 8² + 15² = 64 + 225 = 289.\nladder = √289 = 17 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Kagiso's rectangular field is 20 m long and 15 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], answer: '25 m', explanation: 'The diagonal is the hypotenuse of a right-angled triangle with the length and width as the two legs.\ndiagonal² = 20² + 15² = 400 + 225 = 625.\ndiagonal = √625 = 25 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Zanele walks 14 km along one road, then 48 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50km', '50 km'], answer: '50 km', explanation: 'The two roads are the two legs of a right-angled triangle, and the straight-line distance is the hypotenuse.\ndistance² = 14² + 48² = 196 + 2 304 = 2 500.\ndistance = √2 500 = 50 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 8 m wide and 4.5 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '9.18', correctAnswers: ['9.18', '9.18m', '9.18 m', '9.1788', '9.1788m', '9.1788 m'], answer: '9.18 m', explanation: 'brace² = 8² + 4.5² = 64 + 20.25 = 84.25.\nbrace = √84.25 ≈ 9.18 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">4.5 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: "A rectangular sports field is 24 m by 10 m. Sipho can either walk around two sides of the field or walk directly across the diagonal. Find the diagonal distance, then find how much shorter walking the diagonal is than walking around two sides.", answer: 'Diagonal = √(24² + 10²) = √(576 + 100) = √676 = 26 m.\nTwo-side route = 24 + 10 = 34 m.\nDifference = 34 − 26 = 8 m shorter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 29 cm and a width of 21 cm. Find the height of the screen.', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], answer: '20 cm', explanation: 'height² = 29² − 21² = 841 − 441 = 400.\nheight = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 9 units to the left and 12 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 units'], answer: '15 units', explanation: 'distance² = 9² + 12² = 81 + 144 = 225.\ndistance = √225 = 15 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 9 cm and a hypotenuse that is 3 cm longer than the other leg. Find both unknown lengths.', answer: 'Let the other leg = x. Then the hypotenuse = x + 3.\n9² + x² = (x + 3)².\n81 + x² = x² + 6x + 9. The x² terms cancel: 81 = 6x + 9.\n72 = 6x, so x = 12 cm (other leg). Hypotenuse = 12 + 3 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 24 cm and equal sides of 20 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16cm', '16 cm'], answer: '16 cm', explanation: 'The height splits the base into two equal parts of 12 cm each, forming a right-angled triangle with the equal side (20 cm) as the hypotenuse.\nheight² = 20² − 12² = 400 − 144 = 256.\nheight = √256 = 16 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Amahle says that in a right-angled triangle with legs 15 cm and 20 cm, the hypotenuse must be 34 cm because 15 + 20 − 1 = 34. Explain why she is wrong and find the correct hypotenuse.', answer: "Amahle is wrong — the hypotenuse is not found by adding the legs, it must be calculated using the Theorem of Pythagoras. c² = 15² + 20² = 225 + 400 = 625, so c = √625 = 25 cm, not 34 cm.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A rectangular plot of land is 9 m by 12 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the length of the diagonal path, then find the total length of fencing and path material needed.", answer: 'Diagonal = √(9² + 12²) = √(81 + 144) = √225 = 15 m.\nPerimeter = 2(9 + 12) = 42 m.\nTotal length = 42 + 15 = 57 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 25 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 7 m from the wall, and the second has its foot 24 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', answer: 'First ladder: height² = 25² − 7² = 625 − 49 = 576, so height = 24 m.\nSecond ladder: height² = 25² − 24² = 625 − 576 = 49, so height = 7 m.\nDifference = 24 − 7 = 17 m higher.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered the Theorem of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the converse or multi-step problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the hypotenuse and a missing leg, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
