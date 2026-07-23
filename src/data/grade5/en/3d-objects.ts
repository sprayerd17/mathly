import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D object parts) ────────────────────────────────────────
// faces / prism  → blue   (#2563eb)
// edges / apex   → orange (#ea580c)
// vertices / base→ green  (#16a34a)
// pyramid        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D Objects',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE 3D OBJECTS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-3d-objects',
      title: 'What are 3D Objects?',
      icon: '□',
      explanation:
        `<p style="margin-bottom:16px;">3D objects are <strong>solid shapes</strong> that have <strong>length</strong>, <strong>width</strong> and <strong>height</strong>. 3D stands for <strong>three-dimensional</strong>. Unlike 2D shapes which are flat, 3D objects <strong>take up space</strong>. We describe 3D objects by counting their ${bl('faces')}, ${or('edges')} and ${gr('vertices')}. A ${bl('face')} is a flat surface. An ${or('edge')} is where two faces meet. A ${gr('vertex')} is a corner where edges meet.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faces')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('edges')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertices')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Face</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A flat surface of a 3D object.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Edge</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Where two faces of a 3D object meet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A corner where edges meet. More than one vertex are called vertices.</p>` +
        `</div>` +

        `</div>` +

        // ── 2D vs 3D comparison ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">2D shapes vs 3D objects</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">2D Shape</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Flat — has only <strong>length</strong> and <strong>width</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Described by <strong>sides</strong> and <strong>corners</strong>.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">3D Object</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Solid — has <strong>length</strong>, <strong>width</strong> and <strong>height</strong>. Takes up space.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Described by ${bl('faces')}, ${or('edges')} and ${gr('vertices')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always count ${bl('faces')}, ${or('edges')} and ${gr('vertices')} carefully and in order. A ${bl('face')} is a <strong>flat surface</strong>, an ${or('edge')} is where <strong>two faces meet</strong>, and a ${gr('vertex')} is a <strong>corner</strong> where edges meet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe a cube.',
          answer: `A cube has ${bl('6 faces')}, ${or('12 edges')} and ${gr('8 vertices')}`,
          steps: [
            `Count the ${bl('faces')} — a cube has <strong>${bl('6')}</strong> flat square faces.`,
            `Count the ${or('edges')} — a cube has <strong>${or('12')}</strong> edges.`,
            `Count the ${gr('vertices')} — a cube has <strong>${gr('8')}</strong> vertices.`,
            `All faces are equal squares.`,
            `<strong>Answer:</strong> A cube is a 3D object with ${bl('6 faces')}, ${or('12 edges')} and ${gr('8 vertices')}.`,
          ],
        },
        {
          question: 'What is the difference between a 2D shape and a 3D object?',
          answer: `A 2D shape is flat with sides and corners. A 3D object has ${bl('faces')}, ${or('edges')} and ${gr('vertices')} and takes up space.`,
          steps: [
            `A square is a 2D shape — it is flat with only <strong>length</strong> and <strong>width</strong>.`,
            `A cube is a 3D object — it has <strong>length</strong>, <strong>width</strong> and <strong>height</strong> and takes up space.`,
            `A 2D shape has <strong>sides</strong> and <strong>corners</strong>.`,
            `A 3D object has ${bl('faces')}, ${or('edges')} and ${gr('vertices')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — faces on a cube ──────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'How many faces does a cube have?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'A cube has 6 flat square faces — one on each side (top, bottom, front, back, left, right).',
        },

        // ── Q2 Medium — faces, edges, vertices of a cube ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many faces, edges and vertices does a cube have?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) How many faces?',
              correctAnswer: '6',
              explanation: 'A cube has 6 flat square faces.',
            },
            {
              label: 'b) How many edges?',
              correctAnswer: '12',
              explanation: 'A cube has 12 edges — 4 along the top, 4 along the bottom and 4 vertical edges.',
            },
            {
              label: 'c) How many vertices?',
              correctAnswer: '8',
              explanation: 'A cube has 8 vertices — 4 on top and 4 on the bottom.',
            },
          ],
        },

        // ── Q3 Hard — cube vs rectangular prism ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says a cube and a rectangular prism are exactly the same. Is he correct? Explain.',
          answer: 'No — a cube has 6 equal square faces but a rectangular prism has rectangular faces where not all sides are equal. A cube is a special type of rectangular prism.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram of a cube with faces labelled in blue edges in orange and vertices in green to show each part clearly',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="105" y="18" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">Cube</text><polygon points="50,60 130,60 155,35 75,35" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="130,60 155,35 155,115 130,140" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="50,60 130,60 130,140 50,140" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.5"/><line x1="130" y1="60" x2="130" y2="140" stroke="#ea580c" stroke-width="3.5"/><circle cx="130" cy="60" r="4.5" fill="#16a34a"/><rect x="30" y="168" width="10" height="10" fill="#2563eb"/><text x="45" y="177" font-size="11" fill="#0f1f3d">Face</text><rect x="90" y="168" width="10" height="10" fill="#ea580c"/><text x="105" y="177" font-size="11" fill="#0f1f3d">Edge</text><rect x="150" y="168" width="10" height="10" fill="#16a34a"/><text x="165" y="177" font-size="11" fill="#0f1f3d">Vertex</text></svg>',

      videoPlaceholder:
        'Short video explaining the difference between 2D shapes and 3D objects and showing how to count faces edges and vertices on a cube',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PRISMS AND PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prisms-and-pyramids',
      title: 'Prisms and Pyramids',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('prism')} is a 3D object with two identical flat ends called ${gr('bases')} and flat rectangular sides. The ${gr('bases')} give the ${bl('prism')} its name — a rectangular ${bl('prism')} has rectangle ${gr('bases')} and a triangular ${bl('prism')} has triangle ${gr('bases')}. A ${re('pyramid')} has one flat ${gr('base')} and triangular sides that meet at a point called the ${or('apex')}. The ${gr('base')} gives the ${re('pyramid')} its name — a square ${re('pyramid')} has a square ${gr('base')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('prism')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('pyramid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apex')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('base')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prism</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with two identical flat ${gr('bases')} and flat rectangular sides. Named after its ${gr('base')} shape.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with one flat ${gr('base')} and triangular sides that meet at an ${or('apex')}. Named after its ${gr('base')} shape.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The point at the top of a ${re('pyramid')} where all the triangular faces meet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Base</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The flat face that gives a ${bl('prism')} or ${re('pyramid')} its name. A ${bl('prism')} has two ${gr('bases')}; a ${re('pyramid')} has one ${gr('base')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Types ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of ${bl('prisms')} and ${re('pyramids')}</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Rectangular prism</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: rectangle. Has <strong>6 faces</strong>, <strong>12 edges</strong> and <strong>8 vertices</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a brick or a cereal box.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Triangular prism</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: triangle. Has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a triangular chocolate box.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Square pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: square. Has <strong>5 faces</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong>. Has one ${or('apex')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: the Egyptian pyramids.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Triangular pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Base')} shape: triangle. Has <strong>4 faces</strong>, <strong>6 edges</strong> and <strong>4 vertices</strong>. Has one ${or('apex')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Also called a tetrahedron.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to remember the difference</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('prism')} has <strong>two</strong> identical ${gr('bases')} — one at each end — so it has no ${or('apex')}. A ${re('pyramid')} has <strong>one</strong> ${gr('base')} and comes to a point at the ${or('apex')} at the top. Both are named after the shape of their ${gr('base')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How many faces, edges and vertices does a triangular prism have?',
          answer: `A ${bl('triangular prism')} has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>`,
          steps: [
            `A ${bl('triangular prism')} has 2 triangle faces at each end and 3 rectangular faces on the sides. Total faces = 2 + 3 = <strong>5 faces</strong>.`,
            `Count the edges — 3 on each triangle end plus 3 connecting edges = <strong>9 edges</strong>.`,
            `Count the vertices — 3 on each triangle end = <strong>6 vertices</strong>.`,
            `<strong>Answer:</strong> A ${bl('triangular prism')} has <strong>5 faces</strong>, <strong>9 edges</strong> and <strong>6 vertices</strong>.`,
          ],
        },
        {
          question: 'How is a square pyramid different from a cube?',
          answer: `A cube has <strong>6 faces</strong>, <strong>12 edges</strong> and <strong>8 vertices</strong>. A ${re('square pyramid')} has <strong>5 faces</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong> with an ${or('apex')}.`,
          steps: [
            `A cube has 6 square faces, 12 edges and 8 vertices. A cube has no ${or('apex')}.`,
            `A ${re('square pyramid')} has 1 square ${gr('base')} and 4 triangular faces = <strong>5 faces total</strong>, <strong>8 edges</strong> and <strong>5 vertices</strong>.`,
            `A cube has no ${or('apex')} but a ${re('pyramid')} comes to a point at the top called the ${or('apex')}.`,
            `<strong>Answer:</strong> The key difference is that a ${re('square pyramid')} has an ${or('apex')} and only 5 faces, while a cube has 6 equal square faces and no ${or('apex')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — base of a pyramid ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the flat bottom of a pyramid called?',
          answer: 'base',
          checkMode: 'auto',
          correctAnswer: 'base',
          explanation: 'The flat bottom face of a pyramid is called the base. The base gives the pyramid its name — for example, a square pyramid has a square base.',
        },

        // ── Q5 Medium — faces of a triangular prism ────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many faces does a triangular prism have?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'A triangular prism has 2 triangular faces (one at each end) and 3 rectangular faces on the sides — 5 faces in total.',
        },

        // ── Q6 Hard — triangular prism vs triangular pyramid ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Compare a triangular prism and a triangular pyramid. How are they different?',
          answer: 'A triangular prism has 2 triangle faces and 3 rectangular faces with 5 faces total. A triangular pyramid has 1 triangle base and 3 triangular faces with 4 faces total and comes to a point at the apex.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram showing a triangular prism and a square pyramid side by side with prism in blue pyramid in red apex in orange and base in green',
      diagramSvg:
        '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,120 90,120 115,102 55,102" fill="none" stroke="none"/><line x1="55" y1="102" x2="115" y2="102" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="30" y1="120" x2="55" y2="102" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="90" y1="120" x2="115" y2="102" stroke="#2563eb" stroke-width="2.5"/><line x1="60" y1="60" x2="85" y2="42" stroke="#2563eb" stroke-width="2.5"/><polygon points="30,120 90,120 60,60" fill="#dcfce7" stroke="#2563eb" stroke-width="2.5"/><polygon points="55,102 115,102 85,42" fill="none" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><text x="60" y="135" font-weight="700" font-size="10.5" text-anchor="middle" fill="#16a34a">Base</text><text x="60" y="178" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Triangular prism</text><polygon points="150,120 210,120 230,100 170,100" fill="#dcfce7" stroke="none"/><line x1="170" y1="100" x2="230" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="150" y1="120" x2="170" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="210" y1="120" x2="230" y2="100" stroke="#dc2626" stroke-width="2.5"/><line x1="150" y1="120" x2="210" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="150" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="210" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="230" y2="100" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="170" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><circle cx="190" cy="55" r="4.5" fill="#ea580c"/><text x="190" y="45" font-weight="700" font-size="10.5" text-anchor="middle" fill="#ea580c">Apex</text><text x="190" y="135" font-weight="700" font-size="10.5" text-anchor="middle" fill="#16a34a">Base</text><text x="190" y="178" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Square pyramid</text></svg>',

      videoPlaceholder:
        'Short video explaining the difference between prisms and pyramids and showing how to count faces edges and vertices on a triangular prism and a square pyramid',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CYLINDERS, CONES AND SPHERES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cylinders-cones-and-spheres',
      title: 'Cylinders, Cones and Spheres',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">Some 3D objects have <strong>curved surfaces</strong>. A ${bl('cylinder')} has 2 circular flat faces and 1 curved surface — like a tin can. A ${re('cone')} has 1 circular flat face, 1 curved surface and comes to a point at the top called the ${or('apex')} — like an ice cream cone. A ${gr('sphere')} is perfectly round with only 1 curved surface and no flat faces, no edges and no vertices — like a ball.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cylinder')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('cone')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sphere')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apex')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with 2 circular flat faces and 1 curved surface. It has 2 edges and no vertices.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Cone</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A 3D object with 1 circular flat face, 1 curved surface and a point at the top called the ${or('apex')}. It has 1 edge and no vertices.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A perfectly round 3D object with only 1 curved surface. It has no flat faces, no edges and no vertices.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apex</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The point at the top of a ${re('cone')} where the curved surface comes to a point.</p>` +
        `</div>` +

        `</div>` +

        // ── Comparison table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Comparing curved 3D objects</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 2 circular faces.<br><strong>Curved surface:</strong> 1.<br><strong>Edges:</strong> 2. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a tin can or a drum.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Cone</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 1 circular face.<br><strong>Curved surface:</strong> 1. <strong>${or('Apex')}:</strong> 1 point.<br><strong>Edges:</strong> 1. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: an ice cream cone or a party hat.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Flat faces:</strong> 0.<br><strong>Curved surface:</strong> 1.<br><strong>Edges:</strong> 0. <strong>Vertices:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Example: a ball or a globe.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${bl('cylinder')} has <strong>2</strong> flat faces and a ${re('cone')} has <strong>1</strong> flat face — both have a curved surface. A ${gr('sphere')} has <strong>no</strong> flat faces at all — it is entirely curved. Only a ${re('cone')} has an ${or('apex')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo holds a tin of baked beans. What 3D object is it and what are its properties?',
          answer: `A tin of baked beans is shaped like a ${bl('cylinder')}. It has 2 circular flat faces, 1 curved surface, 2 edges and no vertices.`,
          steps: [
            `A tin of baked beans is shaped like a ${bl('cylinder')}.`,
            `It has <strong>2 circular flat faces</strong> — one on top and one on the bottom.`,
            `It has <strong>1 curved surface</strong> on the side.`,
            `It has <strong>2 edges</strong> where the flat faces meet the curved surface.`,
            `It has <strong>no vertices</strong>.`,
            `<strong>Answer:</strong> The tin is a ${bl('cylinder')} with 2 circular flat faces, 1 curved surface, 2 edges and no vertices.`,
          ],
        },
        {
          question: 'Compare a cone and a pyramid.',
          answer: `Both a ${re('cone')} and a pyramid come to a point called the ${or('apex')}, but a pyramid has flat triangular faces while a ${re('cone')} has a curved surface.`,
          steps: [
            `Both a ${re('cone')} and a pyramid come to a point at the top called the ${or('apex')}.`,
            `A pyramid has <strong>flat triangular faces</strong> and <strong>straight edges</strong>.`,
            `A ${re('cone')} has a <strong>curved surface</strong> and a <strong>circular base</strong> with no straight edges.`,
            `A pyramid has <strong>vertices</strong> but a ${re('cone')} does not.`,
            `<strong>Answer:</strong> Both have an ${or('apex')}, but a pyramid uses flat faces and straight edges while a ${re('cone')} uses a curved surface and a circular base.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — sphere ───────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What 3D object looks like a ball?',
          answer: 'sphere',
          checkMode: 'auto',
          correctAnswer: 'sphere',
          explanation: 'A sphere is perfectly round with only 1 curved surface and no flat faces — just like a ball.',
        },

        // ── Q8 Medium — flat faces of a cylinder ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'How many flat faces does a cylinder have?',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'A cylinder has 2 flat circular faces — one on top and one on the bottom — and 1 curved surface on the side.',
        },

        // ── Q9 Hard — cone vs cylinder ─────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says a cone and a cylinder are similar because both have a circular face. Is she correct? Explain.',
          answer: 'Partly correct — both have a circular base. But a cylinder has 2 circular faces and a cone has only 1. A cone also has an apex and a cylinder does not.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram showing a cylinder in blue a cone in red and a sphere in green side by side with labels for flat faces curved surface and apex',
      diagramSvg:
        '<svg viewBox="0 0 400 205" xmlns="http://www.w3.org/2000/svg"><ellipse cx="70" cy="60" rx="28" ry="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><ellipse cx="70" cy="120" rx="28" ry="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="42" y1="60" x2="42" y2="120" stroke="#2563eb" stroke-width="2.5"/><line x1="98" y1="60" x2="98" y2="120" stroke="#2563eb" stroke-width="2.5"/><text x="70" y="45" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">flat face</text><text x="70" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">Cylinder</text><text x="70" y="190" font-size="9" text-anchor="middle" fill="#2563eb">curved surface</text><ellipse cx="210" cy="120" rx="26" ry="8" fill="none" stroke="#dc2626" stroke-width="2.5"/><line x1="210" y1="50" x2="184" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="210" y1="50" x2="236" y2="120" stroke="#dc2626" stroke-width="2.5"/><circle cx="210" cy="50" r="4" fill="#ea580c"/><text x="210" y="38" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">apex</text><text x="210" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#dc2626">Cone</text><text x="210" y="190" font-size="9" text-anchor="middle" fill="#dc2626">curved surface</text><circle cx="330" cy="85" r="33" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 297 85 Q 330 100 363 85" fill="none" stroke="#16a34a" stroke-width="1.3"/><text x="330" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">Sphere</text><text x="330" y="190" font-size="9" text-anchor="middle" fill="#16a34a">curved surface</text></svg>',

      videoPlaceholder:
        'Short video explaining the properties of cylinders cones and spheres and comparing a cone with a pyramid to show the difference between curved surfaces and flat faces',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SORTING AND COMPARING 3D OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-and-comparing-3d-objects',
      title: 'Sorting and Comparing 3D Objects',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">We can <strong>sort 3D objects</strong> by their properties — whether they have curved or flat surfaces, how many faces they have, and whether they can ${gr('roll')}, ${bl('stack')} or slide. Objects with flat faces can slide and ${bl('stack')}. Objects with curved surfaces can ${gr('roll')}. Some objects like a cylinder can both ${gr('roll')} and ${bl('stack')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('can roll')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('cannot roll')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('can stack')}</span>` +
        `</div>` +

        // ── Properties table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How surfaces affect movement</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Can roll</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with a <strong>curved surface</strong> can roll.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: sphere, cylinder, cone.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Cannot roll</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with <strong>only flat faces</strong> cannot roll.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: cube, rectangular prism, pyramid.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Can stack</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Objects with <strong>flat faces</strong> on top and bottom can stack.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Examples: cube, rectangular prism, cylinder.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Some objects can do more than one</p>` +
        `<p style="margin:0;color:#1e3a8a;">A cylinder can both ${gr('roll')} (curved side) and ${bl('stack')} (flat circular ends). A cone can ${gr('roll')} but is difficult to ${bl('stack')} because its ${or('apex')} makes it unstable. A sphere can ${gr('roll')} but cannot ${bl('stack')} at all.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sort these objects into can roll and cannot roll — sphere, cube, cylinder, pyramid, cone.',
          answer: `${gr('Can roll')}: sphere, cylinder, cone. ${re('Cannot roll')}: cube, pyramid.`,
          steps: [
            `${gr('Can roll:')}`,
            `${gr('Sphere')} — a sphere has a curved surface so it rolls.`,
            `${gr('Cylinder')} — a cylinder has a curved surface so it rolls.`,
            `${gr('Cone')} — a cone has a curved surface so it rolls.`,
            `${re('Cannot roll:')}`,
            `${re('Cube')} — a cube has only flat faces so it cannot roll.`,
            `${re('Pyramid')} — a pyramid has only flat faces so it cannot roll.`,
          ],
        },
        {
          question: 'Amahle wants to stack her shapes. Which of these can be stacked — sphere, rectangular prism, cone, cylinder?',
          answer: `${bl('Can stack')}: rectangular prism, cylinder. Cone — difficult. Sphere — cannot stack.`,
          steps: [
            `${bl('Rectangular prism')} — yes, flat faces stack easily.`,
            `${bl('Cylinder')} — yes, flat circular ends allow stacking.`,
            `Cone — difficult, the ${or('apex')} makes it unstable.`,
            `Sphere — no, curved surface makes it impossible to stack.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — sphere rolls ────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Can a sphere roll?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes', 'YES'],
          explanation: 'Yes — a sphere has a curved surface so it can roll in any direction.',
        },

        // ── Q11 Medium — roll and stack ────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Name one 3D object that can both roll and stack.',
          answer: 'cylinder',
          checkMode: 'auto',
          correctAnswer: 'cylinder',
          correctAnswers: ['cylinder', 'Cylinder', 'a cylinder'],
          explanation: 'A cylinder can roll (curved side) and stack (flat circular faces on top and bottom).',
        },

        // ── Q12 Hard — curved surfaces and rolling ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sorts his shapes and says only objects with curved surfaces can roll. Is he correct? Give examples to support your answer.',
          answer: 'Yes — sphere, cylinder and cone all have curved surfaces and can roll. Cubes, prisms and pyramids have only flat faces and cannot roll.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram showing 3D objects sorted into two groups — can roll in green and cannot roll in red — with a cylinder shown in blue as an object that can both roll and stack',
      diagramSvg:
        '<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg"><line x1="230" y1="15" x2="230" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="20" y1="150" x2="440" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/><text x="120" y="25" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">Can roll ✓</text><text x="340" y="25" font-weight="700" font-size="13" text-anchor="middle" fill="#dc2626">Cannot roll ✗</text><circle cx="70" cy="70" r="18" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 52 70 Q 70 78 88 70" fill="none" stroke="#16a34a" stroke-width="1.2"/><text x="70" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#14532d">Sphere</text><ellipse cx="170" cy="95" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="170" y1="45" x2="152" y2="95" stroke="#16a34a" stroke-width="2.5"/><line x1="170" y1="45" x2="188" y2="95" stroke="#16a34a" stroke-width="2.5"/><text x="170" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#14532d">Cone</text><polygon points="270,65 300,65 300,95 270,95" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="270,65 300,65 310,55 280,55" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="300,65 310,55 310,85 300,95" fill="none" stroke="#dc2626" stroke-width="2"/><text x="290" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#7f1d1d">Cube</text><line x1="370" y1="95" x2="410" y2="95" stroke="#dc2626" stroke-width="2.5"/><line x1="390" y1="50" x2="370" y2="95" stroke="#dc2626" stroke-width="2.5"/><line x1="390" y1="50" x2="410" y2="95" stroke="#dc2626" stroke-width="2.5"/><text x="390" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#7f1d1d">Pyramid</text><text x="230" y="164" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">Cylinder — can roll AND stack</text><ellipse cx="230" cy="175" rx="24" ry="7" fill="none" stroke="#2563eb" stroke-width="2.5"/><ellipse cx="230" cy="212" rx="24" ry="7" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="206" y1="175" x2="206" y2="212" stroke="#2563eb" stroke-width="2.5"/><line x1="254" y1="175" x2="254" y2="212" stroke="#2563eb" stroke-width="2.5"/><text x="230" y="232" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">Cylinder</text></svg>',

      videoPlaceholder:
        'Short video showing how to sort 3D objects by their properties including rolling stacking and sliding and explaining why curved surfaces allow rolling while flat faces allow stacking',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Naming/identifying | 4-8 Counting F/E/V | 9-11 Curved surfaces |
    // 12-15 Sorting/comparing | 16-17 Error-spotting | 18-19 Multi-step application
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A dice has 6 identical square faces. What 3D object is it?', answer: 'cube', checkMode: 'auto', correctAnswer: 'cube', correctAnswers: ['cube', 'a cube'], explanation: 'A cube has 6 identical square faces, 12 edges and 8 vertices — exactly like a dice.' },
        { difficulty: 'Easy', question: 'A cereal box is longer than it is wide, with rectangular faces. What 3D object is it?', answer: 'rectangular prism', checkMode: 'auto', correctAnswer: 'rectangularprism', correctAnswers: ['rectangularprism', 'a rectangular prism'], explanation: 'A cereal box has 6 rectangular faces where opposite faces are equal — this is a rectangular prism.' },
        { difficulty: 'Easy', question: 'A tin of baked beans is round with straight sides and flat circular ends. Name this 3D object.', answer: 'cylinder', checkMode: 'auto', correctAnswer: 'cylinder', correctAnswers: ['cylinder', 'a cylinder'], explanation: 'A tin has 2 flat circular faces joined by 1 curved surface — this is a cylinder.' },
        { difficulty: 'Easy', question: 'An ice-cream cone has one flat circular top and comes to a point at the bottom. Name this 3D object.', answer: 'cone', checkMode: 'auto', correctAnswer: 'cone', correctAnswers: ['cone', 'a cone'], explanation: 'A cone has 1 flat circular face, 1 curved surface and comes to a point called the apex.' },
        { difficulty: 'Easy', question: 'How many faces does a cube have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A cube has 6 flat square faces — top, bottom, front, back, left and right.' },
        { difficulty: 'Easy-Medium', question: 'How many edges does a rectangular prism have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A rectangular prism has 12 edges — 4 on the top face, 4 on the bottom face and 4 vertical edges joining them.' },
        { difficulty: 'Medium', question: 'A triangular prism has how many faces, edges and vertices?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Faces', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A triangular prism has 2 triangular end faces and 3 rectangular side faces: 2 + 3 = 5 faces.' },
          { label: 'b) Edges', correctAnswer: '9', correctAnswers: ['9'], explanation: '3 edges on each triangular end (3 + 3 = 6) plus 3 edges connecting the two ends = 9 edges.' },
          { label: 'c) Vertices', correctAnswer: '6', correctAnswers: ['6'], explanation: '3 vertices on each triangular end: 3 + 3 = 6 vertices.' },
        ] },
        { difficulty: 'Medium', question: 'A square pyramid has how many faces, edges and vertices?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Faces', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A square pyramid has 1 square base and 4 triangular faces: 1 + 4 = 5 faces.' },
          { label: 'b) Edges', correctAnswer: '8', correctAnswers: ['8'], explanation: '4 edges around the square base plus 4 edges running up to the apex = 8 edges.' },
          { label: 'c) Vertices', correctAnswer: '5', correctAnswers: ['5'], explanation: '4 vertices around the base plus 1 vertex at the apex = 5 vertices.' },
        ] },
        { difficulty: 'Medium', question: 'How many vertices does a triangular pyramid have?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'A triangular pyramid has 3 vertices around its triangular base plus 1 at the apex: 3 + 1 = 4 vertices.' },
        { difficulty: 'Medium', question: 'A packing crate is shaped like a rectangular prism. How many vertices does the crate have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A rectangular prism has 8 vertices — 4 corners on the top face and 4 corners on the bottom face.' },
        { difficulty: 'Medium', question: 'A cylinder (like a tin can) has how many flat faces and how many edges?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Flat faces', correctAnswer: '2', correctAnswers: ['2'], explanation: 'A cylinder has 2 flat circular faces, one on top and one on the bottom.' },
          { label: 'b) Edges', correctAnswer: '2', correctAnswers: ['2'], explanation: 'A cylinder has 2 edges — the circles where each flat face meets the curved surface.' },
        ] },
        { difficulty: 'Medium', question: 'How many curved surfaces does a cone have, and how many flat faces?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Curved surfaces', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone has exactly 1 curved surface sloping from the base up to the apex.' },
          { label: 'b) Flat faces', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone has 1 flat circular face at its base.' },
        ] },
        { difficulty: 'Medium', question: 'A sphere, like a soccer ball, has how many flat faces?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'none', 'no flat faces'], explanation: 'A sphere is perfectly round with only a curved surface — it has 0 flat faces, 0 edges and 0 vertices.' },
        { difficulty: 'Medium', question: 'Look at a cube and a rectangular prism side by side. Explain one property they share and one way they are different.', answer: 'Shared: both have 6 faces, 12 edges and 8 vertices, and both faces meet at right angles. Different: a cube has 6 identical square faces, while a rectangular prism has rectangular faces that are not all the same size — opposite faces are equal in pairs, not all six.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can roll and cannot roll: sphere, cube, cone, rectangular prism, cylinder.', answer: 'Can roll: sphere, cone, cylinder (they have a curved surface). Cannot roll: cube, rectangular prism (they have only flat faces).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A shop assistant is stacking boxes. Which of these can be stacked easily and which cannot — rectangular prism, sphere, square pyramid, cylinder? Explain why.', answer: 'The rectangular prism and cylinder can stack easily because they have flat faces on top and bottom. The square pyramid is hard to stack because it comes to a point at the apex. The sphere cannot stack at all because its whole surface is curved.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Karabo says: 'A cone and a cylinder are the same shape because both have a circular face and a curved surface.' Is Karabo correct? Explain using the number of flat faces and whether each object has an apex.", answer: 'Karabo is only partly correct. It is true that both a cone and a cylinder have a curved surface and at least one circular flat face. But a cylinder has 2 circular flat faces while a cone has only 1. A cone also comes to a point called the apex, but a cylinder has no apex — its two circular faces are the same size all the way up. So the two shapes are related but not the same.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A student claims: 'A square pyramid and a cube both have 8 vertices, so they must have the same number of edges too.' Is this claim correct? Explain using the actual edge counts.", answer: 'This claim is incorrect. A square pyramid does not have 8 vertices — it has only 5 (4 around the base plus the apex). A cube has 8 vertices and 12 edges, while a square pyramid has 5 vertices and only 8 edges. Having a different number of vertices already shows the two shapes are not built the same way, and their edge counts (12 versus 8) are different too.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zinhle is building a model house from a rectangular prism for the walls and a square pyramid for the roof. How many vertices are there in total across both parts, and how many of those vertices touch where the roof meets the walls?', answer: 'The rectangular prism has 8 vertices and the square pyramid has 5 vertices, so there are 8 + 5 = 13 vertices in total across the two solids. Where the roof sits on the walls, the 4 base vertices of the pyramid line up with the 4 top vertices of the prism, so 4 vertices touch at the join (the pyramid\'s apex does not touch the walls).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A gift shop sells items shaped like a cylinder (tin of sweets) and a cone (party hat). The shopkeeper wants to stack them in a display, but only the tin can be stacked safely. Explain why the cylinder can stack but the cone cannot, using their faces and apex.', answer: 'The cylinder has 2 flat circular faces of equal size — one on top and one on the bottom — so another cylinder or flat object can sit steadily on top of it. The cone only has 1 flat circular face at its base, and the opposite end is the apex, a single point. Because a point cannot support weight or provide a flat resting surface, nothing can be stacked stably on top of a cone standing on its base.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered naming, counting and comparing 3D objects like a pro.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A chocolate box has two triangular ends and three rectangular sides. What 3D object is it?', answer: 'triangular prism', checkMode: 'auto', correctAnswer: 'triangularprism', correctAnswers: ['triangularprism', 'a triangular prism'], explanation: 'A triangular prism has 2 identical triangular faces at each end and 3 rectangular faces joining them.' },
        { difficulty: 'Easy', question: 'The Egyptian pyramids have a square base and four triangular sides that meet at a point. Name this 3D object.', answer: 'square pyramid', checkMode: 'auto', correctAnswer: 'squarepyramid', correctAnswers: ['squarepyramid', 'a square pyramid'], explanation: 'A square pyramid has a square base and 4 triangular faces that meet at the apex, just like the Egyptian pyramids.' },
        { difficulty: 'Easy', question: 'A soccer ball is perfectly round with no flat faces at all. Name this 3D object.', answer: 'sphere', checkMode: 'auto', correctAnswer: 'sphere', correctAnswers: ['sphere', 'a sphere'], explanation: 'A sphere is perfectly round with only 1 curved surface and no flat faces, edges or vertices.' },
        { difficulty: 'Easy', question: 'A tetrahedron toy has 4 triangular faces, including its base. Name this 3D object.', answer: 'triangular pyramid', checkMode: 'auto', correctAnswer: 'triangularpyramid', correctAnswers: ['triangularpyramid', 'a triangular pyramid', 'tetrahedron', 'a tetrahedron'], explanation: 'A triangular pyramid (also called a tetrahedron) has a triangular base and 3 triangular side faces that meet at the apex.' },
        { difficulty: 'Easy', question: 'How many vertices does a cube have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A cube has 8 vertices — 4 on the top face and 4 on the bottom face.' },
        { difficulty: 'Easy-Medium', question: 'How many faces does a rectangular prism have?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A rectangular prism has 6 rectangular faces — top, bottom, front, back, left and right.' },
        { difficulty: 'Medium', question: 'A cube has how many faces, edges and vertices?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Faces', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A cube has 6 identical square faces.' },
          { label: 'b) Edges', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A cube has 12 edges — 4 on top, 4 on the bottom and 4 vertical edges.' },
          { label: 'c) Vertices', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A cube has 8 vertices — 4 on top and 4 on the bottom.' },
        ] },
        { difficulty: 'Medium', question: 'A triangular pyramid has how many faces, edges and vertices?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Faces', correctAnswer: '4', correctAnswers: ['4'], explanation: 'A triangular pyramid has 1 triangular base and 3 triangular side faces: 1 + 3 = 4 faces.' },
          { label: 'b) Edges', correctAnswer: '6', correctAnswers: ['6'], explanation: '3 edges around the base plus 3 edges running up to the apex = 6 edges.' },
          { label: 'c) Vertices', correctAnswer: '4', correctAnswers: ['4'], explanation: '3 vertices around the base plus 1 vertex at the apex = 4 vertices.' },
        ] },
        { difficulty: 'Medium', question: 'How many edges does a triangular prism have?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'A triangular prism has 3 edges on each triangular end (3 + 3 = 6) plus 3 edges connecting the two ends: 6 + 3 = 9 edges.' },
        { difficulty: 'Medium', question: 'A shoebox is shaped like a rectangular prism. How many edges does the shoebox have?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A rectangular prism has 12 edges — 4 on the top, 4 on the bottom and 4 vertical edges joining them.' },
        { difficulty: 'Medium', question: 'A party hat is shaped like a cone. How many vertices does it have, and how many edges?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vertices', correctAnswer: '0', correctAnswers: ['0', 'none', 'no vertices'], explanation: 'A cone has no true vertices — its apex is a point but it is not formed by straight edges meeting, so it is not counted as a vertex.' },
          { label: 'b) Edges', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone has 1 curved edge — the circle where the flat base meets the curved surface.' },
        ] },
        { difficulty: 'Medium', question: 'How many circular flat faces does a cylinder have, compared to a cone?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cylinder', correctAnswer: '2', correctAnswers: ['2'], explanation: 'A cylinder has 2 circular flat faces, one at each end.' },
          { label: 'b) Cone', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone has only 1 circular flat face, at its base.' },
        ] },
        { difficulty: 'Medium', question: 'A globe is a model of a sphere. How many edges does a sphere have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'none', 'no edges'], explanation: 'A sphere has no flat faces at all, so there are no edges where faces could meet — it has 0 edges.' },
        { difficulty: 'Medium', question: 'Compare a triangular prism and a triangular pyramid. Explain how their number of faces is different and why.', answer: 'A triangular prism has 5 faces (2 triangular ends and 3 rectangular sides), while a triangular pyramid has only 4 faces (1 triangular base and 3 triangular sides). The prism has an extra face because it has two identical triangular ends joined by rectangles, whereas the pyramid only has one triangular base and its sides taper to a single point at the apex instead of a second base.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sort these objects into two groups — can stack and cannot stack easily: cylinder, sphere, cone, rectangular prism.', answer: 'Can stack: cylinder and rectangular prism, because they have flat faces on top and bottom that can support another object. Cannot stack easily: sphere (curved all over, nothing to balance on) and cone (comes to a point at the apex, so it is very unstable to stack on).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A toy company is designing building blocks. Which shapes would work best for stacking — cube, sphere, cone, cylinder? Explain your choice.', answer: 'The cube and cylinder work best for stacking because they both have flat faces on top and bottom that sit evenly on top of each other. The sphere would roll away and cannot stack because its whole surface is curved. The cone is unstable because it only has one flat face — its apex cannot support anything placed on top.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Thandi says: 'A rectangular prism and a cube are completely different shapes because a cube is a square and a rectangular prism is a rectangle.' Is Thandi correct? Explain using the properties of each 3D object.", answer: "Thandi is not quite correct. First, a cube and a rectangular prism are both 3D objects, not 2D shapes like a square or rectangle. More importantly, a cube is actually a special type of rectangular prism — it has 6 faces, 12 edges and 8 vertices just like a rectangular prism, but all of its faces happen to be equal squares instead of general rectangles. So they share the same face, edge and vertex counts; the only difference is that a cube's faces are all identical squares.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A student claims: 'Every 3D object with an apex is a pyramid.' Is this claim true? Use a cone as a counter-example in your explanation.", answer: 'This claim is false. A cone also has an apex — the point where its curved surface comes to a point — but a cone is not a pyramid. A pyramid is made of flat triangular faces and straight edges meeting at the apex, while a cone has a curved surface and no straight edges at all. So having an apex is not enough to make something a pyramid; the faces must also be flat and triangular.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A market stall sorts fruit into a cone-shaped paper bag and stacks tins shaped like cylinders behind it. If one cylinder tin has 2 edges and the cone bag has 1 edge, how many edges are there in total for 3 identical cylinder tins and 1 cone bag, and which shape contributes more edges overall?', answer: 'Each cylinder has 2 edges, so 3 cylinders contribute 3 × 2 = 6 edges. The cone bag contributes 1 edge. In total there are 6 + 1 = 7 edges. The cylinders contribute more edges overall (6 edges) compared to the single cone (1 edge).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A bakery packs a triangular-prism-shaped box of pastries and places a sphere-shaped orange on top for the display. Explain, using properties of faces, why the orange will not stay balanced on top of the box.', answer: 'The triangular prism box has flat rectangular and triangular faces, so its top surface is flat and could support a flat-faced object. However, a sphere has no flat faces at all — its entire surface is curved. With no flat area to make contact with the box, the round orange has nothing to rest evenly on, so it will roll off instead of staying balanced.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently name and describe every kind of 3D object.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A brick used for building a wall has 6 flat rectangular faces, and opposite faces are equal in pairs. What 3D object is it?', answer: 'rectangular prism', checkMode: 'auto', correctAnswer: 'rectangularprism', correctAnswers: ['rectangularprism', 'a rectangular prism'], explanation: 'A brick has 6 rectangular faces with opposite faces equal in pairs — this is a rectangular prism.' },
        { difficulty: 'Easy', question: 'A drum used in a school band is round, with straight sides and two flat circular ends. Name this 3D object.', answer: 'cylinder', checkMode: 'auto', correctAnswer: 'cylinder', correctAnswers: ['cylinder', 'a cylinder'], explanation: 'A drum has 2 flat circular faces joined by 1 curved surface — this is a cylinder.' },
        { difficulty: 'Easy', question: "A wizard's hat has a circular brim area and narrows to a sharp point. Name this 3D object.", answer: 'cone', checkMode: 'auto', correctAnswer: 'cone', correctAnswers: ['cone', 'a cone'], explanation: 'A cone has 1 flat circular face, 1 curved surface and comes to a point at the apex.' },
        { difficulty: 'Easy', question: 'A Rubik\'s cube has 6 identical square faces that can twist. What 3D object is it?', answer: 'cube', checkMode: 'auto', correctAnswer: 'cube', correctAnswers: ['cube', 'a cube'], explanation: 'A Rubik\'s cube has 6 identical square faces, 12 edges and 8 vertices — it is a cube.' },
        { difficulty: 'Easy', question: 'How many flat faces does a sphere have?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'none', 'no flat faces'], explanation: 'A sphere is perfectly round with only a curved surface, so it has 0 flat faces.' },
        { difficulty: 'Easy-Medium', question: 'How many edges does a square pyramid have?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A square pyramid has 4 edges around its square base plus 4 edges running up to the apex: 4 + 4 = 8 edges.' },
        { difficulty: 'Medium', question: 'A rectangular prism has how many faces, edges and vertices?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Faces', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A rectangular prism has 6 rectangular faces.' },
          { label: 'b) Edges', correctAnswer: '12', correctAnswers: ['12'], explanation: 'A rectangular prism has 12 edges — 4 on the top, 4 on the bottom and 4 vertical edges.' },
          { label: 'c) Vertices', correctAnswer: '8', correctAnswers: ['8'], explanation: 'A rectangular prism has 8 vertices — 4 on the top face and 4 on the bottom face.' },
        ] },
        { difficulty: 'Medium', question: 'A square pyramid model has how many vertices, and how many of them are the apex?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total vertices', correctAnswer: '5', correctAnswers: ['5'], explanation: 'A square pyramid has 4 vertices around the square base plus 1 apex: 4 + 1 = 5 vertices.' },
          { label: 'b) Apex vertices', correctAnswer: '1', correctAnswers: ['1'], explanation: 'There is exactly 1 apex — the single point where all 4 triangular faces meet.' },
        ] },
        { difficulty: 'Medium', question: 'How many faces does a triangular pyramid have in total, counting its base?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'A triangular pyramid has 1 triangular base plus 3 triangular side faces: 1 + 3 = 4 faces.' },
        { difficulty: 'Medium', question: 'A chocolate box shaped like a triangular prism has how many vertices?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'A triangular prism has 3 vertices on each triangular end: 3 + 3 = 6 vertices.' },
        { difficulty: 'Medium', question: 'A birthday party hat (a cone) has how many edges in total?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone has just 1 curved edge — the circle where its flat circular base meets the curved surface running up to the apex.' },
        { difficulty: 'Medium', question: 'A tin of paint (a cylinder) and an ice-cream cone are compared. How many curved surfaces does each object have?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cylinder', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cylinder has exactly 1 curved surface joining its two circular faces.' },
          { label: 'b) Cone', correctAnswer: '1', correctAnswers: ['1'], explanation: 'A cone also has exactly 1 curved surface sloping from its base to the apex.' },
        ] },
        { difficulty: 'Medium', question: 'A basketball is shaped like a sphere. How many vertices and how many edges does it have?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vertices', correctAnswer: '0', correctAnswers: ['0', 'none'], explanation: 'A sphere has no flat faces or straight edges, so it has 0 vertices.' },
          { label: 'b) Edges', correctAnswer: '0', correctAnswers: ['0', 'none'], explanation: 'A sphere has no flat faces meeting anywhere, so it has 0 edges.' },
        ] },
        { difficulty: 'Medium', question: 'Compare a cone and a square pyramid. Explain what they have in common and what makes them different.', answer: 'Both a cone and a square pyramid come to a single point at the top called the apex, and both have exactly one base. However, a square pyramid is made entirely of flat faces (1 square base and 4 flat triangular sides) joined by straight edges, while a cone has a curved surface joining its 1 circular base to the apex, with no straight edges at all.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sort these shop items into can roll and cannot roll: a tin (cylinder), a cereal box (rectangular prism), a ball (sphere), a tent shape (triangular prism).', answer: 'Can roll: the tin (cylinder) and the ball (sphere), because both have a curved surface. Cannot roll: the cereal box (rectangular prism) and the tent shape (triangular prism), because both are made only of flat faces.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A market vendor wants to display fruit. Would a sphere-shaped melon or a cone-shaped paper packet be easier to stack in a pile? Explain your reasoning using their faces.', answer: 'The cone-shaped paper packet would be slightly easier to place down (it has 1 flat circular face it can rest on), but it still cannot be stacked on top of another cone because its apex is a single point. The sphere-shaped melon has no flat faces at all, so it cannot be stacked or rested against anything without rolling away. Overall, neither stacks well, but the cone can at least stand upright on its flat base, while the sphere cannot rest still on its own.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Bongani claims: 'A triangular prism has more vertices than a square pyramid, so it must also have more faces.' Is Bongani correct? Use the actual face and vertex counts to explain.", answer: 'Bongani is only half right. A triangular prism does have more vertices (6) than a square pyramid (5), so the first part is true. However, the second part is false: a triangular prism has 5 faces, and a square pyramid also has 5 faces — they are equal, not different. Having more vertices does not automatically mean a shape has more faces.', checkMode: 'self' },
        { difficulty: 'Hard', question: "A student says: 'A cylinder cannot be a prism because prisms only have flat faces and a cylinder has a curved surface.' Is this statement correct? Explain using the definition of a prism.", answer: 'This statement is correct. A prism, by definition, is a 3D object with two identical flat bases and flat rectangular side faces joined by straight edges. A cylinder has 2 flat circular bases, but instead of flat rectangular sides it has 1 continuous curved surface with no straight edges connecting the bases. Because a true prism must have all flat faces, a cylinder does not meet the definition of a prism, even though it does have two identical flat ends like a prism does.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A factory packs 2 square pyramids and 1 triangular pyramid into a box for a geometry kit. What is the total number of vertices in the box, and how many of those vertices are apex points?', answer: 'Each square pyramid has 5 vertices, so 2 square pyramids contribute 2 × 5 = 10 vertices. The triangular pyramid has 4 vertices, contributing 4 more. In total there are 10 + 4 = 14 vertices in the box. Of these, each pyramid contributes exactly 1 apex vertex, so there are 2 + 1 = 3 apex points in total.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A construction worker is choosing a shape for a water tank: a cylinder or a cone, both open at one flat circular face for filling. Explain, using the number of flat faces and curved surfaces of each shape, why the cylinder is the more practical choice for storing a large amount of water.', answer: 'A cylinder has 2 flat circular faces of equal size joined by 1 curved surface, giving it the same width from top to bottom — this means it holds a large, evenly distributed volume of water and stays stable on its flat base. A cone has only 1 flat circular face and narrows to a single point at the apex, so most of its volume is concentrated near the wide opening and it becomes unstable and impractical to store large amounts of water as it tapers to nothing at the bottom (or top, if inverted). The cylinder\'s two equal flat faces make it far more practical for consistent water storage.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply your knowledge of 3D objects to real-world situations with confidence.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Outstanding! A perfect score — you have completely mastered 3D objects for Grade 5. Keep it up!' },
    { minScore: 4, message: 'Excellent work! You have a very strong grasp of 3D objects. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 2, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
