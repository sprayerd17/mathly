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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
      diagramPlaceholder:
        'Six real life objects each labelled with their 2D shape — a coin (circle), a yield sign (triangle), a window (square), a door (rectangle), a honeycomb (hexagon)',
      videoPlaceholder:
        'Short video showing 2D shapes found in everyday real life environments',
    },
  ],

  topicPractice: [

    // ── SECTION 1 — What are 2D Shapes ───────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'How many sides and vertices does a hexagon have?',
      checkMode: 'auto',
      answer: 'a) 6   b) 6',
      parts: [
        {
          label: 'a) Number of sides',
          correctAnswer: '6',
          correctAnswers: ['6', 'six'],
          explanation: 'A hexagon has 6 sides.',
        },
        {
          label: 'b) Number of vertices',
          correctAnswer: '6',
          correctAnswers: ['6', 'six'],
          explanation: 'A hexagon has 6 vertices — one at each corner where two sides meet.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Describe the properties of a square. Include the number of sides, vertices, angles and whether the sides are equal.',
      checkMode: 'self',
      answer:
        'A square has 4 equal sides, 4 vertices and 4 right angles (90°). Because all sides are equal and all angles are equal, it is a regular quadrilateral.',
    },

    {
      difficulty: 'Hard',
      question:
        'A shape has 5 sides and 5 vertices. All sides are equal and all angles are equal.',
      checkMode: 'auto',
      answer: 'a) Pentagon   b) Regular   c) 5',
      parts: [
        {
          label: 'a) Name of this shape',
          correctAnswer: 'Pentagon',
          correctAnswers: ['Pentagon', 'pentagon', 'a pentagon'],
          explanation:
            'A closed shape with 5 straight sides and 5 vertices is a pentagon.',
        },
        {
          label: 'b) Regular or irregular polygon?',
          correctAnswer: 'Regular',
          correctAnswers: ['Regular', 'regular', 'regular polygon'],
          explanation:
            'Because all 5 sides are equal in length and all 5 angles are equal in size, it is a regular polygon.',
        },
        {
          label: 'c) Number of lines of symmetry',
          correctAnswer: '5',
          correctAnswers: ['5', 'five'],
          explanation:
            'A regular pentagon has 5 lines of symmetry — one through each vertex and the midpoint of the opposite side.',
        },
      ],
    },

    // ── SECTION 2 — Sorting and Classifying 2D Shapes ────────────────────────

    {
      difficulty: 'Easy',
      question: 'Is a circle a polygon? Write yes or no and give one reason.',
      checkMode: 'self',
      answer:
        'No. A circle is not a polygon because it has a curved edge, not straight sides. A polygon must be a closed shape with straight sides only.',
    },

    {
      difficulty: 'Medium',
      question:
        'Sort these shapes into two groups — shapes with right angles and shapes without right angles:\nsquare, circle, triangle, rectangle, equilateral triangle, right-angled triangle',
      checkMode: 'auto',
      answer: 'a) square, rectangle, right-angled triangle   b) circle, equilateral triangle',
      parts: [
        {
          label: 'a) Shapes with right angles',
          correctAnswer: 'square, rectangle, right-angled triangle',
          correctAnswers: [
            'square, rectangle, right-angled triangle',
            'square, right-angled triangle, rectangle',
            'rectangle, square, right-angled triangle',
            'rectangle, right-angled triangle, square',
            'right-angled triangle, square, rectangle',
            'right-angled triangle, rectangle, square',
          ],
          explanation:
            'A square has 4 right angles, a rectangle has 4 right angles, and a right-angled triangle has exactly 1 right angle.',
        },
        {
          label: 'b) Shapes without right angles',
          correctAnswer: 'circle, equilateral triangle',
          correctAnswers: [
            'circle, equilateral triangle',
            'equilateral triangle, circle',
          ],
          explanation:
            'A circle has no angles at all. An equilateral triangle has three 60° angles — none are right angles.',
        },
      ],
    },

    // Q6 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long. All angles are right angles.',
      checkMode: 'auto',
      answer: 'a) Rectangle   b) Irregular   c) 2',
      parts: [
        {
          label: 'a) Name of this shape',
          correctAnswer: 'Rectangle',
          correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'],
          explanation:
            'A shape with 4 sides, 2 pairs of equal sides and 4 right angles is a rectangle.',
        },
        {
          label: 'b) Regular or irregular?',
          correctAnswer: 'Irregular',
          correctAnswers: ['Irregular', 'irregular', 'irregular polygon'],
          explanation:
            'It is irregular because not all sides are equal — two sides are 5 cm and two sides are 3 cm.',
        },
        {
          label: 'c) Number of lines of symmetry',
          correctAnswer: '2',
          correctAnswers: ['2', 'two'],
          explanation:
            'A rectangle has 2 lines of symmetry — one horizontal and one vertical, each running through the midpoints of opposite sides.',
        },
      ],
    },

    // Q6 d — self mark
    {
      difficulty: 'Hard',
      question:
        'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long. All angles are right angles.\nd) What makes this shape different from a square?',
      checkMode: 'self',
      answer:
        'A square has all 4 sides equal in length. This shape (a rectangle) has 2 pairs of equal sides — the two long sides are equal and the two short sides are equal, but the long sides are longer than the short sides.',
    },

    // ── SECTION 3 — Comparing and Contrasting 2D Shapes ──────────────────────

    {
      difficulty: 'Easy',
      question: 'Write one similarity and one difference between a square and a rectangle.',
      checkMode: 'self',
      answer:
        'Similarity: both have 4 sides, 4 vertices and 4 right angles.\nDifference: a square has 4 equal sides, but a rectangle has 2 pairs of equal sides (opposite sides are equal but adjacent sides differ).',
    },

    {
      difficulty: 'Medium',
      question:
        'Compare a triangle and a pentagon.\na) Write two similarities.\nb) Write two differences.',
      checkMode: 'self',
      answer:
        'a) Similarities: both are polygons (closed shapes with straight sides only); both have vertices where their sides meet.\nb) Differences: a triangle has 3 sides while a pentagon has 5 sides; a triangle has 3 vertices while a pentagon has 5 vertices.',
    },

    {
      difficulty: 'Hard',
      question:
        'Lerato says a square is just a special rectangle. Is she correct? Explain fully using the properties of both shapes.',
      checkMode: 'self',
      answer:
        'Yes, she is correct. A rectangle has 4 sides, 4 right angles and 2 pairs of equal sides. A square has all of these same properties, but it also has all 4 sides equal in length. This means a square satisfies every condition of a rectangle, making it a special type of rectangle.',
    },

    // ── SECTION 4 — 2D Shapes in the Environment ─────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Name the 2D shape that best describes each object.',
      checkMode: 'auto',
      answer: 'a) Circle   b) Rectangle   c) Triangle',
      parts: [
        {
          label: 'a) A coin',
          correctAnswer: 'Circle',
          correctAnswers: ['Circle', 'circle', 'a circle'],
          explanation:
            'A coin is round with no straight sides or corners — it is a circle.',
        },
        {
          label: 'b) A classroom door',
          correctAnswer: 'Rectangle',
          correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'],
          explanation:
            'A door has 4 sides with 2 pairs of equal sides and 4 right angles — it is a rectangle.',
        },
        {
          label: 'c) A yield road sign',
          correctAnswer: 'Triangle',
          correctAnswers: ['Triangle', 'triangle', 'a triangle'],
          explanation:
            'A yield sign has 3 sides and 3 corners — it is a triangle.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Look around your classroom or home. Find one real life example of each shape.\na) Square\nb) Rectangle\nc) Circle',
      checkMode: 'self',
      answer:
        'Accept any valid real life examples.\na) Square — e.g. a tile, a sticky note, a chessboard square.\nb) Rectangle — e.g. a book, a door, a ruler, a screen.\nc) Circle — e.g. a clock, a coin, a wheel, a plate.',
    },

    // Q12 a/b — auto checked
    {
      difficulty: 'Hard',
      question:
        'A soccer ball has patches that are pentagons and hexagons.',
      checkMode: 'auto',
      answer: 'a) 5   b) 6',
      parts: [
        {
          label: 'a) How many sides does a pentagon have?',
          correctAnswer: '5',
          correctAnswers: ['5', 'five'],
          explanation: 'A pentagon has 5 sides.',
        },
        {
          label: 'b) How many sides does a hexagon have?',
          correctAnswer: '6',
          correctAnswers: ['6', 'six'],
          explanation: 'A hexagon has 6 sides.',
        },
      ],
    },

    // Q12 c/d — self mark
    {
      difficulty: 'Hard',
      question:
        'A soccer ball has patches that are pentagons and hexagons.\nc) Why do you think these two shapes are used together on a soccer ball?\nd) What property must the shapes have to fit together without gaps?',
      checkMode: 'self',
      answer:
        'c) Pentagons and hexagons fit together perfectly to cover the curved surface of a soccer ball with no gaps and no overlapping.\nd) The shapes must tessellate — meaning they can fit together edge to edge without leaving any gaps.',
    },

  ],

  scoreMessages: [
    { minScore: 23, message: 'Perfect score! You have mastered 2D Shapes.' },
    { minScore: 18, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 12, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
