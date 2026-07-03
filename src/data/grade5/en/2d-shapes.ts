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
}
