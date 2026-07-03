import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// opposite     → blue   (#2563eb)
// adjacent     → orange (#ea580c)
// hypotenuse   → green  (#16a34a)
// unknown      → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// topicInfo — title: Trigonometry | grade: 10 | subject: Mathematics
export const topicData: TopicData = {
  title: 'Trigonometry',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TRIGONOMETRIC RATIOS IN RIGHT-ANGLED TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-ratios-right-triangles',
      title: 'Trigonometric Ratios in Right-Angled Triangles',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">In a right-angled triangle, the trigonometric ratios <strong>sin</strong>, <strong>cos</strong> and <strong>tan</strong> relate an angle to the ratio of two sides. <strong>SOHCAHTOA</strong> helps you remember which sides to use: sin&nbsp;θ&nbsp;=&nbsp;${bl('opposite')}/${gr('hypotenuse')}, cos&nbsp;θ&nbsp;=&nbsp;${or('adjacent')}/${gr('hypotenuse')}, tan&nbsp;θ&nbsp;=&nbsp;${bl('opposite')}/${or('adjacent')}. These ratios are independent of the size of the triangle and depend only on the angle, since similar triangles have equal angle ratios.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('opposite')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('adjacent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hypotenuse')}</span>` +
        `</div>` +

        // ── SOHCAHTOA ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SOHCAHTOA</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">SOH — Sine</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">sin&nbsp;θ = ${bl('opposite')} / ${gr('hypotenuse')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">CAH — Cosine</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">cos&nbsp;θ = ${or('adjacent')} / ${gr('hypotenuse')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">TOA — Tangent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">tan&nbsp;θ = ${bl('opposite')} / ${or('adjacent')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why the size of the triangle does not matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">Similar triangles with the same angles always produce the <strong>same ratio</strong> between their sides. Doubling or halving the triangle scales all sides equally, so the ratio stays constant. This is why the trigonometric ratios depend only on the <strong>angle</strong>, not the size of the triangle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In right-angled triangle ABC with angle B = 90°, angle A = 30° and AB = 10 cm, find the hypotenuse AC.',
          answer: `${gr('AC')} ≈ 11.55 cm`,
          steps: [
            `Identify the sides relative to angle A. AB (= ${or('10')} cm) is the ${or('adjacent')} side (next to angle A). AC is the ${gr('hypotenuse')} we want to find.`,
            `Choose the correct ratio: cos&nbsp;A = ${or('adjacent')} / ${gr('hypotenuse')}. So cos&nbsp;30° = ${or('10')} / ${gr('AC')}.`,
            `Rearrange: ${gr('AC')} = ${or('10')} / cos&nbsp;30°.`,
            `Calculate: cos&nbsp;30° ≈ 0.866. ${gr('AC')} = 10 / 0.866 ≈ <strong>11.55 cm</strong>. ✓`,
          ],
        },
        {
          question: 'Sipho says doubling an angle doubles its sine value, so sin 60° = 2 × sin 30°. Is he correct?',
          answer: 'No — trigonometric ratios do not scale linearly with angle size.',
          steps: [
            `Calculate sin&nbsp;30° using a calculator: sin&nbsp;30° = ${bl('0.5')}.`,
            `If Sipho were correct, then sin&nbsp;60° would equal 2 × ${bl('0.5')} = ${bl('1.0')}.`,
            `Check: sin&nbsp;60° ≈ ${bl('0.866')}, which is <strong>not</strong> equal to 1.0. Sipho is <strong>incorrect</strong>.`,
            `<strong>Conclusion:</strong> Trigonometric ratios are not proportional to the angle. Doubling the angle does <em>not</em> double the sine value — the relationship is non-linear.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing SOHCAHTOA and showing how to identify opposite, adjacent and hypotenuse sides relative to a given angle in a right-angled triangle" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Right-angled triangle labelled with the opposite side in blue, adjacent side in orange and hypotenuse in green, with SOHCAHTOA ratios shown for a given angle θ" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING RIGHT-ANGLED TRIANGLES AND SIMPLE TRIG EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-right-triangles',
      title: 'Solving Right-Angled Triangles and Simple Trig Equations',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">We use trigonometric ratios to find <strong>missing sides or angles</strong> in right-angled triangles, and solve simple trigonometric equations for angles between 0° and 90° using <strong>inverse trig functions</strong> (sin⁻¹, cos⁻¹, tan⁻¹).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown value')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('trig ratio used')}</span>` +
        `</div>` +

        // ── Method reference ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding a missing side or angle</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Label')} — Identify the ${bl('known')} sides and angles and the ${re('unknown')} quantity. A quick diagram helps.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Choose ratio')} — Select the ${gr('trig ratio')} (sin, cos, or tan) that links the ${bl('known')} values to the ${re('unknown')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Solve')} — Rearrange the equation and solve for the ${re('unknown')}. Use an <strong>inverse trig function</strong> (e.g. tan⁻¹) when the unknown is an angle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Using inverse trig functions on a calculator</p>` +
        `<p style="margin:0;color:#1e3a8a;">If sin&nbsp;θ = 0.6, then θ = sin⁻¹(0.6). Press the <strong>2nd</strong> or <strong>Shift</strong> key on your calculator, then the trig function key. The inverse function "undoes" the ratio and returns the angle in degrees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In right-angled triangle PQR with angle Q = 90°, PQ = 8 cm and QR = 6 cm, find angle P.',
          answer: `Angle P ≈ ${re('36.87°')}`,
          steps: [
            `Identify the sides relative to angle P. QR (= ${bl('6')} cm) is the ${bl('opposite')} side (across from P). PQ (= ${bl('8')} cm) is the ${bl('adjacent')} side (next to P).`,
            `Choose the ratio that links ${bl('opposite')} and ${bl('adjacent')}: ${gr('tan')} P = ${bl('opposite')} / ${bl('adjacent')} = ${bl('QR')} / ${bl('PQ')} = ${bl('6')} / ${bl('8')} = ${bl('0.75')}.`,
            `Apply the inverse trig function: P = ${gr('tan⁻¹')}(0.75) ≈ <strong>${re('36.87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Solve for θ (0° ≤ θ ≤ 90°): sin θ = 0.6.',
          answer: `θ ≈ ${re('36.87°')}`,
          steps: [
            `We are given ${gr('sin')}&nbsp;θ = ${bl('0.6')} and need to find the ${re('unknown')} angle θ.`,
            `Apply the inverse function: θ = ${gr('sin⁻¹')}(${bl('0.6')}).`,
            `Use a calculator: θ ≈ <strong>${re('36.87°')}</strong>. ✓`,
          ],
        },
        {
          question: 'Lerato has a triangle with hypotenuse 15 cm and one angle of 40°. Find the side opposite this angle.',
          answer: `Opposite side ≈ ${re('9.64')} cm`,
          steps: [
            `Identify the ${bl('known')} values: ${bl('hypotenuse')} = ${bl('15')} cm, angle = ${bl('40°')}. The ${re('unknown')} is the opposite side.`,
            `Choose the ratio: ${gr('sin')} 40° = ${re('opposite')} / ${bl('hypotenuse')} = ${re('opposite')} / ${bl('15')}.`,
            `Rearrange: ${re('opposite')} = ${bl('15')} × ${gr('sin')} 40°.`,
            `Calculate: ${gr('sin')} 40° ≈ 0.6428. ${re('opposite')} = 15 × 0.6428 ≈ <strong>${re('9.64')} cm</strong>. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find a missing side or angle in a right-angled triangle using SOHCAHTOA and inverse trig functions on a calculator" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Right-angled triangle PQR with known sides PQ and QR highlighted in blue and the unknown angle P highlighted in red, showing the tan ratio being applied step by step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DEFINING TRIG FUNCTIONS FOR ANY ANGLE (x,y,r)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-any-angle-xyr',
      title: 'Defining Trig Functions for Any Angle (x,y,r)',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We extend trig definitions beyond right-angled triangles using a point (${bl('x')},&nbsp;${gr('y')}) on the terminal arm of an angle θ, with ${or('r')} = √(${bl('x')}²&nbsp;+&nbsp;${gr('y')}²) being the distance from the origin. Then sin&nbsp;θ = ${gr('y')}/${or('r')}, cos&nbsp;θ = ${bl('x')}/${or('r')}, tan&nbsp;θ = ${gr('y')}/${bl('x')}. This allows angles greater than 90° and works in all four quadrants of the Cartesian plane.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-coordinate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-coordinate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('r (distance)')}</span>` +
        `</div>` +

        // ── General definitions ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">sin θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">sin&nbsp;θ = ${gr('y')} / ${or('r')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">cos θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">cos&nbsp;θ = ${bl('x')} / ${or('r')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">tan θ</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">tan&nbsp;θ = ${gr('y')} / ${bl('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── r is always positive ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about ${or('r')}</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">${or('r')} = √(${bl('x')}² + ${gr('y')}²) is always <strong>positive</strong> — it is a distance. The sign of ${bl('x')} and ${gr('y')} changes depending on which quadrant the point lies in, and this is what causes sin, cos and tan to be positive or negative in different quadrants.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why this extends beyond right-angled triangles</p>` +
        `<p style="margin:0;color:#1e3a8a;">In a right-angled triangle ${bl('x')}, ${gr('y')} and ${or('r')} are all positive, giving the familiar SOHCAHTOA ratios. By allowing ${bl('x')} and ${gr('y')} to be <strong>negative</strong>, we can define trig functions for angles in <strong>all four quadrants</strong> — including angles greater than 90°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A point (3, 4) lies on the terminal arm of angle θ. Find sin θ, cos θ and tan θ.',
          answer: `sin&nbsp;θ = ${gr('4')}/${or('5')}, cos&nbsp;θ = ${bl('3')}/${or('5')}, tan&nbsp;θ = ${gr('4')}/${bl('3')}`,
          steps: [
            `Identify the coordinates: ${bl('x')} = ${bl('3')}, ${gr('y')} = ${gr('4')}.`,
            `Calculate ${or('r')}: ${or('r')} = √(${bl('3')}² + ${gr('4')}²) = √(9 + 16) = √25 = ${or('5')}.`,
            `Apply the definitions: sin&nbsp;θ = ${gr('y')} / ${or('r')} = ${gr('4')} / ${or('5')}. &nbsp; cos&nbsp;θ = ${bl('x')} / ${or('r')} = ${bl('3')} / ${or('5')}. &nbsp; tan&nbsp;θ = ${gr('y')} / ${bl('x')} = ${gr('4')} / ${bl('3')}.`,
            `See the diagram below. ✓`,
          ],
        },
        {
          question: 'Thabo has a point (−5, 12) on the terminal arm of angle θ. Find r and cos θ.',
          answer: `${or('r')} = ${or('13')}, cos&nbsp;θ = ${bl('−5')}/${or('13')}`,
          steps: [
            `Identify the coordinates: ${bl('x')} = ${bl('−5')}, ${gr('y')} = ${gr('12')}.`,
            `Calculate ${or('r')}: ${or('r')} = √((${bl('−5')})² + ${gr('12')}²) = √(25 + 144) = √169 = ${or('13')}.`,
            `Apply the definition: cos&nbsp;θ = ${bl('x')} / ${or('r')} = ${bl('−5')} / ${or('13')}. The cosine is <strong>negative</strong> because ${bl('x')} is negative — the point lies in the second quadrant. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video extending trig definitions to all four quadrants using a point (x,y) on the terminal arm and showing how r is always positive while x and y can be negative" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing a point (3,4) with the terminal arm drawn from the origin, r labelled as the hypotenuse distance, and x and y labelled along the axes]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — GRAPHS OF sinθ, cosθ AND tanθ
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'graphs-sin-cos-tan',
      title: 'Graphs of sinθ, cosθ and tanθ',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">We plot and interpret graphs of y = sin θ, y = cos θ and y = tan θ for 0° ≤ θ ≤ 360° (and −360° ≤ θ ≤ 0° where relevant). The sine and cosine graphs are smooth waves oscillating between −1 and 1 with a period of 360°. The tangent graph has a period of 180° and has vertical asymptotes where the function is undefined (at 90° and 270°).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('maximum points')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('minimum points')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('asymptotes')}</span>` +
        `</div>` +

        // ── Key features table ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key features at a glance</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">y = sin θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Range: −1 to 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Period: 360°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">${gr('Maximum: 1 at 90°')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${re('Minimum: −1 at 270°')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">y = cos θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Range: −1 to 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Period: 360°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">${gr('Maximum: 1 at 0° and 360°')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${re('Minimum: −1 at 180°')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">y = tan θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Range: all real numbers</p>` +
        `<p style="color:#374151;font-size:13px;margin:0 0 4px;">Period: 180°</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('Asymptotes at 90° and 270°')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Why tan θ has asymptotes</p>` +
        `<p style="margin:0;color:#7c2d12;">tan θ = sin θ / cos θ. Whenever cos θ = 0 (at 90° and 270°), we would be dividing by zero — this is undefined. The graph shoots off to ±∞ at these values, producing ${or('vertical asymptotes')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the shape and key features of y = sin θ for 0° ≤ θ ≤ 360°.',
          answer: `A smooth wave that starts at (0°, 0), reaches a ${gr('maximum of 1 at 90°')}, returns to 0 at 180°, drops to a ${re('minimum of −1 at 270°')}, and returns to 0 at 360°.`,
          steps: [
            `The graph starts at (0°, 0) — sin 0° = 0.`,
            `It rises to a ${gr('maximum of 1 at 90°')} — sin 90° = 1.`,
            `It returns to 0 at 180° — sin 180° = 0.`,
            `It drops to a ${re('minimum of −1 at 270°')} — sin 270° = −1.`,
            `It returns to 0 at 360° — sin 360° = 0. See the diagram below.`,
          ],
        },
        {
          question: 'Sipho says tan θ is defined for all values of θ. Is he correct?',
          answer: `No — tan θ is undefined at ${or('90°')} and ${or('270°')} (and their equivalents).`,
          steps: [
            `tan θ = sin θ / cos θ.`,
            `At 90°: cos 90° = 0, so tan 90° = sin 90° / 0 — division by zero is ${or('undefined')}.`,
            `At 270°: cos 270° = 0, so tan 270° is also ${or('undefined')}.`,
            `The graph has ${or('vertical asymptotes')} at these values. Sipho is <strong>incorrect</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video plotting y=sinθ, y=cosθ and y=tanθ for 0° to 360°, identifying maximum and minimum points and explaining vertical asymptotes on the tangent graph" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: three separate graphs side by side showing y=sinθ, y=cosθ and y=tanθ for 0° to 360°, with key points and asymptotes (for tan) clearly marked]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE EFFECT OF PARAMETERS a AND q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-parameters',
      title: 'The Effect of Parameters a and q',
      icon: '🔧',
      explanation:
        `<p style="margin-bottom:16px;">For graphs of the form y = a·sin θ + q (and similarly for cos and tan), the parameter <strong>a</strong> affects the amplitude (vertical stretch) — a larger |a| stretches the graph vertically, and a negative a reflects it about the θ-axis. The parameter <strong>q</strong> shifts the entire graph vertically up (if q > 0) or down (if q &lt; 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('amplitude change (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertical shift (q)')}</span>` +
        `</div>` +

        // ── Parameter summary ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">What each parameter does</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:28px;height:28px;line-height:28px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">a</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#1e40af;">${bl('Amplitude / vertical stretch')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">|a| gives the amplitude. The graph oscillates between ${bl('−|a|')} and ${bl('|a|')}. If a &lt; 0, the graph is reflected about the θ-axis.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:28px;height:28px;line-height:28px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">q</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#9a3412;">${or('Vertical shift')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">The entire graph moves ${or('up')} by q units (if q > 0) or ${or('down')} by |q| units (if q &lt; 0). The shape and amplitude are unchanged.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick check: new range after applying a and q</p>` +
        `<p style="margin:0;color:#1e3a8a;">For y = a·sin θ + q, the minimum value is ${bl('−|a|')} + ${or('q')} and the maximum value is ${bl('|a|')} + ${or('q')}. Use this to quickly read off the new range without plotting.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe how the graph of y = 3 sin θ differs from y = sin θ.',
          answer: `The ${bl('amplitude increases from 1 to 3')} — the graph now oscillates between ${bl('−3')} and ${bl('3')} instead of −1 and 1.`,
          steps: [
            `In y = sin θ, the amplitude is 1 — the graph oscillates between −1 and 1.`,
            `In y = ${bl('3')} sin θ, every y-value is multiplied by ${bl('3')}.`,
            `The ${bl('amplitude increases from 1 to 3')}, so the graph oscillates between ${bl('−3')} and ${bl('3')}.`,
            `The shape (smooth wave) and period (360°) remain unchanged — only the ${bl('vertical scale')} changes.`,
          ],
        },
        {
          question: 'Lerato compares y = cos θ + 2 to y = cos θ. Describe the difference.',
          answer: `The graph of y = cos θ + 2 is shifted ${or('2 units upward')} — it now oscillates between ${or('1')} and ${or('3')} instead of −1 and 1.`,
          steps: [
            `In y = cos θ, the graph oscillates between −1 and 1.`,
            `Adding ${or('q = 2')} shifts the entire graph ${or('2 units upward')}.`,
            `The new minimum is −1 + 2 = ${or('1')} and the new maximum is 1 + 2 = ${or('3')}.`,
            `The shape, amplitude and period are all unchanged — only the ${or('vertical position')} changes.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the effect of parameters a and q on y=a·sinθ+q — demonstrating amplitude stretch with a and vertical shift with q using side-by-side graphs" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: y=sinθ and y=3sinθ plotted on the same axes to show amplitude stretch; a second graph showing y=cosθ and y=cosθ+2 to show vertical shift]" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — SOLVING 2D PROBLEMS USING TRIGONOMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-2d-problems',
      title: 'Solving 2D Problems Using Trigonometry',
      icon: '🏗️',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life two-dimensional problems by constructing and interpreting trigonometric models, often involving <strong>angles of elevation/depression</strong>, or combining multiple right-angled triangles to find an unknown length or angle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('angle of elevation')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angle of depression')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated height / distance')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Angles of elevation and depression</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="font-size:20px;flex-shrink:0;">⬆️</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#1e40af;">${bl('Angle of elevation')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">The angle measured ${bl('upward')} from the horizontal to the line of sight toward an object above the observer.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="font-size:20px;flex-shrink:0;">⬇️</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-weight:600;color:#9a3412;">${or('Angle of depression')}</p>` +
        `<p style="margin:0;font-size:13px;color:#374151;">The angle measured ${or('downward')} from the horizontal to the line of sight toward an object below the observer.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Method ────────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#14532d;margin-bottom:6px;">General method for 2D problems</p>` +
        `<p style="margin:0 0 8px;color:#166534;font-size:13px;">1. Draw a clear diagram and label all known sides and angles.</p>` +
        `<p style="margin:0 0 8px;color:#166534;font-size:13px;">2. Identify the right-angled triangle(s) that contain the ${gr('unknown')}.</p>` +
        `<p style="margin:0;color:#166534;font-size:13px;">3. Apply the appropriate trig ratio (SOHCAHTOA) and solve.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'From a point 50 m from the base of a building, the angle of elevation to the top is 35°. Find the height of the building.',
          answer: `Height ≈ ${gr('35.01 m')}`,
          steps: [
            `Draw a right-angled triangle: the ${bl('angle of elevation')} is 35°, the horizontal distance (adjacent side) is ${bl('50 m')}, and the ${gr('height')} (opposite side) is unknown.`,
            `Choose the ratio that links opposite and adjacent: tan 35° = ${gr('height')} / ${bl('50')}.`,
            `Rearrange: ${gr('height')} = ${bl('50')} × tan 35°.`,
            `Calculate: tan 35° ≈ 0.7002. ${gr('height')} = 50 × 0.7002 ≈ ${gr('35.01 m')}. ✓`,
          ],
        },
        {
          question: 'Thabo stands at the top of a 40 m cliff and observes a boat at an angle of depression of 20°. Find the horizontal distance to the boat.',
          answer: `Distance ≈ ${gr('109.9 m')}`,
          steps: [
            `Draw a diagram: the ${or('angle of depression')} from Thabo to the boat is 20°. The cliff height (opposite side) is ${or('40 m')}, and the ${gr('horizontal distance')} (adjacent side) is unknown.`,
            `The angle of depression equals the angle of elevation from the boat to Thabo (alternate interior angles), so the angle in the triangle is 20°.`,
            `tan 20° = ${or('40')} / ${gr('distance')}. Rearrange: ${gr('distance')} = ${or('40')} / tan 20°.`,
            `Calculate: tan 20° ≈ 0.3640. ${gr('distance')} = 40 / 0.3640 ≈ ${gr('109.9 m')}. ✓`,
          ],
        },
        {
          question: 'Two buildings are 30 m apart. From the top of the shorter building (15 m high), the angle of elevation to the top of the taller building is 25°. Find the height of the taller building.',
          answer: `Height of taller building ≈ ${gr('28.99 m')}`,
          steps: [
            `The horizontal distance between the tops of the buildings is ${bl('30 m')} (adjacent side). The ${bl('angle of elevation')} is 25°. The height difference between the tops is unknown.`,
            `tan 25° = height difference / ${bl('30')}. Rearrange: height difference = ${bl('30')} × tan 25°.`,
            `Calculate: tan 25° ≈ 0.4663. height difference = 30 × 0.4663 ≈ ${gr('13.99 m')}.`,
            `Total ${gr('height of taller building')} = 15 + 13.99 ≈ ${gr('28.99 m')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving real-life 2D trigonometry problems involving angles of elevation and depression, showing how to draw a diagram and apply SOHCAHTOA step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: three separate diagrams — (1) angle of elevation from ground to building top, (2) angle of depression from cliff top to boat, (3) two buildings side by side with angle of elevation between their tops]" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a right-angled triangle, angle A = 90°, with opposite side 6 cm and adjacent side 8 cm to angle B. Find tan B.',
      answer: '0.75',
      checkMode: 'auto',
      correctAnswer: '0.75',
      explanation: 'tan B = opposite / adjacent = 6 / 8 = 0.75 ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A right-angled triangle has hypotenuse 20 cm and an angle of 50°. Find the length of the side opposite the angle.',
      answer: '15.32 cm',
      checkMode: 'auto',
      correctAnswer: '15.32',
      correctAnswers: ['15.32', '15.32cm', '15.32 cm'],
      explanation: 'sin 50° = opposite / hypotenuse\nopposite = 20 × sin 50° = 20 × 0.766 ≈ 15.32 cm ✓',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says doubling a side length doubles the sine ratio of the opposite angle. Is he correct? Explain.',
      answer: 'No — sine ratios depend only on the angle, not the side lengths, since similar triangles (different sizes, same angles) have identical trig ratios.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for θ (0° ≤ θ ≤ 90°): cos θ = 0.5.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      correctAnswers: ['60', '60°'],
      explanation: 'θ = cos⁻¹(0.5) = 60° ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A right-angled triangle has adjacent side 12 cm and hypotenuse 13 cm. Find the angle adjacent to these sides.',
      answer: '22.62°',
      checkMode: 'auto',
      correctAnswer: '22.62',
      correctAnswers: ['22.62', '22.62°'],
      explanation: 'cos θ = adjacent / hypotenuse = 12 / 13\nθ = cos⁻¹(12/13) ≈ 22.62° ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for θ: tan θ = 2.5, then verify your answer using a calculator check.',
      answer: 'θ = tan⁻¹(2.5) ≈ 68.2°. Check: tan(68.2°) ≈ 2.5 ✓.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point (6, 8) lies on the terminal arm of angle θ. Find r.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'r = √(x² + y²) = √(6² + 8²) = √(36 + 64) = √100 = 10 ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the point (6, 8) from Q7, find sin θ and cos θ.',
      answer: 'sin θ = 8/10 = 0.8. cos θ = 6/10 = 0.6.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A point (−3, 4) lies on the terminal arm of angle θ. Find tan θ and explain the sign.',
      answer: 'tan θ = 4/(−3) = −4/3. The value is negative since x is negative while y is positive, placing θ in the second quadrant.',
      checkMode: 'self',
    },

    // ── Q10 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the maximum value of y = sin θ?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'The sine function reaches a maximum of 1 at θ = 90°. ✓',
    },

    // ── Q11 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'At which angles is y = tan θ undefined between 0° and 360°?',
      answer: '90° and 270°',
      checkMode: 'auto',
      correctAnswer: '90° and 270°',
      correctAnswers: ['90° and 270°', '90 and 270', '90° and 270', '90 and 270°'],
      explanation: 'tan θ = sin θ / cos θ. cos θ = 0 at 90° and 270°, making tan θ undefined at these angles. ✓',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the amplitude of y = 4 cos θ.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: 'In y = a cos θ, |a| gives the amplitude. Here a = 4, so the amplitude is 4. The graph oscillates between −4 and 4. ✓',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares y = sin θ − 3 to y = sin θ. Describe the transformation and the new range.',
      answer: 'The graph shifts 3 units down. New range: −4 to −2 (instead of −1 to 1).',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the effect of changing y = cos θ to y = −2 cos θ.',
      answer: 'The amplitude doubles to 2, and the graph reflects about the θ-axis.',
      checkMode: 'self',
    },

    // ── Q15 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'From a point 40 m from a building\'s base, the angle of elevation to the top is 30°. Find the building\'s height.',
      answer: '23.09 m',
      checkMode: 'auto',
      correctAnswer: '23.09',
      correctAnswers: ['23.09', '23.09m', '23.09 m'],
      explanation: 'tan 30° = height / 40\nheight = 40 × tan 30° = 40 × 0.5774 ≈ 23.09 m ✓',
    },

    // ── Q16 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A person stands on a 25 m cliff and sees a boat at an angle of depression of 15°. Find the distance to the boat.',
      answer: '93.30 m',
      checkMode: 'auto',
      correctAnswer: '93.30',
      correctAnswers: ['93.30', '93.30m', '93.30 m', '93.3', '93.3m', '93.3 m'],
      explanation: 'tan 15° = 25 / distance\ndistance = 25 / tan 15° = 25 / 0.2679 ≈ 93.30 m ✓',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two buildings are 25 m apart. From the top of the 12 m building, the angle of elevation to the top of the taller one is 30°. Find the height of the taller building.',
      answer: 'Height difference = 25 × tan 30° ≈ 14.43 m. Total height = 12 + 14.43 ≈ 26.43 m.',
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the angle of elevation and angle of depression between two points are always equal. Is he correct? Explain.',
      answer: 'Yes — by the property of alternate angles formed by parallel horizontal lines and the line of sight, the angle of elevation from one point equals the angle of depression from the other.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A ladder leans against a wall, making a 65° angle with the ground. If the base of the ladder is 2 m from the wall, find the ladder\'s length.',
      answer: '4.73 m',
      checkMode: 'auto',
      correctAnswer: '4.73',
      correctAnswers: ['4.73', '4.73m', '4.73 m'],
      explanation: 'cos 65° = adjacent / hypotenuse = 2 / ladder\nlength = 2 / cos 65° = 2 / 0.4226 ≈ 4.73 m ✓',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A surveyor stands 80 m from the base of a tower and measures the angle of elevation to the top as 28°. She then walks 20 m closer and measures the new angle of elevation. Find the new angle.',
      answer: 'Original height = 80 × tan 28° ≈ 42.55 m. New distance = 60 m. New angle = tan⁻¹(42.55/60) ≈ 35.36°.',
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
}
