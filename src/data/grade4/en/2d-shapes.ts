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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
    // SET 1 — FOUNDATIONS: NAMING SHAPES, COUNTING SIDES & VERTICES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'How many sides does a triangle have?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], answer: '3', explanation: 'A triangle has 3 straight sides.' },
        { difficulty: 'Easy', question: 'How many vertices does a triangle have?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], answer: '3', explanation: 'A triangle has 3 vertices — one at each corner where two sides meet.' },
        { difficulty: 'Easy', question: 'How many sides does a square have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], answer: '4', explanation: 'A square has 4 sides, all equal in length.' },
        { difficulty: 'Easy', question: 'How many sides does a rectangle have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], answer: '4', explanation: 'A rectangle has 4 sides, with 2 pairs of equal opposite sides.' },
        { difficulty: 'Easy', question: 'How many sides does a pentagon have?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], answer: '5', explanation: 'A pentagon has 5 straight sides.' },
        { difficulty: 'Easy', question: 'How many vertices does a pentagon have?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], answer: '5', explanation: 'A pentagon has 5 vertices — one at each corner.' },
        { difficulty: 'Easy', question: 'How many sides does a hexagon have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], answer: '6', explanation: 'A hexagon has 6 straight sides.' },
        { difficulty: 'Easy', question: 'How many vertices does a hexagon have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], answer: '6', explanation: 'A hexagon has 6 vertices — one at each corner.' },
        { difficulty: 'Easy', question: 'How many sides does a heptagon have?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'seven'], answer: '7', explanation: 'A heptagon has 7 straight sides.' },
        { difficulty: 'Easy', question: 'How many sides does an octagon have?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], answer: '8', explanation: 'An octagon has 8 straight sides.' },
        { difficulty: 'Easy', question: 'How many vertices does an octagon have?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], answer: '8', explanation: 'An octagon has 8 vertices — one at each corner.' },
        { difficulty: 'Easy', question: 'How many straight sides does a circle have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], answer: '0', explanation: 'A circle has 0 straight sides — its edge is one curved line.' },
        { difficulty: 'Easy', question: 'How many vertices does a circle have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], answer: '0', explanation: 'A circle has no vertices because it has no straight sides that meet at corners.' },
        { difficulty: 'Easy', question: 'I have 3 sides and 3 angles. What shape am I?', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle', 'a triangle'], answer: 'Triangle', explanation: 'A shape with 3 sides and 3 angles is a triangle.' },
        { difficulty: 'Easy', question: 'I have 4 equal sides and 4 right angles. What shape am I?', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square', 'a square'], answer: 'Square', explanation: 'A shape with 4 equal sides and 4 right angles is a square.' },
        { difficulty: 'Easy', question: 'I have 4 sides, 2 pairs of equal sides and 4 right angles, but I am longer than I am wide. What shape am I?', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], answer: 'Rectangle', explanation: 'A shape with 2 pairs of equal sides, 4 right angles, and unequal length and width is a rectangle.' },
        { difficulty: 'Easy', question: 'I have 5 straight sides and 5 vertices. What shape am I?', checkMode: 'auto', correctAnswer: 'Pentagon', correctAnswers: ['Pentagon', 'pentagon', 'a pentagon'], answer: 'Pentagon', explanation: 'A closed shape with 5 straight sides is a pentagon.' },
        { difficulty: 'Easy', question: 'I have 6 straight sides and 6 vertices. What shape am I?', checkMode: 'auto', correctAnswer: 'Hexagon', correctAnswers: ['Hexagon', 'hexagon', 'a hexagon'], answer: 'Hexagon', explanation: 'A closed shape with 6 straight sides is a hexagon.' },
        { difficulty: 'Easy', question: 'I have one curved edge and no straight sides or corners. What shape am I?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A shape with one curved edge and no straight sides is a circle.' },
        { difficulty: 'Medium', question: 'What do we call a closed 2D shape made entirely of straight sides?', checkMode: 'auto', correctAnswer: 'Polygon', correctAnswers: ['Polygon', 'polygon', 'a polygon'], answer: 'Polygon', explanation: 'A closed shape made only of straight sides, with no gaps, is called a polygon.' },
        { difficulty: 'Medium', question: 'What is another name for a 4-sided shape?', checkMode: 'auto', correctAnswer: 'Quadrilateral', correctAnswers: ['Quadrilateral', 'quadrilateral', 'a quadrilateral'], answer: 'Quadrilateral', explanation: 'Any shape with 4 sides and 4 vertices is called a quadrilateral.' },
        { difficulty: 'Medium', question: 'How many angles does a shape have if it has 7 vertices?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'seven'], answer: '7', explanation: 'The number of angles in a polygon always equals its number of vertices, so 7 vertices means 7 angles.' },
        { difficulty: 'Medium', question: 'A shape has 8 sides. How many vertices does it have?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], answer: '8', explanation: 'In any polygon, the number of vertices equals the number of sides, so 8 sides means 8 vertices.' },
        { difficulty: 'Medium', question: 'What is the name of a right angle in degrees?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°', 'ninety'], answer: '90°', explanation: 'A right angle measures exactly 90°.' },
        { difficulty: 'Hard', question: 'A shape has more sides than a hexagon but fewer sides than an octagon. Name the shape.', checkMode: 'auto', correctAnswer: 'Heptagon', correctAnswers: ['Heptagon', 'heptagon', 'a heptagon'], answer: 'Heptagon', explanation: 'A hexagon has 6 sides and an octagon has 8 sides. The shape with 7 sides, between them, is a heptagon.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You know your 2D shapes, sides and vertices inside out.' },
        { minScore: 19, message: 'Excellent work! Review the shapes you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back and revise the number of sides and vertices for each shape.' },
        { minScore: 0, message: 'Keep practising! Read through the study guide again and learn each shape carefully.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER PROPERTIES & IDENTIFYING FROM CLUES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Properties and Clues',
      questions: [
        { difficulty: 'Easy', question: 'I have 4 sides that are all equal in length and 4 right angles. What shape am I?', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square', 'a square'], answer: 'Square', explanation: 'Equal sides and right angles are the properties of a square.' },
        { difficulty: 'Easy', question: 'I have 3 sides that are all different lengths. What type of triangle am I?', checkMode: 'auto', correctAnswer: 'Scalene triangle', correctAnswers: ['Scalene triangle', 'scalene', 'a scalene triangle'], answer: 'Scalene triangle', explanation: 'A triangle with all 3 sides different lengths is called a scalene triangle.' },
        { difficulty: 'Easy', question: 'I have 3 equal sides and 3 equal angles. What type of triangle am I?', checkMode: 'auto', correctAnswer: 'Equilateral triangle', correctAnswers: ['Equilateral triangle', 'equilateral', 'an equilateral triangle'], answer: 'Equilateral triangle', explanation: 'A triangle with all 3 sides and all 3 angles equal is an equilateral triangle.' },
        { difficulty: 'Easy', question: 'I have exactly one right angle. What type of triangle am I?', checkMode: 'auto', correctAnswer: 'Right-angled triangle', correctAnswers: ['Right-angled triangle', 'right angled triangle', 'a right-angled triangle'], answer: 'Right-angled triangle', explanation: 'A triangle with exactly one 90° angle is called a right-angled triangle.' },
        { difficulty: 'Easy', question: 'How many right angles does a rectangle have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], answer: '4', explanation: 'A rectangle has 4 right angles, one at each corner.' },
        { difficulty: 'Medium', question: 'A quadrilateral has all sides equal, but its angles are not right angles. What is its name?', checkMode: 'auto', correctAnswer: 'Rhombus', correctAnswers: ['Rhombus', 'rhombus', 'a rhombus'], answer: 'Rhombus', explanation: 'A quadrilateral with 4 equal sides but angles that are not necessarily 90° is a rhombus.' },
        { difficulty: 'Medium', question: 'A quadrilateral has 2 pairs of parallel sides and 2 pairs of equal sides, but no right angles. What is its name?', checkMode: 'auto', correctAnswer: 'Parallelogram', correctAnswers: ['Parallelogram', 'parallelogram', 'a parallelogram'], answer: 'Parallelogram', explanation: 'A quadrilateral with 2 pairs of parallel, equal sides (and no right angles) is a parallelogram.' },
        { difficulty: 'Medium', question: 'A quadrilateral has exactly one pair of parallel sides. What is its name?', checkMode: 'auto', correctAnswer: 'Trapezium', correctAnswers: ['Trapezium', 'trapezium', 'a trapezium', 'trapezoid', 'a trapezoid'], answer: 'Trapezium', explanation: 'A quadrilateral with only one pair of parallel sides is called a trapezium.' },
        { difficulty: 'Medium', question: 'Which shape has all sides equal AND all angles equal to 90°?', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square', 'a square'], answer: 'Square', explanation: 'A square has both properties: 4 equal sides and 4 right angles (90° each).' },
        { difficulty: 'Medium', question: 'Which shape has 2 pairs of equal sides and 4 right angles, but its 4 sides are not all equal?', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], answer: 'Rectangle', explanation: 'A rectangle has opposite sides equal and 4 right angles, but adjacent sides can differ in length.' },
        { difficulty: 'Medium', question: 'Compare a square and a rhombus. Which property do BOTH shapes always have?', checkMode: 'auto', correctAnswer: '4 equal sides', correctAnswers: ['4 equal sides', 'all sides equal', 'four equal sides'], answer: '4 equal sides', explanation: 'Both a square and a rhombus always have 4 equal sides. A square must also have right angles, but a rhombus does not need to.' },
        { difficulty: 'Medium', question: 'A shape has 5 equal sides and 5 equal angles. Is it a regular or irregular polygon?', checkMode: 'auto', correctAnswer: 'Regular', correctAnswers: ['Regular', 'regular', 'regular polygon'], answer: 'Regular', explanation: 'A polygon with all sides and all angles equal is a regular polygon — in this case a regular pentagon.' },
        { difficulty: 'Medium', question: 'A rectangle has sides of different lengths. Is it a regular or irregular polygon?', checkMode: 'auto', correctAnswer: 'Irregular', correctAnswers: ['Irregular', 'irregular', 'irregular polygon'], answer: 'Irregular', explanation: 'Because not all sides of a rectangle are equal, it is an irregular polygon.' },
        { difficulty: 'Medium', question: 'Which two shapes both have exactly 4 sides and 4 vertices: a pentagon and a rectangle, or a rhombus and a rectangle?', checkMode: 'auto', correctAnswer: 'Rhombus and a rectangle', correctAnswers: ['Rhombus and a rectangle', 'a rhombus and a rectangle', 'rhombus and rectangle'], answer: 'Rhombus and a rectangle', explanation: 'A rhombus and a rectangle are both quadrilaterals with 4 sides and 4 vertices. A pentagon has 5 sides, so it does not match.' },
        { difficulty: 'Medium', question: 'A triangle has 2 equal sides and 2 equal angles. What type of triangle is it?', checkMode: 'auto', correctAnswer: 'Isosceles triangle', correctAnswers: ['Isosceles triangle', 'isosceles', 'an isosceles triangle'], answer: 'Isosceles triangle', explanation: 'A triangle with exactly 2 equal sides (and 2 equal angles) is called an isosceles triangle.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does a square have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], answer: '4', explanation: 'A square has 4 lines of symmetry — 2 through the midpoints of opposite sides, and 2 through opposite corners.' },
        { difficulty: 'Medium', question: 'How many lines of symmetry does a rectangle have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], answer: '2', explanation: 'A rectangle has 2 lines of symmetry — one horizontal and one vertical, each through the midpoints of opposite sides.' },
        { difficulty: 'Hard', question: 'A shape has 4 sides. Two sides are 6 cm and two sides are 4 cm. All angles are right angles. Is this shape regular or irregular?', checkMode: 'auto', correctAnswer: 'Irregular', correctAnswers: ['Irregular', 'irregular', 'irregular polygon'], answer: 'Irregular', explanation: 'Because the sides are not all equal (6 cm and 4 cm), this rectangle is an irregular polygon.' },
        { difficulty: 'Hard', question: 'A shape has 4 equal sides, but its angles are 60° and 120°, not 90°. What is the name of this shape?', checkMode: 'auto', correctAnswer: 'Rhombus', correctAnswers: ['Rhombus', 'rhombus', 'a rhombus'], answer: 'Rhombus', explanation: 'A quadrilateral with 4 equal sides but angles that are not 90° is a rhombus, not a square.' },
        { difficulty: 'Hard', question: 'Which shape below is NOT a polygon: hexagon, rhombus, or circle?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A circle has a curved edge, not straight sides, so it cannot be a polygon. A hexagon and rhombus both have only straight sides.' },
        { difficulty: 'Hard', question: 'A shape has exactly one pair of parallel sides and the other two sides are not parallel. What is its name?', checkMode: 'auto', correctAnswer: 'Trapezium', correctAnswers: ['Trapezium', 'trapezium', 'a trapezium', 'trapezoid', 'a trapezoid'], answer: 'Trapezium', explanation: 'A trapezium is defined by having exactly one pair of parallel sides.' },
        { difficulty: 'Hard', question: 'Sipho says all squares are rectangles. Is he correct? Write yes or no.', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], answer: 'Yes', explanation: 'Yes — a square has 4 right angles and 2 pairs of equal sides, satisfying every property of a rectangle, plus all 4 sides equal.' },
        { difficulty: 'Hard', question: 'Amahle says all rectangles are squares. Is she correct? Write yes or no.', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], answer: 'No', explanation: 'No — a rectangle only needs 2 pairs of equal sides, not all 4 sides equal, so not every rectangle is a square.' },
        { difficulty: 'Hard', question: 'A parallelogram and a rhombus both have 2 pairs of parallel sides. What extra property must a rhombus have that a general parallelogram does not need?', checkMode: 'auto', correctAnswer: 'All 4 sides equal', correctAnswers: ['All 4 sides equal', 'all sides equal', '4 equal sides'], answer: 'All 4 sides equal', explanation: 'A rhombus is a special parallelogram where all 4 sides are equal in length.' },
        { difficulty: 'Hard', question: 'A shape has 6 equal sides and 6 equal angles. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], answer: '6', explanation: 'A regular hexagon has 6 lines of symmetry — one through each pair of opposite vertices or opposite sides.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You can identify shapes from their properties with confidence.' },
        { minScore: 19, message: 'Great work! A quick review of the trickier properties will make this perfect.' },
        { minScore: 13, message: 'Good effort! Revisit the properties of quadrilaterals like the rhombus and trapezium.' },
        { minScore: 0, message: 'Keep going! Read through the properties of each shape again carefully.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — SORTING, CLASSIFYING & REAL-WORLD SHAPES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Sorting and Real Life',
      questions: [
        { difficulty: 'Easy', question: 'Is a circle a polygon? Write yes or no.', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], answer: 'No', explanation: 'A circle has a curved edge, not straight sides, so it is not a polygon.' },
        { difficulty: 'Easy', question: 'Is a triangle a polygon? Write yes or no.', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], answer: 'Yes', explanation: 'A triangle is a closed shape made only of straight sides, so it is a polygon.' },
        { difficulty: 'Easy', question: 'A coin is round with no straight sides. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A coin has a curved edge and no corners — it is a circle.' },
        { difficulty: 'Easy', question: 'A classroom door has 4 sides, 2 pairs of equal sides and 4 right angles. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], answer: 'Rectangle', explanation: 'A door with 2 pairs of equal sides and 4 right angles is shaped like a rectangle.' },
        { difficulty: 'Easy', question: 'A yield (give way) road sign has 3 sides and 3 corners. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle', 'a triangle'], answer: 'Triangle', explanation: 'A road sign with 3 sides and 3 corners is a triangle.' },
        { difficulty: 'Easy', question: 'A chessboard is made up of small blocks that all have equal sides and 4 right angles. What 2D shape is each block?', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square', 'a square'], answer: 'Square', explanation: 'Each chessboard block has 4 equal sides and 4 right angles — a square.' },
        { difficulty: 'Easy', question: 'A honeycomb cell has 6 equal sides. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Hexagon', correctAnswers: ['Hexagon', 'hexagon', 'a hexagon'], answer: 'Hexagon', explanation: 'Honeycomb cells are 6-sided shapes — hexagons.' },
        { difficulty: 'Easy', question: 'A wheel has no straight sides and no corners. What 2D shape does it look like?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A wheel is round with no straight sides — it is shaped like a circle.' },
        { difficulty: 'Medium', question: 'Sort these into polygons and non-polygons: square, circle, hexagon. Which one is NOT a polygon?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A square and a hexagon are made of straight sides, so they are polygons. A circle has a curved edge, so it is not.' },
        { difficulty: 'Medium', question: 'Sort these shapes: square, rectangle, right-angled triangle, circle, equilateral triangle. Which shapes have at least one right angle?', checkMode: 'auto', correctAnswer: 'Square, rectangle, right-angled triangle', correctAnswers: ['Square, rectangle, right-angled triangle', 'square, right-angled triangle, rectangle', 'rectangle, square, right-angled triangle', 'rectangle, right-angled triangle, square', 'right-angled triangle, square, rectangle', 'right-angled triangle, rectangle, square'], answer: 'Square, rectangle, right-angled triangle', explanation: 'A square and rectangle both have 4 right angles, and a right-angled triangle has exactly 1 right angle.' },
        { difficulty: 'Medium', question: 'Sort these shapes: square, equilateral triangle, rectangle, scalene triangle. Which shapes are regular polygons?', checkMode: 'auto', correctAnswer: 'Square, equilateral triangle', correctAnswers: ['Square, equilateral triangle', 'equilateral triangle, square'], answer: 'Square, equilateral triangle', explanation: 'A square and an equilateral triangle both have all sides and all angles equal, making them regular polygons.' },
        { difficulty: 'Medium', question: 'A soccer ball is covered in patches. Which two polygons are used to cover its curved surface?', checkMode: 'auto', correctAnswer: 'Pentagons and hexagons', correctAnswers: ['Pentagons and hexagons', 'hexagons and pentagons', 'pentagon and hexagon', 'hexagon and pentagon'], answer: 'Pentagons and hexagons', explanation: 'Soccer balls are traditionally covered with pentagon and hexagon patches that fit together without gaps.' },
        { difficulty: 'Medium', question: 'A roof shape and a pizza slice are both examples of which 2D shape?', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle', 'a triangle'], answer: 'Triangle', explanation: 'Both a roof shape and a pizza slice have 3 sides and 3 corners — a triangle.' },
        { difficulty: 'Medium', question: 'Sort these into shapes with straight sides only and shapes with curved sides: triangle, circle, hexagon, oval. Which shapes have curved sides?', checkMode: 'auto', correctAnswer: 'Circle, oval', correctAnswers: ['Circle, oval', 'oval, circle'], answer: 'Circle, oval', explanation: 'A circle and an oval both have curved edges. A triangle and hexagon have only straight sides.' },
        { difficulty: 'Medium', question: 'Thabo says a window is shaped like a quadrilateral. Is a square window also a quadrilateral? Write yes or no.', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], answer: 'Yes', explanation: 'Yes — a square has 4 sides, so it is a type of quadrilateral just like a rectangle.' },
        { difficulty: 'Medium', question: 'A stop sign has 8 equal sides. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Octagon', correctAnswers: ['Octagon', 'octagon', 'an octagon'], answer: 'Octagon', explanation: 'A stop sign has 8 sides, making it an octagon.' },
        { difficulty: 'Medium', question: 'A book cover has 2 pairs of equal sides and 4 right angles, and it is longer than it is wide. What 2D shape is it?', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], answer: 'Rectangle', explanation: 'A book cover with those properties matches a rectangle.' },
        { difficulty: 'Medium', question: 'A slice of watermelon (the curved rind) reminds us of part of which 2D shape?', checkMode: 'auto', correctAnswer: 'Circle', correctAnswers: ['Circle', 'circle', 'a circle'], answer: 'Circle', explanation: 'A whole watermelon is round like a circle (a sphere in 3D), so a slice shows part of a circle.' },
        { difficulty: 'Hard', question: 'Lerato sorts shapes by number of sides. She has a square and a rhombus in one group. What do these two shapes have in common?', checkMode: 'self', answer: 'Both a square and a rhombus have 4 sides and 4 vertices, and both have all 4 sides equal in length. They are both quadrilaterals.' },
        { difficulty: 'Hard', question: 'Amahle finds a stop sign, a soccer ball patch, and a pizza box lid. Match each object to the shape family it belongs to: polygon or non-polygon.', checkMode: 'self', answer: 'A stop sign (octagon), a soccer ball patch (pentagon or hexagon), and a pizza box lid (square or rectangle) are all polygons because each is made of straight sides only.' },
        { difficulty: 'Hard', question: 'Sipho says: "Any shape with 4 sides is a square." Explain why this is incorrect, giving one example of a 4-sided shape that is not a square.', checkMode: 'self', answer: 'Sipho is incorrect. A shape with 4 sides is called a quadrilateral, but not every quadrilateral is a square. For example, a rectangle has 4 sides and 4 right angles, but its sides are not all equal, so it is not a square.' },
        { difficulty: 'Hard', question: 'Explain why a honeycomb uses hexagons rather than circles to build its cells.', checkMode: 'self', answer: 'Hexagons have straight sides that fit together perfectly with no gaps (they tessellate), while circles are curved and would leave gaps between them if packed together. Hexagons make the most efficient use of space.' },
        { difficulty: 'Hard', question: 'Thabo looks at a window with 4 equal sides and 4 right angles, and a door with 2 pairs of equal sides and 4 right angles. Name each shape and explain the difference between them.', checkMode: 'self', answer: 'The window is a square because it has 4 equal sides and 4 right angles. The door is a rectangle because it has 2 pairs of equal sides (not all 4 equal) and 4 right angles. The difference is that a square has all sides the same length, while a rectangle only has opposite sides equal.' },
        { difficulty: 'Hard', question: 'A kite-shaped decoration has 2 pairs of adjacent equal sides, but the opposite sides are not equal or parallel. Which quadrilateral is being described?', checkMode: 'auto', correctAnswer: 'Kite', correctAnswers: ['Kite', 'kite', 'a kite'], answer: 'Kite', explanation: 'A kite is a quadrilateral with 2 pairs of equal adjacent sides, unlike a rectangle or rhombus where opposite sides are equal.' },
        { difficulty: 'Hard', question: 'Give one real-life example of a hexagon and explain how you know it has 6 sides.', checkMode: 'self', answer: 'A honeycomb cell is a real-life example of a hexagon. I know it has 6 sides because I can count each straight edge around the cell, and there are 6 of them meeting at 6 vertices.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You can sort and classify shapes and spot them in the real world with ease.' },
        { minScore: 19, message: 'Excellent work! Review the sorting questions you missed and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Practise sorting shapes by their properties and looking for shapes around you.' },
        { minScore: 0, message: 'Keep practising! Revisit the sorting and real-life sections of the study guide.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED & SELF-CHECK REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Mixed and Reasoning',
      questions: [
        { difficulty: 'Easy', question: 'A shape has 5 sides and 5 vertices. All sides are equal and all angles are equal. What is the name of this shape?', checkMode: 'auto', correctAnswer: 'Pentagon', correctAnswers: ['Pentagon', 'pentagon', 'a pentagon', 'regular pentagon'], answer: 'Pentagon', explanation: 'A closed shape with 5 equal sides and 5 equal angles is a regular pentagon.' },
        { difficulty: 'Easy', question: 'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long, and all angles are right angles. What is the name of this shape?', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], answer: 'Rectangle', explanation: 'A shape with 2 pairs of equal sides and 4 right angles is a rectangle.' },
        { difficulty: 'Easy', question: 'How many sides in total do a triangle and a square have combined?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'seven'], answer: '7', explanation: 'A triangle has 3 sides and a square has 4 sides. 3 + 4 = 7 sides in total.' },
        { difficulty: 'Easy', question: 'How many vertices in total do a pentagon and a hexagon have combined?', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'eleven'], answer: '11', explanation: 'A pentagon has 5 vertices and a hexagon has 6 vertices. 5 + 6 = 11 vertices in total.' },
        { difficulty: 'Medium', question: 'A shape has 5 sides and 5 vertices. All sides are equal and all angles are equal. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], answer: '5', explanation: 'A regular pentagon has 5 lines of symmetry — one through each vertex and the midpoint of the opposite side.' },
        { difficulty: 'Medium', question: 'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long, and all angles are right angles. Is this shape regular or irregular?', checkMode: 'auto', correctAnswer: 'Irregular', correctAnswers: ['Irregular', 'irregular', 'irregular polygon'], answer: 'Irregular', explanation: 'It is irregular because not all sides are equal — two sides are 5 cm and two sides are 3 cm.' },
        { difficulty: 'Medium', question: 'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long, and all angles are right angles. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], answer: '2', explanation: 'A rectangle has 2 lines of symmetry — one horizontal and one vertical, through the midpoints of opposite sides.' },
        { difficulty: 'Medium', question: 'Compare a triangle and a hexagon. How many more sides does a hexagon have than a triangle?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], answer: '3', explanation: 'A hexagon has 6 sides and a triangle has 3 sides. 6 − 3 = 3 more sides.' },
        { difficulty: 'Medium', question: 'A soccer ball has patches that are pentagons and hexagons. How many more sides does a hexagon patch have than a pentagon patch?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], answer: '1', explanation: 'A hexagon has 6 sides and a pentagon has 5 sides. 6 − 5 = 1 more side.' },
        { difficulty: 'Medium', question: 'A shape has one more side than a rectangle but fewer sides than a hexagon. Name the shape.', checkMode: 'auto', correctAnswer: 'Pentagon', correctAnswers: ['Pentagon', 'pentagon', 'a pentagon'], answer: 'Pentagon', explanation: 'A rectangle has 4 sides, so one more is 5 sides — a pentagon, which has fewer sides than a hexagon (6).' },
        { difficulty: 'Medium', question: 'Two triangles are joined edge to edge to form a new 4-sided shape. How many sides does the new shape have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], answer: '4', explanation: 'When two triangles are joined along one edge, that shared edge disappears, leaving a new 4-sided shape (a quadrilateral).' },
        { difficulty: 'Medium', question: 'A rectangle is cut in half along a diagonal. What 2D shape is each half?', checkMode: 'auto', correctAnswer: 'Triangle', correctAnswers: ['Triangle', 'triangle', 'a triangle'], answer: 'Triangle', explanation: 'Cutting a rectangle along its diagonal creates two triangles, each with 3 sides.' },
        { difficulty: 'Hard', question: 'A shape has 4 sides. Two sides are 5 cm long and two sides are 3 cm long, and all angles are right angles.\nExplain what makes this shape different from a square.', checkMode: 'self', answer: 'A square has all 4 sides equal in length. This shape (a rectangle) has 2 pairs of equal sides — the two long sides are equal and the two short sides are equal, but the long sides are longer than the short sides.' },
        { difficulty: 'Hard', question: 'A soccer ball has patches that are pentagons and hexagons.\nExplain why these two shapes are used together, and what property lets them fit together without gaps.', checkMode: 'self', answer: 'Pentagons and hexagons fit together perfectly to cover the curved surface of a soccer ball with no gaps and no overlapping. The shapes tessellate, meaning they can fit together edge to edge without leaving any gaps.' },
        { difficulty: 'Hard', question: 'Lerato says a square is just a special rectangle. Is she correct? Explain fully using the properties of both shapes.', checkMode: 'self', answer: 'Yes, she is correct. A rectangle has 4 sides, 4 right angles and 2 pairs of equal sides. A square has all of these same properties, but it also has all 4 sides equal in length. This means a square satisfies every condition of a rectangle, making it a special type of rectangle.' },
        { difficulty: 'Hard', question: 'Compare a triangle and a pentagon. Write two similarities and two differences.', checkMode: 'self', answer: 'Similarities: both are polygons (closed shapes with straight sides only); both have vertices where their sides meet. Differences: a triangle has 3 sides while a pentagon has 5 sides; a triangle has 3 vertices while a pentagon has 5 vertices.' },
        { difficulty: 'Hard', question: 'Explain why a rhombus is not always called a square, even though both shapes have 4 equal sides.', checkMode: 'self', answer: 'A rhombus has 4 equal sides, but its angles do not have to be 90°. A square also has 4 equal sides, but it must have 4 right angles too. Since a rhombus can have angles that are not 90°, it is not always a square — a square is just a special type of rhombus.' },
        { difficulty: 'Hard', question: 'A shape is described as having 4 sides, opposite sides parallel and equal, but no right angles. Name the shape and explain your reasoning.', checkMode: 'self', answer: 'The shape is a parallelogram. It has 2 pairs of parallel, equal sides like a rectangle, but because it has no right angles, it cannot be a rectangle or a square — it must be a parallelogram (or a rhombus if all 4 sides are also equal).' },
        { difficulty: 'Hard', question: 'Sipho draws a shape with 4 sides where only one pair is parallel. What shape did he draw, and how is it different from a parallelogram?', checkMode: 'self', answer: 'Sipho drew a trapezium. It is different from a parallelogram because a parallelogram has 2 pairs of parallel sides, while a trapezium has only 1 pair of parallel sides.' },
        { difficulty: 'Hard', question: 'A pentagon and a heptagon are compared. Which has more sides, and by how many?', checkMode: 'auto', correctAnswer: 'Heptagon by 2', correctAnswers: ['Heptagon by 2', 'heptagon, by 2', 'heptagon has 2 more', 'the heptagon by 2'], answer: 'Heptagon by 2', explanation: 'A pentagon has 5 sides and a heptagon has 7 sides. 7 − 5 = 2, so the heptagon has 2 more sides.' },
        { difficulty: 'Hard', question: 'A shape has the same number of sides as the number of vertices in an octagon. Name the shape.', checkMode: 'auto', correctAnswer: 'Octagon', correctAnswers: ['Octagon', 'octagon', 'an octagon'], answer: 'Octagon', explanation: 'An octagon has 8 vertices, so a shape with 8 sides is also an octagon.' },
        { difficulty: 'Hard', question: 'Amahle builds a pattern using squares and equilateral triangles only, fitted edge to edge with no gaps. Explain why this combination works.', checkMode: 'self', answer: 'Squares and equilateral triangles both have straight sides of equal length, so their edges match up perfectly when placed next to each other. This allows them to tessellate — fit together with no gaps and no overlaps — creating a neat repeating pattern.' },
        { difficulty: 'Hard', question: 'Explain, using properties, why a circle cannot be classified as a polygon.', checkMode: 'self', answer: 'A polygon must be a closed shape made entirely of straight sides that meet at vertices. A circle has one continuous curved edge with no straight sides and no vertices, so it does not meet the definition of a polygon.' },
        { difficulty: 'Hard', question: 'A shape has 4 sides, all equal in length, and its diagonals cross at right angles, but its own angles are 70° and 110°. Name this shape.', checkMode: 'auto', correctAnswer: 'Rhombus', correctAnswers: ['Rhombus', 'rhombus', 'a rhombus'], answer: 'Rhombus', explanation: 'A quadrilateral with all 4 sides equal but angles that are not 90° is a rhombus.' },
        { difficulty: 'Hard', question: 'Thabo says: "All quadrilaterals are parallelograms." Give one example of a quadrilateral that proves he is wrong, and explain why.', checkMode: 'self', answer: 'A trapezium proves Thabo wrong. A trapezium is a quadrilateral (it has 4 sides), but it only has one pair of parallel sides, while a parallelogram needs 2 pairs of parallel sides. So not every quadrilateral is a parallelogram.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have fully mastered 2D Shapes across every topic.' },
        { minScore: 19, message: 'Excellent work! Review the multi-step questions you got wrong and you will have this mastered.' },
        { minScore: 13, message: 'Good effort! Go back and read through the sections you found tricky.' },
        { minScore: 0, message: 'Keep going! Read through the whole study guide again carefully and then retry.' },
      ],
    },
  ],
}
