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
        '<DiagramPlaceholder label="Side-by-side comparison of a rhombus and a kite, labelling equal sides in blue, parallel sides in green, and angles in orange on each shape" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the formal definitions of triangles and quadrilaterals using colour-coded diagrams of equal sides, parallel sides, and angles" />',
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
        '<DiagramPlaceholder label="Two triangles of different sizes but identical angles labelled similar in orange; two identical squares labelled congruent in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify congruent and similar shapes by comparing side lengths and angles, with colour-coded matching angles in green" />',
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
        '<DiagramPlaceholder label="Worked examples showing a kite ABCD with equal adjacent sides labelled in blue, two similar triangles with proportion set up, and a parallelogram with all four angles marked in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use known properties of quadrilaterals and similar triangles to find unknown sides and angles step by step" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of 2D shapes.' },
    { minScore: 12, message: 'Great work! You have a strong grasp of 2D geometry. Review any missed questions and aim for a perfect score.' },
    { minScore: 8, message: 'Good effort! Work back through the study guide and try again — you are on the right track.' },
    { minScore: 0, message: 'Keep going! Work through the guide again, focusing on the definitions and properties, then try again.' },
  ],
}
