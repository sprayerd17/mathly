import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ────────────────────────────────────────
// shape names       → blue   (#2563eb)
// number of sides   → orange (#ea580c)
// number of corners → green  (#16a34a)
// different sides   → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// CAPS Grade 5 content clarification for 2-D shapes states: "They need to be
// able to identify and name[] squares and rectangles, for other
// quadrilaterals they use the group name, quadrilateral in Grade 5" and
// "Learners should be exposed to a range of different triangles, but are
// not expected to name types of triangles in Grade 5." Naming triangle
// types (equilateral/isosceles/scalene) and quadrilateral types beyond
// square/rectangle (rhombus, parallelogram, trapezium) never appears
// anywhere in the Grade 4-6 CAPS document — parallelogram is only named
// from Grade 6, and rhombus/trapezium/triangle-type names are Senior Phase
// (Grade 7+) content. Kept here as clearly labelled enrichment rather than
// removed, since the material is accurate and well-built.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: '2D Shapes',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE 2D SHAPES?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-introduction',
      title: 'What are 2D Shapes?',
      icon: '⬜',
      explanation:
        `<p style="margin-bottom:16px;">2D shapes are <strong>flat shapes</strong> that have only length and width — no thickness. 2D stands for <strong>two-dimensional</strong>. Every 2D shape has ${or('sides')} and ${gr('corners')} (also called vertices). We describe 2D shapes by counting their ${or('sides')} and ${gr('corners')} and looking at whether their ${or('sides')} are straight or curved.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape names')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('number of sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('number of corners')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">2D Shape</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A flat shape with only length and width — no thickness.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Side</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A straight or curved line that forms the edge of a shape.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Corner (Vertex)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The point where two sides of a shape meet.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Right Angle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A square corner that measures exactly 90 degrees.</p>` +
        `</div>` +

        `</div>` +

        // ── Common 2D shapes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common 2D shapes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Square')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 equal sides')} · ${gr('4 corners')} · all right angles</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Rectangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 sides')} · ${gr('4 corners')} · opposite sides equal</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Triangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('3 sides')} · ${gr('3 corners')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Circle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('1 curved side')} · ${gr('0 corners')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to describe any 2D shape</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always count the ${or('sides')} first, then the ${gr('corners')}. Check whether the ${or('sides')} are straight or curved, and whether any corners are right angles. These three observations fully describe any 2D shape.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe a rectangle.',
          answer: `A ${bl('rectangle')} is a 2D shape with ${or('4 sides')} and ${gr('4 corners')} (right angles)`,
          steps: [
            `Count the ${or('sides')} — a ${bl('rectangle')} has ${or('4 sides')}.`,
            `Count the ${gr('corners')} — a ${bl('rectangle')} has ${gr('4 corners')}.`,
            `Look at the ${or('sides')} — opposite ${or('sides')} are equal in length.`,
            `All ${gr('corners')} are right angles (90 degrees).`,
            `A ${bl('rectangle')} is a 2D shape with ${or('4 sides')} and ${gr('4 corners')} — all right angles. ✓`,
          ],
        },
        {
          question: 'What is the difference between a square and a rectangle?',
          answer: `A ${bl('square')} has ${or('4 equal sides')}; a ${bl('rectangle')} has ${or('4 sides')} where only opposite sides are equal`,
          steps: [
            `A ${bl('square')} has ${or('4 equal sides')} and ${gr('4 right angles')}.`,
            `A ${bl('rectangle')} has ${or('4 sides')} but only opposite ${or('sides')} are equal.`,
            `All angles in both a ${bl('square')} and a ${bl('rectangle')} are right angles (${gr('4 corners')} of 90 degrees each).`,
            `The difference is that a ${bl('square')} has all ${or('4 sides')} equal, while a ${bl('rectangle')} does not. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing common 2D shapes — square rectangle triangle and circle — each labelled with the number of sides in orange and corners in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing 2D shapes showing how to identify sides and corners and describe common shapes like squares rectangles triangles and circles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles',
      title: 'Triangles',
      icon: '△',
      explanation:
        lookingAhead(
          'naming triangle types',
          'CAPS Grade 5 expects learners to be exposed to a range of different triangles, but they are not expected to name types of triangles (equilateral, isosceles, scalene) in Grade 5 — this is Senior Phase (Grade 7+) content, shown here for learners who want to see where this is heading.'
        ) +
        `<p style="margin-bottom:16px;">A ${bl('triangle')} is a 2D shape with ${or('3 sides')} and ${gr('3 corners')}. Triangles are named and sorted according to the lengths of their ${or('sides')}. There are three types of triangles.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('triangle types')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equal sides')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('different sides')}</span>` +
        `</div>` +

        // ── Three types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three types of triangles</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Equilateral triangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('3 equal sides')} and ${gr('3 equal angles')} of 60° each.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Isosceles triangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('2 equal sides')} and ${gr('2 equal angles')}. The third side is ${re('different')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Scalene triangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('No equal sides')} and ${re('no equal angles')} — all three sides are ${re('different')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to identify a triangle type</p>` +
        `<p style="margin:0;color:#1e3a8a;">Count the ${gr('equal sides')}. If all ${or('3 sides')} are equal → ${bl('equilateral')}. If ${gr('2 sides')} are equal → ${bl('isosceles')}. If ${re('no sides')} are equal → ${bl('scalene')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho draws a triangle with sides of 5 cm, 5 cm and 3 cm. What type of triangle is it?',
          answer: `It is an ${bl('isosceles triangle')}`,
          steps: [
            `Count the ${gr('equal sides')} — two sides are ${gr('5 cm')} and one side is ${re('3 cm')}.`,
            `Two sides are equal so this is an ${bl('isosceles triangle')}.`,
            `It also has ${gr('two equal angles')} at the base.`,
          ],
        },
        {
          question: 'A triangle has all three sides measuring 4 cm. What type is it and how many lines of symmetry does it have?',
          answer: `It is an ${bl('equilateral triangle')} with ${gr('3 lines of symmetry')}`,
          steps: [
            `All three sides are ${gr('equal')} (${gr('4 cm')}, ${gr('4 cm')}, ${gr('4 cm')}) so this is an ${bl('equilateral triangle')}.`,
            `An ${bl('equilateral triangle')} has ${gr('3 lines of symmetry')} — one from each corner to the middle of the opposite side.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the three types of triangles — equilateral with 3 equal sides in green isosceles with 2 equal sides in green and 1 different side in red scalene with all sides in red — each labelled with side lengths" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the three types of triangles — equilateral isosceles and scalene — and how to identify each by counting equal sides" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadrilaterals',
      title: 'Quadrilaterals',
      icon: '▭',
      explanation:
        lookingAhead(
          'naming quadrilateral types beyond square and rectangle',
          'CAPS Grade 5 expects learners to identify and name only squares and rectangles by name — for other quadrilaterals, Grade 5 learners use the group name "quadrilateral". Parallelogram is only introduced as a named shape in Grade 6, and rhombus and trapezium are Senior Phase (Grade 7+) content — shown here for learners who want to see where this is heading.'
        ) +
        `<p style="margin-bottom:16px;">A <strong>quadrilateral</strong> is any 2D shape with ${or('4 sides')} and ${or('4 corners')}. There are several types of quadrilaterals, each with its own special properties.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape names')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('right angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equal sides')}</span>` +
        `</div>` +

        // ── Types of quadrilaterals ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of quadrilaterals</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Square')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 equal sides')} and ${or('4 right angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Rectangle')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Opposite ${gr('sides equal')} and ${or('4 right angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Rhombus')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 equal sides')} but no ${or('right angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Parallelogram')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Opposite ${gr('sides equal')} and parallel — no ${or('right angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Trapezium')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Only one pair of parallel sides.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to identify a quadrilateral</p>` +
        `<p style="margin:0;color:#1e3a8a;">Count the sides first — if there are ${or('4 sides')} and ${or('4 corners')}, it is a quadrilateral. Then check whether the sides are ${gr('equal')} and whether the corners are ${or('right angles')} to find the specific type.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How is a rhombus different from a square?',
          answer: `A ${bl('rhombus')} has ${gr('4 equal sides')} but no ${or('right angles')}; a ${bl('square')} has ${gr('4 equal sides')} AND ${or('4 right angles')}`,
          steps: [
            `A ${bl('rhombus')} has ${gr('4 equal sides')} just like a ${bl('square')}.`,
            `But a ${bl('rhombus')} does not have ${or('right angles')} — its corners are not ${or('90 degrees')}.`,
            `A ${bl('square')} has ${gr('4 equal sides')} AND ${or('4 right angles')}.`,
            `So a ${bl('square')} is a special type of ${bl('rhombus')}.`,
          ],
        },
        {
          question: 'Lerato says all squares are rectangles but not all rectangles are squares. Is she correct?',
          answer: `Yes — a ${bl('square')} meets all the requirements of a ${bl('rectangle')}, but a ${bl('rectangle')} does not need ${gr('all 4 sides equal')}`,
          steps: [
            `A ${bl('rectangle')} needs ${or('4 sides')} and ${or('4 right angles')} with opposite ${gr('sides equal')}.`,
            `A ${bl('square')} has all of this plus all ${gr('4 sides equal')}.`,
            `So yes — a ${bl('square')} meets all the requirements of a ${bl('rectangle')}.`,
            `But a ${bl('rectangle')} does not need all ${gr('4 sides equal')}, so it is not always a ${bl('square')}.`,
            `Lerato is correct. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing five types of quadrilaterals — square rectangle rhombus parallelogram and trapezium — with equal sides marked in green and right angles marked in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the five types of quadrilaterals and how to identify each by checking equal sides and right angles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CIRCLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circles',
      title: 'Circles',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('circle')} is a perfectly round 2D shape with no straight sides and no corners. Every point on the edge of a ${bl('circle')} is the same distance from the ${or('centre')}. The ${bl('radius')} is the distance from the ${or('centre')} to the edge. The ${re('diameter')} is the distance across the ${bl('circle')} through the ${or('centre')} — it is always double the ${bl('radius')}. The ${gr('circumference')} is the distance all the way around the outside of the ${bl('circle')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('diameter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('circumference')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('centre')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Centre</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The middle point of a circle — every point on the edge is the same distance from the ${or('centre')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The distance from the ${or('centre')} to any point on the edge. The ${bl('radius')} is always half the ${re('diameter')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Diameter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The distance across the circle through the ${or('centre')}. The ${re('diameter')} is always double the ${bl('radius')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Circumference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The distance all the way around the outside of the circle — the perimeter of a circle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Radius and diameter relationship</p>` +
        `<p style="margin:0;color:#1e3a8a;">${re('Diameter')} = ${bl('radius')} × 2 &nbsp;·&nbsp; ${bl('Radius')} = ${re('diameter')} ÷ 2. These two facts are all you need — if you know one, you always know the other.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A circle has a radius of 5 cm. What is its diameter?',
          answer: `The ${re('diameter')} is ${re('10 cm')}`,
          steps: [
            `The ${re('diameter')} is always double the ${bl('radius')}.`,
            `${re('Diameter')} = ${bl('radius')} × 2`,
            `${re('Diameter')} = ${bl('5')} × 2 = ${re('10 cm')} ✓`,
          ],
        },
        {
          question: 'Amahle measures the diameter of a circle as 12 cm. What is the radius?',
          answer: `The ${bl('radius')} is ${bl('6 cm')}`,
          steps: [
            `The ${bl('radius')} is always half the ${re('diameter')}.`,
            `${bl('Radius')} = ${re('diameter')} ÷ 2`,
            `${bl('Radius')} = ${re('12')} ÷ 2 = ${bl('6 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with the centre marked in orange the radius labelled in blue the diameter labelled in red and the circumference labelled in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing circles and explaining the centre radius diameter and circumference with examples of finding the diameter from the radius and vice versa" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SORTING AND COMPARING 2D SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-comparing-2d-shapes',
      title: 'Sorting and Comparing 2D Shapes',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">We can sort ${bl('2D shapes')} by looking at their properties — the ${gr('number of sides')}, whether sides are equal, whether angles are ${or('right angles')}, and whether the shape has any lines of symmetry. When comparing shapes always look at more than one property. Two shapes can be similar in some ways but different in others.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape names')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('right angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('number of sides')}</span>` +
        `</div>` +

        // ── Sorting properties ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Properties used to sort shapes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Number of sides')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Count the sides. Shapes with the same ${gr('number of sides')} go in the same group.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Equal sides</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Check whether all sides are equal, some sides are equal, or no sides are equal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Right angles')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Check whether the shape has any ${or('right angles')} (square corners of 90°).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Lines of symmetry</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Check whether the shape can be folded in half so both halves match exactly.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always use more than one property</p>` +
        `<p style="margin:0;color:#1e3a8a;">Never sort by just one property. A ${bl('square')} and a ${bl('rhombus')} both have ${gr('4 sides')} — but only the ${bl('square')} has ${or('right angles')}. Looking at more than one property gives a more complete comparison.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sort these shapes into two groups — triangle, square, rectangle, rhombus, pentagon.',
          answer: `${gr('Group 1 (4 sides):')} ${bl('square')}, ${bl('rectangle')}, ${bl('rhombus')} · ${gr('Group 2 (other sides):')} ${bl('triangle')} (${gr('3 sides')}), ${bl('pentagon')} (${gr('5 sides')})`,
          steps: [
            `Look at the ${gr('number of sides')} for each shape: ${bl('triangle')} → ${gr('3 sides')}, ${bl('square')} → ${gr('4 sides')}, ${bl('rectangle')} → ${gr('4 sides')}, ${bl('rhombus')} → ${gr('4 sides')}, ${bl('pentagon')} → ${gr('5 sides')}.`,
            `<strong>Group 1 — shapes with ${gr('4 sides')}:</strong> ${bl('square')}, ${bl('rectangle')}, ${bl('rhombus')}.`,
            `<strong>Group 2 — shapes with other ${gr('numbers of sides')}:</strong> ${bl('triangle')} has ${gr('3 sides')}, ${bl('pentagon')} has ${gr('5 sides')}.`,
            `We sorted by ${gr('number of sides')}. ✓`,
          ],
        },
        {
          question: 'Thabo wants to find all shapes with at least one right angle from this list — square, rhombus, rectangle, equilateral triangle, trapezium.',
          answer: `Shapes with ${or('right angles')}: ${bl('square')} and ${bl('rectangle')}`,
          steps: [
            `${bl('Square')} — yes, ${or('4 right angles')} ✓`,
            `${bl('Rhombus')} — no ${or('right angles')} — its corners are not 90°.`,
            `${bl('Rectangle')} — yes, ${or('4 right angles')} ✓`,
            `${bl('Equilateral triangle')} — no ${or('right angles')} — all angles are 60°.`,
            `${bl('Trapezium')} — sometimes, depends on the type — a right trapezium has ${or('right angles')} but most do not.`,
            `<strong>Shapes with at least one ${or('right angle')}:</strong> ${bl('square')} and ${bl('rectangle')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing five 2D shapes — triangle square rectangle rhombus and pentagon — sorted into groups by number of sides with right angles marked in orange and side counts in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sort and compare 2D shapes by their properties — number of sides right angles equal sides and lines of symmetry" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many sides does a triangle have?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Name the 2D shape that has 4 equal sides and 4 right angles.',
      answer: 'square',
      checkMode: 'auto',
      correctAnswer: 'square',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'What is the difference between a 2D shape and a 3D object?',
      answer: 'A 2D shape is flat and has only length and width. A 3D object has length, width and height and takes up space.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What type of triangle has 3 equal sides?',
      answer: 'equilateral triangle',
      checkMode: 'auto',
      correctAnswer: 'equilateral triangle',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A triangle has sides of 3cm, 4cm and 5cm. What type of triangle is it?',
      answer: 'scalene triangle',
      checkMode: 'auto',
      correctAnswer: 'scalene triangle',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says an isosceles triangle always has a line of symmetry. Is he correct? Explain.',
      answer: 'Yes — an isosceles triangle has 2 equal sides and 1 line of symmetry running from the top corner to the middle of the base.',
      checkMode: 'self',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many sides does a quadrilateral have?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── Q8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'What is the difference between a square and a rhombus?',
      answer: 'Both have 4 equal sides but a square has 4 right angles and a rhombus does not.',
      checkMode: 'self',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says all squares are rhombuses but not all rhombuses are squares. Is she correct? Explain.',
      answer: 'Yes — a rhombus has 4 equal sides and so does a square, but a square also has right angles which a rhombus does not always have.',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'What is the distance from the centre of a circle to its edge called?',
      answer: 'radius',
      checkMode: 'auto',
      correctAnswer: 'radius',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A circle has a diameter of 16cm. What is the radius?',
      answer: '8cm',
      checkMode: 'auto',
      correctAnswer: '8cm',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says the diameter of a circle is always double the radius. Is she correct? Give an example.',
      answer: 'Yes — if the radius is 5cm then the diameter is 10cm. Diameter = radius x 2 always.',
      checkMode: 'self',
    },

    // ── Q13 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many right angles does a rectangle have?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── Q14 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sort these shapes by number of sides from fewest to most — pentagon, triangle, square, hexagon.',
      answer: 'triangle, square, pentagon, hexagon',
      checkMode: 'auto',
      correctAnswer: 'triangle, square, pentagon, hexagon',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Name two ways a square and a rectangle are the same and one way they are different.',
      answer: 'Same — both have 4 sides and 4 right angles. Different — a square has all 4 sides equal but a rectangle only has opposite sides equal.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered 2D shapes.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of 2D shapes.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered 2D Shapes for Grade 5. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of 2D shapes. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Identifying shapes by sides/corners | 4-7 Classifying
    // triangles by side length | 8-11 Classifying/comparing quadrilaterals |
    // 12-15 Circle parts & radius/diameter | 16-19 Sorting, multi-property,
    // error-spotting capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'How many sides does a square have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A square is a 2D shape with 4 straight sides, all of equal length.' },
        { difficulty: 'Easy', question: 'How many corners does a triangle have?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'A triangle has 3 straight sides and 3 corners (vertices), one where each pair of sides meets.' },
        { difficulty: 'Easy', question: 'Name the 2D shape that has one curved side and no corners.', answer: 'circle', checkMode: 'auto', correctAnswer: 'circle', correctAnswers: ['circle', 'a circle'], explanation: 'A circle is perfectly round. Its edge is a single curved line with no straight parts, so it has no corners.' },
        { difficulty: 'Easy', question: 'A shape has 6 straight sides and 6 corners. What is it called?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'a hexagon'], explanation: 'A shape with 6 sides and 6 corners is called a hexagon.' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 6 cm, 6 cm and 6 cm. What type of triangle is it?', answer: 'equilateral triangle', checkMode: 'auto', correctAnswer: 'equilateraltriangle', correctAnswers: ['equilateraltriangle', 'equilateral'], explanation: 'All three sides are equal (6 cm, 6 cm, 6 cm), so this is an equilateral triangle. It also has 3 equal angles of 60° each.' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 7 cm, 4 cm and 5 cm. What type of triangle is it?', answer: 'scalene triangle', checkMode: 'auto', correctAnswer: 'scalenetriangle', correctAnswers: ['scalenetriangle', 'scalene'], explanation: 'All three side lengths are different (7 cm, 4 cm, 5 cm), so no sides are equal. This makes it a scalene triangle.' },
        { difficulty: 'Medium', question: 'A carpenter cuts a triangular offcut with two sides of 9 cm and a third side of 5 cm. What type of triangle is the offcut, and how many equal angles does it have?', answer: 'Isosceles triangle with 2 equal angles', checkMode: 'auto', correctAnswer: 'isosceles2', correctAnswers: ['isosceles2', 'isosceles, 2', 'isosceles 2 equal angles'], explanation: 'Two sides are equal (9 cm and 9 cm) and one side is different (5 cm), so this is an isosceles triangle. An isosceles triangle always has 2 equal angles — the ones opposite the two equal sides.' },
        { difficulty: 'Medium', question: 'Naledi says a triangle with sides 5 cm, 5 cm and 9 cm has 3 lines of symmetry because all triangles do. Is she correct? Explain.', answer: 'No — this is an isosceles triangle with only 1 line of symmetry, not 3. Only an equilateral triangle has 3 lines of symmetry.', checkMode: 'self', explanation: 'The triangle has two equal sides (5 cm, 5 cm) and one different side (9 cm), making it isosceles. An isosceles triangle has exactly 1 line of symmetry, running from the top corner to the middle of the base. Only an equilateral triangle (all 3 sides equal) has 3 lines of symmetry.' },
        { difficulty: 'Medium', question: 'Which quadrilateral has 4 equal sides but no right angles?', answer: 'rhombus', checkMode: 'auto', correctAnswer: 'rhombus', correctAnswers: ['rhombus', 'a rhombus'], explanation: 'A rhombus has 4 equal sides like a square, but its corners are not right angles.' },
        { difficulty: 'Medium', question: 'State one way a rectangle and a parallelogram are similar, and one way they are different.', answer: 'Similar — both have opposite sides equal and parallel. Different — a rectangle has 4 right angles, but a parallelogram usually does not.', checkMode: 'self', explanation: 'Both shapes have 2 pairs of opposite sides that are equal in length and parallel to each other. The key difference is the angles: a rectangle always has 4 right angles (90°), while a parallelogram\'s angles are usually not 90°.' },
        { difficulty: 'Medium', question: 'A student claims that every rectangle is also a square. Is this correct? Explain your answer.', answer: 'No — a square must have all 4 sides equal, but a rectangle only needs opposite sides equal, so a rectangle is not always a square.', checkMode: 'self', explanation: 'A rectangle needs 4 right angles with opposite sides equal, but its length and width can differ. A square is a special rectangle where all 4 sides happen to be equal too. Since most rectangles have unequal length and width, the claim is false.' },
        { difficulty: 'Medium', question: 'A circle has a radius of 9 cm. What is its diameter?', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18 cm', '18'], explanation: 'Diameter = radius × 2. Diameter = 9 × 2 = 18 cm.' },
        { difficulty: 'Medium', question: 'A bicycle wheel has a diameter of 60 cm. What is the radius of the wheel?', answer: '30 cm', checkMode: 'auto', correctAnswer: '30cm', correctAnswers: ['30cm', '30 cm', '30'], explanation: 'Radius = diameter ÷ 2. Radius = 60 ÷ 2 = 30 cm.' },
        { difficulty: 'Medium', question: 'What is the name for the distance all the way around the outside edge of a circle?', answer: 'circumference', checkMode: 'auto', correctAnswer: 'circumference', correctAnswers: ['circumference', 'the circumference'], explanation: 'The distance around the outside of a circle is called the circumference — it is the circle\'s version of a perimeter.' },
        { difficulty: 'Medium', question: 'Explain why the radius of a circle is always exactly half of its diameter.', answer: 'The diameter is a straight line across the circle through the centre, made up of two radii placed end to end — one from the centre to each side. Since the diameter is 2 radii, the radius must be half the diameter.', checkMode: 'self', explanation: 'The diameter passes through the centre from one edge to the other. This means it is made of two radius lengths joined together (centre to edge, then centre to the opposite edge). Two equal radii make one diameter, so radius = diameter ÷ 2 and diameter = radius × 2.' },
        { difficulty: 'Hard', question: 'Sort these shapes into those with 4 sides and those without 4 sides: triangle, rhombus, pentagon, square, hexagon, trapezium.', answer: '4 sides: rhombus, square, trapezium. Not 4 sides: triangle (3), pentagon (5), hexagon (6)', checkMode: 'auto', correctAnswer: 'rhombussquaretrapezium', correctAnswers: ['rhombussquaretrapezium', 'rhombus, square, trapezium', 'rhombussquaretrapezium/trianglepentagonhexagon'], explanation: 'Count the sides of each shape: triangle = 3, rhombus = 4, pentagon = 5, square = 4, hexagon = 6, trapezium = 4. The shapes with exactly 4 sides are rhombus, square and trapezium.' },
        { difficulty: 'Hard', question: 'Zanele claims: "All squares are rhombuses, and all rhombuses are squares." Is she correct? Explain using their properties.', answer: 'She is only half correct — all squares are rhombuses (4 equal sides), but not all rhombuses are squares because a rhombus does not need right angles.', checkMode: 'self', explanation: 'A rhombus needs 4 equal sides. A square has 4 equal sides AND 4 right angles, so every square meets the requirements of a rhombus — all squares are rhombuses. But a rhombus does not need right angles, so a "squashed" rhombus with no right angles is not a square. Zanele\'s statement is only half true.' },
        { difficulty: 'Hard', question: 'A window is shaped like a rectangle and a plate is shaped like a circle. Name one property each shape has that the other does not.', answer: 'The rectangle has 4 straight sides and 4 right angles, which a circle does not have. The circle has a curved edge and a radius/diameter, which a rectangle does not have.', checkMode: 'self', explanation: 'A rectangle is made entirely of straight sides meeting at right angles (90°) — it has corners. A circle has one continuously curved edge and no corners at all, and it is measured using a radius and diameter rather than side lengths.' },
        { difficulty: 'Hard', question: 'A quadrilateral has 4 equal sides and 4 right angles. A second quadrilateral has 4 equal sides but no right angles. Name each shape, then give one similarity and one difference between them.', answer: 'The first is a square, the second is a rhombus. Similarity — both have 4 equal sides. Difference — the square has 4 right angles, the rhombus does not.', checkMode: 'self', explanation: 'A quadrilateral with 4 equal sides and 4 right angles is a square. A quadrilateral with 4 equal sides but no right angles is a rhombus. They are similar because both have all 4 sides equal in length. They differ because only the square has right-angled corners — every square is a rhombus, but not every rhombus is a square.' },
        { difficulty: 'Hard', question: 'Compare a triangle, a quadrilateral and a hexagon by naming similarities AND differences across all three shape families.', answer: 'Similarity — all are 2D shapes made only of straight sides with corners at each vertex. Differences — a triangle has 3 sides/corners, a quadrilateral has 4, and a hexagon has 6, so their angle sums and appearances differ.', checkMode: 'self', explanation: 'Similarities: a triangle, a quadrilateral and a hexagon are all closed 2D shapes (polygons) made of straight sides, with a corner wherever two sides meet. Differences: they have a different number of sides and corners (3, 4 and 6), which means they look different and have different angle sums as you add more sides. More sides generally means the shape looks closer to a circle.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered identifying, classifying and comparing 2D shapes.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
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
        { difficulty: 'Easy', question: 'How many straight sides does a rectangle have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A rectangle is a 2D shape with 4 straight sides, where opposite sides are equal in length.' },
        { difficulty: 'Easy', question: 'How many corners does a pentagon have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A pentagon has 5 straight sides and 5 corners (vertices).' },
        { difficulty: 'Easy', question: 'Thabo draws a shape with a curved edge and says it has 2 corners. Is he correct about the corners? Explain briefly.', answer: 'No — a circle has 0 corners because its edge is one continuous curved line with no points where straight sides meet.', checkMode: 'self', explanation: 'A corner (vertex) is formed where two straight sides meet. A circle has no straight sides at all — just one curved line all the way around — so it cannot have any corners.' },
        { difficulty: 'Easy', question: 'A shape has 5 straight sides and 5 corners. What is it called?', answer: 'pentagon', checkMode: 'auto', correctAnswer: 'pentagon', correctAnswers: ['pentagon', 'a pentagon'], explanation: 'A shape with 5 sides and 5 corners is called a pentagon.' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 8 cm, 3 cm and 6 cm. What type of triangle is it?', answer: 'scalene triangle', checkMode: 'auto', correctAnswer: 'scalenetriangle', correctAnswers: ['scalenetriangle', 'scalene'], explanation: 'All three side lengths are different (8 cm, 3 cm, 6 cm), so no two sides are equal. This makes it a scalene triangle.' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 10 cm, 10 cm and 6 cm. What type of triangle is it?', answer: 'isosceles triangle', checkMode: 'auto', correctAnswer: 'isoscelestriangle', correctAnswers: ['isoscelestriangle', 'isosceles'], explanation: 'Two sides are equal (10 cm and 10 cm) and the third side is different (6 cm), so this is an isosceles triangle.' },
        { difficulty: 'Medium', question: 'A flag maker cuts a triangular pennant with all three sides measuring 12 cm. What type of triangle is this, and how many lines of symmetry does it have?', answer: 'Equilateral triangle with 3 lines of symmetry', checkMode: 'auto', correctAnswer: 'equilateral3', correctAnswers: ['equilateral3', 'equilateral, 3', 'equilateral 3 lines of symmetry'], explanation: 'All three sides are equal (12 cm each), so this is an equilateral triangle. An equilateral triangle has 3 lines of symmetry, one running from each corner to the middle of the opposite side.' },
        { difficulty: 'Medium', question: 'Sipho says a scalene triangle can never have a right angle. Is he correct? Explain.', answer: 'No — a scalene triangle can have a right angle. Scalene only describes the sides (all different lengths); it says nothing about the angles being right angles or not.', checkMode: 'self', explanation: 'Scalene refers only to side lengths — no two sides are equal. A triangle with sides of, say, 3 cm, 4 cm and 5 cm is scalene and also has a right angle. So Sipho is incorrect; scalene and having a right angle are unrelated properties.' },
        { difficulty: 'Medium', question: 'Which quadrilateral has opposite sides equal and parallel, but usually no right angles?', answer: 'parallelogram', checkMode: 'auto', correctAnswer: 'parallelogram', correctAnswers: ['parallelogram', 'a parallelogram'], explanation: 'A parallelogram has 2 pairs of opposite sides that are equal in length and parallel, but its angles are usually not right angles.' },
        { difficulty: 'Medium', question: 'State one way a square and a rhombus are similar, and one way they are different.', answer: 'Similar — both have 4 equal sides. Different — a square has 4 right angles, but a rhombus does not need right angles.', checkMode: 'self', explanation: 'Both shapes share the property of having all 4 sides the same length. The difference is in the angles: a square always has 4 right angles (90°), while a rhombus can have angles that are not 90°.' },
        { difficulty: 'Medium', question: 'A student claims a trapezium always has 2 pairs of parallel sides, just like a parallelogram. Is this correct? Explain.', answer: 'No — a trapezium has only 1 pair of parallel sides. Having 2 pairs of parallel sides is what makes a parallelogram.', checkMode: 'self', explanation: 'A trapezium is defined by having exactly one pair of parallel sides; the other pair of sides is not parallel. A parallelogram, by contrast, has both pairs of opposite sides parallel. This is the key property that separates the two shapes.' },
        { difficulty: 'Medium', question: 'A circle has a radius of 14 cm. What is its diameter?', answer: '28 cm', checkMode: 'auto', correctAnswer: '28cm', correctAnswers: ['28cm', '28 cm', '28'], explanation: 'Diameter = radius × 2. Diameter = 14 × 2 = 28 cm.' },
        { difficulty: 'Medium', question: 'A dinner plate has a diameter of 24 cm. What is the radius of the plate?', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], explanation: 'Radius = diameter ÷ 2. Radius = 24 ÷ 2 = 12 cm.' },
        { difficulty: 'Medium', question: 'What is the name for the middle point of a circle, from which every point on the edge is the same distance?', answer: 'centre', checkMode: 'auto', correctAnswer: 'centre', correctAnswers: ['centre', 'center', 'the centre', 'the center'], explanation: 'The middle point of a circle is called the centre. Every point on the circle\'s edge is exactly the same distance from the centre.' },
        { difficulty: 'Medium', question: 'Amahle measures across a circular pond in two different places and gets two different "diameter" readings. Explain what she must have done wrong.', answer: 'She must not have measured through the centre both times — a true diameter always passes through the centre of the circle, so any two diameters of the same circle must be equal.', checkMode: 'self', explanation: 'By definition, the diameter is a straight line across the circle that passes through the centre. Every diameter of the same circle has exactly the same length. If Amahle got two different readings, at least one of her measuring lines must not have passed through the centre.' },
        { difficulty: 'Hard', question: 'Sort these shapes into those with at least one right angle and those with no right angles: square, rhombus, rectangle, equilateral triangle, trapezium (right-angled).', answer: 'At least one right angle: square, rectangle, right-angled trapezium. No right angles: rhombus, equilateral triangle', checkMode: 'auto', correctAnswer: 'squarerectangletrapezium', correctAnswers: ['squarerectangletrapezium', 'square, rectangle, trapezium', 'squarerectangletrapezium/rhombusequilateraltriangle'], explanation: 'Square — 4 right angles. Rhombus — no right angles (its corners are not 90°). Rectangle — 4 right angles. Equilateral triangle — no right angles, all angles are 60°. Right-angled trapezium — has right angles by definition. So the shapes with at least one right angle are square, rectangle and the right-angled trapezium.' },
        { difficulty: 'Hard', question: 'Kagiso claims: "A rectangle and a rhombus are actually the same shape, just rotated differently." Is he correct? Explain using their properties.', answer: 'No — a rectangle has 4 right angles but sides that are not all equal (only opposite sides equal), while a rhombus has 4 equal sides but usually no right angles. They are different shapes with different properties.', checkMode: 'self', explanation: 'A rectangle\'s defining property is 4 right angles, with opposite sides equal (but adjacent sides can differ). A rhombus\'s defining property is 4 equal sides, with angles that are usually not 90°. Rotating a rectangle never makes its sides all equal, and rotating a rhombus never makes its angles all 90° (unless it happens to be a square). So Kagiso is incorrect.' },
        { difficulty: 'Hard', question: 'A clock face is shaped like a circle and a picture frame is shaped like a square. Name one property each shape has that the other does not.', answer: 'The square has 4 straight sides, 4 corners and 4 right angles, which a circle does not have. The circle has a curved edge, a centre and a radius/diameter, which a square does not have.', checkMode: 'self', explanation: 'A square is built entirely from straight sides meeting at right angles, giving it 4 corners. A circle has a single curved edge with no corners at all, and is described using a centre, radius and diameter rather than side lengths and angles.' },
        { difficulty: 'Hard', question: 'A quadrilateral has opposite sides equal and parallel with 4 right angles. A second quadrilateral has opposite sides equal and parallel but no right angles. Name each shape, then give one similarity and one difference between them.', answer: 'The first is a rectangle, the second is a parallelogram. Similarity — both have opposite sides equal and parallel. Difference — the rectangle has 4 right angles, the parallelogram does not.', checkMode: 'self', explanation: 'A quadrilateral with opposite sides equal and parallel plus 4 right angles is a rectangle. One with opposite sides equal and parallel but no right angles is a parallelogram. They are similar because both have 2 pairs of equal, parallel opposite sides. They differ in their angles — only the rectangle has right-angled corners. In fact, every rectangle is a special type of parallelogram.' },
        { difficulty: 'Hard', question: 'Compare a square, a rhombus and a rectangle by naming similarities AND differences across all three shape families.', answer: 'Similarity — all are quadrilaterals with 4 sides and opposite sides equal and parallel. Differences — only the square has both 4 equal sides AND 4 right angles; the rhombus has 4 equal sides but not always right angles; the rectangle has right angles but not always 4 equal sides.', checkMode: 'self', explanation: 'All three shapes are quadrilaterals (4 sides, 4 corners) with opposite sides equal and parallel. The square is special because it has BOTH 4 equal sides AND 4 right angles — it is actually both a rhombus and a rectangle at the same time. The rhombus guarantees 4 equal sides but not right angles, while the rectangle guarantees right angles but not 4 equal sides. This is why the square sits at the overlap of the rhombus and rectangle families.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently identify, classify and compare 2D shapes.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
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
        { difficulty: 'Easy', question: 'How many sides does a hexagon have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A hexagon is a 2D shape with 6 straight sides and 6 corners.' },
        { difficulty: 'Easy', question: 'How many corners does a circle have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A circle has one curved edge and no straight sides, so it has no corners at all.' },
        { difficulty: 'Easy', question: 'Name the 2D shape that has 4 sides where only the opposite sides are equal in length, and all 4 corners are right angles.', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'A rectangle has 4 sides where opposite sides are equal, and all 4 corners are right angles (90°).' },
        { difficulty: 'Easy', question: 'Lindiwe says a square has curved sides. Is she correct? Explain briefly.', answer: 'No — a square has 4 straight sides, not curved ones. Only shapes like a circle have curved sides.', checkMode: 'self', explanation: 'A square is a quadrilateral made entirely of straight lines meeting at right angles. Curved sides belong to round shapes like a circle, not to a square.' },
        { difficulty: 'Easy-Medium', question: 'A gate maker cuts a triangular brace with sides 15 cm, 15 cm and 15 cm. What type of triangle is it?', answer: 'equilateral triangle', checkMode: 'auto', correctAnswer: 'equilateraltriangle', correctAnswers: ['equilateraltriangle', 'equilateral'], explanation: 'All three sides are equal (15 cm each), so this is an equilateral triangle.' },
        { difficulty: 'Easy-Medium', question: 'A triangle has sides of 11 cm, 6 cm and 9 cm. What type of triangle is it?', answer: 'scalene triangle', checkMode: 'auto', correctAnswer: 'scalenetriangle', correctAnswers: ['scalenetriangle', 'scalene'], explanation: 'All three side lengths are different (11 cm, 6 cm, 9 cm), so this is a scalene triangle.' },
        { difficulty: 'Medium', question: 'A carpenter has offcuts of wood shaped as triangles. One offcut has sides of 8 cm, 8 cm and 3 cm. What type of triangle is it, and how many equal angles does it have?', answer: 'Isosceles triangle with 2 equal angles', checkMode: 'auto', correctAnswer: 'isosceles2', correctAnswers: ['isosceles2', 'isosceles, 2', 'isosceles 2 equal angles'], explanation: 'Two sides are equal (8 cm and 8 cm) and one side is different (3 cm), so this is an isosceles triangle, which always has 2 equal angles opposite its 2 equal sides.' },
        { difficulty: 'Medium', question: 'Bongani says an equilateral triangle is just a special type of isosceles triangle. Is he correct? Explain.', answer: 'Yes — an equilateral triangle has at least 2 equal sides (in fact all 3), which satisfies the requirement for isosceles, so every equilateral triangle is also isosceles.', checkMode: 'self', explanation: 'An isosceles triangle needs at least 2 equal sides. An equilateral triangle has all 3 sides equal, which certainly includes at least 2 equal sides. So every equilateral triangle meets the definition of isosceles, making Bongani correct — though not every isosceles triangle is equilateral.' },
        { difficulty: 'Medium', question: 'Which quadrilateral has only one pair of parallel sides?', answer: 'trapezium', checkMode: 'auto', correctAnswer: 'trapezium', correctAnswers: ['trapezium', 'a trapezium', 'trapezoid'], explanation: 'A trapezium has exactly one pair of parallel sides; the other pair of sides is not parallel.' },
        { difficulty: 'Medium', question: 'State one way a trapezium and a parallelogram are similar, and one way they are different.', answer: 'Similar — both are quadrilaterals with at least one pair of parallel sides. Different — a parallelogram has 2 pairs of parallel sides, but a trapezium has only 1 pair.', checkMode: 'self', explanation: 'Both shapes are 4-sided figures with at least one pair of parallel sides. The key difference is that a parallelogram has both pairs of opposite sides parallel, while a trapezium has only one pair of parallel sides — its other pair is not parallel.' },
        { difficulty: 'Medium', question: 'A student claims that a rhombus and a square are always the same shape because both have 4 equal sides. Is this correct? Explain your answer.', answer: 'No — a rhombus only needs 4 equal sides, but a square needs 4 equal sides AND 4 right angles. A rhombus without right angles is not a square.', checkMode: 'self', explanation: 'Having 4 equal sides makes a shape a rhombus, but it does not guarantee right angles. A square is a special rhombus that also has 4 right angles. If a rhombus is "squashed" so its angles are not 90°, it is still a rhombus but not a square.' },
        { difficulty: 'Medium', question: 'A circular garden bed has a radius of 2 m. What is its diameter?', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4 m', '4'], explanation: 'Diameter = radius × 2. Diameter = 2 × 2 = 4 m.' },
        { difficulty: 'Medium', question: 'A round table has a diameter of 1.4 m. What is the radius of the table?', answer: '0.7 m', checkMode: 'auto', correctAnswer: '0.7m', correctAnswers: ['0.7m', '0,7m', '0.7 m', '0,7 m', '0.7'], explanation: 'Radius = diameter ÷ 2. Radius = 1.4 ÷ 2 = 0.7 m.' },
        { difficulty: 'Medium', question: 'What is the name for the distance from the centre of a circle to any point on its edge?', answer: 'radius', checkMode: 'auto', correctAnswer: 'radius', correctAnswers: ['radius', 'the radius'], explanation: 'The distance from the centre of a circle to any point on its edge is called the radius.' },
        { difficulty: 'Medium', question: 'A wheel has a radius of 21 cm. Explain how you would find its diameter, and give the answer.', answer: 'Multiply the radius by 2, because the diameter is always double the radius. Diameter = 21 × 2 = 42 cm.', checkMode: 'self', explanation: 'The diameter is a straight line across the circle through the centre, made of two radii end to end. So diameter = radius × 2 = 21 × 2 = 42 cm.' },
        { difficulty: 'Hard', question: 'Sort these shapes by both number of sides AND whether they have equal sides: equilateral triangle, scalene triangle, square, rectangle. List the shape(s) with 3 equal sides, then the shape(s) with 4 equal sides.', answer: '3 equal sides: equilateral triangle. 4 equal sides: square', checkMode: 'auto', correctAnswer: 'equilateraltrianglesquare', correctAnswers: ['equilateraltrianglesquare', 'equilateral triangle, square', 'equilateraltriangle/square'], explanation: 'Equilateral triangle — 3 sides, all equal. Scalene triangle — 3 sides, none equal. Square — 4 sides, all equal. Rectangle — 4 sides, only opposite sides equal. The only shape with 3 equal sides is the equilateral triangle; the only shape with 4 equal sides is the square.' },
        { difficulty: 'Hard', question: 'Precious claims: "A shape with 4 equal sides must be a square." Is she correct? Explain using an example.', answer: 'No — a rhombus also has 4 equal sides but does not have right angles, so it is not a square. A shape needs 4 equal sides AND 4 right angles to be a square.', checkMode: 'self', explanation: 'A rhombus is a counter-example: it has 4 equal sides, just like a square, but its angles are usually not 90°. Since it fails the right-angle requirement, it is not a square. This shows 4 equal sides alone is not enough — right angles are also required.' },
        { difficulty: 'Hard', question: 'A stop sign is shaped like an octagon (8 sides) and a saucer is shaped like a circle. Name one property each shape has that the other does not.', answer: 'The octagon has 8 straight sides and 8 corners, which a circle does not have. The circle has a curved edge and no corners, and is measured with a radius and diameter instead.', checkMode: 'self', explanation: 'An octagon is built from 8 straight sides meeting at 8 corners. A circle has just one continuously curved edge and no corners at all, and its size is described using a centre, radius and diameter rather than side lengths.' },
        { difficulty: 'Hard', question: 'A quadrilateral has 4 equal sides and no right angles. A second quadrilateral has opposite sides equal and parallel with 4 right angles, but not all 4 sides equal. Name each shape, then give one similarity and one difference between them.', answer: 'The first is a rhombus, the second is a rectangle. Similarity — both have opposite sides equal and parallel. Difference — the rhombus has all 4 sides equal but no right angles, while the rectangle has right angles but not all sides equal.', checkMode: 'self', explanation: 'A quadrilateral with 4 equal sides and no right angles is a rhombus. One with opposite sides equal and parallel, 4 right angles, but unequal adjacent sides is a rectangle. Both are quadrilaterals with 2 pairs of parallel, equal opposite sides. They differ because the rhombus guarantees equal sides (not angles) while the rectangle guarantees right angles (not all-equal sides).' },
        { difficulty: 'Hard', question: 'Compare a triangle, a pentagon and a circle by naming similarities AND differences across all three shapes.', answer: 'Similarity — all are closed 2D shapes that enclose a flat area. Differences — the triangle and pentagon have straight sides and corners (3 and 5 respectively), while the circle has one curved edge and no corners at all.', checkMode: 'self', explanation: 'Similarities: a triangle, a pentagon and a circle are all closed, flat (2D) shapes that enclose a region of space. Differences: the triangle has 3 straight sides and 3 corners, the pentagon has 5 straight sides and 5 corners, while the circle has no straight sides or corners at all — just one continuous curved edge. As the number of sides in a polygon increases, the shape starts to look more like a circle.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply your knowledge of 2D shapes to real-world problems and reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
