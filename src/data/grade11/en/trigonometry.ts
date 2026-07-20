import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// special triangle sides / sinθ → blue   (#2563eb)
// derived ratio / cosθ          → orange (#ea580c)
// final surd value / identity   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Trigonometry',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SPECIAL ANGLES — 30°, 45° AND 60°
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'special-angles',
      title: 'Special Angles — 30°, 45° and 60°',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We derive the <strong>exact (surd form) values</strong> of sin, cos and tan for 30°, 45° and 60° using two special triangles shown in the diagram below. The <strong>45-45-90 triangle</strong> comes from cutting a square diagonally — both legs equal 1, giving a hypotenuse of √2. The <strong>30-60-90 triangle</strong> comes from cutting an equilateral triangle (sides of 2) in half — this gives a base of 1, height of √3, and hypotenuse of 2. Refer to the diagram to see exactly which side is opposite each angle before working through the examples.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('special triangle sides')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('derived ratio')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final surd value')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the 45-45-90 triangle in the diagram, derive sin 45°.',
          answer: `sin 45° = ${gr('√2/2')}`,
          steps: [
            `From the diagram, the side ${bl('opposite')} the 45° angle is ${bl('1')}, and the hypotenuse is ${bl('√2')}.`,
            `${or('sin 45°')} = opposite / hypotenuse = ${bl('1')} / ${bl('√2')}.`,
            `Rationalise the denominator: ${or('1/√2')} × ${bl('√2/√2')} = ${gr('√2/2')} (after rationalising).`,
            `<strong>Answer:</strong> sin 45° = ${gr('√2/2')} ✓`,
          ],
        },
        {
          question: 'Using the 30-60-90 triangle in the diagram, derive cos 30°.',
          answer: `cos 30° = ${gr('√3/2')}`,
          steps: [
            `From the diagram, the side ${bl('adjacent')} to the 30° angle is ${bl('√3')}, and the hypotenuse is ${bl('2')}.`,
            `${or('cos 30°')} = adjacent / hypotenuse = ${bl('√3')} / ${bl('2')}.`,
            `<strong>Answer:</strong> cos 30° = ${gr('√3/2')} ✓`,
          ],
        },
        {
          question: 'Using the same 30-60-90 triangle in the diagram, derive tan 60°.',
          answer: `tan 60° = ${gr('√3')}`,
          steps: [
            `From the diagram, the side ${bl('opposite')} 60° is ${bl('√3')}, and the side ${bl('adjacent')} to 60° is ${bl('1')}.`,
            `${or('tan 60°')} = opposite / adjacent = ${bl('√3')} / ${bl('1')} = ${gr('√3')}.`,
            `<strong>Answer:</strong> tan 60° = ${gr('√3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Write down the exact value of each of the following without using a calculator.\na) sin 30°\nb) cos 45°\nc) tan 30°',
          answer: 'a) sin 30° = 1/2\nb) cos 45° = √2/2\nc) tan 30° = 1/√3 = √3/3',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate the exact value of each expression. Show all working.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin²45° + cos²45° =',
              correctAnswer: '1',
              explanation: 'sin²45° = (√2/2)² = 2/4 = 1/2\ncos²45° = (√2/2)² = 1/2\nsin²45° + cos²45° = 1/2 + 1/2 = 1 ✓',
            },
            {
              label: 'b) 2 sin 30° × cos 30° =',
              correctAnswer: '√3/2',
              correctAnswers: ['√3/2', 'root3/2', '(√3)/2'],
              explanation: 'sin 30° = 1/2 and cos 30° = √3/2\n2 × (1/2) × (√3/2) = 2 × √3/4 = √3/2 ✓',
            },
            {
              label: 'c) tan²60° − 1 =',
              correctAnswer: '2',
              explanation: 'tan 60° = √3\ntan²60° = (√3)² = 3\ntan²60° − 1 = 3 − 1 = 2 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Calculate the exact value of sin 30° × cos 60° + sin 60° × cos 30° without a calculator. Show all working and simplify your answer fully.',
          answer: 'sin 30° × cos 60° + sin 60° × cos 30°\n= (1/2)(1/2) + (√3/2)(√3/2)\n= 1/4 + 3/4\n= 4/4\n= 1\n\nNote: this is the compound angle expansion of sin(30° + 60°) = sin 90° = 1 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'The 45-45-90 triangle (legs 1 and 1, hypotenuse √2) and the 30-60-90 triangle (base √3, height 1, hypotenuse 2) side by side, with all side lengths labelled in blue and the non-right angles (45°/45° and 30°/60°) labelled in dark navy',

      diagramSvg:
        '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="95" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">45-45-90 Triangle</text><text x="365" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">30-60-90 Triangle</text><polygon points="40,180 150,180 40,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="170" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="95" y="198" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="20" y="128" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="103" y="118" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">&#8730;2</text><text x="133" y="168" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">45&#176;</text><text x="55" y="85" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">45&#176;</text><polygon points="300,180 430,180 430,105" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="420" y="170" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="365" y="198" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">&#8730;3</text><text x="448" y="145" font-size="13" font-weight="700" fill="#2563eb" text-anchor="start">1</text><text x="345" y="138" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="318" y="170" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">60&#176;</text><text x="415" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">30&#176;</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving the exact values of sin, cos and tan for 30°, 45° and 60° using the 45-45-90 and 30-60-90 special triangles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRIGONOMETRIC IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-identities',
      title: 'Trigonometric Identities',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>trigonometric identity</strong> is an equation involving trig ratios that is true for all valid values of θ. In Grade 11 we derive and use two fundamental identities: the <strong>quotient identity</strong> tanθ = sinθ/cosθ (derived by dividing the definitions y/r and x/r) and the <strong>Pythagorean identity</strong> sin²θ + cos²θ = 1 (derived by applying x² + y² = r² and dividing through by r²).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sinθ')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cosθ')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified identity result')}</span>` +
        `</div>` +

        // ── Two identities ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two fundamental identities</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quotient identity</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:8px;">tanθ = sinθ / cosθ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Derived from:</strong> ${bl('sinθ')} = y/r and ${or('cosθ')} = x/r. Dividing gives (y/r) ÷ (x/r) = y/x = tanθ.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Pythagorean identity</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:8px;">sin²θ + cos²θ = 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Derived from:</strong> x² + y² = r² (Theorem of Pythagoras). Divide both sides by r²: (x/r)² + (y/r)² = 1, which gives ${or('cos²θ')} + ${bl('sin²θ')} = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Rearrangements ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Useful rearrangements of the Pythagorean identity</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 18px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">` +
        `<div style="min-width:160px;padding:8px 14px;background:white;border:1px solid #e2e8f0;border-radius:8px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin:0;">${bl('sin²θ')} = 1 − ${or('cos²θ')}</p>` +
        `</div>` +
        `<div style="min-width:160px;padding:8px 14px;background:white;border:1px solid #e2e8f0;border-radius:8px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin:0;">${or('cos²θ')} = 1 − ${bl('sin²θ')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for simplifying and proving identities</p>` +
        `<p style="margin:0;color:#1e3a8a;">Work on <strong>one side only</strong> — usually the more complex side. Replace tanθ using the quotient identity, and substitute 1 for ${bl('sin²θ')} + ${or('cos²θ')} whenever it appears. Never move terms across the equals sign — that is arithmetic, not a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Prove that tanθ = sinθ/cosθ.',
          answer: `tanθ = ${gr('sinθ / cosθ')}`,
          steps: [
            `Write down the definitions of the trig ratios: ${bl('sinθ')} = y/r and ${or('cosθ')} = x/r.`,
            `Divide ${bl('sinθ')} by ${or('cosθ')}: ${bl('sinθ')} / ${or('cosθ')} = (y/r) ÷ (x/r).`,
            `Simplify the complex fraction: (y/r) ÷ (x/r) = (y/r) × (r/x) = y/x.`,
            `Recall that tanθ = y/x by definition.`,
            `<strong>Therefore:</strong> ${bl('sinθ')} / ${or('cosθ')} = y/x = ${gr('tanθ')} ✓`,
          ],
        },
        {
          question: 'Use the identity sin²θ + cos²θ = 1 to find cosθ if sinθ = 3/5 and θ is in the first quadrant.',
          answer: `cosθ = ${gr('4/5')}`,
          steps: [
            `Write down the Pythagorean identity: ${bl('sin²θ')} + ${or('cos²θ')} = 1.`,
            `Substitute ${bl('sinθ')} = 3/5: ${bl('(3/5)²')} + ${or('cos²θ')} = 1.`,
            `Simplify: ${bl('9/25')} + ${or('cos²θ')} = 1.`,
            `Isolate ${or('cos²θ')}: ${or('cos²θ')} = 1 − ${bl('9/25')} = 25/25 − 9/25 = 16/25.`,
            `Take the square root: ${or('cosθ')} = ±√(16/25) = ±4/5.`,
            `Since θ is in the <strong>first quadrant</strong>, cosθ is positive: ${or('cosθ')} = ${gr('4/5')} ✓`,
          ],
        },
        {
          question: 'Simplify sinθ · tanθ + cosθ using the trigonometric identities.',
          answer: `sinθ · tanθ + cosθ = ${gr('1/cosθ')}`,
          steps: [
            `Replace tanθ using the quotient identity: ${bl('sinθ')} · (${bl('sinθ')} / ${or('cosθ')}) + ${or('cosθ')}.`,
            `Simplify the product: ${bl('sin²θ')} / ${or('cosθ')} + ${or('cosθ')}.`,
            `Write ${or('cosθ')} as a fraction with denominator cosθ: ${bl('sin²θ')} / ${or('cosθ')} + ${or('cos²θ')} / ${or('cosθ')}.`,
            `Combine the fractions: (${bl('sin²θ')} + ${or('cos²θ')}) / ${or('cosθ')}.`,
            `Apply the Pythagorean identity — ${bl('sin²θ')} + ${or('cos²θ')} = 1: = ${gr('1 / cosθ')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Use the identity sin²θ + cos²θ = 1 to find sinθ if cosθ = 5/13 and θ is in the first quadrant.',
          answer: 'sin²θ = 1 − cos²θ\n= 1 − (5/13)²\n= 1 − 25/169\n= 144/169\nsinθ = 12/13 (positive in the first quadrant) ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Simplify each expression using the identities. Show all working.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (sinθ / cosθ) × cosθ =',
              correctAnswer: 'sinθ',
              explanation: '(sinθ/cosθ) × cosθ = sinθ × (cosθ/cosθ) = sinθ × 1 = sinθ ✓',
            },
            {
              label: 'b) 1 − sin²θ =',
              correctAnswer: 'cos²θ',
              correctAnswers: ['cos²θ', 'cos^2θ', 'cos^2(θ)'],
              explanation: 'Rearrange sin²θ + cos²θ = 1:\n1 − sin²θ = cos²θ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Prove the following identity. Show all steps and state which identity you apply at each step.\n\n(1 − sin²θ) / cosθ = cosθ',
          answer: 'LHS = (1 − sin²θ) / cosθ\nStep 1: Apply the Pythagorean identity — 1 − sin²θ = cos²θ\n= cos²θ / cosθ\nStep 2: Simplify by cancelling one factor of cosθ\n= cosθ\n= RHS ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Given that 5cosθ + 3 = 0 and θ ∈ [180°; 360°], use the Pythagorean identity to determine the exact values of sinθ and tanθ without using a calculator. First decide which quadrant θ lies in and justify your choice.',
          answer: 'Step 1: Solve for cosθ.\n5cosθ + 3 = 0 → cosθ = −3/5\n\nStep 2: Decide the quadrant.\nθ ∈ [180°; 360°] covers Quadrants 3 and 4. Since cosθ = −3/5 is negative, and cos is only negative in Quadrant 3 within this interval (cos is positive in Quadrant 4), θ must be in Quadrant 3.\n\nStep 3: Apply the Pythagorean identity.\nsin²θ + cos²θ = 1\nsin²θ = 1 − (−3/5)² = 1 − 9/25 = 16/25\nsinθ = ±4/5\n\nStep 4: Choose the correct sign.\nIn Quadrant 3, sin is negative, so sinθ = −4/5.\n\nStep 5: Find tanθ using the quotient identity.\ntanθ = sinθ/cosθ = (−4/5) ÷ (−3/5) = 4/3 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Right-angled triangle labelled with x, y and r showing the definitions sinθ = y/r in blue, cosθ = x/r in orange, and tanθ = y/x, with the derived Pythagorean identity sin²θ + cos²θ = 1 highlighted in green',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="20" y1="150" x2="200" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="170" x2="50" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="150" x2="170" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="150" x2="170" y2="150" stroke="#ea580c" stroke-width="2.5"/><line x1="170" y1="150" x2="170" y2="60" stroke="#2563eb" stroke-width="2.5"/><circle cx="170" cy="60" r="4" fill="#0f1f3d"/><text x="176" y="56" font-size="11" font-weight="700" fill="#0f1f3d">P(x, y)</text><path d="M 78,150 A 28,28 0 0 1 72,133" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="86" y="140" font-size="13" font-weight="700" fill="#0f1f3d">&#952;</text><text x="42" y="163" font-size="10" fill="#374151">O</text><text x="110" y="166" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">x</text><text x="182" y="108" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">y</text><text x="92" y="96" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">r</text><text x="205" y="110" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">sin&#952; = y/r</text><text x="205" y="128" font-size="12" font-weight="700" fill="#ea580c" text-anchor="end">cos&#952; = x/r</text><text x="205" y="146" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="end">tan&#952; = y/x</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving the quotient identity tanθ = sinθ/cosθ and the Pythagorean identity sin²θ + cos²θ = 1, and showing how to use both identities to simplify expressions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE EFFECT OF PARAMETERS k AND p ON TRIG GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-graph-parameters',
      title: 'The Effect of Parameters k and p on Trig Graphs',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Refer to the diagram below showing ${bl('y=sinθ')} (in blue) compared to ${or('y=sin(2θ)')} (in orange) over one full revolution. The parameter <strong>k</strong> compresses (k&gt;1) or stretches (0&lt;k&lt;1) the graph horizontally, changing the period — notice in the diagram how the ${or('orange graph')} completes two full waves in the same space the ${bl('blue graph')} takes for one, since its period is 360°/k. The parameter <strong>p</strong> shifts the graph horizontally — left if p is positive (as in θ+p), right if p is negative.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original graph (k=1)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('transformed graph (k=2)')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Using the diagram, state the period of y=sin(2θ) and explain how you can see this directly from the graph.',
          answer: `The period of ${or('y=sin(2θ)')} is ${or('180°')}`,
          steps: [
            `The period is 360°/2 = ${or('180°')}.`,
            `In the diagram, the ${or('orange curve')} completes one full cycle (start to finish of one wave) in just ${or('180°')}, exactly half the space the ${bl('blue curve')} needs.`,
          ],
        },
        {
          question: 'Describe how y=cos(θ−30°) differs from y=cosθ, using the same shifting logic shown in the diagram\'s k-comparison.',
          answer: `The graph of ${or('y=cos(θ−30°)')} is the graph of ${bl('y=cosθ')} shifted ${or('30° to the right')}`,
          steps: [
            `This shifts the entire graph ${or('30° to the right')}, the same horizontal-shift principle illustrated by the p parameter, but here moving right since the angle is θ−30°.`,
          ],
        },
        {
          question: 'Lerato compares y=sin(θ+45°) to y=sinθ. Describe the transformation.',
          answer: `The graph of ${or('y=sin(θ+45°)')} is the graph of ${bl('y=sinθ')} shifted ${or('45° to the left')}`,
          steps: [
            `This shifts the graph ${or('45° to the left')}, since p is positive when written as θ+45°.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'State the period of each of the following graphs.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y = cos(3θ) — period =',
              correctAnswer: '120°',
              explanation: 'Period = 360°/k = 360°/3 = 120° ✓',
            },
            {
              label: 'b) y = sin(θ/2) — period =',
              correctAnswer: '720°',
              explanation: 'k = 1/2. Period = 360° ÷ (1/2) = 720°. The graph is stretched horizontally and completes only half a cycle in 360°. ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'For each graph, state the period and describe the horizontal shift compared to the standard graph. Show your reasoning.',
          answer: 'a) y = sin(2θ + 60°)\nFirst factorise: y = sin(2(θ + 30°)).\nk = 2 → period = 360°/2 = 180°.\np = +30° → graph shifts 30° to the left.\n\nb) y = cos(θ − 45°)\nk = 1 → period = 360° (unchanged).\np = −45° → graph shifts 45° to the right.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'A trigonometric graph has the equation y = sin(kθ + p). The period of the graph is 90° and the graph is the same as y = sin(kθ) shifted 15° to the right.\n\na) Find the value of k.\nb) Find the value of p.\nc) Write down the full equation of the graph.',
          answer: 'a) Period = 360°/k = 90°\nk = 360°/90° = 4\n\nb) A shift of 15° to the right means p < 0.\ny = sin(4θ + p). To shift right by 15°, replace θ with (θ − 15°):\ny = sin(4(θ − 15°)) = sin(4θ − 60°).\nSo p = −60°.\n\nc) y = sin(4θ − 60°)',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A graph of y=sinθ (blue) and y=sin(2θ) (orange) plotted together on the same axes from 0° to 360°, with gridlines at 90° intervals and a period bracket showing y=sin(2θ) completing two full cycles (180° each) in the same span y=sinθ takes for one full 360° cycle',

      diagramSvg:
        '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="30" y1="100" x2="440" y2="100" stroke="#94a3b8" stroke-width="1.3"/><line x1="40" y1="15" x2="40" y2="180" stroke="#94a3b8" stroke-width="1.3"/><line x1="137.5" y1="30" x2="137.5" y2="170" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="235.0" y1="30" x2="235.0" y2="170" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="332.5" y1="30" x2="332.5" y2="170" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="430.0" y1="30" x2="430.0" y2="170" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><text x="40.0" y="182" font-size="9.5" fill="#64748b" text-anchor="middle">0&#176;</text><text x="137.5" y="182" font-size="9.5" fill="#64748b" text-anchor="middle">90&#176;</text><text x="235.0" y="182" font-size="9.5" fill="#64748b" text-anchor="middle">180&#176;</text><text x="332.5" y="182" font-size="9.5" fill="#64748b" text-anchor="middle">270&#176;</text><text x="430.0" y="182" font-size="9.5" fill="#64748b" text-anchor="middle">360&#176;</text><text x="444" y="104" font-size="11" fill="#64748b">&#952;</text><text x="34" y="20" font-size="11" fill="#64748b" text-anchor="end">y</text><polyline points="40.0,100.0 50.8,87.8 61.7,76.1 72.5,65.0 83.3,55.0 94.2,46.4 105.0,39.4 115.8,34.2 126.7,31.1 137.5,30.0 148.3,31.1 159.2,34.2 170.0,39.4 180.8,46.4 191.7,55.0 202.5,65.0 213.3,76.1 224.2,87.8 235.0,100.0 245.8,112.2 256.7,123.9 267.5,135.0 278.3,145.0 289.2,153.6 300.0,160.6 310.8,165.8 321.7,169.0 332.5,170.0 343.3,169.0 354.2,165.8 365.0,160.6 375.8,153.6 386.7,145.0 397.5,135.0 408.3,123.9 419.2,112.2 430.0,100.0" fill="none" stroke="#2563eb" stroke-width="2.2"/><polyline points="40.0,100.0 50.8,76.1 61.7,55.0 72.5,39.4 83.3,31.1 94.2,31.1 105.0,39.4 115.8,55.0 126.7,76.1 137.5,100.0 148.3,123.9 159.2,145.0 170.0,160.6 180.8,169.0 191.7,169.0 202.5,160.6 213.3,145.0 224.2,123.9 235.0,100.0 245.8,76.1 256.7,55.0 267.5,39.4 278.3,31.1 289.2,31.1 300.0,39.4 310.8,55.0 321.7,76.1 332.5,100.0 343.3,123.9 354.2,145.0 365.0,160.6 375.8,169.0 386.7,169.0 397.5,160.6 408.3,145.0 419.2,123.9 430.0,100.0" fill="none" stroke="#ea580c" stroke-width="2.2"/><line x1="330" y1="10" x2="348" y2="10" stroke="#2563eb" stroke-width="2.2"/><text x="352" y="14" font-size="11" fill="#2563eb" font-weight="700">y = sin&#952;</text><line x1="330" y1="24" x2="348" y2="24" stroke="#ea580c" stroke-width="2.2"/><text x="352" y="28" font-size="11" fill="#ea580c" font-weight="700">y = sin2&#952;</text><line x1="40" y1="190" x2="40" y2="196" stroke="#ea580c" stroke-width="1.3"/><line x1="235" y1="190" x2="235" y2="196" stroke="#ea580c" stroke-width="1.3"/><line x1="40" y1="196" x2="235" y2="196" stroke="#ea580c" stroke-width="1.3"/><text x="137.5" y="208" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">y=sin2&#952;: 1 cycle = 180&#176;</text><line x1="40" y1="214" x2="40" y2="220" stroke="#2563eb" stroke-width="1.3"/><line x1="430" y1="214" x2="430" y2="220" stroke="#2563eb" stroke-width="1.3"/><line x1="40" y1="220" x2="430" y2="220" stroke="#2563eb" stroke-width="1.3"/><text x="235" y="232" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">y=sin&#952;: 1 cycle = 360&#176;</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how the parameters k and p affect the period and horizontal position of trigonometric graphs, with live side-by-side comparison of y = sinθ, y = sin(2θ) and y = sin(θ + 45°)" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — REDUCTION FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reduction-formulae',
      title: 'Reduction Formulae',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">Refer to the diagram below showing the four quadrants of the Cartesian plane, each labelled with which trig ratios are positive there (a useful memory aid is '<strong>CAST</strong>' read anticlockwise from Quadrant 4: <span style="color:#dc2626;font-weight:700">C</span>os, ${gr('A')}ll, ${bl('S')}in, ${or('T')}an). Reduction formulae let us express trig ratios of angles greater than 90° in terms of an equivalent ratio for an angle between 0° and 90° (the <strong>reference angle</strong>), with the sign determined by which quadrant the original angle falls into, as shown in the diagram.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Q1 — All positive')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('Q2 — Sin positive')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Q3 — Tan positive')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#dc2626;font-weight:700">Q4 — Cos positive</span></span>` +
        `</div>` +

        // ── Reduction formulae table ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key reduction formulae</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f1f5f9;">` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">Form</th>` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">sin result</th>` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">cos result</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">180°−θ &nbsp;(${bl('Q2')})</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${bl('sin(180°−θ)')} = ${gr('+sinθ')}</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${bl('cos(180°−θ)')} = <span style="color:#dc2626;font-weight:700">−cosθ</span></td></tr>` +
        `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">180°+θ &nbsp;(${or('Q3')})</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${or('sin(180°+θ)')} = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${or('cos(180°+θ)')} = <span style="color:#dc2626;font-weight:700">−cosθ</span></td></tr>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">360°−θ &nbsp;(<span style="color:#dc2626;font-weight:700">Q4</span>)</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">sin(360°−θ)</span> = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">cos(360°−θ)</span> = ${gr('+cosθ')}</td></tr>` +
        `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">−θ &nbsp;(<span style="color:#dc2626;font-weight:700">Q4</span>)</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">sin(−θ)</span> = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">cos(−θ)</span> = ${gr('+cosθ')}</td></tr>` +
        `</tbody></table>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Three-step method</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify the form: 180°±θ, 360°−θ, or −θ.<br><strong>Step 2</strong> — Apply the reduction formula to replace the expression with a ratio of the reference angle θ.<br><strong>Step 3</strong> — Determine the sign using the quadrant shown in the diagram above.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify sin(180°−40°).',
          answer: `sin(180°−40°) = ${bl('sin 40°')}`,
          steps: [
            `180°−40° falls in ${bl('Quadrant 2')}, where (as shown in the diagram) ${bl('sin is positive')}.`,
            `So sin(180°−40°) = ${bl('sin 40°')} ✓`,
          ],
        },
        {
          question: 'Simplify cos(360°−65°).',
          answer: `cos(360°−65°) = <span style="color:#dc2626;font-weight:700">cos 65°</span>`,
          steps: [
            `360°−65° falls in <span style="color:#dc2626;font-weight:700">Quadrant 4</span>, where (as shown in the diagram) <span style="color:#dc2626;font-weight:700">only cos is positive</span>.`,
            `So cos(360°−65°) = <span style="color:#dc2626;font-weight:700">cos 65°</span> ✓`,
          ],
        },
        {
          question: 'Sipho simplifies sin(180°+30°)·cos(−30°). Find the exact value.',
          answer: `sin(180°+30°)·cos(−30°) = ${gr('−√3/4')}`,
          steps: [
            `180°+30° falls in ${or('Quadrant 3')}, where (per the diagram) neither sin nor cos is positive — ${or('sin is negative there')}. ${or('sin(180°+30°)')} = ${or('−sin30°')} = ${or('−½')}.`,
            `cos(−30°) = <span style="color:#dc2626;font-weight:700">cos 30°</span> = <span style="color:#dc2626;font-weight:700">√3/2</span> (negative angles rotate clockwise into Quadrant 4, where cos is positive).`,
            `Combined: ${or('(−½)')} × <span style="color:#dc2626;font-weight:700">(√3/2)</span> = ${gr('−√3/4')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Use reduction formulae to simplify each expression.\na) sin(180° − x)\nb) cos(360° − x)',
          answer: 'a) sin(180° − x) = sin x\nb) cos(360° − x) = cos x',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Simplify each expression using reduction formulae.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin(180° + 50°) =',
              correctAnswer: '−sin50°',
              correctAnswers: ['−sin50°', '-sin50°', '−sin 50°', '-sin 50°'],
              explanation: 'sin(180° + θ) = −sinθ\nsin(180° + 50°) = −sin 50° ✓',
            },
            {
              label: 'b) cos(−70°) =',
              correctAnswer: 'cos70°',
              correctAnswers: ['cos70°', 'cos 70°', 'cos(70°)'],
              explanation: 'cos(−θ) = cosθ\ncos(−70°) = cos 70° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Without a calculator, simplify the following expression fully:\n\nsin(180° + x) · cos(360° − x) + cos(180° − x) · sin(−x)',
          answer: 'Step 1: Apply reduction formulae to each factor.\nsin(180° + x) = −sin x\ncos(360° − x) = cos x\ncos(180° − x) = −cos x\nsin(−x) = −sin x\n\nStep 2: Substitute.\n= (−sin x)(cos x) + (−cos x)(−sin x)\n= −sin x cos x + sin x cos x\n= 0 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A CAST diagram: the four quadrants of the Cartesian plane shaded and labelled to match the colour key — Q1 green "All +", Q2 blue "Sin +", Q3 orange "Tan +", Q4 red "Cos +" — with the axes marked 0°/360°, 90°, 180° and 270°',

      diagramSvg:
        '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="150,150 290,150 290,10 150,10" fill="#f0fdf4" stroke="none"/><polygon points="150,150 10,150 10,10 150,10" fill="#eff6ff" stroke="none"/><polygon points="150,150 10,150 10,290 150,290" fill="#fff7ed" stroke="none"/><polygon points="150,150 290,150 290,290 150,290" fill="#fef2f2" stroke="none"/><line x1="10" y1="150" x2="290" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="150" y1="10" x2="150" y2="290" stroke="#0f1f3d" stroke-width="2"/><text x="220" y="80" font-size="15" font-weight="700" fill="#16a34a" text-anchor="middle">All +</text><text x="220" y="98" font-size="11" font-weight="600" fill="#16a34a" text-anchor="middle">(sin, cos, tan)</text><text x="80" y="80" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">Sin +</text><text x="80" y="98" font-size="11" font-weight="600" fill="#2563eb" text-anchor="middle">(cos, tan neg)</text><text x="80" y="220" font-size="15" font-weight="700" fill="#ea580c" text-anchor="middle">Tan +</text><text x="80" y="238" font-size="11" font-weight="600" fill="#ea580c" text-anchor="middle">(sin, cos neg)</text><text x="220" y="220" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Cos +</text><text x="220" y="238" font-size="11" font-weight="600" fill="#dc2626" text-anchor="middle">(sin, tan neg)</text><text x="285" y="146" font-size="10" fill="#0f1f3d" text-anchor="end">0&#176;/360&#176;</text><text x="154" y="20" font-size="10" fill="#0f1f3d" text-anchor="start">90&#176;</text><text x="15" y="146" font-size="10" fill="#0f1f3d" text-anchor="start">180&#176;</text><text x="154" y="285" font-size="10" fill="#0f1f3d" text-anchor="start">270&#176;</text><text x="150" y="145" font-size="10" fill="#374151" text-anchor="end">O</text><text x="266" y="30" font-size="12" font-weight="700" fill="#16a34a">I</text><text x="34" y="30" font-size="12" font-weight="700" fill="#2563eb">II</text><text x="30" y="278" font-size="12" font-weight="700" fill="#ea580c">III</text><text x="270" y="278" font-size="12" font-weight="700" fill="#dc2626">IV</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining reduction formulae using the CAST diagram, with worked examples converting angles in Q2, Q3 and Q4 to their reference angles and determining the correct sign for each ratio" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — GENERAL SOLUTIONS OF TRIGONOMETRIC EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'general-solutions',
      title: 'General Solutions of Trigonometric Equations',
      icon: '∞',
      explanation:
        `<p style="margin-bottom:16px;">Refer to the unit circle diagram below. Since trig functions are <strong>periodic</strong> (the circle repeats every full revolution of 360°), an equation like sinθ = 0.5 has <strong>infinitely many solutions</strong> — the diagram shows both angles within one revolution (${or('30°')} and ${or('150°')}) where sinθ = 0.5, marked with matching y-values. The general solution adds ${gr('360°n')} (n = any integer) to account for every extra revolution: for sinθ = k, θ = reference angle + ${gr('360°n')} <strong>OR</strong> θ = (180° − reference angle) + ${gr('360°n')}. For cosθ = k, θ = ±reference angle + ${gr('360°n')}. For tanθ = k, θ = reference angle + ${gr('180°n')} (tan only needs one formula since it repeats every 180°, as shown by the diagonal symmetry in the diagram).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('solution angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('repeating period (n ∈ ℤ)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General solution formulae</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">sin θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = reference angle + 360°n')} &nbsp; <strong>or</strong> &nbsp; ${or('θ = (180° − reference angle) + 360°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">cos θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = ±reference angle + 360°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">tan θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = reference angle + 180°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Find the general solution of sinθ = 0.5.',
          answer: `θ = ${or('30°')} + ${gr('360°n')} or θ = ${or('150°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `As shown in the diagram, sinθ = 0.5 at both ${or('30°')} and ${or('150°')} within one revolution.`,
            `Reference angle = ${or('30°')}.`,
            `<strong>General solution:</strong> θ = ${or('30°')} + ${gr('360°n')} or θ = ${or('150°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
        {
          question: 'Find the general solution of cosθ = −0.5.',
          answer: `θ = ${or('±120°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `Reference angle = cos⁻¹(0.5) = ${or('60°')}.`,
            `Since cosθ is negative, the solutions sit in Quadrants 2 and 3 of the circle.`,
            `General solution: θ = 180° − ${or('60°')} + ${gr('360°n')} or θ = 180° + ${or('60°')} + ${gr('360°n')}, written compactly as θ = ${or('±120°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
        {
          question: 'Lerato finds the general solution of tanθ = 1.',
          answer: `θ = ${or('45°')} + ${gr('180°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `Reference angle = tan⁻¹(1) = ${or('45°')}.`,
            `Since tan repeats every 180° (visible from the diagonal symmetry of the circle), the general solution is simply θ = ${or('45°')} + ${gr('180°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Write down the general solution of sinθ = √3/2.',
          answer: 'Reference angle: sin⁻¹(√3/2) = 60°\nsinθ is positive → solutions in Q1 and Q2.\nGeneral solution: θ = 60° + 360°n or θ = 120° + 360°n, n ∈ ℤ',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Find the general solution of each equation. Show all working.',
          answer: 'a) cosθ = √2/2\nReference angle: cos⁻¹(√2/2) = 45°\ncosθ is positive → Q1 and Q4.\nGeneral solution: θ = ±45° + 360°n, n ∈ ℤ\n\nb) tanθ = √3\nReference angle: tan⁻¹(√3) = 60°\nGeneral solution: θ = 60° + 180°n, n ∈ ℤ',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Find the general solution of 2sinθ + 1 = 0. Then list all solutions in the interval −360° ≤ θ ≤ 360°.',
          answer: 'Step 1: Isolate sinθ.\n2sinθ = −1 → sinθ = −1/2\n\nStep 2: Reference angle = sin⁻¹(1/2) = 30°.\nsinθ is negative → solutions in Q3 and Q4.\n\nStep 3: General solution.\nθ = (180° + 30°) + 360°n = 210° + 360°n, n ∈ ℤ\nor θ = (360° − 30°) + 360°n = 330° + 360°n, n ∈ ℤ\n\nStep 4: Solutions in [−360°, 360°].\nFrom 210° + 360°n: n = 0 → 210°; n = −1 → −150°.\nFrom 330° + 360°n: n = 0 → 330°; n = −1 → −30°.\nSolutions: −150°, −30°, 210°, 330°.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Solve for θ, giving the general solution: 2sin²θ − sinθ − 1 = 0.',
          answer: 'Let x = sinθ, so the equation becomes a quadratic: 2x² − x − 1 = 0.\n\nFactorise: (2x + 1)(x − 1) = 0\nSo x = −1/2 or x = 1, i.e. sinθ = −1/2 or sinθ = 1.\n\nCase 1: sinθ = −1/2\nReference angle = sin⁻¹(1/2) = 30°. sinθ is negative → Q3 and Q4.\nθ = 210° + 360°n or θ = 330° + 360°n, n ∈ ℤ\n\nCase 2: sinθ = 1\nθ = 90° + 360°n, n ∈ ℤ (only one family — the two usual cases coincide at the boundary of the sine graph)\n\nFull general solution: θ = 90° + 360°n or θ = 210° + 360°n or θ = 330° + 360°n, n ∈ ℤ ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A unit circle showing the two solutions of sinθ = 0.5 — points marked at 30° and 150°, joined by a horizontal reference line at y=0.5, with angle arcs from the positive x-axis to each point and both angles labelled in orange',

      diagramSvg:
        '<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="150" y="14" font-size="9.5" font-weight="700" fill="#16a34a" text-anchor="middle">each solution repeats every +360&#176;n</text><circle cx="130" cy="130" r="100" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="15" y1="130" x2="245" y2="130" stroke="#94a3b8" stroke-width="1.3"/><line x1="130" y1="24" x2="130" y2="245" stroke="#94a3b8" stroke-width="1.3"/><line x1="43.4" y1="80" x2="216.6" y2="80" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 158,130 A 28,28 0 0 0 154.25,116" fill="none" stroke="#ea580c" stroke-width="1.6"/><path d="M 172,130 A 42,42 0 0 0 93.63,109" fill="none" stroke="#ea580c" stroke-width="1.6" stroke-dasharray="3,2"/><circle cx="216.6" cy="80" r="4.5" fill="#ea580c"/><circle cx="43.4" cy="80" r="4.5" fill="#ea580c"/><circle cx="130" cy="130" r="2.5" fill="#0f1f3d"/><text x="134" y="145" font-size="10" fill="#374151">O</text><text x="224" y="75" font-size="12" font-weight="700" fill="#ea580c" text-anchor="start">30&#176;</text><text x="36" y="75" font-size="12" font-weight="700" fill="#ea580c" text-anchor="end">150&#176;</text><text x="250" y="84" font-size="10" font-weight="700" fill="#ea580c" text-anchor="start">y = 0.5</text><text x="124" y="84" font-size="9" fill="#64748b" text-anchor="end">0.5</text><text x="240" y="126" font-size="10" fill="#64748b" text-anchor="end">0&#176;</text><text x="134" y="30" font-size="10" fill="#64748b" text-anchor="start">90&#176;</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step how to find the general solution of sinθ = k, cosθ = k, and tanθ = k, including identifying the reference angle and writing the complete general solution with n ∈ ℤ" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — DERIVING THE SINE, COSINE AND AREA RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-sine-cosine-area-rules',
      title: 'Deriving the Sine, Cosine and Area Rules',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">Before you can confidently <strong>apply</strong> the Sine Rule, Cosine Rule and Area Rule, CAPS requires that you can also <strong>derive (prove)</strong> them. Every derivation below starts the same way — by drawing a <strong>height (altitude)</strong> from one vertex of the triangle to the opposite side, which splits the triangle into two right-angled triangles. Once we have right-angled triangles, we can use ordinary right-angled trigonometry (SOH-CAHTOA) and the Theorem of Pythagoras to build each rule from scratch. We use the usual labelling convention throughout: side a is opposite angle A, side b is opposite angle B, and side c is opposite angle C.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known sides/angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('derived expression (e.g. the height h)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final proven rule')}</span>` +
        `</div>` +

        // ── Derivation 1: Area Rule ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">1. Deriving the Area Rule — Area = ½ab sinC</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Start with the basic area formula</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In triangle ABC, drop a ${or('height (altitude) h')} from vertex A down to side BC (side ${bl('a')}), meeting it at point D. Since h is perpendicular to BC, the ordinary formula Area = ½ × base × height applies, using BC = ${bl('a')} as the base: Area = ½ × ${bl('a')} × ${or('h')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Express h using right-angled trigonometry</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Triangle ADC is right-angled at D, with hypotenuse AC = ${bl('b')} and angle C at vertex C. By SOH: sinC = opposite/hypotenuse = ${or('h')} / ${bl('b')}, so ${or('h = b sinC')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Substitute to complete the proof</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Substitute ${or('h = b sinC')} into Area = ½ × ${bl('a')} × ${or('h')}: Area = ½ × ${bl('a')} × ${or('b sinC')} = ${gr('½ab sinC')}. By dropping the height from a different vertex instead, the exact same reasoning gives Area = ${gr('½bc sinA')} = ${gr('½ac sinB')} — all three are equal, so use whichever matches the sides/angle you know.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Derivation 2: Sine Rule ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">2. Deriving the Sine Rule — a/sinA = b/sinB = c/sinC</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Write the same height two different ways</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Using the same diagram as above — height ${or('h')} dropped from A onto BC, foot at D — look at <strong>both</strong> right-angled triangles it creates. From triangle ADC (hypotenuse ${bl('b')}, angle C): ${or('h = b sinC')}. From triangle ADB (hypotenuse ${bl('c')}, angle B): ${or('h = c sinB')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Set the two expressions for h equal</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Since both expressions equal the same height: ${or('b sinC = c sinB')}. Divide both sides by (${or('sinB')} · ${or('sinC')}): ${or('b / sinB')} = ${or('c / sinC')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Extend the pattern to all three sides</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">We have shown ${gr('b/sinB = c/sinC')}. Dropping a height from a different vertex (e.g. from B onto AC) links a and c in exactly the same way, giving ${gr('a/sinA = c/sinC')}. Combining both results proves the full Sine Rule: ${gr('a/sinA = b/sinB = c/sinC')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Derivation 3: Cosine Rule ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">3. Deriving the Cosine Rule — a² = b² + c² − 2bc cosA</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Drop a height and label the split base</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In triangle ABC, drop a ${or('height h')} from vertex B onto side AC (side ${bl('b')}), meeting it at D. This splits side ${bl('b')} into two segments: AD and DC. In right triangle ABD (hypotenuse AB = ${bl('c')}, angle A at vertex A): cosA = adjacent/hypotenuse = AD/${bl('c')}, so ${or('AD = c cosA')}. It follows that ${or('DC = b − c cosA')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apply Pythagoras to both right triangles</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Triangle ABD is right-angled at D: ${or('AD² + h² = c²')}, so ${or('h² = c² − (c cosA)²')}.<br>Triangle BDC is right-angled at D, with hypotenuse BC = ${bl('a')}: ${or('DC² + h² = a²')}, so ${or('h² = a² − (b − c cosA)²')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Set the two expressions for h² equal and simplify</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Both right triangles share the same height, so: ${or('c² − (c cosA)²')} = ${or('a² − (b − c cosA)²')}.<br>Expand the bracket on the right: ${or('a² − [b² − 2bc cosA + (c cosA)²]')} = ${or('a² − b² + 2bc cosA − (c cosA)²')}.<br>The (c cosA)² terms appear on both sides and cancel, leaving: ${or('c² = a² − b² + 2bc cosA')}.<br>Rearrange to isolate a²: ${gr('a² = b² + c² − 2bc cosA')} ✓</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Note on obtuse triangles</p>` +
        `<p style="margin:0;color:#1e3a8a;">All three derivations above assume an <strong>acute-angled</strong> triangle, so the foot of the height falls neatly inside the opposite side. If the triangle is obtuse, the same three rules still hold — the reasoning is identical, but it uses a <strong>supplementary angle</strong> (180° − angle) where the foot of the height falls outside the triangle. You do not need to reproduce the obtuse case for CAPS — just remember the rules themselves are unaffected.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In triangle ABC, a = 6 cm, b = 9 cm and the included angle C = 70°. Use the derivation method (not the Area Rule formula directly) to find the height h dropped from vertex A onto side BC, and hence find the area of the triangle.',
          answer: `h ≈ ${gr('8.46 cm')}; Area ≈ ${gr('25.37 cm²')}`,
          steps: [
            `Identify what is known: ${bl('a = 6 cm')}, ${bl('b = 9 cm')}, ${bl('C = 70°')} (two sides and the included angle).`,
            `Drop the height ${or('h')} from vertex A onto side BC, meeting it at D. Triangle ADC is right-angled at D, with hypotenuse AC = ${bl('b = 9 cm')} and angle C = ${bl('70°')} at vertex C.`,
            `By SOH: sinC = h / ${bl('b')}, so ${or('h = b sinC')} = ${bl('9')} × sin(${bl('70°')}) ≈ 9 × 0.9397 ≈ ${gr('8.46 cm')} ✓`,
            `Now apply Area = ½ × base × height, using BC = ${bl('a = 6 cm')} as the base: Area = ½ × ${bl('6')} × ${gr('8.46')} ≈ ${gr('25.37 cm²')} ✓`,
            `Notice this matches the Area Rule formula directly: ½ab sinC = ½ × 6 × 9 × sin70° ≈ 25.37 cm² — the derivation method and the formula agree.`,
          ],
        },
        {
          question: 'In triangle ABC, A = 40°, C = 75° and a = 10 cm. Use the sine rule derivation method to find the height h dropped from vertex B onto side AC, and hence find side c.',
          answer: `h ≈ ${gr('9.66 cm')}; c ≈ ${gr('15.03 cm')}`,
          steps: [
            `Identify what is known: ${bl('A = 40°')}, ${bl('C = 75°')}, ${bl('a = 10 cm')}. First find B = 180° − 40° − 75° = 65°.`,
            `Drop the height ${or('h')} from vertex B onto side AC, meeting it at D. Triangle BDC is right-angled at D, with hypotenuse BC = ${bl('a = 10 cm')} and angle C = ${bl('75°')} at vertex C.`,
            `By SOH: sinC = h / ${bl('a')}, so ${or('h = a sinC')} = ${bl('10')} × sin(${bl('75°')}) ≈ 10 × 0.9659 ≈ ${gr('9.66 cm')} ✓`,
            `Now look at the other right triangle, ABD, right-angled at D with hypotenuse AB = ${gr('c')} and angle A = ${bl('40°')} at vertex A: sinA = h / c, so ${or('h = c sinA')}.`,
            `Set the two expressions for h equal: ${bl('a sinC')} = ${gr('c sinA')}, so c = (${bl('a')} × sin${bl('C')}) / sin${bl('A')} = (${bl('10')} × sin${bl('75°')}) / sin${bl('40°')} ≈ 9.659 / 0.6428 ≈ ${gr('15.03 cm')} ✓`,
            `This is exactly the Sine Rule in action: a/sinA = c/sinC.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In triangle ABC, a height h is dropped from vertex A onto side BC, meeting it at D. Triangle ADC is right-angled at D, with AC = 12 cm and angle C = 35°. Use right-angled trigonometry to find h.',
          answer: 'h = AC × sinC = 12 × sin35° ≈ 12 × 0.5736 ≈ 6.88 cm',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Starting from Area = ½ × base × height, derive the formula Area = ½bc sinA for triangle ABC (dropping the height from vertex C onto side AB). Show every step.',
          answer: 'Step 1: Drop height h from C onto AB (side c), foot at D. Area = ½ × base × height = ½ × c × h.\nStep 2: Triangle ADC is right-angled at D with hypotenuse AC = b and angle A at vertex A. sinA = h/b, so h = b sinA.\nStep 3: Substitute: Area = ½ × c × b sinA = ½bc sinA ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Using the same diagram as the Cosine Rule derivation (height h from B onto AC, foot D, with AD = c cosA and DC = b − c cosA), a learner instead starts from h² = a² − (b − c cosA)² and h² = c² − (c cosA)². Show all algebraic steps to prove that a² = b² + c² − 2bc cosA.',
          answer: 'Set the two expressions for h² equal:\nc² − (c cosA)² = a² − (b − c cosA)²\n\nExpand the bracket on the right:\nc² − (c cosA)² = a² − [b² − 2bc cosA + (c cosA)²]\nc² − (c cosA)² = a² − b² + 2bc cosA − (c cosA)²\n\nThe (c cosA)² terms cancel from both sides:\nc² = a² − b² + 2bc cosA\n\nRearrange to isolate a²:\na² = b² + c² − 2bc cosA ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A single acute triangle ABC with a height h dropped from vertex A onto side BC, foot labelled D, splitting the triangle into two right-angled triangles — sides a, b, c and angles A, B, C labelled in blue, the height h and segment expressions (like c cosA) labelled in orange, and the final derived rules (Area = ½ab sinC, a/sinA = b/sinB, a² = b² + c² − 2bc cosA) shown in green',

      diagramSvg:
        '<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="130,30 30,150 190,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="130" y1="30" x2="130" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><rect x="124" y="144" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="130" y="163" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">D</text><text x="130" y="22" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><text x="20" y="158" font-size="13" font-weight="700" fill="#2563eb" text-anchor="end">B</text><text x="200" y="158" font-size="13" font-weight="700" fill="#2563eb" text-anchor="start">C</text><text x="110" y="168" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">a</text><text x="168" y="92" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">b</text><text x="72" y="92" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">c</text><text x="140" y="90" font-size="12" font-weight="700" fill="#ea580c">h</text><text x="110" y="188" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Area = &#189;ab sinC</text><text x="110" y="203" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">a/sinA = b/sinB = c/sinC</text><text x="110" y="218" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">a&#178; = b&#178; + c&#178; &#8722; 2bc cosA</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving the Area Rule, Sine Rule and Cosine Rule from first principles, starting with a single height dropped in a triangle and showing how right-angled trigonometry and the Theorem of Pythagoras build each rule step by step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — THE SINE, COSINE AND AREA RULES (APPLYING THEM)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sine-cosine-area-rules',
      title: 'The Sine, Cosine and Area Rules',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">These three rules extend trigonometry to <strong>any triangle</strong> — not just right-angled ones. The choice of rule depends entirely on which sides and angles you are given.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known sides/angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule used')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sine Rule</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">a / sinA = b / sinB = c / sinC</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Use when:</strong> you know a matched angle-side pair plus one other side or angle (AAS or SSA).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Cosine Rule</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">a² = b² + c² − 2bc · cosA</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Use when:</strong> you know two sides and the included angle (SAS) or all three sides (SSS).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Area Rule</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">Area = ½ · a · b · sinC</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Use when:</strong> you know two sides and the included angle.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Labelling convention</p>` +
        `<p style="margin:0;color:#374151;">Side a is opposite angle A, side b is opposite angle B, and side c is opposite angle C. Always pair each side with its <strong>opposite</strong> angle — mixing them up is the most common error.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Which rule to use?</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Sine Rule first</strong> — if you have a matched angle-side pair and one other element.<br><strong>Cosine Rule</strong> — for SAS (two sides + included angle) or SSS (three sides).<br><strong>Area Rule</strong> — whenever you need the area and have two sides + the included angle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In triangle ABC, A = 40°, B = 65°, and a = 10 cm. Find side b using the Sine Rule.',
          answer: `b ≈ ${gr('14.1 cm')}`,
          steps: [
            `Identify what is known: ${bl('A = 40°')}, ${bl('B = 65°')}, ${bl('a = 10 cm')}.`,
            `We have a matched pair (${bl('a')} opposite ${bl('A')}) and need ${gr('b')}, so apply the ${or('Sine Rule')}: ${or('a / sinA = b / sinB')}.`,
            `Substitute: ${bl('10')} / sin(${bl('40°')}) = ${gr('b')} / sin(${bl('65°')}).`,
            `Solve for ${gr('b')}: ${gr('b')} = ${bl('10')} × sin(${bl('65°')}) / sin(${bl('40°')}).`,
            `Calculate: ${gr('b')} = 10 × 0.9063 / 0.6428 ≈ ${gr('14.1 cm')} ✓`,
          ],
        },
        {
          question: 'In triangle ABC, b = 8 cm, c = 10 cm, and A = 50°. Find side a using the Cosine Rule.',
          answer: `a ≈ ${gr('7.82 cm')}`,
          steps: [
            `Identify what is known: ${bl('b = 8 cm')}, ${bl('c = 10 cm')}, ${bl('A = 50°')} (two sides and the included angle → SAS).`,
            `Apply the ${or('Cosine Rule')}: ${or('a² = b² + c² − 2bc · cosA')}.`,
            `Substitute: ${gr('a²')} = ${bl('8²')} + ${bl('10²')} − 2(${bl('8')})(${bl('10')}) × cos(${bl('50°')}).`,
            `Calculate: ${gr('a²')} = 64 + 100 − 160 × 0.6428 = 164 − 102.85 ≈ 61.15.`,
            `Take the square root: ${gr('a')} = √61.15 ≈ ${gr('7.82 cm')} ✓`,
          ],
        },
        {
          question: 'Find the area of triangle ABC where a = 6 cm, b = 9 cm, and the included angle C = 70°.',
          answer: `Area ≈ ${gr('25.38 cm²')}`,
          steps: [
            `Identify what is known: ${bl('a = 6 cm')}, ${bl('b = 9 cm')}, ${bl('C = 70°')} (two sides and the included angle).`,
            `Apply the ${or('Area Rule')}: ${or('Area = ½ · a · b · sinC')}.`,
            `Substitute: Area = ½ × ${bl('6')} × ${bl('9')} × sin(${bl('70°')}).`,
            `Calculate: Area = ½ × 54 × 0.9397 = 27 × 0.9397 ≈ ${gr('25.38 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In triangle PQR, P = 55°, Q = 72°, and side p = 12 cm. Use the Sine Rule to find side q. Round your answer to one decimal place.',
          answer: 'p/sinP = q/sinQ\n12/sin55° = q/sin72°\nq = 12 × sin72°/sin55° = 12 × 0.9511/0.8192 ≈ 13.9 cm ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Solve the following using the appropriate rule. Show all working.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) In △ABC, b = 5 cm, c = 7 cm, A = 60°. Find a² (exact value):',
              correctAnswer: '39',
              explanation: 'Cosine Rule: a² = b² + c² − 2bc·cosA\n= 25 + 49 − 2(5)(7)cos60°\n= 74 − 70 × 0.5\n= 74 − 35\n= 39 ✓',
            },
            {
              label: 'b) Area of △ABC with sides 4 cm, 7 cm and included angle 30° (exact value in cm²):',
              correctAnswer: '7',
              explanation: 'Area = ½ × 4 × 7 × sin30°\n= ½ × 28 × 0.5\n= 7 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In triangle ABC, AB = 9 cm, BC = 12 cm and AC = 15 cm.\n\na) Show that angle B = 90° using the Cosine Rule.\nb) Find the area of the triangle using the Area Rule with sides AB and BC and angle B.\nc) Confirm your answer using Area = ½ × base × height.',
          answer: 'a) cosB = (AB² + BC² − AC²) / (2 · AB · BC)\n= (81 + 144 − 225) / (2 × 9 × 12)\n= 0 / 216 = 0\nSo B = cos⁻¹(0) = 90° ✓\n\nb) Area = ½ × AB × BC × sinB\n= ½ × 9 × 12 × sin90°\n= ½ × 108 × 1\n= 54 cm²\n\nc) Area = ½ × base × height = ½ × 12 × 9 = 54 cm² ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining when and how to use the Sine Rule, Cosine Rule and Area Rule for non-right-angled triangles, with one fully worked example for each rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8 — SOLVING 2D PROBLEMS USING TRIGONOMETRIC MODELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-trig-models',
      title: 'Solving 2D Problems Using Trigonometric Models',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life <strong>two-dimensional problems</strong> by constructing and interpreting trigonometric models, often combining the sine rule, cosine rule, area rule and right-angled triangle trigonometry within a single multi-step problem, especially where a figure contains more than one triangle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given measurements')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('intermediate calculation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multi-step strategy</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Step 1 — Draw and label</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Sketch the figure, label all ${bl('given measurements')} in blue, and mark the unknown you need to find.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Step 2 — Identify sub-triangles</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Break the figure into separate triangles. Decide which rule (sine, cosine, area, or right-angled trig) applies to each sub-triangle and record ${or('intermediate results')} in orange.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Step 3 — Combine and conclude</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Chain the results from each sub-triangle to reach the ${gr('final answer')} in green. Round only at the last step.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key principle: never round intermediate answers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Store full calculator values for ${or('intermediate calculations')} and only round the ${gr('final answer')}. Early rounding in multi-step problems accumulates error and can change the answer significantly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two flagpoles are 30 m apart. The shorter pole is 10 m tall and the taller pole is 15 m tall. Ropes connect the top of each pole to the foot of the other. Find the height at which the ropes intersect above the ground.',
          answer: `Intersection height = ${gr('6 m')}`,
          steps: [
            `Draw the two flagpoles ${bl('30 m')} apart. The shorter pole has height ${bl('10 m')} and the taller pole has height ${bl('15 m')}. Label the foot of the shorter pole A, the foot of the taller pole B, and the intersection point X.`,
            `The rope from the top of the shorter pole (height ${bl('10 m')}) to B, and the rope from the top of the taller pole (height ${bl('15 m')}) to A, cross at X.`,
            `By the similar-triangle properties of the intersection point, the intersection height h satisfies: ${or('1/h = 1/10 + 1/15')}.`,
            `Compute the right-hand side: ${or('1/10 + 1/15')} = ${or('3/30 + 2/30')} = ${or('5/30')} = ${or('1/6')}.`,
            `Therefore ${or('1/h = 1/6')}, so h = ${or('6')}.  Equivalently: h = (${bl('10')} × ${bl('15')}) / (${bl('10')} + ${bl('15')}) = ${or('150')} / ${or('25')} = ${gr('6 m')} ✓`,
          ],
        },
        {
          question: 'A surveyor stands at point A and measures the angle of elevation to the top of a tower as 25°. She walks 50 m closer (now at point B) and measures the new angle of elevation as 40°. Find the height of the tower.',
          answer: `Tower height h ≈ ${gr('34.8 m')}`,
          steps: [
            `Let the tower height = h and the horizontal distance from B to the base of the tower = d. The surveyor starts at A, which is ${bl('50 m')} further from the base than B.`,
            `From B (angle of elevation ${bl('40°')}): ${or('tan 40° = h / d')}, so ${or('h = d · tan 40°')}.`,
            `From A (angle of elevation ${bl('25°')}): ${or('tan 25° = h / (d + 50)')}, so ${or('h = (d + 50) · tan 25°')}.`,
            `Set the two expressions for h equal: ${or('d · tan 40° = (d + 50) · tan 25°')}.`,
            `Expand and collect d terms: ${or('d · tan 40° − d · tan 25° = 50 · tan 25°')}, so ${or('d(tan 40° − tan 25°) = 50 · tan 25°')}.`,
            `Solve for d: ${or('d = 50 · tan 25° / (tan 40° − tan 25°)')} ≈ ${or('50 × 0.4663 / (0.8391 − 0.4663)')} ≈ ${or('23.315 / 0.3728')} ≈ ${or('62.5 m')}.`,
            `Substitute back: h = ${or('d · tan 40°')} ≈ ${or('62.5 × 0.8391')} ≈ ${gr('34.8 m')} ✓`,
          ],
        },
        {
          question: 'In a triangular plot of land, two sides are 45 m and 60 m with an included angle of 55°. Find the area of the plot and the length of the third side.',
          answer: `Area ≈ ${gr('1106.7 m²')}; third side ≈ ${gr('50.28 m')}`,
          steps: [
            `Label the triangle: the two known sides are ${bl('b = 45 m')} and ${bl('c = 60 m')}, and the included angle is ${bl('A = 55°')}.`,
            `Apply the ${or('Area Rule')}: ${or('Area = ½ · b · c · sin A')} = ½ × ${bl('45')} × ${bl('60')} × sin(${bl('55°')}).`,
            `Calculate: ${or('Area')} = ½ × 2700 × 0.8192 = ${or('1350 × 0.8192')} ≈ ${gr('1106.7 m²')} ✓`,
            `Apply the ${or('Cosine Rule')} to find side a: ${or('a² = b² + c² − 2bc · cos A')}.`,
            `Substitute: ${or('a²')} = ${bl('45²')} + ${bl('60²')} − 2 × ${bl('45')} × ${bl('60')} × cos(${bl('55°')}) = ${or('2025')} + ${or('3600')} − ${or('5400 × 0.5736')} ≈ ${or('5625 − 3097')} = ${or('2528')}.`,
            `Take the square root: a = √${or('2528')} ≈ ${gr('50.28 m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A ladder leans against a vertical wall. The foot of the ladder is 2.5 m from the base of the wall and the ladder makes an angle of 70° with the ground.\n\na) How high up the wall does the ladder reach?\nb) How long is the ladder?',
          answer: 'a) height = 2.5 × tan 70° ≈ 6.87 m\nb) length = 2.5 / cos 70° ≈ 7.31 m',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Two ships leave a harbour at the same time. Ship A sails on a bearing of 040° for 30 km and Ship B sails on a bearing of 115° for 45 km.\n\nFind the distance between the two ships.',
          answer: 'The angle between the two directions = 115° − 40° = 75°.\nCosine Rule: d² = 30² + 45² − 2(30)(45)cos75°\n= 900 + 2025 − 2700 × 0.2588\n= 2925 − 699\n= 2226\nd = √2226 ≈ 47.2 km ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Points A, B and C are on level ground. From A, the bearing of B is 060° and the bearing of C is 130°. AB = 80 m and AC = 110 m.\n\na) Find angle BAC.\nb) Find BC using the Cosine Rule.\nc) Find the area of triangle ABC.',
          answer: 'a) Angle BAC = 130° − 60° = 70°\n\nb) BC² = AB² + AC² − 2(AB)(AC)cos(BAC)\n= 80² + 110² − 2(80)(110)cos70°\n= 6400 + 12100 − 17600 × 0.3420\n= 18500 − 6019\n= 12481\nBC = √12481 ≈ 111.7 m\n\nc) Area = ½ × AB × AC × sin(BAC)\n= ½ × 80 × 110 × sin70°\n= ½ × 8800 × 0.9397\n≈ 4134.7 m²',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Three sub-diagrams side by side: (1) two flagpoles 30 m apart with crossing ropes and intersection height h labelled in blue, intermediate proportion in orange, answer 6 m in green; (2) surveyor scenario with tower, angles 25° and 40° in blue, distance d in orange, height h ≈ 34.8 m in green; (3) triangular plot with sides 45 m and 60 m and angle 55° in blue, area and third side calculations in orange, final answers in green',

      diagramSvg:
        '<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="210" y1="10" x2="210" y2="210" stroke="#e2e8f0" stroke-width="1.5"/><line x1="430" y1="10" x2="430" y2="210" stroke="#e2e8f0" stroke-width="1.5"/><text x="105" y="15" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Flagpoles</text><line x1="20" y1="180" x2="190" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="110" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="180" x2="170" y2="75" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="170" y2="180" stroke="#ea580c" stroke-width="1.8"/><line x1="170" y1="75" x2="40" y2="180" stroke="#ea580c" stroke-width="1.8"/><circle cx="92" cy="138" r="3" fill="#16a34a"/><line x1="92" y1="138" x2="92" y2="180" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="3,3"/><text x="98" y="165" font-size="10" font-weight="700" fill="#16a34a">h = 6m</text><text x="40" y="193" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">A</text><text x="170" y="193" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">B</text><text x="24" y="145" font-size="9" font-weight="700" fill="#2563eb" text-anchor="end">10m</text><text x="182" y="125" font-size="9" font-weight="700" fill="#2563eb" text-anchor="start">15m</text><text x="105" y="204" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">30m</text><text x="320" y="15" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Surveyor</text><line x1="230" y1="180" x2="400" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="380" y1="180" x2="380" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="300" y1="180" x2="380" y2="60" stroke="#ea580c" stroke-width="1.8"/><line x1="250" y1="180" x2="380" y2="60" stroke="#ea580c" stroke-width="1.8"/><text x="250" y="193" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">A</text><text x="300" y="193" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">B</text><text x="253" y="174" font-size="9" font-weight="700" fill="#2563eb">25&#176;</text><text x="303" y="174" font-size="9" font-weight="700" fill="#2563eb">40&#176;</text><text x="275" y="204" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">50m</text><text x="386" y="70" font-size="10" font-weight="700" fill="#16a34a">h &#8776; 34.8m</text><text x="550" y="15" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Triangular plot</text><polygon points="540,70 460,180 640,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="540" y="62" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">A</text><text x="450" y="190" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="end">B</text><text x="650" y="190" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="start">C</text><text x="490" y="118" font-size="9" font-weight="700" fill="#2563eb">45m</text><text x="580" y="118" font-size="9" font-weight="700" fill="#2563eb">60m</text><text x="540" y="90" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">55&#176;</text><text x="550" y="197" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">BC &#8776; 50.28m</text><text x="550" y="150" font-size="9" font-weight="700" fill="#16a34a" text-anchor="middle">Area &#8776; 1106.7m&#178;</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video walking through multi-step 2D trigonometry problems — the crossing ropes intersection height, the angle-of-elevation tower problem solved simultaneously, and the triangular plot using the Area and Cosine Rules" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — content only, no diagrams yet (Phase 1)
    // Block 1 (0-2):   Reduction formulae — simplify expression        — abstract, no diagram
    // Block 2 (3-5):   General solution of trig equations              — abstract, no diagram
    // Block 3 (6-8):   Sine Rule — missing side, then missing angle    — NEEDS DIAGRAM (7,8,9)
    // Block 4 (9-11):  Cosine Rule — missing side (SAS), missing angle (SSS) — NEEDS DIAGRAM (10,11,12)
    // Block 5 (12-14): Area Rule                                       — NEEDS DIAGRAM (13,14,15)
    // Block 6 (15-19): Trig graph features — period/amplitude/shift    — NEEDS DIAGRAM (16,17,18,19,20)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Reduction formulae (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Use a reduction formula to simplify sin(180° − x).', checkMode: 'auto', correctAnswer: 'sinx', correctAnswers: ['sinx', 'sin x', 'sin(x)'], answer: 'sin x', explanation: 'sin(180° − θ) = sinθ, so sin(180° − x) = sin x ✓' },
        { difficulty: 'Medium', question: 'Use reduction formulae to simplify cos(360° − x) · sin(180° + x).', checkMode: 'auto', correctAnswer: '-sinxcosx', correctAnswers: ['-sinxcosx', '−sinxcosx', '-sinx cosx', '−sin x cos x', '-cosxsinx'], answer: '−sin x cos x', explanation: 'cos(360° − x) = cos x. sin(180° + x) = −sin x.\ncos x × (−sin x) = −sin x cos x ✓' },
        { difficulty: 'Hard', question: 'Simplify fully, without a calculator: [sin(180° + x) · cos(−x)] / cos(360° − x).', answer: 'sin(180° + x) = −sin x. cos(−x) = cos x. cos(360° − x) = cos x.\nSo the expression = (−sin x · cos x) / cos x = −sin x (cancelling one factor of cos x) ✓', checkMode: 'self' },

        // Block 2 — General solution of trig equations (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Find the general solution of sinθ = 0.6, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=36.87°+360°n or θ=143.13°+360°n', correctAnswers: ['θ=36.87°+360°n or θ=143.13°+360°n', '36.87°+360°n or 143.13°+360°n', 'θ=36.87+360n or θ=143.13+360n'], answer: 'θ = 36.87° + 360°n or θ = 143.13° + 360°n, n ∈ ℤ', explanation: 'Reference angle = sin⁻¹(0.6) ≈ 36.87°. sinθ is positive → Q1 and Q2.\nθ = 36.87° + 360°n or θ = (180° − 36.87°) + 360°n = 143.13° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Medium', question: 'Find the general solution of cosθ = −0.4, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=±113.58°+360°n', correctAnswers: ['θ=±113.58°+360°n', '±113.58°+360°n', 'θ=113.58°+360°n or θ=246.42°+360°n'], answer: 'θ = ±113.58° + 360°n, n ∈ ℤ', explanation: 'Reference angle = cos⁻¹(0.4) ≈ 66.42°. cosθ is negative → Q2 and Q3.\nθ = 180° − 66.42° = 113.58° or θ = 180° + 66.42° = 246.42°, written compactly as θ = ±113.58° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Hard', question: 'Find the general solution of 2sinθ + 1.4 = 0. Then list all solutions in the interval 0° ≤ θ ≤ 360°, giving reference angle and final answers correct to 2 decimal places.', answer: 'Step 1: Isolate sinθ.\n2sinθ = −1.4 → sinθ = −0.7\n\nStep 2: Reference angle = sin⁻¹(0.7) ≈ 44.43°.\nsinθ is negative → solutions in Q3 and Q4.\n\nStep 3: General solution.\nθ = (180° + 44.43°) + 360°n = 224.43° + 360°n, n ∈ ℤ\nor θ = (360° − 44.43°) + 360°n = 315.57° + 360°n, n ∈ ℤ\n\nStep 4: Solutions in [0°, 360°]: 224.43° and 315.57°.', checkMode: 'self' },

        // Block 3 — Sine Rule: missing side, then missing angle (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, A = 50°, B = 65°, and a = 8 cm. Use the Sine Rule to find side b, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '9.46', correctAnswers: ['9.46', '9.46cm', '9.46 cm'], answer: '9.46 cm', explanation: 'Sine Rule: a/sinA = b/sinB\n8/sin50° = b/sin65°\nb = 8 × sin65°/sin50° = 8 × 0.9063/0.7660 ≈ 9.46 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 180.2,146.0 128.0,34.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.5\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"194.1\" y=\"153.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"130.9\" y=\"18.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"165.9\" y=\"84.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"69.7\" y=\"83.6\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"8.6\" y=\"157.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">50°</text><text x=\"204.6\" y=\"159.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">65°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle DEF, D = 42°, d = 10 cm, and e = 13 cm. Use the Sine Rule to find angle E, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '60.44', correctAnswers: ['60.44', '60.44°'], answer: '60.44°', explanation: 'Sine Rule: d/sinD = e/sinE\n10/sin42° = 13/sinE\nsinE = 13 × sin42°/10 = 13 × 0.6691/10 ≈ 0.8699\nE = sin⁻¹(0.8699) ≈ 60.44° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 158.4,34.0 183.1,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.2\" y=\"152.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"164.9\" y=\"19.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"196.5\" y=\"154.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"103.3\" y=\"157.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"182.8\" y=\"85.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"8.1\" y=\"156.6\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"169.8\" y=\"8.4\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle GHI, G = 38°, g = 11 cm, and h = 18 cm. Use the Sine Rule to find angle H, correct to 2 decimal places.', answer: 'Sine Rule: g/sinG = h/sinH\n11/sin38° = 18/sinH\nsinH = 18 × sin38°/11 = 18 × 0.6157/11 ≈ 1.0075\nSince sinH > 1, no such triangle exists — this configuration is not possible with the given measurements.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 106.2,51.4 206.0,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.1\" y=\"151.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"103.9\" y=\"35.6\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"221.1\" y=\"151.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"121.9\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"168.2\" y=\"94.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"7.9\" y=\"156.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">38°</text></svg>"},

        // Block 4 — Cosine Rule: missing side (SAS), missing angle (SSS) (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, b = 7 cm, c = 9 cm, and the included angle A = 55°. Use the Cosine Rule to find side a, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '7.6', correctAnswers: ['7.6', '7.60', '7.6cm', '7.60cm', '7.6 cm', '7.60 cm'], answer: '7.60 cm', explanation: 'Cosine Rule: a² = b² + c² − 2bc·cosA\n= 49 + 81 − 2(7)(9)cos55°\n= 130 − 126 × 0.5736\n= 130 − 72.27\n= 57.73\na = √57.73 ≈ 7.60 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 110.7,36.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.4\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"220.8\" y=\"152.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"109.3\" y=\"20.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"121.1\" y=\"159.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"60.3\" y=\"86.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"170.2\" y=\"86.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"8.4\" y=\"157.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle PQR, p = 8 cm, q = 10 cm, and r = 13 cm. Use the Cosine Rule to find the size of angle R (opposite the longest side), correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '91.79', correctAnswers: ['91.79', '91.79°'], answer: '91.79°', explanation: 'Cosine Rule: cosR = (p² + q² − r²) / (2pq)\n= (64 + 100 − 169) / (2 × 8 × 10)\n= −5 / 160\n= −0.03125\nR = cos⁻¹(−0.03125) ≈ 91.79° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 138.3,64.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.7\" y=\"150.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"221.2\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"141.8\" y=\"49.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text><text x=\"184.6\" y=\"101.6\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"73.8\" y=\"101.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"117.1\" y=\"158.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"144.4\" y=\"37.3\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle XYZ, x = 8 cm, y = 10 cm, and z = 13 cm. Find angle X and angle Y (each correct to 2 decimal places), and hence verify that all three angles of the triangle sum to 180°.', answer: 'cosX = (y² + z² − x²)/(2yz) = (100 + 169 − 64)/(2×10×13) = 205/260 ≈ 0.7885\nX = cos⁻¹(0.7885) ≈ 37.96°\n\ncosY = (x² + z² − y²)/(2xz) = (64 + 169 − 100)/(2×8×13) = 133/208 ≈ 0.6394\nY = cos⁻¹(0.6394) ≈ 50.25°\n\nZ (from previous question) ≈ 91.79°\nSum: 37.96° + 50.25° + 91.79° = 180.00° ✓', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 138.3,64.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.7\" y=\"150.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">X</text><text x=\"221.2\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Y</text><text x=\"141.8\" y=\"49.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Z</text><text x=\"184.6\" y=\"101.6\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"73.8\" y=\"101.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"117.1\" y=\"158.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"7.1\" y=\"153.9\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"232.5\" y=\"155.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 5 — Area Rule (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Find the area of triangle ABC where a = 9 cm, b = 12 cm, and the included angle C = 40°, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '34.71', correctAnswers: ['34.71', '34.71cm²', '34.71 cm²'], answer: '34.71 cm²', explanation: 'Area = ½ · a · b · sinC = ½ × 9 × 12 × sin40° = 54 × 0.6428 ≈ 34.71 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 132.8,63.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.7\" y=\"150.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.2\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"135.2\" y=\"47.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"118.0\" y=\"158.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"71.1\" y=\"100.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"7.2\" y=\"154.2\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40°</text></svg>"},
        { difficulty: 'Medium', question: 'Find the exact area of triangle ABC where a = 5 cm, b = 8 cm, and the included angle C = 30°.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm²', '10 cm²'], answer: '10 cm²', explanation: 'Area = ½ × 5 × 8 × sin30° = ½ × 40 × 0.5 = 10 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 127.1,92.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.3\" y=\"149.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.6\" y=\"149.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"129.2\" y=\"76.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"118.3\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"67.8\" y=\"116.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"6.6\" y=\"151.6\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30°</text></svg>"},
        { difficulty: 'Hard', question: 'Triangle ABC has area 45 cm², with a = 12 cm and b = 15 cm as the two given sides. Find the included angle C, correct to 2 decimal places.', answer: 'Area = ½ab sinC\n45 = ½ × 12 × 15 × sinC\n45 = 90 sinC\nsinC = 45/90 = 0.5\nC = sin⁻¹(0.5) = 30° (taking the acute solution)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 153.2,77.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.4\" y=\"149.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.3\" y=\"150.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"160.2\" y=\"62.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"114.4\" y=\"157.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"81.2\" y=\"107.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"6.8\" y=\"152.4\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Trig graph features: period/amplitude/shift (Easy/Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'The graph of y = 3sinθ has amplitude A and the graph of y = cos(4θ) has period P. State the values of A and P.', checkMode: 'auto', correctAnswer: 'A=3,P=90°', correctAnswers: ['A=3,P=90°', 'A=3 P=90°', 'amplitude=3, period=90°', '3 and 90°', '3, 90°'], answer: 'A = 3, P = 90°', explanation: 'For y = 3sinθ, the amplitude is the coefficient in front of sin, so A = 3.\nFor y = cos(4θ), k = 4, so period = 360°/4 = 90° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 35.5,76.0 37.0,74.1 38.5,72.1 40.1,70.2 41.6,68.3 43.1,66.4 44.6,64.5 46.1,62.7 47.6,60.8 49.1,59.1 50.7,57.3 52.2,55.6 53.7,54.0 55.2,52.3 56.7,50.8 58.2,49.3 59.7,47.8 61.3,46.5 62.8,45.1 64.3,43.9 65.8,42.7 67.3,41.6 68.8,40.5 70.3,39.6 71.9,38.7 73.4,37.9 74.9,37.1 76.4,36.5 77.9,35.9 79.4,35.4 80.9,35.1 82.5,34.7 84.0,34.5 85.5,34.4 87.0,34.4 88.5,34.4 90.0,34.5 91.5,34.7 93.1,35.1 94.6,35.4 96.1,35.9 97.6,36.5 99.1,37.1 100.6,37.9 102.1,38.7 103.7,39.6 105.2,40.5 106.7,41.6 108.2,42.7 109.7,43.9 111.2,45.1 112.7,46.5 114.3,47.8 115.8,49.3 117.3,50.8 118.8,52.3 120.3,54.0 121.8,55.6 123.3,57.3 124.9,59.1 126.4,60.8 127.9,62.7 129.4,64.5 130.9,66.4 132.4,68.3 133.9,70.2 135.5,72.1 137.0,74.1 138.5,76.0 140.0,78.0 141.5,80.0 143.0,81.9 144.5,83.9 146.1,85.8 147.6,87.7 149.1,89.6 150.6,91.5 152.1,93.3 153.6,95.2 155.1,96.9 156.7,98.7 158.2,100.4 159.7,102.0 161.2,103.7 162.7,105.2 164.2,106.7 165.7,108.2 167.3,109.5 168.8,110.9 170.3,112.1 171.8,113.3 173.3,114.4 174.8,115.5 176.3,116.4 177.9,117.3 179.4,118.1 180.9,118.9 182.4,119.5 183.9,120.1 185.4,120.6 186.9,120.9 188.5,121.3 190.0,121.5 191.5,121.6 193.0,121.6 194.5,121.6 196.0,121.5 197.5,121.3 199.1,120.9 200.6,120.6 202.1,120.1 203.6,119.5 205.1,118.9 206.6,118.1 208.1,117.3 209.7,116.4 211.2,115.5 212.7,114.4 214.2,113.3 215.7,112.1 217.2,110.9 218.7,109.5 220.3,108.2 221.8,106.7 223.3,105.2 224.8,103.7 226.3,102.0 227.8,100.4 229.3,98.7 230.9,96.9 232.4,95.2 233.9,93.3 235.4,91.5 236.9,89.6 238.4,87.7 239.9,85.8 241.5,83.9 243.0,81.9 244.5,80.0 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"87.0\" y1=\"34.4\" x2=\"87.0\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"105.0\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=3</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"246.0\" y1=\"96.0\" x2=\"246.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"246.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"140.0\" y=\"107.0\" font-size=\"10.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 360&#176;</text></svg>"},
        { difficulty: 'Easy', question: 'State the period of y = sin(θ/3).', checkMode: 'auto', correctAnswer: '1080°', correctAnswers: ['1080°', '1080'], answer: '1080°', explanation: 'k = 1/3. Period = 360° ÷ (1/3) = 1080° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">540°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">810°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">1080°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 35.5,76.0 37.0,74.1 38.5,72.1 40.1,70.2 41.6,68.3 43.1,66.4 44.6,64.5 46.1,62.7 47.6,60.8 49.1,59.1 50.7,57.3 52.2,55.6 53.7,54.0 55.2,52.3 56.7,50.8 58.2,49.3 59.7,47.8 61.3,46.5 62.8,45.1 64.3,43.9 65.8,42.7 67.3,41.6 68.8,40.5 70.3,39.6 71.9,38.7 73.4,37.9 74.9,37.1 76.4,36.5 77.9,35.9 79.4,35.4 80.9,35.1 82.5,34.7 84.0,34.5 85.5,34.4 87.0,34.4 88.5,34.4 90.0,34.5 91.5,34.7 93.1,35.1 94.6,35.4 96.1,35.9 97.6,36.5 99.1,37.1 100.6,37.9 102.1,38.7 103.7,39.6 105.2,40.5 106.7,41.6 108.2,42.7 109.7,43.9 111.2,45.1 112.7,46.5 114.3,47.8 115.8,49.3 117.3,50.8 118.8,52.3 120.3,54.0 121.8,55.6 123.3,57.3 124.9,59.1 126.4,60.8 127.9,62.7 129.4,64.5 130.9,66.4 132.4,68.3 133.9,70.2 135.5,72.1 137.0,74.1 138.5,76.0 140.0,78.0 141.5,80.0 143.0,81.9 144.5,83.9 146.1,85.8 147.6,87.7 149.1,89.6 150.6,91.5 152.1,93.3 153.6,95.2 155.1,96.9 156.7,98.7 158.2,100.4 159.7,102.0 161.2,103.7 162.7,105.2 164.2,106.7 165.7,108.2 167.3,109.5 168.8,110.9 170.3,112.1 171.8,113.3 173.3,114.4 174.8,115.5 176.3,116.4 177.9,117.3 179.4,118.1 180.9,118.9 182.4,119.5 183.9,120.1 185.4,120.6 186.9,120.9 188.5,121.3 190.0,121.5 191.5,121.6 193.0,121.6 194.5,121.6 196.0,121.5 197.5,121.3 199.1,120.9 200.6,120.6 202.1,120.1 203.6,119.5 205.1,118.9 206.6,118.1 208.1,117.3 209.7,116.4 211.2,115.5 212.7,114.4 214.2,113.3 215.7,112.1 217.2,110.9 218.7,109.5 220.3,108.2 221.8,106.7 223.3,105.2 224.8,103.7 226.3,102.0 227.8,100.4 229.3,98.7 230.9,96.9 232.4,95.2 233.9,93.3 235.4,91.5 236.9,89.6 238.4,87.7 239.9,85.8 241.5,83.9 243.0,81.9 244.5,80.0 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"246.0\" y1=\"96.0\" x2=\"246.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"246.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"140.0\" y=\"107.0\" font-size=\"10\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 1080&#176;</text></svg>"},
        { difficulty: 'Medium', question: 'A graph has equation y = 2cos(θ − 20°). State its amplitude, and describe the horizontal shift compared to y = cosθ.', checkMode: 'auto', correctAnswer: 'amplitude=2, shift 20° right', correctAnswers: ['amplitude=2, shift 20° right', 'amplitude 2, 20° to the right', '2, 20° right', 'A=2, 20° right'], answer: 'Amplitude = 2, shifted 20° to the right', explanation: 'The coefficient 2 in front of cos gives amplitude = 2.\nSince the angle is written as (θ − 20°), the graph shifts 20° to the right compared to y = cosθ ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,56.2 35.5,56.2 37.0,56.3 38.5,56.4 40.1,56.5 41.6,56.7 43.1,57.0 44.6,57.2 46.1,57.6 47.6,57.9 49.1,58.3 50.7,58.8 52.2,59.3 53.7,59.8 55.2,60.3 56.7,60.9 58.2,61.6 59.7,62.2 61.3,62.9 62.8,63.6 64.3,64.4 65.8,65.2 67.3,66.0 68.8,66.8 70.3,67.7 71.9,68.5 73.4,69.4 74.9,70.3 76.4,71.3 77.9,72.2 79.4,73.1 80.9,74.1 82.5,75.1 84.0,76.0 85.5,77.0 87.0,78.0 88.5,79.0 90.0,80.0 91.5,80.9 93.1,81.9 94.6,82.9 96.1,83.8 97.6,84.7 99.1,85.7 100.6,86.6 102.1,87.5 103.7,88.3 105.2,89.2 106.7,90.0 108.2,90.8 109.7,91.6 111.2,92.4 112.7,93.1 114.3,93.8 115.8,94.4 117.3,95.1 118.8,95.7 120.3,96.2 121.8,96.7 123.3,97.2 124.9,97.7 126.4,98.1 127.9,98.4 129.4,98.8 130.9,99.0 132.4,99.3 133.9,99.5 135.5,99.6 137.0,99.7 138.5,99.8 140.0,99.8 141.5,99.8 143.0,99.7 144.5,99.6 146.1,99.5 147.6,99.3 149.1,99.0 150.6,98.8 152.1,98.4 153.6,98.1 155.1,97.7 156.7,97.2 158.2,96.7 159.7,96.2 161.2,95.7 162.7,95.1 164.2,94.4 165.7,93.8 167.3,93.1 168.8,92.4 170.3,91.6 171.8,90.8 173.3,90.0 174.8,89.2 176.3,88.3 177.9,87.5 179.4,86.6 180.9,85.7 182.4,84.7 183.9,83.8 185.4,82.9 186.9,81.9 188.5,80.9 190.0,80.0 191.5,79.0 193.0,78.0 194.5,77.0 196.0,76.0 197.5,75.1 199.1,74.1 200.6,73.1 202.1,72.2 203.6,71.3 205.1,70.3 206.6,69.4 208.1,68.5 209.7,67.7 211.2,66.8 212.7,66.0 214.2,65.2 215.7,64.4 217.2,63.6 218.7,62.9 220.3,62.2 221.8,61.6 223.3,60.9 224.8,60.3 226.3,59.8 227.8,59.3 229.3,58.8 230.9,58.3 232.4,57.9 233.9,57.6 235.4,57.2 236.9,57.0 238.4,56.7 239.9,56.5 241.5,56.4 243.0,56.3 244.5,56.2 246.0,56.2\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,37.0 35.5,36.4 37.0,35.8 38.5,35.4 40.1,35.0 41.6,34.7 43.1,34.5 44.6,34.4 46.1,34.4 47.6,34.4 49.1,34.6 50.7,34.8 52.2,35.1 53.7,35.5 55.2,36.0 56.7,36.6 58.2,37.3 59.7,38.0 61.3,38.9 62.8,39.8 64.3,40.8 65.8,41.8 67.3,42.9 68.8,44.1 70.3,45.4 71.9,46.8 73.4,48.2 74.9,49.6 76.4,51.1 77.9,52.7 79.4,54.3 80.9,56.0 82.5,57.7 84.0,59.5 85.5,61.2 87.0,63.1 88.5,64.9 90.0,66.8 91.5,68.7 93.1,70.6 94.6,72.6 96.1,74.5 97.6,76.5 99.1,78.4 100.6,80.4 102.1,82.3 103.7,84.3 105.2,86.2 106.7,88.1 108.2,90.0 109.7,91.9 111.2,93.7 112.7,95.6 114.3,97.3 115.8,99.1 117.3,100.8 118.8,102.4 120.3,104.0 121.8,105.6 123.3,107.0 124.9,108.5 126.4,109.8 127.9,111.2 129.4,112.4 130.9,113.6 132.4,114.7 133.9,115.7 135.5,116.6 137.0,117.5 138.5,118.3 140.0,119.0 141.5,119.6 143.0,120.2 144.5,120.6 146.1,121.0 147.6,121.3 149.1,121.5 150.6,121.6 152.1,121.6 153.6,121.6 155.1,121.4 156.7,121.2 158.2,120.9 159.7,120.5 161.2,120.0 162.7,119.4 164.2,118.7 165.7,118.0 167.3,117.1 168.8,116.2 170.3,115.2 171.8,114.2 173.3,113.1 174.8,111.9 176.3,110.6 177.9,109.2 179.4,107.8 180.9,106.4 182.4,104.9 183.9,103.3 185.4,101.7 186.9,100.0 188.5,98.3 190.0,96.5 191.5,94.8 193.0,92.9 194.5,91.1 196.0,89.2 197.5,87.3 199.1,85.4 200.6,83.4 202.1,81.5 203.6,79.5 205.1,77.6 206.6,75.6 208.1,73.7 209.7,71.7 211.2,69.8 212.7,67.9 214.2,66.0 215.7,64.1 217.2,62.3 218.7,60.4 220.3,58.7 221.8,56.9 223.3,55.2 224.8,53.6 226.3,52.0 227.8,50.4 229.3,49.0 230.9,47.5 232.4,46.2 233.9,44.8 235.4,43.6 236.9,42.4 238.4,41.3 239.9,40.3 241.5,39.4 243.0,38.5 244.5,37.7 246.0,37.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"190\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"190\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">amplitude=2, shift 20&#176; right</text></svg>"},
        { difficulty: 'Hard', question: 'The graph of y = a·sin(kθ) has amplitude 4 and completes exactly 3 full cycles between 0° and 360°. Find the values of a (a > 0) and k.', answer: 'Amplitude = 4, so a = 4.\nCompleting 3 full cycles in 360° means the period = 360°/3 = 120°.\nPeriod = 360°/k, so 120° = 360°/k, which gives k = 3.\nTherefore a = 4 and k = 3, i.e. y = 4sin(3θ).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 34.6,75.7 35.2,73.4 35.8,71.2 36.4,68.9 36.9,66.7 37.5,64.5 38.1,62.4 38.7,60.2 39.3,58.2 39.9,56.2 40.5,54.2 41.1,52.3 41.7,50.5 42.2,48.8 42.8,47.1 43.4,45.6 44.0,44.1 44.6,42.7 45.2,41.4 45.8,40.2 46.4,39.1 47.0,38.1 47.5,37.3 48.1,36.5 48.7,35.8 49.3,35.3 49.9,34.9 50.5,34.6 51.1,34.4 51.7,34.4 52.3,34.4 52.8,34.6 53.4,34.9 54.0,35.3 54.6,35.8 55.2,36.5 55.8,37.3 56.4,38.1 57.0,39.1 57.6,40.2 58.1,41.4 58.7,42.7 59.3,44.1 59.9,45.6 60.5,47.1 61.1,48.8 61.7,50.5 62.3,52.3 62.9,54.2 63.4,56.2 64.0,58.2 64.6,60.2 65.2,62.4 65.8,64.5 66.4,66.7 67.0,68.9 67.6,71.2 68.2,73.4 68.7,75.7 69.3,78.0 69.9,80.3 70.5,82.6 71.1,84.8 71.7,87.1 72.3,89.3 72.9,91.5 73.5,93.6 74.0,95.8 74.6,97.8 75.2,99.8 75.8,101.8 76.4,103.7 77.0,105.5 77.6,107.2 78.2,108.9 78.8,110.4 79.3,111.9 79.9,113.3 80.5,114.6 81.1,115.8 81.7,116.9 82.3,117.9 82.9,118.7 83.5,119.5 84.1,120.2 84.6,120.7 85.2,121.1 85.8,121.4 86.4,121.6 87.0,121.6 87.6,121.6 88.2,121.4 88.8,121.1 89.4,120.7 89.9,120.2 90.5,119.5 91.1,118.7 91.7,117.9 92.3,116.9 92.9,115.8 93.5,114.6 94.1,113.3 94.7,111.9 95.2,110.4 95.8,108.9 96.4,107.2 97.0,105.5 97.6,103.7 98.2,101.8 98.8,99.8 99.4,97.8 100.0,95.8 100.5,93.6 101.1,91.5 101.7,89.3 102.3,87.1 102.9,84.8 103.5,82.6 104.1,80.3 104.7,78.0 105.3,75.7 105.8,73.4 106.4,71.2 107.0,68.9 107.6,66.7 108.2,64.5 108.8,62.4 109.4,60.2 110.0,58.2 110.6,56.2 111.1,54.2 111.7,52.3 112.3,50.5 112.9,48.8 113.5,47.1 114.1,45.6 114.7,44.1 115.3,42.7 115.9,41.4 116.4,40.2 117.0,39.1 117.6,38.1 118.2,37.3 118.8,36.5 119.4,35.8 120.0,35.3 120.6,34.9 121.2,34.6 121.7,34.4 122.3,34.4 122.9,34.4 123.5,34.6 124.1,34.9 124.7,35.3 125.3,35.8 125.9,36.5 126.5,37.3 127.0,38.1 127.6,39.1 128.2,40.2 128.8,41.4 129.4,42.7 130.0,44.1 130.6,45.6 131.2,47.1 131.8,48.8 132.3,50.5 132.9,52.3 133.5,54.2 134.1,56.2 134.7,58.2 135.3,60.2 135.9,62.4 136.5,64.5 137.1,66.7 137.6,68.9 138.2,71.2 138.8,73.4 139.4,75.7 140.0,78.0 140.6,80.3 141.2,82.6 141.8,84.8 142.4,87.1 142.9,89.3 143.5,91.5 144.1,93.6 144.7,95.8 145.3,97.8 145.9,99.8 146.5,101.8 147.1,103.7 147.7,105.5 148.2,107.2 148.8,108.9 149.4,110.4 150.0,111.9 150.6,113.3 151.2,114.6 151.8,115.8 152.4,116.9 153.0,117.9 153.5,118.7 154.1,119.5 154.7,120.2 155.3,120.7 155.9,121.1 156.5,121.4 157.1,121.6 157.7,121.6 158.3,121.6 158.8,121.4 159.4,121.1 160.0,120.7 160.6,120.2 161.2,119.5 161.8,118.7 162.4,117.9 163.0,116.9 163.6,115.8 164.1,114.6 164.7,113.3 165.3,111.9 165.9,110.4 166.5,108.9 167.1,107.2 167.7,105.5 168.3,103.7 168.9,101.8 169.4,99.8 170.0,97.8 170.6,95.8 171.2,93.6 171.8,91.5 172.4,89.3 173.0,87.1 173.6,84.8 174.2,82.6 174.7,80.3 175.3,78.0 175.9,75.7 176.5,73.4 177.1,71.2 177.7,68.9 178.3,66.7 178.9,64.5 179.5,62.4 180.0,60.2 180.6,58.2 181.2,56.2 181.8,54.2 182.4,52.3 183.0,50.5 183.6,48.8 184.2,47.1 184.8,45.6 185.3,44.1 185.9,42.7 186.5,41.4 187.1,40.2 187.7,39.1 188.3,38.1 188.9,37.3 189.5,36.5 190.1,35.8 190.6,35.3 191.2,34.9 191.8,34.6 192.4,34.4 193.0,34.4 193.6,34.4 194.2,34.6 194.8,34.9 195.4,35.3 195.9,35.8 196.5,36.5 197.1,37.3 197.7,38.1 198.3,39.1 198.9,40.2 199.5,41.4 200.1,42.7 200.7,44.1 201.2,45.6 201.8,47.1 202.4,48.8 203.0,50.5 203.6,52.3 204.2,54.2 204.8,56.2 205.4,58.2 206.0,60.2 206.5,62.4 207.1,64.5 207.7,66.7 208.3,68.9 208.9,71.2 209.5,73.4 210.1,75.7 210.7,78.0 211.3,80.3 211.8,82.6 212.4,84.8 213.0,87.1 213.6,89.3 214.2,91.5 214.8,93.6 215.4,95.8 216.0,97.8 216.6,99.8 217.1,101.8 217.7,103.7 218.3,105.5 218.9,107.2 219.5,108.9 220.1,110.4 220.7,111.9 221.3,113.3 221.9,114.6 222.4,115.8 223.0,116.9 223.6,117.9 224.2,118.7 224.8,119.5 225.4,120.2 226.0,120.7 226.6,121.1 227.2,121.4 227.7,121.6 228.3,121.6 228.9,121.6 229.5,121.4 230.1,121.1 230.7,120.7 231.3,120.2 231.9,119.5 232.5,118.7 233.0,117.9 233.6,116.9 234.2,115.8 234.8,114.6 235.4,113.3 236.0,111.9 236.6,110.4 237.2,108.9 237.8,107.2 238.3,105.5 238.9,103.7 239.5,101.8 240.1,99.8 240.7,97.8 241.3,95.8 241.9,93.6 242.5,91.5 243.1,89.3 243.6,87.1 244.2,84.8 244.8,82.6 245.4,80.3 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"51.7\" y1=\"34.4\" x2=\"51.7\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"71.7\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=4</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"104.7\" y1=\"96.0\" x2=\"104.7\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"104.7\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"69.3\" y=\"107.0\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1 cycle, P=120&#176;</text><text x=\"130.0\" y=\"24.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">3 full cycles shown over 0&#176;-360&#176;</text></svg>"},
        { difficulty: 'Hard', question: 'A trigonometric graph has equation y = sin(kθ − p). Its period is 72° and it is the same as y = sin(kθ) shifted 10° to the right. Find the values of k and p, and write down the full equation of the graph.', answer: 'Period = 360°/k = 72°\nk = 360°/72° = 5\n\nA shift of 10° to the right means we replace θ with (θ − 10°) inside y = sin(kθ):\ny = sin(5(θ − 10°)) = sin(5θ − 50°)\nComparing to y = sin(kθ − p): p = 50°\n\nFull equation: y = sin(5θ − 50°)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"130.4\" y1=\"75.0\" x2=\"130.4\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"130.4\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">P</text><line x1=\"226.7\" y1=\"75.0\" x2=\"226.7\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"226.7\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">2P</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 34.7,76.1 35.4,74.1 36.1,72.2 36.8,70.3 37.5,68.4 38.2,66.5 38.9,64.7 39.7,62.9 40.4,61.1 41.1,59.3 41.8,57.6 42.5,56.0 43.2,54.3 43.9,52.8 44.6,51.2 45.3,49.8 46.0,48.4 46.7,47.0 47.4,45.8 48.1,44.6 48.8,43.4 49.5,42.4 50.3,41.4 51.0,40.5 51.7,39.7 52.4,38.9 53.1,38.3 53.8,37.7 54.5,37.2 55.2,36.8 55.9,36.5 56.6,36.2 57.3,36.1 58.0,36.0 58.7,36.1 59.4,36.2 60.1,36.4 60.9,36.7 61.6,37.1 62.3,37.6 63.0,38.1 63.7,38.8 64.4,39.5 65.1,40.3 65.8,41.2 66.5,42.2 67.2,43.2 67.9,44.4 68.6,45.6 69.3,46.8 70.0,48.1 70.7,49.5 71.5,51.0 72.2,52.5 72.9,54.0 73.6,55.7 74.3,57.3 75.0,59.0 75.7,60.8 76.4,62.6 77.1,64.4 77.8,66.2 78.5,68.1 79.2,70.0 79.9,71.9 80.6,73.8 81.3,75.7 82.1,77.6 82.8,79.6 83.5,81.5 84.2,83.4 84.9,85.3 85.6,87.2 86.3,89.1 87.0,91.0 87.7,92.8 88.4,94.6 89.1,96.3 89.8,98.1 90.5,99.7 91.2,101.4 91.9,103.0 92.7,104.5 93.4,106.0 94.1,107.4 94.8,108.7 95.5,110.0 96.2,111.2 96.9,112.4 97.6,113.4 98.3,114.4 99.0,115.4 99.7,116.2 100.4,117.0 101.1,117.6 101.8,118.2 102.5,118.7 103.3,119.2 104.0,119.5 104.7,119.7 105.4,119.9 106.1,120.0 106.8,119.9 107.5,119.8 108.2,119.6 108.9,119.4 109.6,119.0 110.3,118.5 111.0,118.0 111.7,117.3 112.4,116.6 113.1,115.8 113.9,114.9 114.6,114.0 115.3,113.0 116.0,111.9 116.7,110.7 117.4,109.4 118.1,108.1 118.8,106.7 119.5,105.3 120.2,103.8 120.9,102.2 121.6,100.6 122.3,99.0 123.0,97.3 123.7,95.6 124.5,93.8 125.2,92.0 125.9,90.1 126.6,88.3 127.3,86.4 128.0,84.5 128.7,82.6 129.4,80.6 130.1,78.7 130.8,76.8 131.5,74.8 132.2,72.9 132.9,71.0 133.6,69.1 134.3,67.2 135.1,65.4 135.8,63.5 136.5,61.7 137.2,60.0 137.9,58.2 138.6,56.6 139.3,54.9 140.0,53.3 140.7,51.8 141.4,50.3 142.1,48.9 142.8,47.5 143.5,46.2 144.2,45.0 144.9,43.8 145.7,42.8 146.4,41.7 147.1,40.8 147.8,40.0 148.5,39.2 149.2,38.5 149.9,37.9 150.6,37.3 151.3,36.9 152.0,36.6 152.7,36.3 153.4,36.1 154.1,36.0 154.8,36.0 155.5,36.1 156.3,36.3 157.0,36.6 157.7,36.9 158.4,37.4 159.1,37.9 159.8,38.5 160.5,39.2 161.2,40.0 161.9,40.9 162.6,41.8 163.3,42.8 164.0,43.9 164.7,45.1 165.4,46.3 166.1,47.6 166.9,49.0 167.6,50.4 168.3,51.9 169.0,53.5 169.7,55.1 170.4,56.7 171.1,58.4 171.8,60.1 172.5,61.9 173.2,63.7 173.9,65.5 174.6,67.4 175.3,69.3 176.0,71.2 176.7,73.1 177.5,75.0 178.2,76.9 178.9,78.9 179.6,80.8 180.3,82.7 181.0,84.7 181.7,86.6 182.4,88.4 183.1,90.3 183.8,92.1 184.5,93.9 185.2,95.7 185.9,97.4 186.6,99.1 187.3,100.8 188.1,102.4 188.8,103.9 189.5,105.4 190.2,106.9 190.9,108.2 191.6,109.5 192.3,110.8 193.0,112.0 193.7,113.1 194.4,114.1 195.1,115.0 195.8,115.9 196.5,116.7 197.2,117.4 197.9,118.0 198.7,118.6 199.4,119.0 200.1,119.4 200.8,119.7 201.5,119.8 202.2,120.0 202.9,120.0 203.6,119.9 204.3,119.7 205.0,119.5 205.7,119.1 206.4,118.7 207.1,118.2 207.8,117.6 208.5,116.9 209.3,116.1 210.0,115.3 210.7,114.3 211.4,113.3 212.1,112.3 212.8,111.1 213.5,109.9 214.2,108.6 214.9,107.2 215.6,105.8 216.3,104.3 217.0,102.8 217.7,101.2 218.4,99.6 219.1,97.9 219.9,96.2 220.6,94.4 221.3,92.6 222.0,90.8 222.7,88.9 223.4,87.1 224.1,85.2 224.8,83.3 225.5,81.3 226.2,79.4 226.9,77.5 227.6,75.5 228.3,73.6 229.0,71.7 229.7,69.8 230.5,67.9 231.2,66.0 231.9,64.2 232.6,62.4 233.3,60.6 234.0,58.9 234.7,57.2 235.4,55.5 236.1,53.9 236.8,52.3 237.5,50.8 238.2,49.4 238.9,48.0 239.6,46.7 240.3,45.4 241.1,44.3 241.8,43.1 242.5,42.1 243.2,41.1 243.9,40.3 244.6,39.4 245.3,38.7 246.0,38.1\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,110.2 34.7,108.9 35.4,107.5 36.1,106.1 36.8,104.7 37.5,103.1 38.2,101.6 38.9,99.9 39.7,98.3 40.4,96.6 41.1,94.8 41.8,93.0 42.5,91.2 43.2,89.3 43.9,87.5 44.6,85.6 45.3,83.7 46.0,81.7 46.7,79.8 47.4,77.9 48.1,75.9 48.8,74.0 49.5,72.1 50.3,70.2 51.0,68.3 51.7,66.4 52.4,64.6 53.1,62.8 53.8,61.0 54.5,59.2 55.2,57.5 55.9,55.9 56.6,54.2 57.3,52.7 58.0,51.2 58.7,49.7 59.4,48.3 60.1,47.0 60.9,45.7 61.6,44.5 62.3,43.4 63.0,42.3 63.7,41.3 64.4,40.4 65.1,39.6 65.8,38.9 66.5,38.2 67.2,37.6 67.9,37.2 68.6,36.8 69.3,36.4 70.0,36.2 70.7,36.1 71.5,36.0 72.2,36.1 72.9,36.2 73.6,36.4 74.3,36.7 75.0,37.1 75.7,37.6 76.4,38.2 77.1,38.8 77.8,39.6 78.5,40.4 79.2,41.3 79.9,42.3 80.6,43.3 81.3,44.4 82.1,45.6 82.8,46.9 83.5,48.2 84.2,49.6 84.9,51.1 85.6,52.6 86.3,54.1 87.0,55.8 87.7,57.4 88.4,59.1 89.1,60.9 89.8,62.7 90.5,64.5 91.2,66.3 91.9,68.2 92.7,70.1 93.4,72.0 94.1,73.9 94.8,75.8 95.5,77.8 96.2,79.7 96.9,81.6 97.6,83.6 98.3,85.5 99.0,87.4 99.7,89.2 100.4,91.1 101.1,92.9 101.8,94.7 102.5,96.5 103.3,98.2 104.0,99.8 104.7,101.5 105.4,103.0 106.1,104.6 106.8,106.0 107.5,107.4 108.2,108.8 108.9,110.1 109.6,111.3 110.3,112.4 111.0,113.5 111.7,114.5 112.4,115.4 113.1,116.2 113.9,117.0 114.6,117.7 115.3,118.3 116.0,118.8 116.7,119.2 117.4,119.5 118.1,119.8 118.8,119.9 119.5,120.0 120.2,119.9 120.9,119.8 121.6,119.6 122.3,119.3 123.0,119.0 123.7,118.5 124.5,117.9 125.2,117.3 125.9,116.6 126.6,115.8 127.3,114.9 128.0,113.9 128.7,112.9 129.4,111.8 130.1,110.6 130.8,109.3 131.5,108.0 132.2,106.6 132.9,105.2 133.6,103.7 134.3,102.1 135.1,100.5 135.8,98.9 136.5,97.2 137.2,95.4 137.9,93.7 138.6,91.9 139.3,90.0 140.0,88.2 140.7,86.3 141.4,84.4 142.1,82.4 142.8,80.5 143.5,78.6 144.2,76.7 144.9,74.7 145.7,72.8 146.4,70.9 147.1,69.0 147.8,67.1 148.5,65.3 149.2,63.4 149.9,61.6 150.6,59.9 151.3,58.1 152.0,56.5 152.7,54.8 153.4,53.2 154.1,51.7 154.8,50.2 155.5,48.8 156.3,47.4 157.0,46.2 157.7,44.9 158.4,43.8 159.1,42.7 159.8,41.7 160.5,40.8 161.2,39.9 161.9,39.1 162.6,38.4 163.3,37.8 164.0,37.3 164.7,36.9 165.4,36.5 166.1,36.3 166.9,36.1 167.6,36.0 168.3,36.0 169.0,36.1 169.7,36.3 170.4,36.6 171.1,37.0 171.8,37.4 172.5,38.0 173.2,38.6 173.9,39.3 174.6,40.1 175.3,40.9 176.0,41.9 176.7,42.9 177.5,44.0 178.2,45.2 178.9,46.4 179.6,47.7 180.3,49.1 181.0,50.5 181.7,52.0 182.4,53.6 183.1,55.2 183.8,56.8 184.5,58.5 185.2,60.2 185.9,62.0 186.6,63.8 187.3,65.6 188.1,67.5 188.8,69.4 189.5,71.3 190.2,73.2 190.9,75.1 191.6,77.1 192.3,79.0 193.0,80.9 193.7,82.9 194.4,84.8 195.1,86.7 195.8,88.6 196.5,90.4 197.2,92.2 197.9,94.0 198.7,95.8 199.4,97.5 200.1,99.2 200.8,100.9 201.5,102.5 202.2,104.0 202.9,105.5 203.6,106.9 204.3,108.3 205.0,109.6 205.7,110.9 206.4,112.0 207.1,113.1 207.8,114.1 208.5,115.1 209.3,115.9 210.0,116.7 210.7,117.4 211.4,118.1 212.1,118.6 212.8,119.0 213.5,119.4 214.2,119.7 214.9,119.9 215.6,120.0 216.3,120.0 217.0,119.9 217.7,119.7 218.4,119.4 219.1,119.1 219.9,118.7 220.6,118.1 221.3,117.5 222.0,116.8 222.7,116.1 223.4,115.2 224.1,114.3 224.8,113.3 225.5,112.2 226.2,111.0 226.9,109.8 227.6,108.5 228.3,107.2 229.0,105.7 229.7,104.3 230.5,102.7 231.2,101.1 231.9,99.5 232.6,97.8 233.3,96.1 234.0,94.3 234.7,92.5 235.4,90.7 236.1,88.8 236.8,87.0 237.5,85.1 238.2,83.1 238.9,81.2 239.6,79.3 240.3,77.4 241.1,75.4 241.8,73.5 242.5,71.6 243.2,69.7 243.9,67.8 244.6,65.9 245.3,64.1 246.0,62.3\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"188\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"188\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">shift = 10&#176; right</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reduction formulae, general solutions, the sine/cosine/area rules and trig graph features.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the sine rule, cosine rule or trig graphs, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reduction formulae and general solutions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Reduction formulae (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Use a reduction formula to simplify cos(360° − x).', checkMode: 'auto', correctAnswer: 'cosx', correctAnswers: ['cosx', 'cos x', 'cos(x)'], answer: 'cos x', explanation: 'cos(360° − θ) = cosθ, so cos(360° − x) = cos x ✓' },
        { difficulty: 'Medium', question: 'Use reduction formulae to simplify sin(180° − x) · cos(180° + x).', checkMode: 'auto', correctAnswer: '-sinxcosx', correctAnswers: ['-sinxcosx', '−sinxcosx', '-sinx cosx', '−sin x cos x', '-cosxsinx'], answer: '−sin x cos x', explanation: 'sin(180° − x) = sin x. cos(180° + x) = −cos x.\nsin x × (−cos x) = −sin x cos x ✓' },
        { difficulty: 'Hard', question: 'Simplify fully, without a calculator: [cos(−x) · sin(180° − x)] / sin(360° − x).', answer: 'cos(−x) = cos x. sin(180° − x) = sin x. sin(360° − x) = −sin x.\nSo the expression = (cos x · sin x) / (−sin x) = −cos x (cancelling one factor of sin x) ✓', checkMode: 'self' },

        // Block 2 — General solution of trig equations (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Find the general solution of sinθ = 0.35, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=20.49°+360°n or θ=159.51°+360°n', correctAnswers: ['θ=20.49°+360°n or θ=159.51°+360°n', '20.49°+360°n or 159.51°+360°n', 'θ=20.49+360n or θ=159.51+360n'], answer: 'θ = 20.49° + 360°n or θ = 159.51° + 360°n, n ∈ ℤ', explanation: 'Reference angle = sin⁻¹(0.35) ≈ 20.49°. sinθ is positive → Q1 and Q2.\nθ = 20.49° + 360°n or θ = (180° − 20.49°) + 360°n = 159.51° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Medium', question: 'Find the general solution of cosθ = −0.6, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=±126.87°+360°n', correctAnswers: ['θ=±126.87°+360°n', '±126.87°+360°n', 'θ=126.87°+360°n or θ=233.13°+360°n'], answer: 'θ = ±126.87° + 360°n, n ∈ ℤ', explanation: 'Reference angle = cos⁻¹(0.6) ≈ 53.13°. cosθ is negative → Q2 and Q3.\nθ = 180° − 53.13° = 126.87° or θ = 180° + 53.13° = 233.13°, written compactly as θ = ±126.87° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Hard', question: 'Find the general solution of 3tanθ − 4.33 = 0. Then list all solutions in the interval −180° ≤ θ ≤ 180°, giving reference angle and final answers correct to 2 decimal places.', answer: 'Step 1: Isolate tanθ.\n3tanθ = 4.33 → tanθ ≈ 1.4433\n\nStep 2: Reference angle = tan⁻¹(1.4433) ≈ 55.30°.\ntanθ is positive → solutions in Q1 and Q3.\n\nStep 3: General solution.\nθ = 55.30° + 180°n, n ∈ ℤ\n\nStep 4: Solutions in [−180°, 180°].\nn = 0 → 55.30°; n = −1 → −124.70°.\nSolutions: −124.70°, 55.30°.', checkMode: 'self' },

        // Block 3 — Sine Rule: missing side, then missing angle (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, A = 38°, B = 72°, and a = 11 cm. Use the Sine Rule to find side b, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '16.99', correctAnswers: ['16.99', '16.99cm', '16.99 cm'], answer: '16.99 cm', explanation: 'Sine Rule: a/sinA = b/sinB\n11/sin38° = b/sin72°\nb = 11 × sin72°/sin38° = 11 × 0.9511/0.6157 ≈ 16.99 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 171.2,38.8\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.9\" y=\"151.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"220.2\" y=\"153.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"178.1\" y=\"24.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"200.9\" y=\"88.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"91.1\" y=\"86.4\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"7.5\" y=\"155.2\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">38°</text><text x=\"230.9\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">72°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle DEF, D = 36°, d = 14 cm, and e = 18 cm. Use the Sine Rule to find angle E, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '49.09', correctAnswers: ['49.09', '49.09°'], answer: '49.09°', explanation: 'Sine Rule: d/sinD = e/sinE\n14/sin36° = 18/sinE\nsinE = 18 × sin36°/14 = 18 × 0.5878/14 ≈ 0.7557\nE = sin⁻¹(0.7557) ≈ 49.09° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 188.2,34.0 178.5,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.0\" y=\"151.6\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"197.6\" y=\"21.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"190.8\" y=\"156.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"98.6\" y=\"156.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"195.5\" y=\"85.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"7.8\" y=\"155.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">36°</text><text x=\"204.7\" y=\"11.4\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle GHI, G = 65°, g = 9 cm, and h = 15 cm. Use the Sine Rule to find angle H, correct to 2 decimal places.', answer: 'Sine Rule: g/sinG = h/sinH\n9/sin65° = 15/sinH\nsinH = 15 × sin65°/9 = 15 × 0.9063/9 ≈ 1.5105\nSince sinH > 1, no such triangle exists — this configuration is not possible with the given measurements.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 106.2,51.4 206.0,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.1\" y=\"151.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"103.9\" y=\"35.6\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"221.1\" y=\"151.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"121.9\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"168.2\" y=\"94.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"7.9\" y=\"156.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">65°</text></svg>"},

        // Block 4 — Cosine Rule: missing side (SAS), missing angle (SSS) (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, b = 10 cm, c = 14 cm, and the included angle A = 48°. Use the Cosine Rule to find side a, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '10.42', correctAnswers: ['10.42', '10.42cm', '10.42 cm'], answer: '10.42 cm', explanation: 'Cosine Rule: a² = b² + c² − 2bc·cosA\n= 100 + 196 − 2(10)(14)cos48°\n= 296 − 280 × 0.6691\n= 296 − 187.35\n= 108.65\na = √108.65 ≈ 10.42 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 116.2,54.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.9\" y=\"151.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"221.1\" y=\"151.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"115.5\" y=\"38.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"120.5\" y=\"159.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"62.8\" y=\"96.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"173.3\" y=\"96.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"7.6\" y=\"155.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle PQR, p = 6 cm, q = 9 cm, and r = 11 cm. Use the Cosine Rule to find the size of angle R (opposite the longest side), correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '92.12', correctAnswers: ['92.12', '92.12°'], answer: '92.12°', explanation: 'Cosine Rule: cosR = (p² + q² − r²) / (2pq)\n= (36 + 81 − 121) / (2 × 6 × 9)\n= −4 / 108\n= −0.0370\nR = cos⁻¹(−0.0370) ≈ 92.12° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 152.0,69.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.5\" y=\"150.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"221.2\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"158.2\" y=\"54.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text><text x=\"191.6\" y=\"104.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"80.7\" y=\"103.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"115.0\" y=\"158.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"162.8\" y=\"43.5\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle XYZ, x = 6 cm, y = 9 cm, and z = 11 cm. Find angle X and angle Y (each correct to 2 decimal places), and hence verify that all three angles of the triangle sum to 180°.', answer: 'cosX = (y² + z² − x²)/(2yz) = (81 + 121 − 36)/(2×9×11) = 166/198 ≈ 0.8384\nX = cos⁻¹(0.8384) ≈ 33.03°\n\ncosY = (x² + z² − y²)/(2xz) = (36 + 121 − 81)/(2×6×11) = 76/132 ≈ 0.5758\nY = cos⁻¹(0.5758) ≈ 54.85°\n\nZ (from previous question) ≈ 92.12°\nSum: 33.03° + 54.85° + 92.12° = 180.00° ✓', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 152.0,69.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.5\" y=\"150.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">X</text><text x=\"221.2\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Y</text><text x=\"158.2\" y=\"54.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Z</text><text x=\"191.6\" y=\"104.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"80.7\" y=\"103.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"115.0\" y=\"158.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"6.9\" y=\"153.2\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"232.5\" y=\"155.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 5 — Area Rule (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Find the area of triangle ABC where a = 10 cm, b = 15 cm, and the included angle C = 50°, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '57.45', correctAnswers: ['57.45', '57.45cm²', '57.45 cm²'], answer: '57.45 cm²', explanation: 'Area = ½ · a · b · sinC = ½ × 10 × 15 × sin50° = 75 × 0.7660 ≈ 57.45 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 107.7,58.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.9\" y=\"151.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.2\" y=\"150.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"105.5\" y=\"42.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"121.8\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"58.5\" y=\"98.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"7.6\" y=\"155.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">50°</text></svg>"},
        { difficulty: 'Medium', question: 'Find the exact area of triangle ABC where a = 6 cm, b = 10 cm, and the included angle C = 150°.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm²', '15 cm²'], answer: '15 cm²', explanation: 'Area = ½ × 6 × 10 × sin150° = ½ × 60 × 0.5 = 15 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"92.8,146.0 206.0,146.0 34.0,112.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"79.2\" y=\"154.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.9\" y=\"147.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"18.7\" y=\"107.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"161.9\" y=\"149.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"50.5\" y=\"127.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"69.1\" y=\"160.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">150°</text></svg>"},
        { difficulty: 'Hard', question: 'Triangle ABC has area 60 cm², with a = 15 cm and b = 16 cm as the two given sides. Find the included angle C, correct to 2 decimal places.', answer: 'Area = ½ab sinC\n60 = ½ × 15 × 16 × sinC\n60 = 120 sinC\nsinC = 60/120 = 0.5\nC = sin⁻¹(0.5) = 30° (taking the acute solution)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 173.6,65.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.5\" y=\"150.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"220.9\" y=\"151.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"182.5\" y=\"52.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"112.8\" y=\"156.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"91.7\" y=\"100.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"6.9\" y=\"153.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Trig graph features: period/amplitude/shift (Easy/Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'The graph of y = 5cosθ has amplitude A and the graph of y = sin(6θ) has period P. State the values of A and P.', checkMode: 'auto', correctAnswer: 'A=5,P=60°', correctAnswers: ['A=5,P=60°', 'A=5 P=60°', 'amplitude=5, period=60°', '5 and 60°', '5, 60°'], answer: 'A = 5, P = 60°', explanation: 'For y = 5cosθ, the amplitude is the coefficient in front of cos, so A = 5.\nFor y = sin(6θ), k = 6, so period = 360°/6 = 60° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,34.4 35.5,34.4 37.0,34.5 38.5,34.7 40.1,35.1 41.6,35.4 43.1,35.9 44.6,36.5 46.1,37.1 47.6,37.9 49.1,38.7 50.7,39.6 52.2,40.5 53.7,41.6 55.2,42.7 56.7,43.9 58.2,45.1 59.7,46.5 61.3,47.8 62.8,49.3 64.3,50.8 65.8,52.3 67.3,54.0 68.8,55.6 70.3,57.3 71.9,59.1 73.4,60.8 74.9,62.7 76.4,64.5 77.9,66.4 79.4,68.3 80.9,70.2 82.5,72.1 84.0,74.1 85.5,76.0 87.0,78.0 88.5,80.0 90.0,81.9 91.5,83.9 93.1,85.8 94.6,87.7 96.1,89.6 97.6,91.5 99.1,93.3 100.6,95.2 102.1,96.9 103.7,98.7 105.2,100.4 106.7,102.0 108.2,103.7 109.7,105.2 111.2,106.7 112.7,108.2 114.3,109.5 115.8,110.9 117.3,112.1 118.8,113.3 120.3,114.4 121.8,115.5 123.3,116.4 124.9,117.3 126.4,118.1 127.9,118.9 129.4,119.5 130.9,120.1 132.4,120.6 133.9,120.9 135.5,121.3 137.0,121.5 138.5,121.6 140.0,121.6 141.5,121.6 143.0,121.5 144.5,121.3 146.1,120.9 147.6,120.6 149.1,120.1 150.6,119.5 152.1,118.9 153.6,118.1 155.1,117.3 156.7,116.4 158.2,115.5 159.7,114.4 161.2,113.3 162.7,112.1 164.2,110.9 165.7,109.5 167.3,108.2 168.8,106.7 170.3,105.2 171.8,103.7 173.3,102.0 174.8,100.4 176.3,98.7 177.9,96.9 179.4,95.2 180.9,93.3 182.4,91.5 183.9,89.6 185.4,87.7 186.9,85.8 188.5,83.9 190.0,81.9 191.5,80.0 193.0,78.0 194.5,76.0 196.0,74.1 197.5,72.1 199.1,70.2 200.6,68.3 202.1,66.4 203.6,64.5 205.1,62.7 206.6,60.8 208.1,59.1 209.7,57.3 211.2,55.6 212.7,54.0 214.2,52.3 215.7,50.8 217.2,49.3 218.7,47.8 220.3,46.5 221.8,45.1 223.3,43.9 224.8,42.7 226.3,41.6 227.8,40.5 229.3,39.6 230.9,38.7 232.4,37.9 233.9,37.1 235.4,36.5 236.9,35.9 238.4,35.4 239.9,35.1 241.5,34.7 243.0,34.5 244.5,34.4 246.0,34.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"34.0\" y1=\"34.4\" x2=\"34.0\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"56.0\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=5</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"246.0\" y1=\"96.0\" x2=\"246.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"246.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"140.0\" y=\"107.0\" font-size=\"10.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 360&#176;</text></svg>"},
        { difficulty: 'Easy', question: 'State the period of y = cos(θ/4).', checkMode: 'auto', correctAnswer: '1440°', correctAnswers: ['1440°', '1440'], answer: '1440°', explanation: 'k = 1/4. Period = 360° ÷ (1/4) = 1440° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">720°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">1080°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">1440°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,34.4 35.5,34.4 37.0,34.5 38.5,34.7 40.1,35.1 41.6,35.4 43.1,35.9 44.6,36.5 46.1,37.1 47.6,37.9 49.1,38.7 50.7,39.6 52.2,40.5 53.7,41.6 55.2,42.7 56.7,43.9 58.2,45.1 59.7,46.5 61.3,47.8 62.8,49.3 64.3,50.8 65.8,52.3 67.3,54.0 68.8,55.6 70.3,57.3 71.9,59.1 73.4,60.8 74.9,62.7 76.4,64.5 77.9,66.4 79.4,68.3 80.9,70.2 82.5,72.1 84.0,74.1 85.5,76.0 87.0,78.0 88.5,80.0 90.0,81.9 91.5,83.9 93.1,85.8 94.6,87.7 96.1,89.6 97.6,91.5 99.1,93.3 100.6,95.2 102.1,96.9 103.7,98.7 105.2,100.4 106.7,102.0 108.2,103.7 109.7,105.2 111.2,106.7 112.7,108.2 114.3,109.5 115.8,110.9 117.3,112.1 118.8,113.3 120.3,114.4 121.8,115.5 123.3,116.4 124.9,117.3 126.4,118.1 127.9,118.9 129.4,119.5 130.9,120.1 132.4,120.6 133.9,120.9 135.5,121.3 137.0,121.5 138.5,121.6 140.0,121.6 141.5,121.6 143.0,121.5 144.5,121.3 146.1,120.9 147.6,120.6 149.1,120.1 150.6,119.5 152.1,118.9 153.6,118.1 155.1,117.3 156.7,116.4 158.2,115.5 159.7,114.4 161.2,113.3 162.7,112.1 164.2,110.9 165.7,109.5 167.3,108.2 168.8,106.7 170.3,105.2 171.8,103.7 173.3,102.0 174.8,100.4 176.3,98.7 177.9,96.9 179.4,95.2 180.9,93.3 182.4,91.5 183.9,89.6 185.4,87.7 186.9,85.8 188.5,83.9 190.0,81.9 191.5,80.0 193.0,78.0 194.5,76.0 196.0,74.1 197.5,72.1 199.1,70.2 200.6,68.3 202.1,66.4 203.6,64.5 205.1,62.7 206.6,60.8 208.1,59.1 209.7,57.3 211.2,55.6 212.7,54.0 214.2,52.3 215.7,50.8 217.2,49.3 218.7,47.8 220.3,46.5 221.8,45.1 223.3,43.9 224.8,42.7 226.3,41.6 227.8,40.5 229.3,39.6 230.9,38.7 232.4,37.9 233.9,37.1 235.4,36.5 236.9,35.9 238.4,35.4 239.9,35.1 241.5,34.7 243.0,34.5 244.5,34.4 246.0,34.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"246.0\" y1=\"96.0\" x2=\"246.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"246.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"140.0\" y=\"107.0\" font-size=\"10\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 1440&#176;</text></svg>"},
        { difficulty: 'Medium', question: 'A graph has equation y = 3sin(θ + 15°). State its amplitude, and describe the horizontal shift compared to y = sinθ.', checkMode: 'auto', correctAnswer: 'amplitude=3, shift 15° left', correctAnswers: ['amplitude=3, shift 15° left', 'amplitude 3, 15° to the left', '3, 15° left', 'A=3, 15° left'], answer: 'Amplitude = 3, shifted 15° to the left', explanation: 'The coefficient 3 in front of sin gives amplitude = 3.\nSince the angle is written as (θ + 15°), the graph shifts 15° to the left compared to y = sinθ ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 35.5,77.3 37.0,76.7 38.5,76.0 40.1,75.4 41.6,74.8 43.1,74.1 44.6,73.5 46.1,72.9 47.6,72.3 49.1,71.7 50.7,71.1 52.2,70.5 53.7,70.0 55.2,69.4 56.7,68.9 58.2,68.4 59.7,67.9 61.3,67.5 62.8,67.0 64.3,66.6 65.8,66.2 67.3,65.9 68.8,65.5 70.3,65.2 71.9,64.9 73.4,64.6 74.9,64.4 76.4,64.2 77.9,64.0 79.4,63.8 80.9,63.7 82.5,63.6 84.0,63.5 85.5,63.5 87.0,63.5 88.5,63.5 90.0,63.5 91.5,63.6 93.1,63.7 94.6,63.8 96.1,64.0 97.6,64.2 99.1,64.4 100.6,64.6 102.1,64.9 103.7,65.2 105.2,65.5 106.7,65.9 108.2,66.2 109.7,66.6 111.2,67.0 112.7,67.5 114.3,67.9 115.8,68.4 117.3,68.9 118.8,69.4 120.3,70.0 121.8,70.5 123.3,71.1 124.9,71.7 126.4,72.3 127.9,72.9 129.4,73.5 130.9,74.1 132.4,74.8 133.9,75.4 135.5,76.0 137.0,76.7 138.5,77.3 140.0,78.0 141.5,78.7 143.0,79.3 144.5,80.0 146.1,80.6 147.6,81.2 149.1,81.9 150.6,82.5 152.1,83.1 153.6,83.7 155.1,84.3 156.7,84.9 158.2,85.5 159.7,86.0 161.2,86.6 162.7,87.1 164.2,87.6 165.7,88.1 167.3,88.5 168.8,89.0 170.3,89.4 171.8,89.8 173.3,90.1 174.8,90.5 176.3,90.8 177.9,91.1 179.4,91.4 180.9,91.6 182.4,91.8 183.9,92.0 185.4,92.2 186.9,92.3 188.5,92.4 190.0,92.5 191.5,92.5 193.0,92.5 194.5,92.5 196.0,92.5 197.5,92.4 199.1,92.3 200.6,92.2 202.1,92.0 203.6,91.8 205.1,91.6 206.6,91.4 208.1,91.1 209.7,90.8 211.2,90.5 212.7,90.1 214.2,89.8 215.7,89.4 217.2,89.0 218.7,88.5 220.3,88.1 221.8,87.6 223.3,87.1 224.8,86.6 226.3,86.0 227.8,85.5 229.3,84.9 230.9,84.3 232.4,83.7 233.9,83.1 235.4,82.5 236.9,81.9 238.4,81.2 239.9,80.6 241.5,80.0 243.0,79.3 244.5,78.7 246.0,78.0\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,66.7 35.5,64.8 37.0,63.0 38.5,61.1 40.1,59.4 41.6,57.6 43.1,55.9 44.6,54.2 46.1,52.6 47.6,51.0 49.1,49.5 50.7,48.1 52.2,46.7 53.7,45.3 55.2,44.1 56.7,42.9 58.2,41.8 59.7,40.7 61.3,39.7 62.8,38.8 64.3,38.0 65.8,37.3 67.3,36.6 68.8,36.0 70.3,35.5 71.9,35.1 73.4,34.8 74.9,34.6 76.4,34.4 77.9,34.4 79.4,34.4 80.9,34.5 82.5,34.7 84.0,35.0 85.5,35.4 87.0,35.8 88.5,36.4 90.0,37.0 91.5,37.7 93.1,38.5 94.6,39.4 96.1,40.4 97.6,41.4 99.1,42.5 100.6,43.7 102.1,44.9 103.7,46.2 105.2,47.6 106.7,49.0 108.2,50.5 109.7,52.1 111.2,53.7 112.7,55.3 114.3,57.0 115.8,58.8 117.3,60.5 118.8,62.4 120.3,64.2 121.8,66.1 123.3,68.0 124.9,69.9 126.4,71.8 127.9,73.8 129.4,75.7 130.9,77.7 132.4,79.6 133.9,81.6 135.5,83.5 137.0,85.5 138.5,87.4 140.0,89.3 141.5,91.2 143.0,93.0 144.5,94.9 146.1,96.6 147.6,98.4 149.1,100.1 150.6,101.8 152.1,103.4 153.6,105.0 155.1,106.5 156.7,107.9 158.2,109.3 159.7,110.7 161.2,111.9 162.7,113.1 164.2,114.2 165.7,115.3 167.3,116.3 168.8,117.2 170.3,118.0 171.8,118.7 173.3,119.4 174.8,120.0 176.3,120.5 177.9,120.9 179.4,121.2 180.9,121.4 182.4,121.6 183.9,121.6 185.4,121.6 186.9,121.5 188.5,121.3 190.0,121.0 191.5,120.6 193.0,120.2 194.5,119.6 196.0,119.0 197.5,118.3 199.1,117.5 200.6,116.6 202.1,115.6 203.6,114.6 205.1,113.5 206.6,112.3 208.1,111.1 209.7,109.8 211.2,108.4 212.7,107.0 214.2,105.5 215.7,103.9 217.2,102.3 218.7,100.7 220.3,99.0 221.8,97.2 223.3,95.5 224.8,93.6 226.3,91.8 227.8,89.9 229.3,88.0 230.9,86.1 232.4,84.2 233.9,82.2 235.4,80.3 236.9,78.3 238.4,76.4 239.9,74.4 241.5,72.5 243.0,70.5 244.5,68.6 246.0,66.7\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"190\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"190\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">amplitude=3, shift 15&#176; left</text></svg>"},
        { difficulty: 'Hard', question: 'The graph of y = a·cos(kθ) has amplitude 6 and completes exactly 4 full cycles between 0° and 360°. Find the values of a (a > 0) and k.', answer: 'Amplitude = 6, so a = 6.\nCompleting 4 full cycles in 360° means the period = 360°/4 = 90°.\nPeriod = 360°/k, so 90° = 360°/k, which gives k = 4.\nTherefore a = 6 and k = 4, i.e. y = 6cos(4θ).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 34.6,75.0 35.2,71.9 35.8,68.9 36.4,66.0 36.9,63.1 37.5,60.2 38.1,57.5 38.7,54.9 39.3,52.3 39.9,49.9 40.5,47.7 41.1,45.6 41.7,43.6 42.2,41.8 42.8,40.2 43.4,38.8 44.0,37.5 44.6,36.5 45.2,35.6 45.8,35.0 46.4,34.6 47.0,34.4 47.5,34.4 48.1,34.6 48.7,35.0 49.3,35.6 49.9,36.5 50.5,37.5 51.1,38.8 51.7,40.2 52.3,41.8 52.8,43.6 53.4,45.6 54.0,47.7 54.6,49.9 55.2,52.3 55.8,54.9 56.4,57.5 57.0,60.2 57.6,63.1 58.1,66.0 58.7,68.9 59.3,71.9 59.9,75.0 60.5,78.0 61.1,81.0 61.7,84.1 62.3,87.1 62.9,90.0 63.4,92.9 64.0,95.8 64.6,98.5 65.2,101.1 65.8,103.7 66.4,106.1 67.0,108.3 67.6,110.4 68.2,112.4 68.7,114.2 69.3,115.8 69.9,117.2 70.5,118.5 71.1,119.5 71.7,120.4 72.3,121.0 72.9,121.4 73.5,121.6 74.0,121.6 74.6,121.4 75.2,121.0 75.8,120.4 76.4,119.5 77.0,118.5 77.6,117.2 78.2,115.8 78.8,114.2 79.3,112.4 79.9,110.4 80.5,108.3 81.1,106.1 81.7,103.7 82.3,101.1 82.9,98.5 83.5,95.8 84.1,92.9 84.6,90.0 85.2,87.1 85.8,84.1 86.4,81.0 87.0,78.0 87.6,75.0 88.2,71.9 88.8,68.9 89.4,66.0 89.9,63.1 90.5,60.2 91.1,57.5 91.7,54.9 92.3,52.3 92.9,49.9 93.5,47.7 94.1,45.6 94.7,43.6 95.2,41.8 95.8,40.2 96.4,38.8 97.0,37.5 97.6,36.5 98.2,35.6 98.8,35.0 99.4,34.6 100.0,34.4 100.5,34.4 101.1,34.6 101.7,35.0 102.3,35.6 102.9,36.5 103.5,37.5 104.1,38.8 104.7,40.2 105.3,41.8 105.8,43.6 106.4,45.6 107.0,47.7 107.6,49.9 108.2,52.3 108.8,54.9 109.4,57.5 110.0,60.2 110.6,63.1 111.1,66.0 111.7,68.9 112.3,71.9 112.9,75.0 113.5,78.0 114.1,81.0 114.7,84.1 115.3,87.1 115.9,90.0 116.4,92.9 117.0,95.8 117.6,98.5 118.2,101.1 118.8,103.7 119.4,106.1 120.0,108.3 120.6,110.4 121.2,112.4 121.7,114.2 122.3,115.8 122.9,117.2 123.5,118.5 124.1,119.5 124.7,120.4 125.3,121.0 125.9,121.4 126.5,121.6 127.0,121.6 127.6,121.4 128.2,121.0 128.8,120.4 129.4,119.5 130.0,118.5 130.6,117.2 131.2,115.8 131.8,114.2 132.3,112.4 132.9,110.4 133.5,108.3 134.1,106.1 134.7,103.7 135.3,101.1 135.9,98.5 136.5,95.8 137.1,92.9 137.6,90.0 138.2,87.1 138.8,84.1 139.4,81.0 140.0,78.0 140.6,75.0 141.2,71.9 141.8,68.9 142.4,66.0 142.9,63.1 143.5,60.2 144.1,57.5 144.7,54.9 145.3,52.3 145.9,49.9 146.5,47.7 147.1,45.6 147.7,43.6 148.2,41.8 148.8,40.2 149.4,38.8 150.0,37.5 150.6,36.5 151.2,35.6 151.8,35.0 152.4,34.6 153.0,34.4 153.5,34.4 154.1,34.6 154.7,35.0 155.3,35.6 155.9,36.5 156.5,37.5 157.1,38.8 157.7,40.2 158.3,41.8 158.8,43.6 159.4,45.6 160.0,47.7 160.6,49.9 161.2,52.3 161.8,54.9 162.4,57.5 163.0,60.2 163.6,63.1 164.1,66.0 164.7,68.9 165.3,71.9 165.9,75.0 166.5,78.0 167.1,81.0 167.7,84.1 168.3,87.1 168.9,90.0 169.4,92.9 170.0,95.8 170.6,98.5 171.2,101.1 171.8,103.7 172.4,106.1 173.0,108.3 173.6,110.4 174.2,112.4 174.7,114.2 175.3,115.8 175.9,117.2 176.5,118.5 177.1,119.5 177.7,120.4 178.3,121.0 178.9,121.4 179.5,121.6 180.0,121.6 180.6,121.4 181.2,121.0 181.8,120.4 182.4,119.5 183.0,118.5 183.6,117.2 184.2,115.8 184.8,114.2 185.3,112.4 185.9,110.4 186.5,108.3 187.1,106.1 187.7,103.7 188.3,101.1 188.9,98.5 189.5,95.8 190.1,92.9 190.6,90.0 191.2,87.1 191.8,84.1 192.4,81.0 193.0,78.0 193.6,75.0 194.2,71.9 194.8,68.9 195.4,66.0 195.9,63.1 196.5,60.2 197.1,57.5 197.7,54.9 198.3,52.3 198.9,49.9 199.5,47.7 200.1,45.6 200.7,43.6 201.2,41.8 201.8,40.2 202.4,38.8 203.0,37.5 203.6,36.5 204.2,35.6 204.8,35.0 205.4,34.6 206.0,34.4 206.5,34.4 207.1,34.6 207.7,35.0 208.3,35.6 208.9,36.5 209.5,37.5 210.1,38.8 210.7,40.2 211.3,41.8 211.8,43.6 212.4,45.6 213.0,47.7 213.6,49.9 214.2,52.3 214.8,54.9 215.4,57.5 216.0,60.2 216.6,63.1 217.1,66.0 217.7,68.9 218.3,71.9 218.9,75.0 219.5,78.0 220.1,81.0 220.7,84.1 221.3,87.1 221.9,90.0 222.4,92.9 223.0,95.8 223.6,98.5 224.2,101.1 224.8,103.7 225.4,106.1 226.0,108.3 226.6,110.4 227.2,112.4 227.7,114.2 228.3,115.8 228.9,117.2 229.5,118.5 230.1,119.5 230.7,120.4 231.3,121.0 231.9,121.4 232.5,121.6 233.0,121.6 233.6,121.4 234.2,121.0 234.8,120.4 235.4,119.5 236.0,118.5 236.6,117.2 237.2,115.8 237.8,114.2 238.3,112.4 238.9,110.4 239.5,108.3 240.1,106.1 240.7,103.7 241.3,101.1 241.9,98.5 242.5,95.8 243.1,92.9 243.6,90.0 244.2,87.1 244.8,84.1 245.4,81.0 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"47.2\" y1=\"34.4\" x2=\"47.2\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"67.2\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=6</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"87.0\" y1=\"96.0\" x2=\"87.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"87.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"60.5\" y=\"107.0\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1 cycle, P=90&#176;</text><text x=\"130.0\" y=\"24.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">4 full cycles shown over 0&#176;-360&#176;</text></svg>"},
        { difficulty: 'Hard', question: 'A trigonometric graph has equation y = cos(kθ + p). Its period is 45° and it is the same as y = cos(kθ) shifted 5° to the left. Find the values of k and p, and write down the full equation of the graph.', answer: 'Period = 360°/k = 45°\nk = 360°/45° = 8\n\nA shift of 5° to the left means we replace θ with (θ + 5°) inside y = cos(kθ):\ny = cos(8(θ + 5°)) = cos(8θ + 40°)\nComparing to y = cos(kθ + p): p = 40°\n\nFull equation: y = cos(8θ + 40°)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"130.4\" y1=\"75.0\" x2=\"130.4\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"130.4\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">P</text><line x1=\"226.7\" y1=\"75.0\" x2=\"226.7\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"226.7\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">2P</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,36.0 34.7,36.1 35.4,36.2 36.1,36.4 36.8,36.7 37.5,37.1 38.2,37.6 38.9,38.2 39.7,38.8 40.4,39.6 41.1,40.4 41.8,41.3 42.5,42.3 43.2,43.3 43.9,44.5 44.6,45.7 45.3,46.9 46.0,48.3 46.7,49.7 47.4,51.1 48.1,52.6 48.8,54.2 49.5,55.8 50.3,57.5 51.0,59.2 51.7,60.9 52.4,62.7 53.1,64.5 53.8,66.4 54.5,68.2 55.2,70.1 55.9,72.0 56.6,74.0 57.3,75.9 58.0,77.8 58.7,79.8 59.4,81.7 60.1,83.6 60.9,85.5 61.6,87.4 62.3,89.3 63.0,91.1 63.7,93.0 64.4,94.7 65.1,96.5 65.8,98.2 66.5,99.9 67.2,101.5 67.9,103.1 68.6,104.6 69.3,106.1 70.0,107.5 70.7,108.8 71.5,110.1 72.2,111.3 72.9,112.5 73.6,113.5 74.3,114.5 75.0,115.4 75.7,116.3 76.4,117.0 77.1,117.7 77.8,118.3 78.5,118.8 79.2,119.2 79.9,119.5 80.6,119.8 81.3,119.9 82.1,120.0 82.8,119.9 83.5,119.8 84.2,119.6 84.9,119.3 85.6,118.9 86.3,118.5 87.0,117.9 87.7,117.3 88.4,116.6 89.1,115.7 89.8,114.9 90.5,113.9 91.2,112.9 91.9,111.7 92.7,110.6 93.4,109.3 94.1,108.0 94.8,106.6 95.5,105.2 96.2,103.7 96.9,102.1 97.6,100.5 98.3,98.8 99.0,97.1 99.7,95.4 100.4,93.6 101.1,91.8 101.8,90.0 102.5,88.1 103.3,86.2 104.0,84.3 104.7,82.4 105.4,80.5 106.1,78.5 106.8,76.6 107.5,74.7 108.2,72.7 108.9,70.8 109.6,68.9 110.3,67.1 111.0,65.2 111.7,63.4 112.4,61.6 113.1,59.8 113.9,58.1 114.6,56.4 115.3,54.8 116.0,53.2 116.7,51.7 117.4,50.2 118.1,48.8 118.8,47.4 119.5,46.1 120.2,44.9 120.9,43.7 121.6,42.7 122.3,41.7 123.0,40.7 123.7,39.9 124.5,39.1 125.2,38.4 125.9,37.8 126.6,37.3 127.3,36.9 128.0,36.5 128.7,36.3 129.4,36.1 130.1,36.0 130.8,36.0 131.5,36.2 132.2,36.3 132.9,36.6 133.6,37.0 134.3,37.4 135.1,38.0 135.8,38.6 136.5,39.3 137.2,40.1 137.9,41.0 138.6,41.9 139.3,42.9 140.0,44.0 140.7,45.2 141.4,46.5 142.1,47.8 142.8,49.1 143.5,50.6 144.2,52.1 144.9,53.6 145.7,55.2 146.4,56.9 147.1,58.6 147.8,60.3 148.5,62.1 149.2,63.9 149.9,65.7 150.6,67.6 151.3,69.4 152.0,71.3 152.7,73.3 153.4,75.2 154.1,77.1 154.8,79.1 155.5,81.0 156.3,82.9 157.0,84.8 157.7,86.7 158.4,88.6 159.1,90.5 159.8,92.3 160.5,94.1 161.2,95.9 161.9,97.6 162.6,99.3 163.3,100.9 164.0,102.5 164.7,104.1 165.4,105.6 166.1,107.0 166.9,108.4 167.6,109.7 168.3,110.9 169.0,112.1 169.7,113.2 170.4,114.2 171.1,115.1 171.8,116.0 172.5,116.8 173.2,117.5 173.9,118.1 174.6,118.6 175.3,119.1 176.0,119.4 176.7,119.7 177.5,119.9 178.2,120.0 178.9,120.0 179.6,119.9 180.3,119.7 181.0,119.4 181.7,119.1 182.4,118.7 183.1,118.1 183.8,117.5 184.5,116.8 185.2,116.0 185.9,115.2 186.6,114.3 187.3,113.2 188.1,112.2 188.8,111.0 189.5,109.8 190.2,108.5 190.9,107.1 191.6,105.7 192.3,104.2 193.0,102.7 193.7,101.1 194.4,99.4 195.1,97.8 195.8,96.0 196.5,94.3 197.2,92.5 197.9,90.6 198.7,88.8 199.4,86.9 200.1,85.0 200.8,83.1 201.5,81.2 202.2,79.2 202.9,77.3 203.6,75.4 204.3,73.4 205.0,71.5 205.7,69.6 206.4,67.7 207.1,65.9 207.8,64.0 208.5,62.2 209.3,60.4 210.0,58.7 210.7,57.0 211.4,55.4 212.1,53.8 212.8,52.2 213.5,50.7 214.2,49.3 214.9,47.9 215.6,46.6 216.3,45.3 217.0,44.1 217.7,43.0 218.4,42.0 219.1,41.1 219.9,40.2 220.6,39.4 221.3,38.7 222.0,38.0 222.7,37.5 223.4,37.0 224.1,36.6 224.8,36.4 225.5,36.2 226.2,36.1 226.9,36.0 227.6,36.1 228.3,36.3 229.0,36.5 229.7,36.8 230.5,37.3 231.2,37.8 231.9,38.4 232.6,39.0 233.3,39.8 234.0,40.6 234.7,41.6 235.4,42.6 236.1,43.6 236.8,44.8 237.5,46.0 238.2,47.3 238.9,48.6 239.6,50.0 240.3,51.5 241.1,53.0 241.8,54.6 242.5,56.3 243.2,57.9 243.9,59.7 244.6,61.4 245.3,63.2 246.0,65.0\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,45.8 34.7,47.1 35.4,48.5 36.1,49.9 36.8,51.3 37.5,52.9 38.2,54.4 38.9,56.1 39.7,57.7 40.4,59.4 41.1,61.2 41.8,63.0 42.5,64.8 43.2,66.7 43.9,68.5 44.6,70.4 45.3,72.3 46.0,74.3 46.7,76.2 47.4,78.1 48.1,80.1 48.8,82.0 49.5,83.9 50.3,85.8 51.0,87.7 51.7,89.6 52.4,91.4 53.1,93.2 53.8,95.0 54.5,96.8 55.2,98.5 55.9,100.1 56.6,101.8 57.3,103.3 58.0,104.8 58.7,106.3 59.4,107.7 60.1,109.0 60.9,110.3 61.6,111.5 62.3,112.6 63.0,113.7 63.7,114.7 64.4,115.6 65.1,116.4 65.8,117.1 66.5,117.8 67.2,118.4 67.9,118.8 68.6,119.2 69.3,119.6 70.0,119.8 70.7,119.9 71.5,120.0 72.2,119.9 72.9,119.8 73.6,119.6 74.3,119.3 75.0,118.9 75.7,118.4 76.4,117.8 77.1,117.2 77.8,116.4 78.5,115.6 79.2,114.7 79.9,113.7 80.6,112.7 81.3,111.6 82.1,110.4 82.8,109.1 83.5,107.8 84.2,106.4 84.9,104.9 85.6,103.4 86.3,101.9 87.0,100.2 87.7,98.6 88.4,96.9 89.1,95.1 89.8,93.3 90.5,91.5 91.2,89.7 91.9,87.8 92.7,85.9 93.4,84.0 94.1,82.1 94.8,80.2 95.5,78.2 96.2,76.3 96.9,74.4 97.6,72.4 98.3,70.5 99.0,68.6 99.7,66.8 100.4,64.9 101.1,63.1 101.8,61.3 102.5,59.5 103.3,57.8 104.0,56.2 104.7,54.5 105.4,53.0 106.1,51.4 106.8,50.0 107.5,48.6 108.2,47.2 108.9,45.9 109.6,44.7 110.3,43.6 111.0,42.5 111.7,41.5 112.4,40.6 113.1,39.8 113.9,39.0 114.6,38.3 115.3,37.7 116.0,37.2 116.7,36.8 117.4,36.5 118.1,36.2 118.8,36.1 119.5,36.0 120.2,36.1 120.9,36.2 121.6,36.4 122.3,36.7 123.0,37.0 123.7,37.5 124.5,38.1 125.2,38.7 125.9,39.4 126.6,40.2 127.3,41.1 128.0,42.1 128.7,43.1 129.4,44.2 130.1,45.4 130.8,46.7 131.5,48.0 132.2,49.4 132.9,50.8 133.6,52.3 134.3,53.9 135.1,55.5 135.8,57.1 136.5,58.8 137.2,60.6 137.9,62.3 138.6,64.1 139.3,66.0 140.0,67.8 140.7,69.7 141.4,71.6 142.1,73.6 142.8,75.5 143.5,77.4 144.2,79.3 144.9,81.3 145.7,83.2 146.4,85.1 147.1,87.0 147.8,88.9 148.5,90.7 149.2,92.6 149.9,94.4 150.6,96.1 151.3,97.9 152.0,99.5 152.7,101.2 153.4,102.8 154.1,104.3 154.8,105.8 155.5,107.2 156.3,108.6 157.0,109.8 157.7,111.1 158.4,112.2 159.1,113.3 159.8,114.3 160.5,115.2 161.2,116.1 161.9,116.9 162.6,117.6 163.3,118.2 164.0,118.7 164.7,119.1 165.4,119.5 166.1,119.7 166.9,119.9 167.6,120.0 168.3,120.0 169.0,119.9 169.7,119.7 170.4,119.4 171.1,119.0 171.8,118.6 172.5,118.0 173.2,117.4 173.9,116.7 174.6,115.9 175.3,115.1 176.0,114.1 176.7,113.1 177.5,112.0 178.2,110.8 178.9,109.6 179.6,108.3 180.3,106.9 181.0,105.5 181.7,104.0 182.4,102.4 183.1,100.8 183.8,99.2 184.5,97.5 185.2,95.8 185.9,94.0 186.6,92.2 187.3,90.4 188.1,88.5 188.8,86.6 189.5,84.7 190.2,82.8 190.9,80.9 191.6,78.9 192.3,77.0 193.0,75.1 193.7,73.1 194.4,71.2 195.1,69.3 195.8,67.4 196.5,65.6 197.2,63.8 197.9,62.0 198.7,60.2 199.4,58.5 200.1,56.8 200.8,55.1 201.5,53.5 202.2,52.0 202.9,50.5 203.6,49.1 204.3,47.7 205.0,46.4 205.7,45.1 206.4,44.0 207.1,42.9 207.8,41.9 208.5,40.9 209.3,40.1 210.0,39.3 210.7,38.6 211.4,37.9 212.1,37.4 212.8,37.0 213.5,36.6 214.2,36.3 214.9,36.1 215.6,36.0 216.3,36.0 217.0,36.1 217.7,36.3 218.4,36.6 219.1,36.9 219.9,37.3 220.6,37.9 221.3,38.5 222.0,39.2 222.7,39.9 223.4,40.8 224.1,41.7 224.8,42.7 225.5,43.8 226.2,45.0 226.9,46.2 227.6,47.5 228.3,48.8 229.0,50.3 229.7,51.7 230.5,53.3 231.2,54.9 231.9,56.5 232.6,58.2 233.3,59.9 234.0,61.7 234.7,63.5 235.4,65.3 236.1,67.2 236.8,69.0 237.5,70.9 238.2,72.9 238.9,74.8 239.6,76.7 240.3,78.6 241.1,80.6 241.8,82.5 242.5,84.4 243.2,86.3 243.9,88.2 244.6,90.1 245.3,91.9 246.0,93.7\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"188\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"188\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">shift = 5&#176; left</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reduction formulae, general solutions, the sine/cosine/area rules and trig graph features.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the sine rule, cosine rule or trig graphs, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reduction formulae and general solutions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Reduction formulae (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Use a reduction formula to simplify sin(180° + x).', checkMode: 'auto', correctAnswer: '-sinx', correctAnswers: ['-sinx', '−sinx', '-sin x', '−sin x'], answer: '−sin x', explanation: 'sin(180° + θ) = −sinθ, so sin(180° + x) = −sin x ✓' },
        { difficulty: 'Medium', question: 'Use reduction formulae to simplify cos(−x) · sin(180° + x).', checkMode: 'auto', correctAnswer: '-sinxcosx', correctAnswers: ['-sinxcosx', '−sinxcosx', '-sinx cosx', '−sin x cos x', '-cosxsinx'], answer: '−sin x cos x', explanation: 'cos(−x) = cos x. sin(180° + x) = −sin x.\ncos x × (−sin x) = −sin x cos x ✓' },
        { difficulty: 'Hard', question: 'Simplify fully, without a calculator: [sin(360° − x) · cos(180° − x)] / cos(−x).', answer: 'sin(360° − x) = −sin x. cos(180° − x) = −cos x. cos(−x) = cos x.\nSo the expression = [(−sin x)(−cos x)] / cos x = (sin x cos x) / cos x = sin x (cancelling one factor of cos x) ✓', checkMode: 'self' },

        // Block 2 — General solution of trig equations (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Find the general solution of sinθ = 0.45, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=26.74°+360°n or θ=153.26°+360°n', correctAnswers: ['θ=26.74°+360°n or θ=153.26°+360°n', '26.74°+360°n or 153.26°+360°n', 'θ=26.74+360n or θ=153.26+360n'], answer: 'θ = 26.74° + 360°n or θ = 153.26° + 360°n, n ∈ ℤ', explanation: 'Reference angle = sin⁻¹(0.45) ≈ 26.74°. sinθ is positive → Q1 and Q2.\nθ = 26.74° + 360°n or θ = (180° − 26.74°) + 360°n = 153.26° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Medium', question: 'Find the general solution of cosθ = −0.7, giving the reference angle correct to 2 decimal places.', checkMode: 'auto', correctAnswer: 'θ=±134.43°+360°n', correctAnswers: ['θ=±134.43°+360°n', '±134.43°+360°n', 'θ=134.43°+360°n or θ=225.57°+360°n'], answer: 'θ = ±134.43° + 360°n, n ∈ ℤ', explanation: 'Reference angle = cos⁻¹(0.7) ≈ 45.57°. cosθ is negative → Q2 and Q3.\nθ = 180° − 45.57° = 134.43° or θ = 180° + 45.57° = 225.57°, written compactly as θ = ±134.43° + 360°n, n ∈ ℤ ✓' },
        { difficulty: 'Hard', question: 'Find the general solution of 3sinθ + 1 = 0. Then list all solutions in the interval 0° ≤ θ ≤ 360°, giving reference angle and final answers correct to 2 decimal places.', answer: 'Step 1: Isolate sinθ.\n3sinθ = −1 → sinθ = −1/3 ≈ −0.3333\n\nStep 2: Reference angle = sin⁻¹(1/3) ≈ 19.47°.\nsinθ is negative → solutions in Q3 and Q4.\n\nStep 3: General solution.\nθ = (180° + 19.47°) + 360°n = 199.47° + 360°n, n ∈ ℤ\nor θ = (360° − 19.47°) + 360°n = 340.53° + 360°n, n ∈ ℤ\n\nStep 4: Solutions in [0°, 360°]: 199.47° and 340.53°.', checkMode: 'self' },

        // Block 3 — Sine Rule: missing side, then missing angle (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, A = 44°, B = 63°, and a = 9 cm. Use the Sine Rule to find side b, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '11.54', correctAnswers: ['11.54', '11.54cm', '11.54 cm'], answer: '11.54 cm', explanation: 'Sine Rule: a/sinA = b/sinB\n9/sin44° = b/sin63°\nb = 9 × sin63°/sin44° = 9 × 0.8910/0.6947 ≈ 11.54 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 149.3,34.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.1\" y=\"151.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"220.4\" y=\"153.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"153.4\" y=\"19.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"189.8\" y=\"85.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"80.0\" y=\"84.7\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"7.9\" y=\"156.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">44°</text><text x=\"231.2\" y=\"158.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">63°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle DEF, D = 40°, d = 12 cm, and e = 16 cm. Use the Sine Rule to find angle E, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '58.99', correctAnswers: ['58.99', '58.99°'], answer: '58.99°', explanation: 'Sine Rule: d/sinD = e/sinE\n12/sin40° = 16/sinE\nsinE = 16 × sin40°/12 = 16 × 0.6428/12 ≈ 0.8571\nE = sin⁻¹(0.8571) ≈ 58.99° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 167.5,34.0 185.2,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.1\" y=\"151.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"174.8\" y=\"19.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"198.5\" y=\"154.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"103.6\" y=\"157.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"188.4\" y=\"85.2\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"7.9\" y=\"156.3\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40°</text><text x=\"180.4\" y=\"9.1\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle GHI, G = 70°, g = 10 cm, and h = 14 cm. Use the Sine Rule to find angle H, correct to 2 decimal places.', answer: 'Sine Rule: g/sinG = h/sinH\n10/sin70° = 14/sinH\nsinH = 14 × sin70°/10 = 14 × 0.9397/10 ≈ 1.3156\nSince sinH > 1, no such triangle exists — this configuration is not possible with the given measurements.', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 106.2,51.4 206.0,146.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.1\" y=\"151.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"103.9\" y=\"35.6\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"221.1\" y=\"151.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"121.9\" y=\"158.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"168.2\" y=\"94.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"7.9\" y=\"156.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">70°</text></svg>"},

        // Block 4 — Cosine Rule: missing side (SAS), missing angle (SSS) (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'In triangle ABC, b = 8 cm, c = 11 cm, and the included angle A = 62°. Use the Cosine Rule to find side a, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '10.12', correctAnswers: ['10.12', '10.12cm', '10.12 cm'], answer: '10.12 cm', explanation: 'Cosine Rule: a² = b² + c² − 2bc·cosA\n= 64 + 121 − 2(8)(11)cos62°\n= 185 − 176 × 0.4695\n= 185 − 82.63\n= 102.37\na = √102.37 ≈ 10.12 cm ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 92.7,35.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.6\" y=\"152.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"220.9\" y=\"151.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"88.9\" y=\"20.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"123.1\" y=\"158.6\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"51.2\" y=\"86.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"161.1\" y=\"85.2\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"8.7\" y=\"158.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">62°</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle PQR, p = 7 cm, q = 10 cm, and r = 14 cm. Use the Cosine Rule to find the size of angle R (opposite the longest side), correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '109.62', correctAnswers: ['109.62', '109.62°'], answer: '109.62°', explanation: 'Cosine Rule: cosR = (p² + q² − r²) / (2pq)\n= (49 + 100 − 196) / (2 × 7 × 10)\n= −47 / 140\n= −0.3357\nR = cos⁻¹(−0.3357) ≈ 109.62° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 142.4,88.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.3\" y=\"149.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"221.5\" y=\"149.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"148.2\" y=\"73.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text><text x=\"186.9\" y=\"114.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"75.6\" y=\"113.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"115.3\" y=\"158.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"152.5\" y=\"62.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In triangle XYZ, x = 7 cm, y = 10 cm, and z = 14 cm. Find angle X and angle Y (each correct to 2 decimal places), and hence verify that all three angles of the triangle sum to 180°.', answer: 'cosX = (y² + z² − x²)/(2yz) = (100 + 196 − 49)/(2×10×14) = 247/280 ≈ 0.8821\nX = cos⁻¹(0.8821) ≈ 28.10°\n\ncosY = (x² + z² − y²)/(2xz) = (49 + 196 − 100)/(2×7×14) = 145/196 ≈ 0.7398\nY = cos⁻¹(0.7398) ≈ 42.29°\n\nZ (from previous question) ≈ 109.62°\nSum: 28.10° + 42.29° + 109.62° = 180.01° (rounding) ✓', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 142.4,88.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.3\" y=\"149.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">X</text><text x=\"221.5\" y=\"149.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Y</text><text x=\"148.2\" y=\"73.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Z</text><text x=\"186.9\" y=\"114.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"75.6\" y=\"113.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"115.3\" y=\"158.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"6.6\" y=\"151.7\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"233.2\" y=\"152.7\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 5 — Area Rule (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Find the area of triangle ABC where a = 11 cm, b = 14 cm, and the included angle C = 65°, correct to 2 decimal places.', checkMode: 'auto', correctAnswer: '69.79', correctAnswers: ['69.79', '69.79cm²', '69.79 cm²'], answer: '69.79 cm²', explanation: 'Area = ½ · a · b · sinC = ½ × 11 × 14 × sin65° = 77 × 0.9063 ≈ 69.79 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 191.3,146.0 86.2,34.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"19.9\" y=\"153.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"206.0\" y=\"152.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"82.5\" y=\"18.4\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"115.6\" y=\"158.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"48.1\" y=\"84.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"9.3\" y=\"159.2\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">65°</text></svg>"},
        { difficulty: 'Medium', question: 'Find the exact area of triangle ABC where a = 13 cm, b = 8 cm, and the included angle C = 30°.', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm²', '26 cm²'], answer: '26 cm²', explanation: 'Area = ½ × 13 × 8 × sin30° = ½ × 104 × 0.5 = 26 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 156.2,146.0 206.0,46.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.8\" y=\"151.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"165.6\" y=\"158.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"217.9\" y=\"36.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"85.4\" y=\"154.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"112.3\" y=\"85.8\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"7.5\" y=\"155.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30°</text></svg>"},
        { difficulty: 'Hard', question: 'Triangle ABC has area 63 cm², with a = 14 cm and b = 18 cm as the two given sides. Find the included angle C, correct to 2 decimal places.', answer: 'Area = ½ab sinC\n63 = ½ × 14 × 18 × sinC\n63 = 126 sinC\nsinC = 63/126 = 0.5\nC = sin⁻¹(0.5) = 30° (taking the acute solution)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 206.0,146.0 149.9,79.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><text x=\"18.4\" y=\"149.6\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"221.4\" y=\"150.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"156.4\" y=\"64.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"114.7\" y=\"157.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"79.5\" y=\"108.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"6.7\" y=\"152.3\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Trig graph features: period/amplitude/shift (Easy/Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'The graph of y = 4sinθ has amplitude A and the graph of y = cos(3θ) has period P. State the values of A and P.', checkMode: 'auto', correctAnswer: 'A=4,P=120°', correctAnswers: ['A=4,P=120°', 'A=4 P=120°', 'amplitude=4, period=120°', '4 and 120°', '4, 120°'], answer: 'A = 4, P = 120°', explanation: 'For y = 4sinθ, the amplitude is the coefficient in front of sin, so A = 4.\nFor y = cos(3θ), k = 3, so period = 360°/3 = 120° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 35.5,76.0 37.0,74.1 38.5,72.1 40.1,70.2 41.6,68.3 43.1,66.4 44.6,64.5 46.1,62.7 47.6,60.8 49.1,59.1 50.7,57.3 52.2,55.6 53.7,54.0 55.2,52.3 56.7,50.8 58.2,49.3 59.7,47.8 61.3,46.5 62.8,45.1 64.3,43.9 65.8,42.7 67.3,41.6 68.8,40.5 70.3,39.6 71.9,38.7 73.4,37.9 74.9,37.1 76.4,36.5 77.9,35.9 79.4,35.4 80.9,35.1 82.5,34.7 84.0,34.5 85.5,34.4 87.0,34.4 88.5,34.4 90.0,34.5 91.5,34.7 93.1,35.1 94.6,35.4 96.1,35.9 97.6,36.5 99.1,37.1 100.6,37.9 102.1,38.7 103.7,39.6 105.2,40.5 106.7,41.6 108.2,42.7 109.7,43.9 111.2,45.1 112.7,46.5 114.3,47.8 115.8,49.3 117.3,50.8 118.8,52.3 120.3,54.0 121.8,55.6 123.3,57.3 124.9,59.1 126.4,60.8 127.9,62.7 129.4,64.5 130.9,66.4 132.4,68.3 133.9,70.2 135.5,72.1 137.0,74.1 138.5,76.0 140.0,78.0 141.5,80.0 143.0,81.9 144.5,83.9 146.1,85.8 147.6,87.7 149.1,89.6 150.6,91.5 152.1,93.3 153.6,95.2 155.1,96.9 156.7,98.7 158.2,100.4 159.7,102.0 161.2,103.7 162.7,105.2 164.2,106.7 165.7,108.2 167.3,109.5 168.8,110.9 170.3,112.1 171.8,113.3 173.3,114.4 174.8,115.5 176.3,116.4 177.9,117.3 179.4,118.1 180.9,118.9 182.4,119.5 183.9,120.1 185.4,120.6 186.9,120.9 188.5,121.3 190.0,121.5 191.5,121.6 193.0,121.6 194.5,121.6 196.0,121.5 197.5,121.3 199.1,120.9 200.6,120.6 202.1,120.1 203.6,119.5 205.1,118.9 206.6,118.1 208.1,117.3 209.7,116.4 211.2,115.5 212.7,114.4 214.2,113.3 215.7,112.1 217.2,110.9 218.7,109.5 220.3,108.2 221.8,106.7 223.3,105.2 224.8,103.7 226.3,102.0 227.8,100.4 229.3,98.7 230.9,96.9 232.4,95.2 233.9,93.3 235.4,91.5 236.9,89.6 238.4,87.7 239.9,85.8 241.5,83.9 243.0,81.9 244.5,80.0 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"87.0\" y1=\"34.4\" x2=\"87.0\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"105.0\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=4</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"246.0\" y1=\"96.0\" x2=\"246.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"246.0\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"140.0\" y=\"107.0\" font-size=\"10.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 360&#176;</text></svg>"},
        { difficulty: 'Easy', question: 'State the period of y = tan(2θ).', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90'], answer: '90°', explanation: 'The tan graph has a base period of 180°. With k = 2, period = 180°/2 = 90° ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">45°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">135°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><line x1=\"87.0\" y1=\"16\" x2=\"87.0\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><line x1=\"193.0\" y1=\"16\" x2=\"193.0\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/><polyline points=\"34.6,77.7 35.4,77.2 36.3,76.8 37.2,76.3 38.0,75.8 38.9,75.3 39.7,74.9 40.6,74.4 41.5,73.9 42.3,73.4 43.2,72.9 44.0,72.4 44.9,71.9 45.8,71.4 46.6,70.9 47.5,70.3 48.3,69.8 49.2,69.2 50.1,68.6 50.9,68.0 51.8,67.4 52.6,66.8 53.5,66.1 54.4,65.5 55.2,64.8 56.1,64.0 56.9,63.3 57.8,62.5 58.7,61.7 59.5,60.8 60.4,59.9 61.2,59.0 62.1,58.0 63.0,56.9 63.8,55.8 64.7,54.6 65.5,53.4 66.4,52.0 67.3,50.5 68.1,49.0 69.0,47.2 69.8,45.4 70.7,43.3 71.6,41.1 72.4,38.6 73.3,35.8 74.1,32.6 75.0,29.0 75.9,24.9 76.7,23.4 77.6,23.4 78.4,23.4 79.3,23.4 80.2,23.4 81.0,23.4 81.9,23.4 82.7,23.4 83.6,23.4 84.5,23.4 85.3,23.4 86.2,23.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><polyline points=\"87.8,132.6 89.6,132.6 91.3,132.6 93.0,132.6 94.8,132.6 96.5,132.6 98.3,130.5 100.0,122.8 101.7,117.0 103.5,112.2 105.2,108.3 107.0,105.1 108.7,102.3 110.4,99.8 112.2,97.7 113.9,95.7 115.7,94.0 117.4,92.4 119.1,90.9 120.9,89.6 122.6,88.3 124.3,87.1 126.1,86.0 127.8,84.9 129.6,83.8 131.3,82.8 133.0,81.8 134.8,80.8 136.5,79.9 138.3,78.9 140.0,78.0 141.7,77.1 143.5,76.1 145.2,75.2 147.0,74.2 148.7,73.2 150.4,72.2 152.2,71.1 153.9,70.0 155.7,68.9 157.4,67.7 159.1,66.4 160.9,65.1 162.6,63.6 164.3,62.0 166.1,60.3 167.8,58.3 169.6,56.2 171.3,53.7 173.0,50.9 174.8,47.7 176.5,43.8 178.3,39.0 180.0,33.2 181.7,25.5 183.5,23.4 185.2,23.4 187.0,23.4 188.7,23.4 190.4,23.4 192.2,23.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><polyline points=\"193.8,132.6 194.7,132.6 195.5,132.6 196.4,132.6 197.3,132.6 198.1,132.6 199.0,132.6 199.8,132.6 200.7,132.6 201.6,132.6 202.4,132.6 203.3,132.6 204.1,131.1 205.0,127.0 205.9,123.4 206.7,120.2 207.6,117.4 208.4,114.9 209.3,112.7 210.2,110.6 211.0,108.8 211.9,107.0 212.7,105.5 213.6,104.0 214.5,102.6 215.3,101.4 216.2,100.2 217.0,99.1 217.9,98.0 218.8,97.0 219.6,96.1 220.5,95.2 221.3,94.3 222.2,93.5 223.1,92.7 223.9,92.0 224.8,91.2 225.6,90.5 226.5,89.9 227.4,89.2 228.2,88.6 229.1,88.0 229.9,87.4 230.8,86.8 231.7,86.2 232.5,85.7 233.4,85.1 234.2,84.6 235.1,84.1 236.0,83.6 236.8,83.1 237.7,82.6 238.5,82.1 239.4,81.6 240.3,81.1 241.1,80.7 242.0,80.2 242.8,79.7 243.7,79.2 244.6,78.8 245.4,78.3\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#ea580c\" stroke-width=\"1.3\"/><line x1=\"140.0\" y1=\"96.0\" x2=\"140.0\" y2=\"90.0\" stroke=\"#ea580c\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"140.0\" y2=\"96.0\" stroke=\"#ea580c\" stroke-width=\"1.3\"/><text x=\"87.0\" y=\"107.0\" font-size=\"10\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">one full cycle = 90&#176;</text></svg>"},
        { difficulty: 'Medium', question: 'A graph has equation y = 4cos(θ − 25°). State its amplitude, and describe the horizontal shift compared to y = cosθ.', checkMode: 'auto', correctAnswer: 'amplitude=4, shift 25° right', correctAnswers: ['amplitude=4, shift 25° right', 'amplitude 4, 25° to the right', '4, 25° right', 'A=4, 25° right'], answer: 'Amplitude = 4, shifted 25° to the right', explanation: 'The coefficient 4 in front of cos gives amplitude = 4.\nSince the angle is written as (θ − 25°), the graph shifts 25° to the right compared to y = cosθ ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,67.1 35.5,67.1 37.0,67.1 38.5,67.2 40.1,67.3 41.6,67.4 43.1,67.5 44.6,67.6 46.1,67.8 47.6,68.0 49.1,68.2 50.7,68.4 52.2,68.6 53.7,68.9 55.2,69.2 56.7,69.5 58.2,69.8 59.7,70.1 61.3,70.5 62.8,70.8 64.3,71.2 65.8,71.6 67.3,72.0 68.8,72.4 70.3,72.8 71.9,73.3 73.4,73.7 74.9,74.2 76.4,74.6 77.9,75.1 79.4,75.6 80.9,76.1 82.5,76.5 84.0,77.0 85.5,77.5 87.0,78.0 88.5,78.5 90.0,79.0 91.5,79.5 93.1,79.9 94.6,80.4 96.1,80.9 97.6,81.4 99.1,81.8 100.6,82.3 102.1,82.7 103.7,83.2 105.2,83.6 106.7,84.0 108.2,84.4 109.7,84.8 111.2,85.2 112.7,85.5 114.3,85.9 115.8,86.2 117.3,86.5 118.8,86.8 120.3,87.1 121.8,87.4 123.3,87.6 124.9,87.8 126.4,88.0 127.9,88.2 129.4,88.4 130.9,88.5 132.4,88.6 133.9,88.7 135.5,88.8 137.0,88.9 138.5,88.9 140.0,88.9 141.5,88.9 143.0,88.9 144.5,88.8 146.1,88.7 147.6,88.6 149.1,88.5 150.6,88.4 152.1,88.2 153.6,88.0 155.1,87.8 156.7,87.6 158.2,87.4 159.7,87.1 161.2,86.8 162.7,86.5 164.2,86.2 165.7,85.9 167.3,85.5 168.8,85.2 170.3,84.8 171.8,84.4 173.3,84.0 174.8,83.6 176.3,83.2 177.9,82.7 179.4,82.3 180.9,81.8 182.4,81.4 183.9,80.9 185.4,80.4 186.9,79.9 188.5,79.5 190.0,79.0 191.5,78.5 193.0,78.0 194.5,77.5 196.0,77.0 197.5,76.5 199.1,76.1 200.6,75.6 202.1,75.1 203.6,74.6 205.1,74.2 206.6,73.7 208.1,73.3 209.7,72.8 211.2,72.4 212.7,72.0 214.2,71.6 215.7,71.2 217.2,70.8 218.7,70.5 220.3,70.1 221.8,69.8 223.3,69.5 224.8,69.2 226.3,68.9 227.8,68.6 229.3,68.4 230.9,68.2 232.4,68.0 233.9,67.8 235.4,67.6 236.9,67.5 238.4,67.4 239.9,67.3 241.5,67.2 243.0,67.1 244.5,67.1 246.0,67.1\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,38.4 35.5,37.7 37.0,36.9 38.5,36.3 40.1,35.8 41.6,35.3 43.1,35.0 44.6,34.7 46.1,34.5 47.6,34.4 49.1,34.4 50.7,34.4 52.2,34.6 53.7,34.8 55.2,35.2 56.7,35.6 58.2,36.1 59.7,36.7 61.3,37.3 62.8,38.1 64.3,38.9 65.8,39.8 67.3,40.8 68.8,41.9 70.3,43.0 71.9,44.2 73.4,45.5 74.9,46.8 76.4,48.2 77.9,49.7 79.4,51.2 80.9,52.8 82.5,54.4 84.0,56.1 85.5,57.8 87.0,59.6 88.5,61.3 90.0,63.2 91.5,65.0 93.1,66.9 94.6,68.8 96.1,70.7 97.6,72.7 99.1,74.6 100.6,76.6 102.1,78.5 103.7,80.5 105.2,82.5 106.7,84.4 108.2,86.3 109.7,88.2 111.2,90.1 112.7,92.0 114.3,93.8 115.8,95.7 117.3,97.4 118.8,99.2 120.3,100.9 121.8,102.5 123.3,104.1 124.9,105.6 126.4,107.1 127.9,108.6 129.4,109.9 130.9,111.2 132.4,112.5 133.9,113.6 135.5,114.7 137.0,115.7 138.5,116.7 140.0,117.6 141.5,118.3 143.0,119.1 144.5,119.7 146.1,120.2 147.6,120.7 149.1,121.0 150.6,121.3 152.1,121.5 153.6,121.6 155.1,121.6 156.7,121.6 158.2,121.4 159.7,121.2 161.2,120.8 162.7,120.4 164.2,119.9 165.7,119.3 167.3,118.7 168.8,117.9 170.3,117.1 171.8,116.2 173.3,115.2 174.8,114.1 176.3,113.0 177.9,111.8 179.4,110.5 180.9,109.2 182.4,107.8 183.9,106.3 185.4,104.8 186.9,103.2 188.5,101.6 190.0,99.9 191.5,98.2 193.0,96.4 194.5,94.7 196.0,92.8 197.5,91.0 199.1,89.1 200.6,87.2 202.1,85.3 203.6,83.3 205.1,81.4 206.6,79.4 208.1,77.5 209.7,75.5 211.2,73.5 212.7,71.6 214.2,69.7 215.7,67.8 217.2,65.9 218.7,64.0 220.3,62.2 221.8,60.3 223.3,58.6 224.8,56.8 226.3,55.1 227.8,53.5 229.3,51.9 230.9,50.4 232.4,48.9 233.9,47.4 235.4,46.1 236.9,44.8 238.4,43.5 239.9,42.4 241.5,41.3 243.0,40.3 244.5,39.3 246.0,38.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"190\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"190\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">amplitude=4, shift 25&#176; right</text></svg>"},
        { difficulty: 'Hard', question: 'The graph of y = a·sin(kθ) has amplitude 5 and completes exactly 6 full cycles between 0° and 360°. Find the values of a (a > 0) and k.', answer: 'Amplitude = 5, so a = 5.\nCompleting 6 full cycles in 360° means the period = 360°/6 = 60°.\nPeriod = 360°/k, so 60° = 360°/k, which gives k = 6.\nTherefore a = 5 and k = 6, i.e. y = 5sin(6θ).', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"87.0\" y1=\"75.0\" x2=\"87.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"87.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">90°</text><line x1=\"140.0\" y1=\"75.0\" x2=\"140.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"140.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">180°</text><line x1=\"193.0\" y1=\"75.0\" x2=\"193.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"193.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">270°</text><line x1=\"246.0\" y1=\"75.0\" x2=\"246.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"246.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">360°</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 34.6,73.4 35.2,68.9 35.8,64.5 36.4,60.2 36.9,56.2 37.5,52.3 38.1,48.8 38.7,45.6 39.3,42.7 39.9,40.2 40.5,38.1 41.1,36.5 41.7,35.3 42.2,34.6 42.8,34.4 43.4,34.6 44.0,35.3 44.6,36.5 45.2,38.1 45.8,40.2 46.4,42.7 47.0,45.6 47.5,48.8 48.1,52.3 48.7,56.2 49.3,60.2 49.9,64.5 50.5,68.9 51.1,73.4 51.7,78.0 52.3,82.6 52.8,87.1 53.4,91.5 54.0,95.8 54.6,99.8 55.2,103.7 55.8,107.2 56.4,110.4 57.0,113.3 57.6,115.8 58.1,117.9 58.7,119.5 59.3,120.7 59.9,121.4 60.5,121.6 61.1,121.4 61.7,120.7 62.3,119.5 62.9,117.9 63.4,115.8 64.0,113.3 64.6,110.4 65.2,107.2 65.8,103.7 66.4,99.8 67.0,95.8 67.6,91.5 68.2,87.1 68.7,82.6 69.3,78.0 69.9,73.4 70.5,68.9 71.1,64.5 71.7,60.2 72.3,56.2 72.9,52.3 73.5,48.8 74.0,45.6 74.6,42.7 75.2,40.2 75.8,38.1 76.4,36.5 77.0,35.3 77.6,34.6 78.2,34.4 78.8,34.6 79.3,35.3 79.9,36.5 80.5,38.1 81.1,40.2 81.7,42.7 82.3,45.6 82.9,48.8 83.5,52.3 84.1,56.2 84.6,60.2 85.2,64.5 85.8,68.9 86.4,73.4 87.0,78.0 87.6,82.6 88.2,87.1 88.8,91.5 89.4,95.8 89.9,99.8 90.5,103.7 91.1,107.2 91.7,110.4 92.3,113.3 92.9,115.8 93.5,117.9 94.1,119.5 94.7,120.7 95.2,121.4 95.8,121.6 96.4,121.4 97.0,120.7 97.6,119.5 98.2,117.9 98.8,115.8 99.4,113.3 100.0,110.4 100.5,107.2 101.1,103.7 101.7,99.8 102.3,95.8 102.9,91.5 103.5,87.1 104.1,82.6 104.7,78.0 105.3,73.4 105.8,68.9 106.4,64.5 107.0,60.2 107.6,56.2 108.2,52.3 108.8,48.8 109.4,45.6 110.0,42.7 110.6,40.2 111.1,38.1 111.7,36.5 112.3,35.3 112.9,34.6 113.5,34.4 114.1,34.6 114.7,35.3 115.3,36.5 115.9,38.1 116.4,40.2 117.0,42.7 117.6,45.6 118.2,48.8 118.8,52.3 119.4,56.2 120.0,60.2 120.6,64.5 121.2,68.9 121.7,73.4 122.3,78.0 122.9,82.6 123.5,87.1 124.1,91.5 124.7,95.8 125.3,99.8 125.9,103.7 126.5,107.2 127.0,110.4 127.6,113.3 128.2,115.8 128.8,117.9 129.4,119.5 130.0,120.7 130.6,121.4 131.2,121.6 131.8,121.4 132.3,120.7 132.9,119.5 133.5,117.9 134.1,115.8 134.7,113.3 135.3,110.4 135.9,107.2 136.5,103.7 137.1,99.8 137.6,95.8 138.2,91.5 138.8,87.1 139.4,82.6 140.0,78.0 140.6,73.4 141.2,68.9 141.8,64.5 142.4,60.2 142.9,56.2 143.5,52.3 144.1,48.8 144.7,45.6 145.3,42.7 145.9,40.2 146.5,38.1 147.1,36.5 147.7,35.3 148.2,34.6 148.8,34.4 149.4,34.6 150.0,35.3 150.6,36.5 151.2,38.1 151.8,40.2 152.4,42.7 153.0,45.6 153.5,48.8 154.1,52.3 154.7,56.2 155.3,60.2 155.9,64.5 156.5,68.9 157.1,73.4 157.7,78.0 158.3,82.6 158.8,87.1 159.4,91.5 160.0,95.8 160.6,99.8 161.2,103.7 161.8,107.2 162.4,110.4 163.0,113.3 163.6,115.8 164.1,117.9 164.7,119.5 165.3,120.7 165.9,121.4 166.5,121.6 167.1,121.4 167.7,120.7 168.3,119.5 168.9,117.9 169.4,115.8 170.0,113.3 170.6,110.4 171.2,107.2 171.8,103.7 172.4,99.8 173.0,95.8 173.6,91.5 174.2,87.1 174.7,82.6 175.3,78.0 175.9,73.4 176.5,68.9 177.1,64.5 177.7,60.2 178.3,56.2 178.9,52.3 179.5,48.8 180.0,45.6 180.6,42.7 181.2,40.2 181.8,38.1 182.4,36.5 183.0,35.3 183.6,34.6 184.2,34.4 184.8,34.6 185.3,35.3 185.9,36.5 186.5,38.1 187.1,40.2 187.7,42.7 188.3,45.6 188.9,48.8 189.5,52.3 190.1,56.2 190.6,60.2 191.2,64.5 191.8,68.9 192.4,73.4 193.0,78.0 193.6,82.6 194.2,87.1 194.8,91.5 195.4,95.8 195.9,99.8 196.5,103.7 197.1,107.2 197.7,110.4 198.3,113.3 198.9,115.8 199.5,117.9 200.1,119.5 200.7,120.7 201.2,121.4 201.8,121.6 202.4,121.4 203.0,120.7 203.6,119.5 204.2,117.9 204.8,115.8 205.4,113.3 206.0,110.4 206.5,107.2 207.1,103.7 207.7,99.8 208.3,95.8 208.9,91.5 209.5,87.1 210.1,82.6 210.7,78.0 211.3,73.4 211.8,68.9 212.4,64.5 213.0,60.2 213.6,56.2 214.2,52.3 214.8,48.8 215.4,45.6 216.0,42.7 216.6,40.2 217.1,38.1 217.7,36.5 218.3,35.3 218.9,34.6 219.5,34.4 220.1,34.6 220.7,35.3 221.3,36.5 221.9,38.1 222.4,40.2 223.0,42.7 223.6,45.6 224.2,48.8 224.8,52.3 225.4,56.2 226.0,60.2 226.6,64.5 227.2,68.9 227.7,73.4 228.3,78.0 228.9,82.6 229.5,87.1 230.1,91.5 230.7,95.8 231.3,99.8 231.9,103.7 232.5,107.2 233.0,110.4 233.6,113.3 234.2,115.8 234.8,117.9 235.4,119.5 236.0,120.7 236.6,121.4 237.2,121.6 237.8,121.4 238.3,120.7 238.9,119.5 239.5,117.9 240.1,115.8 240.7,113.3 241.3,110.4 241.9,107.2 242.5,103.7 243.1,99.8 243.6,95.8 244.2,91.5 244.8,87.1 245.4,82.6 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"42.8\" y1=\"34.4\" x2=\"42.8\" y2=\"78.0\" stroke=\"#ea580c\" stroke-width=\"1.3\" stroke-dasharray=\"3,2\"/><text x=\"62.8\" y=\"38.4\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"700\">A=5</text><line x1=\"34.0\" y1=\"96.0\" x2=\"34.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"69.3\" y1=\"96.0\" x2=\"69.3\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"96.0\" x2=\"69.3\" y2=\"96.0\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"51.7\" y=\"107.0\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1 cycle, P=60&#176;</text><text x=\"130.0\" y=\"24.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">6 full cycles shown over 0&#176;-360&#176;</text></svg>"},
        { difficulty: 'Hard', question: 'A trigonometric graph has equation y = sin(kθ + p). Its period is 60° and it is the same as y = sin(kθ) shifted 12° to the right. Find the values of k and p, and write down the full equation of the graph.', answer: 'Period = 360°/k = 60°\nk = 360°/60° = 6\n\nA shift of 12° to the right means we replace θ with (θ − 12°) inside y = sin(kθ):\ny = sin(6(θ − 12°)) = sin(6θ − 72°)\nComparing to y = sin(kθ + p): p = −72°\n\nFull equation: y = sin(6θ − 72°)', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"34\" y1=\"78.0\" x2=\"246\" y2=\"78.0\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34\" y1=\"16\" x2=\"34\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.3\"/><line x1=\"34.0\" y1=\"75.0\" x2=\"34.0\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"34.0\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">0°</text><line x1=\"130.4\" y1=\"75.0\" x2=\"130.4\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"130.4\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">P</text><line x1=\"226.7\" y1=\"75.0\" x2=\"226.7\" y2=\"81.0\" stroke=\"#64748b\" stroke-width=\"1.2\"/><text x=\"226.7\" y=\"93.0\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">2P</text><text x=\"248\" y=\"74.0\" font-size=\"10\" fill=\"#64748b\">&#952;</text><text x=\"30\" y=\"14\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"end\">y</text><polyline points=\"34.0,78.0 34.7,76.1 35.4,74.1 36.1,72.2 36.8,70.3 37.5,68.4 38.2,66.5 38.9,64.7 39.7,62.9 40.4,61.1 41.1,59.3 41.8,57.6 42.5,56.0 43.2,54.3 43.9,52.8 44.6,51.2 45.3,49.8 46.0,48.4 46.7,47.0 47.4,45.8 48.1,44.6 48.8,43.4 49.5,42.4 50.3,41.4 51.0,40.5 51.7,39.7 52.4,38.9 53.1,38.3 53.8,37.7 54.5,37.2 55.2,36.8 55.9,36.5 56.6,36.2 57.3,36.1 58.0,36.0 58.7,36.1 59.4,36.2 60.1,36.4 60.9,36.7 61.6,37.1 62.3,37.6 63.0,38.1 63.7,38.8 64.4,39.5 65.1,40.3 65.8,41.2 66.5,42.2 67.2,43.2 67.9,44.4 68.6,45.6 69.3,46.8 70.0,48.1 70.7,49.5 71.5,51.0 72.2,52.5 72.9,54.0 73.6,55.7 74.3,57.3 75.0,59.0 75.7,60.8 76.4,62.6 77.1,64.4 77.8,66.2 78.5,68.1 79.2,70.0 79.9,71.9 80.6,73.8 81.3,75.7 82.1,77.6 82.8,79.6 83.5,81.5 84.2,83.4 84.9,85.3 85.6,87.2 86.3,89.1 87.0,91.0 87.7,92.8 88.4,94.6 89.1,96.3 89.8,98.1 90.5,99.7 91.2,101.4 91.9,103.0 92.7,104.5 93.4,106.0 94.1,107.4 94.8,108.7 95.5,110.0 96.2,111.2 96.9,112.4 97.6,113.4 98.3,114.4 99.0,115.4 99.7,116.2 100.4,117.0 101.1,117.6 101.8,118.2 102.5,118.7 103.3,119.2 104.0,119.5 104.7,119.7 105.4,119.9 106.1,120.0 106.8,119.9 107.5,119.8 108.2,119.6 108.9,119.4 109.6,119.0 110.3,118.5 111.0,118.0 111.7,117.3 112.4,116.6 113.1,115.8 113.9,114.9 114.6,114.0 115.3,113.0 116.0,111.9 116.7,110.7 117.4,109.4 118.1,108.1 118.8,106.7 119.5,105.3 120.2,103.8 120.9,102.2 121.6,100.6 122.3,99.0 123.0,97.3 123.7,95.6 124.5,93.8 125.2,92.0 125.9,90.1 126.6,88.3 127.3,86.4 128.0,84.5 128.7,82.6 129.4,80.6 130.1,78.7 130.8,76.8 131.5,74.8 132.2,72.9 132.9,71.0 133.6,69.1 134.3,67.2 135.1,65.4 135.8,63.5 136.5,61.7 137.2,60.0 137.9,58.2 138.6,56.6 139.3,54.9 140.0,53.3 140.7,51.8 141.4,50.3 142.1,48.9 142.8,47.5 143.5,46.2 144.2,45.0 144.9,43.8 145.7,42.8 146.4,41.7 147.1,40.8 147.8,40.0 148.5,39.2 149.2,38.5 149.9,37.9 150.6,37.3 151.3,36.9 152.0,36.6 152.7,36.3 153.4,36.1 154.1,36.0 154.8,36.0 155.5,36.1 156.3,36.3 157.0,36.6 157.7,36.9 158.4,37.4 159.1,37.9 159.8,38.5 160.5,39.2 161.2,40.0 161.9,40.9 162.6,41.8 163.3,42.8 164.0,43.9 164.7,45.1 165.4,46.3 166.1,47.6 166.9,49.0 167.6,50.4 168.3,51.9 169.0,53.5 169.7,55.1 170.4,56.7 171.1,58.4 171.8,60.1 172.5,61.9 173.2,63.7 173.9,65.5 174.6,67.4 175.3,69.3 176.0,71.2 176.7,73.1 177.5,75.0 178.2,76.9 178.9,78.9 179.6,80.8 180.3,82.7 181.0,84.7 181.7,86.6 182.4,88.4 183.1,90.3 183.8,92.1 184.5,93.9 185.2,95.7 185.9,97.4 186.6,99.1 187.3,100.8 188.1,102.4 188.8,103.9 189.5,105.4 190.2,106.9 190.9,108.2 191.6,109.5 192.3,110.8 193.0,112.0 193.7,113.1 194.4,114.1 195.1,115.0 195.8,115.9 196.5,116.7 197.2,117.4 197.9,118.0 198.7,118.6 199.4,119.0 200.1,119.4 200.8,119.7 201.5,119.8 202.2,120.0 202.9,120.0 203.6,119.9 204.3,119.7 205.0,119.5 205.7,119.1 206.4,118.7 207.1,118.2 207.8,117.6 208.5,116.9 209.3,116.1 210.0,115.3 210.7,114.3 211.4,113.3 212.1,112.3 212.8,111.1 213.5,109.9 214.2,108.6 214.9,107.2 215.6,105.8 216.3,104.3 217.0,102.8 217.7,101.2 218.4,99.6 219.1,97.9 219.9,96.2 220.6,94.4 221.3,92.6 222.0,90.8 222.7,88.9 223.4,87.1 224.1,85.2 224.8,83.3 225.5,81.3 226.2,79.4 226.9,77.5 227.6,75.5 228.3,73.6 229.0,71.7 229.7,69.8 230.5,67.9 231.2,66.0 231.9,64.2 232.6,62.4 233.3,60.6 234.0,58.9 234.7,57.2 235.4,55.5 236.1,53.9 236.8,52.3 237.5,50.8 238.2,49.4 238.9,48.0 239.6,46.7 240.3,45.4 241.1,44.3 241.8,43.1 242.5,42.1 243.2,41.1 243.9,40.3 244.6,39.4 245.3,38.7 246.0,38.1\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><polyline points=\"34.0,117.9 34.7,117.3 35.4,116.6 36.1,115.7 36.8,114.9 37.5,113.9 38.2,112.9 38.9,111.7 39.7,110.6 40.4,109.3 41.1,108.0 41.8,106.6 42.5,105.2 43.2,103.7 43.9,102.1 44.6,100.5 45.3,98.8 46.0,97.1 46.7,95.4 47.4,93.6 48.1,91.8 48.8,90.0 49.5,88.1 50.3,86.2 51.0,84.3 51.7,82.4 52.4,80.5 53.1,78.5 53.8,76.6 54.5,74.7 55.2,72.7 55.9,70.8 56.6,68.9 57.3,67.1 58.0,65.2 58.7,63.4 59.4,61.6 60.1,59.8 60.9,58.1 61.6,56.4 62.3,54.8 63.0,53.2 63.7,51.7 64.4,50.2 65.1,48.8 65.8,47.4 66.5,46.1 67.2,44.9 67.9,43.7 68.6,42.7 69.3,41.7 70.0,40.7 70.7,39.9 71.5,39.1 72.2,38.4 72.9,37.8 73.6,37.3 74.3,36.9 75.0,36.5 75.7,36.3 76.4,36.1 77.1,36.0 77.8,36.0 78.5,36.2 79.2,36.3 79.9,36.6 80.6,37.0 81.3,37.4 82.1,38.0 82.8,38.6 83.5,39.3 84.2,40.1 84.9,41.0 85.6,41.9 86.3,42.9 87.0,44.0 87.7,45.2 88.4,46.5 89.1,47.8 89.8,49.1 90.5,50.6 91.2,52.1 91.9,53.6 92.7,55.2 93.4,56.9 94.1,58.6 94.8,60.3 95.5,62.1 96.2,63.9 96.9,65.7 97.6,67.6 98.3,69.4 99.0,71.3 99.7,73.3 100.4,75.2 101.1,77.1 101.8,79.1 102.5,81.0 103.3,82.9 104.0,84.8 104.7,86.7 105.4,88.6 106.1,90.5 106.8,92.3 107.5,94.1 108.2,95.9 108.9,97.6 109.6,99.3 110.3,100.9 111.0,102.5 111.7,104.1 112.4,105.6 113.1,107.0 113.9,108.4 114.6,109.7 115.3,110.9 116.0,112.1 116.7,113.2 117.4,114.2 118.1,115.1 118.8,116.0 119.5,116.8 120.2,117.5 120.9,118.1 121.6,118.6 122.3,119.1 123.0,119.4 123.7,119.7 124.5,119.9 125.2,120.0 125.9,120.0 126.6,119.9 127.3,119.7 128.0,119.4 128.7,119.1 129.4,118.7 130.1,118.1 130.8,117.5 131.5,116.8 132.2,116.0 132.9,115.2 133.6,114.3 134.3,113.2 135.1,112.2 135.8,111.0 136.5,109.8 137.2,108.5 137.9,107.1 138.6,105.7 139.3,104.2 140.0,102.7 140.7,101.1 141.4,99.4 142.1,97.8 142.8,96.0 143.5,94.3 144.2,92.5 144.9,90.6 145.7,88.8 146.4,86.9 147.1,85.0 147.8,83.1 148.5,81.2 149.2,79.2 149.9,77.3 150.6,75.4 151.3,73.4 152.0,71.5 152.7,69.6 153.4,67.7 154.1,65.9 154.8,64.0 155.5,62.2 156.3,60.4 157.0,58.7 157.7,57.0 158.4,55.4 159.1,53.8 159.8,52.2 160.5,50.7 161.2,49.3 161.9,47.9 162.6,46.6 163.3,45.3 164.0,44.1 164.7,43.0 165.4,42.0 166.1,41.1 166.9,40.2 167.6,39.4 168.3,38.7 169.0,38.0 169.7,37.5 170.4,37.0 171.1,36.6 171.8,36.4 172.5,36.2 173.2,36.1 173.9,36.0 174.6,36.1 175.3,36.3 176.0,36.5 176.7,36.8 177.5,37.3 178.2,37.8 178.9,38.4 179.6,39.0 180.3,39.8 181.0,40.6 181.7,41.6 182.4,42.6 183.1,43.6 183.8,44.8 184.5,46.0 185.2,47.3 185.9,48.6 186.6,50.0 187.3,51.5 188.1,53.0 188.8,54.6 189.5,56.3 190.2,57.9 190.9,59.7 191.6,61.4 192.3,63.2 193.0,65.0 193.7,66.9 194.4,68.8 195.1,70.7 195.8,72.6 196.5,74.5 197.2,76.4 197.9,78.4 198.7,80.3 199.4,82.2 200.1,84.1 200.8,86.0 201.5,87.9 202.2,89.8 202.9,91.6 203.6,93.4 204.3,95.2 205.0,97.0 205.7,98.7 206.4,100.3 207.1,102.0 207.8,103.5 208.5,105.0 209.3,106.5 210.0,107.9 210.7,109.2 211.4,110.4 212.1,111.6 212.8,112.8 213.5,113.8 214.2,114.8 214.9,115.7 215.6,116.5 216.3,117.2 217.0,117.9 217.7,118.4 218.4,118.9 219.1,119.3 219.9,119.6 220.6,119.8 221.3,119.9 222.0,120.0 222.7,119.9 223.4,119.8 224.1,119.5 224.8,119.2 225.5,118.8 226.2,118.3 226.9,117.7 227.6,117.1 228.3,116.3 229.0,115.5 229.7,114.6 230.5,113.6 231.2,112.6 231.9,111.4 232.6,110.2 233.3,109.0 234.0,107.6 234.7,106.2 235.4,104.8 236.1,103.2 236.8,101.7 237.5,100.0 238.2,98.4 238.9,96.7 239.6,94.9 240.3,93.1 241.1,91.3 241.8,89.5 242.5,87.6 243.2,85.7 243.9,83.8 244.6,81.9 245.3,79.9 246.0,78.0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"188\" y=\"24\" font-size=\"9.5\" fill=\"#94a3b8\">- - - base</text><text x=\"188\" y=\"36\" font-size=\"9.5\" fill=\"#2563eb\" font-weight=\"700\">— shifted</text><text x=\"130.0\" y=\"164\" font-size=\"10.5\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">shift = 12&#176; right</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered reduction formulae, general solutions, the sine/cosine/area rules and trig graph features.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the sine rule, cosine rule or trig graphs, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on reduction formulae and general solutions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  topicPractice: [
    // ── Q1 Easy — exact value sin 30° ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'State the exact value of sin 30°.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      explanation: 'Using the 30-60-90 special triangle: sin 30° = opposite/hypotenuse = 1/2 ✓',
    },

    // ── Q2 Easy — exact value cos 45° ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'State the exact value of cos 45°.',
      answer: '√2/2',
      checkMode: 'auto',
      correctAnswer: '√2/2',
      correctAnswers: ['√2/2', 'root2/2', '1/√2'],
      explanation: 'Using the 45-45-90 special triangle: cos 45° = adjacent/hypotenuse = 1/√2 = √2/2 ✓',
    },

    // ── Q3 Medium — exact value tan 60° ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State the exact value of tan 60°.',
      answer: '√3',
      checkMode: 'auto',
      correctAnswer: '√3',
      explanation: 'Using the 30-60-90 triangle: tan 60° = opposite/adjacent = √3/1 = √3 ✓',
    },

    // ── Q4 Hard — Sipho's claim about sin 60° ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says sin 60° = 2 × sin 30°. Is he correct? Explain.',
      answer: 'No — sin 60° = √3/2 ≈ 0.866, while 2 × sin 30° = 2 × 0.5 = 1. They are not equal.',
      checkMode: 'self',
    },

    // ── Q5 Medium — prove the Pythagorean identity ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Prove that sin²θ + cos²θ = 1 using the definitions sinθ = y/r and cosθ = x/r.',
      answer: 'sinθ = y/r, cosθ = x/r. sin²θ + cos²θ = (y/r)² + (x/r)² = (y² + x²)/r². Since x² + y² = r² (Pythagoras), this simplifies to r²/r² = 1.',
      checkMode: 'self',
    },

    // ── Q6 Hard — find sinθ using the Pythagorean identity ───────────────────
    {
      difficulty: 'Hard',
      question: 'If cosθ = 5/13 and θ is in the first quadrant, find sinθ.',
      answer: 'sin²θ = 1 − 25/169 = 144/169. sinθ = 12/13.',
      checkMode: 'self',
    },

    // ── Q7 Medium — period of y = sin(3θ) ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the period of y = sin(3θ).',
      answer: '120°',
      checkMode: 'auto',
      correctAnswer: '120°',
      explanation: 'Period = 360°/k = 360°/3 = 120° ✓',
    },

    // ── Q8 Hard — transformation of y = cos(θ + 60°) ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Describe the transformation of y = cos(θ + 60°) compared to y = cosθ.',
      answer: 'Horizontal shift of 60° to the left.',
      checkMode: 'self',
    },

    // ── Q9 Easy — reduction formula sin(180° − 50°) ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Use a reduction formula to simplify sin(180° − 50°).',
      answer: 'sin 50°',
      checkMode: 'auto',
      correctAnswer: 'sin50°',
      correctAnswers: ['sin50°', 'sin 50°', 'sin(50°)'],
      explanation: 'sin(180° − θ) = sinθ, so sin(180° − 50°) = sin 50° ✓',
    },

    // ── Q10 Medium — reduction formula cos(180° + 35°) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Use a reduction formula to simplify cos(180° + 35°).',
      answer: '−cos 35°',
      checkMode: 'auto',
      correctAnswer: '-cos35°',
      correctAnswers: ['-cos35°', '-cos 35°', '−cos35°', '−cos 35°'],
      explanation: 'cos(180° + θ) = −cosθ, so cos(180° + 35°) = −cos 35° ✓',
    },

    // ── Q11 Hard — simplify using reduction formulae ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Simplify sin(360° − θ) / cos(−θ) using reduction formulae.',
      answer: 'sin(360° − θ) = −sinθ. cos(−θ) = cosθ. Result: −sinθ/cosθ = −tanθ.',
      checkMode: 'self',
    },

    // ── Q12 Easy — general solution sinθ = √3/2 ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the general solution of sinθ = √3/2.',
      answer: 'θ = 60° + 360°n or θ = 120° + 360°n, n ∈ ℤ',
      checkMode: 'auto',
      correctAnswer: 'θ=60°+360°n or θ=120°+360°n, n∈ℤ',
      correctAnswers: ['θ=60°+360°n or θ=120°+360°n, n∈ℤ', '60°+360°n or 120°+360°n', 'θ=60+360n or θ=120+360n'],
      explanation: 'Reference angle = sin⁻¹(√3/2) = 60°. sinθ is positive → Q1 and Q2.\nθ = 60° + 360°n or θ = 120° + 360°n, n ∈ ℤ ✓',
    },

    // ── Q13 Medium — general solution cosθ = −√2/2 ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the general solution of cosθ = −√2/2.',
      answer: 'θ = 135° + 360°n or θ = 225° + 360°n, n ∈ ℤ (equivalently ±135° + 360°n)',
      checkMode: 'auto',
      correctAnswer: 'θ=135°+360°n or θ=225°+360°n',
      correctAnswers: ['θ=135°+360°n or θ=225°+360°n', '±135°+360°n', 'θ=±135°+360°n'],
      explanation: 'Reference angle = cos⁻¹(√2/2) = 45°. cosθ is negative → Q2 and Q3.\nQ2: θ = 180° − 45° = 135°. Q3: θ = 180° + 45° = 225°.\nGeneral solution: θ = 135° + 360°n or θ = 225° + 360°n, n ∈ ℤ ✓',
    },

    // ── Q14 Hard — general solution tanθ = −1 ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the general solution of tanθ = −1, showing your reference angle reasoning.',
      answer: 'Reference angle = 45°. Since tan is negative, θ = 180° − 45° = 135° as the base solution. General solution: θ = 135° + 180°n, n ∈ ℤ.',
      checkMode: 'self',
    },

    // ── Q15 Medium — Sine Rule ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In triangle ABC, A = 35°, B = 70°, a = 12 cm. Find side b using the Sine Rule.',
      answer: '19.95 cm',
      checkMode: 'auto',
      correctAnswer: '19.95cm',
      correctAnswers: ['19.95cm', '19.95 cm', '≈19.95cm', '≈ 19.95 cm', '19.9cm', '20cm'],
      explanation: 'Sine Rule: a/sinA = b/sinB\n12/sin35° = b/sin70°\nb = 12 × sin70°/sin35° = 12 × 0.9397/0.5736 ≈ 19.95 cm ✓',
    },

    // ── Q16 Hard — Cosine Rule ────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'In triangle ABC, b = 7 cm, c = 9 cm, A = 60°. Find side a using the Cosine Rule.',
      answer: 'a² = 49 + 81 − 2(7)(9)cos60° = 130 − 63 = 67. a ≈ 8.19 cm.',
      checkMode: 'self',
    },

    // ── Q17 Medium — Area Rule ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the area of a triangle with sides a = 8 cm, b = 11 cm, and included angle C = 45°.',
      answer: '31.11 cm²',
      checkMode: 'auto',
      correctAnswer: '31.11cm²',
      correctAnswers: ['31.11cm²', '31.11 cm²', '≈31.11cm²', '≈ 31.11 cm²', '31.1cm²'],
      explanation: 'Area = ½ × a × b × sinC = ½ × 8 × 11 × sin45° = ½ × 88 × (√2/2) ≈ 31.11 cm² ✓',
    },

    // ── Q18 Medium — deriving the height h in the Area Rule proof ────────────
    {
      difficulty: 'Medium',
      question: 'In triangle ABC, a height h is dropped from vertex A onto side BC, meeting it at D. Triangle ADC is right-angled at D, with AC = 10 cm and angle C = 42°. Derive an expression for h and calculate its value.',
      answer: '6.69 cm',
      checkMode: 'auto',
      correctAnswer: '6.69cm',
      correctAnswers: ['6.69cm', '6.69 cm', '≈6.69cm', '≈ 6.69 cm', '6.7cm'],
      explanation: 'In right triangle ADC: sinC = h/AC, so h = AC × sinC = 10 × sin42° ≈ 10 × 0.6691 ≈ 6.69 cm ✓',
    },

    // ── Q19 Hard — full cosine rule derivation ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Starting from h² = c² − (c cosA)² and h² = a² − (b − c cosA)², show all algebraic steps to derive a² = b² + c² − 2bc cosA.',
      answer: 'Set the two expressions equal: c² − (c cosA)² = a² − (b − c cosA)².\nExpand the right side: a² − [b² − 2bc cosA + (c cosA)²] = a² − b² + 2bc cosA − (c cosA)².\nThe (c cosA)² terms cancel from both sides, leaving c² = a² − b² + 2bc cosA.\nRearrange to isolate a²: a² = b² + c² − 2bc cosA ✓',
      checkMode: 'self',
    },

    // ── Q20 Hard — intersection of crossing ropes ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two flagpoles 20 m apart have heights 8 m and 12 m. Ropes connect the top of each to the foot of the other. Find the height of their intersection above the ground.',
      answer: 'Intersection height = 8 × 12 / (8 + 12) = 96/20 = 4.8 m.',
      checkMode: 'self',
    },

    // ── Q21 Hard — surveyor two-equation setup ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A surveyor measures the angle of elevation to a tower as 20° from point A, then walks 40 m closer to point B and measures 35°. Set up the two equations needed to solve for the tower\'s height, without solving fully.',
      answer: 'Let height = h, distance from B to base = d. Equation 1 (from B): tan35° = h/d. Equation 2 (from A): tan20° = h/(d + 40).',
      checkMode: 'self',
    },

    // ── Q22 Hard — triangular field area and third side ───────────────────────
    {
      difficulty: 'Hard',
      question: 'A triangular field has two sides of 35 m and 50 m with an included angle of 65°. Find the area of the field and the length of the third side.',
      answer: 'Area = ½(35)(50)sin65° ≈ 792.6 m². Third side: side² = 35² + 50² − 2(35)(50)cos65° ≈ 1225 + 2500 − 1478.4 = 2246.6. side ≈ 47.4 m.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 22,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered trigonometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered Grade 11 Trigonometry. Keep up the excellent work!' },
    { minScore: 15, message: 'Excellent work! You have a very strong grasp of trigonometry. Review any missed parts and you will have it perfect.' },
    { minScore: 11, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — trigonometry takes practice! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
