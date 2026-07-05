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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      diagramPlaceholder:
        'Six real life objects each labelled with their 3D object name — a dice (cube), a cereal box (rectangular prism), a ball (sphere), an ice cream cone (cone), a can (cylinder), an Egyptian pyramid (square pyramid)',
      videoPlaceholder:
        'Short video showing 3D objects found in everyday real life and identifying their properties',
    },
  ],

  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — NAMING OBJECTS AND COUNTING FACES, EDGES, VERTICES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Naming 3D Objects and Their Properties',
      questions: [
        { difficulty: 'Easy', question: 'I have 6 flat square faces, 12 edges and 8 vertices. What 3D object am I?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'Six equal square faces, 12 edges and 8 vertices describe a cube.' },
        { difficulty: 'Easy', question: 'I have 6 rectangular faces, 12 edges and 8 vertices, but my faces are not all squares. What 3D object am I?', answer: 'Rectangular prism', checkMode: 'auto', correctAnswer: 'Rectangular prism', correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], explanation: 'Six rectangular faces (not all square), 12 edges and 8 vertices describe a rectangular prism.' },
        { difficulty: 'Easy', question: 'I am perfectly round with only one curved surface. I have no flat faces, no edges and no vertices. What 3D object am I?', answer: 'Sphere', checkMode: 'auto', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'One continuous curved surface with no flat faces, edges or vertices describes a sphere.' },
        { difficulty: 'Easy', question: 'I have a flat circular base and one curved surface that comes to a point at the top. What 3D object am I?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A flat circular base with a curved surface tapering to a point describes a cone.' },
        { difficulty: 'Easy', question: 'I have two flat circular faces and one curved surface joining them. What 3D object am I?', answer: 'Cylinder', checkMode: 'auto', correctAnswer: 'Cylinder', correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'], explanation: 'Two flat circular faces joined by a curved surface describe a cylinder.' },
        { difficulty: 'Easy', question: 'I have a square base and 4 triangular faces that meet at a point at the top. What 3D object am I?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'A square base with 4 triangular faces meeting at an apex describes a square pyramid.' },
        { difficulty: 'Easy', question: 'I have a triangular base and 3 more triangular faces that meet at a point at the top. What 3D object am I?', answer: 'Triangular pyramid', checkMode: 'auto', correctAnswer: 'Triangular pyramid', correctAnswers: ['Triangular pyramid', 'triangular pyramid', 'a triangular pyramid', 'tetrahedron', 'a tetrahedron'], explanation: 'All 4 faces are triangles, meeting at an apex — this describes a triangular pyramid (tetrahedron).' },
        { difficulty: 'Easy', question: 'I have two triangular faces and 3 rectangular faces. What 3D object am I?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'a triangular prism'], explanation: 'Two triangular bases joined by 3 rectangular faces describe a triangular prism.' },
        { difficulty: 'Easy', question: 'How many faces does a cube have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A cube has 6 faces — every face is a square.' },
        { difficulty: 'Easy', question: 'How many edges does a cube have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'A cube has 12 edges — 4 on the top face, 4 on the bottom face and 4 connecting them vertically.' },
        { difficulty: 'Easy', question: 'How many vertices does a cube have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'A cube has 8 vertices — one at each corner where three edges meet.' },
        { difficulty: 'Easy', question: 'How many faces does a rectangular prism have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A rectangular prism always has 6 rectangular faces.' },
        { difficulty: 'Easy', question: 'How many edges does a rectangular prism have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'A rectangular prism has 12 edges, just like a cube.' },
        { difficulty: 'Easy', question: 'How many vertices does a rectangular prism have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'A rectangular prism has 8 vertices, one at each corner.' },
        { difficulty: 'Medium', question: 'How many faces does a triangular prism have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A triangular prism has 5 faces — 2 triangular bases and 3 rectangular side faces.' },
        { difficulty: 'Medium', question: 'How many edges does a triangular prism have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: 'A triangular prism has 9 edges — 3 on each triangular base (6 total) plus 3 connecting them.' },
        { difficulty: 'Medium', question: 'How many vertices does a triangular prism have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A triangular prism has 6 vertices — 3 on each triangular base.' },
        { difficulty: 'Medium', question: 'How many faces does a square pyramid have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A square pyramid has 5 faces — 1 square base and 4 triangular side faces.' },
        { difficulty: 'Medium', question: 'How many edges does a square pyramid have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'A square pyramid has 8 edges — 4 around the square base and 4 sloping up to the apex.' },
        { difficulty: 'Medium', question: 'How many vertices does a square pyramid have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A square pyramid has 5 vertices — 4 at the base corners and 1 at the apex.' },
        { difficulty: 'Medium', question: 'How many faces does a triangular pyramid have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A triangular pyramid has 4 faces — all of them are triangles.' },
        { difficulty: 'Medium', question: 'How many edges does a triangular pyramid have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A triangular pyramid has 6 edges — 3 around the base and 3 sloping up to the apex.' },
        { difficulty: 'Medium', question: 'How many vertices does a triangular pyramid have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A triangular pyramid has 4 vertices — 3 at the base corners and 1 at the apex.' },
        { difficulty: 'Medium', question: 'How many curved surfaces does a sphere have?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A sphere has just 1 continuous curved surface and no flat faces at all.' },
        { difficulty: 'Medium', question: 'How many edges does a sphere have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none', 'no edges'], explanation: 'A sphere has 0 edges because it has no flat faces that could meet to form an edge.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered naming 3D objects and counting their faces, edges and vertices.' },
        { minScore: 19, message: 'Great work! You know the properties of common 3D objects well — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Go back over the table of faces, edges and vertices and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — FACE-SHAPE CLUES AND COMPARING OBJECTS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Face-Shape Clues and Comparing Objects',
      questions: [
        { difficulty: 'Easy', question: 'How many vertices does a cylinder have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none', 'no vertices'], explanation: 'A cylinder has no sharp points, so it has 0 vertices.' },
        { difficulty: 'Easy', question: 'How many edges does a cylinder have?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A cylinder has 2 edges — one where each flat circular face meets the curved surface.' },
        { difficulty: 'Easy', question: 'How many vertices does a cone have?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A cone has 1 vertex — the sharp point at its tip, sometimes called the apex.' },
        { difficulty: 'Easy', question: 'How many edges does a cone have?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A cone has 1 edge — where the flat circular base meets the curved surface.' },
        { difficulty: 'Medium', question: 'All of my faces are flat squares. What 3D object am I?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'A 3D object with all flat square faces is a cube.' },
        { difficulty: 'Medium', question: 'I have exactly one flat circular face and one curved surface, and I come to a point. What 3D object am I?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'One flat circular base plus a curved surface tapering to a point describes a cone.' },
        { difficulty: 'Medium', question: 'My faces are 2 triangles and 3 rectangles. What 3D object am I?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'a triangular prism'], explanation: '2 triangular bases plus 3 rectangular sides describe a triangular prism.' },
        { difficulty: 'Medium', question: 'My faces are 1 square and 4 triangles. What 3D object am I?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: '1 square base plus 4 triangular sides meeting at an apex describes a square pyramid.' },
        { difficulty: 'Medium', question: 'All 4 of my faces are triangles. What 3D object am I?', answer: 'Triangular pyramid', checkMode: 'auto', correctAnswer: 'Triangular pyramid', correctAnswers: ['Triangular pyramid', 'triangular pyramid', 'a triangular pyramid', 'tetrahedron', 'a tetrahedron'], explanation: 'A 3D object made up of 4 triangular faces is a triangular pyramid (tetrahedron).' },
        { difficulty: 'Medium', question: 'A cube and a rectangular prism both have 6 faces, 12 edges and 8 vertices. What is the one difference between them?', answer: 'A cube has all square faces, while a rectangular prism has rectangular faces that are not all squares.', checkMode: 'self', explanation: 'They share the same number of faces, edges and vertices, but a cube is a special rectangular prism whose faces are all equal squares.' },
        { difficulty: 'Medium', question: 'How many more edges does a cube have than a triangular pyramid?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A cube has 12 edges and a triangular pyramid has 6 edges. 12 − 6 = 6 more edges.' },
        { difficulty: 'Medium', question: 'How many more faces does a triangular prism have than a triangular pyramid?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A triangular prism has 5 faces and a triangular pyramid has 4 faces. 5 − 4 = 1 more face.' },
        { difficulty: 'Medium', question: 'Which 3D object has exactly 1 curved surface and only 1 flat face?', answer: 'Cone', checkMode: 'self', explanation: 'A cone has exactly 1 flat circular face and 1 curved surface — a cylinder has 2 flat faces and a sphere has 0.' },
        { difficulty: 'Medium', question: 'Name the two 3D objects that have curved surfaces and no vertices at all.', answer: 'Sphere and cylinder', checkMode: 'self', explanation: 'A sphere has 0 vertices and a cylinder also has 0 vertices, because neither has a sharp point.' },
        { difficulty: 'Medium', question: 'Which object has more vertices: a square pyramid or a triangular pyramid?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'the square pyramid'], explanation: 'A square pyramid has 5 vertices, while a triangular pyramid has only 4 vertices.' },
        { difficulty: 'Medium', question: 'Which object has more edges: a triangular prism or a square pyramid?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'the triangular prism'], explanation: 'A triangular prism has 9 edges and a square pyramid has 8 edges — the triangular prism has 1 more edge.' },
        { difficulty: 'Hard', question: 'I have a curved surface and no vertices. I have 2 flat faces. What 3D object am I?', answer: 'Cylinder', checkMode: 'auto', correctAnswer: 'Cylinder', correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'], explanation: 'A curved surface, no vertices and 2 flat circular faces describe a cylinder.' },
        { difficulty: 'Hard', question: 'I have 1 vertex, 1 edge and 1 flat face. What 3D object am I?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A cone has exactly 1 vertex (the apex), 1 edge and 1 flat circular face.' },
        { difficulty: 'Hard', question: 'I have 8 vertices and all my faces are flat quadrilaterals (four-sided shapes). What 3D object could I be?', answer: 'Cube or rectangular prism', checkMode: 'self', explanation: 'Both a cube and a rectangular prism have 8 vertices and only flat quadrilateral (rectangle or square) faces.' },
        { difficulty: 'Hard', question: 'I have 5 vertices. Some of my faces are triangles and one is a different shape. What 3D object am I?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'A square pyramid has 5 vertices: 4 triangular faces plus 1 square base.' },
        { difficulty: 'Hard', question: 'I have 6 vertices and 2 of my faces are triangles while the rest are rectangles. What 3D object am I?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'a triangular prism'], explanation: 'A triangular prism has 6 vertices: 2 triangular bases and 3 rectangular side faces.' },
        { difficulty: 'Hard', question: 'Compare a cone and a cylinder. What do they have in common?', answer: 'Both have at least one flat circular face and one curved surface.', checkMode: 'self', explanation: 'A cone has 1 flat circular face and a cylinder has 2, but both objects include a flat circular face together with a curved surface.' },
        { difficulty: 'Hard', question: 'Compare a cube and a square pyramid. What do they have in common?', answer: 'Both have a square face.', checkMode: 'self', explanation: 'Every face of a cube is a square, and a square pyramid has one square base — so both objects include a square face.' },
        { difficulty: 'Hard', question: 'A 3D object has no flat faces and no edges. What is the only object it could be?', answer: 'Sphere', checkMode: 'auto', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'A sphere is the only common 3D object with absolutely no flat faces or edges — just one curved surface.' },
        { difficulty: 'Hard', question: 'Which has fewer faces: a triangular pyramid or a cone?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'the cone'], explanation: 'A cone has 2 faces (1 flat + 1 curved) and a triangular pyramid has 4 flat triangular faces, so the cone has fewer faces.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can identify 3D objects from face-shape clues and compare their properties confidently.' },
        { minScore: 19, message: 'Great work! You understand how to compare 3D objects — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the properties table and the prisms vs pyramids explanation, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — SORTING, CLASSIFYING AND REAL-WORLD OBJECTS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Sorting, Classifying and Real-World Objects',
      questions: [
        { difficulty: 'Easy', question: 'Thabo says a dice is shaped like a cube. Is he correct?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'A dice has 6 equal square faces, 12 edges and 8 vertices — it is a cube.' },
        { difficulty: 'Easy', question: 'What 3D object is a can of cooldrink?', answer: 'Cylinder', checkMode: 'auto', correctAnswer: 'Cylinder', correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'], explanation: 'A can has two flat circular ends joined by a curved surface — it is a cylinder.' },
        { difficulty: 'Easy', question: 'What 3D object is a soccer ball?', answer: 'Sphere', checkMode: 'auto', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'A soccer ball is perfectly round with one curved surface — it is a sphere.' },
        { difficulty: 'Easy', question: 'What 3D object is a party hat?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A party hat has a flat circular base tapering to a point — it is a cone.' },
        { difficulty: 'Easy', question: 'What 3D object is a cereal box?', answer: 'Rectangular prism', checkMode: 'auto', correctAnswer: 'Rectangular prism', correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], explanation: 'A cereal box has 6 rectangular faces — it is a rectangular prism.' },
        { difficulty: 'Easy', question: 'What 3D object is the Great Pyramid of Egypt shaped like?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'The Great Pyramid has a square base with 4 triangular faces meeting at the top — a square pyramid.' },
        { difficulty: 'Easy', question: 'Can a sphere roll? Write yes or no and explain why.', answer: 'Yes — a sphere can roll because it has a completely curved surface with no flat faces or edges to stop it.', checkMode: 'self', explanation: 'A sphere rolls smoothly because it has only one continuous curved surface.' },
        { difficulty: 'Easy', question: 'Can a cube roll? Write yes or no and explain why.', answer: 'No — a cube cannot roll because it has only flat faces and sharp edges that stop it from rolling.', checkMode: 'self', explanation: 'A cube has 6 flat faces, so it slides or tips over rather than rolling.' },
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll:\nsphere, cube, cone, cylinder, rectangular prism, triangular pyramid', answer: 'a) sphere, cone, cylinder   b) cube, rectangular prism, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Can roll', correctAnswer: 'sphere, cone, cylinder', correctAnswers: ['sphere, cone, cylinder', 'sphere, cylinder, cone', 'cone, sphere, cylinder', 'cone, cylinder, sphere', 'cylinder, sphere, cone', 'cylinder, cone, sphere'], explanation: 'Sphere, cone and cylinder all have a curved surface, which allows them to roll.' },
          { label: 'b) Cannot roll', correctAnswer: 'cube, rectangular prism, triangular pyramid', correctAnswers: ['cube, rectangular prism, triangular pyramid', 'cube, triangular pyramid, rectangular prism', 'rectangular prism, cube, triangular pyramid', 'rectangular prism, triangular pyramid, cube', 'triangular pyramid, cube, rectangular prism', 'triangular pyramid, rectangular prism, cube'], explanation: 'Cube, rectangular prism and triangular pyramid have only flat faces — there is no curved surface to roll on.' },
        ] },
        { difficulty: 'Medium', question: 'Sort these into prisms and pyramids:\ntriangular prism, square pyramid, rectangular prism, triangular pyramid, cube', answer: 'a) triangular prism, rectangular prism, cube   b) square pyramid, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Prisms', correctAnswer: 'triangular prism, rectangular prism, cube', correctAnswers: ['triangular prism, rectangular prism, cube', 'triangular prism, cube, rectangular prism', 'rectangular prism, triangular prism, cube', 'rectangular prism, cube, triangular prism', 'cube, triangular prism, rectangular prism', 'cube, rectangular prism, triangular prism'], explanation: 'A prism has two identical parallel bases connected by rectangular faces. Triangular prism, rectangular prism and cube all satisfy this rule.' },
          { label: 'b) Pyramids', correctAnswer: 'square pyramid, triangular pyramid', correctAnswers: ['square pyramid, triangular pyramid', 'triangular pyramid, square pyramid'], explanation: 'A pyramid has one base with triangular faces meeting at a single apex. Square pyramid and triangular pyramid both follow this rule.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho says objects with only flat faces are called polyhedra. Is he correct?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Objects with only flat faces (like a cube or pyramid) are polyhedra. Objects with a curved surface (like a sphere) are not.' },
        { difficulty: 'Medium', question: 'Which of these objects can be stacked easily on top of each other: a sphere, a cube or a cone?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'A cube has flat faces that sit stably on top of each other, unlike a sphere (rolls away) or a cone (balances on a point).' },
        { difficulty: 'Medium', question: 'Lerato has a toilet roll, a book and an orange. Match each item to its 3D object.', answer: 'Toilet roll — cylinder; Book — rectangular prism; Orange — sphere.', checkMode: 'self', explanation: 'A toilet roll is a cylinder (curved surface with 2 circular ends), a book is a rectangular prism, and an orange is a sphere.' },
        { difficulty: 'Medium', question: 'Amahle has an ice cream cone, a dice and a soccer ball. Match each item to its 3D object.', answer: 'Ice cream cone — cone; Dice — cube; Soccer ball — sphere.', checkMode: 'self', explanation: 'An ice cream cone is a cone, a dice is a cube, and a soccer ball is a sphere.' },
        { difficulty: 'Medium', question: 'Name two real life examples of a cylinder.', answer: 'Any two of: a can of food, a toilet roll, a drum, a battery.', checkMode: 'self', explanation: 'Cylinders in real life include cans, toilet rolls, drums and batteries — all have two flat circular ends and one curved surface.' },
        { difficulty: 'Medium', question: 'Name two real life examples of a rectangular prism.', answer: 'Any two of: a cereal box, a brick, a book, a shoe box.', checkMode: 'self', explanation: 'Rectangular prisms in real life include cereal boxes, bricks, books and shoe boxes.' },
        { difficulty: 'Medium', question: 'Name two real life examples of a sphere.', answer: 'Any two of: a ball, an orange, a marble, a globe.', checkMode: 'self', explanation: 'Spheres in real life include balls, oranges, marbles and globes.' },
        { difficulty: 'Medium', question: 'Name two real life examples of a cone.', answer: 'Any two of: an ice cream cone, a party hat, a traffic cone, a funnel.', checkMode: 'self', explanation: 'Cones in real life include ice cream cones, party hats, traffic cones and funnels.' },
        { difficulty: 'Medium', question: 'Name two real life examples of a cube.', answer: 'Any two of: a dice, an ice cube, a Rubik\'s cube, some gift boxes.', checkMode: 'self', explanation: 'Cubes in real life include dice, ice cubes and Rubik\'s cubes — all have 6 equal square faces.' },
        { difficulty: 'Hard', question: 'A brick, a box of tissues and a matchbox are all examples of which 3D object?', answer: 'Rectangular prism', checkMode: 'auto', correctAnswer: 'Rectangular prism', correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], explanation: 'A brick, a tissue box and a matchbox all have 6 rectangular faces — they are rectangular prisms.' },
        { difficulty: 'Hard', question: 'Sort these real life objects into can roll and cannot roll: a marble, a matchbox, a traffic cone, a book.', answer: 'Can roll: marble, traffic cone.   Cannot roll: matchbox, book.', checkMode: 'self', explanation: 'A marble (sphere) and traffic cone (cone) both have curved surfaces so they can roll. A matchbox and book (rectangular prisms) have only flat faces so they cannot roll.' },
        { difficulty: 'Hard', question: 'Why can a cylinder roll on its side but not stand and roll when it is upright?', answer: 'When lying on its side, the curved surface touches the ground and can roll. When standing upright, a flat circular face touches the ground, which is stable and does not roll.', checkMode: 'self', explanation: 'Rolling depends on which surface touches the ground — the curved surface allows rolling, but the flat circular face does not.' },
        { difficulty: 'Hard', question: 'What is the main difference between a prism and a pyramid?', answer: 'A prism has two identical parallel bases connected by rectangular faces. A pyramid has one base with triangular faces that all meet at a single point at the top called the apex.', checkMode: 'self', explanation: 'This is the key rule for telling prisms and pyramids apart.' },
        { difficulty: 'Hard', question: 'A crystal decoration is shaped with triangular sides that all meet at a point above a square base. What 3D object is it?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'Triangular sides meeting at a point above a square base describe a square pyramid.' },
        { difficulty: 'Hard', question: 'A funnel used to pour oil into a car engine is shaped like which 3D object?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A funnel has a wide circular opening that narrows to a point — it is shaped like a cone.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can sort, classify and recognise 3D objects in the real world with confidence.' },
        { minScore: 19, message: 'Great work! You understand how to sort 3D objects by their properties — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the sorting and real-world examples sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND REASONING QUESTIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'A 3D object has 2 flat circular faces, 1 curved surface and 2 edges. It has no vertices.', answer: 'Cylinder', checkMode: 'auto', correctAnswer: 'Cylinder', correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'], explanation: 'Two flat circular faces, one curved surface, two edges and no vertices describe a cylinder.' },
        { difficulty: 'Medium', question: 'A 3D object has 2 flat circular faces, 1 curved surface and 2 edges. It has no vertices.\nName two real life examples of this object.', answer: 'Any two of: a can of food, a toilet roll, a drum, a battery.', checkMode: 'self', explanation: 'Real life cylinders include cans, toilet rolls, drums and batteries.' },
        { difficulty: 'Medium', question: 'A 3D object has 2 flat circular faces, 1 curved surface and 2 edges. It has no vertices.\nCan this object roll? Explain why.', answer: 'Yes, it can roll. A cylinder has a curved surface along its side, which allows it to roll when placed on its side.', checkMode: 'self', explanation: 'The curved surface allows rolling when the cylinder lies on its side.' },
        { difficulty: 'Medium', question: 'What 2D shape is the base of a square pyramid?', answer: 'Square', checkMode: 'auto', correctAnswer: 'Square', correctAnswers: ['Square', 'square', 'a square'], explanation: 'The base of a square pyramid is a square — that is where the name comes from.' },
        { difficulty: 'Medium', question: 'What 2D shapes make up a triangular prism?', answer: 'a) 2   b) 3   c) 5', checkMode: 'auto', parts: [
          { label: 'a) How many triangles does it have?', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A triangular prism has 2 triangular faces, forming the two parallel bases.' },
          { label: 'b) How many rectangles does it have?', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'A triangular prism has 3 rectangular faces connecting the two triangular bases.' },
          { label: 'c) Total number of faces', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: '2 triangles + 3 rectangles = 5 faces in total.' },
        ] },
        { difficulty: 'Hard', question: 'A cube is made up of 6 squares. Each square has a side length of 4 cm.', answer: 'a) 16cm   b) 16cm²   c) 12   d) 48cm', checkMode: 'auto', parts: [
          { label: 'a) Perimeter of one face', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], explanation: 'Perimeter of a square = 4 × side length = 4 × 4 = 16 cm.' },
          { label: 'b) Area of one face', correctAnswer: '16cm²', correctAnswers: ['16cm²', '16 cm²', '16cm2', '16 cm2', '16cm squared', '16 cm squared', '16'], explanation: 'Area of a square = side × side = 4 × 4 = 16 cm².' },
          { label: 'c) Number of edges', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'A cube has 12 edges — 4 on the top face, 4 on the bottom face and 4 vertical edges connecting them.' },
          { label: 'd) Total length of all edges added together', correctAnswer: '48cm', correctAnswers: ['48cm', '48 cm', '48'], explanation: 'Total length = number of edges × edge length = 12 × 4 = 48 cm.' },
        ] },
        { difficulty: 'Medium', question: 'Name the 3D object that best describes each item.', answer: 'a) Sphere   b) Rectangular prism   c) Cone', checkMode: 'auto', parts: [
          { label: 'a) A tennis ball', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'A tennis ball is perfectly round with one continuous curved surface — it is a sphere.' },
          { label: 'b) A brick', correctAnswer: 'Rectangular prism', correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], explanation: 'A brick has 6 rectangular faces, 12 edges and 8 vertices — it is a rectangular prism.' },
          { label: 'c) An ice cream cone', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'An ice cream cone has a flat circular base that tapers to a point — it is a cone.' },
        ] },
        { difficulty: 'Medium', question: 'Find one real life example of each 3D object in your home or classroom.\na) Cylinder\nb) Rectangular prism\nc) Sphere', answer: 'Accept any valid real life examples.\na) Cylinder — e.g. a tin can, a toilet roll, a battery, a drum.\nb) Rectangular prism — e.g. a cereal box, a book, a brick, a shoe box.\nc) Sphere — e.g. a ball, an orange, a marble, a globe.', checkMode: 'self', explanation: 'Accept any correct real life examples that match each 3D object.' },
        { difficulty: 'Hard', question: 'A gift is wrapped in a box shaped like a rectangular prism. The box is 20 cm long, 15 cm wide and 10 cm tall.', answer: 'a) 6   b) Rectangles   c) 12', checkMode: 'auto', parts: [
          { label: 'a) How many faces does the box have?', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A rectangular prism always has 6 faces.' },
          { label: 'b) What 2D shape are the faces?', correctAnswer: 'Rectangles', correctAnswers: ['Rectangles', 'rectangles', 'rectangle', 'Rectangle'], explanation: 'All 6 faces of a rectangular prism are rectangles (opposite faces are identical).' },
          { label: 'c) How many edges does the box have?', correctAnswer: '12', correctAnswers: ['12', 'twelve'], explanation: 'A rectangular prism has 12 edges — 4 along the length, 4 along the width and 4 along the height.' },
        ] },
        { difficulty: 'Hard', question: 'A gift is wrapped in a box shaped like a rectangular prism. The box is 20 cm long, 15 cm wide and 10 cm tall.\nIf you wanted to wrap the box in paper, how many different sized rectangles of paper would you need?', answer: '3 different sizes:\n• Top and bottom faces (20 cm × 15 cm) — 2 of these\n• Front and back faces (20 cm × 10 cm) — 2 of these\n• Left and right side faces (15 cm × 10 cm) — 2 of these', checkMode: 'self', explanation: 'A rectangular prism has 3 pairs of identical opposite faces, so there are 3 different rectangle sizes.' },
        { difficulty: 'Hard', question: 'Sipho builds a tower using 1 cube and 1 square pyramid stacked on top of each other. How many faces are visible on the outside if the two touching faces are hidden?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: 'Cube has 6 faces and square pyramid has 5 faces = 11 faces total. Subtract the 2 touching faces (1 from each) that are hidden: 11 − 2 = 9 visible faces.' },
        { difficulty: 'Hard', question: 'Thabo has a triangular prism and a triangular pyramid. Together, how many edges do they have?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'fifteen'], explanation: 'A triangular prism has 9 edges and a triangular pyramid has 6 edges. 9 + 6 = 15 edges in total.' },
        { difficulty: 'Hard', question: 'Amahle has a cube and a square pyramid. Together, how many vertices do they have?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', 'thirteen'], explanation: 'A cube has 8 vertices and a square pyramid has 5 vertices. 8 + 5 = 13 vertices in total.' },
        { difficulty: 'Hard', question: 'Lerato has a sphere, a cone and a cylinder. Together, how many edges do they have?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'Sphere has 0 edges, cone has 1 edge, cylinder has 2 edges. 0 + 1 + 2 = 3 edges in total.' },
        { difficulty: 'Hard', question: 'Which has more faces in total: a cube and a cone together, or a triangular prism and a triangular pyramid together?', answer: 'Triangular prism and triangular pyramid together', checkMode: 'self', explanation: 'Cube (6) + cone (2) = 8 faces. Triangular prism (5) + triangular pyramid (4) = 9 faces. The triangular prism and triangular pyramid together have 1 more face than the cube and cone together.' },
        { difficulty: 'Hard', question: 'A tower is built from a rectangular prism at the bottom and a triangular prism on top (like a house shape). Explain why this combined shape has both flat faces and rectangular and triangular faces.', answer: 'The rectangular prism contributes rectangular faces, and the triangular prism contributes both triangular faces (the two ends) and rectangular faces (the sloped sides), so together the house shape has flat rectangular and triangular faces.', checkMode: 'self', explanation: 'Combining two polyhedra keeps all their flat-face properties, since both are made only of flat faces.' },
        { difficulty: 'Hard', question: 'Explain why a sphere is the only common 3D object that cannot be stacked at all, even on its own kind.', answer: 'A sphere has only one curved surface and no flat part anywhere, so there is no stable flat surface for another object to rest on or for it to rest on another sphere without rolling off.', checkMode: 'self', explanation: 'Stacking requires a flat contact surface, which a sphere does not have anywhere on it.' },
        { difficulty: 'Hard', question: 'Explain why a cylinder can stack when upright but a cone cannot stack easily at all.', answer: 'A cylinder has 2 flat circular faces, so its flat top can support another object placed on it. A cone has only 1 flat face at the bottom and a sharp point at the top, so nothing can balance on its point.', checkMode: 'self', explanation: 'Stacking needs a flat top surface — a cylinder has one, but a cone\'s top is a single point.' },
        { difficulty: 'Hard', question: 'Sipho says: "A square pyramid and a triangular pyramid are both pyramids, so they must have the same number of faces." Is he correct? Explain.', answer: 'No. A square pyramid has 5 faces (1 square + 4 triangles), while a triangular pyramid has only 4 faces (all triangles) — they are different because their base shapes are different.', checkMode: 'self', explanation: 'The number of faces on a pyramid depends on the number of sides of its base, so different base shapes give different numbers of faces.' },
        { difficulty: 'Hard', question: 'Amahle says: "All prisms have exactly 2 triangular faces." Is she correct? Explain.', answer: 'No. Only a triangular prism has 2 triangular faces (its bases). A rectangular prism has rectangular bases, not triangular ones, so not all prisms have triangular faces.', checkMode: 'self', explanation: 'The shape of a prism\'s bases matches the name of the prism — a triangular prism has triangle bases, a rectangular prism has rectangle bases.' },
        { difficulty: 'Hard', question: 'A can of beans has 2 flat circular faces, 1 curved surface, 2 edges and 0 vertices. Name the 3D object and describe why it cannot be a cone.', answer: 'It is a cylinder. It cannot be a cone because a cone has only 1 flat circular face and 1 vertex (a sharp point), but this object has 2 flat faces and no vertices.', checkMode: 'self', explanation: 'A cylinder has 2 flat circular faces and no vertices, while a cone has only 1 flat face and a pointed vertex — the number of flat faces and vertices tells them apart.' },
        { difficulty: 'Hard', question: 'Lerato is packing a box shaped like a rectangular prism with balls shaped like spheres. Explain one reason spheres do not pack perfectly into the box with no gaps.', answer: 'A sphere is curved all over, so it only touches the flat sides of the box at single points, leaving gaps between the round balls and the straight edges and corners of the box.', checkMode: 'self', explanation: 'Only flat-faced objects like cubes or rectangular prisms can pack together with no gaps, because their flat faces touch evenly.' },
        { difficulty: 'Hard', question: 'Total up the vertices of a cube, a square pyramid and a triangular pyramid.', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', 'seventeen'], explanation: 'Cube = 8 vertices, square pyramid = 5 vertices, triangular pyramid = 4 vertices. 8 + 5 + 4 = 17.' },
        { difficulty: 'Hard', question: 'Total up the number of flat faces of a cylinder, a cone and a sphere.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'three'], explanation: 'Cylinder has 2 flat circular faces, cone has 1 flat circular face, sphere has 0 flat faces. 2 + 1 + 0 = 3 flat faces in total.' },
        { difficulty: 'Hard', question: 'Amahle combines a rectangular prism and a triangular prism to build a tent shape. Explain what 2D shapes make up the outside of this combined shape.', answer: 'The rectangular prism contributes rectangular faces, and the triangular prism contributes 2 triangular faces (the ends) and more rectangular faces (the sloped sides), so the tent shape is made up of rectangles and triangles.', checkMode: 'self', explanation: 'Combining two prisms combines their face shapes — here the result includes both rectangles and triangles.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently combine ideas about 3D objects and explain your reasoning.' },
        { minScore: 19, message: 'Great work! You can apply 3D object properties to multi-step problems — review any missed questions.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
