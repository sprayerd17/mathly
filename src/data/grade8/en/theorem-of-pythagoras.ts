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

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A right-angled triangle has legs 6 cm and 8 cm. Find the hypotenuse.',
          answer: '10 cm',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10', '10cm', '10 cm'],
          explanation: 'c² = a² + b² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A right-angled triangle has legs 9 cm and 12 cm. Find the hypotenuse.',
          answer: '15 cm',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15', '15cm', '15 cm'],
          explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho says a triangle with sides 5 cm, 12 cm and 13 cm is right-angled. Check his claim.',
          answer: '13² = 169. 5² + 12² = 25 + 144 = 169. Since they are equal, the triangle is right-angled — Sipho is correct.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Is a triangle with sides 4 cm, 5 cm and 6 cm right-angled? Explain.',
          answer: 'Longest side squared: 6² = 36. Sum of others: 4² + 5² = 16 + 25 = 41. Since 36 ≠ 41, this triangle is not right-angled.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. Find the other leg.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12cm', '12 cm'],
          explanation: 'a² = c² − b² = 13² − 5² = 169 − 25 = 144\na = √144 = 12 cm ✓',
        },
      ],

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

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Find the hypotenuse of a right-angled triangle with legs 7 cm and 24 cm.',
          answer: '25 cm',
          checkMode: 'auto',
          correctAnswer: '25',
          correctAnswers: ['25', '25cm', '25 cm'],
          explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Find the hypotenuse of a right-angled triangle with legs 4 cm and 6 cm, leaving your answer in surd form.',
          answer: '√52 cm',
          checkMode: 'auto',
          correctAnswer: '√52',
          correctAnswers: ['√52', '√52cm', '√52 cm'],
          explanation: 'c² = 4² + 6² = 16 + 36 = 52\nSince 52 is not a perfect square, c = √52 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato says √52 can be simplified. Simplify it if possible.',
          answer: 'Yes — √52 = √(4 × 13) = 2√13.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'A right-angled triangle has hypotenuse 20 cm and one leg 16 cm. Find the other leg.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12cm', '12 cm'],
          explanation: 'a² = c² − b² = 20² − 16² = 400 − 256 = 144\na = √144 = 12 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo leans a ladder against a wall. The base of the ladder is 2.5 m from the wall, and the ladder is 6 m long. How high up the wall does it reach (to 2 decimal places)?',
          answer: '5.45 m',
          checkMode: 'auto',
          correctAnswer: '5.45',
          correctAnswers: ['5.45', '5.45m', '5.45 m'],
          explanation: 'height² = 6² − 2.5² = 36 − 6.25 = 29.75\nheight = √29.75 ≈ 5.45 m ✓',
        },
      ],

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

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'A rectangular field is 30 m by 40 m. Find the length of its diagonal.',
          answer: '50 m',
          checkMode: 'auto',
          correctAnswer: '50',
          correctAnswers: ['50', '50m', '50 m'],
          explanation: 'The diagonal splits the rectangle into two right-angled triangles with legs 30 m and 40 m.\nc² = 30² + 40² = 900 + 1 600 = 2 500\nc = √2 500 = 50 m ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says any triangle with three whole number sides must be right-angled. Is she correct? Explain.',
          answer: 'No — for example a triangle with sides 4 cm, 5 cm and 6 cm has whole number sides but is not right-angled, since 6² ≠ 4² + 5².',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A triangle has sides 8 cm, 15 cm and 17 cm. Is it right-angled? Show your working.',
          answer: '17² = 289. 8² + 15² = 64 + 225 = 289. Since they are equal, the triangle is right-angled.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Find the missing leg of a right-angled triangle with hypotenuse 25 cm and one leg 24 cm, leaving any irrational part in surd form if needed.',
          answer: '7 cm',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7', '7cm', '7 cm'],
          explanation: 'a² = c² − b² = 25² − 24² = 625 − 576 = 49\na = √49 = 7 cm ✓\n(Since 49 is a perfect square, the answer is a whole number.)',
        },
        {
          difficulty: 'Hard',
          question: "Sipho's right-angled triangle has legs 5 cm and 5 cm. Find the hypotenuse in surd form, then simplify it.",
          answer: 'c² = 5² + 5² = 25 + 25 = 50. c = √50 = √(25 × 2) = 5√2 cm.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A ladder leaning against a wall forming a right-angled triangle, with the base (3 m), ladder length (7 m), and unknown height labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find a missing side of a right-angled triangle using the Theorem of Pythagoras, including surd form answers" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered the Theorem of Pythagoras.' },
    { minScore: 11, message: 'Great work! You are on the right track — review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the worked examples and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again and try once more.' },
  ],
}
