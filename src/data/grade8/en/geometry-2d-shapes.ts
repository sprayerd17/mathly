import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry roles) ─────────────────────────────────────────
// equal sides / congruent / known values     → blue   (#2563eb)
// parallel sides / matching angles / properties used → green (#16a34a)
// angles / similar                           → orange (#ea580c)
// unknown values                             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 2D Shapes',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FORMAL DEFINITIONS OF TRIANGLES AND QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formal-definitions-triangles-quadrilaterals',
      title: 'Formal Definitions of Triangles and Quadrilaterals',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 8 we write <strong>formal definitions</strong> of triangles and quadrilaterals based on their sides and angles. A precise definition identifies a shape exactly — it states the minimum conditions needed to distinguish it from all other shapes.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('equal sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallel sides')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('angles')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Triangles</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equilateral</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All ${bl('three sides equal')}; all ${or('three angles equal')} at ${or('60°')} each.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Isosceles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">At least ${bl('two sides equal')}; the ${or('two base angles')} opposite the equal sides are also equal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Right-angled</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly one ${or('right angle (90°)')}. The side opposite the right angle is the hypotenuse — the longest side.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Quadrilaterals</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Two pairs of parallel sides')}; ${bl('opposite sides equal')}; ${or('opposite angles equal')}. No right angles required.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A parallelogram with ${or('all four right angles (90°)')}. ${bl('Opposite sides equal')}; ${gr('opposite sides parallel')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('All four sides equal')}; ${or('all four right angles (90°)')}; ${gr('opposite sides parallel')}. A special rectangle and rhombus.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rhombus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('All four sides equal')}; ${gr('opposite sides parallel')}; ${or('opposite angles equal')}. Angles are not necessarily 90°.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Trapezium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly ${gr('one pair of parallel sides')} (the bases). The other two sides are non-parallel.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two pairs of ${bl('adjacent equal sides')} (equal sides are next to each other, not opposite). One pair of ${or('opposite angles equal')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hierarchy of quadrilaterals</p>` +
        `<p style="margin:0;color:#1e3a8a;">A <strong>square</strong> is a special <strong>rectangle</strong> (all sides equal) and a special <strong>rhombus</strong> (all angles 90°). Both are special <strong>parallelograms</strong>. A <strong>trapezium</strong> has only one pair of parallel sides; a <strong>kite</strong> has no parallel sides.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write a clear definition of a rhombus.',
          answer: `A ${bl('rhombus')} is a quadrilateral with all ${bl('four sides equal in length')}, ${gr('opposite sides parallel')}, and ${or('opposite angles equal')}, but its angles are not necessarily 90°.`,
          steps: [
            `A rhombus is a <strong>quadrilateral</strong> — it has four straight sides and four angles.`,
            `All ${bl('four sides are equal in length')} — this is the defining property, distinguishing it from a general parallelogram.`,
            `${gr('Opposite sides are parallel')} — this means it belongs to the parallelogram family.`,
            `${or('Opposite angles are equal')}, but angles are <strong>not necessarily 90°</strong>. When the angles are exactly 90° it becomes a square.`,
          ],
        },
        {
          question: 'Sipho says a kite and a rhombus are the same shape. Explain the difference.',
          answer: `A ${bl('rhombus')} has ${bl('all four sides equal')}; a kite has two pairs of ${bl('adjacent equal sides')} — not all four equal — with typically only one pair of ${or('opposite angles equal')}.`,
          steps: [
            `A ${bl('rhombus')} has ${bl('all four sides equal')} — any two sides you compare are the same length. It also has ${gr('two pairs of parallel sides')}.`,
            `A kite has two pairs of ${bl('adjacent equal sides')} — the equal sides are next to each other, not opposite. Not all four sides are equal.`,
            `In a rhombus, ${or('both pairs of opposite angles are equal')}. In a kite, typically only ${or('one pair of opposite angles is equal')}.`,
            `A rhombus has ${gr('two pairs of parallel sides')}; a kite has <strong>no parallel sides</strong>.`,
            `See the diagram below comparing both shapes.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Define a square in terms of its sides and angles.',
          answer: 'A square has 4 equal sides and 4 right angles (90°).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho says all rectangles are parallelograms. Is he correct? Explain.',
          answer: 'Yes — a rectangle has opposite sides equal and parallel, meeting the definition of a parallelogram, with the added property of right angles.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato says a trapezium has two pairs of parallel sides. Is she correct? Explain.',
          answer: 'No — a trapezium has only one pair of parallel sides; a shape with two pairs would be a parallelogram.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho says a rhombus always has 4 right angles. Is he correct? Explain.',
          answer: 'No — a rhombus has 4 equal sides, but it does not require right angles. A square is a special rhombus with right angles.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Define an isosceles triangle.',
          answer: 'A triangle with at least two equal sides and two equal angles.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato has a quadrilateral with one pair of parallel sides and no other equal properties. What shape is it?',
          answer: 'trapezium',
          checkMode: 'auto',
          correctAnswer: 'trapezium',
          explanation: 'A trapezium has exactly one pair of parallel sides. With no other equal properties (no equal sides, no right angles), it fits the definition of a trapezium.',
        },
      ],

      diagramPlaceholder:
        'Side-by-side comparison of a rhombus and a kite, showing equal sides in blue, parallel sides in green, and matching angles in orange on each shape',

      diagramSvg:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(90,100)">' +
        '<polygon points="0,-55 45,0 0,55 -45,0" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="19" y1="-31" x2="26" y2="-24" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="19" y1="24" x2="26" y2="31" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-19" y1="24" x2="-26" y2="31" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-19" y1="-31" x2="-26" y2="-24" stroke="#2563eb" stroke-width="2"/>' +
        '<polyline points="14,-36 20,-33 14,-30" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<polyline points="-14,30 -20,33 -14,36" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M -8,-42 Q 0,-38 8,-42" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M -8,42 Q 0,38 8,42" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="0" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Rhombus</text>' +
        '</g>' +
        '<g transform="translate(250,100)">' +
        '<polygon points="0,-60 35,-10 0,50 -35,-10" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="14" y1="-38" x2="21" y2="-32" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-14" y1="-38" x2="-21" y2="-32" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="14" y1="17" x2="20" y2="23" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="18" y1="15" x2="24" y2="21" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-14" y1="17" x2="-20" y2="23" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-18" y1="15" x2="-24" y2="21" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 25,-14 Q 20,-2 25,10" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<path d="M -25,-14 Q -20,-2 -25,10" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="0" y="72" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Kite</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        'Short video explaining the formal definitions of triangles and quadrilaterals using colour-coded diagrams of equal sides, parallel sides, and angles',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONGRUENT AND SIMILAR SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruent-and-similar-shapes',
      title: 'Congruent and Similar Shapes',
      icon: '≅',
      explanation:
        `<p style="margin-bottom:16px;">Two shapes can be related by their size and shape. <strong>Congruent</strong> shapes are identical in both shape and size. <strong>Similar</strong> shapes have the same shape but may differ in size — their sides are in proportion and their matching angles are equal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('congruent')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('similar')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('matching angles')}</span>` +
        `</div>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Congruent shapes</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Identical in <strong>both shape and size</strong>.</p>` +
        `<ul style="color:#374151;font-size:14px;margin:0;padding-left:16px;">` +
        `<li>All corresponding ${bl('sides are equal')} in length.</li>` +
        `<li>All corresponding ${gr('angles are equal')}.</li>` +
        `<li>One shape fits <em>exactly</em> onto the other (after a flip, rotation, or slide).</li>` +
        `</ul>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Similar shapes</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Same <strong>shape</strong>, size may differ.</p>` +
        `<ul style="color:#374151;font-size:14px;margin:0;padding-left:16px;">` +
        `<li>All corresponding ${gr('angles are equal')}.</li>` +
        `<li>Corresponding sides are ${or('in proportion')} — they share a constant scale factor.</li>` +
        `<li>One shape is an enlargement or reduction of the other.</li>` +
        `</ul>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key relationship</p>` +
        `<p style="margin:0;color:#1e3a8a;">All ${bl('congruent')} shapes are also ${or('similar')} — they have the same shape with a scale factor of 1. But not all ${or('similar')} shapes are ${bl('congruent')} — similar shapes can have different sizes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two triangles have identical angles 50°, 60° and 70° but different side lengths. Are they congruent or similar?',
          answer: `The triangles are ${or('similar')}, not ${bl('congruent')} — they have the same shape but different sizes.`,
          steps: [
            `Check the angles: both triangles have ${gr('identical angles')} of ${gr('50°')}, ${gr('60°')} and ${gr('70°')}.`,
            `Same angles means same shape — this satisfies the condition for ${or('similarity')}.`,
            `Check the sizes: the side lengths are <strong>different</strong>. Congruent shapes must be identical in size — so they are <strong>not congruent</strong>.`,
            `Conclusion: the triangles are ${or('similar')} (same shape, same angles, sides in proportion) but not ${bl('congruent')} (different sizes).`,
          ],
        },
        {
          question: 'Lerato has two squares — one with side 4 cm and one with side 4 cm. Are they congruent?',
          answer: `Yes — the two squares are ${bl('congruent')} because they have exactly the same shape and size.`,
          steps: [
            `Both shapes are squares — they have the same shape (all angles 90°, all sides equal), so they are ${or('similar')}.`,
            `Check the sizes: both have side length ${bl('4 cm')} — they are the same size.`,
            `Since they are identical in both shape and size, they are ${bl('congruent')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Are two shapes that are identical in shape and size called congruent or similar?',
          answer: 'congruent',
          checkMode: 'auto',
          correctAnswer: 'congruent',
          explanation: 'Congruent shapes are identical in both shape and size — all corresponding sides and angles are equal.',
        },
        {
          difficulty: 'Medium',
          question: 'Two triangles have the same angles but different side lengths. Are they congruent or similar?',
          answer: 'similar',
          checkMode: 'auto',
          correctAnswer: 'similar',
          explanation: 'They have the same shape (equal angles) but different sizes — so they are similar but not congruent.',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo says all congruent shapes are also similar. Is he correct? Explain.',
          answer: 'Yes — congruent shapes have identical size and shape, which also satisfies the definition of similarity (same shape, with a scale factor of 1).',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says two squares of different sizes are always similar but never congruent. Is she correct? Explain.',
          answer: 'Yes — two squares with different side lengths have the same shape (similar) but cannot be congruent since congruent shapes must be identical in size too.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Two triangles of different sizes but identical angles, labelled similar; two identical squares, labelled congruent',

      diagramSvg:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(70,100)">' +
        '<rect x="-55" y="-20" width="40" height="40" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
        '<rect x="15" y="-20" width="40" height="40" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="0" y="45" font-size="12" font-weight="700" text-anchor="middle" fill="#2563eb">Congruent</text>' +
        '</g>' +
        '<g transform="translate(255,90)">' +
        '<polygon points="-75,25 -45,25 -60,-15" fill="none" stroke="#ea580c" stroke-width="2.5"/>' +
        '<polygon points="10,25 58,25 34,-39" fill="none" stroke="#ea580c" stroke-width="2.5"/>' +
        '<path d="M -65,25 A 10,10 0 0 0 -71.5,15.6" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M 24,25 A 14,14 0 0 0 14.9,11.9" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="-8" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#ea580c">Similar</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing how to identify congruent and similar shapes by comparing side lengths and angles, with colour-coded matching angles in green',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING GEOMETRIC PROBLEMS USING KNOWN PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-geometric-problems',
      title: 'Solving Geometric Problems Using Known Properties',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We can use the known <strong>properties and definitions</strong> of triangles and quadrilaterals to find unknown sides and angles. For similar shapes, we set up a <strong>proportion</strong> — the ratio of corresponding sides is constant. For congruent shapes, corresponding sides and angles are simply equal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('properties used')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for geometric problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Name the shape and state its relevant ${gr('property')} (e.g. all sides equal, opposite angles supplementary).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Apply')} — Use the ${gr('property')} to write an equation linking the ${bl('known values')} and the ${re('unknown values')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Solve')} — Calculate the ${re('unknown')} and verify your answer is consistent with all properties of the shape.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proportion for similar shapes</p>` +
        `<p style="margin:0;color:#1e3a8a;">For similar shapes, set up a proportion: <strong style="color:#2563eb;">smaller side / larger side = given ratio</strong>. Cross-multiply to solve for the unknown, then verify using the original ratio.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A kite ABCD has AB = 3.5 cm and BC = 6 cm. Find AD and DC.',
          answer: `AD = ${bl('3.5')} cm and DC = ${bl('6')} cm`,
          steps: [
            `${gr('Property:')} In a kite, there are two pairs of ${gr('adjacent equal sides')}.`,
            `The two pairs of equal adjacent sides are: AB = AD and BC = DC.`,
            `Since ${bl('AB = 3.5 cm')}, it follows that AD = ${bl('3.5 cm')}.`,
            `Since ${bl('BC = 6 cm')}, it follows that DC = ${bl('6 cm')}.`,
          ],
        },
        {
          question: 'Two similar triangles have corresponding sides in the ratio 2 : 5. If the smaller triangle\'s side is 8 cm, find the corresponding side in the larger triangle.',
          answer: `The corresponding side in the larger triangle is ${re('20')} cm`,
          steps: [
            `${gr('Property:')} For similar triangles, corresponding sides are in proportion.`,
            `Set up the proportion using the ${bl('known ratio')} 2 : 5 and the ${bl('known side')} 8 cm:<br>${bl('2')} / ${bl('5')} = ${bl('8')} / ${re('x')}`,
            `Cross-multiply: ${bl('2')} × ${re('x')} = ${bl('5')} × ${bl('8')}<br>${bl('2')}${re('x')} = ${bl('40')}`,
            `Divide both sides by 2: ${re('x')} = ${bl('40')} ÷ ${bl('2')} = ${re('20')} cm`,
            `<strong>Check:</strong> 8 / 20 = 2 / 5 ✓ — the ratio holds.`,
          ],
        },
        {
          question: 'Thabo has a parallelogram where one angle is 65°. Find all four angles.',
          answer: `The four angles are ${or('65°')}, ${or('115°')}, ${or('65°')}, ${or('115°')}`,
          steps: [
            `${gr('Property 1:')} In a parallelogram, ${gr('opposite angles are equal')}.`,
            `Since one angle is ${bl('65°')}, the opposite angle is also ${or('65°')}.`,
            `${gr('Property 2:')} In a parallelogram, ${gr('adjacent angles are supplementary')} — they add to 180°.`,
            `Each angle adjacent to the 65° angle = 180° − ${bl('65°')} = ${or('115°')}.`,
            `<strong>Answer:</strong> The four angles are ${or('65°')}, ${or('115°')}, ${or('65°')}, ${or('115°')} ✓<br>Check: 65° + 115° + 65° + 115° = 360° ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A kite has AB = 4 cm and BC = 7 cm. Find AD and DC.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) AD =',
              correctAnswer: '4cm',
              correctAnswers: ['4cm', '4 cm', '4'],
              explanation: 'In a kite, adjacent pairs of sides are equal. AD = AB = 4 cm.',
            },
            {
              label: 'b) DC =',
              correctAnswer: '7cm',
              correctAnswers: ['7cm', '7 cm', '7'],
              explanation: 'In a kite, adjacent pairs of sides are equal. DC = BC = 7 cm.',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Two similar triangles have a side ratio of 3 : 7. If the smaller triangle\'s side is 9 cm, find the corresponding side in the larger triangle.',
          answer: '21cm',
          checkMode: 'auto',
          correctAnswer: '21cm',
          correctAnswers: ['21cm', '21 cm', '21'],
          explanation: 'Set up proportion: 3/7 = 9/x. Cross multiply: 3x = 63. x = 63 ÷ 3 = 21 cm. Check: 9/21 = 3/7 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A parallelogram has one angle of 72°. Find all four angles.',
          answer: 'Opposite angle is also 72°. Adjacent angles are each 180 − 72 = 108°. Angles: 72°, 108°, 72°, 108°.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Two similar rectangles have corresponding sides in the ratio 4 : 9. If the smaller rectangle\'s width is 12 cm, find the larger rectangle\'s width.',
          answer: '27cm',
          checkMode: 'auto',
          correctAnswer: '27cm',
          correctAnswers: ['27cm', '27 cm', '27'],
          explanation: 'Set up proportion: 4/9 = 12/x. Cross multiply: 4x = 108. x = 108 ÷ 4 = 27 cm. Check: 12/27 = 4/9 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'A kite has two pairs of adjacent equal sides — 5 cm and 8 cm. Find the perimeter.',
          answer: '26cm',
          checkMode: 'auto',
          correctAnswer: '26cm',
          correctAnswers: ['26cm', '26 cm', '26'],
          explanation: 'A kite has four sides: two pairs of equal adjacent sides. Perimeter = 2 × 5 + 2 × 8 = 10 + 16 = 26 cm ✓',
        },
      ],

      diagramPlaceholder:
        'Worked examples showing a kite ABCD with equal adjacent sides labelled, two similar triangles with a proportion set up, and a parallelogram with all four angles marked',

      diagramSvg:
        '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(80,95)">' +
        '<polygon points="0,-50 30,-5 0,45 -30,-5" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="13" y1="-30" x2="19" y2="-24" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-13" y1="-30" x2="-19" y2="-24" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="11" y1="17" x2="18" y2="24" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="16" y1="14" x2="23" y2="21" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-11" y1="17" x2="-18" y2="24" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="-16" y1="14" x2="-23" y2="21" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="0" y="-58" font-size="11" text-anchor="middle" fill="#0f1f3d">A</text>' +
        '<text x="38" y="-2" font-size="11" fill="#0f1f3d">B</text>' +
        '<text x="0" y="60" font-size="11" text-anchor="middle" fill="#0f1f3d">C</text>' +
        '<text x="-42" y="-2" font-size="11" fill="#0f1f3d">D</text>' +
        '<text x="0" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Kite ABCD</text>' +
        '</g>' +
        '<g transform="translate(230,95)">' +
        '<polygon points="-55,20 -30,20 -45,-12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<polygon points="15,20 77.5,20 46.25,-60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M -45,20 A 10,10 0 0 0 -52,10.5" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<path d="M 29,20 A 14,14 0 0 0 19.2,6.6" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="-42" y="35" font-size="12" font-weight="700" fill="#2563eb">8</text>' +
        '<text x="35" y="35" font-size="12" font-weight="700" fill="#dc2626">x</text>' +
        '<text x="0" y="55" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Similar (ratio 2 : 5)</text>' +
        '</g>' +
        '<g transform="translate(400,95)">' +
        '<polygon points="-35,25 35,25 50,-20 -20,-20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<text x="-20" y="18" font-size="11" font-weight="700" fill="#2563eb">65°</text>' +
        '<text x="18" y="18" font-size="11" font-weight="700" fill="#dc2626">115°</text>' +
        '<text x="34" y="-12" font-size="11" font-weight="700" fill="#2563eb">65°</text>' +
        '<text x="-8" y="-12" font-size="11" font-weight="700" fill="#dc2626">115°</text>' +
        '<text x="7" y="45" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Parallelogram</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        'Short video showing how to use known properties of quadrilaterals and similar triangles to find unknown sides and angles step by step',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of 2D shapes.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of 2D geometry. Review any missed questions and aim for a perfect score.' },
    { minScore: 8, message: 'Good effort! Work back through the study guide and try again — you are on the right track.' },
    { minScore: 0, message: 'Keep going! Work through the guide again, focusing on the definitions and properties, then try again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-4 Triangle angle-sum & exterior angle theorem | 5-8 Triangle
    // classification by sides+angles | 9-12 Quadrilateral properties &
    // angle-sum | 13-15 Polygon interior/exterior angle formulas | 16-18
    // Similarity vs congruency reasoning | 19-20 Multi-step/applied
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — triangle angle-sum & exterior angle theorem
        { difficulty: 'Easy', question: 'In the triangle shown, two of the interior angles are 52° and 79°. Find the third angle.', answer: '49°', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49°', '49 degrees'], explanation: 'Third angle = 180° − 52° − 79° = 49°. Check: 52 + 79 + 49 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">52°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">79°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, two interior angles are 68° and 75°. One side is extended to form an exterior angle at the third vertex. Use the exterior angle theorem to find this exterior angle.', answer: '143°', checkMode: 'auto', correctAnswer: '143', correctAnswers: ['143', '143°', '143 degrees'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two non-adjacent interior angles: 68° + 75° = 143°. Check: the interior angle at that vertex = 180 − 68 − 75 = 37°, and 180 − 37 = 143° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">68°</text><path d="M 101.8,58 A 18,18 0 0 1 118.8,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110.3" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 3:4:5. Find the size of each angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Smallest angle', correctAnswer: '45', correctAnswers: ['45', '45°', '45 degrees'], explanation: 'Total parts = 3+4+5 = 12. One part = 180 ÷ 12 = 15°. Smallest angle = 3 × 15 = 45°.' }, { label: 'b) Middle angle', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middle angle = 4 × 15 = 60°.' }, { label: 'c) Largest angle', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Largest angle = 5 × 15 = 75°. Check: 45 + 60 + 75 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Nomsa says: "In the triangle shown, if I know the exterior angle at one vertex is 130°, I can always work out the interior angle at that same vertex without any other information." Is she correct? Explain, then state the interior angle for this case.', answer: 'Yes — the interior and exterior angle at the same vertex lie on a straight line, so they are supplementary (add to 180°). Interior angle = 180° − 130° = 50°.', checkMode: 'self', explanation: 'An interior angle and its adjacent exterior angle always add up to 180° because they lie on a straight line, regardless of the other two angles in the triangle. Here, interior angle = 180° − 130° = 50°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">130°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Block B — triangle classification by sides and angles (dual)
        { difficulty: 'Easy', question: 'A triangle has three sides of 5 cm, 5 cm and 5 cm, with all three angles equal to 60°, as shown. Classify this triangle by both its sides and its angles.', answer: 'equilateral, acute triangle', checkMode: 'auto', correctAnswer: 'equilateral acute', correctAnswers: ['equilateral acute', 'equilateral, acute', 'acute equilateral', 'equilateral and acute'], explanation: 'All 3 sides are equal (5 cm each), so it is equilateral. All 3 angles (60° each) are less than 90°, so it is also acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">5 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">5 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides of 9 cm, 12 cm and 15 cm, as shown. One of its angles measures exactly 90°. Classify this triangle by both its sides and its angles.', answer: 'scalene, right-angled triangle', checkMode: 'auto', correctAnswer: 'scalene right-angled', correctAnswers: ['scalene right-angled', 'scalene, right-angled', 'right-angled scalene', 'scalene and right-angled', 'scalene right angled'], explanation: 'All 3 sides (9 cm, 12 cm, 15 cm) are different lengths, so it is scalene. Since one angle is exactly 90°, it is also right-angled — note that 9² + 12² = 81 + 144 = 225 = 15², confirming the right angle sits opposite the 15 cm side.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,68 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="104" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">9 cm</text><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="105" y="98" font-size="13" fill="#2563eb" font-weight="700">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 2:5:5, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The smallest angle', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], explanation: 'Total parts = 2+5+5 = 12. One part = 180 ÷ 12 = 15°. Smallest angle = 2 × 15 = 30°.' }, { label: 'b) The two equal angles', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees', '75 and 75', '75, 75'], explanation: 'Each equal angle = 5 × 15 = 75°. Check: 30 + 75 + 75 = 180 ✓' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'acute', correctAnswers: ['acute', 'acute triangle'], explanation: 'All three angles (30°, 75°, 75°) are less than 90°, so the triangle is acute.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="89.7,140 130.3,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 114.7,140 A 28,28 0 0 1 104.7,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="119.7" y="126" font-size="13" fill="#ea580c" font-weight="700">5</text><path d="M 105.3,140 A 28,28 0 0 0 115.3,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="100.3" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">5</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#ea580c" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">2</text></svg>' },
        { difficulty: 'Hard', question: 'Palesa says: "A triangle with sides 6 cm, 6 cm and 13 cm exists — it is just a very thin isosceles triangle." Is she correct? Explain using the triangle inequality.', answer: 'No — the triangle inequality requires the sum of any two sides to be greater than the third side. Here 6 + 6 = 12, which is less than 13, so the two short sides cannot reach each other to close the triangle. This triangle is impossible.', checkMode: 'self', explanation: 'Triangle inequality check: 6 + 6 = 12 < 13. Since the sum of the two shorter sides is less than the longest side, no such triangle can be formed — the two 6 cm sides would not be long enough to meet and close the shape.' },

        // Block C — quadrilateral properties & angle-sum
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three angles are 84°, 97° and 120°. Find the fourth angle.', answer: '59°', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], explanation: 'Fourth angle = 360° − 84° − 97° − 120° = 59°. Check: 84+97+120+59 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">84°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">97°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">120°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram, as shown, has one angle of 63°. Find the size of the largest angle in the parallelogram.', answer: '117°', checkMode: 'auto', correctAnswer: '117', correctAnswers: ['117', '117°', '117 degrees'], explanation: 'Opposite angles in a parallelogram are equal, so the angle opposite 63° is also 63°. Adjacent angles are supplementary: 180° − 63° = 117°. The largest angle is 117°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">63°</text></svg>' },
        { difficulty: 'Medium', question: 'A kite ABCD, as shown, has AB = 6,5 cm and BC = 9 cm. Find the perimeter of the kite.', answer: '31 cm', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31cm', '31 cm'], explanation: 'In a kite, AD = AB = 6,5 cm and DC = BC = 9 cm. Perimeter = AB + BC + DC + AD = 6,5 + 9 + 9 + 6,5 = 31 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">6,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium, as shown, has co-interior base angles of 71° and 109° between the parallel sides. Bongiwe says these two angles prove the base sides are parallel. Is she correct? Explain.', answer: 'Yes — 71° + 109° = 180°, and co-interior angles between two lines add to 180° only when the lines are parallel. This confirms the base sides are parallel.', checkMode: 'self', explanation: '71 + 109 = 180°. Since co-interior (allied) angles sum to exactly 180° only when the two lines they lie between are parallel, this confirms the base sides of the trapezium are parallel — consistent with the definition of a trapezium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">71°</text><text x="80" y="60" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">109°</text></svg>' },

        // Block D — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a nonagon (9 sides).', answer: '1260°', checkMode: 'auto', correctAnswer: '1260', correctAnswers: ['1260', '1260°', '1260 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For a nonagon, n = 9: (9 − 2) × 180 = 7 × 180 = 1260°.' },
        { difficulty: 'Medium-Hard', question: 'A regular pentadecagon (15 sides) has all equal interior angles. Find the size of each interior angle.', answer: '156°', checkMode: 'auto', correctAnswer: '156', correctAnswers: ['156', '156°', '156 degrees'], explanation: 'Sum of interior angles = (15 − 2) × 180 = 13 × 180 = 2340°. Each angle = 2340° ÷ 15 = 156°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 18° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '20 sides', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 sides', 'twenty', 'twenty sides', 'icosagon'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 18° = 20.' },

        // Block E — similarity vs congruency reasoning
        { difficulty: 'Easy', question: 'Two triangles have exactly the same shape and exactly the same size — every corresponding side and angle matches. Are these triangles congruent or similar?', answer: 'congruent', checkMode: 'auto', correctAnswer: 'congruent', correctAnswers: ['congruent'], explanation: 'Shapes that are identical in both shape and size (all corresponding sides and angles equal) are congruent.' },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 3 : 8. The smaller triangle\'s side is 12 cm. Find the corresponding side in the larger triangle.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'Set up the proportion: 3/8 = 12/x. Cross-multiply: 3x = 96. x = 96 ÷ 3 = 32 cm. Check: 12/32 = 3/8 ✓' },
        { difficulty: 'Hard', question: 'Vusi says: "If two triangles have all three pairs of corresponding angles equal, they must also be congruent." Is he correct? Explain.', answer: 'No — equal corresponding angles only guarantee the triangles are similar (same shape). Congruency additionally requires the corresponding sides to be equal in length (same size), which is not guaranteed just by matching angles.', checkMode: 'self', explanation: 'Matching angles fix the shape of a triangle but not its size — you can enlarge or shrink a triangle and keep all its angles the same. So equal angles alone give similarity, not congruency. Congruency needs equal angles AND equal corresponding side lengths.' },

        // Block F — multi-step / applied
        { difficulty: 'Medium', question: 'A regular hexagon, as shown, has sides of 8,5 cm. Find its perimeter, and state the size of each interior angle using the polygon angle formula.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Perimeter', correctAnswer: '51', correctAnswers: ['51', '51cm', '51 cm'], explanation: 'A regular hexagon has 6 equal sides. Perimeter = 6 × 8,5 = 51 cm.' }, { label: 'b) Each interior angle', correctAnswer: '120', correctAnswers: ['120', '120°', '120 degrees'], explanation: 'Sum of interior angles = (6 − 2) × 180 = 720°. Each angle = 720° ÷ 6 = 120°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 160.2,61 160.2,119 110,148 59.8,119 59.8,61" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180.2" y="90" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 2 : 7. The smaller triangle has a perimeter of 18 cm. Find the perimeter of the larger triangle, and explain what this tells you about the relationship between the ratio of sides and the ratio of perimeters.', answer: 'Larger perimeter = 63 cm. The ratio of the perimeters (18:63 = 2:7) is exactly the same as the ratio of corresponding sides, because the perimeter of a similar shape scales by the same factor as its sides.', checkMode: 'self', explanation: 'Set up the proportion using the scale factor: 2/7 = 18/x. Cross-multiply: 2x = 126, so x = 63 cm. Since every side of the larger triangle is 7/2 times the corresponding side of the smaller triangle, the perimeter (the sum of all sides) is also 7/2 times as large — confirming the ratio of perimeters always matches the ratio of sides for similar shapes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered triangle and quadrilateral angle reasoning, dual classification, polygon formulas, and similarity/congruency.' },
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
        // Block A — triangle angle-sum & exterior angle theorem
        { difficulty: 'Easy', question: 'In the triangle shown, two of the interior angles are 61° and 88°. Find the third angle.', answer: '31°', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31°', '31 degrees'], explanation: 'Third angle = 180° − 61° − 88° = 31°. Check: 61 + 88 + 31 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,140 172,140 148,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 85,140 A 28,28 0 0 1 75,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="90" y="128" font-size="14" fill="#2563eb" font-weight="700">61°</text><path d="M 147,140 A 28,28 0 0 0 159,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><path d="M 137,38 A 18,18 0 0 1 159,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="148" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, two interior angles are 82° and 54°. One side is extended to form an exterior angle at the third vertex. Use the exterior angle theorem to find this exterior angle.', answer: '136°', checkMode: 'auto', correctAnswer: '136', correctAnswers: ['136', '136°', '136 degrees'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two non-adjacent interior angles: 82° + 54° = 136°. Check: the interior angle at that vertex = 180 − 82 − 54 = 44°, and 180 − 44 = 136° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="36.8,140 153.2,140 67.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="153.2" y1="140" x2="188.2" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58.8,140 A 24,24 0 0 1 49.8,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63.8" y="130" font-size="13" fill="#2563eb" font-weight="700">82°</text><path d="M 63.5,58 A 18,18 0 0 1 79.4,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="71.4" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">54°</text><path d="M 171.2,140 A 18,18 0 0 1 166.2,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="179.2" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 2:5:5. Find the size of each angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Smallest angle', correctAnswer: '30', correctAnswers: ['30', '30°', '30 degrees'], explanation: 'Total parts = 2+5+5 = 12. One part = 180 ÷ 12 = 15°. Smallest angle = 2 × 15 = 30°.' }, { label: 'b) One of the two equal angles', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Each equal angle = 5 × 15 = 75°.' }, { label: 'c) The other equal angle', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'The other equal angle is also 75°. Check: 30 + 75 + 75 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Karabo says: "In the triangle shown, if I know the exterior angle at one vertex is 115°, I can always work out the interior angle at that same vertex without any other information." Is she correct? Explain, then state the interior angle for this case.', answer: 'Yes — the interior and exterior angle at the same vertex lie on a straight line, so they are supplementary (add to 180°). Interior angle = 180° − 115° = 65°.', checkMode: 'self', explanation: 'An interior angle and its adjacent exterior angle always add up to 180° because they lie on a straight line, regardless of the other two angles in the triangle. Here, interior angle = 180° − 115° = 65°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">115°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Block B — triangle classification by sides and angles (dual)
        { difficulty: 'Easy', question: 'A triangle has three sides of 7 cm, 7 cm and 7 cm, with all three angles equal to 60°, as shown. Classify this triangle by both its sides and its angles.', answer: 'equilateral, acute triangle', checkMode: 'auto', correctAnswer: 'equilateral acute', correctAnswers: ['equilateral acute', 'equilateral, acute', 'acute equilateral', 'equilateral and acute'], explanation: 'All 3 sides are equal (7 cm each), so it is equilateral. All 3 angles (60° each) are less than 90°, so it is also acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">7 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides of 8 cm, 15 cm and 17 cm, as shown. One of its angles measures exactly 90°. Classify this triangle by both its sides and its angles.', answer: 'scalene, right-angled triangle', checkMode: 'auto', correctAnswer: 'scalene right-angled', correctAnswers: ['scalene right-angled', 'scalene, right-angled', 'right-angled scalene', 'scalene and right-angled', 'scalene right angled'], explanation: 'All 3 sides (8 cm, 15 cm, 17 cm) are different lengths, so it is scalene. Since one angle is exactly 90°, it is also right-angled — note that 8² + 15² = 64 + 225 = 289 = 17², confirming the right angle sits opposite the 17 cm side.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,64 160,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="102" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text><text x="97" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="105" y="96" font-size="13" fill="#2563eb" font-weight="700">17 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 1:3:5, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The smallest angle', correctAnswer: '20', correctAnswers: ['20', '20°', '20 degrees'], explanation: 'Total parts = 1+3+5 = 9. One part = 180 ÷ 9 = 20°. Smallest angle = 1 × 20 = 20°.' }, { label: 'b) The middle angle', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middle angle = 3 × 20 = 60°.' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'obtuse', correctAnswers: ['obtuse', 'obtuse triangle'], explanation: 'Largest angle = 5 × 20 = 100°. Since one angle (100°) is greater than 90°, the triangle is obtuse. Check: 20 + 60 + 100 = 180 ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 66,64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">1</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">5</text><path d="M 59.8,77 A 16,16 0 0 1 87.2,77" fill="none" stroke="#ea580c" stroke-width="2"/><text x="73.5" y="95" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">3</text></svg>' },
        { difficulty: 'Hard', question: 'Sizwe says: "A triangle with sides 5 cm, 5 cm and 11 cm exists — it is just a very thin isosceles triangle." Is he correct? Explain using the triangle inequality.', answer: 'No — the triangle inequality requires the sum of any two sides to be greater than the third side. Here 5 + 5 = 10, which is less than 11, so the two short sides cannot reach each other to close the triangle. This triangle is impossible.', checkMode: 'self', explanation: 'Triangle inequality check: 5 + 5 = 10 < 11. Since the sum of the two shorter sides is less than the longest side, no such triangle can be formed — the two 5 cm sides would not be long enough to meet and close the shape.' },

        // Block C — quadrilateral properties & angle-sum
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three angles are 76°, 142° and 58°. Find the fourth angle.', answer: '84°', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84°', '84 degrees'], explanation: 'Fourth angle = 360° − 76° − 142° − 58° = 84°. Check: 76+142+58+84 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">76°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">142°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">58°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A rhombus, as shown, has one angle of 84°. Find the size of the largest angle in the rhombus.', answer: '96°', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96°', '96 degrees'], explanation: 'Opposite angles in a rhombus are equal, so the angle opposite 84° is also 84°. Adjacent angles are supplementary: 180° − 84° = 96°. The four angles are 84°, 96°, 84°, 96°, so the largest angle is 96°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,35 180,85 110,135 40,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52" y="90" font-size="14" fill="#2563eb" font-weight="700">84°</text></svg>' },
        { difficulty: 'Medium', question: 'A kite ABCD, as shown, has AB = 5,5 cm and BC = 8 cm. Find the perimeter of the kite.', answer: '27 cm', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27cm', '27 cm'], explanation: 'In a kite, AD = AB = 5,5 cm and DC = BC = 8 cm. Perimeter = AB + BC + DC + AD = 5,5 + 8 + 8 + 5,5 = 27 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">5,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium, as shown, has co-interior base angles of 64° and 116° between the parallel sides. Ntando says these two angles prove the base sides are parallel. Is he correct? Explain.', answer: 'Yes — 64° + 116° = 180°, and co-interior angles between two lines add to 180° only when the lines are parallel. This confirms the base sides are parallel.', checkMode: 'self', explanation: '64 + 116 = 180°. Since co-interior (allied) angles sum to exactly 180° only when the two lines they lie between are parallel, this confirms the base sides of the trapezium are parallel — consistent with the definition of a trapezium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">64°</text><text x="80" y="60" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">116°</text></svg>' },

        // Block D — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a hendecagon (11 sides).', answer: '1620°', checkMode: 'auto', correctAnswer: '1620', correctAnswers: ['1620', '1620°', '1620 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For an 11-sided polygon, n = 11: (11 − 2) × 180 = 9 × 180 = 1620°.' },
        { difficulty: 'Medium-Hard', question: 'A regular polygon with 18 sides has all equal interior angles. Find the size of each interior angle.', answer: '160°', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160°', '160 degrees'], explanation: 'Sum of interior angles = (18 − 2) × 180 = 16 × 180 = 2880°. Each angle = 2880° ÷ 18 = 160°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 15° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '24 sides', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 sides', 'twenty-four', 'twenty four sides'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 15° = 24.' },

        // Block E — similarity vs congruency reasoning
        { difficulty: 'Easy', question: 'Two triangles have the same angles but different side lengths — one is an enlargement of the other. Are these triangles congruent or similar?', answer: 'similar', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar'], explanation: 'Shapes with the same shape (equal angles, sides in proportion) but different sizes are similar, not congruent.' },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 4 : 9. The smaller triangle\'s side is 16 cm. Find the corresponding side in the larger triangle.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36cm', '36 cm'], explanation: 'Set up the proportion: 4/9 = 16/x. Cross-multiply: 4x = 144. x = 144 ÷ 4 = 36 cm. Check: 16/36 = 4/9 ✓' },
        { difficulty: 'Hard', question: 'Refilwe says: "If two quadrilaterals have all four pairs of corresponding sides in proportion, they must also be similar." Is she correct? Explain.', answer: 'No — unlike triangles, quadrilaterals can have proportional sides but different angles (for example, a square and a non-square rhombus can have proportional sides but different angle sets), so similarity also requires all corresponding angles to be equal.', checkMode: 'self', explanation: 'For similarity, BOTH conditions are required: corresponding angles equal AND corresponding sides in proportion. For triangles, having sides in a fixed ratio actually forces the angles to match too, but for quadrilaterals (and other polygons with 4+ sides) the shape is not rigidly fixed by side ratios alone — the angles can differ even if the sides are proportional, so proportional sides do not guarantee similarity for quadrilaterals.' },

        // Block F — multi-step / applied
        { difficulty: 'Medium', question: 'A regular pentagon, as shown, has sides of 7,5 cm. Find its perimeter, and state the size of each interior angle using the polygon angle formula.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Perimeter', correctAnswer: '37.5', correctAnswers: ['37.5', '37,5', '37.5cm', '37,5cm', '37.5 cm', '37,5 cm'], explanation: 'A regular pentagon has 5 equal sides. Perimeter = 5 × 7,5 = 37,5 cm.' }, { label: 'b) Each interior angle', correctAnswer: '108', correctAnswers: ['108', '108°', '108 degrees'], explanation: 'Sum of interior angles = (5 − 2) × 180 = 540°. Each angle = 540° ÷ 5 = 108°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 165.2,72.1 144.1,136.9 75.9,136.9 54.8,72.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="156.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 3 : 5. The smaller triangle has a perimeter of 24 cm. Find the perimeter of the larger triangle, and explain what this tells you about the relationship between the ratio of sides and the ratio of perimeters.', answer: 'Larger perimeter = 40 cm. The ratio of the perimeters (24:40 = 3:5) is exactly the same as the ratio of corresponding sides, because the perimeter of a similar shape scales by the same factor as its sides.', checkMode: 'self', explanation: 'Set up the proportion using the scale factor: 3/5 = 24/x. Cross-multiply: 3x = 120, so x = 40 cm. Since every side of the larger triangle is 5/3 times the corresponding side of the smaller triangle, the perimeter (the sum of all sides) is also 5/3 times as large — confirming the ratio of perimeters always matches the ratio of sides for similar shapes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently apply angle theorems, dual classification, polygon formulas, and similarity/congruency reasoning.' },
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
        // Block A — triangle angle-sum & exterior angle theorem
        { difficulty: 'Easy', question: 'In the triangle shown, two of the interior angles are 47° and 71°. Find the third angle.', answer: '62°', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62°', '62 degrees'], explanation: 'Third angle = 180° − 47° − 71° = 62°. Check: 47 + 71 + 62 = 180 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="55,140 168,140 118,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 80,140 A 28,28 0 0 1 70,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="85" y="128" font-size="14" fill="#2563eb" font-weight="700">47°</text><path d="M 143,140 A 28,28 0 0 0 155,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="126" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">71°</text><path d="M 107,38 A 18,18 0 0 1 129,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="118" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, two interior angles are 39° and 96°. One side is extended to form an exterior angle at the third vertex. Use the exterior angle theorem to find this exterior angle.', answer: '135°', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135°', '135 degrees'], explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two non-adjacent interior angles: 39° + 96° = 135°. Check: the interior angle at that vertex = 180 − 39 − 96 = 45°, and 180 − 45 = 135° ✓', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30.5,140 159.5,140 42.2,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="159.5" y1="140" x2="194.5" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 52.5,140 A 24,24 0 0 1 43.5,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="57.5" y="130" font-size="13" fill="#2563eb" font-weight="700">39°</text><path d="M 40.6,58 A 18,18 0 0 1 58.3,58" fill="none" stroke="#2563eb" stroke-width="2"/><text x="49.5" y="78" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">96°</text><path d="M 177.5,140 A 18,18 0 0 1 172.5,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="185.5" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 1:3:5. Find the size of each angle.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Smallest angle', correctAnswer: '20', correctAnswers: ['20', '20°', '20 degrees'], explanation: 'Total parts = 1+3+5 = 9. One part = 180 ÷ 9 = 20°. Smallest angle = 1 × 20 = 20°.' }, { label: 'b) Middle angle', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middle angle = 3 × 20 = 60°.' }, { label: 'c) Largest angle', correctAnswer: '100', correctAnswers: ['100', '100°', '100 degrees'], explanation: 'Largest angle = 5 × 20 = 100°. Check: 20 + 60 + 100 = 180 ✓' } ] },
        { difficulty: 'Hard', question: 'Andile says: "In the triangle shown, if I know the exterior angle at one vertex is 152°, I can always work out the interior angle at that same vertex without any other information." Is he correct? Explain, then state the interior angle for this case.', answer: 'Yes — the interior and exterior angle at the same vertex lie on a straight line, so they are supplementary (add to 180°). Interior angle = 180° − 152° = 28°.', checkMode: 'self', explanation: 'An interior angle and its adjacent exterior angle always add up to 180° because they lie on a straight line, regardless of the other two angles in the triangle. Here, interior angle = 180° − 152° = 28°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#ea580c" font-weight="700">152°</text><text x="145" y="130" font-size="14" fill="#2563eb" font-weight="700">?</text></svg>' },

        // Block B — triangle classification by sides and angles (dual)
        { difficulty: 'Easy', question: 'A triangle has three sides of 9 cm, 9 cm and 9 cm, with all three angles equal to 60°, as shown. Classify this triangle by both its sides and its angles.', answer: 'equilateral, acute triangle', checkMode: 'auto', correctAnswer: 'equilateral acute', correctAnswers: ['equilateral acute', 'equilateral, acute', 'acute equilateral', 'equilateral and acute'], explanation: 'All 3 sides are equal (9 cm each), so it is equilateral. All 3 angles (60° each) are less than 90°, so it is also acute.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="43.6,140 176.4,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="82" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="149" y="82" font-size="13" fill="#2563eb" font-weight="700">9 cm</text><text x="110" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><path d="M 68.6,140 A 28,28 0 0 1 58.6,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="73.6" y="110" font-size="12" fill="#2563eb" font-weight="700">60°</text><path d="M 151.4,140 A 28,28 0 0 0 161.4,118" fill="none" stroke="#2563eb" stroke-width="2"/><text x="146.4" y="110" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has sides of 5 cm, 12 cm and 13 cm, as shown. One of its angles measures exactly 90°. Classify this triangle by both its sides and its angles.', answer: 'scalene, right-angled triangle', checkMode: 'auto', correctAnswer: 'scalene right-angled', correctAnswers: ['scalene right-angled', 'scalene, right-angled', 'right-angled scalene', 'scalene and right-angled', 'scalene right angled'], explanation: 'All 3 sides (5 cm, 12 cm, 13 cm) are different lengths, so it is scalene. Since one angle is exactly 90°, it is also right-angled — note that 5² + 12² = 25 + 144 = 169 = 13², confirming the right angle sits opposite the 13 cm side.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,72 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#2563eb" stroke-width="2"/><text x="20" y="106" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5 cm</text><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="105" y="100" font-size="13" fill="#2563eb" font-weight="700">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle has angles in the ratio 3:4:5, as shown. Find each angle, then classify the triangle by its angles.', answer: '', checkMode: 'auto', parts: [ { label: 'a) The smallest angle', correctAnswer: '45', correctAnswers: ['45', '45°', '45 degrees'], explanation: 'Total parts = 3+4+5 = 12. One part = 180 ÷ 12 = 15°. Smallest angle = 3 × 15 = 45°.' }, { label: 'b) The middle angle', correctAnswer: '60', correctAnswers: ['60', '60°', '60 degrees'], explanation: 'Middle angle = 4 × 15 = 60°.' }, { label: 'c) Classify the triangle by its angles', correctAnswer: 'acute', correctAnswers: ['acute', 'acute triangle'], explanation: 'Largest angle = 5 × 15 = 75°. All three angles (45°, 60°, 75°) are less than 90°, so the triangle is acute. Check: 45 + 60 + 75 = 180 ✓' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 190,140 137.8,49.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 28,28 0 0 1 45,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="126" font-size="13" fill="#ea580c" font-weight="700">3</text><path d="M 165,140 A 28,28 0 0 0 175,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="160" y="126" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">4</text><path d="M 128,61 A 16,16 0 0 1 148,61" fill="none" stroke="#ea580c" stroke-width="2"/><text x="138" y="79" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">5</text></svg>' },
        { difficulty: 'Hard', question: 'Thandeka says: "A triangle with sides 4 cm, 4 cm and 9 cm exists — it is just a very thin isosceles triangle." Is she correct? Explain using the triangle inequality.', answer: 'No — the triangle inequality requires the sum of any two sides to be greater than the third side. Here 4 + 4 = 8, which is less than 9, so the two short sides cannot reach each other to close the triangle. This triangle is impossible.', checkMode: 'self', explanation: 'Triangle inequality check: 4 + 4 = 8 < 9. Since the sum of the two shorter sides is less than the longest side, no such triangle can be formed — the two 4 cm sides would not be long enough to meet and close the shape.' },

        // Block C — quadrilateral properties & angle-sum
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three angles are 63°, 155° and 88°. Find the fourth angle.', answer: '54°', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54°', '54 degrees'], explanation: 'Fourth angle = 360° − 63° − 155° − 88° = 54°. Check: 63+155+88+54 = 360 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">63°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">155°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">88°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'A parallelogram, as shown, has one angle of 47°. Find the size of the largest angle in the parallelogram.', answer: '133°', checkMode: 'auto', correctAnswer: '133', correctAnswers: ['133', '133°', '133 degrees'], explanation: 'Opposite angles in a parallelogram are equal, so the angle opposite 47° is also 47°. Adjacent angles are supplementary: 180° − 47° = 133°. The largest angle is 133°.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">47°</text></svg>' },
        { difficulty: 'Medium', question: 'A kite ABCD, as shown, has AB = 4,5 cm and BC = 10 cm. Find the perimeter of the kite.', answer: '29 cm', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], explanation: 'In a kite, AD = AB = 4,5 cm and DC = BC = 10 cm. Perimeter = AB + BC + DC + AD = 4,5 + 10 + 10 + 4,5 = 29 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 165,75 110,145 55,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="145" y="55" font-size="13" fill="#2563eb" font-weight="700">4,5 cm</text><text x="145" y="115" font-size="13" fill="#2563eb" font-weight="700">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A trapezium, as shown, has co-interior base angles of 58° and 122° between the parallel sides. Zinhle says these two angles prove the base sides are parallel. Is she correct? Explain.', answer: 'Yes — 58° + 122° = 180°, and co-interior angles between two lines add to 180° only when the lines are parallel. This confirms the base sides are parallel.', checkMode: 'self', explanation: '58 + 122 = 180°. Since co-interior (allied) angles sum to exactly 180° only when the two lines they lie between are parallel, this confirms the base sides of the trapezium are parallel — consistent with the definition of a trapezium.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">58°</text><text x="80" y="60" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">122°</text></svg>' },

        // Block D — polygon interior/exterior angle formulas
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a heptagon (7 sides).', answer: '900°', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900', '900°', '900 degrees'], explanation: 'Sum of interior angles = (n − 2) × 180°. For a heptagon, n = 7: (7 − 2) × 180 = 5 × 180 = 900°.' },
        { difficulty: 'Medium-Hard', question: 'A regular icosagon (20 sides) has all equal interior angles. Find the size of each interior angle.', answer: '162°', checkMode: 'auto', correctAnswer: '162', correctAnswers: ['162', '162°', '162 degrees'], explanation: 'Sum of interior angles = (20 − 2) × 180 = 18 × 180 = 3240°. Each angle = 3240° ÷ 20 = 162°.' },
        { difficulty: 'Hard', question: 'A regular polygon has an exterior angle of 20° at every vertex. Using the fact that the exterior angles of any polygon add up to 360°, find the number of sides of the polygon.', answer: '18 sides', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18 sides', 'eighteen', 'eighteen sides'], explanation: 'The exterior angles of any polygon sum to 360°. Number of sides = 360° ÷ 20° = 18.' },

        // Block E — similarity vs congruency reasoning
        { difficulty: 'Easy', question: 'Two rectangles have the same angles (all 90°) and sides in proportion, but one is larger than the other. Are these rectangles congruent or similar?', answer: 'similar', checkMode: 'auto', correctAnswer: 'similar', correctAnswers: ['similar'], explanation: 'Shapes with the same shape but different sizes are similar, not congruent — congruent shapes must also match in size.' },
        { difficulty: 'Medium', question: 'Two similar triangles have corresponding sides in the ratio 5 : 6. The smaller triangle\'s side is 20 cm. Find the corresponding side in the larger triangle.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'Set up the proportion: 5/6 = 20/x. Cross-multiply: 5x = 120. x = 120 ÷ 5 = 24 cm. Check: 20/24 = 5/6 ✓' },
        { difficulty: 'Hard', question: 'Mpho says: "Congruent triangles are a special case of similar triangles." Is she correct? Explain using the idea of scale factor.', answer: 'Yes — congruent triangles satisfy every condition for similarity (equal angles, sides in proportion) with a scale factor of exactly 1, meaning the sides are not just proportional but actually equal. So congruency is similarity with a scale factor of 1.', checkMode: 'self', explanation: 'Similarity requires equal angles and sides in a constant ratio (scale factor). When that scale factor equals 1, corresponding sides are not just proportional but identical in length, which is exactly the extra condition needed for congruency. So every congruent pair of triangles is automatically similar, but not every similar pair is congruent (only those with scale factor 1 are).' },

        // Block F — multi-step / applied
        { difficulty: 'Medium', question: 'A regular octagon, as shown, has sides of 6,5 cm. Find its perimeter, and state the size of each interior angle using the polygon angle formula.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Perimeter', correctAnswer: '52', correctAnswers: ['52', '52cm', '52 cm'], explanation: 'A regular octagon has 8 equal sides. Perimeter = 8 × 6,5 = 52 cm.' }, { label: 'b) Each interior angle', correctAnswer: '135', correctAnswers: ['135', '135°', '135 degrees'], explanation: 'Sum of interior angles = (8 − 2) × 180 = 1080°. Each angle = 1080° ÷ 8 = 135°.' } ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,32 151,49 168,90 151,131 110,148 69,131 52,90 69,49" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="178.0" y="118.2" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6,5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Two similar triangles have corresponding sides in the ratio 4 : 11. The smaller triangle has a perimeter of 20 cm. Find the perimeter of the larger triangle, and explain what this tells you about the relationship between the ratio of sides and the ratio of perimeters.', answer: 'Larger perimeter = 55 cm. The ratio of the perimeters (20:55 = 4:11) is exactly the same as the ratio of corresponding sides, because the perimeter of a similar shape scales by the same factor as its sides.', checkMode: 'self', explanation: 'Set up the proportion using the scale factor: 4/11 = 20/x. Cross-multiply: 4x = 220, so x = 55 cm. Since every side of the larger triangle is 11/4 times the corresponding side of the smaller triangle, the perimeter (the sum of all sides) is also 11/4 times as large — confirming the ratio of perimeters always matches the ratio of sides for similar shapes.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You can apply angle theorems, dual classification, polygon formulas, and similarity/congruency reasoning to real-world contexts.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
