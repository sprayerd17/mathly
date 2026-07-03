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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to identify whether a word problem requires perimeter or area and solve it step by step',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — What is Perimeter ─────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Find the perimeter of a rectangle with length 6 cm and width 4 cm.',
      checkMode: 'auto',
      answer: '20 cm',
      correctAnswer: '20cm',
      correctAnswers: ['20cm', '20', '20 cm'],
      explanation: 'A rectangle has 2 lengths and 2 widths. Perimeter = 6 + 4 + 6 + 4 = 20 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'Find the perimeter of each shape.',
      checkMode: 'auto',
      answer: 'a) 28 cm   b) 19 cm   c) 30 cm',
      parts: [
        {
          label: 'a) A square with sides of 7 cm',
          correctAnswer: '28cm',
          correctAnswers: ['28cm', '28', '28 cm'],
          explanation: 'A square has 4 equal sides. Perimeter = 7 + 7 + 7 + 7 = 28 cm.',
        },
        {
          label: 'b) A triangle with sides 5 cm, 8 cm and 6 cm',
          correctAnswer: '19cm',
          correctAnswers: ['19cm', '19', '19 cm'],
          explanation: 'Add all three sides: 5 + 8 + 6 = 19 cm.',
        },
        {
          label: 'c) A rectangle with length 12 cm and width 3 cm',
          correctAnswer: '30cm',
          correctAnswers: ['30cm', '30', '30 cm'],
          explanation: 'Perimeter = 12 + 3 + 12 + 3 = 30 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A rectangular garden has a perimeter of 36 m. The length is 11 m.',
      checkMode: 'auto',
      answer: 'a) 7 m   b) R1 620',
      parts: [
        {
          label: 'a) What is the width of the garden?',
          correctAnswer: '7m',
          correctAnswers: ['7m', '7', '7 m'],
          explanation: 'Perimeter = 2 × (length + width). So 36 = 2 × (11 + width). Divide both sides by 2: 18 = 11 + width. Width = 18 − 11 = 7 m.',
        },
        {
          label: 'b) Fencing costs R45 per metre. How much does it cost to fence the entire garden?',
          correctAnswer: 'R1620',
          correctAnswers: ['R1620', '1620', 'R1 620', 'r1620'],
          explanation: 'Cost = perimeter × price per metre = 36 × R45 = R1 620.',
        },
      ],
    },

    // ── SECTION 2 — What is Area ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A rectangle on a grid is 5 squares long and 3 squares wide. What is its area?',
      checkMode: 'auto',
      answer: '15 square units',
      correctAnswer: '15',
      correctAnswers: ['15', '15squareunits', '15 square units', '15cm²', '15cm2', '15 cm²', '15 cm2'],
      explanation: 'Count or multiply: 5 × 3 = 15. The area is 15 square units.',
    },

    {
      difficulty: 'Medium',
      question: 'Calculate the area of each shape.',
      checkMode: 'auto',
      answer: 'a) 32 cm²   b) 36 cm²   c) 45 cm²',
      parts: [
        {
          label: 'a) A rectangle 8 cm long and 4 cm wide',
          correctAnswer: '32cm²',
          correctAnswers: ['32cm²', '32cm2', '32', '32 cm²', '32 cm2'],
          explanation: 'Area = length × width = 8 × 4 = 32 cm².',
        },
        {
          label: 'b) A square with sides of 6 cm',
          correctAnswer: '36cm²',
          correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'],
          explanation: 'Area = side × side = 6 × 6 = 36 cm².',
        },
        {
          label: 'c) A rectangle 9 cm long and 5 cm wide',
          correctAnswer: '45cm²',
          correctAnswers: ['45cm²', '45cm2', '45', '45 cm²', '45 cm2'],
          explanation: 'Area = length × width = 9 × 5 = 45 cm².',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'An irregular shape on a grid covers 14 full squares and 6 half squares.',
      checkMode: 'auto',
      answer: 'a) 3 square units   b) 17 square units   c) 17 m²',
      parts: [
        {
          label: 'a) How many full square units do the 6 half squares equal?',
          correctAnswer: '3',
          correctAnswers: ['3', '3squareunits', '3 square units'],
          explanation: '6 half squares ÷ 2 = 3 full square units.',
        },
        {
          label: 'b) What is the total area of the shape?',
          correctAnswer: '17',
          correctAnswers: ['17', '17squareunits', '17 square units'],
          explanation: 'Add the full squares and the converted halves: 14 + 3 = 17 square units.',
        },
        {
          label: 'c) Each square represents 1 m². What is the area in square metres?',
          correctAnswer: '17m²',
          correctAnswers: ['17m²', '17m2', '17', '17 m²', '17 m2'],
          explanation: 'Each square unit equals 1 m², so 17 square units = 17 m².',
        },
      ],
    },

    // ── SECTION 3 — Comparing Perimeter and Area ──────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A 3 × 4 rectangle and a 2 × 5 rectangle — which has the bigger area?',
      checkMode: 'self',
      answer: 'The 3 × 4 rectangle has the bigger area. 3 × 4 = 12 cm² and 2 × 5 = 10 cm².',
    },

    {
      difficulty: 'Medium',
      question: 'Compare a 5 × 3 rectangle and a 4 × 4 square.',
      checkMode: 'auto',
      answer: 'a) 16 cm   b) 16 cm   c) 15 cm²   d) 16 cm²',
      parts: [
        {
          label: 'a) What is the perimeter of the rectangle?',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16', '16 cm'],
          explanation: 'Perimeter of rectangle = 5 + 3 + 5 + 3 = 16 cm.',
        },
        {
          label: 'b) What is the perimeter of the square?',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16', '16 cm'],
          explanation: 'Perimeter of square = 4 + 4 + 4 + 4 = 16 cm.',
        },
        {
          label: 'c) What is the area of the rectangle?',
          correctAnswer: '15cm²',
          correctAnswers: ['15cm²', '15cm2', '15', '15 cm²', '15 cm2'],
          explanation: 'Area = 5 × 3 = 15 cm².',
        },
        {
          label: 'd) What is the area of the square?',
          correctAnswer: '16cm²',
          correctAnswers: ['16cm²', '16cm2', '16', '16 cm²', '16 cm2'],
          explanation: 'Area = 4 × 4 = 16 cm².',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'Compare a 5 × 3 rectangle and a 4 × 4 square.',
      checkMode: 'self',
      answer: 'The square has the bigger area. Both shapes have the same perimeter (16 cm), but the square has an area of 16 cm² compared to 15 cm² for the rectangle.',
      parts: [
        {
          label: 'e) Which shape has a bigger area? Explain.',
          correctAnswer: '',
          explanation: 'The square has the bigger area (16 cm²) compared to the rectangle (15 cm²). Both have the same perimeter of 16 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Two shapes both have an area of 24 cm². Shape A is 8 cm long and 3 cm wide. Shape B is 6 cm long and 4 cm wide.',
      checkMode: 'auto',
      answer: 'a) 22 cm   b) 20 cm   c) Shape B',
      parts: [
        {
          label: 'a) What is the perimeter of Shape A?',
          correctAnswer: '22cm',
          correctAnswers: ['22cm', '22', '22 cm'],
          explanation: 'Perimeter of Shape A = 8 + 3 + 8 + 3 = 22 cm.',
        },
        {
          label: 'b) What is the perimeter of Shape B?',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20', '20 cm'],
          explanation: 'Perimeter of Shape B = 6 + 4 + 6 + 4 = 20 cm.',
        },
        {
          label: 'c) Which shape has the smaller perimeter?',
          correctAnswer: 'shapeb',
          correctAnswers: ['shapeb', 'shape b', 'b', 'shapeB', 'Shape B', 'ShapeB'],
          explanation: 'Shape B has the smaller perimeter: 20 cm compared to Shape A\'s 22 cm.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Two shapes both have an area of 24 cm². Shape A is 8 cm long and 3 cm wide. Shape B is 6 cm long and 4 cm wide.',
      checkMode: 'self',
      answer: 'Shapes with the same area can have different perimeters. The closer the shape is to a square, the smaller its perimeter.',
      parts: [
        {
          label: 'd) What do you notice about shapes with the same area but different dimensions?',
          correctAnswer: '',
          explanation: 'Shapes with the same area can have different perimeters. The closer a shape is to a square, the smaller its perimeter.',
        },
      ],
    },

    // ── SECTION 4 — Perimeter and Area Word Problems ───────────────────────────

    {
      difficulty: 'Easy',
      question: 'A square room has sides of 5 m. How many square metre tiles are needed to cover the floor?',
      checkMode: 'auto',
      answer: '25 m²',
      correctAnswer: '25m²',
      correctAnswers: ['25m²', '25m2', '25', '25 m²', '25 m2'],
      explanation: 'Area = side × side = 5 × 5 = 25 m². You need 25 tiles.',
    },

    {
      difficulty: 'Medium',
      question: 'A rectangular sports field is 40 m long and 25 m wide.',
      checkMode: 'auto',
      answer: 'a) 130 m   b) 1 000 m²   c) 1 000 packets',
      parts: [
        {
          label: 'a) What is the perimeter of the field?',
          correctAnswer: '130m',
          correctAnswers: ['130m', '130', '130 m'],
          explanation: 'Perimeter = 40 + 25 + 40 + 25 = 130 m.',
        },
        {
          label: 'b) What is the area of the field?',
          correctAnswer: '1000m²',
          correctAnswers: ['1000m²', '1000m2', '1000', '1000 m²', '1000 m2', '1 000m²', '1 000 m²'],
          explanation: 'Area = 40 × 25 = 1 000 m².',
        },
        {
          label: 'c) Grass seed covers 1 m² per packet. How many packets are needed?',
          correctAnswer: '1000',
          correctAnswers: ['1000', '1000packets', '1 000', '1000 packets', '1 000 packets'],
          explanation: 'One packet covers 1 m², so you need 1 000 packets for 1 000 m².',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A farmer wants to fence a rectangular field and plant it with crops. The field is 15 m long and 9 m wide.',
      checkMode: 'auto',
      answer: 'a) 48 m   b) 135 m²   c) R2 880   d) 45 crops',
      parts: [
        {
          label: 'a) How much fencing is needed?',
          correctAnswer: '48m',
          correctAnswers: ['48m', '48', '48 m'],
          explanation: 'Perimeter = 15 + 9 + 15 + 9 = 48 m.',
        },
        {
          label: 'b) What is the area of the field?',
          correctAnswer: '135m²',
          correctAnswers: ['135m²', '135m2', '135', '135 m²', '135 m2'],
          explanation: 'Area = 15 × 9 = 135 m².',
        },
        {
          label: 'c) Fencing costs R60 per metre. What is the total cost of fencing?',
          correctAnswer: 'R2880',
          correctAnswers: ['R2880', '2880', 'R2 880', 'r2880'],
          explanation: 'Cost = 48 m × R60 = R2 880.',
        },
        {
          label: 'd) Each crop needs 3 m² of space. How many crops can be planted?',
          correctAnswer: '45',
          correctAnswers: ['45', '45crops', '45 crops'],
          explanation: 'Crops = area ÷ space per crop = 135 ÷ 3 = 45 crops.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 31, message: 'Perfect score! You have mastered Perimeter and Area.' },
    { minScore: 24, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 16, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
