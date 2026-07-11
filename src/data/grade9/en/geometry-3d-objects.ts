import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of 3D objects roles) ────────────────────────────
// spheres / curved solids                → blue   (#2563eb)
// cylinders / rectangular wrap           → green  (#16a34a)
// Platonic solids / flat-faced solids    → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 3D Objects',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING PLATONIC SOLIDS AND INTRODUCING SPHERES AND CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids-spheres-cylinders',
      title: 'Revising Platonic Solids and Introducing Spheres and Cylinders',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">We revise the properties of the 5 ${or('Platonic solids')} (tetrahedron, cube, octahedron, dodecahedron, icosahedron), then learn the properties of ${bl('spheres')} (perfectly round, one curved surface, no faces/edges/vertices) and ${gr('cylinders')} (2 circular flat faces, 1 curved surface, 2 edges, no vertices).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('spheres')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cylinders')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Platonic solids')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The 5 Platonic solids</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Tetrahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">4 equilateral triangular faces, 4 vertices, 6 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Cube</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">6 square faces, 8 vertices, 12 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Octahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">8 equilateral triangular faces, 6 vertices, 12 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dodecahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 regular pentagonal faces, 20 vertices, 30 edges.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Icosahedron</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">20 equilateral triangular faces, 12 vertices, 30 edges.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spheres and cylinders</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Perfectly round. 1 curved surface. Every point on the surface is the same distance from the centre. No flat faces, no edges, no vertices.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">2 circular flat faces (top and bottom). 1 curved surface. 2 circular edges. No vertices.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why spheres and cylinders are not Platonic solids</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Platonic solids')} require all flat polygon faces that are identical regular shapes. Both ${bl('spheres')} and ${gr('cylinders')} have curved surfaces, which immediately disqualifies them from being Platonic solids.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the properties of a sphere.',
          answer: `A ${bl('sphere')} has 1 curved surface, no flat faces, no edges and no vertices.`,
          steps: [
            `A ${bl('sphere')} has <strong>1 curved surface</strong>, with every point on its surface the same distance from the centre.`,
            `It has <strong>no flat faces</strong>, <strong>no edges</strong> and <strong>no vertices</strong>.`,
          ],
        },
        {
          question: 'Sipho compares a cylinder to a Platonic solid. Why is a cylinder not classified as a Platonic solid?',
          answer: `A ${gr('cylinder')} is not a ${or('Platonic solid')} because it has curved surfaces.`,
          steps: [
            `${or('Platonic solids')} must have all flat polygon faces that are identical regular shapes.`,
            `A ${gr('cylinder')} has curved surfaces, which disqualifies it from being a ${or('Platonic solid')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing the 5 Platonic solids and comparing them to spheres and cylinders highlighting curved surfaces" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a sphere and a cylinder shown alongside the 5 Platonic solids, highlighting the curved surfaces that distinguish them" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS INCLUDING CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-cylinders',
      title: 'Building 3D Models Including Cylinders',
      icon: '🔵',
      explanation:
        `<p style="margin-bottom:16px;">We use nets to create models of geometric solids, now including ${gr('cylinders')}. A ${gr('cylinder')}'s net consists of ${bl('2 circles')} (the top and bottom) and ${gr('1 rectangle')} (which wraps around to form the curved surface), where the rectangle's width equals the circle's ${or('circumference')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('circular ends')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rectangular wrap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('circumference')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parts of a cylinder's net</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Two circles (top and bottom)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Both ${bl('circles')} are identical. Their radius equals the radius of the cylinder.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rectangle (curved surface)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('rectangle')}'s length = the ${or('circumference')} of the circles (2πr). Its width = the height of the cylinder.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Key formula</p>` +
        `<p style="margin:0;color:#9a3412;">${or('Circumference')} = 2 × π × r &nbsp;(use π ≈ 3.14). When this rectangle wraps around, its length must exactly match the circle's ${or('circumference')} so the edges align.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Describe the net of a cylinder.',
          answer: `The net has ${bl('2 identical circles')} (top and bottom) and ${gr('1 rectangle')} whose length equals the ${or('circumference')} of the circles.`,
          steps: [
            `The net has ${bl('2 identical circles')} (top and bottom) and ${gr('1 rectangle')}.`,
            `The ${gr('rectangle')}'s length equals the ${or('circumference')} of the circles, and its width equals the height of the cylinder.`,
            `See the diagram below showing this net flat and folded.`,
          ],
        },
        {
          question: 'Lerato has a cylinder with radius 4 cm and height 10 cm. Find the dimensions of the rectangular part of its net.',
          answer: `${gr('Rectangle')} width = 10 cm; length = ${or('circumference')} = 25.12 cm`,
          steps: [
            `${gr('Rectangle')} width = height of cylinder = <strong>10 cm</strong>.`,
            `${gr('Rectangle')} length = ${or('circumference')} = 2 × π × r = 2 × 3.14 × 4 = <strong>25.12 cm</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the net of a cylinder — two circles and a rectangle — and how it folds to form the 3D solid" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a cylinder\'s net shown flat — two circles and a rectangle — with an arrow showing how the rectangle wraps around to connect the two circles when folded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING ALL 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Comparing and Classifying All 3D Objects by Properties',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">We classify and compare all 3D objects covered so far — ${or('Platonic solids')}, prisms, pyramids, ${bl('spheres')} and ${gr('cylinders')} — by examining their faces (flat or curved), edges, vertices, and whether Euler's formula applies (it only applies to solids with all flat faces, not those with curved surfaces).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('flat-faced solids')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('curved solids')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('comparison points')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler's formula: F + V − E = 2</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Applies to ${bl('flat-faced solids')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All ${bl('polyhedra')} (prisms, pyramids, Platonic solids) with only flat faces have well-defined faces, edges and vertices — Euler's formula holds.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Does NOT apply to ${or('curved solids')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Spheres')} and ${or('cylinders')} have curved surfaces and lack clearly defined vertices, so Euler's formula does not apply in the traditional sense.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Classification summary</p>` +
        `<p style="margin:0;color:#14532d;">Use ${gr('three comparison points')} when classifying: (1) Are the faces flat or curved? (2) How many edges and vertices? (3) Does Euler's formula apply? These distinctions separate polyhedra from curved solids.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Does Euler\'s formula apply to a cylinder? Explain.',
          answer: `No — Euler's formula (F + V − E = 2) does not apply to a ${gr('cylinder')}.`,
          steps: [
            `Euler's formula (F + V − E = 2) only applies to ${bl('polyhedra')} with flat faces and well-defined vertices.`,
            `A ${gr('cylinder')} has ${or('curved surfaces')} and no vertices, so the formula doesn't apply in the same way.`,
          ],
        },
        {
          question: 'Thabo compares a sphere and a cube. List two key differences.',
          answer: `A ${or('sphere')} has 1 curved surface with no edges or vertices. A ${bl('cube')} has 6 flat square faces, 12 edges and 8 vertices.`,
          steps: [
            `A ${or('sphere')} has 1 curved surface with no edges or vertices.`,
            `A ${bl('cube')} has 6 flat square faces, 12 edges and 8 vertices.`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing and classifying 3D objects by faces edges and vertices and explaining when Euler\'s formula applies" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a comparison table showing Platonic solids, prisms, pyramids, spheres and cylinders side by side with their faces edges vertices and Euler formula applicability" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many curved surfaces does a sphere have?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many flat circular faces does a cylinder have?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho says a sphere has edges. Is he correct? Explain.',
      answer: 'No — a sphere has no edges, no vertices and no flat faces; it has only 1 continuous curved surface.',
      checkMode: 'self',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Describe the net of a cylinder.',
      answer: 'It consists of 2 identical circles (top and bottom) and 1 rectangle that wraps around to form the curved side.',
      checkMode: 'self',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A cylinder has radius 5 cm and height 12 cm. Find the dimensions of the rectangular part of its net (to 2 decimal places).',
      answer: 'Width = height = 12 cm. Length = circumference = 2 × 3.14 × 5 = 31.4 cm.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Does Euler\'s formula apply to a sphere?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Compare a cube and a sphere in terms of vertices.',
      answer: 'a cube has 8 vertices, a sphere has 0 vertices',
      checkMode: 'auto',
      correctAnswer: 'a cube has 8 vertices, a sphere has 0 vertices',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says a cylinder is technically a type of prism. Is this generally accurate in CAPS classification? Explain.',
      answer: 'No — although a cylinder has some similarities to a prism (two parallel circular ends), it is classified separately because it has curved surfaces, unlike true prisms which have flat polygon faces.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'How many edges does a cylinder have?',
      answer: '2',
      checkMode: 'auto',
      correctAnswer: '2',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo compares an icosahedron (20 faces, 12 vertices, 30 edges) using Euler\'s formula. Verify it applies.',
      answer: 'F + V − E = 20 + 12 − 30 = 2. Euler\'s formula is verified for this Platonic solid.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A cylinder has radius 3 cm and height 8 cm. Find the circumference of its circular ends (to 2 decimal places).',
      answer: '18.84cm',
      checkMode: 'auto',
      correctAnswer: '18.84cm',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle says a cone and a cylinder have the same number of curved surfaces. Is she correct? Explain.',
      answer: 'Yes — both have exactly 1 curved surface, though their overall shapes differ (a cone tapers to a point, a cylinder does not).',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all 3D objects with curved surfaces cannot follow Euler\'s formula. Is he fully correct? Explain.',
      answer: 'Generally yes for simple curved solids like spheres and cylinders, since Euler\'s formula relies on clearly defined flat faces, edges and vertices, which curved solids lack in the traditional sense.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the dimensions of the net rectangle for a cylinder with diameter 14 cm and height 20 cm (to 2 decimal places).',
      answer: 'Radius = 7 cm. Width = height = 20 cm. Length = circumference = 2 × 3.14 × 7 = 43.96 cm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato compares a tetrahedron and a sphere, listing differences in faces, edges and vertices.',
      answer: 'A tetrahedron has 4 flat triangular faces, 6 edges and 4 vertices. A sphere has 1 curved surface, 0 edges and 0 vertices.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered geometry of 3D objects.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Naming a solid from a word description of its faces
    // Block 2 (3-6):   Counting faces / vertices / edges of a named solid
    // Block 3 (7-10):  Euler's formula — verify or solve for a missing value
    // Block 4 (11-13): Net identification (NEEDS DIAGRAM — flagged below)
    // Block 5 (14-16): Comparing/classifying solids by properties
    // Block 6 (17-19): Multi-step Euler's formula word problems / error-spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Naming a solid from a description (Easy)
        { difficulty: 'Easy', question: 'A solid has 6 identical square faces, 8 vertices and 12 edges. What is this solid called?', checkMode: 'auto', correctAnswer: 'cube', correctAnswers: ['cube', 'a cube'], answer: 'cube', explanation: '6 square faces, 8 vertices, 12 edges are the defining properties of a cube.' },
        { difficulty: 'Easy', question: 'A solid has 2 identical triangular faces and 3 rectangular faces. What type of solid is this?', checkMode: 'auto', correctAnswer: 'triangular prism', correctAnswers: ['triangular prism', 'a triangular prism'], answer: 'triangular prism', explanation: 'Two identical (congruent) triangular faces connected by three rectangles form a triangular prism.' },
        { difficulty: 'Easy', question: 'A solid has 1 square base and 4 triangular faces meeting at a single apex. What is this solid called?', checkMode: 'auto', correctAnswer: 'square pyramid', correctAnswers: ['square pyramid', 'a square pyramid'], answer: 'square pyramid', explanation: 'One square base plus 4 triangles meeting at an apex is the definition of a square pyramid.' },

        // Block 2 — Counting faces/vertices/edges of a named solid (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'How many vertices does a triangular prism have?', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'A triangular prism has two triangular ends, each with 3 vertices: 3 + 3 = 6 vertices.' },
        { difficulty: 'Easy-Medium', question: 'How many edges does a square pyramid have?', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'A square pyramid has 4 base edges (around the square) plus 4 slanted edges (up to the apex): 4 + 4 = 8 edges.' },
        { difficulty: 'Easy-Medium', question: 'How many faces does a hexagonal prism have?', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'A hexagonal prism has 2 hexagonal ends plus 6 rectangular side faces: 2 + 6 = 8 faces.' },
        { difficulty: 'Easy-Medium', question: 'How many vertices does an octahedron have?', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'An octahedron (8 triangular faces) has 6 vertices — this is one of the 5 Platonic solids.' },

        // Block 3 — Euler's formula: verify or solve for a missing value (Medium)
        { difficulty: 'Medium', question: 'A solid has 5 faces and 6 vertices. Use Euler\'s formula (F + V − E = 2) to find the number of edges.', checkMode: 'auto', correctAnswer: '9', answer: '9', explanation: 'F + V − E = 2, so 5 + 6 − E = 2. This gives 11 − E = 2, so E = 9.' },
        { difficulty: 'Medium', question: 'A solid has 8 vertices and 12 edges. Use Euler\'s formula to find the number of faces.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'F + V − E = 2, so F + 8 − 12 = 2. This gives F − 4 = 2, so F = 6.' },
        { difficulty: 'Medium', question: 'A dodecahedron has 12 faces and 30 edges. Use Euler\'s formula to find the number of vertices.', checkMode: 'auto', correctAnswer: '20', answer: '20', explanation: 'F + V − E = 2, so 12 + V − 30 = 2. This gives V − 18 = 2, so V = 20.' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for a triangular prism, which has 5 faces, 6 vertices and 9 edges.', answer: 'F + V − E = 5 + 6 − 9 = 2. Euler\'s formula holds for the triangular prism.', checkMode: 'self' },

        // Block 4 — Net identification (Medium-Hard) — NEEDS DIAGRAM, self-contained text
        { difficulty: 'Medium-Hard', question: 'A net consists of 6 identical squares arranged as shown, joined edge to edge in a cross-like layout. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'cube', correctAnswers: ['cube', 'a cube'], answer: 'cube', explanation: 'A net of 6 identical squares folds up into a cube — 6 square faces, matching F = 6.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="76" y="8" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="76" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="110" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="42" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 2 triangles and 3 rectangles arranged as shown, where the two triangles form opposite ends and the 3 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'triangular prism', correctAnswers: ['triangular prism', 'a triangular prism'], answer: 'triangular prism', explanation: 'A net with 2 triangular ends and 3 rectangular side faces folds up into a triangular prism.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="100" y="70" width="30" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="40,70 40,120 8,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="130,70 130,120 162,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 pentagon with 5 triangles attached to its sides, arranged as shown so each triangle shares one edge with the pentagon. How many faces will the folded 3D solid have?', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'The net folds into a pentagonal pyramid: 1 pentagonal base + 5 triangular faces = 6 faces in total.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,66 142.3,89.5 130,127.5 90,127.5 77.7,89.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,66 142.3,89.5 143.8,53.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="142.3,89.5 130,127.5 164.7,117.8" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="130,127.5 90,127.5 110,157.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="90,127.5 77.7,89.5 55.3,117.8" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="77.7,89.5 110,66 76.2,53.5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Block 5 — Comparing/classifying solids by properties (Hard)
        { difficulty: 'Hard', question: 'Thabo compares a cylinder and a hexagonal prism. Both have 2 flat parallel end faces. Explain why Euler\'s formula applies to one but not the other.', answer: 'Euler\'s formula applies to the hexagonal prism because all of its faces are flat polygons with clearly defined edges and vertices. It does not apply to the cylinder because its curved surface has no straight edges or vertices in the traditional sense.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a square pyramid and a rectangular prism in terms of their number of faces.', checkMode: 'auto', correctAnswer: 'a square pyramid has 5 faces, a rectangular prism has 6 faces', correctAnswers: ['a square pyramid has 5 faces, a rectangular prism has 6 faces', 'square pyramid has 5 faces, rectangular prism has 6 faces'], answer: 'a square pyramid has 5 faces, a rectangular prism has 6 faces', explanation: 'A square pyramid has 1 base + 4 triangles = 5 faces. A rectangular prism has 6 rectangular faces.' },
        { difficulty: 'Hard', question: 'Amahle says all prisms and all pyramids satisfy Euler\'s formula, no matter how many sides the base has. Is she correct? Explain using a general reason, not just one example.', answer: 'Yes — all prisms and pyramids are polyhedra made entirely of flat polygon faces with well-defined edges and vertices, so Euler\'s formula (F + V − E = 2) holds for any prism or pyramid, regardless of how many sides its base has.', checkMode: 'self' },

        // Block 6 — Multi-step Euler's formula word problems / error-spotting (Hard)
        { difficulty: 'Hard', question: 'A solid has 6 faces and its number of edges is twice its number of faces. Use Euler\'s formula to find its number of vertices, then name a solid that matches these values.', answer: 'Edges = 2 × 6 = 12. Euler\'s formula: F + V − E = 2, so 6 + V − 12 = 2, giving V = 8. A solid with 6 faces, 8 vertices and 12 edges matches a cube or any rectangular prism.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho says a solid can have 7 faces, 9 vertices and 12 edges. Check whether this is possible using Euler\'s formula.', answer: 'Check: F + V − E = 7 + 9 − 12 = 4, which does not equal 2. Since Euler\'s formula fails, this combination of faces, vertices and edges is not possible for a polyhedron.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A pentagonal pyramid has 6 faces and 6 vertices. Use Euler\'s formula to find its number of edges, then confirm this matches counting base edges plus slant edges directly.', answer: 'Euler\'s formula: F + V − E = 2, so 6 + 6 − E = 2, giving E = 10. Checking directly: the pentagonal base has 5 edges, plus 5 slant edges from each base vertex to the apex, giving 5 + 5 = 10 edges. Both methods agree: 10 edges.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered classifying 3D solids and applying Euler\'s formula.' },
        { minScore: 15, message: 'Great work! Review any missed questions on nets or Euler\'s formula and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on faces, edges and vertices, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Naming a solid from a description (Easy)
        { difficulty: 'Easy', question: 'A solid has 4 identical equilateral triangular faces, 4 vertices and 6 edges. What is this solid called?', checkMode: 'auto', correctAnswer: 'tetrahedron', correctAnswers: ['tetrahedron', 'a tetrahedron', 'triangular pyramid', 'a triangular pyramid'], answer: 'tetrahedron', explanation: '4 equilateral triangular faces, 4 vertices, 6 edges are the defining properties of a tetrahedron (also called a triangular pyramid).' },
        { difficulty: 'Easy', question: 'A solid has 2 identical pentagonal faces and 5 rectangular faces. What type of solid is this?', checkMode: 'auto', correctAnswer: 'pentagonal prism', correctAnswers: ['pentagonal prism', 'a pentagonal prism'], answer: 'pentagonal prism', explanation: 'Two identical (congruent) pentagonal faces connected by five rectangles form a pentagonal prism.' },
        { difficulty: 'Easy', question: 'A solid has 1 triangular base and 3 more triangular faces meeting at a single apex. What is this solid called?', checkMode: 'auto', correctAnswer: 'triangular pyramid', correctAnswers: ['triangular pyramid', 'a triangular pyramid', 'tetrahedron', 'a tetrahedron'], answer: 'triangular pyramid', explanation: 'One triangular base plus 3 more triangles meeting at an apex is the definition of a triangular pyramid.' },

        // Block 2 — Counting faces/vertices/edges of a named solid (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'How many vertices does a rectangular prism have?', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: 'A rectangular prism has two rectangular ends, each with 4 vertices: 4 + 4 = 8 vertices.' },
        { difficulty: 'Easy-Medium', question: 'How many edges does a hexagonal pyramid have?', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'A hexagonal pyramid has 6 base edges (around the hexagon) plus 6 slanted edges (up to the apex): 6 + 6 = 12 edges.' },
        { difficulty: 'Easy-Medium', question: 'How many faces does a pentagonal prism have?', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'A pentagonal prism has 2 pentagonal ends plus 5 rectangular side faces: 2 + 5 = 7 faces.' },
        { difficulty: 'Easy-Medium', question: 'How many vertices does an icosahedron have?', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'An icosahedron (20 triangular faces) has 12 vertices — this is one of the 5 Platonic solids.' },

        // Block 3 — Euler's formula: verify or solve for a missing value (Medium)
        { difficulty: 'Medium', question: 'A solid has 7 faces and 10 vertices. Use Euler\'s formula (F + V − E = 2) to find the number of edges.', checkMode: 'auto', correctAnswer: '15', answer: '15', explanation: 'F + V − E = 2, so 7 + 10 − E = 2. This gives 17 − E = 2, so E = 15.' },
        { difficulty: 'Medium', question: 'A solid has 5 vertices and 8 edges. Use Euler\'s formula to find the number of faces.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'F + V − E = 2, so F + 5 − 8 = 2. This gives F − 3 = 2, so F = 5.' },
        { difficulty: 'Medium', question: 'An icosahedron has 20 faces and 30 edges. Use Euler\'s formula to find the number of vertices.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'F + V − E = 2, so 20 + V − 30 = 2. This gives V − 10 = 2, so V = 12.' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for a square pyramid, which has 5 faces, 5 vertices and 8 edges.', answer: 'F + V − E = 5 + 5 − 8 = 2. Euler\'s formula holds for the square pyramid.', checkMode: 'self' },

        // Block 4 — Net identification (Medium-Hard) — NEEDS DIAGRAM, self-contained text
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 square with 4 triangles attached to its sides, arranged as shown so each triangle shares one edge with the square. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'square pyramid', correctAnswers: ['square pyramid', 'a square pyramid'], answer: 'square pyramid', explanation: 'A net with a square base and 4 triangles arranged around it folds up into a square pyramid.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="85" y="70" width="50" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,70 135,70 110,35" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,120 135,120 110,155" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,70 85,120 50,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,70 135,120 170,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 2 hexagons and 6 rectangles arranged as shown, where the two hexagons form opposite ends and the 6 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'hexagonal prism', correctAnswers: ['hexagonal prism', 'a hexagonal prism'], answer: 'hexagonal prism', explanation: 'A net with 2 hexagonal ends and 6 rectangular side faces folds up into a hexagonal prism.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="53,82 30.5,69 8,82 8,108 30.5,121 53,108" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="53" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="72" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="91" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="129" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="148" y="82" width="19" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="167,82 189.5,69 212,82 212,108 189.5,121 167,108" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 4 identical triangles arranged as shown, joined edge to edge with 1 triangle in the centre and the other 3 attached to its sides. How many faces will the folded 3D solid have?', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'The net folds into a tetrahedron (triangular pyramid): all 4 triangles become the 4 faces of the solid.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,60 75,121 145,121" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="75,121 145,121 110,182" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,60 75,121 41,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,60 145,121 179,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Block 5 — Comparing/classifying solids by properties (Hard)
        { difficulty: 'Hard', question: 'Lerato compares a sphere and a dodecahedron. Both are sometimes described as "round-looking" solids. Explain why Euler\'s formula applies to one but not the other.', answer: 'Euler\'s formula applies to the dodecahedron because all of its faces are flat pentagons with clearly defined edges and vertices. It does not apply to the sphere because its entire surface is curved, with no flat faces, straight edges or vertices.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a triangular pyramid and a triangular prism in terms of their number of vertices.', checkMode: 'auto', correctAnswer: 'a triangular pyramid has 4 vertices, a triangular prism has 6 vertices', correctAnswers: ['a triangular pyramid has 4 vertices, a triangular prism has 6 vertices', 'triangular pyramid has 4 vertices, triangular prism has 6 vertices'], answer: 'a triangular pyramid has 4 vertices, a triangular prism has 6 vertices', explanation: 'A triangular pyramid has 4 vertices (3 base + 1 apex). A triangular prism has 6 vertices (3 + 3 on its two triangular ends).' },
        { difficulty: 'Hard', question: 'Kagiso says all Platonic solids satisfy Euler\'s formula because they are all made of identical regular flat faces. Is he correct? Explain using a general reason.', answer: 'Yes — every Platonic solid is a polyhedron with only flat polygon faces and clearly defined edges and vertices, so Euler\'s formula (F + V − E = 2) holds for all 5 Platonic solids, regardless of which regular polygon makes up their faces.', checkMode: 'self' },

        // Block 6 — Multi-step Euler's formula word problems / error-spotting (Hard)
        { difficulty: 'Hard', question: 'A solid has 8 faces and 12 edges. Use Euler\'s formula to find its number of vertices, then name a solid that matches these values.', answer: 'Euler\'s formula: F + V − E = 2, so 8 + V − 12 = 2, giving V = 6. A solid with 8 faces, 6 vertices and 12 edges matches an octahedron.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Naledi says a solid can have 6 faces, 6 vertices and 10 edges. Check whether this is possible using Euler\'s formula.', answer: 'Check: F + V − E = 6 + 6 − 10 = 2, which equals 2. Since Euler\'s formula holds, this combination of faces, vertices and edges is possible for a polyhedron (for example, a pentagonal pyramid).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A hexagonal pyramid has 7 faces and 7 vertices. Use Euler\'s formula to find its number of edges, then confirm this matches counting base edges plus slant edges directly.', answer: 'Euler\'s formula: F + V − E = 2, so 7 + 7 − E = 2, giving E = 12. Checking directly: the hexagonal base has 6 edges, plus 6 slant edges from each base vertex to the apex, giving 6 + 6 = 12 edges. Both methods agree: 12 edges.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered classifying 3D solids and applying Euler\'s formula.' },
        { minScore: 15, message: 'Great work! Review any missed questions on nets or Euler\'s formula and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on faces, edges and vertices, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Naming a solid from a description (Easy)
        { difficulty: 'Easy', question: 'A solid has 8 identical equilateral triangular faces, 6 vertices and 12 edges. What is this solid called?', checkMode: 'auto', correctAnswer: 'octahedron', correctAnswers: ['octahedron', 'an octahedron'], answer: 'octahedron', explanation: '8 equilateral triangular faces, 6 vertices, 12 edges are the defining properties of an octahedron.' },
        { difficulty: 'Easy', question: 'A solid has 2 identical hexagonal faces and 6 rectangular faces. What type of solid is this?', checkMode: 'auto', correctAnswer: 'hexagonal prism', correctAnswers: ['hexagonal prism', 'a hexagonal prism'], answer: 'hexagonal prism', explanation: 'Two identical (congruent) hexagonal faces connected by six rectangles form a hexagonal prism.' },
        { difficulty: 'Easy', question: 'A solid has 1 pentagonal base and 5 triangular faces meeting at a single apex. What is this solid called?', checkMode: 'auto', correctAnswer: 'pentagonal pyramid', correctAnswers: ['pentagonal pyramid', 'a pentagonal pyramid'], answer: 'pentagonal pyramid', explanation: 'One pentagonal base plus 5 triangles meeting at an apex is the definition of a pentagonal pyramid.' },

        // Block 2 — Counting faces/vertices/edges of a named solid (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'How many vertices does a pentagonal prism have?', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'A pentagonal prism has two pentagonal ends, each with 5 vertices: 5 + 5 = 10 vertices.' },
        { difficulty: 'Easy-Medium', question: 'How many edges does a triangular pyramid have?', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'A triangular pyramid has 3 base edges (around the triangle) plus 3 slanted edges (up to the apex): 3 + 3 = 6 edges.' },
        { difficulty: 'Easy-Medium', question: 'How many faces does a rectangular prism have?', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'A rectangular prism has 6 rectangular faces in total (top, bottom and 4 sides).' },
        { difficulty: 'Easy-Medium', question: 'How many vertices does a dodecahedron have?', checkMode: 'auto', correctAnswer: '20', answer: '20', explanation: 'A dodecahedron (12 pentagonal faces) has 20 vertices — this is one of the 5 Platonic solids.' },

        // Block 3 — Euler's formula: verify or solve for a missing value (Medium)
        { difficulty: 'Medium', question: 'A solid has 6 faces and 8 vertices. Use Euler\'s formula (F + V − E = 2) to find the number of edges.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'F + V − E = 2, so 6 + 8 − E = 2. This gives 14 − E = 2, so E = 12.' },
        { difficulty: 'Medium', question: 'A solid has 6 vertices and 9 edges. Use Euler\'s formula to find the number of faces.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'F + V − E = 2, so F + 6 − 9 = 2. This gives F − 3 = 2, so F = 5.' },
        { difficulty: 'Medium', question: 'An octahedron has 8 faces and 12 edges. Use Euler\'s formula to find the number of vertices.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'F + V − E = 2, so 8 + V − 12 = 2. This gives V − 4 = 2, so V = 6.' },
        { difficulty: 'Medium', question: 'Verify Euler\'s formula for a hexagonal prism, which has 8 faces, 12 vertices and 18 edges.', answer: 'F + V − E = 8 + 12 − 18 = 2. Euler\'s formula holds for the hexagonal prism.', checkMode: 'self' },

        // Block 4 — Net identification (Medium-Hard) — NEEDS DIAGRAM, self-contained text
        { difficulty: 'Medium-Hard', question: 'A net consists of three pairs of matching rectangles arranged as shown, joined edge to edge to fold into a closed box. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'rectangular prism', correctAnswers: ['rectangular prism', 'a rectangular prism', 'cuboid', 'a cuboid'], answer: 'rectangular prism', explanation: 'A net with three pairs of matching rectangles folds up into a rectangular prism (cuboid).' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="60" width="26" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="60" width="40" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="96" y="60" width="26" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="122" y="60" width="40" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="34" width="40" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="56" y="94" width="40" height="26" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 2 pentagons and 5 rectangles arranged as shown, where the two pentagons form opposite ends and the 5 rectangles form a connected strip joining them edge to edge. Which solid does this net fold into?', checkMode: 'auto', correctAnswer: 'pentagonal prism', correctAnswers: ['pentagonal prism', 'a pentagonal prism'], answer: 'pentagonal prism', explanation: 'A net with 2 pentagonal ends and 5 rectangular side faces folds up into a pentagonal prism.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,80 26.5,70.7 8.8,95 26.5,119.3 55,110" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="55" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="77" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="99" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="121" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="143" y="80" width="22" height="30" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="165,80 193.5,70.7 211.2,95 193.5,119.3 165,110" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'A net consists of 1 hexagon with 6 triangles attached to its sides, arranged as shown so each triangle shares one edge with the hexagon. How many faces will the folded 3D solid have?', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: 'The net folds into a hexagonal pyramid: 1 hexagonal base + 6 triangular faces = 7 faces in total.' , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="142,100 126,127.7 94,127.7 78,100 94,72.3 126,72.3" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="142,100 126,127.7 156.5,126.9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="126,127.7 94,127.7 110,153.7" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="94,127.7 78,100 63.5,126.9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="78,100 94,72.3 63.5,73.1" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="94,72.3 126,72.3 110,46.3" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><polygon points="126,72.3 142,100 156.5,73.1" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/></svg>' },

        // Block 5 — Comparing/classifying solids by properties (Hard)
        { difficulty: 'Hard', question: 'Zanele compares a cone and a triangular pyramid. Both taper from a base to a single point. Explain why Euler\'s formula applies to one but not the other.', answer: 'Euler\'s formula applies to the triangular pyramid because all of its faces are flat triangles with clearly defined edges and vertices. It does not apply to the cone because it has a curved surface with no straight edges, and its apex is not a true polyhedron vertex in the traditional sense.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a pentagonal pyramid and a pentagonal prism in terms of their number of edges.', checkMode: 'auto', correctAnswer: 'a pentagonal pyramid has 10 edges, a pentagonal prism has 15 edges', correctAnswers: ['a pentagonal pyramid has 10 edges, a pentagonal prism has 15 edges', 'pentagonal pyramid has 10 edges, pentagonal prism has 15 edges'], answer: 'a pentagonal pyramid has 10 edges, a pentagonal prism has 15 edges', explanation: 'A pentagonal pyramid has 10 edges (5 base + 5 slant). A pentagonal prism has 15 edges (5 + 5 on its two pentagonal ends, plus 5 connecting edges).' },
        { difficulty: 'Hard', question: 'Bongani says all prisms satisfy Euler\'s formula because their side faces are always rectangles. Is his reasoning fully correct? Explain.', answer: 'His conclusion is correct but his reasoning is incomplete — Euler\'s formula holds for all prisms not just because the side faces are rectangles, but because every face (the rectangular sides AND the polygon ends) is flat, with well-defined edges and vertices throughout the whole solid.', checkMode: 'self' },

        // Block 6 — Multi-step Euler's formula word problems / error-spotting (Hard)
        { difficulty: 'Hard', question: 'A solid has 5 faces and 6 vertices. Use Euler\'s formula to find its number of edges, then name a solid that matches these values.', answer: 'Euler\'s formula: F + V − E = 2, so 5 + 6 − E = 2, giving E = 9. A solid with 5 faces, 6 vertices and 9 edges matches a triangular prism.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sibusiso says a solid can have 5 faces, 5 vertices and 9 edges. Check whether this is possible using Euler\'s formula.', answer: 'Check: F + V − E = 5 + 5 − 9 = 1, which does not equal 2. Since Euler\'s formula fails, this combination of faces, vertices and edges is not possible for a polyhedron.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A triangular prism has 5 faces and 6 vertices. Use Euler\'s formula to find its number of edges, then confirm this matches counting the edges of the two triangular ends plus the connecting edges directly.', answer: 'Euler\'s formula: F + V − E = 2, so 5 + 6 − E = 2, giving E = 9. Checking directly: each triangular end has 3 edges (3 + 3 = 6), plus 3 edges connecting the two triangles, giving 6 + 3 = 9 edges. Both methods agree: 9 edges.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered classifying 3D solids and applying Euler\'s formula.' },
        { minScore: 15, message: 'Great work! Review any missed questions on nets or Euler\'s formula and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on faces, edges and vertices, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
