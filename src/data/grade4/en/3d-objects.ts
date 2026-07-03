import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: '3D Objects',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE 3D OBJECTS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-3d-objects',
      title: 'What Are 3D Objects?',
      icon: '📦',
      explanation: `
<p style="margin-bottom:14px;">A <strong>3D object</strong> is a <strong>solid shape</strong> that has three dimensions — <strong>length</strong>, <strong>width</strong> and <strong>height</strong>. Unlike a 2D shape, which is flat, a 3D object takes up space. You can pick it up, hold it and look at it from different sides.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Real-life examples 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>A box:</strong> it has length, width and height — you can fill it with things</li>
    <li><strong>A ball:</strong> perfectly round and solid — it rolls because of its curved surface</li>
    <li><strong>A can:</strong> it has a curved side and two flat circular ends at the top and bottom</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key properties of 3D objects</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Faces</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">The <strong style="color:#1e40af;">flat or curved surfaces</strong> of a 3D object. A face can be a flat polygon (like a square) or a curved surface (like the side of a ball).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Edges</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">The <strong style="color:#dc2626;">lines where two flat faces meet</strong>. You can feel an edge as a sharp line along a box. Curved surfaces do not form edges with each other.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Vertices</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">The <strong style="color:#16a34a;">corners where edges meet</strong>. A vertex is a sharp point. The tip of a cone is a vertex. A sphere has no vertices because it has no edges.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Common 3D objects</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;border-radius:6px 0 0 0;">Object</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#1e40af;">Faces</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#dc2626;">Edges</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;border-radius:0 6px 0 0;"><span style="color:#16a34a;">Vertices</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Sphere</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">0 flat faces<br/><span style="font-size:12px;">(1 curved surface)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">0</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Cube</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">6 <span style="font-size:12px;">(all squares)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">12</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">8</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Rectangular prism</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">6 <span style="font-size:12px;">(rectangles)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">12</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">8</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Cone</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">1 flat circular face<br/><span style="font-size:12px;">(+ 1 curved surface)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">1</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">1</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Cylinder</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">2 flat circular faces<br/><span style="font-size:12px;">(+ 1 curved surface)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">2</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Triangular pyramid</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">4 <span style="font-size:12px;font-weight:400;color:#64748b;">(triangles)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Square pyramid</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">5 <span style="font-size:12px;">(1 square + 4 triangles)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">8</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">5</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Describe a cube using its properties.',
          steps: [
            '<strong style="color:#1e40af;">Count the faces</strong> — a cube has <strong>6 faces</strong> and every face is a square.',
            '<strong style="color:#dc2626;">Count the edges</strong> — a cube has <strong>12 edges</strong>. Because all faces are equal squares, all 12 edges are the same length.',
            '<strong style="color:#16a34a;">Count the vertices</strong> — a cube has <strong>8 vertices</strong>, one at each corner where three edges meet.',
          ],
          answer:
            'A cube has 6 square faces, 12 edges and 8 vertices. All edges are equal in length.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Seven 3D objects labelled clearly — sphere, cube, rectangular prism, cone, cylinder, triangular pyramid, square pyramid — each with faces, edges and vertices labelled',
      videoPlaceholder:
        'Short video naming and describing the properties of common 3D objects using real life examples',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SORTING AND CLASSIFYING 3D OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-classifying-3d-objects',
      title: 'Sorting and Classifying 3D Objects',
      icon: '🗂️',
      explanation: `
