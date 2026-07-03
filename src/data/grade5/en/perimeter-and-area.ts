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
        '<DiagramPlaceholder label="Diagram showing a rectangle with side lengths labelled in blue and the perimeter calculation written out in green and orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the perimeter of a rectangle and a square by adding all side lengths with colour coded steps" />',
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
        '<DiagramPlaceholder label="Diagram showing a rectangle with length labelled in blue and width labelled in red with the area formula and answer written in green and orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the area of a rectangle and a square by multiplying length by width with colour coded steps" />',
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
        '<DiagramPlaceholder label="Side by side diagram of a long thin rectangle and a square showing that the rectangle has a bigger perimeter in blue but a smaller area in red with units of length in green and square units in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the difference between perimeter and area using the frame and picture analogy with colour coded examples in blue red green and orange" />',
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
        '<DiagramPlaceholder label="Diagram showing an L-shaped room split into Rectangle A labelled in blue and Rectangle B labelled in green with the total area written in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the area of an irregular shape by splitting it into smaller rectangles calculating each area separately and adding them together with colour coded steps" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rectangle with perimeter highlighted in blue around the outside and area shaded in red on the inside with the answer written in green for a real life word problem" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to decide between perimeter and area when solving real life problems with colour coded worked examples in blue red and green" />',
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
}
