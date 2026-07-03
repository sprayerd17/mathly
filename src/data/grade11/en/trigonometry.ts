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
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Right-angled triangle labelled with x, y and r showing the definitions sinθ = y/r in blue, cosθ = x/r in orange, and tanθ = y/x, with the derived Pythagorean identity sin²θ + cos²θ = 1 highlighted in green" />',

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
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step how to find the general solution of sinθ = k, cosθ = k, and tanθ = k, including identifying the reference angle and writing the complete general solution with n ∈ ℤ" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — THE SINE, COSINE AND AREA RULES
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="A non-right-angled triangle ABC with sides a, b, c and angles A, B, C labelled in blue — showing the Sine Rule ratio a/sinA = b/sinB highlighted in orange, the Cosine Rule a² = b² + c² − 2bc·cosA in orange, and the Area Rule ½ab·sinC in orange, with the calculated value in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining when and how to use the Sine Rule, Cosine Rule and Area Rule for non-right-angled triangles, with one fully worked example for each rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — SOLVING 2D PROBLEMS USING TRIGONOMETRIC MODELS
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
        '<DiagramPlaceholder label="Three sub-diagrams side by side: (1) two flagpoles 30 m apart with crossing ropes and intersection height h labelled in blue, intermediate proportion in orange, answer 6 m in green; (2) surveyor scenario with tower, angles 25° and 40° in blue, distance d in orange, height h ≈ 34.8 m in green; (3) triangular plot with sides 45 m and 60 m and angle 55° in blue, area and third side calculations in orange, final answers in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video walking through multi-step 2D trigonometry problems — the crossing ropes intersection height, the angle-of-elevation tower problem solved simultaneously, and the triangular plot using the Area and Cosine Rules" />',
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

    // ── Q18 Hard — intersection of crossing ropes ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two flagpoles 20 m apart have heights 8 m and 12 m. Ropes connect the top of each to the foot of the other. Find the height of their intersection above the ground.',
      answer: 'Intersection height = 8 × 12 / (8 + 12) = 96/20 = 4.8 m.',
      checkMode: 'self',
    },

    // ── Q19 Hard — surveyor two-equation setup ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A surveyor measures the angle of elevation to a tower as 20° from point A, then walks 40 m closer to point B and measures 35°. Set up the two equations needed to solve for the tower\'s height, without solving fully.',
      answer: 'Let height = h, distance from B to base = d. Equation 1 (from B): tan35° = h/d. Equation 2 (from A): tan20° = h/(d + 40).',
      checkMode: 'self',
    },

    // ── Q20 Hard — triangular field area and third side ───────────────────────
    {
      difficulty: 'Hard',
      question: 'A triangular field has two sides of 35 m and 50 m with an included angle of 65°. Find the area of the field and the length of the third side.',
      answer: 'Area = ½(35)(50)sin65° ≈ 792.6 m². Third side: side² = 35² + 50² − 2(35)(50)cos65° ≈ 1225 + 2500 − 1478.4 = 2246.6. side ≈ 47.4 m.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered trigonometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered Grade 11 Trigonometry. Keep up the excellent work!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of trigonometry. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 5, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — trigonometry takes practice! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