<p style="margin-bottom:14px;">Just like 2D shapes, <strong>3D objects can be sorted and classified</strong> according to their properties. You can group them by how their surfaces look and feel, whether they can roll or stack, and how many faces they have.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Ways to sort 3D objects</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By shape of faces</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Only flat faces — cube, rectangular prism, pyramids</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Curved surface — sphere, cone, cylinder</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Objects with <strong>only flat faces</strong> are called <em>polyhedra</em>. Objects with a curved surface are not polyhedra.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By ability to roll</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Can roll — sphere, cone, cylinder</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Cannot roll — cube, rectangular prism, pyramids</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Objects with a <strong>curved surface</strong> can roll. Objects with only flat faces sit flat and cannot roll.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By ability to stack</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Can stack — cube, rectangular prism, cylinder</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Cannot stack easily — sphere, cone</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Objects with <strong>flat faces</strong> can be stacked on top of each other. A sphere rolls away and a cone balances on its point — neither stacks easily.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">By number of faces</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Triangular prism — 5 faces</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Cube / rectangular prism — 6 faces</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Triangular pyramid — 4 faces</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Square pyramid — 5 faces</span>
      </div>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Prisms vs Pyramids 📐</span>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Prism</span>
      <span style="color:#78350f;font-size:15px;padding-top:1px;">Has <strong>two identical parallel bases</strong> connected by rectangular faces. The bases can be any polygon — a triangular prism has triangle bases, a rectangular prism has rectangle bases. A cube is a special rectangular prism with square bases.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Pyramid</span>
      <span style="color:#78350f;font-size:15px;padding-top:1px;">Has <strong>one base</strong> with <strong>triangular faces</strong> that all meet at a single point at the top called the <strong>apex</strong>. A square pyramid has a square base. A triangular pyramid (tetrahedron) has a triangle base.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Sort these objects into can roll and cannot roll: sphere, cube, cone, cylinder, rectangular prism.',
          steps: [
            'Check each object: does it have a <strong style="color:#dc2626;">curved surface</strong>?',
            '<strong style="color:#1e40af;">Sphere</strong> — entirely curved surface ✔ can roll.',
            '<strong style="color:#1e40af;">Cone</strong> — curved side surface ✔ can roll.',
            '<strong style="color:#1e40af;">Cylinder</strong> — curved side surface ✔ can roll.',
            '<strong style="color:#64748b;">Cube</strong> — 6 flat faces only ✘ cannot roll.',
            '<strong style="color:#64748b;">Rectangular prism</strong> — 6 flat faces only ✘ cannot roll.',
          ],
          answer:
            'Can roll: sphere, cone, cylinder.\nCannot roll: cube, rectangular prism.',
        },
        {
          question:
            'Sort these objects into prisms and pyramids: triangular prism, square pyramid, rectangular prism, triangular pyramid, cube.',
          steps: [
            'A <strong style="color:#1e40af;">prism</strong> has two identical parallel bases connected by rectangular faces.',
            'A <strong style="color:#dc2626;">pyramid</strong> has one base with triangular faces meeting at an apex.',
            '<strong>Triangular prism</strong> — two triangle bases connected by rectangles ✔ prism.',
            '<strong>Rectangular prism</strong> — two rectangle bases connected by rectangles ✔ prism.',
            '<strong>Cube</strong> — two square bases connected by equal squares (special rectangular prism) ✔ prism.',
            '<strong>Square pyramid</strong> — one square base with 4 triangular faces meeting at an apex ✔ pyramid.',
            '<strong>Triangular pyramid</strong> — one triangle base with 3 triangular faces meeting at an apex ✔ pyramid.',
          ],
          answer:
            'Prisms: triangular prism, rectangular prism, cube.\nPyramids: square pyramid, triangular pyramid.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Two columns — left column showing objects that can roll (sphere, cone, cylinder) with curved surfaces highlighted, right column showing objects that cannot roll (cube, rectangular prism, pyramids) with flat faces highlighted',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING 2D SHAPES AND 3D OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-2d-shapes-and-3d-objects',
      title: 'Comparing 2D Shapes and 3D Objects',
      icon: '🔗',
      explanation: `
<p style="margin-bottom:14px;">Every 3D object is built from <strong>2D shapes</strong>. The flat surfaces (faces) of a 3D object are 2D shapes. If you were to take a 3D object apart and lay every face flat on a table, you would see exactly which 2D shapes it is made of.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Key idea 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A <strong>2D shape</strong> is flat — it is a face. A <strong>3D object</strong> is solid — it is built from several faces joined together. Think of a cardboard box: unfold it and you see flat rectangles. Fold it back up and you have a 3D rectangular prism.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">2D shapes that make up each 3D object</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Cube</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Made up of <strong style="color:#1e40af;">6 squares</strong> — all faces are identical squares.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Rectangular prism</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Made up of <strong style="color:#1e40af;">6 rectangles</strong> — opposite faces are identical rectangles.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Triangular prism</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">2 triangles</strong> (the two bases) and <strong style="color:#1e40af;">3 rectangles</strong> (the connecting side faces).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Square pyramid</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">1 square</strong> (the base) and <strong style="color:#1e40af;">4 triangles</strong> (the sloping side faces).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Cylinder</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">2 circles</strong> (the top and bottom faces) and <strong style="color:#1e40af;">1 rectangle</strong> when the curved side is unrolled flat.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'What 2D shapes make up a square pyramid?',
          steps: [
            '<strong style="color:#16a34a;">Look at the base</strong> — the bottom face of a square pyramid is a <strong style="color:#1e40af;">square</strong>.',
            '<strong style="color:#16a34a;">Look at the sides</strong> — each sloping face is a <strong style="color:#1e40af;">triangle</strong>. Count them: there are <strong>4 triangles</strong>, one leaning against each side of the square base.',
          ],
          answer: 'A square pyramid is made up of 1 square (the base) and 4 triangles (the side faces).',
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — 3D OBJECTS IN THE ENVIRONMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '3d-objects-in-the-environment',
      title: '3D Objects in the Environment',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">3D objects are everywhere around us! Learning to recognise them in everyday life helps you understand their properties in a real and practical way. Once you start looking, you will spot them in your classroom, your kitchen, outside and everywhere in between.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">3D objects around you</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Sphere</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Ball, orange, globe, marble</strong> — perfectly round with one continuous curved surface.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Cube</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Dice, ice cube, Rubik's cube, some gift boxes</strong> — six equal square faces and eight sharp corners.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Rectangular prism</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Cereal box, brick, book, shoe box</strong> — six rectangular faces, longer than they are wide or tall.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Cone</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Ice cream cone, party hat, traffic cone, funnel</strong> — a flat circular base tapering to a sharp point at the top.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Cylinder</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Can of food, toilet roll, drum, battery</strong> — two flat circular ends connected by one curved surface.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Pyramid</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Egyptian pyramids, some roof shapes, crystal decorations</strong> — a flat base with triangular sides rising to a point.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'What 3D object is a can of beans and what are its properties?',
          steps: [
            '<strong style="color:#1e40af;">Look at the top and bottom</strong> — a can has two <strong>flat circular faces</strong>, one on top and one on the bottom.',
            '<strong style="color:#1e40af;">Look at the side</strong> — the side is one <strong>curved surface</strong> wrapping all the way around.',
            '<strong style="color:#dc2626;">Count the edges</strong> — there are <strong>2 edges</strong>, one where each circular face meets the curved surface.',
            '<strong style="color:#16a34a;">Count the vertices</strong> — a cylinder has <strong>no vertices</strong> because no edges meet at a sharp point.',
          ],
          answer:
            'A can of beans is a cylinder. It has 2 flat circular faces, 1 curved surface, 2 edges and 0 vertices.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Six real life objects each labelled with their 3D object name — a dice (cube), a cereal box (rectangular prism), a ball (sphere), an ice cream cone (cone), a can (cylinder), an Egyptian pyramid (square pyramid)',
      videoPlaceholder:
        'Short video showing 3D objects found in everyday real life and identifying their properties',
    },
  ],

  topicPractice: [

    // ── SECTION 1 — What are 3D Objects ──────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'How many faces, edges and vertices does a cube have?',
      checkMode: 'auto',
      answer: 'a) 6   b) 12   c) 8',
      parts: [
        {
          label: 'a) Faces',
          correctAnswer: '6',
          correctAnswers: ['6', 'six'],
          explanation: 'A cube has 6 faces — every face is a square.',
        },
        {
          label: 'b) Edges',
          correctAnswer: '12',
          correctAnswers: ['12', 'twelve'],
          explanation: 'A cube has 12 edges — four on the top face, four on the bottom face and four connecting them vertically.',
        },
        {
          label: 'c) Vertices',
          correctAnswer: '8',
          correctAnswers: ['8', 'eight'],
          explanation: 'A cube has 8 vertices — one at each corner where three edges meet.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Describe the properties of a square pyramid. Include the number and shape of faces, edges and vertices.',
      checkMode: 'self',
      answer:
        'A square pyramid has 5 faces (1 square base and 4 triangular side faces), 8 edges and 5 vertices. The 4 triangular faces slope upward from the square base and meet at a single point called the apex.',
    },

    // Q3a — auto checked
    {
      difficulty: 'Hard',
      question:
        'A 3D object has 2 flat circular faces, 1 curved surface and 2 edges. It has no vertices.',
      checkMode: 'auto',
      answer: 'a) Cylinder',
      parts: [
        {
          label: 'a) Name of this object',
          correctAnswer: 'Cylinder',
          correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'],
          explanation:
            'Two flat circular faces, one curved surface and two edges with no vertices describes a cylinder.',
        },
      ],
    },

    // Q3b/c — self mark
    {
      difficulty: 'Hard',
      question:
        'A 3D object has 2 flat circular faces, 1 curved surface and 2 edges. It has no vertices.\nb) Name two real life examples of this object.\nc) Can this object roll? Explain why.',
      checkMode: 'self',
      answer:
        'b) Any two of: a can of food, a toilet roll, a drum, a battery.\nc) Yes, it can roll. A cylinder has a curved surface along its side, which allows it to roll when placed on its side.',
    },

    // ── SECTION 2 — Sorting and Classifying 3D Objects ───────────────────────

    {
      difficulty: 'Easy',
      question: 'Can a sphere roll? Write yes or no and explain why.',
      checkMode: 'self',
      answer:
        'Yes. A sphere can roll because it has a completely curved surface with no flat faces or edges to stop it.',
    },

    {
      difficulty: 'Medium',
      question:
        'Sort these objects into two groups — can roll and cannot roll:\nsphere, cube, cone, cylinder, rectangular prism, triangular pyramid',
      checkMode: 'auto',
      answer: 'a) sphere, cone, cylinder   b) cube, rectangular prism, triangular pyramid',
      parts: [
        {
          label: 'a) Can roll',
          correctAnswer: 'sphere, cone, cylinder',
          correctAnswers: [
            'sphere, cone, cylinder',
            'sphere, cylinder, cone',
            'cone, sphere, cylinder',
            'cone, cylinder, sphere',
            'cylinder, sphere, cone',
            'cylinder, cone, sphere',
          ],
          explanation:
            'Sphere, cone and cylinder all have a curved surface, which allows them to roll.',
        },
        {
          label: 'b) Cannot roll',
          correctAnswer: 'cube, rectangular prism, triangular pyramid',
          correctAnswers: [
            'cube, rectangular prism, triangular pyramid',
            'cube, triangular pyramid, rectangular prism',
            'rectangular prism, cube, triangular pyramid',
            'rectangular prism, triangular pyramid, cube',
            'triangular pyramid, cube, rectangular prism',
            'triangular pyramid, rectangular prism, cube',
          ],
          explanation:
            'Cube, rectangular prism and triangular pyramid have only flat faces — there is no curved surface to roll on.',
        },
      ],
    },

    // Q6 a/b — auto checked
    {
      difficulty: 'Hard',
      question:
        'Sort these into prisms and pyramids:\ntriangular prism, square pyramid, rectangular prism, triangular pyramid, cube',
      checkMode: 'auto',
      answer: 'a) triangular prism, rectangular prism, cube   b) square pyramid, triangular pyramid',
      parts: [
        {
          label: 'a) Prisms',
          correctAnswer: 'triangular prism, rectangular prism, cube',
          correctAnswers: [
            'triangular prism, rectangular prism, cube',
            'triangular prism, cube, rectangular prism',
            'rectangular prism, triangular prism, cube',
            'rectangular prism, cube, triangular prism',
            'cube, triangular prism, rectangular prism',
            'cube, rectangular prism, triangular prism',
          ],
          explanation:
            'A prism has two identical parallel bases connected by rectangular faces. Triangular prism, rectangular prism and cube all satisfy this rule (a cube is a special rectangular prism with square bases).',
        },
        {
          label: 'b) Pyramids',
          correctAnswer: 'square pyramid, triangular pyramid',
          correctAnswers: [
            'square pyramid, triangular pyramid',
            'triangular pyramid, square pyramid',
          ],
          explanation:
            'A pyramid has one base with triangular faces that meet at a single point (apex). Square pyramid and triangular pyramid both follow this rule.',
        },
      ],
    },

    // Q6c — self mark
    {
      difficulty: 'Hard',
      question:
        'Sort these into prisms and pyramids:\ntriangular prism, square pyramid, rectangular prism, triangular pyramid, cube\nc) What is the main difference between a prism and a pyramid?',
      checkMode: 'self',
      answer:
        'A prism has two identical parallel bases connected by rectangular faces. A pyramid has one base with triangular faces that all meet at a single point at the top called the apex.',
    },

    // ── SECTION 3 — Comparing 2D Shapes and 3D Objects ───────────────────────

    {
      difficulty: 'Easy',
      question: 'What 2D shape is the base of a square pyramid?',
      checkMode: 'auto',
      answer: 'Square',
      correctAnswer: 'Square',
      correctAnswers: ['Square', 'square', 'a square'],
      explanation: 'The base of a square pyramid is a square — that is where the name "square pyramid" comes from.',
    },

    {
      difficulty: 'Medium',
      question: 'What 2D shapes make up a triangular prism?',
      checkMode: 'auto',
      answer: 'a) 2   b) 3   c) 5',
      parts: [
        {
          label: 'a) How many triangles does it have?',
          correctAnswer: '2',
          correctAnswers: ['2', 'two'],
          explanation: 'A triangular prism has 2 triangular faces — one at each end, forming the two parallel bases.',
        },
        {
          label: 'b) How many rectangles does it have?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three'],
          explanation: 'A triangular prism has 3 rectangular faces connecting the two triangular bases.',
        },
        {
          label: 'c) Total number of faces',
          correctAnswer: '5',
          correctAnswers: ['5', 'five'],
          explanation: '2 triangles + 3 rectangles = 5 faces in total.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        'A cube is made up of 6 squares. Each square has a side length of 4 cm.',
      checkMode: 'auto',
      answer: 'a) 16cm   b) 16cm²   c) 12   d) 48cm',
      parts: [
        {
          label: 'a) Perimeter of one face',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16 cm', '16'],
          explanation: 'Perimeter of a square = 4 × side length = 4 × 4 = 16 cm.',
        },
        {
          label: 'b) Area of one face',
          correctAnswer: '16cm²',
          correctAnswers: ['16cm²', '16 cm²', '16cm2', '16 cm2', '16cm squared', '16 cm squared', '16'],
          explanation: 'Area of a square = side × side = 4 × 4 = 16 cm².',
        },
        {
          label: 'c) Number of edges',
          correctAnswer: '12',
          correctAnswers: ['12', 'twelve'],
          explanation: 'A cube has 12 edges — 4 on the top face, 4 on the bottom face and 4 vertical edges connecting them.',
        },
        {
          label: 'd) Total length of all edges added together',
          correctAnswer: '48cm',
          correctAnswers: ['48cm', '48 cm', '48'],
          explanation: 'Total length = number of edges × edge length = 12 × 4 = 48 cm.',
        },
      ],
    },

    // ── SECTION 4 — 3D Objects in the Environment ─────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Name the 3D object that best describes each item.',
      checkMode: 'auto',
      answer: 'a) Sphere   b) Rectangular prism   c) Cone',
      parts: [
        {
          label: 'a) A tennis ball',
          correctAnswer: 'Sphere',
          correctAnswers: ['Sphere', 'sphere', 'a sphere'],
          explanation: 'A tennis ball is perfectly round with one continuous curved surface — it is a sphere.',
        },
        {
          label: 'b) A brick',
          correctAnswer: 'Rectangular prism',
          correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'],
          explanation: 'A brick has 6 rectangular faces, 12 edges and 8 vertices — it is a rectangular prism.',
        },
        {
          label: 'c) An ice cream cone',
          correctAnswer: 'Cone',
          correctAnswers: ['Cone', 'cone', 'a cone'],
          explanation: 'An ice cream cone has a flat circular base that tapers to a point — it is a cone.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Find one real life example of each 3D object in your home or classroom.\na) Cylinder\nb) Rectangular prism\nc) Sphere',
      checkMode: 'self',
      answer:
        'Accept any valid real life examples.\na) Cylinder — e.g. a tin can, a toilet roll, a battery, a drum.\nb) Rectangular prism — e.g. a cereal box, a book, a brick, a shoe box.\nc) Sphere — e.g. a ball, an orange, a marble, a globe.',
    },

    // Q12 a/b/c — auto checked
    {
      difficulty: 'Hard',
      question:
        'A gift is wrapped in a box shaped like a rectangular prism. The box is 20 cm long, 15 cm wide and 10 cm tall.',
      checkMode: 'auto',
      answer: 'a) 6   b) Rectangles   c) 12',
      parts: [
        {
          label: 'a) How many faces does the box have?',
          correctAnswer: '6',
          correctAnswers: ['6', 'six'],
          explanation: 'A rectangular prism always has 6 faces.',
        },
        {
          label: 'b) What 2D shape are the faces?',
          correctAnswer: 'Rectangles',
          correctAnswers: ['Rectangles', 'rectangles', 'rectangle', 'Rectangle'],
          explanation: 'All 6 faces of a rectangular prism are rectangles (opposite faces are identical).',
        },
        {
          label: 'c) How many edges does the box have?',
          correctAnswer: '12',
          correctAnswers: ['12', 'twelve'],
          explanation: 'A rectangular prism has 12 edges — 4 along the length, 4 along the width and 4 along the height.',
        },
      ],
    },

    // Q12d — self mark
    {
      difficulty: 'Hard',
      question:
        'A gift is wrapped in a box shaped like a rectangular prism. The box is 20 cm long, 15 cm wide and 10 cm tall.\nd) If you wanted to wrap the box in paper, how many different sized rectangles of paper would you need?',
      checkMode: 'self',
      answer:
        '3 different sizes:\n• Top and bottom faces (20 cm × 15 cm) — 2 of these\n• Front and back faces (20 cm × 10 cm) — 2 of these\n• Left and right side faces (15 cm × 10 cm) — 2 of these',
    },

  ],

  scoreMessages: [
    { minScore: 28, message: 'Perfect score! You have mastered 3D Objects.' },
    { minScore: 21, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 14, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0, message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
