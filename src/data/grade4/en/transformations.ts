import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Composite Shapes and Tessellation',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — BUILDING COMPOSITE SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-composite-shapes',
      title: 'Building Composite Shapes',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">A <strong>composite shape</strong> is a new shape made by putting <strong>two or more basic shapes</strong> together. Just like puzzle pieces fit together to make a picture, simple shapes like triangles, squares, rectangles and circles can be combined to build a composite shape.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">When basic shapes are joined together, their <strong>sides must touch exactly</strong> — with no gaps and no overlapping. The basic shapes don't disappear; they are still there, just joined to make a bigger, new shape.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life examples 🌍</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">House</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>triangle</strong> (the roof) sitting on top of a <strong>square</strong> (the walls).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Arrow</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>triangle</strong> (the point) attached to a <strong>rectangle</strong> (the shaft).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Ice cream</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">A <strong>circle</strong> (the scoop) sitting on top of a <strong>triangle</strong> (the cone).</span>
    </div>
  </div>
</div>

<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:0;height:0;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:35px solid #fca5a5;"></div>
    <div style="width:60px;height:60px;background:#93c5fd;border:2px solid #1e40af;"></div>
  </div>
  <span style="font-size:20px;color:#374151;">=</span>
  <span style="color:#374151;font-size:15px;">1 triangle + 1 square = a house-shaped composite shape</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Finding the basic shapes inside a composite shape</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Look for <strong>straight edges</strong> where two shapes meet — this is often where one basic shape ends and another begins.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Name each basic shape you can see — for example "triangle" and "square".</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Count how many of each basic shape were used to build the composite shape.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Look at a picture of a boat: a triangle (the sail) sits on top of a rectangle (the boat\'s body), which sits on top of a semicircle (the hull). Which basic shapes make up this composite shape?',
          steps: [
            'Look for straight edges that separate the shapes.',
            'The sail is a <strong style="color:#dc2626;">triangle</strong>.',
            'The body of the boat is a <strong style="color:#1e40af;">rectangle</strong>.',
            'The hull (bottom) is a <strong style="color:#16a34a;">semicircle</strong> (half a circle).',
          ],
          answer: 'The boat is made from 1 triangle, 1 rectangle and 1 semicircle.',
        },
        {
          question: 'Thabo builds a robot picture using 1 square (the head), 1 rectangle (the body) and 2 small circles (the eyes). How many basic shapes did Thabo use in total?',
          steps: [
            'Count each basic shape one at a time: 1 square, 1 rectangle, and 2 circles.',
            'Add them together: 1 + 1 + 2 = 4.',
          ],
          answer: 'Thabo used 4 basic shapes in total.',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing simple pictures (a house, an arrow, an ice cream cone) being built from basic 2D shapes joined together, with each basic shape highlighted in a different colour',
      diagramPlaceholder:
        'A composite shape picture of a boat made from a triangle sail, a rectangle body and a semicircle hull, with each basic shape outlined in a different colour and labelled',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOSITE SHAPES WITH LINE SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-shapes-line-symmetry',
      title: 'Composite Shapes with Line Symmetry',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;">You already know that a shape has <strong>line symmetry</strong> if you can fold it in half so both sides match exactly. When we build a composite shape carefully, the finished shape can also have a line of symmetry — even though it's made of separate basic shapes joined together.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">To build a <strong>symmetrical composite shape</strong>, arrange the basic shapes so that one half is the <strong>mirror image</strong> of the other half. Placing two identical shapes so they mirror each other is the easiest way to do this.</p>
</div>

<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;align-items:center;">
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:45px solid #93c5fd;"></div>
    <div style="width:3px;height:60px;background:#dc2626;"></div>
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:45px solid #93c5fd;"></div>
  </div>
  <span style="color:#374151;font-size:15px;">Two identical triangles placed back-to-back make a symmetrical diamond, with the <span style="color:#dc2626;font-weight:700;">red line</span> as the line of symmetry.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Checking a composite shape for symmetry</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Imagine folding the whole composite shape along a line, just like the <strong>fold test</strong> you already know.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If <strong>every basic shape</strong> on one side matches a basic shape on the other side, the composite shape is symmetrical.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">If even <strong>one</strong> shape is missing its matching partner on the other side, the composite shape is <span style="color:#dc2626;font-weight:700;">not</span> symmetrical along that line.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Symmetrical vs not symmetrical composite shapes</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Symmetrical</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">A house shape (triangle roof centred exactly on top of a square) — folding down the middle matches both sides.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Not symmetrical</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;">An arrow shape (triangle attached to one end of a rectangle) — folding down the middle does not match, since the triangle is only on one side.</div>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Lerato builds a composite shape from a square with one identical small triangle attached to the top-left corner only. Is her composite shape symmetrical?',
          steps: [
            'Imagine folding the composite shape down the middle.',
            'The triangle is only on the <strong>left</strong> side — there is no matching triangle on the right side.',
            'Since the two halves do not match, the composite shape is not symmetrical.',
          ],
          answer: 'No — Lerato\'s composite shape is not symmetrical, because the triangle only appears on one side.',
        },
        {
          question: 'Sipho places two identical semicircles, flat sides touching, to form a full circle. Is this composite shape symmetrical?',
          steps: [
            'A full circle can be folded along <strong>any</strong> line through its centre and both halves will always match.',
            'Since the two semicircles are identical and placed to mirror each other, every fold through the centre matches.',
          ],
          answer: 'Yes — this composite shape (a full circle) is symmetrical, and it actually has many lines of symmetry.',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing two identical triangles being placed back to back to build a symmetrical diamond shape, with the line of symmetry drawn in red down the middle',
      diagramPlaceholder:
        'Side-by-side diagrams comparing a symmetrical composite house shape (triangle centred on a square) with a non-symmetrical composite arrow shape (triangle on only one end of a rectangle)',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — TESSELLATING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns',
      title: 'Tessellating Patterns',
      icon: '🔲',
      explanation: `
<p style="margin-bottom:14px;">A <strong>tessellation</strong> is a pattern made by repeating shapes over and over so that they cover a flat surface completely, with <strong>no gaps</strong> and <strong>no overlaps</strong>. You see tessellations every day — floor tiles, brick walls and honeycomb are all examples.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key rule 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A shape <strong>tessellates</strong> if copies of it can be fitted together perfectly, edge to edge, to cover a surface without leaving any gaps and without any shapes overlapping each other.</p>
</div>

<div style="display:flex;align-items:center;gap:0;flex-wrap:wrap;margin-bottom:16px;">
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <span style="margin-left:16px;color:#374151;font-size:15px;">Squares tessellate perfectly in a row — no gaps, no overlaps.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Which shapes tessellate on their own?</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Tessellate</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;"><strong>Squares</strong>, <strong>rectangles</strong>, <strong>equilateral triangles</strong> and <strong>regular hexagons</strong> — their angles fit together exactly around a point.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Do Not Tessellate (alone)</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;"><strong>Circles</strong> and <strong>regular pentagons</strong> always leave gaps between them, no matter how they are arranged.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life examples 🌍</div>
  <ul style="margin-top:0;margin-bottom:0;padding-left:20px;color:#1e3a8a;line-height:2;">
    <li><strong>Floor and wall tiles:</strong> usually square or rectangular tiles tessellating across a floor</li>
    <li><strong>A honeycomb:</strong> bees build hexagon-shaped cells that tessellate perfectly with no gaps</li>
    <li><strong>A brick wall:</strong> rectangular bricks tessellate in rows, often overlapping halfway for strength</li>
  </ul>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">How to test if a shape tessellates</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Draw or picture several copies of the shape fitted together edge to edge. If you can keep repeating the pattern in every direction with <strong>no gaps</strong> appearing anywhere, the shape tessellates.</p>
</div>
`,
      workedExamples: [
        {
          question: 'Does a regular hexagon tessellate on its own?',
          steps: [
            'Picture several hexagons placed edge to edge, like the cells of a honeycomb.',
            'Each corner of a regular hexagon is 120°, and 3 hexagons meeting at a point make 120° + 120° + 120° = 360° — a full turn, with no gap.',
            'Since the hexagons fit together perfectly all the way around each point, the pattern can repeat forever with no gaps.',
          ],
          answer: 'Yes — a regular hexagon tessellates on its own, just like the honeycomb pattern bees build.',
        },
        {
          question: 'Amahle tries to tessellate circles by placing them in rows, each circle touching its neighbours. Does this tessellate?',
          steps: [
            'Look at the spaces between the circles where they touch.',
            'Curved shapes like circles always leave small curved gaps between them, no matter how they are arranged.',
            'Since there are gaps, the circles do not cover the surface completely.',
          ],
          answer: 'No — circles do not tessellate. There will always be small gaps left between the circles.',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing squares, triangles and hexagons tessellating perfectly across a surface, followed by an example of circles failing to tessellate because of the gaps left between them',
      diagramPlaceholder:
        'A grid comparing a perfect square tessellation with no gaps against a failed circle tessellation showing curved gaps between each circle',
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
        // Block A — Identifying & Counting Basic Shapes (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'Look at the picture: a house made from 1 triangle (the roof) sitting on top of 1 square (the walls). How many basic shapes make up this composite shape in total?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: '1 triangle + 1 square = 2 basic shapes in total ✓ (1 treats the two shapes as one; 3 and 4 come from double-counting one of the shapes.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="85" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,40 75,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Using the same house picture (1 triangle roof on 1 square wall), which two basic shapes make up this composite shape?', checkMode: 'auto', options: ['1 rectangle and 1 triangle', '1 square and 1 circle', '2 triangles', '1 triangle and 1 square'], correctIndex: 3, explanation: 'The house is made from 1 triangle (the roof) and 1 square (the walls) ✓ (the other options swap in a shape that does not appear, or miss the square wall entirely.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="85" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,40 75,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Look at the picture: a boat made from a triangle (the sail), a rectangle (the body) and a semicircle (the hull). How many DIFFERENT basic shape types were used?', checkMode: 'auto', options: ['2', '4', '1', '3'], correctIndex: 3, explanation: 'The boat uses a triangle, a rectangle and a semicircle — 3 different shape types ✓ (2 wrongly treats two of the shapes as the same type; 4 splits one shape into two types; 1 ignores that more than one shape type was used.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><path d="M 45 130 Q 110 155 175 130 L 160 110 L 60 110 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="86" width="40" height="24" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,86 110,41 155,86" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'A robot picture is built from 1 square (head), 1 rectangle (body) and 2 small circles (eyes). How many basic shapes were used altogether?', checkMode: 'auto', options: ['3', '4', '5', '2'], correctIndex: 1, explanation: '1 square + 1 rectangle + 2 circles = 4 basic shapes ✓ (3 forgets to count one of the two circles; 5 double-counts one shape; 2 counts only the shape types, not the total pieces.)' },

        // Block B — Multi-Part Composite Counting & Naming (pos 4-7, Easy-Medium)
        { difficulty: 'Medium', question: 'A train picture is made from 3 rectangles (the carriages) and 4 circles (the wheels). How many basic shapes were used in total?', checkMode: 'auto', options: ['6', '7', '8', '12'], correctIndex: 1, explanation: '3 rectangles + 4 circles = 7 basic shapes ✓ (6 undercounts one circle; 8 overcounts by one; 12 wrongly multiplies 3×4 instead of adding.)' },
        { difficulty: 'Medium', question: 'A flower picture is made from 5 identical petals (each a circle) around 1 circle in the centre. How many basic shapes make up this composite shape in total?', checkMode: 'auto', options: ['5', '10', '4', '6'], correctIndex: 3, explanation: '5 petal circles + 1 centre circle = 6 basic shapes ✓ (5 forgets the centre circle; 10 wrongly doubles the petals; 4 undercounts by one petal.)' },
        { difficulty: 'Medium', question: "Sipho counts the shapes in a car picture (1 rectangle body, 2 circle wheels, 1 square window) and says there are 3 basic shapes in total. Which statement correctly evaluates Sipho's answer?", checkMode: 'auto', options: ['Sipho is correct — there are 3 basic shapes in total.', 'Sipho is not correct — there are 4 basic shapes in total; he forgot to count one of the two wheels separately.', 'Sipho is not correct — there are 5 basic shapes in total, since the window should be counted twice.', 'Sipho is correct, but only because the window does not count as a basic shape.'], correctIndex: 1, explanation: "The car has 1 rectangle + 2 circles + 1 square = 4 basic shapes in total, not 3 — Sipho must have forgotten to count one of the two wheels separately ✓" },
        { difficulty: 'Medium', question: 'Which of these composite shapes could be built using exactly 2 circles and 1 rectangle?', checkMode: 'auto', options: ['A robot — 1 square head, 1 rectangle body, 2 circle eyes', 'A boat — 1 triangle sail, 1 rectangle body, 1 semicircle hull', 'A flower — 5 petal circles around 1 centre circle', 'A car — 1 rectangle body with 2 circle wheels'], correctIndex: 3, explanation: 'A car built from 1 rectangle body and 2 circle wheels uses exactly 2 circles and 1 rectangle ✓ (the robot adds a square, the boat swaps in a triangle and semicircle, and the flower has no rectangle at all.)' },

        // Block C — Composite Shapes and Line Symmetry (pos 8-12, Medium) — shared diagram run
        { difficulty: 'Medium', question: 'A composite shape has 4 identical small triangles, each attached to one side of a central square (one on top, one on bottom, one on the left, one on the right). Which statement about symmetry along a vertical line through the middle is correct?', checkMode: 'auto', options: ['The left and right triangles mirror each other, and the top and bottom triangles each mirror themselves across this line, so it is symmetrical.', 'The top and bottom triangles are not mirror images of the left and right triangles, so it is not symmetrical.', 'It is not symmetrical, because only shapes with exactly 2 basic parts can have a line of symmetry.', 'It is symmetrical, but only because all 4 triangles are the same colour.'], correctIndex: 0, explanation: 'The left and right triangles mirror each other, and the top and bottom triangles each mirror themselves across this line, so it is symmetrical ✓ (the other options compare the wrong pairs of triangles, state an untrue rule about needing exactly 2 parts, or confuse colour with geometric matching.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,85 40,100 75,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,85 180,100 145,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="10" x2="110" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Using the same shape as before (4 identical triangles, one on each side of a central square), which statement about symmetry along a horizontal line through the middle is correct?', checkMode: 'auto', options: ['It is not symmetrical along this line, because a square can only ever have one line of symmetry.', 'It is not symmetrical along this line, because the top and bottom triangles are different shapes from the left and right triangles.', 'The top and bottom triangles mirror each other, and the left and right triangles each mirror themselves across this line, so it has a second line of symmetry too.', 'It is symmetrical along this line, but only if the square is rotated first.'], correctIndex: 2, explanation: 'The top and bottom triangles mirror each other, and the left and right triangles each mirror themselves across this line, so it has a second line of symmetry too ✓ (a square actually has 4 lines of symmetry, the triangles are identical on every side, and no rotation is needed.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,85 40,100 75,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,85 180,100 145,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="100" x2="200" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape has 1 triangle centred on top of a rectangle, but the triangle leans slightly to one side instead of pointing straight up. Which statement about symmetry along a vertical line through the middle is correct?', checkMode: 'auto', options: ['It is symmetrical, since the triangle is still centred over the rectangle horizontally.', 'It is not symmetrical, because a leaning (tilted) triangle is not a mirror image of itself, so the two halves would not match when folded.', 'It is symmetrical, because the rectangle is symmetrical, so the whole composite shape must be too.', 'It is not symmetrical, because rectangles never have a line of symmetry.'], correctIndex: 1, explanation: 'A leaning (tilted) triangle is not a mirror image of itself, so the two halves would not match when folded ✓ (being centred horizontally is not enough once the triangle tilts, one symmetrical part does not guarantee the whole shape is symmetrical, and rectangles do in fact have lines of symmetry.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="85" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,40 95,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A butterfly picture has 2 identical wing circles, one on the left and one on the right of a central rectangle body, both the same size and the same distance from the body. Which statement about symmetry along a vertical line through the body is correct?', checkMode: 'auto', options: ['It is not symmetrical, because circles can never be part of a symmetrical composite shape.', 'It is not symmetrical, because the wings are on opposite sides so they cannot match.', 'It is symmetrical, but only because the body is a rectangle.', 'The two identical wings mirror each other exactly across the vertical line through the body, so it is symmetrical.'], correctIndex: 3, explanation: 'The two identical wings mirror each other exactly across the vertical line through the body ✓ (circles can absolutely be part of symmetrical shapes, being on opposite sides is exactly what makes them mirror each other rather than what stops them, and the shape of the body is not what creates the symmetry here.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="65" width="30" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="150" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Which statement correctly describes the general rule for checking whether a composite shape is symmetrical along a chosen fold line?', checkMode: 'auto', options: ['Imagine folding the shape along that line — if every basic shape on one side has an identical matching shape in the same position on the other side, it is symmetrical along that line.', 'A composite shape is symmetrical if it is made from more than 3 basic shapes.', 'A composite shape is symmetrical if every basic shape used is the same colour.', 'A composite shape is symmetrical if it looks the same after being rotated, regardless of folding.'], correctIndex: 0, explanation: 'To check for symmetry along a chosen line, imagine folding the composite shape along that line. If every basic shape on one side has an identical matching basic shape in the same position on the other side, the composite shape is symmetrical along that line ✓ (the number of parts and their colour have nothing to do with line symmetry, and looking the same after a rotation is a different property called rotational symmetry.)' },

        // Block D — Tessellation: Which Shapes Tile and Why (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Which of these shapes tessellates on its own?', checkMode: 'auto', options: ['Regular pentagon', 'Circle', 'Regular hexagon', 'None of these shapes tessellate'], correctIndex: 2, explanation: 'Regular hexagons tessellate because 3 of their 120° angles fit exactly around a point (3 × 120° = 360°); regular pentagons and circles both leave gaps, so "none of these" is also wrong since hexagons do tessellate ✓' },
        { difficulty: 'Medium', question: 'Which statement about circles and tessellation is correct?', checkMode: 'auto', options: ['Circles tessellate perfectly because they are a curved shape.', 'Circles do not tessellate — they always leave curved gaps between them.', 'Circles tessellate only when arranged in straight rows, not in a grid.', 'Circles tessellate exactly like squares do.'], correctIndex: 1, explanation: 'Circles always leave curved gaps between them, no matter how they are arranged, so they do not tessellate ✓' },
        { difficulty: 'Medium', question: 'Look at the diagram: 4 squares meeting at a single point, with each corner angle marked. Each corner (angle) of a square is 90°. What happens at the point where they meet?', checkMode: 'auto', options: ['They leave a small gap, since 90°×4 = 340°.', 'They overlap slightly, since 90°×4 = 380°.', 'They fit exactly with no gap, since 90°×4 = 360°.', 'It depends on the size of the squares.'], correctIndex: 2, explanation: '90° + 90° + 90° + 90° = 360°, a complete turn with no gap left over ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="95" fill="#2563eb" font-weight="700" font-size="14" text-anchor="middle">90°×4</text><circle cx="100" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Look at the diagram: 3 regular hexagons meeting at a single point, each corner angle marked 120°. What happens at the point where they meet?', checkMode: 'auto', options: ['They leave a small gap, since 120°×3 = 300°.', 'They fit exactly with no gap, since 120°×3 = 360°.', 'They overlap slightly, since 120°×3 = 400°.', 'It depends on the size of the hexagons.'], correctIndex: 1, explanation: '120° + 120° + 120° = 360°, a complete turn, so no gap is left ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,90 79,72 79,36 110,18 141,36 141,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 141,72 172,90 172,126 141,144 110,126" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,126 79,144 48,126 48,90 79,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="150" fill="#2563eb" font-weight="700" font-size="13" text-anchor="middle">120°×3</text><circle cx="110" cy="90" r="4" fill="#dc2626"/></svg>' },

        // Block E — Word Problems & Multi-Step Applications (pos 17-18, Hard)
        { difficulty: 'Hard', question: 'A class of 6 students each builds an identical robot picture using 1 square (head), 1 rectangle (body) and 2 circles (eyes). How many basic shapes were used altogether by the whole class?', checkMode: 'auto', options: ['18', '20', '24', '30'], correctIndex: 2, explanation: 'Each robot uses 1 + 1 + 2 = 4 basic shapes. 6 students × 4 shapes = 24 basic shapes ✓ (18 comes from using only 3 shapes per robot; 20 comes from counting only 5 students; 30 comes from using 5 shapes per robot.)' },
        { difficulty: 'Hard', question: 'A tiler is covering a rectangular hallway with square tiles, and knows squares tessellate with no gaps. She uses 8 rows of 5 tiles each. How many square tiles does she need in total?', checkMode: 'auto', options: ['13', '35', '45', '40'], correctIndex: 3, explanation: 'Square tiles tessellate with no gaps, so the whole floor is covered by 8 × 5 = 40 tiles ✓ (13 wrongly adds 8+5 instead of multiplying; 35 uses only 7 rows; 45 uses 9 rows.)' },

        // Block F — Reasoning, Justification & Error-Spotting (Capstone) (pos 19, Hard)
        { difficulty: 'Hard', question: 'Which explanation correctly describes why regular hexagons tessellate on their own but circles do not, even though both shapes can look fairly round when many are placed together?', checkMode: 'auto', options: ['Hexagons have straight sides and angles (120° each) that divide evenly into 360°, so 3 hexagons fit perfectly around a point with no gaps; circles have no straight sides, so their curved edges always leave small gaps.', 'Hexagons tessellate because they are bigger than circles, which always leave gaps no matter their angles.', 'Circles do not tessellate because they have too many sides; hexagons have fewer sides so they fit together better.', 'Both shapes actually tessellate equally well — it just looks different because circles are round.'], correctIndex: 0, explanation: 'A regular hexagon has straight sides and angles (120° each) that divide evenly into 360°, so 3 hexagons fit perfectly around a point with no gaps. A circle has a curved edge with no straight sides or angles at all, so circles placed next to each other always leave small gaps between them ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered composite shapes and tessellation in Set 1.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 10, message: 'Good effort! Go back and read through the study guide again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Identifying & Counting Basic Shapes (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'Look at the picture: an ice cream made from 1 circle (the scoop) sitting on top of 1 triangle (the cone). How many basic shapes make up this composite shape in total?', checkMode: 'auto', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: '1 circle + 1 triangle = 2 basic shapes in total ✓ (1 treats the two shapes as one; 3 and 4 double-count one of the shapes.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="65" r="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,150 80,95 140,95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Using the same ice cream picture (1 circle scoop on 1 triangle cone), which two basic shapes make up this composite shape?', checkMode: 'auto', options: ['1 rectangle and 1 circle', '1 square and 1 triangle', '1 circle and 1 triangle', '2 circles'], correctIndex: 2, explanation: 'The ice cream is made from 1 circle (the scoop) and 1 triangle (the cone) ✓ (the other options swap in shapes that do not appear, or list only one shape type.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="65" r="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,150 80,95 140,95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Look at the picture: a windmill made from 4 triangles (the blades) and 1 rectangle (the pole). How many DIFFERENT basic shape types were used?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: 'The windmill uses triangles and a rectangle — 2 different shape types, even though there are 4 triangle blades ✓ (1 wrongly treats the rectangle and triangles as the same type; 3 and 4 mistake the number of triangle pieces for the number of shape types.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="103" y="90" width="14" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,45 150,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 155,90 140,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,45 70,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 65,90 80,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'A fish picture is made from 1 circle (body), 1 triangle (tail) and 1 small triangle (fin). How many basic shapes were used in total?', checkMode: 'auto', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: '1 circle + 1 triangle + 1 triangle = 3 basic shapes ✓ (2 forgets to count one of the two triangles; 4 and 5 double-count a shape.)' },

        // Block B — Multi-Part Composite Counting & Naming (pos 4-7, Easy-Medium)
        { difficulty: 'Medium', question: 'A caterpillar picture is made from 6 circles for the body and 2 small triangles for antennae. How many basic shapes were used in total?', checkMode: 'auto', options: ['6', '7', '10', '8'], correctIndex: 3, explanation: '6 circles + 2 triangles = 8 basic shapes ✓ (6 forgets the antennae triangles; 7 undercounts by one; 10 mistakenly adds two extra shapes.)' },
        { difficulty: 'Medium', question: 'A picture of a simple person is made from 1 circle (head), 1 rectangle (body), 2 rectangles (arms) and 2 rectangles (legs). How many basic shapes were used in total?', checkMode: 'auto', options: ['4', '5', '6', '7'], correctIndex: 2, explanation: '1 circle + 1 rectangle + 2 rectangles + 2 rectangles = 6 basic shapes ✓ (4 counts only the head and one pair of limbs; 5 misses one rectangle; 7 double-counts one rectangle.)' },
        { difficulty: 'Medium', question: "Amahle counts the shapes in a castle picture (1 rectangle wall, 2 square towers, 2 triangle roofs) and says there are 4 basic shapes in total. Which statement correctly evaluates Amahle's answer?", checkMode: 'auto', options: ['Amahle is correct — there are 4 basic shapes in total.', 'Amahle is not correct — there are 5 basic shapes in total; she must have missed counting one of the shapes.', 'Amahle is not correct — there are 6 basic shapes in total, since each tower should be counted twice.', 'Amahle is correct, but only because the roofs do not count as basic shapes.'], correctIndex: 1, explanation: 'The castle has 1 rectangle + 2 squares + 2 triangles = 5 basic shapes in total, not 4 — Amahle must have missed counting one of the shapes ✓' },
        { difficulty: 'Medium', question: 'Which of these composite shapes could be built using exactly 1 rectangle and 2 squares?', checkMode: 'auto', options: ['A train carriage — 1 rectangle body with 2 square windows', 'A robot — 1 square head, 1 rectangle body, 2 circle eyes', 'A castle — 1 rectangle wall, 2 square towers, 2 triangle roofs', 'A windmill — 4 triangle blades and 1 rectangle pole'], correctIndex: 0, explanation: 'A train carriage built from 1 rectangle body and 2 square windows uses exactly 1 rectangle and 2 squares ✓ (the robot uses circles instead of a second square, the castle uses extra triangles, and the windmill has no squares at all.)' },

        // Block C — Composite Shapes and Line Symmetry (pos 8-12, Medium) — shared diagram run
        { difficulty: 'Medium', question: 'A composite shape is made from a rectangle with 1 semicircle attached to the top edge, centred exactly in the middle (like a simple archway). Which statement about symmetry along a vertical line through the middle is correct?', checkMode: 'auto', options: ['The semicircle is centred exactly on the rectangle, so folding down the vertical middle line matches both halves — it is symmetrical.', 'It is not symmetrical, because a semicircle can never be part of a symmetrical shape.', 'It is not symmetrical, because the rectangle and semicircle are different shapes.', 'It is symmetrical, but only along a horizontal line, not a vertical one.'], correctIndex: 0, explanation: 'Since the semicircle is centred exactly on the rectangle, folding down the vertical middle line matches both halves ✓ (a semicircle can be part of a symmetrical composite shape, having two different basic shapes does not prevent symmetry, and the correct line here is in fact vertical.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75 85 A 35 35 0 0 1 145 85 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Using the same shape as before (a rectangle with a semicircle centred on top), which statement about symmetry along a horizontal line through the middle of the rectangle is correct?', checkMode: 'auto', options: ['It is symmetrical, because the rectangle itself is symmetrical along a horizontal line.', 'The semicircle only appears above the rectangle, so folding along a horizontal middle line would not match a shape below — it is not symmetrical along this line.', 'It is symmetrical, because semicircles are always symmetrical in every direction.', 'It is not symmetrical along any line, since it is made of two different basic shapes.'], correctIndex: 1, explanation: 'The semicircle only appears above the rectangle, so folding along a horizontal middle line would not match a shape below — this shape only has a vertical line of symmetry ✓ (the rectangle alone being symmetrical does not make the whole composite shape symmetrical along that line, a semicircle is not symmetrical in every direction, and this shape does have a vertical line of symmetry.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75 85 A 35 35 0 0 1 145 85 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="112" x2="190" y2="112" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape has 2 triangles attached to a central square, but one triangle is bigger than the other. Which statement about symmetry along the line between the two triangles is correct?', checkMode: 'auto', options: ['It is symmetrical, because both shapes attached are triangles.', 'It is not symmetrical, because the two triangles are different sizes, so they cannot match exactly when folded.', 'It is symmetrical, because the square in the middle is symmetrical.', 'It is not symmetrical, because triangles can never be part of a symmetrical shape.'], correctIndex: 1, explanation: 'Since the two triangles are different sizes, they cannot match exactly when folded, so the shape is not symmetrical ✓ (being the same shape type is not enough if the sizes differ, the square being symmetrical does not fix mismatched triangles, and triangles absolutely can be part of symmetrical shapes when they match.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="70" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,105 40,90 75,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,105 190,95 145,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="155" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A face picture has 2 identical circle eyes placed symmetrically and 1 semicircle smile centred exactly in the middle. Which statement about symmetry along a vertical line through the middle of the whole composite face picture is correct?', checkMode: 'auto', options: ['Since the eyes are placed symmetrically and the smile is centred, every part matches across the vertical middle line — it is symmetrical.', 'It is not symmetrical, because a face can never be a symmetrical composite shape.', 'It is not symmetrical, because the smile is a semicircle and the eyes are circles, which are different shapes.', 'It is symmetrical, but only along a horizontal line through the eyes.'], correctIndex: 0, explanation: 'Since the eyes are placed symmetrically and the smile is centred, every part matches across the vertical middle line ✓ (a face made of matching basic shapes can absolutely be symmetrical, using two different shape types does not block symmetry, and the vertical line — not a horizontal one — is the one that matches here.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="135" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 90 110 A 25 25 0 0 0 130 110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="40" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Sipho builds a composite shape from 4 identical small triangles, each attached to one side of a central square (one on top, one on bottom, one on the left, one on the right). Which statement correctly explains why this shape is symmetrical?', checkMode: 'auto', options: ['It is symmetrical because the triangles are placed identically and evenly on all four sides of the square, giving it both a vertical and a horizontal line of symmetry.', 'It is symmetrical only because a square is always symmetrical, regardless of what is attached to it.', 'It is symmetrical because there are exactly 4 triangles, and any shape with 4 identical parts is automatically symmetrical.', 'It is symmetrical only along one diagonal line, since the triangles point in different directions.'], correctIndex: 0, explanation: 'This shape is symmetrical because the triangles are placed identically and evenly on all four sides of the square. It has at least two lines of symmetry: a vertical line through the middle and a horizontal line through the middle ✓ (the square alone being symmetrical is not the reason once shapes are attached unevenly, having 4 identical parts does not automatically guarantee symmetry unless they are placed symmetrically, and this particular arrangement is not limited to a diagonal line.)' },

        // Block D — Tessellation: Which Shapes Tile and Why (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Which of these shapes tessellates on its own?', checkMode: 'auto', options: ['Circle', 'Regular pentagon', 'None of these shapes tessellate', 'Square'], correctIndex: 3, explanation: 'Squares fit together edge to edge with no gaps and tessellate; circles and regular pentagons always leave gaps, so "none of these" is also wrong since squares do tessellate ✓' },
        { difficulty: 'Medium', question: 'Which statement about equilateral triangles and tessellation is correct?', checkMode: 'auto', options: ['Equilateral triangles do not tessellate, because their angles are too small.', 'Equilateral triangles fit together perfectly around a point with no gaps, so they tessellate.', 'Equilateral triangles tessellate only when mixed with squares.', 'Equilateral triangles overlap when placed edge to edge.'], correctIndex: 1, explanation: 'Equilateral triangles fit together perfectly around a point with no gaps, so they tessellate ✓' },
        { difficulty: 'Medium', question: 'Look at the diagram: 6 equilateral triangles meeting at a single point, each corner angle marked 60°. What happens at the point where they meet?', checkMode: 'auto', options: ['They leave a small gap, since 60°×6 = 340°.', 'They overlap slightly, since 60°×6 = 380°.', 'They fit exactly with no gap, since 60°×6 = 360°.', 'It depends on the size of the triangles.'], correctIndex: 2, explanation: '60° × 6 = 360°, a complete turn, so no gap is left when the triangles meet at the point ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,85 145,65 145,105" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 145,105 110,125" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 110,125 75,105" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 75,105 75,65" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 75,65 110,45" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 110,45 145,65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="80" fill="#2563eb" font-weight="700" font-size="12" text-anchor="middle">60°×6</text><circle cx="110" cy="85" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'A regular pentagon has interior angles of 108° each. Which statement about 3 of these angles meeting at a point is correct?', checkMode: 'auto', options: ['3 × 108° = 360°, so 3 pentagons fit exactly around a point with no gap.', '3 × 108° = 324°, which is less than 360°, so a gap is left.', '3 × 108° = 396°, which is more than 360°, so the pentagons overlap.', '3 × 108° always equals 360° for any regular polygon.'], correctIndex: 1, explanation: '108° + 108° + 108° = 324°, which is less than 360°, so a gap is left ✓' },

        // Block E — Word Problems & Multi-Step Applications (pos 17-18, Hard)
        { difficulty: 'Hard', question: 'A necklace pattern repeats 1 circle bead then 1 square bead then 1 circle bead then 1 square bead, and so on. If there are 16 beads in total, how many are squares?', checkMode: 'auto', options: ['4', '6', '10', '8'], correctIndex: 3, explanation: 'The pattern alternates circle, square, circle, square... so exactly half of the 16 beads are squares: 16 ÷ 2 = 8 ✓ (4 and 6 undercount, 10 overcounts the squares.)' },
        { difficulty: 'Hard', question: 'Kagiso builds a fence pattern using 9 identical triangular fence posts and 9 identical rectangular fence panels, alternating one after another. How many basic shapes make up the whole fence pattern?', checkMode: 'auto', options: ['9', '16', '18', '20'], correctIndex: 2, explanation: '9 triangles + 9 rectangles = 18 basic shapes ✓ (9 counts only one type of post; 16 and 20 come from miscounting one of the totals.)' },

        // Block F — Reasoning, Justification & Error-Spotting (Capstone) (pos 19, Hard)
        { difficulty: 'Hard', question: 'Which explanation correctly answers whether a composite shape being symmetrical guarantees that repeating it will tessellate, using a symmetrical house shape (1 triangle roof centred on 1 square) as the example?', checkMode: 'auto', options: ['No — the square walls do tessellate on their own, but the triangular roof sticking up would leave gaps between repeated houses unless the shape is specially designed to interlock; symmetry and tessellation are separate properties.', 'Yes — any symmetrical composite shape will always tessellate perfectly when repeated.', 'No — symmetrical shapes can never tessellate, because their mirrored halves always leave gaps.', 'Yes — because the square part of the house is symmetrical, the whole house shape must also tessellate.'], correctIndex: 0, explanation: 'Symmetry does not guarantee tessellation. The square walls do tessellate on their own, but the triangular roof sticking up would leave gaps between repeated houses unless the shape is specially designed to interlock. Symmetry is about one shape folding onto itself, while tessellation is about many copies of a shape fitting together with no gaps — they are separate properties ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered composite shapes and tessellation in Set 2.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 10, message: 'Good effort! Go back and read through the study guide again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Identifying & Counting Basic Shapes (pos 0-3, Easy)
        { difficulty: 'Easy', question: 'Look at the picture: an arrow made from 1 triangle (the point) attached to 1 rectangle (the shaft). How many basic shapes make up this composite shape in total?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: '1 triangle + 1 rectangle = 2 basic shapes in total ✓ (1 treats the two shapes as one; 3 and 4 come from double-counting one of the shapes.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="140,55 140,115 185,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Using the same arrow picture (1 triangle point on 1 rectangle shaft), which two basic shapes make up this composite shape?', checkMode: 'auto', options: ['1 square and 1 triangle', '1 circle and 1 rectangle', '1 triangle and 1 rectangle', '2 rectangles'], correctIndex: 2, explanation: 'The arrow is made from 1 triangle (the point) and 1 rectangle (the shaft) ✓ (the other options swap in a shape that does not appear, or miss the triangle point entirely.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="140,55 140,115 185,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Look at the picture: a rocket made from 1 triangle (nose cone), 1 rectangle (body) and 2 small triangles (fins). How many DIFFERENT basic shape types were used?', checkMode: 'auto', options: ['1', '3', '4', '2'], correctIndex: 3, explanation: 'The rocket uses triangles and a rectangle — 2 different shape types, even though there are 3 triangles in total ✓ (1 wrongly treats the rectangle and triangles as the same type; 3 and 4 mistake the number of triangle pieces for the number of shape types.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="70" width="30" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="95,70 125,70 110,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="95,140 75,140 95,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,140 145,140 125,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'A butterfly picture is made from 4 circles (the wings) and 1 rectangle (the body). How many basic shapes were used in total?', checkMode: 'auto', options: ['4', '5', '6', '8'], correctIndex: 1, explanation: '4 circles + 1 rectangle = 5 basic shapes ✓ (4 forgets the rectangle body; 6 and 8 double-count one of the wing circles.)' },

        // Block B — Multi-Part Composite Counting & Naming (pos 4-7, Easy-Medium)
        { difficulty: 'Medium', question: 'A composite shape called a "traffic light" is made from 1 rectangle (the box) and 3 circles (the lights). How many basic shapes were used in total?', checkMode: 'auto', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: '1 rectangle + 3 circles = 4 basic shapes ✓ (3 forgets one of the lights; 5 and 6 double-count a light.)' },
        { difficulty: 'Medium', question: 'Thandi builds 2 identical robot pictures, and each robot uses 1 square (head), 1 rectangle (body), 2 circles (eyes) and 2 rectangles (arms). How many basic shapes did she use altogether for both robots?', checkMode: 'auto', options: ['6', '10', '12', '14'], correctIndex: 2, explanation: 'Each robot uses 1 + 1 + 2 + 2 = 6 basic shapes. 2 robots × 6 shapes = 12 basic shapes ✓ (6 only counts one robot; 10 and 14 come from miscounting the shapes per robot.)' },
        { difficulty: 'Medium', question: "Bongani counts the shapes in a flower garden picture (3 identical flowers, each made from 4 petal circles and 1 centre circle) and says there are 12 basic shapes altogether. Which statement correctly evaluates Bongani's answer?", checkMode: 'auto', options: ['Bongani is correct — there are 12 basic shapes altogether.', 'Bongani is not correct — there are 15 basic shapes altogether, since each flower has 4 + 1 = 5 circles and 3 flowers × 5 circles = 15; he must have miscounted one flower.', 'Bongani is not correct — there are 9 basic shapes altogether, since only the petals should be counted.', 'Bongani is correct, but only if the centre circles are ignored.'], correctIndex: 1, explanation: 'Each flower has 4 + 1 = 5 circles, and 3 flowers × 5 circles = 15 basic shapes in total, not 12 — Bongani must have miscounted one of the flowers ✓' },
        { difficulty: 'Medium', question: 'Which of these composite shapes could be built using exactly 3 circles and 1 triangle?', checkMode: 'auto', options: ['A snowman with a triangle carrot nose — 3 stacked circles for the body and a small triangle for the nose', 'A robot — 1 square head, 1 rectangle body, 2 circle eyes', 'A traffic light — 1 rectangle box and 3 circle lights', 'A boat — 1 triangle sail, 1 rectangle body, 1 semicircle hull'], correctIndex: 0, explanation: 'A snowman built from 3 stacked circles and a small triangle nose uses exactly 3 circles and 1 triangle ✓ (the robot uses a square and rectangle, the traffic light has no triangle, and the boat uses a rectangle and semicircle instead of extra circles.)' },

        // Block C — Composite Shapes and Line Symmetry (pos 8-12, Medium) — shared diagram run
        { difficulty: 'Medium', question: 'A composite shape has 6 identical small triangles arranged evenly and symmetrically all the way around a central regular hexagon, like the petals of a flower. Which statement about symmetry along a line through the centre and through 2 opposite petals is correct?', checkMode: 'auto', options: ['Since the 6 petals are placed with equal spacing all the way around the hexagon, a line through 2 opposite petals matches both halves exactly — it is symmetrical.', 'It is not symmetrical, because a hexagon can only ever have one line of symmetry.', 'It is not symmetrical, because the petals on opposite sides are not touching each other.', 'It is symmetrical, but only if the petals are different colours.'], correctIndex: 0, explanation: 'Since the 6 petals are placed with equal spacing all the way around the hexagon, a line through 2 opposite petals matches both halves exactly ✓ (a regular hexagon actually has 6 lines of symmetry, opposite petals do not need to touch to mirror each other, and colour has nothing to do with geometric matching.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,65 135,80 135,110 110,125 85,110 85,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,65 96,32 124,32" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,125 96,158 124,158" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,80 51,66 51,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,110 51,96 51,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,80 169,66 169,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,110 169,96 169,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="18" x2="110" y2="172" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Using the same flower shape as before (6 identical petals evenly spaced around a central hexagon), which statement about how many lines of symmetry it has is correct?', checkMode: 'auto', options: ['It has only one line of symmetry, since it has an odd number of petals on each side.', 'Because the hexagon and the 6 evenly-spaced petals are arranged with equal spacing all the way around, there are several different lines through the centre that all match both halves — it has more than one line of symmetry.', 'It has no lines of symmetry, because petals are curved-looking shapes.', 'It has exactly 2 lines of symmetry, no matter how many petals are added.'], correctIndex: 1, explanation: 'Because the hexagon and the 6 evenly-spaced petals are arranged with equal spacing all the way around, there are several different lines through the centre that all match both halves ✓ (the petals are evenly spaced, not oddly arranged; petals made from triangles are straight-sided, not curved; and the number of lines of symmetry depends on the arrangement, it is not fixed at 2.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,65 135,80 135,110 110,125 85,110 85,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,65 96,32 124,32" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,125 96,158 124,158" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,80 51,66 51,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,110 51,96 51,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,80 169,66 169,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,110 169,96 169,124" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape is made from 2 identical squares placed diagonally opposite each other around a central point, with 2 different-sized circles placed in the remaining opposite positions. Which statement about symmetry about a line through the centre and through both squares is correct?', checkMode: 'auto', options: ['It is symmetrical about that line, because the two squares are identical.', 'It is not symmetrical about that line, because the two circles are different sizes, so they do not mirror each other along that line.', 'It is symmetrical about that line, because circles are always symmetrical no matter their size.', 'It is not symmetrical about any line, because squares and circles cannot be combined symmetrically.'], correctIndex: 1, explanation: 'Since the two circles are different sizes, they do not mirror each other along that line, so the composite shape is not symmetrical about it ✓ (the squares matching is not enough when the circles do not; a circle being symmetrical on its own does not mean two different-sized circles mirror each other; and squares and circles can absolutely be combined symmetrically when sizes match.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="140" y="90" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="162" cy="57" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="57" cy="112" r="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="32" y1="44" x2="188" y2="126" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A composite shape is made from 2 identical rectangles placed side by side, sharing one long edge, to form a bigger rectangle. Which statement about symmetry along the vertical line where the two rectangles join is correct?', checkMode: 'auto', options: ['Since the two rectangles are identical, folding along the join line matches both halves exactly — it is symmetrical.', 'It is not symmetrical, because two rectangles joined together always form a shape with no symmetry.', 'It is symmetrical, but only along a diagonal line, not the join line.', 'It is not symmetrical, because the join line is not in the exact centre of the bigger rectangle.'], correctIndex: 0, explanation: 'Since the two rectangles are identical, folding along the join line matches both halves exactly ✓ (joining two identical rectangles does not remove symmetry, the join line — not a diagonal — is the line of symmetry here, and since the rectangles are identical the join line is exactly in the centre.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="110" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="125" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'A student claims that a composite shape needs at least 3 basic parts before it can have a line of symmetry. Which statement correctly evaluates this claim?', checkMode: 'auto', options: ['The student is correct — fewer than 3 parts can never produce a line of symmetry.', 'The student is not correct — only 2 parts are needed, for example 2 identical semicircles placed with their flat sides touching form a full circle, which is symmetrical along any line through its centre; what matters is whether the parts mirror each other, not how many there are.', 'The student is correct, but only for shapes made of circles.', 'The student is not correct — a single basic shape on its own can never be symmetrical.'], correctIndex: 1, explanation: 'Only 2 basic parts are needed — for example, 2 identical semicircles placed with their flat sides touching form a full circle, which is symmetrical along any line through its centre. What matters is whether the parts mirror each other, not how many parts there are ✓' },

        // Block D — Tessellation: Which Shapes Tile and Why (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Which statement about regular pentagons and tessellation is correct?', checkMode: 'auto', options: ['Regular pentagons tessellate perfectly on their own, just like hexagons.', 'Regular pentagons always leave small gaps between them, no matter how they are arranged, so they do not tessellate on their own.', 'Regular pentagons tessellate only when arranged in rows.', 'Regular pentagons overlap when placed edge to edge.'], correctIndex: 1, explanation: 'Regular pentagons always leave small gaps between them, no matter how they are arranged ✓' },
        { difficulty: 'Medium', question: 'Which of these shapes tessellates on its own?', checkMode: 'auto', options: ['Regular pentagon', 'Circle', 'Rectangle', 'None of these shapes tessellate'], correctIndex: 2, explanation: 'Rectangles tessellate edge to edge with no gaps; regular pentagons and circles always leave gaps, so "none of these" is also wrong since rectangles do tessellate ✓' },
        { difficulty: 'Medium', question: 'Look at the diagram: 3 regular hexagons meeting at a point, each angle marked 120°. A regular pentagon has interior angles of 108°. Which statement about 3 pentagons meeting at the same point is correct?', checkMode: 'auto', options: ['3 × 108° = 360°, so pentagons would fit exactly around a point just like the hexagons.', '3 × 108° = 324°, not 360°, so a gap of 36° is left — this is why pentagons cannot tessellate on their own while hexagons can.', '3 × 108° = 384°, so the pentagons would overlap.', 'It cannot be worked out without knowing the size of the pentagons.'], correctIndex: 1, explanation: '3 × 108° = 324°, not 360°, so a gap of 36° is left — this is why pentagons cannot tessellate on their own while hexagons can ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,90 79,72 79,36 110,18 141,36 141,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 141,72 172,90 172,126 141,144 110,126" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,126 79,144 48,126 48,90 79,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="150" fill="#2563eb" font-weight="700" font-size="13" text-anchor="middle">120°×3</text><circle cx="110" cy="90" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Look at the diagram: 4 squares meeting at a point, each angle 90°, adding to 360° with no gap. Which statement about 4 regular pentagons (108° each) meeting at one point is correct?', checkMode: 'auto', options: ['4 × 108° = 360°, so the pentagons would fit exactly like the squares.', '4 × 108° = 340°, so the pentagons would leave a small gap.', '4 × 108° = 432°, which is more than 360° — this means the pentagons would overlap instead of leaving a gap, so they still cannot tessellate.', '4 × 108° cannot be compared to 4 × 90° at all.'], correctIndex: 2, explanation: '4 × 108° = 432°, which is more than 360° — this means the pentagons would overlap instead of leaving a gap, so they still cannot tessellate ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="95" fill="#2563eb" font-weight="700" font-size="14" text-anchor="middle">90°×4</text><circle cx="100" cy="100" r="4" fill="#dc2626"/></svg>' },

        // Block E — Word Problems & Multi-Step Applications (pos 17-18, Hard)
        { difficulty: 'Hard', question: 'A tiling contractor is covering a square courtyard using hexagonal tiles, which tessellate with no gaps. If the courtyard needs 6 rows with 7 tiles in each row, how many tiles does the contractor need in total?', checkMode: 'auto', options: ['13', '35', '42', '48'], correctIndex: 2, explanation: 'Regular hexagons tessellate with no gaps, so the whole courtyard is covered by 6 × 7 = 42 tiles ✓ (13 wrongly adds 6+7 instead of multiplying; 35 uses only 5 rows; 48 uses 8 rows.)' },
        { difficulty: 'Hard', question: 'A pattern is made from 6 identical equilateral triangles arranged edge to edge with no gaps to form a regular hexagon shape, and this hexagon pattern is then repeated 5 times in a row. How many basic triangle shapes are there across all 5 hexagons?', checkMode: 'auto', options: ['6', '11', '25', '30'], correctIndex: 3, explanation: 'Each hexagon uses 6 triangles. 5 hexagons × 6 triangles = 30 basic shapes in total ✓ (6 counts only one hexagon; 11 wrongly adds 6+5; 25 miscounts one hexagon\'s worth of triangles.)' },

        // Block F — Reasoning, Justification & Error-Spotting (Capstone) (pos 19, Hard)
        { difficulty: 'Hard', question: 'Lerato says a regular pentagon will tessellate on its own because it has straight sides, just like squares and hexagons do. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['Lerato is correct — any shape with straight sides will always tessellate on its own.', 'Lerato is not correct — even though a regular pentagon has straight sides, its angles (108° each) do not divide evenly into 360°, so gaps are always left; having straight sides is not enough, the angles must also add up perfectly to 360°.', 'Lerato is correct, but only because pentagons have exactly 5 sides.', 'Lerato is not correct — pentagons never tessellate because they are not regular polygons.'], correctIndex: 1, explanation: 'Even though a regular pentagon has straight sides, its angles (108° each) do not divide evenly into 360°, so when you try to fit pentagons together around a point, small gaps are always left. Having straight sides is not enough on its own — the angles must also add up perfectly to 360° for a shape to tessellate ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have mastered composite shapes and tessellation in Set 3.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and you will have this mastered.' },
        { minScore: 10, message: 'Good effort! Go back and read through the study guide again.' },
        { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
      ],
    },
  ],
}
