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
