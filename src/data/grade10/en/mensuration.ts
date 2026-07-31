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
        'Labelled diagrams of a cylinder, cone, sphere and square pyramid each showing radius, height and slant height with colour coded dimensions',
      diagramSvg:
        '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="35" ry="12" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="35" x2="20" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="35" x2="90" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 20,115 A 35,12 0 0 0 90,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 20,115 A 35,12 0 0 1 90,115" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="35" x2="90" y2="35" stroke="#2563eb" stroke-width="2"/><text x="73" y="29" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><line x1="100" y1="35" x2="100" y2="115" stroke="#2563eb" stroke-width="1.6"/><text x="108" y="79" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="55" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Cylinder</text><ellipse cx="172" cy="115" rx="35" ry="12" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="20" x2="137" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="20" x2="207" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><line x1="172" y1="115" x2="207" y2="115" stroke="#2563eb" stroke-width="2"/><text x="190" y="129" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><line x1="172" y1="20" x2="172" y2="115" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="178" y="72" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="197" y="62" font-size="11" fill="#2563eb" font-weight="700">l</text><text x="172" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Cone</text><circle cx="290" cy="72" r="43" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="290" cy="72" rx="43" ry="14" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="4,3"/><line x1="290" y1="72" x2="333" y2="72" stroke="#2563eb" stroke-width="2"/><text x="311" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r</text><text x="290" y="148" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Sphere</text><polygon points="368,128 428,128 448,108 388,108" fill="#eff6ff" stroke="none"/><line x1="368" y1="128" x2="428" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="368" y1="128" x2="388" y2="108" stroke="#0f1f3d" stroke-width="2.5"/><line x1="428" y1="128" x2="448" y2="108" stroke="#0f1f3d" stroke-width="2.5"/><line x1="388" y1="108" x2="448" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="368" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="408" y1="25" x2="428" y2="128" stroke="#0f1f3d" stroke-width="2.5"/><line x1="408" y1="25" x2="388" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="448" y2="108" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="408" y1="25" x2="408" y2="118" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="426" y="75" font-size="11" fill="#2563eb" font-weight="700">h</text><text x="398" y="142" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">s</text><text x="408" y="160" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Pyramid</text></svg>',

      videoPlaceholder:
        'Short video revising volume and surface area formulae for cylinders, cones, spheres and pyramids with colour coded worked examples',
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
        'Diagram of a cylinder with a cone on top showing the internal joined circular face highlighted in orange and each component labelled in a different colour',
      diagramSvg:
        '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#2563eb" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#2563eb" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#dc2626" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#dc2626" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="#fed7aa" fill-opacity="0.5" stroke="#ea580c" stroke-width="2.5"/><line x1="110" y1="70" x2="153" y2="70" stroke="#0f1f3d" stroke-width="1.6"/><text x="132" y="63" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">r</text><line x1="40" y1="70" x2="40" y2="165" stroke="#2563eb" stroke-width="1.6"/><text x="26" y="120" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 120)">h₁</text><line x1="180" y1="70" x2="180" y2="15" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/><text x="193" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 193 45)">h₂</text><text x="110" y="200" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">internal face — excluded</text></svg>',

      videoPlaceholder:
        'Short video showing how to find the volume and surface area of combined solids by calculating each component separately and identifying internal faces to exclude',
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
        'Labelled diagram of a cylinder showing a known radius in blue and an unknown height marked with a question mark in green, illustrating a missing-dimension problem',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="40" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="40" x2="55" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 55,18 0 0 0 165,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 55,18 0 0 1 165,140" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="40" x2="163" y2="40" stroke="#2563eb" stroke-width="2"/><text x="137" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="40" x2="30" y2="140" stroke="#16a34a" stroke-width="2"/><text x="16" y="90" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(-90 16 90)">h = ?</text><text x="110" y="175" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Volume = 628 cm³ — find h</text></svg>',

      videoPlaceholder:
        'Short video showing how to rearrange volume and surface area formulae to find missing dimensions, with colour coded substitution steps',
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
        { difficulty: 'Easy', question: 'A rectangular prism has length 8 cm, width 5 cm and height 4 cm. Find its volume.', checkMode: 'auto', options: ['160 cm³', '40 cm³', '17 cm³', '320 cm³'], correctIndex: 0, explanation: 'V = length × width × height = 8 × 5 × 4 = 160 cm³. (40 cm³ only multiplies length × width and forgets the height; 17 cm³ mistakenly adds the dimensions instead of multiplying; 320 cm³ doubles the correct volume.)' },
        { difficulty: 'Easy', question: 'A cylinder has radius 4 cm and height 9 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['326.56 cm³', '452.16 cm³', '144 cm³', '1 808.64 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3.14 × 4² × 9 = 452.16 cm³. (326.56 cm³ is the surface area formula applied instead of volume; 144 cm³ leaves out π entirely; 1 808.64 cm³ mistakenly uses the diameter 8 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy', question: 'A cube has sides of 5 cm. Find its volume.', checkMode: 'auto', options: ['150 cm³', '25 cm³', '125 cm³', '15 cm³'], correctIndex: 2, explanation: 'V = side³ = 5³ = 125 cm³. (150 cm³ applies the surface-area formula 6×side² instead; 25 cm³ only squares the side; 15 cm³ multiplies the side by 3 instead of cubing it.)' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 5 cm and height 8 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['628 cm²', '251.2 cm²', '1 130.4 cm²', '408.2 cm²'], correctIndex: 3, explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 25 + 2 × 3.14 × 5 × 8 = 157 + 251.2 = 408.2 cm². (628 cm² is the volume formula applied by mistake; 251.2 cm² only includes the curved side and forgets the two circular ends; 1 130.4 cm² mistakenly uses the diameter 10 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 9 cm, width 6 cm and height 4 cm. Find its total surface area.', checkMode: 'auto', options: ['228 cm²', '216 cm²', '114 cm²', '108 cm²'], correctIndex: 0, explanation: 'SA = 2(lw + lh + wh) = 2(54 + 36 + 24) = 228 cm². (216 cm² is the volume formula (l×w×h) used by mistake; 114 cm² forgets to double the sum of the three face areas; 108 cm² only counts the top and bottom faces.)' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 3 cm and slant height 6 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['56.52 cm²', '84.78 cm²', '226.08 cm²', '169.56 cm²'], correctIndex: 1, explanation: 'SA = πr² + πrl = 3.14 × 9 + 3.14 × 3 × 6 = 28.26 + 56.52 = 84.78 cm². (56.52 cm² forgets the base circle πr² and only finds the curved surface; 226.08 cm² mistakenly uses the diameter 6 cm as the radius; 169.56 cm² swaps the radius and slant height in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 6 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 6 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['678.24 cm³', '452.16 cm³', '904.32 cm³', '7 234.56 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 216 = 904.32 cm³. (678.24 cm³ leaves out the 4/3 factor; 452.16 cm³ mistakenly applies the surface-area formula 4πr² instead; 7 234.56 cm³ uses the diameter 12 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 9 cm and height 10 cm. Find its volume.', checkMode: 'auto', options: ['810 cm³', '30 cm³', '120 cm³', '270 cm³'], correctIndex: 3, explanation: 'V = ⅓ × base area × height = ⅓ × 81 × 10 = 270 cm³. (810 cm³ forgets the ⅓ factor and gives the volume of a full prism; 30 cm³ mistakenly uses the base side (9) instead of the base area (9² = 81); 120 cm³ uses the base perimeter (4×9=36) in place of the base area.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 10 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 5 cm and height 12 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['314 cm³', '942 cm³', '1 256 cm³', '753.6 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 25 × 12 = 314 cm³. (942 cm³ forgets the ⅓ factor and calculates a cylinder’s volume instead; 1 256 cm³ mistakenly uses the diameter 10 cm as the radius; 753.6 cm³ swaps the radius and height values in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 7 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['153.86 cm²', '615.44 cm²', '1 436.03 cm²', '2 461.76 cm²'], correctIndex: 1, explanation: 'SA = 4πr² = 4 × 3.14 × 49 = 615.44 cm². (153.86 cm² leaves out the factor of 4; 1 436.03 cm² mistakenly applies the volume formula (4/3)πr³ instead; 2 461.76 cm² uses the diameter 14 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 6 cm and slant height 10 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['188.4 cm²', '502.4 cm²', '301.44 cm²', '828.96 cm²'], correctIndex: 2, explanation: 'SA = πr² + πrl = 3.14 × 36 + 3.14 × 6 × 10 = 113.04 + 188.4 = 301.44 cm². (188.4 cm² forgets the base circle and only finds the curved surface; 502.4 cm² swaps the radius and slant height in the formula; 828.96 cm² mistakenly uses the diameter 12 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 6 cm and slant height 5 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', options: ['60 cm²', '156 cm²', '36 cm²', '96 cm²'], correctIndex: 3, explanation: 'SA = base area + 4 × (½ × base side × slant height) = 36 + 4 × (½ × 6 × 5) = 36 + 60 = 96 cm². (60 cm² only adds the lateral triangles and forgets the square base; 156 cm² forgets to halve each triangular face before multiplying by 4; 36 cm² gives only the base area and ignores the four triangular faces.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 5 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 3 cm, height 8 cm) with a cone (same radius, height 5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['273.18 cm³', '226.08 cm³', '47.1 cm³', '367.38 cm³'], correctIndex: 0, explanation: 'Cylinder: πr²h = 3.14 × 9 × 8 = 226.08 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 9 × 5 = 47.1 cm³. Total = 226.08 + 47.1 = 273.18 cm³. (226.08 cm³ forgets to add the cone on top; 47.1 cm³ only calculates the cone and forgets the cylinder base; 367.38 cm³ forgets the ⅓ factor when adding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 6 cm) with a hemisphere (radius 3 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['216 cm³', '272.52 cm³', '329.04 cm³', '56.52 cm³'], correctIndex: 1, explanation: 'Cube: 6³ = 216 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 27 = 56.52 cm³. Total = 216 + 56.52 = 272.52 cm³. (216 cm³ forgets to add the hemisphere on top; 329.04 cm³ uses a full sphere instead of a hemisphere; 56.52 cm³ only calculates the hemisphere and forgets the cube.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 6 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 5 cm, height 9 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['706.5 cm³', '157 cm³', '863.5 cm³', '1 177.5 cm³'], correctIndex: 2, explanation: 'Cylinder: πr²h = 3.14 × 25 × 9 = 706.5 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 25 × 6 = 157 cm³. Total = 706.5 + 157 = 863.5 cm³. (706.5 cm³ forgets to add the cone; 157 cm³ only calculates the cone and forgets the cylinder; 1 177.5 cm³ forgets the ⅓ factor when finding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 3 cm, height 8 cm) with a hemisphere (same radius) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', options: ['263.76 cm²', '207.24 cm²', '292.02 cm²', '235.5 cm²'], correctIndex: 3, explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 3 × 8 = 150.72 cm². Cylinder bottom circle: πr² = 3.14 × 9 = 28.26 cm². Hemisphere curved surface: 2πr² = 2 × 3.14 × 9 = 56.52 cm². Total = 150.72 + 28.26 + 56.52 = 235.5 cm². (263.76 cm² wrongly includes the internal joined circle as well; 207.24 cm² forgets the cylinder’s bottom circle; 292.02 cm² uses the full sphere’s curved surface area instead of just the hemisphere’s.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 8 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cube has side length 4 cm. It is enlarged so that its new side length is 12 cm. Which of the following correctly gives the scale factor applied to (a) the surface area and (b) the volume?', checkMode: 'auto', options: ['Surface area × 9; Volume × 27', 'Surface area × 27; Volume × 9', 'Surface area × 3; Volume × 3', 'Surface area × 6; Volume × 9'], correctIndex: 0, explanation: 'Linear scale factor = 12 ÷ 4 = 3. Surface area scale factor = 3² = 9. Volume scale factor = 3³ = 27. (Option B swaps the squared and cubed factors; Option C mistakenly applies the linear factor 3 to both instead of squaring/cubing it; Option D doubles the linear factor for area instead of squaring it.)' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="45" x2="90" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="65" y1="80" x2="90" y2="65" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="45" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="55" y="115" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc2)"/><defs><marker id="arrowSc2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><rect x="200" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="170" y1="33" x2="200" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="33" x2="290" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="260" y1="103" x2="290" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="170" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="215" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="215" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A sphere has a surface area of 452.16 cm². Find its radius. Use π ≈ 3.14.', checkMode: 'auto', options: ['36 cm', '6 cm', '8.49 cm', '12 cm'], correctIndex: 1, explanation: 'SA = 4πr² → 452.16 = 4 × 3.14 × r² → r² = 452.16 ÷ 12.56 = 36 → r = √36 = 6 cm. (36 cm forgets to take the square root of r²; 8.49 cm mistakenly uses the hemisphere surface-area formula 2πr²; 12 cm divides by π alone instead of 4π, forgetting the factor of 4.)' },
        { difficulty: 'Hard', question: 'A square pyramid has a base side of 6 cm and volume 216 cm³. Find its height.', checkMode: 'auto', options: ['6 cm', '108 cm', '18 cm', '27 cm'], correctIndex: 2, explanation: 'V = ⅓ × base area × h → 216 = ⅓ × 36 × h → 216 = 12h → h = 18 cm. (6 cm comes from forgetting the ⅓ factor; 108 cm mistakenly uses the base side (6) instead of the base area (36); 27 cm uses the base perimeter (4×6=24) in place of the base area.)' },
        { difficulty: 'Hard', question: "Lerato says that doubling the radius of a sphere (while keeping the shape a sphere) multiplies its volume by 8. Is she correct?", checkMode: 'auto', options: ['No — doubling the radius only doubles the volume, since volume is directly proportional to radius.', 'No — doubling the radius multiplies the volume by 4, since volume depends on r².', 'Yes, but only because π is being doubled as well in the calculation.', 'Yes — since V = (4/3)πr³ depends on r cubed, doubling the radius multiplies the volume by 2³ = 8, confirming her statement.'], correctIndex: 3, explanation: 'V = (4/3)πr³ depends on r cubed (not linearly, and not on r²), so doubling r multiplies V by 2³ = 8. Lerato is correct.' },
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
        { difficulty: 'Easy', question: 'A rectangular prism has length 12 cm, width 5 cm and height 3 cm. Find its volume.', checkMode: 'auto', options: ['180 cm³', '60 cm³', '20 cm³', '360 cm³'], correctIndex: 0, explanation: 'V = length × width × height = 12 × 5 × 3 = 180 cm³. (60 cm³ only multiplies length × width and forgets the height; 20 cm³ mistakenly adds the dimensions instead of multiplying; 360 cm³ doubles the correct volume.)' },
        { difficulty: 'Easy', question: 'A cylinder has radius 5 cm and height 6 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['345.4 cm³', '471 cm³', '150 cm³', '1 884 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3.14 × 5² × 6 = 3.14 × 25 × 6 = 471 cm³. (345.4 cm³ is the surface area formula applied instead of volume; 150 cm³ leaves out π entirely; 1 884 cm³ mistakenly uses the diameter 10 cm as the radius.)' },
        { difficulty: 'Easy', question: 'A cube has sides of 7 cm. Find its volume.', checkMode: 'auto', options: ['294 cm³', '49 cm³', '343 cm³', '21 cm³'], correctIndex: 2, explanation: 'V = side³ = 7³ = 343 cm³. (294 cm³ applies the surface-area formula 6×side² instead; 49 cm³ only squares the side; 21 cm³ multiplies the side by 3 instead of cubing it.)' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 4 cm and height 9 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['452.16 cm²', '226.08 cm²', '854.08 cm²', '326.56 cm²'], correctIndex: 3, explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 16 + 2 × 3.14 × 4 × 9 = 100.48 + 226.08 = 326.56 cm². (452.16 cm² is the volume formula applied by mistake; 226.08 cm² only includes the curved side and forgets the two circular ends; 854.08 cm² mistakenly uses the diameter 8 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 10 cm, width 4 cm and height 3 cm. Find its total surface area.', checkMode: 'auto', options: ['164 cm²', '120 cm²', '82 cm²', '80 cm²'], correctIndex: 0, explanation: 'SA = 2(lw + lh + wh) = 2(40 + 30 + 12) = 164 cm². (120 cm² is the volume formula (l×w×h) used by mistake; 82 cm² forgets to double the sum of the three face areas; 80 cm² only counts the top and bottom faces.)' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 4 cm and slant height 7 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['87.92 cm²', '138.16 cm²', '376.8 cm²', '241.78 cm²'], correctIndex: 1, explanation: 'SA = πr² + πrl = 3.14 × 16 + 3.14 × 4 × 7 = 50.24 + 87.92 = 138.16 cm². (87.92 cm² forgets the base circle πr² and only finds the curved surface; 376.8 cm² mistakenly uses the diameter 8 cm as the radius; 241.78 cm² swaps the radius and slant height in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 7 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 4.5 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['286.13 cm³', '254.34 cm³', '381.51 cm³', '3 052.08 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 91.125 ≈ 381.51 cm³. (286.13 cm³ leaves out the 4/3 factor; 254.34 cm³ mistakenly applies the surface-area formula 4πr² instead; 3 052.08 cm³ uses the diameter 9 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4.5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 8 cm and height 9 cm. Find its volume.', checkMode: 'auto', options: ['576 cm³', '24 cm³', '96 cm³', '192 cm³'], correctIndex: 3, explanation: 'V = ⅓ × base area × height = ⅓ × 64 × 9 = 192 cm³. (576 cm³ forgets the ⅓ factor and gives the volume of a full prism; 24 cm³ mistakenly uses the base side (8) instead of the base area (8²=64); 96 cm³ uses the base perimeter (4×8=32) in place of the base area.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 6 cm and height 10 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['376.8 cm³', '1 130.4 cm³', '1 507.2 cm³', '628 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 36 × 10 = 376.8 cm³. (1 130.4 cm³ forgets the ⅓ factor and calculates a cylinder’s volume instead; 1 507.2 cm³ mistakenly uses the diameter 12 cm as the radius; 628 cm³ swaps the radius and height values in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 10 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 9 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['254.34 cm²', '1 017.36 cm²', '3 052.08 cm²', '4 069.44 cm²'], correctIndex: 1, explanation: 'SA = 4πr² = 4 × 3.14 × 81 = 1 017.36 cm². (254.34 cm² leaves out the factor of 4; 3 052.08 cm² mistakenly applies the volume formula (4/3)πr³ instead; 4 069.44 cm² uses the diameter 18 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 5 cm and slant height 8 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['125.6 cm²', '326.56 cm²', '204.1 cm²', '565.2 cm²'], correctIndex: 2, explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 8 = 78.5 + 125.6 = 204.1 cm². (125.6 cm² forgets the base circle and only finds the curved surface; 326.56 cm² swaps the radius and slant height in the formula; 565.2 cm² mistakenly uses the diameter 10 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 8 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 8 cm and slant height 6 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', options: ['96 cm²', '256 cm²', '64 cm²', '160 cm²'], correctIndex: 3, explanation: 'SA = base area + 4 × (½ × base side × slant height) = 64 + 4 × (½ × 8 × 6) = 64 + 96 = 160 cm². (96 cm² only adds the lateral triangles and forgets the square base; 256 cm² forgets to halve each triangular face before multiplying by 4; 64 cm² gives only the base area and ignores the four triangular faces.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 4 cm, height 10 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['602.88 cm³', '502.4 cm³', '100.48 cm³', '803.84 cm³'], correctIndex: 0, explanation: 'Cylinder: πr²h = 3.14 × 16 × 10 = 502.4 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 16 × 6 = 100.48 cm³. Total = 502.4 + 100.48 = 602.88 cm³. (502.4 cm³ forgets to add the cone on top; 100.48 cm³ only calculates the cone and forgets the cylinder base; 803.84 cm³ forgets the ⅓ factor when adding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 5 cm) with a hemisphere (radius 2.5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['125 cm³', '157.71 cm³', '190.42 cm³', '32.71 cm³'], correctIndex: 1, explanation: 'Cube: 5³ = 125 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 15.625 ≈ 32.71 cm³. Total ≈ 125 + 32.71 = 157.71 cm³. (125 cm³ forgets to add the hemisphere on top; 190.42 cm³ uses a full sphere instead of a hemisphere; 32.71 cm³ only calculates the hemisphere and forgets the cube.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 6 cm, height 7 cm) with a cone (same radius, height 5 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['791.28 cm³', '188.4 cm³', '979.68 cm³', '1 356.48 cm³'], correctIndex: 2, explanation: 'Cylinder: πr²h = 3.14 × 36 × 7 = 791.28 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 36 × 5 = 188.4 cm³. Total = 791.28 + 188.4 = 979.68 cm³. (791.28 cm³ forgets to add the cone; 188.4 cm³ only calculates the cone and forgets the cylinder; 1 356.48 cm³ forgets the ⅓ factor when finding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 7 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 5 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 4 cm, height 10 cm) with a cone (same radius, height 3 cm) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', options: ['414.48 cm²', '314 cm²', '339.12 cm²', '364.24 cm²'], correctIndex: 3, explanation: 'Cone slant height: l = √(4² + 3²) = √25 = 5 cm. Cylinder curved surface: 2πrh = 2 × 3.14 × 4 × 10 = 251.2 cm². Cylinder bottom circle: πr² = 3.14 × 16 = 50.24 cm². Cone curved surface: πrl = 3.14 × 4 × 5 = 62.8 cm². Total = 251.2 + 50.24 + 62.8 = 364.24 cm². (414.48 cm² wrongly includes the internal joined circle as well; 314 cm² forgets the cylinder’s bottom circle; 339.12 cm² mistakenly uses the cone’s height (3 cm) instead of its slant height (5 cm) in the curved-surface formula.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 3 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A sphere has radius 2 cm. It is enlarged so that its new radius is 6 cm. Which of the following correctly gives the scale factor applied to (a) the surface area and (b) the volume?', checkMode: 'auto', options: ['Surface area × 9; Volume × 27', 'Surface area × 27; Volume × 9', 'Surface area × 3; Volume × 3', 'Surface area × 6; Volume × 9'], correctIndex: 0, explanation: 'Linear scale factor = 6 ÷ 2 = 3. Surface area scale factor = 3² = 9. Volume scale factor = 3³ = 27. (Option B swaps the squared and cubed factors; Option C mistakenly applies the linear factor 3 to both instead of squaring/cubing it; Option D doubles the linear factor for area instead of squaring it.)' , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="65" r="30" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="55" cy="65" rx="30" ry="9" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="105" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="55" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="65" x2="150" y2="65" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc3)"/><defs><marker id="arrowSc3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><circle cx="245" cy="65" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><ellipse cx="245" cy="65" rx="65" ry="18" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="245" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="245" y="170" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A cone has volume 113.04 cm³ and radius 3 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', options: ['4 cm', '12 cm', '3 cm', '18 cm'], correctIndex: 1, explanation: 'V = ⅓πr²h → 113.04 = ⅓ × 3.14 × 9 × h → 113.04 = 9.42h → h = 12 cm. (4 cm comes from forgetting the ⅓ factor; 3 cm mistakenly uses the diameter 6 cm as the radius; 18 cm uses 2r (6) instead of r² (9) in the substitution.)' },
        { difficulty: 'Hard', question: 'A cone has volume 392.5 cm³ and radius 5 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', options: ['5 cm', '3.75 cm', '15 cm', '37.5 cm'], correctIndex: 2, explanation: 'V = ⅓πr²h → 392.5 = ⅓ × 3.14 × 25 × h → 392.5 = 26.1666...h → h = 15 cm. (5 cm comes from forgetting the ⅓ factor; 3.75 cm mistakenly uses the diameter 10 cm as the radius; 37.5 cm uses 2r (10) instead of r² (25) in the substitution.)' },
        { difficulty: 'Hard', question: "Sipho says that tripling the height of a cone (while keeping the radius the same) multiplies its volume by 3. Is he correct?", checkMode: 'auto', options: ['No — tripling the height multiplies the volume by 9, since volume depends on h².', 'No — tripling the height multiplies the volume by 27, since volume depends on h³ like a sphere.', 'Yes, but only if the radius is also tripled at the same time.', 'Yes — since V = ⅓πr²h depends on h to the first power only, tripling the height multiplies the volume by exactly 3, confirming his statement.'], correctIndex: 3, explanation: 'V = ⅓πr²h depends on h to the first power only (r is unchanged), so tripling h multiplies V by exactly 3. Sipho is correct.' },
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
        { difficulty: 'Easy', question: 'A rectangular prism has length 11 cm, width 4 cm and height 6 cm. Find its volume.', checkMode: 'auto', options: ['264 cm³', '44 cm³', '21 cm³', '528 cm³'], correctIndex: 0, explanation: 'V = length × width × height = 11 × 4 × 6 = 264 cm³. (44 cm³ only multiplies length × width and forgets the height; 21 cm³ mistakenly adds the dimensions instead of multiplying; 528 cm³ doubles the correct volume.)' },
        { difficulty: 'Easy', question: 'A cylinder has radius 2 cm and height 12 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['175.84 cm³', '150.72 cm³', '48 cm³', '602.88 cm³'], correctIndex: 1, explanation: 'V = πr²h = 3.14 × 2² × 12 = 150.72 cm³. (175.84 cm³ is the surface area formula applied instead of volume; 48 cm³ leaves out π entirely; 602.88 cm³ mistakenly uses the diameter 4 cm as the radius.)' },
        { difficulty: 'Easy', question: 'A cube has sides of 9 cm. Find its volume.', checkMode: 'auto', options: ['486 cm³', '81 cm³', '729 cm³', '27 cm³'], correctIndex: 2, explanation: 'V = side³ = 9³ = 729 cm³. (486 cm³ applies the surface-area formula 6×side² instead; 81 cm³ only squares the side; 27 cm³ multiplies the side by 3 instead of cubing it.)' },

        // Block 2 — Surface area of cylinder / prism / cone (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A cylinder has radius 6 cm and height 5 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['565.2 cm²', '188.4 cm²', '1 281.12 cm²', '414.48 cm²'], correctIndex: 3, explanation: 'SA = 2πr² + 2πrh = 2 × 3.14 × 36 + 2 × 3.14 × 6 × 5 = 226.08 + 188.4 = 414.48 cm². (565.2 cm² is the volume formula applied by mistake; 188.4 cm² only includes the curved side and forgets the two circular ends; 1 281.12 cm² mistakenly uses the diameter 12 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="30" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'A rectangular prism has length 12 cm, width 5 cm and height 2 cm. Find its total surface area.', checkMode: 'auto', options: ['188 cm²', '120 cm²', '94 cm²', '68 cm²'], correctIndex: 0, explanation: 'SA = 2(lw + lh + wh) = 2(60 + 24 + 10) = 188 cm². (120 cm² is the volume formula (l×w×h) used by mistake; 94 cm² forgets to double the sum of the three face areas; 68 cm² leaves out the top and bottom faces (2lw) from the total.)' },
        { difficulty: 'Easy-Medium', question: 'A cone has radius 5 cm and slant height 9 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['141.3 cm²', '219.8 cm²', '596.6 cm²', '395.64 cm²'], correctIndex: 1, explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 9 = 78.5 + 141.3 = 219.8 cm². (141.3 cm² forgets the base circle πr² and only finds the curved surface; 596.6 cm² mistakenly uses the diameter 10 cm as the radius; 395.64 cm² swaps the radius and slant height in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 9 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},

        // Block 3 — Volume of sphere / pyramid / cone (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 3 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['84.78 cm³', '37.68 cm³', '113.04 cm³', '904.32 cm³'], correctIndex: 2, explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 27 = 113.04 cm³. (84.78 cm³ leaves out the 4/3 factor; 37.68 cm³ mistakenly uses r² instead of r³, forgetting to cube the radius; 904.32 cm³ uses the diameter 6 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 10 cm and height 6 cm. Find its volume.', checkMode: 'auto', options: ['600 cm³', '20 cm³', '80 cm³', '200 cm³'], correctIndex: 3, explanation: 'V = ⅓ × base area × height = ⅓ × 100 × 6 = 200 cm³. (600 cm³ forgets the ⅓ factor and gives the volume of a full prism; 20 cm³ mistakenly uses the base side (10) instead of the base area (10²=100); 80 cm³ uses the base perimeter (4×10=40) in place of the base area.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="147" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="160" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 4 cm and height 15 cm. Find its volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['251.2 cm³', '753.6 cm³', '1 004.8 cm³', '942 cm³'], correctIndex: 0, explanation: 'V = ⅓πr²h = ⅓ × 3.14 × 16 × 15 = 251.2 cm³. (753.6 cm³ forgets the ⅓ factor and calculates a cylinder’s volume instead; 1 004.8 cm³ mistakenly uses the diameter 8 cm as the radius; 942 cm³ swaps the radius and height values in the formula.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="145" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">h = 15 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},

        // Block 4 — Surface area of sphere / cone / pyramid (Medium)
        { difficulty: 'Medium', question: 'A sphere has radius 4 cm. Find its surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['50.24 cm²', '200.96 cm²', '267.95 cm²', '803.84 cm²'], correctIndex: 1, explanation: 'SA = 4πr² = 4 × 3.14 × 16 = 200.96 cm². (50.24 cm² leaves out the factor of 4; 267.95 cm² mistakenly applies the volume formula (4/3)πr³ instead; 803.84 cm² uses the diameter 8 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="100" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="100" rx="65" ry="20" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="100" x2="175" y2="100" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="100" r="2.5" fill="#2563eb"/><text x="142" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A cone has radius 7 cm and slant height 12 cm. Find its total surface area. Use π ≈ 3.14.', checkMode: 'auto', options: ['263.76 cm²', '715.92 cm²', '417.62 cm²', '1 142.96 cm²'], correctIndex: 2, explanation: 'SA = πr² + πrl = 3.14 × 49 + 3.14 × 7 × 12 = 153.86 + 263.76 = 417.62 cm². (263.76 cm² forgets the base circle and only finds the curved surface; 715.92 cm² swaps the radius and slant height in the formula; 1 142.96 cm² mistakenly uses the diameter 14 cm as the radius.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="145" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="145" x2="110" y2="35" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="165" y2="145" stroke="#2563eb" stroke-width="2.5"/><text x="150" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">l = 12 cm</text><text x="95" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'A square pyramid has a base side of 10 cm and slant height 13 cm (the slant height of each triangular face). Find its total surface area.', checkMode: 'auto', options: ['260 cm²', '620 cm²', '100 cm²', '360 cm²'], correctIndex: 3, explanation: 'SA = base area + 4 × (½ × base side × slant height) = 100 + 4 × (½ × 10 × 13) = 100 + 260 = 360 cm². (260 cm² only adds the lateral triangles and forgets the square base; 620 cm² forgets to halve each triangular face before multiplying by 4; 100 cm² gives only the base area and ignores the four triangular faces.)' , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 155,140 190,155 80,155" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="155" x2="110" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="140" x2="80" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="140" x2="190" y2="155" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="140" x2="155" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="172.5" y2="147.5" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3,2"/><text x="146" y="83" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">l = 13 cm</text><text x="100" y="152" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>'},

        // Block 5 — Composite solid volume (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 5 cm, height 6 cm) with a cone (same radius, height 9 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['706.5 cm³', '471 cm³', '235.5 cm³', '1 177.5 cm³'], correctIndex: 0, explanation: 'Cylinder: πr²h = 3.14 × 25 × 6 = 471 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 25 × 9 = 235.5 cm³. Total = 471 + 235.5 = 706.5 cm³. (471 cm³ forgets to add the cone on top; 235.5 cm³ only calculates the cone and forgets the cylinder base; 1 177.5 cm³ forgets the ⅓ factor when adding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 6 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 9 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cube (side 4 cm) with a hemisphere (radius 2 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['64 cm³', '80.75 cm³', '33.49 cm³', '16.75 cm³'], correctIndex: 1, explanation: 'Cube: 4³ = 64 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 8 ≈ 16.75 cm³. Total ≈ 64 + 16.75 = 80.75 cm³. (64 cm³ forgets to add the hemisphere on top; 33.49 cm³ uses a full sphere instead of a hemisphere; 16.75 cm³ only calculates the hemisphere and forgets the cube.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 80,90 A 30,10 0 0 1 140,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,90 A 45,50 0 0 1 110,45 A 45,50 0 0 1 155,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="90" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="90" x2="65" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="90" x2="155" y2="180" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 0 155,180" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,180 A 45,15 0 0 1 155,180" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="90" x2="153" y2="90" stroke="#2563eb" stroke-width="2"/><text x="132" y="100" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><text x="110" y="205" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 4 cm</text></svg>'},
        { difficulty: 'Medium-Hard', question: 'A solid consists of a cylinder (radius 7 cm, height 8 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', checkMode: 'auto', options: ['1 230.88 cm³', '307.72 cm³', '1 538.6 cm³', '2 154.04 cm³'], correctIndex: 2, explanation: 'Cylinder: πr²h = 3.14 × 49 × 8 = 1 230.88 cm³. Cone: ⅓πr²h = ⅓ × 3.14 × 49 × 6 = 307.72 cm³. Total = 1 230.88 + 307.72 = 1 538.6 cm³. (1 230.88 cm³ forgets to add the cone; 307.72 cm³ only calculates the cone and forgets the cylinder; 2 154.04 cm³ forgets the ⅓ factor when finding the cone’s volume.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text></svg>'},

        // Block 6 — Composite surface area, scaling and missing dimensions (Hard)
        { difficulty: 'Hard', question: 'A solid consists of a cylinder (radius 2 cm, height 9 cm) with a hemisphere (same radius) on top. Find the total surface area, excluding the internal joined circle. Use π ≈ 3.14.', checkMode: 'auto', options: ['163.28 cm²', '138.16 cm²', '175.84 cm²', '150.72 cm²'], correctIndex: 3, explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 2 × 9 = 113.04 cm². Cylinder bottom circle: πr² = 3.14 × 4 = 12.56 cm². Hemisphere curved surface: 2πr² = 2 × 3.14 × 4 = 25.12 cm². Total = 113.04 + 12.56 + 25.12 = 150.72 cm². (163.28 cm² wrongly includes the internal joined circle as well; 138.16 cm² forgets the cylinder’s bottom circle; 175.84 cm² uses the full sphere’s curved surface area instead of just the hemisphere’s.)' , diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="82" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 9 cm</text></svg>'},
        { difficulty: 'Hard', question: 'A cylinder has radius 3 cm and height 5 cm. Both dimensions are enlarged by a scale factor of 4 (new radius 12 cm, new height 20 cm). Which of the following correctly gives the scale factor applied to (a) the surface area and (b) the volume?', checkMode: 'auto', options: ['Surface area × 16; Volume × 64', 'Surface area × 64; Volume × 16', 'Surface area × 4; Volume × 4', 'Surface area × 8; Volume × 16'], correctIndex: 0, explanation: 'Linear scale factor = 4. Surface area scale factor = 4² = 16. Volume scale factor = 4³ = 64. (Option B swaps the squared and cubed factors; Option C mistakenly applies the linear factor 4 to both instead of squaring/cubing it; Option D doubles the linear factor for area instead of squaring it, and uses the squared value instead of the cubed value for volume.)' , diagramSvg: '<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="35" rx="25" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="30" y1="35" x2="30" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><line x1="80" y1="35" x2="80" y2="90" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 0 80,90" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 30,90 A 25,9 0 0 1 80,90" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="55" y="115" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r=3,h=5</text><text x="55" y="131" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="105" y1="90" x2="150" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc4)"/><defs><marker id="arrowSc4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><ellipse cx="270" cy="30" rx="70" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="200" y1="30" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><line x1="340" y1="30" x2="340" y2="140" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 0 340,140" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><path d="M 200,140 A 70,18 0 0 1 340,140" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="270" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r=12 cm, h=20 cm</text><text x="270" y="196" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'A cylinder has volume 1 256 cm³ and radius 10 cm. Find its height. Use π ≈ 3.14.', checkMode: 'auto', options: ['40 cm', '4 cm', '1 cm', '12.56 cm'], correctIndex: 1, explanation: 'V = πr²h → 1 256 = 3.14 × 100 × h → 1 256 = 314h → h = 4 cm. (40 cm forgets to square the radius, dividing by r instead of r²; 1 cm mistakenly uses the diameter 20 cm as the radius; 12.56 cm leaves out π from the calculation.)' },
        { difficulty: 'Hard', question: 'A sphere has volume 113.04 cm³. Find its radius. Use π ≈ 3.14.', checkMode: 'auto', options: ['27 cm', '3.30 cm', '3 cm', '2.08 cm'], correctIndex: 2, explanation: 'V = (4/3)πr³ → 113.04 = (4/3) × 3.14 × r³ → r³ = 113.04 ÷ 4.18666... = 27 → r = ∛27 = 3 cm. (27 cm forgets to take the cube root and gives r³ instead of r; 3.30 cm comes from leaving out the 4/3 factor, solving r³ = 113.04 ÷ 3.14 = 36 instead; 2.08 cm mistakenly divides by 4π as if using the surface-area formula rearranged incorrectly.)' },
        { difficulty: 'Hard', question: "Amahle says that halving the radius of a cylinder (while keeping the height the same) reduces its volume to a quarter of the original. Is she correct?", checkMode: 'auto', options: ['No — halving the radius only halves the volume, since volume is directly proportional to radius.', 'No — halving the radius reduces the volume to one eighth, since volume depends on r³ like a sphere.', 'Yes, but only because π is also being halved in the calculation.', 'Yes — since V = πr²h depends on r squared, halving the radius multiplies the volume by (½)² = ¼, confirming her statement.'], correctIndex: 3, explanation: 'V = πr²h depends on r squared (not linearly, and not on r³ like a sphere), so halving r multiplies V by (½)² = ¼. Amahle is correct.' },
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
      checkMode: 'auto',
      options: ['942 cm³', '533.8 cm³', '300 cm³', '3 768 cm³'],
      correctIndex: 0,
      explanation: 'V = πr²h = 3.14 × 25 × 12 = 942 cm³. (533.8 cm³ is the surface area formula applied instead of volume; 300 cm³ leaves out π entirely; 3 768 cm³ mistakenly uses the diameter 10 cm as the radius.)',
    },

    // ── Q2 Medium — surface area of sphere ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the surface area of a sphere with radius 7 cm. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['153.86 cm²', '615.44 cm²', '1 436.03 cm²', '2 461.76 cm²'],
      correctIndex: 1,
      explanation: 'SA = 4πr² = 4 × 3.14 × 49 = 615.44 cm². (153.86 cm² leaves out the factor of 4; 1 436.03 cm² mistakenly applies the volume formula (4/3)πr³ instead; 2 461.76 cm² uses the diameter 14 cm as the radius.)',
    },

    // ── Q3 Hard — check Sipho's cone calculation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho calculates the volume of a cone with radius 3 cm and height 8 cm. Which of the following is the correct volume?",
      checkMode: 'auto',
      options: ['226.08 cm³', '301.44 cm³', '75.36 cm³', '200.96 cm³'],
      correctIndex: 2,
      explanation: "V = ⅓πr²h = ⅓ × 3.14 × 9 × 8 = 75.36 cm³, so Sipho's answer is correct. (226.08 cm³ forgets the ⅓ factor and gives a full cylinder's volume; 301.44 cm³ mistakenly uses the diameter 6 cm as the radius; 200.96 cm³ swaps the radius and height values in the formula.)",
    },

    // ── Q4 Easy — volume of square pyramid ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the volume of a square pyramid with base side 6 cm and height 10 cm.',
      checkMode: 'auto',
      options: ['360 cm³', '20 cm³', '80 cm³', '120 cm³'],
      correctIndex: 3,
      explanation: 'V = ⅓ × base area × height = ⅓ × 36 × 10 = 120 cm³. (360 cm³ forgets the ⅓ factor and gives the volume of a full prism; 20 cm³ mistakenly uses the base side (6) instead of the base area (6²=36); 80 cm³ uses the base perimeter (4×6=24) in place of the base area.)',
    },

    // ── Q5 Medium — volume of sphere ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the volume of a sphere with radius 4.5 cm. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['381.51 cm³', '286.13 cm³', '254.34 cm³', '3 052.08 cm³'],
      correctIndex: 0,
      explanation: 'V = (4/3)πr³ = (4/3) × 3.14 × 91.125 ≈ 381.51 cm³. (286.13 cm³ leaves out the 4/3 factor; 254.34 cm³ mistakenly applies the surface-area formula 4πr² instead; 3 052.08 cm³ uses the diameter 9 cm as the radius.)',
    },

    // ── Q6 Hard — combined solid volume ──────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A solid is a cylinder (radius 4 cm, height 12 cm) with a hemisphere (same radius) on top. Find its total volume. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['602.88 cm³', '736.85 cm³', '870.83 cm³', '133.97 cm³'],
      correctIndex: 1,
      explanation: 'Cylinder: πr²h = 3.14 × 16 × 12 = 602.88 cm³. Hemisphere: ½ × (4/3)πr³ = ½ × (4/3) × 3.14 × 64 ≈ 133.97 cm³. Total ≈ 602.88 + 133.97 = 736.85 cm³. (602.88 cm³ forgets to add the hemisphere on top; 870.83 cm³ uses a full sphere instead of a hemisphere; 133.97 cm³ only calculates the hemisphere and forgets the cylinder.)',
    },

    // ── Q7 Medium — capsule volume ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A capsule has a cylinder (radius 3 cm, height 15 cm) with a hemisphere on each end. Find the total volume. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['423.9 cm³', '480.42 cm³', '536.94 cm³', '649.98 cm³'],
      correctIndex: 2,
      explanation: 'Cylinder: 3.14 × 9 × 15 = 423.9 cm³. Two hemispheres = one sphere: (4/3) × 3.14 × 27 ≈ 113.04 cm³. Total ≈ 423.9 + 113.04 = 536.94 cm³. (423.9 cm³ forgets to add the two hemispherical ends; 480.42 cm³ only adds one hemisphere instead of both; 649.98 cm³ mistakenly treats each end as a full sphere instead of a hemisphere.)',
    },

    // ── Q8 Hard — surface area of cone ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the surface area of a cone with radius 5 cm and slant height 13 cm. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['204.1 cm²', '722.2 cm²', '734.76 cm²', '282.6 cm²'],
      correctIndex: 3,
      explanation: 'SA = πr² + πrl = 3.14 × 25 + 3.14 × 5 × 13 = 78.5 + 204.1 = 282.6 cm². (204.1 cm² forgets the base circle and only finds the curved surface; 722.2 cm² mistakenly uses the diameter 10 cm as the radius; 734.76 cm² swaps the radius and slant height in the formula.)',
    },

    // ── Q9 Hard — Lerato's claim about combining cylinders ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says combining two cylinders end to end doubles the surface area of one cylinder. Is she correct?',
      checkMode: 'auto',
      options: [
        'No — when joined, the two circular faces where they connect become internal and are no longer part of the outer surface, so the total surface area is less than double.',
        'Yes — joining two identical solids always exactly doubles the total surface area, regardless of shape.',
        'No — the total surface area actually stays the same as one cylinder, since the two joined faces cancel out completely.',
        'Yes, but only if the two cylinders have different radii.',
      ],
      correctIndex: 0,
      explanation: "When two cylinders are joined end to end, the two circular faces where they meet become internal and are excluded from the outer surface area, so the total is less than double one cylinder's surface area — Lerato is incorrect. (Option B ignores that joined faces become internal; Option C wrongly assumes the joined faces cancel out down to a single cylinder's worth of area; Option D is irrelevant since the joining effect applies regardless of whether the radii match.)",
    },

    // ── Q10 Easy — find radius of cylinder ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A cylinder has volume 251.2 cm³ and height 8 cm. Find its radius. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['10 cm', '3.16 cm', '5.60 cm', '2.24 cm'],
      correctIndex: 1,
      explanation: 'V = πr²h → 251.2 = 3.14 × r² × 8 → r² = 251.2 ÷ 25.12 = 10 → r = √10 ≈ 3.16 cm. (10 cm forgets to take the square root of r² and gives r² instead of r; 5.60 cm leaves out π from the calculation; 2.24 cm mistakenly divides by 2πh instead of πh, confusing with the curved surface area formula.)',
    },

    // ── Q11 Medium — find radius of cone ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A cone has volume 188.4 cm³ and height 9 cm. Find its radius (rounded to 2 decimal places). Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['20 cm', '4.47 cm', '2.58 cm', '7.92 cm'],
      correctIndex: 1,
      explanation: 'V = ⅓πr²h → 188.4 = ⅓ × 3.14 × r² × 9 → 188.4 = 9.42r² → r² = 20 → r = √20 ≈ 4.47 cm. (20 cm forgets to take the square root and gives r² instead of r; 2.58 cm forgets the ⅓ factor, solving πr²h = 188.4 instead; 7.92 cm leaves out π from the calculation.)',
    },

    // ── Q12 Hard — find radius from sphere surface area ───────────────────────
    {
      difficulty: 'Hard',
      question: 'A sphere has surface area 314 cm². Find its radius. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['10 cm', '25 cm', '4.22 cm', '5 cm'],
      correctIndex: 3,
      explanation: 'SA = 4πr² → 314 = 4 × 3.14 × r² → r² = 314 ÷ 12.56 = 25 → r = √25 = 5 cm. (10 cm forgets the factor of 4, dividing by π alone instead of 4π; 25 cm forgets to take the square root and gives r² instead of r; 4.22 cm mistakenly uses the volume formula (4/3)πr³ instead of the surface-area formula.)',
    },

    // ── Q13 Hard — find height of pyramid ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo's pyramid has a square base with side 5 cm and volume 100 cm³. Find its height.",
      checkMode: 'auto',
      options: ['12 cm', '4 cm', '60 cm', '15 cm'],
      correctIndex: 0,
      explanation: 'Volume = ⅓ × base area × height → 100 = ⅓ × 25 × h → 100 = 8.33h → h = 12 cm. (4 cm comes from forgetting the ⅓ factor and solving base-area × h = 100 instead; 60 cm mistakenly uses the base side (5) instead of the base area (25); 15 cm uses the base perimeter (4×5=20) in place of the base area.)',
    },

    // ── Q14 Hard — volume of combined solid ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A solid consists of a cone (radius 5 cm, height 12 cm) on top of a cylinder (same radius, height 8 cm). Find the total volume. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['314 cm³', '942 cm³', '628 cm³', '1 570 cm³'],
      correctIndex: 1,
      explanation: 'Cone: ⅓ × 3.14 × 25 × 12 = 314 cm³. Cylinder: 3.14 × 25 × 8 = 628 cm³. Total: 314 + 628 = 942 cm³. (314 cm³ only calculates the cone and forgets the cylinder; 628 cm³ only calculates the cylinder and forgets the cone; 1 570 cm³ forgets the ⅓ factor when finding the cone’s volume.)',
    },

    // ── Q15 Hard — surface area of combined solid ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the surface area of the combined solid in Q14, excluding the internal joined circle. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['455.3 cm²', '518.1 cm²', '533.8 cm²', '612.3 cm²'],
      correctIndex: 2,
      explanation: 'Cone slant height = √(5² + 12²) = 13 cm. Cone curved surface = πrl = 3.14 × 5 × 13 = 204.1 cm². Cylinder curved surface = 2πrh = 2 × 3.14 × 5 × 8 = 251.2 cm². Cylinder bottom = πr² = 78.5 cm². Total = 204.1 + 251.2 + 78.5 = 533.8 cm². (455.3 cm² forgets the cylinder’s bottom circle; 518.1 cm² mistakenly uses the cone’s height (12 cm) instead of its slant height (13 cm) in the curved-surface formula; 612.3 cm² wrongly adds the cone’s base circle as well, even though it is internal.)',
    },

    // ── Q16 Hard — find radius from sphere volume ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle wants to find the radius of a sphere with volume 904.32 cm³. Find r, rounded to 1 decimal place. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['216 cm', '6.6 cm', '8.5 cm', '6.0 cm'],
      correctIndex: 3,
      explanation: 'V = (4/3)πr³ → 904.32 = (4/3) × 3.14 × r³ → r³ = 216 → r = ∛216 = 6.0 cm. (216 cm forgets to take the cube root and gives r³ instead of r; 6.6 cm comes from leaving out the 4/3 factor, solving πr³ = 904.32 instead; 8.5 cm mistakenly uses the surface-area formula 4πr² instead of the volume formula.)',
    },

    // ── Q17 Hard — Sipho's claim about hemisphere surface area ────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says a hemisphere has exactly half the surface area of a full sphere with the same radius. Is he correct?',
      checkMode: 'auto',
      options: [
        "No — a hemisphere's total surface area includes the curved half (2πr², which is half of 4πr²) plus the flat circular base (πr²), making it more than half of the full sphere's surface area.",
        "Yes — since a hemisphere is literally half a sphere, its total surface area is always exactly half of 4πr².",
        "No — a hemisphere has no flat base, so its total surface area is actually less than half the full sphere's surface area.",
        'Yes, but only for hemispheres with a radius greater than 5 cm.',
      ],
      correctIndex: 0,
      explanation: "A hemisphere's total surface area = curved surface (2πr², exactly half of the sphere's 4πr²) plus the flat circular base (πr²). Adding the base means the total is more than half the full sphere's surface area, so Sipho is incorrect. (Option B forgets to add the flat circular base; Option C wrongly claims there is no flat base; Option D is irrelevant — the relationship does not depend on the size of the radius.)",
    },

    // ── Q18 Hard — total surface area of hemisphere ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the total surface area of a hemisphere with radius 6 cm, including its flat circular base. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['226.08 cm²', '339.12 cm²', '452.16 cm²', '113.04 cm²'],
      correctIndex: 1,
      explanation: 'Curved part = 2πr² = 2 × 3.14 × 36 = 226.08 cm². Flat base = πr² = 3.14 × 36 = 113.04 cm². Total = 226.08 + 113.04 = 339.12 cm². (226.08 cm² only includes the curved part and forgets the flat circular base; 452.16 cm² mistakenly uses the full sphere’s surface area (4πr²) instead of the hemisphere’s; 113.04 cm² only includes the flat base and forgets the curved part.)',
    },

    // ── Q19 Hard — water tank total volume ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A water tank is a cylinder (radius 1.5 m, height 3 m) with a cone-shaped top (same radius, height 1 m) for drainage. Find the total volume in cubic metres. Use π ≈ 3.14.',
      checkMode: 'auto',
      options: ['21.2 m³', '2.36 m³', '23.55 m³', '28.26 m³'],
      correctIndex: 2,
      explanation: 'Cylinder: 3.14 × 1.5² × 3 = 21.195 m³. Cone: ⅓ × 3.14 × 1.5² × 1 = 2.355 m³. Total ≈ 21.195 + 2.355 = 23.55 m³. (21.2 m³ forgets to add the cone-shaped top; 2.36 m³ only calculates the cone and forgets the cylindrical base; 28.26 m³ forgets the ⅓ factor when finding the cone’s volume.)',
    },

    // ── Q20 Hard — Lerato's claim about doubling radius ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says doubling the radius of a cone (keeping height constant) quadruples its volume. Is she correct?',
      checkMode: 'auto',
      options: [
        'No — doubling the radius only doubles the volume, since volume is directly proportional to radius.',
        'No — doubling the radius multiplies the volume by 8, since volume depends on r³ like a sphere.',
        'Yes, but only because π is also being doubled in the calculation.',
        'Yes — since Volume = ⅓πr²h depends on r squared, doubling the radius multiplies the volume by 2² = 4, confirming her statement.',
      ],
      correctIndex: 3,
      explanation: 'Volume = ⅓πr²h depends on r squared (not linearly, and not on r³ like a sphere), so doubling r multiplies V by 2² = 4. Lerato is correct.',
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
