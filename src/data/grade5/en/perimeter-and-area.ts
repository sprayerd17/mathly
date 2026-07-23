import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (perimeter and area roles) ────────────────────────────────
// width                → red    (#dc2626)
// side lengths / length→ blue   (#2563eb)
// addition / multiply  → green  (#16a34a)
// perimeter / area ans → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Perimeter and Area',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING PERIMETER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-perimeter',
      title: 'Understanding Perimeter',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>perimeter</strong> of a shape is the total distance around the outside of the shape. To find the perimeter we add up all the side lengths. Make sure all sides are in the same unit before adding. Perimeter is always measured in <strong>units of length</strong> such as mm, cm, m or km.</p>` +

        `<p style="margin-bottom:20px;">We use perimeter in real life when we need to know how much fencing to put around a garden or how much ribbon to put around a picture frame.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('side lengths')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perimeter answer')}</span>` +
        `</div>` +

        // ── Key rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">P</span>` +
        `<p style="margin:0;font-size:14px;">Perimeter = ${bl('side 1')} ${gr('+')} ${bl('side 2')} ${gr('+')} ${bl('side 3')} ${gr('+')} ${bl('side 4')} ${gr('+ …')} — add up <em>all</em> the ${bl('side lengths')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Important: same units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always check that all ${bl('side lengths')} are in the <strong>same unit</strong> before adding. If some sides are in cm and others in m, convert them first. Your ${or('perimeter answer')} will be in the same unit as the sides.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 10 cm long and 6 cm wide. What is its perimeter?',
          answer: `The perimeter of the rectangle is ${or('32 cm')}`,
          steps: [
            `A rectangle has 4 sides — 2 long sides (${bl('10 cm')}) and 2 short sides (${bl('6 cm')}).`,
            `${gr('Add')} all four sides: ${bl('10')} ${gr('+')} ${bl('10')} ${gr('+')} ${bl('6')} ${gr('+')} ${bl('6')} ${gr('=')} ${or('32')}`,
            `The perimeter of the rectangle is ${or('32 cm')}.`,
          ],
        },
        {
          question: 'Sipho wants to put a fence around his square garden. Each side is 8 m long. How much fencing does he need?',
          answer: `Sipho needs ${or('32 m')} of fencing`,
          steps: [
            `A square has 4 equal sides. Each side is ${bl('8 m')}.`,
            `${gr('Add')} all four sides: ${bl('8')} ${gr('+')} ${bl('8')} ${gr('+')} ${bl('8')} ${gr('+')} ${bl('8')} ${gr('=')} ${or('32')}. Or multiply: 4 × ${bl('8')} ${gr('=')} ${or('32')}.`,
            `Sipho needs ${or('32 m')} of fencing.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — perimeter of a square ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the perimeter of a square with sides of 5cm?',
          answer: '20cm',
          checkMode: 'auto',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20 cm'],
          explanation: 'A square has 4 equal sides.\nPerimeter = 4 × 5cm = 20cm ✓',
        },

        // ── Q2 Easy — perimeter of a rectangle ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A rectangle is 7cm long and 3cm wide. What is its perimeter?',
          answer: '20cm',
          checkMode: 'auto',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20 cm'],
          explanation: 'Perimeter = 7 + 7 + 3 + 3 = 20cm ✓',
        },

        // ── Q3 Medium — ribbon around a rectangular card ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Amahle puts ribbon around a rectangular card that is 15cm long and 10cm wide. How much ribbon does she need?',
          answer: '50cm',
          checkMode: 'auto',
          correctAnswer: '50cm',
          correctAnswers: ['50cm', '50 cm'],
          explanation: 'Perimeter = 15 + 15 + 10 + 10 = 50cm ✓',
        },

        // ── Q4 Hard — find the width from a known perimeter ───────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangular garden has a perimeter of 36m. The length is 12m. What is the width?',
          answer: 'Perimeter = 2 x length + 2 x width. 36 = 2 x 12 + 2 x width. 36 = 24 + 2 x width. 2 x width = 12. Width = 6m.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'A rectangle with side lengths 10cm and 6cm labelled in blue, and the perimeter calculation written out in green with the answer in orange',
      diagramSvg:
        '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="25" width="140" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="130" y="16" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">10 cm</text><text x="45" y="64" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle" transform="rotate(-90 45 64)">6 cm</text><text x="130" y="120" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">10+10+6+6 = <tspan fill="#ea580c">32 cm</tspan></text></svg>',

      videoPlaceholder:
        'Short video showing how to find the perimeter of a rectangle and a square by adding all side lengths with colour coded steps',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — UNDERSTANDING AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-area',
      title: 'Understanding Area',
      icon: '⬛',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Area</strong> is the amount of flat surface a shape covers. We measure area in <strong>square units</strong> such as square centimetres (cm²) or square metres (m²). To find the area of a rectangle we multiply the ${bl('length')} by the ${re('width')}. Area = ${bl('length')} × ${re('width')}. We use area in real life when we need to know how much paint to cover a wall or how much carpet to cover a floor.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('length')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('width')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiplication')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('area answer')}</span>` +
        `</div>` +

        // ── Key rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">A</span>` +
        `<p style="margin:0;font-size:14px;">Area = ${bl('length')} ${gr('×')} ${re('width')} — multiply the ${bl('length')} by the ${re('width')} to get the ${or('area')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Square units</p>` +
        `<p style="margin:0;color:#1e3a8a;">Area is always measured in <strong>square units</strong>. If the ${bl('length')} and ${re('width')} are in cm, the ${or('area answer')} is in cm². If they are in m, the ${or('area answer')} is in m².</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 8 cm long and 5 cm wide. What is its area?',
          answer: `The area of the rectangle is ${or('40 cm²')}`,
          steps: [
            `Use the formula: Area = ${bl('length')} ${gr('×')} ${re('width')}.`,
            `Area = ${bl('8')} ${gr('×')} ${re('5')} = ${or('40')}.`,
            `The area of the rectangle is ${or('40 cm²')}.`,
          ],
        },
        {
          question: 'Lerato wants to tile her square bathroom floor. Each side of the floor is 4 m long. How many square metres of tiles does she need?',
          answer: `Lerato needs ${or('16 m²')} of tiles`,
          steps: [
            `A square has equal sides so ${bl('length')} = ${re('width')} = 4 m.`,
            `Use the formula: Area = ${bl('length')} ${gr('×')} ${re('width')}.`,
            `Area = ${bl('4')} ${gr('×')} ${re('4')} = ${or('16')}.`,
            `Lerato needs ${or('16 m²')} of tiles.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — area of a rectangle ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the area of a rectangle that is 6cm long and 4cm wide?',
          answer: '24cm²',
          checkMode: 'auto',
          correctAnswer: '24cm²',
          correctAnswers: ['24cm²', '24 cm²', '24cm2', '24 cm2'],
          explanation: 'Area = length × width = 6 × 4 = 24cm² ✓',
        },

        // ── Q6 Easy — area of a square ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the area of a square with sides of 7m?',
          answer: '49m²',
          checkMode: 'auto',
          correctAnswer: '49m²',
          correctAnswers: ['49m²', '49 m²', '49m2', '49 m2'],
          explanation: 'Area = 7 × 7 = 49m² ✓',
        },

        // ── Q7 Medium — tiles for a rectangular floor ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho tiles a rectangular floor that is 8m long and 5m wide. Each tile covers 1m². How many tiles does he need?',
          answer: '40',
          checkMode: 'auto',
          correctAnswer: '40',
          explanation: 'Area = 8 × 5 = 40m².\nEach tile covers 1m², so 40 tiles are needed ✓',
        },

        // ── Q8 Hard — carpet cost ─────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangular room is 6m long and 4m wide. Carpet costs R120 per m². How much will it cost to carpet the whole room?',
          answer: 'R2880',
          checkMode: 'auto',
          correctAnswer: 'R2880',
          correctAnswers: ['R2880', '2880', 'R 2880'],
          explanation: 'Area = 6 × 4 = 24m².\nCost = 24 × R120 = R2880 ✓',
        },
      ],

      diagramPlaceholder:
        'A rectangle with the length (8cm) labelled in blue and the width (5cm) labelled in red, with the area formula written in green and the answer in orange',
      diagramSvg:
        '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="140" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="130" y="21" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">length = 8 cm</text><text x="45" y="64" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle" transform="rotate(-90 45 64)">width = 5 cm</text><text x="130" y="120" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">8 × 5 = <tspan fill="#ea580c">40 cm²</tspan></text></svg>',

      videoPlaceholder:
        'Short video showing how to find the area of a rectangle and a square by multiplying length by width with colour coded steps',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE DIFFERENCE BETWEEN PERIMETER AND AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-vs-area',
      title: 'The Difference Between Perimeter and Area',
      icon: '🔲',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Perimeter')} and ${re('area')} are easy to confuse but they measure different things. ${bl('Perimeter')} measures the distance around the <strong>outside</strong> of a shape — it is always in ${gr('units of length')} like ${gr('cm')} or ${gr('m')}. ${re('Area')} measures the surface <strong>inside</strong> a shape — it is always in ${or('square units')} like ${or('cm²')} or ${or('m²')}. Think of it this way — ${bl('perimeter')} is like the frame of a picture and ${re('area')} is like the picture itself.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('perimeter')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('area')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('units of length')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('square units')}</span>` +
        `</div>` +

        // ── Comparison cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key comparison</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Perimeter')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The total distance <strong>around</strong> the outside of a shape.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Formula: add up all the side lengths.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Unit: ${gr('cm')}, ${gr('m')}, ${gr('km')} — a unit of <strong>length</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Real life: the frame around a picture.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Area')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The amount of surface <strong>inside</strong> a shape.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Formula: length × width.</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Unit: ${or('cm²')}, ${or('m²')} — a <strong>square</strong> unit.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Real life: the picture inside the frame.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A bigger ${bl('perimeter')} does NOT mean a bigger ${re('area')}</p>` +
        `<p style="margin:0;color:#1e3a8a;">Two shapes can have the same ${bl('perimeter')} but very different ${re('areas')}, or a larger ${bl('perimeter')} but a smaller ${re('area')}. Always calculate both separately — never assume one tells you the other.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 6 cm long and 4 cm wide. Find both the perimeter and the area.',
          answer: `${bl('Perimeter')} = ${bl('20')} ${gr('cm')} and ${re('Area')} = ${re('24')} ${or('cm²')}`,
          steps: [
            `${bl('Perimeter')} — add all sides: ${bl('6')} + ${bl('6')} + ${bl('4')} + ${bl('4')} = ${bl('20')} ${gr('cm')}.`,
            `${re('Area')} — multiply length by width: ${bl('6')} × ${bl('4')} = ${re('24')} ${or('cm²')}.`,
            `${bl('Perimeter')} = ${bl('20')} ${gr('cm')}.`,
            `${re('Area')} = ${re('24')} ${or('cm²')}.`,
          ],
        },
        {
          question: "Thabo says a shape with a bigger perimeter always has a bigger area. Is he correct?",
          answer: `Thabo is <strong>incorrect</strong> — a bigger ${bl('perimeter')} does not guarantee a bigger ${re('area')}`,
          steps: [
            `Consider a very long thin rectangle — 20 ${gr('cm')} long and 1 ${gr('cm')} wide. ${bl('Perimeter')} = ${bl('20')} + ${bl('20')} + ${bl('1')} + ${bl('1')} = ${bl('42')} ${gr('cm')}. ${re('Area')} = 20 × 1 = ${re('20')} ${or('cm²')}.`,
            `Now consider a square with sides of 6 ${gr('cm')}. ${bl('Perimeter')} = 4 × ${bl('6')} = ${bl('24')} ${gr('cm')}. ${re('Area')} = 6 × 6 = ${re('36')} ${or('cm²')}.`,
            `The square has a <strong>smaller</strong> ${bl('perimeter')} (${bl('24')} ${gr('cm')} &lt; ${bl('42')} ${gr('cm')}) but a <strong>bigger</strong> ${re('area')} (${re('36')} ${or('cm²')} &gt; ${re('20')} ${or('cm²')}).`,
            `Thabo is <strong>incorrect</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Medium — difference between perimeter and area ─────────────────
        {
          difficulty: 'Medium',
          question: 'What is the difference between perimeter and area?',
          answer: 'Perimeter is the distance around the outside of a shape measured in units like cm or m. Area is the amount of surface inside the shape measured in square units like cm² or m².',
          checkMode: 'self',
        },

        // ── Q10 Hard — compare two rectangles ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangle has a length of 10cm and a width of 3cm. Another rectangle has a length of 6cm and a width of 5cm. Which has the bigger area and which has the bigger perimeter?',
          answer: 'First rectangle — area = 30cm², perimeter = 26cm. Second rectangle — area = 30cm², perimeter = 22cm. Both have the same area but the first has a bigger perimeter.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Side-by-side diagram of a long thin rectangle and a square showing that the rectangle has a bigger perimeter (blue) but a smaller area (red), with units of length in green and square units in orange',
      diagramSvg:
        '<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="84" width="120" height="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="75" y="20" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">P = 42 <tspan fill="#16a34a">cm</tspan></text><text x="75" y="38" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">A = 20 <tspan fill="#ea580c">cm²</tspan></text><text x="75" y="105" font-size="11" fill="#0f1f3d" text-anchor="middle">long thin rectangle</text><rect x="195" y="54" width="60" height="60" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="225" y="20" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">P = 24 <tspan fill="#16a34a">cm</tspan></text><text x="225" y="38" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">A = 36 <tspan fill="#ea580c">cm²</tspan></text><text x="225" y="130" font-size="11" fill="#0f1f3d" text-anchor="middle">square</text></svg>',

      videoPlaceholder:
        'Short video showing the difference between perimeter and area using the frame and picture analogy with colour coded examples in blue red green and orange',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — AREA OF IRREGULAR SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-irregular-shapes',
      title: 'Area of Irregular Shapes',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">Not all shapes are simple rectangles or squares. An <strong>irregular shape</strong> is one that is not a standard shape. To find the area of an irregular shape we can <strong>split it into smaller rectangles</strong>, find the area of each rectangle separately and then add them together. Always look for the easiest way to split the shape into rectangles that do not overlap.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('Rectangle A')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Rectangle B')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total area')}</span>` +
        `</div>` +

        // ── Strategy steps ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy: split and add</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Split</strong> — Divide the irregular shape into smaller rectangles or squares that do not overlap.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Calculate</strong> — Find the area of each rectangle separately using Area = length × width.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Add</strong> — Add all the smaller areas together to get the ${or('total area')} of the irregular shape.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">No overlaps allowed</p>` +
        `<p style="margin:0;color:#1e3a8a;">When you split the shape, make sure the smaller rectangles cover every part of the shape exactly once — there must be <strong>no gaps</strong> and <strong>no overlaps</strong>. If two rectangles overlap you will count that area twice and get the wrong answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'An L-shaped room is made of two rectangles. Rectangle A is 6 m long and 4 m wide. Rectangle B is 3 m long and 2 m wide. What is the total area?',
          answer: `The total area of the L-shaped room is ${or('30 m²')}`,
          steps: [
            `Find the area of ${bl('Rectangle A')}: ${bl('6')} × ${bl('4')} = ${bl('24 m²')}.`,
            `Find the area of ${gr('Rectangle B')}: ${gr('3')} × ${gr('2')} = ${gr('6 m²')}.`,
            `Add the areas together: ${bl('24')} + ${gr('6')} = ${or('30')}.`,
            `The total area of the L-shaped room is ${or('30 m²')}.`,
          ],
        },
        {
          question: 'Amahle draws a shape on a grid where each square represents 1 cm². She counts 14 full squares and 4 half squares inside the shape. What is the area?',
          answer: `The area of the shape is ${or('16 cm²')}`,
          steps: [
            `Count ${bl('full squares')}: ${bl('14')} × 1 cm² = ${bl('14 cm²')}.`,
            `Count ${gr('half squares')}: ${gr('4')} × 0.5 cm² = ${gr('2 cm²')}.`,
            `Add together: ${bl('14')} + ${gr('2')} = ${or('16')}.`,
            `The area of the shape is ${or('16 cm²')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium — L-shaped garden ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'An L-shaped garden is made of two rectangles. The first is 8m by 4m and the second is 3m by 2m. What is the total area?',
          answer: '38m²',
          checkMode: 'auto',
          correctAnswer: '38m²',
          correctAnswers: ['38m²', '38 m²', '38m2', '38 m2'],
          explanation: 'Area of first rectangle: 8 × 4 = 32m².\nArea of second rectangle: 3 × 2 = 6m².\nTotal area: 32 + 6 = 38m² ✓',
        },

        // ── Q12 Hard — grid counting with half squares ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato counts 18 full squares and 6 half squares inside a shape on a grid where each square = 1cm². What is the area?',
          answer: '21cm²',
          checkMode: 'auto',
          correctAnswer: '21cm²',
          correctAnswers: ['21cm²', '21 cm²', '21cm2', '21 cm2'],
          explanation: 'Full squares: 18 × 1cm² = 18cm².\nHalf squares: 6 × 0.5cm² = 3cm².\nTotal area: 18 + 3 = 21cm² ✓',
        },
      ],

      diagramPlaceholder:
        'An L-shaped room split into Rectangle A (labelled in blue) and Rectangle B (labelled in green), with the total area formula written in orange',
      diagramSvg:
        '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><polygon points="20,20 140,20 140,60 70,60 70,110 20,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="60" x2="70" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><text x="105" y="14" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Rectangle A</text><text x="45" y="128" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Rectangle B</text><text x="180" y="60" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Total</text><text x="180" y="76" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">area</text><text x="180" y="92" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">= A + B</text></svg>',

      videoPlaceholder:
        'Short video showing how to find the area of an irregular shape by splitting it into smaller rectangles calculating each area separately and adding them together with colour coded steps',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING PERIMETER AND AREA PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-perimeter-area-problems',
      title: 'Solving Perimeter and Area Problems',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">We use perimeter and area to solve real life problems. When solving problems always read carefully to decide whether you need ${bl('perimeter')} or ${re('area')}. If the problem is about distance around the outside use ${bl('perimeter')}. If the problem is about covering a surface use ${re('area')}. Write your answer with the correct unit — length units for ${bl('perimeter')} and square units for ${re('area')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('perimeter problem')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('area problem')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Decision guide ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to decide: perimeter or area?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Use perimeter when…')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The problem is about the distance <strong>around</strong> the outside of a shape.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Key words: fence, border, frame, ribbon, edge, around.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Use area when…')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The problem is about <strong>covering</strong> or filling a surface.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Key words: paint, tile, carpet, cover, grass, floor, wall.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always use the correct unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">Write your ${gr('answer')} with the correct unit. ${bl('Perimeter')} uses length units such as m or cm. ${re('Area')} uses square units such as m² or cm². Using the wrong unit will make your answer incorrect even if the number is right.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wants to put a border of tiles around the edge of a rectangular pool that is 12 m long and 8 m wide. How many metres of tiles does he need?',
          answer: `Sipho needs ${gr('40 m')} of tiles`,
          steps: [
            `A border goes around the outside — this is a ${bl('perimeter')} problem.`,
            `${bl('Perimeter')} = ${bl('12')} + ${bl('12')} + ${bl('8')} + ${bl('8')} = ${gr('40')} m.`,
            `Sipho needs ${gr('40 m')} of tiles.`,
          ],
        },
        {
          question: 'Lerato wants to paint a wall that is 5 m long and 3 m high. Paint covers 10 m² per tin. How many tins does she need?',
          answer: `Lerato needs ${gr('2')} tins of paint`,
          steps: [
            `Painting covers a surface — this is an ${re('area')} problem.`,
            `Find the ${re('area')} of the wall: ${re('5')} × ${re('3')} = ${gr('15 m²')}.`,
            `Each tin covers 10 m². Number of tins = ${gr('15')} ÷ 10 = 1.5 tins.`,
            `Since you cannot buy half a tin, Lerato needs ${gr('2')} tins of paint.`,
          ],
        },
        {
          question: 'A rectangular garden is 9 m long and 6 m wide. Thabo wants to plant grass over the whole garden and put a fence around the outside. Find both the area and perimeter.',
          answer: `${re('Area')} = ${gr('54 m²')} of grass needed and ${bl('Perimeter')} = ${gr('30 m')} of fencing needed`,
          steps: [
            `Planting grass covers the surface — use ${re('area')}. Putting a fence goes around the outside — use ${bl('perimeter')}.`,
            `${re('Area')} = ${re('9')} × ${re('6')} = ${gr('54 m²')} of grass needed.`,
            `${bl('Perimeter')} = ${bl('9')} + ${bl('9')} + ${bl('6')} + ${bl('6')} = ${gr('30 m')} of fencing needed.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Medium — paint tins ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo wants to paint a rectangular wall 6m wide and 3m high. Paint covers 9m² per tin. How many tins does he need?',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Area of wall = 6 × 3 = 18m².\nTins needed = 18 ÷ 9 = 2 tins ✓',
        },

        // ── Q14 Hard — square garden, find side and perimeter ─────────────────
        {
          difficulty: 'Hard',
          question: 'A square garden has an area of 64m². What is the length of each side and what is the perimeter?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Length of each side',
              correctAnswer: '8m',
              correctAnswers: ['8m', '8 m', '8'],
              explanation: 'Area of square = side × side.\n64 = side².\nSide = √64 = 8m ✓',
            },
            {
              label: 'b) Perimeter',
              correctAnswer: '32m',
              correctAnswers: ['32m', '32 m', '32'],
              explanation: 'Perimeter = 4 × side = 4 × 8 = 32m ✓',
            },
          ],
        },

        // ── Q15 Hard — path around a pool ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangular swimming pool is 15m long and 8m wide. Sipho wants to put a path 1m wide all the way around the outside of the pool. What is the area of the path only?',
          answer: 'Outer rectangle = 17m x 10m = 170m². Pool area = 15 x 8 = 120m². Path area = 170 - 120 = 50m².',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to decide between perimeter and area when solving real life problems with colour coded worked examples in blue red and green',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered perimeter and area.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of perimeter and area.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered perimeter and area for Grade 5. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of this topic. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Blocks: 0-3 Perimeter fundamentals | 4-7 Area fundamentals |
  // 8-11 Perimeter vs area (concept/error-spotting) | 12-15 Composite/irregular area |
  // 16-19 Applied multi-step problems
  // ═══════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A square tile has sides of 9cm. What is its perimeter?', answer: '36cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36 cm'], explanation: 'A square has 4 equal sides.\nPerimeter = 4 × 9cm = 36cm ✓' },
        { difficulty: 'Easy', question: 'A rectangle is 12cm long and 5cm wide. What is its perimeter?', answer: '34cm', checkMode: 'auto', correctAnswer: '34cm', correctAnswers: ['34cm', '34 cm'], explanation: 'Perimeter = 12 + 12 + 5 + 5 = 34cm ✓' },
        { difficulty: 'Easy-Medium', question: 'Zanele wants to put fencing all the way around her rectangular vegetable garden, which is 14m long and 9m wide. How much fencing does she need?', answer: '46m', checkMode: 'auto', correctAnswer: '46m', correctAnswers: ['46m', '46 m'], explanation: 'Perimeter = 14 + 14 + 9 + 9 = 46m ✓' },
        { difficulty: 'Medium', question: 'A rectangular sports field has a perimeter of 40m. Its length is 14m. What is its width?', answer: '6m', checkMode: 'auto', correctAnswer: '6m', correctAnswers: ['6m', '6 m'], explanation: 'Perimeter = 2 × length + 2 × width.\n40 = 2 × 14 + 2 × width.\n40 = 28 + 2 × width.\n2 × width = 12.\nWidth = 6m ✓' },
        { difficulty: 'Easy', question: 'What is the area of a rectangle that is 9cm long and 6cm wide?', answer: '54cm²', checkMode: 'auto', correctAnswer: '54cm²', correctAnswers: ['54cm²', '54 cm²', '54cm2', '54 cm2'], explanation: 'Area = length × width = 9 × 6 = 54cm² ✓' },
        { difficulty: 'Easy', question: 'What is the area of a square field with sides of 8m?', answer: '64m²', checkMode: 'auto', correctAnswer: '64m²', correctAnswers: ['64m²', '64 m²', '64m2', '64 m2'], explanation: 'Area = 8 × 8 = 64m² ✓' },
        { difficulty: 'Easy-Medium', question: 'Sipho is laying tiles on a rectangular patio that is 7m long and 5m wide. Each tile covers exactly 1m². How many tiles does he need?', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Area of patio = 7 × 5 = 35m².\nEach tile covers 1m², so Sipho needs 35 tiles ✓' },
        { difficulty: 'Medium', question: 'A rectangular driveway is 5m long and 4m wide. Paving costs R95 per m². What is the total cost to pave the whole driveway?', answer: 'R1900', checkMode: 'auto', correctAnswer: 'R1900', correctAnswers: ['R1900', '1900', 'R 1900'], explanation: 'Area = 5 × 4 = 20m².\nCost = 20 × R95 = R1900 ✓' },
        { difficulty: 'Medium', question: 'Explain, in your own words, the difference between perimeter and area. Mention what each one measures and what units each one uses.', answer: 'Perimeter is the total distance around the outside edge of a shape — it is measured in units of length such as cm or m. Area is the amount of flat surface inside a shape — it is measured in square units such as cm² or m². They measure completely different things, so a shape has one perimeter value and a separate area value.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A rectangular noticeboard is 11cm long and 7cm wide. Find both its perimeter and its area.', answer: 'Perimeter = 36cm, Area = 77cm²', checkMode: 'auto', correctAnswer: '36cm77cm²', correctAnswers: ['36cm77cm²', '36cm, 77cm²', 'P36A77', 'perimeter36area77'], explanation: 'Perimeter = 11 + 11 + 7 + 7 = 36cm.\nArea = 11 × 7 = 77cm² ✓' },
        { difficulty: 'Medium', question: 'Karabo says: "If one shape has a bigger perimeter than another shape, it must also have a bigger area." Is Karabo correct? Explain using an example to support your answer.', answer: 'Karabo is incorrect. For example, a rectangle that is 20cm long and 1cm wide has a perimeter of 20 + 20 + 1 + 1 = 42cm and an area of 20 × 1 = 20cm². A square with sides of 6cm has a smaller perimeter of 4 × 6 = 24cm but a bigger area of 6 × 6 = 36cm². This shows a bigger perimeter does not guarantee a bigger area.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Rectangle A is 12cm long and 3cm wide. Rectangle B is 6cm long and 6cm wide. Show that they have the same area, then find which one has the bigger perimeter.', answer: 'Both have an area of 36cm², but Rectangle A has the bigger perimeter (30cm vs 24cm)', checkMode: 'auto', correctAnswer: 'RectangleA', correctAnswers: ['RectangleA', 'Rectangle A', 'A', 'rectanglea'], explanation: 'Area of Rectangle A = 12 × 3 = 36cm².\nArea of Rectangle B = 6 × 6 = 36cm². Both areas are equal.\nPerimeter of A = 12 + 12 + 3 + 3 = 30cm.\nPerimeter of B = 6 + 6 + 6 + 6 = 24cm.\nRectangle A has the bigger perimeter ✓' },
        { difficulty: 'Medium', question: 'An L-shaped classroom is made of two rectangles. The first rectangle is 7m long and 5m wide. The second rectangle is 4m long and 3m wide. What is the total area of the classroom?', answer: '47m²', checkMode: 'auto', correctAnswer: '47m²', correctAnswers: ['47m²', '47 m²', '47m2', '47 m2'], explanation: 'Area of first rectangle = 7 × 5 = 35m².\nArea of second rectangle = 4 × 3 = 12m².\nTotal area = 35 + 12 = 47m² ✓' },
        { difficulty: 'Medium-Hard', question: 'A shape is drawn on a grid where every square represents 1cm². Thandiwe counts 16 full squares and 8 half squares inside the shape. What is the total area?', answer: '20cm²', checkMode: 'auto', correctAnswer: '20cm²', correctAnswers: ['20cm²', '20 cm²', '20cm2', '20 cm2'], explanation: 'Full squares: 16 × 1cm² = 16cm².\nHalf squares: 8 × 0.5cm² = 4cm².\nTotal area = 16 + 4 = 20cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'A rectangular lawn measures 10m by 8m. A rectangular patch of 3m by 2m in the corner is paved instead of grassed. What area of the lawn is still grass?', answer: '74m²', checkMode: 'auto', correctAnswer: '74m²', correctAnswers: ['74m²', '74 m²', '74m2', '74 m2'], explanation: 'Total area of lawn = 10 × 8 = 80m².\nPaved corner area = 3 × 2 = 6m².\nGrass area = 80 − 6 = 74m² ✓' },
        { difficulty: 'Hard', question: 'A room is shaped like two rectangles joined together. The bottom rectangle is 10m wide and 3m tall. On top of it sits a second rectangle that is 4m wide. The total height of the whole shape is 8m. What is the total area of the room?', answer: '50m²', checkMode: 'auto', correctAnswer: '50m²', correctAnswers: ['50m²', '50 m²', '50m2', '50 m2'], explanation: 'Height of the top rectangle = total height − bottom height = 8 − 3 = 5m.\nArea of bottom rectangle = 10 × 3 = 30m².\nArea of top rectangle = 4 × 5 = 20m².\nTotal area = 30 + 20 = 50m² ✓' },
        { difficulty: 'Hard', question: 'A farmer wants to know how much wire he needs to fence a rectangular camp, and separately how much grass seed he needs to cover it. Which measurement tells him about the wire, and which tells him about the grass seed?', answer: 'Perimeter tells him about the wire (the fence goes around the outside). Area tells him about the grass seed (the seed covers the surface inside the camp).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garden is 13m long and 8m wide. Palesa wants to put fencing all the way around it and plant grass over the whole garden. How much fencing does she need, and what area of grass does she need to plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Fencing needed (perimeter)', correctAnswer: '42m', correctAnswers: ['42m', '42 m'], explanation: 'Perimeter = 13 + 13 + 8 + 8 = 42m ✓' }, { label: 'b) Grass area needed', correctAnswer: '104m²', correctAnswers: ['104m²', '104 m²', '104m2', '104 m2'], explanation: 'Area = 13 × 8 = 104m² ✓' } ] },
        { difficulty: 'Hard', question: 'A rectangular swimming pool is 14m long and 6m wide. A paved path 1m wide is built all the way around the outside of the pool. What is the area of the path only (not including the pool)?', answer: 'The outer rectangle (pool plus path) is (14 + 1 + 1)m by (6 + 1 + 1)m = 16m by 8m, giving an area of 16 × 8 = 128m². The pool itself has an area of 14 × 6 = 84m². Path area = 128 − 84 = 44m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular kitchen floor is 6m long and 5m wide. Each tile covers 0.8m². Tiles are sold at R45 each and can only be bought as whole tiles. How many tiles must be bought, and what is the total cost?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Number of tiles', correctAnswer: '38', correctAnswers: ['38'], explanation: 'Area of floor = 6 × 5 = 30m².\nTiles needed = 30 ÷ 0.8 = 37.5.\nSince you cannot buy half a tile, round up to 38 tiles ✓' }, { label: 'b) Total cost', correctAnswer: 'R1710', correctAnswers: ['R1710', '1710', 'R 1710'], explanation: 'Cost = 38 × R45 = R1710 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area for Grade 5.' },
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
        { difficulty: 'Easy', question: 'What is the perimeter of a square photo frame with sides of 11cm?', answer: '44cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44 cm'], explanation: 'A square has 4 equal sides.\nPerimeter = 4 × 11cm = 44cm ✓' },
        { difficulty: 'Easy', question: 'A rectangular table top is 15cm long and 8cm wide. Find its perimeter.', answer: '46cm', checkMode: 'auto', correctAnswer: '46cm', correctAnswers: ['46cm', '46 cm'], explanation: 'Perimeter = 15 + 15 + 8 + 8 = 46cm ✓' },
        { difficulty: 'Easy-Medium', question: 'Amahle is gluing ribbon around the edge of a rectangular photo frame that is 20cm long and 13cm wide. How much ribbon does she need in total?', answer: '66cm', checkMode: 'auto', correctAnswer: '66cm', correctAnswers: ['66cm', '66 cm'], explanation: 'Perimeter = 20 + 20 + 13 + 13 = 66cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular sheep camp has a perimeter of 54m. Its width is 11m. What is its length?', answer: '16m', checkMode: 'auto', correctAnswer: '16m', correctAnswers: ['16m', '16 m'], explanation: 'Perimeter = 2 × length + 2 × width.\n54 = 2 × length + 2 × 11.\n54 = 2 × length + 22.\n2 × length = 32.\nLength = 16m ✓' },
        { difficulty: 'Easy', question: 'What is the area of a rectangle that is 12cm long and 7cm wide?', answer: '84cm²', checkMode: 'auto', correctAnswer: '84cm²', correctAnswers: ['84cm²', '84 cm²', '84cm2', '84 cm2'], explanation: 'Area = length × width = 12 × 7 = 84cm² ✓' },
        { difficulty: 'Easy', question: 'What is the area of a square vegetable patch with sides of 9m?', answer: '81m²', checkMode: 'auto', correctAnswer: '81m²', correctAnswers: ['81m²', '81 m²', '81m2', '81 m2'], explanation: 'Area = 9 × 9 = 81m² ✓' },
        { difficulty: 'Easy-Medium', question: 'Lerato wants to buy carpet to cover a rectangular lounge floor that is 6m long and 9m wide. How many square metres of carpet does she need?', answer: '54m²', checkMode: 'auto', correctAnswer: '54m²', correctAnswers: ['54m²', '54 m²', '54m2', '54 m2'], explanation: 'Area = 6 × 9 = 54m² ✓' },
        { difficulty: 'Medium', question: 'A square poster has an area of 121m². What is the length of each side?', answer: '11m', checkMode: 'auto', correctAnswer: '11m', correctAnswers: ['11m', '11 m'], explanation: 'Area of square = side × side.\n121 = side².\nSide = √121 = 11m ✓' },
        { difficulty: 'Medium', question: 'A rectangular window is 13cm long and 6cm wide. Find both its perimeter and its area.', answer: 'Perimeter = 38cm, Area = 78cm²', checkMode: 'auto', correctAnswer: '38cm78cm²', correctAnswers: ['38cm78cm²', '38cm, 78cm²', 'P38A78', 'perimeter38area78'], explanation: 'Perimeter = 13 + 13 + 6 + 6 = 38cm.\nArea = 13 × 6 = 78cm² ✓' },
        { difficulty: 'Medium', question: 'Explain the difference between perimeter and area to a younger learner, using the idea of a picture frame and the picture inside it.', answer: 'Perimeter is like the frame around a picture — it is the distance all the way around the outside edge, measured in length units like cm or m. Area is like the picture itself — it is the amount of flat space inside the frame, measured in square units like cm² or m². The frame and the picture are two completely different measurements of the same picture.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student writes "the perimeter of my desk is 12cm²." Explain what is wrong with this statement.', answer: 'The units are wrong. Perimeter is a distance measured in units of length such as cm or m, not square units. Since cm² is a square unit used for area, the statement has mixed up perimeter with area. It should say the perimeter is 12cm (or the area is 12cm²), not mix the two together.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Rectangle A is 10cm long and 4cm wide. Rectangle B is 7cm long and 7cm wide. Show that they have the same perimeter, then find which one has the bigger area.', answer: 'Both have a perimeter of 28cm, but Rectangle B has the bigger area (49cm² vs 40cm²)', checkMode: 'auto', correctAnswer: 'RectangleB', correctAnswers: ['RectangleB', 'Rectangle B', 'B', 'rectangleb'], explanation: 'Perimeter of A = 10 + 10 + 4 + 4 = 28cm.\nPerimeter of B = 7 + 7 + 7 + 7 = 28cm. Both perimeters are equal.\nArea of A = 10 × 4 = 40cm².\nArea of B = 7 × 7 = 49cm².\nRectangle B has the bigger area ✓' },
        { difficulty: 'Medium', question: 'An L-shaped storeroom is made of two rectangles. The first rectangle is 9m long and 6m wide. The second rectangle is 5m long and 2m wide. What is the total area of the storeroom?', answer: '64m²', checkMode: 'auto', correctAnswer: '64m²', correctAnswers: ['64m²', '64 m²', '64m2', '64 m2'], explanation: 'Area of first rectangle = 9 × 6 = 54m².\nArea of second rectangle = 5 × 2 = 10m².\nTotal area = 54 + 10 = 64m² ✓' },
        { difficulty: 'Medium-Hard', question: 'A shape is drawn on a grid where every square represents 1cm². Bongani counts 22 full squares and 10 half squares inside the shape. What is the total area?', answer: '27cm²', checkMode: 'auto', correctAnswer: '27cm²', correctAnswers: ['27cm²', '27 cm²', '27cm2', '27 cm2'], explanation: 'Full squares: 22 × 1cm² = 22cm².\nHalf squares: 10 × 0.5cm² = 5cm².\nTotal area = 22 + 5 = 27cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'A rectangular workshop floor measures 12m by 7m. A rectangular storage box of 4m by 3m sits permanently in one corner and cannot be walked on. What area of the floor can still be walked on?', answer: '72m²', checkMode: 'auto', correctAnswer: '72m²', correctAnswers: ['72m²', '72 m²', '72m2', '72 m2'], explanation: 'Total floor area = 12 × 7 = 84m².\nStorage box area = 4 × 3 = 12m².\nWalkable area = 84 − 12 = 72m² ✓' },
        { difficulty: 'Hard', question: 'A hallway is shaped like two rectangles joined together. The bottom rectangle is 8m wide and 3m tall. On top of it sits a second rectangle that is 5m wide. The total height of the whole shape is 10m. What is the total area of the hallway?', answer: '59m²', checkMode: 'auto', correctAnswer: '59m²', correctAnswers: ['59m²', '59 m²', '59m2', '59 m2'], explanation: 'Height of the top rectangle = total height − bottom height = 10 − 3 = 7m.\nArea of bottom rectangle = 8 × 3 = 24m².\nArea of top rectangle = 5 × 7 = 35m².\nTotal area = 24 + 35 = 59m² ✓' },
        { difficulty: 'Hard', question: 'A school wants to know how much paint is needed to cover a rectangular hall floor, and separately how much skirting board is needed around the edge of the same floor. Which measurement tells them about the paint, and which tells them about the skirting board?', answer: 'Area tells them about the paint (paint covers the flat surface of the floor). Perimeter tells them about the skirting board (skirting runs around the outside edge of the room).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garden is 16m long and 7m wide. Thabo wants to put fencing all the way around it and plant grass over the whole garden. How much fencing does he need, and what area of grass does he need to plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Fencing needed (perimeter)', correctAnswer: '46m', correctAnswers: ['46m', '46 m'], explanation: 'Perimeter = 16 + 16 + 7 + 7 = 46m ✓' }, { label: 'b) Grass area needed', correctAnswer: '112m²', correctAnswers: ['112m²', '112 m²', '112m2', '112 m2'], explanation: 'Area = 16 × 7 = 112m² ✓' } ] },
        { difficulty: 'Hard', question: 'A rectangular swimming pool is 12m long and 7m wide. A paved path 1.5m wide is built all the way around the outside of the pool. What is the area of the path only (not including the pool)?', answer: 'The outer rectangle (pool plus path) is (12 + 1.5 + 1.5)m by (7 + 1.5 + 1.5)m = 15m by 10m, giving an area of 15 × 10 = 150m². The pool itself has an area of 12 × 7 = 84m². Path area = 150 − 84 = 66m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular bathroom floor is 7m long and 4m wide. Each tile covers 0.7m². Tiles are sold at R60 each and can only be bought as whole tiles. How many tiles must be bought, and what is the total cost?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Number of tiles', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Area of floor = 7 × 4 = 28m².\nTiles needed = 28 ÷ 0.7 = 40 tiles exactly ✓' }, { label: 'b) Total cost', correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R 2400'], explanation: 'Cost = 40 × R60 = R2400 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area for Grade 5.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1 and Set 2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A square stamp has sides of 13cm. What is its perimeter?', answer: '52cm', checkMode: 'auto', correctAnswer: '52cm', correctAnswers: ['52cm', '52 cm'], explanation: 'A square has 4 equal sides.\nPerimeter = 4 × 13cm = 52cm ✓' },
        { difficulty: 'Easy', question: 'A rectangular desk is 18m long and 9m wide. Find its perimeter.', answer: '54m', checkMode: 'auto', correctAnswer: '54m', correctAnswers: ['54m', '54 m'], explanation: 'Perimeter = 18 + 18 + 9 + 9 = 54m ✓' },
        { difficulty: 'Easy-Medium', question: 'A farmer needs fencing all the way around a rectangular chicken yard that is 21m long and 15m wide. How much fencing is needed in total?', answer: '72m', checkMode: 'auto', correctAnswer: '72m', correctAnswers: ['72m', '72 m'], explanation: 'Perimeter = 21 + 21 + 15 + 15 = 72m ✓' },
        { difficulty: 'Medium', question: 'A rectangular picture frame has a perimeter of 60cm. One side is 22cm long. What is the length of the other side?', answer: '8cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm'], explanation: 'Perimeter = 2 × length + 2 × width.\n60 = 2 × 22 + 2 × other side.\n60 = 44 + 2 × other side.\n2 × other side = 16.\nOther side = 8cm ✓' },
        { difficulty: 'Easy', question: 'What is the area of a rectangle that is 14cm long and 5cm wide?', answer: '70cm²', checkMode: 'auto', correctAnswer: '70cm²', correctAnswers: ['70cm²', '70 cm²', '70cm2', '70 cm2'], explanation: 'Area = length × width = 14 × 5 = 70cm² ✓' },
        { difficulty: 'Easy', question: 'What is the area of a square courtyard with sides of 12m?', answer: '144m²', checkMode: 'auto', correctAnswer: '144m²', correctAnswers: ['144m²', '144 m²', '144m2', '144 m2'], explanation: 'Area = 12 × 12 = 144m² ✓' },
        { difficulty: 'Easy-Medium', question: 'A groundsman needs to plant grass over a rectangular sports field that is 10m long and 7m wide. What area of grass does he need to plant?', answer: '70m²', checkMode: 'auto', correctAnswer: '70m²', correctAnswers: ['70m²', '70 m²', '70m2', '70 m2'], explanation: 'Area = 10 × 7 = 70m² ✓' },
        { difficulty: 'Medium', question: 'A square rug has an area of 100cm². What is the length of each side?', answer: '10cm', checkMode: 'auto', correctAnswer: '10cm', correctAnswers: ['10cm', '10 cm'], explanation: 'Area of square = side × side.\n100 = side².\nSide = √100 = 10cm ✓' },
        { difficulty: 'Medium', question: 'A rectangular whiteboard is 16cm long and 9cm wide. Find both its perimeter and its area.', answer: 'Perimeter = 50cm, Area = 144cm²', checkMode: 'auto', correctAnswer: '50cm144cm²', correctAnswers: ['50cm144cm²', '50cm, 144cm²', 'P50A144', 'perimeter50area144'], explanation: 'Perimeter = 16 + 16 + 9 + 9 = 50cm.\nArea = 16 × 9 = 144cm² ✓' },
        { difficulty: 'Medium', question: 'Write a short explanation of perimeter and area for a Grade 4 learner who has never heard these words before. Include what each one measures and the type of unit each one uses.', answer: 'Perimeter is the distance you would walk if you went all the way around the outside edge of a shape. It is measured in normal length units like cm or m. Area is the amount of flat space covered inside a shape, like how much paint you would need to fill it in. It is measured in square units like cm² or m², because you are covering a flat surface, not walking a distance.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two square tiles both have sides of 5cm, so a student says "they must have the same perimeter and the same area, since they are identical squares." Is the student correct? Explain your answer.', answer: 'Yes, the student is correct in this case. Since both squares have identical side lengths of 5cm, both the perimeter (4 × 5 = 20cm) and the area (5 × 5 = 25cm²) will be exactly the same for both squares. This is different from comparing two different shapes — here the shapes are truly identical, so every measurement matches.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Rectangle A is 9cm long and 5cm wide. Rectangle B is 15cm long and 3cm wide. Show that they have the same area, then find which one has the bigger perimeter.', answer: 'Both have an area of 45cm², but Rectangle B has the bigger perimeter (36cm vs 28cm)', checkMode: 'auto', correctAnswer: 'RectangleB', correctAnswers: ['RectangleB', 'Rectangle B', 'B', 'rectangleb'], explanation: 'Area of Rectangle A = 9 × 5 = 45cm².\nArea of Rectangle B = 15 × 3 = 45cm². Both areas are equal.\nPerimeter of A = 9 + 9 + 5 + 5 = 28cm.\nPerimeter of B = 15 + 15 + 3 + 3 = 36cm.\nRectangle B has the bigger perimeter ✓' },
        { difficulty: 'Medium', question: 'An L-shaped patio is made of two rectangles. The first rectangle is 10m long and 6m wide. The second rectangle is 4m long and 3m wide. What is the total area of the patio?', answer: '72m²', checkMode: 'auto', correctAnswer: '72m²', correctAnswers: ['72m²', '72 m²', '72m2', '72 m2'], explanation: 'Area of first rectangle = 10 × 6 = 60m².\nArea of second rectangle = 4 × 3 = 12m².\nTotal area = 60 + 12 = 72m² ✓' },
        { difficulty: 'Medium-Hard', question: 'A shape is drawn on a grid where every square represents 1cm². Naledi counts 30 full squares and 12 half squares inside the shape. What is the total area?', answer: '36cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36 cm²', '36cm2', '36 cm2'], explanation: 'Full squares: 30 × 1cm² = 30cm².\nHalf squares: 12 × 0.5cm² = 6cm².\nTotal area = 30 + 6 = 36cm² ✓' },
        { difficulty: 'Medium-Hard', question: 'A rectangular hall floor measures 15m by 9m. A rectangular stage of 5m by 4m is built in one corner and is not part of the floor that gets polished. What area of the floor gets polished?', answer: '115m²', checkMode: 'auto', correctAnswer: '115m²', correctAnswers: ['115m²', '115 m²', '115m2', '115 m2'], explanation: 'Total floor area = 15 × 9 = 135m².\nStage area = 5 × 4 = 20m².\nPolished area = 135 − 20 = 115m² ✓' },
        { difficulty: 'Hard', question: 'A garden is made up of three separate rectangular flower beds. The first bed is 6m by 4m, the second bed is 3m by 2m, and the third bed is 5m by 3m. What is the total area of all three flower beds together?', answer: '45m²', checkMode: 'auto', correctAnswer: '45m²', correctAnswers: ['45m²', '45 m²', '45m2', '45 m2'], explanation: 'Area of first bed = 6 × 4 = 24m².\nArea of second bed = 3 × 2 = 6m².\nArea of third bed = 5 × 3 = 15m².\nTotal area = 24 + 6 + 15 = 45m² ✓' },
        { difficulty: 'Hard', question: 'A homeowner wants to know how much shade cloth is needed to cover a rectangular patio roof, and separately how much edging trim is needed around the border of the same roof. Which measurement tells them about the shade cloth, and which tells them about the edging trim?', answer: 'Area tells them about the shade cloth (the cloth covers the whole flat surface of the roof). Perimeter tells them about the edging trim (the trim runs around the outside border of the roof).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garden is 18m long and 10m wide. Nomvula wants to put fencing all the way around it and plant grass over the whole garden. How much fencing does she need, and what area of grass does she need to plant?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Fencing needed (perimeter)', correctAnswer: '56m', correctAnswers: ['56m', '56 m'], explanation: 'Perimeter = 18 + 18 + 10 + 10 = 56m ✓' }, { label: 'b) Grass area needed', correctAnswer: '180m²', correctAnswers: ['180m²', '180 m²', '180m2', '180 m2'], explanation: 'Area = 18 × 10 = 180m² ✓' } ] },
        { difficulty: 'Hard', question: 'A rectangular swimming pool is 20m long and 10m wide. A paved path 2m wide is built all the way around the outside of the pool. What is the area of the path only (not including the pool)?', answer: 'The outer rectangle (pool plus path) is (20 + 2 + 2)m by (10 + 2 + 2)m = 24m by 14m, giving an area of 24 × 14 = 336m². The pool itself has an area of 20 × 10 = 200m². Path area = 336 − 200 = 136m².', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garage floor is 9m long and 6m wide. Each bag of floor sealant covers 6m². Sealant is sold at R250 per bag and can only be bought as whole bags. How many bags must be bought, and what is the total cost?', answer: '', checkMode: 'auto', parts: [ { label: 'a) Number of bags', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Area of floor = 9 × 6 = 54m².\nBags needed = 54 ÷ 6 = 9 bags exactly ✓' }, { label: 'b) Total cost', correctAnswer: 'R2250', correctAnswers: ['R2250', '2250', 'R 2250'], explanation: 'Cost = 9 × R250 = R2250 ✓' } ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered perimeter and area for Grade 5.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
