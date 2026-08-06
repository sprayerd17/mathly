import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Perimeter and Area',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS PERIMETER?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-perimeter',
      title: 'What is Perimeter?',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;"><strong>Perimeter</strong> is the <strong>total distance around the outside of a shape</strong>. To find the perimeter, you add up the lengths of all the sides. The answer is always written with a unit of length such as cm, m or mm.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Real-life examples</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🌿</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Fencing around a garden</strong> — the total length of fence needed equals the perimeter of the garden.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🖼️</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>A border around a picture frame</strong> — the length of the border strip is the perimeter of the picture.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🏃</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Walking around the outside of a sports field</strong> — the distance you walk is the perimeter of the field.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to calculate perimeter</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Add up all the sides</strong> of the shape — every side must be included.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Make sure all sides are in the same unit</strong> before adding — you cannot add cm and m together without converting first.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Write the answer with the correct unit</strong> (cm, m, mm, etc.).</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Colour-coded sides of a rectangle</div>
  <div style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">Each side of a rectangle is shown in a different colour so you can see which sides you are adding:</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Top</span>
      <span style="color:#1e3a8a;font-size:15px;">length — one of the two longer sides</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Right</span>
      <span style="color:#14532d;font-size:15px;">width — one of the two shorter sides</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Bottom</span>
      <span style="color:#7c2d12;font-size:15px;">length — same as the top side</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Left</span>
      <span style="color:#4c1d95;font-size:15px;">width — same as the right side</span>
    </div>
    <div style="margin-top:4px;font-size:15px;color:#1e3a8a;">
      <strong>Perimeter</strong> = <span style="color:#1e40af;font-weight:700;">top</span> + <span style="color:#16a34a;font-weight:700;">right</span> + <span style="color:#ea580c;font-weight:700;">bottom</span> + <span style="color:#7c3aed;font-weight:700;">left</span> = <strong style="color:#dc2626;">total</strong>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Find the perimeter of a rectangle with length 8 cm and width 5 cm.',
          steps: [
            'A rectangle has <span style="color:#1e40af;font-weight:700;">2 lengths</span> and <span style="color:#16a34a;font-weight:700;">2 widths</span>.',
            'Perimeter = <span style="color:#1e40af;font-weight:700;">8</span> + <span style="color:#16a34a;font-weight:700;">5</span> + <span style="color:#ea580c;font-weight:700;">8</span> + <span style="color:#7c3aed;font-weight:700;">5</span>.',
            'Perimeter = <strong style="color:#dc2626;">26 cm</strong>.',
          ],
          answer: 'The perimeter is 26 cm.',
        },
        {
          question: 'Find the perimeter of a triangle with sides 6 cm, 4 cm and 5 cm.',
          steps: [
            'Add all <strong>three sides</strong> together.',
            'Perimeter = <span style="color:#1e40af;font-weight:700;">6</span> + <span style="color:#16a34a;font-weight:700;">4</span> + <span style="color:#ea580c;font-weight:700;">5</span> = <strong style="color:#dc2626;">15 cm</strong>.',
          ],
          answer: 'The perimeter is 15 cm.',
        },
        {
          question: 'A square has a perimeter of 24 cm. What is the length of each side?',
          steps: [
            'A square has <strong>4 equal sides</strong>, so all sides are the same length.',
            'Divide the perimeter by 4: <strong style="color:#dc2626;">24</strong> ÷ <strong>4</strong> = <strong style="color:#dc2626;">6 cm</strong>.',
          ],
          answer: 'Each side is 6 cm long.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'A rectangle with sides labelled 8cm and 5cm with each side highlighted in a different colour and the perimeter calculation shown below',
      videoPlaceholder:
        'Short video showing how to calculate the perimeter of rectangles triangles and squares by adding all the sides',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — WHAT IS AREA?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-area',
      title: 'What is Area?',
      icon: '⬛',
      explanation: `
<p style="margin-bottom:14px;"><strong>Area</strong> is the <strong>amount of flat surface a shape covers</strong>. We measure area by counting how many equal-sized squares fit inside the shape. The answer is written in <strong style="color:#dc2626;">square units</strong> such as cm² or m².</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Real-life examples</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🏠</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>The size of a floor that needs tiles</strong> — the area tells you how many tiles you need to cover the whole floor.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">📚</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>The amount of paper needed to cover a book</strong> — the area of the cover tells you how much paper to cut.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🌱</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>The size of a garden that needs grass</strong> — the area tells you how much grass seed or turf to buy.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to calculate area by counting square units</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Draw or imagine a <strong style="color:#1e40af;">grid of squares</strong> over the shape.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count how many <span style="color:#16a34a;">square units</span></strong> fit inside the shape — include both full and half squares.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Each <strong style="color:#16a34a;">square</strong> counts as <strong>one square unit</strong>. Two halves make one full unit.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Write the answer with the correct unit — <strong style="color:#dc2626;">cm²</strong> if each square is 1 cm, <strong style="color:#dc2626;">m²</strong> if each square is 1 m.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Perimeter vs Area — what is the difference?</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Perimeter</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong>distance around the outside</strong> of a shape — like the length of a fence around a garden.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Area</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong>space inside</strong> the shape — like the grass growing inside the fence.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A rectangle on a grid is 4 squares long and 3 squares wide. What is its area?',
          steps: [
            'The rectangle has <strong style="color:#1e40af;">4 rows</strong> of <strong style="color:#16a34a;">3 squares</strong> each.',
            'Count or multiply: <strong style="color:#1e40af;">4</strong> × <strong style="color:#16a34a;">3</strong> = <strong style="color:#dc2626;">12 squares</strong>.',
          ],
          answer: 'Area = 12 square units, or 12 cm² if each square is 1 cm.',
        },
        {
          question:
            'An irregular shape on a grid covers 7 full squares and 4 half squares. What is its area?',
          steps: [
            'Count the <strong style="color:#1e40af;">full squares</strong>: <strong>7</strong>.',
            'Count the <strong style="color:#16a34a;">half squares</strong>: 4 halves = <strong>2 full squares</strong>.',
            'Add together: <strong style="color:#1e40af;">7</strong> + <strong style="color:#16a34a;">2</strong> = <strong style="color:#dc2626;">9 square units</strong>.',
          ],
          answer: 'Area = 9 square units.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'A 4 by 3 rectangle on a grid with all 12 squares shaded in blue and numbered to show how counting gives the area',
      videoPlaceholder:
        'Short video showing how to calculate area by counting square units on a grid for both regular and irregular shapes',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING PERIMETER AND AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-perimeter-area',
      title: 'Comparing Perimeter and Area',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Two shapes can look very different but still share the same <strong style="color:#dc2626;">perimeter</strong> — or the same <strong style="color:#1e40af;">area</strong>. Understanding this difference is an important skill in Grade 4 maths.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Two key ideas to remember</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Same perimeter</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Two shapes with the <strong style="color:#dc2626;">same perimeter</strong> can have <strong>different areas</strong>. The way the shape is arranged changes how much space is inside.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Same area</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Two shapes with the <strong style="color:#1e40af;">same area</strong> can have <strong>different perimeters</strong>. A longer, thinner shape has a bigger perimeter than a more compact shape of the same area.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Compare a 4 × 2 rectangle and a 3 × 3 square. What do you notice about their perimeters and areas?',
          steps: [
            '<strong>Rectangle:</strong> Perimeter = <span style="color:#dc2626;font-weight:700;">4 + 2 + 4 + 2 = 12 cm</span>. &nbsp; Area = <span style="color:#1e40af;font-weight:700;">4 × 2 = 8 cm²</span>.',
            '<strong>Square:</strong> Perimeter = <span style="color:#dc2626;font-weight:700;">3 + 3 + 3 + 3 = 12 cm</span>. &nbsp; Area = <span style="color:#1e40af;font-weight:700;">3 × 3 = 9 cm²</span>.',
            'Both shapes have the <strong style="color:#dc2626;">same perimeter (12 cm)</strong> but the square has a <strong style="color:#1e40af;">larger area (9 cm²)</strong> than the rectangle (8 cm²).',
          ],
          answer: 'Both shapes have the same perimeter of 12 cm but different areas. The square has a larger area.',
        },
        {
          question:
            'Two shapes both have an area of 12 cm². Shape A is a 4 × 3 rectangle and Shape B is a 6 × 2 rectangle. Compare their perimeters.',
          steps: [
            '<strong>Shape A:</strong> Perimeter = <span style="color:#dc2626;font-weight:700;">4 + 3 + 4 + 3 = 14 cm</span>. &nbsp; Area = <span style="color:#1e40af;font-weight:700;">4 × 3 = 12 cm²</span>.',
            '<strong>Shape B:</strong> Perimeter = <span style="color:#dc2626;font-weight:700;">6 + 2 + 6 + 2 = 16 cm</span>. &nbsp; Area = <span style="color:#1e40af;font-weight:700;">6 × 2 = 12 cm²</span>.',
            'Both shapes have the <strong style="color:#1e40af;">same area (12 cm²)</strong> but Shape B has a <strong style="color:#dc2626;">larger perimeter (16 cm)</strong> than Shape A (14 cm).',
          ],
          answer: 'Both shapes have the same area but different perimeters.',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Short video comparing two shapes with the same perimeter but different areas and two shapes with the same area but different perimeters',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PERIMETER AND AREA WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-area-word-problems',
      title: 'Perimeter and Area Word Problems',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Word problems about perimeter and area require you to first identify <strong>which measurement is needed</strong>. Look for key words in the question — they tell you whether to find the distance around the outside or the space inside.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key words to look for</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Perimeter</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Fencing</strong>, <strong style="color:#ea580c;">border</strong>, <strong style="color:#ea580c;">frame</strong>, <strong style="color:#ea580c;">distance around</strong> — these all mean you need the total length around the outside of the shape.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Area</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Tiles</strong>, <strong style="color:#ea580c;">carpet</strong>, <strong style="color:#ea580c;">grass</strong>, <strong style="color:#ea580c;">covering</strong>, <strong style="color:#ea580c;">painting</strong> — these all mean you need the amount of surface inside the shape.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A garden is 8 m long and 5 m wide. How much fencing is needed to go around the entire garden?',
          steps: [
            'Key word: <strong style="color:#ea580c;">fencing around</strong> — this means we need the <strong style="color:#dc2626;">perimeter</strong>.',
            'Perimeter = <strong>8 + 5 + 8 + 5</strong> = <strong style="color:#dc2626;">26 m</strong>.',
          ],
          answer: '26 m of fencing is needed.',
        },
        {
          question:
            'A classroom floor is 10 m long and 6 m wide. How many square metre tiles are needed to cover the floor?',
          steps: [
            'Key word: <strong style="color:#ea580c;">tiles to cover</strong> — this means we need the <strong style="color:#1e40af;">area</strong>.',
            'Area = <strong>10 × 6</strong> = <strong style="color:#1e40af;">60 m²</strong>.',
          ],
          answer: '60 square metre tiles are needed.',
        },
        {
          question:
            'A square garden has sides of 7 m. What is the perimeter and what is the area?',
          steps: [
            '<strong style="color:#dc2626;">Perimeter</strong>: 7 + 7 + 7 + 7 = <strong style="color:#dc2626;">28 m</strong>.',
            '<strong style="color:#1e40af;">Area</strong>: 7 × 7 = <strong style="color:#1e40af;">49 m²</strong>.',
          ],
          answer: 'Perimeter = 28 m. Area = 49 m².',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to identify whether a word problem requires perimeter or area and solve it step by step',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block A: Finding Perimeter (positions 0-3, Easy) ──
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 12 cm and width 6 cm.', checkMode: 'auto', options: ['36 cm', '72 cm', '18 cm', '30 cm'], correctIndex: 0, explanation: 'Perimeter = 12 + 6 + 12 + 6 = 36 cm. (72 cm confuses perimeter with area, 12 × 6. 18 cm only adds one length and one width instead of two of each. 30 cm is missing the second width.)' },
        { difficulty: 'Easy', question: 'An irregular pentagon has sides of 3 cm, 4 cm, 5 cm, 6 cm and 7 cm, as shown below. Find its perimeter.', checkMode: 'auto', options: ['18 cm', '25 cm', '21 cm', '32 cm'], correctIndex: 1, explanation: 'Add all five sides: 3 + 4 + 5 + 6 + 7 = 25 cm. (18 cm forgets the 7 cm side. 21 cm forgets the 4 cm side. 32 cm counts one side twice.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 140,30 165,90 110,140 40,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3 cm</text><text x="158" y="55" font-size="13" font-weight="700" fill="#2563eb">4 cm</text><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">5 cm</text><text x="75" y="128" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="30" y="62" font-size="13" font-weight="700" fill="#2563eb" text-anchor="end">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular sheet of card is 250 mm long and 12 cm wide. Convert the length to cm, then find the perimeter of the card in cm.', checkMode: 'auto', options: ['524 cm', '29 cm', '74 cm', '37 cm'], correctIndex: 2, explanation: 'Convert 250 mm to cm first: 250 ÷ 10 = 25 cm. Perimeter = 25 + 12 + 25 + 12 = 74 cm. (524 cm forgets to convert and uses 250 directly. 29 cm wrongly divides by 100 instead of 10. 37 cm only adds one length and one width.)' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 46 cm. Its width is 9 cm. Find its length.', checkMode: 'auto', options: ['37 cm', '32 cm', '23 cm', '14 cm'], correctIndex: 3, explanation: 'Perimeter = 2 × (length + width), so 46 = 2 × (length + 9). Divide by 2: 23 = length + 9. Length = 23 − 9 = 14 cm. (37 cm forgets to halve the perimeter first. 32 cm adds instead of subtracts. 23 cm stops after halving and forgets to subtract the width.)' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 9 squares long and 3 squares wide. Find its area.', checkMode: 'auto', options: ['27 square units', '24 square units', '30 square units', '18 square units'], correctIndex: 0, explanation: 'Count or multiply: 9 × 3 = 27 square units. (24 square units adds the sides like a perimeter instead of multiplying. 30 square units and 18 square units come from miscounting the rows or columns by one.)' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', checkMode: 'auto', options: ['8 square units', '10 square units', '12 square units', '9 square units'], correctIndex: 1, explanation: 'There are 8 full squares shaded blue and 4 half squares shaded yellow. 4 half squares = 2 full squares. Total = 8 + 2 = 10 square units. (8 counts only the full squares and ignores the halves. 12 wrongly counts every half square as a whole square. 9 halves the 4 half squares incorrectly.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, if each square represents 1 m², how many more full squares would need to be shaded to turn this shape into a complete 3-square by 4-square rectangle?', checkMode: 'auto', options: ['12 more squares', '4 more squares', '0 more squares', '8 more squares'], correctIndex: 2, explanation: 'A 3 by 4 rectangle covers 12 full squares. This shape already has 8 full squares plus 4 half squares. Completing the 4 half squares adds 4 more full squares (8+4=12), which is exactly the 12 needed — so 0 additional full squares are needed beyond completing the halves. (12 confuses the target total with the number still needed. 4 is just the count of half squares. 8 is the current full-square count.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 36 square units. It is 9 squares long. How many squares wide is it?', checkMode: 'auto', options: ['36 squares', '13 squares', '5 squares', '4 squares'], correctIndex: 3, explanation: 'Width = area ÷ length = 36 ÷ 9 = 4 squares. (36 squares just uses the area itself. 13 squares adds length and width like a perimeter instead of dividing. 5 squares is an off-by-one slip in the division.)' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 40 cm. Its length is 12 cm. Find its width.', checkMode: 'auto', options: ['8 cm', '28 cm', '12 cm', '32 cm'], correctIndex: 0, explanation: 'Perimeter = 2 × (length + width), so 40 = 2 × (12 + width). Divide by 2: 20 = 12 + width. Width = 20 − 12 = 8 cm. (28 cm forgets to halve the perimeter first. 12 cm wrongly assumes the shape is a square. 32 cm adds instead of subtracts.)' },
        { difficulty: 'Medium', question: 'A square has a perimeter of 48 cm. Find the length of each side.', checkMode: 'auto', options: ['24 cm', '12 cm', '192 cm', '48 cm'], correctIndex: 1, explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 48 ÷ 4 = 12 cm. (24 cm divides by 2 instead of 4. 192 cm multiplies instead of dividing. 48 cm just repeats the perimeter.)' },
        { difficulty: 'Medium', question: 'A triangle has a perimeter of 22 cm. Two of its sides are 8 cm and 6 cm. Find the length of the third side.', checkMode: 'auto', options: ['14 cm', '6 cm', '8 cm', '36 cm'], correctIndex: 2, explanation: 'Third side = perimeter − (sum of known sides) = 22 − (8 + 6) = 22 − 14 = 8 cm. (14 cm forgets to subtract from the perimeter and just adds the two known sides. 6 cm misreads one of the given sides. 36 cm wrongly adds all three numbers together.)' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Kagiso says: "To find the perimeter of a 9 cm by 4 cm rectangle, I multiply 9 × 4 to get 36 cm." Which statement correctly evaluates his answer?', checkMode: 'auto', options: ['He is correct — multiplying the length and width always gives the perimeter.', 'He is incorrect — the correct perimeter is 9 + 4 = 13 cm.', 'He is correct, but the units should be cm² instead of cm.', 'He is incorrect — he found the area (36 cm²) instead of the perimeter; the correct perimeter is 9 + 4 + 9 + 4 = 26 cm.'], correctIndex: 3, explanation: 'Perimeter means adding all four sides: 9 + 4 + 9 + 4 = 26 cm. Kagiso confused the multiplication rule for area with the addition rule for perimeter, so 9 × 4 = 36 cm² is the area, not the perimeter.' },
        { difficulty: 'Medium', question: 'A 5 × 2 rectangle and a 4 × 3 rectangle — which has the bigger area?', checkMode: 'auto', options: ['The 4 × 3 rectangle, with an area of 12 cm² compared to 10 cm² for the 5 × 2 rectangle.', 'The 5 × 2 rectangle, with an area of 14 cm² compared to 10 cm² for the 4 × 3 rectangle.', 'Both rectangles have the same area of 12 cm².', 'The 5 × 2 rectangle, with an area of 10 cm² compared to 7 cm² for the 4 × 3 rectangle.'], correctIndex: 0, explanation: 'Area of 5 × 2 = 10 cm². Area of 4 × 3 = 12 cm². The 4 × 3 rectangle has the bigger area. (The other options either miscalculate one of the two areas or wrongly claim the areas are equal.)' },
        { difficulty: 'Medium', question: 'A square with sides of 6 cm and a rectangle 9 cm by 4 cm both have the same area. What is that area?', checkMode: 'auto', options: ['24 cm²', '36 cm²', '54 cm²', '13 cm²'], correctIndex: 1, explanation: 'Square area = 6 × 6 = 36 cm². Rectangle area = 9 × 4 = 36 cm². Both shapes have an area of 36 cm². (24 cm² confuses this with a perimeter-style calculation of 6 × 4. 54 cm² multiplies 9 × 6 by mixing up the numbers. 13 cm² adds 9 + 4 instead of multiplying.)' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'A garden is 10 m long and 6 m wide. How much fencing is needed to go around the entire garden?', checkMode: 'auto', options: ['60 m', '16 m', '32 m', '36 m'], correctIndex: 2, explanation: 'Key word "fencing around" means perimeter. Perimeter = 10 + 6 + 10 + 6 = 32 m of fencing. (60 m confuses this with the area, 10 × 6. 16 m only adds one length and one width. 36 m is an arithmetic slip in the addition.)' },
        { difficulty: 'Medium', question: 'A room measuring 7 m by 4 m needs new carpet. Carpet costs R120 per square metre. First decide whether you need perimeter or area, then find the total cost.', checkMode: 'auto', options: ['R2 640', 'R148', 'R336', 'R3 360'], correctIndex: 3, explanation: 'Carpeting a floor needs area, not perimeter. Area = 7 × 4 = 28 m². Cost = 28 × R120 = R3 360. (R2 640 wrongly uses the perimeter, 22 m, instead of the area. R148 adds the area and price instead of multiplying. R336 has the correct working but drops a zero.)' },
        { difficulty: 'Medium', question: 'Before a school sports day, the running track needs a painted line marking the outside edge of the rectangular field, which is 45 m long and 20 m wide. How many metres of line paint are needed?', checkMode: 'auto', options: ['130 m', '900 m', '65 m', '125 m'], correctIndex: 0, explanation: 'A line marking the outside edge of the field is the perimeter. Perimeter = 45 + 20 + 45 + 20 = 130 m. (900 m confuses this with the area, 45 × 20. 65 m only adds one length and one width. 125 m is an arithmetic slip in the addition.)' },
        { difficulty: 'Hard', question: 'A square garden has sides of 9 m. Fencing costs R30 per metre. What is the total cost of fencing the garden?', checkMode: 'auto', options: ['R2 430', 'R1 080', 'R270', 'R360'], correctIndex: 1, explanation: 'Perimeter = 9 × 4 = 36 m. Cost = 36 × R30 = R1 080. (R2 430 wrongly uses the area, 81 m², instead of the perimeter. R270 forgets to multiply the side by 4 before costing the fence. R360 miscalculates the price multiplication.)' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows an L-shaped garden made up of a rectangle 8 m by 5 m and a smaller rectangle 4 m by 3 m sitting on top of it. Find the total area of the garden.', checkMode: 'auto', options: ['40 m²', '12 m²', '52 m²', '28 m²'], correctIndex: 2, explanation: 'Area of large rectangle = 8 × 5 = 40 m². Area of small rectangle = 4 × 3 = 12 m². Total area = 40 + 12 = 52 m². (40 m² only counts the large rectangle. 12 m² only counts the small rectangle. 28 m² wrongly subtracts the small rectangle instead of adding it.)', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,60 86,60 86,18 142,18 142,130 30,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="120" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="132" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="86" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">8 m</text><text x="18" y="98" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">5 m</text><text x="114" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4 m</text><text x="152" y="42" font-size="13" font-weight="700" fill="#2563eb">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'Two rectangles both have an area of 36 m²: Rectangle A is 4 m by 9 m and Rectangle B is 6 m by 6 m. Which statement is correct?', checkMode: 'auto', options: ['Rectangle A has the smaller perimeter (24 m) and Rectangle B has the larger perimeter (26 m).', 'Both rectangles have the same perimeter of 26 m since they have the same area.', 'It is impossible for two rectangles to have the same area but different perimeters.', 'Rectangle A has a perimeter of 26 m and Rectangle B has a smaller perimeter of 24 m — two shapes can share the same area but have different perimeters.'], correctIndex: 3, explanation: 'Rectangle A: perimeter = 4+9+4+9 = 26 m, area = 4×9 = 36 m². Rectangle B: perimeter = 6+6+6+6 = 24 m, area = 6×6 = 36 m². Both have the same area but Rectangle B has the smaller perimeter, proving equal area does not mean equal perimeter.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have fully mastered perimeter and area.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block A: Finding Perimeter (positions 0-3, Easy) ──
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 15 cm.', checkMode: 'auto', options: ['60 cm', '225 cm', '30 cm', '45 cm'], correctIndex: 0, explanation: 'Perimeter = 15 + 15 + 15 + 15 = 60 cm. (225 cm confuses this with the area, 15 × 15. 30 cm only adds two sides instead of four. 45 cm is an arithmetic slip, only counting three sides.)' },
        { difficulty: 'Easy', question: 'A regular hexagon has 6 equal sides of 6 cm each. Find its perimeter.', checkMode: 'auto', options: ['12 cm', '36 cm', '30 cm', '42 cm'], correctIndex: 1, explanation: 'A regular hexagon has 6 equal sides. Perimeter = 6 × 6 = 36 cm. (12 cm adds two sides instead of multiplying by all 6. 30 cm treats it as a pentagon with only 5 sides. 42 cm treats it as having 7 sides.)' },
        { difficulty: 'Medium', question: 'One side of a triangle is given as 40 mm, another is 6 cm, and the third is 5 cm. Convert all sides to cm and find the perimeter.', checkMode: 'auto', options: ['51 cm', '16 cm', '15 cm', '11 cm'], correctIndex: 2, explanation: 'Convert 40 mm to cm: 40 ÷ 10 = 4 cm. Perimeter = 4 + 6 + 5 = 15 cm. (51 cm forgets to convert and uses 40 directly. 16 cm is an arithmetic slip in the addition. 11 cm wrongly divides by 100 instead of 10.)' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 54 cm. Its width is 9 cm. Find its length.', checkMode: 'auto', options: ['45 cm', '9 cm', '36 cm', '18 cm'], correctIndex: 3, explanation: 'Perimeter = 2 × (length + width), so 54 = 2 × (length + 9). Divide by 2: 27 = length + 9. Length = 27 − 9 = 18 cm. (45 cm forgets to halve the perimeter first. 9 cm wrongly assumes length equals width. 36 cm adds instead of subtracts.)' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 8 squares long and 5 squares wide. Find its area.', checkMode: 'auto', options: ['40 square units', '26 square units', '48 square units', '35 square units'], correctIndex: 0, explanation: 'Count or multiply: 8 × 5 = 40 square units. (26 square units adds the sides like a perimeter instead of multiplying. 48 square units and 35 square units come from miscounting the rows or columns by one.)' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', checkMode: 'auto', options: ['9 square units', '12 square units', '15 square units', '11 square units'], correctIndex: 1, explanation: 'There are 9 full squares shaded blue and 6 half squares shaded yellow. 6 half squares = 3 full squares. Total = 9 + 3 = 12 square units. (9 counts only the full squares and ignores the halves. 15 wrongly counts every half square as a whole square. 11 halves the 6 half squares incorrectly.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, how many square units would be added if just the 6 half squares were each completed into full squares (without changing any other part of the shape)?', checkMode: 'auto', options: ['6 square units', '12 square units', '3 square units', '9 square units'], correctIndex: 2, explanation: 'Each half square needs another half added to become a full square. Completing 6 half squares adds 6 halves = 3 full square units to the total. (6 square units just repeats the number of half squares without halving. 12 square units confuses this with the new grand total. 9 square units repeats the current full-square count.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 48 square units. It is 6 squares wide. How many squares long is it?', checkMode: 'auto', options: ['48 squares', '54 squares', '6 squares', '8 squares'], correctIndex: 3, explanation: 'Length = area ÷ width = 48 ÷ 6 = 8 squares. (48 squares just uses the area itself. 54 squares wrongly adds the area and width instead of dividing. 6 squares repeats the given width instead of finding the length.)' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A square has a perimeter of 36 cm. Find the length of each side.', checkMode: 'auto', options: ['9 cm', '18 cm', '144 cm', '36 cm'], correctIndex: 0, explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 36 ÷ 4 = 9 cm. (18 cm divides by 2 instead of 4. 144 cm multiplies instead of dividing. 36 cm just repeats the perimeter.)' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 50 cm. Its length is 14 cm. Find its width.', checkMode: 'auto', options: ['36 cm', '11 cm', '14 cm', '39 cm'], correctIndex: 1, explanation: 'Perimeter = 2 × (length + width), so 50 = 2 × (14 + width). Divide by 2: 25 = 14 + width. Width = 25 − 14 = 11 cm. (36 cm forgets to halve the perimeter first. 14 cm wrongly assumes width equals length. 39 cm adds instead of subtracts.)' },
        { difficulty: 'Medium', question: 'An isosceles triangle has a perimeter of 29 cm. Its two equal sides are each 11 cm. Find the length of the base.', checkMode: 'auto', options: ['18 cm', '8 cm', '7 cm', '51 cm'], correctIndex: 2, explanation: 'Base = perimeter − (sum of the two equal sides) = 29 − (11 + 11) = 29 − 22 = 7 cm. (18 cm only subtracts one of the two equal sides. 8 cm is an off-by-one arithmetic slip. 51 cm wrongly adds all three numbers together.)' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Thandeka says: "An isosceles triangle with sides 7 cm, 7 cm and 4 cm has a perimeter of 4 × 3 = 12 cm because there are 3 sides." Which statement correctly evaluates her reasoning?', checkMode: 'auto', options: ['She is correct — multiplying the number of sides by any one side always gives the perimeter.', 'She is incorrect — the sides are not all equal, so you cannot multiply; the correct perimeter is 7 + 7 + 4 = 18 cm.', 'She is correct, but should have used 7 × 3 = 21 cm instead.', 'She is incorrect — the triangle is not isosceles at all, so no calculation is possible.'], correctIndex: 1, explanation: 'Only two of the three sides are equal in an isosceles triangle (7 cm and 7 cm), while the base (4 cm) is different, so you cannot just multiply. The correct method is to add all three sides: 7 + 7 + 4 = 18 cm.' },
        { difficulty: 'Medium', question: 'A rectangle is 3 cm by 8 cm and a square has sides of 5 cm. Which shape has the bigger perimeter?', checkMode: 'auto', options: ['The rectangle, with a perimeter of 22 cm compared to 20 cm for the square.', 'The square, with a perimeter of 24 cm compared to 22 cm for the rectangle.', 'Both shapes have the same perimeter of 22 cm.', 'The rectangle, with a perimeter of 24 cm compared to 20 cm for the square.'], correctIndex: 0, explanation: 'Rectangle perimeter = 3 + 8 + 3 + 8 = 22 cm. Square perimeter = 5 × 4 = 20 cm. The rectangle has the bigger perimeter. (The other options either miscalculate one of the two perimeters or wrongly claim they are equal.)' },
        { difficulty: 'Hard', question: 'Shape A is 8 cm by 3 cm and Shape B is 6 cm by 4 cm. Both have the same area. Which shape has the smaller perimeter?', checkMode: 'auto', options: ['Shape A, with a perimeter of 20 cm compared to 22 cm for Shape B.', 'Shape B, with a perimeter of 20 cm compared to 22 cm for Shape A.', 'Both shapes have the same perimeter since they have the same area.', 'Shape A, with a perimeter of 18 cm compared to 24 cm for Shape B.'], correctIndex: 1, explanation: 'Area of A = 8 × 3 = 24 cm². Area of B = 6 × 4 = 24 cm² (same area). Perimeter of A = 8+3+8+3 = 22 cm. Perimeter of B = 6+4+6+4 = 20 cm. Shape B has the smaller perimeter, even though the areas are equal.' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'A wall is 6 m long and 3 m high and needs a fresh coat of paint. Decide whether you need perimeter or area, then work out how much wall surface must be painted.', checkMode: 'auto', options: ['18 m', '9 m²', '18 m²', '24 m²'], correctIndex: 2, explanation: 'Painting a wall covers surface, so you need area, not perimeter. Area = 6 × 3 = 18 m². (18 m is the perimeter — the number matches by coincidence, but the wrong measurement and unit. 9 m² wrongly halves the area as if using a triangle formula. 24 m² multiplies 6 × 4 instead of 6 × 3.)' },
        { difficulty: 'Medium', question: 'A picture frame border is a rectangle 30 cm by 20 cm. Find the length of the border.', checkMode: 'auto', options: ['600 cm', '50 cm', '90 cm', '100 cm'], correctIndex: 3, explanation: 'A border runs around the outside, so this is perimeter. Perimeter = 30 + 20 + 30 + 20 = 100 cm. (600 cm confuses this with the area, 30 × 20. 50 cm only adds one length and one width. 90 cm is an arithmetic slip in the addition.)' },
        { difficulty: 'Medium', question: 'A hockey court shaped like a rectangle is 45 m long and 20 m wide. How far would a player run if they jogged once around the outside edge of the court?', checkMode: 'auto', options: ['130 m', '900 m', '65 m', '120 m'], correctIndex: 0, explanation: 'Running around the outside edge means perimeter. Perimeter = 45 + 20 + 45 + 20 = 130 m. (900 m confuses this with the area, 45 × 20. 65 m only adds one length and one width. 120 m is an arithmetic slip in the addition.)' },
        { difficulty: 'Hard', question: 'A floor is 11 m long and 8 m wide. Tiles cost R50 per square metre. What is the total cost of tiling the floor?', checkMode: 'auto', options: ['R1 900', 'R4 400', 'R440', 'R138'], correctIndex: 1, explanation: 'Tiling a floor needs area. Area = 11 × 8 = 88 m². Cost = 88 × R50 = R4 400. (R1 900 wrongly uses the perimeter, 38 m, instead of the area. R440 has the correct working but drops a zero. R138 adds the area and price instead of multiplying.)' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows a rectangular swimming pool 8 m by 4 m surrounded by a paved path 1 m wide on all sides, making the total outer rectangle 10 m by 6 m. Find the area of the path only.', checkMode: 'auto', options: ['60 m²', '32 m²', '28 m²', '22 m²'], correctIndex: 2, explanation: 'Outer area = 10 × 6 = 60 m². Pool area = 8 × 4 = 32 m². Path area = 60 − 32 = 28 m². (60 m² forgets to subtract the pool. 32 m² only counts the pool. 22 m² is an arithmetic slip in the subtraction.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="140" height="84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2.5"/><rect x="44" y="44" width="112" height="56" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><text x="100" y="22" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="76" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="100" y="60" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">8 m</text><text x="180" y="76" font-size="12" font-weight="700" fill="#1e40af">4 m</text><text x="100" y="128" font-size="12" fill="#9a6f00" text-anchor="middle">shaded path, 1 m wide</text></svg>' },
        { difficulty: 'Hard', question: 'A square has an area of 36 cm² and a rectangle that is 12 cm by 3 cm also has an area of 36 cm². Which statement is correct?', checkMode: 'auto', options: ['The rectangle has the smaller perimeter (24 cm) and the square has the larger perimeter (30 cm).', 'Both shapes have the same perimeter since they have the same area.', 'It is impossible for two shapes with the same area to have different perimeters.', 'The square has the smaller perimeter (24 cm) and the rectangle has the larger perimeter (30 cm) — a square usually has a smaller perimeter than other rectangles with the same area.'], correctIndex: 3, explanation: 'The square (6 cm × 6 cm) has a perimeter of 24 cm (6+6+6+6=24), while the rectangle (12 cm × 3 cm) has a perimeter of 30 cm (12+3+12+3=30). A square usually has a smaller perimeter than other rectangles with the same area because its sides are as equal as possible.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have fully mastered perimeter and area.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block A: Finding Perimeter (positions 0-3, Easy) ──
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 18 cm and width 9 cm.', checkMode: 'auto', options: ['54 cm', '162 cm', '27 cm', '48 cm'], correctIndex: 0, explanation: 'Perimeter = 18 + 9 + 18 + 9 = 54 cm. (162 cm confuses this with the area, 18 × 9. 27 cm only adds one length and one width. 48 cm is an arithmetic slip in the addition.)' },
        { difficulty: 'Easy', question: 'A regular octagon has 8 equal sides of 5 cm each. Find its perimeter.', checkMode: 'auto', options: ['13 cm', '40 cm', '35 cm', '45 cm'], correctIndex: 1, explanation: 'A regular octagon has 8 equal sides. Perimeter = 5 × 8 = 40 cm. (13 cm adds two sides instead of multiplying by all 8. 35 cm treats it as having only 7 sides. 45 cm treats it as having 9 sides.)' },
        { difficulty: 'Medium', question: 'A triangular flag has one side of 90 mm, another of 8 cm, and a third of 7 cm. Convert all sides to cm and find the perimeter of the flag.', checkMode: 'auto', options: ['105 cm', '16 cm', '24 cm', '25 cm'], correctIndex: 2, explanation: 'Convert 90 mm to cm: 90 ÷ 10 = 9 cm. Perimeter = 9 + 8 + 7 = 24 cm. (105 cm forgets to convert and uses 90 directly. 16 cm wrongly divides by 100 instead of 10. 25 cm is an arithmetic slip in the addition.)' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 60 cm. Its width is 11 cm. Find its length.', checkMode: 'auto', options: ['49 cm', '11 cm', '41 cm', '19 cm'], correctIndex: 3, explanation: 'Perimeter = 2 × (length + width), so 60 = 2 × (length + 11). Divide by 2: 30 = length + 11. Length = 30 − 11 = 19 cm. (49 cm forgets to halve the perimeter first. 11 cm wrongly assumes length equals width. 41 cm adds instead of subtracts.)' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 10 squares long and 6 squares wide. Find its area.', checkMode: 'auto', options: ['60 square units', '32 square units', '70 square units', '54 square units'], correctIndex: 0, explanation: 'Count or multiply: 10 × 6 = 60 square units. (32 square units adds the sides like a perimeter instead of multiplying. 70 square units and 54 square units come from miscounting the rows or columns by one.)' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', checkMode: 'auto', options: ['11 square units', '13 square units', '15 square units', '12 square units'], correctIndex: 1, explanation: 'There are 11 full squares shaded blue and 4 half squares shaded yellow. 4 half squares = 2 full squares. Total = 11 + 2 = 13 square units. (11 counts only the full squares and ignores the halves. 15 wrongly counts every half square as a whole square. 12 halves the 4 half squares incorrectly.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, if each square represents 1 cm², what is the area of the shape in cm²?', checkMode: 'auto', options: ['11 cm²', '12 cm²', '13 cm²', '15 cm²'], correctIndex: 2, explanation: 'The shape covers 13 square units in total (11 full squares + 4 half squares = 11 + 2 = 13). Since each square is 1 cm², the area is 13 cm². (11 cm² counts only the full squares. 12 cm² halves the 4 half squares incorrectly. 15 cm² wrongly counts every half square as a whole square.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 45 square units. It is 9 squares wide. How many squares long is it?', checkMode: 'auto', options: ['45 squares', '54 squares', '9 squares', '5 squares'], correctIndex: 3, explanation: 'Length = area ÷ width = 45 ÷ 9 = 5 squares. (45 squares just uses the area itself. 54 squares wrongly adds the area and width instead of dividing. 9 squares repeats the given width instead of finding the length.)' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 44 cm. Its width is 8 cm. Find its length.', checkMode: 'auto', options: ['14 cm', '36 cm', '8 cm', '30 cm'], correctIndex: 0, explanation: 'Perimeter = 2 × (length + width), so 44 = 2 × (length + 8). Divide by 2: 22 = length + 8. Length = 22 − 8 = 14 cm. (36 cm forgets to halve the perimeter first. 8 cm wrongly assumes length equals width. 30 cm adds instead of subtracts.)' },
        { difficulty: 'Medium', question: 'A square has a perimeter of 52 cm. Find the length of each side.', checkMode: 'auto', options: ['26 cm', '13 cm', '208 cm', '52 cm'], correctIndex: 1, explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 52 ÷ 4 = 13 cm. (26 cm divides by 2 instead of 4. 208 cm multiplies instead of dividing. 52 cm just repeats the perimeter.)' },
        { difficulty: 'Medium', question: 'A triangle has a perimeter of 26 cm. Two of its sides are 10 cm and 9 cm. Find the length of the third side.', checkMode: 'auto', options: ['19 cm', '8 cm', '7 cm', '45 cm'], correctIndex: 2, explanation: 'Third side = perimeter − (sum of known sides) = 26 − (10 + 9) = 26 − 19 = 7 cm. (19 cm forgets to subtract from the perimeter and just adds the two known sides. 8 cm is an off-by-one arithmetic slip. 45 cm wrongly adds all three numbers together.)' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Sipho says: "A rectangle that is 10 cm long and 4 cm wide has a perimeter of 10 + 4 = 14 cm." Which statement correctly evaluates his working?', checkMode: 'auto', options: ['He is correct — adding the length and width always gives the perimeter.', 'He is incorrect — he only added one length and one width; a rectangle has two of each, so the correct perimeter is 10 + 4 + 10 + 4 = 28 cm.', 'He is correct, but should have written the units as cm² instead of cm.', 'He is incorrect — the correct perimeter is 10 × 4 = 40 cm.'], correctIndex: 1, explanation: 'A rectangle has two lengths and two widths, so each must be counted twice. The correct perimeter is 10 + 4 + 10 + 4 = 28 cm (or 2 × (10 + 4) = 28 cm).' },
        { difficulty: 'Medium', question: 'A rectangle is 15 cm by 4 cm and another rectangle is 12 cm by 5 cm. Both have the same area. Which has the bigger perimeter?', checkMode: 'auto', options: ['The 15 cm by 4 cm rectangle, with a perimeter of 38 cm compared to 34 cm for the other rectangle.', 'The 12 cm by 5 cm rectangle, with a perimeter of 38 cm compared to 34 cm for the other rectangle.', 'Both rectangles have the same perimeter since they have the same area.', 'The 15 cm by 4 cm rectangle, with a perimeter of 34 cm compared to 38 cm for the other rectangle.'], correctIndex: 0, explanation: 'Both have area 60 cm² (15×4 = 60 and 12×5 = 60). Perimeter of 15×4 = 15+4+15+4 = 38 cm. Perimeter of 12×5 = 12+5+12+5 = 34 cm. The 15 by 4 rectangle has the bigger perimeter, even though the areas are equal.' },
        { difficulty: 'Hard', question: 'Garden A is 15 m by 5 m and Garden B is 12 m by 8 m. Both gardens have the same perimeter. Which garden has the bigger area, and by how much?', checkMode: 'auto', options: ['Garden A has the bigger area, by 21 m². Garden A\'s area is 96 m² and Garden B\'s is 75 m².', 'Garden B has the bigger area, by 21 m². Garden B\'s area is 96 m² and Garden A\'s is 75 m².', 'Both gardens have the same area since they have the same perimeter.', 'Garden B has the bigger area, by 15 m². Garden B\'s area is 90 m² and Garden A\'s is 75 m².'], correctIndex: 1, explanation: 'Both have perimeter 40 m (15+5+15+5=40 and 12+8+12+8=40). Area A = 15 × 5 = 75 m². Area B = 12 × 8 = 96 m². Garden B has the bigger area, by 96 − 75 = 21 m².' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'How many square metre tiles are needed to cover a classroom floor that measures 8 m long and 5 m wide? Decide first whether the question needs perimeter or area.', checkMode: 'auto', options: ['26 m', '20 m²', '40 m²', '45 m²'], correctIndex: 2, explanation: 'Covering a floor with tiles needs area, not perimeter. Area = 8 × 5 = 40 m². (26 m confuses this with the perimeter, 8+5+8+5. 20 m² wrongly halves the area as if using a triangle formula. 45 m² is an arithmetic slip in the multiplication.)' },
        { difficulty: 'Medium', question: 'A square plot of land has sides of 14 m. How much fencing is needed to enclose it?', checkMode: 'auto', options: ['196 m', '28 m', '60 m', '56 m'], correctIndex: 3, explanation: 'Enclosing land with fencing needs perimeter. Perimeter = 14 × 4 = 56 m. (196 m confuses this with the area, 14 × 14. 28 m divides by 2 instead of multiplying by 4. 60 m is an arithmetic slip in the multiplication.)' },
        { difficulty: 'Medium', question: 'A running track shaped like a rectangle has a straight section 50 m long and 30 m wide. Amahle jogs around the outside of the track twice. How far does she jog in total?', checkMode: 'auto', options: ['320 m', '160 m', '1500 m', '300 m'], correctIndex: 0, explanation: 'Jogging around the outside is perimeter. Perimeter = 50 + 30 + 50 + 30 = 160 m. Jogging around twice = 160 × 2 = 320 m. (160 m forgets to double for jogging around twice. 1500 m confuses this with the area, 50 × 30. 300 m is an arithmetic slip when doubling.)' },
        { difficulty: 'Hard', question: 'A hall measuring 24 m by 15 m needs its floor painted. Painting costs R45 per square metre. What is the total cost of painting the floor?', checkMode: 'auto', options: ['R3 510', 'R16 200', 'R1 620', 'R405'], correctIndex: 1, explanation: 'Painting a floor needs area. Area = 24 × 15 = 360 m². Cost = 360 × R45 = R16 200. (R3 510 wrongly uses the perimeter, 78 m, instead of the area. R1 620 has the correct working but drops a zero. R405 adds the area and price instead of multiplying.)' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows an L-shaped room made up of a rectangle 10 m by 6 m and a smaller rectangle 5 m by 4 m sitting on top of it. Find the total area of the room.', checkMode: 'auto', options: ['60 m²', '20 m²', '80 m²', '40 m²'], correctIndex: 2, explanation: 'Area of large rectangle = 10 × 6 = 60 m². Area of small rectangle = 5 × 4 = 20 m². Total area = 60 + 20 = 80 m². (60 m² only counts the large rectangle. 20 m² only counts the small rectangle. 40 m² wrongly subtracts the small rectangle instead of adding it.)', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,66 90,66 90,18 150,18 150,138 30,138" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="128" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="140" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="154" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="106" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="120" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5 m</text><text x="160" y="46" font-size="13" font-weight="700" fill="#2563eb">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'Two shapes both have an area of 24 cm²: Shape A is 6 cm by 4 cm and Shape B is 8 cm by 3 cm. Which statement correctly explains why their perimeters are different even though the areas are the same?', checkMode: 'auto', options: ['Their perimeters must be equal because the areas are equal.', 'Shape A has a perimeter of 20 cm and Shape B has a perimeter of 22 cm — the perimeter depends on how the sides are arranged, not just on the area enclosed.', 'Shape B has a smaller perimeter than Shape A because it has a smaller width.', 'The perimeters cannot be compared unless the shapes are the same type.'], correctIndex: 1, explanation: 'Shape A: perimeter = 6+4+6+4 = 20 cm. Shape B: perimeter = 8+3+8+3 = 22 cm. Both have area 24 cm², but rearranging the same area into a longer, thinner shape increases the perimeter — the perimeter depends on the shape\'s outline, not just how much space is enclosed.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect score! You have fully mastered perimeter and area.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
