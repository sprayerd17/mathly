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
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two shorter sides (legs) are 6 cm and 8 cm, meeting at the right angle. Find the length of the hypotenuse.', checkMode: 'auto', options: ['10 cm', '14 cm', '100 cm', '5.3 cm'], correctIndex: 0, explanation: 'c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 9 cm and 12 cm. Find the length of the hypotenuse.', checkMode: 'auto', options: ['21 cm', '15 cm', '225 cm', '7.9 cm'], correctIndex: 1, explanation: 'c² = 9² + 12² = 81 + 144 = 225. c = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 10 cm and one leg (adjacent to the right angle) is 6 cm. Find the length of the other leg.', checkMode: 'auto', options: ['4 cm', '64 cm', '8 cm', '11.7 cm'], correctIndex: 2, explanation: 'other leg² = 10² − 6² = 100 − 36 = 64. other leg = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 17 cm and one leg is 8 cm. Find the length of the other leg.', checkMode: 'auto', options: ['9 cm', '225 cm', '18.8 cm', '15 cm'], correctIndex: 3, explanation: 'other leg² = 17² − 8² = 289 − 64 = 225. other leg = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 9² + 12² = 15²', 'No — 9² + 12² ≠ 15²', 'Yes — 9 + 12 = 15', 'No — 9² + 15² ≠ 12²'], correctIndex: 0, explanation: 'Check the two shorter sides against the longest: 9² + 12² = 81 + 144 = 225, and 15² = 225. Since 225 = 225, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">15 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 7² + 10² = 12²', 'No — 7² + 10² ≠ 12²', 'Yes — 7 + 10 = 12', 'No — 7² + 12² ≠ 10²'], correctIndex: 1, explanation: 'Check the two shorter sides against the longest: 7² + 10² = 49 + 100 = 149, and 12² = 144. Since 149 ≠ 144, the triangle is not right-angled — No ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">12 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['No — 20² + 21² ≠ 29²', 'Yes — 20 + 21 = 29', 'Yes — 20² + 21² = 29²', 'No — 20² + 29² ≠ 21²'], correctIndex: 2, explanation: 'Check the two shorter sides against the longest: 20² + 21² = 400 + 441 = 841, and 29² = 841. Since 841 = 841, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">21 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">29 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 10 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 6 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', options: ['4 m', '64 m', '11.7 m', '8 m'], correctIndex: 3, explanation: 'The ladder is the hypotenuse (10 m) and the base distance is one leg (6 m). height² = 10² − 6² = 100 − 36 = 64. height = √64 = 8 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">10 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 12 m up the wall. The foot of the ladder is 5 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', options: ['13 m', '17 m', '169 m', '10.9 m'], correctIndex: 0, explanation: 'The wall height (12 m) and base distance (5 m) are the two legs. ladder² = 12² + 5² = 144 + 25 = 169. ladder = √169 = 13 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Thabo's rectangular field is 24 m long and 18 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', options: ['42 m', '30 m', '900 m', '15.9 m'], correctIndex: 1, explanation: 'The diagonal is the hypotenuse with the length and width as the two legs. diagonal² = 24² + 18² = 576 + 324 = 900. diagonal = √900 = 30 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Naledi drives 11 km along one road, then 60 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', options: ['71 km', '3721 km', '61 km', '59 km'], correctIndex: 2, explanation: 'The two roads are the two legs and the straight-line distance is the hypotenuse. distance² = 11² + 60² = 121 + 3 600 = 3 721. distance = √3 721 = 61 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 2.4 m wide and 1.8 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', options: ['4.20 m', '9.00 m', '1.60 m', '3.00 m'], correctIndex: 3, explanation: 'brace² = 2.4² + 1.8² = 5.76 + 3.24 = 9. brace = √9 = 3.00 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">2.4 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1.8 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: 'A rectangular sports field is 16 m by 12 m. Zanele can either walk around two sides of the field or walk directly across the diagonal. Find how much shorter walking the diagonal is than walking around two sides.', checkMode: 'auto', options: ['8 m', '20 m', '28 m', '48 m'], correctIndex: 0, explanation: 'Diagonal² = 16² + 12² = 256 + 144 = 400, so diagonal = √400 = 20 m. Two-side route = 16 + 12 = 28 m. Difference = 28 − 20 = 8 m shorter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 26 cm and a width of 24 cm. Find the height of the screen.', checkMode: 'auto', options: ['2 cm', '10 cm', '100 cm', '35.4 cm'], correctIndex: 1, explanation: 'height² = 26² − 24² = 676 − 576 = 100. height = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 8 units to the left and 6 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', options: ['14 units', '100 units', '10 units', '5.3 units'], correctIndex: 2, explanation: 'distance² = 8² + 6² = 64 + 36 = 100. distance = √100 = 10 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 8 cm and a hypotenuse 4 cm longer than the other leg. Find the length of the other leg.', checkMode: 'auto', options: ['4 cm', '12 cm', '10 cm', '6 cm'], correctIndex: 3, explanation: 'Let the other leg = x, so the hypotenuse = x + 4. 8² + x² = (x + 4)². 64 + x² = x² + 8x + 16. The x² terms cancel: 64 = 8x + 16, so 48 = 8x, x = 6 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 16 cm and equal sides of 10 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', options: ['6 cm', '2 cm', '36 cm', '12.8 cm'], correctIndex: 0, explanation: 'The height splits the base into two 8 cm halves, forming a right-angled triangle with the equal side (10 cm) as the hypotenuse. height² = 10² − 8² = 100 − 64 = 36. height = √36 = 6 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Kagiso says that in a right-angled triangle with legs 9 cm and 12 cm, the hypotenuse must be 20 cm because 9 + 12 − 1 = 20. What is the correct length of the hypotenuse?', checkMode: 'auto', options: ['20 cm', '15 cm', '21 cm', '225 cm'], correctIndex: 1, explanation: 'The hypotenuse is not found by adding the legs — it must be calculated using the Theorem of Pythagoras. c² = 9² + 12² = 81 + 144 = 225, so c = √225 = 15 cm, not 20 cm ✓' },
        { difficulty: 'Hard', question: 'A rectangular plot of land is 20 m by 15 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the total length of fencing and path material needed.', checkMode: 'auto', options: ['70 m', '25 m', '95 m', '120 m'], correctIndex: 2, explanation: 'Diagonal² = 20² + 15² = 400 + 225 = 625, so diagonal = √625 = 25 m. Perimeter = 2(20 + 15) = 70 m. Total = 70 + 25 = 95 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 13 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 5 m from the wall, and the second has its foot 12 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', checkMode: 'auto', options: ['12 m', '5 m', '17 m', '7 m'], correctIndex: 3, explanation: 'First ladder: height² = 13² − 5² = 169 − 25 = 144, so height = 12 m. Second ladder: height² = 13² − 12² = 169 − 144 = 25, so height = 5 m. Difference = 12 − 5 = 7 m higher ✓' },
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
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 8 cm and 15 cm. Find the length of the hypotenuse.', checkMode: 'auto', options: ['17 cm', '23 cm', '289 cm', '12.7 cm'], correctIndex: 0, explanation: 'c² = 8² + 15² = 64 + 225 = 289. c = √289 = 17 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 12 cm and 16 cm. Find the length of the hypotenuse.', checkMode: 'auto', options: ['28 cm', '20 cm', '400 cm', '10.6 cm'], correctIndex: 1, explanation: 'c² = 12² + 16² = 144 + 256 = 400. c = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 13 cm and one leg (adjacent to the right angle) is 5 cm. Find the length of the other leg.', checkMode: 'auto', options: ['8 cm', '144 cm', '12 cm', '13.9 cm'], correctIndex: 2, explanation: 'other leg² = 13² − 5² = 169 − 25 = 144. other leg = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 25 cm and one leg is 7 cm. Find the length of the other leg.', checkMode: 'auto', options: ['18 cm', '576 cm', '26 cm', '24 cm'], correctIndex: 3, explanation: 'other leg² = 25² − 7² = 625 − 49 = 576. other leg = √576 = 24 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 8² + 15² = 17²', 'No — 8² + 15² ≠ 17²', 'Yes — 8 + 15 = 17', 'No — 8² + 17² ≠ 15²'], correctIndex: 0, explanation: 'Check the two shorter sides against the longest: 8² + 15² = 64 + 225 = 289, and 17² = 289. Since 289 = 289, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">15 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 6² + 9² = 11²', 'No — 6² + 9² ≠ 11²', 'Yes — 6 + 9 = 11', 'No — 6² + 11² ≠ 9²'], correctIndex: 1, explanation: 'Check the two shorter sides against the longest: 6² + 9² = 36 + 81 = 117, and 11² = 121. Since 117 ≠ 121, the triangle is not right-angled — No ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">9 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">11 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['No — 10² + 24² ≠ 26²', 'Yes — 10 + 24 = 26', 'Yes — 10² + 24² = 26²', 'No — 10² + 26² ≠ 24²'], correctIndex: 2, explanation: 'Check the two shorter sides against the longest: 10² + 24² = 100 + 576 = 676, and 26² = 676. Since 676 = 676, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">26 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 13 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 12 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', options: ['1 m', '25 m', '17.7 m', '5 m'], correctIndex: 3, explanation: 'The ladder is the hypotenuse (13 m) and the base distance is one leg (12 m). height² = 13² − 12² = 169 − 144 = 25. height = √25 = 5 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">13 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 9 m up the wall. The foot of the ladder is 12 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', options: ['15 m', '21 m', '225 m', '7.9 m'], correctIndex: 0, explanation: 'The wall height (9 m) and base distance (12 m) are the two legs. ladder² = 9² + 12² = 81 + 144 = 225. ladder = √225 = 15 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Sipho's rectangular field is 30 m long and 16 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', options: ['46 m', '34 m', '1156 m', '25.4 m'], correctIndex: 1, explanation: 'diagonal² = 30² + 16² = 900 + 256 = 1 156. diagonal = √1 156 = 34 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Amahle drives 12 km along one road, then 35 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', options: ['47 km', '1369 km', '37 km', '32.9 km'], correctIndex: 2, explanation: 'distance² = 12² + 35² = 144 + 1 225 = 1 369. distance = √1 369 = 37 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 1.6 m wide and 1.2 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', options: ['2.80 m', '4.00 m', '1.10 m', '2.00 m'], correctIndex: 3, explanation: 'brace² = 1.6² + 1.2² = 2.56 + 1.44 = 4. brace = √4 = 2.00 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1.6 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1.2 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: 'A rectangular sports field is 20 m by 15 m. Lerato can either walk around two sides of the field or walk directly across the diagonal. Find how much shorter walking the diagonal is than walking around two sides.', checkMode: 'auto', options: ['10 m', '25 m', '35 m', '60 m'], correctIndex: 0, explanation: 'Diagonal² = 20² + 15² = 400 + 225 = 625, so diagonal = √625 = 25 m. Two-side route = 20 + 15 = 35 m. Difference = 35 − 25 = 10 m shorter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 20 cm and a width of 16 cm. Find the height of the screen.', checkMode: 'auto', options: ['4 cm', '12 cm', '144 cm', '25.6 cm'], correctIndex: 1, explanation: 'height² = 20² − 16² = 400 − 256 = 144. height = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 5 units to the left and 12 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', options: ['17 units', '169 units', '13 units', '10.9 units'], correctIndex: 2, explanation: 'distance² = 5² + 12² = 25 + 144 = 169. distance = √169 = 13 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 12 cm and a hypotenuse 6 cm longer than the other leg. Find the length of the other leg.', checkMode: 'auto', options: ['6 cm', '18 cm', '15 cm', '9 cm'], correctIndex: 3, explanation: 'Let the other leg = x, so the hypotenuse = x + 6. 12² + x² = (x + 6)². 144 + x² = x² + 12x + 36. The x² terms cancel: 144 = 12x + 36, so 108 = 12x, x = 9 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 12 cm and equal sides of 10 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', options: ['8 cm', '4 cm', '64 cm', '11.7 cm'], correctIndex: 0, explanation: 'The height splits the base into two 6 cm halves, forming a right-angled triangle with the equal side (10 cm) as the hypotenuse. height² = 10² − 6² = 100 − 36 = 64. height = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Buhle says that in a right-angled triangle with legs 12 cm and 16 cm, the hypotenuse must be 27 cm because 12 + 16 − 1 = 27. What is the correct length of the hypotenuse?', checkMode: 'auto', options: ['27 cm', '20 cm', '28 cm', '400 cm'], correctIndex: 1, explanation: 'The hypotenuse is not found by adding the legs — it must be calculated using the Theorem of Pythagoras. c² = 12² + 16² = 144 + 256 = 400, so c = √400 = 20 cm, not 27 cm ✓' },
        { difficulty: 'Hard', question: 'A rectangular plot of land is 16 m by 12 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the total length of fencing and path material needed.', checkMode: 'auto', options: ['56 m', '20 m', '76 m', '96 m'], correctIndex: 2, explanation: 'Diagonal² = 16² + 12² = 256 + 144 = 400, so diagonal = √400 = 20 m. Perimeter = 2(16 + 12) = 56 m. Total = 56 + 20 = 76 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 10 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 6 m from the wall, and the second has its foot 8 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', checkMode: 'auto', options: ['8 m', '6 m', '14 m', '2 m'], correctIndex: 3, explanation: 'First ladder: height² = 10² − 6² = 100 − 36 = 64, so height = 8 m. Second ladder: height² = 10² − 8² = 100 − 64 = 36, so height = 6 m. Difference = 8 − 6 = 2 m higher ✓' },
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
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 20 cm and 21 cm. Find the length of the hypotenuse.', checkMode: 'auto', options: ['29 cm', '41 cm', '841 cm', '6.4 cm'], correctIndex: 0, explanation: 'c² = 20² + 21² = 400 + 441 = 841. c = √841 = 29 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the two legs meeting at the right angle are 15 cm and 20 cm. Find the length of the hypotenuse.', checkMode: 'auto', options: ['35 cm', '25 cm', '625 cm', '13.2 cm'], correctIndex: 1, explanation: 'c² = 15² + 20² = 225 + 400 = 625. c = √625 = 25 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 2 — Find a missing leg (Easy/Medium)
        { difficulty: 'Easy', question: 'In the right-angled triangle shown, the hypotenuse is 17 cm and one leg (adjacent to the right angle) is 15 cm. Find the length of the other leg.', checkMode: 'auto', options: ['2 cm', '64 cm', '8 cm', '22.7 cm'], correctIndex: 2, explanation: 'other leg² = 17² − 15² = 289 − 225 = 64. other leg = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In the right-angled triangle shown, the hypotenuse is 41 cm and one leg is 9 cm. Find the length of the other leg.', checkMode: 'auto', options: ['32 cm', '1600 cm', '42 cm', '40 cm'], correctIndex: 3, explanation: 'other leg² = 41² − 9² = 1 681 − 81 = 1 600. other leg = √1 600 = 40 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text></svg>" },

        // Block 3 — Verify right-angled triangle (converse of Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 5² + 12² = 13²', 'No — 5² + 12² ≠ 13²', 'Yes — 5 + 12 = 13', 'No — 5² + 13² ≠ 12²'], correctIndex: 0, explanation: 'Check the two shorter sides against the longest: 5² + 12² = 25 + 144 = 169, and 13² = 169. Since 169 = 169, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['Yes — 9² + 10² = 14²', 'No — 9² + 10² ≠ 14²', 'Yes — 9 + 10 = 14', 'No — 9² + 14² ≠ 10²'], correctIndex: 1, explanation: 'Check the two shorter sides against the longest: 9² + 10² = 81 + 100 = 181, and 14² = 196. Since 181 ≠ 196, the triangle is not right-angled — No ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">14 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Which statement below is correct?', checkMode: 'auto', options: ['No — 18² + 24² ≠ 30²', 'Yes — 18 + 24 = 30', 'Yes — 18² + 24² = 30²', 'No — 18² + 30² ≠ 24²'], correctIndex: 2, explanation: 'Check the two shorter sides against the longest: 18² + 24² = 324 + 576 = 900, and 30² = 900. Since 900 = 900, the triangle is right-angled — Yes ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">30 cm</text></svg>" },

        // Block 4 — Real life: ladder against a wall (Medium)
        { difficulty: 'Medium', question: 'A ladder 15 m long leans against a vertical wall, forming a right angle with the ground. The foot of the ladder is 9 m from the wall. Find how high up the wall the ladder reaches.', checkMode: 'auto', options: ['6 m', '144 m', '17.5 m', '12 m'], correctIndex: 3, explanation: 'The ladder is the hypotenuse (15 m) and the base distance is one leg (9 m). height² = 15² − 9² = 225 − 81 = 144. height = √144 = 12 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">15 m</text></svg>" },
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, reaching 8 m up the wall. The foot of the ladder is 15 m from the wall, forming a right angle with the ground. Find the length of the ladder.', checkMode: 'auto', options: ['17 m', '23 m', '289 m', '12.7 m'], correctIndex: 0, explanation: 'The wall height (8 m) and base distance (15 m) are the two legs. ladder² = 8² + 15² = 64 + 225 = 289. ladder = √289 = 17 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Block 5 — Real life: diagonal of a rectangle / distance between two points (Medium-Hard)
        { difficulty: 'Medium-Hard', question: "Kagiso's rectangular field is 20 m long and 15 m wide. Find the length of the diagonal path across the field.", checkMode: 'auto', options: ['35 m', '25 m', '625 m', '13.2 m'], correctIndex: 1, explanation: 'diagonal² = 20² + 15² = 400 + 225 = 625. diagonal = √625 = 25 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Two straight roads meet at a right angle. Zanele drives 14 km along one road, then 48 km along the other. Find the straight-line distance back to her starting point.', checkMode: 'auto', options: ['62 km', '2500 km', '50 km', '45.9 km'], correctIndex: 2, explanation: 'distance² = 14² + 48² = 196 + 2 304 = 2 500. distance = √2 500 = 50 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'A rectangular gate is 3 m wide and 1.6 m high. Find the length of a diagonal brace for the gate, correct to 2 decimal places.', checkMode: 'auto', options: ['4.60 m', '11.56 m', '2.50 m', '3.40 m'], correctIndex: 3, explanation: 'brace² = 3² + 1.6² = 9 + 2.56 = 11.56. brace = √11.56 = 3.40 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">3 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1.6 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Block 6 — Combined / multi-step problems (Hard)
        { difficulty: 'Hard', question: 'A rectangular sports field is 24 m by 10 m. Sipho can either walk around two sides of the field or walk directly across the diagonal. Find how much shorter walking the diagonal is than walking around two sides.', checkMode: 'auto', options: ['8 m', '26 m', '34 m', '60 m'], correctIndex: 0, explanation: 'Diagonal² = 24² + 10² = 576 + 100 = 676, so diagonal = √676 = 26 m. Two-side route = 24 + 10 = 34 m. Difference = 34 − 26 = 8 m shorter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A rectangular TV screen has a diagonal of 29 cm and a width of 21 cm. Find the height of the screen.', checkMode: 'auto', options: ['8 cm', '20 cm', '400 cm', '35.8 cm'], correctIndex: 1, explanation: 'height² = 29² − 21² = 841 − 441 = 400. height = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text></svg>" },
        { difficulty: 'Hard', question: 'On a grid, point A is 9 units to the left and 12 units below point B. Treating these as the two perpendicular legs of a right-angled triangle, find the straight-line distance AB.', checkMode: 'auto', options: ['21 units', '225 units', '15 units', '7.9 units'], correctIndex: 2, explanation: 'distance² = 9² + 12² = 81 + 144 = 225. distance = √225 = 15 units ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'A right-angled triangle has one leg of 9 cm and a hypotenuse 3 cm longer than the other leg. Find the length of the other leg.', checkMode: 'auto', options: ['6 cm', '24 cm', '15 cm', '12 cm'], correctIndex: 3, explanation: 'Let the other leg = x, so the hypotenuse = x + 3. 9² + x² = (x + 3)². 81 + x² = x² + 6x + 9. The x² terms cancel: 81 = 6x + 9, so 72 = 6x, x = 12 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has base 24 cm and equal sides of 20 cm. Find the height of the triangle, which meets the base at a right angle at its midpoint.', checkMode: 'auto', options: ['16 cm', '8 cm', '256 cm', '23.3 cm'], correctIndex: 0, explanation: 'The height splits the base into two 12 cm halves, forming a right-angled triangle with the equal side (20 cm) as the hypotenuse. height² = 20² − 12² = 400 − 144 = 256. height = √256 = 16 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Amahle says that in a right-angled triangle with legs 15 cm and 20 cm, the hypotenuse must be 34 cm because 15 + 20 − 1 = 34. What is the correct length of the hypotenuse?', checkMode: 'auto', options: ['34 cm', '25 cm', '35 cm', '625 cm'], correctIndex: 1, explanation: 'The hypotenuse is not found by adding the legs — it must be calculated using the Theorem of Pythagoras. c² = 15² + 20² = 225 + 400 = 625, so c = √625 = 25 cm, not 34 cm ✓' },
        { difficulty: 'Hard', question: 'A rectangular plot of land is 9 m by 12 m. The owner wants to fence the perimeter of the plot as well as build a diagonal path across it. Find the total length of fencing and path material needed.', checkMode: 'auto', options: ['42 m', '15 m', '57 m', '72 m'], correctIndex: 2, explanation: 'Diagonal² = 9² + 12² = 81 + 144 = 225, so diagonal = √225 = 15 m. Perimeter = 2(9 + 12) = 42 m. Total = 42 + 15 = 57 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Two ladders, each 15 m long, lean against the same vertical wall at right angles to the ground. The first ladder has its foot 9 m from the wall, and the second has its foot 12 m from the wall. Find how much higher up the wall the first ladder reaches than the second.', checkMode: 'auto', options: ['12 m', '9 m', '21 m', '3 m'], correctIndex: 3, explanation: 'First ladder: height² = 15² − 9² = 225 − 81 = 144, so height = 12 m. Second ladder: height² = 15² − 12² = 225 − 144 = 81, so height = 9 m. Difference = 12 − 9 = 3 m higher ✓' },
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
