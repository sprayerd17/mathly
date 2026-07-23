import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ────────────────────────────────────────
// given angle / radius     → blue   (#2563eb)
// calculated angle / circ. → green  (#16a34a)
// ratio parts / chord      → orange (#ea580c)
// unknown angle / diameter → red    (#dc2626)
// shape property           → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D Shapes',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TRIANGLES: TYPES AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles-types-properties',
      title: 'Triangles — Types and Properties',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 7 we revise and deepen our understanding of triangle types by side and angle, and apply angle sum properties to find missing angles in more complex problems involving multiple triangles or combined shapes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated angle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ratio parts')}</span>` +
        `</div>` +

        // ── Key property ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key property: angle sum</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#1e3a8a;">The three interior angles of any triangle always add up to <strong>180°</strong>. You can use this to find a missing angle: <strong>missing angle = 180° − (sum of the other two angles)</strong>.</p>` +
        `</div>` +

        // ── Triangle types ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Triangle types by sides</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equilateral</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All three sides equal. All three angles equal 60°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Isosceles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two sides equal. The base angles (opposite the equal sides) are equal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Scalene</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All three sides different. All three angles different.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Triangle types by angles</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Acute-angled</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All three angles are less than 90°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Right-angled</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly one angle equals 90°. The side opposite the right angle is the longest side (hypotenuse).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Obtuse-angled</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly one angle is greater than 90°.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Using ratios to find angles</p>` +
        `<p style="margin:0;color:#14532d;">When angles are given in a ratio, find the value of one part by dividing 180° by the total number of parts, then multiply each ratio number by that value.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A triangle has angles in the ratio 2:3:4. Find each angle.',
          answer: `Angles are ${gr('40°')}, ${gr('60°')}, and ${gr('80°')}`,
          steps: [
            `Find the total number of ${or('parts')}: ${or('2')} + ${or('3')} + ${or('4')} = ${or('9')} parts in total.`,
            `Find the value of one part: one part = 180° ÷ ${or('9')} = ${gr('20°')}.`,
            `Calculate each angle by multiplying: ${or('2')} × ${gr('20°')} = ${gr('40°')} &nbsp;|&nbsp; ${or('3')} × ${gr('20°')} = ${gr('60°')} &nbsp;|&nbsp; ${or('4')} × ${gr('20°')} = ${gr('80°')}.`,
            `<strong>Check:</strong> ${gr('40°')} + ${gr('60°')} + ${gr('80°')} = 180° ✓`,
          ],
        },
        {
          question: 'Two triangles share a side. One triangle has angles of 50° and 70°. Find the third angle of the first triangle, then find the corresponding angle in the second triangle if it equals the third angle of the first.',
          answer: `Third angle of first triangle = ${gr('60°')}; corresponding angle in second triangle = ${gr('60°')}`,
          steps: [
            `Find the third angle of the first triangle using the angle sum rule: third angle = 180° − ${bl('50°')} − ${bl('70°')} = ${gr('60°')}.`,
            `The two triangles share a side. The problem states that the corresponding angle in the second triangle equals the third angle of the first triangle.`,
            `Therefore the corresponding angle in the second triangle is also ${gr('60°')}.`,
            `<strong>Note:</strong> The shared side means the ${gr('60°')} angle is at the point where the two triangles meet — it is the same physical angle for both triangles.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A triangle has angles of 55° and 75°. Find the third angle.',
          answer: '50°',
          checkMode: 'auto',
          correctAnswer: '50',
          explanation: 'Third angle = 180° − 55° − 75° = 50°. Check: 55 + 75 + 50 = 180 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A triangle has angles in the ratio 1:2:3. Find each angle and name the triangle by its angles.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Smallest angle',
              correctAnswer: '30',
              explanation: 'Total parts = 1+2+3 = 6. One part = 180÷6 = 30°. Smallest angle = 1×30 = 30°.',
            },
            {
              label: 'b) Middle angle',
              correctAnswer: '60',
              explanation: 'Middle angle = 2×30 = 60°.',
            },
            {
              label: 'c) Largest angle',
              correctAnswer: '90',
              explanation: 'Largest angle = 3×30 = 90°. The triangle is a right-angled triangle because one angle is exactly 90°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'An isosceles triangle has a vertex angle (the angle between the two equal sides) of 40°.\n\na) Find the two base angles.\nb) Is this triangle acute, right, or obtuse? Explain.',
          answer: 'a) Each base angle = 70°\nb) Acute — all three angles (40°, 70°, 70°) are less than 90°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing triangle types by side and angle and how to use the angle sum rule to find missing angles including ratio problems',

      diagramPlaceholder:
        'All six triangle types side by side: equilateral, isosceles and scalene classified by side length, and acute-angled, right-angled and obtuse-angled classified by angle size.',

      diagramSvg:
        '<svg viewBox="0 0 340 225" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="170" y="16" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Classified by side length</text>' +
        '<g transform="translate(60,68)">' +
        '<polygon points="-30,27 30,27 0,-25" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="23" x2="0" y2="31" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-18.5" y1="-1" x2="-11.5" y2="3" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="11.5" y1="3" x2="18.5" y2="-1" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Equilateral</text>' +
        '</g>' +
        '<g transform="translate(170,68)">' +
        '<polygon points="-20,27 20,27 0,-33" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-13.8" y1="-4.26" x2="-6.2" y2="-1.74" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="6.2" y1="-1.74" x2="13.8" y2="-4.26" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Isosceles</text>' +
        '</g>' +
        '<g transform="translate(280,68)">' +
        '<polygon points="-28,25 22,29 -6,-30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<text x="-3" y="42" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Scalene</text>' +
        '</g>' +
        '<text x="170" y="120" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Classified by angle size</text>' +
        '<g transform="translate(60,168)">' +
        '<polygon points="-28,26 26,28 -4,-30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<text x="-2" y="42" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Acute-angled</text>' +
        '</g>' +
        '<g transform="translate(170,168)">' +
        '<polygon points="-28,28 28,28 -28,-28" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<polyline points="-28,18 -18,18 -18,28" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Right-angled</text>' +
        '</g>' +
        '<g transform="translate(280,168)">' +
        '<polygon points="0,-15 -38,8 38,6" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<path d="M -12.82,-7.24 A 15,15 0 0 1 13.13,-7.75" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Obtuse-angled</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — QUADRILATERALS: TYPES AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadrilaterals-types-properties',
      title: 'Quadrilaterals — Types and Properties',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">We deepen our knowledge of quadrilateral properties, including diagonals. A diagonal divides a quadrilateral into two triangles. We use the angle sum of quadrilaterals (360°) to solve more complex problems involving unknown angles and shape classification based on given properties.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known angles')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('shape properties')}</span>` +
        `</div>` +

        // ── Angle sum ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key property: angle sum</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#1e3a8a;">The four interior angles of any quadrilateral always add up to <strong>360°</strong>. This is because a diagonal splits the quadrilateral into two triangles, each contributing 180°: 2 × 180° = 360°.</p>` +
        `</div>` +

        // ── Quadrilateral types ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Quadrilateral types and their properties</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('All 4 sides equal')}. ${gr('All 4 angles = 90°')}. ${gr('Diagonals bisect each other at right angles')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Opposite sides equal and parallel')}. ${gr('All 4 angles = 90°')}. ${gr('Diagonals are equal in length')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Opposite sides equal and parallel')}. ${gr('Opposite angles equal')}. ${gr('Adjacent angles supplementary (add to 180°)')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Rhombus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('All 4 sides equal')}. ${gr('Opposite angles equal')}. ${gr('Diagonals bisect each other at right angles')}.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Trapezium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Exactly one pair of parallel sides')}. Co-interior angles between the parallel sides add to 180°.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Kite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Two pairs of adjacent equal sides')}. One pair of opposite angles equal. Diagonals intersect at right angles.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Classifying quadrilaterals</p>` +
        `<p style="margin:0;color:#92400e;">To classify a quadrilateral, check its angle sizes, side lengths, and whether sides are parallel. Use the known angle sum (360°) to find any unknown angle before classifying.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A quadrilateral has three angles of 95°, 80° and 110°. Find the fourth angle and classify the possible shape.',
          answer: `Fourth angle = ${re('75°')}. With four different angles, this is likely a general quadrilateral or trapezium.`,
          steps: [
            `Use the angle sum rule: the four angles of any quadrilateral add up to 360°.`,
            `Sum of the three ${bl('known angles')}: ${bl('95°')} + ${bl('80°')} + ${bl('110°')} = ${bl('285°')}.`,
            `Find the ${re('unknown angle')}: ${re('fourth angle')} = 360° − ${bl('285°')} = ${re('75°')}.`,
            `<strong>Classification:</strong> All four angles (95°, 80°, 110°, 75°) are different and none is 90°. The shape does not have the ${gr('special properties')} of a rectangle, square, rhombus, or parallelogram. It is most likely a ${gr('general quadrilateral')} or a ${gr('trapezium')} (if one pair of sides is parallel).`,
          ],
        },
        {
          question: 'A parallelogram has one angle of 65°. Find the other three angles.',
          answer: `Angles are ${bl('65°')}, ${gr('115°')}, ${bl('65°')}, ${gr('115°')}`,
          steps: [
            `Use the ${gr('property of a parallelogram')}: opposite angles are equal.`,
            `The angle opposite the ${bl('65°')} angle is also ${bl('65°')}.`,
            `Use the ${gr('property')}: adjacent angles in a parallelogram are supplementary (add to 180°).`,
            `Adjacent angle = 180° − ${bl('65°')} = ${gr('115°')}.`,
            `The remaining angle (opposite the 115° angle) is also ${gr('115°')}.`,
            `<strong>Answer:</strong> The four angles are ${bl('65°')}, ${gr('115°')}, ${bl('65°')}, ${gr('115°')}. Check: ${bl('65')} + ${gr('115')} + ${bl('65')} + ${gr('115')} = 360° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A quadrilateral has angles of 110°, 85° and 90°. Find the fourth angle.',
          answer: '75°',
          checkMode: 'auto',
          correctAnswer: '75',
          explanation: 'Fourth angle = 360° − 110° − 85° − 90° = 75°. Check: 110+85+90+75 = 360 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A rhombus has one angle of 50°. Find all four angles.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) The angle opposite the 50° angle',
              correctAnswer: '50',
              explanation: 'In a rhombus, opposite angles are equal. So the opposite angle is also 50°.',
            },
            {
              label: 'b) Each of the remaining two angles',
              correctAnswer: '130',
              explanation: 'Adjacent angles are supplementary: 180° − 50° = 130°. Both remaining angles are 130°.\nCheck: 50+130+50+130 = 360 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A trapezium has angles at the base of 72° and 108°. The two non-parallel sides form angles at the top.\n\na) What do the base angles add to? What does this confirm about the base?\nb) Find the two top angles if one top angle is 15° more than the other.',
          answer: 'a) 72°+108°=180° — confirms the base sides are parallel (co-interior angles)\nb) Let angles be x and x+15°: 2x+15=180, x=82.5°, top angles are 82.5° and 97.5°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing quadrilateral types and their properties and how to use the 360° angle sum to find missing angles and classify shapes',

      diagramPlaceholder:
        'All six quadrilateral types with their key shape: square, rectangle, parallelogram, rhombus, trapezium and kite, each with equal-side or right-angle markers shown where they apply.',

      diagramSvg:
        '<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(60,58)">' +
        '<polygon points="-25,-25 25,-25 25,25 -25,25" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="-29" x2="0" y2="-21" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="21" y1="0" x2="29" y2="0" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="0" y1="21" x2="0" y2="29" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-29" y1="0" x2="-21" y2="0" stroke="#2563eb" stroke-width="2"/>' +
        '<polyline points="-18,-25 -18,-18 -25,-18" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Square</text>' +
        '</g>' +
        '<g transform="translate(170,58)">' +
        '<polygon points="-32,-18 32,-18 32,18 -32,18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="-21" x2="0" y2="-15" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="0" y1="15" x2="0" y2="21" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="-35" y1="-3" x2="-29" y2="-3" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="-35" y1="3" x2="-29" y2="3" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="29" y1="-3" x2="35" y2="-3" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="29" y1="3" x2="35" y2="3" stroke="#16a34a" stroke-width="2"/>' +
        '<polyline points="25,-18 25,-11 32,-11" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Rectangle</text>' +
        '</g>' +
        '<g transform="translate(280,58)">' +
        '<polygon points="-30,18 10,18 30,-18 -10,-18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-10" y1="15" x2="-10" y2="21" stroke="#ea580c" stroke-width="2"/>' +
        '<line x1="10" y1="-21" x2="10" y2="-15" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Parallelogram</text>' +
        '</g>' +
        '<g transform="translate(60,162)">' +
        '<polygon points="0,-30 24,0 0,30 -24,0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="-30" x2="0" y2="30" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="3,3"/>' +
        '<line x1="-24" y1="0" x2="24" y2="0" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="3,3"/>' +
        '<polyline points="-4,0 -4,-4 0,-4" fill="none" stroke="#dc2626" stroke-width="1.5"/>' +
        '<line x1="9.7" y1="-13.1" x2="14.3" y2="-16.9" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="9.7" y1="13.1" x2="14.3" y2="16.9" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="-9.7" y1="13.1" x2="-14.3" y2="16.9" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="-9.7" y1="-13.1" x2="-14.3" y2="-16.9" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Rhombus</text>' +
        '</g>' +
        '<g transform="translate(170,162)">' +
        '<polygon points="-28,20 28,20 16,-20 -16,-20" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<polyline points="-4,-24 1,-20 -4,-16" fill="none" stroke="#7c3aed" stroke-width="2"/>' +
        '<polyline points="-4,16 1,20 -4,24" fill="none" stroke="#7c3aed" stroke-width="2"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#7c3aed" text-anchor="middle">Trapezium</text>' +
        '</g>' +
        '<g transform="translate(280,162)">' +
        '<polygon points="0,-30 18,0 0,20 -18,0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="-30" x2="0" y2="20" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="3,3"/>' +
        '<text x="0" y="42" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">Kite</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CIRCLES: PARTS AND PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circles-parts-properties',
      title: 'Circles — Parts and Properties',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">A circle has key parts — the centre, ${bl('radius')} (centre to edge), ${re('diameter')} (across through the centre, double the radius), ${gr('circumference')} (distance around) and an ${or('chord')} (a line joining two points on the circle, not necessarily through the centre). An arc is a part of the circumference.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('diameter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('circumference')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('chord')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Centre</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed middle point of the circle. Every point on the circle is the same distance from the centre.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A straight line from the centre to any point on the circle. All radii of the same circle are equal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Diameter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A straight line through the centre connecting two points on the circle. The diameter = 2 × radius. It is the longest chord.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Circumference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The perimeter (distance around) the circle. It is calculated using π: C = π × diameter.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Chord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A straight line joining any two points on the circle. A chord that passes through the centre is the diameter.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Arc</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A part of the circumference — a curved section of the circle between two points on the edge.</p>` +
        `</div>` +

        `</div>` +

        // ── Key relationship ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Relationship</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('diameter')} = 2 × ${bl('radius')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟷</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Equivalently</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('radius')} = ${re('diameter')} ÷ 2</p>` +
        `</div>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A circle has a diameter of 18 cm. Find the radius.',
          answer: `${bl('Radius')} = ${bl('9 cm')}`,
          steps: [
            `Use the relationship: ${bl('radius')} = ${re('diameter')} ÷ 2.`,
            `Substitute the known ${re('diameter')}: ${bl('radius')} = ${re('18 cm')} ÷ 2 = ${bl('9 cm')}.`,
            `<strong>Answer:</strong> The ${bl('radius')} is ${bl('9 cm')}.`,
          ],
        },
        {
          question: 'Sipho draws a chord that passes through the centre of a circle. What is this chord called?',
          answer: `This chord is called the ${re('diameter')}`,
          steps: [
            `A ${or('chord')} is any straight line joining two points on the circle.`,
            `When a ${or('chord')} passes through the centre of the circle, it connects two points on the circle with the centre lying exactly on the line.`,
            `A ${or('chord')} through the centre is the longest possible ${or('chord')} — it spans the full width of the circle.`,
            `<strong>Answer:</strong> This chord is called the ${re('diameter')}. The ${re('diameter')} is the special ${or('chord')} that passes through the centre.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A circle has a radius of 11 cm. What is the diameter?',
          answer: '22 cm',
          checkMode: 'auto',
          correctAnswer: '22',
          explanation: 'Diameter = 2 × radius = 2 × 11 = 22 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Study the parts of a circle and answer the questions.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A circle has a diameter of 30 cm. Find the radius.',
              correctAnswer: '15',
              explanation: 'Radius = diameter ÷ 2 = 30 ÷ 2 = 15 cm ✓',
            },
            {
              label: 'b) A chord that does NOT pass through the centre — is it longer or shorter than the diameter?',
              correctAnswer: 'shorter',
              explanation: 'Any chord that does not pass through the centre is shorter than the diameter. The diameter is the longest possible chord.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A circle has a radius of 7 cm.\n\na) Write down the diameter.\nb) The circumference is calculated using C = π × diameter. Using π ≈ 3.14, calculate the circumference.\nc) An arc is half the circumference. What is the length of this arc?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Diameter',
              correctAnswer: '14',
              explanation: 'Diameter = 2 × 7 = 14 cm ✓',
            },
            {
              label: 'b) Circumference (use π ≈ 3.14)',
              correctAnswer: '43.96',
              explanation: 'C = π × diameter = 3.14 × 14 = 43.96 cm ✓',
            },
            {
              label: 'c) Length of half the circumference (arc)',
              correctAnswer: '21.98',
              explanation: 'Half circumference = 43.96 ÷ 2 = 21.98 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Short video explaining the parts of a circle — centre radius diameter circumference chord and arc — with labelled diagrams and worked examples',

      diagramPlaceholder:
        'A circle with the centre, radius, diameter, circumference, a chord and an arc all labelled, colour-coded to match the colour key.',

      diagramSvg:
        '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="130" cy="130" r="90" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<path d="M 198.9,187.9 A 90,90 0 0 1 145.6,218.6" fill="none" stroke="#0f1f3d" stroke-width="4"/>' +
        '<line x1="40" y1="130" x2="220" y2="130" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="130" y1="130" x2="193.6" y2="66.4" stroke="#2563eb" stroke-width="2.5"/>' +
        '<line x1="52.1" y1="175" x2="114.4" y2="218.6" stroke="#ea580c" stroke-width="2.5"/>' +
        '<circle cx="130" cy="130" r="3.5" fill="#374151"/>' +
        '<circle cx="193.6" cy="66.4" r="3" fill="#2563eb"/>' +
        '<circle cx="40" cy="130" r="3" fill="#dc2626"/>' +
        '<circle cx="220" cy="130" r="3" fill="#dc2626"/>' +
        '<circle cx="52.1" cy="175" r="3" fill="#ea580c"/>' +
        '<circle cx="114.4" cy="218.6" r="3" fill="#ea580c"/>' +
        '<text x="112" y="148" font-size="11" font-weight="700" fill="#374151" text-anchor="end">Centre</text>' +
        '<text x="168" y="94" font-size="11" font-weight="700" fill="#2563eb">Radius</text>' +
        '<text x="60" y="122" font-size="11" font-weight="700" fill="#dc2626">Diameter</text>' +
        '<text x="130" y="30" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Circumference</text>' +
        '<text x="65" y="203" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Chord</text>' +
        '<text x="185" y="212" font-size="11" font-weight="700" fill="#0f1f3d">Arc</text>' +
        '</svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — missing triangle angle ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A triangle has angles of 55° and 65°. Find the third angle.',
      answer: '60°',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: 'Third angle = 180° − 55° − 65° = 60°. Check: 55 + 65 + 60 = 180 ✓',
    },

    // ── Q2 Medium — triangle ratio 1:2:3 ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A triangle has angles in the ratio 1:2:3. Find each angle.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Smallest angle',
          correctAnswer: '30',
          explanation: 'Total parts = 1+2+3 = 6. One part = 180÷6 = 30°. Smallest angle = 1×30 = 30°.',
        },
        {
          label: 'b) Middle angle',
          correctAnswer: '60',
          explanation: 'Middle angle = 2×30 = 60°.',
        },
        {
          label: 'c) Largest angle',
          correctAnswer: '90',
          explanation: 'Largest angle = 3×30 = 90°. Check: 30+60+90 = 180 ✓',
        },
      ],
    },

    // ── Q3 Hard — equilateral triangle reasoning ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a triangle can have angles in the ratio 1:1:1 and still have different side lengths. Is he correct? Explain.',
      answer: 'No — a 1:1:1 angle ratio means all angles are 60°, making it equilateral, which means all sides must also be equal.',
      checkMode: 'self',
    },

    // ── Q4 Easy — quadrilateral angle sum ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What do the angles of a quadrilateral add up to?',
      answer: '360°',
      checkMode: 'auto',
      correctAnswer: '360',
      explanation: 'The four interior angles of any quadrilateral always add up to 360°.',
    },

    // ── Q5 Medium — missing quadrilateral angle ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A quadrilateral has angles of 90°, 85° and 95°. Find the fourth angle.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      explanation: 'Fourth angle = 360° − 90° − 85° − 95° = 90°. Check: 90+85+95+90 = 360 ✓',
    },

    // ── Q6 Hard — parallelogram angles ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A parallelogram has one angle of 72°. Find the other three angles.',
      answer: 'Opposite angle is also 72°. The other two angles are each 180−72=108°.',
      checkMode: 'self',
    },

    // ── Q7 Easy — radius from diameter ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the radius of a circle with a diameter of 24cm?',
      answer: '12cm',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Radius = diameter ÷ 2 = 24 ÷ 2 = 12 cm ✓',
    },

    // ── Q8 Easy — diameter from radius ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the diameter of a circle with a radius of 8cm?',
      answer: '16cm',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'Diameter = 2 × radius = 2 × 8 = 16 cm ✓',
    },

    // ── Q9 Medium — diameter as chord reasoning ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato says every diameter is also a chord. Is she correct? Explain.',
      answer: 'Yes — a diameter is a chord that passes through the centre, making it the longest possible chord.',
      checkMode: 'self',
    },

    // ── Q10 Hard — algebraic triangle angles ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A triangle has angles 4x, 3x and 2x. Find the value of x and each angle.',
      answer: '4x+3x+2x=180. 9x=180. x=20. Angles: 80°, 60°, 40°.',
      checkMode: 'self',
    },

    // ── Q11 Medium — identify a chord ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo draws a circle and marks two points on the circumference, joining them with a straight line that does not pass through the centre. What is this line called?',
      answer: 'chord',
      checkMode: 'auto',
      correctAnswer: 'chord',
      explanation: 'A straight line joining two points on a circle is called a chord. Since it does not pass through the centre, it is not the diameter.',
    },

    // ── Q12 Hard — rhombus vs square reasoning ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says a rhombus and a square are always interchangeable shapes. Is she correct? Explain.',
      answer: 'No — a rhombus has 4 equal sides but does not require right angles. A square is a special rhombus with right angles, but not all rhombi are squares.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered 2D shapes.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered 2D shapes for Grade 7. Keep it up!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of 2D shapes. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 Triangle angle sum | 4-6 Dual classification (sides+angles)
    // | 7-10 Quadrilateral angle sum, properties & exterior angle theorem |
    // 11-14 Quadrilateral classification & properties in depth | 15-17
    // Polygon interior/exterior angle formulas | 18-20 Perimeter, multi-step
    // & circle application
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — triangle angle sum
        { difficulty: 'Easy', question: 'In the triangle shown, one angle is 48° and another is 97°. Find the third angle.', answer: '35°', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 degrees'], explanation: 'Third angle = 180° − 48° − 97° = 35°. Check: 48 + 97 + 35 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="58.2,140 147.7,140 161.8,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 83.2,140 A 28,28 0 0 1 73.2,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88.2" y="128" font-size="14" fill="#2563eb" font-weight="700">48°</text><path d="M 122.7,140 A 28,28 0 0 0 135.7,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="105.7" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">97°</text><path d="M 150.8,38 A 18,18 0 0 1 172.8,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="161.8" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A triangular flag has two angles of 84° and 51°. What is the size of the third angle?', answer: '45°', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45°', '45 degrees'], explanation: 'Third angle = 180° − 84° − 51° = 45°. Check: 84 + 51 + 45 = 180 ✓' },
        { difficulty: 'Medium', question: 'Zanele says a triangle can have angles of 95°, 65° and 30°, as shown. Is she correct? Explain.', answer: 'No — 95 + 65 + 30 = 190°, but the three angles of any triangle must add up to exactly 180°, so this triangle is impossible.', checkMode: 'self', explanation: '95 + 65 + 30 = 190°. Since a triangle\'s angles must sum to exactly 180°, an angle set totalling 190° cannot form a real triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">95°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30°</text></svg>' },

        // Block B — dual classification (sides AND angles together)
        { difficulty: 'Medium', question: 'A triangle has sides of 6 cm, 6 cm and 6 cm, with angles of 60°, 60° and 60°, as shown. Classify this triangle by both its sides and its angles.', answer: 'equilateral, acute triangle', checkMode: 'auto', correctAnswer: 'equilateral acute', correctAnswers: ['equilateral acute', 'equilateral, acute', 'acute equilateral', 'equilateral and acute'], explanation: 'All 3 sides are equal, so it is equilateral. All 3 angles (60° each) are less than 90°, so it is also acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">6 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 2:2:5, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The two equal angles', correctAnswer: '40', correctAnswers: ['40', '40°', '40 degrees', '40 and 40', '40, 40'], explanation: 'Total parts = 2+2+5 = 9. One part = 180 ÷ 9 = 20°. Each equal angle = 2 × 20 = 40°.' }, { label: 'b) The largest angle', correctAnswer: '100', correctAnswers: ['100', '100°', '100 degrees'], explanation: 'Largest angle = 5 × 20 = 100°. Check: 40 + 40 + 100 = 180 ✓' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'obtuse', correctAnswers: ['obtuse', 'obtuse triangle'], explanation: 'One angle (100°) is greater than 90°, so the triangle is obtuse.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,72.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">2</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">2</text><path d="M 100,84 A 16,16 0 0 1 120,84" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="102" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">5</text></svg>' },
        { difficulty: 'Hard', question: 'Triangle P has sides 10 cm, 10 cm, 10 cm. Triangle Q has sides 10 cm, 10 cm, 6 cm. Explain why both triangles are isosceles, but only one is equilateral.', answer: 'Isosceles only requires at least 2 equal sides, and both triangles satisfy this. Equilateral requires all 3 sides equal — Triangle P (10,10,10) meets this, but Triangle Q (10,10,6) does not because its third side differs.', checkMode: 'self', explanation: 'Isosceles is the weaker condition (2+ equal sides), so it includes equilateral triangles as a special case. Since Triangle Q\'s third side (6 cm) is different from the other two, it fails the "all sides equal" test for equilateral, but still passes the isosceles test.' },

        // Block C — quadrilateral angle sum, properties & exterior angle theorem
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 92°, 78° and 115°. Find the fourth angle.', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Fourth angle = 360° − 92° − 78° − 115° = 75°. Check: 92+78+115+75 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">92°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">78°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">115°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram, as shown, has one angle of 74°. Find the size of the largest angle in the parallelogram.', answer: '106°', checkMode: 'auto', correctAnswer: '106', correctAnswers: ['106', '106°', '106 degrees'], explanation: 'Opposite angles in a parallelogram are equal, so the angle opposite 74° is also 74°. Adjacent angles are supplementary: 180° − 74° = 106°. The largest angle is 106°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">74°</text></svg>' },
        { difficulty: 'Hard', question: 'In the triangle shown, two interior angles are 50° and 65°. The exterior angle at the third vertex is formed by extending one side. Using the exterior angle theorem (an exterior angle equals the sum of the two non-adjacent interior angles), find the size of this exterior angle.', answer: '115°', checkMode: 'auto', correctAnswer: '115', correctAnswers: ['115', '115°', '115 degrees'], explanation: 'By the exterior angle theorem, the exterior angle = sum of the two non-adjacent interior angles = 50° + 65° = 115°. Check: the interior angle at that vertex = 180 − 50 − 65 = 65°, and its exterior angle = 180 − 65 = 115° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">50°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Sibusiso says the exterior angle of a triangle is always smaller than each of the two interior angles it is not adjacent to. Is he correct? Explain using an example.', answer: 'No — the exterior angle equals the SUM of the two non-adjacent interior angles, so it must be larger than each of them individually (as long as both interior angles are greater than 0°).', checkMode: 'self', explanation: 'For example, if the two non-adjacent interior angles are 50° and 65°, the exterior angle is 50+65=115°, which is bigger than both 50° and 65°. This will always be true since the exterior angle is their sum, not a fraction of it.' },

        // Block D — quadrilateral classification & properties in depth
        { difficulty: 'Medium', question: 'A quadrilateral has 4 equal sides, its diagonals bisect each other at right angles, and it has no right angles. Identify the shape.', answer: 'rhombus', checkMode: 'auto', correctAnswer: 'rhombus', correctAnswers: ['rhombus', 'a rhombus'], explanation: '4 equal sides with diagonals that bisect at right angles, but no right angles at the vertices, describes a rhombus (not a square).' },
        { difficulty: 'Medium', question: 'Explain the difference between a kite and a trapezium in terms of their sides.', answer: 'A kite has two separate pairs of adjacent equal sides. A trapezium has exactly one pair of parallel sides, and its sides are not required to be equal at all.', checkMode: 'self', explanation: 'A kite is defined by side length relationships (two pairs of adjacent sides equal), while a trapezium is defined by a parallel-side relationship (exactly one pair of sides parallel), with no requirement on side lengths.' },
        { difficulty: 'Medium', question: 'A rectangle has diagonals that are always equal in length. If one diagonal of a rectangle measures 13 cm, what is the length of the other diagonal?', answer: '13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm'], explanation: 'A key property of a rectangle is that its diagonals are equal in length. If one diagonal is 13 cm, the other diagonal must also be 13 cm.' },
        { difficulty: 'Hard', question: 'Katlego claims: "Every rhombus is a square, since both shapes have 4 equal sides." Is she correct? Explain.', answer: 'No — a rhombus only needs 4 equal sides; it does not need right angles. A square is a special rhombus that also has 4 right angles. A rhombus without right angles is not a square.', checkMode: 'self', explanation: 'Having 4 equal sides is necessary but not sufficient for a shape to be a square — a square additionally requires all 4 angles to be exactly 90°. Most rhombi have angles that are not 90°, so they fail the square test even though they pass the "4 equal sides" test.' },

        // Block E — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a pentagon (5 sides).', answer: '540°', checkMode: 'auto', correctAnswer: '540', correctAnswers: ['540', '540°', '540 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For a pentagon, n = 5: (5 − 2) × 180 = 3 × 180 = 540°.' },
        { difficulty: 'Medium-Hard', question: 'A regular octagon (8 sides) has all equal interior angles. Find the size of each interior angle.', answer: '135°', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135°', '135 degrees'], explanation: 'Sum of interior angles = (8 − 2) × 180 = 6 × 180 = 1080°. Each angle = 1080° ÷ 8 = 135°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 40° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '9 sides', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 sides', 'nine', 'nine sides', 'nonagon'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 40° = 9. The polygon is a regular nonagon.' },

        // Block F — perimeter, multi-step & circle application
        { difficulty: 'Medium', question: 'The shape shown is a regular hexagon with sides of 9 cm. Find its perimeter.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54cm', '54 cm'], explanation: 'A regular hexagon has 6 equal sides. Perimeter = 6 × 9 cm = 54 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 160.2,61 160.2,119 110,148 59.8,119 59.8,61" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180.2" y="90" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An isosceles triangle has a vertex angle of 36°. Find the size of each of the two base angles, and state whether the triangle is acute, right-angled, or obtuse.', answer: 'Each base angle = 72°; the triangle is acute (36°, 72°, 72° are all less than 90°)', checkMode: 'self', explanation: 'The two base angles are equal. Base angles = (180° − 36°) ÷ 2 = 144° ÷ 2 = 72° each. Since all three angles (36°, 72°, 72°) are less than 90°, the triangle is acute.' },
        { difficulty: 'Medium', question: 'A circle has a diameter of 34 cm. A chord is drawn that does not pass through the centre. Find the radius of the circle, and state whether the chord is longer or shorter than the diameter.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Radius', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'Radius = diameter ÷ 2 = 34 ÷ 2 = 17 cm.' }, { label: 'b) Is the chord longer or shorter than the diameter?', correctAnswer: 'shorter', correctAnswers: ['shorter', 'shorter than the diameter'], explanation: 'Any chord that does not pass through the centre is shorter than the diameter, since the diameter is the longest possible chord.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered triangle and quadrilateral angle reasoning, classification, and polygon angle formulas.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — triangle angle sum
        { difficulty: 'Easy', question: 'In the triangle shown, one angle is 73° and another is 59°. Find the third angle.', answer: '48°', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°', '48 degrees'], explanation: 'Third angle = 180° − 73° − 59° = 48°. Check: 73 + 59 + 48 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="57.9,140 162.1,140 93,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 82.9,140 A 28,28 0 0 1 72.9,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="87.9" y="128" font-size="14" fill="#2563eb" font-weight="700">73°</text><path d="M 137.1,140 A 28,28 0 0 0 150.1,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="120.1" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">59°</text><path d="M 82,38 A 18,18 0 0 1 104,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="93" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A kite-shaped frame has a diagonal that splits it into two triangles. One of these triangles has angles of 110° and 34°. Find the third angle of this triangle.', answer: '36°', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36°', '36 degrees'], explanation: 'Third angle = 180° − 110° − 34° = 36°. Check: 110 + 34 + 36 = 180 ✓' },
        { difficulty: 'Medium', question: 'Tebogo says a triangle can have angles of 120°, 45° and 20°, as shown. Is he correct? Explain.', answer: 'No — 120 + 45 + 20 = 185°, but the three angles of any triangle must add up to exactly 180°, so this triangle is impossible.', checkMode: 'self', explanation: '120 + 45 + 20 = 185°. Since a triangle\'s angles must sum to exactly 180°, an angle set totalling 185° cannot form a real triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">120°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20°</text></svg>' },

        // Block B — dual classification (sides AND angles together)
        { difficulty: 'Medium', question: 'A triangle has two sides of 9 cm each, with angles of 100°, 40° and 40°, as shown. Classify this triangle by both its sides and its angles.', answer: 'isosceles, obtuse triangle', checkMode: 'auto', correctAnswer: 'isosceles obtuse', correctAnswers: ['isosceles obtuse', 'isosceles, obtuse', 'obtuse isosceles', 'isosceles and obtuse'], explanation: 'Two sides are equal (9 cm and 9 cm), so it is isosceles. One angle (100°) is greater than 90°, so it is also obtuse.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,72.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="48" y="106" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="156" y="106" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="110" font-size="12" fill="#2563eb" font-weight="700">40°</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 100,84 A 16,16 0 0 1 120,84" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="102" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">100°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 1:1:4, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The two equal angles', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees', '30 and 30', '30, 30'], explanation: 'Total parts = 1+1+4 = 6. One part = 180 ÷ 6 = 30°. Each equal angle = 1 × 30 = 30°.' }, { label: 'b) The largest angle', correctAnswer: '120', correctAnswers: ['120', '120°', '120 degrees'], explanation: 'Largest angle = 4 × 30 = 120°. Check: 30 + 30 + 120 = 180 ✓' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'obtuse', correctAnswers: ['obtuse', 'obtuse triangle'], explanation: 'One angle (120°) is greater than 90°, so the triangle is obtuse.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 110,93.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">1</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">1</text><path d="M 100,105 A 16,16 0 0 1 120,105" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="123" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'Triangle R has sides 8 cm, 8 cm, 8 cm. Triangle S has sides 8 cm, 8 cm, 3 cm. Explain why both triangles are isosceles, but only one is equilateral.', answer: 'Isosceles only requires at least 2 equal sides, and both triangles satisfy this. Equilateral requires all 3 sides equal — Triangle R (8,8,8) meets this, but Triangle S (8,8,3) does not because its third side differs.', checkMode: 'self', explanation: 'Isosceles is the weaker condition (2+ equal sides), so it includes equilateral triangles as a special case. Since Triangle S\'s third side (3 cm) is different from the other two, it fails the "all sides equal" test for equilateral, but still passes the isosceles test.' },

        // Block C — quadrilateral angle sum, properties & exterior angle theorem
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 105°, 88° and 132°. Find the fourth angle.', answer: '35°', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 degrees'], explanation: 'Fourth angle = 360° − 105° − 88° − 132° = 35°. Check: 105+88+132+35 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">105°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">132°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A rhombus, as shown, has one angle of 74°. Find the size of the largest angle in the rhombus.', answer: '106°', checkMode: 'auto', correctAnswer: '106', correctAnswers: ['106', '106°', '106 degrees'], explanation: 'Opposite angles in a rhombus are equal, so the angle opposite 74° is also 74°. Adjacent angles are supplementary: 180° − 74° = 106°. The largest angle is 106°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">74°</text></svg>' },
        { difficulty: 'Hard', question: 'In the triangle shown, two interior angles are 72° and 48°. The exterior angle at the third vertex is formed by extending one side. Using the exterior angle theorem (an exterior angle equals the sum of the two non-adjacent interior angles), find the size of this exterior angle.', answer: '120°', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120°', '120 degrees'], explanation: 'By the exterior angle theorem, the exterior angle = sum of the two non-adjacent interior angles = 72° + 48° = 120°. Check: the interior angle at that vertex = 180 − 72 − 48 = 60°, and its exterior angle = 180 − 60 = 120° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="36.8,140 153.2,140 67.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="153.2" y1="140" x2="188.2" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58.8,140 A 24,24 0 0 1 49.8,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63.8" y="130" font-size="13" fill="#2563eb" font-weight="700">72°</text><path d="M 131.2,140 A 24,24 0 0 0 140.2,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="126.2" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">48°</text><path d="M 171.2,140 A 18,18 0 0 1 166.2,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="179.2" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Nomvula says the exterior angle of a triangle can sometimes be smaller than one of the two interior angles it is not adjacent to. Is she correct? Explain using an example.', answer: 'No — the exterior angle equals the SUM of the two non-adjacent interior angles, so it must be larger than each of them individually (as long as both interior angles are greater than 0°).', checkMode: 'self', explanation: 'For example, if the two non-adjacent interior angles are 72° and 48°, the exterior angle is 72+48=120°, which is bigger than both 72° and 48°. This will always be true since the exterior angle is their sum, not a fraction of it.' },

        // Block D — quadrilateral classification & properties in depth
        { difficulty: 'Medium', question: 'A quadrilateral has opposite sides equal and parallel, opposite angles equal, no right angles, and its diagonals bisect each other but are not equal in length. Identify the shape.', answer: 'parallelogram', checkMode: 'auto', correctAnswer: 'parallelogram', correctAnswers: ['parallelogram', 'a parallelogram'], explanation: 'Opposite sides equal and parallel, opposite angles equal, no right angles, and diagonals that bisect but are unequal, describes a parallelogram.' },
        { difficulty: 'Medium', question: 'Explain the difference between a rectangle and a parallelogram in terms of their angles.', answer: 'A rectangle always has 4 right angles (90° each). A parallelogram only needs opposite angles equal — its angles do not have to be 90°.', checkMode: 'self', explanation: 'A rectangle is a special parallelogram where the angle condition is stricter: all four angles must equal exactly 90°, not just opposite pairs being equal to each other.' },
        { difficulty: 'Medium', question: 'A rectangle has diagonals that are always equal in length. If one diagonal of a rectangle measures 21 cm, what is the length of the other diagonal?', answer: '21 cm', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21cm', '21 cm'], explanation: 'A key property of a rectangle is that its diagonals are equal in length. If one diagonal is 21 cm, the other diagonal must also be 21 cm.' },
        { difficulty: 'Hard', question: 'Bongani claims: "Every square is a rhombus, and every rhombus is a square, since both have 4 equal sides." Is he correct? Explain.', answer: 'He is half correct — every square IS a rhombus (a special rhombus with right angles), but not every rhombus is a square, because a rhombus does not need right angles.', checkMode: 'self', explanation: 'The relationship only works one way: a square meets all the requirements of a rhombus (4 equal sides) plus an extra requirement (4 right angles), so every square is a rhombus. But a general rhombus may not have right angles, so it is not necessarily a square.' },

        // Block E — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a hexagon (6 sides).', answer: '720°', checkMode: 'auto', correctAnswer: '720', correctAnswers: ['720', '720°', '720 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For a hexagon, n = 6: (6 − 2) × 180 = 4 × 180 = 720°.' },
        { difficulty: 'Medium-Hard', question: 'A regular decagon (10 sides) has all equal interior angles. Find the size of each interior angle.', answer: '144°', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144°', '144 degrees'], explanation: 'Sum of interior angles = (10 − 2) × 180 = 8 × 180 = 1440°. Each angle = 1440° ÷ 10 = 144°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 24° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '15 sides', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 sides', 'fifteen', 'fifteen sides', 'pentadecagon'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 24° = 15.' },

        // Block F — perimeter, multi-step & circle application
        { difficulty: 'Medium', question: 'The shape shown is a regular pentagon with sides of 12 cm. Find its perimeter.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60cm', '60 cm'], explanation: 'A regular pentagon has 5 equal sides. Perimeter = 5 × 12 cm = 60 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 165.2,72.1 144.1,136.9 75.9,136.9 54.8,72.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="156.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },
        { difficulty: 'Hard', question: 'An isosceles triangle has two base angles of 63° each. Find the size of the vertex angle, and state whether the triangle is acute, right-angled, or obtuse.', answer: 'Vertex angle = 54°; the triangle is acute (63°, 63°, 54° are all less than 90°)', checkMode: 'self', explanation: 'The three angles must sum to 180°. Vertex angle = 180° − 63° − 63° = 54°. Since all three angles (63°, 63°, 54°) are less than 90°, the triangle is acute.' },
        { difficulty: 'Medium', question: 'A circle has a radius of 15 cm. A chord is drawn that passes through the centre of the circle. Find the diameter of the circle, and state the special name for this particular chord.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Diameter', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'Diameter = 2 × radius = 2 × 15 = 30 cm.' }, { label: 'b) Special name for a chord through the centre', correctAnswer: 'diameter', correctAnswers: ['diameter', 'the diameter'], explanation: 'A chord that passes through the centre of a circle is called the diameter — it is also the longest possible chord.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply angle rules, dual classification, and polygon formulas.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — triangle angle sum
        { difficulty: 'Easy', question: 'In the triangle shown, one angle is 81° and another is 66°. Find the third angle.', answer: '33°', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33°', '33 degrees'], explanation: 'Third angle = 180° − 81° − 66° = 33°. Check: 81 + 66 + 33 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="75.3,140 144.7,140 93.5,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.3,140 A 28,28 0 0 1 90.3,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="105.3" y="128" font-size="14" fill="#2563eb" font-weight="700">81°</text><path d="M 119.7,140 A 28,28 0 0 0 132.7,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="102.7" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">66°</text><path d="M 82.5,38 A 18,18 0 0 1 104.5,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="93.5" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'A sailboat\'s sail is shaped like a right-angled triangle. One of the other angles measures 38°. Find the size of the third angle.', answer: '52°', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°', '52 degrees'], explanation: 'A right-angled triangle has one angle of 90°. Third angle = 180° − 90° − 38° = 52°. Check: 90 + 38 + 52 = 180 ✓' },
        { difficulty: 'Medium', question: 'Ayanda says a triangle can have angles of 40°, 40° and 110°, as shown. Is she correct? Explain.', answer: 'No — 40 + 40 + 110 = 190°, but the three angles of any triangle must add up to exactly 180°, so this triangle is impossible.', checkMode: 'self', explanation: '40 + 40 + 110 = 190°. Since a triangle\'s angles must sum to exactly 180°, an angle set totalling 190° cannot form a real triangle.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="25,140 195,140 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M 50,140 A 28,28 0 0 1 38,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="55" y="128" font-size="14" fill="#2563eb" font-weight="700">40°</text><path d="M 170,140 A 28,28 0 0 0 182,115" fill="none" stroke="#2563eb" stroke-width="2"/><text x="153" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 99,40 A 18,18 0 0 1 121,40" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">110°</text></svg>' },

        // Block B — dual classification (sides AND angles together)
        { difficulty: 'Medium', question: 'A triangle has sides of 7 cm, 9 cm and 11 cm, with angles of 40°, 60° and 80°, as shown. Classify this triangle by both its sides and its angles.', answer: 'scalene, acute triangle', checkMode: 'auto', correctAnswer: 'scalene acute', correctAnswers: ['scalene acute', 'scalene, acute', 'acute scalene', 'scalene and acute'], explanation: 'All 3 sides are different lengths, so it is scalene. All 3 angles (40°, 60°, 80°) are less than 90°, so it is also acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 137.8,49.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="62" y="95" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="170" y="95" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="110" font-size="12" fill="#2563eb" font-weight="700">40°</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 128,61 A 16,16 0 0 1 148,61" fill="none" stroke="#2563eb" stroke-width="2"/><text x="138" y="79" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">80°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 1:4:4, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The smallest angle', correctAnswer: '20', correctAnswers: ['20', '20°', '20 degrees'], explanation: 'Total parts = 1+4+4 = 9. One part = 180 ÷ 9 = 20°. Smallest angle = 1 × 20 = 20°.' }, { label: 'b) The two equal angles', correctAnswer: '80', correctAnswers: ['80', '80°', '80 degrees', '80 and 80', '80, 80'], explanation: 'Each equal angle = 4 × 20 = 80°. Check: 20 + 80 + 80 = 180 ✓' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'acute', correctAnswers: ['acute', 'acute triangle'], explanation: 'All three angles (20°, 80°, 80°) are less than 90°, so the triangle is acute.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="89.7,140 130.3,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 114.7,140 A 28,28 0 0 1 104.7,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="119.7" y="126" font-size="13" fill="#ea580c" font-weight="700">4</text><path d="M 105.3,140 A 28,28 0 0 0 115.3,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="100.3" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">4</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">1</text></svg>' },
        { difficulty: 'Hard', question: 'Triangle T has sides 12 cm, 12 cm, 12 cm. Triangle U has sides 12 cm, 12 cm, 7 cm. Explain why both triangles are isosceles, but only one is equilateral.', answer: 'Isosceles only requires at least 2 equal sides, and both triangles satisfy this. Equilateral requires all 3 sides equal — Triangle T (12,12,12) meets this, but Triangle U (12,12,7) does not because its third side differs.', checkMode: 'self', explanation: 'Isosceles is the weaker condition (2+ equal sides), so it includes equilateral triangles as a special case. Since Triangle U\'s third side (7 cm) is different from the other two, it fails the "all sides equal" test for equilateral, but still passes the isosceles test.' },

        // Block C — quadrilateral angle sum, properties & exterior angle theorem
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 68°, 152° and 94°. Find the fourth angle.', answer: '46°', checkMode: 'auto', correctAnswer: '46', correctAnswers: ['46', '46°', '46 degrees'], explanation: 'Fourth angle = 360° − 68° − 152° − 94° = 46°. Check: 68+152+94+46 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">68°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">152°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">94°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram, as shown, has one angle of 74°. Find the size of the smallest angle in the parallelogram.', answer: '74°', checkMode: 'auto', correctAnswer: '74', correctAnswers: ['74', '74°', '74 degrees'], explanation: 'Opposite angles in a parallelogram are equal, so the angle opposite 74° is also 74°. Adjacent angles are supplementary: 180° − 74° = 106°. The smallest angle is 74°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">74°</text></svg>' },
        { difficulty: 'Hard', question: 'In the triangle shown, two interior angles are 83° and 39°. The exterior angle at the third vertex is formed by extending one side. Using the exterior angle theorem (an exterior angle equals the sum of the two non-adjacent interior angles), find the size of this exterior angle.', answer: '122°', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 degrees'], explanation: 'By the exterior angle theorem, the exterior angle = sum of the two non-adjacent interior angles = 83° + 39° = 122°. Check: the interior angle at that vertex = 180 − 83 − 39 = 58°, and its exterior angle = 180 − 58 = 122° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30.5,140 159.5,140 42.2,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="159.5" y1="140" x2="194.5" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 52.5,140 A 24,24 0 0 1 43.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="57.5" y="130" font-size="13" fill="#2563eb" font-weight="700">83°</text><path d="M 137.5,140 A 24,24 0 0 0 146.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="132.5" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">39°</text><path d="M 177.5,140 A 18,18 0 0 1 172.5,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="185.5" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Hard', question: 'Precious says you can find a triangle\'s exterior angle without knowing both non-adjacent interior angles, as long as you know the interior angle at that same vertex. Is she correct? Explain.', answer: 'Yes — the interior and exterior angle at the same vertex are supplementary (add to 180°), so the exterior angle can also be found using 180° minus the interior angle at that vertex, without needing the other two angles.', checkMode: 'self', explanation: 'An interior angle and its adjacent exterior angle lie on a straight line, so they add up to 180°. This gives a second, independent way to find the exterior angle: exterior angle = 180° − interior angle at that vertex, which agrees with the exterior angle theorem result.' },

        // Block D — quadrilateral classification & properties in depth
        { difficulty: 'Medium', question: 'A quadrilateral has two pairs of adjacent equal sides (the two pairs are different lengths from each other), one pair of opposite angles equal, and diagonals that intersect at right angles. Identify the shape.', answer: 'kite', checkMode: 'auto', correctAnswer: 'kite', correctAnswers: ['kite', 'a kite'], explanation: 'Two pairs of adjacent equal sides (of different lengths from each other), with one pair of equal opposite angles and diagonals meeting at right angles, describes a kite.' },
        { difficulty: 'Medium', question: 'Explain the difference between a square and a rhombus in terms of their angles.', answer: 'A square always has 4 right angles (90° each). A rhombus only needs opposite angles equal — its angles do not have to be 90°.', checkMode: 'self', explanation: 'A square is a special rhombus where the angle condition is stricter: all four angles must equal exactly 90°, not just opposite pairs being equal to each other.' },
        { difficulty: 'Medium', question: 'A rectangle has diagonals that are always equal in length. If one diagonal of a rectangle measures 25 cm, what is the length of the other diagonal?', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'A key property of a rectangle is that its diagonals are equal in length. If one diagonal is 25 cm, the other diagonal must also be 25 cm.' },
        { difficulty: 'Hard', question: 'Lindiwe claims: "A trapezium can never be a parallelogram, because a trapezium only has one pair of parallel sides." Is she correct? Explain using the definitions.', answer: 'Yes, she is correct (using the exactly-one-pair definition of trapezium) — a trapezium is defined by having exactly one pair of parallel sides, while a parallelogram has two pairs. A shape cannot satisfy both definitions at once.', checkMode: 'self', explanation: 'Under the standard CAPS definition, a trapezium has exactly one pair of parallel sides, while a parallelogram requires both pairs of opposite sides to be parallel. Since these conditions are mutually exclusive (one pair vs both pairs), a trapezium (by this definition) cannot also be a parallelogram.' },

        // Block E — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a heptagon (7 sides).', answer: '900°', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900', '900°', '900 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For a heptagon, n = 7: (7 − 2) × 180 = 5 × 180 = 900°.' },
        { difficulty: 'Medium-Hard', question: 'A regular dodecagon (12 sides) has all equal interior angles. Find the size of each interior angle.', answer: '150°', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150°', '150 degrees'], explanation: 'Sum of interior angles = (12 − 2) × 180 = 10 × 180 = 1800°. Each angle = 1800° ÷ 12 = 150°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 30° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '12 sides', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 sides', 'twelve', 'twelve sides', 'dodecagon'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 30° = 12. The polygon is a regular dodecagon.' },

        // Block F — perimeter, multi-step & circle application
        { difficulty: 'Medium', question: 'The shape shown is a regular octagon with sides of 7 cm. Find its perimeter.', answer: '56 cm', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56cm', '56 cm'], explanation: 'A regular octagon has 8 equal sides. Perimeter = 8 × 7 cm = 56 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 151,49 168,90 151,131 110,148 69,131 52,90 69,49" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="178.0" y="118.2" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A kite has two angles of 130° each at the ends of one diagonal. The other two angles (at the ends of the other diagonal) are equal to each other. Find the size of each of these two remaining angles, and state whether the kite is convex (all angles less than 180°).', answer: 'Each remaining angle = 50°; the kite is convex, since all four angles (130°, 130°, 50°, 50°) are less than 180°', checkMode: 'self', explanation: 'The four angles of the kite add up to 360°. The two known angles total 130° + 130° = 260°, leaving 360° − 260° = 100° to be split equally between the other two angles: 100° ÷ 2 = 50° each. Since every angle (130°, 130°, 50°, 50°) is less than 180°, the kite is convex.' },
        { difficulty: 'Medium', question: 'A circle has a diameter of 9,2 cm. Find the radius of the circle, and explain why the radius will always be exactly half the diameter, no matter the size of the circle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Radius', correctAnswer: '4.6', correctAnswers: ['4.6', '4,6', '4.6cm', '4,6cm', '4.6 cm', '4,6 cm'], explanation: 'Radius = diameter ÷ 2 = 9,2 ÷ 2 = 4,6 cm.' }, { label: 'b) Why is the radius always exactly half the diameter?', correctAnswer: 'the diameter is made of two radii placed end to end through the centre', correctAnswers: ['two radii', 'diameter is two radii', 'the diameter is two radii end to end'], explanation: 'The diameter is a straight line through the centre connecting two points on the circle. This line is made up of two radii placed end to end (centre to one edge, then centre to the opposite edge), so it will always equal exactly 2 × radius, for any size of circle.' } ] },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You can apply angle theorems, dual classification, and shape properties to real-world reasoning.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
