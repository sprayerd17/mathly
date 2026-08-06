import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: '2D Shapes',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE 2D SHAPES?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-2d-shapes',
      title: 'What Are 2D Shapes?',
      icon: '🔷',
      explanation: `
<p style="margin-bottom:14px;">A <strong>2D shape</strong> is a <strong>flat shape</strong> that has only two dimensions — <strong>length</strong> and <strong>width</strong>. It has no depth or thickness — you cannot pick it up and hold it like a box. Think of it as a shape drawn on a flat piece of paper.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>A piece of paper:</strong> completely flat with length and width but no thickness</li>
    <li><strong>A shadow on the ground:</strong> a flat image with no depth at all</li>
    <li><strong>A drawing on a page:</strong> you can see its shape but you cannot feel any thickness</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key properties of 2D shapes</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Sides</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">The <strong style="color:#1e40af;">straight or curved lines</strong> that make up the boundary of the shape. Most 2D shapes have straight sides, but a circle has one curved edge.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Angles</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">The <strong style="color:#dc2626;">amount of turn at each corner</strong> where two sides meet. A right angle measures exactly 90°, like the corner of a square.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Vertices</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">The <strong style="color:#16a34a;">points where two sides meet</strong>. A single point is called a <em>vertex</em>; more than one are called <em>vertices</em>. A circle has no vertices because its edge is curved.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Common 2D shapes</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;border-radius:6px 0 0 0;">Shape</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#1e40af;">Sides</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#16a34a;">Vertices</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;border-radius:0 6px 0 0;"><span style="color:#dc2626;">Angles</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Circle</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">0 straight sides<br/><span style="font-size:12px;">(1 curved edge)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Triangle</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">3</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Square</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(all equal)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 right angles</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Rectangle</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(2 pairs equal)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 right angles</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Pentagon</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">5</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Hexagon</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">6</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Describe a rectangle using its properties.',
          steps: [
            '<strong style="color:#1e40af;">Count the sides</strong> — a rectangle has <strong>4 sides</strong>.',
            '<strong style="color:#1e40af;">Identify equal sides</strong> — the <strong>opposite sides are equal</strong> in length (the two long sides are the same and the two short sides are the same).',
            '<strong style="color:#16a34a;">Count the vertices</strong> — a rectangle has <strong>4 vertices</strong>, one at each corner.',
            '<strong style="color:#dc2626;">Describe the angles</strong> — all <strong>4 angles are right angles (90°)</strong>, just like the corner of a piece of paper.',
          ],
          answer:
            'A rectangle has 4 sides with opposite sides equal in length, 4 vertices and 4 right angles (90°).',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'Six 2D shapes labelled clearly — circle, triangle, square, rectangle, pentagon, hexagon — each with sides, vertices and angles marked',
      videoPlaceholder:
        'Short video naming and describing the properties of common 2D shapes',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SORTING AND CLASSIFYING 2D SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-classifying-2d-shapes',
      title: 'Sorting and Classifying 2D Shapes',
      icon: '🗂️',
      explanation: `
<p style="margin-bottom:14px;">Shapes can be <strong>sorted and classified</strong> according to their properties. When we classify shapes, we look for things they have in common — like how many sides they have, whether their angles are right angles, or whether their sides are all equal.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Ways to sort shapes</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By number of sides</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Triangles — 3 sides</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Quadrilaterals — 4 sides</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Pentagons — 5 sides</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Hexagons — 6 sides</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Squares and rectangles are both <em>quadrilaterals</em> because they both have 4 sides.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By angle type</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">With right angles — square, rectangle, right-angled triangle</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Without right angles — circle, equilateral triangle, hexagon</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">A <strong>right angle</strong> looks like the corner of a book or a piece of paper — it measures exactly 90°.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By equal sides</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Regular — all sides equal (e.g. square, equilateral triangle)</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Irregular — sides not all equal (e.g. rectangle, scalene triangle)</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">A <strong>regular polygon</strong> has all sides the same length AND all angles the same size.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By straight vs curved sides</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Straight sides only — triangle, square, rectangle, hexagon</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Curved sides — circle, oval</span>
      </div>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">What is a polygon? 📐</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A <strong>polygon</strong> is a <strong>closed 2D shape made entirely of straight sides</strong>. All the sides must connect and there must be no gaps. Triangles, squares, rectangles, pentagons and hexagons are all polygons.</p>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;"><strong>Circles are NOT polygons</strong> — a circle has a curved edge, not straight sides. Ovals are also not polygons for the same reason.</p>
