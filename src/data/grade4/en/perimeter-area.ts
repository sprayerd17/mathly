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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to identify whether a word problem requires perimeter or area and solve it step by step',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONAL PERIMETER (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundational Perimeter',
      questions: [
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 7 cm and width 3 cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20', '20 cm'], explanation: 'Perimeter = 7 + 3 + 7 + 3 = 20 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 9 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'A square has 4 equal sides. Perimeter = 9 + 9 + 9 + 9 = 36 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a triangle with sides 4 cm, 5 cm and 6 cm.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], explanation: 'Add all three sides: 4 + 5 + 6 = 15 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 12 cm and width 6 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Perimeter = 12 + 6 + 12 + 6 = 36 cm.' },
        { difficulty: 'Medium', question: 'A regular pentagon has 5 equal sides of 8 cm each. Find its perimeter.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'A regular pentagon has 5 equal sides. Perimeter = 8 × 5 = 40 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 15 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Perimeter = 15 + 15 + 15 + 15 = 60 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 20 cm and width 10 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Perimeter = 20 + 10 + 20 + 10 = 60 cm.' },
        { difficulty: 'Medium', question: 'An equilateral triangle has all 3 sides equal to 10 cm. Find its perimeter.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30cm', correctAnswers: ['30cm', '30', '30 cm'], explanation: 'An equilateral triangle has 3 equal sides. Perimeter = 10 × 3 = 30 cm.' },
        { difficulty: 'Medium', question: 'A quadrilateral has sides of 6 cm, 9 cm, 5 cm and 7 cm. Find its perimeter.', answer: '27 cm', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27', '27 cm'], explanation: 'Add all four sides: 6 + 9 + 5 + 7 = 27 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 14 cm and width 8 cm.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44', '44 cm'], explanation: 'Perimeter = 14 + 8 + 14 + 8 = 44 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 11 cm.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44', '44 cm'], explanation: 'Perimeter = 11 + 11 + 11 + 11 = 44 cm.' },
        { difficulty: 'Medium', question: 'An isosceles triangle has two sides of 7 cm and a base of 4 cm. Find its perimeter.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Add all three sides: 7 + 7 + 4 = 18 cm.' },
        { difficulty: 'Medium', question: 'A regular hexagon has 6 equal sides of 6 cm each. Find its perimeter.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'A regular hexagon has 6 equal sides. Perimeter = 6 × 6 = 36 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 25 cm and width 15 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'Perimeter = 25 + 15 + 25 + 15 = 80 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 20 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'Perimeter = 20 + 20 + 20 + 20 = 80 cm.' },
        { difficulty: 'Medium', question: 'An irregular pentagon has sides of 3 cm, 4 cm, 5 cm, 6 cm and 7 cm. Find its perimeter.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'Add all five sides: 3 + 4 + 5 + 6 + 7 = 25 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 18 cm and width 9 cm.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54cm', correctAnswers: ['54cm', '54', '54 cm'], explanation: 'Perimeter = 18 + 9 + 18 + 9 = 54 cm.' },
        { difficulty: 'Medium', question: 'A triangle has sides of 9 cm, 12 cm and 15 cm. Find its perimeter.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Add all three sides: 9 + 12 + 15 = 36 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 13 cm.', answer: '52 cm', checkMode: 'auto', correctAnswer: '52cm', correctAnswers: ['52cm', '52', '52 cm'], explanation: 'Perimeter = 13 + 13 + 13 + 13 = 52 cm.' },
        { difficulty: 'Hard', question: 'A rectangle has a perimeter of 40 cm. Its length is 12 cm. Find its width.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Perimeter = 2 × (length + width), so 40 = 2 × (12 + width). Divide by 2: 20 = 12 + width. Width = 20 − 12 = 8 cm.' },
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 30 cm and width 20 cm.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'Perimeter = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'A square has a perimeter of 48 cm. Find the length of each side.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 48 ÷ 4 = 12 cm.' },
        { difficulty: 'Hard', question: 'A triangle has a perimeter of 22 cm. Two of its sides are 8 cm and 6 cm. Find the length of the third side.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Third side = perimeter − (sum of known sides) = 22 − (8 + 6) = 22 − 14 = 8 cm.' },
        { difficulty: 'Hard', question: 'A rectangle has a perimeter of 54 cm. Its width is 9 cm. Find its length.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Perimeter = 2 × (length + width), so 54 = 2 × (length + 9). Divide by 2: 27 = length + 9. Length = 27 − 9 = 18 cm.' },
        { difficulty: 'Medium', question: 'A regular octagon has 8 equal sides of 5 cm each. Find its perimeter.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'A regular octagon has 8 equal sides. Perimeter = 5 × 8 = 40 cm.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered finding the perimeter of polygons.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on adding side lengths.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — FOUNDATIONAL AREA (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Foundational Area',
      questions: [
        { difficulty: 'Easy', question: 'A rectangle on a grid is 6 squares long and 4 squares wide. Find its area.', answer: '24 square units', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24squareunits', '24 square units', '24cm²', '24cm2', '24 cm²', '24 cm2'], explanation: 'Count or multiply: 6 × 4 = 24 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 8 squares long and 5 squares wide. Find its area.', answer: '40 square units', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40squareunits', '40 square units', '40cm²', '40cm2', '40 cm²', '40 cm2'], explanation: 'Count or multiply: 8 × 5 = 40 square units.' },
        { difficulty: 'Easy', question: 'A square on a grid has 7 squares along each side. Find its area.', answer: '49 square units', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49squareunits', '49 square units', '49cm²', '49cm2', '49 cm²', '49 cm2'], explanation: 'Count or multiply: 7 × 7 = 49 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 10 full squares and 6 half squares. Find its total area.', answer: '13 square units', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13squareunits', '13 square units'], explanation: '6 half squares = 3 full squares. Total = 10 + 3 = 13 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 9 squares long and 3 squares wide. Find its area.', answer: '27 square units', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27squareunits', '27 square units', '27cm²', '27cm2', '27 cm²', '27 cm2'], explanation: 'Count or multiply: 9 × 3 = 27 square units.' },
        { difficulty: 'Easy', question: 'A square on a grid has 6 squares along each side. Find its area.', answer: '36 square units', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36squareunits', '36 square units', '36cm²', '36cm2', '36 cm²', '36 cm2'], explanation: 'Count or multiply: 6 × 6 = 36 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 15 full squares and 8 half squares. Find its total area.', answer: '19 square units', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19squareunits', '19 square units'], explanation: '8 half squares = 4 full squares. Total = 15 + 4 = 19 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 12 squares long and 4 squares wide. Find its area.', answer: '48 square units', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48squareunits', '48 square units', '48cm²', '48cm2', '48 cm²', '48 cm2'], explanation: 'Count or multiply: 12 × 4 = 48 square units.' },
        { difficulty: 'Easy', question: 'A square on a grid has 8 squares along each side. Find its area.', answer: '64 square units', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64squareunits', '64 square units', '64cm²', '64cm2', '64 cm²', '64 cm2'], explanation: 'Count or multiply: 8 × 8 = 64 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 10 squares long and 6 squares wide. Find its area.', answer: '60 square units', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60squareunits', '60 square units', '60cm²', '60cm2', '60 cm²', '60 cm2'], explanation: 'Count or multiply: 10 × 6 = 60 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 20 full squares and 10 half squares. Find its total area.', answer: '25 square units', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25squareunits', '25 square units'], explanation: '10 half squares = 5 full squares. Total = 20 + 5 = 25 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 11 squares long and 5 squares wide. Find its area.', answer: '55 square units', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55squareunits', '55 square units', '55cm²', '55cm2', '55 cm²', '55 cm2'], explanation: 'Count or multiply: 11 × 5 = 55 square units.' },
        { difficulty: 'Easy', question: 'A square on a grid has 9 squares along each side. Find its area.', answer: '81 square units', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '81squareunits', '81 square units', '81cm²', '81cm2', '81 cm²', '81 cm2'], explanation: 'Count or multiply: 9 × 9 = 81 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 18 full squares and 4 half squares. Find its total area.', answer: '20 square units', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20squareunits', '20 square units'], explanation: '4 half squares = 2 full squares. Total = 18 + 2 = 20 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 7 squares long and 6 squares wide. Find its area.', answer: '42 square units', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42squareunits', '42 square units', '42cm²', '42cm2', '42 cm²', '42 cm2'], explanation: 'Count or multiply: 7 × 6 = 42 square units.' },
        { difficulty: 'Easy', question: 'A square on a grid has 10 squares along each side. Find its area.', answer: '100 square units', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100squareunits', '100 square units', '100cm²', '100cm2', '100 cm²', '100 cm2'], explanation: 'Count or multiply: 10 × 10 = 100 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 13 squares long and 2 squares wide. Find its area.', answer: '26 square units', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26squareunits', '26 square units', '26cm²', '26cm2', '26 cm²', '26 cm2'], explanation: 'Count or multiply: 13 × 2 = 26 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 22 full squares and 12 half squares. Find its total area.', answer: '28 square units', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28squareunits', '28 square units'], explanation: '12 half squares = 6 full squares. Total = 22 + 6 = 28 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 4 squares long and 4 squares wide. Find its area.', answer: '16 square units', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16squareunits', '16 square units', '16cm²', '16cm2', '16 cm²', '16 cm2'], explanation: 'Count or multiply: 4 × 4 = 16 square units.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 14 squares long and 3 squares wide. Find its area.', answer: '42 square units', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42squareunits', '42 square units', '42cm²', '42cm2', '42 cm²', '42 cm2'], explanation: 'Count or multiply: 14 × 3 = 42 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 30 full squares and 14 half squares. Find its total area.', answer: '37 square units', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37squareunits', '37 square units'], explanation: '14 half squares = 7 full squares. Total = 30 + 7 = 37 square units.' },
        { difficulty: 'Hard', question: 'A rectangle on a grid has an area of 36 square units. It is 9 squares long. How many squares wide is it?', answer: '4 squares', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4squares', '4 squares'], explanation: 'Width = area ÷ length = 36 ÷ 9 = 4 squares.' },
        { difficulty: 'Hard', question: 'A rectangle on a grid has an area of 48 square units. It is 6 squares wide. How many squares long is it?', answer: '8 squares', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8squares', '8 squares'], explanation: 'Length = area ÷ width = 48 ÷ 6 = 8 squares.' },
        { difficulty: 'Easy', question: 'A rectangle on a grid is 15 squares long and 5 squares wide. Find its area.', answer: '75 square units', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75squareunits', '75 square units', '75cm²', '75cm2', '75 cm²', '75 cm2'], explanation: 'Count or multiply: 15 × 5 = 75 square units.' },
        { difficulty: 'Medium', question: 'An irregular shape on a grid covers 40 full squares and 20 half squares. Find its total area.', answer: '50 square units', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50squareunits', '50 square units'], explanation: '20 half squares = 10 full squares. Total = 40 + 10 = 50 square units.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered finding area by counting square units.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on counting squares.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — COMPARING PERIMETER/AREA & REAL-WORLD WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Comparing & Word Problems',
      questions: [
        { difficulty: 'Medium', question: 'A 5 × 2 rectangle and a 4 × 3 rectangle — which has the bigger area?', answer: 'The 4 × 3 rectangle. 5 × 2 = 10 cm² and 4 × 3 = 12 cm².', checkMode: 'auto', correctAnswer: '4x3', correctAnswers: ['4x3', '4 x 3 rectangle', 'the 4x3 rectangle', '4×3', 'the 4 x 3 rectangle'], explanation: 'Area of 5 × 2 = 10 cm². Area of 4 × 3 = 12 cm². The 4 × 3 rectangle has the bigger area.' },
        { difficulty: 'Medium', question: 'A square with sides of 6 cm and a rectangle 9 cm by 4 cm both have the same area. What is that area?', answer: '36 cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'], explanation: 'Square area = 6 × 6 = 36 cm². Rectangle area = 9 × 4 = 36 cm². Both shapes have an area of 36 cm².' },
        { difficulty: 'Easy', question: 'A garden is 10 m long and 6 m wide. How much fencing is needed to go around the entire garden?', answer: '32 m', checkMode: 'auto', correctAnswer: '32m', correctAnswers: ['32m', '32', '32 m'], explanation: 'Perimeter = 10 + 6 + 10 + 6 = 32 m of fencing.' },
        { difficulty: 'Easy', question: 'A classroom floor is 8 m long and 5 m wide. How many square metre tiles are needed to cover the floor?', answer: '40 m²', checkMode: 'auto', correctAnswer: '40m²', correctAnswers: ['40m²', '40m2', '40', '40 m²', '40 m2'], explanation: 'Area = 8 × 5 = 40 m². You need 40 tiles.' },
        { difficulty: 'Hard', question: 'A square garden has sides of 9 m. Fencing costs R30 per metre. What is the total cost of fencing the garden?', answer: 'R1 080', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', 'r1080'], explanation: 'Perimeter = 9 × 4 = 36 m. Cost = 36 × R30 = R1 080.' },
        { difficulty: 'Medium', question: 'A rectangular field is 50 m long and 30 m wide. Amahle walks around the outside of the field twice. How far does she walk in total?', answer: '320 m', checkMode: 'auto', correctAnswer: '320m', correctAnswers: ['320m', '320', '320 m'], explanation: 'Perimeter = 50 + 30 + 50 + 30 = 160 m. Walking around twice = 160 × 2 = 320 m.' },
        { difficulty: 'Hard', question: 'A room is 7 m long and 4 m wide. Carpet costs R120 per square metre. What is the total cost of carpeting the room?', answer: 'R3 360', checkMode: 'auto', correctAnswer: 'R3360', correctAnswers: ['R3360', '3360', 'R3 360', 'r3360'], explanation: 'Area = 7 × 4 = 28 m². Cost = 28 × R120 = R3 360.' },
        { difficulty: 'Medium', question: 'A rectangle is 3 cm by 8 cm and a square has sides of 5 cm. Which shape has the bigger perimeter?', answer: 'The rectangle. Its perimeter is 22 cm and the square\'s perimeter is 20 cm.', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'the rectangle'], explanation: 'Rectangle perimeter = 3 + 8 + 3 + 8 = 22 cm. Square perimeter = 5 × 4 = 20 cm. The rectangle has the bigger perimeter.' },
        { difficulty: 'Easy', question: 'A wall is 6 m long and 3 m high. What area needs to be painted?', answer: '18 m²', checkMode: 'auto', correctAnswer: '18m²', correctAnswers: ['18m²', '18m2', '18', '18 m²', '18 m2'], explanation: 'Area = 6 × 3 = 18 m².' },
        { difficulty: 'Easy', question: 'A square plot of land has sides of 14 m. How much fencing is needed to enclose it?', answer: '56 m', checkMode: 'auto', correctAnswer: '56m', correctAnswers: ['56m', '56', '56 m'], explanation: 'Perimeter = 14 × 4 = 56 m.' },
        { difficulty: 'Medium', question: 'A picture frame border is a rectangle 30 cm by 20 cm. Find the length of the border.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'Perimeter = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'A rectangular garden is 16 m long and 9 m wide. What area of grass needs to be planted?', answer: '144 m²', checkMode: 'auto', correctAnswer: '144m²', correctAnswers: ['144m²', '144m2', '144', '144 m²', '144 m2'], explanation: 'Area = 16 × 9 = 144 m².' },
        { difficulty: 'Hard', question: 'Shape A is 8 cm by 3 cm and Shape B is 6 cm by 4 cm. Both have the same area. Which shape has the smaller perimeter?', answer: 'Shape B. It has a perimeter of 20 cm compared to Shape A\'s 22 cm.', checkMode: 'auto', correctAnswer: 'shapeb', correctAnswers: ['shapeb', 'shape b', 'b', 'shapeB', 'Shape B', 'ShapeB'], explanation: 'Area of A = 8 × 3 = 24 cm². Area of B = 6 × 4 = 24 cm² (same area). Perimeter of A = 8+3+8+3 = 22 cm. Perimeter of B = 6+4+6+4 = 20 cm. Shape B has the smaller perimeter.' },
        { difficulty: 'Medium', question: 'A swimming pool floor is 12 m long and 7 m wide. It needs to be tiled. What is the area to be tiled?', answer: '84 m²', checkMode: 'auto', correctAnswer: '84m²', correctAnswers: ['84m²', '84m2', '84', '84 m²', '84 m2'], explanation: 'Area = 12 × 7 = 84 m².' },
        { difficulty: 'Medium', question: 'A rectangular yard is 22 m long and 13 m wide. How much fencing is needed to enclose the yard?', answer: '70 m', checkMode: 'auto', correctAnswer: '70m', correctAnswers: ['70m', '70', '70 m'], explanation: 'Perimeter = 22 + 13 + 22 + 13 = 70 m.' },
        { difficulty: 'Easy', question: 'A square field has sides of 18 m. It will be planted with crops. What is the area of the field?', answer: '324 m²', checkMode: 'auto', correctAnswer: '324m²', correctAnswers: ['324m²', '324m2', '324', '324 m²', '324 m2'], explanation: 'Area = 18 × 18 = 324 m².' },
        { difficulty: 'Easy', question: 'A classroom is 9 m long and 6 m wide. Border tape is placed all the way around the edge of the room. How much tape is needed?', answer: '30 m', checkMode: 'auto', correctAnswer: '30m', correctAnswers: ['30m', '30', '30 m'], explanation: 'Perimeter = 9 + 6 + 9 + 6 = 30 m.' },
        { difficulty: 'Hard', question: 'A rectangle is 15 cm by 4 cm and another rectangle is 12 cm by 5 cm. Both have the same area. Which has the bigger perimeter?', answer: 'The 15 cm by 4 cm rectangle. Its perimeter is 38 cm compared to 34 cm for the other rectangle.', checkMode: 'auto', correctAnswer: '15cmby4cm', correctAnswers: ['15cmby4cm', '15 by 4', '15x4', '15 cm by 4 cm', 'the 15 by 4 rectangle'], explanation: 'Both have area 60 cm² (15×4 = 60 and 12×5 = 60). Perimeter of 15×4 = 15+4+15+4 = 38 cm. Perimeter of 12×5 = 12+5+12+5 = 34 cm. The 15 by 4 rectangle has the bigger perimeter.' },
        { difficulty: 'Hard', question: 'A rectangular garden is 16 m by 10 m. Fencing costs R25 per metre. What is the total cost of fencing the garden?', answer: 'R1 300', checkMode: 'auto', correctAnswer: 'R1300', correctAnswers: ['R1300', '1300', 'R1 300', 'r1300'], explanation: 'Perimeter = 16 + 10 + 16 + 10 = 52 m. Cost = 52 × R25 = R1 300.' },
        { difficulty: 'Hard', question: 'A floor is 11 m long and 8 m wide. Tiles cost R50 per square metre. What is the total cost of tiling the floor?', answer: 'R4 400', checkMode: 'auto', correctAnswer: 'R4400', correctAnswers: ['R4400', '4400', 'R4 400', 'r4400'], explanation: 'Area = 11 × 8 = 88 m². Cost = 88 × R50 = R4 400.' },
        { difficulty: 'Medium', question: 'A rectangular flower bed is 7 m long and 5 m wide. Find both the perimeter and the area of the flower bed.', answer: 'Perimeter = 24 m; Area = 35 m²', checkMode: 'auto', correctAnswer: '24m;35m²', correctAnswers: ['24m;35m²', '24 m; 35 m²', 'perimeter=24, area=35', '24;35', '24 m and 35 m²'], explanation: 'Perimeter = 7 + 5 + 7 + 5 = 24 m. Area = 7 × 5 = 35 m².' },
        { difficulty: 'Medium', question: 'A photo frame border is a rectangle 40 cm by 25 cm. Find the length of the border.', answer: '130 cm', checkMode: 'auto', correctAnswer: '130cm', correctAnswers: ['130cm', '130', '130 cm'], explanation: 'Perimeter = 40 + 25 + 40 + 25 = 130 cm.' },
        { difficulty: 'Hard', question: 'A square has sides of 6 cm and a rectangle is 8 cm by 4 cm. Both shapes have the same perimeter. Explain which shape has the bigger area, showing your working.', answer: 'The square has the bigger area. Both shapes have a perimeter of 24 cm (square: 6×4=24; rectangle: 8+4+8+4=24), but the square has an area of 36 cm² while the rectangle has an area of only 32 cm² (8 × 4).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular sports court is 45 m long and 20 m wide. How much fencing is needed to enclose the court?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'Perimeter = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Medium', question: 'A garden path is 6 m long and 2 m wide. It will be covered with square paving stones that are each 1 m². How many paving stones are needed?', answer: '12 paving stones', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12pavingstones', '12 paving stones'], explanation: 'Area = 6 × 2 = 12 m². Since each stone covers 1 m², 12 paving stones are needed.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You can confidently compare perimeter and area and solve real-world problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples on comparing shapes and word problems.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP/COMBINED PROBLEMS & REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step & Reasoning',
      questions: [
        { difficulty: 'Hard', question: 'A rectangular garden is 12 m long and 7 m wide. It has a gate 2 m wide that does not need fencing. How much fencing is needed?', answer: '36 m', checkMode: 'auto', correctAnswer: '36m', correctAnswers: ['36m', '36', '36 m'], explanation: 'Perimeter = 12 + 7 + 12 + 7 = 38 m. Subtract the gate: 38 − 2 = 36 m of fencing needed.' },
        { difficulty: 'Hard', question: 'An L-shaped garden is made up of a rectangle 8 m by 5 m and a smaller rectangle 4 m by 3 m. Find the total area of the garden.', answer: '52 m²', checkMode: 'auto', correctAnswer: '52m²', correctAnswers: ['52m²', '52m2', '52', '52 m²', '52 m2'], explanation: 'Area of large rectangle = 8 × 5 = 40 m². Area of small rectangle = 4 × 3 = 12 m². Total area = 40 + 12 = 52 m².' },
        { difficulty: 'Hard', question: 'A room is 9 m long and 6 m wide. Tiles cost R80 per square metre. What is the total cost of tiling the room?', answer: 'R4 320', checkMode: 'auto', correctAnswer: 'R4320', correctAnswers: ['R4320', '4320', 'R4 320', 'r4320'], explanation: 'Area = 9 × 6 = 54 m². Cost = 54 × R80 = R4 320.' },
        { difficulty: 'Medium', question: 'A rectangular garden is 10 m long and 6 m wide. One of the long sides is against a wall and does not need fencing. How much fencing is needed for the other three sides?', answer: '22 m', checkMode: 'auto', correctAnswer: '22m', correctAnswers: ['22m', '22', '22 m'], explanation: 'The three sides needing fencing are: one length (10 m) and two widths (6 m each). Fencing = 10 + 6 + 6 = 22 m.' },
        { difficulty: 'Hard', question: 'A square patio has sides of 8 m. Inside it, a smaller square patch with sides of 6 m is paved differently. What is the area of the outer border (the part not covered by the smaller square)?', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Outer area = 8 × 8 = 64 m². Inner area = 6 × 6 = 36 m². Border area = 64 − 36 = 28 m².' },
        { difficulty: 'Hard', question: 'Garden A is 15 m by 5 m and Garden B is 12 m by 8 m. Both gardens have the same perimeter. Which garden has the bigger area, and by how much?', answer: 'Garden B has the bigger area, by 21 m². Garden A\'s area is 75 m² and Garden B\'s area is 96 m².', checkMode: 'auto', correctAnswer: 'gardenb,21m²', correctAnswers: ['gardenb,21m²', 'garden b by 21', 'b, 21', 'garden b, 21 m²', 'gardenB21'], explanation: 'Both have perimeter 40 m (15+5+15+5=40 and 12+8+12+8=40). Area A = 15 × 5 = 75 m². Area B = 12 × 8 = 96 m². Garden B has the bigger area, by 96 − 75 = 21 m².' },
        { difficulty: 'Medium', question: 'A farmer has two identical square pens, each with sides of 5 m, fenced separately. Find the total length of fencing used for both pens.', answer: '40 m', checkMode: 'auto', correctAnswer: '40m', correctAnswers: ['40m', '40', '40 m'], explanation: 'Perimeter of one pen = 5 × 4 = 20 m. Two pens = 20 × 2 = 40 m of fencing.' },
        { difficulty: 'Medium', question: 'A house has two rooms: one is 6 m by 4 m and the other is 5 m by 3 m. Find the total floor area of both rooms.', answer: '39 m²', checkMode: 'auto', correctAnswer: '39m²', correctAnswers: ['39m²', '39m2', '39', '39 m²', '39 m2'], explanation: 'Area of room 1 = 6 × 4 = 24 m². Area of room 2 = 5 × 3 = 15 m². Total = 24 + 15 = 39 m².' },
        { difficulty: 'Hard', question: 'A rectangular plot of land is 20 m by 15 m. It is divided into two equal rectangles by a fence built down the middle, parallel to the 15 m side. Find the total length of fencing needed, including the dividing fence.', answer: '85 m', checkMode: 'auto', correctAnswer: '85m', correctAnswers: ['85m', '85', '85 m'], explanation: 'Perimeter of the whole plot = 20 + 15 + 20 + 15 = 70 m. The dividing fence is parallel to the 15 m sides, so it is 15 m long. Total fencing = 70 + 15 = 85 m.' },
        { difficulty: 'Hard', question: 'Explain, using an example with numbers, whether two rectangles can have the same area but different perimeters.', answer: 'Yes. For example, a rectangle that is 4 m by 9 m has an area of 36 m² (4 × 9 = 36) and a perimeter of 26 m (4+9+4+9=26). A rectangle that is 6 m by 6 m also has an area of 36 m² (6 × 6 = 36) but a perimeter of only 24 m (6+6+6+6=24). Both rectangles have the same area but different perimeters.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular garden is 14 m long and 9 m wide. It has one gate that is 3 m wide and does not need fencing. How much fencing is needed?', answer: '43 m', checkMode: 'auto', correctAnswer: '43m', correctAnswers: ['43m', '43', '43 m'], explanation: 'Perimeter = 14 + 9 + 14 + 9 = 46 m. Subtract the gate: 46 − 3 = 43 m of fencing needed.' },
        { difficulty: 'Hard', question: 'A room is 10 m long and 7 m wide. Square metre tiles cost R65 each. What is the total cost of tiling the room?', answer: 'R4 550', checkMode: 'auto', correctAnswer: 'R4550', correctAnswers: ['R4550', '4550', 'R4 550', 'r4550'], explanation: 'Area = 10 × 7 = 70 m². Cost = 70 × R65 = R4 550.' },
        { difficulty: 'Medium', question: 'There are two square gardens: one has sides of 6 m and the other has sides of 10 m. Find the combined perimeter of both gardens.', answer: '64 m', checkMode: 'auto', correctAnswer: '64m', correctAnswers: ['64m', '64', '64 m'], explanation: 'Perimeter of first garden = 6 × 4 = 24 m. Perimeter of second garden = 10 × 4 = 40 m. Combined = 24 + 40 = 64 m.' },
        { difficulty: 'Hard', question: 'A rectangular swimming pool is 8 m by 4 m. It is surrounded by a paved path 1 m wide on all sides, making the total outer rectangle 10 m by 6 m. Find the area of the path only.', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Outer area = 10 × 6 = 60 m². Pool area = 8 × 4 = 32 m². Path area = 60 − 32 = 28 m².' },
        { difficulty: 'Hard', question: 'A square has an area of 36 cm² and a rectangle that is 12 cm by 3 cm also has an area of 36 cm². Explain which shape has the smaller perimeter, and why a square often has a smaller perimeter than other rectangles with the same area.', answer: 'The square has the smaller perimeter. The square (6 cm × 6 cm) has a perimeter of 24 cm (6+6+6+6=24), while the rectangle (12 cm × 3 cm) has a perimeter of 30 cm (12+3+12+3=30). A square usually has a smaller perimeter than other rectangles with the same area because its sides are as equal as possible, so it does not need extra length to "stretch out" the shape.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangular field is 25 m long and 16 m wide. It is divided into two equal sections by a fence parallel to the 16 m side. Find the total length of fencing needed, including the dividing fence.', answer: '98 m', checkMode: 'auto', correctAnswer: '98m', correctAnswers: ['98m', '98', '98 m'], explanation: 'Perimeter of the whole field = 25 + 16 + 25 + 16 = 82 m. The dividing fence is parallel to the 16 m sides, so it is 16 m long. Total fencing = 82 + 16 = 98 m.' },
        { difficulty: 'Medium', question: 'A rectangular room is 16 m long and 5 m wide. One of the 16 m sides is against a wall and does not need fencing. How much fencing is needed for the other three sides?', answer: '26 m', checkMode: 'auto', correctAnswer: '26m', correctAnswers: ['26m', '26', '26 m'], explanation: 'The three sides needing fencing are: one length (16 m) and two widths (5 m each). Fencing = 16 + 5 + 5 = 26 m.' },
        { difficulty: 'Hard', question: 'Two rooms need tiling at R70 per square metre: Room 1 is 6 m by 5 m and Room 2 is 4 m by 4 m. Find the total cost of tiling both rooms.', answer: 'R3 220', checkMode: 'auto', correctAnswer: 'R3220', correctAnswers: ['R3220', '3220', 'R3 220', 'r3220'], explanation: 'Area of Room 1 = 6 × 5 = 30 m². Area of Room 2 = 4 × 4 = 16 m². Total area = 30 + 16 = 46 m². Total cost = 46 × R70 = R3 220.' },
        { difficulty: 'Hard', question: 'Explain why the perimeter of a shape can change even when its area stays exactly the same.', answer: 'The perimeter depends on the shape\'s outline (how the sides are arranged), while the area depends only on how much space is enclosed. Rearranging the same amount of space into a longer, thinner shape increases the perimeter without changing the area, because more outside edge is needed to enclose the same space when it is stretched out.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'An L-shaped room has sides measuring 10 m, 4 m, 6 m, 3 m, 4 m and 7 m going around the outside. Find the perimeter of the room.', answer: '34 m', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34', '34 m'], explanation: 'Add all six sides: 10 + 4 + 6 + 3 + 4 + 7 = 34 m.' },
        { difficulty: 'Hard', question: 'A farmer fences three separate square plots, each with sides of 7 m. Find the total length of fencing needed for all three plots.', answer: '84 m', checkMode: 'auto', correctAnswer: '84m', correctAnswers: ['84m', '84', '84 m'], explanation: 'Perimeter of one plot = 7 × 4 = 28 m. Three plots = 28 × 3 = 84 m of fencing.' },
        { difficulty: 'Hard', question: 'A hall is 24 m long and 15 m wide. Painting the floor costs R45 per square metre. What is the total cost of painting the floor?', answer: 'R16 200', checkMode: 'auto', correctAnswer: 'R16200', correctAnswers: ['R16200', '16200', 'R16 200', 'r16200'], explanation: 'Area = 24 × 15 = 360 m². Cost = 360 × R45 = R16 200.' },
        { difficulty: 'Hard', question: 'A rectangular garden is 18 m by 12 m. It is surrounded on all sides by a path 2 m wide, making the total outer rectangle 22 m by 16 m. Find the area of the path only.', answer: '136 m²', checkMode: 'auto', correctAnswer: '136m²', correctAnswers: ['136m²', '136m2', '136', '136 m²', '136 m2'], explanation: 'Outer area = 22 × 16 = 352 m². Garden area = 18 × 12 = 216 m². Path area = 352 − 216 = 136 m².' },
        { difficulty: 'Hard', question: 'Explain why cutting a shape into pieces and rearranging them does not change the total area, but can change the total perimeter.', answer: 'The total area stays the same because area measures the amount of surface covered, and cutting a shape into pieces does not remove or add any surface — all the original pieces are still there, just arranged differently. The perimeter can change because new cut edges become part of the outside boundary when the pieces are separated or rearranged, and depending on how the pieces are placed, the total outside edge can become longer or shorter than the original shape\'s perimeter.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A rectangle is 4 m by 3 m. If both the length and width are doubled, find the new perimeter and the new area, and compare them to the original.', answer: 'New perimeter = 28 m (doubled from 14 m). New area = 48 m² (quadrupled from 12 m²).', checkMode: 'auto', correctAnswer: '28m;48m²', correctAnswers: ['28m;48m²', '28 m; 48 m²', 'perimeter=28, area=48', '28;48', '28 m and 48 m²'], explanation: 'Original perimeter = 4+3+4+3 = 14 m. Original area = 4 × 3 = 12 m². Doubled rectangle = 8 m by 6 m. New perimeter = 8+6+8+6 = 28 m (exactly double). New area = 8 × 6 = 48 m² (four times as big, since both dimensions doubled).' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Perfect score! You have mastered multi-step perimeter and area problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
