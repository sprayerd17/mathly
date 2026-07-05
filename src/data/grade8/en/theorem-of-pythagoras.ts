import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Pythagoras roles) ────────────────────────────────────────
// hypotenuse / unknown  → red    (#dc2626)
// legs / known values   → blue   (#2563eb)
// conclusion            → green  (#16a34a)
// squares / surd form   → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'The Theorem of Pythagoras',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DEVELOPING THE THEOREM OF PYTHAGORAS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'developing-theorem-of-pythagoras',
      title: 'Developing the Theorem of Pythagoras',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We investigate the relationship between the lengths of the sides of a right-angled triangle. The Theorem of Pythagoras states that in a right-angled triangle, the square of the <strong>hypotenuse</strong> (the longest side, opposite the right angle) equals the sum of the squares of the other two sides:</p>` +

        `<div style="text-align:center;margin-bottom:20px;padding:16px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#0f1f3d;margin:0;">${bl('a')}² + ${bl('b')}² = ${re('c')}²</p>` +
        `<p style="font-size:14px;color:#6b7280;margin-top:8px;margin-bottom:0;">where ${re('c')} is the hypotenuse and ${bl('a')}, ${bl('b')} are the legs</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('legs (a, b)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hypotenuse (c)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('squares')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Legs (a and b)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The two shorter sides of a right-angled triangle that form the right angle.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hypotenuse (c)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The longest side of a right-angled triangle, always opposite the right angle.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Square of a side</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A side multiplied by itself — e.g. ${or('3²')} = 3 × 3 = ${or('9')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to identify the hypotenuse</p>` +
        `<p style="margin:0;color:#1e3a8a;">Look for the small square drawn in the corner of the triangle — this marks the <strong>right angle</strong>. The side directly opposite that square is always the ${re('hypotenuse')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A right-angled triangle has sides 3 cm and 4 cm. Find the hypotenuse using the Theorem of Pythagoras.',
          answer: `The hypotenuse is ${re('5')} cm`,
          steps: [
            `Write the Theorem of Pythagoras: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Substitute the known leg lengths: ${re('c')}² = ${bl('3')}² + ${bl('4')}² = ${or('9')} + ${or('16')} = ${or('25')}`,
            `Find ${re('c')} by taking the square root: ${re('c')} = √${or('25')} = ${re('5')} cm`,
            `<strong>Answer:</strong> The hypotenuse is ${re('5')} cm ✓. See the diagram below showing this triangle.`,
          ],
        },
        {
          question: 'Sipho measures a right-angled triangle with legs 5 cm and 12 cm. Find the hypotenuse.',
          answer: `The hypotenuse is ${re('13')} cm`,
          steps: [
            `Write the Theorem of Pythagoras: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Substitute: ${re('c')}² = ${bl('5')}² + ${bl('12')}² = ${or('25')} + ${or('144')} = ${or('169')}`,
            `Find ${re('c')}: ${re('c')} = √${or('169')} = ${re('13')} cm`,
            `<strong>Answer:</strong> The hypotenuse is ${re('13')} cm ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A right-angled triangle with legs labelled 3 cm and 4 cm, and hypotenuse labelled as the unknown side c, with a small square marking the right angle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the Theorem of Pythagoras to find the hypotenuse of a right-angled triangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DETERMINING WHETHER A TRIANGLE IS RIGHT-ANGLED
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-right-angled-triangle',
      title: 'Determining Whether a Triangle Is Right-Angled',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Given the three side lengths of a triangle, we can determine whether it is right-angled by checking if the ${bl('longest side')} squared equals the ${or('sum of the squares')} of the other two sides. If the condition holds, the triangle is right-angled; if not, it is not.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('longest side')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sum of squares')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('conclusion')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method — three steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} the longest side and square it.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Sum')} the squares of the other two sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Compare:')} if the two results are equal, the triangle is right-angled; if not, it is not.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always test the longest side</p>` +
        `<p style="margin:0;color:#1e3a8a;">You must always square the <strong>longest</strong> side and compare it to the ${or('sum of the squares')} of the other two. Testing any other side will give the wrong answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has sides 6 cm, 8 cm and 10 cm. Is it right-angled?',
          answer: `${gr('Yes, the triangle is right-angled')}`,
          steps: [
            `Identify the longest side: ${bl('10')} cm. Square it: ${bl('10')}² = ${or('100')}`,
            `Sum the squares of the other two sides: ${bl('6')}² + ${bl('8')}² = ${or('36')} + ${or('64')} = ${or('100')}`,
            `Compare: ${or('100')} = ${or('100')} ✓ — the condition ${bl('longest')}² = ${or('sum of other squares')} is satisfied.`,
            `<strong>Conclusion:</strong> ${gr('The triangle is right-angled.')} ✓`,
          ],
        },
        {
          question: 'Lerato has a triangle with sides 5 cm, 7 cm and 9 cm. Is it right-angled?',
          answer: `${gr('No, the triangle is not right-angled')}`,
          steps: [
            `Identify the longest side: ${bl('9')} cm. Square it: ${bl('9')}² = ${or('81')}`,
            `Sum the squares of the other two sides: ${bl('5')}² + ${bl('7')}² = ${or('25')} + ${or('49')} = ${or('74')}`,
            `Compare: ${or('81')} ≠ ${or('74')} — the condition is not satisfied.`,
            `<strong>Conclusion:</strong> ${gr('The triangle is not right-angled.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two triangles side by side — first labelled right-angled (6 cm, 8 cm, 10 cm) with tick confirming equality of squares, second labelled not right-angled (5 cm, 7 cm, 9 cm) with cross" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to test whether a triangle is right-angled using the converse of the Theorem of Pythagoras" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING MISSING LENGTHS AND SOLVING PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-missing-lengths',
      title: 'Calculating Missing Lengths and Solving Problems',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We use the Theorem of Pythagoras to calculate a missing length in a right-angled triangle, leaving irrational answers in <strong>surd form</strong> where necessary, and solve real-life problems involving unknown lengths in geometric figures that contain right-angled triangles.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('surd form')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two cases</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Finding the hypotenuse</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Use ${re('c')}² = ${bl('a')}² + ${bl('b')}² directly. Square both ${bl('known legs')}, add them, then take the square root.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">If the result is not a perfect square, leave it as ${or('√answer')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Finding a missing leg</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rearrange: ${re('a')}² = ${bl('c')}² − ${bl('b')}². Subtract the ${bl('known leg squared')} from the ${bl('hypotenuse squared')}, then take the square root.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Always subtract — never add — when finding a leg.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Surd form</p>` +
        `<p style="margin:0;color:#9a3412;">When the answer is not a perfect square, write it as ${or('√n')} (a surd). You can simplify if the number under the root has a perfect-square factor — e.g. ${or('√50')} = ${or('√(25 × 2)')} = ${or('5√2')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A right-angled triangle has hypotenuse 15 cm and one leg 9 cm. Find the other leg.',
          answer: `The missing leg is ${re('12')} cm`,
          steps: [
            `Rearrange the Theorem of Pythagoras to find a leg: ${re('a')}² = ${bl('c')}² − ${bl('b')}²`,
            `Substitute: ${re('a')}² = ${bl('15')}² − ${bl('9')}² = ${or('225')} − ${or('81')} = ${or('144')}`,
            `Take the square root: ${re('a')} = √${or('144')} = ${re('12')} cm`,
            `<strong>Answer:</strong> The missing leg is ${re('12')} cm ✓`,
          ],
        },
        {
          question: 'Find the hypotenuse of a right-angled triangle with legs 2 cm and 3 cm, leaving the answer in surd form.',
          answer: `The hypotenuse is ${or('√13')} cm`,
          steps: [
            `Write the Theorem of Pythagoras: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Substitute: ${re('c')}² = ${bl('2')}² + ${bl('3')}² = ${or('4')} + ${or('9')} = ${or('13')}`,
            `Since 13 is not a perfect square, leave the answer in surd form: ${re('c')} = ${or('√13')} cm`,
            `<strong>Answer:</strong> ${or('√13')} cm ✓`,
          ],
        },
        {
          question: 'Thabo leans a ladder against a wall. The base of the ladder is 3 m from the wall, and the ladder is 7 m long. How high up the wall does it reach?',
          answer: `The ladder reaches ${or('√40')} ≈ ${re('6.32')} m up the wall`,
          steps: [
            `Identify the triangle: the ladder (${bl('7 m')}) is the hypotenuse, the base (${bl('3 m')}) is one leg, and the height (${re('h')}) is the unknown leg.`,
            `Rearrange: ${re('h')}² = ${bl('c')}² − ${bl('base')}² = ${bl('7')}² − ${bl('3')}² = ${or('49')} − ${or('9')} = ${or('40')}`,
            `Find ${re('h')}: ${re('h')} = ${or('√40')} ≈ ${re('6.32')} m (to 2 decimal places)`,
            `<strong>Answer:</strong> The ladder reaches approximately ${re('6.32')} m up the wall ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A ladder leaning against a wall forming a right-angled triangle, with the base (3 m), ladder length (7 m), and unknown height labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find a missing side of a right-angled triangle using the Theorem of Pythagoras, including surd form answers" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: FINDING THE HYPOTENUSE OR A MISSING LEG (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 3 cm and 4 cm. Find the hypotenuse.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'c² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 6 cm and 8 cm. Find the hypotenuse.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'c² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 9 cm and 12 cm. Find the hypotenuse.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 8 cm and 15 cm. Find the hypotenuse.', answer: '17 cm', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'c² = 8² + 15² = 64 + 225 = 289\nc = √289 = 17 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 20 cm and 21 cm. Find the hypotenuse.', answer: '29 cm', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], explanation: 'c² = 20² + 21² = 400 + 441 = 841\nc = √841 = 29 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 12 cm and 16 cm. Find the hypotenuse.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'c² = 12² + 16² = 144 + 256 = 400\nc = √400 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 18 cm and 24 cm. Find the hypotenuse.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'c² = 18² + 24² = 324 + 576 = 900\nc = √900 = 30 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 21 cm and 28 cm. Find the hypotenuse.', answer: '35 cm', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35cm', '35 cm'], explanation: 'c² = 21² + 28² = 441 + 784 = 1 225\nc = √1 225 = 35 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 15 cm and 20 cm. Find the hypotenuse.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'c² = 15² + 20² = 225 + 400 = 625\nc = √625 = 25 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 24 cm and 32 cm. Find the hypotenuse.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40cm', '40 cm'], explanation: 'c² = 24² + 32² = 576 + 1 024 = 1 600\nc = √1 600 = 40 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 16 cm and 30 cm. Find the hypotenuse.', answer: '34 cm', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34cm', '34 cm'], explanation: 'c² = 16² + 30² = 256 + 900 = 1 156\nc = √1 156 = 34 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 10 cm and 24 cm. Find the hypotenuse.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm', '26 cm'], explanation: 'c² = 10² + 24² = 100 + 576 = 676\nc = √676 = 26 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 5 cm and one leg 3 cm. Find the other leg.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'a² = c² − b² = 5² − 3² = 25 − 9 = 16\na = √16 = 4 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. Find the other leg.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'a² = c² − b² = 13² − 5² = 169 − 25 = 144\na = √144 = 12 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 15 cm and one leg 9 cm. Find the other leg.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'a² = c² − b² = 15² − 9² = 225 − 81 = 144\na = √144 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'a² = c² − b² = 17² − 8² = 289 − 64 = 225\na = √225 = 15 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 25 cm and one leg 7 cm. Find the other leg.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 25² − 7² = 625 − 49 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 29 cm and one leg 20 cm. Find the other leg.', answer: '21 cm', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21cm', '21 cm'], explanation: 'a² = c² − b² = 29² − 20² = 841 − 400 = 441\na = √441 = 21 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 20 cm and one leg 12 cm. Find the other leg.', answer: '16 cm', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16cm', '16 cm'], explanation: 'a² = c² − b² = 20² − 12² = 400 − 144 = 256\na = √256 = 16 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 26 cm and one leg 10 cm. Find the other leg.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 26² − 10² = 676 − 100 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 30 cm and one leg 18 cm. Find the other leg.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 30² − 18² = 900 − 324 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 34 cm and one leg 16 cm. Find the other leg.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'a² = c² − b² = 34² − 16² = 1 156 − 256 = 900\na = √900 = 30 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 35 cm and one leg 21 cm. Find the other leg.', answer: '28 cm', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28cm', '28 cm'], explanation: 'a² = c² − b² = 35² − 21² = 1 225 − 441 = 784\na = √784 = 28 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 25 cm and one leg 15 cm. Find the other leg.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'a² = c² − b² = 25² − 15² = 625 − 225 = 400\na = √400 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 40 cm and one leg 24 cm. Find the other leg.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'a² = c² − b² = 40² − 24² = 1 600 − 576 = 1 024\na = √1 024 = 32 cm ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the basics of the Theorem of Pythagoras.' },
        { minScore: 19, message: 'Great work! You are confident applying the theorem — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — CONVERSE OF THE THEOREM AND SURD FORM ANSWERS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Converse and Surd Form',
      questions: [
        { difficulty: 'Easy', question: 'Is a triangle with sides 6 cm, 8 cm and 10 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '10² = 100. 6² + 8² = 36 + 64 = 100. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 5 cm, 7 cm and 9 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '9² = 81. 5² + 7² = 25 + 49 = 74. Since 81 ≠ 74, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 9 cm, 12 cm and 15 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '15² = 225. 9² + 12² = 81 + 144 = 225. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 7 cm, 10 cm and 13 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '13² = 169. 7² + 10² = 49 + 100 = 149. Since 169 ≠ 149, it is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 8 cm, 15 cm and 17 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '17² = 289. 8² + 15² = 64 + 225 = 289. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 10 cm, 11 cm and 15 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '15² = 225. 10² + 11² = 100 + 121 = 221. Since 225 ≠ 221, it is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 20 cm, 21 cm and 29 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '29² = 841. 20² + 21² = 400 + 441 = 841. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 12 cm, 13 cm and 18 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '18² = 324. 12² + 13² = 144 + 169 = 313. Since 324 ≠ 313, it is not right-angled ✓' },
        { difficulty: 'Hard', question: 'Is a triangle with sides 9 cm, 40 cm and 41 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '41² = 1 681. 9² + 40² = 81 + 1 600 = 1 681. Equal, so it is right-angled ✓' },
        { difficulty: 'Hard', question: 'Is a triangle with sides 13 cm, 14 cm and 20 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '20² = 400. 13² + 14² = 169 + 196 = 365. Since 400 ≠ 365, it is not right-angled ✓' },
        { difficulty: 'Hard', question: 'Is a triangle with sides 11 cm, 12 cm and 16 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '16² = 256. 11² + 12² = 121 + 144 = 265. Since 256 ≠ 265, it is not right-angled ✓' },
        { difficulty: 'Hard', question: 'Is a triangle with sides 18 cm, 24 cm and 30 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '30² = 900. 18² + 24² = 324 + 576 = 900. Equal, so it is right-angled ✓' },
        { difficulty: 'Hard', question: 'Sipho says a triangle with sides 5 cm, 12 cm and 13 cm is right-angled. Check his claim and explain.', answer: '13² = 169. 5² + 12² = 25 + 144 = 169. Since they are equal, the triangle is right-angled — Sipho is correct.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Find the hypotenuse of a right-angled triangle with legs 2 cm and 3 cm, leaving the answer in surd form.', answer: '√13 cm', checkMode: 'auto', correctAnswer: '√13', correctAnswers: ['√13', '√13cm', '√13 cm'], explanation: 'c² = 2² + 3² = 4 + 9 = 13\nSince 13 is not a perfect square, c = √13 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 1 cm and 2 cm, leaving the answer in surd form.', answer: '√5 cm', checkMode: 'auto', correctAnswer: '√5', correctAnswers: ['√5', '√5cm', '√5 cm'], explanation: 'c² = 1² + 2² = 1 + 4 = 5\nc = √5 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 1 cm and 4 cm, leaving the answer in surd form.', answer: '√17 cm', checkMode: 'auto', correctAnswer: '√17', correctAnswers: ['√17', '√17cm', '√17 cm'], explanation: 'c² = 1² + 4² = 1 + 16 = 17\nc = √17 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 2 cm and 5 cm, leaving the answer in surd form.', answer: '√29 cm', checkMode: 'auto', correctAnswer: '√29', correctAnswers: ['√29', '√29cm', '√29 cm'], explanation: 'c² = 2² + 5² = 4 + 25 = 29\nc = √29 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 3 cm and 5 cm, leaving the answer in surd form.', answer: '√34 cm', checkMode: 'auto', correctAnswer: '√34', correctAnswers: ['√34', '√34cm', '√34 cm'], explanation: 'c² = 3² + 5² = 9 + 25 = 34\nc = √34 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 3 cm and 7 cm, leaving the answer in surd form.', answer: '√58 cm', checkMode: 'auto', correctAnswer: '√58', correctAnswers: ['√58', '√58cm', '√58 cm'], explanation: 'c² = 3² + 7² = 9 + 49 = 58\nc = √58 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 6 cm, leaving the answer in surd form.', answer: '√61 cm', checkMode: 'auto', correctAnswer: '√61', correctAnswers: ['√61', '√61cm', '√61 cm'], explanation: 'c² = 5² + 6² = 25 + 36 = 61\nc = √61 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 4 cm and 7 cm, leaving the answer in surd form.', answer: '√65 cm', checkMode: 'auto', correctAnswer: '√65', correctAnswers: ['√65', '√65cm', '√65 cm'], explanation: 'c² = 4² + 7² = 16 + 49 = 65\nc = √65 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 6 cm and 7 cm, leaving the answer in surd form.', answer: '√85 cm', checkMode: 'auto', correctAnswer: '√85', correctAnswers: ['√85', '√85cm', '√85 cm'], explanation: 'c² = 6² + 7² = 36 + 49 = 85\nc = √85 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 4 cm and 6 cm. Simplify your surd-form answer as far as possible.', answer: '2√13 cm', checkMode: 'auto', correctAnswer: '2√13', correctAnswers: ['2√13', '2√13cm', '2√13 cm'], explanation: 'c² = 4² + 6² = 16 + 36 = 52\nc = √52 = √(4 × 13) = 2√13 cm ✓' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 9 cm, rounded to 2 decimal places.', answer: '10.30 cm', checkMode: 'auto', correctAnswer: '10.30', correctAnswers: ['10.30', '10.3', '10.30cm', '10.3cm', '10.30 cm', '10.3 cm'], explanation: 'c² = 5² + 9² = 25 + 81 = 106\nc = √106 ≈ 10.30 cm ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 10 cm, 24 cm and 26 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '26² = 676. 10² + 24² = 100 + 576 = 676. Since they are equal, the triangle is right-angled ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the converse of the theorem and surd-form answers.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on the converse and surds.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD APPLICATIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Real-World Applications',
      questions: [
        { difficulty: 'Medium', question: 'Thabo leans a ladder against a wall. The base of the ladder is 2.5 m from the wall, and the ladder is 6 m long. How high up the wall does it reach (to 2 decimal places)?', answer: '5.45 m', checkMode: 'auto', correctAnswer: '5.45', correctAnswers: ['5.45', '5.45m', '5.45 m'], explanation: 'height² = 6² − 2.5² = 36 − 6.25 = 29.75\nheight = √29.75 ≈ 5.45 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 7 m long leans against a wall with its base 3 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '6.32 m', checkMode: 'auto', correctAnswer: '6.32', correctAnswers: ['6.32', '6.32m', '6.32 m'], explanation: 'height² = 7² − 3² = 49 − 9 = 40\nheight = √40 ≈ 6.32 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 4 m long leans against a wall with its base 1.5 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '3.71 m', checkMode: 'auto', correctAnswer: '3.71', correctAnswers: ['3.71', '3.71m', '3.71 m'], explanation: 'height² = 4² − 1.5² = 16 − 2.25 = 13.75\nheight = √13.75 ≈ 3.71 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 7 m long leans against a wall with its base 2.4 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '6.58 m', checkMode: 'auto', correctAnswer: '6.58', correctAnswers: ['6.58', '6.58m', '6.58 m'], explanation: 'height² = 7² − 2.4² = 49 − 5.76 = 43.24\nheight = √43.24 ≈ 6.58 m ✓' },
        { difficulty: 'Hard', question: 'A ladder 8.5 m long leans against a wall with its base 3.5 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '7.75 m', checkMode: 'auto', correctAnswer: '7.75', correctAnswers: ['7.75', '7.75m', '7.75 m'], explanation: 'height² = 8.5² − 3.5² = 72.25 − 12.25 = 60\nheight = √60 ≈ 7.75 m ✓' },
        { difficulty: 'Hard', question: 'A ladder 10.5 m long leans against a wall with its base 4.5 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '9.49 m', checkMode: 'auto', correctAnswer: '9.49', correctAnswers: ['9.49', '9.49m', '9.49 m'], explanation: 'height² = 10.5² − 4.5² = 110.25 − 20.25 = 90\nheight = √90 ≈ 9.49 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 3.5 m long leans against a wall with its base 1.2 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '3.29 m', checkMode: 'auto', correctAnswer: '3.29', correctAnswers: ['3.29', '3.29m', '3.29 m'], explanation: 'height² = 3.5² − 1.2² = 12.25 − 1.44 = 10.81\nheight = √10.81 ≈ 3.29 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 6 m long leans against a wall with its base 2.8 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '5.31 m', checkMode: 'auto', correctAnswer: '5.31', correctAnswers: ['5.31', '5.31m', '5.31 m'], explanation: 'height² = 6² − 2.8² = 36 − 7.84 = 28.16\nheight = √28.16 ≈ 5.31 m ✓' },
        { difficulty: 'Easy', question: 'A ladder 13 m long leans against a wall with its base 5 m from the wall. How high up the wall does it reach?', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12m', '12 m'], explanation: 'height² = 13² − 5² = 169 − 25 = 144\nheight = √144 = 12 m ✓' },
        { difficulty: 'Medium', question: 'A ladder 6.5 m long leans against a wall with its base 6 m from the wall. How high up the wall does it reach?', answer: '2.50 m', checkMode: 'auto', correctAnswer: '2.50', correctAnswers: ['2.50', '2.5', '2.50m', '2.5m', '2.50 m', '2.5 m'], explanation: 'height² = 6.5² − 6² = 42.25 − 36 = 6.25\nheight = √6.25 = 2.5 m ✓' },
        { difficulty: 'Medium', question: 'A rectangular field is 30 m by 40 m. Find the length of its diagonal.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'The diagonal splits the rectangle into two right-angled triangles with legs 30 m and 40 m.\nc² = 30² + 40² = 900 + 1 600 = 2 500\nc = √2 500 = 50 m ✓' },
        { difficulty: 'Easy', question: 'A rectangular TV screen is 9 cm by 12 cm (scaled model). Find the length of its diagonal.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular gate is 20 m by 15 m (scaled model). Find the length of its diagonal support beam.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 20² + 15² = 400 + 225 = 625\nc = √625 = 25 m ✓' },
        { difficulty: 'Easy', question: 'A rectangular door is 6 m by 8 m (scaled model). Find the length of its diagonal.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10m', '10 m'], explanation: 'c² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 m ✓' },
        { difficulty: 'Medium', question: 'A rectangular sports court is 24 m by 32 m. Find the length of its diagonal.', answer: '40 m', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40m', '40 m'], explanation: 'c² = 24² + 32² = 576 + 1 024 = 1 600\nc = √1 600 = 40 m ✓' },
        { difficulty: 'Medium', question: 'A rectangular garden is 5 m by 12 m. Find the length of its diagonal path.', answer: '13 m', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], explanation: 'c² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13 m ✓' },
        { difficulty: 'Medium', question: 'A rectangular wall panel is 7 m by 24 m. Find the length of its diagonal brace.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 m ✓' },
        { difficulty: 'Medium', question: 'A rectangular banner is 12 m by 35 m. Find the length of its diagonal.', answer: '37 m', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37m', '37 m'], explanation: 'c² = 12² + 35² = 144 + 1 225 = 1 369\nc = √1 369 = 37 m ✓' },
        { difficulty: 'Medium', question: 'Find the distance between the points (0, 0) and (3, 4) on a grid.', answer: '5 units', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 units', '5units'], explanation: 'Horizontal distance = 3, vertical distance = 4 — these form the legs of a right-angled triangle.\nd² = 3² + 4² = 9 + 16 = 25\nd = √25 = 5 units ✓' },
        { difficulty: 'Medium', question: 'Find the distance between the points (1, 1) and (4, 5) on a grid.', answer: '5 units', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 units', '5units'], explanation: 'Horizontal distance = 4 − 1 = 3, vertical distance = 5 − 1 = 4.\nd² = 3² + 4² = 9 + 16 = 25\nd = √25 = 5 units ✓' },
        { difficulty: 'Hard', question: 'Find the distance between the points (2, 3) and (7, 15) on a grid.', answer: '13 units', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 units', '13units'], explanation: 'Horizontal distance = 7 − 2 = 5, vertical distance = 15 − 3 = 12.\nd² = 5² + 12² = 25 + 144 = 169\nd = √169 = 13 units ✓' },
        { difficulty: 'Hard', question: 'Find the distance between the points (−2, 1) and (4, 9) on a grid.', answer: '10 units', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 units', '10units'], explanation: 'Horizontal distance = 4 − (−2) = 6, vertical distance = 9 − 1 = 8.\nd² = 6² + 8² = 36 + 64 = 100\nd = √100 = 10 units ✓' },
        { difficulty: 'Medium', question: 'A vertical pole is 5 m tall. A wire runs from the top of the pole to a point on the ground 12 m from its base. Find the length of the wire.', answer: '13 m', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], explanation: 'c² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13 m ✓' },
        { difficulty: 'Medium', question: 'A vertical pole is 9 m tall. A wire runs from the top of the pole to a point on the ground 12 m from its base. Find the length of the wire.', answer: '15 m', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 m ✓' },
        { difficulty: 'Medium', question: 'A vertical pole is 20 m tall. A wire runs from the top of the pole to a point on the ground 15 m from its base. Find the length of the wire.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 20² + 15² = 400 + 225 = 625\nc = √625 = 25 m ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently apply the theorem to real-world problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the ladder and diagonal worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP AND COMBINED PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 10 cm and a base of 12 cm. Find the height of the triangle (from the apex to the midpoint of the base).', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'The height splits the base into two equal halves of 6 cm each, forming a right-angled triangle with hypotenuse 10 cm.\nh² = 10² − 6² = 100 − 36 = 64\nh = √64 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 13 cm and a base of 10 cm. Find the height of the triangle.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'Half the base = 5 cm.\nh² = 13² − 5² = 169 − 25 = 144\nh = √144 = 12 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 17 cm and a base of 16 cm. Find the height of the triangle.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'Half the base = 8 cm.\nh² = 17² − 8² = 289 − 64 = 225\nh = √225 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 25 cm and a base of 14 cm. Find the height of the triangle.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'Half the base = 7 cm.\nh² = 25² − 7² = 625 − 49 = 576\nh = √576 = 24 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 20 cm and a base of 24 cm. Find the height, then use it to calculate the area of the triangle.', answer: 'Height = 16 cm; Area = 192 cm²', checkMode: 'auto', correctAnswer: '192', correctAnswers: ['192', '192cm²', '192 cm²', '16 cm; 192 cm²', 'height=16, area=192'], explanation: 'Half the base = 12 cm.\nh² = 20² − 12² = 400 − 144 = 256\nh = √256 = 16 cm.\nArea = ½ × base × height = ½ × 24 × 16 = 192 cm² ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 15 cm and a base of 18 cm. Find the height, then use it to calculate the area of the triangle.', answer: 'Height = 12 cm; Area = 108 cm²', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108cm²', '108 cm²', '12 cm; 108 cm²', 'height=12, area=108'], explanation: 'Half the base = 9 cm.\nh² = 15² − 9² = 225 − 81 = 144\nh = √144 = 12 cm.\nArea = ½ × 18 × 12 = 108 cm² ✓' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 3 cm by 4 cm and a height of 12 cm. Find the length of the diagonal across the base, then find the length of the diagonal from one bottom corner to the opposite top corner (the space diagonal).', answer: 'Base diagonal = 5 cm; Space diagonal = 13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm', '5 cm; 13 cm', 'base=5, space=13'], explanation: 'Base diagonal: d² = 3² + 4² = 9 + 16 = 25, d = 5 cm.\nSpace diagonal: uses the base diagonal (5 cm) and the height (12 cm) as the two legs of a new right-angled triangle: D² = 5² + 12² = 25 + 144 = 169, D = √169 = 13 cm ✓' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 6 cm by 8 cm and a height of 24 cm. Find the length of the space diagonal (from one bottom corner to the opposite top corner).', answer: '26 cm', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm', '26 cm'], explanation: 'Base diagonal: d² = 6² + 8² = 36 + 64 = 100, d = 10 cm.\nSpace diagonal: D² = 10² + 24² = 100 + 576 = 676, D = √676 = 26 cm ✓' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 9 cm by 12 cm and a height of 20 cm. Find the length of the space diagonal (from one bottom corner to the opposite top corner).', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'Base diagonal: d² = 9² + 12² = 81 + 144 = 225, d = 15 cm.\nSpace diagonal: D² = 15² + 20² = 225 + 400 = 625, D = √625 = 25 cm ✓' },
        { difficulty: 'Hard', question: 'A vertical pole is 7 m tall. A wire runs from the top of the pole to a point on the ground 24 m from its base. If 4 identical wires are needed to support the pole, find the total length of wire required.', answer: '100 m', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100m', '100 m'], explanation: 'One wire: c² = 7² + 24² = 49 + 576 = 625, c = 25 m.\nFour wires: 4 × 25 = 100 m ✓' },
        { difficulty: 'Hard', question: 'A vertical pole is 8 m tall and a wire runs from the top to a point 6 m from the base. If wire costs R15 per metre, find the total cost of one wire.', answer: 'R150', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', 'R150'], explanation: 'c² = 8² + 6² = 64 + 36 = 100, c = 10 m.\nCost = 10 × R15 = R150 ✓' },
        { difficulty: 'Hard', question: 'A vertical pole is 20 m tall. Guy wires run from the top of the pole to two points on the ground, each 15 m from the base, on opposite sides of the pole. Find the total length of both guy wires combined.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'One wire: c² = 20² + 15² = 400 + 225 = 625, c = 25 m.\nTwo wires: 2 × 25 = 50 m ✓' },
        { difficulty: 'Hard', question: 'A rectangular garden is 9 m by 12 m. A gardener wants to fence the perimeter and also build a diagonal path across it. Find the total length of fencing and path needed (perimeter + diagonal).', answer: '57 m', checkMode: 'auto', correctAnswer: '57', correctAnswers: ['57', '57m', '57 m'], explanation: 'Perimeter = 2 × (9 + 12) = 42 m.\nDiagonal: d² = 9² + 12² = 81 + 144 = 225, d = 15 m.\nTotal = 42 + 15 = 57 m ✓' },
        { difficulty: 'Hard', question: 'A fire truck ladder starts fully retracted (length 0 m) at the base of a building and extends at a rate of 0.5 m per second. It needs to reach a window 8 m up the wall, with its base fixed 6 m from the building. How many seconds will it take to extend to exactly the right length?', answer: '20 seconds', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 seconds', '20s'], explanation: 'Required ladder length (hypotenuse): c² = 6² + 8² = 36 + 64 = 100, c = 10 m.\nTime = distance ÷ rate = 10 ÷ 0.5 = 20 seconds ✓' },
        { difficulty: 'Hard', question: 'Explain why the hypotenuse of a right-angled triangle is always the longest side.', answer: "Since c² = a² + b² and both a² and b² are positive, c² must be greater than a² alone and greater than b² alone. This means c must be greater than both a and b, so the hypotenuse is always the longest side.", checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo says that if you double the length of both legs of a right-angled triangle, the hypotenuse also doubles. Is he correct? Explain using algebra.', answer: 'Yes, he is correct. If the original legs are a and b, the new legs are 2a and 2b. The new hypotenuse is c\' = √((2a)² + (2b)²) = √(4a² + 4b²) = √(4(a² + b²)) = 2√(a² + b²) = 2c. So the hypotenuse doubles too.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says that if you know the hypotenuse and the perimeter of a right-angled triangle, you can always find both legs. Explain how this could be done.', answer: 'If the hypotenuse is c and the perimeter is P, then a + b = P − c. Combined with the Pythagorean equation a² + b² = c², you have two equations with two unknowns (a and b), which can be solved simultaneously (e.g. by substitution) to find both leg lengths.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Before checking whether three given side lengths form a right-angled triangle, explain what you should check first, and why.', answer: 'You should first check that the three lengths can form a triangle at all, using the triangle inequality: the sum of the two shorter sides must be greater than the longest side. If this fails, no triangle exists at all, so it cannot be right-angled either — checking the Pythagorean condition would be meaningless.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A ship sails 8 km east, then 6 km north. How far is the ship from its starting point?', answer: '10 km', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10km', '10 km'], explanation: 'The east and north legs form a right angle.\nd² = 8² + 6² = 64 + 36 = 100\nd = √100 = 10 km ✓' },
        { difficulty: 'Medium', question: 'A ship sails 15 km east, then 20 km north. How far is the ship from its starting point?', answer: '25 km', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25km', '25 km'], explanation: 'd² = 15² + 20² = 225 + 400 = 625\nd = √625 = 25 km ✓' },
        { difficulty: 'Hard', question: 'A square has a diagonal of 10 cm. Using the Theorem of Pythagoras, find the length of each side of the square (to 2 decimal places).', answer: '7.07 cm', checkMode: 'auto', correctAnswer: '7.07', correctAnswers: ['7.07', '7.07cm', '7.07 cm'], explanation: 'For a square with side s, the diagonal satisfies d² = s² + s² = 2s².\n10² = 2s² → 100 = 2s² → s² = 50 → s = √50 ≈ 7.07 cm ✓' },
        { difficulty: 'Hard', question: 'A square has a diagonal of 12 cm. Using the Theorem of Pythagoras, find the length of each side of the square (to 2 decimal places).', answer: '8.49 cm', checkMode: 'auto', correctAnswer: '8.49', correctAnswers: ['8.49', '8.49cm', '8.49 cm'], explanation: 'd² = 2s² → 12² = 2s² → 144 = 2s² → s² = 72 → s = √72 ≈ 8.49 cm ✓' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 3:4 and a hypotenuse of 20 cm. Find the length of each leg.', answer: '12 cm and 16 cm', checkMode: 'auto', correctAnswer: '12 cm and 16 cm', correctAnswers: ['12 cm and 16 cm', '12 and 16', '12cm and 16cm', '12, 16'], explanation: 'Let the legs be 3x and 4x. Then (3x)² + (4x)² = 20² → 9x² + 16x² = 400 → 25x² = 400 → x² = 16 → x = 4.\nLegs = 3(4) = 12 cm and 4(4) = 16 cm ✓ (check: 12² + 16² = 144 + 256 = 400 = 20²)' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 5:12 and a hypotenuse of 39 cm. Find the length of each leg.', answer: '15 cm and 36 cm', checkMode: 'auto', correctAnswer: '15 cm and 36 cm', correctAnswers: ['15 cm and 36 cm', '15 and 36', '15cm and 36cm', '15, 36'], explanation: 'Let the legs be 5x and 12x. Then (5x)² + (12x)² = 39² → 25x² + 144x² = 1 521 → 169x² = 1 521 → x² = 9 → x = 3.\nLegs = 5(3) = 15 cm and 12(3) = 36 cm ✓ (check: 15² + 36² = 225 + 1 296 = 1 521 = 39²)' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 8:15 and a hypotenuse of 34 cm. Find the length of each leg.', answer: '16 cm and 30 cm', checkMode: 'auto', correctAnswer: '16 cm and 30 cm', correctAnswers: ['16 cm and 30 cm', '16 and 30', '16cm and 30cm', '16, 30'], explanation: 'Let the legs be 8x and 15x. Then (8x)² + (15x)² = 34² → 64x² + 225x² = 1 156 → 289x² = 1 156 → x² = 4 → x = 2.\nLegs = 8(2) = 16 cm and 15(2) = 30 cm ✓ (check: 16² + 30² = 256 + 900 = 1 156 = 34²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step and combined Pythagoras problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