</div>
`,
      workedExamples: [
        {
          question:
            'Sort these shapes into two groups — polygons and non-polygons: circle, square, triangle, oval, rectangle, hexagon.',
          steps: [
            'Check each shape: does it have <strong style="color:#1e40af;">straight sides only</strong> AND is it a <strong style="color:#1e40af;">closed shape</strong>?',
            '<strong style="color:#1e40af;">Square</strong> — 4 straight sides, closed ✔ polygon.',
            '<strong style="color:#1e40af;">Triangle</strong> — 3 straight sides, closed ✔ polygon.',
            '<strong style="color:#1e40af;">Rectangle</strong> — 4 straight sides, closed ✔ polygon.',
            '<strong style="color:#1e40af;">Hexagon</strong> — 6 straight sides, closed ✔ polygon.',
            '<strong style="color:#64748b;">Circle</strong> — curved edge, no straight sides ✘ not a polygon.',
            '<strong style="color:#64748b;">Oval</strong> — curved edge, no straight sides ✘ not a polygon.',
          ],
          answer:
            'Polygons: square, triangle, rectangle, hexagon.\nNon-polygons: circle, oval.',
        },
        {
          question:
            'Which of these shapes have at least one right angle? Square, triangle, rectangle, circle, right-angled triangle.',
          steps: [
            'A <strong style="color:#dc2626;">right angle</strong> measures exactly 90° — like the corner of a piece of paper.',
            '<strong>Square:</strong> all 4 angles are right angles ✔',
            '<strong>Triangle (equilateral):</strong> no right angles ✘',
            '<strong>Rectangle:</strong> all 4 angles are right angles ✔',
            '<strong>Circle:</strong> no angles at all ✘',
            '<strong>Right-angled triangle:</strong> has exactly 1 right angle ✔',
          ],
          answer:
            'Square, rectangle and right-angled triangle have at least one right angle.',
        },
        {
          question:
            'Sort these into regular and irregular polygons: equilateral triangle, scalene triangle, square, rectangle.',
          steps: [
            'A <strong style="color:#1e40af;">regular polygon</strong> has <strong>all sides equal</strong> AND <strong>all angles equal</strong>.',
            '<strong>Equilateral triangle:</strong> all 3 sides equal, all angles 60° ✔ regular.',
            '<strong>Square:</strong> all 4 sides equal, all angles 90° ✔ regular.',
            '<strong>Scalene triangle:</strong> all 3 sides different lengths ✘ irregular.',
            '<strong>Rectangle:</strong> opposite sides equal but adjacent sides different lengths ✘ irregular.',
          ],
          answer:
            'Regular: equilateral triangle, square.\nIrregular: scalene triangle, rectangle.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'Venn diagram sorting shapes into polygons and non-polygons with example shapes in each section',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CONTRASTING 2D SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-contrasting-2d-shapes',
      title: 'Comparing and Contrasting 2D Shapes',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Comparing shapes</strong> means looking carefully at two shapes side by side to find out how they are <strong style="color:#16a34a;">similar</strong> (the same) and how they are <strong style="color:#dc2626;">different</strong>. This helps us understand each shape's special properties more deeply.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Step-by-step method for comparing two shapes</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Count and compare the number of sides.</strong> Does each shape have the same number of sides?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Compare the lengths of the sides.</strong> Are all sides equal, or do some sides differ?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Compare the angles.</strong> Are they right angles, smaller or larger?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Compare the number of vertices.</strong> How many corners does each shape have?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Note any special properties</strong> — such as right angles, equal sides, or curved edges.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Compare a square and a rectangle.',
          steps: [
            '<strong style="color:#16a34a;">Similarities:</strong>',
            '✔ Both have <strong>4 sides</strong>.',
            '✔ Both have <strong>4 vertices</strong>.',
            '✔ Both have <strong>4 right angles</strong> (90° each).',
            '✔ Both are <strong>quadrilaterals</strong> (4-sided polygons).',
            '✔ Both are <strong>polygons</strong> (closed shapes with straight sides).',
            '<strong style="color:#dc2626;">Differences:</strong>',
            '✘ A square has <strong>4 equal sides</strong>. A rectangle has <strong>2 pairs of equal sides</strong> (opposite sides are equal, but adjacent sides differ).',
            '✘ A square has <strong>equal length and width</strong>. A rectangle is <strong>longer than it is wide</strong>.',
          ],
          answer:
            'Similarities: 4 sides, 4 vertices, 4 right angles, both quadrilaterals and polygons.\nDifferences: A square has 4 equal sides; a rectangle has 2 pairs of equal sides. A square is the same length and width; a rectangle is longer than it is wide.',
        },
        {
          question: 'Compare a triangle and a hexagon.',
          steps: [
            '<strong style="color:#16a34a;">Similarities:</strong>',
            '✔ Both are <strong>polygons</strong> (closed shapes with straight sides only).',
            '✔ Both have <strong>straight sides</strong>.',
            '✔ Both have <strong>vertices</strong> (corners where sides meet).',
            '<strong style="color:#dc2626;">Differences:</strong>',
            '✘ A triangle has <strong>3 sides</strong>. A hexagon has <strong>6 sides</strong>.',
            '✘ A triangle has <strong>3 vertices</strong>. A hexagon has <strong>6 vertices</strong>.',
            '✘ A triangle has <strong>3 angles</strong>. A hexagon has <strong>6 angles</strong>.',
          ],
          answer:
            'Similarities: both are polygons with straight sides and vertices.\nDifferences: a triangle has 3 sides, 3 vertices and 3 angles; a hexagon has 6 sides, 6 vertices and 6 angles.',
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — 2D SHAPES IN THE ENVIRONMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-in-the-environment',
      title: '2D Shapes in the Environment',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">2D shapes are all around us every day! Once you know what to look for, you will start to spot them everywhere — in your classroom, at home and outside. Learning to recognise shapes in real life helps you understand their properties even better.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Shapes around you</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Circle</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Wheels, coins, clocks, pizzas</strong> — all round with no corners and no straight sides.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Triangle</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Roof shapes, traffic warning signs, pizza slices</strong> — three sides and three corners.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Square</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Tiles, windows, chessboard squares, sticky notes</strong> — four equal sides and four right angles.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Rectangle</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Doors, books, screens, bricks</strong> — longer than they are wide, with four right angles.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Pentagon</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">The Pentagon building in the USA, some soccer ball patches</strong> — five sides and five corners.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Hexagon</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Honeycomb cells, some nuts and bolts</strong> — six equal sides that fit together without any gaps.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Look at a classroom door. What 2D shape is it and what are its properties?',
          steps: [
            'Look at the door and <strong style="color:#1e40af;">count the sides</strong> — a door has 4 sides.',
            'Check if the sides are <strong style="color:#1e40af;">equal</strong> — the two long sides are the same length and the two short sides are the same length, but the long sides are longer than the short sides.',
            'Check the <strong style="color:#dc2626;">angles</strong> — each corner of a door is a right angle (90°).',
            'Identify the <strong style="color:#16a34a;">shape</strong> — 4 sides with 2 pairs of equal sides and 4 right angles means it is a <strong>rectangle</strong>.',
            'Note the <strong>special property</strong> — the height of the door is greater than its width.',
          ],
          answer:
            'A door is a rectangle. It has 4 sides with 2 pairs of equal sides (opposite sides are equal), 4 right angles and 4 vertices. The height is greater than the width.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'Six real life objects each labelled with their 2D shape — a coin (circle), a yield sign (triangle), a window (square), a door (rectangle), a honeycomb (hexagon)',
      videoPlaceholder:
        'Short video showing 2D shapes found in everyday real life environments',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Naming & Counting (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'How many sides does a triangle have?', checkMode: 'auto', options: ['4', '3', '2', '5'], correctIndex: 1, explanation: 'A triangle has 3 straight sides. (4 confuses it with a quadrilateral, 2 is too few to close a shape, and 5 is a pentagon.)' },
        { difficulty: 'Easy', question: 'How many sides and how many vertices does a pentagon have?', checkMode: 'auto', options: ['5 sides, 4 vertices', '4 sides, 5 vertices', '5 sides, 5 vertices', '6 sides, 6 vertices'], correctIndex: 2, explanation: 'A pentagon has 5 straight sides and 5 vertices — one vertex where each pair of sides meets. (5 sides/4 vertices and 4 sides/5 vertices both break the rule that sides and vertices are always equal in a polygon; 6 and 6 is a hexagon.)' },
        { difficulty: 'Easy', question: 'How many straight sides and how many vertices does a circle have?', checkMode: 'auto', options: ['1 side, 1 vertex', '0 sides, 1 vertex', '1 side, 0 vertices', '0 sides, 0 vertices'], correctIndex: 3, explanation: 'A circle has one curved edge and no straight sides, so it also has no vertices (a vertex only forms where two straight sides meet). Counting the curved edge as "1 side" is a common mistake.' },
        {
          difficulty: 'Medium',
          question: 'A shape has 6 vertices. Which statement about its sides and angles is correct?',
          checkMode: 'auto',
          options: [
            'It has 6 sides and 6 angles, because each vertex is where two sides meet and one angle is formed.',
            'It has 5 sides and 6 angles, because the last vertex does not need a side.',
            'It has 6 sides but only 3 angles, because opposite angles are shared between vertices.',
            'It has 12 sides, because each vertex connects to two separate sides.',
          ],
          correctIndex: 0,
          explanation: 'In any polygon, a side runs between two vertices and an angle forms at each vertex where two sides meet, so the number of sides, vertices and angles is always the same — 6 sides and 6 angles.',
        },

        // Block 2 — Identify the Shape from Clues (pos 4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'I have 4 equal sides and 4 right angles. What shape am I?', checkMode: 'auto', options: ['Rhombus', 'Rectangle', 'Square', 'Parallelogram'], correctIndex: 2, explanation: 'A shape with 4 equal sides AND 4 right angles is a square. (A rhombus has 4 equal sides but not necessarily right angles; a rectangle has right angles but not necessarily all sides equal; a parallelogram needs neither.)' },
        { difficulty: 'Easy', question: 'I have 6 straight sides and 6 vertices. What shape am I?', checkMode: 'auto', options: ['Pentagon', 'Hexagon', 'Heptagon', 'Octagon'], correctIndex: 1, explanation: 'A closed shape with 6 straight sides is a hexagon. (A pentagon has 5 sides, a heptagon 7, and an octagon 8.)' },
        { difficulty: 'Medium', question: 'I have 4 sides, 2 pairs of equal sides, and 4 right angles, but I am longer than I am wide. What shape am I?', checkMode: 'auto', options: ['Square', 'Rhombus', 'Rectangle', 'Parallelogram'], correctIndex: 2, explanation: 'A shape with 2 pairs of equal sides, 4 right angles, and unequal length and width is a rectangle. (A square would have equal length and width; a rhombus and parallelogram do not need right angles.)' },
        { difficulty: 'Medium', question: 'I have one curved edge, no straight sides, and no vertices at all. What shape am I?', checkMode: 'auto', options: ['Oval', 'Semicircle', 'Circle', 'Sphere'], correctIndex: 2, explanation: 'A shape with one curved edge and no straight sides or vertices is a circle. (An oval is also curved but not perfectly round; a semicircle has 1 straight edge and 2 vertices; a sphere is a 3D shape, not a 2D one.)' },

        // Block 3 — Quadrilateral & Triangle Properties (pos 8-12, Medium) — richest block
        { difficulty: 'Medium', question: 'A quadrilateral has all sides equal, but its angles are not right angles. What is its name?', checkMode: 'auto', options: ['Square', 'Kite', 'Parallelogram', 'Rhombus'], correctIndex: 3, explanation: 'A quadrilateral with 4 equal sides but angles that are not necessarily 90° is a rhombus. (A square would need right angles too; a kite has only 2 pairs of equal adjacent sides, not all 4 equal; a parallelogram does not need all sides equal.)' },
        { difficulty: 'Medium', question: 'A quadrilateral has 2 pairs of parallel, equal sides, but no right angles. What is its name?', checkMode: 'auto', options: ['Rhombus', 'Rectangle', 'Parallelogram', 'Trapezium'], correctIndex: 2, explanation: 'A quadrilateral with 2 pairs of parallel, equal sides (and no right angles) is a parallelogram. (A rhombus additionally needs all 4 sides equal; a rectangle needs right angles; a trapezium has only 1 pair of parallel sides.)' },
        { difficulty: 'Medium', question: 'A triangle has 2 equal sides and 2 equal angles. What type of triangle is it?', checkMode: 'auto', options: ['Equilateral triangle', 'Scalene triangle', 'Isosceles triangle', 'Right-angled triangle'], correctIndex: 2, explanation: 'A triangle with exactly 2 equal sides (and 2 equal angles) is called an isosceles triangle. (An equilateral triangle needs all 3 sides equal; a scalene triangle has no equal sides; a right-angled triangle is defined by having a 90° angle, not by equal sides.)' },
        {
          difficulty: 'Medium',
          question: 'Look at this rectangle. Two of its sides are 6 cm and two are 4 cm long. Is it a regular or irregular polygon?',
          checkMode: 'auto',
          options: ['Regular', 'Irregular', 'Cannot be determined from the diagram', 'It is a square'],
          correctIndex: 1,
          explanation: 'A regular polygon must have all sides equal. Because two sides are 6 cm and two are 4 cm, this rectangle is irregular. (Having 2 pairs of equal sides does not make a shape regular — all 4 sides must match.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same rectangle (6 cm and 4 cm sides), how many lines of symmetry does it have?',
          checkMode: 'auto',
          options: ['4', '2', '1', '0'],
          correctIndex: 1,
          explanation: "A rectangle has 2 lines of symmetry — one horizontal and one vertical, each through the midpoints of opposite sides. (4 lines of symmetry only applies to a square, since a rectangle's diagonals are not lines of symmetry unless it is also a square.)",
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Block 4 — Sorting & Classifying (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sort these shapes: square, circle, triangle, hexagon, oval. Which shapes are NOT polygons?', checkMode: 'auto', options: ['Circle, triangle', 'Circle, hexagon, oval', 'None of these — all are polygons', 'Circle, oval'], correctIndex: 3, explanation: 'A circle and an oval both have curved edges instead of straight sides, so neither is a polygon. The square, triangle and hexagon are all straight-sided polygons.' },
        { difficulty: 'Medium', question: 'Sort these shapes: rectangle, equilateral triangle, rhombus, right-angled triangle. Which shapes have at least one right angle?', checkMode: 'auto', options: ['Rectangle, rhombus', 'Equilateral triangle, right-angled triangle', 'Rectangle only', 'Rectangle, right-angled triangle'], correctIndex: 3, explanation: 'A rectangle has 4 right angles, and a right-angled triangle has exactly 1 right angle. An equilateral triangle and a rhombus have no right angles.' },
        {
          difficulty: 'Medium',
          question: 'Look at the shapes scattered around the two circles below. Which shapes belong inside the "Curved sides" circle rather than the "Straight sides only" circle?',
          checkMode: 'auto',
          options: ['Only the circle', 'The circle and the square', 'The two five-sided shapes', 'The circle and the oval-like shape'],
          correctIndex: 3,
          explanation: 'The circle and the oval shape both have curved outlines, so they belong in the "Curved sides" group. The two five-sided shapes and the square all have only straight sides, so they stay in the "Straight sides only" group.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Straight sides only</text><text x="155" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Curved sides</text><polygon points="45,60 65,45 85,60 78,80 52,80" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="40" y="105" width="30" height="30" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="95,88 112,98 108,118 86,120 80,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="150" cy="120" r="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><ellipse cx="175" cy="150" rx="16" ry="10" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Block 5 — 2D Shapes in Real Life (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'A stop sign has 8 equal sides. What 2D shape is it?', checkMode: 'auto', options: ['Heptagon', 'Hexagon', 'Octagon', 'Pentagon'], correctIndex: 2, explanation: 'A stop sign has 8 sides, making it an octagon. (A heptagon has 7 sides, a hexagon 6, and a pentagon 5.)' },
        { difficulty: 'Medium', question: 'A honeycomb cell has 6 equal sides. What 2D shape is it?', checkMode: 'auto', options: ['Pentagon', 'Octagon', 'Hexagon', 'Heptagon'], correctIndex: 2, explanation: 'Honeycomb cells are 6-sided shapes — hexagons. (A pentagon has 5 sides, an octagon 8, and a heptagon 7.)' },

        // Block 6 — Reasoning, Comparison & Error-Spotting (pos 18-19, Hard)
        {
          difficulty: 'Hard',
          question: 'Sipho says all squares are rectangles. Is he correct?',
          checkMode: 'auto',
          options: [
            'Yes — a square meets every property of a rectangle (4 right angles, 2 pairs of equal sides), and also has all 4 sides equal.',
            'No — squares and rectangles are two completely different, unrelated shapes.',
            'No — because a square has all 4 sides equal, it cannot also count as a rectangle.',
            'Yes, but only for squares with sides longer than 5 cm.',
          ],
          correctIndex: 0,
          explanation: 'A square has 4 right angles and 2 pairs of equal sides — everything a rectangle needs — plus the extra property that all 4 sides are equal. So every square is a rectangle, but not every rectangle is a square.',
        },
        {
          difficulty: 'Hard',
          question: 'Which statement correctly explains why a circle is not a polygon?',
          checkMode: 'auto',
          options: [
            'A polygon must be a closed shape made entirely of straight sides meeting at vertices; a circle has one curved edge and no vertices.',
            'A circle is not a closed shape, so it fails the definition of a polygon.',
            'A circle has too many sides to count, so it cannot be classified as a polygon.',
            'A circle is a 3D shape, so it cannot be compared with 2D polygons.',
          ],
          correctIndex: 0,
          explanation: 'A polygon must be a closed shape made entirely of straight sides that meet at vertices. A circle has one continuous curved edge with no straight sides and no vertices, so it does not meet the definition of a polygon.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You know your 2D shapes, properties and reasoning inside out.' },
        { minScore: 15, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
        { minScore: 10, message: 'Good effort! Go back and revise the properties of each shape carefully.' },
        { minScore: 0, message: 'Keep practising! Read through the study guide again and learn each shape carefully.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Naming & Counting (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'How many sides does a hexagon have?', checkMode: 'auto', options: ['5', '6', '7', '8'], correctIndex: 1, explanation: 'A hexagon has 6 straight sides. (5 is a pentagon, 7 a heptagon, 8 an octagon.)' },
        { difficulty: 'Easy', question: 'How many sides and how many vertices does an octagon have?', checkMode: 'auto', options: ['8 sides, 7 vertices', '7 sides, 8 vertices', '6 sides, 6 vertices', '8 sides, 8 vertices'], correctIndex: 3, explanation: 'An octagon has 8 straight sides and 8 vertices — one where each pair of sides meets. (Mismatched counts of 8/7 or 7/8 break the rule that sides and vertices are always equal; 6 and 6 is a hexagon.)' },
        { difficulty: 'Easy', question: 'How many right angles does a square have?', checkMode: 'auto', options: ['2', '3', '4', '8'], correctIndex: 2, explanation: 'A square has 4 right angles, one at each corner. (2 or 3 undercounts the corners, and 8 doubles them.)' },
        { difficulty: 'Medium', question: 'A triangle and a square are two separate shapes. How many sides do they have altogether, and how many vertices do they have altogether?', checkMode: 'auto', options: ['6 sides, 6 vertices', '7 sides, 7 vertices', '8 sides, 7 vertices', '12 sides, 12 vertices'], correctIndex: 1, explanation: "A triangle has 3 sides and 3 vertices, and a square has 4 sides and 4 vertices. 3 + 4 = 7 for both totals. (6 and 6 forgets one shape's count; 8/7 mismatches sides and vertices; 12 and 12 comes from multiplying instead of adding.)" },

        // Block 2 — Identify the Shape from Clues (pos 4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'I have 3 sides that are all different lengths. What type of triangle am I?', checkMode: 'auto', options: ['Isosceles triangle', 'Equilateral triangle', 'Right-angled triangle', 'Scalene triangle'], correctIndex: 3, explanation: 'A triangle with all 3 sides different lengths is called a scalene triangle. (Isosceles needs 2 equal sides, equilateral needs all 3 equal, and right-angled is defined by a 90° angle, not by side lengths.)' },
        { difficulty: 'Easy', question: 'I have 5 straight sides and 5 vertices. What shape am I?', checkMode: 'auto', options: ['Hexagon', 'Pentagon', 'Heptagon', 'Square'], correctIndex: 1, explanation: 'A closed shape with 5 straight sides is a pentagon. (A hexagon has 6 sides, a heptagon 7, and a square only 4.)' },
        { difficulty: 'Medium', question: 'I have 4 sides that are all equal in length, but my angles are 60° and 120°, not 90°. What shape am I?', checkMode: 'auto', options: ['Square', 'Rectangle', 'Rhombus', 'Parallelogram'], correctIndex: 2, explanation: 'A shape with 4 equal sides but angles that are not 90° is a rhombus, not a square. (A square and rectangle both require right angles; a general parallelogram does not need all sides equal.)' },
        { difficulty: 'Medium', question: 'I have exactly one right angle, and my other two angles are not equal to each other. What type of triangle am I?', checkMode: 'auto', options: ['Isosceles triangle', 'Right-angled triangle', 'Equilateral triangle', 'Scalene triangle'], correctIndex: 1, explanation: 'A triangle with exactly one 90° angle is called a right-angled triangle. (Isosceles and equilateral both require equal sides/angles, which contradicts "not equal to each other"; scalene describes side lengths, not the presence of a right angle.)' },

        // Block 3 — Quadrilateral & Triangle Properties (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'A quadrilateral has exactly one pair of parallel sides. What is its name?', checkMode: 'auto', options: ['Parallelogram', 'Kite', 'Rhombus', 'Trapezium'], correctIndex: 3, explanation: 'A quadrilateral with only one pair of parallel sides is called a trapezium. (A parallelogram and rhombus both need 2 pairs of parallel sides; a kite has no parallel sides at all.)' },
        { difficulty: 'Medium', question: 'A quadrilateral has 2 pairs of adjacent equal sides, but its opposite sides are not equal or parallel. What is its name?', checkMode: 'auto', options: ['Rhombus', 'Trapezium', 'Kite', 'Parallelogram'], correctIndex: 2, explanation: 'A kite is a quadrilateral with 2 pairs of equal adjacent sides, unlike a rectangle or rhombus where opposite sides are equal. (A rhombus and parallelogram both have equal or parallel opposite sides; a trapezium is defined by one pair of parallel sides, not adjacent equal sides.)' },
        { difficulty: 'Medium', question: 'A triangle has 3 equal sides and 3 equal angles. What type of triangle is it, and is it a regular or irregular polygon?', checkMode: 'auto', options: ['Equilateral triangle, irregular', 'Isosceles triangle, regular', 'Equilateral triangle, regular', 'Scalene triangle, irregular'], correctIndex: 2, explanation: 'A triangle with all 3 sides and angles equal is an equilateral triangle. Because all its sides and angles are equal, it is also a regular polygon. (Calling it "irregular" ignores the definition of regular; isosceles only has 2 equal sides, not 3; scalene has none equal.)' },
        {
          difficulty: 'Medium',
          question: 'Look at the two quadrilateral outlines below. The tick marks show equal sides and the arrows show parallel sides. Which outline (A or B) is the parallelogram?',
          checkMode: 'auto',
          options: ['B', 'A', 'Both A and B', 'Neither A nor B'],
          correctIndex: 1,
          explanation: 'Outline A has 2 pairs of parallel sides marked with arrows and 2 pairs of equal sides marked with ticks, so it is the parallelogram. Outline B only has one pair of parallel sides, so it is a trapezium.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same two outlines (A and B), which outline is the trapezium, and how many pairs of parallel sides does it have?',
          checkMode: 'auto',
          options: ['A, one pair', 'B, two pairs', 'B, one pair', 'A, two pairs'],
          correctIndex: 2,
          explanation: 'Outline B has only one pair of parallel sides (shown by the matching arrows on the top and bottom), which makes it a trapezium. Outline A has two pairs of parallel sides, which makes it the parallelogram instead.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },

        // Block 4 — Sorting & Classifying (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sort these shapes: square, rectangle, rhombus, scalene triangle. Which shapes are regular polygons?', checkMode: 'auto', options: ['Square, rectangle', 'Rectangle, rhombus', 'Square', 'Square, rhombus'], correctIndex: 2, explanation: 'Only the square has all sides and all angles equal. A rectangle and rhombus have equal opposite sides but not all 4 equal, and a scalene triangle has no equal sides.' },
        { difficulty: 'Medium', question: 'Sort these shapes: hexagon, circle, kite, oval. Which shapes are polygons?', checkMode: 'auto', options: ['Hexagon, circle', 'Hexagon, kite', 'Circle, oval', 'Kite, oval'], correctIndex: 1, explanation: 'A hexagon and a kite are both made only of straight sides, so they are polygons. A circle and an oval have curved edges.' },
        {
          difficulty: 'Medium',
          question: 'Look at the shapes scattered around the two circles below. Which shapes belong inside the "Has a right angle" circle?',
          checkMode: 'auto',
          options: ['Only the pentagon', 'The pentagon and the equilateral-looking triangle', 'The square and the right-angled triangle', 'Only the square'],
          correctIndex: 2,
          explanation: 'The square has 4 right angles and the right-angled triangle has exactly 1 right angle, so both belong in that circle. The pentagon and the equilateral-looking triangle have no right angles.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">No right angle</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Has a right angle</text><polygon points="50,50 80,45 90,70 65,85 40,70" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="65,95 85,130 45,130" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="55" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="150,120 190,120 150,155" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Block 5 — 2D Shapes in Real Life (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'A soccer ball is covered in patches. Which two polygons are used to cover its curved surface?', checkMode: 'auto', options: ['Squares and triangles', 'Hexagons and octagons', 'Pentagons and hexagons', 'Pentagons and heptagons'], correctIndex: 2, explanation: 'Soccer balls are traditionally covered with pentagon and hexagon patches that fit together without gaps.' },
        {
          difficulty: 'Medium',
          question: 'Which statement correctly explains why floor tiles usually come in squares or hexagons rather than circles?',
          checkMode: 'auto',
          options: [
            'Squares and hexagons have straight sides that fit together perfectly with no gaps, while circles always leave gaps when packed together.',
            'Circles are more expensive to manufacture than any straight-sided shape.',
            'Squares and hexagons are the only 2D shapes that have vertices, which circles lack.',
            'Circles cannot be made flat, so they are unsuitable for floor tiles.',
          ],
          correctIndex: 0,
          explanation: 'Squares and hexagons have straight sides that fit together perfectly with no gaps between them (they tessellate). Circles are curved, so packing them together always leaves small gaps, which would waste material and leave an uneven floor.',
        },

        // Block 6 — Reasoning, Comparison & Error-Spotting (pos 18-19, Hard)
        { difficulty: 'Hard', question: 'A parallelogram and a rhombus both have 2 pairs of parallel sides. What extra property must a rhombus have that a general parallelogram does not need?', checkMode: 'auto', options: ['4 right angles', 'All 4 sides equal', 'Diagonals of equal length', 'Only 1 pair of parallel sides'], correctIndex: 1, explanation: 'A rhombus is a special parallelogram where all 4 sides are equal in length. (Right angles would make it a rectangle/square instead; equal diagonals is a rectangle property; a rhombus keeps both pairs of parallel sides, not just one.)' },
        {
          difficulty: 'Hard',
          question: 'Which property does a rhombus share with a square, but NOT with a rectangle?',
          checkMode: 'auto',
          options: ['All 4 angles are right angles.', 'All 4 sides are equal in length.', 'It has 2 pairs of parallel sides.', 'It has 4 vertices.'],
          correctIndex: 1,
          explanation: 'A rhombus and a square both always have 4 equal sides. A rectangle only needs 2 pairs of equal opposite sides, not all 4 sides equal, so the rectangle does not share this property. (Right angles is actually a property of the square and rectangle, not the rhombus; parallel sides and 4 vertices are shared by all three shapes.)',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You can identify shapes from their properties with real confidence.' },
        { minScore: 15, message: 'Great work! A quick review of the trickier properties will make this perfect.' },
        { minScore: 10, message: 'Good effort! Revisit the properties of quadrilaterals like the rhombus and trapezium.' },
        { minScore: 0, message: 'Keep going! Read through the properties of each shape again carefully.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Naming & Counting (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'How many sides does a heptagon have?', checkMode: 'auto', options: ['6', '7', '8', '9'], correctIndex: 1, explanation: 'A heptagon has 7 straight sides. (6 is a hexagon, 8 an octagon, 9 a nonagon.)' },
        { difficulty: 'Easy', question: 'How many sides does a rectangle have, and how many pairs of those sides are equal?', checkMode: 'auto', options: ['4 sides, 1 pair', '4 sides, 2 pairs', '4 sides, 4 pairs', '2 sides, 1 pair'], correctIndex: 1, explanation: 'A rectangle has 4 sides in total, made up of 2 pairs of equal opposite sides. (1 pair undercounts, since both pairs of opposite sides are equal; 4 pairs is impossible with only 4 sides; a rectangle has 4 sides, not 2.)' },
        { difficulty: 'Easy', question: 'How many vertices does a circle have, and why?', checkMode: 'auto', options: ['1, because it has one curved edge', '0, because it has no straight sides', '0, because it is too small to have corners', '2, one at the top and bottom'], correctIndex: 1, explanation: "A vertex is where two straight sides meet. A circle has one curved edge and no straight sides, so it has 0 vertices. (The curved edge itself is not a vertex, and a circle's size has nothing to do with whether it has corners.)" },
        { difficulty: 'Medium', question: 'A shape has more sides than a hexagon but fewer sides than an octagon. Name the shape.', checkMode: 'auto', options: ['Pentagon', 'Hexagon', 'Heptagon', 'Octagon'], correctIndex: 2, explanation: 'A hexagon has 6 sides and an octagon has 8 sides. The shape with 7 sides, between them, is a heptagon.' },

        // Block 2 — Identify the Shape from Clues (pos 4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'I have 3 equal sides and 3 equal angles. What type of triangle am I?', checkMode: 'auto', options: ['Scalene triangle', 'Isosceles triangle', 'Right-angled triangle', 'Equilateral triangle'], correctIndex: 3, explanation: 'A triangle with all 3 sides and all 3 angles equal is an equilateral triangle. (Scalene has none equal, isosceles has only 2 equal, and right-angled is defined by a 90° angle, not by equal sides.)' },
        { difficulty: 'Easy', question: 'I have 4 sides, 2 pairs of equal sides and 4 right angles, but I am not a square. What shape am I?', checkMode: 'auto', options: ['Rectangle', 'Rhombus', 'Parallelogram', 'Kite'], correctIndex: 0, explanation: 'A shape with 2 pairs of equal sides and 4 right angles, but not all 4 sides equal, is a rectangle. (A rhombus, parallelogram and kite do not need right angles.)' },
        { difficulty: 'Medium', question: 'I have exactly one curved edge, no corners, and I roll smoothly in every direction. What shape am I?', checkMode: 'auto', options: ['Oval', 'Semicircle', 'Circle', 'Hexagon'], correctIndex: 2, explanation: 'A shape with only a curved edge and no corners is a circle. (An oval is curved but not perfectly round, so it does not roll smoothly in every direction; a semicircle has corners; a hexagon has straight sides.)' },
        { difficulty: 'Medium', question: 'I have 6 straight sides, 6 vertices, and all my sides and angles are equal. What shape am I?', checkMode: 'auto', options: ['Irregular hexagon', 'Regular pentagon', 'Regular hexagon', 'Regular octagon'], correctIndex: 2, explanation: 'A closed shape with 6 equal sides and 6 equal angles is a regular hexagon. (An irregular hexagon would not have all sides and angles equal; a pentagon has 5 sides and an octagon has 8.)' },

        // Block 3 — Quadrilateral & Triangle Properties (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'A quadrilateral has 2 pairs of parallel sides and 2 pairs of equal sides, but no right angles. What is its name?', checkMode: 'auto', options: ['Rhombus', 'Trapezium', 'Parallelogram', 'Rectangle'], correctIndex: 2, explanation: 'A quadrilateral with 2 pairs of parallel, equal sides (and no right angles) is a parallelogram. (A rhombus additionally needs all 4 sides equal; a trapezium has only 1 pair of parallel sides; a rectangle needs right angles.)' },
        { difficulty: 'Medium', question: 'A triangle has 3 sides that are all different lengths, and 3 different angles. What type of triangle is it?', checkMode: 'auto', options: ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Right-angled triangle'], correctIndex: 2, explanation: 'A triangle with no equal sides (and therefore no equal angles) is a scalene triangle. (Equilateral needs all sides equal, isosceles needs 2 equal, and right-angled is defined by a 90° angle, which is not mentioned here.)' },
        { difficulty: 'Medium', question: 'Which shape has all sides equal AND all angles equal to 90°?', checkMode: 'auto', options: ['Rhombus', 'Rectangle', 'Square', 'Parallelogram'], correctIndex: 2, explanation: 'A square has both properties: 4 equal sides and 4 right angles (90° each). (A rhombus has equal sides but not necessarily right angles; a rectangle has right angles but not necessarily equal sides; a parallelogram needs neither.)' },
        {
          difficulty: 'Medium',
          question: 'Look at this rectangle. Two of its sides are 9 cm and two are 5 cm long. Is it a regular or irregular polygon?',
          checkMode: 'auto',
          options: ['Regular', 'Cannot be determined from the diagram', 'It is a square', 'Irregular'],
          correctIndex: 3,
          explanation: 'A regular polygon must have all sides equal. Because two sides are 9 cm and two are 5 cm, this rectangle is irregular. (Having 2 pairs of equal sides does not make a shape regular — all 4 sides must match.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Using the same rectangle (9 cm and 5 cm sides), how many lines of symmetry does it have?',
          checkMode: 'auto',
          options: ['0', '1', '2', '4'],
          correctIndex: 2,
          explanation: 'A rectangle has 2 lines of symmetry — one horizontal and one vertical, each through the midpoints of opposite sides. (4 lines of symmetry only applies to a square.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Block 4 — Sorting & Classifying (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sort these shapes: pentagon, circle, rhombus, oval, heptagon. Which shapes are polygons?', checkMode: 'auto', options: ['Pentagon, circle, heptagon', 'Circle, oval', 'Pentagon, rhombus, heptagon', 'Pentagon, rhombus, oval'], correctIndex: 2, explanation: 'A pentagon, rhombus, and heptagon are all made of straight sides only. A circle and an oval have curved edges, so they are not polygons.' },
        { difficulty: 'Medium', question: 'Sort these shapes: equilateral triangle, isosceles triangle, square, kite. Which shapes are regular polygons?', checkMode: 'auto', options: ['Isosceles triangle, kite', 'Equilateral triangle, isosceles triangle', 'Equilateral triangle, square', 'Square, kite'], correctIndex: 2, explanation: 'An equilateral triangle and a square both have all sides and all angles equal, making them regular polygons. An isosceles triangle and a kite do not have all sides equal.' },
        {
          difficulty: 'Medium',
          question: 'Look at the shapes scattered around the two circles below. Which shapes belong inside the "Regular" circle?',
          checkMode: 'auto',
          options: ['The rectangle and the kite-shaped outline', 'Only the square', 'The square and the equilateral-looking triangle', 'The rectangle and the equilateral-looking triangle'],
          correctIndex: 2,
          explanation: 'The square and the equal-sided triangle have all sides and angles equal, so they are regular. The rectangle and the kite-shaped outline do not have all sides equal, so they are irregular.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Irregular</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Regular</text><rect x="35" y="55" width="45" height="25" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="65,100 85,118 65,140 45,118" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="140" y="60" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="160,115 180,145 140,145" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Block 5 — 2D Shapes in Real Life (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'A book cover has 2 pairs of equal sides and 4 right angles, and it is longer than it is wide. What 2D shape is it?', checkMode: 'auto', options: ['Square', 'Rectangle', 'Rhombus', 'Parallelogram'], correctIndex: 1, explanation: 'A book cover with those properties matches a rectangle. (A square would need equal length and width; a rhombus and parallelogram do not need right angles.)' },
        { difficulty: 'Medium', question: 'A slice of watermelon (the curved rind) reminds us of part of which 2D shape?', checkMode: 'auto', options: ['Triangle', 'Oval', 'Circle', 'Hexagon'], correctIndex: 2, explanation: 'A whole watermelon is round like a circle (a sphere in 3D), so a slice shows part of a circle. (A watermelon is not shaped like a triangle or hexagon, and although it can look slightly oval, it is closest to a circle.)' },

        // Block 6 — Reasoning, Comparison & Error-Spotting (pos 18-19, Hard)
        {
          difficulty: 'Hard',
          question: 'Amahle says all rectangles are squares. Is she correct?',
          checkMode: 'auto',
          options: [
            'Yes — a rectangle has 4 right angles, which is the only property a square needs.',
            'No — a rectangle only needs 2 pairs of equal sides, not all 4 sides equal, so not every rectangle is a square.',
            'No — rectangles and squares are two completely different, unrelated shapes.',
            'Yes, but only for rectangles with sides longer than 5 cm.',
          ],
          correctIndex: 1,
          explanation: 'A rectangle only needs 2 pairs of equal opposite sides and 4 right angles — it does not need all 4 sides equal. A square is a special rectangle with the extra property that all 4 sides are equal, so not every rectangle is a square.',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo describes a shape: "It has 4 sides, all 4 angles are right angles, and all 4 sides are 5 cm." Then he calls it a rhombus. Which statement correctly identifies his mistake?',
          checkMode: 'auto',
          options: [
            'He is correct — any 4-sided shape with equal sides is a rhombus.',
            'He is incorrect — a shape with 4 equal sides and 4 right angles is a square, not a rhombus, since a rhombus does not need right angles.',
            'He is incorrect — the shape he describes is actually a rectangle, since it has right angles.',
            'He is correct, because a square is just another name for a rhombus.',
          ],
          correctIndex: 1,
          explanation: 'A shape with 4 equal sides and 4 right angles is a square, not a rhombus. A rhombus has 4 equal sides too, but its angles do not have to be 90°.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have fully mastered 2D shapes across every skill.' },
        { minScore: 15, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
        { minScore: 10, message: 'Good effort! Go back and read through the sections you found tricky.' },
        { minScore: 0, message: 'Keep going! Read through the whole study guide again carefully and then retry.' },
      ],
    },
  ],
}
