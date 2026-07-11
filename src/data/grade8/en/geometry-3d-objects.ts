import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry-3d-objects roles) ──────────────────────────────
// faces / base shape          → blue   (#2563eb)
// vertices / triangular faces → orange (#ea580c)
// edges / apex                → green  (#16a34a)
// formula                     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 3D Objects',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE 5 PLATONIC SOLIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids',
      title: 'The 5 Platonic Solids',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>Platonic solid</strong> is a 3D shape where every face is the same regular polygon and the same number of faces meet at every vertex. There are exactly <strong>5 Platonic solids</strong>. We compare them by the shape and number of ${bl('faces')}, ${or('vertices')} and ${gr('edges')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertices')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('edges')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 5 Platonic solids</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Solid</th>` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Face shape</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Faces</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Vertices</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Edges</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#374151;">Per vertex</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Tetrahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Cube</td><td style="padding:10px 12px;color:#374151;">Square</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Octahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">4</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodecahedron</td><td style="padding:10px 12px;color:#374151;">Pentagon</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Icosahedron</td><td style="padding:10px 12px;color:#374151;">Triangle</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">5</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why exactly 5?</p>` +
        `<p style="margin:0;color:#1e3a8a;">It has been proved mathematically that only <strong>5</strong> Platonic solids exist. You can verify each one using ${re("Euler's formula")}: ${bl('F')} + ${or('V')} − ${gr('E')} = 2 — it works for all of them.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the cube as a Platonic solid.',
          answer: `A cube has ${bl('6')} square ${bl('faces')}, ${or('8 vertices')} and ${gr('12 edges')}, with 3 ${bl('faces')} meeting at every ${or('vertex')}.`,
          steps: [
            `<strong>Check the faces:</strong> A cube has ${bl('6 faces')}, and every face is a square — the same regular polygon. All 6 faces are identical. ✓`,
            `<strong>Check the vertices:</strong> A cube has ${or('8 vertices')}. At each vertex, exactly 3 square faces meet — the same number at every vertex. ✓`,
            `<strong>Count the edges:</strong> A cube has ${gr('12 edges')}. ✓`,
            `<strong>Conclusion:</strong> A cube has ${bl('6')} square ${bl('faces')}, ${or('8 vertices')} and ${gr('12 edges')}, with 3 ${bl('faces')} meeting at every ${or('vertex')}. See the diagram below showing all 5 Platonic solids.`,
          ],
        },
        {
          question: 'Sipho says an octahedron has the same number of faces as a cube. Is he correct?',
          answer: `No — an octahedron has ${bl('8')} triangular ${bl('faces')}, while a cube has ${bl('6')} square ${bl('faces')}.`,
          steps: [
            `<strong>Count the faces of a cube:</strong> A cube has ${bl('6')} square ${bl('faces')}.`,
            `<strong>Count the faces of an octahedron:</strong> An octahedron has ${bl('8')} triangular ${bl('faces')}.`,
            `<strong>Conclusion:</strong> Sipho is <strong>incorrect</strong> — 8 ≠ 6. An octahedron has more ${bl('faces')} than a cube, and its face shape (triangle) also differs from a cube's face shape (square).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'How many faces does a cube have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A cube has 6 square faces. It is one of the 5 Platonic solids.',
        },
        {
          difficulty: 'Easy',
          question: 'Name the Platonic solid with 4 triangular faces.',
          answer: 'tetrahedron',
          checkMode: 'auto',
          correctAnswer: 'tetrahedron',
          explanation: 'The tetrahedron has 4 triangular faces, 4 vertices and 6 edges.',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho says a dodecahedron has 12 triangular faces. Is he correct? Explain.',
          answer: 'No — a dodecahedron has 12 pentagonal faces, not triangular.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'How many faces does an icosahedron have?',
          answer: '20',
          checkMode: 'auto',
          correctAnswer: '20',
          explanation: 'An icosahedron has 20 triangular faces, 12 vertices and 30 edges.',
        },
        {
          difficulty: 'Hard',
          question: "Verify Euler's formula for a tetrahedron, which has 4 faces, 4 vertices and 6 edges.",
          answer: 'F+V-E=4+4-6=2. Verified.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the 5 Platonic solids — tetrahedron, cube, octahedron, dodecahedron and icosahedron — comparing faces, vertices and edges" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: all 5 Platonic solids shown together — tetrahedron, cube, octahedron, dodecahedron, icosahedron — each labelled with face shape and count" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS USING NETS, INCLUDING PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-nets',
      title: 'Building 3D Models Using Nets, Including Pyramids',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We revise using nets to create models of cubes and prisms, and extend this to building pyramids from their nets. A pyramid's net consists of one ${bl('base shape')} (the polygon at the bottom) and ${or('triangular faces')} that fold up to meet at the ${gr('apex')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base shape')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('triangular faces')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('apex')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Net</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A flat shape that folds up to form a 3D object — like the unfolded surface of a box.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Base</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('base shape')} of a pyramid — the polygon at the bottom. It gives the pyramid its name.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('apex')} is the top point of a pyramid where all the ${or('triangular faces')} meet.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of pyramid nets</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Square pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 square base')} + ${or('4 triangular faces')} = 5 faces total. The net has the ${bl('square')} in the centre with an ${or('triangle')} on each side.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Triangular pyramid (tetrahedron)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 triangular base')} + ${or('3 triangular faces')} = 4 faces total. The net has the base triangle with a triangle on each of its 3 sides.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Folding tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">When checking a net, imagine folding each face. The ${bl('base')} stays flat; each ${or('triangular face')} folds upward until all the free edges meet at the ${gr('apex')}. Every free edge must match another free edge in length.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the net of a square pyramid.',
          answer: `The net has ${bl('1 square base')} in the centre with ${or('4 triangles')} attached to each side, folding up to meet at the ${gr('apex')}.`,
          steps: [
            `<strong>Identify the base:</strong> A square pyramid has a ${bl('square base')}. In the net, this ${bl('square')} appears in the centre.`,
            `<strong>Identify the triangular faces:</strong> There are ${or('4 triangular faces')} — one attached to each side of the ${bl('square base')}.`,
            `<strong>Describe the folding:</strong> When you fold the net, the ${or('4 triangles')} rise up and their free edges meet at the ${gr('apex')} above the ${bl('square base')}.`,
            `<strong>Conclusion:</strong> The net has ${bl('1 square base')} in the centre with ${or('4 triangles')} attached to each side, folding up to meet at the ${gr('apex')}. See the diagram below showing this net unfolded and folded.`,
          ],
        },
        {
          question: "Lerato builds a triangular pyramid (tetrahedron) from its net. Describe the net shape.",
          answer: `The net consists of ${or('4 equilateral triangles')} — ${bl('one base triangle')} with ${or('3 triangles')} attached to each side, folding up to form the tetrahedron.`,
          steps: [
            `<strong>Identify the faces:</strong> A tetrahedron has 4 triangular faces in total — ${bl('1 base triangle')} and ${or('3 triangular sides')}.`,
            `<strong>Describe the net layout:</strong> In the flat net, ${bl('one equilateral triangle')} acts as the base, with ${or('3 equilateral triangles')} attached to each of its 3 sides.`,
            `<strong>Describe the folding:</strong> The ${or('3 outer triangles')} fold upward to meet at the ${gr('apex')}, forming the tetrahedron.`,
            `<strong>Conclusion:</strong> The net consists of ${or('4 equilateral triangles')}: ${bl('one base triangle')} with ${or('3 triangles')} attached to each side, folding up to form the tetrahedron.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Describe the base shape used in the net of a square pyramid.',
          answer: 'square',
          checkMode: 'auto',
          correctAnswer: 'square',
          explanation: 'A square pyramid has a square base. The net contains one square in the centre with 4 triangles attached to its sides.',
        },
        {
          difficulty: 'Medium',
          question: 'How many triangular faces are in the net of a square pyramid (excluding the base)?',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'A square pyramid has 4 triangular faces (one on each side of the square base). The base itself is a square, not a triangle.',
        },
        {
          difficulty: 'Hard',
          question: "Lerato says a tetrahedron's net has only triangles. Is she correct? Explain.",
          answer: 'Yes — a tetrahedron is made entirely of 4 equilateral triangles, including its base.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to fold nets into pyramids — including the square pyramid and tetrahedron — identifying base shape, triangular faces and apex" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: net of a square pyramid shown flat and folded; net of a tetrahedron shown flat and folded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Comparing and Classifying 3D Objects by Properties',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">We compare and classify 3D objects — including the 5 Platonic solids and other shapes like prisms and pyramids — by examining the shape and number of ${bl('faces')}, ${or('vertices')} and ${gr('edges')}, and verifying ${re("Euler's formula")} (${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}) for these solids.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vertices')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('edges')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('formula')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler's formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Euler's formula</p>` +
        `<p style="font-size:1.4em;font-weight:700;color:#374151;margin:0;">${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Holds for all convex polyhedra</p>` +
        `<p style="font-size:1em;font-weight:600;color:#374151;margin:0;">${bl('Faces')} + ${or('Vertices')} − ${gr('Edges')} always = ${re('2')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing 3D objects</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Shape</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Faces</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Vertices</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Edges</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#dc2626;">F+V−E</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Square pyramid</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Triangular prism</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">9</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Cube</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodecahedron</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always verify with Euler's formula</p>` +
        `<p style="margin:0;color:#991b1b;">After identifying ${bl('F')}, ${or('V')} and ${gr('E')} for any convex polyhedron, substitute into ${re("Euler's formula")}: ${bl('F')} + ${or('V')} − ${gr('E')} = ${re('2')}. If your answer is not 2, recount your faces, vertices and edges.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Verify Euler's formula for a dodecahedron, which has 12 faces, 20 vertices and 30 edges.",
          answer: `${re('F+V−E')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. Euler's formula is verified.`,
          steps: [
            `<strong>Identify the values:</strong> ${bl('F')} = ${bl('12')}, ${or('V')} = ${or('20')}, ${gr('E')} = ${gr('30')}.`,
            `<strong>Apply Euler's formula:</strong> ${re('F + V − E')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. ✓`,
            `<strong>Conclusion:</strong> The result is ${re('2')}, so Euler's formula is verified for the dodecahedron.`,
          ],
        },
        {
          question: 'Thabo compares a tetrahedron and a square pyramid. Both have an apex, but how do they differ?',
          answer: `A tetrahedron has ${bl('4')} triangular ${bl('faces')} total (including base), while a square pyramid has ${bl('1')} square base and ${bl('4')} triangular sides, totalling ${bl('5 faces')}.`,
          steps: [
            `<strong>Tetrahedron:</strong> A tetrahedron has ${bl('4 faces')} in total — all are equilateral triangles, including the base. It has ${or('4 vertices')} and ${gr('6 edges')}.`,
            `<strong>Square pyramid:</strong> A square pyramid has ${bl('5 faces')} — ${bl('1 square base')} and ${bl('4 triangular sides')}. It has ${or('5 vertices')} and ${gr('8 edges')}.`,
            `<strong>Key difference:</strong> They differ in base shape (triangle vs square) and total face count (4 vs 5). Both have an ${gr('apex')}, but the tetrahedron's base is also a triangle while the square pyramid's base is a square.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'How many vertices does an octahedron have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'An octahedron has 8 faces, 6 vertices and 12 edges. Check: F+V-E = 8+6-12 = 2 ✓',
        },
        {
          difficulty: 'Hard',
          question: "Verify Euler's formula for an octahedron, which has 8 faces, 6 vertices and 12 edges.",
          answer: 'F+V-E=8+6-12=2. Verified.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'Name the Platonic solid with 8 triangular faces.',
          answer: 'octahedron',
          checkMode: 'auto',
          correctAnswer: 'octahedron',
          explanation: 'The octahedron has 8 triangular faces, 6 vertices and 12 edges.',
        },
        {
          difficulty: 'Medium',
          question: 'Thabo says a cube and a square pyramid have the same number of faces. Is he correct? Explain.',
          answer: 'No — a cube has 6 faces, while a square pyramid has 5 faces.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "A dodecahedron has 12 faces and 30 edges. Use Euler's formula to find the number of vertices.",
          answer: 'F+V-E=2. 12+V-30=2. V=20.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle says all 5 Platonic solids have triangular faces. Is she correct? Explain.',
          answer: 'No — the cube has square faces and the dodecahedron has pentagonal faces; only the tetrahedron, octahedron and icosahedron have triangular faces.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "An icosahedron has 20 faces and 12 vertices. Use Euler's formula to find the number of edges.",
          answer: '30',
          checkMode: 'auto',
          correctAnswer: '30',
          explanation: "F+V-E=2 → 20+12-E=2 → 32-E=2 → E=30. An icosahedron has 30 edges.",
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to compare and classify 3D objects using faces, vertices and edges, and how to verify Euler\'s formula" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: comparison table showing faces, vertices and edges for Platonic solids and other 3D shapes, with Euler\'s formula verified for each" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 Naming/classifying (prism/pyramid/cylinder/cone/sphere) |
    // 4-7 Counting V/E/F of named polyhedra | 8-11 Euler's formula (incl. curved solids) |
    // 12-15 Nets (12,14 diagram-flagged) | 16-18 Cross-sections | 19-20 Multi-step comparison
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid has one flat circular base, one curved surface that tapers to a single point, and no other flat faces. What is this solid called?', answer: 'cone', checkMode: 'auto', correctAnswer: 'cone', correctAnswers: ['cone', 'a cone'], explanation: 'A solid with one circular base and a curved surface tapering to a single apex is a cone ✓' },
        { difficulty: 'Easy', question: 'A solid has two identical, parallel circular bases joined by one curved surface. What is this solid called?', answer: 'cylinder', checkMode: 'auto', correctAnswer: 'cylinder', correctAnswers: ['cylinder', 'a cylinder'], explanation: 'A solid with two parallel identical circular bases joined by a curved surface is a cylinder ✓' },
        { difficulty: 'Medium', question: 'Zanele is classifying three solids for a project. Solid A has 2 parallel pentagonal bases and rectangular lateral faces. Solid B has 1 pentagonal base and triangular lateral faces meeting at an apex. Solid C is perfectly round with one curved surface and no flat faces at all. Name each solid.', answer: 'Solid A: pentagonal prism. Solid B: pentagonal pyramid. Solid C: sphere.', checkMode: 'auto', correctAnswer: 'pentagonalprismpentagonalpyramidsphere', correctAnswers: ['pentagonalprismpentagonalpyramidsphere', 'prismpyramidsphere', 'pentagonal prism, pentagonal pyramid, sphere'], explanation: 'Two parallel identical bases + rectangular lateral faces = prism, named by its base (pentagon) → pentagonal prism.\nOne base + triangular lateral faces meeting at an apex = pyramid → pentagonal pyramid.\nPerfectly round with one curved surface and no flat faces = sphere ✓' },

        // Block B: counting V/E/F of named polyhedra (4-7)
        { difficulty: 'Easy', question: 'How many faces does a hexagonal prism have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A hexagonal prism has a 6-sided base.\nFaces = base sides + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a pentagonal pyramid have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A pentagonal pyramid has a 5-sided base.\nVertices = base sides + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'A gift box is shaped like a triangular prism. How many edges does it have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'A triangular prism has a 3-sided base.\nEdges = base sides × 3 = 3 × 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a square pyramid has 6 faces, since "a square has 4 sides plus a top and bottom." Is the learner correct? State the actual number of faces.', answer: 'No, the learner is incorrect. A square pyramid has only 5 faces: 1 square base and 4 triangular side faces. There is no "top" face — the triangles meet directly at the apex, so there is no second base like in a prism.', checkMode: 'self' },

        // Block C: Euler's formula, including curved solids (8-11)
        { difficulty: 'Medium', question: "Verify Euler's formula (F − E + V = 2) for an octagonal prism. State F, E and V.", answer: 'F = 10, E = 24, V = 16. F − E + V = 10 − 24 + 16 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "A hexagonal pyramid has F = 7 and V = 7. Use Euler's formula to find E.", answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: "F − E + V = 2\n7 − E + 7 = 2\n14 − E = 2\nE = 12 ✓\nCheck: a hexagon base has 6 sides, so E = 6 × 2 = 12 ✓" },
        { difficulty: 'Medium-Hard', question: 'A learner states that a nonagonal prism has F = 11, E = 27, V = 16. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'V=18', 'v18'], explanation: 'A nonagonal prism has a 9-sided base.\nF = 9 + 2 = 11, E = 9 × 3 = 27, V = 9 × 2 = 18.\nThe learner\'s numbers give 11 − 27 + 16 = 0, not 2 — wrong.\nV should be 18, not 16.\nCheck: 11 − 27 + 18 = 2 ✓' },
        { difficulty: 'Hard', question: "Sipho tries to apply Euler's formula (F − E + V = 2) to a cylinder, using F = 3 (2 circular faces + 1 curved surface), E = 2 (2 circular edges) and V = 0. Does the formula give 2? Explain why Euler's formula does not work the same way for a cylinder as it does for a prism.", answer: "F − E + V = 3 − 2 + 0 = 1, not 2, so the formula does not hold. Euler's formula was proved for solids with flat polygonal faces and straight edges meeting at sharp vertices. A cylinder has a curved surface and curved edges, not straight edges between flat polygon faces, so it does not have the same face-edge-vertex structure as a polyhedron and Euler's formula cannot be applied to it in the usual sense.", checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 hexagons and 6 rectangles arranged as shown, where the two hexagons form opposite ends and the 6 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'hexagonal prism', checkMode: 'auto', correctAnswer: 'hexagonalprism', correctAnswers: ['hexagonalprism', 'hexagonal prism'], explanation: 'The net has 2 identical hexagonal bases and 6 rectangular side faces, matching a hexagonal prism (F = 6 + 2 = 8, made of 2 hexagons + 6 rectangles) ✓' },
        { difficulty: 'Medium', question: 'Describe the net of a cone — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 2 shapes in total: 1 circle (the base) and 1 sector of a larger circle (the curved surface unrolled flat). The circle sits beside the curved edge of the sector — when the sector is rolled up into a cone shape, its straight edges meet and its curved edge wraps exactly around the circle, forming the base.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 2 circles and 1 rectangle arranged as shown, where one circle touches the top edge of the rectangle, the other circle touches the bottom edge of the rectangle, and the rectangle\'s width exactly matches the circumference of the circles. Which solid does this net fold into?', answer: 'cylinder', checkMode: 'auto', correctAnswer: 'cylinder', correctAnswers: ['cylinder', 'a cylinder'], explanation: 'The net has 2 identical circular bases and 1 rectangle that wraps around to form the curved surface, matching a cylinder — the rectangle\'s width must equal the circle\'s circumference so the curved surface joins up exactly ✓' },
        { difficulty: 'Hard', question: 'A learner draws a net for a hexagonal prism using 2 hexagons and 5 rectangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A hexagonal prism has F = 6 + 2 = 8 faces: 2 hexagonal bases and 6 rectangular side faces. The learner\'s net has only 5 rectangles instead of 6, so it is one rectangular face short and cannot fold into a closed hexagonal prism.', checkMode: 'self' },

        // Block E: cross-sections (16-18)
        { difficulty: 'Hard', question: 'A rectangular prism is sliced by a plane parallel to its rectangular base, cutting straight across the prism. What shape is the cross-section?', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a rectangle, the cross-section is a rectangle ✓' },
        { difficulty: 'Hard', question: 'A cylinder standing upright is sliced by a plane parallel to its circular base, cutting straight across partway up. What shape is the cross-section, and does its size change depending on the height of the cut?', answer: 'The cross-section is a circle, identical in size to the circular base at every height, because a cylinder has the same circular cross-section all the way along its length — the height of the cut does not change the size of the circle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cone standing upright on its circular base is sliced by a plane parallel to its base, partway up from the base to the apex. What shape is the cross-section, and how does its size compare to the base?', answer: 'circle', checkMode: 'auto', correctAnswer: 'circle', correctAnswers: ['circle', 'a circle'], explanation: 'Slicing a cone parallel to its circular base always produces a circular cross-section, because every horizontal slice of a cone is a circle. However, unlike a cylinder, this circle is smaller than the base — the cone tapers, so cross-sections shrink the closer they are cut to the apex ✓' },

        // Block F: multi-step comparison (19-20)
        { difficulty: 'Hard', question: 'A heptagonal prism and a heptagonal pyramid both have a 7-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Heptagonal prism: F = 9, E = 21, V = 14. Heptagonal pyramid: F = 8, E = 14, V = 8. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo compares a cylinder, a cone and a sphere. State how many flat faces, curved surfaces and vertices (sharp points) each of the three solids has.', answer: 'Cylinder: 2 flat faces, 1 curved surface, 0 vertices. Cone: 1 flat face, 1 curved surface, 1 vertex. Sphere: 0 flat faces, 1 curved surface, 0 vertices.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying 3D objects, Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid is perfectly round, with every point on its surface the same distance from its centre, and has no flat faces at all. What is this solid called?', answer: 'sphere', checkMode: 'auto', correctAnswer: 'sphere', correctAnswers: ['sphere', 'a sphere'], explanation: 'A perfectly round solid where every surface point is equidistant from the centre, with no flat faces, is a sphere ✓' },
        { difficulty: 'Easy', question: 'A solid has one heptagonal (7-sided) base and 7 triangular faces that all meet at a single apex. What is this solid called?', answer: 'heptagonal pyramid', checkMode: 'auto', correctAnswer: 'heptagonalpyramid', correctAnswers: ['heptagonalpyramid', 'heptagonal pyramid'], explanation: 'A solid with one base and triangular faces meeting at a single apex is a pyramid. The base has 7 sides, so it is a heptagonal pyramid ✓' },
        { difficulty: 'Medium', question: 'Kabelo is classifying three solids for a display. Solid A has 2 parallel octagonal bases and rectangular lateral faces. Solid B has 1 circular base and 1 curved surface tapering to a point. Solid C has 2 parallel circular bases joined by 1 curved surface. Name each solid.', answer: 'Solid A: octagonal prism. Solid B: cone. Solid C: cylinder.', checkMode: 'auto', correctAnswer: 'octagonalprismconecylinder', correctAnswers: ['octagonalprismconecylinder', 'prismconecylinder', 'octagonal prism, cone, cylinder'], explanation: 'Two parallel identical bases + rectangular lateral faces = prism, named by its base (octagon) → octagonal prism.\nOne circular base + curved surface tapering to a point = cone.\nTwo parallel circular bases + curved surface = cylinder ✓' },

        // Block B: counting V/E/F of named polyhedra (4-7)
        { difficulty: 'Easy', question: 'How many faces does a heptagonal prism have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'A heptagonal prism has a 7-sided base.\nFaces = base sides + 2 = 7 + 2 = 9 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a hexagonal pyramid have?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'A hexagonal pyramid has a 6-sided base.\nVertices = base sides + 1 = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'A jewellery box is shaped like a triangular prism. How many vertices does it have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A triangular prism has a 3-sided base.\nVertices = base sides × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a triangular prism has 4 faces, since "a triangle has 3 sides plus a bottom." Is the learner correct? State the actual number of faces.', answer: 'No, the learner is incorrect. A triangular prism has 5 faces: 2 triangular bases (not just 1) and 3 rectangular side faces. The learner forgot that a prism has two identical bases — a top and a bottom triangle — not just one.', checkMode: 'self' },

        // Block C: Euler's formula, including curved solids (8-11)
        { difficulty: 'Medium', question: "Verify Euler's formula (F − E + V = 2) for a nonagonal prism. State F, E and V.", answer: 'F = 11, E = 27, V = 18. F − E + V = 11 − 27 + 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "A heptagonal pyramid has F = 8 and V = 8. Use Euler's formula to find E.", answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: "F − E + V = 2\n8 − E + 8 = 2\n16 − E = 2\nE = 14 ✓\nCheck: a heptagon base has 7 sides, so E = 7 × 2 = 14 ✓" },
        { difficulty: 'Medium-Hard', question: 'A learner states that a decagonal prism has F = 12, E = 30, V = 18. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'V=20', 'v20'], explanation: 'A decagonal prism has a 10-sided base.\nF = 10 + 2 = 12, E = 10 × 3 = 30, V = 10 × 2 = 20.\nThe learner\'s numbers give 12 − 30 + 18 = 0, not 2 — wrong.\nV should be 20, not 18.\nCheck: 12 − 30 + 20 = 2 ✓' },
        { difficulty: 'Hard', question: "Lerato tries to apply Euler's formula (F − E + V = 2) to a sphere, using F = 1 (the curved surface), E = 0 and V = 0. Does the formula give 2? Explain why Euler's formula does not work the same way for a sphere as it does for a pyramid.", answer: "F − E + V = 1 − 0 + 0 = 1, not 2, so the formula does not hold. Euler's formula was proved for solids with flat polygonal faces, straight edges and sharp vertices where faces meet. A sphere has one continuous curved surface with no flat faces, no straight edges and no vertices at all, so it does not have the same face-edge-vertex structure as a polyhedron and Euler's formula cannot be applied to it in the usual sense.", checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 pentagons and 5 rectangles arranged as shown, where the two pentagons form opposite ends and the 5 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'pentagonal prism', checkMode: 'auto', correctAnswer: 'pentagonalprism', correctAnswers: ['pentagonalprism', 'pentagonal prism'], explanation: 'The net has 2 identical pentagonal bases and 5 rectangular side faces, matching a pentagonal prism (F = 5 + 2 = 7, made of 2 pentagons + 5 rectangles) ✓' },
        { difficulty: 'Medium', question: 'Describe the net of a cylinder — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 3 shapes in total: 2 identical circles (the top and bottom bases) and 1 rectangle (the curved surface unrolled flat). One circle touches the top edge of the rectangle and the other touches the bottom edge — when rolled up, the rectangle wraps around to form the curved surface, and its width must exactly equal the circumference of the circles so the edges meet without gaps.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 circle and 1 sector of a larger circle arranged as shown, where the curved edge of the sector lies directly against the circle so the two curved edges match in length exactly. Which solid does this net fold into?', answer: 'cone', checkMode: 'auto', correctAnswer: 'cone', correctAnswers: ['cone', 'a cone'], explanation: 'The net has 1 circular base and 1 sector that rolls up into the curved surface of a cone, meeting at a single apex when the sector\'s straight edges are joined — this matches a cone, where the sector\'s curved edge length must equal the base circle\'s circumference ✓' },
        { difficulty: 'Hard', question: 'A learner draws a net for a pentagonal prism using 2 pentagons and 4 rectangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A pentagonal prism has F = 5 + 2 = 7 faces: 2 pentagonal bases and 5 rectangular side faces. The learner\'s net has only 4 rectangles instead of 5, so it is one rectangular face short and cannot fold into a closed pentagonal prism.', checkMode: 'self' },

        // Block E: cross-sections (16-18)
        { difficulty: 'Hard', question: 'A triangular prism is sliced by a plane parallel to its triangular base, cutting straight across the prism. What shape is the cross-section?', answer: 'triangle', checkMode: 'auto', correctAnswer: 'triangle', correctAnswers: ['triangle', 'a triangle'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a triangle, the cross-section is a triangle ✓' },
        { difficulty: 'Hard', question: 'A sphere is sliced through its exact centre by a flat plane. What shape is the cross-section, and how does its size compare to a cross-section sliced nearer the edge of the sphere (not through the centre)?', answer: 'The cross-section is a circle. A slice through the exact centre produces the largest possible circle (with the same radius as the sphere itself), while a slice made nearer the edge, further from the centre, produces a smaller circle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cylinder lying on its curved side is sliced by a plane perpendicular to its circular bases, cutting lengthwise through the centre. What shape is the cross-section?', answer: 'rectangle', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'a rectangle'], explanation: 'Slicing a cylinder lengthwise through its axis, perpendicular to the circular bases, produces a rectangular cross-section — its length equals the cylinder\'s height and its width equals the diameter of the circular base ✓' },

        // Block F: multi-step comparison (19-20)
        { difficulty: 'Hard', question: 'A nonagonal prism and a nonagonal pyramid both have a 9-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Nonagonal prism: F = 11, E = 27, V = 18. Nonagonal pyramid: F = 10, E = 18, V = 10. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle compares a cube, a cylinder and a cone. State how many flat faces, curved surfaces and vertices (sharp points) each of the three solids has.', answer: 'Cube: 6 flat faces, 0 curved surfaces, 8 vertices. Cylinder: 2 flat faces, 1 curved surface, 0 vertices. Cone: 1 flat face, 1 curved surface, 1 vertex.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently classify 3D objects and work with Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A: naming/classifying (1-3)
        { difficulty: 'Easy', question: 'A solid has two identical, parallel decagonal (10-sided) bases joined by 10 rectangular faces. What is this solid called?', answer: 'decagonal prism', checkMode: 'auto', correctAnswer: 'decagonalprism', correctAnswers: ['decagonalprism', 'decagonal prism'], explanation: 'A solid with two identical parallel bases and rectangular lateral faces is a prism. The base has 10 sides, so it is a decagonal prism ✓' },
        { difficulty: 'Easy', question: 'A solid has one flat circular base and one curved surface that narrows smoothly to a single apex above the base. What is this solid called?', answer: 'cone', checkMode: 'auto', correctAnswer: 'cone', correctAnswers: ['cone', 'a cone'], explanation: 'A solid with a circular base and a curved surface that narrows to a single apex is a cone ✓' },
        { difficulty: 'Medium', question: 'Amahle is classifying three solids for a science fair. Solid A has 1 nonagonal base and 9 triangular faces meeting at an apex. Solid B has 2 parallel circular bases joined by a curved surface. Solid C is perfectly round with no flat faces at all. Name each solid.', answer: 'Solid A: nonagonal pyramid. Solid B: cylinder. Solid C: sphere.', checkMode: 'auto', correctAnswer: 'nonagonalpyramidcylindersphere', correctAnswers: ['nonagonalpyramidcylindersphere', 'pyramidcylindersphere', 'nonagonal pyramid, cylinder, sphere'], explanation: 'One base + triangular lateral faces meeting at an apex = pyramid, named by its base (nonagon) → nonagonal pyramid.\nTwo parallel circular bases + curved surface = cylinder.\nPerfectly round with no flat faces = sphere ✓' },

        // Block B: counting V/E/F of named polyhedra (4-7)
        { difficulty: 'Easy', question: 'How many faces does an octagonal prism have?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'An octagonal prism has an 8-sided base.\nFaces = base sides + 2 = 8 + 2 = 10 ✓' },
        { difficulty: 'Easy', question: 'How many vertices does a heptagonal pyramid have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A heptagonal pyramid has a 7-sided base.\nVertices = base sides + 1 = 7 + 1 = 8 ✓' },
        { difficulty: 'Medium', question: 'A camping tent is shaped like a triangular prism. How many faces does it have?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A triangular prism has a 3-sided base.\nFaces = base sides + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Medium', question: 'A learner claims a hexagonal pyramid has 12 vertices, "since a hexagon has 6 vertices and the pyramid needs double for the sides." Is the learner correct? State the actual number of vertices.', answer: 'No, the learner is incorrect. A hexagonal pyramid has 7 vertices: the 6 vertices of the hexagonal base plus 1 single apex where all the triangular faces meet. The apex only adds 1 vertex, not a doubling of the base vertices.', checkMode: 'self' },

        // Block C: Euler's formula, including curved solids (8-11)
        { difficulty: 'Medium', question: "Verify Euler's formula (F − E + V = 2) for a decagonal prism. State F, E and V.", answer: 'F = 12, E = 30, V = 20. F − E + V = 12 − 30 + 20 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "An octagonal pyramid has F = 9 and V = 9. Use Euler's formula to find E.", answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: "F − E + V = 2\n9 − E + 9 = 2\n18 − E = 2\nE = 16 ✓\nCheck: an octagon base has 8 sides, so E = 8 × 2 = 16 ✓" },
        { difficulty: 'Medium-Hard', question: 'A learner states that a heptagonal prism has F = 9, E = 21, V = 12. Use Euler\'s formula to check this. If it is wrong, state the correct value of V.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'V=14', 'v14'], explanation: 'A heptagonal prism has a 7-sided base.\nF = 7 + 2 = 9, E = 7 × 3 = 21, V = 7 × 2 = 14.\nThe learner\'s numbers give 9 − 21 + 12 = 0, not 2 — wrong.\nV should be 14, not 12.\nCheck: 9 − 21 + 14 = 2 ✓' },
        { difficulty: 'Hard', question: "Thabo tries to apply Euler's formula (F − E + V = 2) to a cone, using F = 2 (1 circular base + 1 curved surface), E = 1 (the circular edge) and V = 1 (the apex). Does the formula give 2 this time? Explain why this result does not mean a cone is a true polyhedron.", answer: "F − E + V = 2 − 1 + 1 = 2, so the formula coincidentally does give 2 for a cone. However, this does not make a cone a true polyhedron: Euler's formula applies properly to solids with flat polygonal faces and straight edges between sharp vertices. A cone has a curved surface and a curved (circular) edge, not straight edges meeting flat polygons, so its 'apex vertex' and 'circular edge' are not the same kind of features as in a true polyhedron — the formula working numerically here is a coincidence, not proof that a cone follows the same structural rule as a prism or pyramid.", checkMode: 'self' },

        // Block D: nets (12-15), 12 and 14 diagram-flagged
        { difficulty: 'Medium', question: 'A net consists of 2 octagons and 8 rectangles arranged as shown, where the two octagons form opposite ends and the 8 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', answer: 'octagonal prism', checkMode: 'auto', correctAnswer: 'octagonalprism', correctAnswers: ['octagonalprism', 'octagonal prism'], explanation: 'The net has 2 identical octagonal bases and 8 rectangular side faces, matching an octagonal prism (F = 8 + 2 = 10, made of 2 octagons + 8 rectangles) ✓' },
        { difficulty: 'Medium', question: 'Describe the net of a nonagonal pyramid — how many shapes are in it, what shapes are they, and how are they arranged?', answer: 'The net has 10 shapes in total: 1 nonagon (the base) and 9 triangles (the side faces). The nonagon sits in the centre with one triangle attached to each of its 9 sides — when folded, the triangles rise up and their free vertices meet at the apex.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 2 circles and 1 rectangle arranged as shown, where the rectangle\'s width is much shorter than the circles\' circumference — the rectangle only reaches partway around each circle\'s edge. If this net were folded, would it close up into a proper cylinder? Explain.', answer: 'No — the net would not fold into a proper cylinder. For a cylinder net, the rectangle (curved surface) must have a width exactly equal to the circumference of the circular bases so that its two short edges meet perfectly when rolled. If the rectangle is too short, there will be a gap left uncovered around the circular edges, and the solid will not close up into a complete cylinder.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner draws a net for a square pyramid using 1 square and 3 triangles. Is this net valid? If not, explain the error.', answer: 'No, the net is invalid. A square pyramid has F = 4 + 1 = 5 faces: 1 square base and 4 triangular side faces. The learner\'s net has only 3 triangles instead of 4, so one side of the square has no triangle attached and the net cannot fold into a closed square pyramid.', checkMode: 'self' },

        // Block E: cross-sections (16-18)
        { difficulty: 'Hard', question: 'A hexagonal prism is sliced by a plane parallel to its hexagonal base, cutting straight across the prism. What shape is the cross-section?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'a hexagon'], explanation: 'A cross-section parallel to the base of a prism is always identical in shape to the base. Since the base is a hexagon, the cross-section is a hexagon ✓' },
        { difficulty: 'Hard', question: 'A square pyramid standing on its square base is sliced by a plane parallel to the base, partway up towards the apex. What shape is the cross-section, and how does its size compare to the base?', answer: 'The cross-section is a square, but it is smaller than the base square. A pyramid tapers evenly from its base to its apex, so any cross-section cut parallel to the base is a smaller version of the same shape as the base — the closer the cut is made to the apex, the smaller the square becomes, shrinking to a single point exactly at the apex.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A cone lying on its curved side (on its side, not upright) is sliced vertically through its apex and the centre of its circular base. What shape is the cross-section?', answer: 'triangle', checkMode: 'auto', correctAnswer: 'triangle', correctAnswers: ['triangle', 'a triangle'], explanation: 'Slicing a cone through its apex and through the centre of its base produces a triangular cross-section — one side is the diameter of the base, and the other two sides run from the ends of that diameter up to the apex ✓' },

        // Block F: multi-step comparison (19-20)
        { difficulty: 'Hard', question: 'A decagonal prism and a decagonal pyramid both have a 10-sided base. Compare their number of faces, edges and vertices, and explain why the values differ even though the base is the same.', answer: 'Decagonal prism: F = 12, E = 30, V = 20. Decagonal pyramid: F = 11, E = 20, V = 11. The prism has more faces, edges and vertices in every category because it has two identical bases connected by rectangular side faces, while the pyramid has only one base with triangular side faces meeting at a single apex — the second base and its extra edges/vertices are what make the prism values larger.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho compares a square pyramid, a sphere and a cylinder. State how many flat faces, curved surfaces and vertices (sharp points) each of the three solids has.', answer: 'Square pyramid: 5 flat faces (1 square + 4 triangles), 0 curved surfaces, 5 vertices (4 base + 1 apex). Sphere: 0 flat faces, 1 curved surface, 0 vertices. Cylinder: 2 flat faces, 1 curved surface, 0 vertices.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have fully mastered classifying 3D objects, Euler\'s formula, nets and cross-sections.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the sections above and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of 3D objects.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
