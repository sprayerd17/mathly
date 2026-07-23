import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Euclidean geometry roles) ────────────────────────────────
// matching angles / triangle sides → blue   (#2563eb)
// proportional sides / parallel   → orange  (#ea580c)
// proportional ratio              → green   (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── CAPS-style two-column (Statement | Reason) proof table ──────────────────
// rows: array of [statement, reason] pairs, rendered as an HTML table matching
// the site's design system (used inside `explanation` strings for rider proofs).
const proofTable = (rows: [string, string][]) =>
  `<div style="overflow-x:auto;margin-top:10px;margin-bottom:6px"><table style="border-collapse:collapse;font-size:0.92em;width:100%">` +
  `<thead><tr>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Statement</th>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Reason</th>` +
  `</tr></thead><tbody>` +
  rows
    .map(
      ([s, r], i) =>
        `<tr style="background:${i % 2 === 0 ? '#f8fafc' : '#ffffff'}">` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f1f3d;">${s}</td>` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#374151;">${r}</td>` +
        `</tr>`
    )
    .join('') +
  `</tbody></table></div>`

export const topicData: TopicData = {
  title: 'Euclidean Geometry',
  grade: 11,
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
        'Short video explaining the AA and SSS proportionality conditions for similar triangles with colour coded angle and side matching',
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
        'Short video explaining the Proportionality Theorem and Midpoint Theorem with colour coded parallel lines and side ratios in a triangle',
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
        'Short video proving that equiangular triangles are similar using the Proportionality Theorem and verifying similarity via the SSS proportionality condition',
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
        'Short video proving the Theorem of Pythagoras using similar triangles formed by the altitude to the hypotenuse, with colour coded right-angled triangle, altitude, and smaller similar triangles',
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
        'Short video solving similarity problems — perimeter and area scaling, and applying the Proportionality Theorem — with colour coded known measurements, unknown measurements, and similarity conditions',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-3):   AA / SSS similar-polygon conditions        — abstract, no diagram
    // Block 2 (4-6):   Proportionality Theorem                    — NEEDS DIAGRAM (4,5,6)
    // Block 3 (7-9):   Midpoint Theorem                           — NEEDS DIAGRAM (7,8,9)
    // Block 4 (10-12): Equiangular / SSS-proportion similarity    — NEEDS DIAGRAM (11)
    // Block 5 (13-15): Pythagoras via similar triangles (altitude)— NEEDS DIAGRAM (13,14,15)
    // Block 6 (16-19): Mixed application / capstone               — NEEDS DIAGRAM (16,19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — AA / SSS similar-polygon conditions (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 55°, 65°, 60°. Triangle DEF has angles 55°, 60°, 65° but different side lengths. Are the two triangles similar?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'yes, similar', 'similar'], answer: 'yes', explanation: 'Both triangles have the same three angles (55°, 60°, 65°) — the order in which they are listed does not matter. Since all three pairs of angles match, the triangles are similar by the AA condition.' },
        { difficulty: 'Easy', question: 'Triangle ABC has sides 4 cm, 6 cm, 8 cm. Triangle DEF has sides 8 cm, 12 cm, 16 cm. Verify similarity using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 8/4 = 2, EF/BC = 12/6 = 2, FD/CA = 16/8 = 2. All three ratios equal 2, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 6 cm, 9 cm, 12 cm. Triangle DEF has sides 8 cm, 12 cm, 16 cm. Verify whether the triangles are similar using side ratios.', answer: 'DE/AB = 8/6 = 4/3, EF/BC = 12/9 = 4/3, FD/CA = 16/12 = 4/3. All three ratios equal 4/3, so the triangles are similar by SSS proportionality.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele says that if two triangles both have a 40° angle, they must be similar. Is she correct? Explain using a counter-example.', answer: 'No — a triangle with angles 40°, 40°, 100° and a triangle with angles 40°, 70°, 70° both contain a 40° angle, but their other two angles are completely different, so the triangles are not similar. A single matching angle is not enough; the AA condition requires two pairs of matching angles.', checkMode: 'self' },

        // Block 2 — Proportionality Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In triangle ABC, MN is parallel to BC, with M on AB and N on AC. AM = 3 cm, MB = 6 cm and AN = 4 cm. Find NC.', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm', '8'], answer: '8 cm', explanation: 'Since MN ∥ BC, by the Proportionality Theorem: AM/MB = AN/NC. So 3/6 = 4/NC. Cross-multiply: 3 × NC = 24. NC = 8 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="106.8" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="49.3" y="149.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="193.2" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="244.7" y="149.3" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In triangle PQR, ST is parallel to QR, with S on PQ and T on PR. PS = 5 cm, SQ = 10 cm and PT = 7 cm. Find TR.', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14 cm', '14'], answer: '14 cm', explanation: 'Since ST ∥ QR, by the Proportionality Theorem: PS/SQ = PT/TR. So 5/10 = 7/TR. Cross-multiply: 5 × TR = 70. TR = 14 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="106.8" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="49.3" y="149.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="193.2" y="58.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="244.7" y="149.3" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC. AD = 6 cm, DB = 9 cm and AE = 8 cm. Find EC, then use it to find the ratio AE:AC.', answer: 'By the Proportionality Theorem: AD/DB = AE/EC. So 6/9 = 8/EC. Cross-multiply: 6 × EC = 72, so EC = 12 cm. AC = AE + EC = 8 + 12 = 20 cm. Ratio AE:AC = 8:20 = 2:5.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="104.0" y1="100.8" x2="196.0" y2="100.8" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,105.0 L 142.0,100.8 L 135.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,105.0 L 158.0,100.8 L 151.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="88" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="212" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="103" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="45.5" y="155.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="197" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="248.5" y="155.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 3 — Midpoint Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M and N are the midpoints of AB and AC in triangle ABC, with BC = 22 cm. Find MN using the Midpoint Theorem.', checkMode: 'auto', correctAnswer: '11cm', correctAnswers: ['11cm', '11 cm', '11'], answer: '11 cm', explanation: 'By the Midpoint Theorem, MN ∥ BC and MN = ½BC = ½ × 22 = 11 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 22 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is the midpoint of AB in triangle ABC, with AM = 7 cm. Find the full length of AB.', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14 cm', '14'], answer: '14 cm', explanation: 'Since M is the midpoint of AB, AM = MB, so AB = 2 × AM = 2 × 7 = 14 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M and N are the midpoints of AB and AC in triangle ABC, and MN = 9 cm. Find BC, then find the perimeter of triangle AMN given that AM = 8 cm and AN = 10 cm.', answer: 'By the Midpoint Theorem, MN = ½BC, so BC = 2 × MN = 2 × 9 = 18 cm. The perimeter of triangle AMN = AM + MN + AN = 8 + 9 + 10 = 27 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 4 — Equiangular / SSS-proportion similarity (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 48°, 62°, 70°. Triangle XYZ has angles 48°, 70°, 62° but different side lengths. Explain why the triangles are equiangular and therefore similar.', answer: 'Both triangles contain the same three angles (48°, 62°, 70°), just listed in a different order. Since all corresponding angles match, the triangles are equiangular, and by the AA condition equiangular triangles are always similar — different side lengths do not affect this.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 7 cm, 24 cm, 25 cm. Triangle DEF has sides 21 cm, 72 cm, 75 cm. Verify these triangles are similar using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 21/7 = 3, EF/BC = 72/24 = 3, FD/CA = 75/25 = 3. All three ratios equal 3, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is drawn parallel to BC, with D on AB and E on AC. Explain how this construction proves that △ADE is equiangular with △ABC, and state which theorem confirms their sides are also in proportion.', answer: 'Since DE ∥ BC, corresponding angles are equal: ∠ADE = ∠ABC and ∠AED = ∠ACB (they form F-angle pairs with the parallel lines), and both triangles share ∠A. So △ADE has the same three angles as △ABC, making it equiangular with △ABC. The Proportionality Theorem then confirms that because DE ∥ BC, the sides AD/AB and AE/AC (and DE/BC) are automatically in the same ratio — proving the AA condition is sufficient for similarity.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 38.54,201.47" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 97,129.5 A 13 13 0 0 1 90.94,118.51" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 261.46,201.47" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 259.32,198.09" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 203,129.5 A 13 13 0 0 0 209.06,118.51" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 199,129.5 A 17 17 0 0 0 206.92,115.13" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text></svg>'  },

        // Block 5 — Pythagoras via similar triangles (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'A right-angled triangle has legs of 9 cm and 12 cm. Use the Theorem of Pythagoras to find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'By the Theorem of Pythagoras: c² = 9² + 12² = 81 + 144 = 225. c = √225 = 15 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 25 cm), the altitude CD is drawn from C to AB, splitting AB into AD = 16 cm and DB = 9 cm. Using the similar triangles △ACD ∼ △ABC, show that AC² = AB × AD, and hence find AC.', answer: 'Since △ACD ∼ △ABC (AA, sharing ∠A and each having a right angle), corresponding sides are in proportion: AC/AB = AD/AC, so AC² = AB × AD = 25 × 16 = 400. AC = √400 = 20 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 25 cm), the altitude CD splits AB into AD = 16 cm and DB = 9 cm. Given AC = 20 cm and BC = 15 cm, verify the Theorem of Pythagoras (AC² + BC² = AB²) using these values, confirming the similar-triangles proof.', answer: 'AC² + BC² = 20² + 15² = 400 + 225 = 625. AB² = 25² = 625. Since 625 = 625, the Theorem of Pythagoras is verified. This matches the similar-triangles proof: AC² = AB × AD = 25 × 16 = 400 and BC² = AB × DB = 25 × 9 = 225, and adding gives AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>'  },

        // Block 6 — Mixed application / capstone (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 7 cm, DE = 21 cm (scale factor 3), and BC = 7 cm. Find EF.', checkMode: 'auto', correctAnswer: '21cm', correctAnswers: ['21cm', '21 cm', '21'], answer: '21 cm', explanation: 'The scale factor from △ABC to △DEF is DE ÷ AB = 21 ÷ 7 = 3. EF = BC × 3 = 7 × 3 = 21 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 5:8. If the smaller triangle has a perimeter of 20 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '32cm', correctAnswers: ['32cm', '32 cm', '32'], answer: '32 cm', explanation: 'Perimeter scales linearly with the side ratio. Larger perimeter = 20 × (8/5) = 32 cm.' },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC, dividing AB in the ratio AD:DB = 1:2. Given AC = 18 cm, find AE and EC.', answer: 'By the Proportionality Theorem, AD/DB = AE/EC, so AE:EC = 1:2 as well. This means AE is 1/3 of AC and EC is 2/3 of AC. AE = 18 × 1/3 = 6 cm. EC = 18 × 2/3 = 12 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="108.8" y="58.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="51.3" y="149.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">2</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Karabo has proven two triangles similar using the AA condition, then used the Proportionality Theorem to find an unknown side inside one of the triangles. Explain how these two results work together as separate but connected tools.', answer: 'The AA condition and the Proportionality Theorem address different situations: AA condition proves whole triangles are similar by comparing their angles, while the Proportionality Theorem applies inside a single triangle when a line is drawn parallel to one side, showing that line divides the other two sides proportionally. Karabo first used AA to establish that two separate triangles share the same shape, then separately applied the Proportionality Theorem to a parallel line within one triangle to solve for an unknown segment length — both tools rely on the same underlying idea of proportional sides but are applied in different geometric contexts.', checkMode: 'self' },

        // Block 7 — Rider proofs (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'In triangle ABC, D lies on AB and E lies on AC, with AD = 4 cm, DB = 6 cm, AE = 6 cm and EC = 9 cm. Prove that DE ∥ BC.', answer: `Since ${bl('AD/DB = 4/6 = 2/3')} and ${bl('AE/EC = 6/9 = 2/3')}, the two ratios are equal, so by the converse of the Proportionality Theorem, DE ∥ BC.` + proofTable([
          ['AD/DB = 4/6 = 2/3', 'Given lengths'],
          ['AE/EC = 6/9 = 2/3', 'Given lengths'],
          ['AD/DB = AE/EC', 'Both ratios equal 2/3 (shown above)'],
          ['∴ DE ∥ BC', 'Converse of the Proportionality Theorem: if a line divides two sides of a triangle in the same ratio, it is parallel to the third side'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="104.0" y1="100.8" x2="196.0" y2="100.8" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="104.0" cy="100.8" r="3" fill="#0f1f3d"/><circle cx="196.0" cy="100.8" r="3" fill="#0f1f3d"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="88" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="212" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="103" y="58.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="45.5" y="149.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="197" y="58.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="248.5" y="149.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'In triangle ABC, D lies on AB and E lies on AC such that ∠ADE = ∠ACB (marked equal in the diagram). AD = 6 cm, AE = 8 cm and AC = 15 cm. Prove that AD × AB = AE × AC, and hence find AB.', answer: `Since ${bl('∠A')} is common to both triangles and ${gr('∠ADE = ∠ACB')} (given), △ADE ∼ △ACB by the AA condition. So AD/AC = AE/AB, which gives AD × AB = AE × AC, so 6 × AB = 8 × 15 = 120, and AB = 120/6 = 20 cm.` + proofTable([
          ['∠DAE = ∠CAB', 'Common angle at A'],
          ['∠ADE = ∠ACB', 'Given (marked equal in diagram)'],
          ['∴ △ADE ∼ △ACB', 'AA similarity condition (two pairs of angles equal)'],
          ['AD/AC = AE/AB', 'Corresponding sides of similar triangles are in proportion'],
          ['AD × AB = AE × AC', 'Cross-multiplying the proportion'],
          ['6 × AB = 8 × 15 = 120, so AB = 120/6 = 20 cm', 'Substituting AD = 6, AE = 8, AC = 15 and solving'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="86.75" y1="128.1" x2="213.25" y2="128.1" stroke="#0f1f3d" stroke-width="2"/><path d="M 95.30,114.57 A 16,16 0 0 1 102.75,128.1" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 256.5,196.5 A 16,16 0 0 1 249.0,210.0" fill="none" stroke="#16a34a" stroke-width="1.8"/><circle cx="86.75" cy="128.1" r="3" fill="#0f1f3d"/><circle cx="213.25" cy="128.1" r="3" fill="#0f1f3d"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="70.5" y="130.2" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="229" y="130" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="106.25" y="75.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="196" y="72" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="243" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">AC = 15 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similar polygons, the Proportionality Theorem, and the similar-triangles proof of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the Proportionality Theorem or the Midpoint Theorem, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on similarity conditions and the altitude-based Pythagoras proof, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — AA / SSS similar-polygon conditions (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 52°, 68°, 60°. Triangle DEF has angles 60°, 52°, 68° but different side lengths. Are the two triangles similar?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'yes, similar', 'similar'], answer: 'yes', explanation: 'Both triangles have the same three angles (52°, 60°, 68°) — the order in which they are listed does not matter. Since all three pairs of angles match, the triangles are similar by the AA condition.' },
        { difficulty: 'Easy', question: 'Triangle ABC has sides 5 cm, 7 cm, 9 cm. Triangle DEF has sides 15 cm, 21 cm, 27 cm. Verify similarity using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 15/5 = 3, EF/BC = 21/7 = 3, FD/CA = 27/9 = 3. All three ratios equal 3, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 8 cm, 10 cm, 14 cm. Triangle DEF has sides 12 cm, 15 cm, 21 cm. Verify whether the triangles are similar using side ratios.', answer: 'DE/AB = 12/8 = 1.5, EF/BC = 15/10 = 1.5, FD/CA = 21/14 = 1.5. All three ratios equal 1.5, so the triangles are similar by SSS proportionality.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Tumi says that if two triangles both have a 90° angle, they must be similar. Is he correct? Explain using a counter-example.', answer: 'No — a right-angled triangle with angles 90°, 30°, 60° and a right-angled triangle with angles 90°, 45°, 45° both contain a 90° angle, but their other two angles are completely different, so the triangles are not similar. A single matching angle is not enough; the AA condition requires two pairs of matching angles.', checkMode: 'self' },

        // Block 2 — Proportionality Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In triangle ABC, MN is parallel to BC, with M on AB and N on AC. AM = 5 cm, MB = 8 cm and AN = 6 cm. Find NC.', checkMode: 'auto', correctAnswer: '9.6cm', correctAnswers: ['9.6cm', '9.6 cm', '9.6'], answer: '9.6 cm', explanation: 'Since MN ∥ BC, by the Proportionality Theorem: AM/MB = AN/NC. So 5/8 = 6/NC. Cross-multiply: 5 × NC = 48. NC = 9.6 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="105.8" y1="98.0" x2="194.2" y2="98.0" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,102.2 L 142.0,98.0 L 135.0,93.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,102.2 L 158.0,98.0 L 151.0,93.8" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="89.8" y="101" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="210.2" y="101" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="103.9" y="63" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="46.4" y="154" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="196.1" y="63" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="247.6" y="154" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In triangle PQR, ST is parallel to QR, with S on PQ and T on PR. PS = 4 cm, SQ = 9 cm and PT = 6 cm. Find TR.', checkMode: 'auto', correctAnswer: '13.5cm', correctAnswers: ['13.5cm', '13.5 cm', '13.5'], answer: '13.5 cm', explanation: 'Since ST ∥ QR, by the Proportionality Theorem: PS/SQ = PT/TR. So 4/9 = 6/TR. Cross-multiply: 4 × TR = 54. TR = 13.5 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="114.6" y1="84.0" x2="185.4" y2="84.0" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,88.2 L 142.0,84.0 L 135.0,79.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,88.2 L 158.0,84.0 L 151.0,79.8" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="98.6" y="87" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="201.4" y="87" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="108.3" y="56" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="50.8" y="147" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="191.7" y="56" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="243.2" y="147" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC. AD = 8 cm, DB = 10 cm and AE = 12 cm. Find EC, then use it to find the ratio AE:AC.', answer: 'By the Proportionality Theorem: AD/DB = AE/EC. So 8/10 = 12/EC. Cross-multiply: 8 × EC = 120, so EC = 15 cm. AC = AE + EC = 12 + 15 = 27 cm. Ratio AE:AC = 12:27 = 4:9.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="98.9" y1="108.9" x2="201.1" y2="108.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,113.1 L 142.0,108.9 L 135.0,104.7" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,113.1 L 158.0,108.9 L 151.0,104.7" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="82.9" y="111.9" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="217.1" y="111.9" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="100.4" y="68.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="42.9" y="159.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="199.6" y="68.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="251.1" y="159.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 3 — Midpoint Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M and N are the midpoints of AB and AC in triangle ABC, with BC = 26 cm. Find MN using the Midpoint Theorem.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'By the Midpoint Theorem, MN ∥ BC and MN = ½BC = ½ × 26 = 13 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 26 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is the midpoint of AB in triangle ABC, with AM = 9 cm. Find the full length of AB.', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18 cm', '18'], answer: '18 cm', explanation: 'Since M is the midpoint of AB, AM = MB, so AB = 2 × AM = 2 × 9 = 18 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M and N are the midpoints of AB and AC in triangle ABC, and MN = 12 cm. Find BC, then find the perimeter of triangle AMN given that AM = 9 cm and AN = 11 cm.', answer: 'By the Midpoint Theorem, MN = ½BC, so BC = 2 × MN = 2 × 12 = 24 cm. The perimeter of triangle AMN = AM + MN + AN = 9 + 12 + 11 = 32 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 4 — Equiangular / SSS-proportion similarity (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 42°, 66°, 72°. Triangle XYZ has angles 72°, 42°, 66° but different side lengths. Explain why the triangles are equiangular and therefore similar.', answer: 'Both triangles contain the same three angles (42°, 66°, 72°), just listed in a different order. Since all corresponding angles match, the triangles are equiangular, and by the AA condition equiangular triangles are always similar — different side lengths do not affect this.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 6 cm, 8 cm, 10 cm. Triangle DEF has sides 15 cm, 20 cm, 25 cm. Verify these triangles are similar using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 15/6 = 2.5, EF/BC = 20/8 = 2.5, FD/CA = 25/10 = 2.5. All three ratios equal 2.5, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Hard', question: 'In triangle PQR, ST is drawn parallel to QR, with S on PQ and T on PR. Explain how this construction proves that △PST is equiangular with △PQR, and state which theorem confirms their sides are also in proportion.', answer: 'Since ST ∥ QR, corresponding angles are equal: ∠PST = ∠PQR and ∠PTS = ∠PRQ (they form F-angle pairs with the parallel lines), and both triangles share ∠P. So △PST has the same three angles as △PQR, making it equiangular with △PQR. The Proportionality Theorem then confirms that because ST ∥ QR, the sides PS/PQ and PT/PR (and ST/QR) are automatically in the same ratio — proving the AA condition is sufficient for similarity.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 38.54,201.47" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 97,129.5 A 13 13 0 0 1 90.94,118.51" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 261.46,201.47" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 259.32,198.09" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 203,129.5 A 13 13 0 0 0 209.06,118.51" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 199,129.5 A 17 17 0 0 0 206.92,115.13" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text></svg>'  },

        // Block 5 — Pythagoras via similar triangles (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'A right-angled triangle has legs of 5 cm and 12 cm. Use the Theorem of Pythagoras to find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'By the Theorem of Pythagoras: c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 50 cm), the altitude CD is drawn from C to AB, splitting AB into AD = 32 cm and DB = 18 cm. Using the similar triangles △ACD ∼ △ABC, show that AC² = AB × AD, and hence find AC.', answer: 'Since △ACD ∼ △ABC (AA, sharing ∠A and each having a right angle), corresponding sides are in proportion: AC/AB = AD/AC, so AC² = AB × AD = 50 × 32 = 1 600. AC = √1 600 = 40 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">32 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 50 cm), the altitude CD splits AB into AD = 32 cm and DB = 18 cm. Given AC = 40 cm and BC = 30 cm, verify the Theorem of Pythagoras (AC² + BC² = AB²) using these values, confirming the similar-triangles proof.', answer: 'AC² + BC² = 40² + 30² = 1 600 + 900 = 2 500. AB² = 50² = 2 500. Since 2 500 = 2 500, the Theorem of Pythagoras is verified. This matches the similar-triangles proof: AC² = AB × AD = 50 × 32 = 1 600 and BC² = AB × DB = 50 × 18 = 900, and adding gives AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">32 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30 cm</text></svg>'  },

        // Block 6 — Mixed application / capstone (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 9 cm, DE = 27 cm (scale factor 3), and BC = 9 cm. Find EF.', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27 cm', '27'], answer: '27 cm', explanation: 'The scale factor from △ABC to △DEF is DE ÷ AB = 27 ÷ 9 = 3. EF = BC × 3 = 9 × 3 = 27 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 4:9. If the smaller triangle has a perimeter of 28 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '63cm', correctAnswers: ['63cm', '63 cm', '63'], answer: '63 cm', explanation: 'Perimeter scales linearly with the side ratio. Larger perimeter = 28 × (9/4) = 63 cm.' },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC, dividing AB in the ratio AD:DB = 1:2. Given AC = 21 cm, find AE and EC.', answer: 'By the Proportionality Theorem, AD/DB = AE/EC, so AE:EC = 1:2 as well. This means AE is 1/3 of AC and EC is 2/3 of AC. AE = 21 × 1/3 = 7 cm. EC = 21 × 2/3 = 14 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="111.7" y1="88.7" x2="188.3" y2="88.7" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,92.9 L 142.0,88.7 L 135.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,92.9 L 158.0,88.7 L 151.0,84.5" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="95.7" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="204.3" y="91.7" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="108.8" y="58.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="51.3" y="149.3" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">2</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Bongiwe has proven two triangles similar using the SSS proportionality condition, then used the Proportionality Theorem to find an unknown side inside one of the triangles. Explain how these two results work together as separate but connected tools.', answer: 'The SSS proportionality condition and the Proportionality Theorem address different situations: SSS proportionality proves whole triangles are similar by comparing all three pairs of corresponding sides, while the Proportionality Theorem applies inside a single triangle when a line is drawn parallel to one side, showing that line divides the other two sides proportionally. Bongiwe first used SSS proportionality to establish that two separate triangles share the same shape, then separately applied the Proportionality Theorem to a parallel line within one triangle to solve for an unknown segment length — both tools rely on the same underlying idea of proportional sides but are applied in different geometric contexts.', checkMode: 'self' },

        // Block 7 — Rider proofs (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'In right-angled triangle ABC (right angle at C), the altitude CD is drawn from C to hypotenuse AB, with D between A and B. AD = 4 cm and DB = 9 cm. Prove that CD = 6 cm.', answer: `Since △ACD ∼ △CBD (both similar to △ABC by AA, hence similar to each other), ${bl('AD/CD = CD/DB')}, so ${bl('CD² = AD × DB = 4 × 9 = 36')}, giving CD = 6 cm.` + proofTable([
          ['∠ADC = ∠CDB = 90°', 'CD ⊥ AB (altitude to the hypotenuse)'],
          ['∠DAC = ∠DCB', 'Both equal 90° − ∠B in their respective right triangles'],
          ['∴ △ACD ∼ △CBD', 'AA similarity condition (two pairs of angles equal)'],
          ['AD/CD = CD/DB', 'Corresponding sides of similar triangles are in proportion'],
          ['CD² = AD × DB = 4 × 9 = 36', 'Cross-multiplying the proportion'],
          ['∴ CD = √36 = 6 cm', 'Taking the square root'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103.85" y1="89.8" x2="103.85" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="96.85" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="103.85" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="66.9" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="186.9" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'In triangle ABC, D, E and F are the midpoints of AB, AC and BC respectively. Prove that △DEF ∼ △CBA.', answer: `Applying the Midpoint Theorem three times gives ${or('DE ∥ BC, DE = ½BC')}, ${or('DF ∥ AC, DF = ½AC')} and ${or('FE ∥ AB, FE = ½AB')}. So ${bl('DE/BC = DF/AC = FE/AB = 1/2')}, and by SSS proportionality, △DEF ∼ △CBA.` + proofTable([
          ['DE ∥ BC and DE = ½BC', 'Midpoint Theorem in △ABC (D, E midpoints of AB, AC)'],
          ['DF ∥ AC and DF = ½AC', 'Midpoint Theorem in △ABC (D, F midpoints of AB, BC)'],
          ['FE ∥ AB and FE = ½AB', 'Midpoint Theorem in △ABC (F, E midpoints of BC, AC)'],
          ['DE/BC = DF/AC = FE/AB = 1/2', 'Each side of △DEF is half the corresponding side of △ABC'],
          ['∴ △DEF ∼ △CBA', 'SSS proportionality condition (all three pairs of corresponding sides in the same ratio)'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="90,120 210,120 150,215" fill="none" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><circle cx="150" cy="215" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="150" y="235" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">F</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similar polygons, the Proportionality Theorem, and the similar-triangles proof of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the Proportionality Theorem or the Midpoint Theorem, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on similarity conditions and the altitude-based Pythagoras proof, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — AA / SSS similar-polygon conditions (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 38°, 74°, 68°. Triangle DEF has angles 74°, 68°, 38° but different side lengths. Are the two triangles similar?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'yes, similar', 'similar'], answer: 'yes', explanation: 'Both triangles have the same three angles (38°, 68°, 74°) — the order in which they are listed does not matter. Since all three pairs of angles match, the triangles are similar by the AA condition.' },
        { difficulty: 'Easy', question: 'Triangle ABC has sides 3 cm, 5 cm, 6 cm. Triangle DEF has sides 12 cm, 20 cm, 24 cm. Verify similarity using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 12/3 = 4, EF/BC = 20/5 = 4, FD/CA = 24/6 = 4. All three ratios equal 4, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 9 cm, 12 cm, 15 cm. Triangle DEF has sides 6 cm, 8 cm, 10 cm. Verify whether the triangles are similar using side ratios.', answer: 'DE/AB = 6/9 = 2/3, EF/BC = 8/12 = 2/3, FD/CA = 10/15 = 2/3. All three ratios equal 2/3, so the triangles are similar by SSS proportionality.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sibusiso says that if two triangles both have a 100° angle, they must be similar. Is he correct? Explain using a counter-example.', answer: 'No — a triangle with angles 100°, 50°, 30° and a triangle with angles 100°, 40°, 40° both contain a 100° angle, but their other two angles are completely different, so the triangles are not similar. A single matching angle is not enough; the AA condition requires two pairs of matching angles.', checkMode: 'self' },

        // Block 2 — Proportionality Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In triangle ABC, MN is parallel to BC, with M on AB and N on AC. AM = 6 cm, MB = 10 cm and AN = 9 cm. Find NC.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Since MN ∥ BC, by the Proportionality Theorem: AM/MB = AN/NC. So 6/10 = 9/NC. Cross-multiply: 6 × NC = 90. NC = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="106.9" y1="96.3" x2="193.1" y2="96.3" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,100.5 L 142.0,96.3 L 135.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,100.5 L 158.0,96.3 L 151.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="90.9" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="209.1" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="104.4" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="46.9" y="153.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="195.6" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="247.1" y="153.1" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In triangle PQR, ST is parallel to QR, with S on PQ and T on PR. PS = 8 cm, SQ = 12 cm and PT = 10 cm. Find TR.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Since ST ∥ QR, by the Proportionality Theorem: PS/SQ = PT/TR. So 8/12 = 10/TR. Cross-multiply: 8 × TR = 120. TR = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="104.0" y1="100.8" x2="196.0" y2="100.8" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,105.0 L 142.0,100.8 L 135.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,105.0 L 158.0,100.8 L 151.0,96.6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">P</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Q</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">R</text><text x="88" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">S</text><text x="212" y="103.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">T</text><text x="103" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="45.5" y="155.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="197" y="64.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="248.5" y="155.4" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC. AD = 9 cm, DB = 15 cm and AE = 12 cm. Find EC, then use it to find the ratio AE:AC.', answer: 'By the Proportionality Theorem: AD/DB = AE/EC. So 9/15 = 12/EC. Cross-multiply: 9 × EC = 180, so EC = 20 cm. AC = AE + EC = 12 + 20 = 32 cm. Ratio AE:AC = 12:32 = 3:8.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="106.9" y1="96.3" x2="193.1" y2="96.3" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,100.5 L 142.0,96.3 L 135.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,100.5 L 158.0,96.3 L 151.0,92.0" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="90.9" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="209.1" y="99.3" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="104.4" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="46.9" y="153.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="195.6" y="62.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="247.1" y="153.1" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 3 — Midpoint Theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'M and N are the midpoints of AB and AC in triangle ABC, with BC = 30 cm. Find MN using the Midpoint Theorem.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'By the Midpoint Theorem, MN ∥ BC and MN = ½BC = ½ × 30 = 15 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="235" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">BC = 30 cm</text><text x="150" y="112" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'M is the midpoint of AB in triangle ABC, with AM = 11 cm. Find the full length of AB.', checkMode: 'auto', correctAnswer: '22cm', correctAnswers: ['22cm', '22 cm', '22'], answer: '22 cm', explanation: 'Since M is the midpoint of AB, AM = MB, so AB = 2 × AM = 2 × 11 = 22 cm.', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="96" y="72.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="42" y="167.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'M and N are the midpoints of AB and AC in triangle ABC, and MN = 14 cm. Find BC, then find the perimeter of triangle AMN given that AM = 10 cm and AN = 13 cm.', answer: 'By the Midpoint Theorem, MN = ½BC, so BC = 2 × MN = 2 × 14 = 28 cm. The perimeter of triangle AMN = AM + MN + AN = 10 + 14 + 13 = 37 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><circle cx="90" cy="120" r="3" fill="#0f1f3d"/><circle cx="210" cy="120" r="3" fill="#0f1f3d"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="74" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">M</text><text x="226" y="122" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">N</text><text x="150" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="150" y="235" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },

        // Block 4 — Equiangular / SSS-proportion similarity (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC has angles 36°, 82°, 62°. Triangle XYZ has angles 82°, 62°, 36° but different side lengths. Explain why the triangles are equiangular and therefore similar.', answer: 'Both triangles contain the same three angles (36°, 62°, 82°), just listed in a different order. Since all corresponding angles match, the triangles are equiangular, and by the AA condition equiangular triangles are always similar — different side lengths do not affect this.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Triangle ABC has sides 8 cm, 15 cm, 17 cm. Triangle DEF has sides 24 cm, 45 cm, 51 cm. Verify these triangles are similar using side ratios.', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar', 'yes, similar', 'yes'], answer: 'similar', explanation: 'DE/AB = 24/8 = 3, EF/BC = 45/15 = 3, FD/CA = 51/17 = 3. All three ratios equal 3, so the triangles are similar by SSS proportionality.' },
        { difficulty: 'Hard', question: 'In triangle XYZ, GH is drawn parallel to YZ, with G on XY and H on XZ. Explain how this construction proves that △XGH is equiangular with △XYZ, and state which theorem confirms their sides are also in proportion.', answer: 'Since GH ∥ YZ, corresponding angles are equal: ∠XGH = ∠XYZ and ∠XHG = ∠XZY (they form F-angle pairs with the parallel lines), and both triangles share ∠X. So △XGH has the same three angles as △XYZ, making it equiangular with △XYZ. The Proportionality Theorem then confirms that because GH ∥ YZ, the sides XG/XY and XH/XZ (and GH/YZ) are automatically in the same ratio — proving the AA condition is sufficient for similarity.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,25 30,215 270,215" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="84.0" y1="129.5" x2="216.0" y2="129.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,219.2 L 142.0,215.0 L 135.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,219.2 L 158.0,215.0 L 151.0,210.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,133.7 L 142.0,129.5 L 135.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,133.7 L 158.0,129.5 L 151.0,125.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 46,215 A 16 16 0 0 1 38.54,201.47" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 97,129.5 A 13 13 0 0 1 90.94,118.51" fill="none" stroke="#16a34a" stroke-width="1.8"/><path d="M 254,215 A 16 16 0 0 0 261.46,201.47" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 250,215 A 20 20 0 0 0 259.32,198.09" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 203,129.5 A 13 13 0 0 0 209.06,118.51" fill="none" stroke="#7c3aed" stroke-width="1.8"/><path d="M 199,129.5 A 17 17 0 0 0 206.92,115.13" fill="none" stroke="#7c3aed" stroke-width="1.8"/><text x="150" y="15" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">X</text><text x="16" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Y</text><text x="284" y="231" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">Z</text><text x="68" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">G</text><text x="232" y="132.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">H</text></svg>'  },

        // Block 5 — Pythagoras via similar triangles (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'A right-angled triangle has legs of 7 cm and 24 cm. Use the Theorem of Pythagoras to find the length of the hypotenuse.', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25 cm', '25'], answer: '25 cm', explanation: 'By the Theorem of Pythagoras: c² = 7² + 24² = 49 + 576 = 625. c = √625 = 25 cm.', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><polygon points="30,210 30,40 250,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="196" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="16" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="16" y="44" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="264" y="214" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="12" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="140" y="228" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text><text x="154" y="117" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 75 cm), the altitude CD is drawn from C to AB, splitting AB into AD = 48 cm and DB = 27 cm. Using the similar triangles △ACD ∼ △ABC, show that AC² = AB × AD, and hence find AC.', answer: 'Since △ACD ∼ △ABC (AA, sharing ∠A and each having a right angle), corresponding sides are in proportion: AC/AB = AD/AC, so AC² = AB × AD = 75 × 48 = 3 600. AC = √3 600 = 60 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="86.8" y="147.4" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Hard', question: 'In right-angled triangle ABC (right angle at C, hypotenuse AB = 75 cm), the altitude CD splits AB into AD = 48 cm and DB = 27 cm. Given AC = 60 cm and BC = 45 cm, verify the Theorem of Pythagoras (AC² + BC² = AB²) using these values, confirming the similar-triangles proof.', answer: 'AC² + BC² = 60² + 45² = 3 600 + 2 025 = 5 625. AB² = 75² = 5 625. Since 5 625 = 5 625, the Theorem of Pythagoras is verified. This matches the similar-triangles proof: AC² = AB × AD = 75 × 48 = 3 600 and BC² = AB × DB = 75 × 27 = 2 025, and adding gives AC² + BC² = AB × (AD + DB) = AB × AB = AB².', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,205 270,205 183.6,89.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.6" y1="89.8" x2="183.6" y2="205" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="5,4"/><rect x="176.6" y="198" width="7" height="7" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="18" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="282" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="183.6" y="79.8" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="183.6" y="221" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="106.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48 cm</text><text x="226.8" y="223" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27 cm</text><text x="86.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60 cm</text><text x="246.8" y="147.4" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45 cm</text></svg>'  },

        // Block 6 — Mixed application / capstone (Easy/Medium/Hard/Hard)
        { difficulty: 'Easy', question: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 4 cm, DE = 10 cm (scale factor 2.5), and BC = 6 cm. Find EF.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'The scale factor from △ABC to △DEF is DE ÷ AB = 10 ÷ 4 = 2.5. EF = BC × 2.5 = 6 × 2.5 = 15 cm.', diagramSvg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><polygon points="65,45 25,165 110,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="35" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="13" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="122" y="179" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><line x1="48.8" y1="106.3" x2="41.2" y2="103.7" stroke="#16a34a" stroke-width="2"/><line x1="65.0" y1="161.0" x2="65.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><line x1="70.0" y1="161.0" x2="70.0" y2="169.0" stroke="#7c3aed" stroke-width="2"/><text x="25.0" y="105.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="67.5" y="183.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><polygon points="235,20 183.0,176.0 293.5,176.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="171.0" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="305.5" y="190.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><line x1="212.8" y1="99.3" x2="205.2" y2="96.7" stroke="#16a34a" stroke-width="2"/><line x1="235.8" y1="172.0" x2="235.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><line x1="240.8" y1="172.0" x2="240.8" y2="180.0" stroke="#7c3aed" stroke-width="2"/><text x="187.0" y="98.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="238.3" y="194.0" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>'  },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 3:7. If the smaller triangle has a perimeter of 18 cm, find the perimeter of the larger triangle.', checkMode: 'auto', correctAnswer: '42cm', correctAnswers: ['42cm', '42 cm', '42'], answer: '42 cm', explanation: 'Perimeter scales linearly with the side ratio. Larger perimeter = 18 × (7/3) = 42 cm.' },
        { difficulty: 'Hard', question: 'In triangle ABC, DE is parallel to BC, with D on AB and E on AC, dividing AB in the ratio AD:DB = 1:3. Given AC = 24 cm, find AE and EC.', answer: 'By the Proportionality Theorem, AD/DB = AE/EC, so AE:EC = 1:3 as well. This means AE is 1/4 of AC and EC is 3/4 of AC. AE = 24 × 1/4 = 6 cm. EC = 24 × 3/4 = 18 cm.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><polygon points="150,28 35,210 265,210" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121.3" y1="73.5" x2="178.8" y2="73.5" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 135.0,214.2 L 142.0,210.0 L 135.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,214.2 L 158.0,210.0 L 151.0,205.8" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 135.0,77.7 L 142.0,73.5 L 135.0,69.3" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 151.0,77.7 L 158.0,73.5 L 151.0,69.3" fill="none" stroke="#ea580c" stroke-width="2"/><text x="150" y="18" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="21" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="279" y="226" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="105.3" y="76.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="194.8" y="76.5" font-size="13" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="113.6" y="50.8" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="56.1" y="141.8" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">3</text><text x="233.5" y="119" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text></svg>'  },
        { difficulty: 'Hard', question: 'Naledi has proven two triangles similar using the AA condition, then used the Midpoint Theorem to find an unknown length inside one of the triangles. Explain how these two results work together as separate but connected tools.', answer: 'The AA condition and the Midpoint Theorem address different situations: the AA condition proves whole triangles are similar by comparing their angles, while the Midpoint Theorem applies inside a single triangle when a line joins the midpoints of two sides, showing that line is parallel to the third side and equal to half its length. Naledi first used the AA condition to establish that two separate triangles share the same shape, then separately applied the Midpoint Theorem within one triangle to solve for an unknown segment length — the Midpoint Theorem is actually a special case (ratio 1:1) of the same Proportionality Theorem that underlies the AA similarity proof.', checkMode: 'self' },

        // Block 7 — Rider proof (CAPS problem-solving cognitive level)
        { difficulty: 'Hard', question: 'Triangle ABC has sides AB = 8 cm, BC = 14 cm and CA = 10 cm (giving ∠B ≈ 44.4° by the cosine rule). Triangle DEF has sides DE = 20 cm, EF = 35 cm and FD = 25 cm. Prove that △ABC ∼ △DEF, and hence find ∠E.', answer: `${bl('DE/AB = 20/8 = 2.5')}, ${bl('EF/BC = 35/14 = 2.5')}, ${bl('FD/CA = 25/10 = 2.5')} — all three ratios are equal, so △ABC ∼ △DEF by SSS proportionality, and since corresponding angles of similar triangles are equal, ∠E = ∠B ≈ 44.4°.` + proofTable([
          ['DE/AB = 20/8 = 2.5', 'Given side lengths'],
          ['EF/BC = 35/14 = 2.5', 'Given side lengths'],
          ['FD/CA = 25/10 = 2.5', 'Given side lengths'],
          ['DE/AB = EF/BC = FD/CA', 'All three ratios equal 2.5 (shown above)'],
          ['∴ △ABC ∼ △DEF', 'SSS proportionality condition (all three pairs of corresponding sides in the same ratio)'],
          ['∴ ∠E = ∠B ≈ 44.4°', 'Corresponding angles of similar triangles are equal'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg"><polygon points="58.6,172.0 30.0,200.0 100.0,200.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="58.6" y="160.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="18.0" y="214.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="112.0" y="214.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="31.7" y="173.1" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="65.0" y="218.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="91.9" y="173.1" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="23.0" y="185.0" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">44.4°</text><polygon points="221.4,130.0 150.0,200.0 325.0,200.0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="221.4" y="118.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="138.0" y="214.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">E</text><text x="337.0" y="214.0" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">F</text><text x="170.3" y="149.3" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="237.5" y="218.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">35 cm</text><text x="288.6" y="149.3" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">25 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered similar polygons, the Proportionality Theorem, and the similar-triangles proof of Pythagoras.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the Proportionality Theorem or the Midpoint Theorem, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on similarity conditions and the altitude-based Pythagoras proof, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
