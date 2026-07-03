import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// blue   → CAST quadrant signs / first-angle components / double-angle formula used
// orange → reduction formula applied / second-angle components / substitution
// green  → final value / expanded form / simplified result
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Trigonometry',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: SPECIAL ANGLES, IDENTITIES AND REDUCTION FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-special-angles-identities',
      title: 'Revision — Special Angles, Identities and Reduction Formulae',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 12 we build on the trigonometry studied in Grade 11. This section revises the <strong>special angles</strong>, <strong>fundamental identities</strong>, <strong>CAST rule</strong>, and <strong>reduction formulae</strong> needed for all Grade 12 trig work.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('CAST quadrant signs')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reduction formula applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final value')}</span>` +
        `</div>` +

        // ── Special angles table ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Special angles</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;width:100%;font-size:14px;text-align:center;">` +
        `<thead><tr style="background:#f1f5f9;">` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">θ</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">30°</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">45°</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">60°</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">sin θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('½')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√2 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3 / 2')}</td>` +
        `</tr>` +
        `<tr style="background:#f8fafc;">` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">cos θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√2 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('½')}</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">tan θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('1 / √3')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('1')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3')}</td>` +
        `</tr>` +
        `</tbody></table>` +
        `</div>` +

        // ── Fundamental identities ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Fundamental identities</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;font-size:1.05em;margin-bottom:4px;">tan θ = sin θ / cos θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Quotient identity</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#166534;font-size:1.05em;margin-bottom:4px;">sin²θ + cos²θ = 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Pythagorean identity</p>` +
        `</div>` +

        `</div>` +

        // ── CAST rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The CAST rule — signs by quadrant</p>` +
        `<p style="margin-bottom:12px;">The sign of any trig ratio depends on which <strong>quadrant</strong> the angle falls in. CAST is read <strong>anti-clockwise</strong> starting from Quadrant 4: ${bl('C')}os → ${bl('A')}ll → ${bl('S')}in → ${bl('T')}an.</p>` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-width:340px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px;text-align:center;order:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Quadrant 2</p>` +
        `<p style="font-weight:800;color:#7c3aed;font-size:1.3em;margin-bottom:2px;">${bl('S')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Sin')} positive</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px;text-align:center;order:2;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Quadrant 1</p>` +
        `<p style="font-weight:800;color:#dc2626;font-size:1.3em;margin-bottom:2px;">${bl('A')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('All')} positive</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px;text-align:center;order:3;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Quadrant 3</p>` +
        `<p style="font-weight:800;color:#16a34a;font-size:1.3em;margin-bottom:2px;">${bl('T')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Tan')} positive</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px;text-align:center;order:4;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Quadrant 4</p>` +
        `<p style="font-weight:800;color:#2563eb;font-size:1.3em;margin-bottom:2px;">${bl('C')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Cos')} positive</p>` +
        `</div>` +

        `</div>` +

        // ── Reduction formulae ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reduction formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">180° − θ &nbsp;(Quadrant 2)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(180°−θ)')} = ${gr('sinθ')}<br>${or('cos(180°−θ)')} = ${gr('−cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">180° + θ &nbsp;(Quadrant 3)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(180°+θ)')} = ${gr('−sinθ')}<br>${or('cos(180°+θ)')} = ${gr('−cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">360° − θ &nbsp;(Quadrant 4)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(360°−θ)')} = ${gr('−sinθ')}<br>${or('cos(360°−θ)')} = ${gr('cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">Negative angles</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(−θ)')} = ${gr('−sinθ')}<br>${or('cos(−θ)')} = ${gr('cosθ')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for any reduction</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always ${or('identify the reference form')} (180°±θ, 360°−θ, or −θ), then apply the correct sign from the ${bl('CAST')} rule to obtain the ${gr('final reduced expression')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evaluate sin(210°) exactly using reduction formulae.',
          answer: `sin(210°) = ${gr('−½')}`,
          steps: [
            `Write 210° in terms of a reference angle: ${or('210° = 180° + 30°')} — this is in ${bl('Quadrant 3')} where ${bl('only tan is positive')}, so sin is ${bl('negative')}.`,
            `Apply the reduction formula: ${or('sin(180°+θ) = −sinθ')}.`,
            `Substitute θ = 30°: ${or('sin(180°+30°) = −sin30°')}.`,
            `<strong>Answer:</strong> sin(210°) = ${gr('−½')} ✓`,
          ],
        },
        {
          question: 'Simplify sin(360°−θ)·cos(−θ) / tan(180°+θ).',
          answer: `${gr('−cos²θ')}`,
          steps: [
            `Apply reduction formulae to each ratio separately. ${or('sin(360°−θ) = −sinθ')} (${bl('Quadrant 4')}: sin negative).`,
            `${or('cos(−θ) = cosθ')} (negative angle formula: cos is an even function).`,
            `${or('tan(180°+θ) = tanθ')} (${bl('Quadrant 3')}: tan positive).`,
            `Substitute: expression = (${or('−sinθ')}) · cosθ / tanθ.`,
            `Replace tanθ with sinθ/cosθ: = −sinθ · cosθ ÷ (sinθ/cosθ) = −sinθ · cosθ · (cosθ/sinθ).`,
            `Cancel sinθ: = ${gr('−cos²θ')} ✓`,
          ],
        },
        {
          question: 'If sinθ = 3/5 and θ is in Quadrant 2, find cosθ and tanθ.',
          answer: `cosθ = ${gr('−4/5')}, &nbsp;tanθ = ${gr('−3/4')}`,
          steps: [
            `Use the Pythagorean identity: sin²θ + cos²θ = 1.`,
            `Substitute: (3/5)² + cos²θ = 1 &nbsp;→&nbsp; cos²θ = 1 − 9/25 = ${or('16/25')}.`,
            `In ${bl('Quadrant 2')}, cos is ${bl('negative')}: cosθ = ${gr('−4/5')}.`,
            `Apply the quotient identity: tanθ = sinθ/cosθ = (3/5)/(−4/5) = ${gr('−3/4')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Evaluate cos(300°) exactly using reduction formulae.',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          correctAnswers: ['1/2', '0.5'],
          explanation: '300° = 360° − 60° → Quadrant 4 where cos is positive.\ncos(360°−60°) = cos60° = 1/2 ✓',
        },

        {
          difficulty: 'Medium',
          question: 'Simplify each expression fully.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin(180°+θ) / cos(360°−θ)',
              correctAnswer: '−tanθ',
              correctAnswers: ['-tanθ', '-tan(θ)', '−tanθ', '−tan(θ)', '-tan θ'],
              explanation: 'sin(180°+θ) = −sinθ  (Q3: sin negative)\ncos(360°−θ) = cosθ  (Q4: cos positive)\n→ (−sinθ)/cosθ = −tanθ ✓',
            },
            {
              label: 'b) cos(−θ)·tan(180°+θ)',
              correctAnswer: 'sinθ',
              correctAnswers: ['sinθ', 'sin(θ)', 'sin θ'],
              explanation: 'cos(−θ) = cosθ  (negative angle formula)\ntan(180°+θ) = tanθ  (Q3: tan positive)\n→ cosθ·(sinθ/cosθ) = sinθ ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'If cosα = −5/13 and α is in Quadrant 3, find sinα and tanα. Hence evaluate sin(180°−α).',
          answer: 'Step 1: sin²α = 1 − 25/169 = 144/169. In Q3, sin is negative, so sinα = −12/13.\nStep 2: tanα = sinα/cosα = (−12/13)/(−5/13) = 12/5.\nStep 3: sin(180°−α) = sinα = −12/13.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising special angles, the CAST rule, and how to apply reduction formulae to simplify trig expressions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-angle-identities',
      title: 'Compound Angle Identities',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>compound angle identities</strong> express the trig ratios of a sum or difference of two angles in terms of the individual ratios of each angle. They are used to expand, simplify, or recognise combined trig expressions — and can also be applied in reverse.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first angle components')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second angle components')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('expanded form')}</span>` +
        `</div>` +

        // ── Formulae ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Compound angle formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">sin(α ± β)</p>` +
        `<p style="margin:0;font-size:14px;line-height:2;">${gr('sin(α+β)')} = ${bl('sinα · cosβ')} + ${or('cosα · sinβ')}<br>${gr('sin(α−β)')} = ${bl('sinα · cosβ')} − ${or('cosα · sinβ')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">cos(α ± β)</p>` +
        `<p style="margin:0;font-size:14px;line-height:2;">${gr('cos(α+β)')} = ${bl('cosα · cosβ')} − ${or('sinα · sinβ')}<br>${gr('cos(α−β)')} = ${bl('cosα · cosβ')} + ${or('sinα · sinβ')}</p>` +
        `</div>` +

        `</div>` +

        // ── Sign pattern tip ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Notice the sign patterns</p>` +
        `<p style="margin:0;color:#1e3a8a;">For ${bl('sin')}: the sign in the expansion <strong>matches</strong> the sign in the bracket (+ stays +, − stays −).<br>For ${gr('cos')}: the sign in the expansion is the <strong>opposite</strong> (+ becomes −, − becomes +).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Expand sin(A + 30°) using the compound angle identity.',
          answer: `${gr('sin(A+30°) = (√3 sinA + cosA) / 2')}`,
          steps: [
            `Apply the identity: ${gr('sin(A+30°)')} = ${bl('sinA · cos30°')} + ${or('cosA · sin30°')}.`,
            `Substitute special angle values: ${bl('cos30°')} = ${bl('√3/2')} and ${or('sin30°')} = ${or('1/2')}.`,
            `= ${bl('sinA · (√3/2)')} + ${or('cosA · (1/2)')}.`,
            `<strong>Answer:</strong> ${gr('sin(A+30°) = (√3 sinA + cosA)/2')} ✓`,
          ],
        },
        {
          question: 'Show that sin75° = (√6+√2)/4, using sin(45°+30°).',
          answer: `${gr('sin75° = (√6 + √2)/4')}`,
          steps: [
            `Write sin75° = ${or('sin(45°+30°)')}.`,
            `Apply: ${or('sin(45°+30°)')} = ${bl('sin45° · cos30°')} + ${or('cos45° · sin30°')}.`,
            `Substitute: = ${bl('(√2/2) · (√3/2)')} + ${or('(√2/2) · (1/2)')}.`,
            `= ${bl('√6/4')} + ${or('√2/4')}.`,
            `<strong>Answer:</strong> ${gr('sin75° = (√6+√2)/4')} ✓`,
          ],
        },
        {
          question: 'Expand and simplify cos(x+y)·cos(x−y).',
          answer: `${gr('cos²x·cos²y − sin²x·sin²y')}`,
          steps: [
            `Expand ${bl('cos(x+y)')} = ${bl('cosxcosy − sinxsiny')}.`,
            `Expand ${or('cos(x−y)')} = ${or('cosxcosy + sinxsiny')}.`,
            `Multiply: (${bl('cosxcosy − sinxsiny')})(${or('cosxcosy + sinxsiny')}).`,
            `This is a difference of squares (a−b)(a+b) = a²−b² with a = cosxcosy, b = sinxsiny.`,
            `<strong>Answer:</strong> ${gr('cos²xcos²y − sin²xsin²y')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Expand cos(A − 45°) using the compound angle identity. Leave your answer in simplified surd form.',
          answer: '(cosA + sinA)/√2',
          checkMode: 'self',
        },

        {
          difficulty: 'Medium',
          question: 'Use compound angle formulae to find each exact value.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) cos15° using cos(45°−30°)',
              correctAnswer: '(√6+√2)/4',
              correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'],
              explanation: 'cos(45°−30°) = cos45°cos30° + sin45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4 = (√6+√2)/4 ✓',
            },
            {
              label: 'b) sin105° using sin(60°+45°)',
              correctAnswer: '(√6+√2)/4',
              correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'],
              explanation: 'sin(60°+45°) = sin60°cos45° + cos60°sin45°\n= (√3/2)(√2/2) + (1/2)(√2/2)\n= √6/4 + √2/4 = (√6+√2)/4 ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'Prove that cos(x+y) + cos(x−y) = 2cosxcosy.',
          answer: 'LHS = (cosxcosy − sinxsiny) + (cosxcosy + sinxsiny)\n= 2cosxcosy − sinxsiny + sinxsiny\n= 2cosxcosy\n= RHS ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the compound angle identities for sin and cos with worked examples showing expansion and exact value calculations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DOUBLE ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'double-angle-identities',
      title: 'Double Angle Identities',
      icon: '2θ',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>double angle identities</strong> are special cases of the compound angle identities where both angles are equal (α = β). They are extremely useful for simplifying expressions and solving equations.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('double angle formula used')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('substitution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified result')}</span>` +
        `</div>` +

        // ── Formulae ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Double angle formulae</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">sin 2α</p>` +
        `<p style="margin:0;font-size:14px;">${bl('sin 2α')} = ${gr('2 sinα cosα')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">cos 2α — three equivalent forms</p>` +
        `<p style="margin:0;font-size:14px;line-height:2.1;">${bl('cos 2α')} = ${gr('cos²α − sin²α')}<br>${bl('cos 2α')} = ${gr('1 − 2sin²α')}<br>${bl('cos 2α')} = ${gr('2cos²α − 1')}</p>` +
        `</div>` +

        `</div>` +

        // ── Which form to use ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Which form of cos 2α should you use?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;font-size:0.9em;">cos²α − sin²α</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Use when both sinα and cosα already appear in the expression.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:0.9em;">1 − 2sin²α</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Use when you want to eliminate cos²α, replacing it via sin².</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;font-size:0.9em;">2cos²α − 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Use when you want to eliminate sin²α, replacing it via cos².</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Deriving the alternative forms</p>` +
        `<p style="margin:0;color:#1e3a8a;">Start from cos²α − sin²α. Replace ${or('cos²α = 1 − sin²α')} to get <strong>1 − 2sin²α</strong>, or replace ${or('sin²α = 1 − cos²α')} to get <strong>2cos²α − 1</strong>. All three forms are equivalent — choose whichever makes the algebra simplest.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'If sinα = 5/13 and α is acute, find sin2α and cos2α.',
          answer: `sin2α = ${gr('120/169')}, &nbsp;cos2α = ${gr('119/169')}`,
          steps: [
            `Since α is acute and ${or('sinα = 5/13')}, find cosα using sin²α + cos²α = 1.`,
            `cos²α = 1 − (5/13)² = 1 − 25/169 = ${or('144/169')}. Since α is acute, cosα = ${or('12/13')}.`,
            `Apply ${bl('sin2α = 2sinαcosα')}: = 2 · (5/13) · (12/13) = ${gr('120/169')}.`,
            `Apply ${bl('cos2α = cos²α − sin²α')}: = (144/169) − (25/169) = ${gr('119/169')} ✓`,
          ],
        },
        {
          question: 'Prove that sin2α / (1 + cos2α) = tanα.',
          answer: `${gr('LHS = tanα = RHS ✓')}`,
          steps: [
            `Write LHS using ${bl('sin2α')} and ${bl('cos2α')}: LHS = ${bl('sin2α')} / (1 + ${bl('cos2α')}).`,
            `Substitute ${or('sin2α = 2sinαcosα')} and ${or('cos2α = 2cos²α − 1')}.`,
            `Simplify the denominator: 1 + (2cos²α − 1) = ${or('2cos²α')}.`,
            `LHS = ${or('2sinαcosα')} / ${or('2cos²α')} = sinα/cosα = ${gr('tanα')} = RHS ✓`,
          ],
        },
        {
          question: 'Solve for α (0° ≤ α ≤ 360°): cos2α = cosα.',
          answer: `α = ${gr('0°, 120°, 240°, 360°')}`,
          steps: [
            `Use ${bl('cos2α = 2cos²α − 1')} to write entirely in terms of cosα: ${or('2cos²α − 1 = cosα')}.`,
            `Rearrange: ${or('2cos²α − cosα − 1 = 0')}.`,
            `Factorise: ${or('(2cosα + 1)(cosα − 1) = 0')}.`,
            `So cosα = ${gr('−½')} or cosα = ${gr('1')}.`,
            `cosα = −½: reference angle = 60°. ${bl('Quadrant 2')}: α = ${gr('120°')}; ${bl('Quadrant 3')}: α = ${gr('240°')}.`,
            `cosα = 1: α = ${gr('0°')} or α = ${gr('360°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'If cosα = 3/5 and α is acute, calculate the exact value of sin2α.',
          answer: '24/25',
          checkMode: 'auto',
          correctAnswer: '24/25',
          explanation: 'sinα = 4/5  (using sin²α + cos²α = 1, α acute)\nsin2α = 2sinαcosα = 2·(4/5)·(3/5) = 24/25 ✓',
        },

        {
          difficulty: 'Medium',
          question: 'Simplify each expression using double angle identities.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2sin3x · cos3x',
              correctAnswer: 'sin6x',
              correctAnswers: ['sin6x', 'sin(6x)', 'sin 6x'],
              explanation: '2sinθcosθ = sin2θ, with θ = 3x.\n→ 2sin3xcos3x = sin(2·3x) = sin6x ✓',
            },
            {
              label: 'b) 1 − 2sin²(x/2)',
              correctAnswer: 'cosx',
              correctAnswers: ['cosx', 'cos(x)', 'cos x'],
              explanation: '1 − 2sin²α = cos2α, with α = x/2.\n→ 1 − 2sin²(x/2) = cos(2·x/2) = cosx ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'Solve for x (0° ≤ x ≤ 360°): sin2x = sinx.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Use sin2x = 2sinxcosx to rewrite as 2sinxcosx − sinx = 0.',
              correctAnswer: 'sinx(2cosx-1)=0',
              correctAnswers: ['sinx(2cosx-1)=0', 'sin x(2cos x - 1) = 0', '2sinxcosx−sinx=0', '2sinxcosx - sinx = 0'],
              explanation: 'sin2x = 2sinxcosx\n2sinxcosx − sinx = 0\nFactorise: sinx(2cosx − 1) = 0 ✓',
            },
            {
              label: 'b) Solve sinx = 0.',
              correctAnswer: '0, 180, 360',
              correctAnswers: ['0°, 180°, 360°', 'x = 0, 180, 360', '0, 180, 360', 'x=0,180,360'],
              explanation: 'sinx = 0 → x = 0°, 180°, 360° ✓',
            },
            {
              label: 'c) Solve 2cosx − 1 = 0 (i.e. cosx = 1/2).',
              correctAnswer: '60, 300',
              correctAnswers: ['60°, 300°', 'x = 60, 300', '60, 300', 'x=60,300'],
              explanation: 'cosx = 1/2 → reference angle = 60°.\nQ1: x = 60°;  Q4: x = 300°.\nFull solution: x = 0°, 60°, 180°, 300°, 360° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving the double angle identities from compound angles and applying them to simplify expressions and solve trig equations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING TRIG EQUATIONS USING COMPOUND AND DOUBLE ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-trig-equations-compound-double',
      title: 'Solving Trigonometric Equations Using Compound and Double Angle Identities',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We extend the general solution techniques from Grade 11 to solve equations that first require simplification using <strong>compound or double angle identities</strong> before applying the standard solution methods. The key strategy is to rewrite the equation in terms of a <strong>single trig ratio</strong> before solving.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('identity substitution')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('factorised form')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('all solutions')}</span>` +
        `</div>` +

        // ── Strategy box ──────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">General strategy</p>` +
        `<ol style="margin:0;padding-left:18px;color:#1e3a8a;line-height:1.9;font-size:14px;">` +
        `<li>${bl('Substitute')} the compound or double angle identity to express everything in terms of a single trig ratio.</li>` +
        `<li>Move all terms to one side and ${or('factorise')}.</li>` +
        `<li>Set each factor equal to zero and ${gr('list all solutions')} in the given interval.</li>` +
        `</ol>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve for x (0° ≤ x ≤ 360°): sin 2x = sin x.',
          answer: `x = ${gr('0°, 60°, 180°, 300°, 360°')}`,
          steps: [
            `${bl('Substitute')} the double angle identity: ${bl('sin 2x = 2 sin x cos x')}.`,
            `Equation becomes: 2 sin x cos x = sin x.`,
            `Move all terms to one side: 2 sin x cos x − sin x = 0.`,
            `${or('Factorise')}: ${or('sin x (2 cos x − 1) = 0')}.`,
            `Set each factor to zero: sin x = 0 &nbsp;or&nbsp; cos x = ½.`,
            `sin x = 0: ${gr('x = 0°, 180°, 360°')}.`,
            `cos x = ½ → reference angle = 60°, Quadrants 1 and 4: ${gr('x = 60°, 300°')}.`,
            `<strong>All solutions:</strong> ${gr('x = 0°, 60°, 180°, 300°, 360°')} ✓`,
          ],
        },
        {
          question: 'Solve for x (0° ≤ x ≤ 360°): cos 2x + cos x = 0.',
          answer: `x = ${gr('60°, 180°, 300°')}`,
          steps: [
            `${bl('Substitute')} the identity ${bl('cos 2x = 2 cos²x − 1')} (chosen to write entirely in cos x).`,
            `Equation becomes: 2 cos²x − 1 + cos x = 0.`,
            `Rearrange: 2 cos²x + cos x − 1 = 0.`,
            `${or('Factorise')}: ${or('(2 cos x − 1)(cos x + 1) = 0')}.`,
            `Set each factor to zero: cos x = ½ &nbsp;or&nbsp; cos x = −1.`,
            `cos x = ½ → reference angle = 60°, Quadrants 1 and 4: ${gr('x = 60°, 300°')}.`,
            `cos x = −1: ${gr('x = 180°')}.`,
            `<strong>All solutions:</strong> ${gr('x = 60°, 180°, 300°')} ✓`,
          ],
        },
        {
          question: 'Lerato solves sin 2x = cos x for x (0° ≤ x ≤ 360°). Write out the full solution.',
          answer: `x = ${gr('30°, 90°, 150°, 270°')}`,
          steps: [
            `${bl('Substitute')} the double angle identity: ${bl('sin 2x = 2 sin x cos x')}.`,
            `Equation becomes: 2 sin x cos x = cos x.`,
            `Move all terms to one side: 2 sin x cos x − cos x = 0.`,
            `${or('Factorise')}: ${or('cos x (2 sin x − 1) = 0')}.`,
            `Set each factor to zero: cos x = 0 &nbsp;or&nbsp; sin x = ½.`,
            `cos x = 0: ${gr('x = 90°, 270°')}.`,
            `sin x = ½ → reference angle = 30°, Quadrants 1 and 2: ${gr('x = 30°, 150°')}.`,
            `<strong>All solutions:</strong> ${gr('x = 30°, 90°, 150°, 270°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Solve for x (0° ≤ x ≤ 360°): sin 2x = 0.',
          answer: '0°, 90°, 180°, 270°, 360°',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Solve for x (0° ≤ x ≤ 360°): cos 2x = sin x.',
          answer: '1 − 2sin²x = sinx  →  2sin²x + sinx − 1 = 0  →  (2sinx − 1)(sinx + 1) = 0\nsinx = ½ → x = 30°, 150°\nsinx = −1 → x = 270°\nAll solutions: x = 30°, 150°, 270°',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Solve for x (0° ≤ x ≤ 360°): cos 2x + sin x = 0. Show all steps clearly.',
          answer: '1 − 2sin²x + sinx = 0  →  2sin²x − sinx − 1 = 0  →  (2sinx + 1)(sinx − 1) = 0\nsinx = −½ → x = 210°, 330°\nsinx = 1 → x = 90°\nAll solutions: x = 90°, 210°, 330°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use double angle identities to simplify trig equations before factorising and solving within a given interval" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PROVING TRIGONOMETRIC IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-trig-identities',
      title: 'Proving Trigonometric Identities',
      icon: '⊢',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>trigonometric identity</strong> is an equation that holds true for all valid values of the variable. To prove an identity we work on <strong>one side only</strong> (usually the more complex side) and use known identities, reduction formulae, and algebraic manipulation until we reach the other side. We <strong>never cross-multiply or move terms between sides</strong> during the proof.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('LHS manipulation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('identity used')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('matching RHS')}</span>` +
        `</div>` +

        // ── Rules box ─────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Rules for proving identities</p>` +
        `<ul style="margin:0;padding-left:18px;color:#92400e;line-height:1.9;font-size:14px;">` +
        `<li>Work on <strong>one side only</strong> — start with the more complex side.</li>` +
        `<li>Use known identities (Pythagorean, quotient, double angle, compound angle).</li>` +
        `<li>Factorise or expand as needed, then simplify step by step.</li>` +
        `<li><strong>Never</strong> cross-multiply or transfer terms across the equals sign.</li>` +
        `</ul>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Prove that (sin x + cos x)² = 1 + sin 2x.',
          answer: `${gr('LHS = 1 + sin 2x = RHS ✓')}`,
          steps: [
            `${bl('Start with LHS')}: (sin x + cos x)².`,
            `${bl('Expand')}: sin²x + 2 sin x cos x + cos²x.`,
            `${or('Apply sin²x + cos²x = 1')}: the first and last terms collapse to 1.`,
            `${or('Apply 2 sin x cos x = sin 2x')}: the middle term becomes sin 2x.`,
            `LHS = ${gr('1 + sin 2x')} = RHS ✓`,
          ],
        },
        {
          question: 'Prove that cos 2x / (sin x cos x) = cos x/sin x − sin x/cos x.',
          answer: `${gr('LHS = cos x/sin x − sin x/cos x = RHS ✓')}`,
          steps: [
            `${bl('Start with LHS')}: cos 2x / (sin x cos x).`,
            `${or('Substitute cos 2x = cos²x − sin²x')}: LHS = (cos²x − sin²x) / (sin x cos x).`,
            `${bl('Split the fraction')}: = cos²x/(sin x cos x) − sin²x/(sin x cos x).`,
            `${bl('Cancel common factors in each term')}: = cos x/sin x − sin x/cos x.`,
            `LHS = ${gr('cos x/sin x − sin x/cos x')} = RHS ✓`,
          ],
        },
        {
          question: 'Prove that (1 − cos 2x) / sin 2x = tan x.',
          answer: `${gr('LHS = tan x = RHS ✓')}`,
          steps: [
            `${bl('Start with the numerator of LHS')}: 1 − cos 2x.`,
            `${or('Substitute cos 2x = 1 − 2 sin²x')}: 1 − (1 − 2 sin²x) = ${or('2 sin²x')}.`,
            `${bl('Rewrite the denominator')}: sin 2x = ${or('2 sin x cos x')}.`,
            `${bl('LHS')}: = (2 sin²x) / (2 sin x cos x).`,
            `${bl('Cancel the common factor of 2 sin x')}: = sin x / cos x.`,
            `LHS = ${gr('tan x')} = RHS ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Prove that sin 2x / (2 cos x) = sin x.',
          answer: 'LHS = 2sinxcosx / (2cosx) = sinx = RHS ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Prove that cos²x − sin²x = 1 − 2sin²x.',
          answer: 'LHS = cos²x − sin²x\nSubstitute cos²x = 1 − sin²x:\n= (1 − sin²x) − sin²x = 1 − 2sin²x = RHS ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Prove that (cos 2x + 1) / (sin 2x) = cos x / sin x.',
          answer: 'LHS numerator: cos2x + 1 = (2cos²x − 1) + 1 = 2cos²x\nLHS denominator: sin2x = 2sinxcosx\nLHS = 2cos²x / (2sinxcosx) = cosx/sinx = RHS ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the rules for proving trig identities and walking through examples using compound and double angle identities" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — PROBLEMS IN TWO AND THREE DIMENSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problems-2d-3d',
      title: 'Problems in Two and Three Dimensions',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-world problems in <strong>2D</strong> (using the sine rule, cosine rule and area rule on a flat plane) and extend these techniques to <strong>3D problems</strong> involving heights, distances and angles between objects in three-dimensional space. In 3D problems we typically break the diagram into multiple right-angled or non-right-angled triangles, solve each separately, and combine the results. We use <strong>angles of elevation</strong> (looking up from horizontal) and <strong>angles of depression</strong> (looking down from horizontal), and often apply the sine rule across triangles that share a common side.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('2D triangle components')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('3D height / depth')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Key rules ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules used</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">Sine rule</p>` +
        `<p style="margin:0;font-size:14px;">${bl('a / sinA = b / sinB = c / sinC')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Use when you know an angle–opposite-side pair.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">Cosine rule</p>` +
        `<p style="margin:0;font-size:14px;">${bl('a² = b² + c² − 2bc · cosA')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Use when you know two sides and the included angle, or all three sides.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Area rule</p>` +
        `<p style="margin:0;font-size:14px;">${or('Area = ½ · b · c · sinA')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Use when you know two sides and the included angle.</p>` +
        `</div>` +

        `</div>` +

        // ── 3D strategy ───────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy for 3D problems</p>` +
        `<ol style="margin:0;padding-left:18px;color:#1e3a8a;line-height:1.9;font-size:14px;">` +
        `<li>Draw a clear diagram and label all ${bl('horizontal distances')}, ${or('vertical heights')}, and given angles.</li>` +
        `<li>Identify a horizontal triangle in the base plane — solve it using the ${bl('sine or cosine rule')} to find a horizontal distance shared with a vertical triangle.</li>` +
        `<li>Use a ${or('right-angled vertical triangle')} with the elevation or depression angle (tan, sin, or cos) to link the ${or('height')} to the horizontal distance from step 2.</li>` +
        `<li>Combine the results to get the ${gr('final answer')}.</li>` +
        `</ol>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In triangle ABC, AB = 7 cm, BC = 10 cm and ∠ABC = 60°. Find (a) the area of triangle ABC and (b) the length of AC.',
          answer: `Area = ${gr('35√3/2 ≈ 30.31 cm²')}, &nbsp;AC = ${gr('√79 ≈ 8.89 cm')}`,
          steps: [
            `<strong>Part (a) — Area:</strong> Apply the ${bl('area rule')}: Area = ½ · AB · BC · sin(∠ABC).`,
            `Substitute: Area = ½ · ${bl('7')} · ${bl('10')} · sin${bl('60°')} = 35 · (√3/2) ≈ ${gr('30.31 cm²')}.`,
            `<strong>Part (b) — Length AC:</strong> Apply the ${bl('cosine rule')}: AC² = AB² + BC² − 2 · AB · BC · cos(∠ABC).`,
            `Substitute: AC² = ${bl('49')} + ${bl('100')} − 2 · ${bl('7')} · ${bl('10')} · cos${bl('60°')} = 149 − 140 · (0.5) = 149 − 70 = ${or('79')}.`,
            `<strong>Answer:</strong> AC = √79 ≈ ${gr('8.89 cm')} ✓`,
          ],
        },
        {
          question: 'Building TP has its base P on the same horizontal plane as points Q and R. From Q the angle of elevation to the top T is x. The angle PQR = 150°, angle QPR = y, and PR = a metres. Prove that TP = a · tanx · (cosy + √3 · siny) / 2.',
          answer: `${gr('TP = a · tanx · (cosy + √3 · siny) / 2 ✓')}`,
          steps: [
            `In ${bl('triangle PQR')} the angles sum to 180°: ∠PQR + ∠QPR + ∠PRQ = 180°, so ∠PRQ = 180° − 150° − y = ${bl('30° − y')}.`,
            `Apply the ${bl('sine rule')} in triangle PQR: PQ / sin(∠PRQ) = PR / sin(∠PQR).`,
            `Substitute: PQ / sin(30° − y) = ${bl('a')} / sin(150°) = ${bl('a')} / (½) = ${bl('2a')}, &nbsp;so ${bl('PQ = 2a · sin(30° − y)')}.`,
            `In right-angled ${or('triangle TPQ')} (TP vertical, PQ horizontal): ${or('tanx = TP / PQ')}, so ${or('TP = PQ · tanx = 2a · tanx · sin(30° − y)')}.`,
            `Expand using the compound angle formula: sin(30° − y) = sin30°cosy − cos30°siny = (1/2)cosy − (√3/2)siny.`,
            `Equivalently, note that ${or('cos(30° − y) = cos30°cosy + sin30°siny = (√3/2)cosy + (1/2)siny')}, so sin(30° + y) = (1/2)cosy + (√3/2)siny = ${or('(cosy + √3 · siny) / 2')}.`,
            `Substituting the equivalent compound angle result: TP = 2a · tanx · ${or('(cosy + √3 · siny) / 2')} = ${gr('a · tanx · (cosy + √3 · siny) / 2')} ✓`,
          ],
        },
        {
          question: 'Sipho stands at A and observes the top T of a vertical tower TC from two positions A and B on the same horizontal plane, where ∠TAC = 50°, ∠TBC = 65°, AB = 30 m, and A, B, C are collinear. Find the height of the tower.',
          answer: `TC ≈ ${gr('69.5 m')}`,
          steps: [
            `Let ${or('TC = h')} (the height of the tower) and ${or('BC = d')} (horizontal distance from B to the base).`,
            `In right-angled triangle TBC: ${or('tan65° = h / d')}, so ${or('d = h / tan65°')}.`,
            `In right-angled triangle TAC: ${or('tan50° = h / (d + 30)')}, since AC = BC + AB = d + 30.`,
            `Substitute the expression for d: ${or('tan50° = h / (h / tan65° + 30)')}.`,
            `Cross-multiply: ${or('h / tan65° + 30 = h / tan50°')}.`,
            `Rearrange: ${or('h / tan50° − h / tan65° = 30')}, &nbsp;so ${or('h (1/tan50° − 1/tan65°) = 30')}.`,
            `Compute: 1/tan50° ≈ 0.8391, &nbsp;1/tan65° ≈ 0.4663, &nbsp;difference ≈ 0.3728.`,
            `<strong>Answer:</strong> h = 30 / 0.3728 ≈ ${gr('69.5 m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In triangle PQR, PQ = 5 cm, PR = 8 cm and ∠QPR = 40°. Calculate the area of triangle PQR.',
          answer: '½ · 5 · 8 · sin40° = 20 · sin40° ≈ 20 · 0.6428 ≈ 12.86 cm²',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'In triangle KLM, KL = 9 cm, KM = 12 cm and ∠LKM = 55°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate the area of triangle KLM.',
              correctAnswer: '44.23',
              correctAnswers: ['44.23', '44.2', '44'],
              explanation: 'Area = ½ · 9 · 12 · sin55° = 54 · 0.8192 ≈ 44.23 cm² ✓',
            },
            {
              label: 'b) Calculate the length of LM (correct to 2 decimal places).',
              correctAnswer: '9.84',
              correctAnswers: ['9.84', '9.83', '9.85'],
              explanation: 'LM² = 9² + 12² − 2(9)(12)cos55° = 81 + 144 − 216 · 0.5736 ≈ 225 − 123.90 = 101.10\nLM = √101.10 ≈ 9.84 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A vertical mast TM stands at M on horizontal ground. From point A on the ground, the angle of elevation of T is 35°. From point B, also on the ground and 20 m closer to the mast along the straight line AB (so B is between A and M, with A, B, M collinear), the angle of elevation of T is 48°. Find the height of the mast TM.',
          answer: 'Let TM = h, BM = d.\nFrom B: tan48° = h/d → d = h/tan48°.\nFrom A: tan35° = h/(d + 20) → d + 20 = h/tan35°.\nSubtract: 20 = h(1/tan35° − 1/tan48°) = h(1.4281 − 0.9004) = h · 0.5277.\nh = 20/0.5277 ≈ 37.9 m.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve 2D and 3D trigonometry problems by identifying horizontal and vertical triangles, applying the sine rule and cosine rule, and using angles of elevation and depression" />',
    },
  ],
  topicPractice: [

    // ── Q1 Easy — evaluate using reduction formulae ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Evaluate sin(180°+45°) using reduction formulae.',
      answer: '−√2/2',
      checkMode: 'auto',
      correctAnswer: '-√2/2',
      correctAnswers: ['-√2/2', '−√2/2', '-sqrt(2)/2'],
      explanation: '180°+45° is in Quadrant 3 where sin is negative.\nsin(180°+45°) = −sin45° = −√2/2 ✓',
    },

    // ── Q2 Medium — simplify product using reduction formulae ──────────────
    {
      difficulty: 'Medium',
      question: 'Simplify cos(360°−θ)·sin(−θ).',
      answer: '−sinθcosθ  or  −½sin2θ',
      checkMode: 'auto',
      correctAnswers: ['-sinθcosθ', '-sin θ cos θ', '-½sin2θ', '-1/2sin2θ', '-sinθ·cosθ'],
      explanation: 'cos(360°−θ) = cosθ  (Q4: cos positive)\nsin(−θ) = −sinθ  (negative angle formula)\nProduct: cosθ·(−sinθ) = −sinθcosθ = −½sin2θ ✓',
    },

    // ── Q3 Hard — CAST rule and Pythagorean identity ───────────────────────
    {
      difficulty: 'Hard',
      question: 'If cosθ = −5/13 and θ is in Quadrant 3, find sinθ and tanθ.',
      answer: 'sin²θ = 1 − 25/169 = 144/169.\nsinθ = −12/13  (negative in Q3).\ntanθ = (−12/13) ÷ (−5/13) = 12/5.',
      checkMode: 'self',
    },

    // ── Q4 Medium — expand using compound angle identity ───────────────────
    {
      difficulty: 'Medium',
      question: 'Expand cos(x+45°) using the compound angle identity.',
      answer: '(cosx − sinx)/√2',
      checkMode: 'auto',
      correctAnswer: '(cosx-sinx)/√2',
      correctAnswers: ['(cosx-sinx)/√2', '(cosx − sinx)/√2', '(cos x - sin x)/√2'],
      explanation: 'cos(x+45°) = cosxcos45° − sinxsin45°\n= cosx·(√2/2) − sinx·(√2/2)\n= (cosx − sinx)/√2 ✓',
    },

    // ── Q5 Hard — exact value using compound angle identity ────────────────
    {
      difficulty: 'Hard',
      question: 'Show that cos15° = (√6+√2)/4 using cos(45°−30°). Show all steps.',
      answer: 'cos(45°−30°) = cos45°cos30° + sin45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4\n= (√6+√2)/4 ✓',
      checkMode: 'self',
    },

    // ── Q6 Easy — state the three forms of the double angle formula ────────
    {
      difficulty: 'Easy',
      question: 'State the three equivalent forms of the double angle formula for cos2α.',
      answer: 'cos²α − sin²α\n1 − 2sin²α\n2cos²α − 1',
      checkMode: 'self',
    },

    // ── Q7 Medium — calculate sin2α and cos2α ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'If cosα = 3/5 and α is acute, find sin2α and cos2α.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) sin2α =',
          correctAnswer: '24/25',
          correctAnswers: ['24/25', '0.96'],
          explanation: 'sinα = 4/5  (Pythagorean identity, α acute)\nsin2α = 2sinαcosα = 2·(4/5)·(3/5) = 24/25 ✓',
        },
        {
          label: 'b) cos2α =',
          correctAnswer: '7/25',
          correctAnswers: ['7/25', '0.28'],
          explanation: 'cos2α = cos²α − sin²α = (3/5)² − (4/5)² = 9/25 − 16/25 = 7/25 ✓',
        },
      ],
    },

    // ── Q8 Hard — prove double angle identity ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Prove that (sinθ + cosθ)² = 1 + sin2θ.',
      answer: 'Expand: sin²θ + 2sinθcosθ + cos²θ\n= (sin²θ + cos²θ) + 2sinθcosθ\n= 1 + 2sinθcosθ\n= 1 + sin2θ ✓',
      checkMode: 'self',
    },

    // ── Q9 Hard — prove identity using double angle formulae ───────────────
    {
      difficulty: 'Hard',
      question: 'Prove that sin2x / (1 − cos2x) = 1/tanx.',
      answer: 'sin2x = 2sinxcosx.\n1 − cos2x = 1 − (1 − 2sin²x) = 2sin²x.\nsin2x/(1−cos2x) = 2sinxcosx/(2sin²x) = cosx/sinx = 1/tanx ✓',
      checkMode: 'self',
    },

    // ── Q10 Medium — solve sin2x = 0 ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve for x (0° ≤ x ≤ 360°): sin2x = 0.',
      answer: 'x = 0°, 90°, 180°, 270°, 360°',
      checkMode: 'auto',
      correctAnswer: '0, 90, 180, 270, 360',
      correctAnswers: ['0°, 90°, 180°, 270°, 360°', '0, 90, 180, 270, 360', 'x=0,90,180,270,360'],
      explanation: 'sin2x = 0  →  2x = 0°, 180°, 360°, 540°, 720°\n→ x = 0°, 90°, 180°, 270°, 360° ✓',
    },

    // ── Q11 Hard — solve using double angle identity ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x (0° ≤ x ≤ 360°): cos2x + 3cosx + 2 = 0.',
      answer: 'Substitute cos2x = 2cos²x − 1:\n2cos²x − 1 + 3cosx + 2 = 0\n2cos²x + 3cosx + 1 = 0\n(2cosx + 1)(cosx + 1) = 0\ncosx = −½  →  x = 120°, 240°\ncosx = −1  →  x = 180°',
      checkMode: 'self',
    },

    // ── Q12 Hard — solve using double angle identity ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for x (0° ≤ x ≤ 360°): sin2x = cosx.',
      answer: '2sinxcosx = cosx\n2sinxcosx − cosx = 0\ncosx(2sinx − 1) = 0\ncosx = 0  →  x = 90°, 270°\nsinx = ½  →  x = 30°, 150°\nAll solutions: x = 30°, 90°, 150°, 270°',
      checkMode: 'self',
    },

    // ── Q13 Medium — area of triangle using area rule ──────────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: Triangle ABC with AB = 9 cm, AC = 12 cm and angle BAC = 55°]\n\nUsing the given triangle, find the area of triangle ABC. Give your answer correct to 2 decimal places.',
      answer: '≈ 44.29 cm²',
      checkMode: 'auto',
      correctAnswer: '44.29',
      correctAnswers: ['44.29', '44.3', '44.28', '44.30', '44.2'],
      explanation: 'Area = ½ · AB · AC · sin(∠BAC)\n= ½(9)(12)sin55°\n= 54 × 0.8192\n≈ 44.29 cm² ✓',
    },

    // ── Q14 Hard — cosine rule to find unknown side ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the same triangle from Q13 (AB = 9 cm, AC = 12 cm, angle BAC = 55°), find the length of BC using the cosine rule. Give your answer correct to 2 decimal places.',
      answer: 'BC² = 9² + 12² − 2(9)(12)cos55°\n= 81 + 144 − 216cos55°\n= 225 − 123.85\n≈ 101.15\nBC ≈ 10.06 cm',
      checkMode: 'self',
    },

    // ── Q15 Hard — 3D problem: set up equations for tower height ───────────
    {
      difficulty: 'Hard',
      question: '[DIAGRAM: Vertical tower TC. Points A and B are on the same horizontal plane as C, with A, B and C collinear and B between A and C. Angle TAC = 40°, angle TBC = 65°, AB = 20 m.]\n\nUsing the diagram, set up the two equations needed to find the height of the tower TC.',
      answer: 'Let TC = h and BC = d.\nFrom B: tan65° = h/d,  so d = h/tan65°.\nFrom A: tan40° = h/(d + 20).\nThese two equations can be solved simultaneously for h.',
      checkMode: 'self',
    },

    // ── Q16 Hard — solve for tower height ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the equations from Q15, solve for the height h of the tower. Give your answer correct to 1 decimal place.',
      answer: 'Substitute d = h/tan65° into tan40° = h/(d + 20):\ntan40°(h/tan65° + 20) = h\nh·tan40°/tan65° + 20tan40° = h\n20tan40° = h(1 − tan40°/tan65°)\nh = 20tan40° / (1 − tan40°/tan65°) ≈ 46.2 m',
      checkMode: 'self',
    },

    // ── Q17 Hard — prove trigonometric identity ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Prove that cos2x / (sinxcosx) = cotx − tanx.',
      answer: 'LHS = cos2x/(sinxcosx)\n= (cos²x − sin²x)/(sinxcosx)\n= cos²x/(sinxcosx) − sin²x/(sinxcosx)\n= cosx/sinx − sinx/cosx\n= cotx − tanx\n= RHS ✓',
      checkMode: 'self',
    },

    // ── Q18 Hard — 2D problem: find height from two elevation angles ───────
    {
      difficulty: 'Hard',
      question: 'A surveyor at point A measures the angle of elevation to the top T of a tower as 35°. She walks 50 m directly toward the base C and now measures 55°. Find the height of the tower. Give your answer correct to 2 decimal places.',
      answer: 'Let TC = h and BC = d.\ntan55° = h/d  →  d = h/tan55°.\ntan35° = h/(d + 50).\nSubstitute: tan35°(h/tan55° + 50) = h.\n50tan35° = h(1 − tan35°/tan55°).\nh = 50tan35° / (1 − tan35°/tan55°) ≈ 57.67 m',
      checkMode: 'self',
    },

    // ── Q19 Hard — disprove incorrect identity ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho claims that sin(A+B) = sinA + sinB for all values of A and B. Disprove this claim with a specific numerical example.',
      answer: 'Let A = 30° and B = 60°.\nLHS: sin(30°+60°) = sin90° = 1.\nRHS: sin30° + sin60° = 0.5 + √3/2 ≈ 1.366.\nSince 1 ≠ 1.366, Sipho\'s claim is false. ✓',
      checkMode: 'self',
    },

    // ── Q20 Hard — prove product identity using compound angles ────────────
    {
      difficulty: 'Hard',
      question: 'Prove that sin(x+y)·sin(x−y) = sin²x − sin²y.',
      answer: 'Expand using compound angle identities:\n(sinxcosy + cosxsiny)(sinxcosy − cosxsiny)\n= sin²xcos²y − cos²xsin²y\nSubstitute cos²y = 1 − sin²y and cos²x = 1 − sin²x:\n= sin²x(1 − sin²y) − (1 − sin²x)sin²y\n= sin²x − sin²xsin²y − sin²y + sin²xsin²y\n= sin²x − sin²y ✓',
      checkMode: 'self',
    },

  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered trigonometry.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered these Grade 12 trigonometry fundamentals. Excellent work!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of trig identities and reduction formulae. Review any missed steps and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give each one another go.' },
    { minScore: 6, message: 'Good effort! Work through the study guide and worked examples for each section carefully, then try again.' },
    { minScore: 0, message: "Don't give up — trigonometry takes practice! Revisit each section's explanation and worked examples, then try the questions again." },
  ],
}
