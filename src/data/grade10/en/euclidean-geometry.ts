import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (euclidean geometry roles) ────────────────────────────────
// matching angles / properties tested / standard definition / conjecture → blue   (#2563eb)
// proportional sides / proof steps / alternative definition / testing   → orange  (#ea580c)
// congruent (identical) / proof connecting / conclusion proven           → green   (#16a34a)
// counter-examples / conclusion disproven                                → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euclidean Geometry',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING SIMILARITY AND CONGRUENCE OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-congruence-triangles',
      title: 'Revising Similarity and Congruence of Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Two triangles are <strong>similar</strong> if their ${bl('corresponding angles are equal')} — their sides are then automatically in proportion. Two triangles are <strong>congruent</strong> if both their ${bl('angles')} AND their ${gr('corresponding sides')} are equal. ${gr('Congruent')} triangles are essentially identical copies, while ${or('similar')} triangles are scaled versions of each other.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('matching angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('proportional sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('congruent (identical)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Similar triangles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same ${bl('shape')}, different size. ${bl('Angles')} are equal; sides are in a fixed ${or('ratio')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Congruent triangles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same ${bl('shape')} AND same size. ${bl('Angles')} equal AND ${gr('sides')} equal — ${gr('identical copies')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Corresponding sides</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sides that are opposite ${bl('equal angles')}. In similar triangles they are in ${or('proportion')}; in congruent triangles they are ${gr('equal')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Similarity vs Congruence at a glance</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Similar (|||)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Corresponding angles')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ Sides in ${or('proportion')} (same ratio)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✖ Sides are NOT necessarily equal</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Congruent (≡)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Corresponding angles')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${gr('Corresponding sides')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✔ Triangles are ${gr('identical in every way')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Memory tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">All ${gr('congruent')} triangles are automatically ${or('similar')}, but NOT all ${or('similar')} triangles are ${gr('congruent')}. Think of congruence as a stricter requirement — it demands both ${bl('equal angles')} AND ${gr('equal sides')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Triangle ABC has angles 40°, 60°, 80°. Triangle DEF has angles 40°, 60°, 80° but different side lengths. Are the triangles similar or congruent?',
          answer: `The triangles are ${or('similar')}, not ${gr('congruent')}`,
          steps: [
            `Check the ${bl('angles')}: Triangle ABC has ${bl('40°')}, ${bl('60°')}, ${bl('80°')} and triangle DEF also has ${bl('40°')}, ${bl('60°')}, ${bl('80°')} — the ${bl('corresponding angles are equal')} ✓`,
            `Check the sides: The question states the triangles have <strong>different side lengths</strong>, so the sides are NOT ${gr('equal')} — they are in ${or('proportion')} (the same ratio), but not identical.`,
            `<strong>Conclusion:</strong> Because the ${bl('angles match')} but the sides differ (scaled), the triangles are ${or('similar')} (|||), not ${gr('congruent')} (≡). To be congruent, BOTH the angles AND the sides must be equal.`,
          ],
        },
        {
          question: 'Sipho says two triangles with the same area are always congruent. Is he correct?',
          answer: `No — Sipho is ${re('incorrect')}`,
          steps: [
            `Consider a right-angled triangle with base 2 cm and height 6 cm: area = ½ × 2 × 6 = ${bl('6 cm²')}.`,
            `Now consider a different right-angled triangle with base 3 cm and height 4 cm: area = ½ × 3 × 4 = ${bl('6 cm²')}.`,
            `Both triangles have the same area (${bl('6 cm²')}), yet they have completely different side lengths and different ${bl('angle')} sizes — they are neither similar nor congruent.`,
            `<strong>Conclusion:</strong> ${re('Equal area does NOT imply congruence.')} A ${re('counter-example')} like this is enough to disprove Sipho's claim. Congruence requires BOTH equal ${bl('angles')} AND equal ${gr('sides')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Short video explaining the difference between similar and congruent triangles using matching angles and proportional sides with colour coded diagrams',

      diagramPlaceholder:
        'Side by side diagram showing two similar triangles with matching angles highlighted blue and proportional sides labelled orange versus two congruent triangles with identical sides highlighted green',
      diagramSvg:
        '<svg viewBox="0 0 350 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="90" y="14" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">Similar (|||) — sides in ratio 1 : 1.5</text><polygon points="20,160 60,160 20,125" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="20" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20,133 A 8,8 0 0 1 26.02,130.27" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="40" y="174" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">4 cm</text><text x="8" y="145" font-size="10" fill="#ea580c" font-weight="700" text-anchor="end">3 cm</text><polygon points="85,172 145,172 85,119" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="85" y="157" width="15" height="15" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 85,131 A 12,12 0 0 1 93.99,126.95" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="115" y="188" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">6 cm</text><text x="73" y="148" font-size="10" fill="#ea580c" font-weight="700" text-anchor="end">4.5 cm</text><line x1="175" y1="5" x2="175" y2="190" stroke="#e2e8f0" stroke-width="1"/><text x="262" y="14" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">Congruent (≡) — identical</text><polygon points="200,160 240,160 200,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="200" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="215" y1="160" x2="215" y2="150" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="143" x2="210" y2="143" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="148" x2="210" y2="148" stroke="#16a34a" stroke-width="2"/><text x="220" y="174" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">5 cm</text><text x="188" y="140" font-size="10" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text><polygon points="270,160 310,160 270,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="270" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="285" y1="160" x2="285" y2="150" stroke="#16a34a" stroke-width="2"/><line x1="270" y1="143" x2="280" y2="143" stroke="#16a34a" stroke-width="2"/><line x1="270" y1="148" x2="280" y2="148" stroke="#16a34a" stroke-width="2"/><text x="290" y="174" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">5 cm</text><text x="258" y="140" font-size="10" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING THE MIDPOINT THEOREM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'midpoint-theorem',
      title: 'Investigating the Midpoint Theorem',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>midpoint</strong> of a line segment is the point exactly halfway between its two endpoints. If we join the midpoints of two sides of a triangle, the segment we draw — called the ${or('midsegment')} — has a striking relationship with the third side. We ${or('investigate')} this relationship through construction and measurement, leading to the <strong>Midpoint Theorem</strong>.</p>` +
        `<p style="margin-bottom:16px;">In triangle ABC, if ${bl('D')} and ${bl('E')} are the midpoints of ${bl('AB')} and ${bl('AC')}, then ${gr('DE ∥ BC')} AND ${gr('DE = ½BC')}. Here we only investigate and apply the theorem through examples and measurement — the full logical proof (using similar triangles) is covered in Grade 11.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given midpoints and sides')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('investigation step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('confirmed relationship')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to investigate the Midpoint Theorem</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Draw any triangle ${bl('ABC')} — any shape or size will work.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Use a ruler to measure ${bl('AB')} and ${bl('AC')}, and mark the midpoints ${bl('D')} (on AB) and ${bl('E')} (on AC).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Join ${bl('D')} to ${bl('E')} with a straight line — this segment is called the ${or('midsegment')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Measure ${gr('DE')} and ${gr('BC')} with a ruler, and check with a protractor (or a set square) that DE and BC point in the same direction. You will find ${gr('DE ∥ BC')} and ${gr('DE is exactly half the length of BC')} — every time, for every triangle shape.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The Midpoint Theorem</p>` +
        `<p style="margin:0;color:#1e3a8a;">If ${bl('D')} and ${bl('E')} are the midpoints of sides ${bl('AB')} and ${bl('AC')} of triangle ABC, then ${gr('DE ∥ BC')} and ${gr('DE = ½BC')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Two facts, not one</p>` +
        `<p style="margin:0;color:#7c2d12;">The Midpoint Theorem always gives you TWO facts at once — a ${or('parallel')} relationship AND a ${or('length')} relationship. Once you know two points are midpoints, both facts follow immediately, with no extra measuring needed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Triangle ABC has vertices A(2, 6), B(0, 0) and C(8, 0) on the Cartesian plane. D is the midpoint of AB and E is the midpoint of AC. Find the coordinates of D and E, then investigate whether DE ∥ BC and DE = ½BC.',
          answer: `Investigation confirms ${gr('DE ∥ BC')} and ${gr('DE = ½BC')}`,
          steps: [
            `Find ${bl('D')}, the midpoint of AB: D = ((2+0)/2, (6+0)/2) = ${bl('(1, 3)')}`,
            `Find ${bl('E')}, the midpoint of AC: E = ((2+8)/2, (6+0)/2) = ${bl('(5, 3)')}`,
            `${or('Check for parallel:')} D and E both have y-coordinate 3, so DE is a horizontal line. B and C both have y-coordinate 0, so BC is also horizontal. Two horizontal lines point in the same direction, so ${gr('DE ∥ BC')} ✓`,
            `${or('Check the length:')} DE = 5 − 1 = 4 units. BC = 8 − 0 = 8 units. Since 4 = ½ × 8, ${gr('DE = ½BC')} ✓`,
            `<strong>Conclusion:</strong> This numerical investigation confirms the Midpoint Theorem: ${gr('DE ∥ BC')} and ${gr('DE = ½BC')}.`,
          ],
        },
        {
          question: 'In triangle KLM, P and Q are the midpoints of KL and KM respectively. If LM = 22 cm, find the length of PQ, and state which sides are parallel.',
          answer: `PQ = ${or('11')} cm, and ${or('PQ ∥ LM')}`,
          steps: [
            `${bl('P')} and ${bl('Q')} are the midpoints of ${bl('KL')} and ${bl('KM')}, so the Midpoint Theorem applies directly.`,
            `By the Midpoint Theorem: ${or('PQ ∥ LM')} and ${or('PQ = ½LM')}`,
            `Substitute: ${or('PQ = ½ × 22 = 11')} cm`,
            `<strong>Answer:</strong> PQ = ${or('11')} cm, and PQ is parallel to LM ✓`,
          ],
        },
        {
          question: 'In triangle XYZ, M and N are the midpoints of XY and XZ. MN = 6.5 cm. (a) Find YZ. (b) Explain why MN must be parallel to YZ, without measuring anything.',
          answer: `(a) YZ = ${or('13')} cm (b) ${gr('MN ∥ YZ')} follows automatically from the Midpoint Theorem`,
          steps: [
            `(a) By the Midpoint Theorem, ${or('MN = ½YZ')}, so ${or('YZ = 2 × MN = 2 × 6.5 = 13')} cm.`,
            `(b) ${bl('M')} and ${bl('N')} are defined as the exact midpoints of two sides of the triangle. The Midpoint Theorem guarantees that the segment joining any two such midpoints is parallel to the third side — this follows automatically from the midpoint condition, so ${gr('MN ∥ YZ')} without needing to measure or check anything further.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In triangle DEF, G and H are the midpoints of DE and DF respectively. EF = 20 cm. Use the Midpoint Theorem to find the length of GH.',
          checkMode: 'auto',
          correctAnswer: '10cm',
          correctAnswers: ['10cm', '10 cm', '10'],
          answer: '10 cm',
          explanation: 'By the Midpoint Theorem, GH = ½ × EF = ½ × 20 = 10 cm (and GH ∥ EF).',
          diagramSvg: '<svg viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3" fill="#2563eb"/><circle cx="145" cy="87.5" r="3" fill="#2563eb"/><text x="105" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="105" y="167" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'In triangle PQR, S and T are the midpoints of PQ and PR respectively. ST = 7.5 cm. Find the length of QR.',
          checkMode: 'auto',
          correctAnswer: '15cm',
          correctAnswers: ['15cm', '15 cm', '15'],
          answer: '15 cm',
          explanation: 'By the Midpoint Theorem, QR = 2 × ST = 2 × 7.5 = 15 cm.',
          diagramSvg: '<svg viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3" fill="#2563eb"/><circle cx="145" cy="87.5" r="3" fill="#2563eb"/><text x="105" y="80" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7.5 cm</text><text x="105" y="167" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'In triangle ABC, M and N are the midpoints of AB and AC. Explain why MN must be parallel to BC, without measuring anything.',
          answer: 'Because M and N are defined as the exact midpoints of two sides of the triangle, the Midpoint Theorem guarantees that the segment joining them is parallel to the third side — this follows automatically from the midpoint condition itself, so no measurement is needed to confirm it.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'In triangle XYZ, D, E and F are the midpoints of XY, XZ and YZ respectively. The perimeter of triangle XYZ is 54 cm. Find the perimeter of triangle DEF (formed by joining the three midpoints), and explain your reasoning.',
          answer: 'Applying the Midpoint Theorem three times (once for each pair of midpoints) shows that each side of triangle DEF is exactly half the length of the corresponding side of triangle XYZ (DE = ½YZ, DF = ½XZ, EF = ½XY), so the perimeter of DEF is half the perimeter of XYZ: ½ × 54 = 27 cm.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video investigating the Midpoint Theorem by constructing a triangle, marking the midpoints of two sides, and measuring the midsegment to confirm it is parallel to and half the length of the third side',

      diagramPlaceholder:
        'Triangle ABC with D and E marked as the midpoints of AB and AC, the midsegment DE drawn in blue with tick marks showing AD = DB and AE = EC, and the relationship DE ∥ BC, DE = ½BC labelled in green',
      diagramSvg:
        '<svg viewBox="0 0 210 195" xmlns="http://www.w3.org/2000/svg"><polygon points="105,25 25,150 185,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="87.5" x2="145" y2="87.5" stroke="#2563eb" stroke-width="2.5"/><circle cx="65" cy="87.5" r="3.5" fill="#2563eb"/><circle cx="145" cy="87.5" r="3.5" fill="#2563eb"/><line x1="80" y1="53" x2="90.1" y2="59.5" stroke="#ea580c" stroke-width="2"/><line x1="40" y1="115.5" x2="50.1" y2="122" stroke="#ea580c" stroke-width="2"/><line x1="120" y1="59.5" x2="130.1" y2="53" stroke="#ea580c" stroke-width="2"/><line x1="160" y1="122" x2="170.1" y2="115.5" stroke="#ea580c" stroke-width="2"/><text x="105" y="16" font-size="13" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="10" y="158" font-size="13" fill="#374151" font-weight="700">B</text><text x="190" y="158" font-size="13" fill="#374151" font-weight="700">C</text><text x="47" y="79" font-size="12" fill="#2563eb" font-weight="700">D</text><text x="150" y="79" font-size="12" fill="#2563eb" font-weight="700">E</text><text x="105" y="99" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">DE</text><text x="105" y="185" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">DE ∥ BC and DE = ½BC</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING PROPERTIES OF SPECIAL QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-special-quadrilaterals',
      title: 'Investigating Properties of Special Quadrilaterals',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">We investigate and form <strong>conjectures</strong> about the properties of the ${bl('kite')}, ${bl('parallelogram')}, ${bl('rectangle')}, ${bl('rhombus')}, ${bl('square')}, and ${bl('trapezium')}, examining their sides, angles, diagonals, and areas. We then attempt to ${or('prove')} these conjectures using known geometric results, or ${re('disprove')} false conjectures using a counter-example — a single specific case where the conjecture fails.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('properties being tested')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('proof steps')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('counter-examples')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Special quadrilaterals and their key properties</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Opposite sides parallel')} and equal; ${bl('opposite angles')} equal; diagonals bisect each other.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram with ${bl('4 right angles')}; diagonals are ${or('equal')} and bisect each other.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rhombus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram with ${bl('4 equal sides')}; diagonals bisect each other at ${or('90°')} and bisect the ${bl('vertex angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rectangle AND rhombus — ${bl('4 right angles')} AND ${bl('4 equal sides')}; diagonals equal, bisect at 90°.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two pairs of ${bl('adjacent equal sides')}; one diagonal is a line of symmetry; diagonals are ${or('perpendicular')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Trapezium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly ${bl('one pair of parallel sides')}. An isosceles trapezium also has equal ${bl('legs')} and equal diagonals.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">One counter-example is enough</p>` +
        `<p style="margin:0;color:#991b1b;">To ${re('disprove')} a conjecture you only need ONE specific example that contradicts it. To ${or('prove')} a conjecture you must show it holds in ALL possible cases using logical geometric reasoning — checking a few examples is NOT enough for a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Investigate whether the diagonals of a parallelogram are always equal in length.',
          answer: `The conjecture is ${re('FALSE')} — parallelogram diagonals are NOT always equal`,
          steps: [
            `${bl('Property being tested:')} Are the diagonals of every parallelogram equal in length?`,
            `Draw a general parallelogram (e.g. one with angles 60° and 120°) and measure both diagonals. The two diagonals will generally have ${re('different lengths')}.`,
            `${re('Counter-example:')} A parallelogram with vertices at (0,0), (4,0), (5,2), (1,2) has diagonals of length √29 ≈ 5.39 and √13 ≈ 3.61 — they are NOT equal.`,
            `<strong>Conclusion:</strong> ${re('The conjecture is disproved.')} A single counter-example is sufficient. (Note: a rectangle is a special parallelogram whose diagonals ARE equal — but this does not make the general conjecture true.)`,
          ],
        },
        {
          question: 'Prove that the diagonals of a rhombus bisect each other at right angles.',
          answer: `The diagonals of a rhombus bisect each other at ${or('90°')} — ${or('proven')}`,
          steps: [
            `${bl('Property being tested:')} Do the diagonals of a rhombus always meet at 90°?`,
            `${or('Step 1 — Diagonals bisect each other:')} A rhombus is a parallelogram (opposite sides parallel), so its diagonals bisect each other. Let the intersection point be O.`,
            `${or('Step 2 — Four congruent triangles:')} Label the rhombus ABCD with diagonals AC and BD intersecting at O. Since all 4 sides of a rhombus are equal, triangles AOB, BOC, COD, and DOA each have two sides equal to half the respective diagonal AND one side equal to a side of the rhombus.`,
            `${or('Step 3 — Congruence argument:')} Using the SSS congruence rule (all three sides of △AOB = all three sides of △AOD, since AB = AD and AO = AO), we get △AOB ≡ △AOD. Therefore ∠AOB = ∠AOD.`,
            `${or('Step 4 — Right angles:')} Since ∠AOB + ∠AOD = 180° (angles on a straight line) and ∠AOB = ∠AOD, each angle must be 90°.`,
            `<strong>Conclusion:</strong> The diagonals of a rhombus bisect each other at ${or('right angles')}. ✓`,
          ],
        },
        {
          question: 'Lerato says a square is just a special rectangle. Is this an accurate description of the relationship?',
          answer: `Yes — a square is a ${or('special case')} within the broader category of rectangles`,
          steps: [
            `${bl('Properties of a rectangle:')} 4 right angles, opposite sides parallel and equal, diagonals equal and bisect each other.`,
            `${bl('Properties of a square:')} 4 right angles, ${or('all 4 sides equal')}, diagonals equal and bisect each other at 90°.`,
            `${or('Check:')} Does a square satisfy ALL the properties of a rectangle? Yes — a square has 4 right angles and opposite sides parallel and equal. It qualifies as a rectangle.`,
            `The square ADDS the extra condition that ${or('all 4 sides are equal')}, making it a more restricted (special) case of a rectangle.`,
            `<strong>Conclusion:</strong> Lerato is correct. A square is a special rectangle — every square is a rectangle, but not every rectangle is a square. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Short video investigating the properties of special quadrilaterals including sides angles and diagonals with colour coded proof steps and counter-examples',

      diagramPlaceholder:
        'Hierarchy diagram showing the relationships between special quadrilaterals from parallelogram down to rectangle rhombus and square with key properties labelled blue and counter-examples highlighted red',
      diagramSvg:
        '<svg viewBox="0 0 320 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="160" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Quadrilateral family hierarchy</text><g stroke="#2563eb" stroke-width="1.5"><line x1="160" y1="49" x2="50" y2="78" /><line x1="160" y1="49" x2="270" y2="78" /><line x1="160" y1="49" x2="160" y2="78" /><line x1="160" y1="104" x2="110" y2="143" /><line x1="160" y1="104" x2="215" y2="143" /><line x1="110" y1="169" x2="160" y2="208" /><line x1="215" y1="169" x2="160" y2="208" /></g><g fill="#eff6ff" stroke="#2563eb" stroke-width="2"><rect x="105" y="23" width="110" height="26" rx="6"/><rect x="10" y="78" width="80" height="26" rx="6"/><rect x="235" y="78" width="70" height="26" rx="6"/><rect x="105" y="78" width="110" height="26" rx="6"/><rect x="65" y="143" width="90" height="26" rx="6"/><rect x="175" y="143" width="80" height="26" rx="6"/></g><rect x="120" y="208" width="80" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><g fill="#1e3a8a" font-size="11" font-weight="700" text-anchor="middle"><text x="160" y="40">Quadrilateral</text><text x="50" y="95">Trapezium</text><text x="270" y="95">Kite</text><text x="160" y="95">Parallelogram</text><text x="110" y="160">Rectangle</text><text x="215" y="160">Rhombus</text></g><text x="160" y="225" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Square</text><text x="5" y="122" font-size="9" fill="#dc2626" font-weight="700">Not every parallelogram is a rectangle or rhombus —</text><text x="5" y="133" font-size="9" fill="#dc2626" font-weight="700">a counter-example disproves the reverse.</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ALTERNATIVE DEFINITIONS OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alternative-definitions-polygons',
      title: 'Alternative Definitions of Polygons',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Many polygons can be defined in more than one valid way. For example, the ${bl('standard definition')} of a parallelogram is "a quadrilateral with both pairs of opposite sides parallel", but it can also be defined as "a quadrilateral with both pairs of opposite angles equal" — both definitions describe exactly the same shape, since one ${or('alternative definition')} can be proven to imply the other using ${gr('known geometric results')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('standard definition')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alternative definition')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('proof connecting them')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Why alternative definitions matter</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Standard definitions')} are the most common starting point, but an ${or('alternative definition')} is equally valid if it can be proven to describe exactly the same set of shapes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">An ${or('alternative definition')} is valid if and only if it is both necessary AND sufficient — every shape in the category satisfies it, and every shape that satisfies it is in the category.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The ${gr('proof connecting')} the ${bl('standard')} and ${or('alternative')} definitions shows they are logically equivalent — each implies the other.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common alternative definitions</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;"><strong>Parallelogram</strong> — ${bl('Standard:')} both pairs of opposite sides parallel &nbsp;|&nbsp; ${or('Alternative 1:')} both pairs of opposite sides equal &nbsp;|&nbsp; ${or('Alternative 2:')} both pairs of opposite angles equal &nbsp;|&nbsp; ${or('Alternative 3:')} diagonals bisect each other</p>` +
        `<p style="margin-bottom:8px;"><strong>Rhombus</strong> — ${bl('Standard:')} parallelogram with all 4 sides equal &nbsp;|&nbsp; ${or('Alternative:')} quadrilateral with diagonals that bisect each other at right angles</p>` +
        `<p style="margin:0;"><strong>Rectangle</strong> — ${bl('Standard:')} parallelogram with one right angle &nbsp;|&nbsp; ${or('Alternative:')} parallelogram with equal diagonals</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">How to validate an alternative definition</p>` +
        `<p style="margin:0;color:#14532d;">Show that ${bl('standard → alternative')} (every shape fitting the standard definition also fits the alternative) AND ${or('alternative → standard')} (every shape fitting the alternative also fits the standard). If both directions hold, the definitions are ${gr('equivalent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Show that 'a quadrilateral with diagonals that bisect each other at right angles' is an alternative definition of a rhombus.",
          answer: `Confirmed — this is a ${or('valid alternative definition')} of a rhombus`,
          steps: [
            `${bl('Standard definition of a rhombus:')} A parallelogram with all four sides equal.`,
            `${or('Alternative definition to test:')} A quadrilateral whose diagonals bisect each other at right angles.`,
            `${gr('Proof — standard implies alternative:')} Let ABCD be a rhombus with diagonals AC and BD meeting at O. Since ABCD is a parallelogram, the diagonals bisect each other (AO = OC and BO = OD). Using SSS congruence (AB = AD, AO = AO, BO = OD shared), △AOB ≡ △AOD, giving ∠AOB = ∠AOD = 90°. So the diagonals meet at right angles. ✓`,
            `${gr('Proof — alternative implies standard:')} Now suppose a quadrilateral has diagonals that bisect each other at right angles. The bisecting property means opposite triangles formed are congruent, giving opposite sides equal and parallel (parallelogram). The right-angle property creates four congruent right-angled triangles, forcing all four outer sides to be equal. ✓`,
            `<strong>Conclusion:</strong> Both directions hold, so the ${or('alternative definition')} is ${gr('logically equivalent')} to the ${bl('standard definition')}.`,
          ],
        },
        {
          question: "Thabo says 'a quadrilateral with one pair of opposite sides equal and parallel' is a valid alternative definition of a parallelogram. Is he correct?",
          answer: `Yes — Thabo is ${gr('correct')}`,
          steps: [
            `${bl('Standard definition of a parallelogram:')} A quadrilateral with both pairs of opposite sides parallel.`,
            `${or('Alternative definition proposed:')} A quadrilateral with just one pair of opposite sides that is both equal AND parallel.`,
            `${gr('Proof:')} Let ABCD be a quadrilateral where AB = CD and AB ∥ CD. Draw diagonal BD. Since AB ∥ CD, alternate interior angles ∠ABD = ∠CDB (AB ∥ CD, BD transversal). AB = CD is given, and BD is a shared side, so △ABD ≡ △CDB by SAS.`,
            `From the congruence: AD = BC and ∠ADB = ∠CBD. Since ∠ADB = ∠CBD are alternate interior angles with BD as transversal, it follows that AD ∥ BC.`,
            `Both pairs of opposite sides are now parallel, satisfying the ${bl('standard parallelogram definition')}. ✓`,
            `<strong>Conclusion:</strong> Thabo is correct — the ${or('alternative definition')} is valid and equivalent to the ${bl('standard definition')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Short video explaining how standard and alternative definitions of special quadrilaterals are proven to be equivalent using geometric reasoning',

      diagramPlaceholder:
        'Diagram showing a rhombus with the standard definition labelled blue and the alternative diagonal bisecting at right angles definition labelled orange with proof connecting them labelled green',
      diagramSvg:
        '<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="110,20 170,100 110,180 50,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="180" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><line x1="50" y1="100" x2="170" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 110,92 L 118,92 L 118,100" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="136" y1="63" x2="144" y2="57" stroke="#2563eb" stroke-width="2"/><line x1="136" y1="137" x2="144" y2="143" stroke="#2563eb" stroke-width="2"/><line x1="84" y1="137" x2="76" y2="143" stroke="#2563eb" stroke-width="2"/><line x1="84" y1="63" x2="76" y2="57" stroke="#2563eb" stroke-width="2"/><text x="110" y="12" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="180" y="104" font-size="12" fill="#374151" font-weight="700">B</text><text x="110" y="196" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">C</text><text x="34" y="104" font-size="12" fill="#374151" font-weight="700">D</text><text x="118" y="112" font-size="11" fill="#374151" font-weight="700">O</text><text x="10" y="198" font-size="7.5" fill="#2563eb" font-weight="700">Standard: all 4 sides equal (blue ticks)</text><text x="10" y="212" font-size="7.5" fill="#ea580c" font-weight="700">Alternative: diagonals ⊥ and bisect at O</text><text x="10" y="226" font-size="7.5" fill="#16a34a" font-weight="700">Proof (SSS congruence) shows both are equivalent</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PROVING GEOMETRIC CONJECTURES AND DISPROVING FALSE ONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-disproving-conjectures',
      title: 'Proving Geometric Conjectures and Disproving False Ones',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">When investigating geometric properties, we form ${bl('conjectures')} based on patterns we observe. We then either ${gr('validate (prove)')} them using logical geometric reasoning, or ${re('disprove')} them by finding a counter-example — a single specific case where the conjecture fails. The ${or('testing process')} involves drawing examples, measuring, reasoning about properties, and applying known theorems.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conjecture stated')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('testing process')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('conclusion: proven')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('conclusion: disproven')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to test a geometric conjecture</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('State the conjecture clearly')} — write exactly what you believe to be true before testing.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Test with multiple examples')} — draw several different cases, measure, and look for a pattern.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3a</span>` +
        `<p style="margin:0;font-size:14px;"><strong>If you find a case where it fails:</strong> You have a ${re('counter-example')} — the conjecture is ${re('DISPROVEN')}. Stop here; one counter-example is sufficient.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3b</span>` +
        `<p style="margin:0;font-size:14px;"><strong>If examples all hold:</strong> Build a ${gr('formal proof')} using known theorems and logical reasoning. Examples alone are not enough to ${gr('prove')} a conjecture.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proof vs counter-example</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${re('counter-example')} disproves with ONE case. A ${gr('proof')} must cover ALL possible cases — it requires logical reasoning, not just measurements. "I drew 10 shapes and it worked" is never a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Amahle conjectures that 'all quadrilaterals with one pair of parallel sides have equal diagonals'. Test this conjecture using a trapezium.",
          answer: `The conjecture is ${re('FALSE')} — disproved by counter-example`,
          steps: [
            `${bl('Conjecture stated:')} All quadrilaterals with one pair of parallel sides (trapeziums) have equal diagonals.`,
            `${or('Testing process:')} Draw a general (non-isosceles) trapezium ABCD where AB ∥ CD but AD ≠ BC. Measure both diagonals AC and BD.`,
            `${re('Counter-example:')} Trapezium with A(0,0), B(6,0), C(5,3), D(1,3). Diagonal AC = √(25+9) = √34 ≈ 5.83. Diagonal BD = √(25+9) = ... let's recalculate: BD from (6,0) to (1,3) = √(25+9) = √34. Try instead D(2,3): AC from (0,0) to (5,3) = √34 ≈ 5.83; BD from (6,0) to (2,3) = √(16+9) = 5. These are unequal.`,
            `A general (scalene) trapezium has ${re('unequal diagonals')}, providing a clear counter-example.`,
            `<strong>Conclusion:</strong> ${re('The conjecture is disproven.')} Only an isosceles trapezium (where the non-parallel sides are equal) has equal diagonals — this is a special case, not the general rule.`,
          ],
        },
        {
          question: "Sipho conjectures that 'the diagonals of a kite are always perpendicular'. Investigate and confirm or disprove this conjecture.",
          answer: `The conjecture is ${gr('TRUE')} — the diagonals of a kite are always perpendicular`,
          steps: [
            `${bl('Conjecture stated:')} The diagonals of any kite intersect at 90°.`,
            `${or('Testing process:')} Draw several kites of different shapes and sizes. In each case, measure the angle at which the diagonals intersect.`,
            `${or('Observations:')} Every kite tested shows a 90° angle at the intersection of the diagonals — the pattern holds consistently.`,
            `${gr('Formal proof:')} A kite ABCD has AB = AD and CB = CD. The main diagonal AC is a line of symmetry for the kite. Because of this symmetry, B and D are mirror images of each other across AC. The diagonal BD therefore crosses AC at right angles (it is perpendicular to the axis of symmetry).`,
            `More formally: △ABC ≡ △ADC (SSS, since AB = AD, CB = CD, AC shared). Therefore ∠BAO = ∠DAO, meaning AO bisects ∠BAD. In △ABO and △ADO, AO is common, AB = AD, and ∠BAO = ∠DAO, so by SAS △ABO ≡ △ADO. Hence ∠AOB = ∠AOD. Since ∠AOB + ∠AOD = 180°, each equals 90°. ✓`,
            `<strong>Conclusion:</strong> ${gr('The conjecture is proven.')} The diagonals of a kite always intersect at right angles.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Short video demonstrating how to state test and either prove or disprove geometric conjectures about quadrilaterals using counter-examples and logical proofs',

      diagramPlaceholder:
        'Diagram showing an isosceles triangle with the equal sides tick marked blue for the stated conjecture, then the two base angles arc marked green to show the tested conjecture has been proven equal',
      diagramSvg:
        '<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="120,20 40,150 200,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75.7" y1="82.4" x2="84.3" y2="87.6" stroke="#2563eb" stroke-width="2"/><line x1="154.9" y1="81.9" x2="165.1" y2="88.1" stroke="#2563eb" stroke-width="2"/><path d="M 58,150 A 18,18 0 0 1 49.43,134.67" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 182,150 A 18,18 0 0 0 190.57,134.67" fill="none" stroke="#16a34a" stroke-width="2"/><text x="120" y="14" font-size="12" fill="#374151" font-weight="700" text-anchor="middle">A</text><text x="26" y="158" font-size="12" fill="#374151" font-weight="700">B</text><text x="206" y="158" font-size="12" fill="#374151" font-weight="700">C</text><text x="62" y="132" font-size="12" fill="#16a34a" font-weight="700">∠B</text><text x="168" y="132" font-size="12" fill="#16a34a" font-weight="700">∠C</text><text x="10" y="176" font-size="9" fill="#2563eb" font-weight="700">Conjecture: if AB = AC (blue ticks)...</text><text x="10" y="190" font-size="9" fill="#ea580c" font-weight="700">Test: measure angle B and angle C</text><text x="10" y="204" font-size="9" fill="#16a34a" font-weight="700">Proven: angle B = angle C (isosceles triangle)</text></svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two triangles have identical angles but different side lengths. Are they similar or congruent?',
      answer: 'similar',
      checkMode: 'auto',
      correctAnswer: 'similar',
      explanation: 'Same angles but different side lengths means the triangles are the same shape but a different size — this is the definition of similarity. Congruence requires both equal angles AND equal sides.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have the same angles AND the same side lengths. Are they similar, congruent, or both?',
      answer: 'both',
      checkMode: 'auto',
      correctAnswer: 'both',
      explanation: 'Equal angles satisfy the similarity condition; equal sides in addition satisfy the congruence condition. Since congruent triangles automatically have equal angles, they are both similar and congruent.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all congruent triangles are also similar, but not all similar triangles are congruent. Is he correct? Explain.',
      answer: 'Yes — congruent triangles satisfy the conditions for similarity (equal angles) plus equal sides, but similar triangles only require equal angles, so they may differ in size.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Are the diagonals of a general parallelogram always equal?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
      explanation: 'Only rectangles (and squares) among parallelograms have equal diagonals. A general parallelogram with non-right angles has diagonals of different lengths.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'What additional property must a parallelogram have for its diagonals to be equal?',
      answer: 'it must be a rectangle',
      checkMode: 'auto',
      correctAnswer: 'it must be a rectangle',
      explanation: 'A parallelogram has equal diagonals if and only if all four angles are right angles — making it a rectangle. Equal diagonals are a direct consequence of the right-angle property.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato says the diagonals of every rhombus bisect each other at right angles. Is this always true? Explain using the rhombus's properties.",
      answer: "Yes — this is a proven property of all rhombi, since a rhombus's diagonals create congruent triangles due to its four equal sides, forcing perpendicular intersection.",
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State the standard definition of a parallelogram.',
      answer: 'a quadrilateral with both pairs of opposite sides parallel',
      checkMode: 'auto',
      correctAnswer: 'a quadrilateral with both pairs of opposite sides parallel',
      explanation: 'The standard definition of a parallelogram requires both pairs of opposite sides to be parallel. This is the minimum condition that distinguishes a parallelogram from other quadrilaterals.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Provide an alternative definition of a parallelogram using angles instead of sides.',
      answer: 'A quadrilateral in which both pairs of opposite angles are equal.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo says 'a quadrilateral with diagonals that bisect each other' is sufficient to define a parallelogram. Is he correct? Explain.",
      answer: "Yes — if the diagonals of a quadrilateral bisect each other, this alone is sufficient to prove that both pairs of opposite sides are parallel, satisfying the parallelogram definition.",
      checkMode: 'self',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle conjectures that all rectangles are squares. Find a counter-example to disprove this.',
      answer: 'Any rectangle where length ≠ width, e.g. a 4 cm by 6 cm rectangle — it has four right angles (making it a rectangle) but its sides are not all equal (so it is not a square).',
      checkMode: 'self',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Investigate whether the conjecture 'all kites have at least one pair of equal angles' is true, and explain your reasoning.",
      answer: "Yes — a kite has one pair of opposite angles equal (between the two pairs of adjacent equal sides), which can be proven using the line of symmetry that divides the kite into two congruent triangles.",
      checkMode: 'self',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho says a trapezium always has equal diagonals. Provide a counter-example.',
      answer: 'A general (non-isosceles) trapezium typically has unequal diagonals; only isosceles trapeziums have equal diagonals, making the general conjecture false.',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Prove that if a quadrilateral has one pair of opposite sides that are both equal and parallel, it must be a parallelogram.',
      answer: 'If one pair of sides is equal and parallel, the diagonal connecting the other two vertices creates two congruent triangles (by SAS), which forces the other pair of sides to also be equal and parallel.',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State two properties that distinguish a square from a general rhombus.',
      answer: 'a square has 4 right angles and equal diagonals',
      checkMode: 'auto',
      correctAnswer: 'a square has 4 right angles and equal diagonals',
      explanation: 'A rhombus has four equal sides but its angles need not be 90°. A square adds the requirement of four right angles, which also forces the diagonals to be equal in length — distinguishing it from a general rhombus.',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato conjectures that 'the diagonals of a kite always bisect each other'. Investigate this for a general kite and state your conclusion.",
      answer: "This is generally false — only one diagonal of a kite is bisected by the other; the diagonals of a kite do not both bisect each other unless it is also a rhombus.",
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says two triangles with two pairs of equal angles must be similar. Is he correct? Explain.',
      answer: "Yes — if two angles match, the third angle must also match (since angles sum to 180°), satisfying the AA similarity condition.",
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Provide a proof or disproof for the conjecture: 'all quadrilaterals with perpendicular diagonals are kites'.",
      answer: "This is false — a square also has perpendicular diagonals but is not classified specifically as a kite (though technically it satisfies kite properties too); more precisely, having perpendicular diagonals alone doesn't guarantee the adjacent-side-pairs property that strictly defines a kite.",
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle investigates whether 'a quadrilateral with one right angle is always a rectangle'. Find a counter-example.",
      answer: "A right-angled trapezium has one right angle but is not a rectangle, since not all four angles are 90°.",
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'State the alternative definition of a rhombus based on its diagonals.',
      answer: 'a quadrilateral whose diagonals bisect each other at right angles',
      checkMode: 'auto',
      correctAnswer: 'a quadrilateral whose diagonals bisect each other at right angles',
      explanation: 'This is a valid alternative definition of a rhombus — equivalent to the standard definition (a parallelogram with all four sides equal). Both definitions describe exactly the same set of shapes.',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says proving a conjecture with five different examples is enough to establish it as always true. Is he correct? Explain why or why not.',
      answer: 'No — multiple specific examples supporting a conjecture do not constitute a general proof; a formal geometric proof using established properties and logical reasoning is required to prove a conjecture true for all cases.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered Euclidean geometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-3):   Similarity vs congruence classification            — abstract, no diagram
    // Block 2 (4-6):   Special quadrilateral property recall              — abstract, no diagram
    // Block 3 (7-10):  Parallelogram / rectangle / rhombus missing value  — NEEDS DIAGRAM (7,8,9,10)
    // Block 4 (11-13): Kite / trapezium missing value                    — NEEDS DIAGRAM (11,12,13)
    // Block 5 (14-16): Alternative definitions / conjecture reasoning    — abstract, no diagram
    // Block 6 (17-19): Similar triangle proportional sides               — NEEDS DIAGRAM (17)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Similarity vs congruence classification (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle PQR has angles 45°, 55°, 80°. Triangle XYZ has angles 45°, 55°, 80° but different side lengths. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'similar', answer: 'similar', explanation: 'The corresponding angles are equal, but the sides differ in length, so the triangles are the same shape but not the same size — this is similarity, not congruence.' },
        { difficulty: 'Easy', question: 'Two triangles have exactly the same three side lengths: 6 cm, 8 cm and 10 cm each. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'both', answer: 'both', explanation: 'Equal corresponding sides (SSS) mean the triangles are congruent. Congruent triangles automatically have equal angles too, so they are also similar — the triangles are both.' },
        { difficulty: 'Medium', question: 'Triangle DEF has angles of 50° and 70°. Triangle GHI has angles of 50° and 60°. Explain whether the two triangles can be similar.', answer: 'No — the third angle of triangle DEF is 180° − 50° − 70° = 60°, giving angles 50°, 70°, 60°. The third angle of triangle GHI is 180° − 50° − 60° = 70°, giving angles 50°, 60°, 70°. Both triangles actually have the same three angles (50°, 60°, 70°), so they ARE similar — the different order in which the angles were listed does not change the triangle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Nomsa says that if two triangles have the same area, they must be similar. Is she correct? Explain using a counter-example.', answer: 'No — a triangle with base 4 cm and height 6 cm has area ½ × 4 × 6 = 12 cm². A completely different triangle with base 8 cm and height 3 cm also has area ½ × 8 × 3 = 12 cm². These triangles can have totally different angles and side ratios, so equal area does not guarantee similarity.', checkMode: 'self' },

        // Block 2 — Special quadrilateral property recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'State one property of the diagonals of a rectangle that a general parallelogram does not necessarily have.', checkMode: 'auto', correctAnswer: 'the diagonals are equal in length', correctAnswers: ['the diagonals are equal in length', 'diagonals are equal', 'the diagonals are equal'], answer: 'the diagonals are equal in length', explanation: 'Both a rectangle and a general parallelogram have diagonals that bisect each other, but only a rectangle (because of its right angles) is guaranteed to have diagonals of equal length.' },
        { difficulty: 'Medium', question: 'A rhombus has diagonals that bisect each other at right angles. State whether this property also applies to a general parallelogram, and explain why or why not.', answer: 'No — in a general parallelogram the diagonals bisect each other, but they do not necessarily meet at right angles. The perpendicular intersection only occurs because a rhombus has four equal sides, which forces the triangles formed by the diagonals to be congruent, making the angle between them 90°. A parallelogram without equal sides does not have this extra symmetry.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain why every square is also classified as a kite, using the definition of a kite (two pairs of adjacent equal sides).', answer: 'A square has all four sides equal, so trivially it has two pairs of adjacent sides that are equal (in fact all four sides are equal). This satisfies the kite definition, so a square is a special case of a kite — just as it is also a special case of a rectangle and a rhombus.', checkMode: 'self' },

        // Block 3 — Parallelogram / rectangle / rhombus missing value (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD, angle A = 60°. Since consecutive angles in a parallelogram are supplementary, find the size of angle B.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAngle B = 180° − 60° = 120°' },
        { difficulty: 'Medium', question: 'Rectangle ABCD has length AB = 12 cm and width BC = 5 cm. Find the length of diagonal AC.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'The diagonal of a rectangle can be found using the Theorem of Pythagoras, since the sides meet at 90°.\nAC² = AB² + BC² = 12² + 5² = 144 + 25 = 169\nAC = √169 = 13 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Rhombus ABCD has side length 10 cm. Its diagonals bisect each other at right angles at point O, with AO = OC = 6 cm. Find the full length of diagonal BD.', checkMode: 'auto', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], answer: '16 cm', explanation: 'The diagonals of a rhombus bisect each other at right angles, so triangle AOB is right-angled at O with hypotenuse AB = 10 cm and one leg AO = 6 cm.\nOB² = AB² − AO² = 10² − 6² = 100 − 36 = 64\nOB = 8 cm\nSince the diagonal is bisected, BD = 2 × OB = 2 × 8 = 16 cm', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD has AB = 9 cm, BC = 6 cm, and angle A = 70°. Angle B is supplementary to angle A. Find the size of angle C.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'In a parallelogram, opposite angles are equal.\nAngle C is opposite angle A, so angle C = angle A = 70°.\n(Check: angle B = 180° − 70° = 110°, and angle D = angle B = 110°, giving 70° + 110° + 70° + 110° = 360° ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 179,35 A 16,16 0 0 1 190.4,50.33" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 cm</text></svg>' },

        // Block 4 — Kite / trapezium missing value (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Isosceles trapezium ABCD has AB ∥ CD, with AB = 6 cm and CD = 14 cm. The equal legs AD = BC = 5 cm, and each leg extends 4 cm horizontally beyond the shorter parallel side. Find the height of the trapezium.', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3 cm', '3'], answer: '3 cm', explanation: 'Drop a perpendicular from a vertex of the shorter side to the longer side, forming a right-angled triangle with hypotenuse (leg) = 5 cm and base = 4 cm.\nHeight² = 5² − 4² = 25 − 16 = 9\nHeight = √9 = 3 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="71,89 149,89 201,128 19,128" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71" y1="89" x2="71" y2="128" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 71,116 L 83,116 L 83,128" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="61" y="83" font-size="12" fill="#374151" font-weight="600">A</text><text x="153" y="83" font-size="12" fill="#374151" font-weight="600">B</text><text x="205" y="136" font-size="12" fill="#374151" font-weight="600">C</text><text x="9" y="136" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="79" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="33" y="109" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">5 cm</text><text x="187" y="109" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="87" y="109" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Kite ABCD has diagonal AC as its axis of symmetry, meeting diagonal BD at O. AO = 16 cm, OC = 5 cm, and OB = OD = 12 cm (the diagonals are perpendicular). Find the length of side AB.', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20 cm', '20'], answer: '20 cm', explanation: 'Since the diagonals of a kite are perpendicular, triangle AOB is right-angled at O.\nAB² = AO² + OB² = 16² + 12² = 256 + 144 = 400\nAB = √400 = 20 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,119.05 115,150 193,119.05" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="119.05" x2="193" y2="119.05" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,119.05 L 106,110.05 L 115,110.05" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="133.05" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="69.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="138.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="56" y="67.53" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same kite ABCD (AO = 16 cm, OC = 5 cm, OB = OD = 12 cm, diagonals perpendicular at O), find the perimeter of the kite.', checkMode: 'auto', correctAnswer: '66cm', correctAnswers: ['66cm', '66 cm', '66'], answer: '66 cm', explanation: 'Side AB = √(AO² + OB²) = √(16² + 12²) = √400 = 20 cm (this equals AD by the kite\'s symmetry).\nSide CB = √(OC² + OB²) = √(5² + 12²) = √169 = 13 cm (this equals CD by the kite\'s symmetry).\nPerimeter = AB + BC + CD + DA = 20 + 13 + 13 + 20 = 66 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,119.05 115,150 193,119.05" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="119.05" x2="193" y2="119.05" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,119.05 L 106,110.05 L 115,110.05" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="113.05" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="133.05" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="69.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="138.53" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="109.05" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },

        // Block 5 — Alternative definitions / conjecture reasoning (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'State an alternative definition of a rectangle in terms of its diagonals, instead of using angles.', answer: 'A rectangle can be defined as a parallelogram whose diagonals are equal in length.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Bongani conjectures that 'all quadrilaterals with two pairs of adjacent equal sides have perpendicular diagonals'. Investigate whether this conjecture (the definition of a kite) is always true.", answer: 'Yes — this conjecture is true and forms part of the standard proof that kites have perpendicular diagonals. Because AB = AD and CB = CD, the main diagonal AC is an axis of symmetry, so triangle ABC ≡ triangle ADC (SSS). This makes AO bisect angle BAD, and then triangle ABO ≡ triangle ADO (SAS), giving equal adjacent angles at O that sum to 180° — forcing each to be 90°.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Thandiwe says 'a quadrilateral with one pair of opposite angles equal is always a parallelogram'. Find a counter-example to disprove this.", answer: 'A kite typically has exactly one pair of opposite angles equal (the angles between the unequal sides), but its other pair of opposite angles is usually unequal, and its sides are not both pairs parallel — so a kite satisfies the one-pair-equal-angles condition without being a parallelogram, disproving the conjecture.', checkMode: 'self' },

        // Block 6 — Similar triangle proportional sides (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 6 cm, BC = 9 cm, and DE = 9 cm. Find the length of EF.', checkMode: 'auto', correctAnswer: '13.5cm', correctAnswers: ['13.5cm', '13.5 cm', '13.5'], answer: '13.5 cm', explanation: 'The scale factor from triangle ABC to triangle DEF = DE ÷ AB = 9 ÷ 6 = 1.5\nEF = BC × 1.5 = 9 × 1.5 = 13.5 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 3 : 7. If the perimeter of the smaller triangle is 24 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '56cm', correctAnswers: ['56cm', '56 cm', '56'], answer: '56 cm', explanation: 'The ratio of perimeters equals the ratio of corresponding sides, 3 : 7.\nLarger perimeter = 24 × (7 ÷ 3) = 56 cm' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 4 : 81. Find the ratio of their corresponding side lengths.', answer: 'Since the area ratio equals the square of the side ratio, the side ratio = √4 : √81 = 2 : 9.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similarity, congruence, special quadrilateral properties, and proof-based reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions on quadrilateral properties or missing side/angle calculations, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on special quadrilaterals and conjecture testing, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Similarity vs congruence classification (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle PQR has angles 40°, 65°, 75°. Triangle XYZ has angles 40°, 65°, 75° but different side lengths. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'similar', answer: 'similar', explanation: 'The corresponding angles are equal, but the sides differ in length, so the triangles are the same shape but not the same size — this is similarity, not congruence.' },
        { difficulty: 'Easy', question: 'Two triangles have exactly the same three side lengths: 7 cm, 9 cm and 11 cm each. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'both', answer: 'both', explanation: 'Equal corresponding sides (SSS) mean the triangles are congruent. Congruent triangles automatically have equal angles too, so they are also similar — the triangles are both.' },
        { difficulty: 'Medium', question: 'Triangle DEF has angles of 55° and 65°. Triangle GHI has angles of 55° and 60°. Explain whether the two triangles can be similar.', answer: 'No — the third angle of triangle DEF is 180° − 55° − 65° = 60°, giving angles 55°, 65°, 60°. The third angle of triangle GHI is 180° − 55° − 60° = 65°, giving angles 55°, 60°, 65°. Both triangles actually have the same three angles (55°, 60°, 65°), so they ARE similar — the different order in which the angles were listed does not change the triangle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Kagiso says that if two triangles have the same perimeter, they must be similar. Is he correct? Explain using a counter-example.', answer: 'No — an equilateral triangle with sides 5 cm, 5 cm, 5 cm has perimeter 15 cm. A scalene triangle with sides 3 cm, 5 cm, 7 cm also has perimeter 15 cm. These triangles have completely different angles and side ratios, so equal perimeter does not guarantee similarity.', checkMode: 'self' },

        // Block 2 — Special quadrilateral property recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'State one property of the diagonals of a rhombus that a general parallelogram does not necessarily have.', checkMode: 'auto', correctAnswer: 'the diagonals bisect each other at right angles', correctAnswers: ['the diagonals bisect each other at right angles', 'diagonals are perpendicular', 'the diagonals are perpendicular'], answer: 'the diagonals bisect each other at right angles', explanation: 'Both a rhombus and a general parallelogram have diagonals that bisect each other, but only a rhombus (because of its four equal sides) is guaranteed to have diagonals that meet at right angles.' },
        { difficulty: 'Medium', question: 'A rectangle has diagonals that are equal in length. State whether this property also applies to a general parallelogram, and explain why or why not.', answer: 'No — in a general parallelogram the diagonals bisect each other, but they are not necessarily equal in length. Equal diagonals only occur because a rectangle has four right angles, which forces the two diagonals (each the hypotenuse of a congruent right-angled triangle formed with the sides) to be the same length. A parallelogram without right angles does not have this property.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain why every rhombus is also classified as a parallelogram, using the definition of a parallelogram (both pairs of opposite sides parallel).', answer: 'A rhombus is defined as a parallelogram with all four sides equal — so by definition it already satisfies the parallelogram requirement of both pairs of opposite sides being parallel. The equal-sides condition is simply an additional restriction placed on top of the parallelogram definition, making a rhombus a special case of a parallelogram.', checkMode: 'self' },

        // Block 3 — Parallelogram / rectangle / rhombus missing value (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD, angle A = 72°. Since consecutive angles in a parallelogram are supplementary, find the size of angle B.', checkMode: 'auto', correctAnswer: '108°', correctAnswers: ['108°', '108'], answer: '108°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAngle B = 180° − 72° = 108°' },
        { difficulty: 'Medium', question: 'Rectangle ABCD has length AB = 15 cm and width BC = 8 cm. Find the length of diagonal AC.', checkMode: 'auto', correctAnswer: '17cm', correctAnswers: ['17cm', '17 cm', '17'], answer: '17 cm', explanation: 'The diagonal of a rectangle can be found using the Theorem of Pythagoras, since the sides meet at 90°.\nAC² = AB² + BC² = 15² + 8² = 225 + 64 = 289\nAC = √289 = 17 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Rhombus ABCD has side length 13 cm. Its diagonals bisect each other at right angles at point O, with AO = OC = 5 cm. Find the full length of diagonal BD.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'The diagonals of a rhombus bisect each other at right angles, so triangle AOB is right-angled at O with hypotenuse AB = 13 cm and one leg AO = 5 cm.\nOB² = AB² − AO² = 13² − 5² = 169 − 25 = 144\nOB = 12 cm\nSince the diagonal is bisected, BD = 2 × OB = 2 × 12 = 24 cm', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD has AB = 10 cm, BC = 7 cm, and angle A = 85°. Angle B is supplementary to angle A. Find the size of angle C.', checkMode: 'auto', correctAnswer: '85°', correctAnswers: ['85°', '85'], answer: '85°', explanation: 'In a parallelogram, opposite angles are equal.\nAngle C is opposite angle A, so angle C = angle A = 85°.\n(Check: angle B = 180° − 85° = 95°, and angle D = angle B = 95°, giving 85° + 95° + 85° + 95° = 360° ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">85°</text><path d="M 179,35 A 16,16 0 0 1 190.4,50.33" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text></svg>' },

        // Block 4 — Kite / trapezium missing value (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Isosceles trapezium ABCD has AB ∥ CD, with AB = 8 cm and CD = 20 cm. The equal legs AD = BC = 10 cm, and each leg extends 6 cm horizontally beyond the shorter parallel side. Find the height of the trapezium.', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm', '8'], answer: '8 cm', explanation: 'Drop a perpendicular from a vertex of the shorter side to the longer side, forming a right-angled triangle with hypotenuse (leg) = 10 cm and base = 6 cm.\nHeight² = 10² − 6² = 100 − 36 = 64\nHeight = √64 = 8 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="73,71 137,71 185,135 25,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="73" y1="71" x2="73" y2="135" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 73,123 L 85,123 L 85,135" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="63" y="65" font-size="12" fill="#374151" font-weight="600">A</text><text x="141" y="65" font-size="12" fill="#374151" font-weight="600">B</text><text x="189" y="143" font-size="12" fill="#374151" font-weight="600">C</text><text x="15" y="143" font-size="12" fill="#374151" font-weight="600">D</text><text x="105" y="61" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="105" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="37" y="103" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10 cm</text><text x="173" y="103" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><text x="89" y="103" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Kite ABCD has diagonal AC as its axis of symmetry, meeting diagonal BD at O. AO = 8 cm, OC = 20 cm, and OB = OD = 15 cm (the diagonals are perpendicular). Find the length of side AB.', checkMode: 'auto', correctAnswer: '17cm', correctAnswers: ['17cm', '17 cm', '17'], answer: '17 cm', explanation: 'Since the diagonals of a kite are perpendicular, triangle AOB is right-angled at O.\nAB² = AO² + OB² = 8² + 15² = 64 + 225 = 289\nAB = √289 = 17 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,38 55,70 115,150 175,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="38" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="70" x2="175" y2="70" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,70 L 106,61 L 115,61" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="30" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="47" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="84" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="85" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="145" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="65" y="52" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same kite ABCD (AO = 8 cm, OC = 20 cm, OB = OD = 15 cm, diagonals perpendicular at O), find the perimeter of the kite.', checkMode: 'auto', correctAnswer: '84cm', correctAnswers: ['84cm', '84 cm', '84'], answer: '84 cm', explanation: 'Side AB = √(AO² + OB²) = √(8² + 15²) = √289 = 17 cm (this equals AD by the kite\'s symmetry).\nSide CB = √(OC² + OB²) = √(20² + 15²) = √625 = 25 cm (this equals CD by the kite\'s symmetry).\nPerimeter = AB + BC + CD + DA = 17 + 25 + 25 + 17 = 84 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,38 55,70 115,150 175,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="38" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="70" x2="175" y2="70" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,70 L 106,61 L 115,61" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="30" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="47" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183" y="64" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="84" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="85" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="145" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>' },

        // Block 5 — Alternative definitions / conjecture reasoning (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'State an alternative definition of a rhombus in terms of its diagonals, instead of using side lengths.', answer: 'A rhombus can be defined as a quadrilateral whose diagonals bisect each other at right angles.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Palesa conjectures that 'all quadrilaterals with two pairs of adjacent equal sides have one diagonal that bisects the other'. Investigate whether this conjecture (a property of kites) is always true.", answer: 'Yes — this conjecture is true. Because AB = AD and CB = CD, triangle ABC ≡ triangle ADC (SSS) with AC as the shared side, so AC is an axis of symmetry. This symmetry means diagonal AC bisects diagonal BD (since B and D are mirror images across AC), although AC itself is not necessarily bisected by BD — only one diagonal bisects the other in a general kite, not both.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Sizwe says 'a quadrilateral with all four sides equal is always a square'. Find a counter-example to disprove this.", answer: 'A rhombus with angles 60° and 120° has all four sides equal but does not have right angles, so it is not a square. This shows that equal sides alone are not sufficient to guarantee a square — the shape must also have four right angles.', checkMode: 'self' },

        // Block 6 — Similar triangle proportional sides (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 8 cm, BC = 10 cm, and DE = 12 cm. Find the length of EF.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'The scale factor from triangle ABC to triangle DEF = DE ÷ AB = 12 ÷ 8 = 1.5\nEF = BC × 1.5 = 10 × 1.5 = 15 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 4 : 9. If the perimeter of the smaller triangle is 32 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '72cm', correctAnswers: ['72cm', '72 cm', '72'], answer: '72 cm', explanation: 'The ratio of perimeters equals the ratio of corresponding sides, 4 : 9.\nLarger perimeter = 32 × (9 ÷ 4) = 72 cm' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 9 : 100. Find the ratio of their corresponding side lengths.', answer: 'Since the area ratio equals the square of the side ratio, the side ratio = √9 : √100 = 3 : 10.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similarity, congruence, special quadrilateral properties, and proof-based reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions on quadrilateral properties or missing side/angle calculations, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on special quadrilaterals and conjecture testing, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Similarity vs congruence classification (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle PQR has angles 48°, 82°, 50°. Triangle XYZ has angles 48°, 82°, 50° but different side lengths. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'similar', answer: 'similar', explanation: 'The corresponding angles are equal, but the sides differ in length, so the triangles are the same shape but not the same size — this is similarity, not congruence.' },
        { difficulty: 'Easy', question: 'Two triangles have exactly the same three side lengths: 5 cm, 12 cm and 13 cm each. Are the triangles similar, congruent, or both?', checkMode: 'auto', correctAnswer: 'both', answer: 'both', explanation: 'Equal corresponding sides (SSS) mean the triangles are congruent. Congruent triangles automatically have equal angles too, so they are also similar — the triangles are both.' },
        { difficulty: 'Medium', question: 'Triangle DEF has angles of 48° and 82°. Triangle GHI has angles of 48° and 50°. Explain whether the two triangles can be similar.', answer: 'No — the third angle of triangle DEF is 180° − 48° − 82° = 50°, giving angles 48°, 82°, 50°. The third angle of triangle GHI is 180° − 48° − 50° = 82°, giving angles 48°, 50°, 82°. Both triangles actually have the same three angles (48°, 50°, 82°), so they ARE similar — the different order in which the angles were listed does not change the triangle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele says that if two right-angled triangles have the same hypotenuse length, they must be congruent. Is she correct? Explain using a counter-example.', answer: 'No — a right-angled triangle with legs 6 cm and 8 cm has hypotenuse 10 cm. A different right-angled triangle with legs 5 cm (approximately) could also be shaped to have hypotenuse 10 cm using different leg lengths, e.g. legs of roughly 3.5 cm and 9.4 cm. Since only the hypotenuse matches, the legs and angles can differ completely, so equal hypotenuse alone does not guarantee congruency — RHS also requires one other matching side.', checkMode: 'self' },

        // Block 2 — Special quadrilateral property recall (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'State one property of a square that a general rectangle does not necessarily have.', checkMode: 'auto', correctAnswer: 'all four sides are equal', correctAnswers: ['all four sides are equal', 'four equal sides', 'all sides equal'], answer: 'all four sides are equal', explanation: 'Both a square and a general rectangle have four right angles and equal diagonals, but only a square is guaranteed to have all four sides equal in length.' },
        { difficulty: 'Medium', question: 'A kite has one diagonal that acts as an axis of symmetry. State whether both diagonals of a kite are always axes of symmetry, and explain why or why not.', answer: 'No — only the diagonal connecting the vertices between the two pairs of equal sides (the main diagonal) is an axis of symmetry. The other diagonal is not an axis of symmetry unless the kite is also a rhombus, because the two triangles on either side of the main diagonal are mirror images, but the two triangles on either side of the other diagonal are not congruent in a general kite.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain why every rectangle is also classified as a parallelogram, using the definition of a parallelogram (both pairs of opposite sides parallel).', answer: 'A rectangle is defined as a parallelogram with four right angles — so by definition it already satisfies the parallelogram requirement of both pairs of opposite sides being parallel. The right-angle condition is simply an additional restriction placed on top of the parallelogram definition, making a rectangle a special case of a parallelogram.', checkMode: 'self' },

        // Block 3 — Parallelogram / rectangle / rhombus missing value (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD, angle A = 105°. Since consecutive angles in a parallelogram are supplementary, find the size of angle B.', checkMode: 'auto', correctAnswer: '75°', correctAnswers: ['75°', '75'], answer: '75°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAngle B = 180° − 105° = 75°' },
        { difficulty: 'Medium', question: 'Rectangle ABCD has length AB = 9 cm and width BC = 12 cm. Find the length of diagonal AC.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'The diagonal of a rectangle can be found using the Theorem of Pythagoras, since the sides meet at 90°.\nAC² = AB² + BC² = 9² + 12² = 81 + 144 = 225\nAC = √225 = 15 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Rhombus ABCD has side length 15 cm. Its diagonals bisect each other at right angles at point O, with AO = OC = 9 cm. Find the full length of diagonal BD.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'The diagonals of a rhombus bisect each other at right angles, so triangle AOB is right-angled at O with hypotenuse AB = 15 cm and one leg AO = 9 cm.\nOB² = AB² − AO² = 15² − 9² = 225 − 81 = 144\nOB = 12 cm\nSince the diagonal is bisected, BD = 2 × OB = 2 × 12 = 24 cm', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,90 110,160 175,90 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="90" x2="175" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="160" x2="110" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="35" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="178" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="185" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="63.5" y="131" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="77.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="128" y="145" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD has AB = 11 cm, BC = 8 cm, and angle A = 95°. Angle B is supplementary to angle A. Find the size of angle C.', checkMode: 'auto', correctAnswer: '95°', correctAnswers: ['95°', '95'], answer: '95°', explanation: 'In a parallelogram, opposite angles are equal.\nAngle C is opposite angle A, so angle C = angle A = 95°.\n(Check: angle B = 180° − 95° = 85°, and angle D = angle B = 85°, giving 95° + 85° + 95° + 85° = 360° ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">95°</text><path d="M 179,35 A 16,16 0 0 1 190.4,50.33" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text></svg>' },

        // Block 4 — Kite / trapezium missing value (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Isosceles trapezium ABCD has AB ∥ CD, with AB = 10 cm and CD = 28 cm. The equal legs AD = BC = 15 cm, and each leg extends 9 cm horizontally beyond the shorter parallel side. Find the height of the trapezium.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], answer: '12 cm', explanation: 'Drop a perpendicular from a vertex of the shorter side to the longer side, forming a right-angled triangle with hypotenuse (leg) = 15 cm and base = 9 cm.\nHeight² = 15² − 9² = 225 − 81 = 144\nHeight = √144 = 12 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="78,56 138,56 192,128 24,128" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="78" y1="56" x2="78" y2="128" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 78,116 L 90,116 L 90,128" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="68" y="50" font-size="12" fill="#374151" font-weight="600">A</text><text x="142" y="50" font-size="12" fill="#374151" font-weight="600">B</text><text x="196" y="136" font-size="12" fill="#374151" font-weight="600">C</text><text x="14" y="136" font-size="12" fill="#374151" font-weight="600">D</text><text x="108" y="46" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="108" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28 cm</text><text x="39" y="92" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">15 cm</text><text x="177" y="92" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="94" y="92" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Kite ABCD has diagonal AC as its axis of symmetry, meeting diagonal BD at O. AO = 15 cm, OC = 21 cm, and OB = OD = 20 cm (the diagonals are perpendicular). Find the length of side AB.', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25 cm', '25'], answer: '25 cm', explanation: 'Since the diagonals of a kite are perpendicular, triangle AOB is right-angled at O.\nAB² = AO² + OB² = 15² + 20² = 225 + 400 = 625\nAB = √625 = 25 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,24 45,76.5 115,150 185,76.5" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="24" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="45" y1="76.5" x2="185" y2="76.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,76.5 L 106,67.5 L 115,67.5" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="16" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="37" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="193" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="90.5" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="50.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="117.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="80" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="150" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="60" y="48.25" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Using the same kite ABCD (AO = 15 cm, OC = 21 cm, OB = OD = 20 cm, diagonals perpendicular at O), find the perimeter of the kite.', checkMode: 'auto', correctAnswer: '108cm', correctAnswers: ['108cm', '108 cm', '108'], answer: '108 cm', explanation: 'Side AB = √(AO² + OB²) = √(15² + 20²) = √625 = 25 cm (this equals AD by the kite\'s symmetry).\nSide CB = √(OC² + OB²) = √(21² + 20²) = √841 = 29 cm (this equals CD by the kite\'s symmetry).\nPerimeter = AB + BC + CD + DA = 25 + 29 + 29 + 25 = 108 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,24 45,76.5 115,150 185,76.5" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="24" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="45" y1="76.5" x2="185" y2="76.5" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,76.5 L 106,67.5 L 115,67.5" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="16" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="37" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="193" y="70.5" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="90.5" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="50.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="117.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="80" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="150" y="66.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text></svg>' },

        // Block 5 — Alternative definitions / conjecture reasoning (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'State an alternative definition of a parallelogram in terms of its diagonals, instead of using sides or angles.', answer: 'A parallelogram can be defined as a quadrilateral whose diagonals bisect each other.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Mpho conjectures that 'all quadrilaterals with two pairs of adjacent equal sides have exactly one pair of opposite angles equal'. Investigate whether this conjecture (a property of kites) is always true.", answer: 'Yes — this conjecture is true. Because AB = AD and CB = CD, triangle ABC ≡ triangle ADC (SSS), so angle B = angle D (the angles between the unequal sides are equal). The other pair of opposite angles, at A and C, are generally NOT equal unless the kite is also a rhombus, confirming exactly one pair of opposite angles is equal in a general kite.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Katlego says 'a quadrilateral with diagonals of equal length is always a rectangle'. Find a counter-example to disprove this.", answer: 'An isosceles trapezium has diagonals of equal length (a known property), but it is not a rectangle since it has only one pair of parallel sides and does not have four right angles. This shows that equal diagonals alone are not sufficient to guarantee a rectangle.', checkMode: 'self' },

        // Block 6 — Similar triangle proportional sides (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 5 cm, BC = 7 cm, and DE = 15 cm. Find the length of EF.', checkMode: 'auto', correctAnswer: '21cm', correctAnswers: ['21cm', '21 cm', '21'], answer: '21 cm', explanation: 'The scale factor from triangle ABC to triangle DEF = DE ÷ AB = 15 ÷ 5 = 3\nEF = BC × 3 = 7 × 3 = 21 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text><polygon points="190,140 300,140 238.9,17.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="237" y="12" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="283.5" y="79" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 5 : 8. If the perimeter of the smaller triangle is 40 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '64cm', correctAnswers: ['64cm', '64 cm', '64'], answer: '64 cm', explanation: 'The ratio of perimeters equals the ratio of corresponding sides, 5 : 8.\nLarger perimeter = 40 × (8 ÷ 5) = 64 cm' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 25 : 64. Find the ratio of their corresponding side lengths.', answer: 'Since the area ratio equals the square of the side ratio, the side ratio = √25 : √64 = 5 : 8.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similarity, congruence, special quadrilateral properties, and proof-based reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions on quadrilateral properties or missing side/angle calculations, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on special quadrilaterals and conjecture testing, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
