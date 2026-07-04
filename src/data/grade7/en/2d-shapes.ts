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
        '<VideoPlaceholder label="Short video showing triangle types by side and angle and how to use the angle sum rule to find missing angles including ratio problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all six triangle types side by side — equilateral isosceles and scalene by side, and acute right-angled and obtuse-angled by angle — with angle labels" />',
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
        '<VideoPlaceholder label="Short video showing quadrilateral types and their properties and how to use the 360° angle sum to find missing angles and classify shapes" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing all six quadrilateral types — square rectangle parallelogram rhombus trapezium kite — with angle and side properties labelled" />',
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
        '<VideoPlaceholder label="Short video explaining the parts of a circle — centre radius diameter circumference chord and arc — with labelled diagrams and worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with all parts clearly labelled — centre radius diameter circumference chord and arc — colour coded to match the colour key" />',
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
}
