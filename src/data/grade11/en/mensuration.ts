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
        {
          difficulty: 'Hard',
          question: 'A pyramid has volume 15 cm³ and surface area 34 cm². A larger, similar pyramid is formed by scaling every dimension by the same factor k. The larger pyramid has volume 1 875 cm³.\n\na) Without finding the actual dimensions of either pyramid, determine the value of k.\nb) Hence find the surface area of the larger pyramid.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Value of k',
              correctAnswer: '5',
              explanation: 'Volume scales by k³, so k³ = new volume ÷ original volume = 1 875 ÷ 15 = 125.\nk = ∛125 = 5 ✓',
            },
            {
              label: 'b) Surface area of the larger pyramid (cm²)',
              correctAnswer: '850',
              explanation: 'Now that k is known, surface area scales by k² = 5² = 25.\nNew surface area = 34 × 25 = 850 cm² ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating why surface area scales by k squared and volume scales by k cubed when every dimension of a solid is multiplied by a constant factor k, using a doubled cube as a visual example" />',

      diagramPlaceholder:
        'Diagram showing a small cube next to a larger cube with sides scaled by factor k, with the surface area labelled as scaling by k squared and the volume labelled as scaling by k cubed',

      diagramSvg:
        '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="20" y="100" width="40" height="40" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><polygon points="20,100 35,85 75,85 60,100" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,100 75,85 75,125 60,140" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="124" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">s</text><line x1="85" y1="118" x2="128" y2="98" stroke="#0f1f3d" stroke-width="2"/><polygon points="128,98 118,96 122,104" fill="#0f1f3d"/><text x="105" y="100" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">&#215;k</text><rect x="140" y="60" width="80" height="80" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="140,60 170,30 250,30 220,60" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="220,60 250,30 250,110 220,140" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="104" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">ks</text><text x="130" y="162" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Surface area &#215; k&#178;</text><text x="130" y="176" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">Volume &#215; k&#179;</text></svg>',
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
        {
          difficulty: 'Hard',
          question: 'A grain silo is built from a cylinder with a hemispherical cap of the same radius on top. The height of the cylindrical part is three times the radius. If the total volume of the silo is 2 486.88 cm³, determine the radius, r. Use π ≈ 3.14.',
          answer: 'Let the radius be r, so the height of the cylinder is h = 3r.\n\nSet up the total volume:\nV = πr²h + ⅔πr³\nV = πr²(3r) + ⅔πr³\nV = 3πr³ + ⅔πr³ = (11/3)πr³\n\nSubstitute the known volume and π ≈ 3.14:\n2 486.88 = (11/3)(3.14)r³\n2 486.88 = 11.5133...r³\nr³ = 2 486.88 ÷ 11.5133... = 216\n\nTake the cube root:\nr = ∛216 = 6 cm ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing a cylinder with a cone-shaped cavity drilled out of the top, demonstrating how to subtract the removed volume from the outer solid, followed by an example with an added hemisphere and a removed cylindrical hole in the same solid" />',

      diagramPlaceholder:
        'Diagram of a solid cylinder with a cone shaped hole highlighted in purple drilled into the top surface, and a second diagram showing a cube with a hemisphere added on top and a thin cylindrical hole removed through the middle',

      diagramSvg:
        '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="160" y1="20" x2="160" y2="160" stroke="#e2e8f0" stroke-width="1.5"/><text x="75" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Cavity removed</text><line x1="45" y1="45" x2="45" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="105" y1="45" x2="105" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 45,140 A 30,10 0 0 0 105,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 45,140 A 30,10 0 0 1 105,140" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="75" cy="45" rx="30" ry="10" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="48" x2="75" y2="85" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="100" y1="48" x2="75" y2="85" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><path d="M 50,48 A 25,8 0 0 0 100,48" fill="none" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="3,3"/><text x="75" y="102" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">removed</text><text x="230" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Added + removed</text><rect x="185" y="90" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="185,90 205,70 275,70 255,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="255,90 275,70 275,125 255,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 210,80 A 20,15 0 0 1 250,80" fill="none" stroke="#dc2626" stroke-width="2"/><text x="230" y="62" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">added</text><ellipse cx="220" cy="95" rx="10" ry="3" fill="none" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="3,3"/><line x1="210" y1="95" x2="210" y2="140" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="3,3"/><line x1="230" y1="95" x2="230" y2="140" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="3,3"/><path d="M 210,140 A 10,3 0 0 0 230,140" fill="none" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="3,3"/><text x="220" y="158" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">removed</text></svg>',
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

      diagramPlaceholder:
        'Side-by-side diagram of two real-world cylinders: a water tank (radius 1.4 m, height 2 m) shaded to show it filling with water, labelled "Use Volume" for capacity, next to a paint can (radius 5 cm, height 12 cm) with its curved surface highlighted and a paint roller icon, labelled "Use Surface Area" for the cost of paint',

      diagramSvg:
        '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="150" y1="15" x2="150" y2="175" stroke="#e2e8f0" stroke-width="1.5"/><text x="80" y="18" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">Use Volume (capacity)</text><ellipse cx="80" cy="40" rx="35" ry="12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="45" y="95" width="70" height="45" fill="#3b82f6" fill-opacity="0.18" stroke="none"/><path d="M 45,95 Q 62.5,88 80,95 T 115,95" fill="none" stroke="#2563eb" stroke-width="1.6"/><line x1="45" y1="40" x2="45" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="40" x2="115" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 45,140 A 35,12 0 0 0 115,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 45,140 A 35,12 0 0 1 115,140" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="80" y1="40" x2="113" y2="40" stroke="#2563eb" stroke-width="2"/><text x="97" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">r = 1.4 m</text><line x1="25" y1="40" x2="25" y2="140" stroke="#2563eb" stroke-width="2"/><text x="14" y="90" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle" transform="rotate(-90 14 90)">h = 2 m</text><text x="80" y="158" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">Capacity in litres?</text><text x="220" y="18" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Use Surface Area (paint)</text><ellipse cx="220" cy="40" rx="30" ry="10" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="40" x2="190" y2="130" stroke="#ea580c" stroke-width="2.5"/><line x1="250" y1="40" x2="250" y2="130" stroke="#ea580c" stroke-width="2.5"/><path d="M 190,130 A 30,10 0 0 0 250,130" fill="none" stroke="#ea580c" stroke-width="2.5"/><path d="M 190,130 A 30,10 0 0 1 250,130" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><rect x="256" y="16" width="18" height="8" rx="2" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><line x1="265" y1="24" x2="274" y2="37" stroke="#0f1f3d" stroke-width="2"/><line x1="220" y1="40" x2="248" y2="40" stroke="#2563eb" stroke-width="2"/><text x="234" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">r = 5 cm</text><line x1="170" y1="40" x2="170" y2="130" stroke="#2563eb" stroke-width="2"/><text x="159" y="85" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle" transform="rotate(-90 159 85)">h = 12 cm</text><text x="220" y="150" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">Cost to paint?</text></svg>',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Basic k² surface area scaling
    // Block 2 (3-5):   Basic k³ volume scaling
    // Block 3 (6-8):   Combined solids — added components
    // Block 4 (9-11):  Combined solids — removed cavity
    // Block 5 (12-15): Reverse scaling (find k or original value)
    // Block 6 (16-19): Complex 3+ component / mixed / real-world combined
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Basic k² surface area scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a triangular prism is multiplied by a constant factor k = 3. By what factor does the surface area increase?', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Surface area scales by k² = 3² = 9 ✓' },
        { difficulty: 'Easy', question: 'A cube has surface area 54 cm². If every side length is multiplied by k = 2, find the new surface area.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'Surface area scales by k² = 2² = 4. New surface area = 54 × 4 = 216 cm² ✓' },
        { difficulty: 'Easy', question: 'A cylinder has surface area 150 cm². Every dimension is multiplied by k = 1.5. Find the new surface area.', answer: '337.5 cm²', checkMode: 'auto', correctAnswer: '337.5', correctAnswers: ['337.5', '337.50', '337.5cm²', '337.50cm²'], explanation: 'Surface area scales by k² = 1.5² = 2.25. New surface area = 150 × 2.25 = 337.5 cm² ✓' },

        // Block 2 — Basic k³ volume scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a cone is multiplied by a constant factor k = 5. By what factor does the volume increase?', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Volume scales by k³ = 5³ = 125 ✓' },
        { difficulty: 'Easy', question: 'A sphere has volume 40 cm³. If its radius is multiplied by k = 2, find the new volume.', answer: '320 cm³', checkMode: 'auto', correctAnswer: '320', correctAnswers: ['320', '320cm³', '320 cm³'], explanation: 'Volume scales by k³ = 2³ = 8. New volume = 40 × 8 = 320 cm³ ✓' },
        { difficulty: 'Easy', question: 'A pyramid has volume 0.125 of its scaled version. What value of k produces a volume scale factor of 0.125?', answer: '0.5', checkMode: 'auto', correctAnswer: '0.5', correctAnswers: ['0.5', '0,5', '1/2', '½'], explanation: 'k³ = 0.5³ = 0.125, so k = 0.5 ✓' },

        // Block 3 — Combined solids, added components (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A solid is made of a cylinder (radius 3 cm, height 8 cm) with a cone (same radius, height 4 cm) on top. Find the total volume. Use π ≈ 3.14.', answer: '263.76 cm³', checkMode: 'auto', correctAnswer: '263.76', correctAnswers: ['263.76', '263.76cm³', '263.76 cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 9 × 8 = 226.08 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 9 × 4 = 37.68 cm³.\nTotal = 226.08 + 37.68 = 263.76 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 8 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 4 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid is made of a rectangular prism (length 10 cm, width 6 cm, height 4 cm) with a square pyramid (same base 10 cm by 6 cm, height 9 cm) on top. Find the total volume.', answer: '420 cm³', checkMode: 'auto', correctAnswer: '420', correctAnswers: ['420', '420cm³', '420 cm³'], explanation: 'Prism: V = 10 × 6 × 4 = 240 cm³.\nPyramid: V = ⅓ × base area × h = ⅓ × 60 × 9 = 180 cm³.\nTotal = 240 + 180 = 420 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="162" y="82" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="122" y="59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A closed solid is made of a cylinder (radius 5 cm, height 12 cm) with a hemisphere (radius 5 cm) fixed on top, replacing the top circular face. Find the total surface area of the solid (curved cylinder surface + cylinder base + curved hemisphere surface only). Use π ≈ 3.14.', answer: '612.3 cm²', checkMode: 'auto', correctAnswer: '612.3', correctAnswers: ['612.3', '612.30', '612.3cm²', '612.30cm²'], explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 5 × 12 = 376.8 cm².\nCylinder base: πr² = 3.14 × 25 = 78.5 cm².\nHemisphere curved surface: 2πr² = 2 × 3.14 × 25 = 157 cm².\nTotal = 376.8 + 78.5 + 157 = 612.3 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 12 cm</text></svg>' },

        // Block 4 — Combined solids, removed cavity (Medium)
        { difficulty: 'Medium', question: 'A solid cube (side 10 cm) has a cylindrical hole (radius 2 cm, depth 10 cm) drilled straight through it. Find the remaining volume. Use π ≈ 3.14.', answer: '874.4 cm³', checkMode: 'auto', correctAnswer: '874.4', correctAnswers: ['874.4', '874.40', '874.4cm³', '874.40cm³'], explanation: 'Cube: V = 10³ = 1 000 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 4 × 10 = 125.6 cm³.\nRemaining = 1 000 − 125.6 = 874.4 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 10 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 2 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid cylinder (radius 6 cm, height 15 cm) has a cone-shaped cavity (same radius, height 9 cm) removed from the top. Find the remaining volume. Use π ≈ 3.14.', answer: '1 356.48 cm³', checkMode: 'auto', correctAnswer: '1356.48', correctAnswers: ['1356.48', '1 356.48', '1356.48cm³', '1 356.48cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 36 × 15 = 1 695.6 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 36 × 9 = 339.12 cm³.\nRemaining = 1 695.6 − 339.12 = 1 356.48 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 15 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular box (length 12 cm, width 8 cm, height 6 cm) has two identical cylindrical holes (radius 1 cm, depth 6 cm each) drilled straight through it from top to bottom. Find the remaining volume. Use π ≈ 3.14.', answer: '538.32 cm³', checkMode: 'auto', correctAnswer: '538.32', correctAnswers: ['538.32', '538.32cm³', '538.32 cm³'], explanation: 'Box: V = 12 × 8 × 6 = 576 cm³.\nOne hole: V = πr²h = 3.14 × 1 × 6 = 18.84 cm³. Two holes = 37.68 cm³.\nRemaining = 576 − 37.68 = 538.32 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="72" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="59" y1="70" x2="59" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 59,120 A 13,5 0 0 0 85,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="118" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="131" y1="70" x2="131" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 105,120 A 13,5 0 0 0 131,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="162" y="22" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="97" y="63" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1 cm</text></svg>' },

        // Block 5 — Reverse scaling problems (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 40 cm². Every dimension is scaled by a constant factor k, and the new surface area is 160 cm². Find k.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Surface area scale factor = new ÷ original = 160 ÷ 40 = 4 = k². So k = √4 = 2 ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has volume 27 cm³. Every dimension is scaled by a constant factor k = 4. Find the new volume, then confirm what the original volume must have been if that new volume is 1 728 cm³.', answer: '1 728 cm³; original = 27 cm³', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '1 728'], explanation: 'Volume scale factor = k³ = 4³ = 64. New volume = 27 × 64 = 1 728 cm³. Working backwards: original = 1 728 ÷ 64 = 27 cm³ ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 50 cm². After every dimension is scaled by a constant factor k, the new surface area is 450 cm². Find k.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Surface area scale factor = 450 ÷ 50 = 9 = k². So k = √9 = 3 ✓' },
        // Block 6 — Complex combined / mixed / real-world (Hard)
        { difficulty: 'Hard', question: 'A solid sphere (radius 9 cm) has a cylindrical hole (radius 3 cm) drilled straight through its centre, all the way through (the hole passes through the full diameter, 18 cm deep). Find the remaining volume. Use π ≈ 3.14.', answer: '2 543.4 cm³', checkMode: 'auto', correctAnswer: '2543.4', correctAnswers: ['2543.4', '2 543.4', '2543.40', '2 543.40'], explanation: 'Sphere: V = 4/3πr³ = 4/3 × 3.14 × 729 = 3 052.08 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 9 × 18 = 508.68 cm³.\nRemaining = 3 052.08 − 508.68 = 2 543.4 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 9 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A solid is made of three parts joined together: a cylinder (radius 4 cm, height 10 cm) as the base, a cone (same radius, height 9 cm) attached to its top surface, and a hemisphere (same radius) also attached to its top surface next to the cone, all combined into one total solid. Find the total volume. Use π ≈ 3.14.', answer: '787.09 cm³', checkMode: 'auto', correctAnswer: '787.09', correctAnswers: ['787.09', '787.09cm³', '787.09 cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 16 × 10 = 502.4 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 16 × 9 = 150.72 cm³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 64 = 133.97 cm³.\nTotal = 502.4 + 150.72 + 133.97 = 787.09 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="65,70 110,70 87,22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="70" x2="110" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/><path d="M 110,70 A 22,25 0 0 1 133,45 A 22,25 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="133" cy="70" rx="22" ry="7" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="45" y="15" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">h = 9 cm (cone)</text><line x1="110" y1="165" x2="153" y2="165" stroke="#2563eb" stroke-width="2"/><text x="132" y="180" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A prism has volume 120 cm³ and surface area 150 cm². Every dimension is scaled by a factor of k = 1.5.\n\na) Find the new volume.\nb) Find the new surface area.\nc) If painting costs R0,05 per cm², find the cost to paint the new (scaled) solid.', answer: 'a) 405 cm³ b) 337.5 cm² c) R16,88', checkMode: 'auto', correctAnswer: '405337.516.88', correctAnswers: ['405337.516.88', '405 337.5 16.88'], explanation: 'a) Volume scales by k³ = 1.5³ = 3.375. New volume = 120 × 3.375 = 405 cm³.\nb) Surface area scales by k² = 1.5² = 2.25. New SA = 150 × 2.25 = 337.5 cm².\nc) Cost = 337.5 × R0,05 = R16,88 (to the nearest cent) ✓' },
        { difficulty: 'Hard', question: 'A solid is made of a cylinder (radius 7 cm, height 20 cm) with a hemispherical cap (radius 7 cm) fixed on top, and a cone-shaped cavity (radius 7 cm, height 6 cm) removed from the bottom of the cylinder. Find the total volume. Use π ≈ 3.14.', answer: '3 487.49 cm³', checkMode: 'auto', correctAnswer: '3487.49', correctAnswers: ['3487.49', '3 487.49'], explanation: 'Cylinder: V = πr²h = 3.14 × 49 × 20 = 3 077.2 cm³.\nHemisphere (added): V = ⅔πr³ = ⅔ × 3.14 × 343 = 718.01 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 49 × 6 = 307.72 cm³.\nTotal = 3 077.2 + 718.01 − 307.72 = 3 487.49 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 20 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank is made of a cylinder (radius 2 m, height 5 m) with a hemispherical dome (radius 2 m) on top. Find the capacity of the tank in litres (1 m³ = 1 000 litres). Use π ≈ 3.14.', answer: '79 546.67 litres', checkMode: 'auto', correctAnswer: '79546.67', correctAnswers: ['79546.67', '79 546.67', '79546.7', '79 546.7'], explanation: 'Cylinder: V = πr²h = 3.14 × 4 × 5 = 62.8 m³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 8 = 16.75 m³ (16.7466... m³ unrounded).\nTotal = 62.8 + 16.7466... = 79.5466... m³.\nCapacity = 79.5466... × 1 000 ≈ 79 546.67 litres ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 5 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered scaling and combined solids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on removed cavities or reverse scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on k² and k³ scaling, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Basic k² surface area scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a square pyramid is multiplied by a constant factor k = 4. By what factor does the surface area increase?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Surface area scales by k² = 4² = 16 ✓' },
        { difficulty: 'Easy', question: 'A rectangular prism has surface area 60 cm². If every dimension is multiplied by k = 3, find the new surface area.', answer: '540 cm²', checkMode: 'auto', correctAnswer: '540', correctAnswers: ['540', '540cm²', '540 cm²'], explanation: 'Surface area scales by k² = 3² = 9. New surface area = 60 × 9 = 540 cm² ✓' },
        { difficulty: 'Easy', question: 'A sphere has surface area 200 cm². Every dimension is multiplied by k = 0.8. Find the new surface area.', answer: '128 cm²', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128', '128cm²', '128 cm²'], explanation: 'Surface area scales by k² = 0.8² = 0.64. New surface area = 200 × 0.64 = 128 cm² ✓' },

        // Block 2 — Basic k³ volume scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a cylinder is multiplied by a constant factor k = 6. By what factor does the volume increase?', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: 'Volume scales by k³ = 6³ = 216 ✓' },
        { difficulty: 'Easy', question: 'A cone has volume 16 cm³. If every dimension is multiplied by k = 5, find the new volume.', answer: '2 000 cm³', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000', '2000cm³', '2 000cm³'], explanation: 'Volume scales by k³ = 5³ = 125. New volume = 16 × 125 = 2 000 cm³ ✓' },
        { difficulty: 'Easy', question: 'A prism is scaled by a factor k = 2.5. By what factor does its volume increase?', answer: '15.625', checkMode: 'auto', correctAnswer: '15.625', correctAnswers: ['15.625', '15,625'], explanation: 'Volume scales by k³ = 2.5³ = 15.625 ✓' },

        // Block 3 — Combined solids, added components (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A solid is made of a cylinder (radius 4 cm, height 9 cm) with a cone (same radius, height 6 cm) on top. Find the total volume. Use π ≈ 3.14.', answer: '552.64 cm³', checkMode: 'auto', correctAnswer: '552.64', correctAnswers: ['552.64', '552.64cm³', '552.64 cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 16 × 9 = 452.16 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 16 × 6 = 100.48 cm³.\nTotal = 452.16 + 100.48 = 552.64 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 9 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 6 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid is made of a rectangular prism (length 8 cm, width 5 cm, height 3 cm) with a square pyramid (same base 8 cm by 5 cm, height 6 cm) on top. Find the total volume.', answer: '200 cm³', checkMode: 'auto', correctAnswer: '200', correctAnswers: ['200', '200cm³', '200 cm³'], explanation: 'Prism: V = 8 × 5 × 3 = 120 cm³.\nPyramid: V = ⅓ × base area × h = ⅓ × 40 × 6 = 80 cm³.\nTotal = 120 + 80 = 200 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">3 cm</text><text x="162" y="82" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="122" y="59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A closed solid is made of a cylinder (radius 6 cm, height 14 cm) with a hemisphere (radius 6 cm) fixed on top, replacing the top circular face. Find the total surface area of the solid (curved cylinder surface + cylinder base + curved hemisphere surface only). Use π ≈ 3.14.', answer: '866.64 cm²', checkMode: 'auto', correctAnswer: '866.64', correctAnswers: ['866.64', '866.64cm²', '866.64 cm²'], explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 6 × 14 = 527.52 cm².\nCylinder base: πr² = 3.14 × 36 = 113.04 cm².\nHemisphere curved surface: 2πr² = 2 × 3.14 × 36 = 226.08 cm².\nTotal = 527.52 + 113.04 + 226.08 = 866.64 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 14 cm</text></svg>' },

        // Block 4 — Combined solids, removed cavity (Medium)
        { difficulty: 'Medium', question: 'A solid cube (side 12 cm) has a cylindrical hole (radius 3 cm, depth 12 cm) drilled straight through it. Find the remaining volume. Use π ≈ 3.14.', answer: '1 388.88 cm³', checkMode: 'auto', correctAnswer: '1388.88', correctAnswers: ['1388.88', '1 388.88'], explanation: 'Cube: V = 12³ = 1 728 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 9 × 12 = 339.12 cm³.\nRemaining = 1 728 − 339.12 = 1 388.88 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 12 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 3 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid cylinder (radius 5 cm, height 18 cm) has a cone-shaped cavity (same radius, height 9 cm) removed from the top. Find the remaining volume. Use π ≈ 3.14.', answer: '1 177.5 cm³', checkMode: 'auto', correctAnswer: '1177.5', correctAnswers: ['1177.5', '1 177.5', '1177.50', '1 177.50'], explanation: 'Cylinder: V = πr²h = 3.14 × 25 × 18 = 1 413 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 25 × 9 = 235.5 cm³.\nRemaining = 1 413 − 235.5 = 1 177.5 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 18 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular box (length 15 cm, width 10 cm, height 8 cm) has two identical cylindrical holes (radius 1.5 cm, depth 8 cm each) drilled straight through it from top to bottom. Find the remaining volume. Use π ≈ 3.14.', answer: '1 086.96 cm³', checkMode: 'auto', correctAnswer: '1086.96', correctAnswers: ['1086.96', '1 086.96'], explanation: 'Box: V = 15 × 10 × 8 = 1 200 cm³.\nOne hole: V = πr²h = 3.14 × 2.25 × 8 = 56.52 cm³. Two holes = 113.04 cm³.\nRemaining = 1 200 − 113.04 = 1 086.96 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="72" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="59" y1="70" x2="59" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 59,120 A 13,5 0 0 0 85,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="118" cy="70" rx="13" ry="5" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="131" y1="70" x2="131" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 105,120 A 13,5 0 0 0 131,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">8 cm</text><text x="162" y="22" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><text x="97" y="63" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 cm</text></svg>' },

        // Block 5 — Reverse scaling problems (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 60 cm². Every dimension is scaled by a constant factor k, and the new surface area is 540 cm². Find k.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Surface area scale factor = new ÷ original = 540 ÷ 60 = 9 = k². So k = √9 = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has volume 16 cm³. Every dimension is scaled by a constant factor k = 5. Find the new volume, then confirm what the original volume must have been if that new volume is 2 000 cm³.', answer: '2 000 cm³; original = 16 cm³', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'Volume scale factor = k³ = 5³ = 125. New volume = 16 × 125 = 2 000 cm³. Working backwards: original = 2 000 ÷ 125 = 16 cm³ ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 20 cm². After every dimension is scaled by a constant factor k, the new surface area is 500 cm². Find k.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Surface area scale factor = 500 ÷ 20 = 25 = k². So k = √25 = 5 ✓' },
        // Block 6 — Complex combined / mixed / real-world (Hard)
        { difficulty: 'Hard', question: 'A solid sphere (radius 10 cm) has a cylindrical hole (radius 4 cm) drilled straight through its centre, all the way through (the hole passes through the full diameter, 20 cm deep). Find the remaining volume. Use π ≈ 3.14.', answer: '3 181.87 cm³', checkMode: 'auto', correctAnswer: '3181.87', correctAnswers: ['3181.87', '3 181.87'], explanation: 'Sphere: V = 4/3πr³ = 4/3 × 3.14 × 1 000 = 4 186.67 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 16 × 20 = 1 004.8 cm³.\nRemaining = 4 186.67 − 1 004.8 = 3 181.87 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 10 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A solid is made of three parts: a cylinder (radius 3 cm, height 12 cm) as the base, with a cone (same radius, height 7 cm) attached to its top surface, and a hemisphere (same radius) also attached to its top surface next to the cone, all combined into one total solid. Find the total volume. Use π ≈ 3.14.', answer: '461.58 cm³', checkMode: 'auto', correctAnswer: '461.58', correctAnswers: ['461.58', '461.58cm³', '461.58 cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 9 × 12 = 339.12 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 9 × 7 = 65.94 cm³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 27 = 56.52 cm³.\nTotal = 339.12 + 65.94 + 56.52 = 461.58 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="65,70 110,70 87,22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="70" x2="110" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/><path d="M 110,70 A 22,25 0 0 1 133,45 A 22,25 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="133" cy="70" rx="22" ry="7" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 12 cm</text><text x="45" y="15" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">h = 7 cm (cone)</text><line x1="110" y1="165" x2="153" y2="165" stroke="#2563eb" stroke-width="2"/><text x="132" y="180" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A prism has volume 200 cm³ and surface area 180 cm². Every dimension is scaled by a factor of k = 2.\n\na) Find the new volume.\nb) Find the new surface area.\nc) If painting costs R0,06 per cm², find the cost to paint the new (scaled) solid.', answer: 'a) 1 600 cm³ b) 720 cm² c) R43,20', checkMode: 'auto', correctAnswer: '160072043.2', correctAnswers: ['160072043.2', '1600 720 43.2'], explanation: 'a) Volume scales by k³ = 2³ = 8. New volume = 200 × 8 = 1 600 cm³.\nb) Surface area scales by k² = 2² = 4. New SA = 180 × 4 = 720 cm².\nc) Cost = 720 × R0,06 = R43,20 ✓' },
        { difficulty: 'Hard', question: 'A solid is made of a cylinder (radius 8 cm, height 22 cm) with a hemispherical cap (radius 8 cm) fixed on top, and a cone-shaped cavity (radius 8 cm, height 7 cm) removed from the bottom of the cylinder. Find the total volume. Use π ≈ 3.14.', answer: '5 024 cm³', checkMode: 'auto', correctAnswer: '5024', correctAnswers: ['5024', '5 024'], explanation: 'Cylinder: V = πr²h = 3.14 × 64 × 22 = 4 421.12 cm³.\nHemisphere (added): V = ⅔πr³ = ⅔ × 3.14 × 512 = 1 071.79 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 64 × 7 = 468.91 cm³.\nTotal = 4 421.12 + 1 071.79 − 468.91 = 5 024 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 22 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank is made of a cylinder (radius 1.5 m, height 4 m) with a hemispherical dome (radius 1.5 m) on top. Find the capacity of the tank in litres (1 m³ = 1 000 litres). Use π ≈ 3.14.', answer: '35 325 litres', checkMode: 'auto', correctAnswer: '35325', correctAnswers: ['35325', '35 325'], explanation: 'Cylinder: V = πr²h = 3.14 × 2.25 × 4 = 28.26 m³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 3.375 = 7.065 m³.\nTotal = 28.26 + 7.065 = 35.325 m³.\nCapacity = 35.325 × 1 000 = 35 325 litres ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 4 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered scaling and combined solids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on removed cavities or reverse scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on k² and k³ scaling, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Basic k² surface area scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a cone is multiplied by a constant factor k = 2.5. By what factor does the surface area increase?', answer: '6.25', checkMode: 'auto', correctAnswer: '6.25', correctAnswers: ['6.25', '6,25'], explanation: 'Surface area scales by k² = 2.5² = 6.25 ✓' },
        { difficulty: 'Easy', question: 'A triangular prism has surface area 25 cm². If every dimension is multiplied by k = 4, find the new surface area.', answer: '400 cm²', checkMode: 'auto', correctAnswer: '400', correctAnswers: ['400', '400cm²', '400 cm²'], explanation: 'Surface area scales by k² = 4² = 16. New surface area = 25 × 16 = 400 cm² ✓' },
        { difficulty: 'Easy', question: 'A cube has surface area 30 cm². Every dimension is multiplied by k = 1.1. Find the new surface area.', answer: '36.3 cm²', checkMode: 'auto', correctAnswer: '36.3', correctAnswers: ['36.3', '36,3', '36.30', '36,30'], explanation: 'Surface area scales by k² = 1.1² = 1.21. New surface area = 30 × 1.21 = 36.3 cm² ✓' },

        // Block 2 — Basic k³ volume scaling (Easy)
        { difficulty: 'Easy', question: 'Every dimension of a pyramid is multiplied by a constant factor k = 3.5. By what factor does the volume increase?', answer: '42.875', checkMode: 'auto', correctAnswer: '42.875', correctAnswers: ['42.875', '42,875'], explanation: 'Volume scales by k³ = 3.5³ = 42.875 ✓' },
        { difficulty: 'Easy', question: 'A cylinder has volume 8 cm³. If every dimension is multiplied by k = 3, find the new volume.', answer: '216 cm³', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm³', '216 cm³'], explanation: 'Volume scales by k³ = 3³ = 27. New volume = 8 × 27 = 216 cm³ ✓' },
        { difficulty: 'Easy', question: 'A sphere is scaled by a factor k = 0.4. By what factor does its volume decrease? Give your answer as a decimal.', answer: '0.064', checkMode: 'auto', correctAnswer: '0.064', correctAnswers: ['0.064', '0,064'], explanation: 'Volume scales by k³ = 0.4³ = 0.064 ✓' },

        // Block 3 — Combined solids, added components (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A solid is made of a cylinder (radius 5 cm, height 10 cm) with a cone (same radius, height 7 cm) on top. Find the total volume. Use π ≈ 3.14.', answer: '968.17 cm³', checkMode: 'auto', correctAnswer: '968.17', correctAnswers: ['968.17', '968.17cm³', '968.17 cm³'], explanation: 'Cylinder: V = πr²h = 3.14 × 25 × 10 = 785 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 25 × 7 = 183.17 cm³.\nTotal = 785 + 183.17 = 968.17 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="110" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 10 cm</text><text x="192" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 192 45)">h = 7 cm</text><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid is made of a rectangular prism (length 14 cm, width 9 cm, height 5 cm) with a square pyramid (same base 14 cm by 9 cm, height 12 cm) on top. Find the total volume.', answer: '1 134 cm³', checkMode: 'auto', correctAnswer: '1134', correctAnswers: ['1134', '1 134'], explanation: 'Prism: V = 14 × 9 × 5 = 630 cm³.\nPyramid: V = ⅓ × base area × h = ⅓ × 126 × 12 = 504 cm³.\nTotal = 630 + 504 = 1 134 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">5 cm</text><text x="162" y="82" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><polygon points="40,115 150,115 185,90 75,90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="115" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="185" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="90" x2="95" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><text x="122" y="59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">h = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A closed solid is made of a cylinder (radius 4.5 cm, height 16 cm) with a hemisphere (radius 4.5 cm) fixed on top, replacing the top circular face. Find the total surface area of the solid (curved cylinder surface + cylinder base + curved hemisphere surface only). Use π ≈ 3.14.', answer: '642.92 cm²', checkMode: 'auto', correctAnswer: '642.92', correctAnswers: ['642.92', '642.92cm²', '642.92 cm²'], explanation: 'Cylinder curved surface: 2πrh = 2 × 3.14 × 4.5 × 16 = 452.16 cm².\nCylinder base: πr² = 3.14 × 20.25 = 63.59 cm².\nHemisphere curved surface: 2πr² = 2 × 3.14 × 20.25 = 127.17 cm².\nTotal = 452.16 + 63.59 + 127.17 = 642.92 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4.5 cm</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 16 cm</text></svg>' },

        // Block 4 — Combined solids, removed cavity (Medium)
        { difficulty: 'Medium', question: 'A solid cube (side 9 cm) has a cylindrical hole (radius 2.5 cm, depth 9 cm) drilled straight through it. Find the remaining volume. Use π ≈ 3.14.', answer: '552.38 cm³', checkMode: 'auto', correctAnswer: '552.38', correctAnswers: ['552.38', '552.38cm³', '552.38 cm³'], explanation: 'Cube: V = 9³ = 729 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 6.25 × 9 = 176.63 cm³ (unrounded 176.625).\nRemaining = 729 − 176.63 = 552.38 cm³ ✓ (accept 552.37–552.38)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="95" cy="72.5" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="75" y1="72.5" x2="75" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="115" y1="72.5" x2="115" y2="122.5" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 75,122.5 A 20,7 0 0 0 115,122.5" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">side = 9 cm</text><text x="120" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 2.5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A solid cylinder (radius 7 cm, height 20 cm) has a cone-shaped cavity (same radius, height 12 cm) removed from the top. Find the remaining volume. Use π ≈ 3.14.', answer: '2 461.76 cm³', checkMode: 'auto', correctAnswer: '2461.76', correctAnswers: ['2461.76', '2 461.76'], explanation: 'Cylinder: V = πr²h = 3.14 × 49 × 20 = 3 077.2 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 49 × 12 = 615.44 cm³.\nRemaining = 3 077.2 − 615.44 = 2 461.76 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="140" y1="49" x2="110" y2="85" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 80,49 A 30,10 0 0 0 140,49" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 20 cm</text><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><text x="125" y="70" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular box (length 20 cm, width 12 cm, height 10 cm) has three identical cylindrical holes (radius 2 cm, depth 10 cm each) drilled straight through it from top to bottom. Find the remaining volume. Use π ≈ 3.14.', answer: '2 023.2 cm³', checkMode: 'auto', correctAnswer: '2023.2', correctAnswers: ['2023.2', '2 023.2', '2023.20', '2 023.20'], explanation: 'Box: V = 20 × 12 × 10 = 2 400 cm³.\nOne hole: V = πr²h = 3.14 × 4 × 10 = 125.6 cm³. Three holes = 376.8 cm³.\nRemaining = 2 400 − 376.8 = 2 023.2 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="58" cy="70" rx="10" ry="4" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="48" y1="70" x2="48" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="68" y1="70" x2="68" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 48,120 A 10,4 0 0 0 68,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="95" cy="70" rx="10" ry="4" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="70" x2="85" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="105" y1="70" x2="105" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 85,120 A 10,4 0 0 0 105,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="132" cy="70" rx="10" ry="4" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="122" y1="70" x2="122" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="142" y1="70" x2="142" y2="120" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 122,120 A 10,4 0 0 0 142,120" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="95" y="158" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="26" y="97.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">10 cm</text><text x="162" y="22" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">12 cm</text><text x="95" y="45" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text></svg>' },

        // Block 5 — Reverse scaling problems (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 25 cm². Every dimension is scaled by a constant factor k, and the new surface area is 400 cm². Find k.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Surface area scale factor = new ÷ original = 400 ÷ 25 = 16 = k². So k = √16 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has volume 8 cm³. Every dimension is scaled by a constant factor k = 3. Find the new volume, then confirm what the value of k must have been if the original volume was 15 cm³ and the new volume is 960 cm³.', answer: 'New volume of first solid = 216 cm³; k for the second solid = 4', checkMode: 'auto', correctAnswer: '2164', correctAnswers: ['2164', '216 4', '216cm³ k=4'], explanation: 'First solid: volume scale factor = k³ = 3³ = 27. New volume = 8 × 27 = 216 cm³.\nSecond solid: scale factor = 960 ÷ 15 = 64 = k³. So k = ∛64 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'A solid has surface area 96 cm². After every dimension is scaled by a constant factor k = 2.5, find the new surface area.', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'Surface area scales by k² = 2.5² = 6.25. New surface area = 96 × 6.25 = 600 cm² ✓' },
        // Block 6 — Complex combined / mixed / real-world (Hard)
        { difficulty: 'Hard', question: 'A solid sphere (radius 12 cm) has a cylindrical hole (radius 5 cm) drilled straight through its centre, all the way through (the hole passes through the full diameter, 24 cm deep). Find the remaining volume. Use π ≈ 3.14.', answer: '5 350.56 cm³', checkMode: 'auto', correctAnswer: '5350.56', correctAnswers: ['5350.56', '5 350.56'], explanation: 'Sphere: V = 4/3πr³ = 4/3 × 3.14 × 1 728 = 7 234.56 cm³.\nDrilled cylinder (removed): V = πr²h = 3.14 × 25 × 24 = 1 884 cm³.\nRemaining = 7 234.56 − 1 884 = 5 350.56 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="110" rx="75" ry="22" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="90" y1="37" x2="90" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="130" y1="37" x2="130" y2="183" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><ellipse cx="110" cy="37" rx="20" ry="7" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 0 130,183" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 90,183 A 20,7 0 0 1 130,183" fill="none" stroke="#374151" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="110" y1="110" x2="185" y2="110" stroke="#2563eb" stroke-width="2"/><text x="150" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">R = 12 cm</text><text x="140" y="55" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">r = 5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A solid is made of three parts: a cylinder (radius 6 cm, height 16 cm) as the base, with a cone (same radius, height 10 cm) attached to its top surface, and a hemisphere (same radius) also attached to its top surface next to the cone, all combined into one total solid. Find the total volume. Use π ≈ 3.14.', answer: '2 637.6 cm³', checkMode: 'auto', correctAnswer: '2637.6', correctAnswers: ['2637.6', '2 637.6', '2637.60', '2 637.60'], explanation: 'Cylinder: V = πr²h = 3.14 × 36 × 16 = 1 808.64 cm³.\nCone: V = ⅓πr²h = ⅓ × 3.14 × 36 × 10 = 376.8 cm³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 216 = 452.16 cm³.\nTotal = 1 808.64 + 376.8 + 452.16 = 2 637.6 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="65,70 110,70 87,22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="70" x2="110" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="2,2"/><path d="M 110,70 A 22,25 0 0 1 133,45 A 22,25 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="133" cy="70" rx="22" ry="7" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><text x="30" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 30 120)">h = 16 cm</text><text x="45" y="15" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">h = 10 cm (cone)</text><line x1="110" y1="165" x2="153" y2="165" stroke="#2563eb" stroke-width="2"/><text x="132" y="180" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A prism has volume 90 cm³ and surface area 120 cm². Every dimension is scaled by a factor of k = 1.5.\n\na) Find the new volume.\nb) Find the new surface area.\nc) If painting costs R0,07 per cm², find the cost to paint the new (scaled) solid.', answer: 'a) 303.75 cm³ b) 270 cm² c) R18,90', checkMode: 'auto', correctAnswer: '303.7527018.9', correctAnswers: ['303.7527018.9', '303.75 270 18.90'], explanation: 'a) Volume scales by k³ = 1.5³ = 3.375. New volume = 90 × 3.375 = 303.75 cm³.\nb) Surface area scales by k² = 1.5² = 2.25. New SA = 120 × 2.25 = 270 cm².\nc) Cost = 270 × R0,07 = R18,90 ✓' },
        { difficulty: 'Hard', question: 'A solid is made of a cylinder (radius 9 cm, height 25 cm) with a hemispherical cap (radius 9 cm) fixed on top, and a cone-shaped cavity (radius 9 cm, height 8 cm) removed from the bottom of the cylinder. Find the total volume. Use π ≈ 3.14.', answer: '7 206.3 cm³', checkMode: 'auto', correctAnswer: '7206.3', correctAnswers: ['7206.3', '7 206.3', '7206.30', '7 206.30'], explanation: 'Cylinder: V = πr²h = 3.14 × 81 × 25 = 6 358.5 cm³.\nHemisphere (added): V = ⅔πr³ = ⅔ × 3.14 × 729 = 1 526.04 cm³.\nCone cavity (removed): V = ⅓πr²h = ⅓ × 3.14 × 81 × 8 = 678.24 cm³.\nTotal = 6 358.5 + 1 526.04 − 678.24 = 7 206.3 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg"><path d="M 65,45 A 45,50 0 0 1 110,0 A 45,50 0 0 1 155,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="45" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="45" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="45" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="85" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="135" y1="128" x2="110" y2="165" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><path d="M 85,128 A 25,8 0 0 0 135,128" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><line x1="110" y1="45" x2="153" y2="45" stroke="#2563eb" stroke-width="2"/><text x="132" y="38" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 9 cm</text><line x1="30" y1="45" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 105)">h = 25 cm</text><text x="140" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">h = 8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'A water tank is made of a cylinder (radius 1 m, height 3 m) with a hemispherical dome (radius 1 m) on top. Find the capacity of the tank in litres (1 m³ = 1 000 litres). Use π ≈ 3.14.', answer: '11 513.33 litres', checkMode: 'auto', correctAnswer: '11513.33', correctAnswers: ['11513.33', '11 513.33'], explanation: 'Cylinder: V = πr²h = 3.14 × 1 × 3 = 9.42 m³.\nHemisphere: V = ⅔πr³ = ⅔ × 3.14 × 1 = 2.0933... m³.\nTotal = 9.42 + 2.0933... = 11.5133... m³.\nCapacity = 11.5133... × 1 000 ≈ 11 513.33 litres ✓', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><path d="M 65,70 A 45,50 0 0 1 110,25 A 45,50 0 0 1 155,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="70" rx="45" ry="15" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="70" x2="65" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155" y1="70" x2="155" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 0 155,165" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 65,165 A 45,15 0 0 1 155,165" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="70" x2="153" y2="70" stroke="#2563eb" stroke-width="2"/><text x="132" y="63" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1 m</text><line x1="30" y1="70" x2="30" y2="165" stroke="#2563eb" stroke-width="2"/><text x="16" y="120" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 120)">h = 3 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered scaling and combined solids.' },
        { minScore: 15, message: 'Great work! Review any missed questions on removed cavities or reverse scaling and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on k² and k³ scaling, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
