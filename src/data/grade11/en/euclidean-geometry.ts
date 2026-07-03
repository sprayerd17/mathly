import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Euclidean geometry roles) ────────────────────────────────
// matching angles / triangle sides → blue   (#2563eb)
// proportional sides / parallel   → orange  (#ea580c)
// proportional ratio              → green   (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euclidean Geometry',
  grade: 11,
  subject: 'Mathematics',
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NECESSARY AND SUFFICIENT CONDITIONS FOR SIMILAR POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similar-polygons-conditions',
      title: 'Necessary and Sufficient Conditions for Similar Polygons',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Two triangles are <strong>similar</strong> if their angles coincide (<strong>AA condition</strong> — if two pairs of angles match, the third pair must also match since angles sum to 180°), or if the ratios of their corresponding sides are equal (<strong>SSS proportionality</strong>).</p>` +
        `<p style="margin-bottom:16px;">Triangle ABC is similar to triangle DEF if ${bl('∠A = ∠D')}, ${bl('∠B = ∠E')} and ${bl('∠C = ∠F')}, or equivalently if ${or('AB/DE')} = ${or('BC/EF')} = ${or('CA/FD')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('matching angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('proportional sides')}</span>` +
        `</div>` +

        // ── Two similarity conditions ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two conditions for similarity</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">AA Condition</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If two pairs of ${bl('angles')} match, the triangles are similar. The third pair automatically matches since angles in a triangle sum to 180°.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS Proportionality</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If all three pairs of ${or('corresponding sides')} are in the same ratio, the triangles are similar.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Order of vertices matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">When writing △ABC ∥∥ △DEF, the order of vertices tells you which ${bl('angles')} correspond and which ${or('sides')} are in proportion. Always match vertices in the same order when stating similarity.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Triangle ABC has angles 45°, 60°, 75°. Triangle DEF has angles 45°, 60°, 75° but different side lengths. Are they similar?',
          answer: `Yes — △ABC ∼ △DEF by the ${bl('AA')} condition`,
          steps: [
            `List the angles of each triangle:<br>△ABC: ${bl('45°')}, ${bl('60°')}, ${bl('75°')}<br>△DEF: ${bl('45°')}, ${bl('60°')}, ${bl('75°')}`,
            `Check for matching angle pairs: ${bl('∠A = ∠D = 45°')} ✓ and ${bl('∠B = ∠E = 60°')} ✓`,
            `Since two pairs of ${bl('angles')} match, the third pair must also match (${bl('∠C = ∠F = 75°')}) because angles in a triangle sum to 180°.`,
            `<strong>Conclusion:</strong> Yes — all three pairs of ${bl('angles')} match, so the triangles are similar by the AA condition. Different side lengths do not affect similarity.`,
          ],
        },
        {
          question: 'Triangle ABC has sides 5, 7, 9. Triangle DEF has sides 10, 14, 18. Verify similarity using side ratios.',
          answer: `Yes — △ABC ∼ △DEF by ${or('SSS proportionality')} (ratio = 2)`,
          steps: [
            `Write the ratios of corresponding sides:<br>${or('DE/AB')} = 10/5, &nbsp; ${or('EF/BC')} = 14/7, &nbsp; ${or('FD/CA')} = 18/9`,
            `Calculate each ratio:<br>${or('10/5 = 2')}, &nbsp; ${or('14/7 = 2')}, &nbsp; ${or('18/9 = 2')}`,
            `Since all three ratios are equal (${or('2 = 2 = 2')}), the sides are in proportion with a scale factor of ${or('2')}.`,
            `<strong>Conclusion:</strong> The triangles are similar by ${or('SSS proportionality')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the AA and SSS proportionality conditions for similar triangles with colour coded angle and side matching" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE PROPORTIONALITY THEOREM (INCLUDING THE MIDPOINT THEOREM)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proportionality-theorem',
      title: 'The Proportionality Theorem (Including the Midpoint Theorem)',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>Proportionality Theorem</strong> states that a line drawn ${or('parallel')} to one side of a triangle divides the other two ${bl('sides')} proportionally. In triangle ABC, if ${or('MN ∥ BC')} (with M on AB and N on AC), then ${gr('AM/MB = AN/NC')}.</p>` +
        `<p style="margin-bottom:16px;">The <strong>Midpoint Theorem</strong> is a special case: if M and N are the exact midpoints of AB and AC, then ${or('MN ∥ BC')} AND ${or('MN = ½BC')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('parallel line segments')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('triangle sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('proportional ratio')}</span>` +
        `</div>` +

        // ── Theorem statements ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two key results</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Proportionality Theorem:</strong> If ${or('MN ∥ BC')}, then ${gr('AM/MB = AN/NC')}. The ${or('parallel')} line divides the two ${bl('sides')} in the same ratio.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Midpoint Theorem:</strong> If M and N are midpoints of ${bl('AB')} and ${bl('AC')}, then ${or('MN ∥ BC')} and ${or('MN = ½BC')}. This is the Proportionality Theorem with ${gr('ratio = 1')}.` +
        `</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Setting up the proportion correctly</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always keep the same ${bl('side')} on each half of the ratio: ${gr('AM/MB = AN/NC')}. Do not mix the two sides in one fraction. Cross-multiply to solve for an unknown segment length.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In triangle ABC, MN ∥ BC, with AM = 4 cm, MB = 6 cm and AN = 5 cm. Find NC.',
          answer: `NC = ${or('7.5')} cm`,
          steps: [
            `Since ${or('MN ∥ BC')}, by the Proportionality Theorem: ${gr('AM/MB = AN/NC')}`,
            `Substitute the known values: ${gr('4/6 = 5/NC')}`,
            `Cross-multiply: ${gr('4 × NC = 5 × 6 = 30')}`,
            `Solve: NC = ${or('30/4 = 7.5')} cm ✓`,
          ],
        },
        {
          question: 'Sipho has the same triangle, but M and N are now exact midpoints. If BC = 14 cm, find MN using the Midpoint Theorem.',
          answer: `MN = ${or('7')} cm`,
          steps: [
            `M and N are midpoints of ${bl('AB')} and ${bl('AC')}, so the Midpoint Theorem applies.`,
            `By the Midpoint Theorem: ${or('MN ∥ BC')} and ${or('MN = ½BC')}`,
            `Substitute: ${or('MN = ½ × 14 = 7')} cm`,
            `<strong>Answer:</strong> MN = ${or('7')} cm ✓`,
          ],
        },
        {
          question: 'In triangle PQR, ST ∥ QR, with PS = 6 cm, SQ = 9 cm and PT = 8 cm. Find TR.',
          answer: `TR = ${or('12')} cm`,
          steps: [
            `Since ${or('ST ∥ QR')}, by the Proportionality Theorem: ${gr('PS/SQ = PT/TR')}`,
            `Substitute the known values: ${gr('6/9 = 8/TR')}`,
            `Cross-multiply: ${gr('6 × TR = 8 × 9 = 72')}`,
            `Solve: TR = ${or('72/6 = 12')} cm ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Proportionality Theorem and Midpoint Theorem with colour coded parallel lines and side ratios in a triangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUIANGULAR TRIANGLES AND TRIANGLES WITH SIDES IN PROPORTION ARE SIMILAR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-proof',
      title: 'Equiangular Triangles and Triangles with Sides in Proportion Are Similar',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We formally prove two key results: (1) equiangular triangles (matching angles) are similar, and (2) triangles with all corresponding sides in proportion are similar.</p>` +
        `<p style="margin-bottom:16px;">The proof of the first result uses the Proportionality Theorem from Section 2 — drawing a line ${or('parallel')} to one side of a ${bl('triangle')} creates a ${or('smaller triangle')} that shares the same angles as the original, and by the Proportionality Theorem, this parallel line automatically divides the sides proportionally, proving similarity.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original triangle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('smaller similar triangle')}</span>` +
        `</div>` +

        // ── Proof outline ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Proof outline — equiangular implies similar</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Given ${bl('△ABC')}, draw ${or('DE ∥ BC')} inside the triangle so that ${or('△ADE')} has the same angles as the second triangle.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Corresponding angles: ${or('∠ADE = ∠ABC')} and ${or('∠AED = ∠ACB')} (co-interior / F-angles with the parallel lines), so ${or('△ADE')} is equiangular with ${bl('△ABC')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">By the Proportionality Theorem (Section 2), ${or('DE ∥ BC')} means the sides are automatically in proportion — proving that the AA condition is sufficient for similarity.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Two equivalent routes to similarity</p>` +
        `<p style="margin:0;color:#1e3a8a;">You can prove similarity via matching ${bl('angles')} (AA) or via matching ${or('side ratios')} (SSS proportionality) — both routes lead to the same conclusion. Use whichever one the given information makes easier to verify.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Explain how drawing DE ∥ BC inside triangle ABC proves that angle-angle matching leads to proportional sides.',
          answer: `${or('DE ∥ BC')} creates ${or('△ADE')} that is equiangular with ${bl('△ABC')}, and by the Proportionality Theorem the sides are automatically in proportion`,
          steps: [
            `Draw ${or('DE ∥ BC')} inside ${bl('△ABC')} so that point D lies on AB and point E lies on AC.`,
            `Since ${or('DE ∥ BC')}, corresponding angles are equal: ${or('∠ADE = ∠ABC')} and ${or('∠AED = ∠ACB')} (F-angles with parallel lines).`,
            `Therefore ${or('△ADE')} is equiangular with ${bl('△ABC')} — both the ${bl('original triangle')} and the ${or('smaller triangle')} share the same three angles.`,
            `By the Proportionality Theorem, ${or('DE ∥ BC')} also means the sides of ${bl('△ABC')} are divided proportionally, so the sides of the two triangles are in proportion.`,
            `<strong>Conclusion:</strong> The AA condition is sufficient for similarity — matching ${bl('angles')} guarantees proportional ${or('sides')}. ✓`,
          ],
        },
        {
          question: 'Lerato has two triangles with sides 6, 8, 10 and 9, 12, 15. Verify they are similar using the proportional sides method.',
          answer: `Yes — the triangles are similar by ${or('SSS proportionality')} (ratio = 1.5)`,
          steps: [
            `Write the ratios of corresponding sides (match smallest to smallest, largest to largest):<br>${or('9/6')}, &nbsp; ${or('12/8')}, &nbsp; ${or('15/10')}`,
            `Calculate each ratio:<br>${or('9/6 = 1.5')}, &nbsp; ${or('12/8 = 1.5')}, &nbsp; ${or('15/10 = 1.5')}`,
            `All three ratios are equal: ${or('1.5 = 1.5 = 1.5')} ✓`,
            `<strong>Conclusion:</strong> Since all corresponding ${or('side ratios')} are equal, the triangles are similar by the SSS proportionality condition. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video proving that equiangular triangles are similar using the Proportionality Theorem and verifying similarity via the SSS proportionality condition" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROVING THE THEOREM OF PYTHAGORAS USING SIMILAR TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-similar-triangles',
      title: 'Proving the Theorem of Pythagoras Using Similar Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We prove the <strong>Theorem of Pythagoras</strong> (${bl('a²')}+${bl('b²')}=${bl('c²')}) using ${gr('similar triangles')}, rather than the algebraic proof seen in earlier grades. In a ${bl('right-angled triangle ABC')}, drawing an ${or('altitude')} from the right angle to the hypotenuse splits it into two ${gr('smaller triangles')}, both similar to the original triangle (and to each other) by <strong>AA similarity</strong>, since each smaller triangle shares the right angle and one of the original triangle's acute angles.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('right-angled triangle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('altitude')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('similar smaller triangles')}</span>` +
        `</div>` +

        // ── Proof outline ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Proof outline — altitude creates two similar triangles</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Start with ${bl('right-angled △ABC')} where the right angle is at C and the hypotenuse is ${bl('AB')}. Draw the ${or('altitude CD')} from C perpendicular to ${bl('AB')}, meeting it at D.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">The ${or('altitude')} creates ${gr('△ACD')} and ${gr('△CBD')}. Each smaller triangle contains a right angle (at D) and shares one acute angle with the ${bl('original triangle')}, so all three angles match — satisfying AA similarity.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Since the ${gr('smaller triangles')} are similar to the ${bl('original triangle')}, their sides are proportional. Setting up two proportions and adding the resulting equations gives ${bl('a²')}+${bl('b²')}=${bl('c²')}. ✓</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why AA similarity is the key step</p>` +
        `<p style="margin:0;color:#1e3a8a;">The right angle in each ${gr('smaller triangle')} comes from the ${or('altitude')} being perpendicular to the hypotenuse. The shared acute angle is the same angle that appears in the ${bl('original triangle')}. Two matching angles (AA) guarantee the third also matches — so similarity is proven without measuring any sides.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Explain why the two smaller triangles formed by the altitude in a right-angled triangle are both similar to the original triangle.',
          answer: `Each ${gr('smaller triangle')} shares the right angle and one acute angle with the ${bl('original triangle')} — satisfying AA similarity`,
          steps: [
            `In ${bl('right-angled △ABC')} (right angle at C), draw the ${or('altitude CD')} to hypotenuse AB, creating ${gr('△ACD')} and ${gr('△CBD')}.`,
            `Each ${gr('smaller triangle')} contains a right angle at D (since the ${or('altitude')} meets the hypotenuse perpendicularly).`,
            `${gr('△ACD')} shares ${bl('∠A')} with the original ${bl('△ABC')}, and ${gr('△CBD')} shares ${bl('∠B')} with the original ${bl('△ABC')}.`,
            `Each ${gr('smaller triangle')} therefore has the same three angles as the ${bl('original triangle')}: a right angle, ${bl('∠A')} (or ${bl('∠B')}), and the remaining acute angle — satisfying AA similarity.`,
            `<strong>Conclusion:</strong> Both ${gr('smaller triangles')} are similar to ${bl('△ABC')} (and to each other) by the AA condition. ✓`,
          ],
        },
        {
          question: 'Sipho uses the similar triangles formed by the altitude to set up proportional side ratios, then combines them to derive a²+b²=c². Explain the general logic of this proof.',
          answer: `Setting up proportions from the two pairs of ${gr('similar triangles')} and adding the resulting equations simplifies to ${bl('a²')}+${bl('b²')}=${bl('c²')}`,
          steps: [
            `Label the ${bl('original triangle')}: hypotenuse ${bl('c = AB')}, and the two legs ${bl('a = BC')} and ${bl('b = AC')}. Let ${or('AD = p')} and ${or('DB = q')}, so ${bl('p + q = c')}.`,
            `Since ${gr('△ACD')} ∼ ${bl('△ABC')} (AA), their corresponding sides are in proportion: ${gr('b/c = p/b')}, giving ${gr('b² = cp')}.`,
            `Since ${gr('△CBD')} ∼ ${bl('△ABC')} (AA), similarly: ${gr('a/c = q/a')}, giving ${gr('a² = cq')}.`,
            `Add the two equations: ${gr('a² + b²')} = ${gr('cq + cp')} = ${gr('c(p + q)')}.`,
            `Substitute ${bl('p + q = c')}: ${gr('a² + b²')} = ${bl('c × c')} = ${bl('c²')}. ✓ This proves the theorem using only similarity, not direct area arguments.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video proving the Theorem of Pythagoras using similar triangles formed by the altitude to the hypotenuse, with colour coded right-angled triangle, altitude, and smaller similar triangles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING PROBLEMS USING SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-similarity-problems',
      title: 'Solving Problems Using Similarity',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We apply all the similarity conditions and theorems from this topic to solve riders (geometry proof problems) and numerical problems, identifying which condition (${gr('AA')}, ${gr('SSS proportionality')}, or the ${gr('Proportionality Theorem')}) is relevant and using it to find ${re('unknown lengths')} or prove relationships.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known measurements')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown measurement')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('similarity condition used')}</span>` +
        `</div>` +

        // ── Strategy cards ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Choosing the right condition</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">AA Condition</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Use when ${bl('two pairs of angles')} are known or can be deduced. Scales perimeter linearly by the side ratio.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS Proportionality</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Use when all ${bl('three side ratios')} can be checked. Area scales by the <em>square</em> of the side ratio.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Proportionality Theorem</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Use when a line is ${gr('parallel to one side')} of a triangle — it divides the other two sides in the same ratio.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Perimeter vs area scaling</p>` +
        `<p style="margin:0;color:#1e3a8a;">If two similar figures have a side ratio of ${bl('m : n')}, their perimeters are in the ratio ${bl('m : n')} (linear), but their areas are in the ratio ${bl('m² : n²')} (squared). Always check whether you need linear or area scaling before substituting.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two similar triangles have a side ratio of 3:5. If the smaller triangle has a perimeter of 18 cm, find the perimeter of the larger triangle.',
          answer: `Larger perimeter = ${re('30')} cm`,
          steps: [
            `The two triangles are similar with side ratio ${bl('3 : 5')}.`,
            `Perimeter scales linearly — the same way as side length — so the perimeter ratio is also ${bl('3 : 5')}.`,
            `Set up the proportion: ${bl('18')} / ${re('P')} = ${bl('3')} / ${bl('5')}, where ${re('P')} is the unknown larger perimeter.`,
            `Cross-multiply: ${re('P')} = ${bl('18')} × ${bl('5')} / ${bl('3')} = ${re('30')} cm. ✓`,
          ],
        },
        {
          question: 'Lerato has two triangles confirmed similar by AA. The smaller triangle has area 12 cm² and a side ratio to the larger of 1:3. Find the larger triangle\'s area.',
          answer: `Larger area = ${re('108')} cm²`,
          steps: [
            `The triangles are similar (${gr('AA condition')}) with side ratio ${bl('1 : 3')}.`,
            `Area scales by the <em>square</em> of the side ratio: area ratio = ${bl('1²')} : ${bl('3²')} = ${bl('1 : 9')}.`,
            `Set up the proportion: ${bl('12')} / ${re('A')} = ${bl('1')} / ${bl('9')}, where ${re('A')} is the unknown larger area.`,
            `Cross-multiply: ${re('A')} = ${bl('12')} × ${bl('9')} = ${re('108')} cm². ✓`,
          ],
        },
        {
          question: 'Triangle ABC has DE parallel to BC, with AD = 4 cm, DB = 6 cm, and AE = 5 cm. Find EC, then state which condition justifies your method.',
          answer: `EC = ${re('7.5')} cm, justified by the ${gr('Proportionality Theorem')}`,
          steps: [
            `Since ${gr('DE ∥ BC')}, the ${gr('Proportionality Theorem')} applies: ${bl('AD')} / ${bl('DB')} = ${bl('AE')} / ${re('EC')}.`,
            `Substitute the known values: ${bl('4')} / ${bl('6')} = ${bl('5')} / ${re('EC')}.`,
            `Cross-multiply: ${re('EC')} = ${bl('5')} × ${bl('6')} / ${bl('4')} = ${re('7.5')} cm.`,
            `<strong>Justification:</strong> This is valid by the ${gr('Proportionality Theorem')} — since ${gr('DE ∥ BC')}, the line parallel to one side of the triangle divides the other two sides (AB and AC) in the same ratio. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving similarity problems — perimeter and area scaling, and applying the Proportionality Theorem — with colour coded known measurements, unknown measurements, and similarity conditions" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two triangles have matching angles 50°, 60°, 70°. What condition proves they are similar?',
      answer: 'AA (angle-angle)',
      checkMode: 'auto',
      correctAnswer: 'AA (angle-angle)',
      correctAnswers: ['AA (angle-angle)', 'AA', 'angle-angle'],
      explanation: 'If two pairs of angles match, the triangles are similar by the AA (angle-angle) condition. Since angles in a triangle sum to 180°, the third pair automatically matches too.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have sides 4, 6, 8 and 10, 15, 20. Verify similarity using side ratios.',
      answer: 'ratios are 2.5, 2.5, 2.5 — equal, so similar',
      checkMode: 'auto',
      correctAnswer: 'similar',
      correctAnswers: ['similar', 'yes, similar', 'yes'],
      explanation: '10/4 = 2.5, 15/6 = 2.5, 20/8 = 2.5. All three ratios equal 2.5, confirming the triangles are similar by SSS proportionality.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says SSS proportionality and SSS congruency are the same condition. Is he correct? Explain.',
      answer: 'No — SSS congruency requires sides to be exactly equal, while SSS proportionality (for similarity) only requires sides to be in the same ratio, which allows for different sizes.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In a triangle, MN is parallel to BC, with AM = 3 cm, MB = 5 cm, AN = 4 cm. Find NC.',
      answer: '6.67 cm',
      checkMode: 'auto',
      correctAnswer: '6.67 cm',
      correctAnswers: ['6.67 cm', '6.67', '6⅔ cm', '20/3 cm', '20/3'],
      explanation: 'By the Proportionality Theorem: AM/MB = AN/NC. So 3/5 = 4/NC. Cross-multiply: 3 × NC = 20. NC = 20/3 ≈ 6.67 cm.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'M and N are midpoints of AB and AC in triangle ABC, with BC = 18 cm. Find MN using the Midpoint Theorem.',
      answer: '9 cm',
      checkMode: 'auto',
      correctAnswer: '9 cm',
      correctAnswers: ['9 cm', '9'],
      explanation: 'By the Midpoint Theorem, MN ∥ BC and MN = ½BC = ½ × 18 = 9 cm.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has AM = 6 cm, MB = 9 cm in a triangle where MN is parallel to BC. If NC = 12 cm, find AN.',
      answer: 'AM/MB = AN/NC. 6/9 = AN/12. AN = 12 × 6/9 = 8 cm.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State why equiangular triangles are automatically similar.',
      answer: 'matching angles force corresponding sides into proportion',
      checkMode: 'auto',
      correctAnswer: 'matching angles force corresponding sides into proportion',
      correctAnswers: ['matching angles force corresponding sides into proportion', 'angles force proportional sides', 'AA condition'],
      explanation: 'By the AA condition and the Proportionality Theorem, if two triangles have the same angles their sides are automatically in proportion, making them similar.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo has two equiangular triangles. Explain the connection between this and the Proportionality Theorem in proving similarity.',
      answer: 'Drawing a line parallel to one side creates a smaller equiangular triangle; by the Proportionality Theorem, this parallel line divides the sides proportionally, which is exactly the proof that equiangular triangles have proportional sides.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have sides 5, 12, 13 and 15, 36, 39. Verify they are similar.',
      answer: 'ratios are all 3, confirming similarity',
      checkMode: 'auto',
      correctAnswer: 'similar',
      correctAnswers: ['similar', 'yes, similar', 'yes'],
      explanation: '15/5 = 3, 36/12 = 3, 39/13 = 3. All three ratios equal 3, confirming similarity by SSS proportionality.',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A right-angled triangle has an altitude from the right angle to the hypotenuse, creating two smaller similar triangles. Explain why these two smaller triangles are also similar to each other.',
      answer: 'Both smaller triangles are similar to the original (large) triangle by AA; since similarity is transitive, two triangles both similar to the same third triangle must also be similar to each other.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two similar triangles have a side ratio 2:7. If the smaller triangle\'s perimeter is 24 cm, find the larger triangle\'s perimeter.',
      answer: '84 cm',
      checkMode: 'auto',
      correctAnswer: '84 cm',
      correctAnswers: ['84 cm', '84'],
      explanation: 'Perimeter scales linearly with the side ratio. Larger perimeter = 24 × 7/2 = 84 cm.',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two similar triangles have area ratio 4:25. Find their side ratio.',
      answer: 'Side ratio = √4 : √25 = 2 : 5.',
      checkMode: 'self',
    },

    // ── Q13 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A triangle has DE parallel to BC, AD = 8 cm, DB = 4 cm, AE = 10 cm. Find EC.',
      answer: '5 cm',
      checkMode: 'auto',
      correctAnswer: '5 cm',
      correctAnswers: ['5 cm', '5'],
      explanation: 'By the Proportionality Theorem: AD/DB = AE/EC. So 8/4 = 10/EC. 2 = 10/EC. EC = 5 cm.',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle has two triangles similar by AA, with a side ratio 5:8. If the smaller triangle\'s area is 50 cm², find the larger triangle\'s area.',
      answer: 'Area ratio = 8²/5² = 64/25. Larger area = 50 × 64/25 = 128 cm².',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A triangle has midpoints M and N on sides AB and AC. If AM = 5 cm and BC = 20 cm, find AB and MN.',
      answer: 'Since M is the midpoint, AB = 2 × AM = 10 cm. By the Midpoint Theorem, MN = ½BC = 10 cm.',
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho proves two triangles similar using AA, then uses this to find an unknown side via proportional ratios. Explain the two-step logic he used.',
      answer: 'First, he established similarity using matching angles (AA condition). Second, since similar triangles have proportional sides, he set up a ratio equation using known and unknown sides to solve for the missing length.',
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two triangles have sides in the ratio 3:4. The smaller triangle has sides 9, 12, 15. Find the sides of the larger triangle.',
      answer: '12, 16, 20',
      checkMode: 'auto',
      correctAnswer: '12, 16, 20',
      correctAnswers: ['12, 16, 20', '12,16,20', '12 16 20'],
      explanation: 'Scale factor = 4/3. Larger sides: 9 × 4/3 = 12, 12 × 4/3 = 16, 15 × 4/3 = 20.',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has a right-angled triangle with legs 6 cm and 8 cm. Using the similar-triangles proof method (not direct Pythagoras), explain how the altitude to the hypotenuse would be used to verify the hypotenuse length.',
      answer: 'The altitude creates two smaller triangles similar to the original; setting up proportional side ratios from these similar triangles and combining them algebraically gives the same result as a² + b² = c², confirming hypotenuse = 10 cm without directly applying the Pythagorean formula.',
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A triangle has DE parallel to BC, dividing AB in the ratio 2:3 (AD:DB). If AC = 15 cm, find AE.',
      answer: 'AD/DB = AE/EC, so AE:EC = 2:3 also. AE = 15 × 2/5 = 6 cm.',
      checkMode: 'self',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says all similar triangles are also congruent if their corresponding angles AND one pair of corresponding sides are equal. Is he correct? Explain.',
      answer: 'Yes — if one pair of corresponding sides is equal between similar triangles, this forces the scale factor to be 1, meaning all sides must be equal, making the triangles congruent (not just similar).',
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

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered Euclidean geometry.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
