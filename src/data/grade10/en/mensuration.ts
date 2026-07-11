import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mensuration roles) ──────────────────────────────────────
// radius/dimensions  → blue   (#2563eb)
// formula applied    → orange (#ea580c)
// final answer       → green  (#16a34a)
// component shape 2  → red    (#dc2626)
// component shape 3  → purple (#7c3aed)
// known values       → blue   (#2563eb)
// rearranged formula → orange (#ea580c)
// found dimension    → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Mensuration',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — VOLUME AND SURFACE AREA OF PRISMS, PYRAMIDS, CYLINDERS, CONES AND SPHERES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-surface-area-basic-solids',
      title: 'Volume and Surface Area of Prisms, Pyramids, Cylinders, Cones and Spheres',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We revise and apply formulae for <strong>volume</strong> and <strong>surface area</strong> of 3D solids studied in earlier grades. Volume measures the space inside a solid (in cubic units, e.g. cm³); surface area measures the total area of all outer faces (in square units, e.g. cm²).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius / dimensions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formula applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Formula reference ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formula reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Prism</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = base area × height</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Pyramid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = ⅓ × base area × height</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Cylinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = πr²h</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>SA</strong> = 2πr² + 2πrh</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Cone</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = ⅓πr²h</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>SA</strong> = πr² + πrl &nbsp;<em>(l = slant height)</em></p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Sphere</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>V</strong> = 4/3 πr³</p>` +
        `<p style="color:#374151;font-size:14px;margin:4px 0 0;"><strong>SA</strong> = 4πr²</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Units matter</p>` +
        `<p style="margin:0;color:#9a3412;">Always state units in your answer. Volume is in <strong>cubic units</strong> (e.g. cm³) and surface area is in <strong>square units</strong> (e.g. cm²). A missing or wrong unit costs marks.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the volume of a cone with radius 4 cm and height 9 cm.',
          answer: `Volume ${gr('≈ 150.72 cm³')}`,
          steps: [
            `Write the formula: ${or('V = ⅓πr²h')}`,
            `Substitute the known values: ${bl('r = 4 cm')}, ${bl('h = 9 cm')}<br>${or('V = ⅓ × 3.14 × 4² × 9')}`,
            `Calculate: ${or('V = ⅓ × 3.14 × 16 × 9 = ⅓ × 452.16 = 150.72')}`,
            `<strong>Answer:</strong> Volume = ${gr('150.72 cm³')} ✓`,
          ],
        },
        {
          question: 'Find the surface area of a sphere with radius 6 cm.',
          answer: `Surface area ${gr('≈ 452.16 cm²')}`,
          steps: [
            `Write the formula: ${or('SA = 4πr²')}`,
            `Substitute the known value: ${bl('r = 6 cm')}<br>${or('SA = 4 × 3.14 × 6²')}`,
            `Calculate: ${or('SA = 4 × 3.14 × 36 = 452.16')}`,
            `<strong>Answer:</strong> Surface area = ${gr('452.16 cm²')} ✓`,
          ],
        },
        {
          question: 'A square pyramid has a base side of 8 cm and height 12 cm. Find its volume.',
          answer: `Volume = ${gr('256 cm³')}`,
          steps: [
            `Write the formula: ${or('V = ⅓ × base area × height')}`,
            `Find the base area: ${bl('base side = 8 cm')} → ${or('base area = 8 × 8 = 64 cm²')}`,
            `Substitute: ${or('V = ⅓ × 64 × 12')}`,
            `Calculate: ${or('V = ⅓ × 768 = 256')}`,
            `<strong>Answer:</strong> Volume = ${gr('256 cm³')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Find the volume of a cylinder with radius 3 cm and height 7 cm. Use π ≈ 3.14.',
          answer: '197.82 cm³',
          checkMode: 'auto',
          correctAnswer: '197.82',
          explanation: 'V = πr²h = 3.14 × 3² × 7 = 3.14 × 9 × 7 = 3.14 × 63 = 197.82 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate each of the following. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Surface area of a cone with radius 5 cm and slant height 13 cm.',
              correctAnswer: '282.6',
              explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 13 = 78.5 + 204.1 = 282.6 cm² ✓',
            },
            {
              label: 'b) Volume of a sphere with radius 3 cm.',
              correctAnswer: '113.04',
              explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 27 = (4/3) × 84.78 = 113.04 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A closed cylinder has radius 4 cm and height 10 cm. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume (cm³)',
              correctAnswer: '502.4',
              explanation: 'V = πr²h = 3.14 × 16 × 10 = 502.4 cm³ ✓',
            },
            {
              label: 'b) Total surface area (cm²)',
              correctAnswer: '351.68',
              explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 16 + 2 × 3.14 × 4 × 10 = 100.48 + 251.2 = 351.68 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Labelled diagrams of a cylinder, cone, sphere and square pyramid each showing radius, height and slant height with colour coded dimensions" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising volume and surface area formulae for cylinders, cones, spheres and pyramids with colour coded worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMBINING SOLIDS TO FORM COMPLEX SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combining-solids',
      title: 'Combining Solids to Form Complex Shapes',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">More complex solids are formed by <strong>joining two or more basic shapes</strong> (e.g. a cylinder with a hemisphere on top, or a cone attached to a cylinder). We calculate each component separately and then combine the results.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('component 1 (e.g. cylinder)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('component 2 (e.g. cone)')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('component 3 (e.g. hemisphere)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined total')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('internal joined surface (excluded)')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for combined solids</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Volume:</strong> Calculate the volume of each component separately, then <strong>add</strong> all volumes together.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Surface area:</strong> Add the outer surfaces of each component, but <strong>exclude</strong> any joined faces that are on the inside of the combined solid — these ${or('internal faces')} are not part of the outer surface.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Identifying internal faces</p>` +
        `<p style="margin:0;color:#9a3412;">When two solids are joined along a circular face (e.g. a cone placed on top of a cylinder), that circular face becomes ${or('internal')} — it is inside the combined solid and must <strong>not</strong> be included in the surface area calculation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A solid consists of a cylinder (radius 3 cm, height 8 cm) with a cone (same radius, height 4 cm) on top. Find the total volume.',
          answer: `Total volume ${gr('≈ 263.76 cm³')}`,
          steps: [
            `Calculate the ${bl('cylinder')} volume: ${bl('V = πr²h = 3.14 × 9 × 8 = 226.08 cm³')}`,
            `Calculate the ${re('cone')} volume: ${re('V = ⅓πr²h = ⅓ × 3.14 × 9 × 4 ≈ 37.68 cm³')}`,
            `Add the components: ${gr('Total = 226.08 + 37.68 = 263.76 cm³')}`,
            `<strong>Answer:</strong> Total volume = ${gr('263.76 cm³')} ✓`,
          ],
        },
        {
          question: 'A capsule shape consists of a cylinder (radius 2 cm, height 10 cm) with a hemisphere (same radius) on each end. Find the total volume.',
          answer: `Total volume ${gr('≈ 159.09 cm³')}`,
          steps: [
            `Calculate the ${bl('cylinder')} volume: ${bl('V = πr²h = 3.14 × 4 × 10 = 125.6 cm³')}`,
            `Two hemispheres equal one full sphere: ${pu('V = 4/3 πr³ = 4/3 × 3.14 × 8 ≈ 33.49 cm³')}`,
            `Add the components: ${gr('Total ≈ 125.6 + 33.49 = 159.09 cm³')}`,
            `<strong>Answer:</strong> Total volume = ${gr('159.09 cm³')} ✓`,
          ],
        },
        {
          question: 'Find the surface area of the combined solid in Example 1 (cylinder with cone on top), noting that the joined circular face is internal and not part of the outer surface.',
          answer: `Total surface area = ${gr('226.08 cm²')}`,
          steps: [
            `${bl('Cylinder')} curved surface: ${bl('2πrh = 2 × 3.14 × 3 × 8 = 150.72 cm²')}`,
            `${bl('Cylinder')} bottom circle (outer base): ${bl('πr² = 3.14 × 9 = 28.26 cm²')}`,
            `${re('Cone')} slant height: ${re('l = √(r² + h²) = √(9 + 16) = √25 = 5 cm')}`,
            `${re('Cone')} curved surface: ${re('πrl = 3.14 × 3 × 5 = 47.1 cm²')}`,
            `The ${or('joined circular face (top of cylinder = base of cone)')} is internal — ${or('exclude it')} from the total.`,
            `Total surface area: ${gr('150.72 + 28.26 + 47.1 = 226.08 cm²')}`,
            `<strong>Answer:</strong> Surface area = ${gr('226.08 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A solid consists of a cylinder (radius 2 cm, height 5 cm) with a hemisphere (radius 2 cm) on top. Find the total volume. Use π ≈ 3.14.',
          answer: '79.55 cm³',
          checkMode: 'auto',
          correctAnswer: '79.55',
          explanation: 'Cylinder: V = 3.14 × 4 × 5 = 62.8 cm³\nHemisphere: V = (1/2) × (4/3) × 3.14 × 8 = (2/3) × 3.14 × 8 ≈ 16.75 cm³\nTotal ≈ 62.8 + 16.75 = 79.55 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Calculate the total volume of each combined solid. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A cone (r = 3 cm, h = 4 cm) on top of a cylinder (r = 3 cm, h = 10 cm).',
              correctAnswer: '320.28',
              explanation: 'Cylinder: 3.14 × 9 × 10 = 282.6 cm³\nCone: (1/3) × 3.14 × 9 × 4 = 37.68 cm³\nTotal: 282.6 + 37.68 = 320.28 cm³ ✓',
            },
            {
              label: 'b) A sphere (r = 3 cm) sitting on a solid cube (side 6 cm).',
              correctAnswer: '329.04',
              explanation: 'Cube: 6 × 6 × 6 = 216 cm³\nSphere: (4/3) × 3.14 × 27 = 113.04 cm³\nTotal: 216 + 113.04 = 329.04 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A solid is formed by joining a cylinder (r = 2 cm, h = 6 cm) and a cone (r = 2 cm, h = 3 cm) on top, sharing the same circular face. Use π ≈ 3.14.\n\na) Find the slant height of the cone (to 2 decimal places).\nb) Find the total surface area of the combined solid (excluding the internal joined face).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Slant height of cone (cm, to 2 d.p.)',
              correctAnswer: '3.61',
              explanation: 'l = √(r² + h²) = √(4 + 9) = √13 ≈ 3.61 cm ✓',
            },
            {
              label: 'b) Total surface area (cm², to 2 d.p.)',
              correctAnswer: '110.60',
              correctAnswers: ['110.60', '110.6'],
              explanation: 'Cylinder curved: 2 × 3.14 × 2 × 6 = 75.36 cm²\nCylinder bottom circle: 3.14 × 4 = 12.56 cm²\nCone curved: 3.14 × 2 × 3.61 ≈ 22.68 cm²\nTotal: 75.36 + 12.56 + 22.68 = 110.60 cm² ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a cylinder with a cone on top showing the internal joined circular face highlighted in orange and each component labelled in a different colour" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the volume and surface area of combined solids by calculating each component separately and identifying internal faces to exclude" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS WITH MISSING DIMENSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'missing-dimensions',
      title: 'Solving Problems with Missing Dimensions',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Some mensuration problems give us the <strong>volume or surface area</strong> and ask us to find a <strong>missing dimension</strong>. We rearrange the relevant formula to solve for the unknown variable before substituting known values.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rearranged formula')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('found dimension')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for finding a missing dimension</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Write the formula</strong> — identify which solid is involved and write the formula for its volume or surface area.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Substitute the known values')} — replace everything you know, leaving only the unknown variable.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Solve for the unknown</strong> — rearrange the equation and ${gr('calculate the missing dimension')}, remembering to include units.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Check by substituting back</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always verify your ${gr('found dimension')} by substituting it back into the original formula and confirming it gives the given volume or surface area.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cylinder has volume 314 cm³ and height 10 cm. Find its radius.',
          answer: `Radius = ${gr('√10 ≈ 3.16 cm')}`,
          steps: [
            `Write the formula: V = πr²h`,
            `Substitute ${bl('known values')}: ${bl('314 = 3.14 × r² × 10')}`,
            `Simplify: ${or('314 = 31.4r²')}`,
            `${or('Rearrange:')} ${or('r² = 314 ÷ 31.4 = 10')}`,
            `Solve: ${gr('r = √10 ≈ 3.16 cm')}`,
            `<strong>Check:</strong> 3.14 × 10 × 10 = 314 ✓`,
          ],
        },
        {
          question: 'A cone has volume 100.48 cm³ and radius 4 cm. Find its height.',
          answer: `Height = ${gr('≈ 6 cm')}`,
          steps: [
            `Write the formula: V = ⅓πr²h`,
            `Substitute ${bl('known values')}: ${bl('100.48 = ⅓ × 3.14 × 16 × h')}`,
            `Simplify: ${or('100.48 = ⅓ × 50.24 × h = 16.75h')} (approx)`,
            `${or('Rearrange:')} ${or('h = 100.48 ÷ 16.75')}`,
            `Solve: ${gr('h ≈ 6 cm')}`,
            `<strong>Check:</strong> ⅓ × 3.14 × 16 × 6 = ⅓ × 301.44 = 100.48 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A sphere has a surface area of 314 cm². Find its radius. Use π ≈ 3.14.',
          answer: '5 cm',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'SA = 4πr²\n314 = 4 × 3.14 × r²\n314 = 12.56r²\nr² = 314 ÷ 12.56 = 25\nr = √25 = 5 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Find the missing dimension in each case. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A cylinder has volume 628 cm³ and radius 5 cm. Find its height.',
              correctAnswer: '8',
              explanation: 'V = πr²h → 628 = 3.14 × 25 × h → 628 = 78.5h → h = 628 ÷ 78.5 = 8 cm ✓',
            },
            {
              label: 'b) A cone has volume 75.36 cm³ and height 6 cm. Find its radius (to 2 d.p.).',
              correctAnswer: '3.46',
              explanation: 'V = ⅓πr²h → 75.36 = ⅓ × 3.14 × r² × 6 → 75.36 = 6.28r² → r² = 12 → r = √12 ≈ 3.46 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A square pyramid has volume 192 cm³ and a square base with side length 8 cm.\n\na) Find the height of the pyramid.\nb) Verify your answer by substituting it back into the formula.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Height of pyramid (cm)',
              correctAnswer: '9',
              explanation: 'V = ⅓ × base area × h\n192 = ⅓ × 64 × h\n192 = (64/3)h\nh = 192 × 3 ÷ 64 = 576 ÷ 64 = 9 cm ✓',
            },
            {
              label: 'b) Verification (write the substituted formula result)',
              correctAnswer: '192',
              explanation: 'V = ⅓ × 64 × 9 = ⅓ × 576 = 192 cm³ ✓ — this matches the given volume, so h = 9 cm is correct.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a cylinder and cone each with one dimension marked as unknown, showing the rearranged formula with known values substituted in colour" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to rearrange volume and surface area formulae to find missing dimensions, with colour coded substitution steps" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Volume of prism / cylinder / cube
    // Block 2 (3-5):   Surface area of cylinder / prism / cone
    // Block 3 (6-8):   Volume of sphere / pyramid / cone
    // Block 4 (9-11):  Surface area of sphere / cone / pyramid
    // Block 5 (12-14): Composite solid volume
    // Block 6 (15-19): Composite solid surface area, scaling, missing dimensions
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Volume of prism / cylinder / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 8 cm, width 5 cm and height 4 cm. Find its volume.', checkMode: 'auto', correctAnswer: '160cm³', correctAnswers: ['160cm³', '160', '160 cm³'], answer: '160 cm³', explanation: 'V = length × width × height = 8 × 5 × 4 = 160 cm³' },
        { difficulty: 'Easy', question: 'A cylinder has radius 4 cm and height 9 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '452.16cm³', correctAnswers: ['452.16cm³', '452.16', '452.16 cm³'], answer: '452.16 cm³', explanation: 'V = πr²h = 3.14 × 4² × 9 = 3.14 × 16 × 9 = 452.16 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy', question: 'A cube has sides of 5 cm. Find its volume.', checkMode: 'auto', correctAnswer: '125cm³', correctAnswers: ['125cm³', '125', '125 cm³'], answer: '125 cm³', explanation: 'V = side³ = 5³ = 125 cm³' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 5 cm and height 8 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '408.2cm²', correctAnswers: ['408.2cm²', '408.2', '408.2 cm²', '408.20cm²', '408.20'], answer: '408.2 cm²', explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 25 + 2 × 3.14 × 5 × 8 = 157 + 251.2 = 408.2 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 9 cm, width 6 cm and height 4 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '228cm²', correctAnswers: ['228cm²', '228', '228 cm²'], answer: '228 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(9×6 + 9×4 + 6×4) = 2(54 + 36 + 24) = 228 cm²' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 3 cm and slant height 6 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '84.78cm²', correctAnswers: ['84.78cm²', '84.78', '84.78 cm²'], answer: '84.78 cm²', explanation: 'SA = πr² + πrl = 3.14 × 9 + 3.14 × 3 × 6 = 28.26 + 56.52 = 84.78 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 6 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 6 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '904.32cm³', correctAnswers: ['904.32cm³', '904.32', '904.32 cm³'], answer: '904.32 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 216 = 904.32 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 9 cm and height 10 cm. Find its volume.', checkMode: 'auto', correctAnswer: '270cm³', correctAnswers: ['270cm³', '270', '270 cm³'], answer: '270 cm³', explanation: 'V = ⅓ × base area × height = ⅓ × 81 × 10 = 270 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 10 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 5 cm and height 12 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '314cm³', correctAnswers: ['314cm³', '314', '314 cm³'], answer: '314 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 25 × 12 = 314 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 7 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '615.44cm²', correctAnswers: ['615.44cm²', '615.44', '615.44 cm²'], answer: '615.44 cm²', explanation: 'SA = 4πr² = 4 × 3.14 × 49 = 615.44 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 6 cm and slant height 10 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '301.44cm²', correctAnswers: ['301.44cm²', '301.44', '301.44 cm²'], answer: '301.44 cm²', explanation: 'SA = πr² + πrl = 3.14 × 36 + 3.14 × 6 × 10 = 113.04 + 188.4 = 301.44 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 6 cm and slant height 5 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', correctAnswer: '96cm²', correctAnswers: ['96cm²', '96', '96 cm²'], answer: '96 cm²', explanation: 'SA = base area + 4 × (½ × base side × slant height) = 36 + 4 × (½ × 6 × 5) = 36 + 60 = 96 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 5 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 3 cm, height 8 cm) with a cone (same radius, height 5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '273.18cm³', correctAnswers: ['273.18cm³', '273.18', '273.18 cm³'], answer: '273.18 cm³', explanation: 'Cylinder: πr²h = 3.14 × 9 × 8 = 226.08 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 9 × 5 = 47.1 cm³. Total = 226.08 + 47.1 = 273.18 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 6 cm) with a hemisphere (radius 3 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '272.52cm³', correctAnswers: ['272.52cm³', '272.52', '272.52 cm³'], answer: '272.52 cm³', explanation: 'Cube: 6³ = 216 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 27 = 56.52 cm³. Total = 216 + 56.52 = 272.52 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 6 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 5 cm, height 9 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '863.5cm³', correctAnswers: ['863.5cm³', '863.5', '863.5 cm³', '863.50cm³', '863.50'], answer: '863.5 cm³', explanation: 'Cylinder: πr²h = 3.14 × 25 × 9 = 706.5 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 25 × 6 = 157 cm³. Total = 706.5 + 157 = 863.5 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 3 cm, height 8 cm) with a hemisphere (same radius) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '235.5cm²', correctAnswers: ['235.5cm²', '235.5', '235.5 cm²', '235.50cm²', '235.50'], answer: '235.5 cm²', explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 3 × 8 = 150.72 cm². Cylinder bottom circle: πr² = 3.14 × 9 = 28.26 cm². Hemisphere curved surface: 2πr² = 2 × 3.14 × 9 = 56.52 cm². Total = 150.72 + 28.26 + 56.52 = 235.5 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 8 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cube has side length 4 cm. It is enlarged so that its new side length is 12 cm. Find the scale factor applied to (a) the surface area and (b) the volume.', answer: 'Linear scale factor = 12 ÷ 4 = 3. Surface area scale factor = 3² = 9. Volume scale factor = 3³ = 27.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="45" x2="90" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="80" x2="90" y2="65" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="55" y="115" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc2)"/><defs><marker id="arrowSc2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="200" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="170" y1="33" x2="200" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="33" x2="290" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="103" x2="290" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="170" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="215" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="215" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A sphere has a surface area of 452.16 cm². Find its radius. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '6cm', correctAnswers: ['6cm', '6', '6 cm', '6.0cm', '6.0'], answer: '6 cm', explanation: 'SA = 4πr² → 452.16 = 4 × 3.14 × r² → 452.16 = 12.56r² → r² = 36 → r = 6 cm' },
        { difficulty: 'Hard', question: 'A square pyramid has a base side of 6 cm and volume 216 cm³. Find its height.', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], answer: '18 cm', explanation: 'V = ⅓ × base area × h → 216 = ⅓ × 36 × h → 216 = 12h → h = 18 cm' },
        { difficulty: 'Hard', question: "Lerato says that doubling the radius of a sphere (while keeping the shape a sphere) multiplies its volume by 8. Is she correct? Explain with reference to the volume formula.", answer: 'Yes — since V = (4/3)πr³ depends on r cubed, doubling the radius multiplies the volume by 2³ = 8, confirming her statement.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mensuration for prisms, cylinders, spheres, cones and pyramids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Volume of prism / cylinder / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 12 cm, width 5 cm and height 3 cm. Find its volume.', checkMode: 'auto', correctAnswer: '180cm³', correctAnswers: ['180cm³', '180', '180 cm³'], answer: '180 cm³', explanation: 'V = length × width × height = 12 × 5 × 3 = 180 cm³' },
        { difficulty: 'Easy', question: 'A cylinder has radius 5 cm and height 6 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '471cm³', correctAnswers: ['471cm³', '471', '471 cm³'], answer: '471 cm³', explanation: 'V = πr²h = 3.14 × 5² × 6 = 3.14 × 25 × 6 = 471 cm³' },
        { difficulty: 'Easy', question: 'A cube has sides of 7 cm. Find its volume.', checkMode: 'auto', correctAnswer: '343cm³', correctAnswers: ['343cm³', '343', '343 cm³'], answer: '343 cm³', explanation: 'V = side³ = 7³ = 343 cm³' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 4 cm and height 9 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '326.56cm²', correctAnswers: ['326.56cm²', '326.56', '326.56 cm²'], answer: '326.56 cm²', explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 16 + 2 × 3.14 × 4 × 9 = 100.48 + 226.08 = 326.56 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 10 cm, width 4 cm and height 3 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '164cm²', correctAnswers: ['164cm²', '164', '164 cm²'], answer: '164 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(10×4 + 10×3 + 4×3) = 2(40 + 30 + 12) = 164 cm²' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 4 cm and slant height 7 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '138.16cm²', correctAnswers: ['138.16cm²', '138.16', '138.16 cm²'], answer: '138.16 cm²', explanation: 'SA = πr² + πrl = 3.14 × 16 + 3.14 × 4 × 7 = 50.24 + 87.92 = 138.16 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 7 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 4.5 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '381.51cm³', correctAnswers: ['381.51cm³', '381.51', '381.51 cm³'], answer: '381.51 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 91.125 ≈ 381.51 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4.5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 8 cm and height 9 cm. Find its volume.', checkMode: 'auto', correctAnswer: '192cm³', correctAnswers: ['192cm³', '192', '192 cm³'], answer: '192 cm³', explanation: 'V = ⅓ × base area × height = ⅓ × 64 × 9 = 192 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 6 cm and height 10 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '376.8cm³', correctAnswers: ['376.8cm³', '376.8', '376.8 cm³', '376.80cm³', '376.80'], answer: '376.8 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 36 × 10 = 376.8 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 9 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '1017.36cm²', correctAnswers: ['1017.36cm²', '1017.36', '1017.36 cm²', '1 017.36cm²', '1 017.36'], answer: '1 017.36 cm²', explanation: 'SA = 4πr² = 4 × 3.14 × 81 = 1 017.36 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 5 cm and slant height 8 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '204.1cm²', correctAnswers: ['204.1cm²', '204.1', '204.1 cm²', '204.10cm²', '204.10'], answer: '204.1 cm²', explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 8 = 78.5 + 125.6 = 204.1 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 8 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 8 cm and slant height 6 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', correctAnswer: '160cm²', correctAnswers: ['160cm²', '160', '160 cm²'], answer: '160 cm²', explanation: 'SA = base area + 4 × (½ × base side × slant height) = 64 + 4 × (½ × 8 × 6) = 64 + 96 = 160 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 4 cm, height 10 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '602.88cm³', correctAnswers: ['602.88cm³', '602.88', '602.88 cm³'], answer: '602.88 cm³', explanation: 'Cylinder: πr²h = 3.14 × 16 × 10 = 502.4 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 16 × 6 = 100.48 cm³. Total = 502.4 + 100.48 = 602.88 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 5 cm) with a hemisphere (radius 2.5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '157.71cm³', correctAnswers: ['157.71cm³', '157.71', '157.71 cm³'], answer: '157.71 cm³', explanation: 'Cube: 5³ = 125 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 15.625 ≈ 32.71 cm³. Total ≈ 125 + 32.71 = 157.71 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 6 cm, height 7 cm) with a cone (same radius, height 5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '979.68cm³', correctAnswers: ['979.68cm³', '979.68', '979.68 cm³'], answer: '979.68 cm³', explanation: 'Cylinder: πr²h = 3.14 × 36 × 7 = 791.28 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 36 × 5 = 188.4 cm³. Total = 791.28 + 188.4 = 979.68 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 7 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 4 cm, height 10 cm) with a cone (same radius, height 3 cm) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '364.24cm²', correctAnswers: ['364.24cm²', '364.24', '364.24 cm²'], answer: '364.24 cm²', explanation: 'Cone slant height: l = √(4² + 3²) = √25 = 5 cm. Cylinder curved surface: 2πrh = 2 × 3.14 × 4 × 10 = 251.2 cm². Cylinder bottom circle: πr² = 3.14 × 16 = 50.24 cm². Cone curved surface: πrl = 3.14 × 4 × 5 = 62.8 cm². Total = 251.2 + 50.24 + 62.8 = 364.24 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 3 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A sphere has radius 2 cm. It is enlarged so that its new radius is 6 cm. Find the scale factor applied to (a) the surface area and (b) the volume.', answer: 'Linear scale factor = 6 ÷ 2 = 3. Surface area scale factor = 3² = 9. Volume scale factor = 3³ = 27.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="65" r="30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="55" cy="65" rx="30" ry="9" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="105" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="55" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="65" x2="150" y2="65" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc3)"/><defs><marker id="arrowSc3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="245" cy="65" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="245" cy="65" rx="65" ry="18" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="245" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="245" y="170" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A cone has volume 113.04 cm³ and radius 3 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], answer: '12 cm', explanation: 'V = ⅓πr²h → 113.04 = ⅓ × 3.14 × 9 × h → 113.04 = 9.42h → h = 12 cm' },
        { difficulty: 'Hard', question: 'A cone has volume 392.5 cm³ and radius 5 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], answer: '15 cm', explanation: 'V = ⅓πr²h → 392.5 = ⅓ × 3.14 × 25 × h → 392.5 = 26.1666...h → h = 15 cm' },
        { difficulty: 'Hard', question: "Sipho says that tripling the height of a cone (while keeping the radius the same) multiplies its volume by 3. Is he correct? Explain with reference to the volume formula.", answer: 'Yes — since V = ⅓πr²h depends on h to the first power only (not r), tripling the height multiplies the volume by exactly 3, confirming his statement.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mensuration for prisms, cylinders, spheres, cones and pyramids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Volume of prism / cylinder / cube (Easy)
        { difficulty: 'Easy', question: 'A rectangular prism has length 11 cm, width 4 cm and height 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '264cm³', correctAnswers: ['264cm³', '264', '264 cm³'], answer: '264 cm³', explanation: 'V = length × width × height = 11 × 4 × 6 = 264 cm³' },
        { difficulty: 'Easy', question: 'A cylinder has radius 2 cm and height 12 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '150.72cm³', correctAnswers: ['150.72cm³', '150.72', '150.72 cm³'], answer: '150.72 cm³', explanation: 'V = πr²h = 3.14 × 2² × 12 = 3.14 × 4 × 12 = 150.72 cm³' },
        { difficulty: 'Easy', question: 'A cube has sides of 9 cm. Find its volume.', checkMode: 'auto', correctAnswer: '729cm³', correctAnswers: ['729cm³', '729', '729 cm³'], answer: '729 cm³', explanation: 'V = side³ = 9³ = 729 cm³' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 6 cm and height 5 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '414.48cm²', correctAnswers: ['414.48cm²', '414.48', '414.48 cm²'], answer: '414.48 cm²', explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 36 + 2 × 3.14 × 6 × 5 = 226.08 + 188.4 = 414.48 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 12 cm, width 5 cm and height 2 cm. Find its total surface area.', checkMode: 'auto', correctAnswer: '188cm²', correctAnswers: ['188cm²', '188', '188 cm²'], answer: '188 cm²', explanation: 'SA = 2(lw + lh + wh) = 2(12×5 + 12×2 + 5×2) = 2(60 + 24 + 10) = 188 cm²' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 5 cm and slant height 9 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '219.8cm²', correctAnswers: ['219.8cm²', '219.8', '219.8 cm²', '219.80cm²', '219.80'], answer: '219.8 cm²', explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 9 = 78.5 + 141.3 = 219.8 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 9 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 3 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '113.04cm³', correctAnswers: ['113.04cm³', '113.04', '113.04 cm³'], answer: '113.04 cm³', explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 27 = 113.04 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 10 cm and height 6 cm. Find its volume.', checkMode: 'auto', correctAnswer: '200cm³', correctAnswers: ['200cm³', '200', '200 cm³'], answer: '200 cm³', explanation: 'V = ⅓ × base area × height = ⅓ × 100 × 6 = 200 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 4 cm and height 15 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '251.2cm³', correctAnswers: ['251.2cm³', '251.2', '251.2 cm³', '251.20cm³', '251.20'], answer: '251.2 cm³', explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 16 × 15 = 251.2 cm³' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 15 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 4 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '200.96cm²', correctAnswers: ['200.96cm²', '200.96', '200.96 cm²'], answer: '200.96 cm²', explanation: 'SA = 4πr² = 4 × 3.14 × 16 = 200.96 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 7 cm and slant height 12 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '417.62cm²', correctAnswers: ['417.62cm²', '417.62', '417.62 cm²'], answer: '417.62 cm²', explanation: 'SA = πr² + πrl = 3.14 × 49 + 3.14 × 7 × 12 = 153.86 + 263.76 = 417.62 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="140" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 10 cm and slant height 13 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', correctAnswer: '360cm²', correctAnswers: ['360cm²', '360', '360 cm²'], answer: '360 cm²', explanation: 'SA = base area + 4 × (½ × base side × slant height) = 100 + 4 × (½ × 10 × 13) = 100 + 260 = 360 cm²' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="122" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 13 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 5 cm, height 6 cm) with a cone (same radius, height 9 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '706.5cm³', correctAnswers: ['706.5cm³', '706.5', '706.5 cm³', '706.50cm³', '706.50'], answer: '706.5 cm³', explanation: 'Cylinder: πr²h = 3.14 × 25 × 6 = 471 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 25 × 9 = 235.5 cm³. Total = 471 + 235.5 = 706.5 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 6 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 9 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 4 cm) with a hemisphere (radius 2 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '80.75cm³', correctAnswers: ['80.75cm³', '80.75', '80.75 cm³'], answer: '80.75 cm³', explanation: 'Cube: 4³ = 64 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 8 ≈ 16.75 cm³. Total ≈ 64 + 16.75 = 80.75 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="83" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 7 cm, height 8 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '1538.6cm³', correctAnswers: ['1538.6cm³', '1538.6', '1538.6 cm³', '1 538.6cm³', '1 538.6', '1538.60cm³', '1 538.60'], answer: '1 538.6 cm³', explanation: 'Cylinder: πr²h = 3.14 × 49 × 8 = 1 230.88 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 49 × 6 = 307.72 cm³. Total = 1 230.88 + 307.72 = 1 538.6 cm³' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 2 cm, height 9 cm) with a hemisphere (same radius) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '150.72cm²', correctAnswers: ['150.72cm²', '150.72', '150.72 cm²'], answer: '150.72 cm²', explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 2 × 9 = 113.04 cm². Cylinder bottom circle: πr² = 3.14 × 4 = 12.56 cm². Hemisphere curved surface: 2πr² = 2 × 3.14 × 4 = 25.12 cm². Total = 113.04 + 12.56 + 25.12 = 150.72 cm²' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 9 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cylinder has radius 3 cm and height 5 cm. Both dimensions are enlarged by a scale factor of 4 (new radius 12 cm, new height 20 cm). Find the scale factor applied to (a) the surface area and (b) the volume.', answer: 'Linear scale factor = 4. Surface area scale factor = 4² = 16. Volume scale factor = 4³ = 64.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="25" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="30" y1="35" x2="30" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><line x1="80" y1="35" x2="80" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 0 80,90" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 1 80,90" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="115" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r=3,h=5</text><text x="55" y="131" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc4)"/><defs><marker id="arrowSc4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><ellipse cx="270" cy="30" rx="70" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="200" y1="30" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><line x1="340" y1="30" x2="340" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 0 340,140" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 1 340,140" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="270" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r=12 cm, h=20 cm</text><text x="270" y="196" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A cylinder has volume 1 256 cm³ and radius 10 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4', '4 cm'], answer: '4 cm', explanation: 'V = πr²h → 1 256 = 3.14 × 100 × h → 1 256 = 314h → h = 4 cm' },
        { difficulty: 'Hard', question: 'A sphere has volume 113.04 cm³. Find its radius. Use π ≈ 3.14.', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3', '3 cm'], answer: '3 cm', explanation: 'V = (4/3)πr³ → 113.04 = (4/3) × 3.14 × r³ → r³ = 113.04 ÷ 4.18666... = 27 → r = ∛27 = 3 cm' },
        { difficulty: 'Hard', question: "Amahle says that halving the radius of a cylinder (while keeping the height the same) reduces its volume to a quarter of the original. Is she correct? Explain with reference to the volume formula.", answer: 'Yes — since V = πr²h depends on r squared, halving the radius multiplies the volume by (½)² = ¼, confirming her statement.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered mensuration for prisms, cylinders, spheres, cones and pyramids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on composite solids or scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on volume and surface area, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  topicPractice: [
    // ── Q1 Easy — volume of cylinder ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the volume of a cylinder with radius 5 cm and height 12 cm. Use π ≈ 3.14.',
      answer: '942 cm³',
      checkMode: 'auto',
      correctAnswer: '942',
      explanation: 'V = πr²h = 3.14 × 25 × 12 = 942 cm³ ✓',
    },

    // ── Q2 Medium — surface area of sphere ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the surface area of a sphere with radius 7 cm. Use π ≈ 3.14.',
      answer: '615.44 cm²',
      checkMode: 'auto',
      correctAnswer: '615.44',
      explanation: 'SA = 4πr² = 4 × 3.14 × 49 = 615.44 cm² ✓',
    },

    // ── Q3 Hard — check Sipho's cone calculation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho calculates the volume of a cone with radius 3 cm and height 8 cm and gets 75.36 cm³. Check his answer.",
      answer: 'Volume = ⅓ × 3.14 × 9 × 8 = 75.36 cm³. He is correct.',
      checkMode: 'self',
    },

    // ── Q4 Easy — volume of square pyramid ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the volume of a square pyramid with base side 6 cm and height 10 cm.',
      answer: '120 cm³',
      checkMode: 'auto',
      correctAnswer: '120',
      explanation: 'V = ⅓ × base area × height = ⅓ × 36 × 10 = 120 cm³ ✓',
    },

    // ── Q5 Medium — volume of sphere ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the volume of a sphere with radius 4.5 cm. Use π ≈ 3.14.',
      answer: '381.51 cm³',
      checkMode: 'auto',
      correctAnswer: '381.51',
      explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 4.5³ = (4/3) × 3.14 × 91.125 ≈ 381.51 cm³ ✓',
    },

    // ── Q6 Hard — combined solid volume ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A solid is a cylinder (radius 4 cm, height 12 cm) with a hemisphere (same radius) on top. Find its total volume. Use π ≈ 3.14.',
      answer: 'Cylinder = πr²h = 3.14 × 16 × 12 = 602.88 cm³. Hemisphere = ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 64 ≈ 133.97 cm³. Total ≈ 736.85 cm³.',
      checkMode: 'self',
    },

    // ── Q7 Medium — capsule volume ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A capsule has a cylinder (radius 3 cm, height 15 cm) with a hemisphere on each end. Find the total volume. Use π ≈ 3.14.',
      answer: '537.21 cm³',
      checkMode: 'auto',
      correctAnswer: '537.21',
      explanation: 'Cylinder: 3.14 × 9 × 15 = 423.9 cm³\nTwo hemispheres = one sphere: (4/3) × 3.14 × 27 ≈ 113.31 cm³\nTotal ≈ 537.21 cm³ ✓',
    },

    // ── Q8 Hard — surface area of cone ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the surface area of a cone with radius 5 cm and slant height 13 cm. Use π ≈ 3.14.',
      answer: 'Surface Area = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 13 = 78.5 + 204.1 = 282.6 cm².',
      checkMode: 'self',
    },

    // ── Q9 Hard — Lerato's claim about combining cylinders ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says combining two cylinders end to end doubles the surface area of one cylinder. Is she correct? Explain.',
      answer: 'No — when joined, the two circular faces where they connect become internal and are no longer part of the outer surface, so the total surface area is less than double.',
      checkMode: 'self',
    },

    // ── Q10 Easy — find radius of cylinder ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A cylinder has volume 251.2 cm³ and height 8 cm. Find its radius. Use π ≈ 3.14.',
      answer: '3.16 cm',
      checkMode: 'auto',
      correctAnswer: '3.16',
      explanation: 'V = πr²h → 251.2 = 3.14 × r² × 8 → r² = 251.2 ÷ 25.12 = 10 → r = √10 ≈ 3.16 cm ✓',
    },

    // ── Q11 Medium — find radius of cone ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A cone has volume 188.4 cm³ and height 9 cm. Find its radius (rounded to 2 decimal places). Use π ≈ 3.14.',
      answer: '4.47 cm',
      checkMode: 'auto',
      correctAnswer: '4.47',
      explanation: 'V = ⅓πr²h → 188.4 = ⅓ × 3.14 × r² × 9 → 188.4 = 9.42r² → r² = 20 → r = √20 ≈ 4.47 cm ✓',
    },

    // ── Q12 Hard — find radius from sphere surface area ───────────────────────
    {
      difficulty: 'Hard',
      question: 'A sphere has surface area 314 cm². Find its radius. Use π ≈ 3.14.',
      answer: '314 = 4πr². r² = 314 ÷ (4 × 3.14) = 25. r = 5 cm.',
      checkMode: 'self',
    },

    // ── Q13 Hard — find height of pyramid ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo's pyramid has a square base with side 5 cm and volume 100 cm³. Find its height.",
      answer: 'Volume = ⅓ × base area × height. 100 = ⅓ × 25 × h. h = 12 cm.',
      checkMode: 'self',
    },

    // ── Q14 Hard — volume of combined solid ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A solid consists of a cone (radius 5 cm, height 12 cm) on top of a cylinder (same radius, height 8 cm). Find the total volume. Use π ≈ 3.14.',
      answer: '942 cm³',
      checkMode: 'auto',
      correctAnswer: '942',
      explanation: 'Cone: ⅓ × 3.14 × 25 × 12 = 314 cm³\nCylinder: 3.14 × 25 × 8 = 628 cm³\nTotal: 314 + 628 = 942 cm³ ✓',
    },

    // ── Q15 Hard — surface area of combined solid ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the surface area of the combined solid in Q14, excluding the internal joined circle. Use π ≈ 3.14.',
      answer: 'Cone slant height = √(5² + 12²) = 13 cm. Cone curved surface = πrl = 3.14 × 5 × 13 = 204.1 cm². Cylinder curved surface = 2πrh = 2 × 3.14 × 5 × 8 = 251.2 cm². Cylinder bottom = πr² = 78.5 cm². Total = 204.1 + 251.2 + 78.5 = 533.8 cm².',
      checkMode: 'self',
    },

    // ── Q16 Hard — find radius from sphere volume ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle wants to find the radius of a sphere with volume 904.32 cm³. Find r, rounded to 1 decimal place. Use π ≈ 3.14.',
      answer: '6.0 cm',
      checkMode: 'auto',
      correctAnswer: '6.0',
      correctAnswers: ['6.0', '6'],
      explanation: 'V = (4/3)πr³ → 904.32 = (4/3) × 3.14 × r³ → r³ = 216 → r = ∛216 = 6.0 cm ✓',
    },

    // ── Q17 Hard — Sipho's claim about hemisphere surface area ────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a hemisphere has exactly half the surface area of a full sphere with the same radius. Is he correct? Explain.',
      answer: "No — a hemisphere's total surface area includes the curved half (2πr², which is half of 4πr²) PLUS the flat circular base (πr²), making it more than half the full sphere's surface area.",
      checkMode: 'self',
    },

    // ── Q18 Hard — total surface area of hemisphere ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the total surface area of a hemisphere with radius 6 cm, including its flat circular base. Use π ≈ 3.14.',
      answer: 'Curved part = 2πr² = 2 × 3.14 × 36 = 226.08 cm². Flat base = πr² = 3.14 × 36 = 113.04 cm². Total = 226.08 + 113.04 = 339.12 cm².',
      checkMode: 'self',
    },

    // ── Q19 Hard — water tank total volume ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A water tank is a cylinder (radius 1.5 m, height 3 m) with a cone-shaped top (same radius, height 1 m) for drainage. Find the total volume in cubic metres. Use π ≈ 3.14.',
      answer: '23.83 m³',
      checkMode: 'auto',
      correctAnswer: '23.83',
      explanation: 'Cylinder: 3.14 × 1.5² × 3 = 21.195 m³\nCone: ⅓ × 3.14 × 1.5² × 1 = 2.355 m³\nTotal ≈ 23.83 m³ ✓',
    },

    // ── Q20 Hard — Lerato's claim about doubling radius ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says doubling the radius of a cone (keeping height constant) quadruples its volume. Is she correct? Explain with calculations.',
      answer: 'Yes — since volume depends on radius squared (Volume = ⅓πr²h), doubling the radius multiplies the volume by 2² = 4, confirming her statement.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered mensuration.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Outstanding! A perfect score — you have completely mastered mensuration for Grade 10. Keep it up!' },
    { minScore: 14, message: 'Excellent work! You have a very strong grasp of mensuration. Review any missed parts and you will have it perfect.' },
    { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 6, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — mensuration takes practice! Revisit the formulae and worked examples section by section, then try again." },
  ],
}
