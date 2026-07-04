import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mensuration roles) ──────────────────────────────────────
// dimension / scale factor k → blue   (#2563eb)
// formula / rule applied     → orange (#ea580c)
// final answer                → green  (#16a34a)
// component shape 2           → red    (#dc2626)
// component shape 3           → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Mensuration',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE EFFECT OF A CONSTANT FACTOR k ON VOLUME AND SURFACE AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'effect-of-constant-factor',
      title: 'The Effect of a Constant Factor k on Volume and Surface Area',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">This builds directly on the volume and surface area formulae you mastered in Grade 10. Now we ask a new question: if every ${bl('linear dimension')} of a solid (radius, height, side length) is multiplied by a ${bl('constant factor k')}, what happens to its surface area and volume? The key insight is that surface area is made of <strong>two</strong> linear dimensions multiplied together, while volume is made of <strong>three</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('scale factor k')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── The three rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The three scaling rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Linear Dimensions Scale by k</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If radius, height, or side length is multiplied by ${bl('k')}, that single measurement simply becomes ${bl('k')} times as long.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Surface Area Scales by k²</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Surface area is built from products of two lengths (e.g. πr² or 2πrh). Since both scale by ${or('k')}, the total scales by ${or('k × k = k²')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Volume Scales by k³</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Volume is built from products of three lengths (e.g. πr²h or ⅓πr²h). Since all three scale by ${gr('k')}, the total scales by ${gr('k × k × k = k³')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">This works without knowing the actual dimensions</p>` +
        `<p style="margin:0;color:#1e3a8a;">You don't need to know the original radius or height to answer "how does volume change if every dimension is doubled?" — the answer is always ${gr('k³ = 2³ = 8 times as much')}, regardless of the solid's actual size. This applies to ${bl('all')} solids: prisms, pyramids, cylinders, cones and spheres.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The radius of a sphere is doubled. By what factor does the volume increase?',
          answer: `Volume increases by a factor of ${gr('8')}`,
          steps: [
            `"Doubled" means every linear dimension is multiplied by ${bl('k = 2')}.`,
            `Volume scales by ${gr('k³')}.`,
            `${gr('k³ = 2³ = 2 × 2 × 2 = 8')}.`,
            `<strong>Answer:</strong> The volume becomes ${gr('8 times')} as large. ✓`,
          ],
        },
        {
          question: 'A cylinder has radius 3 cm and height 5 cm. If both dimensions are tripled, find the new volume, given the original volume is 141.3 cm³.',
          answer: `New volume = ${gr('3 815.1 cm³')}`,
          steps: [
            `"Tripled" means ${bl('k = 3')}.`,
            `Volume scales by ${gr('k³ = 3³ = 27')}.`,
            `New volume = original volume × 27 = ${or('141.3 × 27')}.`,
            `<strong>Answer:</strong> New volume = ${gr('3 815.1 cm³')}. ✓`,
          ],
        },
        {
          question: 'A cube has surface area 96 cm². If each side length is multiplied by 1.5, find the new surface area.',
          answer: `New surface area = ${gr('216 cm²')}`,
          steps: [
            `Here ${bl('k = 1.5')}.`,
            `Surface area scales by ${or('k² = 1.5² = 2.25')}.`,
            `New surface area = original × 2.25 = ${or('96 × 2.25')}.`,
            `<strong>Answer:</strong> New surface area = ${gr('216 cm²')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Every dimension of a cone is multiplied by 4. By what factor does its volume increase?',
          answer: '64',
          checkMode: 'auto',
          correctAnswer: '64',
          explanation: 'Volume scales by k³ = 4³ = 64 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Every dimension of a pyramid is multiplied by 5. By what factor does its surface area increase?',
              correctAnswer: '25',
              explanation: 'Surface area scales by k² = 5² = 25 ✓',
            },
            {
              label: 'b) A sphere has volume 288 cm³. If its radius is doubled, find the new volume.',
              correctAnswer: '2304',
              explanation: 'Volume scales by k³ = 2³ = 8. New volume = 288 × 8 = 2304 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A prism has volume 60 cm³ and surface area 94 cm². Every dimension is scaled by a factor of k = 1.5.\n\na) Find the new volume (to 2 decimal places).\nb) Find the new surface area (to 2 decimal places).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) New volume (cm³)',
              correctAnswer: '202.5',
              correctAnswers: ['202.5', '202.50'],
              explanation: 'Volume scales by k³ = 1.5³ = 3.375. New volume = 60 × 3.375 = 202.50 cm³ ✓',
            },
            {
              label: 'b) New surface area (cm²)',
              correctAnswer: '211.5',
              correctAnswers: ['211.5', '211.50'],
              explanation: 'Surface area scales by k² = 1.5² = 2.25. New surface area = 94 × 2.25 = 211.50 cm² ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating why surface area scales by k squared and volume scales by k cubed when every dimension of a solid is multiplied by a constant factor k, using a doubled cube as a visual example" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a small cube next to a larger cube with sides scaled by factor k, with the surface area labelled as scaling by k squared and the volume labelled as scaling by k cubed" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPLEX COMBINED SOLIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'complex-combined-solids',
      title: 'Volume and Surface Area of More Complex Combined Solids',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 10 you combined two basic solids (like a cone on a cylinder). Grade 11 problems push this further: solids made of ${bl('three or more components')}, and solids with a piece <strong>removed</strong> (like a cylindrical hole drilled through a prism, or a cone-shaped hollow scooped out of a solid). The strategy is the same — work out each component, then add or subtract — but you must read the diagram carefully to see whether a piece is added or removed.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('component 1')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('component 2')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('removed cavity')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined result')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for solids with a removed piece</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Volume:</strong> Calculate the volume of the outer solid, then <strong>subtract</strong> the volume of the ${pu('removed cavity')} (e.g. a drilled-out cylinder or scooped-out cone).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Surface area:</strong> Keep the outer surface of the original solid (minus the opening where the cavity is exposed), then <strong>add</strong> the newly exposed inner surface of the cavity itself.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Added vs. removed — read carefully</p>` +
        `<p style="margin:0;color:#9a3412;">A shape sitting <strong>on top of or next to</strong> another solid is <strong>added</strong> (volumes add). A shape <strong>drilled, cut, or hollowed out</strong> of another solid is <strong>removed</strong> (volumes subtract). Exam diagrams usually show a removed piece with dashed lines or explicit wording like "a hole is drilled through" or "a cavity is removed".</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A solid cylinder (radius 5 cm, height 12 cm) has a cone-shaped cavity (radius 5 cm, height 12 cm) removed from its top, leaving a hollow cone-shaped hole. Find the remaining volume. Use π ≈ 3.14.',
          answer: `Remaining volume ${gr('≈ 628 cm³')}`,
          steps: [
            `${bl('Cylinder')} volume: ${bl('V = πr²h = 3.14 × 25 × 12 = 942 cm³')}`,
            `${pu('Cone cavity')} volume (removed): ${pu('V = ⅓πr²h = ⅓ × 3.14 × 25 × 12 = 314 cm³')}`,
            `Subtract the removed cavity: ${gr('Remaining = 942 − 314 = 628 cm³')}`,
            `<strong>Answer:</strong> Remaining volume = ${gr('628 cm³')}. ✓`,
          ],
        },
        {
          question: 'A solid is made of a cube (side 6 cm) with a hemisphere (radius 3 cm) sitting on top, and a cylindrical hole (radius 1 cm, depth 6 cm) drilled straight down through the cube. Find the total volume. Use π ≈ 3.14.',
          answer: `Total volume ${gr('≈ 253.68 cm³')}`,
          steps: [
            `${bl('Cube')} volume: ${bl('V = 6³ = 216 cm³')}`,
            `${re('Hemisphere')} volume (added): ${re('V = ½ × 4/3πr³ = ½ × 4/3 × 3.14 × 27 = 56.52 cm³')}`,
            `${pu('Cylindrical hole')} volume (removed): ${pu('V = πr²h = 3.14 × 1 × 6 = 18.84 cm³')}`,
            `Combine: ${gr('Total = 216 + 56.52 − 18.84 = 253.68 cm³')}`,
            `<strong>Answer:</strong> Total volume ≈ ${gr('253.68 cm³')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A solid cube (side 8 cm) has a cylindrical hole (radius 2 cm, depth 8 cm) drilled straight through it. Find the remaining volume. Use π ≈ 3.14.',
          answer: '411.52 cm³',
          checkMode: 'auto',
          correctAnswer: '411.52',
          explanation: 'Cube: 8³ = 512 cm³\nCylinder (removed): 3.14 × 4 × 8 = 100.48 cm³\nRemaining: 512 − 100.48 = 411.52 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A solid consists of a cylinder (radius 4 cm, height 10 cm) with a cone-shaped cavity (same radius, height 6 cm) removed from the top. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume of the cylinder (cm³)',
              correctAnswer: '502.4',
              explanation: 'V = πr²h = 3.14 × 16 × 10 = 502.4 cm³ ✓',
            },
            {
              label: 'b) Remaining volume after the cone-shaped cavity is removed (cm³)',
              correctAnswer: '401.92',
              explanation: 'Cone cavity: ⅓ × 3.14 × 16 × 6 = 100.48 cm³.\nRemaining: 502.4 − 100.48 = 401.92 cm³ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A solid sphere of radius 6 cm has a cylindrical hole of radius 2 cm drilled straight through its centre, all the way through (the hole passes through the full diameter of the sphere, 12 cm deep). Use π ≈ 3.14.\n\na) Find the volume of the full sphere.\nb) Find the volume of the drilled-out cylinder.\nc) Find the remaining volume of the sphere.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume of the full sphere (cm³)',
              correctAnswer: '904.32',
              explanation: 'V = 4/3πr³ = 4/3 × 3.14 × 216 = 904.32 cm³ ✓',
            },
            {
              label: 'b) Volume of the drilled-out cylinder (cm³)',
              correctAnswer: '150.72',
              explanation: 'V = πr²h = 3.14 × 4 × 12 = 150.72 cm³ ✓',
            },
            {
              label: 'c) Remaining volume of the sphere (cm³)',
              correctAnswer: '753.6',
              explanation: 'Remaining = 904.32 − 150.72 = 753.6 cm³ ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a cylinder with a cone-shaped cavity drilled out of the top, demonstrating how to subtract the removed volume from the outer solid, followed by an example with an added hemisphere and a removed cylindrical hole in the same solid" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a solid cylinder with a cone shaped hole highlighted in purple drilled into the top surface, and a second diagram showing a cube with a hemisphere added on top and a thin cylindrical hole removed through the middle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING REAL-WORLD MENSURATION PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-problems',
      title: 'Solving Real-World Mensuration Problems',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Exam and real-life problems rarely ask for a bare volume or surface area — they wrap the calculation in a context: the ${or('cost')} of materials, how much a container can ${or('hold')}, or how much paint is ${or('needed')}. Your first job is to translate the words into the correct formula and the correct quantity (volume or surface area), then solve as usual.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given dimensions')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('quantity needed / cost rate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Which quantity? ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Which quantity does the question need?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Use Volume When...</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The question mentions <strong>capacity</strong>, how much a container can <strong>hold</strong>, or how much <strong>liquid/sand/concrete</strong> fills a space.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Use Surface Area When...</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The question mentions <strong>painting</strong>, <strong>wrapping</strong>, <strong>covering</strong>, or the amount of <strong>material</strong> needed to build the outside of an object.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch your units — always</p>` +
        `<p style="margin:0;color:#1e3a8a;">If a cost is given per m² but your dimensions are in cm, convert first (${bl('1 m = 100 cm')}, so ${bl('1 m² = 10 000 cm²')} and ${bl('1 m³ = 1 000 000 cm³')}). Multi-step real-world problems often lose marks purely from a unit mismatch, not a formula mistake.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A cylindrical water tank has radius 1.4 m and height 2 m. Find its capacity in litres (1 m³ = 1 000 litres). Use π ≈ 3.14.',
          answer: `Capacity ${gr('≈ 12 308.8 litres')}`,
          steps: [
            `"Capacity" means we need ${or('volume')}.`,
            `Calculate the volume: ${bl('V = πr²h = 3.14 × 1.4² × 2 = 3.14 × 1.96 × 2 = 12.3088 m³')}`,
            `Convert to litres: ${or('12.3088 × 1 000 = 12 308.8 litres')}`,
            `<strong>Answer:</strong> Capacity ≈ ${gr('12 308.8 litres')}. ✓`,
          ],
        },
        {
          question: 'A closed cylindrical can (radius 5 cm, height 12 cm) needs to be painted on the outside. Paint costs R0,08 per cm². Find the total cost. Use π ≈ 3.14.',
          answer: `Total cost ${gr('≈ R42,70')}`,
          steps: [
            `"Painted on the outside" means we need ${or('total surface area')}.`,
            `Calculate the surface area: ${bl('SA = 2πr² + 2πrh = 2 × 3.14 × 25 + 2 × 3.14 × 5 × 12 = 157 + 376.8 = 533.8 cm²')}`,
            `Multiply by the cost rate: ${or('533.8 × R0,08 = R42,704')}`,
            `<strong>Answer:</strong> Total cost ≈ ${gr('R42,70')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A rectangular prism-shaped box has length 40 cm, width 25 cm and height 20 cm. Find its capacity in litres (1 000 cm³ = 1 litre).',
          answer: '20 litres',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20', '20 litres', '20litres'],
          explanation: 'Volume = 40 × 25 × 20 = 20 000 cm³.\n20 000 ÷ 1 000 = 20 litres ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A spherical water tank has radius 2.5 m. Use π ≈ 3.14.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find its volume (m³, to 2 decimal places).',
              correctAnswer: '65.42',
              explanation: 'V = 4/3πr³ = 4/3 × 3.14 × 15.625 ≈ 65.42 m³ ✓',
            },
            {
              label: 'b) Find its capacity in litres (1 m³ = 1 000 litres).',
              correctAnswer: '65420',
              correctAnswers: ['65420', '65 420'],
              explanation: '65.42 × 1 000 = 65 420 litres ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A cylindrical drum (radius 30 cm, height 90 cm, open at the top) must be coated with a rust-proof paint on the inside curved surface and the base only. The paint costs R2,50 per 1 000 cm². Use π ≈ 3.14.\n\na) Find the curved surface area of the drum (cm²).\nb) Find the base area (cm²).\nc) Find the total cost of the paint, to the nearest rand.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Curved surface area (cm²)',
              correctAnswer: '16956',
              explanation: 'Curved SA = 2πrh = 2 × 3.14 × 30 × 90 = 16 956 cm² ✓',
            },
            {
              label: 'b) Base area (cm²)',
              correctAnswer: '2826',
              explanation: 'Base area = πr² = 3.14 × 900 = 2 826 cm² ✓',
            },
            {
              label: 'c) Total cost (nearest rand)',
              correctAnswer: '49',
              correctAnswers: ['49', 'R49'],
              explanation: 'Total area = 16 956 + 2 826 = 19 782 cm².\nCost = (19 782 ÷ 1 000) × R2,50 = 19.782 × 2.50 = R49,46, which rounds to R49 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a real-world word problem step by step, showing how to decide between volume and surface area based on the wording, then converting units and applying a cost rate to reach a final rand amount" />',
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
    { minScore: 20, message: 'Outstanding! You have mastered mensuration.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
