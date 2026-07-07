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
    // SET 1 (20 Qs)
    // Block 1 Naming (0-3) | Block 2 Counting (4-7) | Block 3 Comparing (8-11)
    // Block 4 Sorting (12-15) | Block 5 Real-World/Error (16-18) | Block 6 Capstone (19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Naming from Properties (Easy)
        { difficulty: 'Easy', question: 'I have 6 flat square faces, 12 edges and 8 vertices. What 3D object am I?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'Six equal square faces, 12 edges and 8 vertices describe a cube.' },
        { difficulty: 'Easy', question: 'A can of soup has two flat circular ends joined by one curved surface, and no sharp corners anywhere. Name this 3D object.', answer: 'Cylinder', checkMode: 'auto', correctAnswer: 'Cylinder', correctAnswers: ['Cylinder', 'cylinder', 'a cylinder'], explanation: 'Two flat circular faces joined by a curved surface, with no sharp points, describe a cylinder.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a square base with 4 triangular faces meeting at a single point above it is called a _______.', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'A square base with 4 triangular faces meeting at an apex describes a square pyramid.' },
        { difficulty: 'Easy', question: 'A cereal box has 6 rectangular faces, 12 edges and 8 vertices, just like a cube — but its faces are not all squares. What object is it?', answer: 'Rectangular prism', checkMode: 'auto', correctAnswer: 'Rectangular prism', correctAnswers: ['Rectangular prism', 'rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], explanation: 'Six rectangular faces (not all square), 12 edges and 8 vertices describe a rectangular prism.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many edges does a triangular prism have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: 'A triangular prism has 9 edges — 3 on each triangular base (6 total) plus 3 connecting them.' },
        { difficulty: 'Easy', question: 'A cone comes to one sharp point at its tip. How many vertices does that give it in total?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A cone has 1 vertex — the sharp point at its tip, sometimes called the apex.' },
        { difficulty: 'Easy', question: 'Complete the count: a cylinder has ___ edges, formed where its flat circular faces meet its curved surface.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A cylinder has 2 edges — one where each flat circular face meets the curved surface.' },
        { difficulty: 'Easy', question: 'Explain why a sphere has 0 edges.', answer: 'A sphere has 0 edges because an edge only forms where two flat faces meet, and a sphere has no flat faces at all — just one continuous curved surface.', checkMode: 'self', explanation: 'Edges are formed by flat faces meeting each other. Since a sphere is entirely curved, it cannot form any edges.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'A cube and a rectangular prism both have 6 faces, 12 edges and 8 vertices. What is the one difference between them?', answer: 'A cube has all square faces, while a rectangular prism has rectangular faces that are not all squares.', checkMode: 'self', explanation: 'They share the same number of faces, edges and vertices, but a cube is a special rectangular prism whose faces are all equal squares.' },
        { difficulty: 'Medium', question: 'How many more edges does a cube have than a triangular pyramid?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A cube has 12 edges and a triangular pyramid has 6 edges. 12 − 6 = 6 more edges.' },
        { difficulty: 'Medium', question: 'Which object has more vertices: a square pyramid or a triangular pyramid?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'the square pyramid'], explanation: 'A square pyramid has 5 vertices, while a triangular pyramid has only 4 vertices.' },
        { difficulty: 'Medium', question: 'Name the two 3D objects that have curved surfaces and no vertices at all.', answer: 'Sphere and cylinder', checkMode: 'self', explanation: 'A sphere has 0 vertices and a cylinder also has 0 vertices, because neither has a sharp point.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll:\nsphere, cube, cone, cylinder, rectangular prism, triangular pyramid', answer: 'a) sphere, cone, cylinder   b) cube, rectangular prism, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Can roll', correctAnswer: 'sphere, cone, cylinder', correctAnswers: ['sphere, cone, cylinder', 'sphere, cylinder, cone', 'cone, sphere, cylinder', 'cone, cylinder, sphere', 'cylinder, sphere, cone', 'cylinder, cone, sphere'], explanation: 'Sphere, cone and cylinder all have a curved surface, which allows them to roll.' },
          { label: 'b) Cannot roll', correctAnswer: 'cube, rectangular prism, triangular pyramid', correctAnswers: ['cube, rectangular prism, triangular pyramid', 'cube, triangular pyramid, rectangular prism', 'rectangular prism, cube, triangular pyramid', 'rectangular prism, triangular pyramid, cube', 'triangular pyramid, cube, rectangular prism', 'triangular pyramid, rectangular prism, cube'], explanation: 'Cube, rectangular prism and triangular pyramid have only flat faces — there is no curved surface to roll on.' },
        ] },
        { difficulty: 'Medium', question: 'Sort these into prisms and pyramids:\ntriangular prism, square pyramid, rectangular prism, triangular pyramid, cube', answer: 'a) triangular prism, rectangular prism, cube   b) square pyramid, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Prisms', correctAnswer: 'triangular prism, rectangular prism, cube', correctAnswers: ['triangular prism, rectangular prism, cube', 'triangular prism, cube, rectangular prism', 'rectangular prism, triangular prism, cube', 'rectangular prism, cube, triangular prism', 'cube, triangular prism, rectangular prism', 'cube, rectangular prism, triangular prism'], explanation: 'A prism has two identical parallel bases connected by rectangular faces. Triangular prism, rectangular prism and cube all satisfy this rule.' },
          { label: 'b) Pyramids', correctAnswer: 'square pyramid, triangular pyramid', correctAnswers: ['square pyramid, triangular pyramid', 'triangular pyramid, square pyramid'], explanation: 'A pyramid has one base with triangular faces meeting at a single apex. Square pyramid and triangular pyramid both follow this rule.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho says objects with only flat faces are called polyhedra. Is he correct?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Objects with only flat faces (like a cube or pyramid) are polyhedra. Objects with a curved surface (like a sphere) are not.' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: sphere, cylinder, cone, cube?', answer: 'Cube — it is the only one with no curved surface at all, so it cannot roll. The other three all have a curved surface and can roll.', checkMode: 'self', explanation: 'Sphere, cylinder and cone all include a curved surface. A cube has only flat faces, which makes it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'Thabo picks up a dice and says, "This is just a cube with dots painted on it." What 3D object is a dice actually shaped like, and does Thabo\'s claim hold up?', answer: 'Yes, a dice is a cube.', checkMode: 'self', explanation: 'A dice has 6 equal square faces, 12 edges and 8 vertices — it is a cube, so Thabo is correct.' },
        { difficulty: 'Medium', question: 'Lerato has a toilet roll, a book and an orange. Match each item to its 3D object.', answer: 'Toilet roll — cylinder; Book — rectangular prism; Orange — sphere.', checkMode: 'self', explanation: 'A toilet roll is a cylinder (curved surface with 2 circular ends), a book is a rectangular prism, and an orange is a sphere.' },
        { difficulty: 'Medium', question: 'Name one real life example of each 3D object.\na) Cone\nb) Cube\nc) Cylinder', answer: 'Accept any valid real life examples.\na) Cone — e.g. an ice cream cone, a party hat, a traffic cone.\nb) Cube — e.g. a dice, an ice cube, a Rubik\'s cube.\nc) Cylinder — e.g. a can of food, a toilet roll, a battery.', checkMode: 'self', explanation: 'Accept any correct real life example that matches each 3D object.' },

        // Block 6 — Multi-Step Reasoning and Composite Solids (Hard)
        { difficulty: 'Hard', question: 'Sipho builds a tower using 1 cube and 1 square pyramid stacked on top of each other. The cube has 6 faces and the square pyramid has 5 faces.\na) How many faces do the two solids have in total before stacking?\nb) When stacked, one face of the cube and one face of the pyramid touch and are hidden. How many faces are visible on the outside?', answer: 'a) 11   b) 9', checkMode: 'auto', parts: [
          { label: 'a) Total faces before stacking', correctAnswer: '11', correctAnswers: ['11', 'eleven'], explanation: 'Cube (6) + square pyramid (5) = 11 faces in total.' },
          { label: 'b) Visible faces after stacking', correctAnswer: '9', correctAnswers: ['9', 'nine'], explanation: 'Subtract the 2 touching faces (1 from each solid) that are hidden: 11 − 2 = 9 visible faces.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can name, count, compare, sort and apply the properties of 3D objects with confidence.' },
        { minScore: 15, message: 'Great work! You understand naming, counting and comparing 3D objects well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the properties table and the sorting rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Naming from Properties (Easy)
        { difficulty: 'Easy', question: 'I am perfectly round with only one curved surface. I have no flat faces, no edges and no vertices. What 3D object am I?', answer: 'Sphere', checkMode: 'auto', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'One continuous curved surface with no flat faces, edges or vertices describes a sphere.' },
        { difficulty: 'Easy', question: 'A party hat has a flat circular base and one curved surface that narrows to a point at the top. Name this shape.', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A flat circular base with a curved surface tapering to a point describes a cone.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a solid made of 2 triangular faces and 3 rectangular faces is called a _______.', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'a triangular prism'], explanation: 'Two triangular bases joined by 3 rectangular faces describe a triangular prism.' },
        { difficulty: 'Easy', question: 'A solid has 5 vertices in total. Four of its faces are triangles and one face is a different shape. Which 3D object matches this description?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'A square pyramid has 5 vertices: 4 triangular faces plus 1 square base.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many vertices does a square pyramid have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A square pyramid has 5 vertices — 4 at the base corners and 1 at the apex.' },
        { difficulty: 'Easy', question: 'A cylinder has no sharp corners anywhere on it. Given that, how many vertices must it have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none', 'no vertices'], explanation: 'A cylinder has no sharp points, so it has 0 vertices.' },
        { difficulty: 'Easy', question: 'Complete the count: a triangular prism has ___ faces in total, counting its 2 triangular bases and 3 rectangular sides.', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'five'], explanation: 'A triangular prism has 5 faces — 2 triangular bases and 3 rectangular side faces.' },
        { difficulty: 'Easy', question: 'Explain why a sphere has 0 vertices, even though it looks like it could balance on a point.', answer: 'A vertex only forms where edges meet, and a sphere has no edges at all because it has no flat faces. Without any edges, there is nowhere for a vertex to form.', checkMode: 'self', explanation: 'Vertices need edges to meet at. Since a sphere is entirely curved with no edges, it has 0 vertices.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'How many more faces does a triangular prism have than a triangular pyramid?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A triangular prism has 5 faces and a triangular pyramid has 4 faces. 5 − 4 = 1 more face.' },
        { difficulty: 'Medium', question: 'Which object has more edges: a triangular prism or a square pyramid?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'the triangular prism'], explanation: 'A triangular prism has 9 edges and a square pyramid has 8 edges — the triangular prism has 1 more edge.' },
        { difficulty: 'Medium', question: 'Compare a cone and a cylinder. What do they have in common?', answer: 'Both have at least one flat circular face and one curved surface.', checkMode: 'self', explanation: 'A cone has 1 flat circular face and a cylinder has 2, but both objects include a flat circular face together with a curved surface.' },
        { difficulty: 'Medium', question: 'Without counting exactly, which do you expect has more edges: a triangular prism or a square pyramid? Explain your thinking.', answer: 'A triangular prism, because a prism has two full bases (each contributing edges) plus connecting edges, while a pyramid only has one base plus edges sloping up to a single apex — so the prism tends to have more edges overall.', checkMode: 'self', explanation: 'A triangular prism actually has 9 edges compared to a square pyramid\'s 8, matching the reasoning that two full bases usually add more edges than one base plus sloping edges to an apex.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'Sort these real life objects into can roll and cannot roll: a marble, a matchbox, a traffic cone, a book.', answer: 'Can roll: marble, traffic cone.   Cannot roll: matchbox, book.', checkMode: 'self', explanation: 'A marble (sphere) and traffic cone (cone) both have curved surfaces so they can roll. A matchbox and book (rectangular prisms) have only flat faces so they cannot roll.' },
        { difficulty: 'Medium', question: 'Sort these objects into polyhedron (only flat faces) and not a polyhedron (has a curved surface):\ncylinder, square pyramid, sphere, triangular prism, cone', answer: 'a) square pyramid, triangular prism   b) cylinder, sphere, cone', checkMode: 'auto', parts: [
          { label: 'a) Polyhedron', correctAnswer: 'square pyramid, triangular prism', correctAnswers: ['square pyramid, triangular prism', 'triangular prism, square pyramid'], explanation: 'A square pyramid and a triangular prism have only flat faces, so they are polyhedra.' },
          { label: 'b) Not a polyhedron', correctAnswer: 'cylinder, sphere, cone', correctAnswers: ['cylinder, sphere, cone', 'cylinder, cone, sphere', 'sphere, cylinder, cone', 'sphere, cone, cylinder', 'cone, cylinder, sphere', 'cone, sphere, cylinder'], explanation: 'A cylinder, sphere and cone all include a curved surface, so none of them are polyhedra.' },
        ] },
        { difficulty: 'Medium', question: 'Which of these objects can be stacked easily on top of each other: a sphere, a cube or a cone?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'A cube has flat faces that sit stably on top of each other, unlike a sphere (rolls away) or a cone (balances on a point).' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: cube, square pyramid, triangular prism, sphere?', answer: 'Sphere — it is the only one with no flat faces at all. The other three are polyhedra made entirely of flat faces.', checkMode: 'self', explanation: 'Cube, square pyramid and triangular prism are all polyhedra with only flat faces. A sphere has a curved surface instead, making it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'What 3D object is the Great Pyramid of Egypt shaped like?', answer: 'Square pyramid', checkMode: 'auto', correctAnswer: 'Square pyramid', correctAnswers: ['Square pyramid', 'square pyramid', 'a square pyramid'], explanation: 'The Great Pyramid has a square base with 4 triangular faces meeting at the top — a square pyramid.' },
        { difficulty: 'Medium', question: 'Sipho argues that because a square pyramid and a triangular pyramid are both "pyramids," they must have the same number of faces. Use the number of faces on each to show whether his reasoning is sound.', answer: 'His reasoning is not sound. A square pyramid has 5 faces (1 square + 4 triangles), while a triangular pyramid has only 4 faces (all triangles) — they are different because their base shapes are different.', checkMode: 'self', explanation: 'The number of faces on a pyramid depends on the number of sides of its base, so different base shapes give different numbers of faces.' },
        { difficulty: 'Medium', question: 'Name one real life example of each 3D object.\na) Sphere\nb) Rectangular prism\nc) Square pyramid', answer: 'Accept any valid real life examples.\na) Sphere — e.g. a ball, an orange, a marble.\nb) Rectangular prism — e.g. a cereal box, a book, a brick.\nc) Square pyramid — e.g. the Great Pyramid of Egypt, a crystal decoration, some roof shapes.', checkMode: 'self', explanation: 'Accept any correct real life example that matches each 3D object.' },

        // Block 6 — Multi-Step Reasoning and Composite Solids (Hard)
        { difficulty: 'Hard', question: 'A tent is built by combining a rectangular prism (the walls) with a triangular prism on top (the sloped roof).\na) What 2D shapes do the two ends of the triangular prism contribute to the outside of the tent?\nb) What 2D shapes does the rectangular prism part contribute?\nc) Explain why the whole tent shape is still a polyhedron.', answer: 'a) Triangles   b) Rectangles   c) It is made entirely of flat faces, since both a rectangular prism and a triangular prism are polyhedra with only flat faces.', checkMode: 'self', explanation: 'Combining two polyhedra keeps every face flat, since neither shape contributes any curved surface — so the combined tent shape is also a polyhedron.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can name, count, compare, sort and apply the properties of 3D objects with confidence.' },
        { minScore: 15, message: 'Great work! You understand naming, counting and comparing 3D objects well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the properties table and the sorting rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Naming from Properties (Easy)
        { difficulty: 'Easy', question: 'I have a triangular base and 3 more triangular faces that meet at a point at the top. What 3D object am I?', answer: 'Triangular pyramid', checkMode: 'auto', correctAnswer: 'Triangular pyramid', correctAnswers: ['Triangular pyramid', 'triangular pyramid', 'a triangular pyramid', 'tetrahedron', 'a tetrahedron'], explanation: 'All 4 faces are triangles, meeting at an apex — this describes a triangular pyramid (tetrahedron).' },
        { difficulty: 'Easy', question: 'A Rubik\'s cube has every face flat and square, and 8 sharp corners. What is this object called?', answer: 'Cube', checkMode: 'auto', correctAnswer: 'Cube', correctAnswers: ['Cube', 'cube', 'a cube'], explanation: 'A 3D object with all flat square faces and 8 vertices is a cube.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a solid with exactly 1 flat circular face, 1 curved surface, and a single sharp point at the top is a _______.', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'One flat circular base plus a curved surface tapering to a point describes a cone.' },
        { difficulty: 'Easy', question: 'A solid has 6 vertices in total. Two of its faces are triangles and the rest are rectangles. Which 3D object is this?', answer: 'Triangular prism', checkMode: 'auto', correctAnswer: 'Triangular prism', correctAnswers: ['Triangular prism', 'triangular prism', 'a triangular prism'], explanation: 'A triangular prism has 6 vertices: 2 triangular bases and 3 rectangular side faces.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many edges does a square pyramid have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'eight'], explanation: 'A square pyramid has 8 edges — 4 around the square base and 4 sloping up to the apex.' },
        { difficulty: 'Easy', question: 'A cone\'s only edge is where its flat base meets its curved surface. How many edges is that in total?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A cone has 1 edge — where the flat circular base meets the curved surface.' },
        { difficulty: 'Easy', question: 'Complete the count: a cylinder has ___ flat faces, plus 1 curved surface joining them.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A cylinder has 2 flat circular faces, plus 1 curved surface joining them.' },
        { difficulty: 'Easy', question: 'A sphere has 0 flat faces. Explain how this fact alone tells you it must also have 0 edges.', answer: 'An edge can only form where two flat faces meet. Since a sphere has 0 flat faces, there are no flat faces to meet each other, so it cannot have any edges either.', checkMode: 'self', explanation: 'Edges depend on flat faces meeting. With no flat faces at all, a sphere has no possible edges.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'Which 3D object has exactly 1 curved surface and only 1 flat face?', answer: 'Cone', checkMode: 'self', explanation: 'A cone has exactly 1 flat circular face and 1 curved surface — a cylinder has 2 flat faces and a sphere has 0.' },
        { difficulty: 'Medium', question: 'Compare a cube and a square pyramid. What do they have in common?', answer: 'Both have a square face.', checkMode: 'self', explanation: 'Every face of a cube is a square, and a square pyramid has one square base — so both objects include a square face.' },
        { difficulty: 'Medium', question: 'A 3D object has no flat faces and no edges. What is the only object it could be?', answer: 'Sphere', checkMode: 'auto', correctAnswer: 'Sphere', correctAnswers: ['Sphere', 'sphere', 'a sphere'], explanation: 'A sphere is the only common 3D object with absolutely no flat faces or edges — just one curved surface.' },
        { difficulty: 'Medium', question: 'Which has fewer faces: a triangular pyramid or a cone?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'the cone'], explanation: 'A cone has 2 faces (1 flat + 1 curved) and a triangular pyramid has 4 flat triangular faces, so the cone has fewer faces.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'A solid has 1 square face and 4 triangular faces. What 3D object is this, and how many edges does it have?', answer: 'Square pyramid, 8 edges', checkMode: 'self', explanation: '1 square base + 4 triangular sides meeting at an apex is a square pyramid, which has 8 edges — 4 around the base and 4 sloping up to the apex.' },
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll:\ncylinder, triangular pyramid, sphere, square pyramid, cone', answer: 'a) cylinder, sphere, cone   b) triangular pyramid, square pyramid', checkMode: 'auto', parts: [
          { label: 'a) Can roll', correctAnswer: 'cylinder, sphere, cone', correctAnswers: ['cylinder, sphere, cone', 'cylinder, cone, sphere', 'sphere, cylinder, cone', 'sphere, cone, cylinder', 'cone, cylinder, sphere', 'cone, sphere, cylinder'], explanation: 'Cylinder, sphere and cone all have a curved surface, which allows them to roll.' },
          { label: 'b) Cannot roll', correctAnswer: 'triangular pyramid, square pyramid', correctAnswers: ['triangular pyramid, square pyramid', 'square pyramid, triangular pyramid'], explanation: 'Triangular pyramid and square pyramid have only flat faces, so there is no curved surface to roll on.' },
        ] },
        { difficulty: 'Medium', question: 'Amahle says objects with only flat faces are called polyhedra, and a cylinder is an example of a polyhedron. Is she correct?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Objects with only flat faces are polyhedra, but a cylinder has a curved surface, so it is not a polyhedron.' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: rectangular prism, cylinder, cube, triangular prism?', answer: 'Cylinder — it is the only one with a curved surface and no straight edges meeting at vertices. The other three are polyhedra with only flat faces.', checkMode: 'self', explanation: 'Rectangular prism, cube and triangular prism are all polyhedra. A cylinder has curved surfaces, making it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'A funnel used to pour oil into a car engine is shaped like which 3D object?', answer: 'Cone', checkMode: 'auto', correctAnswer: 'Cone', correctAnswers: ['Cone', 'cone', 'a cone'], explanation: 'A funnel has a wide circular opening that narrows to a point — it is shaped like a cone.' },
        { difficulty: 'Medium', question: 'Amahle claims that every prism must have exactly 2 triangular faces. Use the rectangular prism as a counterexample to explain where her claim goes wrong.', answer: 'Her claim is wrong. Only a triangular prism has 2 triangular faces (its bases). A rectangular prism has rectangular bases, not triangular ones, so not all prisms have triangular faces.', checkMode: 'self', explanation: 'The shape of a prism\'s bases matches the name of the prism — a triangular prism has triangle bases, a rectangular prism has rectangle bases.' },
        { difficulty: 'Medium', question: 'Amahle has an ice cream cone, a dice and a soccer ball. Match each item to its 3D object.', answer: 'Ice cream cone — cone; Dice — cube; Soccer ball — sphere.', checkMode: 'self', explanation: 'An ice cream cone is a cone, a dice is a cube, and a soccer ball is a sphere.' },

        // Block 6 — Multi-Step Reasoning and Composite Solids (Hard)
        { difficulty: 'Hard', question: 'A rocket toy is built by combining a cylinder (the body) with a cone on top (the nose).\na) How many flat faces does the cylinder have on its own?\nb) How many flat faces does the cone have on its own?\nc) When the cone sits on top of the cylinder, one flat face from each solid touches and is hidden. How many flat faces are visible on the outside of the combined rocket shape?', answer: 'a) 2   b) 1   c) 1', checkMode: 'auto', parts: [
          { label: 'a) Flat faces of the cylinder', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A cylinder has 2 flat circular faces (plus 1 curved surface).' },
          { label: 'b) Flat faces of the cone', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A cone has 1 flat circular face (plus 1 curved surface).' },
          { label: 'c) Visible flat faces after combining', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'The cylinder\'s top face and the cone\'s base touch and are hidden where they join, leaving only the cylinder\'s bottom flat face visible: (2 + 1) − 2 = 1.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can name, count, compare, sort and apply the properties of 3D objects with confidence.' },
        { minScore: 15, message: 'Great work! You understand naming, counting and comparing 3D objects well — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over the properties table and the sorting rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
