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
      openQuestions: [],
      diagramPlaceholder:
        'Seven 3D objects labelled clearly — sphere, cube, rectangular prism, cone, cylinder, triangular pyramid, square pyramid — each with faces, edges and vertices labelled',
      diagramSvg:
        '<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="70" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 34 70 Q 60 82 86 70" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="60" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Sphere</text><text x="60" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:0</tspan> <tspan fill="#dc2626">E:0</tspan> <tspan fill="#16a34a">V:0</tspan></text><polygon points="160,50 200,50 200,90 160,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="160,50 200,50 216,34 176,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="200,50 200,90 216,74 216,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="180" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cube</text><text x="180" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:6</tspan> <tspan fill="#dc2626">E:12</tspan> <tspan fill="#16a34a">V:8</tspan></text><polygon points="270,55 330,55 330,85 270,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="270,55 330,55 346,39 286,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="330,55 330,85 346,69 346,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="300" y="118" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Rectangular prism</text><text x="300" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:6</tspan> <tspan fill="#dc2626">E:12</tspan> <tspan fill="#16a34a">V:8</tspan></text><ellipse cx="420" cy="90" rx="26" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="420" y1="44" x2="394" y2="90" stroke="#0f1f3d" stroke-width="2.5"/><line x1="420" y1="44" x2="446" y2="90" stroke="#0f1f3d" stroke-width="2.5"/><text x="420" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cone</text><text x="420" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:1</tspan> <tspan fill="#dc2626">E:1</tspan> <tspan fill="#16a34a">V:1</tspan></text><ellipse cx="100" cy="182" rx="28" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="100" cy="238" rx="28" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="72" y1="182" x2="72" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="128" y1="182" x2="128" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="258" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cylinder</text><text x="100" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:2</tspan> <tspan fill="#dc2626">E:2</tspan> <tspan fill="#16a34a">V:0</tspan></text><line x1="240" y1="168" x2="210" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="240" y1="168" x2="270" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="238" x2="270" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="240" y1="168" x2="240" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="240" y1="212" x2="210" y2="238" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="240" y1="212" x2="270" y2="238" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="240" y="258" font-size="9.5" font-weight="700" fill="#0f1f3d" text-anchor="middle">Triangular pyramid</text><text x="240" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:4</tspan> <tspan fill="#dc2626">E:6</tspan> <tspan fill="#16a34a">V:4</tspan></text><line x1="360" y1="238" x2="420" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="390" y1="164" x2="360" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="390" y1="164" x2="420" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="360" y1="238" x2="374" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="420" y1="238" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="374" y1="222" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="390" y1="164" x2="374" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="390" y1="164" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="390" y="258" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Square pyramid</text><text x="390" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">F:5</tspan> <tspan fill="#dc2626">E:8</tspan> <tspan fill="#16a34a">V:5</tspan></text></svg>',
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
      openQuestions: [],
      diagramPlaceholder:
        'Two columns — left column showing objects that can roll (sphere, cone, cylinder) with curved surfaces highlighted, right column showing objects that cannot roll (cube, rectangular prism, pyramids) with flat faces highlighted',
      diagramSvg:
        '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg"><line x1="240" y1="20" x2="240" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><text x="120" y="32" font-size="14" font-weight="700" fill="#16a34a" text-anchor="middle">Can roll ✓</text><text x="375" y="32" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">Cannot roll ✗</text><circle cx="55" cy="110" r="18" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 37 110 Q 55 118 73 110" fill="none" stroke="#16a34a" stroke-width="1.2"/><text x="55" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Sphere</text><ellipse cx="120" cy="128" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="120" y1="90" x2="102" y2="128" stroke="#16a34a" stroke-width="2.5"/><line x1="120" y1="90" x2="138" y2="128" stroke="#16a34a" stroke-width="2.5"/><text x="120" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Cone</text><ellipse cx="185" cy="95" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><ellipse cx="185" cy="125" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="167" y1="95" x2="167" y2="125" stroke="#16a34a" stroke-width="2.5"/><line x1="203" y1="95" x2="203" y2="125" stroke="#16a34a" stroke-width="2.5"/><text x="185" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Cylinder</text><text x="120" y="172" font-size="10" font-style="italic" fill="#16a34a" text-anchor="middle">has a curved surface</text><polygon points="290,95 320,95 320,125 290,125" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="290,95 320,95 330,85 300,85" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="320,95 320,125 330,115 330,85" fill="none" stroke="#dc2626" stroke-width="2"/><text x="305" y="150" font-size="10.5" fill="#7f1d1d" text-anchor="middle">Cube</text><polygon points="355,100 395,100 395,122 355,122" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="355,100 395,100 405,90 365,90" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="395,100 395,122 405,112 405,90" fill="none" stroke="#dc2626" stroke-width="2"/><text x="375" y="150" font-size="7.5" fill="#7f1d1d" text-anchor="middle">Rectangular prism</text><line x1="415" y1="128" x2="455" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="435" y1="85" x2="415" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="435" y1="85" x2="455" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="415" y1="128" x2="425" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="455" y1="128" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="425" y1="118" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="435" y1="85" x2="425" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="435" y1="85" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><text x="435" y="150" font-size="7.5" fill="#7f1d1d" text-anchor="middle">Square pyramid</text><text x="375" y="172" font-size="10" font-style="italic" fill="#dc2626" text-anchor="middle">only flat faces</text></svg>',
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
      openQuestions: [],
      diagramPlaceholder:
        'Six real life objects each labelled with their 3D object name — a dice (cube), a cereal box (rectangular prism), a ball (sphere), an ice cream cone (cone), a can (cylinder), an Egyptian pyramid (square pyramid)',
      diagramSvg:
        '<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><polygon points="60,50 100,50 100,90 60,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="60,50 100,50 116,34 76,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="100,50 100,90 116,74 116,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="68" cy="58" r="2.6" fill="#0f1f3d"/><circle cx="80" cy="70" r="2.6" fill="#0f1f3d"/><circle cx="92" cy="82" r="2.6" fill="#0f1f3d"/><text x="80" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Dice</text><text x="80" y="133" font-size="10" fill="#64748b" text-anchor="middle">(Cube)</text><polygon points="210,55 270,55 270,85 210,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="210,55 270,55 286,39 226,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="270,55 270,85 286,69 286,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="210" y1="68" x2="270" y2="68" stroke="#0f1f3d" stroke-width="1"/><text x="240" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cereal box</text><text x="240" y="133" font-size="9" fill="#64748b" text-anchor="middle">(Rectangular prism)</text><circle cx="400" cy="70" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 374 70 Q 400 82 426 70" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="400" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Ball</text><text x="400" y="133" font-size="10" fill="#64748b" text-anchor="middle">(Sphere)</text><ellipse cx="80" cy="172" rx="20" ry="7" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="172" x2="80" y2="222" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="172" x2="80" y2="222" stroke="#0f1f3d" stroke-width="2.5"/><text x="80" y="245" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Ice-cream cone</text><text x="80" y="259" font-size="10" fill="#64748b" text-anchor="middle">(Cone)</text><ellipse cx="240" cy="165" rx="26" ry="8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="240" cy="221" rx="26" ry="8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="165" x2="214" y2="221" stroke="#0f1f3d" stroke-width="2.5"/><line x1="266" y1="165" x2="266" y2="221" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="193" x2="266" y2="193" stroke="#0f1f3d" stroke-width="1"/><text x="240" y="245" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Can</text><text x="240" y="259" font-size="10" fill="#64748b" text-anchor="middle">(Cylinder)</text><line x1="375" y1="225" x2="425" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="400" y1="160" x2="375" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="400" y1="160" x2="425" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="375" y1="225" x2="388" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="425" y1="225" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="388" y1="212" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="400" y1="160" x2="388" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="400" y1="160" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="400" y="245" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Pyramid</text><text x="400" y="259" font-size="9" fill="#64748b" text-anchor="middle">(Square pyramid)</text></svg>',
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
        { difficulty: 'Easy', question: 'I have 6 flat square faces, 12 edges and 8 vertices. What 3D object am I?', checkMode: 'auto', options: ['Rectangular prism', 'Cube', 'Square pyramid', 'Triangular prism'], correctIndex: 1, explanation: 'Six equal square faces, 12 edges and 8 vertices describe a cube. A rectangular prism has the same edge and vertex count, but its faces are rectangles, not all squares.' },
        { difficulty: 'Easy', question: 'A can of soup has two flat circular ends joined by one curved surface, and no sharp corners anywhere. Name this 3D object.', checkMode: 'auto', options: ['Cone', 'Sphere', 'Cylinder', 'Cube'], correctIndex: 2, explanation: 'Two flat circular faces joined by one curved surface, with no vertices, describe a cylinder. A cone has only one flat circular face, and a sphere has no flat faces at all.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a square base with 4 triangular faces meeting at a single point above it is called a _______.', checkMode: 'auto', options: ['Triangular pyramid', 'Rectangular prism', 'Cube', 'Square pyramid'], correctIndex: 3, explanation: 'A square base with 4 triangular faces meeting at an apex describes a square pyramid. A triangular pyramid has a triangular base instead of a square one.' },
        { difficulty: 'Easy', question: 'A cereal box has 6 rectangular faces, 12 edges and 8 vertices, just like a cube — but its faces are not all squares. What object is it?', checkMode: 'auto', options: ['Rectangular prism', 'Cube', 'Triangular prism', 'Square pyramid'], correctIndex: 0, explanation: 'Six rectangular faces (not all squares), 12 edges and 8 vertices describe a rectangular prism. If all the faces were equal squares, it would be a cube instead.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many edges does a triangular prism have?', checkMode: 'auto', options: ['6', '9', '8', '12'], correctIndex: 1, explanation: 'A triangular prism has 9 edges — 3 on each triangular base (6 total) plus 3 edges connecting them. Counting only the two bases gives 6, which misses the 3 connecting edges.' },
        { difficulty: 'Easy', question: 'A cone comes to one sharp point at its tip. How many vertices does that give it in total?', checkMode: 'auto', options: ['0', '2', '1', '3'], correctIndex: 2, explanation: 'A cone has exactly 1 vertex — the sharp point (apex) at its tip. Saying 0 confuses a cone with a cylinder, which has no vertices at all.' },
        { difficulty: 'Easy', question: 'Complete the count: a cylinder has ___ edges, formed where its flat circular faces meet its curved surface.', checkMode: 'auto', options: ['0', '1', '4', '2'], correctIndex: 3, explanation: 'A cylinder has 2 edges — one where each flat circular face meets the curved surface. Saying 0 confuses it with a sphere, and saying 1 only counts one of the two circular ends.' },
        { difficulty: 'Easy', question: 'Which statement correctly explains why a sphere has 0 edges?', checkMode: 'auto', options: ['A sphere has 0 edges because an edge only forms where two flat faces meet, and a sphere has no flat faces at all.', 'A sphere has 0 edges because it is too small for edges to form.', 'A sphere has 0 edges because it has exactly 1 vertex, which uses up all its corners.', 'A sphere has 0 edges because its curved surface is actually made of many tiny flat faces that cancel out.'], correctIndex: 0, explanation: 'Edges are formed only where two flat faces meet. Since a sphere is entirely curved with no flat faces, there is nothing for an edge to form between.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'Which statement correctly explains what makes a cube different from other rectangular prisms?', checkMode: 'auto', options: ['A cube has curved faces, while other rectangular prisms have flat faces.', 'All of a cube\'s faces and edges are equal squares, while a general rectangular prism can have edges of different lengths.', 'A cube has 8 faces, while other rectangular prisms have 6 faces.', 'A cube has fewer vertices than other rectangular prisms.'], correctIndex: 1, explanation: 'A cube is a special rectangular prism whose faces are all equal squares and whose edges are all the same length, while a general rectangular prism can have edges of different lengths.' },
        { difficulty: 'Medium', question: 'How many more edges does a cube have than a triangular pyramid?', checkMode: 'auto', options: ['4', '12', '6', '3'], correctIndex: 2, explanation: 'A cube has 12 edges and a triangular pyramid has 6 edges. 12 − 6 = 6 more edges.' },
        { difficulty: 'Medium', question: 'Which object has more vertices: a square pyramid or a triangular pyramid?', checkMode: 'auto', options: ['Triangular pyramid', 'They have the same number of vertices', 'Neither has vertices', 'Square pyramid'], correctIndex: 3, explanation: 'A square pyramid has 5 vertices (4 base corners + 1 apex), while a triangular pyramid has only 4 vertices (3 base corners + 1 apex) — the square pyramid has more.' },
        { difficulty: 'Medium', question: 'Which pair of 3D objects both have a curved surface and no vertices at all?', checkMode: 'auto', options: ['Sphere and cylinder', 'Sphere and cone', 'Cylinder and cone', 'Cone and cube'], correctIndex: 0, explanation: 'A sphere has 0 vertices and a cylinder also has 0 vertices, because neither has a sharp point. A cone does have 1 vertex (its apex), so any pair including a cone is incorrect.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll:\nsphere, cube, cone, cylinder, rectangular prism, triangular pyramid', answer: 'a) sphere, cone, cylinder   b) cube, rectangular prism, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Can roll', correctAnswer: 'sphere, cone, cylinder', correctAnswers: ['sphere, cone, cylinder', 'sphere, cylinder, cone', 'cone, sphere, cylinder', 'cone, cylinder, sphere', 'cylinder, sphere, cone', 'cylinder, cone, sphere'], explanation: 'Sphere, cone and cylinder all have a curved surface, which allows them to roll.' },
          { label: 'b) Cannot roll', correctAnswer: 'cube, rectangular prism, triangular pyramid', correctAnswers: ['cube, rectangular prism, triangular pyramid', 'cube, triangular pyramid, rectangular prism', 'rectangular prism, cube, triangular pyramid', 'rectangular prism, triangular pyramid, cube', 'triangular pyramid, cube, rectangular prism', 'triangular pyramid, rectangular prism, cube'], explanation: 'Cube, rectangular prism and triangular pyramid have only flat faces — there is no curved surface to roll on.' },
        ] },
        { difficulty: 'Medium', question: 'Sort these into prisms and pyramids:\ntriangular prism, square pyramid, rectangular prism, triangular pyramid, cube', answer: 'a) triangular prism, rectangular prism, cube   b) square pyramid, triangular pyramid', checkMode: 'auto', parts: [
          { label: 'a) Prisms', correctAnswer: 'triangular prism, rectangular prism, cube', correctAnswers: ['triangular prism, rectangular prism, cube', 'triangular prism, cube, rectangular prism', 'rectangular prism, triangular prism, cube', 'rectangular prism, cube, triangular prism', 'cube, triangular prism, rectangular prism', 'cube, rectangular prism, triangular prism'], explanation: 'A prism has two identical parallel bases connected by rectangular faces. Triangular prism, rectangular prism and cube all satisfy this rule.' },
          { label: 'b) Pyramids', correctAnswer: 'square pyramid, triangular pyramid', correctAnswers: ['square pyramid, triangular pyramid', 'triangular pyramid, square pyramid'], explanation: 'A pyramid has one base with triangular faces meeting at a single apex. Square pyramid and triangular pyramid both follow this rule.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho says objects with only flat faces are called polyhedra. Which statement is correct?', checkMode: 'auto', options: ['He is incorrect — polyhedra are objects with at least one curved surface.', 'He is correct — objects with only flat faces, like a cube or pyramid, are called polyhedra.', 'He is incorrect — the word "polyhedra" only applies to prisms, not pyramids.', 'He is correct, but only for objects with exactly 6 faces.'], correctIndex: 1, explanation: 'Objects with only flat faces (like a cube or a pyramid) are polyhedra. Objects with a curved surface (like a sphere) are not.' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: sphere, cylinder, cone, cube?', checkMode: 'auto', options: ['Sphere — it is the only one that can roll.', 'Cylinder — it is the only one with two flat faces.', 'Cube — it is the only one with no curved surface at all, so it cannot roll.', 'Cone — it is the only one with a single vertex.'], correctIndex: 2, explanation: 'Sphere, cylinder and cone all include a curved surface and can roll. A cube has only flat faces, making it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'Thabo picks up a dice and says, "This is just a cube with dots painted on it." Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['He is incorrect — a dice is shaped like a rectangular prism, not a cube.', 'He is incorrect — a dice has curved corners, so it cannot be a cube.', 'He is correct, but only because the dots don\'t change the shape\'s edges.', 'He is correct — a dice has 6 equal square faces, 12 edges and 8 vertices, which are exactly the properties of a cube.'], correctIndex: 3, explanation: 'A dice has 6 equal square faces, 12 edges and 8 vertices — it is a cube, so Thabo is correct.' },
        { difficulty: 'Medium', question: 'Lerato has a toilet roll, a book and an orange. Which set of matches is correct?', checkMode: 'auto', options: ['Toilet roll — cylinder; Book — rectangular prism; Orange — sphere.', 'Toilet roll — cone; Book — cube; Orange — sphere.', 'Toilet roll — cylinder; Book — square pyramid; Orange — sphere.', 'Toilet roll — sphere; Book — rectangular prism; Orange — cylinder.'], correctIndex: 0, explanation: 'A toilet roll is a cylinder (curved surface with 2 circular ends), a book is a rectangular prism, and an orange is a sphere.' },
        { difficulty: 'Medium', question: 'Which set correctly gives one real-life example of each: a) Cone   b) Cube   c) Cylinder?', checkMode: 'auto', options: ['a) Ice cream cone   b) Can of food   c) Dice', 'a) Party hat   b) Dice   c) Toilet roll', 'a) Ball   b) Dice   c) Traffic cone', 'a) Party hat   b) Cereal box   c) Orange'], correctIndex: 1, explanation: 'A party hat is a cone, a dice is a cube, and a toilet roll is a cylinder. The distractors mismatch objects that belong to other 3D shapes (a ball and orange are spheres, and a cereal box is a rectangular prism).' },

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
        { difficulty: 'Easy', question: 'I am perfectly round with only one curved surface. I have no flat faces, no edges and no vertices. What 3D object am I?', checkMode: 'auto', options: ['Cylinder', 'Sphere', 'Cone', 'Cube'], correctIndex: 1, explanation: 'One continuous curved surface with no flat faces, edges or vertices describes a sphere. A cylinder has 2 flat faces and a cone has 1 flat face plus a vertex, so neither fits "no flat faces, no vertices."' },
        { difficulty: 'Easy', question: 'A party hat has a flat circular base and one curved surface that narrows to a point at the top. Name this shape.', checkMode: 'auto', options: ['Cylinder', 'Sphere', 'Cone', 'Square pyramid'], correctIndex: 2, explanation: 'A flat circular base with a curved surface tapering to a point describes a cone. A cylinder has two circular ends and no point, and a square pyramid has flat triangular faces instead of a curved surface.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a solid made of 2 triangular faces and 3 rectangular faces is called a _______.', checkMode: 'auto', options: ['Triangular pyramid', 'Rectangular prism', 'Square pyramid', 'Triangular prism'], correctIndex: 3, explanation: 'Two triangular bases joined by 3 rectangular faces describe a triangular prism. A triangular pyramid has 4 triangular faces and no rectangles at all.' },
        { difficulty: 'Easy', question: 'A solid has 5 vertices in total. Four of its faces are triangles and one face is a different shape. Which 3D object matches this description?', checkMode: 'auto', options: ['Square pyramid', 'Triangular pyramid', 'Triangular prism', 'Cube'], correctIndex: 0, explanation: 'A square pyramid has 5 vertices: 4 triangular faces plus 1 square base. A triangular pyramid has only 4 vertices since all 4 of its faces, including the base, are triangles.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many vertices does a square pyramid have?', checkMode: 'auto', options: ['4', '5', '8', '6'], correctIndex: 1, explanation: 'A square pyramid has 5 vertices — 4 at the base corners and 1 at the apex. Counting only the base corners (4) misses the apex.' },
        { difficulty: 'Easy', question: 'A cylinder has no sharp corners anywhere on it. Given that, how many vertices must it have?', checkMode: 'auto', options: ['2', '1', '0', '4'], correctIndex: 2, explanation: 'A cylinder has no sharp points, so it has 0 vertices. Saying 2 confuses vertices with the cylinder\'s 2 edges.' },
        { difficulty: 'Easy', question: 'Complete the count: a triangular prism has ___ faces in total, counting its 2 triangular bases and 3 rectangular sides.', checkMode: 'auto', options: ['3', '6', '9', '5'], correctIndex: 3, explanation: 'A triangular prism has 5 faces — 2 triangular bases and 3 rectangular side faces. Saying 9 confuses faces with the edge count, and 6 confuses it with a cube.' },
        { difficulty: 'Easy', question: 'Which statement correctly explains why a sphere has 0 vertices, even though it looks like it could balance on a point?', checkMode: 'auto', options: ['A vertex only forms where edges meet, and a sphere has no edges because it has no flat faces — so there is nowhere for a vertex to form.', 'A sphere has 0 vertices because it is always rolling and never stays still long enough to have a point.', 'A sphere actually does have 1 vertex, at whichever point is touching the ground.', 'A sphere has 0 vertices because it has exactly 1 curved edge instead.'], correctIndex: 0, explanation: 'Vertices need edges to meet at. Since a sphere is entirely curved with no edges, it has 0 vertices.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'How many more faces does a triangular prism have than a triangular pyramid?', checkMode: 'auto', options: ['0', '1', '2', '5'], correctIndex: 1, explanation: 'A triangular prism has 5 faces and a triangular pyramid has 4 faces. 5 − 4 = 1 more face.' },
        { difficulty: 'Medium', question: 'Which object has more edges: a triangular prism or a square pyramid?', checkMode: 'auto', options: ['Square pyramid', 'They have the same number of edges', 'Triangular prism', 'Neither has edges'], correctIndex: 2, explanation: 'A triangular prism has 9 edges and a square pyramid has 8 edges — the triangular prism has 1 more edge.' },
        { difficulty: 'Medium', question: 'Which statement correctly compares what a cone and a cylinder have in common?', checkMode: 'auto', options: ['Both have exactly 2 flat circular faces.', 'Both have exactly 1 vertex.', 'Neither has a curved surface.', 'Both have at least one flat circular face and one curved surface.'], correctIndex: 3, explanation: 'A cone has 1 flat circular face and a cylinder has 2, but both objects include a flat circular face together with a curved surface.' },
        { difficulty: 'Medium', question: 'Which reasoning correctly predicts that a triangular prism has more edges than a square pyramid, before counting exactly?', checkMode: 'auto', options: ['A triangular prism has two full bases (each contributing edges) plus connecting edges, while a pyramid has only one base plus edges sloping up to a single apex — so the prism tends to have more edges.', 'A triangular prism has fewer faces than a square pyramid, so it must have fewer edges too.', 'A square pyramid has a curved surface, which always adds more edges than flat prism faces.', 'Both solids always have exactly the same number of edges as their number of faces.'], correctIndex: 0, explanation: 'A triangular prism actually has 9 edges compared to a square pyramid\'s 8, matching the reasoning that two full bases usually add more edges than one base plus sloping edges to an apex.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'Which grouping correctly sorts these real-life objects into can roll and cannot roll: a marble, a matchbox, a traffic cone, a book?', checkMode: 'auto', options: ['Can roll: matchbox, book.   Cannot roll: marble, traffic cone.', 'Can roll: marble, traffic cone.   Cannot roll: matchbox, book.', 'Can roll: marble, matchbox, traffic cone, book (all of them).', 'Cannot roll: marble, matchbox, traffic cone, book (none of them).'], correctIndex: 1, explanation: 'A marble (sphere) and traffic cone (cone) both have curved surfaces so they can roll. A matchbox and book (rectangular prisms) have only flat faces so they cannot roll.' },
        { difficulty: 'Medium', question: 'Sort these objects into polyhedron (only flat faces) and not a polyhedron (has a curved surface):\ncylinder, square pyramid, sphere, triangular prism, cone', answer: 'a) square pyramid, triangular prism   b) cylinder, sphere, cone', checkMode: 'auto', parts: [
          { label: 'a) Polyhedron', correctAnswer: 'square pyramid, triangular prism', correctAnswers: ['square pyramid, triangular prism', 'triangular prism, square pyramid'], explanation: 'A square pyramid and a triangular prism have only flat faces, so they are polyhedra.' },
          { label: 'b) Not a polyhedron', correctAnswer: 'cylinder, sphere, cone', correctAnswers: ['cylinder, sphere, cone', 'cylinder, cone, sphere', 'sphere, cylinder, cone', 'sphere, cone, cylinder', 'cone, cylinder, sphere', 'cone, sphere, cylinder'], explanation: 'A cylinder, sphere and cone all include a curved surface, so none of them are polyhedra.' },
        ] },
        { difficulty: 'Medium', question: 'Which of these objects can be stacked easily on top of each other: a sphere, a cube or a cone?', checkMode: 'auto', options: ['Sphere', 'Cone', 'Cube', 'Both the sphere and the cone'], correctIndex: 2, explanation: 'A cube has flat faces that sit stably on top of each other, unlike a sphere (rolls away) or a cone (balances on a point).' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: cube, square pyramid, triangular prism, sphere?', checkMode: 'auto', options: ['Cube — it is the only one with square faces.', 'Square pyramid — it is the only one with a triangular face.', 'Triangular prism — it is the only one that can be stacked.', 'Sphere — it is the only one with no flat faces at all.'], correctIndex: 3, explanation: 'Cube, square pyramid and triangular prism are all polyhedra with only flat faces. A sphere has a curved surface instead, making it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'What 3D object is the Great Pyramid of Egypt shaped like?', checkMode: 'auto', options: ['Square pyramid', 'Triangular pyramid', 'Cone', 'Rectangular prism'], correctIndex: 0, explanation: 'The Great Pyramid has a square base with 4 triangular faces meeting at the top — a square pyramid.' },
        { difficulty: 'Medium', question: 'Sipho argues that because a square pyramid and a triangular pyramid are both "pyramids," they must have the same number of faces. Which statement correctly evaluates his reasoning?', checkMode: 'auto', options: ['His reasoning is sound — both pyramids have 5 faces since they are the same category of shape.', 'His reasoning is not sound — a square pyramid has 5 faces (1 square + 4 triangles), while a triangular pyramid has only 4 faces (all triangles), because their base shapes are different.', 'His reasoning is not sound — pyramids never have a fixed number of faces at all.', 'His reasoning is sound, because "pyramid" always means exactly 4 triangular faces.'], correctIndex: 1, explanation: 'The number of faces on a pyramid depends on the number of sides of its base, so different base shapes give different numbers of faces.' },
        { difficulty: 'Medium', question: 'Which set correctly gives one real-life example of each: a) Sphere   b) Rectangular prism   c) Square pyramid?', checkMode: 'auto', options: ['a) Cereal box   b) Ball   c) Party hat', 'a) Marble   b) Great Pyramid of Egypt   c) Book', 'a) Orange   b) Cereal box   c) Great Pyramid of Egypt', 'a) Dice   b) Toilet roll   c) Traffic cone'], correctIndex: 2, explanation: 'An orange is a sphere, a cereal box is a rectangular prism, and the Great Pyramid of Egypt is a square pyramid. The distractors mismatch each example with the wrong 3D object.' },

        // Block 6 — Multi-Step Reasoning and Composite Solids (Hard)
        { difficulty: 'Hard', question: 'A tent is built by combining a rectangular prism (the walls) with a triangular prism on top (the sloped roof). Which statement correctly describes the shapes involved and why the tent is still a polyhedron?', checkMode: 'auto', options: ['The triangular prism ends contribute rectangles, the rectangular prism contributes triangles, and the tent is a polyhedron because it has a curved roof.', 'The triangular prism ends contribute circles, the rectangular prism contributes rectangles, and the tent is not a polyhedron.', 'The triangular prism ends contribute triangles, the rectangular prism contributes circles, and the tent is a polyhedron because circles count as flat faces.', 'The triangular prism ends contribute triangles, the rectangular prism contributes rectangles, and the tent is a polyhedron because both solids are made entirely of flat faces.'], correctIndex: 3, explanation: 'Combining two polyhedra keeps every face flat, since neither shape contributes any curved surface — so the combined tent shape is also a polyhedron.' },
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
        { difficulty: 'Easy', question: 'I have a triangular base and 3 more triangular faces that meet at a point at the top. What 3D object am I?', checkMode: 'auto', options: ['Square pyramid', 'Triangular pyramid', 'Triangular prism', 'Cone'], correctIndex: 1, explanation: 'All 4 faces are triangles meeting at an apex — this describes a triangular pyramid (tetrahedron). A square pyramid has 1 square face among its 5, and a triangular prism has 2 triangular faces plus 3 rectangles.' },
        { difficulty: 'Easy', question: 'A Rubik\'s cube has every face flat and square, and 8 sharp corners. What is this object called?', checkMode: 'auto', options: ['Square pyramid', 'Rectangular prism', 'Cube', 'Triangular prism'], correctIndex: 2, explanation: 'A 3D object with all flat square faces and 8 vertices is a cube. A rectangular prism also has 8 vertices, but its faces are rectangles, not all squares.' },
        { difficulty: 'Easy', question: 'Fill in the blank: a solid with exactly 1 flat circular face, 1 curved surface, and a single sharp point at the top is a _______.', checkMode: 'auto', options: ['Cylinder', 'Sphere', 'Square pyramid', 'Cone'], correctIndex: 3, explanation: 'One flat circular base plus a curved surface tapering to a point describes a cone. A cylinder has 2 flat circular faces and no point, so it does not match.' },
        { difficulty: 'Easy', question: 'A solid has 6 vertices in total. Two of its faces are triangles and the rest are rectangles. Which 3D object is this?', checkMode: 'auto', options: ['Triangular prism', 'Triangular pyramid', 'Square pyramid', 'Rectangular prism'], correctIndex: 0, explanation: 'A triangular prism has 6 vertices: 2 triangular bases and 3 rectangular side faces. A triangular pyramid has only 4 vertices since all its faces meet at a single apex.' },

        // Block 2 — Counting Faces, Edges, Vertices (Easy)
        { difficulty: 'Easy', question: 'How many edges does a square pyramid have?', checkMode: 'auto', options: ['5', '8', '4', '10'], correctIndex: 1, explanation: 'A square pyramid has 8 edges — 4 around the square base and 4 sloping up to the apex. Counting only the base edges (4) misses the sloping ones.' },
        { difficulty: 'Easy', question: 'A cone\'s only edge is where its flat base meets its curved surface. How many edges is that in total?', checkMode: 'auto', options: ['0', '2', '1', '3'], correctIndex: 2, explanation: 'A cone has 1 edge — where the flat circular base meets the curved surface. Saying 0 confuses a cone with a sphere.' },
        { difficulty: 'Easy', question: 'Complete the count: a cylinder has ___ flat faces, plus 1 curved surface joining them.', checkMode: 'auto', options: ['0', '1', '3', '2'], correctIndex: 3, explanation: 'A cylinder has 2 flat circular faces, plus 1 curved surface joining them. Saying 0 confuses it with a sphere, and saying 1 only counts one end.' },
        { difficulty: 'Easy', question: 'A sphere has 0 flat faces. Which statement correctly explains why this fact alone tells you it must also have 0 edges?', checkMode: 'auto', options: ['An edge can only form where two flat faces meet. Since a sphere has 0 flat faces, there are no flat faces to meet each other, so it can have no edges either.', 'A sphere has 0 edges because it has exactly 1 vertex, which uses up all the possible corners.', 'A sphere has 0 edges because edges only form on cube-shaped solids.', 'This fact does not tell you anything about the number of edges — you must count them separately.'], correctIndex: 0, explanation: 'Edges depend on flat faces meeting. With no flat faces at all, a sphere has no possible edges.' },

        // Block 3 — Comparing and Contrasting Objects (Medium)
        { difficulty: 'Medium', question: 'Which 3D object has exactly 1 curved surface and only 1 flat face?', checkMode: 'auto', options: ['Cylinder', 'Cone', 'Sphere', 'Square pyramid'], correctIndex: 1, explanation: 'A cone has exactly 1 flat circular face and 1 curved surface — a cylinder has 2 flat faces and a sphere has 0.' },
        { difficulty: 'Medium', question: 'Which statement correctly describes what a cube and a square pyramid have in common?', checkMode: 'auto', options: ['Both have exactly 8 vertices.', 'Both have a curved surface.', 'Both have a square face.', 'Both have the same number of edges.'], correctIndex: 2, explanation: 'Every face of a cube is a square, and a square pyramid has one square base — so both objects include a square face.' },
        { difficulty: 'Medium', question: 'A 3D object has no flat faces and no edges. What is the only object it could be?', checkMode: 'auto', options: ['Cylinder', 'Cone', 'Cube', 'Sphere'], correctIndex: 3, explanation: 'A sphere is the only common 3D object with absolutely no flat faces or edges — just one curved surface. A cylinder still has 2 flat faces and 2 edges.' },
        { difficulty: 'Medium', question: 'Which has fewer faces: a triangular pyramid or a cone?', checkMode: 'auto', options: ['Cone', 'Triangular pyramid', 'They have the same number of faces', 'Neither has faces'], correctIndex: 0, explanation: 'A cone has 2 faces (1 flat + 1 curved) and a triangular pyramid has 4 flat triangular faces, so the cone has fewer faces.' },

        // Block 4 — Sorting and Classifying (Medium)
        { difficulty: 'Medium', question: 'A solid has 1 square face and 4 triangular faces. Which statement correctly names this 3D object and its number of edges?', checkMode: 'auto', options: ['Triangular pyramid, with 6 edges', 'Square pyramid, with 8 edges', 'Square pyramid, with 6 edges', 'Rectangular prism, with 8 edges'], correctIndex: 1, explanation: '1 square base + 4 triangular sides meeting at an apex is a square pyramid, which has 8 edges — 4 around the base and 4 sloping up to the apex.' },
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll:\ncylinder, triangular pyramid, sphere, square pyramid, cone', answer: 'a) cylinder, sphere, cone   b) triangular pyramid, square pyramid', checkMode: 'auto', parts: [
          { label: 'a) Can roll', correctAnswer: 'cylinder, sphere, cone', correctAnswers: ['cylinder, sphere, cone', 'cylinder, cone, sphere', 'sphere, cylinder, cone', 'sphere, cone, cylinder', 'cone, cylinder, sphere', 'cone, sphere, cylinder'], explanation: 'Cylinder, sphere and cone all have a curved surface, which allows them to roll.' },
          { label: 'b) Cannot roll', correctAnswer: 'triangular pyramid, square pyramid', correctAnswers: ['triangular pyramid, square pyramid', 'square pyramid, triangular pyramid'], explanation: 'Triangular pyramid and square pyramid have only flat faces, so there is no curved surface to roll on.' },
        ] },
        { difficulty: 'Medium', question: 'Amahle says objects with only flat faces are called polyhedra, and a cylinder is an example of a polyhedron. Which statement is correct?', checkMode: 'auto', options: ['Yes — a cylinder has flat circular ends, so it counts as a polyhedron.', 'Yes, because polyhedra can include one curved surface as long as there are also flat faces.', 'No — objects with only flat faces are polyhedra, but a cylinder has a curved surface, so it is not a polyhedron.', 'No, because a cylinder has too few vertices to be a polyhedron.'], correctIndex: 2, explanation: 'Objects with only flat faces are polyhedra, but a cylinder has a curved surface, so it is not a polyhedron.' },
        { difficulty: 'Medium', question: 'Which does not belong, and why: rectangular prism, cylinder, cube, triangular prism?', checkMode: 'auto', options: ['Rectangular prism — it is the only one with 12 edges.', 'Cube — it is the only one with equal edges.', 'Triangular prism — it is the only one with triangular faces.', 'Cylinder — it is the only one with a curved surface and no straight edges meeting at vertices.'], correctIndex: 3, explanation: 'Rectangular prism, cube and triangular prism are all polyhedra with only flat faces. A cylinder has curved surfaces, making it the odd one out.' },

        // Block 5 — Real-World Application and Error-Spotting (Medium-Hard)
        { difficulty: 'Medium', question: 'A funnel used to pour oil into a car engine is shaped like which 3D object?', checkMode: 'auto', options: ['Cone', 'Cylinder', 'Square pyramid', 'Sphere'], correctIndex: 0, explanation: 'A funnel has a wide circular opening that narrows to a point — it is shaped like a cone.' },
        { difficulty: 'Medium', question: 'Amahle claims that every prism must have exactly 2 triangular faces. Which statement correctly uses the rectangular prism as a counterexample?', checkMode: 'auto', options: ['Her claim is correct — every prism, including a rectangular prism, has 2 triangular faces hidden inside it.', 'Her claim is wrong — only a triangular prism has 2 triangular faces (its bases); a rectangular prism has rectangular bases instead.', 'Her claim is wrong, because prisms never have any triangular faces at all.', 'Her claim is correct for pyramids but not for prisms.'], correctIndex: 1, explanation: 'The shape of a prism\'s bases matches the name of the prism — a triangular prism has triangle bases, a rectangular prism has rectangle bases.' },
        { difficulty: 'Medium', question: 'Amahle has an ice cream cone, a dice and a soccer ball. Which set of matches is correct?', checkMode: 'auto', options: ['Ice cream cone — cylinder; Dice — cube; Soccer ball — sphere.', 'Ice cream cone — cone; Dice — square pyramid; Soccer ball — sphere.', 'Ice cream cone — cone; Dice — cube; Soccer ball — sphere.', 'Ice cream cone — cone; Dice — cube; Soccer ball — cylinder.'], correctIndex: 2, explanation: 'An ice cream cone is a cone, a dice is a cube, and a soccer ball is a sphere.' },

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
