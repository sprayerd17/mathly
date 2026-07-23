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
        'A right-angled triangle with legs labelled 3 cm and 4 cm, and the hypotenuse labelled c, with a small square marking the right angle',

      diagramSvg:
        '<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="30,150 150,150 150,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<rect x="138" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<text x="90" y="168" font-size="13" font-weight="700" text-anchor="middle" fill="#2563eb">3 cm</text>' +
        '<text x="164" y="104" font-size="13" font-weight="700" fill="#2563eb">4 cm</text>' +
        '<text x="80" y="94" font-size="14" font-weight="700" fill="#dc2626">c</text>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing how to apply the Theorem of Pythagoras to find the hypotenuse of a right-angled triangle',
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
        'Two triangles side by side — one right-angled (6 cm, 8 cm, 10 cm) confirmed, one not right-angled (5 cm, 7 cm, 9 cm)',

      diagramSvg:
        '<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(70,95)">' +
        '<polygon points="-32,24 32,24 32,-24" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<rect x="22" y="14" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.4"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">8 cm</text>' +
        '<text x="46" y="4" font-size="11" font-weight="700" fill="#2563eb">6 cm</text>' +
        '<text x="-14" y="-2" font-size="11" font-weight="700" fill="#dc2626">10 cm</text>' +
        '<text x="0" y="-34" font-size="16" font-weight="700" text-anchor="middle" fill="#16a34a">✓</text>' +
        '<text x="0" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">Right-angled</text>' +
        '</g>' +
        '<g transform="translate(255,100)">' +
        '<polygon points="-35,25 35,25 10,-30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">9 cm</text>' +
        '<text x="30" y="0" font-size="11" font-weight="700" fill="#2563eb">7 cm</text>' +
        '<text x="-32" y="0" font-size="11" font-weight="700" fill="#2563eb">5 cm</text>' +
        '<text x="10" y="-38" font-size="16" font-weight="700" text-anchor="middle" fill="#dc2626">✗</text>' +
        '<text x="0" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#dc2626">Not right-angled</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing how to test whether a triangle is right-angled using the converse of the Theorem of Pythagoras',
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
        'A ladder leaning against a wall forming a right-angled triangle, with the base (3 m), ladder length (7 m), and unknown height labelled',

      diagramSvg:
        '<svg viewBox="0 0 180 190" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="40" y1="150" x2="40" y2="40" stroke="#0f1f3d" stroke-width="3"/>' +
        '<line x1="20" y1="150" x2="150" y2="150" stroke="#0f1f3d" stroke-width="3"/>' +
        '<line x1="40" y1="40" x2="120" y2="150" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<rect x="40" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.4"/>' +
        '<line x1="12" y1="145" x2="20" y2="155" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<line x1="24" y1="145" x2="32" y2="155" stroke="#0f1f3d" stroke-width="1.5"/>' +
        '<text x="24" y="98" font-size="14" font-weight="700" fill="#dc2626">h</text>' +
        '<text x="80" y="168" font-size="13" font-weight="700" text-anchor="middle" fill="#2563eb">3 m</text>' +
        '<text x="90" y="90" font-size="13" font-weight="700" fill="#2563eb">7 m</text>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing how to find a missing side of a right-angled triangle using the Theorem of Pythagoras, including surd form answers',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 9 cm and 40 cm, as shown. Find the hypotenuse.', answer: '41 cm', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41cm', '41 cm'], explanation: 'c² = 9² + 40² = 81 + 1 600 = 1 681\nc = √1 681 = 41 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="20,140 170,140 20,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="160" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">40 cm</text><text x="4" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><text x="108" y="78" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 11 cm and 60 cm. Find the hypotenuse.', answer: '61 cm', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61cm', '61 cm'], explanation: 'c² = 11² + 60² = 121 + 3 600 = 3 721\nc = √3 721 = 61 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 10 cm and one leg 6 cm. Find the other leg.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'a² = c² − b² = 10² − 6² = 100 − 36 = 64\na = √64 = 8 cm ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 7 cm, 24 cm and 25 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '25² = 625. 7² + 24² = 49 + 576 = 625. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 12 cm, 35 cm and 38 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '38² = 1 444. 12² + 35² = 144 + 1 225 = 1 369. Since 1 444 ≠ 1 369, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 20 cm and 21 cm. Find the hypotenuse.', answer: '29 cm', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], explanation: 'c² = 20² + 21² = 400 + 441 = 841\nc = √841 = 29 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 65 cm and one leg 33 cm. Find the other leg.', answer: '56 cm', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56cm', '56 cm'], explanation: 'a² = c² − b² = 65² − 33² = 4 225 − 1 089 = 3 136\na = √3 136 = 56 cm ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 20 cm, 48 cm and 52 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '52² = 2 704. 20² + 48² = 400 + 2 304 = 2 704. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 11 cm, 60 cm and 62 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '62² = 3 844. 11² + 60² = 121 + 3 600 = 3 721. Since 3 844 ≠ 3 721, it is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 6 cm, leaving the answer in surd form.', answer: '√61 cm', checkMode: 'auto', correctAnswer: '√61', correctAnswers: ['√61', '√61cm', '√61 cm'], explanation: 'c² = 5² + 6² = 25 + 36 = 61\nSince 61 is not a perfect square, c = √61 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 6 cm and 9 cm. Simplify your surd-form answer as far as possible.', answer: '3√13 cm', checkMode: 'auto', correctAnswer: '3√13', correctAnswers: ['3√13', '3√13cm', '3√13 cm'], explanation: 'c² = 6² + 9² = 36 + 81 = 117\nc = √117 = √(9 × 13) = 3√13 cm ✓' },
        { difficulty: 'Medium', question: 'A ladder 17 m long leans against a wall, as shown, with its base 15 m from the wall. How high up the wall does it reach?', answer: '8 m', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8m', '8 m'], explanation: 'height² = 17² − 15² = 289 − 225 = 64\nheight = √64 = 8 m ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="150" x2="30" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="20" x2="190" y2="150" stroke="#2563eb" stroke-width="2.5"/><rect x="30" y="132" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="118" y="78" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">ladder = 17 m</text><text x="18" y="88" font-size="14" fill="#dc2626" text-anchor="end">?</text><text x="110" y="170" font-size="14" fill="#2563eb" text-anchor="middle">15 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular gate is 14 m by 48 m, as shown. Find the length of its diagonal brace.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'c² = 14² + 48² = 196 + 2 304 = 2 500\nc = √2 500 = 50 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="180" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="200" y2="30" stroke="#dc2626" stroke-width="2.5"/><rect x="182" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">48 m</text><text x="4" y="90" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">14 m</text><text x="130" y="75" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Medium', question: 'Find the distance between the points (2, 3) and (11, 15) on a grid, as shown.', answer: '15 units', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 units', '15units'], explanation: 'Horizontal distance = 11 − 2 = 9, vertical distance = 15 − 3 = 12 — these form the legs of a right-angled triangle.\nd² = 9² + 12² = 81 + 144 = 225\nd = √225 = 15 units ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="170" x2="200" y2="170" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="170" x2="20" y2="20" stroke="#9ca3af" stroke-width="1.5"/><circle cx="20" cy="170" r="4" fill="#0f1f3d"/><circle cx="140" cy="50" r="4" fill="#0f1f3d"/><line x1="20" y1="170" x2="140" y2="170" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="170" x2="140" y2="50" stroke="#2563eb" stroke-width="2.5"/><line x1="20" y1="170" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><rect x="122" y="152" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="16" y="186" font-size="13" fill="#374151">(2, 3)</text><text x="144" y="46" font-size="13" fill="#374151">(11, 15)</text><text x="80" y="188" font-size="14" fill="#2563eb" font-weight="700">9</text><text x="150" y="115" font-size="14" fill="#2563eb" font-weight="700">12</text><text x="65" y="105" font-size="14" fill="#dc2626" font-weight="700">d</text></svg>' },
        { difficulty: 'Medium', question: 'A vertical pole is 9 m tall, as shown. A wire runs from the top of the pole to a point on the ground 40 m from its base. Find the length of the wire.', answer: '41 m', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41m', '41 m'], explanation: 'c² = 9² + 40² = 81 + 1 600 = 1 681\nc = √1 681 = 41 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="30" y2="30" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="30" x2="190" y2="140" stroke="#dc2626" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">40 m</text><text x="125" y="80" font-size="15" fill="#dc2626" font-weight="700">wire = c</text></svg>' },
        { difficulty: 'Medium', question: 'A ladder 9 m long leans against a wall with its base 4 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '8.06 m', checkMode: 'auto', correctAnswer: '8.06', correctAnswers: ['8.06', '8.06m', '8.06 m'], explanation: 'height² = 9² − 4² = 81 − 16 = 65\nheight = √65 ≈ 8.06 m ✓' },
        { difficulty: 'Hard', question: 'Zanele says a triangle with sides 16 cm, 63 cm and 65 cm is right-angled. Check her claim and explain.', answer: '65² = 4 225. 16² + 63² = 256 + 3 969 = 4 225. Since they are equal, the triangle is right-angled — Zanele is correct.', checkMode: 'self', correctAnswer: '65² = 4 225. 16² + 63² = 256 + 3 969 = 4 225. Since they are equal, the triangle is right-angled — Zanele is correct.' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 7 cm and 11 cm, rounded to 2 decimal places.', answer: '13.04 cm', checkMode: 'auto', correctAnswer: '13.04', correctAnswers: ['13.04', '13.04cm', '13.04 cm'], explanation: 'c² = 7² + 11² = 49 + 121 = 170\nc = √170 ≈ 13.04 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 15 cm and a base of 18 cm, as shown. Find the height of the triangle (from the apex to the midpoint of the base).', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'The height splits the base into two equal halves of 9 cm each, forming a right-angled triangle with hypotenuse 15 cm.\nh² = 15² − 9² = 225 − 81 = 144\nh = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">15 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">15 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same isosceles triangle (equal sides 15 cm, base 18 cm, height 12 cm), calculate its area.', answer: '108 cm²', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108cm²', '108 cm²'], explanation: 'Area = ½ × base × height = ½ × 18 × 12 = 108 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">15 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">15 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 9 cm by 12 cm and a height of 20 cm, as shown. Find the length of the diagonal across the base.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'Base diagonal: d² = 9² + 12² = 81 + 144 = 225, d = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">12 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">20 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same box (base 9 cm by 12 cm, height 20 cm, base diagonal 15 cm), find the length of the space diagonal — from one bottom corner to the opposite top corner.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'The space diagonal uses the base diagonal (15 cm) and the height (20 cm) as the two legs of a new right-angled triangle:\nD² = 15² + 20² = 225 + 400 = 625\nD = √625 = 25 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">12 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">20 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'A vertical pole is 9 m tall. A wire runs from the top of the pole to a point on the ground 40 m from its base. If 3 identical wires are needed to support the pole, find the total length of wire required.', answer: '123 m', checkMode: 'auto', correctAnswer: '123', correctAnswers: ['123', '123m', '123 m'], explanation: 'One wire: c² = 9² + 40² = 81 + 1 600 = 1 681, c = 41 m.\nThree wires: 3 × 41 = 123 m ✓' },
        { difficulty: 'Hard', question: 'Explain why you must always check the triangle inequality before testing whether three side lengths form a right-angled triangle.', answer: 'The triangle inequality states that the sum of the two shorter sides must be greater than the longest side, otherwise no triangle can be formed at all. If three lengths fail this test, they cannot make any triangle — right-angled or otherwise — so checking whether the longest side squared equals the sum of the squares of the other two would be meaningless.', checkMode: 'self', correctAnswer: 'The triangle inequality states that the sum of the two shorter sides must be greater than the longest side, otherwise no triangle can be formed at all. If three lengths fail this test, they cannot make any triangle — right-angled or otherwise — so checking whether the longest side squared equals the sum of the squares of the other two would be meaningless.' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 7:24 and a hypotenuse of 75 cm. Find the length of each leg.', answer: '21 cm and 72 cm', checkMode: 'auto', correctAnswer: '21 cm and 72 cm', correctAnswers: ['21 cm and 72 cm', '21 and 72', '21cm and 72cm', '21, 72'], explanation: 'Let the legs be 7x and 24x. Then (7x)² + (24x)² = 75² → 49x² + 576x² = 5 625 → 625x² = 5 625 → x² = 9 → x = 3.\nLegs = 7(3) = 21 cm and 24(3) = 72 cm ✓ (check: 21² + 72² = 441 + 5 184 = 5 625 = 75²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the Theorem of Pythagoras across every skill in this set.' },
        { minScore: 19, message: 'Great work! You are confident applying the theorem — review any missed questions and try another set.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 5 cm and 12 cm, as shown. Find the hypotenuse.', answer: '13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm'], explanation: 'c² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="20,140 170,140 20,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="160" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="4" y="94" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="108" y="82" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 8 cm and 15 cm. Find the hypotenuse.', answer: '17 cm', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'c² = 8² + 15² = 64 + 225 = 289\nc = √289 = 17 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 25 cm and one leg 7 cm. Find the other leg.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 25² − 7² = 625 − 49 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 9 cm, 40 cm and 41 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '41² = 1 681. 9² + 40² = 81 + 1 600 = 1 681. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 8 cm, 14 cm and 17 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '17² = 289. 8² + 14² = 64 + 196 = 260. Since 289 ≠ 260, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 16 cm and 30 cm. Find the hypotenuse.', answer: '34 cm', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34cm', '34 cm'], explanation: 'c² = 16² + 30² = 256 + 900 = 1 156\nc = √1 156 = 34 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 37 cm and one leg 12 cm. Find the other leg.', answer: '35 cm', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35cm', '35 cm'], explanation: 'a² = c² − b² = 37² − 12² = 1 369 − 144 = 1 225\na = √1 225 = 35 cm ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 16 cm, 63 cm and 65 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '65² = 4 225. 16² + 63² = 256 + 3 969 = 4 225. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 27 cm, 36 cm and 46 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '46² = 2 116. 27² + 36² = 729 + 1 296 = 2 025. Since 2 025 ≠ 2 116, it is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 4 cm and 7 cm, leaving the answer in surd form.', answer: '√65 cm', checkMode: 'auto', correctAnswer: '√65', correctAnswers: ['√65', '√65cm', '√65 cm'], explanation: 'c² = 4² + 7² = 16 + 49 = 65\nSince 65 is not a perfect square, c = √65 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 4 cm and 8 cm. Simplify your surd-form answer as far as possible.', answer: '4√5 cm', checkMode: 'auto', correctAnswer: '4√5', correctAnswers: ['4√5', '4√5cm', '4√5 cm'], explanation: 'c² = 4² + 8² = 16 + 64 = 80\nc = √80 = √(16 × 5) = 4√5 cm ✓' },
        { difficulty: 'Medium', question: 'A ladder 17 m long leans against a wall, as shown, with its base 8 m from the wall. How high up the wall does it reach?', answer: '15 m', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], explanation: 'height² = 17² − 8² = 289 − 64 = 225\nheight = √225 = 15 m ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="150" x2="30" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="20" x2="190" y2="150" stroke="#2563eb" stroke-width="2.5"/><rect x="30" y="132" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="118" y="78" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">ladder = 17 m</text><text x="18" y="88" font-size="14" fill="#dc2626" text-anchor="end">?</text><text x="110" y="170" font-size="14" fill="#2563eb" text-anchor="middle">8 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular gate is 7 m by 24 m, as shown. Find the length of its diagonal brace.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="180" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="200" y2="30" stroke="#dc2626" stroke-width="2.5"/><rect x="182" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">24 m</text><text x="4" y="90" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">7 m</text><text x="130" y="75" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Medium', question: 'Find the distance between the points (0, 0) and (5, 12) on a grid, as shown.', answer: '13 units', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 units', '13units'], explanation: 'Horizontal distance = 5, vertical distance = 12 — these form the legs of a right-angled triangle.\nd² = 5² + 12² = 25 + 144 = 169\nd = √169 = 13 units ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="170" x2="200" y2="170" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="170" x2="20" y2="20" stroke="#9ca3af" stroke-width="1.5"/><circle cx="20" cy="170" r="4" fill="#0f1f3d"/><circle cx="140" cy="50" r="4" fill="#0f1f3d"/><line x1="20" y1="170" x2="140" y2="170" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="170" x2="140" y2="50" stroke="#2563eb" stroke-width="2.5"/><line x1="20" y1="170" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><rect x="122" y="152" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="16" y="186" font-size="13" fill="#374151">(0, 0)</text><text x="144" y="46" font-size="13" fill="#374151">(5, 12)</text><text x="80" y="188" font-size="14" fill="#2563eb" font-weight="700">5</text><text x="150" y="115" font-size="14" fill="#2563eb" font-weight="700">12</text><text x="65" y="105" font-size="14" fill="#dc2626" font-weight="700">d</text></svg>' },
        { difficulty: 'Medium', question: 'A vertical pole is 9 m tall, as shown. A wire runs from the top of the pole to a point on the ground 12 m from its base. Find the length of the wire.', answer: '15 m', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="30" y2="30" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="30" x2="190" y2="140" stroke="#dc2626" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="end">9 m</text><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="125" y="80" font-size="15" fill="#dc2626" font-weight="700">wire = c</text></svg>' },
        { difficulty: 'Medium', question: 'A ladder 9 m long leans against a wall with its base 2.5 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '8.65 m', checkMode: 'auto', correctAnswer: '8.65', correctAnswers: ['8.65', '8.65m', '8.65 m'], explanation: 'height² = 9² − 2.5² = 81 − 6.25 = 74.75\nheight = √74.75 ≈ 8.65 m ✓' },
        { difficulty: 'Hard', question: 'Zanele says a triangle with sides 12 cm, 35 cm and 37 cm is right-angled. Check her claim and explain.', answer: '37² = 1 369. 12² + 35² = 144 + 1 225 = 1 369. Since they are equal, the triangle is right-angled — Zanele is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 8 cm and 9 cm, rounded to 2 decimal places.', answer: '12.04 cm', checkMode: 'auto', correctAnswer: '12.04', correctAnswers: ['12.04', '12.04cm', '12.04 cm'], explanation: 'c² = 8² + 9² = 64 + 81 = 145\nc = √145 ≈ 12.04 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 13 cm and a base of 10 cm, as shown. Find the height of the triangle (from the apex to the midpoint of the base).', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'The height splits the base into two equal halves of 5 cm each, forming a right-angled triangle with hypotenuse 13 cm.\nh² = 13² − 5² = 169 − 25 = 144\nh = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">13 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">13 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same isosceles triangle (equal sides 13 cm, base 10 cm, height 12 cm), calculate its area.', answer: '60 cm²', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60cm²', '60 cm²'], explanation: 'Area = ½ × base × height = ½ × 10 × 12 = 60 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">13 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">13 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 6 cm by 8 cm and a height of 24 cm, as shown. Find the length of the diagonal across the base.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Base diagonal: d² = 6² + 8² = 36 + 64 = 100, d = √100 = 10 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">24 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same box (base 6 cm by 8 cm, height 24 cm, base diagonal 10 cm), find the length of the space diagonal — from one bottom corner to the opposite top corner.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm', '26 cm'], explanation: 'The space diagonal uses the base diagonal (10 cm) and the height (24 cm) as the two legs of a new right-angled triangle:\nD² = 10² + 24² = 100 + 576 = 676\nD = √676 = 26 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">8 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">24 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'A vertical pole is 9 m tall. A wire runs from the top of the pole to a point on the ground 12 m from its base. If wire costs R20 per metre and 3 identical wires are needed to support the pole, find the total cost of the wire required.', answer: 'R900', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900', 'R900'], explanation: 'One wire: c² = 9² + 12² = 81 + 144 = 225, c = 15 m.\nThree wires: 3 × 15 = 45 m.\nCost = 45 × R20 = R900 ✓' },
        { difficulty: 'Hard', question: 'Explain why you must always check the triangle inequality before testing whether three given side lengths form a right-angled triangle.', answer: 'The triangle inequality states that the sum of the two shorter sides must be greater than the longest side for any triangle to exist at all. If three lengths fail this test, no triangle can be formed with them, so it would be meaningless to check the Pythagorean condition — there is no triangle to be right-angled in the first place.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 7:24 and a hypotenuse of 125 cm. Find the length of each leg.', answer: '35 cm and 120 cm', checkMode: 'auto', correctAnswer: '35 cm and 120 cm', correctAnswers: ['35 cm and 120 cm', '35 and 120', '35cm and 120cm', '35, 120'], explanation: 'Let the legs be 7x and 24x. Then (7x)² + (24x)² = 125² → 49x² + 576x² = 15 625 → 625x² = 15 625 → x² = 25 → x = 5.\nLegs = 7(5) = 35 cm and 24(5) = 120 cm ✓ (check: 35² + 120² = 1 225 + 14 400 = 15 625 = 125²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the Theorem of Pythagoras across every skill in this set.' },
        { minScore: 19, message: 'Great work! You are confident applying the theorem — review any missed questions and try another set.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 12 cm and 16 cm, as shown. Find the hypotenuse.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'c² = 12² + 16² = 144 + 256 = 400\nc = √400 = 20 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="20,140 170,140 20,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="160" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="4" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">12 cm</text><text x="108" y="78" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 20 cm and 99 cm. Find the hypotenuse.', answer: '101 cm', checkMode: 'auto', correctAnswer: '101', correctAnswers: ['101', '101cm', '101 cm'], explanation: 'c² = 20² + 99² = 400 + 9 801 = 10 201\nc = √10 201 = 101 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 61 cm and one leg 11 cm. Find the other leg.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60cm', '60 cm'], explanation: 'a² = c² − b² = 61² − 11² = 3 721 − 121 = 3 600\na = √3 600 = 60 cm ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 39 cm, 80 cm and 89 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '89² = 7 921. 39² + 80² = 1 521 + 6 400 = 7 921. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 16 cm, 63 cm and 66 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '66² = 4 356. 16² + 63² = 256 + 3 969 = 4 225. Since 4 356 ≠ 4 225, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 39 cm and 80 cm. Find the hypotenuse.', answer: '89 cm', checkMode: 'auto', correctAnswer: '89', correctAnswers: ['89', '89cm', '89 cm'], explanation: 'c² = 39² + 80² = 1 521 + 6 400 = 7 921\nc = √7 921 = 89 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 89 cm and one leg 39 cm. Find the other leg.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80cm', '80 cm'], explanation: 'a² = c² − b² = 89² − 39² = 7 921 − 1 521 = 6 400\na = √6 400 = 80 cm ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 48 cm, 55 cm and 73 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '73² = 5 329. 48² + 55² = 2 304 + 3 025 = 5 329. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 24 cm, 45 cm and 52 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '52² = 2 704. 24² + 45² = 576 + 2 025 = 2 601. Since 2 704 ≠ 2 601, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 5 cm and 7 cm, leaving the answer in surd form.', answer: '√74 cm', checkMode: 'auto', correctAnswer: '√74', correctAnswers: ['√74', '√74cm', '√74 cm'], explanation: 'c² = 5² + 7² = 25 + 49 = 74\nSince 74 is not a perfect square, c = √74 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 3 cm and 6 cm. Simplify your surd-form answer as far as possible.', answer: '3√5 cm', checkMode: 'auto', correctAnswer: '3√5', correctAnswers: ['3√5', '3√5cm', '3√5 cm'], explanation: 'c² = 3² + 6² = 9 + 36 = 45\nc = √45 = √(9 × 5) = 3√5 cm ✓' },
        { difficulty: 'Medium', question: 'A ladder 25 m long leans against a wall, as shown, with its base 7 m from the wall. How high up the wall does it reach?', answer: '24 m', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24m', '24 m'], explanation: 'height² = 25² − 7² = 625 − 49 = 576\nheight = √576 = 24 m ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="150" x2="30" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="20" x2="190" y2="150" stroke="#2563eb" stroke-width="2.5"/><rect x="30" y="132" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="118" y="78" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">ladder = 25 m</text><text x="18" y="88" font-size="14" fill="#dc2626" text-anchor="end">?</text><text x="110" y="170" font-size="14" fill="#2563eb" text-anchor="middle">7 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular gate is 15 m by 36 m, as shown. Find the length of its diagonal brace.', answer: '39 m', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39m', '39 m'], explanation: 'c² = 15² + 36² = 225 + 1 296 = 1 521\nc = √1 521 = 39 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="180" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="200" y2="30" stroke="#dc2626" stroke-width="2.5"/><rect x="182" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">36 m</text><text x="4" y="90" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">15 m</text><text x="130" y="75" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Medium', question: 'Find the distance between the points (0, 0) and (8, 6) on a grid, as shown.', answer: '10 units', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 units', '10units'], explanation: 'Horizontal distance = 8, vertical distance = 6 — these form the legs of a right-angled triangle.\nd² = 8² + 6² = 64 + 36 = 100\nd = √100 = 10 units ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="170" x2="200" y2="170" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="170" x2="20" y2="20" stroke="#9ca3af" stroke-width="1.5"/><circle cx="20" cy="170" r="4" fill="#0f1f3d"/><circle cx="140" cy="50" r="4" fill="#0f1f3d"/><line x1="20" y1="170" x2="140" y2="170" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="170" x2="140" y2="50" stroke="#2563eb" stroke-width="2.5"/><line x1="20" y1="170" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><rect x="122" y="152" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="16" y="186" font-size="13" fill="#374151">(0, 0)</text><text x="144" y="46" font-size="13" fill="#374151">(8, 6)</text><text x="80" y="188" font-size="14" fill="#2563eb" font-weight="700">8</text><text x="150" y="115" font-size="14" fill="#2563eb" font-weight="700">6</text><text x="65" y="105" font-size="14" fill="#dc2626" font-weight="700">d</text></svg>' },
        { difficulty: 'Medium', question: 'A vertical pole is 15 m tall, as shown. A wire runs from the top of the pole to a point on the ground 20 m from its base. Find the length of the wire.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 15² + 20² = 225 + 400 = 625\nc = √625 = 25 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="30" y2="30" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="30" x2="190" y2="140" stroke="#dc2626" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="end">15 m</text><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">20 m</text><text x="125" y="80" font-size="15" fill="#dc2626" font-weight="700">wire = c</text></svg>' },
        { difficulty: 'Medium', question: 'A ladder 9 m long leans against a wall with its base 5.5 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '7.12 m', checkMode: 'auto', correctAnswer: '7.12', correctAnswers: ['7.12', '7.12m', '7.12 m'], explanation: 'height² = 9² − 5.5² = 81 − 30.25 = 50.75\nheight = √50.75 ≈ 7.12 m ✓' },
        { difficulty: 'Hard', question: 'Zanele says a triangle with sides 16 cm, 30 cm and 34 cm is right-angled. Check her claim and explain.', answer: '34² = 1 156. 16² + 30² = 256 + 900 = 1 156. Since they are equal, the triangle is right-angled — Zanele is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 6 cm and 11 cm, rounded to 2 decimal places.', answer: '12.53 cm', checkMode: 'auto', correctAnswer: '12.53', correctAnswers: ['12.53', '12.53cm', '12.53 cm'], explanation: 'c² = 6² + 11² = 36 + 121 = 157\nc = √157 ≈ 12.53 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 26 cm and a base of 20 cm, as shown. Find the height of the triangle (from the apex to the midpoint of the base).', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'The height splits the base into two equal halves of 10 cm each, forming a right-angled triangle with hypotenuse 26 cm.\nh² = 26² − 10² = 676 − 100 = 576\nh = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">26 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">26 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same isosceles triangle (equal sides 26 cm, base 20 cm, height 24 cm), calculate its area.', answer: '240 cm²', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240', '240cm²', '240 cm²'], explanation: 'Area = ½ × base × height = ½ × 20 × 24 = 240 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">26 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">26 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 3 cm by 4 cm and a height of 12 cm, as shown. Find the length of the diagonal across the base.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'Base diagonal: d² = 3² + 4² = 9 + 16 = 25, d = √25 = 5 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">3 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">4 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">12 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same box (base 3 cm by 4 cm, height 12 cm, base diagonal 5 cm), find the length of the space diagonal — from one bottom corner to the opposite top corner.', answer: '13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm'], explanation: 'The space diagonal uses the base diagonal (5 cm) and the height (12 cm) as the two legs of a new right-angled triangle:\nD² = 5² + 12² = 25 + 144 = 169\nD = √169 = 13 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">3 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">4 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">12 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'A vertical pole is 10 m tall. A wire runs from the top of the pole to a point on the ground 24 m from its base. If wire costs R14 per metre, find the total cost of the wire.', answer: 'R364', checkMode: 'auto', correctAnswer: '364', correctAnswers: ['364', 'R364'], explanation: 'c² = 10² + 24² = 100 + 576 = 676, c = √676 = 26 m.\nCost = 26 × R14 = R364 ✓' },
        { difficulty: 'Hard', question: 'Explain why you must always check the triangle inequality before testing whether three side lengths form a right-angled triangle.', answer: 'The triangle inequality states that the sum of the two shorter sides must be greater than the longest side, otherwise the three lengths cannot form a triangle at all. If this condition fails, checking a² + b² = c² is meaningless, because no triangle — right-angled or otherwise — could exist with those three lengths in the first place.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 5:12 and a hypotenuse of 26 cm. Find the length of each leg.', answer: '10 cm and 24 cm', checkMode: 'auto', correctAnswer: '10 cm and 24 cm', correctAnswers: ['10 cm and 24 cm', '10 and 24', '10cm and 24cm', '10, 24'], explanation: 'Let the legs be 5x and 12x. Then (5x)² + (12x)² = 26² → 25x² + 144x² = 676 → 169x² = 676 → x² = 4 → x = 2.\nLegs = 5(2) = 10 cm and 12(2) = 24 cm ✓ (check: 10² + 24² = 100 + 576 = 676 = 26²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the Theorem of Pythagoras across every skill in this set.' },
        { minScore: 19, message: 'Great work! You are confident applying the theorem — review any missed questions and try another set.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 4',
      questions: [
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 8 cm and 15 cm, as shown. Find the hypotenuse.', answer: '17 cm', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'c² = 8² + 15² = 64 + 225 = 289\nc = √289 = 17 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="20,140 170,140 20,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="160" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="4" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="108" y="78" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Easy', question: 'A right-angled triangle has legs 7 cm and 24 cm. Find the hypotenuse.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 cm ✓' },
        { difficulty: 'Easy', question: 'A right-angled triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'a² = c² − b² = 17² − 8² = 289 − 64 = 225\na = √225 = 15 cm ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 10 cm, 24 cm and 26 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '26² = 676. 10² + 24² = 100 + 576 = 676. Since they are equal, the triangle is right-angled ✓' },
        { difficulty: 'Easy', question: 'Is a triangle with sides 11 cm, 24 cm and 27 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '27² = 729. 11² + 24² = 121 + 576 = 697. Since 729 ≠ 697, the triangle is not right-angled ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has legs 33 cm and 56 cm. Find the hypotenuse.', answer: '65 cm', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65cm', '65 cm'], explanation: 'c² = 33² + 56² = 1 089 + 3 136 = 4 225\nc = √4 225 = 65 cm ✓' },
        { difficulty: 'Medium', question: 'A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. Find the other leg.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'a² = c² − b² = 13² − 5² = 169 − 25 = 144\na = √144 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 28 cm, 45 cm and 53 cm right-angled? Write yes or no.', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: '53² = 2 809. 28² + 45² = 784 + 2 025 = 2 809. Equal, so it is right-angled ✓' },
        { difficulty: 'Medium', question: 'Is a triangle with sides 33 cm, 44 cm and 56 cm right-angled? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: '56² = 3 136. 33² + 44² = 1 089 + 1 936 = 3 025. Since 3 025 ≠ 3 136, it is not right-angled ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 3 cm and 8 cm, leaving the answer in surd form.', answer: '√73 cm', checkMode: 'auto', correctAnswer: '√73', correctAnswers: ['√73', '√73cm', '√73 cm'], explanation: 'c² = 3² + 8² = 9 + 64 = 73\nSince 73 is not a perfect square, c = √73 cm ✓' },
        { difficulty: 'Medium', question: 'Find the hypotenuse of a right-angled triangle with legs 2 cm and 4 cm. Simplify your surd-form answer as far as possible.', answer: '2√5 cm', checkMode: 'auto', correctAnswer: '2√5', correctAnswers: ['2√5', '2√5cm', '2√5 cm'], explanation: 'c² = 2² + 4² = 4 + 16 = 20\nc = √20 = √(4 × 5) = 2√5 cm ✓' },
        { difficulty: 'Medium', question: 'A ladder 15 m long leans against a wall, as shown, with its base 9 m from the wall. How high up the wall does it reach?', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12m', '12 m'], explanation: 'height² = 15² − 9² = 225 − 81 = 144\nheight = √144 = 12 m ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="150" x2="30" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="150" x2="190" y2="150" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="20" x2="190" y2="150" stroke="#2563eb" stroke-width="2.5"/><rect x="30" y="132" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="118" y="78" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">ladder = 15 m</text><text x="18" y="88" font-size="14" fill="#dc2626" text-anchor="end">?</text><text x="110" y="170" font-size="14" fill="#2563eb" text-anchor="middle">9 m</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular gate is 16 m by 30 m, as shown. Find the length of its diagonal brace.', answer: '34 m', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34m', '34 m'], explanation: 'c² = 16² + 30² = 256 + 900 = 1 156\nc = √1 156 = 34 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="180" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="140" x2="200" y2="30" stroke="#dc2626" stroke-width="2.5"/><rect x="182" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">30 m</text><text x="4" y="90" font-size="15" fill="#2563eb" font-weight="700" text-anchor="start">16 m</text><text x="130" y="75" font-size="15" fill="#dc2626" font-weight="700">c</text></svg>' },
        { difficulty: 'Medium', question: 'Find the distance between the points (0, 0) and (9, 12) on a grid, as shown.', answer: '15 units', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 units', '15units'], explanation: 'Horizontal distance = 9, vertical distance = 12 — these form the legs of a right-angled triangle.\nd² = 9² + 12² = 81 + 144 = 225\nd = √225 = 15 units ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="170" x2="200" y2="170" stroke="#9ca3af" stroke-width="1.5"/><line x1="20" y1="170" x2="20" y2="20" stroke="#9ca3af" stroke-width="1.5"/><circle cx="20" cy="170" r="4" fill="#0f1f3d"/><circle cx="140" cy="50" r="4" fill="#0f1f3d"/><line x1="20" y1="170" x2="140" y2="170" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="170" x2="140" y2="50" stroke="#2563eb" stroke-width="2.5"/><line x1="20" y1="170" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><rect x="122" y="152" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="16" y="186" font-size="13" fill="#374151">(0, 0)</text><text x="144" y="46" font-size="13" fill="#374151">(9, 12)</text><text x="80" y="188" font-size="14" fill="#2563eb" font-weight="700">9</text><text x="150" y="115" font-size="14" fill="#2563eb" font-weight="700">12</text><text x="65" y="105" font-size="14" fill="#dc2626" font-weight="700">d</text></svg>' },
        { difficulty: 'Medium', question: 'A vertical pole is 18 m tall, as shown. A wire runs from the top of the pole to a point on the ground 24 m from its base. Find the length of the wire.', answer: '30 m', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30m', '30 m'], explanation: 'c² = 18² + 24² = 324 + 576 = 900\nc = √900 = 30 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="140" x2="30" y2="30" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="140" x2="190" y2="140" stroke="#0f1f3d" stroke-width="3"/><line x1="30" y1="30" x2="190" y2="140" stroke="#dc2626" stroke-width="2.5"/><rect x="30" y="122" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="26" y="88" font-size="15" fill="#2563eb" font-weight="700" text-anchor="end">18 m</text><text x="110" y="158" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">24 m</text><text x="125" y="80" font-size="15" fill="#dc2626" font-weight="700">wire = c</text></svg>' },
        { difficulty: 'Medium', question: 'A ladder 9 m long leans against a wall with its base 3.2 m from the wall. How high up the wall does it reach (to 2 decimal places)?', answer: '8.41 m', checkMode: 'auto', correctAnswer: '8.41', correctAnswers: ['8.41', '8.41m', '8.41 m'], explanation: 'height² = 9² − 3.2² = 81 − 10.24 = 70.76\nheight = √70.76 ≈ 8.41 m ✓' },
        { difficulty: 'Hard', question: 'Zanele says a triangle with sides 18 cm, 24 cm and 30 cm is right-angled. Check her claim and explain.', answer: '30² = 900. 18² + 24² = 324 + 576 = 900. Since they are equal, the triangle is right-angled — Zanele is correct.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find the hypotenuse of a right-angled triangle with legs 7 cm and 10 cm, rounded to 2 decimal places.', answer: '12.21 cm', checkMode: 'auto', correctAnswer: '12.21', correctAnswers: ['12.21', '12.21cm', '12.21 cm'], explanation: 'c² = 7² + 10² = 49 + 100 = 149\nc = √149 ≈ 12.21 cm ✓' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two equal sides of 17 cm and a base of 16 cm, as shown. Find the height of the triangle (from the apex to the midpoint of the base).', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'The height splits the base into two equal halves of 8 cm each, forming a right-angled triangle with hypotenuse 17 cm.\nh² = 17² − 8² = 289 − 64 = 225\nh = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">17 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">17 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same isosceles triangle (equal sides 17 cm, base 16 cm, height 15 cm), calculate its area.', answer: '120 cm²', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120cm²', '120 cm²'], explanation: 'Area = ½ × base × height = ½ × 16 × 15 = 120 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 20,140 200,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="124" width="16" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="75" font-size="14" fill="#2563eb" font-weight="700">17 cm</text><text x="155" y="75" font-size="14" fill="#2563eb" font-weight="700">17 cm</text><text x="110" y="160" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="122" y="90" font-size="14" fill="#dc2626" font-weight="700">h</text></svg>' },
        { difficulty: 'Hard', question: 'A rectangular box has a base of 9 cm by 12 cm and a height of 36 cm, as shown. Find the length of the diagonal across the base.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'Base diagonal: d² = 9² + 12² = 81 + 144 = 225, d = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">12 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">36 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same box (base 9 cm by 12 cm, height 36 cm, base diagonal 15 cm), find the length of the space diagonal — from one bottom corner to the opposite top corner.', answer: '39 cm', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39cm', '39 cm'], explanation: 'The space diagonal uses the base diagonal (15 cm) and the height (36 cm) as the two legs of a new right-angled triangle:\nD² = 15² + 36² = 225 + 1 296 = 1 521\nD = √1 521 = 39 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 110,170 190,140 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="190" y1="140" x2="190" y2="30" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="120" x2="110" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="30,40 110,10 190,30 110,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="150" x2="190" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="30" y1="150" x2="110" y2="10" stroke="#dc2626" stroke-width="2.5"/><text x="65" y="172" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="150" y="162" font-size="13" fill="#2563eb" font-weight="700">12 cm</text><text x="40" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">36 cm</text><text x="112" y="168" font-size="13" fill="#ea580c" font-weight="700">base diag.</text><text x="55" y="65" font-size="13" fill="#dc2626" font-weight="700">space diag.</text></svg>' },
        { difficulty: 'Hard', question: 'A vertical pole is 9 m tall. A wire runs from the top of the pole to a point on the ground 40 m from its base. If 4 identical wires are needed to support the pole, find the total length of wire required.', answer: '164 m', checkMode: 'auto', correctAnswer: '164', correctAnswers: ['164', '164m', '164 m'], explanation: 'One wire: c² = 9² + 40² = 81 + 1 600 = 1 681, c = √1 681 = 41 m.\nFour wires: 4 × 41 = 164 m ✓' },
        { difficulty: 'Hard', question: 'Before checking whether three given side lengths form a right-angled triangle, explain what you should check first, and why.', answer: 'You should first check that the three lengths can form a triangle at all, using the triangle inequality: the sum of the two shorter sides must be greater than the longest side. If this fails, no triangle exists at all, so it cannot be right-angled either — checking the Pythagorean condition would be meaningless.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A right-angled triangle has legs in the ratio 7:24 and a hypotenuse of 50 cm. Find the length of each leg.', answer: '14 cm and 48 cm', checkMode: 'auto', correctAnswer: '14 cm and 48 cm', correctAnswers: ['14 cm and 48 cm', '14 and 48', '14cm and 48cm', '14, 48'], explanation: 'Let the legs be 7x and 24x. Then (7x)² + (24x)² = 50² → 49x² + 576x² = 2 500 → 625x² = 2 500 → x² = 4 → x = 2.\nLegs = 7(2) = 14 cm and 24(2) = 48 cm ✓ (check: 14² + 48² = 196 + 2 304 = 2 500 = 50²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered the Theorem of Pythagoras across every skill in this set.' },
        { minScore: 19, message: 'Great work! You are confident applying the theorem — review any missed questions and try another set.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
