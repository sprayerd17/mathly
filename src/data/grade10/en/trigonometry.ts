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
        'Short video introducing SOHCAHTOA and showing how to identify opposite, adjacent and hypotenuse sides relative to a given angle in a right-angled triangle',

      diagramPlaceholder:
        'Right-angled triangle with the opposite side in blue, adjacent side in orange and hypotenuse in green, with the SOHCAHTOA ratios for angle θ shown alongside',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">sin θ = opposite / hypotenuse</text><text x="110" y="24" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">cos θ = adjacent / hypotenuse</text><text x="110" y="36" font-size="9" fill="#0f1f3d" font-weight="700" text-anchor="middle">tan θ = opposite / adjacent</text><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="30" y1="140" x2="170" y2="140" stroke="#ea580c" stroke-width="3.5"/><line x1="30" y1="50" x2="30" y2="140" stroke="#2563eb" stroke-width="3.5"/><line x1="30" y1="50" x2="170" y2="140" stroke="#16a34a" stroke-width="3.5"/><path d="M 152,140 A 18 18 0 0 1 154.9,130.3" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">θ</text><text x="100" y="158" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">adjacent</text><text x="14" y="95" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 14 95)">opposite</text><text x="100" y="85" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(33 100 85)">hypotenuse</text></svg>',
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
        'Short video showing how to find a missing side or angle in a right-angled triangle using SOHCAHTOA and inverse trig functions on a calculator',

      diagramPlaceholder:
        'Right-angled triangle PQR with the known sides PQ and QR in blue and the unknown angle P in red, showing the tan ratio used to solve it',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 170,140 30,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="100" y="158" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="14" y="98" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 152,140 A 18 18 0 0 1 154.9,130.3" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="146" y="134" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="20" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">Q</text><text x="180" y="153" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">P</text><text x="20" y="46" font-size="12" fill="#475569" font-weight="600" text-anchor="middle">R</text><text x="110" y="18" font-size="10.5" fill="#16a34a" font-weight="700" text-anchor="middle">tan P = opposite / adjacent</text></svg>',
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
        'Short video extending trig definitions to all four quadrants using a point (x,y) on the terminal arm and showing how r is always positive while x and y can be negative',

      diagramPlaceholder:
        'Cartesian plane showing the point (3, 4) with the terminal arm drawn from the origin, r labelled along the arm, and x and y labelled as dashed drop-lines to the axes',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="110" x2="210" y2="110" stroke="#94a3b8" stroke-width="1.5"/><line x1="110" y1="10" x2="110" y2="210" stroke="#94a3b8" stroke-width="1.5"/><polygon points="210,110 202,106 202,114" fill="#94a3b8"/><polygon points="110,10 106,18 114,18" fill="#94a3b8"/><text x="200" y="124" font-size="11" fill="#64748b">x</text><text x="118" y="20" font-size="11" fill="#64748b">y</text><line x1="110" y1="110" x2="119.6" y2="97.2" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="119.6" cy="97.2" r="4" fill="#0f1f3d"/><text x="134" y="90" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">(3, 4)</text><line x1="119.6" y1="97.2" x2="119.6" y2="110" stroke="#16a34a" stroke-width="1.3" stroke-dasharray="3,3"/><text x="132" y="106" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">4</text><line x1="110" y1="110" x2="119.6" y2="110" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><text x="115" y="124" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="100" y="98" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">r</text></svg>',
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
        'Short video plotting y=sinθ, y=cosθ and y=tanθ for 0° to 360°, identifying maximum and minimum points and explaining vertical asymptotes on the tangent graph',

      diagramPlaceholder:
        'Graphs of y=sinθ and y=cosθ plotted together over 0° to 360° with maximum and minimum points marked, alongside a graph of y=tanθ showing its vertical asymptote at 90°',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="75" y="10" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = sin θ and y = cos θ</text><line x1="15" y1="90" x2="135" y2="90" stroke="#94a3b8" stroke-width="1.2"/><path d="M15,90 L25,70 L35,55.36 L45,50 L55,55.36 L65,70 L75,90 L85,110 L95,124.64 L105,130 L115,124.64 L125,110 L135,90" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M15,50 L25,55.36 L35,70 L45,90 L55,110 L65,124.64 L75,130 L85,124.64 L95,110 L105,90 L115,70 L125,55.36 L135,50" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="45" cy="50" r="3" fill="#16a34a"/><circle cx="15" cy="50" r="3" fill="#16a34a"/><circle cx="135" cy="50" r="3" fill="#16a34a"/><circle cx="105" cy="130" r="3" fill="#dc2626"/><circle cx="75" cy="130" r="3" fill="#dc2626"/><text x="8" y="93" font-size="8" fill="#0f1f3d" font-weight="700" text-anchor="middle">sin</text><text x="8" y="53" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">cos</text><text x="15" y="140" font-size="7" fill="#64748b" text-anchor="middle">0°</text><text x="45" y="140" font-size="7" fill="#64748b" text-anchor="middle">90°</text><text x="75" y="140" font-size="7" fill="#64748b" text-anchor="middle">180°</text><text x="105" y="140" font-size="7" fill="#64748b" text-anchor="middle">270°</text><text x="135" y="140" font-size="7" fill="#64748b" text-anchor="middle">360°</text><text x="179" y="10" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = tan θ</text><line x1="146" y1="90" x2="212" y2="90" stroke="#94a3b8" stroke-width="1.2"/><line x1="179" y1="20" x2="179" y2="160" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M150,90 L154.8,85.98 L159.7,81.35 L164.5,75 L169.3,64.02 L174.2,34.02" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M183.8,146 L188.6,116 L193.5,105 L198.3,98.66 L203.1,94.02 L208,90" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="150" y="163" font-size="7" fill="#64748b" text-anchor="middle">0°</text><text x="179" y="163" font-size="7" fill="#ea580c" font-weight="700" text-anchor="middle">90°</text><text x="208" y="163" font-size="7" fill="#64748b" text-anchor="middle">180°</text></svg>',
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
        'Short video showing the effect of parameters a and q on y=a·sinθ+q — demonstrating amplitude stretch with a and vertical shift with q using side-by-side graphs',

      diagramPlaceholder:
        'Two graphs side by side: y=3sinθ compared with y=sinθ to show the amplitude stretch from parameter a, and y=cosθ+2 compared with y=cosθ to show the vertical shift from parameter q',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="57" y="10" font-size="8" font-weight="700" fill="#0f1f3d" text-anchor="middle">3sin θ (blue) vs sin θ (grey)</text><line x1="10" y1="87.5" x2="105" y2="87.5" stroke="#cbd5e1" stroke-width="1"/><path d="M10,87.5 L21.9,72.77 L33.8,66.67 L45.6,72.77 L57.5,87.5 L69.4,102.23 L81.3,108.33 L93.1,102.23 L105,87.5" fill="none" stroke="#94a3b8" stroke-width="1.6"/><path d="M10,87.5 L21.9,43.3 L33.8,25 L45.6,43.3 L57.5,87.5 L69.4,131.7 L81.3,150 L93.1,131.7 L105,87.5" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="162" y="10" font-size="8" font-weight="700" fill="#0f1f3d" text-anchor="middle">cos θ+2 (orange) vs cos θ (grey)</text><line x1="115" y1="87.5" x2="210" y2="87.5" stroke="#cbd5e1" stroke-width="1"/><path d="M115,87.5 L126.9,96.65 L138.8,118.75 L150.6,140.85 L162.5,150 L174.4,140.85 L186.3,118.75 L198.1,96.65 L210,87.5" fill="none" stroke="#94a3b8" stroke-width="1.6"/><path d="M115,25 L126.9,34.15 L138.8,56.25 L150.6,78.35 L162.5,87.5 L174.4,78.35 L186.3,56.25 L198.1,34.15 L210,25" fill="none" stroke="#ea580c" stroke-width="2.2"/><text x="57" y="164" font-size="7.5" fill="#374151" text-anchor="middle">amplitude a stretches the wave</text><text x="162" y="164" font-size="7.5" fill="#374151" text-anchor="middle">q shifts the wave up/down</text></svg>',
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
        'Short video solving real-life 2D trigonometry problems involving angles of elevation and depression, showing how to draw a diagram and apply SOHCAHTOA step by step',

      diagramPlaceholder:
        'Diagram of a building with the angle of elevation from the ground marked in blue and the angle of depression from the top marked in orange, showing that the two angles are equal',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="170" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 170,128 L 158,128 L 158,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="20" y1="30" x2="190" y2="30" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/><line x1="30" y1="140" x2="170" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="5,3"/><path d="M 58,140 A 28 28 0 0 0 52.0,122.7" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="130" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">θ</text><path d="M138,30 A32 32 0 0 0 144.8,49.8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="148" y="42" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">θ</text><circle cx="30" cy="140" r="3.5" fill="#16a34a"/><circle cx="170" cy="30" r="3.5" fill="#16a34a"/><text x="14" y="153" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">elevation</text><text x="30" y="22" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">depression</text><text x="105" y="160" font-size="8.5" fill="#16a34a" font-weight="700" text-anchor="middle">the two θ angles are equal (alternate angles)</text></svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a right-angled triangle, angle A = 90°, with opposite side 6 cm and adjacent side 8 cm to angle B. Find tan B.',
      checkMode: 'auto',
      options: ['0.75', '0.6', '0.8', '1.33'],
      correctIndex: 0,
      explanation: 'tan B = opposite / adjacent = 6 / 8 = 0.75 ✓ (0.6 and 0.8 come from mistakenly using sin B or cos B with a hypotenuse of 10 found via Pythagoras; 1.33 comes from flipping the ratio to adjacent/opposite.)',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A right-angled triangle has hypotenuse 20 cm and an angle of 50°. Find the length of the side opposite the angle.',
      checkMode: 'auto',
      options: ['12.86 cm', '15.32 cm', '26.11 cm', '23.84 cm'],
      correctIndex: 1,
      explanation: 'sin 50° = opposite / hypotenuse\nopposite = 20 × sin 50° ≈ 20 × 0.766 ≈ 15.32 cm ✓ (12.86 cm comes from mistakenly using cos 50° instead of sin 50°; 26.11 cm comes from dividing by sin 50° instead of multiplying; 23.84 cm comes from using tan 50° instead of sin 50°.)',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says doubling a side length doubles the sine ratio of the opposite angle. Is he correct?',
      checkMode: 'auto',
      options: [
        'He is correct — scaling all sides equally also scales the sine ratio by the same factor.',
        'He is correct, but only when the angle is greater than 45°.',
        'He is incorrect — sine ratios depend only on the angle, not the side lengths, since similar triangles (different sizes, same angles) have identical trig ratios.',
        'He is incorrect — doubling a side length actually halves the sine ratio, not doubles it.',
      ],
      correctIndex: 2,
      explanation: 'Sine (and all trig ratios) depend only on the angle, not on how big the triangle is. Doubling every side produces a similar triangle with the same angles, so sin of the angle stays exactly the same — it does not double or halve. ✓',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Solve for θ (0° ≤ θ ≤ 90°): cos θ = 0.5.',
      checkMode: 'auto',
      options: ['30°', '45°', '120°', '60°'],
      correctIndex: 3,
      explanation: 'θ = cos⁻¹(0.5) = 60° ✓ (30° comes from mistakenly using sin⁻¹ instead of cos⁻¹; 45° is a common special-angle guess; 120° comes from wrongly reflecting 60° about 90°.)',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A right-angled triangle has adjacent side 12 cm and hypotenuse 13 cm. Find the angle adjacent to these sides.',
      checkMode: 'auto',
      options: ['22.62°', '67.38°', '42.71°', '0.39°'],
      correctIndex: 0,
      explanation: 'cos θ = adjacent / hypotenuse = 12 / 13\nθ = cos⁻¹(12/13) ≈ 22.62° ✓ (67.38° comes from mistakenly using sin⁻¹ instead of cos⁻¹ — that is actually the other acute angle; 42.71° comes from using tan⁻¹(12/13), which pairs the wrong sides; 0.39° comes from a calculator left in radian mode, which returns 0.3948 radians instead of degrees.)',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve for θ: tan θ = 2.5, then verify your answer using a calculator check.',
      checkMode: 'auto',
      options: ['21.8°', '68.2°', '2.5°', '1.19°'],
      correctIndex: 1,
      explanation: 'θ = tan⁻¹(2.5) ≈ 68.2°. Check: tan(68.2°) ≈ 2.5 ✓ (21.8° is the complementary angle, from mixing up which side is opposite/adjacent; 2.5° comes from forgetting to apply the inverse tan function and just restating the ratio value; 1.19° comes from a calculator left in radian mode.)',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A point (6, 8) lies on the terminal arm of angle θ. Find r.',
      checkMode: 'auto',
      options: ['14', '6', '10', '48'],
      correctIndex: 2,
      explanation: 'r = √(x² + y²) = √(6² + 8²) = √(36 + 64) = √100 = 10 ✓ (14 comes from simply adding x + y instead of using Pythagoras; 6 mistakenly uses only the x-coordinate; 48 comes from multiplying x × y instead of squaring and adding.)',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the point (6, 8) and r = 10 from Q7, find sin θ.',
      checkMode: 'auto',
      options: ['0.6', '1.33', '0.75', '0.8'],
      correctIndex: 3,
      explanation: 'sin θ = y / r = 8 / 10 = 0.8 ✓ (0.6 comes from mistakenly calculating cos θ = x/r instead; 1.33 comes from computing tan θ = y/x instead; 0.75 comes from swapping which coordinate is used, giving x/y.)',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A point (−3, 4) lies on the terminal arm of angle θ. Which statement about tan θ is correct?',
      checkMode: 'auto',
      options: [
        'tan θ = −4/3, negative because y is positive while x is negative, placing θ in the second quadrant.',
        'tan θ = 4/3, positive because both coordinates contribute positively to the ratio.',
        'tan θ = −3/4, negative because x is negative while y is positive.',
        'tan θ = 4/3, and the negative sign of x is ignored since tan only uses y and r.',
      ],
      correctIndex: 0,
      explanation: 'tan θ = y / x = 4 / (−3) = −4/3. The value is negative because y is positive and x is negative — this places θ in the second quadrant, where tangent is always negative. ✓ (Option C swaps y and x in the ratio; option D wrongly claims tan does not depend on the sign of x — it does, since tan = y/x.)',
    },

    // ── Q10 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the maximum value of y = sin θ?',
      checkMode: 'auto',
      options: ['0.5', '1', '90', '∞'],
      correctIndex: 1,
      explanation: 'The sine function reaches a maximum of 1 at θ = 90°. ✓ (0.5 is sin 30°, not the maximum; 90 confuses the angle at which the maximum occurs with the maximum value itself; ∞ wrongly assumes sine is unbounded like tangent.)',
    },

    // ── Q11 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'At which angles is y = tan θ undefined between 0° and 360°?',
      checkMode: 'auto',
      options: ['0° and 180°', '90° and 180°', '90° and 270°', '180° and 360°'],
      correctIndex: 2,
      explanation: 'tan θ = sin θ / cos θ. cos θ = 0 at 90° and 270°, making tan θ undefined at these angles. ✓ (0° and 180° are where sin θ = 0, not cos θ; 90° and 180° mixes the correct 90° with a wrong second value; 180° and 360° are where cos θ is at its minimum/maximum, not zero.)',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the amplitude of y = 4 cos θ.',
      checkMode: 'auto',
      options: ['1', '8', '0.25', '4'],
      correctIndex: 3,
      explanation: 'In y = a cos θ, |a| gives the amplitude. Here a = 4, so the amplitude is 4. The graph oscillates between −4 and 4. ✓ (1 is the amplitude of plain cos θ; 8 mistakenly doubles a instead of just using it; 0.25 mistakenly takes 1/a.)',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares y = sin θ − 3 to y = sin θ. Which statement correctly describes the transformation and the new range?',
      checkMode: 'auto',
      options: [
        'The graph shifts 3 units down; the new range is −4 to −2.',
        'The graph shifts 3 units up; the new range is 2 to 4.',
        'The amplitude decreases by 3; the new range is −4 to 4, unchanged.',
        'The graph shifts 3 units down; the new range is −1 to 1, unchanged, since subtracting a constant does not affect the range.',
      ],
      correctIndex: 0,
      explanation: 'Subtracting q = 3 shifts the whole graph 3 units down, so the new minimum is −1 − 3 = −4 and the new maximum is 1 − 3 = −2, giving a range of −4 to −2. The shape and amplitude stay the same. ✓',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Which statement correctly describes the effect of changing y = cos θ to y = −2 cos θ?',
      checkMode: 'auto',
      options: [
        'The amplitude halves to 0.5, with no reflection.',
        'The amplitude doubles to 2, and the graph reflects about the θ-axis.',
        'The amplitude doubles to 2, but the graph is not reflected since only q causes reflection.',
        'The graph shifts 2 units down, with the amplitude unchanged.',
      ],
      correctIndex: 1,
      explanation: 'Multiplying by a = −2 changes the amplitude to |−2| = 2 (doubling it from 1), and the negative sign reflects the graph about the θ-axis (a maximum becomes a minimum and vice versa). ✓',
    },

    // ── Q15 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'From a point 40 m from a building\'s base, the angle of elevation to the top is 30°. Find the building\'s height.',
      checkMode: 'auto',
      options: ['20 m', '34.64 m', '23.09 m', '69.28 m'],
      correctIndex: 2,
      explanation: 'tan 30° = height / 40\nheight = 40 × tan 30° ≈ 40 × 0.5774 ≈ 23.09 m ✓ (20 m comes from mistakenly using sin 30° instead of tan 30°; 34.64 m comes from using cos 30° instead; 69.28 m comes from using the complementary angle 60° instead of 30°.)',
    },

    // ── Q16 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A person stands on a 25 m cliff and sees a boat at an angle of depression of 15°. Find the distance to the boat.',
      checkMode: 'auto',
      options: ['96.59 m', '25.88 m', '6.70 m', '93.30 m'],
      correctIndex: 3,
      explanation: 'The angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles), so the angle in the triangle is 15°.\ntan 15° = 25 / distance\ndistance = 25 / tan 15° ≈ 25 / 0.2679 ≈ 93.30 m ✓ (96.59 m comes from mistakenly using sin 15° instead of tan 15°; 25.88 m comes from using cos 15° instead; 6.70 m comes from multiplying by tan 15° instead of dividing.)',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two buildings are 25 m apart. From the top of the 12 m building, the angle of elevation to the top of the taller one is 30°. Find the height of the taller building.',
      checkMode: 'auto',
      options: ['26.43 m', '33.65 m', '14.43 m', '21.65 m'],
      correctIndex: 0,
      explanation: 'The horizontal gap (25 m) is adjacent to the 30° angle; the height difference between the rooftops is opposite.\ntan 30° = height difference / 25\nheight difference = 25 × tan 30° ≈ 14.43 m\nTotal height of taller building = 12 + 14.43 ≈ 26.43 m ✓ (33.65 m comes from mistakenly using cos 30° instead of tan 30° for the height difference; 14.43 m forgets to add the 12 m base height; 21.65 m uses cos 30° and also forgets to add the base height.)',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says the angle of elevation and angle of depression between two points are always equal. Which statement is correct?',
      checkMode: 'auto',
      options: [
        'He is incorrect — the angle of elevation is always larger than the angle of depression between the same two points.',
        'He is correct — by the property of alternate angles formed between parallel horizontal lines and the line of sight, the angle of elevation from one point equals the angle of depression from the other.',
        'He is incorrect — the two angles are only equal when the two points are the same height above the ground.',
        'He is correct, but only when the line of sight is exactly 45° from the horizontal.',
      ],
      correctIndex: 1,
      explanation: 'The two horizontal lines (at each observer\'s position) are parallel, and the line of sight is a transversal. This makes the angle of elevation from the lower point and the angle of depression from the higher point alternate angles, which are always equal — regardless of the actual angle size or the heights involved. Thabo is correct. ✓',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A ladder leans against a wall, making a 65° angle with the ground. If the base of the ladder is 2 m from the wall, find the ladder\'s length.',
      checkMode: 'auto',
      options: ['2.21 m', '0.85 m', '4.73 m', '1.81 m'],
      correctIndex: 2,
      explanation: 'The ladder is the hypotenuse; the 2 m base is adjacent to the 65° angle.\ncos 65° = 2 / ladder length\nladder length = 2 / cos 65° ≈ 2 / 0.4226 ≈ 4.73 m ✓ (2.21 m comes from mistakenly using sin 65° instead of cos 65°; 0.85 m comes from multiplying by cos 65° instead of dividing; 1.81 m comes from multiplying by sin 65° instead of dividing by cos 65°.)',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A surveyor stands 80 m from the base of a tower and measures the angle of elevation to the top as 28°. She then walks 20 m closer and measures the new angle of elevation. Find the new angle.',
      checkMode: 'auto',
      options: ['28°', '23.04°', '37.33°', '35.36°'],
      correctIndex: 3,
      explanation: 'Height of tower = 80 × tan 28° ≈ 42.55 m (unchanged, since the tower has not moved). New horizontal distance = 80 − 20 = 60 m. New angle = tan⁻¹(42.55 / 60) ≈ 35.36° ✓ (28° forgets to recalculate for the new, closer distance and just repeats the original angle; 23.04° mistakenly adds the 20 m instead of subtracting it; 37.33° wrongly assumes the angle scales proportionally with distance — trig ratios do not work that way.)',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   SOHCAHTOA ratio identification in a described triangle — abstract, no diagram
    // Block 2 (3-5):   Special angle values (0°/30°/45°/60°/90°) recall      — abstract, no diagram
    // Block 3 (6-9):   Missing side given one side + one angle
    // Block 4 (10-12): Missing angle given two sides
    // Block 5 (13-15): Angle of elevation / depression word problems
    // Block 6 (16-19): Combined multi-step problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — SOHCAHTOA ratio identification (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, angle B = 90°. Relative to angle A, which side is the hypotenuse?', checkMode: 'auto', options: ['AC, because it is the side opposite the right angle at B.', 'AB, because it touches the right angle at B.', 'BC, because it is opposite angle A.', 'It cannot be determined without knowing angle C.'], correctIndex: 0, explanation: 'The hypotenuse is always the side opposite the right angle. Since the right angle is at B, the hypotenuse is AC — this can be identified immediately without needing any other angle or side length. ✓ (AB is a leg touching the right angle, not the hypotenuse; BC is the side opposite A, not the hypotenuse.)' },
        { difficulty: 'Easy', question: 'In right-angled triangle PQR, angle Q = 90°. Write down the ratio for sin P in terms of the sides of the triangle.', checkMode: 'auto', options: ['PQ/PR', 'QR/PR', 'QR/PQ', 'PR/QR'], correctIndex: 1, explanation: 'sin P = opposite / hypotenuse. The side opposite angle P is QR, and the hypotenuse (opposite the right angle at Q) is PR. So sin P = QR/PR. ✓ (PQ/PR uses the adjacent side instead — that is cos P; QR/PQ is tan P; PR/QR is the correct ratio flipped upside down.)' },
        { difficulty: 'Medium', question: 'In right-angled triangle XYZ, angle Y = 90°. Which trigonometric ratio (sin, cos or tan) of angle X links side XY (adjacent to X) and side XZ (the hypotenuse)?', checkMode: 'auto', options: ['sin', 'tan', 'cos', 'It could be any of sin, cos or tan depending on the triangle\'s size.'], correctIndex: 2, explanation: 'CAH: cos = adjacent / hypotenuse. XY is adjacent to angle X and XZ is the hypotenuse, so the ratio linking them is cos X. ✓ (sin links opposite and hypotenuse; tan links opposite and adjacent — neither involves XY and XZ together. The ratio depends only on which two sides are named, not on the triangle\'s size.)' },

        // Block 2 — Special angle values recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Write down the exact value of sin 30°.', checkMode: 'auto', options: ['1', '0.87', '0', '0.5'], correctIndex: 3, explanation: 'sin 30° = 0.5, one of the standard special-angle values. ✓ (1 is sin 90°; 0.87 is sin 60° — the complementary angle; 0 is sin 0°. Mixing up which special angle gives which value is a common mistake.)' },
        { difficulty: 'Medium', question: 'Write down the exact value of tan 45°.', checkMode: 'auto', options: ['1', '0', '1.73', '0.5'], correctIndex: 0, explanation: 'tan 45° = 1, since in a right-angled isosceles triangle the two legs (opposite and adjacent) are equal, making their ratio 1. ✓ (0 is tan 0°; 1.73 is tan 60°; 0.5 is not a standard tan value — likely confused with sin 30°.)' },
        { difficulty: 'Medium', question: 'Without using a calculator, evaluate cos 60° + sin 90°.', checkMode: 'auto', options: ['1', '1.5', '2', '0.5'], correctIndex: 1, explanation: 'cos 60° = 0.5 and sin 90° = 1. So cos 60° + sin 90° = 0.5 + 1 = 1.5. ✓ (1 forgets to add the 0.5 from cos 60°; 2 mistakenly uses cos 60° = 1; 0.5 forgets to add the 1 from sin 90°.)' },

        // Block 3 — Missing side given one side + one angle (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, the right angle is at B. The side adjacent to angle A, AB, is 12 cm, and angle A = 40°. Find the length of the side opposite angle A, BC, correct to 2 decimal places.', checkMode: 'auto', options: ['9.19 cm', '7.71 cm', '10.07 cm', '14.30 cm'], correctIndex: 2, explanation: 'tan A = opposite / adjacent = BC / AB\ntan 40° = BC / 12\nBC = 12 × tan 40° ≈ 12 × 0.8391 ≈ 10.07 cm ✓ (9.19 cm comes from mistakenly using cos 40° instead of tan 40°; 7.71 cm comes from using sin 40° and treating 12 as the hypotenuse; 14.30 cm comes from dividing by tan 40° instead of multiplying.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 152.6,140 30,37.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"91.3\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><path d=\"M 134.6,140 A 18 18 0 0 1 138.8,128.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"129.1\" y=\"131.4\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"162.6\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"33.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"88.6\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle DEF, the right angle is at E. The hypotenuse DF = 18 cm, and angle D = 52°. Find the length of the side opposite angle D, EF, correct to 2 decimal places.', checkMode: 'auto', options: ['11.08 cm', '23.04 cm', '22.84 cm', '14.18 cm'], correctIndex: 3, explanation: 'sin D = opposite / hypotenuse = EF / DF\nsin 52° = EF / 18\nEF = 18 × sin 52° ≈ 18 × 0.7880 ≈ 14.18 cm ✓ (11.08 cm comes from mistakenly using cos 52° instead of sin 52°; 23.04 cm comes from using tan 52° instead of sin 52°; 22.84 cm comes from dividing by sin 52° instead of multiplying.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 127.7,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"98.8\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><path d=\"M 109.7,140 A 18 18 0 0 1 116.6,125.8\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"105.2\" y=\"129\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"137.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"77.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle GHI, the right angle is at H. The side opposite angle G, HI, is 9 cm, and angle G = 35°. Find the length of the hypotenuse GI, correct to 2 decimal places.', checkMode: 'auto', options: ['10.99 cm', '5.16 cm', '15.69 cm', '12.85 cm'], correctIndex: 2, explanation: 'sin G = opposite / hypotenuse\nsin 35° = 9 / GI\nGI = 9 / sin 35° ≈ 9 / 0.5736 ≈ 15.69 cm ✓ (10.99 cm comes from mistakenly using cos 35° instead of sin 35°; 5.16 cm comes from multiplying by sin 35° instead of dividing; 12.85 cm comes from dividing by tan 35° instead of sin 35°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 117.5,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"73.8\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><path d=\"M 30,33 A 18 18 0 0 0 40.3,29.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"37.5\" y=\"38.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"127.5\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"93.8\" y=\"71.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle JKL, the right angle is at K. The hypotenuse JL = 25 cm, and angle J = 63°. Find the length of the side adjacent to angle J, JK, correct to 2 decimal places.', checkMode: 'auto', options: ['22.28 cm', '11.35 cm', '55.07 cm', '49.07 cm'], correctIndex: 1, explanation: 'cos J = adjacent / hypotenuse = JK / JL\ncos 63° = JK / 25\nJK = 25 × cos 63° ≈ 25 × 0.4540 ≈ 11.35 cm ✓ (22.28 cm comes from mistakenly using sin 63° instead of cos 63°; 55.07 cm comes from dividing by cos 63° instead of multiplying; 49.07 cm comes from using tan 63° instead of cos 63°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 93.7,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"81.8\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 75.7,140 A 18 18 0 0 1 85.5,124.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72.4\" y=\"126.9\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">63°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"103.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"61.8\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 4 — Missing angle given two sides (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle MNO, the right angle is at N. The side opposite angle M, NO, is 8 cm, and the side adjacent to angle M, MN, is 15 cm. Find the size of angle M, correct to 2 decimal places.', checkMode: 'auto', options: ['32.23°', '61.93°', '28.07°', '0.49°'], correctIndex: 2, explanation: 'tan M = opposite / adjacent = NO / MN = 8 / 15 ≈ 0.5333\nM = tan⁻¹(0.5333) ≈ 28.07° ✓ (32.23° comes from mistakenly using sin⁻¹(8/15) instead of tan⁻¹; 61.93° comes from flipping the ratio to 15/8; 0.49° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle PQR, the right angle is at Q. The side opposite angle P, QR, is 9 cm, and the hypotenuse PR is 41 cm. Find the size of angle P, correct to 2 decimal places.', checkMode: 'auto', options: ['77.32°', '12.38°', '0.22°', '12.68°'], correctIndex: 3, explanation: 'sin P = opposite / hypotenuse = QR / PR = 9 / 41 ≈ 0.2195\nP = sin⁻¹(0.2195) ≈ 12.68° ✓ (77.32° comes from mistakenly using cos⁻¹(9/41) instead of sin⁻¹ — that is actually the other acute angle; 12.38° comes from wrongly using tan⁻¹(9/41); 0.22° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle STU, the right angle is at T. The side adjacent to angle S, ST, is 11 cm, and the hypotenuse SU is 61 cm. Find the size of angle S, correct to 2 decimal places.', checkMode: 'auto', options: ['79.61°', '10.39°', '10.22°', '0.18°'], correctIndex: 0, explanation: 'cos S = adjacent / hypotenuse = ST / SU = 11 / 61 ≈ 0.1803\nS = cos⁻¹(0.1803) ≈ 79.61° ✓ (10.39° comes from mistakenly using sin⁻¹(11/61) instead of cos⁻¹ — that is actually the other acute angle; 10.22° comes from wrongly using tan⁻¹(11/61); 0.18° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Block 5 — Angle of elevation / depression word problems (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'From a point 60 m from the base of a tower, the angle of elevation to the top of the tower is 32°. Find the height of the tower, correct to 2 decimal places.', checkMode: 'auto', options: ['50.88 m', '37.49 m', '31.80 m', '96.02 m'], correctIndex: 1, explanation: 'tan 32° = height / 60\nheight = 60 × tan 32° ≈ 60 × 0.6249 ≈ 37.49 m ✓ (50.88 m comes from mistakenly using cos 32° instead of tan 32°; 31.80 m comes from using sin 32° instead; 96.02 m comes from using the complementary angle 58° instead of 32°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'A person standing on top of a 45 m cliff observes a boat out at sea at an angle of depression of 18°. Find the horizontal distance from the base of the cliff to the boat, correct to 1 decimal place.', checkMode: 'auto', options: ['14.6 m', '145.6 m', '138.5 m', '47.3 m'], correctIndex: 2, explanation: 'The angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles), so the angle in the right-angled triangle is 18°.\ntan 18° = 45 / distance\ndistance = 45 / tan 18° ≈ 45 / 0.3249 ≈ 138.5 m ✓ (14.6 m comes from mistakenly multiplying by tan 18° instead of dividing; 145.6 m comes from using sin 18° instead of tan 18°; 47.3 m comes from using cos 18° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Two buildings stand 22 m apart. The shorter building is 18 m tall. From the top of the shorter building, the angle of elevation to the top of the taller building is 27°. Find the height of the taller building, correct to 2 decimal places.', checkMode: 'auto', options: ['11.21 m', '19.60 m', '37.60 m', '29.21 m'], correctIndex: 3, explanation: 'The height difference between the two rooftops forms the opposite side of a right-angled triangle with the 22 m horizontal gap as the adjacent side.\ntan 27° = height difference / 22\nheight difference = 22 × tan 27° ≈ 22 × 0.5095 ≈ 11.21 m\nTotal height = 18 + 11.21 ≈ 29.21 m ✓ (11.21 m forgets to add the 18 m base height; 19.60 m comes from mistakenly using cos 27° and forgetting to add the base height; 37.60 m uses cos 27° for the height difference and does add the base height.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Combined multi-step problems (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, making an angle of 58° with the horizontal ground. The base of the ladder is 3 m from the wall. Find the length of the ladder, correct to 2 decimal places.', checkMode: 'auto', options: ['5.66 m', '3.54 m', '1.59 m', '1.87 m'], correctIndex: 0, explanation: 'The ladder is the hypotenuse. The 3 m base distance is adjacent to the 58° angle.\ncos 58° = 3 / ladder length\nladder length = 3 / cos 58° ≈ 3 / 0.5299 ≈ 5.66 m ✓ (3.54 m comes from mistakenly using sin 58° instead of cos 58°; 1.59 m comes from multiplying by cos 58° instead of dividing; 1.87 m comes from multiplying by tan 58° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"103.7\" y1=\"140\" x2=\"103.7\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 91.7,140 L 91.7,128 L 103.7,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"103.7\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 44.8,116.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"51.9\" y=\"127.9\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">58°</text><text x=\"66.9\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">3 m</text><text x=\"88.9\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle PQR, the right angle is at Q. The hypotenuse PR = 20 cm and angle P = 42°. Find the length of QR (opposite P), correct to 2 decimal places.', checkMode: 'auto', options: ['14.86 cm', '13.38 cm', '10.00 cm', '18.01 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 20 × sin 42° ≈ 13.38 cm ✓ (14.86 cm is actually PQ = 20 × cos 42° — the adjacent side, not QR; 10.00 cm mistakenly halves the hypotenuse; 18.01 cm comes from mistakenly using 20 × tan 42°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 148.9,140 30,32.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"89.5\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"86.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"109.5\" y=\"80.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 130.9,140 A 18 18 0 0 1 135.5,128.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"125.6\" y=\"131\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"158.9\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"28.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'A surveyor stands 100 m from the base of a tower and measures the angle of elevation to the top as 24°. She then walks 30 m closer to the tower and measures the new angle of elevation. Find the new angle of elevation, correct to 2 decimal places.', checkMode: 'auto', options: ['24°', '18.91°', '32.46°', '34.29°'], correctIndex: 2, explanation: 'Height of tower = 100 × tan 24° ≈ 44.52 m (unchanged). New distance = 100 − 30 = 70 m. New angle = tan⁻¹(44.52 / 70) ≈ 32.46° ✓ (24° forgets to recalculate for the new, closer distance; 18.91° mistakenly adds the 30 m instead of subtracting it; 34.29° wrongly assumes the angle scales proportionally with distance.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"64.3\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 43.8,129.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.5\" y=\"134.8\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24°</text><path d=\"M 104,140 A 24 24 0 0 0 99.8,126.4\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">100 m</text></svg>"},
        { difficulty: 'Hard', question: 'A point (8, −15) lies on the terminal arm of angle θ. Which statement about r, sin θ and cos θ is correct?', checkMode: 'auto', options: ['r = 7; sin θ is negative and cos θ is positive.', 'r = 17; sin θ is positive and cos θ is negative, since y is negative and x is positive.', 'r = 17; both sin θ and cos θ are negative, since the point has a negative coordinate.', 'r = 17; sin θ is negative and cos θ is positive, since y is negative and x is positive (the point lies in the fourth quadrant).'], correctIndex: 3, explanation: 'r = √(8² + (−15)²) = √(64 + 225) = √289 = 17. Since y = −15 is negative and x = 8 is positive, the point lies in the fourth quadrant, where sin θ (= y/r) is negative and cos θ (= x/r) is positive. ✓ (r = 7 uses an incomplete calculation instead of the full Pythagorean sum; options B and C misapply the quadrant sign rules.)' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"135.6\" y2=\"158\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"135.6\" cy=\"158\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"149.6\" y=\"174\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(8, −15)</text><line x1=\"135.6\" y1=\"158\" x2=\"135.6\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"147.6\" y=\"134\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−15</text><text x=\"122.8\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8</text><text x=\"140.8\" y=\"146\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered trig ratios, special angles, solving right-angled triangles and elevation/depression problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on missing sides, missing angles or word problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on SOHCAHTOA and inverse trig functions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — SOHCAHTOA ratio identification (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In right-angled triangle KLM, angle L = 90°. Relative to angle K, which side is the hypotenuse?', checkMode: 'auto', options: ['KM, because it is the side opposite the right angle at L.', 'KL, because it touches the right angle at L.', 'LM, because it is opposite angle K.', 'It cannot be determined without knowing angle M.'], correctIndex: 0, explanation: 'The hypotenuse is always the side opposite the right angle. Since the right angle is at L, the hypotenuse is KM — this can be identified immediately without needing any other angle or side length. ✓ (KL is a leg touching the right angle, not the hypotenuse; LM is the side opposite K, not the hypotenuse.)' },
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, angle C = 90°. Write down the ratio for cos A in terms of the sides of the triangle.', checkMode: 'auto', options: ['BC/AB', 'AC/AB', 'BC/AC', 'AB/AC'], correctIndex: 1, explanation: 'cos A = adjacent / hypotenuse. The side adjacent to angle A is AC, and the hypotenuse (opposite the right angle at C) is AB. So cos A = AC/AB. ✓ (BC/AB is sin A — using the opposite side instead of adjacent; BC/AC is tan A; AB/AC is the correct ratio flipped upside down.)' },
        { difficulty: 'Medium', question: 'In right-angled triangle DEF, angle E = 90°. Which trigonometric ratio (sin, cos or tan) of angle D links side EF (opposite D) and side DE (adjacent to D)?', checkMode: 'auto', options: ['sin', 'cos', 'tan', 'It could be any of sin, cos or tan depending on the triangle\'s size.'], correctIndex: 2, explanation: 'TOA: tan = opposite / adjacent. EF is opposite angle D and DE is adjacent to D, so the ratio linking them is tan D. ✓ (sin links opposite and hypotenuse; cos links adjacent and hypotenuse — neither involves EF and DE together. The ratio depends only on which two sides are named, not on the triangle\'s size.)' },

        // Block 2 — Special angle values recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Write down the exact value of cos 0°.', checkMode: 'auto', options: ['0', '0.5', '0.87', '1'], correctIndex: 3, explanation: 'cos 0° = 1, one of the standard special-angle values. ✓ (0 is cos 90°; 0.5 is cos 60°; 0.87 is cos 30° — mixing up which special angle gives which value is a common mistake.)' },
        { difficulty: 'Medium', question: 'Write down the exact value of sin 90°.', checkMode: 'auto', options: ['1', '0', '0.87', '0.5'], correctIndex: 0, explanation: 'sin 90° = 1, the maximum value of the sine function. ✓ (0 is sin 0°; 0.87 is sin 60°; 0.5 is sin 30° — mixing up which special angle gives which value is a common mistake.)' },
        { difficulty: 'Medium', question: 'Without using a calculator, evaluate sin 60° − cos 30°.', checkMode: 'auto', options: ['1.73', '0', '0.37', '−0.37'], correctIndex: 1, explanation: 'sin 60° = 0.87 and cos 30° = 0.87 (they are equal, since 60° and 30° are complementary angles). So sin 60° − cos 30° = 0. ✓ (1.73 comes from adding instead of subtracting; 0.37 and −0.37 come from mistakenly using cos 30° = 0.5, confusing it with sin 30°.)' },

        // Block 3 — Missing side given one side + one angle (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, the right angle is at B. The side adjacent to angle A, AB, is 15 cm, and angle A = 35°. Find the length of the side opposite angle A, BC, correct to 2 decimal places.', checkMode: 'auto', options: ['12.29 cm', '8.60 cm', '10.50 cm', '21.42 cm'], correctIndex: 2, explanation: 'tan A = opposite / adjacent = BC / AB\ntan 35° = BC / 15\nBC = 15 × tan 35° ≈ 15 × 0.7002 ≈ 10.50 cm ✓ (12.29 cm comes from mistakenly using cos 35° instead of tan 35°; 8.60 cm comes from using sin 35° and treating 15 as the hypotenuse; 21.42 cm comes from dividing by tan 35° instead of multiplying.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 161.1,140 30,48.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"95.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><path d=\"M 143.1,140 A 18 18 0 0 1 146.3,129.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"137.2\" y=\"132.5\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"171.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"44.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"94.1\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle DEF, the right angle is at E. The hypotenuse DF = 22 cm, and angle D = 48°. Find the length of the side opposite angle D, EF, correct to 2 decimal places.', checkMode: 'auto', options: ['14.72 cm', '29.60 cm', '24.43 cm', '16.35 cm'], correctIndex: 3, explanation: 'sin D = opposite / hypotenuse = EF / DF\nsin 48° = EF / 22\nEF = 22 × sin 48° ≈ 22 × 0.7431 ≈ 16.35 cm ✓ (14.72 cm comes from mistakenly using cos 48° instead of sin 48°; 29.60 cm comes from dividing by sin 48° instead of multiplying; 24.43 cm comes from using tan 48° instead of sin 48°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"103.5\" y=\"74.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">22 cm</text><path d=\"M 119.1,140 A 18 18 0 0 1 125.0,126.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"114.2\" y=\"129.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"80.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle GHI, the right angle is at H. The side opposite angle G, HI, is 11 cm, and angle G = 29°. Find the length of the hypotenuse GI, correct to 2 decimal places.', checkMode: 'auto', options: ['22.69 cm', '12.58 cm', '5.33 cm', '19.84 cm'], correctIndex: 0, explanation: 'sin G = opposite / hypotenuse\nsin 29° = 11 / GI\nGI = 11 / sin 29° ≈ 11 / 0.4848 ≈ 22.69 cm ✓ (12.58 cm comes from mistakenly using cos 29° instead of sin 29°; 5.33 cm comes from multiplying by sin 29° instead of dividing; 19.84 cm comes from dividing by tan 29° instead of sin 29°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 99.3,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"64.6\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><path d=\"M 30,33 A 18 18 0 0 0 38.7,30.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"36.3\" y=\"39.2\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"109.3\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"84.6\" y=\"71.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle JKL, the right angle is at K. The hypotenuse JL = 30 cm, and angle J = 57°. Find the length of the side adjacent to angle J, JK, correct to 2 decimal places.', checkMode: 'auto', options: ['25.16 cm', '16.34 cm', '55.08 cm', '46.20 cm'], correctIndex: 1, explanation: 'cos J = adjacent / hypotenuse = JK / JL\ncos 57° = JK / 30\nJK = 30 × cos 57° ≈ 30 × 0.5446 ≈ 16.34 cm ✓ (25.16 cm comes from mistakenly using sin 57° instead of cos 57°; 55.08 cm comes from dividing by cos 57° instead of multiplying; 46.20 cm comes from using tan 57° instead of cos 57°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 111.2,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"90.6\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 93.2,140 A 18 18 0 0 1 101.4,124.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"89.2\" y=\"128.1\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">57°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"121.2\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"70.6\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 4 — Missing angle given two sides (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle MNO, the right angle is at N. The side opposite angle M, NO, is 5 cm, and the side adjacent to angle M, MN, is 12 cm. Find the size of angle M, correct to 2 decimal places.', checkMode: 'auto', options: ['24.62°', '67.38°', '22.62°', '0.39°'], correctIndex: 2, explanation: 'tan M = opposite / adjacent = NO / MN = 5 / 12 ≈ 0.4167\nM = tan⁻¹(0.4167) ≈ 22.62° ✓ (24.62° comes from mistakenly using sin⁻¹(5/12) instead of tan⁻¹; 67.38° comes from flipping the ratio to 12/5; 0.39° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle PQR, the right angle is at Q. The side opposite angle P, QR, is 20 cm, and the hypotenuse PR is 29 cm. Find the size of angle P, correct to 2 decimal places.', checkMode: 'auto', options: ['46.40°', '34.59°', '0.60°', '43.60°'], correctIndex: 3, explanation: 'sin P = opposite / hypotenuse = QR / PR = 20 / 29 ≈ 0.6897\nP = sin⁻¹(0.6897) ≈ 43.60° ✓ (46.40° comes from mistakenly using cos⁻¹(20/29) instead of sin⁻¹ — that is actually the other acute angle; 34.59° comes from wrongly using tan⁻¹(20/29); 0.60° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle STU, the right angle is at T. The side adjacent to angle S, ST, is 20 cm, and the hypotenuse SU is 29 cm. Find the size of angle S, correct to 2 decimal places.', checkMode: 'auto', options: ['46.40°', '43.60°', '34.59°', '0.60°'], correctIndex: 0, explanation: 'cos S = adjacent / hypotenuse = ST / SU = 20 / 29 ≈ 0.6897\nS = cos⁻¹(0.6897) ≈ 46.40° ✓ (43.60° comes from mistakenly using sin⁻¹(20/29) instead of cos⁻¹ — that is actually the other acute angle; 34.59° comes from wrongly using tan⁻¹(20/29); 0.60° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Block 5 — Angle of elevation / depression word problems (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'From a point 45 m from the base of a tower, the angle of elevation to the top of the tower is 28°. Find the height of the tower, correct to 2 decimal places.', checkMode: 'auto', options: ['39.73 m', '23.93 m', '21.13 m', '84.63 m'], correctIndex: 1, explanation: 'tan 28° = height / 45\nheight = 45 × tan 28° ≈ 45 × 0.5317 ≈ 23.93 m ✓ (39.73 m comes from mistakenly using cos 28° instead of tan 28°; 21.13 m comes from using sin 28° instead; 84.63 m comes from using the complementary angle 62° instead of 28°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'A person standing on top of a 38 m cliff observes a boat out at sea at an angle of depression of 22°. Find the horizontal distance from the base of the cliff to the boat, correct to 2 decimal places.', checkMode: 'auto', options: ['15.35 m', '101.44 m', '94.05 m', '40.98 m'], correctIndex: 2, explanation: 'The angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles), so the angle in the right-angled triangle is 22°.\ntan 22° = 38 / distance\ndistance = 38 / tan 22° ≈ 38 / 0.4040 ≈ 94.05 m ✓ (15.35 m comes from mistakenly multiplying by tan 22° instead of dividing; 101.44 m comes from using sin 22° instead of tan 22°; 40.98 m comes from using cos 22° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">38 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Two buildings stand 19 m apart. The shorter building is 14 m tall. From the top of the shorter building, the angle of elevation to the top of the taller building is 31°. Find the height of the taller building, correct to 2 decimal places.', checkMode: 'auto', options: ['11.42 m', '16.29 m', '30.29 m', '25.42 m'], correctIndex: 3, explanation: 'The height difference between the two rooftops forms the opposite side of a right-angled triangle with the 19 m horizontal gap as the adjacent side.\ntan 31° = height difference / 19\nheight difference = 19 × tan 31° ≈ 19 × 0.6009 ≈ 11.42 m\nTotal height = 14 + 11.42 ≈ 25.42 m ✓ (11.42 m forgets to add the 14 m base height; 16.29 m comes from mistakenly using cos 31° and forgetting to add the base height; 30.29 m uses cos 31° for the height difference and does add the base height.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">19 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Combined multi-step problems (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, making an angle of 62° with the horizontal ground. The base of the ladder is 4 m from the wall. Find the length of the ladder, correct to 2 decimal places.', checkMode: 'auto', options: ['8.52 m', '4.53 m', '1.88 m', '2.13 m'], correctIndex: 0, explanation: 'The ladder is the hypotenuse. The 4 m base distance is adjacent to the 62° angle.\ncos 62° = 4 / ladder length\nladder length = 4 / cos 62° ≈ 4 / 0.4695 ≈ 8.52 m ✓ (4.53 m comes from mistakenly using sin 62° instead of cos 62°; 1.88 m comes from multiplying by cos 62° instead of dividing; 2.13 m comes from multiplying by tan 62° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"92.7\" y1=\"140\" x2=\"92.7\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 80.7,140 L 80.7,128 L 92.7,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"92.7\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 43.1,115.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"51.4\" y=\"127.1\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">62°</text><text x=\"61.4\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">4 m</text><text x=\"83.4\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle PQR, the right angle is at Q. The hypotenuse PR = 24 cm and angle P = 37°. Find the length of QR (opposite P), correct to 2 decimal places.', checkMode: 'auto', options: ['19.17 cm', '14.44 cm', '12.00 cm', '18.09 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 24 × sin 37° ≈ 14.44 cm ✓ (19.17 cm is actually PQ = 24 × cos 37° — the adjacent side, not QR; 12.00 cm mistakenly halves the hypotenuse; 18.09 cm comes from mistakenly using 24 × tan 37°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 157.8,140 30,43.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"93.9\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"91.9\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"113.9\" y=\"85.9\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><path d=\"M 139.8,140 A 18 18 0 0 1 143.4,129.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"134.1\" y=\"132.1\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">37°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"167.8\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"39.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'A surveyor stands 90 m from the base of a tower and measures the angle of elevation to the top as 26°. She then walks 25 m closer to the tower and measures the new angle of elevation. Find the new angle of elevation, correct to 2 decimal places.', checkMode: 'auto', options: ['26°', '20.89°', '34.03°', '36.00°'], correctIndex: 2, explanation: 'Height of tower = 90 × tan 26° ≈ 43.90 m (unchanged). New distance = 90 − 25 = 65 m. New angle = tan⁻¹(43.90 / 65) ≈ 34.03° ✓ (26° forgets to recalculate for the new, closer distance; 20.89° mistakenly adds the 25 m instead of subtracting it; 36.00° wrongly assumes the angle scales proportionally with distance.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"57.1\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 43.4,128.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.4\" y=\"134.4\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26°</text><path d=\"M 104,140 A 24 24 0 0 0 99.2,125.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">90 m</text></svg>"},
        { difficulty: 'Hard', question: 'A point (7, −24) lies on the terminal arm of angle θ. Which statement about r, sin θ and cos θ is correct?', checkMode: 'auto', options: ['r = 17; sin θ is negative and cos θ is positive.', 'r = 25; sin θ is positive and cos θ is negative, since y is negative and x is positive.', 'r = 25; both sin θ and cos θ are negative, since the point has a negative coordinate.', 'r = 25; sin θ is negative and cos θ is positive, since y is negative and x is positive (the point lies in the fourth quadrant).'], correctIndex: 3, explanation: 'r = √(7² + (−24)²) = √(49 + 576) = √625 = 25. Since y = −24 is negative and x = 7 is positive, the point lies in the fourth quadrant, where sin θ (= y/r) is negative and cos θ (= x/r) is positive. ✓ (r = 17 uses the wrong pair of coordinates entirely; options B and C misapply the quadrant sign rules.)' , diagramSvg: "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"132.4\" y2=\"186.8\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"132.4\" cy=\"186.8\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"146.4\" y=\"202.8\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(7, −24)</text><line x1=\"132.4\" y1=\"186.8\" x2=\"132.4\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"144.4\" y=\"148.4\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−24</text><text x=\"121.2\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7</text><text x=\"139.2\" y=\"160.4\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered trig ratios, special angles, solving right-angled triangles and elevation/depression problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on missing sides, missing angles or word problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on SOHCAHTOA and inverse trig functions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — SOHCAHTOA ratio identification (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In right-angled triangle RST, angle S = 90°. Relative to angle R, which side is the hypotenuse?', checkMode: 'auto', options: ['RT, because it is the side opposite the right angle at S.', 'RS, because it touches the right angle at S.', 'ST, because it is opposite angle R.', 'It cannot be determined without knowing angle T.'], correctIndex: 0, explanation: 'The hypotenuse is always the side opposite the right angle. Since the right angle is at S, the hypotenuse is RT — this can be identified immediately without needing any other angle or side length. ✓ (RS is a leg touching the right angle, not the hypotenuse; ST is the side opposite R, not the hypotenuse.)' },
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, angle B = 90°. Write down the ratio for tan C in terms of the sides of the triangle.', checkMode: 'auto', options: ['AB/AC', 'AB/BC', 'BC/AC', 'BC/AB'], correctIndex: 1, explanation: 'tan C = opposite / adjacent. The side opposite angle C is AB, and the side adjacent to C is BC. So tan C = AB/BC. ✓ (AB/AC is sin C — using the hypotenuse instead of the adjacent side; BC/AC is cos C; BC/AB is the correct ratio flipped upside down.)' },
        { difficulty: 'Medium', question: 'In right-angled triangle DEF, angle F = 90°. Which trigonometric ratio (sin, cos or tan) of angle D links side EF (opposite D) and side DF (the hypotenuse)?', checkMode: 'auto', options: ['cos', 'tan', 'sin', 'It could be any of sin, cos or tan depending on the triangle\'s size.'], correctIndex: 2, explanation: 'SOH: sin = opposite / hypotenuse. EF is opposite angle D and DF is the hypotenuse, so the ratio linking them is sin D. ✓ (cos links adjacent and hypotenuse; tan links opposite and adjacent — neither involves EF and DF together. The ratio depends only on which two sides are named, not on the triangle\'s size.)' },

        // Block 2 — Special angle values recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Write down the exact value of tan 0°.', checkMode: 'auto', options: ['1', '1.73', '0.58', '0'], correctIndex: 3, explanation: 'tan 0° = 0, one of the standard special-angle values. ✓ (1 is tan 45°; 1.73 is tan 60°; 0.58 is tan 30° — mixing up which special angle gives which value is a common mistake.)' },
        { difficulty: 'Medium', question: 'Write down the exact value of cos 45°, correct to 4 decimal places.', checkMode: 'auto', options: ['0.7071', '0.5', '0.87', '1'], correctIndex: 0, explanation: 'cos 45° = √2/2 ≈ 0.7071, one of the standard special-angle values. ✓ (0.5 is cos 60°; 0.87 is cos 30°; 1 is cos 0° — mixing up which special angle gives which value is a common mistake.)' },
        { difficulty: 'Medium', question: 'Without using a calculator, evaluate 2 × sin 30° + cos 0°.', checkMode: 'auto', options: ['1.5', '2', '3', '1.87'], correctIndex: 1, explanation: 'sin 30° = 0.5 and cos 0° = 1. So 2 × sin 30° + cos 0° = 2 × 0.5 + 1 = 1 + 1 = 2. ✓ (1.5 forgets to double sin 30° first; 3 mistakenly doubles cos 0° as well; 1.87 mistakenly uses cos 30° instead of cos 0°.)' },

        // Block 3 — Missing side given one side + one angle (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle ABC, the right angle is at B. The side adjacent to angle A, AB, is 20 cm, and angle A = 48°. Find the length of the side opposite angle A, BC, correct to 2 decimal places.', checkMode: 'auto', options: ['13.38 cm', '14.86 cm', '22.21 cm', '18.01 cm'], correctIndex: 2, explanation: 'tan A = opposite / adjacent = BC / AB\ntan 48° = BC / 20\nBC = 20 × tan 48° ≈ 20 × 1.1106 ≈ 22.21 cm ✓ (13.38 cm comes from mistakenly using cos 48° instead of tan 48°; 14.86 cm comes from using sin 48° and treating 20 as the hypotenuse; 18.01 cm comes from dividing by tan 48° instead of multiplying.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"83.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 119.1,140 A 18 18 0 0 1 125.0,126.6\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"114.2\" y=\"129.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"14\" y=\"80.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle DEF, the right angle is at E. The hypotenuse DF = 16 cm, and angle D = 61°. Find the length of the side opposite angle D, EF, correct to 2 decimal places.', checkMode: 'auto', options: ['7.76 cm', '18.29 cm', '28.86 cm', '13.99 cm'], correctIndex: 3, explanation: 'sin D = opposite / hypotenuse = EF / DF\nsin 61° = EF / 16\nEF = 16 × sin 61° ≈ 16 × 0.8746 ≈ 13.99 cm ✓ (7.76 cm comes from mistakenly using cos 61° instead of sin 61°; 18.29 cm comes from dividing by sin 61° instead of multiplying; 28.86 cm comes from using tan 61° instead of sin 61°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 99.3,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"84.6\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><path d=\"M 81.3,140 A 18 18 0 0 1 90.6,124.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"77.7\" y=\"127.3\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">61°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"109.3\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"14\" y=\"77.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle GHI, the right angle is at H. The side opposite angle G, HI, is 14 cm, and angle G = 42°. Find the length of the hypotenuse GI, correct to 2 decimal places.', checkMode: 'auto', options: ['20.92 cm', '18.84 cm', '9.37 cm', '15.55 cm'], correctIndex: 0, explanation: 'sin G = opposite / hypotenuse\nsin 42° = 14 / GI\nGI = 14 / sin 42° ≈ 14 / 0.6691 ≈ 20.92 cm ✓ (18.84 cm comes from mistakenly using cos 42° instead of sin 42°; 9.37 cm comes from multiplying by sin 42° instead of dividing; 15.55 cm comes from dividing by tan 42° instead of sin 42°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 137.1,140 30,21.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"83.5\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><path d=\"M 30,39.1 A 18 18 0 0 0 42.0,34.5\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"39\" y=\"44.4\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"147.1\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"20\" y=\"17.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"103.5\" y=\"74.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle JKL, the right angle is at K. The hypotenuse JL = 33 cm, and angle J = 69°. Find the length of the side adjacent to angle J, JK, correct to 2 decimal places.', checkMode: 'auto', options: ['30.81 cm', '11.83 cm', '92.08 cm', '85.97 cm'], correctIndex: 1, explanation: 'cos J = adjacent / hypotenuse = JK / JL\ncos 69° = JK / 33\nJK = 33 × cos 69° ≈ 33 × 0.3584 ≈ 11.83 cm ✓ (30.81 cm comes from mistakenly using sin 69° instead of cos 69°; 92.08 cm comes from dividing by cos 69° instead of multiplying; 85.97 cm comes from using tan 69° instead of cos 69°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 78,140 30,15\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"74\" y=\"71.5\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">33 cm</text><path d=\"M 60,140 A 18 18 0 0 1 71.5,123.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"57.4\" y=\"125.8\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">69°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">K</text><text x=\"88\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">J</text><text x=\"20\" y=\"11\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">L</text><text x=\"54\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 4 — Missing angle given two sides (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In right-angled triangle MNO, the right angle is at N. The side opposite angle M, NO, is 20 cm, and the side adjacent to angle M, MN, is 21 cm. Find the size of angle M, correct to 2 decimal places.', checkMode: 'auto', options: ['72.25°', '46.40°', '43.60°', '0.76°'], correctIndex: 2, explanation: 'tan M = opposite / adjacent = NO / MN = 20 / 21 ≈ 0.9524\nM = tan⁻¹(0.9524) ≈ 43.60° ✓ (72.25° comes from mistakenly using sin⁻¹(20/21) instead of tan⁻¹; 46.40° comes from flipping the ratio to 21/20; 0.76° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">N</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">M</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">O</text></svg>"},
        { difficulty: 'Medium', question: 'In right-angled triangle PQR, the right angle is at Q. The side opposite angle P, QR, is 7 cm, and the hypotenuse PR is 25 cm. Find the size of angle P, correct to 2 decimal places.', checkMode: 'auto', options: ['73.74°', '15.64°', '0.27°', '16.26°'], correctIndex: 3, explanation: 'sin P = opposite / hypotenuse = QR / PR = 7 / 25 = 0.28\nP = sin⁻¹(0.28) ≈ 16.26° ✓ (73.74° comes from mistakenly using cos⁻¹(7/25) instead of sin⁻¹ — that is actually the other acute angle; 15.64° comes from wrongly using tan⁻¹(7/25); 0.27° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"14\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle STU, the right angle is at T. The side adjacent to angle S, ST, is 7 cm, and the hypotenuse SU is 25 cm. Find the size of angle S, correct to 2 decimal places.', checkMode: 'auto', options: ['73.74°', '16.26°', '15.64°', '0.27°'], correctIndex: 0, explanation: 'cos S = adjacent / hypotenuse = ST / SU = 7 / 25 = 0.28\nS = cos⁻¹(0.28) ≈ 73.74° ✓ (16.26° comes from mistakenly using sin⁻¹(7/25) instead of cos⁻¹ — that is actually the other acute angle; 15.64° comes from wrongly using tan⁻¹(7/25); 0.27° comes from a calculator left in radian mode.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"120\" y=\"89\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text><path d=\"M 152,140 A 18 18 0 0 1 154.9,130.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"146\" y=\"134\" font-size=\"12.5\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"180\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">S</text><text x=\"20\" y=\"46\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">U</text></svg>"},

        // Block 5 — Angle of elevation / depression word problems (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'From a point 55 m from the base of a tower, the angle of elevation to the top of the tower is 24°. Find the height of the tower, correct to 2 decimal places.', checkMode: 'auto', options: ['50.25 m', '24.49 m', '22.37 m', '123.53 m'], correctIndex: 1, explanation: 'tan 24° = height / 55\nheight = 55 × tan 24° ≈ 55 × 0.4452 ≈ 24.49 m ✓ (50.25 m comes from mistakenly using cos 24° instead of tan 24°; 22.37 m comes from using sin 24° instead; 123.53 m comes from using the complementary angle 66° instead of 24°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 170,128 L 158,128 L 158,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 58,140 A 28 28 0 0 0 52.8,123.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52\" y=\"128\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55 m</text><text x=\"188\" y=\"94\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"30\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Medium', question: 'A person standing on top of a 52 m cliff observes a boat out at sea at an angle of depression of 25°. Find the horizontal distance from the base of the cliff to the boat, correct to 2 decimal places.', checkMode: 'auto', options: ['24.25 m', '123.04 m', '111.51 m', '57.38 m'], correctIndex: 2, explanation: 'The angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles), so the angle in the right-angled triangle is 25°.\ntan 25° = 52 / distance\ndistance = 52 / tan 25° ≈ 52 / 0.4663 ≈ 111.51 m ✓ (24.25 m comes from mistakenly multiplying by tan 25° instead of dividing; 123.04 m comes from using sin 25° instead of tan 25°; 57.38 m comes from using cos 25° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 42,140 L 42,128 L 30,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"40\" x2=\"190\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"30\" y1=\"40\" x2=\"190\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 62,40 A 32 32 0 0 1 57.1,57.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"66\" y=\"56\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><text x=\"12\" y=\"94\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">52 m</text><text x=\"112\" y=\"150\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><polygon points=\"185,140 197,140 191,133\" fill=\"#0f1f3d\"/></svg>"},
        { difficulty: 'Hard', question: 'Two buildings stand 26 m apart. The shorter building is 20 m tall. From the top of the shorter building, the angle of elevation to the top of the taller building is 33°. Find the height of the taller building, correct to 2 decimal places.', checkMode: 'auto', options: ['16.88 m', '21.81 m', '41.81 m', '36.88 m'], correctIndex: 3, explanation: 'The height difference between the two rooftops forms the opposite side of a right-angled triangle with the 26 m horizontal gap as the adjacent side.\ntan 33° = height difference / 26\nheight difference = 26 × tan 33° ≈ 26 × 0.6494 ≈ 16.88 m\nTotal height = 20 + 16.88 ≈ 36.88 m ✓ (16.88 m forgets to add the 20 m base height; 21.81 m comes from mistakenly using cos 33° and forgetting to add the base height; 41.81 m uses cos 33° for the height difference and does add the base height.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"90\" width=\"32\" height=\"50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><rect x=\"154\" y=\"40\" width=\"32\" height=\"100\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"90\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"46\" y1=\"90\" x2=\"186\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 76,90 A 30 30 0 0 0 74.3,79.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"72\" y=\"82\" font-size=\"12\" fill=\"#0f1f3d\" font-weight=\"700\" text-anchor=\"middle\">θ</text><path d=\"M 174,90 L 174,78 L 186,78\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"30\" y=\"118\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"116\" y=\"82\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 m</text><text x=\"198\" y=\"66\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},

        // Block 6 — Combined multi-step problems (Medium/Hard/Hard/Hard)
        { difficulty: 'Medium', question: 'A ladder leans against a vertical wall, making an angle of 55° with the horizontal ground. The base of the ladder is 2.5 m from the wall. Find the length of the ladder, correct to 2 decimal places.', checkMode: 'auto', options: ['4.36 m', '3.05 m', '1.43 m', '1.75 m'], correctIndex: 0, explanation: 'The ladder is the hypotenuse. The 2.5 m base distance is adjacent to the 55° angle.\ncos 55° = 2.5 / ladder length\nladder length = 2.5 / cos 55° ≈ 2.5 / 0.5736 ≈ 4.36 m ✓ (3.05 m comes from mistakenly using sin 55° instead of cos 55°; 1.43 m comes from multiplying by cos 55° instead of dividing; 1.75 m comes from multiplying by tan 55° instead.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"112.6\" y1=\"140\" x2=\"112.6\" y2=\"7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"15\" y1=\"140\" x2=\"200\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><path d=\"M 100.6,140 L 100.6,128 L 112.6,128\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"140\" x2=\"112.6\" y2=\"22\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 58,140 A 28 28 0 0 0 46.1,117.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"52.2\" y=\"128.5\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">55°</text><text x=\"71.3\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">2.5 m</text><text x=\"93.3\" y=\"70.5\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Hard', question: 'In right-angled triangle PQR, the right angle is at Q. The hypotenuse PR = 30 cm and angle P = 51°. Find the length of QR (opposite P), correct to 2 decimal places.', checkMode: 'auto', options: ['18.88 cm', '23.31 cm', '15.00 cm', '37.05 cm'], correctIndex: 1, explanation: 'QR = PR × sin P = 30 × sin 51° ≈ 23.31 cm ✓ (18.88 cm is actually PQ = 30 × cos 51° — the adjacent side, not QR; 15.00 cm mistakenly halves the hypotenuse; 37.05 cm comes from mistakenly using 30 × tan 51°.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 130.7,140 30,15.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"80.3\" y=\"158\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"14\" y=\"77.8\" font-size=\"15\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"100.3\" y=\"71.8\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 cm</text><path d=\"M 112.7,140 A 18 18 0 0 1 119.4,126.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"129.2\" font-size=\"12.5\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">51°</text><text x=\"20\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">Q</text><text x=\"140.7\" y=\"153\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">P</text><text x=\"20\" y=\"11.7\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">R</text></svg>"},
        { difficulty: 'Hard', question: 'A surveyor stands 120 m from the base of a tower and measures the angle of elevation to the top as 21°. She then walks 40 m closer to the tower and measures the new angle of elevation. Find the new angle of elevation, correct to 2 decimal places.', checkMode: 'auto', options: ['21°', '16.06°', '29.93°', '31.50°'], correctIndex: 2, explanation: 'Height of tower = 120 × tan 21° ≈ 46.06 m (unchanged). New distance = 120 − 40 = 80 m. New angle = tan⁻¹(46.06 / 80) ≈ 29.93° ✓ (21° forgets to recalculate for the new, closer distance; 16.06° mistakenly adds the 40 m instead of subtracting it; 31.50° wrongly assumes the angle scales proportionally with distance.)' , diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"190\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 190,128 L 178,128 L 178,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"140\" x2=\"190\" y2=\"74.7\" stroke=\"#0f1f3d\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 46,140 A 26 26 0 0 0 44.3,130.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.1\"/><text x=\"44.6\" y=\"135.4\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21°</text><path d=\"M 104,140 A 24 24 0 0 0 100.6,127.8\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><text x=\"98\" y=\"130\" font-size=\"12\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text><circle cx=\"20\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><circle cx=\"80\" cy=\"140\" r=\"3\" fill=\"#0f1f3d\"/><text x=\"20\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"156\" font-size=\"10\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"50\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40 m</text><text x=\"10\" y=\"152\" font-size=\"11\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\"></text><text x=\"105\" y=\"20\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">120 m</text></svg>"},
        { difficulty: 'Hard', question: 'A point (9, −40) lies on the terminal arm of angle θ. Which statement about r, sin θ and cos θ is correct?', checkMode: 'auto', options: ['r = 31; sin θ is negative and cos θ is positive.', 'r = 41; sin θ is positive and cos θ is negative, since y is negative and x is positive.', 'r = 41; both sin θ and cos θ are negative, since the point has a negative coordinate.', 'r = 41; sin θ is negative and cos θ is positive, since y is negative and x is positive (the point lies in the fourth quadrant).'], correctIndex: 3, explanation: 'r = √(9² + (−40)²) = √(81 + 1600) = √1681 = 41. Since y = −40 is negative and x = 9 is positive, the point lies in the fourth quadrant, where sin θ (= y/r) is negative and cos θ (= x/r) is positive. ✓ (r = 31 comes from an arithmetic slip in the Pythagorean sum; options B and C misapply the quadrant sign rules.)' , diagramSvg: "<svg viewBox=\"0 0 220 270\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"260\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polygon points=\"210,110 202,106 202,114\" fill=\"#94a3b8\"/><polygon points=\"110,10 106,18 114,18\" fill=\"#94a3b8\"/><text x=\"200\" y=\"124\" font-size=\"11\" fill=\"#64748b\">x</text><text x=\"118\" y=\"20\" font-size=\"11\" fill=\"#64748b\">y</text><line x1=\"110\" y1=\"110\" x2=\"138.8\" y2=\"238\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><circle cx=\"138.8\" cy=\"238\" r=\"4\" fill=\"#0f1f3d\"/><text x=\"152.8\" y=\"254\" font-size=\"13\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"middle\">(9, −40)</text><line x1=\"138.8\" y1=\"238\" x2=\"138.8\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"3,3\"/><text x=\"150.8\" y=\"174\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">−40</text><text x=\"124.4\" y=\"100\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9</text><text x=\"142.4\" y=\"186\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered trig ratios, special angles, solving right-angled triangles and elevation/depression problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on missing sides, missing angles or word problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on SOHCAHTOA and inverse trig functions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
